(function(){"use strict";var t={2815:function(t,e,a){var r=a(8935),n=a(2424),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("form",{staticClass:"form",attrs:{action:"./",method:"post"}},[a("div",{staticClass:"fieldsets-wrapper"},[a("CommonInfoFieldSet",{attrs:{vFieldSet:t.$v.commonInfo}}),a("AddressInfoFieldSet",{attrs:{vFieldSet:t.$v.addressInfo}}),a("PassportInfoFieldSet",{attrs:{vFieldSet:t.$v.passportInfo}})],1),a("div",{staticClass:"flex-column-center"},[a("input",{staticClass:"button",class:{"button--disabled":t.$v.$anyError},attrs:{type:"submit",value:"Создать нового клиента",disabled:t.$v.$anyError},on:{click:t.handleSubmitButtonClick}}),t.$v.$anyError?a("span",{staticClass:"error error--center"},[t._v("Некоторые поля заполнены неправильно")]):t._e()])])])},u=[],s=a(6409),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("fieldset",{staticClass:"fieldset"},[a("span",{staticClass:"fieldset__title"},[t._v("Общая информация")]),a("ValidatedInput",{attrs:{vInput:t.vFieldSet.lastName}},[a("Label",{attrs:{value:"Фамилия",vInput:t.vFieldSet.lastName}},[a("TextInput",{attrs:{type:"text",placeholder:"Введите фамилию",vInput:t.vFieldSet.lastName}})],1)],1),a("ValidatedInput",{attrs:{vInput:t.vFieldSet.firstName}},[a("Label",{attrs:{value:"Имя",vInput:t.vFieldSet.firstName}},[a("TextInput",{attrs:{type:"text",placeholder:"Введите имя",vInput:t.vFieldSet.firstName}})],1)],1),a("ValidatedInput",{attrs:{vInput:t.vFieldSet.middleName}},[a("Label",{attrs:{value:"Отчество",vInput:t.vFieldSet.middleName}},[a("TextInput",{attrs:{type:"text",placeholder:"Введите отчество",vInput:t.vFieldSet.middleName}})],1)],1),a("ValidatedInput",{attrs:{vInput:t.vFieldSet.birthdate}},[a("Label",{attrs:{value:"Дата рождения",vInput:t.vFieldSet.birthdate}},[a("DateInput",{attrs:{vInput:t.vFieldSet.birthdate}})],1)],1),a("ValidatedInput",{attrs:{vInput:t.vFieldSet.phoneNumber}},[a("Label",{attrs:{value:"Номер телефона",vInput:t.vFieldSet.phoneNumber}},[a("TextInput",{attrs:{type:"tel",placeholder:"7 XXX XXX XX XX",vInput:t.vFieldSet.phoneNumber}})],1)],1),a("ValidatedInput",{attrs:{vInput:t.vFieldSet.gender}},[a("Label",{attrs:{value:"Пол",vInput:t.vFieldSet.gender}},[a("SelectInput",{attrs:{vInput:t.vFieldSet.gender}},[a("option",{attrs:{value:"default"}},[t._v("Выберите пол")]),a("option",{attrs:{value:"male"}},[t._v("Мужской")]),a("option",{attrs:{value:"female"}},[t._v("Женский")])])],1)],1),a("ValidatedInput",{attrs:{vInput:t.vFieldSet.customerGroup}},[a("Label",{attrs:{value:"Группа клиентов",vInput:t.vFieldSet.customerGroup}},[a("SelectInput",{attrs:{multiple:"",vInput:t.vFieldSet.customerGroup}},[a("option",{attrs:{value:"vip"}},[t._v("VIP")]),a("option",{attrs:{value:"problematic"}},[t._v("Проблемные")]),a("option",{attrs:{value:"oms"}},[t._v("ОМС")])])],1)],1),a("ValidatedInput",{attrs:{vInput:t.vFieldSet.treatingDoctor}},[a("Label",{attrs:{value:"Лечащий врач",vInput:t.vFieldSet.treatingDoctor}},[a("SelectInput",{attrs:{vInput:t.vFieldSet.treatingDoctor}},[a("option",{attrs:{value:"default"}},[t._v("Выберите лечащего врача")]),a("option",{attrs:{value:"ivanov"}},[t._v("Иванов")]),a("option",{attrs:{value:"zaharov"}},[t._v("Захаров")]),a("option",{attrs:{value:"chernisheva"}},[t._v("Чернышева")])])],1)],1),a("ValidatedInput",{attrs:{vInput:t.vFieldSet.dontSendSMS}},[a("Label",{attrs:{value:"Не отправлять SMS",row:"",vInput:t.vFieldSet.dontSendSMS}},[a("CheckboxInput",{attrs:{vInput:t.vFieldSet.dontSendSMS}})],1)],1)],1)},p=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("default"),t._l(t.getParamsWithError(),(function(e){return a("span",{key:e.type,staticClass:"error"},[t._v(" "+t._s(t.getErrorHint(e))+" ")])}))],2)},d=[],v={name:"ValidatedInput",props:{vInput:{type:Object,required:!0}},methods:{getParamsWithError(){return this.vInput.$error?Object.values(this.vInput.$params).filter((t=>!this.vInput[t.type])):[]},getLocalDate(t){return t.toLocaleDateString("en-GB").split("/").join("-")},getErrorHint(t){switch(t.type){case"required":case"notDefault":return"Поле обязательно для заполнения";case"numeric":return"Значение должно состоять только из цифр";case"alpha":return"Значение должно состоять только из букв";case"numericWithSpaces":case"alphaWithSpecialSymbols":return`Значение может состоять только из ${t.value}`;case"length":return`Длина должна быть равна ${t.value} символам`;case"minLength":return`Длина не должна быть меньше ${t.min} символов`;case"maxLength":return`Длина не должна быть больше ${t.max} символов`;case"minDate":return`Значение должно быть не меньше ${this.getLocalDate(t.value)}`;case"maxDate":return`Значение должно быть не больше ${this.getLocalDate(t.value)}`;case"startsWith":return`Значение должно начинаться с ${t.value}`;default:return"Ошибка!"}}}},c=v,m=a(1001),I=(0,m.Z)(c,o,d,!1,null,null,null),S=I.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{class:{"label-row":t.row}},[t._v(" "+t._s(t.value)+t._s(t.vInput.$params.required||t.vInput.$params.notDefault?"*":"")+" "),t._t("default")],2)},h=[],b={name:"Label",props:{vInput:{type:Object,required:!0},value:{type:String,required:!0},row:{type:Boolean,required:!1}}},y=b,x=(0,m.Z)(y,f,h,!1,null,"3c90ae58",null),F=x.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.vInput.$model,expression:"vInput.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":t.vInput.$error},attrs:{type:t.type,inputmode:t.inputmode,placeholder:t.placeholder},domProps:{value:t.vInput.$model},on:{input:function(e){e.target.composing||t.$set(t.vInput,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})},g=[],_={name:"TextInput",props:{vInput:{type:Object,required:!0},type:{type:String,required:!0},inputmode:{type:String,required:!1},placeholder:{type:String,required:!0}}},L=_,D=(0,m.Z)(L,$,g,!1,null,null,null),C=D.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("input",{directives:[{name:"model",rawName:"v-model",value:t.vInput.$model,expression:"vInput.$model"}],staticClass:"input",class:{"input--error":t.vInput.$error},attrs:{type:"date"},domProps:{value:t.vInput.$model},on:{input:function(e){e.target.composing||t.$set(t.vInput,"$model",e.target.value)}}})},N=[],q={name:"DateInput",props:{vInput:{type:Object,required:!0}}},T=q,V=(0,m.Z)(T,w,N,!1,null,null,null),B=V.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("select",{directives:[{name:"model",rawName:"v-model",value:t.vInput.$model,expression:"vInput.$model"}],staticClass:"input",class:{"input--error":t.vInput.$error},attrs:{multiple:t.multiple},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.vInput,"$model",e.target.multiple?a:a[0])}}},[t._t("default")],2)},P=[],E={name:"SelectInput",props:{vInput:{type:Object,required:!0},multiple:{type:Boolean,required:!1}}},j=E,k=(0,m.Z)(j,O,P,!1,null,null,null),X=k.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("input",{directives:[{name:"model",rawName:"v-model",value:t.vInput.$model,expression:"vInput.$model"}],staticClass:"input",class:{"input--error":t.vInput.$error},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.vInput.$model)?t._i(t.vInput.$model,null)>-1:t.vInput.$model},on:{change:function(e){var a=t.vInput.$model,r=e.target,n=!!r.checked;if(Array.isArray(a)){var l=null,u=t._i(a,l);r.checked?u<0&&t.$set(t.vInput,"$model",a.concat([l])):u>-1&&t.$set(t.vInput,"$model",a.slice(0,u).concat(a.slice(u+1)))}else t.$set(t.vInput,"$model",n)}}})},M=[],W={name:"CheckboxInput",props:{vInput:{type:Object,required:!0}}},A=W,Y=(0,m.Z)(A,Z,M,!1,null,null,null),G=Y.exports,H={name:"CommonInfoFieldSet",components:{ValidatedInput:S,Label:F,TextInput:C,DateInput:B,SelectInput:X,CheckboxInput:G},props:{vFieldSet:{type:Object,required:!0}}},z=H,R=(0,m.Z)(z,i,p,!1,null,null,null),U=R.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("fieldset",{staticClass:"fieldset"},[a("span",{staticClass:"fieldset__title"},[t._v("Адрес")]),a("ValidatedInput",{attrs:{vInput:t.vFieldSet.index}},[a("Label",{attrs:{value:"Индекс",vInput:t.vFieldSet.index}},[a("TextInput",{attrs:{type:"text",inputmode:"numeric",placeholder:"XXXYYY",vInput:t.vFieldSet.index}})],1)],1),a("ValidatedInput",{attrs:{vInput:t.vFieldSet.country}},[a("Label",{attrs:{value:"Страна",vInput:t.vFieldSet.country}},[a("TextInput",{attrs:{type:"text",placeholder:"Введите страну",vInput:t.vFieldSet.country}})],1)],1),a("ValidatedInput",{attrs:{vInput:t.vFieldSet.region}},[a("Label",{attrs:{value:"Область",vInput:t.vFieldSet.region}},[a("TextInput",{attrs:{type:"text",placeholder:"Введите область",vInput:t.vFieldSet.region}})],1)],1),a("ValidatedInput",{attrs:{vInput:t.vFieldSet.city}},[a("Label",{attrs:{value:"Город",vInput:t.vFieldSet.city}},[a("TextInput",{attrs:{type:"text",placeholder:"Введите город",vInput:t.vFieldSet.city}})],1)],1),a("ValidatedInput",{attrs:{vInput:t.vFieldSet.street}},[a("Label",{attrs:{value:"Улица",vInput:t.vFieldSet.street}},[a("TextInput",{attrs:{type:"text",placeholder:"Введите улицу",vInput:t.vFieldSet.street}})],1)],1),a("ValidatedInput",{attrs:{vInput:t.vFieldSet.house}},[a("Label",{attrs:{value:"Дом",vInput:t.vFieldSet.house}},[a("TextInput",{attrs:{type:"text",placeholder:"Введите дом",vInput:t.vFieldSet.house}})],1)],1)],1)},K=[],Q={name:"AddressInfoFieldSet",components:{ValidatedInput:S,Label:F,TextInput:C},props:{vFieldSet:{type:Object,required:!0}}},tt=Q,et=(0,m.Z)(tt,J,K,!1,null,null,null),at=et.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("fieldset",{staticClass:"fieldset"},[a("span",{staticClass:"fieldset__title"},[t._v("Паспорт")]),a("ValidatedInput",{attrs:{vInput:t.vFieldSet.documentType}},[a("Label",{attrs:{value:"Тип документа",vInput:t.vFieldSet.documentType}},[a("SelectInput",{attrs:{vInput:t.vFieldSet.documentType}},[a("option",{attrs:{value:"default"}},[t._v("Выберите тип документа")]),a("option",{attrs:{value:"passport"}},[t._v("Паспорт")]),a("option",{attrs:{value:"birth-certificate"}},[t._v("Свидетельство о рождении")]),a("option",{attrs:{value:"drivers-license"}},[t._v("Вод. удостоверение")])])],1)],1),a("ValidatedInput",{attrs:{vInput:t.vFieldSet.passportSeries}},[a("Label",{attrs:{value:"Серия",vInput:t.vFieldSet.passportSeries}},[a("TextInput",{attrs:{type:"text",inputmode:"numeric",placeholder:"XXXX",vInput:t.vFieldSet.passportSeries}})],1)],1),a("ValidatedInput",{attrs:{vInput:t.vFieldSet.passportNumber}},[a("Label",{attrs:{value:"Номер",vInput:t.vFieldSet.passportNumber}},[a("TextInput",{attrs:{type:"text",inputmode:"numeric",placeholder:"YYYYYY",vInput:t.vFieldSet.passportNumber}})],1)],1),a("ValidatedInput",{attrs:{vInput:t.vFieldSet.passportSource}},[a("Label",{attrs:{value:"Кем выдан",vInput:t.vFieldSet.passportSource}},[a("TextareaInput",{attrs:{placeholder:"Введите кем выдан паспорт",vInput:t.vFieldSet.passportSource}})],1)],1),a("ValidatedInput",{attrs:{vInput:t.vFieldSet.passportDate}},[a("Label",{attrs:{value:"Дата выдачи",vInput:t.vFieldSet.passportDate}},[a("DateInput",{attrs:{vInput:t.vFieldSet.passportDate}})],1)],1)],1)},nt=[],lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.vInput.$model,expression:"vInput.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input--error":t.vInput.$error},attrs:{placeholder:t.placeholder},domProps:{value:t.vInput.$model},on:{input:function(e){e.target.composing||t.$set(t.vInput,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})},ut=[],st={name:"TextareaInput",props:{vInput:{type:Object,required:!0},placeholder:{type:String,required:!0}}},it=st,pt=(0,m.Z)(it,lt,ut,!1,null,null,null),ot=pt.exports,dt={name:"PassportInfoFieldSet",components:{ValidatedInput:S,Label:F,SelectInput:X,TextInput:C,TextareaInput:ot,DateInput:B},props:{vFieldSet:{type:Object,required:!0}}},vt=dt,ct=(0,m.Z)(vt,rt,nt,!1,null,null,null),mt=ct.exports;const It=t=>s.BM.withParams({type:"minDate",value:t},(e=>!e||new Date(e).setHours(0,0,0,0)>=t.setHours(0,0,0,0))),St=t=>s.BM.withParams({type:"maxDate",value:t},(e=>!e||new Date(e).setHours(0,0,0,0)<=t.setHours(0,0,0,0))),ft=t=>s.BM.withParams({type:"length",value:t},(e=>!e||e.length===t)),ht=t=>s.BM.withParams({type:"length",value:t},(e=>!e||e.replaceAll(" ","").length===t)),bt=t=>s.BM.withParams({type:"startsWith",value:t},(e=>!e||e[0]===t)),yt=s.BM.withParams({type:"notDefault",value:"default"},(t=>!t||"default"!==t)),xt=s.BM.withParams({type:"alphaWithSpecialSymbols",value:"букв, пробелов, тире"},(t=>!t||/^[а-яА-Яa-zA-Z\s-]*$/.test(t))),Ft=s.BM.withParams({type:"numericWithSpaces",value:"цифр, пробелов"},(t=>!t||/^[0-9\s]*$/.test(t)));var $t={name:"App",components:{CommonInfoFieldSet:U,AddressInfoFieldSet:at,PassportInfoFieldSet:mt},data(){return{commonInfo:{lastName:"",firstName:"",middleName:"",birthdate:"",phoneNumber:"",gender:"default",customerGroup:[],treatingDoctor:"default",dontSendSMS:!1},addressInfo:{index:"",country:"",region:"",city:"",street:"",house:""},passportInfo:{documentType:"default",passportSeries:"",passportNumber:"",passportSource:"",passportDate:""}}},validations:{commonInfo:{lastName:{required:s.C1,alphaWithSpecialSymbols:xt,maxLength:(0,s.BS)(100)},firstName:{required:s.C1,alphaWithSpecialSymbols:xt,maxLength:(0,s.BS)(100)},middleName:{alphaWithSpecialSymbols:xt,maxLength:(0,s.BS)(100)},birthdate:{required:s.C1,minDate:It(new Date("1900-01-01")),maxDate:St(new Date)},phoneNumber:{required:s.C1,numericWithSpaces:Ft,length:ht(11),startsWith:bt("7")},gender:{},customerGroup:{required:s.C1},treatingDoctor:{},dontSendSMS:{}},addressInfo:{index:{numericWithSpaces:Ft,length:ht(6)},country:{maxLength:(0,s.BS)(100)},region:{maxLength:(0,s.BS)(100)},city:{required:s.C1,maxLength:(0,s.BS)(100)},street:{maxLength:(0,s.BS)(100)},house:{maxLength:(0,s.BS)(100)}},passportInfo:{documentType:{notDefault:yt},passportSeries:{numeric:s.uR,length:ft(4)},passportNumber:{numeric:s.uR,length:ft(6)},passportSource:{maxLength:(0,s.BS)(250)},passportDate:{required:s.C1,minDate:It(new Date("1900-01-01")),maxDate:St(new Date)}}},methods:{handleSubmitButtonClick(t){t.preventDefault(),this.$v.$touch(),this.$v.$invalid||alert("Новый клиент успешно создан")}}},gt=$t,_t=(0,m.Z)(gt,l,u,!1,null,"4fb6b16a",null),Lt=_t.exports;r.Z.use(n.ZP),new r.Z({render:t=>t(Lt)}).$mount("#app"),r.Z.config.devtools=!0}},e={};function a(r){var n=e[r];if(void 0!==n)return n.exports;var l=e[r]={exports:{}};return t[r](l,l.exports,a),l.exports}a.m=t,function(){var t=[];a.O=function(e,r,n,l){if(!r){var u=1/0;for(o=0;o<t.length;o++){r=t[o][0],n=t[o][1],l=t[o][2];for(var s=!0,i=0;i<r.length;i++)(!1&l||u>=l)&&Object.keys(a.O).every((function(t){return a.O[t](r[i])}))?r.splice(i--,1):(s=!1,l<u&&(u=l));if(s){t.splice(o--,1);var p=n();void 0!==p&&(e=p)}}return e}l=l||0;for(var o=t.length;o>0&&t[o-1][2]>l;o--)t[o]=t[o-1];t[o]=[r,n,l]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,l,u=r[0],s=r[1],i=r[2],p=0;if(u.some((function(e){return 0!==t[e]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(i)var o=i(a)}for(e&&e(r);p<u.length;p++)l=u[p],a.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return a.O(o)},r=self["webpackChunkm_test_task_form"]=self["webpackChunkm_test_task_form"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(2815)}));r=a.O(r)})();
//# sourceMappingURL=app.c33ee2a1.js.map