(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-sticky/u-sticky"],{"005e":function(t,e,n){"use strict";var i=n("b38a"),s=n.n(i);s.a},"0e80":function(t,e,n){"use strict";var i,s=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"2b8b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-sticky",props:{offsetTop:{type:[Number,String],default:0},index:{type:[Number,String],default:""},enable:{type:Boolean,default:!0},h5NavHeight:{type:[Number,String],default:44},bgColor:{type:String,default:"#ffffff"},zIndex:{type:[Number,String],default:""}},data:function(){return{fixed:!1,height:"auto",stickyTop:0,elClass:this.$u.guid(),left:0,width:"auto"}},watch:{offsetTop:function(t){this.initObserver()},enable:function(t){0==t?(this.fixed=!1,this.disconnectObserver("contentObserver")):this.initObserver()}},computed:{uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.sticky}},mounted:function(){this.initObserver()},methods:{initObserver:function(){var e=this;this.enable&&(this.stickyTop=0!=this.offsetTop?t.upx2px(this.offsetTop):0,this.disconnectObserver("contentObserver"),this.$uGetRect("."+this.elClass).then((function(t){e.height=t.height,e.left=t.left,e.width=t.width,e.$nextTick((function(){e.observeContent()}))})))},observeContent:function(){var t=this;this.disconnectObserver("contentObserver");var e=this.createIntersectionObserver({thresholds:[.95,.98,1]});e.relativeToViewport({top:-this.stickyTop}),e.observe("."+this.elClass,(function(e){t.enable&&t.setFixed(e.boundingClientRect.top)})),this.contentObserver=e},setFixed:function(t){var e=t<this.stickyTop;this.fixed=e,e&&this.$emit("fixed",this.index)},disconnectObserver:function(t){var e=this[t];e&&e.disconnect()}}};e.default=n}).call(this,n("543d")["default"])},"7ac5":function(t,e,n){"use strict";n.r(e);var i=n("0e80"),s=n("e87f");for(var r in s)"default"!==r&&function(t){n.d(e,t,(function(){return s[t]}))}(r);n("005e");var o,u=n("f0c5"),c=Object(u["a"])(s["default"],i["b"],i["c"],!1,null,"f44b2a6a",null,!1,i["a"],o);e["default"]=c.exports},b38a:function(t,e,n){},e87f:function(t,e,n){"use strict";n.r(e);var i=n("2b8b"),s=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=s.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-sticky/u-sticky-create-component',
    {
        'uview-ui/components/u-sticky/u-sticky-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7ac5"))
        })
    },
    [['uview-ui/components/u-sticky/u-sticky-create-component']]
]);