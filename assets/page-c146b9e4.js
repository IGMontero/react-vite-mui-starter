import{k as u,r as l,i as c,aj as m,ak as t}from"./index-86247d99.js";function E(e,f=[]){const a=u();l.useEffect(()=>{const r=document.title;return document.title=a.pathname==="/"?(e==null?void 0:e.title)??c.app.name:e!=null&&e.title?`${e.title} - ${c.app.name}`:c.app.name,function(){document.title=r}},[...f,a,e==null?void 0:e.title]),l.useEffect(()=>{(e==null?void 0:e.trackPageView)!==!1&&m(t(),"page_view",{page_title:(e==null?void 0:e.title)??c.app.name,page_path:`${a.pathname}${a.search}`})},[a,e==null?void 0:e.title,e==null?void 0:e.trackPageView])}export{E as u};