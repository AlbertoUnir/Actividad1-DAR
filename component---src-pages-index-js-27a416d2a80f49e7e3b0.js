(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{4852:function(e){"use strict";e.exports=Object.assign},3433:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ye}});var n,a,o,i,c=r(7294),l=r(216),s=r.n(l),u=r(5099),f=r.n(u),d=r(8266),p=r.n(d),m=r(4852),y=r.n(m),h="bodyAttributes",b="htmlAttributes",v="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(g).map((function(e){return g[e]})),"charset"),E="cssText",w="href",A="http-equiv",C="innerHTML",O="itemprop",S="name",j="property",P="rel",N="src",x="target",k={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",I="defer",R="encodeSpecialCharacters",q="onChangeClientState",M="titleTemplate",_=Object.keys(k).reduce((function(e,t){return e[k[t]]=t,e}),{}),B=[g.NOSCRIPT,g.SCRIPT,g.STYLE],D="data-react-helmet",U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},F=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Y=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=J(e,g.TITLE),r=J(e,M);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=J(e,L);return t||n||void 0},V=function(e){return J(e,q)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},G=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&te("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||r===P&&"canonical"===e[r].toLowerCase()||l===P&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==C&&c!==E&&c!==O||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=y()({},n[c],a[c]);n[c]=l}return e}),[]).reverse()},J=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Q=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Q(e)}),0)}),X=function(e){return clearTimeout(e)},Z="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:r.g.requestAnimationFrame||Q,ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||X:r.g.cancelAnimationFrame||X,te=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,ne=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,d=e.titleAttributes;ie(g.BODY,n),ie(g.HTML,a),oe(f,d);var p={baseTag:ce(g.BASE,r),linkTags:ce(g.LINK,o),metaTags:ce(g.META,i),noscriptTags:ce(g.NOSCRIPT,c),scriptTags:ce(g.SCRIPT,s),styleTags:ce(g.STYLE,u)},m={},y={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(y[e]=p[e].oldTags)})),t&&t(),l(e,m,y)},ae=function(e){return Array.isArray(e)?e.join(""):e},oe=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ie(g.TITLE,t)},ie=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(D),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute(D):r.getAttribute(D)!==i.join(",")&&r.setAttribute(D,i.join(","))}},ce=function(e,t){var r=document.head||document.querySelector(g.HEAD),n=r.querySelectorAll(e+"["+D+"]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(D,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[k[r]||r]=e[r],t}),t)},ue=function(e,t,r){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[D]=!0,a=se(r,n),[c.createElement(g.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=le(r),o=ae(t);return a?"<"+e+" "+D+'="true" '+a+">"+Y(o,n)+"</"+e+">":"<"+e+" "+D+'="true">'+Y(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case h:case b:return{toComponent:function(){return se(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[D]=!0,n);return Object.keys(t).forEach((function(e){var r=k[e]||e;if(r===C||r===E){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+Y(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===B.indexOf(e);return t+"<"+e+" "+D+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},fe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,d=e.titleAttributes;return{base:ue(g.BASE,t,n),bodyAttributes:ue(h,r,n),htmlAttributes:ue(b,a,n),link:ue(g.LINK,o,n),meta:ue(g.META,i,n),noscript:ue(g.NOSCRIPT,c,n),script:ue(g.SCRIPT,l,n),style:ue(g.STYLE,s,n),title:ue(g.TITLE,{title:f,titleAttributes:d},n)}},de=f()((function(e){return{baseTag:$([w,x],e),bodyAttributes:W(h,e),defer:J(e,I),encode:J(e,R),htmlAttributes:W(b,e),linkTags:G(g.LINK,[P,w],e),metaTags:G(g.META,[S,T,A,j,O],e),noscriptTags:G(g.NOSCRIPT,[C],e),onChangeClientState:V(e),scriptTags:G(g.SCRIPT,[N,C],e),styleTags:G(g.STYLE,[E],e),title:K(e),titleAttributes:W(v,e)}}),(function(e){re&&ee(re),e.defer?re=Z((function(){ne(e,(function(){re=null}))})):(ne(e),re=null)}),fe)((function(){return null})),pe=(a=de,i=o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return z({},n,((t={})[r.type]=[].concat(n[r.type]||[],[z({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case g.TITLE:return z({},a,((t={})[n.type]=i,t.titleAttributes=z({},o),t));case g.BODY:return z({},a,{bodyAttributes:z({},o)});case g.HTML:return z({},a,{htmlAttributes:z({},o)})}return z({},a,((r={})[n.type]=z({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=z({},t);return Object.keys(e).forEach((function(t){var n;r=z({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[_[r]||r]=e[r],t}),t)}(F(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=F(e,["children"]),n=z({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(a,n)},H(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);pe.renderStatic=pe.rewind;var me=r(1883);var ye=()=>c.createElement(c.Fragment,null,c.createElement("html",{lang:"es"},c.createElement(pe,null,c.createElement("meta",{charSet:"UTF-8"}),c.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap",rel:"stylesheet"}),c.createElement("title",null,"Blog rutas en bicicleta")),c.createElement("body",null,c.createElement("header",{id:"inicio"},c.createElement("h1",null,"RUTAS EN BICICLETA")," ",c.createElement("h4",null,"Un blog donde comparto mis experiencias y opiniones")," "),c.createElement("nav",{className:"barra-navegacion"},c.createElement("ul",null,c.createElement("li",null,c.createElement("a",{href:"#entrada1"},"MONTAÑA")," "),c.createElement("li",null,c.createElement("a",{href:"#entrada2"},"CARRETERA")," "),c.createElement("li",null,c.createElement("a",{href:"#entrada3"},"CIUDAD")," "))),c.createElement("main",null,c.createElement("article",{className:"entrada",id:"entrada1"},c.createElement("h2",null,"Parque nacional de Sierra Nevada")," ",c.createElement("div",{className:"informacion-entrada"},c.createElement("p",{className:"tipo-entrada"},"Ruta de montaña"),c.createElement("p",{className:"fecha"},"Publicado el 23 de noviembre de 2024")),c.createElement("img",{src:(0,me.withPrefix)("images/bicicleta_montaña_sierra_nevada.jpeg"),alt:"Ciclista en una ruta de montaña en un parque nacional",className:"imagen-articulo"}),c.createElement("p",null,"Si eres amante de la naturaleza y la aventura, las rutas de bicicleta de montaña son una excelente manera de conectar con el aire libre. Una de mis rutas favoritas es la del Parque Nacional de Sierra Nevada, donde los paisajes te dejan sin aliento y la adrenalina está garantizada. Con caminos llenos de rocas, pendientes desafiantes y bajadas rápidas, esta ruta es perfecta para ciclistas con experiencia que buscan emociones fuertes. Recuerda llevar siempre el equipo adecuado, incluyendo casco y guantes, y no olvides revisar tu bicicleta antes de comenzar."),c.createElement("p",null,"Durante el trayecto, te encontrarás con vistas increíbles, como lagos de montaña y bosques densos. También es posible avistar animales salvajes, lo que añade un toque especial a la experiencia. La ruta tiene un nivel de dificultad medio-alto, así que asegúrate de tener una buena condición física y suficiente agua para el trayecto."),c.createElement("a",{href:"#inicio"},"Volver al inicio")),c.createElement("article",{className:"entrada",id:"entrada2"},c.createElement("h2",null,"Costa del Sol")," ",c.createElement("div",{className:"informacion-entrada"},c.createElement("p",{className:"tipo-entrada"},"Ruta de carretera"),c.createElement("p",{className:"fecha"},"Publicado el 23 de noviembre de 2024")),c.createElement("img",{src:(0,me.withPrefix)("images/bicicleta_carretera_ruta_del_sol.jpeg"),alt:"Ruta de bicicleta de carretera a lo largo de la costa",className:"imagen-articulo"}),c.createElement("p",null,"Las rutas de bicicleta de carretera son perfectas para aquellos que aman la velocidad y los desafíos de largas distancias. Una de las mejores rutas de carretera que he hecho fue la Ruta del Sol, en la Costa del Sol, donde puedes pedalear a lo largo de la costa disfrutando del sol, la brisa del mar y las impresionantes vistas del Mediterráneo."),c.createElement("p",null,"La ruta tiene algunos tramos desafiantes, como subidas largas que pondrán a prueba tus piernas, pero al llegar a la cima, las vistas y las bajadas compensan cada esfuerzo. Durante la travesía, encontrarás pequeñas cafeterías donde puedes parar a descansar y tomar un café o un bocadillo."),c.createElement("a",{href:"#inicio"},"Volver al inicio")),c.createElement("article",{className:"entrada",id:"entrada3"},c.createElement("h2",null,"Barcelona")," ",c.createElement("div",{className:"informacion-entrada"},c.createElement("p",{className:"tipo-entrada"},"Ruta de ciudad"),c.createElement("p",{className:"fecha"},"Publicado el 23 de noviembre de 2024")),c.createElement("img",{src:(0,me.withPrefix)("images/bicicleta_ciudad_Barcelona.jpeg"),alt:"Ruta de bicicleta urbana por una ciudad moderna",className:"imagen-articulo"}),c.createElement("p",null,"Explorar la ciudad en bicicleta es una excelente forma de conocer sus calles y descubrir lugares que de otra forma podrías pasar por alto. Mi ruta favorita es la que atraviesa los parques y los principales puntos históricos de la ciudad de Barcelona."),c.createElement("p",null,"Lo mejor de las rutas urbanas es la facilidad para hacer paradas en cafeterías, museos y plazas. No necesitas una bicicleta especial, pero asegúrate de llevar un candado para poder dejarla sin preocupaciones mientras exploras los alrededores."),c.createElement("a",{href:"#inicio"},"Volver al inicio"))),c.createElement("footer",null,c.createElement("h4",null,"© 2024 - Alberto Giménez Torres - Actividad 1 - Desarrollo de aplicaciones en red.")))))},8266:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!o(e[l],i[l]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!o(l.value[1],i.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof i.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof i.toString)return e.toString()===i.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!o(e[s[l]],i[s[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},5099:function(e,t,r){"use strict";var n,a=r(7294),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}}}]);
//# sourceMappingURL=component---src-pages-index-js-27a416d2a80f49e7e3b0.js.map