/* ========================================================================
 * bootstrap-switch - v3.3.2
 * http://www.bootstrap-switch.org
 * ========================================================================
 * Copyright 2012-2013 Mattia Larentis
 *
 * ========================================================================
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================================
 */

(function(){var t=[].slice;!function(e,i){"use strict";var n;return n=function(){function t(t,i){null==i&&(i={}),this.$element=e(t),this.options=e.extend({},e.fn.bootstrapSwitch.defaults,{state:this.$element.is(":checked"),size:this.$element.data("size"),animate:this.$element.data("animate"),disabled:this.$element.is(":disabled"),readonly:this.$element.is("[readonly]"),indeterminate:this.$element.data("indeterminate"),inverse:this.$element.data("inverse"),radioAllOff:this.$element.data("radio-all-off"),onColor:this.$element.data("on-color"),offColor:this.$element.data("off-color"),onText:this.$element.data("on-text"),offText:this.$element.data("off-text"),labelText:this.$element.data("label-text"),handleWidth:this.$element.data("handle-width"),labelWidth:this.$element.data("label-width"),baseClass:this.$element.data("base-class"),wrapperClass:this.$element.data("wrapper-class")},i),this.$wrapper=e("<div>",{"class":function(t){return function(){var e;return e=[""+t.options.baseClass].concat(t._getClasses(t.options.wrapperClass)),e.push(t.options.state?""+t.options.baseClass+"-on":""+t.options.baseClass+"-off"),null!=t.options.size&&e.push(""+t.options.baseClass+"-"+t.options.size),t.options.disabled&&e.push(""+t.options.baseClass+"-disabled"),t.options.readonly&&e.push(""+t.options.baseClass+"-readonly"),t.options.indeterminate&&e.push(""+t.options.baseClass+"-indeterminate"),t.options.inverse&&e.push(""+t.options.baseClass+"-inverse"),t.$element.attr("id")&&e.push(""+t.options.baseClass+"-id-"+t.$element.attr("id")),e.join(" ")}}(this)()}),this.$container=e("<div>",{"class":""+this.options.baseClass+"-container"}),this.$on=e("<span>",{html:this.options.onText,"class":""+this.options.baseClass+"-handle-on "+this.options.baseClass+"-"+this.options.onColor}),this.$off=e("<span>",{html:this.options.offText,"class":""+this.options.baseClass+"-handle-off "+this.options.baseClass+"-"+this.options.offColor}),this.$label=e("<span>",{html:this.options.labelText,"class":""+this.options.baseClass+"-label"}),this.$element.on("init.bootstrapSwitch",function(e){return function(){return e.options.onInit.apply(t,arguments)}}(this)),this.$element.on("switchChange.bootstrapSwitch",function(e){return function(){return e.options.onSwitchChange.apply(t,arguments)}}(this)),this.$container=this.$element.wrap(this.$container).parent(),this.$wrapper=this.$container.wrap(this.$wrapper).parent(),this.$element.before(this.options.inverse?this.$off:this.$on).before(this.$label).before(this.options.inverse?this.$on:this.$off),this.options.indeterminate&&this.$element.prop("indeterminate",!0),this._init(),this._elementHandlers(),this._handleHandlers(),this._labelHandlers(),this._formHandler(),this._externalLabelHandler(),this.$element.trigger("init.bootstrapSwitch")}return t.prototype._constructor=t,t.prototype.state=function(t,e){return"undefined"==typeof t?this.options.state:this.options.disabled||this.options.readonly?this.$element:this.options.state&&!this.options.radioAllOff&&this.$element.is(":radio")?this.$element:(this.options.indeterminate&&this.indeterminate(!1),t=!!t,this.$element.prop("checked",t).trigger("change.bootstrapSwitch",e),this.$element)},t.prototype.toggleState=function(t){return this.options.disabled||this.options.readonly?this.$element:this.options.indeterminate?(this.indeterminate(!1),this.state(!0)):this.$element.prop("checked",!this.options.state).trigger("change.bootstrapSwitch",t)},t.prototype.size=function(t){return"undefined"==typeof t?this.options.size:(null!=this.options.size&&this.$wrapper.removeClass(""+this.options.baseClass+"-"+this.options.size),t&&this.$wrapper.addClass(""+this.options.baseClass+"-"+t),this._width(),this._containerPosition(),this.options.size=t,this.$element)},t.prototype.animate=function(t){return"undefined"==typeof t?this.options.animate:(t=!!t,t===this.options.animate?this.$element:this.toggleAnimate())},t.prototype.toggleAnimate=function(){return this.options.animate=!this.options.animate,this.$wrapper.toggleClass(""+this.options.baseClass+"-animate"),this.$element},t.prototype.disabled=function(t){return"undefined"==typeof t?this.options.disabled:(t=!!t,t===this.options.disabled?this.$element:this.toggleDisabled())},t.prototype.toggleDisabled=function(){return this.options.disabled=!this.options.disabled,this.$element.prop("disabled",this.options.disabled),this.$wrapper.toggleClass(""+this.options.baseClass+"-disabled"),this.$element},t.prototype.readonly=function(t){return"undefined"==typeof t?this.options.readonly:(t=!!t,t===this.options.readonly?this.$element:this.toggleReadonly())},t.prototype.toggleReadonly=function(){return this.options.readonly=!this.options.readonly,this.$element.prop("readonly",this.options.readonly),this.$wrapper.toggleClass(""+this.options.baseClass+"-readonly"),this.$element},t.prototype.indeterminate=function(t){return"undefined"==typeof t?this.options.indeterminate:(t=!!t,t===this.options.indeterminate?this.$element:this.toggleIndeterminate())},t.prototype.toggleIndeterminate=function(){return this.options.indeterminate=!this.options.indeterminate,this.$element.prop("indeterminate",this.options.indeterminate),this.$wrapper.toggleClass(""+this.options.baseClass+"-indeterminate"),this._containerPosition(),this.$element},t.prototype.inverse=function(t){return"undefined"==typeof t?this.options.inverse:(t=!!t,t===this.options.inverse?this.$element:this.toggleInverse())},t.prototype.toggleInverse=function(){var t,e;return this.$wrapper.toggleClass(""+this.options.baseClass+"-inverse"),e=this.$on.clone(!0),t=this.$off.clone(!0),this.$on.replaceWith(t),this.$off.replaceWith(e),this.$on=t,this.$off=e,this.options.inverse=!this.options.inverse,this.$element},t.prototype.onColor=function(t){var e;return e=this.options.onColor,"undefined"==typeof t?e:(null!=e&&this.$on.removeClass(""+this.options.baseClass+"-"+e),this.$on.addClass(""+this.options.baseClass+"-"+t),this.options.onColor=t,this.$element)},t.prototype.offColor=function(t){var e;return e=this.options.offColor,"undefined"==typeof t?e:(null!=e&&this.$off.removeClass(""+this.options.baseClass+"-"+e),this.$off.addClass(""+this.options.baseClass+"-"+t),this.options.offColor=t,this.$element)},t.prototype.onText=function(t){return"undefined"==typeof t?this.options.onText:(this.$on.html(t),this._width(),this._containerPosition(),this.options.onText=t,this.$element)},t.prototype.offText=function(t){return"undefined"==typeof t?this.options.offText:(this.$off.html(t),this._width(),this._containerPosition(),this.options.offText=t,this.$element)},t.prototype.labelText=function(t){return"undefined"==typeof t?this.options.labelText:(this.$label.html(t),this._width(),this.options.labelText=t,this.$element)},t.prototype.handleWidth=function(t){return"undefined"==typeof t?this.options.handleWidth:(this.options.handleWidth=t,this._width(),this._containerPosition(),this.$element)},t.prototype.labelWidth=function(t){return"undefined"==typeof t?this.options.labelWidth:(this.options.labelWidth=t,this._width(),this._containerPosition(),this.$element)},t.prototype.baseClass=function(){return this.options.baseClass},t.prototype.wrapperClass=function(t){return"undefined"==typeof t?this.options.wrapperClass:(t||(t=e.fn.bootstrapSwitch.defaults.wrapperClass),this.$wrapper.removeClass(this._getClasses(this.options.wrapperClass).join(" ")),this.$wrapper.addClass(this._getClasses(t).join(" ")),this.options.wrapperClass=t,this.$element)},t.prototype.radioAllOff=function(t){return"undefined"==typeof t?this.options.radioAllOff:(t=!!t,t===this.options.radioAllOff?this.$element:(this.options.radioAllOff=t,this.$element))},t.prototype.onInit=function(t){return"undefined"==typeof t?this.options.onInit:(t||(t=e.fn.bootstrapSwitch.defaults.onInit),this.options.onInit=t,this.$element)},t.prototype.onSwitchChange=function(t){return"undefined"==typeof t?this.options.onSwitchChange:(t||(t=e.fn.bootstrapSwitch.defaults.onSwitchChange),this.options.onSwitchChange=t,this.$element)},t.prototype.destroy=function(){var t;return t=this.$element.closest("form"),t.length&&t.off("reset.bootstrapSwitch").removeData("bootstrap-switch"),this.$container.children().not(this.$element).remove(),this.$element.unwrap().unwrap().off(".bootstrapSwitch").removeData("bootstrap-switch"),this.$element},t.prototype._width=function(){var t,e;return t=this.$on.add(this.$off),t.add(this.$label).css("width",""),e="auto"===this.options.handleWidth?Math.max(this.$on.width(),this.$off.width()):this.options.handleWidth,t.width(e),this.$label.width(function(t){return function(i,n){return"auto"!==t.options.labelWidth?t.options.labelWidth:e>n?e:n}}(this)),this._handleWidth=this.$on.outerWidth(),this._labelWidth=this.$label.outerWidth(),this.$container.width(2*this._handleWidth+this._labelWidth),this.$wrapper.width(this._handleWidth+this._labelWidth)},t.prototype._containerPosition=function(t,e){return null==t&&(t=this.options.state),this.$container.css("margin-left",function(e){return function(){var i;return i=[0,"-"+e._handleWidth+"px"],e.options.indeterminate?"-"+e._handleWidth/2+"px":t?e.options.inverse?i[1]:i[0]:e.options.inverse?i[0]:i[1]}}(this)),e?setTimeout(function(){return e()},50):void 0},t.prototype._init=function(){var t,e;return t=function(t){return function(){return t._width(),t._containerPosition(null,function(){return t.options.animate?t.$wrapper.addClass(""+t.options.baseClass+"-animate"):void 0})}}(this),this.$wrapper.is(":visible")?t():e=i.setInterval(function(n){return function(){return n.$wrapper.is(":visible")?(t(),i.clearInterval(e)):void 0}}(this),50)},t.prototype._elementHandlers=function(){return this.$element.on({"change.bootstrapSwitch":function(t){return function(i,n){var o;return i.preventDefault(),i.stopImmediatePropagation(),o=t.$element.is(":checked"),t._containerPosition(o),o!==t.options.state?(t.options.state=o,t.$wrapper.toggleClass(""+t.options.baseClass+"-off").toggleClass(""+t.options.baseClass+"-on"),n?void 0:(t.$element.is(":radio")&&e("[name='"+t.$element.attr("name")+"']").not(t.$element).prop("checked",!1).trigger("change.bootstrapSwitch",!0),t.$element.trigger("switchChange.bootstrapSwitch",[o]))):void 0}}(this),"focus.bootstrapSwitch":function(t){return function(e){return e.preventDefault(),t.$wrapper.addClass(""+t.options.baseClass+"-focused")}}(this),"blur.bootstrapSwitch":function(t){return function(e){return e.preventDefault(),t.$wrapper.removeClass(""+t.options.baseClass+"-focused")}}(this),"keydown.bootstrapSwitch":function(t){return function(e){if(e.which&&!t.options.disabled&&!t.options.readonly)switch(e.which){case 37:return e.preventDefault(),e.stopImmediatePropagation(),t.state(!1);case 39:return e.preventDefault(),e.stopImmediatePropagation(),t.state(!0)}}}(this)})},t.prototype._handleHandlers=function(){return this.$on.on("click.bootstrapSwitch",function(t){return function(e){return e.preventDefault(),e.stopPropagation(),t.state(!1),t.$element.trigger("focus.bootstrapSwitch")}}(this)),this.$off.on("click.bootstrapSwitch",function(t){return function(e){return e.preventDefault(),e.stopPropagation(),t.state(!0),t.$element.trigger("focus.bootstrapSwitch")}}(this))},t.prototype._labelHandlers=function(){return this.$label.on({"mousedown.bootstrapSwitch touchstart.bootstrapSwitch":function(t){return function(e){return t._dragStart||t.options.disabled||t.options.readonly?void 0:(e.preventDefault(),e.stopPropagation(),t._dragStart=(e.pageX||e.originalEvent.touches[0].pageX)-parseInt(t.$container.css("margin-left"),10),t.options.animate&&t.$wrapper.removeClass(""+t.options.baseClass+"-animate"),t.$element.trigger("focus.bootstrapSwitch"))}}(this),"mousemove.bootstrapSwitch touchmove.bootstrapSwitch":function(t){return function(e){var i;if(null!=t._dragStart&&(e.preventDefault(),i=(e.pageX||e.originalEvent.touches[0].pageX)-t._dragStart,!(i<-t._handleWidth||i>0)))return t._dragEnd=i,t.$container.css("margin-left",""+t._dragEnd+"px")}}(this),"mouseup.bootstrapSwitch touchend.bootstrapSwitch":function(t){return function(e){var i;if(t._dragStart)return e.preventDefault(),t.options.animate&&t.$wrapper.addClass(""+t.options.baseClass+"-animate"),t._dragEnd?(i=t._dragEnd>-(t._handleWidth/2),t._dragEnd=!1,t.state(t.options.inverse?!i:i)):t.state(!t.options.state),t._dragStart=!1}}(this),"mouseleave.bootstrapSwitch":function(t){return function(){return t.$label.trigger("mouseup.bootstrapSwitch")}}(this)})},t.prototype._externalLabelHandler=function(){var t;return t=this.$element.closest("label"),t.on("click",function(e){return function(i){return i.preventDefault(),i.stopImmediatePropagation(),i.target===t[0]?e.toggleState():void 0}}(this))},t.prototype._formHandler=function(){var t;return t=this.$element.closest("form"),t.data("bootstrap-switch")?void 0:t.on("reset.bootstrapSwitch",function(){return i.setTimeout(function(){return t.find("input").filter(function(){return e(this).data("bootstrap-switch")}).each(function(){return e(this).bootstrapSwitch("state",this.checked)})},1)}).data("bootstrap-switch",!0)},t.prototype._getClasses=function(t){var i,n,o,s;if(!e.isArray(t))return[""+this.options.baseClass+"-"+t];for(n=[],o=0,s=t.length;s>o;o++)i=t[o],n.push(""+this.options.baseClass+"-"+i);return n},t}(),e.fn.bootstrapSwitch=function(){var i,o,s;return o=arguments[0],i=2<=arguments.length?t.call(arguments,1):[],s=this,this.each(function(){var t,a;return t=e(this),a=t.data("bootstrap-switch"),a||t.data("bootstrap-switch",a=new n(this,o)),"string"==typeof o?s=a[o].apply(a,i):void 0}),s},e.fn.bootstrapSwitch.Constructor=n,e.fn.bootstrapSwitch.defaults={state:!0,size:null,animate:!0,disabled:!1,readonly:!1,indeterminate:!1,inverse:!1,radioAllOff:!1,onColor:"primary",offColor:"default",onText:"ON",offText:"OFF",labelText:"&nbsp;",handleWidth:"auto",labelWidth:"auto",baseClass:"bootstrap-switch",wrapperClass:"wrapper",onInit:function(){},onSwitchChange:function(){}}}(window.jQuery,window)}).call(this);;!function(t,e){"use strict";if("undefined"!=typeof module&&module.exports){var n="undefined"!=typeof process,o=n&&"electron"in process.versions;o?t.BootstrapDialog=e(t.jQuery):module.exports=e(require("jquery"),require("bootstrap"))}else"function"==typeof define&&define.amd?define("bootstrap-dialog",["jquery","bootstrap"],function(t){return e(t)}):t.BootstrapDialog=e(t.jQuery)}(this,function(t){"use strict";var e=t.fn.modal.Constructor,n=function(t,n){e.call(this,t,n)};n.getModalVersion=function(){var e=null;return e="undefined"==typeof t.fn.modal.Constructor.VERSION?"v3.1":/3\.2\.\d+/.test(t.fn.modal.Constructor.VERSION)?"v3.2":/3\.3\.[1,2]/.test(t.fn.modal.Constructor.VERSION)?"v3.3":"v3.3.4"},n.ORIGINAL_BODY_PADDING=parseInt(t("body").css("padding-right")||0,10),n.METHODS_TO_OVERRIDE={},n.METHODS_TO_OVERRIDE["v3.1"]={},n.METHODS_TO_OVERRIDE["v3.2"]={hide:function(e){if(e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()){this.isShown=!1;var n=this.getGlobalOpenedDialogs();0===n.length&&this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()}}},n.METHODS_TO_OVERRIDE["v3.3"]={setScrollbar:function(){var t=n.ORIGINAL_BODY_PADDING;this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},resetScrollbar:function(){var t=this.getGlobalOpenedDialogs();0===t.length&&this.$body.css("padding-right",n.ORIGINAL_BODY_PADDING)},hideModal:function(){this.$element.hide(),this.backdrop(t.proxy(function(){var t=this.getGlobalOpenedDialogs();0===t.length&&this.$body.removeClass("modal-open"),this.resetAdjustments(),this.resetScrollbar(),this.$element.trigger("hidden.bs.modal")},this))}},n.METHODS_TO_OVERRIDE["v3.3.4"]=t.extend({},n.METHODS_TO_OVERRIDE["v3.3"]),n.prototype={constructor:n,getGlobalOpenedDialogs:function(){var e=[];return t.each(o.dialogs,function(t,n){n.isRealized()&&n.isOpened()&&e.push(n)}),e}},n.prototype=t.extend(n.prototype,e.prototype,n.METHODS_TO_OVERRIDE[n.getModalVersion()]);var o=function(e){this.defaultOptions=t.extend(!0,{id:o.newGuid(),buttons:[],data:{},onshow:null,onshown:null,onhide:null,onhidden:null},o.defaultOptions),this.indexedButtons={},this.registeredButtonHotkeys={},this.draggableData={isMouseDown:!1,mouseOffset:{}},this.realized=!1,this.opened=!1,this.initOptions(e),this.holdThisInstance()};return o.BootstrapDialogModal=n,o.NAMESPACE="bootstrap-dialog",o.TYPE_DEFAULT="type-default",o.TYPE_INFO="type-info",o.TYPE_PRIMARY="type-primary",o.TYPE_SUCCESS="type-success",o.TYPE_WARNING="type-warning",o.TYPE_DANGER="type-danger",o.DEFAULT_TEXTS={},o.DEFAULT_TEXTS[o.TYPE_DEFAULT]="Information",o.DEFAULT_TEXTS[o.TYPE_INFO]="Information",o.DEFAULT_TEXTS[o.TYPE_PRIMARY]="Information",o.DEFAULT_TEXTS[o.TYPE_SUCCESS]="Success",o.DEFAULT_TEXTS[o.TYPE_WARNING]="Warning",o.DEFAULT_TEXTS[o.TYPE_DANGER]="Danger",o.DEFAULT_TEXTS.OK="OK",o.DEFAULT_TEXTS.CANCEL="Cancel",o.DEFAULT_TEXTS.CONFIRM="Confirmation",o.SIZE_NORMAL="size-normal",o.SIZE_SMALL="size-small",o.SIZE_WIDE="size-wide",o.SIZE_LARGE="size-large",o.BUTTON_SIZES={},o.BUTTON_SIZES[o.SIZE_NORMAL]="",o.BUTTON_SIZES[o.SIZE_SMALL]="",o.BUTTON_SIZES[o.SIZE_WIDE]="",o.BUTTON_SIZES[o.SIZE_LARGE]="btn-lg",o.ICON_SPINNER="glyphicon glyphicon-asterisk",o.defaultOptions={type:o.TYPE_PRIMARY,size:o.SIZE_NORMAL,cssClass:"",title:null,message:null,nl2br:!0,closable:!0,closeByBackdrop:!0,closeByKeyboard:!0,spinicon:o.ICON_SPINNER,autodestroy:!0,draggable:!1,animate:!0,description:"",tabindex:-1},o.configDefaultOptions=function(e){o.defaultOptions=t.extend(!0,o.defaultOptions,e)},o.dialogs={},o.openAll=function(){t.each(o.dialogs,function(t,e){e.open()})},o.closeAll=function(){t.each(o.dialogs,function(t,e){e.close()})},o.getDialog=function(t){var e=null;return"undefined"!=typeof o.dialogs[t]&&(e=o.dialogs[t]),e},o.setDialog=function(t){return o.dialogs[t.getId()]=t,t},o.addDialog=function(t){return o.setDialog(t)},o.moveFocus=function(){var e=null;t.each(o.dialogs,function(t,n){e=n}),null!==e&&e.isRealized()&&e.getModal().focus()},o.METHODS_TO_OVERRIDE={},o.METHODS_TO_OVERRIDE["v3.1"]={handleModalBackdropEvent:function(){return this.getModal().on("click",{dialog:this},function(t){t.target===this&&t.data.dialog.isClosable()&&t.data.dialog.canCloseByBackdrop()&&t.data.dialog.close()}),this},updateZIndex:function(){var e=1040,n=1050,i=0;t.each(o.dialogs,function(t,e){i++});var s=this.getModal(),a=s.data("bs.modal").$backdrop;return s.css("z-index",n+20*(i-1)),a.css("z-index",e+20*(i-1)),this},open:function(){return!this.isRealized()&&this.realize(),this.getModal().modal("show"),this.updateZIndex(),this}},o.METHODS_TO_OVERRIDE["v3.2"]={handleModalBackdropEvent:o.METHODS_TO_OVERRIDE["v3.1"].handleModalBackdropEvent,updateZIndex:o.METHODS_TO_OVERRIDE["v3.1"].updateZIndex,open:o.METHODS_TO_OVERRIDE["v3.1"].open},o.METHODS_TO_OVERRIDE["v3.3"]={},o.METHODS_TO_OVERRIDE["v3.3.4"]=t.extend({},o.METHODS_TO_OVERRIDE["v3.1"]),o.prototype={constructor:o,initOptions:function(e){return this.options=t.extend(!0,this.defaultOptions,e),this},holdThisInstance:function(){return o.addDialog(this),this},initModalStuff:function(){return this.setModal(this.createModal()).setModalDialog(this.createModalDialog()).setModalContent(this.createModalContent()).setModalHeader(this.createModalHeader()).setModalBody(this.createModalBody()).setModalFooter(this.createModalFooter()),this.getModal().append(this.getModalDialog()),this.getModalDialog().append(this.getModalContent()),this.getModalContent().append(this.getModalHeader()).append(this.getModalBody()).append(this.getModalFooter()),this},createModal:function(){var e=t('<div class="modal" role="dialog" aria-hidden="true"></div>');return e.prop("id",this.getId()),e.attr("aria-labelledby",this.getId()+"_title"),e},getModal:function(){return this.$modal},setModal:function(t){return this.$modal=t,this},createModalDialog:function(){return t('<div class="modal-dialog"></div>')},getModalDialog:function(){return this.$modalDialog},setModalDialog:function(t){return this.$modalDialog=t,this},createModalContent:function(){return t('<div class="modal-content"></div>')},getModalContent:function(){return this.$modalContent},setModalContent:function(t){return this.$modalContent=t,this},createModalHeader:function(){return t('<div class="modal-header"></div>')},getModalHeader:function(){return this.$modalHeader},setModalHeader:function(t){return this.$modalHeader=t,this},createModalBody:function(){return t('<div class="modal-body"></div>')},getModalBody:function(){return this.$modalBody},setModalBody:function(t){return this.$modalBody=t,this},createModalFooter:function(){return t('<div class="modal-footer"></div>')},getModalFooter:function(){return this.$modalFooter},setModalFooter:function(t){return this.$modalFooter=t,this},createDynamicContent:function(t){var e=null;return e="function"==typeof t?t.call(t,this):t,"string"==typeof e&&(e=this.formatStringContent(e)),e},formatStringContent:function(t){return this.options.nl2br?t.replace(/\r\n/g,"<br />").replace(/[\r\n]/g,"<br />"):t},setData:function(t,e){return this.options.data[t]=e,this},getData:function(t){return this.options.data[t]},setId:function(t){return this.options.id=t,this},getId:function(){return this.options.id},getType:function(){return this.options.type},setType:function(t){return this.options.type=t,this.updateType(),this},updateType:function(){if(this.isRealized()){var t=[o.TYPE_DEFAULT,o.TYPE_INFO,o.TYPE_PRIMARY,o.TYPE_SUCCESS,o.TYPE_WARNING,o.TYPE_DANGER];this.getModal().removeClass(t.join(" ")).addClass(this.getType())}return this},getSize:function(){return this.options.size},setSize:function(t){return this.options.size=t,this.updateSize(),this},updateSize:function(){if(this.isRealized()){var e=this;this.getModal().removeClass(o.SIZE_NORMAL).removeClass(o.SIZE_SMALL).removeClass(o.SIZE_WIDE).removeClass(o.SIZE_LARGE),this.getModal().addClass(this.getSize()),this.getModalDialog().removeClass("modal-sm"),this.getSize()===o.SIZE_SMALL&&this.getModalDialog().addClass("modal-sm"),this.getModalDialog().removeClass("modal-lg"),this.getSize()===o.SIZE_WIDE&&this.getModalDialog().addClass("modal-lg"),t.each(this.options.buttons,function(n,o){var i=e.getButton(o.id),s=["btn-lg","btn-sm","btn-xs"],a=!1;if("string"==typeof o.cssClass){var d=o.cssClass.split(" ");t.each(d,function(e,n){-1!==t.inArray(n,s)&&(a=!0)})}a||(i.removeClass(s.join(" ")),i.addClass(e.getButtonSize()))})}return this},getCssClass:function(){return this.options.cssClass},setCssClass:function(t){return this.options.cssClass=t,this},getTitle:function(){return this.options.title},setTitle:function(t){return this.options.title=t,this.updateTitle(),this},updateTitle:function(){if(this.isRealized()){var t=null!==this.getTitle()?this.createDynamicContent(this.getTitle()):this.getDefaultText();this.getModalHeader().find("."+this.getNamespace("title")).html("").append(t).prop("id",this.getId()+"_title")}return this},getMessage:function(){return this.options.message},setMessage:function(t){return this.options.message=t,this.updateMessage(),this},updateMessage:function(){if(this.isRealized()){var t=this.createDynamicContent(this.getMessage());this.getModalBody().find("."+this.getNamespace("message")).html("").append(t)}return this},isClosable:function(){return this.options.closable},setClosable:function(t){return this.options.closable=t,this.updateClosable(),this},setCloseByBackdrop:function(t){return this.options.closeByBackdrop=t,this},canCloseByBackdrop:function(){return this.options.closeByBackdrop},setCloseByKeyboard:function(t){return this.options.closeByKeyboard=t,this},canCloseByKeyboard:function(){return this.options.closeByKeyboard},isAnimate:function(){return this.options.animate},setAnimate:function(t){return this.options.animate=t,this},updateAnimate:function(){return this.isRealized()&&this.getModal().toggleClass("fade",this.isAnimate()),this},getSpinicon:function(){return this.options.spinicon},setSpinicon:function(t){return this.options.spinicon=t,this},addButton:function(t){return this.options.buttons.push(t),this},addButtons:function(e){var n=this;return t.each(e,function(t,e){n.addButton(e)}),this},getButtons:function(){return this.options.buttons},setButtons:function(t){return this.options.buttons=t,this.updateButtons(),this},getButton:function(t){return"undefined"!=typeof this.indexedButtons[t]?this.indexedButtons[t]:null},getButtonSize:function(){return"undefined"!=typeof o.BUTTON_SIZES[this.getSize()]?o.BUTTON_SIZES[this.getSize()]:""},updateButtons:function(){return this.isRealized()&&(0===this.getButtons().length?this.getModalFooter().hide():this.getModalFooter().show().find("."+this.getNamespace("footer")).html("").append(this.createFooterButtons())),this},isAutodestroy:function(){return this.options.autodestroy},setAutodestroy:function(t){this.options.autodestroy=t},getDescription:function(){return this.options.description},setDescription:function(t){return this.options.description=t,this},setTabindex:function(t){return this.options.tabindex=t,this},getTabindex:function(){return this.options.tabindex},updateTabindex:function(){return this.isRealized()&&this.getModal().attr("tabindex",this.getTabindex()),this},getDefaultText:function(){return o.DEFAULT_TEXTS[this.getType()]},getNamespace:function(t){return o.NAMESPACE+"-"+t},createHeaderContent:function(){var e=t("<div></div>");return e.addClass(this.getNamespace("header")),e.append(this.createTitleContent()),e.prepend(this.createCloseButton()),e},createTitleContent:function(){var e=t("<div></div>");return e.addClass(this.getNamespace("title")),e},createCloseButton:function(){var e=t("<div></div>");e.addClass(this.getNamespace("close-button"));var n=t('<button class="close">&times;</button>');return e.append(n),e.on("click",{dialog:this},function(t){t.data.dialog.close()}),e},createBodyContent:function(){var e=t("<div></div>");return e.addClass(this.getNamespace("body")),e.append(this.createMessageContent()),e},createMessageContent:function(){var e=t("<div></div>");return e.addClass(this.getNamespace("message")),e},createFooterContent:function(){var e=t("<div></div>");return e.addClass(this.getNamespace("footer")),e},createFooterButtons:function(){var e=this,n=t("<div></div>");return n.addClass(this.getNamespace("footer-buttons")),this.indexedButtons={},t.each(this.options.buttons,function(t,i){i.id||(i.id=o.newGuid());var s=e.createButton(i);e.indexedButtons[i.id]=s,n.append(s)}),n},createButton:function(e){var n=t('<button class="btn"></button>');return n.prop("id",e.id),n.data("button",e),"undefined"!=typeof e.icon&&""!==t.trim(e.icon)&&n.append(this.createButtonIcon(e.icon)),"undefined"!=typeof e.label&&n.append(e.label),n.addClass("undefined"!=typeof e.cssClass&&""!==t.trim(e.cssClass)?e.cssClass:"btn-default"),"undefined"!=typeof e.hotkey&&(this.registeredButtonHotkeys[e.hotkey]=n),n.on("click",{dialog:this,$button:n,button:e},function(t){var e=t.data.dialog,n=t.data.$button,o=n.data("button");return o.autospin&&n.toggleSpin(!0),"function"==typeof o.action?o.action.call(n,e,t):void 0}),this.enhanceButton(n),"undefined"!=typeof e.enabled&&n.toggleEnable(e.enabled),n},enhanceButton:function(t){return t.dialog=this,t.toggleEnable=function(t){var e=this;return"undefined"!=typeof t?e.prop("disabled",!t).toggleClass("disabled",!t):e.prop("disabled",!e.prop("disabled")),e},t.enable=function(){var t=this;return t.toggleEnable(!0),t},t.disable=function(){var t=this;return t.toggleEnable(!1),t},t.toggleSpin=function(e){var n=this,o=n.dialog,i=n.find("."+o.getNamespace("button-icon"));return"undefined"==typeof e&&(e=!(t.find(".icon-spin").length>0)),e?(i.hide(),t.prepend(o.createButtonIcon(o.getSpinicon()).addClass("icon-spin"))):(i.show(),t.find(".icon-spin").remove()),n},t.spin=function(){var t=this;return t.toggleSpin(!0),t},t.stopSpin=function(){var t=this;return t.toggleSpin(!1),t},this},createButtonIcon:function(e){var n=t("<span></span>");return n.addClass(this.getNamespace("button-icon")).addClass(e),n},enableButtons:function(e){return t.each(this.indexedButtons,function(t,n){n.toggleEnable(e)}),this},updateClosable:function(){return this.isRealized()&&this.getModalHeader().find("."+this.getNamespace("close-button")).toggle(this.isClosable()),this},onShow:function(t){return this.options.onshow=t,this},onShown:function(t){return this.options.onshown=t,this},onHide:function(t){return this.options.onhide=t,this},onHidden:function(t){return this.options.onhidden=t,this},isRealized:function(){return this.realized},setRealized:function(t){return this.realized=t,this},isOpened:function(){return this.opened},setOpened:function(t){return this.opened=t,this},handleModalEvents:function(){return this.getModal().on("show.bs.modal",{dialog:this},function(t){var e=t.data.dialog;if(e.setOpened(!0),e.isModalEvent(t)&&"function"==typeof e.options.onshow){var n=e.options.onshow(e);return n===!1&&e.setOpened(!1),n}}),this.getModal().on("shown.bs.modal",{dialog:this},function(t){var e=t.data.dialog;e.isModalEvent(t)&&"function"==typeof e.options.onshown&&e.options.onshown(e)}),this.getModal().on("hide.bs.modal",{dialog:this},function(t){var e=t.data.dialog;if(e.setOpened(!1),e.isModalEvent(t)&&"function"==typeof e.options.onhide){var n=e.options.onhide(e);return n===!1&&e.setOpened(!0),n}}),this.getModal().on("hidden.bs.modal",{dialog:this},function(e){var n=e.data.dialog;n.isModalEvent(e)&&"function"==typeof n.options.onhidden&&n.options.onhidden(n),n.isAutodestroy()&&(n.setRealized(!1),delete o.dialogs[n.getId()],t(this).remove()),o.moveFocus()}),this.handleModalBackdropEvent(),this.getModal().on("keyup",{dialog:this},function(t){27===t.which&&t.data.dialog.isClosable()&&t.data.dialog.canCloseByKeyboard()&&t.data.dialog.close()}),this.getModal().on("keyup",{dialog:this},function(e){var n=e.data.dialog;if("undefined"!=typeof n.registeredButtonHotkeys[e.which]){var o=t(n.registeredButtonHotkeys[e.which]);!o.prop("disabled")&&o.focus().trigger("click")}}),this},handleModalBackdropEvent:function(){return this.getModal().on("click",{dialog:this},function(e){t(e.target).hasClass("modal-backdrop")&&e.data.dialog.isClosable()&&e.data.dialog.canCloseByBackdrop()&&e.data.dialog.close()}),this},isModalEvent:function(t){return"undefined"!=typeof t.namespace&&"bs.modal"===t.namespace},makeModalDraggable:function(){return this.options.draggable&&(this.getModalHeader().addClass(this.getNamespace("draggable")).on("mousedown",{dialog:this},function(t){var e=t.data.dialog;e.draggableData.isMouseDown=!0;var n=e.getModalDialog().offset();e.draggableData.mouseOffset={top:t.clientY-n.top,left:t.clientX-n.left}}),this.getModal().on("mouseup mouseleave",{dialog:this},function(t){t.data.dialog.draggableData.isMouseDown=!1}),t("body").on("mousemove",{dialog:this},function(t){var e=t.data.dialog;e.draggableData.isMouseDown&&e.getModalDialog().offset({top:t.clientY-e.draggableData.mouseOffset.top,left:t.clientX-e.draggableData.mouseOffset.left})})),this},realize:function(){return this.initModalStuff(),this.getModal().addClass(o.NAMESPACE).addClass(this.getCssClass()),this.updateSize(),this.getDescription()&&this.getModal().attr("aria-describedby",this.getDescription()),this.getModalFooter().append(this.createFooterContent()),this.getModalHeader().append(this.createHeaderContent()),this.getModalBody().append(this.createBodyContent()),this.getModal().data("bs.modal",new n(this.getModal(),{backdrop:"static",keyboard:!1,show:!1})),this.makeModalDraggable(),this.handleModalEvents(),this.setRealized(!0),this.updateButtons(),this.updateType(),this.updateTitle(),this.updateMessage(),this.updateClosable(),this.updateAnimate(),this.updateSize(),this.updateTabindex(),this},open:function(){return!this.isRealized()&&this.realize(),this.getModal().modal("show"),this},close:function(){return!this.isRealized()&&this.realize(),this.getModal().modal("hide"),this}},o.prototype=t.extend(o.prototype,o.METHODS_TO_OVERRIDE[n.getModalVersion()]),o.newGuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)})},o.show=function(t){return new o(t).open()},o.alert=function(){var e={},n={type:o.TYPE_PRIMARY,title:null,message:null,closable:!1,draggable:!1,buttonLabel:o.DEFAULT_TEXTS.OK,callback:null};return e="object"==typeof arguments[0]&&arguments[0].constructor==={}.constructor?t.extend(!0,n,arguments[0]):t.extend(!0,n,{message:arguments[0],callback:"undefined"!=typeof arguments[1]?arguments[1]:null}),new o({type:e.type,title:e.title,message:e.message,closable:e.closable,draggable:e.draggable,data:{callback:e.callback},onhide:function(t){!t.getData("btnClicked")&&t.isClosable()&&"function"==typeof t.getData("callback")&&t.getData("callback")(!1)},buttons:[{label:e.buttonLabel,action:function(t){return t.setData("btnClicked",!0),"function"==typeof t.getData("callback")&&t.getData("callback").call(this,!0)===!1?!1:t.close()}}]}).open()},o.confirm=function(){var e={},n={type:o.TYPE_PRIMARY,title:null,message:null,closable:!1,draggable:!1,btnCancelLabel:o.DEFAULT_TEXTS.CANCEL,btnOKLabel:o.DEFAULT_TEXTS.OK,btnOKClass:null,callback:null};return e="object"==typeof arguments[0]&&arguments[0].constructor==={}.constructor?t.extend(!0,n,arguments[0]):t.extend(!0,n,{message:arguments[0],closable:!1,buttonLabel:o.DEFAULT_TEXTS.OK,callback:"undefined"!=typeof arguments[1]?arguments[1]:null}),null===e.btnOKClass&&(e.btnOKClass=["btn",e.type.split("-")[1]].join("-")),new o({type:e.type,title:e.title,message:e.message,closable:e.closable,draggable:e.draggable,data:{callback:e.callback},buttons:[{label:e.btnCancelLabel,action:function(t){return"function"==typeof t.getData("callback")&&t.getData("callback").call(this,!1)===!1?!1:t.close()}},{label:e.btnOKLabel,cssClass:e.btnOKClass,action:function(t){return"function"==typeof t.getData("callback")&&t.getData("callback").call(this,!0)===!1?!1:t.close()}}]}).open()},o.warning=function(t,e){return new o({type:o.TYPE_WARNING,message:t}).open()},o.danger=function(t,e){return new o({type:o.TYPE_DANGER,message:t}).open()},o.success=function(t,e){return new o({type:o.TYPE_SUCCESS,message:t}).open()},o});;//! moment.js
//! version : 2.15.2
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return md.apply(null,arguments)}
// This is done to register the method called with moment()
// without creating circular dependencies.
function b(a){md=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){
// IE8 will treat undefined and null as object if it wasn't for
// input != null
return null!=a&&"[object Object]"===Object.prototype.toString.call(a)}function e(a){var b;for(b in a)
// even if its not own property I'd still call it non-empty
return!1;return!0}function f(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function g(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function h(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function i(a,b){for(var c in b)h(b,c)&&(a[c]=b[c]);return h(b,"toString")&&(a.toString=b.toString),h(b,"valueOf")&&(a.valueOf=b.valueOf),a}function j(a,b,c,d){return qb(a,b,c,d,!0).utc()}function k(){
// We need to deep clone this object.
return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function l(a){return null==a._pf&&(a._pf=k()),a._pf}function m(a){if(null==a._isValid){var b=l(a),c=nd.call(b.parsedDateParts,function(a){return null!=a}),d=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c);if(a._strict&&(d=d&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour),null!=Object.isFrozen&&Object.isFrozen(a))return d;a._isValid=d}return a._isValid}function n(a){var b=j(NaN);return null!=a?i(l(b),a):l(b).userInvalidated=!0,b}function o(a){return void 0===a}function p(a,b){var c,d,e;if(o(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),o(b._i)||(a._i=b._i),o(b._f)||(a._f=b._f),o(b._l)||(a._l=b._l),o(b._strict)||(a._strict=b._strict),o(b._tzm)||(a._tzm=b._tzm),o(b._isUTC)||(a._isUTC=b._isUTC),o(b._offset)||(a._offset=b._offset),o(b._pf)||(a._pf=l(b)),o(b._locale)||(a._locale=b._locale),od.length>0)for(c in od)d=od[c],e=b[d],o(e)||(a[d]=e);return a}
// Moment prototype object
function q(b){p(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),
// Prevent infinite loop in case updateOffset creates new moment
// objects.
pd===!1&&(pd=!0,a.updateOffset(this),pd=!1)}function r(a){return a instanceof q||null!=a&&null!=a._isAMomentObject}function s(a){return a<0?Math.ceil(a)||0:Math.floor(a)}function t(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=s(b)),c}
// compare two arrays, return the number of differences
function u(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;d<e;d++)(c&&a[d]!==b[d]||!c&&t(a[d])!==t(b[d]))&&g++;return g+f}function v(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function w(b,c){var d=!0;return i(function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,b),d){for(var e,f=[],g=0;g<arguments.length;g++){if(e="","object"==typeof arguments[g]){e+="\n["+g+"] ";for(var h in arguments[0])e+=h+": "+arguments[0][h]+", ";e=e.slice(0,-2)}else e=arguments[g];f.push(e)}v(b+"\nArguments: "+Array.prototype.slice.call(f).join("")+"\n"+(new Error).stack),d=!1}return c.apply(this,arguments)},c)}function x(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),qd[b]||(v(c),qd[b]=!0)}function y(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function z(a){var b,c;for(c in a)b=a[c],y(b)?this[c]=b:this["_"+c]=b;this._config=a,
// Lenient ordinal parsing accepts just a number in addition to
// number + (possibly) stuff coming from _ordinalParseLenient.
this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function A(a,b){var c,e=i({},a);for(c in b)h(b,c)&&(d(a[c])&&d(b[c])?(e[c]={},i(e[c],a[c]),i(e[c],b[c])):null!=b[c]?e[c]=b[c]:delete e[c]);for(c in a)h(a,c)&&!h(b,c)&&d(a[c])&&(
// make sure changes to properties don't modify parent config
e[c]=i({},e[c]));return e}function B(a){null!=a&&this.set(a)}function C(a,b,c){var d=this._calendar[a]||this._calendar.sameElse;return y(d)?d.call(b,c):d}function D(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function E(){return this._invalidDate}function F(a){return this._ordinal.replace("%d",a)}function G(a,b,c,d){var e=this._relativeTime[c];return y(e)?e(a,b,c,d):e.replace(/%d/i,a)}function H(a,b){var c=this._relativeTime[a>0?"future":"past"];return y(c)?c(b):c.replace(/%s/i,b)}function I(a,b){var c=a.toLowerCase();zd[c]=zd[c+"s"]=zd[b]=a}function J(a){return"string"==typeof a?zd[a]||zd[a.toLowerCase()]:void 0}function K(a){var b,c,d={};for(c in a)h(a,c)&&(b=J(c),b&&(d[b]=a[c]));return d}function L(a,b){Ad[a]=b}function M(a){var b=[];for(var c in a)b.push({unit:c,priority:Ad[c]});return b.sort(function(a,b){return a.priority-b.priority}),b}function N(b,c){return function(d){return null!=d?(P(this,b,d),a.updateOffset(this,c),this):O(this,b)}}function O(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function P(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}
// MOMENTS
function Q(a){return a=J(a),y(this[a])?this[a]():this}function R(a,b){if("object"==typeof a){a=K(a);for(var c=M(a),d=0;d<c.length;d++)this[c[d].unit](a[c[d].unit])}else if(a=J(a),y(this[a]))return this[a](b);return this}function S(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}
// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function T(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Ed[a]=e),b&&(Ed[b[0]]=function(){return S(e.apply(this,arguments),b[1],b[2])}),c&&(Ed[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function U(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function V(a){var b,c,d=a.match(Bd);for(b=0,c=d.length;b<c;b++)Ed[d[b]]?d[b]=Ed[d[b]]:d[b]=U(d[b]);return function(b){var e,f="";for(e=0;e<c;e++)f+=d[e]instanceof Function?d[e].call(b,a):d[e];return f}}
// format date using native date object
function W(a,b){return a.isValid()?(b=X(b,a.localeData()),Dd[b]=Dd[b]||V(b),Dd[b](a)):a.localeData().invalidDate()}function X(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Cd.lastIndex=0;d>=0&&Cd.test(a);)a=a.replace(Cd,c),Cd.lastIndex=0,d-=1;return a}function Y(a,b,c){Wd[a]=y(b)?b:function(a,d){return a&&c?c:b}}function Z(a,b){return h(Wd,a)?Wd[a](b._strict,b._locale):new RegExp($(a))}
// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function $(a){return _(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function _(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function aa(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=t(a)}),c=0;c<a.length;c++)Xd[a[c]]=d}function ba(a,b){aa(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function ca(a,b,c){null!=b&&h(Xd,a)&&Xd[a](b,c._a,c,a)}function da(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function ea(a,b){return a?c(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||fe).test(b)?"format":"standalone"][a.month()]:this._months}function fa(a,b){return a?c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[fe.test(b)?"format":"standalone"][a.month()]:this._monthsShort}function ga(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(
// this is not used
this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;d<12;++d)f=j([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=sd.call(this._shortMonthsParse,g),e!==-1?e:null):(e=sd.call(this._longMonthsParse,g),e!==-1?e:null):"MMM"===b?(e=sd.call(this._shortMonthsParse,g),e!==-1?e:(e=sd.call(this._longMonthsParse,g),e!==-1?e:null)):(e=sd.call(this._longMonthsParse,g),e!==-1?e:(e=sd.call(this._shortMonthsParse,g),e!==-1?e:null))}function ha(a,b,c){var d,e,f;if(this._monthsParseExact)return ga.call(this,a,b,c);
// TODO: add sorting
// Sorting makes sure if one month (or abbr) is a prefix of another
// see sorting in computeMonthsParse
for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;d<12;d++){
// test the regex
if(
// make the regex if we don't have it already
e=j([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}
// MOMENTS
function ia(a,b){var c;if(!a.isValid())
// No op
return a;if("string"==typeof b)if(/^\d+$/.test(b))b=t(b);else
// TODO: Another silent failure?
if(b=a.localeData().monthsParse(b),"number"!=typeof b)return a;return c=Math.min(a.date(),da(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ja(b){return null!=b?(ia(this,b),a.updateOffset(this,!0),this):O(this,"Month")}function ka(){return da(this.year(),this.month())}function la(a){return this._monthsParseExact?(h(this,"_monthsRegex")||na.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(h(this,"_monthsShortRegex")||(this._monthsShortRegex=ie),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)}function ma(a){return this._monthsParseExact?(h(this,"_monthsRegex")||na.call(this),a?this._monthsStrictRegex:this._monthsRegex):(h(this,"_monthsRegex")||(this._monthsRegex=je),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)}function na(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;b<12;b++)
// make the regex if we don't have it already
c=j([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(
// Sorting makes sure if one month (or abbr) is a prefix of another it
// will match the longer piece.
d.sort(a),e.sort(a),f.sort(a),b=0;b<12;b++)d[b]=_(d[b]),e[b]=_(e[b]);for(b=0;b<24;b++)f[b]=_(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}
// HELPERS
function oa(a){return pa(a)?366:365}function pa(a){return a%4===0&&a%100!==0||a%400===0}function qa(){return pa(this.year())}function ra(a,b,c,d,e,f,g){
//can't just apply() to create a date:
//http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
var h=new Date(a,b,c,d,e,f,g);
//the date constructor remaps years 0-99 to 1900-1999
return a<100&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function sa(a){var b=new Date(Date.UTC.apply(null,arguments));
//the Date.UTC function remaps years 0-99 to 1900-1999
return a<100&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}
// start-of-first-week - start-of-year
function ta(a,b,c){var// first-week day -- which january is always in the first week (4 for iso, 1 for other)
d=7+b-c,
// first-week day local weekday -- which local weekday is fwd
e=(7+sa(a,0,d).getUTCDay()-b)%7;return-e+d-1}
//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function ua(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ta(a,d,e),j=1+7*(b-1)+h+i;return j<=0?(f=a-1,g=oa(f)+j):j>oa(a)?(f=a+1,g=j-oa(a)):(f=a,g=j),{year:f,dayOfYear:g}}function va(a,b,c){var d,e,f=ta(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return g<1?(e=a.year()-1,d=g+wa(e,b,c)):g>wa(a.year(),b,c)?(d=g-wa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function wa(a,b,c){var d=ta(a,b,c),e=ta(a+1,b,c);return(oa(a)-d+e)/7}
// HELPERS
// LOCALES
function xa(a){return va(a,this._week.dow,this._week.doy).week}function ya(){return this._week.dow}function za(){return this._week.doy}
// MOMENTS
function Aa(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Ba(a){var b=va(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}
// HELPERS
function Ca(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Da(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a}function Ea(a,b){return a?c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]:this._weekdays}function Fa(a){return a?this._weekdaysShort[a.day()]:this._weekdaysShort}function Ga(a){return a?this._weekdaysMin[a.day()]:this._weekdaysMin}function Ha(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;d<7;++d)f=j([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=sd.call(this._weekdaysParse,g),e!==-1?e:null):"ddd"===b?(e=sd.call(this._shortWeekdaysParse,g),e!==-1?e:null):(e=sd.call(this._minWeekdaysParse,g),e!==-1?e:null):"dddd"===b?(e=sd.call(this._weekdaysParse,g),e!==-1?e:(e=sd.call(this._shortWeekdaysParse,g),e!==-1?e:(e=sd.call(this._minWeekdaysParse,g),e!==-1?e:null))):"ddd"===b?(e=sd.call(this._shortWeekdaysParse,g),e!==-1?e:(e=sd.call(this._weekdaysParse,g),e!==-1?e:(e=sd.call(this._minWeekdaysParse,g),e!==-1?e:null))):(e=sd.call(this._minWeekdaysParse,g),e!==-1?e:(e=sd.call(this._weekdaysParse,g),e!==-1?e:(e=sd.call(this._shortWeekdaysParse,g),e!==-1?e:null)))}function Ia(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Ha.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;d<7;d++){
// test the regex
if(
// make the regex if we don't have it already
e=j([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}
// MOMENTS
function Ja(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Ca(a,this.localeData()),this.add(a-b,"d")):b}function Ka(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function La(a){if(!this.isValid())return null!=a?this:NaN;
// behaves the same as moment#day except
// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
// as a setter, sunday should belong to the previous week.
if(null!=a){var b=Da(a,this.localeData());return this.day(this.day()%7?b:b-7)}return this.day()||7}function Ma(a){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Pa.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(h(this,"_weekdaysRegex")||(this._weekdaysRegex=pe),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)}function Na(a){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Pa.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(h(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=qe),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Oa(a){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Pa.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(h(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=re),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Pa(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],h=[],i=[],k=[];for(b=0;b<7;b++)
// make the regex if we don't have it already
c=j([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),h.push(e),i.push(f),k.push(d),k.push(e),k.push(f);for(
// Sorting makes sure if one weekday (or abbr) is a prefix of another it
// will match the longer piece.
g.sort(a),h.sort(a),i.sort(a),k.sort(a),b=0;b<7;b++)h[b]=_(h[b]),i[b]=_(i[b]),k[b]=_(k[b]);this._weekdaysRegex=new RegExp("^("+k.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}
// FORMATTING
function Qa(){return this.hours()%12||12}function Ra(){return this.hours()||24}function Sa(a,b){T(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}
// PARSING
function Ta(a,b){return b._meridiemParse}
// LOCALES
function Ua(a){
// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
// Using charAt should be more compatible.
return"p"===(a+"").toLowerCase().charAt(0)}function Va(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Wa(a){return a?a.toLowerCase().replace("_","-"):a}
// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function Xa(a){for(var b,c,d,e,f=0;f<a.length;){for(e=Wa(a[f]).split("-"),b=e.length,c=Wa(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=Ya(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&u(e,c,!0)>=b-1)
//the next array item is better than a shallower substring of this one
break;b--}f++}return null}function Ya(a){var b=null;
// TODO: Find a better way to register and load all the locales in Node
if(!we[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=se._abbr,require("./locale/"+a),
// because defineLocale currently also sets the global locale, we
// want to undo that for lazy loaded locales
Za(b)}catch(a){}return we[a]}
// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function Za(a,b){var c;
// moment.duration._locale = moment._locale = data;
return a&&(c=o(b)?ab(a):$a(a,b),c&&(se=c)),se._abbr}function $a(a,b){if(null!==b){var c=ve;
// treat as if there is no base config
// backwards compat for now: also set the locale
return b.abbr=a,null!=we[a]?(x("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=we[a]._config):null!=b.parentLocale&&(null!=we[b.parentLocale]?c=we[b.parentLocale]._config:x("parentLocaleUndefined","specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")),we[a]=new B(A(c,b)),Za(a),we[a]}
// useful for testing
return delete we[a],null}function _a(a,b){if(null!=b){var c,d=ve;
// MERGE
null!=we[a]&&(d=we[a]._config),b=A(d,b),c=new B(b),c.parentLocale=we[a],we[a]=c,
// backwards compat for now: also set the locale
Za(a)}else
// pass null for config to unupdate, useful for tests
null!=we[a]&&(null!=we[a].parentLocale?we[a]=we[a].parentLocale:null!=we[a]&&delete we[a]);return we[a]}
// returns locale data
function ab(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return se;if(!c(a)){if(
//short-circuit everything else
b=Ya(a))return b;a=[a]}return Xa(a)}function bb(){return rd(we)}function cb(a){var b,c=a._a;return c&&l(a).overflow===-2&&(b=c[Zd]<0||c[Zd]>11?Zd:c[$d]<1||c[$d]>da(c[Yd],c[Zd])?$d:c[_d]<0||c[_d]>24||24===c[_d]&&(0!==c[ae]||0!==c[be]||0!==c[ce])?_d:c[ae]<0||c[ae]>59?ae:c[be]<0||c[be]>59?be:c[ce]<0||c[ce]>999?ce:-1,l(a)._overflowDayOfYear&&(b<Yd||b>$d)&&(b=$d),l(a)._overflowWeeks&&b===-1&&(b=de),l(a)._overflowWeekday&&b===-1&&(b=ee),l(a).overflow=b),a}
// date from iso format
function db(a){var b,c,d,e,f,g,h=a._i,i=xe.exec(h)||ye.exec(h);if(i){for(l(a).iso=!0,b=0,c=Ae.length;b<c;b++)if(Ae[b][1].exec(i[1])){e=Ae[b][0],d=Ae[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=Be.length;b<c;b++)if(Be[b][1].exec(i[3])){
// match[2] should be 'T' or space
f=(i[2]||" ")+Be[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!ze.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),jb(a)}else a._isValid=!1}
// date from iso format or fallback
function eb(b){var c=Ce.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(db(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}
// Pick the first defined of two or three arguments.
function fb(a,b,c){return null!=a?a:null!=b?b:c}function gb(b){
// hooks is actually the exported moment object
var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}
// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function hb(a){var b,c,d,e,f=[];if(!a._d){
// Default to current date.
// * if no year, month, day of month are given, default to today
// * if day of month is given, default month and year
// * if month is given, default only year
// * if year is given, don't default anything
for(d=gb(a),
//compute day of the year from weeks and weekdays
a._w&&null==a._a[$d]&&null==a._a[Zd]&&ib(a),
//if the day of the year is set, figure out what it is
a._dayOfYear&&(e=fb(a._a[Yd],d[Yd]),a._dayOfYear>oa(e)&&(l(a)._overflowDayOfYear=!0),c=sa(e,0,a._dayOfYear),a._a[Zd]=c.getUTCMonth(),a._a[$d]=c.getUTCDate()),b=0;b<3&&null==a._a[b];++b)a._a[b]=f[b]=d[b];
// Zero out whatever was not defaulted, including time
for(;b<7;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];
// Check for 24:00:00.000
24===a._a[_d]&&0===a._a[ae]&&0===a._a[be]&&0===a._a[ce]&&(a._nextDay=!0,a._a[_d]=0),a._d=(a._useUTC?sa:ra).apply(null,f),
// Apply timezone offset from input. The actual utcOffset can be changed
// with parseZone.
null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[_d]=24)}}function ib(a){var b,c,d,e,f,g,h,i;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,
// TODO: We need to take the current isoWeekYear, but that depends on
// how we interpret now (local, utc, fixed offset). So create
// a now version of current config (take local/utc/offset flags, and
// create now).
c=fb(b.GG,a._a[Yd],va(rb(),1,4).year),d=fb(b.W,1),e=fb(b.E,1),(e<1||e>7)&&(i=!0)):(f=a._locale._week.dow,g=a._locale._week.doy,c=fb(b.gg,a._a[Yd],va(rb(),f,g).year),d=fb(b.w,1),null!=b.d?(
// weekday -- low day numbers are considered next week
e=b.d,(e<0||e>6)&&(i=!0)):null!=b.e?(
// local weekday -- counting starts from begining of week
e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):
// default to begining of week
e=f),d<1||d>wa(c,f,g)?l(a)._overflowWeeks=!0:null!=i?l(a)._overflowWeekday=!0:(h=ua(c,d,e,f,g),a._a[Yd]=h.year,a._dayOfYear=h.dayOfYear)}
// date from string and format string
function jb(b){
// TODO: Move this to another part of the creation flow to prevent circular deps
if(b._f===a.ISO_8601)return void db(b);b._a=[],l(b).empty=!0;
// This array is used to make a Date, either with `new Date` or `Date.UTC`
var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=X(b._f,b._locale).match(Bd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(Z(f,b))||[])[0],
// console.log('token', token, 'parsedInput', parsedInput,
//         'regex', getParseRegexForToken(token, config));
d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&l(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),
// don't parse if it's not a known token
Ed[f]?(d?l(b).empty=!1:l(b).unusedTokens.push(f),ca(f,d,b)):b._strict&&!d&&l(b).unusedTokens.push(f);
// add remaining unparsed input length to the string
l(b).charsLeftOver=i-j,h.length>0&&l(b).unusedInput.push(h),
// clear _12h flag if hour is <= 12
b._a[_d]<=12&&l(b).bigHour===!0&&b._a[_d]>0&&(l(b).bigHour=void 0),l(b).parsedDateParts=b._a.slice(0),l(b).meridiem=b._meridiem,
// handle meridiem
b._a[_d]=kb(b._locale,b._a[_d],b._meridiem),hb(b),cb(b)}function kb(a,b,c){var d;
// Fallback
return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&b<12&&(b+=12),d||12!==b||(b=0),b):b}
// date from string and array of format strings
function lb(a){var b,c,d,e,f;if(0===a._f.length)return l(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=p({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],jb(b),m(b)&&(
// if there is any input that was not parsed add a penalty for that format
f+=l(b).charsLeftOver,
//or tokens
f+=10*l(b).unusedTokens.length,l(b).score=f,(null==d||f<d)&&(d=f,c=b));i(a,c||b)}function mb(a){if(!a._d){var b=K(a._i);a._a=g([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),hb(a)}}function nb(a){var b=new q(cb(ob(a)));
// Adding is smart enough around DST
return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function ob(a){var b=a._i,d=a._f;return a._locale=a._locale||ab(a._l),null===b||void 0===d&&""===b?n({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),r(b)?new q(cb(b)):(c(d)?lb(a):f(b)?a._d=b:d?jb(a):pb(a),m(a)||(a._d=null),a))}function pb(b){var d=b._i;void 0===d?b._d=new Date(a.now()):f(d)?b._d=new Date(d.valueOf()):"string"==typeof d?eb(b):c(d)?(b._a=g(d.slice(0),function(a){return parseInt(a,10)}),hb(b)):"object"==typeof d?mb(b):"number"==typeof d?
// from milliseconds
b._d=new Date(d):a.createFromInputFallback(b)}function qb(a,b,f,g,h){var i={};
// object construction must be done this way.
// https://github.com/moment/moment/issues/1423
return"boolean"==typeof f&&(g=f,f=void 0),(d(a)&&e(a)||c(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=h,i._l=f,i._i=a,i._f=b,i._strict=g,nb(i)}function rb(a,b,c,d){return qb(a,b,c,d,!1)}
// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function sb(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return rb();for(d=b[0],e=1;e<b.length;++e)b[e].isValid()&&!b[e][a](d)||(d=b[e]);return d}
// TODO: Use [].sort instead?
function tb(){var a=[].slice.call(arguments,0);return sb("isBefore",a)}function ub(){var a=[].slice.call(arguments,0);return sb("isAfter",a)}function vb(a){var b=K(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;
// representation for dateAddRemove
this._milliseconds=+k+1e3*j+// 1000
6e4*i+// 1000 * 60
1e3*h*60*60,//using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
// Because of dateAddRemove treats 24 hours as different from a
// day when working around DST, we need to store them separately
this._days=+g+7*f,
// It is impossible translate months into days without knowing
// which months you are are talking about, so we have to store
// it separately.
this._months=+e+3*d+12*c,this._data={},this._locale=ab(),this._bubble()}function wb(a){return a instanceof vb}function xb(a){return a<0?Math.round(-1*a)*-1:Math.round(a)}
// FORMATTING
function yb(a,b){T(a,0,0,function(){var a=this.utcOffset(),c="+";return a<0&&(a=-a,c="-"),c+S(~~(a/60),2)+b+S(~~a%60,2)})}function zb(a,b){var c=(b||"").match(a)||[],d=c[c.length-1]||[],e=(d+"").match(Ge)||["-",0,0],f=+(60*e[1])+t(e[2]);return"+"===e[0]?f:-f}
// Return a moment from input, that is local/utc/zone equivalent to model.
function Ab(b,c){var d,e;
// Use low-level api, because this fn is low-level api.
return c._isUTC?(d=c.clone(),e=(r(b)||f(b)?b.valueOf():rb(b).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+e),a.updateOffset(d,!1),d):rb(b).local()}function Bb(a){
// On Firefox.24 Date#getTimezoneOffset returns a floating point.
// https://github.com/moment/moment/pull/1871
return 15*-Math.round(a._d.getTimezoneOffset()/15)}
// MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function Cb(b,c){var d,e=this._offset||0;return this.isValid()?null!=b?("string"==typeof b?b=zb(Td,b):Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Bb(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?Sb(this,Nb(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Bb(this):null!=b?this:NaN}function Db(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Eb(a){return this.utcOffset(0,a)}function Fb(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Bb(this),"m")),this}function Gb(){if(this._tzm)this.utcOffset(this._tzm);else if("string"==typeof this._i){var a=zb(Sd,this._i);0===a?this.utcOffset(0,!0):this.utcOffset(zb(Sd,this._i))}return this}function Hb(a){return!!this.isValid()&&(a=a?rb(a).utcOffset():0,(this.utcOffset()-a)%60===0)}function Ib(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Jb(){if(!o(this._isDSTShifted))return this._isDSTShifted;var a={};if(p(a,this),a=ob(a),a._a){var b=a._isUTC?j(a._a):rb(a._a);this._isDSTShifted=this.isValid()&&u(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Kb(){return!!this.isValid()&&!this._isUTC}function Lb(){return!!this.isValid()&&this._isUTC}function Mb(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Nb(a,b){var c,d,e,f=a,
// matching against regexp is expensive, do it on demand
g=null;// checks for null or undefined
return wb(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(f={},b?f[b]=a:f.milliseconds=a):(g=He.exec(a))?(c="-"===g[1]?-1:1,f={y:0,d:t(g[$d])*c,h:t(g[_d])*c,m:t(g[ae])*c,s:t(g[be])*c,ms:t(xb(1e3*g[ce]))*c}):(g=Ie.exec(a))?(c="-"===g[1]?-1:1,f={y:Ob(g[2],c),M:Ob(g[3],c),w:Ob(g[4],c),d:Ob(g[5],c),h:Ob(g[6],c),m:Ob(g[7],c),s:Ob(g[8],c)}):null==f?f={}:"object"==typeof f&&("from"in f||"to"in f)&&(e=Qb(rb(f.from),rb(f.to)),f={},f.ms=e.milliseconds,f.M=e.months),d=new vb(f),wb(a)&&h(a,"_locale")&&(d._locale=a._locale),d}function Ob(a,b){
// We'd normally use ~~inp for this, but unfortunately it also
// converts floats to ints.
// inp may be undefined, so careful calling replace on it.
var c=a&&parseFloat(a.replace(",","."));
// apply sign while we're at it
return(isNaN(c)?0:c)*b}function Pb(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Qb(a,b){var c;return a.isValid()&&b.isValid()?(b=Ab(b,a),a.isBefore(b)?c=Pb(a,b):(c=Pb(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}
// TODO: remove 'name' arg after deprecation is removed
function Rb(a,b){return function(c,d){var e,f;
//invert the arguments, but complain about it
return null===d||isNaN(+d)||(x(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Nb(c,d),Sb(this,e,a),this}}function Sb(b,c,d,e){var f=c._milliseconds,g=xb(c._days),h=xb(c._months);b.isValid()&&(e=null==e||e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&P(b,"Date",O(b,"Date")+g*d),h&&ia(b,O(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function Tb(a,b){var c=a.diff(b,"days",!0);return c<-6?"sameElse":c<-1?"lastWeek":c<0?"lastDay":c<1?"sameDay":c<2?"nextDay":c<7?"nextWeek":"sameElse"}function Ub(b,c){
// We want to compare the start of today, vs this.
// Getting start-of-today depends on whether we're local/utc/offset or not.
var d=b||rb(),e=Ab(d,this).startOf("day"),f=a.calendarFormat(this,e)||"sameElse",g=c&&(y(c[f])?c[f].call(this,d):c[f]);return this.format(g||this.localeData().calendar(f,this,rb(d)))}function Vb(){return new q(this)}function Wb(a,b){var c=r(a)?a:rb(a);return!(!this.isValid()||!c.isValid())&&(b=J(o(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf())}function Xb(a,b){var c=r(a)?a:rb(a);return!(!this.isValid()||!c.isValid())&&(b=J(o(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf())}function Yb(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function Zb(a,b){var c,d=r(a)?a:rb(a);return!(!this.isValid()||!d.isValid())&&(b=J(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf()))}function $b(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function _b(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function ac(a,b,c){var d,e,f,g;// 1000
// 1000 * 60
// 1000 * 60 * 60
// 1000 * 60 * 60 * 24, negate dst
// 1000 * 60 * 60 * 24 * 7, negate dst
return this.isValid()?(d=Ab(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=J(b),"year"===b||"month"===b||"quarter"===b?(g=bc(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:s(g)):NaN):NaN}function bc(a,b){
// difference in months
var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),
// b is in (anchor - 1 month, anchor + 1 month)
f=a.clone().add(e,"months");
//check for negative zero, return zero if negative zero
// linear across the month
// linear across the month
return b-f<0?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function cc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function dc(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?y(Date.prototype.toISOString)?this.toDate().toISOString():W(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):W(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function ec(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=W(this,b);return this.localeData().postformat(c)}function fc(a,b){return this.isValid()&&(r(a)&&a.isValid()||rb(a).isValid())?Nb({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function gc(a){return this.from(rb(),a)}function hc(a,b){return this.isValid()&&(r(a)&&a.isValid()||rb(a).isValid())?Nb({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function ic(a){return this.to(rb(),a)}
// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function jc(a){var b;return void 0===a?this._locale._abbr:(b=ab(a),null!=b&&(this._locale=b),this)}function kc(){return this._locale}function lc(a){
// the following switch intentionally omits break keywords
// to utilize falling through the cases.
switch(a=J(a)){case"year":this.month(0);/* falls through */
case"quarter":case"month":this.date(1);/* falls through */
case"week":case"isoWeek":case"day":case"date":this.hours(0);/* falls through */
case"hour":this.minutes(0);/* falls through */
case"minute":this.seconds(0);/* falls through */
case"second":this.milliseconds(0)}
// weeks are a special case
// quarters are also special
return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function mc(a){
// 'date' is an alias for 'day', so it should be considered as such.
return a=J(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function nc(){return this._d.valueOf()-6e4*(this._offset||0)}function oc(){return Math.floor(this.valueOf()/1e3)}function pc(){return new Date(this.valueOf())}function qc(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function rc(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function sc(){
// new Date(NaN).toJSON() === null
return this.isValid()?this.toISOString():null}function tc(){return m(this)}function uc(){return i({},l(this))}function vc(){return l(this).overflow}function wc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function xc(a,b){T(0,[a,a.length],0,b)}
// MOMENTS
function yc(a){return Cc.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function zc(a){return Cc.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Ac(){return wa(this.year(),1,4)}function Bc(){var a=this.localeData()._week;return wa(this.year(),a.dow,a.doy)}function Cc(a,b,c,d,e){var f;return null==a?va(this,d,e).year:(f=wa(a,d,e),b>f&&(b=f),Dc.call(this,a,b,c,d,e))}function Dc(a,b,c,d,e){var f=ua(a,b,c,d,e),g=sa(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}
// MOMENTS
function Ec(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}
// HELPERS
// MOMENTS
function Fc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function Gc(a,b){b[ce]=t(1e3*("0."+a))}
// MOMENTS
function Hc(){return this._isUTC?"UTC":""}function Ic(){return this._isUTC?"Coordinated Universal Time":""}function Jc(a){return rb(1e3*a)}function Kc(){return rb.apply(null,arguments).parseZone()}function Lc(a){return a}function Mc(a,b,c,d){var e=ab(),f=j().set(d,b);return e[c](f,a)}function Nc(a,b,c){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return Mc(a,b,c,"month");var d,e=[];for(d=0;d<12;d++)e[d]=Mc(a,d,c,"month");return e}
// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function Oc(a,b,c,d){"boolean"==typeof a?("number"==typeof b&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,"number"==typeof b&&(c=b,b=void 0),b=b||"");var e=ab(),f=a?e._week.dow:0;if(null!=c)return Mc(b,(c+f)%7,d,"day");var g,h=[];for(g=0;g<7;g++)h[g]=Mc(b,(g+f)%7,d,"day");return h}function Pc(a,b){return Nc(a,b,"months")}function Qc(a,b){return Nc(a,b,"monthsShort")}function Rc(a,b,c){return Oc(a,b,c,"weekdays")}function Sc(a,b,c){return Oc(a,b,c,"weekdaysShort")}function Tc(a,b,c){return Oc(a,b,c,"weekdaysMin")}function Uc(){var a=this._data;return this._milliseconds=Ue(this._milliseconds),this._days=Ue(this._days),this._months=Ue(this._months),a.milliseconds=Ue(a.milliseconds),a.seconds=Ue(a.seconds),a.minutes=Ue(a.minutes),a.hours=Ue(a.hours),a.months=Ue(a.months),a.years=Ue(a.years),this}function Vc(a,b,c,d){var e=Nb(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}
// supports only 2.0-style add(1, 's') or add(duration)
function Wc(a,b){return Vc(this,a,b,1)}
// supports only 2.0-style subtract(1, 's') or subtract(duration)
function Xc(a,b){return Vc(this,a,b,-1)}function Yc(a){return a<0?Math.floor(a):Math.ceil(a)}function Zc(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;
// if we have a mix of positive and negative values, bubble down first
// check: https://github.com/moment/moment/issues/2166
// The following code bubbles up values, see the tests for
// examples of what that means.
// convert days to months
// 12 months -> 1 year
return f>=0&&g>=0&&h>=0||f<=0&&g<=0&&h<=0||(f+=864e5*Yc(_c(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=s(f/1e3),i.seconds=a%60,b=s(a/60),i.minutes=b%60,c=s(b/60),i.hours=c%24,g+=s(c/24),e=s($c(g)),h+=e,g-=Yc(_c(e)),d=s(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function $c(a){
// 400 years have 146097 days (taking into account leap year rules)
// 400 years have 12 months === 4800
return 4800*a/146097}function _c(a){
// the reverse of daysToMonths
return 146097*a/4800}function ad(a){var b,c,d=this._milliseconds;if(a=J(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+$c(b),"month"===a?c:c/12;switch(
// handle milliseconds separately because of floating point math errors (issue #1867)
b=this._days+Math.round(_c(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;
// Math.floor prevents floating point math errors here
case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}
// TODO: Use this.as('ms')?
function bd(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*t(this._months/12)}function cd(a){return function(){return this.as(a)}}function dd(a){return a=J(a),this[a+"s"]()}function ed(a){return function(){return this._data[a]}}function fd(){return s(this.days()/7)}
// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function gd(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function hd(a,b,c){var d=Nb(a).abs(),e=jf(d.as("s")),f=jf(d.as("m")),g=jf(d.as("h")),h=jf(d.as("d")),i=jf(d.as("M")),j=jf(d.as("y")),k=e<kf.s&&["s",e]||f<=1&&["m"]||f<kf.m&&["mm",f]||g<=1&&["h"]||g<kf.h&&["hh",g]||h<=1&&["d"]||h<kf.d&&["dd",h]||i<=1&&["M"]||i<kf.M&&["MM",i]||j<=1&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,gd.apply(null,k)}
// This function allows you to set the rounding function for relative time strings
function id(a){return void 0===a?jf:"function"==typeof a&&(jf=a,!0)}
// This function allows you to set a threshold for relative time strings
function jd(a,b){return void 0!==kf[a]&&(void 0===b?kf[a]:(kf[a]=b,!0))}function kd(a){var b=this.localeData(),c=hd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function ld(){
// for ISO strings we do not use the normal bubbling rules:
//  * milliseconds bubble up until they become hours
//  * days do not bubble at all
//  * months bubble up until they become years
// This is because there is no context-free conversion between hours and days
// (think of clock changes)
// and also not between days and months (28-31 days per month)
var a,b,c,d=lf(this._milliseconds)/1e3,e=lf(this._days),f=lf(this._months);
// 3600 seconds -> 60 minutes -> 1 hour
a=s(d/60),b=s(a/60),d%=60,a%=60,
// 12 months -> 1 year
c=s(f/12),f%=12;
// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(m<0?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var md,nd;nd=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;d<c;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};
// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var od=a.momentProperties=[],pd=!1,qd={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var rd;rd=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)h(a,b)&&c.push(b);return c};var sd,td={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},ud={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},vd="Invalid date",wd="%d",xd=/\d{1,2}/,yd={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},zd={},Ad={},Bd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Cd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Dd={},Ed={},Fd=/\d/,Gd=/\d\d/,Hd=/\d{3}/,Id=/\d{4}/,Jd=/[+-]?\d{6}/,Kd=/\d\d?/,Ld=/\d\d\d\d?/,Md=/\d\d\d\d\d\d?/,Nd=/\d{1,3}/,Od=/\d{1,4}/,Pd=/[+-]?\d{1,6}/,Qd=/\d+/,Rd=/[+-]?\d+/,Sd=/Z|[+-]\d\d:?\d\d/gi,Td=/Z|[+-]\d\d(?::?\d\d)?/gi,Ud=/[+-]?\d+(\.\d{1,3})?/,Vd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Wd={},Xd={},Yd=0,Zd=1,$d=2,_d=3,ae=4,be=5,ce=6,de=7,ee=8;sd=Array.prototype.indexOf?Array.prototype.indexOf:function(a){
// I know
var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1},
// FORMATTING
T("M",["MM",2],"Mo",function(){return this.month()+1}),T("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),T("MMMM",0,0,function(a){return this.localeData().months(this,a)}),
// ALIASES
I("month","M"),
// PRIORITY
L("month",8),
// PARSING
Y("M",Kd),Y("MM",Kd,Gd),Y("MMM",function(a,b){return b.monthsShortRegex(a)}),Y("MMMM",function(a,b){return b.monthsRegex(a)}),aa(["M","MM"],function(a,b){b[Zd]=t(a)-1}),aa(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);
// if we didn't find a month name, mark the date as invalid.
null!=e?b[Zd]=e:l(c).invalidMonth=a});
// LOCALES
var fe=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,ge="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),he="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ie=Vd,je=Vd;
// FORMATTING
T("Y",0,0,function(){var a=this.year();return a<=9999?""+a:"+"+a}),T(0,["YY",2],0,function(){return this.year()%100}),T(0,["YYYY",4],0,"year"),T(0,["YYYYY",5],0,"year"),T(0,["YYYYYY",6,!0],0,"year"),
// ALIASES
I("year","y"),
// PRIORITIES
L("year",1),
// PARSING
Y("Y",Rd),Y("YY",Kd,Gd),Y("YYYY",Od,Id),Y("YYYYY",Pd,Jd),Y("YYYYYY",Pd,Jd),aa(["YYYYY","YYYYYY"],Yd),aa("YYYY",function(b,c){c[Yd]=2===b.length?a.parseTwoDigitYear(b):t(b)}),aa("YY",function(b,c){c[Yd]=a.parseTwoDigitYear(b)}),aa("Y",function(a,b){b[Yd]=parseInt(a,10)}),
// HOOKS
a.parseTwoDigitYear=function(a){return t(a)+(t(a)>68?1900:2e3)};
// MOMENTS
var ke=N("FullYear",!0);
// FORMATTING
T("w",["ww",2],"wo","week"),T("W",["WW",2],"Wo","isoWeek"),
// ALIASES
I("week","w"),I("isoWeek","W"),
// PRIORITIES
L("week",5),L("isoWeek",5),
// PARSING
Y("w",Kd),Y("ww",Kd,Gd),Y("W",Kd),Y("WW",Kd,Gd),ba(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=t(a)});var le={dow:0,// Sunday is the first day of the week.
doy:6};
// FORMATTING
T("d",0,"do","day"),T("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),T("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),T("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),T("e",0,0,"weekday"),T("E",0,0,"isoWeekday"),
// ALIASES
I("day","d"),I("weekday","e"),I("isoWeekday","E"),
// PRIORITY
L("day",11),L("weekday",11),L("isoWeekday",11),
// PARSING
Y("d",Kd),Y("e",Kd),Y("E",Kd),Y("dd",function(a,b){return b.weekdaysMinRegex(a)}),Y("ddd",function(a,b){return b.weekdaysShortRegex(a)}),Y("dddd",function(a,b){return b.weekdaysRegex(a)}),ba(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);
// if we didn't get a weekday name, mark the date as invalid
null!=e?b.d=e:l(c).invalidWeekday=a}),ba(["d","e","E"],function(a,b,c,d){b[d]=t(a)});
// LOCALES
var me="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ne="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),oe="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),pe=Vd,qe=Vd,re=Vd;T("H",["HH",2],0,"hour"),T("h",["hh",2],0,Qa),T("k",["kk",2],0,Ra),T("hmm",0,0,function(){return""+Qa.apply(this)+S(this.minutes(),2)}),T("hmmss",0,0,function(){return""+Qa.apply(this)+S(this.minutes(),2)+S(this.seconds(),2)}),T("Hmm",0,0,function(){return""+this.hours()+S(this.minutes(),2)}),T("Hmmss",0,0,function(){return""+this.hours()+S(this.minutes(),2)+S(this.seconds(),2)}),Sa("a",!0),Sa("A",!1),
// ALIASES
I("hour","h"),
// PRIORITY
L("hour",13),Y("a",Ta),Y("A",Ta),Y("H",Kd),Y("h",Kd),Y("HH",Kd,Gd),Y("hh",Kd,Gd),Y("hmm",Ld),Y("hmmss",Md),Y("Hmm",Ld),Y("Hmmss",Md),aa(["H","HH"],_d),aa(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),aa(["h","hh"],function(a,b,c){b[_d]=t(a),l(c).bigHour=!0}),aa("hmm",function(a,b,c){var d=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d)),l(c).bigHour=!0}),aa("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d,2)),b[be]=t(a.substr(e)),l(c).bigHour=!0}),aa("Hmm",function(a,b,c){var d=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d))}),aa("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d,2)),b[be]=t(a.substr(e))});var se,te=/[ap]\.?m?\.?/i,ue=N("Hours",!0),ve={calendar:td,longDateFormat:ud,invalidDate:vd,ordinal:wd,ordinalParse:xd,relativeTime:yd,months:ge,monthsShort:he,week:le,weekdays:me,weekdaysMin:oe,weekdaysShort:ne,meridiemParse:te},we={},xe=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,ye=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,ze=/Z|[+-]\d\d(?::?\d\d)?/,Ae=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],
// YYYYMM is NOT allowed by the standard
["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Be=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ce=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=w("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),
// constant that refers to the ISO standard
a.ISO_8601=function(){};var De=w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=rb.apply(null,arguments);return this.isValid()&&a.isValid()?a<this?this:a:n()}),Ee=w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=rb.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:n()}),Fe=function(){return Date.now?Date.now():+new Date};yb("Z",":"),yb("ZZ",""),
// PARSING
Y("Z",Td),Y("ZZ",Td),aa(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=zb(Td,a)});
// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var Ge=/([\+\-]|\d\d)/gi;
// HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
a.updateOffset=function(){};
// ASP.NET json date format regex
var He=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Ie=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Nb.fn=vb.prototype;var Je=Rb(1,"add"),Ke=Rb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Le=w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});
// FORMATTING
T(0,["gg",2],0,function(){return this.weekYear()%100}),T(0,["GG",2],0,function(){return this.isoWeekYear()%100}),xc("gggg","weekYear"),xc("ggggg","weekYear"),xc("GGGG","isoWeekYear"),xc("GGGGG","isoWeekYear"),
// ALIASES
I("weekYear","gg"),I("isoWeekYear","GG"),
// PRIORITY
L("weekYear",1),L("isoWeekYear",1),
// PARSING
Y("G",Rd),Y("g",Rd),Y("GG",Kd,Gd),Y("gg",Kd,Gd),Y("GGGG",Od,Id),Y("gggg",Od,Id),Y("GGGGG",Pd,Jd),Y("ggggg",Pd,Jd),ba(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=t(a)}),ba(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),
// FORMATTING
T("Q",0,"Qo","quarter"),
// ALIASES
I("quarter","Q"),
// PRIORITY
L("quarter",7),
// PARSING
Y("Q",Fd),aa("Q",function(a,b){b[Zd]=3*(t(a)-1)}),
// FORMATTING
T("D",["DD",2],"Do","date"),
// ALIASES
I("date","D"),
// PRIOROITY
L("date",9),
// PARSING
Y("D",Kd),Y("DD",Kd,Gd),Y("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),aa(["D","DD"],$d),aa("Do",function(a,b){b[$d]=t(a.match(Kd)[0],10)});
// MOMENTS
var Me=N("Date",!0);
// FORMATTING
T("DDD",["DDDD",3],"DDDo","dayOfYear"),
// ALIASES
I("dayOfYear","DDD"),
// PRIORITY
L("dayOfYear",4),
// PARSING
Y("DDD",Nd),Y("DDDD",Hd),aa(["DDD","DDDD"],function(a,b,c){c._dayOfYear=t(a)}),
// FORMATTING
T("m",["mm",2],0,"minute"),
// ALIASES
I("minute","m"),
// PRIORITY
L("minute",14),
// PARSING
Y("m",Kd),Y("mm",Kd,Gd),aa(["m","mm"],ae);
// MOMENTS
var Ne=N("Minutes",!1);
// FORMATTING
T("s",["ss",2],0,"second"),
// ALIASES
I("second","s"),
// PRIORITY
L("second",15),
// PARSING
Y("s",Kd),Y("ss",Kd,Gd),aa(["s","ss"],be);
// MOMENTS
var Oe=N("Seconds",!1);
// FORMATTING
T("S",0,0,function(){return~~(this.millisecond()/100)}),T(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),T(0,["SSS",3],0,"millisecond"),T(0,["SSSS",4],0,function(){return 10*this.millisecond()}),T(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),T(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),T(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),T(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),T(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),
// ALIASES
I("millisecond","ms"),
// PRIORITY
L("millisecond",16),
// PARSING
Y("S",Nd,Fd),Y("SS",Nd,Gd),Y("SSS",Nd,Hd);var Pe;for(Pe="SSSS";Pe.length<=9;Pe+="S")Y(Pe,Qd);for(Pe="S";Pe.length<=9;Pe+="S")aa(Pe,Gc);
// MOMENTS
var Qe=N("Milliseconds",!1);
// FORMATTING
T("z",0,0,"zoneAbbr"),T("zz",0,0,"zoneName");var Re=q.prototype;Re.add=Je,Re.calendar=Ub,Re.clone=Vb,Re.diff=ac,Re.endOf=mc,Re.format=ec,Re.from=fc,Re.fromNow=gc,Re.to=hc,Re.toNow=ic,Re.get=Q,Re.invalidAt=vc,Re.isAfter=Wb,Re.isBefore=Xb,Re.isBetween=Yb,Re.isSame=Zb,Re.isSameOrAfter=$b,Re.isSameOrBefore=_b,Re.isValid=tc,Re.lang=Le,Re.locale=jc,Re.localeData=kc,Re.max=Ee,Re.min=De,Re.parsingFlags=uc,Re.set=R,Re.startOf=lc,Re.subtract=Ke,Re.toArray=qc,Re.toObject=rc,Re.toDate=pc,Re.toISOString=dc,Re.toJSON=sc,Re.toString=cc,Re.unix=oc,Re.valueOf=nc,Re.creationData=wc,
// Year
Re.year=ke,Re.isLeapYear=qa,
// Week Year
Re.weekYear=yc,Re.isoWeekYear=zc,
// Quarter
Re.quarter=Re.quarters=Ec,
// Month
Re.month=ja,Re.daysInMonth=ka,
// Week
Re.week=Re.weeks=Aa,Re.isoWeek=Re.isoWeeks=Ba,Re.weeksInYear=Bc,Re.isoWeeksInYear=Ac,
// Day
Re.date=Me,Re.day=Re.days=Ja,Re.weekday=Ka,Re.isoWeekday=La,Re.dayOfYear=Fc,
// Hour
Re.hour=Re.hours=ue,
// Minute
Re.minute=Re.minutes=Ne,
// Second
Re.second=Re.seconds=Oe,
// Millisecond
Re.millisecond=Re.milliseconds=Qe,
// Offset
Re.utcOffset=Cb,Re.utc=Eb,Re.local=Fb,Re.parseZone=Gb,Re.hasAlignedHourOffset=Hb,Re.isDST=Ib,Re.isLocal=Kb,Re.isUtcOffset=Lb,Re.isUtc=Mb,Re.isUTC=Mb,
// Timezone
Re.zoneAbbr=Hc,Re.zoneName=Ic,
// Deprecations
Re.dates=w("dates accessor is deprecated. Use date instead.",Me),Re.months=w("months accessor is deprecated. Use month instead",ja),Re.years=w("years accessor is deprecated. Use year instead",ke),Re.zone=w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Db),Re.isDSTShifted=w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Jb);var Se=Re,Te=B.prototype;Te.calendar=C,Te.longDateFormat=D,Te.invalidDate=E,Te.ordinal=F,Te.preparse=Lc,Te.postformat=Lc,Te.relativeTime=G,Te.pastFuture=H,Te.set=z,
// Month
Te.months=ea,Te.monthsShort=fa,Te.monthsParse=ha,Te.monthsRegex=ma,Te.monthsShortRegex=la,
// Week
Te.week=xa,Te.firstDayOfYear=za,Te.firstDayOfWeek=ya,
// Day of Week
Te.weekdays=Ea,Te.weekdaysMin=Ga,Te.weekdaysShort=Fa,Te.weekdaysParse=Ia,Te.weekdaysRegex=Ma,Te.weekdaysShortRegex=Na,Te.weekdaysMinRegex=Oa,
// Hours
Te.isPM=Ua,Te.meridiem=Va,Za("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===t(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),
// Side effect imports
a.lang=w("moment.lang is deprecated. Use moment.locale instead.",Za),a.langData=w("moment.langData is deprecated. Use moment.localeData instead.",ab);var Ue=Math.abs,Ve=cd("ms"),We=cd("s"),Xe=cd("m"),Ye=cd("h"),Ze=cd("d"),$e=cd("w"),_e=cd("M"),af=cd("y"),bf=ed("milliseconds"),cf=ed("seconds"),df=ed("minutes"),ef=ed("hours"),ff=ed("days"),gf=ed("months"),hf=ed("years"),jf=Math.round,kf={s:45,// seconds to minute
m:45,// minutes to hour
h:22,// hours to day
d:26,// days to month
M:11},lf=Math.abs,mf=vb.prototype;mf.abs=Uc,mf.add=Wc,mf.subtract=Xc,mf.as=ad,mf.asMilliseconds=Ve,mf.asSeconds=We,mf.asMinutes=Xe,mf.asHours=Ye,mf.asDays=Ze,mf.asWeeks=$e,mf.asMonths=_e,mf.asYears=af,mf.valueOf=bd,mf._bubble=Zc,mf.get=dd,mf.milliseconds=bf,mf.seconds=cf,mf.minutes=df,mf.hours=ef,mf.days=ff,mf.weeks=fd,mf.months=gf,mf.years=hf,mf.humanize=kd,mf.toISOString=ld,mf.toString=ld,mf.toJSON=ld,mf.locale=jc,mf.localeData=kc,
// Deprecations
mf.toIsoString=w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ld),mf.lang=Le,
// Side effect imports
// FORMATTING
T("X",0,0,"unix"),T("x",0,0,"valueOf"),
// PARSING
Y("x",Rd),Y("X",Ud),aa("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),aa("x",function(a,b,c){c._d=new Date(t(a))}),
// Side effect imports
a.version="2.15.2",b(rb),a.fn=Se,a.min=tb,a.max=ub,a.now=Fe,a.utc=j,a.unix=Jc,a.months=Pc,a.isDate=f,a.locale=Za,a.invalid=n,a.duration=Nb,a.isMoment=r,a.weekdays=Rc,a.parseZone=Kc,a.localeData=ab,a.isDuration=wb,a.monthsShort=Qc,a.weekdaysMin=Tc,a.defineLocale=$a,a.updateLocale=_a,a.locales=bb,a.weekdaysShort=Sc,a.normalizeUnits=J,a.relativeTimeRounding=id,a.relativeTimeThreshold=jd,a.calendarFormat=Tb,a.prototype=Se;var nf=a;return nf});;/*! version : 4.15.35
 =========================================================
 bootstrap-datetimejs
 https://github.com/Eonasdan/bootstrap-datetimepicker
 Copyright (c) 2015 Jonathan Peterson
 =========================================================
 */
!function(a){"use strict";if("function"==typeof define&&define.amd)define(["jquery","moment"],a);else if("object"==typeof exports)a(require("jquery"),require("moment"));else{if("undefined"==typeof jQuery)throw"bootstrap-datetimepicker requires jQuery to be loaded first";if("undefined"==typeof moment)throw"bootstrap-datetimepicker requires Moment.js to be loaded first";a(jQuery,moment)}}(function(a,b){"use strict";if(!b)throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");var c=function(c,d){var e,f,g,h,i,j={},k=b().startOf("d"),l=k.clone(),m=!0,n=!1,o=!1,p=0,q=[{clsName:"days",navFnc:"M",navStep:1},{clsName:"months",navFnc:"y",navStep:1},{clsName:"years",navFnc:"y",navStep:10},{clsName:"decades",navFnc:"y",navStep:100}],r=["days","months","years","decades"],s=["top","bottom","auto"],t=["left","right","auto"],u=["default","top","bottom"],v={up:38,38:"up",down:40,40:"down",left:37,37:"left",right:39,39:"right",tab:9,9:"tab",escape:27,27:"escape",enter:13,13:"enter",pageUp:33,33:"pageUp",pageDown:34,34:"pageDown",shift:16,16:"shift",control:17,17:"control",space:32,32:"space",t:84,84:"t","delete":46,46:"delete"},w={},x=function(a){if("string"!=typeof a||a.length>1)throw new TypeError("isEnabled expects a single character string parameter");switch(a){case"y":return-1!==g.indexOf("Y");case"M":return-1!==g.indexOf("M");case"d":return-1!==g.toLowerCase().indexOf("d");case"h":case"H":return-1!==g.toLowerCase().indexOf("h");case"m":return-1!==g.indexOf("m");case"s":return-1!==g.indexOf("s");default:return!1}},y=function(){return x("h")||x("m")||x("s")},z=function(){return x("y")||x("M")||x("d")},A=function(){var b=a("<thead>").append(a("<tr>").append(a("<th>").addClass("prev").attr("data-action","previous").append(a("<span>").addClass(d.icons.previous))).append(a("<th>").addClass("picker-switch").attr("data-action","pickerSwitch").attr("colspan",d.calendarWeeks?"6":"5")).append(a("<th>").addClass("next").attr("data-action","next").append(a("<span>").addClass(d.icons.next)))),c=a("<tbody>").append(a("<tr>").append(a("<td>").attr("colspan",d.calendarWeeks?"8":"7")));return[a("<div>").addClass("datepicker-days").append(a("<table>").addClass("table-condensed").append(b).append(a("<tbody>"))),a("<div>").addClass("datepicker-months").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone())),a("<div>").addClass("datepicker-years").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone())),a("<div>").addClass("datepicker-decades").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone()))]},B=function(){var b=a("<tr>"),c=a("<tr>"),e=a("<tr>");return x("h")&&(b.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:"Increment Hour"}).addClass("btn").attr("data-action","incrementHours").append(a("<span>").addClass(d.icons.up)))),c.append(a("<td>").append(a("<span>").addClass("timepicker-hour").attr({"data-time-component":"hours",title:"Pick Hour"}).attr("data-action","showHours"))),e.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:"Decrement Hour"}).addClass("btn").attr("data-action","decrementHours").append(a("<span>").addClass(d.icons.down))))),x("m")&&(x("h")&&(b.append(a("<td>").addClass("separator")),c.append(a("<td>").addClass("separator").html(":")),e.append(a("<td>").addClass("separator"))),b.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:"Increment Minute"}).addClass("btn").attr("data-action","incrementMinutes").append(a("<span>").addClass(d.icons.up)))),c.append(a("<td>").append(a("<span>").addClass("timepicker-minute").attr({"data-time-component":"minutes",title:"Pick Minute"}).attr("data-action","showMinutes"))),e.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:"Decrement Minute"}).addClass("btn").attr("data-action","decrementMinutes").append(a("<span>").addClass(d.icons.down))))),x("s")&&(x("m")&&(b.append(a("<td>").addClass("separator")),c.append(a("<td>").addClass("separator").html(":")),e.append(a("<td>").addClass("separator"))),b.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:"Increment Second"}).addClass("btn").attr("data-action","incrementSeconds").append(a("<span>").addClass(d.icons.up)))),c.append(a("<td>").append(a("<span>").addClass("timepicker-second").attr({"data-time-component":"seconds",title:"Pick Second"}).attr("data-action","showSeconds"))),e.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:"Decrement Second"}).addClass("btn").attr("data-action","decrementSeconds").append(a("<span>").addClass(d.icons.down))))),f||(b.append(a("<td>").addClass("separator")),c.append(a("<td>").append(a("<button>").addClass("btn btn-primary").attr({"data-action":"togglePeriod",tabindex:"-1",title:"Toggle Period"}))),e.append(a("<td>").addClass("separator"))),a("<div>").addClass("timepicker-picker").append(a("<table>").addClass("table-condensed").append([b,c,e]))},C=function(){var b=a("<div>").addClass("timepicker-hours").append(a("<table>").addClass("table-condensed")),c=a("<div>").addClass("timepicker-minutes").append(a("<table>").addClass("table-condensed")),d=a("<div>").addClass("timepicker-seconds").append(a("<table>").addClass("table-condensed")),e=[B()];return x("h")&&e.push(b),x("m")&&e.push(c),x("s")&&e.push(d),e},D=function(){var b=[];return d.showTodayButton&&b.push(a("<td>").append(a("<a>").attr({"data-action":"today",title:d.tooltips.today}).append(a("<span>").addClass(d.icons.today)))),!d.sideBySide&&z()&&y()&&b.push(a("<td>").append(a("<a>").attr({"data-action":"togglePicker",title:"Select Time"}).append(a("<span>").addClass(d.icons.time)))),d.showClear&&b.push(a("<td>").append(a("<a>").attr({"data-action":"clear",title:d.tooltips.clear}).append(a("<span>").addClass(d.icons.clear)))),d.showClose&&b.push(a("<td>").append(a("<a>").attr({"data-action":"close",title:d.tooltips.close}).append(a("<span>").addClass(d.icons.close)))),a("<table>").addClass("table-condensed").append(a("<tbody>").append(a("<tr>").append(b)))},E=function(){var b=a("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),c=a("<div>").addClass("datepicker").append(A()),e=a("<div>").addClass("timepicker").append(C()),g=a("<ul>").addClass("list-unstyled"),h=a("<li>").addClass("picker-switch"+(d.collapse?" accordion-toggle":"")).append(D());return d.inline&&b.removeClass("dropdown-menu"),f&&b.addClass("usetwentyfour"),x("s")&&!f&&b.addClass("wider"),d.sideBySide&&z()&&y()?(b.addClass("timepicker-sbs"),"top"===d.toolbarPlacement&&b.append(h),b.append(a("<div>").addClass("row").append(c.addClass("col-md-6")).append(e.addClass("col-md-6"))),"bottom"===d.toolbarPlacement&&b.append(h),b):("top"===d.toolbarPlacement&&g.append(h),z()&&g.append(a("<li>").addClass(d.collapse&&y()?"collapse in":"").append(c)),"default"===d.toolbarPlacement&&g.append(h),y()&&g.append(a("<li>").addClass(d.collapse&&z()?"collapse":"").append(e)),"bottom"===d.toolbarPlacement&&g.append(h),b.append(g))},F=function(){var b,e={};return b=c.is("input")||d.inline?c.data():c.find("input").data(),b.dateOptions&&b.dateOptions instanceof Object&&(e=a.extend(!0,e,b.dateOptions)),a.each(d,function(a){var c="date"+a.charAt(0).toUpperCase()+a.slice(1);void 0!==b[c]&&(e[a]=b[c])}),e},G=function(){var b,e=(n||c).position(),f=(n||c).offset(),g=d.widgetPositioning.vertical,h=d.widgetPositioning.horizontal;if(d.widgetParent)b=d.widgetParent.append(o);else if(c.is("input"))b=c.after(o).parent();else{if(d.inline)return void(b=c.append(o));b=c,c.children().first().after(o)}if("auto"===g&&(g=f.top+1.5*o.height()>=a(window).height()+a(window).scrollTop()&&o.height()+c.outerHeight()<f.top?"top":"bottom"),"auto"===h&&(h=b.width()<f.left+o.outerWidth()/2&&f.left+o.outerWidth()>a(window).width()?"right":"left"),"top"===g?o.addClass("top").removeClass("bottom"):o.addClass("bottom").removeClass("top"),"right"===h?o.addClass("pull-right"):o.removeClass("pull-right"),"relative"!==b.css("position")&&(b=b.parents().filter(function(){return"relative"===a(this).css("position")}).first()),0===b.length)throw new Error("datetimepicker component should be placed within a relative positioned container");o.css({top:"top"===g?"auto":e.top+c.outerHeight(),bottom:"top"===g?e.top+c.outerHeight():"auto",left:"left"===h?b===c?0:e.left:"auto",right:"left"===h?"auto":b.outerWidth()-c.outerWidth()-(b===c?0:e.left)})},H=function(a){"dp.change"===a.type&&(a.date&&a.date.isSame(a.oldDate)||!a.date&&!a.oldDate)||c.trigger(a)},I=function(a){"y"===a&&(a="YYYY"),H({type:"dp.update",change:a,viewDate:l.clone()})},J=function(a){o&&(a&&(i=Math.max(p,Math.min(3,i+a))),o.find(".datepicker > div").hide().filter(".datepicker-"+q[i].clsName).show())},K=function(){var b=a("<tr>"),c=l.clone().startOf("w").startOf("d");for(d.calendarWeeks===!0&&b.append(a("<th>").addClass("cw").text("#"));c.isBefore(l.clone().endOf("w"));)b.append(a("<th>").addClass("dow").text(c.format("dd"))),c.add(1,"d");o.find(".datepicker-days thead").append(b)},L=function(a){return d.disabledDates[a.format("YYYY-MM-DD")]===!0},M=function(a){return d.enabledDates[a.format("YYYY-MM-DD")]===!0},N=function(a){return d.disabledHours[a.format("H")]===!0},O=function(a){return d.enabledHours[a.format("H")]===!0},P=function(b,c){if(!b.isValid())return!1;if(d.disabledDates&&"d"===c&&L(b))return!1;if(d.enabledDates&&"d"===c&&!M(b))return!1;if(d.minDate&&b.isBefore(d.minDate,c))return!1;if(d.maxDate&&b.isAfter(d.maxDate,c))return!1;if(d.daysOfWeekDisabled&&"d"===c&&-1!==d.daysOfWeekDisabled.indexOf(b.day()))return!1;if(d.disabledHours&&("h"===c||"m"===c||"s"===c)&&N(b))return!1;if(d.enabledHours&&("h"===c||"m"===c||"s"===c)&&!O(b))return!1;if(d.disabledTimeIntervals&&("h"===c||"m"===c||"s"===c)){var e=!1;if(a.each(d.disabledTimeIntervals,function(){return b.isBetween(this[0],this[1])?(e=!0,!1):void 0}),e)return!1}return!0},Q=function(){for(var b=[],c=l.clone().startOf("y").startOf("d");c.isSame(l,"y");)b.push(a("<span>").attr("data-action","selectMonth").addClass("month").text(c.format("MMM"))),c.add(1,"M");o.find(".datepicker-months td").empty().append(b)},R=function(){var b=o.find(".datepicker-months"),c=b.find("th"),e=b.find("tbody").find("span");c.eq(0).find("span").attr("title",d.tooltips.prevYear),c.eq(1).attr("title",d.tooltips.selectYear),c.eq(2).find("span").attr("title",d.tooltips.nextYear),b.find(".disabled").removeClass("disabled"),P(l.clone().subtract(1,"y"),"y")||c.eq(0).addClass("disabled"),c.eq(1).text(l.year()),P(l.clone().add(1,"y"),"y")||c.eq(2).addClass("disabled"),e.removeClass("active"),k.isSame(l,"y")&&!m&&e.eq(k.month()).addClass("active"),e.each(function(b){P(l.clone().month(b),"M")||a(this).addClass("disabled")})},S=function(){var a=o.find(".datepicker-years"),b=a.find("th"),c=l.clone().subtract(5,"y"),e=l.clone().add(6,"y"),f="";for(b.eq(0).find("span").attr("title",d.tooltips.nextDecade),b.eq(1).attr("title",d.tooltips.selectDecade),b.eq(2).find("span").attr("title",d.tooltips.prevDecade),a.find(".disabled").removeClass("disabled"),d.minDate&&d.minDate.isAfter(c,"y")&&b.eq(0).addClass("disabled"),b.eq(1).text(c.year()+"-"+e.year()),d.maxDate&&d.maxDate.isBefore(e,"y")&&b.eq(2).addClass("disabled");!c.isAfter(e,"y");)f+='<span data-action="selectYear" class="year'+(c.isSame(k,"y")&&!m?" active":"")+(P(c,"y")?"":" disabled")+'">'+c.year()+"</span>",c.add(1,"y");a.find("td").html(f)},T=function(){var a=o.find(".datepicker-decades"),c=a.find("th"),e=b(l.isBefore(b({y:1999}))?{y:1899}:{y:1999}),f=e.clone().add(100,"y"),g="";for(c.eq(0).find("span").attr("title",d.tooltips.prevCentury),c.eq(2).find("span").attr("title",d.tooltips.nextCentury),a.find(".disabled").removeClass("disabled"),(e.isSame(b({y:1900}))||d.minDate&&d.minDate.isAfter(e,"y"))&&c.eq(0).addClass("disabled"),c.eq(1).text(e.year()+"-"+f.year()),(e.isSame(b({y:2e3}))||d.maxDate&&d.maxDate.isBefore(f,"y"))&&c.eq(2).addClass("disabled");!e.isAfter(f,"y");)g+='<span data-action="selectDecade" class="decade'+(e.isSame(k,"y")?" active":"")+(P(e,"y")?"":" disabled")+'" data-selection="'+(e.year()+6)+'">'+(e.year()+1)+" - "+(e.year()+12)+"</span>",e.add(12,"y");g+="<span></span><span></span><span></span>",a.find("td").html(g)},U=function(){var c,e,f,g,h=o.find(".datepicker-days"),i=h.find("th"),j=[];if(z()){for(i.eq(0).find("span").attr("title",d.tooltips.prevMonth),i.eq(1).attr("title",d.tooltips.selectMonth),i.eq(2).find("span").attr("title",d.tooltips.nextMonth),h.find(".disabled").removeClass("disabled"),i.eq(1).text(l.format(d.dayViewHeaderFormat)),P(l.clone().subtract(1,"M"),"M")||i.eq(0).addClass("disabled"),P(l.clone().add(1,"M"),"M")||i.eq(2).addClass("disabled"),c=l.clone().startOf("M").startOf("w").startOf("d"),g=0;42>g;g++)0===c.weekday()&&(e=a("<tr>"),d.calendarWeeks&&e.append('<td class="cw">'+c.week()+"</td>"),j.push(e)),f="",c.isBefore(l,"M")&&(f+=" old"),c.isAfter(l,"M")&&(f+=" new"),c.isSame(k,"d")&&!m&&(f+=" active"),P(c,"d")||(f+=" disabled"),c.isSame(b(),"d")&&(f+=" today"),(0===c.day()||6===c.day())&&(f+=" weekend"),e.append('<td data-action="selectDay" data-day="'+c.format("L")+'" class="day'+f+'">'+c.date()+"</td>"),c.add(1,"d");h.find("tbody").empty().append(j),R(),S(),T()}},V=function(){var b=o.find(".timepicker-hours table"),c=l.clone().startOf("d"),d=[],e=a("<tr>");for(l.hour()>11&&!f&&c.hour(12);c.isSame(l,"d")&&(f||l.hour()<12&&c.hour()<12||l.hour()>11);)c.hour()%4===0&&(e=a("<tr>"),d.push(e)),e.append('<td data-action="selectHour" class="hour'+(P(c,"h")?"":" disabled")+'">'+c.format(f?"HH":"hh")+"</td>"),c.add(1,"h");b.empty().append(d)},W=function(){for(var b=o.find(".timepicker-minutes table"),c=l.clone().startOf("h"),e=[],f=a("<tr>"),g=1===d.stepping?5:d.stepping;l.isSame(c,"h");)c.minute()%(4*g)===0&&(f=a("<tr>"),e.push(f)),f.append('<td data-action="selectMinute" class="minute'+(P(c,"m")?"":" disabled")+'">'+c.format("mm")+"</td>"),c.add(g,"m");b.empty().append(e)},X=function(){for(var b=o.find(".timepicker-seconds table"),c=l.clone().startOf("m"),d=[],e=a("<tr>");l.isSame(c,"m");)c.second()%20===0&&(e=a("<tr>"),d.push(e)),e.append('<td data-action="selectSecond" class="second'+(P(c,"s")?"":" disabled")+'">'+c.format("ss")+"</td>"),c.add(5,"s");b.empty().append(d)},Y=function(){var a,b,c=o.find(".timepicker span[data-time-component]");f||(a=o.find(".timepicker [data-action=togglePeriod]"),b=k.clone().add(k.hours()>=12?-12:12,"h"),a.text(k.format("A")),P(b,"h")?a.removeClass("disabled"):a.addClass("disabled")),c.filter("[data-time-component=hours]").text(k.format(f?"HH":"hh")),c.filter("[data-time-component=minutes]").text(k.format("mm")),c.filter("[data-time-component=seconds]").text(k.format("ss")),V(),W(),X()},Z=function(){o&&(U(),Y())},$=function(a){var b=m?null:k;return a?(a=a.clone().locale(d.locale),1!==d.stepping&&a.minutes(Math.round(a.minutes()/d.stepping)*d.stepping%60).seconds(0),void(P(a)?(k=a,l=k.clone(),e.val(k.format(g)),c.data("date",k.format(g)),m=!1,Z(),H({type:"dp.change",date:k.clone(),oldDate:b})):(d.keepInvalid||e.val(m?"":k.format(g)),H({type:"dp.error",date:a})))):(m=!0,e.val(""),c.data("date",""),H({type:"dp.change",date:!1,oldDate:b}),void Z())},_=function(){var b=!1;return o?(o.find(".collapse").each(function(){var c=a(this).data("collapse");return c&&c.transitioning?(b=!0,!1):!0}),b?j:(n&&n.hasClass("btn")&&n.toggleClass("active"),o.hide(),a(window).off("resize",G),o.off("click","[data-action]"),o.off("mousedown",!1),o.remove(),o=!1,H({type:"dp.hide",date:k.clone()}),e.blur(),j)):j},aa=function(){$(null)},ba={next:function(){var a=q[i].navFnc;l.add(q[i].navStep,a),U(),I(a)},previous:function(){var a=q[i].navFnc;l.subtract(q[i].navStep,a),U(),I(a)},pickerSwitch:function(){J(1)},selectMonth:function(b){var c=a(b.target).closest("tbody").find("span").index(a(b.target));l.month(c),i===p?($(k.clone().year(l.year()).month(l.month())),d.inline||_()):(J(-1),U()),I("M")},selectYear:function(b){var c=parseInt(a(b.target).text(),10)||0;l.year(c),i===p?($(k.clone().year(l.year())),d.inline||_()):(J(-1),U()),I("YYYY")},selectDecade:function(b){var c=parseInt(a(b.target).data("selection"),10)||0;l.year(c),i===p?($(k.clone().year(l.year())),d.inline||_()):(J(-1),U()),I("YYYY")},selectDay:function(b){var c=l.clone();a(b.target).is(".old")&&c.subtract(1,"M"),a(b.target).is(".new")&&c.add(1,"M"),$(c.date(parseInt(a(b.target).text(),10))),y()||d.keepOpen||d.inline||_()},incrementHours:function(){var a=k.clone().add(1,"h");P(a,"h")&&$(a)},incrementMinutes:function(){var a=k.clone().add(d.stepping,"m");P(a,"m")&&$(a)},incrementSeconds:function(){var a=k.clone().add(1,"s");P(a,"s")&&$(a)},decrementHours:function(){var a=k.clone().subtract(1,"h");P(a,"h")&&$(a)},decrementMinutes:function(){var a=k.clone().subtract(d.stepping,"m");P(a,"m")&&$(a)},decrementSeconds:function(){var a=k.clone().subtract(1,"s");P(a,"s")&&$(a)},togglePeriod:function(){$(k.clone().add(k.hours()>=12?-12:12,"h"))},togglePicker:function(b){var c,e=a(b.target),f=e.closest("ul"),g=f.find(".in"),h=f.find(".collapse:not(.in)");if(g&&g.length){if(c=g.data("collapse"),c&&c.transitioning)return;g.collapse?(g.collapse("hide"),h.collapse("show")):(g.removeClass("in"),h.addClass("in")),e.is("span")?e.toggleClass(d.icons.time+" "+d.icons.date):e.find("span").toggleClass(d.icons.time+" "+d.icons.date)}},showPicker:function(){o.find(".timepicker > div:not(.timepicker-picker)").hide(),o.find(".timepicker .timepicker-picker").show()},showHours:function(){o.find(".timepicker .timepicker-picker").hide(),o.find(".timepicker .timepicker-hours").show()},showMinutes:function(){o.find(".timepicker .timepicker-picker").hide(),o.find(".timepicker .timepicker-minutes").show()},showSeconds:function(){o.find(".timepicker .timepicker-picker").hide(),o.find(".timepicker .timepicker-seconds").show()},selectHour:function(b){var c=parseInt(a(b.target).text(),10);f||(k.hours()>=12?12!==c&&(c+=12):12===c&&(c=0)),$(k.clone().hours(c)),ba.showPicker.call(j)},selectMinute:function(b){$(k.clone().minutes(parseInt(a(b.target).text(),10))),ba.showPicker.call(j)},selectSecond:function(b){$(k.clone().seconds(parseInt(a(b.target).text(),10))),ba.showPicker.call(j)},clear:aa,today:function(){P(b(),"d")&&$(b())},close:_},ca=function(b){return a(b.currentTarget).is(".disabled")?!1:(ba[a(b.currentTarget).data("action")].apply(j,arguments),!1)},da=function(){var c,f={year:function(a){return a.month(0).date(1).hours(0).seconds(0).minutes(0)},month:function(a){return a.date(1).hours(0).seconds(0).minutes(0)},day:function(a){return a.hours(0).seconds(0).minutes(0)},hour:function(a){return a.seconds(0).minutes(0)},minute:function(a){return a.seconds(0)}};return e.prop("disabled")||!d.ignoreReadonly&&e.prop("readonly")||o?j:(void 0!==e.val()&&0!==e.val().trim().length?$(fa(e.val().trim())):d.useCurrent&&m&&(e.is("input")&&0===e.val().trim().length||d.inline)&&(c=b(),"string"==typeof d.useCurrent&&(c=f[d.useCurrent](c)),$(c)),o=E(),K(),Q(),o.find(".timepicker-hours").hide(),o.find(".timepicker-minutes").hide(),o.find(".timepicker-seconds").hide(),Z(),J(),a(window).on("resize",G),o.on("click","[data-action]",ca),o.on("mousedown",!1),n&&n.hasClass("btn")&&n.toggleClass("active"),o.show(),G(),d.focusOnShow&&!e.is(":focus")&&e.focus(),H({type:"dp.show"}),j)},ea=function(){return o?_():da()},fa=function(a){return a=void 0===d.parseInputDate?b.isMoment(a)||a instanceof Date?b(a):b(a,h,d.useStrict):d.parseInputDate(a),a.locale(d.locale),a},ga=function(a){var b,c,e,f,g=null,h=[],i={},k=a.which,l="p";w[k]=l;for(b in w)w.hasOwnProperty(b)&&w[b]===l&&(h.push(b),parseInt(b,10)!==k&&(i[b]=!0));for(b in d.keyBinds)if(d.keyBinds.hasOwnProperty(b)&&"function"==typeof d.keyBinds[b]&&(e=b.split(" "),e.length===h.length&&v[k]===e[e.length-1])){for(f=!0,c=e.length-2;c>=0;c--)if(!(v[e[c]]in i)){f=!1;break}if(f){g=d.keyBinds[b];break}}g&&(g.call(j,o),a.stopPropagation(),a.preventDefault())},ha=function(a){w[a.which]="r",a.stopPropagation(),a.preventDefault()},ia=function(b){var c=a(b.target).val().trim(),d=c?fa(c):null;return $(d),b.stopImmediatePropagation(),!1},ja=function(){e.on({change:ia,blur:d.debug?"":_,keydown:ga,keyup:ha,focus:d.allowInputToggle?da:""}),c.is("input")?e.on({focus:da}):n&&(n.on("click",ea),n.on("mousedown",!1))},ka=function(){e.off({change:ia,blur:blur,keydown:ga,keyup:ha,focus:d.allowInputToggle?_:""}),c.is("input")?e.off({focus:da}):n&&(n.off("click",ea),n.off("mousedown",!1))},la=function(b){var c={};return a.each(b,function(){var a=fa(this);a.isValid()&&(c[a.format("YYYY-MM-DD")]=!0)}),Object.keys(c).length?c:!1},ma=function(b){var c={};return a.each(b,function(){c[this]=!0}),Object.keys(c).length?c:!1},na=function(){var a=d.format||"L LT";g=a.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(a){var b=k.localeData().longDateFormat(a)||a;return b.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(a){return k.localeData().longDateFormat(a)||a})}),h=d.extraFormats?d.extraFormats.slice():[],h.indexOf(a)<0&&h.indexOf(g)<0&&h.push(g),f=g.toLowerCase().indexOf("a")<1&&g.replace(/\[.*?\]/g,"").indexOf("h")<1,x("y")&&(p=2),x("M")&&(p=1),x("d")&&(p=0),i=Math.max(p,i),m||$(k)};if(j.destroy=function(){_(),ka(),c.removeData("DateTimePicker"),c.removeData("date")},j.toggle=ea,j.show=da,j.hide=_,j.disable=function(){return _(),n&&n.hasClass("btn")&&n.addClass("disabled"),e.prop("disabled",!0),j},j.enable=function(){return n&&n.hasClass("btn")&&n.removeClass("disabled"),e.prop("disabled",!1),j},j.ignoreReadonly=function(a){if(0===arguments.length)return d.ignoreReadonly;if("boolean"!=typeof a)throw new TypeError("ignoreReadonly () expects a boolean parameter");return d.ignoreReadonly=a,j},j.options=function(b){if(0===arguments.length)return a.extend(!0,{},d);if(!(b instanceof Object))throw new TypeError("options() options parameter should be an object");return a.extend(!0,d,b),a.each(d,function(a,b){if(void 0===j[a])throw new TypeError("option "+a+" is not recognized!");j[a](b)}),j},j.date=function(a){if(0===arguments.length)return m?null:k.clone();if(!(null===a||"string"==typeof a||b.isMoment(a)||a instanceof Date))throw new TypeError("date() parameter must be one of [null, string, moment or Date]");return $(null===a?null:fa(a)),j},j.format=function(a){if(0===arguments.length)return d.format;if("string"!=typeof a&&("boolean"!=typeof a||a!==!1))throw new TypeError("format() expects a sting or boolean:false parameter "+a);return d.format=a,g&&na(),j},j.dayViewHeaderFormat=function(a){if(0===arguments.length)return d.dayViewHeaderFormat;if("string"!=typeof a)throw new TypeError("dayViewHeaderFormat() expects a string parameter");return d.dayViewHeaderFormat=a,j},j.extraFormats=function(a){if(0===arguments.length)return d.extraFormats;if(a!==!1&&!(a instanceof Array))throw new TypeError("extraFormats() expects an array or false parameter");return d.extraFormats=a,h&&na(),j},j.disabledDates=function(b){if(0===arguments.length)return d.disabledDates?a.extend({},d.disabledDates):d.disabledDates;if(!b)return d.disabledDates=!1,Z(),j;if(!(b instanceof Array))throw new TypeError("disabledDates() expects an array parameter");return d.disabledDates=la(b),d.enabledDates=!1,Z(),j},j.enabledDates=function(b){if(0===arguments.length)return d.enabledDates?a.extend({},d.enabledDates):d.enabledDates;if(!b)return d.enabledDates=!1,Z(),j;if(!(b instanceof Array))throw new TypeError("enabledDates() expects an array parameter");return d.enabledDates=la(b),d.disabledDates=!1,Z(),j},j.daysOfWeekDisabled=function(a){if(0===arguments.length)return d.daysOfWeekDisabled.splice(0);if("boolean"==typeof a&&!a)return d.daysOfWeekDisabled=!1,Z(),j;if(!(a instanceof Array))throw new TypeError("daysOfWeekDisabled() expects an array parameter");if(d.daysOfWeekDisabled=a.reduce(function(a,b){return b=parseInt(b,10),b>6||0>b||isNaN(b)?a:(-1===a.indexOf(b)&&a.push(b),a)},[]).sort(),d.useCurrent&&!d.keepInvalid){for(var b=0;!P(k,"d");){if(k.add(1,"d"),7===b)throw"Tried 7 times to find a valid date";b++}$(k)}return Z(),j},j.maxDate=function(a){if(0===arguments.length)return d.maxDate?d.maxDate.clone():d.maxDate;if("boolean"==typeof a&&a===!1)return d.maxDate=!1,Z(),j;"string"==typeof a&&("now"===a||"moment"===a)&&(a=b());var c=fa(a);if(!c.isValid())throw new TypeError("maxDate() Could not parse date parameter: "+a);if(d.minDate&&c.isBefore(d.minDate))throw new TypeError("maxDate() date parameter is before options.minDate: "+c.format(g));return d.maxDate=c,d.useCurrent&&!d.keepInvalid&&k.isAfter(a)&&$(d.maxDate),l.isAfter(c)&&(l=c.clone().subtract(d.stepping,"m")),Z(),j},j.minDate=function(a){if(0===arguments.length)return d.minDate?d.minDate.clone():d.minDate;if("boolean"==typeof a&&a===!1)return d.minDate=!1,Z(),j;"string"==typeof a&&("now"===a||"moment"===a)&&(a=b());var c=fa(a);if(!c.isValid())throw new TypeError("minDate() Could not parse date parameter: "+a);if(d.maxDate&&c.isAfter(d.maxDate))throw new TypeError("minDate() date parameter is after options.maxDate: "+c.format(g));return d.minDate=c,d.useCurrent&&!d.keepInvalid&&k.isBefore(a)&&$(d.minDate),l.isBefore(c)&&(l=c.clone().add(d.stepping,"m")),Z(),j},j.defaultDate=function(a){if(0===arguments.length)return d.defaultDate?d.defaultDate.clone():d.defaultDate;if(!a)return d.defaultDate=!1,j;"string"==typeof a&&("now"===a||"moment"===a)&&(a=b());var c=fa(a);if(!c.isValid())throw new TypeError("defaultDate() Could not parse date parameter: "+a);if(!P(c))throw new TypeError("defaultDate() date passed is invalid according to component setup validations");return d.defaultDate=c,(d.defaultDate&&d.inline||""===e.val().trim()&&void 0===e.attr("placeholder"))&&$(d.defaultDate),j},j.locale=function(a){if(0===arguments.length)return d.locale;if(!b.localeData(a))throw new TypeError("locale() locale "+a+" is not loaded from moment locales!");return d.locale=a,k.locale(d.locale),l.locale(d.locale),g&&na(),o&&(_(),da()),j},j.stepping=function(a){return 0===arguments.length?d.stepping:(a=parseInt(a,10),(isNaN(a)||1>a)&&(a=1),d.stepping=a,j)},j.useCurrent=function(a){var b=["year","month","day","hour","minute"];if(0===arguments.length)return d.useCurrent;if("boolean"!=typeof a&&"string"!=typeof a)throw new TypeError("useCurrent() expects a boolean or string parameter");if("string"==typeof a&&-1===b.indexOf(a.toLowerCase()))throw new TypeError("useCurrent() expects a string parameter of "+b.join(", "));return d.useCurrent=a,j},j.collapse=function(a){if(0===arguments.length)return d.collapse;if("boolean"!=typeof a)throw new TypeError("collapse() expects a boolean parameter");return d.collapse===a?j:(d.collapse=a,o&&(_(),da()),j)},j.icons=function(b){if(0===arguments.length)return a.extend({},d.icons);if(!(b instanceof Object))throw new TypeError("icons() expects parameter to be an Object");return a.extend(d.icons,b),o&&(_(),da()),j},j.tooltips=function(b){if(0===arguments.length)return a.extend({},d.tooltips);if(!(b instanceof Object))throw new TypeError("tooltips() expects parameter to be an Object");return a.extend(d.tooltips,b),o&&(_(),da()),j},j.useStrict=function(a){if(0===arguments.length)return d.useStrict;if("boolean"!=typeof a)throw new TypeError("useStrict() expects a boolean parameter");return d.useStrict=a,j},j.sideBySide=function(a){if(0===arguments.length)return d.sideBySide;if("boolean"!=typeof a)throw new TypeError("sideBySide() expects a boolean parameter");return d.sideBySide=a,o&&(_(),da()),j},j.viewMode=function(a){if(0===arguments.length)return d.viewMode;if("string"!=typeof a)throw new TypeError("viewMode() expects a string parameter");if(-1===r.indexOf(a))throw new TypeError("viewMode() parameter must be one of ("+r.join(", ")+") value");return d.viewMode=a,i=Math.max(r.indexOf(a),p),J(),j},j.toolbarPlacement=function(a){if(0===arguments.length)return d.toolbarPlacement;if("string"!=typeof a)throw new TypeError("toolbarPlacement() expects a string parameter");if(-1===u.indexOf(a))throw new TypeError("toolbarPlacement() parameter must be one of ("+u.join(", ")+") value");return d.toolbarPlacement=a,o&&(_(),da()),j},j.widgetPositioning=function(b){if(0===arguments.length)return a.extend({},d.widgetPositioning);if("[object Object]"!=={}.toString.call(b))throw new TypeError("widgetPositioning() expects an object variable");if(b.horizontal){if("string"!=typeof b.horizontal)throw new TypeError("widgetPositioning() horizontal variable must be a string");if(b.horizontal=b.horizontal.toLowerCase(),-1===t.indexOf(b.horizontal))throw new TypeError("widgetPositioning() expects horizontal parameter to be one of ("+t.join(", ")+")");d.widgetPositioning.horizontal=b.horizontal}if(b.vertical){if("string"!=typeof b.vertical)throw new TypeError("widgetPositioning() vertical variable must be a string");if(b.vertical=b.vertical.toLowerCase(),-1===s.indexOf(b.vertical))throw new TypeError("widgetPositioning() expects vertical parameter to be one of ("+s.join(", ")+")");d.widgetPositioning.vertical=b.vertical}return Z(),j},j.calendarWeeks=function(a){if(0===arguments.length)return d.calendarWeeks;if("boolean"!=typeof a)throw new TypeError("calendarWeeks() expects parameter to be a boolean value");return d.calendarWeeks=a,Z(),j},j.showTodayButton=function(a){if(0===arguments.length)return d.showTodayButton;if("boolean"!=typeof a)throw new TypeError("showTodayButton() expects a boolean parameter");return d.showTodayButton=a,o&&(_(),da()),j},j.showClear=function(a){if(0===arguments.length)return d.showClear;if("boolean"!=typeof a)throw new TypeError("showClear() expects a boolean parameter");return d.showClear=a,o&&(_(),da()),j},j.widgetParent=function(b){if(0===arguments.length)return d.widgetParent;if("string"==typeof b&&(b=a(b)),null!==b&&"string"!=typeof b&&!(b instanceof a))throw new TypeError("widgetParent() expects a string or a jQuery object parameter");return d.widgetParent=b,o&&(_(),da()),j},j.keepOpen=function(a){if(0===arguments.length)return d.keepOpen;if("boolean"!=typeof a)throw new TypeError("keepOpen() expects a boolean parameter");return d.keepOpen=a,j},j.focusOnShow=function(a){if(0===arguments.length)return d.focusOnShow;if("boolean"!=typeof a)throw new TypeError("focusOnShow() expects a boolean parameter");return d.focusOnShow=a,j},j.inline=function(a){if(0===arguments.length)return d.inline;if("boolean"!=typeof a)throw new TypeError("inline() expects a boolean parameter");return d.inline=a,j},j.clear=function(){return aa(),j},j.keyBinds=function(a){return d.keyBinds=a,j},j.debug=function(a){if("boolean"!=typeof a)throw new TypeError("debug() expects a boolean parameter");return d.debug=a,j},j.allowInputToggle=function(a){if(0===arguments.length)return d.allowInputToggle;if("boolean"!=typeof a)throw new TypeError("allowInputToggle() expects a boolean parameter");return d.allowInputToggle=a,j},j.showClose=function(a){if(0===arguments.length)return d.showClose;if("boolean"!=typeof a)throw new TypeError("showClose() expects a boolean parameter");return d.showClose=a,j},j.keepInvalid=function(a){if(0===arguments.length)return d.keepInvalid;if("boolean"!=typeof a)throw new TypeError("keepInvalid() expects a boolean parameter");return d.keepInvalid=a,j},j.datepickerInput=function(a){if(0===arguments.length)return d.datepickerInput;if("string"!=typeof a)throw new TypeError("datepickerInput() expects a string parameter");return d.datepickerInput=a,j},j.parseInputDate=function(a){if(0===arguments.length)return d.parseInputDate;if("function"!=typeof a)throw new TypeError("parseInputDate() sholud be as function");return d.parseInputDate=a,j},j.disabledTimeIntervals=function(b){if(0===arguments.length)return d.disabledTimeIntervals?a.extend({},d.disabledTimeIntervals):d.disabledTimeIntervals;if(!b)return d.disabledTimeIntervals=!1,Z(),j;if(!(b instanceof Array))throw new TypeError("disabledTimeIntervals() expects an array parameter");return d.disabledTimeIntervals=b,Z(),j},j.disabledHours=function(b){if(0===arguments.length)return d.disabledHours?a.extend({},d.disabledHours):d.disabledHours;if(!b)return d.disabledHours=!1,Z(),j;if(!(b instanceof Array))throw new TypeError("disabledHours() expects an array parameter");
if(d.disabledHours=ma(b),d.enabledHours=!1,d.useCurrent&&!d.keepInvalid){for(var c=0;!P(k,"h");){if(k.add(1,"h"),24===c)throw"Tried 24 times to find a valid date";c++}$(k)}return Z(),j},j.enabledHours=function(b){if(0===arguments.length)return d.enabledHours?a.extend({},d.enabledHours):d.enabledHours;if(!b)return d.enabledHours=!1,Z(),j;if(!(b instanceof Array))throw new TypeError("enabledHours() expects an array parameter");if(d.enabledHours=ma(b),d.disabledHours=!1,d.useCurrent&&!d.keepInvalid){for(var c=0;!P(k,"h");){if(k.add(1,"h"),24===c)throw"Tried 24 times to find a valid date";c++}$(k)}return Z(),j},j.viewDate=function(a){if(0===arguments.length)return l.clone();if(!a)return l=k.clone(),j;if(!("string"==typeof a||b.isMoment(a)||a instanceof Date))throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");return l=fa(a),I(),j},c.is("input"))e=c;else if(e=c.find(d.datepickerInput),0===e.size())e=c.find("input");else if(!e.is("input"))throw new Error('CSS class "'+d.datepickerInput+'" cannot be applied to non input element');if(c.hasClass("input-group")&&(n=0===c.find(".datepickerbutton").size()?c.find(".input-group-addon"):c.find(".datepickerbutton")),!d.inline&&!e.is("input"))throw new Error("Could not initialize DateTimePicker without an input element");return a.extend(!0,d,F()),j.options(d),na(),ja(),e.prop("disabled")&&j.disable(),e.is("input")&&0!==e.val().trim().length?$(fa(e.val().trim())):d.defaultDate&&void 0===e.attr("placeholder")&&$(d.defaultDate),d.inline&&da(),j};a.fn.datetimepicker=function(b){return this.each(function(){var d=a(this);d.data("DateTimePicker")||(b=a.extend(!0,{},a.fn.datetimepicker.defaults,b),d.data("DateTimePicker",c(d,b)))})},a.fn.datetimepicker.defaults={format:!1,dayViewHeaderFormat:"MMMM YYYY",extraFormats:!1,stepping:1,minDate:!1,maxDate:!1,useCurrent:!0,collapse:!0,locale:b.locale(),defaultDate:!1,disabledDates:!1,enabledDates:!1,icons:{time:"glyphicon glyphicon-time",date:"glyphicon glyphicon-calendar",up:"glyphicon glyphicon-chevron-up",down:"glyphicon glyphicon-chevron-down",previous:"glyphicon glyphicon-chevron-left",next:"glyphicon glyphicon-chevron-right",today:"glyphicon glyphicon-screenshot",clear:"glyphicon glyphicon-trash",close:"glyphicon glyphicon-remove"},tooltips:{today:"Go to today",clear:"Clear selection",close:"Close the picker",selectMonth:"Select Month",prevMonth:"Previous Month",nextMonth:"Next Month",selectYear:"Select Year",prevYear:"Previous Year",nextYear:"Next Year",selectDecade:"Select Decade",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevCentury:"Previous Century",nextCentury:"Next Century"},useStrict:!1,sideBySide:!1,daysOfWeekDisabled:!1,calendarWeeks:!1,viewMode:"days",toolbarPlacement:"default",showTodayButton:!1,showClear:!1,showClose:!1,widgetPositioning:{horizontal:"auto",vertical:"auto"},widgetParent:null,ignoreReadonly:!1,keepOpen:!1,focusOnShow:!0,inline:!1,keepInvalid:!1,datepickerInput:".datepickerinput",keyBinds:{up:function(a){if(a){var c=this.date()||b();a.find(".datepicker").is(":visible")?this.date(c.clone().subtract(7,"d")):this.date(c.clone().add(this.stepping(),"m"))}},down:function(a){if(!a)return void this.show();var c=this.date()||b();a.find(".datepicker").is(":visible")?this.date(c.clone().add(7,"d")):this.date(c.clone().subtract(this.stepping(),"m"))},"control up":function(a){if(a){var c=this.date()||b();a.find(".datepicker").is(":visible")?this.date(c.clone().subtract(1,"y")):this.date(c.clone().add(1,"h"))}},"control down":function(a){if(a){var c=this.date()||b();a.find(".datepicker").is(":visible")?this.date(c.clone().add(1,"y")):this.date(c.clone().subtract(1,"h"))}},left:function(a){if(a){var c=this.date()||b();a.find(".datepicker").is(":visible")&&this.date(c.clone().subtract(1,"d"))}},right:function(a){if(a){var c=this.date()||b();a.find(".datepicker").is(":visible")&&this.date(c.clone().add(1,"d"))}},pageUp:function(a){if(a){var c=this.date()||b();a.find(".datepicker").is(":visible")&&this.date(c.clone().subtract(1,"M"))}},pageDown:function(a){if(a){var c=this.date()||b();a.find(".datepicker").is(":visible")&&this.date(c.clone().add(1,"M"))}},enter:function(){this.hide()},escape:function(){this.hide()},"control space":function(a){a.find(".timepicker").is(":visible")&&a.find('.btn[data-action="togglePeriod"]').click()},t:function(){this.date(b())},"delete":function(){this.clear()}},debug:!1,allowInputToggle:!1,disabledTimeIntervals:!1,disabledHours:!1,enabledHours:!1,viewDate:!1}});;var hyperform = (function () {
        'use strict';

        var registry = Object.create(null);

        /**
         * run all actions registered for a hook
         *
         * Every action gets called with a state object as `this` argument and with the
         * hook's call arguments as call arguments.
         *
         * @return mixed the returned value of the action calls or undefined
         */
        function call_hook(hook) {
          var result;
          var call_args = Array.prototype.slice.call(arguments, 1);

          if (hook in registry) {
            result = registry[hook].reduce(function (args) {

              return function (previousResult, currentAction) {
                var interimResult = currentAction.apply({
                  state: previousResult,
                  hook: hook
                }, args);
                return interimResult !== undefined ? interimResult : previousResult;
              };
            }(call_args), result);
          }

          return result;
        }

        /**
         * Filter a value through hooked functions
         *
         * Allows for additional parameters:
         * js> do_filter('foo', null, current_element)
         */
        function do_filter(hook, initial_value) {
          var result = initial_value;
          var call_args = Array.prototype.slice.call(arguments, 1);

          if (hook in registry) {
            result = registry[hook].reduce(function (previousResult, currentAction) {
              call_args[0] = previousResult;
              var interimResult = currentAction.apply({
                state: previousResult,
                hook: hook
              }, call_args);
              return interimResult !== undefined ? interimResult : previousResult;
            }, result);
          }

          return result;
        }

        /**
         * remove an action again
         */
        function remove_hook(hook, action) {
          if (hook in registry) {
            for (var i = 0; i < registry[hook].length; i++) {
              if (registry[hook][i] === action) {
                registry[hook].splice(i, 1);
                break;
              }
            }
          }
        }
        /**
         * add an action to a hook
         */
        function add_hook(hook, action, position) {
          if (!(hook in registry)) {
            registry[hook] = [];
          }
          if (position === undefined) {
            position = registry[hook].length;
          }
          registry[hook].splice(position, 0, action);
        }

        /**
         * return either the data of a hook call or the result of action, if the
         * former is undefined
         *
         * @return function a function wrapper around action
         */
        function return_hook_or (hook, action) {
          return function () {
            var data = call_hook(hook, Array.prototype.slice.call(arguments));

            if (data !== undefined) {
              return data;
            }

            return action.apply(this, arguments);
          };
        }

        /* the following code is borrowed from the WebComponents project, licensed
         * under the BSD license. Source:
         * <https://github.com/webcomponents/webcomponentsjs/blob/5283db1459fa2323e5bfc8b9b5cc1753ed85e3d0/src/WebComponents/dom.js#L53-L78>
         */
        // defaultPrevented is broken in IE.
        // https://connect.microsoft.com/IE/feedback/details/790389/event-defaultprevented-returns-false-after-preventdefault-was-called

        var workingDefaultPrevented = function () {
          var e = document.createEvent('Event');
          e.initEvent('foo', true, true);
          e.preventDefault();
          return e.defaultPrevented;
        }();

        if (!workingDefaultPrevented) {
          (function () {
            var origPreventDefault = window.Event.prototype.preventDefault;
            window.Event.prototype.preventDefault = function () {
              if (!this.cancelable) {
                return;
              }

              origPreventDefault.call(this);

              Object.defineProperty(this, 'defaultPrevented', {
                get: function get() {
                  return true;
                },
                configurable: true
              });
            };
          })();
        }
        /* end of borrowed code */

        function trigger_event (element, event) {
          var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          var _ref$bubbles = _ref.bubbles;
          var bubbles = _ref$bubbles === undefined ? true : _ref$bubbles;
          var _ref$cancelable = _ref.cancelable;
          var cancelable = _ref$cancelable === undefined ? false : _ref$cancelable;
          var payload = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

          if (!(event instanceof window.Event)) {
            var _event = document.createEvent('Event');
            _event.initEvent(event, bubbles, cancelable);
            event = _event;
          }

          for (var key in payload) {
            if (payload.hasOwnProperty(key)) {
              event[key] = payload[key];
            }
          }

          element.dispatchEvent(event);

          return event;
        }

        /* and datetime-local? Spec says “Nah!” */

        var dates = ['datetime', 'date', 'month', 'week', 'time'];

        var plain_numbers = ['number', 'range'];

        /* everything that returns something meaningful for valueAsNumber and
         * can have the step attribute */
        var numbers = dates.concat(plain_numbers, 'datetime-local');

        /* the spec says to only check those for syntax in validity.typeMismatch.
         * ¯\_(ツ)_/¯ */
        var type_checked = ['email', 'url'];

        /* check these for validity.badInput */
        var input_checked = ['email', 'date', 'month', 'week', 'time', 'datetime', 'datetime-local', 'number', 'range', 'color'];

        var text_types = ['text', 'search', 'tel', 'password'].concat(type_checked);

        /* input element types, that are candidates for the validation API.
         * Missing from this set are: button, hidden, menu (from <button>), reset and
         * the types for non-<input> elements. */
        var validation_candidates = ['checkbox', 'color', 'file', 'image', 'radio', 'submit'].concat(numbers, text_types);

        /* all known types of <input> */
        var inputs = ['button', 'hidden', 'reset'].concat(validation_candidates);

        /* apparently <select> and <textarea> have types of their own */
        var non_inputs = ['select-one', 'select-multiple', 'textarea'];

        /**
         * mark an object with a '__hyperform=true' property
         *
         * We use this to distinguish our properties from the native ones. Usage:
         * js> mark(obj);
         * js> assert(obj.__hyperform === true)
         */

        function mark (obj) {
          if (['object', 'function'].indexOf(typeof obj) > -1) {
            delete obj.__hyperform;
            Object.defineProperty(obj, '__hyperform', {
              configurable: true,
              enumerable: false,
              value: true
            });
          }

          return obj;
        }

        /**
         * the internal storage for messages
         */
        var store = new WeakMap();

        /* jshint -W053 */
        var message_store = {
          set: function set(element, message) {
            var is_custom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (element instanceof window.HTMLFieldSetElement) {
              var wrapped_form = get_wrapper(element);
              if (wrapped_form && !wrapped_form.settings.extend_fieldset) {
                /* make this a no-op for <fieldset> in strict mode */
                return message_store;
              }
            }

            if (typeof message === 'string') {
              message = new String(message);
            }
            if (is_custom) {
              message.is_custom = true;
            }
            mark(message);
            store.set(element, message);

            /* allow the :invalid selector to match */
            if ('_original_setCustomValidity' in element) {
              element._original_setCustomValidity(message.toString());
            }

            return message_store;
          },
          get: function get(element) {
            var message = store.get(element);
            if (message === undefined && '_original_validationMessage' in element) {
              /* get the browser's validation message, if we have none. Maybe it
               * knows more than we. */
              message = new String(element._original_validationMessage);
            }
            return message ? message : new String('');
          },
          delete: function _delete(element) {
            if ('_original_setCustomValidity' in element) {
              element._original_setCustomValidity('');
            }
            return store.delete(element);
          }
        };

        /**
         * counter that will be incremented with every call
         *
         * Will enforce uniqueness, as long as no more than 1 hyperform scripts
         * are loaded. (In that case we still have the "random" part below.)
         */

        var uid = 0;

        /**
         * generate a random ID
         *
         * @see https://gist.github.com/gordonbrander/2230317
         */
        function generate_id () {
          var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hf_';

          return prefix + uid++ + Math.random().toString(36).substr(2);
        }

        var warnings_cache = new WeakMap();

        var DefaultRenderer = {

          /**
           * called when a warning should become visible
           */
          attach_warning: function attach_warning(warning, element) {
            /* should also work, if element is last,
             * http://stackoverflow.com/a/4793630/113195 */
            element.parentNode.insertBefore(warning, element.nextSibling);
          },

          /**
           * called when a warning should vanish
           */
          detach_warning: function detach_warning(warning, element) {
            warning.parentNode.removeChild(warning);
          },

          /**
           * called when feedback to an element's state should be handled
           *
           * i.e., showing and hiding warnings
           */
          show_warning: function show_warning(element) {
            var sub_radio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var msg = message_store.get(element).toString();
            var warning = warnings_cache.get(element);

            if (msg) {
              if (!warning) {
                var wrapper = get_wrapper(element);
                warning = document.createElement('div');
                warning.className = wrapper && wrapper.settings.classes.warning || 'hf-warning';
                warning.id = generate_id();
                warning.setAttribute('aria-live', 'polite');
                warnings_cache.set(element, warning);
              }

              element.setAttribute('aria-errormessage', warning.id);
              warning.textContent = msg;
              Renderer.attach_warning(warning, element);
            } else if (warning && warning.parentNode) {
              element.removeAttribute('aria-errormessage');
              Renderer.detach_warning(warning, element);
            }

            if (!sub_radio && element.type === 'radio' && element.form) {
              /* render warnings for all other same-name radios, too */
              Array.prototype.filter.call(document.getElementsByName(element.name), function (radio) {
                return radio.name === element.name && radio.form === element.form;
              }).map(function (radio) {
                return Renderer.show_warning(radio, 'sub_radio');
              });
            }
          }

        };

        var Renderer = {

          attach_warning: DefaultRenderer.attach_warning,
          detach_warning: DefaultRenderer.detach_warning,
          show_warning: DefaultRenderer.show_warning,

          set: function set(renderer, action) {
            if (!action) {
              action = DefaultRenderer[renderer];
            }
            Renderer[renderer] = action;
          }

        };

        /**
         * check element's validity and report an error back to the user
         */
        function reportValidity(element) {
          /* if this is a <form>, report validity of all child inputs */
          if (element instanceof window.HTMLFormElement) {
            return Array.prototype.map.call(element.elements, reportValidity).every(function (b) {
              return b;
            });
          }

          /* we copy checkValidity() here, b/c we have to check if the "invalid"
           * event was canceled. */
          var valid = ValidityState(element).valid;
          var event;
          if (valid) {
            var wrapped_form = get_wrapper(element);
            if (wrapped_form && wrapped_form.settings.valid_event) {
              event = trigger_event(element, 'valid', { cancelable: true });
            }
          } else {
            event = trigger_event(element, 'invalid', { cancelable: true });
          }

          if (!event || !event.defaultPrevented) {
            Renderer.show_warning(element);
          }

          return valid;
        }

        /**
         * submit a form, because `element` triggered it
         *
         * This method also dispatches a submit event on the form prior to the
         * submission. The event contains the trigger element as `submittedVia`.
         *
         * If the element is a button with a name, the name=value pair will be added
         * to the submitted data.
         */
        function submit_form_via(element) {
          /* apparently, the submit event is not triggered in most browsers on
           * the submit() method, so we do it manually here to model a natural
           * submit as closely as possible.
           * Now to the fun fact: If you trigger a submit event from a form, what
           * do you think should happen?
           * 1) the form will be automagically submitted by the browser, or
           * 2) nothing.
           * And as you already suspected, the correct answer is: both! Firefox
           * opts for 1), Chrome for 2). Yay! */

          var event_got_cancelled;

          var do_cancel = function do_cancel(e) {
            event_got_cancelled = e.defaultPrevented;
            /* we prevent the default ourselves in this (hopefully) last event
             * handler to keep Firefox from prematurely submitting the form. */
            e.preventDefault();
          };

          element.form.addEventListener('submit', do_cancel);
          trigger_event(element.form, 'submit', { cancelable: true }, { submittedVia: element });
          element.form.removeEventListener('submit', do_cancel);

          if (!event_got_cancelled) {
            add_submit_field(element);
            window.HTMLFormElement.prototype.submit.call(element.form);
            window.setTimeout(function () {
              return remove_submit_field(element);
            });
          }
        }

        /**
         * if a submit button was clicked, add its name=value by means of a type=hidden
         * input field
         */
        function add_submit_field(button) {
          if (['image', 'submit'].indexOf(button.type) > -1 && button.name) {
            var wrapper = get_wrapper(button.form) || {};
            var submit_helper = wrapper.submit_helper;
            if (submit_helper) {
              if (submit_helper.parentNode) {
                submit_helper.parentNode.removeChild(submit_helper);
              }
            } else {
              submit_helper = document.createElement('input');
              submit_helper.type = 'hidden';
              wrapper.submit_helper = submit_helper;
            }
            submit_helper.name = button.name;
            submit_helper.value = button.value;
            button.form.appendChild(submit_helper);
          }
        }

        /**
         * remove a possible helper input, that was added by `add_submit_field`
         */
        function remove_submit_field(button) {
          if (['image', 'submit'].indexOf(button.type) > -1 && button.name) {
            var wrapper = get_wrapper(button.form) || {};
            var submit_helper = wrapper.submit_helper;
            if (submit_helper && submit_helper.parentNode) {
              submit_helper.parentNode.removeChild(submit_helper);
            }
          }
        }

        /**
         * check a form's validity and submit it
         *
         * The method triggers a cancellable `validate` event on the form. If the
         * event is cancelled, form submission will be aborted, too.
         *
         * If the form is found to contain invalid fields, focus the first field.
         */
        function check(event) {
          /* trigger a "validate" event on the form to be submitted */
          var validate_event = trigger_event(event.target.form, 'validate', { cancelable: true });
          if (validate_event.defaultPrevented) {
            /* skip the whole submit thing, if the validation is canceled. A user
             * can still call form.submit() afterwards. */
            return;
          }

          var valid = true;
          var first_invalid;
          var valid_elements = [];
          var invalid_elements = [];
          Array.prototype.map.call(event.target.form.elements, function (element) {
            if (!reportValidity(element)) {
              valid = false;
              invalid_elements.push(element);
              if (!first_invalid && 'focus' in element) {
                first_invalid = element;
              }
            } else {
              valid_elements.push(element);
            }
          });

          /* trigger a "validated" event on the form to be submitted */
          var validated_event = trigger_event(event.target.form, 'validated', { cancelable: true }, {
            firstInvalidElement: first_invalid,
            invalidElements: invalid_elements,
            validElements: valid_elements,
            isFormValid: valid
          });
          if (validated_event.defaultPrevented) {
            /* skip the whole submit thing, if the validation is canceled. A user
             * can still call form.submit() afterwards. */
            return;
          }

          if (valid) {
            submit_form_via(event.target);
          } else if (first_invalid) {
            /* focus the first invalid element, if validation went south */
            first_invalid.focus();
          }
        }

        /**
         * test if node is a submit button
         */
        function is_submit_button(node) {
          return (
            /* must be an input or button element... */
            (node.nodeName === 'INPUT' || node.nodeName === 'BUTTON') && (

            /* ...and have a submitting type */
            node.type === 'image' || node.type === 'submit')
          );
        }

        /**
         * test, if the click event would trigger a submit
         */
        function is_submitting_click(event) {
          return (
            /* prevented default: won't trigger a submit */
            !event.defaultPrevented && (

            /* left button or middle button (submits in Chrome) */
            !('button' in event) || event.button < 2) &&

            /* must be a submit button... */
            is_submit_button(event.target) &&

            /* the button needs a form, that's going to be submitted */
            event.target.form &&

            /* again, if the form should not be validated, we're out of the game */
            !event.target.form.hasAttribute('novalidate')
          );
        }

        /**
         * test, if the keypress event would trigger a submit
         */
        function is_submitting_keypress(event) {
          return (
            /* prevented default: won't trigger a submit */
            !event.defaultPrevented && (
            /* ...and <Enter> was pressed... */
            event.keyCode === 13 &&

            /* ...on an <input> that is... */
            event.target.nodeName === 'INPUT' &&

            /* ...a standard text input field (not checkbox, ...) */
            text_types.indexOf(event.target.type) > -1 ||
            /* or <Enter> or <Space> was pressed... */
            (event.keyCode === 13 || event.keyCode === 32) &&

            /* ...on a submit button */
            is_submit_button(event.target)) &&

            /* there's a form... */
            event.target.form &&

            /* ...and the form allows validation */
            !event.target.form.hasAttribute('novalidate')
          );
        }

        /**
         * catch explicit submission by click on a button
         */
        function click_handler(event) {
          if (is_submitting_click(event)) {
            event.preventDefault();
            if (is_submit_button(event.target) && event.target.hasAttribute('formnovalidate')) {
              /* if validation should be ignored, we're not interested in any checks */
              submit_form_via(event.target);
            } else {
              check(event);
            }
          }
        }

        /**
         * catch explicit submission by click on a button, but circumvent validation
         */
        function ignored_click_handler(event) {
          if (is_submitting_click(event)) {
            event.preventDefault();
            submit_form_via(event.target);
          }
        }

        /**
         * catch implicit submission by pressing <Enter> in some situations
         */
        function keypress_handler(event) {
          if (is_submitting_keypress(event)) {
            var wrapper = get_wrapper(event.target.form) || { settings: {} };
            if (wrapper.settings.prevent_implicit_submit) {
              /* user doesn't want an implicit submit. Cancel here. */
              event.preventDefault();
              return;
            }

            /* check, that there is no submit button in the form. Otherwise
             * that should be clicked. */
            var el = event.target.form.elements.length;
            var submit;
            for (var i = 0; i < el; i++) {
              if (['image', 'submit'].indexOf(event.target.form.elements[i].type) > -1) {
                submit = event.target.form.elements[i];
                break;
              }
            }

            event.preventDefault();
            if (submit) {
              submit.click();
            } else {
              check(event);
            }
          }
        }

        /**
         * catch implicit submission by pressing <Enter> in some situations, but circumvent validation
         */
        function ignored_keypress_handler(event) {
          if (is_submitting_keypress(event)) {
            /* check, that there is no submit button in the form. Otherwise
             * that should be clicked. */
            var el = event.target.form.elements.length;
            var submit;
            for (var i = 0; i < el; i++) {
              if (['image', 'submit'].indexOf(event.target.form.elements[i].type) > -1) {
                submit = event.target.form.elements[i];
                break;
              }
            }

            event.preventDefault();
            if (submit) {
              submit.click();
            } else {
              submit_form_via(event.target);
            }
          }
        }

        /**
         * catch all relevant events _prior_ to a form being submitted
         *
         * @param bool ignore bypass validation, when an attempt to submit the
         *                    form is detected.
         */
        function catch_submit(listening_node) {
          var ignore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (ignore) {
            listening_node.addEventListener('click', ignored_click_handler);
            listening_node.addEventListener('keypress', ignored_keypress_handler);
          } else {
            listening_node.addEventListener('click', click_handler);
            listening_node.addEventListener('keypress', keypress_handler);
          }
        }

        /**
         * decommission the event listeners from catch_submit() again
         */
        function uncatch_submit(listening_node) {
          listening_node.removeEventListener('click', ignored_click_handler);
          listening_node.removeEventListener('keypress', ignored_keypress_handler);
          listening_node.removeEventListener('click', click_handler);
          listening_node.removeEventListener('keypress', keypress_handler);
        }

        /**
         * remove `property` from element and restore _original_property, if present
         */

        function uninstall_property (element, property) {
          delete element[property];

          var original_descriptor = Object.getOwnPropertyDescriptor(element, '_original_' + property);

          if (original_descriptor) {
            Object.defineProperty(element, property, original_descriptor);
          }
        }

        /**
         * add `property` to an element
         *
         * js> installer(element, 'foo', { value: 'bar' });
         * js> assert(element.foo === 'bar');
         */

        function install_property (element, property, descriptor) {
          descriptor.configurable = true;
          descriptor.enumerable = true;
          if ('value' in descriptor) {
            descriptor.writable = true;
          }

          var original_descriptor = Object.getOwnPropertyDescriptor(element, property);

          if (original_descriptor) {

            if (original_descriptor.configurable === false) {
              /* global console */
              console.log('[hyperform] cannot install custom property ' + property);
              return false;
            }

            /* we already installed that property... */
            if (original_descriptor.get && original_descriptor.get.__hyperform || original_descriptor.value && original_descriptor.value.__hyperform) {
              return;
            }

            /* publish existing property under new name, if it's not from us */
            Object.defineProperty(element, '_original_' + property, original_descriptor);
          }

          delete element[property];
          Object.defineProperty(element, property, descriptor);

          return true;
        }

        function is_field (element) {
                return element instanceof window.HTMLButtonElement || element instanceof window.HTMLInputElement || element instanceof window.HTMLSelectElement || element instanceof window.HTMLTextAreaElement || element instanceof window.HTMLFieldSetElement || element === window.HTMLButtonElement.prototype || element === window.HTMLInputElement.prototype || element === window.HTMLSelectElement.prototype || element === window.HTMLTextAreaElement.prototype || element === window.HTMLFieldSetElement.prototype;
        }

        /**
         * set a custom validity message or delete it with an empty string
         */
        function setCustomValidity(element, msg) {
          message_store.set(element, msg, true);
        }

        function sprintf (str) {
          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var args_length = args.length;
          var global_index = 0;

          return str.replace(/%([0-9]+\$)?([sl])/g, function (match, position, type) {
            var local_index = global_index;
            if (position) {
              local_index = Number(position.replace(/\$$/, '')) - 1;
            }
            global_index += 1;

            var arg = '';
            if (args_length > local_index) {
              arg = args[local_index];
            }

            if (arg instanceof Date || typeof arg === 'number' || arg instanceof Number) {
              /* try getting a localized representation of dates and numbers, if the
               * browser supports this */
              if (type === 'l') {
                arg = (arg.toLocaleString || arg.toString).call(arg);
              } else {
                arg = arg.toString();
              }
            }

            return arg;
          });
        }

        /* For a given date, get the ISO week number
         *
         * Source: http://stackoverflow.com/a/6117889/113195
         *
         * Based on information at:
         *
         *    http://www.merlyn.demon.co.uk/weekcalc.htm#WNR
         *
         * Algorithm is to find nearest thursday, it's year
         * is the year of the week number. Then get weeks
         * between that date and the first day of that year.
         *
         * Note that dates in one year can be weeks of previous
         * or next year, overlap is up to 3 days.
         *
         * e.g. 2014/12/29 is Monday in week  1 of 2015
         *      2012/1/1   is Sunday in week 52 of 2011
         */

        function get_week_of_year (d) {
          /* Copy date so don't modify original */
          d = new Date(+d);
          d.setUTCHours(0, 0, 0);
          /* Set to nearest Thursday: current date + 4 - current day number
           * Make Sunday's day number 7 */
          d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
          /* Get first day of year */
          var yearStart = new Date(d.getUTCFullYear(), 0, 1);
          /* Calculate full weeks to nearest Thursday */
          var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
          /* Return array of year and week number */
          return [d.getUTCFullYear(), weekNo];
        }

        function pad(num) {
          var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

          var s = num + '';
          while (s.length < size) {
            s = '0' + s;
          }
          return s;
        }

        /**
         * calculate a string from a date according to HTML5
         */
        function date_to_string(date, element_type) {
          if (!(date instanceof Date)) {
            return null;
          }

          switch (element_type) {
            case 'datetime':
              return date_to_string(date, 'date') + 'T' + date_to_string(date, 'time');

            case 'datetime-local':
              return sprintf('%s-%s-%sT%s:%s:%s.%s', date.getFullYear(), pad(date.getMonth() + 1), pad(date.getDate()), pad(date.getHours()), pad(date.getMinutes()), pad(date.getSeconds()), pad(date.getMilliseconds(), 3)).replace(/(:00)?\.000$/, '');

            case 'date':
              return sprintf('%s-%s-%s', date.getUTCFullYear(), pad(date.getUTCMonth() + 1), pad(date.getUTCDate()));

            case 'month':
              return sprintf('%s-%s', date.getUTCFullYear(), pad(date.getUTCMonth() + 1));

            case 'week':
              var params = get_week_of_year(date);
              return sprintf.call(null, '%s-W%s', params[0], pad(params[1]));

            case 'time':
              return sprintf('%s:%s:%s.%s', pad(date.getUTCHours()), pad(date.getUTCMinutes()), pad(date.getUTCSeconds()), pad(date.getUTCMilliseconds(), 3)).replace(/(:00)?\.000$/, '');
          }

          return null;
        }

        /**
         * return a new Date() representing the ISO date for a week number
         *
         * @see http://stackoverflow.com/a/16591175/113195
         */

        function get_date_from_week (week, year) {
          var date = new Date(Date.UTC(year, 0, 1 + (week - 1) * 7));

          if (date.getUTCDay() <= 4 /* thursday */) {
              date.setUTCDate(date.getUTCDate() - date.getUTCDay() + 1);
            } else {
            date.setUTCDate(date.getUTCDate() + 8 - date.getUTCDay());
          }

          return date;
        }

        /**
         * calculate a date from a string according to HTML5
         */
        function string_to_date (string, element_type) {
          var date = new Date(0);
          var ms;
          switch (element_type) {
            case 'datetime':
              if (!/^([0-9]{4,})-([0-9]{2})-([0-9]{2})T([01][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9])(?:\.([0-9]{1,3}))?)?$/.test(string)) {
                return null;
              }
              ms = RegExp.$7 || '000';
              while (ms.length < 3) {
                ms += '0';
              }
              date.setUTCFullYear(Number(RegExp.$1));
              date.setUTCMonth(Number(RegExp.$2) - 1, Number(RegExp.$3));
              date.setUTCHours(Number(RegExp.$4), Number(RegExp.$5), Number(RegExp.$6 || 0), Number(ms));
              return date;

            case 'date':
              if (!/^([0-9]{4,})-([0-9]{2})-([0-9]{2})$/.test(string)) {
                return null;
              }
              date.setUTCFullYear(Number(RegExp.$1));
              date.setUTCMonth(Number(RegExp.$2) - 1, Number(RegExp.$3));
              return date;

            case 'month':
              if (!/^([0-9]{4,})-([0-9]{2})$/.test(string)) {
                return null;
              }
              date.setUTCFullYear(Number(RegExp.$1));
              date.setUTCMonth(Number(RegExp.$2) - 1, 1);
              return date;

            case 'week':
              if (!/^([0-9]{4,})-W(0[1-9]|[1234][0-9]|5[0-3])$/.test(string)) {
                return null;
              }
              return get_date_from_week(Number(RegExp.$2), Number(RegExp.$1));

            case 'time':
              if (!/^([01][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9])(?:\.([0-9]{1,3}))?)?$/.test(string)) {
                return null;
              }
              ms = RegExp.$4 || '000';
              while (ms.length < 3) {
                ms += '0';
              }
              date.setUTCHours(Number(RegExp.$1), Number(RegExp.$2), Number(RegExp.$3 || 0), Number(ms));
              return date;
          }

          return null;
        }

        /**
         * calculate a date from a string according to HTML5
         */
        function string_to_number (string, element_type) {
          var rval = string_to_date(string, element_type);
          if (rval !== null) {
            return +rval;
          }
          /* not parseFloat, because we want NaN for invalid values like "1.2xxy" */
          return Number(string);
        }

        /**
         * get the element's type in a backwards-compatible way
         */
        function get_type (element) {
          if (element instanceof window.HTMLTextAreaElement) {
            return 'textarea';
          } else if (element instanceof window.HTMLSelectElement) {
            return element.hasAttribute('multiple') ? 'select-multiple' : 'select-one';
          } else if (element instanceof window.HTMLButtonElement) {
            return (element.getAttribute('type') || 'submit').toLowerCase();
          } else if (element instanceof window.HTMLInputElement) {
            var attr = (element.getAttribute('type') || '').toLowerCase();
            if (attr && inputs.indexOf(attr) > -1) {
              return attr;
            } else {
              /* perhaps the DOM has in-depth knowledge. Take that before returning
               * 'text'. */
              return element.type || 'text';
            }
          }

          return '';
        }

        /**
         * the following validation messages are from Firefox source,
         * http://mxr.mozilla.org/mozilla-central/source/dom/locales/en-US/chrome/dom/dom.properties
         * released under MPL license, http://mozilla.org/MPL/2.0/.
         */

        var catalog = {
          en: {
            TextTooLong: 'Please shorten this text to %l characters or less (you are currently using %l characters).',
            ValueMissing: 'Please fill out this field.',
            CheckboxMissing: 'Please check this box if you want to proceed.',
            RadioMissing: 'Please select one of these options.',
            FileMissing: 'Please select a file.',
            SelectMissing: 'Please select an item in the list.',
            InvalidEmail: 'Please enter an email address.',
            InvalidURL: 'Please enter a URL.',
            PatternMismatch: 'Please match the requested format.',
            PatternMismatchWithTitle: 'Please match the requested format: %l.',
            NumberRangeOverflow: 'Please select a value that is no more than %l.',
            DateRangeOverflow: 'Please select a value that is no later than %l.',
            TimeRangeOverflow: 'Please select a value that is no later than %l.',
            NumberRangeUnderflow: 'Please select a value that is no less than %l.',
            DateRangeUnderflow: 'Please select a value that is no earlier than %l.',
            TimeRangeUnderflow: 'Please select a value that is no earlier than %l.',
            StepMismatch: 'Please select a valid value. The two nearest valid values are %l and %l.',
            StepMismatchOneValue: 'Please select a valid value. The nearest valid value is %l.',
            BadInputNumber: 'Please enter a number.'
          }
        };

        var language = 'en';

        function set_language(newlang) {
          language = newlang;
        }

        function add_translation(lang, new_catalog) {
          if (!(lang in catalog)) {
            catalog[lang] = {};
          }
          for (var key in new_catalog) {
            if (new_catalog.hasOwnProperty(key)) {
              catalog[lang][key] = new_catalog[key];
            }
          }
        }

        function _ (s) {
          if (language in catalog && s in catalog[language]) {
            return catalog[language][s];
          } else if (s in catalog.en) {
            return catalog.en[s];
          }
          return s;
        }

        var default_step = {
          'datetime-local': 60,
          datetime: 60,
          time: 60
        };

        var step_scale_factor = {
          'datetime-local': 1000,
          datetime: 1000,
          date: 86400000,
          week: 604800000,
          time: 1000
        };

        var default_step_base = {
          week: -259200000
        };

        var default_min = {
          range: 0
        };

        var default_max = {
          range: 100
        };

        /**
         * get previous and next valid values for a stepped input element
         */
        function get_next_valid (element) {
          var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

          var type = get_type(element);

          var aMin = element.getAttribute('min');
          var min = default_min[type] || NaN;
          if (aMin) {
            var pMin = string_to_number(aMin, type);
            if (!isNaN(pMin)) {
              min = pMin;
            }
          }

          var aMax = element.getAttribute('max');
          var max = default_max[type] || NaN;
          if (aMax) {
            var pMax = string_to_number(aMax, type);
            if (!isNaN(pMax)) {
              max = pMax;
            }
          }

          var aStep = element.getAttribute('step');
          var step = default_step[type] || 1;
          if (aStep && aStep.toLowerCase() === 'any') {
            /* quick return: we cannot calculate prev and next */
            return [_('any value'), _('any value')];
          } else if (aStep) {
            var pStep = string_to_number(aStep, type);
            if (!isNaN(pStep)) {
              step = pStep;
            }
          }

          var default_value = string_to_number(element.getAttribute('value'), type);

          var value = string_to_number(element.value || element.getAttribute('value'), type);

          if (isNaN(value)) {
            /* quick return: we cannot calculate without a solid base */
            return [_('any valid value'), _('any valid value')];
          }

          var step_base = !isNaN(min) ? min : !isNaN(default_value) ? default_value : default_step_base[type] || 0;

          var scale = step_scale_factor[type] || 1;

          var prev = step_base + Math.floor((value - step_base) / (step * scale)) * (step * scale) * n;
          var next = step_base + (Math.floor((value - step_base) / (step * scale)) + 1) * (step * scale) * n;

          if (prev < min) {
            prev = null;
          } else if (prev > max) {
            prev = max;
          }

          if (next > max) {
            next = null;
          } else if (next < min) {
            next = min;
          }

          /* convert to date objects, if appropriate */
          if (dates.indexOf(type) > -1) {
            prev = date_to_string(new Date(prev), type);
            next = date_to_string(new Date(next), type);
          }

          return [prev, next];
        }

        /**
         * implement the valueAsDate functionality
         *
         * @see https://html.spec.whatwg.org/multipage/forms.html#dom-input-valueasdate
         */
        function valueAsDate(element) {
          var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

          var type = get_type(element);
          if (dates.indexOf(type) > -1) {
            if (value !== undefined) {
              /* setter: value must be null or a Date() */
              if (value === null) {
                element.value = '';
              } else if (value instanceof Date) {
                if (isNaN(value.getTime())) {
                  element.value = '';
                } else {
                  element.value = date_to_string(value, type);
                }
              } else {
                throw new window.DOMException('valueAsDate setter encountered invalid value', 'TypeError');
              }
              return;
            }

            var value_date = string_to_date(element.value, type);
            return value_date instanceof Date ? value_date : null;
          } else if (value !== undefined) {
            /* trying to set a date on a not-date input fails */
            throw new window.DOMException('valueAsDate setter cannot set date on this element', 'InvalidStateError');
          }

          return null;
        }

        /**
         * implement the valueAsNumber functionality
         *
         * @see https://html.spec.whatwg.org/multipage/forms.html#dom-input-valueasnumber
         */
        function valueAsNumber(element) {
          var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

          var type = get_type(element);
          if (numbers.indexOf(type) > -1) {
            if (type === 'range' && element.hasAttribute('multiple')) {
              /* @see https://html.spec.whatwg.org/multipage/forms.html#do-not-apply */
              return NaN;
            }

            if (value !== undefined) {
              /* setter: value must be NaN or a finite number */
              if (isNaN(value)) {
                element.value = '';
              } else if (typeof value === 'number' && window.isFinite(value)) {
                try {
                  /* try setting as a date, but... */
                  valueAsDate(element, new Date(value));
                } catch (e) {
                  /* ... when valueAsDate is not responsible, ... */
                  if (!(e instanceof window.DOMException)) {
                    throw e;
                  }
                  /* ... set it via Number.toString(). */
                  element.value = value.toString();
                }
              } else {
                throw new window.DOMException('valueAsNumber setter encountered invalid value', 'TypeError');
              }
              return;
            }

            return string_to_number(element.value, type);
          } else if (value !== undefined) {
            /* trying to set a number on a not-number input fails */
            throw new window.DOMException('valueAsNumber setter cannot set number on this element', 'InvalidStateError');
          }

          return NaN;
        }

        /**
         *
         */
        function stepDown(element) {
          var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

          if (numbers.indexOf(get_type(element)) === -1) {
            throw new window.DOMException('stepDown encountered invalid type', 'InvalidStateError');
          }
          if ((element.getAttribute('step') || '').toLowerCase() === 'any') {
            throw new window.DOMException('stepDown encountered step "any"', 'InvalidStateError');
          }

          var prev = get_next_valid(element, n)[0];

          if (prev !== null) {
            valueAsNumber(element, prev);
          }
        }

        /**
         *
         */
        function stepUp(element) {
          var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

          if (numbers.indexOf(get_type(element)) === -1) {
            throw new window.DOMException('stepUp encountered invalid type', 'InvalidStateError');
          }
          if ((element.getAttribute('step') || '').toLowerCase() === 'any') {
            throw new window.DOMException('stepUp encountered step "any"', 'InvalidStateError');
          }

          var next = get_next_valid(element, n)[1];

          if (next !== null) {
            valueAsNumber(element, next);
          }
        }

        /**
         * get the validation message for an element, empty string, if the element
         * satisfies all constraints.
         */
        function validationMessage(element) {
          var msg = message_store.get(element);
          if (!msg) {
            return '';
          }

          /* make it a primitive again, since message_store returns String(). */
          return msg.toString();
        }

        /**
         * check, if an element will be subject to HTML5 validation at all
         */
        function willValidate(element) {
          return is_validation_candidate(element);
        }

        var gA = function gA(prop) {
          return function () {
            return do_filter('attr_get_' + prop, this.getAttribute(prop), this);
          };
        };

        var sA = function sA(prop) {
          return function (value) {
            this.setAttribute(prop, do_filter('attr_set_' + prop, value, this));
          };
        };

        var gAb = function gAb(prop) {
          return function () {
            return do_filter('attr_get_' + prop, this.hasAttribute(prop), this);
          };
        };

        var sAb = function sAb(prop) {
          return function (value) {
            if (do_filter('attr_set_' + prop, value, this)) {
              this.setAttribute(prop, prop);
            } else {
              this.removeAttribute(prop);
            }
          };
        };

        var gAn = function gAn(prop) {
          return function () {
            return do_filter('attr_get_' + prop, Math.max(0, Number(this.getAttribute(prop))), this);
          };
        };

        var sAn = function sAn(prop) {
          return function (value) {
            value = do_filter('attr_set_' + prop, value, this);
            if (/^[0-9]+$/.test(value)) {
              this.setAttribute(prop, value);
            }
          };
        };

        function install_properties(element) {
          var _arr = ['accept', 'max', 'min', 'pattern', 'placeholder', 'step'];

          for (var _i = 0; _i < _arr.length; _i++) {
            var prop = _arr[_i];
            install_property(element, prop, {
              get: gA(prop),
              set: sA(prop)
            });
          }

          var _arr2 = ['multiple', 'required', 'readOnly'];
          for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
            var _prop = _arr2[_i2];
            install_property(element, _prop, {
              get: gAb(_prop.toLowerCase()),
              set: sAb(_prop.toLowerCase())
            });
          }

          var _arr3 = ['minLength', 'maxLength'];
          for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
            var _prop2 = _arr3[_i3];
            install_property(element, _prop2, {
              get: gAn(_prop2.toLowerCase()),
              set: sAn(_prop2.toLowerCase())
            });
          }
        }

        function uninstall_properties(element) {
          var _arr4 = ['accept', 'max', 'min', 'pattern', 'placeholder', 'step', 'multiple', 'required', 'readOnly', 'minLength', 'maxLength'];

          for (var _i4 = 0; _i4 < _arr4.length; _i4++) {
            var prop = _arr4[_i4];
            uninstall_property(element, prop);
          }
        }

        var polyfills = {
          checkValidity: {
            value: mark(function () {
              return checkValidity(this);
            })
          },
          reportValidity: {
            value: mark(function () {
              return reportValidity(this);
            })
          },
          setCustomValidity: {
            value: mark(function (msg) {
              return setCustomValidity(this, msg);
            })
          },
          stepDown: {
            value: mark(function () {
              var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
              return stepDown(this, n);
            })
          },
          stepUp: {
            value: mark(function () {
              var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
              return stepUp(this, n);
            })
          },
          validationMessage: {
            get: mark(function () {
              return validationMessage(this);
            })
          },
          validity: {
            get: mark(function () {
              return ValidityState(this);
            })
          },
          valueAsDate: {
            get: mark(function () {
              return valueAsDate(this);
            }),
            set: mark(function (value) {
              valueAsDate(this, value);
            })
          },
          valueAsNumber: {
            get: mark(function () {
              return valueAsNumber(this);
            }),
            set: mark(function (value) {
              valueAsNumber(this, value);
            })
          },
          willValidate: {
            get: mark(function () {
              return willValidate(this);
            })
          }
        };

        function polyfill (element) {
          if (is_field(element)) {

            for (var prop in polyfills) {
              install_property(element, prop, polyfills[prop]);
            }

            install_properties(element);
          } else if (element instanceof window.HTMLFormElement || element === window.HTMLFormElement.prototype) {
            install_property(element, 'checkValidity', polyfills.checkValidity);
            install_property(element, 'reportValidity', polyfills.reportValidity);
          }
        }

        function polyunfill (element) {
          if (is_field(element)) {

            uninstall_property(element, 'checkValidity');
            uninstall_property(element, 'reportValidity');
            uninstall_property(element, 'setCustomValidity');
            uninstall_property(element, 'stepDown');
            uninstall_property(element, 'stepUp');
            uninstall_property(element, 'validationMessage');
            uninstall_property(element, 'validity');
            uninstall_property(element, 'valueAsDate');
            uninstall_property(element, 'valueAsNumber');
            uninstall_property(element, 'willValidate');

            uninstall_properties(element);
          } else if (element instanceof window.HTMLFormElement) {
            uninstall_property(element, 'checkValidity');
            uninstall_property(element, 'reportValidity');
          }
        }

        var instances = new WeakMap();

        /**
         * wrap <form>s, window or document, that get treated with the global
         * hyperform()
         */
        function Wrapper(form, settings) {

          /* do not allow more than one instance per form. Otherwise we'd end
           * up with double event handlers, polyfills re-applied, ... */
          var existing = instances.get(form);
          if (existing) {
            existing.settings = settings;
            return existing;
          }

          this.form = form;
          this.settings = settings;
          this.revalidator = this.revalidate.bind(this);

          instances.set(form, this);

          catch_submit(form, settings.revalidate === 'never');

          if (form === window || form instanceof window.HTMLDocument) {
            /* install on the prototypes, when called for the whole document */
            this.install([window.HTMLButtonElement.prototype, window.HTMLInputElement.prototype, window.HTMLSelectElement.prototype, window.HTMLTextAreaElement.prototype, window.HTMLFieldSetElement.prototype]);
            polyfill(window.HTMLFormElement);
          } else if (form instanceof window.HTMLFormElement || form instanceof window.HTMLFieldSetElement) {
            this.install(form.elements);
            if (form instanceof window.HTMLFormElement) {
              polyfill(form);
            }
          }

          if (settings.revalidate === 'oninput' || settings.revalidate === 'hybrid') {
            /* in a perfect world we'd just bind to "input", but support here is
              * abysmal: http://caniuse.com/#feat=input-event */
            form.addEventListener('keyup', this.revalidator);
            form.addEventListener('change', this.revalidator);
          }
          if (settings.revalidate === 'onblur' || settings.revalidate === 'hybrid') {
            /* useCapture=true, because `blur` doesn't bubble. See
              * https://developer.mozilla.org/en-US/docs/Web/Events/blur#Event_delegation
              * for a discussion */
            form.addEventListener('blur', this.revalidator, true);
          }
        }

        Wrapper.prototype = {
          destroy: function destroy() {
            uncatch_submit(this.form);
            instances.delete(this.form);
            this.form.removeEventListener('keyup', this.revalidator);
            this.form.removeEventListener('change', this.revalidator);
            this.form.removeEventListener('blur', this.revalidator, true);
            if (this.form === window || this.form instanceof window.HTMLDocument) {
              this.uninstall([window.HTMLButtonElement.prototype, window.HTMLInputElement.prototype, window.HTMLSelectElement.prototype, window.HTMLTextAreaElement.prototype, window.HTMLFieldSetElement.prototype]);
              polyunfill(window.HTMLFormElement);
            } else if (this.form instanceof window.HTMLFormElement || this.form instanceof window.HTMLFieldSetElement) {
              this.uninstall(this.form.elements);
              if (this.form instanceof window.HTMLFormElement) {
                polyunfill(this.form);
              }
            }
          },


          /**
           * revalidate an input element
           */
          revalidate: function revalidate(event) {
            if (event.target instanceof window.HTMLButtonElement || event.target instanceof window.HTMLTextAreaElement || event.target instanceof window.HTMLSelectElement || event.target instanceof window.HTMLInputElement) {

              if (this.settings.revalidate === 'hybrid') {
                /* "hybrid" somewhat simulates what browsers do. See for example
                 * Firefox's :-moz-ui-invalid pseudo-class:
                 * https://developer.mozilla.org/en-US/docs/Web/CSS/:-moz-ui-invalid */
                if (event.type === 'blur' && event.target.value !== event.target.defaultValue || ValidityState(event.target).valid) {
                  /* on blur, update the report when the value has changed from the
                   * default or when the element is valid (possibly removing a still
                   * standing invalidity report). */
                  reportValidity(event.target);
                } else if (event.type === 'keyup' || event.type === 'change') {
                  if (ValidityState(event.target).valid) {
                    // report instantly, when an element becomes valid,
                    // postpone report to blur event, when an element is invalid
                    reportValidity(event.target);
                  }
                }
              } else {
                reportValidity(event.target);
              }
            }
          },


          /**
           * install the polyfills on each given element
           *
           * If you add elements dynamically, you have to call install() on them
           * yourself:
           *
           * js> var form = hyperform(document.forms[0]);
           * js> document.forms[0].appendChild(input);
           * js> form.install(input);
           *
           * You can skip this, if you called hyperform on window or document.
           */
          install: function install(els) {
            if (els instanceof window.Element) {
              els = [els];
            }

            var els_length = els.length;

            for (var i = 0; i < els_length; i++) {
              polyfill(els[i]);
            }
          },
          uninstall: function uninstall(els) {
            if (els instanceof window.Element) {
              els = [els];
            }

            var els_length = els.length;

            for (var i = 0; i < els_length; i++) {
              polyunfill(els[i]);
            }
          }
        };

        /**
         * try to get the appropriate wrapper for a specific element by looking up
         * its parent chain
         *
         * @return Wrapper | undefined
         */
        function get_wrapper(element) {
          var wrapped;

          if (element.form) {
            /* try a shortcut with the element's <form> */
            wrapped = instances.get(element.form);
          }

          /* walk up the parent nodes until document (including) */
          while (!wrapped && element) {
            wrapped = instances.get(element);
            element = element.parentNode;
          }

          if (!wrapped) {
            /* try the global instance, if exists. This may also be undefined. */
            wrapped = instances.get(window);
          }

          return wrapped;
        }

        /**
         * check if an element is a candidate for constraint validation
         *
         * @see https://html.spec.whatwg.org/multipage/forms.html#barred-from-constraint-validation
         */
        function is_validation_candidate (element) {
          /* it must be any of those elements */
          if (element instanceof window.HTMLSelectElement || element instanceof window.HTMLTextAreaElement || element instanceof window.HTMLButtonElement || element instanceof window.HTMLInputElement) {

            var type = get_type(element);
            /* its type must be in the whitelist or missing (select, textarea) */
            if (!type || non_inputs.indexOf(type) > -1 || validation_candidates.indexOf(type) > -1) {

              /* it mustn't be disabled or readonly */
              if (!element.hasAttribute('disabled') && !element.hasAttribute('readonly')) {

                var wrapped_form = get_wrapper(element);
                /* it hasn't got the (non-standard) attribute 'novalidate' or its
                 * parent form has got the strict parameter */
                if (wrapped_form && wrapped_form.settings.novalidate_on_elements || !element.hasAttribute('novalidate') || !element.noValidate) {

                  /* it isn't part of a <fieldset disabled> */
                  var p = element.parentNode;
                  while (p && p.nodeType === 1) {
                    if (p instanceof window.HTMLFieldSetElement && p.hasAttribute('disabled')) {
                      /* quick return, if it's a child of a disabled fieldset */
                      return false;
                    } else if (p.nodeName.toUpperCase() === 'DATALIST') {
                      /* quick return, if it's a child of a datalist
                       * Do not use HTMLDataListElement to support older browsers,
                       * too.
                       * @see https://html.spec.whatwg.org/multipage/forms.html#the-datalist-element:barred-from-constraint-validation
                       */
                      return false;
                    } else if (p === element.form) {
                      /* the outer boundary. We can stop looking for relevant
                       * fieldsets. */
                      break;
                    }
                    p = p.parentNode;
                  }

                  /* then it's a candidate */
                  return true;
                }
              }
            }
          }

          /* this is no HTML5 validation candidate... */
          return false;
        }

        function format_date (date) {
          var part = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

          switch (part) {
            case 'date':
              return (date.toLocaleDateString || date.toDateString).call(date);
            case 'time':
              return (date.toLocaleTimeString || date.toTimeString).call(date);
            case 'month':
              return 'toLocaleDateString' in date ? date.toLocaleDateString(undefined, {
                year: 'numeric',
                month: '2-digit'
              }) : date.toDateString();
            // case 'week':
            // TODO
            default:
              return (date.toLocaleString || date.toString).call(date);
          }
        }

        /**
         * patch String.length to account for non-BMP characters
         *
         * @see https://mathiasbynens.be/notes/javascript-unicode
         * We do not use the simple [...str].length, because it needs a ton of
         * polyfills in older browsers.
         */

        function unicode_string_length (str) {
          return str.match(/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g).length;
        }

        /**
         * internal storage for custom error messages
         */

        var store$1 = new WeakMap();

        /**
         * register custom error messages per element
         */
        var custom_messages = {
          set: function set(element, validator, message) {
            var messages = store$1.get(element) || {};
            messages[validator] = message;
            store$1.set(element, messages);
            return custom_messages;
          },
          get: function get(element, validator) {
            var _default = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

            var messages = store$1.get(element);
            if (messages === undefined || !(validator in messages)) {
              var data_id = 'data-' + validator.replace(/[A-Z]/g, '-$&').toLowerCase();
              if (element.hasAttribute(data_id)) {
                /* if the element has a data-validator attribute, use this as fallback.
                 * E.g., if validator == 'valueMissing', the element can specify a
                 * custom validation message like this:
                 *     <input data-value-missing="Oh noes!">
                 */
                return element.getAttribute(data_id);
              }
              return _default;
            }
            return messages[validator];
          },
          delete: function _delete(element) {
            var validator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (!validator) {
              return store$1.delete(element);
            }
            var messages = store$1.get(element) || {};
            if (validator in messages) {
              delete messages[validator];
              store$1.set(element, messages);
              return true;
            }
            return false;
          }
        };

        var internal_registry = new WeakMap();

        /**
         * A registry for custom validators
         *
         * slim wrapper around a WeakMap to ensure the values are arrays
         * (hence allowing > 1 validators per element)
         */
        var custom_validator_registry = {
          set: function set(element, validator) {
            var current = internal_registry.get(element) || [];
            current.push(validator);
            internal_registry.set(element, current);
            return custom_validator_registry;
          },
          get: function get(element) {
            return internal_registry.get(element) || [];
          },
          delete: function _delete(element) {
            return internal_registry.delete(element);
          }
        };

        /**
         * test whether the element suffers from bad input
         */
        function test_bad_input (element) {
          var type = get_type(element);

          if (!is_validation_candidate(element) || input_checked.indexOf(type) === -1) {
            /* we're not interested, thanks! */
            return true;
          }

          /* the browser hides some bad input from the DOM, e.g. malformed numbers,
           * email addresses with invalid punycode representation, ... We try to resort
           * to the original method here. The assumption is, that a browser hiding
           * bad input will hopefully also always support a proper
           * ValidityState.badInput */
          if (!element.value) {
            if ('_original_validity' in element && !element._original_validity.__hyperform) {
              return !element._original_validity.badInput;
            }
            /* no value and no original badInput: Assume all's right. */
            return true;
          }

          var result = true;
          switch (type) {
            case 'color':
              result = /^#[a-f0-9]{6}$/.test(element.value);
              break;
            case 'number':
            case 'range':
              result = !isNaN(Number(element.value));
              break;
            case 'datetime':
            case 'date':
            case 'month':
            case 'week':
            case 'time':
              result = string_to_date(element.value, type) !== null;
              break;
            case 'datetime-local':
              result = /^([0-9]{4,})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9])(?:\.([0-9]{1,3}))?)?$/.test(element.value);
              break;
            case 'tel':
              /* spec says No! Phone numbers can have all kinds of formats, so this
               * is expected to be a free-text field. */
              // TODO we could allow a setting 'phone_regex' to be evaluated here.
              break;
            case 'email':
              break;
          }

          return result;
        }

        /**
         * test the max attribute
         *
         * we use Number() instead of parseFloat(), because an invalid attribute
         * value like "123abc" should result in an error.
         */
        function test_max (element) {
          var type = get_type(element);

          if (!is_validation_candidate(element) || !element.value || !element.hasAttribute('max')) {
            /* we're not responsible here */
            return true;
          }

          var value = void 0,
              max = void 0;
          if (dates.indexOf(type) > -1) {
            value = 1 * string_to_date(element.value, type);
            max = 1 * (string_to_date(element.getAttribute('max'), type) || NaN);
          } else {
            value = Number(element.value);
            max = Number(element.getAttribute('max'));
          }

          return isNaN(max) || value <= max;
        }

        /**
         * test the maxlength attribute
         */
        function test_maxlength (element) {
          if (!is_validation_candidate(element) || !element.value || text_types.indexOf(get_type(element)) === -1 || !element.hasAttribute('maxlength') || !element.getAttribute('maxlength') // catch maxlength=""
          ) {
              return true;
            }

          var maxlength = parseInt(element.getAttribute('maxlength'), 10);

          /* check, if the maxlength value is usable at all.
           * We allow maxlength === 0 to basically disable input (Firefox does, too).
           */
          if (isNaN(maxlength) || maxlength < 0) {
            return true;
          }

          return unicode_string_length(element.value) <= maxlength;
        }

        /**
         * test the min attribute
         *
         * we use Number() instead of parseFloat(), because an invalid attribute
         * value like "123abc" should result in an error.
         */
        function test_min (element) {
          var type = get_type(element);

          if (!is_validation_candidate(element) || !element.value || !element.hasAttribute('min')) {
            /* we're not responsible here */
            return true;
          }

          var value = void 0,
              min = void 0;
          if (dates.indexOf(type) > -1) {
            value = 1 * string_to_date(element.value, type);
            min = 1 * (string_to_date(element.getAttribute('min'), type) || NaN);
          } else {
            value = Number(element.value);
            min = Number(element.getAttribute('min'));
          }

          return isNaN(min) || value >= min;
        }

        /**
         * test the minlength attribute
         */
        function test_minlength (element) {
          if (!is_validation_candidate(element) || !element.value || text_types.indexOf(get_type(element)) === -1 || !element.hasAttribute('minlength') || !element.getAttribute('minlength') // catch minlength=""
          ) {
              return true;
            }

          var minlength = parseInt(element.getAttribute('minlength'), 10);

          /* check, if the minlength value is usable at all. */
          if (isNaN(minlength) || minlength < 0) {
            return true;
          }

          return unicode_string_length(element.value) >= minlength;
        }

        /**
         * test the pattern attribute
         */
        function test_pattern (element) {
            return !is_validation_candidate(element) || !element.value || !element.hasAttribute('pattern') || new RegExp('^(?:' + element.getAttribute('pattern') + ')$').test(element.value);
        }

        /**
         * test the required attribute
         */
        function test_required (element) {
          if (!is_validation_candidate(element) || !element.hasAttribute('required')) {
            /* nothing to do */
            return true;
          }

          /* we don't need get_type() for element.type, because "checkbox" and "radio"
           * are well supported. */
          switch (element.type) {
            case 'checkbox':
              return element.checked;
            //break;
            case 'radio':
              /* radio inputs have "required" fulfilled, if _any_ other radio
               * with the same name in this form is checked. */
              return !!(element.checked || element.form && Array.prototype.filter.call(document.getElementsByName(element.name), function (radio) {
                return radio.name === element.name && radio.form === element.form && radio.checked;
              }).length > 0);
            //break;
            default:
              return !!element.value;
          }
        }

        /**
         * test the step attribute
         */
        function test_step (element) {
          var type = get_type(element);

          if (!is_validation_candidate(element) || !element.value || numbers.indexOf(type) === -1 || (element.getAttribute('step') || '').toLowerCase() === 'any') {
            /* we're not responsible here. Note: If no step attribute is given, we
             * need to validate against the default step as per spec. */
            return true;
          }

          var step = element.getAttribute('step');
          if (step) {
            step = string_to_number(step, type);
          } else {
            step = default_step[type] || 1;
          }

          if (step <= 0 || isNaN(step)) {
            /* error in specified "step". We cannot validate against it, so the value
             * is true. */
            return true;
          }

          var scale = step_scale_factor[type] || 1;

          var value = string_to_number(element.value, type);
          var min = string_to_number(element.getAttribute('min') || element.getAttribute('value') || '', type);

          if (isNaN(min)) {
            min = default_step_base[type] || 0;
          }

          if (type === 'month') {
            /* type=month has month-wide steps. See
             * https://html.spec.whatwg.org/multipage/forms.html#month-state-%28type=month%29
             */
            min = new Date(min).getUTCFullYear() * 12 + new Date(min).getUTCMonth();
            value = new Date(value).getUTCFullYear() * 12 + new Date(value).getUTCMonth();
          }

          var result = Math.abs(min - value) % (step * scale);

          return result < 0.00000001 ||
          /* crappy floating-point arithmetics! */
          result > step * scale - 0.00000001;
        }

        var ws_on_start_or_end = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        /**
         * trim a string of whitespace
         *
         * We don't use String.trim() to remove the need to polyfill it.
         */
        function trim (str) {
          return str.replace(ws_on_start_or_end, '');
        }

        /**
         * split a string on comma and trim the components
         *
         * As specified at
         * https://html.spec.whatwg.org/multipage/infrastructure.html#split-a-string-on-commas
         * plus removing empty entries.
         */
        function comma_split (str) {
          return str.split(',').map(function (item) {
            return trim(item);
          }).filter(function (b) {
            return b;
          });
        }

        /* we use a dummy <a> where we set the href to test URL validity
         * The definition is out of the "global" scope so that JSDOM can be instantiated
         * after loading Hyperform for tests.
         */
        var url_canary;

        /* see https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address */
        var email_pattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        /**
         * test the type-inherent syntax
         */
        function test_type (element) {
          var type = get_type(element);

          if (!is_validation_candidate(element) || type !== 'file' && !element.value || type !== 'file' && type_checked.indexOf(type) === -1) {
            /* we're not responsible for this element */
            return true;
          }

          var is_valid = true;

          switch (type) {
            case 'url':
              if (!url_canary) {
                url_canary = document.createElement('a');
              }
              var value = trim(element.value);
              url_canary.href = value;
              is_valid = url_canary.href === value || url_canary.href === value + '/';
              break;
            case 'email':
              if (element.hasAttribute('multiple')) {
                is_valid = comma_split(element.value).every(function (value) {
                  return email_pattern.test(value);
                });
              } else {
                is_valid = email_pattern.test(trim(element.value));
              }
              break;
            case 'file':
              if ('files' in element && element.files.length && element.hasAttribute('accept')) {
                var patterns = comma_split(element.getAttribute('accept')).map(function (pattern) {
                  if (/^(audio|video|image)\/\*$/.test(pattern)) {
                    pattern = new RegExp('^' + RegExp.$1 + '/.+$');
                  }
                  return pattern;
                });

                if (!patterns.length) {
                  break;
                }

                fileloop: for (var i = 0; i < element.files.length; i++) {
                  /* we need to match a whitelist, so pre-set with false */
                  var file_valid = false;

                  patternloop: for (var j = 0; j < patterns.length; j++) {
                    var file = element.files[i];
                    var pattern = patterns[j];

                    var fileprop = file.type;

                    if (typeof pattern === 'string' && pattern.substr(0, 1) === '.') {
                      if (file.name.search('.') === -1) {
                        /* no match with any file ending */
                        continue patternloop;
                      }

                      fileprop = file.name.substr(file.name.lastIndexOf('.'));
                    }

                    if (fileprop.search(pattern) === 0) {
                      /* we found one match and can quit looking */
                      file_valid = true;
                      break patternloop;
                    }
                  }

                  if (!file_valid) {
                    is_valid = false;
                    break fileloop;
                  }
                }
              }
          }

          return is_valid;
        }

        /**
         * boilerplate function for all tests but customError
         */
        function check$1(test, react) {
          return function (element) {
            var invalid = !test(element);
            if (invalid) {
              react(element);
            }
            return invalid;
          };
        }

        /**
         * create a common function to set error messages
         */
        function set_msg(element, msgtype, _default) {
          message_store.set(element, custom_messages.get(element, msgtype, _default));
        }

        var badInput = check$1(test_bad_input, function (element) {
          return set_msg(element, 'badInput', _('Please match the requested type.'));
        });

        function customError(element) {
          /* check, if there are custom validators in the registry, and call
           * them. */
          var custom_validators = custom_validator_registry.get(element);
          var cvl = custom_validators.length;
          var valid = true;

          if (cvl) {
            for (var i = 0; i < cvl; i++) {
              var result = custom_validators[i](element);
              if (result !== undefined && !result) {
                valid = false;
                /* break on first invalid response */
                break;
              }
            }
          }

          /* check, if there are other validity messages already */
          if (valid) {
            var msg = message_store.get(element);
            valid = !(msg.toString() && 'is_custom' in msg);
          }

          return !valid;
        }

        var patternMismatch = check$1(test_pattern, function (element) {
          set_msg(element, 'patternMismatch', element.title ? sprintf(_('PatternMismatchWithTitle'), element.title) : _('PatternMismatch'));
        });

        /**
         * TODO: when rangeOverflow and rangeUnderflow are both called directly and
         * successful, the inRange and outOfRange classes won't get removed, unless
         * element.validityState.valid is queried, too.
         */
        var rangeOverflow = check$1(test_max, function (element) {
          var type = get_type(element);
          var wrapper = get_wrapper(element);
          var outOfRangeClass = wrapper && wrapper.settings.classes.outOfRange || 'hf-out-of-range';
          var inRangeClass = wrapper && wrapper.settings.classes.inRange || 'hf-in-range';

          var msg = void 0;

          switch (type) {
            case 'date':
            case 'datetime':
            case 'datetime-local':
              msg = sprintf(_('DateRangeOverflow'), format_date(string_to_date(element.getAttribute('max'), type), type));
              break;
            case 'time':
              msg = sprintf(_('TimeRangeOverflow'), format_date(string_to_date(element.getAttribute('max'), type), type));
              break;
            // case 'number':
            default:
              msg = sprintf(_('NumberRangeOverflow'), string_to_number(element.getAttribute('max'), type));
              break;
          }

          set_msg(element, 'rangeOverflow', msg);
          element.classList.add(outOfRangeClass);
          element.classList.remove(inRangeClass);
        });

        var rangeUnderflow = check$1(test_min, function (element) {
          var type = get_type(element);
          var wrapper = get_wrapper(element);
          var outOfRangeClass = wrapper && wrapper.settings.classes.outOfRange || 'hf-out-of-range';
          var inRangeClass = wrapper && wrapper.settings.classes.inRange || 'hf-in-range';

          var msg = void 0;

          switch (type) {
            case 'date':
            case 'datetime':
            case 'datetime-local':
              msg = sprintf(_('DateRangeUnderflow'), format_date(string_to_date(element.getAttribute('min'), type), type));
              break;
            case 'time':
              msg = sprintf(_('TimeRangeUnderflow'), format_date(string_to_date(element.getAttribute('min'), type), type));
              break;
            // case 'number':
            default:
              msg = sprintf(_('NumberRangeUnderflow'), string_to_number(element.getAttribute('min'), type));
              break;
          }

          set_msg(element, 'rangeUnderflow', msg);
          element.classList.add(outOfRangeClass);
          element.classList.remove(inRangeClass);
        });

        var stepMismatch = check$1(test_step, function (element) {
          var list = get_next_valid(element);
          var min = list[0];
          var max = list[1];
          var sole = false;
          var msg = void 0;

          if (min === null) {
            sole = max;
          } else if (max === null) {
            sole = min;
          }

          if (sole !== false) {
            msg = sprintf(_('StepMismatchOneValue'), sole);
          } else {
            msg = sprintf(_('StepMismatch'), min, max);
          }
          set_msg(element, 'stepMismatch', msg);
        });

        var tooLong = check$1(test_maxlength, function (element) {
          set_msg(element, 'tooLong', sprintf(_('TextTooLong'), element.getAttribute('maxlength'), unicode_string_length(element.value)));
        });

        var tooShort = check$1(test_minlength, function (element) {
          set_msg(element, 'tooShort', sprintf(_('Please lengthen this text to %l characters or more (you are currently using %l characters).'), element.getAttribute('maxlength'), unicode_string_length(element.value)));
        });

        var typeMismatch = check$1(test_type, function (element) {
          var msg = _('Please use the appropriate format.');
          var type = get_type(element);

          if (type === 'email') {
            if (element.hasAttribute('multiple')) {
              msg = _('Please enter a comma separated list of email addresses.');
            } else {
              msg = _('InvalidEmail');
            }
          } else if (type === 'url') {
            msg = _('InvalidURL');
          } else if (type === 'file') {
            msg = _('Please select a file of the correct type.');
          }

          set_msg(element, 'typeMismatch', msg);
        });

        var valueMissing = check$1(test_required, function (element) {
          var msg = _('ValueMissing');
          var type = get_type(element);

          if (type === 'checkbox') {
            msg = _('CheckboxMissing');
          } else if (type === 'radio') {
            msg = _('RadioMissing');
          } else if (type === 'file') {
            if (element.hasAttribute('multiple')) {
              msg = _('Please select one or more files.');
            } else {
              msg = _('FileMissing');
            }
          } else if (element instanceof window.HTMLSelectElement) {
            msg = _('SelectMissing');
          }

          set_msg(element, 'valueMissing', msg);
        });

        var validity_state_checkers = {
          badInput: badInput,
          customError: customError,
          patternMismatch: patternMismatch,
          rangeOverflow: rangeOverflow,
          rangeUnderflow: rangeUnderflow,
          stepMismatch: stepMismatch,
          tooLong: tooLong,
          tooShort: tooShort,
          typeMismatch: typeMismatch,
          valueMissing: valueMissing
        };

        /**
         * the validity state constructor
         */
        var ValidityState = function ValidityState(element) {
          if (!(element instanceof window.HTMLElement)) {
            throw new Error('cannot create a ValidityState for a non-element');
          }

          var cached = ValidityState.cache.get(element);
          if (cached) {
            return cached;
          }

          if (!(this instanceof ValidityState)) {
            /* working around a forgotten `new` */
            return new ValidityState(element);
          }

          this.element = element;
          ValidityState.cache.set(element, this);
        };

        /**
         * the prototype for new validityState instances
         */
        var ValidityStatePrototype = {};
        ValidityState.prototype = ValidityStatePrototype;

        ValidityState.cache = new WeakMap();

        /**
         * copy functionality from the validity checkers to the ValidityState
         * prototype
         */
        for (var prop in validity_state_checkers) {
          Object.defineProperty(ValidityStatePrototype, prop, {
            configurable: true,
            enumerable: true,
            get: function (func) {
              return function () {
                return func(this.element);
              };
            }(validity_state_checkers[prop]),
            set: undefined
          });
        }

        /**
         * the "valid" property calls all other validity checkers and returns true,
         * if all those return false.
         *
         * This is the major access point for _all_ other API methods, namely
         * (check|report)Validity().
         */
        Object.defineProperty(ValidityStatePrototype, 'valid', {
          configurable: true,
          enumerable: true,
          get: function get() {
            var wrapper = get_wrapper(this.element);
            var validClass = wrapper && wrapper.settings.classes.valid || 'hf-valid';
            var invalidClass = wrapper && wrapper.settings.classes.invalid || 'hf-invalid';
            var userInvalidClass = wrapper && wrapper.settings.classes.userInvalid || 'hf-user-invalid';
            var userValidClass = wrapper && wrapper.settings.classes.userValid || 'hf-user-valid';
            var inRangeClass = wrapper && wrapper.settings.classes.inRange || 'hf-in-range';
            var outOfRangeClass = wrapper && wrapper.settings.classes.outOfRange || 'hf-out-of-range';
            var validatedClass = wrapper && wrapper.settings.classes.validated || 'hf-validated';

            this.element.classList.add(validatedClass);

            if (is_validation_candidate(this.element)) {
              for (var _prop in validity_state_checkers) {
                if (validity_state_checkers[_prop](this.element)) {
                  this.element.classList.add(invalidClass);
                  this.element.classList.remove(validClass);
                  this.element.classList.remove(userValidClass);
                  if (this.element.value !== this.element.defaultValue) {
                    this.element.classList.add(userInvalidClass);
                  } else {
                    this.element.classList.remove(userInvalidClass);
                  }
                  this.element.setAttribute('aria-invalid', 'true');
                  return false;
                }
              }
            }

            message_store.delete(this.element);
            this.element.classList.remove(invalidClass, userInvalidClass, outOfRangeClass);
            this.element.classList.add(validClass, inRangeClass);
            if (this.element.value !== this.element.defaultValue) {
              this.element.classList.add(userValidClass);
            } else {
              this.element.classList.remove(userValidClass);
            }
            this.element.setAttribute('aria-invalid', 'false');
            return true;
          },
          set: undefined
        });

        /**
         * mark the validity prototype, because that is what the client-facing
         * code deals with mostly, not the property descriptor thing */
        mark(ValidityStatePrototype);

        /**
         * check an element's validity with respect to it's form
         */
        var checkValidity = return_hook_or('checkValidity', function (element) {
          /* if this is a <form>, check validity of all child inputs */
          if (element instanceof window.HTMLFormElement) {
            return Array.prototype.map.call(element.elements, checkValidity).every(function (b) {
              return b;
            });
          }

          /* default is true, also for elements that are no validation candidates */
          var valid = ValidityState(element).valid;
          if (valid) {
            var wrapped_form = get_wrapper(element);
            if (wrapped_form && wrapped_form.settings.valid_event) {
              trigger_event(element, 'valid');
            }
          } else {
            trigger_event(element, 'invalid', { cancelable: true });
          }

          return valid;
        });

        var version = '0.8.9';

        /**
         * public hyperform interface:
         */
        function hyperform(form) {
          var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          var _ref$strict = _ref.strict;
          var strict = _ref$strict === undefined ? false : _ref$strict;
          var _ref$prevent_implicit = _ref.prevent_implicit_submit;
          var prevent_implicit_submit = _ref$prevent_implicit === undefined ? false : _ref$prevent_implicit;
          var revalidate = _ref.revalidate;
          var valid_event = _ref.valid_event;
          var extend_fieldset = _ref.extend_fieldset;
          var novalidate_on_elements = _ref.novalidate_on_elements;
          var classes = _ref.classes;


          if (revalidate === undefined) {
            /* other recognized values: 'oninput', 'onblur', 'onsubmit' and 'never' */
            revalidate = strict ? 'onsubmit' : 'hybrid';
          }
          if (valid_event === undefined) {
            valid_event = !strict;
          }
          if (extend_fieldset === undefined) {
            extend_fieldset = !strict;
          }
          if (novalidate_on_elements === undefined) {
            novalidate_on_elements = !strict;
          }
          if (!classes) {
            classes = {};
          }

          var settings = { strict: strict, prevent_implicit_submit: prevent_implicit_submit, revalidate: revalidate, valid_event: valid_event,
            extend_fieldset: extend_fieldset, classes: classes };

          if (form instanceof window.NodeList || form instanceof window.HTMLCollection || form instanceof Array) {
            return Array.prototype.map.call(form, function (element) {
              return hyperform(element, settings);
            });
          }

          return new Wrapper(form, settings);
        }

        hyperform.version = version;

        hyperform.checkValidity = checkValidity;
        hyperform.reportValidity = reportValidity;
        hyperform.setCustomValidity = setCustomValidity;
        hyperform.stepDown = stepDown;
        hyperform.stepUp = stepUp;
        hyperform.validationMessage = validationMessage;
        hyperform.ValidityState = ValidityState;
        hyperform.valueAsDate = valueAsDate;
        hyperform.valueAsNumber = valueAsNumber;
        hyperform.willValidate = willValidate;

        hyperform.set_language = function (lang) {
          set_language(lang);return hyperform;
        };
        hyperform.add_translation = function (lang, catalog) {
          add_translation(lang, catalog);return hyperform;
        };
        hyperform.set_renderer = function (renderer, action) {
          Renderer.set(renderer, action);return hyperform;
        };
        hyperform.add_validator = function (element, validator) {
          custom_validator_registry.set(element, validator);return hyperform;
        };
        hyperform.set_message = function (element, validator, message) {
          custom_messages.set(element, validator, message);return hyperform;
        };
        hyperform.add_hook = function (hook, action, position) {
          add_hook(hook, action, position);return hyperform;
        };
        hyperform.remove_hook = function (hook, action) {
          remove_hook(hook, action);return hyperform;
        };

        return hyperform;

}());;function init_infoBox(){BB.gmap.infobox.prototype=new google.maps.OverlayView,BB.gmap.infobox.prototype.remove=function(){if(this._div){try{this._div.parentNode.removeChild(this._div)}catch(a){}this._div=null}},BB.gmap.infobox.prototype.set_map=function(a){this.__MAP=a,this.setMap(this.__MAP)},BB.gmap.infobox.prototype.map=function(){return this.__MAP},BB.gmap.infobox.prototype.draw=function(){this.createElement();var a=this.getProjection().fromLatLngToDivPixel(this.opts.position);a&&(this._div.style.width=this._width+"px",this._div.style.left=a.x+this._offsetX+"px",this._div.style.height=this._height+"px",this._div.style.top=a.y+this._offsetY+"px",this._div.style.display="block",this._div.style.zIndex=1)},BB.gmap.infobox.prototype.createElement=function(){var a=this.getPanes(),b=this._div;if(b){if(b.parentNode!=a.floatPane){try{b.parentNode.removeChild(b)}catch(c){}a.floatPane.appendChild(b)}}else{b=this._div=document.createElement("div"),b.style.border="0",b.style.position="absolute",b.style.width=this._width+"px",b.style.height=this._height+"px";var d="gmap_infobox";b.setAttribute("class",d),contentDiv=document.createElement("div"),$(contentDiv).html(this.__ELEM.innerHTML),b.appendChild(contentDiv),contentDiv.style.display="block",b.style.display="none",a.floatPane.appendChild(b),this.panMap()}},BB.gmap.infobox.prototype.panMap=function(){var a=this.map,b=a.getBounds();if(b){var c=this.opts.position,d=this._width,e=this._height,f=this._offsetX,g=this._offsetY,h=0,i=0,j=a.getDiv(),k=j.offsetWidth,l=j.offsetHeight,m=b.toSpan(),n=m.lng(),o=m.lat(),p=n/k,q=o/l,r=b.getSouthWest().lng(),s=b.getNorthEast().lng(),t=b.getNorthEast().lat(),u=b.getSouthWest().lat(),v=c.lng()+(f-h)*p,w=c.lng()+(f+d+h)*p,x=c.lat()-(g-i)*q,y=c.lat()-(g+e+i)*q,z=(r>v?r-v:0)+(w>s?s-w:0),A=(x>t?t-x:0)+(u>y?u-y:0),B=a.getCenter();if(!B||"undefined"==typeof B)return!1;B.lng()-z,B.lat()-A;null!==this._bounds_changed_listener&&google.maps.event.removeListener(this._bounds_changed_listener),this._bounds_changed_listener=null}}}var BB=BB||{};BB.base=function(){this.__BB_DEBUG__=!1,this.__PROTECTED__=[],this._data=void 0},BB.base.prototype.set_data=function(a){return"undefined"==typeof this._data&&(this._data=new BB.data),"object"!=typeof a?this:(this._data.set_data(a),this)},BB.base.prototype.remove_data=function(a){return this._data.remove_data(a),this},BB.base.prototype.get_data=function(a){var b=this.data();return"undefined"!=typeof b[a]?b[a]:!1},BB.base.prototype.data=function(a){return this._data.get_data(a)},BB.base.prototype.sanitize=function(){var a=this.data();return a=this._escape_data(a),this.set_data(a),this},BB.base.prototype._escape_data=function(a){if("undefined"==typeof a)return"";if("object"==typeof a&&a.length)for(var b=0,c=a.length;c>b;b++)a[b]=this._escape_data(a[b]);if("object"==typeof a)for(var d in a)a[d]=this._escape_data(a[d]);return"string"==typeof a?escape(a):a},BB.base.prototype._unescape_data=function(a){if("undefined"==typeof a)return"";if("object"==typeof a)for(var b in a)a[b]=this._unescape_data(a[b]);return"string"==typeof a?unescape(a):a},BB.base.prototype.ident=function(){var a=this.data();return"string"!=typeof a.ident?(this.error("Ident is not a String which is odd. "+a.ident),""):a.ident},BB.base.prototype.set_ident=function(a){return"string"!=typeof a&&(a=""+a,this.error("Ident must be a string. Automatically converted to : "+a)),this.set_data({ident:a}),this},BB.base.prototype.error=function(a){if(this.__BB_DEBUG__)throw Error(a);return this},BB.base.prototype.is_empty_object=function(a){if("object"!=typeof a)return this.error("Invalid argument, Object expected at BB.base.is_empty_object()"),!0;for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},BB.base.prototype.extend=function(a,b){var c,d={};for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);for(c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c]);return d};var BB=BB||{};BB.data=function(a){if(this.__PROTECTED__=[],this.__HIDDEN_DATA__=!0,this.__HIDDEN_DATA__){var b=a||{};return{set_data:function(a){for(var c in a)b[c]=a[c]},get_data:function(a){return a?"undefined"!=typeof b[a]?b[a]:"":b},remove_data:function(a){a||(b={}),"undefined"!=typeof b[a]&&(b[a]=void 0,delete b[a])}}}return this.__DATA=a||{},this.set_data=function(a){if(!this.__DATA)return void(this.__DATA=a||{});if(a)for(var b in a)this.__DATA[b]=a[b]},this.get_data=function(a){return a?"undefined"!=typeof this.__DATA[a]?this.__DATA[a]:void 0:this.__DATA},this.remove_data=function(a){a||(this.__DATA={}),"undefined"!=typeof this.__DATA[a]&&(this.__DATA[a]=void 0,delete this.__DATA[a])},this};var BB=BB||{};BB.gmap=BB.gmap||{},BB.gmap.controller=function(a,b){return this._MAP=void 0,this.__CONTAINER=a,this.__EDITABLE=!1,this.__PLACES={markers:{},polygons:{},lines:{}},this.__FOCUSED_ITEM=void 0,this.__CLUSTERER=void 0,this.set_data(b),this},BB.gmap.controller.prototype=new BB.base,BB.gmap.controller.prototype.map=function(){return this._MAP?this._MAP:(this.error("No map associated to the current controller at BB.gmap.controller.map()"),!1)},BB.gmap.controller.prototype.loading_place=function(a){var b=this.get_place(a);return b?(b.set_data({loaded:!1}),this):this},BB.gmap.controller.prototype.place_loaded=function(a){return a?a.data("loaded")?!1:(a.set_data({loaded:!0}),this.check_loaded_places()&&this._ready(),this):this},BB.gmap.controller.prototype.check_loaded_places=function(){var a=!0;return this._loop_all(function(b){a=!(!a||!b.data("loaded"))}),a=a&&this.data("tiles_loaded")},BB.gmap.controller.prototype.ready=function(a){return"function"==typeof a&&this.set_data({map_ready:a}),this},BB.gmap.controller.prototype._ready=function(){var a=this.data();return this.data("loaded")?this:("function"==typeof a.map_ready&&a.map_ready(this),this.set_data({loaded:!0}),this)},BB.gmap.controller.prototype.set_zoom=function(a){return this.map().setZoom(a),this},BB.gmap.controller.prototype.container=function(){return this.__CONTAINER},BB.gmap.controller.prototype.init=function(){var a=this.data();if(this.map())return this;var b=this.data("map");return b.center=new google.maps.LatLng(parseFloat(b.center.x),parseFloat(b.center.y)),this._MAP=new google.maps.Map(this.container(),b),"object"!=typeof a.places?this.error("You haven't set any places yet"):this.add_places(a.places),this.listeners(),this},BB.gmap.controller.prototype.set_styles=function(a){"object"!=typeof a&&this.error("Invalid type styles in BB.gmap.set_styles()"+a);var b=this.data("map");return b.styles=a,this.data("map",b),this.map()&&this.map().setOptions({styles:a}),this},BB.gmap.controller.prototype.add_places=function(a){if(!a)return this.error("Invalid places specified :"+a),this;for(var b in a)this.add_place(b,a[b]);return this},BB.gmap.controller.prototype.set_place=function(a,b,c){return b&&c?"undefined"==typeof this.__PLACES[a]?(this.error("Invalid data type at BB.gmap.controlle.set_place( "+a+", "+b+", "+c+")"),this):("undefined"==typeof this.__PLACES[a][b]&&(this.__PLACES[a][b]={}),c.set_ident(b),this.__PLACES[a][b]=c,this):(this.error("Missing parameters in BB.gmap.controller.set_place( "+a+", "+b+", "+c+")"),this)},BB.gmap.controller.prototype.add_place=function(a,b){if(!b)return this.error("Missing parameter BB.gmap.controller.prototype.add_place ( ident, data ) : ( "+a+", "+b+" )"),this;if("string"!=typeof b.type)return this.error('Missing parameter "type" in BB.gmap.controller.prototype.add_place'),this;b.ident=a;var c=b.type;switch(c){case"marker":var d=new BB.gmap.marker(b,this);this.set_place("markers",a,d);break;case"line":this.set_place("lines",a,new BB.gmap.line(b,this));break;case"polygon":this.set_place("polygons",a,new BB.gmap.polygon(b,this))}return this},BB.gmap.controller.prototype.get_places=function(){return this.__PLACES},BB.gmap.controller.prototype.get_places_by_type=function(a){return this.__PLACES[a]},BB.gmap.controller.prototype.add_place_by_address=function(a,b,c){var d=this;this.geocode_address(b,function(b){c.coords=b,d.add_place(a,c)})},BB.gmap.controller.prototype.geocode_address=function(a,b){var c=Array();if("undefined"==typeof google)return error;var d=new google.maps.Geocoder;d.geocode({address:a},function(a,d){if(d==google.maps.GeocoderStatus.OK){var e=a[0].geometry.location.lat(),f=a[0].geometry.location.lng();"function"==typeof b&&b([e,f])}return c})},BB.gmap.controller.prototype.get_place=function(a){var b=this.get_places(),c=!1;for(var d in b){var e=this.get_places_by_type(d);this.is_empty_object(e)||(c="object"==typeof e[a]?e[a]:c)}return c?c:(this.error("Invalid ident at BB.gmap.controller.get_place( ident ) : "+a),!1)},BB.gmap.controller.prototype.remove_focus=function(){var a=this.focused();if(a){if("function"==typeof this.data("onblur")){var b=this.data("onblur");b(a,this)}a.blur(),this.__FOCUSED_ITEM=void 0}return this},BB.gmap.controller.prototype.set_focus=function(a){if(this.remove_focus(),this.__FOCUSED_ITEM=a,"function"==typeof this.data("onfocus")){var b=this.data("onfocus");b(a,this)}return this},BB.gmap.controller.prototype.focused=function(){return this.__FOCUSED_ITEM},BB.gmap.controller.prototype.translate_coords=function(a){if("object"==typeof a){var b=a.length;if(2==b)return new google.maps.LatLng(a[0],a[1])}},BB.gmap.controller.prototype.listeners=function(){var a=this;return google.maps.event.clearListeners(this.map(),"click"),google.maps.event.addListener(this.map(),"click",function(b){a.map_click(b)}),google.maps.event.addListenerOnce(this.map(),"tilesloaded",function(b){a.set_data({tiles_loaded:!0}),a._ready()}),google.maps.event.addDomListener(document,"keyup",function(b){var c=b.keyCode?b.keyCode:b.which;switch(c){case 46:a.focused()&&a.focused().data("editable")&&(a.focused()["delete"](),a.remove_focus());break;case 27:a.focused()&&a.remove_focus()}}),this},BB.gmap.controller.prototype.create_new=function(a,b){var c=this;b||(b="new_object");var d=this.data("default_styles");switch(d||(d={strokeColor:"#000000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FFFFFF",fillOpacity:.35,hover:{strokeColor:"#000000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FFFFFF",fillOpacity:1},focused:{fillOpacity:1}}),a){case"polygon":var e={type:"polygon",editable:!0,styles:d},f=new BB.gmap.polygon(e,c);c.set_place("polygons",b,f),c.set_focus(f);break;case"line":var e={type:"line",editable:!0,styles:d},g=new BB.gmap.line(e,c);c.set_place("lines",b,g),c.set_focus(g);break;default:this.set_data({marker_creation:b})}},BB.gmap.controller.prototype.on=function(a,b){var c="on"+a,d={};d[c]=b,this.set_data(d)},BB.gmap.controller.prototype.map_click=function(a){if(this.data("marker_creation")){if(this.add_place(this.data("marker_creation"),{coords:[a.latLng.lat(),a.latLng.lng()],draggable:!0,editable:!0,type:"marker"}),this.set_focus(this.get_place(this.data("marker_creation"))),"function"==typeof this.data("marker_creation_callback")){var b=this.data("marker_creation_callback");b(this.get_place(this.data("marker_creation")))}this.set_data({marker_creation:!1})}var c=this.focused();return c?(c.data("editable")?c.map_click(a):this.remove_focus(),this):this},BB.gmap.controller.prototype._loop_all=function(a){if("function"!=typeof a)return this;var b=this.get_places();for(var c in b){var d=this.get_places_by_type(c);if(!this.is_empty_object(d))for(var e in d)a(d[e])}return this},BB.gmap.controller.prototype.filter=function(a){var b=this;b._loop_all(function(b){if(!a)return b.show(),!1;var c=b.data("categories");if(!c)return b.hide(),!1;"string"==typeof c&&(c=c.split(",")),c||b.hide();var d=!1;for(var e in c)a==c[e]&&(d=!0);d?b.show():b.hide()})},BB.gmap.controller.prototype.fit_bounds=function(){var a=new google.maps.LatLngBounds,b=0;if(this._loop_all(function(c){var d=c.get_position();if(!d)return!1;for(var e,f=0;f<d.getLength();f++){e=d.getAt(f);for(var g=0;g<e.getLength();g++)a.extend(e.getAt(g))}b++}),b>0&&(this.map().fitBounds(a),this.data("max_fitbounds_zoom"))){var c=this.data("max_fitbounds_zoom"),d=this.map().getZoom();d>c&&this.map().setZoom(c)}return this},BB.gmap.controller.prototype.get_all_markers=function(){var a=this.get_places_by_type("markers"),b=[];for(var c in a)b.push(a[c].object());return b},BB.gmap.controller.prototype.activate_clusterer=function(a){this.clusterer()&&this.clusterer().clearMarkers();var b=this.get_all_markers();return this.set_clusterer(new MarkerClusterer(this.map(),b)),this},BB.gmap.controller.prototype.set_clusterer=function(a){this.__CLUSTERER=a},BB.gmap.controller.prototype.clusterer=function(){return this.__CLUSTERER},BB.gmap.controller.prototype._delete=function(a,b){switch(a){case"marker":if("undefined"==typeof this.__PLACES.markers[b])return!1;delete this.__PLACES.markers[b];break;case"line":if("undefined"==typeof this.__PLACES.lines[b])return!1;delete this.__PLACES.lines[b];break;case"polygon":if("undefined"==typeof this.__PLACES.polygons[b])return!1;delete this.__PLACES.polygons[b]}},BB.gmap.controller.prototype["export"]=function(){var a=this.data();"undefined"!=typeof a.places&&delete a.places,"undefined"!=typeof a.center&&delete a.center;var b=this.map().getCenter();return a.map.center.x=b.lat(),a.map.center.y=b.lng(),a.map.zoom=this.map().getZoom(),a.places={},this._loop_all(function(b){a.places[b.ident()]=b["export"]()}),a},BB.gmap.controller.prototype.get_map_image=function(){var a=this.data();"undefined"!=typeof a.places&&delete a.places,"undefined"!=typeof a.center&&delete a.center;var b=this.map().getCenter(),c="https://maps.googleapis.com/maps/api/staticmap?",d=[];return d.push("center="+b.lat()+","+b.lng()),d.push("zoom="+this.map().getZoom()),d.push("size=640x400"),this._loop_all(function(a){if("marker"==a.data("type")){if(!a.data("icon").src)return!1;var b=new Image;b.src=a.data("icon").src;var c=a.data("icon").width+"x"+a.data("icon").height,e=a.data("coords"),f="markers=size:"+c+"|icon:"+b.src+"|"+e[0]+","+e[1];d.push(f)}if("polygon"==a.data("type")){var g=a.data("paths");if(!g)return!1;var h=[],i=a.data("styles"),j=(i.strokeColor,i.strokeWeight);i.fillColor;h.push("color:black"),h.push("weight:"+j),h.push("fillcolor:white");for(var k=0,l=g.length;l>k;k++)h.push(g[k].join(","));h.push(g[0].join(",")),d.push("path="+h.join("|"))}}),c+=d.join("&")},BB.gmap.controller.prototype.reset=function(){return this._loop_all(function(a){a.hide(),a["delete"]()}),this.set_data({places:void 0}),this.remove_focus(),this};var BB=BB||{};BB.gmap=BB.gmap||{},BB.gmap.statics=BB.gmap.statics||{},BB.gmap.infobox=function(a,b){BB.gmap.statics,this.__MAP=void 0,a instanceof jQuery&&(a=a.get(0)),this.__ELEM=a,google.maps.OverlayView.call(this),this.opts=b,this._height=a.offsetHeight,this._width=a.offsetWidth,b.offsetY=b.offsetY||0,b.offsetX=b.offsetX||0,this._offsetY=-(parseInt(this._height)-parseFloat(b.offsetY)),this._offsetX=-(parseInt(this._width/2)-parseFloat(b.offsetX)),this.__MAP=b.map;var c=this;this._bounds_changed_listener=google.maps.event.addListener(this.__MAP,"bounds_changed",function(){return c.panMap.apply(c)}),this.set_map(b.map)};var BB=BB||{};BB.gmap=BB.gmap||{},BB.gmap.object=function(a,b){return this.__OBJECT=void 0,this.__CONTROLLER=b,this.__DELETED=!1,this.set_data(a),this.init(),this.controller().loading_place(this.ident()),this},BB.gmap.object.prototype=new BB.base,BB.gmap.object.prototype.set_object=function(a){return this.__OBJECT=a,this},BB.gmap.object.prototype.object=function(){return this.__OBJECT},BB.gmap.object.prototype.controller=function(){return this.__CONTROLLER},BB.gmap.object.prototype.set_controller=function(a){return this.__CONTROLLER=a,this},BB.gmap.object.prototype.set_map=function(a){return this.object().setMap(a),this},BB.gmap.object.prototype.map_click=function(a){return this},BB.gmap.object.prototype.show=function(){var a=this.object();return"undefined"==typeof a?(this.error("No object defined at BB.gmap.object.show()"),this):(a.setMap(this.controller().map()),this)},BB.gmap.object.prototype.hide=function(){var a=this.object();return"undefined"==typeof a?(this.error("No object defined at BB.gmap.object.hide()"),this):(a.setMap(null),this)},BB.gmap.object.prototype["delete"]=function(){this.__DELETED=!0;var a=this.object();if("undefined"==typeof a)return this.error("No object defined at BB.gmap.object.delete()"),this;this.clear_listeners(),a.setMap(null);var b=this.data();return"function"==typeof b.ondelete&&b.ondelete(this),this.controller()._delete(this.data("type"),this.ident()),delete a,this},BB.gmap.object.prototype.init=function(){return this},BB.gmap.object.prototype.display=function(){return this},BB.gmap.object.prototype.focus=function(){return this},BB.gmap.object.prototype.blur=function(){return this},BB.gmap.object.prototype.get_bounds=function(){return this},BB.gmap.object.prototype.get_position=function(){return this},BB.gmap.object.prototype.clear_listeners=function(){return this},BB.gmap.object.prototype["export"]=function(){return this.data()};var BB=BB||{};BB.gmap=BB.gmap||{},BB.gmap.statics=BB.gmap.statics||{},BB.gmap.marker=function(a,b){return BB.gmap.object.call(this,a,b),this.__MEDIA=void 0,this.__ICON=void 0,this._image_loaded=!1,this._marker_loaded=!1,this.__INFOBOX=void 0,this._listeners=!1,this},BB.gmap.marker.prototype=Object.create(BB.gmap.object.prototype),BB.gmap.marker.prototype.init=function(){var a=this.data();return"string"==typeof a.icon?this.set_image(a.icon):"object"==typeof a.icon?this.set_icon(a.icon):this.display(),this},BB.gmap.marker.prototype.icon=function(){return this.__ICON?this.__ICON:new Image},BB.gmap.marker.prototype.set_icon=function(a){if("object"!=typeof a)return this.error("Invalid icon at BB.gmap.marker.prototype.set_icon( "+a+" )"),this;if(!(a instanceof Image)&&"undefined"==typeof a.path){var b;return a.width&&a.height&&(b={width:a.width,height:a.height}),this.set_image(a.src,b),this}return this.__ICON=a,this.display(),this},BB.gmap.marker.prototype.set_image=function(a,b){var c=new Image;return c.data=this,c.onload=function(){this.data.set_icon(this),this.data.display()},c.onerror=function(){this.data.set_data({icon:void 0}),this.data.display()},c.src=a,b&&(c.height=b.height,c.width=b.width),this},BB.gmap.marker.prototype.display=function(){var a=this.data();if("object"!=typeof a.coords)return this.error("Requires coordinates [lat, lng] at BB.gmap.marker.display()"),!1;var b={map:this.controller().map(),position:new google.maps.LatLng(a.coords[0],a.coords[1]),optimized:!1};b=this.extend(b,a);var c=this.icon();if(!(c instanceof Image)&&"string"==typeof c.path){var d=0,e=0;"string"==typeof c.height&&(d=parseInt(c.height)),"string"==typeof c.width&&(e=parseInt(c.width)),c.anchor=new google.maps.Point(e/2,d),b.icon=c}var f="object"==typeof a.options?a.options:{};for(var g in f)b[g]=f[g];if(this.icon().src){var e=this.icon().width,d=this.icon().height;b.icon=new google.maps.MarkerImage(this.icon().src,new google.maps.Size(e,d),new google.maps.Point(0,0),new google.maps.Point(e/2,d),new google.maps.Size(e,d))}if("undefined"!=typeof this.object())this.object().setOptions(b);else{var h=new google.maps.Marker(b);this.set_marker(h)}return this._listeners||(this.listeners(),this._listeners=!0,this.marker_loaded()),this.data("hidden")&&this.hide(),this},BB.gmap.marker.prototype.marker_loaded=function(){var a=this.data();if("function"==typeof a.loaded_callback&&a.loaded_callback(this),this.controller().data("use_clusterer")){this.controller().data("clusterer_options");this.controller().activate_clusterer({gridSize:10,maxZoom:15})}return this.controller().place_loaded(this),this},BB.gmap.marker.prototype.set_marker=function(a){return this._marker_loaded?(this.error("There is already a marker affected to this instanciation of a [BB.gmap.marker] ( "+this.ident()+" )"),this):(this._marker_loaded=!0,this.set_object(a),this)},BB.gmap.marker.prototype.listeners=function(){var a=this,b=this.object();b.bbmarker=this,this.data("draggable")&&google.maps.event.addListener(b,"dragend",a.dragend),google.maps.event.addListener(b,"click",a.onclick)},BB.gmap.marker.prototype.clear_listeners=function(){var a=this.object();return google.maps.event.clearListeners(a,"dragend"),google.maps.event.clearListeners(a,"click"),this},BB.gmap.marker.prototype.dragend=function(a){var b=this.bbmarker,c=b.data();"function"==typeof c.ondragend&&c.ondragend(b,a),b.set_data({coords:[a.latLng.lat(),a.latLng.lng()]}),b.focus()},BB.gmap.marker.prototype.onclick=function(a){var b=this.bbmarker,c=b.data();if("function"==typeof c.onclick?c.onclick(a,b):"string"==typeof c.onclick&&"function"==typeof window[c.onclick]&&window[c.onclick](b,a),c.infobox){if(b.__INFOBOX)return b.__INFOBOX.map?b.__INFOBOX.set_map(null):b.__INFOBOX.set_map(b.controller().map()),b.focus(),this;BB.gmap.statics.infobox_loaded||(init_infoBox(),BB.gmap.statics.infobox_loaded=!0),"string"==typeof c.infobox&&(c.infobox=document.getElementById(c.infobox));var d={};c.infobox_options&&(d=c.infobox_options),d.offsetY||(d.offsetY=-b.icon().height),d.offsetX||(d.offsetX=-(b.icon().width/2)),d.map=b.controller().map(),d.position=b.get_position().getAt(0).getAt(0),b.__INFOBOX=new BB.gmap.infobox(c.infobox,d)}b.focus()},BB.gmap.marker.prototype.focus=function(){var a=this;a.controller().set_focus(a);var b=this.data();b.icon_selected&&("object"==typeof b.icon_selected?this.set_icon(b.icon_selected):this.set_image(b.icon_selected))},BB.gmap.marker.prototype.blur=function(){if(!this.controller().get_place(this.ident()))return!1;var a=this.data();a.icon_selected&&("object"==typeof a.icon?this.set_icon(a.icon):this.set_image(a.icon))},BB.gmap.marker.prototype.get_bounds=function(){var a=this,b=new google.maps.LatLngBounds;return b.extend(a.object().getPosition()),b},BB.gmap.marker.prototype.get_position=function(){var a=new google.maps.MVCArray,b=new google.maps.MVCArray;return this.object()?(a.push(this.object().getPosition()),b.push(a),b):!1};var BB=BB||{};BB.gmap=BB.gmap||{},BB.gmap.line=function(a,b){return this.__STYLES=void 0,this.__PATHS=void 0,this.__MARKERS=[],BB.gmap.object.call(this,a,b),this},BB.gmap.line.prototype=Object.create(BB.gmap.object.prototype),BB.gmap.line.prototype.init=function(){var a=this.data();if("object"!=typeof a.styles&&this.set_data({styles:this.controller().data("default_styles")}),this.add_styles(a.styles),this.set_paths([]),"object"==typeof a.paths)for(var b=0,c=a.paths.length;c>b;b++)this.add_point(a.paths[b]);return this.get_paths()&&this.get_styles()&&this.display(),a.editable&&this.set_editable(a.editable),this.listeners(),this.controller().place_loaded(this),this},BB.gmap.line.prototype.redraw=function(){for(var a=this.get_paths(),b=0,c=a.length,d=[];c>b;b++)d.push([a.getAt(b).lat(),a.getAt(b).lng()]);this.set_data({paths:d})},BB.gmap.line.prototype.add_styles=function(a){this.__STYLES=a},BB.gmap.line.prototype.set_styles=function(a){return this.add_styles(a),this.display(),this},BB.gmap.line.prototype.get_styles=function(){return this.__STYLES},BB.gmap.line.prototype.set_paths=function(a){if("object"!=typeof a)return void this.error("Invalid paths at BB.gmap.line.set_paths :"+a);if(!(a[0]instanceof google.maps.LatLng)){for(var b=0,c=a.length,d=new google.maps.MVCArray;c>b&&"object"==typeof a[b];b++){var e=this.controller().translate_coords(a[b]);d.insertAt(d.length,e)}a=d}this.__PATHS=a},BB.gmap.line.prototype.get_paths=function(){return this.__PATHS},BB.gmap.line.prototype.display=function(){var a=(this.data(),this.get_styles());"undefined"==typeof a&&this.error("Undefined styles at BB.gmap.line.display : "+a);var b=this.get_paths();if("undefined"==typeof b&&this.error("Undefined paths at BB.gmap.line.display : "+b),a.path=b,"undefined"!=typeof this.object())this.object().setOptions(a);else{var c=new google.maps.Polyline(a);this.set_object(c)}return this.set_map(this.controller().map()),this.update_coords(),this},BB.gmap.line.prototype.refresh=function(){var a=this.data("_opts"),b=this.object();b.setOptions(a)},BB.gmap.line.prototype.add_point=function(a,b){if("object"!=typeof a)return!1;if(a instanceof google.maps.LatLng||(a=this.controller().translate_coords(a)),!(a instanceof google.maps.LatLng||"undefined"!=typeof a[0]&&"undefined"!=typeof a[1]))return!1;var c=this,d=this.get_paths();"undefined"==typeof d&&this.set_paths([[a.lat(),a.lng()]]),d=this.get_paths(),"number"!=typeof b&&(b=d.length),d.insertAt(b,a);var e=new BB.gmap.marker({coords:[a.lat(),a.lng()],draggable:!0,icon:{path:google.maps.SymbolPath.CIRCLE,scale:4},hidden:!this.data("editable"),editable:!0,ondragend:function(a,b){c.move_point(a.object().index,[b.latLng.lat(),b.latLng.lng()])},ondelete:function(a){c.remove_point(a.object().index),c.focus(),c.get_paths().length||c["delete"]()},index:b},c.controller());return this.__MARKERS||(this.__MARKERS=[]),this.__MARKERS[b]=e,this},BB.gmap.line.prototype.move_point=function(a,b){var c=this.get_paths();if("object"!=typeof c)return this.error("You can not move a point when no path is given at BB.gmap.line.move_point( index, path )"),!1;if(!b)return this.error("Required arguments index:integer and path:object at BB.gmap.line.move_point( index, path )"),!1;if(b instanceof google.maps.LatLng||(b=this.controller().translate_coords(b)),!(b instanceof google.maps.LatLng||"undefined"!=typeof b[0]&&"undefined"!=typeof b[1]))return!1;return c.setAt(a,b),this.update_coords(),this},BB.gmap.line.prototype.remove_point=function(a){var b=this.get_paths();if("object"!=typeof b)return this.error("You can not move a point when no path is given at BB.gmap.line.remove_point( index, path )"),!1;b.removeAt(a),"undefined"!=typeof this.__MARKERS[a]&&(this.__MARKERS[a].hide(),this.__MARKERS.splice(a,1));var c=this.__MARKERS;for(var d in c)c[d].object().index=parseInt(d);return this.redraw(),this.update_coords(),this},BB.gmap.line.prototype.set_editable=function(a){return a?(this.set_data({editable:!0}),this.show_markers(),this.focus(),this):(this.set_data({editable:!1}),this.hide_markers(),this)},BB.gmap.line.prototype.show_markers=function(){for(var a=0;a<this.__MARKERS.length;a++)this.__MARKERS[a].show();return this},BB.gmap.line.prototype.hide_markers=function(){for(var a=(this.controller().focused(),0);a<this.__MARKERS.length;a++)this.__MARKERS[a].hide();return this},BB.gmap.line.prototype.map_click=function(a){this.add_point(a.latLng)},BB.gmap.line.prototype.set_draggable=function(a){var b=this.get_styles();return a?b.draggable=!0:b.draggable=!1,this.set_styles(b),this},BB.gmap.line.prototype.listeners=function(){var a=this;a.object().bbobject=a,this.clear_listeners(),google.maps.event.addListener(a.object(),"mouseover",a.mouse_over),google.maps.event.addListener(a.object(),"mouseout",a.mouse_out),google.maps.event.addListener(a.object(),"click",a.click)},BB.gmap.line.prototype.clear_listeners=function(){var a=this;return google.maps.event.clearListeners(a.object(),"mouseover"),google.maps.event.clearListeners(a.object(),"mouseout"),google.maps.event.clearListeners(a.object(),"click"),this},BB.gmap.line.prototype.mouse_over=function(a){var b=this.bbobject,c=b.data();"function"==typeof c.onmouseover&&c.onmouseover(b,a);var d=b.get_styles();"object"==typeof d.hover&&b.set_styles(d.hover)},BB.gmap.line.prototype.mouse_out=function(a){var b=this.bbobject,c=b.data();"function"==typeof c.onmouseout&&c.onmouseout(b,a);var d=b.controller().focused();if(d==b)return!1;b.get_data("styles");b.set_styles(b.get_data("styles"))},BB.gmap.line.prototype.mouse_down=function(a){this.bbobject},BB.gmap.line.prototype.mouse_up=function(a){this.bbobject},BB.gmap.line.prototype.click=function(a){var b=this.bbobject,c=b.data();"function"==typeof c.onclick?c.onclick(b,a):"string"==typeof c.onclick&&"function"==typeof window[c.onclick]&&window[c.onclick](b,a),b.focus()},BB.gmap.line.prototype.focus=function(){if(this.__DELETED)return!1;var a=this.get_data("styles");return"object"==typeof a.focused&&this.set_styles(a.focused),this.controller().set_focus(this),this.data("editable")&&this.show_markers(),this},BB.gmap.line.prototype.blur=function(){return this.__DELETED?!1:(this.set_styles(this.get_data("styles")),this)},BB.gmap.line.prototype.get_bounds=function(){for(var a,b=this,c=new google.maps.LatLngBounds,d=b.object().getPaths(),e=0;e<d.getLength();e++){a=d.getAt(e);for(var f=0;f<a.getLength();f++)c.extend(a.getAt(f))}return c},BB.gmap.line.prototype.get_position=function(){var a=new google.maps.MVCArray;return a.push(this.object().getPath()),a},BB.gmap.line.prototype.update_coords=function(){var a=this.get_paths(),b=[];return a.forEach(function(a){b.push([a.lat(),a.lng()])}),this.set_data({paths:b}),this},BB.gmap.line.prototype["export"]=function(){this.update_coords();var a=this.data();return"undefined"!=typeof a.styles.path&&delete a.styles.path,this.data()},BB.gmap.line.prototype["delete"]=function(){var a=0,b=this.__MARKERS.length;if(b)for(;b>a;a++)this.remove_point(a);this.hide_markers(),BB.gmap.object.prototype["delete"].call(this)};var BB=BB||{};BB.gmap=BB.gmap||{},BB.gmap.polygon=function(a,b){return BB.gmap.line.call(this,a,b),this},BB.gmap.polygon.prototype=Object.create(BB.gmap.line.prototype),BB.gmap.polygon.prototype.display=function(){var a=(this.data(),this.get_styles());"undefined"==typeof a&&this.error("Undefined styles at BB.gmap.polygon.display : "+a);var b=this.get_paths();if("undefined"==typeof b&&this.error("Undefined paths at BB.gmap.polygon.display : "+b),"undefined"!=typeof this.object())this.object().setOptions(a);else{var c=new google.maps.Polygon(a);this.set_object(c)}return this.object().setPaths(new google.maps.MVCArray([b])),this.set_map(this.controller().map()),this.listeners(),this},BB.gmap.polygon.prototype.get_position=function(){return this.object().getPaths()},function(){function a(a){return function(b){this[a]=b}}function b(a){return function(){return this[a]}}function c(a,b,e){this.extend(c,google.maps.OverlayView),this.c=a,this.a=[],this.f=[],this.ca=[53,56,66,78,90],this.j=[],this.A=!1,e=e||{},this.g=e.gridSize||60,this.l=e.minimumClusterSize||2,this.J=e.maxZoom||o,this.j=e.styles||[],this.X=e.imagePath||this.Q,this.W=e.imageExtension||this.P,this.O=!0,void 0!=e.zoomOnClick&&(this.O=e.zoomOnClick),this.r=!1,void 0!=e.averageCenter&&(this.r=e.averageCenter),d(this),this.setMap(a),this.K=this.c.getZoom();var f=this;google.maps.event.addListener(this.c,"zoom_changed",function(){var a=f.c.getZoom();f.K!=a&&(f.K=a,f.m())}),google.maps.event.addListener(this.c,"idle",function(){f.i()}),b&&b.length&&this.C(b,!1)}function d(a){if(!a.j.length)for(var b,c=0;b=a.ca[c];c++)a.j.push({url:a.X+(c+1)+"."+a.W,height:b,width:b})}function e(a,b){b.s=!1,b.draggable&&google.maps.event.addListener(b,"dragend",function(){b.s=!1,a.L()}),a.a.push(b)}function f(a,b){var c=-1;if(a.a.indexOf)c=a.a.indexOf(b);else for(var d,e=0;d=a.a[e];e++)if(d==b){c=e;break}return-1==c?!1:(b.setMap(o),a.a.splice(c,1),!0)}function g(a){if(a.A)for(var b,c=a.v(new google.maps.LatLngBounds(a.c.getBounds().getSouthWest(),a.c.getBounds().getNorthEast())),d=0;b=a.a[d];d++)if(!b.s&&c.contains(b.getPosition())){for(var e=a,f=4e4,g=o,i=0,j=void 0;j=e.f[i];i++){var k=j.getCenter();if(k){var l=b.getPosition();if(k&&l)var m=(l.lat()-k.lat())*Math.PI/180,n=(l.lng()-k.lng())*Math.PI/180,k=Math.sin(m/2)*Math.sin(m/2)+Math.cos(k.lat()*Math.PI/180)*Math.cos(l.lat()*Math.PI/180)*Math.sin(n/2)*Math.sin(n/2),k=12742*Math.atan2(Math.sqrt(k),Math.sqrt(1-k));else k=0;f>k&&(f=k,g=j)}}g&&g.F.contains(b.getPosition())?g.q(b):(j=new h(e),j.q(b),e.f.push(j))}}function h(a){this.k=a,this.c=a.getMap(),this.g=a.w(),this.l=a.l,this.r=a.r,this.d=o,this.a=[],this.F=o,this.n=new j(this,a.z(),a.w())}function i(a){a.F=a.k.v(new google.maps.LatLngBounds(a.d,a.d))}function j(a,b,c){a.k.extend(j,google.maps.OverlayView),this.j=b,this.fa=c||0,this.u=a,this.d=o,this.c=a.getMap(),this.B=this.b=o,this.t=!1,this.setMap(this.c)}function k(a,b){var c=a.getProjection().fromLatLngToDivPixel(b);return c.x-=parseInt(a.p/2,10),c.y-=parseInt(a.h/2,10),c}function l(a){a.b&&(a.b.style.display="none"),a.t=!1}function m(a,b){var c=[];return c.push("background-image:url("+a.da+");"),
c.push("background-position:"+(a.D?a.D:"0 0")+";"),"object"==typeof a.e?("number"==typeof a.e[0]&&a.e[0]>0&&a.e[0]<a.h?c.push("height:"+(a.h-a.e[0])+"px; padding-top:"+a.e[0]+"px;"):c.push("height:"+a.h+"px; line-height:"+a.h+"px;"),"number"==typeof a.e[1]&&a.e[1]>0&&a.e[1]<a.p?c.push("width:"+(a.p-a.e[1])+"px; padding-left:"+a.e[1]+"px;"):c.push("width:"+a.p+"px; text-align:center;")):c.push("height:"+a.h+"px; line-height:"+a.h+"px; width:"+a.p+"px; text-align:center;"),c.push("cursor:pointer; top:"+b.y+"px; left:"+b.x+"px; color:"+(a.M?a.M:"black")+"; position:absolute; font-size:"+(a.N?a.N:11)+"px; font-family:Arial,sans-serif; font-weight:bold"),c.join("")}var n,o=null;n=c.prototype,n.Q="https://raw.githubusercontent.com/googlemaps/js-marker-clusterer/gh-pages/images/m",n.P="png",n.extend=function(a,b){return function(a){for(var b in a.prototype)this.prototype[b]=a.prototype[b];return this}.apply(a,[b])},n.onAdd=function(){this.A||(this.A=!0,g(this))},n.draw=function(){},n.S=function(){for(var a,b=this.o(),c=new google.maps.LatLngBounds,d=0;a=b[d];d++)c.extend(a.getPosition());this.c.fitBounds(c)},n.z=b("j"),n.o=b("a"),n.V=function(){return this.a.length},n.ba=a("J"),n.I=b("J"),n.G=function(a,b){for(var c=0,d=a.length,e=d;0!==e;)e=parseInt(e/10,10),c++;return c=Math.min(c,b),{text:d,index:c}},n.$=a("G"),n.H=b("G"),n.C=function(a,b){for(var c,d=0;c=a[d];d++)e(this,c);b||this.i()},n.q=function(a,b){e(this,a),b||this.i()},n.Y=function(a,b){var c=f(this,a);return!b&&c?(this.m(),this.i(),!0):!1},n.Z=function(a,b){for(var c,d=!1,e=0;c=a[e];e++)c=f(this,c),d=d||c;return!b&&d?(this.m(),this.i(),!0):void 0},n.U=function(){return this.f.length},n.getMap=b("c"),n.setMap=a("c"),n.w=b("g"),n.aa=a("g"),n.v=function(a){var b=this.getProjection(),c=new google.maps.LatLng(a.getNorthEast().lat(),a.getNorthEast().lng()),d=new google.maps.LatLng(a.getSouthWest().lat(),a.getSouthWest().lng()),c=b.fromLatLngToDivPixel(c);return c.x+=this.g,c.y-=this.g,d=b.fromLatLngToDivPixel(d),d.x-=this.g,d.y+=this.g,c=b.fromDivPixelToLatLng(c),b=b.fromDivPixelToLatLng(d),a.extend(c),a.extend(b),a},n.R=function(){this.m(!0),this.a=[]},n.m=function(a){for(var b,c=0;b=this.f[c];c++)b.remove();for(c=0;b=this.a[c];c++)b.s=!1,a&&b.setMap(o);this.f=[]},n.L=function(){var a=this.f.slice();this.f.length=0,this.m(),this.i(),window.setTimeout(function(){for(var b,c=0;b=a[c];c++)b.remove()},0)},n.i=function(){g(this)},n=h.prototype,n.q=function(a){var b;a:if(this.a.indexOf)b=-1!=this.a.indexOf(a);else{b=0;for(var c;c=this.a[b];b++)if(c==a){b=!0;break a}b=!1}if(b)return!1;if(this.d?this.r&&(c=this.a.length+1,b=(this.d.lat()*(c-1)+a.getPosition().lat())/c,c=(this.d.lng()*(c-1)+a.getPosition().lng())/c,this.d=new google.maps.LatLng(b,c),i(this)):(this.d=a.getPosition(),i(this)),a.s=!0,this.a.push(a),b=this.a.length,b<this.l&&a.getMap()!=this.c&&a.setMap(this.c),b==this.l)for(c=0;b>c;c++)this.a[c].setMap(o);if(b>=this.l&&a.setMap(o),a=this.c.getZoom(),(b=this.k.I())&&a>b)for(a=0;b=this.a[a];a++)b.setMap(this.c);else this.a.length<this.l?l(this.n):(b=this.k.H()(this.a,this.k.z().length),this.n.setCenter(this.d),a=this.n,a.B=b,a.ga=b.text,a.ea=b.index,a.b&&(a.b.innerHTML=b.text),b=Math.max(0,a.B.index-1),b=Math.min(a.j.length-1,b),b=a.j[b],a.da=b.url,a.h=b.height,a.p=b.width,a.M=b.textColor,a.e=b.anchor,a.N=b.textSize,a.D=b.backgroundPosition,this.n.show());return!0},n.getBounds=function(){for(var a,b=new google.maps.LatLngBounds(this.d,this.d),c=this.o(),d=0;a=c[d];d++)b.extend(a.getPosition());return b},n.remove=function(){this.n.remove(),this.a.length=0,delete this.a},n.T=function(){return this.a.length},n.o=b("a"),n.getCenter=b("d"),n.getMap=b("c"),n=j.prototype,n.onAdd=function(){this.b=document.createElement("DIV"),this.t&&(this.b.style.cssText=m(this,k(this,this.d)),this.b.innerHTML=this.B.text),this.getPanes().overlayMouseTarget.appendChild(this.b);var a=this;google.maps.event.addDomListener(this.b,"click",function(){var b=a.u.k;google.maps.event.trigger(b,"clusterclick",a.u),b.O&&a.c.fitBounds(a.u.getBounds())})},n.draw=function(){if(this.t){var a=k(this,this.d);this.b.style.top=a.y+"px",this.b.style.left=a.x+"px"}},n.show=function(){this.b&&(this.b.style.cssText=m(this,k(this,this.d)),this.b.style.display=""),this.t=!0},n.remove=function(){this.setMap(o)},n.onRemove=function(){this.b&&this.b.parentNode&&(l(this),this.b.parentNode.removeChild(this.b),this.b=o)},n.setCenter=a("d"),window.MarkerClusterer=c,c.prototype.addMarker=c.prototype.q,c.prototype.addMarkers=c.prototype.C,c.prototype.clearMarkers=c.prototype.R,c.prototype.fitMapToMarkers=c.prototype.S,c.prototype.getCalculator=c.prototype.H,c.prototype.getGridSize=c.prototype.w,c.prototype.getExtendedBounds=c.prototype.v,c.prototype.getMap=c.prototype.getMap,c.prototype.getMarkers=c.prototype.o,c.prototype.getMaxZoom=c.prototype.I,c.prototype.getStyles=c.prototype.z,c.prototype.getTotalClusters=c.prototype.U,c.prototype.getTotalMarkers=c.prototype.V,c.prototype.redraw=c.prototype.i,c.prototype.removeMarker=c.prototype.Y,c.prototype.removeMarkers=c.prototype.Z,c.prototype.resetViewport=c.prototype.m,c.prototype.repaint=c.prototype.L,c.prototype.setCalculator=c.prototype.$,c.prototype.setGridSize=c.prototype.aa,c.prototype.setMaxZoom=c.prototype.ba,c.prototype.onAdd=c.prototype.onAdd,c.prototype.draw=c.prototype.draw,h.prototype.getCenter=h.prototype.getCenter,h.prototype.getSize=h.prototype.T,h.prototype.getMarkers=h.prototype.o,j.prototype.onAdd=j.prototype.onAdd,j.prototype.draw=j.prototype.draw,j.prototype.onRemove=j.prototype.onRemove}();
;/*!
 * Bootstrap-select v1.11.2 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2016 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery"], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
}(this, function (jQuery) {

(function ($) {
  'use strict';

  //<editor-fold desc="Shims">
  if (!String.prototype.includes) {
    (function () {
      'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
      var toString = {}.toString;
      var defineProperty = (function () {
        // IE 8 only supports `Object.defineProperty` on DOM elements
        try {
          var object = {};
          var $defineProperty = Object.defineProperty;
          var result = $defineProperty(object, object, object) && $defineProperty;
        } catch (error) {
        }
        return result;
      }());
      var indexOf = ''.indexOf;
      var includes = function (search) {
        if (this == null) {
          throw new TypeError();
        }
        var string = String(this);
        if (search && toString.call(search) == '[object RegExp]') {
          throw new TypeError();
        }
        var stringLength = string.length;
        var searchString = String(search);
        var searchLength = searchString.length;
        var position = arguments.length > 1 ? arguments[1] : undefined;
        // `ToInteger`
        var pos = position ? Number(position) : 0;
        if (pos != pos) { // better `isNaN`
          pos = 0;
        }
        var start = Math.min(Math.max(pos, 0), stringLength);
        // Avoid the `indexOf` call if no match is possible
        if (searchLength + start > stringLength) {
          return false;
        }
        return indexOf.call(string, searchString, pos) != -1;
      };
      if (defineProperty) {
        defineProperty(String.prototype, 'includes', {
          'value': includes,
          'configurable': true,
          'writable': true
        });
      } else {
        String.prototype.includes = includes;
      }
    }());
  }

  if (!String.prototype.startsWith) {
    (function () {
      'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
      var defineProperty = (function () {
        // IE 8 only supports `Object.defineProperty` on DOM elements
        try {
          var object = {};
          var $defineProperty = Object.defineProperty;
          var result = $defineProperty(object, object, object) && $defineProperty;
        } catch (error) {
        }
        return result;
      }());
      var toString = {}.toString;
      var startsWith = function (search) {
        if (this == null) {
          throw new TypeError();
        }
        var string = String(this);
        if (search && toString.call(search) == '[object RegExp]') {
          throw new TypeError();
        }
        var stringLength = string.length;
        var searchString = String(search);
        var searchLength = searchString.length;
        var position = arguments.length > 1 ? arguments[1] : undefined;
        // `ToInteger`
        var pos = position ? Number(position) : 0;
        if (pos != pos) { // better `isNaN`
          pos = 0;
        }
        var start = Math.min(Math.max(pos, 0), stringLength);
        // Avoid the `indexOf` call if no match is possible
        if (searchLength + start > stringLength) {
          return false;
        }
        var index = -1;
        while (++index < searchLength) {
          if (string.charCodeAt(start + index) != searchString.charCodeAt(index)) {
            return false;
          }
        }
        return true;
      };
      if (defineProperty) {
        defineProperty(String.prototype, 'startsWith', {
          'value': startsWith,
          'configurable': true,
          'writable': true
        });
      } else {
        String.prototype.startsWith = startsWith;
      }
    }());
  }

  if (!Object.keys) {
    Object.keys = function (
      o, // object
      k, // key
      r  // result array
      ){
      // initialize object and result
      r=[];
      // iterate over object keys
      for (k in o)
          // fill result array with non-prototypical keys
        r.hasOwnProperty.call(o, k) && r.push(k);
      // return result
      return r;
    };
  }

  // set data-selected on select element if the value has been programmatically selected
  // prior to initialization of bootstrap-select
  // * consider removing or replacing an alternative method *
  var valHooks = {
    useDefault: false,
    _set: $.valHooks.select.set
  };

  $.valHooks.select.set = function(elem, value) {
    if (value && !valHooks.useDefault) $(elem).data('selected', true);

    return valHooks._set.apply(this, arguments);
  };

  var changed_arguments = null;
  $.fn.triggerNative = function (eventName) {
    var el = this[0],
        event;

    if (el.dispatchEvent) { // for modern browsers & IE9+
      if (typeof Event === 'function') {
        // For modern browsers
        event = new Event(eventName, {
          bubbles: true
        });
      } else {
        // For IE since it doesn't support Event constructor
        event = document.createEvent('Event');
        event.initEvent(eventName, true, false);
      }

      el.dispatchEvent(event);
    } else if (el.fireEvent) { // for IE8
      event = document.createEventObject();
      event.eventType = eventName;
      el.fireEvent('on' + eventName, event);
    } else {
      // fall back to jQuery.trigger
      this.trigger(eventName);
    }
  };
  //</editor-fold>

  // Case insensitive contains search
  $.expr.pseudos.icontains = function (obj, index, meta) {
    var $obj = $(obj);
    var haystack = ($obj.data('tokens') || $obj.text()).toString().toUpperCase();
    return haystack.includes(meta[3].toUpperCase());
  };

  // Case insensitive begins search
  $.expr.pseudos.ibegins = function (obj, index, meta) {
    var $obj = $(obj);
    var haystack = ($obj.data('tokens') || $obj.text()).toString().toUpperCase();
    return haystack.startsWith(meta[3].toUpperCase());
  };

  // Case and accent insensitive contains search
  $.expr.pseudos.aicontains = function (obj, index, meta) {
    var $obj = $(obj);
    var haystack = ($obj.data('tokens') || $obj.data('normalizedText') || $obj.text()).toString().toUpperCase();
    return haystack.includes(meta[3].toUpperCase());
  };

  // Case and accent insensitive begins search
  $.expr.pseudos.aibegins = function (obj, index, meta) {
    var $obj = $(obj);
    var haystack = ($obj.data('tokens') || $obj.data('normalizedText') || $obj.text()).toString().toUpperCase();
    return haystack.startsWith(meta[3].toUpperCase());
  };

  /**
   * Remove all diatrics from the given text.
   * @access private
   * @param {String} text
   * @returns {String}
   */
  function normalizeToBase(text) {
    var rExps = [
      {re: /[\xC0-\xC6]/g, ch: "A"},
      {re: /[\xE0-\xE6]/g, ch: "a"},
      {re: /[\xC8-\xCB]/g, ch: "E"},
      {re: /[\xE8-\xEB]/g, ch: "e"},
      {re: /[\xCC-\xCF]/g, ch: "I"},
      {re: /[\xEC-\xEF]/g, ch: "i"},
      {re: /[\xD2-\xD6]/g, ch: "O"},
      {re: /[\xF2-\xF6]/g, ch: "o"},
      {re: /[\xD9-\xDC]/g, ch: "U"},
      {re: /[\xF9-\xFC]/g, ch: "u"},
      {re: /[\xC7-\xE7]/g, ch: "c"},
      {re: /[\xD1]/g, ch: "N"},
      {re: /[\xF1]/g, ch: "n"}
    ];
    $.each(rExps, function () {
      text = text.replace(this.re, this.ch);
    });
    return text;
  }


  function htmlEscape(html) {
    var escapeMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '`': '&#x60;'
    };
    var source = '(?:' + Object.keys(escapeMap).join('|') + ')',
        testRegexp = new RegExp(source),
        replaceRegexp = new RegExp(source, 'g'),
        string = html == null ? '' : '' + html;
    return testRegexp.test(string) ? string.replace(replaceRegexp, function (match) {
      return escapeMap[match];
    }) : string;
  }

  var Selectpicker = function (element, options, e) {
    // bootstrap-select has been initialized - revert valHooks.select.set back to its original function
    if (!valHooks.useDefault) {
      $.valHooks.select.set = valHooks._set;
      valHooks.useDefault = true;
    }

    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    this.$element = $(element);
    this.$newElement = null;
    this.$button = null;
    this.$menu = null;
    this.$lis = null;
    this.options = options;

    // If we have no title yet, try to pull it from the html title attribute (jQuery doesnt' pick it up as it's not a
    // data-attribute)
    if (this.options.title === null) {
      this.options.title = this.$element.attr('title');
    }

    //Expose public methods
    this.val = Selectpicker.prototype.val;
    this.render = Selectpicker.prototype.render;
    this.refresh = Selectpicker.prototype.refresh;
    this.setStyle = Selectpicker.prototype.setStyle;
    this.selectAll = Selectpicker.prototype.selectAll;
    this.deselectAll = Selectpicker.prototype.deselectAll;
    this.destroy = Selectpicker.prototype.destroy;
    this.remove = Selectpicker.prototype.remove;
    this.show = Selectpicker.prototype.show;
    this.hide = Selectpicker.prototype.hide;

    this.init();
  };

  Selectpicker.VERSION = '1.11.2';

  // part of this is duplicated in i18n/defaults-en_US.js. Make sure to update both.
  Selectpicker.DEFAULTS = {
    noneSelectedText: 'Nothing selected',
    noneResultsText: 'No results matched {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? "{0} item selected" : "{0} items selected";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'Limit reached ({n} item max)' : 'Limit reached ({n} items max)',
        (numGroup == 1) ? 'Group limit reached ({n} item max)' : 'Group limit reached ({n} items max)'
      ];
    },
    selectAllText: 'Select All',
    deselectAllText: 'Deselect All',
    doneButton: false,
    doneButtonText: 'Close',
    multipleSeparator: ', ',
    styleBase: 'btn',
    style: 'btn-default',
    size: 'auto',
    title: null,
    selectedTextFormat: 'values',
    width: false,
    container: false,
    hideDisabled: false,
    showSubtext: false,
    showIcon: true,
    showContent: true,
    dropupAuto: true,
    header: false,
    liveSearch: false,
    liveSearchPlaceholder: null,
    liveSearchNormalize: false,
    liveSearchStyle: 'contains',
    actionsBox: false,
    iconBase: 'glyphicon',
    tickIcon: 'glyphicon-ok',
    showTick: false,
    template: {
      caret: '<span class="caret"></span>'
    },
    maxOptions: false,
    mobile: false,
    selectOnTab: false,
    dropdownAlignRight: false
  };

  Selectpicker.prototype = {

    constructor: Selectpicker,

    init: function () {
      var that = this,
          id = this.$element.attr('id');

      this.$element.addClass('bs-select-hidden');

      // store originalIndex (key) and newIndex (value) in this.liObj for fast accessibility
      // allows us to do this.$lis.eq(that.liObj[index]) instead of this.$lis.filter('[data-original-index="' + index + '"]')
      this.liObj = {};
      this.multiple = this.$element.prop('multiple');
      this.autofocus = this.$element.prop('autofocus');
      this.$newElement = this.createView();
      this.$element
        .after(this.$newElement)
        .appendTo(this.$newElement);
      this.$button = this.$newElement.children('button');
      this.$menu = this.$newElement.children('.dropdown-menu');
      this.$menuInner = this.$menu.children('.inner');
      this.$searchbox = this.$menu.find('input');

      this.$element.removeClass('bs-select-hidden');

      if (this.options.dropdownAlignRight === true) this.$menu.addClass('dropdown-menu-right');

      if (typeof id !== 'undefined') {
        this.$button.attr('data-id', id);
        $('label[for="' + id + '"]').click(function (e) {
          e.preventDefault();
          that.$button.focus();
        });
      }

      this.checkDisabled();
      this.clickListener();
      if (this.options.liveSearch) this.liveSearchListener();
      this.render();
      this.setStyle();
      this.setWidth();
      if (this.options.container) this.selectPosition();
      this.$menu.data('this', this);
      this.$newElement.data('this', this);
      if (this.options.mobile) this.mobile();

      this.$newElement.on({
        'hide.bs.dropdown': function (e) {
          that.$menuInner.attr('aria-expanded', false);
          that.$element.trigger('hide.bs.select', e);
        },
        'hidden.bs.dropdown': function (e) {
          that.$element.trigger('hidden.bs.select', e);
        },
        'show.bs.dropdown': function (e) {
          that.$menuInner.attr('aria-expanded', true);
          that.$element.trigger('show.bs.select', e);
        },
        'shown.bs.dropdown': function (e) {
          that.$element.trigger('shown.bs.select', e);
        }
      });

      if (that.$element[0].hasAttribute('required')) {
        this.$element.on('invalid', function () {
          that.$button
            .addClass('bs-invalid')
            .focus();

          that.$element.on({
            'focus.bs.select': function () {
              that.$button.focus();
              that.$element.off('focus.bs.select');
            },
            'shown.bs.select': function () {
              that.$element
                .val(that.$element.val()) // set the value to hide the validation message in Chrome when menu is opened
                .off('shown.bs.select');
            },
            'rendered.bs.select': function () {
              // if select is no longer invalid, remove the bs-invalid class
              if (this.validity.valid) that.$button.removeClass('bs-invalid');
              that.$element.off('rendered.bs.select');
            }
          });
        });
      }

      setTimeout(function () {
        that.$element.trigger('loaded.bs.select');
      });
    },

    createDropdown: function () {
      // Options
      // If we are multiple or showTick option is set, then add the show-tick class
      var showTick = (this.multiple || this.options.showTick) ? ' show-tick' : '',
          inputGroup = this.$element.parent().hasClass('input-group') ? ' input-group-btn' : '',
          autofocus = this.autofocus ? ' autofocus' : '';
      // Elements
      var header = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + '</div>' : '';
      var searchbox = this.options.liveSearch ?
      '<div class="bs-searchbox">' +
      '<input type="text" class="form-control" autocomplete="off"' +
      (null === this.options.liveSearchPlaceholder ? '' : ' placeholder="' + htmlEscape(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search">' +
      '</div>'
          : '';
      var actionsbox = this.multiple && this.options.actionsBox ?
      '<div class="bs-actionsbox">' +
      '<div class="btn-group btn-group-sm btn-block">' +
      '<button type="button" class="actions-btn bs-select-all btn btn-default">' +
      this.options.selectAllText +
      '</button>' +
      '<button type="button" class="actions-btn bs-deselect-all btn btn-default">' +
      this.options.deselectAllText +
      '</button>' +
      '</div>' +
      '</div>'
          : '';
      var donebutton = this.multiple && this.options.doneButton ?
      '<div class="bs-donebutton">' +
      '<div class="btn-group btn-block">' +
      '<button type="button" class="btn btn-sm btn-default">' +
      this.options.doneButtonText +
      '</button>' +
      '</div>' +
      '</div>'
          : '';
      var drop =
          '<div class="btn-group bootstrap-select' + showTick + inputGroup + '">' +
          '<button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + autofocus + ' role="button">' +
          '<span class="filter-option pull-left"></span>&nbsp;' +
          '<span class="bs-caret">' +
          this.options.template.caret +
          '</span>' +
          '</button>' +
          '<div class="dropdown-menu open" role="combobox">' +
          header +
          searchbox +
          actionsbox +
          '<ul class="dropdown-menu inner" role="listbox" aria-expanded="false">' +
          '</ul>' +
          donebutton +
          '</div>' +
          '</div>';

      return $(drop);
    },

    createView: function () {
      var $drop = this.createDropdown(),
          li = this.createLi();

      $drop.find('ul')[0].innerHTML = li;
      return $drop;
    },

    reloadLi: function () {
      //Remove all children.
      this.destroyLi();
      //Re build
      var li = this.createLi();
      this.$menuInner[0].innerHTML = li;
    },

    destroyLi: function () {
      this.$menu.find('li').remove();
    },

    createLi: function () {
      var that = this,
          _li = [],
          optID = 0,
          titleOption = document.createElement('option'),
          liIndex = -1; // increment liIndex whenever a new <li> element is created to ensure liObj is correct

      // Helper functions
      /**
       * @param content
       * @param [index]
       * @param [classes]
       * @param [optgroup]
       * @returns {string}
       */
      var generateLI = function (content, index, classes, optgroup) {
        return '<li' +
            ((typeof classes !== 'undefined' & '' !== classes) ? ' class="' + classes + '"' : '') +
            ((typeof index !== 'undefined' & null !== index) ? ' data-original-index="' + index + '"' : '') +
            ((typeof optgroup !== 'undefined' & null !== optgroup) ? 'data-optgroup="' + optgroup + '"' : '') +
            '>' + content + '</li>';
      };

      /**
       * @param text
       * @param [classes]
       * @param [inline]
       * @param [tokens]
       * @returns {string}
       */
      var generateA = function (text, classes, inline, tokens) {
        return '<a tabindex="0"' +
            (typeof classes !== 'undefined' ? ' class="' + classes + '"' : '') +
            (typeof inline !== 'undefined' ? ' style="' + inline + '"' : '') +
            (that.options.liveSearchNormalize ? ' data-normalized-text="' + normalizeToBase(htmlEscape(text)) + '"' : '') +
            (typeof tokens !== 'undefined' || tokens !== null ? ' data-tokens="' + tokens + '"' : '') +
            ' role="option">' + text +
            '<span class="' + that.options.iconBase + ' ' + that.options.tickIcon + ' check-mark"></span>' +
            '</a>';
      };

      if (this.options.title && !this.multiple) {
        // this option doesn't create a new <li> element, but does add a new option, so liIndex is decreased
        // since liObj is recalculated on every refresh, liIndex needs to be decreased even if the titleOption is already appended
        liIndex--;

        if (!this.$element.find('.bs-title-option').length) {
          // Use native JS to prepend option (faster)
          var element = this.$element[0];
          titleOption.className = 'bs-title-option';
          titleOption.appendChild(document.createTextNode(this.options.title));
          titleOption.value = '';
          element.insertBefore(titleOption, element.firstChild);
          // Check if selected or data-selected attribute is already set on an option. If not, select the titleOption option.
          // the selected item may have been changed by user or programmatically before the bootstrap select plugin runs,
          // if so, the select will have the data-selected attribute
          var $opt = $(element.options[element.selectedIndex]);
          if ($opt.attr('selected') === undefined && this.$element.data('selected') === undefined) {
            titleOption.selected = true;
          }
        }
      }

      this.$element.find('option').each(function (index) {
        var $this = $(this);

        liIndex++;

        if ($this.hasClass('bs-title-option')) return;

        // Get the class and text for the option
        var optionClass = this.className || '',
            inline = this.style.cssText,
            text = $this.data('content') ? $this.data('content') : $this.html(),
            tokens = $this.data('tokens') ? $this.data('tokens') : null,
            subtext = typeof $this.data('subtext') !== 'undefined' ? '<small class="text-muted">' + $this.data('subtext') + '</small>' : '',
            icon = typeof $this.data('icon') !== 'undefined' ? '<span class="' + that.options.iconBase + ' ' + $this.data('icon') + '"></span> ' : '',
            $parent = $this.parent(),
            isOptgroup = $parent[0].tagName === 'OPTGROUP',
            isOptgroupDisabled = isOptgroup && $parent[0].disabled,
            isDisabled = this.disabled || isOptgroupDisabled;

        if (icon !== '' && isDisabled) {
          icon = '<span>' + icon + '</span>';
        }

        if (that.options.hideDisabled && (isDisabled && !isOptgroup || isOptgroupDisabled)) {
          liIndex--;
          return;
        }

        if (!$this.data('content')) {
          // Prepend any icon and append any subtext to the main text.
          text = icon + '<span class="text">' + text + subtext + '</span>';
        }

        if (isOptgroup && $this.data('divider') !== true) {
          if (that.options.hideDisabled && isDisabled) {
            if ($parent.data('allOptionsDisabled') === undefined) {
              var $options = $parent.children();
              $parent.data('allOptionsDisabled', $options.filter(':disabled').length === $options.length);
            }

            if ($parent.data('allOptionsDisabled')) {
              liIndex--;
              return;
            }
          }

          var optGroupClass = ' ' + $parent[0].className || '';

          if ($this.index() === 0) { // Is it the first option of the optgroup?
            optID += 1;

            // Get the opt group label
            var label = $parent[0].label,
                labelSubtext = typeof $parent.data('subtext') !== 'undefined' ? '<small class="text-muted">' + $parent.data('subtext') + '</small>' : '',
                labelIcon = $parent.data('icon') ? '<span class="' + that.options.iconBase + ' ' + $parent.data('icon') + '"></span> ' : '';

            label = labelIcon + '<span class="text">' + label + labelSubtext + '</span>';

            if (index !== 0 && _li.length > 0) { // Is it NOT the first option of the select && are there elements in the dropdown?
              liIndex++;
              _li.push(generateLI('', null, 'divider', optID + 'div'));
            }
            liIndex++;
            _li.push(generateLI(label, null, 'dropdown-header' + optGroupClass, optID));
          }

          if (that.options.hideDisabled && isDisabled) {
            liIndex--;
            return;
          }

          _li.push(generateLI(generateA(text, 'opt ' + optionClass + optGroupClass, inline, tokens), index, '', optID));
        } else if ($this.data('divider') === true) {
          _li.push(generateLI('', index, 'divider'));
        } else if ($this.data('hidden') === true) {
          _li.push(generateLI(generateA(text, optionClass, inline, tokens), index, 'hidden is-hidden'));
        } else {
          var showDivider = this.previousElementSibling && this.previousElementSibling.tagName === 'OPTGROUP';

          // if previous element is not an optgroup and hideDisabled is true
          if (!showDivider && that.options.hideDisabled) {
            // get previous elements
            var $prev = $(this).prevAll();

            for (var i = 0; i < $prev.length; i++) {
              // find the first element in the previous elements that is an optgroup
              if ($prev[i].tagName === 'OPTGROUP') {
                var optGroupDistance = 0;

                // loop through the options in between the current option and the optgroup
                // and check if they are hidden or disabled
                for (var d = 0; d < i; d++) {
                  var prevOption = $prev[d];
                  if (prevOption.disabled || $(prevOption).data('hidden') === true) optGroupDistance++;
                }

                // if all of the options between the current option and the optgroup are hidden or disabled, show the divider
                if (optGroupDistance === i) showDivider = true;

                break;
              }
            }
          }

          if (showDivider) {
            liIndex++;
            _li.push(generateLI('', null, 'divider', optID + 'div'));
          }
          _li.push(generateLI(generateA(text, optionClass, inline, tokens), index));
        }

        that.liObj[index] = liIndex;
      });

      //If we are not multiple, we don't have a selected item, and we don't have a title, select the first element so something is set in the button
      if (!this.multiple && this.$element.find('option:selected').length === 0 && !this.options.title) {
        this.$element.find('option').eq(0).prop('selected', true).attr('selected', 'selected');
      }

      return _li.join('');
    },

    findLis: function () {
      if (this.$lis == null) this.$lis = this.$menu.find('li');
      return this.$lis;
    },

    /**
     * @param [updateLi] defaults to true
     */
    render: function (updateLi) {
      var that = this,
          notDisabled;

      //Update the LI to match the SELECT
      if (updateLi !== false) {
        this.$element.find('option').each(function (index) {
          var $lis = that.findLis().eq(that.liObj[index]);

          that.setDisabled(index, this.disabled || this.parentNode.tagName === 'OPTGROUP' && this.parentNode.disabled, $lis);
          that.setSelected(index, this.selected, $lis);
        });
      }

      this.togglePlaceholder();

      this.tabIndex();

      var selectedItems = this.$element.find('option').map(function () {
        if (this.selected) {
          if (that.options.hideDisabled && (this.disabled || this.parentNode.tagName === 'OPTGROUP' && this.parentNode.disabled)) return;

          var $this = $(this),
              icon = $this.data('icon') && that.options.showIcon ? '<i class="' + that.options.iconBase + ' ' + $this.data('icon') + '"></i> ' : '',
              subtext;

          if (that.options.showSubtext && $this.data('subtext') && !that.multiple) {
            subtext = ' <small class="text-muted">' + $this.data('subtext') + '</small>';
          } else {
            subtext = '';
          }
          if (typeof $this.attr('title') !== 'undefined') {
            return $this.attr('title');
          } else if ($this.data('content') && that.options.showContent) {
            return $this.data('content');
          } else {
            return icon + $this.html() + subtext;
          }
        }
      }).toArray();

      //Fixes issue in IE10 occurring when no default option is selected and at least one option is disabled
      //Convert all the values into a comma delimited string
      var title = !this.multiple ? selectedItems[0] : selectedItems.join(this.options.multipleSeparator);

      //If this is multi select, and the selectText type is count, the show 1 of 2 selected etc..
      if (this.multiple && this.options.selectedTextFormat.indexOf('count') > -1) {
        var max = this.options.selectedTextFormat.split('>');
        if ((max.length > 1 && selectedItems.length > max[1]) || (max.length == 1 && selectedItems.length >= 2)) {
          notDisabled = this.options.hideDisabled ? ', [disabled]' : '';
          var totalCount = this.$element.find('option').not('[data-divider="true"], [data-hidden="true"]' + notDisabled).length,
              tr8nText = (typeof this.options.countSelectedText === 'function') ? this.options.countSelectedText(selectedItems.length, totalCount) : this.options.countSelectedText;
          title = tr8nText.replace('{0}', selectedItems.length.toString()).replace('{1}', totalCount.toString());
        }
      }

      if (this.options.title == undefined) {
        this.options.title = this.$element.attr('title');
      }

      if (this.options.selectedTextFormat == 'static') {
        title = this.options.title;
      }

      //If we dont have a title, then use the default, or if nothing is set at all, use the not selected text
      if (!title) {
        title = typeof this.options.title !== 'undefined' ? this.options.title : this.options.noneSelectedText;
      }

      //strip all html-tags and trim the result
      this.$button.attr('title', $.trim(title.replace(/<[^>]*>?/g, '')));
      this.$button.children('.filter-option').html(title);

      this.$element.trigger('rendered.bs.select');
    },

    /**
     * @param [style]
     * @param [status]
     */
    setStyle: function (style, status) {
      if (this.$element.attr('class')) {
        this.$newElement.addClass(this.$element.attr('class').replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ''));
      }

      var buttonClass = style ? style : this.options.style;

      if (status == 'add') {
        this.$button.addClass(buttonClass);
      } else if (status == 'remove') {
        this.$button.removeClass(buttonClass);
      } else {
        this.$button.removeClass(this.options.style);
        this.$button.addClass(buttonClass);
      }
    },

    liHeight: function (refresh) {
      if (!refresh && (this.options.size === false || this.sizeInfo)) return;

      var newElement = document.createElement('div'),
          menu = document.createElement('div'),
          menuInner = document.createElement('ul'),
          divider = document.createElement('li'),
          li = document.createElement('li'),
          a = document.createElement('a'),
          text = document.createElement('span'),
          header = this.options.header && this.$menu.find('.popover-title').length > 0 ? this.$menu.find('.popover-title')[0].cloneNode(true) : null,
          search = this.options.liveSearch ? document.createElement('div') : null,
          actions = this.options.actionsBox && this.multiple && this.$menu.find('.bs-actionsbox').length > 0 ? this.$menu.find('.bs-actionsbox')[0].cloneNode(true) : null,
          doneButton = this.options.doneButton && this.multiple && this.$menu.find('.bs-donebutton').length > 0 ? this.$menu.find('.bs-donebutton')[0].cloneNode(true) : null;

      text.className = 'text';
      newElement.className = this.$menu[0].parentNode.className + ' open';
      menu.className = 'dropdown-menu open';
      menuInner.className = 'dropdown-menu inner';
      divider.className = 'divider';

      text.appendChild(document.createTextNode('Inner text'));
      a.appendChild(text);
      li.appendChild(a);
      menuInner.appendChild(li);
      menuInner.appendChild(divider);
      if (header) menu.appendChild(header);
      if (search) {
        // create a span instead of input as creating an input element is slower
        var input = document.createElement('span');
        search.className = 'bs-searchbox';
        input.className = 'form-control';
        search.appendChild(input);
        menu.appendChild(search);
      }
      if (actions) menu.appendChild(actions);
      menu.appendChild(menuInner);
      if (doneButton) menu.appendChild(doneButton);
      newElement.appendChild(menu);

      document.body.appendChild(newElement);

      var liHeight = a.offsetHeight,
          headerHeight = header ? header.offsetHeight : 0,
          searchHeight = search ? search.offsetHeight : 0,
          actionsHeight = actions ? actions.offsetHeight : 0,
          doneButtonHeight = doneButton ? doneButton.offsetHeight : 0,
          dividerHeight = $(divider).outerHeight(true),
          // fall back to jQuery if getComputedStyle is not supported
          menuStyle = typeof getComputedStyle === 'function' ? getComputedStyle(menu) : false,
          $menu = menuStyle ? null : $(menu),
          menuPadding = {
            vert: parseInt(menuStyle ? menuStyle.paddingTop : $menu.css('paddingTop')) +
                  parseInt(menuStyle ? menuStyle.paddingBottom : $menu.css('paddingBottom')) +
                  parseInt(menuStyle ? menuStyle.borderTopWidth : $menu.css('borderTopWidth')) +
                  parseInt(menuStyle ? menuStyle.borderBottomWidth : $menu.css('borderBottomWidth')),
            horiz: parseInt(menuStyle ? menuStyle.paddingLeft : $menu.css('paddingLeft')) +
                  parseInt(menuStyle ? menuStyle.paddingRight : $menu.css('paddingRight')) +
                  parseInt(menuStyle ? menuStyle.borderLeftWidth : $menu.css('borderLeftWidth')) +
                  parseInt(menuStyle ? menuStyle.borderRightWidth : $menu.css('borderRightWidth'))
          },
          menuExtras =  {
            vert: menuPadding.vert +
                  parseInt(menuStyle ? menuStyle.marginTop : $menu.css('marginTop')) +
                  parseInt(menuStyle ? menuStyle.marginBottom : $menu.css('marginBottom')) + 2,
            horiz: menuPadding.horiz +
                  parseInt(menuStyle ? menuStyle.marginLeft : $menu.css('marginLeft')) +
                  parseInt(menuStyle ? menuStyle.marginRight : $menu.css('marginRight')) + 2
          }

      document.body.removeChild(newElement);

      this.sizeInfo = {
        liHeight: liHeight,
        headerHeight: headerHeight,
        searchHeight: searchHeight,
        actionsHeight: actionsHeight,
        doneButtonHeight: doneButtonHeight,
        dividerHeight: dividerHeight,
        menuPadding: menuPadding,
        menuExtras: menuExtras
      };
    },

    setSize: function () {
      this.findLis();
      this.liHeight();

      if (this.options.header) this.$menu.css('padding-top', 0);
      if (this.options.size === false) return;

      var that = this,
          $menu = this.$menu,
          $menuInner = this.$menuInner,
          $window = $(window),
          selectHeight = this.$newElement[0].offsetHeight,
          selectWidth = this.$newElement[0].offsetWidth,
          liHeight = this.sizeInfo['liHeight'],
          headerHeight = this.sizeInfo['headerHeight'],
          searchHeight = this.sizeInfo['searchHeight'],
          actionsHeight = this.sizeInfo['actionsHeight'],
          doneButtonHeight = this.sizeInfo['doneButtonHeight'],
          divHeight = this.sizeInfo['dividerHeight'],
          menuPadding = this.sizeInfo['menuPadding'],
          menuExtras = this.sizeInfo['menuExtras'],
          notDisabled = this.options.hideDisabled ? '.disabled' : '',
          menuHeight,
          menuWidth,
          getHeight,
          getWidth,
          selectOffsetTop,
          selectOffsetBot,
          selectOffsetLeft,
          selectOffsetRight,
          getPos = function() {
            var pos = that.$newElement.offset(),
                $container = $(that.options.container),
                containerPos;

            if (that.options.container && !$container.is('body')) {
              containerPos = $container.offset();
              containerPos.top += parseInt($container.css('borderTopWidth'));
              containerPos.left += parseInt($container.css('borderLeftWidth'));
            } else {
              containerPos = { top: 0, left: 0 };
            }

            selectOffsetTop = pos.top - containerPos.top - $window.scrollTop();
            selectOffsetBot = $window.height() - selectOffsetTop - selectHeight - containerPos.top;
            selectOffsetLeft = pos.left - containerPos.left - $window.scrollLeft();
            selectOffsetRight = $window.width() - selectOffsetLeft - selectWidth - containerPos.left;
          };

      getPos();

      if (this.options.size === 'auto') {
        var getSize = function () {
          var minHeight,
              hasClass = function (className, include) {
                return function (element) {
                    if (include) {
                        return (element.classList ? element.classList.contains(className) : $(element).hasClass(className));
                    } else {
                        return !(element.classList ? element.classList.contains(className) : $(element).hasClass(className));
                    }
                };
              },
              lis = that.$menuInner[0].getElementsByTagName('li'),
              lisVisible = Array.prototype.filter ? Array.prototype.filter.call(lis, hasClass('hidden', false)) : that.$lis.not('.hidden'),
              optGroup = Array.prototype.filter ? Array.prototype.filter.call(lisVisible, hasClass('dropdown-header', true)) : lisVisible.filter('.dropdown-header');

          getPos();
          menuHeight = selectOffsetBot - menuExtras.vert;
          menuWidth = selectOffsetRight - menuExtras.horiz;

          if (that.options.container) {
            if (!$menu.data('height')) $menu.data('height', $menu.height());
            getHeight = $menu.data('height');

            if (!$menu.data('width')) $menu.data('width', $menu.width());
            getWidth = $menu.data('width');
          } else {
            getHeight = $menu.height();
            getWidth = $menu.width();
          }

          if (that.options.dropupAuto) {
            that.$newElement.toggleClass('dropup', selectOffsetTop > selectOffsetBot && (menuHeight - menuExtras.vert) < getHeight);
          }

          if (that.$newElement.hasClass('dropup')) {
            menuHeight = selectOffsetTop - menuExtras.vert;
          }

          if (that.options.dropdownAlignRight === 'auto') {
            $menu.toggleClass('dropdown-menu-right', selectOffsetLeft > selectOffsetRight && (menuWidth - menuExtras.horiz) < (getWidth - selectWidth));
          }

          if ((lisVisible.length + optGroup.length) > 3) {
            minHeight = liHeight * 3 + menuExtras.vert - 2;
          } else {
            minHeight = 0;
          }

          $menu.css({
            'max-height': menuHeight + 'px',
            'overflow': 'hidden',
            'min-height': minHeight + headerHeight + searchHeight + actionsHeight + doneButtonHeight + 'px'
          });
          $menuInner.css({
            'max-height': menuHeight - headerHeight - searchHeight - actionsHeight - doneButtonHeight - menuPadding.vert + 'px',
            'overflow-y': 'auto',
            'min-height': Math.max(minHeight - menuPadding.vert, 0) + 'px'
          });
        };
        getSize();
        this.$searchbox.off('input.getSize propertychange.getSize').on('input.getSize propertychange.getSize', getSize);
        $window.off('resize.getSize scroll.getSize').on('resize.getSize scroll.getSize', getSize);
      } else if (this.options.size && this.options.size != 'auto' && this.$lis.not(notDisabled).length > this.options.size) {
        var optIndex = this.$lis.not('.divider').not(notDisabled).children().slice(0, this.options.size).last().parent().index(),
            divLength = this.$lis.slice(0, optIndex + 1).filter('.divider').length;
        menuHeight = liHeight * this.options.size + divLength * divHeight + menuPadding.vert;

        if (that.options.container) {
          if (!$menu.data('height')) $menu.data('height', $menu.height());
          getHeight = $menu.data('height');
        } else {
          getHeight = $menu.height();
        }

        if (that.options.dropupAuto) {
          //noinspection JSUnusedAssignment
          this.$newElement.toggleClass('dropup', selectOffsetTop > selectOffsetBot && (menuHeight - menuExtras.vert) < getHeight);
        }
        $menu.css({
          'max-height': menuHeight + headerHeight + searchHeight + actionsHeight + doneButtonHeight + 'px',
          'overflow': 'hidden',
          'min-height': ''
        });
        $menuInner.css({
          'max-height': menuHeight - menuPadding.vert + 'px',
          'overflow-y': 'auto',
          'min-height': ''
        });
      }
    },

    setWidth: function () {
      if (this.options.width === 'auto') {
        this.$menu.css('min-width', '0');

        // Get correct width if element is hidden
        var $selectClone = this.$menu.parent().clone().appendTo('body'),
            $selectClone2 = this.options.container ? this.$newElement.clone().appendTo('body') : $selectClone,
            ulWidth = $selectClone.children('.dropdown-menu').outerWidth(),
            btnWidth = $selectClone2.css('width', 'auto').children('button').outerWidth();

        $selectClone.remove();
        $selectClone2.remove();

        // Set width to whatever's larger, button title or longest option
        this.$newElement.css('width', Math.max(ulWidth, btnWidth) + 'px');
      } else if (this.options.width === 'fit') {
        // Remove inline min-width so width can be changed from 'auto'
        this.$menu.css('min-width', '');
        this.$newElement.css('width', '').addClass('fit-width');
      } else if (this.options.width) {
        // Remove inline min-width so width can be changed from 'auto'
        this.$menu.css('min-width', '');
        this.$newElement.css('width', this.options.width);
      } else {
        // Remove inline min-width/width so width can be changed
        this.$menu.css('min-width', '');
        this.$newElement.css('width', '');
      }
      // Remove fit-width class if width is changed programmatically
      if (this.$newElement.hasClass('fit-width') && this.options.width !== 'fit') {
        this.$newElement.removeClass('fit-width');
      }
    },

    selectPosition: function () {
      this.$bsContainer = $('<div class="bs-container" />');

      var that = this,
          $container = $(this.options.container),
          pos,
          containerPos,
          actualHeight,
          getPlacement = function ($element) {
            that.$bsContainer.addClass($element.attr('class').replace(/form-control|fit-width/gi, '')).toggleClass('dropup', $element.hasClass('dropup'));
            pos = $element.offset();

            if (!$container.is('body')) {
              containerPos = $container.offset();
              containerPos.top += parseInt($container.css('borderTopWidth')) - $container.scrollTop();
              containerPos.left += parseInt($container.css('borderLeftWidth')) - $container.scrollLeft();
            } else {
              containerPos = { top: 0, left: 0 };
            }

            actualHeight = $element.hasClass('dropup') ? 0 : $element[0].offsetHeight;

            that.$bsContainer.css({
              'top': pos.top - containerPos.top + actualHeight,
              'left': pos.left - containerPos.left,
              'width': $element[0].offsetWidth
            });
          };

      this.$button.on('click', function () {
        var $this = $(this);

        if (that.isDisabled()) {
          return;
        }

        getPlacement(that.$newElement);

        that.$bsContainer
          .appendTo(that.options.container)
          .toggleClass('open', !$this.hasClass('open'))
          .append(that.$menu);
      });

      $(window).on('resize scroll', function () {
        getPlacement(that.$newElement);
      });

      this.$element.on('hide.bs.select', function () {
        that.$menu.data('height', that.$menu.height());
        that.$bsContainer.detach();
      });
    },

    /**
     * @param {number} index - the index of the option that is being changed
     * @param {boolean} selected - true if the option is being selected, false if being deselected
     * @param {JQuery} $lis - the 'li' element that is being modified
     */
    setSelected: function (index, selected, $lis) {
      if (!$lis) {
        this.togglePlaceholder(); // check if setSelected is being called by changing the value of the select
        $lis = this.findLis().eq(this.liObj[index]);
      }

      $lis.toggleClass('selected', selected).find('a').attr('aria-selected', selected);
    },

    /**
     * @param {number} index - the index of the option that is being disabled
     * @param {boolean} disabled - true if the option is being disabled, false if being enabled
     * @param {JQuery} $lis - the 'li' element that is being modified
     */
    setDisabled: function (index, disabled, $lis) {
      if (!$lis) {
        $lis = this.findLis().eq(this.liObj[index]);
      }

      if (disabled) {
        $lis.addClass('disabled').children('a').attr('href', '#').attr('tabindex', -1).attr('aria-disabled', true);
      } else {
        $lis.removeClass('disabled').children('a').removeAttr('href').attr('tabindex', 0).attr('aria-disabled', false);
      }
    },

    isDisabled: function () {
      return this.$element[0].disabled;
    },

    checkDisabled: function () {
      var that = this;

      if (this.isDisabled()) {
        this.$newElement.addClass('disabled');
        this.$button.addClass('disabled').attr('tabindex', -1);
      } else {
        if (this.$button.hasClass('disabled')) {
          this.$newElement.removeClass('disabled');
          this.$button.removeClass('disabled');
        }

        if (this.$button.attr('tabindex') == -1 && !this.$element.data('tabindex')) {
          this.$button.removeAttr('tabindex');
        }
      }

      this.$button.click(function () {
        return !that.isDisabled();
      });
    },

    togglePlaceholder: function () {
      var value = this.$element.val();
      this.$button.toggleClass('bs-placeholder', value === null || value === '');
    },

    tabIndex: function () {
      if (this.$element.data('tabindex') !== this.$element.attr('tabindex') && 
        (this.$element.attr('tabindex') !== -98 && this.$element.attr('tabindex') !== '-98')) {
        this.$element.data('tabindex', this.$element.attr('tabindex'));
        this.$button.attr('tabindex', this.$element.data('tabindex'));
      }

      this.$element.attr('tabindex', -98);
    },

    clickListener: function () {
      var that = this,
          $document = $(document);

      this.$newElement.on('touchstart.dropdown', '.dropdown-menu', function (e) {
        e.stopPropagation();
      });

      $document.data('spaceSelect', false);

      this.$button.on('keyup', function (e) {
        if (/(32)/.test(e.keyCode.toString(10)) && $document.data('spaceSelect')) {
            e.preventDefault();
            $document.data('spaceSelect', false);
        }
      });

      this.$button.on('click', function () {
        that.setSize();
      });

      this.$element.on('shown.bs.select', function () {
        if (!that.options.liveSearch && !that.multiple) {
          that.$menuInner.find('.selected a').focus();
        } else if (!that.multiple) {
          var selectedIndex = that.liObj[that.$element[0].selectedIndex];

          if (typeof selectedIndex !== 'number' || that.options.size === false) return;

          // scroll to selected option
          var offset = that.$lis.eq(selectedIndex)[0].offsetTop - that.$menuInner[0].offsetTop;
          offset = offset - that.$menuInner[0].offsetHeight/2 + that.sizeInfo.liHeight/2;
          that.$menuInner[0].scrollTop = offset;
        }
      });

      this.$menuInner.on('click', 'li a', function (e) {
        var $this = $(this),
            clickedIndex = $this.parent().data('originalIndex'),
            prevValue = that.$element.val(),
            prevIndex = that.$element.prop('selectedIndex'),
            triggerChange = true;

        // Don't close on multi choice menu
        if (that.multiple && that.options.maxOptions !== 1) {
          e.stopPropagation();
        }

        e.preventDefault();

        //Don't run if we have been disabled
        if (!that.isDisabled() && !$this.parent().hasClass('disabled')) {
          var $options = that.$element.find('option'),
              $option = $options.eq(clickedIndex),
              state = $option.prop('selected'),
              $optgroup = $option.parent('optgroup'),
              maxOptions = that.options.maxOptions,
              maxOptionsGrp = $optgroup.data('maxOptions') || false;

          if (!that.multiple) { // Deselect all others if not multi select box
            $options.prop('selected', false);
            $option.prop('selected', true);
            that.$menuInner.find('.selected').removeClass('selected').find('a').attr('aria-selected', false);
            that.setSelected(clickedIndex, true);
          } else { // Toggle the one we have chosen if we are multi select.
            $option.prop('selected', !state);
            that.setSelected(clickedIndex, !state);
            $this.blur();

            if (maxOptions !== false || maxOptionsGrp !== false) {
              var maxReached = maxOptions < $options.filter(':selected').length,
                  maxReachedGrp = maxOptionsGrp < $optgroup.find('option:selected').length;

              if ((maxOptions && maxReached) || (maxOptionsGrp && maxReachedGrp)) {
                if (maxOptions && maxOptions == 1) {
                  $options.prop('selected', false);
                  $option.prop('selected', true);
                  that.$menuInner.find('.selected').removeClass('selected');
                  that.setSelected(clickedIndex, true);
                } else if (maxOptionsGrp && maxOptionsGrp == 1) {
                  $optgroup.find('option:selected').prop('selected', false);
                  $option.prop('selected', true);
                  var optgroupID = $this.parent().data('optgroup');
                  that.$menuInner.find('[data-optgroup="' + optgroupID + '"]').removeClass('selected');
                  that.setSelected(clickedIndex, true);
                } else {
                  var maxOptionsText = typeof that.options.maxOptionsText === 'string' ? [that.options.maxOptionsText, that.options.maxOptionsText] : that.options.maxOptionsText,
                      maxOptionsArr = typeof maxOptionsText === 'function' ? maxOptionsText(maxOptions, maxOptionsGrp) : maxOptionsText,
                      maxTxt = maxOptionsArr[0].replace('{n}', maxOptions),
                      maxTxtGrp = maxOptionsArr[1].replace('{n}', maxOptionsGrp),
                      $notify = $('<div class="notify"></div>');
                  // If {var} is set in array, replace it
                  /** @deprecated */
                  if (maxOptionsArr[2]) {
                    maxTxt = maxTxt.replace('{var}', maxOptionsArr[2][maxOptions > 1 ? 0 : 1]);
                    maxTxtGrp = maxTxtGrp.replace('{var}', maxOptionsArr[2][maxOptionsGrp > 1 ? 0 : 1]);
                  }

                  $option.prop('selected', false);

                  that.$menu.append($notify);

                  if (maxOptions && maxReached) {
                    $notify.append($('<div>' + maxTxt + '</div>'));
                    triggerChange = false;
                    that.$element.trigger('maxReached.bs.select');
                  }

                  if (maxOptionsGrp && maxReachedGrp) {
                    $notify.append($('<div>' + maxTxtGrp + '</div>'));
                    triggerChange = false;
                    that.$element.trigger('maxReachedGrp.bs.select');
                  }

                  setTimeout(function () {
                    that.setSelected(clickedIndex, false);
                  }, 10);

                  $notify.delay(750).fadeOut(300, function () {
                    $(this).remove();
                  });
                }
              }
            }
          }

          if (!that.multiple || (that.multiple && that.options.maxOptions === 1)) {
            that.$button.focus();
          } else if (that.options.liveSearch) {
            that.$searchbox.focus();
          }

          // Trigger select 'change'
          if (triggerChange) {
            if ((prevValue != that.$element.val() && that.multiple) || (prevIndex != that.$element.prop('selectedIndex') && !that.multiple)) {
              // $option.prop('selected') is current option state (selected/unselected). state is previous option state.
              changed_arguments = [clickedIndex, $option.prop('selected'), state];
              that.$element
                .triggerNative('change');
            }
          }
        }
      });

      this.$menu.on('click', 'li.disabled a, .popover-title, .popover-title :not(.close)', function (e) {
        if (e.currentTarget == this) {
          e.preventDefault();
          e.stopPropagation();
          if (that.options.liveSearch && !$(e.target).hasClass('close')) {
            that.$searchbox.focus();
          } else {
            that.$button.focus();
          }
        }
      });

      this.$menuInner.on('click', '.divider, .dropdown-header', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (that.options.liveSearch) {
          that.$searchbox.focus();
        } else {
          that.$button.focus();
        }
      });

      this.$menu.on('click', '.popover-title .close', function () {
        that.$button.click();
      });

      this.$searchbox.on('click', function (e) {
        e.stopPropagation();
      });

      this.$menu.on('click', '.actions-btn', function (e) {
        if (that.options.liveSearch) {
          that.$searchbox.focus();
        } else {
          that.$button.focus();
        }

        e.preventDefault();
        e.stopPropagation();

        if ($(this).hasClass('bs-select-all')) {
          that.selectAll();
        } else {
          that.deselectAll();
        }
      });

      this.$element.change(function () {
        that.render(false);
        that.$element.trigger('changed.bs.select', changed_arguments);
        changed_arguments = null;
      });
    },

    liveSearchListener: function () {
      var that = this,
          $no_results = $('<li class="no-results"></li>');

      this.$button.on('click.dropdown.data-api touchstart.dropdown.data-api', function () {
        that.$menuInner.find('.active').removeClass('active');
        if (!!that.$searchbox.val()) {
          that.$searchbox.val('');
          that.$lis.not('.is-hidden').removeClass('hidden');
          if (!!$no_results.parent().length) $no_results.remove();
        }
        if (!that.multiple) that.$menuInner.find('.selected').addClass('active');
        setTimeout(function () {
          that.$searchbox.focus();
        }, 10);
      });

      this.$searchbox.on('click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api', function (e) {
        e.stopPropagation();
      });

      this.$searchbox.on('input propertychange', function () {
        if (that.$searchbox.val()) {
          var $searchBase = that.$lis.not('.is-hidden').removeClass('hidden').children('a');
          if (that.options.liveSearchNormalize) {
            $searchBase = $searchBase.not(':a' + that._searchStyle() + '("' + normalizeToBase(that.$searchbox.val()) + '")');
          } else {
            $searchBase = $searchBase.not(':' + that._searchStyle() + '("' + that.$searchbox.val() + '")');
          }
          $searchBase.parent().addClass('hidden');

          that.$lis.filter('.dropdown-header').each(function () {
            var $this = $(this),
                optgroup = $this.data('optgroup');

            if (that.$lis.filter('[data-optgroup=' + optgroup + ']').not($this).not('.hidden').length === 0) {
              $this.addClass('hidden');
              that.$lis.filter('[data-optgroup=' + optgroup + 'div]').addClass('hidden');
            }
          });

          var $lisVisible = that.$lis.not('.hidden');

          // hide divider if first or last visible, or if followed by another divider
          $lisVisible.each(function (index) {
            var $this = $(this);

            if ($this.hasClass('divider') && (
              $this.index() === $lisVisible.first().index() ||
              $this.index() === $lisVisible.last().index() ||
              $lisVisible.eq(index + 1).hasClass('divider'))) {
              $this.addClass('hidden');
            }
          });

          if (!that.$lis.not('.hidden, .no-results').length) {
            if (!!$no_results.parent().length) {
              $no_results.remove();
            }
            $no_results.html(that.options.noneResultsText.replace('{0}', '"' + htmlEscape(that.$searchbox.val()) + '"')).show();
            that.$menuInner.append($no_results);
          } else if (!!$no_results.parent().length) {
            $no_results.remove();
          }
        } else {
          that.$lis.not('.is-hidden').removeClass('hidden');
          if (!!$no_results.parent().length) {
            $no_results.remove();
          }
        }

        that.$lis.filter('.active').removeClass('active');
        if (that.$searchbox.val()) that.$lis.not('.hidden, .divider, .dropdown-header').eq(0).addClass('active').children('a').focus();
        $(this).focus();
      });
    },

    _searchStyle: function () {
      var styles = {
        begins: 'ibegins',
        startsWith: 'ibegins'
      };

      return styles[this.options.liveSearchStyle] || 'icontains';
    },

    val: function (value) {
      if (typeof value !== 'undefined') {
        this.$element.val(value);
        this.render();

        return this.$element;
      } else {
        return this.$element.val();
      }
    },

    changeAll: function (status) {
      if (!this.multiple) return;
      if (typeof status === 'undefined') status = true;

      this.findLis();

      var $options = this.$element.find('option'),
          $lisVisible = this.$lis.not('.divider, .dropdown-header, .disabled, .hidden'),
          lisVisLen = $lisVisible.length,
          selectedOptions = [];
          
      if (status) {
        if ($lisVisible.filter('.selected').length === $lisVisible.length) return;
      } else {
        if ($lisVisible.filter('.selected').length === 0) return;
      }
          
      $lisVisible.toggleClass('selected', status);

      for (var i = 0; i < lisVisLen; i++) {
        var origIndex = $lisVisible[i].getAttribute('data-original-index');
        selectedOptions[selectedOptions.length] = $options.eq(origIndex)[0];
      }

      $(selectedOptions).prop('selected', status);

      this.render(false);

      this.togglePlaceholder();

      this.$element
        .triggerNative('change');
    },

    selectAll: function () {
      return this.changeAll(true);
    },

    deselectAll: function () {
      return this.changeAll(false);
    },

    toggle: function (e) {
      e = e || window.event;

      if (e) e.stopPropagation();

      this.$button.trigger('click');
    },

    keydown: function (e) {
      var $this = $(this),
          $parent = $this.is('input') ? $this.parent().parent() : $this.parent(),
          $items,
          that = $parent.data('this'),
          index,
          next,
          first,
          last,
          prev,
          nextPrev,
          prevIndex,
          isActive,
          selector = ':not(.disabled, .hidden, .dropdown-header, .divider)',
          keyCodeMap = {
            32: ' ',
            48: '0',
            49: '1',
            50: '2',
            51: '3',
            52: '4',
            53: '5',
            54: '6',
            55: '7',
            56: '8',
            57: '9',
            59: ';',
            65: 'a',
            66: 'b',
            67: 'c',
            68: 'd',
            69: 'e',
            70: 'f',
            71: 'g',
            72: 'h',
            73: 'i',
            74: 'j',
            75: 'k',
            76: 'l',
            77: 'm',
            78: 'n',
            79: 'o',
            80: 'p',
            81: 'q',
            82: 'r',
            83: 's',
            84: 't',
            85: 'u',
            86: 'v',
            87: 'w',
            88: 'x',
            89: 'y',
            90: 'z',
            96: '0',
            97: '1',
            98: '2',
            99: '3',
            100: '4',
            101: '5',
            102: '6',
            103: '7',
            104: '8',
            105: '9'
          };

      if (that.options.liveSearch) $parent = $this.parent().parent();

      if (that.options.container) $parent = that.$menu;

      $items = $('[role="listbox"] li', $parent);

      isActive = that.$newElement.hasClass('open');

      if (!isActive && (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 65 && e.keyCode <= 90)) {
        if (!that.options.container) {
          that.setSize();
          that.$menu.parent().addClass('open');
          isActive = true;
        } else {
          that.$button.trigger('click');
        }
        that.$searchbox.focus();
        return;
      }

      if (that.options.liveSearch) {
        if (/(^9$|27)/.test(e.keyCode.toString(10)) && isActive) {
          e.preventDefault();
          e.stopPropagation();
          that.$button.click().focus();
        }
        // $items contains li elements when liveSearch is enabled
        $items = $('[role="listbox"] li' + selector, $parent);
        if (!$this.val() && !/(38|40)/.test(e.keyCode.toString(10))) {
          if ($items.filter('.active').length === 0) {
            $items = that.$menuInner.find('li');
            if (that.options.liveSearchNormalize) {
              $items = $items.filter(':a' + that._searchStyle() + '(' + normalizeToBase(keyCodeMap[e.keyCode]) + ')');
            } else {
              $items = $items.filter(':' + that._searchStyle() + '(' + keyCodeMap[e.keyCode] + ')');
            }
          }
        }
      }

      if (!$items.length) return;

      if (/(38|40)/.test(e.keyCode.toString(10))) {
        index = $items.index($items.find('a').filter(':focus').parent());
        first = $items.filter(selector).first().index();
        last = $items.filter(selector).last().index();
        next = $items.eq(index).nextAll(selector).eq(0).index();
        prev = $items.eq(index).prevAll(selector).eq(0).index();
        nextPrev = $items.eq(next).prevAll(selector).eq(0).index();

        if (that.options.liveSearch) {
          $items.each(function (i) {
            if (!$(this).hasClass('disabled')) {
              $(this).data('index', i);
            }
          });
          index = $items.index($items.filter('.active'));
          first = $items.first().data('index');
          last = $items.last().data('index');
          next = $items.eq(index).nextAll().eq(0).data('index');
          prev = $items.eq(index).prevAll().eq(0).data('index');
          nextPrev = $items.eq(next).prevAll().eq(0).data('index');
        }

        prevIndex = $this.data('prevIndex');

        if (e.keyCode == 38) {
          if (that.options.liveSearch) index--;
          if (index != nextPrev && index > prev) index = prev;
          if (index < first) index = first;
          if (index == prevIndex) index = last;
        } else if (e.keyCode == 40) {
          if (that.options.liveSearch) index++;
          if (index == -1) index = 0;
          if (index != nextPrev && index < next) index = next;
          if (index > last) index = last;
          if (index == prevIndex) index = first;
        }

        $this.data('prevIndex', index);

        if (!that.options.liveSearch) {
          $items.eq(index).children('a').focus();
        } else {
          e.preventDefault();
          if (!$this.hasClass('dropdown-toggle')) {
            $items.removeClass('active').eq(index).addClass('active').children('a').focus();
            $this.focus();
          }
        }

      } else if (!$this.is('input')) {
        var keyIndex = [],
            count,
            prevKey;

        $items.each(function () {
          if (!$(this).hasClass('disabled')) {
            if ($.trim($(this).children('a').text().toLowerCase()).substring(0, 1) == keyCodeMap[e.keyCode]) {
              keyIndex.push($(this).index());
            }
          }
        });

        count = $(document).data('keycount');
        count++;
        $(document).data('keycount', count);

        prevKey = $.trim($(':focus').text().toLowerCase()).substring(0, 1);

        if (prevKey != keyCodeMap[e.keyCode]) {
          count = 1;
          $(document).data('keycount', count);
        } else if (count >= keyIndex.length) {
          $(document).data('keycount', 0);
          if (count > keyIndex.length) count = 1;
        }

        $items.eq(keyIndex[count - 1]).children('a').focus();
      }

      // Select focused option if "Enter", "Spacebar" or "Tab" (when selectOnTab is true) are pressed inside the menu.
      if ((/(13|32)/.test(e.keyCode.toString(10)) || (/(^9$)/.test(e.keyCode.toString(10)) && that.options.selectOnTab)) && isActive) {
        if (!/(32)/.test(e.keyCode.toString(10))) e.preventDefault();
        if (!that.options.liveSearch) {
          var elem = $(':focus');
          elem.click();
          // Bring back focus for multiselects
          elem.focus();
          // Prevent screen from scrolling if the user hit the spacebar
          e.preventDefault();
          // Fixes spacebar selection of dropdown items in FF & IE
          $(document).data('spaceSelect', true);
        } else if (!/(32)/.test(e.keyCode.toString(10))) {
          that.$menuInner.find('.active a').click();
          $this.focus();
        }
        $(document).data('keycount', 0);
      }

      if ((/(^9$|27)/.test(e.keyCode.toString(10)) && isActive && (that.multiple || that.options.liveSearch)) || (/(27)/.test(e.keyCode.toString(10)) && !isActive)) {
        that.$menu.parent().removeClass('open');
        if (that.options.container) that.$newElement.removeClass('open');
        that.$button.focus();
      }
    },

    mobile: function () {
      this.$element.addClass('mobile-device');
    },

    refresh: function () {
      this.$lis = null;
      this.liObj = {};
      this.reloadLi();
      this.render();
      this.checkDisabled();
      this.liHeight(true);
      this.setStyle();
      this.setWidth();
      if (this.$lis) this.$searchbox.trigger('propertychange');

      this.$element.trigger('refreshed.bs.select');
    },

    hide: function () {
      this.$newElement.hide();
    },

    show: function () {
      this.$newElement.show();
    },

    remove: function () {
      this.$newElement.remove();
      this.$element.remove();
    },

    destroy: function () {
      this.$newElement.before(this.$element).remove();

      if (this.$bsContainer) {
        this.$bsContainer.remove();
      } else {
        this.$menu.remove();
      }

      this.$element
        .off('.bs.select')
        .removeData('selectpicker')
        .removeClass('bs-select-hidden selectpicker');
    }
  };

  // SELECTPICKER PLUGIN DEFINITION
  // ==============================
  function Plugin(option, event) {
    // get the args of the outer function..
    var args = arguments;
    // The arguments of the function are explicitly re-defined from the argument list, because the shift causes them
    // to get lost/corrupted in android 2.3 and IE9 #715 #775
    var _option = option,
        _event = event;
    [].shift.apply(args);

    var value;
    var chain = this.each(function () {
      var $this = $(this);
      if ($this.is('select')) {
        var data = $this.data('selectpicker'),
            options = typeof _option == 'object' && _option;

        if (!data) {
          var config = $.extend({}, Selectpicker.DEFAULTS, $.fn.selectpicker.defaults || {}, $this.data(), options);
          config.template = $.extend({}, Selectpicker.DEFAULTS.template, ($.fn.selectpicker.defaults ? $.fn.selectpicker.defaults.template : {}), $this.data().template, options.template);
          $this.data('selectpicker', (data = new Selectpicker(this, config, _event)));
        } else if (options) {
          for (var i in options) {
            if (options.hasOwnProperty(i)) {
              data.options[i] = options[i];
            }
          }
        }

        if (typeof _option == 'string') {
          if (data[_option] instanceof Function) {
            value = data[_option].apply(data, args);
          } else {
            value = data.options[_option];
          }
        }
      }
    });

    if (typeof value !== 'undefined') {
      //noinspection JSUnusedAssignment
      return value;
    } else {
      return chain;
    }
  }

  var old = $.fn.selectpicker;
  $.fn.selectpicker = Plugin;
  $.fn.selectpicker.Constructor = Selectpicker;

  // SELECTPICKER NO CONFLICT
  // ========================
  $.fn.selectpicker.noConflict = function () {
    $.fn.selectpicker = old;
    return this;
  };

  $(document)
      .data('keycount', 0)
      .on('keydown.bs.select', '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', Selectpicker.prototype.keydown)
      .on('focusin.modal', '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', function (e) {
        e.stopPropagation();
      });

  // SELECTPICKER DATA-API
  // =====================
  $(window).on('load.bs.select.data-api', function () {
    $('.selectpicker').each(function () {
      var $selectpicker = $(this);
      Plugin.call($selectpicker, $selectpicker.data());
    })
  });
})(jQuery);


}));
;/*
 * jQuery MiniColors: A tiny color picker built on jQuery
 *
 * Copyright: Cory LaViska for A Beautiful Site, LLC: http://www.abeautifulsite.net/
 *
 * Contribute: https://github.com/claviska/jquery-minicolors
 *
 * @license: http://opensource.org/licenses/MIT
 *
 */
!function(i){"function"==typeof define&&define.amd?define(["jquery"],i):"object"==typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function($){"use strict";function i(i,t){var o=$('<div class="minicolors" />'),s=$.minicolors.defaults,a,n,r,c,l;if(!i.data("minicolors-initialized")){if(t=$.extend(!0,{},s,t),o.addClass("minicolors-theme-"+t.theme).toggleClass("minicolors-with-opacity",t.opacity).toggleClass("minicolors-no-data-uris",t.dataUris!==!0),void 0!==t.position&&$.each(t.position.split(" "),function(){o.addClass("minicolors-position-"+this)}),a="rgb"===t.format?t.opacity?"25":"20":t.keywords?"11":"7",i.addClass("minicolors-input").data("minicolors-initialized",!1).data("minicolors-settings",t).prop("size",a).wrap(o).after('<div class="minicolors-panel minicolors-slider-'+t.control+'"><div class="minicolors-slider minicolors-sprite"><div class="minicolors-picker"></div></div><div class="minicolors-opacity-slider minicolors-sprite"><div class="minicolors-picker"></div></div><div class="minicolors-grid minicolors-sprite"><div class="minicolors-grid-inner"></div><div class="minicolors-picker"><div></div></div></div></div>'),t.inline||(i.after('<span class="minicolors-swatch minicolors-sprite minicolors-input-swatch"><span class="minicolors-swatch-color"></span></span>'),i.next(".minicolors-input-swatch").on("click",function(t){t.preventDefault(),i.focus()})),c=i.parent().find(".minicolors-panel"),c.on("selectstart",function(){return!1}).end(),t.swatches&&0!==t.swatches.length)for(t.swatches.length>7&&(t.swatches.length=7),c.addClass("minicolors-with-swatches"),n=$('<ul class="minicolors-swatches"></ul>').appendTo(c),l=0;l<t.swatches.length;++l)r=t.swatches[l],r=f(r)?u(r,!0):x(p(r,!0)),$('<li class="minicolors-swatch minicolors-sprite"><span class="minicolors-swatch-color"></span></li>').appendTo(n).data("swatch-color",t.swatches[l]).find(".minicolors-swatch-color").css({backgroundColor:y(r),opacity:r.a}),t.swatches[l]=r;t.inline&&i.parent().addClass("minicolors-inline"),e(i,!1),i.data("minicolors-initialized",!0)}}function t(i){var t=i.parent();i.removeData("minicolors-initialized").removeData("minicolors-settings").removeProp("size").removeClass("minicolors-input"),t.before(i).remove()}function o(i){var t=i.parent(),o=t.find(".minicolors-panel"),a=i.data("minicolors-settings");!i.data("minicolors-initialized")||i.prop("disabled")||t.hasClass("minicolors-inline")||t.hasClass("minicolors-focus")||(s(),t.addClass("minicolors-focus"),o.stop(!0,!0).fadeIn(a.showSpeed,function(){a.show&&a.show.call(i.get(0))}))}function s(){$(".minicolors-focus").each(function(){var i=$(this),t=i.find(".minicolors-input"),o=i.find(".minicolors-panel"),s=t.data("minicolors-settings");o.fadeOut(s.hideSpeed,function(){s.hide&&s.hide.call(t.get(0)),i.removeClass("minicolors-focus")})})}function a(i,t,o){var s=i.parents(".minicolors").find(".minicolors-input"),a=s.data("minicolors-settings"),r=i.find("[class$=-picker]"),e=i.offset().left,c=i.offset().top,l=Math.round(t.pageX-e),h=Math.round(t.pageY-c),d=o?a.animationSpeed:0,p,u,g,m;t.originalEvent.changedTouches&&(l=t.originalEvent.changedTouches[0].pageX-e,h=t.originalEvent.changedTouches[0].pageY-c),0>l&&(l=0),0>h&&(h=0),l>i.width()&&(l=i.width()),h>i.height()&&(h=i.height()),i.parent().is(".minicolors-slider-wheel")&&r.parent().is(".minicolors-grid")&&(p=75-l,u=75-h,g=Math.sqrt(p*p+u*u),m=Math.atan2(u,p),0>m&&(m+=2*Math.PI),g>75&&(g=75,l=75-75*Math.cos(m),h=75-75*Math.sin(m)),l=Math.round(l),h=Math.round(h)),i.is(".minicolors-grid")?r.stop(!0).animate({top:h+"px",left:l+"px"},d,a.animationEasing,function(){n(s,i)}):r.stop(!0).animate({top:h+"px"},d,a.animationEasing,function(){n(s,i)})}function n(i,t){function o(i,t){var o,s;return i.length&&t?(o=i.offset().left,s=i.offset().top,{x:o-t.offset().left+i.outerWidth()/2,y:s-t.offset().top+i.outerHeight()/2}):null}var s,a,n,e,l,h,d,p=i.val(),u=i.attr("data-opacity"),g=i.parent(),f=i.data("minicolors-settings"),v=g.find(".minicolors-input-swatch"),b=g.find(".minicolors-grid"),w=g.find(".minicolors-slider"),y=g.find(".minicolors-opacity-slider"),k=b.find("[class$=-picker]"),M=w.find("[class$=-picker]"),x=y.find("[class$=-picker]"),I=o(k,b),S=o(M,w),z=o(x,y);if(t.is(".minicolors-grid, .minicolors-slider, .minicolors-opacity-slider")){switch(f.control){case"wheel":e=b.width()/2-I.x,l=b.height()/2-I.y,h=Math.sqrt(e*e+l*l),d=Math.atan2(l,e),0>d&&(d+=2*Math.PI),h>75&&(h=75,I.x=69-75*Math.cos(d),I.y=69-75*Math.sin(d)),a=m(h/.75,0,100),s=m(180*d/Math.PI,0,360),n=m(100-Math.floor(S.y*(100/w.height())),0,100),p=C({h:s,s:a,b:n}),w.css("backgroundColor",C({h:s,s:a,b:100}));break;case"saturation":s=m(parseInt(I.x*(360/b.width()),10),0,360),a=m(100-Math.floor(S.y*(100/w.height())),0,100),n=m(100-Math.floor(I.y*(100/b.height())),0,100),p=C({h:s,s:a,b:n}),w.css("backgroundColor",C({h:s,s:100,b:n})),g.find(".minicolors-grid-inner").css("opacity",a/100);break;case"brightness":s=m(parseInt(I.x*(360/b.width()),10),0,360),a=m(100-Math.floor(I.y*(100/b.height())),0,100),n=m(100-Math.floor(S.y*(100/w.height())),0,100),p=C({h:s,s:a,b:n}),w.css("backgroundColor",C({h:s,s:a,b:100})),g.find(".minicolors-grid-inner").css("opacity",1-n/100);break;default:s=m(360-parseInt(S.y*(360/w.height()),10),0,360),a=m(Math.floor(I.x*(100/b.width())),0,100),n=m(100-Math.floor(I.y*(100/b.height())),0,100),p=C({h:s,s:a,b:n}),b.css("backgroundColor",C({h:s,s:100,b:100}))}u=f.opacity?parseFloat(1-z.y/y.height()).toFixed(2):1,r(i,p,u)}else v.find("span").css({backgroundColor:p,opacity:u}),c(i,p,u)}function r(i,t,o){var s,a=i.parent(),n=i.data("minicolors-settings"),r=a.find(".minicolors-input-swatch");n.opacity&&i.attr("data-opacity",o),"rgb"===n.format?(s=f(t)?u(t,!0):x(p(t,!0)),o=""===i.attr("data-opacity")?1:m(parseFloat(i.attr("data-opacity")).toFixed(2),0,1),(isNaN(o)||!n.opacity)&&(o=1),t=i.minicolors("rgbObject").a<=1&&s&&n.opacity?"rgba("+s.r+", "+s.g+", "+s.b+", "+parseFloat(o)+")":"rgb("+s.r+", "+s.g+", "+s.b+")"):(f(t)&&(t=w(t)),t=d(t,n.letterCase)),i.val(t),r.find("span").css({backgroundColor:t,opacity:o}),c(i,t,o)}function e(i,t){var o,s,a,n,r,e,l,h,b,y,M=i.parent(),x=i.data("minicolors-settings"),I=M.find(".minicolors-input-swatch"),S=M.find(".minicolors-grid"),z=M.find(".minicolors-slider"),F=M.find(".minicolors-opacity-slider"),D=S.find("[class$=-picker]"),T=z.find("[class$=-picker]"),j=F.find("[class$=-picker]");switch(f(i.val())?(o=w(i.val()),r=m(parseFloat(v(i.val())).toFixed(2),0,1),r&&i.attr("data-opacity",r)):o=d(p(i.val(),!0),x.letterCase),o||(o=d(g(x.defaultValue,!0),x.letterCase)),s=k(o),n=x.keywords?$.map(x.keywords.split(","),function(i){return $.trim(i.toLowerCase())}):[],e=""!==i.val()&&$.inArray(i.val().toLowerCase(),n)>-1?d(i.val()):f(i.val())?u(i.val()):o,t||i.val(e),x.opacity&&(a=""===i.attr("data-opacity")?1:m(parseFloat(i.attr("data-opacity")).toFixed(2),0,1),isNaN(a)&&(a=1),i.attr("data-opacity",a),I.find("span").css("opacity",a),h=m(F.height()-F.height()*a,0,F.height()),j.css("top",h+"px")),"transparent"===i.val().toLowerCase()&&I.find("span").css("opacity",0),I.find("span").css("backgroundColor",o),x.control){case"wheel":b=m(Math.ceil(.75*s.s),0,S.height()/2),y=s.h*Math.PI/180,l=m(75-Math.cos(y)*b,0,S.width()),h=m(75-Math.sin(y)*b,0,S.height()),D.css({top:h+"px",left:l+"px"}),h=150-s.b/(100/S.height()),""===o&&(h=0),T.css("top",h+"px"),z.css("backgroundColor",C({h:s.h,s:s.s,b:100}));break;case"saturation":l=m(5*s.h/12,0,150),h=m(S.height()-Math.ceil(s.b/(100/S.height())),0,S.height()),D.css({top:h+"px",left:l+"px"}),h=m(z.height()-s.s*(z.height()/100),0,z.height()),T.css("top",h+"px"),z.css("backgroundColor",C({h:s.h,s:100,b:s.b})),M.find(".minicolors-grid-inner").css("opacity",s.s/100);break;case"brightness":l=m(5*s.h/12,0,150),h=m(S.height()-Math.ceil(s.s/(100/S.height())),0,S.height()),D.css({top:h+"px",left:l+"px"}),h=m(z.height()-s.b*(z.height()/100),0,z.height()),T.css("top",h+"px"),z.css("backgroundColor",C({h:s.h,s:s.s,b:100})),M.find(".minicolors-grid-inner").css("opacity",1-s.b/100);break;default:l=m(Math.ceil(s.s/(100/S.width())),0,S.width()),h=m(S.height()-Math.ceil(s.b/(100/S.height())),0,S.height()),D.css({top:h+"px",left:l+"px"}),h=m(z.height()-s.h/(360/z.height()),0,z.height()),T.css("top",h+"px"),S.css("backgroundColor",C({h:s.h,s:100,b:100}))}i.data("minicolors-initialized")&&c(i,e,a)}function c(i,t,o){var s=i.data("minicolors-settings"),a=i.data("minicolors-lastChange"),n,r,e;if(!a||a.value!==t||a.opacity!==o){if(i.data("minicolors-lastChange",{value:t,opacity:o}),s.swatches&&0!==s.swatches.length){for(n=f(t)?u(t,!0):x(t),r=-1,e=0;e<s.swatches.length;++e)if(n.r===s.swatches[e].r&&n.g===s.swatches[e].g&&n.b===s.swatches[e].b&&n.a===s.swatches[e].a){r=e;break}i.parent().find(".minicolors-swatches .minicolors-swatch").removeClass("selected"),-1!==e&&i.parent().find(".minicolors-swatches .minicolors-swatch").eq(e).addClass("selected")}s.change&&(s.changeDelay?(clearTimeout(i.data("minicolors-changeTimeout")),i.data("minicolors-changeTimeout",setTimeout(function(){s.change.call(i.get(0),t,o)},s.changeDelay))):s.change.call(i.get(0),t,o)),i.trigger("change").trigger("input")}}function l(i){var t=p($(i).val(),!0),o=x(t),s=$(i).attr("data-opacity");return o?(void 0!==s&&$.extend(o,{a:parseFloat(s)}),o):null}function h(i,t){var o=p($(i).val(),!0),s=x(o),a=$(i).attr("data-opacity");return s?(void 0===a&&(a=1),t?"rgba("+s.r+", "+s.g+", "+s.b+", "+parseFloat(a)+")":"rgb("+s.r+", "+s.g+", "+s.b+")"):null}function d(i,t){return"uppercase"===t?i.toUpperCase():i.toLowerCase()}function p(i,t){return i=i.replace(/^#/g,""),i.match(/^[A-F0-9]{3,6}/gi)?3!==i.length&&6!==i.length?"":(3===i.length&&t&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]),"#"+i):""}function u(i,t){var o=i.replace(/[^\d,.]/g,""),s=o.split(",");return s[0]=m(parseInt(s[0],10),0,255),s[1]=m(parseInt(s[1],10),0,255),s[2]=m(parseInt(s[2],10),0,255),s[3]&&(s[3]=m(parseFloat(s[3],10),0,1)),t?{r:s[0],g:s[1],b:s[2],a:s[3]?s[3]:null}:"undefined"!=typeof s[3]&&s[3]<=1?"rgba("+s[0]+", "+s[1]+", "+s[2]+", "+s[3]+")":"rgb("+s[0]+", "+s[1]+", "+s[2]+")"}function g(i,t){return f(i)?u(i):p(i,t)}function m(i,t,o){return t>i&&(i=t),i>o&&(i=o),i}function f(i){var t=i.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);return t&&4===t.length?!0:!1}function v(i){return i=i.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+(\.\d{1,2})?|\.\d{1,2})[\s+]?/i),i&&6===i.length?i[4]:"1"}function b(i){var t={},o=Math.round(i.h),s=Math.round(255*i.s/100),a=Math.round(255*i.b/100);if(0===s)t.r=t.g=t.b=a;else{var n=a,r=(255-s)*a/255,e=(n-r)*(o%60)/60;360===o&&(o=0),60>o?(t.r=n,t.b=r,t.g=r+e):120>o?(t.g=n,t.b=r,t.r=n-e):180>o?(t.g=n,t.r=r,t.b=r+e):240>o?(t.b=n,t.r=r,t.g=n-e):300>o?(t.b=n,t.g=r,t.r=r+e):360>o?(t.r=n,t.g=r,t.b=n-e):(t.r=0,t.g=0,t.b=0)}return{r:Math.round(t.r),g:Math.round(t.g),b:Math.round(t.b)}}function w(i){return i=i.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i),i&&4===i.length?"#"+("0"+parseInt(i[1],10).toString(16)).slice(-2)+("0"+parseInt(i[2],10).toString(16)).slice(-2)+("0"+parseInt(i[3],10).toString(16)).slice(-2):""}function y(i){var t=[i.r.toString(16),i.g.toString(16),i.b.toString(16)];return $.each(t,function(i,o){1===o.length&&(t[i]="0"+o)}),"#"+t.join("")}function C(i){return y(b(i))}function k(i){var t=M(x(i));return 0===t.s&&(t.h=360),t}function M(i){var t={h:0,s:0,b:0},o=Math.min(i.r,i.g,i.b),s=Math.max(i.r,i.g,i.b),a=s-o;return t.b=s,t.s=0!==s?255*a/s:0,0!==t.s?i.r===s?t.h=(i.g-i.b)/a:i.g===s?t.h=2+(i.b-i.r)/a:t.h=4+(i.r-i.g)/a:t.h=-1,t.h*=60,t.h<0&&(t.h+=360),t.s*=100/255,t.b*=100/255,t}function x(i){return i=parseInt(i.indexOf("#")>-1?i.substring(1):i,16),{r:i>>16,g:(65280&i)>>8,b:255&i}}$.minicolors={defaults:{animationSpeed:50,animationEasing:"swing",change:null,changeDelay:0,control:"hue",dataUris:!0,defaultValue:"",format:"hex",hide:null,hideSpeed:100,inline:!1,keywords:"",letterCase:"lowercase",opacity:!1,position:"bottom left",show:null,showSpeed:100,theme:"default",swatches:[]}},$.extend($.fn,{minicolors:function(a,n){switch(a){case"destroy":return $(this).each(function(){t($(this))}),$(this);case"hide":return s(),$(this);case"opacity":return void 0===n?$(this).attr("data-opacity"):($(this).each(function(){e($(this).attr("data-opacity",n))}),$(this));case"rgbObject":return l($(this),"rgbaObject"===a);case"rgbString":case"rgbaString":return h($(this),"rgbaString"===a);case"settings":return void 0===n?$(this).data("minicolors-settings"):($(this).each(function(){var i=$(this).data("minicolors-settings")||{};t($(this)),$(this).minicolors($.extend(!0,i,n))}),$(this));case"show":return o($(this).eq(0)),$(this);case"value":return void 0===n?$(this).val():($(this).each(function(){"object"==typeof n?(n.opacity&&$(this).attr("data-opacity",m(n.opacity,0,1)),n.color&&$(this).val(n.color)):$(this).val(n),e($(this))}),$(this));default:return"create"!==a&&(n=a),$(this).each(function(){i($(this),n)}),$(this)}}}),$(document).on("mousedown.minicolors touchstart.minicolors",function(i){$(i.target).parents().add(i.target).hasClass("minicolors")||s()}).on("mousedown.minicolors touchstart.minicolors",".minicolors-grid, .minicolors-slider, .minicolors-opacity-slider",function(i){var t=$(this);i.preventDefault(),$(document).data("minicolors-target",t),a(t,i,!0)}).on("mousemove.minicolors touchmove.minicolors",function(i){var t=$(document).data("minicolors-target");t&&a(t,i)}).on("mouseup.minicolors touchend.minicolors",function(){$(this).removeData("minicolors-target")}).on("click.minicolors",".minicolors-swatches li",function(i){i.preventDefault();var t=$(this),o=t.parents(".minicolors").find(".minicolors-input"),s=t.data("swatch-color");r(o,s,v(s)),e(o)}).on("mousedown.minicolors touchstart.minicolors",".minicolors-input-swatch",function(i){var t=$(this).parent().find(".minicolors-input");i.preventDefault(),o(t)}).on("focus.minicolors",".minicolors-input",function(){var i=$(this);i.data("minicolors-initialized")&&o(i)}).on("blur.minicolors",".minicolors-input",function(){var i=$(this),t=i.data("minicolors-settings"),o,s,a,n,r;i.data("minicolors-initialized")&&(o=t.keywords?$.map(t.keywords.split(","),function(i){return $.trim(i.toLowerCase())}):[],""!==i.val()&&$.inArray(i.val().toLowerCase(),o)>-1?r=i.val():(f(i.val())?a=u(i.val(),!0):(s=p(i.val(),!0),a=s?x(s):null),r=null===a?t.defaultValue:"rgb"===t.format?u(t.opacity?"rgba("+a.r+","+a.g+","+a.b+","+i.attr("data-opacity")+")":"rgb("+a.r+","+a.g+","+a.b+")"):y(a)),n=t.opacity?i.attr("data-opacity"):1,"transparent"===r.toLowerCase()&&(n=0),i.closest(".minicolors").find(".minicolors-input-swatch > span").css("opacity",n),i.val(r),""===i.val()&&i.val(g(t.defaultValue,!0)),i.val(d(i.val(),t.letterCase)))}).on("keydown.minicolors",".minicolors-input",function(i){var t=$(this);if(t.data("minicolors-initialized"))switch(i.keyCode){case 9:s();break;case 13:case 27:s(),t.blur()}}).on("keyup.minicolors",".minicolors-input",function(){var i=$(this);i.data("minicolors-initialized")&&e(i,!0)}).on("paste.minicolors",".minicolors-input",function(){var i=$(this);i.data("minicolors-initialized")&&setTimeout(function(){e(i,!0)},1)})});;/*
 * @license
 *
 * Multiselect v2.3.1
 * http://crlcu.github.io/multiselect/
 *
 * Copyright (c) 2016 Adrian Crisan
 * Licensed under the MIT license (https://github.com/crlcu/multiselect/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw Error("multiselect requires jQuery");(function($){"use strict";var version=$.fn.jquery.split(" ")[0].split(".");if(2>version[0]&&7>version[1])throw Error("multiselect requires jQuery version 1.7 or higher")})(jQuery),function(factory){"function"==typeof define&&define.amd?define(["jquery"],factory):factory(jQuery)}(function($){"use strict";var Multiselect=function($){function Multiselect($select,settings){var id=$select.prop("id");this.$left=$select,this.$right=$(settings.right).length?$(settings.right):$("#"+id+"_to"),this.actions={$leftAll:$(settings.leftAll).length?$(settings.leftAll):$("#"+id+"_leftAll"),$rightAll:$(settings.rightAll).length?$(settings.rightAll):$("#"+id+"_rightAll"),$leftSelected:$(settings.leftSelected).length?$(settings.leftSelected):$("#"+id+"_leftSelected"),$rightSelected:$(settings.rightSelected).length?$(settings.rightSelected):$("#"+id+"_rightSelected"),$undo:$(settings.undo).length?$(settings.undo):$("#"+id+"_undo"),$redo:$(settings.redo).length?$(settings.redo):$("#"+id+"_redo"),$moveUp:$(settings.moveUp).length?$(settings.moveUp):$("#"+id+"_move_up"),$moveDown:$(settings.moveDown).length?$(settings.moveDown):$("#"+id+"_move_down")},delete settings.leftAll,delete settings.leftSelected,delete settings.right,delete settings.rightAll,delete settings.rightSelected,delete settings.undo,delete settings.redo,delete settings.moveUp,delete settings.moveDown,this.options={keepRenderingSort:settings.keepRenderingSort,submitAllLeft:void 0!==settings.submitAllLeft?settings.submitAllLeft:!0,submitAllRight:void 0!==settings.submitAllRight?settings.submitAllRight:!0,search:settings.search,ignoreDisabled:void 0!==settings.ignoreDisabled?settings.ignoreDisabled:!1},delete settings.keepRenderingSort,settings.submitAllLeft,settings.submitAllRight,settings.search,settings.ignoreDisabled,this.callbacks=settings,this.init()}return Multiselect.prototype={init:function(){var self=this;self.undoStack=[],self.redoStack=[],(self.$left.find("optgroup").length||self.$right.find("optgroup").length)&&(self.callbacks.sort=!1),self.options.keepRenderingSort&&(self.skipInitSort=!0,self.callbacks.sort!==!1&&(self.callbacks.sort=function(a,b){return $(a).data("position")>$(b).data("position")?1:-1}),self.$left.find("option").each(function(index,option){$(option).data("position",index)}),self.$right.find("option").each(function(index,option){$(option).data("position",index)})),"function"==typeof self.callbacks.startUp&&self.callbacks.startUp(self.$left,self.$right),self.skipInitSort||"function"!=typeof self.callbacks.sort||(self.$left.mSort(self.callbacks.sort),self.$right.each(function(i,select){$(select).mSort(self.callbacks.sort)})),self.options.search&&self.options.search.left&&(self.options.search.$left=$(self.options.search.left),self.$left.before(self.options.search.$left)),self.options.search&&self.options.search.right&&(self.options.search.$right=$(self.options.search.right),self.$right.before($(self.options.search.$right))),self.events()},events:function(){var self=this;self.options.search&&self.options.search.$left&&self.options.search.$left.on("keyup",function(){this.value?(self.$left.find('option:search("'+this.value+'")').mShow(),self.$left.find('option:not(:search("'+this.value+'"))').mHide(),self.$left.find("option.hidden").parent("optgroup").not($(":visible").parent()).mHide(),self.$left.find("option:not(.hidden)").parent("optgroup").mShow()):self.$left.find("option, optgroup").mShow()}),self.options.search&&self.options.search.$right&&self.options.search.$right.on("keyup",function(){this.value?(self.$right.find('option:search("'+this.value+'")').mShow(),self.$right.find('option:not(:search("'+this.value+'"))').mHide(),self.$right.find("option.hidden").parent("optgroup").not($(":visible").parent()).mHide(),self.$right.find("option:not(.hidden)").parent("optgroup").mShow()):self.$right.find("option, optgroup").mShow()}),self.$right.closest("form").on("submit",function(){self.$left.find("option").prop("selected",self.options.submitAllLeft),self.$right.find("option").prop("selected",self.options.submitAllRight)}),self.$left.on("dblclick","option",function(e){e.preventDefault();var $options=self.$left.find("option:selected");$options.length&&self.moveToRight($options,e)}),self.$left.on("keypress",function(e){if(13===e.keyCode){e.preventDefault();var $options=self.$left.find("option:selected");$options.length&&self.moveToRight($options,e)}}),self.$right.on("dblclick","option",function(e){e.preventDefault();var $options=self.$right.find("option:selected");$options.length&&self.moveToLeft($options,e)}),self.$right.on("keydown",function(e){if(8===e.keyCode||46===e.keyCode){e.preventDefault();var $options=self.$right.find("option:selected");$options.length&&self.moveToLeft($options,e)}}),(navigator.userAgent.match(/MSIE/i)||navigator.userAgent.indexOf("Trident/")>0||navigator.userAgent.indexOf("Edge/")>0)&&(self.$left.dblclick(function(){self.actions.$rightSelected.trigger("click")}),self.$right.dblclick(function(){self.actions.$leftSelected.trigger("click")})),self.actions.$rightSelected.on("click",function(e){e.preventDefault();var $options=self.$left.find("option:selected");$options.length&&self.moveToRight($options,e),$(this).blur()}),self.actions.$leftSelected.on("click",function(e){e.preventDefault();var $options=self.$right.find("option:selected");$options.length&&self.moveToLeft($options,e),$(this).blur()}),self.actions.$rightAll.on("click",function(e){e.preventDefault();var $options=self.$left.children(":not(span):not(.hidden)");$options.length&&self.moveToRight($options,e),$(this).blur()}),self.actions.$leftAll.on("click",function(e){e.preventDefault();var $options=self.$right.children(":not(span):not(.hidden)");$options.length&&self.moveToLeft($options,e),$(this).blur()}),self.actions.$undo.on("click",function(e){e.preventDefault(),self.undo(e)}),self.actions.$redo.on("click",function(e){e.preventDefault(),self.redo(e)}),self.actions.$moveUp.on("click",function(e){e.preventDefault(),self.doNotSortRight=!0;var $options=self.$right.find(":selected:not(span):not(.hidden)");$options.first().prev().before($options),$(this).blur()}),self.actions.$moveDown.on("click",function(e){e.preventDefault(),self.doNotSortRight=!0;var $options=self.$right.find(":selected:not(span):not(.hidden)");$options.last().next().after($options),$(this).blur()})},moveToRight:function($options,event,silent,skipStack){var self=this;return"function"==typeof self.callbacks.moveToRight?self.callbacks.moveToRight(self,$options,event,silent,skipStack):"function"!=typeof self.callbacks.beforeMoveToRight||silent||self.callbacks.beforeMoveToRight(self.$left,self.$right,$options)?($options.each(function(index,option){var $option=$(option);if(self.options.ignoreDisabled&&$option.is(":disabled"))return!0;if($option.parent().is("optgroup")){var $leftGroup=$option.parent(),$rightGroup=self.$right.find('optgroup[label="'+$leftGroup.prop("label")+'"]');$rightGroup.length||($rightGroup=$leftGroup.clone(),$rightGroup.children().remove()),$option=$rightGroup.append($option),$leftGroup.removeIfEmpty()}self.$right.move($option)}),skipStack||(self.undoStack.push(["right",$options]),self.redoStack=[]),"function"!=typeof self.callbacks.sort||silent||self.doNotSortRight||self.$right.mSort(self.callbacks.sort),"function"!=typeof self.callbacks.afterMoveToRight||silent||self.callbacks.afterMoveToRight(self.$left,self.$right,$options),self):!1},moveToLeft:function($options,event,silent,skipStack){var self=this;return"function"==typeof self.callbacks.moveToLeft?self.callbacks.moveToLeft(self,$options,event,silent,skipStack):"function"!=typeof self.callbacks.beforeMoveToLeft||silent||self.callbacks.beforeMoveToLeft(self.$left,self.$right,$options)?($options.each(function(index,option){var $option=$(option);if($option.is("optgroup")||$option.parent().is("optgroup")){var $rightGroup=$option.is("optgroup")?$option:$option.parent(),$leftGroup=self.$left.find('optgroup[label="'+$rightGroup.prop("label")+'"]');$leftGroup.length||($leftGroup=$rightGroup.clone(),$leftGroup.children().remove()),$option=$leftGroup.append($option.is("optgroup")?$option.children():$option),$rightGroup.removeIfEmpty()}self.$left.move($option)}),skipStack||(self.undoStack.push(["left",$options]),self.redoStack=[]),"function"!=typeof self.callbacks.sort||silent||self.$left.mSort(self.callbacks.sort),"function"!=typeof self.callbacks.afterMoveToLeft||silent||self.callbacks.afterMoveToLeft(self.$left,self.$right,$options),self):!1},undo:function(event){var self=this,last=self.undoStack.pop();if(last)switch(self.redoStack.push(last),last[0]){case"left":self.moveToRight(last[1],event,!1,!0);break;case"right":self.moveToLeft(last[1],event,!1,!0)}},redo:function(event){var self=this,last=self.redoStack.pop();if(last)switch(self.undoStack.push(last),last[0]){case"left":self.moveToLeft(last[1],event,!1,!0);break;case"right":self.moveToRight(last[1],event,!1,!0)}}},Multiselect}($);$.multiselect={defaults:{startUp:function($left,$right){$right.find("option").each(function(index,option){var $option=$left.find('option[value="'+option.value+'"]'),$parent=$option.parent();$option.remove(),"OPTGROUP"==$parent.prop("tagName")&&$parent.removeIfEmpty()})},beforeMoveToRight:function(){return!0},afterMoveToRight:function(){},beforeMoveToLeft:function(){return!0},afterMoveToLeft:function(){},sort:function(a,b){return"NA"==a.innerHTML?1:"NA"==b.innerHTML?-1:a.innerHTML>b.innerHTML?1:-1}}};var ua=window.navigator.userAgent,isIE=ua.indexOf("MSIE ")+ua.indexOf("Trident/")+ua.indexOf("Edge/")>-3;$.fn.multiselect=function(options){return this.each(function(){var $this=$(this),data=$this.data("crlcu.multiselect"),settings=$.extend({},$.multiselect.defaults,$this.data(),"object"==typeof options&&options);data||$this.data("crlcu.multiselect",data=new Multiselect($this,settings))})},$.fn.move=function($options){return this.append($options).find("option").prop("selected",!1),this},$.fn.removeIfEmpty=function(){return this.children().length||this.remove(),this},$.fn.mShow=function(){return this.removeClass("hidden").show(),isIE&&this.each(function(index,option){$(option).parent().is("span")&&$(option).parent().replaceWith(option),$(option).show()}),this},$.fn.mHide=function(){return this.addClass("hidden").hide(),isIE&&this.each(function(index,option){$(option).parent().is("span")||$(option).wrap("<span>").hide()}),this},$.fn.mSort=function(callback){return this.find("option").sort(callback).appendTo(this),this},$.expr[":"].search=function(elem,index,meta){return $(elem).text().toUpperCase().indexOf(meta[3].toUpperCase())>=0}});
;/*! selectize.js - v0.12.4 | https://github.com/selectize/selectize.js | Apache License (v2) */
!function(a,b){"function"==typeof define&&define.amd?define("sifter",b):"object"==typeof exports?module.exports=b():a.Sifter=b()}(this,function(){var a=function(a,b){this.items=a,this.settings=b||{diacritics:!0}};a.prototype.tokenize=function(a){if(a=e(String(a||"").toLowerCase()),!a||!a.length)return[];var b,c,d,g,i=[],j=a.split(/ +/);for(b=0,c=j.length;b<c;b++){if(d=f(j[b]),this.settings.diacritics)for(g in h)h.hasOwnProperty(g)&&(d=d.replace(new RegExp(g,"g"),h[g]));i.push({string:j[b],regex:new RegExp(d,"i")})}return i},a.prototype.iterator=function(a,b){var c;c=g(a)?Array.prototype.forEach||function(a){for(var b=0,c=this.length;b<c;b++)a(this[b],b,this)}:function(a){for(var b in this)this.hasOwnProperty(b)&&a(this[b],b,this)},c.apply(a,[b])},a.prototype.getScoreFunction=function(a,b){var c,e,f,g,h;c=this,a=c.prepareSearch(a,b),f=a.tokens,e=a.options.fields,g=f.length,h=a.options.nesting;var i=function(a,b){var c,d;return a?(a=String(a||""),d=a.search(b.regex),d===-1?0:(c=b.string.length/a.length,0===d&&(c+=.5),c)):0},j=function(){var a=e.length;return a?1===a?function(a,b){return i(d(b,e[0],h),a)}:function(b,c){for(var f=0,g=0;f<a;f++)g+=i(d(c,e[f],h),b);return g/a}:function(){return 0}}();return g?1===g?function(a){return j(f[0],a)}:"and"===a.options.conjunction?function(a){for(var b,c=0,d=0;c<g;c++){if(b=j(f[c],a),b<=0)return 0;d+=b}return d/g}:function(a){for(var b=0,c=0;b<g;b++)c+=j(f[b],a);return c/g}:function(){return 0}},a.prototype.getSortFunction=function(a,c){var e,f,g,h,i,j,k,l,m,n,o;if(g=this,a=g.prepareSearch(a,c),o=!a.query&&c.sort_empty||c.sort,m=function(a,b){return"$score"===a?b.score:d(g.items[b.id],a,c.nesting)},i=[],o)for(e=0,f=o.length;e<f;e++)(a.query||"$score"!==o[e].field)&&i.push(o[e]);if(a.query){for(n=!0,e=0,f=i.length;e<f;e++)if("$score"===i[e].field){n=!1;break}n&&i.unshift({field:"$score",direction:"desc"})}else for(e=0,f=i.length;e<f;e++)if("$score"===i[e].field){i.splice(e,1);break}for(l=[],e=0,f=i.length;e<f;e++)l.push("desc"===i[e].direction?-1:1);return j=i.length,j?1===j?(h=i[0].field,k=l[0],function(a,c){return k*b(m(h,a),m(h,c))}):function(a,c){var d,e,f;for(d=0;d<j;d++)if(f=i[d].field,e=l[d]*b(m(f,a),m(f,c)))return e;return 0}:null},a.prototype.prepareSearch=function(a,b){if("object"==typeof a)return a;b=c({},b);var d=b.fields,e=b.sort,f=b.sort_empty;return d&&!g(d)&&(b.fields=[d]),e&&!g(e)&&(b.sort=[e]),f&&!g(f)&&(b.sort_empty=[f]),{options:b,query:String(a||"").toLowerCase(),tokens:this.tokenize(a),total:0,items:[]}},a.prototype.search=function(a,b){var c,d,e,f,g=this;return d=this.prepareSearch(a,b),b=d.options,a=d.query,f=b.score||g.getScoreFunction(d),a.length?g.iterator(g.items,function(a,e){c=f(a),(b.filter===!1||c>0)&&d.items.push({score:c,id:e})}):g.iterator(g.items,function(a,b){d.items.push({score:1,id:b})}),e=g.getSortFunction(d,b),e&&d.items.sort(e),d.total=d.items.length,"number"==typeof b.limit&&(d.items=d.items.slice(0,b.limit)),d};var b=function(a,b){return"number"==typeof a&&"number"==typeof b?a>b?1:a<b?-1:0:(a=i(String(a||"")),b=i(String(b||"")),a>b?1:b>a?-1:0)},c=function(a,b){var c,d,e,f;for(c=1,d=arguments.length;c<d;c++)if(f=arguments[c])for(e in f)f.hasOwnProperty(e)&&(a[e]=f[e]);return a},d=function(a,b,c){if(a&&b){if(!c)return a[b];for(var d=b.split(".");d.length&&(a=a[d.shift()]););return a}},e=function(a){return(a+"").replace(/^\s+|\s+$|/g,"")},f=function(a){return(a+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},g=Array.isArray||"undefined"!=typeof $&&$.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},h={a:"[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]",b:"[b␢βΒB฿𐌁ᛒ]",c:"[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]",d:"[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]",e:"[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]",f:"[fƑƒḞḟ]",g:"[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]",h:"[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]",i:"[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]",j:"[jȷĴĵɈɉʝɟʲ]",k:"[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]",l:"[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]",n:"[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]",o:"[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]",p:"[pṔṕṖṗⱣᵽƤƥᵱ]",q:"[qꝖꝗʠɊɋꝘꝙq̃]",r:"[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]",s:"[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]",t:"[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]",u:"[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]",v:"[vṼṽṾṿƲʋꝞꝟⱱʋ]",w:"[wẂẃẀẁŴŵẄẅẆẇẈẉ]",x:"[xẌẍẊẋχ]",y:"[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]",z:"[zŹźẐẑŽžŻżẒẓẔẕƵƶ]"},i=function(){var a,b,c,d,e="",f={};for(c in h)if(h.hasOwnProperty(c))for(d=h[c].substring(2,h[c].length-1),e+=d,a=0,b=d.length;a<b;a++)f[d.charAt(a)]=c;var g=new RegExp("["+e+"]","g");return function(a){return a.replace(g,function(a){return f[a]}).toLowerCase()}}();return a}),function(a,b){"function"==typeof define&&define.amd?define("microplugin",b):"object"==typeof exports?module.exports=b():a.MicroPlugin=b()}(this,function(){var a={};a.mixin=function(a){a.plugins={},a.prototype.initializePlugins=function(a){var c,d,e,f=this,g=[];if(f.plugins={names:[],settings:{},requested:{},loaded:{}},b.isArray(a))for(c=0,d=a.length;c<d;c++)"string"==typeof a[c]?g.push(a[c]):(f.plugins.settings[a[c].name]=a[c].options,g.push(a[c].name));else if(a)for(e in a)a.hasOwnProperty(e)&&(f.plugins.settings[e]=a[e],g.push(e));for(;g.length;)f.require(g.shift())},a.prototype.loadPlugin=function(b){var c=this,d=c.plugins,e=a.plugins[b];if(!a.plugins.hasOwnProperty(b))throw new Error('Unable to find "'+b+'" plugin');d.requested[b]=!0,d.loaded[b]=e.fn.apply(c,[c.plugins.settings[b]||{}]),d.names.push(b)},a.prototype.require=function(a){var b=this,c=b.plugins;if(!b.plugins.loaded.hasOwnProperty(a)){if(c.requested[a])throw new Error('Plugin has circular dependency ("'+a+'")');b.loadPlugin(a)}return c.loaded[a]},a.define=function(b,c){a.plugins[b]={name:b,fn:c}}};var b={isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)}};return a}),function(a,b){"function"==typeof define&&define.amd?define("selectize",["jquery","sifter","microplugin"],b):"object"==typeof exports?module.exports=b(require("jquery"),require("sifter"),require("microplugin")):a.Selectize=b(a.jQuery,a.Sifter,a.MicroPlugin)}(this,function(a,b,c){"use strict";var d=function(a,b){if("string"!=typeof b||b.length){var c="string"==typeof b?new RegExp(b,"i"):b,d=function(a){var b=0;if(3===a.nodeType){var e=a.data.search(c);if(e>=0&&a.data.length>0){var f=a.data.match(c),g=document.createElement("span");g.className="highlight";var h=a.splitText(e),i=(h.splitText(f[0].length),h.cloneNode(!0));g.appendChild(i),h.parentNode.replaceChild(g,h),b=1}}else if(1===a.nodeType&&a.childNodes&&!/(script|style)/i.test(a.tagName))for(var j=0;j<a.childNodes.length;++j)j+=d(a.childNodes[j]);return b};return a.each(function(){d(this)})}};a.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;var a=this.parentNode;a.replaceChild(this.firstChild,this),a.normalize()}).end()};var e=function(){};e.prototype={on:function(a,b){this._events=this._events||{},this._events[a]=this._events[a]||[],this._events[a].push(b)},off:function(a,b){var c=arguments.length;return 0===c?delete this._events:1===c?delete this._events[a]:(this._events=this._events||{},void(a in this._events!=!1&&this._events[a].splice(this._events[a].indexOf(b),1)))},trigger:function(a){if(this._events=this._events||{},a in this._events!=!1)for(var b=0;b<this._events[a].length;b++)this._events[a][b].apply(this,Array.prototype.slice.call(arguments,1))}},e.mixin=function(a){for(var b=["on","off","trigger"],c=0;c<b.length;c++)a.prototype[b[c]]=e.prototype[b[c]]};var f=/Mac/.test(navigator.userAgent),g=65,h=13,i=27,j=37,k=38,l=80,m=39,n=40,o=78,p=8,q=46,r=16,s=f?91:17,t=f?18:17,u=9,v=1,w=2,x=!/android/i.test(window.navigator.userAgent)&&!!document.createElement("input").validity,y=function(a){return"undefined"!=typeof a},z=function(a){return"undefined"==typeof a||null===a?null:"boolean"==typeof a?a?"1":"0":a+""},A=function(a){return(a+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},B={};B.before=function(a,b,c){var d=a[b];a[b]=function(){return c.apply(a,arguments),d.apply(a,arguments)}},B.after=function(a,b,c){var d=a[b];a[b]=function(){var b=d.apply(a,arguments);return c.apply(a,arguments),b}};var C=function(a){var b=!1;return function(){b||(b=!0,a.apply(this,arguments))}},D=function(a,b){var c;return function(){var d=this,e=arguments;window.clearTimeout(c),c=window.setTimeout(function(){a.apply(d,e)},b)}},E=function(a,b,c){var d,e=a.trigger,f={};a.trigger=function(){var c=arguments[0];return b.indexOf(c)===-1?e.apply(a,arguments):void(f[c]=arguments)},c.apply(a,[]),a.trigger=e;for(d in f)f.hasOwnProperty(d)&&e.apply(a,f[d])},F=function(a,b,c,d){a.on(b,c,function(b){for(var c=b.target;c&&c.parentNode!==a[0];)c=c.parentNode;return b.currentTarget=c,d.apply(this,[b])})},G=function(a){var b={};if("selectionStart"in a)b.start=a.selectionStart,b.length=a.selectionEnd-b.start;else if(document.selection){a.focus();var c=document.selection.createRange(),d=document.selection.createRange().text.length;c.moveStart("character",-a.value.length),b.start=c.text.length-d,b.length=d}return b},H=function(a,b,c){var d,e,f={};if(c)for(d=0,e=c.length;d<e;d++)f[c[d]]=a.css(c[d]);else f=a.css();b.css(f)},I=function(b,c){if(!b)return 0;var d=a("<test>").css({position:"absolute",top:-99999,left:-99999,width:"auto",padding:0,whiteSpace:"pre"}).text(b).appendTo("body");H(c,d,["letterSpacing","fontSize","fontFamily","fontWeight","textTransform"]);var e=d.width();return d.remove(),e},J=function(a){var b=null,c=function(c,d){var e,f,g,h,i,j,k,l;c=c||window.event||{},d=d||{},c.metaKey||c.altKey||(d.force||a.data("grow")!==!1)&&(e=a.val(),c.type&&"keydown"===c.type.toLowerCase()&&(f=c.keyCode,g=f>=97&&f<=122||f>=65&&f<=90||f>=48&&f<=57||32===f,f===q||f===p?(l=G(a[0]),l.length?e=e.substring(0,l.start)+e.substring(l.start+l.length):f===p&&l.start?e=e.substring(0,l.start-1)+e.substring(l.start+1):f===q&&"undefined"!=typeof l.start&&(e=e.substring(0,l.start)+e.substring(l.start+1))):g&&(j=c.shiftKey,k=String.fromCharCode(c.keyCode),k=j?k.toUpperCase():k.toLowerCase(),e+=k)),h=a.attr("placeholder"),!e&&h&&(e=h),i=I(e,a)+4,i!==b&&(b=i,a.width(i),a.triggerHandler("resize")))};a.on("keydown keyup update blur",c),c()},K=function(a){var b=document.createElement("div");return b.appendChild(a.cloneNode(!0)),b.innerHTML},L=function(a,b){b||(b={});var c="Selectize";console.error(c+": "+a),b.explanation&&(console.group&&console.group(),console.error(b.explanation),console.group&&console.groupEnd())},M=function(c,d){var e,f,g,h,i=this;h=c[0],h.selectize=i;var j=window.getComputedStyle&&window.getComputedStyle(h,null);if(g=j?j.getPropertyValue("direction"):h.currentStyle&&h.currentStyle.direction,g=g||c.parents("[dir]:first").attr("dir")||"",a.extend(i,{order:0,settings:d,$input:c,tabIndex:c.attr("tabindex")||"",tagType:"select"===h.tagName.toLowerCase()?v:w,rtl:/rtl/i.test(g),eventNS:".selectize"+ ++M.count,highlightedValue:null,isOpen:!1,isDisabled:!1,isRequired:c.is("[required]"),isInvalid:!1,isLocked:!1,isFocused:!1,isInputHidden:!1,isSetup:!1,isShiftDown:!1,isCmdDown:!1,isCtrlDown:!1,ignoreFocus:!1,ignoreBlur:!1,ignoreHover:!1,hasOptions:!1,currentResults:null,lastValue:"",caretPos:0,loading:0,loadedSearches:{},$activeOption:null,$activeItems:[],optgroups:{},options:{},userOptions:{},items:[],renderCache:{},onSearchChange:null===d.loadThrottle?i.onSearchChange:D(i.onSearchChange,d.loadThrottle)}),i.sifter=new b(this.options,{diacritics:d.diacritics}),i.settings.options){for(e=0,f=i.settings.options.length;e<f;e++)i.registerOption(i.settings.options[e]);delete i.settings.options}if(i.settings.optgroups){for(e=0,f=i.settings.optgroups.length;e<f;e++)i.registerOptionGroup(i.settings.optgroups[e]);delete i.settings.optgroups}i.settings.mode=i.settings.mode||(1===i.settings.maxItems?"single":"multi"),"boolean"!=typeof i.settings.hideSelected&&(i.settings.hideSelected="multi"===i.settings.mode),i.initializePlugins(i.settings.plugins),i.setupCallbacks(),i.setupTemplates(),i.setup()};return e.mixin(M),"undefined"!=typeof c?c.mixin(M):L("Dependency MicroPlugin is missing",{explanation:'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.'}),a.extend(M.prototype,{setup:function(){var b,c,d,e,g,h,i,j,k,l,m=this,n=m.settings,o=m.eventNS,p=a(window),q=a(document),u=m.$input;if(i=m.settings.mode,j=u.attr("class")||"",b=a("<div>").addClass(n.wrapperClass).addClass(j).addClass(i),c=a("<div>").addClass(n.inputClass).addClass("items").appendTo(b),d=a('<input type="text" autocomplete="off" />').appendTo(c).attr("tabindex",u.is(":disabled")?"-1":m.tabIndex),h=a(n.dropdownParent||b),e=a("<div>").addClass(n.dropdownClass).addClass(i).hide().appendTo(h),g=a("<div>").addClass(n.dropdownContentClass).appendTo(e),(l=u.attr("id"))&&(d.attr("id",l+"-selectized"),a("label[for='"+l+"']").attr("for",l+"-selectized")),m.settings.copyClassesToDropdown&&e.addClass(j),b.css({width:u[0].style.width}),m.plugins.names.length&&(k="plugin-"+m.plugins.names.join(" plugin-"),b.addClass(k),e.addClass(k)),(null===n.maxItems||n.maxItems>1)&&m.tagType===v&&u.attr("multiple","multiple"),m.settings.placeholder&&d.attr("placeholder",n.placeholder),!m.settings.splitOn&&m.settings.delimiter){var w=m.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");m.settings.splitOn=new RegExp("\\s*"+w+"+\\s*")}u.attr("autocorrect")&&d.attr("autocorrect",u.attr("autocorrect")),u.attr("autocapitalize")&&d.attr("autocapitalize",u.attr("autocapitalize")),m.$wrapper=b,m.$control=c,m.$control_input=d,m.$dropdown=e,m.$dropdown_content=g,e.on("mouseenter","[data-selectable]",function(){return m.onOptionHover.apply(m,arguments)}),e.on("mousedown click","[data-selectable]",function(){return m.onOptionSelect.apply(m,arguments)}),F(c,"mousedown","*:not(input)",function(){return m.onItemSelect.apply(m,arguments)}),J(d),c.on({mousedown:function(){return m.onMouseDown.apply(m,arguments)},click:function(){return m.onClick.apply(m,arguments)}}),d.on({mousedown:function(a){a.stopPropagation()},keydown:function(){return m.onKeyDown.apply(m,arguments)},keyup:function(){return m.onKeyUp.apply(m,arguments)},keypress:function(){return m.onKeyPress.apply(m,arguments)},resize:function(){m.positionDropdown.apply(m,[])},blur:function(){return m.onBlur.apply(m,arguments)},focus:function(){return m.ignoreBlur=!1,m.onFocus.apply(m,arguments)},paste:function(){return m.onPaste.apply(m,arguments)}}),q.on("keydown"+o,function(a){m.isCmdDown=a[f?"metaKey":"ctrlKey"],m.isCtrlDown=a[f?"altKey":"ctrlKey"],m.isShiftDown=a.shiftKey}),q.on("keyup"+o,function(a){a.keyCode===t&&(m.isCtrlDown=!1),a.keyCode===r&&(m.isShiftDown=!1),a.keyCode===s&&(m.isCmdDown=!1)}),q.on("mousedown"+o,function(a){if(m.isFocused){if(a.target===m.$dropdown[0]||a.target.parentNode===m.$dropdown[0])return!1;m.$control.has(a.target).length||a.target===m.$control[0]||m.blur(a.target)}}),p.on(["scroll"+o,"resize"+o].join(" "),function(){m.isOpen&&m.positionDropdown.apply(m,arguments)}),p.on("mousemove"+o,function(){m.ignoreHover=!1}),this.revertSettings={$children:u.children().detach(),tabindex:u.attr("tabindex")},u.attr("tabindex",-1).hide().after(m.$wrapper),a.isArray(n.items)&&(m.setValue(n.items),delete n.items),x&&u.on("invalid"+o,function(a){a.preventDefault(),m.isInvalid=!0,m.refreshState()}),m.updateOriginalInput(),m.refreshItems(),m.refreshState(),m.updatePlaceholder(),m.isSetup=!0,u.is(":disabled")&&m.disable(),m.on("change",this.onChange),u.data("selectize",m),u.addClass("selectized"),m.trigger("initialize"),n.preload===!0&&m.onSearchChange("")},setupTemplates:function(){var b=this,c=b.settings.labelField,d=b.settings.optgroupLabelField,e={optgroup:function(a){return'<div class="optgroup">'+a.html+"</div>"},optgroup_header:function(a,b){return'<div class="optgroup-header">'+b(a[d])+"</div>"},option:function(a,b){return'<div class="option">'+b(a[c])+"</div>"},item:function(a,b){return'<div class="item">'+b(a[c])+"</div>"},option_create:function(a,b){return'<div class="create">Add <strong>'+b(a.input)+"</strong>&hellip;</div>"}};b.settings.render=a.extend({},e,b.settings.render)},setupCallbacks:function(){var a,b,c={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",optgroup_add:"onOptionGroupAdd",optgroup_remove:"onOptionGroupRemove",optgroup_clear:"onOptionGroupClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad",focus:"onFocus",blur:"onBlur"};for(a in c)c.hasOwnProperty(a)&&(b=this.settings[c[a]],b&&this.on(a,b))},onClick:function(a){var b=this;b.isFocused||(b.focus(),a.preventDefault())},onMouseDown:function(b){var c=this,d=b.isDefaultPrevented();a(b.target);if(c.isFocused){if(b.target!==c.$control_input[0])return"single"===c.settings.mode?c.isOpen?c.close():c.open():d||c.setActiveItem(null),!1}else d||window.setTimeout(function(){c.focus()},0)},onChange:function(){this.$input.trigger("change")},onPaste:function(b){var c=this;return c.isFull()||c.isInputHidden||c.isLocked?void b.preventDefault():void(c.settings.splitOn&&setTimeout(function(){var b=c.$control_input.val();if(b.match(c.settings.splitOn))for(var d=a.trim(b).split(c.settings.splitOn),e=0,f=d.length;e<f;e++)c.createItem(d[e])},0))},onKeyPress:function(a){if(this.isLocked)return a&&a.preventDefault();var b=String.fromCharCode(a.keyCode||a.which);return this.settings.create&&"multi"===this.settings.mode&&b===this.settings.delimiter?(this.createItem(),a.preventDefault(),!1):void 0},onKeyDown:function(a){var b=(a.target===this.$control_input[0],this);if(b.isLocked)return void(a.keyCode!==u&&a.preventDefault());switch(a.keyCode){case g:if(b.isCmdDown)return void b.selectAll();break;case i:return void(b.isOpen&&(a.preventDefault(),a.stopPropagation(),b.close()));case o:if(!a.ctrlKey||a.altKey)break;case n:if(!b.isOpen&&b.hasOptions)b.open();else if(b.$activeOption){b.ignoreHover=!0;var c=b.getAdjacentOption(b.$activeOption,1);c.length&&b.setActiveOption(c,!0,!0)}return void a.preventDefault();case l:if(!a.ctrlKey||a.altKey)break;case k:if(b.$activeOption){b.ignoreHover=!0;var d=b.getAdjacentOption(b.$activeOption,-1);d.length&&b.setActiveOption(d,!0,!0)}return void a.preventDefault();case h:return void(b.isOpen&&b.$activeOption&&(b.onOptionSelect({currentTarget:b.$activeOption}),a.preventDefault()));case j:return void b.advanceSelection(-1,a);case m:return void b.advanceSelection(1,a);case u:return b.settings.selectOnTab&&b.isOpen&&b.$activeOption&&(b.onOptionSelect({currentTarget:b.$activeOption}),b.isFull()||a.preventDefault()),void(b.settings.create&&b.createItem()&&a.preventDefault());case p:case q:return void b.deleteSelection(a)}return!b.isFull()&&!b.isInputHidden||(f?a.metaKey:a.ctrlKey)?void 0:void a.preventDefault()},onKeyUp:function(a){var b=this;if(b.isLocked)return a&&a.preventDefault();var c=b.$control_input.val()||"";b.lastValue!==c&&(b.lastValue=c,b.onSearchChange(c),b.refreshOptions(),b.trigger("type",c))},onSearchChange:function(a){var b=this,c=b.settings.load;c&&(b.loadedSearches.hasOwnProperty(a)||(b.loadedSearches[a]=!0,b.load(function(d){c.apply(b,[a,d])})))},onFocus:function(a){var b=this,c=b.isFocused;return b.isDisabled?(b.blur(),a&&a.preventDefault(),!1):void(b.ignoreFocus||(b.isFocused=!0,"focus"===b.settings.preload&&b.onSearchChange(""),c||b.trigger("focus"),b.$activeItems.length||(b.showInput(),b.setActiveItem(null),b.refreshOptions(!!b.settings.openOnFocus)),b.refreshState()))},onBlur:function(a,b){var c=this;if(c.isFocused&&(c.isFocused=!1,!c.ignoreFocus)){if(!c.ignoreBlur&&document.activeElement===c.$dropdown_content[0])return c.ignoreBlur=!0,void c.onFocus(a);var d=function(){c.close(),c.setTextboxValue(""),c.setActiveItem(null),c.setActiveOption(null),c.setCaret(c.items.length),c.refreshState(),b&&b.focus&&b.focus(),c.ignoreFocus=!1,c.trigger("blur")};c.ignoreFocus=!0,c.settings.create&&c.settings.createOnBlur?c.createItem(null,!1,d):d()}},onOptionHover:function(a){this.ignoreHover||this.setActiveOption(a.currentTarget,!1)},onOptionSelect:function(b){var c,d,e=this;b.preventDefault&&(b.preventDefault(),b.stopPropagation()),d=a(b.currentTarget),d.hasClass("create")?e.createItem(null,function(){e.settings.closeAfterSelect&&e.close()}):(c=d.attr("data-value"),"undefined"!=typeof c&&(e.lastQuery=null,e.setTextboxValue(""),e.addItem(c),e.settings.closeAfterSelect?e.close():!e.settings.hideSelected&&b.type&&/mouse/.test(b.type)&&e.setActiveOption(e.getOption(c))))},onItemSelect:function(a){var b=this;b.isLocked||"multi"===b.settings.mode&&(a.preventDefault(),b.setActiveItem(a.currentTarget,a))},load:function(a){var b=this,c=b.$wrapper.addClass(b.settings.loadingClass);b.loading++,a.apply(b,[function(a){b.loading=Math.max(b.loading-1,0),a&&a.length&&(b.addOption(a),b.refreshOptions(b.isFocused&&!b.isInputHidden)),b.loading||c.removeClass(b.settings.loadingClass),b.trigger("load",a)}])},setTextboxValue:function(a){var b=this.$control_input,c=b.val()!==a;c&&(b.val(a).triggerHandler("update"),this.lastValue=a)},getValue:function(){return this.tagType===v&&this.$input.attr("multiple")?this.items:this.items.join(this.settings.delimiter)},setValue:function(a,b){var c=b?[]:["change"];E(this,c,function(){this.clear(b),this.addItems(a,b)})},setActiveItem:function(b,c){var d,e,f,g,h,i,j,k,l=this;if("single"!==l.settings.mode){if(b=a(b),!b.length)return a(l.$activeItems).removeClass("active"),l.$activeItems=[],void(l.isFocused&&l.showInput());if(d=c&&c.type.toLowerCase(),"mousedown"===d&&l.isShiftDown&&l.$activeItems.length){for(k=l.$control.children(".active:last"),g=Array.prototype.indexOf.apply(l.$control[0].childNodes,[k[0]]),h=Array.prototype.indexOf.apply(l.$control[0].childNodes,[b[0]]),g>h&&(j=g,g=h,h=j),e=g;e<=h;e++)i=l.$control[0].childNodes[e],l.$activeItems.indexOf(i)===-1&&(a(i).addClass("active"),l.$activeItems.push(i));c.preventDefault()}else"mousedown"===d&&l.isCtrlDown||"keydown"===d&&this.isShiftDown?b.hasClass("active")?(f=l.$activeItems.indexOf(b[0]),l.$activeItems.splice(f,1),b.removeClass("active")):l.$activeItems.push(b.addClass("active")[0]):(a(l.$activeItems).removeClass("active"),l.$activeItems=[b.addClass("active")[0]]);l.hideInput(),this.isFocused||l.focus()}},setActiveOption:function(b,c,d){var e,f,g,h,i,j=this;j.$activeOption&&j.$activeOption.removeClass("active"),j.$activeOption=null,b=a(b),b.length&&(j.$activeOption=b.addClass("active"),!c&&y(c)||(e=j.$dropdown_content.height(),f=j.$activeOption.outerHeight(!0),c=j.$dropdown_content.scrollTop()||0,g=j.$activeOption.offset().top-j.$dropdown_content.offset().top+c,h=g,i=g-e+f,g+f>e+c?j.$dropdown_content.stop().animate({scrollTop:i},d?j.settings.scrollDuration:0):g<c&&j.$dropdown_content.stop().animate({scrollTop:h},d?j.settings.scrollDuration:0)))},selectAll:function(){var a=this;"single"!==a.settings.mode&&(a.$activeItems=Array.prototype.slice.apply(a.$control.children(":not(input)").addClass("active")),a.$activeItems.length&&(a.hideInput(),a.close()),a.focus())},hideInput:function(){var a=this;a.setTextboxValue(""),a.$control_input.css({opacity:0,position:"absolute",left:a.rtl?1e4:-1e4}),a.isInputHidden=!0},showInput:function(){this.$control_input.css({opacity:1,position:"relative",left:0}),this.isInputHidden=!1},focus:function(){var a=this;a.isDisabled||(a.ignoreFocus=!0,a.$control_input[0].focus(),window.setTimeout(function(){a.ignoreFocus=!1,a.onFocus()},0))},blur:function(a){this.$control_input[0].blur(),this.onBlur(null,a)},getScoreFunction:function(a){return this.sifter.getScoreFunction(a,this.getSearchOptions())},getSearchOptions:function(){var a=this.settings,b=a.sortField;return"string"==typeof b&&(b=[{field:b}]),{fields:a.searchField,conjunction:a.searchConjunction,sort:b}},search:function(b){var c,d,e,f=this,g=f.settings,h=this.getSearchOptions();if(g.score&&(e=f.settings.score.apply(this,[b]),"function"!=typeof e))throw new Error('Selectize "score" setting must be a function that returns a function');if(b!==f.lastQuery?(f.lastQuery=b,d=f.sifter.search(b,a.extend(h,{score:e})),f.currentResults=d):d=a.extend(!0,{},f.currentResults),g.hideSelected)for(c=d.items.length-1;c>=0;c--)f.items.indexOf(z(d.items[c].id))!==-1&&d.items.splice(c,1);return d},refreshOptions:function(b){var c,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;"undefined"==typeof b&&(b=!0);var t=this,u=a.trim(t.$control_input.val()),v=t.search(u),w=t.$dropdown_content,x=t.$activeOption&&z(t.$activeOption.attr("data-value"));for(g=v.items.length,"number"==typeof t.settings.maxOptions&&(g=Math.min(g,t.settings.maxOptions)),h={},i=[],c=0;c<g;c++)for(j=t.options[v.items[c].id],k=t.render("option",j),l=j[t.settings.optgroupField]||"",m=a.isArray(l)?l:[l],e=0,f=m&&m.length;e<f;e++)l=m[e],t.optgroups.hasOwnProperty(l)||(l=""),h.hasOwnProperty(l)||(h[l]=document.createDocumentFragment(),i.push(l)),h[l].appendChild(k);for(this.settings.lockOptgroupOrder&&i.sort(function(a,b){var c=t.optgroups[a].$order||0,d=t.optgroups[b].$order||0;return c-d}),n=document.createDocumentFragment(),c=0,g=i.length;c<g;c++)l=i[c],t.optgroups.hasOwnProperty(l)&&h[l].childNodes.length?(o=document.createDocumentFragment(),o.appendChild(t.render("optgroup_header",t.optgroups[l])),o.appendChild(h[l]),n.appendChild(t.render("optgroup",a.extend({},t.optgroups[l],{html:K(o),dom:o})))):n.appendChild(h[l]);if(w.html(n),t.settings.highlight&&v.query.length&&v.tokens.length)for(w.removeHighlight(),c=0,g=v.tokens.length;c<g;c++)d(w,v.tokens[c].regex);if(!t.settings.hideSelected)for(c=0,g=t.items.length;c<g;c++)t.getOption(t.items[c]).addClass("selected");p=t.canCreate(u),p&&(w.prepend(t.render("option_create",{input:u})),s=a(w[0].childNodes[0])),t.hasOptions=v.items.length>0||p,t.hasOptions?(v.items.length>0?(r=x&&t.getOption(x),r&&r.length?q=r:"single"===t.settings.mode&&t.items.length&&(q=t.getOption(t.items[0])),q&&q.length||(q=s&&!t.settings.addPrecedence?t.getAdjacentOption(s,1):w.find("[data-selectable]:first"))):q=s,t.setActiveOption(q),b&&!t.isOpen&&t.open()):(t.setActiveOption(null),b&&t.isOpen&&t.close())},addOption:function(b){var c,d,e,f=this;if(a.isArray(b))for(c=0,d=b.length;c<d;c++)f.addOption(b[c]);else(e=f.registerOption(b))&&(f.userOptions[e]=!0,f.lastQuery=null,f.trigger("option_add",e,b))},registerOption:function(a){var b=z(a[this.settings.valueField]);return"undefined"!=typeof b&&null!==b&&!this.options.hasOwnProperty(b)&&(a.$order=a.$order||++this.order,this.options[b]=a,b)},registerOptionGroup:function(a){var b=z(a[this.settings.optgroupValueField]);return!!b&&(a.$order=a.$order||++this.order,this.optgroups[b]=a,b)},addOptionGroup:function(a,b){b[this.settings.optgroupValueField]=a,(a=this.registerOptionGroup(b))&&this.trigger("optgroup_add",a,b)},removeOptionGroup:function(a){this.optgroups.hasOwnProperty(a)&&(delete this.optgroups[a],this.renderCache={},this.trigger("optgroup_remove",a))},clearOptionGroups:function(){this.optgroups={},this.renderCache={},this.trigger("optgroup_clear")},updateOption:function(b,c){var d,e,f,g,h,i,j,k=this;if(b=z(b),f=z(c[k.settings.valueField]),null!==b&&k.options.hasOwnProperty(b)){if("string"!=typeof f)throw new Error("Value must be set in option data");j=k.options[b].$order,f!==b&&(delete k.options[b],g=k.items.indexOf(b),g!==-1&&k.items.splice(g,1,f)),c.$order=c.$order||j,k.options[f]=c,h=k.renderCache.item,i=k.renderCache.option,h&&(delete h[b],delete h[f]),i&&(delete i[b],delete i[f]),k.items.indexOf(f)!==-1&&(d=k.getItem(b),e=a(k.render("item",c)),d.hasClass("active")&&e.addClass("active"),d.replaceWith(e)),k.lastQuery=null,k.isOpen&&k.refreshOptions(!1)}},removeOption:function(a,b){var c=this;a=z(a);var d=c.renderCache.item,e=c.renderCache.option;d&&delete d[a],e&&delete e[a],delete c.userOptions[a],delete c.options[a],c.lastQuery=null,c.trigger("option_remove",a),c.removeItem(a,b)},clearOptions:function(){var a=this;a.loadedSearches={},a.userOptions={},a.renderCache={},a.options=a.sifter.items={},a.lastQuery=null,a.trigger("option_clear"),a.clear()},getOption:function(a){return this.getElementWithValue(a,this.$dropdown_content.find("[data-selectable]"))},getAdjacentOption:function(b,c){var d=this.$dropdown.find("[data-selectable]"),e=d.index(b)+c;return e>=0&&e<d.length?d.eq(e):a()},getElementWithValue:function(b,c){if(b=z(b),"undefined"!=typeof b&&null!==b)for(var d=0,e=c.length;d<e;d++)if(c[d].getAttribute("data-value")===b)return a(c[d]);return a()},getItem:function(a){return this.getElementWithValue(a,this.$control.children())},addItems:function(b,c){for(var d=a.isArray(b)?b:[b],e=0,f=d.length;e<f;e++)this.isPending=e<f-1,this.addItem(d[e],c)},addItem:function(b,c){var d=c?[]:["change"];E(this,d,function(){var d,e,f,g,h,i=this,j=i.settings.mode;return b=z(b),i.items.indexOf(b)!==-1?void("single"===j&&i.close()):void(i.options.hasOwnProperty(b)&&("single"===j&&i.clear(c),"multi"===j&&i.isFull()||(d=a(i.render("item",i.options[b])),h=i.isFull(),i.items.splice(i.caretPos,0,b),i.insertAtCaret(d),(!i.isPending||!h&&i.isFull())&&i.refreshState(),i.isSetup&&(f=i.$dropdown_content.find("[data-selectable]"),i.isPending||(e=i.getOption(b),g=i.getAdjacentOption(e,1).attr("data-value"),i.refreshOptions(i.isFocused&&"single"!==j),g&&i.setActiveOption(i.getOption(g))),!f.length||i.isFull()?i.close():i.positionDropdown(),i.updatePlaceholder(),i.trigger("item_add",b,d),i.updateOriginalInput({silent:c})))))})},removeItem:function(b,c){var d,e,f,g=this;d=b instanceof a?b:g.getItem(b),b=z(d.attr("data-value")),e=g.items.indexOf(b),e!==-1&&(d.remove(),d.hasClass("active")&&(f=g.$activeItems.indexOf(d[0]),g.$activeItems.splice(f,1)),g.items.splice(e,1),g.lastQuery=null,!g.settings.persist&&g.userOptions.hasOwnProperty(b)&&g.removeOption(b,c),e<g.caretPos&&g.setCaret(g.caretPos-1),g.refreshState(),g.updatePlaceholder(),g.updateOriginalInput({silent:c}),g.positionDropdown(),g.trigger("item_remove",b,d))},createItem:function(b,c){var d=this,e=d.caretPos;b=b||a.trim(d.$control_input.val()||"");var f=arguments[arguments.length-1];if("function"!=typeof f&&(f=function(){}),"boolean"!=typeof c&&(c=!0),!d.canCreate(b))return f(),!1;d.lock();var g="function"==typeof d.settings.create?this.settings.create:function(a){var b={};return b[d.settings.labelField]=a,b[d.settings.valueField]=a,b},h=C(function(a){if(d.unlock(),!a||"object"!=typeof a)return f();var b=z(a[d.settings.valueField]);return"string"!=typeof b?f():(d.setTextboxValue(""),d.addOption(a),d.setCaret(e),d.addItem(b),d.refreshOptions(c&&"single"!==d.settings.mode),void f(a))}),i=g.apply(this,[b,h]);return"undefined"!=typeof i&&h(i),!0},refreshItems:function(){this.lastQuery=null,this.isSetup&&this.addItem(this.items),this.refreshState(),this.updateOriginalInput()},refreshState:function(){this.refreshValidityState(),this.refreshClasses()},refreshValidityState:function(){if(!this.isRequired)return!1;var a=!this.items.length;this.isInvalid=a,this.$control_input.prop("required",a),this.$input.prop("required",!a)},refreshClasses:function(){var b=this,c=b.isFull(),d=b.isLocked;b.$wrapper.toggleClass("rtl",b.rtl),b.$control.toggleClass("focus",b.isFocused).toggleClass("disabled",b.isDisabled).toggleClass("required",b.isRequired).toggleClass("invalid",b.isInvalid).toggleClass("locked",d).toggleClass("full",c).toggleClass("not-full",!c).toggleClass("input-active",b.isFocused&&!b.isInputHidden).toggleClass("dropdown-active",b.isOpen).toggleClass("has-options",!a.isEmptyObject(b.options)).toggleClass("has-items",b.items.length>0),b.$control_input.data("grow",!c&&!d)},isFull:function(){return null!==this.settings.maxItems&&this.items.length>=this.settings.maxItems},updateOriginalInput:function(a){var b,c,d,e,f=this;if(a=a||{},f.tagType===v){for(d=[],b=0,c=f.items.length;b<c;b++)e=f.options[f.items[b]][f.settings.labelField]||"",d.push('<option value="'+A(f.items[b])+'" selected="selected">'+A(e)+"</option>");d.length||this.$input.attr("multiple")||d.push('<option value="" selected="selected"></option>'),
f.$input.html(d.join(""))}else f.$input.val(f.getValue()),f.$input.attr("value",f.$input.val());f.isSetup&&(a.silent||f.trigger("change",f.$input.val()))},updatePlaceholder:function(){if(this.settings.placeholder){var a=this.$control_input;this.items.length?a.removeAttr("placeholder"):a.attr("placeholder",this.settings.placeholder),a.triggerHandler("update",{force:!0})}},open:function(){var a=this;a.isLocked||a.isOpen||"multi"===a.settings.mode&&a.isFull()||(a.focus(),a.isOpen=!0,a.refreshState(),a.$dropdown.css({visibility:"hidden",display:"block"}),a.positionDropdown(),a.$dropdown.css({visibility:"visible"}),a.trigger("dropdown_open",a.$dropdown))},close:function(){var a=this,b=a.isOpen;"single"===a.settings.mode&&a.items.length&&(a.hideInput(),a.$control_input.blur()),a.isOpen=!1,a.$dropdown.hide(),a.setActiveOption(null),a.refreshState(),b&&a.trigger("dropdown_close",a.$dropdown)},positionDropdown:function(){var a=this.$control,b="body"===this.settings.dropdownParent?a.offset():a.position();b.top+=a.outerHeight(!0),this.$dropdown.css({width:a.outerWidth(),top:b.top,left:b.left})},clear:function(a){var b=this;b.items.length&&(b.$control.children(":not(input)").remove(),b.items=[],b.lastQuery=null,b.setCaret(0),b.setActiveItem(null),b.updatePlaceholder(),b.updateOriginalInput({silent:a}),b.refreshState(),b.showInput(),b.trigger("clear"))},insertAtCaret:function(b){var c=Math.min(this.caretPos,this.items.length);0===c?this.$control.prepend(b):a(this.$control[0].childNodes[c]).before(b),this.setCaret(c+1)},deleteSelection:function(b){var c,d,e,f,g,h,i,j,k,l=this;if(e=b&&b.keyCode===p?-1:1,f=G(l.$control_input[0]),l.$activeOption&&!l.settings.hideSelected&&(i=l.getAdjacentOption(l.$activeOption,-1).attr("data-value")),g=[],l.$activeItems.length){for(k=l.$control.children(".active:"+(e>0?"last":"first")),h=l.$control.children(":not(input)").index(k),e>0&&h++,c=0,d=l.$activeItems.length;c<d;c++)g.push(a(l.$activeItems[c]).attr("data-value"));b&&(b.preventDefault(),b.stopPropagation())}else(l.isFocused||"single"===l.settings.mode)&&l.items.length&&(e<0&&0===f.start&&0===f.length?g.push(l.items[l.caretPos-1]):e>0&&f.start===l.$control_input.val().length&&g.push(l.items[l.caretPos]));if(!g.length||"function"==typeof l.settings.onDelete&&l.settings.onDelete.apply(l,[g])===!1)return!1;for("undefined"!=typeof h&&l.setCaret(h);g.length;)l.removeItem(g.pop());return l.showInput(),l.positionDropdown(),l.refreshOptions(!0),i&&(j=l.getOption(i),j.length&&l.setActiveOption(j)),!0},advanceSelection:function(a,b){var c,d,e,f,g,h,i=this;0!==a&&(i.rtl&&(a*=-1),c=a>0?"last":"first",d=G(i.$control_input[0]),i.isFocused&&!i.isInputHidden?(f=i.$control_input.val().length,g=a<0?0===d.start&&0===d.length:d.start===f,g&&!f&&i.advanceCaret(a,b)):(h=i.$control.children(".active:"+c),h.length&&(e=i.$control.children(":not(input)").index(h),i.setActiveItem(null),i.setCaret(a>0?e+1:e))))},advanceCaret:function(a,b){var c,d,e=this;0!==a&&(c=a>0?"next":"prev",e.isShiftDown?(d=e.$control_input[c](),d.length&&(e.hideInput(),e.setActiveItem(d),b&&b.preventDefault())):e.setCaret(e.caretPos+a))},setCaret:function(b){var c=this;if(b="single"===c.settings.mode?c.items.length:Math.max(0,Math.min(c.items.length,b)),!c.isPending){var d,e,f,g;for(f=c.$control.children(":not(input)"),d=0,e=f.length;d<e;d++)g=a(f[d]).detach(),d<b?c.$control_input.before(g):c.$control.append(g)}c.caretPos=b},lock:function(){this.close(),this.isLocked=!0,this.refreshState()},unlock:function(){this.isLocked=!1,this.refreshState()},disable:function(){var a=this;a.$input.prop("disabled",!0),a.$control_input.prop("disabled",!0).prop("tabindex",-1),a.isDisabled=!0,a.lock()},enable:function(){var a=this;a.$input.prop("disabled",!1),a.$control_input.prop("disabled",!1).prop("tabindex",a.tabIndex),a.isDisabled=!1,a.unlock()},destroy:function(){var b=this,c=b.eventNS,d=b.revertSettings;b.trigger("destroy"),b.off(),b.$wrapper.remove(),b.$dropdown.remove(),b.$input.html("").append(d.$children).removeAttr("tabindex").removeClass("selectized").attr({tabindex:d.tabindex}).show(),b.$control_input.removeData("grow"),b.$input.removeData("selectize"),a(window).off(c),a(document).off(c),a(document.body).off(c),delete b.$input[0].selectize},render:function(b,c){var d,e,f="",g=!1,h=this;return"option"!==b&&"item"!==b||(d=z(c[h.settings.valueField]),g=!!d),g&&(y(h.renderCache[b])||(h.renderCache[b]={}),h.renderCache[b].hasOwnProperty(d))?h.renderCache[b][d]:(f=a(h.settings.render[b].apply(this,[c,A])),"option"===b||"option_create"===b?f.attr("data-selectable",""):"optgroup"===b&&(e=c[h.settings.optgroupValueField]||"",f.attr("data-group",e)),"option"!==b&&"item"!==b||f.attr("data-value",d||""),g&&(h.renderCache[b][d]=f[0]),f[0])},clearCache:function(a){var b=this;"undefined"==typeof a?b.renderCache={}:delete b.renderCache[a]},canCreate:function(a){var b=this;if(!b.settings.create)return!1;var c=b.settings.createFilter;return a.length&&("function"!=typeof c||c.apply(b,[a]))&&("string"!=typeof c||new RegExp(c).test(a))&&(!(c instanceof RegExp)||c.test(a))}}),M.count=0,M.defaults={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:!0,diacritics:!0,create:!1,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,maxOptions:1e3,maxItems:null,hideSelected:null,addPrecedence:!1,selectOnTab:!1,preload:!1,allowEmptyOption:!1,closeAfterSelect:!1,scrollDuration:60,loadThrottle:300,loadingClass:"loading",dataAttr:"data-data",optgroupField:"optgroup",valueField:"value",labelField:"text",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:!1,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"selectize-control",inputClass:"selectize-input",dropdownClass:"selectize-dropdown",dropdownContentClass:"selectize-dropdown-content",dropdownParent:null,copyClassesToDropdown:!0,render:{}},a.fn.selectize=function(b){var c=a.fn.selectize.defaults,d=a.extend({},c,b),e=d.dataAttr,f=d.labelField,g=d.valueField,h=d.optgroupField,i=d.optgroupLabelField,j=d.optgroupValueField,k=function(b,c){var h,i,j,k,l=b.attr(e);if(l)for(c.options=JSON.parse(l),h=0,i=c.options.length;h<i;h++)c.items.push(c.options[h][g]);else{var m=a.trim(b.val()||"");if(!d.allowEmptyOption&&!m.length)return;for(j=m.split(d.delimiter),h=0,i=j.length;h<i;h++)k={},k[f]=j[h],k[g]=j[h],c.options.push(k);c.items=j}},l=function(b,c){var k,l,m,n,o=c.options,p={},q=function(a){var b=e&&a.attr(e);return"string"==typeof b&&b.length?JSON.parse(b):null},r=function(b,e){b=a(b);var i=z(b.val());if(i||d.allowEmptyOption)if(p.hasOwnProperty(i)){if(e){var j=p[i][h];j?a.isArray(j)?j.push(e):p[i][h]=[j,e]:p[i][h]=e}}else{var k=q(b)||{};k[f]=k[f]||b.text(),k[g]=k[g]||i,k[h]=k[h]||e,p[i]=k,o.push(k),b.is(":selected")&&c.items.push(i)}},s=function(b){var d,e,f,g,h;for(b=a(b),f=b.attr("label"),f&&(g=q(b)||{},g[i]=f,g[j]=f,c.optgroups.push(g)),h=a("option",b),d=0,e=h.length;d<e;d++)r(h[d],f)};for(c.maxItems=b.attr("multiple")?null:1,n=b.children(),k=0,l=n.length;k<l;k++)m=n[k].tagName.toLowerCase(),"optgroup"===m?s(n[k]):"option"===m&&r(n[k])};return this.each(function(){if(!this.selectize){var e,f=a(this),g=this.tagName.toLowerCase(),h=f.attr("placeholder")||f.attr("data-placeholder");h||d.allowEmptyOption||(h=f.children('option[value=""]').text());var i={placeholder:h,options:[],optgroups:[],items:[]};"select"===g?l(f,i):k(f,i),e=new M(f,a.extend(!0,{},c,i,b))}})},a.fn.selectize.defaults=M.defaults,a.fn.selectize.support={validity:x},M.define("drag_drop",function(b){if(!a.fn.sortable)throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');if("multi"===this.settings.mode){var c=this;c.lock=function(){var a=c.lock;return function(){var b=c.$control.data("sortable");return b&&b.disable(),a.apply(c,arguments)}}(),c.unlock=function(){var a=c.unlock;return function(){var b=c.$control.data("sortable");return b&&b.enable(),a.apply(c,arguments)}}(),c.setup=function(){var b=c.setup;return function(){b.apply(this,arguments);var d=c.$control.sortable({items:"[data-value]",forcePlaceholderSize:!0,disabled:c.isLocked,start:function(a,b){b.placeholder.css("width",b.helper.css("width")),d.css({overflow:"visible"})},stop:function(){d.css({overflow:"hidden"});var b=c.$activeItems?c.$activeItems.slice():null,e=[];d.children("[data-value]").each(function(){e.push(a(this).attr("data-value"))}),c.setValue(e),c.setActiveItem(b)}})}}()}}),M.define("dropdown_header",function(b){var c=this;b=a.extend({title:"Untitled",headerClass:"selectize-dropdown-header",titleRowClass:"selectize-dropdown-header-title",labelClass:"selectize-dropdown-header-label",closeClass:"selectize-dropdown-header-close",html:function(a){return'<div class="'+a.headerClass+'"><div class="'+a.titleRowClass+'"><span class="'+a.labelClass+'">'+a.title+'</span><a href="javascript:void(0)" class="'+a.closeClass+'">&times;</a></div></div>'}},b),c.setup=function(){var d=c.setup;return function(){d.apply(c,arguments),c.$dropdown_header=a(b.html(b)),c.$dropdown.prepend(c.$dropdown_header)}}()}),M.define("optgroup_columns",function(b){var c=this;b=a.extend({equalizeWidth:!0,equalizeHeight:!0},b),this.getAdjacentOption=function(b,c){var d=b.closest("[data-group]").find("[data-selectable]"),e=d.index(b)+c;return e>=0&&e<d.length?d.eq(e):a()},this.onKeyDown=function(){var a=c.onKeyDown;return function(b){var d,e,f,g;return!this.isOpen||b.keyCode!==j&&b.keyCode!==m?a.apply(this,arguments):(c.ignoreHover=!0,g=this.$activeOption.closest("[data-group]"),d=g.find("[data-selectable]").index(this.$activeOption),g=b.keyCode===j?g.prev("[data-group]"):g.next("[data-group]"),f=g.find("[data-selectable]"),e=f.eq(Math.min(f.length-1,d)),void(e.length&&this.setActiveOption(e)))}}();var d=function(){var a,b=d.width,c=document;return"undefined"==typeof b&&(a=c.createElement("div"),a.innerHTML='<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>',a=a.firstChild,c.body.appendChild(a),b=d.width=a.offsetWidth-a.clientWidth,c.body.removeChild(a)),b},e=function(){var e,f,g,h,i,j,k;if(k=a("[data-group]",c.$dropdown_content),f=k.length,f&&c.$dropdown_content.width()){if(b.equalizeHeight){for(g=0,e=0;e<f;e++)g=Math.max(g,k.eq(e).height());k.css({height:g})}b.equalizeWidth&&(j=c.$dropdown_content.innerWidth()-d(),h=Math.round(j/f),k.css({width:h}),f>1&&(i=j-h*(f-1),k.eq(f-1).css({width:i})))}};(b.equalizeHeight||b.equalizeWidth)&&(B.after(this,"positionDropdown",e),B.after(this,"refreshOptions",e))}),M.define("remove_button",function(b){b=a.extend({label:"&times;",title:"Remove",className:"remove",append:!0},b);var c=function(b,c){c.className="remove-single";var d=b,e='<a href="javascript:void(0)" class="'+c.className+'" tabindex="-1" title="'+A(c.title)+'">'+c.label+"</a>",f=function(a,b){return a+b};b.setup=function(){var g=d.setup;return function(){if(c.append){var h=a(d.$input.context).attr("id"),i=(a("#"+h),d.settings.render.item);d.settings.render.item=function(a){return f(i.apply(b,arguments),e)}}g.apply(b,arguments),b.$control.on("click","."+c.className,function(a){a.preventDefault(),d.isLocked||d.clear()})}}()},d=function(b,c){var d=b,e='<a href="javascript:void(0)" class="'+c.className+'" tabindex="-1" title="'+A(c.title)+'">'+c.label+"</a>",f=function(a,b){var c=a.search(/(<\/[^>]+>\s*)$/);return a.substring(0,c)+b+a.substring(c)};b.setup=function(){var g=d.setup;return function(){if(c.append){var h=d.settings.render.item;d.settings.render.item=function(a){return f(h.apply(b,arguments),e)}}g.apply(b,arguments),b.$control.on("click","."+c.className,function(b){if(b.preventDefault(),!d.isLocked){var c=a(b.currentTarget).parent();d.setActiveItem(c),d.deleteSelection()&&d.setCaret(d.items.length)}})}}()};return"single"===this.settings.mode?void c(this,b):void d(this,b)}),M.define("restore_on_backspace",function(a){var b=this;a.text=a.text||function(a){return a[this.settings.labelField]},this.onKeyDown=function(){var c=b.onKeyDown;return function(b){var d,e;return b.keyCode===p&&""===this.$control_input.val()&&!this.$activeItems.length&&(d=this.caretPos-1,d>=0&&d<this.items.length)?(e=this.options[this.items[d]],this.deleteSelection(b)&&(this.setTextboxValue(a.text.apply(this,[e])),this.refreshOptions(!0)),void b.preventDefault()):c.apply(this,arguments)}}()}),M});;Selectize.define('item_color', function (options) {
    options = $.extend({
        colorField: 'color',
    }, options);

    var self = this;

    this.settings.onItemAdd = (function (value, $item) {
        var original = null;

        // check if onItemAdd exists as it is an optional callback function
        if (self.settings.hasOwnProperty('onItemAdd'))
          original = self.settings.onItemAdd;
        return function (value, $item) {
            var option = self.options[value];
            if (option.hasOwnProperty(options.colorField))
              $item.css('background-color', option[options.colorField]);

            if (original)
              return original.apply(this, arguments);
        };
    })();

});
