(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["layout-pages-auth-Login-vue"],{1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=(0,a.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(e){return(0,a.withParams)({type:"maxLength",max:e},(function(t){return!(0,a.req)(t)||(0,a.len)(t)<=e}))};t.default=n},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,a)}),!0)}))};t.default=n},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=(0,a.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=(0,a.regex)("numeric",/^[0-9]*$/);t.default=n},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(e){return(0,a.withParams)({type:"maxValue",max:e},(function(t){return!(0,a.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=n},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,i=(0,a.regex)("email",n);t.default=i},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(e){return(0,a.withParams)({type:"minLength",min:e},(function(t){return!(0,a.req)(t)||(0,a.len)(t)>=e}))};t.default=n},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=(0,a.regex)("alpha",/^[a-zA-Z]*$/);t.default=n},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(e){return(0,a.withParams)({type:"not"},(function(t,r){return!(0,a.req)(t)||!e.call(this,t,r)}))};t.default=n},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,i=(0,a.regex)("url",n);t.default=i},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return a.default}}),t.regex=t.ref=t.len=t.req=void 0;var a=n(r("8750"));function n(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var o=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===i(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=o;var s=function(e){return Array.isArray(e)?e.length:"object"===i(e)?Object.keys(e).length:String(e).length};t.len=s;var u=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=u;var l=function(e,t){return(0,a.default)({type:e},(function(e){return!o(e)||t.test(e)}))};t.regex=l},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="web"===Object({NODE_ENV:"production",VUE_APP_ACCOUNT_SITE_URL:"https://app.doctrine.im",VUE_APP_API_DOMAIN:"https://api.doctrine.im",VUE_APP_API_URL:"https://api.doctrine.im/api",VUE_APP_EXTENSION_CODE:"ru",VUE_APP_HTTPS:"true",VUE_APP_IMAGES_URL:"https://api.doctrine.im",VUE_APP_LANG:"ru",VUE_APP_NOTES_LIMIT:"50",VUE_APP_SITE_URL:"https://doctrine.im",VUE_APP_USER_TYPE1:"author",VUE_APP_USER_TYPE2:"user",BASE_URL:"/"}).BUILD?r("cb69").withParams:r("0234").withParams,n=a;t.default=n},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,a.withParams)({type:"macAddress"},(function(t){if(!(0,a.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(i)}))};t.default=n;var i=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(e){return(0,a.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,a.ref)(e,this,r)||(0,a.req)(t)}))};t.default=n},b2c5:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth"},[r("div",{staticClass:"title"},[r("transition",{attrs:{name:"fade"}},[r("button",{directives:[{name:"show",rawName:"v-show",value:e.email_selected,expression:"email_selected"}],staticClass:"back_btn",on:{click:function(t){t.preventDefault(),e.email_selected=!e.email_selected}}})]),r("span",[e._v(e._s(e.$t("message.auth_login_title")))])],1),r("form",{staticClass:"form",class:{processing:e.processing},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[e.email_selected?r("div",{key:"1",staticClass:"through_email"},[r("div",{staticClass:"line"},[r("div",{staticClass:"field",class:{invalid:e.$v.formData.login.$error}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formData.login,expression:"formData.login",modifiers:{trim:!0}},{name:"focus",rawName:"v-focus"}],staticClass:"input",class:{active:0!=e.formData.login.length},attrs:{type:"text"},domProps:{value:e.formData.login},on:{input:[function(t){t.target.composing||e.$set(e.formData,"login",t.target.value.trim())},e.$v.formData.login.$touch],blur:function(t){return e.$forceUpdate()}}}),r("div",{staticClass:"label"},[e._v(" "+e._s(e.$t("message.form_label_login"))+" ")]),!e.$v.formData.login.required&&e.$v.formData.login.$dirty?r("div",{staticClass:"error_text"},[e._v(" "+e._s(e.$t("message.valid_error_required"))+" ")]):e._e()])]),r("div",{staticClass:"line"},[r("div",{staticClass:"field",class:{invalid:e.$v.formData.password.$error}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formData.password,expression:"formData.password",modifiers:{trim:!0}}],staticClass:"input input_password",class:{active:0!=e.formData.password.length},attrs:{type:e.passwordFieldType},domProps:{value:e.formData.password},on:{keypress:function(t){e.checkingСharacters(t)},input:[function(t){t.target.composing||e.$set(e.formData,"password",t.target.value.trim())},e.$v.formData.password.$touch],blur:function(t){return e.$forceUpdate()}}}),r("div",{staticClass:"label"},[e._v(" "+e._s(e.$t("message.form_label_password"))+" ")]),!e.$v.formData.password.required&&e.$v.formData.password.$dirty?r("div",{staticClass:"error_text"},[e._v(" "+e._s(e.$t("message.valid_error_required"))+" ")]):e._e(),!e.$v.formData.password.minLength&&e.$v.formData.password.$dirty?r("div",{staticClass:"error_text"},[e._v(" "+e._s(e.$t("message.valid_error_minLength",{count:e.$v.formData.password.$params.minLength.min}))+" ")]):e._e(),!e.$v.formData.password.maxLength&&e.$v.formData.password.$dirty?r("div",{staticClass:"error_text"},[e._v(" "+e._s(e.$t("message.valid_error_maxLength",{count:e.$v.formData.password.$params.maxLength.max}))+" ")]):e._e(),r("button",{staticClass:"view_btn",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.switchFieldType(t)}}},["password"==e.passwordFieldType?r("svg",{staticClass:"icon"},[r("use",{attrs:{"xlink:href":"/images/sprite.svg#ic_view"}})]):r("svg",{staticClass:"icon icon_a"},[r("use",{attrs:{"xlink:href":"/images/sprite.svg#ic_view_a"}})])])])]),r("div",{staticClass:"line remember"},[r("div",{staticClass:"field"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.remember,expression:"formData.remember"}],attrs:{type:"checkbox",value:"true",id:"remember_check",checked:""},domProps:{checked:Array.isArray(e.formData.remember)?e._i(e.formData.remember,"true")>-1:e.formData.remember},on:{change:function(t){var r=e.formData.remember,a=t.target,n=!!a.checked;if(Array.isArray(r)){var i="true",o=e._i(r,i);a.checked?o<0&&e.$set(e.formData,"remember",r.concat([i])):o>-1&&e.$set(e.formData,"remember",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.formData,"remember",n)}}}),r("label",{attrs:{for:"remember_check"}},[e._v(" "+e._s(e.$t("message.form_remember"))+" ")])])]),r("div",{staticClass:"submit"},[r("button",{staticClass:"submit_btn",attrs:{type:"submit",disabled:e.$v.$invalid}},[e._v(" "+e._s(e.$t("message.btn_login"))+" ")])]),r("div",{staticClass:"links"},[r("router-link",{attrs:{to:"/recovery"}},[e._v(" "+e._s(e.$t("message.btn_forgot"))+" ")])],1)]):r("div",{key:"2",staticClass:"line socials"},[r("div",{staticClass:"field"},[r("button",{staticClass:"through_email_btn big",attrs:{type:"button"},on:{click:function(t){t.preventDefault(),e.email_selected=!e.email_selected}}},[r("div",{staticClass:"icon"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/images/auth_email_logo.svg",expression:"'/images/auth_email_logo.svg'"}],staticClass:"lazyload",attrs:{alt:""}})]),r("div",[e._v(e._s(e.$t("message.auth_social_email_phone")))])]),r("button",{attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.AuthProvider("vkontakte")}}},[r("div",{staticClass:"icon"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/images/auth_vk_logo.svg",expression:"'/images/auth_vk_logo.svg'"}],staticClass:"lazyload",attrs:{alt:""}})]),r("div",[e._v(e._s(e.$t("message.auth_social_vk")))])]),r("button",{attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.AuthProvider("facebook")}}},[r("div",{staticClass:"icon"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"images/auth_fb_logo.svg",expression:"'images/auth_fb_logo.svg'"}],staticClass:"lazyload",attrs:{alt:""}})]),r("div",[e._v(e._s(e.$t("message.auth_social_fb")))])]),r("button",{attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.AuthProvider("google")}}},[r("div",{staticClass:"icon"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/images/auth_google_logo.svg",expression:"'/images/auth_google_logo.svg'"}],staticClass:"lazyload",attrs:{alt:""}})]),r("div",[e._v(e._s(e.$t("message.auth_social_google")))])])])])])],1),r("div",{staticClass:"bottom"},[e._v(" "+e._s(e.$t("message.auth_dont_have_account"))+" "),r("router-link",{attrs:{to:"/register"}},[e._v(" "+e._s(e.$t("message.btn_register_now"))+" ")])],1)])},n=[],i=(r("ac1f"),r("5319"),r("b5ae")),o={name:"Login",metaInfo:function(){return{title:this.$i18n.t("message.page_title_login")}},data:function(){return{processing:!1,email_selected:!1,passwordFieldType:"password",formData:{login:"",password:"",remember:!0}}},validations:{formData:{login:{required:i["required"]},password:{required:i["required"],minLength:Object(i["minLength"])(8),maxLength:Object(i["maxLength"])(32)}}},methods:{switchFieldType:function(){this.passwordFieldType="password"===this.passwordFieldType?"text":"password"},"checkingСharacters":function(e){var t=e.keyCode||e.which;/[A-Za-z0-9!@#$%^&*()+=.,/]/.test(String.fromCharCode(t))||e.preventDefault()},AuthProvider:function(e){var t=this;this.$auth.authenticate(e).then((function(r){t.SocialLogin(e,r)})).catch((function(e){console.log({err:e})}))},SocialLogin:function(e,t){var r=this;this.axios.post("https://api.doctrine.im/social-auth/"+e,t).then((function(e){e.data?(r.$store.commit("user/SET_USER",e.data),r.$router.push("/".concat(r.$store.state.user.data.route,"/courses"))):r.$router.push({name:"Register"})})).catch((function(e){console.log({err:e})}))},onSubmit:function(){var e=this;this.processing=!0,this.$Progress.start();var t=JSON.parse(JSON.stringify(this.formData)),r=Object(i["email"])(t.login);r||(t.login=t.login.replace(/[\s-()]/g,"")),this.$store.dispatch("user/login",t).then((function(t){if(t.error)return e.processing=!1,e.$toast.error(e.$t("message.notification_error_login")),void e.$Progress.finish();e.$router.push("/".concat(e.$store.state.user.data.route,"/courses"))}))}}},s=o,u=r("2877"),l=Object(u["a"])(s,a,n,!1,null,null,null);t["default"]=l.exports},b5ae:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return $.default}}),t.helpers=void 0;var a=j(r("6235")),n=j(r("3a54")),i=j(r("45b8")),o=j(r("ec11")),s=j(r("5d75")),u=j(r("c99d")),l=j(r("91d3")),f=j(r("2a12")),c=j(r("5db3")),d=j(r("d4f4")),m=j(r("aa82")),v=j(r("e652")),p=j(r("b6cb")),_=j(r("772d")),g=j(r("d294")),b=j(r("3360")),h=j(r("6417")),y=j(r("eb66")),P=j(r("46bc")),w=j(r("1331")),$=j(r("c301")),x=O(r("78ef"));function O(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}function j(e){return e&&e.__esModule?e:{default:e}}t.helpers=x},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(e){return(0,a.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,a.ref)(e,this,r)}))};t.default=n},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=(0,a.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=(0,a.withParams)({type:"ipAddress"},(function(e){if(!(0,a.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(i)}));t.default=n;var i=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var a="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},n=function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))},i=a.vuelidate?a.vuelidate.withParams:n;t.withParams=i}).call(this,r("c8ba"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,a)}),!1)}))};t.default=n},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=(0,a.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,a.req)(e.trim()):(0,a.req)(e)}));t.default=n},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(e){return(0,a.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,a.ref)(e,this,r)||(0,a.req)(t)}))};t.default=n},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(e){return(0,a.withParams)({type:"minValue",min:e},(function(t){return!(0,a.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=n},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(e,t){return(0,a.withParams)({type:"between",min:e,max:t},(function(r){return!(0,a.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t.default=n}}]);
//# sourceMappingURL=layout-pages-auth-Login-vue.18fb6353.js.map