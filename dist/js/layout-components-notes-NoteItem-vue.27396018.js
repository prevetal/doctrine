(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["layout-components-notes-NoteItem-vue"],{"07da":function(e,t,s){},7978:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"note"},[s("div",{staticClass:"name"},[e._v(e._s(e.note.name))]),e.note.description?s("div",{staticClass:"desc"},[e._v(e._s(e.note.description))]):e._e(),s("button",{staticClass:"del_btn",on:{click:function(t){return t.preventDefault(),e.deleteNote(e.lessonSlug,e.note.id)}}},[s("svg",{staticClass:"icon"},[s("use",{attrs:{"xlink:href":"/images/sprite.svg#ic_delete"}})])])])},o=[],i=(s("07da"),{name:"NoteItem",props:["note","lessonSlug"],methods:{deleteNote:function(e,t){var s=this;this.$Progress.start(),this.$store.dispatch("userNotes/deleteNote",{lessonSlug:e,noteID:t}).then((function(){s.$Progress.finish()})),this.$store.dispatch("lessonInfo/deleteNote",t).then((function(){s.$Progress.finish()}))}}}),l=i,a=s("2877"),c=Object(a["a"])(l,n,o,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=layout-components-notes-NoteItem-vue.27396018.js.map