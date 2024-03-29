import{L as k}from"./index-PIzZZ2j9.js";/* empty css              */import{S as _}from"./sweetalert2.all-t36qbmOe.js";import{a as u}from"./axios-G2rPRu76.js";import{P}from"./PaginationView-4dTF-HzO.js";import{M as b}from"./bootstrap.esm-TTjMTX3M.js";import{_ as V,c as l,b as t,F as g,i as x,d as f,t as i,z as c,D as p,e as I,E as w,r as v,o as d}from"./index-URi32VNB.js";var E={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_API_NAME:"ssozr",BASE_URL:"/vue2024week62/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:r,VITE_APP_API_NAME:m}=E,L={data(){return{modalTitle:"",isLoading:!1,modal:!0,coupons:"",couponModal:"",delCouponModal:"",editDate:"",editId:"",delId:"",pagination:{},couponData:{title:"",code:"",due_date:"",percent:1,is_enabled:0}}},methods:{getCoupons(e=1){u.get(`${r}/v2/api/${m}/admin/coupons?page=${e}`).then(o=>{this.coupons=o.data,this.pagination=o.data.pagination}).catch(o=>{alert(o.data.message)}).finally(()=>{this.isLoading=!1})},openCouponMadl(){this.modalTitle="建立優惠券",this.modal=!0,this.couponData={percent:1},this.couponData.is_enabled=0,this.couponModal.show()},openEdit(e){this.modalTitle="編輯優惠券",this.couponData={},this.modal=!1,this.couponData={...e},this.editId=e.id,this.editDate=this.couponData.due_date,this.couponData.due_date=this.couponData.due_date*1e3,this.couponModal.show()},newCoupon(){if(this.isLoading=!0,this.modal===!1){this.timeChange();const e={...this.couponData};console.log(e),u.put(`${r}/v2/api/${m}/admin/coupon/${this.editId}`,{data:e}).then(o=>{console.log(o),o.success===!0&&this.couponModal.hide(),this.getCoupons(),_.fire(`${o.data.message}`)}).catch(o=>{alert(o.data.message)})}else{this.timeChange();const e={...this.couponData};u.post(`${r}/v2/api/${m}/admin/coupon`,{data:e}).then(o=>{o.success===!0&&this.couponModal.hide(),_.fire(`${o.data.message}`),this.getCoupons()}).catch(o=>{alert(o.data.message)})}},timeChange(){const e=new Date(this.couponData.due_date);e.setHours(0,0,0,0);const o=e.getTime()/1e3;this.couponData.due_date=o},time(e){const o=new Date(e*1e3),h={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return o.toLocaleString("zh-TW",h)},openDelCoupon(e){this.couponData={...e},this.delCouponModal.show(),this.delId=e.id},delCoupon(){this.loading=!0,u.delete(`${r}/v2/api/${m}/admin/coupon/${this.delId}`).then(e=>{_.fire(`${e.data.message}`),this.getCoupons(),this.delCouponModal.hide()}).catch(e=>{alert(e.data.message)})},changePage(e){this.getCoupons(e)},percentValue(e){this.couponData.percent+=e}},components:{Pagination:P,Loading:k},mounted(){this.isLoading=!0,this.getCoupons(),this.couponModal=new b(this.$refs.couponModal),this.delCouponModal=new b(this.$refs.delCouponModal)}},A={class:"container"},T={class:"text-end my-4"},U={class:"table"},S=t("thead",null,[t("tr",null,[t("th",null,"名稱"),t("th",null,"折扣百分比"),t("th",null,"到期日"),t("th",null,"是否啟用"),t("th",null,"編輯")])],-1),N={key:0,class:"text-secondary"},R={key:1},B=["onClick"],z=["onClick"],F={class:"modal",tabindex:"-1",ref:"couponModal",id:"couponModal"},O={class:"modal-dialog"},H={class:"modal-content"},W={class:"modal-header"},j={class:"modal-title"},q=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),G={class:"modal-body"},J={class:"mb-3"},K=t("label",{for:"title",class:"form-label"},"優惠券名稱",-1),Q={class:"mb-3"},X=t("label",{for:"coupon_code",class:"form-label"},"優惠碼",-1),Y={class:"mb-3"},Z=t("label",{for:"due_date",class:"form-label"},"到期日",-1),$={key:0,class:"py-0 my-0"},tt=t("br",null,null,-1),ot={class:"mb-3"},et=t("label",{for:"percent",class:"form-label"},"折扣百分比",-1),nt=t("br",null,null,-1),st=["disabled"],at=["disabled"],lt=["disabled"],it=["disabled"],dt={class:"mb-3"},ct={class:"form-check"},ut=t("label",{for:"is_enabled",class:"form-label"},"是否啟用",-1),pt={class:"modal-footer"},rt=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1),mt={class:"modal",tabindex:"-1",ref:"delCouponModal"},_t={class:"modal-dialog"},ht={class:"modal-content"},bt={class:"modal-header"},gt={class:"modal-title"},ft=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),vt=t("div",{class:"modal-body"},[t("p",null,"是否確認刪除此優惠券?")],-1),yt={class:"modal-footer"},Ct=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function Dt(e,o,h,Mt,s,a){const y=v("Pagination"),C=v("loading");return d(),l(g,null,[t("div",A,[t("div",T,[t("button",{type:"button",class:"btn btn-primary",onClick:o[0]||(o[0]=n=>a.openCouponMadl())},"建立優惠券")]),t("table",U,[S,t("tbody",null,[(d(!0),l(g,null,x(s.coupons.coupons,(n,D)=>(d(),l("tr",{key:D},[t("td",null,i(n.title),1),t("td",null,i(n.percent),1),t("td",null,i(a.time(n.due_date)),1),t("td",null,[n.is_enabled?(d(),l("p",N,"已啟用")):(d(),l("p",R,"未啟用"))]),t("button",{type:"button",class:"btn btn-outline-primary",onClick:M=>a.openEdit(n)},"編輯",8,B),t("button",{type:"button",class:"btn btn-outline-danger",onClick:M=>a.openDelCoupon(n)},"刪除",8,z)]))),128))])]),f(y,{pagination:s.pagination,onChangePage:a.changePage},null,8,["pagination","onChangePage"]),f(C,{active:s.isLoading,"onUpdate:active":o[1]||(o[1]=n=>s.isLoading=n)},null,8,["active"])]),t("div",F,[t("div",O,[t("div",H,[t("div",W,[t("h5",j,i(s.modalTitle),1),q]),t("div",G,[t("div",J,[K,c(t("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":o[2]||(o[2]=n=>s.couponData.title=n)},null,512),[[p,s.couponData.title]])]),t("div",Q,[X,c(t("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":o[3]||(o[3]=n=>s.couponData.code=n)},null,512),[[p,s.couponData.code]])]),t("div",Y,[Z,s.modal?I("",!0):(d(),l("p",$,"目前到期日"+i(a.time(s.editDate)),1)),tt,c(t("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":o[4]||(o[4]=n=>s.couponData.due_date=n)},null,512),[[p,s.couponData.due_date]])]),t("div",ot,[et,nt,t("button",{type:"button",class:"btn btn-primary me-2 mb-2",onClick:o[5]||(o[5]=n=>a.percentValue(1)),disabled:s.couponData.percent===100},"+1",8,st),t("button",{type:"button",class:"btn btn-primary mb-2",onClick:o[6]||(o[6]=n=>a.percentValue(10)),disabled:s.couponData.percent>90},"+10",8,at),c(t("input",{type:"number",class:"form-control",id:"percent","onUpdate:modelValue":o[7]||(o[7]=n=>s.couponData.percent=n),disabled:!0},null,512),[[p,s.couponData.percent]]),t("button",{type:"button",class:"btn btn-primary me-2 mt-2",onClick:o[8]||(o[8]=n=>a.percentValue(-1)),disabled:s.couponData.percent===0},"-1",8,lt),t("button",{type:"button",class:"btn btn-primary mt-2",onClick:o[9]||(o[9]=n=>a.percentValue(-10)),disabled:s.couponData.percent<10},"-10",8,it)]),t("div",dt,[t("div",ct,[ut,c(t("input",{type:"checkbox",class:"form-check-input","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":o[10]||(o[10]=n=>s.couponData.is_enabled=n)},null,512),[[w,s.couponData.is_enabled]])])])]),t("div",pt,[rt,t("button",{type:"button",class:"btn btn-primary",onClick:o[11]||(o[11]=n=>a.newCoupon())},"確定")])])])],512),t("div",mt,[t("div",_t,[t("div",ht,[t("div",bt,[t("h5",gt,i(s.couponData.title),1),ft]),vt,t("div",yt,[Ct,t("button",{type:"button",class:"btn btn-primary",onClick:o[12]||(o[12]=n=>a.delCoupon())},"確認刪除")])])])],512)],64)}const Lt=V(L,[["render",Dt]]);export{Lt as default};
