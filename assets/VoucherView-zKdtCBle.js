import{S as _,P as k,L as V,M as b}from"./bootstrap.esm-jMk4ECTY.js";import{a as u}from"./axios-G2rPRu76.js";import{_ as x,c as i,b as t,F as g,g as I,a as f,d as v,t as l,h as c,v as p,f as L,i as w,r as D,o as d}from"./index-6aoXa4Ci.js";var E={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_API_NAME:"ssozr",BASE_URL:"/vue2024week62/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:r,VITE_APP_API_NAME:h}=E,A={data(){return{isLoading:!1,modal:!0,coupons:"",couponModal:"",delCouponModal:"",editDate:"",editId:"",delId:"",pagination:{},couponData:{title:"",code:"",due_date:"",percent:"",is_enabled:0}}},methods:{getCoupons(e=1){u.get(`${r}/v2/api/${h}/admin/coupons?page=${e}`).then(o=>{this.coupons=o.data,this.pagination=o.data.pagination,this.isLoading=!1}).catch(o=>{alert(o.data.message)})},openCouponMadl(){this.modal=!0,this.couponData={},this.couponData.is_enabled=0,this.couponModal.show()},openEdit(e){this.couponData={},this.modal=!1,this.couponData={...e},this.editId=e.id,this.editDate=this.couponData.due_date,this.couponData.due_date=this.couponData.due_date*1e3,this.couponModal.show()},newCoupon(){if(this.isLoading=!0,this.couponData.percent<=0||this.couponData.percent>=100){alert("折扣不得大於100%或是負數"),this.couponModal.hide(),this.isLoading=!1;return}if(this.modal===!1){this.timeChange();const e={...this.couponData};u.put(`${r}/v2/api/${h}/admin/coupon/${this.editId}`,{data:e}).then(o=>{this.getCoupons(),_.fire(`${o.data.message}`),this.couponModal.hide()}).catch(o=>{alert(o.data.message)})}else{this.timeChange();const e={...this.couponData};u.post(`${r}/v2/api/${h}/admin/coupon`,{data:e}).then(o=>{_.fire(`${o.data.message}`),this.getCoupons(),this.couponModal.hide()}).catch(o=>{alert(o.data.message)})}},timeChange(){const e=new Date(this.couponData.due_date);e.setHours(0,0,0,0);const o=e.getTime()/1e3;this.couponData.due_date=o},time(e){const o=new Date(e*1e3),m={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return o.toLocaleString("zh-TW",m)},openDelCoupon(e){this.couponData={...e},this.delCouponModal.show(),this.delId=e.id},delCoupon(){this.loading=!0,u.delete(`${r}/v2/api/${h}/admin/coupon/${this.delId}`).then(e=>{_.fire(`${e.data.message}`),this.getCoupons(),this.delCouponModal.hide()}).catch(e=>{alert(e.data.message)})},changePage(e){this.getCoupons(e)}},components:{Pagination:k,Loading:V},mounted(){this.isLoading=!0,this.getCoupons(),this.couponModal=new b(this.$refs.couponModal),this.delCouponModal=new b(this.$refs.delCouponModal)}},U={class:"text-end my-4"},T={class:"table"},S=t("thead",null,[t("tr",null,[t("th",null,"名稱"),t("th",null,"折扣百分比"),t("th",null,"到期日"),t("th",null,"是否啟用"),t("th",null,"編輯")])],-1),N={key:0},R={key:1},B=["onClick"],z=["onClick"],F={class:"modal",tabindex:"-1",ref:"couponModal",id:"couponModal"},O={class:"modal-dialog"},H={class:"modal-content"},W={class:"modal-header"},j=t("h5",{class:"modal-title"},"建立優惠券",-1),q=t("button",{type:"button",class:"btn-cslose","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),G={class:"modal-body"},J={class:"mb-3"},K=t("label",{for:"title",class:"form-label"},"優惠券名稱",-1),Q={class:"mb-3"},X=t("label",{for:"coupon_code",class:"form-label"},"優惠碼",-1),Y={class:"mb-3"},Z=t("label",{for:"due_date",class:"form-label"},"到期日",-1),$={key:0,class:"py-0 my-0"},tt=t("br",null,null,-1),ot={class:"mb-3"},et=t("label",{for:"percent",class:"form-label"},"折扣百分比",-1),st={class:"mb-3"},nt={class:"form-check"},at=t("label",{for:"is_enabled",class:"form-label"},"是否啟用",-1),lt={class:"modal-footer"},it=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1),dt={class:"modal",tabindex:"-1",ref:"delCouponModal"},ct={class:"modal-dialog"},ut={class:"modal-content"},pt={class:"modal-header"},rt={class:"modal-title"},ht=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),_t=t("div",{class:"modal-body"},[t("p",null,"是否確認刪除此優惠券?")],-1),mt={class:"modal-footer"},bt=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function gt(e,o,m,ft,n,a){const C=D("Pagination"),y=D("loading");return d(),i(g,null,[t("div",U,[t("button",{type:"button",class:"btn btn-primary",onClick:o[0]||(o[0]=s=>a.openCouponMadl())},"建立優惠券")]),t("table",T,[S,t("tbody",null,[(d(!0),i(g,null,I(n.coupons.coupons,(s,M)=>(d(),i("tr",{key:M},[t("td",null,l(s.title),1),t("td",null,l(s.percent),1),t("td",null,l(a.time(s.due_date)),1),t("td",null,[s.is_enabled?(d(),i("p",N,"已啟用")):(d(),i("p",R,"未啟用"))]),t("button",{type:"button",class:"btn btn-outline-primary",onClick:P=>a.openEdit(s)},"編輯",8,B),t("button",{type:"button",class:"btn btn-outline-danger",onClick:P=>a.openDelCoupon(s)},"刪除",8,z)]))),128))])]),f(C,{pagination:n.pagination,onChangePage:a.changePage},null,8,["pagination","onChangePage"]),f(y,{active:n.isLoading,"onUpdate:active":o[1]||(o[1]=s=>n.isLoading=s)},null,8,["active"]),t("div",F,[t("div",O,[v(l(n.couponData)+" ",1),t("div",H,[t("div",W,[j,v(" "+l(n.couponData.due_date)+" ",1),q]),t("div",G,[t("div",J,[K,c(t("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":o[2]||(o[2]=s=>n.couponData.title=s)},null,512),[[p,n.couponData.title]])]),t("div",Q,[X,c(t("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":o[3]||(o[3]=s=>n.couponData.code=s)},null,512),[[p,n.couponData.code]])]),t("div",Y,[Z,n.modal?L("",!0):(d(),i("p",$,"目前到期日"+l(a.time(n.editDate)),1)),tt,c(t("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":o[4]||(o[4]=s=>n.couponData.due_date=s)},null,512),[[p,n.couponData.due_date]])]),t("div",ot,[et,c(t("input",{type:"number",class:"form-control",id:"percent","onUpdate:modelValue":o[5]||(o[5]=s=>n.couponData.percent=s)},null,512),[[p,n.couponData.percent]])]),t("div",st,[t("div",nt,[at,c(t("input",{type:"checkbox",class:"form-check-input","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":o[6]||(o[6]=s=>n.couponData.is_enabled=s)},null,512),[[w,n.couponData.is_enabled]])])])]),t("div",lt,[it,t("button",{type:"button",class:"btn btn-primary",onClick:o[7]||(o[7]=s=>a.newCoupon())},"確定編輯")])])])],512),t("div",dt,[t("div",ct,[t("div",ut,[t("div",pt,[t("h5",rt,l(n.couponData.title),1),ht]),_t,t("div",mt,[bt,t("button",{type:"button",class:"btn btn-primary",onClick:o[8]||(o[8]=s=>a.delCoupon())},"確認刪除")])])])],512)],64)}const yt=x(A,[["render",gt]]);export{yt as default};
