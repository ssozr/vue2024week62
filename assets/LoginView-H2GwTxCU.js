import{a as c}from"./axios-G2rPRu76.js";import{_ as m,c as u,b as s,h as i,v as l,bD as p,o as _}from"./index-6aoXa4Ci.js";var f={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_API_NAME:"ssozr",BASE_URL:"/vue2024week62/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:h}=f,v={data(){return{user:{email:"",passWord:""}}},methods:{login(){const r={username:this.user.email,password:this.user.passWord};c.post(`${h}/v2/admin/signin`,r).then(e=>{const{token:a,expired:n}=e.data;document.cookie=`ssozrToken=${a}; expires=${new Date(n)}`,alert(e.data.message),this.$router.push("/admin/products")}).catch(e=>{alert(e.data.message)})}},mounted(){}},w={class:"container"},b={class:"row justify-content-center"},g=s("h1",{class:"h3 mb-3 font-weight-normal"}," 請先登入 ",-1),P={class:"col-8"},x={id:"form",class:"form-signin"},E={class:"form-floating mb-3"},A=s("label",{for:"username"},"Email address",-1),I={class:"form-floating"},V=s("label",{for:"password"},"Password",-1),k=s("p",{class:"mt-5 mb-3 text-muted"}," © 2021~∞ - 六角學院2 ",-1);function D(r,e,a,n,o,d){return _(),u("div",w,[s("div",b,[g,s("div",P,[s("form",x,[s("div",E,[i(s("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>o.user.email=t),type:"email",class:"form-control",id:"emailInput",placeholder:"name@example.com",required:"",autofocus:""},null,512),[[l,o.user.email]]),A]),s("div",I,[i(s("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>o.user.passWord=t),type:"password",class:"form-control",id:"pwInput",placeholder:"Password",required:""},null,512),[[l,o.user.passWord]]),V]),s("button",{onClick:e[2]||(e[2]=p(t=>d.login(),["prevent"])),class:"btn btn-lg btn-primary w-100 mt-3",type:"submit",id:"loginBtn"}," 登入 ")])])]),k])}const R=m(v,[["render",D]]);export{R as default};
