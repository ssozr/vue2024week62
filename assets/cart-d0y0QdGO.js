import{D as l,E as c}from"./index-l_moKGUM.js";import{a as s}from"./axios-G2rPRu76.js";var h={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_API_NAME:"ssozr",BASE_URL:"/vue2024week62/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:e,VITE_APP_API_NAME:r}=h,f=l("cart",{state:()=>({carts:[],total:!1,final_total:0,goCart:!1,addCartBtn:!1,toast:!1}),actions:{getCartDataPinia(){s.get(`${e}/v2/api/${r}/cart`).then(t=>{this.carts=t.data.data.carts,this.total=t.data.data.total,this.final_total=t.data.data.final_total}).catch(t=>{alert(t.data.message).error(t)})},addCart(t,o,i){this.addCartBtn=!0,this.toast=!1;const d={product_id:t.id,qty:o};s.post(`${e}/v2/api/${r}/cart`,{data:d}).then(a=>{this.goCart===!1?(i(),this.addCartBtn=!1,this.getCartDataPinia()):(this.goCart=!1,this.getCartDataPinia(),c.push("/cart"))}).catch(a=>{alert(a.data.message).error(a)})},changeGoCart(t){this.goCart=!0,this.addCart(t,1)}}});export{f as c};
