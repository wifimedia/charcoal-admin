/**
 * Deferred Object
 *
 * Provides a way to register multiple callbacks into self-managed callback queues
 *
 * @link https://api.jquery.com/jQuery.Deferred/
 */

/**
 * Creates a new Deferred Object.
 *
 * @class
 * @classdesc A class wrapper for {@see https://api.jquery.com/jQuery.Deferred/ jQuery's deferred object}.
 * @augments  jQuery.Deferred
 */
$(function () {
    window.jqDeferred = function () {};
    jqDeferred.prototype = $.Deferred();
});
