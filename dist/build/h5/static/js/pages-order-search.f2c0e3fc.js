(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-search"],{3003:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return i}));var i={"rf-load-more":r("f97d").default},n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"rf-order-search"},[r("v-uni-view",{staticClass:"rf-header-box"},[r("v-uni-view",{staticClass:"rf-header",style:{width:t.width+"px",height:t.height+"px"}},[r("v-uni-view",{staticClass:"rf-back",style:{marginTop:t.arrowTop+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[r("v-uni-text",{staticClass:"iconfont iconzuo"})],1),r("v-uni-view",{staticClass:"input-box",style:{marginTop:t.inputTop+"px"}},[r("v-uni-input",{attrs:{placeholder:"请输入关键字","placeholder-style":"font-size: 24upx; color:#ccc;",type:"text"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.handleOrderSearch.apply(void 0,arguments)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),r("v-uni-text",{staticClass:"icon iconfont iconsousuo2",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.handleOrderSearch.apply(void 0,arguments)}}})],1)],1)],1),r("v-uni-scroll-view",{staticClass:"list-scroll-content",style:{top:t.height+"px"},attrs:{"scroll-y":!0}},[t._l(t.orderList,(function(e,i){return r("v-uni-view",{key:i,staticClass:"rf-order-item"},[r("v-uni-view",{staticClass:"i-top b-b"},[r("v-uni-text",{staticClass:"time"},[t._v("订单号："+t._s(e.order_sn))]),0!==parseInt(e.order_status,10)?r("v-uni-text",{staticClass:"state"},[t._v(t._s(t._f("orderStatusFilter")(e.order_status)))]):r("v-uni-view",{staticClass:"example-body"},[r("rf-count-down",{attrs:{"show-day":!1,second:t.second(e.created_at),color:"#FFFFFF","background-color":t.themeColor.color,"border-color":t.themeColor.color},on:{timeup:function(r){arguments[0]=r=t.$handleEvent(r),t.timeUp(e)}}})],1)],1),t._l(e.product,(function(e,i){return r("v-uni-view",{key:i,staticClass:"goods-box-single",on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.navTo("/pages/product/product?id="+e.product_id)}}},[r("v-uni-image",{staticClass:"goods-img",attrs:{src:e.product_picture,mode:"aspectFill"}}),r("v-uni-view",{staticClass:"right"},[r("v-uni-text",{staticClass:"title in2line"},[t._v(t._s(e.product_name))]),r("v-uni-text",{staticClass:"attr-box"},[t._v(t._s(e.sku_name||t.singleSkuText))]),r("v-uni-text",{staticClass:"price",class:"text-"+t.themeColor.name},[t._v(t._s(t.moneySymbol)+t._s(e.price)+" * "+t._s(e.num))])],1)],1)})),r("v-uni-view",{staticClass:"price-box"},[t._v("共"),r("v-uni-text",{staticClass:"num"},[t._v(t._s(e.product_count))]),t._v("件商品 实付款"),r("v-uni-text",{staticClass:"price"},[t._v(t._s(e.pay_money))])],1),r("v-uni-view",{staticClass:"action-box b-t"},[r("v-uni-button",{staticClass:"action-btn",class:"bg-"+t.themeColor.name,on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.navTo("/pages/order/detail?id="+e.id)}}},[t._v("订单详情")])],1)],2)})),t.orderList.length>0?r("rf-load-more",{attrs:{status:t.loadingType}}):t._e()],2),0!==t.orderList.length||t.loading?t._e():r("rf-empty",{attrs:{info:"暂无相关订单"}}),r("rfLoading",{attrs:{isFullScreen:!0,active:t.loading}})],1)},o=[]},"35a5":function(t,e,r){"use strict";r.r(e);var i=r("3003"),n=r("e60a");for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);r("3ce2");var a,s=r("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"978dfc8a",null,!1,i["a"],a);e["default"]=c.exports},"3ce2":function(t,e,r){"use strict";var i=r("55a7"),n=r.n(i);n.a},"4079a":function(t,e,r){var i=r("24fb");e=i(!1),e.push([t.i,".rf-order-search .rf-header-box[data-v-978dfc8a]{width:100%;background:#fff;position:fixed;z-index:100;left:0;top:0}.rf-order-search .rf-header-box .rf-header[data-v-978dfc8a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.rf-order-search .rf-header-box .rf-header .rf-back[data-v-978dfc8a]{margin-left:%?8?%;height:32px!important;width:32px!important;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.rf-order-search .rf-header-box .rf-header .rf-back .iconzuo[data-v-978dfc8a]{font-size:%?36?%;font-weight:500;color:#303133}.rf-order-search .rf-header-box .input-box[data-v-978dfc8a]{width:100%;font-size:%?24?%;box-sizing:border-box;color:#999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;height:%?60?%;background-color:#f8f8f8;border-radius:%?30?%;position:relative;margin:0 %?20?% 0 %?10?%}.rf-order-search .rf-header-box .input-box .iconsousuo2[data-v-978dfc8a]{z-index:100;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:0;right:0;width:%?60?%;height:%?60?%;font-size:%?36?%;color:#303133}.rf-order-search .rf-header-box .input-box uni-input[data-v-978dfc8a]{width:100%;padding-left:%?28?%;height:%?28?%;color:#606266;font-size:%?28?%}.rf-order-search .list-scroll-content[data-v-978dfc8a]{position:relative}",""]),t.exports=e},"55a7":function(t,e,r){var i=r("4079a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=r("4f06").default;n("510fd6c6",i,!0,{sourceMap:!1,shadowMode:!1})},b1c8:function(t,e,r){"use strict";var i=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("8e6e"),r("456d");var n=i(r("75fc")),o=i(r("bd86"));r("96cf");var a=i(r("3b8d"));r("ac6a");var s=i(r("f97d")),c=i(r("5028")),l=r("802d"),d=i(r("18aa")),u=r("c4c8"),f=i(r("93f4"));function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){(0,o.default)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v={components:{rfLoadMore:s.default,rfCountDown:d.default},data:function(){return{loadingType:"more",orderList:[],page:1,loading:!0,keyword:null,height:64,moneySymbol:this.moneySymbol,inputTop:0,arrowTop:0,singleSkuText:this.singleSkuText}},computed:{second:function(){return function(t){return Math.floor(900-(new Date/1e3-t))}}},filters:{time:function(t){return(0,c.default)(1e3*t).format("YYYY-MM-DD HH:mm:ss")},orderStatusFilter:function(t){var e;return f.default.orderStatus.forEach((function(r){r.key===parseInt(t,10)&&(e=r.value)})),e}},onLoad:function(t){var e=this,r={};uni.getSystemInfo({success:function(t){e.width=r.left||t.windowWidth,e.height=r.top?r.top+r.height+8:t.statusBarHeight+44,e.inputTop=r.top?r.top+(r.height-30)/2:t.statusBarHeight+7,e.arrowTop=r.top?r.top+(r.height-32)/2:t.statusBarHeight+6}}),this.initData(t)},onPullDownRefresh:function(){this.page=1,this.orderList.length=0,this.getOrderList("refresh")},onReachBottom:function(){"nomore"!==this.loadingType&&(this.page++,this.getOrderList())},methods:{back:function(){this.$mRouter.back()},navTo:function(t){this.$mRouter.push({route:t})},timeUp:function(t){this.handleOrderClose(t.id)},handleOrderClose:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("".concat(u.orderClose),{id:e}).then((function(){r.$mHelper.toast("订单取消成功"),setTimeout((function(){r.page=1,r.orderList.length=0,r.getOrderList()}),500)}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),initData:function(t){this.keyword=t.keyword,this.orderList.length=0,this.page=1,this.getOrderList()},handleOrderSearch:function(){this.orderList.length=0,this.page=1,this.getOrderList()},getOrderList:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var r,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={},r.keyword=this.keyword,r.page=this.page,t.next=5,this.$http.get("".concat(l.orderList),p({},r)).then((function(t){i.loading=!1,"refresh"===e&&uni.stopPullDownRefresh(),i.loadingType=10===t.data.length?"more":"nomore",i.orderList=[].concat((0,n.default)(i.orderList),(0,n.default)(t.data))})).catch((function(){i.loading=!1,"refresh"===e&&uni.stopPullDownRefresh()}));case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}};e.default=v},e60a:function(t,e,r){"use strict";r.r(e);var i=r("b1c8"),n=r.n(i);for(var o in i)"default"!==o&&function(t){r.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a}}]);