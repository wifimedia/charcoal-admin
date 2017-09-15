/**
 * Creates a new XHR Middleware.
 *
 * @class
 * @classdesc A class wrapper for {@see https://api.jquery.com/jQuery.Callbacks/ jQuery's callbacks list object}.
 * @augments  jQuery.Callbacks
 * @param     {?(Function|Function[])} [callbacks] - One or more functions,
 *     that are to be added to the callback list.
 */
$(function () {
    window.jqXHRMiddleware = function (callbacks) {};
    jqXHRMiddleware.prototype = $.Callbacks('unique memory stopOnFalse');
    jqXHRMiddleware.prototype.constructor = jqXHRMiddleware.prototype.add;
});
