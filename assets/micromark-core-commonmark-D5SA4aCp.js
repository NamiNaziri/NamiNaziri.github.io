import{p as L,s as Z}from"./micromark-util-chunked-DrRIdSP-.js";import{c as d}from"./micromark-util-classify-character-72LGz2mN.js";import{r as en}from"./micromark-util-resolve-all-PQCKh0dx.js";import{b as P,c as F,d as mn,e as pn,f as c,m as S,g as hn,h as xn,i as Y,j as w}from"./micromark-util-character-Cn8n62xE.js";import{f as y}from"./micromark-factory-space-Bzki161k.js";import{d as kn}from"./decode-named-character-reference-C3-224fz.js";import{s as gn}from"./micromark-util-subtokenize-BcSgYDy4.js";import{f as un}from"./micromark-factory-destination-Dhx6mInV.js";import{f as an}from"./micromark-factory-label-Dm2aTycn.js";import{f as ln}from"./micromark-factory-title-B-Q3zsGF.js";import{f as G}from"./micromark-factory-whitespace-DxqLJ6OX.js";import{n as $}from"./micromark-util-normalize-identifier-C9ANKk3v.js";import{h as nn,a as bn}from"./micromark-util-html-tag-name-DbKNfynz.js";const Dt={name:"attention",tokenize:cn,resolveAll:Sn};function Sn(n,a){let r=-1,t,l,o,u,s,g,h,x;for(;++r<n.length;)if(n[r][0]==="enter"&&n[r][1].type==="attentionSequence"&&n[r][1]._close){for(t=r;t--;)if(n[t][0]==="exit"&&n[t][1].type==="attentionSequence"&&n[t][1]._open&&a.sliceSerialize(n[t][1]).charCodeAt(0)===a.sliceSerialize(n[r][1]).charCodeAt(0)){if((n[t][1]._close||n[r][1]._open)&&(n[r][1].end.offset-n[r][1].start.offset)%3&&!((n[t][1].end.offset-n[t][1].start.offset+n[r][1].end.offset-n[r][1].start.offset)%3))continue;g=n[t][1].end.offset-n[t][1].start.offset>1&&n[r][1].end.offset-n[r][1].start.offset>1?2:1;const p=Object.assign({},n[t][1].end),b=Object.assign({},n[r][1].start);tn(p,-g),tn(b,g),u={type:g>1?"strongSequence":"emphasisSequence",start:p,end:Object.assign({},n[t][1].end)},s={type:g>1?"strongSequence":"emphasisSequence",start:Object.assign({},n[r][1].start),end:b},o={type:g>1?"strongText":"emphasisText",start:Object.assign({},n[t][1].end),end:Object.assign({},n[r][1].start)},l={type:g>1?"strong":"emphasis",start:Object.assign({},u.start),end:Object.assign({},s.end)},n[t][1].end=Object.assign({},u.start),n[r][1].start=Object.assign({},s.end),h=[],n[t][1].end.offset-n[t][1].start.offset&&(h=L(h,[["enter",n[t][1],a],["exit",n[t][1],a]])),h=L(h,[["enter",l,a],["enter",u,a],["exit",u,a],["enter",o,a]]),h=L(h,en(a.parser.constructs.insideSpan.null,n.slice(t+1,r),a)),h=L(h,[["exit",o,a],["enter",s,a],["exit",s,a],["exit",l,a]]),n[r][1].end.offset-n[r][1].start.offset?(x=2,h=L(h,[["enter",n[r][1],a],["exit",n[r][1],a]])):x=0,Z(n,t-1,r-t+3,h),r=t+h.length-x-2;break}}for(r=-1;++r<n.length;)n[r][1].type==="attentionSequence"&&(n[r][1].type="data");return n}function cn(n,a){const r=this.parser.constructs.attentionMarkers.null,t=this.previous,l=d(t);let o;return u;function u(g){return o=g,n.enter("attentionSequence"),s(g)}function s(g){if(g===o)return n.consume(g),s;const h=n.exit("attentionSequence"),x=d(g),p=!x||x===2&&l||r.includes(g),b=!l||l===2&&x||r.includes(t);return h._open=!!(o===42?p:p&&(l||!b)),h._close=!!(o===42?b:b&&(x||!p)),a(g)}}function tn(n,a){n.column+=a,n.offset+=a,n._bufferIndex+=a}const Rt={name:"autolink",tokenize:zn};function zn(n,a,r){let t=0;return l;function l(m){return n.enter("autolink"),n.enter("autolinkMarker"),n.consume(m),n.exit("autolinkMarker"),n.enter("autolinkProtocol"),o}function o(m){return P(m)?(n.consume(m),u):m===64?r(m):h(m)}function u(m){return m===43||m===45||m===46||F(m)?(t=1,s(m)):h(m)}function s(m){return m===58?(n.consume(m),t=0,g):(m===43||m===45||m===46||F(m))&&t++<32?(n.consume(m),s):(t=0,h(m))}function g(m){return m===62?(n.exit("autolinkProtocol"),n.enter("autolinkMarker"),n.consume(m),n.exit("autolinkMarker"),n.exit("autolink"),a):m===null||m===32||m===60||mn(m)?r(m):(n.consume(m),g)}function h(m){return m===64?(n.consume(m),x):pn(m)?(n.consume(m),h):r(m)}function x(m){return F(m)?p(m):r(m)}function p(m){return m===46?(n.consume(m),t=0,x):m===62?(n.exit("autolinkProtocol").type="autolinkEmail",n.enter("autolinkMarker"),n.consume(m),n.exit("autolinkMarker"),n.exit("autolink"),a):b(m)}function b(m){if((m===45||F(m))&&t++<63){const C=m===45?b:p;return n.consume(m),C}return r(m)}}const v={tokenize:yn,partial:!0};function yn(n,a,r){return t;function t(o){return c(o)?y(n,l,"linePrefix")(o):l(o)}function l(o){return o===null||S(o)?a(o):r(o)}}const En={name:"blockQuote",tokenize:Cn,continuation:{tokenize:fn},exit:An};function Cn(n,a,r){const t=this;return l;function l(u){if(u===62){const s=t.containerState;return s.open||(n.enter("blockQuote",{_container:!0}),s.open=!0),n.enter("blockQuotePrefix"),n.enter("blockQuoteMarker"),n.consume(u),n.exit("blockQuoteMarker"),o}return r(u)}function o(u){return c(u)?(n.enter("blockQuotePrefixWhitespace"),n.consume(u),n.exit("blockQuotePrefixWhitespace"),n.exit("blockQuotePrefix"),a):(n.exit("blockQuotePrefix"),a(u))}}function fn(n,a,r){const t=this;return l;function l(u){return c(u)?y(n,o,"linePrefix",t.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(u):o(u)}function o(u){return n.attempt(En,a,r)(u)}}function An(n){n.exit("blockQuote")}const Ht={name:"characterEscape",tokenize:wn};function wn(n,a,r){return t;function t(o){return n.enter("characterEscape"),n.enter("escapeMarker"),n.consume(o),n.exit("escapeMarker"),l}function l(o){return hn(o)?(n.enter("characterEscapeValue"),n.consume(o),n.exit("characterEscapeValue"),n.exit("characterEscape"),a):r(o)}}const jt={name:"characterReference",tokenize:In};function In(n,a,r){const t=this;let l=0,o,u;return s;function s(p){return n.enter("characterReference"),n.enter("characterReferenceMarker"),n.consume(p),n.exit("characterReferenceMarker"),g}function g(p){return p===35?(n.enter("characterReferenceMarkerNumeric"),n.consume(p),n.exit("characterReferenceMarkerNumeric"),h):(n.enter("characterReferenceValue"),o=31,u=F,x(p))}function h(p){return p===88||p===120?(n.enter("characterReferenceMarkerHexadecimal"),n.consume(p),n.exit("characterReferenceMarkerHexadecimal"),n.enter("characterReferenceValue"),o=6,u=xn,x):(n.enter("characterReferenceValue"),o=7,u=Y,x(p))}function x(p){if(p===59&&l){const b=n.exit("characterReferenceValue");return u===F&&!kn(t.sliceSerialize(b))?r(p):(n.enter("characterReferenceMarker"),n.consume(p),n.exit("characterReferenceMarker"),n.exit("characterReference"),a)}return u(p)&&l++<o?(n.consume(p),x):r(p)}}const rn={tokenize:Ln,partial:!0},Vt={name:"codeFenced",tokenize:Tn,concrete:!0};function Tn(n,a,r){const t=this,l={tokenize:_,partial:!0};let o=0,u=0,s;return g;function g(k){return h(k)}function h(k){const f=t.events[t.events.length-1];return o=f&&f[1].type==="linePrefix"?f[2].sliceSerialize(f[1],!0).length:0,s=k,n.enter("codeFenced"),n.enter("codeFencedFence"),n.enter("codeFencedFenceSequence"),x(k)}function x(k){return k===s?(u++,n.consume(k),x):u<3?r(k):(n.exit("codeFencedFenceSequence"),c(k)?y(n,p,"whitespace")(k):p(k))}function p(k){return k===null||S(k)?(n.exit("codeFencedFence"),t.interrupt?a(k):n.check(rn,B,R)(k)):(n.enter("codeFencedFenceInfo"),n.enter("chunkString",{contentType:"string"}),b(k))}function b(k){return k===null||S(k)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),p(k)):c(k)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),y(n,m,"whitespace")(k)):k===96&&k===s?r(k):(n.consume(k),b)}function m(k){return k===null||S(k)?p(k):(n.enter("codeFencedFenceMeta"),n.enter("chunkString",{contentType:"string"}),C(k))}function C(k){return k===null||S(k)?(n.exit("chunkString"),n.exit("codeFencedFenceMeta"),p(k)):k===96&&k===s?r(k):(n.consume(k),C)}function B(k){return n.attempt(l,R,V)(k)}function V(k){return n.enter("lineEnding"),n.consume(k),n.exit("lineEnding"),U}function U(k){return o>0&&c(k)?y(n,M,"linePrefix",o+1)(k):M(k)}function M(k){return k===null||S(k)?n.check(rn,B,R)(k):(n.enter("codeFlowValue"),A(k))}function A(k){return k===null||S(k)?(n.exit("codeFlowValue"),M(k)):(n.consume(k),A)}function R(k){return n.exit("codeFenced"),a(k)}function _(k,f,q){let I=0;return H;function H(z){return k.enter("lineEnding"),k.consume(z),k.exit("lineEnding"),j}function j(z){return k.enter("codeFencedFence"),c(z)?y(k,E,"linePrefix",t.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(z):E(z)}function E(z){return z===s?(k.enter("codeFencedFenceSequence"),O(z)):q(z)}function O(z){return z===s?(I++,k.consume(z),O):I>=u?(k.exit("codeFencedFenceSequence"),c(z)?y(k,N,"whitespace")(z):N(z)):q(z)}function N(z){return z===null||S(z)?(k.exit("codeFencedFence"),f(z)):q(z)}}}function Ln(n,a,r){const t=this;return l;function l(u){return u===null?r(u):(n.enter("lineEnding"),n.consume(u),n.exit("lineEnding"),o)}function o(u){return t.parser.lazy[t.now().line]?r(u):a(u)}}const _t={name:"codeIndented",tokenize:Bn},Fn={tokenize:Mn,partial:!0};function Bn(n,a,r){const t=this;return l;function l(h){return n.enter("codeIndented"),y(n,o,"linePrefix",5)(h)}function o(h){const x=t.events[t.events.length-1];return x&&x[1].type==="linePrefix"&&x[2].sliceSerialize(x[1],!0).length>=4?u(h):r(h)}function u(h){return h===null?g(h):S(h)?n.attempt(Fn,u,g)(h):(n.enter("codeFlowValue"),s(h))}function s(h){return h===null||S(h)?(n.exit("codeFlowValue"),u(h)):(n.consume(h),s)}function g(h){return n.exit("codeIndented"),a(h)}}function Mn(n,a,r){const t=this;return l;function l(u){return t.parser.lazy[t.now().line]?r(u):S(u)?(n.enter("lineEnding"),n.consume(u),n.exit("lineEnding"),l):y(n,o,"linePrefix",5)(u)}function o(u){const s=t.events[t.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?a(u):S(u)?l(u):r(u)}}const Nt={name:"codeText",tokenize:qn,resolve:On,previous:Pn};function On(n){let a=n.length-4,r=3,t,l;if((n[r][1].type==="lineEnding"||n[r][1].type==="space")&&(n[a][1].type==="lineEnding"||n[a][1].type==="space")){for(t=r;++t<a;)if(n[t][1].type==="codeTextData"){n[r][1].type="codeTextPadding",n[a][1].type="codeTextPadding",r+=2,a-=2;break}}for(t=r-1,a++;++t<=a;)l===void 0?t!==a&&n[t][1].type!=="lineEnding"&&(l=t):(t===a||n[t][1].type==="lineEnding")&&(n[l][1].type="codeTextData",t!==l+2&&(n[l][1].end=n[t-1][1].end,n.splice(l+2,t-l-2),a-=t-l-2,t=l+2),l=void 0);return n}function Pn(n){return n!==96||this.events[this.events.length-1][1].type==="characterEscape"}function qn(n,a,r){let t=0,l,o;return u;function u(p){return n.enter("codeText"),n.enter("codeTextSequence"),s(p)}function s(p){return p===96?(n.consume(p),t++,s):(n.exit("codeTextSequence"),g(p))}function g(p){return p===null?r(p):p===32?(n.enter("space"),n.consume(p),n.exit("space"),g):p===96?(o=n.enter("codeTextSequence"),l=0,x(p)):S(p)?(n.enter("lineEnding"),n.consume(p),n.exit("lineEnding"),g):(n.enter("codeTextData"),h(p))}function h(p){return p===null||p===32||p===96||S(p)?(n.exit("codeTextData"),g(p)):(n.consume(p),h)}function x(p){return p===96?(n.consume(p),l++,x):l===t?(n.exit("codeTextSequence"),n.exit("codeText"),a(p)):(o.type="codeTextData",h(p))}}const Qt={tokenize:Hn,resolve:Rn},Dn={tokenize:jn,partial:!0};function Rn(n){return gn(n),n}function Hn(n,a){let r;return t;function t(s){return n.enter("content"),r=n.enter("chunkContent",{contentType:"content"}),l(s)}function l(s){return s===null?o(s):S(s)?n.check(Dn,u,o)(s):(n.consume(s),l)}function o(s){return n.exit("chunkContent"),n.exit("content"),a(s)}function u(s){return n.consume(s),n.exit("chunkContent"),r.next=n.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,l}}function jn(n,a,r){const t=this;return l;function l(u){return n.exit("chunkContent"),n.enter("lineEnding"),n.consume(u),n.exit("lineEnding"),y(n,o,"linePrefix")}function o(u){if(u===null||S(u))return r(u);const s=t.events[t.events.length-1];return!t.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?a(u):n.interrupt(t.parser.constructs.flow,r,a)(u)}}const Wt={name:"definition",tokenize:_n},Vn={tokenize:Nn,partial:!0};function _n(n,a,r){const t=this;let l;return o;function o(m){return n.enter("definition"),u(m)}function u(m){return an.call(t,n,s,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function s(m){return l=$(t.sliceSerialize(t.events[t.events.length-1][1]).slice(1,-1)),m===58?(n.enter("definitionMarker"),n.consume(m),n.exit("definitionMarker"),g):r(m)}function g(m){return w(m)?G(n,h)(m):h(m)}function h(m){return un(n,x,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function x(m){return n.attempt(Vn,p,p)(m)}function p(m){return c(m)?y(n,b,"whitespace")(m):b(m)}function b(m){return m===null||S(m)?(n.exit("definition"),t.parser.defined.push(l),a(m)):r(m)}}function Nn(n,a,r){return t;function t(s){return w(s)?G(n,l)(s):r(s)}function l(s){return ln(n,o,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(s)}function o(s){return c(s)?y(n,u,"whitespace")(s):u(s)}function u(s){return s===null||S(s)?a(s):r(s)}}const Ut={name:"hardBreakEscape",tokenize:Qn};function Qn(n,a,r){return t;function t(o){return n.enter("hardBreakEscape"),n.consume(o),l}function l(o){return S(o)?(n.exit("hardBreakEscape"),a(o)):r(o)}}const Gt={name:"headingAtx",tokenize:Un,resolve:Wn};function Wn(n,a){let r=n.length-2,t=3,l,o;return n[t][1].type==="whitespace"&&(t+=2),r-2>t&&n[r][1].type==="whitespace"&&(r-=2),n[r][1].type==="atxHeadingSequence"&&(t===r-1||r-4>t&&n[r-2][1].type==="whitespace")&&(r-=t+1===r?2:4),r>t&&(l={type:"atxHeadingText",start:n[t][1].start,end:n[r][1].end},o={type:"chunkText",start:n[t][1].start,end:n[r][1].end,contentType:"text"},Z(n,t,r-t+1,[["enter",l,a],["enter",o,a],["exit",o,a],["exit",l,a]])),n}function Un(n,a,r){let t=0;return l;function l(x){return n.enter("atxHeading"),o(x)}function o(x){return n.enter("atxHeadingSequence"),u(x)}function u(x){return x===35&&t++<6?(n.consume(x),u):x===null||w(x)?(n.exit("atxHeadingSequence"),s(x)):r(x)}function s(x){return x===35?(n.enter("atxHeadingSequence"),g(x)):x===null||S(x)?(n.exit("atxHeading"),a(x)):c(x)?y(n,s,"whitespace")(x):(n.enter("atxHeadingText"),h(x))}function g(x){return x===35?(n.consume(x),g):(n.exit("atxHeadingSequence"),s(x))}function h(x){return x===null||x===35||w(x)?(n.exit("atxHeadingText"),s(x)):(n.consume(x),h)}}const Jt={name:"htmlFlow",tokenize:Xn,resolveTo:Kn,concrete:!0},Gn={tokenize:Zn,partial:!0},Jn={tokenize:Yn,partial:!0};function Kn(n){let a=n.length;for(;a--&&!(n[a][0]==="enter"&&n[a][1].type==="htmlFlow"););return a>1&&n[a-2][1].type==="linePrefix"&&(n[a][1].start=n[a-2][1].start,n[a+1][1].start=n[a-2][1].start,n.splice(a-2,2)),n}function Xn(n,a,r){const t=this;let l,o,u,s,g;return h;function h(i){return x(i)}function x(i){return n.enter("htmlFlow"),n.enter("htmlFlowData"),n.consume(i),p}function p(i){return i===33?(n.consume(i),b):i===47?(n.consume(i),o=!0,B):i===63?(n.consume(i),l=3,t.interrupt?a:e):P(i)?(n.consume(i),u=String.fromCharCode(i),V):r(i)}function b(i){return i===45?(n.consume(i),l=2,m):i===91?(n.consume(i),l=5,s=0,C):P(i)?(n.consume(i),l=4,t.interrupt?a:e):r(i)}function m(i){return i===45?(n.consume(i),t.interrupt?a:e):r(i)}function C(i){const W="CDATA[";return i===W.charCodeAt(s++)?(n.consume(i),s===W.length?t.interrupt?a:E:C):r(i)}function B(i){return P(i)?(n.consume(i),u=String.fromCharCode(i),V):r(i)}function V(i){if(i===null||i===47||i===62||w(i)){const W=i===47,sn=u.toLowerCase();return!W&&!o&&nn.includes(sn)?(l=1,t.interrupt?a(i):E(i)):bn.includes(u.toLowerCase())?(l=6,W?(n.consume(i),U):t.interrupt?a(i):E(i)):(l=7,t.interrupt&&!t.parser.lazy[t.now().line]?r(i):o?M(i):A(i))}return i===45||F(i)?(n.consume(i),u+=String.fromCharCode(i),V):r(i)}function U(i){return i===62?(n.consume(i),t.interrupt?a:E):r(i)}function M(i){return c(i)?(n.consume(i),M):H(i)}function A(i){return i===47?(n.consume(i),H):i===58||i===95||P(i)?(n.consume(i),R):c(i)?(n.consume(i),A):H(i)}function R(i){return i===45||i===46||i===58||i===95||F(i)?(n.consume(i),R):_(i)}function _(i){return i===61?(n.consume(i),k):c(i)?(n.consume(i),_):A(i)}function k(i){return i===null||i===60||i===61||i===62||i===96?r(i):i===34||i===39?(n.consume(i),g=i,f):c(i)?(n.consume(i),k):q(i)}function f(i){return i===g?(n.consume(i),g=null,I):i===null||S(i)?r(i):(n.consume(i),f)}function q(i){return i===null||i===34||i===39||i===47||i===60||i===61||i===62||i===96||w(i)?_(i):(n.consume(i),q)}function I(i){return i===47||i===62||c(i)?A(i):r(i)}function H(i){return i===62?(n.consume(i),j):r(i)}function j(i){return i===null||S(i)?E(i):c(i)?(n.consume(i),j):r(i)}function E(i){return i===45&&l===2?(n.consume(i),D):i===60&&l===1?(n.consume(i),T):i===62&&l===4?(n.consume(i),Q):i===63&&l===3?(n.consume(i),e):i===93&&l===5?(n.consume(i),K):S(i)&&(l===6||l===7)?(n.exit("htmlFlowData"),n.check(Gn,X,O)(i)):i===null||S(i)?(n.exit("htmlFlowData"),O(i)):(n.consume(i),E)}function O(i){return n.check(Jn,N,X)(i)}function N(i){return n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),z}function z(i){return i===null||S(i)?O(i):(n.enter("htmlFlowData"),E(i))}function D(i){return i===45?(n.consume(i),e):E(i)}function T(i){return i===47?(n.consume(i),u="",J):E(i)}function J(i){if(i===62){const W=u.toLowerCase();return nn.includes(W)?(n.consume(i),Q):E(i)}return P(i)&&u.length<8?(n.consume(i),u+=String.fromCharCode(i),J):E(i)}function K(i){return i===93?(n.consume(i),e):E(i)}function e(i){return i===62?(n.consume(i),Q):i===45&&l===2?(n.consume(i),e):E(i)}function Q(i){return i===null||S(i)?(n.exit("htmlFlowData"),X(i)):(n.consume(i),Q)}function X(i){return n.exit("htmlFlow"),a(i)}}function Yn(n,a,r){const t=this;return l;function l(u){return S(u)?(n.enter("lineEnding"),n.consume(u),n.exit("lineEnding"),o):r(u)}function o(u){return t.parser.lazy[t.now().line]?r(u):a(u)}}function Zn(n,a,r){return t;function t(l){return n.enter("lineEnding"),n.consume(l),n.exit("lineEnding"),n.attempt(v,a,r)}}const Kt={name:"htmlText",tokenize:$n};function $n(n,a,r){const t=this;let l,o,u;return s;function s(e){return n.enter("htmlText"),n.enter("htmlTextData"),n.consume(e),g}function g(e){return e===33?(n.consume(e),h):e===47?(n.consume(e),_):e===63?(n.consume(e),A):P(e)?(n.consume(e),q):r(e)}function h(e){return e===45?(n.consume(e),x):e===91?(n.consume(e),o=0,C):P(e)?(n.consume(e),M):r(e)}function x(e){return e===45?(n.consume(e),m):r(e)}function p(e){return e===null?r(e):e===45?(n.consume(e),b):S(e)?(u=p,T(e)):(n.consume(e),p)}function b(e){return e===45?(n.consume(e),m):p(e)}function m(e){return e===62?D(e):e===45?b(e):p(e)}function C(e){const Q="CDATA[";return e===Q.charCodeAt(o++)?(n.consume(e),o===Q.length?B:C):r(e)}function B(e){return e===null?r(e):e===93?(n.consume(e),V):S(e)?(u=B,T(e)):(n.consume(e),B)}function V(e){return e===93?(n.consume(e),U):B(e)}function U(e){return e===62?D(e):e===93?(n.consume(e),U):B(e)}function M(e){return e===null||e===62?D(e):S(e)?(u=M,T(e)):(n.consume(e),M)}function A(e){return e===null?r(e):e===63?(n.consume(e),R):S(e)?(u=A,T(e)):(n.consume(e),A)}function R(e){return e===62?D(e):A(e)}function _(e){return P(e)?(n.consume(e),k):r(e)}function k(e){return e===45||F(e)?(n.consume(e),k):f(e)}function f(e){return S(e)?(u=f,T(e)):c(e)?(n.consume(e),f):D(e)}function q(e){return e===45||F(e)?(n.consume(e),q):e===47||e===62||w(e)?I(e):r(e)}function I(e){return e===47?(n.consume(e),D):e===58||e===95||P(e)?(n.consume(e),H):S(e)?(u=I,T(e)):c(e)?(n.consume(e),I):D(e)}function H(e){return e===45||e===46||e===58||e===95||F(e)?(n.consume(e),H):j(e)}function j(e){return e===61?(n.consume(e),E):S(e)?(u=j,T(e)):c(e)?(n.consume(e),j):I(e)}function E(e){return e===null||e===60||e===61||e===62||e===96?r(e):e===34||e===39?(n.consume(e),l=e,O):S(e)?(u=E,T(e)):c(e)?(n.consume(e),E):(n.consume(e),N)}function O(e){return e===l?(n.consume(e),l=void 0,z):e===null?r(e):S(e)?(u=O,T(e)):(n.consume(e),O)}function N(e){return e===null||e===34||e===39||e===60||e===61||e===96?r(e):e===47||e===62||w(e)?I(e):(n.consume(e),N)}function z(e){return e===47||e===62||w(e)?I(e):r(e)}function D(e){return e===62?(n.consume(e),n.exit("htmlTextData"),n.exit("htmlText"),a):r(e)}function T(e){return n.exit("htmlTextData"),n.enter("lineEnding"),n.consume(e),n.exit("lineEnding"),J}function J(e){return c(e)?y(n,K,"linePrefix",t.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(e):K(e)}function K(e){return n.enter("htmlTextData"),u(e)}}const on={name:"labelEnd",tokenize:et,resolveTo:rt,resolveAll:tt},vn={tokenize:it},dn={tokenize:ut},nt={tokenize:at};function tt(n){let a=-1;for(;++a<n.length;){const r=n[a][1];(r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd")&&(n.splice(a+1,r.type==="labelImage"?4:2),r.type="data",a++)}return n}function rt(n,a){let r=n.length,t=0,l,o,u,s;for(;r--;)if(l=n[r][1],o){if(l.type==="link"||l.type==="labelLink"&&l._inactive)break;n[r][0]==="enter"&&l.type==="labelLink"&&(l._inactive=!0)}else if(u){if(n[r][0]==="enter"&&(l.type==="labelImage"||l.type==="labelLink")&&!l._balanced&&(o=r,l.type!=="labelLink")){t=2;break}}else l.type==="labelEnd"&&(u=r);const g={type:n[o][1].type==="labelLink"?"link":"image",start:Object.assign({},n[o][1].start),end:Object.assign({},n[n.length-1][1].end)},h={type:"label",start:Object.assign({},n[o][1].start),end:Object.assign({},n[u][1].end)},x={type:"labelText",start:Object.assign({},n[o+t+2][1].end),end:Object.assign({},n[u-2][1].start)};return s=[["enter",g,a],["enter",h,a]],s=L(s,n.slice(o+1,o+t+3)),s=L(s,[["enter",x,a]]),s=L(s,en(a.parser.constructs.insideSpan.null,n.slice(o+t+4,u-3),a)),s=L(s,[["exit",x,a],n[u-2],n[u-1],["exit",h,a]]),s=L(s,n.slice(u+1)),s=L(s,[["exit",g,a]]),Z(n,o,n.length,s),n}function et(n,a,r){const t=this;let l=t.events.length,o,u;for(;l--;)if((t.events[l][1].type==="labelImage"||t.events[l][1].type==="labelLink")&&!t.events[l][1]._balanced){o=t.events[l][1];break}return s;function s(b){return o?o._inactive?p(b):(u=t.parser.defined.includes($(t.sliceSerialize({start:o.end,end:t.now()}))),n.enter("labelEnd"),n.enter("labelMarker"),n.consume(b),n.exit("labelMarker"),n.exit("labelEnd"),g):r(b)}function g(b){return b===40?n.attempt(vn,x,u?x:p)(b):b===91?n.attempt(dn,x,u?h:p)(b):u?x(b):p(b)}function h(b){return n.attempt(nt,x,p)(b)}function x(b){return a(b)}function p(b){return o._balanced=!0,r(b)}}function it(n,a,r){return t;function t(p){return n.enter("resource"),n.enter("resourceMarker"),n.consume(p),n.exit("resourceMarker"),l}function l(p){return w(p)?G(n,o)(p):o(p)}function o(p){return p===41?x(p):un(n,u,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function u(p){return w(p)?G(n,g)(p):x(p)}function s(p){return r(p)}function g(p){return p===34||p===39||p===40?ln(n,h,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):x(p)}function h(p){return w(p)?G(n,x)(p):x(p)}function x(p){return p===41?(n.enter("resourceMarker"),n.consume(p),n.exit("resourceMarker"),n.exit("resource"),a):r(p)}}function ut(n,a,r){const t=this;return l;function l(s){return an.call(t,n,o,u,"reference","referenceMarker","referenceString")(s)}function o(s){return t.parser.defined.includes($(t.sliceSerialize(t.events[t.events.length-1][1]).slice(1,-1)))?a(s):r(s)}function u(s){return r(s)}}function at(n,a,r){return t;function t(o){return n.enter("reference"),n.enter("referenceMarker"),n.consume(o),n.exit("referenceMarker"),l}function l(o){return o===93?(n.enter("referenceMarker"),n.consume(o),n.exit("referenceMarker"),n.exit("reference"),a):r(o)}}const Xt={name:"labelStartImage",tokenize:lt,resolveAll:on.resolveAll};function lt(n,a,r){const t=this;return l;function l(s){return n.enter("labelImage"),n.enter("labelImageMarker"),n.consume(s),n.exit("labelImageMarker"),o}function o(s){return s===91?(n.enter("labelMarker"),n.consume(s),n.exit("labelMarker"),n.exit("labelImage"),u):r(s)}function u(s){return s===94&&"_hiddenFootnoteSupport"in t.parser.constructs?r(s):a(s)}}const Yt={name:"labelStartLink",tokenize:ot,resolveAll:on.resolveAll};function ot(n,a,r){const t=this;return l;function l(u){return n.enter("labelLink"),n.enter("labelMarker"),n.consume(u),n.exit("labelMarker"),n.exit("labelLink"),o}function o(u){return u===94&&"_hiddenFootnoteSupport"in t.parser.constructs?r(u):a(u)}}const Zt={name:"lineEnding",tokenize:st};function st(n,a){return r;function r(t){return n.enter("lineEnding"),n.consume(t),n.exit("lineEnding"),y(n,a,"linePrefix")}}const mt={name:"thematicBreak",tokenize:pt};function pt(n,a,r){let t=0,l;return o;function o(h){return n.enter("thematicBreak"),u(h)}function u(h){return l=h,s(h)}function s(h){return h===l?(n.enter("thematicBreakSequence"),g(h)):t>=3&&(h===null||S(h))?(n.exit("thematicBreak"),a(h)):r(h)}function g(h){return h===l?(n.consume(h),t++,g):(n.exit("thematicBreakSequence"),c(h)?y(n,s,"whitespace")(h):s(h))}}const ht={name:"list",tokenize:gt,continuation:{tokenize:bt},exit:ct},xt={tokenize:zt,partial:!0},kt={tokenize:St,partial:!0};function gt(n,a,r){const t=this,l=t.events[t.events.length-1];let o=l&&l[1].type==="linePrefix"?l[2].sliceSerialize(l[1],!0).length:0,u=0;return s;function s(m){const C=t.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(C==="listUnordered"?!t.containerState.marker||m===t.containerState.marker:Y(m)){if(t.containerState.type||(t.containerState.type=C,n.enter(C,{_container:!0})),C==="listUnordered")return n.enter("listItemPrefix"),m===42||m===45?n.check(mt,r,h)(m):h(m);if(!t.interrupt||m===49)return n.enter("listItemPrefix"),n.enter("listItemValue"),g(m)}return r(m)}function g(m){return Y(m)&&++u<10?(n.consume(m),g):(!t.interrupt||u<2)&&(t.containerState.marker?m===t.containerState.marker:m===41||m===46)?(n.exit("listItemValue"),h(m)):r(m)}function h(m){return n.enter("listItemMarker"),n.consume(m),n.exit("listItemMarker"),t.containerState.marker=t.containerState.marker||m,n.check(v,t.interrupt?r:x,n.attempt(xt,b,p))}function x(m){return t.containerState.initialBlankLine=!0,o++,b(m)}function p(m){return c(m)?(n.enter("listItemPrefixWhitespace"),n.consume(m),n.exit("listItemPrefixWhitespace"),b):r(m)}function b(m){return t.containerState.size=o+t.sliceSerialize(n.exit("listItemPrefix"),!0).length,a(m)}}function bt(n,a,r){const t=this;return t.containerState._closeFlow=void 0,n.check(v,l,o);function l(s){return t.containerState.furtherBlankLines=t.containerState.furtherBlankLines||t.containerState.initialBlankLine,y(n,a,"listItemIndent",t.containerState.size+1)(s)}function o(s){return t.containerState.furtherBlankLines||!c(s)?(t.containerState.furtherBlankLines=void 0,t.containerState.initialBlankLine=void 0,u(s)):(t.containerState.furtherBlankLines=void 0,t.containerState.initialBlankLine=void 0,n.attempt(kt,a,u)(s))}function u(s){return t.containerState._closeFlow=!0,t.interrupt=void 0,y(n,n.attempt(ht,a,r),"linePrefix",t.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function St(n,a,r){const t=this;return y(n,l,"listItemIndent",t.containerState.size+1);function l(o){const u=t.events[t.events.length-1];return u&&u[1].type==="listItemIndent"&&u[2].sliceSerialize(u[1],!0).length===t.containerState.size?a(o):r(o)}}function ct(n){n.exit(this.containerState.type)}function zt(n,a,r){const t=this;return y(n,l,"listItemPrefixWhitespace",t.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function l(o){const u=t.events[t.events.length-1];return!c(o)&&u&&u[1].type==="listItemPrefixWhitespace"?a(o):r(o)}}const $t={name:"setextUnderline",tokenize:Et,resolveTo:yt};function yt(n,a){let r=n.length,t,l,o;for(;r--;)if(n[r][0]==="enter"){if(n[r][1].type==="content"){t=r;break}n[r][1].type==="paragraph"&&(l=r)}else n[r][1].type==="content"&&n.splice(r,1),!o&&n[r][1].type==="definition"&&(o=r);const u={type:"setextHeading",start:Object.assign({},n[l][1].start),end:Object.assign({},n[n.length-1][1].end)};return n[l][1].type="setextHeadingText",o?(n.splice(l,0,["enter",u,a]),n.splice(o+1,0,["exit",n[t][1],a]),n[t][1].end=Object.assign({},n[o][1].end)):n[t][1]=u,n.push(["exit",u,a]),n}function Et(n,a,r){const t=this;let l;return o;function o(h){let x=t.events.length,p;for(;x--;)if(t.events[x][1].type!=="lineEnding"&&t.events[x][1].type!=="linePrefix"&&t.events[x][1].type!=="content"){p=t.events[x][1].type==="paragraph";break}return!t.parser.lazy[t.now().line]&&(t.interrupt||p)?(n.enter("setextHeadingLine"),l=h,u(h)):r(h)}function u(h){return n.enter("setextHeadingLineSequence"),s(h)}function s(h){return h===l?(n.consume(h),s):(n.exit("setextHeadingLineSequence"),c(h)?y(n,g,"lineSuffix")(h):g(h))}function g(h){return h===null||S(h)?(n.exit("setextHeadingLine"),a(h)):r(h)}}export{En as a,v as b,Qt as c,Wt as d,_t as e,Jt as f,Vt as g,Gt as h,jt as i,Ht as j,Zt as k,ht as l,Xt as m,Dt as n,Rt as o,Kt as p,Yt as q,Ut as r,$t as s,mt as t,on as u,Nt as v};
