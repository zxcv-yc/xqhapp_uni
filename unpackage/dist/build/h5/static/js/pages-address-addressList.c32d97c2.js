(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-addressList"],{4011:function(t,e,n){"use strict";var o=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n("795b")),a="https://hzdykj.boyaokj.cn/index.php/api/",i="https://hzdykj.boyaokj.cn/",c=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];n&&uni.showLoading();var o={url:a+t.url,data:e,method:t.method,header:"get"==t.method?{"X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/json; charset=UTF-8"}:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},dataType:"json"},i=new u.default(function(t,e){uni.request(o).then(function(e){t(e[1])}).catch(function(t){e(t)})});return n&&uni.hideLoading(),i},r=function(t,e){var n="";uni.getStorage({key:"token",success:function(t){n=t.data}});var o={url:a+t.url,data:e,method:t.method,header:"get"==t.method?{Token:n,"X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/json; charset=UTF-8"}:{Token:n,"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},dataType:"json"},i=new u.default(function(t,e){uni.request(o).then(function(e){t(e[1])}).catch(function(t){e(t)})});return i},d={baseUrl:a,httpRequest:c,httpTokenRequest:r,imgUrl:i};e.default=d},"4e9b":function(t,e,n){"use strict";n.r(e);var o=n("6f76"),u=n("b538");for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);var i,c=n("f0c5"),r=Object(c["a"])(u["default"],o["b"],o["c"],!1,null,"0d813577",null,!1,o["a"],i);e["default"]=r.exports},"6f76":function(t,e,n){"use strict";var o,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{})],1)},a=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return o})},b538:function(t,e,n){"use strict";n.r(e);var o=n("d37c"),u=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=u.a},d37c:function(t,e,n){"use strict";var o=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n("4011")),a={data:function(){return{imgUrl:u.default.imgUrl}},onLoad:function(){this.allRequest()},onShow:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},methods:{allRequest:function(){},aa:function(){uni.showLoading({title:"加载中"});var t={url:"",method:"post"},e={city_id:"370700"};u.default.httpTokenRequest(t,e).then(function(t){console.log(t.data),uni.hideLoading()},function(t){console.log(t),uni.hideLoading()})}}};e.default=a}}]);