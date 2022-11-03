(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c76a6c1e"],{"1c0b":function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return r}));var n=a("b775");function o(e){return Object(n["a"])({url:"/createRealEstate",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/queryRealEstateList",method:"post",data:e})}},"5e87":function(e,t,a){"use strict";a("86f4")},"86f4":function(e,t,a){},"8d49":function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return r})),a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return l}));var n=a("b775");function o(e){return Object(n["a"])({url:"/queryDonatingList",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/queryDonatingListByGrantee",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/updateDonating",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/createDonating",method:"post",data:e})}},"945e":function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return r})),a.d(t,"b",(function(){return i})),a.d(t,"e",(function(){return l})),a.d(t,"a",(function(){return s}));var n=a("b775");function o(e){return Object(n["a"])({url:"/querySellingList",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/querySellingListByBuyer",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/createSellingByBuy",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/updateSelling",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/createSelling",method:"post",data:e})}},e825:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("el-alert",{attrs:{type:"success"}},[a("p",[e._v("Account ID: "+e._s(e.accountId))]),a("p",[e._v("username: "+e._s(e.userName))]),a("p",[e._v("Balance: $ "+e._s(e.balance)+" dollar")]),a("p",[e._v(" After the sales, donation or pledge operations, the guarantee status is true ")]),a("p",[e._v(" When the guarantee status is false, the sale, donation or pledge operation can be initiated ")])]),0==e.realEstateList.length?a("div",{staticStyle:{"text-align":"center"}},[a("el-alert",{attrs:{title:"Can't check the data",type:"warning"}})],1):e._e(),a("el-row",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{gutter:20}},e._l(e.realEstateList,(function(t,n){return a("el-col",{key:n,attrs:{span:6,offset:1}},[a("el-card",{staticClass:"realEstate-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e._v(" Guarantee: "),a("span",{staticStyle:{color:"rgb(255, 0, 0)"}},[e._v(e._s(t.encumbrance))])]),a("div",{staticClass:"item"},[a("el-tag",[e._v("Real estate ID: ")]),a("span",[e._v(e._s(t.realEstateId))])],1),a("div",{staticClass:"item"},[a("el-tag",{attrs:{type:"success"}},[e._v("Owner ID: ")]),a("span",[e._v(e._s(t.proprietor))])],1),a("div",{staticClass:"item"},[a("el-tag",{attrs:{type:"warning"}},[e._v("Overall space: ")]),a("span",[e._v(e._s(t.totalArea)+" ㎡")])],1),a("div",{staticClass:"item"},[a("el-tag",{attrs:{type:"danger"}},[e._v("Living Space: ")]),a("span",[e._v(e._s(t.livingSpace)+" ㎡")])],1),t.encumbrance||"admin"===e.roles[0]?e._e():a("div",[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.openDialog(t)}}},[e._v("sell")]),a("el-divider",{attrs:{direction:"vertical"}}),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.openDonatingDialog(t)}}},[e._v("Donate")])],1),"admin"===e.roles[0]?a("el-rate"):e._e()],1)],1)})),1),a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingDialog,expression:"loadingDialog"}],attrs:{visible:e.dialogCreateSelling,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogCreateSelling=t},close:function(t){return e.resetForm("realForm")}}},[a("el-form",{ref:"realForm",attrs:{model:e.realForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"Price (yuan)",prop:"price"}},[a("el-input-number",{attrs:{precision:2,step:1e4,min:0},model:{value:e.realForm.price,callback:function(t){e.$set(e.realForm,"price",t)},expression:"realForm.price"}})],1),a("el-form-item",{attrs:{label:"Validity (Sky)",prop:"salePeriod"}},[a("el-input-number",{attrs:{min:1},model:{value:e.realForm.salePeriod,callback:function(t){e.$set(e.realForm,"salePeriod",t)},expression:"realForm.salePeriod"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.createSelling("realForm")}}},[e._v("Sale now")]),a("el-button",{on:{click:function(t){e.dialogCreateSelling=!1}}},[e._v("Cancel")])],1)],1),a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingDialog,expression:"loadingDialog"}],attrs:{visible:e.dialogCreateDonating,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogCreateDonating=t},close:function(t){return e.resetForm("DonatingForm")}}},[a("el-form",{ref:"DonatingForm",attrs:{model:e.DonatingForm,rules:e.rulesDonating,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"owner",prop:"proprietor"}},[a("el-select",{attrs:{placeholder:"Please choose the owner"},on:{change:e.selectGet},model:{value:e.DonatingForm.proprietor,callback:function(t){e.$set(e.DonatingForm,"proprietor",t)},expression:"DonatingForm.proprietor"}},e._l(e.accountList,(function(t){return a("el-option",{key:t.accountId,attrs:{label:t.userName,value:t.accountId}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.userName))]),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.accountId))])])})),1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.createDonating("DonatingForm")}}},[e._v("Donation immediately")]),a("el-button",{on:{click:function(t){e.dialogCreateDonating=!1}}},[e._v("Cancel")])],1)],1)],1)},o=[],r=a("5530"),i=(a("d9e2"),a("4de4"),a("d3b7"),a("2f62")),l=a("5723"),s=a("1c0b"),c=a("945e"),u=a("8d49"),d={name:"RealeState",data:function(){var e=function(e,t,a){t<=0?a(new Error("Must be greater than 0")):a()};return{loading:!0,loadingDialog:!1,realEstateList:[],dialogCreateSelling:!1,dialogCreateDonating:!1,realForm:{price:0,salePeriod:0},rules:{price:[{validator:e,trigger:"blur"}],salePeriod:[{validator:e,trigger:"blur"}]},DonatingForm:{proprietor:""},rulesDonating:{proprietor:[{required:!0,message:"Please choose the owner",trigger:"change"}]},accountList:[],valItem:{}}},computed:Object(r["a"])({},Object(i["b"])(["accountId","roles","userName","balance"])),created:function(){var e=this;"admin"===this.roles[0]?Object(s["b"])().then((function(t){null!==t&&(e.realEstateList=t),e.loading=!1})).catch((function(t){e.loading=!1})):Object(s["b"])({proprietor:this.accountId}).then((function(t){null!==t&&(e.realEstateList=t),e.loading=!1})).catch((function(t){e.loading=!1}))},methods:{openDialog:function(e){this.dialogCreateSelling=!0,this.valItem=e},openDonatingDialog:function(e){var t=this;this.dialogCreateDonating=!0,this.valItem=e,Object(l["b"])().then((function(e){null!==e&&(t.accountList=e.filter((function(e){return"administrator"!==e.userName&&e.accountId!==t.accountId})))}))},createSelling:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.$confirm("Whether to sell immediately?","hint",{confirmButtonText:"Sure",cancelButtonText:"Cancel",type:"success"}).then((function(){t.loadingDialog=!0,Object(c["a"])({objectOfSale:t.valItem.realEstateId,seller:t.valItem.proprietor,price:t.realForm.price,salePeriod:t.realForm.salePeriod}).then((function(e){t.loadingDialog=!1,t.dialogCreateSelling=!1,null!==e?t.$message({type:"success",message:"Successful sale!"}):t.$message({type:"error",message:"Sale failure!"}),setTimeout((function(){window.location.reload()}),1e3)})).catch((function(e){t.loadingDialog=!1,t.dialogCreateSelling=!1}))})).catch((function(){t.loadingDialog=!1,t.dialogCreateSelling=!1,t.$message({type:"info",message:"Cancelled on sale"})}))}))},createDonating:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.$confirm("Whether to donate immediately?","hint",{confirmButtonText:"Sure",cancelButtonText:"Cancel",type:"success"}).then((function(){t.loadingDialog=!0,Object(u["a"])({objectOfDonating:t.valItem.realEstateId,donor:t.valItem.proprietor,grantee:t.DonatingForm.proprietor}).then((function(e){t.loadingDialog=!1,t.dialogCreateDonating=!1,null!==e?t.$message({type:"success",message:"Successful donation!"}):t.$message({type:"error",message:"Donation failed!"}),setTimeout((function(){window.location.reload()}),1e3)})).catch((function(e){t.loadingDialog=!1,t.dialogCreateDonating=!1}))})).catch((function(){t.loadingDialog=!1,t.dialogCreateDonating=!1,t.$message({type:"info",message:"Donation has been canceled"})}))}))},resetForm:function(e){this.$refs[e].resetFields()},selectGet:function(e){this.DonatingForm.proprietor=e}}},g=d,p=(a("5e87"),a("2877")),f=Object(p["a"])(g,n,o,!1,null,null,null);t["default"]=f.exports}}]);