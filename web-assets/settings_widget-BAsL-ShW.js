import{T as a,L as n,A as c}from"./index-DTik7pPR.js";class h{constructor(e){this.container=e,this.element=document.createElement("div"),this.element.className="settings-widget",this.render(),this.container.appendChild(this.element)}render(){this.element.innerHTML="",this.element.style.cssText=`
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 100%;
        `,this.renderSection({title:n.tr("Appearance")||"Vzhled",options:[{id:"dark",label:"Dark"},{id:"auto",label:"Auto"},{id:"light",label:"Light"}],currentValue:a.currentMode,onSelect:e=>{a.setMode(e),this.render()}}),this.renderSection({title:n.tr("Language")||"Jazyk",options:c.supportedLanguages.map(e=>({id:e,label:e==="cs"?"Čeština":"English"})),currentValue:n.currentLocale,onSelect:e=>{e!==n.currentLocale&&n.setLocale(e)}});{const e=document.createElement("div");e.style.cssText=`
                font-size: 11px;
                color: var(--text-color, inherit);
                opacity: 0.5;
                text-align: center;
                margin-top: 8px;
            `,e.textContent=`v${c.version}`,this.element.appendChild(e)}}renderSection({title:e,options:d,currentValue:p,onSelect:u}){const o=document.createElement("div");o.style.cssText=`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        `;const r=document.createElement("div");r.className="settings-label",r.textContent=e,r.style.cssText=`
            font-size: 14px;
            color: var(--text-color, inherit);
            opacity: 0.8;
            margin-bottom: 8px;
            font-weight: 500;
        `,o.appendChild(r);const i=document.createElement("div");i.className="segmented-control",i.style.cssText=`
            display: inline-flex;
            background-color: var(--unselected-widget-fill, rgba(0,0,0,0.05));
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid var(--input-border, rgba(0,0,0,0.1));
        `,d.forEach((l,m)=>{const t=document.createElement("button");t.type="button",t.textContent=l.label;const s=l.id===p;t.style.cssText=`
                border: none;
                padding: 8px 16px;
                font-size: 13px;
                font-weight: 500;
                cursor: pointer;
                transition: background-color 0.2s, color 0.2s;
                min-width: 70px;
                color: var(--text-color);
                background-color: transparent;
                border-radius: 0;
                flex: 1;
            `,m>0&&(t.style.borderLeft="1px solid var(--input-border, rgba(0,0,0,0.1))"),s?(t.style.backgroundColor="var(--primary-color, #4465A6)",t.style.color="#ffffff"):t.style.opacity="0.7",s||(t.onmouseenter=()=>t.style.backgroundColor="rgba(0,0,0,0.05)",t.onmouseleave=()=>t.style.backgroundColor="transparent"),t.onclick=()=>u(l.id),i.appendChild(t)}),o.appendChild(i),this.element.appendChild(o)}}export{h as SettingsWidget};
