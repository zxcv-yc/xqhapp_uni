(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/good/bendiGoodsInfo"],{"23ca":function(o,n,t){"use strict";var e=t("8a3f"),u=t.n(e);u.a},"496e":function(o,n,t){"use strict";var e={"u-swiper":function(){return t.e("uview-ui/components/u-swiper/u-swiper").then(t.bind(null,"e38e"))},"u-icon":function(){return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null,"c80c"))},"u-tag":function(){return t.e("uview-ui/components/u-tag/u-tag").then(t.bind(null,"5de4"))}},u=function(){var o=this,n=o.$createElement;o._self._c},i=[];t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return e}))},"4b4e":function(o,n,t){"use strict";(function(o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=u(t("f991"));function u(o){return o&&o.__esModule?o:{default:o}}var i={data:function(){return{imgUrl:e.default.imgUrl,list:[],goods_id:null,goods:"",shop:{}}},onLoad:function(o){console.log(o),this.goods_id=o.goods_id},onShow:function(){this.allRequest()},onPullDownRefresh:function(){},onReachBottom:function(){},methods:{allRequest:function(){this.getGoodsDetail()},getGoodsDetail:function(){var o=this,n={url:"shop/getGoodsDetail",method:"post"},t={city_id:"370700",user_id:"1629",goods_id:o.goods_id};e.default.httpTokenRequest(n,t).then((function(n){console.log(n.data),o.goods=n.data.data.goods,o.shop=n.data.data.goods.shop;var t=n.data.data.goods.many_pic,e=[];for(var u in t){var i={image:o.imgUrl+t[u]};e.push(i)}o.list=e,console.log(e),console.log(Boolean(o.goods.goods_option)),console.log(o.goods.goods_option)}),(function(o){console.log(o)}))},goIndex:function(){o.switchTab({url:"../index/index"})},callPhone:function(){var n=this;o.showModal({title:"提示",content:"您确定要拨打"+n.shop.mobile+"吗",success:function(t){t.confirm?o.makePhoneCall({phoneNumber:n.shop.mobile}):t.cancel&&console.log("用户点击取消")}})},toBuy:function(){o.navigateTo({url:"../order/bendiCreateOrder"})}}};n.default=i}).call(this,t("543d")["default"])},"7ddd":function(o,n,t){"use strict";t.r(n);var e=t("496e"),u=t("cdb7");for(var i in u)"default"!==i&&function(o){t.d(n,o,(function(){return u[o]}))}(i);t("23ca"),t("828e");var a,c=t("f0c5"),d=Object(c["a"])(u["default"],e["b"],e["c"],!1,null,"0633ea32",null,!1,e["a"],a);n["default"]=d.exports},"828e":function(o,n,t){"use strict";var e=t("d193"),u=t.n(e);u.a},"8a3f":function(o,n,t){},b5b1:function(o,n,t){"use strict";(function(o){t("0bf5"),t("921b");e(t("66fd"));var n=e(t("7ddd"));function e(o){return o&&o.__esModule?o:{default:o}}o(n.default)}).call(this,t("543d")["createPage"])},cdb7:function(o,n,t){"use strict";t.r(n);var e=t("4b4e"),u=t.n(e);for(var i in e)"default"!==i&&function(o){t.d(n,o,(function(){return e[o]}))}(i);n["default"]=u.a},d193:function(o,n,t){}},[["b5b1","common/runtime","common/vendor"]]]);