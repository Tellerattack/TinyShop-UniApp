(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-invoice-manage"],{"0016":function(e,t,i){var r=i("1556");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("7dccf9fa",r,!0,{sourceMap:!1,shadowMode:!1})},"011e":function(e,t,i){"use strict";var r;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"invoice-manage rf-row-wrapper"},[i("v-uni-view",{staticClass:"row b-b"},[i("v-uni-text",{staticClass:"tit"},[e._v("发票类型")]),i("v-uni-radio-group",{staticClass:"invoice-type",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.handleInvoiceTypeChange.apply(void 0,arguments)}}},e._l(e.invoiceType,(function(t,r){return i("v-uni-label",{key:r,staticClass:"invoice-type-item"},[i("v-uni-radio",{staticClass:"gender-item-radio",attrs:{size:"small",color:e.themeColor.name,value:""+t.value,checked:t.value===e.invoiceData.type}}),i("v-uni-text",{staticClass:"gender-item-text"},[e._v(e._s(t.name))])],1)})),1)],1),i("v-uni-view",{staticClass:"row b-b"},[i("v-uni-text",{staticClass:"tit"},[e._v("发票抬头")]),i("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入发票抬头","placeholder-class":"placeholder"},model:{value:e.invoiceData.title,callback:function(t){e.$set(e.invoiceData,"title",t)},expression:"invoiceData.title"}})],1),1===parseInt(e.invoiceData.type,10)?i("v-uni-view",{staticClass:"row b-b"},[i("v-uni-text",{staticClass:"tit"},[e._v("发票税号")]),i("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入发票税号","placeholder-class":"placeholder"},model:{value:e.invoiceData.duty_paragraph,callback:function(t){e.$set(e.invoiceData,"duty_paragraph",t)},expression:"invoiceData.duty_paragraph"}})],1):e._e(),i("v-uni-view",{staticClass:"row default-row"},[i("v-uni-text",{staticClass:"tit"},[e._v("设为默认")]),i("v-uni-switch",{attrs:{checked:!!e.invoiceData.is_default,color:e.themeColor.name},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.switchChange.apply(void 0,arguments)}}})],1),i("v-uni-button",{staticClass:"add-btn",class:"bg-"+e.themeColor.name,attrs:{disabled:e.btnLoading,loading:e.btnLoading},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.confirm.apply(void 0,arguments)}}},[e._v("提交")])],1)},a=[]},1556:function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,"uni-page-body[data-v-51d6d5b2]{background:#f8f8f8}.invoice-manage[data-v-51d6d5b2]{padding-top:%?20?%}.invoice-manage .invoice-type-item[data-v-51d6d5b2]{margin-right:%?20?%}.invoice-manage .invoice-type-item .gender-item-text[data-v-51d6d5b2]{margin-left:%?10?%}body.?%PAGE?%[data-v-51d6d5b2]{background:#f8f8f8}",""]),e.exports=t},"68af":function(e,t,i){"use strict";var r=i("0016"),n=i.n(r);n.a},"802d":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.memberLevelIndex=t.productVirtualVerificationVerify=t.orderProductVirtualView=t.orderProductVirtualIndex=t.notifySubscriptionConfigIndex=t.notifySubscriptionConfigUpConfig=t.notifyUnRreadCount=t.notifyClearAll=t.notifyClear=t.notifyReadAll=t.notifyRead=t.notifyView=t.notifyIndex=t.orderProductIndex=t.orderCustomerRefundClose=t.orderCustomerRefundApply=t.orderCustomerSalesReturn=t.rechargeConfigIndex=t.thirdPartyAuthDelete=t.thirdPartyAuthList=t.opinionDetail=t.opinionCreate=t.opinionList=t.uploadImage=t.orderInvoiceList=t.orderInvoiceCreate=t.invoiceDel=t.invoiceDefault=t.invoiceDetail=t.invoiceUpdate=t.invoiceCreate=t.invoiceList=t.evaluateAgain=t.evaluateCreate=t.creditsLogList=t.collectList=t.footPrintDel=t.footPrintList=t.couponReceive=t.orderTakeDelivery=t.orderDelete=t.orderDetail=t.orderProductSalesReturn=t.closeOrderRefundApply=t.orderRefundApply=t.orderList=t.couponDetail=t.couponClear=t.myCouponList=t.couponList=t.addressDelete=t.addressUpdate=t.addressDetail=t.addressDefault=t.addressCreate=t.addressList=t.memberUpdate=t.memberInfo=void 0;var r="/tiny-shop/v1/member/member/index";t.memberInfo=r;var n="/tiny-shop/v1/member/member/update";t.memberUpdate=n;var a="/tiny-shop/v1/member/address/index";t.addressList=a;var o="/tiny-shop/v1/member/address/default";t.addressDefault=o;var s="/tiny-shop/v1/member/address/view";t.addressDetail=s;var c="/tiny-shop/v1/member/address/create";t.addressCreate=c;var d="/tiny-shop/v1/member/address/update";t.addressUpdate=d;var v="/tiny-shop/v1/member/address/delete";t.addressDelete=v;var u="/tiny-shop/v1/marketing/coupon-type/index";t.couponList=u;var p="/tiny-shop/v1/member/coupon/index";t.myCouponList=p;var l="/tiny-shop/v1/marketing/coupon-type/view";t.couponDetail=l;var m="/tiny-shop/v1/marketing/coupon-type/create";t.couponReceive=m;var h="/tiny-shop/v1/member/coupon/clear";t.couponClear=h;var f="/tiny-shop/v1/member/order/index";t.orderList=f;var y="/tiny-shop/v1/member/order/take-delivery";t.orderTakeDelivery=y;var b="/tiny-shop/v1/member/order-product/refund-apply";t.orderRefundApply=b;var g="/tiny-shop/v1/member/order-product/refund-sales-return";t.orderProductSalesReturn=g;var C="/tiny-shop/v1/member/order-product/refund-close";t.closeOrderRefundApply=C;var x="/tiny-shop/v1/member/order/view";t.orderDetail=x;var D="/tiny-shop/v1/member/order/delete";t.orderDelete=D;var w="/tiny-shop/v1/member/footprint/index";t.footPrintList=w;var R="/tiny-shop/v1/member/footprint/delete";t.footPrintDel=R;var L="/tiny-shop/v1/member/collect/index";t.collectList=L;var I="/tiny-shop/v1/member/credits-log/index";t.creditsLogList=I;var k="/tiny-shop/v1/member/evaluate/create";t.evaluateCreate=k;var _="/tiny-shop/v1/member/evaluate/again";t.evaluateAgain=_;var P="/tiny-shop/v1/member/order-product/index";t.orderProductIndex=P;var $="/tiny-shop/v1/member/invoice/index";t.invoiceList=$;var A="/tiny-shop/v1/member/invoice/create";t.invoiceCreate=A;var V="/tiny-shop/v1/member/invoice/update";t.invoiceUpdate=V;var U="/tiny-shop/v1/member/invoice/view";t.invoiceDetail=U;var T="/tiny-shop/v1/member/invoice/default";t.invoiceDefault=T;var S="/tiny-shop/v1/member/invoice/delete";t.invoiceDel=S;var B="/tiny-shop/v1/member/order-invoice/index";t.orderInvoiceList=B;var q="/tiny-shop/v1/member/order-invoice/create";t.orderInvoiceCreate=q;var E="/tiny-shop/v1/member/opinion/index";t.opinionList=E;var O="/tiny-shop/v1/member/opinion/create";t.opinionCreate=O;var G="/tiny-shop/v1/member/opinion/view";t.opinionDetail=G;var M="/tiny-shop/v1/member/auth/index";t.thirdPartyAuthList=M;var j="/tiny-shop/v1/member/auth/delete";t.thirdPartyAuthDelete=j;var H="/tiny-shop/v1/member/recharge-config/index";t.rechargeConfigIndex=H;var F="/tiny-shop/v1/member/order-customer/apply";t.orderCustomerRefundApply=F;var J="/tiny-shop/v1/member/order-customer/sales-return";t.orderCustomerSalesReturn=J;var z="/tiny-shop/v1/member/order-customer/close";t.orderCustomerRefundClose=z;var N="/tiny-shop/v1/common/file/images";t.uploadImage=N;var K="/tiny-shop/v1/member/notify/index";t.notifyIndex=K;var Q="/tiny-shop/v1/member/notify/view";t.notifyView=Q;var W="/tiny-shop/v1/member/notify/read";t.notifyRead=W;var X="/tiny-shop/v1/member/notify/read-all";t.notifyReadAll=X;var Y="/tiny-shop/v1/member/notify/clear";t.notifyClear=Y;var Z="/tiny-shop/v1/member/notify/clear-all";t.notifyClearAll=Z;var ee="/tiny-shop/v1/member/notify/un-read-count";t.notifyUnRreadCount=ee;var te="/tiny-shop/v1/member/notify-subscription-config/index";t.notifySubscriptionConfigIndex=te;var ie="/tiny-shop/v1/member/notify-subscription-config/up-config";t.notifySubscriptionConfigUpConfig=ie;var re="/tiny-shop/v1/member/order-product-virtual/index";t.orderProductVirtualIndex=re;var ne="/tiny-shop/v1/member/order-product-virtual/view";t.orderProductVirtualView=ne;var ae="/tiny-shop/v1/order/product-virtual-verification/verify";t.productVirtualVerificationVerify=ae;var oe="/tiny-shop/v1/member/member-level/index";t.memberLevelIndex=oe},"9d59":function(e,t,i){"use strict";i.r(t);var r=i("a7ab"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a},a7ab:function(e,t,i){"use strict";var r=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var n=r(i("3b8d")),a=i("802d"),o={data:function(){return{invoiceData:{type:2,title:"",duty_paragraph:"",is_default:""},invoiceType:[{name:"公司",value:1},{name:"个人",value:2}],reqBody:{},btnLoading:!1}},onLoad:function(e){this.initData(e)},methods:{initData:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i="新增发票","edit"!==t.type){e.next=5;break}return i="编辑发票",e.next=5,this.getInvoiceDetail(t.id);case 5:this.manageType=t.type,uni.setNavigationBarTitle({title:i});case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getInvoiceDetail:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("".concat(a.invoiceDetail),{id:t}).then(function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i.invoiceData=t.data;case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleInvoiceTypeChange:function(e){this.invoiceData.type=e.detail.value},switchChange:function(e){this.invoiceData.is_default=e.detail.value?"1":"0"},confirm:function(){var e;this.reqBody["title"]=this.invoiceData["title"],1===parseInt(this.invoiceData["type"],10)?(this.reqBody["duty_paragraph"]=this.invoiceData["duty_paragraph"],e=this.$mGraceChecker.check(this.reqBody,this.$mFormRule.cInvoiceRule)):2===parseInt(this.invoiceData["type"],10)&&(e=this.$mGraceChecker.check(this.reqBody,this.$mFormRule.pInvoiceRule)),e?(this.btnLoading=!0,"edit"===this.manageType?this.handleInvoiceUpdate(this.invoiceData):this.handleInvoiceCreate(this.invoiceData)):this.$mHelper.toast(this.$mGraceChecker.error)},handleInvoiceUpdate:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.put("".concat(a.invoiceUpdate,"?id=").concat(t.id),t).then((function(){i.btnLoading=!1,i.$mHelper.toast("恭喜您, 发票修改成功！"),i.$mRouter.back()})).catch((function(){i.btnLoading=!1}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleInvoiceCreate:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post("".concat(a.invoiceCreate),t).then((function(){i.btnLoading=!1,i.$mHelper.toast("恭喜您, 发票添加成功！"),i.$mRouter.back()})).catch((function(){i.btnLoading=!1}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}};t.default=o},acea:function(e,t,i){"use strict";i.r(t);var r=i("011e"),n=i("9d59");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("68af");var o,s=i("f0c5"),c=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"51d6d5b2",null,!1,r["a"],o);t["default"]=c.exports}}]);