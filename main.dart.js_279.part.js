((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_279",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,K,N,O,L,P,H,Q,R,I,S,T,A={
dLW(d,e,f,g){var w,v
if(e){w=[f]
C.b.E(w,g)
g=w}v=x.z
return A.d_E(B.dwu(d,B.aO(J.aR(g,A.dUu(),v),!0,v),null))},
dyf(d,e,f){var w=null
if(d<0||d>f)throw B.p(B.h2(d,0,f,w,w))
if(e<d||e>f)throw B.p(B.h2(e,d,f,w,w))},
d_J(d,e,f){var w
try{if(Object.isExtensible(d)&&!Object.prototype.hasOwnProperty.call(d,e)){Object.defineProperty(d,e,{value:f})
return!0}}catch(w){}return!1},
deL(d,e){if(Object.prototype.hasOwnProperty.call(d,e))return d[e]
return null},
d_E(d){if(d==null||typeof d=="string"||typeof d=="number"||B.kT(d))return d
if(d instanceof A.qh)return d.a
if(A.dgz(d))return d
if(x.Q.b(d))return d
if(x.k.b(d))return B.nx(d)
if(x.Z.b(d))return A.deK(d,"$dart_jsFunction",new A.cQh())
return A.deK(d,"_$dart_jsObject",new A.cQi($.d2e()))},
deK(d,e,f){var w=A.deL(d,e)
if(w==null){w=f.$1(d)
A.d_J(d,e,w)}return w},
d_D(d){if(d==null||typeof d=="string"||typeof d=="number"||typeof d=="boolean")return d
else if(d instanceof Object&&A.dgz(d))return d
else if(d instanceof Object&&x.Q.b(d))return d
else if(d instanceof Date)return new B.aG(B.kf(d.getTime(),0,!1),0,!1)
else if(d.constructor===$.d2e())return d.o
else return A.dfI(d)},
dfI(d){if(typeof d=="function")return A.d_V(d,$.Pz(),new A.cRQ())
if(d instanceof Array)return A.d_V(d,$.d26(),new A.cRR())
return A.d_V(d,$.d26(),new A.cRS())},
d_V(d,e,f){var w=A.deL(d,e)
if(w==null||!(d instanceof Object)){w=f.$1(d)
A.d_J(d,e,w)}return w},
cQh:function cQh(){},
cQi:function cQi(d){this.a=d},
cRQ:function cRQ(){},
cRR:function cRR(){},
cRS:function cRS(){},
qh:function qh(d){this.a=d},
T6:function T6(d){this.a=d},
KF:function KF(d,e){this.a=d
this.$ti=e},
Y7:function Y7(){},
d3M(d,e,f){var w=null
return new A.Iz(B.cVH(d,w,w,w,w,36,w,w,C.Ll,w,88,f,w,w,C.Cb),e,w)},
Iz:function Iz(d,e,f){this.w=d
this.b=e
this.a=f},
Tu:function Tu(d,e,f,g,h){var _=this
_.c=d
_.y=e
_.dx=f
_.fx=g
_.a=h},
d6r(d){var w=B.bH("(background-color|color)\\s*:\\s*[^;]+;?\\s*",!1,!1,!1)
return B.dw(d,w,"")},
d6q(d){var w,v,u,t,s,r,q,p,o,n=B.bH("\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b",!0,!1,!1),m=B.bH("\\b((http|https)://|www\\.)[^\\s/$.?#].\\S*",!1,!1,!1),l=B.bH("\\b(\\+?[0-9]{1,4}[-.\\s]+)?(\\(?\\d{2,3}\\)?[-.\\s]+)?\\d{3}[-.\\s]+\\d{3}[-.\\s]+\\d{3,4}\\b",!0,!1,!1),k=V.ZK(d),j=new A.bty(),i=k.gqy(0)
i.toString
i=F.ZN(i,"*")
w=i.length
v=x.aX
u=v.i("x.E")
t=x.d
s=0
for(;s<i.length;i.length===w||(0,B.K)(i),++s){r=i[s]
if(r.x==="a")continue
q=r.c
if(q===$){p=B.a([],t)
r.c!==$&&B.ag()
q=r.c=new F.hL(r,p)}p=B.A(new B.dj(q,v),u)
C.b.aN(p,new A.btz(n,j))}i=k.gqy(0)
i.toString
i=F.ZN(i,"*")
w=i.length
s=0
for(;s<i.length;i.length===w||(0,B.K)(i),++s){r=i[s]
if(r.x==="a")continue
q=r.c
if(q===$){p=B.a([],t)
r.c!==$&&B.ag()
q=r.c=new F.hL(r,p)}p=B.A(new B.dj(q,v),u)
C.b.aN(p,new A.btA(m,j))}i=k.gqy(0)
i.toString
i=F.ZN(i,"*")
w=i.length
s=0
for(;s<i.length;i.length===w||(0,B.K)(i),++s){r=i[s]
if(r.x==="a")continue
q=r.c
if(q===$){p=B.a([],t)
r.c!==$&&B.ag()
q=r.c=new F.hL(r,p)}p=B.A(new B.dj(q,v),u)
C.b.aN(p,new A.btB(l,j))}o=new B.dp("")
k.gqy(0).Vg(o)
i=o.a
return i.charCodeAt(0)==0?i:i},
bty:function bty(){},
btz:function btz(d,e){this.a=d
this.b=e},
btx:function btx(d,e){this.a=d
this.b=e},
btA:function btA(d,e){this.a=d
this.b=e},
btw:function btw(d,e){this.a=d
this.b=e},
btB:function btB(d,e){this.a=d
this.b=e},
btv:function btv(d,e){this.a=d
this.b=e},
d6p(d,e){return new A.a44(e,d,null)},
a44:function a44(d,e,f){this.c=d
this.d=e
this.a=f},
aRJ:function aRJ(d,e){var _=this
_.d=$
_.e=!0
_.f=d
_.r=e
_.c=_.a=null},
cmz:function cmz(d){this.a=d},
cmA:function cmA(){},
cmB:function cmB(d){this.a=d},
cmy:function cmy(d){this.a=d},
cmx:function cmx(d){this.a=d},
cmt:function cmt(d){this.a=d},
cmr:function cmr(){},
cms:function cms(){},
cmw:function cmw(){},
cmv:function cmv(){},
cmu:function cmu(){},
a7K:function a7K(d,e,f){this.c=d
this.e=e
this.a=f},
da4(d){var w=new A.Gl(null,null),v=J.a0(d)
w.a=v.h(d,"index")
w.b=v.h(d,"length")
return w},
deM(d){return B.ft(B.KB(d,new A.cQP(),x.S),0,null)},
a8c:function a8c(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.y=i
_.z=j
_.Q=k
_.as=l
_.at=m
_.ax=n
_.ay=o
_.ch=p
_.CW=q
_.cx=r
_.cy=s
_.db=t
_.a=u},
a8d:function a8d(){var _=this
_.d=$
_.e=""
_.f=!0
_.r=$
_.w=!1
_.x=""
_.Q=_.z=_.y=$
_.as=!1
_.c=_.a=null},
bJP:function bJP(d){this.a=d},
bJO:function bJO(d){this.a=d},
bJM:function bJM(d){this.a=d},
bJL:function bJL(d){this.a=d},
bJN:function bJN(d){this.a=d},
bJB:function bJB(d){this.a=d},
bJA:function bJA(){},
bJE:function bJE(d){this.a=d},
bJD:function bJD(d){this.a=d},
bJF:function bJF(d){this.a=d},
bJG:function bJG(d){this.a=d},
bJH:function bJH(d,e){this.a=d
this.b=e},
bJI:function bJI(d){this.a=d},
bJJ:function bJJ(d){this.a=d},
bJK:function bJK(d){this.a=d},
bJC:function bJC(){},
aE2:function aE2(){var _=this
_.d=_.c=_.b=_.a=null
_.e=!0},
bJz:function bJz(d){this.a=d},
bJy:function bJy(d){this.a=d},
Gl:function Gl(d,e){this.a=d
this.b=e},
cQP:function cQP(){},
dG7(d,e,f,g,h,i,j){return new A.ND(j,g,h,i,f,e,d,null)},
abV:function abV(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.ay=m
_.a=n},
abW:function abW(d,e,f){var _=this
_.d=d
_.e=e
_.w=_.r=_.f=$
_.x=f
_.c=_.a=null},
bZJ:function bZJ(){},
bZt:function bZt(d){this.a=d},
bZu:function bZu(d){this.a=d},
bZv:function bZv(d){this.a=d},
bZw:function bZw(d,e){this.a=d
this.b=e},
bZr:function bZr(d){this.a=d},
bZs:function bZs(){},
bZq:function bZq(d){this.a=d},
bZp:function bZp(d){this.a=d},
bZo:function bZo(){},
bZn:function bZn(d){this.a=d},
bZm:function bZm(){},
bZC:function bZC(d){this.a=d},
bZB:function bZB(d,e){this.a=d
this.b=e},
bZA:function bZA(){},
bZz:function bZz(d){this.a=d},
bZy:function bZy(d,e){this.a=d
this.b=e},
bZx:function bZx(){},
bZE:function bZE(d,e){this.a=d
this.b=e},
bZD:function bZD(d){this.a=d},
bZI:function bZI(d){this.a=d},
bZH:function bZH(d){this.a=d},
bZF:function bZF(d){this.a=d},
bZG:function bZG(d,e){this.a=d
this.b=e},
ND:function ND(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
kv:function kv(d,e,f){this.c=d
this.a=e
this.b=f},
dx3(d){var w=B.bH("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$",!0,!1,!1)
if(!w.b.test(d.toLowerCase()))return C.A.O()
d=B.dw(d.toUpperCase(),"#","")
return B.d8(d.length===6?"FF"+d:d,16)},
bsI(d){var w=A.dx3(d)
return new A.awK((C.c.Z(w,24)&255)/255,(C.c.Z(w,16)&255)/255,(C.c.Z(w,8)&255)/255,(w&255)/255,C.j)},
abR(d){var w,v=""
try{v="rgba("+C.b.bs(B.a([d.gSG(),d.gLE(),d.gPB(),B.oN(C.e.bk(d.geW(d),1))],x.a),",")+")"}catch(w){v="rgba(0,0,0,0)"}return v},
awK:function awK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a0J:function a0J(d,e){this.c=d
this.a=e},
baQ:function baQ(d){this.a=d},
baP:function baP(d,e){this.a=d
this.b=e},
a2z:function a2z(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aQn:function aQn(){this.d=$
this.c=this.a=null},
cfL:function cfL(d,e){this.a=d
this.b=e},
cfJ:function cfJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cfK:function cfK(d,e){this.a=d
this.b=e},
cfH:function cfH(d,e){this.a=d
this.b=e},
cfF:function cfF(d,e){this.a=d
this.b=e},
cfG:function cfG(d,e){this.a=d
this.b=e},
cfI:function cfI(d,e){this.a=d
this.b=e},
tT:function tT(d,e){this.a=d
this.b=e},
auw(d,e,f,g,h,i){return new A.a2D(d,e,f,g,i,h)},
a2D:function a2D(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.Q=h
_.a=i},
a2E:function a2E(d,e,f){var _=this
_.e=d
_.r=_.f=null
_.w=$
_.x=e
_.y=f
_.c=_.a=null},
bls:function bls(d){this.a=d},
blm:function blm(d,e){this.a=d
this.b=e},
blo:function blo(d){this.a=d},
bln:function bln(d,e){this.a=d
this.b=e},
blr:function blr(d,e){this.a=d
this.b=e},
blp:function blp(d){this.a=d},
blq:function blq(){},
aQv:function aQv(){},
aoD:function aoD(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
d3L(d,e,f,g,h,i){return new A.a07(e,g,h,d,f)},
a07:function a07(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.a=h},
aO6:function aO6(){this.c=this.a=null},
i5:function i5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
q6:function q6(d,e){this.a=d
this.b=e},
aBA:function aBA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aqR:function aqR(d,e){this.b=d
this.a=e},
aJ2:function aJ2(d,e){this.b=d
this.a=e},
aDr:function aDr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
oD:function oD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bwe:function bwe(d,e){this.a=d
this.b=e},
bve:function bve(d){this.a=d},
SV:function SV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aSh:function aSh(d){var _=this
_.d=d
_.e=""
_.f=$
_.c=_.a=null},
co8:function co8(d,e){this.a=d
this.b=e},
co4:function co4(d){this.a=d},
co3:function co3(d,e){this.a=d
this.b=e},
co5:function co5(){},
co6:function co6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
co1:function co1(d,e,f){this.a=d
this.b=e
this.c=f},
co2:function co2(){},
co7:function co7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aK4:function aK4(d,e){this.a=d
this.b=e},
Wd:function Wd(d,e,f){this.c=d
this.d=e
this.a=f},
ak1:function ak1(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=f
_.c=_.a=null},
cIJ:function cIJ(d,e){this.a=d
this.b=e},
cII:function cII(){},
cIK:function cIK(d){this.a=d},
cIH:function cIH(d){this.a=d},
Xk:function Xk(d,e,f){this.e=d
this.c=e
this.a=f},
Xj:function Xj(d,e,f,g){var _=this
_.H=d
_.G$=e
_.dy=f
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=g
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
adi:function adi(d,e,f){var _=this
_.a=$
_.b=d
_.c=e
_.S$=0
_.U$=f
_.am$=_.be$=0},
bcy:function bcy(){},
vz:function vz(d,e){this.a=d
this.b=e},
cX3(d,e,f,g){var w,v,u,t=C.d.bi(d).toLowerCase()
if(!(C.d.b9(t,B.bH("<!DOCTYPE html>",!1,!1,!1))&&C.d.p(t,B.bH("<html",!1,!1,!1))&&C.d.p(t,B.bH("</html>",!1,!1,!1))))t='    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>IFrame '+g+"</title>\n    </head>\n    <body>\n    "+d+"\n    </body>\n    </html>\n    "
else t=d
w=x.N
t=A.d6u(t,B.dI(["parent.connect_js_to_flutter"+g+" && parent.connect_js_to_flutter"+g+"(window)"],w),D.axB)
if(f.gdf(f)){v=B.aY(w)
for(w=f.gaa(f);w.t();){u=w.gM(0)
u.gbRd()
v.u(0,u.gbRd())}t=A.d6u(t,v,D.axz)}return t},
d6u(d,e,f){return A.d6t(f,d,"\n<script>\n"+e.hf(0,new A.btM())+"\n</script>\n")},
d6v(d,e,f){var w=B.bH("<"+d+"([^>]*)>",!1,!1,!1)
B.UJ(0,0,e.length,"startIndex")
return B.dWg(e,w,new A.btN(d,f),0)},
d6t(d,e,f){var w
switch(d.a){case 2:return A.d6v("head",e,f)
case 0:return A.d6v("body",e,f)
case 3:w=C.d.de(e,"</head>")
return C.d.ai(e,0,w)+f+"\n"+C.d.da(e,w)
case 1:w=C.d.de(e,"</body>")
return C.d.ai(e,0,w)+f+"\n"+C.d.da(e,w)}},
a2K:function a2K(d,e){this.a=d
this.b=e},
btM:function btM(){},
btN:function btN(d,e){this.a=d
this.b=e},
aaJ:function aaJ(d,e){this.a=d
this.b=e},
awP:function awP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
c3O:function c3O(){},
DC:function DC(){},
apx:function apx(){},
aqt:function aqt(){},
aKK:function aKK(){},
qN:function qN(d,e){this.c=d
this.a=e},
Ol:function Ol(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bxh:function bxh(d,e){this.a=d
this.b=e},
b7d:function b7d(d,e){this.a=d
this.b=e},
adh:function adh(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.y=i
_.z=j
_.at=k
_.ax=l
_.CW=m
_.a=n},
al6:function al6(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cPj:function cPj(d){this.a=d},
cPg:function cPg(d){this.a=d},
cPb:function cPb(d,e){this.a=d
this.b=e},
cPa:function cPa(d){this.a=d},
cPf:function cPf(d){this.a=d},
cPc:function cPc(){},
cPd:function cPd(d){this.a=d},
cPe:function cPe(){},
cPh:function cPh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cPi:function cPi(d,e){this.a=d
this.b=e},
dgz(d){return x.B.b(d)||x.D.b(d)||x.l.b(d)||x.t.b(d)||x.V.b(d)||x.cg.b(d)||x.bj.b(d)},
d5e(d,e,f,g,h,i,j,k,l,m,n){var w=null
return new B.E2(i,m,w,w,j,w,k,8,l,g,w,w,24,!0,!1,48,f,w,!1,e,w,w,w,d,w,w,!1,w,n.i("E2<0>"))},
a0b(d,e){var w=null,v=B.b4(8)
return new B.W(C.aq,new A.Tu(d,C.ay,B.E(e,w,w,w,w,w,w,w,B.ab(w,w,C.fC,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w,w,w),new B.cM(v,C.w),w),w)},
daE(d){var w=C.a3M.h(0,(d==null?C.a3:d).a)
w.toString
return B.dw(w,"w","")},
dEf(d){var w=B.dC(d,0,null)
if(C.d.p(w.gpb(w).toLowerCase(),"youtube"))return A.dEe(d)
else if(C.d.p(w.gpb(w).toLowerCase(),"vimeo"))return A.dEd(d)
else return d},
dEe(d){var w,v,u,t
if(!C.d.p(d,"http")&&d.length===11)return d
C.d.bi(d)
for(w=[B.bH("^https:\\/\\/(?:www\\.|m\\.)?youtube\\.com\\/watch\\?v=([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bH("^https:\\/\\/(?:music\\.)?youtube\\.com\\/watch\\?v=([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bH("^https:\\/\\/(?:www\\.|m\\.)?youtube\\.com\\/shorts\\/([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bH("^https:\\/\\/(?:www\\.|m\\.)?youtube(?:-nocookie)?\\.com\\/embed\\/([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bH("^https:\\/\\/youtu\\.be\\/([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1)],v=null,u=0;u<5;++u){t=w[u].qN(d)
if(t!=null&&t.b.length-1>=1)v=t.b[1]}if(v==null)return null
return"https://www.youtube.com/embed/"+v},
dEd(d){var w=B.bH("(?:http|https)?:?\\/?\\/?(?:www\\.)?(?:player\\.)?vimeo\\.com\\/(?:channels\\/(?:\\w+\\/)?|groups\\/(?:[^\\/]*)\\/videos\\/|video\\/|)(\\d+)(?:|\\/\\?)",!1,!1,!1).qN(d),v=w==null?null:w.b[1]
if(v==null)return null
return"https://player.vimeo.com/video/"+v}},D,U,F,E,M,G,V,W,X
J=c[1]
B=c[0]
C=c[2]
K=c[181]
N=c[200]
O=c[230]
L=c[215]
P=c[290]
H=c[302]
Q=c[311]
R=c[134]
I=c[94]
S=c[182]
T=c[305]
A=a.updateHolder(c[43],A)
D=c[308]
U=c[312]
F=c[153]
E=c[309]
M=c[158]
G=c[138]
V=c[123]
W=c[310]
X=c[297]
A.qh.prototype={
h(d,e){if(typeof e!="string"&&typeof e!="number")throw B.p(B.cn("property is not a String or num",null))
return A.d_D(this.a[e])},
m(d,e,f){if(typeof e!="string"&&typeof e!="number")throw B.p(B.cn("property is not a String or num",null))
this.a[e]=A.d_E(f)},
k(d,e){if(e==null)return!1
return e instanceof A.qh&&this.a===e.a},
j(d){var w,v
try{w=String(this.a)
return w}catch(v){w=this.rd(0)
return w}},
vG(d,e){var w=this.a,v=e==null?null:B.aO(new B.F(e,A.dUv(),B.O(e).i("F<1,@>")),!0,x.z)
return A.d_D(w[d].apply(w,v))},
bGo(d){return this.vG(d,null)},
gv(d){return 0}}
A.T6.prototype={}
A.KF.prototype={
a7f(d){var w=d<0||d>=this.gA(0)
if(w)throw B.p(B.h2(d,0,this.gA(0),null,null))},
h(d,e){if(B.hk(e))this.a7f(e)
return this.aWs(0,e)},
m(d,e,f){if(B.hk(e))this.a7f(e)
this.anM(0,e,f)},
gA(d){var w=this.a.length
if(typeof w==="number"&&w>>>0===w)return w
throw B.p(B.aj("Bad JsArray length"))},
sA(d,e){this.anM(0,"length",e)},
u(d,e){this.vG("push",[e])},
E(d,e){this.vG("push",e instanceof Array?e:B.aO(e,!0,x.z))},
fE(d,e){this.a7f(e)
return J.v(this.vG("splice",[e,1]),0)},
kM(d){if(this.gA(0)===0)throw B.p(B.jw(-1))
return this.bGo("pop")},
ej(d,e,f,g,h){var w,v
A.dyf(e,f,this.gA(0))
w=f-e
if(w===0)return
if(h<0)throw B.p(B.cn(h,null))
v=[e,w]
C.b.E(v,J.Ie(g,h).n8(0,w))
this.vG("splice",v)},
hR(d,e,f,g){return this.ej(0,e,f,g,0)},
cY(d,e){this.vG("sort",e==null?[]:[e])},
$ib7:1,
$ix:1,
$iD:1}
A.Y7.prototype={
m(d,e,f){return this.aWt(0,e,f)}}
A.Iz.prototype={
uX(d,e,f){return new A.Iz(this.w,f,null)},
en(d){return!this.w.k(0,d.w)}}
A.Tu.prototype={
gkq(d){return this.c!=null},
B(d){var w,v,u,t,s=this,r=null,q=B.B(d),p=B.cVI(d),o=p.akn(s),n=q.ok.as
n.toString
n=n.c1(p.a53(s))
w=p.y
if(w==null)w=p.a53(s).R(0.12)
v=p.z
if(v==null)v=p.a53(s).R(0.04)
u=p.aQJ(s)
t=new B.ac(p.a,1/0,p.b,1/0).aFW(r,r)
return R.d9t(C.P,!1,s.dx,C.k,t,0,2,!0,o,w,4,r,q.cx,8,v,4,q.f,r,r,r,s.c,u,s.fx,q.id,n,q.Q)}}
A.a44.prototype={
K(){return new A.aRJ(B.a([D.bMs,D.bMv,D.bMy,D.bMx,D.afB,D.afF,D.afD],x.f),C.fC)}}
A.aRJ.prototype={
T(){var w,v=this
v.a9()
w=v.a
v.d=w.c
w.d.S4(new A.cmz(v))
v.a.d.bTI(new A.cmA())
B.di(C.jj,new A.cmB(v))},
l(){this.a.d.l()
this.af()},
B(d){var w=this,v=null,u=w.a.d,t=x.p,s=B.a([],t),r=u.b,q=w.a.d
return B.ad(B.a([new B.ao(50,v,new A.abV(w.f,u,s,25,C.ay,w.r,S.CB,C.aq,C.G,C.i,r),v),new B.eS(1,C.f5,new A.a8c(200,v,!0,q,new A.cms(),C.az,new A.cmt(w),new A.cmu(),new A.cmv(),new A.cmw(),D.bJ1,D.awv,D.bK9,C.E,C.awS,!1,new A.cmx(w),q.a),v)],t),C.C,v,C.f,C.h,0,v)},
tL(d){return this.aT_(d)},
aT_(d){var w=0,v=B.l(x.H),u=this
var $async$tL=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:w=2
return B.d(u.a.d.LT(d),$async$tL)
case 2:return B.j(null,v)}})
return B.k($async$tL,v)}}
A.a7K.prototype={
B(d){return $.djA().aEx(this.c,!1,this.a)}}
A.a8c.prototype={
K(){return new A.a8d()}}
A.a8d.prototype={
T(){var w,v=this
v.y=$.PK().aKj("packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js")
w=v.a.ax.d
if(w==null)w="Roboto"
v.z=w
v.Q=B.to(4,w,C.aG,!1)
w=v.a
w.toString
v.f=!0
v.r=w.d
v.a9()},
l(){var w,v=this.d
v===$&&B.b()
w=v.b
w.U$=$.a8()
w.S$=0
v.fH()
this.af()},
B(d){var w=this.y
w===$&&B.b()
return F.cWU(new A.bJP(this),w,x.z)},
b44(d,e){var w,v,u,t,s,r,q=this
q.e=q.atf(e)
w=C.c.j(B.dN(q.a.r.b))
v=q.e
u=q.r
u===$&&B.b()
t=B.dI([new A.vz("EditorResizeCallback",new A.bJE(q)),new A.vz("UpdateFormat",new A.bJF(q)),new A.vz("OnTextChanged",new A.bJG(q)),new A.vz("FocusChanged",new A.bJH(q,d)),new A.vz("OnEditingCompleted",new A.bJI(q)),new A.vz("OnSelectionChanged",new A.bJJ(q)),new A.vz("EditorLoaded",new A.bJK(q))],x.C)
s=q.as
r=q.a.db.$1(d)
return new B.cj(C.ae,null,C.ad,C.u,B.a([new A.adh(v,D.aex,e,u,new A.bJL(q),t,!1,new A.bJM(q),new A.bJN(q),D.ans,new B.cf(w,x.X)),B.jS(r,!s)],x.p),null)},
Wz(){var w=0,v=B.l(x.N),u,t=this,s
var $async$Wz=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qA("getHtmlText",[]),$async$Wz)
case 3:u=e
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Wz,v)},
WI(){var w=0,v=B.l(x.z),u,t=this,s
var $async$WI=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qA("getSelectionRange",[]),$async$WI)
case 3:u=e
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$WI,v)},
YB(d,e){return this.bxB(d,e)},
bxB(d,e){var w=0,v=B.l(x.z),u,t=this,s
var $async$YB=B.h(function(f,g){if(f===1)return B.i(g,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qA("setSelection",[d,e]),$async$YB)
case 3:u=g
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$YB,v)},
YA(d){return this.bxt(d)},
bxt(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$YA=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qA("setHtmlText",[d]),$async$YA)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$YA,v)},
Wb(d){return this.bae(d)},
bae(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$Wb=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qA("embedVideo",[d]),$async$Wb)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Wb,v)},
Wa(d){return this.bad(d)},
bad(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$Wa=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qA("embedImage",[d]),$async$Wa)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Wa,v)},
Wc(d){return this.bal(!0)},
bal(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$Wc=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qA("enableEditor",[!0]),$async$Wc)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Wc,v)},
Yz(d,e){return this.bxs(d,e)},
bxs(d,e){var w=0,v=B.l(x.z),u,t=2,s=[],r=this,q,p,o,n
var $async$Yz=B.h(function(f,g){if(f===1){s.push(g)
w=t}while(true)switch(w){case 0:t=4
p=r.d
p===$&&B.b()
w=7
return B.d(p.qA("setFormat",[d,e]),$async$Yz)
case 7:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=B.ah(n)
J.aq(q)
w=6
break
case 3:w=2
break
case 6:case 1:return B.j(u,v)
case 2:return B.i(s.at(-1),v)}})
return B.k($async$Yz,v)},
Xe(d,e){return this.blO(d,e)},
blO(d,e){var w=0,v=B.l(x.z),u,t=this,s
var $async$Xe=B.h(function(f,g){if(f===1)return B.i(g,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qA("insertTable",[e,d]),$async$Xe)
case 3:u=g
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Xe,v)},
XG(d){return this.bnZ(d)},
bnZ(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$XG=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qA("modifyTable",[d.b]),$async$XG)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$XG,v)},
Y8(){var w=0,v=B.l(x.z),u,t=this,s
var $async$Y8=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qA("undo",[]),$async$Y8)
case 3:u=e
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Y8,v)},
Y7(){var w=0,v=B.l(x.z),u,t=this,s
var $async$Y7=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qA("redo",[]),$async$Y7)
case 3:u=e
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Y7,v)},
VF(){var w=0,v=B.l(x.z),u,t=this,s
var $async$VF=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qA("clearHistory",[]),$async$VF)
case 3:u=e
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$VF,v)},
atf(c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2="0",b3="px !important;\n          padding-right:",b4="px !important;\n          padding-top:",b5="px !important;\n          padding-bottom:",b6=";\n          font-size: ",b7="px;\n          color:",b8=";\n          background-color:",b9=";\n          font-weight: ",c0=b1.Q
c0===$&&B.b()
w=b1.x
v=b1.z
v===$&&B.b()
u=A.abR(b1.a.y)
t=A.abR(b1.a.y)
s=b1.z
r=b1.a.cx.a
r=B.o(r)
q=b1.a.cx.c
q=B.o(q)
p=b1.a.cx.b
p=B.o(p)
o=b1.a.cx.d
o=B.o(o)
n=b1.a
m=n.CW
n=n.ch.r
n=B.o(n==null?"14":n)
l=b1.a.ch.b
l=A.abR(l==null?C.p:l)
k=A.abR(b1.a.y)
j=b1.a.ch
i=j.x
if(i==null)i=E.Eh
j=A.daE(j.w)
h=b1.z
g=b1.a.ax
f=g.x
if(f==null)f=E.Eh
g=g.r
g=B.o(g==null?"14":g)
e=b1.a.ax.b
e=A.abR(e==null?C.p:e)
d=A.abR(b1.a.y)
a0=b1.a.ax
a0=A.daE(a0.w)
a1=b1.a.ay.a
a1=B.o(a1)
a2=b1.a.ay.c
a2=B.o(a2)
a3=b1.a.ay.b
a3=B.o(a3)
a4=b1.a.ay.d
a4=B.o(a4)
a5=b1.z
a6=b1.a.ay.a
a6=B.o(a6)
a7=b1.a.ay.c
a7=B.o(a7)
a8=b1.a.ay.b
a8=B.o(a8)
a9=b1.a.ay.d
a9=B.o(a9)
b0=""+b1.a.d
return'   <!DOCTYPE html>\n        <html>\n        <head>\n        <link href="https://fonts.googleapis.com/css?family='+c0+':400,400i,700,700i" rel="stylesheet">\n        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">    \n        \n       <!-- Include the Quill library --> \n        <script>\n        '+w+"\n        </script>\n        <style>\n        /*!\n       * Quill Editor v2.0.0-dev.3\n       * https://quilljs.com/\n       * Copyright (c) 2014, Jason Chen\n       * Copyright (c) 2013, salesforce.com\n       */.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container:not(.ql-disabled) li[data-list=checked]>.ql-ui,.ql-container:not(.ql-disabled) li[data-list=unchecked]>.ql-ui{cursor:pointer}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-editor{box-sizing:border-box;counter-reset:list-0;line-height:1.42;height:100%;outline:0;overflow-y:auto;padding:12px 15px;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre{margin:0;padding:0}.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor p{counter-reset:list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor table{border-collapse:collapse}.ql-editor td{border:1px solid #000;padding:2px 5px}.ql-editor ol{padding-left:1.5em}.ql-editor li{list-style-type:none;padding-left:1.5em;position:relative}.ql-editor li>.ql-ui:before{display:inline-block;margin-left:-1.5em;margin-right:.3em;text-align:right;white-space:nowrap;width:1.2em}.ql-editor li[data-list=checked]>.ql-ui,.ql-editor li[data-list=unchecked]>.ql-ui{color:#777}.ql-editor li[data-list=bullet]>.ql-ui:before{content:'\\2022'}.ql-editor li[data-list=checked]>.ql-ui:before{content:'\\2611'}.ql-editor li[data-list=unchecked]>.ql-ui:before{content:'\\2610'}.ql-editor li[data-list=ordered]{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.ql-editor li[data-list=ordered]>.ql-ui:before{content:counter(list-0,decimal) '. '}.ql-editor li[data-list=ordered].ql-indent-1{counter-increment:list-1}.ql-editor li[data-list=ordered].ql-indent-1>.ql-ui:before{content:counter(list-1,lower-alpha) '. '}.ql-editor li[data-list=ordered].ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor li[data-list=ordered].ql-indent-2{counter-increment:list-2}.ql-editor li[data-list=ordered].ql-indent-2>.ql-ui:before{content:counter(list-2,lower-roman) '. '}.ql-editor li[data-list=ordered].ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor li[data-list=ordered].ql-indent-3{counter-increment:list-3}.ql-editor li[data-list=ordered].ql-indent-3>.ql-ui:before{content:counter(list-3,decimal) '. '}.ql-editor li[data-list=ordered].ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor li[data-list=ordered].ql-indent-4{counter-increment:list-4}.ql-editor li[data-list=ordered].ql-indent-4>.ql-ui:before{content:counter(list-4,lower-alpha) '. '}.ql-editor li[data-list=ordered].ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor li[data-list=ordered].ql-indent-5{counter-increment:list-5}.ql-editor li[data-list=ordered].ql-indent-5>.ql-ui:before{content:counter(list-5,lower-roman) '. '}.ql-editor li[data-list=ordered].ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.ql-editor li[data-list=ordered].ql-indent-6{counter-increment:list-6}.ql-editor li[data-list=ordered].ql-indent-6>.ql-ui:before{content:counter(list-6,decimal) '. '}.ql-editor li[data-list=ordered].ql-indent-6{counter-reset:list-7 list-8 list-9}.ql-editor li[data-list=ordered].ql-indent-7{counter-increment:list-7}.ql-editor li[data-list=ordered].ql-indent-7>.ql-ui:before{content:counter(list-7,lower-alpha) '. '}.ql-editor li[data-list=ordered].ql-indent-7{counter-reset:list-8 list-9}.ql-editor li[data-list=ordered].ql-indent-8{counter-increment:list-8}.ql-editor li[data-list=ordered].ql-indent-8>.ql-ui:before{content:counter(list-8,lower-roman) '. '}.ql-editor li[data-list=ordered].ql-indent-8{counter-reset:list-9}.ql-editor li[data-list=ordered].ql-indent-9{counter-increment:list-9}.ql-editor li[data-list=ordered].ql-indent-9>.ql-ui:before{content:counter(list-9,decimal) '. '}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor li.ql-direction-rtl{padding-right:1.5em}.ql-editor li.ql-direction-rtl>.ql-ui:before{margin-left:.3em;margin-right:-1.5em;text-align:left}.ql-editor table{table-layout:fixed;width:100%}.ql-editor table td{outline:0}.ql-editor .ql-code-block-container{font-family:monospace}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor .ql-ui{position:absolute}.ql-editor.ql-blank::before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}.ql-snow .ql-toolbar:after,.ql-snow.ql-toolbar:after{clear:both;content:'';display:table}.ql-snow .ql-toolbar button,.ql-snow.ql-toolbar button{background:0 0;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.ql-snow .ql-toolbar button svg,.ql-snow.ql-toolbar button svg{float:left;height:100%}.ql-snow .ql-toolbar button:active:hover,.ql-snow.ql-toolbar button:active:hover{outline:0}.ql-snow .ql-toolbar input.ql-image[type=file],.ql-snow.ql-toolbar input.ql-image[type=file]{display:none}.ql-snow .ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar button.ql-active,.ql-snow .ql-toolbar button:focus,.ql-snow .ql-toolbar button:hover,.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar button.ql-active,.ql-snow.ql-toolbar button:focus,.ql-snow.ql-toolbar button:hover{color:#06c}.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:focus .ql-fill,.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover .ql-fill,.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:focus .ql-fill,.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover .ql-fill,.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill{fill:#06c}.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button:focus .ql-stroke,.ql-snow .ql-toolbar button:focus .ql-stroke-miter,.ql-snow .ql-toolbar button:hover .ql-stroke,.ql-snow .ql-toolbar button:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar button:focus .ql-stroke,.ql-snow.ql-toolbar button:focus .ql-stroke-miter,.ql-snow.ql-toolbar button:hover .ql-stroke,.ql-snow.ql-toolbar button:hover .ql-stroke-miter{stroke:#06c}@media (pointer:coarse){.ql-snow .ql-toolbar button:hover:not(.ql-active),.ql-snow.ql-toolbar button:hover:not(.ql-active){color:#444}.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#444}}.ql-snow{box-sizing:border-box}.ql-snow *{box-sizing:border-box}.ql-snow .ql-hidden{display:none}.ql-snow .ql-out-bottom,.ql-snow .ql-out-top{visibility:hidden}.ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.ql-snow .ql-formats{display:inline-block;vertical-align:middle}.ql-snow .ql-formats:after{clear:both;content:'';display:table}.ql-snow .ql-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-snow .ql-stroke-miter{fill:none;stroke:#444;stroke-miterlimit:10;stroke-width:2}.ql-snow .ql-fill,.ql-snow .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-empty{fill:none}.ql-snow .ql-even{fill-rule:evenodd}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1}.ql-snow .ql-transparent{opacity:.4}.ql-snow .ql-direction svg:last-child{display:none}.ql-snow .ql-direction.ql-active svg:last-child{display:inline}.ql-snow .ql-direction.ql-active svg:first-child{display:none}.ql-snow .ql-editor h1{font-size:2em}.ql-snow .ql-editor h2{font-size:1.5em}.ql-snow .ql-editor h3{font-size:1.17em}.ql-snow .ql-editor h4{font-size:1em}.ql-snow .ql-editor h5{font-size:.83em}.ql-snow .ql-editor h6{font-size:.67em}.ql-snow .ql-editor a{text-decoration:underline}.ql-snow .ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-snow .ql-editor .ql-code-block-container,.ql-snow .ql-editor code{background-color:#f0f0f0;border-radius:3px}.ql-snow .ql-editor .ql-code-block-container{margin-bottom:5px;margin-top:5px;padding:5px 10px}.ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.ql-snow .ql-editor .ql-code-block-container{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-snow .ql-editor img{max-width:100%}.ql-snow .ql-picker{color:#444;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.ql-snow .ql-picker-label::before{display:inline-block;line-height:22px}.ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#ccc;z-index:2}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.ql-snow .ql-color-picker,.ql-snow .ql-icon-picker{width:28px}.ql-snow .ql-color-picker .ql-picker-label,.ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-label svg,.ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before{content:attr(data-label)}.ql-snow .ql-picker.ql-header{width:98px}.ql-snow .ql-picker.ql-header .ql-picker-item::before,.ql-snow .ql-picker.ql-header .ql-picker-label::before{content:'Normal'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before{content:'Heading 1'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before{content:'Heading 2'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before{content:'Heading 3'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before{content:'Heading 4'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before{content:'Heading 5'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before{content:'Heading 6'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before{font-size:2em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before{font-size:1.5em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before{font-size:1.17em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before{font-size:1em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before{font-size:.83em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before{font-size:.67em}.ql-snow .ql-picker.ql-font{width:108px}.ql-snow .ql-picker.ql-font .ql-picker-item::before,.ql-snow .ql-picker.ql-font .ql-picker-label::before{content:'Sans Serif'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before{content:'Serif'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before{content:'Monospace'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before{font-family:Georgia,Times New Roman,serif}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before{font-family:Monaco,Courier New,monospace}.ql-snow .ql-picker.ql-size{width:98px}.ql-snow .ql-picker.ql-size .ql-picker-item::before,.ql-snow .ql-picker.ql-size .ql-picker-label::before{content:'Normal'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before{content:'Small'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before{content:'Large'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before{content:'Huge'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before{font-size:10px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before{font-size:18px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before{font-size:32px}.ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-code-block-container{position:relative}.ql-code-block-container .ql-ui{right:5px;top:5px}.ql-toolbar.ql-snow{border:1px solid #ccc;box-sizing:border-box;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;padding:8px}.ql-toolbar.ql-snow .ql-formats{margin-right:15px}.ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:rgba(0,0,0,.2) 0 2px 8px}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label{border-color:#ccc}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#ccc}.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0}.ql-snow .ql-tooltip{background-color:#fff;border:1px solid #ccc;box-shadow:0 0 5px #ddd;color:#444;padding:5px 12px;white-space:nowrap}.ql-snow .ql-tooltip::before{content:\"Visit URL:\";line-height:26px;margin-right:8px}.ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #ccc;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.ql-snow .ql-tooltip a.ql-action::after{border-right:1px solid #ccc;content:'Edit';margin-left:16px;padding-right:8px}.ql-snow .ql-tooltip a.ql-remove::before{content:'Remove';margin-left:8px}.ql-snow .ql-tooltip a{line-height:26px}.ql-snow .ql-tooltip.ql-editing a.ql-preview,.ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.ql-snow .ql-tooltip.ql-editing a.ql-action::after{border-right:0;content:'Save';padding-right:0}.ql-snow .ql-tooltip[data-mode=link]::before{content:\"Enter link:\"}.ql-snow .ql-tooltip[data-mode=formula]::before{content:\"Enter formula:\"}.ql-snow .ql-tooltip[data-mode=video]::before{content:\"Enter video:\"}.ql-snow a{color:#06c}.ql-container.ql-snow{border:1px solid #ccc}\n        \n        body, html{\n         font-family: \""+v+'", sans-serif !important;\n        -webkit-user-select: text !important;\n        margin:0px !important;\n        background-color:'+u+";\n        color: "+t+";\n        }\n        .ql-font-roboto {\n           font-family: '"+s+"', sans-serif;\n          }\n        .ql-editor.ql-blank::before{\n         font-family: \""+s+'", sans-serif !important;\n        -webkit-user-select: text !important;\n          padding-left:'+r+b3+q+b4+p+b5+o+"px !important;\n          position: center;\n          left:0px;\n          text-align: "+m.b+b6+n+b7+l+b8+k+";\n          font-style: "+i.b+b9+j+';\n          \n        }\n        .ql-container.ql-snow{\n         font-family: "'+h+'", sans-serif !important;\n        -webkit-user-select: text !important;\n          white-space:nowrap !important;\n          margin-top:0px !important;\n          margin-bottom:0px !important;\n          margin:0px !important;\n          width:100%;\n          border:none;\n          font-style: '+f.b+b6+g+b7+e+b8+d+b9+a0+";\n          padding-left:"+a1+"px;\n          padding-right:"+a2+"px;\n          padding-top:"+a3+"px;\n          padding-bottom:"+a4+'px;\n          min-height:100%;\n        \n          contenteditable: true !important;\n          data-gramm: false !important;\n         \n        }\n        .ql-editor { \n         font-family: "'+a5+'", sans-serif !important;\n          -webkit-user-select: text !important;\n          padding-left:'+a6+b3+a7+b4+a8+b5+a9+"px !important;\n        }\n        .ql-toolbar { \n          position: absolute; \n          top: 0;\n          left:0;\n          right:0\n        }\n        .ql-tooltip{\n          display:none; \n        }\n        \n        .ql-editor.ql-blank:focus::before {\n          content: '';\n          }\n        #toolbar-container{\n         display:none;\n        }     \n        #scrolling-container {  \n        overflow-y: scroll  !important;\n          min-height: "+b0+'px !important;\n          -webkit-user-select: text !important;\n           scrollbar-width: none !important; \n         } \n         #scroll-container::-webkit-scrollbar {\n            display: none !important; /* For Chrome, Safari, and Opera */\n          }\n         ::-webkit-scrollbar {\n          width: 0;  /* Remove scrollbar space */\n          background: transparent;  /* Optional: just make scrollbar invisible */\n          } \n        </style>\n   \n        </head>\n        <body>\n         <script>\n           const resizeObserver = new ResizeObserver(entries =>{\n            ///console.log("Offset height has changed:", (entries[0].target.clientHeight).toString())\n                if(true) {\n                  EditorResizeCallback((entries[0].target.clientHeight).toString());\n                } else {\n                  EditorResizeCallback.postMessage((entries[0].target.clientHeight).toString());\n                }            \n            })\n            resizeObserver.observe(document.body)\n          </script>\n         <script>\n          let isTextSelectionInProgress = false;\n\n          // Event handler for text selection start\n          function handleTextSelectionStart() {\n              isTextSelectionInProgress = true;\n             // console.log("Text selection started.");\n          }\n  \n          // Event handler for text selection end\n          function handleTextSelectionEnd() {\n              isTextSelectionInProgress = false;\n             // console.log("Text selection ended.");\n          }\n  \n          // Check if text is being selected while dragging the mouse\n          function handleMouseMove(event) {\n              if (isTextSelectionInProgress) {\n                  // Do something when the text is being selected (dragging the mouse while text is selected)\n                  window.getSelection();\n              }\n          }\n  \n          // Attach event listeners\n          document.addEventListener("mousedown", handleTextSelectionStart);\n          document.addEventListener("mouseup", handleTextSelectionEnd);\n          document.addEventListener("mousemove", handleMouseMove);\n         \n         </script> \n        <!-- Create the toolbar container -->\n        <div id="scrolling-container">\n        <div id="toolbar-container"></div>\n        \n        <!-- Create the editor container -->\n        <div style="position:relative;margin-top:0em;">\n        <div id="editorcontainer" style= "min-height:'+b0+'px;margin-top:0em;">\n        <div id="editor" style="min-height:'+b0+"px; width:100%;\"></div>\n        </div>\n        </div> \n        </div>\n      \n        <!-- Initialize Quill editor -->\n        <script>\n      \n            let fullWindowHeight = window.innerHeight;\n            let keyboardIsProbablyOpen = false;\n            window.addEventListener(\"resize\", function() {\n              if(window.innerHeight == fullWindowHeight) {\n                keyboardIsProbablyOpen = false;\n              } else if(window.innerHeight < fullWindowHeight * 0.9) {\n                keyboardIsProbablyOpen = true;\n              }\n            });\n            \n            function resizeElementHeight(element, ratio) {\n              var height = 0;\n              var body = window.document.body;\n              if(window.innerHeight) {\n                height = window.innerHeight;\n              } else if(body.parentElement.clientHeight) {\n                height = body.parentElement.clientHeight;\n              } else if(body && body.clientHeight) {\n                height = body.clientHeight;\n              }\n              let isIOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)\n              if(isIOS) {\n                element.style.height = ((height / ratio - element.offsetTop) + \"px\");\n              } else {\n                element.style.height = ((height - element.offsetTop) + \"px\");\n              }  \n            }\n            \n            \n          function replaceSelection(replaceText) {\n              try{\n              var range = quilleditor.getSelection(true);\n                    if (range) {\n                      if (range.length == 0) {\n                       // console.log('User cursor is at index', range.index);\n                      } else {\n                       quilleditor.deleteText(range.index, range.length);\n                       quilleditor.insertText(range.index, replaceText);\n                      \n                      /// replace text with format will be coming in future release\n                      /// quilleditor.insertText(range.index, replaceText, JSON.parse(format));\n                      }\n                    } else {\n                     // console.log('User cursor is not in editor');\n                    }\n                }\n                 catch(e) {\n                    console.log('replaceSelection', e);\n                 } \n            }\n            // Retrieve the Quill editor container element by its ID\n            var quillContainer = document.getElementById('scrolling-container');\n            \n            // Add the focusout event listener to the Quill editor container\n            quillContainer.addEventListener('focusout', function() {\n                 if(true) {\n                FocusChanged(false);\n              } else {\n                FocusChanged.postMessage(false);\n              }\n            });\n            \n             quillContainer.addEventListener('focusin', () => {\n               if(true) {\n                FocusChanged(true);\n              } else {\n                FocusChanged.postMessage(true);\n              }\n             })\n             quillContainer.addEventListener('click', function() {\n              quilleditor.focus(); // Set focus on the Quill editor\n              });\n             \n             /*quilleditor.root.addEventListener(\"blur\", function() {\n               if(true) {\n                FocusChanged(false);\n                } else {\n                var focus  = quilleditor.hasFocus();\n                  FocusChanged.postMessage(isQuillFocused());\n                }\n            });\n            \n            quilleditor.root.addEventListener(\"focus\", function() {\n               if(true) {\n                FocusChanged(true);\n              } else {\n              var focus  = quilleditor.hasFocus();\n                FocusChanged.postMessage(isQuillFocused());\n              }\n            });*/\n            \n            function isQuillFocused() {\n                // Retrieve the Quill editor container element by its ID\n                var quillContainer = document.getElementById('scrolling-container');\n              \n                // Check if the Quill editor container or any of its descendants have focus\n                return quillContainer.contains(document.activeElement);\n              }\n            \n            function getSelectedText() {\n            let text = '';\n              try{\n                var range = quilleditor.getSelection(true);\n                    if (range) {\n                      if (range.length == 0) {\n                       // console.log('User cursor is at index', range.index);\n                      } else {\n                         text = quilleditor.getText(range.index, range.length);\n                      }\n                    } else {\n                    //  console.log('User cursor is not in editor');\n                    }\n                }\n                 catch(e) {\n                    console.log('getSelectedText', e);\n                  } \n                return text;  \n            }\n              \n         \n            function applyGoogleKeyboardWorkaround(editor) {\n              try {\n              \n                let isIOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)\n\n                if(true || isIOS){\n                  return;\n                }\n                if(editor.applyGoogleKeyboardWorkaround) {\n                  return\n                }\n                editor.applyGoogleKeyboardWorkaround = true\n                editor.on('editor-change', function(eventName, ...args) {\n                  try {\n                    // args[0] will be delta\n                    var ops = args[0]['ops']\n                    if(ops === null) {\n                      return\n                    }\n                    var oldSelection = editor.getSelection(true)\n                    var oldPos = oldSelection.index\n                    var oldSelectionLength = oldSelection.length\n                    if( ops[0][\"retain\"] === undefined || !ops[1] || !ops[1][\"insert\"] || !ops[1][\"insert\"] || ops[1][\"list\"] === \"bullet\" || ops[1][\"list\"] === \"ordered\" || ops[1][\"insert\"] != \"\\n\" || oldSelectionLength > 0) {\n                      return\n                    }\n                    \n                    setTimeout(function() {\n                      var newPos = editor.getSelection(true).index\n                      if(newPos === oldPos) {\n                      console.log('newPos oldPos');\n                        editor.setSelection(editor.getSelection(true).index + 1, 0)\n                      }\n                    }, 30);\n                    //onRangeChanged();\n                  } catch(e) {\n                    console.log('applyGoogleKeyboardWorkaround - editor-change', e);\n                  }\n                });\n              } catch(e) {\n                console.log('applyGoogleKeyboardWorkaround', e);\n              } \n            }\n            \n            /// observer to listen to the editor div changes \n            // select the target node\n            var target = document.querySelector('#editor');\n            \n            // create an observer instance\n            var tempText = \"\";\n            var observer = new MutationObserver(function(mutations) {\n                 var text = quilleditor.root.innerHTML; \n                 if(text != tempText){\n                      tempText = text;\n                     if(true) {\n                      OnTextChanged(text);\n                    } else {\n                      OnTextChanged.postMessage(text);\n                    }\n                     onRangeChanged(); \n                     quilleditor.focus();\n                 }\n            });\n\n            // configuration of the observer:\n            var config = { attributes: true, childList: true, characterData: true, subtree: true };\n\n            // pass in the target node, as well as the observer options\n            observer.observe(target, config);\n    \n           // stops the listener\n           //// observer.disconnect();\n          \n        \n           //// to accept all link formats \n           var Link = Quill.import('formats/link');\n              Link.sanitize = function(url) {\n                // modify url if desired\n                return url;\n              }\n             Quill.register(Link, true);\n           \n            /// quill custom font import\n            var FontStyle = Quill.import('attributors/class/font');\n            Quill.register(FontStyle, true);\n            \n            const Inline = Quill.import('blots/inline');\n            class RequirementBlot extends Inline {}\n            RequirementBlot.blotName = 'requirement';\n            RequirementBlot.tagName = 'requirement';\n            Quill.register(RequirementBlot);\n            \n            class ResponsibilityBlot extends Inline {}\n            ResponsibilityBlot.blotName = 'responsibility';\n            ResponsibilityBlot.tagName = 'responsibility';\n            Quill.register(ResponsibilityBlot);\n            \n             ///// quill shift enter key binding      \n              var bindings = {\n                  linebreak: {\n                      key: 13,\n                      shiftKey: true,\n                      handler: function(range) {\n                          this.quill.insertEmbed(range.index, 'breaker', true, Quill.sources.USER);\n                          this.quill.setSelection(range.index + 1, Quill.sources.SILENT);\n                          return false;\n                      }\n                  },\n                  enter: {\n                      key: 'Enter',\n                      handler: () => {\n                         if(true) {\n                          OnEditingCompleted(quilleditor.root.innerHTML);\n                          } else {\n                          OnEditingCompleted.postMessage(quilleditor.root.innerHTML);\n                          }\n                      }\n                  }\n              };\n              \n              let Embed = Quill.import('blots/embed');\n              \n              class Breaker extends Embed {\n                  static tagName = 'br';\n                  static blotName = 'breaker';\n              }\n              Quill.register(Breaker);\n\n            var quilleditor = new Quill('#editor', {\n              modules: {\n                toolbar: '#toolbar-container',\n                table: true,\n                 keyboard:  {},\n                history: {\n                  delay: 2000,\n                  maxStack: 500,\n                  userOnly: false\n                }\n              },\n              theme: 'snow',\n             scrollingContainer: '#scrolling-container', \n              placeholder: 'Description',\n              clipboard: {\n                matchVisual: true\n              }\n            });\n            \n          \n            const table = quilleditor.getModule('table');\n            quilleditor.enable(true);\n        \n           applyGoogleKeyboardWorkaround(quilleditor);\n            \n            let editorLoaded = false;\n            quilleditor.on('editor-change', function(eventName, ...args) {\n      \n             if (!editorLoaded) {\n                if(true) {\n                    EditorLoaded(true);\n                } else {\n                    EditorLoaded.postMessage(true);\n                }\n                  editorLoaded = true;\n                }\n             \n            });\n            \n            quilleditor.on('selection-change', function(range, oldRange, source)  {\n             /// console.log('selection changed');\n              onRangeChanged();\n              if(true){\n              OnSelectionChanged(getSelectionRange());\n              }else{\n              OnSelectionChanged.postMessage(getSelectionRange());\n              }     \n              \n            });\n                  \n            function onRangeChanged() { \n              try {\n                var range = quilleditor.getSelection(true);\n                if(range != null) {\n                  if(range.length == 0) {\n                    var format = quilleditor.getFormat();\n                    formatParser(format);\n                  } else {\n                    var format = quilleditor.getFormat(range.index, range.length);\n                    formatParser(format);\n                  }\n                } else {\n                 // console.log('Cursor not in the editor');\n                }\n              } catch(e) {\n              ///  console.log(e);\n              }\n            }\n            \n             function redo(){\n              quilleditor.history.redo();\n              return '';\n             }\n             \n             function undo(){\n              quilleditor.history.undo();\n              return '';\n             }\n             function clearHistory(){\n               quilleditor.history.clear();\n               return '';\n             }\n            \n            \n            function formatParser(format) {\n              var formatMap = {};\n              formatMap['bold'] = format['bold'];\n              formatMap['italic'] = format['italic'];\n              formatMap['underline'] = format['underline'];\n              formatMap['strike'] = format['strike'];\n              formatMap['blockqoute'] = format['blockqoute'];\n              formatMap['background'] = format['background'];\n              formatMap['code-block'] = format['code-block'];\n              formatMap['indent'] = format['indent'];\n              formatMap['direction'] = format['direction'];\n              formatMap['size'] = format['size'];\n              formatMap['header'] = format['header'];\n              formatMap['color'] = format['color'];\n              formatMap['font'] = format['font'];\n              formatMap['align'] = format['align'];\n              formatMap['list'] = format['list'];\n              formatMap['image'] = format['image'];\n              formatMap['video'] = format['video'];\n              formatMap['clean'] = format['clean'];\n              formatMap['link'] = format['link'];\n              if(true) {\n                UpdateFormat(JSON.stringify(formatMap));\n              } else {\n                UpdateFormat.postMessage(JSON.stringify(formatMap));\n              }\n            }\n     \n           \n            function getHtmlText() {\n              return quilleditor.root.innerHTML;\n            }\n \n            function getPlainText() {\n              var text = \"\";\n              try{\n                 text =  toPlaintext(quilleditor.getContents());\n              }catch(e){\n                 text = \"\";\n              }\n              return text; \n            }\n            \n            function toPlaintext(delta) {\n              return delta.reduce(function (text, op) {\n                if (!op.insert) throw new TypeError('only `insert` operations can be transformed!');\n                if (typeof op.insert !== 'string') return text + ' ';\n                return text + op.insert;\n              }, '');\n            };\n            \n            function getSelection() {\n            try{\n              var range = quilleditor.getSelection(true);\n              if(range) {\n                return range.length;\n              }\n                }catch(e){\n                console.log('getSelection', e);\n              }\n              return -1;\n            }\n            \n            function getSelectionHtml() {\n              var selection = quilleditor.getSelection(true);\n              if(selection){\n              var selectedContent = quilleditor.getContents(selection.index, selection.length);\n              var tempContainer = document.createElement('div')\n              var tempQuill = new Quill(tempContainer);\n              tempQuill.setContents(selectedContent);\n              return tempContainer.querySelector('.ql-editor').innerHTML;\n              }\n              return '';\n            }\n            \n            function getSelectionRange() {\n              var range = quilleditor.getSelection(true);\n              if(range) {\n                var rangeMap = {};\n                rangeMap['length'] = range.length;\n                rangeMap['index'] = range.index;\n                return JSON.stringify(rangeMap);\n              }\n              return {};\n            }\n            \n            function setSelection(index, length) {\n            try{\n              setTimeout(() => quilleditor.setSelection(index, length), 1);\n              }catch(e){\n                console.log('setSelection', e);\n              }\n              return '';\n            }\n            \n            function setHtmlText(htmlString) {\n            try{\n               quilleditor.enable(false);\n               quilleditor.clipboard.dangerouslyPasteHTML(htmlString);   \n            }catch(e){\n               console.log('setHtmlText', e);\n            }\n             setTimeout(() =>   quilleditor.enable(true), 10);  \n              return '';\n            }\n            \n          \n            function setDeltaContent(deltaMap) {   \n              try{\n                  quilleditor.enable(false);\n                  const obj = JSON.parse(deltaMap);\n                  quilleditor.setContents(obj);\n                }catch(e){\n                  console.log('setDeltaContent', e);\n                }\n               setTimeout(() =>   quilleditor.enable(true), 10);  \n              return '';\n            }\n            \n            function getDelta() {\n              return JSON.stringify(quilleditor.getContents()); \n            }\n\n            function requestFocus() {\n              try{\n              var htmlString = quilleditor.root.innerHTML;\n               setTimeout(() => {\n                    quilleditor.setSelection(htmlString.length + 1, htmlString.length + 1);\n                    quilleditor.focus();\n               }, 600);\n              }catch(e){\n                console.log('requestFocus',e);\n              }\n            \n              return '';\n            }\n            \n            function unFocus() {\n              quilleditor.root.blur()\n              return '';\n            }\n  \n            function insertTable(row,column) {\n              table.insertTable(row, column);\n              return '';\n            }\n            \n            function modifyTable(type) {\n                if(type ==\"insertRowAbove\"){\n                 table.insertRowAbove();\n                }else if(type == \"insertRowBelow\"){\n                  table.insertRowBelow();\n                }else if(type == \"insertColumnLeft\"){\n                  table.insertColumnLeft();\n                }else if(type == \"insertColumnRight\"){\n                  table.insertColumnRight();\n                }else if(type == \"deleteRow\"){\n                  table.deleteRow();\n                }else if(type == \"deleteColumn\"){\n                  table.deleteColumn();\n                }else if(type == \"deleteTable\"){\n                  table.deleteTable();\n                }\n              return '';\n            }\n            \n            function insertHtmlText(htmlString, index) {\n              if(index == null) {\n                var range = quilleditor.getSelection(true);\n                if(range) {\n                  quilleditor.clipboard.dangerouslyPasteHTML(range.index, htmlString);\n                }\n              } else {\n                quilleditor.clipboard.dangerouslyPasteHTML(index, htmlString);\n              }\n              return '';\n            }\n            \n            function embedVideo(videoUrl) {\n              var range = quilleditor.getSelection(true);\n              if(range) {\n                quilleditor.insertEmbed(range.index, 'video', videoUrl);\n              }\n              return '';\n            }\n            \n            function embedImage(img) {\n              var range = quilleditor.getSelection(true);\n              if(range) {\n                quilleditor.insertEmbed(range.index, 'image', img);\n              }\n              return '';\n            }\n            \n            function enableEditor(isEnabled) {\n              quilleditor.enable(isEnabled);\n              return '';\n            }\n            \n            function setFormat(format, value) {\n            try{\n              if(format == 'clean') {\n                var range = quilleditor.getSelection(true);\n                if(range) {\n                  if(range.length == 0) {\n                    quilleditor.removeFormat(range.index, quilleditor.root.innerHTML.length);\n                  } else {\n                    quilleditor.removeFormat(range.index, range.length);\n                  }\n                } else {\n                  quilleditor.format('clean');\n                }\n              } else {\n                \n                quilleditor.format(format, value);\n              }\n            }catch(e){\n            console.log('setFormat',e);\n            }\n              return '';\n            } \n        </script>\n        </body>\n        </html>\n       "}}
A.aE2.prototype={
anY(){var w,v=this,u=null
v.a=new B.aV(A.deM(15),x.h)
v.b=new B.aV(A.deM(15),x.U)
w=x.N
v.c=B.hY(u,u,u,u,!1,w)
v.d=B.hY(u,u,u,u,!1,w)},
Lz(){var w=0,v=B.l(x.N),u,t=2,s=[],r=this,q,p,o,n
var $async$Lz=B.h(function(d,e){if(d===1){s.push(e)
w=t}while(true)switch(w){case 0:t=4
p=r.a.ga2()
p=p==null?null:p.Wz()
w=7
return B.d(x.F.b(p)?p:B.c4(p,x.T),$async$Lz)
case 7:q=e
if(J.q(q,"<p><br></p>")){p=q
p.toString
p=B.dw(p,"<p><br></p>","")
u=p
w=1
break}p=q
if(p==null)p=""
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
u=""
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.j(u,v)
case 2:return B.i(s.at(-1),v)}})
return B.k($async$Lz,v)},
LT(d){return this.aTT(d)},
aTT(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$LT=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.a.ga2()
s=s==null?null:s.YA(d)
w=3
return B.d(x._.b(s)?s:B.c4(s,x.z),$async$LT)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$LT,v)},
Rh(d,e){return this.bQ8(d,e)},
bQ8(d,e){var w=0,v=B.l(x.z),u,t=this,s
var $async$Rh=B.h(function(f,g){if(f===1)return B.i(g,v)
while(true)switch(w){case 0:s=t.a.ga2()
s=s==null?null:s.Xe(e,d)
w=3
return B.d(x._.b(s)?s:B.c4(s,x.z),$async$Rh)
case 3:u=g
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Rh,v)},
a22(d){return this.bSO(d)},
bSO(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$a22=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.a.ga2()
s=s==null?null:s.XG(d)
w=3
return B.d(x._.b(s)?s:B.c4(s,x.z),$async$a22)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a22,v)},
a0q(d){return this.bLW(d)},
bLW(d){var w=0,v=B.l(x.z),u,t=this,s,r
var $async$a0q=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:r=A.dEf(d)
if(r==null){w=1
break}s=t.a.ga2()
s=s==null?null:s.Wb(r)
w=3
return B.d(x._.b(s)?s:B.c4(s,x.z),$async$a0q)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a0q,v)},
a0p(d){return this.bLV(d)},
bLV(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$a0p=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.a.ga2()
s=s==null?null:s.Wa(d)
w=3
return B.d(x._.b(s)?s:B.c4(s,x.z),$async$a0p)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a0p,v)},
a0r(d){return this.bLZ(!0)},
bLZ(d){var w=0,v=B.l(x.H),u=this,t
var $async$a0r=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:u.e=!0
t=u.a.ga2()
t=t==null?null:t.Wc(!0)
w=2
return B.d(x._.b(t)?t:B.c4(t,x.z),$async$a0r)
case 2:return B.j(null,v)}})
return B.k($async$a0r,v)},
TJ(){var w=0,v=B.l(x.n),u,t=this,s,r
var $async$TJ=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:r=t.a.ga2()
r=r==null?null:r.WI()
w=3
return B.d(x._.b(r)?r:B.c4(r,x.z),$async$TJ)
case 3:s=e
u=s!=null?A.da4(C.aH.qI(0,s,null)):new A.Gl(0,0)
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$TJ,v)},
Uv(d,e,f){return this.aTC(0,e,f)},
aTC(d,e,f){var w=0,v=B.l(x.z),u,t=this,s
var $async$Uv=B.h(function(g,h){if(g===1)return B.i(h,v)
while(true)switch(w){case 0:s=t.a.ga2()
s=s==null?null:s.YB(e,f)
w=3
return B.d(x._.b(s)?s:B.c4(s,x.z),$async$Uv)
case 3:u=h
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Uv,v)},
wH(d,e){return this.aSU(d,e)},
aSU(d,e){var w=0,v=B.l(x.H),u=this,t
var $async$wH=B.h(function(f,g){if(f===1)return B.i(g,v)
while(true)switch(w){case 0:t=u.a.ga2()
if(t!=null)t.Yz(d,e)
return B.j(null,v)}})
return B.k($async$wH,v)},
S4(d){var w,v,u
try{w=this.c
v=(w.b&1)===0
if(v)new B.d1(w,B.t(w).i("d1<1>")).ea(new A.bJz(d))}catch(u){}return},
bTI(d){var w,v,u
try{w=this.d
v=(w.b&1)===0
if(v)new B.d1(w,B.t(w).i("d1<1>")).ea(new A.bJy(d))}catch(u){}return},
l(){this.c.aA(0)
this.d.aA(0)},
tE(){var w=0,v=B.l(x.H),u=this,t
var $async$tE=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:t=u.a.ga2()
t=t==null?null:t.Y8()
w=2
return B.d(x._.b(t)?t:B.c4(t,x.z),$async$tE)
case 2:return B.j(null,v)}})
return B.k($async$tE,v)},
tu(){var w=0,v=B.l(x.H),u=this,t
var $async$tu=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:t=u.a.ga2()
t=t==null?null:t.Y7()
w=2
return B.d(x._.b(t)?t:B.c4(t,x.z),$async$tu)
case 2:return B.j(null,v)}})
return B.k($async$tu,v)},
a_z(){var w=0,v=B.l(x.H),u=this,t
var $async$a_z=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:t=u.a.ga2()
t=t==null?null:t.VF()
w=2
return B.d(x._.b(t)?t:B.c4(t,x.z),$async$a_z)
case 2:return B.j(null,v)}})
return B.k($async$a_z,v)}}
A.Gl.prototype={
gA(d){return this.b}}
A.abV.prototype={
K(){return new A.abW(B.a([],x.c),B.I(x.N,x.z),C.eC)}}
A.abW.prototype={
T(){var w,v,u,t,s,r,q=this,p=x.q
q.f=new B.aV("fontBgColorKey"+C.c.j(B.dN(q.a.d)),p)
q.r=new B.aV("fontColorKey"+C.c.j(B.dN(q.a.d)),p)
q.w=new B.aV("_tablePickerKey"+C.c.j(B.dN(q.a.d)),p)
p=q.a
q.x=p.y
for(p=p.c,w=0;w<7;++w){v=p[w]
u=q.d
t=q.a
s=t.x
r=t.r
t=t.f
u.push(new A.ND(v,!1,null,q.x,t,r,s,null))}q.a9()},
B(d){var w=null,v=this.a,u=v.w
v=v.z
u=B.mK(B.ap(w,B.d0(B.dvM(this.bbW(d),C.k,C.C,v,w,C.f,C.h,0,w,w,C.l),w,C.o,w,w,w,v),C.k,w,w,new B.b2(u,w,w,w,w,w,w,C.M),w,w,w,w,w,w,w,17976931348623157e292),!1,w)
return u},
c_5(d){var w,v,u,t,s,r,q=this,p="direction",o="color",n="align",m="background"
q.e=d
for(w=J.a0(d),v=0;u=q.d,v<u.length;++v){t=u[v]
switch(t.c.a){case 0:u[v]=t.j2(J.q(w.h(d,"bold"),!0))
break
case 1:u[v]=t.j2(J.q(w.h(d,"italic"),!0))
break
case 2:u[v]=t.j2(J.q(w.h(d,"underline"),!0))
break
case 3:u[v]=t.j2(J.q(w.h(d,"strike"),!0))
break
case 4:u[v]=t.j2(J.q(w.h(d,"blockquote"),!0))
break
case 5:u[v]=t.j2(J.q(w.h(d,"code-block"),!0))
break
case 6:u[v]=t.j2(w.h(d,"indent")!=null)
break
case 7:u[v]=t.j2(w.h(d,"indent")!=null)
break
case 8:u[v]=t.j2(J.q(w.h(d,p),"rtl"))
break
case 9:u[v]=t.j2(!J.q(w.h(d,p),"rtl"))
break
case 17:u[v]=t.j2(w.h(d,"size")!=null)
break
case 10:u[v]=t.j2(J.q(w.h(d,"header"),1))
break
case 11:u[v]=t.j2(J.q(w.h(d,"header"),2))
break
case 12:u[v]=t.j2(w.h(d,o)!=null)
try{if(w.h(d,o)!=null){u=B.n4(J.aC(w.h(d,o)).a,null)
t=q.e
s=J.cR(t)
if(u==="List<dynamic>")s.m(t,o,J.v(w.h(d,o),0))
else s.m(t,o,w.h(d,o))}}catch(r){}break
case 14:if(w.h(d,n)==null)w.m(d,n,"")
u=q.d
u[v]=u[v].j2(w.h(d,n)!=null)
break
case 15:u[v]=t.j2(J.q(w.h(d,"list"),"ordered"))
break
case 16:u[v]=t.j2(J.q(w.h(d,"list"),"bullet"))
break
case 19:u[v]=t.j2(w.h(d,"image")!=null)
break
case 20:u[v]=t.j2(w.h(d,"video")!=null)
break
case 21:u[v]=t.j2(w.h(d,"clean")!=null)
break
case 13:u[v]=t.j2(w.h(d,m)!=null)
try{if(w.h(d,m)!=null){u=B.n4(J.aC(w.h(d,m)).a,null)
t=q.e
s=J.cR(t)
if(u==="List<dynamic>")s.m(t,m,J.v(w.h(d,m),0))
else s.m(t,m,w.h(d,m))}}catch(r){}break
case 18:J.bZ(q.e,"link",w.h(d,"link"))
break
case 22:case 23:case 26:case 25:case 24:case 27:break}}q.q(new A.bZJ())},
bbW(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.a([],x.p)
for(w=0;v=p.d,w<v.length;++w){u={}
t=u.a=v[w]
v=t.c
if(v===D.bMB)n.push(B.h6(new B.W(p.x,p.bbC(),o),o,o,o,v.c,o,o,o,o,o,o,E.fG))
else if(v===D.afB){u=p.x
s=p.a.f
n.push(B.h6(new B.W(u,new B.ao(s,s,p.b2Z(),o),o),o,o,o,v.c,o,o,o,o,o,o,E.fG))}else if(v===D.bMF){u=p.x
s=p.a.f
n.push(B.h6(new B.W(u,new B.ao(s,s,p.bcC(w),o),o),o,o,o,v.c,o,o,o,o,o,o,E.fG))}else if(v===D.bME){u=p.x
s=p.a
r=s.f-2
s=G.a4l("packages/quill_html_editor/assets/camera_roll_icon.png",s.r,o,o,o)
J.v(p.e,"video")
n.push(B.h6(new B.W(u,new A.SV(new A.bZt(p),D.bPb,p.a.d,new B.ao(r,r,s,o),o),o),o,o,o,v.c,o,o,o,o,o,o,E.fG))}else if(v===D.afD){u=p.x
s=p.a
s=B.aB(D.azC,s.r,o,s.f)
J.v(p.e,"link")
n.push(B.h6(new B.W(u,new A.SV(new A.bZu(p),D.bPc,p.a.d,s,o),o),o,o,o,v.c,o,o,o,o,o,o,E.fG))}else if(v===D.bMC){u=p.x
s=p.a.f
n.push(B.h6(new B.W(u,new B.ao(s,s,p.bcB(w),o),o),o,o,o,v.c,o,o,o,o,o,o,E.fG))}else if(v===D.bMr){u=p.x
s=p.a.f
n.push(B.h6(new B.W(u,new B.ao(s,s,p.bde(w,d),o),o),o,o,o,v.c,o,o,o,o,o,o,E.fG))}else if(v===D.bMu){u=p.x
s=p.a
r=s.r
q=s.f
n.push(B.h6(new A.a2z(s.w,r,q,u,new A.bZv(p),o),o,o,o,v.c,o,o,o,o,o,o,E.fG))}else if(v===D.bMD){u=p.a
s=u.z
v=v.c
r=p.x
q=u.f
u=u.r
if(s===C.Z)n.push(B.h6(new B.W(r,B.ap(o,o,C.k,u,o,o,o,q,o,o,o,o,o,0.8),o),o,o,o,v,o,o,o,o,o,o,E.fG))
else n.push(B.h6(new B.W(r,B.ap(o,o,C.k,u,o,o,o,0.8,o,o,o,o,o,q),o),o,o,o,v,o,o,o,o,o,o,E.fG))}else{s=p.a
r=s.x
q=s.r
s=s.f
n.push(B.h6(new A.ND(v,t.d,new A.bZw(u,p),p.x,s,q,r,o),o,o,o,v.c,o,o,o,o,o,o,E.fG))}}p.a.toString
return n},
bcD(d,e){switch(d.a){case 0:return B.w(["format","bold","value",e],x.N,x.z)
case 1:return B.w(["format","italic","value",e],x.N,x.z)
case 2:return B.w(["format","underline","value",e],x.N,x.z)
case 3:return B.w(["format","strike","value",e],x.N,x.z)
case 4:return B.w(["format","blockquote","value",e],x.N,x.z)
case 5:return B.w(["format","code-block","value",e],x.N,x.z)
case 7:return B.w(["format","indent","value","+1"],x.N,x.z)
case 6:return B.w(["format","indent","value","-1"],x.N,x.z)
case 8:return B.w(["format","direction","value","rtl"],x.N,x.z)
case 9:return B.w(["format","direction","value",""],x.N,x.z)
case 17:return B.w(["format","size","value","small"],x.N,x.z)
case 12:return B.w(["format","color","value","red"],x.N,x.z)
case 14:return B.w(["format","align","value","right"],x.N,x.z)
case 15:return B.w(["format","list","value",e?"ordered":""],x.N,x.z)
case 16:return B.w(["format","list","value",e?"bullet":""],x.N,x.z)
case 19:return B.w(["format","image","value",""],x.N,x.z)
case 20:return B.w(["format","video","value",""],x.N,x.z)
case 21:return B.w(["format","clean","value",""],x.N,x.z)
case 10:return B.w(["format","header","value",e?1:4],x.N,x.z)
case 11:return B.w(["format","header","value",e?2:4],x.N,x.z)
case 13:return B.w(["format","background","value","red"],x.N,x.z)
case 18:return B.w(["format","link","value",""],x.N,x.z)
case 22:case 23:case 24:case 26:case 25:case 27:return B.w(["format","undo","value",""],x.N,x.z)}},
bbC(){var w,v=this,u=null,t=v.a.w,s=J.v(v.e,"size")
if(s==null)s="normal"
w=B.ab(u,u,v.a.r,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u)
return M.av8(C.Q,new B.Ac(A.d3M(!0,A.d5e(C.by,t,u,u,!0,B.a([v.Wp(8,"Small"),v.Wp(12,"Normal"),v.Wp(16,"Large"),v.Wp(20,"Huge")],x.g),new A.bZp(v),new A.bZq(v),w,s,x.z),C.N),u),C.k,C.hx)},
Wp(d,e){var w=null,v=J.q(J.v(this.e,"size"),e.toLowerCase()),u=this.a
return B.vJ(new A.qN(B.E(e,w,w,w,w,w,w,w,B.ab(w,w,v?u.x:u.r,w,w,w,w,w,w,w,w,d,w,w,C.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w,w,w),w),e.toLowerCase(),x.z)},
Wo(d){var w=null,v=this.a
return new B.ao(w,w,B.E(d,w,w,w,w,w,w,w,B.ab(w,w,d.toLowerCase()!=="normal"?v.x:v.r,w,w,w,w,w,w,w,w,14,w,w,C.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w,w,w),w)},
b2Z(){var w=this,v="align",u=w.a.w,t=J.q(J.v(w.e,v),"")||J.v(w.e,v)==null?"left":J.v(w.e,v)
return new B.Ac(A.d3M(!1,A.d5e(C.cI,u,C.A,D.bE9,!0,B.a([w.Wu("left"),w.Wu("center"),w.Wu("right"),w.Wu("justify")],x.G),new A.bZn(w),null,null,t,x.N),C.N),null)},
Wu(d){var w,v,u
if(d==="center")w=D.azq
else if(d==="right")w=D.azt
else w=d==="justify"?D.azr:D.azs
v=J.q(J.v(this.e,"align"),d)
u=this.a
v=v?u.x:u.r
return B.vJ(new A.qN(B.aB(w,v,null,u.f),null),d,x.N)},
bcC(d){var w,v,u,t=this,s=null,r="color",q=t.r
q===$&&B.b()
w=t.a.f
v=J.v(t.e,r)
u=t.a
v=v!=null?u.x:u.r
u=B.aX(B.E("A",s,s,1,s,s,s,s,B.ab(s,s,v,s,s,s,s,s,s,s,s,u.f-5,s,s,C.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s,s,s),1,s)
v=J.v(t.e,r)!=null?A.bsI(J.v(t.e,r)):C.p
return A.auw(B.fA(C.P,!0,s,new B.ao(w,w,B.a9(B.a([u,B.ap(s,s,C.k,v,s,s,s,3,s,s,s,s,s,t.a.f-3)],x.p),C.i,C.bg,C.I,0,s,C.l),s),C.k,C.A,0,s,s,s,s,s,C.bF),C.m,new A.a0J(new A.bZB(t,d),s),10,q,new A.bZC(t))},
bcB(d){var w,v,u,t,s,r=this,q=null,p="background",o=r.f
o===$&&B.b()
w=B.fd(C.p,C.z,0.1)
v=J.v(r.e,p)!=null?A.bsI(J.v(r.e,p)):C.A
u=r.a.f
t=J.v(r.e,p)
s=r.a
t=t!=null?s.x:s.r
return A.auw(B.fA(C.P,!0,q,B.ap(C.Q,M.av8(C.Q,B.E("A",q,q,1,q,q,q,q,B.ab(q,q,t,q,q,q,q,q,q,q,q,s.f-1,q,q,C.dV,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.k,C.akh),C.k,q,q,new B.b2(v,q,w,q,q,q,q,C.M),q,u,q,q,q,q,q,u),C.k,C.A,0,q,q,q,q,q,C.bF),C.m,new A.a0J(new A.bZy(r,d),q),10,o,new A.bZz(r))},
bde(d,e){var w,v=this,u=null,t=v.a,s=t.w,r=v.w
r===$&&B.b()
w=t.f
return A.auw(new B.ao(w,w,G.a4l(y.b,t.r,u,u,u),u),s,new B.ao(u,200,new A.Wd(new A.bZD(v),6,u),u),0,r,new A.bZE(v,e))},
byt(d){var w=null
B.dy(w,w,!0,w,new A.bZI(this),d,w,!0,!0,x.z)}}
A.ND.prototype={
B(d){var w=this,v=null,u=w.c
return B.h6(B.fH(!1,v,!0,new B.W(w.f,new B.ao(v,v,w.bcJ(u),v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.e,v,v,v,v,v,v,v),v,v,v,u.c,v,v,v,v,v,v,E.fG)},
bcJ(d){var w=this
switch(d.a){case 0:return w.lX(D.Pq)
case 1:return w.lX(D.aAe)
case 2:return w.lX(D.aAl)
case 3:return w.lX(D.aAi)
case 4:return w.lX(D.aAh)
case 5:return w.lX(H.pn)
case 7:return w.lX(D.aAd)
case 6:return w.lX(D.aAc)
case 8:return w.lX(D.aAk)
case 9:return w.lX(D.aAj)
case 12:return w.lX(D.Pq)
case 14:return w.lX(D.aAa)
case 21:return w.lX(D.aAb)
case 15:return w.lX(D.aAg)
case 16:return w.lX(D.aAf)
case 10:return w.asF("packages/quill_html_editor/assets/h1_dark.png")
case 11:return w.asF("packages/quill_html_editor/assets/h2_dark.png")
case 13:return w.lX(D.aA9)
case 19:return w.lX(T.P9)
case 22:return w.lX(D.aAo)
case 23:return w.lX(D.aAn)
case 24:return w.lX(D.aAm)
case 18:case 20:case 17:case 25:case 26:case 27:return C.dd}},
lX(d){var w=this,v=w.d?w.x:w.w
return B.aB(d,v,null,w.r)},
asF(d){var w=this,v=null,u=w.r
return new B.ao(u,u,G.a4l(d,w.d?w.x:w.w,v,v,v),v)},
j2(d){var w=this
return A.dG7(w.x,w.w,w.r,d,null,w.f,w.c)}}
A.kv.prototype={
J(){return"ToolBarStyle."+this.b}}
A.awK.prototype={}
A.a0J.prototype={
B(d){var w=null
return B.ap(w,B.a3N(w,C.o,D.bEx,new A.baQ(this),19,w,L.kP,w,C.G,!0),C.k,C.m,w,w,w,120,w,w,w,w,w,120)}}
A.a2z.prototype={
K(){return new A.aQn()},
bUa(d){return this.r.$1(d)}}
A.aQn.prototype={
T(){this.d=new B.aV("fontBgColorKey"+J.aq(this.a.a),x.q)
this.a9()},
B(d){var w,v,u,t,s=this,r=null,q=s.a,p=q.f,o=q.e
q=q.c
w=s.d
w===$&&B.b()
v=s.arz(!1,d)
u=s.a
t=u.e
return new B.W(p,new B.ao(o,o,A.auw(new B.ao(t,t,G.a4l("packages/quill_html_editor/assets/edit_table.png",u.d,r,r,r),r),q,v,0,w,new A.cfL(s,d)),r),r)},
a8n(d,e,f){var w,v,u,t,s=null,r="packages/quill_html_editor/assets/insert_row_below.png"
switch(d.a){case 0:w="Insert Row Above"
r=y.b
break
case 1:w="Insert Row Below"
break
case 4:w="Delete Row"
r="packages/quill_html_editor/assets/delete_row.png"
break
case 5:w="Delete Column"
r="packages/quill_html_editor/assets/delete_column.png"
break
case 2:w="Insert Column Left"
r="packages/quill_html_editor/assets/insert_column_left.png"
break
case 3:w="Insert Column Right"
r="packages/quill_html_editor/assets/insert_column_right.png"
break
case 6:w="Delete Table"
r="packages/quill_html_editor/assets/delete_table.png"
break
default:w=""}v=this.a
u=v.c
t=v.e
v=v.d
return new A.qN(B.jn(B.fH(!1,s,!0,new B.W(C.eB,B.ad(B.a([new B.ao(t,t,G.a4l(r,v,s,s,s),s),O.b9,B.aX(B.E(w,s,s,s,s,s,s,s,B.ab(s,s,v,s,s,s,s,s,s,s,s,s,s,s,C.b5,s,s,!0,s,s,s,s,s,s,s,s),s,s,s,s,s),1,s)],x.p),C.i,s,C.f,C.I,0,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new A.cfJ(this,d,f,e),s,s,s,s,s,s,s),s,u,s,s,s,s),s)},
by7(d,e){var w=null
B.dy(w,w,!0,w,new A.cfK(this,!0),e,w,!0,!0,x.z)},
arz(d,e){var w,v=null
if(d)return B.f4(v,v,v,new A.qN(new B.et(new A.cfH(this,!0),v),v),C.N,v,v,new B.cM(B.b4(8),C.w),v,v,v)
w=B.aD(e,v,x.w).w.a.a<450?350:v
return new B.ao(200,w,B.iV(!0,!0,!0,v,C.u,v,C.o,new A.cfI(this,!1),7,v,v,C.N,v,v,v,!0,C.G,!0),v)}}
A.tT.prototype={
J(){return"EditTableEnum."+this.b}}
A.a2D.prototype={
K(){var w=null,v=x.M
return new A.a2E(D.Od,new B.ul(B.a([],v),w,w),new B.ul(B.a([],v),w,w))}}
A.a2E.prototype={
a04(){},
l(){$.aw.mb(this)
this.af()},
T(){var w=this
w.a9()
w.w=new B.aV(J.aq(w.a.a),x.A)
$.aw.RG$.push(new A.bls(w))
$.aw.dB$.push(w)},
bcH(d){var w=this,v=w.w
v===$&&B.b()
v=$.aw.b4$.x.h(0,v)
v=v==null?null:v.gan()
x.r.a(v)
if(w.c!=null)w.q(new A.blm(w,v))},
bmN(d){var w,v=this,u=v.c
u.toString
u=B.w8(u,x.u)
u.toString
v.x=u
w=B.ol(new A.blo(v),!1,!1)
v.r=w
u.iN(0,w)},
Nr(){var w,v,u=this.c
if(u!=null){w=x.r.a(u.gan())
v=B.dl(w.cp(0,null),C.r)
return new A.i5(w.gD(0).a,w.gD(0).b,v.a,v.b)}this.y3()
return D.Od},
abh(d){return this.bye(d)},
bye(d){var w=0,v=B.l(x.H),u=this,t,s,r,q,p
var $async$abh=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:p=B.w8(d,x.u)
p.toString
u.y=p
p=u.e
t=u.Nr()
s=u.c
s.toString
r=x.w
s=B.aD(s,null,r).w
q=u.c
q.toString
r=B.ol(new A.blr(u,new A.aDr(D.axv,t,p,new A.i5(s.a.a,B.aD(q,null,r).w.a.b,0,0),u.a.f,8).bRA(0,D.Oc)),!1,!1)
u.f=r
p=u.y
p.iN(0,r)
u.a.toString
return B.j(null,v)}})
return B.k($async$abh,v)},
y3(){var w=this.f
if(w!=null){w.ij(0)
this.f=null}},
B(d){var w=null,v=this.a,u=v.Q
return B.cL(w,v.c,C.o,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,u,w,w,w,w,w,w,w,w,!1,C.af)},
LX(){var w,v=this
v.a.toString
if(v.f!=null)v.y3()
else{w=v.c
w.toString
v.abh(w)}}}
A.aQv.prototype={}
A.aoD.prototype={
bdl(){var w,v=this,u=null,t=1,s=1,r=!1,q=0
switch(v.d.a){case 0:break
case 1:r=!0
break
case 2:t=-1
break
case 6:s=-1
break
case 7:r=!0
q=2
break
case 8:t=-1
s=-1
break
case 9:s=-1
q=3
break
case 10:r=!0
q=3
break
case 11:q=3
break
case 3:q=1
break
case 4:r=!0
q=1
break
case 5:s=-1
q=1
break}w=v.c
w=r?new A.aJ2(w,u):new A.aqR(w,u)
return B.ac0(new B.Gc(q,B.ie(u,u,!1,u,w,new B.Z(v.e,v.f)),u),u,t,s)},
B(d){return this.bdl()}}
A.a07.prototype={
K(){return new A.aO6()}}
A.aO6.prototype={
B(d){var w=null,v=this.a,u=v.r,t=v.c,s=v.d
return B.fA(C.P,!0,w,B.md(B.ap(w,v.w,C.k,w,new B.ac(0,300,0,1/0),new B.b2(t,w,w,u,w,w,w,C.M),w,w,w,w,new B.ai(s,s,s,s),w,w,w),1),C.k,C.A,0,w,w,w,w,w,C.bF)}}
A.i5.prototype={}
A.q6.prototype={
J(){return"ElTooltipPosition."+this.b}}
A.aBA.prototype={
B(d){var w=null,v=this.d
v=B.cL(w,B.ap(w,w,C.k,B.bF(C.e.aD(255*this.e),v.O()>>>16&255,v.O()>>>8&255,v.O()&255),w,w,w,w,w,w,w,w,w,w),C.o,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.f,w,w,w,w,w,w,w,w,!1,C.af)
return v}}
A.aqR.prototype={
b1(d,e){var w,v,u,t,s,r,q,p,o,n="cubicTo"
$.az()
w=B.br()
B.cF()
v=this.b
w.r=v.gn(v)
u=B.cF()
v=e.b
t=v*0.69
s=u.a
s===$&&B.b()
s.a.lineTo(0,t)
r=e.a
q=r*0.31
p=v*0.93
o=s.a
o.toString
B.hb(o,n,[0,v*0.95,r*0.18,v*1.09,q,p])
v=s.a
v.toString
B.hb(v,n,[q,p,r,0,r,0])
p=s.a
p.toString
B.hb(p,n,[r,0,0,0,0,0])
r=s.a
r.toString
B.hb(r,n,[0,0,0,t,0,t])
s=s.a
s.toString
B.hb(s,n,[0,t,0,t,0,t])
d.a.eK(u,w)},
hh(d){return!0}}
A.aJ2.prototype={
b1(d,e){var w,v,u,t,s,r,q,p,o,n="cubicTo"
$.az()
w=B.br()
w.f=!0
v=this.b
w.r=v.gn(v)
u=B.cF()
v=e.a
t=v*0.66
s=e.b
r=s*0.86
q=u.a
q===$&&B.b()
q.a.lineTo(t,r)
s*=1.05
p=v*0.34
o=q.a
o.toString
B.hb(o,n,[v*0.58,s,v*0.42,s,p,r])
s=q.a
s.toString
B.hb(s,n,[p,r,0,0,0,0])
p=q.a
p.toString
B.hb(p,n,[0,0,v,0,v,0])
p=q.a
p.toString
B.hb(p,n,[v,0,t,r,t,r])
q=q.a
q.toString
B.hb(q,n,[t,r,t,r,t,r])
d.a.eK(u,w)},
hh(d){return!0}}
A.aDr.prototype={
axr(){var w,v,u,t,s,r=this,q=r.c,p=q.a
q=q.b
w=r.b
v=w.c+w.a*0.5
w=w.d
u=r.e
t=r.a.b
s=r.f
return new A.oD(new A.i5(p,q,v,w-q-u-t),new A.i5(p,q,Math.floor(v),Math.floor(w-u-t)),D.axk,new B.e6(new B.bn(s,s),new B.bn(s,s),C.a0,new B.bn(s,s)))},
Zg(){var w,v,u,t,s,r,q=this,p=q.a,o=p.a
p=p.b
w=q.b
v=w.c+w.a*0.5
w=w.d
u=q.e
t=q.c
s=t.a
t=t.b
r=q.f
return new A.oD(new A.i5(s,t,v-s*0.5,w-t-u-p),new A.i5(o,p,Math.floor(v-o*0.5),Math.floor(w-u-p)),D.Oc,B.Dv(new B.bn(r,r)))},
axq(){var w,v,u,t,s,r,q=this,p=q.a,o=p.a
p=p.b
w=q.b
v=w.c
u=w.a*0.5
w=w.d
t=q.e
s=q.c
r=q.f
return new A.oD(new A.i5(o,p,v-s.a+u,w-s.b-t-p),new A.i5(o,p,Math.floor(v+u-o),Math.floor(w-t-p)),D.axn,new B.e6(new B.bn(r,r),new B.bn(r,r),new B.bn(r,r),C.a0))},
axp(){var w,v,u,t=this,s=t.c,r=s.a
s=s.b
w=t.b
v=w.c+w.a*0.5
w=w.d+w.b+t.e
u=t.f
return new A.oD(new A.i5(r,s,v,w+t.a.b),new A.i5(r,s,Math.ceil(v),Math.ceil(w)),D.axr,new B.e6(C.a0,new B.bn(u,u),new B.bn(u,u),new B.bn(u,u)))},
aoS(){var w,v,u,t,s,r=this,q=r.a,p=q.a
q=q.b
w=r.b
v=w.c+w.a*0.5
w=w.d+w.b+r.e
u=r.c
t=u.a
s=r.f
return new A.oD(new A.i5(t,u.b,v-t*0.5,w+q),new A.i5(p,q,Math.ceil(v-p*0.5),Math.ceil(w)),D.axs,B.Dv(new B.bn(s,s)))},
axo(){var w,v,u,t,s=this,r=s.c,q=r.a
r=r.b
w=s.b
v=w.c+w.a*0.5
u=s.a
w=w.d+w.b+s.e
t=s.f
return new A.oD(new A.i5(q,r,v-q,w+u.b),new A.i5(q,r,v-u.a,Math.ceil(w)),D.axt,new B.e6(new B.bn(t,t),C.a0,new B.bn(t,t),new B.bn(t,t)))},
avp(){var w,v,u,t=this,s=t.c,r=s.a,q=s.b,p=t.b
s=p.c-s.c
w=t.e
v=t.a.b
p=p.d+p.b*0.5
u=t.f
return new A.oD(new A.i5(r,q,s-r-w-v,p),new A.i5(r,q,Math.floor(s-w-v),p),D.axu,new B.e6(new B.bn(u,u),C.a0,new B.bn(u,u),new B.bn(u,u)))},
avn(){var w,v,u,t,s=this,r=s.c,q=r.a,p=r.b,o=s.b
r=o.c-r.c
w=s.e
v=s.a
u=v.b
o=o.d+o.b*0.5
t=s.f
return new A.oD(new A.i5(q,p,r-q-w-u,o-p*0.5),new A.i5(q,p,Math.floor(r-w-u),Math.floor(o-v.a*0.5)),D.axl,B.Dv(new B.bn(t,t)))},
avo(){var w,v,u,t,s=this,r=s.c,q=r.a,p=r.b,o=s.b
r=o.c-r.c
w=s.e
v=s.a
u=v.b
o=o.d+o.b*0.5
t=s.f
return new A.oD(new A.i5(q,p,r-q-w-u,o-p),new A.i5(q,p,Math.floor(r-w-u),Math.floor(o-v.a)),D.axm,new B.e6(new B.bn(t,t),new B.bn(t,t),new B.bn(t,t),C.a0))},
ayw(){var w,v,u,t,s,r=this,q=r.c,p=q.a
q=q.b
w=r.b
v=w.c+w.a+r.e
u=Math.floor(v)
w=w.d+w.b*0.5
t=Math.floor(w)
s=r.f
return new A.oD(new A.i5(p,q,Math.floor(v+r.a.b),Math.floor(w)),new A.i5(p,q,u,t),D.axo,new B.e6(C.a0,new B.bn(s,s),new B.bn(s,s),new B.bn(s,s)))},
ayu(){var w,v,u,t,s=this,r=s.c,q=r.a
r=r.b
w=s.b
v=w.c+w.a+s.e
w=w.d+w.b*0.5
u=s.a
t=s.f
return new A.oD(new A.i5(q,r,v+u.b,w-r*0.5),new A.i5(q,r,Math.floor(v),Math.floor(w-u.a*0.5)),D.axp,B.Dv(new B.bn(t,t)))},
ayv(){var w,v,u,t,s=this,r=s.c,q=r.a
r=r.b
w=s.b
v=w.c+w.a+s.e
w=w.d+w.b*0.5
u=s.a
t=s.f
return new A.oD(new A.i5(q,r,v+u.b,w-r),new A.i5(q,r,Math.floor(v),w-u.a),D.axq,new B.e6(new B.bn(t,t),new B.bn(t,t),C.a0,new B.bn(t,t)))},
asc(d){var w,v=d.a,u=v.c,t=!1
if(u>0){w=this.d
if(u+v.a<w.a){u=v.d
v=u>0&&u+v.b<w.b}else v=t}else v=t
if(v)return!0
return!1},
bbo(){var w,v,u=this,t=[u.gbAQ(),u.gb3z(),u.gbmt(),u.gbvP(),u.gbth(),u.gbtg(),u.gbmv(),u.gbvR(),u.gbmu(),u.gbvQ(),u.gbtf(),u.gbte()]
for(w=0;w<12;++w){v=t[w]
if(u.asc(v.$0()))return v.$0()}return u.Zg()},
bRA(d,e){var w,v=this
switch(e.a){case 0:w=v.axr()
break
case 1:w=v.Zg()
break
case 2:w=v.axq()
break
case 6:w=v.axp()
break
case 7:w=v.aoS()
break
case 8:w=v.axo()
break
case 9:w=v.avp()
break
case 10:w=v.avn()
break
case 11:w=v.avo()
break
case 3:w=v.ayw()
break
case 4:w=v.ayu()
break
case 5:w=v.ayv()
break
default:w=v.Zg()
break}return v.asc(w)?w:v.bbo()}}
A.oD.prototype={}
A.bwe.prototype={
J(){return"InputAction."+this.b}}
A.bve.prototype={
a35(){var w=0,v=B.l(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$a35=B.h(function(d,e){if(d===1){t.push(e)
w=u}while(true)switch(w){case 0:u=3
w=6
return B.d($.d5D.c9().a36(!1,C.ayi,!0),$async$a35)
case 6:r=e
if(r!=null){q=J.fU(r.a)
p=q.c
if(p!=null){o=C.ij.gm3().cq(p)
s.a.$1("data:image/"+B.o(C.b.ga1(q.b.split(".")))+";base64,"+B.o(o))}}u=1
w=5
break
case 3:u=2
j=t.pop()
k=B.ah(j)
if(k instanceof B.l9){n=k
B.fT().$1("Unsupported operation "+B.o(n))}else{m=k
B.fT().$1("File Picker "+J.aq(m))}w=5
break
case 2:w=1
break
case 5:return B.j(null,v)
case 1:return B.i(t.at(-1),v)}})
return B.k($async$a35,v)}}
A.SV.prototype={
K(){return new A.aSh(new B.aV(null,x.m))},
bUP(d,e){return this.c.$1(e)}}
A.aSh.prototype={
T(){this.f=new B.aV(C.c.j(B.dN(this.a.e)),x.q)
this.a9()},
B(d){return this.aR5(d)},
aR5(d){var w,v,u=this,t={}
t.a=null
w=u.f
w===$&&B.b()
v=u.bdg(!0,0,0,null,d)
return A.auw(u.a.r,C.m,v,10,w,new A.co8(t,u))},
bdg(d,e,f,g,h){var w,v,u,t=this,s=null,r={}
r.a=e
r.b=f
w=B.aD(h,s,x.w).w
v=A.bsI("#E7F0FE")
u=B.b4(10)
return new A.qN(B.ob(s,s,new B.W(new B.ai(0,0,0,w.f.d),B.ap(C.Q,B.ad(B.a([C.h0,new B.eS(1,C.bs,new B.W(C.cW,B.ap(s,B.du(s,!1,s,D.aCv,s,!1,s,s,s,s,1,1,!1,new A.co4(t),s,s,s,s,!1,s,s,C.E,s,new A.co5()),C.k,s,s,new B.b2(v,s,s,u,s,s,s,C.M),s,s,s,s,s,s,s,s),s),s),B.bJ(s,s,s,s,s,s,D.aBM,s,s,s,new A.co6(r,t,g,!0,h),s,s,s,s,s),K.qD,B.bJ(s,s,s,s,s,s,D.aBd,s,s,s,new A.co7(r,t,!0,h),s,s,s,s,s),K.qD],x.p),C.i,s,C.f,C.h,0,s),C.k,s,s,s,s,60,s,s,s,s,s,s),s),t.d,s),s)}}
A.aK4.prototype={
J(){return"UrlInputType."+this.b}}
A.Wd.prototype={
K(){return new A.ak1(B.aY(x.S),B.aY(x.e),new B.aV(null,x.A))},
bUQ(d,e){return this.c.$2(d,e)}}
A.ak1.prototype={
T(){this.a9()},
b8Q(d){var w,v,u,t,s,r=this
r.b6a()
w=$.aw.b4$.x.h(0,r.w).AC(x.r)
w.toString
v=B.a([],x.L)
u=new B.ce(new Float64Array(16))
u.fZ()
if(w.f4(new B.xB(v,B.a([u],x.O),B.a([],x.b)),w.hB(d.gaP(d))))for(w=v.length,u=r.e,t=0;t<v.length;v.length===w||(0,B.K)(v),++t){s=v[t].a
if(s instanceof A.Xj&&!u.p(0,s)){u.u(0,s)
r.bwY(s.H)}}},
bwY(d){this.q(new A.cIJ(this,d))},
B(d){var w=this,v=null,u=w.gb8P(),t=w.a.d
return new A.qN(B.nr(C.cw,B.a3N(v,C.o,new I.BJ(t,0,0,1),new A.cIK(w),t*t,w.w,v,C.cD,C.Z,!0),v,v,u,v,u,v,v,w.gbqT()),v)},
b6a(){this.e.W(0)
this.q(new A.cIH(this))},
bqU(d){this.a.bUQ(this.f+1,this.r+1)}}
A.Xk.prototype={
ba(d){var w=new A.Xj(this.e,null,new B.bw(),B.aJ(x.v))
w.bg()
w.sc_(null)
return w},
bl(d,e){e.H=this.e}}
A.Xj.prototype={}
A.adi.prototype={
gn(d){return this.c.a},
qA(d,e){var w=this.a
w===$&&B.b()
return B.dR(w.vG(d,e),x.z)},
BF(){var w=0,v=B.l(x.H),u=this,t
var $async$BF=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:t=u.c
t.c.Pm(t.a)
t.a=t.b.kM(0)
B.cSl("\x1b[34m[WebViewX]\x1b[0m "+("Current history: "+t.j(0))+"\x1b[0m",1024)
u.a7()
return B.j(null,v)}})
return B.k($async$BF,v)},
BG(){var w=0,v=B.l(x.H),u=this,t
var $async$BG=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:t=u.c
t.b.jT(0,t.a)
t.a=t.c.wm()
B.cSl("\x1b[34m[WebViewX]\x1b[0m "+("Current history: "+t.j(0))+"\x1b[0m",1024)
u.a7()
return B.j(null,v)}})
return B.k($async$BG,v)},
l(){var w=this.b
w.U$=$.a8()
w.S$=0
this.fH()},
$iadj:1}
A.bcy.prototype={}
A.vz.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.vz&&e.a===this.a},
gv(d){return C.d.gv(this.a)}}
A.a2K.prototype={
J(){return"EmbedPosition."+this.b}}
A.aaJ.prototype={
J(){return"SourceType."+this.b}}
A.awP.prototype={
j(d){return"\nHistoryStack:\nBack: "+this.b.j(0)+"\nCurrent: "+B.o(this.a)+"\nForward: "+this.c.j(0)+"\n"},
bE9(d){var w=this
if(d.k(0,w.a))return
w.b.jT(0,w.a)
w.a=d
w.c.W(0)}}
A.c3O.prototype={}
A.DC.prototype={
a0C(d,e,f,g){return this.bMU(d,e,f,g)},
bMU(d,e,f,g){var w=0,v=B.l(x.N),u,t=this,s,r
var $async$a0C=B.h(function(h,i){if(h===1)return B.i(i,v)
while(true)switch(w){case 0:s=B.dC(t.adq(B.to(4,g,C.aG,!1)),0,null)
w=3
return B.d(f==="get"?B.d0y(s,e):B.b2q(s,d,null,e),$async$a0C)
case 3:r=i
u=t.afF(B.mx(B.mw(r.e)).dh(0,r.w))
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a0C,v)}}
A.apx.prototype={
adq(d){return"https://cors.bridged.cc/"+d},
afF(d){return d}}
A.aqt.prototype={
adq(d){return"https://api.codetabs.com/v1/proxy/?quest="+d},
afF(d){return d}}
A.aKK.prototype={
adq(d){return"https://we-cors-anywhere.herokuapp.com/"+d},
afF(d){return d}}
A.qN.prototype={
B(d){return new A.a7K(this.c,!1,this.a)}}
A.Ol.prototype={
j(d){var w=this.d
return"WebViewContent:\nSource: "+this.a+"\nSourceType: "+this.b.b+"\nLast request Headers: none\nLast request Body: "+B.o(w==null?"none":w)+"\n"},
k(d,e){var w,v=this
if(e==null)return!1
if(e!==v){w=!1
if(e instanceof A.Ol)if(e.a===v.a)if(e.b===v.b)w=e.d==v.d}else w=!0
return w},
gv(d){var w=this
return(C.d.gv(w.a)^B.dN(w.b)^C.cY.gv(w.c)^J.X(w.d))>>>0}}
A.bxh.prototype={
J(){return"JavascriptMode."+this.b}}
A.b7d.prototype={
J(){return"AutoMediaPlaybackPolicy."+this.b}}
A.adh.prototype={
K(){return new A.al6()}}
A.al6.prototype={
T(){var w,v,u,t,s,r=this,q=null
r.a9()
r.x=!1
r.a.toString
r.y=!1
w=E.im.ww()
r.e="_iframe"+("_"+B.dw(w,"-","_"))
r.d=r.b7j()
r.buL(r.e)
w=r.a
v=w.c
w=w.d
u=r.y
t=$.a8()
u=new B.bM(u,t,x.Y)
s=x.o
t=new A.adi(u,new A.awP(new A.Ol(v,w,q,q),B.oi(q,s),B.oi(q,s),x.K),t)
t.a_(0,r.gaCD())
u.a_(0,r.gatU())
r.w=t
w=r.a
v=w.d
u=!0
if(v!==D.aex)if(v!==D.aez)w=v===D.aey&&w.c==="about:blank"
else w=u
else w=u
if(w)r.b6I(r.gb5e())
else r.apB()
r.buK()
B.hf(C.L,new A.cPj(r),x.P)},
buL(d){$.D3()
$.ty().wl(d,new A.cPg(this),!0)},
b6I(d){var w=$.dlv(),v=this.e
v===$&&B.b()
w.m(0,"connect_js_to_flutter"+v,new A.cPb(this,d))},
buK(){var w=this.d
w===$&&B.b()
this.f=B.chD(w,"load",new A.cPf(this),!1,x.E.c)},
apB(){var w=this.a.w,v=this.w
v===$&&B.b()
w.$1(v)},
apA(d){this.a.at.$1(d)},
B(d){var w,v=null,u=this.a,t=u.f,s=u.r
u=u.a
w=this.e
w===$&&B.b()
u=B.a_8(!0,new B.je(new B.y6(w,v,v,C.ke,u),v))
w=this.y
w===$&&B.b()
u=B.a([new B.ao(t,s,u,v)],x.p)
if(w)u.push(B.pp(0,new A.a7K(B.ap(v,v,C.k,v,v,v,v,v,v,v,v,v,v,v),!1,v)))
else u.push(C.V)
return new B.cj(C.ae,v,C.ad,C.u,u,v)},
b7j(){var w,v=this,u=document.createElement("iframe")
u.toString
w=v.e
w===$&&B.b()
u.id="id_"+w
u.name="name_"+v.e
w=u.style
w.border="none"
u.width=C.c.j(C.e.L(v.a.f))
u.height=C.c.j(C.e.L(v.a.r))
w=u.style
w.width="100%"
w=u.style
w.height="100%"
v.a.toString
u.allowFullscreen=!0
v.a.toString
w=u.sandbox
w.toString
C.b.aN(D.aSs,C.avq.gkC(w))
v.a.toString
u.sandbox.add("allow-scripts")
v.a.toString
u.allow=C.b.hf(D.aPb,new A.cPc())
return u},
bDi(){var w=this.w
w===$&&B.b()
w=w.c.a
this.apA(w.a)
this.aCa(w)},
bfU(){this.q(new A.cPd(this))},
a7g(d,e){return this.b5L(d,e)},
b5L(d,e){var w=0,v=B.l(x.y),u,t=this
var $async$a7g=B.h(function(f,g){if(f===1)return B.i(g,v)
while(true)switch(w){case 0:t.a.toString
u=!0
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a7g,v)},
aCa(d){var w,v,u=this,t=d.a
if(t.length===0){u.a.toString
return}w=d.b
switch(w.a){case 0:w=u.d
w===$&&B.b()
u.a.toString
v=u.e
v===$&&B.b()
w.srcdoc=A.cX3(t,!0,D.If,v)
break
case 1:case 2:if(t==="about:blank"){w=u.d
w===$&&B.b()
u.a.toString
v=u.e
v===$&&B.b()
w.srcdoc=A.cX3("<br>",!0,D.If,v)
break}if(!C.d.b9(t,B.bH("http[s]?://",!1,!1,!1))){u.a.toString
return}if(w===D.aey){w=u.d
w===$&&B.b()
w=B.dMi(w.contentWindow)
w.toString
J.do7(J.dnK(w),t)}else u.bBD(d.c,"get",t)
break}},
WU(d){return this.bgZ(d)},
bgZ(d){var w=0,v=B.l(x.H),u,t=this,s,r,q,p,o,n,m
var $async$WU=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:o=x.i.a(C.aH.qI(0,d,null))
n=J.a0(o)
m=B.bf(n.h(o,"href"))
n.j(o)
t.a.toString
s=t.w
s===$&&B.b()
w=3
return B.d(t.a7g(m,s.c.a.b),$async$WU)
case 3:if(!f){t.a.toString
w=1
break}if(m==="javascript:history.back()"){t.w.BF()
w=1
break}else if(m==="javascript:history.forward()"){t.w.BG()
w=1
break}r=B.bf(n.h(o,"method"))
q=n.h(o,"body")
if(q==null)p=null
else{n=x.N
p=B.I(n,n)
p.ZP(p,J.aR(x.j.a(q),new A.cPe(),x.J))}t.aB3(p,t.w.c.a.c,r,m)
case 1:return B.j(u,v)}})
return B.k($async$WU,v)},
aB3(d,e,f,g){this.a86(d,e,f,g).aK(new A.cPh(this,g,e,d),x.P).k_(new A.cPi(this,g))},
bBD(d,e,f){return this.aB3(null,d,e,f)},
a86(d,e,f,g){return this.baV(d,e,f,g)},
baV(d,e,f,g){var w=0,v=B.l(x.N),u,t=this,s,r,q,p,o,n,m
var $async$a86=B.h(function(h,i){if(h===1)return B.i(i,v)
while(true)$async$outer:switch(w){case 0:t.a.toString
p=B.A(D.aIz,x.W)
C.b.aUy(p)
s=p
t.a.toString
for(r=0;r<J.bl(s);++r){q=J.v(s,r)
B.a1(q).j(0)
t.a.toString
try{o=q.a0C(d,e,f,g)
u=o
w=1
break $async$outer}catch(l){B.a1(q).j(0)
t.a.toString
if(J.q(r,J.bl(s)-1)){o=B.xh("None of the provided proxies were able to fetch the given page.",null)
m=new B.am($.av,x.I)
m.pC(o)
u=m
w=1
break $async$outer}continue}}o=B.xh("Bad state",null)
m=new B.am($.av,x.I)
m.pC(o)
u=m
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a86,v)},
l(){var w=this,v=w.f
v===$&&B.b()
v.a3(0)
v=w.w
v===$&&B.b()
v.N(0,w.gaCD())
w.w.b.N(0,w.gatU())
w.af()}}
var z=a.updateTypes(["oD()","~()","~(qG)","T6(@)","KF<@>(@)","qh(@)","~(jv,uc,f)","~(Gl)","e(J,h7<@>)","adj<@>(adj<@>)","V<@>(tT)","qN(J,m)","@(dm)","~(mf)","Xk(J,m)","aF(qh)","H?(H?)","H?(@)"])
A.cQh.prototype={
$1(d){var w=function(e,f,g){return function(){return e(f,g,this,Array.prototype.slice.apply(arguments))}}(A.dLW,d,!1)
A.d_J(w,$.Pz(),d)
return w},
$S:48}
A.cQi.prototype={
$1(d){return new this.a(d)},
$S:48}
A.cRQ.prototype={
$1(d){return new A.T6(d)},
$S:z+3}
A.cRR.prototype={
$1(d){return new A.KF(d,x.R)},
$S:z+4}
A.cRS.prototype={
$1(d){return new A.qh(d)},
$S:z+5}
A.bty.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=d.w=J.aq(d.w),p=B.a([],x.d)
if(e.geY(e)>0)p.push(F.abf(C.d.ai(q,0,e.geY(e))))
w=e.pt(0)
w.toString
if(f.length===0&&C.d.b9(w,"www."))v="https://"+w
else v=w
u=F.d5l("a")
u.b.m(0,"href",f+v)
u.ghy(0).W(0)
w=F.abf(w)
u.ghy(0).u(0,w)
p.push(u)
t=e.geu(e)
if(t<q.length)p.push(F.abf(C.d.da(q,t)))
w=F.bjy()
w.ghy(0).E(0,p)
s=d.a
if(s==null)B.aa(B.aN("Node must have a parent to replace it."))
s=s.ghy(0)
r=d.a.ghy(0)
s.m(0,r.de(r,d),w)},
$S:z+6}
A.btz.prototype={
$1(d){var w=J.aq(d.w)
d.w=w
B.vc(w,this.a,new A.btx(this.b,d),null)},
$S:z+2}
A.btx.prototype={
$1(d){this.a.$3(this.b,d,"mailto:")
return""},
$S:73}
A.btA.prototype={
$1(d){var w=J.aq(d.w)
d.w=w
B.vc(w,this.a,new A.btw(this.b,d),null)},
$S:z+2}
A.btw.prototype={
$1(d){this.a.$3(this.b,d,"")
return""},
$S:73}
A.btB.prototype={
$1(d){var w=J.aq(d.w)
d.w=w
B.vc(w,this.a,new A.btv(this.b,d),null)},
$S:z+2}
A.btv.prototype={
$1(d){this.a.$3(this.b,d,"tel:")
return""},
$S:73}
A.cmz.prototype={
$1(d){this.a.a.toString},
$S:83}
A.cmA.prototype={
$0(){B.fT().$1("Editor Loaded :)")},
$S:0}
A.cmB.prototype={
$0(){var w,v=this.a
v.q(new A.cmy(v))
w=v.d
w===$&&B.b()
if(w.length!==0)v.tL(w)},
$S:0}
A.cmy.prototype={
$0(){this.a.e=!1},
$S:0}
A.cmx.prototype={
$1(d){return this.a.e?D.anW:C.V},
$S:366}
A.cmt.prototype={
$1(d){B.fT().$1("has focus "+d)
this.a.q(new A.cmr())},
$S:119}
A.cmr.prototype={
$0(){},
$S:0}
A.cms.prototype={
$1(d){return B.fT().$1("widget text change "+d)},
$S:6}
A.cmw.prototype={
$0(){},
$S:0}
A.cmv.prototype={
$1(d){return B.fT().$1("Editor resized "+B.o(d))},
$S:151}
A.cmu.prototype={
$1(d){return B.fT().$1("index "+B.o(d.a)+", range "+B.o(d.b))},
$S:z+7}
A.bJP.prototype={
$2(d,e){var w=e.b
if(w!=null)this.a.x=w
if(e.a===W.oZ)return B.iU(new A.bJO(this.a))
w=this.a.a.db.$1(d)
return w},
$S:z+8}
A.bJO.prototype={
$2(d,e){var w=this.a,v=e.b
w.e=w.atf(v)
return w.b44(d,v)},
$S:96}
A.bJM.prototype={
$1(d){this.a.as=!1},
$S:6}
A.bJL.prototype={
$1(d){return this.a.d=d},
$S:z+9}
A.bJN.prototype={
$1(d){B.hf(C.br,null,x.z).aK(new A.bJB(this.a),x.P)},
$S:6}
A.bJB.prototype={
$1(d){var w,v=this.a
v.as=!0
B.fT().$1("_editorLoaded true")
if(v.c!=null)v.q(new A.bJA())
v.a.r.a0r(!0)
w=v.a
w.at.$0()
v.a.r.d.u(0,"")},
$S:12}
A.bJA.prototype={
$0(){},
$S:0}
A.bJE.prototype={
$1(d){var w,v,u=this.a,t=u.r
t===$&&B.b()
w=J.ib(d)
if(t===B.kn(w.j(d)))return
try{t=B.kn(w.j(d))
u.r=t==null?u.a.d:t}catch(v){u.r=u.a.d}finally{if(u.c!=null)u.q(new A.bJD(u))
u.a.as.$1(u.r)}},
$S:12}
A.bJD.prototype={
$0(){var w=this.a.r
w===$&&B.b()
return w},
$S:0}
A.bJF.prototype={
$1(d){var w,v
try{w=this.a.a.r.b.ga2()
if(w!=null)w.c_5(C.aH.qI(0,d,null))}catch(v){}},
$S:12}
A.bJG.prototype={
$1(d){var w,v,u,t,s
if(""===d)return
try{u=this.a
u.a.toString
w=""
t=B.bH("<[^>]*>|&[^;]+;",!0,!1,!1)
v=B.dw(d,t," ")
if(J.vi(v)==="")w=""
else w=d
u.a.w.$1(w)
u.a.r.c.u(0,w)}catch(s){}},
$S:12}
A.bJH.prototype={
$1(d){var w=this.a,v=(d==null?null:J.aq(d))==="true"
w.w=v
w.a.z.$1(v)
w.a.toString},
$S:12}
A.bJI.prototype={
$1(d){var w,v,u,t,s
if(""===d)return
try{u=this.a
u.a.toString
w=""
t=B.bH("<[^>]*>|&[^;]+;",!0,!1,!1)
v=B.dw(d,t," ")
if(J.vi(v)==="")w=""
else w=d
u=u.a
u.r.c.u(0,w)}catch(s){}},
$S:12}
A.bJJ.prototype={
$1(d){var w,v,u
try{w=this.a
v=w.a
v.toString
if(!w.w){w.w=!0
v.z.$1(!0)}w=w.a.Q
w.$1(d!=null?A.da4(C.aH.qI(0,d,null)):new A.Gl(0,0))}catch(u){}},
$S:12}
A.bJK.prototype={
$1(d){var w=this.a
w.as=!0
if(w.c!=null)w.q(new A.bJC())},
$S:12}
A.bJC.prototype={
$0(){},
$S:0}
A.bJz.prototype={
$1(d){this.a.$1(d)},
$S:6}
A.bJy.prototype={
$1(d){this.a.$0()},
$S:6}
A.cQP.prototype={
$1(d){return"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890".charCodeAt($.dmv().yk(62))},
$S:67}
A.bZJ.prototype={
$0(){},
$S:0}
A.bZt.prototype={
$1(d){this.a.a.d.a0q(d)},
$S:83}
A.bZu.prototype={
$1(d){this.a.a.d.wH("link",d)},
$S:83}
A.bZv.prototype={
$1(d){return this.a.a.d.a22(d)},
$S:z+10}
A.bZw.prototype={
$0(){var w=0,v=B.l(x.H),u=this,t,s,r,q,p,o,n,m
var $async$$0=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:o=u.a
n=o.a
m=n.c
w=m===D.bMt?2:4
break
case 2:u.b.a.d.a_z()
w=3
break
case 4:w=m===D.bMz?5:7
break
case 5:u.b.a.d.tE()
w=6
break
case 7:w=m===D.bMw?8:10
break
case 8:u.b.a.d.tu()
w=9
break
case 10:w=m===D.bMA?11:13
break
case 11:w=14
return B.d(new A.bve(new A.bZr(u.b)).a35(),$async$$0)
case 14:w=12
break
case 13:if(m===D.afF){t=B.a([],x.c)
for(n=u.b,m=n.d,s=m.length,r=0;r<m.length;m.length===s||(0,B.K)(m),++r)t.push(m[r].j2(!1))
n.d=t}else if(m===D.afC){for(n=u.b.d,m=n.length,r=0;r<n.length;n.length===m||(0,B.K)(n),++r){q=n[r]
if(q.c===D.afE)q.j2(!1)}n=o.a
o.a=n.j2(!n.d)}else if(m===D.afE){for(n=u.b.d,m=n.length,r=0;r<n.length;n.length===m||(0,B.K)(n),++r){q=n[r]
if(q.c===D.afC)q.j2(!1)}n=o.a
o.a=n.j2(!n.d)}else o.a=n.j2(!n.d)
case 12:case 9:case 6:case 3:n=u.b
o=o.a
p=n.bcD(o.c,o.d)
n.a.d.wH(p.h(0,"format"),p.h(0,"value"))
if(J.q(J.v(n.e,"direction"),"rtl"))n.a.d.wH("align","right")
n.q(new A.bZs())
return B.j(null,v)}})
return B.k($async$$0,v)},
$S:1}
A.bZr.prototype={
$1(d){var w=this.a
J.bZ(w.e,"image",d)
w.a.d.a0p(d)},
$S:83}
A.bZs.prototype={
$0(){},
$S:0}
A.bZq.prototype={
$1(d){var w=this.a
return B.a([w.Wo("Small"),w.Wo("Normal"),w.Wo("Large"),w.Wo("Huge")],x.p)},
$S:1162}
A.bZp.prototype={
$1(d){var w,v=this.a
J.bZ(v.e,"size",d)
w=v.a.d
w.wH("size",d==="normal"?"":d)
v.q(new A.bZo())},
$S:31}
A.bZo.prototype={
$0(){},
$S:0}
A.bZn.prototype={
$1(d){var w="align",v=this.a,u=v.e
J.bZ(u,w,d==="left"?"":d)
v.a.d.wH(w,J.v(v.e,w))
v.q(new A.bZm())},
$S:9}
A.bZm.prototype={
$0(){},
$S:0}
A.bZC.prototype={
$0(){var w=this.a,v=w.r
v===$&&B.b()
if(v.ga2()!=null)w.r.ga2().LX()},
$S:0}
A.bZB.prototype={
$1(d){var w,v,u="color",t=this.a
J.bZ(t.e,u,d)
w=t.d
v=this.b
w[v]=w[v].j2(!0)
t.a.d.wH(u,J.v(t.e,u))
t.q(new A.bZA())
w=t.r
w===$&&B.b()
if(w.ga2()!=null)t.r.ga2().y3()},
$S:83}
A.bZA.prototype={
$0(){},
$S:0}
A.bZz.prototype={
$0(){var w=this.a,v=w.f
v===$&&B.b()
if(v.ga2()!=null)w.f.ga2().LX()},
$S:0}
A.bZy.prototype={
$1(d){var w,v,u="background",t=this.a
J.bZ(t.e,u,d)
w=t.d
v=this.b
w[v]=w[v].j2(!0)
t.a.d.wH(u,J.v(t.e,u))
t.q(new A.bZx())
w=t.f
w===$&&B.b()
if(w.ga2()!=null)t.f.ga2().y3()},
$S:83}
A.bZx.prototype={
$0(){},
$S:0}
A.bZE.prototype={
$0(){var w,v=this.b
if(B.aD(v,null,x.w).w.a.a<480)this.a.byt(v)
else{v=this.a
w=v.w
w===$&&B.b()
if(w.ga2()!=null)v.w.ga2().LX()}},
$S:0}
A.bZD.prototype={
$2(d,e){var w,v=this.a
v.a.d.Rh(d,e)
w=v.w
w===$&&B.b()
if(w.ga2()!=null)v.w.ga2().y3()},
$S:367}
A.bZI.prototype={
$1(d){var w=null
return B.f4(w,w,w,new A.qN(new B.et(new A.bZH(this.a),w),w),C.N,w,w,new B.cM(B.b4(8),C.w),w,w,w)},
$S:28}
A.bZH.prototype={
$1(d){var w=null,v=x.p
return new B.ao(300,310,B.a9(B.a([B.ad(B.a([D.bEc,D.axO,B.bJ(w,w,w,w,w,w,X.mL,w,w,w,new A.bZF(d),w,w,w,w,w)],v),C.i,w,C.f,C.I,0,w),B.aX(new A.Wd(new A.bZG(this.a,d),8,w),1,w),C.h1],v),C.i,C.bg,C.I,0,w,C.l),w)},
$S:368}
A.bZF.prototype={
$0(){return B.bk(this.a,!1).d9()},
$S:0}
A.bZG.prototype={
$2(d,e){this.a.a.d.Rh(d,e)
B.bk(this.b,!1).d9()},
$S:367}
A.baQ.prototype={
$2(d,e){var w=null
return new A.qN(B.cL(w,new B.W(C.eB,B.ap(w,w,C.k,w,w,new B.b2(A.bsI(D.SS[e]),w,B.fd(C.p,C.z,0.3),w,w,w,w,C.M),w,40,w,w,w,w,w,40),w),C.o,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.baP(this.a,e),w,w,w,w,w,w,w,w,!1,C.af),w)},
$S:z+11}
A.baP.prototype={
$0(){this.a.c.$1(D.SS[this.b])},
$S:0}
A.cfL.prototype={
$0(){var w,v=this.b
if(B.aD(v,null,x.w).w.a.a<480)this.a.by7(!0,v)
else{v=this.a
w=v.d
w===$&&B.b()
if(w.ga2()!=null)v.d.ga2().LX()}},
$S:0}
A.cfJ.prototype={
$0(){var w,v=this,u=v.a
u.a.bUa(v.b)
if(v.c)B.bk(v.d,!1).d9()
else{w=u.d
w===$&&B.b()
if(w.ga2()!=null)u.d.ga2().y3()}},
$S:0}
A.cfK.prototype={
$1(d){return this.a.arz(this.b,d)},
$S:24}
A.cfH.prototype={
$1(d){var w,v=this,u=null,t=x.w
if(B.aD(d,u,t).w.a.a<380)t=B.iV(!0,!0,!0,u,C.u,u,C.o,new A.cfF(v.a,v.b),7,u,u,u,u,u,u,!1,C.G,!0)
else{w=B.a3N(u,C.o,new I.BJ(B.aD(d,u,t).w.a.a<380?1:2,0,0,3.3333333333333335),new A.cfG(v.a,v.b),7,u,u,u,C.G,!0)
t=w}return new B.ao(400,u,B.a9(B.a([D.bBb,new B.eS(1,C.bs,new B.W(C.cd,t,u),u),C.h1],x.p),C.i,C.f,C.I,0,u,C.l),u)},
$S:368}
A.cfF.prototype={
$2(d,e){var w=B.a(D.Fr.slice(0),x.x)
return this.a.a8n(w[e],d,this.b)},
$S:37}
A.cfG.prototype={
$2(d,e){var w=B.a(D.Fr.slice(0),x.x)
return this.a.a8n(w[e],d,this.b)},
$S:37}
A.cfI.prototype={
$2(d,e){var w=B.a(D.Fr.slice(0),x.x)
return this.a.a8n(w[e],d,this.b)},
$S:37}
A.bls.prototype={
$1(d){var w=this.a,v=w.c
v.toString
return w.bmN(v)},
$S:5}
A.blm.prototype={
$0(){var w=this.a,v=this.b
w.e=new A.i5(v.gD(0).a,v.gD(0).b,0,0)
w=w.r
if(w!=null)w.ij(0)},
$S:0}
A.blo.prototype={
$1(d){var w,v,u=this.a
$.aw.RG$.push(new A.bln(u,d))
w=u.w
w===$&&B.b()
v=u.Nr()
return B.md(B.bj(A.d3L(u.a.e,C.m,w,2,C.bj,v),null,null),0)},
$S:1165}
A.bln.prototype={
$1(d){return this.a.bcH(this.b)},
$S:5}
A.blr.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a
q.a.toString
w=this.b
v=w.a
u=q.Nr()
t=q.a
s=t.d
v=B.e8(r,A.d3L(t.e,s,r,2,w.d,u),r,r,v.c,r,v.d,r)
u=w.b
u=B.e8(r,new A.aoD(s,w.c,16,10,r),r,r,u.c,r,u.d,r)
w=q.Nr()
s=q.Nr()
return new B.cj(C.ae,r,C.ad,C.u,B.a([new A.qN(new A.aBA(!0,C.ay,0.7,new A.blp(q),r),r),v,u,B.e8(r,B.cL(r,q.a.c,C.o,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.blq(),r,r,r,r,r,r,r,r,!1,C.af),r,r,s.c,r,w.d,r)],x.p),r)},
$S:271}
A.blp.prototype={
$0(){this.a.y3()},
$S:0}
A.blq.prototype={
$0(){},
$S:0}
A.co8.prototype={
$0(){var w=0,v=B.l(x.H),u=this,t,s,r
var $async$$0=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=u.b
r=u.a
w=2
return B.d(s.a.e.TJ(),$async$$0)
case 2:r.a=e
t=s.f
t===$&&B.b()
if(t.ga2()!=null)s.f.ga2().LX()
return B.j(null,v)}})
return B.k($async$$0,v)},
$S:1}
A.co4.prototype={
$1(d){var w=this.a
w.q(new A.co3(w,d))},
$S:6}
A.co3.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.co5.prototype={
$1(d){if(d==null||d.length===0)return"Can't be empty"
return null},
$S:46}
A.co6.prototype={
$0(){var w,v,u=this,t=Date.now(),s=u.a
if(t-s.a<500)return
s.a=t
t=u.b
if(t.d.ga2().iS()){s=u.c
if(s!=null){w=t.a.e
v=s.a
if(v==null)v=0
s=s.b
w.Uv(0,v,s==null?0:s)}B.hf(Q.Nx,null,x.z).aK(new A.co1(t,u.d,u.e),x.P)}else{t.e=null
t.q(new A.co2())}},
$S:0}
A.co1.prototype={
$1(d){var w,v=this.a,u=v.a
u.toString
w=v.e
u.bUP(0,w==null?"":w)
v=v.f
v===$&&B.b()
v.ga2().y3()},
$S:12}
A.co2.prototype={
$0(){},
$S:0}
A.co7.prototype={
$0(){var w=Date.now(),v=this.a
if(w-v.b<500)return
v.b=w
w=this.b.f
w===$&&B.b()
w.ga2().y3()},
$S:0}
A.cIJ.prototype={
$0(){var w,v,u,t,s=this.a,r=s.d
r.u(0,this.b)
w=B.A(r,B.t(r).i("cK.E"))
C.b.cY(w,new A.cII())
s.r=C.e.hS(C.b.ga1(w),s.a.d)
s.f=C.e.au(C.b.ga1(w),s.a.d)
r.W(0)
for(v=0,u=0;u<s.a.d;++u)for(t=0;t<s.a.d;++t){if(u<=s.r&&t<=s.f)r.u(0,v);++v}},
$S:0}
A.cII.prototype={
$2(d,e){return d-e},
$S:215}
A.cIK.prototype={
$2(d,e){var w=null,v=this.a.d,u=v.p(0,e)?H.CZ:C.A,t=v.p(0,e)?2:1
return new A.Xk(e,B.ap(w,w,C.k,w,w,new B.b2(u,w,B.fd(v.p(0,e)?H.MT:C.me,C.z,t),w,w,w,w,C.M),w,w,w,L.kP,w,w,w,w),w)},
$S:z+14}
A.cIH.prototype={
$0(){this.a.d.W(0)},
$S:0}
A.btM.prototype={
$2(d,e){return d+C.d.aX("\n",2)+e},
$S:129}
A.btN.prototype={
$1(d){var w=d.b[1]
w.toString
return"<"+this.a+w+"> \n"+this.b},
$S:73}
A.cPj.prototype={
$0(){var w=this.a,v=w.w
v===$&&B.b()
w.aCa(v.c.a)},
$S:7}
A.cPg.prototype={
$1(d){var w=this.a.d
w===$&&B.b()
return w},
$S:1166}
A.cPb.prototype={
$1(d){var w,v,u,t=this.a
t.r=d
for(w=t.a.y,w=B.el(w,w.r,B.t(w).c),v=w.$ti.c;w.t();){u=w.d
if(u==null)u=v.a(u)
t.r.m(0,u.a,u.b)}t.r.m(0,"WebOnClickInsideIframe",new A.cPa(t))
w=t.w
w===$&&B.b()
w.a=t.r
this.b.$0()},
$S:z+15}
A.cPa.prototype={
$1(d){this.a.WU(B.bf(d))},
$S:12}
A.cPf.prototype={
$1(d){var w,v,u=this.a
u.e===$&&B.b()
w=u.a
w.toString
v=u.x
v===$&&B.b()
if(!v){u.x=!0
w=u.w
w===$&&B.b()
u.apA(w.c.a.a)}else{u=u.w
u===$&&B.b()
w.ax.$1(u.c.a.a)}},
$S:200}
A.cPc.prototype={
$2(d,e){return d+"; "+e},
$S:129}
A.cPd.prototype={
$0(){var w=this.a,v=w.w
v===$&&B.b()
w.y=v.b.a},
$S:0}
A.cPe.prototype={
$1(d){var w=J.a0(d)
return new B.b8(J.aq(w.h(d,0)),J.aq(w.h(d,1)),x.J)},
$S:1167}
A.cPh.prototype={
$1(d){var w,v=this,u=v.a,t=v.b,s=A.d6t(D.axA,d,'      <base href="'+t+"\">\n      <script>\n\n      document.addEventListener('click', e => {\n        if (frameElement && document.activeElement && document.activeElement.href) {\n          e.preventDefault()\n\n          var returnedObject = JSON.stringify({method: 'get', href: document.activeElement.href});\n          frameElement.contentWindow.WebOnClickInsideIframe && frameElement.contentWindow.WebOnClickInsideIframe(returnedObject)\n        }\n      })\n      document.addEventListener('submit', e => {\n        if (frameElement && document.activeElement && document.activeElement.form && document.activeElement.form.action) {\n          e.preventDefault()\n\n          if (document.activeElement.form.method === 'post') {\n            var formData = new FormData(document.activeElement.form);\n            \n            var returnedObject = JSON.stringify({method: 'post', href: document.activeElement.form.action, body: [...formData]});\n            frameElement.contentWindow.WebOnClickInsideIframe && frameElement.contentWindow.WebOnClickInsideIframe(returnedObject)\n          } else {\n            var urlWithQueryParams = document.activeElement.form.action + '?' + new URLSearchParams(new FormData(document.activeElement.form))\n\n            var returnedObject = JSON.stringify({method: 'get', href: urlWithQueryParams});\n            frameElement.contentWindow.WebOnClickInsideIframe && frameElement.contentWindow.WebOnClickInsideIframe(returnedObject)\n          }\n        }\n      })\n      </script>\n      "),r=u.d
r===$&&B.b()
u.a.toString
w=u.e
w===$&&B.b()
r.srcdoc=A.cX3(s,!0,D.If,w)
w=u.w
w===$&&B.b()
w.c.bE9(new A.Ol(t,D.aez,v.c,v.d))
u.a.toString},
$S:83}
A.cPi.prototype={
$1(d){var w=this.a
w.a.toString
B.o(d)
w.a.toString},
$S:12};(function aliases(){var w=A.qh.prototype
w.aWs=w.h
w.aWt=w.m
w=A.Y7.prototype
w.anM=w.m})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_1u
w(A,"dUv","d_E",16)
w(A,"dUu","d_D",17)
var t
v(t=A.aDr.prototype,"gbth","axr",0)
v(t,"gbAQ","Zg",0)
v(t,"gbtg","axq",0)
v(t,"gbtf","axp",0)
v(t,"gb3z","aoS",0)
v(t,"gbte","axo",0)
v(t,"gbmv","avp",0)
v(t,"gbmt","avn",0)
v(t,"gbmu","avo",0)
v(t,"gbvR","ayw",0)
v(t,"gbvP","ayu",0)
v(t,"gbvQ","ayv",0)
u(t=A.ak1.prototype,"gb8P","b8Q",12)
u(t,"gbqT","bqU",13)
v(A.adi.prototype,"gfB","l",1)
v(t=A.al6.prototype,"gb5e","apB",1)
v(t,"gaCD","bDi",1)
v(t,"gatU","bfU",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.cl,[A.cQh,A.cQi,A.cRQ,A.cRR,A.cRS,A.bty,A.btz,A.btx,A.btA,A.btw,A.btB,A.btv,A.cmz,A.cmx,A.cmt,A.cms,A.cmv,A.cmu,A.bJM,A.bJL,A.bJN,A.bJB,A.bJE,A.bJF,A.bJG,A.bJH,A.bJI,A.bJJ,A.bJK,A.bJz,A.bJy,A.cQP,A.bZt,A.bZu,A.bZv,A.bZr,A.bZq,A.bZp,A.bZn,A.bZB,A.bZy,A.bZI,A.bZH,A.cfK,A.cfH,A.bls,A.blo,A.bln,A.blr,A.co4,A.co5,A.co1,A.btN,A.cPg,A.cPb,A.cPa,A.cPf,A.cPe,A.cPh,A.cPi])
u(B.H,[A.qh,A.aE2,A.Gl,A.i5,A.aDr,A.oD,A.bve,A.bcy,A.vz,A.awP,A.c3O,A.DC,A.Ol])
u(A.qh,[A.T6,A.Y7])
t(A.KF,A.Y7)
t(A.Iz,B.f9)
u(B.af,[A.Tu,A.a7K,A.ND,A.a0J,A.aoD,A.aBA,A.qN])
u(B.M,[A.a44,A.a8c,A.abV,A.a2z,A.a2D,A.a07,A.SV,A.Wd,A.adh])
u(B.N,[A.aRJ,A.a8d,A.abW,A.aQn,A.aQv,A.aO6,A.aSh,A.ak1,A.al6])
u(B.cV,[A.cmA,A.cmB,A.cmy,A.cmr,A.cmw,A.bJA,A.bJD,A.bJC,A.bZJ,A.bZw,A.bZs,A.bZo,A.bZm,A.bZC,A.bZA,A.bZz,A.bZx,A.bZE,A.bZF,A.baP,A.cfL,A.cfJ,A.blm,A.blp,A.blq,A.co8,A.co3,A.co6,A.co2,A.co7,A.cIJ,A.cIH,A.cPj,A.cPd])
u(B.ev,[A.bJP,A.bJO,A.bZD,A.bZG,A.baQ,A.cfF,A.cfG,A.cfI,A.cII,A.cIK,A.btM,A.cPc])
u(B.fw,[A.kv,A.tT,A.q6,A.bwe,A.aK4,A.a2K,A.aaJ,A.bxh,A.b7d])
t(A.awK,B.P)
t(A.a2E,A.aQv)
u(B.tM,[A.aqR,A.aJ2])
t(A.Xk,B.bC)
t(A.Xj,B.yC)
t(A.adi,B.i3)
u(A.DC,[A.apx,A.aqt,A.aKK])
w(A.Y7,B.a4)
v(A.aQv,B.eU)})()
B.ch(b.typeUniverse,JSON.parse('{"T6":{"qh":[]},"KF":{"a4":["1"],"D":["1"],"b7":["1"],"qh":[],"x":["1"],"a4.E":"1","x.E":"1"},"Iz":{"f9":[],"bK":[],"by":[],"e":[]},"Tu":{"af":[],"e":[]},"a44":{"M":[],"e":[]},"aRJ":{"N":["a44"]},"a7K":{"af":[],"e":[]},"a8c":{"M":[],"e":[]},"a8d":{"N":["a8c"]},"abV":{"M":[],"e":[]},"abW":{"N":["abV"]},"ND":{"af":[],"e":[]},"awK":{"P":[]},"a0J":{"af":[],"e":[]},"a2z":{"M":[],"e":[]},"aQn":{"N":["a2z"]},"a2D":{"M":[],"e":[]},"a2E":{"N":["a2D"],"eU":[]},"aoD":{"af":[],"e":[]},"a07":{"M":[],"e":[]},"aO6":{"N":["a07"]},"aBA":{"af":[],"e":[]},"aqR":{"aA":[]},"aJ2":{"aA":[]},"SV":{"M":[],"e":[]},"aSh":{"N":["SV"]},"Wd":{"M":[],"e":[]},"Xk":{"bC":[],"aP":[],"e":[]},"Xj":{"a2":[],"bv":["a2"],"Y":[],"aS":[]},"ak1":{"N":["Wd"]},"adi":{"aA":[],"adj":["qh"]},"apx":{"DC":[]},"aqt":{"DC":[]},"aKK":{"DC":[]},"qN":{"af":[],"e":[]},"adh":{"M":[],"e":[]},"al6":{"N":["adh"]}}'))
B.xe(b.typeUniverse,JSON.parse('{"Y7":1,"adj":1}'))
var y={b:"packages/quill_html_editor/assets/insert_table.png"}
var x=(function rtii(){var w=B.G
return{B:w("zJ"),W:w("DC"),v:w("fe"),C:w("vz"),k:w("aG"),D:w("cY"),Z:w("nm"),_:w("V<@>"),F:w("V<f?>"),K:w("awP<Ol>"),t:w("Kr"),G:w("u<kg<f>>"),g:w("u<kg<@>>"),x:w("u<tT>"),L:w("u<qd<aS>>"),O:w("u<ce>"),d:w("u<jv>"),M:w("u<uk>"),s:w("u<f>"),c:w("u<ND>"),f:w("u<kv>"),p:w("u<e>"),b:w("u<Pd>"),a:w("u<bd>"),R:w("KF<@>"),l:w("T8"),q:w("aV<a2E>"),m:w("aV<qa>"),h:w("aV<a8d>"),A:w("aV<N<M>>"),U:w("aV<abW>"),j:w("D<@>"),J:w("b8<f,f>"),i:w("z<f,@>"),w:w("ik"),V:w("d_"),P:w("aF"),u:w("ul"),r:w("a2"),n:w("Gl"),N:w("f"),Q:w("jR"),X:w("cf<f>"),Y:w("bM<y>"),o:w("Ol"),aX:w("dj<qG>"),cg:w("Om"),bj:w("z0"),e:w("Xj"),E:w("aQx<cY>"),I:w("am<f>"),y:w("y"),z:w("@"),S:w("m"),T:w("f?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.bUn=new A.b7d(0,"requireUserActionForAllMediaTypes")
D.alQ=new A.apx()
D.alU=new A.aqt()
D.anq=new A.aKK()
D.aIz=B.a(w([D.alQ,D.alU,D.anq]),B.G("u<DC>"))
D.aSs=B.a(w(["allow-downloads","allow-forms","allow-modals","allow-orientation-lock","allow-pointer-lock","allow-popups","allow-popups-to-escape-sandbox","allow-presentation","allow-same-origin"]),x.s)
D.aPb=B.a(w(["accelerometer","clipboard-write","encrypted-media","gyroscope","picture-in-picture"]),x.s)
D.bUw=new A.bcy()
D.ans=new A.c3O()
D.ao3=new B.rf(C.r0,0.4,null,null,null,null,null,null,null,null,null)
D.anW=new B.lq(C.Q,null,null,D.ao3,null)
D.awv=new B.ai(10,10,0,0)
D.axk=new A.q6(0,"topStart")
D.Oc=new A.q6(1,"topCenter")
D.axl=new A.q6(10,"leftCenter")
D.axm=new A.q6(11,"leftEnd")
D.axn=new A.q6(2,"topEnd")
D.axo=new A.q6(3,"rightStart")
D.axp=new A.q6(4,"rightCenter")
D.axq=new A.q6(5,"rightEnd")
D.axr=new A.q6(6,"bottomStart")
D.axs=new A.q6(7,"bottomCenter")
D.axt=new A.q6(8,"bottomEnd")
D.axu=new A.q6(9,"leftStart")
D.Od=new A.i5(0,0,0,0)
D.axv=new A.i5(16,10,0,0)
D.axz=new A.a2K(1,"aboveBodyCloseTag")
D.axA=new A.a2K(2,"belowHeadOpenTag")
D.axB=new A.a2K(3,"aboveHeadCloseTag")
D.bH0=new B.a5(!0,null,null,null,null,null,16,C.dV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bKE=new B.cy("Select Rows x Columns",null,D.bH0,null,null,null,null,null,null,null,null,null,null,null,null)
D.axO=new B.nk(1,C.f5,D.bKE,null)
D.azq=new B.at(58027,"MaterialIcons",null,!1)
D.azr=new B.at(58028,"MaterialIcons",null,!1)
D.azs=new B.at(58029,"MaterialIcons",null,!1)
D.azt=new B.at(58030,"MaterialIcons",null,!1)
D.azC=new B.at(58240,"MaterialIcons",null,!1)
D.aA9=new B.at(59812,"MaterialIcons",null,!1)
D.aAa=new B.at(59816,"MaterialIcons",null,!1)
D.Pq=new B.at(59818,"MaterialIcons",null,!1)
D.aAb=new B.at(59819,"MaterialIcons",null,!1)
D.aAc=new B.at(59823,"MaterialIcons",null,!0)
D.aAd=new B.at(59824,"MaterialIcons",null,!0)
D.aAe=new B.at(59825,"MaterialIcons",null,!1)
D.aAf=new B.at(59827,"MaterialIcons",null,!0)
D.aAg=new B.at(59829,"MaterialIcons",null,!1)
D.aAh=new B.at(59831,"MaterialIcons",null,!1)
D.aAi=new B.at(59834,"MaterialIcons",null,!1)
D.aAj=new B.at(59835,"MaterialIcons",null,!1)
D.aAk=new B.at(59836,"MaterialIcons",null,!1)
D.aAl=new B.at(59837,"MaterialIcons",null,!1)
D.aAm=new B.at(60007,"MaterialIcons",null,!1)
D.aAn=new B.at(60424,"MaterialIcons",null,!0)
D.aAo=new B.at(60802,"MaterialIcons",null,!0)
D.aAO=new B.at(63047,"MaterialIcons",null,!1)
D.aBd=new B.cz(D.aAO,null,C.cC,null,null)
D.aAN=new B.at(63030,"MaterialIcons",null,!1)
D.aBM=new B.cz(D.aAN,null,C.dt,null,null)
D.bUZ=new A.bwe(0,"newline")
D.bIB=new B.a5(!0,null,null,null,null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCv=new B.pf(null,null,null,null,null,null,null,null,null,null," Type URL",null,D.bIB,null,null,null,!0,!0,null,null,null,null,null,null,null,C.O8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,C.dA,null,null,null,null,C.dA,!0,null,!0,null)
D.bV1=new A.bxh(1,"unrestricted")
D.SS=B.a(w(["#000000","#FFFFFF","#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"]),x.s)
D.axd=new A.tT(0,"insertRowAbove")
D.axe=new A.tT(1,"insertRowBelow")
D.axf=new A.tT(2,"insertColumnLeft")
D.axg=new A.tT(3,"insertColumnRight")
D.axh=new A.tT(4,"deleteRow")
D.axi=new A.tT(5,"deleteColumn")
D.axj=new A.tT(6,"deleteTable")
D.Fr=B.a(w([D.axd,D.axe,D.axf,D.axg,D.axh,D.axi,D.axj]),x.x)
D.bL4=new B.cy("Edit Table",null,P.Je,null,null,null,null,null,null,null,null,null,null,null,null)
D.bxL=new B.W(N.kQ,D.bL4,null)
D.axP=new B.nk(1,C.f5,D.bxL,null)
D.aMr=B.a(w([D.axP,U.ao7]),x.p)
D.bBb=new B.kN(C.Z,C.f,C.h,C.i,null,C.l,null,C.k,0,D.aMr,null)
D.If=new B.hS(C.du,0,B.G("hS<dZx>"))
D.bE9=new B.ao(0,null,null,null)
D.bEc=new B.ao(15,null,null,null)
D.bEx=new I.BJ(4,0,0,1)
D.aex=new A.aaJ(0,"html")
D.aey=new A.aaJ(1,"url")
D.aez=new A.aaJ(2,"urlBypass")
D.bJ1=new B.a5(!0,null,null,'"PT Sans", Calibri, Tahoma, sans-serif',null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bK9=new B.a5(!0,C.cT,null,null,null,null,18,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMr=new A.kv("Add a table",25,"addTable")
D.afB=new A.kv("Alignment",14,"align")
D.afC=new A.kv("Header H1",10,"headerOne")
D.bMs=new A.kv("Bold",0,"bold")
D.bMt=new A.kv("Clear History",24,"clearHistory")
D.afD=new A.kv("Hyperlink",18,"link")
D.bMu=new A.kv("Edit table",26,"editTable")
D.bMv=new A.kv("Italic",1,"italic")
D.bMw=new A.kv("Redo",23,"redo")
D.bMx=new A.kv("Strikethrough",3,"strike")
D.bMy=new A.kv("Underline",2,"underline")
D.bMz=new A.kv("Undo",22,"undo")
D.bMA=new A.kv("Insert image",19,"image")
D.bMB=new A.kv("Font Size",17,"size")
D.afE=new A.kv("Header H2",11,"headerTwo")
D.bMC=new A.kv("Background color",13,"background")
D.afF=new A.kv("Clears all formats",21,"clean")
D.bMD=new A.kv("separator",27,"separator")
D.bME=new A.kv("Insert Youtube/Url",20,"video")
D.bMF=new A.kv("Font color",12,"color")
D.bPb=new A.aK4(0,"video")
D.bPc=new A.aK4(1,"hyperlink")})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"e4j","dlv",()=>A.dfI(self))
w($,"e3f","d26",()=>B.dgn("_$dart_dartObject"))
w($,"e4n","d2e",()=>function DartObject(d){this.o=d})
v($,"e5P","dmv",()=>B.cYx(null))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_279",e:"endPart",h:b})})($__dart_deferred_initializers__,"vM8hUnPYhxI2WANjwz8sH8sIg44=");