(function(){"use strict";var e={3762:function(e,t,r){r(6992),r(8674),r(9601),r(7727);var a=r(9567),n=r(2424),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app"},[r("form",{staticClass:"form",attrs:{action:"./",method:"post"}},[r("div",{staticClass:"fieldsets-wrapper"},[r("CommonInfoFieldSet",{attrs:{$v:e.$v}}),r("AddressInfoFieldSet",{attrs:{$v:e.$v}}),r("PassportInfoFieldSet",{attrs:{$v:e.$v}})],1),r("div",{staticClass:"flex-column-center"},[r("input",{staticClass:"button",class:{"button--disabled":e.$v.$anyError},attrs:{type:"submit",value:"Создать нового клиента",disabled:e.$v.$anyError},on:{click:e.handleSubmitButtonClick}}),e.$v.$anyError?r("span",{staticClass:"error error--center"},[e._v("Некоторые поля заполнены неправильно")]):e._e()])])])},s=[],i=(r(4916),r(5306),r(8757),r(6409)),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("fieldset",{staticClass:"fieldset"},[r("span",{staticClass:"fieldset__title"},[e._v("Общая информация")]),r("ValidatedInput",{attrs:{label:"Фамилия",vInput:e.$v["lastName"]}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.lastName.$model,expression:"$v.lastName.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.lastName.$error},attrs:{type:"text",placeholder:"Введите фамилию"},domProps:{value:e.$v.lastName.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.lastName,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{label:"Имя",vInput:e.$v["firstName"]}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.firstName.$model,expression:"$v.firstName.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.firstName.$error},attrs:{type:"text",placeholder:"Введите имя"},domProps:{value:e.$v.firstName.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.firstName,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{label:"Отчество",vInput:e.$v["middleName"]}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.middleName.$model,expression:"$v.middleName.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.middleName.$error},attrs:{type:"text",placeholder:"Введите отчество"},domProps:{value:e.$v.middleName.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.middleName,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{label:"Дата рождения",vInput:e.$v["birthdate"]}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.birthdate.$model,expression:"$v.birthdate.$model"}],staticClass:"input",class:{"input--error":e.$v.birthdate.$error},attrs:{type:"date"},domProps:{value:e.$v.birthdate.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.birthdate,"$model",t.target.value)}}})]),r("ValidatedInput",{attrs:{label:"Номер телефона",vInput:e.$v["phoneNumber"]}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.phoneNumber.$model,expression:"$v.phoneNumber.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.phoneNumber.$error},attrs:{type:"tel",placeholder:"7 XXX XXX XX XX"},domProps:{value:e.$v.phoneNumber.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.phoneNumber,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{label:"Пол",vInput:e.$v["gender"]}},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.$v.gender.$model,expression:"$v.gender.$model"}],staticClass:"input",class:{"input--error":e.$v.gender.$error},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$v.gender,"$model",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"default"}},[e._v("Выберите пол")]),r("option",{attrs:{value:"male"}},[e._v("Мужской")]),r("option",{attrs:{value:"female"}},[e._v("Женский")])])]),r("ValidatedInput",{attrs:{label:"Группа клиентов",vInput:e.$v["customerGroup"]}},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.$v.customerGroup.$model,expression:"$v.customerGroup.$model"}],staticClass:"input",class:{"input--error":e.$v.customerGroup.$error},attrs:{multiple:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$v.customerGroup,"$model",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"vip"}},[e._v("VIP")]),r("option",{attrs:{value:"problematic"}},[e._v("Проблемные")]),r("option",{attrs:{value:"oms"}},[e._v("ОМС")])])]),r("ValidatedInput",{attrs:{label:"Лечащий врач",vInput:e.$v["treatingDoctor"]}},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.$v.treatingDoctor.$model,expression:"$v.treatingDoctor.$model"}],staticClass:"input",class:{"input--error":e.$v.treatingDoctor.$error},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$v.treatingDoctor,"$model",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"default"}},[e._v("Выберите лечащего врача")]),r("option",{attrs:{value:"ivanov"}},[e._v("Иванов")]),r("option",{attrs:{value:"zaharov"}},[e._v("Захаров")]),r("option",{attrs:{value:"chernisheva"}},[e._v("Чернышева")])])]),r("ValidatedInput",{attrs:{label:"Не отправлять SMS",labelRow:"",vInput:e.$v["dontSendSMS"]}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.dontSendSMS.$model,expression:"$v.dontSendSMS.$model"}],staticClass:"input",class:{"input--error":e.$v.dontSendSMS.$error},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.$v.dontSendSMS.$model)?e._i(e.$v.dontSendSMS.$model,null)>-1:e.$v.dontSendSMS.$model},on:{change:function(t){var r=e.$v.dontSendSMS.$model,a=t.target,n=!!a.checked;if(Array.isArray(r)){var o=null,s=e._i(r,o);a.checked?s<0&&e.$set(e.$v.dontSendSMS,"$model",r.concat([o])):s>-1&&e.$set(e.$v.dontSendSMS,"$model",r.slice(0,s).concat(r.slice(s+1)))}else e.$set(e.$v.dontSendSMS,"$model",n)}}})])],1)},u=[],p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("label",{class:{"label-row":e.labelRow}},[e._v(" "+e._s(e.label)+e._s(e.vInput.$params.required||e.vInput.$params.notDefault?"*":"")+" "),e._t("default")],2),e._l(e.getParamsWithError(e.vInput.$params),(function(t){return r("span",{key:t.type,staticClass:"error"},[e._v(" "+e._s(e.getErrorHint(t))+" ")])}))],2)},d=[],m=(r(7327),r(1539),r(2479),r(9600),r(3123),{name:"ValidatedInput",props:{vInput:{type:Object,required:!0},label:{type:String,required:!0},labelRow:{type:Boolean,required:!1}},methods:{getParamsWithError:function(e){var t=this;return this.vInput.$error?Object.values(e).filter((function(e){return!t.vInput[e.type]})):[]},getLocalDate:function(e){return e.toLocaleDateString("en-GB").split("/").join("-")},getErrorHint:function(e){switch(e.type){case"required":case"notDefault":return"Поле обязательно для заполнения";case"numeric":return"Значение должно состоять только из цифр";case"alpha":return"Значение должно состоять только из букв";case"length":return"Длина должна быть равна ".concat(e.value," символам");case"minLength":return"Длина не должна быть меньше ".concat(e.min," символов");case"maxLength":return"Длина не должна быть больше ".concat(e.max," символов");case"minDate":return"Значение должно быть не меньше ".concat(this.getLocalDate(e.value));case"maxDate":return"Значение должно быть не больше ".concat(this.getLocalDate(e.value));case"startsWith":return"Значение должно начинаться с ".concat(e.value);default:return"Ошибка!"}}}}),c=m,v=r(1001),$=(0,v.Z)(c,p,d,!1,null,"6e9db13a",null),f=$.exports,g={name:"CommonInfoFieldSet",components:{ValidatedInput:f},props:{$v:{type:Object,required:!0}}},h=g,b=(0,v.Z)(h,l,u,!1,null,null,null),S=b.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("fieldset",{staticClass:"fieldset"},[r("span",{staticClass:"fieldset__title"},[e._v("Адрес")]),r("ValidatedInput",{attrs:{label:"Индекс",vInput:e.$v["index"]}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.index.$model,expression:"$v.index.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.index.$error},attrs:{type:"text",inputmode:"numeric",placeholder:"XXXYYY"},domProps:{value:e.$v.index.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.index,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{label:"Страна",vInput:e.$v["country"]}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.country.$model,expression:"$v.country.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.country.$error},attrs:{type:"text",placeholder:"Введите страну"},domProps:{value:e.$v.country.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.country,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{label:"Область",vInput:e.$v["region"]}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.region.$model,expression:"$v.region.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.region.$error},attrs:{type:"text",placeholder:"Введите область"},domProps:{value:e.$v.region.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.region,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{label:"Город",vInput:e.$v["city"]}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.city.$model,expression:"$v.city.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.city.$error},attrs:{type:"text",placeholder:"Введите город"},domProps:{value:e.$v.city.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.city,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{label:"Улица",vInput:e.$v["street"]}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.street.$model,expression:"$v.street.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.street.$error},attrs:{type:"text",placeholder:"Введите улицу"},domProps:{value:e.$v.street.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.street,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{label:"Дом",vInput:e.$v["house"]}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.house.$model,expression:"$v.house.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.house.$error},attrs:{type:"text",placeholder:"Введите дом"},domProps:{value:e.$v.house.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.house,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])],1)},x=[],I={name:"AddressInfoFieldSet",components:{ValidatedInput:f},props:{$v:{type:Object,required:!0}}},N=I,_=(0,v.Z)(N,y,x,!1,null,null,null),w=_.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("fieldset",{staticClass:"fieldset"},[r("span",{staticClass:"fieldset__title"},[e._v("Паспорт")]),r("ValidatedInput",{attrs:{label:"Тип документа",vInput:e.$v["documentType"]}},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.$v.documentType.$model,expression:"$v.documentType.$model"}],staticClass:"input",class:{"input--error":e.$v.documentType.$error},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$v.documentType,"$model",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"default"}},[e._v("Выберите тип документа")]),r("option",{attrs:{value:"passport"}},[e._v("Паспорт")]),r("option",{attrs:{value:"birth-certificate"}},[e._v("Свидетельство о рождении")]),r("option",{attrs:{value:"drivers-license"}},[e._v("Вод. удостоверение")])])]),r("ValidatedInput",{attrs:{label:"Серия",vInput:e.$v["passportSeries"]}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.passportSeries.$model,expression:"$v.passportSeries.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.passportSeries.$error},attrs:{type:"text",inputmode:"numeric",placeholder:"XXXX"},domProps:{value:e.$v.passportSeries.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.passportSeries,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{label:"Номер",vInput:e.$v["passportNumber"]}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.passportNumber.$model,expression:"$v.passportNumber.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.passportNumber.$error},attrs:{type:"text",inputmode:"numeric",placeholder:"YYYYYY"},domProps:{value:e.$v.passportNumber.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.passportNumber,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{label:"Кем выдан",vInput:e.$v["passportSource"]}},[r("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.passportSource.$model,expression:"$v.passportSource.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":e.$v.passportSource.$error},attrs:{placeholder:"Введите кем выдан паспорт"},domProps:{value:e.$v.passportSource.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.passportSource,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("ValidatedInput",{attrs:{label:"Дата выдачи",vInput:e.$v["passportDate"]}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.passportDate.$model,expression:"$v.passportDate.$model"}],staticClass:"input",class:{"input--error":e.$v.passportDate.$error},attrs:{type:"date"},domProps:{value:e.$v.passportDate.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.passportDate,"$model",t.target.value)}}})])],1)},D=[],P={name:"PassportInfoFieldSet",components:{ValidatedInput:f},props:{$v:{type:Object,required:!0}}},V=P,M=(0,v.Z)(V,C,D,!1,null,null,null),B=M.exports,X=function(e){return i.BM.withParams({type:"minDate",value:e},(function(t){return!t||new Date(t).setHours(0,0,0,0)>=e.setHours(0,0,0,0)}))},O=function(e){return i.BM.withParams({type:"maxDate",value:e},(function(t){return!t||new Date(t).setHours(0,0,0,0)<=e.setHours(0,0,0,0)}))},k=function(e){return i.BM.withParams({type:"length",value:e},(function(t){return!t||t.length===e}))},q=function(e){return i.BM.withParams({type:"length",value:e},(function(t){return!t||t.replaceAll(" ","").length===e}))},L=function(e){return i.BM.withParams({type:"startsWith",value:e},(function(t){return!t||t[0]===e}))},A=i.BM.withParams({type:"notDefault",value:"default"},(function(e){return!e||"default"!==e})),E=i.BM.regex("numeric",/^[0-9\s]*$/),U={name:"App",components:{CommonInfoFieldSet:S,AddressInfoFieldSet:w,PassportInfoFieldSet:B},data:function(){return{lastName:"",firstName:"",middleName:"",birthdate:"",phoneNumber:"",gender:"default",customerGroup:[],treatingDoctor:"default",dontSendSMS:!1,index:"",country:"",region:"",city:"",street:"",house:"",documentType:"default",passportSeries:"",passportNumber:"",passportSource:"",passportDate:""}},validations:{lastName:{required:i.C1,maxLength:(0,i.BS)(50)},firstName:{required:i.C1,maxLength:(0,i.BS)(50)},middleName:{maxLength:(0,i.BS)(50)},birthdate:{required:i.C1,minDate:X(new Date("1900-01-01")),maxDate:O(new Date)},phoneNumber:{required:i.C1,numeric:E,length:q(11),startsWith:L("7")},gender:{},customerGroup:{required:i.C1},treatingDoctor:{},dontSendSMS:{},index:{numeric:E,length:q(6)},country:{maxLength:(0,i.BS)(50)},region:{maxLength:(0,i.BS)(50)},city:{required:i.C1,maxLength:(0,i.BS)(50)},street:{maxLength:(0,i.BS)(50)},house:{maxLength:(0,i.BS)(50)},documentType:{notDefault:A},passportSeries:{numeric:i.uR,length:k(4)},passportNumber:{numeric:i.uR,length:k(6)},passportSource:{maxLength:(0,i.BS)(150)},passportDate:{required:i.C1,minDate:X(new Date("1900-01-01")),maxDate:O(new Date)}},methods:{handleSubmitButtonClick:function(e){e.preventDefault(),this.$v.$touch(),this.$v.$invalid||alert("Новый клиент успешно создан")}}},j=U,F=(0,v.Z)(j,o,s,!1,null,"3d0e4d3e",null),T=F.exports;a.Z.use(n.ZP),new a.Z({render:function(e){return e(T)}}).$mount("#app"),a.Z.config.devtools=!0}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,a,n,o){if(!a){var s=1/0;for(p=0;p<e.length;p++){a=e[p][0],n=e[p][1],o=e[p][2];for(var i=!0,l=0;l<a.length;l++)(!1&o||s>=o)&&Object.keys(r.O).every((function(e){return r.O[e](a[l])}))?a.splice(l--,1):(i=!1,o<s&&(s=o));if(i){e.splice(p--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[a,n,o]}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,o,s=a[0],i=a[1],l=a[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(l)var p=l(r)}for(t&&t(a);u<s.length;u++)o=s[u],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(p)},a=self["webpackChunkm_test_task_form"]=self["webpackChunkm_test_task_form"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(3762)}));a=r.O(a)})();
//# sourceMappingURL=app-legacy.a75f17b9.js.map