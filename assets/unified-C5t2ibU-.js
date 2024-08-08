import{b as P}from"./bail-FqpXQuLt.js";import{e as y}from"./extend-DWCt-uIN.js";import{i as z}from"./is-plain-obj-C1gvLhAf.js";import{t as C}from"./trough-B_b8ryxu.js";import{V as A}from"./vfile-D1_tGWGU.js";const S=function(s){const t=this.constructor.prototype,i=t[s],f=function(){return i.apply(f,arguments)};return Object.setPrototypeOf(f,t),f},F={}.hasOwnProperty;class x extends S{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=C()}copy(){const e=new x;let n=-1;for(;++n<this.attachers.length;){const t=this.attachers[n];e.use(...t)}return e.data(y(!0,{},this.namespace)),e}data(e,n){return typeof e=="string"?arguments.length===2?(b("data",this.frozen),this.namespace[e]=n,this):F.call(this.namespace,e)&&this.namespace[e]||void 0:e?(b("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...t]=this.attachers[this.freezeIndex];if(t[0]===!1)continue;t[0]===!0&&(t[0]=void 0);const i=n.call(e,...t);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const n=m(e),t=this.parser||this.Parser;return w("parse",t),t(String(n),n)}process(e,n){const t=this;return this.freeze(),w("process",this.parser||this.Parser),g("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(f,h){const p=m(e),l=t.parse(p);t.run(l,p,function(o,c,a){if(o||!c||!a)return r(o);const u=c,d=t.stringify(u,a);O(d)?a.value=d:a.result=d,r(o,a)});function r(o,c){o||!c?h(o):f?f(c):n(void 0,c)}}}processSync(e){let n=!1,t;return this.freeze(),w("processSync",this.parser||this.Parser),g("processSync",this.compiler||this.Compiler),this.process(e,i),T("processSync","process",n),t;function i(f,h){n=!0,P(f),t=h}}run(e,n,t){I(e),this.freeze();const i=this.transformers;return!t&&typeof n=="function"&&(t=n,n=void 0),t?f(void 0,t):new Promise(f);function f(h,p){const l=m(n);i.run(e,l,r);function r(o,c,a){const u=c||e;o?p(o):h?h(u):t(void 0,u,a)}}}runSync(e,n){let t=!1,i;return this.run(e,n,f),T("runSync","run",t),i;function f(h,p){P(h),i=p,t=!0}}stringify(e,n){this.freeze();const t=m(n),i=this.compiler||this.Compiler;return g("stringify",i),I(e),i(e,t)}use(e,...n){const t=this.attachers,i=this.namespace;if(b("use",this.frozen),e!=null)if(typeof e=="function")l(e,n);else if(typeof e=="object")Array.isArray(e)?p(e):h(e);else throw new TypeError("Expected usable value, not `"+e+"`");return this;function f(r){if(typeof r=="function")l(r,[]);else if(typeof r=="object")if(Array.isArray(r)){const[o,...c]=r;l(o,c)}else h(r);else throw new TypeError("Expected usable value, not `"+r+"`")}function h(r){if(!("plugins"in r)&&!("settings"in r))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");p(r.plugins),r.settings&&(i.settings=y(!0,i.settings,r.settings))}function p(r){let o=-1;if(r!=null)if(Array.isArray(r))for(;++o<r.length;){const c=r[o];f(c)}else throw new TypeError("Expected a list of plugins, not `"+r+"`")}function l(r,o){let c=-1,a=-1;for(;++c<t.length;)if(t[c][0]===r){a=c;break}if(a===-1)t.push([r,...o]);else if(o.length>0){let[u,...d]=o;const E=t[a][1];z(E)&&z(u)&&(u=y(!0,E,u)),t[a]=[r,u,...d]}}}}const k=new x().freeze();function w(s,e){if(typeof e!="function")throw new TypeError("Cannot `"+s+"` without `parser`")}function g(s,e){if(typeof e!="function")throw new TypeError("Cannot `"+s+"` without `compiler`")}function b(s,e){if(e)throw new Error("Cannot call `"+s+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function I(s){if(!z(s)||typeof s.type!="string")throw new TypeError("Expected node, got `"+s+"`")}function T(s,e,n){if(!n)throw new Error("`"+s+"` finished async. Use `"+e+"` instead")}function m(s){return j(s)?s:new A(s)}function j(s){return!!(s&&typeof s=="object"&&"message"in s&&"messages"in s)}function O(s){return typeof s=="string"||D(s)}function D(s){return!!(s&&typeof s=="object"&&"byteLength"in s&&"byteOffset"in s)}export{k as u};
