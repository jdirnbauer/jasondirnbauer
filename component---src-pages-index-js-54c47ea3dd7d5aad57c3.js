(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0mN4":function(e,t,n){"use strict";n("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"7j6X":function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV");var a=n("dZvc");function r(e,t){return function(e){var t=Object(a.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}n("pIFo");var i=/([A-Z])/g;var o=/^ms-/;function s(e){return function(e){return e.replace(i,"-$1").toLowerCase()}(e).replace(o,"-ms-")}var l=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",a="";if("string"==typeof t)return e.style.getPropertyValue(s(t))||r(e).getPropertyValue(s(t));Object.keys(t).forEach((function(r){var i=t[r];i||0===i?!function(e){return!(!e||!l.test(e))}(r)?n+=s(r)+": "+i+";":a+=r+"("+i+") ":e.style.removeProperty(s(r))})),a&&(n+="transform: "+a+";"),e.style.cssText+=";"+n}},GEtZ:function(e,t,n){"use strict";var a=n("SJxq"),r=!1,i=!1;try{var o={get passive(){return r=!0},get once(){return i=r=!0}};a.a&&(window.addEventListener("test",o,o),window.removeEventListener("test",o,!0))}catch(c){}var s=function(e,t,n,a){if(a&&"boolean"!=typeof a&&!i){var o=a.once,s=a.capture,l=n;!i&&o&&(l=n.__once||function e(a){this.removeEventListener(t,e,s),n.call(this,a)},n.__once=l),e.addEventListener(t,l,r?a:s)}e.addEventListener(t,n,a)};var l=function(e,t,n,a){var r=a&&"boolean"!=typeof a?a.capture:a;e.removeEventListener(t,n,r),n.__once&&e.removeEventListener(t,n.__once,r)};t.a=function(e,t,n,a){return s(e,t,n,a),function(){l(e,t,n,a)}}},MnoC:function(e,t,n){e.exports=n.p+"static/contact_us-5bf16a94b68c1947aaa234fadf88ab3e.jpg"},OGtf:function(e,t,n){var a=n("XKFU"),r=n("eeVq"),i=n("vhPU"),o=/"/g,s=function(e,t,n,a){var r=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},RXBc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("vrFN"),o=(n("0mN4"),n("k1TG")),s=n("8o2o"),l=n("TSYQ"),c=n.n(l),u=n("JCAc"),d=(n("pIFo"),/-(.)/g);var f=n("vUet"),p=function(e){return e[0].toUpperCase()+(t=e,t.replace(d,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var m=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,i=e.as,l=Object(s.a)(e,["bsPrefix","className","as"]);n=Object(f.a)(n,"navbar-brand");var u=i||(l.href?"a":"span");return r.a.createElement(u,Object(o.a)({},l,{ref:t,className:c()(a,n)}))}));m.displayName="NavbarBrand";var E=m,b=n("9Hrx"),h=n("7j6X"),v=(n("V+eJ"),n("SJxq")),x=n("GEtZ"),g=v.a&&"ontransitionend"in window;function N(e,t,n){void 0===n&&(n=5);var a=!1,r=setTimeout((function(){a||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),i=Object(x.a)(e,"transitionend",(function(){a=!0}),{once:!0});return function(){clearTimeout(r),i()}}var O=function(e,t,n){return g?(null==n&&(a=e,r=Object(h.a)(a,"transitionDuration")||"",i=-1===r.indexOf("ms")?1e3:1,n=parseFloat(r)*i||0),N(e,n),Object(x.a)(e,"transitionend",t)):N(e,0,0);var a,r,i},j=(n("17x9"),n("i8i4")),w=n.n(j),y=!1,C=r.a.createContext(null),S="unmounted",k="exited",P="entering",T="entered",D=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var r,i=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?i?(r=k,a.appearStatus=P):r=T:r=t.unmountOnExit||t.mountOnEnter?S:k,a.state={status:r},a.nextCallback=null,a}Object(b.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===S?{status:k}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==P&&n!==T&&(t=P):n!==P&&n!==T||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!=typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=w.a.findDOMNode(this);t===P?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===k&&this.setState({status:S})},n.performEnter=function(e,t){var n=this,a=this.props.enter,r=this.context?this.context.isMounting:t,i=this.getTimeouts(),o=r?i.appear:i.enter;!t&&!a||y?this.safeSetState({status:T},(function(){n.props.onEntered(e)})):(this.props.onEnter(e,r),this.safeSetState({status:P},(function(){n.props.onEntering(e,r),n.onTransitionEnd(e,o,(function(){n.safeSetState({status:T},(function(){n.props.onEntered(e,r)}))}))})))},n.performExit=function(e){var t=this,n=this.props.exit,a=this.getTimeouts();n&&!y?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,a.exit,(function(){t.safeSetState({status:k},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:k},(function(){t.props.onExited(e)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var a=null==t&&!this.props.addEndListener;e&&!a?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===S)return null;var t=this.props,n=t.children,a=Object(s.a)(t,["children"]);if(delete a.in,delete a.mountOnEnter,delete a.unmountOnExit,delete a.appear,delete a.enter,delete a.exit,delete a.timeout,delete a.addEndListener,delete a.onEnter,delete a.onEntering,delete a.onEntered,delete a.onExit,delete a.onExiting,delete a.onExited,"function"==typeof n)return r.a.createElement(C.Provider,{value:null},n(e,a));var i=r.a.Children.only(n);return r.a.createElement(C.Provider,{value:null},r.a.cloneElement(i,a))},t}(r.a.Component);function L(){}D.contextType=C,D.propTypes={},D.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:L,onEntering:L,onEntered:L,onExit:L,onExiting:L,onExited:L},D.UNMOUNTED=0,D.EXITED=1,D.ENTERING=2,D.ENTERED=3,D.EXITING=4;var _,J=D,R=n("Qg85");var V={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var I=((_={})[k]="collapse",_.exiting="collapsing",_[P]="collapsing",_[T]="collapse show",_),U={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],a=V[e];return n+parseInt(Object(h.a)(t,a[0]),10)+parseInt(Object(h.a)(t,a[1]),10)}},W=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleEnter=function(e){e.style[t.getDimension()]="0"},t.handleEntering=function(e){var n=t.getDimension();e.style[n]=t._getScrollDimensionValue(e,n)},t.handleEntered=function(e){e.style[t.getDimension()]=null},t.handleExit=function(e){var n=t.getDimension();e.style[n]=t.props.getDimensionValue(n,e)+"px",e.offsetHeight},t.handleExiting=function(e){e.style[t.getDimension()]=null},t}Object(b.a)(t,e);var n=t.prototype;return n.getDimension=function(){return"function"==typeof this.props.dimension?this.props.dimension():this.props.dimension},n._getScrollDimensionValue=function(e,t){return e["scroll"+t[0].toUpperCase()+t.slice(1)]+"px"},n.render=function(){var e=this,t=this.props,n=t.onEnter,a=t.onEntering,i=t.onEntered,l=t.onExit,u=t.onExiting,d=t.className,f=t.children,p=Object(s.a)(t,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete p.dimension,delete p.getDimensionValue;var m=Object(R.a)(this.handleEnter,n),E=Object(R.a)(this.handleEntering,a),b=Object(R.a)(this.handleEntered,i),h=Object(R.a)(this.handleExit,l),v=Object(R.a)(this.handleExiting,u);return r.a.createElement(J,Object(o.a)({addEndListener:O},p,{"aria-expanded":p.role?p.in:null,onEnter:m,onEntering:E,onEntered:b,onExit:h,onExiting:v}),(function(t,n){return r.a.cloneElement(f,Object(o.a)({},n,{className:c()(d,f.props.className,I[t],"width"===e.getDimension()&&"width")}))}))},t}(r.a.Component);W.defaultProps=U;var G=W,F=n("qUpC"),X=r.a.forwardRef((function(e,t){var n=e.children,a=e.bsPrefix,i=Object(s.a)(e,["children","bsPrefix"]);return a=Object(f.a)(a,"navbar-collapse"),r.a.createElement(F.a.Consumer,null,(function(e){return r.a.createElement(G,Object(o.a)({in:!(!e||!e.expanded)},i),r.a.createElement("div",{ref:t,className:a},n))}))}));X.displayName="NavbarCollapse";var q=X,B=n("ZCiN"),M=r.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,l=e.children,u=e.label,d=e.as,p=void 0===d?"button":d,m=e.onClick,E=Object(s.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(f.a)(n,"navbar-toggler");var b=Object(a.useContext)(F.a)||{},h=b.onToggle,v=b.expanded,x=Object(B.a)((function(e){m&&m(e),h&&h()}));return"button"===p&&(E.type="button"),r.a.createElement(p,Object(o.a)({},E,{ref:t,onClick:x,"aria-label":u,className:c()(i,n,!v&&"collapsed")}),l||r.a.createElement("span",{className:n+"-icon"}))}));M.displayName="NavbarToggle",M.defaultProps={label:"Toggle navigation"};var Z,z,A,Y,H,K,Q,$,ee,te=M,ne=n("ILyh"),ae=r.a.forwardRef((function(e,t){var n=Object(u.a)(e,{expanded:"onToggle"}),i=n.bsPrefix,l=n.expand,d=n.variant,p=n.bg,m=n.fixed,E=n.sticky,b=n.className,h=n.children,v=n.as,x=void 0===v?"nav":v,g=n.expanded,N=n.onToggle,O=n.onSelect,j=n.collapseOnSelect,w=Object(s.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]);i=Object(f.a)(i,"navbar");var y=Object(a.useCallback)((function(){O&&O.apply(void 0,arguments),j&&g&&N(!1)}),[O,j,g,N]);void 0===w.role&&"nav"!==x&&(w.role="navigation");var C=i+"-expand";"string"==typeof l&&(C=C+"-"+l);var S=Object(a.useMemo)((function(){return{onToggle:function(){return N(!g)},bsPrefix:i,expanded:g}}),[i,g,N]);return r.a.createElement(F.a.Provider,{value:S},r.a.createElement(ne.a.Provider,{value:y},r.a.createElement(x,Object(o.a)({ref:t},w,{className:c()(b,i,l&&C,d&&i+"-"+d,p&&"bg-"+p,E&&"sticky-"+E,m&&"fixed-"+m)}),h)))}));ae.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},ae.displayName="Navbar",ae.Brand=E,ae.Toggle=te,ae.Collapse=q,ae.Text=(Z="navbar-text",Y=(A=void 0===(z={Component:"span"})?{}:z).displayName,H=void 0===Y?p(Z):Y,K=A.Component,Q=void 0===K?"div":K,$=A.defaultProps,(ee=r.a.forwardRef((function(e,t){var n=e.className,a=e.bsPrefix,i=e.as,l=void 0===i?Q:i,u=Object(s.a)(e,["className","bsPrefix","as"]),d=Object(f.a)(a,Z);return r.a.createElement(l,Object(o.a)({ref:t,className:c()(n,d)},u))}))).defaultProps=$,ee.displayName=H,ee);var re=ae,ie=n("+YzT"),oe=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.fluid,i=e.as,l=void 0===i?"div":i,u=e.className,d=Object(s.a)(e,["bsPrefix","fluid","as","className"]),p=Object(f.a)(n,"container");return r.a.createElement(l,Object(o.a)({ref:t},d,{className:c()(u,a?p+"-fluid":p)}))}));oe.displayName="Container",oe.defaultProps={fluid:!1};var se=oe,le=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.noGutters,i=e.as,l=void 0===i?"div":i,u=e.className,d=Object(s.a)(e,["bsPrefix","noGutters","as","className"]),p=Object(f.a)(n,"row");return r.a.createElement(l,Object(o.a)({ref:t},d,{className:c()(u,p,a&&"no-gutters")}))}));le.defaultProps={noGutters:!1};var ce=le,ue=(n("8+KV"),["xl","lg","md","sm","xs"]),de=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,i=e.as,l=void 0===i?"div":i,u=Object(s.a)(e,["bsPrefix","className","as"]),d=Object(f.a)(n,"col"),p=[],m=[];return ue.forEach((function(e){var t,n,a,r=u[e];if(delete u[e],null!=r&&"object"==typeof r){var i=r.span;t=void 0===i||i,n=r.offset,a=r.order}else t=r;var o="xs"!==e?"-"+e:"";null!=t&&p.push(!0===t?""+d+o:""+d+o+"-"+t),null!=a&&m.push("order"+o+"-"+a),null!=n&&m.push("offset"+o+"-"+n)})),p.length||p.push(d),r.a.createElement(l,Object(o.a)({},u,{ref:t,className:c.a.apply(void 0,[a].concat(p,m))}))}));de.displayName="Col";var fe=de,pe=n("eYdX"),me=n.n(pe),Ee=n("lB7b"),be=n.n(Ee),he=n("wF87"),ve=n.n(he),xe=n("MnoC"),ge=n.n(xe);n("gqNJ"),t.default=function(){return r.a.createElement("div",{className:"page"},r.a.createElement("section",null,r.a.createElement(re,{bg:"dark",variant:"dark",expand:"md",fixed:"top"},r.a.createElement(re.Brand,{href:"#home"},"Jason Dirnbauer Web Design Studios"),r.a.createElement(re.Toggle,null),r.a.createElement(re.Collapse,{className:"justify-content-end"},r.a.createElement(re.Text,null,r.a.createElement(ie.a,null,r.a.createElement(ie.a.Link,{href:"#about"},"About"),r.a.createElement(ie.a.Link,{href:"#portfolio"},"Portfolio"),r.a.createElement(ie.a.Link,{href:"#blog"},"Blog"),r.a.createElement(ie.a.Link,{href:"#contact"},"Contact"),r.a.createElement(ie.a.Link,{href:"#login"},"Login"))))),r.a.createElement(i.a,{title:"Jason Dirnbauer Web Design"}),r.a.createElement("img",{src:me.a,alt:"header",className:"full_page_container"}),r.a.createElement("div",{className:"top-left text-color"},r.a.createElement("h1",{className:"text-resize"},"Jason Dirnbauer",r.a.createElement("br",null)),r.a.createElement("h1",{className:"text-resize"},"Web Design Studios",r.a.createElement("br",null)),r.a.createElement("h1",{className:"text-resize"},"We make websites to help your company succeed."))),r.a.createElement(se,null,r.a.createElement(ce,{id:"about"},r.a.createElement(fe,{md:6},r.a.createElement("img",{src:be.a,alt:"about us"})),r.a.createElement(fe,{md:6},r.a.createElement("h2",{className:"text-center"},"About"),r.a.createElement("p",{className:"text-center ml-5"},"Jason Dirnbauer Web Design is a web design company located in the La Crosse, WI area. We develop sites for businesses that need a web presence to further their business goals. We enjoy working with businesses no matter the size because everyone can benefit from a well thought web presence. All of our sites are handmade which ensures that every detail is examined to ensure the best possible results for your business. Whether it be a new web site, a SEO optimization, or a site redesign Jason Dirnbauer Web Design Studios can assist."))),r.a.createElement(ce,{id:"portfolio"},r.a.createElement(fe,{md:6},r.a.createElement("img",{src:ve.a,alt:"portfolio"})),r.a.createElement(fe,{md:6},r.a.createElement("h2",{className:"text-center"},"Portfolio"),r.a.createElement("p",{className:"text-center ml-5"},"Our studio has had the opportunity to work with many fine clients including:"),r.a.createElement("ul",{className:"text-center"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.thefrugalnomads.com"},"The Frugal Nomads"))))),r.a.createElement(ce,{id:"contact"},r.a.createElement(fe,{md:6},r.a.createElement("img",{src:ge.a,alt:"contact us"})),r.a.createElement(fe,{md:6},r.a.createElement("h2",{className:"text-center"},"Contact"),r.a.createElement("p",{className:"text-center"},"If you'd like to work with our design studio please ",r.a.createElement("a",{href:"mailto:jason@jasondirnbauer.com"},"contact us.")," ")))))}},SJxq:function(e,t,n){"use strict";t.a=!("undefined"==typeof window||!window.document||!window.document.createElement)},dZvc:function(e,t,n){"use strict";function a(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return a}))},eYdX:function(e,t,n){e.exports=n.p+"static/header_image-c673f56c3de9d0405b69af5da91e6854.jpg"},lB7b:function(e,t,n){e.exports=n.p+"static/about_us-5631e61bfd2875cd3754ba2e43373dbc.jpg"},wF87:function(e,t,n){e.exports=n.p+"static/portfolio_image-56c94aeed9f2310726f79c02e6e0c0a6.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-54c47ea3dd7d5aad57c3.js.map