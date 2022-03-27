(function(){"use strict";var e={3618:function(e,t,r){var a=r(8935),o=r(2424),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app"},[r("form",{staticClass:"form",attrs:{action:"./",method:"post"}},[r("div",{staticClass:"fieldsets-wrapper"},[r("CommonInfoFieldSet",{attrs:{$v:e.$v}}),r("AddressInfoFieldSet",{attrs:{$v:e.$v}}),r("PassportInfoFieldSet",{attrs:{$v:e.$v}})],1),r("input",{staticClass:"input button",attrs:{type:"submit",value:"Создать нового клиента"},on:{click:e.onSubmit}})])])},i=[],s=r(6409),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("fieldset",{staticClass:"fieldset"},[r("span",{staticClass:"fieldset__title"},[e._v("Общая информация")]),r("ValidatedInput",{attrs:{inputName:"lastName",label:"Фамилия",$v:e.$v}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.lastName.$model,expression:"$v.lastName.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.lastName.$error},attrs:{type:"text",placeholder:"Введите фамилию"},domProps:{value:e.$v.lastName.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.lastName,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{inputName:"firstName",label:"Имя",$v:e.$v}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.firstName.$model,expression:"$v.firstName.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.firstName.$error},attrs:{type:"text",placeholder:"Введите имя"},domProps:{value:e.$v.firstName.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.firstName,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{inputName:"middleName",label:"Отчество",$v:e.$v}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.middleName.$model,expression:"$v.middleName.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.middleName.$error},attrs:{type:"text",placeholder:"Введите отчество"},domProps:{value:e.$v.middleName.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.middleName,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{inputName:"birthdate",label:"Дата рождения",$v:e.$v}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.birthdate.$model,expression:"$v.birthdate.$model"}],staticClass:"input",class:{"input--error":e.$v.birthdate.$error},attrs:{type:"date"},domProps:{value:e.$v.birthdate.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.birthdate,"$model",t.target.value)}}})]),r("ValidatedInput",{attrs:{inputName:"phoneNumber",label:"Номер телефона",$v:e.$v}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.phoneNumber.$model,expression:"$v.phoneNumber.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.phoneNumber.$error},attrs:{type:"text",placeholder:"7 XXX XXX XX XX"},domProps:{value:e.$v.phoneNumber.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.phoneNumber,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{inputName:"gender",label:"Пол",$v:e.$v}},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.$v.gender.$model,expression:"$v.gender.$model"}],staticClass:"input",class:{"input--error":e.$v.gender.$error},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$v.gender,"$model",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"default"}},[e._v("Выберите пол")]),r("option",{attrs:{value:"male"}},[e._v("Мужской")]),r("option",{attrs:{value:"female"}},[e._v("Женский")])])]),r("ValidatedInput",{attrs:{inputName:"customerGroup",label:"Группа клиентов",$v:e.$v}},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.$v.customerGroup.$model,expression:"$v.customerGroup.$model"}],staticClass:"input",class:{"input--error":e.$v.customerGroup.$error},attrs:{multiple:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$v.customerGroup,"$model",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"vip"}},[e._v("VIP")]),r("option",{attrs:{value:"problematic"}},[e._v("Проблемные")]),r("option",{attrs:{value:"oms"}},[e._v("ОМС")])])]),r("ValidatedInput",{attrs:{inputName:"treatingDoctor",label:"Лечащий врач",$v:e.$v}},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.$v.treatingDoctor.$model,expression:"$v.treatingDoctor.$model"}],staticClass:"input",class:{"input--error":e.$v.treatingDoctor.$error},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$v.treatingDoctor,"$model",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"default"}},[e._v("Выберите лечащего врача")]),r("option",{attrs:{value:"ivanov"}},[e._v("Иванов")]),r("option",{attrs:{value:"zaharov"}},[e._v("Захаров")]),r("option",{attrs:{value:"chernisheva"}},[e._v("Чернышева")])])]),r("ValidatedInput",{attrs:{inputName:"dontSendSMS",label:"Не отправлять SMS",labelRow:"",$v:e.$v}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.dontSendSMS.$model,expression:"$v.dontSendSMS.$model"}],staticClass:"input",class:{"input--error":e.$v.dontSendSMS.$error},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.$v.dontSendSMS.$model)?e._i(e.$v.dontSendSMS.$model,null)>-1:e.$v.dontSendSMS.$model},on:{change:function(t){var r=e.$v.dontSendSMS.$model,a=t.target,o=!!a.checked;if(Array.isArray(r)){var n=null,i=e._i(r,n);a.checked?i<0&&e.$set(e.$v.dontSendSMS,"$model",r.concat([n])):i>-1&&e.$set(e.$v.dontSendSMS,"$model",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.$v.dontSendSMS,"$model",o)}}})])],1)},u=[],m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("label",{class:{"label-row":e.labelRow}},[e._v(" "+e._s(e.label)+e._s(e.$v[e.inputName].$params.required?"*":"")+" "),e._t("default")],2),e._l(e.$v[e.inputName].$params,(function(t){return e.$v[e.inputName].$error&&!e.$v[e.inputName][t.type]?r("div",{staticClass:"error"},[e._v(" "+e._s(e.getErrorHint(t))+" ")]):e._e()}))],2)},p=[],d={name:"ValidatedInput",props:{$v:Object,inputName:String,label:String,labelRow:Boolean},methods:{getLocalDate(e){return e.toLocaleDateString("en-GB").split("/").join("-")},getErrorHint(e){switch(e.type){case"required":case"notDefault":return"Поле обязательно для заполнения";case"numeric":return"Значение должно состоять только из цифр";case"alpha":return"Значение должно состоять только из букв";case"length":return`Длина должна быть равна ${e.value} символам`;case"minLength":return`Длина не должна быть меньше ${e.min} символов`;case"maxLength":return`Длина не должна быть больше ${e.max} символов`;case"minDate":return`Значение должно быть не меньше ${this.getLocalDate(e.value)}`;case"maxDate":return`Значение должно быть не больше ${this.getLocalDate(e.value)}`;case"startsWith":return`Значение должно начинаться с ${e.value}`;default:return"Ошибка!"}}}},v=d,c=r(1001),$=(0,c.Z)(v,m,p,!1,null,"278e264f",null),f=$.exports,g={name:"CommonInfoFieldSet",components:{ValidatedInput:f},props:{$v:Object}},h=g,b=(0,c.Z)(h,l,u,!1,null,null,null),N=b.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("fieldset",{staticClass:"fieldset"},[r("span",{staticClass:"fieldset__title"},[e._v("Адрес")]),r("ValidatedInput",{attrs:{inputName:"index",label:"Индекс",$v:e.$v}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.index.$model,expression:"$v.index.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.index.$error},attrs:{type:"text",placeholder:"XXXYYY"},domProps:{value:e.$v.index.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.index,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{inputName:"country",label:"Страна",$v:e.$v}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.country.$model,expression:"$v.country.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.country.$error},attrs:{type:"text",placeholder:"Введите страну"},domProps:{value:e.$v.country.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.country,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{inputName:"region",label:"Область",$v:e.$v}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.region.$model,expression:"$v.region.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.region.$error},attrs:{type:"text",placeholder:"Введите область"},domProps:{value:e.$v.region.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.region,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{inputName:"city",label:"Город",$v:e.$v}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.city.$model,expression:"$v.city.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.city.$error},attrs:{type:"text",placeholder:"Введите город"},domProps:{value:e.$v.city.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.city,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{inputName:"street",label:"Улица",$v:e.$v}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.street.$model,expression:"$v.street.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.street.$error},attrs:{type:"text",placeholder:"Введите улицу"},domProps:{value:e.$v.street.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.street,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{inputName:"house",label:"Дом",$v:e.$v}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.house.$model,expression:"$v.house.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.house.$error},attrs:{type:"text",placeholder:"Введите дом"},domProps:{value:e.$v.house.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.house,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])],1)},x=[],y={name:"AddressInfoFieldSet",components:{ValidatedInput:f},props:{$v:Object}},_=y,w=(0,c.Z)(_,S,x,!1,null,null,null),C=w.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("fieldset",{staticClass:"fieldset"},[r("span",{staticClass:"fieldset__title"},[e._v("Паспорт")]),r("ValidatedInput",{attrs:{inputName:"documentType",label:"Тип документа",$v:e.$v}},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.$v.documentType.$model,expression:"$v.documentType.$model"}],staticClass:"input",class:{"input--error":e.$v.documentType.$error},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$v.documentType,"$model",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"default"}},[e._v("Выберите тип документа")]),r("option",{attrs:{value:"passport"}},[e._v("Паспорт")]),r("option",{attrs:{value:"birth-certificate"}},[e._v("Свидетельство о рождении")]),r("option",{attrs:{value:"drivers-license"}},[e._v("Вод. удостоверение")])])]),r("ValidatedInput",{attrs:{inputName:"passportSeries",label:"Серия",$v:e.$v}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.passportSeries.$model,expression:"$v.passportSeries.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.passportSeries.$error},attrs:{type:"text",placeholder:"XXXX"},domProps:{value:e.$v.passportSeries.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.passportSeries,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{inputName:"passportNumber",label:"Номер",$v:e.$v}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.passportNumber.$model,expression:"$v.passportNumber.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.passportNumber.$error},attrs:{type:"text",placeholder:"YYYYYY"},domProps:{value:e.$v.passportNumber.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.passportNumber,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{inputName:"passportSource",label:"Кем выдан",$v:e.$v}},[r("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.passportSource.$model,expression:"$v.passportSource.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.passportSource.$error},attrs:{type:"text",placeholder:"Введите кем выдан паспорт"},domProps:{value:e.$v.passportSource.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.passportSource,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{inputName:"passportDate",label:"Дата выдачи",$v:e.$v}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.passportDate.$model,expression:"$v.passportDate.$model"}],staticClass:"input",class:{"input--error":e.$v.passportDate.$error},attrs:{type:"date"},domProps:{value:e.$v.passportDate.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.passportDate,"$model",t.target.value)}}})])],1)},I=[],P={name:"PassportInfoFieldSet",components:{ValidatedInput:f},props:{$v:Object}},V=P,M=(0,c.Z)(V,D,I,!1,null,null,null),B=M.exports;const X=e=>s.BM.withParams({type:"minDate",value:e},(t=>!t||new Date(t).setHours(0,0,0,0)>=e.setHours(0,0,0,0))),L=e=>s.BM.withParams({type:"maxDate",value:e},(t=>!t||new Date(t).setHours(0,0,0,0)<=e.setHours(0,0,0,0))),O=e=>s.BM.withParams({type:"length",value:e},(t=>!t||t.length===e)),A=e=>s.BM.withParams({type:"length",value:e},(t=>!t||t.replaceAll(" ","").length===e)),U=e=>s.BM.withParams({type:"startsWith",value:e},(t=>!t||t[0]===e)),k=s.BM.withParams({type:"notDefault",value:"default"},(e=>!e||"default"!==e)),j=s.BM.regex("numeric",/^[0-9\s]*$/);var q={name:"App",components:{CommonInfoFieldSet:N,AddressInfoFieldSet:C,PassportInfoFieldSet:B},data(){return{lastName:"",firstName:"",middleName:"",birthdate:"",phoneNumber:"",gender:"default",customerGroup:[],treatingDoctor:"default",dontSendSMS:!1,index:"",country:"",region:"",city:"",street:"",house:"",documentType:"default",passportSeries:"",passportNumber:"",passportSource:"",passportDate:""}},validations:{lastName:{required:s.C1,maxLength:(0,s.BS)(50)},firstName:{required:s.C1,maxLength:(0,s.BS)(50)},middleName:{maxLength:(0,s.BS)(50)},birthdate:{required:s.C1,minDate:X(new Date("1900-01-01")),maxDate:L(new Date)},phoneNumber:{required:s.C1,numeric:j,length:A(11),startsWith:U("7")},gender:{},customerGroup:{required:s.C1},treatingDoctor:{},dontSendSMS:{},index:{numeric:j,length:A(6)},country:{maxLength:(0,s.BS)(50)},region:{maxLength:(0,s.BS)(50)},city:{required:s.C1,maxLength:(0,s.BS)(50)},street:{maxLength:(0,s.BS)(50)},house:{maxLength:(0,s.BS)(50)},documentType:{required:s.C1,notDefault:k},passportSeries:{numeric:s.uR,length:O(4)},passportNumber:{numeric:s.uR,length:O(6)},passportSource:{maxLength:(0,s.BS)(50)},passportDate:{required:s.C1,minDate:X(new Date("1900-01-01")),maxDate:L(new Date)}},methods:{onSubmit(e){e.preventDefault(),this.$v.$touch(),this.$v.$invalid||alert("Новый клиент успешно создан")}}},F=q,T=(0,c.Z)(F,n,i,!1,null,"429b5528",null),Y=T.exports;a.Z.use(o.ZP),new a.Z({render:e=>e(Y)}).$mount("#app"),a.Z.config.devtools=!0}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,a,o,n){if(!a){var i=1/0;for(m=0;m<e.length;m++){a=e[m][0],o=e[m][1],n=e[m][2];for(var s=!0,l=0;l<a.length;l++)(!1&n||i>=n)&&Object.keys(r.O).every((function(e){return r.O[e](a[l])}))?a.splice(l--,1):(s=!1,n<i&&(i=n));if(s){e.splice(m--,1);var u=o();void 0!==u&&(t=u)}}return t}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[a,o,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,n,i=a[0],s=a[1],l=a[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var m=l(r)}for(t&&t(a);u<i.length;u++)n=i[u],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(m)},a=self["webpackChunkm_test_task_form"]=self["webpackChunkm_test_task_form"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(3618)}));a=r.O(a)})();
//# sourceMappingURL=app.ef378521.js.map