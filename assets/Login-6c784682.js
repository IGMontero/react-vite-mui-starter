import{j as e,S as h,r as c,u as j,s as v,a as b,T as m,c as k,L as x,b as w,C,B as g,D as L}from"./index-6a1577f4.js";import{A as f}from"./Alert-c285d379.js";import{T as p}from"./TextField-bf8d05e2.js";function S(r){const{variant:o,...n}=r;return o==="apple.com"?e.jsxs(h,{role:"img",viewBox:"0 0 24 24",...n,children:[e.jsx("title",{children:"Apple"}),e.jsx("path",{fill:"#000",d:"M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z"})]}):o==="google.com"?e.jsxs(h,{role:"img",viewBox:"0 0 48 48",...n,children:[e.jsx("title",{children:"Google"}),e.jsxs("g",{children:[e.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),e.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),e.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),e.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"}),e.jsx("path",{fill:"none",d:"M0 0h48v48H0z"})]})]}):o==="facebook.com"?e.jsxs(h,{role:"img",viewBox:"0 0 24 24",...n,children:[e.jsx("title",{children:"Facebook"}),e.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})]}):e.jsxs(h,{role:"img",viewBox:"0 0 32 32",...n,children:[e.jsx("title",{children:"Anonymous"}),e.jsx("circle",{fill:"none",stroke:"#999",cx:"16",cy:"16",r:"14",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10}),e.jsx("circle",{fill:"none",stroke:"#999",cx:"16",cy:"13",r:"5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10}),e.jsx("path",{fill:"none",stroke:"#999",d:"M5.4 25.1c1.8-4.1 5.8-7 10.6-7s8.9 2.9 10.6 7",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10})]})}function I(r,o){const[n,i]=c.useState(!1),s=j();return[c.useCallback(async a=>{a.preventDefault();try{i(!0);let t;r.mode==="login"?t=await v({method:"email",email:r.email,password:r.password}):t=await b({email:r.email,password:r.password}),t.user&&(o(l=>l.error?{...l,error:null}:l),s("/"))}catch(t){const l=(t==null?void 0:t.message)??"Login failed.";o(u=>({...u,error:l}))}finally{i(!1)}},[r.email,r.password,r.mode]),n]}function A(r){return c.useState({mode:r.mode,email:"",password:"",code:"",saml:!1,otpSent:void 0,error:void 0})}function M(r){return c.useCallback(function(o){const{name:n,value:i}=o.target;r(s=>s[n]===i?s:{...s,[n]:i})},[r])}function W(r){return c.useCallback(o=>{o.preventDefault(),r(n=>({...n,saml:!n.saml,otpSent:!1,code:""}))},[r])}function P(r){const o=j();return c.useCallback(async function(n){try{const i=n.currentTarget.dataset.method;(await v({method:i})).user&&(r(a=>a.error?{...a,error:null}:a),o("/"))}catch(i){const s=(i==null?void 0:i.message)??"Login failed.";r(a=>({...a,error:s}))}},[o,r])}function T(r){const{sx:o,...n}=r;return e.jsxs(m,{sx:{color:"text.secondary","& span":{opacity:.6},"& a":{fontWeight:500,opacity:.7},"& a:hover":{opacity:1},...o},variant:"body2",...n,children:[e.jsxs("span",{children:["By clicking Continue above, your acknowledge that your have read and understood, and agree to ",k.app.name,"'s"]})," ",e.jsx(x,{color:"inherit",href:"/terms",children:"Terms & Conditions"}),e.jsx("span",{children:" and "}),e.jsx(x,{color:"inherit",href:"/privacy",children:"Privacy Policy"}),e.jsx("span",{children:"."})]})}function z(r){const[o,n]=A(r),i=M(n),s=P(n),[a,t]=I(o,n);W(n);const{pathname:l,search:u}=w(),d=r.mode==="signup";return e.jsxs(C,{maxWidth:"xs",sx:{display:"flex",flexDirection:"column",justifyContent:"center",gap:"1rem",flexGrow:.8},children:[e.jsx(m,{sx:{mb:2,fontWeight:800,order:-3},variant:"h1",align:"center",children:d?"Sign Up":"Login"}),o.error&&e.jsx(f,{sx:{mb:2,order:-2},severity:"error",children:o.error}),o.otpSent&&e.jsx(f,{sx:{mb:2},severity:"success",children:"Please enter the One Time Password (OTP) that has been sent to your email address."}),e.jsx("form",{id:"login-form",onSubmit:a,children:o.otpSent?e.jsx(p,{name:"code",variant:"outlined",label:"OTP code",placeholder:"Enter OTP code...",InputLabelProps:{shrink:!0},InputProps:{sx:{fontWeight:700}},onChange:i,disabled:t,autoComplete:"off",autoFocus:!0,fullWidth:!0,required:!0},"code"):e.jsxs(e.Fragment,{children:[e.jsx(p,{sx:{mb:2},name:"email",type:"email",variant:"outlined",label:"Your email",placeholder:"Enter your email address...",InputLabelProps:{shrink:!0},onChange:i,disabled:t,fullWidth:!0,required:!0},"email"),e.jsx(p,{name:"password",type:"password",variant:"outlined",label:"Your password",placeholder:"Enter your password...",InputLabelProps:{shrink:!0},onChange:i,disabled:t,fullWidth:!0,required:!0},"password")]})}),e.jsx(g,{color:"inherit",form:"login-form",type:"submit",variant:"outlined",size:"large",children:o.otpSent?"Sign In":d?"Sign Up with Email":`Continue with ${o.saml?"SAML":"Email"}`,disabled:t,fullWidth:!0}),d?e.jsxs(m,{sx:{color:"text.secondary"},variant:"body2",align:"center",children:["Already have an account?"," ",e.jsx(x,{sx:{":hover":{color:"text.primary"}},color:"inherit",href:`login${u}`,children:"Log In"})]}):e.jsxs(m,{sx:{color:"text.secondary"},variant:"body2",align:"center",children:["Don't have an account?"," ",e.jsx(x,{sx:{":hover":{color:"text.primary"}},color:"inherit",href:`signup${u}`,children:"Sign Up"})]}),e.jsx(L,{sx:{color:"divider",order:d?void 0:-1},children:"OR"}),e.jsx(g,{sx:{backgroundColor:y=>y.palette.mode==="light"?"white":void 0,order:d?void 0:-2},color:"inherit",type:"submit",variant:"outlined",size:"large",children:"Continue with Google",startIcon:e.jsx(S,{variant:"google.com"}),onClick:s,"data-method":"google.com",fullWidth:!0}),e.jsx(T,{sx:{mt:4}})]})}export{z as default};