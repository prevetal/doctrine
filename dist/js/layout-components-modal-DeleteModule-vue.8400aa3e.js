(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["layout-components-modal-DeleteModule-vue"],{6780:function(t,e,s){"use strict";s.r(e);var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"modal_container"},[s("section",{staticClass:"modal_scroll",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeModal(e)}}},[s("section",{staticClass:"modal"},[s("button",{staticClass:"close",on:{click:function(e){return e.preventDefault(),t.closeModal(e)}}}),s("div",{staticClass:"modal_title"},[t._v(" "+t._s(t.$t("message.modal_title_delete_module"))+" ")]),s("div",{staticClass:"detele_confirm"},[s("img",{staticClass:"icon",attrs:{src:"/images/ic_delete_confirm.svg",alt:""}}),s("div",{staticClass:"title",domProps:{innerHTML:t._s(t.$t("message.modal_delete_module_confirm"))}}),s("div",{staticClass:"btns"},[s("button",{on:{click:function(e){return e.preventDefault(),t.closeModal(e)}}},[t._v(" "+t._s(t.$t("message.no"))+" ")]),s("button",{staticClass:"yes",on:{click:function(e){return e.preventDefault(),t.deleteModule(e)}}},[t._v(" "+t._s(t.$t("message.yes"))+" ")])])])])])])},o=[],n={name:"DeleteModuleModal",methods:{closeModal:function(){this.$emit("closeModalEvent")},deleteModule:function(){this.$Progress.start(),this.$root.$emit("deleteModuleEvent"),this.closeModal()}}},a=n,c=s("2877"),i=Object(c["a"])(a,l,o,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=layout-components-modal-DeleteModule-vue.8400aa3e.js.map