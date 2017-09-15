/**
 * Deferred Callbacks
 *
 * A multi-purpose callbacks list object that provides a powerful way to manage callback lists.
 *
 * @link https://api.jquery.com/jQuery.Callbacks/
 */

/**
 * Creates a new Callbacks List.
 *
 * @class
 * @classdesc A class wrapper for {@see https://api.jquery.com/jQuery.Callbacks/ jQuery's callbacks list object}.
 * @augments  jQuery.Callbacks
 * @param     {?(Function|Function[])} [callbacks] - One or more functions,
 *     that are to be added to the callback list.
 */
$(function () {
    window.jqCallbacks = function (callbacks) {};
    jqCallbacks.prototype = $.Callbacks('unique memory stopOnFalse');
    jqCallbacks.prototype.constructor = jqCallbacks.prototype.add;
});
