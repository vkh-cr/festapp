((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_303",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,Q,R,K,S,L,T,M,U,N,V,H,I,W,X,O,Y,Z,A_,A={
duJ(d,e,f,g){var w,v
if(e){w=[f]
C.b.H(w,g)
g=w}v=x.z
return A.cKY(B.dfU(d,B.b0(J.bt(g,A.dCX(),v),!0,v),null))},
dhw(d,e,f){var w=null
if(d<0||d>f)throw B.n(B.fy(d,0,f,w,w))
if(e<d||e>f)throw B.n(B.fy(e,d,f,w,w))},
cL2(d,e,f){var w
try{if(Object.isExtensible(d)&&!Object.prototype.hasOwnProperty.call(d,e)){Object.defineProperty(d,e,{value:f})
return!0}}catch(w){}return!1},
cZQ(d,e){if(Object.prototype.hasOwnProperty.call(d,e))return d[e]
return null},
cKY(d){if(d==null||typeof d=="string"||typeof d=="number"||B.kk(d))return d
if(d instanceof A.px)return d.a
if(A.d0F(d))return d
if(x.Q.b(d))return d
if(x.k.b(d))return B.mS(d)
if(x.Z.b(d))return A.cZP(d,"$dart_jsFunction",new A.cB2())
return A.cZP(d,"_$dart_jsObject",new A.cB3($.cNq()))},
cZP(d,e,f){var w=A.cZQ(d,e)
if(w==null){w=f.$1(d)
A.cL2(d,e,w)}return w},
cKX(d){if(d==null||typeof d=="string"||typeof d=="number"||typeof d=="boolean")return d
else if(d instanceof Object&&A.d0F(d))return d
else if(d instanceof Object&&x.Q.b(d))return d
else if(d instanceof Date)return new B.aI(B.k1(d.getTime(),0,!1),0,!1)
else if(d.constructor===$.cNq())return d.o
else return A.d_M(d)},
d_M(d){if(typeof d=="function")return A.cLe(d,$.O5(),new A.cCB())
if(d instanceof Array)return A.cLe(d,$.cNi(),new A.cCC())
return A.cLe(d,$.cNi(),new A.cCD())},
cLe(d,e,f){var w=A.cZQ(d,e)
if(w==null||!(d instanceof Object)){w=f.$1(d)
A.cL2(d,e,w)}return w},
cB2:function cB2(){},
cB3:function cB3(d){this.a=d},
cCB:function cCB(){},
cCC:function cCC(){},
cCD:function cCD(){},
px:function px(d){this.a=d},
RG:function RG(d){this.a=d},
Jx:function Jx(d,e){this.a=d
this.$ti=e},
WD:function WD(){},
cP2(d,e,f){var w=null
return new A.HB(B.cGk(d,w,w,w,w,36,w,w,C.Ke,w,88,f,w,w,C.Bi),e,w)},
HB:function HB(d,e,f){this.w=d
this.b=e
this.a=f},
S5:function S5(d,e,f,g,h){var _=this
_.c=d
_.y=e
_.dx=f
_.fx=g
_.a=h},
cRJ(d){var w=B.bz("(background-color|color)\\s*:\\s*[^;]+;?\\s*",!1,!1,!1)
return B.dr(d,w,"")},
cRI(d){var w,v,u,t,s,r,q,p,o,n=B.bz("\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b",!0,!1,!1),m=B.bz("\\b((http|https)://|www\\.)[^\\s/$.?#].\\S*",!1,!1,!1),l=B.bz("\\b(\\+?[0-9]{1,4}[-.\\s]+)?(\\(?\\d{2,3}\\)?[-.\\s]+)?\\d{3}[-.\\s]+\\d{3}[-.\\s]+\\d{3,4}\\b",!0,!1,!1),k=A1.Yd(d),j=new A.bnB(),i=k.grp(0)
i.toString
i=F.Yf(i,"*")
w=i.length
v=x.aX
u=v.i("y.E")
t=x.d
s=0
for(;s<i.length;i.length===w||(0,B.M)(i),++s){r=i[s]
if(r.x==="a")continue
q=r.c
if(q===$){p=B.a([],t)
r.c!==$&&B.aa()
q=r.c=new F.hf(r,p)}p=B.E(new B.d8(q,v),u)
C.b.aT(p,new A.bnC(n,j))}i=k.grp(0)
i.toString
i=F.Yf(i,"*")
w=i.length
s=0
for(;s<i.length;i.length===w||(0,B.M)(i),++s){r=i[s]
if(r.x==="a")continue
q=r.c
if(q===$){p=B.a([],t)
r.c!==$&&B.aa()
q=r.c=new F.hf(r,p)}p=B.E(new B.d8(q,v),u)
C.b.aT(p,new A.bnD(m,j))}i=k.grp(0)
i.toString
i=F.Yf(i,"*")
w=i.length
s=0
for(;s<i.length;i.length===w||(0,B.M)(i),++s){r=i[s]
if(r.x==="a")continue
q=r.c
if(q===$){p=B.a([],t)
r.c!==$&&B.aa()
q=r.c=new F.hf(r,p)}p=B.E(new B.d8(q,v),u)
C.b.aT(p,new A.bnE(l,j))}o=new B.dg("")
k.grp(0).Um(o)
i=o.a
return i.charCodeAt(0)==0?i:i},
bnB:function bnB(){},
bnC:function bnC(d,e){this.a=d
this.b=e},
bnA:function bnA(d,e){this.a=d
this.b=e},
bnD:function bnD(d,e){this.a=d
this.b=e},
bnz:function bnz(d,e){this.a=d
this.b=e},
bnE:function bnE(d,e){this.a=d
this.b=e},
bny:function bny(d,e){this.a=d
this.b=e},
cRH(d,e){return new A.a2t(e,d,null)},
a2t:function a2t(d,e,f){this.c=d
this.d=e
this.a=f},
aP_:function aP_(d,e){var _=this
_.d=$
_.e=!0
_.f=d
_.r=e
_.c=_.a=null},
cch:function cch(d){this.a=d},
cci:function cci(){},
ccj:function ccj(d){this.a=d},
ccg:function ccg(d){this.a=d},
ccf:function ccf(d){this.a=d},
ccb:function ccb(d){this.a=d},
cc9:function cc9(){},
cca:function cca(){},
cce:function cce(){},
ccd:function ccd(){},
ccc:function ccc(){},
a65:function a65(d,e,f){this.c=d
this.e=e
this.a=f},
cVd(d){var w=new A.Fm(null,null),v=J.a1(d)
w.a=v.h(d,"index")
w.b=v.h(d,"length")
return w},
cZR(d){return B.fe(B.Jt(d,new A.cBB(),x.S),0,null)},
a6A:function a6A(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
a6B:function a6B(){var _=this
_.d=$
_.e=""
_.f=!0
_.r=$
_.w=!1
_.x=""
_.Q=_.z=_.y=$
_.as=!1
_.c=_.a=null},
bCE:function bCE(d){this.a=d},
bCD:function bCD(d){this.a=d},
bCB:function bCB(d){this.a=d},
bCA:function bCA(d){this.a=d},
bCC:function bCC(d){this.a=d},
bCq:function bCq(d){this.a=d},
bCp:function bCp(){},
bCt:function bCt(d){this.a=d},
bCs:function bCs(d){this.a=d},
bCu:function bCu(d){this.a=d},
bCv:function bCv(d){this.a=d},
bCw:function bCw(d,e){this.a=d
this.b=e},
bCx:function bCx(d){this.a=d},
bCy:function bCy(d){this.a=d},
bCz:function bCz(d){this.a=d},
bCr:function bCr(){},
aBs:function aBs(){var _=this
_.d=_.c=_.b=_.a=null
_.e=!0},
bCo:function bCo(d){this.a=d},
bCn:function bCn(d){this.a=d},
Fm:function Fm(d,e){this.a=d
this.b=e},
cBB:function cBB(){},
dp_(d,e,f,g,h,i,j){return new A.Mh(j,g,h,i,f,e,d,null)},
aa5:function aa5(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aa6:function aa6(d,e,f){var _=this
_.d=d
_.e=e
_.w=_.r=_.f=$
_.x=f
_.c=_.a=null},
bRn:function bRn(){},
bR7:function bR7(d){this.a=d},
bR8:function bR8(d){this.a=d},
bR9:function bR9(d){this.a=d},
bRa:function bRa(d,e){this.a=d
this.b=e},
bR5:function bR5(d){this.a=d},
bR6:function bR6(){},
bR4:function bR4(d){this.a=d},
bR3:function bR3(d){this.a=d},
bR2:function bR2(){},
bR1:function bR1(d){this.a=d},
bR0:function bR0(){},
bRg:function bRg(d){this.a=d},
bRf:function bRf(d,e){this.a=d
this.b=e},
bRe:function bRe(){},
bRd:function bRd(d){this.a=d},
bRc:function bRc(d,e){this.a=d
this.b=e},
bRb:function bRb(){},
bRi:function bRi(d,e){this.a=d
this.b=e},
bRh:function bRh(d){this.a=d},
bRm:function bRm(d){this.a=d},
bRl:function bRl(d){this.a=d},
bRj:function bRj(d){this.a=d},
bRk:function bRk(d,e){this.a=d
this.b=e},
Mh:function Mh(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
jQ:function jQ(d,e,f){this.c=d
this.a=e
this.b=f},
dgs(d){var w=B.bz("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$",!0,!1,!1)
if(!w.b.test(d.toLowerCase()))return C.C.R()
d=B.dr(d.toUpperCase(),"#","")
return B.dq(d.length===6?"FF"+d:d,16)},
bmM(d){var w=A.dgs(d)
return new A.auc((C.c.V(w,24)&255)/255,(C.c.V(w,16)&255)/255,(C.c.V(w,8)&255)/255,(w&255)/255,C.h)},
aa1(d){var w,v=""
try{v="rgba("+C.b.bQ(B.a([d.gRN(),d.gL2(),d.gOI(),B.p0(C.e.bj(d.geW(d),1))],x.a),",")+")"}catch(w){v="rgba(0,0,0,0)"}return v},
auc:function auc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a_8:function a_8(d,e){this.c=d
this.a=e},
b6C:function b6C(d){this.a=d},
b6B:function b6B(d,e){this.a=d
this.b=e},
a0Z:function a0Z(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aNE:function aNE(){this.d=$
this.c=this.a=null},
c6h:function c6h(d,e){this.a=d
this.b=e},
c6f:function c6f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c6g:function c6g(d,e){this.a=d
this.b=e},
c6d:function c6d(d,e){this.a=d
this.b=e},
c6b:function c6b(d,e){this.a=d
this.b=e},
c6c:function c6c(d,e){this.a=d
this.b=e},
c6e:function c6e(d,e){this.a=d
this.b=e},
t5:function t5(d,e){this.a=d
this.b=e},
as1(d,e,f,g,h,i){return new A.a12(d,e,f,g,i,h)},
a12:function a12(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.Q=h
_.a=i},
a13:function a13(d,e,f){var _=this
_.e=d
_.r=_.f=null
_.w=$
_.x=e
_.y=f
_.c=_.a=null},
bfV:function bfV(d){this.a=d},
bfP:function bfP(d,e){this.a=d
this.b=e},
bfR:function bfR(d){this.a=d},
bfQ:function bfQ(d,e){this.a=d
this.b=e},
bfU:function bfU(d,e){this.a=d
this.b=e},
bfS:function bfS(d){this.a=d},
bfT:function bfT(){},
aNM:function aNM(){},
amk:function amk(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cP1(d,e,f,g,h,i){return new A.Zx(e,g,h,d,f)},
Zx:function Zx(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.a=h},
aLn:function aLn(){this.c=this.a=null},
hA:function hA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
pj:function pj(d,e){this.a=d
this.b=e},
az_:function az_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aoy:function aoy(d,e){this.b=d
this.a=e},
aGn:function aGn(d,e){this.b=d
this.a=e},
aAR:function aAR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
nW:function nW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bq8:function bq8(d,e){this.a=d
this.b=e},
bpg:function bpg(d){this.a=d},
Rv:function Rv(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aPy:function aPy(d){var _=this
_.d=d
_.e=""
_.f=$
_.c=_.a=null},
cdM:function cdM(d,e){this.a=d
this.b=e},
cdI:function cdI(d){this.a=d},
cdH:function cdH(d,e){this.a=d
this.b=e},
cdJ:function cdJ(){},
cdK:function cdK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cdF:function cdF(d,e,f){this.a=d
this.b=e
this.c=f},
cdG:function cdG(){},
cdL:function cdL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aHm:function aHm(d,e){this.a=d
this.b=e},
UL:function UL(d,e,f){this.c=d
this.d=e
this.a=f},
ahT:function ahT(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=f
_.c=_.a=null},
cu7:function cu7(d,e){this.a=d
this.b=e},
cu6:function cu6(){},
cu8:function cu8(d){this.a=d},
cu5:function cu5(d){this.a=d},
VS:function VS(d,e,f){this.e=d
this.c=e
this.a=f},
VR:function VR(d,e,f,g){var _=this
_.F=d
_.E$=e
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
abs:function abs(d,e,f){var _=this
_.a=$
_.b=d
_.c=e
_.Y$=0
_.a8$=f
_.am$=_.bd$=0},
b8k:function b8k(){},
uM:function uM(d,e){this.a=d
this.b=e},
cHH(d,e,f,g){var w,v,u,t=C.d.bu(d).toLowerCase()
if(!(C.d.be(t,B.bz("<!DOCTYPE html>",!1,!1,!1))&&C.d.p(t,B.bz("<html",!1,!1,!1))&&C.d.p(t,B.bz("</html>",!1,!1,!1))))t='    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>IFrame '+g+"</title>\n    </head>\n    <body>\n    "+d+"\n    </body>\n    </html>\n    "
else t=d
w=x.N
t=A.cRL(t,B.dw(["parent.connect_js_to_flutter"+g+" && parent.connect_js_to_flutter"+g+"(window)"],w),D.awb)
if(f.gda(f)){v=B.aT(w)
for(w=f.gab(f);w.q();){u=w.gL(0)
u.gbMa()
v.t(0,u.gbMa())}t=A.cRL(t,v,D.aw9)}return t},
cRL(d,e,f){return A.cRK(f,d,"\n<script>\n"+e.hs(0,new A.bnP())+"\n</script>\n")},
cRM(d,e,f){var w=B.bz("<"+d+"([^>]*)>",!1,!1,!1)
B.Tf(0,0,e.length,"startIndex")
return B.dEE(e,w,new A.bnQ(d,f),0)},
cRK(d,e,f){var w
switch(d.a){case 2:return A.cRM("head",e,f)
case 0:return A.cRM("body",e,f)
case 3:w=C.d.dt(e,"</head>")
return C.d.ag(e,0,w)+f+"\n"+C.d.d7(e,w)
case 1:w=C.d.dt(e,"</body>")
return C.d.ag(e,0,w)+f+"\n"+C.d.d7(e,w)}},
a19:function a19(d,e){this.a=d
this.b=e},
bnP:function bnP(){},
bnQ:function bnQ(d,e){this.a=d
this.b=e},
a8Y:function a8Y(d,e){this.a=d
this.b=e},
auh:function auh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
bWd:function bWd(){},
CD:function CD(){},
anf:function anf(){},
aoc:function aoc(){},
aI_:function aI_(){},
q5:function q5(d,e){this.c=d
this.a=e},
MX:function MX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqF:function bqF(d,e){this.a=d
this.b=e},
b30:function b30(d,e){this.a=d
this.b=e},
abr:function abr(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aiV:function aiV(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cA4:function cA4(d){this.a=d},
cA1:function cA1(d){this.a=d},
czX:function czX(d,e){this.a=d
this.b=e},
czW:function czW(d){this.a=d},
cA0:function cA0(d){this.a=d},
czY:function czY(){},
czZ:function czZ(d){this.a=d},
cA_:function cA_(){},
cA2:function cA2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cA3:function cA3(d,e){this.a=d
this.b=e},
d0F(d){return x.B.b(d)||x.D.b(d)||x.l.b(d)||x.t.b(d)||x.V.b(d)||x.cg.b(d)||x.bj.b(d)},
cQz(d,e,f,g,h,i,j,k,l,m,n){var w=null
return new B.D2(i,m,w,w,j,w,k,8,l,g,w,w,24,!0,!1,48,f,w,!1,e,w,w,w,d,w,w,!1,w,n.i("D2<0>"))},
ZB(d,e){var w=null,v=B.bF(8)
return new B.a2(C.au,new A.S5(d,C.ay,B.P(e,w,w,w,w,w,w,w,B.al(w,w,C.fJ,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w,w,w),new B.d5(v,C.y),w),w)},
cVQ(d){var w=C.a2l.h(0,(d==null?C.a9:d).a)
w.toString
return B.dr(w,"w","")},
dn9(d){var w=B.dn(d,0,null)
if(C.d.p(w.goR(w).toLowerCase(),"youtube"))return A.dn8(d)
else if(C.d.p(w.goR(w).toLowerCase(),"vimeo"))return A.dn7(d)
else return d},
dn8(d){var w,v,u,t
if(!C.d.p(d,"http")&&d.length===11)return d
C.d.bu(d)
for(w=[B.bz("^https:\\/\\/(?:www\\.|m\\.)?youtube\\.com\\/watch\\?v=([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bz("^https:\\/\\/(?:music\\.)?youtube\\.com\\/watch\\?v=([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bz("^https:\\/\\/(?:www\\.|m\\.)?youtube\\.com\\/shorts\\/([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bz("^https:\\/\\/(?:www\\.|m\\.)?youtube(?:-nocookie)?\\.com\\/embed\\/([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bz("^https:\\/\\/youtu\\.be\\/([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1)],v=null,u=0;u<5;++u){t=w[u].rU(d)
if(t!=null&&t.b.length-1>=1)v=t.b[1]}if(v==null)return null
return"https://www.youtube.com/embed/"+v},
dn7(d){var w=B.bz("(?:http|https)?:?\\/?\\/?(?:www\\.)?(?:player\\.)?vimeo\\.com\\/(?:channels\\/(?:\\w+\\/)?|groups\\/(?:[^\\/]*)\\/videos\\/|video\\/|)(\\d+)(?:|\\/\\?)",!1,!1,!1).rU(d),v=w==null?null:w.b[1]
if(v==null)return null
return"https://player.vimeo.com/video/"+v}},D,A0,P,G,A1,F,E,A2,A3
J=c[1]
B=c[0]
C=c[2]
Q=c[327]
R=c[286]
K=c[199]
S=c[221]
L=c[167]
T=c[251]
M=c[237]
U=c[189]
N=c[282]
V=c[202]
H=c[319]
I=c[117]
W=c[328]
X=c[139]
O=c[172]
Y=c[200]
Z=c[320]
A_=c[180]
A=a.updateHolder(c[45],A)
D=c[325]
A0=c[329]
P=c[171]
G=c[142]
A1=c[127]
F=c[162]
E=c[326]
A2=c[165]
A3=c[148]
A.px.prototype={
h(d,e){if(typeof e!="string"&&typeof e!="number")throw B.n(B.cd("property is not a String or num",null))
return A.cKX(this.a[e])},
m(d,e,f){if(typeof e!="string"&&typeof e!="number")throw B.n(B.cd("property is not a String or num",null))
this.a[e]=A.cKY(f)},
k(d,e){if(e==null)return!1
return e instanceof A.px&&this.a===e.a},
j(d){var w,v
try{w=String(this.a)
return w}catch(v){w=this.qZ(0)
return w}},
xc(d,e){var w=this.a,v=e==null?null:B.b0(new B.N(e,A.dCY(),B.W(e).i("N<1,@>")),!0,x.z)
return A.cKX(w[d].apply(w,v))},
bBR(d){return this.xc(d,null)},
gv(d){return 0}}
A.RG.prototype={}
A.Jx.prototype={
anJ(d){var w=d<0||d>=this.gu(0)
if(w)throw B.n(B.fy(d,0,this.gu(0),null,null))},
h(d,e){if(B.h7(e))this.anJ(e)
return this.aTo(0,e)},
m(d,e,f){if(B.h7(e))this.anJ(e)
this.alP(0,e,f)},
gu(d){var w=this.a.length
if(typeof w==="number"&&w>>>0===w)return w
throw B.n(B.ae("Bad JsArray length"))},
su(d,e){this.alP(0,"length",e)},
t(d,e){this.xc("push",[e])},
H(d,e){this.xc("push",e instanceof Array?e:B.b0(e,!0,x.z))},
kE(d){if(this.gu(0)===0)throw B.n(B.iZ(-1))
return this.bBR("pop")},
eg(d,e,f,g,h){var w,v
A.dhw(e,f,this.gu(0))
w=f-e
if(w===0)return
if(h<0)throw B.n(B.cd(h,null))
v=[e,w]
C.b.H(v,J.Hk(g,h).n0(0,w))
this.xc("splice",v)},
i5(d,e,f,g){return this.eg(0,e,f,g,0)},
e2(d,e){this.xc("sort",e==null?[]:[e])},
$ib_:1,
$iy:1,
$iB:1}
A.WD.prototype={
m(d,e,f){return this.aTp(0,e,f)}}
A.HB.prototype={
uI(d,e,f){return new A.HB(this.w,f,null)},
eb(d){return!this.w.k(0,d.w)}}
A.S5.prototype={
gki(d){return this.c!=null},
B(d){var w,v,u,t,s=this,r=null,q=B.C(d),p=B.cGl(d),o=p.ait(s),n=q.ok.as
n.toString
n=n.cl(p.a3A(s))
w=p.y
if(w==null)w=p.a3A(s).P(0.12)
v=p.z
if(v==null)v=p.a3A(s).P(0.04)
u=p.aNF(s)
t=new B.ab(p.a,1/0,p.b,1/0).aD8(r,r)
return X.cUC(C.M,!1,s.dx,C.k,t,0,2,!0,o,w,4,r,q.cx,8,v,4,q.f,r,r,r,s.c,u,s.fx,q.id,n,q.Q)}}
A.a2t.prototype={
M(){return new A.aP_(B.a([D.bKF,D.bKI,D.bKL,D.bKK,D.aei,D.aem,D.aek],x.f),C.fJ)}}
A.aP_.prototype={
T(){var w,v=this
v.ah()
w=v.a
v.d=w.c
w.d.Rc(new A.cch(v))
v.a.d.bOB(new A.cci())
B.db(C.kt,new A.ccj(v))},
l(){this.a.d.l()
this.ai()},
B(d){var w=this,v=null,u=w.a.d,t=x.p,s=B.a([],t),r=u.b,q=w.a.d
return B.at(B.a([new B.ao(50,v,new A.aa5(w.f,u,s,25,C.ay,w.r,Y.BF,C.au,C.I,C.j,r),v),new B.f6(1,C.fP,new A.a6A(200,v,!0,q,new A.cca(),C.az,new A.ccb(w),new A.ccc(),new A.ccd(),new A.cce(),D.bHa,D.ave,D.bIj,C.H,C.avw,!1,new A.ccf(w),q.a),v)],t),C.K,C.f,C.i,0,v)},
ts(d){return this.aPX(d)},
aPX(d){var w=0,v=B.l(x.H),u=this
var $async$ts=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:w=2
return B.d(u.a.d.Lh(d),$async$ts)
case 2:return B.j(null,v)}})
return B.k($async$ts,v)}}
A.a65.prototype={
B(d){return $.d3I().aBL(this.c,!1,this.a)}}
A.a6A.prototype={
M(){return new A.a6B()}}
A.a6B.prototype={
T(){var w,v=this
v.y=$.Oe().aHo("packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js")
w=v.a.ax.d
if(w==null)w="Roboto"
v.z=w
v.Q=B.rB(4,w,C.ax,!1)
w=v.a
w.toString
v.f=!0
v.r=w.d
v.ah()},
l(){var w,v=this.d
v===$&&B.b()
w=v.b
w.a8$=$.a9()
w.Y$=0
v.fG()
this.ai()},
B(d){var w=this.y
w===$&&B.b()
return A2.cHx(new A.bCE(this),w,x.z)},
b0N(d,e){var w,v,u,t,s,r,q=this
q.e=q.ar0(e)
w=C.c.j(B.dS(q.a.r.b))
v=q.e
u=q.r
u===$&&B.b()
t=B.dw([new A.uM("EditorResizeCallback",new A.bCt(q)),new A.uM("UpdateFormat",new A.bCu(q)),new A.uM("OnTextChanged",new A.bCv(q)),new A.uM("FocusChanged",new A.bCw(q,d)),new A.uM("OnEditingCompleted",new A.bCx(q)),new A.uM("OnSelectionChanged",new A.bCy(q)),new A.uM("EditorLoaded",new A.bCz(q))],x.C)
s=q.as
r=q.a.db.$1(d)
return new B.cj(C.ad,null,C.ab,C.v,B.a([new A.abr(v,D.adb,e,u,new A.bCA(q),t,!1,new A.bCB(q),new A.bCC(q),D.am8,new B.cm(w,x.X)),B.jm(r,!s)],x.p),null)},
Vy(){var w=0,v=B.l(x.N),u,t=this,s
var $async$Vy=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qn("getHtmlText",[]),$async$Vy)
case 3:u=e
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Vy,v)},
VH(){var w=0,v=B.l(x.z),u,t=this,s
var $async$VH=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qn("getSelectionRange",[]),$async$VH)
case 3:u=e
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$VH,v)},
Xt(d,e){return this.bth(d,e)},
bth(d,e){var w=0,v=B.l(x.z),u,t=this,s
var $async$Xt=B.h(function(f,g){if(f===1)return B.i(g,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qn("setSelection",[d,e]),$async$Xt)
case 3:u=g
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Xt,v)},
Xr(d){return this.bt9(d)},
bt9(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$Xr=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qn("setHtmlText",[d]),$async$Xr)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Xr,v)},
Va(d){return this.b6G(d)},
b6G(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$Va=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qn("embedVideo",[d]),$async$Va)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Va,v)},
V9(d){return this.b6F(d)},
b6F(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$V9=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qn("embedImage",[d]),$async$V9)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$V9,v)},
Vb(d){return this.b6N(!0)},
b6N(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$Vb=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qn("enableEditor",[!0]),$async$Vb)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Vb,v)},
Xq(d,e){return this.bt8(d,e)},
bt8(d,e){var w=0,v=B.l(x.z),u,t=2,s=[],r=this,q,p,o,n
var $async$Xq=B.h(function(f,g){if(f===1){s.push(g)
w=t}while(true)switch(w){case 0:t=4
p=r.d
p===$&&B.b()
w=7
return B.d(p.qn("setFormat",[d,e]),$async$Xq)
case 7:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=B.ai(n)
J.aq(q)
w=6
break
case 3:w=2
break
case 6:case 1:return B.j(u,v)
case 2:return B.i(s.at(-1),v)}})
return B.k($async$Xq,v)},
Wc(d,e){return this.bhV(d,e)},
bhV(d,e){var w=0,v=B.l(x.z),u,t=this,s
var $async$Wc=B.h(function(f,g){if(f===1)return B.i(g,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qn("insertTable",[e,d]),$async$Wc)
case 3:u=g
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Wc,v)},
Wy(d){return this.bk0(d)},
bk0(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$Wy=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qn("modifyTable",[d.b]),$async$Wy)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Wy,v)},
Yd(){var w=0,v=B.l(x.z),u,t=this,s
var $async$Yd=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qn("undo",[]),$async$Yd)
case 3:u=e
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Yd,v)},
X4(){var w=0,v=B.l(x.z),u,t=this,s
var $async$X4=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qn("redo",[]),$async$X4)
case 3:u=e
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$X4,v)},
UH(){var w=0,v=B.l(x.z),u,t=this,s
var $async$UH=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qn("clearHistory",[]),$async$UH)
case 3:u=e
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$UH,v)},
ar0(c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2="0",b3="px !important;\n          padding-right:",b4="px !important;\n          padding-top:",b5="px !important;\n          padding-bottom:",b6=";\n          font-size: ",b7="px;\n          color:",b8=";\n          background-color:",b9=";\n          font-weight: ",c0=b1.Q
c0===$&&B.b()
w=b1.x
v=b1.z
v===$&&B.b()
u=A.aa1(b1.a.y)
t=A.aa1(b1.a.y)
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
l=A.aa1(l==null?C.p:l)
k=A.aa1(b1.a.y)
j=b1.a.ch
i=j.x
if(i==null)i=E.Dl
j=A.cVQ(j.w)
h=b1.z
g=b1.a.ax
f=g.x
if(f==null)f=E.Dl
g=g.r
g=B.o(g==null?"14":g)
e=b1.a.ax.b
e=A.aa1(e==null?C.p:e)
d=A.aa1(b1.a.y)
a0=b1.a.ax
a0=A.cVQ(a0.w)
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
A.aBs.prototype={
am0(){var w,v=this,u=null
v.a=new B.aS(A.cZR(15),x.h)
v.b=new B.aS(A.cZR(15),x.U)
w=x.N
v.c=B.hh(u,u,u,u,!1,w)
v.d=B.hh(u,u,u,u,!1,w)},
KY(){var w=0,v=B.l(x.N),u,t=2,s=[],r=this,q,p,o,n
var $async$KY=B.h(function(d,e){if(d===1){s.push(e)
w=t}while(true)switch(w){case 0:t=4
p=r.a.ga0()
p=p==null?null:p.Vy()
w=7
return B.d(x.F.b(p)?p:B.ca(p,x.T),$async$KY)
case 7:q=e
if(J.p(q,"<p><br></p>")){p=q
p.toString
p=B.dr(p,"<p><br></p>","")
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
return B.k($async$KY,v)},
Lh(d){return this.aQQ(d)},
aQQ(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$Lh=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.a.ga0()
s=s==null?null:s.Xr(d)
w=3
return B.d(x._.b(s)?s:B.ca(s,x.z),$async$Lh)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Lh,v)},
Qp(d,e){return this.bL6(d,e)},
bL6(d,e){var w=0,v=B.l(x.z),u,t=this,s
var $async$Qp=B.h(function(f,g){if(f===1)return B.i(g,v)
while(true)switch(w){case 0:s=t.a.ga0()
s=s==null?null:s.Wc(e,d)
w=3
return B.d(x._.b(s)?s:B.ca(s,x.z),$async$Qp)
case 3:u=g
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Qp,v)},
a0G(d){return this.bNL(d)},
bNL(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$a0G=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.a.ga0()
s=s==null?null:s.Wy(d)
w=3
return B.d(x._.b(s)?s:B.ca(s,x.z),$async$a0G)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a0G,v)},
a_7(d){return this.bGV(d)},
bGV(d){var w=0,v=B.l(x.z),u,t=this,s,r
var $async$a_7=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:r=A.dn9(d)
if(r==null){w=1
break}s=t.a.ga0()
s=s==null?null:s.Va(r)
w=3
return B.d(x._.b(s)?s:B.ca(s,x.z),$async$a_7)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a_7,v)},
a_6(d){return this.bGU(d)},
bGU(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$a_6=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.a.ga0()
s=s==null?null:s.V9(d)
w=3
return B.d(x._.b(s)?s:B.ca(s,x.z),$async$a_6)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a_6,v)},
a_8(d){return this.bGY(!0)},
bGY(d){var w=0,v=B.l(x.H),u=this,t
var $async$a_8=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:u.e=!0
t=u.a.ga0()
t=t==null?null:t.Vb(!0)
w=2
return B.d(x._.b(t)?t:B.ca(t,x.z),$async$a_8)
case 2:return B.j(null,v)}})
return B.k($async$a_8,v)},
SR(){var w=0,v=B.l(x.n),u,t=this,s,r
var $async$SR=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:r=t.a.ga0()
r=r==null?null:r.VH()
w=3
return B.d(x._.b(r)?r:B.ca(r,x.z),$async$SR)
case 3:s=e
u=s!=null?A.cVd(C.aB.u3(0,s,null)):new A.Fm(0,0)
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$SR,v)},
TD(d,e,f){return this.aQz(0,e,f)},
aQz(d,e,f){var w=0,v=B.l(x.z),u,t=this,s
var $async$TD=B.h(function(g,h){if(g===1)return B.i(h,v)
while(true)switch(w){case 0:s=t.a.ga0()
s=s==null?null:s.Xt(e,f)
w=3
return B.d(x._.b(s)?s:B.ca(s,x.z),$async$TD)
case 3:u=h
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$TD,v)},
wj(d,e){return this.aPR(d,e)},
aPR(d,e){var w=0,v=B.l(x.H),u=this,t
var $async$wj=B.h(function(f,g){if(f===1)return B.i(g,v)
while(true)switch(w){case 0:t=u.a.ga0()
if(t!=null)t.Xq(d,e)
return B.j(null,v)}})
return B.k($async$wj,v)},
Rc(d){var w,v,u
try{w=this.c
v=(w.b&1)===0
if(v)new B.cK(w,B.t(w).i("cK<1>")).el(new A.bCo(d))}catch(u){}return},
bOB(d){var w,v,u
try{w=this.d
v=(w.b&1)===0
if(v)new B.cK(w,B.t(w).i("cK<1>")).el(new A.bCn(d))}catch(u){}return},
l(){this.c.aC(0)
this.d.aC(0)},
w4(){var w=0,v=B.l(x.H),u=this,t
var $async$w4=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:t=u.a.ga0()
t=t==null?null:t.Yd()
w=2
return B.d(x._.b(t)?t:B.ca(t,x.z),$async$w4)
case 2:return B.j(null,v)}})
return B.k($async$w4,v)},
vT(){var w=0,v=B.l(x.H),u=this,t
var $async$vT=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:t=u.a.ga0()
t=t==null?null:t.X4()
w=2
return B.d(x._.b(t)?t:B.ca(t,x.z),$async$vT)
case 2:return B.j(null,v)}})
return B.k($async$vT,v)},
Zf(){var w=0,v=B.l(x.H),u=this,t
var $async$Zf=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:t=u.a.ga0()
t=t==null?null:t.UH()
w=2
return B.d(x._.b(t)?t:B.ca(t,x.z),$async$Zf)
case 2:return B.j(null,v)}})
return B.k($async$Zf,v)}}
A.Fm.prototype={
gu(d){return this.b}}
A.aa5.prototype={
M(){return new A.aa6(B.a([],x.c),B.I(x.N,x.z),C.el)}}
A.aa6.prototype={
T(){var w,v,u,t,s,r,q=this,p=x.q
q.f=new B.aS("fontBgColorKey"+C.c.j(B.dS(q.a.d)),p)
q.r=new B.aS("fontColorKey"+C.c.j(B.dS(q.a.d)),p)
q.w=new B.aS("_tablePickerKey"+C.c.j(B.dS(q.a.d)),p)
p=q.a
q.x=p.y
for(p=p.c,w=0;w<7;++w){v=p[w]
u=q.d
t=q.a
s=t.x
r=t.r
t=t.f
u.push(new A.Mh(v,!1,null,q.x,t,r,s,null))}q.ah()},
B(d){var w=null,v=this.a,u=v.w
v=v.z
u=B.nA(B.ar(w,B.dD(B.dfb(this.b8j(d),C.k,C.K,v,w,C.f,C.i,0,w,w,C.m),w,C.r,w,w,w,v),C.k,w,w,new B.b4(u,w,w,w,w,w,w,C.L),w,w,w,w,w,w,w,17976931348623157e292),!1,w)
return u},
bUI(d){var w,v,u,t,s,r,q=this,p="direction",o="color",n="align",m="background"
q.e=d
for(w=J.a1(d),v=0;u=q.d,v<u.length;++v){t=u[v]
switch(t.c.a){case 0:u[v]=t.iY(J.p(w.h(d,"bold"),!0))
break
case 1:u[v]=t.iY(J.p(w.h(d,"italic"),!0))
break
case 2:u[v]=t.iY(J.p(w.h(d,"underline"),!0))
break
case 3:u[v]=t.iY(J.p(w.h(d,"strike"),!0))
break
case 4:u[v]=t.iY(J.p(w.h(d,"blockquote"),!0))
break
case 5:u[v]=t.iY(J.p(w.h(d,"code-block"),!0))
break
case 6:u[v]=t.iY(w.h(d,"indent")!=null)
break
case 7:u[v]=t.iY(w.h(d,"indent")!=null)
break
case 8:u[v]=t.iY(J.p(w.h(d,p),"rtl"))
break
case 9:u[v]=t.iY(!J.p(w.h(d,p),"rtl"))
break
case 17:u[v]=t.iY(w.h(d,"size")!=null)
break
case 10:u[v]=t.iY(J.p(w.h(d,"header"),1))
break
case 11:u[v]=t.iY(J.p(w.h(d,"header"),2))
break
case 12:u[v]=t.iY(w.h(d,o)!=null)
try{if(w.h(d,o)!=null){u=B.mt(J.az(w.h(d,o)).a,null)
t=q.e
s=J.d_(t)
if(u==="List<dynamic>")s.m(t,o,J.v(w.h(d,o),0))
else s.m(t,o,w.h(d,o))}}catch(r){}break
case 14:if(w.h(d,n)==null)w.m(d,n,"")
u=q.d
u[v]=u[v].iY(w.h(d,n)!=null)
break
case 15:u[v]=t.iY(J.p(w.h(d,"list"),"ordered"))
break
case 16:u[v]=t.iY(J.p(w.h(d,"list"),"bullet"))
break
case 19:u[v]=t.iY(w.h(d,"image")!=null)
break
case 20:u[v]=t.iY(w.h(d,"video")!=null)
break
case 21:u[v]=t.iY(w.h(d,"clean")!=null)
break
case 13:u[v]=t.iY(w.h(d,m)!=null)
try{if(w.h(d,m)!=null){u=B.mt(J.az(w.h(d,m)).a,null)
t=q.e
s=J.d_(t)
if(u==="List<dynamic>")s.m(t,m,J.v(w.h(d,m),0))
else s.m(t,m,w.h(d,m))}}catch(r){}break
case 18:J.bY(q.e,"link",w.h(d,"link"))
break
case 22:case 23:case 26:case 25:case 24:case 27:break}}q.A(new A.bRn())},
b8j(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.a([],x.p)
for(w=0;v=p.d,w<v.length;++w){u={}
t=u.a=v[w]
v=t.c
if(v===D.bKO)n.push(B.hJ(new B.a2(p.x,p.b80(),o),o,o,o,v.c,o,o,o,o,o,o,E.ff))
else if(v===D.aei){u=p.x
s=p.a.f
n.push(B.hJ(new B.a2(u,new B.ao(s,s,p.b_H(),o),o),o,o,o,v.c,o,o,o,o,o,o,E.ff))}else if(v===D.bKS){u=p.x
s=p.a.f
n.push(B.hJ(new B.a2(u,new B.ao(s,s,p.b8Y(w),o),o),o,o,o,v.c,o,o,o,o,o,o,E.ff))}else if(v===D.bKR){u=p.x
s=p.a
r=s.f-2
s=G.a2K("packages/quill_html_editor/assets/camera_roll_icon.png",s.r,o,o,o)
J.v(p.e,"video")
n.push(B.hJ(new B.a2(u,new A.Rv(new A.bR7(p),D.bNo,p.a.d,new B.ao(r,r,s,o),o),o),o,o,o,v.c,o,o,o,o,o,o,E.ff))}else if(v===D.aek){u=p.x
s=p.a
s=B.aW(D.ay9,s.r,o,s.f)
J.v(p.e,"link")
n.push(B.hJ(new B.a2(u,new A.Rv(new A.bR8(p),D.bNp,p.a.d,s,o),o),o,o,o,v.c,o,o,o,o,o,o,E.ff))}else if(v===D.bKP){u=p.x
s=p.a.f
n.push(B.hJ(new B.a2(u,new B.ao(s,s,p.b8X(w),o),o),o,o,o,v.c,o,o,o,o,o,o,E.ff))}else if(v===D.bKE){u=p.x
s=p.a.f
n.push(B.hJ(new B.a2(u,new B.ao(s,s,p.b9z(w,d),o),o),o,o,o,v.c,o,o,o,o,o,o,E.ff))}else if(v===D.bKH){u=p.x
s=p.a
r=s.r
q=s.f
n.push(B.hJ(new A.a0Z(s.w,r,q,u,new A.bR9(p),o),o,o,o,v.c,o,o,o,o,o,o,E.ff))}else if(v===D.bKQ){u=p.a
s=u.z
v=v.c
r=p.x
q=u.f
u=u.r
if(s===C.a7)n.push(B.hJ(new B.a2(r,B.ar(o,o,C.k,u,o,o,o,q,o,o,o,o,o,0.8),o),o,o,o,v,o,o,o,o,o,o,E.ff))
else n.push(B.hJ(new B.a2(r,B.ar(o,o,C.k,u,o,o,o,0.8,o,o,o,o,o,q),o),o,o,o,v,o,o,o,o,o,o,E.ff))}else{s=p.a
r=s.x
q=s.r
s=s.f
n.push(B.hJ(new A.Mh(v,t.d,new A.bRa(u,p),p.x,s,q,r,o),o,o,o,v.c,o,o,o,o,o,o,E.ff))}}p.a.toString
return n},
b8Z(d,e){switch(d.a){case 0:return B.z(["format","bold","value",e],x.N,x.z)
case 1:return B.z(["format","italic","value",e],x.N,x.z)
case 2:return B.z(["format","underline","value",e],x.N,x.z)
case 3:return B.z(["format","strike","value",e],x.N,x.z)
case 4:return B.z(["format","blockquote","value",e],x.N,x.z)
case 5:return B.z(["format","code-block","value",e],x.N,x.z)
case 7:return B.z(["format","indent","value","+1"],x.N,x.z)
case 6:return B.z(["format","indent","value","-1"],x.N,x.z)
case 8:return B.z(["format","direction","value","rtl"],x.N,x.z)
case 9:return B.z(["format","direction","value",""],x.N,x.z)
case 17:return B.z(["format","size","value","small"],x.N,x.z)
case 12:return B.z(["format","color","value","red"],x.N,x.z)
case 14:return B.z(["format","align","value","right"],x.N,x.z)
case 15:return B.z(["format","list","value",e?"ordered":""],x.N,x.z)
case 16:return B.z(["format","list","value",e?"bullet":""],x.N,x.z)
case 19:return B.z(["format","image","value",""],x.N,x.z)
case 20:return B.z(["format","video","value",""],x.N,x.z)
case 21:return B.z(["format","clean","value",""],x.N,x.z)
case 10:return B.z(["format","header","value",e?1:4],x.N,x.z)
case 11:return B.z(["format","header","value",e?2:4],x.N,x.z)
case 13:return B.z(["format","background","value","red"],x.N,x.z)
case 18:return B.z(["format","link","value",""],x.N,x.z)
case 22:case 23:case 24:case 26:case 25:case 27:return B.z(["format","undo","value",""],x.N,x.z)}},
b80(){var w,v=this,u=null,t=v.a.w,s=J.v(v.e,"size")
if(s==null)s="normal"
w=B.al(u,u,v.a.r,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u)
return P.asD(C.N,new B.zq(A.cP2(!0,A.cQz(C.bC,t,u,u,!0,B.a([v.Vo(8,"Small"),v.Vo(12,"Normal"),v.Vo(16,"Large"),v.Vo(20,"Huge")],x.g),new A.bR3(v),new A.bR4(v),w,s,x.z),C.Q),u),C.k,C.hc)},
Vo(d,e){var w=null,v=J.p(J.v(this.e,"size"),e.toLowerCase()),u=this.a
return B.Ij(new A.q5(B.P(e,w,w,w,w,w,w,w,B.al(w,w,v?u.x:u.r,w,w,w,w,w,w,w,w,d,w,w,C.X,w,w,!0,w,w,w,w,w,w,w,w),w,w,w,w,w),w),e.toLowerCase(),x.z)},
Vn(d){var w=null,v=this.a
return new B.ao(w,w,B.P(d,w,w,w,w,w,w,w,B.al(w,w,d.toLowerCase()!=="normal"?v.x:v.r,w,w,w,w,w,w,w,w,14,w,w,C.X,w,w,!0,w,w,w,w,w,w,w,w),w,w,w,w,w),w)},
b_H(){var w=this,v="align",u=w.a.w,t=J.p(J.v(w.e,v),"")||J.v(w.e,v)==null?"left":J.v(w.e,v)
return new B.zq(A.cP2(!1,A.cQz(C.cy,u,C.C,D.bCy,!0,B.a([w.Vt("left"),w.Vt("center"),w.Vt("right"),w.Vt("justify")],x.G),new A.bR1(w),null,null,t,x.N),C.Q),null)},
Vt(d){var w,v,u
if(d==="center")w=D.ay_
else if(d==="right")w=D.ay2
else w=d==="justify"?D.ay0:D.ay1
v=J.p(J.v(this.e,"align"),d)
u=this.a
v=v?u.x:u.r
return B.Ij(new A.q5(B.aW(w,v,null,u.f),null),d,x.N)},
b8Y(d){var w,v,u,t=this,s=null,r="color",q=t.r
q===$&&B.b()
w=t.a.f
v=J.v(t.e,r)
u=t.a
v=v!=null?u.x:u.r
u=B.bh(B.P("A",s,s,1,s,s,s,s,B.al(s,s,v,s,s,s,s,s,s,s,s,u.f-5,s,s,C.X,s,s,!0,s,s,s,s,s,s,s,s),s,s,s,s,s),1,s)
v=J.v(t.e,r)!=null?A.bmM(J.v(t.e,r)):C.p
return A.as1(B.fr(C.M,!0,s,new B.ao(w,w,B.ah(B.a([u,B.ar(s,s,C.k,v,s,s,s,3,s,s,s,s,s,t.a.f-3)],x.p),C.j,C.bl,C.U,0,s,C.m),s),C.k,C.C,0,s,s,s,s,s,C.bB),C.l,new A.a_8(new A.bRf(t,d),s),10,q,new A.bRg(t))},
b8X(d){var w,v,u,t,s,r=this,q=null,p="background",o=r.f
o===$&&B.b()
w=B.fG(C.p,C.B,0.1)
v=J.v(r.e,p)!=null?A.bmM(J.v(r.e,p)):C.C
u=r.a.f
t=J.v(r.e,p)
s=r.a
t=t!=null?s.x:s.r
return A.as1(B.fr(C.M,!0,q,B.ar(C.N,P.asD(C.N,B.P("A",q,q,1,q,q,q,q,B.al(q,q,t,q,q,q,q,q,q,q,q,s.f-1,q,q,C.fg,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.k,C.aiZ),C.k,q,q,new B.b4(v,q,w,q,q,q,q,C.L),q,u,q,q,q,q,q,u),C.k,C.C,0,q,q,q,q,q,C.bB),C.l,new A.a_8(new A.bRc(r,d),q),10,o,new A.bRd(r))},
b9z(d,e){var w,v=this,u=null,t=v.a,s=t.w,r=v.w
r===$&&B.b()
w=t.f
return A.as1(new B.ao(w,w,G.a2K(y.b,t.r,u,u,u),u),s,new B.ao(u,200,new A.UL(new A.bRh(v),6,u),u),0,r,new A.bRi(v,e))},
bu1(d){var w=null
B.eL(w,w,!0,w,new A.bRm(this),d,w,!0,!0,x.z)}}
A.Mh.prototype={
B(d){var w=this,v=null,u=w.c
return B.hJ(B.iJ(!1,v,!0,new B.a2(w.f,new B.ao(v,v,w.b94(u),v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.e,v,v,v,v,v,v,v),v,v,v,u.c,v,v,v,v,v,v,E.ff)},
b94(d){var w=this
switch(d.a){case 0:return w.lR(D.O4)
case 1:return w.lR(D.ayJ)
case 2:return w.lR(D.ayQ)
case 3:return w.lR(D.ayN)
case 4:return w.lR(D.ayM)
case 5:return w.lR(H.tb)
case 7:return w.lR(D.ayI)
case 6:return w.lR(D.ayH)
case 8:return w.lR(D.ayP)
case 9:return w.lR(D.ayO)
case 12:return w.lR(D.O4)
case 14:return w.lR(D.ayF)
case 21:return w.lR(D.ayG)
case 15:return w.lR(D.ayL)
case 16:return w.lR(D.ayK)
case 10:return w.aqq("packages/quill_html_editor/assets/h1_dark.png")
case 11:return w.aqq("packages/quill_html_editor/assets/h2_dark.png")
case 13:return w.lR(D.ayE)
case 19:return w.lR(Z.NR)
case 22:return w.lR(D.ayT)
case 23:return w.lR(D.ayS)
case 24:return w.lR(D.ayR)
case 18:case 20:case 17:case 25:case 26:case 27:return C.cO}},
lR(d){var w=this,v=w.d?w.x:w.w
return B.aW(d,v,null,w.r)},
aqq(d){var w=this,v=null,u=w.r
return new B.ao(u,u,G.a2K(d,w.d?w.x:w.w,v,v,v),v)},
iY(d){var w=this
return A.dp_(w.x,w.w,w.r,d,null,w.f,w.c)}}
A.jQ.prototype={
I(){return"ToolBarStyle."+this.b}}
A.auc.prototype={}
A.a_8.prototype={
B(d){var w=null
return B.ar(w,B.a2b(w,C.r,D.bCS,new A.b6C(this),19,w,M.m8,w,C.I,!0),C.k,C.l,w,w,w,120,w,w,w,w,w,120)}}
A.a0Z.prototype={
M(){return new A.aNE()},
bP3(d){return this.r.$1(d)}}
A.aNE.prototype={
T(){this.d=new B.aS("fontBgColorKey"+J.aq(this.a.a),x.q)
this.ah()},
B(d){var w,v,u,t,s=this,r=null,q=s.a,p=q.f,o=q.e
q=q.c
w=s.d
w===$&&B.b()
v=s.apv(!1,d)
u=s.a
t=u.e
return new B.a2(p,new B.ao(o,o,A.as1(new B.ao(t,t,G.a2K("packages/quill_html_editor/assets/edit_table.png",u.d,r,r,r),r),q,v,0,w,new A.c6h(s,d)),r),r)},
a6N(d,e,f){var w,v,u,t,s=null,r="packages/quill_html_editor/assets/insert_row_below.png"
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
return new A.q5(A3.nj(B.iJ(!1,s,!0,new B.a2(C.hk,B.at(B.a([new B.ao(t,t,G.a2K(r,v,s,s,s),s),T.cj,B.bh(B.P(w,s,s,s,s,s,s,s,B.al(s,s,v,s,s,s,s,s,s,s,s,s,s,s,C.be,s,s,!0,s,s,s,s,s,s,s,s),s,s,s,s,s),1,s)],x.p),C.j,C.f,C.U,0,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new A.c6f(this,d,f,e),s,s,s,s,s,s,s),s,u,s,s,s),s)},
btN(d,e){var w=null
B.eL(w,w,!0,w,new A.c6g(this,!0),e,w,!0,!0,x.z)},
apv(d,e){var w,v=null
if(d)return L.iD(v,v,v,new A.q5(new B.eO(new A.c6d(this,!0),v),v),C.Q,v,v,new B.d5(B.bF(8),C.y),v,v,v)
w=B.aA(e,v,x.w).w.a.a<450?350:v
return new B.ao(200,w,O.mb(!0,!0,!0,v,C.v,v,C.r,new A.c6e(this,!1),7,v,v,C.Q,v,v,v,!0,C.I,!0),v)}}
A.t5.prototype={
I(){return"EditTableEnum."+this.b}}
A.a12.prototype={
M(){var w=null,v=x.M
return new A.a13(D.MW,new B.ty(B.a([],v),w,w),new B.ty(B.a([],v),w,w))}}
A.a13.prototype={
ZM(){},
l(){$.au.m4(this)
this.ai()},
T(){var w=this
w.ah()
w.w=new B.aS(J.aq(w.a.a),x.A)
$.au.RG$.push(new A.bfV(w))
$.au.ds$.push(w)},
b92(d){var w=this,v=w.w
v===$&&B.b()
v=$.au.b2$.x.h(0,v)
v=v==null?null:v.gan()
x.r.a(v)
if(w.c!=null)w.A(new A.bfP(w,v))},
biQ(d){var w,v=this,u=v.c
u.toString
u=B.zX(u,x.u)
u.toString
v.x=u
w=B.pH(new A.bfR(v),!1,!1)
v.r=w
u.jj(0,w)},
MK(){var w,v,u=this.c
if(u!=null){w=x.r.a(u.gan())
v=B.dj(w.co(0,null),C.n)
return new A.hA(w.gD(0).a,w.gD(0).b,v.a,v.b)}this.xC()
return D.MW},
a9y(d){return this.btS(d)},
btS(d){var w=0,v=B.l(x.H),u=this,t,s,r,q,p
var $async$a9y=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:p=B.zX(d,x.u)
p.toString
u.y=p
p=u.e
t=u.MK()
s=u.c
s.toString
r=x.w
s=B.aA(s,null,r).w
q=u.c
q.toString
r=B.pH(new A.bfU(u,new A.aAR(D.aw5,t,p,new A.hA(s.a.a,B.aA(q,null,r).w.a.b,0,0),u.a.f,8).bMz(0,D.MV)),!1,!1)
u.f=r
p=u.y
p.jj(0,r)
u.a.toString
return B.j(null,v)}})
return B.k($async$a9y,v)},
xC(){var w=this.f
if(w!=null){w.hS(0)
this.f=null}},
B(d){var w=null,v=this.a,u=v.Q
return B.cG(w,v.c,C.r,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,u,w,w,w,w,w,w,w,w,!1,C.aa)},
Ll(){var w,v=this
v.a.toString
if(v.f!=null)v.xC()
else{w=v.c
w.toString
v.a9y(w)}}}
A.aNM.prototype={}
A.amk.prototype={
b9E(){var w,v=this,u=null,t=1,s=1,r=!1,q=0
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
w=r?new A.aGn(w,u):new A.aoy(w,u)
return B.cJS(new B.Fd(q,B.i3(u,u,!1,u,w,new B.U(v.e,v.f)),u),u,t,s)},
B(d){return this.b9E()}}
A.Zx.prototype={
M(){return new A.aLn()}}
A.aLn.prototype={
B(d){var w=null,v=this.a,u=v.r,t=v.c,s=v.d
return B.fr(C.M,!0,w,B.pG(B.ar(w,v.w,C.k,w,new B.ab(0,300,0,1/0),new B.b4(t,w,w,u,w,w,w,C.L),w,w,w,w,new B.am(s,s,s,s),w,w,w),1),C.k,C.C,0,w,w,w,w,w,C.bB)}}
A.hA.prototype={}
A.pj.prototype={
I(){return"ElTooltipPosition."+this.b}}
A.az_.prototype={
B(d){var w=null,v=this.d
v=B.cG(w,B.ar(w,w,C.k,B.cf(C.e.aQ(255*this.e),v.R()>>>16&255,v.R()>>>8&255,v.R()&255),w,w,w,w,w,w,w,w,w,w),C.r,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.f,w,w,w,w,w,w,w,w,!1,C.aa)
return v}}
A.aoy.prototype={
b1(d,e){var w,v,u,t,s,r,q,p,o,n="cubicTo"
$.aw()
w=B.bl()
B.cx()
v=this.b
w.r=v.gn(v)
u=B.cx()
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
B.fM(o,n,[0,v*0.95,r*0.18,v*1.09,q,p])
v=s.a
v.toString
B.fM(v,n,[q,p,r,0,r,0])
p=s.a
p.toString
B.fM(p,n,[r,0,0,0,0,0])
r=s.a
r.toString
B.fM(r,n,[0,0,0,t,0,t])
s=s.a
s.toString
B.fM(s,n,[0,t,0,t,0,t])
d.a.eI(u,w)},
h7(d){return!0}}
A.aGn.prototype={
b1(d,e){var w,v,u,t,s,r,q,p,o,n="cubicTo"
$.aw()
w=B.bl()
w.f=!0
v=this.b
w.r=v.gn(v)
u=B.cx()
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
B.fM(o,n,[v*0.58,s,v*0.42,s,p,r])
s=q.a
s.toString
B.fM(s,n,[p,r,0,0,0,0])
p=q.a
p.toString
B.fM(p,n,[0,0,v,0,v,0])
p=q.a
p.toString
B.fM(p,n,[v,0,t,r,t,r])
q=q.a
q.toString
B.fM(q,n,[t,r,t,r,t,r])
d.a.eI(u,w)},
h7(d){return!0}}
A.aAR.prototype={
av0(){var w,v,u,t,s,r=this,q=r.c,p=q.a
q=q.b
w=r.b
v=w.c+w.a*0.5
w=w.d
u=r.e
t=r.a.b
s=r.f
return new A.nW(new A.hA(p,q,v,w-q-u-t),new A.hA(p,q,Math.floor(v),Math.floor(w-u-t)),D.avV,new B.dT(new B.bf(s,s),new B.bf(s,s),C.T,new B.bf(s,s)))},
Y4(){var w,v,u,t,s,r,q=this,p=q.a,o=p.a
p=p.b
w=q.b
v=w.c+w.a*0.5
w=w.d
u=q.e
t=q.c
s=t.a
t=t.b
r=q.f
return new A.nW(new A.hA(s,t,v-s*0.5,w-t-u-p),new A.hA(o,p,Math.floor(v-o*0.5),Math.floor(w-u-p)),D.MV,B.Cx(new B.bf(r,r)))},
av_(){var w,v,u,t,s,r,q=this,p=q.a,o=p.a
p=p.b
w=q.b
v=w.c
u=w.a*0.5
w=w.d
t=q.e
s=q.c
r=q.f
return new A.nW(new A.hA(o,p,v-s.a+u,w-s.b-t-p),new A.hA(o,p,Math.floor(v+u-o),Math.floor(w-t-p)),D.avY,new B.dT(new B.bf(r,r),new B.bf(r,r),new B.bf(r,r),C.T))},
auZ(){var w,v,u,t=this,s=t.c,r=s.a
s=s.b
w=t.b
v=w.c+w.a*0.5
w=w.d+w.b+t.e
u=t.f
return new A.nW(new A.hA(r,s,v,w+t.a.b),new A.hA(r,s,Math.ceil(v),Math.ceil(w)),D.aw1,new B.dT(C.T,new B.bf(u,u),new B.bf(u,u),new B.bf(u,u)))},
amU(){var w,v,u,t,s,r=this,q=r.a,p=q.a
q=q.b
w=r.b
v=w.c+w.a*0.5
w=w.d+w.b+r.e
u=r.c
t=u.a
s=r.f
return new A.nW(new A.hA(t,u.b,v-t*0.5,w+q),new A.hA(p,q,Math.ceil(v-p*0.5),Math.ceil(w)),D.aw2,B.Cx(new B.bf(s,s)))},
auY(){var w,v,u,t,s=this,r=s.c,q=r.a
r=r.b
w=s.b
v=w.c+w.a*0.5
u=s.a
w=w.d+w.b+s.e
t=s.f
return new A.nW(new A.hA(q,r,v-q,w+u.b),new A.hA(q,r,v-u.a,Math.ceil(w)),D.aw3,new B.dT(new B.bf(t,t),C.T,new B.bf(t,t),new B.bf(t,t)))},
at5(){var w,v,u,t=this,s=t.c,r=s.a,q=s.b,p=t.b
s=p.c-s.c
w=t.e
v=t.a.b
p=p.d+p.b*0.5
u=t.f
return new A.nW(new A.hA(r,q,s-r-w-v,p),new A.hA(r,q,Math.floor(s-w-v),p),D.aw4,new B.dT(new B.bf(u,u),C.T,new B.bf(u,u),new B.bf(u,u)))},
at3(){var w,v,u,t,s=this,r=s.c,q=r.a,p=r.b,o=s.b
r=o.c-r.c
w=s.e
v=s.a
u=v.b
o=o.d+o.b*0.5
t=s.f
return new A.nW(new A.hA(q,p,r-q-w-u,o-p*0.5),new A.hA(q,p,Math.floor(r-w-u),Math.floor(o-v.a*0.5)),D.avW,B.Cx(new B.bf(t,t)))},
at4(){var w,v,u,t,s=this,r=s.c,q=r.a,p=r.b,o=s.b
r=o.c-r.c
w=s.e
v=s.a
u=v.b
o=o.d+o.b*0.5
t=s.f
return new A.nW(new A.hA(q,p,r-q-w-u,o-p),new A.hA(q,p,Math.floor(r-w-u),Math.floor(o-v.a)),D.avX,new B.dT(new B.bf(t,t),new B.bf(t,t),new B.bf(t,t),C.T))},
avV(){var w,v,u,t,s,r=this,q=r.c,p=q.a
q=q.b
w=r.b
v=w.c+w.a+r.e
u=Math.floor(v)
w=w.d+w.b*0.5
t=Math.floor(w)
s=r.f
return new A.nW(new A.hA(p,q,Math.floor(v+r.a.b),Math.floor(w)),new A.hA(p,q,u,t),D.avZ,new B.dT(C.T,new B.bf(s,s),new B.bf(s,s),new B.bf(s,s)))},
avT(){var w,v,u,t,s=this,r=s.c,q=r.a
r=r.b
w=s.b
v=w.c+w.a+s.e
w=w.d+w.b*0.5
u=s.a
t=s.f
return new A.nW(new A.hA(q,r,v+u.b,w-r*0.5),new A.hA(q,r,Math.floor(v),Math.floor(w-u.a*0.5)),D.aw_,B.Cx(new B.bf(t,t)))},
avU(){var w,v,u,t,s=this,r=s.c,q=r.a
r=r.b
w=s.b
v=w.c+w.a+s.e
w=w.d+w.b*0.5
u=s.a
t=s.f
return new A.nW(new A.hA(q,r,v+u.b,w-r),new A.hA(q,r,Math.floor(v),w-u.a),D.aw0,new B.dT(new B.bf(t,t),new B.bf(t,t),C.T,new B.bf(t,t)))},
aq0(d){var w,v=d.a,u=v.c,t=!1
if(u>0){w=this.d
if(u+v.a<w.a){u=v.d
v=u>0&&u+v.b<w.b}else v=t}else v=t
if(v)return!0
return!1},
b7N(){var w,v,u=this,t=[u.gbwi(),u.gb0i(),u.gbiv(),u.gbrw(),u.gbpf(),u.gbpe(),u.gbix(),u.gbry(),u.gbiw(),u.gbrx(),u.gbpd(),u.gbpc()]
for(w=0;w<12;++w){v=t[w]
if(u.aq0(v.$0()))return v.$0()}return u.Y4()},
bMz(d,e){var w,v=this
switch(e.a){case 0:w=v.av0()
break
case 1:w=v.Y4()
break
case 2:w=v.av_()
break
case 6:w=v.auZ()
break
case 7:w=v.amU()
break
case 8:w=v.auY()
break
case 9:w=v.at5()
break
case 10:w=v.at3()
break
case 11:w=v.at4()
break
case 3:w=v.avV()
break
case 4:w=v.avT()
break
case 5:w=v.avU()
break
default:w=v.Y4()
break}return v.aq0(w)?w:v.b7N()}}
A.nW.prototype={}
A.bq8.prototype={
I(){return"InputAction."+this.b}}
A.bpg.prototype={
a1I(){var w=0,v=B.l(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$a1I=B.h(function(d,e){if(d===1){t.push(e)
w=u}while(true)switch(w){case 0:u=3
w=6
return B.d($.cQW.c7().a1J(!1,C.awS,!0),$async$a1I)
case 6:r=e
if(r!=null){q=J.ii(r.a)
p=q.c
if(p!=null){o=C.ha.glY().ci(p)
s.a.$1("data:image/"+B.o(C.b.gZ(q.b.split(".")))+";base64,"+B.o(o))}}u=1
w=5
break
case 3:u=2
j=t.pop()
k=B.ai(j)
if(k instanceof B.kb){n=k
B.hM().$1("Unsupported operation "+B.o(n))}else{m=k
B.hM().$1("File Picker "+J.aq(m))}w=5
break
case 2:w=1
break
case 5:return B.j(null,v)
case 1:return B.i(t.at(-1),v)}})
return B.k($async$a1I,v)}}
A.Rv.prototype={
M(){return new A.aPy(new B.aS(null,x.m))},
bPH(d,e){return this.c.$1(e)}}
A.aPy.prototype={
T(){this.f=new B.aS(C.c.j(B.dS(this.a.e)),x.q)
this.ah()},
B(d){return this.aO2(d)},
aO2(d){var w,v,u=this,t={}
t.a=null
w=u.f
w===$&&B.b()
v=u.b9B(!0,0,0,null,d)
return A.as1(u.a.r,C.l,v,10,w,new A.cdM(t,u))},
b9B(d,e,f,g,h){var w,v,u,t=this,s=null,r={}
r.a=e
r.b=f
w=B.aA(h,s,x.w).w
v=A.bmM("#E7F0FE")
u=B.bF(10)
return new A.q5(B.v1(s,s,new B.a2(new B.am(0,0,0,w.f.d),B.ar(C.N,B.at(B.a([U.hT,new B.f6(1,C.bx,new B.a2(C.fN,B.ar(s,B.ek(s,!1,s,D.aAx,!1,s,s,s,s,1,1,!1,new A.cdI(t),s,s,s,s,!1,s,s,C.H,s,new A.cdJ()),C.k,s,s,new B.b4(v,s,s,u,s,s,s,C.L),s,s,s,s,s,s,s,s),s),s),B.bW(s,s,s,s,s,s,D.azT,s,s,s,new A.cdK(r,t,g,!0,h),s,s,s,s,s),K.q_,B.bW(s,s,s,s,s,s,D.azv,s,s,s,new A.cdL(r,t,!0,h),s,s,s,s,s),K.q_],x.p),C.j,C.f,C.i,0,s),C.k,s,s,s,s,60,s,s,s,s,s,s),s),t.d,s),s)}}
A.aHm.prototype={
I(){return"UrlInputType."+this.b}}
A.UL.prototype={
M(){return new A.ahT(B.aT(x.S),B.aT(x.e),new B.aS(null,x.A))},
bPI(d,e){return this.c.$2(d,e)}}
A.ahT.prototype={
T(){this.ah()},
b5f(d){var w,v,u,t,s,r=this
r.b2K()
w=$.au.b2$.x.h(0,r.w).Aa(x.r)
w.toString
v=B.a([],x.L)
u=new B.c6(new Float64Array(16))
u.fW()
if(w.f6(new B.wL(v,B.a([u],x.O),B.a([],x.b)),w.hC(d.gaL(d))))for(w=v.length,u=r.e,t=0;t<v.length;v.length===w||(0,B.M)(v),++t){s=v[t].a
if(s instanceof A.VR&&!u.p(0,s)){u.t(0,s)
r.bsF(s.F)}}},
bsF(d){this.A(new A.cu7(this,d))},
B(d){var w=this,v=null,u=w.gb5e(),t=w.a.d
return new A.q5(B.mM(C.cn,B.a2b(v,C.r,new I.tR(t,0,0,1),new A.cu8(w),t*t,w.w,v,A_.dQ,C.a7,!0),v,v,u,v,u,v,v,w.gbmR()),v)},
b2K(){this.e.W(0)
this.A(new A.cu5(this))},
bmS(d){this.a.bPI(this.f+1,this.r+1)}}
A.VS.prototype={
b9(d){var w=new A.VR(this.e,null,new B.bo(),B.aC(x.v))
w.bc()
w.sbY(null)
return w},
bg(d,e){e.F=this.e}}
A.VR.prototype={}
A.abs.prototype={
gn(d){return this.c.a},
qn(d,e){var w=this.a
w===$&&B.b()
return B.dP(w.xc(d,e),x.z)},
Bc(){var w=0,v=B.l(x.H),u=this,t
var $async$Bc=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:t=u.c
t.c.Ot(t.a)
t.a=t.b.kE(0)
B.cD5("\x1b[34m[WebViewX]\x1b[0m "+("Current history: "+t.j(0))+"\x1b[0m",1024)
u.a4()
return B.j(null,v)}})
return B.k($async$Bc,v)},
Bd(){var w=0,v=B.l(x.H),u=this,t
var $async$Bd=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:t=u.c
t.b.jP(0,t.a)
t.a=t.c.vY()
B.cD5("\x1b[34m[WebViewX]\x1b[0m "+("Current history: "+t.j(0))+"\x1b[0m",1024)
u.a4()
return B.j(null,v)}})
return B.k($async$Bd,v)},
l(){var w=this.b
w.a8$=$.a9()
w.Y$=0
this.fG()},
$iabt:1}
A.b8k.prototype={}
A.uM.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.uM&&e.a===this.a},
gv(d){return C.d.gv(this.a)}}
A.a19.prototype={
I(){return"EmbedPosition."+this.b}}
A.a8Y.prototype={
I(){return"SourceType."+this.b}}
A.auh.prototype={
j(d){return"\nHistoryStack:\nBack: "+this.b.j(0)+"\nCurrent: "+B.o(this.a)+"\nForward: "+this.c.j(0)+"\n"},
bzy(d){var w=this
if(d.k(0,w.a))return
w.b.jP(0,w.a)
w.a=d
w.c.W(0)}}
A.bWd.prototype={}
A.CD.prototype={
a_j(d,e,f,g){return this.bHT(d,e,f,g)},
bHT(d,e,f,g){var w=0,v=B.l(x.N),u,t=this,s,r
var $async$a_j=B.h(function(h,i){if(h===1)return B.i(i,v)
while(true)switch(w){case 0:s=B.dn(t.abG(B.rB(4,g,C.ax,!1)),0,null)
w=3
return B.d(f==="get"?B.cLQ(s,e):B.b_r(s,d,null,e),$async$a_j)
case 3:r=i
u=t.adV(B.lY(B.lX(r.e)).d8(0,r.w))
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a_j,v)}}
A.anf.prototype={
abG(d){return"https://cors.bridged.cc/"+d},
adV(d){return d}}
A.aoc.prototype={
abG(d){return"https://api.codetabs.com/v1/proxy/?quest="+d},
adV(d){return d}}
A.aI_.prototype={
abG(d){return"https://we-cors-anywhere.herokuapp.com/"+d},
adV(d){return d}}
A.q5.prototype={
B(d){return new A.a65(this.c,!1,this.a)}}
A.MX.prototype={
j(d){var w=this.d
return"WebViewContent:\nSource: "+this.a+"\nSourceType: "+this.b.b+"\nLast request Headers: none\nLast request Body: "+B.o(w==null?"none":w)+"\n"},
k(d,e){var w,v=this
if(e==null)return!1
if(e!==v){w=!1
if(e instanceof A.MX)if(e.a===v.a)if(e.b===v.b)w=e.d==v.d}else w=!0
return w},
gv(d){var w=this
return(C.d.gv(w.a)^B.dS(w.b)^C.oS.gv(w.c)^J.V(w.d))>>>0}}
A.bqF.prototype={
I(){return"JavascriptMode."+this.b}}
A.b30.prototype={
I(){return"AutoMediaPlaybackPolicy."+this.b}}
A.abr.prototype={
M(){return new A.aiV()}}
A.aiV.prototype={
T(){var w,v,u,t,s,r=this,q=null
r.ah()
r.x=!1
r.a.toString
r.y=!1
w=E.kj.F4()
r.e="_iframe"+("_"+B.dr(w,"-","_"))
r.d=r.b3O()
r.bqA(r.e)
w=r.a
v=w.c
w=w.d
u=r.y
t=$.a9()
u=new B.bL(u,t,x.Y)
s=x.o
t=new A.abs(u,new A.auh(new A.MX(v,w,q,q),B.nE(q,s),B.nE(q,s),x.K),t)
t.a1(0,r.gazT())
u.a1(0,r.garD())
r.w=t
w=r.a
v=w.d
u=!0
if(v!==D.adb)if(v!==D.add)w=v===D.adc&&w.c==="about:blank"
else w=u
else w=u
if(w)r.b3f(r.gb1R())
else r.any()
r.bqz()
B.hq(C.J,new A.cA4(r),x.P)},
bqA(d){$.C6()
$.rK().vV(d,new A.cA1(this),!0)},
b3f(d){var w=$.d5B(),v=this.e
v===$&&B.b()
w.m(0,"connect_js_to_flutter"+v,new A.czX(this,d))},
bqz(){var w=this.d
w===$&&B.b()
this.f=B.c8_(w,"load",new A.cA0(this),!1,x.E.c)},
any(){var w=this.a.w,v=this.w
v===$&&B.b()
w.$1(v)},
anx(d){this.a.at.$1(d)},
B(d){var w,v=null,u=this.a,t=u.f,s=u.r
u=u.a
w=this.e
w===$&&B.b()
u=B.alG(!0,new B.hH(new B.xh(w,v,v,C.jT,u),v))
w=this.y
w===$&&B.b()
u=B.a([new B.ao(t,s,u,v)],x.p)
if(w)u.push(B.pK(0,new A.a65(B.ar(v,v,C.k,v,v,v,v,v,v,v,v,v,v,v),!1,v)))
else u.push(C.a5)
return new B.cj(C.ad,v,C.ab,C.v,u,v)},
b3O(){var w,v=this,u=document.createElement("iframe")
u.toString
w=v.e
w===$&&B.b()
u.id="id_"+w
u.name="name_"+v.e
w=u.style
w.border="none"
u.width=C.c.j(C.e.K(v.a.f))
u.height=C.c.j(C.e.K(v.a.r))
w=u.style
w.width="100%"
w=u.style
w.height="100%"
v.a.toString
u.allowFullscreen=!0
v.a.toString
w=u.sandbox
w.toString
C.b.aT(D.aQu,C.au8.gku(w))
v.a.toString
u.sandbox.add("allow-scripts")
v.a.toString
u.allow=C.b.hs(D.aNc,new A.czY())
return u},
byH(){var w=this.w
w===$&&B.b()
w=w.c.a
this.anx(w.a)
this.azr(w)},
bc6(){this.A(new A.czZ(this))},
a5G(d,e){return this.b2l(d,e)},
b2l(d,e){var w=0,v=B.l(x.y),u,t=this
var $async$a5G=B.h(function(f,g){if(f===1)return B.i(g,v)
while(true)switch(w){case 0:t.a.toString
u=!0
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a5G,v)},
azr(d){var w,v,u=this,t=d.a
if(t.length===0){u.a.toString
return}w=d.b
switch(w.a){case 0:w=u.d
w===$&&B.b()
u.a.toString
v=u.e
v===$&&B.b()
w.srcdoc=A.cHH(t,!0,D.Hb,v)
break
case 1:case 2:if(t==="about:blank"){w=u.d
w===$&&B.b()
u.a.toString
v=u.e
v===$&&B.b()
w.srcdoc=A.cHH("<br>",!0,D.Hb,v)
break}if(!C.d.be(t,B.bz("http[s]?://",!1,!1,!1))){u.a.toString
return}if(w===D.adc){w=u.d
w===$&&B.b()
w=B.dv5(w.contentWindow)
w.toString
J.d89(J.d7O(w),t)}else u.bx5(d.c,"get",t)
break}},
VT(d){return this.bd9(d)},
bd9(d){var w=0,v=B.l(x.H),u,t=this,s,r,q,p,o,n,m
var $async$VT=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:o=x.i.a(C.aB.u3(0,d,null))
n=J.a1(o)
m=B.b9(n.h(o,"href"))
n.j(o)
t.a.toString
s=t.w
s===$&&B.b()
w=3
return B.d(t.a5G(m,s.c.a.b),$async$VT)
case 3:if(!f){t.a.toString
w=1
break}if(m==="javascript:history.back()"){t.w.Bc()
w=1
break}else if(m==="javascript:history.forward()"){t.w.Bd()
w=1
break}r=B.b9(n.h(o,"method"))
q=n.h(o,"body")
if(q==null)p=null
else{n=x.N
p=B.I(n,n)
p.YD(p,J.bt(x.j.a(q),new A.cA_(),x.J))}t.aym(p,t.w.c.a.c,r,m)
case 1:return B.j(u,v)}})
return B.k($async$VT,v)},
aym(d,e,f,g){this.a6w(d,e,f,g).aH(new A.cA2(this,g,e,d),x.P).la(new A.cA3(this,g))},
bx5(d,e,f){return this.aym(null,d,e,f)},
a6w(d,e,f,g){return this.b7m(d,e,f,g)},
b7m(d,e,f,g){var w=0,v=B.l(x.N),u,t=this,s,r,q,p,o,n,m
var $async$a6w=B.h(function(h,i){if(h===1)return B.i(i,v)
while(true)$async$outer:switch(w){case 0:t.a.toString
p=B.E(D.aGB,x.W)
C.b.aRv(p)
s=p
t.a.toString
for(r=0;r<J.bA(s);++r){q=J.v(s,r)
B.a_(q).j(0)
t.a.toString
try{o=q.a_j(d,e,f,g)
u=o
w=1
break $async$outer}catch(l){B.a_(q).j(0)
t.a.toString
if(J.p(r,J.bA(s)-1)){o=B.wq("None of the provided proxies were able to fetch the given page.",null)
m=new B.ak($.ax,x.I)
m.pn(o)
u=m
w=1
break $async$outer}continue}}o=B.wq("Bad state",null)
m=new B.ak($.ax,x.I)
m.pn(o)
u=m
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a6w,v)},
l(){var w=this,v=w.f
v===$&&B.b()
v.a2(0)
v=w.w
v===$&&B.b()
v.N(0,w.gazT())
w.w.b.N(0,w.garD())
w.ai()}}
var z=a.updateTypes(["nW()","~()","~(pW)","RG(@)","Jx<@>(@)","px(@)","~(iX,to,m)","~(Fm)","e(H,fE<@>)","abt<@>(abt<@>)","X<@>(t5)","fD(H)","q5(H,f)","@(d9)","~(lE)","VS(H,f)","aF(px)","G?(G?)","G?(@)"])
A.cB2.prototype={
$1(d){var w=function(e,f,g){return function(){return e(f,g,this,Array.prototype.slice.apply(arguments))}}(A.duJ,d,!1)
A.cL2(w,$.O5(),d)
return w},
$S:58}
A.cB3.prototype={
$1(d){return new this.a(d)},
$S:58}
A.cCB.prototype={
$1(d){return new A.RG(d)},
$S:z+3}
A.cCC.prototype={
$1(d){return new A.Jx(d,x.R)},
$S:z+4}
A.cCD.prototype={
$1(d){return new A.px(d)},
$S:z+5}
A.bnB.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=d.w=J.aq(d.w),p=B.a([],x.d)
if(e.geU(e)>0)p.push(F.a9t(C.d.ag(q,0,e.geU(e))))
w=e.pe(0)
w.toString
if(f.length===0&&C.d.be(w,"www."))v="https://"+w
else v=w
u=F.cQF("a")
u.b.m(0,"href",f+v)
u.ghq(0).W(0)
w=F.a9t(w)
u.ghq(0).t(0,w)
p.push(u)
t=e.geq(e)
if(t<q.length)p.push(F.a9t(C.d.d7(q,t)))
w=F.ben()
w.ghq(0).H(0,p)
s=d.a
if(s==null)B.a7(B.aJ("Node must have a parent to replace it."))
s=s.ghq(0)
r=d.a.ghq(0)
s.m(0,r.dt(r,d),w)},
$S:z+6}
A.bnC.prototype={
$1(d){var w=J.aq(d.w)
d.w=w
B.ul(w,this.a,new A.bnA(this.b,d),null)},
$S:z+2}
A.bnA.prototype={
$1(d){this.a.$3(this.b,d,"mailto:")
return""},
$S:63}
A.bnD.prototype={
$1(d){var w=J.aq(d.w)
d.w=w
B.ul(w,this.a,new A.bnz(this.b,d),null)},
$S:z+2}
A.bnz.prototype={
$1(d){this.a.$3(this.b,d,"")
return""},
$S:63}
A.bnE.prototype={
$1(d){var w=J.aq(d.w)
d.w=w
B.ul(w,this.a,new A.bny(this.b,d),null)},
$S:z+2}
A.bny.prototype={
$1(d){this.a.$3(this.b,d,"tel:")
return""},
$S:63}
A.cch.prototype={
$1(d){this.a.a.toString},
$S:78}
A.cci.prototype={
$0(){B.hM().$1("Editor Loaded :)")},
$S:0}
A.ccj.prototype={
$0(){var w,v=this.a
v.A(new A.ccg(v))
w=v.d
w===$&&B.b()
if(w.length!==0)v.ts(w)},
$S:0}
A.ccg.prototype={
$0(){this.a.e=!1},
$S:0}
A.ccf.prototype={
$1(d){return this.a.e?D.amD:C.a5},
$S:450}
A.ccb.prototype={
$1(d){B.hM().$1("has focus "+d)
this.a.A(new A.cc9())},
$S:120}
A.cc9.prototype={
$0(){},
$S:0}
A.cca.prototype={
$1(d){return B.hM().$1("widget text change "+d)},
$S:6}
A.cce.prototype={
$0(){},
$S:0}
A.ccd.prototype={
$1(d){return B.hM().$1("Editor resized "+B.o(d))},
$S:139}
A.ccc.prototype={
$1(d){return B.hM().$1("index "+B.o(d.a)+", range "+B.o(d.b))},
$S:z+7}
A.bCE.prototype={
$2(d,e){var w=e.b
if(w!=null)this.a.x=w
if(e.a===Q.or)return B.is(new A.bCD(this.a))
w=this.a.a.db.$1(d)
return w},
$S:z+8}
A.bCD.prototype={
$2(d,e){var w=this.a,v=e.b
w.e=w.ar0(v)
return w.b0N(d,v)},
$S:89}
A.bCB.prototype={
$1(d){this.a.as=!1},
$S:6}
A.bCA.prototype={
$1(d){return this.a.d=d},
$S:z+9}
A.bCC.prototype={
$1(d){B.hq(C.bp,null,x.z).aH(new A.bCq(this.a),x.P)},
$S:6}
A.bCq.prototype={
$1(d){var w,v=this.a
v.as=!0
B.hM().$1("_editorLoaded true")
if(v.c!=null)v.A(new A.bCp())
v.a.r.a_8(!0)
w=v.a
w.at.$0()
v.a.r.d.t(0,"")},
$S:11}
A.bCp.prototype={
$0(){},
$S:0}
A.bCt.prototype={
$1(d){var w,v,u=this.a,t=u.r
t===$&&B.b()
w=J.j4(d)
if(t===B.lF(w.j(d)))return
try{t=B.lF(w.j(d))
u.r=t==null?u.a.d:t}catch(v){u.r=u.a.d}finally{if(u.c!=null)u.A(new A.bCs(u))
u.a.as.$1(u.r)}},
$S:11}
A.bCs.prototype={
$0(){var w=this.a.r
w===$&&B.b()
return w},
$S:0}
A.bCu.prototype={
$1(d){var w,v
try{w=this.a.a.r.b.ga0()
if(w!=null)w.bUI(C.aB.u3(0,d,null))}catch(v){}},
$S:11}
A.bCv.prototype={
$1(d){var w,v,u,t,s
if(""===d)return
try{u=this.a
u.a.toString
w=""
t=B.bz("<[^>]*>|&[^;]+;",!0,!1,!1)
v=B.dr(d,t," ")
if(J.rN(v)==="")w=""
else w=d
u.a.w.$1(w)
u.a.r.c.t(0,w)}catch(s){}},
$S:11}
A.bCw.prototype={
$1(d){var w=this.a,v=(d==null?null:J.aq(d))==="true"
w.w=v
w.a.z.$1(v)
w.a.toString},
$S:11}
A.bCx.prototype={
$1(d){var w,v,u,t,s
if(""===d)return
try{u=this.a
u.a.toString
w=""
t=B.bz("<[^>]*>|&[^;]+;",!0,!1,!1)
v=B.dr(d,t," ")
if(J.rN(v)==="")w=""
else w=d
u=u.a
u.r.c.t(0,w)}catch(s){}},
$S:11}
A.bCy.prototype={
$1(d){var w,v,u
try{w=this.a
v=w.a
v.toString
if(!w.w){w.w=!0
v.z.$1(!0)}w=w.a.Q
w.$1(d!=null?A.cVd(C.aB.u3(0,d,null)):new A.Fm(0,0))}catch(u){}},
$S:11}
A.bCz.prototype={
$1(d){var w=this.a
w.as=!0
if(w.c!=null)w.A(new A.bCr())},
$S:11}
A.bCr.prototype={
$0(){},
$S:0}
A.bCo.prototype={
$1(d){this.a.$1(d)},
$S:6}
A.bCn.prototype={
$1(d){this.a.$0()},
$S:6}
A.cBB.prototype={
$1(d){return"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890".charCodeAt($.d6B().Av(62))},
$S:75}
A.bRn.prototype={
$0(){},
$S:0}
A.bR7.prototype={
$1(d){this.a.a.d.a_7(d)},
$S:78}
A.bR8.prototype={
$1(d){this.a.a.d.wj("link",d)},
$S:78}
A.bR9.prototype={
$1(d){return this.a.a.d.a0G(d)},
$S:z+10}
A.bRa.prototype={
$0(){var w=0,v=B.l(x.H),u=this,t,s,r,q,p,o,n,m
var $async$$0=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:o=u.a
n=o.a
m=n.c
w=m===D.bKG?2:4
break
case 2:u.b.a.d.Zf()
w=3
break
case 4:w=m===D.bKM?5:7
break
case 5:u.b.a.d.w4()
w=6
break
case 7:w=m===D.bKJ?8:10
break
case 8:u.b.a.d.vT()
w=9
break
case 10:w=m===D.bKN?11:13
break
case 11:w=14
return B.d(new A.bpg(new A.bR5(u.b)).a1I(),$async$$0)
case 14:w=12
break
case 13:if(m===D.aem){t=B.a([],x.c)
for(n=u.b,m=n.d,s=m.length,r=0;r<m.length;m.length===s||(0,B.M)(m),++r)t.push(m[r].iY(!1))
n.d=t}else if(m===D.aej){for(n=u.b.d,m=n.length,r=0;r<n.length;n.length===m||(0,B.M)(n),++r){q=n[r]
if(q.c===D.ael)q.iY(!1)}n=o.a
o.a=n.iY(!n.d)}else if(m===D.ael){for(n=u.b.d,m=n.length,r=0;r<n.length;n.length===m||(0,B.M)(n),++r){q=n[r]
if(q.c===D.aej)q.iY(!1)}n=o.a
o.a=n.iY(!n.d)}else o.a=n.iY(!n.d)
case 12:case 9:case 6:case 3:n=u.b
o=o.a
p=n.b8Z(o.c,o.d)
n.a.d.wj(p.h(0,"format"),p.h(0,"value"))
if(J.p(J.v(n.e,"direction"),"rtl"))n.a.d.wj("align","right")
n.A(new A.bR6())
return B.j(null,v)}})
return B.k($async$$0,v)},
$S:2}
A.bR5.prototype={
$1(d){var w=this.a
J.bY(w.e,"image",d)
w.a.d.a_6(d)},
$S:78}
A.bR6.prototype={
$0(){},
$S:0}
A.bR4.prototype={
$1(d){var w=this.a
return B.a([w.Vn("Small"),w.Vn("Normal"),w.Vn("Large"),w.Vn("Huge")],x.p)},
$S:1020}
A.bR3.prototype={
$1(d){var w,v=this.a
J.bY(v.e,"size",d)
w=v.a.d
w.wj("size",d==="normal"?"":d)
v.A(new A.bR2())},
$S:28}
A.bR2.prototype={
$0(){},
$S:0}
A.bR1.prototype={
$1(d){var w="align",v=this.a,u=v.e
J.bY(u,w,d==="left"?"":d)
v.a.d.wj(w,J.v(v.e,w))
v.A(new A.bR0())},
$S:13}
A.bR0.prototype={
$0(){},
$S:0}
A.bRg.prototype={
$0(){var w=this.a,v=w.r
v===$&&B.b()
if(v.ga0()!=null)w.r.ga0().Ll()},
$S:0}
A.bRf.prototype={
$1(d){var w,v,u="color",t=this.a
J.bY(t.e,u,d)
w=t.d
v=this.b
w[v]=w[v].iY(!0)
t.a.d.wj(u,J.v(t.e,u))
t.A(new A.bRe())
w=t.r
w===$&&B.b()
if(w.ga0()!=null)t.r.ga0().xC()},
$S:78}
A.bRe.prototype={
$0(){},
$S:0}
A.bRd.prototype={
$0(){var w=this.a,v=w.f
v===$&&B.b()
if(v.ga0()!=null)w.f.ga0().Ll()},
$S:0}
A.bRc.prototype={
$1(d){var w,v,u="background",t=this.a
J.bY(t.e,u,d)
w=t.d
v=this.b
w[v]=w[v].iY(!0)
t.a.d.wj(u,J.v(t.e,u))
t.A(new A.bRb())
w=t.f
w===$&&B.b()
if(w.ga0()!=null)t.f.ga0().xC()},
$S:78}
A.bRb.prototype={
$0(){},
$S:0}
A.bRi.prototype={
$0(){var w,v=this.b
if(B.aA(v,null,x.w).w.a.a<480)this.a.bu1(v)
else{v=this.a
w=v.w
w===$&&B.b()
if(w.ga0()!=null)v.w.ga0().Ll()}},
$S:0}
A.bRh.prototype={
$2(d,e){var w,v=this.a
v.a.d.Qp(d,e)
w=v.w
w===$&&B.b()
if(w.ga0()!=null)v.w.ga0().xC()},
$S:449}
A.bRm.prototype={
$1(d){var w=null
return L.iD(w,w,w,new A.q5(new B.eO(new A.bRl(this.a),w),w),C.Q,w,w,new B.d5(B.bF(8),C.y),w,w,w)},
$S:z+11}
A.bRl.prototype={
$1(d){var w=null,v=x.p
return new B.ao(300,310,B.ah(B.a([B.at(B.a([D.bCC,D.awo,B.bW(w,w,w,w,w,w,R.mo,w,w,w,new A.bRj(d),w,w,w,w,w)],v),C.j,C.f,C.U,0,w),B.bh(new A.UL(new A.bRk(this.a,d),8,w),1,w),N.iB],v),C.j,C.bl,C.U,0,w,C.m),w)},
$S:444}
A.bRj.prototype={
$0(){return B.bO(this.a,!1).dM()},
$S:0}
A.bRk.prototype={
$2(d,e){this.a.a.d.Qp(d,e)
B.bO(this.b,!1).dM()},
$S:449}
A.b6C.prototype={
$2(d,e){var w=null
return new A.q5(B.cG(w,new B.a2(C.hk,B.ar(w,w,C.k,w,w,new B.b4(A.bmM(D.Rt[e]),w,B.fG(C.p,C.B,0.3),w,w,w,w,C.L),w,40,w,w,w,w,w,40),w),C.r,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.b6B(this.a,e),w,w,w,w,w,w,w,w,!1,C.aa),w)},
$S:z+12}
A.b6B.prototype={
$0(){this.a.c.$1(D.Rt[this.b])},
$S:0}
A.c6h.prototype={
$0(){var w,v=this.b
if(B.aA(v,null,x.w).w.a.a<480)this.a.btN(!0,v)
else{v=this.a
w=v.d
w===$&&B.b()
if(w.ga0()!=null)v.d.ga0().Ll()}},
$S:0}
A.c6f.prototype={
$0(){var w,v=this,u=v.a
u.a.bP3(v.b)
if(v.c)B.bO(v.d,!1).dM()
else{w=u.d
w===$&&B.b()
if(w.ga0()!=null)u.d.ga0().xC()}},
$S:0}
A.c6g.prototype={
$1(d){return this.a.apv(this.b,d)},
$S:23}
A.c6d.prototype={
$1(d){var w,v=this,u=null,t=x.w
if(B.aA(d,u,t).w.a.a<380)t=O.mb(!0,!0,!0,u,C.v,u,C.r,new A.c6b(v.a,v.b),7,u,u,u,u,u,u,!1,C.I,!0)
else{w=B.a2b(u,C.r,new I.tR(B.aA(d,u,t).w.a.a<380?1:2,0,0,3.3333333333333335),new A.c6c(v.a,v.b),7,u,u,u,C.I,!0)
t=w}return new B.ao(400,u,B.ah(B.a([D.bzx,new B.f6(1,C.bx,new B.a2(C.cD,t,u),u),N.iB],x.p),C.j,C.f,C.U,0,u,C.m),u)},
$S:444}
A.c6b.prototype={
$2(d,e){var w=B.a(D.Ev.slice(0),x.x)
return this.a.a6N(w[e],d,this.b)},
$S:50}
A.c6c.prototype={
$2(d,e){var w=B.a(D.Ev.slice(0),x.x)
return this.a.a6N(w[e],d,this.b)},
$S:50}
A.c6e.prototype={
$2(d,e){var w=B.a(D.Ev.slice(0),x.x)
return this.a.a6N(w[e],d,this.b)},
$S:50}
A.bfV.prototype={
$1(d){var w=this.a,v=w.c
v.toString
return w.biQ(v)},
$S:5}
A.bfP.prototype={
$0(){var w=this.a,v=this.b
w.e=new A.hA(v.gD(0).a,v.gD(0).b,0,0)
w=w.r
if(w!=null)w.hS(0)},
$S:0}
A.bfR.prototype={
$1(d){var w,v,u=this.a
$.au.RG$.push(new A.bfQ(u,d))
w=u.w
w===$&&B.b()
v=u.MK()
return B.pG(B.bG(A.cP1(u.a.e,C.l,w,2,C.bd,v),null,null),0)},
$S:1023}
A.bfQ.prototype={
$1(d){return this.a.b92(this.b)},
$S:5}
A.bfU.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a
q.a.toString
w=this.b
v=w.a
u=q.MK()
t=q.a
s=t.d
v=B.ec(r,A.cP1(t.e,s,r,2,w.d,u),r,r,v.c,r,v.d,r)
u=w.b
u=B.ec(r,new A.amk(s,w.c,16,10,r),r,r,u.c,r,u.d,r)
w=q.MK()
s=q.MK()
return new B.cj(C.ad,r,C.ab,C.v,B.a([new A.q5(new A.az_(!0,C.ay,0.7,new A.bfS(q),r),r),v,u,B.ec(r,B.cG(r,q.a.c,C.r,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.bfT(),r,r,r,r,r,r,r,r,!1,C.aa),r,r,s.c,r,w.d,r)],x.p),r)},
$S:327}
A.bfS.prototype={
$0(){this.a.xC()},
$S:0}
A.bfT.prototype={
$0(){},
$S:0}
A.cdM.prototype={
$0(){var w=0,v=B.l(x.H),u=this,t,s,r
var $async$$0=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=u.b
r=u.a
w=2
return B.d(s.a.e.SR(),$async$$0)
case 2:r.a=e
t=s.f
t===$&&B.b()
if(t.ga0()!=null)s.f.ga0().Ll()
return B.j(null,v)}})
return B.k($async$$0,v)},
$S:2}
A.cdI.prototype={
$1(d){var w=this.a
w.A(new A.cdH(w,d))},
$S:6}
A.cdH.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.cdJ.prototype={
$1(d){if(d==null||d.length===0)return"Can't be empty"
return null},
$S:55}
A.cdK.prototype={
$0(){var w,v,u=this,t=Date.now(),s=u.a
if(t-s.a<500)return
s.a=t
t=u.b
if(t.d.ga0().kc()){s=u.c
if(s!=null){w=t.a.e
v=s.a
if(v==null)v=0
s=s.b
w.TD(0,v,s==null?0:s)}B.hq(W.Mp,null,x.z).aH(new A.cdF(t,u.d,u.e),x.P)}else{t.e=null
t.A(new A.cdG())}},
$S:0}
A.cdF.prototype={
$1(d){var w,v=this.a,u=v.a
u.toString
w=v.e
u.bPH(0,w==null?"":w)
v=v.f
v===$&&B.b()
v.ga0().xC()},
$S:11}
A.cdG.prototype={
$0(){},
$S:0}
A.cdL.prototype={
$0(){var w=Date.now(),v=this.a
if(w-v.b<500)return
v.b=w
w=this.b.f
w===$&&B.b()
w.ga0().xC()},
$S:0}
A.cu7.prototype={
$0(){var w,v,u,t,s=this.a,r=s.d
r.t(0,this.b)
w=B.E(r,B.t(r).i("cI.E"))
C.b.e2(w,new A.cu6())
s.r=C.e.hK(C.b.gZ(w),s.a.d)
s.f=C.e.au(C.b.gZ(w),s.a.d)
r.W(0)
for(v=0,u=0;u<s.a.d;++u)for(t=0;t<s.a.d;++t){if(u<=s.r&&t<=s.f)r.t(0,v);++v}},
$S:0}
A.cu6.prototype={
$2(d,e){return d-e},
$S:248}
A.cu8.prototype={
$2(d,e){var w=null,v=this.a.d,u=v.p(0,e)?H.C0:C.C,t=v.p(0,e)?2:1
return new A.VS(e,B.ar(w,w,C.k,w,w,new B.b4(u,w,B.fG(v.p(0,e)?H.LL:C.lX,C.B,t),w,w,w,w,C.L),w,w,w,M.m8,w,w,w,w),w)},
$S:z+15}
A.cu5.prototype={
$0(){this.a.d.W(0)},
$S:0}
A.bnP.prototype={
$2(d,e){return d+C.d.aU("\n",2)+e},
$S:131}
A.bnQ.prototype={
$1(d){var w=d.b[1]
w.toString
return"<"+this.a+w+"> \n"+this.b},
$S:63}
A.cA4.prototype={
$0(){var w=this.a,v=w.w
v===$&&B.b()
w.azr(v.c.a)},
$S:7}
A.cA1.prototype={
$1(d){var w=this.a.d
w===$&&B.b()
return w},
$S:1024}
A.czX.prototype={
$1(d){var w,v,u,t=this.a
t.r=d
for(w=t.a.y,w=B.e5(w,w.r,B.t(w).c),v=w.$ti.c;w.q();){u=w.d
if(u==null)u=v.a(u)
t.r.m(0,u.a,u.b)}t.r.m(0,"WebOnClickInsideIframe",new A.czW(t))
w=t.w
w===$&&B.b()
w.a=t.r
this.b.$0()},
$S:z+16}
A.czW.prototype={
$1(d){this.a.VT(B.b9(d))},
$S:11}
A.cA0.prototype={
$1(d){var w,v,u=this.a
u.e===$&&B.b()
w=u.a
w.toString
v=u.x
v===$&&B.b()
if(!v){u.x=!0
w=u.w
w===$&&B.b()
u.anx(w.c.a.a)}else{u=u.w
u===$&&B.b()
w.ax.$1(u.c.a.a)}},
$S:183}
A.czY.prototype={
$2(d,e){return d+"; "+e},
$S:131}
A.czZ.prototype={
$0(){var w=this.a,v=w.w
v===$&&B.b()
w.y=v.b.a},
$S:0}
A.cA_.prototype={
$1(d){var w=J.a1(d)
return new B.bE(J.aq(w.h(d,0)),J.aq(w.h(d,1)),x.J)},
$S:1025}
A.cA2.prototype={
$1(d){var w,v=this,u=v.a,t=v.b,s=A.cRK(D.awa,d,'      <base href="'+t+"\">\n      <script>\n\n      document.addEventListener('click', e => {\n        if (frameElement && document.activeElement && document.activeElement.href) {\n          e.preventDefault()\n\n          var returnedObject = JSON.stringify({method: 'get', href: document.activeElement.href});\n          frameElement.contentWindow.WebOnClickInsideIframe && frameElement.contentWindow.WebOnClickInsideIframe(returnedObject)\n        }\n      })\n      document.addEventListener('submit', e => {\n        if (frameElement && document.activeElement && document.activeElement.form && document.activeElement.form.action) {\n          e.preventDefault()\n\n          if (document.activeElement.form.method === 'post') {\n            var formData = new FormData(document.activeElement.form);\n            \n            var returnedObject = JSON.stringify({method: 'post', href: document.activeElement.form.action, body: [...formData]});\n            frameElement.contentWindow.WebOnClickInsideIframe && frameElement.contentWindow.WebOnClickInsideIframe(returnedObject)\n          } else {\n            var urlWithQueryParams = document.activeElement.form.action + '?' + new URLSearchParams(new FormData(document.activeElement.form))\n\n            var returnedObject = JSON.stringify({method: 'get', href: urlWithQueryParams});\n            frameElement.contentWindow.WebOnClickInsideIframe && frameElement.contentWindow.WebOnClickInsideIframe(returnedObject)\n          }\n        }\n      })\n      </script>\n      "),r=u.d
r===$&&B.b()
u.a.toString
w=u.e
w===$&&B.b()
r.srcdoc=A.cHH(s,!0,D.Hb,w)
w=u.w
w===$&&B.b()
w.c.bzy(new A.MX(t,D.add,v.c,v.d))
u.a.toString},
$S:78}
A.cA3.prototype={
$1(d){var w=this.a
w.a.toString
B.o(d)
w.a.toString},
$S:11};(function aliases(){var w=A.px.prototype
w.aTo=w.h
w.aTp=w.m
w=A.WD.prototype
w.alP=w.m})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_1u
w(A,"dCY","cKY",17)
w(A,"dCX","cKX",18)
var t
v(t=A.aAR.prototype,"gbpf","av0",0)
v(t,"gbwi","Y4",0)
v(t,"gbpe","av_",0)
v(t,"gbpd","auZ",0)
v(t,"gb0i","amU",0)
v(t,"gbpc","auY",0)
v(t,"gbix","at5",0)
v(t,"gbiv","at3",0)
v(t,"gbiw","at4",0)
v(t,"gbry","avV",0)
v(t,"gbrw","avT",0)
v(t,"gbrx","avU",0)
u(t=A.ahT.prototype,"gb5e","b5f",13)
u(t,"gbmR","bmS",14)
v(A.abs.prototype,"gfv","l",1)
v(t=A.aiV.prototype,"gb1R","any",1)
v(t,"gazT","byH",1)
v(t,"garD","bc6",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.c8,[A.cB2,A.cB3,A.cCB,A.cCC,A.cCD,A.bnB,A.bnC,A.bnA,A.bnD,A.bnz,A.bnE,A.bny,A.cch,A.ccf,A.ccb,A.cca,A.ccd,A.ccc,A.bCB,A.bCA,A.bCC,A.bCq,A.bCt,A.bCu,A.bCv,A.bCw,A.bCx,A.bCy,A.bCz,A.bCo,A.bCn,A.cBB,A.bR7,A.bR8,A.bR9,A.bR5,A.bR4,A.bR3,A.bR1,A.bRf,A.bRc,A.bRm,A.bRl,A.c6g,A.c6d,A.bfV,A.bfR,A.bfQ,A.bfU,A.cdI,A.cdJ,A.cdF,A.bnQ,A.cA1,A.czX,A.czW,A.cA0,A.cA_,A.cA2,A.cA3])
u(B.G,[A.px,A.aBs,A.Fm,A.hA,A.aAR,A.nW,A.bpg,A.b8k,A.uM,A.auh,A.bWd,A.CD,A.MX])
u(A.px,[A.RG,A.WD])
t(A.Jx,A.WD)
t(A.HB,B.eJ)
u(B.ac,[A.S5,A.a65,A.Mh,A.a_8,A.amk,A.az_,A.q5])
u(B.J,[A.a2t,A.a6A,A.aa5,A.a0Z,A.a12,A.Zx,A.Rv,A.UL,A.abr])
u(B.O,[A.aP_,A.a6B,A.aa6,A.aNE,A.aNM,A.aLn,A.aPy,A.ahT,A.aiV])
u(B.cL,[A.cci,A.ccj,A.ccg,A.cc9,A.cce,A.bCp,A.bCs,A.bCr,A.bRn,A.bRa,A.bR6,A.bR2,A.bR0,A.bRg,A.bRe,A.bRd,A.bRb,A.bRi,A.bRj,A.b6B,A.c6h,A.c6f,A.bfP,A.bfS,A.bfT,A.cdM,A.cdH,A.cdK,A.cdG,A.cdL,A.cu7,A.cu5,A.cA4,A.czZ])
u(B.eg,[A.bCE,A.bCD,A.bRh,A.bRk,A.b6C,A.c6b,A.c6c,A.c6e,A.cu6,A.cu8,A.bnP,A.czY])
u(B.eT,[A.jQ,A.t5,A.pj,A.bq8,A.aHm,A.a19,A.a8Y,A.bqF,A.b30])
t(A.auc,B.K)
t(A.a13,A.aNM)
u(B.rZ,[A.aoy,A.aGn])
t(A.VS,B.bB)
t(A.VR,B.vA)
t(A.abs,B.hx)
u(A.CD,[A.anf,A.aoc,A.aI_])
w(A.WD,B.a3)
v(A.aNM,B.eB)})()
B.c5(b.typeUniverse,JSON.parse('{"RG":{"px":[]},"Jx":{"a3":["1"],"B":["1"],"b_":["1"],"px":[],"y":["1"],"a3.E":"1","y.E":"1"},"HB":{"eJ":[],"bu":[],"bn":[],"e":[]},"S5":{"ac":[],"e":[]},"a2t":{"J":[],"e":[]},"aP_":{"O":["a2t"]},"a65":{"ac":[],"e":[]},"a6A":{"J":[],"e":[]},"a6B":{"O":["a6A"]},"aa5":{"J":[],"e":[]},"aa6":{"O":["aa5"]},"Mh":{"ac":[],"e":[]},"auc":{"K":[]},"a_8":{"ac":[],"e":[]},"a0Z":{"J":[],"e":[]},"aNE":{"O":["a0Z"]},"a12":{"J":[],"e":[]},"a13":{"O":["a12"],"eB":[]},"amk":{"ac":[],"e":[]},"Zx":{"J":[],"e":[]},"aLn":{"O":["Zx"]},"az_":{"ac":[],"e":[]},"aoy":{"ay":[]},"aGn":{"ay":[]},"Rv":{"J":[],"e":[]},"aPy":{"O":["Rv"]},"UL":{"J":[],"e":[]},"VS":{"bB":[],"aM":[],"e":[]},"VR":{"Z":[],"bp":["Z"],"Y":[],"aN":[]},"ahT":{"O":["UL"]},"abs":{"ay":[],"abt":["px"]},"anf":{"CD":[]},"aoc":{"CD":[]},"aI_":{"CD":[]},"q5":{"ac":[],"e":[]},"abr":{"J":[],"e":[]},"aiV":{"O":["abr"]}}'))
B.uj(b.typeUniverse,JSON.parse('{"WD":1,"abt":1}'))
var y={b:"packages/quill_html_editor/assets/insert_table.png"}
var x=(function rtii(){var w=B.D
return{B:w("yQ"),W:w("CD"),v:w("eQ"),C:w("uM"),k:w("aI"),D:w("cO"),Z:w("mF"),_:w("X<@>"),F:w("X<m?>"),K:w("auh<MX>"),t:w("Jl"),G:w("u<m8<m>>"),g:w("u<m8<@>>"),x:w("u<t5>"),L:w("u<pq<aN>>"),O:w("u<c6>"),d:w("u<iX>"),M:w("u<tx>"),s:w("u<m>"),c:w("u<Mh>"),f:w("u<jQ>"),p:w("u<e>"),b:w("u<NP>"),a:w("u<b5>"),R:w("Jx<@>"),l:w("RI"),q:w("aS<a13>"),m:w("aS<pn>"),h:w("aS<a6B>"),A:w("aS<O<J>>"),U:w("aS<aa6>"),j:w("B<@>"),J:w("bE<m,m>"),i:w("A<m,@>"),w:w("hs"),V:w("cR"),P:w("aF"),u:w("ty"),r:w("Z"),n:w("Fm"),N:w("m"),Q:w("jk"),X:w("cm<m>"),Y:w("bL<x>"),o:w("MX"),aX:w("d8<pW>"),cg:w("MY"),bj:w("yb"),e:w("VR"),E:w("aNO<cO>"),I:w("ak<m>"),y:w("x"),z:w("@"),S:w("f"),T:w("m?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.bSm=new A.b30(0,"requireUserActionForAllMediaTypes")
D.akx=new A.anf()
D.akB=new A.aoc()
D.am6=new A.aI_()
D.aGB=B.a(w([D.akx,D.akB,D.am6]),B.D("u<CD>"))
D.aQu=B.a(w(["allow-downloads","allow-forms","allow-modals","allow-orientation-lock","allow-pointer-lock","allow-popups","allow-popups-to-escape-sandbox","allow-presentation","allow-same-origin"]),x.s)
D.aNc=B.a(w(["accelerometer","clipboard-write","encrypted-media","gyroscope","picture-in-picture"]),x.s)
D.bSv=new A.b8k()
D.am8=new A.bWd()
D.amK=new B.z3(C.A0,0.4,null,null,null,null,null,null,null)
D.amD=new B.kS(C.N,null,null,D.amK,null)
D.ave=new B.am(10,10,0,0)
D.avV=new A.pj(0,"topStart")
D.MV=new A.pj(1,"topCenter")
D.avW=new A.pj(10,"leftCenter")
D.avX=new A.pj(11,"leftEnd")
D.avY=new A.pj(2,"topEnd")
D.avZ=new A.pj(3,"rightStart")
D.aw_=new A.pj(4,"rightCenter")
D.aw0=new A.pj(5,"rightEnd")
D.aw1=new A.pj(6,"bottomStart")
D.aw2=new A.pj(7,"bottomCenter")
D.aw3=new A.pj(8,"bottomEnd")
D.aw4=new A.pj(9,"leftStart")
D.MW=new A.hA(0,0,0,0)
D.aw5=new A.hA(16,10,0,0)
D.aw9=new A.a19(1,"aboveBodyCloseTag")
D.awa=new A.a19(2,"belowHeadOpenTag")
D.awb=new A.a19(3,"aboveHeadCloseTag")
D.bFe=new B.a5(!0,null,null,null,null,null,16,C.fg,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bIO=new B.cs("Select Rows x Columns",null,D.bFe,null,null,null,null,null,null,null,null,null,null,null,null)
D.awo=new B.oj(1,C.fP,D.bIO,null)
D.ay_=new B.aB(58027,"MaterialIcons",null,!1)
D.ay0=new B.aB(58028,"MaterialIcons",null,!1)
D.ay1=new B.aB(58029,"MaterialIcons",null,!1)
D.ay2=new B.aB(58030,"MaterialIcons",null,!1)
D.ay9=new B.aB(58240,"MaterialIcons",null,!1)
D.ayE=new B.aB(59812,"MaterialIcons",null,!1)
D.ayF=new B.aB(59816,"MaterialIcons",null,!1)
D.O4=new B.aB(59818,"MaterialIcons",null,!1)
D.ayG=new B.aB(59819,"MaterialIcons",null,!1)
D.ayH=new B.aB(59823,"MaterialIcons",null,!0)
D.ayI=new B.aB(59824,"MaterialIcons",null,!0)
D.ayJ=new B.aB(59825,"MaterialIcons",null,!1)
D.ayK=new B.aB(59827,"MaterialIcons",null,!0)
D.ayL=new B.aB(59829,"MaterialIcons",null,!1)
D.ayM=new B.aB(59831,"MaterialIcons",null,!1)
D.ayN=new B.aB(59834,"MaterialIcons",null,!1)
D.ayO=new B.aB(59835,"MaterialIcons",null,!1)
D.ayP=new B.aB(59836,"MaterialIcons",null,!1)
D.ayQ=new B.aB(59837,"MaterialIcons",null,!1)
D.ayR=new B.aB(60007,"MaterialIcons",null,!1)
D.ayS=new B.aB(60424,"MaterialIcons",null,!0)
D.ayT=new B.aB(60802,"MaterialIcons",null,!0)
D.aza=new B.aB(63047,"MaterialIcons",null,!1)
D.azv=new B.d2(D.aza,null,C.ds,null,null)
D.az9=new B.aB(63030,"MaterialIcons",null,!1)
D.azT=new B.d2(D.az9,null,C.e7,null,null)
D.bSZ=new A.bq8(0,"newline")
D.bGN=new B.a5(!0,null,null,null,null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aAx=new B.pv(null,null,null,null,null,null,null,null,null,null," Type URL",null,D.bGN,null,null,null,!0,!0,null,null,null,null,null,null,null,C.MP,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,C.dB,null,null,null,null,C.dB,!0,null,!0,null)
D.bT1=new A.bqF(1,"unrestricted")
D.Rt=B.a(w(["#000000","#FFFFFF","#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"]),x.s)
D.avO=new A.t5(0,"insertRowAbove")
D.avP=new A.t5(1,"insertRowBelow")
D.avQ=new A.t5(2,"insertColumnLeft")
D.avR=new A.t5(3,"insertColumnRight")
D.avS=new A.t5(4,"deleteRow")
D.avT=new A.t5(5,"deleteColumn")
D.avU=new A.t5(6,"deleteTable")
D.Ev=B.a(w([D.avO,D.avP,D.avQ,D.avR,D.avS,D.avT,D.avU]),x.x)
D.bJf=new B.cs("Edit Table",null,V.zF,null,null,null,null,null,null,null,null,null,null,null,null)
D.bwa=new B.a2(S.iZ,D.bJf,null)
D.awp=new B.oj(1,C.fP,D.bwa,null)
D.aKt=B.a(w([D.awp,A0.amO]),x.p)
D.bzx=new B.kG(C.a7,C.f,C.i,C.j,null,C.m,null,C.k,0,D.aKt,null)
D.Hb=new B.hn(C.db,0,B.D("hn<dHM>"))
D.bCy=new B.ao(0,null,null,null)
D.bCC=new B.ao(15,null,null,null)
D.bCS=new I.tR(4,0,0,1)
D.adb=new A.a8Y(0,"html")
D.adc=new A.a8Y(1,"url")
D.add=new A.a8Y(2,"urlBypass")
D.bHa=new B.a5(!0,null,null,'"PT Sans", Calibri, Tahoma, sans-serif',null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bIj=new B.a5(!0,C.cR,null,null,null,null,18,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bKE=new A.jQ("Add a table",25,"addTable")
D.aei=new A.jQ("Alignment",14,"align")
D.aej=new A.jQ("Header H1",10,"headerOne")
D.bKF=new A.jQ("Bold",0,"bold")
D.bKG=new A.jQ("Clear History",24,"clearHistory")
D.aek=new A.jQ("Hyperlink",18,"link")
D.bKH=new A.jQ("Edit table",26,"editTable")
D.bKI=new A.jQ("Italic",1,"italic")
D.bKJ=new A.jQ("Redo",23,"redo")
D.bKK=new A.jQ("Strikethrough",3,"strike")
D.bKL=new A.jQ("Underline",2,"underline")
D.bKM=new A.jQ("Undo",22,"undo")
D.bKN=new A.jQ("Insert image",19,"image")
D.bKO=new A.jQ("Font Size",17,"size")
D.ael=new A.jQ("Header H2",11,"headerTwo")
D.bKP=new A.jQ("Background color",13,"background")
D.aem=new A.jQ("Clears all formats",21,"clean")
D.bKQ=new A.jQ("separator",27,"separator")
D.bKR=new A.jQ("Insert Youtube/Url",20,"video")
D.bKS=new A.jQ("Font color",12,"color")
D.bNo=new A.aHm(0,"video")
D.bNp=new A.aHm(1,"hyperlink")})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"dNm","d5B",()=>A.d_M(self))
w($,"dMj","cNi",()=>B.d0r("_$dart_dartObject"))
w($,"dNq","cNq",()=>function DartObject(d){this.o=d})
v($,"dOS","d6B",()=>B.cJ3(null))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_303",e:"endPart",h:b})})($__dart_deferred_initializers__,"iwFFYjNPU56CiaalQRpr2cQQ+BE=");