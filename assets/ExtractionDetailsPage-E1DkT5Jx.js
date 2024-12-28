import{d as b,u as S,E as T,r as C,c as m,w as t,V as y,a as D,o as f,e,z as w,b as c,l as p,n as V,H as o,I as d,f as r,B as i,j as u,m as v,J as G,p as N,q as k,s as x,K as B,L,g as M,k as R}from"./index-7mmSwKEc.js";const F=b({__name:"ExtractionDetailsPage",setup(U){var _;const a=S(),g=D();T(()=>{a.selectedGrinder||g.push("/grinder")});const n=C({dose:(_=a.selectedDose)==null?void 0:_.toLowerCase(),method:a.selectedMethod||"",grinder:a.selectedGrinder||"",parameters:{grinderSetting:0,dose:0,extractionTime:0,notes:"",rating:0}}),E=()=>{a.addExtraction(n.value),g.push("/")};return(q,l)=>(f(),m(y,null,{default:t(()=>[e(R,null,{default:t(()=>[e(w,{cols:"12"},{default:t(()=>[l[9]||(l[9]=c("h2",{class:"text-h5 mb-4"},"Extraction Details",-1)),e(p,{class:"mb-4"},{default:t(()=>[e(V,null,{default:t(()=>[l[5]||(l[5]=c("div",{class:"text-subtitle-1"},"Selected Options:",-1)),e(o,null,{default:t(()=>[e(d,null,{default:t(()=>[r("Coffee: "+i(u(a).selectedCoffee),1)]),_:1})]),_:1}),e(o,null,{default:t(()=>[e(d,null,{default:t(()=>[r("Method: "+i(u(a).selectedMethod),1)]),_:1})]),_:1}),e(o,null,{default:t(()=>[e(d,null,{default:t(()=>[r("Dose: "+i(u(a).selectedDose),1)]),_:1})]),_:1}),e(o,null,{default:t(()=>[e(d,null,{default:t(()=>[r("Grinder: "+i(u(a).selectedGrinder),1)]),_:1})]),_:1})]),_:1})]),_:1}),u(a).currentExtraction?(f(),m(p,{key:0},{default:t(()=>[e(v,null,{default:t(()=>l[6]||(l[6]=[r("Previous Settings")])),_:1}),e(V,null,{default:t(()=>[e(G,null,{default:t(()=>[e(o,null,{default:t(()=>[e(d,null,{default:t(()=>[r("Grinder Setting: "+i(u(a).currentExtraction.parameters.grinderSetting),1)]),_:1})]),_:1}),e(o,null,{default:t(()=>[e(d,null,{default:t(()=>[r("Dose: "+i(u(a).currentExtraction.parameters.dose)+"g",1)]),_:1})]),_:1}),e(o,null,{default:t(()=>[e(d,null,{default:t(()=>[r("Extraction Time: "+i(u(a).currentExtraction.parameters.extractionTime)+"s",1)]),_:1})]),_:1}),e(o,null,{default:t(()=>[e(d,null,{default:t(()=>[r("Rating: "+i(u(a).currentExtraction.parameters.rating)+"/5",1)]),_:1})]),_:1}),e(o,null,{default:t(()=>[e(d,null,{default:t(()=>[r("Notes: "+i(u(a).currentExtraction.parameters.notes),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):(f(),m(p,{key:1},{default:t(()=>[e(v,null,{default:t(()=>l[7]||(l[7]=[r("New Extraction")])),_:1}),e(V,null,{default:t(()=>[e(N,{onSubmit:k(E,["prevent"])},{default:t(()=>[e(x,{modelValue:n.value.parameters.grinderSetting,"onUpdate:modelValue":l[0]||(l[0]=s=>n.value.parameters.grinderSetting=s),label:"Grinder Setting",type:"number",required:""},null,8,["modelValue"]),e(x,{modelValue:n.value.parameters.dose,"onUpdate:modelValue":l[1]||(l[1]=s=>n.value.parameters.dose=s),label:"Dose (g)",type:"number",step:"0.1",required:""},null,8,["modelValue"]),e(x,{modelValue:n.value.parameters.extractionTime,"onUpdate:modelValue":l[2]||(l[2]=s=>n.value.parameters.extractionTime=s),label:"Extraction Time (s)",type:"number",required:""},null,8,["modelValue"]),e(B,{modelValue:n.value.parameters.rating,"onUpdate:modelValue":l[3]||(l[3]=s=>n.value.parameters.rating=s),label:"Rating"},null,8,["modelValue"]),e(L,{modelValue:n.value.parameters.notes,"onUpdate:modelValue":l[4]||(l[4]=s=>n.value.parameters.notes=s),label:"Notes"},null,8,["modelValue"]),e(M,{color:"primary",type:"submit"},{default:t(()=>l[8]||(l[8]=[r("Save Extraction")])),_:1})]),_:1})]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1}))}});export{F as default};