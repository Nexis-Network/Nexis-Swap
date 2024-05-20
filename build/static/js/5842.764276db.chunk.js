"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5842],{46184:(e,r,t)=>{t.d(r,{R_:()=>n,gS:()=>i,xr:()=>a,oj:()=>s,Co:()=>o,Yb:()=>l,fb:()=>d,hX:()=>c,rG:()=>g,FC:()=>u,rZ:()=>m});t(6155),t(49484);var n="e2d0r6e rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez4b9 rgw6ez1dr rgw6ez47l rgw6ez2cx",i="e2d0r6h e2d0r6g rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez2e3 rgw6ez2jl rgw6ez2or rgw6ez289 rgw6ez173 rgw6ez4ux rgw6ez88d rgw6ez80x rgw6ez8e1",a="rgw6ez14f rgw6ez1bf rgw6ez80p",s="rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ezfr rgw6ez8bh rgw6ez45l rgw6ez45r",o="e2d0r6a rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez3t3",l="e2d0r63 e2d0r61 rgw6ez459 rgw6ez2d3 rgw6ez2e4 rgw6ez2il rgw6ez2jm rgw6ez2or rgw6ez289 rgw6ez4b9 rgw6ez7zd rgw6ez895 rgw6ez7zp rgw6ez59f rgw6ez5yr",d="e2d0r6c rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4bf",c="e2d0r6l rgw6ezd3 rgw6ezb9 rgw6ezdr rgw6ez2e3 rgw6ez2jl rgw6ez2or rgw6ez289 rgw6ez4qr rgw6ez4b9 rgw6ez80x rgw6ez7zd",g="e2d0r65 e2d0r61 rgw6ez459 rgw6ez2e3 rgw6ez2jl rgw6ez27x rgw6ez4bf rgw6ezb3 rgw6ezd9",u="e2d0r6n rgw6ez2d3 rgw6ez2il rgw6ez44r rgw6ez80l rgw6ez18x rgw6ez16x rgw6ez4b9 rgw6ez4qr rgw6ezax rgw6ezd9 rgw6ez7zd",m="e2d0r6j e2d0r6g rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez2e3 rgw6ez2jl rgw6ez2or rgw6ez289 rgw6ez173 rgw6ez4ux rgw6ez88d rgw6ez80x rgw6ez8e1 rgw6ez4d3 rgw6ez7zd"},74377:(e,r,t)=>{t.d(r,{m:()=>o});var n=t(25648),i=t(78129),a=t(45779),s=t(87685);function o(e,r,t){var n,o,l;const{data:d,loading:c,fetchMore:g,error:u}=(0,s.hEC)({variables:{filter:e,first:r},fetchPolicy:t}),m=null===(l=d)||void 0===l||null===(o=l.nftActivity)||void 0===o||null===(n=o.pageInfo)||void 0===n?void 0:n.hasNextPage,v=(0,a.useCallback)((()=>{var e,r,t;return g({variables:{after:null===(t=d)||void 0===t||null===(r=t.nftActivity)||void 0===r||null===(e=r.pageInfo)||void 0===e?void 0:e.endCursor}})}),[d,g]),p=(0,a.useMemo)((()=>{var e,r,t;return null===(t=d)||void 0===t||null===(r=t.nftActivity)||void 0===r||null===(e=r.edges)||void 0===e?void 0:e.map((e=>{var r,t,n,a,s,o,l,d,c,g,u,m,v,p,x,h,w;const f=null===(r=e)||void 0===r?void 0:r.node,y=null===(t=f)||void 0===t?void 0:t.asset;return{collectionAddress:f.address,tokenId:f.tokenId,tokenMetadata:{name:null===(n=y)||void 0===n?void 0:n.name,imageUrl:null===(s=y)||void 0===s||null===(a=s.image)||void 0===a?void 0:a.url,smallImageUrl:null===(l=y)||void 0===l||null===(o=l.smallImage)||void 0===o?void 0:o.url,metadataUrl:null===(d=y)||void 0===d?void 0:d.metadataUrl,rarity:{primaryProvider:"Rarity Sniper",providers:null===(g=y)||void 0===g||null===(c=g.rarities)||void 0===c?void 0:c.map((e=>({...e,provider:"Rarity Sniper"})))},suspiciousFlag:null===(u=y)||void 0===u?void 0:u.suspiciousFlag,standard:null===(v=y)||void 0===v||null===(m=v.nftContract)||void 0===m?void 0:m.standard},eventType:f.type,marketplace:f.marketplace,fromAddress:f.fromAddress,toAddress:f.toAddress,transactionHash:f.transactionHash,orderStatus:f.orderStatus,price:(0,i.K3)((null===(p=f.price)||void 0===p?void 0:p.value)??0),symbol:null===(w=y)||void 0===w||null===(h=w.collection)||void 0===h||null===(x=h.image)||void 0===x?void 0:x.url,quantity:f.quantity,url:f.url,eventTimestamp:1e3*f.timestamp}}))}),[d]);return(0,a.useMemo)((()=>({nftActivity:p,hasNext:m,loadMore:v,loading:c,error:u})),[m,v,c,p,u])}n.ZP`
  query NftActivity($filter: NftActivityFilterInput, $after: String, $first: Int) {
    nftActivity(filter: $filter, after: $after, first: $first) {
      edges {
        node {
          id
          address
          tokenId
          asset {
            id
            metadataUrl
            image {
              id
              url
            }
            smallImage {
              id
              url
            }
            name
            rarities {
              id
              provider
              rank
              score
            }
            suspiciousFlag
            nftContract {
              id
              standard
            }
            collection {
              id
              image {
                id
                url
              }
            }
          }
          type
          marketplace
          fromAddress
          toAddress
          transactionHash
          price {
            id
            value
          }
          orderStatus
          quantity
          url
          timestamp
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`},35842:(e,r,t)=>{t.d(r,{cS:()=>C,VJ:()=>b,YQ:()=>T});var n=t(92936),i=t(68588),a=t(74377),s=t(65851),o=t(15288),l=t(33426),d=t(47263),c=t(45779),g=t(10581),u=t(43454),m=t(61152),v=t(46184),p=t(82284);t(6155),t(45814);const x=()=>(0,n.jsx)(s.n,{className:"_2kdvfw1 rgw6ez14f rgw6ez1bf rgw6ez80p"}),h=()=>(0,n.jsx)(s.n,{className:"fbjar43 _2kdvfw1 rgw6ez18x rgw6ez81x"}),w=()=>(0,n.jsxs)(s.n,{as:"a",className:v.Yb,children:[(0,n.jsxs)(o.X2,{gap:"16",children:[(0,n.jsx)(x,{}),(0,n.jsx)(h,{})]}),(0,n.jsx)(o.X2,{children:(0,n.jsx)(h,{})}),(0,n.jsx)(o.X2,{display:{sm:"none",md:"flex"},children:(0,n.jsx)(h,{})}),(0,n.jsx)(o.X2,{display:{sm:"none",lg:"flex"},children:(0,n.jsx)(h,{})}),(0,n.jsx)(o.X2,{display:{sm:"none",xl:"flex"},children:(0,n.jsx)(h,{})})]}),f=({rowCount:e})=>(0,n.jsx)(n.Fragment,{children:[...Array(e)].map(((e,r)=>(0,n.jsx)(w,{},r)))}),y=()=>(0,n.jsxs)(o.sg,{marginTop:"36",children:[(0,n.jsx)(b,{}),(0,n.jsx)(f,{rowCount:10})]});var z;!function(e){e.Item="Item",e.Event="Event",e.Price="Price",e.By="By",e.To="To"}(z||(z={}));const j=m.default.div.withConfig({displayName:"Activity__FilterBox",componentId:"sc-1d0f5cfb-0"})`
  display: flex;
  color: ${({isActive:e,theme:r})=>r.neutral1};
  background: ${({isActive:e,theme:r})=>e?r.surface3:r.surface1};
  border: ${({isActive:e,theme:r})=>`1px solid ${r.surface3}`};
  ${i.cR};
`,b=()=>(0,n.jsxs)(s.n,{className:v.rG,children:[(0,n.jsx)(s.n,{children:z.Item}),(0,n.jsx)(s.n,{children:z.Event}),(0,n.jsx)(s.n,{display:{sm:"none",md:"block"},children:z.Price}),(0,n.jsx)(s.n,{display:{sm:"none",xl:"block"},children:z.By}),(0,n.jsx)(s.n,{display:{sm:"none",xxl:"block"},children:z.To})]}),k={[d.n$.Listing]:!0,[d.n$.Sale]:!0,[d.n$.Transfer]:!1,[d.n$.CancelListing]:!1},T=(e,r)=>({...e,[r.eventType]:!e[r.eventType]}),C=({contractAddress:e,rarityVerified:r,collectionName:t,chainId:i})=>{var m,x;const[h,w]=(0,c.useReducer)(T,k),{nftActivity:z,hasNext:C,loadMore:I,loading:A}=(0,a.m)({activityTypes:Object.keys(h).map((e=>e)).filter((e=>h[e])),address:e},25),N=C&&(null===(m=z)||void 0===m?void 0:m.length),M=(0,l.cP)((e=>e.itemsInBag)),$=(0,l.cP)((e=>e.addAssetsToBag)),S=(0,l.cP)((e=>e.removeAssetsFromBag)),F=(0,l.cP)((e=>e.bagExpanded)),E=(0,l.cP)((e=>e.toggleBag)),P=(0,l.dD)(),_=(0,l.$N)(),L=(0,c.useCallback)((function({eventType:e}){const r=h[e];return(0,n.jsx)(j,{className:v.hX,isActive:r,onClick:()=>w({eventType:e}),children:e.charAt(0)+e.slice(1).toLowerCase()+"s"})}),[h]);return(0,n.jsxs)(s.n,{marginLeft:{sm:"16",md:"48"},children:[(0,n.jsxs)(o.X2,{gap:"8",paddingTop:{sm:"0",md:"16"},children:[(0,n.jsx)(L,{eventType:d.n$.Listing}),(0,n.jsx)(L,{eventType:d.n$.Sale}),(0,n.jsx)(L,{eventType:d.n$.Transfer})]}),A?(0,n.jsx)(y,{}):z&&(0,n.jsxs)(o.sg,{marginTop:"36",children:[(0,n.jsx)(b,{}),(0,n.jsx)(g.Z,{next:I,hasMore:!!C,loader:N?(0,n.jsx)(f,{rowCount:2}):null,dataLength:(null===(x=z)||void 0===x?void 0:x.length)??0,style:{overflow:"unset"},children:z.map(((e,a)=>e.eventType&&(0,n.jsxs)(s.n,{as:u.rU,"data-testid":"nft-activity-row",to:`/nfts/asset/${e.collectionAddress}/${e.tokenId}?origin=activity`,className:v.Yb,children:[(0,n.jsx)(p.Et,{event:e,rarityVerified:r,collectionName:t,eventTimestamp:e.eventTimestamp,isMobile:P}),(0,n.jsx)(p.VM,{eventType:e.eventType,eventTimestamp:e.eventTimestamp,eventTransactionHash:e.transactionHash,price:e.price,isMobile:P}),(0,n.jsx)(p.Ic,{marketplace:e.marketplace,price:e.price}),(0,n.jsx)(p.UM,{address:e.fromAddress,chainId:i}),(0,n.jsx)(p.UM,{address:e.toAddress,chainId:i,desktopLBreakpoint:!0}),(0,n.jsx)(p.Dg,{event:e,collectionName:t,selectAsset:$,removeAsset:S,itemsInBag:M,cartExpanded:F,toggleCart:E,isMobile:P,ethPriceInUSD:_})]},a)))})]})]})}},82284:(e,r,t)=>{t.d(r,{UM:()=>I,Dg:()=>C,VM:()=>F,Et:()=>L,Ic:()=>N});var n=t(92936),i=t(31017),a=t(5985),s=t(76078),o=t(47583),l=t(15824),d=t(87685),c=t(65851),g=t(15288),u=t(58690),m=t(47263),v=t(78129),p=t(80182);var x=t(49114),h=t(45779),w=t(61152),f=t(54972),y=t(13446),z=t(66136),j=t(54703),b=t(46184);const k=(0,w.default)(f.dL).withConfig({displayName:"ActivityCells__AddressLink",componentId:"sc-b080fe9e-0"})`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  font-weight: 485;
  line-height: 20px;
  a {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
  }
  a:hover {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
    opacity: ${({theme:e})=>e.opacity.hover};
  }
  a:focus {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
    opacity: ${({theme:e})=>e.opacity.click};
  }
`,T=(e,r,t)=>{if(r)return t?(0,n.jsx)(i.cC,{id:"t/YqKh"}):(0,n.jsx)(i.cC,{id:"2RtVHm"});switch(e){case d.iFo.Executed:return(0,n.jsx)(i.cC,{id:"s9KGXU"});case d.iFo.Cancelled:return(0,n.jsx)(i.cC,{id:"vv7kpg"});case d.iFo.Expired:return(0,n.jsx)(i.cC,{id:"M1RnFv"});case d.iFo.Valid:return(0,n.jsx)(i.cC,{id:"jqzUyM"});default:return null}},C=({event:e,collectionName:r,selectAsset:t,removeAsset:i,itemsInBag:s,cartExpanded:l,toggleCart:u,isMobile:m,ethPriceInUSD:v})=>{const x=(0,h.useMemo)((()=>((e,r,t)=>{var n,i,a,s,o;const l=e.price?parseFloat(e.price)*t:"0",d=e.price?(0,p.parseEther)(e.price):"";return{address:e.collectionAddress,collectionName:r,imageUrl:null===(n=e.tokenMetadata)||void 0===n?void 0:n.imageUrl,marketplace:e.marketplace,name:null===(i=e.tokenMetadata)||void 0===i?void 0:i.name,tokenId:e.tokenId,susFlag:null===(a=e.tokenMetadata)||void 0===a?void 0:a.suspiciousFlag,smallImageUrl:null===(s=e.tokenMetadata)||void 0===s?void 0:s.smallImageUrl,collectionSymbol:e.symbol,priceInfo:{USDPrice:l,ETHPrice:d,basePrice:d,baseAsset:"ETH"},tokenType:null===(o=e.tokenMetadata)||void 0===o?void 0:o.standard}})(e,r,v)),[e,r,v]),w=(0,h.useMemo)((()=>s.some((e=>x.tokenId===e.asset.tokenId&&x.address===e.asset.address))),[x,s]),f=((e,r)=>{if(!r||!e)return!1;const t=Object.keys(d.WfB).map((e=>e.toLowerCase())),n=e===d.iFo.Valid,i=t.includes(r.toLowerCase());return n&&i})(e.orderStatus,e.marketplace),y=(0,o.oO)({page:a.yJ.NFT_COLLECTION_PAGE}),z={collection_address:x.address,token_id:x.tokenId,token_type:x.tokenType,...y};return(0,n.jsx)(g.sg,{display:{sm:"none",lg:"flex"},height:"full",justifyContent:"center",marginX:"auto",children:e.eventType===d.y3y.Listing&&e.orderStatus?(0,n.jsx)(c.n,{as:"button",className:f&&w?b.rZ:b.gS,onClick:e=>{e.preventDefault(),w?i([x]):t([x]),!w&&!l&&!m&&u(),!w&&(0,o._P)(a.Yz.NFT_BUY_ADDED,{eventProperties:z})},disabled:!f,children:T(e.orderStatus,f,w)}):"-"})},I=({address:e,desktopLBreakpoint:r,chainId:t})=>(0,n.jsx)(g.sg,{display:{sm:"none",xl:r?"none":"flex",xxl:"flex"},className:b.R_,children:(0,n.jsx)(k,{href:(0,j.E)(t??s.ChainId.MAINNET,e??"",j.r.ADDRESS),style:{textDecoration:"none"},children:(0,n.jsx)(c.n,{onClick:e=>e.stopPropagation(),children:e?(0,y.Xn)(e,2):"-"})})}),A=({price:e})=>(0,n.jsx)(l.ud,{text:(0,n.jsx)(c.n,{textAlign:"left",fontSize:"14",fontWeight:"book",color:"neutral2",children:`${e} ETH`}),placement:"top",children:(0,n.jsx)(c.n,{children:`${e.substring(0,5)}... ETH`})}),N=({marketplace:e,price:r})=>{const{formatNumberOrString:t}=(0,z.Gb)(),i=(0,h.useMemo)((()=>{var e;return r?t({input:parseFloat(null===(e=r)||void 0===e?void 0:e.toString()),type:z.sw.NFTToken}):null}),[t,r]);return(0,n.jsxs)(g.X2,{display:{sm:"none",md:"flex"},gap:"8",children:[e&&(0,v.Dp)(e,"16"),i?i.length>6?(0,n.jsx)(A,{price:i}):(0,n.jsx)(n.Fragment,{children:`${i} ETH`}):(0,n.jsx)(n.Fragment,{children:"-"})]})},M=e=>{switch(e){case d.y3y.Listing:return(0,n.jsx)(u.TV,{width:16,height:16});case d.y3y.Sale:return(0,n.jsx)(u.QF,{width:16,height:16});case d.y3y.Transfer:return(0,n.jsx)(u.dj,{width:16,height:16});case d.y3y.CancelListing:return(0,n.jsx)(u.Io,{width:16,height:16});default:return null}},$=({transactionHash:e})=>(0,n.jsx)(g.X2,{onClick:r=>((e,r)=>{e.preventDefault(),window.open(`https://etherscan.io/tx/${r}`,"_blank","noopener,noreferrer")})(r,e),marginLeft:"4",children:(0,n.jsx)(u.Bu,{})}),S=e=>({[d.y3y.Listing]:"deprecated_gold",[d.y3y.Sale]:"success",[d.y3y.Transfer]:"deprecated_violet",[d.y3y.CancelListing]:"critical"}[e]),F=({eventType:e,eventTimestamp:r,eventTransactionHash:t,eventOnly:i,price:a,isMobile:s})=>{const{formatNumberOrString:o}=(0,z.Gb)(),l=(0,h.useMemo)((()=>{var e;return a?o({input:parseFloat(null===(e=a)||void 0===e?void 0:e.toString()),type:z.sw.NFTToken}):null}),[o,a]);return(0,n.jsxs)(g.sg,{height:"full",justifyContent:"center",gap:"4",children:[(0,n.jsxs)(g.X2,{className:b.Co,color:S(e),children:[M(e),m.ze[e]]}),r&&!s&&!i&&(0,n.jsxs)(g.X2,{className:b.fb,children:[(0,x.F)(r.toString()),t&&(0,n.jsx)($,{transactionHash:t})]}),s&&a&&(0,n.jsx)(g.X2,{fontSize:"16",fontWeight:"book",color:"neutral1",children:`${l} ETH`})]})},E=()=>(0,n.jsx)(c.n,{position:"relative",style:{background:"#24272e"},className:b.xr,children:(0,n.jsxs)(c.n,{position:"absolute",textAlign:"center",left:"1/2",top:"1/2",style:{transform:"translate3d(-50%, -50%, 0)"},color:"gray500",fontSize:"12",fontWeight:"book",children:["Image",(0,n.jsx)("br",{}),"not",(0,n.jsx)("br",{}),"available"]})}),P=({rarity:e,collectionName:r,rarityVerified:t})=>{var i;const{formatNumber:a}=(0,z.Gb)(),s=e.rank||(null===(i=e.providers)||void 0===i?void 0:i[0].rank);return s?(0,n.jsx)(c.n,{children:(0,n.jsx)(l.ud,{text:(0,n.jsxs)(g.X2,{children:[(0,n.jsx)(c.n,{display:"flex",marginRight:"4",children:(0,n.jsx)("img",{src:"/nft/svgs/gem.svg",alt:"cardLogo",width:16})}),(0,n.jsx)(c.n,{width:"full",fontSize:"14",children:t?`Verified by ${r}`:"Ranking by Rarity Sniper"})]}),placement:"top",children:(0,n.jsxs)(c.n,{className:b.FC,children:[(0,n.jsx)(c.n,{paddingTop:"2",paddingBottom:"2",display:"flex",children:a({input:s,type:z.sw.WholeNumber})}),(0,n.jsx)(c.n,{display:"flex",height:"16",children:t?(0,n.jsx)(u.w,{}):null})]})})}):null},_=e=>{var r,t;return(null===(r=e)||void 0===r?void 0:r.smallImageUrl)||(null===(t=e)||void 0===t?void 0:t.imageUrl)},L=({event:e,rarityVerified:r,collectionName:t,eventTimestamp:i,isMobile:a})=>{var s,o,l,d;const[u,m]=(0,h.useState)(!1),[v,p]=(0,h.useState)(!_(e.tokenMetadata));return(0,n.jsxs)(g.X2,{gap:"16",overflow:"hidden",whiteSpace:"nowrap",children:[v?(0,n.jsx)(E,{}):(0,n.jsx)(c.n,{as:"img",alt:(null===(s=e.tokenMetadata)||void 0===s?void 0:s.name)||e.tokenId,src:_(e.tokenMetadata),draggable:!1,className:b.xr,style:{background:u?"none":"#24272e"},onLoad:()=>m(!0),onError:()=>p(!0)}),(0,n.jsxs)(g.sg,{height:"full",justifyContent:"center",overflow:"hidden",whiteSpace:"nowrap",marginRight:"24",children:[(0,n.jsx)(c.n,{className:b.oj,children:(null===(o=e.tokenMetadata)||void 0===o?void 0:o.name)||e.tokenId}),(null===(l=e.tokenMetadata)||void 0===l?void 0:l.rarity)&&!a&&(0,n.jsx)(P,{rarity:null===(d=e.tokenMetadata)||void 0===d?void 0:d.rarity,rarityVerified:r,collectionName:t}),a&&i&&(0,x.F)(i.toString())]})]})}},49114:(e,r,t)=>{t.d(r,{F:()=>n});const n=e=>{const r=parseFloat(e),t=(new Date).getTime()-r,n=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),a=Math.floor(t%36e5/6e4);return n>0?`${n} day${n>1?"s":""} ago`:i>0?`${i} hour${i>1?"s":""} ago`:a>1?`${a} minutes ago`:"Just now"}}}]);
//# sourceMappingURL=5842.764276db.chunk.js.map