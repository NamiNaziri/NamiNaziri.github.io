var V=Object.defineProperty;var W=(s,i,t)=>i in s?V(s,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[i]=t;var m=(s,i,t)=>(W(s,typeof i!="symbol"?i+"":i,t),t);import{j as e,a as g,r as u}from"./react-7luxY-ph.js";import{c as Q}from"./react-dom-CT1HZngQ.js";import{R as X}from"./react-image-gallery-Ll0mghTr.js";import{p as L,P as o}from"./prop-types-Nl1eov_5.js";/* empty css                  */import{c as z,b as S,n as Z,a as ee,d as te,l as ie,e as O,f as C,g as y,h as se,N as ne}from"./@nextui-org-B4Kg5ey-.js";import{u as v}from"./react-responsive-_BgkYocO.js";import{G as d}from"./@mui-pGJix_pZ.js";import{F as U,a as B,I as G,b as re,c as oe,d as ae,e as le}from"./react-icons-DYSZe8HC.js";import{M as ce}from"./react-markdown-C4AhfTKS.js";import{r as me}from"./remark-gfm-XnfW2BMk.js";import{r as de}from"./rehype-raw--fqtwM4z.js";import{h as he,d as pe}from"./react-syntax-highlighter-amppM6z-.js";import{u as ue,a as ge,b as xe,c as w}from"./react-router-Dch1GYI7.js";import{H as fe}from"./react-router-dom-mwLKz3Rm.js";import"./@babel-BG7E9IUl.js";import"./scheduler-CzFDRTuY.js";import"./@react-aria-B-TZIz0r.js";import"./@swc-h1AXYk7E.js";import"./@internationalized-Cg7NuFGP.js";import"./framer-motion-D_Pztj92.js";import"./react-remove-scroll-DwofSBos.js";import"./tslib-CDuPK5Eb.js";import"./react-remove-scroll-bar-DdwOUtNU.js";import"./react-style-singleton-BoEcxELk.js";import"./get-nonce-C-Z93AgS.js";import"./use-sidecar-Crw6PKh6.js";import"./use-callback-ref-5y4H_GnU.js";import"./tailwind-variants-ayMnMv5e.js";import"./tailwind-merge-Dc5vmgZ1.js";import"./@react-stately-Bo5eP4_W.js";import"./matchmediaquery-Bo10qaqu.js";import"./css-mediaquery-DcYbJrVh.js";import"./hyphenate-style-name-HOLnhz8K.js";import"./shallow-equal-BQUY1Bas.js";import"./@emotion-Bj7usDE2.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-FDnFs_-n.js";import"./devlop-Cl3hj7Sz.js";import"./unified-C5t2ibU-.js";import"./bail-FqpXQuLt.js";import"./extend-DWCt-uIN.js";import"./is-plain-obj-C1gvLhAf.js";import"./trough-B_b8ryxu.js";import"./vfile-D1_tGWGU.js";import"./vfile-message-Bq256rVA.js";import"./unist-util-stringify-position-Ch_qCilz.js";import"./remark-parse-PFb__MD6.js";import"./mdast-util-from-markdown-BvD3T9Wt.js";import"./micromark-util-decode-numeric-character-reference-CNs1qBpV.js";import"./micromark-util-decode-string-strjl-tx.js";import"./decode-named-character-reference-C3-224fz.js";import"./micromark-util-normalize-identifier-C9ANKk3v.js";import"./micromark-Cp9IgYwT.js";import"./micromark-util-combine-extensions-Bka6Sc1c.js";import"./micromark-util-chunked-DrRIdSP-.js";import"./micromark-factory-space-Bzki161k.js";import"./micromark-util-character-Cn8n62xE.js";import"./micromark-core-commonmark-D5SA4aCp.js";import"./micromark-util-classify-character-72LGz2mN.js";import"./micromark-util-resolve-all-PQCKh0dx.js";import"./micromark-util-subtokenize-BcSgYDy4.js";import"./micromark-factory-destination-Dhx6mInV.js";import"./micromark-factory-label-Dm2aTycn.js";import"./micromark-factory-title-B-Q3zsGF.js";import"./micromark-factory-whitespace-DxqLJ6OX.js";import"./micromark-util-html-tag-name-DbKNfynz.js";import"./mdast-util-to-string-C_aolqmU.js";import"./remark-rehype-DNC-thMq.js";import"./mdast-util-to-hast-DWFPJkWc.js";import"./@ungap-DDJC10qW.js";import"./micromark-util-sanitize-uri-B1mpwOqX.js";import"./unist-util-position-60F3QETU.js";import"./trim-lines-D8znQY54.js";import"./unist-util-visit-BEqpjG-T.js";import"./unist-util-visit-parents-BzuIhZFT.js";import"./unist-util-is-D9KQvrmg.js";import"./hast-util-to-jsx-runtime-YXVPut2A.js";import"./comma-separated-tokens-Dw-VBL9A.js";import"./property-information-DdDptki-.js";import"./space-separated-tokens-D7QSIrTI.js";import"./style-to-object-CVLTvUOF.js";import"./inline-style-parser-D--Rb2MU.js";import"./hast-util-whitespace-D4Wp6AEg.js";import"./estree-util-is-identifier-name-BgBfM8ME.js";import"./html-url-attributes-D46m5wfe.js";import"./micromark-extension-gfm-DKDoHsnq.js";import"./micromark-extension-gfm-autolink-literal-DLPcB62U.js";import"./micromark-extension-gfm-footnote-CfuxHbgG.js";import"./micromark-extension-gfm-strikethrough-DRvqaQ9w.js";import"./micromark-extension-gfm-table-DL38QGqH.js";import"./micromark-extension-gfm-task-list-item-CQ-9H0He.js";import"./mdast-util-gfm-Bl-XQC5F.js";import"./mdast-util-gfm-autolink-literal-CvbBA4TR.js";import"./ccount-c2V3InAJ.js";import"./mdast-util-find-and-replace-FYaswp1Z.js";import"./mdast-util-gfm-footnote-DDcgsGKB.js";import"./mdast-util-gfm-strikethrough-Cj9qKt6Q.js";import"./mdast-util-gfm-table-D2quw1JG.js";import"./markdown-table-De3aUdCo.js";import"./mdast-util-to-markdown-axH5eqwW.js";import"./longest-streak-CtXnX3Xp.js";import"./mdast-util-phrasing-C4Vf_nAi.js";import"./mdast-util-gfm-task-list-item-CbpHDP9z.js";import"./hast-util-raw-0ilyNlsR.js";import"./html-void-elements-CkdplsNl.js";import"./parse5-Bfc7-xf9.js";import"./entities-CCBHeVIA.js";import"./web-namespaces-bsVAaBS1.js";import"./zwitch-C2o2j-tx.js";import"./hast-util-from-parse5-C-SASldK.js";import"./vfile-location-DSsxp4eW.js";import"./hastscript-D9_WlGpv.js";import"./hast-util-parse-selector-TXfch5wI.js";import"./hast-util-to-parse5-Um_HjfjX.js";import"./refractor-lt0Mb1Xq.js";import"./xtend-CeaPpq3n.js";import"./@remix-run-CTXLpv9W.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();const je=e.jsx("polyline",{points:"15 18 9 12 15 6"}),be=e.jsx("polyline",{points:"9 18 15 12 9 6"}),ye=e.jsx("polyline",{points:"6 15 12 9 18 15"}),ve=e.jsx("polyline",{points:"6 9 12 15 18 9"}),we=e.jsx("path",{d:"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"}),ke=e.jsx("path",{d:"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"}),Se=e.jsx("polygon",{points:"5 3 19 12 5 21 5 3"}),Ne=e.jsxs(g.Fragment,{children:[e.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),e.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}),Ie={left:je,right:be,top:ye,bottom:ve,maximize:we,minimize:ke,play:Se,pause:Ne},Te={strokeWidth:1,viewBox:"0 0 24 24"},M=s=>{const{strokeWidth:i,viewBox:t,icon:r}={...Te,...s};return e.jsx("svg",{className:"image-gallery-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:t,fill:"none",stroke:"currentColor",strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",children:Ie[r]})};M.propTypes={strokeWidth:L.number,viewBox:L.string,icon:L.oneOf(["left","right","top","bottom","maximize","minimize","play","pause"]).isRequired};const Ce=g.memo(({disabled:s,onClick:i})=>e.jsx("button",{type:"button",className:"image-gallery-icon image-gallery-left-nav",disabled:s,onClick:i,"aria-label":"Previous Slide",children:e.jsx(M,{icon:"left",className:"scaled-svg"})})),Pe=g.memo(({disabled:s,onClick:i})=>e.jsx("button",{type:"button",className:"image-gallery-icon image-gallery-right-nav",disabled:s,onClick:i,"aria-label":"Next Slide",children:e.jsx(M,{icon:"right",className:"scaled-svg"})})),Re=({items:s})=>{const i=s.map(l=>{const c={...l};return/\.(png|jpg|jfif|gif)$/i.test(c.original)?c.renderItem=r:c.renderItem=n,c});function t(l){return e.jsx("img",{src:l.thumbnail,alt:""})}function r(l){return e.jsx("div",{className:"image-gallery-image",children:e.jsx("img",{src:l.original,className:"custom-image",alt:""})})}function n(l){return e.jsx("div",{className:"image-gallery-image",children:e.jsx("iframe",{className:"iframe-video",src:l.embedUrl,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}const a={items:i,showPlayButton:!1,showBullets:!0,thumbnailPosition:"bottom",renderThumbInner:t,renderLeftNav:(l,c)=>e.jsx(Ce,{onClick:l,disabled:c}),renderRightNav:(l,c)=>e.jsx(Pe,{onClick:l,disabled:c})};return e.jsx(X,{...a})},Le=({project:s})=>{const i=v({query:"(max-width: 575px)"}),t=a=>{window.open(a,"_blank")},n={position:"absolute",width:"100%",height:"100vh",backgroundImage:`url(${s.backgroundImage}), linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",filter:"blur(10px)",marginTop:"1vh",zIndex:-2};return e.jsxs("div",{children:[e.jsx("div",{style:n}),e.jsx(d,{className:"rowStyle",columnSpacing:{xs:2,md:5},paddingTop:{xs:"5vh"},marginTop:{xs:"1.8vh"},rowSpacing:{xs:0},container:!0,display:"flex",height:"100vh",marginBottom:0,justifyContent:"center",alignItems:"center",children:e.jsxs(d,{container:!0,xs:10,sm:10,md:10,lg:10,xl:10,children:[e.jsx(d,{className:" justify-center text-center w-full md:w-1/2 max-w-xl",justifyContent:"center",alignItems:"top",children:e.jsx(Re,{items:s.galeryItems})}),e.jsxs(d,{container:!0,className:"text-justify  w-full md:w-1/2 text-sm xl:text-base",children:[e.jsx(d,{xs:12,children:!i&&e.jsx("h1",{children:s.title})}),e.jsx(d,{xs:12,children:e.jsx(d,{className:i?"flex justify-center flex gap-2":"flex gap-2",marginTop:1,children:s.tags.map((a,l)=>e.jsx(z,{color:"default",children:a},l))})}),e.jsx(d,{xs:12,marginTop:2,marginBottom:i?0:2,children:e.jsx("p",{children:s.description})}),e.jsx(d,{xs:12,children:e.jsxs("div",{className:"flex gap-2",children:[Object.prototype.hasOwnProperty.call(s,"itch")&&e.jsx(S,{color:"danger",variant:"bordered",startContent:e.jsx(U,{}),onPress:()=>{t(s.itch)},children:"itch.io"}),Object.prototype.hasOwnProperty.call(s,"github")&&e.jsx(S,{color:"white",variant:"bordered",startContent:e.jsx(B,{}),onPress:()=>{t(s.github)},children:"github"}),Object.prototype.hasOwnProperty.call(s,"more")&&e.jsx(S,{color:"warning",variant:"bordered",startContent:e.jsx(G,{}),onPress:()=>{t(s.more)},children:"more"})]})})]})]})})]})},Ee=[{name:"Home",path:"/"},{name:"CV",path:"cv"}];function _e({primary:s=0}){return e.jsx(Z,{isBordered:!0,children:e.jsx(ee,{children:Ee.map((i,t)=>{const r=s===t?"primary":"foreground";return e.jsx(te,{className:"items-center mt-3",children:e.jsx(ie,{color:r,href:i.path,children:i.name})},t)})})})}function H({element:s}){const i=v({query:"(max-width: 575px)"});return e.jsxs(O,{children:[e.jsxs(C,{className:"grid grid-cols-3 md:grid-cols-4",children:[e.jsx("div",{className:"image-container ",children:e.jsx("img",{radius:"sm",src:s.image})}),e.jsxs("div",{className:"flex flex-col col-span-2 md:col-span-3 ml-2    items-start",children:[e.jsx("div",{className:"text-sm md:text-large font-bold mt-2  m-0",children:s.title1}),e.jsx("div",{className:"text-xs md:text-base font-semibold text-foreground/90  m-0",children:s.title2}),e.jsx("p",{className:"text-xs text-foreground/80  m-0",children:s.date}),e.jsx("p",{className:"text-xs text-foreground/80 m-0 ",children:s.location}),!i&&e.jsx(y,{}),!i&&e.jsxs("div",{className:"text-justify",children:[" ",s.description]})]})]}),i&&e.jsx(C,{className:"grid grid-cols-1 md:grid-cols-2 gap-0",children:e.jsxs("div",{className:"text-justify",children:[s.description,"  "]})})]})}const ze=[{description:"I designed and implemented NPC behaviors utilizing behavior trees, enabling dynamic interactions such as mantling using Nav Link Proxies and NPC following of the player or predefined paths. I developed a crowd system using the MassEntity framework, enhancing it by integrating an accessory and animation system for crowd agents. I utilized smart objects to enhance crowd interactions, allowing crowds to identify, claim, and use objects such as benches. Additionally, I analyzed and addressed performance bottlenecks within the crowd systems, resulting in significant optimization and improved frame rates.",image:"img/RR.jfif",title1:"Game AI Programmer",title2:"RichardRendering · Freelance",date:"Apr 2023 - Present",location:"Remote"},{description:"I conduct research in machine learning, specializing in deep reinforcement learning (RL) and deep learning for character animation. My work involves both physics-based and kinematic characters. I develop solutions to avoid full-body collisions in environments with multiple characters, utilizing Isaac Gym as the physical simulation and reinforcement learning tool.",image:"img/aalto.png",title1:"Graduate Research Assistant",title2:"Aalto University Department of Computer Science · Full-time",date:"Apr 2024 - Jun 2024",location:"On-site"}];function Me(){return e.jsxs(d,{className:"object-contain  flex flex-col  items-center space-x-2 md:space-x-5 space-y-1",children:[e.jsx(d,{className:"object-contain justify-center text-center w-full h-full",children:e.jsx("h1",{children:"Experience"})}),ze.map((s,i)=>e.jsx(d,{className:"object-contain justify-center   w-full h-full",children:e.jsx(H,{element:s})},i))]})}const Ae=[{description:"Master Thesis: Multi-character collision avoidance",image:"img/aalto.png",title1:"Aalto University",title2:"Master's degree, Computer Science",date:"Aug 2022 - Present",location:"Espoo, Finland"},{description:"Thesis. Analysis of the animation graph in Unreal Engine and implementation of an animation system using OpenGL",image:"img/iut.jfif",title1:"Isfahan University of Technology",title2:"Bachelor of Science, Computer Engineering",date:"2018 - 2022",location:"GPA: 18.13/20"}];function Oe(){return e.jsxs(d,{className:"object-contain  flex flex-col  items-center space-x-2 md:space-x-5 space-y-1",children:[e.jsx(d,{className:"object-contain justify-center text-center w-full h-full",children:e.jsx("h1",{children:"Education"})}),Ae.map((s,i)=>e.jsx(d,{className:"object-contain justify-center   w-full h-full",children:e.jsx(H,{element:s})},i))]})}function Ue({SummaryText:s}){return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Summary"}),e.jsx("p",{children:s})]})}function Be({AwardsText:s}){return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Awards"}),e.jsx("ul",{className:"m-0 pl-1",children:s.map((i,t)=>e.jsxs("li",{children:[e.jsxs("div",{className:"flex items-start  ",children:[e.jsx("div",{className:"mt-1 mr-2",children:e.jsx(re,{})}),e.jsx("div",{className:"text-sm md:text-large font-bold",children:i.title})]}),e.jsx("div",{children:e.jsx("div",{className:"text-xs md:text-base font-semibold text-foreground/90 ml-8 mb-3",children:i.text()})})]},t))})]})}function Ge({mediaList:s}){const i=t=>{window.open(t,"_blank")};return e.jsx("div",{className:"flex gap-2 justify-center",children:s.map((t,r)=>e.jsx("button",{style:{fontSize:"20px"},onClick:()=>i(t.link),children:e.jsx(oe.Provider,{value:{className:"contactIcon"},children:e.jsx("div",{children:t.icon})})},r))})}const He=[{icon:e.jsx(U,{}),link:"https://naminaziri.itch.io/"},{icon:e.jsx(B,{}),link:"https://github.com/NamiNaziri/"},{icon:e.jsx(ae,{}),link:"https://www.linkedin.com/in/naminaziri/"},{icon:e.jsx(le,{}),link:"https://github.com/NamiNaziri/"}];function De(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid justify-center",children:[e.jsx("div",{className:"pesonal-image-container",children:e.jsx("img",{radius:"sm",src:"img/2.jpg"})}),e.jsx("div",{className:"text-sm md:text-large text-center font-semibold  m-0",children:"Nami Naziri"}),e.jsx("div",{className:"text-xs md:text-sm  text-center    mb-2",children:"Game Programmer"}),e.jsx(Ge,{mediaList:He})]})})}function k(){return e.jsx("hr",{className:"custom-hr"})}const Ke=[{Title:"Programming",Set:["C/C++","Python","JavaScrip","MATLAB","C#","SQL"]},{Title:"Software",Set:["Unreal Engine","GitHub","Perforce","MATLAB","Docker"]},{Title:"AI",Set:["Behavior tree","State Tree","Mass AI"]},{Title:"Animation",Set:["State Machines","Blend Spaces","Animation Blueprint","IK"]}];function Fe({SkillsText:s}){return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Skills"}),e.jsx(y,{}),Ke.map((i,t)=>e.jsxs("div",{className:"ml-10	",children:[e.jsx("h4",{children:i.Title}),e.jsx("div",{className:"flex flex-wrap gap-2",children:i.Set.map((r,n)=>e.jsxs(z,{radius:"sm",children:[" ",r," "]},n))}),e.jsx(y,{})]},t))]})}function qe({CertificateList:s}){return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Certificates"}),e.jsx("ul",{className:"m-0 pl-1",children:s.map((i,t)=>e.jsx("li",{children:e.jsx("a",{href:i.link,target:"_blank",rel:"noopener noreferrer",children:e.jsx("div",{className:"text-sm md:text-large font-bold",children:i.text})})},t))})]})}const $e=[{title:"Kumma Gallery Showcase – Lost Radiance (Games Now! Game Jam 2023)",text:()=>e.jsxs("div",{children:["Developed Lost Radiance, which was selected by industry professionals to be showcased at Kumma Gallery.",e.jsx("br",{}),e.jsx("strong",{children:"Judges:"})," Essi Jukkala (",e.jsx("strong",{children:"Supercell"}),"), Eevi Korhonen (",e.jsx("strong",{children:"Housemarque"}),"), Tatu Laine (",e.jsx("strong",{children:"Futureplay"}),"), and Jussi Loukiainen (",e.jsx("strong",{children:"Platonic Partnership"}),")",e.jsx("br",{}),e.jsx("strong",{children:"Feedback:"})," Recognized for its simple yet engaging mechanics and strong visual presentation.",e.jsx("br",{}),e.jsx("a",{href:"https://www.instagram.com/p/C7cN6jRtFZY/?img_index=1",target:"_blank",rel:"noopener noreferrer",children:"More"})]})},{title:"Unreal Engine Programming Challenge – Space Invaders",text:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Space Invaders game selected as one of the top 3 entries. The code structure was reviewed by Chris Rock, Lead Gameplay Programmer at Neon Koi(PlayStation)."}),e.jsx("a",{href:"https://gamesjobfair.com/programming-challenges-unrealengine-unity",target:"_blank",rel:"noopener noreferrer",children:"More"})]})},{title:"Finland Scholarship for Master's Studies",text:()=>e.jsx("div",{children:"Awarded a merit-based scholarship covering full tuition fees and a €5000 grant for living expenses."})}],Je=[{text:"Winner of Unreal Engine Programming Challenge - Game Job Fair - Spring 2023",link:"/img/spaceInvader/Nami_Naziri_UE_Challenge.png"}];function Ye(){const s="Hey there, my name is Nami, and I’m currently pursuing my Master's in Computer Science at Aalto University.I’m proficient in Unreal Engine and enjoy exploring new concepts related to game development, particularly where gameplay, AI, and animation intersect.My experience includes working with animation components such as blending, layering, and state machines, as well as AI components such as behavior trees, smart objects, state trees, environment query systems, and AI perception.";return u.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[]),e.jsx(d,{className:"rowStyle",rowSpacing:{xs:0},container:!0,marginTop:10,marginBottom:0,justifyContent:"center",alignItems:"center",children:e.jsx(d,{container:!0,xs:10,sm:10,md:10,lg:10,xl:10,children:e.jsxs(d,{className:" text-justify md:text-justify w-full",justifyContent:"center",alignItems:"top",children:[e.jsx(De,{}),e.jsx(k,{}),e.jsx(Ue,{SummaryText:s}),e.jsx(k,{}),e.jsx(Be,{AwardsText:$e}),e.jsx(k,{}),e.jsx(Fe,{}),e.jsx(k,{}),e.jsx(Me,{}),e.jsx(y,{}),e.jsx(Oe,{}),e.jsx(y,{}),e.jsx(qe,{CertificateList:Je}),e.jsx("div",{className:"m-8"})]})})})}const Ve=({markdownObject:s})=>{const[i,t]=u.useState(null);return console.log(s),u.useEffect(()=>{fetch(s.link).then(r=>r.text()).then(r=>t(r))},[]),e.jsx("div",{className:"grid grid-cols-6 mt-2.5	",children:e.jsx("div",{className:"col-start-2 col-span-4 ",children:i?e.jsx(ce,{remarkPlugins:[[me]],children:i,rehypePlugins:[de],components:{code(r){const{children:n,className:a,node:l,...c}=r,p=/language-(\w+)/.exec(a||"");return p?e.jsx(he,{...c,PreTag:"div",children:String(n).replace(/\n$/,""),language:p[1],style:pe}):e.jsx("code",{...c,className:a,children:n})}}}):e.jsx("div",{className:"h-screen bg-black"})})})},x=g.createContext({number:0,count:0,subscribe:null,unsubscribe:null,goto:null,back:null,next:null});class N extends u.PureComponent{constructor(t,r){super(t,r);m(this,"handleTouchMove",t=>{console.log("touchmove")});m(this,"handleTouchEnd",t=>{console.log("touchend"),this.state,window.scroll(0,window.scrollY)});m(this,"handleTouchStart",t=>{console.log("touchstart"),this.disableScroll=!1});this.slides=[],this.state={slide:null,translateY:0,pageYOffset:0,prevScrollPos:0,offsetHeight:0,count:0,number:0,resetScroll:!1,instantScroll:!1},this.ticking=!1,this.fullPageHeight=0,this.viewportHeight=0,this.subscribe=this.subscribe.bind(this),this.unsubscribe=this.unsubscribe.bind(this),this.update=this.update.bind(this),this.getIndex=this.getIndex.bind(this),this.handleScroll=this.handleScroll.bind(this),this.handleTouchMove=this.handleTouchMove.bind(this),this.handleResize=this.handleResize.bind(this),this.handleKeys=this.handleKeys.bind(this),this.handleTouchEnd=this.handleTouchEnd.bind(this),this.handleTouchStart=this.handleTouchStart.bind(this),this.driverRef=g.createRef(),this.warperRef=g.createRef(),this.fullpageRef=g.createRef()}componentDidMount(){this.handleResize(),this.setState({slide:this.slides[0]}),typeof window<"u"&&(window.addEventListener("scroll",this.handleScroll),window.addEventListener("touchend",this.handleTouchEnd),window.addEventListener("touchstart",this.handleTouchStart),window.addEventListener("resize",this.handleResize)),typeof document<"u"&&document.addEventListener("keydown",this.handleKeys)}componentWillUnmount(){typeof window<"u"&&(window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize),window.removeEventListener("touchend",this.handleTouchEnd),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove)),typeof document<"u"&&document.removeEventListener("keydown",this.handleKeys)}getIndex(t){return this.slides.indexOf(t)}subscribe(t){const r=[...this.slides,t];return this.slides=r.sort((n,a)=>{const l=n.el.current.offsetTop,c=a.el.current.offsetTop;return l-c}),this.setState({count:this.slides.length}),this.ticking=!1,this.handleResize(),t}unsubscribe(t){return this.slides=this.slides.filter(r=>r.el!==t.el),this.setState({count:this.slides.length}),this.handleResize(),this.handleScroll(),t}handleScroll(t){const{resetScroll:r,translateY:n}=this.state,{scrollLockTiming:a}=this.props;return console.log(`handle scroll: ${this.lockScroll}`),this.disableScroll?(console.log("disable scroll"),window.scrollTo({top:n*-1,left:0,behavior:"instant"}),!1):this.lockScroll?(window.scrollTo({top:n*-1,left:0,behavior:"instant"}),a===400&&(this.disableScroll=!0),!1):(this.ticking||window.requestAnimationFrame(()=>{r&&(console.log("reset scroll"),window.scrollTo(0,n*-1));const{prevScrollPos:l}=this.state,c=window.scrollY||0,p=c-l;console.log(`ticking: ${p}`);const h=p>0?.2:.8,f=c;this.setState({pageYOffset:c,prevScrollPos:f,resetScroll:!1});const j=this.slides.find(P=>{const R=P.el.current;return c<R.offsetTop+R.offsetHeight*h});this.goto(j),this.ticking=!1}),this.ticking=!0,!0)}handleResize(){this.ticking||window.requestAnimationFrame(()=>{this.viewportHeight=Math.max(document.documentElement.clientHeight,window.innerHeight||0),this.fullPageHeight=this.fullpageRef.current.clientHeight,this.driverRef.current.style.height=`${this.fullPageHeight}px`,this.ticking=!1}),this.ticking=!0}handleKeys(t){const{keyboardShortcut:r}=this.props;return r?t.keyCode===33||t.keyCode===37||t.keyCode===38?(t.preventDefault(),t.shiftKey?this.first(t):this.back(t)):t.keyCode===34||t.keyCode===39||t.keyCode===40?(t.preventDefault(),t.shiftKey?this.last(t):this.next(t)):t.keyCode===35?(t.preventDefault(),this.last(t)):t.keyCode===36?(t.preventDefault(),this.first(t)):!0:!0}update(){return this}goto(t,r=!1,n=!1){const{slide:a}=this.state,{transitionTiming:l,onChange:c,scrollLockTiming:p}=this.props;if(a!==t){const h=Math.max((this.fullPageHeight-this.viewportHeight)*-1,t.el.current.offsetTop*-1),{onHide:f}=a.props;f&&typeof f=="function"&&setTimeout(()=>f(h),l),this.lockScroll=!0,console.log(`instant scroll: ${n}`),n&&(this.disableScroll=!0,window.scrollTo({top:h*-1,left:0,behavior:"instant"}),setTimeout(()=>{this.disableScroll=!1,this.lockScroll=!1},p)),this.setState({slide:t,number:this.getIndex(t),translateY:h,offsetHeight:t.el.current.offsetHeight,resetScroll:r}),setTimeout(()=>{this.lockScroll=!1},p);const{onShow:j}=t.props;j&&typeof j=="function"&&j(h),typeof c=="function"&&c(this.state)}return t}back(){const{number:t}=this.state,r=Math.max(0,t-1);this.goto(this.slides[r],!0,!0)}next(){const{length:t}=this.slides,{number:r}=this.state,n=Math.min(t-1,r+1);this.goto(this.slides[n],!0,!0)}first(){this.goto(this.slides[0],!0,!0)}last(){this.goto(this.slides[this.slides.length-1],!0,!0)}render(){const{children:t,style:r,className:n,transitionTiming:a,scrollLockTiming:l}=this.props,{translateY:c,pageYOffset:p,prevScrollPos:h,offsetHeight:f,number:j,count:P,resetScroll:R,instantScroll:at}=this.state;return e.jsxs(x.Provider,{value:{translateY:c,pageYOffset:p,prevScrollPos:h,offsetHeight:f,number:j,count:P,subscribe:this.subscribe,unsubscribe:this.unsubscribe,update:this.update,goto:($,J,Y)=>this.goto($,J,Y),back:this.back,next:this.next,getIndex:this.getIndex,transitionTiming:a,scrollLockTiming:l,className:n,style:r,warperRef:this.warperRef,fullpageRef:this.fullpageRef,slides:this.slides},children:[e.jsx("div",{name:"Driver",style:{position:"relative"},ref:this.driverRef}),t]})}}m(N,"contextType",x),m(N,"propTypes",{children:o.node.isRequired,transitionTiming:o.number,scrollLockTiming:o.number,style:o.objectOf(o.oneOfType([o.number,o.string,o.bool])),className:o.string,onChange:o.func,keyboardShortcut:o.bool}),m(N,"defaultProps",{transitionTiming:700,scrollLockTiming:700,style:{position:"fixed",top:0,left:0,right:0},className:"",onChange:null,keyboardShortcut:!0});class I extends u.PureComponent{render(){const{children:i,style:t,className:r}=this.props;return e.jsx(x.Consumer,{children:n=>e.jsx("div",{name:"Warper",style:n.style,ref:this.warperRef,children:e.jsx("div",{name:"Inner",className:r,style:{transition:`transform ${n.transitionTiming}ms cubic-bezier(0.645, 0.045, 0.355, 1.000)`,...t,transform:`translate3D(0, ${n.translateY}px, 0)`},ref:n.fullpageRef,children:i})})})}}m(I,"contextType",x),m(I,"propTypes",{children:o.node.isRequired,className:o.string,style:o.objectOf(o.oneOfType([o.number,o.string,o.bool]))}),m(I,"defaultProps",{className:"",style:{position:"absolute",left:0,right:0}});const A=g.createContext();class b extends u.PureComponent{constructor(i,t){super(i,t),this.sectionRef=g.createRef()}componentDidMount(){const{subscribe:i}=this.context;this.el=this.sectionRef,i(this)}componentWillUnmount(){const{unsubscribe:i}=this.context;i(this)}render(){const{children:i,height:t,style:r,className:n}=this.props,{getIndex:a}=this.context;return this.index=a(this),e.jsx(A.Provider,{value:{index:this.index},children:e.jsx("section",{className:n,style:{height:t,...r},ref:this.sectionRef,children:i})})}}m(b,"contextType",x),m(b,"defaultProps",{height:"100vh",style:{},className:"",onShow:null,onHide:null}),m(b,"propTypes",{children:o.node.isRequired,height:o.string,style:o.objectOf(o.oneOfType([o.number,o.string,o.bool])),className:o.string,onShow:o.func,onHide:o.func}),m(b,"Number",({style:i={}})=>e.jsx(A.Consumer,{children:t=>e.jsx("span",{style:i,children:`${t.index+1}`})}));class T extends u.PureComponent{render(){const{style:i,itemStyle:t,reverse:r=!1}=this.props,{number:n,slides:a,transitionTiming:l}=this.context,c=p=>{const{goto:h}=this.context;h(p,!1,!0)};return e.jsx("div",{style:{position:"fixed",height:"100vh",zIndex:100,top:0,right:0,listStyleType:"none",display:"flex",flexDirection:"column",flexWrap:"nowrap",justifyContent:"center",paddingRight:"1em",...i},children:a.map((p,h)=>e.jsx("div",{children:e.jsx("div",{style:{borderRadius:"50%",height:n===h?14:10,width:n===h?14:10,margin:n===h?3:5,backgroundColor:r?"white":"black",opacity:n===h?1:.5,transition:`all ${l*.5}ms ease-in-out`,...t},onClick:()=>c(p),onKeyPress:()=>c(p),role:"button",tabIndex:"-1","aria-label":`Slide ${h}`,children:e.jsx("span",{style:{display:"none"},children:`slide number ${h}`})})},h.toString()))})}}m(T,"contextType",x),m(T,"defaultProps",{style:{},itemStyle:{},reverse:!1}),m(T,"propTypes",{style:o.objectOf(o.oneOfType([o.number,o.string,o.bool])),itemStyle:o.objectOf(o.oneOfType([o.number,o.string,o.bool])),reverse:o.bool});class E extends u.PureComponent{render(){const{style:i}=this.props;return e.jsx(x.Consumer,{children:t=>e.jsx("span",{style:i,children:t.count})})}}m(E,"contextType",x),m(E,"propTypes",{style:o.objectOf(o.oneOfType([o.number,o.string,o.bool]))}),m(E,"defaultProps",{style:{}});const We=({children:s})=>{const i=v({query:"(max-width: 575px)"});return e.jsxs(N,{transitionTiming:550,scrollLockTiming:i?400:250,desktopForceStep:!0,children:[e.jsx(T,{itemStyle:{backgroundColor:"red"}}),e.jsx(I,{children:s})]})},Qe={title:"Lost Radiance",description:"This game is created using Unreal Engine 5 for the Games Now Game Jam, where the theme 'missing' takes center stage. Dive into a cosmic odyssey where light has gone astray, and you find yourself as the new star amidst the void. As shadows and darkness compel other stars to assail you, your survival becomes crucial. Beware, for if you falter, the cosmos will plunge into an everlasting darkness. Navigate this celestial challenge, illuminate the universe, and stave",tags:["C++","Blueprint","Unreal Engine"],backgroundImage:"/img/lostRadiance.jpg",itch:"https://naminaziri.itch.io/lost-radiance",github:"https://github.com/lost-radiance",more:"https://naminaziri.itch.io/lost-radiance",galeryItems:[{original:"img/s.png",thumbnail:"img/s.png"},{original:"img/lostRadiance.jpg",thumbnail:"img/lostRadiance.jpg"},{original:"https://www.youtube.com/embed/dR0P4tOlGsU",thumbnail:"img/lr_thumnail.jpg",embedUrl:"https://www.youtube.com/embed/dR0P4tOlGsU"},{original:"img/LostRadiance/LR_e1.jpg",thumbnail:"img/LostRadiance/LR_e1.jpg"},{original:"img/LostRadiance/LR_e2.jpg",thumbnail:"img/LostRadiance/LR_e2.jpg"},{original:"img/LostRadiance/LR_e3.jpg",thumbnail:"img/LostRadiance/LR_e3.jpg"}]},Xe={title:"Space Invaders",description:"This is a space invaders clone game made using the Unreal engine as an entry for the 'Games Job Fair Spring 2023 - Unreal Engine Programming Challenge'.",tags:["C++","Blueprint","Unreal Engine"],backgroundImage:"/img/spaceInvader/background.png",itch:"https://naminaziri.itch.io/space-invaders",github:"https://github.com/NamiNaziri/SpaceInvaders",more:"https://www.youtube.com/watch?v=u3x7nDlHT6s&t=2168s",galeryItems:[{original:"img/spaceInvader/SpaceInvaders.gif",thumbnail:"img/spaceInvader/SI_thumbnail.png"},{original:"img/spaceInvader/SI_2.png",thumbnail:"img/spaceInvader/SI_2.png"},{original:"https://www.youtube.com/embed/JWBiKHRHcaw",thumbnail:"img/spaceInvader/SI_yt.jpg",embedUrl:"https://www.youtube.com/embed/JWBiKHRHcaw"},{original:"img/spaceInvader/Nami_Naziri_UE_Challenge.png",thumbnail:"img/spaceInvader/Nami_Naziri_UE_Challenge.png"},{original:"img/spaceInvader/si_review.png",thumbnail:"img/spaceInvader/si_review.png"},{original:"img/spaceInvader/SI_1.png",thumbnail:"img/spaceInvader/SI_1.png"}]},D={title:"Dual Quaternion Skinning ",description:"Implementation of Dual Quaternion Skinning (DQS) to address candy wrapping issue with other skinning techniques like Linear Blend Skinning.",tags:["C++","OpenGL","2023"],link:"/#/Dual-Quaternion-Skinning",img:"img/DQS.gif"},K={title:"Animation System",description:"An application for playing and blending animations created from scratch using OpenGL and C++.",tags:["C++","OpenGL","2022"],link:"https://github.com/NamiNaziri/Skeletal-Animation",img:"img/animation.gif"},F={title:"Jacobian Inverse Kinematics",description:"An implementation of inverse kinematics that utilizes the Jacobian matrix.",tags:["C++","OpenGL","2023"],link:"/#/inverse-kinematics",img:"img/IK.gif"},Ze={title:"Mesh Import and Simplification",description:"A mesh importer and surface simplification using quadric error metrics",tags:["C++","OpenGL","2023"],link:"https://github.com/NamiNaziri/MeshSimplifier",img:"img/simplifier.gif"},q={title:"Unreal Prototypes",description:"This is a compilation of various prototypes I have developed using Unreal Engine.",tags:["Unreal Engine","C++","Blueprint","2021-2023"],link:"/#/Unreal-Prototypes",img:"img/BossAI_V2.jpg"};function et({project:s}){const i=t=>{window.open(t,"_blank")};return e.jsx("div",{className:"backdrop-blur-3xl samll-project-container",children:e.jsxs(O,{children:[e.jsxs(se,{className:"pb-0 pt-2 px-4 flex-col items-center",children:[e.jsx("h4",{className:"font-bold text-large",children:s.title}),e.jsx("div",{className:"flex gap-2",children:s.tags.map((t,r)=>e.jsx(z,{color:"default",children:t},r))})]}),e.jsx(C,{className:"flex items-center",children:e.jsx("div",{className:"project-image-container",children:e.jsx("img",{radius:"sm",src:s.img})})}),e.jsxs(C,{className:"items-center gap-0",children:[e.jsx("div",{className:"text-justify",children:s.description}),e.jsx(S,{className:"flex w-full mt-4 min-h-10",variant:"bordered",startContent:e.jsx(G,{}),onPress:()=>{i(s.link)},children:"more"})]})]})})}function _({projects:s,index:i}){const t=v({query:"(max-width: 575px)"});console.log(i);const n={position:"absolute",width:"100%",height:"100vh",backgroundImage:`url(${`/img/bg${i}.jpg`}), linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",filter:"blur(10px)",marginTop:"1vh",zIndex:-2},a=t?"grid-rows-1":"grid-cols-2";return e.jsxs(d,{className:"rowStyle",columnSpacing:{xs:2,md:5},paddingTop:{xs:"5vh"},marginTop:{xs:"1.8vh"},rowSpacing:{xs:0},container:!0,display:"flex",height:"100vh",marginBottom:0,justifyContent:"center",alignItems:"center",children:[e.jsx("div",{style:n}),e.jsx("div",{className:`grid ${a} gap-16  mx-10 md:mx-20 place-items-center`,children:s.map((l,c)=>e.jsx(et,{project:l},c))})]})}const tt=[Qe,Xe],it=[[q],[K],[D],[F],[Ze]],st=[[q,K],[D,F]];function nt(){const s=v({query:"(max-width: 575px)"});return u.useState(5),u.useState(0),e.jsx("div",{className:".disable-momentum",children:e.jsxs(We,{children:[tt.map((i,t)=>e.jsx(b,{children:e.jsx(Le,{project:i})},t)),s&&it.map((i,t)=>e.jsx(b,{children:e.jsx(_,{projects:i,index:t})},t+50)),!s&&st.map((i,t)=>e.jsx(b,{children:e.jsx(_,{projects:i,index:t})},t+100))]})})}const rt=[{title:"Unreal Prototypes",link:"/blogs/2023-05-23-Unreal-Prototypes.md",path:"/Unreal-Prototypes"},{title:"Dual Quaternion Skinning",link:"/blogs/2023-03-22-Dual-quaternion-skinning.md",path:"/Dual-Quaternion-Skinning"},{title:"Inverse Kinematics",link:"/blogs/2023-03-14-Inverse-Kinematics.md",path:"/inverse-kinematics"}],ot=()=>{const[s,i]=u.useState(0),t=ue(),r=ge();return u.useEffect(()=>{switch(console.log(r.pathname),r.pathname){case"/":i(0);break;case"/cv":i(1);break;case"/contact":i(2);break;default:i(-1);break}},[r]),e.jsx(ne,{navigate:t,children:e.jsxs("main",{className:"dark text-foreground bg-background",children:[e.jsx(_e,{primary:s}),e.jsxs(xe,{children:[e.jsx(w,{path:"/",element:e.jsx(nt,{})}),e.jsx(w,{path:"/cv",element:e.jsx(Ye,{})}),e.jsx(w,{path:"/contact",element:e.jsx(_,{})}),rt.map((n,a)=>e.jsx(w,{path:n.path,element:e.jsx(Ve,{markdownObject:n})},a))]})]})})};Q.createRoot(document.getElementById("root")).render(e.jsx(fe,{children:e.jsx(ot,{})}));
