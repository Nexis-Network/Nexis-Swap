"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[386],{95263:e=>{var t="%[a-f0-9]{2}",i=new RegExp("("+t+")|([^%]+?)","gi"),n=new RegExp("("+t+")+","gi");function r(e,t){try{return[decodeURIComponent(e.join(""))]}catch(o){}if(1===e.length)return e;t=t||1;var i=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],r(i),r(n))}function o(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(i)||[],n=1;n<t.length;n++)t=(e=r(t,n).join("")).match(i)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var i={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=n.exec(e);r;){try{i[r[0]]=decodeURIComponent(r[0])}catch(t){var a=o(r[0]);a!==r[0]&&(i[r[0]]=a)}r=n.exec(e)}i["%C2"]="\ufffd";for(var s=Object.keys(i),d=0;d<s.length;d++){var l=s[d];e=e.replace(new RegExp(l,"g"),i[l])}return e}(e)}}},67937:e=>{e.exports=function(e,t){for(var i={},n=Object.keys(e),r=Array.isArray(t),o=0;o<n.length;o++){var a=n[o],s=e[a];(r?-1!==t.indexOf(a):t(a,s,e))&&(i[a]=s)}return i}},18806:(e,t,i)=>{const n=i(8248),r=i(95263),o=i(13362),a=i(67937),s=Symbol("encodeFragmentIdentifier");function d(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function c(e,t){return t.decode?r(e):e}function p(e){return Array.isArray(e)?e.sort():"object"==typeof e?p(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function m(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function u(e){const t=(e=m(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function h(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function x(e,t){d((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const i=function(e){let t;switch(e.arrayFormat){case"index":return(e,i,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=i):n[e]=i};case"bracket":return(e,i,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],i):n[e]=[i]:n[e]=i};case"colon-list-separator":return(e,i,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],i):n[e]=[i]:n[e]=i};case"comma":case"separator":return(t,i,n)=>{const r="string"==typeof i&&i.includes(e.arrayFormatSeparator),o="string"==typeof i&&!r&&c(i,e).includes(e.arrayFormatSeparator);i=o?c(i,e):i;const a=r||o?i.split(e.arrayFormatSeparator).map((t=>c(t,e))):null===i?i:c(i,e);n[t]=a};case"bracket-separator":return(t,i,n)=>{const r=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!r)return void(n[t]=i?c(i,e):i);const o=null===i?[]:i.split(e.arrayFormatSeparator).map((t=>c(t,e)));void 0!==n[t]?n[t]=[].concat(n[t],o):n[t]=o};default:return(e,t,i)=>{void 0!==i[e]?i[e]=[].concat(i[e],t):i[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const r of e.split("&")){if(""===r)continue;let[e,a]=o(t.decode?r.replace(/\+/g," "):r,"=");a=void 0===a?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?a:c(a,t),i(c(e,t),a,n)}for(const r of Object.keys(n)){const e=n[r];if("object"==typeof e&&null!==e)for(const i of Object.keys(e))e[i]=h(e[i],t);else n[r]=h(e,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const i=n[t];return Boolean(i)&&"object"==typeof i&&!Array.isArray(i)?e[t]=p(i):e[t]=i,e}),Object.create(null))}t.extract=u,t.parse=x,t.stringify=(e,t)=>{if(!e)return"";d((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const i=i=>t.skipNull&&null==e[i]||t.skipEmptyString&&""===e[i],n=function(e){switch(e.arrayFormat){case"index":return t=>(i,n)=>{const r=i.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?i:null===n?[...i,[l(t,e),"[",r,"]"].join("")]:[...i,[l(t,e),"[",l(r,e),"]=",l(n,e)].join("")]};case"bracket":return t=>(i,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?i:null===n?[...i,[l(t,e),"[]"].join("")]:[...i,[l(t,e),"[]=",l(n,e)].join("")];case"colon-list-separator":return t=>(i,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?i:null===n?[...i,[l(t,e),":list="].join("")]:[...i,[l(t,e),":list=",l(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return i=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:(r=null===r?"":r,0===n.length?[[l(i,e),t,l(r,e)].join("")]:[[n,l(r,e)].join(e.arrayFormatSeparator)])}default:return t=>(i,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?i:null===n?[...i,l(t,e)]:[...i,[l(t,e),"=",l(n,e)].join("")]}}(t),r={};for(const a of Object.keys(e))i(a)||(r[a]=e[a]);const o=Object.keys(r);return!1!==t.sort&&o.sort(t.sort),o.map((i=>{const r=e[i];return void 0===r?"":null===r?l(i,t):Array.isArray(r)?0===r.length&&"bracket-separator"===t.arrayFormat?l(i,t)+"[]":r.reduce(n(i),[]).join("&"):l(i,t)+"="+l(r,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[i,n]=o(e,"#");return Object.assign({url:i.split("?")[0]||"",query:x(u(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:c(n,t)}:{})},t.stringifyUrl=(e,i)=>{i=Object.assign({encode:!0,strict:!0,[s]:!0},i);const n=m(e.url).split("?")[0]||"",r=t.extract(e.url),o=t.parse(r,{sort:!1}),a=Object.assign(o,e.query);let d=t.stringify(a,i);d&&(d=`?${d}`);let c=function(e){let t="";const i=e.indexOf("#");return-1!==i&&(t=e.slice(i)),t}(e.url);return e.fragmentIdentifier&&(c=`#${i[s]?l(e.fragmentIdentifier,i):e.fragmentIdentifier}`),`${n}${d}${c}`},t.pick=(e,i,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[s]:!1},n);const{url:r,query:o,fragmentIdentifier:d}=t.parseUrl(e,n);return t.stringifyUrl({url:r,query:a(o,i),fragmentIdentifier:d},n)},t.exclude=(e,i,n)=>{const r=Array.isArray(i)?e=>!i.includes(e):(e,t)=>!i(e,t);return t.pick(e,r,n)}},13362:e=>{e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const i=e.indexOf(t);return-1===i?[e]:[e.slice(0,i),e.slice(i+t.length)]}},8248:e=>{e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},22544:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Bt});var n=i(92936),r=i(87254),o=i(5985),a=i(47583),s=i(66284),d=i(25648),l=i(78129),c=i(45779),p=i(87685);d.ZP`
  query Details($address: String!, $tokenId: String!) {
    nftAssets(address: $address, filter: { listed: false, tokenIds: [$tokenId] }) {
      edges {
        node {
          id
          name
          ownerAddress
          image {
            url
          }
          smallImage {
            url
          }
          originalImage {
            url
          }
          tokenId
          description
          animationUrl
          suspiciousFlag
          creator {
            address
            profileImage {
              url
            }
            isVerified
          }
          collection {
            name
            isVerified
            numAssets
            twitterName
            discordUrl
            homepageUrl
            image {
              url
            }
            nftContracts {
              address
              standard
            }
            description
          }
          listings(first: 1) {
            edges {
              node {
                address
                createdAt
                endAt
                id
                maker
                marketplace
                marketplaceUrl
                orderHash
                price {
                  currency
                  value
                }
                quantity
                startAt
                status
                taker
                tokenId
                type
                protocolParameters
              }
              cursor
            }
          }
          rarities {
            provider
            rank
            score
          }
          metadataUrl
          traits {
            name
            value
          }
        }
      }
    }
  }
`;var m=i(68588),u=i(36399),h=i(61152),x=i(54972);const f=(0,h.default)(x.dL).withConfig({displayName:"Resource__ResourceLink",componentId:"sc-fcee131f-0"})`
  display: flex;
  color: ${({theme:e})=>e.accent1};
  font-weight: 535;
  font-size: 14px;
  line-height: 20px;
  gap: 4px;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${({theme:e})=>(0,u._j)(.1,e.accent1)};
    text-decoration: none;
  }
`;function g({name:e,link:t}){return(0,n.jsxs)(f,{href:t,children:[e,(0,n.jsx)("sup",{children:"\u2197"})]})}var y=i(15824),v=i(74377),C=i(27519),w=i(15288),j=i(35842),b=i(27389),_="_1cf9gnw1";const I=()=>(0,n.jsxs)("svg",{width:"40",height:"41",viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M17.8281 10.834C17.6159 9.88757 17.4333 9.13689 17.291 8.58997C17.1751 8.11971 16.9497 7.68339 16.6331 7.31649C16.2834 6.97574 15.8515 6.731 15.3791 6.60601C14.8206 6.43175 14.0365 6.24408 13.0457 6.04301C12.7771 5.98134 12.6321 5.83926 12.6321 5.61405C12.6286 5.56049 12.6369 5.50679 12.6564 5.45676C12.6758 5.40674 12.7061 5.36159 12.7449 5.32448C12.8303 5.25054 12.9343 5.20142 13.0457 5.18241C13.8337 5.03623 14.6127 4.84557 15.3791 4.61136C15.8508 4.48054 16.282 4.23345 16.6331 3.89283C16.9497 3.52593 17.1751 3.08961 17.291 2.61935C17.4468 2.06885 17.6258 1.32623 17.8281 0.39145C17.8791 0.123349 18.016 0 18.2416 0C18.4671 0 18.6095 0.131392 18.6739 0.39145C18.8726 1.32623 19.0516 2.06885 19.211 2.61935C19.3304 3.08988 19.5585 3.52599 19.8769 3.89283C20.229 4.23347 20.6611 4.48052 21.1336 4.61136C21.8997 4.84657 22.6788 5.03724 23.467 5.18241C23.576 5.18865 23.6782 5.23739 23.7515 5.31813C23.8249 5.39887 23.8635 5.50515 23.8591 5.61405C23.8591 5.83926 23.7275 5.98134 23.467 6.04301C22.6802 6.19136 21.9014 6.37926 21.1336 6.60601C20.6605 6.73103 20.2276 6.97574 19.8769 7.31649C19.5585 7.68333 19.3304 8.11943 19.211 8.58997C19.0472 9.12617 18.8672 9.88757 18.6739 10.834C18.6095 11.1021 18.4671 11.2281 18.2416 11.2281C18.016 11.2281 17.8737 11.0967 17.8281 10.834Z",fill:b.Z4.colors.neutral2,className:_}),(0,n.jsx)("path",{d:"M32.4448 19.8364C32.2192 18.6679 32.0079 17.7366 31.8166 17.0452C31.6743 16.4509 31.3902 15.8999 30.9885 15.4396C30.5445 15.0113 29.9992 14.7027 29.4037 14.5425C28.4447 14.2629 27.4703 14.0397 26.4853 13.874C26.1398 13.8226 25.9656 13.6426 25.9656 13.3369C25.9618 13.2674 25.9723 13.1978 25.9964 13.1324C26.0204 13.0671 26.0576 13.0074 26.1055 12.9569C26.2105 12.8597 26.3433 12.7977 26.4853 12.7798C27.4694 12.6134 28.4437 12.3931 29.4037 12.1198C30.0021 11.9667 30.549 11.6571 30.9885 11.2228C31.389 10.7583 31.6729 10.2049 31.8166 9.60859C32.0079 8.91721 32.2192 7.98584 32.4448 6.81449C32.4458 6.74608 32.4607 6.67858 32.4886 6.61609C32.5164 6.5536 32.5567 6.49743 32.6068 6.45096C32.657 6.40448 32.7161 6.3687 32.7806 6.34574C32.845 6.32278 32.9134 6.31313 32.9816 6.31739C33.2672 6.31739 33.4528 6.48309 33.5213 6.81449C33.7479 7.98584 33.9573 8.91721 34.1495 9.60859C34.2907 10.2036 34.5706 10.7567 34.9662 11.2228C35.404 11.6593 35.9516 11.9693 36.551 12.1198C37.515 12.3926 38.493 12.6129 39.4808 12.7798C39.5532 12.7803 39.6248 12.7958 39.6909 12.8254C39.757 12.855 39.8162 12.8981 39.8648 12.9518C39.9134 13.0055 39.9503 13.0687 39.9732 13.1375C39.9961 13.2063 40.0044 13.279 39.9977 13.3512C39.9977 13.6569 39.8263 13.8369 39.4808 13.8883C38.4922 14.0545 37.514 14.2778 36.551 14.5568C35.9543 14.7142 35.4084 15.0232 34.9662 15.4539C34.5695 15.916 34.2894 16.4666 34.1495 17.0595C33.9592 17.7509 33.7498 18.6813 33.5213 19.8507C33.4528 20.185 33.2758 20.3507 32.9816 20.3507C32.912 20.3546 32.8424 20.3442 32.777 20.32C32.7116 20.2958 32.6519 20.2585 32.6015 20.2103C32.5512 20.1621 32.5113 20.104 32.4843 20.0396C32.4573 19.9753 32.4439 19.9062 32.4448 19.8364Z",fill:b.Z4.colors.neutral2,className:_}),(0,n.jsx)("path",{d:"M12.6196 40.6995C12.5109 40.7023 12.4027 40.6829 12.3013 40.6422C12.2 40.6016 12.1075 40.5405 12.0294 40.4627C11.8673 40.3009 11.7574 40.0919 11.7145 39.8639C11.418 38.0492 11.1251 36.5322 10.8358 35.3128C10.6133 34.2663 10.2461 33.258 9.74531 32.3187C9.32818 31.5649 8.73049 30.9334 8.00907 30.4841C7.132 29.9745 6.18128 29.6124 5.19297 29.4117C4.03371 29.1449 2.58684 28.8918 0.852359 28.6523C0.616735 28.6254 0.397657 28.5147 0.23303 28.3393C0.0804808 28.1721 -0.00302245 27.9506 0.000117795 27.7214C-0.00358202 27.4921 0.0799998 27.2703 0.23303 27.1035C0.396979 26.9271 0.616416 26.8162 0.852359 26.7905C2.5886 26.5618 4.03812 26.3114 5.20091 26.0392C6.20136 25.8286 7.16449 25.4614 8.05671 24.9505C8.7902 24.5064 9.40286 23.8792 9.83794 23.1268C10.3473 22.1993 10.7151 21.1968 10.9284 20.1545C11.2054 18.9369 11.4701 17.4162 11.7224 15.5925C11.7547 15.3608 11.8619 15.147 12.0268 14.9855C12.1058 14.9052 12.1997 14.8418 12.3028 14.7993C12.406 14.7567 12.5164 14.7359 12.6276 14.7378C12.7392 14.7338 12.8506 14.7526 12.9551 14.7933C13.0596 14.834 13.1552 14.8956 13.2363 14.9747C13.398 15.1367 13.5079 15.3456 13.5513 15.5735C13.8583 17.3972 14.1565 18.9178 14.4459 20.1354C14.6712 21.1811 15.0382 22.189 15.5363 23.1295C15.9558 23.8807 16.5531 24.5108 17.2726 24.9614C18.1474 25.4733 19.095 25.8407 20.0807 26.0501C21.2347 26.3223 22.6789 26.5727 24.4134 26.8014C24.6493 26.8271 24.8688 26.938 25.0327 27.1144C25.185 27.2815 25.2677 27.5033 25.263 27.7323C25.2662 27.9634 25.1839 28.1872 25.0327 28.3583C24.8722 28.5382 24.6503 28.6474 24.4134 28.6632C22.9509 28.7659 21.4954 28.9559 20.0542 29.232C19.046 29.4136 18.075 29.7698 17.1826 30.2854C16.4365 30.7497 15.8216 31.4065 15.3987 32.1908C14.8949 33.1535 14.531 34.187 14.3188 35.2584C14.04 36.5068 13.7842 38.0429 13.5513 39.8666C13.5238 40.1013 13.4192 40.3193 13.2548 40.4845C13.1681 40.5618 13.0673 40.6207 12.9583 40.6576C12.8492 40.6945 12.7341 40.7087 12.6196 40.6995Z",fill:b.Z4.colors.neutral2,className:_})]});var N=i(88846),A=i(43912),k=i(44952),$=i(58690),T=i(33426),S=i(47263),D=i(43454),P=i(6282),F=i(13446),H=i(66136);const U=h.css`
  :hover::after {
    border-radius: 12px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e})=>e.deprecated_stateOverlayHover};
    z-index: 0;
  }

  :active::after {
    border-radius: 12px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e})=>e.deprecated_stateOverlayPressed};
    z-index: 0;
  }
`,L=h.default.div.withConfig({displayName:"AssetPriceDetails__Container",componentId:"sc-64765cb6-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  @media (min-width: calc(960px + 1px)) {
    position: fixed;
    width: 360px;
    margin-top: 20px;
  }
`,O=h.default.div.withConfig({displayName:"AssetPriceDetails__BestPriceContainer",componentId:"sc-64765cb6-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
`,E=h.default.div.withConfig({displayName:"AssetPriceDetails__HeaderRow",componentId:"sc-64765cb6-2"})`
  display: flex;
  justify-content: space-between;
`,z=h.default.div.withConfig({displayName:"AssetPriceDetails__PriceRow",componentId:"sc-64765cb6-3"})`
  display: flex;
  gap: 12px;
  align-items: flex-end;
`,B=h.default.div.withConfig({displayName:"AssetPriceDetails__BuyNowButton",componentId:"sc-64765cb6-4"})`
  position: relative;
  width: 100%;
  background-color: ${({theme:e,assetInBag:t,useAccentColor:i})=>t?e.critical:i?e.accent1:e.surface3};
  border-radius: 12px;
  padding: 10px 12px;
  margin-top: ${({margin:e})=>e?"12px":"0px"};
  text-align: center;
  cursor: pointer;

  ${U}
`,R=h.default.div.withConfig({displayName:"AssetPriceDetails__BuyNowButtonContainer",componentId:"sc-64765cb6-5"})`
  position: relative;
`,M=(0,h.default)(x.Tv.BodySecondary).withConfig({displayName:"AssetPriceDetails__Tertiary",componentId:"sc-64765cb6-6"})`
  color: ${({theme:e})=>e.neutral3};
`,Z=h.default.a.withConfig({displayName:"AssetPriceDetails__UploadLink",componentId:"sc-64765cb6-7"})`
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;

  ${m.cR}
`,V=h.default.div.withConfig({displayName:"AssetPriceDetails__NotForSaleContainer",componentId:"sc-64765cb6-8"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 48px 18px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,X=h.default.div.withConfig({displayName:"AssetPriceDetails__DiscoveryContainer",componentId:"sc-64765cb6-9"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,G=h.default.a.withConfig({displayName:"AssetPriceDetails__OwnerText",componentId:"sc-64765cb6-10"})`
  font-size: 16px;
  font-weight: 535;
  line-height: 20px;
  color: ${({theme:e})=>e.neutral2};
  text-decoration: none;

  ${m.cR}
`,W=h.default.div.withConfig({displayName:"AssetPriceDetails__OwnerInformationContainer",componentId:"sc-64765cb6-11"})`
  color: ${({theme:e})=>e.neutral2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 8px;
`,q=h.default.div.withConfig({displayName:"AssetPriceDetails__AssetInfoContainer",componentId:"sc-64765cb6-12"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Y=h.default.h1.withConfig({displayName:"AssetPriceDetails__AssetHeader",componentId:"sc-64765cb6-13"})`
  display: -webkit-box;
  align-items: center;
  font-size: 28px;
  font-weight: 535;
  line-height: 36px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.neutral1};
  margin: 0;
`,J=h.default.div.withConfig({displayName:"AssetPriceDetails__CollectionNameContainer",componentId:"sc-64765cb6-14"})`
  display: flex;
  justify-content: space-between;
`,Q=h.default.span.withConfig({displayName:"AssetPriceDetails__CollectionHeader",componentId:"sc-64765cb6-15"})`
  font-size: 16px;
  font-weight: 485;
  line-height: 24px;
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  ${m.cR};
`,K=h.default.span.withConfig({displayName:"AssetPriceDetails__VerifiedIconContainer",componentId:"sc-64765cb6-16"})`
  position: relative;
`,ee=(0,h.default)($.SA).withConfig({displayName:"AssetPriceDetails__StyledVerifiedIcon",componentId:"sc-64765cb6-17"})`
  position: absolute;
  top: 0px;
`,te=(0,h.default)(D.rU).withConfig({displayName:"AssetPriceDetails__DefaultLink",componentId:"sc-64765cb6-18"})`
  text-decoration: none;
`,ie=(0,h.default)(x.dL).withConfig({displayName:"AssetPriceDetails__MarketplaceIcon",componentId:"sc-64765cb6-19"})`
  display: flex;
  align-items: center;
`,ne=({asset:e})=>{var t,i;const r=(0,P.s0)(),s=(0,T.$N)(),d=(0,T.aO)((e=>e.setProfilePageState)),p=(0,T.Pc)((e=>e.selectSellAsset)),m=(0,T.Pc)((e=>e.reset)),{formatEther:u,formatNumberOrString:h}=(0,H.Gb)(),f=e.sellOrders&&e.sellOrders.length>0?e.sellOrders[0]:void 0,g=(null===(t=f)||void 0===t?void 0:t.endAt)?new Date(f.endAt):void 0,y=(0,c.useMemo)((()=>s&&e.floor_sell_order_price?s*e.floor_sell_order_price:void 0),[s,e.floor_sell_order_price]),v=(0,a.oO)(),C=()=>{m(),r("/nfts/profile"),p(e),(0,a._P)(o.Yz.NFT_SELL_ITEM_ADDED,{collection_address:e.asset_contract.address,token_id:e.tokenId,...v}),d(S.HA.LISTING)};return(0,n.jsxs)(O,{children:[(0,n.jsxs)(E,{children:[(0,n.jsx)(x.Tv.SubHeader,{color:"accent1",children:f?"Your Price":"List for Sale"}),f&&(0,n.jsx)(ie,{href:f.marketplaceUrl,children:(0,l.Dp)(f.marketplace,"20")})]}),(0,n.jsx)(z,{children:f?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(x.Tv.MediumHeader,{fontSize:"28px",lineHeight:"36px",children:[u({input:null===(i=e.priceInfo)||void 0===i?void 0:i.ETHPrice,type:H.sw.NFTToken})," ","ETH"]}),y&&(0,n.jsx)(x.Tv.BodySecondary,{lineHeight:"24px",children:h({input:y,type:H.sw.FiatNFTToken})})]}):(0,n.jsx)(x.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:"Get the best price for your NFT by selling with Nexis."})}),g&&(0,n.jsxs)(x.Tv.BodySecondary,{fontSize:"14px",children:["Sale ends: ",(0,l.zO)(g)]}),f?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(B,{assetInBag:!1,margin:!0,useAccentColor:!1,onClick:C,children:(0,n.jsx)(x.Tv.SubHeader,{lineHeight:"20px",children:"Adjust listing"})})}):(0,n.jsx)(B,{assetInBag:!1,margin:!0,useAccentColor:!0,onClick:C,children:(0,n.jsx)(x.Tv.SubHeader,{lineHeight:"20px",color:"white",children:"List"})})]})},re=(0,h.default)(D.rU).withConfig({displayName:"AssetPriceDetails__StyledLink",componentId:"sc-64765cb6-20"})`
  text-decoration: none;
  ${m.cR}
`,oe=({collectionName:e,collectionUrl:t})=>{const i=(0,h.useTheme)();return(0,n.jsx)(O,{children:(0,n.jsxs)(V,{children:[(0,n.jsx)($.Io,{width:"79px",height:"79px",color:i.neutral3}),(0,n.jsx)(x.Tv.SubHeader,{children:"Not for sale"}),(0,n.jsxs)(X,{children:[(0,n.jsx)(x.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:"Discover similar NFTs for sale in"}),(0,n.jsx)(re,{to:`/nfts/collection/${t}`,children:(0,n.jsx)(x.Tv.Link,{lineHeight:"20px",children:e})})]})]})})},ae=({asset:e,collection:t})=>{var i,r,o;const{account:a}=(0,N.useWeb3React)(),{formatEther:s,formatNumberOrString:d}=(0,H.Gb)(),p=e.sellorders&&e.sellorders.length>0?e.sellorders[0]:void 0,m=(null===(i=p)||void 0===i?void 0:i.endAt)?new Date(p.endAt):void 0,u=(0,T.cP)((e=>e.itemsInBag)),h=(0,T.cP)((e=>e.addAssetsToBag)),f=(0,T.cP)((e=>e.removeAssetsFromBag)),g=(0,T.cP)((e=>e.toggleBag)),y=(0,T.cP)((e=>e.bagExpanded)),v=(0,T.p6)(e),C=[{address:e.address,tokenId:e.tokenId}],{walletAssets:w}=(0,k.b)(a??"",[],C,1),j=(0,c.useMemo)((()=>{var e;return null===(e=w)||void 0===e?void 0:e[0]}),[w]),{assetInBag:b}=(0,c.useMemo)((()=>({assetInBag:u.some((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address))})),[e,u]),_=e.ownerAddress&&!!j&&(null===(r=a)||void 0===r?void 0:r.toLowerCase())===(null===(o=e.ownerAddress)||void 0===o?void 0:o.toLowerCase()),I=p&&e.priceInfo;return(0,n.jsxs)(L,{children:[(0,n.jsxs)(q,{children:[(0,n.jsxs)(J,{children:[(0,n.jsx)(te,{to:`/nfts/collection/${e.address}`,children:(0,n.jsxs)(Q,{children:[t.collectionName,(0,n.jsx)(K,{children:t.isVerified&&(0,n.jsx)(ee,{})})]})}),(0,n.jsx)(Z,{onClick:()=>{window.open((0,l.Lr)(e),"newwindow",`left=${(window.screen.width-560)/2}, top=${(window.screen.height-480)/2}, width=560, height=480`)},target:"_blank",children:(0,n.jsx)(A.m,{})})]}),(0,n.jsx)(Y,{children:e.name??`${e.collectionName} #${e.tokenId}`})]}),_?(0,n.jsx)(ne,{asset:j}):I?(0,n.jsxs)(O,{children:[(0,n.jsxs)(E,{children:[(0,n.jsx)(x.Tv.SubHeader,{color:"accent1",children:"Best Price"}),(0,n.jsx)(ie,{href:p.marketplaceUrl,children:(0,l.Dp)(p.marketplace,"20")})]}),(0,n.jsxs)(z,{children:[(0,n.jsxs)(x.Tv.MediumHeader,{fontSize:"28px",lineHeight:"36px",children:[s({input:e.priceInfo.ETHPrice,type:H.sw.NFTToken})," ETH"]}),v&&(0,n.jsx)(x.Tv.BodySecondary,{lineHeight:"24px",children:d({input:v,type:H.sw.FiatNFTToken})})]}),m&&m>new Date&&(0,n.jsxs)(M,{fontSize:"14px",children:["Sale ends: ",(0,l.zO)(m)]}),(0,n.jsx)("div",{children:(0,n.jsx)(R,{children:(0,n.jsx)(B,{assetInBag:b,margin:!0,useAccentColor:!0,onClick:()=>{b?f([e]):h([e]),b||y||g()},children:(0,n.jsx)(x.Tv.SubHeader,{color:"white",lineHeight:"20px",children:(0,n.jsx)("span",{"data-testid":"nft-details-toggle-bag",children:b?"Remove":"Add to Bag"})})})})})]}):(0,n.jsx)(oe,{collectionName:t.collectionName??"this collection",collectionUrl:e.address}),I&&(0,n.jsxs)(W,{children:["ERC1155"!==e.tokenType&&e.ownerAddress&&(0,n.jsx)(x.Tv.BodySmall,{color:"neutral2",lineHeight:"20px",children:"Seller:"}),(0,n.jsx)(G,{target:"_blank",href:`https://etherscan.io/address/${e.ownerAddress}`,rel:"noopener noreferrer",children:"ERC1155"===e.tokenType?"":(0,n.jsxs)("span",{children:[" ",_?"You":e.ownerAddress&&(0,F.Xn)(e.ownerAddress,2)]})})]})]})};var se=i(59254),de=i(25290),le=i(10581),ce=i(31017),pe=i(82743),me=i(82284),ue=i(49114);const he=h.default.tr.withConfig({displayName:"AssetActivity__TR",componentId:"sc-864be7a8-0"})`
  border-bottom: ${({theme:e})=>`1px solid ${e.surface3}`};
  width: 100%;

  &:last-child {
    border-bottom: none;
  }
`,xe=h.default.th.withConfig({displayName:"AssetActivity__TH",componentId:"sc-864be7a8-1"})`
  color: ${({theme:e})=>e.neutral2};
  font-weight: 535;
  font-size: 14px;
  line-height: 20px;
  width: 20%;

  @media (max-width: 960px) {
    &:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 720px) {
    &:nth-child(2) {
      display: none;
    }
  }
`,fe=h.default.table.withConfig({displayName:"AssetActivity__Table",componentId:"sc-864be7a8-2"})`
  border-collapse: collapse;
  text-align: left;
  width: 100%;
`,ge=h.default.td.withConfig({displayName:"AssetActivity__TD",componentId:"sc-864be7a8-3"})`
  height: 56px;
  padding: 8px 0px;
  text-align: left;
  vertical-align: middle;
  width: 20%;

  @media (max-width: 960px) {
    &:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 720px) {
    &:nth-child(2) {
      display: none;
    }
  }
`,ye=h.default.div.withConfig({displayName:"AssetActivity__PriceContainer",componentId:"sc-864be7a8-4"})`
  align-items: center;
  display: flex;
  gap: 8px;
`,ve=h.default.a.withConfig({displayName:"AssetActivity__Link",componentId:"sc-864be7a8-5"})`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;

  ${m.cR}
`,Ce=h.default.div.withConfig({displayName:"AssetActivity__ActivityContainer",componentId:"sc-864be7a8-6"})`
  max-height: 310px;
  overflow: auto;

  ${m.Zl}
`,we=(0,h.default)(pe.X).withConfig({displayName:"AssetActivity__LoadingCell",componentId:"sc-864be7a8-7"})`
  height: 20px;
  width: 80px;
`,je=({children:e})=>(0,n.jsx)(Ce,{id:"activityContainer",children:(0,n.jsxs)(fe,{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)(he,{children:[(0,n.jsx)(xe,{children:(0,n.jsx)(ce.cC,{id:"0pC/y6"})}),(0,n.jsx)(xe,{children:(0,n.jsx)(ce.cC,{id:"a7u1N9"})}),(0,n.jsx)(xe,{children:(0,n.jsx)(ce.cC,{id:"g+0MOn"})}),(0,n.jsx)(xe,{children:(0,n.jsx)(ce.cC,{id:"/jQctM"})}),(0,n.jsx)(xe,{children:(0,n.jsx)(ce.cC,{id:"LhMjLm"})})]})}),(0,n.jsx)("tbody",{children:e})]})}),be=({cellCount:e})=>(0,n.jsx)(he,{children:Array(e).fill(null).map(((e,t)=>(0,n.jsx)(ge,{children:(0,n.jsx)(we,{})},t)))}),_e=({rowCount:e})=>(0,n.jsx)(je,{children:Array(e).fill(null).map(((e,t)=>(0,n.jsx)(be,{cellCount:5},t)))}),Ie=({events:e})=>{const{formatNumberOrString:t}=(0,H.Gb)();return(0,n.jsx)(je,{children:e&&e.map(((e,i)=>{const{eventTimestamp:r,eventType:o,fromAddress:a,marketplace:s,price:d,toAddress:c,transactionHash:p}=e,m=d?t({input:parseFloat(d),type:H.sw.NFTToken}):null;return o?(0,n.jsxs)(he,{children:[(0,n.jsx)(ge,{children:(0,n.jsx)(me.VM,{eventType:o,eventTimestamp:r,eventTransactionHash:p,eventOnly:!0})}),(0,n.jsx)(ge,{children:m&&(0,n.jsxs)(ye,{children:[s&&(0,l.Dp)(s,"16"),m," ETH"]})}),(0,n.jsx)(ge,{children:a&&(0,n.jsx)(ve,{href:`https://etherscan.io/address/${a}`,target:"_blank",rel:"noopener noreferrer",children:(0,F.Xn)(a,2)})}),(0,n.jsx)(ge,{children:c&&(0,n.jsx)(ve,{href:`https://etherscan.io/address/${c}`,target:"_blank",rel:"noopener noreferrer",children:(0,F.Xn)(c,2)})}),(0,n.jsx)(ge,{children:r&&(0,ue.F)(r.toString())})]},i):null}))})};i(35976),i(49484);var Ne="_1yohfdw1 rgw6ez819 rgw6ez1dr rgw6ez53",Ae=i(50333),ke=i(94191);const $e=h.default.div.withConfig({displayName:"DetailsContainer__Details",componentId:"sc-d05234da-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }
`,Te=h.default.div.withConfig({displayName:"DetailsContainer__Header",componentId:"sc-d05234da-1"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  line-height: 20px;
`,Se=h.default.div.withConfig({displayName:"DetailsContainer__Body",componentId:"sc-d05234da-2"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 14px;
  line-height: 20px;
  margin-top: 8px;
`,De=h.default.span.withConfig({displayName:"DetailsContainer__Center",componentId:"sc-d05234da-3"})`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 8px;

  ${m.cR}
`,Pe=h.default.a.withConfig({displayName:"DetailsContainer__CreatorLink",componentId:"sc-d05234da-4"})`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;

  ${m.cR}
`,Fe=(0,h.default)(ke.Z).withConfig({displayName:"DetailsContainer__CopyIcon",componentId:"sc-d05234da-5"})`
  cursor: pointer;
`,He=({header:e,body:t})=>(0,n.jsxs)("div",{children:[(0,n.jsx)(Te,{children:e}),(0,n.jsx)(Se,{children:t})]}),Ue=({asset:e,collection:t})=>{var i;const{formatNumber:r}=(0,H.Gb)(),{address:o,tokenId:a,tokenType:s,creator:d}=e,{totalSupply:l}=t,[,p]=(0,Ae.Z)(),m=(0,c.useCallback)((()=>{p(o??"")}),[o,p]);return(0,n.jsxs)($e,{children:[(0,n.jsx)(He,{header:"Contract address",body:(0,n.jsxs)(De,{onClick:m,children:[(0,F.Xn)(o,2)," ",(0,n.jsx)(Fe,{size:13})]})}),(0,n.jsx)(He,{header:"Token ID",body:a.length>9?(u=a,`${u.substring(0,4)}...${u.substring(u.length-4,u.length)}`):a}),(0,n.jsx)(He,{header:"Token standard",body:s}),(0,n.jsx)(He,{header:"Blockchain",body:"Ethereum"}),(0,n.jsx)(He,{header:"Total supply",body:`${r({input:l??0,type:H.sw.WholeNumber})}`}),(0,n.jsx)(He,{header:"Creator",body:(null===(i=d)||void 0===i?void 0:i.address)&&(0,n.jsx)(Pe,{href:`https://etherscan.io/address/${d.address}`,rel:"noopener noreferrer",target:"_blank",children:(0,F.Xn)(d.address,2)})})]});var u};var Le=i(37525),Oe=i(86082);const Ee=h.default.div.withConfig({displayName:"InfoContainer__Header",componentId:"sc-cc63c57f-0"})`
  display: flex;
  border-radius: ${({isOpen:e})=>e?"16px 16px 0px 0px":"16px"};
  justify-content: space-between;
  background-color: ${({theme:e})=>e.surface1};
  padding: 14px 20px;
  cursor: pointer;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 28px;
  width: 100%;
  align-items: center;

  &:hover {
    background-color: ${({theme:e})=>e.deprecated_stateOverlayHover};
  }

  &:active {
    background-color: ${({theme:e})=>e.deprecated_stateOverlayPressed};
  }

  transition: ${({theme:{transition:{duration:e,timing:t}}})=>h.css`background-color ${e.medium} ${t.ease}`};
`,ze=h.default.span.withConfig({displayName:"InfoContainer__PrimaryHeader",componentId:"sc-cc63c57f-1"})`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({theme:e})=>e.neutral1};
  font-weight: 535;
  line-height: 28px;
  font-size: 20px;
`,Be=h.default.span.withConfig({displayName:"InfoContainer__SecondaryHeader",componentId:"sc-cc63c57f-2"})`
  font-size: 12px;
  color: ${({theme:e})=>e.neutral2};
`,Re=h.default.span.withConfig({displayName:"InfoContainer__SecondaryHeaderContainer",componentId:"sc-cc63c57f-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  color: ${({theme:e})=>e.neutral1};
`,Me=h.default.div.withConfig({displayName:"InfoContainer__ContentContainer",componentId:"sc-cc63c57f-4"})`
  padding: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-top: none;
  border-radius: 0px 0px 16px 16px;
  background-color: ${({theme:e})=>e.surface1};
`,Ze=({children:e,primaryHeader:t,secondaryHeader:i,defaultOpen:r,...o})=>{const[a,s]=(0,c.useState)(!!r);return(0,n.jsxs)("div",{children:[(0,n.jsxs)(Ee,{...o,isOpen:a,onClick:()=>s(!a),children:[(0,n.jsxs)(ze,{children:[t," ",(0,n.jsx)(Be,{children:i})]}),(0,n.jsx)(Re,{children:a?(0,n.jsx)(Le.Z,{}):(0,n.jsx)(Oe.Z,{})})]}),a&&(0,n.jsx)(Me,{children:e})]})};var Ve=i(18806);const Xe=h.default.div.withConfig({displayName:"TraitsContainer__Grid",componentId:"sc-87c51ec6-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  max-width: 780px;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr 1fr;
  }
`,Ge=(0,h.default)(D.rU).withConfig({displayName:"TraitsContainer__GridItemContainer",componentId:"sc-87c51ec6-1"})`
  background-color: ${({theme:e})=>e.surface3};
  border-radius: 12px;
  cursor: pointer;
  padding: 12px;
  text-decoration: none;

  ${m.cR}
  min-width: 0;
`,We=h.default.div.withConfig({displayName:"TraitsContainer__TraitType",componentId:"sc-87c51ec6-2"})`
  color: ${({theme:e})=>e.neutral2};
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  white-space: nowrap;
  width: 100%;
`,qe=h.default.div.withConfig({displayName:"TraitsContainer__TraitValue",componentId:"sc-87c51ec6-3"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 16px;
  line-height: 24px;
  margin-top: 4px;
  display: inline-block;

  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`,Ye=({trait:e,collectionAddress:t})=>{const{trait_type:i,trait_value:r}=e,o=Ve.stringify({traits:[`("${i}","${r}")`]},{arrayFormat:"comma"});return(0,n.jsxs)(Ge,{to:`/nfts/collection/${t}?${o}`,children:[(0,n.jsx)(We,{children:i}),(0,n.jsx)(qe,{children:r})]})},Je=({asset:e})=>{var t;const i=(0,c.useMemo)((()=>{var t;return null===(t=e.traits)||void 0===t?void 0:t.sort(((e,t)=>e.trait_type.localeCompare(t.trait_type)))}),[e]);return(0,n.jsx)(Xe,{children:null===(t=i)||void 0===t?void 0:t.map((t=>(0,n.jsx)(Ye,{trait:t,collectionAddress:e.address},t.trait_type)))})},Qe=h.default.div.withConfig({displayName:"AssetDetails__AssetPriceDetailsContainer",componentId:"sc-ccdb75f2-0"})`
  margin-top: 20px;
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
`,Ke=h.default.div.withConfig({displayName:"AssetDetails__MediaContainer",componentId:"sc-ccdb75f2-1"})`
  display: flex;
  justify-content: center;
`,et=h.default.div.withConfig({displayName:"AssetDetails__Column",componentId:"sc-ccdb75f2-2"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 780px;
`,tt=h.default.a.withConfig({displayName:"AssetDetails__AddressTextLink",componentId:"sc-ccdb75f2-3"})`
  display: inline-block;
  color: ${({theme:e})=>e.neutral2};
  text-decoration: none;
  max-width: 100%;
  word-wrap: break-word;
  ${m.cR};
`,it=h.default.div.withConfig({displayName:"AssetDetails__SocialsContainer",componentId:"sc-ccdb75f2-4"})`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`,nt=h.default.p.withConfig({displayName:"AssetDetails__DescriptionText",componentId:"sc-ccdb75f2-5"})`
  margin-top: 8px;
  font-size: 14px;
  line-height: 20px;
`,rt=h.default.span.withConfig({displayName:"AssetDetails__RarityWrap",componentId:"sc-ccdb75f2-6"})`
  display: flex;
  color: ${({theme:e})=>e.neutral2};
  padding: 2px 4px;
  border-radius: 4px;
  align-items: center;
  gap: 4px;
`,ot=h.default.div.withConfig({displayName:"AssetDetails__EmptyActivitiesContainer",componentId:"sc-ccdb75f2-7"})`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({theme:e})=>e.neutral1};
  font-size: 28px;
  line-height: 36px;
  padding: 56px 0px;
`,at=(0,h.default)(D.rU).withConfig({displayName:"AssetDetails__Link",componentId:"sc-ccdb75f2-8"})`
  color: ${({theme:e})=>e.accent1};
  text-decoration: none;
  font-size: 14px;
  line-height: 16px;
  margin-top: 12px;
  cursor: pointer;
  ${m.cR};
`,st=h.default.div.withConfig({displayName:"AssetDetails__ActivitySelectContainer",componentId:"sc-ccdb75f2-9"})`
  display: flex;
  gap: 8px;
  margin-bottom: 34px;
  overflow-x: auto;
  ${m.Zl}

  @media (max-width: 720px) {
    padding-bottom: 8px;
  }
`,dt=h.default.div.withConfig({displayName:"AssetDetails__ContentNotAvailable",componentId:"sc-ccdb75f2-10"})`
  display: flex;
  background-color: ${({theme:e})=>e.surface1};
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 450px;
  height: 450px;
`,lt=h.default.div.withConfig({displayName:"AssetDetails__FilterBox",componentId:"sc-ccdb75f2-11"})`
  box-sizing: border-box;
  background-color: ${({backgroundColor:e})=>e};
  font-size: 14px;
  font-weight: 535;
  line-height: 14px;
  border: 1px solid ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  padding: 8px 16px;
  border-radius: 12px;
  cursor: pointer;
  box-sizing: border-box;
  ${m.cR};
`,ct=h.default.span.withConfig({displayName:"AssetDetails__ByText",componentId:"sc-ccdb75f2-12"})`
  font-size: 14px;
  line-height: 20px;
`,pt=h.default.img.withConfig({displayName:"AssetDetails__Img",componentId:"sc-ccdb75f2-13"})`
  background-color: white;
`,mt=h.default.div.withConfig({displayName:"AssetDetails__HoverImageContainer",componentId:"sc-ccdb75f2-14"})`
  display: flex;
  margin-right: 4px;
`,ut=h.default.div.withConfig({displayName:"AssetDetails__HoverContainer",componentId:"sc-ccdb75f2-15"})`
  display: flex;
`,ht=h.default.span.withConfig({displayName:"AssetDetails__ContainerText",componentId:"sc-ccdb75f2-16"})`
  font-size: 14px;
`,xt=({imageUrl:e,animationUrl:t,name:i,collectionName:r,dominantColor:o})=>(0,n.jsxs)(C.n,{position:"relative",display:"inline-block",alignSelf:"center",children:[(0,n.jsx)(C.n,{as:"audio",className:"_1yohfdwd",width:"292",controls:!0,src:t}),(0,n.jsx)("img",{className:Ne,src:e,alt:i||r,style:{"--shadow":`rgba(${o.join(", ")}, 0.5)`,minWidth:"300px",minHeight:"300px"}})]}),ft={[S.n$.Listing]:!0,[S.n$.Sale]:!0,[S.n$.Transfer]:!1,[S.n$.CancelListing]:!1};var gt;!function(e){e.Audio="audio",e.Video="video",e.Image="image",e.Embed="embed"}(gt||(gt={}));const yt=({mediaType:e,asset:t,dominantColor:i})=>{const r={"--shadow":`rgba(${i.join(", ")}, 0.5)`};switch(e){case gt.Video:return(0,n.jsx)("video",{src:t.animationUrl,className:Ne,autoPlay:!0,controls:!0,muted:!0,loop:!0,style:r});case gt.Image:return(0,n.jsx)("img",{className:Ne,src:t.imageUrl,alt:t.name||t.collectionName,style:r});case gt.Audio:return(0,n.jsx)(xt,{...t,dominantColor:i});case gt.Embed:return(0,n.jsx)("div",{className:"_1yohfdw2",children:(0,n.jsx)("iframe",{title:t.name??`${t.collectionName} #${t.tokenId}`,src:t.animationUrl,className:"_1yohfdw3 _1yohfdw1 rgw6ez819 rgw6ez1dr rgw6ez53",style:r,frameBorder:0,height:"100%",width:"100%",sandbox:"allow-scripts",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},vt=({asset:e,collection:t})=>{var i,r,o,a,s,d,l,m;const{formatNumberOrString:u}=(0,H.Gb)(),[h]=(0,c.useState)([0,0,0]),{rarityProvider:x}=(0,c.useMemo)((()=>{var t,i,n;return e.rarity?{rarityProvider:null===(n=e)||void 0===n||null===(i=n.rarity)||void 0===i||null===(t=i.providers)||void 0===t?void 0:t.find((({provider:t})=>{var i;return t===(null===(i=e.rarity)||void 0===i?void 0:i.primaryProvider)}))}:{}}),[e.rarity]),f=(0,c.useMemo)((()=>(0,se.F)(e.animationUrl??"")?gt.Audio:(0,de.W)(e.animationUrl??"")?gt.Video:e.animationUrl?gt.Embed:gt.Image),[e]),{address:C,tokenId:_}=e,{nftActivity:N}=(0,v.m)({activityTypes:[p.y3y.Sale],address:C,tokenId:_},1,"no-cache"),A=null===(r=N)||void 0===r||null===(i=r[0])||void 0===i?void 0:i.price,k=A?u({input:parseFloat(A),type:H.sw.NFTToken}):void 0,[$,T]=(0,c.useReducer)(j.YQ,ft),D=(0,c.useCallback)((function({eventType:e}){const t=$[e];return(0,n.jsx)(lt,{backgroundColor:t?b.gR.color.surface1:b.Z4.colors.surface3,onClick:()=>T({eventType:e}),children:e===S.n$.CancelListing?"Cancellations":e.charAt(0)+e.slice(1).toLowerCase()+"s"})}),[$]),{nftActivity:P,hasNext:U,loadMore:L,loading:O,error:E}=(0,v.m)({activityTypes:Object.keys($).map((e=>e)).filter((e=>$[e])),address:C,tokenId:_},25),z=null===(s=e)||void 0===s||null===(a=s.rarity)||void 0===a||null===(o=a.providers)||void 0===o?void 0:o[0],[B,R]=(0,c.useState)(!1);return(0,n.jsxs)(et,{children:[(0,n.jsx)(Ke,{children:void 0===e.imageUrl||B?(0,n.jsx)(dt,{children:"Content not available yet"}):f===gt.Image?(0,n.jsx)(pt,{className:Ne,src:e.imageUrl,alt:e.name||t.collectionName,onError:()=>R(!0)}):(0,n.jsx)(yt,{asset:e,mediaType:f,dominantColor:h})}),(0,n.jsx)(Qe,{children:(0,n.jsx)(ae,{asset:e,collection:t})}),e.traits&&(0,n.jsx)(Ze,{"data-testid":"nft-details-traits",primaryHeader:"Traits",defaultOpen:!0,secondaryHeader:x&&z&&z.score?(0,n.jsx)(y.ud,{text:(0,n.jsxs)(ut,{children:[(0,n.jsx)(mt,{children:(0,n.jsx)("img",{src:"/nft/svgs/gem.svg",alt:"cardLogo",width:16})}),(0,n.jsx)(ht,{children:"Ranking by Rarity Sniper"})]}),placement:"top",children:(0,n.jsxs)(rt,{children:["Rarity: ",u({input:z.score,type:H.sw.WholeNumber})]})}):null,children:(0,n.jsx)(Je,{asset:e})}),(0,n.jsx)(Ze,{primaryHeader:"Activity",defaultOpen:!0,secondaryHeader:k?`Last Sale: ${k} ETH`:void 0,"data-testid":"nft-details-activity",children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(st,{$isHorizontalScroll:!0,children:[(0,n.jsx)(D,{eventType:S.n$.Listing}),(0,n.jsx)(D,{eventType:S.n$.Sale}),(0,n.jsx)(D,{eventType:S.n$.Transfer}),(0,n.jsx)(D,{eventType:S.n$.CancelListing})]}),O?(0,n.jsx)(_e,{rowCount:10}):P&&P.length>0?(0,n.jsx)(le.Z,{next:L,hasMore:!!U,loader:O&&(0,n.jsx)(w.M5,{children:(0,n.jsx)(I,{})}),dataLength:(null===(d=P)||void 0===d?void 0:d.length)??0,scrollableTarget:"activityContainer",children:(0,n.jsx)(Ie,{events:P})}):(0,n.jsx)(n.Fragment,{children:!E&&P&&(0,n.jsxs)(ot,{children:[(0,n.jsx)("div",{children:"No activities yet"}),(0,n.jsx)(at,{to:`/nfts/collection/${e.address}`,children:"View collection items"})," "]})})]})}),(0,n.jsx)(Ze,{primaryHeader:"Description",defaultOpen:!0,secondaryHeader:null,"data-testid":"nft-details-description",children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ct,{children:"By "}),(null===(l=e)||void 0===l?void 0:l.creator)&&(null===(m=e.creator)||void 0===m?void 0:m.address)&&(0,n.jsx)(tt,{href:`https://etherscan.io/address/${e.creator.address}`,target:"_blank",rel:"noopener noreferrer",children:(0,F.Xn)(e.creator.address,2)}),(0,n.jsx)(nt,{"data-testid":"nft-details-description-text",children:t.collectionDescription}),(0,n.jsxs)(it,{children:[t.externalUrl&&(0,n.jsx)(g,{name:"Website",link:`${t.externalUrl}`}),t.twitterUrl&&(0,n.jsx)(g,{name:"Twitter",link:`https://twitter.com/${t.twitterUrl}`}),t.discordUrl&&(0,n.jsx)(g,{name:"Discord",link:t.discordUrl})]})]})}),(0,n.jsx)(Ze,{primaryHeader:"Details",defaultOpen:!0,secondaryHeader:null,"data-testid":"nft-details-asset-details",children:(0,n.jsx)(Ue,{asset:e,collection:t})})]})};var Ct=i(44591),wt=i(63415),jt=i(40976);const bt="960px",_t=(0,h.default)(pe.X).withConfig({displayName:"AssetDetailsLoading__Title",componentId:"sc-d1f2fecc-0"})`
  height: 16px;
  width: 136px;
`,It=(0,h.default)(pe.X).withConfig({displayName:"AssetDetailsLoading__SubTitle",componentId:"sc-d1f2fecc-1"})`
  height: 40px;
  width: 200px;
  margin-top: 8px;

  @media (max-width: ${bt}) {
    width: 100%;
  }
`,Nt=(0,h.default)(pe.X).withConfig({displayName:"AssetDetailsLoading__Seller",componentId:"sc-d1f2fecc-2"})`
  height: 16px;
  width: 40px;
`,At=(0,h.default)(pe.X).withConfig({displayName:"AssetDetailsLoading__SellerAddress",componentId:"sc-d1f2fecc-3"})`
  margin-top: 4px;
  height: 24px;
  width: 95px;
`,kt=(0,h.default)(pe.X).withConfig({displayName:"AssetDetailsLoading__PrimaryBody",componentId:"sc-d1f2fecc-4"})`
  width: 100%;
  height: 260px;
`,$t=(0,h.default)(pe.X).withConfig({displayName:"AssetDetailsLoading__ActivityLoader",componentId:"sc-d1f2fecc-5"})`
  width: 100%;
  height: 428px;
`,Tt=(0,h.default)(Ct.ZP).withConfig({displayName:"AssetDetailsLoading__PrimaryContent",componentId:"sc-d1f2fecc-6"})`
  max-width: 780px;
  margin-top: 28px;
  width: 100%;
  gap: 28px;

  @media (max-width: ${bt}) {
    max-width: 100%;
  }
`,St=h.default.div.withConfig({displayName:"AssetDetailsLoading__LoaderContainer",componentId:"sc-d1f2fecc-7"})`
  width: 100%;
  padding-top: 200px;
  padding-bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: pink;
`,Dt=(0,h.default)(pe.X).withConfig({displayName:"AssetDetailsLoading__BuyNowContainer",componentId:"sc-d1f2fecc-8"})`
  height: 180px;
  width: 360px;

  @media (max-width: ${bt}) {
    width: 100%;
  }
`,Pt=h.default.div.withConfig({displayName:"AssetDetailsLoading__LoadingContainer",componentId:"sc-d1f2fecc-9"})`
  display: flex;
  margin-top: 48px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1296px;

  ${jt.bc}

  @media (max-width: ${bt}) {
    max-width: 100%;
    margin-top: 0;
  }
`,Ft=(0,h.default)(Ct.ZP).withConfig({displayName:"AssetDetailsLoading__StyledColumn",componentId:"sc-d1f2fecc-10"})`
  max-width: 780px;
  width: 100%;

  @media (max-width: ${bt}) {
    max-width: 100%;
  }
`,Ht=(0,h.default)(Ct.ZP).withConfig({displayName:"AssetDetailsLoading__BuyNowLoadingDesktop",componentId:"sc-d1f2fecc-11"})`
  margin-top: 20px;
  padding-left: 60px;
  gap: 24px;

  @media (max-width: ${bt}) {
    display: none;
  }
`,Ut=(0,h.default)(Ct.ZP).withConfig({displayName:"AssetDetailsLoading__BuyNowLoadingMobile",componentId:"sc-d1f2fecc-12"})`
  display: none;
  margin-top: 16px;
  gap: 24px;

  @media (max-width: ${bt}) {
    display: flex;
  }
`,Lt=()=>{const e=(0,h.useTheme)();return(0,n.jsxs)(Pt,{children:[(0,n.jsxs)(Ft,{children:[(0,n.jsx)(St,{children:(0,n.jsx)(wt.ZP,{stroke:e.accent1,size:"40px"})}),(0,n.jsxs)(Ut,{children:[(0,n.jsxs)(Ct.ZP,{children:[(0,n.jsx)(_t,{}),(0,n.jsx)(It,{})]}),(0,n.jsx)(Dt,{}),(0,n.jsxs)(Ct.ZP,{children:[(0,n.jsx)(Nt,{}),(0,n.jsx)(At,{})]})]}),(0,n.jsxs)(Tt,{children:[(0,n.jsx)(kt,{}),(0,n.jsx)($t,{}),(0,n.jsx)(kt,{}),(0,n.jsx)(kt,{})]})]}),(0,n.jsxs)(Ht,{children:[(0,n.jsxs)(Ct.ZP,{children:[(0,n.jsx)(_t,{}),(0,n.jsx)(It,{})]}),(0,n.jsx)(Dt,{}),(0,n.jsxs)(Ct.ZP,{children:[(0,n.jsx)(Nt,{}),(0,n.jsx)(At,{})]})]})]})};var Ot=i(437);const Et=h.default.div.withConfig({displayName:"Asset__AssetContainer",componentId:"sc-d638ad43-0"})`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 60px;
  padding: 48px 48px 0 48px;

  @media (max-width: 960px) {
    padding: 40px 40px 0 40px;
  }
  @media (max-width: 540px) {
    padding: 20px 20px 0 20px;
  }
  @media (max-width: 420px) {
    padding: 16px 16px 0 16px;
  }
`,zt=h.default.div.withConfig({displayName:"Asset__AssetPriceDetailsContainer",componentId:"sc-d638ad43-1"})`
  min-width: 360px;
  position: relative;

  @media (max-width: 960px) {
    display: none;
  }
`,Bt=()=>{const{tokenId:e="",contractAddress:t=""}=(0,P.UO)(),{data:i,loading:d}=function(e,t){var i,n,r,o,a,d,m,u,h,x,f;const{data:g,loading:y}=(0,p.xw4)({variables:{address:e,tokenId:t}}),v=null===(r=g)||void 0===r||null===(n=r.nftAssets)||void 0===n||null===(i=n.edges[0])||void 0===i?void 0:i.node,C=null===(o=v)||void 0===o?void 0:o.collection,w=null===(m=v)||void 0===m||null===(d=m.listings)||void 0===d||null===(a=d.edges[0])||void 0===a?void 0:a.node,j=(0,s.parseEther)((0,l.K3)((null===(x=w)||void 0===x||null===(h=x.price)||void 0===h||null===(u=h.value)||void 0===u?void 0:u.toString())??"0")).toString();return(0,c.useMemo)((()=>{var i,n,r,o,a,s,d,l,c,p,m,u,h,x,f,g,b,_,I,N,A,k,$,T,S,D,P,F,H,U,L,O,E,z,B,R,M,Z,V,X,G,W,q;return{data:[{id:null===(i=v)||void 0===i?void 0:i.id,address:e,notForSale:null===(null===(n=v)||void 0===n?void 0:n.listings),collectionName:null===(o=v)||void 0===o||null===(r=o.collection)||void 0===r?void 0:r.name,collectionSymbol:null===(d=v)||void 0===d||null===(s=d.collection)||void 0===s||null===(a=s.image)||void 0===a?void 0:a.url,imageUrl:null===(c=v)||void 0===c||null===(l=c.image)||void 0===l?void 0:l.url,animationUrl:null===(p=v)||void 0===p?void 0:p.animationUrl,marketplace:null===(m=w)||void 0===m?void 0:m.marketplace.toLowerCase(),name:null===(u=v)||void 0===u?void 0:u.name,priceInfo:{ETHPrice:j,baseAsset:"ETH",baseDecimals:"18",basePrice:j},susFlag:null===(h=v)||void 0===h?void 0:h.suspiciousFlag,sellorders:null===(f=v)||void 0===f||null===(x=f.listings)||void 0===x?void 0:x.edges.map((e=>({...e.node,protocolParameters:e.node.protocolParameters?JSON.parse(e.node.protocolParameters.toString()):void 0}))),smallImageUrl:null===(b=v)||void 0===b||null===(g=b.smallImage)||void 0===g?void 0:g.url,tokenId:t,tokenType:null===(A=v)||void 0===A||null===(N=A.collection)||void 0===N||null===(I=N.nftContracts)||void 0===I||null===(_=I[0])||void 0===_?void 0:_.standard,collectionIsVerified:null===($=v)||void 0===$||null===(k=$.collection)||void 0===k?void 0:k.isVerified,rarity:{primaryProvider:"Rarity Sniper",providers:null===(S=v)||void 0===S||null===(T=S.rarities)||void 0===T?void 0:T.map((e=>({rank:e.rank,score:e.score,provider:"Rarity Sniper"})))},ownerAddress:null===(D=v)||void 0===D?void 0:D.ownerAddress,creator:{profile_img_url:(null===(H=v)||void 0===H||null===(F=H.creator)||void 0===F||null===(P=F.profileImage)||void 0===P?void 0:P.url)??"",address:(null===(L=v)||void 0===L||null===(U=L.creator)||void 0===U?void 0:U.address)??""},metadataUrl:(null===(O=v)||void 0===O?void 0:O.metadataUrl)??"",traits:null===(z=v)||void 0===z||null===(E=z.traits)||void 0===E?void 0:E.map((e=>({trait_type:e.name??"",trait_value:e.value??""})))},{collectionDescription:null===(B=C)||void 0===B?void 0:B.description,collectionImageUrl:null===(M=C)||void 0===M||null===(R=M.image)||void 0===R?void 0:R.url,collectionName:null===(Z=C)||void 0===Z?void 0:Z.name,isVerified:null===(V=C)||void 0===V?void 0:V.isVerified,totalSupply:null===(X=C)||void 0===X?void 0:X.numAssets,twitterUrl:null===(G=C)||void 0===G?void 0:G.twitterName,discordUrl:null===(W=C)||void 0===W?void 0:W.discordUrl,externalUrl:null===(q=C)||void 0===q?void 0:q.homepageUrl}],loading:y}}),[e,v,C,j,null===(f=w)||void 0===f?void 0:f.marketplace,y,t])}(t,e),[m,u]=i;return l._P.includes(t)?(0,n.jsx)(P.Fg,{to:"/nfts",replace:!0}):d?(0,n.jsx)(Lt,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ot.Helmet,{children:(0,n.jsxs)("title",{children:[m.name??""," ",m.name?"|":""," ",u.collectionName??r.ag._({id:"BM5Ajj"})," on Nexis"]})}),(0,n.jsx)(a.fM,{page:o.yJ.NFT_DETAILS_PAGE,properties:{collection_address:t,token_id:e},shouldLogImpression:!0,children:m&&u?(0,n.jsxs)(Et,{children:[(0,n.jsx)(vt,{collection:u,asset:m}),(0,n.jsx)(zt,{children:(0,n.jsx)(ae,{collection:u,asset:m})})]}):null})]})}}}]);
//# sourceMappingURL=386.87459a26.chunk.js.map