import{L as k}from"./index-g4Q1I_Cp.js";/* empty css              */import{S as _}from"./sweetalert2.all-t36qbmOe.js";import{a as u}from"./axios-G2rPRu76.js";import{P as V}from"./PaginationView-QYYX04UQ.js";import{M as b}from"./bootstrap.esm-TTjMTX3M.js";import{_ as x,c as i,b as o,F as g,i as I,d as f,g as v,t as l,z as c,D as p,e as L,E as w,r as D,o as d}from"./index-Ej9kf163.js";var E={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_API_NAME:"ssozr",BASE_URL:"/vue2024week62/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:r,VITE_APP_API_NAME:h}=E,A={data(){return{isLoading:!1,modal:!0,coupons:"",couponModal:"",delCouponModal:"",editDate:"",editId:"",delId:"",pagination:{},couponData:{title:"",code:"",due_date:"",percent:"",is_enabled:0}}},methods:{getCoupons(e=1){u.get(`${r}/v2/api/${h}/admin/coupons?page=${e}`).then(t=>{this.coupons=t.data,this.pagination=t.data.pagination}).catch(t=>{alert(t.data.message)}).finally(()=>{this.isLoading=!1})},openCouponMadl(){this.modal=!0,this.couponData={},this.couponData.is_enabled=0,this.couponModal.show()},openEdit(e){this.couponData={},this.modal=!1,this.couponData={...e},this.editId=e.id,this.editDate=this.couponData.due_date,this.couponData.due_date=this.couponData.due_date*1e3,this.couponModal.show()},newCoupon(){if(this.isLoading=!0,this.couponData.percent<=0||this.couponData.percent>=100){alert("折扣不得大於100%或是負數"),this.couponModal.hide(),this.isLoading=!1;return}if(this.modal===!1){this.timeChange();const e={...this.couponData};u.put(`${r}/v2/api/${h}/admin/coupon/${this.editId}`,{data:e}).then(t=>{this.getCoupons(),_.fire(`${t.data.message}`),this.couponModal.hide()}).catch(t=>{alert(t.data.message)})}else{this.timeChange();const e={...this.couponData};u.post(`${r}/v2/api/${h}/admin/coupon`,{data:e}).then(t=>{_.fire(`${t.data.message}`),this.getCoupons(),this.couponModal.hide()}).catch(t=>{alert(t.data.message)})}},timeChange(){const e=new Date(this.couponData.due_date);e.setHours(0,0,0,0);const t=e.getTime()/1e3;this.couponData.due_date=t},time(e){const t=new Date(e*1e3),m={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return t.toLocaleString("zh-TW",m)},openDelCoupon(e){this.couponData={...e},this.delCouponModal.show(),this.delId=e.id},delCoupon(){this.loading=!0,u.delete(`${r}/v2/api/${h}/admin/coupon/${this.delId}`).then(e=>{_.fire(`${e.data.message}`),this.getCoupons(),this.delCouponModal.hide()}).catch(e=>{alert(e.data.message)})},changePage(e){this.getCoupons(e)}},components:{Pagination:V,Loading:k},mounted(){this.isLoading=!0,this.getCoupons(),this.couponModal=new b(this.$refs.couponModal),this.delCouponModal=new b(this.$refs.delCouponModal)}},U={class:"text-end my-4"},T={class:"table"},S=o("thead",null,[o("tr",null,[o("th",null,"名稱"),o("th",null,"折扣百分比"),o("th",null,"到期日"),o("th",null,"是否啟用"),o("th",null,"編輯")])],-1),N={key:0},R={key:1},B=["onClick"],z=["onClick"],F={class:"modal",tabindex:"-1",ref:"couponModal",id:"couponModal"},O={class:"modal-dialog"},H={class:"modal-content"},W={class:"modal-header"},j=o("h5",{class:"modal-title"},"建立優惠券",-1),q=o("button",{type:"button",class:"btn-cslose","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),G={class:"modal-body"},J={class:"mb-3"},K=o("label",{for:"title",class:"form-label"},"優惠券名稱",-1),Q={class:"mb-3"},X=o("label",{for:"coupon_code",class:"form-label"},"優惠碼",-1),Y={class:"mb-3"},Z=o("label",{for:"due_date",class:"form-label"},"到期日",-1),$={key:0,class:"py-0 my-0"},oo=o("br",null,null,-1),to={class:"mb-3"},eo=o("label",{for:"percent",class:"form-label"},"折扣百分比",-1),so={class:"mb-3"},no={class:"form-check"},ao=o("label",{for:"is_enabled",class:"form-label"},"是否啟用",-1),lo={class:"modal-footer"},io=o("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1),co={class:"modal",tabindex:"-1",ref:"delCouponModal"},uo={class:"modal-dialog"},po={class:"modal-content"},ro={class:"modal-header"},ho={class:"modal-title"},_o=o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),mo=o("div",{class:"modal-body"},[o("p",null,"是否確認刪除此優惠券?")],-1),bo={class:"modal-footer"},go=o("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function fo(e,t,m,vo,n,a){const C=D("Pagination"),y=D("loading");return d(),i(g,null,[o("div",U,[o("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=s=>a.openCouponMadl())},"建立優惠券")]),o("table",T,[S,o("tbody",null,[(d(!0),i(g,null,I(n.coupons.coupons,(s,M)=>(d(),i("tr",{key:M},[o("td",null,l(s.title),1),o("td",null,l(s.percent),1),o("td",null,l(a.time(s.due_date)),1),o("td",null,[s.is_enabled?(d(),i("p",N,"已啟用")):(d(),i("p",R,"未啟用"))]),o("button",{type:"button",class:"btn btn-outline-primary",onClick:P=>a.openEdit(s)},"編輯",8,B),o("button",{type:"button",class:"btn btn-outline-danger",onClick:P=>a.openDelCoupon(s)},"刪除",8,z)]))),128))])]),f(C,{pagination:n.pagination,onChangePage:a.changePage},null,8,["pagination","onChangePage"]),f(y,{active:n.isLoading,"onUpdate:active":t[1]||(t[1]=s=>n.isLoading=s)},null,8,["active"]),o("div",F,[o("div",O,[v(l(n.couponData)+" ",1),o("div",H,[o("div",W,[j,v(" "+l(n.couponData.due_date)+" ",1),q]),o("div",G,[o("div",J,[K,c(o("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[2]||(t[2]=s=>n.couponData.title=s)},null,512),[[p,n.couponData.title]])]),o("div",Q,[X,c(o("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":t[3]||(t[3]=s=>n.couponData.code=s)},null,512),[[p,n.couponData.code]])]),o("div",Y,[Z,n.modal?L("",!0):(d(),i("p",$,"目前到期日"+l(a.time(n.editDate)),1)),oo,c(o("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":t[4]||(t[4]=s=>n.couponData.due_date=s)},null,512),[[p,n.couponData.due_date]])]),o("div",to,[eo,c(o("input",{type:"number",class:"form-control",id:"percent","onUpdate:modelValue":t[5]||(t[5]=s=>n.couponData.percent=s)},null,512),[[p,n.couponData.percent]])]),o("div",so,[o("div",no,[ao,c(o("input",{type:"checkbox",class:"form-check-input","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":t[6]||(t[6]=s=>n.couponData.is_enabled=s)},null,512),[[w,n.couponData.is_enabled]])])])]),o("div",lo,[io,o("button",{type:"button",class:"btn btn-primary",onClick:t[7]||(t[7]=s=>a.newCoupon())},"確定編輯")])])])],512),o("div",co,[o("div",uo,[o("div",po,[o("div",ro,[o("h5",ho,l(n.couponData.title),1),_o]),mo,o("div",bo,[go,o("button",{type:"button",class:"btn btn-primary",onClick:t[8]||(t[8]=s=>a.delCoupon())},"確認刪除")])])])],512)],64)}const xo=x(A,[["render",fo]]);export{xo as default};
