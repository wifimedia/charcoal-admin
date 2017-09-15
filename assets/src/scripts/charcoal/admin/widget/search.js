/* globals jqXHRMiddleware */
/**
 * Search widget used for filtering a list
 * charcoal/admin/widget/search
 *
 * Require:
 * - jQuery
 *
 * @param  {Object}  opts Options for widget
 */
Charcoal.Admin.Widget_Search = function (opts)
{
    this._elem       = undefined;
    this._searching  = false;
    this._middleware = null;

    if (!opts) {
        return false;
    }

    if (typeof opts.id === 'undefined') {
        return false;
    }

    this.set_element($('#' + opts.id));

    if (typeof opts.data !== 'object') {
        return false;
    }

    this.opts   = opts;
    this.$input = null;

    return this;
};

Charcoal.Admin.Widget_Search.prototype = Object.create(Charcoal.Admin.Widget.prototype);
Charcoal.Admin.Widget_Search.prototype.constructor = Charcoal.Admin.Widget_Search;
Charcoal.Admin.Widget_Search.prototype.parent = Charcoal.Admin.Widget.prototype;
Charcoal.Admin.Widget_Search.prototype.suppress_feedback = Charcoal.Admin.Widget.prototype.suppress_feedback;

/**
 * @param  {Boolean} [flag] - Whether to the widget is searching (TRUE) or not (FALSE).
 * @return {Boolean} Returns the feedback status.
 */
Charcoal.Admin.Widget_Search.prototype.searching = function (flag) {
    if (typeof flag === 'boolean') {
        this._searching = flag;
    }

    return this._searching;
};

/**
 * @return {jqXHRMiddleware} Returns the XHR middleware.
 */
Charcoal.Admin.Widget_Search.prototype.middleware = function () {
    if (this._middleware === null) {
        var that = this;
        this._middleware = new jqXHRMiddleware;
        this._middleware.add(function (xhr) {
            console.log('❯ Search.Middleware');
            xhr.fail(function () {
                console.log('❯ Search.Middleware.Fail');
                that.suppress_feedback(false);
            });
        });
    }

    return this._middleware;
};

/**
 * Whats the widget that should be refreshed?
 * A list, a table? Definition of a widget includes:
 * - Widget type
 */
Charcoal.Admin.Widget_Search.prototype.set_remote_widget = function ()
{
    // Do something about this.
};

Charcoal.Admin.Widget_Search.prototype.init = function ()
{
    var that  = this,
        $form = this.element();

    this.$input = $form.find('[name="query"]');

    // Submit
    $form.on('submit.charcoal.search', function (event) {
        console.log('search.submit', event);
        event.preventDefault();
        that.submit();
    });

    // Undo
    $form.on('reset.charcoal.search', function (event) {
        console.log('search.reset', event);
        event.preventDefault();
        that.clear();
    });
};

/**
 * Submit the search filters as expected to all widgets
 * @return this (chainable);
 */
Charcoal.Admin.Widget_Search.prototype.submit = function ()
{
    if (this.searching()) {
        return;
    }

    var manager = Charcoal.Admin.manager();
    var widgets = manager.components.widgets;

    var i = 0;
    var total = widgets.length;
    for (; i < total; i++) {
        this.dispatch(widgets[i]);
    }

    return this;
};

/**
 * Resets the search filters
 * @return this (chainable);
 */
Charcoal.Admin.Widget_Search.prototype.clear = function ()
{
    this.$input.val('');
    this.submit();
    return this;
};

/**
 * Dispatches the event to all widgets that can listen to it
 * @return this (chainable)
 */
Charcoal.Admin.Widget_Search.prototype.dispatch = function (widget)
{
    if (!widget) {
        return this;
    }

    if (typeof widget.add_filter !== 'function') {
        return this;
    }

    if (typeof widget.pagination !== 'undefined') {
        widget.pagination.page = 1;
    }

    widget.element().addClass('is-pending');

    var xhr, query, words, props, filters = [], that = this;

    query = this.$input.val().trim();
    if (query) {
        words = query.split(/\s/);
        props = this.opts.data.list || [];

        $.each(words, function (i, word) {
            $.each(props, function (j, prop) {
                filters.push({
                    val:      '%' + word + '%',
                    property: prop,
                    operator: 'LIKE',
                    operand:  'OR'
                });
            });
        });
    }

    widget.set_filters(filters);

    // widget.add_search(val, props);

    this.searching(true);
    this.suppress_feedback(true);

    xhr = widget.reload(this.middleware());
    xhr.always(function () {
        console.log('❯ Always?');
        that.searching(false);
    })

    return this;
};
