(self["webpackChunkproxy_vue"]=self["webpackChunkproxy_vue"]||[]).push([[535],{6034:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg",style:t.style},[n("div",{staticClass:"conts"},[n("transition-group",{attrs:{appear:"",name:"animate__animated animate__bounce","enter-active-class":"animate__bounceInDown","leave-active-class":"animate__bounceOutUp",mode:"out-in"}},[-1===t.isMoon?n("div",{key:"3"}):3===t.isMoon?n("div",{key:"1",staticClass:"moon"}):n("div",{key:"2",staticClass:"sun"})])],1)])},r=[],s=(n(1539),n(9714),n(2222),[{timeInterval:{start:7,end:11},color:["#3C8CE7","#00EAFF"]},{timeInterval:{start:11,end:16},color:["#0396FF","#ABDCFF"]},{timeInterval:{start:16,end:20},color:["#DE4313","#FEC163"]},{timeInterval:{start:20,end:0},color:["#002661","#123597"]}]),a=n(3189),o=n.n(a),u={name:"JtBg",data:function(){return{style:"",isMoon:-1}},computed:{},mounted:function(){this.setBgColor()},methods:{setBgColor:function(){this.style="background-image:linear-gradient(".concat(this.getData().toString(),")")},getData:function(){for(var t,e,n=(new Date).getTime(),i=0;i<s.length;i++)if(t=new Date("".concat(o()().format("YYYY-MM-DD")," ").concat(s[i].timeInterval.start,":00:00")).getTime(),e=new Date("".concat(o()().format("YYYY-MM-DD")," ").concat(s[i].timeInterval.end,":00:00")).getTime(),n>=t&&n<e||0==s[i].timeInterval.end)return this.isMoon=i,s[i].color}}},c=u,l=n(1001),d=(0,l.Z)(c,i,r,!1,null,"15135fad",null),f=d.exports},2861:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return C}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("jt-bg"),n("div",{staticClass:"login"},[n("p",{staticClass:"title"},[t._v("登录")]),n("div",{staticClass:"cont"},[n("div",{staticClass:"username"},[n("ui-input",{attrs:{placeholder:"请输入账户"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),n("div",{staticClass:"password"},[n("ui-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("div",{staticClass:"login_button"},[n("UiButton",{on:{click:t.login}},[t._v("登录")])],1)])])],1)},r=[],s=(n(7941),n(2526),n(7327),n(1539),n(5003),n(4747),n(9337),n(3796));function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){(0,s.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n(4916),n(5306);var u=n(6034),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"UI"},["checkbox"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],staticClass:"ui_input",class:{ui_input_active:t.active},attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.model)?t._i(t.model,null)>-1:t.model},on:{focus:function(e){t.active=!0},blur:function(e){t.active=!1},change:function(e){var n=t.model,i=e.target,r=!!i.checked;if(Array.isArray(n)){var s=null,a=t._i(n,s);i.checked?a<0&&(t.model=n.concat([s])):a>-1&&(t.model=n.slice(0,a).concat(n.slice(a+1)))}else t.model=r}}}):"radio"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],staticClass:"ui_input",class:{ui_input_active:t.active},attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.model,null)},on:{focus:function(e){t.active=!0},blur:function(e){t.active=!1},change:function(e){t.model=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],staticClass:"ui_input",class:{ui_input_active:t.active},attrs:{placeholder:t.placeholder,type:t.type},domProps:{value:t.model},on:{focus:function(e){t.active=!0},blur:function(e){t.active=!1},input:function(e){e.target.composing||(t.model=e.target.value)}}})])},l=[],d={props:{type:{type:String,default:"text"},placeholder:{type:String,default:"请输入"},value:{type:String,default:""}},data:function(){return{active:!1}},computed:{model:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},f=d,h=n(1001),m=(0,h.Z)(f,c,l,!1,null,"378f3789",null),p=m.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"button",on:{click:t.click}},[n("button",{directives:[{name:"circle",rawName:"v-circle"}],staticClass:"btn"},[t._t("default")],2)])},$=[],g={directives:{circle:{inserted:function(t){t.style.borderRadius="".concat(t.clientHeight/2,"px")}}},methods:{click:function(){this.$emit("click")}}},y=g,D=(0,h.Z)(y,v,$,!1,null,"d84ab07c",null),_=D.exports,b=n(2807),M=n(4665),w={name:"Login",components:{JtBg:u.Z,UiInput:p,UiButton:_},data:function(){return{username:"",password:""}},methods:o(o({},(0,M.OI)("userOptions",[b.T])),{},{login:function(){this[b.T]("uuid-123"),this.$router.replace({name:"home"})}})},O=w,S=(0,h.Z)(O,i,r,!1,null,"6593d7b3",null),C=S.exports},5837:function(t,e,n){var i=n(2109),r=n(7854);i({global:!0},{globalThis:r})},9337:function(t,e,n){var i=n(2109),r=n(9781),s=n(3887),a=n(5656),o=n(1236),u=n(6135);i({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,n,i=a(t),r=o.f,c=s(i),l={},d=0;while(c.length>d)n=r(i,e=c[d++]),void 0!==n&&u(l,e,n);return l}})},3753:function(t,e,n){"use strict";var i=n(2109),r=n(6916);i({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return r(URL.prototype.toString,this)}})},3189:function(t,e,n){var i,r,s=n(7964)["default"];n(5837),n(4916),n(3123),n(9600),n(5306),n(8309),n(7601),n(4723),n(1539),n(9714),n(7042),n(9653),n(3753),function(a,o){"object"==s(e)?t.exports=o():(i=o,r="function"===typeof i?i.call(e,n,e,t):i,void 0===r||(t.exports=r))}(0,(function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",a="minute",o="hour",u="day",c="week",l="month",d="quarter",f="year",h="date",m="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},y={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+g(i,2,"0")+":"+g(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,l),s=n-r<0,a=e.clone().add(i+(s?-1:1),l);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:f,w:c,d:u,D:h,h:o,m:a,s:r,ms:i,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",_={};_[D]=$;var b=function(t){return t instanceof S},M=function t(e,n,i){var r;if(!e)return D;if("string"==typeof e){var s=e.toLowerCase();_[s]&&(r=s),n&&(_[s]=n,r=s);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var o=e.name;_[o]=e,r=o}return!i&&r&&(D=r),r||!i&&D},w=function(t,e){if(b(t))return t.clone();var n="object"==s(e)?e:{};return n.date=t,n.args=arguments,new S(n)},O=y;O.l=M,O.i=b,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function s(t){this.$L=M(t.locale,null,!0),this.parse(t)}var $=s.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(p);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return O},$.isValid=function(){return!(this.$d.toString()===m)},$.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return w(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<w(t)},$.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,i=!!O.u(e)||e,s=O.p(t),d=function(t,e){var r=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(u)},m=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,v=this.$M,$=this.$D,g="set"+(this.$u?"UTC":"");switch(s){case f:return i?d(1,0):d(31,11);case l:return i?d(1,v):d(0,v+1);case c:var y=this.$locale().weekStart||0,D=(p<y?p+7:p)-y;return d(i?$-D:$+(6-D),v);case u:case h:return m(g+"Hours",0);case o:return m(g+"Minutes",1);case a:return m(g+"Seconds",2);case r:return m(g+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var n,s=O.p(t),c="set"+(this.$u?"UTC":""),d=(n={},n[u]=c+"Date",n[h]=c+"Date",n[l]=c+"Month",n[f]=c+"FullYear",n[o]=c+"Hours",n[a]=c+"Minutes",n[r]=c+"Seconds",n[i]=c+"Milliseconds",n)[s],m=s===u?this.$D+(e-this.$W):e;if(s===l||s===f){var p=this.clone().set(h,1);p.$d[d](m),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else d&&this.$d[d](m);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[O.p(t)]()},$.add=function(i,s){var d,h=this;i=Number(i);var m=O.p(s),p=function(t){var e=w(h);return O.w(e.date(e.date()+Math.round(t*i)),h)};if(m===l)return this.set(l,this.$M+i);if(m===f)return this.set(f,this.$y+i);if(m===u)return p(1);if(m===c)return p(7);var v=(d={},d[a]=e,d[o]=n,d[r]=t,d)[m]||1,$=this.$d.getTime()+i*v;return O.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||m;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=O.z(this),s=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,l=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].slice(0,s)},d=function(t){return O.s(s%12||12,t,"0")},f=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:O.s(o+1,2,"0"),MMM:l(n.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,u,2),ddd:l(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:O.s(s,2,"0"),h:d(1),hh:d(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:O.s(a,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:r};return i.replace(v,(function(t,e){return e||h[t]||r.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(i,s,h){var m,p=O.p(s),v=w(i),$=(v.utcOffset()-this.utcOffset())*e,g=this-v,y=O.m(this,v);return y=(m={},m[f]=y/12,m[l]=y,m[d]=y/3,m[c]=(g-$)/6048e5,m[u]=(g-$)/864e5,m[o]=g/n,m[a]=g/e,m[r]=g/t,m)[p]||g,h?y:O.a(y)},$.daysInMonth=function(){return this.endOf(l).$D},$.$locale=function(){return _[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=M(t,e,!0);return i&&(n.$L=i),n},$.clone=function(){return O.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},s}(),C=S.prototype;return w.prototype=C,[["$ms",i],["$s",r],["$m",a],["$H",o],["$W",u],["$M",l],["$y",f],["$D",h]].forEach((function(t){C[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,S,w),t.$i=!0),w},w.locale=M,w.isDayjs=b,w.unix=function(t){return w(1e3*t)},w.en=_[D],w.Ls=_,w.p={},w}))}}]);
//# sourceMappingURL=login-legacy.f73fbb1d.js.map