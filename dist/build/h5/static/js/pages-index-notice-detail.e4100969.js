(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-notice-detail"],{"05b9":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("3b8d")),r=n("2b74"),o=i(n("5028")),c={data:function(){return{announceDetail:{},id:void 0,loading:!0}},filters:{time:function(t){return(0,o.default)(1e3*t).format("YYYY-MM-DD HH:mm")}},onLoad:function(t){this.id=t.id,this.getNotifyAnnounceView(t.id)},onShareAppMessage:function(){return{title:this.banner.title,path:"/pages/index/notice/detail?id=".concat(this.id)}},methods:{getNotifyAnnounceView:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("".concat(r.notifyAnnounceView),{id:e}).then((function(t){n.loading=!1,n.announceDetail=t.data,uni.setNavigationBarTitle({title:t.data.title})})).catch((function(){n.loading=!1}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}};e.default=c},"12c3":function(t,e,n){"use strict";var i=n("67a8"),a=n.n(i);a.a},"3d05":function(t,e,n){"use strict";n.r(e);var i=n("05b9"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"44f4":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".rf-notice-detail .banner[data-v-3b36dbb8]{overflow:hidden;position:relative;background-color:#ccc}.rf-notice-detail .banner .banner-img[data-v-3b36dbb8]{height:%?300?%;width:100%}.rf-notice-detail .banner .banner-title[data-v-3b36dbb8]{max-height:%?84?%;overflow:hidden;position:absolute;bottom:0;width:100%;font-size:%?32?%;font-weight:400;line-height:%?42?%;color:#fff;z-index:11;background-color:rgba(0,0,0,.25);padding:%?4?% %?20?%}.rf-notice-detail .banner-title[data-v-3b36dbb8]{padding:%?30?% %?30?% 0;font-size:%?32?%}.rf-notice-detail .article-meta[data-v-3b36dbb8]{padding:%?20?% %?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;color:grey}.rf-notice-detail .article-meta .article-text[data-v-3b36dbb8]{font-size:%?26?%;line-height:%?50?%;margin:0 %?20?%}.rf-notice-detail .article-meta .article-author[data-v-3b36dbb8],.rf-notice-detail .article-meta .article-time[data-v-3b36dbb8]{font-size:%?30?%}.rf-notice-detail .article-content[data-v-3b36dbb8]{padding:0 %?30?%;overflow:hidden;font-size:%?30?%;margin-bottom:%?30?%}",""]),t.exports=e},"67a8":function(t,e,n){var i=n("44f4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("56c2b717",i,!0,{sourceMap:!1,shadowMode:!1})},"711d":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={"rf-image":n("b19a").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"rf-notice-detail"},[t.announceDetail.cover?n("v-uni-view",{staticClass:"banner"},[n("rf-image",{staticClass:"banner-img",attrs:{src:t.announceDetail.cover}}),n("v-uni-view",{staticClass:"banner-title in2line"},[t._v(t._s(t.announceDetail.title))])],1):t._e(),t.announceDetail.cover?t._e():n("v-uni-view",{staticClass:"banner-title"},[t._v(t._s(t.announceDetail.title))]),t.announceDetail.created_at?n("v-uni-view",{staticClass:"article-meta"},[n("v-uni-text",{staticClass:"article-author"},[t._v(t._s(t.announceDetail.author_name))]),n("v-uni-text",{staticClass:"article-text"},[t._v("发布于")]),n("v-uni-text",{staticClass:"article-time"},[t._v(t._s(t._f("time")(t.announceDetail.created_at)))])],1):t._e(),n("v-uni-view",{staticClass:"article-content"},[n("rf-parser",{attrs:{"lazy-load":!0,html:t.announceDetail.content}})],1),t.announceDetail||t.loading?t._e():n("rf-empty",{attrs:{info:"暂无商城公告详情"}}),n("rfLoading",{attrs:{isFullScreen:!0,active:t.loading}})],1)},r=[]},a82a:function(t,e,n){"use strict";n.r(e);var i=n("711d"),a=n("3d05");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("12c3");var o,c=n("f0c5"),l=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"3b36dbb8",null,!1,i["a"],o);e["default"]=l.exports}}]);