(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-verification-code/u-verification-code"],{"13b4":function(e,t,n){"use strict";var i=n("41df"),c=n.n(i);c.a},"25d3":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"u-verification-code",props:{seconds:{type:[String,Number],default:60},startText:{type:String,default:"获取验证码"},changeText:{type:String,default:"X秒重新获取"},endText:{type:String,default:"重新获取"},keepRunning:{type:Boolean,default:!1}},data:function(){return{secNum:this.seconds,timer:null,canGetCode:!0}},mounted:function(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler:function(e){this.secNum=e}}},methods:{checkKeepRunning:function(){var t=Number(e.getStorageSync("$uCountDownTimestamp")),n=Math.floor(+new Date/1e3);this.keepRunning&&t&&t>n?(this.secNum=t-n,e.setStorageSync("$uCountDownTimestamp",0),this.start()):this.changeEvent(this.startText)},start:function(){var e=this;this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeText.replace(/x|X/,this.secNum)),this.timer=setInterval((function(){--e.secNum?e.changeEvent(e.changeText.replace(/x|X/,e.secNum)):(clearInterval(e.timer),e.changeEvent(e.endText),e.secNum=e.seconds,e.$emit("end"),e.canGetCode=!0),e.setTimeToStorage()}),1e3)},reset:function(){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent:function(e){this.$emit("change",e)},setTimeToStorage:function(){if(this.keepRunning&&this.secNum>0&&this.secNum<this.seconds){var t=Math.floor(+new Date/1e3);e.setStorage({key:"$uCountDownTimestamp",data:t+this.secNum})}}},beforeDestroy:function(){clearTimeout(this.timer),this.timer=null,this.setTimeToStorage()}};t.default=n}).call(this,n("543d")["default"])},"41df":function(e,t,n){},abcb:function(e,t,n){"use strict";n.r(t);var i=n("25d3"),c=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=c.a},c6d3:function(e,t,n){"use strict";n.r(t);var i=n("da3d"),c=n("abcb");for(var a in c)"default"!==a&&function(e){n.d(t,e,(function(){return c[e]}))}(a);n("13b4");var s,u=n("f0c5"),o=Object(u["a"])(c["default"],i["b"],i["c"],!1,null,"dcdab4ec",null,!1,i["a"],s);t["default"]=o.exports},da3d:function(e,t,n){"use strict";var i,c=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-verification-code/u-verification-code-create-component',
    {
        'uview-ui/components/u-verification-code/u-verification-code-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c6d3"))
        })
    },
    [['uview-ui/components/u-verification-code/u-verification-code-create-component']]
]);