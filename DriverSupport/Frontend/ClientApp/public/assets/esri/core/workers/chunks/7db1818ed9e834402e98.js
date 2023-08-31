"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6968],{10937:(e,t,r)=>{function n(){const e=new Float32Array(16);return e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}r.d(t,{c:()=>n});const i=n();Object.freeze({__proto__:null,create:n,clone:function(e){const t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},fromValues:function(e,t,r,n,i,a,o,s,u,l,c,p,f,h,d,y){const m=new Float32Array(16);return m[0]=e,m[1]=t,m[2]=r,m[3]=n,m[4]=i,m[5]=a,m[6]=o,m[7]=s,m[8]=u,m[9]=l,m[10]=c,m[11]=p,m[12]=f,m[13]=h,m[14]=d,m[15]=y,m},createView:function(e,t){return new Float32Array(e,t,16)},IDENTITY:i})},57520:(e,t,r)=>{r.d(t,{ij:()=>$,cW:()=>F});var n=r(20102),i=r(78286),a=r(35270),o=r(62357),s=r(10937),u=r(52138);class l{constructor(e,t,r){this.strength=e,this.radius=t,this.threshold=r,this.type="bloom"}interpolate(e,t,r){this.strength=y(e.strength,t.strength,r),this.radius=y(e.radius,t.radius,r),this.threshold=y(e.threshold,t.threshold,r)}clone(){return new l(this.strength,this.radius,this.threshold)}toJSON(){return{type:"bloom",radius:m(this.radius),strength:this.strength,threshold:this.threshold}}}class c{constructor(e){this.radius=e,this.type="blur"}interpolate(e,t,r){this.radius=Math.round(y(e.radius,t.radius,r))}clone(){return new c(this.radius)}toJSON(){return{type:"blur",radius:m(this.radius)}}}class p{constructor(e,t){this.type=e,this.amount=t,"invert"!==this.type&&"grayscale"!==this.type&&"sepia"!==this.type||(this.amount=Math.min(this.amount,1))}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(e,t,r){this.amount=y(e.amount,t.amount,r),this._updateMatrix()}clone(){return new p(this.type,this.amount)}toJSON(){return{type:this.type,amount:this.amount}}_updateMatrix(){const e=this._colorMatrix||(0,s.c)();switch(this.type){case"brightness":this._colorMatrix=((e,t)=>{const r=(0,u.s)(e,t,0,0,0,0,t,0,0,0,0,t,0,0,0,0,1);return(0,u.t)(r,r)})(e,this.amount);break;case"contrast":this._colorMatrix=((e,t)=>{const r=(0,u.s)(e,t,0,0,.5-.5*t,0,t,0,.5-.5*t,0,0,t,.5-.5*t,0,0,0,1);return(0,u.t)(r,r)})(e,this.amount);break;case"grayscale":this._colorMatrix=((e,t)=>{const r=1-this.amount,n=(0,u.s)(e,.2126+.7874*r,.7152-.7152*r,.0722-.0722*r,0,.2126-.2126*r,.7152+.2848*r,.0722-.0722*r,0,.2126-.2126*r,.7152-.7152*r,.0722+.9278*r,0,0,0,0,1);return(0,u.t)(n,n)})(e);break;case"invert":this._colorMatrix=((e,t)=>{const r=1-2*t,n=(0,u.s)(e,r,0,0,t,0,r,0,t,0,0,r,t,0,0,0,1);return(0,u.t)(n,n)})(e,this.amount);break;case"saturate":this._colorMatrix=((e,t)=>{const r=(0,u.s)(e,.213+.787*t,.715-.715*t,.072-.072*t,0,.213-.213*t,.715+.285*t,.072-.072*t,0,.213-.213*t,.715-.715*t,.072+.928*t,0,0,0,0,1);return(0,u.t)(r,r)})(e,this.amount);break;case"sepia":this._colorMatrix=((e,t)=>{const r=1-this.amount,n=(0,u.s)(e,.393+.607*r,.769-.769*r,.189-.189*r,0,.349-.349*r,.686+.314*r,.168-.168*r,0,.272-.272*r,.534-.534*r,.131+.869*r,0,0,0,0,1);return(0,u.t)(n,n)})(e)}}}class f{constructor(e,t,r,n){this.offsetX=e,this.offsetY=t,this.blurRadius=r,this.color=n,this.type="drop-shadow"}interpolate(e,t,r){this.offsetX=y(e.offsetX,t.offsetX,r),this.offsetY=y(e.offsetY,t.offsetY,r),this.blurRadius=y(e.blurRadius,t.blurRadius,r),this.color[0]=Math.round(y(e.color[0],t.color[0],r)),this.color[1]=Math.round(y(e.color[1],t.color[1],r)),this.color[2]=Math.round(y(e.color[2],t.color[2],r)),this.color[3]=y(e.color[3],t.color[3],r)}clone(){return new f(this.offsetX,this.offsetY,this.blurRadius,[...this.color])}toJSON(){const e=[...this.color];return e[3]*=255,{type:"drop-shadow",xoffset:m(this.offsetX),yoffset:m(this.offsetY),blurRadius:m(this.blurRadius),color:e}}}class h{constructor(e){this.angle=e,this.type="hue-rotate"}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(e,t,r){this.angle=y(e.angle,t.angle,r),this._updateMatrix()}clone(){return new h(this.angle)}toJSON(){return{type:"hue-rotate",angle:this.angle}}_updateMatrix(){const e=this._colorMatrix||(0,s.c)();this._colorMatrix=((e,t)=>{const r=Math.sin(t*Math.PI/180),n=Math.cos(t*Math.PI/180),i=(0,u.s)(e,.213+.787*n-.213*r,.715-.715*n-.715*r,.072-.072*n+.928*r,0,.213-.213*n+.143*r,.715+.285*n+.14*r,.072-.072*n-.283*r,0,.213-.213*n-.787*r,.715-.715*n+.715*r,.072+.928*n+.072*r,0,0,0,0,1);return(0,u.t)(i,i)})(e,this.angle)}}class d{constructor(e){this.amount=e,this.type="opacity",this.amount=Math.min(this.amount,1)}interpolate(e,t,r){this.amount=y(e.amount,t.amount,r)}clone(){return new d(this.amount)}toJSON(){return{type:"opacity",amount:this.amount}}}function y(e,t,r){return e+(t-e)*r}function m(e){return Math.round(1e3*(0,o.Wz)(e))/1e3}function g(e){switch(e.type){case"grayscale":case"sepia":case"invert":return new p(e.type,0);case"saturate":case"brightness":case"contrast":return new p(e.type,1);case"opacity":return new d(1);case"hue-rotate":return new h(0);case"blur":return new c(0);case"drop-shadow":return new f(0,0,0,[...(0,a.h$)("transparent")]);case"bloom":return new l(0,0,1)}}function w(e,t){const r=e.length>t.length?e:t;return(e.length>t.length?t:e).every(((e,t)=>e.type===r[t].type))}function v(e,t){const r=e.length>t.length?e:t,n=e.length>t.length?t:e;for(let e=n.length;e<r.length;e++)n.push(g(r[e]))}r(5732);var b,x,S={exports:{}};function A(e){if(!e||0===e.length)return null;if("string"==typeof e){const t=I(e);return t&&0!==t.length?t:null}const t=e.map((e=>{if(!Number.isFinite(e.scale)||e.scale<=0)throw new n.Z("effect:invalid-scale","scale must be finite and greater than 0",{stop:e});return{scale:e.scale,effects:I(e.value)}}));t.sort(((e,t)=>t.effects.length-e.effects.length));for(let e=0;e<t.length-1;e++){if(!w(t[e].effects,t[e+1].effects))throw new n.Z("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:t[e].effects,b:t[e+1].effects});v(t[e].effects,t[e+1].effects)}return t.sort(((e,t)=>t.scale-e.scale)),t}function I(e){let t;if(!e)return[];try{t=S.exports.parse(e)}catch(t){throw new n.Z("effect:invalid-syntax","Invalid effect syntax",{value:e,error:t})}return t.map((e=>function(e){try{switch(e.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return function(e){let t=1;return L(e.parameters,1),1===e.parameters.length&&(t=O(e.parameters[0])),new p(e.name,t)}(e);case"opacity":return function(e){let t=1;return L(e.parameters,1),1===e.parameters.length&&(t=O(e.parameters[0])),new d(t)}(e);case"hue-rotate":return function(e){let t=0;return L(e.parameters,1),1===e.parameters.length&&(t=function(e){return function(e){if("quantity"!==e.type||!(0===e.value&&null===e.unit||e.unit&&null!=C[e.unit]))throw new n.Z("effect:type-error",`Expected <angle>, Actual: ${M(e)}`,{term:e})}(e),e.value*C[e.unit]||0}(e.parameters[0])),new h(t)}(e);case"blur":return function(e){let t=0;return L(e.parameters,1),1===e.parameters.length&&(t=T(e.parameters[0]),_(t,e.parameters[0])),new c(t)}(e);case"drop-shadow":return function(e){const t=[];let r=null;for(const i of e.parameters)if("color"===i.type){if(t.length&&Object.freeze(t),r)throw new n.Z("effect:type-error","Accepts only one color",{});r=E(i)}else{const e=T(i);if(Object.isFrozen(t))throw new n.Z("effect:type-error","<length> parameters not consecutive",{lengths:t});t.push(e),3===t.length&&_(e,i)}if(t.length<2||t.length>3)throw new n.Z("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${t.length}}`,{lengths:t});return new f(t[0],t[1],t[2]||0,r||G("black"))}(e);case"bloom":return function(e){let t=1,r=0,n=0;return L(e.parameters,3),e.parameters[0]&&(t=O(e.parameters[0])),e.parameters[1]&&(r=T(e.parameters[1]),_(r,e.parameters[1])),e.parameters[2]&&(n=O(e.parameters[2])),new l(t,r,n)}(e)}}catch(t){throw t.details.filter=e,t}throw new n.Z("effect:unknown-effect",`Effect '${e.name}' is not supported`,{effect:e})}(e)))}function L(e,t){if(e.length>t)throw new n.Z("effect:type-error",`Function supports up to ${t} parameters, Actual: ${e.length}`,{parameters:e})}function M(e){if("color"===e.type)return"<color>";if(e.unit){if(j[e.unit])return"<length>";if(C[e.unit])return"<angle>";if("%"===e.unit)return"<percentage>"}return"<double>"}function _(e,t){if(e<0)throw new n.Z("effect:type-error",`Negative values are not allowed, Actual: ${e}`,{term:t})}x=function(){function e(t,r,n,i){var a=Error.call(this,t);return Object.setPrototypeOf&&Object.setPrototypeOf(a,e.prototype),a.expected=r,a.found=n,a.location=i,a.name="SyntaxError",a}function t(e,t,r){return r=r||" ",e.length>t?e:(t-=e.length,e+(r+=r.repeat(t)).slice(0,t))}return function(e,t){function r(){this.constructor=e}r.prototype=t.prototype,e.prototype=new r}(e,Error),e.prototype.format=function(e){var r="Error: "+this.message;if(this.location){var n,i=null;for(n=0;n<e.length;n++)if(e[n].source===this.location.source){i=e[n].text.split(/\r\n|\n|\r/g);break}var a=this.location.start,o=this.location.source+":"+a.line+":"+a.column;if(i){var s=this.location.end,u=t("",a.line.toString().length),l=i[a.line-1],c=a.line===s.line?s.column:l.length+1;r+="\n --\x3e "+o+"\n"+u+" |\n"+a.line+" | "+l+"\n"+u+" | "+t("",a.column-1)+t("",c-a.column,"^")}else r+="\n at "+o}return r},e.buildMessage=function(e,t){var r={literal:function(e){return'"'+i(e.text)+'"'},class:function(e){var t=e.parts.map((function(e){return Array.isArray(e)?a(e[0])+"-"+a(e[1]):a(e)}));return"["+(e.inverted?"^":"")+t+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(e){return e.description}};function n(e){return e.charCodeAt(0).toString(16).toUpperCase()}function i(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+n(e)}))}function a(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+n(e)}))}function o(e){return r[e.type](e)}return"Expected "+function(e){var t,r,n=e.map(o);if(n.sort(),n.length>0){for(t=1,r=1;t<n.length;t++)n[t-1]!==n[t]&&(n[r]=n[t],r++);n.length=r}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(e)+" but "+function(e){return e?'"'+i(e)+'"':"end of input"}(t)+" found."},{SyntaxError:e,parse:function(t,r){var n,i={},a=(r=void 0!==r?r:{}).grammarSource,o={start:se},s=se,u="none",l="grad",c="turn",p=/^[ \t\n\r]/,f=/^[a-z\-]/,h=/^[0-9a-fA-F]/,d=/^[+\-]/,y=/^[0-9]/,m=ne("none"),g=te("none",!1),w=te(")",!1),v=te(",",!1),b=ne("whitespace"),x=re([" ","\t","\n","\r"],!1,!1),S=ne("function"),A=te("(",!1),I=ne("identifier"),L=re([["a","z"],"-"],!1,!1),M=ne("percentage"),_=te("%",!1),C=ne("length"),j=te("px",!1),O=te("cm",!1),T=te("mm",!1),E=te("in",!1),G=te("pt",!1),N=te("pc",!1),R=ne("angle"),$=te("deg",!1),F=te("rad",!1),Z=te("grad",!1),k=te("turn",!1),B=ne("number"),q=ne("color"),V=te("#",!1),D=re([["0","9"],["a","f"],["A","F"]],!1,!1),W=re(["+","-"],!1,!1),z=re([["0","9"]],!1,!1),J=te(".",!1),P=te("e",!1),Y=0,X=0,H=[{line:1,column:1}],U=0,K=[],Q=0;if("startRule"in r){if(!(r.startRule in o))throw new Error("Can't start parsing from rule \""+r.startRule+'".');s=o[r.startRule]}function ee(){return t.substring(X,Y)}function te(e,t){return{type:"literal",text:e,ignoreCase:t}}function re(e,t,r){return{type:"class",parts:e,inverted:t,ignoreCase:r}}function ne(e){return{type:"other",description:e}}function ie(e){var r,n=H[e];if(n)return n;for(r=e-1;!H[r];)r--;for(n={line:(n=H[r]).line,column:n.column};r<e;)10===t.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return H[e]=n,n}function ae(e,t){var r=ie(e),n=ie(t);return{source:a,start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:n.line,column:n.column}}}function oe(e){Y<U||(Y>U&&(U=Y,K=[]),K.push(e))}function se(){var e;return(e=ue())===i&&(e=function(){var e,t;if(e=[],(t=le())!==i)for(;t!==i;)e.push(t),t=le();else e=i;return e}()),e}function ue(){var e,r;return Q++,e=Y,pe(),t.substr(Y,4)===u?(r=u,Y+=4):(r=i,0===Q&&oe(g)),r!==i?(pe(),X=e,e=[]):(Y=e,e=i),Q--,e===i&&0===Q&&oe(m),e}function le(){var e,r,n,a;return e=Y,pe(),(r=function(){var e,r,n;return Q++,e=Y,(r=fe())!==i?(40===t.charCodeAt(Y)?(n="(",Y++):(n=i,0===Q&&oe(A)),n!==i?(X=e,e=r):(Y=e,e=i)):(Y=e,e=i),Q--,e===i&&(r=i,0===Q&&oe(S)),e}())!==i?(pe(),(n=function(){var e,r,n,a,o,s,u,l;if(e=Y,(r=ce())!==i){for(n=[],a=Y,o=pe(),44===t.charCodeAt(Y)?(s=",",Y++):(s=i,0===Q&&oe(v)),s===i&&(s=null),u=pe(),(l=ce())!==i?a=o=[o,s,u,l]:(Y=a,a=i);a!==i;)n.push(a),a=Y,o=pe(),44===t.charCodeAt(Y)?(s=",",Y++):(s=i,0===Q&&oe(v)),s===i&&(s=null),u=pe(),(l=ce())!==i?a=o=[o,s,u,l]:(Y=a,a=i);X=e,e=function(e,t){return t.length>0?function(e,t,r){return[e].concat(function(e,t){return e.map((function(e){return e[3]}))}(t))}(e,t):[e]}(r,n)}else Y=e,e=i;return e}())===i&&(n=null),pe(),41===t.charCodeAt(Y)?(a=")",Y++):(a=i,0===Q&&oe(w)),a!==i?(pe(),X=e,e=function(e,t){return{type:"function",name:e,parameters:t||[]}}(r,n)):(Y=e,e=i)):(Y=e,e=i),e}function ce(){var e,t;return e=Y,(t=he())===i&&(t=de())===i&&(t=ye())===i&&(t=function(){var e,t;return Q++,e=Y,pe(),(t=ge())!==i?(X=e,e=function(e){return{value:e,unit:null}}(t)):(Y=e,e=i),Q--,e===i&&0===Q&&oe(B),e}()),t!==i&&(X=e,t=function(e){return{type:"quantity",value:e.value,unit:e.unit}}(t)),(e=t)===i&&(e=Y,(t=me())!==i&&(X=e,t=function(e){return{type:"color",colorType:e.type,value:e.value}}(t)),e=t),e}function pe(){var e,r;for(Q++,e=[],p.test(t.charAt(Y))?(r=t.charAt(Y),Y++):(r=i,0===Q&&oe(x));r!==i;)e.push(r),p.test(t.charAt(Y))?(r=t.charAt(Y),Y++):(r=i,0===Q&&oe(x));return Q--,r=i,0===Q&&oe(b),e}function fe(){var e,r,n;if(Q++,e=Y,r=[],f.test(t.charAt(Y))?(n=t.charAt(Y),Y++):(n=i,0===Q&&oe(L)),n!==i)for(;n!==i;)r.push(n),f.test(t.charAt(Y))?(n=t.charAt(Y),Y++):(n=i,0===Q&&oe(L));else r=i;return r!==i&&(X=e,r=ee()),Q--,(e=r)===i&&(r=i,0===Q&&oe(I)),e}function he(){var e,r,n;return Q++,e=Y,pe(),(r=ge())!==i?(37===t.charCodeAt(Y)?(n="%",Y++):(n=i,0===Q&&oe(_)),n!==i?(X=e,e=function(e){return{value:e,unit:"%"}}(r)):(Y=e,e=i)):(Y=e,e=i),Q--,e===i&&0===Q&&oe(M),e}function de(){var e,r,n;return Q++,e=Y,pe(),(r=ge())!==i?("px"===t.substr(Y,2)?(n="px",Y+=2):(n=i,0===Q&&oe(j)),n!==i?(X=e,e=function(e){return{value:e,unit:"px"}}(r)):(Y=e,e=i)):(Y=e,e=i),e===i&&(e=Y,pe(),(r=ge())!==i?("cm"===t.substr(Y,2)?(n="cm",Y+=2):(n=i,0===Q&&oe(O)),n!==i?(X=e,e=function(e){return{value:e,unit:"cm"}}(r)):(Y=e,e=i)):(Y=e,e=i),e===i&&(e=Y,pe(),(r=ge())!==i?("mm"===t.substr(Y,2)?(n="mm",Y+=2):(n=i,0===Q&&oe(T)),n!==i?(X=e,e=function(e){return{value:e,unit:"mm"}}(r)):(Y=e,e=i)):(Y=e,e=i),e===i&&(e=Y,pe(),(r=ge())!==i?("in"===t.substr(Y,2)?(n="in",Y+=2):(n=i,0===Q&&oe(E)),n!==i?(X=e,e=function(e){return{value:e,unit:"in"}}(r)):(Y=e,e=i)):(Y=e,e=i),e===i&&(e=Y,pe(),(r=ge())!==i?("pt"===t.substr(Y,2)?(n="pt",Y+=2):(n=i,0===Q&&oe(G)),n!==i?(X=e,e=function(e){return{value:e,unit:"pt"}}(r)):(Y=e,e=i)):(Y=e,e=i),e===i&&(e=Y,pe(),(r=ge())!==i?("pc"===t.substr(Y,2)?(n="pc",Y+=2):(n=i,0===Q&&oe(N)),n!==i?(X=e,e=function(e){return{value:e,unit:"pc"}}(r)):(Y=e,e=i)):(Y=e,e=i)))))),Q--,e===i&&0===Q&&oe(C),e}function ye(){var e,r,n;return Q++,e=Y,(r=ge())!==i?("deg"===t.substr(Y,3)?(n="deg",Y+=3):(n=i,0===Q&&oe($)),n!==i?(X=e,e=function(e){return{value:e,unit:"deg"}}(r)):(Y=e,e=i)):(Y=e,e=i),e===i&&(e=Y,(r=ge())!==i?("rad"===t.substr(Y,3)?(n="rad",Y+=3):(n=i,0===Q&&oe(F)),n!==i?(X=e,e=function(e){return{value:e,unit:"rad"}}(r)):(Y=e,e=i)):(Y=e,e=i),e===i&&(e=Y,(r=ge())!==i?(t.substr(Y,4)===l?(n=l,Y+=4):(n=i,0===Q&&oe(Z)),n!==i?(X=e,e=function(e){return{value:e,unit:"grad"}}(r)):(Y=e,e=i)):(Y=e,e=i),e===i&&(e=Y,(r=ge())!==i?(t.substr(Y,4)===c?(n=c,Y+=4):(n=i,0===Q&&oe(k)),n!==i?(X=e,e=function(e){return{value:e,unit:"turn"}}(r)):(Y=e,e=i)):(Y=e,e=i)))),Q--,e===i&&(r=i,0===Q&&oe(R)),e}function me(){var e,r,n,a;if(Q++,e=Y,35===t.charCodeAt(Y)?(r="#",Y++):(r=i,0===Q&&oe(V)),r!==i){if(n=[],h.test(t.charAt(Y))?(a=t.charAt(Y),Y++):(a=i,0===Q&&oe(D)),a!==i)for(;a!==i;)n.push(a),h.test(t.charAt(Y))?(a=t.charAt(Y),Y++):(a=i,0===Q&&oe(D));else n=i;n!==i?(X=e,e={type:"hex",value:ee()}):(Y=e,e=i)}else Y=e,e=i;return e===i&&(e=Y,(r=le())!==i&&(X=e,r=function(e){return{type:"function",value:e}}(r)),(e=r)===i&&(e=Y,(r=fe())!==i&&(X=e,r={type:"named",value:ee()}),e=r)),Q--,e===i&&(r=i,0===Q&&oe(q)),e}function ge(){var e,r,n,a,o,s,u;for(e=Y,d.test(t.charAt(Y))?(t.charAt(Y),Y++):0===Q&&oe(W),r=Y,n=[],y.test(t.charAt(Y))?(a=t.charAt(Y),Y++):(a=i,0===Q&&oe(z));a!==i;)n.push(a),y.test(t.charAt(Y))?(a=t.charAt(Y),Y++):(a=i,0===Q&&oe(z));if(46===t.charCodeAt(Y)?(a=".",Y++):(a=i,0===Q&&oe(J)),a!==i){if(o=[],y.test(t.charAt(Y))?(s=t.charAt(Y),Y++):(s=i,0===Q&&oe(z)),s!==i)for(;s!==i;)o.push(s),y.test(t.charAt(Y))?(s=t.charAt(Y),Y++):(s=i,0===Q&&oe(z));else o=i;o!==i?r=n=[n,a,o]:(Y=r,r=i)}else Y=r,r=i;if(r===i)if(r=[],y.test(t.charAt(Y))?(n=t.charAt(Y),Y++):(n=i,0===Q&&oe(z)),n!==i)for(;n!==i;)r.push(n),y.test(t.charAt(Y))?(n=t.charAt(Y),Y++):(n=i,0===Q&&oe(z));else r=i;if(r!==i){if(n=Y,101===t.charCodeAt(Y)?(a="e",Y++):(a=i,0===Q&&oe(P)),a!==i){if(d.test(t.charAt(Y))?(o=t.charAt(Y),Y++):(o=i,0===Q&&oe(W)),o===i&&(o=null),s=[],y.test(t.charAt(Y))?(u=t.charAt(Y),Y++):(u=i,0===Q&&oe(z)),u!==i)for(;u!==i;)s.push(u),y.test(t.charAt(Y))?(u=t.charAt(Y),Y++):(u=i,0===Q&&oe(z));else s=i;s!==i?n=a=[a,o,s]:(Y=n,n=i)}else Y=n,n=i;n===i&&(n=null),X=e,e=parseFloat(ee())}else Y=e,e=i;return e}if((n=s())!==i&&Y===t.length)return n;throw n!==i&&Y<t.length&&oe({type:"end"}),function(t,r,n){return new e(e.buildMessage(t,r),t,r,n)}(K,U<t.length?t.charAt(U):null,U<t.length?ae(U,U+1):ae(U,U))}}},(b=S).exports&&(b.exports=x());const C={deg:1,grad:.9,rad:180/Math.PI,turn:360},j={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/72};function O(e){!function(e){if("quantity"!==e.type||null!==e.unit&&"%"!==e.unit)throw new n.Z("effect:type-error",`Expected <double> or <percentage>, Actual: ${M(e)}`,{term:e})}(e);const t=e.value;return _(t,e),"%"===e.unit?.01*t:t}function T(e){return function(e){if("quantity"!==e.type||!(0===e.value&&null===e.unit||e.unit&&null!=j[e.unit]))throw new n.Z("effect:type-error",`Expected <length>, Actual: ${M(e)}`,{term:e})}(e),e.value*j[e.unit]||0}function E(e){switch(e.colorType){case"hex":return(0,a.rW)(e.value);case"named":return G(e.value);case"function":return function(e){if(L(e.parameters,4),N.test(e.name))return[O(e.parameters[0]),O(e.parameters[1]),O(e.parameters[2]),e.parameters[3]?O(e.parameters[3]):1];if(R.test(e.name))return(0,a.B7)(function(e){return function(e){if("quantity"!==e.type||null!==e.unit)throw new n.Z("effect:type-error",`Expected <double>, Actual: ${M(e)}`,{term:e})}(e),_(e.value,e),e.value}(e.parameters[0]),O(e.parameters[1]),O(e.parameters[2]),e.parameters[3]?O(e.parameters[3]):1);throw new n.Z("effect:syntax-error",`Invalid color function '${e.name}'`,{colorFunction:e})}(e.value)}}function G(e){if(!(0,a.St)(e))throw new n.Z("effect:unknown-color",`color '${e}' isn't valid`,{namedColor:e});return(0,a.VL)(e)}const N=/^rgba?/i,R=/^hsla?/i;function $(e,t,r){try{return function(e){if(!e||0===e.length)return null;if(function(e){const t=e[0];return!!t&&"scale"in t}(e)){const t=[];for(const r of e)t.push({scale:r.scale,value:Z(r.value)});return t}return Z(e)}(e)}catch(e){var n;null==r||null==(n=r.messages)||n.push(e)}return null}function F(e,t,r,n){try{const n=function(e){const t=A(e);return t?function(e){const t=e[0];return!!t&&"type"in t}(t)?t.map((e=>e.toJSON())):t.map((({scale:e,effects:t})=>({scale:e,value:t.map((e=>e.toJSON()))}))):null}(e);(0,i.RB)(r,n,t)}catch(e){n.messages&&n.messages.push(e)}}function Z(e){if(!e||!e.length)return"";const t=[];for(const r of e){let e=[];switch(r.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":e=[k(r,"amount")];break;case"blur":e=[k(r,"radius","pt")];break;case"hue-rotate":e=[k(r,"angle","deg")];break;case"drop-shadow":e=[k(r,"xoffset","pt"),k(r,"yoffset","pt"),k(r,"blurRadius","pt"),B(r,"color")];break;case"bloom":e=[k(r,"strength"),k(r,"radius","pt"),k(r,"threshold")]}const n=`${r.type}(${e.filter(Boolean).join(" ")})`;A(n),t.push(n)}return t.join(" ")}function k(e,t,r){if(null==e[t])throw new n.Z("effect:missing-parameter",`Missing parameter '${t}' in ${e.type} effect`,{effect:e});return r?e[t]+r:""+e[t]}function B(e,t){if(null==e[t])throw new n.Z("effect:missing-parameter",`Missing parameter '${t}' in ${e.type} effect`,{effect:e});const r=e[t];return`rgba(${r[0]||0}, ${r[1]||0}, ${r[2]||0}, ${r[3]/255||0})`}},71612:(e,t,r)=>{r.d(t,{h:()=>s});var n=r(43697),i=r(5600),a=(r(67676),r(80442),r(75215),r(52011)),o=r(57520);const s=e=>{let t=class extends e{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return(0,n._)([(0,i.Cb)({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!0}}}})],t.prototype,"blendMode",void 0),(0,n._)([(0,i.Cb)({json:{read:!1,write:!1,origins:{"web-map":{read:{reader:o.ij},write:{allowNull:!0,writer:o.cW}}}}})],t.prototype,"effect",void 0),t=(0,n._)([(0,a.j)("esri.layers.mixins.BlendLayer")],t),t}},38009:(e,t,r)=>{r.d(t,{q:()=>h});var n=r(43697),i=r(20102),a=r(17452),o=r(5600),s=(r(67676),r(80442),r(75215),r(52011)),u=r(30556),l=r(50549),c=r(76169);const p={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,GeoJSON:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,KML:!0,RasterDataLayer:!0,Voxel:!1},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CSV:!0,GeoRSS:!0,GeoJSON:!0,GroupLayer:!0,KML:!0,OGCFeatureLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"web-map/tables":{ArcGISFeatureLayer:!0},"portal-item/operational-layers":{ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0}};var f=r(21506);const h=e=>{let t=class extends e{constructor(){super(...arguments),this.title=null}writeListMode(e,t,r,n){(n&&"ground"===n.layerContainerType||e&&(0,c.df)(this,r,{},n))&&(t[r]=e)}writeOperationalLayerType(e,t,r,n){!e||n&&"tables"===n.layerContainerType||(t.layerType=e)}writeTitle(e,t){t.title=e||"Layer"}read(e,t){t&&(t.layer=this),(0,l.$Z)(this,e,(t=>super.read(e,t)),t)}write(e,t){if(null!=t&&t.origin){const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`,n=p[e];let a=n&&n[this.operationalLayerType];var r;if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(a=!1),!a)return null==(r=t.messages)||r.push(new i.Z("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const n=super.write(e,{...t,layer:this}),o=!!t&&!!t.messages&&!!t.messages.filter((e=>e instanceof i.Z&&"web-document-write:property-required"===e.name)).length;var s;return(0,a.jc)(null==n?void 0:n.url)?(null==t||null==(s=t.messages)||s.push(new i.Z("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&o?null:n}beforeSave(){}};return(0,n._)([(0,o.Cb)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),(0,n._)([(0,o.Cb)({json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}})],t.prototype,"listMode",void 0),(0,n._)([(0,u.c)("listMode")],t.prototype,"writeListMode",null),(0,n._)([(0,o.Cb)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],t.prototype,"operationalLayerType",void 0),(0,n._)([(0,u.c)("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),(0,n._)([(0,o.Cb)(f.Oh)],t.prototype,"opacity",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],t.prototype,"title",void 0),(0,n._)([(0,u.c)("title")],t.prototype,"writeTitle",null),(0,n._)([(0,o.Cb)({type:Boolean,json:{name:"visibility",origins:{"web-document":{name:"visibility",default:!0},"portal-item":{name:"visibility",read:{source:["visible","visibility"]}}}}})],t.prototype,"visible",void 0),t=(0,n._)([(0,s.j)("esri.layers.mixins.OperationalLayer")],t),t}},72965:(e,t,r)=>{r.d(t,{M:()=>o});var n=r(43697),i=r(5600),a=(r(67676),r(80442),r(75215),r(52011));const o=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get scaleRangeId(){return`${this.minScale},${this.maxScale}`}};return(0,n._)([(0,i.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),(0,n._)([(0,i.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),(0,n._)([(0,i.Cb)({readOnly:!0})],t.prototype,"scaleRangeId",null),t=(0,n._)([(0,a.j)("esri.layers.mixins.ScaleRangeLayer")],t),t}},21506:(e,t,r)=>{r.d(t,{qG:()=>b,PV:()=>m,id:()=>S,iR:()=>h,rn:()=>y,u1:()=>I,rO:()=>A,Oh:()=>w,bT:()=>v,C_:()=>f,Lx:()=>g,vg:()=>x,YI:()=>p,HQ:()=>d});var n=r(92835),i=r(6570),a=r(82971),o=r(25929),s=r(70586),u=(r(95330),r(35463)),l=r(20682),c=r(65242);const p={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:!0}},f={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,r){t[r]=!e}}}},h={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},d={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:o.w}}},y={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},m={value:null,type:l.Z,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function g(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const w={type:Number,json:{origins:{"web-document":{write:!0,read:!0},"portal-item":{write:!0}}}},v={...w,json:{...w.json,origins:{"web-document":{...w.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,r)=>r&&"service"!==r.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?t.layerDefinition&&t.layerDefinition.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?(0,c.b)(t.layerDefinition.drawingInfo.transparency):void 0:(0,c.b)(t.drawingInfo.transparency)}}},b={type:n.Z,readOnly:!0,get(){var e,t;if(null==(e=this.layer)||!e.timeInfo)return null;const{datesInUnknownTimezone:r,timeOffset:i,useViewTime:a}=this.layer,o=null==(t=this.view)?void 0:t.timeExtent;let l=this.layer.timeExtent;r&&(l=function(e){if(!e)return e;const{start:t,end:r}=e;return new n.Z({start:(0,s.pC)(t)?(0,u.Nm)(t,t.getTimezoneOffset(),"minutes"):t,end:(0,s.pC)(r)?(0,u.Nm)(r,r.getTimezoneOffset(),"minutes"):r})}(l));let c=a?o&&l?o.intersection(l):o||l:l;if(!c||c.isEmpty||c.isAllTime)return c;i&&(c=c.offset(-i.value,i.unit)),r&&(c=function(e){if(!e)return e;const{start:t,end:r}=e;return new n.Z({start:(0,s.pC)(t)?(0,u.Nm)(t,-t.getTimezoneOffset(),"minutes"):t,end:(0,s.pC)(r)?(0,u.Nm)(r,-r.getTimezoneOffset(),"minutes"):r})}(c));const p=this._get("timeExtent");return c.equals(p)?p:c}},x={type:i.Z,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,t)=>{const r=i.Z.fromJSON(e);return null!=t.spatialReference&&"object"==typeof t.spatialReference&&(r.spatialReference=a.Z.fromJSON(t.spatialReference)),r}}}},read:!1}},S={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},A={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},I={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}}},20682:(e,t,r)=>{r.d(t,{Z:()=>x});var n,i=r(43697),a=r(35454),o=r(10736),s=r(70586),u=r(5600),l=(r(67676),r(80442),r(75215),r(71715)),c=r(52011),p=r(30556),f=r(35671);let h=n=class extends o.wq{async collectRequiredFields(e,t){return(0,f.io)(e,t,this.expression)}clone(){return new n({expression:this.expression,title:this.title})}};(0,i._)([(0,u.Cb)({type:String,json:{write:!0}})],h.prototype,"expression",void 0),(0,i._)([(0,u.Cb)({type:String,json:{write:!0}})],h.prototype,"title",void 0),h=n=(0,i._)([(0,c.j)("esri.layers.support.FeatureExpressionInfo")],h);const d=h;var y=r(99282);const m=function(){const e=Object.keys(y.a);return e.sort(),e}();var g;const w=(0,a.wY)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),v=new a.Xn({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let b=g=class extends o.wq{constructor(){super(...arguments),this.offset=null}readFeatureExpressionInfo(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,t,r,n){t[r]=e.write({},n),"0"===e.expression&&(t.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:t}=this;return this._isOverridden("mode")?this._get("mode"):(0,s.pC)(e)||t?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new g({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}};(0,i._)([(0,u.Cb)({type:d,json:{write:!0}})],b.prototype,"featureExpressionInfo",void 0),(0,i._)([(0,l.r)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],b.prototype,"readFeatureExpressionInfo",null),(0,i._)([(0,p.c)("featureExpressionInfo",{featureExpressionInfo:{type:d},"featureExpression.value":{type:[0]}})],b.prototype,"writeFeatureExpressionInfo",null),(0,i._)([(0,u.Cb)({type:w.apiValues,nonNullable:!0,json:{type:w.jsonValues,read:w.read,write:{writer:w.write,isRequired:!0}}})],b.prototype,"mode",null),(0,i._)([(0,u.Cb)({type:Number,json:{write:!0}})],b.prototype,"offset",void 0),(0,i._)([(0,u.Cb)({type:m,json:{type:String,read:v.read,write:v.write}})],b.prototype,"unit",null),b=g=(0,i._)([(0,c.j)("esri.layers.support.ElevationInfo")],b);const x=b}}]);