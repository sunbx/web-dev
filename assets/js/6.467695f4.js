(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{303:function(t,e,n){var r=n(5),a=n(91);t.exports=function(t,e,n){var i,c;return a&&"function"==typeof(i=e.constructor)&&i!==n&&r(c=i.prototype)&&c!==n.prototype&&a(t,c),t}},305:function(t,e,n){var r=n(24),a="["+n(306)+"]",i=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},306:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},309:function(t,e,n){"use strict";var r=n(6),a=n(4),i=n(90),c=n(11),s=n(7),o=n(18),u=n(303),l=n(42),p=n(2),f=n(29),d=n(62).f,h=n(25).f,m=n(9).f,_=n(305).trim,g=a.Number,b=g.prototype,v="Number"==o(f(b)),x=function(t){var e,n,r,a,i,c,s,o,u=l(t,!1);if("string"==typeof u&&u.length>2)if(43===(e=(u=_(u)).charCodeAt(0))||45===e){if(88===(n=u.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+u}for(c=(i=u.slice(2)).length,s=0;s<c;s++)if((o=i.charCodeAt(s))<48||o>a)return NaN;return parseInt(i,r)}return+u};if(i("Number",!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var N,y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(v?p((function(){b.valueOf.call(n)})):"Number"!=o(n))?u(new g(x(e)),n,y):x(e)},w=r?d(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;w.length>I;I++)s(g,N=w[I])&&!s(y,N)&&m(y,N,h(g,N));y.prototype=b,b.constructor=y,c(a,"Number",y)}},454:function(t,e,n){"use strict";var r=n(1),a=n(305).trim;r({target:"String",proto:!0,forced:n(455)("trim")},{trim:function(){return a(this)}})},455:function(t,e,n){var r=n(2),a=n(306);t.exports=function(t){return r((function(){return!!a[t]()||"​᠎"!="​᠎"[t]()||a[t].name!==t}))}},464:function(t,e,n){"use strict";n.r(e);n(173),n(28),n(63),n(66),n(309),n(10),n(64),n(26),n(99),n(454),n(31);var r=n(39),a=(n(94),n(52)),i={props:{id:{type:String,default:null},category:{type:String,default:null},count:{type:Number,default:1},start:{type:Number,default:0},pinned:{type:Boolean,default:!1},baseUrl:{type:String,default:"https://forum.aeternity.com"},topic:{type:String,default:null},tag:{type:String,default:null},showMeta:{type:Boolean,default:!1}},data:function(){return{topics:[]}},methods:{fetchData:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var n,a,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.pinned,!t.category){e.next=6;break}return e.next=4,fetch("".concat(t.baseUrl,"/c/").concat(t.category,".json")).then((function(t){return t.json()})).then((function(t){return t.topic_list.topics})).catch((function(){return[]}));case 4:a=e.sent,t.topics=Object(r.a)(a).filter((function(t){return t.visible&&t.pinned===n})).slice(t.start,t.count);case 6:if(!t.tag){e.next=11;break}return e.next=9,fetch("".concat(t.baseUrl,"/tag/").concat(t.tag,".json")).then((function(t){return t.json()})).then((function(t){return t.topic_list.topics})).catch((function(){return[]}));case 9:i=e.sent,t.topics=Object(r.a)(i).filter((function(t){return t.visible&&t.pinned===n})).slice(t.start,t.count);case 11:if(!t.topic){e.next=16;break}return e.next=14,fetch("".concat(t.baseUrl,"/t/").concat(t.topic,".json")).then((function(t){return t.json()})).catch((function(){return[]}));case 14:c=e.sent,t.topics.push({id:c.id,title:c.title,image_url:null,excerpt:null,pinned_at:c.pinned_at,last_posted_at:c.last_posted_at,posters:c.posters,pinned:c.pinned});case 16:if(!t.showMeta){e.next=20;break}return e.next=19,Promise.all(t.topics.map((function(e){return t.getMeta(e)})));case 19:t.topics=e.sent;case 20:case"end":return e.stop()}}),e)})))()},getMeta:function(t){var e=this;return Object(a.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(e.baseUrl,"/t/").concat(t.id,"/1.json")).then((function(t){return t.json()})).then((function(t){return t})).catch((function(){return[]}));case 2:return r=n.sent,n.abrupt("return",Object.assign(t,{meta:r}));case 4:case"end":return n.stop()}}),n)})))()},getExcerpt:function(t){return this.showMeta&&t.meta?t.meta.post_stream.posts[0].cooked.replace(/(<([^>]+)>)/g,"").replace(/([.!?\r\n]).*/g,"$1").substr(0,100).trim():t.excerpt}},mounted:function(){var t=this;this.$nextTick((function(){return t.fetchData()}))}},c=n(41),s=Object(c.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{directives:[{name:"show",rawName:"v-show",value:this.topics.length,expression:"this.topics.length"}],class:["topics",this.topic?"t-"+this.topic:"c-"+this.category],attrs:{id:t.id}},t._l(this.topics,(function(e){return n("li",[n("a",{staticClass:"post",attrs:{href:t.baseUrl+"/t/"+e.id,target:"_blank"}},[n("div",{staticClass:"topic-img"},[e.image_url||t.showMeta&&e.meta?n("img",{attrs:{alt:"",src:e.image_url||""+t.baseUrl+e.meta.details.created_by.avatar_template.replace("{size}",320)}}):t._e()]),t._v(" "),n("div",{staticClass:"topic-title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"topic-excerpt"},[t._v(t._s(t.getExcerpt(e)))])]),t._v(" "),t.showMeta&&e.meta?n("a",{staticClass:"author",attrs:{href:t.baseUrl+"/u/"+e.meta.details.created_by.username,target:"_blank"}},[n("img",{attrs:{src:""+t.baseUrl+e.meta.details.created_by.avatar_template.replace("{size}",50),alt:""}}),t._v(" "),n("div",[t._v("\n                "+t._s(e.meta.details.created_by.name||e.meta.details.created_by.username)+"\n            ")]),t._v(" "),n("time",{attrs:{datetime:e.meta.created_at}},[t._v("\n                "+t._s(new Date(e.meta.created_at).toLocaleDateString())+"\n            ")])]):t._e()])})),0)}),[],!1,null,null,null);e.default=s.exports}}]);