(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["layout-components-lessons-LessonItem3-vue"],{"5d81":function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"lesson"},[t("router-link",{staticClass:"thumb",attrs:{to:"/lesson/"+s.lesson.author.slug+"/"+s.lesson.slug}},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.imagesUrl+s.lesson.image,expression:"imagesUrl + lesson.image"}],staticClass:"lazyload",attrs:{alt:""}})]),t("div",{staticClass:"info"},[t("div",{staticClass:"name"},[t("span",[s._v(s._s(s.lesson.name))]),t("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:s.appUrl+"/lesson/"+s.lesson.author.slug+"/"+s.lesson.slug,expression:"`${appUrl}/lesson/${lesson.author.slug}/${lesson.slug}`",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:s.onCopy,expression:"onCopy",arg:"success"}],staticClass:"copy_btn",attrs:{type:"button"}},[t("svg",{staticClass:"icon"},[t("use",{attrs:{"xlink:href":"/images/sprite.svg#ic_copy"}})])])]),t("div",{staticClass:"cat"},[s._v(s._s(s.lesson.category.name))]),t("div",{staticClass:"peoples"},[t("svg",{staticClass:"icon"},[t("use",{attrs:{"xlink:href":"/images/sprite.svg#ic_people"}})]),t("span",[s._v(s._s(s.lesson.users_count))])]),s.lesson.files_count?t("div",{staticClass:"materials"},[t("svg",{staticClass:"icon"},[t("use",{attrs:{"xlink:href":"/images/sprite.svg#ic_materials"}})]),t("span",[s._v(s._s(s.$tc("message.course_components_materials_count",s.lesson.files_count)))])]):s._e()]),t("div",{staticClass:"btns"},[t("button",{staticClass:"edit_link",on:{click:function(e){return e.preventDefault(),s.$root.$emit("openCreateLessonModalEvent",s.lesson.id)}}},[s._v(" "+s._s(s.$t("message.btn_edit"))+" ")])])],1)},n=[],o=(t("ae7b"),{name:"LessonItem",props:["lesson"],data:function(){return{imagesUrl:"https://api.doctrine.im",appUrl:"https://app.doctrine.im"}},methods:{onCopy:function(){this.$toast.success(this.$t("message.notification_success_link_copy"))}}}),i=o,l=t("2877"),c=Object(l["a"])(i,a,n,!1,null,null,null);e["default"]=c.exports},ae7b:function(s,e,t){}}]);
//# sourceMappingURL=layout-components-lessons-LessonItem3-vue.f65dac29.js.map