(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/member/memberCenter"],{5863:function(e,t,n){"use strict";var a=n("f23e"),o=n.n(a);o.a},"5d88":function(e,t,n){"use strict";(function(e){n("0bf5"),n("921b");a(n("66fd"));var t=a(n("a85b"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},9086:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("f991"));function o(e){return e&&e.__esModule?e:{default:e}}var u={data:function(){return{imgUrl:a.default.imgUrl,pageNum:1,giftList:[],list:[{image:"../../static/member_center/hy@3x.png",name:"会员专享价"},{image:"../../static/member_center/zs@3x.png",name:"专属免单"},{image:"../../static/member_center/kk@3x.png",name:"开卡礼包"},{image:"../../static/member_center/tc@3x.png",name:"提成奖励"},{image:"../../static/member_center/sr@3x.png",name:"生日福利"},{image:"../../static/member_center/jf@3x.png",name:"积分加成"}]}},onLoad:function(){this.allRequest()},onShow:function(){},onPullDownRefresh:function(){e.stopPullDownRefresh()},onReachBottom:function(){},methods:{allRequest:function(){this.getPackage()},nowOpenCard:function(t){console.log(t),e.navigateTo({url:"./giftInfo?goods_id="+t})},getPackage:function(){var e=this,t={url:"Package/getPackage",method:"post"},n={city_id:"370700",pageSize:10,pageNum:this.pageNum};a.default.httpTokenRequest(t,n).then((function(t){console.log(t.data),e.giftList=t.data.data}),(function(e){console.log(e)}))}}};t.default=u}).call(this,n("543d")["default"])},"939e":function(e,t,n){"use strict";var a,o=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}))},a548:function(e,t,n){"use strict";n.r(t);var a=n("9086"),o=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=o.a},a85b:function(e,t,n){"use strict";n.r(t);var a=n("939e"),o=n("a548");for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);n("5863");var i,c=n("f0c5"),r=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);t["default"]=r.exports},f23e:function(e,t,n){}},[["5d88","common/runtime","common/vendor"]]]);