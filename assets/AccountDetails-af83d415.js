import{j as l,C as d,T as m,l as c,B as p,m as f,r,n as h,o as y,p as x}from"./index-86247d99.js";import{u as b}from"./page-c146b9e4.js";import{A as g}from"./Alert-30ae7243.js";import{T as n}from"./TextField-a9dcc139.js";function T(){const[{input:a,...e},s]=N(),t=C(s),i=j(a,s);return b({title:"Account Details"}),l.jsxs(d,{sx:{my:4},maxWidth:"sm",children:[l.jsx(m,{sx:{mb:4},variant:"h2",children:"Account Details"}),e.error&&l.jsx(g,{sx:{mb:3},severity:"error",children:e.error}),l.jsxs(c,{component:"form",onSubmit:i,children:[l.jsx(n,{name:"displayName",label:"Display Name",value:a.displayName,helperText:" ",onChange:t,disabled:e.loading,InputLabelProps:{shrink:!0},fullWidth:!0,required:!0}),l.jsx(n,{name:"email",type:"email",label:"Email",value:a.email,helperText:" ",onChange:t,disabled:!0,InputLabelProps:{shrink:!0},fullWidth:!0,required:!0}),l.jsx(p,{variant:"contained",type:"submit",children:"Update Profile",disabled:e.loading})]})]})}function N(){const a=f(),[e,s]=r.useState({input:{displayName:(a==null?void 0:a.displayName)??"",email:(a==null?void 0:a.email)??""},loading:a===void 0,error:void 0});return r.useEffect(()=>{a!=null&&a.uid&&s(t=>({...t,input:{...t.input,displayName:a.displayName??"",email:a.email??""},loading:!1}))},[s,a==null?void 0:a.uid,a==null?void 0:a.email,a==null?void 0:a.displayName]),[e,s]}function C(a){return r.useCallback(e=>{const{name:s,value:t}=e.target;a(i=>({...i,input:{...i.input,[s]:t}}))},[a])}function j(a,e){const s=h(async t=>{await y(t,{displayName:a.displayName}),await x(t,a.email)},[a.displayName,a.email]);return r.useCallback(async t=>{t.preventDefault(),e(i=>({...i,loading:!0}));try{await s(),e(i=>({...i,loading:!1,error:void 0}))}catch(i){const o=(i==null?void 0:i.message)??"Failed.";e(u=>({...u,loading:!1,error:o}))}},[e,s])}export{T as default};
