/* globals widgetL10n,jqXHRMiddleware */
/**
 * charcoal/admin/widget
 * This should be the base for all widgets
 * It is still possible to add a widget without passing
 * throught this class, but not suggested
 *
 * @see Component_Manager.render() for automatic call to widget constructor
 *
 * Interface:
 * ## Setters
 * - `set_opts`
 * - `set_id`
 * - `set_element`
 * - `set_type`
 *
 * ## Getters
 * - `opts( ident )`
 * - `id()`
 * - `element()`
 * - `type()`
 *
 * ## Others
 * - `init()`
 * - `reload( callback )`
 */
Charcoal.Admin.Widget = function (opts) {
    this._element  = undefined;
    this._id       = undefined;
    this._type     = undefined;
    this._opts     = undefined;

    if (!opts) {
        return this;
    }

    if (typeof opts.id === 'string') {
        this.set_element($('#' + opts.id));
        this.set_id(opts.id);
    }

    if (typeof opts.type === 'string') {
        this.set_type(opts.type);
        this.widget_type = opts.widget_type || opts.type;
    }

    this.set_opts(opts);

    return this;
};

/**
 * Set options
 * @param {Object} opts
 * @return this (chainable)
 */
Charcoal.Admin.Widget.prototype.set_opts = function (opts) {
    this._opts = opts;

    return this;
};

/**
 * If a ident is specified, the method tries to return
 * the options pointed out.
 * If no ident is specified, the method returns
 * the whole opts object
 *
 * @param {String} ident | falcultative
 * @return {Object|Mixed|false}
 */
Charcoal.Admin.Widget.prototype.opts = function (ident) {
    if (typeof ident === 'string') {
        if (typeof this._opts[ident] === 'undefined') {
            return false;
        }
        return this._opts[ident];
    }

    return this._opts;
};

/**
 * Default init
 * @return this (chainable)
 */
Charcoal.Admin.Widget.prototype.init = function () {
    // Default init. Nothing!
    return this;
};

/**
 *
 */
Charcoal.Admin.Widget.prototype.set_id = function (id) {
    this._id = id;
};

Charcoal.Admin.Widget.prototype.id = function () {
    return this._id;
};

/**
 *
 */
Charcoal.Admin.Widget.prototype.set_type = function (type) {
    //
    this._type = type;

    // Should we update anything? Change the container ID or replace it?
    // Maybe reinit the plugin?
};

Charcoal.Admin.Widget.prototype.type = function () {
    return this._type;
};

/**
 *
 */
Charcoal.Admin.Widget.prototype.set_element = function (elem) {
    this._element = elem;

    return this;
};

/**
 *
 */
Charcoal.Admin.Widget.prototype.element = function () {
    return this._element;
};

/**
 * Default widget options
 * Can be overwritten by widget
 * @return {Object}
 */
Charcoal.Admin.Widget.prototype.widget_options = function () {
    return this.opts();
};

/**
 * Default widget type
 * Can be overwritten by widget
 * @return {String}
 */
Charcoal.Admin.Widget.prototype.widget_type = function () {
    return this.type();
};

/**
 * Called upon save by the component manager
 *
 * @return {boolean} Default action is set to true.
 */
Charcoal.Admin.Widget.prototype.save = function () {
    return true;
};

/**
 * Animate the widget out on reload
 * Use callback to define what to do after the animation.
 *
 * @param  {Function} callback What to do after the anim_out?
 * @return {thisArg}           Chainable
 */
Charcoal.Admin.Widget.prototype.anim_out = function (callback) {
    if (typeof callback !== 'function') {
        callback = function () {
        };
    }
    this.element().fadeOut(400, callback);
    return this;
};

/**
 * @param  {Boolean} [flag] - Whether to supress feedback (TRUE) or not (FALSE).
 * @return {Boolean} Returns the feedback status.
 */
Charcoal.Admin.Widget.prototype.suppress_feedback = function (flag) {
    console.log('♯ Widget.suppress_feedback:', flag)
    if (typeof flag === 'boolean') {
        Charcoal.Admin.Widget.prototype._feedback = !flag;
    }

    return !Charcoal.Admin.Widget.prototype._feedback;
};
Charcoal.Admin.Widget.prototype._feedback = true;

/**
 * @param  {callable} callback - A routine to be called when the reload is resolved.
 * @return {jqXHR} The The jQuery XMLHttpRequest object.
 */
Charcoal.Admin.Widget.prototype.reload = function (callback) {
    var that = this,
        url  = Charcoal.Admin.admin_url() + 'widget/load',
        data = {
            widget_type: that.widget_type || that.type(),
            widget_options: that.widget_options()
        },
        request = {
            type:        'POST',
            url:         url,
            data:        JSON.stringify(data),
            dataType:    'json',
            contentType: 'application/json'
        },
        middleware,
        xhr;

    // Response from the reload action should always include a
    // widget_id and widget_html in order to work accordingly.
    // @todo add nice styles and stuffs.
    xhr = $.ajax(request)
        .then(this.response_parse.bind(this, widgetL10n.loadingFailed))
        .done(this.response_done.bind(this))
        .fail(this.response_fail.bind(this, widgetL10n.loadingFailed));

    console.log('Middleware:', (callback instanceof jqXHRMiddleware), callback);
    if (callback instanceof jqXHRMiddleware) {
        middleware = callback;
        callback   = null;
        console.log('♯ ', middleware);
        middleware.fire(xhr);
    }

    xhr.done(this.reloaded.bind(this, callback))
       .always(this.response_always.bind(this));

    return xhr;
};

/**
 * @param {Callable} callback - A routine to be called when the reload is resolved.
 * @param {Object}   response - The XHR response.
 */
Charcoal.Admin.Widget.prototype.reloaded = function (callback, response) {
    var that = this;
    if (typeof response.widget_id === 'string') {
        that.set_id(response.widget_id);
        that.anim_out(function () {
            var $newWidget = $(response.widget_html).hide();

            that.element().replaceWith($newWidget);
            that.set_element($('#' + that.id()));

            // Pure dompe.
            that.element().fadeIn();
            that.init();
        });
    }

    if (typeof callback === 'function') {
        callback.call(this, response);
    }
};

/**
 * Load the widget into a dialog
 */
Charcoal.Admin.Widget.prototype.dialog = function (dialog_opts, callback) {
    var title       = dialog_opts.title || '',
        type        = dialog_opts.type || BootstrapDialog.TYPE_DEFAULT,
        size        = dialog_opts.size || BootstrapDialog.SIZE_NORMAL,
        cssClass    = dialog_opts.cssClass || '',
        showHeader  = dialog_opts.showHeader || true,
        showFooter  = dialog_opts.showFooter || true,
        userOptions = dialog_opts.dialog_options || {};

    delete dialog_opts.title;
    delete dialog_opts.type;
    delete dialog_opts.size;
    delete dialog_opts.cssClass;
    delete dialog_opts.dialog_options;

    var defaultOptions = {
        title: title,
        type: type,
        size: size,
        cssClass: cssClass,
        nl2br: false,
        showHeader: showHeader,
        showFooter: showFooter,
        onshown: function () {
            Charcoal.Admin.manager().render();
        }
    };

    var dialogOptions = $.extend({}, defaultOptions, userOptions);
    var alertTemplate = '<div class="alert alert-{type}" role="alert">{text}</div>';

    dialogOptions.message = function (dialog) {
        var xhr,
            url      = Charcoal.Admin.admin_url() + 'widget/load',
            data     = dialog_opts,
            $message = $(
                alertTemplate.replaceMap({
                    '{type}': 'warning',
                    '{text}': widgetL10n.loading
                })
            );

        if (!showHeader) {
            dialog.getModalHeader().addClass('hidden');
        }

        if (!showFooter) {
            dialog.getModalFooter().addClass('hidden');
        }

        dialog.getModalBody().on(
            'click.charcoal.bs.dialog',
            '[data-dismiss="dialog"]',
            { dialog: dialog },
            function (event) {
                event.data.dialog.close();
            }
        );

        xhr = $.ajax({
            method:   'POST',
            url:      url,
            data:     data,
            dataType: 'json'
        });

        xhr.then(this.response_parse.bind(this, widgetL10n.loadingFailed))
           .done(function (response/*, textStatus, jqXHR*/) {
                dialog.setMessage(response.widget_html);

                if (typeof callback === 'function') {
                    callback(response);
                }

                $('[data-toggle="tooltip"]', dialog.getModalBody()).tooltip();
           })
           .fail(function (jqXHR, textStatus, errorThrown) {
                dialog.setType(BootstrapDialog.TYPE_DANGER);
                dialog.setMessage(widgetL10n.loadingFailed);

                var errorHtml = '';

                if ($.type(errorThrown) === 'string') {
                    if (jqXHR.responseJSON && jqXHR.responseJSON.feedbacks) {
                        errorThrown = jqXHR.responseJSON.feedbacks;
                    }
                }

                if ($.isArray(errorThrown)) {
                    $.each(errorThrown, function (i, error) {
                        if (error.message) {
                            if (error.level === 'error') {
                                error.level = 'danger';
                            }
                            errorHtml += alertTemplate.replaceMap({
                                '{type}': error.level,
                                '{text}': error.message
                            });
                        }
                    });
                } else if ($.type(errorThrown) === 'string') {
                    errorHtml = alertTemplate.replaceMap({
                        '{type}': 'danger',
                        '{text}': errorThrown
                    });
                }

                if (errorHtml) {
                    dialog.setMessage(errorHtml);
                }

                $('[data-toggle="tooltip"]', dialog.getModalBody()).tooltip();
           });

        return $message;
    };

    return new BootstrapDialog.show(dialogOptions);
};

Charcoal.Admin.Widget.prototype.confirm = function (dialog_opts, confirmed_callback, cancel_callback) {
    var defaults = {
        type:     BootstrapDialog.TYPE_DANGER,
        callback: function (result) {
            if (result) {
                if (typeof confirmed_callback === 'function') {
                    confirmed_callback();
                }
            } else {
                if (typeof cancel_callback === 'function') {
                    cancel_callback();
                }
            }
        }
    };

    var opts = $.extend(defaults, dialog_opts);

    BootstrapDialog.confirm(opts);
};

Charcoal.Admin.Widget.prototype.response_parse = function (errorMessage, response, textStatus, jqXHR) {
    console.log('♯ Widget.XHR.Parse'/*, arguments*/);
    if (!response || !response.success || response.error) {
        return $.Deferred().reject(jqXHR, textStatus, response.feedbacks || response.message || errorMessage);
    }

    return $.Deferred().resolve(response, textStatus, jqXHR);
};

Charcoal.Admin.Widget.prototype.response_done = function (response/* textStatus, jqXHR */) {
    console.log('♯ Widget.XHR.Done'/*, arguments*/);
    if (response.feedbacks) {
        Charcoal.Admin.feedback(response.feedbacks);
    }

    if (response.next_url) {
        // @todo "dynamise" the label
        Charcoal.Admin.feedback().add_action({
            label: commonL10n.continue,
            callback: function () {
                window.location.href = Charcoal.Admin.admin_url() + response.next_url;
            }
        });
    }
};

Charcoal.Admin.Widget.prototype.response_fail = function (message, jqXHR, textStatus, errorThrown) {
    console.log('♯ Widget.XHR.Fail'/*, arguments*/);
    if (jqXHR.responseJSON && jqXHR.responseJSON.feedbacks) {
        Charcoal.Admin.feedback(jqXHR.responseJSON.feedbacks);
    } else {
        var error = errorThrown || commonL10n.errorOccurred;

        Charcoal.Admin.feedback([{
            message: commonL10n.errorTemplate.replaceMap({
                '[[ errorMessage ]]': message,
                '[[ errorThrown ]]':  error
            }),
            level: 'error'
        }]);
    }
};

Charcoal.Admin.Widget.prototype.response_always = function (/*, .... */) {
    console.log('♯ Widget.XHR.Always'/*, Charcoal.Admin.Widget.prototype._feedback, arguments*/);
    if (Charcoal.Admin.Widget.prototype._feedback === true) {
        Charcoal.Admin.feedback().dispatch();
    } else {
        Charcoal.Admin.Widget.prototype._feedback = true;
    }
};
