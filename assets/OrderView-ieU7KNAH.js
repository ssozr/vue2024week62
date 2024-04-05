import{c as U}from"./cart-d0y0QdGO.js";import{_ as L,R,m as j,c as l,b as t,n as h,d as c,w as V,e as u,t as r,F as b,r as C,o as n,j as k,g as x,B as N,C as A,G as P,p as J,h as q}from"./index-l_moKGUM.js";import{M as S}from"./bootstrap.esm-l9cKv-78.js";import{S as M}from"./sweetalert2.all-VrgWhcjp.js";import{a as p}from"./axios-G2rPRu76.js";import"./commonjsHelpers-1J56E-h6.js";var F={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_API_NAME:"ssozr",BASE_URL:"/vue2024week62/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:y,VITE_APP_API_NAME:f}=F,O={data(){return{paymentOptions:["ATM","信用卡","電信支付"],num:1,cartData:[],dalModal:"",delData:{},delId:"",disabled:!0,addressData:"",address:{city:"",areaName:"",content:"",index:"",areaList:[]},paymentMethod:"",userData:{user:{name:"",email:"",address:"",phone:""},message:""},coupon:{couponJudge:!1,couponNum:""},orderId:"",payModal:""}},components:{RouterLink:R},methods:{nextBtn(){this.num++},preBtn(){this.num--},getCartData(){p.get(`${y}/v2/api/${f}/cart`).then(a=>{this.cartData=a.data.data}).catch(a=>{alert(a.data.message).error(a)})},openDelModal(a){this.deldata={},this.delModal.show(),this.delId=a.id,this.delData=a.product},delCart(){p.delete(`${y}/v2/api/${f}/cart/${this.delId}`).then(a=>{this.delData={},this.delId="",this.delModal.hide(),this.getCartData(),this.getCartDataPinia(),M.fire(`${a.data.message}`)}).catch(a=>{alert(a.data.message).error(a)})},changeQty(a,e){this.disabled=!0;const B={product_id:e,qty:a};p.put(`${y}/v2/api/${f}/cart/${e}`,{data:B}).then(v=>{M.fire(`${v.data.message}`),this.disabled=!1,this.getCartData()}).catch(v=>{alert(v.data.message).error(v)})},getAddressData(){p.get("https://raw.githubusercontent.com/donma/TaiwanAddressCityAreaRoadChineseEnglishJSON/master/AllData.json").then(a=>{this.addressData=a.data}).catch(a=>{alert(a.data.message).error(a)})},disabledBtn(){this.disabled=!1},city(){this.address.areaName="";const a=this.addressData.findIndex(e=>e.CityName===this.address.city);this.address.index=a,this.address.areaList={...this.addressData[a].AreaList}},isPhone(a){return/^(09)[0-9]{8}$/.test(a)?!0:"需要正確的電話號碼"},couponBtn(){const a={code:this.coupon.couponNum};p.post(`${y}/v2/api/${f}/coupon`,{data:a}).then(e=>{this.coupon.couponJudge=e.data.success,M.fire(`${e.data.message}`)}).catch(e=>{alert(e.data.message).error(e)})},couponBtnDel(){this.coupon.couponJudge=!1},onSubmit(){this.userData.user.address=`${this.address.city}${this.address.areaName}${this.address.content}`;const a={user:{name:this.userData.user.name,email:this.userData.user.email,tel:this.userData.user.phone,address:this.userData.user.address},message:this.userData.message};p.post(`${y}/v2/api/${f}/order`,{data:a}).then(e=>{this.orderId=e.data.orderId,this.payModal.show()}).catch(e=>{alert(e.data.message).error(e)})},pay(){p.post(`${y}/v2/api/${f}/pay/${this.orderId}`).then(a=>{this.payModal.hide(),M.fire(`${a.data.message}`),this.getCartDataPinia(),this.num++}).catch(a=>{alert(a.data.message).error(a)})},formatNumber(a){if(a)return a.toLocaleString()},...j(U,["getCartDataPinia"])},mounted(){this.getCartData(),this.delModal=new S(this.$refs.delModal),this.getAddressData(),this.payModal=new S(this.$refs.payModal)}},i=a=>(J("data-v-30b34112"),a=a(),q(),a),z={class:"container-fluid mt-30","data-aos":"fade-right"},Q={class:"container mb-15"},G={class:"row"},W={class:"d-md-flex justify-content-center"},H={class:"order-progress ps-0 pt-4 col-md-6"},K=i(()=>t("li",{class:"active"},"訂單確認",-1)),X={class:"row"},Y={key:0,class:"row"},Z=i(()=>t("h2",{class:"text-center mb-4"},"訂單確認",-1)),$={class:"row justify-content-center"},tt={class:"col-6"},et={class:"table align-middle d-lg-table d-none col-12"},st=i(()=>t("thead",null,[t("tr",{class:"text-center"},[t("th",{class:"col"},"課程名稱"),t("th",{class:"col"},"授課老師"),t("th",{class:"col"},"總課程數"),t("th",{class:"col"},"購買數量"),t("th",{class:"col"},"價格"),t("th",{class:"col"})])],-1)),ot={class:"fs-6 mb-0"},at={class:"dropdown"},lt={class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},nt={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},dt=["onClick"],it=["onClick"],rt=i(()=>t("span",{class:"material-symbols-outlined text-black d-flex"}," close ",-1)),ct=[rt],ut={class:"text-end d-none d-lg-block"},mt={class:"border-3 my-6 fs-6 fw-bold"},_t={class:"ms-1"},ht={class:"row d-lg-none my-4 justify-content-center"},pt={class:"col-md-8"},bt={class:"d-flex justify-content-between align-items-center mb-3"},yt={class:"fs-6"},ft={class:"d-flex align-items-center justify-content-between"},vt={class:"text-end"},gt={class:"mb-0 fs-6"},Dt={class:"ms-1"},kt={key:1,class:"row col-md-6 offset-md-3"},xt={class:"mb-3 col-md-6"},Nt=i(()=>t("label",{for:"name",class:"form-label"},"*姓名:",-1)),Vt={class:"mb-3 col-md-6"},Ct=i(()=>t("label",{for:"email",class:"form-label"},"*信箱:",-1)),Mt={class:"mb-3 col-md-6"},wt=i(()=>t("label",{for:"phone",class:"form-label"},"*手機號碼: ",-1)),At={class:"mb-3 col-md-6"},Bt=i(()=>t("label",{for:"payment",class:"form-label"},"*付款方式:",-1)),It=i(()=>t("option",{value:"信用卡"},"信用卡",-1)),Pt=i(()=>t("option",{value:"ATM"},"ATM",-1)),St=i(()=>t("option",{value:"電信繳費"},"電信繳費",-1)),Tt=[It,Pt,St],Et={class:"input-group mb-3"},Ut=i(()=>t("label",{style:{width:"100%"},for:"地址",class:"form-label"},"*地址:",-1)),Lt={key:0,value:""},Rt=["value"],jt=["disabled"],Jt={key:0,value:""},qt=["value"],Ft={class:"input-group mb-3"},Ot=i(()=>t("span",{class:"input-group-text"},"留言區",-1)),zt={class:"col-md-8"},Qt=i(()=>t("label",{for:"coupon",class:"mb-3"},"優惠券:",-1)),Gt={class:"input-group"},Wt=["disabled"],Ht=["disabled"],Kt={key:0},Xt={key:1},Yt={class:"text-end d-flex justify-content-center col-md-4 mt-3"},Zt={class:"d-flex align-items-end"},$t={key:0,class:"border-bottom border-primary border-3 mb-0 fs-5"},te={class:"ms-1"},ee={key:1,class:"border-bottom border-primary border-3 mb-0 fs-5"},se={class:"ms-1"},oe={class:"col-md-6 offset-md-3 text-end mt-6 btn-list"},ae=["disabled"],le={key:0,class:"row"},ne={class:"d-flex justify-content-center"},de={class:"text-center"},ie={class:"text-center"},re={type:"button",class:"btn btn-primary fs-3"},ce=i(()=>t("li",null,"付款完成",-1)),ue=i(()=>t("li",null,"客服人員將會在三天內與您電話連絡",-1)),me=i(()=>t("li",null,"若有任何問題，皆可連絡客服",-1)),_e={class:"modal",tabindex:"-1",id:"payModal",ref:"payModal"},he={class:"modal-dialog"},pe={class:"modal-content"},be={class:"modal-header"},ye={class:"modal-title"},fe=i(()=>t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1)),ve=i(()=>t("div",{class:"modal-body"},[t("h3",null,"資料傳送完成，繼續付款？")],-1)),ge={class:"modal-footer"},De=i(()=>t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1)),ke={class:"modal",tabindex:"-1",ref:"delModal"},xe={class:"modal-dialog"},Ne={class:"modal-content"},Ve={class:"modal-header"},Ce={key:0,class:"modal-title"},Me=i(()=>t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1)),we=i(()=>t("div",{class:"modal-body"},[t("p",null,"確定移出購物車?")],-1)),Ae={class:"modal-footer"},Be=i(()=>t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1));function Ie(a,e,B,v,s,d){const I=C("RouterLink"),g=C("VField"),D=C("VErrorMessage"),T=C("VForm");return n(),l(b,null,[t("div",z,[t("div",Q,[t("div",G,[t("div",W,[t("ul",H,[K,t("li",{class:h({active:s.num>=2})},"填寫資料",2),t("li",{class:h({active:s.num>=3})},"付款完成",2)])])]),t("div",X,[c(T,{onSubmit:e[17]||(e[17]=m=>d.onSubmit())},{default:V(({errors:m})=>[s.num===1?(n(),l("div",Y,[Z,t("div",$,[t("div",tt,[t("table",et,[st,t("tbody",null,[(n(!0),l(b,null,k(s.cartData.carts,(o,_)=>(n(),l("tr",{key:_,class:"text-center"},[t("td",null,[t("h2",ot,r(o.product.title),1)]),t("td",null,r(o.product.unit),1),t("td",null,r(o.product.origin_price*o.qty)+"堂",1),t("td",null,[t("div",at,[t("button",lt,r(o.qty),1),t("ul",nt,[(n(),l(b,null,k(20,(w,E)=>t("li",{key:E},[t("a",{onClick:Pe=>d.changeQty(w,o.id),class:"dropdown-item"},r(w),9,dt)])),64))])])]),t("td",null,r(d.formatNumber(o.total)),1),t("td",null,[t("button",{type:"button",class:"btn rounded-pill",onClick:w=>d.openDelModal(o)},ct,8,it)])]))),128))])]),t("div",ut,[t("h2",mt,[x(" 總金額 : NT "),t("span",_t,r(d.formatNumber(s.cartData.total)),1)]),s.num===1?(n(),l("button",{key:0,class:"btn btn-primary rounded-pill",type:"button",onClick:e[0]||(e[0]=(...o)=>d.nextBtn&&d.nextBtn(...o))}," 下一步 ")):u("",!0)])]),t("div",ht,[t("div",pt,[(n(!0),l(b,null,k(s.cartData.carts,(o,_)=>(n(),l("ul",{key:_,class:"border-bottom pb-3 border-primary"},[t("li",null,[t("div",bt,[c(I,{to:`/class/${o.product.id}`},{default:V(()=>[t("h2",yt,r(o.product.title),1)]),_:2},1032,["to"])]),t("div",ft,[t("div",null," 堂數:"+r(o.product.origin_price*o.qty),1),t("div",null,"此課程共:NT$"+r(d.formatNumber(o.total)),1)])])]))),128)),t("div",vt,[t("h2",gt,[x(" 總金額:NT "),t("span",Dt,r(d.formatNumber(s.cartData.total)),1)]),s.num===1?(n(),l("button",{key:0,class:"btn btn-primary rounded-pill mt-3",type:"button",onClick:e[1]||(e[1]=(...o)=>d.nextBtn&&d.nextBtn(...o))}," 下一步 ")):u("",!0)])])])])])):u("",!0),s.num===2?(n(),l("div",kt,[t("div",xt,[Nt,c(g,{id:"name",name:"姓名",type:"text",class:h(["form-control",{"is-invalid":m.姓名}]),placeholder:"請輸入 姓名",rules:"required",modelValue:s.userData.user.name,"onUpdate:modelValue":e[2]||(e[2]=o=>s.userData.user.name=o),onClick:e[3]||(e[3]=o=>d.disabledBtn())},null,8,["class","modelValue"]),c(D,{name:"姓名",class:"invalid-feedback"})]),t("div",Vt,[Ct,c(g,{id:"email",name:"email",type:"email",class:h(["form-control",{"is-invalid":m.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:s.userData.user.email,"onUpdate:modelValue":e[4]||(e[4]=o=>s.userData.user.email=o)},null,8,["class","modelValue"]),c(D,{name:"email",class:"invalid-feedback"})]),t("div",Mt,[wt,c(g,{id:"phone",name:"電話",type:"tel",class:h(["form-control",{"is-invalid":m.電話}]),placeholder:"0912345678",rules:d.isPhone,modelValue:s.userData.user.phone,"onUpdate:modelValue":e[5]||(e[5]=o=>s.userData.user.phone=o)},null,8,["class","rules","modelValue"]),c(D,{name:"電話",class:"invalid-feedback"})]),t("div",At,[Bt,c(g,{id:"phone",name:"付款方式",type:"select",class:h(["form-control",{"is-invalid":m.付款方式}]),placeholder:"請選擇",rules:"required",modelValue:s.paymentMethod,"onUpdate:modelValue":e[7]||(e[7]=o=>s.paymentMethod=o)},{default:V(()=>[N(t("select",{class:"form-select",id:"payment","onUpdate:modelValue":e[6]||(e[6]=o=>s.paymentMethod=o)},Tt,512),[[A,s.paymentMethod]])]),_:2},1032,["class","modelValue"]),c(D,{name:"付款方式",class:"invalid-feedback"})]),t("div",Et,[Ut,N(t("select",{class:"btn btn-secondary",onChange:e[8]||(e[8]=(...o)=>d.city&&d.city(...o)),"onUpdate:modelValue":e[9]||(e[9]=o=>s.address.city=o)},[s.address.city?u("",!0):(n(),l("option",Lt,"請選擇")),(n(!0),l(b,null,k(s.addressData,(o,_)=>(n(),l("option",{value:o.CityName,key:_},r(o.CityName),9,Rt))),128))],544),[[A,s.address.city]]),N(t("select",{class:"btn btn-secondary",disabled:!s.address.city,"onUpdate:modelValue":e[10]||(e[10]=o=>s.address.areaName=o)},[s.address.areaName?u("",!0):(n(),l("option",Jt,"請選擇")),(n(!0),l(b,null,k(s.address.areaList,(o,_)=>(n(),l("option",{value:o.AreaName,key:_},r(o.AreaName),9,qt))),128))],8,jt),[[A,s.address.areaName]]),c(g,{id:"地址",name:"地址",type:"text",class:h(["form-control",{"is-invalid":m.地址}]),placeholder:"請輸入詳細地址",rules:"required",modelValue:s.address.content,"onUpdate:modelValue":e[11]||(e[11]=o=>s.address.content=o),disabled:!s.address.areaName},null,8,["class","modelValue","disabled"]),c(D,{name:"地址",class:"invalid-feedback"})]),t("div",Ft,[Ot,N(t("textarea",{class:"form-control","aria-label":"With textarea",placeholder:"可以說說自己，或有其他想告訴我們的也很歡迎","onUpdate:modelValue":e[12]||(e[12]=o=>s.userData.message=o)},null,512),[[P,s.userData.message]])]),t("div",zt,[Qt,t("div",Gt,[N(t("input",{id:"coupon",type:"text",class:"form-control",placeholder:"輸入優惠券","onUpdate:modelValue":e[13]||(e[13]=o=>s.coupon.couponNum=o),disabled:s.coupon.couponJudge},null,8,Wt),[[P,s.coupon.couponNum]]),t("button",{class:"btn btn-outline-light text-black",type:"button",onClick:e[14]||(e[14]=o=>d.couponBtn()),disabled:s.coupon.couponJudge},[s.coupon.couponJudge?(n(),l("span",Kt,"已套用")):(n(),l("span",Xt,"套用"))],8,Ht),s.coupon.couponJudge?(n(),l("button",{key:0,class:"btn btn-outline-secondary",type:"button",onClick:e[15]||(e[15]=o=>d.couponBtnDel())}," 重設優惠券 ")):u("",!0)])]),t("div",Yt,[t("div",Zt,[s.coupon.couponJudge?(n(),l("h2",ee,[x(" 總金額:NT "),t("span",se,r(d.formatNumber(s.cartData.final_total)),1)])):(n(),l("h2",$t,[x(" 總金額:NT "),t("span",te,r(d.formatNumber(s.cartData.total)),1)]))])])])):u("",!0),t("div",oe,[s.num===2?(n(),l("button",{key:0,class:"btn btn-secondary rounded-pill me-3",type:"button",onClick:e[16]||(e[16]=(...o)=>d.preBtn&&d.preBtn(...o))}," 上一步 ")):u("",!0),s.num===2?(n(),l("button",{key:1,class:"btn btn-primary rounded-pill me-3 test",type:"submit",disabled:m.付款方式||s.disabled}," 送出訂單 ",8,ae)):u("",!0)])]),_:1}),s.num===3?(n(),l("div",le,[t("div",ne,[t("ul",de,[t("li",null,[t("h2",ie,[t("button",re,[c(I,{to:"/"},{default:V(()=>[x("繼續購物")]),_:1})])])]),ce,ue,me])])])):u("",!0)])])]),t("div",_e,[t("div",he,[t("div",pe,[t("div",be,[t("h5",ye,"金額為: "+r(s.cartData.final_total),1),fe]),ve,t("div",ge,[De,t("button",{type:"button",class:"btn btn-primary",onClick:e[18]||(e[18]=m=>d.pay())}," 立即支付 ")])])])],512),t("div",ke,[t("div",xe,[t("div",Ne,[t("div",Ve,[s.delData.title?(n(),l("h5",Ce,r(s.delData.title),1)):u("",!0),Me]),we,t("div",Ae,[Be,t("button",{type:"button",class:"btn btn-primary",onClick:e[19]||(e[19]=m=>d.delCart(s.delData.id))}," 確認移出 ")])])])],512)],64)}const je=L(O,[["render",Ie],["__scopeId","data-v-30b34112"]]);export{je as default};