(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0b8eb3e35929778b339a":function(e,t,n){"use strict";n.r(t);var r=n("8af190b70a6bc55c6f1b"),a=n.n(r),o=(n("8a2d1b95e05b6a321e74"),n("0d7f0986bcd2f33d8a2a")),i=n("ab039aecd4a1d4fedc0e"),c=n("d7dd51e1bf6bfc2c9c3d"),d=n("ab4cb61bcb2dc161defb"),s=n("a28fc3c963a1d4d1a2e5"),u=(n("5ef9de3df8d92ea0e41c"),n("5fa3f8487e09c6182715")),l=n.n(u),f=n("f3b0ff1628e56352bcbf"),p=n.n(f),m=n("a1cf5d6fa4ed65a6ddd5"),b=n.n(m),v=n("6a4f9c383785f9168266"),g=n.n(v),h=n("d3a850c4000d77bccc89"),y=n.n(h),w=n("f2873ecf7390fe7d7c89"),j=n.n(w);function S(e){var t={dispatch:p.a,subscribe:p.a,getState:p.a,replaceReducer:p.a,runSaga:p.a,injectedReducers:y.a,injectedSagas:y.a};g()(j()(e,t),"(app/utils...) injectors: Expected a valid redux store")}var x=n("491cc2e27aa2b4221847");function k(e,t){return function(n,r){t||S(e),g()(l()(n)&&!b()(n)&&p()(r),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===r||(e.injectedReducers[n]=r,e.replaceReducer(Object(x.a)(e.injectedReducers)))}}function C(e){return S(e),{injectReducer:k(e,!0)}}var O=function(e){var t=e.key,n=e.reducer,r=a.a.useContext(c.ReactReduxContext);a.a.useEffect(function(){C(r.store).injectReducer(t,n)},[])},R="@@saga-injector/daemon",I="@@saga-injector/once-till-unmount";function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){P(e,t,n[t])})}return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=["@@saga-injector/restart-on-remount",R,I],E=function(e){return g()(l()(e)&&!b()(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},A=function(e){var t={saga:p.a,mode:function(e){return l()(e)&&_.includes(e)}};g()(j()(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function M(e,t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0;t||S(e);var o=N({},r,{mode:r.mode||R}),i=o.saga,c=o.mode;E(n),A(o);var d=Reflect.has(e.injectedSagas,n);(!d||d&&c!==R&&c!==I)&&(e.injectedSagas[n]=N({},o,{task:e.runSaga(i,a)}))}}function $(e,t){return function(n){if(t||S(e),E(n),Reflect.has(e.injectedSagas,n)){var r=e.injectedSagas[n];r.mode&&r.mode!==R&&(r.task.cancel(),e.injectedSagas[n]="done")}}}function H(e){return S(e),{injectSaga:M(e,!0),ejectSaga:$(e,!0)}}var z,U=function(e){var t=e.key,n=e.saga,r=e.mode,o=a.a.useContext(c.ReactReduxContext);a.a.useEffect(function(){var e=H(o.store);return e.injectSaga(t,{saga:n,mode:r}),function(){e.ejectSaga(t)}},[])},D=n("c4ec0be7fefbdf794ace"),F=function(e){return e.global||D.b},G=n("0b3cb19af78752326f59"),J=G.b.h2.withConfig({displayName:"H2",componentId:"egphza-0"})(["font-size:1.5em;"]),T=G.b.ul.withConfig({displayName:"Ul",componentId:"mwnq6h-0"})(["list-style:none;margin:0;width:100%;max-height:30em;overflow-y:auto;padding:0 1em;"]),B=G.b.div.withConfig({displayName:"Wrapper",componentId:"sc-1umgotm-0"})(["padding:0;margin:0;width:100%;background-color:white;border:1px solid #ccc;border-radius:3px;overflow:hidden;"]);function L(e,t,n,r){z||(z="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&a)for(var i in a)void 0===t[i]&&(t[i]=a[i]);else t||(t=a||{});if(1===o)t.children=r;else if(o>1){for(var c=new Array(o),d=0;d<o;d++)c[d]=arguments[d+3];t.children=c}return{$$typeof:z,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var W=L("div",{});var q,V=function(e){var t=e.component,n=W;return n=e.items?e.items.map(function(e){return L(t,{item:e},"item-".concat(e.id))}):L(t,{}),L(B,{},void 0,L(T,{},void 0,n))},Y=G.b.div.withConfig({displayName:"Item",componentId:"sc-3y9mie-0"})(["display:flex;justify-content:space-between;width:100%;height:100%;align-items:center;"]),X=G.b.li.withConfig({displayName:"Wrapper",componentId:"euo0oy-0"})(["width:100%;height:3em;display:flex;align-items:center;position:relative;border-top:1px solid #eee;&:first-child{border-top:none;}"]);function K(e,t,n,r){q||(q="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&a)for(var i in a)void 0===t[i]&&(t[i]=a[i]);else t||(t=a||{});if(1===o)t.children=r;else if(o>1){for(var c=new Array(o),d=0;d<o;d++)c[d]=arguments[d+3];t.children=c}return{$$typeof:q,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var Q,Z=function(e){return K(X,{},void 0,K(Y,{},void 0,e.item))},ee=n("8e4c85c29cdef1bf8a5f");function te(e,t,n,r){Q||(Q="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&a)for(var i in a)void 0===t[i]&&(t[i]=a[i]);else t||(t=a||{});if(1===o)t.children=r;else if(o>1){for(var c=new Array(o),d=0;d<o;d++)c[d]=arguments[d+3];t.children=c}return{$$typeof:Q,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var re=te("path",{d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z"});var ae,oe=function(e){return a.a.createElement("svg",ne({height:"1em",width:"0.875em",className:e.className},e),re)},ie=Object(G.b)(oe).withConfig({displayName:"IssueIcon",componentId:"s8m34y-0"})(["fill:#ccc;margin-right:0.25em;"]),ce=n("6c074f91ad5b62e00274"),de=Object(G.b)(ce.a).withConfig({displayName:"IssueLink",componentId:"uyzonb-0"})(["height:100%;color:black;display:flex;align-items:center;justify-content:center;white-space:nowrap;"]),se=Object(G.b)(ce.a).withConfig({displayName:"RepoLink",componentId:"pvpwpn-0"})(["height:100%;color:black;display:flex;align-items:center;width:100%;"]),ue=G.b.div.withConfig({displayName:"Wrapper",componentId:"sc-17s0rao-0"})(["width:100%;height:100%;display:flex;align-items:space-between;"]);function le(e,t,n,r){ae||(ae="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&a)for(var i in a)void 0===t[i]&&(t[i]=a[i]);else t||(t=a||{});if(1===o)t.children=r;else if(o>1){for(var c=new Array(o),d=0;d<o;d++)c[d]=arguments[d+3];t.children=c}return{$$typeof:ae,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var fe=le(ie,{});var pe,me=Object(c.connect)(Object(s.b)({currentUser:Object(s.a)(F,function(e){return e.currentUser})}))(function(e){var t=e.item,n="";t.owner.login!==e.currentUser&&(n="".concat(t.owner.login,"/"));var r=le(ue,{},void 0,le(se,{href:t.html_url,target:"_blank"},void 0,n+t.name),le(de,{href:"".concat(t.html_url,"/issues"),target:"_blank"},void 0,fe,le(i.FormattedNumber,{value:t.open_issues_count})));return le(Z,{item:r},"repo-list-item-".concat(t.full_name))});function be(e,t,n,r){pe||(pe="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&a)for(var i in a)void 0===t[i]&&(t[i]=a[i]);else t||(t=a||{});if(1===o)t.children=r;else if(o>1){for(var c=new Array(o),d=0;d<o;d++)c[d]=arguments[d+3];t.children=c}return{$$typeof:pe,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var ve=be(V,{component:ee.a}),ge=be(Z,{item:"Something went wrong, please try again!"});var he=function(e){var t=e.loading,n=e.error,r=e.repos;if(t)return ve;if(!1!==n)return be(V,{component:function(){return ge}});return!1!==r?be(V,{items:r,component:me}):null},ye=n("cb12d4155305786bdcf4"),we=G.b.span.withConfig({displayName:"AtPrefix",componentId:"sc-1suuq8o-0"})(["color:black;margin-left:0.4em;"]),je=G.b.section.withConfig({displayName:"Section",componentId:"sc-1eulrsm-0"})(["margin:3em auto;&:first-child{margin-top:0;}"]),Se=Object(G.b)(je).withConfig({displayName:"CenteredSection",componentId:"sc-6zy0wx-0"})(["text-align:center;"]),xe=G.b.form.withConfig({displayName:"Form",componentId:"dmhz4x-0"})(["margin-bottom:1em;"]),ke=(G.b.input.withConfig({displayName:"Input",componentId:"sc-19rkjmi-0"})(["outline:none;border:none;border-bottom:1px dotted #999;background-color:transparent;"]),"boilerplate.containers.HomePage"),Ce=(Object(i.defineMessages)({startProjectHeader:{id:"".concat(ke,".start_project.header"),defaultMessage:"Start your next react project in seconds"},startProjectMessage:{id:"".concat(ke,".start_project.message"),defaultMessage:"A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices"},trymeHeader:{id:"".concat(ke,".tryme.header"),defaultMessage:"Try me!"},trymeMessage:{id:"".concat(ke,".tryme.message"),defaultMessage:"Show Github repositories by"},trymeAtPrefix:{id:"".concat(ke,".tryme.atPrefix"),defaultMessage:"@"}}),n("fcb99a06256635f70435"));function Oe(e,t){return{type:Ce.c,repos:e,username:t}}var Re="boilerplate/Home/CHANGE_USERNAME";var Ie=n("7edf83707012a871cdfb"),Ne={username:""},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;return Object(Ie.a)(e,function(e){switch(t.type){case Re:e.username=t.username.replace(/@/gi,"")}})},_e=function(e){return e.home||Ne},Ee=function(){return Object(s.a)(_e,function(e){return e.username})},Ae=n("d782b72bc5b680c7122c");function Me(e){return 204===e.status||205===e.status?null:e.json()}function $e(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function He(e,t){return fetch(e,t).then($e).then(Me)}var ze=regeneratorRuntime.mark(De),Ue=regeneratorRuntime.mark(Fe);function De(){var e,t,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(Ae.select)(Ee());case 2:return e=r.sent,t="https://api.github.com/users/".concat(e,"/repos?type=all&sort=updated"),r.prev=4,r.next=7,Object(Ae.call)(He,t);case 7:return n=r.sent,r.next=10,Object(Ae.put)(Oe(n,e));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(4),r.next=16,Object(Ae.put)((a=r.t0,{type:Ce.b,error:a}));case 16:case"end":return r.stop()}var a},ze,null,[[4,12]])}function Fe(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ae.takeLatest)(Ce.a,De);case 2:case"end":return e.stop()}},Ue)}var Ge,Je=n("fe6b9508300874e26f4c"),Te=n.n(Je),Be=n("97a5be0ebbb13adf0fd5"),Le=n.n(Be),We=n("25e08c6173657e8a85c5"),qe=n.n(We);function Ve(e,t,n,r){Ge||(Ge="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&a)for(var i in a)void 0===t[i]&&(t[i]=a[i]);else t||(t=a||{});if(1===o)t.children=r;else if(o>1){for(var c=new Array(o),d=0;d<o;d++)c[d]=arguments[d+3];t.children=c}return{$$typeof:Ge,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}n.d(t,"HomePage",function(){return Qe}),n.d(t,"mapDispatchToProps",function(){return et});var Ye="home",Xe=Ve(o.Helmet,{},void 0,Ve("title",{},void 0,"Home Page"),Ve("meta",{name:"description",content:"A React.js Boilerplate application homepage"})),Ke=Ve("div",{},void 0,Ve("br",{}),Ve(ye.Container,{},void 0,Ve(ye.Row,{},void 0,Ve(ye.Col,{},void 0,Ve(ye.Carousel,{},void 0,Ve(ye.Carousel.Item,{},void 0,Ve(ye.Image,{className:"d-block w-100",src:Te.a,alt:"First slide"}),Ve(ye.Carousel.Caption,{},void 0,Ve("h3",{},void 0,"Gerakan Jaga Masjid"),Ve("p",{},void 0,"Gerakan Jaga Masjid Aman Nyaman Sehat"))),Ve(ye.Carousel.Item,{},void 0,Ve("img",{className:"d-block w-100",src:Le.a,alt:"Second slide"}),Ve(ye.Carousel.Caption,{},void 0,Ve("h3",{},void 0,"Santunan Yatim Piatu"),Ve("p",{},void 0,"Santunan kepada Yatim Piatu"))),Ve(ye.Carousel.Item,{},void 0,Ve("img",{className:"d-block w-100",src:qe.a,alt:"Third slide"}),Ve(ye.Carousel.Caption,{},void 0,Ve("h3",{},void 0,"Bantuan Sesama"),Ve("p",{},void 0,"Bantuan kepada sesama manusia yang lebih membutuhkan"))))))));function Qe(e){var t=e.username,n=e.loading,o=e.error,i=e.repos,c=e.onSubmitForm;e.onChangeUsername;O({key:Ye,reducer:Pe}),U({key:Ye,saga:Fe}),Object(r.useEffect)(function(){t&&t.trim().length>0&&c()},[]);var d={loading:n,error:o,repos:i};return Ve("article",{},void 0,Xe,Ve("div",{},void 0,Ke,Ve(Se,{},void 0,Ve(J,{}),Ve("p",{})),Ve(je,{},void 0,Ve(J,{}),Ve(xe,{onSubmit:c},void 0,Ve("label",{htmlFor:"username"},void 0,Ve(we,{}))),a.a.createElement(he,d))))}var Ze=Object(s.b)({repos:Object(s.a)(F,function(e){return e.userData.repositories}),username:Ee(),loading:Object(s.a)(F,function(e){return e.loading}),error:Object(s.a)(F,function(e){return e.error})});function et(e){return{onChangeUsername:function(t){return e((n=t.target.value,{type:Re,username:n}));var n},onSubmitForm:function(t){void 0!==t&&t.preventDefault&&t.preventDefault(),e({type:Ce.a})}}}var tt=Object(c.connect)(Ze,et);t.default=Object(d.compose)(tt,r.memo)(Qe)},"25e08c6173657e8a85c5":function(e,t,n){e.exports=n.p+"73984c8ece0e7d7c965a864c35eef380.jpg"},"97a5be0ebbb13adf0fd5":function(e,t,n){e.exports=n.p+"2f9f7ed5a1ef900f8113b7d45adfdd32.jpg"},fe6b9508300874e26f4c:function(e,t,n){e.exports=n.p+"f3cd42ffb5c4c419043621144c174483.jpg"}}]);