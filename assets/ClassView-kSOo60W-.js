import{c as S}from"./cart-Poho2KGd.js";import{_ as H,R as tt,o as b,i as j,w as I,c as M,j as N,d as X,b as t,t as f,F as P,r as E,p as st,h as et,m as R,a as F,g as x}from"./index-ZYguVHt9.js";import{g as V,b as at,S as ot,a as it,P as rt,A as nt}from"./autoplay-kkNPNIPt.js";import{M as lt,T as dt}from"./bootstrap.esm-l9cKv-78.js";import{a as L}from"./axios-G2rPRu76.js";function ct(s){const{effect:e,swiper:a,on:h,setTranslate:o,setTransition:i,overwriteParams:p,perspective:l,recreateShadows:d,getEffectParams:c}=s;h("beforeInit",()=>{if(a.params.effect!==e)return;a.classNames.push(`${a.params.containerModifierClass}${e}`),l&&l()&&a.classNames.push(`${a.params.containerModifierClass}3d`);const n=p?p():{};Object.assign(a.params,n),Object.assign(a.originalParams,n)}),h("setTranslate",()=>{a.params.effect===e&&o()}),h("setTransition",(n,u)=>{a.params.effect===e&&i(u)}),h("transitionEnd",()=>{if(a.params.effect===e&&d){if(!c||!c().slideShadows)return;a.slides.forEach(n=>{n.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u=>u.remove())}),d()}});let r;h("virtualUpdate",()=>{a.params.effect===e&&(a.slides.length||(r=!0),requestAnimationFrame(()=>{r&&a.slides&&a.slides.length&&(o(),r=!1)}))})}function ht(s,e){const a=V(e);return a!==e&&(a.style.backfaceVisibility="hidden",a.style["-webkit-backface-visibility"]="hidden"),a}function U(s,e,a){const h=`swiper-slide-shadow${a?`-${a}`:""}${s?` swiper-slide-shadow-${s}`:""}`,o=V(e);let i=o.querySelector(`.${h.split(" ").join(".")}`);return i||(i=at("div",h.split(" ")),o.append(i)),i}function ft(s){let{swiper:e,extendParams:a,on:h}=s;a({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),ct({effect:"coverflow",swiper:e,on:h,setTranslate:()=>{const{width:p,height:l,slides:d,slidesSizesGrid:c}=e,r=e.params.coverflowEffect,n=e.isHorizontal(),u=e.translate,Y=n?-u+p/2:-u+l/2,B=n?r.rotate:-r.rotate,W=r.depth;for(let v=0,Z=d.length;v<Z;v+=1){const _=d[v],T=c[v],J=_.swiperSlideOffset,O=(Y-J-T/2)/T,m=typeof r.modifier=="function"?r.modifier(O):O*r.modifier;let g=n?B*m:0,w=n?0:B*m,$=-W*Math.abs(m),y=r.stretch;typeof y=="string"&&y.indexOf("%")!==-1&&(y=parseFloat(r.stretch)/100*T);let k=n?0:y*m,A=n?y*m:0,q=1-(1-r.scale)*Math.abs(m);Math.abs(A)<.001&&(A=0),Math.abs(k)<.001&&(k=0),Math.abs($)<.001&&($=0),Math.abs(g)<.001&&(g=0),Math.abs(w)<.001&&(w=0),Math.abs(q)<.001&&(q=0),e.browser&&e.browser.need3dFix&&(Math.abs(g)/90%2===1&&(g+=.001),Math.abs(w)/90%2===1&&(w+=.001));const K=`translate3d(${A}px,${k}px,${$}px)  rotateX(${w}deg) rotateY(${g}deg) scale(${q})`,Q=ht(r,_);if(Q.style.transform=K,_.style.zIndex=-Math.abs(Math.round(m))+1,r.slideShadows){let C=n?_.querySelector(".swiper-slide-shadow-left"):_.querySelector(".swiper-slide-shadow-top"),D=n?_.querySelector(".swiper-slide-shadow-right"):_.querySelector(".swiper-slide-shadow-bottom");C||(C=U("coverflow",_,n?"left":"top")),D||(D=U("coverflow",_,n?"right":"bottom")),C&&(C.style.opacity=m>0?m:0),D&&(D.style.opacity=-m>0?-m:0)}}},setTransition:p=>{e.slides.map(d=>V(d)).forEach(d=>{d.style.transitionDuration=`${p}ms`,d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${p}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const pt={props:["otherClassData"],components:{Swiper:ot,SwiperSlide:it,RouterLink:tt},setup(){return{modules:[ft,rt,nt]}},methods:{changPage(s){this.$emit("chang-page",s)}}},mt=s=>(st("data-v-9e496180"),s=s(),et(),s),_t={class:"card-group h-100"},ut={class:"card bg-primary border-0 pt-4 h-100"},bt={class:"d-flex justify-content-center"},gt={class:"d-flex justify-content-center align-items-center border rounded-circle border-secondary"},wt=["src"],yt={class:"card-body text-center p-0 mt-5"},vt={class:"card-title fs-4"},Ct={class:"mt-3 mb-6"},Dt={class:"card-text fs-6"},St=mt(()=>t("div",{class:"card-footer text-center bg-secondary text-white"}," 課程連結 ",-1));function xt(s,e,a,h,o,i){const p=E("RouterLink"),l=E("swiper-slide"),d=E("swiper");return b(),j(d,{slidesPerView:1,spaceBetween:30,pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1},navigation:!1,modules:h.modules,class:"mySwiper",style:{height:"100%"},breakpoints:{768:{slidesPerView:3}}},{default:I(()=>[(b(!0),M(P,null,N(a.otherClassData,(c,r)=>(b(),j(l,{key:r,onClick:n=>i.changPage(c.id)},{default:I(()=>[X(p,{to:`/product/${c.id}`,class:"h-100 d-block"},{default:I(()=>[t("div",_t,[t("div",ut,[t("div",bt,[t("div",gt,[t("img",{src:c.imageUrl,class:"card-img-top rounded-circle card-img p-5 img-fluid",alt:"導師照片"},null,8,wt)])]),t("div",yt,[t("h2",vt,f(c.title),1),t("div",Ct,[t("p",Dt,f(c.description),1)])]),St])])]),_:2},1032,["to"])]),_:2},1032,["onClick"]))),128))]),_:1},8,["modules"])}const Mt=H(pt,[["render",xt],["__scopeId","data-v-9e496180"]]);var Pt={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_API_NAME:"ssozr",BASE_URL:"/vue2024week62/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:z,VITE_APP_API_NAME:G}=Pt,Et={data(){return{classData:{},otherClassData:[],id:"",goCart:!1,category:"",addModal:"",qtyNum:1,myToast:""}},components:{SwiperClassVue:Mt},methods:{getClassData(){L.get(`${z}/v2/api/${G}/product/${this.id}`).then(s=>{this.classData=s.data.product,this.category=s.data.product.category,this.getOtherClassData()}).catch(()=>{})},getOtherClassData(){L.get(`${z}v2/api/${G}/products/?category=${this.category}`).then(s=>{this.otherClassData=s.data.products,this.filteredItems()}).catch(()=>{})},openAddModal(){this.addModal.show()},hideAddModal(){this.addModal.hide()},...R(S,["addCart"]),...R(S,["changeGoCart"]),formatNumber(s){if(s)return s.toLocaleString()},filteredItems(){const s=[],e=this.id;this.otherClassData.forEach(function(a){a.id!==e&&s.push(a)}),this.otherClassData=s},changPage(s){this.id=s,this.$router.push(`/product/${s}`),this.getClassData(),window.scrollTo(0,0)},qty(s){this.qtyNum=s},addCartBtnChange(){this.addCarBtn=!0},addCartData(s,e){this.addCart(s,e,this.openToast)},openToast(){this.myToast.show()}},computed:{...F(S,["addCartBtn"]),...F(S,["toast"])},mounted(){const{id:s}=this.$route.params;this.id=s,this.getClassData(),this.addModal=new lt(this.$refs.addModal),this.myToast=new dt(this.$refs.myToast)}},Tt={class:"container mt-30 mb-15 teacher","data-aos":"fade-right"},$t={class:"row justify-content-center"},kt={class:"text-center p-0 mb-10 col-8 offset-2"},At=["src"],qt={class:"mb-10"},It={class:"border-bottom border-primary border-3 pb-3 fw-bold"},Nt={class:"fs-6 mt-lg-0 mt-3 ps-lg-5 d-inline-block"},Vt={class:"row flex-lg-row-reverse"},Bt={class:"col-lg-4 text-center"},Ot=["src"],jt={class:"mb-6 mb-lg-0"},Rt={class:"col-lg-8 d-flex flex-column justify-content-between"},Ft={class:"fs-4 d-lg-block d-none mb-lg-15 mb-8"},Lt={class:"fs-6 d-lg-none mb-lg-15 mb-8"},Ut={class:"d-lg-flex text-lg-start text-center justify-content-between align-items-end"},zt={class:"p-0 m-0"},Gt={class:"fs-4"},Ht={class:"ms-4"},Xt={class:"fs-4 m-0"},Yt={class:"ms-4"},Wt={class:"d-flex mt-3 justify-content-center"},Zt={class:"d-flex justify-content-center"},Jt=["disabled"],Kt={class:"dropdown"},Qt={class:"btn btn-outline-light dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},ts={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},ss=["onClick"],es={class:"my-15 my-md-30 container","data-aos":"fade-right"},as=t("h2",{class:"border-bottom border-primary border-3 pb-3"},"相關課程",-1),os={class:"modal",tabindex:"-1",ref:"addModal"},is={class:"modal-dialog"},rs={class:"modal-content"},ns=t("div",{class:"modal-header"},[t("h5",{class:"modal-title"},"選擇購買數量"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ls={class:"modal-body"},ds={class:"dropdown"},cs={class:"btn btn-6F6F6F dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},hs={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},fs=["onClick"],ps={class:"modal-footer"},ms=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),_s={class:"position-fixed bottom-0 end-0 p-3",style:{"z-index":"5"}},us={id:"liveToast",class:"toast hide",ref:"myToast",role:"alert","aria-live":"assertive","aria-atomic":"true"},bs=t("div",{class:"toast-header bg-secondary"},[t("strong",{class:"me-auto text-white"},"已加入購物車"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})],-1),gs=[bs];function ws(s,e,a,h,o,i){const p=E("SwiperClassVue");return b(),M(P,null,[t("div",Tt,[t("div",$t,[t("div",kt,[t("img",{src:o.classData.imagesUrl,class:"imgI",alt:"課程示意圖"},null,8,At)]),t("div",qt,[t("h2",It,[x(f(o.classData.title)+" ",1),t("span",Nt,f(o.classData.description),1)])]),t("div",Vt,[t("div",Bt,[t("img",{src:o.classData.imageUrl,alt:"老師照片",class:"card-img rounded-circle mb-4"},null,8,Ot),t("h3",jt,"授課老師:"+f(o.classData.unit),1)]),t("div",Rt,[t("p",Ft,f(o.classData.content),1),t("p",Lt,f(o.classData.content),1),t("div",Ut,[t("ul",zt,[t("li",null,[t("p",Gt,[x(" 課程堂數:"),t("span",Ht,f(o.classData.origin_price)+"堂",1)])]),t("li",null,[t("p",Xt,[x(" 課程總額:"),t("span",Yt,"NT$"+f(i.formatNumber(o.classData.price)),1)])])]),t("div",Wt,[t("div",Zt,[t("button",{type:"button",class:"btn btn-primary me-3",onClick:e[0]||(e[0]=l=>i.addCartData(o.classData,o.qtyNum)),disabled:s.addCartBtn}," 加入購物車 ",8,Jt),t("div",Kt,[t("button",Qt,f(o.qtyNum),1),t("ul",ts,[(b(),M(P,null,N(20,(l,d)=>t("li",{key:d},[t("a",{class:"dropdown-item",onClick:c=>i.qty(l)},f(l),9,ss)])),64))])]),t("button",{type:"button",class:"btn btn-primary ms-3",onClick:e[1]||(e[1]=l=>s.changeGoCart(o.classData,i.qty))}," 立即上課 ")])])])])])])]),t("div",es,[as,X(p,{"other-class-data":o.otherClassData,onChangPage:i.changPage},null,8,["other-class-data","onChangPage"])]),t("div",os,[t("div",is,[t("div",rs,[ns,t("div",ls,[t("div",ds,[x(" 購買數量: "),t("button",cs,f(o.qtyNum),1),t("ul",hs,[(b(),M(P,null,N(20,(l,d)=>t("li",{key:d},[t("a",{class:"dropdown-item",onClick:c=>i.qty(l)},f(l),9,fs)])),64))])])]),t("div",ps,[ms,t("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=l=>(i.addCartData(o.classData,o.qtyNum),i.hideAddModal()))}," 加入購物車 ")])])])],512),t("div",_s,[t("div",us,gs,512)])],64)}const xs=H(Et,[["render",ws]]);export{xs as default};