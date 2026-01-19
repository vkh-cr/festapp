import{T as c,C as i,L as l,A as d}from"./index-DbFwXZiH.js";class f{constructor(e){this.container=e,this.element=document.createElement("div"),this.element.className="settings-widget",this.render(),this.container.appendChild(this.element)}render(){this.element.innerHTML="",this.element.style.cssText=`
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 100%;
        `,this.renderSection({title:l.tr("Appearance")||"Vzhled",options:[{id:"dark",label:i.dark},{id:"auto",label:i.auto},{id:"light",label:i.light}],currentValue:c.currentMode,onSelect:e=>{c.setMode(e),this.render()}}),this.renderSection({title:i.language,options:d.supportedLanguages.map(e=>({id:e,label:e==="cs"?"Čeština":"English"})),currentValue:l.currentLocale,onSelect:e=>{e!==l.currentLocale&&l.setLocale(e)}});{const e=document.createElement("div");e.style.cssText=`
                font-size: 11px;
                color: inherit;
                opacity: 0.7; /* Increased from 0.5 for better visibility */
                text-align: center;
                margin-top: 8px;
            `,e.textContent=`v${d.version}`,this.element.appendChild(e)}}renderSection({title:e,options:p,currentValue:m,onSelect:u}){const n=document.createElement("div");n.style.cssText=`
            display: flex;
            flex-direction: column;
            width: 100%;
        `;const o=document.createElement("div");o.className="settings-label",o.textContent=e,o.style.cssText=`
            font-size: 14px;
            color: inherit;
            margin-bottom: 8px;
            font-weight: 500;
        `,n.appendChild(o);const r=document.createElement("div");r.className="segmented-control",r.style.cssText=`
            display: flex;
            width: 100%;
            background-color: var(--unselected-widget-fill, rgba(0,0,0,0.05));
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid var(--input-border, rgba(0,0,0,0.1));
        `,p.forEach((s,h)=>{const t=document.createElement("button");t.type="button",t.textContent=s.label;const a=s.id===m;t.style.cssText=`
                border: none;
                padding: 8px 16px;
                font-size: 13px;
                font-weight: 500;
                cursor: pointer;
                transition: background-color 0.2s, color 0.2s;
                min-width: 70px;
                color: inherit;
                background-color: transparent;
                border-radius: 0;
                flex: 1;
            `,h>0&&(t.style.borderLeft="1px solid var(--input-border, rgba(0,0,0,0.1))"),a?(t.style.backgroundColor="var(--primary-color, #4465A6)",t.style.color="#ffffff"):(t.style.opacity="1",t.style.color="inherit"),a||(t.onmouseenter=()=>t.style.backgroundColor="rgba(0,0,0,0.05)",t.onmouseleave=()=>t.style.backgroundColor="transparent"),t.onclick=()=>u(s.id),r.appendChild(t)}),n.appendChild(r),this.element.appendChild(n)}}export{f as SettingsWidget};
