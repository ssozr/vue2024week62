import{c as E}from"./cart-e-CphGvN.js";import{_ as L,R,m as q,c as l,b as t,n as h,d as u,w as C,e as c,t as d,F as b,r as M,o as n,i as f,g as m,z as w,A,D as I}from"./index-Ej9kf163.js";import{M as T}from"./bootstrap.esm-TTjMTX3M.js";import{S as N}from"./sweetalert2.all-t36qbmOe.js";import{a as y}from"./axios-G2rPRu76.js";var J={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_API_NAME:"ssozr",BASE_URL:"/vue2024week62/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:v,VITE_APP_API_NAME:g}=J,j={data(){return{paymentOptions:["ATM","信用卡","電信支付"],num:1,cartData:[],dalModal:"",delData:{},delId:"",disabled:!0,addressData:"",address:{city:"",areaName:"",content:"",index:"",areaList:[]},paymentMethod:"",userData:{user:{name:"",email:"",address:"",phone:""},message:""},coupon:{couponJudge:!1,couponNum:""},orderId:"",payModal:""}},components:{RouterLink:R},methods:{nextBtn(){this.num++},preBtn(){this.num--},getCartData(){y.get(`${v}/v2/api/${g}/cart`).then(a=>{this.cartData=a.data.data}).catch(a=>{alert(a.data.message).error(a)})},openDelModal(a){this.deldata={},this.delModal.show(),this.delId=a.id,this.delData=a.product},delCart(){y.delete(`${v}/v2/api/${g}/cart/${this.delId}`).then(a=>{this.delData={},this.delId="",this.delModal.hide(),this.getCartData(),this.getCartDataPinia(),N.fire(`${a.data.message}`)}).catch(a=>{alert(a.data.message).error(a)})},changeQty(a,e){this.disabled=!0;const B={product_id:e,qty:a};y.put(`${v}/v2/api/${g}/cart/${e}`,{data:B}).then(D=>{N.fire(`${D.data.message}`),this.disabled=!1,this.getCartData()}).catch(D=>{alert(D.data.message).error(D)})},getAddressData(){y.get("https://raw.githubusercontent.com/donma/TaiwanAddressCityAreaRoadChineseEnglishJSON/master/AllData.json").then(a=>{this.addressData=a.data}).catch(a=>{alert(a.data.message).error(a)})},disabledBtn(){this.disabled=!1},city(){this.address.areaName="";const a=this.addressData.findIndex(e=>e.CityName===this.address.city);this.address.index=a,this.address.areaList={...this.addressData[a].AreaList}},isPhone(a){return/^(09)[0-9]{8}$/.test(a)?!0:"需要正確的電話號碼"},couponBtn(){const a={code:this.coupon.couponNum};y.post(`${v}/v2/api/${g}/coupon`,{data:a}).then(e=>{this.coupon.couponJudge=e.data.success,N.fire(`${e.data.message}`)}).catch(e=>{alert(e.data.message).error(e)})},couponBtnDel(){this.coupon.couponJudge=!1},onSubmit(){this.userData.user.address=`${this.address.city}${this.address.areaName}${this.address.content}`;const a={user:{name:this.userData.user.name,email:this.userData.user.email,tel:this.userData.user.phone,address:this.userData.user.address},message:this.userData.message};y.post(`${v}/v2/api/${g}/order`,{data:a}).then(e=>{this.orderId=e.data.orderId,this.payModal.show()}).catch(e=>{alert(e.data.message).error(e)})},pay(){y.post(`${v}/v2/api/${g}/pay/${this.orderId}`).then(a=>{this.payModal.hide(),N.fire(`${a.data.message}`),this.getCartDataPinia(),this.num++}).catch(a=>{alert(a.data.message).error(a)})},formatNumber(a){if(a)return a.toLocaleString()},...q(E,["getCartDataPinia"])},mounted(){this.getCartData(),this.delModal=new T(this.$refs.delModal),this.getAddressData(),this.payModal=new T(this.$refs.payModal)}},O={class:"container-fluid","data-aos":"fade-right"},z={class:"row"},Q={class:"order-progress pt-4"},F=t("li",{class:"active"},"訂單確認",-1),W={class:"container mb-15"},G={class:"row"},H={key:0,class:"row"},K=t("h2",{class:"text-center"},"訂單確認",-1),X={class:"row"},Y={class:"table align-middle d-lg-table d-none col-12"},Z=t("thead",null,[t("tr",{class:"text-center"},[t("th",{scope:"col"},"課程名稱"),t("th",{scope:"col"},"授課老師"),t("th",{scope:"col"},"總課程數"),t("th",{scope:"col"},"購買數量"),t("th",{scope:"col"},"價格"),t("th")])],-1),$={class:"fs-6 mb-0"},tt={class:"dropdown"},et={class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},st={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},ot=["onClick"],at=["onClick"],lt={class:"text-center"},nt=t("td",null,null,-1),dt=t("td",null,null,-1),it=t("td",null,null,-1),rt=t("td",null,null,-1),ct=t("td",null,null,-1),ut={class:"align-bottom"},mt={class:"border-bottom border-primary border-3 mb-0 fs-6"},_t={class:"ms-1"},pt={class:"row d-lg-none my-15 justify-content-center"},ht={class:"col-md-8"},bt={class:"d-flex justify-content-between align-items-center mb-3"},yt={class:"fs-5"},ft=["onClick"],vt={class:"d-flex align-items-center justify-content-between"},gt={class:"dropdown"},Dt={class:"btn btn-secondary dropdown-toggle py-0",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},kt={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},xt=["onClick"],wt={class:"text-end"},Ct={class:"mb-0 fs-6"},Mt={class:"ms-1"},Nt={key:1,class:"row col-md-6 offset-md-3"},Vt={class:"mb-3 col-md-6"},At={for:"name",class:"form-label"},Bt={key:0,class:"text-danger"},Pt={class:"mb-3 col-md-6"},It={for:"email",class:"form-label"},Tt={key:0,class:"text-danger"},St={class:"mb-3 col-md-6"},Ut={for:"phone",class:"form-label"},Et={key:0,class:"text-danger"},Lt={class:"mb-3 col-md-6"},Rt={for:"payment",class:"form-label"},qt={key:0,class:"text-danger"},Jt=t("option",{value:"信用卡"},"信用卡",-1),jt=t("option",{value:"ATM"},"ATM",-1),Ot=t("option",{value:"電信繳費"},"電信繳費",-1),zt=[Jt,jt,Ot],Qt={class:"input-group mb-3"},Ft={style:{width:"100%"},for:"地址",class:"form-label"},Wt={key:0,class:"text-danger"},Gt={key:0,value:""},Ht=["value"],Kt=["disabled"],Xt={key:0,value:""},Yt=["value"],Zt={class:"input-group mb-3"},$t=t("span",{class:"input-group-text"},"留言區",-1),te={class:"col-md-8"},ee=t("label",{for:"coupon",class:"mb-3"},"優惠券:",-1),se={class:"input-group"},oe=["disabled"],ae=["disabled"],le={key:0},ne={key:1},de={class:"text-end d-flex justify-content-center col-md-4 mt-3"},ie={class:"d-flex align-items-end"},re={key:0,class:"border-bottom border-primary border-3 mb-0 fs-5"},ce={class:"ms-1"},ue={key:1,class:"border-bottom border-primary border-3 mb-0 fs-5"},me={class:"ms-1"},_e={class:"text-center mt-6 btn-list"},pe=["disabled"],he={key:0,class:"row"},be=t("h2",{class:"text-center"},"課程購買完成",-1),ye=t("div",{class:"d-flex justify-content-center"},[t("ul",null,[t("li",null,"客服人員將會在三天內與您電話連絡"),t("li",null,"若有任何問題，皆可連絡客服")])],-1),fe={class:"text-center"},ve={class:"modal",tabindex:"-1",id:"payModal",ref:"payModal"},ge={class:"modal-dialog"},De={class:"modal-content"},ke={class:"modal-header"},xe={class:"modal-title"},we=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Ce=t("div",{class:"modal-body"},[t("h3",null,"資料傳送完成，繼續付款？")],-1),Me={class:"modal-footer"},Ne=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1),Ve={class:"modal",tabindex:"-1",ref:"delModal"},Ae={class:"modal-dialog"},Be={class:"modal-content"},Pe={class:"modal-header"},Ie={key:0,class:"modal-title"},Te=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Se=t("div",{class:"modal-body"},[t("p",null,"確定移出購物車?")],-1),Ue={class:"modal-footer"},Ee=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function Le(a,e,B,D,o,i){const P=M("RouterLink"),k=M("v-field"),x=M("error-message"),S=M("v-form");return n(),l(b,null,[t("div",O,[t("div",z,[t("ul",Q,[F,t("li",{class:h({active:o.num>=2})}," 填寫資料",2),t("li",{class:h({active:o.num>=3})},"付款完成",2)])]),t("div",W,[t("div",G,[u(S,{onSubmit:e[16]||(e[16]=r=>i.onSubmit())},{default:C(({errors:r})=>[o.num===1?(n(),l("div",H,[K,t("div",X,[t("table",Y,[Z,t("tbody",null,[(n(!0),l(b,null,f(o.cartData.carts,(s,_)=>(n(),l("tr",{key:_,class:"text-center"},[t("td",null,[t("h2",$,d(s.product.title),1)]),t("td",null,d(s.product.unit),1),t("td",null,d(s.product.origin_price*s.qty)+"堂",1),t("td",null,[t("div",tt,[t("button",et,d(s.qty),1),t("ul",st,[(n(),l(b,null,f(20,(p,V)=>t("li",{key:V},[t("a",{onClick:U=>i.changeQty(p,s.id),class:"dropdown-item"},d(p),9,ot)])),64))])])]),t("td",null,d(i.formatNumber(s.total)),1),t("td",null,[t("button",{type:"button",class:"btn btn-primary rounded-pill",onClick:p=>i.openDelModal(s)},"刪除",8,at)])]))),128)),t("tr",lt,[nt,dt,it,rt,ct,t("td",ut,[t("h2",mt,[m("總金額:NT "),t("span",_t,d(i.formatNumber(o.cartData.total)),1)])])])])]),t("div",pt,[t("div",ht,[(n(!0),l(b,null,f(o.cartData.carts,(s,_)=>(n(),l("ul",{key:_,class:"border-bottom pb-3 border-primary"},[t("li",null,[t("div",bt,[u(P,{to:`/class/${s.product.id}`},{default:C(()=>[t("h2",yt,d(s.product.title),1)]),_:2},1032,["to"]),t("button",{type:"button",class:"btn btn-primary rounded-pill",onClick:p=>i.openDelModal(s)},"刪除",8,ft)]),t("div",vt,[t("div",gt,[m(" 購買次數: "),t("button",Dt,d(s.qty),1),t("ul",kt,[(n(),l(b,null,f(20,(p,V)=>t("li",{key:V},[t("a",{onClick:U=>i.changeQty(p,s.id),class:"dropdown-item"},d(p),9,xt)])),64))])]),t("div",null,"堂數:"+d(s.product.origin_price*s.qty),1),t("div",null,"課程總價格:"+d(i.formatNumber(s.total)),1)])])]))),128)),t("div",wt,[t("h2",Ct,[m(" 總金額:NT "),t("span",Mt,d(i.formatNumber(o.cartData.total)),1)])])])])])])):c("",!0),o.num===2?(n(),l("div",Nt,[t("div",Vt,[t("label",At,[m("*姓名: "),r.姓名?(n(),l("span",Bt,d(r.姓名),1)):c("",!0)]),u(k,{id:"name",name:"姓名",type:"text",class:h(["form-control",{"is-invalid":r.姓名}]),placeholder:"請輸入 姓名",rules:"required",modelValue:o.userData.user.name,"onUpdate:modelValue":e[0]||(e[0]=s=>o.userData.user.name=s),onClick:e[1]||(e[1]=s=>i.disabledBtn())},null,8,["class","modelValue"]),u(x,{name:"姓名",class:"invalid-feedback"})]),t("div",Pt,[t("label",It,[m("*信箱: "),r.email?(n(),l("span",Tt,d(r.email),1)):c("",!0)]),u(k,{id:"email",name:"email",type:"email",class:h(["form-control",{"is-invalid":r.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:o.userData.user.email,"onUpdate:modelValue":e[2]||(e[2]=s=>o.userData.user.email=s)},null,8,["class","modelValue"]),u(x,{name:"email",class:"invalid-feedback"})]),t("div",St,[t("label",Ut,[m("*手機號碼: "),r.電話?(n(),l("span",Et,d(r.電話),1)):c("",!0)]),u(k,{id:"phone",name:"電話",type:"tel",class:h(["form-control",{"is-invalid":r.電話}]),placeholder:"0912345678",rules:i.isPhone,modelValue:o.userData.user.phone,"onUpdate:modelValue":e[3]||(e[3]=s=>o.userData.user.phone=s)},null,8,["class","rules","modelValue"]),u(x,{name:"電話",class:"invalid-feedback"})]),t("div",Lt,[t("label",Rt,[m("付款方式: "),r.付款方式?(n(),l("span",qt,d(r.付款方式),1)):c("",!0)]),u(k,{id:"phone",name:"付款方式",type:"select",class:h(["form-control",{"is-invalid":r.付款方式}]),placeholder:"請選擇",rules:"required",modelValue:o.paymentMethod,"onUpdate:modelValue":e[5]||(e[5]=s=>o.paymentMethod=s)},{default:C(()=>[w(t("select",{class:"form-select",id:"payment","onUpdate:modelValue":e[4]||(e[4]=s=>o.paymentMethod=s)},zt,512),[[A,o.paymentMethod]])]),_:2},1032,["class","modelValue"]),u(x,{name:"付款方式",class:"invalid-feedback"})]),t("div",Qt,[t("label",Ft,[m("*地址: "),r.地址?(n(),l("span",Wt,d(r.地址),1)):c("",!0)]),w(t("select",{class:"btn btn-outline-secondary",onChange:e[6]||(e[6]=(...s)=>i.city&&i.city(...s)),"onUpdate:modelValue":e[7]||(e[7]=s=>o.address.city=s)},[o.address.city?c("",!0):(n(),l("option",Gt,"請選擇")),(n(!0),l(b,null,f(o.addressData,(s,_)=>(n(),l("option",{value:s.CityName,key:_},d(s.CityName),9,Ht))),128))],544),[[A,o.address.city]]),w(t("select",{class:"btn btn-outline-secondary",disabled:!o.address.city,"onUpdate:modelValue":e[8]||(e[8]=s=>o.address.areaName=s)},[o.address.areaName?c("",!0):(n(),l("option",Xt,"請選擇")),(n(!0),l(b,null,f(o.address.areaList,(s,_)=>(n(),l("option",{value:s.AreaName,key:_},d(s.AreaName),9,Yt))),128))],8,Kt),[[A,o.address.areaName]]),u(k,{id:"地址",name:"地址",type:"text",class:h(["form-control",{"is-invalid":r.地址}]),placeholder:"請輸入 路段 門牌號碼",rules:"required",modelValue:o.address.content,"onUpdate:modelValue":e[9]||(e[9]=s=>o.address.content=s),disabled:!o.address.areaName},null,8,["class","modelValue","disabled"]),u(x,{name:"地址",class:"invalid-feedback"})]),t("div",Zt,[$t,w(t("textarea",{class:"form-control","aria-label":"With textarea",placeholder:"可以說說自己，或是想告訴我們的","onUpdate:modelValue":e[10]||(e[10]=s=>o.userData.message=s)},null,512),[[I,o.userData.message]])]),t("div",te,[ee,t("div",se,[w(t("input",{id:"coupon",type:"text",class:"form-control",placeholder:"輸入優惠券","onUpdate:modelValue":e[11]||(e[11]=s=>o.coupon.couponNum=s),disabled:o.coupon.couponJudge},null,8,oe),[[I,o.coupon.couponNum]]),t("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[12]||(e[12]=s=>i.couponBtn()),disabled:o.coupon.couponJudge},[o.coupon.couponJudge?(n(),l("span",le,"已套用")):(n(),l("span",ne,"套用"))],8,ae),o.coupon.couponJudge?(n(),l("button",{key:0,class:"btn btn-outline-secondary",type:"button",onClick:e[13]||(e[13]=s=>i.couponBtnDel())},"重設優惠券")):c("",!0)])]),t("div",de,[t("div",ie,[o.coupon.couponJudge?(n(),l("h2",ue,[m("總金額:NT "),t("span",me,d(i.formatNumber(o.cartData.final_total)),1)])):(n(),l("h2",re,[m("總金額:NT "),t("span",ce,d(i.formatNumber(o.cartData.total)),1)]))])])])):c("",!0),t("div",_e,[o.num===2?(n(),l("button",{key:0,class:"btn btn-primary rounded-pill me-3",type:"button",onClick:e[14]||(e[14]=(...s)=>i.preBtn&&i.preBtn(...s))},"上一步")):c("",!0),o.num===1?(n(),l("button",{key:1,class:"btn btn-primary rounded-pill me-3",type:"button",onClick:e[15]||(e[15]=(...s)=>i.nextBtn&&i.nextBtn(...s))},"下一步")):c("",!0),o.num===2?(n(),l("button",{key:2,class:"btn btn-primary rounded-pill me-3 test",type:"submit",disabled:r.付款方式||o.disabled},"送出資料",8,pe)):c("",!0)])]),_:1}),o.num===3?(n(),l("div",he,[be,ye,t("div",fe,[u(P,{to:"/",class:"btn btn-secondary"},{default:C(()=>[m("回到首頁")]),_:1})])])):c("",!0)])])]),t("div",ve,[t("div",ge,[t("div",De,[t("div",ke,[t("h5",xe,"金額為: "+d(o.cartData.final_total),1),we]),Ce,t("div",Me,[Ne,t("button",{type:"button",class:"btn btn-primary",onClick:e[17]||(e[17]=r=>i.pay())},"立即支付")])])])],512),t("div",Ve,[t("div",Ae,[t("div",Be,[t("div",Pe,[o.delData.title?(n(),l("h5",Ie,d(o.delData.title),1)):c("",!0),Te]),Se,t("div",Ue,[Ee,t("button",{type:"button",class:"btn btn-primary",onClick:e[18]||(e[18]=r=>i.delCart(o.delData.id))},"確認移出")])])])],512)],64)}const ze=L(j,[["render",Le]]);export{ze as default};
