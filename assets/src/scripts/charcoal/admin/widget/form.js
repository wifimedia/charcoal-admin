/**
 * Form widget that manages data sending
 * charcoal/admin/widget/form
 *
 * Require:
 * - jQuery
 * - Boostrap3-Dialog
 *
 * @param  {Object}  opts Options for widget
 */

Charcoal.Admin.Widget_Form = function (opts)
{
    this.widget_type = 'charcoal/admin/widget/form';

    // Widget_Form properties
    this.widget_id         = null;
    this.obj_type          = null;
    this.obj_id            = null;
    this.invalid_controls  = {};
    this.form_selector     = null;
    this.tabpanel_selector = null;
    this.tablist_selector  = null;
    this.tab_working       = false;
    this.suppress_feedback = false;
    this.is_new_object     = false;
    this.xhr               = null;

    this.lang_selector       = null;
    this.langswitch_selector = null;
    this.langlist_selector   = null;

    this.set_properties(opts).bind_events();
};
Charcoal.Admin.Widget_Form.prototype = Object.create(Charcoal.Admin.Widget.prototype);
Charcoal.Admin.Widget_Form.prototype.constructor = Charcoal.Admin.Widget_Form;
Charcoal.Admin.Widget_Form.prototype.parent = Charcoal.Admin.Widget.prototype;

Charcoal.Admin.Widget_Form.prototype.set_properties = function (opts)
{
    this.widget_id         = opts.id || this.widget_id;
    this.obj_type          = opts.data.obj_type || this.obj_type;
    this.obj_id            = Charcoal.Admin.parseNumber(opts.data.obj_id || this.obj_id);
    this.form_selector     = opts.data.form_selector || this.form_selector;
    this.tabpanel_selector = '[role="tabpanel"]';
    this.tablist_selector  = '#form_tabs_' + this.widget_id;
    this.tab_selector      = '[role="tab"]';
    this.isTab             = opts.data.tab;

    this.lang_selector       = '[data-lang]';
    this.langswitch_selector = '[data-lang-switch]';
    this.langlist_selector   = '.c-toggle_lang';

    this.switch_language($('html').attr('data-locale'));

    return this;
};

Charcoal.Admin.Widget_Form.prototype.bind_events = function ()
{
    var that  = this,
        $form = $(that.form_selector);

    // Submit the form via ajax
    $form.on({
        submit: function (event) {
            event.preventDefault();
            that.submit_form(this);
        },
        validated: function (event) {
            var firstInvalid, invalidElements, element, i,
                $tab, $tabs, tabId, hasTabs, perTabCount,
                $locales, localeId, hasLocales, perLocaleCount;

            firstInvalid    = event.firstInvalidElement || event.originalEvent.firstInvalidElement;
            invalidElements = event.invalidElements || event.originalEvent.invalidElements;
            $tabs           = $(that.tab_selector, that.tablist_selector);
            hasTabs         = $tabs.length;
            perTabCount     = {};
            $locales        = $(that.langswitch_selector, that.langlist_selector);
            hasLocales      = $locales.length;
            perLocaleCount  = {};

            if (invalidElements.length) {
                for (i = invalidElements.length - 1; i >= 0; i--) {
                    element = invalidElements[i];

                    if (hasTabs) {
                        $tab = that.get_tab_of(element, $tabs);

                        if ($tab.length) {
                            tabId = $tab.attr('aria-controls');
                            if (!perTabCount[tabId]) {
                                perTabCount[tabId] = 1;
                            } else {
                                perTabCount[tabId]++;
                            }
                        }
                    }

                    if (hasLocales) {
                        localeId = that.get_lang_of(element);
                        if (localeId) {
                            if (!perLocaleCount[localeId]) {
                                perLocaleCount[localeId] = 1;
                            } else {
                                perLocaleCount[localeId]++;
                            }
                        }
                    }
                }
            }

            $tabs.each(function () {
                var $this = $(this),
                    ident = $this.attr('aria-controls');

                if (perTabCount[ident]) {
                    $this.parent().addClass('has-error');
                    $this.children('.badge').addClass('badge-danger').text(perTabCount[ident]);
                } else {
                    $this.parent().removeClass('has-error');
                    $this.children('.badge').removeClass('badge-danger').empty();
                }
            });

            $locales.each(function () {
                var $this = $(this),
                    ident = $this.data('lang-switch');

                if (perLocaleCount[ident]) {
                    $this.children('.badge').addClass('badge-danger').text(perLocaleCount[ident]);
                } else {
                    $this.children('.badge').removeClass('badge-danger').empty();
                }
            });

            if (firstInvalid) {
                that.focus_element(firstInvalid, $tabs);
            } else {
                that.switch_language();
            }
        }
    });

    $('.form-field [id][name]:input', $form).on({
        invalid: function (event) {
            var $input = $(event.target),
                $field = $input.closest('.form-field');

            $field.addClass('has-error').attr('aria-invalid', true);

            if ($field.data('lang')) {
                $field.closest('.form-group')
                        .find('.active-lang [data-lang="' + $field.data('lang') + '"]')
                            .addClass('is-invalid');
            }
        },
        valid: function (event) {
            var $input = $(event.target),
                $field = $input.closest('.form-field');

            if ($field.hasClass('has-error')) {
                $field.removeClass('has-error').removeAttr('aria-invalid');

                if ($field.data('lang')) {
                    $field.closest('.form-group')
                            .find('.active-lang [data-lang="' + $field.data('lang') + '"]')
                                .removeClass('is-invalid');
                }
            }
        }
    });

    // Any delete button should trigger the delete-object method.
    $('.js-obj-delete').on('click', function (event) {
        event.preventDefault();
        that.delete_object(this);
    });

    // Reset button
    $('.js-reset-form').on('click', function (event) {
        event.preventDefault();
        $(that.form_selector)[0].reset();
    });

    // Language switcher
    $('.js-lang-switch').on('click.charcoal.locale', '[data-lang-switch]', function (event) {
        event.preventDefault();

        that.switch_language($(this).data('lang-switch'));
    });

    /*if (that.isTab) {
        $(that.form_selector).on('click', '.js-group-tabs', function (event) {
            event.preventDefault();
            var href = $(this).attr('href');
            $(that.form_selector).find('.js-group-tab').addClass('hidden');
            $(that.form_selector).find('.js-group-tab.' + href).removeClass('hidden');
            $(this).parent().addClass('active').siblings('.active').removeClass('active');
        });
    }*/

};

/**
 * @see    Charcoal.Admin.Widget_Quick_Form.prototype.submit_form()
 * @param  Element form - The submitted form.
 * @return self
 */
Charcoal.Admin.Widget_Form.prototype.submit_form = function (form)
{
    // console.group('Submitted', form.id);
    // console.log('Form', form);

    if (this.form_working) {
        // console.groupEnd();
        return;
    }

    this.form_working = true;

    this.is_new_object = !this.obj_id;

    var $trigger, $form, form_data;

    $form    = $(form);
    $trigger = $form.find('[type="submit"]');

    if ($trigger.prop('disabled')) {
        // console.groupEnd();
        return false;
    }

    // Let the component manager prepare the submit first
    // Calls the save function on each properties
    Charcoal.Admin.manager().prepare_submit();

    form_data = new FormData(form);

    this.disable_form($form, $trigger);

    // Use this loop if ever cascading checkbox inputs end up not
    // working properly in checkbox.mustache
    // $form.find('input[type="checkbox"]').each(function () {
    //     var $input = $(this);
    //     var inputName = $input.attr('name');

    //     // Prevents affecting switch type radio inputs
    //     if (typeof inputName !== 'undefined') {b
    //         if (!form_data.has(inputName)) {
    //             form_data.set(inputName, '');
    //         }
    //     }
    // });

    this.xhr = $.ajax({
        type:        'POST',            // ($form.prop('method') || 'POST')
        url:         this.request_url(),  // ($form.data('action') || this.request_url())
        data:        form_data,
        dataType:    'json',
        processData: false,
        contentType: false,
    });

    this.xhr
        .then($.proxy(this.request_done, this, $form, $trigger))
        .done($.proxy(this.request_success, this, $form, $trigger))
        .fail($.proxy(this.request_failed, this, $form, $trigger))
        .always($.proxy(this.request_complete, this, $form, $trigger));

    // console.groupEnd();
};

Charcoal.Admin.Widget_Form.prototype.request_done = function ($form, $trigger, response, textStatus, jqXHR)
{
    if (!response || !response.success) {
        if (response.feedbacks) {
            return $.Deferred().reject(jqXHR, textStatus, response.feedbacks);
        } else {
            return $.Deferred().reject(jqXHR, textStatus, 'An unknown error occurred.');
        }
    }

    return $.Deferred().resolve(response, textStatus, jqXHR);
};

Charcoal.Admin.Widget_Form.prototype.request_success = function ($form, $trigger, response/* textStatus, jqXHR */)
{
    if (response.feedbacks) {
        Charcoal.Admin.feedback().add_data(response.feedbacks);
    }

    if (response.next_url) {
        // @todo "dynamise" the label
        Charcoal.Admin.feedback().add_action({
            label:    'Continuer',
            callback: function () {
                window.location.href =
                    Charcoal.Admin.admin_url() +
                    response.next_url;
            }
        });
    }

    if (this.is_new_object) {
        this.suppress_feedback = true;

        if (response.next_url) {
            window.location.href =
                Charcoal.Admin.admin_url() +
                response.next_url;
        } else {
            window.location.href =
                Charcoal.Admin.admin_url() +
                'object/edit?obj_type=' + this.obj_type +
                '&obj_id=' + response.obj_id;
        }
    }
};

Charcoal.Admin.Widget_Form.prototype.request_failed = function ($form, $trigger, jqXHR, textStatus, errorThrown)
{
    if (jqXHR.responseJSON && jqXHR.responseJSON.feedbacks) {
        Charcoal.Admin.feedback().add_data(jqXHR.responseJSON.feedbacks);
    } else {
        var message = (this.is_new_object ? 'The object could not be saved: ' : 'The object could not be updated: ');
        var error   = errorThrown || 'Unknown Error';

        Charcoal.Admin.feedback().add_data([{
            level: message + error,
            msg:   'error'
        }]);
    }
};

Charcoal.Admin.Widget_Form.prototype.request_complete = function ($form, $trigger/*, .... */)
{
    if (!this.suppress_feedback) {
        Charcoal.Admin.feedback().call();
        this.enable_form($form, $trigger);
    }

    this.form_working = this.is_new_object = this.suppress_feedback = false;
};

/**
 * @param  Element $form    The submitted form.
 * @param  Element $trigger The form's submit button.
 * @return self
 */
Charcoal.Admin.Widget_Form.prototype.disable_form = function ($form, $trigger)
{
    if ($form) {
        $form.prop('disabled', true);
    }

    if ($trigger) {
        $trigger.prop('disabled', true)
            .children('.glyphicon').removeClass('hidden')
            .next('.btn-label').addClass('sr-only');
    }

    return this;
};

/**
 * @param  Element $form    The submitted form.
 * @param  Element $trigger The form's submit button.
 * @return self
 */
Charcoal.Admin.Widget_Form.prototype.enable_form = function ($form, $trigger)
{
    if ($form) {
        $form.prop('disabled', false);
    }

    if ($trigger) {
        $trigger.prop('disabled', false)
            .children('.glyphicon').addClass('hidden')
            .next('.btn-label').removeClass('sr-only');
    }

    return this;
};

/**
 * @param  HTMLElement element - A form control.
 * @param  HTMLElement[] tabs  - The tabs related to the given element's container.
 * @return void
 */
Charcoal.Admin.Widget_Form.prototype.focus_element = function (element, tabs)
{
    if (!(element instanceof window.HTMLElement)) {
        throw new Error('Must be an HTML element');
    }

    var $element = $(element),
        $field   = $element.closest('.form-field'),
        locale   = $field.data('lang'),
        $panel   = null,
        $tab     = null,
        $tabs    = [];

    // if (locale !== Charcoal.Admin.lang) {
    this.switch_language(locale);
    // }

    if (!tabs) {
        $tabs = $(tabs);
    } else {
        $tabs = $(this.tab_selector, this.tablist_selector);
    }

    if ($tabs.length) {
        $panel = this.get_tabpanel_of(element, $tabs);
        $tab   = this.get_tab_of($panel[0], $tabs);

        if (!$panel.hasClass('active')) {
            $tab.tab('show');
        }
    }
};

/**
 * @param  HTMLElement   element - An element of a tab-panel.
 * @param  HTMLElement[] tabs    - A collection of related tabs.
 * @return HTMLElement|null Returns the tab-panel container or NULL.
 */
Charcoal.Admin.Widget_Form.prototype.get_tabpanel_of = function (element, tabs)
{
    if (!(element instanceof window.HTMLElement)) {
        throw new Error('Must be an HTML element');
    }

    var $element = $(element), $tabs = [];

    if ($element.is(this.tabpanel_selector)) {
        return $element;
    }

    $tabs = ($.isArray(tabs) ? $(tabs) : $(this.tab_selector, this.tablist_selector));
    if ($tabs.length) {
        return $element.closest(this.tabpanel_selector);
    }

    return $();
};

/**
 * @param  HTMLElement   element - A form control or tab-panel.
 * @param  HTMLElement[] tabs    - A collection of related tabs.
 * @return HTMLElement|null Returns the tab related to the element's tab-panel or NULL.
 */
Charcoal.Admin.Widget_Form.prototype.get_tab_of = function (element, tabs)
{
    if (!(element instanceof window.HTMLElement)) {
        throw new Error('Must be an HTML element');
    }

    var $element = $(element), $panel = null, $tabs = [];

    if ($element.is(this.tab_selector)) {
        return $element;
    }

    $panel = this.get_tabpanel_of(element, tabs);
    if ($panel.length) {
        $tabs = ($.isArray(tabs) ? $(tabs) : $(this.tab_selector, this.tablist_selector));
        if ($tabs.length) {
            return $tabs.first('[aria-controls="' + $panel.attr('id') + '"]');
        }
    }

    return $();
};

/**
 * @param  HTMLElement element - A localized element.
 * @return string|null Returns the locale related to the element or NULL.
 */
Charcoal.Admin.Widget_Form.prototype.get_lang_of = function (element)
{
    if (!(element instanceof window.HTMLElement)) {
        throw new Error('Must be an HTML element');
    }

    var $element = $(element);

    if ($element.is(this.lang_selector)) {
        return $element.data('lang');
    }

    return $element.closest(this.lang_selector).data('lang');
};

/**
 * @return string The requested URL for processing the form.
 */
Charcoal.Admin.Widget_Form.prototype.request_url = function ()
{
    if (this.is_new_object) {
        return Charcoal.Admin.admin_url() + 'object/save';
    } else {
        return Charcoal.Admin.admin_url() + 'object/update';
    }
};

/**
 * Handle the "delete" button / action.
 */
Charcoal.Admin.Widget_Form.prototype.delete_object = function (/* form */)
{
    var that = this;
    //console.debug(form);
    BootstrapDialog.confirm({
        title: 'Confirmer la suppression',
        type: BootstrapDialog.TYPE_DANGER,
        message:'Êtes-vous sûr de vouloir supprimer cet objet? Cette action est irréversible.',
        btnOKLabel: 'Supprimer',
        btnCancelLabel: 'Annuler',
        callback: function (result) {
            if (result) {
                var url = Charcoal.Admin.admin_url() + 'object/delete';
                var data = {
                    obj_type: that.obj_type,
                    obj_id: that.obj_id
                };
                $.ajax({
                    method: 'POST',
                    url: url,
                    data: data,
                    dataType: 'json'
                }).done(function (response) {
                    //console.debug(response);
                    if (response.success) {
                        var url = Charcoal.Admin.admin_url() + 'object/collection?obj_type=' + that.obj_type;
                        window.location.href = url;
                    } else {
                        window.alert('Erreur. Impossible de supprimer cet objet.');
                    }
                });
            }
        }
    });
};

/**
* Switch languages for all l10n elements in the form
*/
Charcoal.Admin.Widget_Form.prototype.switch_language = function (lang)
{
    if (typeof lang === 'string') {
        Charcoal.Admin.lang = lang;
        $('html').attr('data-locale', lang);
    } else {
        lang = Charcoal.Admin.lang;
    }

    var $component = $(this.langlist_selector),
        $switchers = $(this.langswitch_selector);

    if ($component.hasClass('-dropdown')) {
        var $label  = $('.dropdown-label', $component),
            $locale = $switchers.filter('[data-lang-switch=' + lang + ']');

        $switchers.filter('[data-lang-switch!=' + lang + ']').parent().removeClass('active');
        $locale.parent().addClass('active');

        $label.html($locale.html());
    } else {
        $switchers.filter('[data-lang-switch!=' + lang + ']')
            .removeClass('btn-info')
            .addClass('btn-default');

        $switchers.filter('[data-lang-switch=' + lang + ']')
            .removeClass('btn-default')
            .addClass('btn-info');
    }
};
