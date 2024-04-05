import{c as x}from"./cart-d0y0QdGO.js";import{_ as H,R as tt,o as b,i as R,w as I,c as M,j as N,d as X,b as t,t as f,F as P,r as E,p as st,h as et,m as j,a as L,g as D}from"./index-l_moKGUM.js";import{g as B,b as at,S as ot,a as it,P as rt,A as nt}from"./autoplay-58oCcH-6.js";import{M as dt,T as lt}from"./bootstrap.esm-l9cKv-78.js";import{a as U}from"./axios-G2rPRu76.js";function ct(s){const{effect:e,swiper:a,on:h,setTranslate:o,setTransition:i,overwriteParams:p,perspective:d,recreateShadows:l,getEffectParams:c}=s;h("beforeInit",()=>{if(a.params.effect!==e)return;a.classNames.push(`${a.params.containerModifierClass}${e}`),d&&d()&&a.classNames.push(`${a.params.containerModifierClass}3d`);const n=p?p():{};Object.assign(a.params,n),Object.assign(a.originalParams,n)}),h("setTranslate",()=>{a.params.effect===e&&o()}),h("setTransition",(n,u)=>{a.params.effect===e&&i(u)}),h("transitionEnd",()=>{if(a.params.effect===e&&l){if(!c||!c().slideShadows)return;a.slides.forEach(n=>{n.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u=>u.remove())}),l()}});let r;h("virtualUpdate",()=>{a.params.effect===e&&(a.slides.length||(r=!0),requestAnimationFrame(()=>{r&&a.slides&&a.slides.length&&(o(),r=!1)}))})}function ht(s,e){const a=B(e);return a!==e&&(a.style.backfaceVisibility="hidden",a.style["-webkit-backface-visibility"]="hidden"),a}function z(s,e,a){const h=`swiper-slide-shadow${a?`-${a}`:""}${s?` swiper-slide-shadow-${s}`:""}`,o=B(e);let i=o.querySelector(`.${h.split(" ").join(".")}`);return i||(i=at("div",h.split(" ")),o.append(i)),i}function ft(s){let{swiper:e,extendParams:a,on:h}=s;a({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),ct({effect:"coverflow",swiper:e,on:h,setTranslate:()=>{const{width:p,height:d,slides:l,slidesSizesGrid:c}=e,r=e.params.coverflowEffect,n=e.isHorizontal(),u=e.translate,Y=n?-u+p/2:-u+d/2,V=n?r.rotate:-r.rotate,W=r.depth;for(let v=0,Z=l.length;v<Z;v+=1){const _=l[v],$=c[v],J=_.swiperSlideOffset,O=(Y-J-$/2)/$,m=typeof r.modifier=="function"?r.modifier(O):O*r.modifier;let w=n?V*m:0,g=n?0:V*m,T=-W*Math.abs(m),y=r.stretch;typeof y=="string"&&y.indexOf("%")!==-1&&(y=parseFloat(r.stretch)/100*$);let k=n?0:y*m,A=n?y*m:0,q=1-(1-r.scale)*Math.abs(m);Math.abs(A)<.001&&(A=0),Math.abs(k)<.001&&(k=0),Math.abs(T)<.001&&(T=0),Math.abs(w)<.001&&(w=0),Math.abs(g)<.001&&(g=0),Math.abs(q)<.001&&(q=0),e.browser&&e.browser.need3dFix&&(Math.abs(w)/90%2===1&&(w+=.001),Math.abs(g)/90%2===1&&(g+=.001));const K=`translate3d(${A}px,${k}px,${T}px)  rotateX(${g}deg) rotateY(${w}deg) scale(${q})`,Q=ht(r,_);if(Q.style.transform=K,_.style.zIndex=-Math.abs(Math.round(m))+1,r.slideShadows){let C=n?_.querySelector(".swiper-slide-shadow-left"):_.querySelector(".swiper-slide-shadow-top"),S=n?_.querySelector(".swiper-slide-shadow-right"):_.querySelector(".swiper-slide-shadow-bottom");C||(C=z("coverflow",_,n?"left":"top")),S||(S=z("coverflow",_,n?"right":"bottom")),C&&(C.style.opacity=m>0?m:0),S&&(S.style.opacity=-m>0?-m:0)}}},setTransition:p=>{e.slides.map(l=>B(l)).forEach(l=>{l.style.transitionDuration=`${p}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${p}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const pt={props:["otherClassData"],components:{Swiper:ot,SwiperSlide:it,RouterLink:tt},setup(){return{modules:[ft,rt,nt]}},methods:{changPage(s){this.$emit("chang-page",s)}}},mt=s=>(st("data-v-f9233113"),s=s(),et(),s),_t={class:"card-group h-100"},ut={class:"card bg-primary border-0 pt-4 h-100"},bt={class:"d-flex justify-content-center"},wt={class:"d-flex justify-content-center align-items-center border rounded-circle border-secondary"},gt=["src"],yt={class:"card-body text-center p-0 mt-5"},vt={class:"card-title fs-4"},Ct={class:"mt-8 mb-6"},St={class:"card-text fs-6"},xt=mt(()=>t("div",{class:"card-footer text-center bg-secondary text-white"}," 課程連結 ",-1));function Dt(s,e,a,h,o,i){const p=E("RouterLink"),d=E("swiper-slide"),l=E("swiper");return b(),R(l,{slidesPerView:3,spaceBetween:30,pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1},navigation:!1,modules:h.modules,class:"mySwiper",style:{height:"100%"}},{default:I(()=>[(b(!0),M(P,null,N(a.otherClassData,(c,r)=>(b(),R(d,{key:r,onClick:n=>i.changPage(c.id)},{default:I(()=>[X(p,{to:`/product/${c.id}`,class:"h-100 d-block"},{default:I(()=>[t("div",_t,[t("div",ut,[t("div",bt,[t("div",wt,[t("img",{src:c.imageUrl,class:"card-img-top rounded-circle card-img p-5 img-fluid",alt:"導師照片"},null,8,gt)])]),t("div",yt,[t("h2",vt,f(c.title),1),t("div",Ct,[t("p",St,f(c.description),1)])]),xt])])]),_:2},1032,["to"])]),_:2},1032,["onClick"]))),128))]),_:1},8,["modules"])}const Mt=H(pt,[["render",Dt],["__scopeId","data-v-f9233113"]]);var Pt={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_API_NAME:"ssozr",BASE_URL:"/vue2024week62/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:F,VITE_APP_API_NAME:G}=Pt,Et={data(){return{classData:{},otherClassData:[],id:"",goCart:!1,category:"",addModal:"",qtyNum:1,myToast:""}},components:{SwiperClassVue:Mt},methods:{getClassData(){U.get(`${F}/v2/api/${G}/product/${this.id}`).then(s=>{this.classData=s.data.product,this.category=s.data.product.category,this.getOtherClassData()}).catch(()=>{})},getOtherClassData(){U.get(`${F}v2/api/${G}/products/?category=${this.category}`).then(s=>{this.otherClassData=s.data.products,this.filteredItems()}).catch(()=>{})},openAddModal(){this.addModal.show()},hideAddModal(){this.addModal.hide()},...j(x,["addCart"]),...j(x,["changeGoCart"]),formatNumber(s){if(s)return s.toLocaleString()},filteredItems(){const s=[],e=this.id;this.otherClassData.forEach(function(a){a.id!==e&&s.push(a)}),this.otherClassData=s},changPage(s){this.id=s,this.$router.push(`/product/${s}`),this.getClassData(),window.scrollTo(0,0)},qty(s){this.qtyNum=s},addCartBtnChange(){this.addCarBtn=!0},addCartData(s,e){this.addCart(s,e,this.openToast)},openToast(){this.myToast.show()}},computed:{...L(x,["addCartBtn"]),...L(x,["toast"])},mounted(){const{id:s}=this.$route.params;this.id=s,this.getClassData(),this.addModal=new dt(this.$refs.addModal),this.myToast=new lt(this.$refs.myToast)}},$t={class:"container mt-30 mb-15 teacher","data-aos":"fade-right"},Tt={class:"row"},kt={class:"text-center p-0 mb-10 col-8 offset-2"},At=["src"],qt={class:"mb-10"},It={class:"border-bottom border-primary border-3 pb-3"},Nt={class:"fs-6 mt-lg-0 mt-3 ps-lg-5 d-inline-block"},Bt={class:"row flex-lg-row-reverse"},Vt={class:"col-lg-4 text-center"},Ot=["src"],Rt={class:"mb-6 mb-lg-0"},jt={class:"col-lg-8 d-flex flex-column justify-content-between"},Lt={class:"fs-4 mb-lg-15 mb-8"},Ut={class:"d-lg-flex text-lg-start text-center justify-content-between align-items-end"},zt={class:"p-0 m-0"},Ft={class:"fs-4"},Gt={class:"ms-4"},Ht={class:"fs-4 m-0"},Xt={class:"ms-4"},Yt={class:"d-lg-flex mt-3"},Wt={class:"d-flex justify-content-center mb-md-0 mb-3"},Zt=["disabled"],Jt={class:"dropdown"},Kt={class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},Qt={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},ts=["onClick"],ss={class:"my-15 my-md-30 container","data-aos":"fade-right"},es=t("h2",{class:"border-bottom border-primary border-3 pb-3"},"相關課程",-1),as={class:"modal",tabindex:"-1",ref:"addModal"},os={class:"modal-dialog"},is={class:"modal-content"},rs=t("div",{class:"modal-header"},[t("h5",{class:"modal-title"},"選擇購買數量"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ns={class:"modal-body"},ds={class:"dropdown"},ls={class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},cs={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},hs=["onClick"],fs={class:"modal-footer"},ps=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),ms={class:"position-fixed bottom-0 end-0 p-3",style:{"z-index":"5"}},_s={id:"liveToast",class:"toast hide",ref:"myToast",role:"alert","aria-live":"assertive","aria-atomic":"true"},us=t("div",{class:"toast-header bg-secondary"},[t("strong",{class:"me-auto text-white"},"已加入購物車"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})],-1),bs=[us];function ws(s,e,a,h,o,i){const p=E("SwiperClassVue");return b(),M(P,null,[t("div",$t,[t("div",Tt,[t("div",kt,[t("img",{src:o.classData.imagesUrl,class:"imgI",alt:"課程示意圖"},null,8,At)]),t("div",qt,[t("h2",It,[D(f(o.classData.title)+" ",1),t("span",Nt,f(o.classData.description),1)])]),t("div",Bt,[t("div",Vt,[t("img",{src:o.classData.imageUrl,alt:"老師照片",class:"card-img rounded-circle mb-4"},null,8,Ot),t("h3",Rt,"授課老師:"+f(o.classData.unit),1)]),t("div",jt,[t("p",Lt,f(o.classData.content),1),t("div",Ut,[t("ul",zt,[t("li",null,[t("p",Ft,[D(" 課程堂數:"),t("span",Gt,f(o.classData.origin_price)+"堂",1)])]),t("li",null,[t("p",Ht,[D(" 課程總額:"),t("span",Xt,"NT$"+f(i.formatNumber(o.classData.price)),1)])])]),t("div",Yt,[t("div",Wt,[t("button",{type:"button",class:"btn btn-primary me-3",onClick:e[0]||(e[0]=d=>i.addCartData(o.classData,o.qtyNum)),disabled:s.addCartBtn}," 加入購物車 ",8,Zt),t("div",Jt,[t("button",Kt,f(o.qtyNum),1),t("ul",Qt,[(b(),M(P,null,N(20,(d,l)=>t("li",{key:l},[t("a",{class:"dropdown-item",onClick:c=>i.qty(d)},f(d),9,ts)])),64))])])]),t("button",{type:"button",class:"btn btn-primary ms-6",onClick:e[1]||(e[1]=d=>s.changeGoCart(o.classData,i.qty))}," 立即上課 ")])])])])])]),t("div",ss,[es,X(p,{"other-class-data":o.otherClassData,onChangPage:i.changPage},null,8,["other-class-data","onChangPage"])]),t("div",as,[t("div",os,[t("div",is,[rs,t("div",ns,[t("div",ds,[D(" 購買數量: "),t("button",ls,f(o.qtyNum),1),t("ul",cs,[(b(),M(P,null,N(20,(d,l)=>t("li",{key:l},[t("a",{class:"dropdown-item",onClick:c=>i.qty(d)},f(d),9,hs)])),64))])])]),t("div",fs,[ps,t("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=d=>(i.addCartData(o.classData,o.qtyNum),i.hideAddModal()))}," 加入購物車 ")])])])],512),t("div",ms,[t("div",_s,bs,512)])],64)}const xs=H(Et,[["render",ws]]);export{xs as default};
