import{a as c}from"./axios-G2rPRu76.js";import{_ as d,c as l,b as h,d as o,w as s,g as e,i as m,e as p,F as f,r as n,o as u}from"./index-ZYguVHt9.js";var k={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_API_NAME:"ssozr",BASE_URL:"/vue2024week62/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:V}=k,P={data(){return{show:!1}},methods:{check(){const r=document.cookie.replace(/(?:(?:^|.*;\s*)ssozrToken\s*=\s*([^;]*).*$)|^.*$/,"$1");c.defaults.headers.common.Authorization=r,c.post(`${V}/v2/api/user/check`).then(a=>{a.data.success===!0?this.show=!0:(alert("請先登入"),this.$router.push("/login")),console.log(a.data.success)}).catch(()=>{alert("請先登入"),this.$router.push("/login")})}},mounted(){this.check()}};function w(r,a,A,R,i,$){const t=n("RouterLink"),_=n("RouterView");return u(),l(f,null,[h("nav",null,[o(t,{to:"/admin/article"},{default:s(()=>[e("文章管理")]),_:1}),e("| "),o(t,{to:"/admin/order"},{default:s(()=>[e("訂單管理")]),_:1}),e(" | "),o(t,{to:"/admin/products"},{default:s(()=>[e("課程管理")]),_:1}),e("| "),o(t,{to:"/admin/voucher"},{default:s(()=>[e("優惠券管理")]),_:1}),e("| "),o(t,{to:"/"},{default:s(()=>[e("登出")]),_:1})]),i.show?(u(),m(_,{key:0})):p("",!0)],64)}const x=d(P,[["render",w]]);export{x as default};
