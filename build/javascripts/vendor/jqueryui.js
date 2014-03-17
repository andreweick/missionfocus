(function(a,m){function f(b,c){var e,d,f,h=b.nodeName.toLowerCase();return"area"===h?(e=b.parentNode,d=e.name,b.href&&d&&"map"===e.nodeName.toLowerCase()?(f=a("img[usemap=#"+d+"]")[0],!!f&&g(f)):!1):(/input|select|textarea|button|object/.test(h)?!b.disabled:"a"===h?b.href||c:c)&&g(b)}function g(b){return a.expr.filters.visible(b)&&!a(b).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}var d=0,c=/^ui-id-\d+$/;a.ui=a.ui||{};a.extend(a.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,
COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});a.fn.extend({focus:function(b){return function(c,e){return"number"==typeof c?this.each(function(){var b=this;setTimeout(function(){a(b).focus();e&&e.call(b)},c)}):b.apply(this,arguments)}}(a.fn.focus),scrollParent:function(){var b;return b=a.ui.ie&&/(static|relative)/.test(this.css("position"))||
/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.css(this,"position"))&&/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(b){if(b!==m)return this.css("zIndex",b);if(this.length){var c,
e;for(b=a(this[0]);b.length&&b[0]!==document;){if(c=b.css("position"),("absolute"===c||"relative"===c||"fixed"===c)&&(e=parseInt(b.css("zIndex"),10),!isNaN(e)&&0!==e))return e;b=b.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++d)})},removeUniqueId:function(){return this.each(function(){c.test(this.id)&&a(this).removeAttr("id")})}});a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):
function(b,c,e){return!!a.data(b,e[3])},focusable:function(b){return f(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var c=a.attr(b,"tabindex"),e=isNaN(c);return(e||0<=c)&&f(b,!e)}});a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(b,c){function e(b,c,z,k){return a.each(d,function(){c-=parseFloat(a.css(b,"padding"+this))||0;z&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0);k&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var d="Width"===c?["Left","Right"]:["Top","Bottom"],
f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return b===m?g["inner"+c].call(this):this.each(function(){a(this).css(f,e(this,b)+"px")})};a.fn["outer"+c]=function(b,d){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,e(this,b,!0,d)+"px")})}});a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))});
a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=function(b){return function(c){return arguments.length?b.call(this,a.camelCase(c)):b.call(this)}}(a.fn.removeData));a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());a.support.selectstart="onselectstart"in document.createElement("div");a.fn.extend({disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});
a.extend(a.ui,{plugin:{add:function(b,c,e){var d;b=a.ui[b].prototype;for(d in e)b.plugins[d]=b.plugins[d]||[],b.plugins[d].push([c,e[d]])},call:function(a,c,e){var d=a.plugins[c];if(d&&a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType)for(c=0;d.length>c;c++)a.options[d[c][0]]&&d[c][1].apply(a.element,e)}},hasScroll:function(b,c){if("hidden"===a(b).css("overflow"))return!1;var d=c&&"left"===c?"scrollLeft":"scrollTop";return 0<b[d]?!0:(b[d]=1,b[d]=0,!1)}})})(jQuery);
(function(a,m){var f=0,g=Array.prototype.slice,d=a.cleanData;a.cleanData=function(c){for(var b,k=0;null!=(b=c[k]);k++)try{a(b).triggerHandler("remove")}catch(e){}d(c)};a.widget=function(c,b,d){var e,f,g,h,y={},p=c.split(".")[0];c=c.split(".")[1];e=p+"-"+c;d||(d=b,b=a.Widget);a.expr[":"][e.toLowerCase()]=function(b){return!!a.data(b,e)};a[p]=a[p]||{};f=a[p][c];g=a[p][c]=function(a,b){return this._createWidget?(arguments.length&&this._createWidget(a,b),m):new g(a,b)};a.extend(g,f,{version:d.version,
_proto:a.extend({},d),_childConstructors:[]});h=new b;h.options=a.widget.extend({},h.options);a.each(d,function(c,d){return a.isFunction(d)?(y[c]=function(){var a=function(){return b.prototype[c].apply(this,arguments)},e=function(a){return b.prototype[c].apply(this,a)};return function(){var b,c=this._super,z=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=z,b}}(),m):(y[c]=d,m)});g.prototype=a.widget.extend(h,{widgetEventPrefix:f?h.widgetEventPrefix:
c},y,{constructor:g,namespace:p,widgetName:c,widgetFullName:e});f?(a.each(f._childConstructors,function(b,c){var t=c.prototype;a.widget(t.namespace+"."+t.widgetName,g,c._proto)}),delete f._childConstructors):b._childConstructors.push(g);a.widget.bridge(c,g)};a.widget.extend=function(c){for(var b,d,e=g.call(arguments,1),f=0,l=e.length;l>f;f++)for(b in e[f])d=e[f][b],e[f].hasOwnProperty(b)&&d!==m&&(c[b]=a.isPlainObject(d)?a.isPlainObject(c[b])?a.widget.extend({},c[b],d):a.widget.extend({},d):d);return c};
a.widget.bridge=function(c,b){var d=b.prototype.widgetFullName||c;a.fn[c]=function(e){var f="string"==typeof e,l=g.call(arguments,1),h=this;return e=!f&&l.length?a.widget.extend.apply(null,[e].concat(l)):e,f?this.each(function(){var b,f=a.data(this,d);return f?a.isFunction(f[e])&&"_"!==e.charAt(0)?(b=f[e].apply(f,l),b!==f&&b!==m?(h=b&&b.jquery?h.pushStack(b.get()):b,!1):m):a.error("no such method '"+e+"' for "+c+" widget instance"):a.error("cannot call methods on "+c+" prior to initialization; attempted to call method '"+
e+"'")}):this.each(function(){var c=a.data(this,d);c?c.option(e||{})._init():a.data(this,d,new b(e,this))}),h}};a.Widget=function(){};a.Widget._childConstructors=[];a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(c,b){b=a(b||this.defaultElement||this)[0];this.element=a(b);this.uuid=f++;this.eventNamespace="."+this.widgetName+this.uuid;this.options=a.widget.extend({},this.options,this._getCreateOptions(),c);
this.bindings=a();this.hoverable=a();this.focusable=a();b!==this&&(a.data(b,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===b&&this.destroy()}}),this.document=a(b.style?b.ownerDocument:b.document||b),this.window=a(this.document[0].defaultView||this.document[0].parentWindow));this._create();this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:a.noop,_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){this._destroy();
this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},option:function(c,b){var d,e,f,g=c;
if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof c)if(g={},d=c.split("."),c=d.shift(),d.length){e=g[c]=a.widget.extend({},this.options[c]);for(f=0;d.length-1>f;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];if(c=d.pop(),b===m)return e[c]===m?null:e[c];e[c]=b}else{if(b===m)return this.options[c]===m?null:this.options[c];g[c]=b}return this._setOptions(g),this},_setOptions:function(a){for(var b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return this.options[a]=
b,"disabled"===a&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!b).attr("aria-disabled",b),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(c,b,d){var e,f=this;"boolean"!=typeof c&&(d=b,b=c,c=!1);d?(b=e=a(b),this.bindings=this.bindings.add(b)):(d=b,b=this.element,e=this.widget());a.each(d,function(d,
k){function g(){return c||!0!==f.options.disabled&&!a(this).hasClass("ui-state-disabled")?("string"==typeof k?f[k]:k).apply(f,arguments):m}"string"!=typeof k&&(g.guid=k.guid=k.guid||g.guid||a.guid++);var p=d.match(/^(\w+)\s*(.*)$/),z=p[1]+f.eventNamespace;(p=p[2])?e.delegate(p,z,g):b.bind(z,g)})},_off:function(a,b){b=(b||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;a.unbind(b).undelegate(b)},_delay:function(a,b){var d=this;return setTimeout(function(){return("string"==typeof a?
d[a]:a).apply(d,arguments)},b||0)},_hoverable:function(c){this.hoverable=this.hoverable.add(c);this._on(c,{mouseenter:function(b){a(b.currentTarget).addClass("ui-state-hover")},mouseleave:function(b){a(b.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(c){this.focusable=this.focusable.add(c);this._on(c,{focusin:function(b){a(b.currentTarget).addClass("ui-state-focus")},focusout:function(b){a(b.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(c,b,d){var e,f=this.options[c];
if(d=d||{},b=a.Event(b),b.type=(c===this.widgetEventPrefix?c:this.widgetEventPrefix+c).toLowerCase(),b.target=this.element[0],c=b.originalEvent)for(e in c)e in b||(b[e]=c[e]);return this.element.trigger(b,d),!(a.isFunction(f)&&!1===f.apply(this.element[0],[b].concat(d))||b.isDefaultPrevented())}};a.each({show:"fadeIn",hide:"fadeOut"},function(c,b){a.Widget.prototype["_"+c]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?!0===e||"number"==typeof e?b:e.effect||b:c;e=e||{};"number"==typeof e&&
(e={duration:e});g=!a.isEmptyObject(e);e.complete=f;e.delay&&d.delay(e.delay);g&&a.effects&&a.effects.effect[h]?d[c](e):h!==c&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(b){a(this)[c]();f&&f.call(d[0]);b()})}})})(jQuery);
(function(a){var m=!1;a(document).mouseup(function(){m=!1});a.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var f=this;this.element.bind("mousedown."+this.widgetName,function(a){return f._mouseDown(a)}).bind("click."+this.widgetName,function(g){return!0===a.data(g.target,f.widgetName+".preventClickEvent")?(a.removeData(g.target,f.widgetName+".preventClickEvent"),g.stopImmediatePropagation(),!1):void 0});this.started=
!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);this._mouseMoveDelegate&&a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(f){if(!m){this._mouseStarted&&this._mouseUp(f);this._mouseDownEvent=f;var g=this,d=1===f.which,c="string"==typeof this.options.cancel&&f.target.nodeName?a(f.target).closest(this.options.cancel).length:!1;return d&&!c&&this._mouseCapture(f)?(this.mouseDelayMet=
!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){g.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(f)&&this._mouseDelayMet(f)&&(this._mouseStarted=!1!==this._mouseStart(f),!this._mouseStarted)?(f.preventDefault(),!0):(!0===a.data(f.target,this.widgetName+".preventClickEvent")&&a.removeData(f.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return g._mouseMove(a)},this._mouseUpDelegate=function(a){return g._mouseUp(a)},
a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),f.preventDefault(),m=!0,!0)):!0}},_mouseMove:function(f){return a.ui.ie&&(!document.documentMode||9>document.documentMode)&&!f.button?this._mouseUp(f):this._mouseStarted?(this._mouseDrag(f),f.preventDefault()):(this._mouseDistanceMet(f)&&this._mouseDelayMet(f)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,f),this._mouseStarted?this._mouseDrag(f):this._mouseUp(f)),
!this._mouseStarted)},_mouseUp:function(f){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,f.target===this._mouseDownEvent.target&&a.data(f.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(f)),!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},
_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);
(function(a,m){function f(a,b,c){return[parseFloat(a[0])*(y.test(a[0])?b/100:1),parseFloat(a[1])*(y.test(a[1])?c/100:1)]}function g(b){var c=b[0];return 9===c.nodeType?{width:b.width(),height:b.height(),offset:{top:0,left:0}}:a.isWindow(c)?{width:b.width(),height:b.height(),offset:{top:b.scrollTop(),left:b.scrollLeft()}}:c.preventDefault?{width:0,height:0,offset:{top:c.pageY,left:c.pageX}}:{width:b.outerWidth(),height:b.outerHeight(),offset:b.offset()}}a.ui=a.ui||{};var d,c=Math.max,b=Math.abs,k=
Math.round,e=/left|center|right/,v=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,h=/^\w+/,y=/%$/,p=a.fn.position;a.position={scrollbarWidth:function(){if(d!==m)return d;var b,c,t=a("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),f=t.children()[0];return a("body").append(t),b=f.offsetWidth,t.css("overflow","scroll"),c=f.offsetWidth,b===c&&(c=t[0].clientWidth),t.remove(),d=b-c},getScrollInfo:function(b){var c=b.isWindow?"":b.element.css("overflow-x"),
d=b.isWindow?"":b.element.css("overflow-y"),c="scroll"===c||"auto"===c&&b.width<b.element[0].scrollWidth;return{width:"scroll"===d||"auto"===d&&b.height<b.element[0].scrollHeight?a.position.scrollbarWidth():0,height:c?a.position.scrollbarWidth():0}},getWithinInfo:function(b){b=a(b||window);var c=a.isWindow(b[0]);return{element:b,isWindow:c,offset:b.offset()||{left:0,top:0},scrollLeft:b.scrollLeft(),scrollTop:b.scrollTop(),width:c?b.width():b.outerWidth(),height:c?b.height():b.outerHeight()}}};a.fn.position=
function(d){if(!d||!d.of)return p.apply(this,arguments);d=a.extend({},d);var q,t,A,B,n,r,C=a(d.of),E=a.position.getWithinInfo(d.within),x=a.position.getScrollInfo(E),u=(d.collision||"flip").split(" "),w={};return r=g(C),C[0].preventDefault&&(d.at="left top"),t=r.width,A=r.height,B=r.offset,n=a.extend({},B),a.each(["my","at"],function(){var a,b,c=(d[this]||"").split(" ");1===c.length&&(c=e.test(c[0])?c.concat(["center"]):v.test(c[0])?["center"].concat(c):["center","center"]);c[0]=e.test(c[0])?c[0]:
"center";c[1]=v.test(c[1])?c[1]:"center";a=l.exec(c[0]);b=l.exec(c[1]);w[this]=[a?a[0]:0,b?b[0]:0];d[this]=[h.exec(c[0])[0],h.exec(c[1])[0]]}),1===u.length&&(u[1]=u[0]),"right"===d.at[0]?n.left+=t:"center"===d.at[0]&&(n.left+=t/2),"bottom"===d.at[1]?n.top+=A:"center"===d.at[1]&&(n.top+=A/2),q=f(w.at,t,A),n.left+=q[0],n.top+=q[1],this.each(function(){var e,g,r=a(this),h=r.outerWidth(),l=r.outerHeight(),m=parseInt(a.css(this,"marginLeft"),10)||0,v=parseInt(a.css(this,"marginTop"),10)||0,p=h+m+(parseInt(a.css(this,
"marginRight"),10)||0)+x.width,y=l+v+(parseInt(a.css(this,"marginBottom"),10)||0)+x.height,s=a.extend({},n),D=f(w.my,r.outerWidth(),r.outerHeight());"right"===d.my[0]?s.left-=h:"center"===d.my[0]&&(s.left-=h/2);"bottom"===d.my[1]?s.top-=l:"center"===d.my[1]&&(s.top-=l/2);s.left+=D[0];s.top+=D[1];a.support.offsetFractions||(s.left=k(s.left),s.top=k(s.top));e={marginLeft:m,marginTop:v};a.each(["left","top"],function(b,c){a.ui.position[u[b]]&&a.ui.position[u[b]][c](s,{targetWidth:t,targetHeight:A,elemWidth:h,
elemHeight:l,collisionPosition:e,collisionWidth:p,collisionHeight:y,offset:[q[0]+D[0],q[1]+D[1]],my:d.my,at:d.at,within:E,elem:r})});d.using&&(g=function(a){var f=B.left-s.left,e=f+t-h,n=B.top-s.top,g=n+A-l,q={target:{element:C,left:B.left,top:B.top,width:t,height:A},element:{element:r,left:s.left,top:s.top,width:h,height:l},horizontal:0>e?"left":0<f?"right":"center",vertical:0>g?"top":0<n?"bottom":"middle"};h>t&&t>b(f+e)&&(q.horizontal="center");l>A&&A>b(n+g)&&(q.vertical="middle");q.important=c(b(f),
b(e))>c(b(n),b(g))?"horizontal":"vertical";d.using.call(this,a,q)});r.offset(a.extend(s,{using:g}))})};a.ui.position={fit:{left:function(a,b){var d,f=b.within,e=f.isWindow?f.scrollLeft:f.offset.left,f=f.width,n=a.left-b.collisionPosition.marginLeft,g=e-n,k=n+b.collisionWidth-f-e;b.collisionWidth>f?0<g&&0>=k?(d=a.left+g+b.collisionWidth-f-e,a.left+=g-d):a.left=0<k&&0>=g?e:g>k?e+f-b.collisionWidth:e:0<g?a.left+=g:0<k?a.left-=k:a.left=c(a.left-n,a.left)},top:function(a,b){var d,f=b.within,f=f.isWindow?
f.scrollTop:f.offset.top,e=b.within.height,g=a.top-b.collisionPosition.marginTop,k=f-g,h=g+b.collisionHeight-e-f;b.collisionHeight>e?0<k&&0>=h?(d=a.top+k+b.collisionHeight-e-f,a.top+=k-d):a.top=0<h&&0>=k?f:k>h?f+e-b.collisionHeight:f:0<k?a.top+=k:0<h?a.top-=h:a.top=c(a.top-g,a.top)}},flip:{left:function(a,c){var d,f,e=c.within,g=e.offset.left+e.scrollLeft,k=e.width,e=e.isWindow?e.scrollLeft:e.offset.left,h=a.left-c.collisionPosition.marginLeft,l=h-e,h=h+c.collisionWidth-k-e,x="left"===c.my[0]?-c.elemWidth:
"right"===c.my[0]?c.elemWidth:0,u="left"===c.at[0]?c.targetWidth:"right"===c.at[0]?-c.targetWidth:0,w=-2*c.offset[0];0>l?(d=a.left+x+u+w+c.collisionWidth-k-g,(0>d||b(l)>d)&&(a.left+=x+u+w)):0<h&&(f=a.left-c.collisionPosition.marginLeft+x+u+w-e,(0<f||h>b(f))&&(a.left+=x+u+w))},top:function(a,c){var d,f,e=c.within,g=e.offset.top+e.scrollTop,k=e.height,e=e.isWindow?e.scrollTop:e.offset.top,h=a.top-c.collisionPosition.marginTop,l=h-e,h=h+c.collisionHeight-k-e,x="top"===c.my[1]?-c.elemHeight:"bottom"===
c.my[1]?c.elemHeight:0,u="top"===c.at[1]?c.targetHeight:"bottom"===c.at[1]?-c.targetHeight:0,w=-2*c.offset[1];0>l?(f=a.top+x+u+w+c.collisionHeight-k-g,a.top+x+u+w>l&&(0>f||b(l)>f)&&(a.top+=x+u+w)):0<h&&(d=a.top-c.collisionPosition.marginTop+x+u+w-e,a.top+x+u+w>h&&(0<d||h>b(d))&&(a.top+=x+u+w))}},flipfit:{left:function(){a.ui.position.flip.left.apply(this,arguments);a.ui.position.fit.left.apply(this,arguments)},top:function(){a.ui.position.flip.top.apply(this,arguments);a.ui.position.fit.top.apply(this,
arguments)}}};(function(){var b,c,d,e,f=document.getElementsByTagName("body")[0];d=document.createElement("div");b=document.createElement(f?"div":"body");c={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};f&&a.extend(c,{position:"absolute",left:"-1000px",top:"-1000px"});for(e in c)b.style[e]=c[e];b.appendChild(d);c=f||document.documentElement;c.insertBefore(b,c.firstChild);d.style.cssText="position: absolute; left: 10.7432222px;";d=a(d).offset().left;a.support.offsetFractions=
10<d&&11>d;b.innerHTML="";c.removeChild(b)})()})(jQuery);
(function(a,m){a.effects={effect:{}};(function(a,g){function d(a,b,c){var d=y[b.type]||{};return null==a?c||!b.def?null:b.def:(a=d.floor?~~a:parseFloat(a),isNaN(a)?b.def:d.mod?(a+d.mod)%d.mod:0>a?0:a>d.max?d.max:a)}function c(b){var c=l(),d=c._rgba=[];return b=b.toLowerCase(),q(m,function(a,e){var f,k=e.re.exec(b),k=k&&e.parse(k),l=e.space||"rgba";return k?(f=c[l](k),c[h[l].cache]=f[h[l].cache],d=c._rgba=f._rgba,!1):g}),d.length?("0,0,0,0"===d.join()&&a.extend(d,k.transparent),c):k[b]}function b(a,
b,c){return c=(c+1)%1,1>6*c?a+6*(b-a)*c:1>2*c?b:2>3*c?a+6*(b-a)*(2/3-c):a}var k,e=/^([\-+])=\s*(\d+\.?\d*)/,m=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],
16),parseInt(a[2],16),parseInt(a[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],l=a.Color=function(b,c,d,e){return new a.Color.fn.parse(b,c,d,e)},h={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,
type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},y={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},p=l.support={},z=a("<p>")[0],q=a.each;z.style.cssText="background-color:rgba(1,1,1,.5)";p.rgba=-1<z.style.backgroundColor.indexOf("rgba");q(h,function(a,b){b.cache="_"+a;b.props.alpha={idx:3,type:"percent",def:1}});l.fn=a.extend(l.prototype,{parse:function(b,e,B,n){if(b===g)return this._rgba=[null,null,
null,null],this;(b.jquery||b.nodeType)&&(b=a(b).css(e),e=g);var r=this,C=a.type(b),m=this._rgba=[];return e!==g&&(b=[b,e,B,n],C="array"),"string"===C?this.parse(c(b)||k._default):"array"===C?(q(h.rgba.props,function(a,c){m[c.idx]=d(b[c.idx],c)}),this):"object"===C?(b instanceof l?q(h,function(a,c){b[c.cache]&&(r[c.cache]=b[c.cache].slice())}):q(h,function(c,e){var g=e.cache;q(e.props,function(a,c){if(!r[g]&&e.to){if("alpha"===a||null==b[a])return;r[g]=e.to(r._rgba)}r[g][c.idx]=d(b[a],c,!0)});r[g]&&
0>a.inArray(null,r[g].slice(0,3))&&(r[g][3]=1,e.from&&(r._rgba=e.from(r[g])))}),this):g},is:function(a){var b=l(a),c=!0,d=this;return q(h,function(a,e){var f,k=b[e.cache];return k&&(f=d[e.cache]||e.to&&e.to(d._rgba)||[],q(e.props,function(a,b){return null!=k[b.idx]?c=k[b.idx]===f[b.idx]:g})),c}),c},_space:function(){var a=[],b=this;return q(h,function(c,d){b[d.cache]&&a.push(c)}),a.pop()},transition:function(a,b){var c=l(a),e=c._space(),f=h[e],g=0===this.alpha()?l("transparent"):this,k=g[f.cache]||
f.to(g._rgba),m=k.slice();return c=c[f.cache],q(f.props,function(a,e){var f=e.idx,g=k[f],h=c[f],n=y[e.type]||{};null!==h&&(null===g?m[f]=h:(n.mod&&(h-g>n.mod/2?g+=n.mod:g-h>n.mod/2&&(g-=n.mod)),m[f]=d((h-g)*b+g,e)))}),this[e](m)},blend:function(b){if(1===this._rgba[3])return this;var c=this._rgba.slice(),d=c.pop(),e=l(b)._rgba;return l(a.map(c,function(a,b){return(1-d)*e[b]+d*a}))},toRgbaString:function(){var b="rgba(",c=a.map(this._rgba,function(a,b){return null==a?2<b?1:0:a});return 1===c[3]&&(c.pop(),
b="rgb("),b+c.join()+")"},toHslaString:function(){var b="hsla(",c=a.map(this.hsla(),function(a,b){return null==a&&(a=2<b?1:0),b&&3>b&&(a=Math.round(100*a)+"%"),a});return 1===c[3]&&(c.pop(),b="hsl("),b+c.join()+")"},toHexString:function(b){var c=this._rgba.slice(),d=c.pop();return b&&c.push(~~(255*d)),"#"+a.map(c,function(a){return a=(a||0).toString(16),1===a.length?"0"+a:a}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}});l.fn.parse.prototype=l.fn;h.hsla.to=
function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b,c,d=a[0]/255,e=a[1]/255,f=a[2]/255;a=a[3];var g=Math.max(d,e,f),k=Math.min(d,e,f),h=g-k,l=g+k,m=0.5*l;return b=k===g?0:d===g?60*(e-f)/h+360:e===g?60*(f-d)/h+120:60*(d-e)/h+240,c=0===h?0:0.5>=m?h/l:h/(2-l),[Math.round(b)%360,c,m,null==a?1:a]};h.hsla.from=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var c=a[0]/360,d=a[1],e=a[2];a=a[3];d=0.5>=e?e*(1+d):e+d-e*d;e=2*e-d;return[Math.round(255*
b(e,d,c+1/3)),Math.round(255*b(e,d,c)),Math.round(255*b(e,d,c-1/3)),a]};q(h,function(b,c){var k=c.props,h=c.cache,m=c.to,p=c.from;l.fn[b]=function(b){if(m&&!this[h]&&(this[h]=m(this._rgba)),b===g)return this[h].slice();var c,e=a.type(b),t="array"===e||"object"===e?b:arguments,v=this[h].slice();return q(k,function(a,b){var c=t["object"===e?a:b.idx];null==c&&(c=v[b.idx]);v[b.idx]=d(c,b)}),p?(c=l(p(v)),c[h]=v,c):l(v)};q(k,function(c,d){l.fn[c]||(l.fn[c]=function(g){var k,h=a.type(g),l="alpha"===c?this._hsla?
"hsla":"rgba":b,n=this[l](),m=n[d.idx];return"undefined"===h?m:("function"===h&&(g=g.call(this,m),h=a.type(g)),null==g&&d.empty?this:("string"===h&&(k=e.exec(g),k&&(g=m+parseFloat(k[2])*("+"===k[1]?1:-1))),n[d.idx]=g,this[l](n)))})})});l.hook=function(b){b=b.split(" ");q(b,function(b,d){a.cssHooks[d]={set:function(b,e){var g,k="";if("transparent"!==e&&("string"!==a.type(e)||(g=c(e)))){if(e=l(g||e),!p.rgba&&1!==e._rgba[3]){for(g="backgroundColor"===d?b.parentNode:b;(""===k||"transparent"===k)&&g&&
g.style;)try{k=a.css(g,"backgroundColor"),g=g.parentNode}catch(h){}e=e.blend(k&&"transparent"!==k?k:"_default")}e=e.toRgbaString()}try{b.style[d]=e}catch(m){}}};a.fx.step[d]=function(b){b.colorInit||(b.start=l(b.elem,d),b.end=l(b.end),b.colorInit=!0);a.cssHooks[d].set(b.elem,b.start.transition(b.end,b.pos))}})};l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");a.cssHooks.borderColor=
{expand:function(a){var b={};return q(["Top","Right","Bottom","Left"],function(c,d){b["border"+d+"Color"]=a}),b}};k=a.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);(function(){function f(c){var b,d=c.ownerDocument.defaultView?
c.ownerDocument.defaultView.getComputedStyle(c,null):c.currentStyle,e={};if(d&&d.length&&d[0]&&d[d[0]])for(c=d.length;c--;)b=d[c],"string"==typeof d[b]&&(e[a.camelCase(b)]=d[b]);else for(b in d)"string"==typeof d[b]&&(e[b]=d[b]);return e}var g=["add","remove","toggle"],d={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(c,b){a.fx.step[b]=function(a){("none"!==
a.end&&!a.setAttr||1===a.pos&&!a.setAttr)&&(jQuery.style(a.elem,b,a.end),a.setAttr=!0)}});a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))});a.effects.animateClass=function(c,b,k,e){var m=a.speed(b,k,e);return this.queue(function(){var b,e=a(this),k=e.attr("class")||"",p=m.children?e.find("*").addBack():e,p=p.map(function(){return{el:a(this),start:f(this)}});b=function(){a.each(g,function(a,b){c[b]&&e[b+"Class"](c[b])})};b();p=p.map(function(){this.end=
f(this.el[0]);var b=this.start,c=this.end,e,g,k={};for(e in c)g=c[e],b[e]!==g&&(d[e]||(a.fx.step[e]||!isNaN(parseFloat(g)))&&(k[e]=g));return this.diff=k,this});e.attr("class",k);p=p.map(function(){var b=this,c=a.Deferred(),d=a.extend({},m,{queue:!1,complete:function(){c.resolve(b)}});return this.el.animate(this.diff,d),c.promise()});a.when.apply(a,p.get()).done(function(){b();a.each(arguments,function(){var b=this.el;a.each(this.diff,function(a){b.css(a,"")})});m.complete.call(e[0])})})};a.fn.extend({addClass:function(c){return function(b,
d,e,f){return d?a.effects.animateClass.call(this,{add:b},d,e,f):c.apply(this,arguments)}}(a.fn.addClass),removeClass:function(c){return function(b,d,e,f){return 1<arguments.length?a.effects.animateClass.call(this,{remove:b},d,e,f):c.apply(this,arguments)}}(a.fn.removeClass),toggleClass:function(c){return function(b,d,e,f,g){return"boolean"==typeof d||d===m?e?a.effects.animateClass.call(this,d?{add:b}:{remove:b},e,f,g):c.apply(this,arguments):a.effects.animateClass.call(this,{toggle:b},d,e,f)}}(a.fn.toggleClass),
switchClass:function(c,b,d,e,f){return a.effects.animateClass.call(this,{add:b,remove:c},d,e,f)}})})();(function(){function f(d,c,b,f){return a.isPlainObject(d)&&(c=d,d=d.effect),d={effect:d},null==c&&(c={}),a.isFunction(c)&&(f=c,b=null,c={}),("number"==typeof c||a.fx.speeds[c])&&(f=b,b=c,c={}),a.isFunction(b)&&(f=b,b=null),c&&a.extend(d,c),b=b||c.duration,d.duration=a.fx.off?0:"number"==typeof b?b:b in a.fx.speeds?a.fx.speeds[b]:a.fx.speeds._default,d.complete=f||c.complete,d}function g(d){return!d||
"number"==typeof d||a.fx.speeds[d]?!0:"string"!=typeof d||a.effects.effect[d]?a.isFunction(d)?!0:"object"!=typeof d||d.effect?!1:!0:!0}a.extend(a.effects,{version:"1.10.3",save:function(a,c){for(var b=0;c.length>b;b++)null!==c[b]&&a.data("ui-effects-"+c[b],a[0].style[c[b]])},restore:function(a,c){var b,f;for(f=0;c.length>f;f++)null!==c[f]&&(b=a.data("ui-effects-"+c[f]),b===m&&(b=""),a.css(c[f],b))},setMode:function(a,c){return"toggle"===c&&(c=a.is(":hidden")?"show":"hide"),c},getBaseline:function(a,
c){var b,f;switch(a[0]){case "top":b=0;break;case "middle":b=0.5;break;case "bottom":b=1;break;default:b=a[0]/c.height}switch(a[1]){case "left":f=0;break;case "center":f=0.5;break;case "right":f=1;break;default:f=a[1]/c.width}return{x:f,y:b}},createWrapper:function(d){if(d.parent().is(".ui-effects-wrapper"))return d.parent();var c={width:d.outerWidth(!0),height:d.outerHeight(!0),"float":d.css("float")},b=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",
border:"none",margin:0,padding:0}),f={width:d.width(),height:d.height()},e=document.activeElement;try{e.id}catch(g){e=document.body}return d.wrap(b),(d[0]===e||a.contains(d[0],e))&&a(e).focus(),b=d.parent(),"static"===d.css("position")?(b.css({position:"relative"}),d.css({position:"relative"})):(a.extend(c,{position:d.css("position"),zIndex:d.css("z-index")}),a.each(["top","left","bottom","right"],function(a,b){c[b]=d.css(b);isNaN(parseInt(c[b],10))&&(c[b]="auto")}),d.css({position:"relative",top:0,
left:0,right:"auto",bottom:"auto"})),d.css(f),b.css(c).show()},removeWrapper:function(d){var c=document.activeElement;return d.parent().is(".ui-effects-wrapper")&&(d.parent().replaceWith(d),(d[0]===c||a.contains(d[0],c))&&a(c).focus()),d},setTransition:function(d,c,b,f){return f=f||{},a.each(c,function(a,c){var g=d.cssUnit(c);0<g[0]&&(f[c]=g[0]*b+g[1])}),f}});a.fn.extend({effect:function(){function d(b){function d(){a.isFunction(g)&&g.call(f[0]);a.isFunction(b)&&b()}var f=a(this),g=c.complete,k=c.mode;
(f.is(":hidden")?"hide"===k:"show"===k)?(f[k](),d()):e.call(f[0],c,d)}var c=f.apply(this,arguments),b=c.mode,g=c.queue,e=a.effects.effect[c.effect];return a.fx.off||!e?b?this[b](c.duration,c.complete):this.each(function(){c.complete&&c.complete.call(this)}):!1===g?this.each(d):this.queue(g||"fx",d)},show:function(a){return function(c){if(g(c))return a.apply(this,arguments);var b=f.apply(this,arguments);return b.mode="show",this.effect.call(this,b)}}(a.fn.show),hide:function(a){return function(c){if(g(c))return a.apply(this,
arguments);var b=f.apply(this,arguments);return b.mode="hide",this.effect.call(this,b)}}(a.fn.hide),toggle:function(a){return function(c){if(g(c)||"boolean"==typeof c)return a.apply(this,arguments);var b=f.apply(this,arguments);return b.mode="toggle",this.effect.call(this,b)}}(a.fn.toggle),cssUnit:function(d){var c=this.css(d),b=[];return a.each(["em","px","%","pt"],function(a,d){0<c.indexOf(d)&&(b=[parseFloat(c),d])}),b}})})();(function(){var f={};a.each(["Quad","Cubic","Quart","Quint","Expo"],function(a,
d){f[d]=function(c){return Math.pow(c,a+2)}});a.extend(f,{Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a){return 0===a||1===a?a:-Math.pow(2,8*(a-1))*Math.sin((80*(a-1)-7.5)*Math.PI/15)},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){for(var d,c=4;((d=Math.pow(2,--c))-1)/11>a;);return 1/Math.pow(4,3-c)-7.5625*Math.pow((3*d-2)/22-a,2)}});a.each(f,function(f,d){a.easing["easeIn"+f]=d;a.easing["easeOut"+f]=function(a){return 1-
d(1-a)};a.easing["easeInOut"+f]=function(a){return 0.5>a?d(2*a)/2:1-d(-2*a+2)/2}})})()})(jQuery);
(function(a){a.effects.effect.slide=function(m,f){var g,d=a(this),c="position top bottom left right width height".split(" "),b=a.effects.setMode(d,m.mode||"show"),k="show"===b;g=m.direction||"left";var e="up"===g||"down"===g?"top":"left",v="up"===g||"left"===g,l={};a.effects.save(d,c);d.show();g=m.distance||d["top"===e?"outerHeight":"outerWidth"](!0);a.effects.createWrapper(d).css({overflow:"hidden"});k&&d.css(e,v?isNaN(g)?"-"+g:-g:g);l[e]=(k?v?"+=":"-=":v?"-=":"+=")+g;d.animate(l,{queue:!1,duration:m.duration,
easing:m.easing,complete:function(){"hide"===b&&d.hide();a.effects.restore(d,c);a.effects.removeWrapper(d);f()}})}})(jQuery);
