((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_297",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,K,Q,L,R,M,S,N,T,H,I,U,V,W,X,A={
dug(d,e,f,g){var w,v
if(e){w=[f]
C.b.H(w,g)
g=w}v=x.z
return A.cKq(B.dfs(d,B.b_(J.bA(g,A.dCu(),v),!0,v),null))},
dh3(d,e,f){var w=null
if(d<0||d>f)throw B.n(B.fx(d,0,f,w,w))
if(e<d||e>f)throw B.n(B.fx(e,d,f,w,w))},
cKv(d,e,f){var w
try{if(Object.isExtensible(d)&&!Object.prototype.hasOwnProperty.call(d,e)){Object.defineProperty(d,e,{value:f})
return!0}}catch(w){}return!1},
cZn(d,e){if(Object.prototype.hasOwnProperty.call(d,e))return d[e]
return null},
cKq(d){if(d==null||typeof d=="string"||typeof d=="number"||B.kJ(d))return d
if(d instanceof A.pu)return d.a
if(A.d0c(d))return d
if(x.Q.b(d))return d
if(x.k.b(d))return B.mO(d)
if(x.Z.b(d))return A.cZm(d,"$dart_jsFunction",new A.cAw())
return A.cZm(d,"_$dart_jsObject",new A.cAx($.cMT()))},
cZm(d,e,f){var w=A.cZn(d,e)
if(w==null){w=f.$1(d)
A.cKv(d,e,w)}return w},
cKp(d){if(d==null||typeof d=="string"||typeof d=="number"||typeof d=="boolean")return d
else if(d instanceof Object&&A.d0c(d))return d
else if(d instanceof Object&&x.Q.b(d))return d
else if(d instanceof Date)return new B.aO(B.k0(d.getTime(),0,!1),0,!1)
else if(d.constructor===$.cMT())return d.o
else return A.d_j(d)},
d_j(d){if(typeof d=="function")return A.cKH(d,$.O7(),new A.cC4())
if(d instanceof Array)return A.cKH(d,$.cML(),new A.cC5())
return A.cKH(d,$.cML(),new A.cC6())},
cKH(d,e,f){var w=A.cZn(d,e)
if(w==null||!(d instanceof Object)){w=f.$1(d)
A.cKv(d,e,w)}return w},
cAw:function cAw(){},
cAx:function cAx(d){this.a=d},
cC4:function cC4(){},
cC5:function cC5(){},
cC6:function cC6(){},
pu:function pu(d){this.a=d},
RE:function RE(d){this.a=d},
JA:function JA(d,e){this.a=d
this.$ti=e},
Wx:function Wx(){},
cOu(d,e,f){var w=null
return new A.HA(B.cFN(d,w,w,w,w,36,w,w,C.Ka,w,88,f,w,w,C.Bg),e,w)},
HA:function HA(d,e,f){this.w=d
this.b=e
this.a=f},
S2:function S2(d,e,f,g,h){var _=this
_.c=d
_.y=e
_.dx=f
_.fx=g
_.a=h},
cRa(d){var w=B.bD("(background-color|color)\\s*:\\s*[^;]+;?\\s*",!1,!1,!1)
return B.dx(d,w,"")},
cR9(d){var w,v,u,t,s,r,q,p,o,n=B.bD("\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b",!0,!1,!1),m=B.bD("\\b((http|https)://|www\\.)[^\\s/$.?#].\\S*",!1,!1,!1),l=B.bD("\\b(\\+?[0-9]{1,4}[-.\\s]+)?(\\(?\\d{2,3}\\)?[-.\\s]+)?\\d{3}[-.\\s]+\\d{3}[-.\\s]+\\d{3,4}\\b",!0,!1,!1),k=Z.Y7(d),j=new A.bnr(),i=k.gro(0)
i.toString
i=F.Y9(i,"*")
w=i.length
v=x.aX
u=v.i("y.E")
t=x.d
s=0
for(;s<i.length;i.length===w||(0,B.M)(i),++s){r=i[s]
if(r.x==="a")continue
q=r.c
if(q===$){p=B.a([],t)
r.c!==$&&B.ab()
q=r.c=new F.hd(r,p)}p=B.E(new B.d7(q,v),u)
C.b.aT(p,new A.bns(n,j))}i=k.gro(0)
i.toString
i=F.Y9(i,"*")
w=i.length
s=0
for(;s<i.length;i.length===w||(0,B.M)(i),++s){r=i[s]
if(r.x==="a")continue
q=r.c
if(q===$){p=B.a([],t)
r.c!==$&&B.ab()
q=r.c=new F.hd(r,p)}p=B.E(new B.d7(q,v),u)
C.b.aT(p,new A.bnt(m,j))}i=k.gro(0)
i.toString
i=F.Y9(i,"*")
w=i.length
s=0
for(;s<i.length;i.length===w||(0,B.M)(i),++s){r=i[s]
if(r.x==="a")continue
q=r.c
if(q===$){p=B.a([],t)
r.c!==$&&B.ab()
q=r.c=new F.hd(r,p)}p=B.E(new B.d7(q,v),u)
C.b.aT(p,new A.bnu(l,j))}o=new B.dg("")
k.gro(0).Uj(o)
i=o.a
return i.charCodeAt(0)==0?i:i},
bnr:function bnr(){},
bns:function bns(d,e){this.a=d
this.b=e},
bnq:function bnq(d,e){this.a=d
this.b=e},
bnt:function bnt(d,e){this.a=d
this.b=e},
bnp:function bnp(d,e){this.a=d
this.b=e},
bnu:function bnu(d,e){this.a=d
this.b=e},
bno:function bno(d,e){this.a=d
this.b=e},
cR8(d,e){return new A.a2m(e,d,null)},
a2m:function a2m(d,e,f){this.c=d
this.d=e
this.a=f},
aOV:function aOV(d,e){var _=this
_.d=$
_.e=!0
_.f=d
_.r=e
_.c=_.a=null},
cbN:function cbN(d){this.a=d},
cbO:function cbO(){},
cbP:function cbP(d){this.a=d},
cbM:function cbM(d){this.a=d},
cbL:function cbL(d){this.a=d},
cbH:function cbH(d){this.a=d},
cbF:function cbF(){},
cbG:function cbG(){},
cbK:function cbK(){},
cbJ:function cbJ(){},
cbI:function cbI(){},
a5Y:function a5Y(d,e,f){this.c=d
this.e=e
this.a=f},
cUH(d){var w=new A.Fj(null,null),v=J.a1(d)
w.a=v.h(d,"index")
w.b=v.h(d,"length")
return w},
cZo(d){return B.fb(B.Jw(d,new A.cB4(),x.S),0,null)},
a6r:function a6r(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
a6s:function a6s(){var _=this
_.d=$
_.e=""
_.f=!0
_.r=$
_.w=!1
_.x=""
_.Q=_.z=_.y=$
_.as=!1
_.c=_.a=null},
bCq:function bCq(d){this.a=d},
bCp:function bCp(d){this.a=d},
bCn:function bCn(d){this.a=d},
bCm:function bCm(d){this.a=d},
bCo:function bCo(d){this.a=d},
bCc:function bCc(d){this.a=d},
bCb:function bCb(){},
bCf:function bCf(d){this.a=d},
bCe:function bCe(d){this.a=d},
bCg:function bCg(d){this.a=d},
bCh:function bCh(d){this.a=d},
bCi:function bCi(d,e){this.a=d
this.b=e},
bCj:function bCj(d){this.a=d},
bCk:function bCk(d){this.a=d},
bCl:function bCl(d){this.a=d},
bCd:function bCd(){},
aBm:function aBm(){var _=this
_.d=_.c=_.b=_.a=null
_.e=!0},
bCa:function bCa(d){this.a=d},
bC9:function bC9(d){this.a=d},
Fj:function Fj(d,e){this.a=d
this.b=e},
cB4:function cB4(){},
dox(d,e,f,g,h,i,j){return new A.Mj(j,g,h,i,f,e,d,null)},
a9Y:function a9Y(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
a9Z:function a9Z(d,e,f){var _=this
_.d=d
_.e=e
_.w=_.r=_.f=$
_.x=f
_.c=_.a=null},
bRa:function bRa(){},
bQV:function bQV(d){this.a=d},
bQW:function bQW(d){this.a=d},
bQX:function bQX(d){this.a=d},
bQY:function bQY(d,e){this.a=d
this.b=e},
bQT:function bQT(d){this.a=d},
bQU:function bQU(){},
bQS:function bQS(d){this.a=d},
bQR:function bQR(d){this.a=d},
bQQ:function bQQ(){},
bQP:function bQP(d){this.a=d},
bQO:function bQO(){},
bR3:function bR3(d){this.a=d},
bR2:function bR2(d,e){this.a=d
this.b=e},
bR1:function bR1(){},
bR0:function bR0(d){this.a=d},
bR_:function bR_(d,e){this.a=d
this.b=e},
bQZ:function bQZ(){},
bR5:function bR5(d,e){this.a=d
this.b=e},
bR4:function bR4(d){this.a=d},
bR9:function bR9(d){this.a=d},
bR8:function bR8(d){this.a=d},
bR6:function bR6(d){this.a=d},
bR7:function bR7(d,e){this.a=d
this.b=e},
Mj:function Mj(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
jP:function jP(d,e,f){this.c=d
this.a=e
this.b=f},
dg0(d){var w=B.bD("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$",!0,!1,!1)
if(!w.b.test(d.toLowerCase()))return C.C.S()
d=B.dx(d.toUpperCase(),"#","")
return B.ds(d.length===6?"FF"+d:d,16)},
bmC(d){var w=A.dg0(d)
return new A.au6((C.c.V(w,24)&255)/255,(C.c.V(w,16)&255)/255,(C.c.V(w,8)&255)/255,(w&255)/255,C.h)},
a9U(d){var w,v=""
try{v="rgba("+C.b.bQ(B.a([d.gRL(),d.gL2(),d.gOG(),B.oZ(C.e.bj(d.geW(d),1))],x.a),",")+")"}catch(w){v="rgba(0,0,0,0)"}return v},
au6:function au6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a_1:function a_1(d,e){this.c=d
this.a=e},
b6w:function b6w(d){this.a=d},
b6v:function b6v(d,e){this.a=d
this.b=e},
a0R:function a0R(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aNz:function aNz(){this.d=$
this.c=this.a=null},
c5Y:function c5Y(d,e){this.a=d
this.b=e},
c5W:function c5W(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c5X:function c5X(d,e){this.a=d
this.b=e},
c5U:function c5U(d,e){this.a=d
this.b=e},
c5S:function c5S(d,e){this.a=d
this.b=e},
c5T:function c5T(d,e){this.a=d
this.b=e},
c5V:function c5V(d,e){this.a=d
this.b=e},
t0:function t0(d,e){this.a=d
this.b=e},
arV(d,e,f,g,h,i){return new A.a0V(d,e,f,g,i,h)},
a0V:function a0V(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.Q=h
_.a=i},
a0W:function a0W(d,e,f){var _=this
_.e=d
_.r=_.f=null
_.w=$
_.x=e
_.y=f
_.c=_.a=null},
bfO:function bfO(d){this.a=d},
bfI:function bfI(d,e){this.a=d
this.b=e},
bfK:function bfK(d){this.a=d},
bfJ:function bfJ(d,e){this.a=d
this.b=e},
bfN:function bfN(d,e){this.a=d
this.b=e},
bfL:function bfL(d){this.a=d},
bfM:function bfM(){},
aNH:function aNH(){},
amb:function amb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cOt(d,e,f,g,h,i){return new A.Zq(e,g,h,d,f)},
Zq:function Zq(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.a=h},
aLh:function aLh(){this.c=this.a=null},
hy:function hy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ph:function ph(d,e){this.a=d
this.b=e},
ayU:function ayU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aop:function aop(d,e){this.b=d
this.a=e},
aGi:function aGi(d,e){this.b=d
this.a=e},
aAL:function aAL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
nU:function nU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bpV:function bpV(d,e){this.a=d
this.b=e},
bp2:function bp2(d){this.a=d},
Rt:function Rt(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aPs:function aPs(d){var _=this
_.d=d
_.e=""
_.f=$
_.c=_.a=null},
cdf:function cdf(d,e){this.a=d
this.b=e},
cdb:function cdb(d){this.a=d},
cda:function cda(d,e){this.a=d
this.b=e},
cdc:function cdc(){},
cdd:function cdd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cd8:function cd8(d,e,f){this.a=d
this.b=e
this.c=f},
cd9:function cd9(){},
cde:function cde(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aHg:function aHg(d,e){this.a=d
this.b=e},
UI:function UI(d,e,f){this.c=d
this.d=e
this.a=f},
ahK:function ahK(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=f
_.c=_.a=null},
ctv:function ctv(d,e){this.a=d
this.b=e},
ctu:function ctu(){},
ctw:function ctw(d){this.a=d},
ctt:function ctt(d){this.a=d},
VM:function VM(d,e,f){this.e=d
this.c=e
this.a=f},
VL:function VL(d,e,f,g){var _=this
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
abk:function abk(d,e,f){var _=this
_.a=$
_.b=d
_.c=e
_.Y$=0
_.a8$=f
_.am$=_.bd$=0},
b8e:function b8e(){},
uE:function uE(d,e){this.a=d
this.b=e},
cHa(d,e,f,g){var w,v,u,t=C.d.bC(d).toLowerCase()
if(!(C.d.be(t,B.bD("<!DOCTYPE html>",!1,!1,!1))&&C.d.p(t,B.bD("<html",!1,!1,!1))&&C.d.p(t,B.bD("</html>",!1,!1,!1))))t='    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>IFrame '+g+"</title>\n    </head>\n    <body>\n    "+d+"\n    </body>\n    </html>\n    "
else t=d
w=x.N
t=A.cRc(t,B.dw(["parent.connect_js_to_flutter"+g+" && parent.connect_js_to_flutter"+g+"(window)"],w),D.avZ)
if(f.gd8(f)){v=B.aU(w)
for(w=f.gab(f);w.q();){u=w.gL(0)
u.gbLO()
v.t(0,u.gbLO())}t=A.cRc(t,v,D.avX)}return t},
cRc(d,e,f){return A.cRb(f,d,"\n<script>\n"+e.hs(0,new A.bnF())+"\n</script>\n")},
cRd(d,e,f){var w=B.bD("<"+d+"([^>]*)>",!1,!1,!1)
B.Tc(0,0,e.length,"startIndex")
return B.dEb(e,w,new A.bnG(d,f),0)},
cRb(d,e,f){var w
switch(d.a){case 2:return A.cRd("head",e,f)
case 0:return A.cRd("body",e,f)
case 3:w=C.d.ds(e,"</head>")
return C.d.af(e,0,w)+f+"\n"+C.d.d6(e,w)
case 1:w=C.d.ds(e,"</body>")
return C.d.af(e,0,w)+f+"\n"+C.d.d6(e,w)}},
a11:function a11(d,e){this.a=d
this.b=e},
bnF:function bnF(){},
bnG:function bnG(d,e){this.a=d
this.b=e},
a8P:function a8P(d,e){this.a=d
this.b=e},
aub:function aub(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
bW_:function bW_(){},
CB:function CB(){},
an6:function an6(){},
ao3:function ao3(){},
aHU:function aHU(){},
q_:function q_(d,e){this.c=d
this.a=e},
MZ:function MZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqr:function bqr(d,e){this.a=d
this.b=e},
b2W:function b2W(d,e){this.a=d
this.b=e},
abj:function abj(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aiM:function aiM(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.c=_.a=null},
czy:function czy(d){this.a=d},
czv:function czv(d){this.a=d},
czq:function czq(d,e){this.a=d
this.b=e},
czp:function czp(d){this.a=d},
czu:function czu(d){this.a=d},
czr:function czr(){},
czs:function czs(d){this.a=d},
czt:function czt(){},
czw:function czw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
czx:function czx(d,e){this.a=d
this.b=e},
d0c(d){return x.B.b(d)||x.D.b(d)||x.l.b(d)||x.t.b(d)||x.V.b(d)||x.cg.b(d)||x.bj.b(d)},
cQ0(d,e,f,g,h,i,j,k,l,m,n){var w=null
return new B.D0(i,m,w,w,j,w,k,8,l,g,w,w,24,!0,!1,48,f,w,!1,e,w,w,w,d,w,w,!1,w,n.i("D0<0>"))},
Zu(d,e){var w=null,v=B.bI(8)
return new B.a3(C.as,new A.S2(d,C.ay,B.R(e,w,w,w,w,w,w,w,B.an(w,w,C.fJ,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w,w,w),new B.df(v,C.y),w),w)},
cVl(d){var w=C.a2d.h(0,(d==null?C.aa:d).a)
w.toString
return B.dx(w,"w","")},
dmG(d){var w=B.dq(d,0,null)
if(C.d.p(w.goP(w).toLowerCase(),"youtube"))return A.dmF(d)
else if(C.d.p(w.goP(w).toLowerCase(),"vimeo"))return A.dmE(d)
else return d},
dmF(d){var w,v,u,t
if(!C.d.p(d,"http")&&d.length===11)return d
C.d.bC(d)
for(w=[B.bD("^https:\\/\\/(?:www\\.|m\\.)?youtube\\.com\\/watch\\?v=([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bD("^https:\\/\\/(?:music\\.)?youtube\\.com\\/watch\\?v=([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bD("^https:\\/\\/(?:www\\.|m\\.)?youtube\\.com\\/shorts\\/([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bD("^https:\\/\\/(?:www\\.|m\\.)?youtube(?:-nocookie)?\\.com\\/embed\\/([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1),B.bD("^https:\\/\\/youtu\\.be\\/([_\\-a-zA-Z0-9]{11}).*$",!0,!1,!1)],v=null,u=0;u<5;++u){t=w[u].rT(d)
if(t!=null&&t.b.length-1>=1)v=t.b[1]}if(v==null)return null
return"https://www.youtube.com/embed/"+v},
dmE(d){var w=B.bD("(?:http|https)?:?\\/?\\/?(?:www\\.)?(?:player\\.)?vimeo\\.com\\/(?:channels\\/(?:\\w+\\/)?|groups\\/(?:[^\\/]*)\\/videos\\/|video\\/|)(\\d+)(?:|\\/\\?)",!1,!1,!1).rT(d),v=w==null?null:w.b[1]
if(v==null)return null
return"https://player.vimeo.com/video/"+v}},D,Y,O,G,Z,F,E,A_,A0,A1,A2,P,A3
J=c[1]
B=c[0]
C=c[2]
K=c[196]
Q=c[219]
L=c[165]
R=c[248]
M=c[235]
S=c[187]
N=c[277]
T=c[199]
H=c[313]
I=c[115]
U=c[322]
V=c[138]
W=c[197]
X=c[314]
A=a.updateHolder(c[47],A)
D=c[319]
Y=c[323]
O=c[169]
G=c[141]
Z=c[125]
F=c[160]
E=c[320]
A_=c[163]
A0=c[148]
A1=c[178]
A2=c[321]
P=c[170]
A3=c[281]
A.pu.prototype={
h(d,e){if(typeof e!="string"&&typeof e!="number")throw B.n(B.ce("property is not a String or num",null))
return A.cKp(this.a[e])},
m(d,e,f){if(typeof e!="string"&&typeof e!="number")throw B.n(B.ce("property is not a String or num",null))
this.a[e]=A.cKq(f)},
k(d,e){if(e==null)return!1
return e instanceof A.pu&&this.a===e.a},
j(d){var w,v
try{w=String(this.a)
return w}catch(v){w=this.qY(0)
return w}},
x7(d,e){var w=this.a,v=e==null?null:B.b_(new B.N(e,A.dCv(),B.W(e).i("N<1,@>")),!0,x.z)
return A.cKp(w[d].apply(w,v))},
bBw(d){return this.x7(d,null)},
gv(d){return 0}}
A.RE.prototype={}
A.JA.prototype={
anJ(d){var w=d<0||d>=this.gu(0)
if(w)throw B.n(B.fx(d,0,this.gu(0),null,null))},
h(d,e){if(B.h5(e))this.anJ(e)
return this.aTl(0,e)},
m(d,e,f){if(B.h5(e))this.anJ(e)
this.alP(0,e,f)},
gu(d){var w=this.a.length
if(typeof w==="number"&&w>>>0===w)return w
throw B.n(B.ad("Bad JsArray length"))},
su(d,e){this.alP(0,"length",e)},
t(d,e){this.x7("push",[e])},
H(d,e){this.x7("push",e instanceof Array?e:B.b_(e,!0,x.z))},
kE(d){if(this.gu(0)===0)throw B.n(B.iZ(-1))
return this.bBw("pop")},
eg(d,e,f,g,h){var w,v
A.dh3(e,f,this.gu(0))
w=f-e
if(w===0)return
if(h<0)throw B.n(B.ce(h,null))
v=[e,w]
C.b.H(v,J.Hj(g,h).mZ(0,w))
this.x7("splice",v)},
i5(d,e,f,g){return this.eg(0,e,f,g,0)},
e2(d,e){this.x7("sort",e==null?[]:[e])},
$iaZ:1,
$iy:1,
$iB:1}
A.Wx.prototype={
m(d,e,f){return this.aTm(0,e,f)}}
A.HA.prototype={
uE(d,e,f){return new A.HA(this.w,f,null)},
ea(d){return!this.w.k(0,d.w)}}
A.S2.prototype={
gkh(d){return this.c!=null},
B(d){var w,v,u,t,s=this,r=null,q=B.D(d),p=B.cFO(d),o=p.ait(s),n=q.ok.as
n.toString
n=n.cl(p.a3x(s))
w=p.y
if(w==null)w=p.a3x(s).P(0.12)
v=p.z
if(v==null)v=p.a3x(s).P(0.04)
u=p.aNA(s)
t=new B.ac(p.a,1/0,p.b,1/0).aD6(r,r)
return V.cU4(C.M,!1,s.dx,C.k,t,0,2,!0,o,w,4,r,q.cx,8,v,4,q.f,r,r,r,s.c,u,s.fx,q.id,n,q.Q)}}
A.a2m.prototype={
M(){return new A.aOV(B.a([D.bKu,D.bKx,D.bKA,D.bKz,D.ae8,D.aec,D.aea],x.f),C.fJ)}}
A.aOV.prototype={
U(){var w,v=this
v.ah()
w=v.a
v.d=w.c
w.d.Ra(new A.cbN(v))
v.a.d.bOe(new A.cbO())
B.d9(C.kq,new A.cbP(v))},
l(){this.a.d.l()
this.al()},
B(d){var w=this,v=null,u=w.a.d,t=x.p,s=B.a([],t),r=u.b,q=w.a.d
return B.at(B.a([new B.ao(50,v,new A.a9Y(w.f,u,s,25,C.ay,w.r,W.BD,C.as,C.I,C.j,r),v),new B.eT(1,C.fP,new A.a6r(200,v,!0,q,new A.cbG(),C.aB,new A.cbH(w),new A.cbI(),new A.cbJ(),new A.cbK(),D.bH_,D.av1,D.bI8,C.H,C.avk,!1,new A.cbL(w),q.a),v)],t),C.K,C.f,C.i,0,v)},
tq(d){return this.aPU(d)},
aPU(d){var w=0,v=B.l(x.H),u=this
var $async$tq=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:w=2
return B.d(u.a.d.Lg(d),$async$tq)
case 2:return B.j(null,v)}})
return B.k($async$tq,v)}}
A.a5Y.prototype={
B(d){return $.d3f().aBJ(this.c,!1,this.a)}}
A.a6r.prototype={
M(){return new A.a6s()}}
A.a6s.prototype={
U(){var w,v=this
v.y=$.Og().aHl("packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js")
w=v.a.ax.d
if(w==null)w="Roboto"
v.z=w
v.Q=B.rx(4,w,C.ax,!1)
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
v.fF()
this.al()},
B(d){var w=this.y
w===$&&B.b()
return A_.cH0(new A.bCq(this),w,x.z)},
b0H(d,e){var w,v,u,t,s,r,q=this
q.e=q.aqY(e)
w=C.c.j(B.dR(q.a.r.b))
v=q.e
u=q.r
u===$&&B.b()
t=B.dw([new A.uE("EditorResizeCallback",new A.bCf(q)),new A.uE("UpdateFormat",new A.bCg(q)),new A.uE("OnTextChanged",new A.bCh(q)),new A.uE("FocusChanged",new A.bCi(q,d)),new A.uE("OnEditingCompleted",new A.bCj(q)),new A.uE("OnSelectionChanged",new A.bCk(q)),new A.uE("EditorLoaded",new A.bCl(q))],x.C)
s=q.as
r=q.a.db.$1(d)
return new B.ch(C.ad,null,C.ab,C.v,B.a([new A.abj(v,D.ad2,e,u,new A.bCm(q),t,!1,new A.bCn(q),new A.bCo(q),D.alW,new B.cl(w,x.X)),B.ji(r,!s)],x.p),null)},
Vw(){var w=0,v=B.l(x.N),u,t=this,s
var $async$Vw=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.ql("getHtmlText",[]),$async$Vw)
case 3:u=e
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Vw,v)},
VF(){var w=0,v=B.l(x.z),u,t=this,s
var $async$VF=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.ql("getSelectionRange",[]),$async$VF)
case 3:u=e
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$VF,v)},
Xp(d,e){return this.bsY(d,e)},
bsY(d,e){var w=0,v=B.l(x.z),u,t=this,s
var $async$Xp=B.h(function(f,g){if(f===1)return B.i(g,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.ql("setSelection",[d,e]),$async$Xp)
case 3:u=g
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Xp,v)},
Xn(d){return this.bsQ(d)},
bsQ(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$Xn=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.ql("setHtmlText",[d]),$async$Xn)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Xn,v)},
V8(d){return this.b6A(d)},
b6A(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$V8=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.ql("embedVideo",[d]),$async$V8)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$V8,v)},
V7(d){return this.b6z(d)},
b6z(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$V7=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.ql("embedImage",[d]),$async$V7)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$V7,v)},
V9(d){return this.b6H(!0)},
b6H(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$V9=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.ql("enableEditor",[!0]),$async$V9)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$V9,v)},
Xm(d,e){return this.bsP(d,e)},
bsP(d,e){var w=0,v=B.l(x.z),u,t=2,s=[],r=this,q,p,o,n
var $async$Xm=B.h(function(f,g){if(f===1){s.push(g)
w=t}while(true)switch(w){case 0:t=4
p=r.d
p===$&&B.b()
w=7
return B.d(p.ql("setFormat",[d,e]),$async$Xm)
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
return B.k($async$Xm,v)},
W9(d,e){return this.bhH(d,e)},
bhH(d,e){var w=0,v=B.l(x.z),u,t=this,s
var $async$W9=B.h(function(f,g){if(f===1)return B.i(g,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.ql("insertTable",[e,d]),$async$W9)
case 3:u=g
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$W9,v)},
Wv(d){return this.bjL(d)},
bjL(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$Wv=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.ql("modifyTable",[d.b]),$async$Wv)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Wv,v)},
Y9(){var w=0,v=B.l(x.z),u,t=this,s
var $async$Y9=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.ql("undo",[]),$async$Y9)
case 3:u=e
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Y9,v)},
X0(){var w=0,v=B.l(x.z),u,t=this,s
var $async$X0=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.ql("redo",[]),$async$X0)
case 3:u=e
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$X0,v)},
UE(){var w=0,v=B.l(x.z),u,t=this,s
var $async$UE=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=t.d
s===$&&B.b()
w=3
return B.d(s.ql("clearHistory",[]),$async$UE)
case 3:u=e
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$UE,v)},
aqY(c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2="0",b3="px !important;\n          padding-right:",b4="px !important;\n          padding-top:",b5="px !important;\n          padding-bottom:",b6=";\n          font-size: ",b7="px;\n          color:",b8=";\n          background-color:",b9=";\n          font-weight: ",c0=b1.Q
c0===$&&B.b()
w=b1.x
v=b1.z
v===$&&B.b()
u=A.a9U(b1.a.y)
t=A.a9U(b1.a.y)
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
l=A.a9U(l==null?C.o:l)
k=A.a9U(b1.a.y)
j=b1.a.ch
i=j.x
if(i==null)i=E.Df
j=A.cVl(j.w)
h=b1.z
g=b1.a.ax
f=g.x
if(f==null)f=E.Df
g=g.r
g=B.o(g==null?"14":g)
e=b1.a.ax.b
e=A.a9U(e==null?C.o:e)
d=A.a9U(b1.a.y)
a0=b1.a.ax
a0=A.cVl(a0.w)
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
A.aBm.prototype={
am0(){var w,v=this,u=null
v.a=new B.aS(A.cZo(15),x.h)
v.b=new B.aS(A.cZo(15),x.U)
w=x.N
v.c=B.hf(u,u,u,u,!1,w)
v.d=B.hf(u,u,u,u,!1,w)},
KY(){var w=0,v=B.l(x.N),u,t=2,s=[],r=this,q,p,o,n
var $async$KY=B.h(function(d,e){if(d===1){s.push(e)
w=t}while(true)switch(w){case 0:t=4
p=r.a.ga0()
p=p==null?null:p.Vw()
w=7
return B.d(x.F.b(p)?p:B.c6(p,x.T),$async$KY)
case 7:q=e
if(J.p(q,"<p><br></p>")){p=q
p.toString
p=B.dx(p,"<p><br></p>","")
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
Lg(d){return this.aQN(d)},
aQN(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$Lg=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.a.ga0()
s=s==null?null:s.Xn(d)
w=3
return B.d(x._.b(s)?s:B.c6(s,x.z),$async$Lg)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Lg,v)},
Qo(d,e){return this.bKK(d,e)},
bKK(d,e){var w=0,v=B.l(x.z),u,t=this,s
var $async$Qo=B.h(function(f,g){if(f===1)return B.i(g,v)
while(true)switch(w){case 0:s=t.a.ga0()
s=s==null?null:s.W9(e,d)
w=3
return B.d(x._.b(s)?s:B.c6(s,x.z),$async$Qo)
case 3:u=g
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Qo,v)},
a0C(d){return this.bNo(d)},
bNo(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$a0C=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.a.ga0()
s=s==null?null:s.Wv(d)
w=3
return B.d(x._.b(s)?s:B.c6(s,x.z),$async$a0C)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a0C,v)},
a_4(d){return this.bGy(d)},
bGy(d){var w=0,v=B.l(x.z),u,t=this,s,r
var $async$a_4=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:r=A.dmG(d)
if(r==null){w=1
break}s=t.a.ga0()
s=s==null?null:s.V8(r)
w=3
return B.d(x._.b(s)?s:B.c6(s,x.z),$async$a_4)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a_4,v)},
a_3(d){return this.bGx(d)},
bGx(d){var w=0,v=B.l(x.z),u,t=this,s
var $async$a_3=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:s=t.a.ga0()
s=s==null?null:s.V7(d)
w=3
return B.d(x._.b(s)?s:B.c6(s,x.z),$async$a_3)
case 3:u=f
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a_3,v)},
a_5(d){return this.bGB(!0)},
bGB(d){var w=0,v=B.l(x.H),u=this,t
var $async$a_5=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:u.e=!0
t=u.a.ga0()
t=t==null?null:t.V9(!0)
w=2
return B.d(x._.b(t)?t:B.c6(t,x.z),$async$a_5)
case 2:return B.j(null,v)}})
return B.k($async$a_5,v)},
SP(){var w=0,v=B.l(x.n),u,t=this,s,r
var $async$SP=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:r=t.a.ga0()
r=r==null?null:r.VF()
w=3
return B.d(x._.b(r)?r:B.c6(r,x.z),$async$SP)
case 3:s=e
u=s!=null?A.cUH(C.aA.u0(0,s,null)):new A.Fj(0,0)
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$SP,v)},
Tz(d,e,f){return this.aQw(0,e,f)},
aQw(d,e,f){var w=0,v=B.l(x.z),u,t=this,s
var $async$Tz=B.h(function(g,h){if(g===1)return B.i(h,v)
while(true)switch(w){case 0:s=t.a.ga0()
s=s==null?null:s.Xp(e,f)
w=3
return B.d(x._.b(s)?s:B.c6(s,x.z),$async$Tz)
case 3:u=h
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$Tz,v)},
we(d,e){return this.aPO(d,e)},
aPO(d,e){var w=0,v=B.l(x.H),u=this,t
var $async$we=B.h(function(f,g){if(f===1)return B.i(g,v)
while(true)switch(w){case 0:t=u.a.ga0()
if(t!=null)t.Xm(d,e)
return B.j(null,v)}})
return B.k($async$we,v)},
Ra(d){var w,v,u
try{w=this.c
v=(w.b&1)===0
if(v)new B.cJ(w,B.t(w).i("cJ<1>")).el(new A.bCa(d))}catch(u){}return},
bOe(d){var w,v,u
try{w=this.d
v=(w.b&1)===0
if(v)new B.cJ(w,B.t(w).i("cJ<1>")).el(new A.bC9(d))}catch(u){}return},
l(){this.c.aC(0)
this.d.aC(0)},
w0(){var w=0,v=B.l(x.H),u=this,t
var $async$w0=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:t=u.a.ga0()
t=t==null?null:t.Y9()
w=2
return B.d(x._.b(t)?t:B.c6(t,x.z),$async$w0)
case 2:return B.j(null,v)}})
return B.k($async$w0,v)},
vP(){var w=0,v=B.l(x.H),u=this,t
var $async$vP=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:t=u.a.ga0()
t=t==null?null:t.X0()
w=2
return B.d(x._.b(t)?t:B.c6(t,x.z),$async$vP)
case 2:return B.j(null,v)}})
return B.k($async$vP,v)},
Zc(){var w=0,v=B.l(x.H),u=this,t
var $async$Zc=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:t=u.a.ga0()
t=t==null?null:t.UE()
w=2
return B.d(x._.b(t)?t:B.c6(t,x.z),$async$Zc)
case 2:return B.j(null,v)}})
return B.k($async$Zc,v)}}
A.Fj.prototype={
gu(d){return this.b}}
A.a9Y.prototype={
M(){return new A.a9Z(B.a([],x.c),B.I(x.N,x.z),C.ej)}}
A.a9Z.prototype={
U(){var w,v,u,t,s,r,q=this,p=x.q
q.f=new B.aS("fontBgColorKey"+C.c.j(B.dR(q.a.d)),p)
q.r=new B.aS("fontColorKey"+C.c.j(B.dR(q.a.d)),p)
q.w=new B.aS("_tablePickerKey"+C.c.j(B.dR(q.a.d)),p)
p=q.a
q.x=p.y
for(p=p.c,w=0;w<7;++w){v=p[w]
u=q.d
t=q.a
s=t.x
r=t.r
t=t.f
u.push(new A.Mj(v,!1,null,q.x,t,r,s,null))}q.ah()},
B(d){var w=null,v=this.a,u=v.w
v=v.z
u=B.ny(B.ar(w,B.dC(B.deJ(this.b8d(d),C.k,C.K,v,w,C.f,C.i,0,w,w,C.m),w,C.r,w,w,w,v),C.k,w,w,new B.b3(u,w,w,w,w,w,w,C.L),w,w,w,w,w,w,w,17976931348623157e292),!1,w)
return u},
bUj(d){var w,v,u,t,s,r,q=this,p="direction",o="color",n="align",m="background"
q.e=d
for(w=J.a1(d),v=0;u=q.d,v<u.length;++v){t=u[v]
switch(t.c.a){case 0:u[v]=t.iZ(J.p(w.h(d,"bold"),!0))
break
case 1:u[v]=t.iZ(J.p(w.h(d,"italic"),!0))
break
case 2:u[v]=t.iZ(J.p(w.h(d,"underline"),!0))
break
case 3:u[v]=t.iZ(J.p(w.h(d,"strike"),!0))
break
case 4:u[v]=t.iZ(J.p(w.h(d,"blockquote"),!0))
break
case 5:u[v]=t.iZ(J.p(w.h(d,"code-block"),!0))
break
case 6:u[v]=t.iZ(w.h(d,"indent")!=null)
break
case 7:u[v]=t.iZ(w.h(d,"indent")!=null)
break
case 8:u[v]=t.iZ(J.p(w.h(d,p),"rtl"))
break
case 9:u[v]=t.iZ(!J.p(w.h(d,p),"rtl"))
break
case 17:u[v]=t.iZ(w.h(d,"size")!=null)
break
case 10:u[v]=t.iZ(J.p(w.h(d,"header"),1))
break
case 11:u[v]=t.iZ(J.p(w.h(d,"header"),2))
break
case 12:u[v]=t.iZ(w.h(d,o)!=null)
try{if(w.h(d,o)!=null){u=B.ms(J.az(w.h(d,o)).a,null)
t=q.e
s=J.d1(t)
if(u==="List<dynamic>")s.m(t,o,J.v(w.h(d,o),0))
else s.m(t,o,w.h(d,o))}}catch(r){}break
case 14:if(w.h(d,n)==null)w.m(d,n,"")
u=q.d
u[v]=u[v].iZ(w.h(d,n)!=null)
break
case 15:u[v]=t.iZ(J.p(w.h(d,"list"),"ordered"))
break
case 16:u[v]=t.iZ(J.p(w.h(d,"list"),"bullet"))
break
case 19:u[v]=t.iZ(w.h(d,"image")!=null)
break
case 20:u[v]=t.iZ(w.h(d,"video")!=null)
break
case 21:u[v]=t.iZ(w.h(d,"clean")!=null)
break
case 13:u[v]=t.iZ(w.h(d,m)!=null)
try{if(w.h(d,m)!=null){u=B.ms(J.az(w.h(d,m)).a,null)
t=q.e
s=J.d1(t)
if(u==="List<dynamic>")s.m(t,m,J.v(w.h(d,m),0))
else s.m(t,m,w.h(d,m))}}catch(r){}break
case 18:J.c7(q.e,"link",w.h(d,"link"))
break
case 22:case 23:case 26:case 25:case 24:case 27:break}}q.A(new A.bRa())},
b8d(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.a([],x.p)
for(w=0;v=p.d,w<v.length;++w){u={}
t=u.a=v[w]
v=t.c
if(v===D.bKD)n.push(B.hH(new B.a3(p.x,p.b7V(),o),o,o,o,v.c,o,o,o,o,o,o,E.fe))
else if(v===D.ae8){u=p.x
s=p.a.f
n.push(B.hH(new B.a3(u,new B.ao(s,s,p.b_B(),o),o),o,o,o,v.c,o,o,o,o,o,o,E.fe))}else if(v===D.bKH){u=p.x
s=p.a.f
n.push(B.hH(new B.a3(u,new B.ao(s,s,p.b8S(w),o),o),o,o,o,v.c,o,o,o,o,o,o,E.fe))}else if(v===D.bKG){u=p.x
s=p.a
r=s.f-2
s=G.a2B("packages/quill_html_editor/assets/camera_roll_icon.png",s.r,o,o,o)
J.v(p.e,"video")
n.push(B.hH(new B.a3(u,new A.Rt(new A.bQV(p),D.bNd,p.a.d,new B.ao(r,r,s,o),o),o),o,o,o,v.c,o,o,o,o,o,o,E.fe))}else if(v===D.aea){u=p.x
s=p.a
s=B.b1(D.axW,s.r,o,s.f)
J.v(p.e,"link")
n.push(B.hH(new B.a3(u,new A.Rt(new A.bQW(p),D.bNe,p.a.d,s,o),o),o,o,o,v.c,o,o,o,o,o,o,E.fe))}else if(v===D.bKE){u=p.x
s=p.a.f
n.push(B.hH(new B.a3(u,new B.ao(s,s,p.b8R(w),o),o),o,o,o,v.c,o,o,o,o,o,o,E.fe))}else if(v===D.bKt){u=p.x
s=p.a.f
n.push(B.hH(new B.a3(u,new B.ao(s,s,p.b9t(w,d),o),o),o,o,o,v.c,o,o,o,o,o,o,E.fe))}else if(v===D.bKw){u=p.x
s=p.a
r=s.r
q=s.f
n.push(B.hH(new A.a0R(s.w,r,q,u,new A.bQX(p),o),o,o,o,v.c,o,o,o,o,o,o,E.fe))}else if(v===D.bKF){u=p.a
s=u.z
v=v.c
r=p.x
q=u.f
u=u.r
if(s===C.a7)n.push(B.hH(new B.a3(r,B.ar(o,o,C.k,u,o,o,o,q,o,o,o,o,o,0.8),o),o,o,o,v,o,o,o,o,o,o,E.fe))
else n.push(B.hH(new B.a3(r,B.ar(o,o,C.k,u,o,o,o,0.8,o,o,o,o,o,q),o),o,o,o,v,o,o,o,o,o,o,E.fe))}else{s=p.a
r=s.x
q=s.r
s=s.f
n.push(B.hH(new A.Mj(v,t.d,new A.bQY(u,p),p.x,s,q,r,o),o,o,o,v.c,o,o,o,o,o,o,E.fe))}}p.a.toString
return n},
b8T(d,e){switch(d.a){case 0:return B.z(["format","bold","value",e],x.N,x.z)
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
b7V(){var w,v=this,u=null,t=v.a.w,s=J.v(v.e,"size")
if(s==null)s="normal"
w=B.an(u,u,v.a.r,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u)
return O.asw(C.N,new B.zl(A.cOu(!0,A.cQ0(C.bC,t,u,u,!0,B.a([v.Vm(8,"Small"),v.Vm(12,"Normal"),v.Vm(16,"Large"),v.Vm(20,"Huge")],x.g),new A.bQR(v),new A.bQS(v),w,s,x.z),C.Q),u),C.k,C.hc)},
Vm(d,e){var w=null,v=J.p(J.v(this.e,"size"),e.toLowerCase()),u=this.a
return B.Il(new A.q_(B.R(e,w,w,w,w,w,w,w,B.an(w,w,v?u.x:u.r,w,w,w,w,w,w,w,w,d,w,w,C.X,w,w,!0,w,w,w,w,w,w,w,w),w,w,w,w,w),w),e.toLowerCase(),x.z)},
Vl(d){var w=null,v=this.a
return new B.ao(w,w,B.R(d,w,w,w,w,w,w,w,B.an(w,w,d.toLowerCase()!=="normal"?v.x:v.r,w,w,w,w,w,w,w,w,14,w,w,C.X,w,w,!0,w,w,w,w,w,w,w,w),w,w,w,w,w),w)},
b_B(){var w=this,v="align",u=w.a.w,t=J.p(J.v(w.e,v),"")||J.v(w.e,v)==null?"left":J.v(w.e,v)
return new B.zl(A.cOu(!1,A.cQ0(C.cx,u,C.C,D.bCl,!0,B.a([w.Vr("left"),w.Vr("center"),w.Vr("right"),w.Vr("justify")],x.G),new A.bQP(w),null,null,t,x.N),C.Q),null)},
Vr(d){var w,v,u
if(d==="center")w=D.axM
else if(d==="right")w=D.axP
else w=d==="justify"?D.axN:D.axO
v=J.p(J.v(this.e,"align"),d)
u=this.a
v=v?u.x:u.r
return B.Il(new A.q_(B.b1(w,v,null,u.f),null),d,x.N)},
b8S(d){var w,v,u,t=this,s=null,r="color",q=t.r
q===$&&B.b()
w=t.a.f
v=J.v(t.e,r)
u=t.a
v=v!=null?u.x:u.r
u=B.bk(B.R("A",s,s,1,s,s,s,s,B.an(s,s,v,s,s,s,s,s,s,s,s,u.f-5,s,s,C.X,s,s,!0,s,s,s,s,s,s,s,s),s,s,s,s,s),1,s)
v=J.v(t.e,r)!=null?A.bmC(J.v(t.e,r)):C.o
return A.arV(B.fp(C.M,!0,s,new B.ao(w,w,B.aj(B.a([u,B.ar(s,s,C.k,v,s,s,s,3,s,s,s,s,s,t.a.f-3)],x.p),C.j,C.bl,C.U,0,s,C.m),s),C.k,C.C,0,s,s,s,s,s,C.bB),C.l,new A.a_1(new A.bR2(t,d),s),10,q,new A.bR3(t))},
b8R(d){var w,v,u,t,s,r=this,q=null,p="background",o=r.f
o===$&&B.b()
w=B.fN(C.o,C.B,0.1)
v=J.v(r.e,p)!=null?A.bmC(J.v(r.e,p)):C.C
u=r.a.f
t=J.v(r.e,p)
s=r.a
t=t!=null?s.x:s.r
return A.arV(B.fp(C.M,!0,q,B.ar(C.N,O.asw(C.N,B.R("A",q,q,1,q,q,q,q,B.an(q,q,t,q,q,q,q,q,q,q,q,s.f-1,q,q,C.ff,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.k,C.aiN),C.k,q,q,new B.b3(v,q,w,q,q,q,q,C.L),q,u,q,q,q,q,q,u),C.k,C.C,0,q,q,q,q,q,C.bB),C.l,new A.a_1(new A.bR_(r,d),q),10,o,new A.bR0(r))},
b9t(d,e){var w,v=this,u=null,t=v.a,s=t.w,r=v.w
r===$&&B.b()
w=t.f
return A.arV(new B.ao(w,w,G.a2B(y.b,t.r,u,u,u),u),s,new B.ao(u,200,new A.UI(new A.bR4(v),6,u),u),0,r,new A.bR5(v,e))},
btG(d){var w=null
B.fd(w,w,!0,w,new A.bR9(this),d,w,!0,!0,x.z)}}
A.Mj.prototype={
B(d){var w=this,v=null,u=w.c
return B.hH(B.iH(!1,v,!0,new B.a3(w.f,new B.ao(v,v,w.b8Z(u),v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.e,v,v,v,v,v,v,v),v,v,v,u.c,v,v,v,v,v,v,E.fe)},
b8Z(d){var w=this
switch(d.a){case 0:return w.lR(D.O1)
case 1:return w.lR(D.ayv)
case 2:return w.lR(D.ayC)
case 3:return w.lR(D.ayz)
case 4:return w.lR(D.ayy)
case 5:return w.lR(H.tb)
case 7:return w.lR(D.ayu)
case 6:return w.lR(D.ayt)
case 8:return w.lR(D.ayB)
case 9:return w.lR(D.ayA)
case 12:return w.lR(D.O1)
case 14:return w.lR(D.ayr)
case 21:return w.lR(D.ays)
case 15:return w.lR(D.ayx)
case 16:return w.lR(D.ayw)
case 10:return w.aqn("packages/quill_html_editor/assets/h1_dark.png")
case 11:return w.aqn("packages/quill_html_editor/assets/h2_dark.png")
case 13:return w.lR(D.ayq)
case 19:return w.lR(X.NP)
case 22:return w.lR(D.ayF)
case 23:return w.lR(D.ayE)
case 24:return w.lR(D.ayD)
case 18:case 20:case 17:case 25:case 26:case 27:return C.cN}},
lR(d){var w=this,v=w.d?w.x:w.w
return B.b1(d,v,null,w.r)},
aqn(d){var w=this,v=null,u=w.r
return new B.ao(u,u,G.a2B(d,w.d?w.x:w.w,v,v,v),v)},
iZ(d){var w=this
return A.dox(w.x,w.w,w.r,d,null,w.f,w.c)}}
A.jP.prototype={
I(){return"ToolBarStyle."+this.b}}
A.au6.prototype={}
A.a_1.prototype={
B(d){var w=null
return B.ar(w,B.a24(w,C.r,D.bCF,new A.b6w(this),19,w,M.m7,w,C.I,!0),C.k,C.l,w,w,w,120,w,w,w,w,w,120)}}
A.a0R.prototype={
M(){return new A.aNz()},
bOH(d){return this.r.$1(d)}}
A.aNz.prototype={
U(){this.d=new B.aS("fontBgColorKey"+J.aq(this.a.a),x.q)
this.ah()},
B(d){var w,v,u,t,s=this,r=null,q=s.a,p=q.f,o=q.e
q=q.c
w=s.d
w===$&&B.b()
v=s.aps(!1,d)
u=s.a
t=u.e
return new B.a3(p,new B.ao(o,o,A.arV(new B.ao(t,t,G.a2B("packages/quill_html_editor/assets/edit_table.png",u.d,r,r,r),r),q,v,0,w,new A.c5Y(s,d)),r),r)},
a6M(d,e,f){var w,v,u,t,s=null,r="packages/quill_html_editor/assets/insert_row_below.png"
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
return new A.q_(A0.ng(B.iH(!1,s,!0,new B.a3(C.hk,B.at(B.a([new B.ao(t,t,G.a2B(r,v,s,s,s),s),R.ci,B.bk(B.R(w,s,s,s,s,s,s,s,B.an(s,s,v,s,s,s,s,s,s,s,s,s,s,s,C.bd,s,s,!0,s,s,s,s,s,s,s,s),s,s,s,s,s),1,s)],x.p),C.j,C.f,C.U,0,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new A.c5W(this,d,f,e),s,s,s,s,s,s,s),s,u,s,s,s),s)},
btr(d,e){var w=null
B.fd(w,w,!0,w,new A.c5X(this,!0),e,w,!0,!0,x.z)},
aps(d,e){var w,v=null
if(d)return L.iP(v,v,v,new A.q_(new B.eS(new A.c5U(this,!0),v),v),C.Q,v,v,new B.df(B.bI(8),C.y),v,v,v)
w=B.aA(e,v,x.w).w.a.a<450?350:v
return new B.ao(200,w,P.mc(!0,!0,!0,C.v,v,C.r,new A.c5V(this,!1),7,v,v,C.Q,v,v,v,!0,C.I,!0),v)}}
A.t0.prototype={
I(){return"EditTableEnum."+this.b}}
A.a0V.prototype={
M(){var w=null,v=x.M
return new A.a0W(D.MT,new B.ts(B.a([],v),w,w),new B.ts(B.a([],v),w,w))}}
A.a0W.prototype={
ZJ(){},
l(){$.au.m4(this)
this.al()},
U(){var w=this
w.ah()
w.w=new B.aS(J.aq(w.a.a),x.A)
$.au.RG$.push(new A.bfO(w))
$.au.dr$.push(w)},
b8X(d){var w=this,v=w.w
v===$&&B.b()
v=$.au.b2$.x.h(0,v)
v=v==null?null:v.gan()
x.r.a(v)
if(w.c!=null)w.A(new A.bfI(w,v))},
biA(d){var w,v=this,u=v.c
u.toString
u=B.zT(u,x.u)
u.toString
v.x=u
w=B.pD(new A.bfK(v),!1,!1)
v.r=w
u.j2(0,w)},
MJ(){var w,v,u=this.c
if(u!=null){w=x.r.a(u.gan())
v=B.dj(w.co(0,null),C.p)
return new A.hy(w.gD(0).a,w.gD(0).b,v.a,v.b)}this.xy()
return D.MT},
a9w(d){return this.btw(d)},
btw(d){var w=0,v=B.l(x.H),u=this,t,s,r,q,p
var $async$a9w=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:p=B.zT(d,x.u)
p.toString
u.y=p
p=u.e
t=u.MJ()
s=u.c
s.toString
r=x.w
s=B.aA(s,null,r).w
q=u.c
q.toString
r=B.pD(new A.bfN(u,new A.aAL(D.avT,t,p,new A.hy(s.a.a,B.aA(q,null,r).w.a.b,0,0),u.a.f,8).bMc(0,D.MS)),!1,!1)
u.f=r
p=u.y
p.j2(0,r)
u.a.toString
return B.j(null,v)}})
return B.k($async$a9w,v)},
xy(){var w=this.f
if(w!=null){w.hS(0)
this.f=null}},
B(d){var w=null,v=this.a,u=v.Q
return B.cG(w,v.c,C.r,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,u,w,w,w,w,w,w,w,w,!1,C.a9)},
Lk(){var w,v=this
v.a.toString
if(v.f!=null)v.xy()
else{w=v.c
w.toString
v.a9w(w)}}}
A.aNH.prototype={}
A.amb.prototype={
b9y(){var w,v=this,u=null,t=1,s=1,r=!1,q=0
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
w=r?new A.aGi(w,u):new A.aop(w,u)
return B.cJk(new B.Fa(q,B.i1(u,u,!1,u,w,new B.U(v.e,v.f)),u),u,t,s)},
B(d){return this.b9y()}}
A.Zq.prototype={
M(){return new A.aLh()}}
A.aLh.prototype={
B(d){var w=null,v=this.a,u=v.r,t=v.c,s=v.d
return B.fp(C.M,!0,w,B.qZ(B.ar(w,v.w,C.k,w,new B.ac(0,300,0,1/0),new B.b3(t,w,w,u,w,w,w,C.L),w,w,w,w,new B.am(s,s,s,s),w,w,w),1),C.k,C.C,0,w,w,w,w,w,C.bB)}}
A.hy.prototype={}
A.ph.prototype={
I(){return"ElTooltipPosition."+this.b}}
A.ayU.prototype={
B(d){var w=null,v=this.d
v=B.cG(w,B.ar(w,w,C.k,B.cg(C.e.aR(255*this.e),v.S()>>>16&255,v.S()>>>8&255,v.S()&255),w,w,w,w,w,w,w,w,w,w),C.r,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.f,w,w,w,w,w,w,w,w,!1,C.a9)
return v}}
A.aop.prototype={
b1(d,e){var w,v,u,t,s,r,q,p,o,n="cubicTo"
$.ax()
w=B.bm()
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
B.fL(o,n,[0,v*0.95,r*0.18,v*1.09,q,p])
v=s.a
v.toString
B.fL(v,n,[q,p,r,0,r,0])
p=s.a
p.toString
B.fL(p,n,[r,0,0,0,0,0])
r=s.a
r.toString
B.fL(r,n,[0,0,0,t,0,t])
s=s.a
s.toString
B.fL(s,n,[0,t,0,t,0,t])
d.a.eI(u,w)},
h7(d){return!0}}
A.aGi.prototype={
b1(d,e){var w,v,u,t,s,r,q,p,o,n="cubicTo"
$.ax()
w=B.bm()
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
B.fL(o,n,[v*0.58,s,v*0.42,s,p,r])
s=q.a
s.toString
B.fL(s,n,[p,r,0,0,0,0])
p=q.a
p.toString
B.fL(p,n,[0,0,v,0,v,0])
p=q.a
p.toString
B.fL(p,n,[v,0,t,r,t,r])
q=q.a
q.toString
B.fL(q,n,[t,r,t,r,t,r])
d.a.eI(u,w)},
h7(d){return!0}}
A.aAL.prototype={
auY(){var w,v,u,t,s,r=this,q=r.c,p=q.a
q=q.b
w=r.b
v=w.c+w.a*0.5
w=w.d
u=r.e
t=r.a.b
s=r.f
return new A.nU(new A.hy(p,q,v,w-q-u-t),new A.hy(p,q,Math.floor(v),Math.floor(w-u-t)),D.avI,new B.dS(new B.bf(s,s),new B.bf(s,s),C.T,new B.bf(s,s)))},
Y0(){var w,v,u,t,s,r,q=this,p=q.a,o=p.a
p=p.b
w=q.b
v=w.c+w.a*0.5
w=w.d
u=q.e
t=q.c
s=t.a
t=t.b
r=q.f
return new A.nU(new A.hy(s,t,v-s*0.5,w-t-u-p),new A.hy(o,p,Math.floor(v-o*0.5),Math.floor(w-u-p)),D.MS,B.Cv(new B.bf(r,r)))},
auX(){var w,v,u,t,s,r,q=this,p=q.a,o=p.a
p=p.b
w=q.b
v=w.c
u=w.a*0.5
w=w.d
t=q.e
s=q.c
r=q.f
return new A.nU(new A.hy(o,p,v-s.a+u,w-s.b-t-p),new A.hy(o,p,Math.floor(v+u-o),Math.floor(w-t-p)),D.avL,new B.dS(new B.bf(r,r),new B.bf(r,r),new B.bf(r,r),C.T))},
auW(){var w,v,u,t=this,s=t.c,r=s.a
s=s.b
w=t.b
v=w.c+w.a*0.5
w=w.d+w.b+t.e
u=t.f
return new A.nU(new A.hy(r,s,v,w+t.a.b),new A.hy(r,s,Math.ceil(v),Math.ceil(w)),D.avP,new B.dS(C.T,new B.bf(u,u),new B.bf(u,u),new B.bf(u,u)))},
amU(){var w,v,u,t,s,r=this,q=r.a,p=q.a
q=q.b
w=r.b
v=w.c+w.a*0.5
w=w.d+w.b+r.e
u=r.c
t=u.a
s=r.f
return new A.nU(new A.hy(t,u.b,v-t*0.5,w+q),new A.hy(p,q,Math.ceil(v-p*0.5),Math.ceil(w)),D.avQ,B.Cv(new B.bf(s,s)))},
auV(){var w,v,u,t,s=this,r=s.c,q=r.a
r=r.b
w=s.b
v=w.c+w.a*0.5
u=s.a
w=w.d+w.b+s.e
t=s.f
return new A.nU(new A.hy(q,r,v-q,w+u.b),new A.hy(q,r,v-u.a,Math.ceil(w)),D.avR,new B.dS(new B.bf(t,t),C.T,new B.bf(t,t),new B.bf(t,t)))},
at2(){var w,v,u,t=this,s=t.c,r=s.a,q=s.b,p=t.b
s=p.c-s.c
w=t.e
v=t.a.b
p=p.d+p.b*0.5
u=t.f
return new A.nU(new A.hy(r,q,s-r-w-v,p),new A.hy(r,q,Math.floor(s-w-v),p),D.avS,new B.dS(new B.bf(u,u),C.T,new B.bf(u,u),new B.bf(u,u)))},
at0(){var w,v,u,t,s=this,r=s.c,q=r.a,p=r.b,o=s.b
r=o.c-r.c
w=s.e
v=s.a
u=v.b
o=o.d+o.b*0.5
t=s.f
return new A.nU(new A.hy(q,p,r-q-w-u,o-p*0.5),new A.hy(q,p,Math.floor(r-w-u),Math.floor(o-v.a*0.5)),D.avJ,B.Cv(new B.bf(t,t)))},
at1(){var w,v,u,t,s=this,r=s.c,q=r.a,p=r.b,o=s.b
r=o.c-r.c
w=s.e
v=s.a
u=v.b
o=o.d+o.b*0.5
t=s.f
return new A.nU(new A.hy(q,p,r-q-w-u,o-p),new A.hy(q,p,Math.floor(r-w-u),Math.floor(o-v.a)),D.avK,new B.dS(new B.bf(t,t),new B.bf(t,t),new B.bf(t,t),C.T))},
avS(){var w,v,u,t,s,r=this,q=r.c,p=q.a
q=q.b
w=r.b
v=w.c+w.a+r.e
u=Math.floor(v)
w=w.d+w.b*0.5
t=Math.floor(w)
s=r.f
return new A.nU(new A.hy(p,q,Math.floor(v+r.a.b),Math.floor(w)),new A.hy(p,q,u,t),D.avM,new B.dS(C.T,new B.bf(s,s),new B.bf(s,s),new B.bf(s,s)))},
avQ(){var w,v,u,t,s=this,r=s.c,q=r.a
r=r.b
w=s.b
v=w.c+w.a+s.e
w=w.d+w.b*0.5
u=s.a
t=s.f
return new A.nU(new A.hy(q,r,v+u.b,w-r*0.5),new A.hy(q,r,Math.floor(v),Math.floor(w-u.a*0.5)),D.avN,B.Cv(new B.bf(t,t)))},
avR(){var w,v,u,t,s=this,r=s.c,q=r.a
r=r.b
w=s.b
v=w.c+w.a+s.e
w=w.d+w.b*0.5
u=s.a
t=s.f
return new A.nU(new A.hy(q,r,v+u.b,w-r),new A.hy(q,r,Math.floor(v),w-u.a),D.avO,new B.dS(new B.bf(t,t),new B.bf(t,t),C.T,new B.bf(t,t)))},
apY(d){var w,v=d.a,u=v.c,t=!1
if(u>0){w=this.d
if(u+v.a<w.a){u=v.d
v=u>0&&u+v.b<w.b}else v=t}else v=t
if(v)return!0
return!1},
b7H(){var w,v,u=this,t=[u.gbvX(),u.gb0c(),u.gbie(),u.gbrc(),u.gboW(),u.gboV(),u.gbih(),u.gbre(),u.gbif(),u.gbrd(),u.gboU(),u.gboT()]
for(w=0;w<12;++w){v=t[w]
if(u.apY(v.$0()))return v.$0()}return u.Y0()},
bMc(d,e){var w,v=this
switch(e.a){case 0:w=v.auY()
break
case 1:w=v.Y0()
break
case 2:w=v.auX()
break
case 6:w=v.auW()
break
case 7:w=v.amU()
break
case 8:w=v.auV()
break
case 9:w=v.at2()
break
case 10:w=v.at0()
break
case 11:w=v.at1()
break
case 3:w=v.avS()
break
case 4:w=v.avQ()
break
case 5:w=v.avR()
break
default:w=v.Y0()
break}return v.apY(w)?w:v.b7H()}}
A.nU.prototype={}
A.bpV.prototype={
I(){return"InputAction."+this.b}}
A.bp2.prototype={
a1E(){var w=0,v=B.l(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$a1E=B.h(function(d,e){if(d===1){t.push(e)
w=u}while(true)switch(w){case 0:u=3
w=6
return B.d($.cQo.c7().a1F(!1,C.awF,!0),$async$a1E)
case 6:r=e
if(r!=null){q=J.ii(r.a)
p=q.c
if(p!=null){o=C.ha.glY().ci(p)
s.a.$1("data:image/"+B.o(C.b.gZ(q.b.split(".")))+";base64,"+B.o(o))}}u=1
w=5
break
case 3:u=2
j=t.pop()
k=B.ah(j)
if(k instanceof B.k9){n=k
B.hK().$1("Unsupported operation "+B.o(n))}else{m=k
B.hK().$1("File Picker "+J.aq(m))}w=5
break
case 2:w=1
break
case 5:return B.j(null,v)
case 1:return B.i(t.at(-1),v)}})
return B.k($async$a1E,v)}}
A.Rt.prototype={
M(){return new A.aPs(new B.aS(null,x.m))},
bPi(d,e){return this.c.$1(e)}}
A.aPs.prototype={
U(){this.f=new B.aS(C.c.j(B.dR(this.a.e)),x.q)
this.ah()},
B(d){return this.aNZ(d)},
aNZ(d){var w,v,u=this,t={}
t.a=null
w=u.f
w===$&&B.b()
v=u.b9v(!0,0,0,null,d)
return A.arV(u.a.r,C.l,v,10,w,new A.cdf(t,u))},
b9v(d,e,f,g,h){var w,v,u,t=this,s=null,r={}
r.a=e
r.b=f
w=B.aA(h,s,x.w).w
v=A.bmC("#E7F0FE")
u=B.bI(10)
return new A.q_(B.uU(s,s,new B.a3(new B.am(0,0,0,w.f.d),B.ar(C.N,B.at(B.a([S.iy,new B.eT(1,C.bv,new B.a3(C.iW,B.ar(s,B.ep(s,!1,s,D.aAk,!1,s,s,s,s,1,1,!1,new A.cdb(t),s,s,s,s,!1,s,s,C.H,s,new A.cdc()),C.k,s,s,new B.b3(v,s,s,u,s,s,s,C.L),s,s,s,s,s,s,s,s),s),s),B.bW(s,s,s,s,s,s,D.azG,s,s,s,new A.cdd(r,t,g,!0,h),s,s,s,s,s),K.pZ,B.bW(s,s,s,s,s,s,D.azh,s,s,s,new A.cde(r,t,!0,h),s,s,s,s,s),K.pZ],x.p),C.j,C.f,C.i,0,s),C.k,s,s,s,s,60,s,s,s,s,s,s),s),t.d,s),s)}}
A.aHg.prototype={
I(){return"UrlInputType."+this.b}}
A.UI.prototype={
M(){return new A.ahK(B.aU(x.S),B.aU(x.e),new B.aS(null,x.A))},
bPj(d,e){return this.c.$2(d,e)}}
A.ahK.prototype={
U(){this.ah()},
b59(d){var w,v,u,t,s,r=this
r.b2E()
w=$.au.b2$.x.h(0,r.w).A8(x.r)
w.toString
v=B.a([],x.L)
u=new B.c5(new Float64Array(16))
u.fW()
if(w.f6(new B.wD(v,B.a([u],x.O),B.a([],x.b)),w.hC(d.gaL(d))))for(w=v.length,u=r.e,t=0;t<v.length;v.length===w||(0,B.M)(v),++t){s=v[t].a
if(s instanceof A.VL&&!u.p(0,s)){u.t(0,s)
r.bsl(s.F)}}},
bsl(d){this.A(new A.ctv(this,d))},
B(d){var w=this,v=null,u=w.gb58(),t=w.a.d
return new A.q_(B.mJ(C.cm,B.a24(v,C.r,new I.tJ(t,0,0,1),new A.ctw(w),t*t,w.w,v,A1.dR,C.a7,!0),v,v,u,v,u,v,v,w.gbmx()),v)},
b2E(){this.e.W(0)
this.A(new A.ctt(this))},
bmy(d){this.a.bPj(this.f+1,this.r+1)}}
A.VM.prototype={
b8(d){var w=new A.VL(this.e,null,new B.bp(),B.aC(x.v))
w.bc()
w.sbY(null)
return w},
bf(d,e){e.F=this.e}}
A.VL.prototype={}
A.abk.prototype={
gn(d){return this.c.a},
ql(d,e){var w=this.a
w===$&&B.b()
return B.dO(w.x7(d,e),x.z)},
Bb(){var w=0,v=B.l(x.H),u=this,t
var $async$Bb=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:t=u.c
t.c.Or(t.a)
t.a=t.b.kE(0)
B.cCz("\x1b[34m[WebViewX]\x1b[0m "+("Current history: "+t.j(0))+"\x1b[0m",1024)
u.a4()
return B.j(null,v)}})
return B.k($async$Bb,v)},
Bc(){var w=0,v=B.l(x.H),u=this,t
var $async$Bc=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:t=u.c
t.b.jP(0,t.a)
t.a=t.c.vU()
B.cCz("\x1b[34m[WebViewX]\x1b[0m "+("Current history: "+t.j(0))+"\x1b[0m",1024)
u.a4()
return B.j(null,v)}})
return B.k($async$Bc,v)},
l(){var w=this.b
w.a8$=$.a9()
w.Y$=0
this.fF()},
$iabl:1}
A.b8e.prototype={}
A.uE.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.uE&&e.a===this.a},
gv(d){return C.d.gv(this.a)}}
A.a11.prototype={
I(){return"EmbedPosition."+this.b}}
A.a8P.prototype={
I(){return"SourceType."+this.b}}
A.aub.prototype={
j(d){return"\nHistoryStack:\nBack: "+this.b.j(0)+"\nCurrent: "+B.o(this.a)+"\nForward: "+this.c.j(0)+"\n"},
bzc(d){var w=this
if(d.k(0,w.a))return
w.b.jP(0,w.a)
w.a=d
w.c.W(0)}}
A.bW_.prototype={}
A.CB.prototype={
a_g(d,e,f,g){return this.bHw(d,e,f,g)},
bHw(d,e,f,g){var w=0,v=B.l(x.N),u,t=this,s,r
var $async$a_g=B.h(function(h,i){if(h===1)return B.i(i,v)
while(true)switch(w){case 0:s=B.dq(t.abE(B.rx(4,g,C.ax,!1)),0,null)
w=3
return B.d(f==="get"?B.cLi(s,e):B.b_l(s,d,null,e),$async$a_g)
case 3:r=i
u=t.adU(B.lZ(B.lY(r.e)).d7(0,r.w))
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a_g,v)}}
A.an6.prototype={
abE(d){return"https://cors.bridged.cc/"+d},
adU(d){return d}}
A.ao3.prototype={
abE(d){return"https://api.codetabs.com/v1/proxy/?quest="+d},
adU(d){return d}}
A.aHU.prototype={
abE(d){return"https://we-cors-anywhere.herokuapp.com/"+d},
adU(d){return d}}
A.q_.prototype={
B(d){return new A.a5Y(this.c,!1,this.a)}}
A.MZ.prototype={
j(d){var w=this.d
return"WebViewContent:\nSource: "+this.a+"\nSourceType: "+this.b.b+"\nLast request Headers: none\nLast request Body: "+B.o(w==null?"none":w)+"\n"},
k(d,e){var w,v=this
if(e==null)return!1
if(e!==v){w=!1
if(e instanceof A.MZ)if(e.a===v.a)if(e.b===v.b)w=e.d==v.d}else w=!0
return w},
gv(d){var w=this
return(C.d.gv(w.a)^B.dR(w.b)^C.oR.gv(w.c)^J.V(w.d))>>>0}}
A.bqr.prototype={
I(){return"JavascriptMode."+this.b}}
A.b2W.prototype={
I(){return"AutoMediaPlaybackPolicy."+this.b}}
A.abj.prototype={
M(){return new A.aiM()}}
A.aiM.prototype={
U(){var w,v,u,t,s,r=this,q=null
r.ah()
r.x=!1
r.a.toString
r.y=!1
w=E.kg.F4()
r.e="_iframe"+("_"+B.dx(w,"-","_"))
r.d=r.b3I()
r.bqg(r.e)
w=r.a
v=w.c
w=w.d
u=r.y
t=$.a9()
u=new B.bL(u,t,x.Y)
s=x.o
t=new A.abk(u,new A.aub(new A.MZ(v,w,q,q),B.nC(q,s),B.nC(q,s),x.K),t)
t.a3(0,r.gazQ())
u.a3(0,r.garA())
r.w=t
w=r.a
v=w.d
u=!0
if(v!==D.ad2)if(v!==D.ad4)w=v===D.ad3&&w.c==="about:blank"
else w=u
else w=u
if(w)r.b39(r.gb1L())
else r.any()
r.bqf()
B.hA(C.J,new A.czy(r),x.P)},
bqg(d){$.C4()
$.rG().vR(d,new A.czv(this),!0)},
b39(d){var w=$.d58(),v=this.e
v===$&&B.b()
w.m(0,"connect_js_to_flutter"+v,new A.czq(this,d))},
bqf(){var w=this.d
w===$&&B.b()
this.f=B.c7A(w,"load",new A.czu(this),!1,x.E.c)},
any(){var w=this.a.w,v=this.w
v===$&&B.b()
w.$1(v)},
anx(d){this.a.at.$1(d)},
B(d){var w,v=null,u=this.a,t=u.f,s=u.r
u=u.a
w=this.e
w===$&&B.b()
u=B.alx(!0,new B.hF(new B.x8(w,v,v,C.jQ,u),v))
w=this.y
w===$&&B.b()
u=B.a([new B.ao(t,s,u,v)],x.p)
if(w)u.push(B.ov(0,new A.a5Y(B.ar(v,v,C.k,v,v,v,v,v,v,v,v,v,v,v),!1,v)))
else u.push(C.a6)
return new B.ch(C.ad,v,C.ab,C.v,u,v)},
b3I(){var w,v=this,u=document.createElement("iframe")
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
C.b.aT(D.aQi,C.atW.gku(w))
v.a.toString
u.sandbox.add("allow-scripts")
v.a.toString
u.allow=C.b.hs(D.aN0,new A.czr())
return u},
byl(){var w=this.w
w===$&&B.b()
w=w.c.a
this.anx(w.a)
this.azo(w)},
bbW(){this.A(new A.czs(this))},
a5E(d,e){return this.b2f(d,e)},
b2f(d,e){var w=0,v=B.l(x.y),u,t=this
var $async$a5E=B.h(function(f,g){if(f===1)return B.i(g,v)
while(true)switch(w){case 0:t.a.toString
u=!0
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a5E,v)},
azo(d){var w,v,u=this,t=d.a
if(t.length===0){u.a.toString
return}w=d.b
switch(w.a){case 0:w=u.d
w===$&&B.b()
u.a.toString
v=u.e
v===$&&B.b()
w.srcdoc=A.cHa(t,!0,D.H6,v)
break
case 1:case 2:if(t==="about:blank"){w=u.d
w===$&&B.b()
u.a.toString
v=u.e
v===$&&B.b()
w.srcdoc=A.cHa("<br>",!0,D.H6,v)
break}if(!C.d.be(t,B.bD("http[s]?://",!1,!1,!1))){u.a.toString
return}if(w===D.ad3){w=u.d
w===$&&B.b()
w=B.duE(w.contentWindow)
w.toString
J.d7I(J.d7m(w),t)}else u.bwK(d.c,"get",t)
break}},
VQ(d){return this.bcZ(d)},
bcZ(d){var w=0,v=B.l(x.H),u,t=this,s,r,q,p,o,n,m
var $async$VQ=B.h(function(e,f){if(e===1)return B.i(f,v)
while(true)switch(w){case 0:o=x.i.a(C.aA.u0(0,d,null))
n=J.a1(o)
m=B.ba(n.h(o,"href"))
n.j(o)
t.a.toString
s=t.w
s===$&&B.b()
w=3
return B.d(t.a5E(m,s.c.a.b),$async$VQ)
case 3:if(!f){t.a.toString
w=1
break}if(m==="javascript:history.back()"){t.w.Bb()
w=1
break}else if(m==="javascript:history.forward()"){t.w.Bc()
w=1
break}r=B.ba(n.h(o,"method"))
q=n.h(o,"body")
if(q==null)p=null
else{n=x.N
p=B.I(n,n)
p.Yz(p,J.bA(x.j.a(q),new A.czt(),x.J))}t.ayj(p,t.w.c.a.c,r,m)
case 1:return B.j(u,v)}})
return B.k($async$VQ,v)},
ayj(d,e,f,g){this.a6v(d,e,f,g).aH(new A.czw(this,g,e,d),x.P).la(new A.czx(this,g))},
bwK(d,e,f){return this.ayj(null,d,e,f)},
a6v(d,e,f,g){return this.b7g(d,e,f,g)},
b7g(d,e,f,g){var w=0,v=B.l(x.N),u,t=this,s,r,q,p,o,n,m
var $async$a6v=B.h(function(h,i){if(h===1)return B.i(i,v)
while(true)$async$outer:switch(w){case 0:t.a.toString
p=B.E(D.aGp,x.W)
C.b.aRr(p)
s=p
t.a.toString
for(r=0;r<J.bz(s);++r){q=J.v(s,r)
B.a_(q).j(0)
t.a.toString
try{o=q.a_g(d,e,f,g)
u=o
w=1
break $async$outer}catch(l){B.a_(q).j(0)
t.a.toString
if(J.p(r,J.bz(s)-1)){o=B.wi("None of the provided proxies were able to fetch the given page.",null)
m=new B.ak($.aw,x.I)
m.pl(o)
u=m
w=1
break $async$outer}continue}}o=B.wi("Bad state",null)
m=new B.ak($.aw,x.I)
m.pl(o)
u=m
w=1
break
case 1:return B.j(u,v)}})
return B.k($async$a6v,v)},
l(){var w=this,v=w.f
v===$&&B.b()
v.a1(0)
v=w.w
v===$&&B.b()
v.N(0,w.gazQ())
w.w.b.N(0,w.garA())
w.al()}}
var z=a.updateTypes(["nU()","~()","~(pS)","RE(@)","JA<@>(@)","pu(@)","~(iX,ti,m)","~(Fj)","e(H,fD<@>)","abl<@>(abl<@>)","Y<@>(t0)","fC(H)","q_(H,f)","@(d8)","~(lD)","VM(H,f)","aF(pu)","G?(G?)","G?(@)"])
A.cAw.prototype={
$1(d){var w=function(e,f,g){return function(){return e(f,g,this,Array.prototype.slice.apply(arguments))}}(A.dug,d,!1)
A.cKv(w,$.O7(),d)
return w},
$S:56}
A.cAx.prototype={
$1(d){return new this.a(d)},
$S:56}
A.cC4.prototype={
$1(d){return new A.RE(d)},
$S:z+3}
A.cC5.prototype={
$1(d){return new A.JA(d,x.R)},
$S:z+4}
A.cC6.prototype={
$1(d){return new A.pu(d)},
$S:z+5}
A.bnr.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=d.w=J.aq(d.w),p=B.a([],x.d)
if(e.geU(e)>0)p.push(F.a9k(C.d.af(q,0,e.geU(e))))
w=e.pc(0)
w.toString
if(f.length===0&&C.d.be(w,"www."))v="https://"+w
else v=w
u=F.cQ6("a")
u.b.m(0,"href",f+v)
u.ghq(0).W(0)
w=F.a9k(w)
u.ghq(0).t(0,w)
p.push(u)
t=e.geq(e)
if(t<q.length)p.push(F.a9k(C.d.d6(q,t)))
w=F.beg()
w.ghq(0).H(0,p)
s=d.a
if(s==null)B.a7(B.aH("Node must have a parent to replace it."))
s=s.ghq(0)
r=d.a.ghq(0)
s.m(0,r.ds(r,d),w)},
$S:z+6}
A.bns.prototype={
$1(d){var w=J.aq(d.w)
d.w=w
B.ud(w,this.a,new A.bnq(this.b,d),null)},
$S:z+2}
A.bnq.prototype={
$1(d){this.a.$3(this.b,d,"mailto:")
return""},
$S:63}
A.bnt.prototype={
$1(d){var w=J.aq(d.w)
d.w=w
B.ud(w,this.a,new A.bnp(this.b,d),null)},
$S:z+2}
A.bnp.prototype={
$1(d){this.a.$3(this.b,d,"")
return""},
$S:63}
A.bnu.prototype={
$1(d){var w=J.aq(d.w)
d.w=w
B.ud(w,this.a,new A.bno(this.b,d),null)},
$S:z+2}
A.bno.prototype={
$1(d){this.a.$3(this.b,d,"tel:")
return""},
$S:63}
A.cbN.prototype={
$1(d){this.a.a.toString},
$S:81}
A.cbO.prototype={
$0(){B.hK().$1("Editor Loaded :)")},
$S:0}
A.cbP.prototype={
$0(){var w,v=this.a
v.A(new A.cbM(v))
w=v.d
w===$&&B.b()
if(w.length!==0)v.tq(w)},
$S:0}
A.cbM.prototype={
$0(){this.a.e=!1},
$S:0}
A.cbL.prototype={
$1(d){return this.a.e?D.amr:C.a6},
$S:436}
A.cbH.prototype={
$1(d){B.hK().$1("has focus "+d)
this.a.A(new A.cbF())},
$S:112}
A.cbF.prototype={
$0(){},
$S:0}
A.cbG.prototype={
$1(d){return B.hK().$1("widget text change "+d)},
$S:6}
A.cbK.prototype={
$0(){},
$S:0}
A.cbJ.prototype={
$1(d){return B.hK().$1("Editor resized "+B.o(d))},
$S:143}
A.cbI.prototype={
$1(d){return B.hK().$1("index "+B.o(d.a)+", range "+B.o(d.b))},
$S:z+7}
A.bCq.prototype={
$2(d,e){var w=e.b
if(w!=null)this.a.x=w
if(e.a===A2.or)return B.is(new A.bCp(this.a))
w=this.a.a.db.$1(d)
return w},
$S:z+8}
A.bCp.prototype={
$2(d,e){var w=this.a,v=e.b
w.e=w.aqY(v)
return w.b0H(d,v)},
$S:84}
A.bCn.prototype={
$1(d){this.a.as=!1},
$S:6}
A.bCm.prototype={
$1(d){return this.a.d=d},
$S:z+9}
A.bCo.prototype={
$1(d){B.hA(C.bp,null,x.z).aH(new A.bCc(this.a),x.P)},
$S:6}
A.bCc.prototype={
$1(d){var w,v=this.a
v.as=!0
B.hK().$1("_editorLoaded true")
if(v.c!=null)v.A(new A.bCb())
v.a.r.a_5(!0)
w=v.a
w.at.$0()
v.a.r.d.t(0,"")},
$S:11}
A.bCb.prototype={
$0(){},
$S:0}
A.bCf.prototype={
$1(d){var w,v,u=this.a,t=u.r
t===$&&B.b()
w=J.jk(d)
if(t===B.lE(w.j(d)))return
try{t=B.lE(w.j(d))
u.r=t==null?u.a.d:t}catch(v){u.r=u.a.d}finally{if(u.c!=null)u.A(new A.bCe(u))
u.a.as.$1(u.r)}},
$S:11}
A.bCe.prototype={
$0(){var w=this.a.r
w===$&&B.b()
return w},
$S:0}
A.bCg.prototype={
$1(d){var w,v
try{w=this.a.a.r.b.ga0()
if(w!=null)w.bUj(C.aA.u0(0,d,null))}catch(v){}},
$S:11}
A.bCh.prototype={
$1(d){var w,v,u,t,s
if(""===d)return
try{u=this.a
u.a.toString
w=""
t=B.bD("<[^>]*>|&[^;]+;",!0,!1,!1)
v=B.dx(d,t," ")
if(J.rI(v)==="")w=""
else w=d
u.a.w.$1(w)
u.a.r.c.t(0,w)}catch(s){}},
$S:11}
A.bCi.prototype={
$1(d){var w=this.a,v=(d==null?null:J.aq(d))==="true"
w.w=v
w.a.z.$1(v)
w.a.toString},
$S:11}
A.bCj.prototype={
$1(d){var w,v,u,t,s
if(""===d)return
try{u=this.a
u.a.toString
w=""
t=B.bD("<[^>]*>|&[^;]+;",!0,!1,!1)
v=B.dx(d,t," ")
if(J.rI(v)==="")w=""
else w=d
u=u.a
u.r.c.t(0,w)}catch(s){}},
$S:11}
A.bCk.prototype={
$1(d){var w,v,u
try{w=this.a
v=w.a
v.toString
if(!w.w){w.w=!0
v.z.$1(!0)}w=w.a.Q
w.$1(d!=null?A.cUH(C.aA.u0(0,d,null)):new A.Fj(0,0))}catch(u){}},
$S:11}
A.bCl.prototype={
$1(d){var w=this.a
w.as=!0
if(w.c!=null)w.A(new A.bCd())},
$S:11}
A.bCd.prototype={
$0(){},
$S:0}
A.bCa.prototype={
$1(d){this.a.$1(d)},
$S:6}
A.bC9.prototype={
$1(d){this.a.$0()},
$S:6}
A.cB4.prototype={
$1(d){return"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890".charCodeAt($.d68().At(62))},
$S:70}
A.bRa.prototype={
$0(){},
$S:0}
A.bQV.prototype={
$1(d){this.a.a.d.a_4(d)},
$S:81}
A.bQW.prototype={
$1(d){this.a.a.d.we("link",d)},
$S:81}
A.bQX.prototype={
$1(d){return this.a.a.d.a0C(d)},
$S:z+10}
A.bQY.prototype={
$0(){var w=0,v=B.l(x.H),u=this,t,s,r,q,p,o,n,m
var $async$$0=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:o=u.a
n=o.a
m=n.c
w=m===D.bKv?2:4
break
case 2:u.b.a.d.Zc()
w=3
break
case 4:w=m===D.bKB?5:7
break
case 5:u.b.a.d.w0()
w=6
break
case 7:w=m===D.bKy?8:10
break
case 8:u.b.a.d.vP()
w=9
break
case 10:w=m===D.bKC?11:13
break
case 11:w=14
return B.d(new A.bp2(new A.bQT(u.b)).a1E(),$async$$0)
case 14:w=12
break
case 13:if(m===D.aec){t=B.a([],x.c)
for(n=u.b,m=n.d,s=m.length,r=0;r<m.length;m.length===s||(0,B.M)(m),++r)t.push(m[r].iZ(!1))
n.d=t}else if(m===D.ae9){for(n=u.b.d,m=n.length,r=0;r<n.length;n.length===m||(0,B.M)(n),++r){q=n[r]
if(q.c===D.aeb)q.iZ(!1)}n=o.a
o.a=n.iZ(!n.d)}else if(m===D.aeb){for(n=u.b.d,m=n.length,r=0;r<n.length;n.length===m||(0,B.M)(n),++r){q=n[r]
if(q.c===D.ae9)q.iZ(!1)}n=o.a
o.a=n.iZ(!n.d)}else o.a=n.iZ(!n.d)
case 12:case 9:case 6:case 3:n=u.b
o=o.a
p=n.b8T(o.c,o.d)
n.a.d.we(p.h(0,"format"),p.h(0,"value"))
if(J.p(J.v(n.e,"direction"),"rtl"))n.a.d.we("align","right")
n.A(new A.bQU())
return B.j(null,v)}})
return B.k($async$$0,v)},
$S:2}
A.bQT.prototype={
$1(d){var w=this.a
J.c7(w.e,"image",d)
w.a.d.a_3(d)},
$S:81}
A.bQU.prototype={
$0(){},
$S:0}
A.bQS.prototype={
$1(d){var w=this.a
return B.a([w.Vl("Small"),w.Vl("Normal"),w.Vl("Large"),w.Vl("Huge")],x.p)},
$S:1020}
A.bQR.prototype={
$1(d){var w,v=this.a
J.c7(v.e,"size",d)
w=v.a.d
w.we("size",d==="normal"?"":d)
v.A(new A.bQQ())},
$S:27}
A.bQQ.prototype={
$0(){},
$S:0}
A.bQP.prototype={
$1(d){var w="align",v=this.a,u=v.e
J.c7(u,w,d==="left"?"":d)
v.a.d.we(w,J.v(v.e,w))
v.A(new A.bQO())},
$S:15}
A.bQO.prototype={
$0(){},
$S:0}
A.bR3.prototype={
$0(){var w=this.a,v=w.r
v===$&&B.b()
if(v.ga0()!=null)w.r.ga0().Lk()},
$S:0}
A.bR2.prototype={
$1(d){var w,v,u="color",t=this.a
J.c7(t.e,u,d)
w=t.d
v=this.b
w[v]=w[v].iZ(!0)
t.a.d.we(u,J.v(t.e,u))
t.A(new A.bR1())
w=t.r
w===$&&B.b()
if(w.ga0()!=null)t.r.ga0().xy()},
$S:81}
A.bR1.prototype={
$0(){},
$S:0}
A.bR0.prototype={
$0(){var w=this.a,v=w.f
v===$&&B.b()
if(v.ga0()!=null)w.f.ga0().Lk()},
$S:0}
A.bR_.prototype={
$1(d){var w,v,u="background",t=this.a
J.c7(t.e,u,d)
w=t.d
v=this.b
w[v]=w[v].iZ(!0)
t.a.d.we(u,J.v(t.e,u))
t.A(new A.bQZ())
w=t.f
w===$&&B.b()
if(w.ga0()!=null)t.f.ga0().xy()},
$S:81}
A.bQZ.prototype={
$0(){},
$S:0}
A.bR5.prototype={
$0(){var w,v=this.b
if(B.aA(v,null,x.w).w.a.a<480)this.a.btG(v)
else{v=this.a
w=v.w
w===$&&B.b()
if(w.ga0()!=null)v.w.ga0().Lk()}},
$S:0}
A.bR4.prototype={
$2(d,e){var w,v=this.a
v.a.d.Qo(d,e)
w=v.w
w===$&&B.b()
if(w.ga0()!=null)v.w.ga0().xy()},
$S:422}
A.bR9.prototype={
$1(d){var w=null
return L.iP(w,w,w,new A.q_(new B.eS(new A.bR8(this.a),w),w),C.Q,w,w,new B.df(B.bI(8),C.y),w,w,w)},
$S:z+11}
A.bR8.prototype={
$1(d){var w=null,v=x.p
return new B.ao(300,310,B.aj(B.a([B.at(B.a([D.bCp,D.awb,B.bW(w,w,w,w,w,w,A3.mn,w,w,w,new A.bR6(d),w,w,w,w,w)],v),C.j,C.f,C.U,0,w),B.bk(new A.UI(new A.bR7(this.a,d),8,w),1,w),N.iz],v),C.j,C.bl,C.U,0,w,C.m),w)},
$S:391}
A.bR6.prototype={
$0(){return B.bS(this.a,!1).dP()},
$S:0}
A.bR7.prototype={
$2(d,e){this.a.a.d.Qo(d,e)
B.bS(this.b,!1).dP()},
$S:422}
A.b6w.prototype={
$2(d,e){var w=null
return new A.q_(B.cG(w,new B.a3(C.hk,B.ar(w,w,C.k,w,w,new B.b3(A.bmC(D.Rl[e]),w,B.fN(C.o,C.B,0.3),w,w,w,w,C.L),w,40,w,w,w,w,w,40),w),C.r,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.b6v(this.a,e),w,w,w,w,w,w,w,w,!1,C.a9),w)},
$S:z+12}
A.b6v.prototype={
$0(){this.a.c.$1(D.Rl[this.b])},
$S:0}
A.c5Y.prototype={
$0(){var w,v=this.b
if(B.aA(v,null,x.w).w.a.a<480)this.a.btr(!0,v)
else{v=this.a
w=v.d
w===$&&B.b()
if(w.ga0()!=null)v.d.ga0().Lk()}},
$S:0}
A.c5W.prototype={
$0(){var w,v=this,u=v.a
u.a.bOH(v.b)
if(v.c)B.bS(v.d,!1).dP()
else{w=u.d
w===$&&B.b()
if(w.ga0()!=null)u.d.ga0().xy()}},
$S:0}
A.c5X.prototype={
$1(d){return this.a.aps(this.b,d)},
$S:24}
A.c5U.prototype={
$1(d){var w,v=this,u=null,t=x.w
if(B.aA(d,u,t).w.a.a<380)t=P.mc(!0,!0,!0,C.v,u,C.r,new A.c5S(v.a,v.b),7,u,u,u,u,u,u,!1,C.I,!0)
else{w=B.a24(u,C.r,new I.tJ(B.aA(d,u,t).w.a.a<380?1:2,0,0,3.3333333333333335),new A.c5T(v.a,v.b),7,u,u,u,C.I,!0)
t=w}return new B.ao(400,u,B.aj(B.a([D.bzk,new B.eT(1,C.bv,new B.a3(C.cB,t,u),u),N.iz],x.p),C.j,C.f,C.U,0,u,C.m),u)},
$S:391}
A.c5S.prototype={
$2(d,e){var w=B.a(D.Ep.slice(0),x.x)
return this.a.a6M(w[e],d,this.b)},
$S:50}
A.c5T.prototype={
$2(d,e){var w=B.a(D.Ep.slice(0),x.x)
return this.a.a6M(w[e],d,this.b)},
$S:50}
A.c5V.prototype={
$2(d,e){var w=B.a(D.Ep.slice(0),x.x)
return this.a.a6M(w[e],d,this.b)},
$S:50}
A.bfO.prototype={
$1(d){var w=this.a,v=w.c
v.toString
return w.biA(v)},
$S:5}
A.bfI.prototype={
$0(){var w=this.a,v=this.b
w.e=new A.hy(v.gD(0).a,v.gD(0).b,0,0)
w=w.r
if(w!=null)w.hS(0)},
$S:0}
A.bfK.prototype={
$1(d){var w,v,u=this.a
$.au.RG$.push(new A.bfJ(u,d))
w=u.w
w===$&&B.b()
v=u.MJ()
return B.qZ(B.bF(A.cOt(u.a.e,C.l,w,2,C.bc,v),null,null),0)},
$S:1023}
A.bfJ.prototype={
$1(d){return this.a.b8X(this.b)},
$S:5}
A.bfN.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a
q.a.toString
w=this.b
v=w.a
u=q.MJ()
t=q.a
s=t.d
v=B.ej(r,A.cOt(t.e,s,r,2,w.d,u),r,r,v.c,r,v.d,r)
u=w.b
u=B.ej(r,new A.amb(s,w.c,16,10,r),r,r,u.c,r,u.d,r)
w=q.MJ()
s=q.MJ()
return new B.ch(C.ad,r,C.ab,C.v,B.a([new A.q_(new A.ayU(!0,C.ay,0.7,new A.bfL(q),r),r),v,u,B.ej(r,B.cG(r,q.a.c,C.r,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.bfM(),r,r,r,r,r,r,r,r,!1,C.a9),r,r,s.c,r,w.d,r)],x.p),r)},
$S:392}
A.bfL.prototype={
$0(){this.a.xy()},
$S:0}
A.bfM.prototype={
$0(){},
$S:0}
A.cdf.prototype={
$0(){var w=0,v=B.l(x.H),u=this,t,s,r
var $async$$0=B.h(function(d,e){if(d===1)return B.i(e,v)
while(true)switch(w){case 0:s=u.b
r=u.a
w=2
return B.d(s.a.e.SP(),$async$$0)
case 2:r.a=e
t=s.f
t===$&&B.b()
if(t.ga0()!=null)s.f.ga0().Lk()
return B.j(null,v)}})
return B.k($async$$0,v)},
$S:2}
A.cdb.prototype={
$1(d){var w=this.a
w.A(new A.cda(w,d))},
$S:6}
A.cda.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.cdc.prototype={
$1(d){if(d==null||d.length===0)return"Can't be empty"
return null},
$S:62}
A.cdd.prototype={
$0(){var w,v,u=this,t=Date.now(),s=u.a
if(t-s.a<500)return
s.a=t
t=u.b
if(t.d.ga0().kb()){s=u.c
if(s!=null){w=t.a.e
v=s.a
if(v==null)v=0
s=s.b
w.Tz(0,v,s==null?0:s)}B.hA(U.Ml,null,x.z).aH(new A.cd8(t,u.d,u.e),x.P)}else{t.e=null
t.A(new A.cd9())}},
$S:0}
A.cd8.prototype={
$1(d){var w,v=this.a,u=v.a
u.toString
w=v.e
u.bPi(0,w==null?"":w)
v=v.f
v===$&&B.b()
v.ga0().xy()},
$S:11}
A.cd9.prototype={
$0(){},
$S:0}
A.cde.prototype={
$0(){var w=Date.now(),v=this.a
if(w-v.b<500)return
v.b=w
w=this.b.f
w===$&&B.b()
w.ga0().xy()},
$S:0}
A.ctv.prototype={
$0(){var w,v,u,t,s=this.a,r=s.d
r.t(0,this.b)
w=B.E(r,B.t(r).i("cI.E"))
C.b.e2(w,new A.ctu())
s.r=C.e.hL(C.b.gZ(w),s.a.d)
s.f=C.e.au(C.b.gZ(w),s.a.d)
r.W(0)
for(v=0,u=0;u<s.a.d;++u)for(t=0;t<s.a.d;++t){if(u<=s.r&&t<=s.f)r.t(0,v);++v}},
$S:0}
A.ctu.prototype={
$2(d,e){return d-e},
$S:204}
A.ctw.prototype={
$2(d,e){var w=null,v=this.a.d,u=v.p(0,e)?H.BY:C.C,t=v.p(0,e)?2:1
return new A.VM(e,B.ar(w,w,C.k,w,w,new B.b3(u,w,B.fN(v.p(0,e)?H.LH:C.lW,C.B,t),w,w,w,w,C.L),w,w,w,M.m7,w,w,w,w),w)},
$S:z+15}
A.ctt.prototype={
$0(){this.a.d.W(0)},
$S:0}
A.bnF.prototype={
$2(d,e){return d+C.d.aU("\n",2)+e},
$S:122}
A.bnG.prototype={
$1(d){var w=d.b[1]
w.toString
return"<"+this.a+w+"> \n"+this.b},
$S:63}
A.czy.prototype={
$0(){var w=this.a,v=w.w
v===$&&B.b()
w.azo(v.c.a)},
$S:7}
A.czv.prototype={
$1(d){var w=this.a.d
w===$&&B.b()
return w},
$S:1024}
A.czq.prototype={
$1(d){var w,v,u,t=this.a
t.r=d
for(w=t.a.y,w=B.e4(w,w.r,B.t(w).c),v=w.$ti.c;w.q();){u=w.d
if(u==null)u=v.a(u)
t.r.m(0,u.a,u.b)}t.r.m(0,"WebOnClickInsideIframe",new A.czp(t))
w=t.w
w===$&&B.b()
w.a=t.r
this.b.$0()},
$S:z+16}
A.czp.prototype={
$1(d){this.a.VQ(B.ba(d))},
$S:11}
A.czu.prototype={
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
$S:172}
A.czr.prototype={
$2(d,e){return d+"; "+e},
$S:122}
A.czs.prototype={
$0(){var w=this.a,v=w.w
v===$&&B.b()
w.y=v.b.a},
$S:0}
A.czt.prototype={
$1(d){var w=J.a1(d)
return new B.bE(J.aq(w.h(d,0)),J.aq(w.h(d,1)),x.J)},
$S:1025}
A.czw.prototype={
$1(d){var w,v=this,u=v.a,t=v.b,s=A.cRb(D.avY,d,'      <base href="'+t+"\">\n      <script>\n\n      document.addEventListener('click', e => {\n        if (frameElement && document.activeElement && document.activeElement.href) {\n          e.preventDefault()\n\n          var returnedObject = JSON.stringify({method: 'get', href: document.activeElement.href});\n          frameElement.contentWindow.WebOnClickInsideIframe && frameElement.contentWindow.WebOnClickInsideIframe(returnedObject)\n        }\n      })\n      document.addEventListener('submit', e => {\n        if (frameElement && document.activeElement && document.activeElement.form && document.activeElement.form.action) {\n          e.preventDefault()\n\n          if (document.activeElement.form.method === 'post') {\n            var formData = new FormData(document.activeElement.form);\n            \n            var returnedObject = JSON.stringify({method: 'post', href: document.activeElement.form.action, body: [...formData]});\n            frameElement.contentWindow.WebOnClickInsideIframe && frameElement.contentWindow.WebOnClickInsideIframe(returnedObject)\n          } else {\n            var urlWithQueryParams = document.activeElement.form.action + '?' + new URLSearchParams(new FormData(document.activeElement.form))\n\n            var returnedObject = JSON.stringify({method: 'get', href: urlWithQueryParams});\n            frameElement.contentWindow.WebOnClickInsideIframe && frameElement.contentWindow.WebOnClickInsideIframe(returnedObject)\n          }\n        }\n      })\n      </script>\n      "),r=u.d
r===$&&B.b()
u.a.toString
w=u.e
w===$&&B.b()
r.srcdoc=A.cHa(s,!0,D.H6,w)
w=u.w
w===$&&B.b()
w.c.bzc(new A.MZ(t,D.ad4,v.c,v.d))
u.a.toString},
$S:81}
A.czx.prototype={
$1(d){var w=this.a
w.a.toString
B.o(d)
w.a.toString},
$S:11};(function aliases(){var w=A.pu.prototype
w.aTl=w.h
w.aTm=w.m
w=A.Wx.prototype
w.alP=w.m})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_1u
w(A,"dCv","cKq",17)
w(A,"dCu","cKp",18)
var t
v(t=A.aAL.prototype,"gboW","auY",0)
v(t,"gbvX","Y0",0)
v(t,"gboV","auX",0)
v(t,"gboU","auW",0)
v(t,"gb0c","amU",0)
v(t,"gboT","auV",0)
v(t,"gbih","at2",0)
v(t,"gbie","at0",0)
v(t,"gbif","at1",0)
v(t,"gbre","avS",0)
v(t,"gbrc","avQ",0)
v(t,"gbrd","avR",0)
u(t=A.ahK.prototype,"gb58","b59",13)
u(t,"gbmx","bmy",14)
v(A.abk.prototype,"gfv","l",1)
v(t=A.aiM.prototype,"gb1L","any",1)
v(t,"gazQ","byl",1)
v(t,"garA","bbW",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.c9,[A.cAw,A.cAx,A.cC4,A.cC5,A.cC6,A.bnr,A.bns,A.bnq,A.bnt,A.bnp,A.bnu,A.bno,A.cbN,A.cbL,A.cbH,A.cbG,A.cbJ,A.cbI,A.bCn,A.bCm,A.bCo,A.bCc,A.bCf,A.bCg,A.bCh,A.bCi,A.bCj,A.bCk,A.bCl,A.bCa,A.bC9,A.cB4,A.bQV,A.bQW,A.bQX,A.bQT,A.bQS,A.bQR,A.bQP,A.bR2,A.bR_,A.bR9,A.bR8,A.c5X,A.c5U,A.bfO,A.bfK,A.bfJ,A.bfN,A.cdb,A.cdc,A.cd8,A.bnG,A.czv,A.czq,A.czp,A.czu,A.czt,A.czw,A.czx])
u(B.G,[A.pu,A.aBm,A.Fj,A.hy,A.aAL,A.nU,A.bp2,A.b8e,A.uE,A.aub,A.bW_,A.CB,A.MZ])
u(A.pu,[A.RE,A.Wx])
t(A.JA,A.Wx)
t(A.HA,B.eJ)
u(B.aa,[A.S2,A.a5Y,A.Mj,A.a_1,A.amb,A.ayU,A.q_])
u(B.J,[A.a2m,A.a6r,A.a9Y,A.a0R,A.a0V,A.Zq,A.Rt,A.UI,A.abj])
u(B.O,[A.aOV,A.a6s,A.a9Z,A.aNz,A.aNH,A.aLh,A.aPs,A.ahK,A.aiM])
u(B.cK,[A.cbO,A.cbP,A.cbM,A.cbF,A.cbK,A.bCb,A.bCe,A.bCd,A.bRa,A.bQY,A.bQU,A.bQQ,A.bQO,A.bR3,A.bR1,A.bR0,A.bQZ,A.bR5,A.bR6,A.b6v,A.c5Y,A.c5W,A.bfI,A.bfL,A.bfM,A.cdf,A.cda,A.cdd,A.cd9,A.cde,A.ctv,A.ctt,A.czy,A.czs])
u(B.ei,[A.bCq,A.bCp,A.bR4,A.bR7,A.b6w,A.c5S,A.c5T,A.c5V,A.ctu,A.ctw,A.bnF,A.czr])
u(B.eQ,[A.jP,A.t0,A.ph,A.bpV,A.aHg,A.a11,A.a8P,A.bqr,A.b2W])
t(A.au6,B.K)
t(A.a0W,A.aNH)
u(B.rU,[A.aop,A.aGi])
t(A.VM,B.bB)
t(A.VL,B.vu)
t(A.abk,B.hv)
u(A.CB,[A.an6,A.ao3,A.aHU])
w(A.Wx,B.a2)
v(A.aNH,B.eB)})()
B.c4(b.typeUniverse,JSON.parse('{"RE":{"pu":[]},"JA":{"a2":["1"],"B":["1"],"aZ":["1"],"pu":[],"y":["1"],"a2.E":"1","y.E":"1"},"HA":{"eJ":[],"bv":[],"bo":[],"e":[]},"S2":{"aa":[],"e":[]},"a2m":{"J":[],"e":[]},"aOV":{"O":["a2m"]},"a5Y":{"aa":[],"e":[]},"a6r":{"J":[],"e":[]},"a6s":{"O":["a6r"]},"a9Y":{"J":[],"e":[]},"a9Z":{"O":["a9Y"]},"Mj":{"aa":[],"e":[]},"au6":{"K":[]},"a_1":{"aa":[],"e":[]},"a0R":{"J":[],"e":[]},"aNz":{"O":["a0R"]},"a0V":{"J":[],"e":[]},"a0W":{"O":["a0V"],"eB":[]},"amb":{"aa":[],"e":[]},"Zq":{"J":[],"e":[]},"aLh":{"O":["Zq"]},"ayU":{"aa":[],"e":[]},"aop":{"ay":[]},"aGi":{"ay":[]},"Rt":{"J":[],"e":[]},"aPs":{"O":["Rt"]},"UI":{"J":[],"e":[]},"VM":{"bB":[],"aL":[],"e":[]},"VL":{"Z":[],"bq":["Z"],"X":[],"aM":[]},"ahK":{"O":["UI"]},"abk":{"ay":[],"abl":["pu"]},"an6":{"CB":[]},"ao3":{"CB":[]},"aHU":{"CB":[]},"q_":{"aa":[],"e":[]},"abj":{"J":[],"e":[]},"aiM":{"O":["abj"]}}'))
B.ub(b.typeUniverse,JSON.parse('{"Wx":1,"abl":1}'))
var y={b:"packages/quill_html_editor/assets/insert_table.png"}
var x=(function rtii(){var w=B.C
return{B:w("yL"),W:w("CB"),v:w("eN"),C:w("uE"),k:w("aO"),D:w("cO"),Z:w("mD"),_:w("Y<@>"),F:w("Y<m?>"),K:w("aub<MZ>"),t:w("Jo"),G:w("u<m9<m>>"),g:w("u<m9<@>>"),x:w("u<t0>"),L:w("u<po<aM>>"),O:w("u<c5>"),d:w("u<iX>"),M:w("u<tr>"),s:w("u<m>"),c:w("u<Mj>"),f:w("u<jP>"),p:w("u<e>"),b:w("u<NR>"),a:w("u<b5>"),R:w("JA<@>"),l:w("RG"),q:w("aS<a0W>"),m:w("aS<pl>"),h:w("aS<a6s>"),A:w("aS<O<J>>"),U:w("aS<a9Z>"),j:w("B<@>"),J:w("bE<m,m>"),i:w("A<m,@>"),w:w("hp"),V:w("cR"),P:w("aF"),u:w("ts"),r:w("Z"),n:w("Fj"),N:w("m"),Q:w("jg"),X:w("cl<m>"),Y:w("bL<x>"),o:w("MZ"),aX:w("d7<pS>"),cg:w("N_"),bj:w("y5"),e:w("VL"),E:w("aNJ<cO>"),I:w("ak<m>"),y:w("x"),z:w("@"),S:w("f"),T:w("m?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.bSc=new A.b2W(0,"requireUserActionForAllMediaTypes")
D.akl=new A.an6()
D.akp=new A.ao3()
D.alU=new A.aHU()
D.aGp=B.a(w([D.akl,D.akp,D.alU]),B.C("u<CB>"))
D.aQi=B.a(w(["allow-downloads","allow-forms","allow-modals","allow-orientation-lock","allow-pointer-lock","allow-popups","allow-popups-to-escape-sandbox","allow-presentation","allow-same-origin"]),x.s)
D.aN0=B.a(w(["accelerometer","clipboard-write","encrypted-media","gyroscope","picture-in-picture"]),x.s)
D.bSl=new A.b8e()
D.alW=new A.bW_()
D.amy=new B.yZ(C.zZ,0.4,null,null,null,null,null,null,null)
D.amr=new B.kN(C.N,null,null,D.amy,null)
D.av1=new B.am(10,10,0,0)
D.avI=new A.ph(0,"topStart")
D.MS=new A.ph(1,"topCenter")
D.avJ=new A.ph(10,"leftCenter")
D.avK=new A.ph(11,"leftEnd")
D.avL=new A.ph(2,"topEnd")
D.avM=new A.ph(3,"rightStart")
D.avN=new A.ph(4,"rightCenter")
D.avO=new A.ph(5,"rightEnd")
D.avP=new A.ph(6,"bottomStart")
D.avQ=new A.ph(7,"bottomCenter")
D.avR=new A.ph(8,"bottomEnd")
D.avS=new A.ph(9,"leftStart")
D.MT=new A.hy(0,0,0,0)
D.avT=new A.hy(16,10,0,0)
D.avX=new A.a11(1,"aboveBodyCloseTag")
D.avY=new A.a11(2,"belowHeadOpenTag")
D.avZ=new A.a11(3,"aboveHeadCloseTag")
D.bF2=new B.a5(!0,null,null,null,null,null,16,C.ff,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bID=new B.cn("Select Rows x Columns",null,D.bF2,null,null,null,null,null,null,null,null,null,null,null,null)
D.awb=new B.oh(1,C.fP,D.bID,null)
D.axM=new B.aB(58027,"MaterialIcons",null,!1)
D.axN=new B.aB(58028,"MaterialIcons",null,!1)
D.axO=new B.aB(58029,"MaterialIcons",null,!1)
D.axP=new B.aB(58030,"MaterialIcons",null,!1)
D.axW=new B.aB(58240,"MaterialIcons",null,!1)
D.ayq=new B.aB(59812,"MaterialIcons",null,!1)
D.ayr=new B.aB(59816,"MaterialIcons",null,!1)
D.O1=new B.aB(59818,"MaterialIcons",null,!1)
D.ays=new B.aB(59819,"MaterialIcons",null,!1)
D.ayt=new B.aB(59823,"MaterialIcons",null,!0)
D.ayu=new B.aB(59824,"MaterialIcons",null,!0)
D.ayv=new B.aB(59825,"MaterialIcons",null,!1)
D.ayw=new B.aB(59827,"MaterialIcons",null,!0)
D.ayx=new B.aB(59829,"MaterialIcons",null,!1)
D.ayy=new B.aB(59831,"MaterialIcons",null,!1)
D.ayz=new B.aB(59834,"MaterialIcons",null,!1)
D.ayA=new B.aB(59835,"MaterialIcons",null,!1)
D.ayB=new B.aB(59836,"MaterialIcons",null,!1)
D.ayC=new B.aB(59837,"MaterialIcons",null,!1)
D.ayD=new B.aB(60007,"MaterialIcons",null,!1)
D.ayE=new B.aB(60424,"MaterialIcons",null,!0)
D.ayF=new B.aB(60802,"MaterialIcons",null,!0)
D.ayX=new B.aB(63047,"MaterialIcons",null,!1)
D.azh=new B.d3(D.ayX,null,C.dt,null,null)
D.ayW=new B.aB(63030,"MaterialIcons",null,!1)
D.azG=new B.d3(D.ayW,null,C.e6,null,null)
D.bSP=new A.bpV(0,"newline")
D.bGC=new B.a5(!0,null,null,null,null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aAk=new B.ps(null,null,null,null,null,null,null,null,null,null," Type URL",null,D.bGC,null,null,null,!0,!0,null,null,null,null,null,null,null,C.MK,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,C.dB,null,null,null,null,C.dB,!0,null,!0,null)
D.bSS=new A.bqr(1,"unrestricted")
D.Rl=B.a(w(["#000000","#FFFFFF","#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"]),x.s)
D.avB=new A.t0(0,"insertRowAbove")
D.avC=new A.t0(1,"insertRowBelow")
D.avD=new A.t0(2,"insertColumnLeft")
D.avE=new A.t0(3,"insertColumnRight")
D.avF=new A.t0(4,"deleteRow")
D.avG=new A.t0(5,"deleteColumn")
D.avH=new A.t0(6,"deleteTable")
D.Ep=B.a(w([D.avB,D.avC,D.avD,D.avE,D.avF,D.avG,D.avH]),x.x)
D.bJ4=new B.cn("Edit Table",null,T.zE,null,null,null,null,null,null,null,null,null,null,null,null)
D.bvY=new B.a3(Q.iX,D.bJ4,null)
D.awc=new B.oh(1,C.fP,D.bvY,null)
D.aKh=B.a(w([D.awc,Y.amC]),x.p)
D.bzk=new B.lH(C.a7,C.f,C.i,C.j,null,C.m,null,C.k,0,D.aKh,null)
D.H6=new B.hl(C.da,0,B.C("hl<dHj>"))
D.bCl=new B.ao(0,null,null,null)
D.bCp=new B.ao(15,null,null,null)
D.bCF=new I.tJ(4,0,0,1)
D.ad2=new A.a8P(0,"html")
D.ad3=new A.a8P(1,"url")
D.ad4=new A.a8P(2,"urlBypass")
D.bH_=new B.a5(!0,null,null,'"PT Sans", Calibri, Tahoma, sans-serif',null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bI8=new B.a5(!0,C.cS,null,null,null,null,18,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bKt=new A.jP("Add a table",25,"addTable")
D.ae8=new A.jP("Alignment",14,"align")
D.ae9=new A.jP("Header H1",10,"headerOne")
D.bKu=new A.jP("Bold",0,"bold")
D.bKv=new A.jP("Clear History",24,"clearHistory")
D.aea=new A.jP("Hyperlink",18,"link")
D.bKw=new A.jP("Edit table",26,"editTable")
D.bKx=new A.jP("Italic",1,"italic")
D.bKy=new A.jP("Redo",23,"redo")
D.bKz=new A.jP("Strikethrough",3,"strike")
D.bKA=new A.jP("Underline",2,"underline")
D.bKB=new A.jP("Undo",22,"undo")
D.bKC=new A.jP("Insert image",19,"image")
D.bKD=new A.jP("Font Size",17,"size")
D.aeb=new A.jP("Header H2",11,"headerTwo")
D.bKE=new A.jP("Background color",13,"background")
D.aec=new A.jP("Clears all formats",21,"clean")
D.bKF=new A.jP("separator",27,"separator")
D.bKG=new A.jP("Insert Youtube/Url",20,"video")
D.bKH=new A.jP("Font color",12,"color")
D.bNd=new A.aHg(0,"video")
D.bNe=new A.aHg(1,"hyperlink")})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"dMU","d58",()=>A.d_j(self))
w($,"dLR","cML",()=>B.d_Z("_$dart_dartObject"))
w($,"dMY","cMT",()=>function DartObject(d){this.o=d})
v($,"dOp","d68",()=>B.cIx(null))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_297",e:"endPart",h:b})})($__dart_deferred_initializers__,"DXai8OfgIAbCP/wi2NGurLVq9vI=");