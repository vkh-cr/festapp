((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_320",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,O,P,Y,Q,I,R,S,Z,A_,T,A0,A1,A2,A3,U,A4,G,K,L,A5,A6,M,H,V,N,A7,A8,A9,W,A={
diO(d,e,f,g){var w,v
if(e){w=[f]
C.b.H(w,g)
g=w}v=x.z
return A.cCj(F.d4O(d,B.aZ(J.bX(g,A.dqU(),v),!0,v),null))},
d6j(d,e,f){var w=null
if(d<0||d>f)throw B.n(B.fs(d,0,f,w,w))
if(e<d||e>f)throw B.n(B.fs(e,d,f,w,w))},
cCo(d,e,f){var w
try{if(Object.isExtensible(d)&&!Object.prototype.hasOwnProperty.call(d,e)){Object.defineProperty(d,e,{value:f})
return!0}}catch(w){}return!1},
cR1(d,e){if(Object.prototype.hasOwnProperty.call(d,e))return d[e]
return null},
cCj(d){if(d==null||typeof d=="string"||typeof d=="number"||B.kz(d))return d
if(d instanceof A.pk)return d.a
if(A.cSR(d))return d
if(x.Q.b(d))return d
if(d instanceof B.b_)return B.my(d)
if(x.Z.b(d))return A.cR0(d,"$dart_jsFunction",new A.csk())
return A.cR0(d,"_$dart_jsObject",new A.csl($.cEJ()))},
cR0(d,e,f){var w=A.cR1(d,e)
if(w==null){w=f.$1(d)
A.cCo(d,e,w)}return w},
cCi(d){if(d==null||typeof d=="string"||typeof d=="number"||typeof d=="boolean")return d
else if(d instanceof Object&&A.cSR(d))return d
else if(d instanceof Object&&x.Q.b(d))return d
else if(d instanceof Date)return new B.b_(B.jU(d.getTime(),0,!1),0,!1)
else if(d.constructor===$.cEJ())return d.o
else return A.cRZ(d)},
cRZ(d){if(typeof d=="function")return A.cCA(d,$.Ns(),new A.ctS())
if(d instanceof Array)return A.cCA(d,$.cEC(),new A.ctT())
return A.cCA(d,$.cEC(),new A.ctU())},
cCA(d,e,f){var w=A.cR1(d,e)
if(w==null||!(d instanceof Object)){w=f.$1(d)
A.cCo(d,e,w)}return w},
csk:function csk(){},
csl:function csl(d){this.a=d},
ctS:function ctS(){},
ctT:function ctT(){},
ctU:function ctU(){},
pk:function pk(d){this.a=d},
R5:function R5(d){this.a=d},
IQ:function IQ(d,e){this.a=d
this.$ti=e},
VK:function VK(){},
cGb(d,e,f){var w=null
return new A.GO(B.cxy(d,w,w,w,w,36,w,w,C.J6,w,88,f,w,w,C.AO),e,w)},
GO:function GO(d,e,f){this.w=d
this.b=e
this.a=f},
Rv:function Rv(d,e,f,g,h){var _=this
_.c=d
_.y=e
_.dx=f
_.fx=g
_.a=h},
cJ4(d){var w=B.bA("(background-color|color)\\s*:\\s*[^;]+;?\\s*",!1,!1,!1)
return B.dz(d,w,"")},
cJ2(d){var w,v,u,t,s,r,q,p,o,n=B.bA("\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b",!0,!1,!1),m=B.bA("\\b((http|https)://|www\\.)[^\\s/$.?#].\\S*",!1,!1,!1),l=B.bA("\\b(\\+?[0-9]{1,4}[-.\\s]+)?(\\(?\\d{2,3}\\)?[-.\\s]+)?\\d{3}[-.\\s]+\\d{3}[-.\\s]+\\d{3,4}\\b",!0,!1,!1),k=Aa.Xc(d),j=new A.bko(),i=k.grb(0)
i.toString
i=F.Xe(i,"*")
w=i.length
v=x.i
u=v.i("y.E")
t=x.d
s=0
for(;s<i.length;i.length===w||(0,B.T)(i),++s){r=i[s]
if(r.x==="a")continue
q=r.c
if(q===$){p=B.a([],t)
r.c!==$&&B.ad()
q=r.c=new F.h4(r,p)}C.b.aR(B.G(new B.e6(q,v),!0,u),new A.bkp(n,j))}i=k.grb(0)
i.toString
i=F.Xe(i,"*")
w=i.length
s=0
for(;s<i.length;i.length===w||(0,B.T)(i),++s){r=i[s]
if(r.x==="a")continue
q=r.c
if(q===$){p=B.a([],t)
r.c!==$&&B.ad()
q=r.c=new F.h4(r,p)}C.b.aR(B.G(new B.e6(q,v),!0,u),new A.bkq(m,j))}i=k.grb(0)
i.toString
i=F.Xe(i,"*")
w=i.length
s=0
for(;s<i.length;i.length===w||(0,B.T)(i),++s){r=i[s]
if(r.x==="a")continue
q=r.c
if(q===$){p=B.a([],t)
r.c!==$&&B.ad()
q=r.c=new F.h4(r,p)}C.b.aR(B.G(new B.e6(q,v),!0,u),new A.bkr(l,j))}o=new B.d9("")
k.grb(0).TJ(o)
i=o.a
return i.charCodeAt(0)==0?i:i},
bko:function bko(){},
bkp:function bkp(d,e){this.a=d
this.b=e},
bkn:function bkn(d,e){this.a=d
this.b=e},
bkq:function bkq(d,e){this.a=d
this.b=e},
bkm:function bkm(d,e){this.a=d
this.b=e},
bkr:function bkr(d,e){this.a=d
this.b=e},
bkl:function bkl(d,e){this.a=d
this.b=e},
cJ1(d,e){return new A.a1e(e,d,null)},
a1e:function a1e(d,e,f){this.c=d
this.d=e
this.a=f},
aML:function aML(d,e){var _=this
_.d=$
_.e=!0
_.f=d
_.r=e
_.c=_.a=null},
c5D:function c5D(d){this.a=d},
c5E:function c5E(){},
c5F:function c5F(d){this.a=d},
c5C:function c5C(d){this.a=d},
c5B:function c5B(d){this.a=d},
c5x:function c5x(d){this.a=d},
c5v:function c5v(){},
c5w:function c5w(){},
c5A:function c5A(){},
c5z:function c5z(){},
c5y:function c5y(){},
a4I:function a4I(d,e,f){this.c=d
this.e=e
this.a=f},
cMw(d){var w=new A.Eu(null,null),v=J.a2(d)
w.a=v.h(d,"index")
w.b=v.h(d,"length")
return w},
cR3(d){return B.f0(B.QZ(d,new A.csT(),x.S),0,null)},
a5a:function a5a(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
a5b:function a5b(){var _=this
_.d=$
_.e=""
_.f=!0
_.r=$
_.w=!1
_.x=""
_.Q=_.z=_.y=$
_.as=!1
_.c=_.a=null},
byS:function byS(d){this.a=d},
byR:function byR(d){this.a=d},
byP:function byP(d){this.a=d},
byO:function byO(d){this.a=d},
byQ:function byQ(d){this.a=d},
byE:function byE(d){this.a=d},
byD:function byD(){},
byH:function byH(d){this.a=d},
byG:function byG(d){this.a=d},
byI:function byI(d){this.a=d},
byJ:function byJ(d){this.a=d},
byK:function byK(d,e){this.a=d
this.b=e},
byL:function byL(d){this.a=d},
byM:function byM(d){this.a=d},
byN:function byN(d){this.a=d},
byF:function byF(){},
azq:function azq(){var _=this
_.d=_.c=_.b=_.a=null
_.e=!0},
byC:function byC(d){this.a=d},
byB:function byB(d){this.a=d},
Eu:function Eu(d,e){this.a=d
this.b=e},
csT:function csT(){},
ddb(d,e,f,g,h,i,j){return new A.LC(j,g,h,i,f,e,d,null)},
a8B:function a8B(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
a8C:function a8C(d,e,f){var _=this
_.d=d
_.e=e
_.w=_.r=_.f=$
_.x=f
_.c=_.a=null},
bMR:function bMR(){},
bMB:function bMB(d){this.a=d},
bMC:function bMC(d){this.a=d},
bMD:function bMD(d){this.a=d},
bME:function bME(d,e){this.a=d
this.b=e},
bMz:function bMz(d){this.a=d},
bMA:function bMA(){},
bMy:function bMy(d){this.a=d},
bMx:function bMx(d){this.a=d},
bMw:function bMw(){},
bMv:function bMv(d){this.a=d},
bMu:function bMu(){},
bMK:function bMK(d){this.a=d},
bMJ:function bMJ(d,e){this.a=d
this.b=e},
bMI:function bMI(){},
bMH:function bMH(d){this.a=d},
bMG:function bMG(d,e){this.a=d
this.b=e},
bMF:function bMF(){},
bMM:function bMM(d,e){this.a=d
this.b=e},
bML:function bML(d){this.a=d},
bMQ:function bMQ(d){this.a=d},
bMP:function bMP(d){this.a=d},
bMN:function bMN(d){this.a=d},
bMO:function bMO(d,e){this.a=d
this.b=e},
LC:function LC(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
jI:function jI(d,e,f){this.c=d
this.a=e
this.b=f},
d5q(d){var w=B.bA("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$",!0,!1,!1)
if(!w.b.test(d.toLowerCase()))return C.E.an()
d=B.dz(d.toUpperCase(),"#","")
return B.dk(d.length===6?"FF"+d:d,16)},
bjz(d){var w=A.d5q(d)
return new A.asm((C.c.S(w,24)&255)/255,(C.c.S(w,16)&255)/255,(C.c.S(w,8)&255)/255,(w&255)/255,C.j)},
a8x(d){var w,v=""
try{v="rgba("+C.b.c5(B.a([d.gR9(),d.gKL(),d.gOg(),B.oR(C.d.bj(d.geW(d),1))],x.a),",")+")"}catch(w){v="rgba(0,0,0,0)"}return v},
asm:function asm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Z3:function Z3(d,e){this.c=d
this.a=e},
b3V:function b3V(d){this.a=d},
b3U:function b3U(d,e){this.a=d
this.b=e},
a_O:function a_O(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aLs:function aLs(){this.d=$
this.c=this.a=null},
c_e:function c_e(d,e){this.a=d
this.b=e},
c_c:function c_c(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c_d:function c_d(d,e){this.a=d
this.b=e},
c_a:function c_a(d,e){this.a=d
this.b=e},
c_8:function c_8(d,e){this.a=d
this.b=e},
c_9:function c_9(d,e){this.a=d
this.b=e},
c_b:function c_b(d,e){this.a=d
this.b=e},
rH:function rH(d,e){this.a=d
this.b=e},
aqa(d,e,f,g,h,i){return new A.a_S(d,e,f,g,i,h)},
a_S:function a_S(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.Q=h
_.a=i},
a_T:function a_T(d,e,f){var _=this
_.e=d
_.r=_.f=null
_.w=$
_.x=e
_.y=f
_.c=_.a=null},
bcU:function bcU(d){this.a=d},
bcO:function bcO(d,e){this.a=d
this.b=e},
bcQ:function bcQ(d){this.a=d},
bcP:function bcP(d,e){this.a=d
this.b=e},
bcT:function bcT(d,e){this.a=d
this.b=e},
bcR:function bcR(d){this.a=d},
bcS:function bcS(){},
aLz:function aLz(){},
akw:function akw(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cGa(d,e,f,g,h,i){return new A.Yu(e,g,h,d,f)},
Yu:function Yu(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.a=h},
aJd:function aJd(){this.c=this.a=null},
hn:function hn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
p8:function p8(d,e){this.a=d
this.b=e},
awX:function awX(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
amC:function amC(d,e){this.b=d
this.a=e},
aEf:function aEf(d,e){this.b=d
this.a=e},
ayP:function ayP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
nC:function nC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bmS:function bmS(d,e){this.a=d
this.b=e},
bm_:function bm_(d){this.a=d},
QU:function QU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aNh:function aNh(d){var _=this
_.d=d
_.e=""
_.f=$
_.c=_.a=null},
c71:function c71(d,e){this.a=d
this.b=e},
c6Y:function c6Y(d){this.a=d},
c6X:function c6X(d,e){this.a=d
this.b=e},
c6Z:function c6Z(){},
c7_:function c7_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c6V:function c6V(d,e,f){this.a=d
this.b=e
this.c=f},
c6W:function c6W(){},
c70:function c70(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFe:function aFe(d,e){this.a=d
this.b=e},
TU:function TU(d,e,f){this.c=d
this.d=e
this.a=f},
aga:function aga(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=f
_.c=_.a=null},
clD:function clD(d,e){this.a=d
this.b=e},
clC:function clC(){},
clE:function clE(d){this.a=d},
clB:function clB(d){this.a=d},
UX:function UX(d,e,f){this.e=d
this.c=e
this.a=f},
UW:function UW(d,e,f,g){var _=this
_.I=d
_.G$=e
_.fx=f
_.b=_.id=null
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
_.dx=null
_.dy=!0
_.fr=null},
a9X:function a9X(d,e,f){var _=this
_.a=$
_.b=d
_.c=e
_.O$=0
_.P$=f
_.b3$=_.bb$=0},
b5z:function b5z(){},
ul:function ul(d,e){this.a=d
this.b=e},
cyY(d,e,f,g){var w,v,u,t=C.e.br(d).toLowerCase()
if(!(C.e.be(t,B.bA("<!DOCTYPE html>",!1,!1,!1))&&C.e.n(t,B.bA("<html",!1,!1,!1))&&C.e.n(t,B.bA("</html>",!1,!1,!1))))t='    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>IFrame '+g+"</title>\n    </head>\n    <body>\n    "+d+"\n    </body>\n    </html>\n    "
else t=d
w=x.N
t=A.cJ6(t,B.dq(["parent.connect_js_to_flutter"+g+" && parent.connect_js_to_flutter"+g+"(window)"],w),D.ase)
if(f.gdc(f)){v=B.aT(w)
for(w=f.ga6(f);w.q();){u=w.gL(0)
u.gbIp()
v.t(0,u.gbIp())}t=A.cJ6(t,v,D.asc)}return t},
cJ6(d,e,f){return A.cJ5(f,d,"\n<script>\n"+e.hf(0,new A.bkC())+"\n</script>\n")},
cJ7(d,e,f){var w=B.bA("<"+d+"([^>]*)>",!1,!1,!1)
B.Sx(0,0,e.length,"startIndex")
return B.dst(e,w,new A.bkD(d,f),0)},
cJ5(d,e,f){var w
switch(d.a){case 2:return A.cJ7("head",e,f)
case 0:return A.cJ7("body",e,f)
case 3:w=C.e.dS(e,"</head>")
return C.e.a8(e,0,w)+f+"\n"+C.e.d7(e,w)
case 1:w=C.e.dS(e,"</body>")
return C.e.a8(e,0,w)+f+"\n"+C.e.d7(e,w)}},
a_Z:function a_Z(d,e){this.a=d
this.b=e},
bkC:function bkC(){},
bkD:function bkD(d,e){this.a=d
this.b=e},
a7v:function a7v(d,e){this.a=d
this.b=e},
asr:function asr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
bRF:function bRF(){},
BH:function BH(){},
alq:function alq(){},
amf:function amf(){},
aFQ:function aFQ(){},
pN:function pN(d,e){this.c=d
this.a=e},
Mf:function Mf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bnm:function bnm(d,e){this.a=d
this.b=e},
b0q:function b0q(d,e){this.a=d
this.b=e},
a9W:function a9W(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ahb:function ahb(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cro:function cro(d){this.a=d},
crl:function crl(d){this.a=d},
crg:function crg(d,e){this.a=d
this.b=e},
crf:function crf(d){this.a=d},
crk:function crk(d){this.a=d},
crh:function crh(){},
cri:function cri(d){this.a=d},
crj:function crj(){},
crm:function crm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
crn:function crn(d,e){this.a=d
this.b=e},
cSR(d){return x.B.b(d)||x.D.b(d)||x.l.b(d)||x.t.b(d)||x.U.b(d)||x.o.b(d)||x.bj.b(d)},
cHW(d,e,f,g,h,i,j,k,l,m,n){var w=null
return new G.Cb(i,m,w,w,j,w,k,8,l,g,w,w,24,!0,!1,48,f,w,!1,e,w,w,w,d,w,w,!1,w,n.i("Cb<0>"))},
Yy(d,e){var w=null,v=B.c5(8)
return new B.a5(C.aC,new A.Rv(d,C.aU,B.S(e,w,w,w,w,w,w,w,B.aA(w,w,C.hL,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w,w,w),new B.d8(v,C.z),w),w)},
cNd(d){var w=C.a1a.h(0,(d==null?C.a6:d).a)
w.toString
return B.dz(w,"w","")},
dbu(d){var w=B.dr(d,0,null)
if(C.e.n(w.goG(w).toLowerCase(),"youtube"))return A.dbt(d)
else if(C.e.n(w.goG(w).toLowerCase(),"vimeo"))return A.dbs(d)
else return d},
dbt(d){var w,v,u,t
if(!C.e.n(d,"http")&&d.length===11)return d
C.e.br(d)
for(w=[B.bA("^https:\\/\\/(?:www\\.|m\\.)?youtube\\.com\\/watch\\?v=([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bA("^https:\\/\\/(?:music\\.)?youtube\\.com\\/watch\\?v=([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bA("^https:\\/\\/(?:www\\.|m\\.)?youtube\\.com\\/shorts\\/([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bA("^https:\\/\\/(?:www\\.|m\\.)?youtube(?:-nocookie)?\\.com\\/embed\\/([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bA("^https:\\/\\/youtu\\.be\\/([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1)],v=null,u=0;u<5;++u){t=w[u].rN(d)
if(t!=null&&t.b.length-1>=1)v=t.b[1]}if(v==null)return null
return"https://www.youtube.com/embed/"+v},
dbs(d){var w=B.bA("(?:http|https)?:?\\/?\\/?(?:www\\.)?(?:player\\.)?vimeo\\.com\\/(?:channels\\/(?:\\w+\\/)?|groups\\/(?:[^\\/]*)\\/videos\\/|video\\/|)(\\d+)(?:|\\/\\?)",!1,!1,!1).rN(d),v=w==null?null:w.b[1]
if(v==null)return null
return"https://player.vimeo.com/video/"+v}},D,Aa,Ab,F,E,X,Ac,Ad,Ae
J=c[1]
B=c[0]
C=c[2]
O=c[183]
P=c[179]
Y=c[290]
Q=c[180]
I=c[153]
R=c[171]
S=c[277]
Z=c[362]
A_=c[219]
T=c[324]
A0=c[210]
A1=c[200]
A2=c[237]
A3=c[164]
U=c[241]
A4=c[160]
G=c[125]
K=c[359]
L=c[113]
A5=c[361]
A6=c[191]
M=c[286]
H=c[135]
V=c[240]
N=c[203]
A7=c[235]
A8=c[258]
A9=c[205]
W=c[232]
A=a.updateHolder(c[49],A)
D=c[357]
Aa=c[127]
Ab=c[152]
F=c[173]
E=c[358]
X=c[234]
Ac=c[177]
Ad=c[279]
Ae=c[360]
A.pk.prototype={
h(d,e){if(typeof e!="string"&&typeof e!="number")throw B.n(B.ci("property is not a String or num",null))
return A.cCi(this.a[e])},
m(d,e,f){if(typeof e!="string"&&typeof e!="number")throw B.n(B.ci("property is not a String or num",null))
this.a[e]=A.cCj(f)},
k(d,e){if(e==null)return!1
return e instanceof A.pk&&this.a===e.a},
j(d){var w,v
try{w=String(this.a)
return w}catch(v){w=this.qQ(0)
return w}},
x3(d,e){var w=this.a,v=e==null?null:B.aZ(new B.P(e,A.dqV(),B.X(e).i("P<1,@>")),!0,x.z)
return A.cCi(w[d].apply(w,v))},
by_(d){return this.x3(d,null)},
gv(d){return 0}}
A.R5.prototype={}
A.IQ.prototype={
amy(d){var w=d<0||d>=this.gu(0)
if(w)throw B.n(B.fs(d,0,this.gu(0),null,null))},
h(d,e){if(B.h7(e))this.amy(e)
return this.aRH(0,e)},
m(d,e,f){if(B.h7(e))this.amy(e)
this.akI(0,e,f)},
gu(d){var w=this.a.length
if(typeof w==="number"&&w>>>0===w)return w
throw B.n(B.a6("Bad JsArray length"))},
su(d,e){this.akI(0,"length",e)},
t(d,e){this.x3("push",[e])},
H(d,e){this.x3("push",e instanceof Array?e:B.aZ(e,!0,x.z))},
kl(d){if(this.gu(0)===0)throw B.n(B.iN(-1))
return this.by_("pop")},
ea(d,e,f,g,h){var w,v
A.d6j(e,f,this.gu(0))
w=f-e
if(w===0)return
if(h<0)throw B.n(B.ci(h,null))
v=[e,w]
C.b.H(v,J.Gw(g,h).mU(0,w))
this.x3("splice",v)},
hR(d,e,f,g){return this.ea(0,e,f,g,0)},
ep(d,e){this.x3("sort",e==null?[]:[e])},
$iaX:1,
$iy:1,
$iC:1}
A.VK.prototype={
m(d,e,f){return this.aRI(0,e,f)}}
A.GO.prototype={
uv(d,e,f){return new A.GO(this.w,f,null)},
e7(d){return!this.w.k(0,d.w)}}
A.Rv.prototype={
gka(d){return this.c!=null},
B(d){var w,v,u,t,s=this,r=null,q=B.D(d),p=G.cxz(d),o=p.ahr(s),n=q.p1.as
n.toString
n=n.cv(p.a2O(s))
w=p.y
if(w==null)w=p.a2O(s).R(0.12)
v=p.z
if(v==null)v=p.a2O(s).R(0.04)
u=p.aLU(s)
t=new B.ac(p.a,1/0,p.b,1/0).aBx(r,r)
return B.cLT(C.M,!1,s.dx,C.k,t,0,2,!0,o,w,4,r,q.cx,8,v,4,q.f,r,r,r,s.c,u,s.fx,q.k1,n,q.Q)}}
A.a1e.prototype={
M(){return new A.aML(B.a([D.bGC,D.bGF,D.bGI,D.bGH,D.acs,D.acw,D.acu],x.f),C.hL)}}
A.aML.prototype={
U(){var w,v=this
v.af()
w=v.a
v.d=w.c
w.d.Qy(new A.c5D(v))
v.a.d.bKR(new A.c5E())
B.da(C.k0,new A.c5F(v))},
l(){this.a.d.l()
this.ag()},
B(d){var w=this,v=null,u=w.a.d,t=x.p,s=B.a([],t),r=u.b,q=w.a.d
return B.av(B.a([new B.ar(50,v,new A.a8B(w.f,u,s,25,C.aU,w.r,A7.JY,C.aC,C.K,C.i,r),v),new B.eW(1,C.hO,new A.a5a(200,v,!0,q,new A.c5w(),C.aV,new A.c5x(w),new A.c5y(),new A.c5z(),new A.c5A(),D.bD4,D.ark,D.bEe,C.I,M.ary,!1,new A.c5B(w),q.a),v)],t),C.J,C.f,C.h,0,v)},
ti(d){return this.aOf(d)},
aOf(d){var w=0,v=B.k(x.H),u=this
var $async$ti=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:w=2
return B.d(u.a.d.KZ(d),$async$ti)
case 2:return B.i(null,v)}})
return B.j($async$ti,v)}}
A.a4I.prototype={
B(d){return $.cVS().aA6(this.c,!1,this.a)}}
A.a5a.prototype={
M(){return new A.a5b()}}
A.a5b.prototype={
U(){var w,v=this
v.y=$.Nz().aFE("packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js")
w=v.a.ax.d
if(w==null)w="Roboto"
v.z=w
v.Q=B.ri(4,w,C.as,!1)
w=v.a
w.toString
v.f=!0
v.r=w.d
v.af()},
l(){var w,v=this.d
v===$&&B.b()
w=v.b
w.P$=$.a9()
w.O$=0
v.fq()
this.ag()},
B(d){var w=this.y
w===$&&B.b()
return Ac.cIJ(new A.byS(this),w,x.z)},
aZS(d,e){var w,v,u,t,s,r,q=this
q.e=q.apL(e)
w=C.c.j(B.eg(q.a.r.b))
v=q.e
u=q.r
u===$&&B.b()
t=B.dq([new A.ul("EditorResizeCallback",new A.byH(q)),new A.ul("UpdateFormat",new A.byI(q)),new A.ul("OnTextChanged",new A.byJ(q)),new A.ul("FocusChanged",new A.byK(q,d)),new A.ul("OnEditingCompleted",new A.byL(q)),new A.ul("OnSelectionChanged",new A.byM(q)),new A.ul("EditorLoaded",new A.byN(q))],x.C)
s=q.as
r=q.a.db.$1(d)
return new B.cr(C.ag,null,C.ae,C.y,B.a([new A.a9W(v,D.abn,e,u,new A.byO(q),t,!1,new A.byP(q),new A.byQ(q),D.ak0,new B.cw(w,x.X)),B.ja(r,!s)],x.p),null)},
US(){var w=0,v=B.k(x.N),u,t=this,s
var $async$US=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qa("getHtmlText",[]),$async$US)
case 3:u=e
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$US,v)},
V0(){var w=0,v=B.k(x.z),u,t=this,s
var $async$V0=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qa("getSelectionRange",[]),$async$V0)
case 3:u=e
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$V0,v)},
WI(d,e){return this.bpy(d,e)},
bpy(d,e){var w=0,v=B.k(x.z),u,t=this,s
var $async$WI=B.f(function(f,g){if(f===1)return B.h(g,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qa("setSelection",[d,e]),$async$WI)
case 3:u=g
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$WI,v)},
WG(d){return this.bpq(d)},
bpq(d){var w=0,v=B.k(x.z),u,t=this,s
var $async$WG=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qa("setHtmlText",[d]),$async$WG)
case 3:u=f
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$WG,v)},
Ut(d){return this.b4n(d)},
b4n(d){var w=0,v=B.k(x.z),u,t=this,s
var $async$Ut=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qa("embedVideo",[d]),$async$Ut)
case 3:u=f
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$Ut,v)},
Us(d){return this.b4m(d)},
b4m(d){var w=0,v=B.k(x.z),u,t=this,s
var $async$Us=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qa("embedImage",[d]),$async$Us)
case 3:u=f
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$Us,v)},
Uu(d){return this.b4u(!0)},
b4u(d){var w=0,v=B.k(x.z),u,t=this,s
var $async$Uu=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qa("enableEditor",[!0]),$async$Uu)
case 3:u=f
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$Uu,v)},
WF(d,e){return this.bpp(d,e)},
bpp(d,e){var w=0,v=B.k(x.z),u,t=2,s=[],r=this,q,p,o,n
var $async$WF=B.f(function(f,g){if(f===1){s.push(g)
w=t}while(true)switch(w){case 0:t=4
p=r.d
p===$&&B.b()
w=7
return B.d(p.qa("setFormat",[d,e]),$async$WF)
case 7:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=B.ag(n)
J.ao(q)
w=6
break
case 3:w=2
break
case 6:case 1:return B.i(u,v)
case 2:return B.h(s.at(-1),v)}})
return B.j($async$WF,v)},
Vs(d,e){return this.beY(d,e)},
beY(d,e){var w=0,v=B.k(x.z),u,t=this,s
var $async$Vs=B.f(function(f,g){if(f===1)return B.h(g,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qa("insertTable",[e,d]),$async$Vs)
case 3:u=g
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$Vs,v)},
VP(d){return this.bgW(d)},
bgW(d){var w=0,v=B.k(x.z),u,t=this,s
var $async$VP=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qa("modifyTable",[d.b]),$async$VP)
case 3:u=f
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$VP,v)},
Xq(){var w=0,v=B.k(x.z),u,t=this,s
var $async$Xq=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qa("undo",[]),$async$Xq)
case 3:u=e
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$Xq,v)},
Wi(){var w=0,v=B.k(x.z),u,t=this,s
var $async$Wi=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qa("redo",[]),$async$Wi)
case 3:u=e
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$Wi,v)},
U0(){var w=0,v=B.k(x.z),u,t=this,s
var $async$U0=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.qa("clearHistory",[]),$async$U0)
case 3:u=e
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$U0,v)},
apL(c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2="0",b3="px !important;\n          padding-right:",b4="px !important;\n          padding-top:",b5="px !important;\n          padding-bottom:",b6=";\n          font-size: ",b7="px;\n          color:",b8=";\n          background-color:",b9=";\n          font-weight: ",c0=b1.Q
c0===$&&B.b()
w=b1.x
v=b1.z
v===$&&B.b()
u=A.a8x(b1.a.y)
t=A.a8x(b1.a.y)
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
l=A.a8x(l==null?C.u:l)
k=A.a8x(b1.a.y)
j=b1.a.ch
i=j.x
if(i==null)i=C.Cs
j=A.cNd(j.w)
h=b1.z
g=b1.a.ax
f=g.x
if(f==null)f=C.Cs
g=g.r
g=B.o(g==null?"14":g)
e=b1.a.ax.b
e=A.a8x(e==null?C.u:e)
d=A.a8x(b1.a.y)
a0=b1.a.ax
a0=A.cNd(a0.w)
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
A.azq.prototype={
akU(){var w,v=this,u=null
v.a=new B.aK(A.cR3(15),x.h)
v.b=new B.aK(A.cR3(15),x.R)
w=x.N
v.c=B.fT(u,u,u,u,!1,w)
v.d=B.fT(u,u,u,u,!1,w)},
KG(){var w=0,v=B.k(x.N),u,t=2,s=[],r=this,q,p,o,n
var $async$KG=B.f(function(d,e){if(d===1){s.push(e)
w=t}while(true)switch(w){case 0:t=4
p=r.a.gX()
p=p==null?null:p.US()
w=7
return B.d(x.F.b(p)?p:B.c6(p,x.T),$async$KG)
case 7:q=e
if(J.p(q,"<p><br></p>")){p=q
p.toString
p=B.dz(p,"<p><br></p>","")
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
case 6:case 1:return B.i(u,v)
case 2:return B.h(s.at(-1),v)}})
return B.j($async$KG,v)},
KZ(d){return this.aP9(d)},
aP9(d){var w=0,v=B.k(x.z),u,t=this,s
var $async$KZ=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:s=t.a.gX()
s=s==null?null:s.WG(d)
w=3
return B.d(x._.b(s)?s:B.c6(s,x.z),$async$KZ)
case 3:u=f
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$KZ,v)},
PS(d,e){return this.bHl(d,e)},
bHl(d,e){var w=0,v=B.k(x.z),u,t=this,s
var $async$PS=B.f(function(f,g){if(f===1)return B.h(g,v)
while(true)switch(w){case 0:s=t.a.gX()
s=s==null?null:s.Vs(e,d)
w=3
return B.d(x._.b(s)?s:B.c6(s,x.z),$async$PS)
case 3:u=g
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$PS,v)},
a_R(d){return this.bK0(d)},
bK0(d){var w=0,v=B.k(x.z),u,t=this,s
var $async$a_R=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:s=t.a.gX()
s=s==null?null:s.VP(d)
w=3
return B.d(x._.b(s)?s:B.c6(s,x.z),$async$a_R)
case 3:u=f
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$a_R,v)},
Zh(d){return this.bDc(d)},
bDc(d){var w=0,v=B.k(x.z),u,t=this,s,r
var $async$Zh=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:r=A.dbu(d)
if(r==null){w=1
break}s=t.a.gX()
s=s==null?null:s.Ut(r)
w=3
return B.d(x._.b(s)?s:B.c6(s,x.z),$async$Zh)
case 3:u=f
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$Zh,v)},
Zg(d){return this.bDb(d)},
bDb(d){var w=0,v=B.k(x.z),u,t=this,s
var $async$Zg=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:s=t.a.gX()
s=s==null?null:s.Us(d)
w=3
return B.d(x._.b(s)?s:B.c6(s,x.z),$async$Zg)
case 3:u=f
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$Zg,v)},
Zi(d){return this.bDf(!0)},
bDf(d){var w=0,v=B.k(x.H),u=this,t
var $async$Zi=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:u.e=!0
t=u.a.gX()
t=t==null?null:t.Uu(!0)
w=2
return B.d(x._.b(t)?t:B.c6(t,x.z),$async$Zi)
case 2:return B.i(null,v)}})
return B.j($async$Zi,v)},
Se(){var w=0,v=B.k(x.n),u,t=this,s,r
var $async$Se=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:r=t.a.gX()
r=r==null?null:r.V0()
w=3
return B.d(x._.b(r)?r:B.c6(r,x.z),$async$Se)
case 3:s=e
u=s!=null?A.cMw(C.at.tU(0,s,null)):new A.Eu(0,0)
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$Se,v)},
SZ(d,e,f){return this.aOS(0,e,f)},
aOS(d,e,f){var w=0,v=B.k(x.z),u,t=this,s
var $async$SZ=B.f(function(g,h){if(g===1)return B.h(h,v)
while(true)switch(w){case 0:s=t.a.gX()
s=s==null?null:s.WI(e,f)
w=3
return B.d(x._.b(s)?s:B.c6(s,x.z),$async$SZ)
case 3:u=h
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$SZ,v)},
wf(d,e){return this.aO8(d,e)},
aO8(d,e){var w=0,v=B.k(x.H),u=this,t
var $async$wf=B.f(function(f,g){if(f===1)return B.h(g,v)
while(true)switch(w){case 0:t=u.a.gX()
if(t!=null)t.WF(d,e)
return B.i(null,v)}})
return B.j($async$wf,v)},
Qy(d){var w,v,u
try{w=this.c
v=(w.b&1)===0
if(v)new B.cx(w,B.t(w).i("cx<1>")).ee(new A.byC(d))}catch(u){}return},
bKR(d){var w,v,u
try{w=this.d
v=(w.b&1)===0
if(v)new B.cx(w,B.t(w).i("cx<1>")).ee(new A.byB(d))}catch(u){}return},
l(){this.c.ap(0)
this.d.ap(0)},
w1(){var w=0,v=B.k(x.H),u=this,t
var $async$w1=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:t=u.a.gX()
t=t==null?null:t.Xq()
w=2
return B.d(x._.b(t)?t:B.c6(t,x.z),$async$w1)
case 2:return B.i(null,v)}})
return B.j($async$w1,v)},
vO(){var w=0,v=B.k(x.H),u=this,t
var $async$vO=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:t=u.a.gX()
t=t==null?null:t.Wi()
w=2
return B.d(x._.b(t)?t:B.c6(t,x.z),$async$vO)
case 2:return B.i(null,v)}})
return B.j($async$vO,v)},
Ys(){var w=0,v=B.k(x.H),u=this,t
var $async$Ys=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:t=u.a.gX()
t=t==null?null:t.U0()
w=2
return B.d(x._.b(t)?t:B.c6(t,x.z),$async$Ys)
case 2:return B.i(null,v)}})
return B.j($async$Ys,v)}}
A.Eu.prototype={
gu(d){return this.b}}
A.a8B.prototype={
M(){return new A.a8C(B.a([],x.c),B.L(x.N,x.z),V.dZ)}}
A.a8C.prototype={
U(){var w,v,u,t,s,r,q=this,p=x.q
q.f=new B.aK("fontBgColorKey"+C.c.j(B.eg(q.a.d)),p)
q.r=new B.aK("fontColorKey"+C.c.j(B.eg(q.a.d)),p)
q.w=new B.aK("_tablePickerKey"+C.c.j(B.eg(q.a.d)),p)
p=q.a
q.x=p.y
for(p=p.c,w=0;w<7;++w){v=p[w]
u=q.d
t=q.a
s=t.x
r=t.r
t=t.f
u.push(new A.LC(v,!1,null,q.x,t,r,s,null))}q.af()},
B(d){var w=null,v=this.a,u=v.w
v=v.z
u=B.ob(B.ay(w,A1.dQ(B.d48(this.b60(d),C.k,C.J,v,w,C.f,C.h,0,w,w,C.l),w,C.q,w,w,w,v),C.k,w,w,new B.bh(u,w,w,w,w,w,w,C.P),w,w,w,w,w,w,w,17976931348623157e292),!1,w)
return u},
bR2(d){var w,v,u,t,s,r,q=this,p="direction",o="color",n="align",m="background"
q.e=d
for(w=J.a2(d),v=0;u=q.d,v<u.length;++v){t=u[v]
switch(t.c.a){case 0:u[v]=t.iM(J.p(w.h(d,"bold"),!0))
break
case 1:u[v]=t.iM(J.p(w.h(d,"italic"),!0))
break
case 2:u[v]=t.iM(J.p(w.h(d,"underline"),!0))
break
case 3:u[v]=t.iM(J.p(w.h(d,"strike"),!0))
break
case 4:u[v]=t.iM(J.p(w.h(d,"blockquote"),!0))
break
case 5:u[v]=t.iM(J.p(w.h(d,"code-block"),!0))
break
case 6:u[v]=t.iM(w.h(d,"indent")!=null)
break
case 7:u[v]=t.iM(w.h(d,"indent")!=null)
break
case 8:u[v]=t.iM(J.p(w.h(d,p),"rtl"))
break
case 9:u[v]=t.iM(!J.p(w.h(d,p),"rtl"))
break
case 17:u[v]=t.iM(w.h(d,"size")!=null)
break
case 10:u[v]=t.iM(J.p(w.h(d,"header"),1))
break
case 11:u[v]=t.iM(J.p(w.h(d,"header"),2))
break
case 12:u[v]=t.iM(w.h(d,o)!=null)
try{if(w.h(d,o)!=null){u=B.lD(J.ax(w.h(d,o)).a,null)
t=q.e
s=J.cZ(t)
if(u==="List<dynamic>")s.m(t,o,J.v(w.h(d,o),0))
else s.m(t,o,w.h(d,o))}}catch(r){}break
case 14:if(w.h(d,n)==null)w.m(d,n,"")
u=q.d
u[v]=u[v].iM(w.h(d,n)!=null)
break
case 15:u[v]=t.iM(J.p(w.h(d,"list"),"ordered"))
break
case 16:u[v]=t.iM(J.p(w.h(d,"list"),"bullet"))
break
case 19:u[v]=t.iM(w.h(d,"image")!=null)
break
case 20:u[v]=t.iM(w.h(d,"video")!=null)
break
case 21:u[v]=t.iM(w.h(d,"clean")!=null)
break
case 13:u[v]=t.iM(w.h(d,m)!=null)
try{if(w.h(d,m)!=null){u=B.lD(J.ax(w.h(d,m)).a,null)
t=q.e
s=J.cZ(t)
if(u==="List<dynamic>")s.m(t,m,J.v(w.h(d,m),0))
else s.m(t,m,w.h(d,m))}}catch(r){}break
case 18:J.c_(q.e,"link",w.h(d,"link"))
break
case 22:case 23:case 26:case 25:case 24:case 27:break}}q.A(new A.bMR())},
b60(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.a([],x.p)
for(w=0;v=p.d,w<v.length;++w){u={}
t=u.a=v[w]
v=t.c
if(v===D.bGL)n.push(B.ib(new B.a5(p.x,p.b5I(),o),o,o,v.c,o,o,o,o,E.eZ))
else if(v===D.acs){u=p.x
s=p.a.f
n.push(B.ib(new B.a5(u,new B.ar(s,s,p.aYP(),o),o),o,o,v.c,o,o,o,o,E.eZ))}else if(v===D.bGP){u=p.x
s=p.a.f
n.push(B.ib(new B.a5(u,new B.ar(s,s,p.b6D(w),o),o),o,o,v.c,o,o,o,o,E.eZ))}else if(v===D.bGO){u=p.x
s=p.a
r=s.f-2
s=H.a1s("packages/quill_html_editor/assets/camera_roll_icon.png",s.r,o,o,o)
J.v(p.e,"video")
n.push(B.ib(new B.a5(u,new A.QU(new A.bMB(p),D.bJd,p.a.d,new B.ar(r,r,s,o),o),o),o,o,v.c,o,o,o,o,E.eZ))}else if(v===D.acu){u=p.x
s=p.a
s=B.bq(D.aud,s.r,o,s.f)
J.v(p.e,"link")
n.push(B.ib(new B.a5(u,new A.QU(new A.bMC(p),D.bJe,p.a.d,s,o),o),o,o,v.c,o,o,o,o,E.eZ))}else if(v===D.bGM){u=p.x
s=p.a.f
n.push(B.ib(new B.a5(u,new B.ar(s,s,p.b6C(w),o),o),o,o,v.c,o,o,o,o,E.eZ))}else if(v===D.bGB){u=p.x
s=p.a.f
n.push(B.ib(new B.a5(u,new B.ar(s,s,p.b7d(w,d),o),o),o,o,v.c,o,o,o,o,E.eZ))}else if(v===D.bGE){u=p.x
s=p.a
r=s.r
q=s.f
n.push(B.ib(new A.a_O(s.w,r,q,u,new A.bMD(p),o),o,o,v.c,o,o,o,o,E.eZ))}else if(v===D.bGN){u=p.a
s=u.z
v=v.c
r=p.x
q=u.f
u=u.r
if(s===C.aj)n.push(B.ib(new B.a5(r,B.ay(o,o,C.k,u,o,o,o,q,o,o,o,o,o,0.8),o),o,o,v,o,o,o,o,E.eZ))
else n.push(B.ib(new B.a5(r,B.ay(o,o,C.k,u,o,o,o,0.8,o,o,o,o,o,q),o),o,o,v,o,o,o,o,E.eZ))}else{s=p.a
r=s.x
q=s.r
s=s.f
n.push(B.ib(new A.LC(v,t.d,new A.bME(u,p),p.x,s,q,r,o),o,o,v.c,o,o,o,o,E.eZ))}}p.a.toString
return n},
b6E(d,e){switch(d.a){case 0:return B.z(["format","bold","value",e],x.N,x.z)
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
b5I(){var w,v=this,u=null,t=v.a.w,s=J.v(v.e,"size")
if(s==null)s="normal"
w=B.aA(u,u,v.a.r,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u)
return P.aqL(C.L,new G.yR(A.cGb(!0,A.cHW(C.bA,t,u,u,!0,B.a([v.UI(8,"Small"),v.UI(12,"Normal"),v.UI(16,"Large"),v.UI(20,"Huge")],x.k),new A.bMx(v),new A.bMy(v),w,s,x.z),C.Y),u),C.k,X.hG)},
UI(d,e){var w=null,v=J.p(J.v(this.e,"size"),e.toLowerCase()),u=this.a
return G.PD(new A.pN(B.S(e,w,w,w,w,w,w,w,B.aA(w,w,v?u.x:u.r,w,w,w,w,w,w,w,w,d,w,w,C.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w,w,w),w),e.toLowerCase(),x.z)},
UH(d){var w=null,v=this.a
return new B.ar(w,w,B.S(d,w,w,w,w,w,w,w,B.aA(w,w,d.toLowerCase()!=="normal"?v.x:v.r,w,w,w,w,w,w,w,w,14,w,w,C.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w,w,w),w)},
aYP(){var w=this,v="align",u=w.a.w,t=J.p(J.v(w.e,v),"")||J.v(w.e,v)==null?"left":J.v(w.e,v)
return new G.yR(A.cGb(!1,A.cHW(C.cp,u,C.E,D.byu,!0,B.a([w.UN("left"),w.UN("center"),w.UN("right"),w.UN("justify")],x.G),new A.bMv(w),null,null,t,x.N),C.Y),null)},
UN(d){var w,v,u
if(d==="center")w=D.au2
else if(d==="right")w=D.au5
else w=d==="justify"?D.au3:D.au4
v=J.p(J.v(this.e,"align"),d)
u=this.a
v=v?u.x:u.r
return G.PD(new A.pN(B.bq(w,v,null,u.f),null),d,x.N)},
b6D(d){var w,v,u,t=this,s=null,r="color",q=t.r
q===$&&B.b()
w=t.a.f
v=J.v(t.e,r)
u=t.a
v=v!=null?u.x:u.r
u=B.bE(B.S("A",s,s,1,s,s,s,s,B.aA(s,s,v,s,s,s,s,s,s,s,s,u.f-5,s,s,C.a5,s,s,!0,s,s,s,s,s,s,s,s),s,s,s,s,s),1,s)
v=J.v(t.e,r)!=null?A.bjz(J.v(t.e,r)):C.u
return A.aqa(B.hd(C.M,!0,s,new B.ar(w,w,B.aj(B.a([u,B.ay(s,s,C.k,v,s,s,s,3,s,s,s,s,s,t.a.f-3)],x.p),C.i,C.bg,C.X,s,C.l),s),C.k,C.E,0,s,s,s,s,s,C.c4),C.p,new A.Z3(new A.bMJ(t,d),s),10,q,new A.bMK(t))},
b6C(d){var w,v,u,t,s,r=this,q=null,p="background",o=r.f
o===$&&B.b()
w=N.il(C.u,C.D,0.1)
v=J.v(r.e,p)!=null?A.bjz(J.v(r.e,p)):C.E
u=r.a.f
t=J.v(r.e,p)
s=r.a
t=t!=null?s.x:s.r
return A.aqa(B.hd(C.M,!0,q,B.ay(C.L,P.aqL(C.L,B.S("A",q,q,1,q,q,q,q,B.aA(q,q,t,q,q,q,q,q,q,q,q,s.f-1,q,q,C.f0,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.k,X.ah2),C.k,q,q,new B.bh(v,q,w,q,q,q,q,C.P),q,u,q,q,q,q,q,u),C.k,C.E,0,q,q,q,q,q,C.c4),C.p,new A.Z3(new A.bMG(r,d),q),10,o,new A.bMH(r))},
b7d(d,e){var w,v=this,u=null,t=v.a,s=t.w,r=v.w
r===$&&B.b()
w=t.f
return A.aqa(new B.ar(w,w,H.a1s(y.b,t.r,u,u,u),u),s,new B.ar(u,200,new A.TU(new A.bML(v),6,u),u),0,r,new A.bMM(v,e))},
bqd(d){var w=null
Q.fm(w,w,!0,w,new A.bMQ(this),d,w,!0,!0,x.z)}}
A.LC.prototype={
B(d){var w=this,v=null,u=w.c
return B.ib(B.jB(!1,v,!0,new B.a5(w.f,new B.ar(v,v,w.b6K(u),v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.e,v,v,v,v,v),v,v,u.c,v,v,v,v,E.eZ)},
b6K(d){var w=this
switch(d.a){case 0:return w.lQ(D.MO)
case 1:return w.lQ(D.auL)
case 2:return w.lQ(D.auS)
case 3:return w.lQ(D.auP)
case 4:return w.lQ(D.auO)
case 5:return w.lQ(K.rI)
case 7:return w.lQ(D.auK)
case 6:return w.lQ(D.auJ)
case 8:return w.lQ(D.auR)
case 9:return w.lQ(D.auQ)
case 12:return w.lQ(D.MO)
case 14:return w.lQ(D.auH)
case 21:return w.lQ(D.auI)
case 15:return w.lQ(D.auN)
case 16:return w.lQ(D.auM)
case 10:return w.apb("packages/quill_html_editor/assets/h1_dark.png")
case 11:return w.apb("packages/quill_html_editor/assets/h2_dark.png")
case 13:return w.lQ(D.auG)
case 19:return w.lQ(D.aua)
case 22:return w.lQ(D.auV)
case 23:return w.lQ(D.auU)
case 24:return w.lQ(D.auT)
case 18:case 20:case 17:case 25:case 26:case 27:return C.cN}},
lQ(d){var w=this,v=w.d?w.x:w.w
return B.bq(d,v,null,w.r)},
apb(d){var w=this,v=null,u=w.r
return new B.ar(u,u,H.a1s(d,w.d?w.x:w.w,v,v,v),v)},
iM(d){var w=this
return A.ddb(w.x,w.w,w.r,d,null,w.f,w.c)}}
A.jI.prototype={
J(){return"ToolBarStyle."+this.b}}
A.asm.prototype={}
A.Z3.prototype={
B(d){var w=null
return B.ay(w,I.ase(w,C.q,D.byN,new A.b3V(this),19,w,S.C8,w,C.K,!0),C.k,C.p,w,w,w,120,w,w,w,w,w,120)}}
A.a_O.prototype={
M(){return new A.aLs()},
bLj(d){return this.r.$1(d)}}
A.aLs.prototype={
U(){this.d=new B.aK("fontBgColorKey"+J.ao(this.a.a),x.q)
this.af()},
B(d){var w,v,u,t,s=this,r=null,q=s.a,p=q.f,o=q.e
q=q.c
w=s.d
w===$&&B.b()
v=s.aoh(!1,d)
u=s.a
t=u.e
return new B.a5(p,new B.ar(o,o,A.aqa(new B.ar(t,t,H.a1s("packages/quill_html_editor/assets/edit_table.png",u.d,r,r,r),r),q,v,0,w,new A.c_e(s,d)),r),r)},
a60(d,e,f){var w,v,u,t,s=null,r="packages/quill_html_editor/assets/insert_row_below.png"
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
return new A.pN(Ab.mZ(B.jB(!1,s,!0,new B.a5(C.iy,B.av(B.a([new B.ar(t,t,H.a1s(r,v,s,s,s),s),Y.cg,B.bE(B.S(w,s,s,s,s,s,s,s,B.aA(s,s,v,s,s,s,s,s,s,s,s,s,s,s,C.bp,s,s,!0,s,s,s,s,s,s,s,s),s,s,s,s,s),1,s)],x.p),C.i,C.f,C.X,0,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new A.c_c(this,d,f,e),s,s,s,s,s),s,u,s,s,s),s)},
bq_(d,e){var w=null
Q.fm(w,w,!0,w,new A.c_d(this,!0),e,w,!0,!0,x.z)},
aoh(d,e){var w,v=null
if(d)return R.jh(v,v,v,new A.pN(new B.eT(new A.c_a(this,!0),v),v),C.Y,v,new B.d8(B.c5(8),C.z),v,v)
w=B.az(e,v,x.w).w.a.a<450?350:v
return new B.ar(200,w,O.mr(!0,!0,!0,C.y,v,C.q,new A.c_b(this,!1),7,v,U.bG,C.Y,v,v,v,!0,C.K,!0),v)}}
A.rH.prototype={
J(){return"EditTableEnum."+this.b}}
A.a_S.prototype={
M(){var w=null,v=x.L
return new A.a_T(D.LF,new B.pt(B.a([],v),w,w),new B.pt(B.a([],v),w,w))}}
A.a_T.prototype={
YX(){},
l(){$.aw.mo(this)
this.ag()},
U(){var w=this
w.af()
w.w=new B.aK(J.ao(w.a.a),x.A)
$.aw.RG$.push(new A.bcU(w))
$.aw.e4$.push(w)},
b6I(d){var w=this,v=w.w
v===$&&B.b()
v=$.aw.aT$.x.h(0,v)
v=v==null?null:v.gaj()
x.r.a(v)
if(w.c!=null)w.A(new A.bcO(w,v))},
bfM(d){var w,v=this,u=v.c
u.toString
u=B.Dc(u,x.u)
u.toString
v.x=u
w=B.qM(new A.bcQ(v),!1,!1)
v.r=w
u.jp(0,w)},
Mm(){var w,v,u=this.c
if(u!=null){w=x.r.a(u.gaj())
v=B.dc(w.ct(0,null),C.n)
return new A.hn(w.gE(0).a,w.gE(0).b,v.a,v.b)}this.xw()
return D.LF},
a8G(d){return this.bq4(d)},
bq4(d){var w=0,v=B.k(x.H),u=this,t,s,r,q,p
var $async$a8G=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:p=B.Dc(d,x.u)
p.toString
u.y=p
p=u.e
t=u.Mm()
s=u.c
s.toString
r=x.w
s=B.az(s,null,r).w
q=u.c
q.toString
r=B.qM(new A.bcT(u,new A.ayP(D.as8,t,p,new A.hn(s.a.a,B.az(q,null,r).w.a.b,0,0),u.a.f,8).bIO(0,D.LE)),!1,!1)
u.f=r
p=u.y
p.jp(0,r)
u.a.toString
return B.i(null,v)}})
return B.j($async$a8G,v)},
xw(){var w=this.f
if(w!=null){w.hy(0)
this.f=null}},
B(d){var w=null,v=this.a,u=v.Q
return B.d0(w,v.c,C.q,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,u,w,w,w,w,w,w,!1,C.ad)},
L1(){var w,v=this
v.a.toString
if(v.f!=null)v.xw()
else{w=v.c
w.toString
v.a8G(w)}}}
A.aLz.prototype={}
A.akw.prototype={
b7h(){var w,v=this,u=null,t=1,s=1,r=!1,q=0
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
w=r?new A.aEf(w,u):new A.amC(w,u)
return B.cBd(new B.Em(q,B.iU(u,u,!1,u,w,new B.Y(v.e,v.f)),u),u,t,s)},
B(d){return this.b7h()}}
A.Yu.prototype={
M(){return new A.aJd()}}
A.aJd.prototype={
B(d){var w=null,v=this.a,u=v.r,t=v.c,s=v.d
return B.hd(C.M,!0,w,B.qJ(B.ay(w,v.w,C.k,w,new B.ac(0,300,0,1/0),new B.bh(t,w,w,u,w,w,w,C.P),w,w,w,w,new B.ap(s,s,s,s),w,w,w),1),C.k,C.E,0,w,w,w,w,w,C.c4)}}
A.hn.prototype={}
A.p8.prototype={
J(){return"ElTooltipPosition."+this.b}}
A.awX.prototype={
B(d){var w=null,v=this.d
v=B.d0(w,B.ay(w,w,C.k,B.dm(C.d.aS(255*this.e),v.an()>>>16&255,v.an()>>>8&255,v.an()&255),w,w,w,w,w,w,w,w,w,w),C.q,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.f,w,w,w,w,w,w,!1,C.ad)
return v}}
A.amC.prototype={
b0(d,e){var w,v,u,t,s,r=$.at(),q=r.bl()
r.da()
q.saO(0,this.b)
w=r.da()
r=e.b
v=r*0.69
w.c2(0,0,v)
u=e.a
t=u*0.31
s=r*0.93
w.ro(0,r*0.95,u*0.18,r*1.09,t,s)
w.ro(t,s,u,0,u,0)
w.ro(u,0,0,0,0,0)
w.ro(0,0,0,v,0,v)
w.ro(0,v,0,v,0,v)
d.eI(w,q)},
hp(d){return!0}}
A.aEf.prototype={
b0(d,e){var w,v,u,t,s,r=$.at(),q=r.bl()
q.su8(!0)
q.saO(0,this.b)
w=r.da()
r=e.a
v=r*0.66
u=e.b
t=u*0.86
w.c2(0,v,t)
u*=1.05
s=r*0.34
w.ro(r*0.58,u,r*0.42,u,s,t)
w.ro(s,t,0,0,0,0)
w.ro(0,0,r,0,r,0)
w.ro(r,0,v,t,v,t)
w.ro(v,t,v,t,v,t)
d.eI(w,q)},
hp(d){return!0}}
A.ayP.prototype={
atC(){var w,v,u,t,s,r=this,q=r.c,p=q.a
q=q.b
w=r.b
v=w.c+w.a*0.5
w=w.d
u=r.e
t=r.a.b
s=r.f
return new A.nC(new A.hn(p,q,v,w-q-u-t),new A.hn(p,q,Math.floor(v),Math.floor(w-u-t)),D.arY,new B.dH(new B.b6(s,s),new B.b6(s,s),C.R,new B.b6(s,s)))},
Xh(){var w,v,u,t,s,r,q=this,p=q.a,o=p.a
p=p.b
w=q.b
v=w.c+w.a*0.5
w=w.d
u=q.e
t=q.c
s=t.a
t=t.b
r=q.f
return new A.nC(new A.hn(s,t,v-s*0.5,w-t-u-p),new A.hn(o,p,Math.floor(v-o*0.5),Math.floor(w-u-p)),D.LE,B.BD(new B.b6(r,r)))},
atB(){var w,v,u,t,s,r,q=this,p=q.a,o=p.a
p=p.b
w=q.b
v=w.c
u=w.a*0.5
w=w.d
t=q.e
s=q.c
r=q.f
return new A.nC(new A.hn(o,p,v-s.a+u,w-s.b-t-p),new A.hn(o,p,Math.floor(v+u-o),Math.floor(w-t-p)),D.as0,new B.dH(new B.b6(r,r),new B.b6(r,r),new B.b6(r,r),C.R))},
atA(){var w,v,u,t=this,s=t.c,r=s.a
s=s.b
w=t.b
v=w.c+w.a*0.5
w=w.d+w.b+t.e
u=t.f
return new A.nC(new A.hn(r,s,v,w+t.a.b),new A.hn(r,s,Math.ceil(v),Math.ceil(w)),D.as4,new B.dH(C.R,new B.b6(u,u),new B.b6(u,u),new B.b6(u,u)))},
alO(){var w,v,u,t,s,r=this,q=r.a,p=q.a
q=q.b
w=r.b
v=w.c+w.a*0.5
w=w.d+w.b+r.e
u=r.c
t=u.a
s=r.f
return new A.nC(new A.hn(t,u.b,v-t*0.5,w+q),new A.hn(p,q,Math.ceil(v-p*0.5),Math.ceil(w)),D.as5,B.BD(new B.b6(s,s)))},
atz(){var w,v,u,t,s=this,r=s.c,q=r.a
r=r.b
w=s.b
v=w.c+w.a*0.5
u=s.a
w=w.d+w.b+s.e
t=s.f
return new A.nC(new A.hn(q,r,v-q,w+u.b),new A.hn(q,r,v-u.a,Math.ceil(w)),D.as6,new B.dH(new B.b6(t,t),C.R,new B.b6(t,t),new B.b6(t,t)))},
arO(){var w,v,u,t=this,s=t.c,r=s.a,q=s.b,p=t.b
s=p.c-s.c
w=t.e
v=t.a.b
p=p.d+p.b*0.5
u=t.f
return new A.nC(new A.hn(r,q,s-r-w-v,p),new A.hn(r,q,Math.floor(s-w-v),p),D.as7,new B.dH(new B.b6(u,u),C.R,new B.b6(u,u),new B.b6(u,u)))},
arM(){var w,v,u,t,s=this,r=s.c,q=r.a,p=r.b,o=s.b
r=o.c-r.c
w=s.e
v=s.a
u=v.b
o=o.d+o.b*0.5
t=s.f
return new A.nC(new A.hn(q,p,r-q-w-u,o-p*0.5),new A.hn(q,p,Math.floor(r-w-u),Math.floor(o-v.a*0.5)),D.arZ,B.BD(new B.b6(t,t)))},
arN(){var w,v,u,t,s=this,r=s.c,q=r.a,p=r.b,o=s.b
r=o.c-r.c
w=s.e
v=s.a
u=v.b
o=o.d+o.b*0.5
t=s.f
return new A.nC(new A.hn(q,p,r-q-w-u,o-p),new A.hn(q,p,Math.floor(r-w-u),Math.floor(o-v.a)),D.as_,new B.dH(new B.b6(t,t),new B.b6(t,t),new B.b6(t,t),C.R))},
aux(){var w,v,u,t,s,r=this,q=r.c,p=q.a
q=q.b
w=r.b
v=w.c+w.a+r.e
u=Math.floor(v)
w=w.d+w.b*0.5
t=Math.floor(w)
s=r.f
return new A.nC(new A.hn(p,q,Math.floor(v+r.a.b),Math.floor(w)),new A.hn(p,q,u,t),D.as1,new B.dH(C.R,new B.b6(s,s),new B.b6(s,s),new B.b6(s,s)))},
auv(){var w,v,u,t,s=this,r=s.c,q=r.a
r=r.b
w=s.b
v=w.c+w.a+s.e
w=w.d+w.b*0.5
u=s.a
t=s.f
return new A.nC(new A.hn(q,r,v+u.b,w-r*0.5),new A.hn(q,r,Math.floor(v),Math.floor(w-u.a*0.5)),D.as2,B.BD(new B.b6(t,t)))},
auw(){var w,v,u,t,s=this,r=s.c,q=r.a
r=r.b
w=s.b
v=w.c+w.a+s.e
w=w.d+w.b*0.5
u=s.a
t=s.f
return new A.nC(new A.hn(q,r,v+u.b,w-r),new A.hn(q,r,Math.floor(v),w-u.a),D.as3,new B.dH(new B.b6(t,t),new B.b6(t,t),C.R,new B.b6(t,t)))},
aoM(d){var w,v=d.a,u=v.c,t=!1
if(u>0){w=this.d
if(u+v.a<w.a){u=v.d
v=u>0&&u+v.b<w.b}else v=t}else v=t
if(v)return!0
return!1},
b5v(){var w,v,u=this,t=[u.gbst(),u.gaZp(),u.gbft(),u.gbnU(),u.gblD(),u.gblC(),u.gbfv(),u.gbnW(),u.gbfu(),u.gbnV(),u.gblB(),u.gblA()]
for(w=0;w<12;++w){v=t[w]
if(u.aoM(v.$0()))return v.$0()}return u.Xh()},
bIO(d,e){var w,v=this
switch(e.a){case 0:w=v.atC()
break
case 1:w=v.Xh()
break
case 2:w=v.atB()
break
case 6:w=v.atA()
break
case 7:w=v.alO()
break
case 8:w=v.atz()
break
case 9:w=v.arO()
break
case 10:w=v.arM()
break
case 11:w=v.arN()
break
case 3:w=v.aux()
break
case 4:w=v.auv()
break
case 5:w=v.auw()
break
default:w=v.Xh()
break}return v.aoM(w)?w:v.b5v()}}
A.nC.prototype={}
A.bmS.prototype={
J(){return"InputAction."+this.b}}
A.bm_.prototype={
a0S(){var w=0,v=B.k(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$a0S=B.f(function(d,e){if(d===1){t.push(e)
w=u}while(true)switch(w){case 0:u=3
w=6
return B.d($.cIi.co().a0T(!1,C.asU,!0),$async$a0S)
case 6:r=e
if(r!=null){q=J.hu(r.a)
p=q.c
if(p!=null){o=C.fP.glX().cf(p)
s.a.$1("data:image/"+B.o(C.b.gY(q.b.split(".")))+";base64,"+B.o(o))}}u=1
w=5
break
case 3:u=2
j=t.pop()
k=B.ag(j)
if(k instanceof B.k_){n=k
B.ht().$1("Unsupported operation "+B.o(n))}else{m=k
B.ht().$1("File Picker "+J.ao(m))}w=5
break
case 2:w=1
break
case 5:return B.i(null,v)
case 1:return B.h(t.at(-1),v)}})
return B.j($async$a0S,v)}}
A.QU.prototype={
M(){return new A.aNh(new B.aK(null,x.m))},
bLV(d,e){return this.c.$1(e)}}
A.aNh.prototype={
U(){this.f=new B.aK(C.c.j(B.eg(this.a.e)),x.q)
this.af()},
B(d){return this.aMj(d)},
aMj(d){var w,v,u=this,t={}
t.a=null
w=u.f
w===$&&B.b()
v=u.b7e(!0,0,0,null,d)
return A.aqa(u.a.r,C.p,v,10,w,new A.c71(t,u))},
b7e(d,e,f,g,h){var w,v,u,t=this,s=null,r={}
r.a=e
r.b=f
w=B.az(h,s,x.w).w
v=A.bjz("#E7F0FE")
u=B.c5(10)
return new A.pN(A4.uA(s,s,new B.a5(new B.ap(0,0,0,w.f.d),B.ay(C.L,B.av(B.a([A_.jz,new B.eW(1,C.bw,new B.a5(C.lD,B.ay(s,A3.er(s,!1,s,D.awr,!1,s,s,s,s,1,1,!1,new A.c6Y(t),s,s,s,s,!1,s,s,C.I,s,new A.c6Z()),C.k,s,s,new B.bh(v,s,s,u,s,s,s,C.P),s,s,s,s,s,s,s,s),s),s),B.c1(s,s,s,s,s,s,D.avQ,s,s,s,new A.c7_(r,t,g,!0,h),s,s,s,s,s),W.z3,B.c1(s,s,s,s,s,s,D.avr,s,s,s,new A.c70(r,t,!0,h),s,s,s,s,s),W.z3],x.p),C.i,C.f,C.h,0,s),C.k,s,s,s,s,60,s,s,s,s,s,s),s),t.d,s),s)}}
A.aFe.prototype={
J(){return"UrlInputType."+this.b}}
A.TU.prototype={
M(){return new A.aga(B.aT(x.S),B.aT(x.e),new B.aK(null,x.A))},
bLW(d,e){return this.c.$2(d,e)}}
A.aga.prototype={
U(){this.af()},
b2Y(d){var w,v,u,t,s,r=this
r.b0z()
w=$.aw.aT$.x.h(0,r.w).A8(x.r)
w.toString
v=B.a([],x.J)
u=new B.cd(new Float64Array(16))
u.fT()
if(w.fF(new B.w5(v,B.a([u],x.O),B.a([],x.b)),w.i3(d.gaC(d))))for(w=v.length,u=r.e,t=0;t<v.length;v.length===w||(0,B.T)(v),++t){s=v[t].a
if(s instanceof A.UW&&!u.n(0,s)){u.t(0,s)
r.boW(s.I)}}},
boW(d){this.A(new A.clD(this,d))},
B(d){var w=this,v=null,u=w.gb2X(),t=w.a.d
return new A.pN(B.nh(C.cv,I.ase(v,C.q,new L.tq(t,0,0,1),new A.clE(w),t*t,w.w,v,A9.dz,C.aj,!0),v,v,u,v,u,v,v,w.gbjg()),v)},
b0z(){this.e.W(0)
this.A(new A.clB(this))},
bjh(d){this.a.bLW(this.f+1,this.r+1)}}
A.UX.prototype={
b8(d){var w=new A.UW(this.e,null,new B.bs(),B.aG(x.v))
w.bd()
w.sc4(null)
return w},
bi(d,e){e.I=this.e}}
A.UW.prototype={}
A.a9X.prototype={
gp(d){return this.c.a},
qa(d,e){var w=this.a
w===$&&B.b()
return B.dK(w.x3(d,e),x.z)},
B8(){var w=0,v=B.k(x.H),u=this,t
var $async$B8=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:t=u.c
t.c.O_(t.a)
t.a=t.b.kl(0)
B.cum("\x1b[34m[WebViewX]\x1b[0m "+("Current history: "+t.j(0))+"\x1b[0m",1024)
u.a1()
return B.i(null,v)}})
return B.j($async$B8,v)},
B9(){var w=0,v=B.k(x.H),u=this,t
var $async$B9=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:t=u.c
t.b.jE(0,t.a)
t.a=t.c.vU()
B.cum("\x1b[34m[WebViewX]\x1b[0m "+("Current history: "+t.j(0))+"\x1b[0m",1024)
u.a1()
return B.i(null,v)}})
return B.j($async$B9,v)},
l(){var w=this.b
w.P$=$.a9()
w.O$=0
this.fq()},
$ia9Y:1}
A.b5z.prototype={}
A.ul.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.ul&&e.a===this.a},
gv(d){return C.e.gv(this.a)}}
A.a_Z.prototype={
J(){return"EmbedPosition."+this.b}}
A.a7v.prototype={
J(){return"SourceType."+this.b}}
A.asr.prototype={
j(d){return"\nHistoryStack:\nBack: "+this.b.j(0)+"\nCurrent: "+B.o(this.a)+"\nForward: "+this.c.j(0)+"\n"},
bvC(d){var w=this
if(d.k(0,w.a))return
w.b.jE(0,w.a)
w.a=d
w.c.W(0)}}
A.bRF.prototype={}
A.BH.prototype={
Zs(d,e,f,g){return this.bE7(d,e,f,g)},
bE7(d,e,f,g){var w=0,v=B.k(x.N),u,t=this,s,r
var $async$Zs=B.f(function(h,i){if(h===1)return B.h(i,v)
while(true)switch(w){case 0:s=B.dr(t.aaJ(B.ri(4,g,C.as,!1)),0,null)
w=3
return B.d(f==="get"?B.cD9(s,e):B.aY1(s,d,null,e),$async$Zs)
case 3:r=i
u=t.ad0(B.lF(B.lC(r.e)).dh(0,r.w))
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$Zs,v)}}
A.alq.prototype={
aaJ(d){return"https://cors.bridged.cc/"+d},
ad0(d){return d}}
A.amf.prototype={
aaJ(d){return"https://api.codetabs.com/v1/proxy/?quest="+d},
ad0(d){return d}}
A.aFQ.prototype={
aaJ(d){return"https://we-cors-anywhere.herokuapp.com/"+d},
ad0(d){return d}}
A.pN.prototype={
B(d){return new A.a4I(this.c,!1,this.a)}}
A.Mf.prototype={
j(d){var w=this.d
return"WebViewContent:\nSource: "+this.a+"\nSourceType: "+this.b.b+"\nLast request Headers: none\nLast request Body: "+B.o(w==null?"none":w)+"\n"},
k(d,e){var w,v=this
if(e==null)return!1
if(e!==v){w=!1
if(e instanceof A.Mf)if(e.a===v.a)if(e.b===v.b)w=e.d==v.d}else w=!0
return w},
gv(d){var w=this
return(C.e.gv(w.a)^B.eg(w.b)^C.rL.gv(w.c)^J.R(w.d))>>>0}}
A.bnm.prototype={
J(){return"JavascriptMode."+this.b}}
A.b0q.prototype={
J(){return"AutoMediaPlaybackPolicy."+this.b}}
A.a9W.prototype={
M(){return new A.ahb()}}
A.ahb.prototype={
U(){var w,v,u,t,s,r=this,q=null
r.af()
r.x=!1
r.a.toString
r.y=!1
w=E.jQ.RO()
r.e="_iframe"+("_"+B.dz(w,"-","_"))
r.d=r.b1z()
r.bmZ(r.e)
w=r.a
v=w.c
w=w.d
u=r.y
t=$.a9()
u=new B.bP(u,t,x.V)
s=x.Y
t=new A.a9X(u,new A.asr(new A.Mf(v,w,q,q),B.ng(q,s),B.ng(q,s),x.K),t)
t.a4(0,r.gayl())
u.a4(0,r.gaqn())
r.w=t
w=r.a
v=w.d
u=!0
if(v!==D.abn)if(v!==D.abp)w=v===D.abo&&w.c==="about:blank"
else w=u
else w=u
if(w)r.b10(r.gb_O())
else r.amn()
r.bmY()
B.hz(C.H,new A.cro(r),x.P)},
bmZ(d){$.Bg()
$.ro().vQ(d,new A.crl(this),!0)},
b10(d){var w=$.cXJ(),v=this.e
v===$&&B.b()
w.m(0,"connect_js_to_flutter"+v,new A.crg(this,d))},
bmY(){var w=this.d
w===$&&B.b()
this.f=B.c0Q(w,"load",new A.crk(this),!1,x.E.c)},
amn(){var w=this.a.w,v=this.w
v===$&&B.b()
w.$1(v)},
amm(d){this.a.at.$1(d)},
B(d){var w,v=null,u=this.a,t=u.f,s=u.r
u=u.a
w=this.e
w===$&&B.b()
u=B.ajS(!0,new B.ia(new B.wA(w,v,v,C.jr,u),v))
w=this.y
w===$&&B.b()
u=B.a([new B.ar(t,s,u,v)],x.p)
if(w)u.push(B.qR(0,new A.a4I(B.ay(v,v,C.k,v,v,v,v,v,v,v,v,v,v,v),!1,v)))
else u.push(C.a9)
return new B.cr(C.ag,v,C.ae,C.y,u,v)},
b1z(){var w,v=this,u=document.createElement("iframe")
u.toString
w=v.e
w===$&&B.b()
u.id="id_"+w
u.name="name_"+v.e
w=u.style
w.border="none"
u.width=C.c.j(C.d.D(v.a.f))
u.height=C.c.j(C.d.D(v.a.r))
w=u.style
w.width="100%"
w=u.style
w.height="100%"
v.a.toString
u.allowFullscreen=!0
v.a.toString
w=u.sandbox
w.toString
C.b.aR(D.aLZ,C.aqk.gkt(w))
v.a.toString
u.sandbox.add("allow-scripts")
v.a.toString
u.allow=C.b.hf(D.aIQ,new A.crh())
return u},
buM(){var w=this.w
w===$&&B.b()
w=w.c.a
this.amm(w.a)
this.axV(w)},
b9D(){this.A(new A.cri(this))},
a4U(d,e){return this.b0g(d,e)},
b0g(d,e){var w=0,v=B.k(x.y),u,t=this
var $async$a4U=B.f(function(f,g){if(f===1)return B.h(g,v)
while(true)switch(w){case 0:t.a.toString
u=!0
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$a4U,v)},
axV(d){var w,v,u=this,t=d.a
if(t.length===0){u.a.toString
return}w=d.b
switch(w.a){case 0:w=u.d
w===$&&B.b()
u.a.toString
v=u.e
v===$&&B.b()
w.srcdoc=A.cyY(t,!0,D.G8,v)
break
case 1:case 2:if(t==="about:blank"){w=u.d
w===$&&B.b()
u.a.toString
v=u.e
v===$&&B.b()
w.srcdoc=A.cyY("<br>",!0,D.G8,v)
break}if(!C.e.be(t,B.bA("http[s]?://",!1,!1,!1))){u.a.toString
return}if(w===D.abo){w=u.d
w===$&&B.b()
w=B.djb(w.contentWindow)
w.toString
J.d_m(J.d__(w),t)}else u.btg(d.c,"get",t)
break}},
Va(d){return this.baF(d)},
baF(d){var w=0,v=B.k(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Va=B.f(function(e,f){if(e===1)return B.h(f,v)
while(true)switch(w){case 0:o=x.g.a(C.at.tU(0,d,null))
n=J.a2(o)
m=B.be(n.h(o,"href"))
n.j(o)
t.a.toString
s=t.w
s===$&&B.b()
w=3
return B.d(t.a4U(m,s.c.a.b),$async$Va)
case 3:if(!f){t.a.toString
w=1
break}if(m==="javascript:history.back()"){t.w.B8()
w=1
break}else if(m==="javascript:history.forward()"){t.w.B9()
w=1
break}r=B.be(n.h(o,"method"))
q=n.h(o,"body")
if(q==null)p=null
else{n=x.N
p=B.L(n,n)
p.XP(p,J.bX(x.j.a(q),new A.crj(),x.I))}t.awW(p,t.w.c.a.c,r,m)
case 1:return B.i(u,v)}})
return B.j($async$Va,v)},
awW(d,e,f,g){this.a5L(d,e,f,g).aN(new A.crm(this,g,e,d),x.P).l8(new A.crn(this,g))},
btg(d,e,f){return this.awW(null,d,e,f)},
a5L(d,e,f,g){return this.b54(d,e,f,g)},
b54(d,e,f,g){var w=0,v=B.k(x.N),u,t=this,s,r,q,p,o,n,m
var $async$a5L=B.f(function(h,i){if(h===1)return B.h(i,v)
while(true)$async$outer:switch(w){case 0:t.a.toString
p=B.G(D.aCo,!0,x.W)
C.b.aPL(p)
s=p
t.a.toString
r=0
while(r<J.bw(s)){c$0:{q=J.v(s,r)
B.a_(q).j(0)
t.a.toString
try{o=q.Zs(d,e,f,g)
u=o
w=1
break $async$outer}catch(l){B.a_(q).j(0)
t.a.toString
if(J.p(r,J.bw(s)-1)){m=B.X4("None of the provided proxies were able to fetch the given page.",null)
o=new B.ah($.as,x.b2)
o.yN(m.a,m.b)
u=o
w=1
break $async$outer}break c$0}}++r}u=B.Qh("Bad state",null,x.N)
w=1
break
case 1:return B.i(u,v)}})
return B.j($async$a5L,v)},
l(){var w=this,v=w.f
v===$&&B.b()
v.Z(0)
v=w.w
v===$&&B.b()
v.N(0,w.gayl())
w.w.b.N(0,w.gaqn())
w.ag()}}
var z=a.updateTypes(["nC()","~()","~(pI)","R5(@)","IQ<@>(@)","pk(@)","~(iL,t_,m)","~(Eu)","e(K,fI<@>)","a9Y<@>(a9Y<@>)","V<@>(rH)","fy(K)","pN(K,l)","@(cS)","~(kO)","UX(K,l)","aB(pk)","F?(F?)","F?(@)"])
A.csk.prototype={
$1(d){var w=function(e,f,g){return function(){return e(f,g,this,Array.prototype.slice.apply(arguments))}}(A.diO,d,!1)
A.cCo(w,$.Ns(),d)
return w},
$S:51}
A.csl.prototype={
$1(d){return new this.a(d)},
$S:51}
A.ctS.prototype={
$1(d){return new A.R5(d)},
$S:z+3}
A.ctT.prototype={
$1(d){return new A.IQ(d,x.M)},
$S:z+4}
A.ctU.prototype={
$1(d){return new A.pk(d)},
$S:z+5}
A.bko.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=d.w=J.ao(d.w),p=B.a([],x.d)
if(e.geU(e)>0)p.push(F.a7Z(C.e.a8(q,0,e.geU(e))))
w=e.oW(0)
w.toString
if(f.length===0&&C.e.be(w,"www."))v="https://"+w
else v=w
u=F.cI1("a")
u.b.m(0,"href",f+v)
u.ghd(0).W(0)
w=F.a7Z(w)
u.ghd(0).t(0,w)
p.push(u)
t=e.gek(e)
if(t<q.length)p.push(F.a7Z(C.e.d7(q,t)))
w=F.bbs()
w.ghd(0).H(0,p)
s=d.a
if(s==null)B.a7(B.aI("Node must have a parent to replace it."))
s=s.ghd(0)
r=d.a.ghd(0)
s.m(0,r.dS(r,d),w)},
$S:z+6}
A.bkp.prototype={
$1(d){var w=J.ao(d.w)
d.w=w
B.tW(w,this.a,new A.bkn(this.b,d),null)},
$S:z+2}
A.bkn.prototype={
$1(d){this.a.$3(this.b,d,"mailto:")
return""},
$S:60}
A.bkq.prototype={
$1(d){var w=J.ao(d.w)
d.w=w
B.tW(w,this.a,new A.bkm(this.b,d),null)},
$S:z+2}
A.bkm.prototype={
$1(d){this.a.$3(this.b,d,"")
return""},
$S:60}
A.bkr.prototype={
$1(d){var w=J.ao(d.w)
d.w=w
B.tW(w,this.a,new A.bkl(this.b,d),null)},
$S:z+2}
A.bkl.prototype={
$1(d){this.a.$3(this.b,d,"tel:")
return""},
$S:60}
A.c5D.prototype={
$1(d){this.a.a.toString},
$S:78}
A.c5E.prototype={
$0(){B.ht().$1("Editor Loaded :)")},
$S:0}
A.c5F.prototype={
$0(){var w,v=this.a
v.A(new A.c5C(v))
w=v.d
w===$&&B.b()
if(w.length!==0)v.ti(w)},
$S:0}
A.c5C.prototype={
$0(){this.a.e=!1},
$S:0}
A.c5B.prototype={
$1(d){return this.a.e?D.akv:C.a9},
$S:267}
A.c5x.prototype={
$1(d){B.ht().$1("has focus "+d)
this.a.A(new A.c5v())},
$S:110}
A.c5v.prototype={
$0(){},
$S:0}
A.c5w.prototype={
$1(d){return B.ht().$1("widget text change "+d)},
$S:10}
A.c5A.prototype={
$0(){},
$S:0}
A.c5z.prototype={
$1(d){return B.ht().$1("Editor resized "+B.o(d))},
$S:117}
A.c5y.prototype={
$1(d){return B.ht().$1("index "+B.o(d.a)+", range "+B.o(d.b))},
$S:z+7}
A.byS.prototype={
$2(d,e){var w=e.b
if(w!=null)this.a.x=w
if(e.a===Ae.nW)return new B.hA(new A.byR(this.a),null)
w=this.a.a.db.$1(d)
return w},
$S:z+8}
A.byR.prototype={
$2(d,e){var w=this.a,v=e.b
w.e=w.apL(v)
return w.aZS(d,v)},
$S:96}
A.byP.prototype={
$1(d){this.a.as=!1},
$S:10}
A.byO.prototype={
$1(d){return this.a.d=d},
$S:z+9}
A.byQ.prototype={
$1(d){B.hz(C.bn,null,x.z).aN(new A.byE(this.a),x.P)},
$S:10}
A.byE.prototype={
$1(d){var w,v=this.a
v.as=!0
B.ht().$1("_editorLoaded true")
if(v.c!=null)v.A(new A.byD())
v.a.r.Zi(!0)
w=v.a
w.at.$0()
v.a.r.d.t(0,"")},
$S:9}
A.byD.prototype={
$0(){},
$S:0}
A.byH.prototype={
$1(d){var w,v,u=this.a,t=u.r
t===$&&B.b()
w=J.je(d)
if(t===B.ln(w.j(d)))return
try{t=B.ln(w.j(d))
u.r=t==null?u.a.d:t}catch(v){u.r=u.a.d}finally{if(u.c!=null)u.A(new A.byG(u))
u.a.as.$1(u.r)}},
$S:9}
A.byG.prototype={
$0(){var w=this.a.r
w===$&&B.b()
return w},
$S:0}
A.byI.prototype={
$1(d){var w,v
try{w=this.a.a.r.b.gX()
if(w!=null)w.bR2(C.at.tU(0,d,null))}catch(v){}},
$S:9}
A.byJ.prototype={
$1(d){var w,v,u,t,s
if(""===d)return
try{u=this.a
u.a.toString
w=""
t=B.bA("<[^>]*>|&[^;]+;",!0,!1,!1)
v=B.dz(d,t," ")
if(J.oX(v)==="")w=""
else w=d
u.a.w.$1(w)
u.a.r.c.t(0,w)}catch(s){}},
$S:9}
A.byK.prototype={
$1(d){var w=this.a,v=(d==null?null:J.ao(d))==="true"
w.w=v
w.a.z.$1(v)
w.a.toString},
$S:9}
A.byL.prototype={
$1(d){var w,v,u,t,s
if(""===d)return
try{u=this.a
u.a.toString
w=""
t=B.bA("<[^>]*>|&[^;]+;",!0,!1,!1)
v=B.dz(d,t," ")
if(J.oX(v)==="")w=""
else w=d
u=u.a
u.r.c.t(0,w)}catch(s){}},
$S:9}
A.byM.prototype={
$1(d){var w,v,u
try{w=this.a
v=w.a
v.toString
if(!w.w){w.w=!0
v.z.$1(!0)}w=w.a.Q
w.$1(d!=null?A.cMw(C.at.tU(0,d,null)):new A.Eu(0,0))}catch(u){}},
$S:9}
A.byN.prototype={
$1(d){var w=this.a
w.as=!0
if(w.c!=null)w.A(new A.byF())},
$S:9}
A.byF.prototype={
$0(){},
$S:0}
A.byC.prototype={
$1(d){this.a.$1(d)},
$S:10}
A.byB.prototype={
$1(d){this.a.$0()},
$S:10}
A.csT.prototype={
$1(d){return"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890".charCodeAt($.cYJ().Av(62))},
$S:73}
A.bMR.prototype={
$0(){},
$S:0}
A.bMB.prototype={
$1(d){this.a.a.d.Zh(d)},
$S:78}
A.bMC.prototype={
$1(d){this.a.a.d.wf("link",d)},
$S:78}
A.bMD.prototype={
$1(d){return this.a.a.d.a_R(d)},
$S:z+10}
A.bME.prototype={
$0(){var w=0,v=B.k(x.H),u=this,t,s,r,q,p,o,n,m
var $async$$0=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:o=u.a
n=o.a
m=n.c
w=m===D.bGD?2:4
break
case 2:u.b.a.d.Ys()
w=3
break
case 4:w=m===D.bGJ?5:7
break
case 5:u.b.a.d.w1()
w=6
break
case 7:w=m===D.bGG?8:10
break
case 8:u.b.a.d.vO()
w=9
break
case 10:w=m===D.bGK?11:13
break
case 11:w=14
return B.d(new A.bm_(new A.bMz(u.b)).a0S(),$async$$0)
case 14:w=12
break
case 13:if(m===D.acw){t=B.a([],x.c)
for(n=u.b,m=n.d,s=m.length,r=0;r<m.length;m.length===s||(0,B.T)(m),++r)t.push(m[r].iM(!1))
n.d=t}else if(m===D.act){for(n=u.b.d,m=n.length,r=0;r<n.length;n.length===m||(0,B.T)(n),++r){q=n[r]
if(q.c===D.acv)q.iM(!1)}n=o.a
o.a=n.iM(!n.d)}else if(m===D.acv){for(n=u.b.d,m=n.length,r=0;r<n.length;n.length===m||(0,B.T)(n),++r){q=n[r]
if(q.c===D.act)q.iM(!1)}n=o.a
o.a=n.iM(!n.d)}else o.a=n.iM(!n.d)
case 12:case 9:case 6:case 3:n=u.b
o=o.a
p=n.b6E(o.c,o.d)
n.a.d.wf(p.h(0,"format"),p.h(0,"value"))
if(J.p(J.v(n.e,"direction"),"rtl"))n.a.d.wf("align","right")
n.A(new A.bMA())
return B.i(null,v)}})
return B.j($async$$0,v)},
$S:1}
A.bMz.prototype={
$1(d){var w=this.a
J.c_(w.e,"image",d)
w.a.d.Zg(d)},
$S:78}
A.bMA.prototype={
$0(){},
$S:0}
A.bMy.prototype={
$1(d){var w=this.a
return B.a([w.UH("Small"),w.UH("Normal"),w.UH("Large"),w.UH("Huge")],x.p)},
$S:770}
A.bMx.prototype={
$1(d){var w,v=this.a
J.c_(v.e,"size",d)
w=v.a.d
w.wf("size",d==="normal"?"":d)
v.A(new A.bMw())},
$S:25}
A.bMw.prototype={
$0(){},
$S:0}
A.bMv.prototype={
$1(d){var w="align",v=this.a,u=v.e
J.c_(u,w,d==="left"?"":d)
v.a.d.wf(w,J.v(v.e,w))
v.A(new A.bMu())},
$S:15}
A.bMu.prototype={
$0(){},
$S:0}
A.bMK.prototype={
$0(){var w=this.a,v=w.r
v===$&&B.b()
if(v.gX()!=null)w.r.gX().L1()},
$S:0}
A.bMJ.prototype={
$1(d){var w,v,u="color",t=this.a
J.c_(t.e,u,d)
w=t.d
v=this.b
w[v]=w[v].iM(!0)
t.a.d.wf(u,J.v(t.e,u))
t.A(new A.bMI())
w=t.r
w===$&&B.b()
if(w.gX()!=null)t.r.gX().xw()},
$S:78}
A.bMI.prototype={
$0(){},
$S:0}
A.bMH.prototype={
$0(){var w=this.a,v=w.f
v===$&&B.b()
if(v.gX()!=null)w.f.gX().L1()},
$S:0}
A.bMG.prototype={
$1(d){var w,v,u="background",t=this.a
J.c_(t.e,u,d)
w=t.d
v=this.b
w[v]=w[v].iM(!0)
t.a.d.wf(u,J.v(t.e,u))
t.A(new A.bMF())
w=t.f
w===$&&B.b()
if(w.gX()!=null)t.f.gX().xw()},
$S:78}
A.bMF.prototype={
$0(){},
$S:0}
A.bMM.prototype={
$0(){var w,v=this.b
if(B.az(v,null,x.w).w.a.a<480)this.a.bqd(v)
else{v=this.a
w=v.w
w===$&&B.b()
if(w.gX()!=null)v.w.gX().L1()}},
$S:0}
A.bML.prototype={
$2(d,e){var w,v=this.a
v.a.d.PS(d,e)
w=v.w
w===$&&B.b()
if(w.gX()!=null)v.w.gX().xw()},
$S:264}
A.bMQ.prototype={
$1(d){var w=null
return R.jh(w,w,w,new A.pN(new B.eT(new A.bMP(this.a),w),w),C.Y,w,new B.d8(B.c5(8),C.z),w,w)},
$S:z+11}
A.bMP.prototype={
$1(d){var w=null,v=x.p
return new B.ar(300,310,B.aj(B.a([B.av(B.a([D.byx,D.asr,B.c1(w,w,w,w,w,w,Ad.lS,w,w,w,new A.bMN(d),w,w,w,w,w)],v),C.i,C.f,C.X,0,w),B.bE(new A.TU(new A.bMO(this.a,d),8,w),1,w),T.i6],v),C.i,C.bg,C.X,w,C.l),w)},
$S:262}
A.bMN.prototype={
$0(){return B.bS(this.a,!1).dT()},
$S:0}
A.bMO.prototype={
$2(d,e){this.a.a.d.PS(d,e)
B.bS(this.b,!1).dT()},
$S:264}
A.b3V.prototype={
$2(d,e){var w=null
return new A.pN(B.d0(w,new B.a5(C.iy,B.ay(w,w,C.k,w,w,new B.bh(A.bjz(D.Q9[e]),w,N.il(C.u,C.D,0.3),w,w,w,w,C.P),w,40,w,w,w,w,w,40),w),C.q,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.b3U(this.a,e),w,w,w,w,w,w,!1,C.ad),w)},
$S:z+12}
A.b3U.prototype={
$0(){this.a.c.$1(D.Q9[this.b])},
$S:0}
A.c_e.prototype={
$0(){var w,v=this.b
if(B.az(v,null,x.w).w.a.a<480)this.a.bq_(!0,v)
else{v=this.a
w=v.d
w===$&&B.b()
if(w.gX()!=null)v.d.gX().L1()}},
$S:0}
A.c_c.prototype={
$0(){var w,v=this,u=v.a
u.a.bLj(v.b)
if(v.c)B.bS(v.d,!1).dT()
else{w=u.d
w===$&&B.b()
if(w.gX()!=null)u.d.gX().xw()}},
$S:0}
A.c_d.prototype={
$1(d){return this.a.aoh(this.b,d)},
$S:24}
A.c_a.prototype={
$1(d){var w,v=this,u=null,t=x.w
if(B.az(d,u,t).w.a.a<380)t=O.mr(!0,!0,!0,C.y,u,C.q,new A.c_8(v.a,v.b),7,u,U.bG,u,u,u,u,!1,C.K,!0)
else{w=I.ase(u,C.q,new L.tq(B.az(d,u,t).w.a.a<380?1:2,0,0,3.3333333333333335),new A.c_9(v.a,v.b),7,u,u,u,C.K,!0)
t=w}return new B.ar(400,u,B.aj(B.a([D.bvH,new B.eW(1,C.bw,new B.a5(C.cS,t,u),u),T.i6],x.p),C.i,C.f,C.X,u,C.l),u)},
$S:262}
A.c_8.prototype={
$2(d,e){var w=B.a(D.Dy.slice(0),x.x)
return this.a.a60(w[e],d,this.b)},
$S:61}
A.c_9.prototype={
$2(d,e){var w=B.a(D.Dy.slice(0),x.x)
return this.a.a60(w[e],d,this.b)},
$S:61}
A.c_b.prototype={
$2(d,e){var w=B.a(D.Dy.slice(0),x.x)
return this.a.a60(w[e],d,this.b)},
$S:61}
A.bcU.prototype={
$1(d){var w=this.a,v=w.c
v.toString
return w.bfM(v)},
$S:4}
A.bcO.prototype={
$0(){var w=this.a,v=this.b
w.e=new A.hn(v.gE(0).a,v.gE(0).b,0,0)
w=w.r
if(w!=null)w.hy(0)},
$S:0}
A.bcQ.prototype={
$1(d){var w,v,u=this.a
$.aw.RG$.push(new A.bcP(u,d))
w=u.w
w===$&&B.b()
v=u.Mm()
return B.qJ(B.bT(A.cGa(u.a.e,C.p,w,2,C.b8,v),null,null),0)},
$S:774}
A.bcP.prototype={
$1(d){return this.a.b6I(this.b)},
$S:4}
A.bcT.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a
q.a.toString
w=this.b
v=w.a
u=q.Mm()
t=q.a
s=t.d
v=B.eE(r,A.cGa(t.e,s,r,2,w.d,u),r,r,v.c,r,v.d,r)
u=w.b
u=B.eE(r,new A.akw(s,w.c,16,10,r),r,r,u.c,r,u.d,r)
w=q.Mm()
s=q.Mm()
return new B.cr(C.ag,r,C.ae,C.y,B.a([new A.pN(new A.awX(!0,C.aU,0.7,new A.bcR(q),r),r),v,u,B.eE(r,B.d0(r,q.a.c,C.q,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.bcS(),r,r,r,r,r,r,!1,C.ad),r,r,s.c,r,w.d,r)],x.p),r)},
$S:775}
A.bcR.prototype={
$0(){this.a.xw()},
$S:0}
A.bcS.prototype={
$0(){},
$S:0}
A.c71.prototype={
$0(){var w=0,v=B.k(x.H),u=this,t,s,r
var $async$$0=B.f(function(d,e){if(d===1)return B.h(e,v)
while(true)switch(w){case 0:s=u.b
r=u.a
w=2
return B.d(s.a.e.Se(),$async$$0)
case 2:r.a=e
t=s.f
t===$&&B.b()
if(t.gX()!=null)s.f.gX().L1()
return B.i(null,v)}})
return B.j($async$$0,v)},
$S:1}
A.c6Y.prototype={
$1(d){var w=this.a
w.A(new A.c6X(w,d))},
$S:10}
A.c6X.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.c6Z.prototype={
$1(d){if(d==null||d.length===0)return"Can't be empty"
return null},
$S:68}
A.c7_.prototype={
$0(){var w,v,u=this,t=Date.now(),s=u.a
if(t-s.a<500)return
s.a=t
t=u.b
if(t.d.gX().jX()){s=u.c
if(s!=null){w=t.a.e
v=s.a
if(v==null)v=0
s=s.b
w.SZ(0,v,s==null?0:s)}B.hz(A5.L8,null,x.z).aN(new A.c6V(t,u.d,u.e),x.P)}else{t.e=null
t.A(new A.c6W())}},
$S:0}
A.c6V.prototype={
$1(d){var w,v=this.a,u=v.a
u.toString
w=v.e
u.bLV(0,w==null?"":w)
v=v.f
v===$&&B.b()
v.gX().xw()},
$S:9}
A.c6W.prototype={
$0(){},
$S:0}
A.c70.prototype={
$0(){var w=Date.now(),v=this.a
if(w-v.b<500)return
v.b=w
w=this.b.f
w===$&&B.b()
w.gX().xw()},
$S:0}
A.clD.prototype={
$0(){var w,v,u,t,s=this.a,r=s.d
r.t(0,this.b)
w=B.G(r,!0,B.t(r).i("cH.E"))
C.b.ep(w,new A.clC())
s.r=C.d.hC(C.b.gY(w),s.a.d)
s.f=C.d.ao(C.b.gY(w),s.a.d)
r.W(0)
for(v=0,u=0;u<s.a.d;++u)for(t=0;t<s.a.d;++t){if(u<=s.r&&t<=s.f)r.t(0,v);++v}},
$S:0}
A.clC.prototype={
$2(d,e){return d-e},
$S:214}
A.clE.prototype={
$2(d,e){var w=null,v=this.a.d,u=v.n(0,e)?K.Kn:C.E,t=v.n(0,e)?2:1
return new A.UX(e,B.ay(w,w,C.k,w,w,new B.bh(u,w,N.il(v.n(0,e)?K.Ku:V.nN,C.D,t),w,w,w,w,C.P),w,w,w,S.C8,w,w,w,w),w)},
$S:z+15}
A.clB.prototype={
$0(){this.a.d.W(0)},
$S:0}
A.bkC.prototype={
$2(d,e){return d+C.e.aQ("\n",2)+e},
$S:122}
A.bkD.prototype={
$1(d){var w=d.b[1]
w.toString
return"<"+this.a+w+"> \n"+this.b},
$S:60}
A.cro.prototype={
$0(){var w=this.a,v=w.w
v===$&&B.b()
w.axV(v.c.a)},
$S:5}
A.crl.prototype={
$1(d){var w=this.a.d
w===$&&B.b()
return w},
$S:776}
A.crg.prototype={
$1(d){var w,v,u,t=this.a
t.r=d
for(w=t.a.y,w=B.e7(w,w.r,B.t(w).c),v=w.$ti.c;w.q();){u=w.d
if(u==null)u=v.a(u)
t.r.m(0,u.a,u.b)}t.r.m(0,"WebOnClickInsideIframe",new A.crf(t))
w=t.w
w===$&&B.b()
w.a=t.r
this.b.$0()},
$S:z+16}
A.crf.prototype={
$1(d){this.a.Va(B.be(d))},
$S:9}
A.crk.prototype={
$1(d){var w,v,u=this.a
u.e===$&&B.b()
w=u.a
w.toString
v=u.x
v===$&&B.b()
if(!v){u.x=!0
w=u.w
w===$&&B.b()
u.amm(w.c.a.a)}else{u=u.w
u===$&&B.b()
w.ax.$1(u.c.a.a)}},
$S:146}
A.crh.prototype={
$2(d,e){return d+"; "+e},
$S:122}
A.cri.prototype={
$0(){var w=this.a,v=w.w
v===$&&B.b()
w.y=v.b.a},
$S:0}
A.crj.prototype={
$1(d){var w=J.a2(d)
return new B.by(J.ao(w.h(d,0)),J.ao(w.h(d,1)),x.I)},
$S:777}
A.crm.prototype={
$1(d){var w,v=this,u=v.a,t=v.b,s=A.cJ5(D.asd,d,'      <base href="'+t+"\">\n      <script>\n\n      document.addEventListener('click', e => {\n        if (frameElement && document.activeElement && document.activeElement.href) {\n          e.preventDefault()\n\n          var returnedObject = JSON.stringify({method: 'get', href: document.activeElement.href});\n          frameElement.contentWindow.WebOnClickInsideIframe && frameElement.contentWindow.WebOnClickInsideIframe(returnedObject)\n        }\n      })\n      document.addEventListener('submit', e => {\n        if (frameElement && document.activeElement && document.activeElement.form && document.activeElement.form.action) {\n          e.preventDefault()\n\n          if (document.activeElement.form.method === 'post') {\n            var formData = new FormData(document.activeElement.form);\n            \n            var returnedObject = JSON.stringify({method: 'post', href: document.activeElement.form.action, body: [...formData]});\n            frameElement.contentWindow.WebOnClickInsideIframe && frameElement.contentWindow.WebOnClickInsideIframe(returnedObject)\n          } else {\n            var urlWithQueryParams = document.activeElement.form.action + '?' + new URLSearchParams(new FormData(document.activeElement.form))\n\n            var returnedObject = JSON.stringify({method: 'get', href: urlWithQueryParams});\n            frameElement.contentWindow.WebOnClickInsideIframe && frameElement.contentWindow.WebOnClickInsideIframe(returnedObject)\n          }\n        }\n      })\n      </script>\n      "),r=u.d
r===$&&B.b()
u.a.toString
w=u.e
w===$&&B.b()
r.srcdoc=A.cyY(s,!0,D.G8,w)
w=u.w
w===$&&B.b()
w.c.bvC(new A.Mf(t,D.abp,v.c,v.d))
u.a.toString},
$S:78}
A.crn.prototype={
$1(d){var w=this.a
w.a.toString
B.o(d)
w.a.toString},
$S:9};(function aliases(){var w=A.pk.prototype
w.aRH=w.h
w.aRI=w.m
w=A.VK.prototype
w.akI=w.m})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_1u
w(A,"dqV","cCj",17)
w(A,"dqU","cCi",18)
var t
v(t=A.ayP.prototype,"gblD","atC",0)
v(t,"gbst","Xh",0)
v(t,"gblC","atB",0)
v(t,"gblB","atA",0)
v(t,"gaZp","alO",0)
v(t,"gblA","atz",0)
v(t,"gbfv","arO",0)
v(t,"gbft","arM",0)
v(t,"gbfu","arN",0)
v(t,"gbnW","aux",0)
v(t,"gbnU","auv",0)
v(t,"gbnV","auw",0)
u(t=A.aga.prototype,"gb2X","b2Y",13)
u(t,"gbjg","bjh",14)
v(A.a9X.prototype,"gfj","l",1)
v(t=A.ahb.prototype,"gb_O","amn",1)
v(t,"gayl","buM",1)
v(t,"gaqn","b9D",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.bM,[A.csk,A.csl,A.ctS,A.ctT,A.ctU,A.bko,A.bkp,A.bkn,A.bkq,A.bkm,A.bkr,A.bkl,A.c5D,A.c5B,A.c5x,A.c5w,A.c5z,A.c5y,A.byP,A.byO,A.byQ,A.byE,A.byH,A.byI,A.byJ,A.byK,A.byL,A.byM,A.byN,A.byC,A.byB,A.csT,A.bMB,A.bMC,A.bMD,A.bMz,A.bMy,A.bMx,A.bMv,A.bMJ,A.bMG,A.bMQ,A.bMP,A.c_d,A.c_a,A.bcU,A.bcQ,A.bcP,A.bcT,A.c6Y,A.c6Z,A.c6V,A.bkD,A.crl,A.crg,A.crf,A.crk,A.crj,A.crm,A.crn])
u(B.F,[A.pk,A.azq,A.Eu,A.hn,A.ayP,A.nC,A.bm_,A.b5z,A.ul,A.asr,A.bRF,A.BH,A.Mf])
u(A.pk,[A.R5,A.VK])
t(A.IQ,A.VK)
t(A.GO,B.eB)
u(B.ab,[A.Rv,A.a4I,A.LC,A.Z3,A.akw,A.awX,A.pN])
u(B.I,[A.a1e,A.a5a,A.a8B,A.a_O,A.a_S,A.Yu,A.QU,A.TU,A.a9W])
u(B.M,[A.aML,A.a5b,A.a8C,A.aLs,A.aLz,A.aJd,A.aNh,A.aga,A.ahb])
u(B.cp,[A.c5E,A.c5F,A.c5C,A.c5v,A.c5A,A.byD,A.byG,A.byF,A.bMR,A.bME,A.bMA,A.bMw,A.bMu,A.bMK,A.bMI,A.bMH,A.bMF,A.bMM,A.bMN,A.b3U,A.c_e,A.c_c,A.bcO,A.bcR,A.bcS,A.c71,A.c6X,A.c7_,A.c6W,A.c70,A.clD,A.clB,A.cro,A.cri])
u(B.dI,[A.byS,A.byR,A.bML,A.bMO,A.b3V,A.c_8,A.c_9,A.c_b,A.clC,A.clE,A.bkC,A.crh])
u(B.e_,[A.jI,A.rH,A.p8,A.bmS,A.aFe,A.a_Z,A.a7v,A.bnm,A.b0q])
t(A.asm,B.Z)
t(A.a_T,A.aLz)
u(B.o1,[A.amC,A.aEf])
t(A.UX,B.bv)
t(A.UW,B.om)
t(A.a9X,B.fZ)
u(A.BH,[A.alq,A.amf,A.aFQ])
w(A.VK,B.a1)
v(A.aLz,B.eG)})()
B.bo(b.typeUniverse,JSON.parse('{"R5":{"pk":[]},"IQ":{"a1":["1"],"C":["1"],"aX":["1"],"pk":[],"y":["1"],"a1.E":"1","y.E":"1"},"GO":{"eB":[],"bk":[],"bi":[],"e":[]},"Rv":{"ab":[],"e":[]},"a1e":{"I":[],"e":[]},"aML":{"M":["a1e"]},"a4I":{"ab":[],"e":[]},"a5a":{"I":[],"e":[]},"a5b":{"M":["a5a"]},"a8B":{"I":[],"e":[]},"a8C":{"M":["a8B"]},"LC":{"ab":[],"e":[]},"asm":{"Z":[]},"Z3":{"ab":[],"e":[]},"a_O":{"I":[],"e":[]},"aLs":{"M":["a_O"]},"a_S":{"I":[],"e":[]},"a_T":{"M":["a_S"],"eG":[]},"akw":{"ab":[],"e":[]},"Yu":{"I":[],"e":[]},"aJd":{"M":["Yu"]},"awX":{"ab":[],"e":[]},"amC":{"au":[]},"aEf":{"au":[]},"QU":{"I":[],"e":[]},"aNh":{"M":["QU"]},"TU":{"I":[],"e":[]},"UX":{"bv":[],"aQ":[],"e":[]},"UW":{"W":[],"bn":["W"],"U":[],"aL":[]},"aga":{"M":["TU"]},"a9X":{"au":[],"a9Y":["pk"]},"alq":{"BH":[]},"amf":{"BH":[]},"aFQ":{"BH":[]},"pN":{"ab":[],"e":[]},"a9W":{"I":[],"e":[]},"ahb":{"M":["a9W"]}}'))
B.m6(b.typeUniverse,JSON.parse('{"VK":1,"a9Y":1}'))
var y={b:"packages/quill_html_editor/assets/insert_table.png"}
var x=(function rtii(){var w=B.B
return{B:w("yh"),W:w("BH"),v:w("e1"),C:w("ul"),D:w("cL"),Z:w("ml"),_:w("V<@>"),F:w("V<m?>"),K:w("asr<Mf>"),t:w("II"),G:w("r<kI<m>>"),k:w("r<kI<@>>"),x:w("r<rH>"),J:w("r<nb<aL>>"),O:w("r<cd>"),d:w("r<iL>"),L:w("r<no>"),s:w("r<m>"),c:w("r<LC>"),f:w("r<jI>"),p:w("r<e>"),b:w("r<Na>"),a:w("r<b1>"),M:w("IQ<@>"),l:w("R7"),q:w("aK<a_T>"),m:w("aK<o7>"),h:w("aK<a5b>"),A:w("aK<M<I>>"),R:w("aK<a8C>"),j:w("C<@>"),I:w("by<m,m>"),g:w("A<m,@>"),w:w("fg"),U:w("cN"),P:w("aB"),u:w("pt"),r:w("W"),n:w("Eu"),N:w("m"),Q:w("j8"),X:w("cw<m>"),V:w("bP<w>"),Y:w("Mf"),i:w("e6<pI>"),o:w("Mg"),bj:w("xE"),e:w("UW"),E:w("aLB<cL>"),b2:w("ah<m>"),y:w("w"),z:w("@"),S:w("l"),T:w("m?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.bOb=new A.b0q(0,"requireUserActionForAllMediaTypes")
D.aix=new A.alq()
D.aiB=new A.amf()
D.ajZ=new A.aFQ()
D.aCo=B.a(w([D.aix,D.aiB,D.ajZ]),B.B("r<BH>"))
D.aLZ=B.a(w(["allow-downloads","allow-forms","allow-modals","allow-orientation-lock","allow-pointer-lock","allow-popups","allow-popups-to-escape-sandbox","allow-presentation","allow-same-origin"]),x.s)
D.aIQ=B.a(w(["accelerometer","clipboard-write","encrypted-media","gyroscope","picture-in-picture"]),x.s)
D.bOk=new A.b5z()
D.ak0=new A.bRF()
D.akC=new B.yv(C.zx,0.4,null,null,null,null,null,null,null)
D.akv=new B.lM(C.L,null,null,D.akC,null)
D.ark=new B.ap(10,10,0,0)
D.arY=new A.p8(0,"topStart")
D.LE=new A.p8(1,"topCenter")
D.arZ=new A.p8(10,"leftCenter")
D.as_=new A.p8(11,"leftEnd")
D.as0=new A.p8(2,"topEnd")
D.as1=new A.p8(3,"rightStart")
D.as2=new A.p8(4,"rightCenter")
D.as3=new A.p8(5,"rightEnd")
D.as4=new A.p8(6,"bottomStart")
D.as5=new A.p8(7,"bottomCenter")
D.as6=new A.p8(8,"bottomEnd")
D.as7=new A.p8(9,"leftStart")
D.LF=new A.hn(0,0,0,0)
D.as8=new A.hn(16,10,0,0)
D.asc=new A.a_Z(1,"aboveBodyCloseTag")
D.asd=new A.a_Z(2,"belowHeadOpenTag")
D.ase=new A.a_Z(3,"aboveHeadCloseTag")
D.bB8=new B.a3(!0,null,null,null,null,null,16,C.f0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bEJ=new B.cl("Select Rows x Columns",null,D.bB8,null,null,null,null,null,null,null,null,null,null,null,null)
D.asr=new B.qk(1,C.hO,D.bEJ,null)
D.au2=new B.aE(58027,"MaterialIcons",null,!1)
D.au3=new B.aE(58028,"MaterialIcons",null,!1)
D.au4=new B.aE(58029,"MaterialIcons",null,!1)
D.au5=new B.aE(58030,"MaterialIcons",null,!1)
D.aua=new B.aE(58162,"MaterialIcons",null,!1)
D.aud=new B.aE(58240,"MaterialIcons",null,!1)
D.auG=new B.aE(59812,"MaterialIcons",null,!1)
D.auH=new B.aE(59816,"MaterialIcons",null,!1)
D.MO=new B.aE(59818,"MaterialIcons",null,!1)
D.auI=new B.aE(59819,"MaterialIcons",null,!1)
D.auJ=new B.aE(59823,"MaterialIcons",null,!0)
D.auK=new B.aE(59824,"MaterialIcons",null,!0)
D.auL=new B.aE(59825,"MaterialIcons",null,!1)
D.auM=new B.aE(59827,"MaterialIcons",null,!0)
D.auN=new B.aE(59829,"MaterialIcons",null,!1)
D.auO=new B.aE(59831,"MaterialIcons",null,!1)
D.auP=new B.aE(59834,"MaterialIcons",null,!1)
D.auQ=new B.aE(59835,"MaterialIcons",null,!1)
D.auR=new B.aE(59836,"MaterialIcons",null,!1)
D.auS=new B.aE(59837,"MaterialIcons",null,!1)
D.auT=new B.aE(60007,"MaterialIcons",null,!1)
D.auU=new B.aE(60424,"MaterialIcons",null,!0)
D.auV=new B.aE(60802,"MaterialIcons",null,!0)
D.av8=new B.aE(63047,"MaterialIcons",null,!1)
D.avr=new B.db(D.av8,null,C.dO,null,null)
D.av7=new B.aE(63030,"MaterialIcons",null,!1)
D.avQ=new B.db(D.av7,null,A0.eF,null,null)
D.bOO=new A.bmS(0,"newline")
D.bCH=new B.a3(!0,null,null,null,null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.awr=new A6.ph(null,null,null,null,null,null,null,null,null,null," Type URL",D.bCH,null,null,null,!0,null,null,null,null,null,null,null,C.Ly,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,M.dj,null,null,null,null,M.dj,!0,null,!0,null)
D.bOR=new A.bnm(1,"unrestricted")
D.Q9=B.a(w(["#000000","#FFFFFF","#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"]),x.s)
D.arR=new A.rH(0,"insertRowAbove")
D.arS=new A.rH(1,"insertRowBelow")
D.arT=new A.rH(2,"insertColumnLeft")
D.arU=new A.rH(3,"insertColumnRight")
D.arV=new A.rH(4,"deleteRow")
D.arW=new A.rH(5,"deleteColumn")
D.arX=new A.rH(6,"deleteTable")
D.Dy=B.a(w([D.arR,D.arS,D.arT,D.arU,D.arV,D.arW,D.arX]),x.x)
D.bFa=new B.cl("Edit Table",null,A2.z9,null,null,null,null,null,null,null,null,null,null,null,null)
D.bsm=new B.a5(A8.k1,D.bFa,null)
D.ass=new B.qk(1,C.hO,D.bsm,null)
D.aGb=B.a(w([D.ass,Z.akH]),x.p)
D.bvH=new B.lp(C.aj,C.f,C.h,C.i,null,C.l,null,C.k,0,D.aGb,null)
D.G8=new B.hv(C.de,0,B.B("hv<dvA>"))
D.byu=new B.ar(0,null,null,null)
D.byx=new B.ar(15,null,null,null)
D.byN=new L.tq(4,0,0,1)
D.abn=new A.a7v(0,"html")
D.abo=new A.a7v(1,"url")
D.abp=new A.a7v(2,"urlBypass")
D.bD4=new B.a3(!0,null,null,'"PT Sans", Calibri, Tahoma, sans-serif',null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bEe=new B.a3(!0,C.d4,null,null,null,null,18,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bGB=new A.jI("Add a table",25,"addTable")
D.acs=new A.jI("Alignment",14,"align")
D.act=new A.jI("Header H1",10,"headerOne")
D.bGC=new A.jI("Bold",0,"bold")
D.bGD=new A.jI("Clear History",24,"clearHistory")
D.acu=new A.jI("Hyperlink",18,"link")
D.bGE=new A.jI("Edit table",26,"editTable")
D.bGF=new A.jI("Italic",1,"italic")
D.bGG=new A.jI("Redo",23,"redo")
D.bGH=new A.jI("Strikethrough",3,"strike")
D.bGI=new A.jI("Underline",2,"underline")
D.bGJ=new A.jI("Undo",22,"undo")
D.bGK=new A.jI("Insert image",19,"image")
D.bGL=new A.jI("Font Size",17,"size")
D.acv=new A.jI("Header H2",11,"headerTwo")
D.bGM=new A.jI("Background color",13,"background")
D.acw=new A.jI("Clears all formats",21,"clean")
D.bGN=new A.jI("separator",27,"separator")
D.bGO=new A.jI("Insert Youtube/Url",20,"video")
D.bGP=new A.jI("Font color",12,"color")
D.bJd=new A.aFe(0,"video")
D.bJe=new A.aFe(1,"hyperlink")})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"dBa","cXJ",()=>A.cRZ(self))
w($,"dA4","cEC",()=>B.cSD("_$dart_dartObject"))
w($,"dBe","cEJ",()=>function DartObject(d){this.o=d})
v($,"dCF","cYJ",()=>B.cAl(null))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_320",e:"endPart",h:b})})($__dart_deferred_initializers__,"u7Vgchy9YQ0IgbOOKpom/0q7tU0=");