((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_220",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,E,A={
cof(d){var x=new A.a_B()
x.a2h(d)
return x},
a_B:function a_B(){this.a=$
this.b=0
this.c=2147483647},
bLw:function bLw(){},
cht:function cht(){},
bLx:function bLx(){},
chu:function chu(){},
cRm(d,e,f,g){var x=A.cqW(),w=A.cqW(),v=A.cqW(),u=new Uint16Array(16),t=new Uint32Array(573),s=new Uint8Array(573)
x=new A.b5L(d,f,x,w,v,u,t,s)
x.aZl(e,g)
x.aZk(C.ob)
return x},
cwb(d,e,f,g){var x=d[e*2],w=d[f*2]
if(x>=w)x=x===w&&g[e]<=g[f]
else x=!0
return x},
cqW(){return new A.bZ_()},
d35(d,e,f){var x,w,v,u,t,s,r,q=new Uint16Array(16)
for(x=0,w=1;w<=15;++w){x=x+f[w-1]<<1>>>0
q[w]=x}for(v=d.$flags|0,u=0;u<=e;++u){t=u*2
s=d[t+1]
if(s===0)continue
r=q[s]
q[s]=r+1
r=A.d36(r,s)
v&2&&B.B(d)
d[t]=r}},
d36(d,e){var x,w=0
do{x=A.py(d,1)
w=(w|d&1)<<1>>>0
if(--e,e>0){d=x
continue}else break}while(!0)
return A.py(w,1)},
cE0(d){return d<256?C.Lu[d]:C.Lu[256+A.py(d,7)]},
cr7(d,e,f,g,h){return new A.cbj(d,e,f,g,h)},
py(d,e){if(d>=0)return D.c.nY(d,e)
else return D.c.nY(d,e)+D.c.ek(2,(~e>>>0)+65536&65535)},
Tr:function Tr(d,e){this.a=d
this.b=e},
b5L:function b5L(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=null
_.e=_.d=0
_.x=_.w=_.r=_.f=$
_.y=2
_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=$
_.k1=0
_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=_.k2=$
_.p4=f
_.R8=g
_.RG=h
_.rx=i
_.ry=j
_.x1=_.to=$
_.x2=k
_.E=_.bt=_.bq=_.b7=_.aD=_.c_=_.bY=_.y2=_.y1=_.xr=$},
t9:function t9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bZ_:function bZ_(){this.c=this.b=this.a=$},
cbj:function cbj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bhd:function bhd(d,e,f,g){var _=this
_.a=d
_.b=null
_.c=e
_.e=_.d=0
_.r=f
_.w=g},
bLv:function bLv(){},
aj6:function aj6(d,e){this.a=d
this.b=e},
bhv(d,e,f,g){var x,w,v=new A.bhu(e)
if(g==null)g=0
if(f==null)f=d.length-g
x=d.length
if(g+f>x)f=x-g
w=y.D.b(d)?d:new Uint8Array(B.bV(d))
x=J.da(D.A.gaj(w),w.byteOffset+g,f)
v.b=x
v.d=x.length
return v},
bhu:function bhu(d){var _=this
_.b=null
_.c=0
_.d=$
_.a=d},
bhw:function bhw(){},
czZ(d,e){var x=e==null?32768:e
return new A.avh(new Uint8Array(x),d)},
avh:function avh(d,e){this.b=0
this.c=d
this.a=e},
bq7:function bq7(){},
a_H(d,e,f){var x=0,w=B.k(y.D),v
var $async$a_H=B.f(function(g,h){if(g===1)return B.h(h,w)
while(true)switch(x){case 0:x=3
return B.c(A.Hf(d,e,"jpg",new A.bgI(d,e,f),f),$async$a_H)
case 3:v=h
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$a_H,w)},
aqw(d,e){var x=0,w=B.k(y.D),v
var $async$aqw=B.f(function(f,g){if(f===1)return B.h(g,w)
while(true)switch(x){case 0:x=3
return B.c(A.Hf(d,e,"png",new A.bgJ(d,e),null),$async$aqw)
case 3:v=g
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$aqw,w)},
bgK(d,e,f){var x=0,w=B.k(y.D),v
var $async$bgK=B.f(function(g,h){if(g===1)return B.h(h,w)
while(true)switch(x){case 0:x=3
return B.c(A.Hf(d,e,"webp",new A.bgL(d,e,f),f),$async$bgK)
case 3:v=h
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$bgK,w)},
Hf(d,e,f,g,h){return A.cUk(d,e,f,g,h)},
cUk(d,e,f,g,h){var x=0,w=B.k(y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j
var $async$Hf=B.f(function(i,a0){if(i===1){t.push(a0)
x=u}while(true)switch(x){case 0:if(!$.cuA){v=g.$0()
x=1
break}m=$.hB().b
m===$&&B.b()
r=m
q="uploads/"+Date.now()+"."+f
u=4
m=r.as
m===$&&B.b()
x=7
return B.c(m.bA("images-temp").QF(q,d),$async$Hf)
case 7:p=a0
if(J.bz(p)===0){m=g.$0()
v=m
x=1
break}u=9
m=r.as
m===$&&B.b()
x=12
return B.c(m.bA("images-temp").XL(0,q,new A.bIl(e,h,C.aWn)),$async$Hf)
case 12:o=a0
v=o
s=[1]
x=10
break
s.push(11)
x=10
break
case 9:u=8
k=t.pop()
m=B.ah(k)
if(m instanceof B.S7){n=m
if(n.c==="403")$.cuA=!1
m=g.$0()
v=m
s=[1]
x=10
break}else throw k
s.push(11)
x=10
break
case 8:s=[4]
case 10:u=4
m=r.as
m===$&&B.b()
x=13
return B.c(m.bA("images-temp").K(0,B.a([q],y.T)),$async$Hf)
case 13:x=s.pop()
break
case 11:u=2
x=6
break
case 4:u=3
j=t.pop()
m=g.$0()
v=m
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.i(v,w)
case 2:return B.h(t.at(-1),w)}})
return B.j($async$Hf,w)},
col(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n=null,m=A.cH_(d)
if(m==null)throw B.l(B.cT("Failed to decode "+f+" image"))
x=A.d9u(m,e)
if(f==="jpg"){w=g==null?85:g
v=new Uint8Array(64)
u=new Uint8Array(64)
t=new Float32Array(64)
s=new Float32Array(64)
r=B.bK(65535,n,!1,y.cl)
q=y.s
p=B.bK(65535,n,!1,q)
o=B.bK(64,n,!1,q)
q=B.bK(64,n,!1,q)
v=new A.bi9(v,u,t,s,r,p,o,q,new Int32Array(2048))
v.e=v.SY(C.Sq,C.qy)
v.f=v.SY(C.Ni,C.qy)
v.r=v.SY(C.Km,C.LG)
v.w=v.SY(C.M7,C.OB)
v.b9u()
v.b9G()
v.aKz(w)
return new Uint8Array(B.bV(v.bxb(x,C.JU)))}else if(f==="png")return new Uint8Array(B.bV(new A.bt1(C.aUk,6).bxc(x,!1)))
else if(f==="webp")return d
else throw B.l(B.cT("Unsupported image format: "+f))},
cUj(d){var x=d.length
if(x>=2&&d[0]===255&&d[1]===216)return"jpg"
if(x>=8&&d[0]===137&&d[1]===80&&d[2]===78&&d[3]===71)return"png"
if(x>=12&&d[0]===82&&d[1]===73&&d[2]===70&&d[3]===70&&d[8]===87&&d[9]===69&&d[10]===66&&d[11]===80)return"webp"
return"jpg"},
He(d,e){var x=0,w=B.k(y.D),v,u
var $async$He=B.f(function(f,g){if(f===1)return B.h(g,w)
while(true)switch(x){case 0:u=A.cUj(d)
x=u==="jpg"?3:5
break
case 3:x=6
return B.c(A.a_H(d,e,85),$async$He)
case 6:v=g
x=1
break
x=4
break
case 5:x=u==="png"?7:9
break
case 7:x=10
return B.c(A.aqw(d,e),$async$He)
case 10:v=g
x=1
break
x=8
break
case 9:x=u==="webp"?11:13
break
case 11:x=14
return B.c(A.bgK(d,e,85),$async$He)
case 14:v=g
x=1
break
x=12
break
case 13:x=15
return B.c(A.a_H(d,e,85),$async$He)
case 15:v=g
x=1
break
case 12:case 8:case 4:case 1:return B.i(v,w)}})
return B.j($async$He,w)},
bgI:function bgI(d,e,f){this.a=d
this.b=e
this.c=f},
bgJ:function bgJ(d,e){this.a=d
this.b=e},
bgL:function bgL(d,e,f){this.a=d
this.b=e
this.c=f},
b_O:function b_O(d,e){this.a=d
this.b=e},
hr:function hr(d){this.a=-1
this.b=d},
MT:function MT(d){this.a=d},
MU:function MU(d){this.a=d},
MV:function MV(d){this.a=d},
MW:function MW(d){this.a=d},
MX:function MX(d){this.a=d},
MY:function MY(d){this.a=d},
N0:function N0(d,e){this.a=d
this.b=e},
N1:function N1(d){this.a=d},
N2:function N2(d,e){this.a=d
this.b=e},
N3:function N3(d){this.a=d},
N4:function N4(d,e){this.a=d
this.b=e},
cPX(d,e,f,g){var x=new A.MZ(new Uint8Array(4))
x.aSx(d,e,f,g)
return x},
xL:function xL(d){this.a=d},
ajR:function ajR(d){this.a=d},
MZ:function MZ(d){this.a=d},
Xq:function Xq(d){this.a=d},
ak2:function ak2(d){this.a=d},
aUE(d,e,f){var x
if(e===f)return d
switch(e.a){case 0:if(d===0)x=0
else{x=C.XW.i(0,f)
x.toString}return x
case 1:switch(f.a){case 0:return d===0?0:1
case 1:return d
case 2:return d*5
case 3:return d*75
case 4:return d*21845
case 5:return d*1431655765
case 6:return d*42
case 7:return d*10922
case 8:return d*715827882
case 9:case 10:case 11:return d/3}break
case 2:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.P(B.bg(d),1)
case 2:return d
case 3:return d*17
case 4:return d*4369
case 5:return d*286331153
case 6:return d*8
case 7:return d*2184
case 8:return d*143165576
case 9:case 10:case 11:return d/3}break
case 3:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.P(B.bg(d),6)
case 2:return D.c.P(B.bg(d),4)
case 3:return d
case 4:return d*257
case 5:return d*16843009
case 6:return D.c.P(B.bg(d),1)
case 7:return d*128
case 8:return d*8421504
case 9:case 10:case 11:return d/255}break
case 4:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.P(B.bg(d),14)
case 2:return D.c.P(B.bg(d),12)
case 3:return D.c.P(B.bg(d),8)
case 4:return d
case 5:return B.bg(d)<<8>>>0
case 6:return D.c.P(B.bg(d),9)
case 7:return D.c.P(B.bg(d),1)
case 8:return d*524296
case 9:case 10:case 11:return d/65535}break
case 5:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.P(B.bg(d),30)
case 2:return D.c.P(B.bg(d),28)
case 3:return D.c.P(B.bg(d),24)
case 4:return D.c.P(B.bg(d),16)
case 5:return d
case 6:return D.c.P(B.bg(d),25)
case 7:return D.c.P(B.bg(d),17)
case 8:return D.c.P(B.bg(d),1)
case 9:case 10:case 11:return d/4294967295}break
case 6:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.P(B.bg(d),5)
case 2:return d<=0?0:D.c.P(B.bg(d),3)
case 3:return d<=0?0:B.bg(d)<<1>>>0
case 4:return d<=0?0:B.bg(d)*516
case 5:return d<=0?0:B.bg(d)*33818640
case 6:return d
case 7:return d*258
case 8:return d*16909320
case 9:case 10:case 11:return d/127}break
case 7:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.P(B.bg(d),15)
case 2:return d<=0?0:D.c.P(B.bg(d),11)
case 3:return d<=0?0:D.c.P(B.bg(d),7)
case 4:return d<=0?0:B.bg(d)<<1>>>0
case 5:return d<=0?0:B.bg(d)*131076
case 6:return D.c.P(B.bg(d),8)
case 7:return d
case 8:return B.bg(d)*65538
case 9:case 10:case 11:return d/32767}break
case 8:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.P(B.bg(d),29)
case 2:return d<=0?0:D.c.P(B.bg(d),27)
case 3:return d<=0?0:D.c.P(B.bg(d),23)
case 4:return d<=0?0:D.c.P(B.bg(d),16)
case 5:return d<=0?0:B.bg(d)<<1>>>0
case 6:return D.c.P(B.bg(d),24)
case 7:return D.c.P(B.bg(d),16)
case 8:return d
case 9:case 10:case 11:return d/2147483647}break
case 9:case 10:case 11:switch(f.a){case 0:return d===0?0:1
case 1:return D.d.C(D.d.b9(d,0,1)*3)
case 2:return D.d.C(D.d.b9(d,0,1)*15)
case 3:return D.d.C(D.d.b9(d,0,1)*255)
case 4:return D.d.C(D.d.b9(d,0,1)*65535)
case 5:return D.d.C(D.d.b9(d,0,1)*4294967295)
case 6:return D.d.C(d<0?D.d.b9(d,-1,1)*128:D.d.b9(d,-1,1)*127)
case 7:return D.d.C(d<0?D.d.b9(d,-1,1)*32768:D.d.b9(d,-1,1)*32767)
case 8:return D.d.C(d<0?D.d.b9(d,-1,1)*2147483648:D.d.b9(d,-1,1)*2147483647)
case 9:case 10:case 11:return d}break}},
nB:function nB(d,e){this.a=d
this.b=e},
aiS:function aiS(d,e){this.a=d
this.b=e},
Zr(d){var x=new A.Ob(B.I(y.N,y.P))
x.aSK(d)
return x},
cxa(d){var x=new A.Ob(B.I(y.N,y.P))
x.vn(0,d)
return x},
Ob:function Ob(d){this.a=d},
aJ1:function aJ1(d,e){this.a=d
this.b=e},
aI(d,e,f){return new A.ao0(d,e)},
ao0:function ao0(d,e){this.a=d
this.b=e},
u0:function u0(d){this.a=d},
bgB:function bgB(d){this.a=d},
cy6(d){var x=new A.pW(B.I(y.p,y.r),new A.u0(B.I(y.N,y.P)))
x.bts(d)
return x},
pW:function pW(d,e){this.a=d
this.b=e},
bgC:function bgC(d){this.a=d},
bgD:function bgD(d){this.a=d},
cUh(d){var x=new Uint16Array(1)
x[0]=d
return new A.yg(x)},
cye(d,e){var x=new A.yg(new Uint16Array(e))
x.aSP(d,e)
return x},
cUg(d){var x=new Uint32Array(1)
x[0]=d
return new A.rc(x)},
cy9(d,e){var x=new A.rc(new Uint32Array(e))
x.aSM(d,e)
return x},
cya(d,e){var x,w=J.kp(e,y.i)
for(x=0;x<e;++x)w[x]=new A.nS(d.a1(),d.a1())
return new A.u1(w)},
cyd(d,e){var x=new A.yf(new Int16Array(e))
x.aSO(d,e)
return x},
cyb(d,e){var x=new A.ye(new Int32Array(e))
x.aSN(d,e)
return x},
cyc(d,e){var x,w,v,u,t=J.kp(e,y.i)
for(x=0;x<e;++x){w=d.a1()
v=$.hp()
v.$flags&2&&B.B(v)
v[0]=w
w=$.kB()
u=w[0]
v[0]=d.a1()
t[x]=new A.nS(u,w[0])}return new A.u2(t)},
cyf(d){var x=new Float32Array(1)
x[0]=d
return new A.BF(x)},
cyg(d,e){var x=new A.BF(new Float32Array(e))
x.aSQ(d,e)
return x},
cy7(d){var x=new Float64Array(1)
x[0]=d
return new A.BE(x)},
cy8(d,e){var x=new A.BE(new Float64Array(e))
x.aSL(d,e)
return x},
mJ:function mJ(d,e){this.a=d
this.b=e},
jZ:function jZ(){},
u_:function u_(d){this.a=d},
BD:function BD(d){this.a=d},
yg:function yg(d){this.a=d},
rc:function rc(d){this.a=d},
u1:function u1(d){this.a=d},
vZ:function vZ(d){this.a=d},
yf:function yf(d){this.a=d},
ye:function ye(d){this.a=d},
u2:function u2(d){this.a=d},
BF:function BF(d){this.a=d},
BE:function BE(d){this.a=d},
Hc:function Hc(d){this.a=d},
cv0(d){var x,w,v=new A.aZz()
if(!A.cmQ(d))B.a6(A.c4("Not a bitmap file."))
d.d+=2
x=d.a1()
w=$.hp()
w.$flags&2&&B.B(w)
w[0]=x
x=$.kB()
d.d+=4
w[0]=d.a1()
v.b=x[0]
return v},
cmQ(d){if(d.c-d.d<2)return!1
return A.c9(d,null,0).al()===19778},
cPe(d,e){var x,w,v,u,t=e==null?A.cv0(d):e,s=d.d,r=d.a1(),q=d.a1(),p=$.hp()
p.$flags&2&&B.B(p)
p[0]=q
q=$.kB()
x=q[0]
p[0]=d.a1()
q=q[0]
w=d.al()
v=d.al()
u=C.QL[d.a1()]
d.a1()
p[0]=d.a1()
p[0]=d.a1()
p=d.a1()
d.a1()
s=new A.Fv(t,x,q,r,w,v,u,p,s)
s.ahZ(d,e)
return s},
lI:function lI(d,e){this.a=d
this.b=e},
aZz:function aZz(){this.b=$},
Fv:function Fv(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=l},
aiW:function aiW(d){this.a=$
this.b=null
this.c=d},
aZy:function aZy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
b6M:function b6M(d){this.a=$
this.b=null
this.c=d},
b5u:function b5u(){},
b5v:function b5v(){},
b97:function b97(){},
ao1:function ao1(d,e,f){this.a=d
this.b=e
this.c=f},
aqU:function aqU(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
Od:function Od(d,e){this.a=d
this.b=e},
Gx:function Gx(d,e){this.a=d
this.b=e},
ao2:function ao2(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
cxb(d,e,f,g){var x,w
switch(d.a){case 1:return new A.bhH(f,e)
case 2:return new A.aqW(f,g==null?1:g,e)
case 3:return new A.aqW(f,g==null?16:g,e)
case 4:x=g==null?32:g
w=new A.bhF(f,x,e)
w.aSW(e,f,x)
return w
case 5:return new A.bhG(f,g==null?16:g,e)
case 6:return new A.aqU(f,g==null?32:g,!1,e)
case 7:return new A.aqU(f,g==null?32:g,!0,e)
default:throw B.l(A.c4("Invalid compression type: "+d.j(0)))}},
tP:function tP(d,e){this.a=d
this.b=e},
baf:function baf(){},
bhE:function bhE(){},
cSG(d,e,f,g){var x,w,v,u,t,s,r,q
if(e===0){if(g!==0)throw B.l(A.c4("Incomplete huffman data"))
return}x=d.d
w=d.a1()
v=d.a1()
d.d+=4
u=d.a1()
t=!0
if(w<65537)t=v>=65537
if(t)throw B.l(A.c4("Invalid huffman table size"))
d.d+=4
s=B.bK(65537,0,!1,y.p)
r=J.iV(16384,y.W)
for(q=0;q<16384;++q)r[q]=new A.ao3()
A.cSH(d,e-20,w,v,s)
if(u>8*(e-(d.d-x)))throw B.l(A.c4("Error in header for Huffman-encoded data (invalid number of bits)."))
A.cSD(s,w,v,r)
A.cSF(s,r,d,u,v,g,f)},
cSF(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p="Error in Huffman-encoded data (invalid code).",o=B.a([0,0],y.t),n=f.d+D.c.b8(g+7,8)
for(x=0;f.d<n;){A.cnQ(o,f)
for(;w=o[1],w>=14;){v=e[D.c.nY(o[0],w-14)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cnR(v.b,h,o,f,j,x,i)}else{if(v.c==null)throw B.l(A.c4(p))
for(t=0;t<v.b;++t){s=d[v.c[t]]&63
while(!0){w=o[1]
if(!(w<s&&f.d<n))break
A.cnQ(o,f)}if(w>=s){u=v.c
w-=s
if(d[u[t]]>>>6===(D.c.nY(o[0],w)&D.c.ek(1,s)-1)>>>0){o[1]=w
r=A.cnR(u[t],h,o,f,j,x,i)
x=r
break}}}if(t===v.b)throw B.l(A.c4(p))}}}q=8-g&7
o[0]=D.c.P(o[0],q)
o[1]=o[1]-q
for(;w=o[1],w>0;){v=e[D.c.eR(o[0],14-w)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cnR(v.b,h,o,f,j,x,i)}else throw B.l(A.c4(p))}if(x!==i)throw B.l(A.c4("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
cnR(d,e,f,g,h,i,j){var x,w,v,u,t,s="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)A.cnQ(f,g)
x=f[1]-8
f[1]=x
w=D.c.nY(f[0],x)&255
if(i+w>j)throw B.l(A.c4(s))
v=h[i-1]
for(x=h.$flags|0;u=w-1,w>0;w=u,i=t){t=i+1
x&2&&B.B(h)
h[i]=v}}else{if(i<j){h.toString
t=i+1
h.$flags&2&&B.B(h)
h[i]=d}else throw B.l(A.c4(s))
i=t}return i},
cSD(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n="Error in Huffman-encoded data (invalid code table entry)."
for(x=y.t,w=y.p;e<=f;++e){v=d[e]
u=v>>>6
t=v&63
if(D.c.hx(u,t)!==0)throw B.l(A.c4(n))
if(t>14){s=g[D.c.h2(u,t-14)]
if(s.a!==0)throw B.l(A.c4(n))
v=++s.b
r=s.c
if(r!=null){v=B.bK(v,0,!1,w)
s.c=v
for(q=s.b-1,p=0;p<q;++p)v[p]=r[p]}else s.c=B.a([0],x)
s.c[s.b-1]=e}else if(t!==0){v=14-t
o=D.c.eR(u,v)
for(p=D.c.eR(1,v);p>0;--p,++o){s=g[o]
if(s.a!==0||s.c!=null)throw B.l(A.c4(n))
s.a=t
s.b=e}}}},
cSH(d,e,f,g,h){var x,w,v,u,t,s="Error in Huffman-encoded data (unexpected end of code table data).",r="Error in Huffman-encoded data (code table is longer than expected).",q=d.d,p=B.a([0,0],y.t)
for(x=g+1;f<=g;++f){if(d.d-q>e)throw B.l(A.c4(s))
w=A.cxc(6,p,d)
h[f]=w
if(w===63){if(d.d-q>e)throw B.l(A.c4(s))
v=A.cxc(8,p,d)+6
if(f+v>x)throw B.l(A.c4(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}else if(w>=59){v=w-59+2
if(f+v>x)throw B.l(A.c4(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}}A.cSE(h)},
cSE(d){var x,w,v,u,t,s=B.bK(59,0,!1,y.p)
for(x=0;x<65537;++x){w=d[x]
s[w]=s[w]+1}for(v=0,x=58;x>0;--x,v=u){u=v+s[x]>>>1
s[x]=v}for(x=0;x<65537;++x){t=d[x]
if(t>0){w=s[t]
s[t]=w+1
d[x]=(t|w<<6)>>>0}}},
cnQ(d,e){d[0]=((d[0]<<8|e.cq())&-1)>>>0
d[1]=(d[1]+8&-1)>>>0},
cxc(d,e,f){var x
for(;x=e[1],x<d;){e[0]=((e[0]<<8|J.v(f.a,f.d++))&-1)>>>0
e[1]=(e[1]+8&-1)>>>0}x-=d
e[1]=x
return(D.c.nY(e[0],x)&D.c.ek(1,d)-1)>>>0},
ao3:function ao3(){this.b=this.a=0
this.c=null},
cSI(d){var x=A.cV(d,!1,null,0)
if(x.a1()!==20000630)return!1
if(x.cq()!==2)return!1
if((x.rD()&4294967289)>>>0!==0)return!1
return!0},
bah:function bah(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
cyx(d,e,f){var x=new A.aqV(d,B.a([],y.Q),B.I(y.N,y.n),C.Iu,e)
x.aSD(d,e,f)
return x},
Zx:function Zx(){},
bai:function bai(d,e){this.a=d
this.b=e},
aqV:function aqV(d,e,f,g,h){var _=this
_.a=d
_.b=null
_.c=e
_.d=0
_.e=f
_.r=$
_.x=_.w=0
_.at=$
_.ax=g
_.ay=null
_.ch=$
_.CW=null
_.cx=0
_.cy=null
_.db=h
_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=null
_.k2=$
_.k3=null},
bhF:function bhF(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
aM3:function aM3(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
bhG:function bhG(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
bhH:function bhH(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
aqW:function aqW(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
bag:function bag(){this.a=null},
cxK(d){var x=new Uint8Array(d*3)
return new A.a_a(A.cTL(d),d,null,new A.uh(x,d,3))},
cTK(d){return new A.a_a(d.a,d.b,d.c,A.cA5(d.d))},
cTL(d){var x
for(x=1;x<=8;++x)if(D.c.ek(1,x)>=d)return x
return 0},
a_a:function a_a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_b:function a_b(){},
aqX:function aqX(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=$},
apy:function apy(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
be_:function be_(){var _=this
_.a=null
_.e=_.d=_.c=_.b=0
_.f=null
_.r=0
_.w=null
_.y=_.x=$
_.z=null
_.Q=0
_.as=null
_.ay=_.ax=_.at=0
_.ch=null
_.dy=_.dx=_.db=_.cy=_.cx=_.CW=0},
cy3(d){var x,w,v,u,t,s
if(d.al()!==0)return null
x=d.al()
if(x>=3)return null
w=C.aoZ[x]
if(w===C.IV)return null
v=d.al()
u=J.kp(v,y.Y)
for(t=0;t<v;++t){J.v(d.a,d.d++)
s=J.v(d.a,d.d++)
J.v(d.a,d.d++);++d.d
d.al()
d.al()
u[t]=new A.aqk(s,d.a1(),d.a1())}return new A.bgp(w,v,u)},
OK:function OK(d,e){this.a=d
this.b=e},
bgp:function bgp(d,e,f){this.c=d
this.d=e
this.e=f},
aqk:function aqk(d,e,f){this.b=d
this.d=e
this.e=f},
bgn:function bgn(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=l},
bgo:function bgo(){this.b=this.a=null},
ajW:function ajW(d,e,f){this.e=d
this.f=e
this.r=f},
H2:function H2(){},
H3:function H3(d){this.a=d},
a_C:function a_C(d){this.a=d},
bi5:function bi5(){this.d=null},
C0:function C0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.y=_.x=_.w=_.r=_.f=_.e=$},
cyM(){var x=B.bK(4,null,!1,y.a7),w=B.a([],y.cB),v=y.bT,u=J.BY(0,v)
v=J.BY(0,v)
return new A.bi7(new A.Ob(B.I(y.N,y.P)),x,w,u,v,B.a([],y.E))},
bi7:function bi7(d,e,f,g,h,i){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i},
bi8:function bi8(d,e){this.a=d
this.b=e},
TZ:function TZ(d){this.a=d
this.b=0},
ar9:function ar9(d,e){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=d
_.z=e},
bib:function bib(){this.r=this.f=$},
ara:function ara(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.f=$
_.r=null
_.y=f
_.z=g
_.Q=h
_.as=i
_.at=j
_.ax=k
_.cx=_.CW=_.ch=_.ay=0
_.cy=$},
ar8:function ar8(){},
bi6:function bi6(d,e){this.a=d
this.b=e},
bi9:function bi9(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=null
_.w=_.r=$
_.x=h
_.y=i
_.z=j
_.Q=k
_.as=l
_.at=null
_.ax=0
_.ay=7},
QA:function QA(d,e){this.a=d
this.b=e},
a3l:function a3l(d,e){this.a=d
this.b=e},
a3m:function a3m(){},
aqY:function aqY(d,e,f,g,h,i,j,k,l){var _=this
_.y=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
cyy(){var x=y.N
return new A.bhI(B.I(x,x),B.a([],y.d),B.a([],y.t))},
D2:function D2(d,e){this.a=d
this.b=e},
bt3:function bt3(){},
bhI:function bhI(d,e,f){var _=this
_.c=_.b=_.a=0
_.d=-1
_.r=_.f=0
_.z=_.x=_.w=null
_.Q=""
_.at=null
_.ax=d
_.ch=1
_.cx=e
_.cy=f},
awM:function awM(d){var _=this
_.a=d
_.c=_.b=0
_.d=$
_.e=0},
awN:function awN(d,e){this.a=d
this.b=e},
bt1:function bt1(d,e){var _=this
_.a=null
_.b=d
_.c=0
_.d=e
_.e=$
_.f=0
_.r=!1
_.w=null},
D3:function D3(d,e){this.a=d
this.b=e},
IP:function IP(d){this.b=this.a=0
this.e=d},
bt4:function bt4(d){this.b=this.a=null
this.c=d},
bt5:function bt5(){},
axf:function axf(){this.b=this.a=null},
axg:function axg(){this.b=this.a=null},
wp:function wp(){},
axi:function axi(){this.b=this.a=null},
axj:function axj(){this.b=this.a=null},
axm:function axm(){this.b=this.a=null},
axn:function axn(){this.b=this.a=null},
a3G:function a3G(d){this.b=d},
axl:function axl(){this.b=$
this.c=null},
bu1:function bu1(){var _=this
_.w=_.r=_.f=_.e=$},
QO:function QO(d){this.a=d
this.c=null},
cAM(d){var x=new A.bu3(B.I(y.p,y.a2))
x.aT7(d)
return x},
cpu(d,e,f,g){var x=d/255,w=e/255,v=f/255,u=g/255,t=w*(1-v),s=x*(1-u)
return D.d.C(D.d.b9((2*x<v?2*w*x+t+s:u*v-2*(v-x)*(u-w)+t+s)*255,0,255))},
bu4(d,e){if(e===0)return 0
return D.d.C(D.c.b9(D.d.C(255*(1-(1-d/255)/(e/255))),0,255))},
bu6(d,e){return D.d.C(D.c.b9(d+e-255,0,255))},
cpw(d,e){return D.d.C(D.c.b9(255-(255-e)*(255-d),0,255))},
bu5(d,e){if(e===255)return 255
return D.d.C(D.d.b9(d/255/(1-e/255)*255,0,255))},
cpx(d,e){var x=d/255,w=e/255,v=1-w
return D.d.aZ(255*(v*w*x+w*(1-v*(1-x))))},
cps(d,e){var x=e/255,w=d/255
if(w<0.5)return D.d.aZ(510*x*w)
else return D.d.aZ(255*(1-2*(1-x)*(1-w)))},
cpy(d,e){if(e<128)return A.bu4(d,2*e)
else return A.bu5(d,2*(e-128))},
cpt(d,e){var x
if(e<128)return A.bu6(d,2*e)
else{x=2*(e-128)
return x+d>255?255:d+x}},
cpv(d,e){return e<128?Math.min(d,2*e):Math.max(d,2*(e-128))},
cpr(d,e){return D.d.aZ(e+d-2*e*d/255)},
p2(d,e,f){var x
if(d==null)x=0
else x=f===1?d[e]:(d[e]<<8|d[e+1])>>>8
return x},
cAN(b5,b6,b7,b8,b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4=B.I(y.p,y.aG)
for(x=b9.length,w=0;v=b9.length,w<v;b9.length===x||(0,B.Q)(b9),++w){u=b9[w]
b4.m(0,u.a,u)}if(b6===8)t=1
else t=b6===16?2:-1
s=A.hN(b3,b3,C.a7,0,C.bk,b8,b3,0,v,b3,C.a7,b7,!1)
if(t===-1)throw B.l(A.c4("PSD: unsupported bit depth: "+B.o(b6)))
r=b4.i(0,0)
q=b4.i(0,1)
p=b4.i(0,2)
o=b4.i(0,-1)
n=B.a([0,0,0],y.t)
m=-t
for(x=s.a,x=x.ga3(x),l=v>=5,k=v===4,j=v>=2,v=v>=4;x.q();){i=x.gL(x)
m+=t
switch(b5){case C.a2d:i.saf(0,A.p2(r.c,m,t))
i.sap(A.p2(q.c,m,t))
i.sau(0,A.p2(p.c,m,t))
i.saG(0,v?A.p2(o.c,m,t):255)
if(i.gaG(i)!==0){i.saf(0,(i.gaf(i)+i.gaG(i)-255)*255/i.gaG(i))
i.sap((i.gap()+i.gaG(i)-255)*255/i.gaG(i))
i.sau(0,(i.gau(i)+i.gaG(i)-255)*255/i.gaG(i))}break
case C.a2f:h=A.p2(r.c,m,t)
g=A.p2(q.c,m,t)
f=A.p2(p.c,m,t)
e=v?A.p2(o.c,m,t):255
d=((h*100>>>8)+16)/116
a0=(g-128)/500+d
a1=d-(f-128)/200
a2=Math.pow(d,3)
d=a2>0.008856?a2:(d-0.13793103448275862)/7.787
a3=Math.pow(a0,3)
a0=a3>0.008856?a3:(a0-0.13793103448275862)/7.787
a4=Math.pow(a1,3)
a1=a4>0.008856?a4:(a1-0.13793103448275862)/7.787
a0=a0*95.047/100
d=d*100/100
a1=a1*108.883/100
a5=a0*3.2406+d*-1.5372+a1*-0.4986
a6=a0*-0.9689+d*1.8758+a1*0.0415
a7=a0*0.0557+d*-0.204+a1*1.057
a5=a5>0.0031308?1.055*Math.pow(a5,0.4166666666666667)-0.055:12.92*a5
a6=a6>0.0031308?1.055*Math.pow(a6,0.4166666666666667)-0.055:12.92*a6
a7=a7>0.0031308?1.055*Math.pow(a7,0.4166666666666667)-0.055:12.92*a7
a8=[D.d.C(D.d.b9(a5*255,0,255)),D.d.C(D.d.b9(a6*255,0,255)),D.d.C(D.d.b9(a7*255,0,255))]
i.saf(0,a8[0])
i.sap(a8[1])
i.sau(0,a8[2])
i.saG(0,e)
break
case C.a2c:a9=A.p2(r.c,m,t)
e=j?A.p2(o.c,m,t):255
i.saf(0,a9)
i.sap(a9)
i.sau(0,a9)
i.saG(0,e)
break
case C.a2e:b0=A.p2(r.c,m,t)
b1=A.p2(q.c,m,t)
d=A.p2(p.c,m,t)
b2=A.p2(b4.i(0,k?-1:3).c,m,t)
e=l?A.p2(o.c,m,t):255
A.cGG(255-b0,255-b1,255-d,255-b2,n)
i.saf(0,n[0])
i.sap(n[1])
i.sau(0,n[2])
i.saG(0,e)
break
default:throw B.l(A.c4("Unhandled color mode: "+B.o(b5)))}}return s},
up:function up(d,e){this.a=d
this.b=e},
bu3:function bu3(d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=_.w=$
_.y=null
_.z=d
_.as=$
_.ay=_.ax=_.at=null},
axh:function axh(d,e){this.a=d
this.b=e},
axk:function axk(d,e,f){var _=this
_.b=_.a=null
_.f=_.e=_.d=_.c=$
_.r=null
_.y=_.w=$
_.Q=null
_.as=$
_.ay=d
_.ch=e
_.cx=null
_.cy=f},
cXT(d,e){var x,w
switch(d){case"lsct":x=new A.axl()
w=e.c-e.d
x.b=e.a1()
if(w>=12){if(e.jc(4)!=="8BIM")B.a6(A.c4("Invalid key in layer additional data"))
x.c=e.jc(4)}if(w>=16)e.a1()
return x
default:return new A.a3G(e)}},
QP:function QP(){},
bu2:function bu2(){this.a=null},
axq:function axq(){},
yW:function yW(d,e,f){this.a=d
this.b=e
this.c=f},
m3:function m3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3J:function a3J(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
QT:function QT(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
axp:function axp(){this.y=this.b=this.a=0},
yX(d,e){return(C.tX[d>>>8]<<17|C.tX[e>>>8]<<16|C.tX[d&255]<<1|C.tX[e&255])>>>0},
rE:function rE(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
bu7:function bu7(){this.b=this.a=null},
aBI:function aBI(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
o7:function o7(d,e){this.a=d
this.b=e},
bFN:function bFN(){this.a=null
this.b=$},
bGs:function bGs(d){this.a=d
this.c=this.b=0},
aBM:function aBM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
cqm(d,e,f){var x=new A.bGu(e,f,d),w=y.s
x.e=B.bK(e,null,!1,w)
x.f=B.bK(e,null,!1,w)
return x},
bGu:function bGu(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=0
_.f=_.e=null
_.r=$
_.x=_.w=null
_.y=0
_.z=2
_.as=0
_.at=null},
aBN:function aBN(d,e,f,g){var _=this
_.a=d
_.c=_.b=0
_.d=e
_.w=_.r=_.f=_.e=1
_.x=f
_.y=g
_.z=!1
_.Q=1
_.at=_.as=$
_.ch=_.ay=0
_.cx=_.CW=null
_.db=_.cy=$
_.dx=null
_.dy=1
_.fx=_.fr=0
_.id=null
_.k3=_.k2=_.k1=$},
Kl:function Kl(d,e){this.a=d
this.b=e},
ky:function ky(d,e){this.a=d
this.b=e},
rY:function rY(d,e){this.a=d
this.b=e},
bGv:function bGv(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
cz6(){return new A.bjB(new Uint8Array(4096))},
bjB:function bjB(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
bGt:function bGt(){this.a=null
this.c=$},
cqB(d,e){var x=new Int32Array(4),w=new Int32Array(4),v=new Int8Array(4),u=new Int8Array(4),t=B.bK(8,null,!1,y.ak),s=B.bK(4,null,!1,y.Z)
return new A.bJN(d,e,new A.bJT(),new A.bJX(),new A.bJP(x,w),new A.bJZ(v,u),t,s,new Uint8Array(4))},
cDo(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
bJN:function bJN(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=$
_.d=null
_.e=$
_.f=f
_.r=g
_.w=h
_.x=i
_.z=_.y=$
_.ax=_.at=_.as=_.Q=null
_.ch=_.ay=$
_.cx=_.CW=null
_.cy=$
_.db=j
_.dy=k
_.fr=null
_.fy=_.fx=$
_.go=null
_.id=l
_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=_.k2=_.k1=$
_.R8=_.p4=null
_.x2=_.x1=_.to=_.ry=_.rx=_.RG=$
_.xr=null
_.y2=_.y1=0
_.bY=$
_.c_=null
_.b7=_.aD=$
_.bq=null
_.bt=$},
bK_:function bK_(){},
cDl(d){var x=new A.a7D(d)
x.b=254
x.c=0
x.d=-8
return x},
a7D:function a7D(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
eK(d,e,f){return D.c.l5(D.c.P(d+2*e+f+2,2),32)},
d18(d){var x,w=B.a([A.eK(J.v(d.a,d.d+-33),J.v(d.a,d.d+-32),J.v(d.a,d.d+-31)),A.eK(J.v(d.a,d.d+-32),J.v(d.a,d.d+-31),J.v(d.a,d.d+-30)),A.eK(J.v(d.a,d.d+-31),J.v(d.a,d.d+-30),J.v(d.a,d.d+-29)),A.eK(J.v(d.a,d.d+-30),J.v(d.a,d.d+-29),J.v(d.a,d.d+-28))],y.t)
for(x=0;x<4;++x)d.A2(x*32,4,w)},
d10(d){var x=J.v(d.a,d.d+-33),w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95),s=A.c9(d,null,0),r=s.Qo(),q=A.eK(x,w,v)
r.$flags&2&&B.B(r)
r[0]=16843009*q
s.d+=32
q=s.Qo()
r=A.eK(w,v,u)
q.$flags&2&&B.B(q)
q[0]=16843009*r
s.d+=32
r=s.Qo()
q=A.eK(v,u,t)
r.$flags&2&&B.B(r)
r[0]=16843009*q
s.d+=32
q=s.Qo()
r=A.eK(u,t,t)
q.$flags&2&&B.B(q)
q[0]=16843009*r},
d0Z(d){var x,w,v,u
for(x=4,w=0;w<4;++w)x+=J.v(d.a,d.d+(w-32))+J.v(d.a,d.d+(-1+w*32))
x=D.c.P(x,3)
for(w=0;w<4;++w){v=d.a
u=d.d+w*32
J.tn(v,u,u+4,x)}},
cqC(d,e){var x,w,v,u,t,s=255-J.v(d.a,d.d+-33)
for(x=0,w=0;w<e;++w){v=s+J.v(d.a,d.d+(x-1))
for(u=0;u<e;++u){t=$.pF()[v+J.v(d.a,d.d+(-32+u))]
J.bT(d.a,d.d+(x+u),t)}x+=32}},
d16(d){A.cqC(d,4)},
d17(d){A.cqC(d,8)},
d15(d){A.cqC(d,16)},
d14(d){var x,w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95),s=J.v(d.a,d.d+-33),r=J.v(d.a,d.d+-32),q=J.v(d.a,d.d+-31),p=J.v(d.a,d.d+-30),o=J.v(d.a,d.d+-29)
d.m(0,96,A.eK(v,u,t))
x=A.eK(w,v,u)
d.m(0,97,x)
d.m(0,64,x)
x=A.eK(s,w,v)
d.m(0,98,x)
d.m(0,65,x)
d.m(0,32,x)
x=A.eK(r,s,w)
d.m(0,99,x)
d.m(0,66,x)
d.m(0,33,x)
d.m(0,0,x)
x=A.eK(q,r,s)
d.m(0,67,x)
d.m(0,34,x)
d.m(0,1,x)
x=A.eK(p,q,r)
d.m(0,35,x)
d.m(0,2,x)
d.m(0,3,A.eK(o,p,q))},
d13(d){var x,w=J.v(d.a,d.d+-32),v=J.v(d.a,d.d+-31),u=J.v(d.a,d.d+-30),t=J.v(d.a,d.d+-29),s=J.v(d.a,d.d+-28),r=J.v(d.a,d.d+-27),q=J.v(d.a,d.d+-26),p=J.v(d.a,d.d+-25)
d.m(0,0,A.eK(w,v,u))
x=A.eK(v,u,t)
d.m(0,32,x)
d.m(0,1,x)
x=A.eK(u,t,s)
d.m(0,64,x)
d.m(0,33,x)
d.m(0,2,x)
x=A.eK(t,s,r)
d.m(0,96,x)
d.m(0,65,x)
d.m(0,34,x)
d.m(0,3,x)
x=A.eK(s,r,q)
d.m(0,97,x)
d.m(0,66,x)
d.m(0,35,x)
x=A.eK(r,q,p)
d.m(0,98,x)
d.m(0,67,x)
d.m(0,99,A.eK(q,p,p))},
d1a(d){var x=J.v(d.a,d.d+-1),w=J.v(d.a,d.d+31),v=J.v(d.a,d.d+63),u=J.v(d.a,d.d+-33),t=J.v(d.a,d.d+-32),s=J.v(d.a,d.d+-31),r=J.v(d.a,d.d+-30),q=J.v(d.a,d.d+-29),p=D.c.l5(D.c.P(u+t+1,1),32)
d.m(0,65,p)
d.m(0,0,p)
p=D.c.l5(D.c.P(t+s+1,1),32)
d.m(0,66,p)
d.m(0,1,p)
p=D.c.l5(D.c.P(s+r+1,1),32)
d.m(0,67,p)
d.m(0,2,p)
d.m(0,3,D.c.l5(D.c.P(r+q+1,1),32))
d.m(0,96,A.eK(v,w,x))
d.m(0,64,A.eK(w,x,u))
p=A.eK(x,u,t)
d.m(0,97,p)
d.m(0,32,p)
p=A.eK(u,t,s)
d.m(0,98,p)
d.m(0,33,p)
p=A.eK(t,s,r)
d.m(0,99,p)
d.m(0,34,p)
d.m(0,35,A.eK(s,r,q))},
d19(d){var x,w=J.v(d.a,d.d+-32),v=J.v(d.a,d.d+-31),u=J.v(d.a,d.d+-30),t=J.v(d.a,d.d+-29),s=J.v(d.a,d.d+-28),r=J.v(d.a,d.d+-27),q=J.v(d.a,d.d+-26),p=J.v(d.a,d.d+-25)
d.m(0,0,D.c.l5(D.c.P(w+v+1,1),32))
x=D.c.l5(D.c.P(v+u+1,1),32)
d.m(0,64,x)
d.m(0,1,x)
x=D.c.l5(D.c.P(u+t+1,1),32)
d.m(0,65,x)
d.m(0,2,x)
x=D.c.l5(D.c.P(t+s+1,1),32)
d.m(0,66,x)
d.m(0,3,x)
d.m(0,32,A.eK(w,v,u))
x=A.eK(v,u,t)
d.m(0,96,x)
d.m(0,33,x)
x=A.eK(u,t,s)
d.m(0,97,x)
d.m(0,34,x)
x=A.eK(t,s,r)
d.m(0,98,x)
d.m(0,35,x)
d.m(0,67,A.eK(s,r,q))
d.m(0,99,A.eK(r,q,p))},
d11(d){var x,w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95)
d.m(0,0,D.c.l5(D.c.P(w+v+1,1),32))
x=D.c.l5(D.c.P(v+u+1,1),32)
d.m(0,32,x)
d.m(0,2,x)
x=D.c.l5(D.c.P(u+t+1,1),32)
d.m(0,64,x)
d.m(0,34,x)
d.m(0,1,A.eK(w,v,u))
x=A.eK(v,u,t)
d.m(0,33,x)
d.m(0,3,x)
x=A.eK(u,t,t)
d.m(0,65,x)
d.m(0,35,x)
d.m(0,99,t)
d.m(0,98,t)
d.m(0,97,t)
d.m(0,96,t)
d.m(0,66,t)
d.m(0,67,t)},
d1_(d){var x=J.v(d.a,d.d+-1),w=J.v(d.a,d.d+31),v=J.v(d.a,d.d+63),u=J.v(d.a,d.d+95),t=J.v(d.a,d.d+-33),s=J.v(d.a,d.d+-32),r=J.v(d.a,d.d+-31),q=J.v(d.a,d.d+-30),p=D.c.l5(D.c.P(x+t+1,1),32)
d.m(0,34,p)
d.m(0,0,p)
p=D.c.l5(D.c.P(w+x+1,1),32)
d.m(0,66,p)
d.m(0,32,p)
p=D.c.l5(D.c.P(v+w+1,1),32)
d.m(0,98,p)
d.m(0,64,p)
d.m(0,96,D.c.l5(D.c.P(u+v+1,1),32))
d.m(0,3,A.eK(s,r,q))
d.m(0,2,A.eK(t,s,r))
p=A.eK(x,t,s)
d.m(0,35,p)
d.m(0,1,p)
p=A.eK(w,x,t)
d.m(0,67,p)
d.m(0,33,p)
p=A.eK(v,w,x)
d.m(0,99,p)
d.m(0,65,p)
d.m(0,97,A.eK(u,v,w))},
d1l(d){var x
for(x=0;x<16;++x)d.rw(x*32,16,d,-32)},
d1j(d){var x,w,v,u,t
for(x=0,w=16;w>0;--w){v=J.v(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.tn(u,t,t+16,v)
x+=32}},
bJR(d,e){var x,w,v
for(x=0;x<16;++x){w=e.a
v=e.d+x*32
J.tn(w,v,v+16,d)}},
d1b(d){var x,w
for(x=16,w=0;w<16;++w)x+=J.v(d.a,d.d+(-1+w*32))+J.v(d.a,d.d+(w-32))
A.bJR(D.c.P(x,5),d)},
d1d(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.v(d.a,d.d+(-1+w*32))
A.bJR(D.c.P(x,4),d)},
d1c(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.v(d.a,d.d+(w-32))
A.bJR(D.c.P(x,4),d)},
d1e(d){A.bJR(128,d)},
d1m(d){var x
for(x=0;x<8;++x)d.rw(x*32,8,d,-32)},
d1k(d){var x,w,v,u,t
for(x=0,w=0;w<8;++w){v=J.v(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.tn(u,t,t+8,v)
x+=32}},
bJS(d,e){var x,w,v
for(x=0;x<8;++x){w=e.a
v=e.d+x*32
J.tn(w,v,v+8,d)}},
d1f(d){var x,w
for(x=8,w=0;w<8;++w)x+=J.v(d.a,d.d+(w-32))+J.v(d.a,d.d+(-1+w*32))
A.bJS(D.c.P(x,4),d)},
d1g(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.v(d.a,d.d+(w-32))
A.bJS(D.c.P(x,3),d)},
d1h(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.v(d.a,d.d+(-1+w*32))
A.bJS(D.c.P(x,3),d)},
d1i(d){A.bJS(128,d)},
Ei(d,e,f,g,h){var x=e+f+g*32,w=J.v(d.a,d.d+x)+D.c.P(h,3)
if(!((w&-256)>>>0===0))w=w<0?0:255
d.m(0,x,w)},
bJQ(d,e,f,g,h){A.Ei(d,0,0,e,f+g)
A.Ei(d,0,1,e,f+h)
A.Ei(d,0,2,e,f-h)
A.Ei(d,0,3,e,f-g)},
d12(){var x,w,v,u
if(!$.cDm){for(x=-255;x<=255;++x){w=$.aVi()
v=255+x
u=x<0?-x:x
w.$flags&2&&B.B(w)
w[v]=u
u=$.cm4()
w=D.c.P(w[v],1)
u.$flags&2&&B.B(u)
u[v]=w}for(x=-1020;x<=1020;++x){w=$.cm5()
if(x<-128)v=-128
else v=x>127?127:x
w.$flags&2&&B.B(w)
w[1020+x]=v}for(x=-112;x<=112;++x){w=$.aVj()
if(x<-16)v=-16
else v=x>15?15:x
w.$flags&2&&B.B(w)
w[112+x]=v}for(x=-255;x<=510;++x){w=$.pF()
if(x<0)v=0
else v=x>255?255:x
w.$flags&2&&B.B(w)
w[255+x]=v}$.cDm=!0}},
bJO:function bJO(){},
d0Y(){var x,w=J.iV(3,y.D)
for(x=0;x<3;++x)w[x]=new Uint8Array(11)
return new A.a7C(w)},
d1B(){var x,w,v,u,t=new Uint8Array(3),s=J.iV(4,y.cm)
for(x=y.V,w=0;w<4;++w){v=J.iV(8,x)
for(u=0;u<8;++u)v[u]=A.d0Y()
s[w]=v}D.A.lW(t,0,3,255)
return new A.bJY(t,s)},
bJT:function bJT(){this.d=$},
bJX:function bJX(){this.b=null},
bJZ:function bJZ(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
a7C:function a7C(d){this.a=d},
bJY:function bJY(d,e){this.a=d
this.b=e},
bJP:function bJP(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
Kx:function Kx(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
aCH:function aCH(){this.b=this.a=0},
aCJ:function aCJ(d,e,f){this.a=d
this.b=e
this.c=f},
aCI:function aCI(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
aCK:function aCK(d,e,f){this.a=d
this.b=e
this.c=f},
cqD(d,e){var x,w=B.a([],y.A),v=B.a([],y.F),u=new Uint32Array(2),t=new A.aCF(d,u)
u=t.d=J.da(D.bq.gaj(u),0,null)
x=d.cq()
u.$flags&2&&B.B(u)
u[0]=x
x=d.cq()
u.$flags&2&&B.B(u)
u[1]=x
x=d.cq()
u.$flags&2&&B.B(u)
u[2]=x
x=d.cq()
u.$flags&2&&B.B(u)
u[3]=x
x=d.cq()
u.$flags&2&&B.B(u)
u[4]=x
x=d.cq()
u.$flags&2&&B.B(u)
u[5]=x
x=d.cq()
u.$flags&2&&B.B(u)
u[6]=x
x=d.cq()
u.$flags&2&&B.B(u)
u[7]=x
return new A.a7E(t,e,w,v)},
Ej(d,e){return D.c.P(d+D.c.ek(1,e)-1,e)},
a7E:function a7E(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=null
_.r=_.f=_.e=0
_.w=null
_.z=_.y=_.x=0
_.Q=null
_.as=0
_.at=f
_.ax=g
_.ay=0
_.ch=null
_.CW=$
_.db=_.cy=_.cx=null},
aqZ:function aqZ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=null
_.r=_.f=_.e=0
_.w=null
_.z=_.y=_.x=0
_.Q=null
_.as=0
_.at=f
_.ax=g
_.ay=0
_.ch=null
_.CW=$
_.db=_.cy=_.cx=null},
aCF:function aCF(d,e){var _=this
_.a=0
_.b=d
_.c=e
_.d=$},
bJU:function bJU(d,e){this.a=d
this.b=e},
bJV(d,e,f){var x=d[e]
d.$flags&2&&B.B(d)
d[e]=(((x&4278255360)>>>0)+((f&4278255360)>>>0)&4278255360|(x&16711935)+(f&16711935)&16711935)>>>0},
zw(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
Kz(d){if(d<0)return 0
if(d>255)return 255
return d},
bJW(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
d1n(d,e,f){return 4278190080},
d1o(d,e,f){return e},
d1t(d,e,f){return d[f]},
d1u(d,e,f){return d[f+1]},
d1v(d,e,f){return d[f-1]},
d1w(d,e,f){var x=d[f]
return A.zw(A.zw(e,d[f+1]),x)},
d1x(d,e,f){return A.zw(e,d[f-1])},
d1y(d,e,f){return A.zw(e,d[f])},
d1z(d,e,f){return A.zw(d[f-1],d[f])},
d1A(d,e,f){return A.zw(d[f],d[f+1])},
d1p(d,e,f){var x=d[f-1],w=d[f],v=d[f+1]
return A.zw(A.zw(e,x),A.zw(w,v))},
d1q(d,e,f){var x=d[f],w=d[f-1]
return A.bJW(x>>>24,e>>>24,w>>>24)+A.bJW(x>>>16&255,e>>>16&255,w>>>16&255)+A.bJW(x>>>8&255,e>>>8&255,w>>>8&255)+A.bJW(x&255,e&255,w&255)<=0?x:e},
d1r(d,e,f){var x=d[f],w=d[f-1]
return(A.Kz((e>>>24)+(x>>>24)-(w>>>24))<<24|A.Kz((e>>>16&255)+(x>>>16&255)-(w>>>16&255))<<16|A.Kz((e>>>8&255)+(x>>>8&255)-(w>>>8&255))<<8|A.Kz((e&255)+(x&255)-(w&255)))>>>0},
d1s(d,e,f){var x,w,v,u=d[f],t=d[f-1],s=A.zw(e,u)
u=s>>>24
x=s>>>16&255
w=s>>>8&255
v=s>>>0&255
return(A.Kz(u+D.c.b8(u-(t>>>24),2))<<24|A.Kz(x+D.c.b8(x-(t>>>16&255),2))<<16|A.Kz(w+D.c.b8(w-(t>>>8&255),2))<<8|A.Kz(v+D.c.b8(v-(t&255),2)))>>>0},
Ky:function Ky(d,e){this.a=d
this.b=e},
aCG:function aCG(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
bKK:function bKK(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
a7T:function a7T(){},
ar_:function ar_(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=$
_.r=1
_.x=_.w=$},
cy_(){var x=new Uint8Array(128),w=new Int16Array(128)
x=new A.aqi(x,w,new Int16Array(128))
x.a7x(0)
return x},
cTP(){var x,w=J.iV(5,y.x)
for(x=0;x<5;++x)w[x]=A.cy_()
return new A.a_h(w)},
aqi:function aqi(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$
_.f=_.e=0},
a_h:function a_h(d){this.a=d},
T_:function T_(d,e){this.a=d
this.b=e},
aD7:function aD7(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
ar0:function ar0(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
bKL:function bKL(){this.b=this.a=null},
cy2(d){return new A.a_E(d.a,d.b,D.A.lo(d.c,0))},
bgm:function bgm(d,e){this.a=d
this.b=e},
a_E:function a_E(d,e,f){this.a=d
this.b=e
this.c=f},
hN(d,e,f,g,h,i,j,k,l,m,n,o,p){var x,w=new A.BI(null,null,null,d,k,h,g,0)
w.gl0().push(w)
w.c=j
if(e!=null)w.e=A.Zr(e)
x=!1
if(m==null)if(p)x=w.gdu()===C.fi||w.gdu()===C.h2||w.gdu()===C.h3||w.gdu()===C.a7||w.gdu()===C.cd
w.akn(o,i,f,l,x?w.aY9(f,n,l):m)
return w},
aqu(d,e,f,g){var x,w,v,u=null,t=d.e
t=t==null?u:A.Zr(t)
x=d.c
x=x==null?u:A.cy2(x)
w=d.w
v=d.r
t=new A.BI(u,x,t,u,v,w,d.y,d.z)
t.aSS(d,e,f,g)
return t},
BH(d,e,f){var x,w,v,u,t=null,s=d.a
s=s==null?t:s.qV(0,f)
x=d.e
x=x==null?t:A.Zr(x)
w=d.c
w=w==null?t:A.cy2(w)
v=d.w
u=d.r
s=new A.BI(s,w,x,t,u,v,d.y,d.z)
s.aSR(d,e,f)
return s},
apo:function apo(d,e){this.a=d
this.b=e},
BI:function BI(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=null
_.c=e
_.d=null
_.e=f
_.f=g
_.r=h
_.w=i
_.x=$
_.y=j
_.z=k},
bh_:function bh_(d,e){this.a=d
this.b=e},
bgZ:function bgZ(){},
lT:function lT(){},
cUl(d,e,f){return new A.OS(new Uint16Array(d*e*f),d,e,f)},
OS:function OS(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
cUm(d,e,f){return new A.OT(new Float32Array(d*e*f),d,e,f)},
OT:function OT(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a_I:function a_I(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a_J:function a_J(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a_K:function a_K(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a_L:function a_L(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
OU:function OU(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
OV:function OV(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
OW:function OW(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
cUn(d,e,f){return new A.OX(new Uint32Array(d*e*f),d,e,f)},
OX:function OX(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
OY:function OY(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
cyh(d,e,f){return new A.OZ(new Uint8Array(d*e*f),null,d,e,f)},
OZ:function OZ(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
ar1:function ar1(d,e){this.a=d
this.b=e},
bqz:function bqz(){},
avu:function avu(d,e,f){this.c=d
this.a=e
this.b=f},
avv:function avv(d,e,f){this.c=d
this.a=e
this.b=f},
avw:function avw(d,e,f){this.c=d
this.a=e
this.b=f},
avx:function avx(d,e,f){this.c=d
this.a=e
this.b=f},
avy:function avy(d,e,f){this.c=d
this.a=e
this.b=f},
avz:function avz(d,e,f){this.c=d
this.a=e
this.b=f},
avA:function avA(d,e,f){this.c=d
this.a=e
this.b=f},
a2o:function a2o(d,e,f){this.c=d
this.a=e
this.b=f},
cA5(d){return new A.uh(new Uint8Array(B.bV(d.c)),d.a,d.b)},
uh:function uh(d,e,f){this.c=d
this.a=e
this.b=f},
cp1(d){return new A.If(-1,0,-d.c,d)},
If:function If(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cp2(d){return new A.Ig(-1,0,-d.c,d)},
Ig:function Ig(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cp3(d){return new A.Ih(-1,0,-d.c,d)},
Ih:function Ih(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cp4(d){return new A.Ii(-1,0,-d.c,d)},
Ii:function Ii(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cp5(d){return new A.Ij(-1,0,-d.c,d)},
Ij:function Ij(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cp6(d){return new A.Ik(-1,0,-d.c,d)},
Ik:function Ik(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ui(d,e,f,g,h){d.hm(0,e-1,f)
return new A.avN(d,e,e+g-1,f+h-1)},
avN:function avN(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g},
a2A(d){return new A.Il(-1,0,0,-1,0,d)},
Il:function Il(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cp7(d){return new A.Im(-1,0,-d.c,d)},
Im:function Im(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2B(d){return new A.In(-1,0,0,-2,0,d)},
In:function In(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cp8(d){return new A.Io(-1,0,-d.c,d)},
Io:function Io(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2C(d){return new A.Ip(-1,0,0,-(d.c<<2>>>0),d)},
Ip:function Ip(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bqQ(d){return new A.Iq(-1,0,-d.c,d)},
Iq:function Iq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fe:function fe(){},
dbs(d,e){switch(e.a){case 0:A.aUN(d)
break
case 1:A.dbw(d)
break
case 2:A.dbu(d)
break}return d},
dbw(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.gl0().length
for(x=y.g,w=0;w<h;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?i:t.a
if(r==null)r=0
q=s?i:t.b
if(q==null)q=0
p=D.c.b8(q,2)
t=d.a
if((t==null?i:t.geP())!=null)for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.ed(m,n,i)
if(l==null)l=new A.fe()
t=u.a
k=t==null?i:t.ed(m,o,i)
if(k==null)k=new A.fe()
j=l.ge7(l)
l.se7(0,k.ge7(k))
k.se7(0,j)}else for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.ed(m,n,i)
if(l==null)l=new A.fe()
t=u.a
k=t==null?i:t.ed(m,o,i)
if(k==null)k=new A.fe()
j=l.gaf(l)
l.saf(0,k.gaf(k))
k.saf(0,j)
j=l.gap()
l.sap(k.gap())
k.sap(j)
j=l.gau(l)
l.sau(0,k.gau(k))
k.sau(0,j)
j=l.gaG(l)
l.saG(0,k.gaG(k))
k.saG(0,j)}}return d},
aUN(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=d.gl0().length
for(x=y.g,w=0;w<g;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?h:t.a
if(r==null)r=0
q=s?h:t.b
if(q==null)q=0
p=D.c.b8(r,2)
t=d.a
if((t==null?h:t.geP())!=null)for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.ed(l,n,h)
if(k==null)k=new A.fe()
t=u.a
j=t==null?h:t.ed(m,n,h)
if(j==null)j=new A.fe()
i=k.ge7(k)
k.se7(0,j.ge7(j))
j.se7(0,i)}else for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.ed(l,n,h)
if(k==null)k=new A.fe()
t=u.a
j=t==null?h:t.ed(m,n,h)
if(j==null)j=new A.fe()
i=k.gaf(k)
k.saf(0,j.gaf(j))
j.saf(0,i)
i=k.gap()
k.sap(j.gap())
j.sap(i)
i=k.gau(k)
k.sau(0,j.gau(j))
j.sau(0,i)
i=k.gaG(k)
k.saG(0,j.gaG(j))
j.saG(0,i)}}return d},
dbu(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=d.gl0().length
for(x=y.g,w=0;w<f;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?g:t.a
if(r==null)r=0
q=s?g:t.b
if(q==null)q=0
p=D.c.b8(q,2)
if((s?g:t.geP())!=null)for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.ed(k,m,g)
if(j==null)j=new A.fe()
t=u.a
i=t==null?g:t.ed(l,o,g)
if(i==null)i=new A.fe()
h=j.ge7(j)
j.se7(0,i.ge7(i))
i.se7(0,h)}else for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.ed(k,m,g)
if(j==null)j=new A.fe()
t=u.a
i=t==null?g:t.ed(l,o,g)
if(i==null)i=new A.fe()
h=j.gaf(j)
j.saf(0,i.gaf(i))
i.saf(0,h)
h=j.gap()
j.sap(i.gap())
i.sap(h)
h=j.gau(j)
j.sau(0,i.gau(i))
i.sau(0,h)
h=j.gaG(j)
j.saG(0,i.gaG(i))
i.saG(0,h)}}return d},
bbl:function bbl(d,e){this.a=d
this.b=e},
c4(d){return new A.aqA(d)},
aqA:function aqA(d){this.a=d},
cV(d,e,f,g){var x=J.a2(d),w=x.gu(d)
x=f==null?x.gu(d):g+f
return new A.lU(d,g,Math.min(w,x),g,e)},
c9(d,e,f){var x=d.a,w=d.d,v=J.bz(x),u=e==null?d.c:d.d+f+e
return new A.lU(x,d.b,Math.min(v,u),w+f,d.e)},
lU:function lU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
boX:function boX(d){var _=this
_.a=$
_.b=10
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=d
_.ax=_.at=$},
qd(d,e){return new A.avf(d,new Uint8Array(e))},
avf:function avf(d,e){this.a=0
this.b=d
this.c=e},
buc:function buc(){},
nS:function nS(d,e){this.a=d
this.b=e},
bwN:function bwN(d,e){this.a=d
this.b=e},
bIl:function bIl(d,e,f){this.a=d
this.d=e
this.e=f},
czy(d){return new Int8Array(d)},
d0H(d){throw B.l(B.aT("Uint64List not supported on the web."))},
cUF(d,e,f){return J.cmm(d,e,f)},
cD6(d,e){return J.op(d,e,null)},
cT0(d){return J.aVw(d,0,null)},
cT1(d){return d.a8_(0,0,null)},
dbP(d){var x,w,v,u,t=d.gu(0)
for(x=1,w=0;t>0;){v=3800>t?t:3800
t-=v
for(;--v,v>=0;){u=d.b
u.toString
x+=u[d.c++]
w+=x}x=D.c.aq(x,65521)
w=D.c.aq(w,65521)}return(w<<16|x)>>>0},
xi(d,e){var x,w,v=J.a2(d),u=v.gu(d)
e^=4294967295
for(x=0;u>=8;){w=x+1
e=C.h7[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.h7[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.h7[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.h7[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.h7[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.h7[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.h7[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.h7[(e^v.i(d,w))&255]^e>>>8
u-=8}if(u>0)do{w=x+1
e=C.h7[(e^v.i(d,x))&255]^e>>>8
if(--u,u>0){x=w
continue}else break}while(!0)
return(e^4294967295)>>>0},
NB(d,e,f){var x=0,w=B.k(y.N),v,u,t,s,r
var $async$NB=B.f(function(g,h){if(g===1)return B.h(h,w)
while(true)switch(x){case 0:t="images/"+Date.now()+".jpg"
s=$.LW()
r=s.as
r===$&&B.b()
x=3
return B.c(r.bA("public-files").QF(t,d),$async$NB)
case 3:if(h.length===0)throw B.l(B.cT("Upload failed"))
u=r.bA("public-files").af_(t)
x=4
return B.c(s.bA("images").jR(0,B.y(["link",u,"occasion",e,"unit",f],y.N,y.cM)),$async$NB)
case 4:v=u
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$NB,w)},
cs5(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s,r,q
if(m==null)m=0
if(n==null)n=0
if(l==null)l=e.gd0(0)
if(k==null)k=e.gb2(0)
if(h==null)h=d.gd0(0)<e.gd0(0)?d.gd0(0):e.gd0(0)
if(g==null)g=d.gb2(0)<e.gb2(0)?d.gb2(0):e.gb2(0)
x=f===C.yf
if(!x&&d.grl())d=d.axS(d.gqb())
w=k/g
v=l/h
u=y.p
t=J.iV(g,u)
for(s=0;s<g;++s)t[s]=n+D.d.C(s*w)
r=J.iV(h,u)
for(q=0;q<h;++q)r[q]=m+D.d.C(q*v)
if(x)A.d5T(e,d,i,j,h,g,r,t,null,C.G8)
else A.d5v(e,d,i,j,h,g,r,t,f,!1,null,C.G8)
return d},
d5T(d,e,f,g,h,i,j,k,l,m){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.ed(t,s,x)
if(x==null)x=new A.fe()
e.AO(f+u,v,x)}},
d5v(d,e,f,g,h,i,j,k,l,m,n,o){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.ed(t,s,x)
if(x==null)x=new A.fe()
A.db6(e,f+u,v,x,l,!1,n,o)}},
db6(a4,a5,a6,a7,a8,a9,b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
if(!a4.aBr(a5,a6))return a4
if(a8===C.yf||a4.grl())if(a4.aBr(a5,a6)){a4.nV(a5,a6).iI(0,a7)
return a4}x=a7.giB()
w=a7.gil()
v=a7.giv()
u=a7.gu(a7)<4?1:a7.gfs()
if(u===0)return a4
t=a4.nV(a5,a6)
s=t.giB()
r=t.gil()
q=t.giv()
p=t.gfs()
switch(a8.a){case 0:return a4
case 1:break
case 2:x=Math.max(s,x)
w=Math.max(r,w)
v=Math.max(q,v)
break
case 3:x=1-(1-x)*(1-s)
w=1-(1-w)*(1-r)
v=1-(1-v)*(1-q)
break
case 4:o=u*p
n=1-p
m=1-u
l=x*n+s*m
k=w*n+r*m
j=v*n+q*m
m=D.d.b9(u,0.01,1)
n=u<0
i=n?0:1
h=D.d.b9(x/m*i,0,0.99)
i=D.d.b9(u,0.01,1)
m=n?0:1
g=D.d.b9(w/i*m,0,0.99)
m=D.d.b9(u,0.01,1)
n=n?0:1
f=D.d.b9(v/m*n,0,0.99)
n=s*u
m=r*u
i=q*u
e=o<x*p+n?0:1
d=o<w*p+m?0:1
a0=o<v*p+i?0:1
x=(o+l)*(1-e)+(n/(1-h)+l)*e
w=(o+k)*(1-d)+(m/(1-g)+k)*d
v=(o+j)*(1-a0)+(i/(1-f)+j)*a0
break
case 5:x=s+x
w=r+w
v=q+v
break
case 6:x=Math.min(s,x)
w=Math.min(r,w)
v=Math.min(q,v)
break
case 7:x=s*x
w=r*w
v=q*v
break
case 8:x=x!==0?1-(1-s)/x:0
w=w!==0?1-(1-r)/w:0
v=v!==0?1-(1-q)/v:0
break
case 9:n=1-p
m=1-u
i=x*n
a1=s*m
x=2*s<p?2*x*s+i+a1:u*p-2*(p-s)*(u-x)+i+a1
i=w*n
a1=r*m
w=2*r<p?2*w*r+i+a1:u*p-2*(p-r)*(u-w)+i+a1
n=v*n
m=q*m
v=2*q<p?2*v*q+n+m:u*p-2*(p-q)*(u-v)+n+m
break
case 10:n=p===0
if(n)x=0
else{m=s/p
x=s*(u*m+2*x*(1-m))+x*(1-p)+s*(1-u)}if(n)w=0
else{m=r/p
w=r*(u*m+2*w*(1-m))+w*(1-p)+r*(1-u)}if(n)v=0
else{n=q/p
v=q*(u*n+2*v*(1-n))+v*(1-p)+q*(1-u)}break
case 11:n=2*x
m=1-p
i=1-u
a1=x*m
a2=s*i
x=n<u?n*s+a1+a2:u*p-2*(p-s)*(u-x)+a1+a2
n=2*w
a1=w*m
a2=r*i
w=n<u?n*r+a1+a2:u*p-2*(p-r)*(u-w)+a1+a2
n=2*v
m=v*m
i=q*i
v=n<u?n*q+m+i:u*p-2*(p-q)*(u-v)+m+i
break
case 12:x=Math.abs(x-s)
w=Math.abs(w-r)
v=Math.abs(v-q)
break
case 13:x=s-x
w=r-w
v=q-v
break
case 14:x=x!==0?s/x:0
w=w!==0?r/w:0
v=v!==0?q/v:0
break}a3=1-u
t.siB(x*u+s*p*a3)
t.sil(w*u+r*p*a3)
t.siv(v*u+q*p*a3)
t.sfs(u+p*a3)
return a4},
dbi(d,e,f,g,h,i,j){var x,w=D.d.b9(Math.min(g,h),0,d.gd0(0)-1),v=D.d.b9(Math.min(i,j),0,d.gb2(0)-1),u=D.d.b9(Math.max(g,h),0,d.gd0(0)-1),t=D.d.b9(Math.max(i,j),0,d.gb2(0)-1),s=d.a.qo(0,w,v,u-w+1,t-v+1)
for(x=s.a;s.q();)x.iI(0,f)
return d},
cSJ(a4,a5,a6,a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=b0<16384,a3=a6>a8?a8:a6
for(x=1;x<=a3;)x=x<<1>>>0
x=x>>>1
w=x>>>1
v=B.a([0,0],y.t)
for(u=a4.$flags|0,t=x,x=w;x>=1;t=x,x=w){s=a5+a9*(a8-t)
r=a9*x
q=a9*t
p=a7*x
o=a7*t
for(n=(a6&x)>>>0!==0,m=a7*(a6-t),l=a5;l<=s;l+=q){k=l+m
for(j=l;j<=k;j+=o){i=j+p
h=j+r
g=h+p
if(a2){A.Zy(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.Zy(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.Zy(f,d,v)
a1=v[0]
u&2&&B.B(a4)
a4[j]=a1
a4[i]=v[1]
A.Zy(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}else{A.Zz(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.Zz(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.Zz(f,d,v)
a1=v[0]
u&2&&B.B(a4)
a4[j]=a1
a4[i]=v[1]
A.Zz(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}}if(n){h=j+r
if(a2){A.Zy(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&B.B(a4)
a4[h]=a1}else{A.Zz(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&B.B(a4)
a4[h]=a1}u&2&&B.B(a4)
a4[j]=f}}if((a8&x)>>>0!==0){k=l+m
for(j=l;j<=k;j+=o){i=j+p
if(a2){A.Zy(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&B.B(a4)
a4[i]=n}else{A.Zz(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&B.B(a4)
a4[i]=n}u&2&&B.B(a4)
a4[j]=f}}w=x>>>1}},
Zy(d,e,f){var x,w,v,u,t=$.ni()
t.$flags&2&&B.B(t)
t[0]=d
x=$.on()
w=x[0]
t[0]=e
v=x[0]
u=w+(v&1)+D.c.P(v,1)
f[0]=u
f[1]=u-v},
Zz(d,e,f){var x=d-D.c.P(e,1)&65535
f[1]=x
f[0]=e+x-32768&65535},
csb(d){var x,w,v,u,t,s,r,q,p,o,n=null
if(A.cyM().QJ(d))return new A.ar8()
x=new A.awM(A.cyy())
if(x.Ia(d))return x
w=new A.be_()
w.f=A.cV(d,!1,n,0)
w.a=new A.apy(B.a([],y.b))
if(w.amy())return w
v=new A.bKL()
if(v.Ia(d))return v
u=new A.bGt()
if(u.aqP(A.cV(d,!1,n,0))!=null)return u
if(A.cAM(d).c===943870035)return new A.bu2()
if(A.cSI(d))return new A.bag()
if(A.cmQ(A.cV(d,!1,n,0)))return new A.aiW(!1)
t=new A.bFN()
s=A.cV(d,!1,n,0)
r=t.a=new A.aBI(C.wR)
r.vn(0,s)
if(r.aBI())return t
q=new A.bgo()
r=A.cV(d,!1,n,0)
q.a=r
r=A.cy3(r)
q.b=r
if(r!=null)return q
p=new A.bu7()
if(p.ow(d)!=null)return p
o=new A.bt4(B.a([],y.T))
if(o.Ia(d))return o
return n},
cH_(d){var x=A.csb(d)
return x==null?null:x.nz(0,d,null)},
ddp(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if($.crt==null){x=$.crt=new Uint8Array(768)
for(w=-256;w<0;++w)x[256+w]=0
for(w=0;w<256;++w)x[256+w]=w
for(w=256;w<512;++w)x[256+w]=255}for(x=a6.$flags|0,w=0;w<64;++w){v=a4[w]
u=a3[w]
x&2&&B.B(a6)
a6[w]=v*u}for(t=0,w=0;w<8;++w,t+=8){v=1+t
u=a6[v]
if(u===0&&a6[2+t]===0&&a6[3+t]===0&&a6[4+t]===0&&a6[5+t]===0&&a6[6+t]===0&&a6[7+t]===0){v=D.c.P(5793*a6[t]+512,10)
s=(v&2147483647)-((v&2147483648)>>>0)
x&2&&B.B(a6)
a6[t]=s
a6[t+1]=s
a6[t+2]=s
a6[t+3]=s
a6[t+4]=s
a6[t+5]=s
a6[t+6]=s
a6[t+7]=s
continue}r=D.c.P(5793*a6[t]+128,8)
q=(r&2147483647)-((r&2147483648)>>>0)
r=4+t
p=D.c.P(5793*a6[r]+128,8)
o=(p&2147483647)-((p&2147483648)>>>0)
p=2+t
n=a6[p]
m=6+t
l=a6[m]
k=7+t
j=a6[k]
i=D.c.P(2896*(u-j)+128,8)
h=(i&2147483647)-((i&2147483648)>>>0)
j=D.c.P(2896*(u+j)+128,8)
g=(j&2147483647)-((j&2147483648)>>>0)
j=3+t
u=a6[j]<<4
f=(u&2147483647)-((u&2147483648)>>>0)
u=5+t
i=a6[u]<<4
e=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.P(q-o+1,1)
s=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.P(q+o+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.P(n*3784+l*1567+128,8)
i=(i&2147483647)-((i&2147483648)>>>0)
d=D.c.P(n*1567-l*3784+128,8)
n=(d&2147483647)-((d&2147483648)>>>0)
d=D.c.P(h-e+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.c.P(h+e+1,1)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.P(g+f+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.c.P(g-f+1,1)
f=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.c.P(q-i+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
i=D.c.P(q+i+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.P(s-n+1,1)
i=(i&2147483647)-((i&2147483648)>>>0)
a2=D.c.P(s+n+1,1)
o=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.c.P(h*2276+a0*3406+2048,12)
s=(a2&2147483647)-((a2&2147483648)>>>0)
a0=D.c.P(h*3406-a0*2276+2048,12)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.P(f*799+d*4017+2048,12)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
d=D.c.P(f*4017-d*799+2048,12)
f=(d&2147483647)-((d&2147483648)>>>0)
x&2&&B.B(a6)
a6[t]=q+s
a6[k]=q-s
a6[v]=o+a0
a6[m]=o-a0
a6[p]=i+f
a6[u]=i-f
a6[j]=a1+h
a6[r]=a1-h}for(w=0;w<8;++w){v=8+w
u=a6[v]
if(u===0&&a6[16+w]===0&&a6[24+w]===0&&a6[32+w]===0&&a6[40+w]===0&&a6[48+w]===0&&a6[56+w]===0){u=D.c.P(5793*a6[w]+8192,14)
s=(u&2147483647)-((u&2147483648)>>>0)
x&2&&B.B(a6)
a6[w]=s
a6[v]=s
a6[16+w]=s
a6[24+w]=s
a6[32+w]=s
a6[40+w]=s
a6[48+w]=s
a6[56+w]=s
continue}r=D.c.P(5793*a6[w]+2048,12)
q=(r&2147483647)-((r&2147483648)>>>0)
r=32+w
p=D.c.P(5793*a6[r]+2048,12)
o=(p&2147483647)-((p&2147483648)>>>0)
p=16+w
n=a6[p]
m=48+w
l=a6[m]
k=56+w
j=a6[k]
i=D.c.P(2896*(u-j)+2048,12)
h=(i&2147483647)-((i&2147483648)>>>0)
j=D.c.P(2896*(u+j)+2048,12)
g=(j&2147483647)-((j&2147483648)>>>0)
j=24+w
f=a6[j]
u=40+w
e=a6[u]
i=D.c.P(q-o+1,1)
s=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.P(q+o+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.P(n*3784+l*1567+2048,12)
i=(i&2147483647)-((i&2147483648)>>>0)
d=D.c.P(n*1567-l*3784+2048,12)
n=(d&2147483647)-((d&2147483648)>>>0)
d=D.c.P(h-e+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.c.P(h+e+1,1)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.P(g+f+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.c.P(g-f+1,1)
f=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.c.P(q-i+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
i=D.c.P(q+i+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.P(s-n+1,1)
i=(i&2147483647)-((i&2147483648)>>>0)
a2=D.c.P(s+n+1,1)
o=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.c.P(h*2276+a0*3406+2048,12)
s=(a2&2147483647)-((a2&2147483648)>>>0)
a0=D.c.P(h*3406-a0*2276+2048,12)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.P(f*799+d*4017+2048,12)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
d=D.c.P(f*4017-d*799+2048,12)
f=(d&2147483647)-((d&2147483648)>>>0)
x&2&&B.B(a6)
a6[w]=q+s
a6[k]=q-s
a6[v]=o+a0
a6[m]=o-a0
a6[p]=i+f
a6[u]=i-f
a6[j]=a1+h
a6[r]=a1-h}for(x=$.crt,v=a5.$flags|0,w=0;w<64;++w){x.toString
u=D.c.P(a6[w]+8,4)
u=x[384+((u&2147483647)-((u&2147483648)>>>0))]
v&2&&B.B(a5)
a5[w]=u}},
dbV(d9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=null,d7="ifd0",d8=d9.r
if(d8.i(0,d7).a.a4(0,274)){x=d8.i(0,d7).gih(0)
x.toString
w=x}else w=0
x=d9.d
v=x.e
v.toString
x=x.d
x.toString
u=w>=5&&w<=8
if(u)t=x
else t=v
if(u)s=v
else s=x
r=A.hN(d6,d6,C.a7,0,C.bk,s,d6,0,3,d6,C.a7,t,!1)
r.e=A.Zr(d8)
r.gwR().i(0,d7).sih(0,d6)
q=x-1
p=v-1
d8=d9.Q
switch(d8.length){case 1:o=d8[0]
n=o.e
m=o.f
l=o.r
d8=w===8
x=w===7
v=w===6
k=w===5
j=w===4
i=w===3
h=w===2
g=0
while(!0){f=d9.d.d
f.toString
if(!(g<f))break
e=n[D.c.hx(g,l)]
f=q-g
d=0
while(!0){a0=d9.d.e
a0.toString
if(!(d<a0))break
a1=e[D.c.hx(d,m)]
if(h){a0=r.a
if(a0!=null)a0.fe(p-d,g,a1,a1,a1)}else if(i){a0=r.a
if(a0!=null)a0.fe(p-d,f,a1,a1,a1)}else if(j){a0=r.a
if(a0!=null)a0.fe(d,f,a1,a1,a1)}else if(k){a0=r.a
if(a0!=null)a0.fe(g,d,a1,a1,a1)}else if(v){a0=r.a
if(a0!=null)a0.fe(f,d,a1,a1,a1)}else if(x){a0=r.a
if(a0!=null)a0.fe(f,p-d,a1,a1,a1)}else{a0=r.a
if(d8){if(a0!=null)a0.fe(g,p-d,a1,a1,a1)}else if(a0!=null)a0.fe(d,g,a1,a1,a1)}++d}++g}break
case 3:o=d8[0]
a2=d8[1]
a3=d8[2]
a4=o.e
a5=a2.e
a6=a3.e
m=o.f
l=o.r
a7=a2.f
a8=a2.r
a9=a3.f
b0=a3.r
d8=w===8
x=w===7
v=w===6
k=w===5
j=w===4
i=w===3
h=w===2
g=0
while(!0){f=d9.d.d
f.toString
if(!(g<f))break
b1=D.c.hx(g,l)
b2=D.c.hx(g,a8)
b3=D.c.hx(g,b0)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
f=q-g
d=0
while(!0){a0=d9.d.e
a0.toString
if(!(d<a0))break
b6=D.c.hx(d,m)
b7=D.c.hx(d,a7)
b8=D.c.hx(d,a9)
a1=e[b6]<<8>>>0
b9=b4[b7]-128
c0=b5[b8]-128
a0=D.c.P(a1+359*c0+128,8)
c1=D.c.b9((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.c.P(a1-88*b9-183*c0+128,8)
c2=D.c.b9((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.c.P(a1+454*b9+128,8)
c3=D.c.b9((a0&2147483647)-((a0&2147483648)>>>0),0,255)
if(h){a0=r.a
if(a0!=null)a0.fe(p-d,g,c1,c2,c3)}else if(i){a0=r.a
if(a0!=null)a0.fe(p-d,f,c1,c2,c3)}else if(j){a0=r.a
if(a0!=null)a0.fe(d,f,c1,c2,c3)}else if(k){a0=r.a
if(a0!=null)a0.fe(g,d,c1,c2,c3)}else if(v){a0=r.a
if(a0!=null)a0.fe(f,d,c1,c2,c3)}else if(x){a0=r.a
if(a0!=null)a0.fe(f,p-d,c1,c2,c3)}else{a0=r.a
if(d8){if(a0!=null)a0.fe(g,p-d,c1,c2,c3)}else if(a0!=null)a0.fe(d,g,c1,c2,c3)}++d}++g}break
case 4:x=d9.c
if(x==null)throw B.l(A.c4("Unsupported color mode (4 components)"))
x=x.d===0
o=d8[0]
a2=d8[1]
a3=d8[2]
c4=d8[3]
a4=o.e
a5=a2.e
a6=a3.e
c5=c4.e
m=o.f
l=o.r
a7=a2.f
a8=a2.r
a9=a3.f
b0=a3.r
c6=c4.f
c7=c4.r
d8=w===8
v=w===7
k=w===6
j=w===5
i=w===4
h=w===3
f=w===2
g=0
while(!0){a0=d9.d.d
a0.toString
if(!(g<a0))break
b1=D.c.hx(g,l)
b2=D.c.hx(g,a8)
b3=D.c.hx(g,b0)
c8=D.c.hx(g,c7)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
c9=c5[c8]
a0=q-g
d=0
while(!0){d0=d9.d.e
d0.toString
if(!(d<d0))break
b6=D.c.hx(d,m)
b7=D.c.hx(d,a7)
b8=D.c.hx(d,a9)
d1=D.c.hx(d,c6)
if(x){d2=e[b6]
d3=b4[b7]
a1=b5[b8]
d4=c9[d1]}else{a1=e[b6]
b9=b4[b7]
c0=b5[b8]
d4=c9[d1]
d0=c0-128
d2=255-D.c.b9(D.d.C(a1+1.402*d0),0,255)
d5=b9-128
d3=255-D.d.C(D.d.b9(a1-0.3441363*d5-0.71413636*d0,0,255))
a1=255-D.c.b9(D.d.C(a1+1.772*d5),0,255)}d0=D.c.P(d2*d4,8)
c1=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.c.P(d3*d4,8)
c2=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.c.P(a1*d4,8)
c3=(d0&2147483647)-((d0&2147483648)>>>0)
if(f){d0=r.a
if(d0!=null)d0.fe(p-d,g,c1,c2,c3)}else if(h){d0=r.a
if(d0!=null)d0.fe(p-d,a0,c1,c2,c3)}else if(i){d0=r.a
if(d0!=null)d0.fe(d,a0,c1,c2,c3)}else if(j){d0=r.a
if(d0!=null)d0.fe(g,d,c1,c2,c3)}else if(k){d0=r.a
if(d0!=null)d0.fe(a0,d,c1,c2,c3)}else if(v){d0=r.a
if(d0!=null)d0.fe(a0,p-d,c1,c2,c3)}else{d0=r.a
if(d8){if(d0!=null)d0.fe(g,p-d,c1,c2,c3)}else if(d0!=null)d0.fe(d,g,c1,c2,c3)}++d}++g}break
default:throw B.l(A.c4("Unsupported color mode"))}return r},
d1M(d,e,f,g,h,i){A.d1J(i,d,e,f,g,h,!0,i)},
d1N(d,e,f,g,h,i){A.d1K(i,d,e,f,g,h,!0,i)},
d1L(d,e,f,g,h,i){A.d1I(i,d,e,f,g,h,!0,i)},
SZ(d,e,f,g,h){var x,w,v
for(x=0;x<g;++x){w=J.v(d.a,d.d+x)
v=J.v(e.a,e.d+x)
J.bT(f.a,f.d+x,w+v)}},
d1J(d,e,f,g,h,i,j,k){var x,w,v=null,u=h*g,t=h+i,s=A.cV(d,!1,v,u),r=A.cV(d,!1,v,u),q=A.c9(r,v,0)
if(h===0){r.m(0,0,J.v(s.a,s.d))
A.SZ(A.c9(s,v,1),q,A.c9(r,v,1),e-1,!0)
q.d+=g
s.d+=g
r.d+=g
h=1}for(x=-g,w=e-1;h<t;){A.SZ(s,A.c9(q,v,x),r,1,!0)
A.SZ(A.c9(s,v,1),q,A.c9(r,v,1),w,!0);++h
q.d+=g
s.d+=g
r.d+=g}},
d1K(d,e,f,g,h,i,j,k){var x=null,w=h*g,v=h+i,u=A.cV(d,!1,x,w),t=A.cV(k,!1,x,w),s=A.c9(t,x,0)
if(h===0){t.m(0,0,J.v(u.a,u.d))
A.SZ(A.c9(u,x,1),s,A.c9(t,x,1),e-1,!0)
u.d+=g
t.d+=g
h=1}else s.d-=g
for(;h<v;){A.SZ(u,s,t,e,!0);++h
s.d+=g
u.d+=g
t.d+=g}},
d1I(d,e,f,g,h,i,j,k){var x,w,v,u,t,s=null,r=h*g,q=h+i,p=A.cV(d,!1,s,r),o=A.cV(k,!1,s,r),n=A.c9(o,s,0)
if(h===0){o.m(0,0,J.v(p.a,p.d))
A.SZ(A.c9(p,s,1),n,A.c9(o,s,1),e-1,!0)
n.d+=g
p.d+=g
o.d+=g
h=1}for(x=-g;h<q;){A.SZ(p,A.c9(n,s,x),o,1,!0)
for(w=1;w<e;++w){v=w-g
u=J.v(n.a,n.d+(w-1))+J.v(n.a,n.d+v)-J.v(n.a,n.d+(v-1))
if((u&4294967040)>>>0===0)t=u
else t=u<0?0:255
v=J.v(p.a,p.d+w)
J.bT(o.a,o.d+w,v+t)}++h
n.d+=g
p.d+=g
o.d+=g}},
d8L(d){var x="ifd0",w=A.BH(d,!1,!1)
if(!d.gwR().i(0,x).a.a4(0,274)||d.gwR().i(0,x).gih(0)===1)return w
w.e=A.Zr(d.gwR())
w.gwR().i(0,x).sih(0,null)
switch(d.gwR().i(0,x).gih(0)){case 2:return A.aUN(w)
case 3:return A.dbs(w,C.akJ)
case 4:return A.aUN(A.aUG(w,180))
case 5:return A.aUN(A.aUG(w,90))
case 6:return A.aUG(w,90)
case 7:return A.aUN(A.aUG(w,-90))
case 8:return A.aUG(w,-90)}return w},
d9u(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null
a1.grl()
if(a1.gwR().i(0,"ifd0").a.a4(0,274)&&a1.gwR().i(0,"ifd0").gih(0)!==1)a1=A.d8L(a1)
x=D.d.aZ(a2*(a1.gb2(0)/a1.gd0(0)))
if(a2<=0)a2=D.d.aZ(x*(a1.gd0(0)/a1.gb2(0)))
if(a2===a1.gd0(0)&&x===a1.gb2(0))return A.BH(a1,!1,!1)
w=new Int32Array(a2)
v=a1.gd0(0)/a2
for(u=0;u<a2;++u)w[u]=D.d.C(u*v)
t=new Int32Array(x)
s=a1.gb2(0)/x
for(r=0;r<x;++r)t[r]=D.d.C(r*s)
q=a1.gl0().length
for(p=y.g,o=a0,n=0;n<q;++n){m=a1.x
l=(m===$?a1.x=B.a([],p):m)[n]
k=A.aqu(l,x,!0,a2)
j=o==null
if(!j)o.nt(k)
if(j)o=k
j=l.a
i=j==null
h=i?a0:j.b
s=(h==null?0:h)/x
if((i?a0:j.geP())!=null)for(r=0;r<x;++r){g=D.d.C(r*s)
for(u=0;u<a2;++u){j=w[u]
i=l.a
if(i==null)j=a0
else{j=i.nV(j,g)
j=D.d.C(j.ge7(j))}if(j==null)j=0
i=k.a
if(i!=null)i.mC(u,r,j)}}else{f=l.kl(0,0)
for(r=0;r<x;++r)for(u=0;u<a2;++u){j=w[u]
i=t[r]
h=l.a
if(h!=null)h.ed(j,i,f)
j=f.gaf(f)
i=f.gap()
h=f.gau(f)
e=f.gaG(f)
d=k.a
if(d!=null)d.km(u,r,j,i,h,e)}}}o.toString
return o},
aUG(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=D.c.aq(a8,360)
a7.grl()
if(D.c.aq(a6,90)===0)switch(D.c.b8(a6,90)){case 1:return A.d80(a7)
case 2:return A.d7Z(a7)
case 3:return A.d8_(a7)
default:return A.BH(a7,!1,!1)}x=a6*3.141592653589793/180
w=Math.cos(x)
v=Math.sin(x)
u=a7.gd0(0)
t=a7.gd0(0)
s=a7.gb2(0)
r=a7.gb2(0)
q=0.5*a7.gd0(0)
p=0.5*a7.gb2(0)
s=Math.abs(u*w)+Math.abs(s*v)
o=0.5*s
r=Math.abs(t*v)+Math.abs(r*w)
n=0.5*r
m=a7.gl0().length
for(u=y.g,l=a5,k=0;k<m;++k){j=a7.x
i=(j===$?a7.x=B.a([],u):j)[k]
t=l==null
h=t?a5:l.Wx()
if(h==null){g=D.d.C(s)
h=A.aqu(a7,D.d.C(r),!0,g)}if(t)l=h
for(t=h.a,t=t.ga3(t);t.q();){f=t.gL(t)
e=f.gn8(f)
d=f.gnT(f)
g=e-o
a0=d-n
a1=q+g*w+a0*v
a2=p-g*v+a0*w
g=!1
if(a1>=0)if(a2>=0){a0=i.a
a3=a0==null
a4=a3?a5:a0.a
if(a1<(a4==null?0:a4)){g=a3?a5:a0.b
g=a2<(g==null?0:g)}}if(g)h.AO(e,d,i.aHX(a1,a2,C.ao0))}}l.toString
return l},
d80(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gl0(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.Q)(x),++u){t=x[u]
s=v==null
r=s?k:v.Wx()
if(r==null){q=t.a
p=q==null
o=p?k:q.b
if(o==null)o=0
q=p?k:q.a
r=A.aqu(t,q==null?0:q,!0,o)}if(s)v=r
s=t.a
s=s==null?k:s.b
n=(s==null?0:s)-1
m=0
while(!0){s=r.a
s=s==null?k:s.b
if(!(m<(s==null?0:s)))break
l=0
while(!0){s=r.a
s=s==null?k:s.a
if(!(l<(s==null?0:s)))break
s=t.a
s=s==null?k:s.ed(m,n-l,k)
r.AO(l,m,s==null?new A.fe():s);++l}++m}}v.toString
return v},
d7Z(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gl0(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.Q)(x),++u){t=x[u]
s=t.a
r=s==null
q=r?k:s.a
p=(q==null?0:q)-1
s=r?k:s.b
o=(s==null?0:s)-1
s=v==null
n=s?k:v.Wx()
if(n==null)n=A.BH(t,!0,!0)
if(s)v=n
m=0
while(!0){s=n.a
s=s==null?k:s.b
if(!(m<(s==null?0:s)))break
s=o-m
l=0
while(!0){r=n.a
r=r==null?k:r.a
if(!(l<(r==null?0:r)))break
r=t.a
r=r==null?k:r.ed(p-l,s,k)
n.AO(l,m,r==null?new A.fe():r);++l}++m}}v.toString
return v},
d8_(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gl0(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.Q)(x),++u){t=x[u]
s=d.a
s=s==null?k:s.a
r=(s==null?0:s)-1
s=v==null
q=s?k:v.Wx()
if(q==null){p=t.a
o=p==null
n=o?k:p.b
if(n==null)n=0
p=o?k:p.a
q=A.aqu(t,p==null?0:p,!0,n)}if(s)v=q
m=0
while(!0){s=q.a
s=s==null?k:s.b
if(!(m<(s==null?0:s)))break
s=r-m
l=0
while(!0){p=q.a
p=p==null?k:p.a
if(!(l<(p==null?0:p)))break
p=t.a
p=p==null?k:p.ed(s,l,k)
q.AO(l,m,p==null?new A.fe():p);++l}++m}}v.toString
return v},
cjO(d){var x
d=(d&-d)>>>0
x=d!==0?31:32
if((d&65535)!==0)x-=16
if((d&16711935)!==0)x-=8
if((d&252645135)!==0)x-=4
if((d&858993459)!==0)x-=2
return(d&1431655765)!==0?x-1:x},
deo(d){$.ctE().m(0,0,d)
return $.cLl().i(0,0)},
cHT(d,e,f,g){return(D.c.b9(d,0,255)|D.c.b9(e,0,255)<<8|D.c.b9(f,0,255)<<16|D.c.b9(g,0,255)<<24)>>>0},
v9(d,e,f){var x,w,v,u,t,s=e.gu(e),r=e.gdu(),q=d.geP(),p=q==null?null:q.gdu()
if(p==null)p=d.gdu()
x=d.gu(d)
if(s===1){w=d.gu(d)>2?d.gju():d.i(0,0)
e.m(0,0,A.aUE(B.hT(d.i(0,0))?D.d.fX(w):w,p,r))}else if(s<=x)for(v=0;v<s;++v)e.m(0,v,A.aUE(d.i(0,v),p,r))
else if(x===2){u=A.aUE(d.i(0,0),p,r)
if(s===3){e.m(0,0,u)
e.m(0,1,u)
e.m(0,2,u)}else{f=A.aUE(d.i(0,1),p,r)
e.m(0,0,u)
e.m(0,1,u)
e.m(0,2,u)
e.m(0,3,f)}}else{for(v=0;v<x;++v)e.m(0,v,A.aUE(d.i(0,v),p,r))
t=x===1?e.i(0,0):0
for(v=x;v<s;++v)e.m(0,v,v===3?f:t)}return e},
pz(d,e,f,g,h){var x,w,v=d.geP(),u=v==null?null:v.gdu()
if(u==null)u=d.gdu()
v=h==null
x=v?null:h.gdu()
f=x==null?f:x
if(f==null)f=d.gdu()
x=v?null:h.gu(h)
g=x==null?g:x
if(g==null)g=d.gu(d)
if(e==null)e=0
if(f===u&&g===d.gu(d)){if(v)return d.dQ(0)
h.iI(0,d)
return h}switch(f.a){case 3:if(v)w=new A.xL(new Uint8Array(g))
else w=h
return A.v9(d,w,e)
case 0:return A.v9(d,v?new A.N0(g,0):h,e)
case 1:return A.v9(d,v?new A.N2(g,0):h,e)
case 2:if(v){v=g<3?1:2
w=new A.N4(g,new Uint8Array(v))}else w=h
return A.v9(d,w,e)
case 4:if(v)w=new A.N1(new Uint16Array(g))
else w=h
return A.v9(d,w,e)
case 5:if(v)w=new A.N3(new Uint32Array(g))
else w=h
return A.v9(d,w,e)
case 6:if(v)w=new A.MY(new Int8Array(g))
else w=h
return A.v9(d,w,e)
case 7:if(v)w=new A.MW(new Int16Array(g))
else w=h
return A.v9(d,w,e)
case 8:if(v)w=new A.MX(new Int32Array(g))
else w=h
return A.v9(d,w,e)
case 9:if(v)w=new A.MT(new Uint16Array(g))
else w=h
return A.v9(d,w,e)
case 10:if(v)w=new A.MU(new Float32Array(g))
else w=h
return A.v9(d,w,e)
case 11:if(v)w=new A.MV(new Float64Array(g))
else w=h
return A.v9(d,w,e)}},
jb(d){return 0.299*d.gaf(d)+0.587*d.gap()+0.114*d.gau(d)},
cGG(d,e,f,g,h){var x=1-g/255
h[0]=D.d.aZ(255*(1-d/255)*x)
h[1]=D.d.aZ(255*(1-e/255)*x)
h[2]=D.d.aZ(255*(1-f/255)*x)},
fQ(d){var x,w,v,u=$.ctD()
u.$flags&2&&B.B(u)
u[0]=d
x=$.cLk()[0]
if(d===0)return x>>>16
if($.hM==null)A.iD()
w=$.cxj.cm()[x>>>23&511]
if(w!==0){v=x&8388607
return w+(v+4095+(v>>>13&1)>>>13)}return A.cSZ(x)},
cSZ(d){var x,w,v=d>>>16&32768,u=(d>>>23&255)-112,t=d&8388607
if(u<=0){if(u<-10)return v
t|=8388608
x=14-u
return(v|D.c.nY(t+(D.c.eR(1,x-1)-1)+(D.c.h2(t,x)&1),x))>>>0}else if(u===143)if(t===0)return v|31744
else{t=t>>>13
w=t===0?1:0
return v|t|w|31744}else{t=t+4095+(t>>>13&1)
if((t&8388608)!==0){++u
t=0}if(u>30)return v|31744
return(v|u<<10|t>>>13)>>>0}},
iD(){var x,w,v,u,t=$.hM
if(t!=null)return t
x=new Uint32Array(65536)
$.hM=J.aVw(D.bq.gaj(x),0,null)
t=new Uint16Array(512)
$.cxj.b=t
for(w=0;w<256;++w){v=(w&255)-112
if(v<=0||v>=30){t[w]=0
t[(w|256)>>>0]=0}else{u=v<<10>>>0
t[w]=u
t[(w|256)>>>0]=(u|32768)>>>0}}for(w=0;w<65536;++w)x[w]=A.cT_(w)
t=$.hM
t.toString
return t},
cT_(d){var x,w=d>>>15&1,v=d>>>10&31,u=d&1023
if(v===0)if(u===0)return w<<31>>>0
else{for(;(u&1024)===0;){u=u<<1;--v}++v
u&=4294966271}else if(v===31){x=w<<31
if(u===0)return(x|2139095040)>>>0
else return(x|u<<13|2139095040)>>>0}return(w<<31|v+112<<23|u<<13)>>>0}},C
J=c[1]
B=c[0]
D=c[2]
E=c[165]
A=a.updateHolder(c[56],A)
C=c[361]
A.a_B.prototype={
a2h(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.length
for(x=0;x<k;++x){w=d[x]
if(w>l.b)l.b=w
if(w<l.c)l.c=w}w=l.b
v=D.c.eR(1,w)
u=new Uint32Array(v)
l.a=u
for(t=1,s=0,r=2;t<=w;){for(q=t<<16,x=0;x<k;++x)if(d[x]===t){for(p=s,o=0,n=0;n<t;++n){o=(o<<1|p&1)>>>0
p=p>>>1}for(m=(q|x)>>>0,n=o;n<v;n+=r)u[n]=m;++s}++t
s=s<<1>>>0
r=r<<1>>>0}}}
A.bLw.prototype={}
A.cht.prototype={
bvE(d,e,f,g){var x,w,v,u,t,s=null
while(!0){x=d.c
w=d.d
w===$&&B.b()
if(!(x<w))break
w=d.b
w.toString
v=d.c=x+1
u=w[x]
d.c=v+1
t=w[v]
if((u&8)!==8)return!1
if(D.c.aq(u*256+t,31)!==0)return!1
if((t>>>5&1)!==0){d.a1()
return!1}if(s!=null)e.m2(s)
x=new A.a_B()
x.a2h(C.aCP)
w=new A.a_B()
w.a2h(C.asV)
v=new A.avh(new Uint8Array(32768),C.ou)
new A.bhd(d,v,x,w).b9p()
s=J.da(D.A.gaj(v.c),v.c.byteOffset,v.b)
d.a1()}if(s!=null)e.m2(s)
return!0}}
A.bLx.prototype={}
A.chu.prototype={
azr(d,e){var x=A.czZ(C.m2,32768)
this.bxe(A.bhv(d,C.ou,null,null),x,e,!1,null)
return x.aex()},
bxe(d,e,f,g,h){var x,w,v,u,t,s,r,q,p
e.a=C.m2
x=(D.c.b9(15,0,15)-8<<4|8)>>>0
e.b0(x)
w=x*256
for(v=0;u=(v|0)>>>0,D.c.aq(w+u,31)!==0;)++v
e.b0(u)
t=d.c
s=A.dbP(d)
d.c=t
u=f==null?6:f
A.cRm(d,u,e,15)
u=s&255
r=s>>>24&255
q=s>>>16&255
p=s>>>8&255
if(e.a===C.m2){e.b0(r)
e.b0(q)
e.b0(p)
e.b0(u)}else{e.b0(u)
e.b0(p)
e.b0(q)
e.b0(r)}}}
A.Tr.prototype={
J(){return"_DeflateFlushMode."+this.b}}
A.b5L.prototype={
aZl(d,e){var x,w,v,u,t=this,s=!0
if(e>=9)if(e<=15)s=d>9
if(s)return!1
x=t.b1G(d)
if(x==null)return!1
$.vz.b=x
s=new Uint16Array(1146)
t.p1=s
w=new Uint16Array(122)
t.p2=w
v=new Uint16Array(78)
t.p3=v
t.as=e
u=t.Q=D.c.ek(1,e)
t.at=u-1
t.db=15
t.cy=32768
t.dx=32767
t.dy=5
t.ax=new Uint8Array(u*2)
t.ch=new Uint16Array(u)
t.CW=new Uint16Array(32768)
t.y1=16384
t.f=new Uint8Array(65536)
t.r=65536
t.bY=16384
t.xr=49152
t.k4=d
t.w=t.x=t.ok=0
t.c=113
t.d=0
u=t.p4
u.a=s
u.c=$.cL3()
u=t.R8
u.a=w
u.c=$.cL2()
u=t.RG
u.a=v
u.c=$.cL1()
t.E=t.bt=0
t.bq=8
t.aof()
t.baC()
return!0},
aZk(d){var x,w,v,u,t=this,s=t.x
s===$&&B.b()
if(s!==0)t.a3m()
s=t.a
x=s.c
s=s.d
s===$&&B.b()
w=!0
if(x>=s){s=t.k2
s===$&&B.b()
if(s===0)s=d!==C.xa&&t.c!==666
else s=w}else s=w
if(s){switch($.vz.cm().e){case 0:v=t.aZo(d)
break
case 1:v=t.aZm(d)
break
case 2:v=t.aZn(d)
break
default:v=-1
break}s=v===2
if(s||v===3)t.c=666
if(v===0||s)return 0
if(v===1){if(d===C.baG){t.lr(2,3)
t.G1(256,C.rA)
t.awi()
s=t.bq
s===$&&B.b()
x=t.E
x===$&&B.b()
if(1+s+10-x<9){t.lr(2,3)
t.G1(256,C.rA)
t.awi()}t.bq=7}else{t.atF(0,0,!1)
if(d===C.baH){s=t.cy
s===$&&B.b()
x=t.CW
u=0
for(;u<s;++u){x===$&&B.b()
x.$flags&2&&B.B(x)
x[u]=0}}}t.a3m()}}if(d!==C.ob)return 0
return 1},
baC(){var x,w,v=this,u=v.Q
u===$&&B.b()
v.ay=2*u
u=v.CW
u===$&&B.b()
x=v.cy
x===$&&B.b();--x
u.$flags&2&&B.B(u)
u[x]=0
for(w=0;w<x;++w)u[w]=0
v.k2=v.fr=v.id=0
v.fx=v.k3=2
v.cx=v.go=0},
aof(){var x,w,v,u=this
for(x=u.p1,w=0;w<286;++w){x===$&&B.b()
x.$flags&2&&B.B(x)
x[w*2]=0}for(v=u.p2,w=0;w<30;++w){v===$&&B.b()
v.$flags&2&&B.B(v)
v[w*2]=0}for(v=u.p3,w=0;w<19;++w){v===$&&B.b()
v.$flags&2&&B.B(v)
v[w*2]=0}x===$&&B.b()
x.$flags&2&&B.B(x)
x[512]=1
u.y2=u.b7=u.c_=u.aD=0},
a5K(d,e){var x,w,v=this.ry,u=v[e],t=e<<1>>>0,s=v.$flags|0,r=this.x2
while(!0){x=this.to
x===$&&B.b()
if(!(t<=x))break
if(t<x&&A.cwb(d,v[t+1],v[t],r))++t
if(A.cwb(d,u,v[t],r))break
x=v[t]
s&2&&B.B(v)
v[e]=x
w=t<<1>>>0
e=t
t=w}s&2&&B.B(v)
v[e]=u},
arD(d,e){var x,w,v,u,t,s,r,q,p,o,n=d[1]
if(n===0){x=138
w=3}else{x=7
w=4}d.$flags&2&&B.B(d)
d[(e+1)*2+1]=65535
for(v=this.p3,u=0,t=-1,s=0;u<=e;n=r){++u
r=d[u*2+1];++s
if(s<x&&n===r)continue
else{q=3
if(s<w){v===$&&B.b()
p=n*2
o=v[p]
v.$flags&2&&B.B(v)
v[p]=o+s}else if(n!==0){if(n!==t){v===$&&B.b()
p=n*2
o=v[p]
v.$flags&2&&B.B(v)
v[p]=o+1}v===$&&B.b()
p=v[32]
v.$flags&2&&B.B(v)
v[32]=p+1}else if(s<=10){v===$&&B.b()
p=v[34]
v.$flags&2&&B.B(v)
v[34]=p+1}else{v===$&&B.b()
p=v[36]
v.$flags&2&&B.B(v)
v[36]=p+1}}if(r===0){w=q
x=138}else if(n===r){w=q
x=6}else{x=7
w=4}t=n
s=0}},
aVj(){var x,w,v=this,u=v.p1
u===$&&B.b()
x=v.p4.b
x===$&&B.b()
v.arD(u,x)
x=v.p2
x===$&&B.b()
u=v.R8.b
u===$&&B.b()
v.arD(x,u)
v.RG.a2I(v)
for(u=v.p3,w=18;w>=3;--w){u===$&&B.b()
if(u[C.Bi[w]*2+1]!==0)break}u=v.c_
u===$&&B.b()
v.c_=u+(3*(w+1)+5+5+4)
return w},
bjZ(d,e,f){var x,w,v,u=this
u.lr(d-257,5)
x=e-1
u.lr(x,5)
u.lr(f-4,4)
for(w=0;w<f;++w){v=u.p3
v===$&&B.b()
u.lr(v[C.Bi[w]*2+1],3)}v=u.p1
v===$&&B.b()
u.asb(v,d-1)
v=u.p2
v===$&&B.b()
u.asb(v,x)},
asb(d,e){var x,w,v,u,t,s,r,q,p,o,n=this,m=d[1]
if(m===0){x=138
w=3}else{x=7
w=4}for(v=0,u=-1,t=0;v<=e;m=s){++v
s=d[v*2+1];++t
if(t<x&&m===s)continue
else{r=3
if(t<w){q=m*2
p=q+1
do{o=n.p3
o===$&&B.b()
n.lr(o[q]&65535,o[p]&65535)}while(--t,t!==0)}else if(m!==0){if(m!==u){q=n.p3
q===$&&B.b()
p=m*2
n.lr(q[p]&65535,q[p+1]&65535);--t}q=n.p3
q===$&&B.b()
n.lr(q[32]&65535,q[33]&65535)
n.lr(t-3,2)}else{q=n.p3
if(t<=10){q===$&&B.b()
n.lr(q[34]&65535,q[35]&65535)
n.lr(t-3,3)}else{q===$&&B.b()
n.lr(q[36]&65535,q[37]&65535)
n.lr(t-11,7)}}}if(s===0){w=r
x=138}else if(m===s){w=r
x=6}else{x=7
w=4}u=m
t=0}},
bh5(d,e,f){var x,w,v=this
if(f===0)return
x=v.f
x===$&&B.b()
w=v.x
w===$&&B.b()
D.A.e3(x,w,w+f,d,e)
v.x=v.x+f},
qC(d){var x,w=this.f
w===$&&B.b()
x=this.x
x===$&&B.b()
this.x=x+1
w.$flags&2&&B.B(w)
w[x]=d},
G1(d,e){var x=d*2
this.lr(e[x]&65535,e[x+1]&65535)},
lr(d,e){var x,w=this,v=w.E
v===$&&B.b()
x=w.bt
if(v>16-e){x===$&&B.b()
v=w.bt=(x|D.c.eR(d,v)&65535)>>>0
w.qC(v)
w.qC(A.py(v,8))
w.bt=A.py(d,16-w.E)
w.E=w.E+(e-16)}else{x===$&&B.b()
w.bt=(x|D.c.eR(d,v)&65535)>>>0
w.E=v+e}},
Mv(d,e){var x,w,v,u,t,s=this,r=s.f
r===$&&B.b()
x=s.bY
x===$&&B.b()
w=s.y2
w===$&&B.b()
v=A.py(d,8)
r.$flags&2&&B.B(r)
r[x+w*2]=v
v=s.f
w=s.bY
x=s.y2
v.$flags&2&&B.B(v)
v[w+x*2+1]=d
w=s.xr
w===$&&B.b()
v[w+x]=e
s.y2=x+1
if(d===0){r=s.p1
r===$&&B.b()
x=e*2
w=r[x]
r.$flags&2&&B.B(r)
r[x]=w+1}else{r=s.b7
r===$&&B.b()
s.b7=r+1
r=s.p1
r===$&&B.b()
x=(C.M9[e]+256+1)*2
w=r[x]
r.$flags&2&&B.B(r)
r[x]=w+1
w=s.p2
w===$&&B.b()
x=A.cE0(d-1)*2
r=w[x]
w.$flags&2&&B.B(w)
w[x]=r+1}r=s.y2
if((r&8191)===0){x=s.k4
x===$&&B.b()
x=x>2}else x=!1
if(x){u=r*8
r=s.id
r===$&&B.b()
x=s.fr
x===$&&B.b()
for(w=s.p2,t=0;t<30;++t){w===$&&B.b()
u+=w[t*2]*(5+C.rl[t])}u=A.py(u,3)
w=s.b7
w===$&&B.b()
v=s.y2
if(w<v/2&&u<(r-x)/2)return!0
r=v}x=s.y1
x===$&&B.b()
return r===x-1},
ak3(d,e){var x,w,v,u,t,s,r=this,q=r.y2
q===$&&B.b()
if(q!==0){x=0
do{q=r.f
q===$&&B.b()
w=r.bY
w===$&&B.b()
w+=x*2
v=q[w]<<8&65280|q[w+1]&255
w=r.xr
w===$&&B.b()
u=q[w+x]&255;++x
if(v===0)r.G1(u,d)
else{t=C.M9[u]
r.G1(t+256+1,d)
s=C.Kh[t]
if(s!==0)r.lr(u-C.apK[t],s);--v
t=A.cE0(v)
r.G1(t,e)
s=C.rl[t]
if(s!==0)r.lr(v-C.asE[t],s)}}while(x<r.y2)}r.G1(256,d)
r.bq=d[513]},
aJS(){var x,w,v,u
for(x=this.p1,w=0,v=0;w<7;){x===$&&B.b()
v+=x[w*2];++w}for(u=0;w<128;){x===$&&B.b()
u+=x[w*2];++w}for(;w<256;){x===$&&B.b()
v+=x[w*2];++w}this.y=v>A.py(u,2)?0:1},
awi(){var x=this,w=x.E
w===$&&B.b()
if(w===16){w=x.bt
w===$&&B.b()
x.qC(w)
x.qC(A.py(w,8))
x.E=x.bt=0}else if(w>=8){w=x.bt
w===$&&B.b()
x.qC(w)
x.bt=A.py(x.bt,8)
x.E=x.E-8}},
aiR(){var x=this,w=x.E
w===$&&B.b()
if(w>8){w=x.bt
w===$&&B.b()
x.qC(w)
x.qC(A.py(w,8))}else if(w>0){w=x.bt
w===$&&B.b()
x.qC(w)}x.E=x.bt=0},
yw(d){var x,w,v,u,t,s=this,r=s.fr
r===$&&B.b()
if(r>=0)x=r
else x=-1
w=s.id
w===$&&B.b()
r=w-r
w=s.k4
w===$&&B.b()
if(w>0){if(s.y===2)s.aJS()
s.p4.a2I(s)
s.R8.a2I(s)
v=s.aVj()
w=s.c_
w===$&&B.b()
u=A.py(w+3+7,3)
w=s.aD
w===$&&B.b()
t=A.py(w+3+7,3)
if(t<=u)u=t}else{t=r+5
u=t
v=0}if(r+4<=u&&x!==-1)s.atF(x,r,d)
else if(t===u){s.lr(2+(d?1:0),3)
s.ak3(C.rA,C.MS)}else{s.lr(4+(d?1:0),3)
r=s.p4.b
r===$&&B.b()
x=s.R8.b
x===$&&B.b()
s.bjZ(r+1,x+1,v+1)
x=s.p1
x===$&&B.b()
r=s.p2
r===$&&B.b()
s.ak3(x,r)}s.aof()
if(d)s.aiR()
s.fr=s.id
s.a3m()},
aZo(d){var x,w,v,u,t,s=this,r=s.r
r===$&&B.b()
x=r-5
x=65535>x?x:65535
for(r=d===C.xa;!0;){w=s.k2
w===$&&B.b()
if(w<=1){s.a3J()
w=s.k2
v=w===0
if(v&&r)return 0
if(v)break}v=s.id
v===$&&B.b()
w=s.id=v+w
s.k2=0
v=s.fr
v===$&&B.b()
u=v+x
if(w>=u){s.k2=w-u
s.id=u
s.yw(!1)}w=s.id
v=s.fr
t=s.Q
t===$&&B.b()
if(w-v>=t-262)s.yw(!1)}r=d===C.ob
s.yw(r)
return r?3:1},
atF(d,e,f){var x,w=this
w.lr(f?1:0,3)
w.aiR()
w.bq=8
w.qC(e)
w.qC(A.py(e,8))
x=(~e>>>0)+65536&65535
w.qC(x)
w.qC(A.py(x,8))
x=w.ax
x===$&&B.b()
w.bh5(x,d,e)},
a3J(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.a
do{x=n.ay
x===$&&B.b()
w=n.k2
w===$&&B.b()
v=n.id
v===$&&B.b()
u=x-w-v
if(u===0&&v===0&&w===0){x=n.Q
x===$&&B.b()
u=x}else{x=n.Q
x===$&&B.b()
if(v>=x+x-262){w=n.ax
w===$&&B.b()
D.A.e3(w,0,x,w,x)
x=n.k1
t=n.Q
n.k1=x-t
n.id=n.id-t
x=n.fr
x===$&&B.b()
n.fr=x-t
x=n.cy
x===$&&B.b()
w=n.CW
w===$&&B.b()
v=w.$flags|0
s=x
r=s
do{--s
q=w[s]&65535
x=q>=t?q-t:0
v&2&&B.B(w)
w[s]=x}while(--r,r!==0)
x=n.ch
x===$&&B.b()
w=x.$flags|0
s=t
r=s
do{--s
q=x[s]&65535
v=q>=t?q-t:0
w&2&&B.B(x)
x[s]=v}while(--r,r!==0)
u+=t}}x=m.c
w=m.d
w===$&&B.b()
if(x>=w)return
x=n.ax
x===$&&B.b()
r=n.bhe(x,n.id+n.k2,u)
x=n.k2=n.k2+r
if(x>=3){w=n.ax
v=n.id
p=w[v]&255
n.cx=p
o=n.dy
o===$&&B.b()
o=D.c.eR(p,o)
v=w[v+1]
w=n.dx
w===$&&B.b()
n.cx=((o^v&255)&w)>>>0}}while(x<262&&!(m.c>=m.d))},
aZm(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
for(x=d===C.xa,w=$.vz.a,v=0;!0;){u=m.k2
u===$&&B.b()
if(u<262){m.a3J()
u=m.k2
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=m.cx
u===$&&B.b()
t=m.dy
t===$&&B.b()
t=D.c.eR(u,t)
u=m.ax
u===$&&B.b()
s=m.id
s===$&&B.b()
u=u[s+2]
r=m.dx
r===$&&B.b()
r=m.cx=((t^u&255)&r)>>>0
u=m.CW
u===$&&B.b()
t=u[r]
v=t&65535
q=m.ch
q===$&&B.b()
p=m.at
p===$&&B.b()
q.$flags&2&&B.B(q)
q[(s&p)>>>0]=t
u.$flags&2&&B.B(u)
u[r]=s}if(v!==0){u=m.id
u===$&&B.b()
t=m.Q
t===$&&B.b()
t=(u-v&65535)<=t-262
u=t}else u=!1
if(u){u=m.ok
u===$&&B.b()
if(u!==2)m.fx=m.ap_(v)}u=m.fx
u===$&&B.b()
t=m.id
if(u>=3){t===$&&B.b()
o=m.Mv(t-m.k1,u-3)
u=m.k2
t=m.fx
u-=t
m.k2=u
s=$.vz.b
if(s===$.vz)B.a6(B.w2(w))
if(t<=s.b&&u>=3){u=m.fx=t-1
do{t=m.id=m.id+1
s=m.cx
s===$&&B.b()
r=m.dy
r===$&&B.b()
r=D.c.eR(s,r)
s=m.ax
s===$&&B.b()
s=s[t+2]
q=m.dx
q===$&&B.b()
q=m.cx=((r^s&255)&q)>>>0
s=m.CW
s===$&&B.b()
r=s[q]
v=r&65535
p=m.ch
p===$&&B.b()
n=m.at
n===$&&B.b()
p.$flags&2&&B.B(p)
p[(t&n)>>>0]=r
s.$flags&2&&B.B(s)
s[q]=t}while(u=m.fx=u-1,u!==0)
m.id=t+1}else{u=m.id=m.id+t
m.fx=0
t=m.ax
t===$&&B.b()
s=t[u]&255
m.cx=s
r=m.dy
r===$&&B.b()
r=D.c.eR(s,r)
u=t[u+1]
t=m.dx
t===$&&B.b()
m.cx=((r^u&255)&t)>>>0}}else{u=m.ax
u===$&&B.b()
t===$&&B.b()
o=m.Mv(0,u[t]&255)
m.k2=m.k2-1
m.id=m.id+1}if(o)m.yw(!1)}x=d===C.ob
m.yw(x)
return x?3:1},
aZn(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
for(x=d===C.xa,w=$.vz.a,v=0;!0;){u=l.k2
u===$&&B.b()
if(u<262){l.a3J()
u=l.k2
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=l.cx
u===$&&B.b()
t=l.dy
t===$&&B.b()
t=D.c.eR(u,t)
u=l.ax
u===$&&B.b()
s=l.id
s===$&&B.b()
u=u[s+2]
r=l.dx
r===$&&B.b()
r=l.cx=((t^u&255)&r)>>>0
u=l.CW
u===$&&B.b()
t=u[r]
v=t&65535
q=l.ch
q===$&&B.b()
p=l.at
p===$&&B.b()
q.$flags&2&&B.B(q)
q[(s&p)>>>0]=t
u.$flags&2&&B.B(u)
u[r]=s}u=l.fx
u===$&&B.b()
l.k3=u
l.fy=l.k1
l.fx=2
t=!1
if(v!==0){s=$.vz.b
if(s===$.vz)B.a6(B.w2(w))
if(u<s.b){u=l.id
u===$&&B.b()
t=l.Q
t===$&&B.b()
t=(u-v&65535)<=t-262
u=t}else u=t}else u=t
t=2
if(u){u=l.ok
u===$&&B.b()
if(u!==2){u=l.ap_(v)
l.fx=u}else u=t
s=!1
if(u<=5)if(l.ok!==1){if(u===3){s=l.id
s===$&&B.b()
s=s-l.k1>4096}}else s=!0
if(s){l.fx=2
u=t}}else u=t
t=l.k3
if(t>=3&&u<=t){u=l.id
u===$&&B.b()
o=u+l.k2-3
n=l.Mv(u-1-l.fy,t-3)
t=l.k2
u=l.k3
l.k2=t-(u-1)
u=l.k3=u-2
do{t=l.id=l.id+1
if(t<=o){s=l.cx
s===$&&B.b()
r=l.dy
r===$&&B.b()
r=D.c.eR(s,r)
s=l.ax
s===$&&B.b()
s=s[t+2]
q=l.dx
q===$&&B.b()
q=l.cx=((r^s&255)&q)>>>0
s=l.CW
s===$&&B.b()
r=s[q]
v=r&65535
p=l.ch
p===$&&B.b()
m=l.at
m===$&&B.b()
p.$flags&2&&B.B(p)
p[(t&m)>>>0]=r
s.$flags&2&&B.B(s)
s[q]=t}}while(u=l.k3=u-1,u!==0)
l.go=0
l.fx=2
l.id=t+1
if(n)l.yw(!1)}else{u=l.go
u===$&&B.b()
if(u!==0){u=l.ax
u===$&&B.b()
t=l.id
t===$&&B.b()
if(l.Mv(0,u[t-1]&255))l.yw(!1)
l.id=l.id+1
l.k2=l.k2-1}else{l.go=1
u=l.id
u===$&&B.b()
l.id=u+1
l.k2=l.k2-1}}}x=l.go
x===$&&B.b()
if(x!==0){x=l.ax
x===$&&B.b()
w=l.id
w===$&&B.b()
l.Mv(0,x[w-1]&255)
l.go=0}x=d===C.ob
l.yw(x)
return x?3:1},
ap_(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=$.vz.cm().d,h=j.id
h===$&&B.b()
x=j.k3
x===$&&B.b()
w=j.Q
w===$&&B.b()
w-=262
v=h>w?h-w:0
u=$.vz.cm().c
w=j.at
w===$&&B.b()
t=j.id+258
s=j.ax
s===$&&B.b()
r=h+x
q=s[r-1]
p=s[r]
if(j.k3>=$.vz.cm().a)i=i>>>2
s=j.k2
s===$&&B.b()
if(u>s)u=s
o=t-258
n=x
m=h
do{c$0:{h=j.ax
x=d+n
s=!0
if(h[x]===p)if(h[x-1]===q)if(h[d]===h[m]){l=d+1
x=h[l]!==h[m+1]}else{x=s
l=d}else{x=s
l=d}else{x=s
l=d}if(x)break c$0
m+=2;++l
do{++m;++l
x=!1
if(h[m]===h[l]){++m;++l
if(h[m]===h[l]){++m;++l
if(h[m]===h[l]){++m;++l
if(h[m]===h[l]){++m;++l
if(h[m]===h[l]){++m;++l
if(h[m]===h[l]){++m;++l
if(h[m]===h[l]){++m;++l
x=h[m]===h[l]&&m<t}}}}}}}}while(x)
k=258-(t-m)
if(k>n){j.k1=d
if(k>=u){n=k
break}h=j.ax
x=o+k
q=h[x-1]
p=h[x]
n=k}m=o}h=j.ch
h===$&&B.b()
d=h[d&w]&65535
if(d>v){--i
h=i!==0}else h=!1}while(h)
h=j.k2
if(n<=h)return n
return h},
bhe(d,e,f){var x,w,v,u,t,s,r=this
if(f!==0){x=r.a
w=x.c
x=x.d
x===$&&B.b()
x=w>=x}else x=!0
if(x)return 0
v=r.a.jb(f)
u=v.gu(0)
if(u===0)return 0
t=v.hK()
s=t.length
if(u>s)u=s
D.A.ib(d,e,e+u,t)
r.e+=u
r.d=A.xi(t,r.d)
return u},
a3m(){var x,w=this,v=w.x
v===$&&B.b()
x=w.f
x===$&&B.b()
w.b.aGd(x,v)
x=w.w
x===$&&B.b()
w.w=x+v
v=w.x-v
w.x=v
if(v===0)w.w=0},
b1G(d){switch(d){case 0:return new A.t9(0,0,0,0,0)
case 1:return new A.t9(4,4,8,4,1)
case 2:return new A.t9(4,5,16,8,1)
case 3:return new A.t9(4,6,32,32,1)
case 4:return new A.t9(4,4,16,16,2)
case 5:return new A.t9(8,16,32,32,2)
case 6:return new A.t9(8,16,128,128,2)
case 7:return new A.t9(8,32,128,256,2)
case 8:return new A.t9(32,128,258,1024,2)
case 9:return new A.t9(32,258,258,4096,2)}return null}}
A.t9.prototype={}
A.bZ_.prototype={
b1p(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a
d===$&&B.b()
x=e.c
x===$&&B.b()
w=x.a
v=x.b
u=x.c
t=x.e
for(x=a0.rx,s=x.$flags|0,r=0;r<=15;++r){s&2&&B.B(x)
x[r]=0}q=a0.ry
p=a0.x1
p===$&&B.b()
o=q[p]
d.$flags&2&&B.B(d)
d[o*2+1]=0
for(n=p+1,p=w!=null,m=0;n<573;++n){l=q[n]
o=l*2
k=o+1
r=d[d[k]*2+1]+1
if(r>t){++m
r=t}d[k]=r
j=e.b
j===$&&B.b()
if(l>j)continue
j=x[r]
s&2&&B.B(x)
x[r]=j+1
i=l>=u?v[l-u]:0
h=d[o]
o=a0.c_
o===$&&B.b()
a0.c_=o+h*(r+i)
if(p){o=a0.aD
o===$&&B.b()
a0.aD=o+h*(w[k]+i)}}if(m===0)return
r=t-1
do{for(g=r;p=x[g],p===0;)--g
s&2&&B.B(x)
x[g]=p-1
p=g+1
x[p]=x[p]+2
x[t]=x[t]-1
m-=2}while(m>0)
for(r=t;r!==0;--r){l=x[r]
for(;l!==0;){--n
f=q[n]
s=e.b
s===$&&B.b()
if(f>s)continue
s=f*2
p=s+1
o=d[p]
if(o!==r){k=a0.c_
k===$&&B.b()
a0.c_=k+(r-o)*d[s]
d[p]=r}--l}}},
a2I(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
g===$&&B.b()
x=h.c
x===$&&B.b()
w=x.a
v=x.d
d.to=0
d.x1=573
for(x=g.$flags|0,u=d.ry,t=u.$flags|0,s=d.x2,r=s.$flags|0,q=0,p=-1;q<v;++q){o=q*2
if(g[o]!==0){o=++d.to
t&2&&B.B(u)
u[o]=q
r&2&&B.B(s)
s[q]=0
p=q}else{x&2&&B.B(g)
g[o+1]=0}}for(o=w!=null;n=d.to,n<2;){++n
d.to=n
if(p<2){++p
m=p}else m=0
t&2&&B.B(u)
u[n]=m
n=m*2
x&2&&B.B(g)
g[n]=1
r&2&&B.B(s)
s[m]=0
l=d.c_
l===$&&B.b()
d.c_=l-1
if(o){l=d.aD
l===$&&B.b()
d.aD=l-w[n+1]}}h.b=p
for(q=D.c.b8(n,2);q>=1;--q)d.a5K(g,q)
m=v
do{q=u[1]
o=u[d.to--]
t&2&&B.B(u)
u[1]=o
d.a5K(g,1)
k=u[1]
o=--d.x1
u[o]=q;--o
d.x1=o
u[o]=k
o=q*2
n=g[o]
l=k*2
j=g[l]
x&2&&B.B(g)
g[m*2]=n+j
j=s[q]
n=s[k]
if(j>n)n=j
r&2&&B.B(s)
s[m]=n+1
g[l+1]=m
g[o+1]=m
i=m+1
u[1]=m
d.a5K(g,1)
if(d.to>=2){m=i
continue}else break}while(!0)
u[--d.x1]=u[1]
h.b1p(d)
A.d35(g,p,d.rx)}}
A.cbj.prototype={}
A.bhd.prototype={
guq(){var x=this.a
if(x==null)return x
x.d===$&&B.b()
return x},
b9p(){var x,w,v=this
v.e=v.d=0
if(v.guq()==null)return
while(!0){x=v.guq()
w=x.c
x=x.d
x===$&&B.b()
if(!(w<x))break
if(!v.bf_())return}},
bf_(){var x,w,v,u=this,t=u.guq()
if(t!=null){x=t.c
w=t.d
w===$&&B.b()
w=x>=w
x=w}else x=!0
if(x)return!1
v=u.qD(3)
switch(D.c.P(v,1)){case 0:if(u.bfj()===-1)return!1
break
case 1:if(u.akz(u.r,u.w)===-1)return!1
break
case 2:if(u.bf3()===-1)return!1
break
default:return!1}return(v&1)===0},
qD(d){var x,w,v,u,t=this
if(d===0)return 0
for(;x=t.e,x<d;){x=t.guq()
w=x.c
x=x.d
x===$&&B.b()
if(w>=x)return-1
x=t.guq()
w=x.b
w.toString
v=w[x.c++]
x=t.d
w=t.e
t.d=(x|D.c.eR(v,w))>>>0
t.e=w+8}w=t.d
u=D.c.ek(1,d)
t.d=D.c.hx(w,d)
t.e=x-d
return(w&u-1)>>>0},
a5P(d){var x,w,v,u,t,s,r=this,q=d.a
q===$&&B.b()
x=d.b
for(;w=r.e,w<x;){w=r.guq()
v=w.c
w=w.d
w===$&&B.b()
if(v>=w)return-1
w=r.guq()
v=w.b
v.toString
u=v[w.c++]
w=r.d
v=r.e
r.d=(w|D.c.eR(u,v))>>>0
r.e=v+8}v=r.d
t=q[(v&D.c.eR(1,x)-1)>>>0]
s=t>>>16
r.d=D.c.hx(v,s)
r.e=w-s
return t&65535},
bfj(){var x,w,v=this
v.e=v.d=0
x=v.qD(16)
w=v.qD(16)
if(x!==0&&x!==(w^65535)>>>0)return-1
if(x>v.guq().gu(0))return-1
v.c.bKN(v.guq().jb(x))
return 0},
bf3(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.qD(5)
if(m===-1)return-1
m+=257
if(m>288)return-1
x=n.qD(5)
if(x===-1)return-1;++x
if(x>32)return-1
w=n.qD(4)
if(w===-1)return-1
w+=4
if(w>19)return-1
v=new Uint8Array(19)
for(u=0;u<w;++u){t=n.qD(3)
if(t===-1)return-1
v[C.Bi[u]]=t}s=A.cof(v)
r=m+x
q=new Uint8Array(r)
p=J.da(D.A.gaj(q),0,m)
o=J.da(D.A.gaj(q),m,x)
if(n.aYt(r,s,q)===-1)return-1
return n.akz(A.cof(p),A.cof(o))},
akz(d,e){var x,w,v,u,t,s,r,q,p=this
for(x=p.c;!0;){w=p.a5P(d)
if(w<0||w>285)return-1
if(w===256)break
if(w<256){x.b0(w&255)
continue}v=w-257
u=C.aBu[v]+p.qD(C.aD2[v])
t=p.a5P(e)
if(t<0||t>29)return-1
s=C.aBB[t]+p.qD(C.rl[t])
for(r=-s;u>s;){x.m2(x.jg(r))
u-=s}if(u===s)x.m2(x.jg(r))
else x.m2(x.agG(r,u-s))}for(;x=p.e,x>=8;){p.e=x-8
x=p.guq()
r=--x.c
q=x.d
q===$&&B.b()
x.c=D.c.b9(r,0,q)}return 0},
aYt(d,e,f){var x,w,v,u,t,s,r,q,p=this
for(x=f.$flags|0,w=0,v=0;v<d;){u=p.a5P(e)
if(u===-1)return-1
t=0
switch(u){case 16:s=p.qD(2)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.B(f)
f[v]=w}break
case 17:s=p.qD(3)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.B(f)
f[v]=0}w=t
break
case 18:s=p.qD(7)
if(s===-1)return-1
s+=11
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.B(f)
f[v]=0}w=t
break
default:if(u<0||u>15)return-1
q=v+1
x&2&&B.B(f)
f[v]=u
v=q
w=u
break}}return 0}}
A.bLv.prototype={
Cv(d){var x=A.czZ(C.ou,32768)
C.acE.bvE(A.bhv(d,C.m2,null,null),x,!1,!1)
return x.aex()}}
A.aj6.prototype={
J(){return"ByteOrder."+this.b}}
A.bhu.prototype={
gu(d){var x=this.b
return x==null?0:x.length-this.c},
i(d,e){return this.b[this.c+e]},
aME(d,e){var x=this.b
if(x==null)return A.bhv(B.a([],y.t),C.ou,null,null)
return A.bhv(x,this.a,d,e)},
cq(){var x=this.b
x.toString
return x[this.c++]},
hK(){var x,w,v,u,t=this
if(t.b==null)return new Uint8Array(0)
x=t.gu(0)
w=t.c
v=t.b
u=v.length
if(w+x>u)x=u-w
return J.da(D.A.gaj(v),t.b.byteOffset+t.c,x)}}
A.bhw.prototype={
a1(){var x=this,w=x.cq(),v=x.cq(),u=x.cq(),t=x.cq()
if(x.a===C.m2)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
jb(d){var x=this,w=x.aME(d,x.c)
x.c=x.c+w.gu(0)
return w}}
A.avh.prototype={
aex(){return J.da(D.A.gaj(this.c),this.c.byteOffset,this.b)},
b0(d){var x,w,v=this
if(v.b===v.c.length)v.beA()
x=v.c
w=v.b++
x.$flags&2&&B.B(x)
x[w]=d},
aGd(d,e){var x,w,v,u,t=this
if(e==null)e=d.length
for(;x=t.b,w=x+e,v=t.c,u=v.length,w>u;)t.a5s(w-u)
D.A.ib(v,x,w,d)
t.b+=e},
m2(d){return this.aGd(d,null)},
bKN(d){var x,w,v,u,t,s,r=this
while(!0){x=r.b
w=d.b
v=w==null
u=v?0:w.length-d.c
t=r.c
s=t.length
if(!(x+u>s))break
r.a5s(x+(v?0:w.length-d.c)-s)}if(!v){w=d.gu(0)
v=d.b
v.toString
D.A.e3(t,x,x+w,v,d.c)}r.b=r.b+d.gu(0)},
agG(d,e){var x=this
if(d<0)d=x.b+d
if(e==null)e=x.b
else if(e<0)e=x.b+e
return J.da(D.A.gaj(x.c),x.c.byteOffset+d,e-d)},
jg(d){return this.agG(d,null)},
a5s(d){var x=d!=null?d>32768?d:32768:32768,w=this.c,v=w.length,u=new Uint8Array((v+x)*2)
D.A.ib(u,0,v,w)
this.c=u},
beA(){return this.a5s(null)},
gu(d){return this.b}}
A.bq7.prototype={}
A.b_O.prototype={
J(){return"Channel."+this.b}}
A.hr.prototype={
q(){var x=this.b
return++this.a<x.gu(x)},
gL(d){return this.b.i(0,this.a)},
$ibq:1}
A.MT.prototype={
dQ(d){return new A.MT(new Uint16Array(B.bV(this.a)))},
gdu(){return C.hJ},
gu(d){return this.a.length},
geP(){return null},
i(d,e){var x,w=this.a
if(e<w.length){w=w[e]
x=$.hM
w=(x!=null?x:A.iD())[w]}else w=0
return w},
m(d,e,f){var x,w=this.a
if(e<w.length){x=A.fQ(f)
w.$flags&2&&B.B(w)
w[e]=x}},
ge7(d){return this.gaf(0)},
gaf(d){var x,w=this.a
if(!D.dN.gU(w)){w=w[0]
x=$.hM
w=(x!=null?x:A.iD())[w]}else w=0
return w},
saf(d,e){var x,w=this.a
if(!D.dN.gU(w)){x=A.fQ(e)
w.$flags&2&&B.B(w)
w[0]=x}},
gap(){var x,w=this.a
if(w.length>1){w=w[1]
x=$.hM
w=(x!=null?x:A.iD())[w]}else w=0
return w},
sap(d){var x,w=this.a
if(w.length>1){x=A.fQ(d)
w.$flags&2&&B.B(w)
w[1]=x}},
gau(d){var x,w=this.a
if(w.length>2){w=w[2]
x=$.hM
w=(x!=null?x:A.iD())[w]}else w=0
return w},
sau(d,e){var x,w=this.a
if(w.length>2){x=A.fQ(e)
w.$flags&2&&B.B(w)
w[2]=x}},
gaG(d){var x,w=this.a
if(w.length>3){w=w[3]
x=$.hM
w=(x!=null?x:A.iD())[w]}else w=0
return w},
gfs(){return this.gaG(0)/1},
gju(){return A.jb(this)},
iI(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaG(e)
w=v.a
if(w.length>3){x=A.fQ(x)
w.$flags&2&&B.B(w)
w[3]=x}},
ga3(d){return new A.hr(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aK(B.H(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
$idz:1}
A.MU.prototype={
dQ(d){return new A.MU(new Float32Array(B.bV(this.a)))},
gdu(){return C.j7},
gu(d){return this.a.length},
geP(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x=this.a
if(e<x.length){x.$flags&2&&B.B(x)
x[e]=f}},
ge7(d){var x=this.a
return!D.eW.gU(x)?x[0]:0},
gaf(d){var x=this.a
return!D.eW.gU(x)?x[0]:0},
saf(d,e){var x=this.a
if(!D.eW.gU(x)){x.$flags&2&&B.B(x)
x[0]=e}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x=this.a
if(x.length>1){x.$flags&2&&B.B(x)
x[1]=d}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x=this.a
if(x.length>2){x.$flags&2&&B.B(x)
x[2]=e}},
gaG(d){var x=this.a
return x.length>3?x[3]:1},
gfs(){return this.gaG(0)/1},
gju(){return A.jb(this)},
iI(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaG(e)
w=v.a
if(w.length>3){w.$flags&2&&B.B(w)
w[3]=x}},
ga3(d){return new A.hr(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aK(B.H(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
$idz:1}
A.MV.prototype={
dQ(d){return new A.MV(new Float64Array(B.bV(this.a)))},
gdu(){return C.kD},
gu(d){return this.a.length},
geP(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x=this.a
if(e<x.length){x.$flags&2&&B.B(x)
x[e]=f}},
ge7(d){var x=this.a
return!D.e8.gU(x)?x[0]:0},
gaf(d){var x=this.a
return!D.e8.gU(x)?x[0]:0},
saf(d,e){var x=this.a
if(!D.e8.gU(x)){x.$flags&2&&B.B(x)
x[0]=e}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x=this.a
if(x.length>1){x.$flags&2&&B.B(x)
x[1]=d}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x=this.a
if(x.length>2){x.$flags&2&&B.B(x)
x[2]=e}},
gaG(d){var x=this.a
return x.length>3?x[3]:1},
gfs(){return this.gaG(0)/1},
gju(){return A.jb(this)},
iI(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaG(e)
w=v.a
if(w.length>3){w.$flags&2&&B.B(w)
w[3]=x}},
ga3(d){return new A.hr(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aK(B.H(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
$idz:1}
A.MW.prototype={
dQ(d){return new A.MW(new Int16Array(B.bV(this.a)))},
gdu(){return C.kF},
gu(d){return this.a.length},
geP(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.B(w)
w[e]=x}},
ge7(d){var x=this.a
return!D.jx.gU(x)?x[0]:0},
gaf(d){var x=this.a
return!D.jx.gU(x)?x[0]:0},
saf(d,e){var x,w=this.a
if(!D.jx.gU(w)){x=D.d.C(e)
w.$flags&2&&B.B(w)
w[0]=x}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.B(w)
w[1]=x}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.B(w)
w[2]=x}},
gaG(d){var x=this.a
return x.length>3?x[3]:0},
gfs(){return this.gaG(0)/32767},
gju(){return A.jb(this)},
iI(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaG(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.B(w)
w[3]=x}},
ga3(d){return new A.hr(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aK(B.H(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
$idz:1}
A.MX.prototype={
dQ(d){return new A.MX(new Int32Array(B.bV(this.a)))},
gdu(){return C.kG},
gu(d){return this.a.length},
geP(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.B(w)
w[e]=x}},
ge7(d){var x=this.a
return!D.cl.gU(x)?x[0]:0},
gaf(d){var x=this.a
return!D.cl.gU(x)?x[0]:0},
saf(d,e){var x=this.a
if(!D.cl.gU(x)){B.bg(e)
x.$flags&2&&B.B(x)
x[0]=e}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.B(w)
w[1]=x}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.B(w)
w[2]=x}},
gaG(d){var x=this.a
return x.length>3?x[3]:0},
gfs(){return this.gaG(0)/2147483647},
gju(){return A.jb(this)},
iI(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaG(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.B(w)
w[3]=x}},
ga3(d){return new A.hr(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aK(B.H(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
$idz:1}
A.MY.prototype={
dQ(d){return new A.MY(new Int8Array(B.bV(this.a)))},
gdu(){return C.kE},
gu(d){return this.a.length},
geP(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.B(w)
w[e]=x}},
ge7(d){var x=this.a
return!D.jy.gU(x)?x[0]:0},
gaf(d){var x=this.a
return!D.jy.gU(x)?x[0]:0},
saf(d,e){var x,w=this.a
if(!D.jy.gU(w)){x=D.d.C(e)
w.$flags&2&&B.B(w)
w[0]=x}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.B(w)
w[1]=x}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.B(w)
w[2]=x}},
gaG(d){var x=this.a
return x.length>3?x[3]:0},
gfs(){return this.gaG(0)/127},
gju(){return A.jb(this)},
iI(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaG(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.B(w)
w[3]=x}},
ga3(d){return new A.hr(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aK(B.H(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
$idz:1}
A.N0.prototype={
dQ(d){var x=this.b
x===$&&B.b()
return new A.N0(this.a,x)},
gdu(){return C.fi},
geP(){return null},
Bf(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.h2(x,7-d)&1}else x=0
return x},
yp(d,e){var x
if(d>=this.a)return
d=7-d
x=this.b
x===$&&B.b()
this.b=e!==0?(x|D.c.eR(1,d))>>>0:(x&~(D.c.eR(1,d)&255))>>>0},
i(d,e){return this.Bf(e)},
m(d,e,f){return this.yp(e,f)},
ge7(d){return this.Bf(0)},
gaf(d){return this.Bf(0)},
saf(d,e){this.yp(0,e)},
gap(){return this.Bf(1)},
sap(d){this.yp(1,d)},
gau(d){return this.Bf(2)},
sau(d,e){this.yp(2,e)},
gaG(d){return this.Bf(3)},
gfs(){return this.Bf(3)/1},
gju(){return A.jb(this)},
iI(d,e){this.ip(e.gaf(e),e.gap(),e.gau(e),e.gaG(e))},
ip(d,e,f,g){var x=this
x.yp(0,d)
x.yp(1,e)
x.yp(2,f)
x.yp(3,g)},
ga3(d){return new A.hr(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a&&e.gv(e)===B.aK(B.H(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
$idz:1,
gu(d){return this.a}}
A.N1.prototype={
dQ(d){return new A.N1(new Uint16Array(B.bV(this.a)))},
gdu(){return C.cd},
gu(d){return this.a.length},
geP(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.B(w)
w[e]=x}},
ge7(d){var x=this.a
return!D.dN.gU(x)?x[0]:0},
gaf(d){var x=this.a
return!D.dN.gU(x)?x[0]:0},
saf(d,e){var x,w=this.a
if(!D.dN.gU(w)){x=D.d.C(e)
w.$flags&2&&B.B(w)
w[0]=x}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.B(w)
w[1]=x}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.B(w)
w[2]=x}},
gaG(d){var x=this.a
return x.length>3?x[3]:0},
gfs(){return this.gaG(0)/65535},
gju(){return A.jb(this)},
iI(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaG(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.B(w)
w[3]=x}},
ga3(d){return new A.hr(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aK(B.H(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
$idz:1}
A.N2.prototype={
dQ(d){var x=this.b
x===$&&B.b()
return new A.N2(this.a,x)},
gdu(){return C.h2},
geP(){return null},
Bg(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.h2(x,6-(d<<1>>>0))&3}else x=0
return x},
yq(d,e){var x,w,v
if(d>=this.a)return
x=C.ary[d]
w=D.d.C(e)
v=this.b
v===$&&B.b()
this.b=(v&x|D.c.eR(w&3,6-(d<<1>>>0)))>>>0},
i(d,e){return this.Bg(e)},
m(d,e,f){return this.yq(e,f)},
ge7(d){return this.Bg(0)},
gaf(d){return this.Bg(0)},
saf(d,e){this.yq(0,e)},
gap(){return this.Bg(1)},
sap(d){this.yq(1,d)},
gau(d){return this.Bg(2)},
sau(d,e){this.yq(2,e)},
gaG(d){return this.Bg(3)},
gfs(){return this.Bg(3)/3},
gju(){return A.jb(this)},
iI(d,e){this.ip(e.gaf(e),e.gap(),e.gau(e),e.gaG(e))},
ip(d,e,f,g){var x=this
x.yq(0,d)
x.yq(1,e)
x.yq(2,f)
x.yq(3,g)},
ga3(d){return new A.hr(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a&&e.gv(e)===B.aK(B.H(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
$idz:1,
gu(d){return this.a}}
A.N3.prototype={
dQ(d){return new A.N3(new Uint32Array(B.bV(this.a)))},
gdu(){return C.j8},
gu(d){return this.a.length},
geP(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.B(w)
w[e]=x}},
ge7(d){var x=this.a
return!D.bq.gU(x)?x[0]:0},
gaf(d){var x=this.a
return!D.bq.gU(x)?x[0]:0},
saf(d,e){var x,w=this.a
if(!D.bq.gU(w)){x=D.d.C(e)
w.$flags&2&&B.B(w)
w[0]=x}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.B(w)
w[1]=x}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.B(w)
w[2]=x}},
gaG(d){var x=this.a
return x.length>3?x[3]:0},
gfs(){return this.gaG(0)/4294967295},
gju(){return A.jb(this)},
iI(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaG(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.B(w)
w[3]=x}},
ga3(d){return new A.hr(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aK(B.H(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
$idz:1}
A.N4.prototype={
dQ(d){return new A.N4(this.a,new Uint8Array(B.bV(this.b)))},
gdu(){return C.h3},
geP(){return null},
Bh(d){var x
if(d<0||d>=this.a)x=0
else{x=this.b
x=d<2?D.c.h2(x[0],4-(d<<2>>>0))&15:D.c.h2(x[1],4-((d&1)<<2))&15}return x},
yr(d,e){var x,w,v,u
if(d>=this.a)return
x=D.c.b9(D.d.C(e),0,15)
if(d>1){d&=1
w=1}else w=0
if(d===0){v=this.b
u=v[w]
v.$flags&2&&B.B(v)
v[w]=(u&15|x<<4)>>>0}else if(d===1){v=this.b
u=v[w]
v.$flags&2&&B.B(v)
v[w]=(u&240|x)>>>0}},
i(d,e){return this.Bh(e)},
m(d,e,f){return this.yr(e,f)},
ge7(d){return this.Bh(0)},
gaf(d){return this.Bh(0)},
saf(d,e){this.yr(0,e)},
gap(){return this.Bh(1)},
sap(d){this.yr(1,d)},
gau(d){return this.Bh(2)},
sau(d,e){this.yr(2,e)},
gaG(d){return this.Bh(3)},
gfs(){return this.Bh(3)/15},
gju(){return A.jb(this)},
iI(d,e){this.ip(e.gaf(e),e.gap(),e.gau(e),e.gaG(e))},
ip(d,e,f,g){var x=this
x.yr(0,d)
x.yr(1,e)
x.yr(2,f)
x.yr(3,g)},
ga3(d){return new A.hr(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a&&e.gv(e)===B.aK(B.H(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
$idz:1,
gu(d){return this.a}}
A.xL.prototype={
aSx(d,e,f,g){var x=this.a
x.$flags&2&&B.B(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g},
dQ(d){return new A.xL(new Uint8Array(B.bV(this.a)))},
gdu(){return C.a7},
gu(d){return this.a.length},
geP(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.B(w)
w[e]=x}},
ge7(d){var x=this.a
return!D.A.gU(x)?x[0]:0},
gaf(d){var x=this.a
return!D.A.gU(x)?x[0]:0},
saf(d,e){var x,w=this.a
if(!D.A.gU(w)){x=D.d.C(e)
w.$flags&2&&B.B(w)
w[0]=x}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.B(w)
w[1]=x}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.B(w)
w[2]=x}},
gaG(d){var x=this.a
return x.length>3?x[3]:255},
gfs(){return this.gaG(0)/255},
gju(){return A.jb(this)},
iI(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaG(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.B(w)
w[3]=x}},
ga3(d){return new A.hr(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aK(B.H(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
$idz:1}
A.ajR.prototype={}
A.MZ.prototype={}
A.Xq.prototype={
dQ(d){return new A.Xq(this.a)},
gdu(){return C.a7},
gu(d){return 4},
geP(){return null},
i(d,e){var x
if(e>=0&&e<4){x=e<<3>>>0
x=D.c.hx((this.a&D.c.ek(255,x))>>>0,x)}else x=0
return x},
m(d,e,f){},
iI(d,e){},
ge7(d){return this.i(0,0)},
gaf(d){return this.i(0,0)},
saf(d,e){},
gap(){return this.i(0,1)},
sap(d){},
gau(d){return this.i(0,2)},
sau(d,e){},
gaG(d){return this.i(0,3)},
gfs(){return this.gaG(this)/255},
gju(){return A.jb(this)},
ga3(d){return new A.hr(this)},
k(d,e){var x=this
if(e==null)return!1
return y.G.b(e)&&e.gu(e)===x.gu(x)&&e.gv(e)===B.aK(B.H(x,!0,B.p(x).h("w.E")))},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
$idz:1}
A.ak2.prototype={
gaG(d){return 255},
gfs(){return 1},
gu(d){return 3}}
A.nB.prototype={
J(){return"Format."+this.b}}
A.aiS.prototype={
J(){return"BlendMode."+this.b}}
A.Ob.prototype={
R9(d){var x=$.cmf()
if(!x.a4(0,d))return"<unknown>"
return x.i(0,d).a},
j(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(x=j.a,w=new B.ce(x,x.r,x.e,B.p(x).h("ce<1>")),v=y.p,u=y.r,t=y.N,s=y.P,r="";w.q();){q=w.d
r+=q+"\n"
p=x.i(0,q)
for(q=p.a,q=new B.ce(q,q.r,q.e,B.p(q).h("ce<1>"));q.q();){o=q.d
n=p.i(0,o)
r=n==null?r+("\t"+j.R9(o)+"\n"):r+("\t"+j.R9(o)+": "+n.j(0)+"\n")}for(q=p.b.a,o=new B.ce(q,q.r,q.e,B.p(q).h("ce<1>"));o.q();){m=o.d
r+=m+"\n"
if(!q.a4(0,m))q.m(0,m,new A.pW(B.I(v,u),new A.u0(B.I(t,s))))
l=q.i(0,m)
for(m=l.a,m=new B.ce(m,m.r,m.e,B.p(m).h("ce<1>"));m.q();){k=m.d
n=l.i(0,k)
r=n==null?r+("\t"+j.R9(k)+"\n"):r+("\t"+j.R9(k)+": "+n.j(0)+"\n")}}}return r.charCodeAt(0)==0?r:r},
jy(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0="exif",a1="interop",a2=a4.b
a4.b=!0
a4.l6(19789)
a4.l6(42)
a4.iZ(8)
x=d.a
if(x.i(0,"ifd0")==null)x.m(0,"ifd0",new A.pW(B.I(y.p,y.r),new A.u0(B.I(y.N,y.P))))
w=y.N
v=y.p
u=B.I(w,v)
for(t=B.p(x),s=t.h("c2<1>"),r=new B.ce(x,x.r,x.e,t.h("ce<1>")),q=y.r,p=y.P,o=8;r.q();){n=r.d
m=x.i(0,n)
m.toString
u.m(0,n,o)
n=m.b.a
if(n.a4(0,a0)){l=new Uint32Array(1)
l[0]=0
m.m(0,34665,new A.rc(l))}else m.a.K(0,34665)
if(n.a4(0,a1)){l=new Uint32Array(1)
l[0]=0
m.m(0,40965,new A.rc(l))}else m.a.K(0,40965)
if(n.a4(0,"gps")){l=new Uint32Array(1)
l[0]=0
m.m(0,34853,new A.rc(l))}else m.a.K(0,34853)
m=m.a
o+=2+12*m.a+4
for(m=new B.bD(m,m.r,m.e,B.p(m).h("bD<2>"));m.q();){l=m.d
k=C.jm[l.ghL(l).a]*l.gu(l)
if(k>4)o+=k}for(m=new B.ce(n,n.r,n.e,B.p(n).h("ce<1>"));m.q();){l=m.d
if(!n.a4(0,l))n.m(0,l,new A.pW(B.I(v,q),new A.u0(B.I(w,p))))
j=n.i(0,l)
j.toString
u.m(0,l,o)
j=j.a
i=2+12*j.a
for(l=new B.bD(j,j.r,j.e,B.p(j).h("bD<2>"));l.q();){j=l.d
k=C.jm[j.ghL(j).a]*j.gu(j)
if(k>4)i+=k}o+=i}}h=x.a
for(r=h-1,t=t.h("b4<2>"),g=0;g<h;++g){f=new B.c2(x,s).dJ(0,g)
e=new B.b4(x,t).dJ(0,g)
n=e.b.a
if(n.a4(0,a0)){m=e.i(0,34665)
m.toString
l=u.i(0,a0)
l.toString
m.vS(l)}if(n.a4(0,a1)){m=e.i(0,40965)
m.toString
l=u.i(0,a1)
l.toString
m.vS(l)}if(n.a4(0,"gps")){m=e.i(0,34853)
m.toString
l=u.i(0,"gps")
l.toString
m.vS(l)}m=u.i(0,f)
m.toString
d.avg(a4,e,m+2+12*e.a.a+4)
if(g===r)a4.iZ(0)
else{m=u.i(0,new B.c2(x,s).dJ(0,g+1))
m.toString
a4.iZ(m)}d.avh(a4,e)
for(m=new B.ce(n,n.r,n.e,B.p(n).h("ce<1>"));m.q();){l=m.d
if(!n.a4(0,l))n.m(0,l,new A.pW(B.I(v,q),new A.u0(B.I(w,p))))
j=n.i(0,l)
j.toString
l=u.i(0,l)
l.toString
d.avg(a4,j,l+2+12*j.a.a)
d.avh(a4,j)}}a4.b=a2},
avg(d,e,f){var x,w,v,u,t,s,r=e.a
d.l6(r.a)
for(r=new B.ce(r,r.r,r.e,B.p(r).h("ce<1>"));r.q();){x=r.d
w=e.i(0,x)
w.toString
v=x===273
u=v&&w.ghL(w)===C.hM?C.cM:w.ghL(w)
t=v&&w.ghL(w)===C.hM?1:w.gu(w)
d.l6(x)
d.l6(u.a)
d.iZ(t)
s=C.jm[w.ghL(w).a]*w.gu(w)
if(s<=4){w.jy(0,d)
for(;s<4;){d.b0(0);++s}}else{d.iZ(f)
f+=s}}return f},
avh(d,e){var x,w
for(x=e.a,x=new B.bD(x,x.r,x.e,B.p(x).h("bD<2>"));x.q();){w=x.d
if(C.jm[w.ghL(w).a]*w.gu(w)>4)w.jy(0,d)}},
vn(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a5.e
a5.e=!0
x=a5.d
w=a5.al()
if(w===18761){a5.e=!1
if(a5.al()!==42){a5.e=a3
return!1}}else if(w===19789){a5.e=!0
if(a5.al()!==42){a5.e=a3
return!1}}else return!1
v=a5.a1()
for(u=this.a,t=y.v,s=y.p,r=y.r,q=y.N,p=y.P,o=a5.c,n=0;v>0;v=e){m=x+v
a5.d=m
if(o-m<2)break
l=new A.pW(B.I(s,r),new A.u0(B.I(q,p)))
k=a5.al()
j=B.a(new Array(k),t)
for(i=0;i<k;++i)j[i]=this.aqO(a5,x)
for(m=j.length,h=0;h<j.length;j.length===m||(0,B.Q)(j),++h){g=j[h]
f=g.b
if(f!=null)l.m(0,g.a,f)}u.m(0,"ifd"+n,l);++n
e=a5.a1()
if(e===v)break}for(u=new B.bD(u,u.r,u.e,B.p(u).h("bD<2>"));u.q();){o=u.d
for(m=J.aL(C.BL.gen(C.BL)),f=o.a,d=o.b.a;m.q();){a0=m.gL(m)
if(f.a4(0,a0)){a5.d=x+o.i(0,a0).C(0)
l=new A.pW(B.I(s,r),new A.u0(B.I(q,p)))
k=a5.al()
j=B.a(new Array(k),t)
for(i=0;i<k;++i)j[i]=this.aqO(a5,x)
for(a1=j.length,h=0;h<j.length;j.length===a1||(0,B.Q)(j),++h){g=j[h]
a2=g.b
if(a2!=null)l.m(0,g.a,a2)}a0=C.BL.i(0,a0)
a0.toString
d.m(0,a0,l)}}}a5.e=a3
return!1},
aqO(d,e){var x,w,v,u,t=d.al(),s=d.al(),r=d.a1(),q=new A.aJ1(t,null)
if(s>13)return q
x=C.N2[s]
w=r*C.jm[s]
v=d.d
if((w>4?d.d=d.a1()+e:v)+w>d.c)return q
u=d.jb(w)
switch(x.a){case 0:break
case 6:q.b=new A.vZ(new Int8Array(B.bV(J.cmm(D.A.gaj(u.hK()),0,r))))
break
case 1:q.b=new A.u_(new Uint8Array(B.bV(u.jb(r).hK())))
break
case 7:q.b=new A.Hc(new Uint8Array(B.bV(u.jb(r).hK())))
break
case 2:q.b=new A.BD(r===0?"":u.jc(r-1))
break
case 3:q.b=A.cye(u,r)
break
case 4:q.b=A.cy9(u,r)
break
case 5:q.b=A.cya(u,r)
break
case 10:q.b=A.cyc(u,r)
break
case 8:q.b=A.cyd(u,r)
break
case 9:q.b=A.cyb(u,r)
break
case 11:q.b=A.cyg(u,r)
break
case 12:q.b=A.cy8(u,r)
break}d.d=v+4
return q}}
A.aJ1.prototype={
gp(d){return this.b}}
A.ao0.prototype={}
A.u0.prototype={
aSK(d){d.a.aR(0,new A.bgB(this))},
gfd(d){var x=this.a
return new B.b4(x,B.p(x).h("b4<2>"))},
gU(d){var x,w=this.a
if(w.a===0)return!0
for(w=new B.bD(w,w.r,w.e,B.p(w).h("bD<2>"));w.q();){x=w.d
if(!(x.a.a===0&&x.b.gU(0)))return!1}return!0},
a4(d,e){return this.a.a4(0,e)},
i(d,e){var x=this.a
if(!x.a4(0,e))x.m(0,e,new A.pW(B.I(y.p,y.r),new A.u0(B.I(y.N,y.P))))
x=x.i(0,e)
x.toString
return x},
m(d,e,f){this.a.m(0,e,f)}}
A.pW.prototype={
gfd(d){var x=this.a
return new B.b4(x,B.p(x).h("b4<2>"))},
gU(d){return this.a.a===0&&this.b.gU(0)},
bts(d){d.a.aR(0,new A.bgC(this))
d.b.a.aR(0,new A.bgD(this))},
a4(d,e){return this.a.a4(0,e)},
i(d,e){if(typeof e=="string")e=C.Xt.i(0,e)
if(B.hT(e))return this.a.i(0,e)
return null},
m(d,e,f){var x,w,v,u,t,s,r=this
if(typeof e=="string")e=C.Xt.i(0,e)
if(!B.hT(e))return
if(f==null)r.a.K(0,e)
else if(f instanceof A.jZ)r.a.m(0,e,f)
else{x=$.cmf().i(0,e)
if(x!=null)switch(x.b.a){case 1:if(y.L.b(f))r.a.m(0,e,new A.u_(new Uint8Array(B.bV(new Uint8Array(B.bV(f))))))
else if(B.hT(f)){w=new Uint8Array(1)
w[0]=f
r.a.m(0,e,new A.u_(w))}break
case 2:if(typeof f=="string")r.a.m(0,e,new A.BD(f))
break
case 3:if(y.L.b(f))r.a.m(0,e,new A.yg(new Uint16Array(B.bV(new Uint16Array(B.bV(f))))))
else if(B.hT(f))r.a.m(0,e,A.cUh(f))
break
case 4:if(y.L.b(f))r.a.m(0,e,new A.rc(new Uint32Array(B.bV(new Uint32Array(B.bV(f))))))
else if(B.hT(f))r.a.m(0,e,A.cUg(f))
break
case 5:if(y.k.b(f))r.a.m(0,e,new A.u1(B.b8(f,!0,y.i)))
else if(y.L.b(f)&&J.bz(f)===2){w=J.a2(f)
r.a.m(0,e,new A.u1(B.a([new A.nS(w.i(f,0),w.i(f,1))],y.j)))}else if(f instanceof A.nS)r.a.m(0,e,new A.u1(B.a([new A.nS(f.a,f.b)],y.j)))
else if(y.f.b(f)){w=J.a2(f)
v=w.gu(f)
u=y.i
t=J.kp(v,u)
for(s=0;s<v;++s)t[s]=new A.nS(J.v(w.i(f,s),0),J.v(w.i(f,s),1))
r.a.m(0,e,new A.u1(B.b8(t,!0,u)))}break
case 6:if(y.L.b(f))r.a.m(0,e,new A.vZ(new Int8Array(B.bV(new Int8Array(B.bV(f))))))
else if(B.hT(f)){w=new Int8Array(1)
w[0]=f
r.a.m(0,e,new A.vZ(w))}break
case 7:if(y.L.b(f))r.a.m(0,e,new A.Hc(new Uint8Array(B.bV(new Uint8Array(B.bV(f))))))
break
case 8:if(y.L.b(f))r.a.m(0,e,new A.yf(new Int16Array(B.bV(new Int16Array(B.bV(f))))))
else if(B.hT(f)){w=new Int16Array(1)
w[0]=f
r.a.m(0,e,new A.yf(w))}break
case 9:if(y.L.b(f))r.a.m(0,e,new A.ye(new Int32Array(B.bV(new Int32Array(B.bV(f))))))
else if(B.hT(f)){w=new Int32Array(1)
w[0]=f
r.a.m(0,e,new A.ye(w))}break
case 10:if(y.k.b(f))r.a.m(0,e,new A.u2(B.b8(f,!0,y.i)))
else if(y.L.b(f)&&J.bz(f)===2){w=J.a2(f)
r.a.m(0,e,new A.u2(B.a([new A.nS(w.i(f,0),w.i(f,1))],y.j)))}else if(f instanceof A.nS)r.a.m(0,e,new A.u2(B.a([f],y.j)))
else if(y.f.b(f)){w=J.a2(f)
v=w.gu(f)
u=y.i
t=J.kp(v,u)
for(s=0;s<v;++s)t[s]=new A.nS(J.v(w.i(f,s),0),J.v(w.i(f,s),1))
r.a.m(0,e,new A.u2(B.b8(t,!0,u)))}break
case 11:if(y.H.b(f))r.a.m(0,e,new A.BF(new Float32Array(B.bV(new Float32Array(B.bV(f))))))
else if(typeof f=="number")r.a.m(0,e,A.cyf(f))
else if(B.hT(f))r.a.m(0,e,A.cyf(f))
break
case 12:if(y.H.b(f))r.a.m(0,e,new A.BE(new Float64Array(B.bV(new Float64Array(B.bV(f))))))
else if(typeof f=="number")r.a.m(0,e,A.cy7(f))
else if(B.hT(f))r.a.m(0,e,A.cy7(f))
break
case 0:break}}},
gih(d){var x=this.a.i(0,274)
return x==null?null:x.C(0)},
sih(d,e){this.a.K(0,274)}}
A.mJ.prototype={
J(){return"IfdValueType."+this.b}}
A.jZ.prototype={
jd(d,e){return 0},
C(d){return this.jd(0,0)},
tY(d){return 0},
tX(){return new Uint8Array(0)},
j(d){return""},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.jZ&&x.ghL(x)===e.ghL(e)&&x.gu(x)===e.gu(e)&&x.gv(x)===e.gv(e)},
gv(d){return 0},
vS(d){}}
A.u_.prototype={
dQ(d){return new A.u_(new Uint8Array(B.bV(this.a)))},
ghL(d){return C.Jw},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.u_){x=this.a
x=x.length===e.a.length&&B.aK(x)===B.aK(e.a)}else x=!1
return x},
gv(d){return B.aK(this.a)},
jd(d,e){return this.a[e]},
C(d){return this.jd(0,0)},
vS(d){var x=this.a
x.$flags&2&&B.B(x)
x[0]=d},
tX(){return this.a},
jy(d,e){e.m2(this.a)},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.BD.prototype={
dQ(d){return new A.BD(this.a)},
ghL(d){return C.bB},
gu(d){return this.a.length+1},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.BD){x=this.a
x=x.length+1===e.a.length+1&&D.e.gv(x)===D.e.gv(e.a)}else x=!1
return x},
gv(d){return D.e.gv(this.a)},
tX(){return new Uint8Array(B.bV(new B.e6(this.a)))},
jy(d,e){e.m2(new B.e6(this.a))
e.b0(0)},
j(d){return this.a},
gp(d){return this.a}}
A.yg.prototype={
aSP(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.al()
w.$flags&2&&B.B(w)
w[x]=v}},
dQ(d){return new A.yg(new Uint16Array(B.bV(this.a)))},
ghL(d){return C.bi},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.yg){x=this.a
x=x.length===e.a.length&&B.aK(x)===B.aK(e.a)}else x=!1
return x},
gv(d){return B.aK(this.a)},
jd(d,e){return this.a[e]},
C(d){return this.jd(0,0)},
vS(d){var x=this.a
x.$flags&2&&B.B(x)
x[0]=d},
tX(){return J.hC(D.dN.gaj(this.a))},
jy(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.l6(this.a[x])},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.rc.prototype={
aSM(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.a1()
w.$flags&2&&B.B(w)
w[x]=v}},
dQ(d){return new A.rc(new Uint32Array(B.bV(this.a)))},
ghL(d){return C.cM},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.rc){x=this.a
x=x.length===e.a.length&&B.aK(x)===B.aK(e.a)}else x=!1
return x},
gv(d){return B.aK(this.a)},
jd(d,e){return this.a[e]},
C(d){return this.jd(0,0)},
vS(d){var x=this.a
x.$flags&2&&B.B(x)
x[0]=d},
tX(){return J.hC(D.bq.gaj(this.a))},
jy(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.iZ(this.a[x])},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.u1.prototype={
dQ(d){return new A.u1(B.b8(this.a,!0,y.i))},
ghL(d){return C.e5},
gu(d){return this.a.length},
jd(d,e){return this.a[e].C(0)},
C(d){return this.jd(0,0)},
tY(d){return this.a[0].tY(0)},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.u1){x=this.a
x=x.length===e.a.length&&B.aK(x)===B.aK(e.a)}else x=!1
return x},
gv(d){return B.aK(this.a)},
jy(d,e){var x,w,v,u
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.Q)(x),++v){u=x[v]
e.iZ(u.a)
e.iZ(u.b)}},
j(d){var x=this.a
return x.length===1?x[0].j(0):B.o(x)},
gp(d){return this.a}}
A.vZ.prototype={
dQ(d){return new A.vZ(new Int8Array(B.bV(this.a)))},
ghL(d){return C.JA},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.vZ){x=this.a
x=x.length===e.a.length&&B.aK(x)===B.aK(e.a)}else x=!1
return x},
gv(d){return B.aK(this.a)},
jd(d,e){return this.a[e]},
C(d){return this.jd(0,0)},
vS(d){var x=this.a
x.$flags&2&&B.B(x)
x[0]=d},
tX(){return J.hC(D.jy.gaj(this.a))},
jy(d,e){e.m2(J.da(D.jy.gaj(this.a),0,null))},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.yf.prototype={
aSO(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.al()
u=$.ni()
u.$flags&2&&B.B(u)
u[0]=v
v=$.on()[0]
w.$flags&2&&B.B(w)
w[x]=v}},
dQ(d){return new A.yf(new Int16Array(B.bV(this.a)))},
ghL(d){return C.JB},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.yf){x=this.a
x=x.length===e.a.length&&B.aK(x)===B.aK(e.a)}else x=!1
return x},
gv(d){return B.aK(this.a)},
jd(d,e){return this.a[e]},
C(d){return this.jd(0,0)},
vS(d){var x=this.a
x.$flags&2&&B.B(x)
x[0]=d},
tX(){return J.hC(D.jx.gaj(this.a))},
jy(d,e){var x,w=new Int16Array(1),v=J.cmn(D.jx.gaj(w),0,null),u=this.a.length
for(x=0;x<u;++x){w[0]=this.a[x]
e.l6(v[0])}},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.ye.prototype={
aSN(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.a1()
u=$.hp()
u.$flags&2&&B.B(u)
u[0]=v
v=$.kB()[0]
w.$flags&2&&B.B(w)
w[x]=v}},
dQ(d){return new A.ye(new Int32Array(B.bV(this.a)))},
ghL(d){return C.JC},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.ye){x=this.a
x=x.length===e.a.length&&B.aK(x)===B.aK(e.a)}else x=!1
return x},
gv(d){return B.aK(this.a)},
jd(d,e){return this.a[e]},
C(d){return this.jd(0,0)},
vS(d){var x=this.a
x.$flags&2&&B.B(x)
x[0]=d},
tX(){return J.hC(D.cl.gaj(this.a))},
jy(d,e){var x,w,v,u=this.a.length
for(x=0;x<u;++x){w=this.a[x]
v=$.aVl()
v.$flags&2&&B.B(v)
v[0]=w
e.iZ($.cm7()[0])}},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.u2.prototype={
dQ(d){return new A.u2(B.b8(this.a,!0,y.i))},
ghL(d){return C.Jx},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.u2){x=this.a
x=x.length===e.a.length&&B.aK(x)===B.aK(e.a)}else x=!1
return x},
gv(d){return B.aK(this.a)},
jd(d,e){return this.a[e].C(0)},
C(d){return this.jd(0,0)},
tY(d){return this.a[0].tY(0)},
jy(d,e){var x,w,v,u,t,s
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.Q)(x),++v){u=x[v]
t=$.aVl()
t.$flags&2&&B.B(t)
t[0]=u.a
s=$.cm7()
e.iZ(s[0])
t[0]=u.b
e.iZ(s[0])}},
j(d){var x=this.a
return x.length===1?x[0].j(0):B.o(x)},
gp(d){return this.a}}
A.BF.prototype={
aSQ(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.a1()
u=$.hp()
u.$flags&2&&B.B(u)
u[0]=v
v=$.Fd()[0]
w.$flags&2&&B.B(w)
w[x]=v}},
dQ(d){return new A.BF(new Float32Array(B.bV(this.a)))},
ghL(d){return C.Jy},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.BF){x=this.a
x=x.length===e.a.length&&B.aK(x)===B.aK(e.a)}else x=!1
return x},
gv(d){return B.aK(this.a)},
tX(){return J.hC(D.eW.gaj(this.a))},
tY(d){return this.a[0]},
jy(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.bKK(this.a[x])},
j(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gp(d){return this.a}}
A.BE.prototype={
aSL(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.a_w()
w.$flags&2&&B.B(w)
w[x]=v}},
dQ(d){return new A.BE(new Float64Array(B.bV(this.a)))},
ghL(d){return C.Jz},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.BE){x=this.a
x=x.length===e.a.length&&B.aK(x)===B.aK(e.a)}else x=!1
return x},
gv(d){return B.aK(this.a)},
tY(d){return this.a[0]},
tX(){return J.hC(D.e8.gaj(this.a))},
jy(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.bKL(this.a[x])},
j(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gp(d){return this.a}}
A.Hc.prototype={
dQ(d){return new A.Hc(new Uint8Array(B.bV(this.a)))},
ghL(d){return C.hM},
gu(d){return this.a.length},
tX(){return this.a},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.Hc){x=this.a
x=x.length===e.a.length&&B.aK(x)===B.aK(e.a)}else x=!1
return x},
gv(d){return B.aK(this.a)},
jy(d,e){e.m2(this.a)},
j(d){return"<data>"},
gp(d){return this.a}}
A.lI.prototype={
J(){return"BmpCompression."+this.b}}
A.aZz.prototype={}
A.Fv.prototype={
ahZ(d,e){var x,w,v,u,t,s,r,q=this,p=q.d,o=p<=40
if(o){x=q.r
x=x===C.yh||x===C.yi}else x=!0
if(x){x=q.as=d.a1()
w=A.cjO(x)
q.CW=w
v=D.c.h2(x,w)
x=v>0
q.cx=x?255/v:0
w=q.at=d.a1()
u=A.cjO(w)
q.cy=u
t=D.c.h2(w,u)
q.db=x?255/t:0
w=q.ax=d.a1()
u=A.cjO(w)
q.dx=u
s=D.c.h2(w,u)
q.dy=x?255/s:0
if(!o||q.r===C.yi){o=q.ay=d.a1()
x=A.cjO(o)
q.fr=x
r=D.c.h2(o,x)
q.fx=r>0?255/r:0}else if(q.f===16){q.ay=4278190080
q.fr=24
q.fx=1}else{q.ay=4278190080
q.fr=24
q.fx=1}}else if(q.f===16){q.as=31744
q.CW=10
q.cx=8.225806451612904
q.at=992
q.cy=5
q.db=8.225806451612904
q.ax=31
q.dx=0
q.dy=8.225806451612904
q.fx=q.fr=q.ay=0}else{q.as=16711680
q.CW=16
q.cx=1
q.at=65280
q.cy=8
q.db=1
q.ax=255
q.dx=0
q.dy=1
q.ay=4278190080
q.fr=24
q.fx=1}o=d.d
d.d=o+(p-(o-q.fy))
if(q.f<=8)q.bHQ(d)},
gOF(){var x=this.d
if(x!==40)if(x===124){x=this.ay
x===$&&B.b()
x=x===0}else x=!1
else x=!0
return x},
gb2(d){return Math.abs(this.c)},
bHQ(d){var x,w,v,u,t,s=this,r=s.z
if(r===0)r=D.c.ek(1,s.f)
s.ch=new A.uh(new Uint8Array(r*3),r,3)
for(x=0;x<r;++x){w=J.v(d.a,d.d++)
v=J.v(d.a,d.d++)
u=J.v(d.a,d.d++)
t=J.v(d.a,d.d++)
s.ch.RM(x,u,v,w,t)}},
bvD(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(o.ch!=null){x=o.f
if(x===1){w=d.cq()
for(v=7;v>=0;--v)e.$4(D.c.nY(w,v)&1,0,0,0)
return}else if(x===2){w=d.cq()
for(v=6;v>=0;v-=2)e.$4(D.c.nY(w,v)&2,0,0,0)}else if(x===4){w=d.cq()
e.$4(D.c.P(w,4)&15,0,0,0)
e.$4(w&15,0,0,0)
return}else if(x===8){e.$4(d.cq(),0,0,0)
return}}x=o.r
if(x===C.yh&&o.f===32){u=d.a1()
x=o.as
x===$&&B.b()
t=o.CW
t===$&&B.b()
t=D.c.h2((u&x)>>>0,t)
x=o.cx
x===$&&B.b()
s=D.d.C(t*x)
x=o.at
x===$&&B.b()
t=o.cy
t===$&&B.b()
t=D.c.h2((u&x)>>>0,t)
x=o.db
x===$&&B.b()
r=D.d.C(t*x)
x=o.ax
x===$&&B.b()
t=o.dx
t===$&&B.b()
t=D.c.h2((u&x)>>>0,t)
x=o.dy
x===$&&B.b()
q=D.d.C(t*x)
if(o.gOF())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.h2((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.d.C(t*x)}return e.$4(s,r,q,p)}else{t=o.f
if(t===32&&x===C.Fk){q=d.cq()
r=d.cq()
s=d.cq()
p=d.cq()
return e.$4(s,r,q,o.gOF()?255:p)}else if(t===24){q=d.cq()
r=d.cq()
return e.$4(d.cq(),r,q,255)}else if(t===16){u=d.al()
x=o.as
x===$&&B.b()
t=o.CW
t===$&&B.b()
t=D.c.h2((u&x)>>>0,t)
x=o.cx
x===$&&B.b()
s=D.d.C(t*x)
x=o.at
x===$&&B.b()
t=o.cy
t===$&&B.b()
t=D.c.h2((u&x)>>>0,t)
x=o.db
x===$&&B.b()
r=D.d.C(t*x)
x=o.ax
x===$&&B.b()
t=o.dx
t===$&&B.b()
t=D.c.h2((u&x)>>>0,t)
x=o.dy
x===$&&B.b()
q=D.d.C(t*x)
if(o.gOF())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.h2((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.d.C(t*x)}return e.$4(s,r,q,p)}else throw B.l(A.c4("Unsupported bitsPerPixel ("+t+") or compression ("+x.j(0)+")."))}}}
A.aiW.prototype={
ow(d){var x,w=null
if(!A.cmQ(A.cV(d,!1,w,0)))return w
x=A.cV(d,!1,w,0)
this.a=x
return this.b=A.cPe(x,w)},
kc(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b
if(e==null)return new A.BI(f,f,f,f,0,C.bk,0,0)
x=g.a
x===$&&B.b()
w=e.a.b
w===$&&B.b()
x.d=w
v=e.f
w=e.b
u=D.c.b8(w*v+31,32)*4
x=g.c
if(x)t=4
else if(v===1||v===4||v===8)t=1
else{s=v===32?4:3
t=s}if(x)r=C.a7
else if(v===1)r=C.fi
else{if(v===2)s=C.h2
else if(v===4)s=C.h3
else s=C.a7
r=s}q=x?f:e.ch
p=A.hN(f,f,r,0,C.bk,e.gb2(e),f,0,t,q,C.a7,w,!1)
for(o=p.gb2(0)-1,x=e.c,w=1/x<0,s=x<0,x=x===0;o>=0;--o){n={}
if(!(x?w:s))m=o
else{l=p.a
l=l==null?f:l.b
m=(l==null?0:l)-1-o}l=g.a
k=l.jg(u)
l.d=l.d+(k.c-k.d)
l=p.a
j=l==null
i=j?f:l.a
if(i==null)i=0
n.a=0
h=j?f:l.ed(0,m,f)
if(h==null)h=new A.fe()
for(;n.a<i;)e.bvD(k,new A.aZy(n,g,i,e,h))}return p},
nz(d,e,f){if(this.ow(e)==null)return null
return this.kc(0)}}
A.b6M.prototype={}
A.b5u.prototype={}
A.b5v.prototype={}
A.b97.prototype={}
A.ao1.prototype={}
A.aqU.prototype={
Pm(){return this.w},
rK(d,e,f,g,h){throw B.l(A.c4("B44 compression not yet supported."))},
Jn(d,e,f){return this.rK(d,e,f,null,null)},
j(d){return B.o(this.r)+" "+this.x}}
A.Od.prototype={
J(){return"ExrChannelType."+this.b}}
A.Gx.prototype={
J(){return"ExrChannelName."+this.b}}
A.ao2.prototype={
aSB(d){var x=this,w=d.Q3()
x.a=w
if(w.length===0)return
x.c=C.auq[d.a1()]
d.cq()
d.d+=3
x.f=d.a1()
x.r=d.a1()
w=x.a
if(w==="R"){x.w=!0
x.b=C.akj}else if(w==="G"){x.w=!0
x.b=C.akk}else if(w==="B"){x.w=!0
x.b=C.akl}else if(w==="A"){x.w=!0
x.b=C.akm}else{x.w=!1
x.b=C.akn}switch(x.c.a){case 0:x.d=4
break
case 1:x.d=2
break
case 2:x.d=4
break}}}
A.tP.prototype={
J(){return"ExrCompressorType."+this.b}}
A.baf.prototype={
rK(d,e,f,g,h){throw B.l(A.c4("Unsupported compression type"))},
Jn(d,e,f){return this.rK(d,e,f,null,null)}}
A.bhE.prototype={}
A.ao3.prototype={}
A.bah.prototype={
aSC(d){var x,w,v,u,t=this,s=A.cV(d,!1,null,0)
if(s.a1()!==20000630)throw B.l(A.c4("File is not an OpenEXR image file."))
x=t.d=s.cq()
if(x!==2)throw B.l(A.c4("Cannot read version "+x+" image files."))
x=t.e=s.rD()
if((x&4294967289)>>>0!==0)throw B.l(A.c4("The file format version number's flag field contains unrecognized flags."))
if((x&16)===0){w=t.c
v=A.cyx(w.length,(x&2)!==0,s)
if(v.w>0)w.push(v)}else for(x=t.c;!0;){v=A.cyx(x.length,(t.e&2)!==0,s)
if(v.w<=0)break
x.push(v)}x=t.c
w=x.length
if(w===0)throw B.l(A.c4("Error reading image header"))
for(u=0;u<x.length;x.length===w||(0,B.Q)(x),++u)x[u].bHP(s)
t.bhn(s)},
bhn(d){var x,w,v,u,t=this
for(x=t.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.Q)(x),++v){u=x[v]
t.a=Math.max(t.a,u.w)
t.b=Math.max(t.b,u.x)
if(u.db)t.bhx(u,d)
else t.bhv(u,d)}},
bhx(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.e
b3===$&&B.b()
x=(b3&16)!==0
b3=b4.b
b3.toString
w=b4.CW
v=b4.ay
u=A.c9(b5,b2,0)
t=b4.c
s=b4.a
r=0
q=0
while(!0){p=b4.k1
p.toString
if(!(r<p))break
o=0
while(!0){p=b4.id
p.toString
if(!(o<p))break
for(p=q!==0,n=0,m=0;n<b4.go[r];++n)for(l=0;l<b4.fy[o];++l,++m){if(p)break
u.d=v[q][m]
if(x)if(u.a1()!==s)throw B.l(A.c4("Invalid Image Data"))
k=u.a1()
j=u.a1()
u.a1()
u.a1()
i=u.jg(u.a1())
u.d=u.d+(i.c-i.d)
h=b4.dy
h.toString
g=j*h
f=b4.dx
f.toString
h=w.rK(i,k*f,g,f,h)
f=h.length
f=Math.min(f,f)
e=new A.lU(h,0,f,0,!1)
d=w.a
a0=w.b
a1=t.length
a2=0
a3=0
while(!0){if(!(a3<a0&&g<this.b))break
for(a4=0;a4<a1;++a4){if(a2>=f)break
a5=t[a4]
h=b4.dx
h.toString
a6=k*h
for(a7=0;a7<d;++a7,++a6){h=a5.c
h===$&&B.b()
switch(h.a){case 1:h=e.al()
a8=$.hM
a9=(a8!=null?a8:A.iD())[h]
break
case 2:a9=e.al()
break
case 0:a9=e.a1()
break
default:a9=b2}h=a5.d
h===$&&B.b()
a2+=h
h=a5.w
h===$&&B.b()
if(h){h=b3.a
b0=h==null?b2:h.ed(a6,g,b2)
if(b0==null)b0=new A.fe()
h=a5.b
h===$&&B.b()
b0.m(0,h.a,a9)}else{h=a5.a
h===$&&B.b()
a8=b3.b
b1=a8!=null?a8.i(0,h):b2
if(b1!=null)b1.fe(a6,g,a9,0,0)}}}++a3;++g}}++o;++q}++r}},
bhv(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=this.e
a5===$&&B.b()
x=(a5&16)!==0
a5=a6.b
a5.toString
w=a6.CW
v=a6.ay[0]
u=a6.cx
t=A.c9(a7,a4,0)
for(s=v.length,r=a6.c,q=w!=null,p=0,o=0;o<s;++o){t.d=v[o]
if(x)if(t.a1()!==3.141592653589793)throw B.l(A.c4("Invalid Image Data"))
n=t.a1()
m=$.hp()
m.$flags&2&&B.B(m)
m[0]=n
n=$.kB()
m[0]=t.a1()
l=t.jg(n[0])
t.d=t.d+(l.c-l.d)
if(q){n=w.Jn(l,0,p)
m=n.length
k=new A.lU(n,0,Math.min(m,m),0,!1)}else k=l
j=k.c-k.d
i=r.length
h=0
while(!0){if(!(h<u&&p<this.b))break
g=a6.cy[p]
if(g>=j)break
for(f=0;f<i;++f){if(g>=j)break
e=r[f]
d=a6.w
for(a0=0;a0<d;++a0){n=e.c
n===$&&B.b()
switch(n.a){case 1:n=k.al()
m=$.hM
a1=(m!=null?m:A.iD())[n]
break
case 2:a1=k.al()
break
case 0:a1=k.a1()
break
default:a1=a4}n=e.d
n===$&&B.b()
g+=n
n=e.w
n===$&&B.b()
if(n){n=a5.a
a2=n==null?a4:n.ed(a0,p,a4)
if(a2==null)a2=new A.fe()
n=e.b
n===$&&B.b()
a2.m(0,n.a,a1)}else{n=e.a
n===$&&B.b()
m=a5.b
a3=m!=null?m.i(0,n):a4
if(a3!=null)a3.fe(a0,p,a1,0,0)}}}++h;++p}}}}
A.Zx.prototype={
aSD(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=B.I(y.N,y.I)
for(x=a2.e,w=y.t,v=a2.c,u=C.hJ;!0;){t=a7.Q3()
if(t.length===0)break
s=a7.Q3()
r=a7.a1()
q=a7.jg(r)
a7.d=a7.d+(q.c-q.d)
x.m(0,t,new A.ao1(t,s,r))
switch(t){case"channels":for(;!0;){p=new A.ao2()
p.aSB(q)
o=p.a
o===$&&B.b()
if(o.length===0)break
n=p.w
n===$&&B.b()
if(n){++a2.d
o=p.c
o===$&&B.b()
if(o===C.zQ)u=C.hJ
else u=o===C.zR?C.j7:C.j8}else{n=p.c
n===$&&B.b()
if(n===C.zQ){n=a2.w
m=a2.x
a4.m(0,o,new A.OS(new Uint16Array(n*m),n,m,1))}else if(n===C.zR){n=a2.w
m=a2.x
a4.m(0,o,new A.OT(new Float32Array(n*m),n,m,1))}else if(n===C.It){n=a2.w
m=a2.x
a4.m(0,o,new A.OX(new Uint32Array(n*m),n,m,1))}}v.push(p)}break
case"chromaticities":o=new Float32Array(8)
a2.at=o
n=q.a1()
m=$.hp()
m.$flags&2&&B.B(m)
m[0]=n
n=$.Fd()
o[0]=n[0]
o=a2.at
m[0]=q.a1()
l=n[0]
o.$flags&2&&B.B(o)
o[1]=l
l=a2.at
m[0]=q.a1()
o=n[0]
l.$flags&2&&B.B(l)
l[2]=o
o=a2.at
m[0]=q.a1()
l=n[0]
o.$flags&2&&B.B(o)
o[3]=l
l=a2.at
m[0]=q.a1()
o=n[0]
l.$flags&2&&B.B(l)
l[4]=o
o=a2.at
m[0]=q.a1()
l=n[0]
o.$flags&2&&B.B(o)
o[5]=l
l=a2.at
m[0]=q.a1()
o=n[0]
l.$flags&2&&B.B(l)
l[6]=o
o=a2.at
m[0]=q.a1()
n=n[0]
o.$flags&2&&B.B(o)
o[7]=n
break
case"compression":a2.ax=C.awR[J.v(q.a,q.d++)]
break
case"dataWindow":o=q.a1()
n=$.hp()
n.$flags&2&&B.B(n)
n[0]=o
o=$.kB()
m=o[0]
n[0]=q.a1()
l=o[0]
n[0]=q.a1()
k=o[0]
n[0]=q.a1()
o=a2.r=B.a([m,l,k,o[0]],w)
a2.w=o[2]-o[0]+1
a2.x=o[3]-o[1]+1
break
case"displayWindow":o=q.a1()
n=$.hp()
n.$flags&2&&B.B(n)
n[0]=o
$.kB()
n[0]=q.a1()
n[0]=q.a1()
n[0]=q.a1()
break
case"lineOrder":break
case"pixelAspectRatio":o=q.a1()
n=$.hp()
n.$flags&2&&B.B(n)
n[0]=o
$.Fd()
break
case"screenWindowCenter":o=q.a1()
n=$.hp()
n.$flags&2&&B.B(n)
n[0]=o
$.Fd()
n[0]=q.a1()
break
case"screenWindowWidth":o=q.a1()
n=$.hp()
n.$flags&2&&B.B(n)
n[0]=o
$.Fd()
break
case"tiles":a2.dx=q.a1()
a2.dy=q.a1()
j=J.v(q.a,q.d++)
a2.fr=j&15
a2.fx=D.c.P(j,4)&15
break
case"type":i=q.Q3()
if(i!=="deepscanline")if(i!=="deeptile")throw B.l(A.c4("EXR Invalid type: "+i))
break
default:break}}x=a2.w
a2.b=A.hN(a3,a3,u,0,C.bk,a2.x,a3,0,a2.d,a3,C.a7,x,!1)
for(x=new B.ce(a4,a4.r,a4.e,a4.$ti.h("ce<1>"));x.q();){w=x.d
o=a2.b
o.toString
n=a4.i(0,w)
n.toString
o.aK_(w,n)}if(a2.db){x={}
w=a2.r
w===$&&B.b()
a2.id=a2.aWl(w[0],w[2],w[1],w[3])
w=a2.r
a2.k1=a2.aWm(w[0],w[2],w[1],w[3])
if(a2.fr!==2)a2.k1=1
w=a2.id
w.toString
v=a2.r
a2.fy=a2.ajo(w,v[0],v[2],a2.dx,a2.fx)
v=a2.k1
v.toString
w=a2.r
a2.go=a2.ajo(v,w[1],w[3],a2.dy,a2.fx)
w=a2.aWj()
a2.k2=w
v=a2.dx
v.toString
v=w*v
a2.k3=v
a2.CW=A.cxb(a2.ax,a2,v,a2.dy)
x.a=x.b=0
v=a2.id
v.toString
w=a2.k1
w.toString
a2.ay=B.w3(v*w,new A.bai(x,a2),!0,y.bk)}else{x=a2.x
w=a2.ch=new Uint32Array(x+1)
for(o=v.length,n=a2.r,m=a2.w,h=0;h<o;++h){g=v[h]
l=g.d
l===$&&B.b()
k=g.f
k===$&&B.b()
f=D.c.hv(l*m,k)
for(l=g.r,e=0;e<x;++e){n===$&&B.b()
k=n[1]
l===$&&B.b()
if(D.c.aq(e+k,l)===0)w[e]=w[e]+f}}for(d=0,e=0;e<x;++e)d=Math.max(d,w[e])
x=A.cxb(a2.ax,a2,d,a3)
a2.CW=x
x=a2.cx=x.Pm()
w=a2.ch
v=w.length
o=new Uint32Array(v)
a2.cy=o
for(--v,a0=0,a1=0;a1<=v;++a1){if(D.c.aq(a1,x)===0)a0=0
o[a1]=a0
a0+=w[a1]}x=D.c.hv(a2.x+x,x)
a2.ay=B.a([new Uint32Array(x-1)],y.w)}},
aWl(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.Tw(w):u.SQ(w))+1
break
case 2:v=e-d+1
x=(u.fx===0?u.Tw(v):u.SQ(v))+1
break
default:throw B.l(A.c4("Unknown LevelMode format."))}return x},
aWm(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.Tw(w):u.SQ(w))+1
break
case 2:v=g-f+1
x=(u.fx===0?u.Tw(v):u.SQ(v))+1
break
default:throw B.l(A.c4("Unknown LevelMode format."))}return x},
Tw(d){var x
for(x=0;d>1;){++x
d=D.c.P(d,1)}return x},
SQ(d){var x,w
for(x=0,w=0;d>1;){if((d&1)!==0)w=1;++x
d=D.c.P(d,1)}return x+w},
aWj(){var x,w,v,u,t
for(x=this.c,w=x.length,v=0,u=0;u<w;++u){t=x[u].d
t===$&&B.b()
v+=t}return v},
ajo(d,e,f,g,h){var x,w,v,u,t,s,r=J.iV(d,y.p)
for(x=h===1,w=f-e+1,v=0;v<d;++v){u=D.c.ek(1,v)
t=D.c.hv(w,u)
if(x&&t*u<w)++t
s=Math.max(t,1)
g.toString
r[v]=D.c.hv(s+g-1,g)}return r}}
A.aqV.prototype={
bHP(d){var x,w,v,u,t,s=this
if(s.db)for(x=0;x<s.ay.length;++x)for(w=0;v=s.ay[x],w<v.length;++w){u=d.ad8()
v.$flags&2&&B.B(v)
v[w]=u}else{t=s.ay[0].length
for(x=0;x<t;++x){v=s.ay[0]
u=d.ad8()
v.$flags&2&&B.B(v)
v[x]=u}}}}
A.bhF.prototype={
aSW(d,e,f){var x,w,v,u=this,t=d.c.length,s=J.iV(t,y.bc)
for(x=0;x<t;++x)s[x]=new A.aM3()
u.y=s
w=u.w
w.toString
v=D.c.b8(w*u.x,2)
u.z=new Uint16Array(v)},
Pm(){return this.x},
rK(a4,a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
if(a7==null)a7=a3.c.w
if(a8==null)a8=a3.c.cx
x=a5+a7-1
w=a6+a8-1
v=a3.c
u=v.w
if(x>u)x=u-1
u=v.x
if(w>u)w=u-1
a3.a=x-a5+1
a3.b=w-a6+1
t=v.c
s=t.length
for(r=0,q=0;q<s;++q){p=t[q]
v=a3.y
v===$&&B.b()
o=v[q]
o.b=o.a=r
v=p.f
v===$&&B.b()
n=D.c.hv(a5,v)
m=D.c.hv(x,v)
v=n*v<a5?0:1
v=m-n+v
o.c=v
u=p.r
u===$&&B.b()
n=D.c.hv(a6,u)
m=D.c.hv(w,u)
l=n*u<a6?0:1
l=m-n+l
o.d=l
o.e=u
u=p.d
u===$&&B.b()
u=u/2|0
o.f=u
r+=v*l*u}k=a4.al()
j=a4.al()
if(j>=8192)throw B.l(A.c4("Error in header for PIZ-compressed data (invalid bitmap size)."))
i=new Uint8Array(8192)
if(k<=j){h=a4.jb(j-k+1)
g=h.c-h.d
for(f=k,q=0;q<g;++q,f=e){e=f+1
i[f]=J.v(h.a,h.d+q)}}d=new Uint16Array(65536)
a0=a3.biL(i,d)
A.cSG(a4,a4.a1(),a3.z,r)
for(q=0;q<s;++q){v=a3.y
v===$&&B.b()
o=v[q]
f=0
while(!0){v=o.f
v===$&&B.b()
if(!(f<v))break
u=a3.z
u.toString
l=o.a
l===$&&B.b()
a1=o.c
a1===$&&B.b()
a2=o.d
a2===$&&B.b()
A.cSJ(u,l+f,a1,v,a2,a1*v,a0);++f}}v=a3.z
v.toString
a3.aUQ(d,v,r)
v=a3.r
if(v==null){v=a3.w
v.toString
v=a3.r=A.qd(!1,v*a3.x+73728)}v.a=0
for(;a6<=w;++a6)for(q=0;q<s;++q){v=a3.y
v===$&&B.b()
o=v[q]
v=o.e
v===$&&B.b()
if(D.c.aq(a6,v)!==0)continue
v=o.c
v===$&&B.b()
u=o.f
u===$&&B.b()
a5=v*u
for(;a5>0;--a5){v=a3.r
v.toString
u=a3.z
u.toString
l=o.b
l===$&&B.b()
o.b=l+1
v.l6(u[l])}}v=a3.r
return J.da(D.A.gaj(v.c),0,v.a)},
Jn(d,e,f){return this.rK(d,e,f,null,null)},
aUQ(d,e,f){var x,w,v
for(x=e.$flags|0,w=0;w<f;++w){v=d[e[w]]
x&2&&B.B(e)
e[w]=v}},
biL(d,e){var x,w,v,u,t
for(x=e.$flags|0,w=0,v=0;v<65536;++v)if(v===0||(d[v>>>3]&1<<(v&7))>>>0!==0){u=w+1
x&2&&B.B(e)
e[w]=v
w=u}for(u=w;u<65536;u=t){t=u+1
x&2&&B.B(e)
e[u]=0}return w-1}}
A.aM3.prototype={}
A.bhG.prototype={
Pm(){return this.x},
rK(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=C.iV.Cv(a0.hK()),d=f.y
if(d==null){d=f.w
d.toString
d=f.y=A.qd(!1,f.x*d)}d.a=0
x=B.a([0,0,0,0],y.t)
w=new Uint32Array(1)
v=J.da(D.bq.gaj(w),0,null)
if(a3==null)a3=f.c.w
if(a4==null)a4=f.c.cx
u=a1+a3-1
t=a2+a4-1
d=f.c
s=d.w
if(u>s)u=s-1
s=d.x
if(t>s)t=s-1
f.a=u-a1+1
f.b=t-a2+1
d=d.c
r=d.length
for(q=a2,p=0;q<=t;++q)for(o=0;o<r;++o){n=d[o]
s=n.r
s===$&&B.b()
if(D.c.aq(a2,s)!==0)continue
s=n.f
s===$&&B.b()
m=D.c.hv(a1,s)
l=D.c.hv(u,s)
s=m*s<a1?0:1
k=l-m+s
w[0]=0
s=n.c
s===$&&B.b()
switch(s.a){case 0:x[0]=p
s=p+k
x[1]=s
s+=k
x[2]=s
p=s+k
for(j=0;j<k;++j){s=x[0]
x[0]=s+1
s=e[s]
i=x[1]
x[1]=i+1
i=e[i]
h=x[2]
x[2]=h+1
h=e[h]
w[0]=w[0]+((s<<24|i<<16|h<<8)>>>0)
for(g=0;g<4;++g)f.y.b0(v[g])}break
case 1:x[0]=p
s=p+k
x[1]=s
p=s+k
for(j=0;j<k;++j){s=x[0]
x[0]=s+1
s=e[s]
i=x[1]
x[1]=i+1
i=e[i]
w[0]=w[0]+((s<<8|i)>>>0)
for(g=0;g<2;++g)f.y.b0(v[g])}break
case 2:x[0]=p
s=p+k
x[1]=s
s+=k
x[2]=s
p=s+k
for(j=0;j<k;++j){s=x[0]
x[0]=s+1
s=e[s]
i=x[1]
x[1]=i+1
i=e[i]
h=x[2]
x[2]=h+1
h=e[h]
w[0]=w[0]+((s<<24|i<<16|h<<8)>>>0)
for(g=0;g<4;++g)f.y.b0(v[g])}break}}d=f.y
return J.da(D.A.gaj(d.c),0,d.a)},
Jn(d,e,f){return this.rK(d,e,f,null,null)}}
A.bhH.prototype={
Pm(){return 1},
rK(d,e,f,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.c,g=A.qd(!1,(h-d.d)*2)
if(a0==null)a0=i.c.w
if(a1==null)a1=i.c.cx
x=e+a0-1
w=f+a1-1
v=i.c
u=v.w
if(x>u)x=u-1
v=v.x
if(w>v)w=v-1
i.a=x-e+1
i.b=w-f+1
for(;v=d.d,v<h;){u=d.a
d.d=v+1
v=J.v(u,v)
u=$.nj()
u.$flags&2&&B.B(u)
u[0]=v
t=$.oo()[0]
if(t<0){s=-t
for(;r=s-1,s>0;s=r)g.b0(J.v(d.a,d.d++))}else for(s=t;r=s-1,s>=0;s=r)g.b0(J.v(d.a,d.d++))}q=J.da(D.A.gaj(g.c),0,g.a)
p=q.length
for(h=q.$flags|0,o=1;o<p;++o){v=q[o-1]
u=q[o]
h&2&&B.B(q)
q[o]=v+u-128}h=i.r
if(h==null||h.length!==p)h=i.r=new Uint8Array(p)
v=D.c.b8(p+1,2)
for(n=0,m=0;!0;v=j,n=k){if(m<p){h.toString
l=m+1
k=n+1
u=q[n]
h.$flags&2&&B.B(h)
h[m]=u}else break
if(l<p){m=l+1
j=v+1
h[l]=q[v]}else break}h.toString
return h},
Jn(d,e,f){return this.rK(d,e,f,null,null)},
j(d){return B.o(this.w)}}
A.aqW.prototype={
Pm(){return this.x},
rK(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=C.iV.Cv(d.hK())
if(g==null)g=l.c.w
if(h==null)h=l.c.cx
x=e+g-1
w=f+h-1
v=l.c
u=v.w
if(x>u)x=u-1
v=v.x
if(w>v)w=v-1
l.a=x-e+1
l.b=w-f+1
t=k.length
for(v=k.$flags|0,s=1;s<t;++s){u=k[s-1]
r=k[s]
v&2&&B.B(k)
k[s]=u+r-128}v=l.y
if(v==null||v.length!==t)v=l.y=new Uint8Array(t)
u=D.c.b8(t+1,2)
for(q=0,p=0;!0;u=m,q=n){if(p<t){v.toString
o=p+1
n=q+1
r=k[q]
v.$flags&2&&B.B(v)
v[p]=r}else break
if(o<t){p=o+1
m=u+1
v[o]=k[u]}else break}v.toString
return v},
Jn(d,e,f){return this.rK(d,e,f,null,null)},
j(d){return B.o(this.w)}}
A.bag.prototype={
kc(d){var x=this.a
if(x==null)return null
return x.c[d].b},
nz(d,e,f){var x=new A.bah(B.a([],y.m))
x.aSC(e)
this.a=x
return this.kc(0)}}
A.a_a.prototype={
by9(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.b,w=this.d,v=-1,u=-1,t=0;t<x;++t){s=w.nd(t)
r=w.nb(t)
q=w.na(t)
p=w.or(t)
if(s===d&&r===e&&q===f&&p===g)return t
o=d-s
n=e-r
m=f-q
l=g-p
k=o*o+n*n+m*m+l*l
if(u===-1){u=t
v=k}else if(k<v){u=t
v=k}}return u},
aeY(){var x,w,v,u,t,s,r,q=this
if(q.c==null)return q.d
x=q.d
w=x.a
v=new A.uh(new Uint8Array(w*4),w,4)
for(u=0;u<w;++u){t=x.nd(u)
s=x.nb(u)
r=x.na(u)
v.RM(u,t,s,r,u===q.c?0:255)}return v}}
A.a_b.prototype={
aSG(d){var x,w,v,u,t,s,r=this
r.a=d.al()
r.b=d.al()
r.c=d.al()
r.d=d.al()
x=d.cq()
r.e=(x&64)!==0
if((x&128)!==0){r.f=A.cxK(D.c.ek(1,(x&7)+1))
for(w=0;v=r.f,w<v.b;++w){u=J.v(d.a,d.d++)
t=J.v(d.a,d.d++)
s=J.v(d.a,d.d++)
v.d.pi(w,u,t,s)}}r.x=d.d-d.b}}
A.aqX.prototype={}
A.apy.prototype={}
A.be_.prototype={
ow(d){var x,w,v,u,t,s,r,q,p,o,n=this
n.f=A.cV(d,!1,null,0)
n.a=new A.apy(B.a([],y.b))
if(!n.amy())return null
try{for(;u=n.f,t=u.d,t<u.c;){s=u.a
u.d=t+1
x=J.v(s,t)
switch(x){case 44:w=n.asD()
if(w==null){u=n.a
return u}u=w
u.r=n.e
u.w=n.c
if(n.b!==0){if(w.f==null&&n.a.e!=null){u=n.a.e
t=u.a
s=u.b
r=u.c
u=u.d
w.f=new A.a_a(t,s,r,new A.uh(new Uint8Array(B.bV(u.c)),u.a,u.b))}if(w.f!=null)w.f.c=n.d}n.a.r.push(w)
break
case 33:u=n.f
v=J.v(u.a,u.d++)
if(J.m(v,255)){u=n.f
if(u.jc(J.v(u.a,u.d++))==="NETSCAPE2.0"){q=J.v(u.a,u.d++)
p=J.v(u.a,u.d++)
if(q===3&&p===1)n.r=u.al()}else n.VC()}else if(J.m(v,249)){u=n.f
u.toString
n.bhj(u)}else n.VC()
break
case 59:u=n.a
return u
default:break}}}catch(o){}return n.a},
bhj(d){var x,w,v,u=this
d.cq()
x=d.cq()
u.e=d.al()
u.d=d.cq()
d.cq()
u.c=D.c.P(x,2)&7
u.b=x&1
w=d.Sd(1,0)
if(J.v(w.a,w.d)===44){++d.d
v=u.asD()
if(v==null)return
v.r=u.e
v.w=u.c
if(u.b!==0){w=v.f
if(w==null&&u.a.e!=null){w=u.a.e
w.toString
w=v.f=A.cTK(w)}if(w!=null)w.c=u.d}u.a.r.push(v)}},
kc(d){var x,w,v,u=this,t=u.f
if(t==null||u.a==null)return null
x=u.a.r
w=x.length
if(d>=w)return null
v=x[d]
t.toString
x=v.x
x===$&&B.b()
t.d=x
return u.aYK(v)},
nz(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null
if(a5.ow(a8)==null)return a6
x=a5.a.r.length
if(x===1)return a5.kc(0)
for(x=y.p,w=a6,v=w,u=0;t=a5.a.r,u<t.length;++u){a9=t[u]
s=a5.kc(u)
if(s==null)return a6
s.y=a9.r*10
if(v==null||w==null){s.r=a5.r
w=s
v=w
continue}t=s.a
r=t==null
q=r?a6:t.a
if(q==null)q=0
p=w.a
o=p==null
n=o?a6:p.a
m=!1
if(q===(n==null?0:n)){t=r?a6:t.b
if(t==null)t=0
r=o?a6:p.b
if(t===(r==null?0:r)){t=a9.a
t===$&&B.b()
if(t===0){t=a9.b
t===$&&B.b()
t=t===0&&a9.w===2}else t=m}else t=m}else t=m
if(t){v.nt(s)
w=s
continue}l=a9.f
if(!(l!=null)){t=a5.a.e
t.toString
l=t}t=o?a6:p.a
if(t==null)t=0
r=o?a6:p.b
if(r==null)r=0
k=A.hN(a6,a6,C.a7,0,C.bk,r,a6,0,1,l.aeY(),C.a7,t,!1)
t=a9.w
if(t===2){t=a5.a.c.a
t=!D.A.gU(t)?t[0]:0
r=l.d
j=r.nd(t)
i=r.nb(t)
h=r.na(t)
g=t===l.c?0:255
t=new Uint8Array(4)
t[0]=j
t[1]=i
t[2]=h
t[3]=g
r=k.a
if(r!=null)r.nv(0,new A.xL(t))}else if(t!==3)if(a9.f!=null){t=w.a
t=t==null?a6:t.geP()
t.toString
f=B.I(x,x)
for(r=l.b,e=0;e<r;++e)f.m(0,e,l.by9(t.nd(e),t.nb(e),t.na(e),t.or(e)))
t=k.a
d=t==null?a6:J.hC(t.gaj(t))
if(d==null){t=k.a
t=t==null?a6:t.gaj(t)
if(t==null)t=D.A.gaj(new Uint8Array(0))
d=J.hC(t)}t=w.a
a0=t==null?a6:J.hC(t.gaj(t))
if(a0==null){t=w.a
t=t==null?a6:t.gaj(t)
if(t==null)t=D.A.gaj(new Uint8Array(0))
a0=J.hC(t)}for(a1=d.length,t=d.$flags|0,a2=0;a2<a1;++a2){a3=f.i(0,a0[a2])
if(a3!==-1){a3.toString
t&2&&B.B(d)
d[a2]=a3}}}k.y=s.y
for(t=s.a,t=t.ga3(t);t.q();){a4=t.gL(t)
if(a4.gaG(a4)!==0){r=a4.gn8(a4)
q=a9.a
q===$&&B.b()
p=a4.gnT(a4)
o=a9.b
o===$&&B.b()
k.AO(r+q,p+o,a4)}}v.nt(k)
w=k}return v},
asD(){var x,w=this.f
if(w.d>=w.c)return null
x=new A.aqX()
x.aSG(w);++this.f.d
this.VC()
return x},
aYK(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.w==null){n.w=new Uint8Array(256)
n.x=new Uint8Array(4095)
n.y=new Uint8Array(4096)
n.z=new Uint32Array(4096)}x=n.Q=n.f.cq()
w=D.c.eR(1,x)
n.dy=w;++w
n.dx=w
n.db=w+1;++x
n.cy=x
n.cx=D.c.eR(1,x)
n.ay=0
n.CW=4098
n.at=n.ax=0
x=n.w
x.toString
x.$flags&2&&B.B(x)
x[0]=0
x=n.z
x.toString
D.bq.lW(x,0,4096,4098)
x=d.c
x===$&&B.b()
w=d.d
w===$&&B.b()
v=d.a
v===$&&B.b()
u=n.a
if(v+x<=u.a){v=d.b
v===$&&B.b()
v=v+w>u.b}else v=!0
if(v)return m
t=d.f
if(!(t!=null)){v=u.e
v.toString
t=v}n.as=x*w
s=A.hN(m,m,C.a7,0,C.bk,w,m,0,1,t.aeY(),C.a7,x,!1)
r=new Uint8Array(x)
x=d.e
x===$&&B.b()
if(x){x=d.b
x===$&&B.b()
for(w=x+w,q=0,p=0;q<4;++q)for(o=x+C.aoU[q];o<w;o+=C.asx[q],++p){if(!n.amA(r))return s
n.auk(s,o,t,r)}}else for(o=0;o<w;++o){if(!n.amA(r))return s
n.auk(s,o,t,r)}return s},
auk(d,e,f,g){var x,w,v,u=g.length
for(x=0;x<u;++x){w=g[x]
v=d.a
if(v!=null)v.fe(x,e,w,0,0)}},
amy(){var x,w,v,u,t,s=this,r=s.f.jc(6)
if(r!=="GIF87a"&&r!=="GIF89a")return!1
x=s.a
x.toString
x.a=s.f.al()
x=s.a
x.toString
x.b=s.f.al()
w=s.f.cq()
x=s.a
x.toString
x.c=new A.xL(new Uint8Array(B.bV(B.a([s.f.cq()],y.t))));++s.f.d
if((w&128)!==0){x=s.a
x.toString
x.e=A.cxK(D.c.ek(1,(w&7)+1))
for(v=0;v<s.a.e.b;++v){x=s.f
u=J.v(x.a,x.d++)
x=s.f
t=J.v(x.a,x.d++)
x=s.f
w=J.v(x.a,x.d++)
s.a.e.d.pi(v,u,t,w)}}s.a.toString
return!0},
amA(d){var x=this,w=x.as
w.toString
x.as=w-d.length
if(!x.aYY(d))return!1
if(x.as===0)x.VC()
return!0},
VC(){var x,w,v,u=this.f
if(u.d>=u.c)return!0
x=u.cq()
while(!0){if(x!==0){u=this.f
u=u.d<u.c}else u=!1
if(!u)break
u=this.f
w=u.d+=x
if(w>=u.c)return!0
v=u.a
u.d=w+1
x=J.v(v,w)}return!0},
aYY(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.ay
if(k>4095)return!1
x=d.length
w=0
if(k!==0){v=d.$flags|0
while(!0){if(!(k!==0&&w<x))break
u=w+1
t=l.x
t===$&&B.b()
k=l.ay=k-1
t=t[k]
v&2&&B.B(d)
d[w]=t
w=u}}for(k=d.$flags|0;w<x;){s=l.ch=l.aYX()
if(s==null)return!1
v=l.dx
if(s===v)return!1
t=l.dy
if(s===t){for(t=l.z,r=0;r<=4095;++r){t.toString
t.$flags&2&&B.B(t)
t[r]=4098}l.db=v+1
v=l.Q+1
l.cy=v
l.cx=D.c.eR(1,v)
l.CW=4098}else{if(s<t){u=w+1
k&2&&B.B(d)
d[w]=s
w=u}else{v=l.z
if(v[s]===4098){q=l.db-2
if(s===q){s=l.CW
p=l.y
p===$&&B.b()
o=l.x
o===$&&B.b()
n=l.ay++
t=l.a43(v,s,t)
o.$flags&2&&B.B(o)
o[n]=t
p.$flags&2&&B.B(p)
p[q]=t}else return!1}r=0
while(!0){m=r+1
if(!(r<=4095&&s>l.dy&&s<=4095))break
v=l.x
v===$&&B.b()
t=l.ay++
q=l.y
q===$&&B.b()
q=q[s]
v.$flags&2&&B.B(v)
v[t]=q
s=l.z[s]
r=m}if(m>=4095||s>4095)return!1
v=l.x
v===$&&B.b()
t=l.ay
q=l.ay=t+1
v.$flags&2&&B.B(v)
v[t]=s
t=q
while(!0){if(!(t!==0&&w<x))break
u=w+1
t=l.ay=t-1
q=v[t]
k&2&&B.B(d)
d[w]=q
w=u}}v=l.CW
if(v!==4098&&l.z[l.db-2]===4098){t=l.z
t.toString
q=l.db-2
t.$flags&2&&B.B(t)
t[q]=v
p=l.ch
o=l.y
n=l.dy
if(p===q){o===$&&B.b()
v=l.a43(t,v,n)
o.$flags&2&&B.B(o)
o[q]=v}else{o===$&&B.b()
p.toString
v=l.a43(t,p,n)
o.$flags&2&&B.B(o)
o[q]=v}}v=l.ch
v.toString
l.CW=v}}return!0},
aYX(){var x,w,v,u,t=this
if(t.cy>12)return null
for(;x=t.ax,w=t.cy,x<w;){x=t.aVg()
x.toString
w=t.at
v=t.ax
t.at=(w|D.c.eR(x,v))>>>0
t.ax=v+8}v=t.at
u=C.atc[w]
t.at=D.c.h2(v,w)
t.ax=x-w
x=t.db
if(x<4097){++x
t.db=x
x=x>t.cx&&w<12}else x=!1
if(x){t.cx=t.cx<<1>>>0
t.cy=w+1}return v&u},
a43(d,e,f){var x,w,v=0
while(!0){if(e>f){x=v+1
w=v<=4095
v=x}else w=!1
if(!w)break
if(e>4095)return 4098
e=d[e]}return e},
aVg(){var x,w,v=this,u=v.w,t=u[0],s=u.$flags|0
if(t===0){t=v.f.cq()
s&2&&B.B(u)
u[0]=t
u=v.w
t=u[0]
if(t===0)return null
D.A.ib(u,1,1+t,v.f.jb(t).hK())
u=v.w
x=u[1]
u.$flags&2&&B.B(u)
u[1]=2
u[0]=u[0]-1}else{w=u[1]
s&2&&B.B(u)
u[1]=w+1
x=u[w]
u[0]=t-1}return x}}
A.OK.prototype={
J(){return"IcoType."+this.b}}
A.bgp.prototype={}
A.aqk.prototype={}
A.bgn.prototype={
gb2(d){return D.c.b8(A.Fv.prototype.gb2.call(this,0),2)},
gOF(){return!(this.d===40&&this.f===32)&&A.Fv.prototype.gOF.call(this)}}
A.bgo.prototype={
nz(d,e,f){var x,w,v,u=this,t=A.cV(e,!1,null,0)
u.a=t
x=u.b=A.cy3(t)
if(x==null)return null
t=x.e.length
if(t===1)return u.kc(0)
for(w=null,v=0;v<u.b.e.length;++v){f=u.kc(v)
if(f==null)continue
if(w==null){f.w=C.bk
w=f}else w.nt(f)}return w},
kc(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=this.a
if(a7!=null){x=this.b
x=x==null||a8>=x.d}else x=!0
if(x)return a6
w=this.b.e[a8]
x=a7.a
a7=a7.b+w.e
v=w.d
u=J.cmx(x,a7,a7+v)
t=new A.awM(A.cyy())
y.D.a(u)
if(t.Ia(u))return t.dk(0,u)
s=A.qd(!1,14)
s.l6(19778)
s.iZ(v)
s.iZ(0)
s.iZ(0)
a7=A.cV(u,!1,a6,0)
x=A.cv0(A.cV(J.da(D.A.gaj(s.c),0,s.a),!1,a6,0))
v=a7.d
r=a7.a1()
q=a7.a1()
p=$.hp()
p.$flags&2&&B.B(p)
p[0]=q
q=$.kB()
o=q[0]
p[0]=a7.a1()
q=q[0]
n=a7.al()
m=a7.al()
l=C.QL[a7.a1()]
a7.a1()
p[0]=a7.a1()
p[0]=a7.a1()
p=a7.a1()
a7.a1()
k=new A.bgn(x,o,q,r,n,m,l,p,v)
k.ahZ(a7,x)
if(r!==40&&n!==1)return a6
j=p===0&&m<=8?40+4*D.c.ek(1,m):40+4*p
x.b=j
s.a-=4
s.iZ(j)
i=A.cV(u,!1,a6,0)
h=new A.b6M(!0)
h.a=i
h.b=k
g=h.kc(0)
if(m>=32)return g
f=32-D.c.aq(o,32)
e=D.c.b8(f===32?o:o+f,8)
for(a7=1/q<0,x=q<0,q=q===0,d=0;d<D.c.b8(A.Fv.prototype.gb2.call(k,0),2);++d){if(!(q?a7:x))a0=d
else{v=g.a
v=v==null?a6:v.b
a0=(v==null?0:v)-1-d}a1=i.jg(e)
i.d=i.d+(a1.c-a1.d)
v=g.a
a2=v==null?a6:v.ed(0,a0,a6)
if(a2==null)a2=new A.fe()
for(a3=0;a3<o;){a4=J.v(a1.a,a1.d++)
a5=7
while(!0){if(!(a5>-1&&a3<o))break
if((a4&D.c.eR(1,a5))>>>0!==0)a2.saG(0,0)
a2.q();++a3;--a5}}}return g}}
A.ajW.prototype={}
A.H2.prototype={}
A.H3.prototype={}
A.a_C.prototype={
gp(d){return this.a}}
A.bi5.prototype={}
A.C0.prototype={}
A.bi7.prototype={
QJ(d){var x,w,v,u,t,s=this,r=A.cV(d,!0,null,0)
s.a=r
x=r.Sd(2,0)
if(J.v(x.a,x.d)!==255||J.v(x.a,x.d+1)!==216)return!1
if(s.FK()!==216)return!1
w=s.FK()
v=!1
u=!1
while(!0){if(w!==217){r=s.a
r=r.d<r.c}else r=!1
if(!r)break
t=s.a.al()
if(t<2)break
r=s.a
r.d=r.d+(t-2)
switch(w){case 192:case 193:case 194:v=!0
break
case 218:u=!0
break}w=s.FK()}return v&&u},
vn(d,e){var x,w,v,u,t,s,r,q,p=this
p.a=A.cV(e,!0,null,0)
p.bhc()
if(p.x.length!==1)throw B.l(A.c4("Only single frame JPEGs supported"))
for(x=p.Q,w=0;v=p.d,u=v.z,w<u.length;++w){t=v.y.i(0,u[w])
v=t.a
u=p.d
s=u.f
r=t.b
q=u.r
u=p.aVo(u,t)
v=v===1&&s===2?1:0
x.push(new A.ajW(u,v,r===1&&q===2?1:0))}},
bhc(){var x,w,v,u,t,s=this
if(s.FK()!==216)throw B.l(A.c4("Start Of Image marker not found."))
x=s.FK()
while(!0){if(x!==217){w=s.a
w===$&&B.b()
w=w.d<w.c}else w=!1
if(!w)break
w=s.a
w===$&&B.b()
v=w.al()
if(v<2)B.a6(A.c4("Invalid Block"))
w=s.a
u=w.jg(v-2)
w.d=w.d+(u.c-u.d)
switch(x){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:s.bhd(x,u)
break
case 219:s.bhg(u)
break
case 192:case 193:case 194:s.bhi(x,u)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw B.l(A.c4("Unhandled frame type "+D.c.lG(x,16)))
case 196:s.bhf(u)
break
case 221:s.e=u.al()
break
case 218:s.bhu(u)
break
case 255:w=s.a
if(J.v(w.a,w.d)!==255)--s.a.d
break
default:w=s.a
t=!1
if(J.v(w.a,w.d+-3)===255){w=s.a
if(J.v(w.a,w.d+-2)>=192){w=s.a
w=J.v(w.a,w.d+-2)<=254}else w=t}else w=t
if(w){s.a.d-=3
break}if(x!==0)throw B.l(A.c4("Unknown JPEG marker "+D.c.lG(x,16)))
break}x=s.FK()}},
FK(){var x,w=this,v=w.a
v===$&&B.b()
if(v.d>=v.c)return 0
do{do{x=w.a.cq()
if(x!==255){v=w.a
v=v.d<v.c}else v=!1}while(v)
v=w.a
if(v.d>=v.c)return x
do{x=w.a.cq()
if(x===255){v=w.a
v=v.d<v.c}else v=!1}while(v)
if(x===0){v=w.a
v=v.d<v.c}else v=!1}while(v)
return x},
bhh(d){if(d.a1()!==1165519206)return
if(d.al()!==0)return
this.r.vn(0,d)},
bhd(d,e){var x,w,v,u,t=this,s=e
if(d===224){x=s
w=!1
if(J.v(x.a,x.d)===74){x=s
if(J.v(x.a,x.d+1)===70){x=s
if(J.v(x.a,x.d+2)===73){x=s
if(J.v(x.a,x.d+3)===70){x=s
x=J.v(x.a,x.d+4)===0}else x=w}else x=w}else x=w}else x=w
if(x){x=new A.bib()
w=s
J.v(w.a,w.d+5)
w=s
J.v(w.a,w.d+6)
w=s
J.v(w.a,w.d+7)
w=s
J.v(w.a,w.d+8)
w=s
J.v(w.a,w.d+9)
w=s
J.v(w.a,w.d+10)
w=s
J.v(w.a,w.d+11)
w=s
w=J.v(w.a,w.d+12)
x.f=w
v=s
v=J.v(v.a,v.d+13)
x.r=v
t.b=x
s.Sd(14+3*w*v,14)}}else if(d===225)t.bhh(s)
else if(d===238){x=s
w=!1
if(J.v(x.a,x.d)===65){x=s
if(J.v(x.a,x.d+1)===100){x=s
if(J.v(x.a,x.d+2)===111){x=s
if(J.v(x.a,x.d+3)===98){x=s
if(J.v(x.a,x.d+4)===101){x=s
x=J.v(x.a,x.d+5)===0}else x=w}else x=w}else x=w}else x=w}else x=w
if(x){t.c=new A.bi5()
x=s
J.v(x.a,x.d+6)
t.c.toString
x=s
J.v(x.a,x.d+7)
x=s
J.v(x.a,x.d+8)
t.c.toString
x=s
J.v(x.a,x.d+9)
x=s
J.v(x.a,x.d+10)
x=t.c
x.toString
w=s
x.d=J.v(w.a,w.d+11)}}else if(d===254)try{s.bHT()}catch(u){B.b_(u)}},
bhg(d){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=this.w;v=d.d,u=v<x,u;){u=d.a
d.d=v+1
t=J.v(u,v)
s=D.c.P(t,4)
t&=15
if(t>=4)throw B.l(A.c4("Invalid number of quantization tables"))
v=w[t]
if(v==null){v=new Int16Array(64)
w[t]=v}for(u=s!==0,r=0;r<64;++r){q=u?d.al():J.v(d.a,d.d++)
p=C.vE[r]
v.$flags&2&&B.B(v)
v[p]=q}}if(u)throw B.l(A.c4("Bad length for DQT block"))},
bhi(d,e){var x,w,v,u,t,s,r,q=this
if(q.d!=null)throw B.l(A.c4("Duplicate JPG frame data found."))
x=q.d=new A.ar9(B.I(y.p,y.c),B.a([],y.t))
x.b=d===194
x.c=e.cq()
x=q.d
x.toString
x.d=e.al()
x=q.d
x.toString
x.e=e.al()
w=e.cq()
for(x=q.w,v=0;v<w;++v){u=J.v(e.a,e.d++)
t=J.v(e.a,e.d++)
s=D.c.P(t,4)
r=J.v(e.a,e.d++)
q.d.z.push(u)
q.d.y.m(0,u,new A.C0(s&15,t&15,x,r))}q.d.bGI()
q.x.push(q.d)},
bhf(d){var x,w,v,u,t,s,r,q,p,o,n,m
for(x=d.c,w=this.z,v=this.y;u=d.d,u<x;){t=d.a
d.d=u+1
s=J.v(t,u)
r=new Uint8Array(16)
for(q=0,p=0;p<16;++p){r[p]=J.v(d.a,d.d++)
q+=r[p]}o=d.jg(q)
d.d=d.d+(o.c-o.d)
n=o.hK()
if((s&16)!==0){s-=16
m=v}else m=w
if(m.length<=s)D.b.su(m,s+1)
m[s]=this.aVB(r,n)}},
bhu(d){var x,w,v,u,t,s,r,q=this,p=d.cq()
if(p<1||p>4)throw B.l(A.c4("Invalid SOS block"))
x=B.w3(p,new A.bi8(q,d),!0,y.c)
w=d.cq()
v=d.cq()
u=d.cq()
t=D.c.P(u,4)
s=q.a
s===$&&B.b()
r=q.d
t=new A.ara(s,r,x,q.e,w,v,t&15,u&15)
s=r.w
s===$&&B.b()
t.f=s
t.r=r.b
t.o9(0)},
aVB(d,e){var x,w,v,u,t,s,r,q,p,o,n=B.a([],y.C),m=16
while(!0){if(!(m>0&&d[m-1]===0))break;--m}x=y.aH
n.push(new A.TZ(B.a([],x)))
w=n[0]
for(v=0,u=0;u<m;){for(t=0;t<d[u];++t){w=n.pop()
s=w.a
r=s.length
q=w.b
if(r<=q)D.b.su(s,q+1)
s[w.b]=new A.a_C(e[v])
for(;s=w.b,s>0;)w=n.pop()
w.b=s+1
n.push(w)
for(;n.length<=u;w=p){s=B.a([],x)
p=new A.TZ(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.su(r,o+1)
r[w.b]=new A.H3(s)}++v}++u
if(u<m){s=B.a([],x)
p=new A.TZ(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.su(r,o+1)
r[w.b]=new A.H3(s)
w=p}}return n[0].a},
aVo(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.e
d===$&&B.b()
x=a1.f
x===$&&B.b()
w=d<<3>>>0
v=new Int32Array(64)
u=new Uint8Array(64)
t=B.bK(x*8,null,!1,y.ac)
for(s=a1.c,r=a1.d,q=0,p=0;p<x;++p){o=p<<3>>>0
for(n=0;n<8;++n,q=m){m=q+1
t[q]=new Uint8Array(w)}for(l=0;l<d;++l){k=s[r]
k.toString
j=a1.r
j===$&&B.b()
A.ddp(k,j[p][l],u,v)
i=l<<3>>>0
for(h=0,g=0;g<8;++g){f=t[o+g]
for(n=0;n<8;++n,h=e){f.toString
e=h+1
k=u[h]
f.$flags&2&&B.B(f)
f[i+n]=k}}}}return t}}
A.TZ.prototype={}
A.ar9.prototype={
bGI(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.y,w=B.p(x).h("ce<1>"),v=new B.ce(x,x.r,x.e,w);v.q();){u=x.i(0,v.d)
g.f=Math.max(g.f,u.a)
g.r=Math.max(g.r,u.b)}v=g.e
v.toString
g.w=D.d.f7(v/8/g.f)
v=g.d
v.toString
g.x=D.d.f7(v/8/g.r)
for(w=new B.ce(x,x.r,x.e,w),v=y.h,t=y.bp;w.q();){s=x.i(0,w.d)
s.toString
r=g.e
r.toString
q=s.a
p=D.d.f7(D.d.f7(r/8)*q/g.f)
r=g.d
r.toString
o=s.b
n=D.d.f7(D.d.f7(r/8)*o/g.r)
m=g.w*q
l=g.x*o
k=J.iV(l,t)
for(j=0;j<l;++j){i=J.iV(m,v)
for(h=0;h<m;++h)i[h]=new Int32Array(64)
k[j]=i}s.e=p
s.f=n
s.r=k}}}
A.bib.prototype={}
A.ara.prototype={
o9(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.y,f=g.length,e=h.r
e.toString
if(e)if(h.Q===0)x=h.at===0?h.gaYD():h.gaYF()
else x=h.at===0?h.gaYu():h.gaYw()
else x=h.gaYA()
e=f===1
if(e){w=g[0]
v=w.e
v===$&&B.b()
w=w.f
w===$&&B.b()
u=v*w}else{w=h.f
w===$&&B.b()
v=h.b.x
v===$&&B.b()
u=w*v}w=h.z
if(w==null||w===0)h.z=u
for(w=h.a,t=0;t<u;){for(s=0;s<f;++s)g[s].y=0
h.CW=0
if(e){r=g[0]
q=0
while(!0){v=h.z
v.toString
if(!(q<v))break
v=r.e
v===$&&B.b()
p=D.c.hv(t,v)
o=D.c.aq(t,v)
v=r.r
v===$&&B.b()
x.$2(r,v[p][o]);++t;++q}}else{q=0
while(!0){v=h.z
v.toString
if(!(q<v))break
for(s=0;s<f;++s){r=g[s]
n=r.a
m=r.b
for(l=0;l<m;++l)for(k=0;k<n;++k)h.aYL(r,x,t,l,k)}++t;++q}}h.ch=0
j=J.v(w.a,w.d)
i=J.v(w.a,w.d+1)
if(j===255)if(i>=208&&i<=215)w.d+=2
else break}},
BQ(){var x,w=this,v=w.ch
if(v>0){--v
w.ch=v
return D.c.nY(w.ay,v)&1}v=w.a
if(v.d>=v.c)return null
x=v.cq()
w.ay=x
if(x===255)if(v.cq()!==0)return null
w.ch=7
return D.c.P(w.ay,7)&1},
LD(d){var x,w=new A.H3(d)
for(;x=this.BQ(),x!=null;){if(w instanceof A.H3)w=w.a[x]
if(w instanceof A.a_C)return w.a}return null},
a5R(d){var x,w
for(x=0;d>0;){w=this.BQ()
if(w==null)return null
x=(x<<1|w)>>>0;--d}return x},
M2(d){var x
if(d==null)return 0
if(d===1)return this.BQ()===1?1:-1
x=this.a5R(d)
if(x==null)return 0
if(x>=D.c.eR(1,d-1))return x
return x+D.c.ek(-1,d)+1},
aYB(d,e){var x,w,v,u,t,s,r=this,q=d.w
q===$&&B.b()
x=r.LD(q)
w=x===0?0:r.M2(x)
q=d.y
q===$&&B.b()
q+=w
d.y=q
e.$flags&2&&B.B(e)
e[0]=q
for(v=1;v<64;){q=d.x
q===$&&B.b()
u=r.LD(q)
if(u==null)break
t=u&15
s=u>>>4
if(t===0){if(s<15)break
v+=16
continue}v+=s
t=r.M2(t)
e[C.vE[v]]=t;++v}},
aYE(d,e){var x,w,v=d.w
v===$&&B.b()
x=this.LD(v)
w=x===0?0:D.c.ek(this.M2(x),this.ax)
v=d.y
v===$&&B.b()
v+=w
d.y=v
e.$flags&2&&B.B(e)
e[0]=v},
aYG(d,e){var x=e[0],w=this.BQ()
w.toString
w=D.c.ek(w,this.ax)
e.$flags&2&&B.B(e)
e[0]=(x|w)>>>0},
aYv(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.CW
if(o>0){p.CW=o-1
return}x=p.Q
w=p.as
for(o=p.ax,v=e.$flags|0;x<=w;){u=d.x
u===$&&B.b()
u=p.LD(u)
u.toString
t=u&15
s=u>>>4
if(t===0){if(s<15){o=p.a5R(s)
o.toString
p.CW=o+D.c.ek(1,s)-1
break}x+=16
continue}x+=s
r=C.vE[x]
u=p.M2(t)
q=D.c.ek(1,o)
v&2&&B.B(e)
e[r]=u*q;++x}},
aYx(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.Q,n=p.as
$label0$1:for(x=p.ax,w=e.$flags|0,v=0;o<=n;){u=C.vE[o]
t=p.cx
switch(t){case 0:t=d.x
t===$&&B.b()
s=p.LD(t)
if(s==null)throw B.l(A.c4("Invalid progressive encoding"))
r=s&15
v=s>>>4
if(r===0)if(v<15){t=p.a5R(v)
t.toString
p.CW=t+D.c.ek(1,v)
p.cx=4}else{p.cx=1
v=16}else{if(r!==1)throw B.l(A.c4("invalid ACn encoding"))
p.cy=p.M2(r)
p.cx=v!==0?2:3}continue $label0$1
case 1:case 2:q=e[u]
if(q!==0){t=p.BQ()
t.toString
t=D.c.ek(t,x)
w&2&&B.B(e)
e[u]=q+t}else{--v
if(v===0)p.cx=t===2?3:0}break
case 3:t=e[u]
if(t!==0){q=p.BQ()
q.toString
q=D.c.ek(q,x)
w&2&&B.B(e)
e[u]=t+q}else{t=p.cy
t===$&&B.b()
t=D.c.ek(t,x)
w&2&&B.B(e)
e[u]=t
p.cx=0}break
case 4:t=e[u]
if(t!==0){q=p.BQ()
q.toString
q=D.c.ek(q,x)
w&2&&B.B(e)
e[u]=t+q}break}++o}if(p.cx===4)if(--p.CW===0)p.cx=0},
aYL(d,e,f,g,h){var x,w,v=this.f
v===$&&B.b()
x=D.c.hv(f,v)*d.b+g
w=D.c.aq(f,v)*d.a+h
v=d.r
v===$&&B.b()
if(x>=v.length)return
v=v[x]
if(w>=v.length)return
e.$2(d,v[w])}}
A.ar8.prototype={
nz(d,e,f){var x=A.cyM()
x.vn(0,e)
if(x.x.length!==1)throw B.l(A.c4("only single frame JPEGs supported"))
return A.dbV(x)},
dk(d,e){return this.nz(0,e,null)}}
A.bi6.prototype={
J(){return"JpegChroma."+this.b}}
A.bi9.prototype={
aKz(d){d=D.d.C(D.c.b9(d,1,100))
if(this.at===d)return
this.b9F(d<50?D.d.fX(5000/d):D.c.fX(200-d*2))
this.at=d},
bxb(b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=A.qd(!0,8192)
a8.z_(a9,216)
a8.z_(a9,224)
a9.l6(16)
a9.b0(74)
a9.b0(70)
a9.b0(73)
a9.b0(70)
a9.b0(0)
a9.b0(1)
a9.b0(1)
a9.b0(0)
a9.l6(1)
a9.l6(1)
a9.b0(0)
a9.b0(0)
a8.bpc(a9,b0.gwR())
a8.bpg(a9)
x=b0.gd0(0)
w=b0.gb2(0)
a8.z_(a9,192)
a9.l6(17)
a9.b0(8)
a9.l6(w)
a9.l6(x)
a9.b0(3)
a9.b0(1)
x=b1===C.JU
a9.b0(x?17:34)
a9.b0(0)
a9.b0(2)
a9.b0(17)
a9.b0(1)
a9.b0(3)
a9.b0(17)
a9.b0(1)
a8.bpf(a9)
a8.z_(a9,218)
a9.l6(12)
a9.b0(3)
a9.b0(1)
a9.b0(0)
a9.b0(2)
a9.b0(17)
a9.b0(3)
a9.b0(17)
a9.b0(0)
a9.b0(63)
a9.b0(0)
a8.ax=0
a8.ay=7
v=b0.gd0(0)
u=b0.gb2(0)
if(x){t=new Float32Array(64)
s=new Float32Array(64)
r=new Float32Array(64)
for(x=a8.c,w=a8.d,q=0,p=0,o=0,n=0;n<u;n+=8)for(m=0;m<v;m+=8){a8.KF(b0,m,n,v,u,t,s,r)
l=a8.e
k=a8.r
k===$&&B.b()
q=a8.wh(a9,t,x,q,l,k)
k=a8.f
l=a8.w
l===$&&B.b()
p=a8.wh(a9,s,w,p,k,l)
o=a8.wh(a9,r,w,o,a8.f,a8.w)}}else{x=y.z
t=J.kp(4,x)
for(j=0;j<4;++j)t[j]=new Float32Array(64)
s=J.kp(4,x)
for(j=0;j<4;++j)s[j]=new Float32Array(64)
r=J.kp(4,x)
for(j=0;j<4;++j)r[j]=new Float32Array(64)
i=new Float32Array(64)
h=new Float32Array(64)
for(x=a8.c,w=a8.d,q=0,p=0,o=0,n=0;n<u;n+=16)for(l=n+8,m=0;m<v;m+=16){k=t[0]
g=s[0]
f=r[0]
a8.KF(b0,m,n,v,u,k,g,f)
e=m+8
d=t[1]
a0=s[1]
a1=r[1]
a8.KF(b0,e,n,v,u,d,a0,a1)
a2=t[2]
a3=s[2]
a4=r[2]
a8.KF(b0,m,l,v,u,a2,a3,a4)
a5=t[3]
a6=s[3]
a7=r[3]
a8.KF(b0,e,l,v,u,a5,a6,a7)
a8.al8(i,g,a0,a3,a6)
a8.al8(h,f,a1,a4,a7)
a7=a8.e
a4=a8.r
a4===$&&B.b()
q=a8.wh(a9,a5,x,a8.wh(a9,a2,x,a8.wh(a9,d,x,a8.wh(a9,k,x,q,a7,a4),a8.e,a8.r),a8.e,a8.r),a8.e,a8.r)
a4=a8.f
a7=a8.w
a7===$&&B.b()
p=a8.wh(a9,i,w,p,a4,a7)
o=a8.wh(a9,h,w,o,a8.f,a8.w)}}x=a8.ay
if(x>=0){++x
a8.wq(a9,B.a([D.c.eR(1,x)-1,x],y.t))}a8.z_(a9,217)
return J.da(D.A.gaj(a9.c),0,a9.a)},
KF(d,e,f,g,h,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(x=this.as,w=a0.$flags|0,v=a1.$flags|0,u=a2.$flags|0,t=f+1,s=0;s<64;++s){r=s>>>3
q=f+r
p=e+(s&7)
if(q>=h)q-=t+r-h
if(p>=g)p-=p-g+1
o=d.a
n=o==null?null:o.ed(p,q,null)
if(n==null)n=new A.fe()
if(n.gdu()!==C.a7)n=n.o8(C.a7)
if(n.gu(n)>3){m=n.gfs()
l=1-m
n.saf(0,D.d.aZ(n.gaf(n)*m+C.z9.i(0,0)*l))
n.sap(D.d.aZ(n.gap()*m+C.z9.i(0,0)*l))
n.sau(0,D.d.aZ(n.gau(n)*m+C.z9.i(0,0)*l))}k=D.d.C(n.gaf(n))
j=D.d.C(n.gap())
i=D.d.C(n.gau(n))
o=D.c.P(x[k]+x[j+256]+x[i+512],16)
w&2&&B.B(a0)
a0[s]=o-128
o=D.c.P(x[k+768]+x[j+1024]+x[i+1280],16)
v&2&&B.B(a1)
a1[s]=o-128
o=D.c.P(x[k+1280]+x[j+1536]+x[i+1792],16)
u&2&&B.B(a2)
a2[s]=o-128}},
al8(d,e,f,g,h){var x,w,v,u,t,s,r,q
for(x=d.$flags|0,w=0;w<64;++w){if(w<32)v=D.c.aq(w,8)<4?e:f
else v=D.c.aq(w,8)<4?g:h
u=(D.c.b8(D.c.aq(w,32),8)<<4>>>0)+(D.c.aq(w,4)<<1>>>0)
t=v[u]
s=v[u+1]
r=v[u+8]
q=v[u+9]
x&2&&B.B(d)
d[w]=(t+s+r+q)/4}},
z_(d,e){d.b0(255)
d.b0(e&255)},
b9F(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.a,w=x.$flags|0,v=0;v<64;++v){u=D.d.fX((C.ayE[v]*d+50)/100)
if(u<1)u=1
else if(u>255)u=255
t=C.r4[v]
w&2&&B.B(x)
x[t]=u}for(w=g.b,t=w.$flags|0,s=0;s<64;++s){r=D.d.fX((C.as4[s]*d+50)/100)
if(r<1)r=1
else if(r>255)r=255
q=C.r4[s]
t&2&&B.B(w)
w[q]=r}for(t=g.c,q=t.$flags|0,p=g.d,o=p.$flags|0,n=0,m=0;m<8;++m)for(l=0;l<8;++l){k=C.r4[n]
j=x[k]
i=C.Lh[m]
h=C.Lh[l]
q&2&&B.B(t)
t[n]=1/(j*i*h*8)
k=w[k]
o&2&&B.B(p)
p[n]=1/(k*i*h*8);++n}},
SY(d,e){var x,w,v,u,t,s=y.t,r=B.a([B.a([],s)],y.cQ)
for(x=0,w=0,v=1;v<=16;++v){for(u=1;u<=d[v];++u){t=e[w]
if(r.length<=t)D.b.su(r,t+1)
r[t]=B.a([x,v],s);++w;++x}x*=2}return r},
b9u(){var x,w,v,u,t,s,r,q,p,o,n
for(x=this.y,w=this.x,v=y.t,u=1,t=2,s=1;s<=15;++s){for(r=u;r<t;++r){q=32767+r
x[q]=s
w[q]=B.a([r,s],v)}for(q=t-1,p=-q,o=-u;p<=o;++p){n=32767+p
x[n]=s
w[n]=B.a([q+p,s],v)}u=u<<1>>>0
t=t<<1>>>0}},
b9G(){var x,w,v
for(x=this.as,w=x.$flags|0,v=0;v<256;++v){w&2&&B.B(x)
x[v]=19595*v
x[v+256]=38470*v
x[v+512]=7471*v+32768
x[v+768]=-11059*v
x[v+1024]=-21709*v
x[v+1280]=32768*v+8421375
x[v+1536]=-27439*v
x[v+1792]=-5329*v}},
b0u(d4,d5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3
for(x=d4.$flags|0,w=0,v=0;v<8;++v){u=d4[w]
t=w+1
s=d4[t]
r=w+2
q=d4[r]
p=w+3
o=d4[p]
n=w+4
m=d4[n]
l=w+5
k=d4[l]
j=w+6
i=d4[j]
h=w+7
g=d4[h]
f=u+g
e=u-g
d=s+i
a0=s-i
a1=q+k
a2=q-k
a3=o+m
a4=f+a3
a5=f-a3
a6=d+a1
x&2&&B.B(d4)
d4[w]=a4+a6
d4[n]=a4-a6
a7=(d-a1+a5)*0.707106781
d4[r]=a5+a7
d4[j]=a5-a7
a4=o-m+a2
a8=a0+e
a9=(a4-a8)*0.382683433
b0=0.5411961*a4+a9
b1=1.306562965*a8+a9
b2=(a2+a0)*0.707106781
b3=e+b2
b4=e-b2
d4[l]=b4+b0
d4[p]=b4-b0
d4[t]=b3+b1
d4[h]=b3-b1
w+=8}for(w=0,v=0;v<8;++v){u=d4[w]
t=w+8
s=d4[t]
r=w+16
q=d4[r]
p=w+24
o=d4[p]
n=w+32
m=d4[n]
l=w+40
k=d4[l]
j=w+48
i=d4[j]
h=w+56
g=d4[h]
b5=u+g
b6=u-g
b7=s+i
b8=s-i
b9=q+k
c0=q-k
c1=o+m
c2=b5+c1
c3=b5-c1
c4=b7+b9
x&2&&B.B(d4)
d4[w]=c2+c4
d4[n]=c2-c4
c5=(b7-b9+c3)*0.707106781
d4[r]=c3+c5
d4[j]=c3-c5
c2=o-m+c0
c6=b8+b6
c7=(c2-c6)*0.382683433
c8=0.5411961*c2+c7
c9=1.306562965*c6+c7
d0=(c0+b8)*0.707106781
d1=b6+d0
d2=b6-d0
d4[l]=d2+c8
d4[p]=d2-c8
d4[t]=d1+c9
d4[h]=d1-c9;++w}for(x=this.z,v=0;v<64;++v){d3=d4[v]*d5[v]
x[v]=d3>0?D.d.C(d3+0.5):D.d.C(d3-0.5)}return x},
bpc(d,e){var x,w
if(e.gU(0))return
x=A.qd(!1,8192)
e.jy(0,x)
w=J.da(D.A.gaj(x.c),0,x.a)
this.z_(d,225)
d.l6(w.length+8)
d.iZ(1165519206)
d.l6(0)
d.m2(w)},
bpg(d){var x,w,v
this.z_(d,219)
d.l6(132)
d.b0(0)
for(x=this.a,w=0;w<64;++w)d.b0(x[w])
d.b0(1)
for(x=this.b,v=0;v<64;++v)d.b0(x[v])},
bpf(d){var x,w,v,u,t,s,r,q
this.z_(d,196)
d.l6(418)
d.b0(0)
for(x=0;x<16;){++x
d.b0(C.Sq[x])}for(w=0;w<=11;++w)d.b0(C.qy[w])
d.b0(16)
for(v=0;v<16;){++v
d.b0(C.Km[v])}for(u=0;u<=161;++u)d.b0(C.LG[u])
d.b0(1)
for(t=0;t<16;){++t
d.b0(C.Ni[t])}for(s=0;s<=11;++s)d.b0(C.qy[s])
d.b0(17)
for(r=0;r<16;){++r
d.b0(C.M7[r])}for(q=0;q<=161;++q)d.b0(C.OB[q])},
wh(d,e,f,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=a2[0],h=a2[240],g=j.b0u(e,f)
for(x=j.Q,w=0;w<64;++w)x[C.r4[w]]=g[w]
v=x[0]
v.toString
u=v-a0
if(u===0){t=a1[0]
t.toString
j.wq(d,t)}else{s=32767+u
a1.toString
t=j.y[s]
t.toString
t=a1[t]
t.toString
j.wq(d,t)
t=j.x[s]
t.toString
j.wq(d,t)}r=63
while(!0){if(!(r>0&&x[r]===0))break;--r}if(r===0){i.toString
j.wq(d,i)
return v}for(t=j.y,q=j.x,p=1;p<=r;){o=p
while(!0){if(!(x[o]===0&&o<=r))break;++o}n=o-p
if(n>=16){m=D.c.P(n,4)
for(l=1;l<=m;++l){h.toString
j.wq(d,h)}n&=15}k=x[o]
k.toString
s=32767+k
k=t[s]
k.toString
k=a2[(n<<4>>>0)+k]
k.toString
j.wq(d,k)
k=q[s]
k.toString
j.wq(d,k)
p=o+1}if(r!==63){i.toString
j.wq(d,i)}return v},
wq(d,e){var x,w=this,v=e[0],u=e[1]-1
for(;u>=0;){if((v&D.c.eR(1,u))>>>0!==0)w.ax=(w.ax|D.c.eR(1,w.ay))>>>0;--u
if(--w.ay<0){x=w.ax
if(x===255){d.b0(255)
d.b0(0)}else d.b0(x)
w.ay=7
w.ax=0}}}}
A.QA.prototype={
J(){return"PngDisposeMode."+this.b}}
A.a3l.prototype={
J(){return"PngBlendMode."+this.b}}
A.a3m.prototype={}
A.aqY.prototype={}
A.D2.prototype={
J(){return"PngFilterType."+this.b}}
A.bt3.prototype={}
A.bhI.prototype={}
A.awM.prototype={
Ia(d){var x,w=A.cV(d,!0,null,0).jb(8)
for(x=0;x<8;++x)if(J.v(w.a,w.d+x)!==D.R_[x])return!1
return!0},
ow(b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=A.cV(b4,!0,b2,0)
b1.d=b3
x=b3.jb(8)
for(w=0;w<8;++w)if(J.v(x.a,x.d+w)!==D.R_[w])return b2
for(b3=b1.a,v=b3.cx,u=y.t,t=b3.cy,s=y.L,r=b3.ax;!0;){q=b1.d
p=q.d-q.b
o=q.a1()
n=b1.d.jc(4)
switch(n){case"tEXt":q=b1.d
m=q.jg(o)
q.d=q.d+(m.c-m.d)
l=m.hK()
k=l.length
for(w=0;w<k;++w)if(l[w]===0){q=w+1
r.m(0,D.e1.dk(0,new Uint8Array(l.subarray(0,B.qF(0,w,k)))),D.e1.dk(0,new Uint8Array(l.subarray(q,B.qF(q,b2,k)))))
break}b1.d.d+=4
break
case"pHYs":q=b1.d
m=q.jg(o)
q.d=q.d+(m.c-m.d)
j=A.c9(m,b2,0)
j.a1()
j.a1()
J.v(j.a,j.d++)
b1.d.d+=4
break
case"IHDR":q=b1.d
m=q.jg(o)
q.d=q.d+(m.c-m.d)
i=A.c9(m,b2,0)
h=i.hK()
b3.a=i.a1()
b3.b=i.a1()
b3.c=J.v(i.a,i.d++)
b3.d=J.v(i.a,i.d++)
J.v(i.a,i.d++)
b3.f=J.v(i.a,i.d++)
b3.r=J.v(i.a,i.d++)
q=b3.d
if(!(q===0||q===2||q===3||q===4||q===6))return b2
if(b3.f!==0)return b2
switch(q){case 0:if(!D.b.n(B.a([1,2,4,8,16],u),b3.c))return b2
break
case 2:if(!D.b.n(B.a([8,16],u),b3.c))return b2
break
case 3:if(!D.b.n(B.a([1,2,4,8],u),b3.c))return b2
break
case 4:if(!D.b.n(B.a([8,16],u),b3.c))return b2
break
case 6:if(!D.b.n(B.a([8,16],u),b3.c))return b2
break}if(b1.d.a1()!==A.xi(h,A.xi(new B.e6(n),0)))throw B.l(A.c4("Invalid "+n+" checksum"))
break
case"PLTE":q=b1.d
m=q.jg(o)
q.d=q.d+(m.c-m.d)
b3.w=m.hK()
if(b1.d.a1()!==A.xi(s.a(b3.w),A.xi(new B.e6(n),0)))throw B.l(A.c4("Invalid "+n+" checksum"))
break
case"tRNS":q=b1.d
m=q.jg(o)
q.d=q.d+(m.c-m.d)
b3.x=m.hK()
g=b1.d.a1()
q=b3.x
q.toString
if(g!==A.xi(q,A.xi(new B.e6(n),0)))throw B.l(A.c4("Invalid "+n+" checksum"))
break
case"IEND":b1.d.d+=4
break
case"gAMA":if(o!==4)throw B.l(A.c4("Invalid gAMA chunk"))
b1.d.a1()
b1.d.d+=4
break
case"IDAT":t.push(p)
q=b1.d
f=q.d+=o
q.d=f+4
break
case"acTL":b3.ch=b1.d.a1()
b1.d.a1()
b1.d.d+=4
break
case"fcTL":b1.d.a1()
e=b1.d.a1()
d=b1.d.a1()
a0=b1.d.a1()
a1=b1.d.a1()
a2=b1.d.al()
a3=b1.d.al()
q=b1.d
a4=J.v(q.a,q.d++)
q=b1.d
a5=J.v(q.a,q.d++)
q=C.apF[a4]
f=C.aw1[a5]
v.push(new A.aqY(B.a([],u),e,d,a0,a1,a2,a3,q,f))
b1.d.d+=4
break
case"fdAT":b1.d.a1()
D.b.gY(v).y.push(p)
q=b1.d
f=q.d+=o-4
q.d=f+4
break
case"bKGD":q=b3.d
if(q===3){q=b1.d
a6=J.v(q.a,q.d++);--o
a7=a6*3
q=b3.w
a8=q[a7]
a9=q[a7+1]
b0=q[a7+2]
q=b3.x
if(q!=null){q=D.A.n(q,a6)?0:255
f=new Uint8Array(4)
f[0]=a8
f[1]=a9
f[2]=b0
f[3]=q
b3.z=new A.MZ(f)}else{q=new Uint8Array(3)
q[0]=a8
q[1]=a9
q[2]=b0
b3.z=new A.ajR(q)}}else if(q===0||q===4){b1.d.al()
o-=2}else if(q===2||q===6){q=b1.d
q.al()
q.al()
q.al()
o-=24}if(o>0)b1.d.d+=o
b1.d.d+=4
break
case"iCCP":b3.Q=b1.d.Q3()
q=b1.d
J.v(q.a,q.d++)
q=b3.Q
f=b1.d
m=f.jg(o-(q.length+2))
f.d=f.d+(m.c-m.d)
b3.at=m.hK()
b1.d.d+=4
break
default:q=b1.d
f=q.d+=o
q.d=f+4
break}if(n==="IEND")break
q=b1.d
if(q.d>=q.c)return b2}return b3},
kc(b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=null,b4=b1.a,b5=b4.a,b6=b4.b,b7=b4.cx,b8=b7.length
if(b8===0||b9===0){w=B.a([],y.a)
b7=b4.cy
v=b7.length
for(u=0,t=0;t<v;++t){b8=b1.d
b8===$&&B.b()
b8.d=b7[t]
s=b8.a1()
r=b1.d.jc(4)
b8=b1.d
q=b8.jg(s)
b8.d=b8.d+(q.c-q.d)
p=q.hK()
u+=p.length
w.push(p)
if(b1.d.a1()!==A.xi(p,A.xi(new B.e6(r),0)))throw B.l(A.c4("Invalid "+r+" checksum"))}b3=new Uint8Array(u)
for(b7=w.length,o=0,n=0;n<w.length;w.length===b7||(0,B.Q)(w),++n){p=w[n]
J.cmw(b3,o,p)
o+=p.length}}else{if(b9>=b8)throw B.l(A.c4("Invalid Frame Number: "+b9))
m=b7[b9]
b5=m.b
b6=m.c
w=B.a([],y.a)
for(b7=m.y,u=0,t=0;t<b7.length;++t){b8=b1.d
b8===$&&B.b()
b8.d=b7[t]
s=b8.a1()
b8=b1.d
b8.jc(4)
b8.d+=4
b8=b1.d
q=b8.jg(s-4)
b8.d=b8.d+(q.c-q.d)
p=q.hK()
u+=p.length
w.push(p)}b3=new Uint8Array(u)
for(b7=w.length,o=0,n=0;n<w.length;w.length===b7||(0,B.Q)(w),++n){p=w[n]
J.cmw(b3,o,p)
o+=p.length}}b7=b4.d
l=1
if(!(b7===3))if(!(b7===0)){if(b7===4)b7=2
else b7=b7===6?4:3
l=b7}x=null
try{x=C.iV.Cv(b3)}catch(k){return b2}j=A.cV(x,!0,b2,0)
b1.c=b1.b=0
i=b2
if(b4.d===3){b7=b4.w
if(b7!=null){h=b7.length/3|0
g=b4.x
b8=g!=null
f=b8?g.length:0
e=b8?4:3
i=new A.uh(new Uint8Array(h*e),h,e)
for(b8=e===4,t=0,d=0;t<h;++t,d+=3){a0=b8&&t<f?g[t]:255
i.RM(t,b7[d],b7[d+1],b7[d+2],a0)}}}if(b4.d===0&&b4.x!=null&&i==null&&b4.c<=8){g=b4.x
a1=g.length
b7=b4.c
h=D.c.eR(1,b7)
i=new A.uh(new Uint8Array(h*4),h,4)
if(b7===1)a2=255
else if(b7===2)a2=85
else{b7=b7===4?17:1
a2=b7}for(t=0;t<h;++t){a3=t*a2
i.RM(t,a3,a3,a3,255)}for(b7=i.b,b8=3<b7,a4=i.c,a5=a4.$flags|0,t=0;t<a1;t+=2){a6=(g[t]&255)<<8|g[t+1]&255
if(a6<h)if(b8){a5&2&&B.B(a4)
a4[a6*b7+3]=0}}}b7=b4.c
if(b7===1)a7=C.fi
else if(b7===2)a7=C.h2
else{if(b7===4)b8=C.h3
else b8=b7===16?C.cd:C.a7
a7=b8}b8=b4.d
if(b8===0&&b4.x!=null&&b7>8)l=4
a8=A.hN(b2,b2,a7,0,C.bk,b6,b2,0,b8===2&&b4.x!=null?4:l,i,C.a7,b5,!1)
a9=b4.a
b0=b4.b
b4.a=b5
b4.b=b6
b1.e=0
if(b4.r!==0){b7=b6+7>>>3
b1.BP(j,a8,0,0,8,8,b5+7>>>3,b7)
b8=b5+3
b1.BP(j,a8,4,0,8,8,b8>>>3,b7)
b7=b6+3
b1.BP(j,a8,0,4,4,8,b8>>>2,b7>>>3)
b8=b5+1
b1.BP(j,a8,2,0,4,4,b8>>>2,b7>>>2)
b7=b6+1
b1.BP(j,a8,0,2,2,4,b8>>>1,b7>>>2)
b1.BP(j,a8,1,0,2,2,b5>>>1,b7>>>1)
b1.BP(j,a8,0,1,1,2,b5,b6>>>1)}else b1.bgq(j,a8)
b4.a=a9
b4.b=b0
b7=b4.at
if(b7!=null)a8.c=new A.a_E(b4.Q,C.A1,b7)
b4=b4.ax
if(b4.a!==0)a8.bq3(b4)
return a8},
nz(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(g.ow(e)==null)return f
x=g.a
w=x.cx
v=w.length
if(v===0){x=g.kc(0)
x.toString
return x}for(v=y.g,u=f,t=u,s=0;s<x.ch;++s){a0=w[s]
r=g.kc(s)
if(r==null)continue
if(t==null||u==null){t=r.axS(r.gqb())
q=a0.f
t.y=D.d.C((q===0||a0.r===0?0:q/a0.r)*1000)
u=t
continue}q=s-1
p=w[q]
o=r.a
n=o==null
m=n?f:o.a
if(m==null)m=0
l=u.a
k=l==null
j=k?f:l.a
if(m===(j==null?0:j)){o=n?f:o.b
if(o==null)o=0
n=k?f:l.b
o=o===(n==null?0:n)&&a0.d===0&&a0.e===0&&a0.x===C.a1S}else o=!1
if(o){q=a0.f
r.y=D.d.C((q===0||a0.r===0?0:q/a0.r)*1000)
t.nt(r)
u=r
continue}i=t.x
u=A.BH((i===$?t.x=B.a([],v):i)[q],!1,!1)
h=p.w
if(h===C.a1U){q=p.d
o=p.e
n=x.z
if(n==null){n=new Uint8Array(4)
m=new A.MZ(n)
n[0]=0
n[1]=0
n[2]=0
n[3]=0
n=m}A.dbi(u,!1,n,q,q+p.b-1,o,o+p.c-1)}else if(h===C.a1V&&s>1){i=t.x
if(i===$)i=t.x=B.a([],v)
q=p.d
o=p.e
n=p.b
m=p.c
u=A.cs5(u,i[s-2],C.yg,m,n,q,o,m,n,q,o)}q=a0.f
u.y=D.d.C((q===0||a0.r===0?0:q/a0.r)*1000)
q=a0.x===C.a1T?C.yg:C.yf
u=A.cs5(u,r,q,f,f,a0.d,a0.e,f,f,f,f)
t.nt(u)}return t},
dk(d,e){return this.nz(0,e,null)},
BP(a0,a1,a2,a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=e.d
if(d===4)x=2
else if(d===2)x=3
else{d=d===6?4:1
x=d}w=x*e.c
v=D.c.P(w+7,3)
u=D.c.P(w*a6+7,3)
t=B.a([null,null],y.e)
s=B.a([0,0,0,0],y.t)
for(e=a4>1,r=a4-a2,q=a3,p=0,o=0;p<a7;++p,q+=a5,++f.e){n=C.Q2[J.v(a0.a,a0.d++)]
m=a0.jg(u)
a0.d=a0.d+(m.c-m.d)
d=m.hK()
t[o]=d
o=1-o
f.atO(n,v,d,t[o])
f.c=f.b=0
l=d.length
k=new A.lU(d,0,Math.min(l,l),0,!0)
for(d=r<=1,j=a2,i=0;i<a6;++i,j+=a4){f.aqR(k,s)
l=a1.a
l=l==null?null:l.ed(j,q,null)
f.a6m(l==null?new A.fe():l,s)
if(!d||e)for(h=0;h<a4;++h)for(l=q+h,g=0;g<r;++g)f.a6m(a1.kl(j+g,l),s)}}},
bgq(d,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a,e=f.d
if(e===4)x=2
else if(e===2)x=3
else{e=e===6?4:1
x=e}w=x*f.c
v=f.a
u=f.b
t=D.c.P(v*w+7,3)
s=D.c.P(w+7,3)
r=B.bK(t,0,!1,y.p)
q=B.a([r,r],y.S)
p=B.a([0,0,0,0],y.t)
f=a0.a
o=f.ga3(f)
o.q()
for(n=0,m=0;n<u;++n,m=j){l=C.Q2[J.v(d.a,d.d++)]
k=d.jg(t)
d.d=d.d+(k.c-k.d)
f=k.hK()
q[m]=f
j=1-m
g.atO(l,s,f,q[j])
g.c=g.b=0
f=q[m]
e=f.length
i=new A.lU(f,0,Math.min(e,e),0,!0)
for(h=0;h<v;++h){g.aqR(i,p)
g.a6m(o.gL(o),p)
o.q()}}},
atO(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=f.length
switch(d.a){case 0:break
case 1:for(x=e;x<l;++x)f[x]=f[x]+f[x-e]&255
break
case 2:for(w=g!=null,x=0;x<l;++x){v=w?g[x]:0
f[x]=f[x]+v&255}break
case 3:for(w=g!=null,x=0;x<l;++x){u=x<e?0:f[x-e]
v=w?g[x]:0
f[x]=f[x]+D.c.P(u+v,1)&255}break
case 4:for(w=g==null,t=!w,x=0;x<l;++x){s=x<e
u=s?0:f[x-e]
v=t?g[x]:0
r=s||w?0:g[x-e]
q=u+v-r
p=Math.abs(q-u)
o=Math.abs(q-v)
n=Math.abs(q-r)
if(p<=o&&p<=n)m=u
else m=o<=n?v:r
f[x]=f[x]+m&255}break}},
t8(d,e){var x,w,v,u,t,s=this
if(e===0)return 0
if(e===8)return d.cq()
if(e===16)return d.al()
for(x=d.c;w=s.c,w<e;){w=d.d
if(w>=x)throw B.l(A.c4("Invalid PNG data."))
v=d.a
d.d=w+1
u=J.v(v,w)
w=s.c
s.b=D.c.eR(u,w)
s.c=w+8}if(e===1)t=1
else if(e===2)t=3
else{if(e===4)x=15
else x=0
t=x}x=w-e
w=D.c.h2(s.b,x)
s.c=x
return w&t},
aqR(d,e){var x=this,w=x.a,v=w.d
switch(v){case 0:e[0]=x.t8(d,w.c)
return
case 2:e[0]=x.t8(d,w.c)
e[1]=x.t8(d,w.c)
e[2]=x.t8(d,w.c)
return
case 3:e[0]=x.t8(d,w.c)
return
case 4:e[0]=x.t8(d,w.c)
e[1]=x.t8(d,w.c)
return
case 6:e[0]=x.t8(d,w.c)
e[1]=x.t8(d,w.c)
e[2]=x.t8(d,w.c)
e[3]=x.t8(d,w.c)
return}throw B.l(A.c4("Invalid color type: "+v+"."))},
a6m(d,e){var x,w,v,u,t,s,r,q,p=this.a,o=p.d
switch(o){case 0:x=p.x
if(x!=null&&p.c>8){p=x[0]
o=x[1]
w=e[0]
d.ip(w,w,w,w!==((p&255)<<24|o&255)>>>0?d.gcj():0)
return}d.kF(e[0],0,0)
return
case 2:v=e[0]
w=e[1]
u=e[2]
p=p.x
if(p!=null){o=p[0]
t=p[1]
s=p[2]
r=p[3]
q=p[4]
p=p[5]
if(v!==((o&255)<<8|t&255)||w!==((s&255)<<8|r&255)||u!==((q&255)<<8|p&255)){d.ip(v,w,u,d.gcj())
return}}d.kF(v,w,u)
return
case 3:d.se7(0,e[0])
return
case 4:d.kF(e[0],e[1],0)
return
case 6:d.ip(e[0],e[1],e[2],e[3])
return}throw B.l(A.c4("Invalid color type: "+o+"."))}}
A.awN.prototype={
J(){return"PngFilter."+this.b}}
A.bt1.prototype={
nt(d){var x,w,v,u,t,s,r,q,p=this,o=8192,n=d.a
n=n==null?null:n.grq()
if(!(n===!0&&d.gdu()!==C.cd))n=d.gmQ()<8&&!d.grl()&&d.gqb()>1
else n=!0
if(n)d=d.o8(C.a7)
if(p.w==null){n=A.qd(!0,o)
p.w=n
n.m2(B.a([137,80,78,71,13,10,26,10],y.t))
x=A.qd(!0,o)
x.iZ(d.gd0(0))
x.iZ(d.gb2(0))
x.b0(d.gmQ())
if(d.grl())n=3
else if(d.gqb()===1)n=0
else if(d.gqb()===2)n=4
else n=d.gqb()===3?2:6
x.b0(n)
x.b0(0)
x.b0(0)
x.b0(0)
n=p.w
n.toString
p.tg(n,"IHDR",J.da(D.A.gaj(x.c),0,x.a))
n=d.c
if(n!=null){x=A.qd(!0,o)
x.m2(new B.e6(n.a))
x.b0(0)
x.b0(0)
x.m2(n.bt7())
n=p.w
n.toString
p.tg(n,"iCCP",J.da(D.A.gaj(x.c),0,x.a))}if(d.grl()){n=p.a
if(n!=null){n=n.a
n===$&&B.b()
p.avk(n)}else{n=d.a
n=n==null?null:n.geP()
n.toString
p.avk(n)}}if(p.r){x=A.qd(!0,o)
n=p.e
n===$&&B.b()
x.iZ(n)
x.iZ(p.c)
n=p.w
n.toString
p.tg(n,"acTL",J.da(D.A.gaj(x.c),0,x.a))}}w=d.grl()?1:d.gqb()
v=d.gdu()===C.cd?2:1
n=d.gd0(0)
u=d.gb2(0)
t=d.gb2(0)
s=new Uint8Array(n*u*w*v+t)
p.bgr(0,d,s)
r=C.G3.azr(s,p.d)
n=d.d
if(n!=null)for(n=new B.ce(n,n.r,n.e,B.p(n).h("ce<1>"));n.q();){u=n.d
t=d.d.i(0,u)
t.toString
x=new A.avf(!0,new Uint8Array(8192))
x.m2(D.pU.cO(u))
x.b0(0)
x.m2(D.pU.cO(t))
u=p.w
u.toString
p.tg(u,"tEXt",J.da(D.A.gaj(x.c),0,x.a))}if(p.r){x=A.qd(!0,o)
x.iZ(p.f)
x.iZ(d.gd0(0))
x.iZ(d.gb2(0))
x.iZ(0)
x.iZ(0)
x.l6(d.y)
x.l6(1000)
x.b0(1)
x.b0(0)
n=p.w
n.toString
p.tg(n,"fcTL",J.da(D.A.gaj(x.c),0,x.a));++p.f}if(p.f<=1){n=p.w
n.toString
p.tg(n,"IDAT",r)}else{q=A.qd(!0,o)
q.iZ(p.f)
q.m2(r)
n=p.w
n.toString
p.tg(n,"fdAT",J.da(D.A.gaj(q.c),0,q.a));++p.f}},
byf(d){var x,w=this,v=w.w
if(v==null)return null
w.tg(v,"IEND",B.a([],y.t))
w.f=0
v=w.w
x=J.da(D.A.gaj(v.c),0,v.a)
w.w=null
return x},
bxc(d,e){var x,w,v,u,t,s=this,r=d.gl0().length
if(r<=1){s.e=1
s.r=!1
s.nt(d)}else{r=d.gl0().length
s.e=r
s.r=r>1
s.c=d.r
if(d.grl()){x=new A.boX(new Int32Array(256))
x.bc9(256)
x.bpN(d)
s.a=x
for(r=d.gl0(),w=r.length,v=0;v<r.length;r.length===w||(0,B.Q)(r),++v){u=r[v]
if(u!==d){x.aoL(u)
x.alS()
x.aor()
x.akk()}}}for(r=d.gl0(),w=r.length,v=0;v<r.length;r.length===w||(0,B.Q)(r),++v){u=r[v]
t=s.a
if(t!=null)s.nt(t.aHA(u))
else s.nt(u)}}r=s.byf(0)
r.toString
return r},
avk(d){var x,w,v,u=this
if(d.gdu()===C.a7&&d.b===3&&d.a===256){x=u.w
x.toString
u.tg(x,"PLTE",J.da(d.gaj(d),0,null))}else{x=d.a
w=A.qd(!0,x*3)
for(v=0;v<x;++v){w.b0(D.d.C(d.nd(v)))
w.b0(D.d.C(d.nb(v)))
w.b0(D.d.C(d.na(v)))}x=u.w
x.toString
u.tg(x,"PLTE",J.da(D.A.gaj(w.c),0,w.a))}if(d.b===4){x=d.a
w=A.qd(!0,x)
for(v=0;v<x;++v)w.b0(D.d.C(d.or(v)))
x=u.w
x.toString
u.tg(x,"tRNS",J.da(D.A.gaj(w.c),0,w.a))}},
tg(d,e,f){d.iZ(f.length)
d.m2(new B.e6(e))
d.m2(f)
d.iZ(A.xi(f,A.xi(new B.e6(e),0)))},
bgr(d,e,f){var x,w,v=this,u=e.grl()?C.aUj:v.b,t=e.gaj(0),s=e.a.grG(),r=e.grl()?1:e.gqb(),q=D.c.P(r*e.gmQ()+7,3),p=e.gmQ()+7>>>3,o=u.a,n=J.dy(t),m=0,l=0,k=null,j=0
while(!0){x=e.a
x=x==null?null:x.b
if(!(j<(x==null?0:x)))break
w=n.C9(t,l,s)
l+=s
switch(o){case 1:m=v.b0H(w,p,q,f,m)
break
case 2:m=v.b0K(w,k,p,f,m)
break
case 3:m=v.b0B(w,k,p,q,f,m)
break
case 4:m=v.b0E(w,k,p,q,f,m)
break
default:m=v.b0D(w,p,f,m)
break}++j
k=w}},
avd(d,e,f,g,h){var x,w,v;--d
for(x=g.$flags|0;d>=0;h=w){w=h+1
v=e[f+d]
x&2&&B.B(g)
g[h]=v;--d}return h},
b0D(d,e,f,g){var x,w,v=g+1
f.$flags&2&&B.B(f)
f[g]=0
x=d.length
if(e===1)for(g=v,w=0;w<x;++w,g=v){v=g+1
f[g]=d[w]}else for(g=v,w=0;w<x;w+=e)g=this.avd(e,d,w,f,g)
return g},
b0H(d,e,f,g,h){var x,w,v,u,t,s,r=h+1
g.$flags&2&&B.B(g)
g[h]=1
for(h=r,x=0;x<f;x+=e)h=this.avd(e,d,x,g,h)
w=d.length
for(v=e-1,x=f;x<w;x+=e)for(u=v,t=0;t<e;++t,--u,h=r){r=h+1
s=x+u
g[h]=d[s]-d[s-f]&255}return h},
b0K(d,e,f,g,h){var x,w,v,u,t,s,r,q=h+1
g.$flags&2&&B.B(g)
g[h]=2
x=d.length
for(w=f-1,v=e!=null,h=q,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,h=q){r=v?e[u+t]:0
q=h+1
g[h]=d[u+t]-r&255}return h},
b0B(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o=i+1
h.$flags&2&&B.B(h)
h[i]=3
x=d.length
for(w=f-1,v=e==null,i=o,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=o){r=u+t
q=r<g?0:d[r-g]
p=v?0:e[r]
o=i+1
h[i]=d[r]-(q+p>>>1)}return i},
beD(d,e,f){var x=d+e-f,w=x>d?x-d:d-x,v=x>e?x-e:e-x,u=x>f?x-f:f-x
if(w<=v&&w<=u)return d
else if(v<=u)return e
return f},
b0E(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m=i+1
h.$flags&2&&B.B(h)
h[i]=4
x=d.length
for(w=f-1,v=e==null,i=m,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=m){r=u+t
q=r<g
p=q?0:d[r-g]
o=v?0:e[r]
n=q||v?0:e[r-g]
m=i+1
h[i]=d[r]-this.beD(p,o,n)&255}return i}}
A.D3.prototype={
J(){return"PnmFormat."+this.b}}
A.IP.prototype={}
A.bt4.prototype={
Ia(d){var x
this.b=A.cV(d,!1,null,0)
x=this.TN()
if(x==="P1"||x==="P2"||x==="P5"||x==="P3"||x==="P6")return!0
return!1},
nz(d,e,f){if(this.ow(e)==null)return null
return this.kc(0)},
ow(d){var x,w,v=this
v.b=A.cV(d,!1,null,0)
x=v.TN()
if(x==="P1"){w=v.a=new A.IP(C.ny)
w.e=C.a1W}else if(x==="P2"){w=v.a=new A.IP(C.ny)
w.e=C.a1X}else if(x==="P5"){w=v.a=new A.IP(C.ny)
w.e=C.Cj}else if(x==="P3"){w=v.a=new A.IP(C.ny)
w.e=C.a1Y}else if(x==="P6"){w=v.a=new A.IP(C.ny)
w.e=C.Ck}else return v.b=null
w.a=v.LY()
w=v.a
w.toString
w.b=v.LY()
w=v.a
if(w.a===0||w.b===0)return v.a=v.b=null
return w},
kc(d){var x,w,v,u,t,s=this,r=null,q=s.a
if(q==null)return r
x=q.e
if(x===C.a1W){x=q.a
w=A.hN(r,r,C.fi,0,C.bk,q.b,r,0,1,r,C.a7,x,!1)
for(q=w.a,q=q.ga3(q);q.q();){v=q.gL(q)
if(s.TN()==="1")v.kF(1,1,1)
else v.kF(0,0,0)}return w}else if(x===C.a1X||x===C.Cj){u=s.LY()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.hN(r,r,s.aA7(u),0,C.bk,q,r,0,1,r,C.a7,x,!1)
for(q=w.a,q=q.ga3(q);q.q();){v=q.gL(q)
t=s.V1(s.a.e,u)
v.kF(t,t,t)}return w}else if(x===C.a1Y||x===C.Ck){u=s.LY()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.hN(r,r,s.aA7(u),0,C.bk,q,r,0,3,r,C.a7,x,!1)
for(q=w.a,q=q.ga3(q);q.q();)q.gL(q).kF(s.V1(s.a.e,u),s.V1(s.a.e,u),s.V1(s.a.e,u))
return w}return r},
aA7(d){if(d>255)return C.cd
if(d>15)return C.a7
if(d>3)return C.h3
if(d>1)return C.h2
return C.fi},
V1(d,e){if(d===C.Cj||d===C.Ck)return this.b.cq()
return this.LY()},
LY(){var x,w,v=this.TN()
if(J.bz(v)===0)return 0
try{x=B.dX(v,null)
return x}catch(w){return 0}},
TN(){var x,w,v,u,t=this.b
if(t==null)return""
x=this.c
if(x.length!==0)return D.b.iC(x,0)
w=D.e.cg(t.bHS())
if(w.length===0)return""
for(;D.e.bf(w,"#");)w=D.e.cg(this.b.aDX(70))
t=y.U
v=B.H(new B.af(B.a(w.split(" "),y.T),new A.bt5(),t),!0,t.h("w.E"))
for(t=v.length,u=0;u<t;++u)if(D.e.bf(v[u],"#")){D.b.su(v,u)
break}D.b.I(x,v)
if(x.length===0)return""
return D.b.iC(x,0)}}
A.axf.prototype={}
A.axg.prototype={}
A.wp.prototype={}
A.axi.prototype={}
A.axj.prototype={}
A.axm.prototype={}
A.axn.prototype={}
A.a3G.prototype={}
A.axl.prototype={
gcp(d){return this.c}}
A.bu1.prototype={
aT6(d){var x,w,v,u,t=this
d.al()
d.al()
d.al()
d.al()
x=D.c.b8(d.c-d.d,8)
if(x>0){t.e=new Uint16Array(x)
t.f=new Uint16Array(x)
t.r=new Uint16Array(x)
t.w=new Uint16Array(x)
for(w=0;w<x;++w){v=t.e
u=d.al()
v.$flags&2&&B.B(v)
v[w]=u
u=t.f
v=d.al()
u.$flags&2&&B.B(u)
u[w]=v
v=t.r
u=d.al()
v.$flags&2&&B.B(v)
v[w]=u
u=t.w
v=d.al()
u.$flags&2&&B.B(u)
u[w]=v}}}}
A.QO.prototype={
aDW(d,e,f,g,h,i,j){if(d.c-d.d<2)return
if(h==null)h=d.al()
switch(h){case 0:g.toString
this.bht(d,e,f,g)
break
case 1:if(i==null)i=this.bhq(d,f)
g.toString
this.bhs(d,e,f,g,i,j)
break
default:throw B.l(A.c4("Unsupported compression: "+h))}},
bHR(d,e,f,g){return this.aDW(d,e,f,g,null,null,0)},
bhq(d,e){var x,w=new Uint16Array(e)
for(x=0;x<e;++x)w[x]=d.al()
return w},
bht(d,e,f,g){var x,w=e*f
if(g===16)w*=2
if(w>d.c-d.d){x=new Uint8Array(w)
this.c=x
D.A.lW(x,0,w,255)
return}this.c=d.jb(w).hK()},
bhs(d,e,f,g,h,i){var x,w,v,u,t,s,r=e*f
if(g===16)r*=2
x=new Uint8Array(r)
this.c=x
w=i*f
if(w>=h.length){D.A.lW(x,0,r,255)
return}for(v=0,u=0;u<f;++u,w=t){t=w+1
s=d.jg(h[w])
d.d=d.d+(s.c-s.d)
x=this.c
x.toString
this.aYQ(s,x,v)
v+=e}},
aYQ(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=e.$flags|0,v=e.length;u=d.d,u<x;){t=d.a
d.d=u+1
u=J.v(t,u)
t=$.nj()
t.$flags&2&&B.B(t)
t[0]=u
s=$.oo()[0]
if(s<0){s=1-s
u=d.d
if(u>=x)break
t=d.a
d.d=u+1
r=J.v(t,u)
if(f+s>v)s=v-f
for(q=0;q<s;++q,f=p){p=f+1
w&2&&B.B(e)
e[f]=r}}else{++s
if(f+s>v)s=v-f
s=Math.min(s,x-d.d)
for(q=0;q<s;++q,f=p){p=f+1
u=J.v(d.a,d.d++)
w&2&&B.B(e)
e[f]=u}}}},
gbn(d){return this.a}}
A.up.prototype={
J(){return"PsdColorMode."+this.b}}
A.bu3.prototype={
aT7(d){var x,w,v=this
v.as=A.cV(d,!0,null,0)
v.bgY()
if(v.c!==943870035)return
x=v.as.a1()
v.as.jb(x)
x=v.as.a1()
v.at=v.as.jb(x)
x=v.as.a1()
v.ax=v.as.jb(x)
w=v.as
v.ay=w.jb(w.c-w.d)},
o9(d){var x,w=this
if(w.c===943870035){x=w.as
x===$&&B.b()
x=x==null}else x=!0
if(x)return!1
w.bho()
w.bhp()
w.bhr()
w.ay=w.ax=w.at=w.as=null
return!0},
ayL(){if(!this.o9(0))return null
return this.bIt()},
bIt(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.y
if(d!=null)return d
d=f.a
d=A.hN(e,e,C.a7,0,C.bk,f.b,e,0,4,e,C.a7,d,!1)
f.y=d
d.V(0)
x=0
while(!0){d=f.w
d===$&&B.b()
if(!(x<d.length))break
c$0:{w=d[x]
d=w.y
d===$&&B.b()
if((d&2)!==0)break c$0
d=w.w
d===$&&B.b()
v=d/255
u=w.r
t=w.cx
d=w.a
d.toString
s=d
r=0
while(!0){d=w.f
d===$&&B.b()
if(!(r<d))break
d=w.a
d.toString
q=d+r
p=w.b
d=s>=0
o=0
while(!0){n=w.e
n===$&&B.b()
if(!(o<n))break
n=t.a
m=n==null?e:n.ed(o,r,e)
if(m==null)m=new A.fe()
l=D.d.C(m.gaf(m))
k=D.d.C(m.gap())
j=D.d.C(m.gau(m))
i=D.d.C(m.gaG(m))
p.toString
if(p>=0&&p<f.a&&d&&s<f.b){n=w.b
n.toString
h=f.y.a
g=h==null?e:h.ed(n+o,q,e)
if(g==null)g=new A.fe()
f.aV_(D.d.C(g.gaf(g)),D.d.C(g.gap()),D.d.C(g.gau(g)),D.d.C(g.gaG(g)),l,k,j,i,u,v,g)}++o;++p}++r;++s}}++x}d=f.y
d.toString
return d},
aV_(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s=k/255*m
switch(l){case 1885434739:x=g
w=f
v=e
u=d
break
case 1852797549:x=k
w=j
v=i
u=h
break
case 1684632435:x=k
w=j
v=i
u=h
break
case 1684107883:u=Math.min(d,h)
v=Math.min(e,i)
w=Math.min(f,j)
x=k
break
case 1836411936:u=D.c.P(d*h,8)
v=D.c.P(e*i,8)
w=D.c.P(f*j,8)
x=k
break
case 1768188278:u=A.bu4(d,h)
v=A.bu4(e,i)
w=A.bu4(f,j)
x=k
break
case 1818391150:u=A.bu6(d,h)
v=A.bu6(e,i)
w=A.bu6(f,j)
x=k
break
case 1684751212:x=k
w=j
v=i
u=h
break
case 1818850405:u=Math.max(d,h)
v=Math.max(e,i)
w=Math.max(f,j)
x=k
break
case 1935897198:u=A.cpw(d,h)
v=A.cpw(e,i)
w=A.cpw(f,j)
x=k
break
case 1684633120:u=A.bu5(d,h)
v=A.bu5(e,i)
w=A.bu5(f,j)
x=k
break
case 1818518631:u=h+d>255?255:d+h
v=i+e>255?255:e+i
w=j+f>255?255:f+j
x=k
break
case 1818706796:x=k
w=j
v=i
u=h
break
case 1870030194:u=A.cpu(d,h,g,k)
v=A.cpu(e,i,g,k)
w=A.cpu(f,j,g,k)
x=k
break
case 1934387572:u=A.cpx(d,h)
v=A.cpx(e,i)
w=A.cpx(f,j)
x=k
break
case 1749838196:u=A.cps(d,h)
v=A.cps(e,i)
w=A.cps(f,j)
x=k
break
case 1984719220:u=A.cpy(d,h)
v=A.cpy(e,i)
w=A.cpy(f,j)
x=k
break
case 1816947060:u=A.cpt(d,h)
v=A.cpt(e,i)
w=A.cpt(f,j)
x=k
break
case 1884055924:u=A.cpv(d,h)
v=A.cpv(e,i)
w=A.cpv(f,j)
x=k
break
case 1749903736:u=h<255-d?0:255
v=i<255-e?0:255
w=j<255-f?0:255
x=k
break
case 1684629094:u=Math.abs(h-d)
v=Math.abs(i-e)
w=Math.abs(j-f)
x=k
break
case 1936553316:u=A.cpr(d,h)
v=A.cpr(e,i)
w=A.cpr(f,j)
x=k
break
case 1718842722:x=k
w=j
v=i
u=h
break
case 1717856630:x=k
w=j
v=i
u=h
break
case 1752524064:x=k
w=j
v=i
u=h
break
case 1935766560:x=k
w=j
v=i
u=h
break
case 1668246642:x=k
w=j
v=i
u=h
break
case 1819634976:x=k
w=j
v=i
u=h
break
default:x=k
w=j
v=i
u=h}t=1-s
n.saf(0,D.d.C(d*t+u*s))
n.sap(D.d.C(e*t+v*s))
n.sau(0,D.d.C(f*t+w*s))
n.saG(0,D.d.C(g*t+x*s))},
bgY(){var x,w,v=this,u=v.as
u===$&&B.b()
v.c=u.a1()
u=v.as.al()
v.d=u
if(u!==1){v.c=0
return}x=v.as.jb(6)
for(w=0;w<6;++w)if(J.v(x.a,x.d+w)!==0){v.c=0
return}v.e=v.as.al()
v.b=v.as.a1()
v.a=v.as.a1()
v.f=v.as.al()
v.r=C.aCR[v.as.al()]},
bho(){var x,w,v,u,t,s,r=this,q=r.at
q.d=q.b
for(q=r.z;x=r.at,x.d<x.c;){w=x.a1()
v=r.at.al()
x=r.at
u=J.v(x.a,x.d++)
t=r.at.jc(u)
if((u&1)===0)++r.at.d
u=r.at.a1()
x=r.at
s=x.jg(u)
x.d=x.d+(s.c-s.d)
if((u&1)===1)++r.at.d
if(w===943868237)q.m(0,v,new A.axh(v,t))}},
bhp(){var x,w,v,u,t,s,r,q,p,o=this,n=o.ax
n.d=n.b
x=n.a1()
if((x&1)!==0)++x
w=o.ax.jb(x)
n=y.l
o.w=B.a([],n)
if(x>0){v=w.al()
u=$.ni()
u.$flags&2&&B.B(u)
u[0]=v
t=$.on()[0]
if(t<0)t=-t
for(v=y.N,u=y.O,s=y.u,r=0;r<t;++r){q=new A.axk(B.I(v,u),B.a([],n),B.a([],s))
q.aT8(w)
o.w.push(q)}}for(r=0;n=o.w,r<n.length;++r)n[r].bHK(w,o)
x=o.ax.a1()
p=o.ax.jb(x)
if(x>0){p.al()
p.al()
p.al()
p.al()
p.al()
p.al()
p.cq()}},
bhr(){var x,w,v,u,t,s,r=this,q=r.ay
q.d=q.b
x=q.al()
if(x===1){q=r.b
w=r.e
w===$&&B.b()
v=q*w
u=new Uint16Array(v)
for(t=0;t<v;++t)u[t]=r.ay.al()}else u=null
r.x=B.a([],y.X)
t=0
while(!0){q=r.e
q===$&&B.b()
if(!(t<q))break
q=r.x
w=r.ay
w.toString
s=t===3?-1:t
s=new A.QO(s)
s.aDW(w,r.a,r.b,r.f,x,u,t)
q.push(s);++t}r.y=A.cAN(r.r,r.f,r.a,r.b,r.x)}}
A.axh.prototype={
gbn(d){return this.a}}
A.axk.prototype={
aT8(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=a1.a1(),a0=$.hp()
a0.$flags&2&&B.B(a0)
a0[0]=d
d=$.kB()
e.a=d[0]
a0[0]=a1.a1()
e.b=d[0]
a0[0]=a1.a1()
e.c=d[0]
a0[0]=a1.a1()
d=d[0]
e.d=d
a0=e.b
a0.toString
e.e=d-a0
a0=e.c
d=e.a
d.toString
e.f=a0-d
e.as=B.a([],y.X)
x=a1.al()
for(w=0;w<x;++w){d=a1.al()
a0=$.ni()
a0.$flags&2&&B.B(a0)
a0[0]=d
v=$.on()[0]
a1.a1()
e.as.push(new A.QO(v))}u=a1.a1()
if(u!==943868237)throw B.l(A.c4("Invalid PSD layer signature: "+D.c.lG(u,16)))
e.r=a1.a1()
e.w=a1.cq()
a1.cq()
e.y=a1.cq()
if(a1.cq()!==0)throw B.l(A.c4("Invalid PSD layer data"))
t=a1.a1()
s=a1.jb(t)
if(t>0){t=s.a1()
if(t>0){r=s.jb(t)
d=r.d
r.a1()
r.a1()
r.a1()
r.a1()
r.cq()
r.cq()
if(r.c-d===20)r.d+=2
else{r.cq()
r.cq()
r.a1()
r.a1()
r.a1()
r.a1()}}t=s.a1()
if(t>0)new A.bu1().aT6(s.jb(t))
t=s.cq()
e.Q=s.jc(t)
q=4-D.c.aq(t,4)-1
if(q>0)s.d+=q
for(d=s.c,a0=e.ay,p=e.cy,o=y.cK;s.d<d;){u=s.a1()
if(u!==943868237)throw B.l(A.c4("PSD invalid signature for layer additional data: "+D.c.lG(u,16)))
n=s.jc(4)
t=s.a1()
m=s.jg(t)
l=s.d+(m.c-m.d)
s.d=l
if((t&1)===1)s.d=l+1
a0.m(0,n,A.cXT(n,m))
if(n==="lrFX"){k=A.c9(o.a(a0.i(0,"lrFX")).b,null,0)
k.al()
j=k.al()
for(i=0;i<j;++i){k.jc(4)
h=k.jc(4)
g=k.a1()
if(h==="dsdw"){f=new A.axg()
p.push(f)
f.a=k.a1()
k.a1()
k.a1()
k.a1()
k.a1()
k.al()
k.al()
k.al()
k.al()
k.al()
k.jc(8)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
J.v(k.a,k.d++)
k.al()
k.al()
k.al()
k.al()
k.al()}else if(h==="isdw"){f=new A.axj()
p.push(f)
f.a=k.a1()
k.a1()
k.a1()
k.a1()
k.a1()
k.al()
k.al()
k.al()
k.al()
k.al()
k.jc(8)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
J.v(k.a,k.d++)
k.al()
k.al()
k.al()
k.al()
k.al()}else if(h==="oglw"){f=new A.axm()
p.push(f)
f.a=k.a1()
k.a1()
k.a1()
k.al()
k.al()
k.al()
k.al()
k.al()
k.jc(8)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
if(f.a===2){k.al()
k.al()
k.al()
k.al()
k.al()}}else if(h==="iglw"){f=new A.axi()
p.push(f)
f.a=k.a1()
k.a1()
k.a1()
k.al()
k.al()
k.al()
k.al()
k.al()
k.jc(8)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
if(f.a===2){J.v(k.a,k.d++)
k.al()
k.al()
k.al()
k.al()
k.al()}}else if(h==="bevl"){f=new A.axf()
p.push(f)
f.a=k.a1()
k.a1()
k.a1()
k.a1()
k.jc(8)
k.jc(8)
k.al()
k.al()
k.al()
k.al()
k.al()
k.al()
k.al()
k.al()
k.al()
k.al()
J.v(k.a,k.d++)
J.v(k.a,k.d++)
J.v(k.a,k.d++)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
J.v(k.a,k.d++)
if(f.a===2){k.al()
k.al()
k.al()
k.al()
k.al()
k.al()
k.al()
k.al()
k.al()
k.al()}}else if(h==="sofi"){f=new A.axn()
p.push(f)
f.a=k.a1()
k.jc(4)
k.al()
k.al()
k.al()
k.al()
k.al()
J.v(k.a,k.d++)
f.b=J.v(k.a,k.d++)!==0
k.al()
k.al()
k.al()
k.al()
k.al()}else k.d+=g}}}}},
bHK(d,e){var x,w,v,u,t,s=this,r=0
while(!0){x=s.as
x===$&&B.b()
if(!(r<x.length))break
x=x[r]
w=s.e
w===$&&B.b()
v=s.f
v===$&&B.b()
x.bHR(d,w,v,e.f);++r}w=e.r
v=e.f
u=s.e
u===$&&B.b()
t=s.f
t===$&&B.b()
s.cx=A.cAN(w,v,u,t,x)}}
A.QP.prototype={}
A.bu2.prototype={
nz(d,e,f){var x,w,v,u=null,t=A.cAM(e)
this.a=t
x=1
if(x===1){t=t.ayL()
return t}for(w=u,v=0;v<x;++v){t=this.a
f=t==null?u:t.ayL()
if(f==null)continue
if(w==null){f.w=C.akV
w=f}else w.nt(f)}return w}}
A.axq.prototype={}
A.yW.prototype={
aO(d,e){return new A.yW(this.a*e,this.b*e,this.c*e)},
a6(d,e){return new A.yW(this.a+e.a,this.b+e.b,this.c+e.c)},
a5(d,e){return new A.yW(this.a-e.a,this.b-e.b,this.c-e.c)}}
A.m3.prototype={
aO(d,e){var x=this
return new A.m3(x.a*e,x.b*e,x.c*e,x.d*e)},
a6(d,e){var x=this
return new A.m3(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
a5(d,e){var x=this
return new A.m3(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)}}
A.a3J.prototype={
gb2(d){return this.b}}
A.QT.prototype={
gb2(d){return this.f}}
A.axp.prototype={
gb2(d){return this.b}}
A.rE.prototype={
sNl(d){var x=this.a,w=this.b
x.$flags&2&&B.B(x)
x[w+1]=d},
QS(){var x=this.e,w=this.d
if(x)return new A.yW(C.fx[w>>>9],C.fx[w>>>4&31],C.ey[w&15])
else return new A.yW(C.ey[w>>>7&15],C.ey[w>>>3&15],C.vu[w&7])},
QU(){var x=this.e,w=this.d
if(x)return new A.m3(C.fx[w>>>9],C.fx[w>>>4&31],C.ey[w&15],255)
else return new A.m3(C.ey[w>>>7&15],C.ey[w>>>3&15],C.vu[w&7],C.vu[w>>>11&7])},
QT(){var x=this.r,w=this.f
if(x)return new A.yW(C.fx[w>>>10],C.fx[w>>>5&31],C.fx[w&31])
else return new A.yW(C.ey[w>>>8&15],C.ey[w>>>4&15],C.ey[w&15])},
QV(){var x=this.r,w=this.f
if(x)return new A.m3(C.fx[w>>>10],C.fx[w>>>5&31],C.fx[w&31],255)
else return new A.m3(C.ey[w>>>8&15],C.ey[w>>>4&15],C.ey[w&15],C.vu[w>>>12&7])},
Lg(){var x=this,w=x.c?1:0,v=x.d,u=x.e?1:0,t=x.f,s=x.r?1:0
return(w|(v&16383)<<1|u<<15|(t&32767)<<16|s<<31)>>>0},
ut(d){var x=this,w=x.a[x.b+1]
x.c=(w&1)===1
x.sNl(x.Lg())
x.d=w>>>1&16383
x.sNl(x.Lg())
x.e=(w>>>15&1)===1
x.sNl(x.Lg())
x.f=w>>>16&32767
x.sNl(x.Lg())
x.r=(w>>>31&1)===1
x.sNl(x.Lg())}}
A.bu7.prototype={
ow(d){var x,w=this,v=d.length,u=v-(v>>>1&1431655765)>>>0
u=(u&858993459)+(u>>>2&858993459)
if((u+(u>>>4)>>>0&252645135)*16843009>>>0>>>24===1){x=w.aYz(d)
if(x!=null){w.a=d
return w.b=x}}x=w.aYP(d)
if(x!=null){w.a=d
return w.b=x}x=w.aYN(d)
if(x!=null){w.a=d
return w.b=x}return null},
aYP(d){var x,w,v=A.cV(d,!1,null,0)
if(v.a1()!==52)return null
if(v.a1()!==55727696)return null
x=B.a([0,0,0,0],y.t)
w=new A.QT(x)
v.a1()
w.b=v.a1()
x[0]=v.cq()
x[1]=v.cq()
x[2]=v.cq()
x[3]=v.cq()
v.a1()
v.a1()
w.f=v.a1()
w.r=v.a1()
v.a1()
v.a1()
v.a1()
v.a1()
w.Q=v.a1()
return w},
aYN(d){var x,w,v=A.cV(d,!1,null,0)
if(v.a1()!==52)return null
x=new A.a3J()
x.b=v.a1()
x.a=v.a1()
v.a1()
x.d=v.a1()
v.a1()
x.f=v.a1()
v.a1()
v.a1()
v.a1()
x.y=v.a1()
w=v.a1()
x.z=w
x.Q=v.a1()
if(w!==559044176)return null
return x},
aYz(d){var x,w,v,u,t,s,r=null,q=d.length,p=A.cV(d,!1,r,0)
if(p.a1()!==0)return r
x=new A.axp()
x.b=p.a1()
x.a=p.a1()
p.a1()
p.a1()
p.a1()
p.a1()
p.a1()
p.a1()
p.a1()
w=p.a1()
x.y=w
if(w===559044176)return r
v=0
u=8
if(!(q===32)){t=0
while(!0){if(!(t<10)){v=1
break}s=t<<1>>>0
if((D.c.ek(64,s)&q)>>>0!==0){u=D.c.ek(16,t)
v=1
break}if((D.c.ek(128,s)&q)>>>0!==0){u=D.c.ek(16,t)
break}++t}if(t===10)return r}if((v+1)*2===4)return r
x.b=x.a=u
return x},
kc(d){var x,w,v=this,u=v.b
if(u==null||v.a==null)return null
if(u instanceof A.axp){u=u.a
x=v.b
x=x.gb2(x)
w=v.a
w.toString
return v.a3l(u,x,w)}else if(u instanceof A.a3J){u=v.a
u.toString
return v.aYM(u)}else if(u instanceof A.QT){u=v.a
u.toString
return v.aYO(u)}return null},
nz(d,e,f){if(this.ow(e)==null)return null
return this.kc(0)},
aYM(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.length
if(j<52||l.b==null)return k
x=l.b
x.toString
y.ab.a(x)
w=A.cV(d,!1,k,0)
w.d+=52
v=x.Q
if(v<1)v=(x.d&4096)!==0?6:1
if(v!==1)return k
u=x.a
t=x.b
if(u*t*x.f/8>j-52)return k
switch(x.d&255){case 16:s=A.hN(k,k,C.a7,0,C.bk,t,k,0,4,k,C.a7,u,!1)
for(x=s.a,x=x.ga3(x);x.q();){r=x.gL(x)
q=J.v(w.a,w.d++)
p=J.v(w.a,w.d++)
r.saf(0,p&240)
r.sap((p&15)<<4)
r.sau(0,q&240)
r.saG(0,(q&15)<<4)}return s
case 17:s=A.hN(k,k,C.a7,0,C.bk,t,k,0,4,k,C.a7,u,!1)
for(x=s.a,x=x.ga3(x);x.q();){r=x.gL(x)
o=w.al()
n=(o&1)!==0?255:0
r.saf(0,o>>>8&248)
r.sap(o>>>3&248)
r.sau(0,(o&62)<<2)
r.saG(0,n)}return s
case 18:s=A.hN(k,k,C.a7,0,C.bk,t,k,0,4,k,C.a7,u,!1)
for(x=s.a,x=x.ga3(x);x.q();){r=x.gL(x)
r.saf(0,J.v(w.a,w.d++))
r.sap(J.v(w.a,w.d++))
r.sau(0,J.v(w.a,w.d++))
r.saG(0,J.v(w.a,w.d++))}return s
case 19:s=A.hN(k,k,C.a7,0,C.bk,t,k,0,3,k,C.a7,u,!1)
for(x=s.a,x=x.ga3(x);x.q();){r=x.gL(x)
o=w.al()
r.saf(0,o>>>8&248)
r.sap(o>>>3&252)
r.sau(0,(o&31)<<3)}return s
case 20:s=A.hN(k,k,C.a7,0,C.bk,t,k,0,3,k,C.a7,u,!1)
for(x=s.a,x=x.ga3(x);x.q();){r=x.gL(x)
o=w.al()
r.saf(0,(o&31)<<3)
r.sap(o>>>2&248)
r.sau(0,o>>>7&248)}return s
case 21:s=A.hN(k,k,C.a7,0,C.bk,t,k,0,3,k,C.a7,u,!1)
for(x=s.a,x=x.ga3(x);x.q();){r=x.gL(x)
r.saf(0,J.v(w.a,w.d++))
r.sap(J.v(w.a,w.d++))
r.sau(0,J.v(w.a,w.d++))}return s
case 22:s=A.hN(k,k,C.a7,0,C.bk,t,k,0,1,k,C.a7,u,!1)
for(x=s.a,x=x.ga3(x);x.q();)x.gL(x).saf(0,J.v(w.a,w.d++))
return s
case 23:s=A.hN(k,k,C.a7,0,C.bk,t,k,0,4,k,C.a7,u,!1)
for(x=s.a,x=x.ga3(x);x.q();){r=x.gL(x)
n=J.v(w.a,w.d++)
m=J.v(w.a,w.d++)
r.saf(0,m)
r.sap(m)
r.sau(0,m)
r.saG(0,n)}return s
case 24:return k
case 25:return x.y===0?l.akD(u,t,w.hK()):l.a3l(u,t,w.hK())}return k},
aYO(d){var x,w,v,u=this
if(!(u.b instanceof A.QT))return null
x=A.cV(d,!1,null,0)
w=x.d+=52
v=y.aM.a(u.b)
x.d=w+v.Q
if(v.c[0]===0)switch(v.b){case 2:return u.akD(v.r,v.f,x.hK())
case 3:return u.a3l(v.r,v.f,x.hK())}return null},
akD(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=A.hN(b5,b5,C.a7,0,C.bk,c6,b5,0,3,b5,C.a7,c5,!1),b7=c5/4|0,b8=b7-1,b9=J.op(D.A.gaj(c7),0,null),c0=new A.rE(b9),c1=new A.rE(J.op(D.A.gaj(c7),0,null)),c2=new A.rE(J.op(D.A.gaj(c7),0,null)),c3=new A.rE(J.op(D.A.gaj(c7),0,null)),c4=new A.rE(J.op(D.A.gaj(c7),0,null))
for(x=0,w=0;x<b7;++x,w+=4)for(v=0,u=0;v<b7;++v,u+=4){c0.b=A.yX(v,x)<<1>>>0
c0.ut(0)
t=b9[c0.b]
s=c0.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&b8)>>>0
o=(p+1&b8)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&b8)>>>0
k=(l+1&b8)>>>0
c1.b=A.yX(l,p)<<1>>>0
c1.ut(0)
c2.b=A.yX(k,p)<<1>>>0
c2.ut(0)
c3.b=A.yX(l,o)<<1>>>0
c3.ut(0)
c4.b=A.yX(k,o)<<1>>>0
c4.ut(0)
j=c1.QS()
i=C.d5[r][0]
h=c2.QS()
g=C.d5[r][1]
f=c3.QS()
e=C.d5[r][2]
d=c4.QS()
a0=C.d5[r][3]
a1=c1.QT()
a2=C.d5[r][0]
a3=c2.QT()
a4=C.d5[r][1]
a5=c3.QT()
a6=C.d5[r][2]
a7=c4.QT()
a8=C.d5[r][3]
a9=C.OS[s+t&3]
b0=a9[0]
b1=a9[1]
b2=D.c.P((j.a*i+h.a*g+f.a*e+d.a*a0)*b0+(a1.a*a2+a3.a*a4+a5.a*a6+a7.a*a8)*b1,7)
b3=D.c.P((j.b*i+h.b*g+f.b*e+d.b*a0)*b0+(a1.b*a2+a3.b*a4+a5.b*a6+a7.b*a8)*b1,7)
b4=D.c.P((j.c*i+h.c*g+f.c*e+d.c*a0)*b0+(a1.c*a2+a3.c*a4+a5.c*a6+a7.c*a8)*b1,7)
b1=b6.a
if(b1!=null)b1.fe(m+u,n,b2,b3,b4)
t=t>>>2;++r}}}return b6},
a3l(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=A.hN(a4,a4,C.a7,0,C.bk,b5,a4,0,4,a4,C.a7,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.op(D.A.gaj(b6),0,null),a9=new A.rE(a8),b0=new A.rE(J.op(D.A.gaj(b6),0,null)),b1=new A.rE(J.op(D.A.gaj(b6),0,null)),b2=new A.rE(J.op(D.A.gaj(b6),0,null)),b3=new A.rE(J.op(D.A.gaj(b6),0,null))
for(x=0,w=0;x<a6;++x,w+=4)for(v=0,u=0;v<a6;++v,u+=4){a9.b=A.yX(v,x)<<1>>>0
a9.ut(0)
t=a8[a9.b]
s=a9.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&a7)>>>0
o=(p+1&a7)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&a7)>>>0
k=(l+1&a7)>>>0
b0.b=A.yX(l,p)<<1>>>0
b0.ut(0)
b1.b=A.yX(k,p)<<1>>>0
b1.ut(0)
b2.b=A.yX(l,o)<<1>>>0
b2.ut(0)
b3.b=A.yX(k,o)<<1>>>0
b3.ut(0)
j=b0.QU()
i=C.d5[r][0]
h=b1.QU()
g=C.d5[r][1]
g=new A.m3(j.a*i,j.b*i,j.c*i,j.d*i).a6(0,new A.m3(h.a*g,h.b*g,h.c*g,h.d*g))
h=b2.QU()
i=C.d5[r][2]
i=g.a6(0,new A.m3(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.QU()
g=C.d5[r][3]
f=i.a6(0,new A.m3(h.a*g,h.b*g,h.c*g,h.d*g))
g=b0.QV()
h=C.d5[r][0]
i=b1.QV()
j=C.d5[r][1]
j=new A.m3(g.a*h,g.b*h,g.c*h,g.d*h).a6(0,new A.m3(i.a*j,i.b*j,i.c*j,i.d*j))
i=b2.QV()
h=C.d5[r][2]
h=j.a6(0,new A.m3(i.a*h,i.b*h,i.c*h,i.d*h))
i=b3.QV()
j=C.d5[r][3]
e=h.a6(0,new A.m3(i.a*j,i.b*j,i.c*j,i.d*j))
d=C.OS[s+t&3]
j=d[0]
i=d[1]
a0=D.c.P(f.a*j+e.a*i,7)
a1=D.c.P(f.b*j+e.b*i,7)
a2=D.c.P(f.c*j+e.c*i,7)
a3=D.c.P(f.d*d[2]+e.d*d[3],7)
i=a5.a
if(i!=null)i.km(m+u,n,a0,a1,a2,a3)
t=t>>>2;++r}}}return a5}}
A.aBI.prototype={
vn(d,e){var x,w=this
if(e.c-e.d<18)return
w.a=e.cq()
w.b=e.cq()
x=e.cq()
w.c=x<12?C.ax9[x]:C.wR
e.al()
w.e=e.al()
w.f=e.cq()
e.al()
e.al()
w.x=e.al()
w.y=e.al()
w.z=e.cq()
w.Q=e.cq()},
aBI(){var x=this,w=x.z
if(w!==8&&w!==16&&w!==24&&w!==32)return!1
w=x.c
if(w===C.iG||w===C.iH){if(x.e>256||x.b!==1)return!1
w=x.f
if(w!==16&&w!==24&&w!==32)return!1}else if(x.b===1)return!1
return!0}}
A.o7.prototype={
J(){return"TgaImageType."+this.b}}
A.bFN.prototype={
nz(d,e,f){if(this.ow(e)==null)return null
return this.kc(0)},
ow(d){var x,w,v,u,t=this
t.a=new A.aBI(C.wR)
x=A.cV(d,!1,null,0)
t.b=x
w=x.jb(18)
t.a.vn(0,w)
if(!t.a.aBI())return null
x=t.b
v=t.a
x.d+=v.a
u=v.c
if(u===C.iG||u===C.iH)v.as=x.jb(v.e*D.c.P(v.f,3)).hK()
x=t.a
x.ax=t.b.d
return x},
kc(d){var x=this,w=x.a
if(w==null)return null
w=w.c
if(w===C.a4S)return x.akC()
else if(w===C.a4R||w===C.iH)return x.aYS()
else if(w===C.iG)return x.akC()
return null},
akx(d,e){var x,w,v,u,t,s,r,q=this,p=A.cV(d,!1,null,0),o=q.a.f
if(o===16){o=q.b
o===$&&B.b()
x=o.al()
w=x>>>7&248
v=x>>>2&248
u=(x&31)<<3
t=(x&32768)!==0?0:255
for(s=0;s<q.a.e;++s){e.ud(s,w)
e.ua(s,v)
e.u9(s,u)
e.u8(s,t)}}else{r=o===32
for(s=0;s<q.a.e;++s){u=J.v(p.a,p.d++)
v=J.v(p.a,p.d++)
w=J.v(p.a,p.d++)
t=r?J.v(p.a,p.d++):255
e.ud(s,w)
e.ua(s,v)
e.u9(s,u)
e.u8(s,t)}}},
aYS(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=h.z,f=g===16,e=f||g===32,d=h.x,a0=h.y,a1=e?4:3
h=h.c
x=A.hN(i,i,C.a7,0,C.bk,a0,i,0,a1,i,C.a7,d,h===C.iG||h===C.iH)
h=x.a
if((h==null?i:h.geP())!=null){h=j.a.as
h.toString
d=x.a
d=d==null?i:d.geP()
d.toString
j.akx(h,d)}w=x.gd0(0)
v=x.gb2(0)-1
h=g===8
u=0
while(!0){d=j.b
d===$&&B.b()
a0=d.d
if(!(a0<d.c&&v>=0))break
a1=d.a
d.d=a0+1
t=J.v(a1,a0)
s=(t&127)+1
r=0
if((t&128)!==0)if(h){d=j.b
q=J.v(d.a,d.d++)
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.mC(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}else{d=j.b
if(f){n=d.al()
q=n>>>7&248
m=n>>>2&248
l=(n&31)<<3
k=(n&32768)!==0?0:255
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.km(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}else{l=J.v(d.a,d.d++)
d=j.b
m=J.v(d.a,d.d++)
d=j.b
q=J.v(d.a,d.d++)
if(e){d=j.b
k=J.v(d.a,d.d++)}else k=255
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.km(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}}else if(h)for(p=0;p<s;++p){d=j.b
q=J.v(d.a,d.d++)
o=u+1
d=x.a
if(d!=null)d.mC(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}else if(f)for(p=0;p<s;++p){n=j.b.al()
k=(n&32768)!==0?0:255
o=u+1
d=x.a
if(d!=null)d.km(u,v,n>>>7&248,n>>>2&248,(n&31)<<3,k)
d=j.b
if(d.d>=d.c){u=o
break}if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}else for(p=0;p<s;++p){d=j.b
l=J.v(d.a,d.d++)
d=j.b
m=J.v(d.a,d.d++)
d=j.b
q=J.v(d.a,d.d++)
if(e){d=j.b
k=J.v(d.a,d.d++)}else k=255
o=u+1
d=x.a
if(d!=null)d.km(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}if(u>=w){--v
if(v<0)break
u=0}}return x},
akC(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
g===$&&B.b()
x=i.a
g.d=x.ax
w=x.z
g=w===16
v=!0
if(!g)if(w!==32){u=x.c
if(u===C.iG||u===C.iH){u=x.f
u=u===16||u===32}else u=!1
v=u}u=x.x
t=x.y
s=v?4:3
x=x.c
r=A.hN(h,h,C.a7,0,C.bk,t,h,0,s,h,C.a7,u,x===C.iG||x===C.iH)
x=i.a
u=x.c
if(u===C.iG||u===C.iH){x=x.as
x.toString
u=r.a
u=u==null?h:u.geP()
u.toString
i.akx(x,u)}if(w===8)for(q=r.gb2(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
g=i.b
o=J.v(g.a,g.d++)
g=r.a
if(g!=null)g.mC(p,q,o);++p}}else if(g)for(q=r.gb2(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
n=i.b.al()
m=(n&32768)!==0?0:255
g=r.a
if(g!=null)g.km(p,q,n>>>7&248,n>>>2&248,(n&31)<<3,m);++p}}else for(q=r.gb2(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
g=i.b
l=J.v(g.a,g.d++)
g=i.b
k=J.v(g.a,g.d++)
g=i.b
j=J.v(g.a,g.d++)
if(v){g=i.b
m=J.v(g.a,g.d++)}else m=255
g=r.a
if(g!=null)g.km(p,q,j,k,l,m);++p}}return r}}
A.bGs.prototype={
ja(d){var x,w,v,u,t=this
if(d===0)return 0
if(t.c===0){t.c=8
t.b=t.a.cq()}for(x=t.a,w=0;v=t.c,d>v;){w=D.c.eR(w,v)+(t.b&C.n8[v])
d-=v
t.c=8
t.b=J.v(x.a,x.d++)}if(d>0){if(v===0){t.c=8
t.b=x.cq()}x=D.c.eR(w,d)
v=t.b
u=t.c-d
w=x+(D.c.nY(v,u)&C.n8[d])
t.c=u}return w}}
A.aBM.prototype={
j(d){var x=this,w=x.a,v=$.cmf().i(0,w)
if(v!=null)return v.a+": "+x.b.j(0)+" "+x.c
return"<"+w+">: "+x.b.j(0)+" "+x.c},
p8(d){var x,w,v,u=this,t=u.e
if(t!=null)return t
t=u.f
t.d=u.d
x=u.c
w=u.b
v=t.jb(x*(w!==C.Y?C.jm[w.a]:0))
switch(w.a){case 1:return u.e=new A.u_(new Uint8Array(B.bV(v.jb(x).hK())))
case 2:return u.e=new A.BD(x===0?"":v.jc(x-1))
case 7:return u.e=new A.u_(new Uint8Array(B.bV(v.jb(x).hK())))
case 3:return u.e=A.cye(v,x)
case 4:return u.e=A.cy9(v,x)
case 5:return u.e=A.cya(v,x)
case 11:return u.e=A.cyg(v,x)
case 12:return u.e=A.cy8(v,x)
case 6:return u.e=new A.vZ(new Int8Array(B.bV(J.cmm(D.A.gaj(v.hK()),0,x))))
case 8:return u.e=A.cyd(v,x)
case 9:return u.e=A.cyb(v,x)
case 10:return u.e=A.cyc(v,x)
case 0:return null}},
gp(d){return this.e}}
A.bGu.prototype={
bvy(d,e,f,g){var x,w,v,u=this
u.r=e
u.x=u.w=0
x=D.c.b8(u.a+7,8)
for(w=0,v=0;v<g;++v){u.a3j(d,w,f)
w+=x}},
a3j(d,e,f){var x,w,v,u,t,s,r,q,p=this
p.d=0
for(x=p.a,w=!0;f<x;){for(;w;){v=p.yI(10)
u=C.Pj[v]
t=D.c.P(u,1)&15
if(t===12){u=C.u4[(v<<2&12|p.oz(2))>>>0]
s=D.c.P(u,1)
f+=D.c.P(u,4)&4095
p.ls(4-(s&7))}else if(t===0)throw B.l(A.c4("TIFFFaxDecoder0"))
else if(t===15)throw B.l(A.c4("TIFFFaxDecoder1"))
else{f+=D.c.P(u,5)&2047
p.ls(10-t)
if((u&1)===0){p.f[p.d++]=f
w=!1}}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}for(;!w;){u=C.Kq[p.oz(4)]
r=u>>>5&2047
q=!0
if(r===100){u=C.LX[p.yI(9)]
t=D.c.P(u,1)&15
r=D.c.P(u,5)&2047
if(t===12){p.ls(5)
u=C.u4[p.oz(4)]
s=D.c.P(u,1)
r=D.c.P(u,4)&4095
p.pD(d,e,f,r)
f+=r
p.ls(4-(s&7))}else if(t===15)throw B.l(A.c4("TIFFFaxDecoder2"))
else{p.pD(d,e,f,r)
f+=r
p.ls(9-t)
if((u&1)===0){p.f[p.d++]=f
w=q}}}else{if(r===200){u=C.Kk[p.oz(2)]
r=u>>>5&2047
p.pD(d,e,f,r)
f+=r
p.ls(2-(u>>>1&15))
p.f[p.d++]=f}else{p.pD(d,e,f,r)
f+=r
p.ls(4-(u>>>1&15))
p.f[p.d++]=f}w=q}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}}p.f[p.d++]=f},
bvz(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.r=a0
e.z=3
e.x=e.w=0
x=e.a
w=D.c.b8(x+7,8)
v=B.bK(2,null,!1,y.s)
e.at=a3&1
e.as=a3>>>2&1
if(e.aqN()!==1)throw B.l(A.c4("TIFFFaxDecoder3"))
e.a3j(d,0,a1)
for(u=w,t=1;t<a2;++t){if(e.aqN()===0){s=e.e
e.e=e.f
e.f=s
e.y=0
r=a1
q=-1
p=!0
o=0
while(!0){r.toString
if(!(r<x))break
e.amF(q,p,v)
n=v[0]
m=v[1]
l=C.P_[e.oz(7)]&255
k=l>>>3&15
j=l&7
if(k===0){if(!p){m.toString
e.pD(d,u,r,m-r)}e.ls(7-j)
r=m
q=r}else if(k===1){e.ls(7-j)
i=o+1
h=i+1
if(p){r+=e.T6()
e.f[o]=r
g=e.T5()
e.pD(d,u,r,g)
r+=g
e.f[i]=r}else{g=e.T5()
e.pD(d,u,r,g)
r+=g
e.f[o]=r
r+=e.T6()
e.f[i]=r}o=h
q=r}else{if(k<=8){n.toString
f=n+(k-5)
i=o+1
e.f[o]=f
p=!p
if(p)e.pD(d,u,r,f-r)
e.ls(7-j)}else throw B.l(A.c4("TIFFFaxDecoder4"))
r=f
o=i
q=r}}e.f[o]=r
e.d=o+1}else e.a3j(d,u,a1)
u+=w}},
bvF(a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.r=a4
a2.z=4
a2.x=a2.w=0
x=a2.a
w=D.c.b8(x+7,8)
v=B.bK(2,null,!1,y.s)
u=a2.f
a2.d=0
a2.d=1
u[0]=x
a2.d=2
u[1]=x
for(t=0,s=0;s<a6;++s){r=a2.e
a2.e=a2.f
a2.f=r
a2.y=0
q=a5
p=-1
o=!0
n=0
while(!0){q.toString
if(!(q<x))break
a2.amF(p,o,v)
m=v[0]
l=v[1]
k=C.P_[a2.oz(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
a2.pD(a3,t,q,l-q)}a2.ls(7-i)
q=l
p=q}else if(j===1){a2.ls(7-i)
h=n+1
g=h+1
if(o){q+=a2.T6()
r[n]=q
f=a2.T5()
a2.pD(a3,t,q,f)
q+=f
r[h]=q}else{f=a2.T5()
a2.pD(a3,t,q,f)
q+=f
r[n]=q
q+=a2.T6()
r[h]=q}n=g
p=q}else if(j<=8){m.toString
e=m+(j-5)
h=n+1
r[n]=e
o=!o
if(o)a2.pD(a3,t,q,e-q)
a2.ls(7-i)
q=e
n=h
p=q}else if(j===11){if(a2.oz(3)!==7)throw B.l(A.c4("TIFFFaxDecoder5"))
for(d=0,a0=!1;!a0;o=a1){for(;a2.oz(1)!==1;)++d
if(d>5){d-=6
if(!o&&d>0){h=n+1
r[n]=q
n=h}q+=d
if(d>0)o=!0
a1=a2.oz(1)===0
if(a1){if(!o){h=n+1
r[n]=q
n=h}}else if(o){h=n+1
r[n]=q
n=h}o=a1
a0=!0}a1=d===5
if(a1){if(!o){h=n+1
r[n]=q
n=h}q+=d}else{q+=d
h=n+1
r[n]=q
a2.pD(a3,t,q,1);++q
n=h}}}else throw B.l(A.c4("TIFFFaxDecoder5 "+j))}r[n]=q
a2.d=n+1
t+=w}},
T6(){var x,w,v,u,t,s,r=this
for(x=0,w=!0;w;){v=r.yI(10)
u=C.Pj[v]
t=D.c.P(u,1)&15
if(t===12){u=C.u4[(v<<2&12|r.oz(2))>>>0]
s=D.c.P(u,1)
x+=D.c.P(u,4)&4095
r.ls(4-(s&7))}else if(t===0)throw B.l(A.c4("TIFFFaxDecoder0"))
else if(t===15)throw B.l(A.c4("TIFFFaxDecoder1"))
else{x+=D.c.P(u,5)&2047
r.ls(10-t)
if((u&1)===0)w=!1}}return x},
T5(){var x,w,v,u,t,s,r=this
for(x=0,w=!1;!w;){v=C.Kq[r.oz(4)]
u=v>>>5&2047
if(u===100){v=C.LX[r.yI(9)]
t=D.c.P(v,1)&15
s=D.c.P(v,5)
if(t===12){r.ls(5)
v=C.u4[r.oz(4)]
s=D.c.P(v,1)
x+=D.c.P(v,4)&4095
r.ls(4-(s&7))}else if(t===15)throw B.l(A.c4("TIFFFaxDecoder2"))
else{x+=s&2047
r.ls(9-t)
if((v&1)===0)w=!0}}else{if(u===200){v=C.Kk[r.oz(2)]
x+=v>>>5&2047
r.ls(2-(v>>>1&15))}else{x+=u
r.ls(4-(v>>>1&15))}w=!0}}return x},
aqN(){var x,w,v=this,u="TIFFFaxDecoder8",t=v.as
if(t===0){if(v.yI(12)!==1)throw B.l(A.c4("TIFFFaxDecoder6"))}else if(t===1){t=v.w
t.toString
x=8-t
if(v.yI(x)!==0)throw B.l(A.c4(u))
if(x<4)if(v.yI(8)!==0)throw B.l(A.c4(u))
for(;w=v.yI(8),w!==1;)if(w!==0)throw B.l(A.c4(u))}if(v.at===0)return 1
else return v.oz(1)},
amF(d,e,f){var x,w=this,v=w.e,u=w.d,t=w.y,s=t>0?t-1:0
s=e?(s&4294967294)>>>0:(s|1)>>>0
for(x=s;x<u;x+=2){t=v[x]
t.toString
d.toString
if(t>d){w.y=x
f[0]=t
break}}t=x+1
if(t<u)f[1]=v[t]},
pD(d,e,f,g){var x,w,v,u,t,s=8*e+f,r=s+g,q=D.c.P(s,3),p=s&7
if(p>0){x=D.c.eR(1,7-p)
w=J.v(d.a,d.d+q)
while(!0){if(!(x>0&&s<r))break
w=(w|x)>>>0
x=x>>>1;++s}d.m(0,q,w)}q=D.c.P(s,3)
for(v=r-7;s<v;q=u){u=q+1
J.bT(d.a,d.d+q,255)
s+=8}for(;s<r;){q=D.c.P(s,3)
v=J.v(d.a,d.d+q)
t=D.c.eR(1,7-(s&7))
J.bT(d.a,d.d+q,(v|t)>>>0);++s}},
yI(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.r
j===$&&B.b()
x=j.d
w=j.c-x-1
v=k.x
u=k.c
t=0
s=0
if(u===1){v.toString
r=J.v(j.a,x+v)
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=J.v(u,x+j)
else{t=J.v(u,x+j)
j=k.r
s=J.v(j.a,j.d+(v+2))}}}else if(u===2){v.toString
r=C.lb[J.v(j.a,x+v)&255]
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=C.lb[J.v(u,x+j)&255]
else{t=C.lb[J.v(u,x+j)&255]
j=k.r
s=C.lb[J.v(j.a,j.d+(v+2))&255]}}}else throw B.l(A.c4("TIFFFaxDecoder7"))
j=k.w
j.toString
q=8-j
p=d-q
if(p>8){o=p-8
n=8}else{n=p
o=0}j=k.x
j.toString
j=k.x=j+1
m=D.c.eR(r&C.n8[q],p)
l=D.c.h2(t&C.Bj[n],8-n)
if(o!==0){l=D.c.eR(l,o)|D.c.h2(s&C.Bj[o],8-o)
k.x=j+1
k.w=o}else if(n===8){k.w=0
k.x=j+1}else k.w=n
return(m|l)>>>0},
oz(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.r
m===$&&B.b()
x=m.d
w=m.c-x-1
v=n.x
u=n.c
t=0
if(u===1){v.toString
s=J.v(m.a,x+v)
if(!(v===w)){m=n.r
t=J.v(m.a,m.d+(v+1))}}else if(u===2){v.toString
s=C.lb[J.v(m.a,x+v)&255]
if(!(v===w)){m=n.r
t=C.lb[J.v(m.a,m.d+(v+1))&255]}}else throw B.l(A.c4("TIFFFaxDecoder7"))
m=n.w
m.toString
r=8-m
q=d-r
p=r-d
if(p>=0){o=D.c.h2(s&C.n8[r],p)
m+=d
n.w=m
if(m===8){n.w=0
m=n.x
m.toString
n.x=m+1}}else{o=(D.c.eR(s&C.n8[r],-p)|D.c.h2(t&C.Bj[q],8-q))>>>0
m=n.x
m.toString
n.x=m+1
n.w=q}return o},
ls(d){var x,w=this,v=w.w
v.toString
x=v-d
if(x<0){v=w.x
v.toString
w.x=v-1
w.w=8+x}else w.w=x}}
A.aBN.prototype={
aTm(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=A.c9(a0,f,0),d=a0.al()
for(x=g.a,w=0;w<d;++w){v=a0.al()
u=a0.al()
t=C.N2[u]
s=C.jm[u]
r=a0.a1()
if(r*s>4)q=a0.a1()
else{q=a0.d
a0.d=q+4}p=new A.aBM(v,t,r,q,e)
x.m(0,v,p)
if(v===256){o=p.p8(0)
o=o==null?f:o.C(0)
g.b=o==null?0:o}else if(v===257){o=p.p8(0)
o=o==null?f:o.C(0)
g.c=o==null?0:o}else if(v===262){n=p.p8(0)
m=n==null?f:n.C(0)
if(m==null)m=17
if(m<17)g.d=C.avy[m]
else g.d=C.DW}else if(v===259){o=p.p8(0)
o=o==null?f:o.C(0)
g.e=o==null?0:o}else if(v===258){o=p.p8(0)
o=o==null?f:o.C(0)
g.f=o==null?0:o}else if(v===277){o=p.p8(0)
o=o==null?f:o.C(0)
g.r=o==null?0:o}else if(v===317){o=p.p8(0)
o=o==null?f:o.C(0)
g.Q=o==null?0:o}else if(v===339){o=p.p8(0)
n=o==null?f:o.C(0)
g.x=C.aw4[n==null?0:n]}else if(v===320){n=p.p8(0)
if(n!=null){o=J.cNo(D.A.gaj(n.tX()))
g.id=o
g.k1=0
o=o.length/3|0
g.k2=o
g.k3=o*2}}}l=g.id
o=l!=null
if(o&&g.d===C.DX)g.r=1
if(g.b===0||g.c===0)return
if(o&&g.f===8){k=l.length
for(o=l.$flags|0,w=0;w<k;++w){j=l[w]
o&2&&B.B(l)
l[w]=j>>>8}}if(g.d===C.DV)g.z=!0
g.w=g.r
if(x.a4(0,324)){g.ay=g.FQ(322)
g.ch=g.FQ(323)
g.CW=g.V0(324)
g.cx=g.V0(325)}else{g.ay=g.V_(322,g.b)
if(!x.a4(0,278))g.ch=g.V_(323,g.c)
else{i=g.FQ(278)
if(i===-1)g.ch=g.c
else g.ch=i}g.CW=g.V0(273)
g.cx=g.V0(279)}o=g.b
j=g.ay
g.cy=D.c.hv(o+j-1,j)
o=g.c
h=g.ch
g.db=D.c.hv(o+h-1,h)
g.dx=j*h*g.r
g.dy=g.V_(266,1)
g.fr=g.FQ(292)
g.fx=g.FQ(293)
g.FQ(338)
switch(g.d.a){case 0:case 1:x=g.f
if(x===1&&g.r===1)g.y=C.DU
else if(x===4&&g.r===1)g.y=C.b5p
else if(D.c.aq(x,8)===0){x=g.r
if(x===1)g.y=C.b5q
else if(x===2)g.y=C.b5r
else g.y=C.o2}break
case 2:if(D.c.aq(g.f,8)===0){x=g.r
if(x===3)g.y=C.a4U
else if(x===4)g.y=C.b5t
else g.y=C.o2}break
case 3:x=!1
if(g.r===1)if(g.id!=null){x=g.f
x=x===4||x===8||x===16}if(x)g.y=C.b5s
break
case 4:if(g.f===1&&g.r===1)g.y=C.DU
break
case 6:if(g.e===7&&g.f===8&&g.r===3)g.y=C.a4U
else{if(x.a4(0,530)){n=x.i(0,530).p8(0)
g.as=n.C(0)
x=g.at=n.jd(0,1)}else x=g.at=g.as=2
o=g.as
o===$&&B.b()
if(o*x===1)g.y=C.o2
else if(g.f===8&&g.r===3)g.y=C.b5u}break
case 5:if(D.c.aq(g.f,8)===0)g.y=C.o2
x=g.r
if(x===4)g.w=3
else if(x===5)g.w=4
break
default:if(D.c.aq(g.f,8)===0)g.y=C.o2
break}},
dk(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.x,d=e===C.o1,a0=e===C.b0
e=g.f
if(e===1)x=C.fi
else if(e===2)x=C.h2
else{if(e===4)e=C.h3
else if(d&&e===16)e=C.hJ
else if(d&&e===32)e=C.j7
else if(d&&e===64)e=C.kD
else if(a0&&e===8)e=C.kE
else if(a0&&e===16)e=C.kF
else if(a0&&e===32)e=C.kG
else if(e===16)e=C.cd
else e=e===32?C.j8:C.a7
x=e}w=g.id!=null&&g.d===C.DX
v=w?3:g.w
e=g.b
u=A.hN(f,f,x,0,C.bk,g.c,f,0,v,f,x,e,w)
if(w){e=u.a
e=e==null?f:e.geP()
e.toString
t=g.id
s=t.length
r=s/3|0
q=g.k1
q===$&&B.b()
p=g.k2
p===$&&B.b()
o=g.k3
o===$&&B.b()
for(n=o,m=p,l=q,k=0;k<r;++k,++l,++m,++n){if(n>=s)break
e.pi(k,t[l],t[m],t[n])}}j=0
i=0
while(!0){e=g.db
e===$&&B.b()
if(!(j<e))break
h=0
while(!0){e=g.cy
e===$&&B.b()
if(!(h<e))break
g.aYT(a2,u,h,j);++h;++i}++j}return u},
aYT(b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null
if(a8.y===C.DU){a8.aYC(b0,b1,b2,b3)
return}u=a8.cy
u===$&&B.b()
t=b3*u+b2
b0.d=a8.CW[t]
u=a8.ay
s=b2*u
r=a8.ch
q=b3*r
x=a8.cx[t]
p=u*r*a8.r
u=a8.f
r=u===16
if(r)p*=2
else if(u===32)p*=4
w=null
if(u===8||r||u===32||u===64){u=a8.e
if(u===1)w=b0
else if(u===5){w=A.cV(new Uint8Array(p),!1,a9,0)
v=A.cz6()
try{J.cNt(v,A.c9(b0,x,0),w.a)}catch(o){}if(a8.Q===2)for(n=0;n<a8.ch;++n){m=a8.r
u=a8.ay
l=m*(n*u+1)
k=u*m
for(;m<k;++m){u=w
r=J.v(u.a,u.d+l)
j=w
i=a8.r
i=J.v(j.a,j.d+(l-i))
J.bT(u.a,u.d+l,r+i);++l}}}else if(u===32773){w=A.cV(new Uint8Array(p),!1,a9,0)
a8.akB(b0,p,w.a)}else if(u===32946)w=A.cV(C.iV.Cv(b0.Jg(0,0,x)),!1,a9,0)
else if(u===8)w=A.cV(C.iV.Cv(b0.Jg(0,0,x)),!1,a9,0)
else if(u===6){a8.bal(new A.ar8().dk(0,y.D.a(b0.Jg(0,0,x))),b1,s,q,a8.ay,a8.ch)
return}else throw B.l(A.c4("Unsupported Compression Type: "+u))
h=B.a([0,0,0],y.t)
for(g=q,f=0;f<a8.ch;++f,++g)for(e=s,d=0;d<a8.ay;++d,++e){u=w
if(u.d>=u.c||e>=a8.b||g>=a8.c)break
u=a8.r
if(u===1){u=a8.x
if(u===C.o1){u=a8.f
if(u===32){u=w.a1()
r=$.hp()
r.$flags&2&&B.B(r)
r[0]=u
a0=$.Fd()[0]}else if(u===64)a0=w.a_w()
else if(u===16){u=w.al()
r=$.hM
a0=(r!=null?r:A.iD())[u]}else a0=0
if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.mC(e,g,a0)}}else{r=a8.f
if(r===8)if(u===C.b0){u=w
u=J.v(u.a,u.d++)
r=$.nj()
r.$flags&2&&B.B(r)
r[0]=u
a0=$.oo()[0]}else{u=w
a0=J.v(u.a,u.d++)}else if(r===16)if(u===C.b0){u=w.al()
r=$.ni()
r.$flags&2&&B.B(r)
r[0]=u
a0=$.on()[0]}else a0=w.al()
else if(r===32)if(u===C.b0){u=w.a1()
r=$.hp()
r.$flags&2&&B.B(r)
r[0]=u
a0=$.kB()[0]}else a0=w.a1()
else a0=0
if(a8.d===C.DV){u=b1.a
a1=u==null?a9:u.gcj()
a0=(a1==null?0:a1)-a0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.mC(e,g,a0)}}}else if(u===2){u=a8.f
if(u===8){if(a8.x===C.b0){u=w
u=J.v(u.a,u.d++)
r=$.nj()
r.$flags&2&&B.B(r)
r[0]=u
a2=$.oo()[0]}else{u=w
a2=J.v(u.a,u.d++)}if(a8.x===C.b0){u=w
u=J.v(u.a,u.d++)
r=$.nj()
r.$flags&2&&B.B(r)
r[0]=u
a3=$.oo()[0]}else{u=w
a3=J.v(u.a,u.d++)}}else if(u===16){if(a8.x===C.b0){u=w.al()
r=$.ni()
r.$flags&2&&B.B(r)
r[0]=u
a2=$.on()[0]}else a2=w.al()
if(a8.x===C.b0){u=w.al()
r=$.ni()
r.$flags&2&&B.B(r)
r[0]=u
a3=$.on()[0]}else a3=w.al()}else if(u===32){if(a8.x===C.b0){u=w.a1()
r=$.hp()
r.$flags&2&&B.B(r)
r[0]=u
a2=$.kB()[0]}else a2=w.a1()
if(a8.x===C.b0){u=w.a1()
r=$.hp()
r.$flags&2&&B.B(r)
r[0]=u
a3=$.kB()[0]}else a3=w.a1()}else{a2=0
a3=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.fe(e,g,a2,a3,0)}}else if(u===3){u=a8.x
if(u===C.o1){u=a8.f
if(u===32){u=w.a1()
r=$.hp()
r.$flags&2&&B.B(r)
r[0]=u
u=$.Fd()
a4=u[0]
r[0]=w.a1()
a5=u[0]
r[0]=w.a1()
a6=u[0]}else{a5=0
a6=0
if(u===64)a4=w.a_w()
else if(u===16){u=w.al()
r=$.hM
a4=(r!=null?r:A.iD())[u]
u=w.al()
r=$.hM
a5=(r!=null?r:A.iD())[u]
u=w.al()
r=$.hM
a6=(r!=null?r:A.iD())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.fe(e,g,a4,a5,a6)}}else{r=a8.f
if(r===8){if(u===C.b0){u=w
u=J.v(u.a,u.d++)
r=$.nj()
r.$flags&2&&B.B(r)
r[0]=u
a4=$.oo()[0]}else{u=w
a4=J.v(u.a,u.d++)}if(a8.x===C.b0){u=w
u=J.v(u.a,u.d++)
r=$.nj()
r.$flags&2&&B.B(r)
r[0]=u
a5=$.oo()[0]}else{u=w
a5=J.v(u.a,u.d++)}if(a8.x===C.b0){u=w
u=J.v(u.a,u.d++)
r=$.nj()
r.$flags&2&&B.B(r)
r[0]=u
a6=$.oo()[0]}else{u=w
a6=J.v(u.a,u.d++)}}else if(r===16){if(u===C.b0){u=w.al()
r=$.ni()
r.$flags&2&&B.B(r)
r[0]=u
a4=$.on()[0]}else a4=w.al()
if(a8.x===C.b0){u=w.al()
r=$.ni()
r.$flags&2&&B.B(r)
r[0]=u
a5=$.on()[0]}else a5=w.al()
if(a8.x===C.b0){u=w.al()
r=$.ni()
r.$flags&2&&B.B(r)
r[0]=u
a6=$.on()[0]}else a6=w.al()}else if(r===32){if(u===C.b0){u=w.a1()
r=$.hp()
r.$flags&2&&B.B(r)
r[0]=u
a4=$.kB()[0]}else a4=w.a1()
if(a8.x===C.b0){u=w.a1()
r=$.hp()
r.$flags&2&&B.B(r)
r[0]=u
a5=$.kB()[0]}else a5=w.a1()
if(a8.x===C.b0){u=w.a1()
r=$.hp()
r.$flags&2&&B.B(r)
r[0]=u
a6=$.kB()[0]}else a6=w.a1()}else{a4=0
a5=0
a6=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.fe(e,g,a4,a5,a6)}}}else if(u>=4)if(a8.x===C.o1){u=a8.f
if(u===32){u=w.a1()
r=$.hp()
r.$flags&2&&B.B(r)
r[0]=u
u=$.Fd()
a4=u[0]
r[0]=w.a1()
a5=u[0]
r[0]=w.a1()
a6=u[0]
r[0]=w.a1()
a7=u[0]}else{a5=0
a6=0
a7=0
if(u===64)a4=w.a_w()
else if(u===16){u=w.al()
r=$.hM
a4=(r!=null?r:A.iD())[u]
u=w.al()
r=$.hM
a5=(r!=null?r:A.iD())[u]
u=w.al()
r=$.hM
a6=(r!=null?r:A.iD())[u]
u=w.al()
r=$.hM
a7=(r!=null?r:A.iD())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.km(e,g,a4,a5,a6,a7)}}else{u=b1.a
a3=u==null?a9:u.gcj()
if(a3==null)a3=0
u=a8.f
if(u===8){if(a8.x===C.b0){u=w
u=J.v(u.a,u.d++)
r=$.nj()
r.$flags&2&&B.B(r)
r[0]=u
a4=$.oo()[0]}else{u=w
a4=J.v(u.a,u.d++)}if(a8.x===C.b0){u=w
u=J.v(u.a,u.d++)
r=$.nj()
r.$flags&2&&B.B(r)
r[0]=u
a5=$.oo()[0]}else{u=w
a5=J.v(u.a,u.d++)}if(a8.x===C.b0){u=w
u=J.v(u.a,u.d++)
r=$.nj()
r.$flags&2&&B.B(r)
r[0]=u
a6=$.oo()[0]}else{u=w
a6=J.v(u.a,u.d++)}if(a8.x===C.b0){u=w
u=J.v(u.a,u.d++)
r=$.nj()
r.$flags&2&&B.B(r)
r[0]=u
a7=$.oo()[0]}else{u=w
a7=J.v(u.a,u.d++)}if(a8.r===5)if(a8.x===C.b0){u=w
u=J.v(u.a,u.d++)
r=$.nj()
r.$flags&2&&B.B(r)
r[0]=u
a3=$.oo()[0]}else{u=w
a3=J.v(u.a,u.d++)}}else if(u===16){if(a8.x===C.b0){u=w.al()
r=$.ni()
r.$flags&2&&B.B(r)
r[0]=u
a4=$.on()[0]}else a4=w.al()
if(a8.x===C.b0){u=w.al()
r=$.ni()
r.$flags&2&&B.B(r)
r[0]=u
a5=$.on()[0]}else a5=w.al()
if(a8.x===C.b0){u=w.al()
r=$.ni()
r.$flags&2&&B.B(r)
r[0]=u
a6=$.on()[0]}else a6=w.al()
if(a8.x===C.b0){u=w.al()
r=$.ni()
r.$flags&2&&B.B(r)
r[0]=u
a7=$.on()[0]}else a7=w.al()
if(a8.r===5)if(a8.x===C.b0){u=w.al()
r=$.ni()
r.$flags&2&&B.B(r)
r[0]=u
a3=$.on()[0]}else a3=w.al()}else if(u===32){if(a8.x===C.b0){u=w.a1()
r=$.hp()
r.$flags&2&&B.B(r)
r[0]=u
a4=$.kB()[0]}else a4=w.a1()
if(a8.x===C.b0){u=w.a1()
r=$.hp()
r.$flags&2&&B.B(r)
r[0]=u
a5=$.kB()[0]}else a5=w.a1()
if(a8.x===C.b0){u=w.a1()
r=$.hp()
r.$flags&2&&B.B(r)
r[0]=u
a6=$.kB()[0]}else a6=w.a1()
if(a8.x===C.b0){u=w.a1()
r=$.hp()
r.$flags&2&&B.B(r)
r[0]=u
a7=$.kB()[0]}else a7=w.a1()
if(a8.r===5)if(a8.x===C.b0){u=w.a1()
r=$.hp()
r.$flags&2&&B.B(r)
r[0]=u
a3=$.kB()[0]}else a3=w.a1()}else{a4=0
a5=0
a6=0
a7=0}if(a8.d===C.a4V){A.cGG(a4,a5,a6,a7,h)
a4=h[0]
a5=h[1]
a6=h[2]
a7=a3}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.km(e,g,a4,a5,a6,a7)}}}}else throw B.l(A.c4("Unsupported bitsPerSample: "+u))},
bal(d,e,f,g,h,i){var x,w,v,u
for(x=0;x<i;++x)for(w=x+g,v=0;v<h;++v){u=d.a
u=u==null?null:u.ed(v,x,null)
if(u==null)u=new A.fe()
e.AO(v+f,w,u)}},
aYC(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.cy
a2===$&&B.b()
w=a6*a2+a5
a3.d=a0.CW[w]
a2=a0.ay
v=a5*a2
u=a0.ch
t=a6*u
s=a0.cx[w]
x=null
r=a0.e
if(r===32773){q=D.c.aq(a2,8)===0?D.c.b8(a2,8)*u:(D.c.b8(a2,8)+1)*u
x=A.cV(new Uint8Array(a2*u),!1,a1,0)
a0.akB(a3,q,x.a)}else if(r===5){x=A.cV(new Uint8Array(a2*u),!1,a1,0)
A.cz6().Hf(0,A.c9(a3,s,0),x.a)
if(a0.Q===2)for(p=0;p<a0.c;++p){o=a0.r
n=o*(p*a0.b+1)
for(;o<a0.b*a0.r;++o){a2=x
u=J.v(a2.a,a2.d+n)
r=x
m=a0.r
m=J.v(r.a,r.d+(n-m))
J.bT(a2.a,a2.d+n,u+m);++n}}}else if(r===2){x=A.cV(new Uint8Array(a2*u),!1,a1,0)
try{A.cqm(a0.dy,a0.ay,a0.ch).bvy(x,a3,0,a0.ch)}catch(l){}}else if(r===3){x=A.cV(new Uint8Array(a2*u),!1,a1,0)
try{A.cqm(a0.dy,a0.ay,a0.ch).bvz(x,a3,0,a0.ch,a0.fr)}catch(l){}}else if(r===4){x=A.cV(new Uint8Array(a2*u),!1,a1,0)
try{A.cqm(a0.dy,a0.ay,a0.ch).bvF(x,a3,0,a0.ch,a0.fx)}catch(l){}}else if(r===8)x=A.cV(C.iV.Cv(a3.Jg(0,0,s)),!1,a1,0)
else if(r===32946)x=A.cV(C.iV.Cv(a3.Jg(0,0,s)),!1,a1,0)
else if(r===1)x=a3
else throw B.l(A.c4("Unsupported Compression Type: "+r))
k=new A.bGs(x)
j=a4.gcj()
a2=a0.z
i=a2?j:0
h=a2?0:j
for(g=t,f=0;f<a0.ch;++f,++g){for(e=v,d=0;d<a0.ay;++d,++e){a2=a4.a
u=a2==null
r=u?a1:a2.b
if(g<(r==null?0:r)){a2=u?a1:a2.a
a2=e>=(a2==null?0:a2)}else a2=!0
if(a2)break
a2=k.ja(1)
u=a4.a
if(a2===0){if(u!=null)u.fe(e,g,i,0,0)}else if(u!=null)u.fe(e,g,h,0,0)}k.c=0}},
akB(d,e,f){var x,w,v,u,t,s,r,q,p,o
for(x=J.cZ(f),w=0,v=0;v<e;){u=w+1
t=J.v(d.a,d.d+w)
s=$.nj()
s.$flags&2&&B.B(s)
s[0]=t
r=$.oo()[0]
if(r>=0&&r<=127)for(t=r+1,w=u,q=0;q<t;++q,v=p,w=u){p=v+1
u=w+1
x.m(f,v,J.v(d.a,d.d+w))}else{t=r<=-1&&r>=-127
w=u+1
if(t){o=J.v(d.a,d.d+u)
for(t=-r+1,q=0;q<t;++q,v=p){p=v+1
x.m(f,v,o)}}}}},
V_(d,e){var x=this.a
if(!x.a4(0,d))return e
x=x.i(0,d).p8(0)
x=x==null?null:x.C(0)
return x==null?0:x},
FQ(d){return this.V_(d,0)},
V0(d){var x,w=this.a
if(!w.a4(0,d))return null
x=w.i(0,d)
w=x.p8(0)
w.toString
return B.w3(x.c,w.gxC(w),!0,y.p)}}
A.Kl.prototype={
J(){return"TiffFormat."+this.b}}
A.ky.prototype={
J(){return"TiffPhotometricType."+this.b}}
A.rY.prototype={
J(){return"TiffImageType."+this.b}}
A.bGv.prototype={}
A.bjB.prototype={
Hf(d,e,f){var x,w,v,u,t,s,r=this
r.r=f
x=J.bz(f)
r.w=0
w=y.D.a(e.a)
r.e=w
r.f=w.length
r.b=e.d
if(w[0]===0&&w[1]===1)throw B.l(A.c4("Invalid LZW Data"))
r.aom()
r.d=r.c=0
v=r.a42()
w=r.x
u=0
while(!0){if(!(v!==257&&r.w<x))break
if(v===256){r.aom()
v=r.a42()
r.as=0
if(v===257)break
J.bT(r.r,r.w++,v)
u=v}else{t=r.Q
t.toString
if(v<t){r.amV(v)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bT(r.r,r.w++,w[s])
r.ail(u,w[r.as-1])}else{r.amV(u)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bT(r.r,r.w++,w[s])
J.bT(r.r,r.w++,w[r.as-1])
r.ail(u,w[r.as-1])}u=v}v=r.a42()}},
ail(d,e){var x,w=this,v=w.y
v===$&&B.b()
x=w.Q
x.toString
v.$flags&2&&B.B(v)
v[x]=e
v=w.z
v===$&&B.b()
v.$flags&2&&B.B(v)
v[x]=d
x=w.Q=x+1
if(x===511)w.a=10
else if(x===1023)w.a=11
else if(x===2047)w.a=12},
amV(d){var x,w,v,u,t,s,r=this
r.as=0
x=r.x
r.as=1
w=r.y
w===$&&B.b()
v=w[d]
x.$flags&2&&B.B(x)
x[0]=v
v=r.z
v===$&&B.b()
u=v[d]
for(t=1;u!==4098;t=s){s=t+1
r.as=s
x[t]=w[u]
u=v[u]}},
a42(){var x,w,v,u,t=this,s=t.b,r=t.f
r===$&&B.b()
if(s>=r)return 257
for(;x=t.d,w=t.a,x<w;s=u){if(s>=r)return 257
w=t.c
v=t.e
v===$&&B.b()
u=s+1
t.b=u
t.c=(w<<8>>>0)+v[s]>>>0
t.d=x+8}s=x-w
t.d=s
return D.c.h2(t.c,s)&C.ar5[w-9]},
aom(){var x,w,v=this
v.y=new Uint8Array(4096)
x=new Uint32Array(4096)
v.z=x
D.bq.lW(x,0,4096,4098)
for(x=v.y,w=0;w<256;++w){x.$flags&2&&B.B(x)
x[w]=w}v.a=9
v.Q=258}}
A.bGt.prototype={
kc(d){var x,w,v=this.a
if(v==null)return null
v=v.f[d]
x=this.c
x===$&&B.b()
w=v.dk(0,x)
return w},
nz(d,e,f){var x=this,w=A.cV(e,!1,null,0)
x.c=w
w=x.aqP(w)
x.a=w
if(w==null)return null
return x.kc(0)},
aqP(d){var x,w,v,u,t,s,r,q,p,o=null,n=B.a([],y._),m=new A.bGv(n),l=d.al()
if(l!==18761&&l!==19789)return o
if(l===19789)d.e=!0
else d.e=!1
v=d.al()
m.d=v
if(v!==42)return o
u=d.a1()
t=A.c9(d,o,0)
t.d=u
x=t
for(v=y.p,s=y.aL;u!==0;){w=null
try{r=new A.aBN(B.I(v,s),C.DW,C.a4T,C.b5v)
r.aTm(x)
w=r
q=w
if(!(q.b!==0&&q.c!==0))break}catch(p){break}n.push(w)
if(n.length===1){q=n[0]
m.a=q.b
m.b=q.c}u=x.a1()
if(u!==0)x.d=u}return n.length!==0?m:o}}
A.bJN.prototype={
NJ(){var x,w=this.a,v=w.rD()
if((v&1)!==0)return!1
if((v>>>1&7)>3)return!1
if((v>>>4&1)===0)return!1
this.f.d=v>>>5
if(w.rD()!==2752925)return!1
x=this.b
x.a=w.al()
x.b=w.al()
return!0},
o9(d){var x,w,v,u=this,t=null
if(!u.b26())return t
x=u.b
w=x.a
u.d=A.hN(t,t,C.a7,0,C.bk,x.b,t,0,4,t,C.a7,w,!1)
u.b9z()
if(!u.bf7())return t
x=x.w
if(x.length!==0){v=A.cV(new B.e6(x),!1,t,0)
x=u.d
x.toString
x.e=A.cxa(v)}return u.d},
b26(){var x,w,v,u,t=this
if(!t.NJ())return!1
t.fr=A.d1B()
for(x=t.dy,w=0;w<4;++w){v=new Int32Array(2)
u=new Int32Array(2)
x[w]=new A.aCJ(v,u,new Int32Array(2))}x=t.b
v=t.r.b=x.b
t.y=t.Q=0
x=x.a
t.z=x
t.as=v
t.at=x+15>>>4
t.ax=v+15>>>4
t.k1=0
v=t.a
x=t.f
u=x.d
u===$&&B.b()
u=A.cDl(v.jg(u))
t.c=u
v.d+=x.d
u.dz(1)
t.c.dz(1)
t.bff(t.x,t.fr)
t.bf6()
if(!t.bfa(v))return!1
t.bfc()
t.c.dz(1)
t.bfb()
return!0},
bff(d,e){var x,w,v,u=this,t=u.c
t===$&&B.b()
t=t.dz(1)!==0
d.a=t
if(t){d.b=u.c.dz(1)!==0
if(u.c.dz(1)!==0){d.c=u.c.dz(1)!==0
for(t=d.d,x=0;x<4;++x){if(u.c.dz(1)!==0){w=u.c
v=w.dz(7)
w=w.dz(1)===1?-v:v}else w=0
t.$flags&2&&B.B(t)
t[x]=w}for(t=d.e,x=0;x<4;++x){if(u.c.dz(1)!==0){w=u.c
v=w.dz(6)
w=w.dz(1)===1?-v:v}else w=0
t.$flags&2&&B.B(t)
t[x]=w}}if(d.b)for(x=0;x<3;++x){t=e.a
w=u.c.dz(1)!==0?u.c.dz(8):255
t.$flags&2&&B.B(t)
t[x]=w}}else d.b=!1
return!0},
bf6(){var x,w,v,u=this,t=u.w,s=u.c
s===$&&B.b()
t.a=s.dz(1)!==0
t.b=u.c.dz(6)
t.c=u.c.dz(3)
s=u.c.dz(1)!==0
t.d=s
if(s)if(u.c.dz(1)!==0){for(s=t.e,x=0;x<4;++x)if(u.c.dz(1)!==0){w=u.c
v=w.dz(6)
w=w.dz(1)===1?-v:v
s.$flags&2&&B.B(s)
s[x]=w}for(s=t.f,x=0;x<4;++x)if(u.c.dz(1)!==0){w=u.c
v=w.dz(6)
w=w.dz(1)===1?-v:v
s.$flags&2&&B.B(s)
s[x]=w}}if(t.b===0)s=0
else s=t.a?1:2
u.c_=s
return!0},
bfa(d){var x,w,v,u,t,s,r,q=d.c-d.d,p=this.c
p===$&&B.b()
p=D.c.ek(1,p.dz(2))
this.cy=p
x=p-1
w=x*3
if(q<w)return!1
for(p=this.db,v=0,u=0;u<x;++u,w=s){t=d.Sd(3,v)
s=w+((J.v(t.a,t.d)|J.v(t.a,t.d+1)<<8|J.v(t.a,t.d+2)<<16)>>>0)
if(s>q)s=q
r=new A.a7D(d.AX(s-w,w))
r.b=254
r.c=0
r.d=-8
p[u]=r
v+=3}p[x]=A.cDl(d.AX(q-w,d.d-d.b+w))
return w<q},
bfc(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
h===$&&B.b()
x=h.dz(7)
w=i.c.dz(1)!==0?i.c.JN(4):0
v=i.c.dz(1)!==0?i.c.JN(4):0
u=i.c.dz(1)!==0?i.c.JN(4):0
t=i.c.dz(1)!==0?i.c.JN(4):0
s=i.c.dz(1)!==0?i.c.JN(4):0
r=i.x
for(h=i.dy,q=r.a,p=!r.c,o=r.d,n=0;n<4;++n){if(q){m=o[n]
if(p)m+=x}else{if(n>0){h[n]=h[0]
continue}m=x}l=h[n]
k=l.a
j=m+w
if(j<0)j=0
else if(j>127)j=127
j=C.AN[j]
k.$flags&2&&B.B(k)
k[0]=j
if(m<0)j=0
else j=m>127?127:m
k[1]=C.AO[j]
j=l.b
k=m+v
if(k<0)k=0
else if(k>127)k=127
k=C.AN[k]
j.$flags&2&&B.B(j)
j[0]=k*2
k=m+u
if(k<0)k=0
else if(k>127)k=127
j[1]=C.AO[k]*101581>>>16
if(j[1]<8)j[1]=8
k=l.c
j=m+t
if(j<0)j=0
else if(j>117)j=117
j=C.AN[j]
k.$flags&2&&B.B(k)
k[0]=j
j=m+s
if(j<0)j=0
else if(j>127)j=127
k[1]=C.AO[j]}},
bfb(){var x,w,v,u,t,s,r=this,q=r.fr
for(x=0;x<4;++x)for(w=0;w<8;++w)for(v=0;v<3;++v)for(u=0;u<11;++u){t=r.c
t===$&&B.b()
s=t.im(C.aB6[x][w][v][u])!==0?r.c.dz(8):C.ar1[x][w][v][u]
t=q.b[x][w].a[v]
t.$flags&2&&B.B(t)
t[u]=s}t=r.c
t===$&&B.b()
t=t.dz(1)!==0
r.fx=t
if(t)r.fy=r.c.dz(8)},
bgI(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.c_
k.toString
if(k>0){x=l.w
for(k=x.e,w=x.f,v=l.x,u=v.e,t=0;t<4;++t){if(v.a){s=u[t]
if(!v.c){r=x.b
r.toString
s+=r}}else s=x.b
for(q=0;q<=1;++q){r=l.aD
r===$&&B.b()
p=r[t][q]
r=x.d
r===$&&B.b()
if(r){s.toString
o=s+k[0]
if(q!==0)o+=w[0]}else o=s
o.toString
if(o<0)o=0
else if(o>63)o=63
if(o>0){r=x.c
r===$&&B.b()
if(r>0){n=r>4?D.c.P(o,2):D.c.P(o,1)
m=9-r
if(n>m)n=m}else n=o
if(n<1)n=1
p.b=n
p.a=2*o+n
if(o>=40)r=2
else r=o>=15?1:0
p.d=r}else p.a=0
p.c=q!==0}}}},
b9z(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k.at
if(j!=null)m.bq=j
x=J.iV(4,y.K)
for(j=y.q,w=0;w<4;++w)x[w]=B.a([new A.Kx(),new A.Kx()],j)
m.aD=x
j=m.at
j.toString
x=J.iV(j,y.bt)
for(v=0;v<j;++v){u=new Uint8Array(16)
t=new Uint8Array(8)
x[v]=new A.aCK(u,t,new Uint8Array(8))}m.k2=x
m.ok=new Uint8Array(832)
j=m.at
j.toString
m.go=new Uint8Array(4*j)
u=m.p4=16*j
j=8*j
m.R8=j
t=m.c_
t.toString
s=C.Aw[t]
r=s*u
q=(s/2|0)*j
m.p1=A.cV(new Uint8Array(16*u+r),!1,l,r)
j=m.R8
j.toString
m.p2=A.cV(new Uint8Array(8*j+q),!1,l,q)
j=m.R8
j.toString
m.p3=A.cV(new Uint8Array(8*j+q),!1,l,q)
j=k.a
m.RG=A.cV(new Uint8Array(j),!1,l,0)
p=k.a+1>>>1
m.rx=A.cV(new Uint8Array(p),!1,l,0)
m.ry=A.cV(new Uint8Array(p),!1,l,0)
k=m.c_
k.toString
o=C.Aw[k]
if(k===2)m.ch=m.ay=0
else{k=m.y
k===$&&B.b()
k=D.c.b8(k-o,16)
m.ay=k
j=m.Q
j.toString
j=D.c.b8(j-o,16)
m.ch=j
if(k<0)m.ay=0
if(j<0)m.ch=0}k=m.as
k.toString
k=D.c.b8(k+15+o,16)
m.cx=k
j=m.z
j===$&&B.b()
j=D.c.b8(j+15+o,16)
m.CW=j
u=m.at
u.toString
if(j>u)m.CW=u
j=m.ax
j.toString
if(k>j)m.cx=j
n=u+1
x=J.iV(n,y.bQ)
for(v=0;v<n;++v)x[v]=new A.aCH()
m.k3=x
k=m.at
k.toString
x=J.iV(k,y.bl)
for(v=0;v<k;++v){j=new Int16Array(384)
x[v]=new A.aCI(j,new Uint8Array(16))}m.bY=x
k=m.at
k.toString
m.k4=B.bK(k,l,!1,y.B)
m.bgI()
A.d12()
m.e=new A.bJO()
return!0},
bf7(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.y2=0
x=j.id
w=j.x
v=j.db
u=0
while(!0){t=j.cx
t.toString
if(!(u<t))break
t=j.cy
t===$&&B.b()
s=v[(u&t-1)>>>0]
while(!0){u=j.y1
t=j.at
t.toString
if(!(u<t))break
t=j.k3
t===$&&B.b()
r=t[0]
q=t[1+u]
t=j.bY
t===$&&B.b()
p=t[u]
if(w.b){u=j.c
u===$&&B.b()
u=u.im(j.fr.a[0])
t=j.c
o=j.fr
j.k1=u===0?t.im(o.a[1]):2+t.im(o.a[2])}u=j.fx
u===$&&B.b()
if(u){u=j.c
u===$&&B.b()
t=j.fy
t===$&&B.b()
n=u.im(t)!==0}else n=!1
j.bf8()
if(!n)n=j.bfd(q,s)
else{r.a=q.a=0
u=p.b
u===$&&B.b()
if(!u)r.b=q.b=0
p.f=p.e=0}u=j.c_
u.toString
if(u>0){u=j.k4
u===$&&B.b()
t=j.y1
o=j.aD
o===$&&B.b()
m=j.k1
m===$&&B.b()
m=o[m]
o=p.b
o===$&&B.b()
l=m[o?1:0]
u[t]=l
l.c=l.c||!n}++j.y1}u=j.k3
u===$&&B.b()
u=u[0]
u.b=u.a=0
D.A.lW(x,0,4,0)
j.y1=0
j.bhI()
u=j.c_
u.toString
k=!1
if(u>0){u=j.y2
t=j.ch
t===$&&B.b()
if(u>=t){t=j.cx
t.toString
t=u<=t
k=t}}if(!j.b0W(k))return!1
u=++j.y2}return!0},
bhI(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.y2,a5=a2.ok
a5===$&&B.b()
x=A.cV(a5,!1,a3,40)
w=A.cV(a2.ok,!1,a3,584)
v=A.cV(a2.ok,!1,a3,600)
a5=a4>0
u=0
while(!0){t=a2.at
t.toString
if(!(u<t))break
t=a2.bY
t===$&&B.b()
s=t[u]
if(u>0){for(r=-1;r<16;++r){t=r*32
x.rw(t-4,4,x,t+12)}for(r=-1;r<8;++r){t=r*32
q=t-4
t+=4
w.rw(q,4,w,t)
v.rw(q,4,v,t)}}else{for(r=0;r<16;++r)J.bT(x.a,x.d+(r*32-1),129)
for(r=0;r<8;++r){t=r*32-1
J.bT(w.a,w.d+t,129)
J.bT(v.a,v.d+t,129)}if(a5){J.bT(v.a,v.d+-33,129)
J.bT(w.a,w.d+-33,129)
J.bT(x.a,x.d+-33,129)}}t=a2.k2
t===$&&B.b()
p=t[u]
o=s.a
n=s.e
if(a5){x.A2(-32,16,p.a)
w.A2(-32,8,p.b)
v.A2(-32,8,p.c)}else if(u===0){t=x.a
q=x.d+-33
J.tn(t,q,q+21,127)
q=w.a
t=w.d+-33
J.tn(q,t,t+9,127)
t=v.a
q=v.d+-33
J.tn(t,q,q+9,127)}t=s.b
t===$&&B.b()
if(t){m=A.c9(x,a3,-16)
l=m.Qo()
if(a5){t=a2.at
t.toString
if(u>=t-1){t=p.a[15]
q=m.a
k=m.d
J.tn(q,k,k+4,t)}else m.A2(0,4,a2.k2[u+1].a)}j=l[0]
l.$flags&2&&B.B(l)
l[96]=j
l[64]=j
l[32]=j
for(t=s.c,i=0;i<16;++i,n=n<<2>>>0){h=A.c9(x,a3,C.RI[i])
C.axU[t[i]].$1(h)
n.toString
q=i*16
a2.al6(n,new A.lU(o,q,Math.min(384,384),q,!1),h)}}else{t=A.cDo(u,a4,s.c[0])
t.toString
C.aCu[t].$1(x)
if(n!==0)for(i=0;i<16;++i,n=n<<2>>>0){h=A.c9(x,a3,C.RI[i])
n.toString
t=i*16
a2.al6(n,new A.lU(o,t,Math.min(384,384),t,!1),h)}}t=s.f
t===$&&B.b()
q=A.cDo(u,a4,s.d)
q.toString
C.MQ[q].$1(w)
C.MQ[q].$1(v)
q=Math.min(384,384)
g=new A.lU(o,256,q,256,!1)
if((t&255)!==0){k=a2.e
if((t&170)!==0){k===$&&B.b()
k.vA(g,w)
k.vA(A.c9(g,a3,16),A.c9(w,a3,4))
f=A.c9(g,a3,32)
e=A.c9(w,a3,128)
k.vA(f,e)
k.vA(A.c9(f,a3,16),A.c9(e,a3,4))}else{k===$&&B.b()
k.aFa(g,w)}}d=new A.lU(o,320,q,320,!1)
t=t>>>8
if((t&255)!==0){q=a2.e
if((t&170)!==0){q===$&&B.b()
q.vA(d,v)
q.vA(A.c9(d,a3,16),A.c9(v,a3,4))
t=A.c9(d,a3,32)
k=A.c9(v,a3,128)
q.vA(t,k)
q.vA(A.c9(t,a3,16),A.c9(k,a3,4))}else{q===$&&B.b()
q.aFa(d,v)}}t=a2.ax
t.toString
if(a4<t-1){D.A.e3(p.a,0,16,x.hK(),480)
D.A.e3(p.b,0,8,w.hK(),224)
D.A.e3(p.c,0,8,v.hK(),224)}a0=u*16
a1=u*8
for(r=0;r<16;++r){t=a2.p4
t.toString
q=a2.p1
q===$&&B.b()
q.rw(a0+r*t,16,x,r*32)}for(r=0;r<8;++r){t=a2.R8
t.toString
q=a2.p2
q===$&&B.b()
k=r*32
q.rw(a1+r*t,8,w,k)
t=a2.R8
t.toString
q=a2.p3
q===$&&B.b()
q.rw(a1+r*t,8,v,k)}++u}},
al6(d,e,f){var x,w,v,u,t,s
switch(d>>>30){case 3:x=this.e
x===$&&B.b()
x.Qp(0,e,f,!1)
break
case 2:this.e===$&&B.b()
w=J.v(e.a,e.d)+4
v=D.c.l5(D.c.P(J.v(e.a,e.d+4)*35468,16),32)
u=D.c.l5(D.c.P(J.v(e.a,e.d+4)*85627,16),32)
t=D.c.l5(D.c.P(J.v(e.a,e.d+1)*35468,16),32)
s=D.c.l5(D.c.P(J.v(e.a,e.d+1)*85627,16),32)
A.bJQ(f,0,w+u,s,t)
A.bJQ(f,1,w+v,s,t)
A.bJQ(f,2,w-v,s,t)
A.bJQ(f,3,w-u,s,t)
break
case 1:x=this.e
x===$&&B.b()
x.Qq(e,f)
break
default:break}},
b_7(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.p4,j=m.k4
j===$&&B.b()
j=j[d]
j.toString
x=m.p1
x===$&&B.b()
w=A.c9(x,l,d*16)
v=j.b
u=j.a
if(u===0)return
if(m.c_===1){if(d>0){x=m.e
x===$&&B.b()
k.toString
x.agj(w,k,u+4)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.aLK(w,k,u)}if(e>0){x=m.e
x===$&&B.b()
k.toString
x.agk(w,k,u+4)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.aLN(w,k,u)}}else{t=m.R8
x=m.p2
x===$&&B.b()
s=d*8
r=A.c9(x,l,s)
x=m.p3
x===$&&B.b()
q=A.c9(x,l,s)
p=j.d
if(d>0){x=m.e
x===$&&B.b()
k.toString
s=u+4
x.Fm(w,1,k,16,s,v,p)
t.toString
x.Fm(r,1,t,8,s,v,p)
x.Fm(q,1,t,8,s,v,p)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.byJ(w,k,u,v,p)
t.toString
o=A.c9(r,l,4)
n=A.c9(q,l,4)
x.Fl(o,1,t,8,u,v,p)
x.Fl(n,1,t,8,u,v,p)}if(e>0){x=m.e
x===$&&B.b()
k.toString
s=u+4
x.Fm(w,k,1,16,s,v,p)
t.toString
x.Fm(r,t,1,8,s,v,p)
x.Fm(q,t,1,8,s,v,p)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.bKa(w,k,u,v,p)
t.toString
x=4*t
o=A.c9(r,l,x)
n=A.c9(q,l,x)
j.Fl(o,t,1,8,u,v,p)
j.Fl(n,t,1,8,u,v,p)}}},
b0G(){var x,w=this,v=w.ay
v===$&&B.b()
x=v
while(!0){v=w.CW
v.toString
if(!(x<v))break
w.b_7(x,w.y2);++x}},
b0W(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.c_
e.toString
x=C.Aw[e]
e=g.p4
e.toString
w=x*e
e=g.R8
e.toString
v=(x/2|0)*e
e=g.p1
e===$&&B.b()
u=-w
t=A.c9(e,f,u)
e=g.p2
e===$&&B.b()
s=-v
r=A.c9(e,f,s)
e=g.p3
e===$&&B.b()
q=A.c9(e,f,s)
p=g.y2
e=g.cx
e.toString
o=p*16
n=(p+1)*16
if(d)g.b0G()
if(p!==0){o-=x
g.to=A.c9(t,f,0)
g.x1=A.c9(r,f,0)
g.x2=A.c9(q,f,0)}else{g.to=A.c9(g.p1,f,0)
g.x1=A.c9(g.p2,f,0)
g.x2=A.c9(g.p3,f,0)}e=p<e-1
if(e)n-=x
m=g.as
m.toString
if(n>m)n=m
g.xr=null
if(g.bq!=null&&o<n){m=g.xr=g.aYW(o,n-o)
if(m==null)return!1}else m=f
l=g.Q
l.toString
if(o<l){k=l-o
j=g.to
j===$&&B.b()
i=j.d
h=g.p4
h.toString
j.d=i+h*k
h=g.x1
h===$&&B.b()
i=h.d
j=g.R8
j.toString
j*=D.c.P(k,1)
h.d=i+j
i=g.x2
i===$&&B.b()
i.d+=j
if(m!=null)m.d=m.d+g.b.a*k
o=l}if(o<n){j=g.to
j===$&&B.b()
i=j.d
h=g.y
h===$&&B.b()
j.d=i+h
i=g.x1
i===$&&B.b()
j=h>>>1
i.d=i.d+j
i=g.x2
i===$&&B.b()
i.d+=j
if(m!=null)m.d+=h
m=g.z
m===$&&B.b()
g.bh4(0,o-l,m-h,n-o)}if(e){e=g.p1
m=g.p4
m.toString
e.rw(u,w,t,16*m)
m=g.p2
u=g.R8
u.toString
m.rw(s,v,r,8*u)
u=g.p3
m=g.R8
m.toString
u.rw(s,v,q,8*m)}return!0},
bh4(d,e,f,g){if(f<=0||g<=0)return!1
this.b_V(e,f,g)
this.b_U(e,f,g)
return!0},
a2X(d){var x
if((d&-4194304)>>>0===0)x=D.c.P(d,14)
else x=d<0?0:255
return x},
Wq(d,e,f,g){var x=19077*d
g.m(0,0,this.a2X(x+26149*f+-3644112))
g.m(0,1,this.a2X(x-6419*e-13320*f+2229552))
g.m(0,2,this.a2X(x+33050*e+-4527440))},
W9(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=new A.bK_(),a0=b3-1,a1=D.c.P(a0,1),a2=d.$2(J.v(a7.a,a7.d),J.v(a8.a,a8.d)),a3=d.$2(J.v(a9.a,a9.d),J.v(b0.a,b0.d)),a4=D.c.P(3*a2+a3+131074,2)
f.Wq(J.v(a5.a,a5.d),a4&255,a4>>>16,b1)
b1.m(0,3,255)
x=a6!=null
if(x){a4=D.c.P(3*a3+a2+131074,2)
w=J.v(a6.a,a6.d)
b2.toString
f.Wq(w,a4&255,a4>>>16,b2)
b2.m(0,3,255)}for(v=1;v<=a1;++v,a3=t,a2=u){u=d.$2(J.v(a7.a,a7.d+v),J.v(a8.a,a8.d+v))
t=d.$2(J.v(a9.a,a9.d+v),J.v(b0.a,b0.d+v))
s=a2+u+a3+t+524296
r=D.c.P(s+2*(u+a3),3)
q=D.c.P(s+2*(a2+t),3)
a4=D.c.P(r+a2,1)
p=D.c.P(q+u,1)
w=2*v
o=w-1
n=J.v(a5.a,a5.d+o)
m=a4&255
l=a4>>>16
k=o*4
j=A.c9(b1,e,k)
n=19077*n
i=n+26149*l+-3644112
if((i&-4194304)>>>0===0)h=D.c.P(i,14)
else h=i<0?0:255
J.bT(j.a,j.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.P(l,14)
else h=l<0?0:255
J.bT(j.a,j.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.P(n,14)
else h=n<0?0:255
J.bT(j.a,j.d+2,h)
J.bT(j.a,j.d+3,255)
n=J.v(a5.a,a5.d+w)
m=p&255
l=p>>>16
j=w*4
i=A.c9(b1,e,j)
n=19077*n
g=n+26149*l+-3644112
if((g&-4194304)>>>0===0)h=D.c.P(g,14)
else h=g<0?0:255
J.bT(i.a,i.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.P(l,14)
else h=l<0?0:255
J.bT(i.a,i.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.P(n,14)
else h=n<0?0:255
J.bT(i.a,i.d+2,h)
J.bT(i.a,i.d+3,255)
if(x){a4=D.c.P(q+a3,1)
p=D.c.P(r+t,1)
o=J.v(a6.a,a6.d+o)
n=a4&255
m=a4>>>16
b2.toString
k=A.c9(b2,e,k)
o=19077*o
l=o+26149*m+-3644112
if((l&-4194304)>>>0===0)h=D.c.P(l,14)
else h=l<0?0:255
J.bT(k.a,k.d,h)
m=o-6419*n-13320*m+2229552
if((m&-4194304)>>>0===0)h=D.c.P(m,14)
else h=m<0?0:255
J.bT(k.a,k.d+1,h)
o=o+33050*n+-4527440
if((o&-4194304)>>>0===0)h=D.c.P(o,14)
else h=o<0?0:255
J.bT(k.a,k.d+2,h)
J.bT(k.a,k.d+3,255)
w=J.v(a6.a,a6.d+w)
o=p&255
n=p>>>16
j=A.c9(b2,e,j)
w=19077*w
m=w+26149*n+-3644112
if((m&-4194304)>>>0===0)h=D.c.P(m,14)
else h=m<0?0:255
J.bT(j.a,j.d,h)
n=w-6419*o-13320*n+2229552
if((n&-4194304)>>>0===0)h=D.c.P(n,14)
else h=n<0?0:255
J.bT(j.a,j.d+1,h)
w=w+33050*o+-4527440
if((w&-4194304)>>>0===0)h=D.c.P(w,14)
else h=w<0?0:255
J.bT(j.a,j.d+2,h)
J.bT(j.a,j.d+3,255)}}if((b3&1)===0){a4=D.c.P(3*a2+a3+131074,2)
w=J.v(a5.a,a5.d+a0)
o=a0*4
n=A.c9(b1,e,o)
f.Wq(w,a4&255,a4>>>16,n)
n.m(0,3,255)
if(x){a4=D.c.P(3*a3+a2+131074,2)
a0=J.v(a6.a,a6.d+a0)
b2.toString
o=A.c9(b2,e,o)
f.Wq(a0,a4&255,a4>>>16,o)
o.m(0,3,255)}}},
b_U(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.xr
if(o==null)return
x=A.c9(o,null,0)
if(d===0){w=f-1
v=d}else{v=d-1
x.d=x.d-p.b.a
w=f}o=p.Q
o.toString
u=p.as
if(o+d+f===u){u.toString
w=u-o-v}for(o=p.b,t=0;t<w;++t){for(u=t+v,s=0;s<e;++s){r=J.v(x.a,x.d+s)
q=p.d.a
q=q==null?null:q.ed(s,u,null);(q==null?new A.fe():q).saG(0,r)}x.d=x.d+o.a}},
b_V(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=A.cV(J.da(l.d.gaj(0),0,null),!1,k,d*j.a*4),h=l.to
h===$&&B.b()
x=A.c9(h,k,0)
h=l.x1
h===$&&B.b()
w=A.c9(h,k,0)
h=l.x2
h===$&&B.b()
v=A.c9(h,k,0)
u=d+f
t=D.c.P(e+1,1)
s=j.a*4
j=l.rx
j===$&&B.b()
r=A.c9(j,k,0)
j=l.ry
j===$&&B.b()
q=A.c9(j,k,0)
if(d===0){l.W9(x,k,w,v,w,v,i,k,e)
p=f}else{j=l.RG
j===$&&B.b()
l.W9(j,x,r,q,w,v,A.c9(i,k,-s),i,e)
p=f+1}r.a=w.a
q.a=v.a
for(j=2*s,h=-s,o=d;o+=2,o<u;){r.d=w.d
q.d=v.d
n=w.d
m=l.R8
m.toString
w.d=n+m
v.d+=m
i.d+=j
m=x.d
n=l.p4
n.toString
x.d=m+2*n
l.W9(A.c9(x,k,-n),x,r,q,w,v,A.c9(i,k,h),i,e)}j=x.d
h=l.p4
h.toString
x.d=j+h
j=l.Q
j.toString
h=l.as
h.toString
if(j+u<h){j=l.RG
j===$&&B.b()
j.A2(0,e,x)
l.rx.A2(0,t,w)
l.ry.A2(0,t,v);--p}else if((u&1)===0)l.W9(x,k,w,v,w,v,A.c9(i,k,s),k,e)
return p},
aYW(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.b,m=n.a,l=n.b
if(d<0||e<=0||d+e>l)return null
if(d===0){n=m*l
o.bt=new Uint8Array(n)
x=o.bq
w=new A.bKK(x,m,l)
v=x.cq()
w.d=v&3
w.e=D.c.P(v,2)&3
w.f=D.c.P(v,4)&3
w.r=D.c.P(v,6)&3
if(w.gew()){u=w.d
if(u===0){if(x.c-x.d<n)w.r=1}else if(u===1){t=new A.aD7(C.o9,B.a([],y.J))
t.a=m
t.b=l
n=B.a([],y.A)
u=B.a([],y.F)
s=new Uint32Array(2)
r=new A.aCF(x,s)
s=r.d=J.da(D.bq.gaj(s),0,null)
q=x.cq()
s.$flags&2&&B.B(s)
s[0]=q
s[1]=x.cq()
s[2]=x.cq()
s[3]=x.cq()
s[4]=x.cq()
s[5]=x.cq()
s[6]=x.cq()
s[7]=x.cq()
u=new A.aqZ(r,t,n,u)
u.db=m
w.x=u
u.KZ(m,l,!0)
n=w.x
x=n.ax
if(x.length===1&&x[0].a===C.a5E&&n.ba3()){w.y=!0
n=w.x
x=n.c
p=x.a*x.b
n.cx=0
x=D.c.aq(p,4)
x=new Uint8Array(p+(4-x))
n.CW=x
n.ch=J.op(D.A.gaj(x),0,null)}else{w.y=!1
w.x.aiw()}}else w.r=1}o.b7=w}n=o.b7
n===$&&B.b()
if(!n.w){x=o.bt
x===$&&B.b()
if(!n.NI(0,d,e,x))return null}n=o.bt
n===$&&B.b()
return A.cV(n,!1,null,d*m)},
bfd(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.fr.b,a3=a1.k1
a3===$&&B.b()
x=a1.dy[a3]
a3=a1.bY
a3===$&&B.b()
w=a3[a1.y1]
v=A.cV(w.a,!1,null,0)
a3=a1.k3
a3===$&&B.b()
u=a3[0]
v.bDg(0,v.c-v.d,0)
a3=w.b
a3===$&&B.b()
if(!a3){t=A.cV(new Int16Array(16),!1,null,0)
a3=a4.b
s=u.b
r=a1.a3X(a5,a2[1],a3+s,x.b,0,t)
a4.b=u.b=r>0?1:0
if(r>1)a1.bnp(t,v)
else{q=D.c.P(J.v(t.a,t.d)+3,3)
for(p=0;p<256;p+=16)J.bT(v.a,v.d+p,q)}o=a2[0]
n=1}else{o=a2[3]
n=0}m=a4.a&15
l=u.a&15
for(k=0,j=0;j<4;++j){i=l&1
for(h=0,g=0;g<4;++g){r=a1.a3X(a5,o,i+(m&1),x.a,n,v)
i=r>n?1:0
m=m>>>1|i<<7
a3=J.v(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=h<<2|a3
v.d+=16}m=m>>>4
l=l>>>1|i<<7
k=(k<<8|h)>>>0}f=l>>>4
for(e=m,d=0,a0=0;a0<4;a0+=2){a3=4+a0
m=D.c.hx(a4.a,a3)
l=D.c.hx(u.a,a3)
for(h=0,j=0;j<2;++j){i=l&1
for(g=0;g<2;++g){r=a1.a3X(a5,a2[2],i+(m&1),x.c,0,v)
i=r>0?1:0
m=m>>>1|i<<3
a3=J.v(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=(h<<2|a3)>>>0
v.d+=16}m=m>>>2
l=l>>>1|i<<5}d=(d|D.c.ek(h,4*a0))>>>0
e=(e|D.c.ek(m<<4>>>0,a0))>>>0
f=(f|D.c.ek(l&240,a0))>>>0}a4.a=e
u.a=f
w.e=k
w.f=d
if((d&43690)===0)x.toString
return(k|d)>>>0===0},
bnp(d,e){var x,w,v,u,t,s,r,q,p,o,n=new Int32Array(16)
for(x=0;x<4;++x){w=12+x
v=J.v(d.a,d.d+x)+J.v(d.a,d.d+w)
u=4+x
t=8+x
s=J.v(d.a,d.d+u)+J.v(d.a,d.d+t)
r=J.v(d.a,d.d+u)-J.v(d.a,d.d+t)
q=J.v(d.a,d.d+x)-J.v(d.a,d.d+w)
n[x]=v+s
n[t]=v-s
n[u]=q+r
n[w]=q-r}for(p=0,x=0;x<4;++x){w=x*4
o=n[w]+3
u=n[3+w]
v=o+u
t=n[1+w]
w=n[2+w]
s=t+w
r=t-w
q=o-u
u=D.c.P(v+s,3)
J.bT(e.a,e.d+p,u)
u=D.c.P(q+r,3)
J.bT(e.a,e.d+(p+16),u)
u=D.c.P(v-s,3)
J.bT(e.a,e.d+(p+32),u)
u=D.c.P(q-r,3)
J.bT(e.a,e.d+(p+48),u)
p+=64}},
b2d(d,e){var x,w,v,u,t,s
if(d.im(e[3])===0)x=d.im(e[4])===0?2:3+d.im(e[5])
else if(d.im(e[6])===0)x=d.im(e[7])===0?5+d.im(159):7+2*d.im(165)+d.im(145)
else{w=d.im(e[8])
v=2*w+d.im(e[9+w])
u=C.asz[v]
t=u.length
for(x=0,s=0;s<t;++s)x+=x+d.im(u[s])
x+=3+D.c.ek(8,v)}return x},
a3X(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=e[h].a[f]
for(;h<16;h=x){if(d.im(p[0])===0)return h
for(;d.im(p[1])===0;){++h
p=e[C.Q1[h]].a[0]
if(h===16)return 16}x=h+1
w=e[C.Q1[x]].a
if(d.im(p[2])===0){p=w[1]
v=1}else{v=this.b2d(d,p)
p=w[2]}u=C.awN[h]
t=d.b
t===$&&B.b()
s=d.aiS(D.c.P(t,1))
t=d.b
r=C.P6[t]
d.b=C.P4[t]
t=d.d
t===$&&B.b()
d.d=t-r
t=s!==0?-v:v
q=g[h>0?1:0]
J.bT(i.a,i.d+u,t*q)}return 16},
bf8(){var x,w,v,u,t,s,r,q,p,o=this,n=o.y1,m=4*n,l=o.go,k=o.id,j=o.bY
j===$&&B.b()
x=j[n]
n=o.c
n===$&&B.b()
n=n.im(145)===0
x.b=n
if(!n){if(o.c.im(156)!==0)w=o.c.im(128)!==0?1:3
else w=o.c.im(163)!==0?2:0
n=x.c
n.$flags&2&&B.B(n)
n[0]=w
l.toString
D.A.lW(l,m,m+4,w)
D.A.lW(k,0,4,w)}else{v=x.c
for(n=k.$flags|0,u=0,t=0;t<4;++t,u=p){w=k[t]
for(s=0;s<4;++s){j=m+s
r=C.ax_[l[j]][w]
q=C.NS[o.c.im(r[0])]
for(;q>0;)q=C.NS[2*q+o.c.im(r[q])]
w=-q
l.$flags&2&&B.B(l)
l[j]=w}p=u+4
l.toString
D.A.e3(v,u,p,l,m)
n&2&&B.B(k)
k[t]=w}}if(o.c.im(142)===0)n=0
else if(o.c.im(114)===0)n=2
else n=o.c.im(183)!==0?1:3
x.d=n}}
A.a7D.prototype={
dz(d){var x,w
for(x=0;w=d-1,d>0;d=w)x=(x|D.c.eR(this.im(128),w))>>>0
return x},
JN(d){var x=this.dz(d)
return this.dz(1)===1?-x:x},
im(d){var x,w=this,v=w.b
v===$&&B.b()
x=w.aiS(D.c.P(v*d,8))
if(w.b<=126)w.bkF()
return x},
aiS(d){var x,w,v,u,t,s=this,r=s.d
r===$&&B.b()
if(r<0){x=s.a
w=x.c
v=x.d
if(w-v>=1){u=x.cq()
r=s.c
r===$&&B.b()
s.c=(u|r<<8)>>>0
r=s.d+8
s.d=r
t=r}else{if(v<w){r=x.cq()
x=s.c
x===$&&B.b()
s.c=(r|x<<8)>>>0
x=s.d+8
s.d=x
r=x}else if(!s.e){x=s.c
x===$&&B.b()
s.c=x<<8>>>0
r+=8
s.d=r
s.e=!0}t=r}}else t=r
r=s.c
r===$&&B.b()
if(D.c.nY(r,t)>d){x=s.b
x===$&&B.b()
w=d+1
s.b=x-w
s.c=r-D.c.eR(w,t)
return 1}else{s.b=d
return 0}},
bkF(){var x,w=this,v=w.b
v===$&&B.b()
x=C.P6[v]
w.b=C.P4[v]
v=w.d
v===$&&B.b()
w.d=v-x}}
A.bJO.prototype={
agk(d,e,f){var x,w=A.c9(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x
if(this.apw(w,e,f))this.Tc(w,e)}},
agj(d,e,f){var x,w=A.c9(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x*e
if(this.apw(w,1,f))this.Tc(w,1)}},
aLN(d,e,f){var x,w,v=A.c9(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.agk(v,e,f)}},
aLK(d,e,f){var x,w=A.c9(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.agj(w,e,f)}},
bKa(d,e,f,g,h){var x,w,v=A.c9(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.Fl(v,e,1,16,f,g,h)}},
byJ(d,e,f,g,h){var x,w=A.c9(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.Fl(w,1,e,16,f,g,h)}},
Fm(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=A.c9(d,null,0)
for(x=-3*e,w=-2*e,v=-e,u=2*e;t=g-1,g>0;g=t){if(this.apx(h,e,a0,a1))if(this.anY(h,e,a2))this.Tc(h,e)
else{s=J.v(h.a,h.d+x)
r=J.v(h.a,h.d+w)
q=J.v(h.a,h.d+v)
p=J.v(h.a,h.d)
o=J.v(h.a,h.d+e)
n=J.v(h.a,h.d+u)
m=$.cm5()
l=m[1020+3*(p-q)+m[1020+r-o]]
m=D.c.P(27*l+63,7)
k=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.P(18*l+63,7)
j=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.P(9*l+63,7)
i=(m&2147483647)-((m&2147483648)>>>0)
m=$.pF()[255+s+i]
J.bT(h.a,h.d+x,m)
m=$.pF()[255+r+j]
J.bT(h.a,h.d+w,m)
m=$.pF()[255+q+k]
J.bT(h.a,h.d+v,m)
m=$.pF()[255+p-k]
J.bT(h.a,h.d,m)
m=$.pF()[255+o-j]
J.bT(h.a,h.d+e,m)
m=$.pF()[255+n-i]
J.bT(h.a,h.d+u,m)}h.d+=f}},
Fl(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=A.c9(d,null,0)
for(x=-2*e,w=-e;v=g-1,g>0;g=v){if(this.apx(k,e,h,i))if(this.anY(k,e,j))this.Tc(k,e)
else{u=J.v(k.a,k.d+x)
t=J.v(k.a,k.d+w)
s=J.v(k.a,k.d)
r=J.v(k.a,k.d+e)
q=3*(s-t)
p=$.aVj()
o=D.c.P(q+4,3)
n=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.P(q+3,3)
m=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.P(n+1,1)
l=(o&2147483647)-((o&2147483648)>>>0)
o=$.pF()[255+u+l]
J.bT(k.a,k.d+x,o)
o=$.pF()[255+t+m]
J.bT(k.a,k.d+w,o)
o=$.pF()[255+s-n]
J.bT(k.a,k.d,o)
o=$.pF()[255+r-l]
J.bT(k.a,k.d+e,o)}k.d+=f}},
Tc(d,e){var x=J.v(d.a,d.d+-2*e),w=-e,v=J.v(d.a,d.d+w),u=J.v(d.a,d.d),t=J.v(d.a,d.d+e),s=3*(u-v)+$.cm5()[1020+x-t],r=$.aVj()[112+D.c.l5(D.c.P(s+4,3),32)],q=$.aVj()[112+D.c.l5(D.c.P(s+3,3),32)]
d.m(0,w,$.pF()[255+v+q])
d.m(0,0,$.pF()[255+u-r])},
anY(d,e,f){var x=J.v(d.a,d.d+-2*e),w=J.v(d.a,d.d+-e),v=J.v(d.a,d.d),u=J.v(d.a,d.d+e),t=$.aVi()
return t[255+x-w]>f||t[255+u-v]>f},
apw(d,e,f){var x=J.v(d.a,d.d+-2*e),w=J.v(d.a,d.d+-e),v=J.v(d.a,d.d),u=J.v(d.a,d.d+e)
return 2*$.aVi()[255+w-v]+$.cm4()[255+x-u]<=f},
apx(d,e,f,g){var x=J.v(d.a,d.d+-4*e),w=J.v(d.a,d.d+-3*e),v=J.v(d.a,d.d+-2*e),u=J.v(d.a,d.d+-e),t=J.v(d.a,d.d),s=J.v(d.a,d.d+e),r=J.v(d.a,d.d+2*e),q=J.v(d.a,d.d+3*e),p=$.aVi(),o=255+v
if(2*p[255+u-t]+$.cm4()[o-s]>f)return!1
return p[255+x-w]<=g&&p[255+w-v]<=g&&p[o-u]<=g&&p[255+q-r]<=g&&p[255+r-s]<=g&&p[255+s-t]<=g},
vA(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=new Int32Array(16)
for(x=0,w=0,v=0;v<4;++v){u=x+8
t=J.v(d.a,d.d+x)+J.v(d.a,d.d+u)
s=J.v(d.a,d.d+x)-J.v(d.a,d.d+u)
u=x+4
r=D.c.P(J.v(d.a,d.d+u)*35468,16)
q=x+12
p=D.c.P(J.v(d.a,d.d+q)*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.c.P(J.v(d.a,d.d+u)*85627,16)
q=D.c.P(J.v(d.a,d.d+q)*35468,16)
n=(u&2147483647)-((u&2147483648)>>>0)+((q&2147483647)-((q&2147483648)>>>0))
m=w+1
j[w]=t+n
w=m+1
j[m]=s+o
m=w+1
j[w]=s-o
w=m+1
j[m]=t-n;++x}for(l=0,w=0,v=0;v<4;++v){k=j[w]+4
u=j[w+8]
t=k+u
s=k-u
u=j[w+4]
r=D.c.P(u*35468,16)
q=j[w+12]
p=D.c.P(q*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.c.P(u*85627,16)
q=D.c.P(q*35468,16)
n=(u&2147483647)-((u&2147483648)>>>0)+((q&2147483647)-((q&2147483648)>>>0))
A.Ei(e,l,0,0,t+n)
A.Ei(e,l,1,0,s+o)
A.Ei(e,l,2,0,s-o)
A.Ei(e,l,3,0,t-n);++w
l+=32}},
Qp(d,e,f,g){this.vA(e,f)
if(g)this.vA(A.c9(e,null,16),A.c9(f,null,4))},
Qq(d,e){var x,w,v=J.v(d.a,d.d)+4
for(x=0;x<4;++x)for(w=0;w<4;++w)A.Ei(e,0,w,x,v)},
aFa(d,e){var x=this,w=null
if(J.v(d.a,d.d)!==0)x.Qq(d,e)
if(J.v(d.a,d.d+16)!==0)x.Qq(A.c9(d,w,16),A.c9(e,w,4))
if(J.v(d.a,d.d+32)!==0)x.Qq(A.c9(d,w,32),A.c9(e,w,128))
if(J.v(d.a,d.d+48)!==0)x.Qq(A.c9(d,w,48),A.c9(e,w,132))}}
A.bJT.prototype={}
A.bJX.prototype={}
A.bJZ.prototype={}
A.a7C.prototype={}
A.bJY.prototype={}
A.bJP.prototype={}
A.Kx.prototype={}
A.aCH.prototype={}
A.aCJ.prototype={}
A.aCI.prototype={}
A.aCK.prototype={}
A.a7E.prototype={
NJ(){var x,w=this.b
if(w.ja(8)!==47)return!1
x=this.c
x.f=C.x2
x.a=w.ja(14)+1
x.b=w.ja(14)+1
x.d=w.ja(1)!==0
if(w.ja(3)!==0)return!1
return!0},
o9(d){var x,w,v,u,t,s=this,r=null
s.e=0
if(!s.NJ())return r
x=s.c
s.KZ(x.a,x.b,!0)
s.aiw()
w=x.a
s.d=A.hN(r,r,C.a7,0,C.bk,x.b,r,0,4,r,C.a7,w,!1)
w=s.ch
w.toString
v=x.a
u=x.b
if(!s.a3i(w,v,u,u,s.gbgQ()))return r
x=x.w
if(x.length!==0){t=A.cV(new B.e6(x),!1,r,0)
x=s.d
x.toString
x.e=A.cxa(t)}return s.d},
aiw(){var x,w=this,v=w.c,u=v.a
v=u*v.b+u
x=new Uint32Array(v+u*16)
w.ch=x
w.CW=J.da(D.bq.gaj(x),0,null)
w.cx=v
return!0},
bhy(d){var x,w,v,u=this,t=u.b,s=t.ja(2),r=u.ay,q=D.c.ek(1,s)
if((r&q)>>>0!==0)return!1
u.ay=(r|q)>>>0
x=new A.aCG(C.a5D)
u.ax.push(x)
r=C.aBQ[s]
x.a=r
x.b=d[0]
x.c=d[1]
switch(r.a){case 0:case 1:t=t.ja(3)+2
x.e=t
x.d=u.KZ(A.Ej(x.b,t),A.Ej(x.c,x.e),!1)
break
case 3:w=t.ja(8)+1
if(w>16)v=0
else if(w>4)v=1
else{t=w>2?2:3
v=t}d[0]=A.Ej(x.b,v)
x.e=v
x.d=u.KZ(w,1,!1)
u.b0l(w,x)
break
case 2:break}return!0},
KZ(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(f)for(x=p.b,w=y.t,v=e,u=d;x.ja(1)!==0;){t=B.a([u,v],w)
if(!p.bhy(t))throw B.l(A.c4("Invalid Transform"))
u=t[0]
v=t[1]}else{v=e
u=d}x=p.b
if(x.ja(1)!==0){s=x.ja(4)
if(!(s>=1&&s<=11))throw B.l(A.c4("Invalid Color Cache"))}else s=0
if(!p.bhm(u,v,s,f))throw B.l(A.c4("Invalid Huffman Codes"))
if(s>0){x=D.c.ek(1,s)
p.r=x
p.w=new A.bJU(new Uint32Array(x),32-s)}else p.r=0
x=p.c
x.a=u
x.b=v
r=p.y
p.z=A.Ej(u,r)
p.x=r===0?4294967295:D.c.ek(1,r)-1
if(f){p.e=0
return null}q=new Uint32Array(u*v)
if(!p.a3i(q,u,v,v,null))throw B.l(A.c4("Failed to decode image data."))
p.e=0
return q},
a3i(a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=a0.e,a2=D.c.hv(a1,a9),a3=D.c.aq(a1,a9),a4=a0.amx(a3,a2),a5=a0.e,a6=a9*b0,a7=a9*b1
a1=a0.r
x=280+a1
w=a1>0?a0.w:null
v=a0.x
a1=a8.$flags|0
u=a0.b
t=b2!=null
s=a5
while(!0){r=u.b
q=r.c
if(!(!(r.d>=q&&u.a>=64)&&a5<a7))break
if((a3&v)>>>0===0){p=a0.Lj(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(u.a>=32)u.BY()
r=a4.a
o=r[0].Aj(u)
n=0
if(o<256){m=r[1].Aj(u)
if(u.a>=32)u.BY()
l=A.cHT(r[2].Aj(u),o,m,r[3].Aj(u))
a1&2&&B.B(a8)
a8[a5]=l;++a5;++a3
if(a3>=a9){++a2
if(D.c.aq(a2,16)===0&&t)b2.$1(a2)
if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.c.h2(j*506832829>>>0,r)
k&2&&B.B(q)
q[i]=j;++s}a3=n}}else if(o<280){h=a0.TF(o-256)
g=r[4].Aj(u)
if(u.a>=32)u.BY()
f=a0.aqn(a9,a0.TF(g))
if(a5<f||a6-a5<h)return!1
else{e=a5-f
for(d=0;d<h;++d){r=a8[e+d]
a1&2&&B.B(a8)
a8[a5+d]=r}a5+=h}a3+=h
for(;a3>=a9;){a3-=a9;++a2
if(D.c.aq(a2,16)===0&&t)b2.$1(a2)}if(a5<a7){if((a3&v)>>>0!==0){p=a0.Lj(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.c.h2(j*506832829>>>0,r)
k&2&&B.B(q)
q[i]=j;++s}}}else if(o<x){for(;s<a5;){r=a8[s]
i=D.c.h2(r*506832829>>>0,w.b)
q=w.a
q.$flags&2&&B.B(q)
q[i]=r;++s}r=w.a
q=r[o-280]
a1&2&&B.B(a8)
a8[a5]=q;++a5;++a3
if(a3>=a9){++a2
if(D.c.aq(a2,16)===0&&t)b2.$1(a2)
for(q=w.b,k=r.$flags|0;s<a5;){j=a8[s]
i=D.c.h2(j*506832829>>>0,q)
k&2&&B.B(r)
r[i]=j;++s}a3=n}}else return!1}if(t)b2.$1(a2)
if(r.d>=q&&u.a>=64&&a5<a6)return!1
a0.e=a5
return!0},
ba3(){var x,w,v,u
if(this.r>0)return!1
for(x=this.as,w=this.at,v=0;v<x;++v){u=w[v].a
if(u[1].f>1)return!1
if(u[2].f>1)return!1
if(u[3].f>1)return!1}return!0},
b0t(d){var x,w,v,u,t,s,r=this,q=r.f,p=d-q
if(p<=0)return
x=r.c
r.aiG(p,x.a*q)
w=x.a
v=w*p
u=w*r.f
x=r.ch
x.toString
q=r.cx
q.toString
t=A.cV(x,!1,null,q)
for(s=0;s<v;++s){q=r.cy
q.toString
x=D.c.P(J.v(t.a,t.d+s),8)
q.$flags&2&&B.B(q)
q[u+s]=x&255}r.f=d},
aYy(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=o.e,m=D.c.hv(n,d),l=D.c.aq(n,d),k=o.amx(l,m),j=o.e,i=d*e,h=d*f,g=o.x
n=o.b
while(!0){x=n.b
if(!(!(x.d>=x.c&&n.a>=64)&&j<h))break
if((l&g)>>>0===0){w=o.Lj(o.Q,o.z,o.y,l,m)
k=o.at[w]}if(n.a>=32)n.BY()
x=k.a
v=x[0].Aj(n)
if(v<256){x=o.CW
x===$&&B.b()
x.$flags&2&&B.B(x)
x[j]=v;++j;++l
if(l>=d){++m
if(D.c.aq(m,16)===0)o.a3H(m)
l=0}}else if(v<280){u=o.TF(v-256)
t=x[4].Aj(n)
if(n.a>=32)n.BY()
s=o.aqn(d,o.TF(t))
if(j>=s&&i-j>=u)for(x=o.CW,r=0;r<u;++r){x===$&&B.b()
q=j+r
p=x[q-s]
x.$flags&2&&B.B(x)
x[q]=p}else{o.e=j
return!0}j+=u
l+=u
for(;l>=d;){l-=d;++m
if(D.c.aq(m,16)===0)o.a3H(m)}if(j<h&&(l&g)>>>0!==0){w=o.Lj(o.Q,o.z,o.y,l,m)
k=o.at[w]}}else return!1}o.a3H(m)
o.e=j
return!0},
a3H(d){var x,w,v,u=this,t=u.f,s=d-t,r=u.CW
r===$&&B.b()
x=A.cV(r,!1,null,u.c.a*t)
if(s>0){w=u.f
t=u.cy
t.toString
r=u.db
r.toString
v=A.cV(t,!1,null,r*w)
u.ax[0].bsP(w,w+s,x,v)}u.f=d},
bgR(d){var x,w,v,u,t,s=this,r=s.c,q=r.a,p=s.f,o=d-p
if(o<=0)return
s.aiG(o,q*p)
q=s.cx
q.toString
x=s.f
w=q
v=0
for(;v<o;++v,++x)for(u=0;u<r.a;++u,++w){t=s.ch[w]
q=s.d.a
if(q!=null)q.km(u,x,t>>>16&255,t>>>8&255,t&255,t>>>24&255)}s.f=d},
aiG(d,e){var x,w,v,u=this,t=u.ax,s=t.length,r=u.c.a,q=u.f,p=q+d,o=u.cx
o.toString
x=u.ch
x.toString
D.bq.e3(x,o,o+r*d,x,e)
for(w=e;v=s-1,s>0;w=o,s=v){r=t[v]
x=u.ch
x.toString
r.bBa(q,p,x,w,x,o)}},
bhm(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=1
if(g&&l.b.ja(1)!==0){x=l.b.ja(3)+2
w=A.Ej(d,x)
v=A.Ej(e,x)
u=w*v
t=l.KZ(w,v,!1)
l.y=x
for(s=0;s<u;++s){r=t[s]>>>8&65535
t.$flags&2&&B.B(t)
t[s]=r
if(r>=k)k=r+1}}else t=null
q=J.iV(k,y.R)
for(p=0;p<k;++p)q[p]=A.cTP()
for(o=f>0,s=0;s<k;++s)for(n=0;n<5;++n){m=C.atG[n]
if(n===0&&o)m+=D.c.ek(1,f)
if(!l.bhk(m,q[s].a[n]))return!1}l.Q=t
l.as=k
l.at=q
return!0},
bhk(d,e){var x,w,v,u,t,s,r,q,p,o=this.b
if(o.ja(1)!==0){x=y.t
w=B.a([0,0],x)
v=B.a([0,0],x)
u=B.a([0,0],x)
t=o.ja(1)+1
w[0]=o.ja(o.ja(1)===0?1:8)
v[0]=0
x=t-1
u[0]=x
if(t===2){w[1]=o.ja(8)
v[1]=1
u[1]=x}s=e.brH(u,v,w,d,t)}else{r=new Int32Array(19)
q=o.ja(4)+4
if(q>19)return!1
u=new Int32Array(d)
for(p=0;p<q;++p)r[C.awb[p]]=o.ja(3)
s=this.bhl(r,d,u)
if(s)s=e.awz(u,d)}return s},
bhl(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.cy_()
if(!j.awz(d,19))return!1
x=this.b
if(x.ja(1)!==0){w=2+x.ja(2+2*x.ja(3))
if(w>e)return!1}else w=e
for(v=f.$flags|0,u=0,t=8;u<e;w=s){s=w-1
if(w===0)break
if(x.a>=32)x.BY()
r=j.Aj(x)
if(r<16){q=u+1
v&2&&B.B(f)
f[u]=r
if(r!==0)t=r
u=q}else{p=r-16
o=C.apR[p]
n=C.aqb[p]
m=x.ja(o)+n
if(u+m>e)return!1
else{l=r===16?t:0
for(;k=m-1,m>0;m=k,u=q){q=u+1
v&2&&B.B(f)
f[u]=l}}}}return!0},
TF(d){var x
if(d<4)return d+1
x=D.c.P(d-2,1)
return D.c.ek(2+(d&1),x)+this.b.ja(x)+1},
aqn(d,e){var x,w
if(e>120)return e-120
else{x=C.atX[e-1]
w=(x>>>4)*d+(8-(x&15))
return w>=1?w:1}},
b0l(d,e){var x,w,v,u,t,s,r=D.c.ek(1,D.c.hx(8,e.e)),q=new Uint32Array(r),p=e.d
p.toString
x=J.da(D.bq.gaj(p),0,null)
w=J.da(D.bq.gaj(q),0,null)
q[0]=e.d[0]
v=4*d
for(p=w.$flags|0,u=4;u<v;++u){t=x[u]
s=w[u-4]
p&2&&B.B(w)
w[u]=t+s&255}for(v=4*r;u<v;++u){p&2&&B.B(w)
w[u]=0}e.d=q
return!0},
Lj(d,e,f,g,h){if(f===0)return 0
d.toString
return d[e*D.c.P(h,f)+D.c.P(g,f)]},
amx(d,e){var x=this,w=x.Lj(x.Q,x.z,x.y,d,e)
return x.at[w]}}
A.aqZ.prototype={
bxT(d){return this.b0t(d)}}
A.aCF.prototype={
aDi(){var x,w,v=this.a
if(v<32){x=this.c
w=D.c.h2(x[0],v)+((x[1]&C.Bk[v])>>>0)*(C.Bk[32-v]+1)}else{x=this.c
w=v===32?x[1]:D.c.h2(x[1],v-32)}return w},
ja(d){var x,w=this,v=w.b
if(!(v.d>=v.c&&w.a>=64)&&d<25){v=w.aDi()
x=C.Bk[d]
w.a+=d
w.BY()
return(v&x)>>>0}else throw B.l(A.c4("Not enough data in input."))},
BY(){var x,w,v,u=this,t=u.b,s=u.c,r=s.$flags|0,q=t.c
while(!0){if(!(u.a>=8&&t.d<q))break
x=J.v(t.a,t.d++)
w=s[0]
v=s[1]
r&2&&B.B(s)
s[0]=(w>>>8)+(v&255)*16777216
s[1]=v>>>8
s[1]=(s[1]|x*16777216)>>>0
u.a-=8}}}
A.bJU.prototype={}
A.Ky.prototype={
J(){return"VP8LImageTransformType."+this.b}}
A.aCG.prototype={
bBa(d,e,f,g,h,i){var x,w,v,u,t=this,s=t.b
switch(t.a.a){case 2:t.bpL(h,i,i+(e-d)*s)
break
case 0:t.bGG(d,e,h,i)
if(e!==t.c){x=i-s
D.bq.e3(h,x,x+s,f,i+(e-d-1)*s)}break
case 1:t.bsQ(d,e,h,i)
break
case 3:if(g===i&&t.e>0){w=e-d
v=w*A.Ej(s,t.e)
u=i+w*s-v
D.bq.e3(h,u,u+v,f,i)
t.axz(d,e,f,u,h,i)}else t.axz(d,e,f,g,h,i)
break}},
bsP(d,e,f,g){var x,w,v,u,t,s,r=this.e,q=D.c.hx(8,r),p=this.b,o=this.d
if(q<8){x=D.c.ek(1,r)-1
w=D.c.ek(1,q)-1
for(v=d;v<e;++v)for(u=0,t=0;t<p;++t){if((t&x)>>>0===0){u=J.v(f.a,f.d);++f.d}r=o[(u&w)>>>0]
J.bT(g.a,g.d,r>>>8&255);++g.d
u=D.c.P(u,q)}}else for(v=d;v<e;++v)for(t=0;t<p;++t){s=J.v(f.a,f.d);++f.d
r=o[s]
J.bT(g.a,g.d,r>>>8&255);++g.d}},
axz(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=this.e,o=D.c.hx(8,p),n=this.b,m=this.d
if(o<8){x=D.c.ek(1,p)-1
w=D.c.ek(1,o)-1
for(p=h.$flags|0,v=d;v<e;++v)for(u=0,t=0;t<n;++t,i=r){if((t&x)>>>0===0){s=g+1
u=f[g]>>>8&255
g=s}r=i+1
q=m[u&w]
p&2&&B.B(h)
h[i]=q
u=D.c.hx(u,o)}}else for(p=h.$flags|0,v=d;v<e;++v)for(t=0;t<n;++t,i=r,g=s){r=i+1
s=g+1
q=m[f[g]>>>8&255]
p&2&&B.B(h)
h[i]=q}},
bsQ(a2,a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.b,e=g.e,d=D.c.ek(1,e)-1,a0=A.Ej(f,e),a1=D.c.P(a2,g.e)*a0
for(e=a4.$flags|0,x=a2;x<a3;){w=new Uint8Array(3)
for(v=a1,u=0;u<f;++u){if((u&d)>>>0===0){t=v+1
s=g.d[v]
w[0]=s&255
w[1]=s>>>8&255
w[2]=s>>>16&255
v=t}s=a5+u
r=a4[s]
q=r>>>8&255
p=w[0]
o=$.nj()
o.$flags&2&&B.B(o)
o[0]=p
p=$.oo()
n=p[0]
o[0]=q
m=p[0]
l=$.aVl()
l.$flags&2&&B.B(l)
l[0]=n*m
k=$.cm7()
j=(r>>>16&255)+(k[0]>>>5)>>>0&255
o[0]=w[1]
n=p[0]
o[0]=q
l[0]=n*p[0]
i=k[0]
o[0]=w[2]
n=p[0]
o[0]=j
l[0]=n*p[0]
h=k[0]
e&2&&B.B(a4)
a4[s]=(r&4278255360|j<<16|((r&255)+(i>>>5)>>>0)+(h>>>5)>>>0&255)>>>0}a5+=f;++x
if((x&d)>>>0===0)a1+=a0}},
bGG(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=this,n=o.b
if(d===0){A.bJV(f,g,4278190080)
for(x=1;x<n;++x){w=g+x
A.bJV(f,w,f[w-1])}g+=n;++d}w=o.e
v=D.c.ek(1,w)-1
u=A.Ej(n,w)
t=D.c.P(d,o.e)*u
for(s=d;s<e;){A.bJV(f,g,f[g-n])
r=t+1
q=$.cDn[o.d[t]>>>8&15]
for(x=1;x<n;++x){if((x&v)>>>0===0){p=r+1
q=$.cDn[o.d[r]>>>8&15]
r=p}w=g+x
A.bJV(f,w,q.$3(f,f[w-1],w-n))}g+=n;++s
if((s&v)>>>0===0)t+=u}},
bpL(d,e,f){var x,w,v,u
for(x=d.$flags|0;e<f;e=u){w=d[e]
v=w>>>8&255
u=e+1
x&2&&B.B(d)
d[e]=(w&4278255360|(w&16711935)+(v<<16|v)&16711935)>>>0}}}
A.bKK.prototype={
gew(){var x=this,w=x.d
if(w>1||x.e>=4||x.f>1||x.r!==0)return!1
return!0},
NI(d,e,f,g){var x,w,v,u,t,s,r=this
if(!r.gew())return!1
x=C.aCC[r.e]
if(r.d===0){w=r.b
v=e*w
u=r.a
D.A.e3(g,v,f*w,u.a,u.d-u.b+v)}else{w=e+f
u=r.x
u===$&&B.b()
u.cy=g
t=u.c
if(r.y)w=u.aYy(t.a,t.b,w)
else{s=u.ch
s.toString
u=u.a3i(s,t.a,t.b,w,u.gbxS())
w=u}if(!w)return!1}if(x!=null){w=r.b
x.$6(w,r.c,w,e,f,g)}if(r.f===1)if(!r.aZr(g,r.b,r.c,e,f))return!1
if(e+f===r.c)r.w=!0
return!0},
aZr(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
A.a7T.prototype={
aTo(d,e){var x=this,w=d.cq()
x.r=0
x.f=(w&1)!==0
x.w=d.d-d.b
x.x=e-16}}
A.ar_.prototype={}
A.aqi.prototype={
a7x(d){var x,w=this
if(d===0)return!1
x=(d<<1>>>0)-1
w.e=x
x=new Int32Array(x<<1>>>0)
w.d=x
x[1]=-1
w.f=1
D.A.lW(w.a,0,128,255)
return!0},
awz(d,e){var x,w,v,u,t,s=this
for(x=0,w=0,v=0;v<e;++v)if(d[v]>0){++x
w=v}if(!s.a7x(x))return!1
if(x===1){if(w<0||w>=e)return!1
return s.a2q(w,0,0)}u=new Int32Array(e)
if(!s.b93(d,e,u))return!1
for(v=0;v<e;++v){t=d[v]
if(t>0)if(!s.a2q(v,u[v],t))return!1}return s.f===s.e},
brH(d,e,f,g,h){var x,w,v,u=this
if(!u.a7x(h))return!1
for(x=0;x<h;++x){w=e[x]
if(w!==-1){v=f[x]
if(v>=g)return u.f===u.e
if(!u.a2q(v,w,d[x]))return u.f===u.e}}return u.f===u.e},
Aj(d){var x,w,v=this,u=d.aDi(),t=d.a,s=u&127,r=v.a[s]
if(r<=7){d.a=t+r
return v.b[s]}x=v.c[s]
t+=7
u=u>>>7
do{w=v.d
w===$&&B.b()
x=x+w[(x<<1>>>0)+1]+(u&1)
u=u>>>1;++t}while(v.apD(x))
d.a=t
return v.d[x<<1>>>0]},
a2q(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
if(f<=7){x=l.ars(e,f)
for(w=D.c.eR(1,7-f),v=l.b,u=v.$flags|0,t=l.a,s=t.$flags|0,r=0;r<w;++r){q=(x|D.c.eR(r,f))>>>0
u&2&&B.B(v)
v[q]=d
s&2&&B.B(t)
t[q]=f}}else x=l.ars(D.c.nY(e,f-7),7)
for(w=l.c,v=w.$flags|0,p=7,o=0;n=f-1,f>0;f=n){u=l.e
if(o>=u)return!1
t=l.d
t===$&&B.b()
s=(o<<1>>>0)+1
m=t[s]
if(m<0){m=l.f
if(m===u)return!1
t.$flags&2&&B.B(t)
t[s]=m-o
l.f=m+2
t[(m<<1>>>0)+1]=-1
t[(m+1<<1>>>0)+1]=-1}else if(m===0)return!1
o+=t[s]+(D.c.nY(e,n)&1);--p
if(p===0){v&2&&B.B(w)
w[x]=o}}if(l.bcg(o))l.bch(o,0)
else if(l.apD(o))return!1
w=l.d
w===$&&B.b()
w.$flags&2&&B.B(w)
w[o<<1>>>0]=d
return!0},
ars(d,e){return D.c.h2((C.RS[d&15]<<4|C.RS[D.c.P(d,4)])>>>0,8-e)},
bch(d,e){var x=this.d
x===$&&B.b()
x.$flags&2&&B.B(x)
x[(d<<1>>>0)+1]=e},
apD(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]!==0},
bcg(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]<0},
b93(d,e,f){var x,w,v,u,t,s,r,q,p=new Int32Array(16),o=new Int32Array(16)
for(x=0,w=0;x<e;++x){v=d[x]
if(v>w)w=v}if(w>15)return!1
for(x=0;x<e;++x){u=d[x]
p[u]=p[u]+1}p[0]=0
o[0]=-1
for(t=1,s=0;t<=w;++t){s=s+p[t-1]<<1>>>0
o[t]=s}for(u=f.$flags|0,x=0;x<e;++x){r=d[x]
if(r>0){q=o[r]
o[r]=q+1
u&2&&B.B(f)
f[x]=q}else{u&2&&B.B(f)
f[x]=-1}}return!0}}
A.a_h.prototype={
i(d,e){return this.a[e]}}
A.T_.prototype={
J(){return"WebPFormat."+this.b}}
A.aD7.prototype={}
A.ar0.prototype={}
A.bKL.prototype={
Ia(d){var x=A.cV(d,!1,null,0)
this.b=x
if(!this.amu(x))return!1
return!0},
ow(d){var x,w=this,v=null,u=A.cV(d,!1,v,0)
w.b=u
if(!w.amu(u))return v
u=new A.ar0(C.o9,B.a([],y.J))
w.a=u
x=w.b
x.toString
if(!w.av8(x,u))return v
u=w.a
switch(u.f.a){case 3:u.as=u.z.length
return u
case 2:x=w.b
x.toString
x.d=u.ay
if(!A.cqD(x,u).NJ())return v
u=w.a
u.as=u.z.length
return u
case 1:x=w.b
x.toString
x.d=u.ay
if(!A.cqB(x,u).NJ())return v
u=w.a
u.as=u.z.length
return u
case 0:throw B.l(A.c4("Unknown format for WebP"))}},
kc(d){var x,w,v,u,t=this,s=t.b
if(s==null||t.a==null)return null
x=t.a
if(x.e){x=x.z
w=x.length
if(d>=w)return null
v=x[d]
s.toString
x=v.x
x===$&&B.b()
w=v.w
w===$&&B.b()
return t.aky(s.AX(x,w),d)}w=x.f
if(w===C.x2){s.toString
u=s.AX(x.ch,x.ay)
s=t.a
s.toString
return A.cqD(u,s).o9(0)}else if(w===C.Ej){s.toString
u=s.AX(x.ch,x.ay)
s=t.a
s.toString
return A.cqB(u,s).o9(0)}return null},
nz(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=null
if(p.ow(e)==null)return o
x=p.a.e
if(!x)return p.kc(0)
for(w=o,v=w,u=0;x=p.a,u<x.as;++u){f=x.z[u]
t=p.kc(u)
if(t==null)continue
t.y=f.e
if(v==null||w==null){x=p.a
s=x.a
x=x.b
r=t.gqb()
q=t.a
q=q==null?o:q.gdu()
if(q==null)q=C.a7
v=A.hN(o,o,q,t.y,C.bk,x,o,0,r,o,C.a7,s,!1)
w=v}else{w=A.BH(w,!1,!1)
x=f.f
x===$&&B.b()
if(x){x=w.a
if(x!=null)x.nv(0,o)}}A.cs5(w,t,C.yg,o,o,f.a,f.b,o,o,o,o)
v.nt(w)}return v},
aky(d,e){var x,w,v,u=null,t=B.a([],y.J),s=new A.ar0(C.o9,t)
if(!this.av8(d,s))return u
if(s.f===C.o9)return u
s.as=this.a.as
if(s.e){x=t.length
if(e>=x)return u
w=t[e]
t=w.x
t===$&&B.b()
x=w.w
x===$&&B.b()
return this.aky(d.AX(t,x),e)}else{v=d.AX(s.ch,s.ay)
t=s.f
if(t===C.x2)return A.cqD(v,s).o9(0)
else if(t===C.Ej)return A.cqB(v,s).o9(0)}return u},
amu(d){if(d.jc(4)!=="RIFF")return!1
d.a1()
if(d.jc(4)!=="WEBP")return!1
return!0},
av8(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
for(x=d.c,w=d.b;d.d<x;){v=d.jc(4)
u=d.a1()
t=u+1>>>1<<1>>>0
s=d.d
r=s-w
switch(v){case"VP8X":if(!this.b2J(d,e))return!1
break
case"VP8 ":e.ay=r
e.ch=u
e.f=C.Ej
break
case"VP8L":e.ay=r
e.ch=u
e.f=C.x2
break
case"ALPH":e.toString
s=d.a
q=d.e
p=J.a2(s)
o=p.gu(s)
p=p.gu(s)
s=new A.lU(s,0,Math.min(o,p),0,q)
e.at=s
s.d=d.d
d.d+=t
break
case"ANIM":e.f=C.b8g
n=d.a1()
s=new Uint8Array(4)
s[0]=n>>>8&255
s[1]=n>>>16&255
s[2]=n>>>24&255
s[3]=n&255
d.al()
break
case"ANMF":if(!this.b1y(d,e,u))return!1
break
case"ICCP":e.toString
m=d.jg(u)
d.d=d.d+(m.c-m.d)
m.hK()
break
case"EXIF":e.toString
e.w=d.jc(u)
break
case"XMP ":e.toString
d.jc(u)
break
default:d.d=s+t
break}s=d.d
l=t-(s-w-r)
if(l>0)d.d=s+l}if(!e.d)e.d=e.at!=null
return e.f!==C.o9},
b2J(d,e){var x,w,v,u,t=d.cq()
if((t&192)!==0)return!1
x=D.c.P(t,4)
w=D.c.P(t,1)
if((t&1)!==0)return!1
if(d.rD()!==0)return!1
v=d.rD()
u=d.rD()
e.a=v+1
e.b=u+1
e.e=(w&1)!==0
e.d=(x&1)!==0
return!0},
b1y(d,e,f){var x,w=d.rD(),v=d.rD()
d.rD()
x=new A.ar_(w*2,v*2,d.rD()+1,d.rD())
x.aTo(d,f)
if(x.r!==0)return!1
e.z.push(x)
return!0}}
A.bgm.prototype={
J(){return"IccProfileCompression."+this.b}}
A.a_E.prototype={
bt7(){var x,w=this
if(w.b===C.A1)return w.c
x=C.G3.azr(w.c,null)
w.c=x
w.b=C.A1
return x}}
A.apo.prototype={
J(){return"FrameType."+this.b}}
A.BI.prototype={
gl0(){var x=this.x
return x===$?this.x=B.a([],y.g):x},
aSS(d,e,f,g){var x,w,v,u=this,t=d.gdu(),s=d.gqb(),r=d.a
u.akn(g,e,t,s,r==null?null:r.geP())
t=d.b
if(t!=null)u.b=B.jh(t,y.N,y.I)
t=d.d
if(t!=null){s=y.N
u.d=B.jh(t,s,s)}u.gl0().push(u)
if(!f){x=d.gl0().length
for(t=y.g,w=1;w<x;++w){v=d.x
u.nt(A.aqu((v===$?d.x=B.a([],t):v)[w],e,!1,g))}}},
aSR(d,e,f){var x,w,v,u,t=this,s=d.b
if(s!=null)t.b=B.jh(s,y.N,y.I)
s=d.d
if(s!=null){x=y.N
t.d=B.jh(s,x,x)}t.gl0().push(t)
if(!e&&d.gl0().length>1){w=d.gl0().length
for(s=y.g,v=1;v<w;++v){u=d.x
t.nt(A.BH((u===$?d.x=B.a([],s):u)[v],!1,!1))}}},
nt(d){var x=this
if(d==null)d=A.BH(x,!0,!0)
d.z=x.gl0().length
if(D.b.gY(x.gl0())!==d)x.gl0().push(d)
return d},
Wx(){return this.nt(null)},
akn(d,e,f,g,h){var x,w,v=this,u=null
switch(f.a){case 0:if(h==null){x=D.d.f7(d*g/8)
w=new A.OU($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.f7(d/8)
w=new A.OU($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 1:if(h==null){x=D.d.f7(d*(g<<1>>>0)/8)
w=new A.OW($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.f7(d/4)
w=new A.OW($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 2:if(h==null){if(g===2)x=d
else if(g===4)x=d*2
else x=g===3?D.d.f7(d*1.5):D.d.f7(d/2)
w=new A.OY($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.f7(d/2)
w=new A.OY($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 3:if(h==null)v.a=A.cyh(d,e,g)
else v.a=new A.OZ(new Uint8Array(d*e),h,d,e,1)
break
case 4:x=d*e
if(h==null)v.a=new A.OV(new Uint16Array(x*g),u,d,e,g)
else v.a=new A.OV(new Uint16Array(x),h,d,e,1)
break
case 5:v.a=A.cUn(d,e,g)
break
case 6:v.a=new A.a_L(new Int8Array(d*e*g),d,e,g)
break
case 7:v.a=new A.a_J(new Int16Array(d*e*g),d,e,g)
break
case 8:v.a=new A.a_K(new Int32Array(d*e*g),d,e,g)
break
case 9:v.a=A.cUl(d,e,g)
break
case 10:v.a=A.cUm(d,e,g)
break
case 11:v.a=new A.a_I(new Float64Array(d*e*4*g),d,e,g)
break}},
j(d){var x=this
return"Image("+x.gd0(0)+", "+x.gb2(0)+", "+x.gdu().b+", "+x.gqb()+")"},
gd0(d){var x=this.a
x=x==null?null:x.a
return x==null?0:x},
gb2(d){var x=this.a
x=x==null?null:x.b
return x==null?0:x},
gdu(){var x=this.a
x=x==null?null:x.gdu()
return x==null?C.a7:x},
gwR(){var x=this.e
return x==null?this.e=new A.Ob(B.I(y.N,y.P)):x},
aK_(d,e){var x=this,w=x.b;(w==null?x.b=B.I(y.N,y.I):w).m(0,d,e)
if(x.b.a===0)x.b=null},
ga3(d){var x=this.a
return x.ga3(x)},
gaj(d){var x=this.a
x=x==null?null:x.gaj(x)
if(x==null)x=D.A.gaj(new Uint8Array(0))
return x},
gqb(){var x=this.a
x=x==null?null:x.geP()
x=x==null?null:x.b
if(x==null){x=this.a
x=x==null?null:x.c}return x==null?0:x},
grl(){var x=this.a
return(x==null?null:x.geP())!=null},
gmQ(){var x=this.a
x=x==null?null:x.gmQ()
return x==null?0:x},
aBr(d,e){return d>=0&&e>=0&&d<this.gd0(0)&&e<this.gb2(0)},
nU(d,e,f,g){var x=this.a
x=x==null?null:x.nU(d,e,f,g)
if(x==null)x=new A.xL(new Uint8Array(0))
return x},
ed(d,e,f){var x=this.a
x=x==null?null:x.ed(d,e,f)
return x==null?new A.fe():x},
nV(d,e){return this.ed(d,e,null)},
kl(d,e){if(d<0||d>=this.gd0(0)||e<0||e>=this.gb2(0))return new A.fe()
return this.ed(d,e,null)},
aHX(d,e,f){switch(f.a){case 0:return this.kl(D.d.C(d),D.d.C(e))
case 1:case 3:return this.aHY(d,e)
case 2:return this.aHW(d,e)}},
aHY(d,e){var x,w,v,u,t,s,r=this,q=D.d.C(d),p=q-(d>=0?0:1),o=p+1
q=D.d.C(e)
x=q-(e>=0?0:1)
w=x+1
q=new A.bh_(d-p,e-x)
v=r.kl(p,x)
u=w>=r.gb2(0)?v:r.kl(p,w)
t=o>=r.gd0(0)?v:r.kl(o,x)
s=o>=r.gd0(0)||w>=r.gb2(0)?v:r.kl(o,w)
return r.nU(q.$4(v.gaf(v),t.gaf(t),u.gaf(u),s.gaf(s)),q.$4(v.gap(),t.gap(),u.gap(),s.gap()),q.$4(v.gau(v),t.gau(t),u.gau(u),s.gau(s)),q.$4(v.gaG(v),t.gaG(t),u.gaG(u),s.gaG(s)))},
aHW(d0,d1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=D.d.C(d0),c6=c5-(d0>=0?0:1),c7=c6-1,c8=c6+1,c9=c6+2
c5=D.d.C(d1)
x=c5-(d1>=0?0:1)
w=x-1
v=x+1
u=x+2
t=d0-c6
s=d1-x
c5=new A.bgZ()
r=c4.kl(c6,x)
q=c7<0
p=!q
o=!p||w<0?r:c4.kl(c7,w)
n=q?r:c4.kl(c6,w)
m=w<0
l=m||c8>=c4.gd0(0)?r:c4.kl(c8,w)
k=c9>=c4.gd0(0)||m?r:c4.kl(c9,w)
j=c5.$5(t,o.gaf(o),n.gaf(n),l.gaf(l),k.gaf(k))
i=c5.$5(t,o.gap(),n.gap(),l.gap(),k.gap())
h=c5.$5(t,o.gau(o),n.gau(n),l.gau(l),k.gau(k))
g=c5.$5(t,o.gaG(o),n.gaG(n),l.gaG(l),k.gaG(k))
f=q?r:c4.kl(c7,x)
e=c8>=c4.gd0(0)?r:c4.kl(c8,x)
d=c9>=c4.gd0(0)?r:c4.kl(c9,x)
a0=c5.$5(t,f.gaf(f),r.gaf(r),e.gaf(e),d.gaf(d))
a1=c5.$5(t,f.gap(),r.gap(),e.gap(),d.gap())
a2=c5.$5(t,f.gau(f),r.gau(r),e.gau(e),d.gau(d))
a3=c5.$5(t,f.gaG(f),r.gaG(r),e.gaG(e),d.gaG(d))
a4=!p||v>=c4.gb2(0)?r:c4.kl(c7,v)
a5=v>=c4.gb2(0)?r:c4.kl(c6,v)
a6=c8>=c4.gd0(0)||v>=c4.gb2(0)?r:c4.kl(c8,v)
a7=c9>=c4.gd0(0)||v>=c4.gb2(0)?r:c4.kl(c9,v)
a8=c5.$5(t,a4.gaf(a4),a5.gaf(a5),a6.gaf(a6),a7.gaf(a7))
a9=c5.$5(t,a4.gap(),a5.gap(),a6.gap(),a7.gap())
b0=c5.$5(t,a4.gau(a4),a5.gau(a5),a6.gau(a6),a7.gau(a7))
b1=c5.$5(t,a4.gaG(a4),a5.gaG(a5),a6.gaG(a6),a7.gaG(a7))
b2=!p||u>=c4.gb2(0)?r:c4.kl(c7,u)
b3=u>=c4.gb2(0)?r:c4.kl(c6,u)
b4=c8>=c4.gd0(0)||u>=c4.gb2(0)?r:c4.kl(c8,u)
b5=c9>=c4.gd0(0)||u>=c4.gb2(0)?r:c4.kl(c9,u)
b6=c5.$5(t,b2.gaf(b2),b3.gaf(b3),b4.gaf(b4),b5.gaf(b5))
b7=c5.$5(t,b2.gap(),b3.gap(),b4.gap(),b5.gap())
b8=c5.$5(t,b2.gau(b2),b3.gau(b3),b4.gau(b4),b5.gau(b5))
b9=c5.$5(t,b2.gaG(b2),b3.gaG(b3),b4.gaG(b4),b5.gaG(b5))
c0=c5.$5(s,j,a0,a8,b6)
c1=c5.$5(s,i,a1,a9,b7)
c2=c5.$5(s,h,a2,b0,b8)
c3=c5.$5(s,g,a3,b1,b9)
return c4.nU(D.d.C(c0),D.d.C(c1),D.d.C(c2),D.d.C(c3))},
AO(d,e,f){var x
if(y.c0.b(f))if(f.gfo(f).geP()!=null)if(this.grl()){x=this.a
if(x!=null)x.fe(d,e,f.ge7(f),0,0)
return}x=this.a
if(x!=null)x.km(d,e,f.gaf(f),f.gap(),f.gau(f),f.gaG(f))},
gcj(){var x=this.a
x=x==null?null:x.gcj()
return x==null?0:x},
nv(d,e){var x=this.a
return x==null?null:x.nv(0,e)},
V(d){return this.nv(0,null)},
axT(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
if(a5==null)a5=a3.gdu()
if(a6==null)a6=a3.gqb()
x=C.XW.i(0,a5)
w=!1
if(a5===a3.gdu())if(a6===a3.gqb()){v=a3.a
w=(v==null?a4:v.geP())==null}if(w)return A.BH(a3,!1,!1)
for(w=a3.gl0(),v=w.length,u=y.N,t=y.p,s=a4,r=0;r<w.length;w.length===v||(0,B.Q)(w),++r,s=i){q=w[r]
p=q.a
o=p==null
n=o?a4:p.a
if(n==null)n=0
p=o?a4:p.b
if(p==null)p=0
o=q.e
o=o==null?a4:A.Zr(o)
m=q.c
if(m==null)m=a4
else{l=m.a
k=m.b
m=m.c
m=new A.a_E(l,k,new Uint8Array(m.subarray(0,B.qF(0,a4,m.length))))}l=q.w
k=q.r
j=A.hN(a4,o,a5,q.y,l,p,m,k,a6,a4,C.a7,n,!1)
p=q.d
j.d=p!=null?B.jh(p,u,u):a4
if(s!=null){s.nt(j)
i=s}else i=j
p=j.a
h=p==null?a4:p.geP()
p=j.a
p=p==null?a4:p.geP()
g=p==null?a4:p.gdu()
if(g==null)g=a5
p=q.a
if(h!=null){f=B.I(t,t)
e=p==null?a4:p.ed(0,0,a4)
if(e==null)e=new A.fe()
for(p=j.a,p=p.ga3(p),d=a4,a0=0;p.q();){a1=p.gL(p)
a2=A.cHT(D.d.fX(e.giB()*255),D.d.fX(e.gil()*255),D.d.fX(e.giv()*255),0)
if(f.a4(0,a2)){o=f.i(0,a2)
o.toString
a1.se7(0,o)}else{f.m(0,a2,a0)
a1.se7(0,a0)
d=A.pz(e,x,g,a6,d)
h.pi(a0,d.gaf(d),d.gap(),d.gau(d));++a0}e.q()}}else{e=p==null?a4:p.ed(0,0,a4)
if(e==null)e=new A.fe()
for(p=j.a,p=p.ga3(p);p.q();){A.pz(e,x,a4,a4,p.gL(p))
e.q()}}}s.toString
return s},
o8(d){return this.axT(d,null)},
axS(d){return this.axT(null,d)},
bq3(d){var x,w,v,u
if(this.d==null){x=y.N
this.d=B.I(x,x)}for(x=new B.ce(d,d.r,d.e,B.p(d).h("ce<1>"));x.q();){w=x.d
v=this.d
v.toString
u=d.i(0,w)
u.toString
v.m(0,w,u)}},
aY9(d,e,f){var x,w=65536
switch(e.a){case 0:return null
case 1:return null
case 2:return null
case 3:x=d===C.cd?w:256
return new A.uh(new Uint8Array(x*f),x,f)
case 4:x=d===C.cd?w:256
return new A.avA(new Uint16Array(x*f),x,f)
case 5:x=d===C.cd?w:256
return new A.a2o(new Uint32Array(x*f),x,f)
case 6:x=d===C.cd?w:256
return new A.avz(new Int8Array(x*f),x,f)
case 7:x=d===C.cd?w:256
return new A.avx(new Int16Array(x*f),x,f)
case 8:x=d===C.cd?w:256
return new A.avy(new Int32Array(x*f),x,f)
case 9:x=d===C.cd?w:256
return new A.avu(new Uint16Array(x*f),x,f)
case 10:x=d===C.cd?w:256
return new A.avv(new Float32Array(x*f),x,f)
case 11:x=d===C.cd?w:256
return new A.avw(new Float64Array(x*f),x,f)}}}
A.lT.prototype={
geP(){return null}}
A.OS.prototype={
qV(d,e){var x=this,w=x.d
if(e)w=new Uint16Array(w.length)
else w=new Uint16Array(B.bV(w))
return new A.OS(w,x.a,x.b,x.c)},
gdu(){return C.hJ},
gaj(d){return D.dN.gaj(this.d)},
gmQ(){return 16},
grG(){return this.a*this.c*2},
ga3(d){return A.cp1(this)},
qo(d,e,f,g,h){return A.ui(A.cp1(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcj(){return 1},
grq(){return!0},
nU(d,e,f,g){var x=new Uint16Array(4),w=new A.MT(x)
x[0]=A.fQ(d)
x[1]=A.fQ(e)
x[2]=A.fQ(f)
x[3]=A.fQ(g)
x=w
return x},
ed(d,e,f){if(f==null||!(f instanceof A.If)||f.d!==this)f=A.cp1(this)
f.hm(0,d,e)
return f},
nV(d,e){return this.ed(d,e,null)},
mC(d,e,f){var x=this.c,w=this.d,v=A.fQ(f)
w.$flags&2&&B.B(w)
w[e*this.a*x+d*x]=v},
fe(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=A.fQ(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=A.fQ(g)
if(x>2)v[w+2]=A.fQ(h)}},
km(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=A.fQ(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=A.fQ(g)
if(x>2){v[w+2]=A.fQ(h)
if(x>3)v[w+3]=A.fQ(i)}}},
j(d){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){}}
A.OT.prototype={
qV(d,e){var x=this,w=x.d
if(e)w=new Float32Array(w.length)
else w=new Float32Array(B.bV(w))
return new A.OT(w,x.a,x.b,x.c)},
gdu(){return C.j7},
gaj(d){return D.eW.gaj(this.d)},
gmQ(){return 32},
ga3(d){return A.cp2(this)},
qo(d,e,f,g,h){return A.ui(A.cp2(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcj(){return 1},
grG(){return this.a*this.c*4},
grq(){return!0},
nU(d,e,f,g){var x=new Float32Array(4),w=new A.MU(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
ed(d,e,f){if(f==null||!(f instanceof A.Ig)||f.d!==this)f=A.cp2(this)
f.hm(0,d,e)
return f},
nV(d,e){return this.ed(d,e,null)},
mC(d,e,f){var x=this.c,w=this.d
w.$flags&2&&B.B(w)
w[e*this.a*x+d*x]=f},
fe(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.B(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
km(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.B(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){}}
A.a_I.prototype={
qV(d,e){var x=this,w=x.d
if(e)w=new Float64Array(w.length)
else w=new Float64Array(B.bV(w))
return new A.a_I(w,x.a,x.b,x.c)},
gdu(){return C.kD},
gaj(d){return D.e8.gaj(this.d)},
gu(d){return this.d.byteLength},
gmQ(){return 64},
ga3(d){return A.cp3(this)},
qo(d,e,f,g,h){return A.ui(A.cp3(this),e,f,g,h)},
gcj(){return 1},
grG(){return this.a*this.c*8},
grq(){return!0},
nU(d,e,f,g){var x=new Float64Array(4),w=new A.MV(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
ed(d,e,f){if(f==null||!(f instanceof A.Ih)||f.d!==this)f=A.cp3(this)
f.hm(0,d,e)
return f},
nV(d,e){return this.ed(d,e,null)},
mC(d,e,f){var x=this.c,w=this.d
w.$flags&2&&B.B(w)
w[e*this.a*x+d*x]=f},
fe(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.B(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
km(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.B(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){}}
A.a_J.prototype={
qV(d,e){var x=this,w=x.d
if(e)w=new Int16Array(w.length)
else w=new Int16Array(B.bV(w))
return new A.a_J(w,x.a,x.b,x.c)},
gdu(){return C.kF},
gaj(d){return D.jx.gaj(this.d)},
ga3(d){return A.cp4(this)},
qo(d,e,f,g,h){return A.ui(A.cp4(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcj(){return 32767},
grq(){return!0},
gmQ(){return 16},
grG(){return this.a*this.c*2},
nU(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Int16Array(4),s=new A.MW(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ed(d,e,f){if(f==null||!(f instanceof A.Ii)||f.d!==this)f=A.cp4(this)
f.hm(0,d,e)
return f},
nV(d,e){return this.ed(d,e,null)},
mC(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.B(w)
w[e*this.a*x+d*x]=v},
fe(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
km(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){}}
A.a_K.prototype={
qV(d,e){var x=this,w=x.d
if(e)w=new Int32Array(w.length)
else w=new Int32Array(B.bV(w))
return new A.a_K(w,x.a,x.b,x.c)},
gdu(){return C.kG},
gaj(d){return D.cl.gaj(this.d)},
gmQ(){return 32},
grG(){return this.a*this.c*4},
ga3(d){return A.cp5(this)},
qo(d,e,f,g,h){return A.ui(A.cp5(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcj(){return 2147483647},
grq(){return!0},
nU(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Int32Array(4),s=new A.MX(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ed(d,e,f){if(f==null||!(f instanceof A.Ij)||f.d!==this)f=A.cp5(this)
f.hm(0,d,e)
return f},
nV(d,e){return this.ed(d,e,null)},
mC(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.B(w)
w[e*this.a*x+d*x]=v},
fe(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
km(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){}}
A.a_L.prototype={
qV(d,e){var x=this,w=x.d
if(e)w=new Int8Array(w.length)
else w=new Int8Array(B.bV(w))
return new A.a_L(w,x.a,x.b,x.c)},
gdu(){return C.kE},
gaj(d){return D.jy.gaj(this.d)},
grG(){return this.a*this.c},
ga3(d){return A.cp6(this)},
qo(d,e,f,g,h){return A.ui(A.cp6(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcj(){return 127},
grq(){return!0},
gmQ(){return 8},
nU(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Int8Array(4),s=new A.MY(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ed(d,e,f){if(f==null||!(f instanceof A.Ik)||f.d!==this)f=A.cp6(this)
f.hm(0,d,e)
return f},
nV(d,e){return this.ed(d,e,null)},
mC(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.B(w)
w[e*(this.a*x)+d*x]=v},
fe(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
km(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){}}
A.OU.prototype={
bKW(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.ba()
this.d=x},
qV(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bV(v))}x=w.f
x=x==null?null:x.dQ(0)
return new A.OU(v,w.e,x,w.a,w.b,w.c)},
gdu(){return C.fi},
gu(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gcj(){var x=this.f
x=x==null?null:x.gcj()
return x==null?1:x},
grq(){return!1},
gaj(d){var x=this.d
x===$&&B.b()
return D.A.gaj(x)},
gmQ(){return 1},
ga3(d){return A.a2A(this)},
qo(d,e,f,g,h){return A.ui(A.a2A(this),e,f,g,h)},
nU(d,e,f,g){var x=new A.N0(4,0)
x.ip(D.d.C(d),D.d.C(e),D.d.C(f),D.d.C(g))
return x},
ed(d,e,f){if(f==null||!(f instanceof A.Il)||f.f!==this)f=A.a2A(this)
f.hm(0,d,e)
return f},
nV(d,e){return this.ed(d,e,null)},
mC(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2A(w):x).hm(0,d,e)
w.r.kM(0,f)},
fe(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2A(w):x).hm(0,d,e)
w.r.kF(f,g,h)},
km(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2A(w):x).hm(0,d,e)
w.r.ip(f,g,h,i)},
j(d){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){},
grG(){return this.e},
geP(){return this.f}}
A.OV.prototype={
qV(d,e){var x,w=this,v=w.d
if(e)v=new Uint16Array(v.length)
else v=new Uint16Array(B.bV(v))
x=w.e
x=x==null?null:x.dQ(0)
return new A.OV(v,x,w.a,w.b,w.c)},
gdu(){return C.cd},
gaj(d){return D.dN.gaj(this.d)},
gmQ(){return 16},
gcj(){var x=this.e
x=x==null?null:x.gcj()
return x==null?65535:x},
grG(){return this.a*this.c*2},
ga3(d){return A.cp7(this)},
qo(d,e,f,g,h){return A.ui(A.cp7(this),e,f,g,h)},
gu(d){return this.d.byteLength},
grq(){return!0},
nU(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Uint16Array(4),s=new A.N1(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ed(d,e,f){if(f==null||!(f instanceof A.Im)||f.d!==this)f=A.cp7(this)
f.hm(0,d,e)
return f},
nV(d,e){return this.ed(d,e,null)},
mC(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.B(w)
w[e*this.a*x+d*x]=v},
fe(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
km(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){},
geP(){return this.e}}
A.OW.prototype={
bKX(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.ba()
this.d=x},
qV(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bV(v))}x=w.f
x=x==null?null:x.dQ(0)
return new A.OW(v,w.e,x,w.a,w.b,w.c)},
gdu(){return C.h2},
gmQ(){return 2},
gaj(d){var x=this.d
x===$&&B.b()
return D.A.gaj(x)},
ga3(d){return A.a2B(this)},
qo(d,e,f,g,h){return A.ui(A.a2B(this),e,f,g,h)},
gu(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gcj(){var x=this.f
x=x==null?null:x.gcj()
return x==null?3:x},
grq(){return!1},
nU(d,e,f,g){var x=new A.N2(4,0)
x.ip(D.d.C(d),D.d.C(e),D.d.C(f),D.d.C(g))
return x},
ed(d,e,f){if(f==null||!(f instanceof A.In)||f.f!==this)f=A.a2B(this)
f.hm(0,d,e)
return f},
nV(d,e){return this.ed(d,e,null)},
mC(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2B(w):x).hm(0,d,e)
w.r.kN(0,f)},
fe(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2B(w):x).hm(0,d,e)
w.r.kF(f,g,h)},
km(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2B(w):x).hm(0,d,e)
w.r.ip(f,g,h,i)},
j(d){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){},
grG(){return this.e},
geP(){return this.f}}
A.OX.prototype={
qV(d,e){var x=this,w=x.d
if(e)w=new Uint32Array(w.length)
else w=new Uint32Array(B.bV(w))
return new A.OX(w,x.a,x.b,x.c)},
gdu(){return C.j8},
gaj(d){return D.bq.gaj(this.d)},
grG(){return this.a*this.c*4},
gmQ(){return 32},
gcj(){return 4294967295},
ga3(d){return A.cp8(this)},
qo(d,e,f,g,h){return A.ui(A.cp8(this),e,f,g,h)},
gu(d){return this.d.byteLength},
grq(){return!0},
nU(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Uint32Array(4),s=new A.N3(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ed(d,e,f){if(f==null||!(f instanceof A.Io)||f.d!==this)f=A.cp8(this)
f.hm(0,d,e)
return f},
nV(d,e){return this.ed(d,e,null)},
mC(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.B(w)
w[e*this.a*x+d*x]=v},
fe(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
km(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){}}
A.OY.prototype={
bKY(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.ba()
this.d=x},
qV(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bV(v))}x=w.f
x=x==null?null:x.dQ(0)
return new A.OY(v,w.e,x,w.a,w.b,w.c)},
gdu(){return C.h3},
gaj(d){var x=this.d
x===$&&B.b()
return D.A.gaj(x)},
ga3(d){return A.a2C(this)},
qo(d,e,f,g,h){return A.ui(A.a2C(this),e,f,g,h)},
gu(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gcj(){var x=this.f
x=x==null?null:x.gcj()
return x==null?15:x},
grq(){return!1},
gmQ(){return 4},
nU(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new A.N4(4,new Uint8Array(2))
t.ip(x,w,v,u)
x=t
return x},
ed(d,e,f){if(f==null||!(f instanceof A.Ip)||f.e!==this)f=A.a2C(this)
f.hm(0,d,e)
return f},
nV(d,e){return this.ed(d,e,null)},
mC(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2C(w):x).hm(0,d,e)
w.r.kO(0,f)},
fe(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2C(w):x).hm(0,d,e)
w.r.kF(f,g,h)},
km(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2C(w):x).hm(0,d,e)
w.r.ip(f,g,h,i)},
j(d){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){},
grG(){return this.e},
geP(){return this.f}}
A.OZ.prototype={
qV(d,e){var x,w=this,v=w.d
if(e)v=new Uint8Array(v.length)
else v=new Uint8Array(B.bV(v))
x=w.e
x=x==null?null:x.dQ(0)
return new A.OZ(v,x,w.a,w.b,w.c)},
gdu(){return C.a7},
gaj(d){return D.A.gaj(this.d)},
grG(){return this.a*this.c},
gmQ(){return 8},
ga3(d){return A.bqQ(this)},
qo(d,e,f,g,h){return A.ui(A.bqQ(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcj(){var x=this.e
x=x==null?null:x.gcj()
return x==null?255:x},
grq(){return!1},
nU(d,e,f,g){var x=A.cPX(D.d.C(D.d.b9(d,0,255)),D.d.C(D.d.b9(e,0,255)),D.d.C(D.d.b9(f,0,255)),D.d.C(D.d.b9(g,0,255)))
return x},
ed(d,e,f){if(f==null||!(f instanceof A.Iq)||f.d!==this)f=A.bqQ(this)
f.hm(0,d,e)
return f},
nV(d,e){return this.ed(d,e,null)},
mC(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.B(w)
w[e*(this.a*x)+d*x]=v},
fe(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
km(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=e==null?l:A.pz(e,l,C.a7,l,l),j=m.c
if(j===1){x=k==null?0:D.c.b9(B.bg(k.gaf(k)),0,255)
j=m.d
D.A.lW(j,0,j.length,x)}else if(j===2){j=k==null
x=j?0:D.c.b9(B.bg(k.gaf(k)),0,255)
w=j?0:D.c.b9(B.bg(k.gap()),0,255)
v=J.cmn(D.A.gaj(m.d),0,null)
D.dN.lW(v,0,v.length,(w<<8|x)>>>0)}else if(j===4){j=k==null
x=j?0:D.c.b9(B.bg(k.gaf(k)),0,255)
w=j?0:D.c.b9(B.bg(k.gap()),0,255)
u=j?0:D.c.b9(B.bg(k.gau(k)),0,255)
t=j?0:D.c.b9(B.bg(k.gaG(k)),0,255)
s=J.op(D.A.gaj(m.d),0,null)
D.bq.lW(s,0,s.length,(t<<24|u<<16|w<<8|x)>>>0)}else{j=k==null
x=j?0:D.c.b9(B.bg(k.gaf(k)),0,255)
w=j?0:D.c.b9(B.bg(k.gap()),0,255)
u=j?0:D.c.b9(B.bg(k.gau(k)),0,255)
for(r=A.bqQ(m),j=r.d,q=j.c>0,j=j.d,p=j.$flags|0;r.q();){if(q){o=r.c
n=D.d.C(D.c.b9(x,0,255))
p&2&&B.B(j)
j[o]=n}r.sap(w)
r.sau(0,u)}}},
geP(){return this.e}}
A.ar1.prototype={
J(){return"Interpolation."+this.b}}
A.bqz.prototype={}
A.avu.prototype={
dQ(d){return new A.avu(new Uint16Array(B.bV(this.c)),this.a,this.b)},
gaj(d){return D.dN.gaj(this.c)},
gdu(){return C.hJ},
gcj(){return 1},
fm(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=A.fQ(g)
x.$flags&2&&B.B(x)
x[e*v+f]=w}},
pi(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=A.fQ(e)
x.$flags&2&&B.B(x)
x[d]=w
if(v>1){x[d+1]=A.fQ(f)
if(v>2)x[d+2]=A.fQ(g)}},
n9(d,e,f){var x,w=this.b
if(f<w){w=this.c[e*w+f]
x=$.hM
w=(x!=null?x:A.iD())[w]}else w=0
return w},
nd(d){var x=this.c[d*this.b],w=$.hM
return(w!=null?w:A.iD())[x]},
nb(d){var x,w=this.b
if(w<2)return 0
w=this.c[d*w+1]
x=$.hM
return(x!=null?x:A.iD())[w]},
na(d){var x,w=this.b
if(w<3)return 0
w=this.c[d*w+2]
x=$.hM
return(x!=null?x:A.iD())[w]},
or(d){var x,w=this.b
if(w<4)return 0
w=this.c[d*w+3]
x=$.hM
return(x!=null?x:A.iD())[w]},
ud(d,e){return this.fm(0,d,0,e)},
ua(d,e){return this.fm(0,d,1,e)},
u9(d,e){return this.fm(0,d,2,e)},
u8(d,e){return this.fm(0,d,3,e)}}
A.avv.prototype={
dQ(d){return new A.avv(new Float32Array(B.bV(this.c)),this.a,this.b)},
gaj(d){return D.eW.gaj(this.c)},
gdu(){return C.j7},
gcj(){return 1},
fm(d,e,f,g){var x,w=this.b
if(f<w){x=this.c
x.$flags&2&&B.B(x)
x[e*w+f]=g}},
pi(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x.$flags&2&&B.B(x)
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
n9(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nd(d){return this.c[d*this.b]},
nb(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
na(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
or(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
ud(d,e){return this.fm(0,d,0,e)},
ua(d,e){return this.fm(0,d,1,e)},
u9(d,e){return this.fm(0,d,2,e)},
u8(d,e){return this.fm(0,d,3,e)}}
A.avw.prototype={
dQ(d){return new A.avw(new Float64Array(B.bV(this.c)),this.a,this.b)},
gaj(d){return D.e8.gaj(this.c)},
gdu(){return C.kD},
gcj(){return 1},
fm(d,e,f,g){var x,w=this.b
if(f<w){x=this.c
x.$flags&2&&B.B(x)
x[e*w+f]=g}},
pi(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x.$flags&2&&B.B(x)
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
n9(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nd(d){return this.c[d*this.b]},
nb(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
na(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
or(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
ud(d,e){return this.fm(0,d,0,e)},
ua(d,e){return this.fm(0,d,1,e)},
u9(d,e){return this.fm(0,d,2,e)},
u8(d,e){return this.fm(0,d,3,e)}}
A.avx.prototype={
dQ(d){return new A.avx(new Int16Array(B.bV(this.c)),this.a,this.b)},
gaj(d){return D.jx.gaj(this.c)},
gdu(){return C.kF},
gcj(){return 32767},
fm(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.B(x)
x[e*v+f]=w}},
pi(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.B(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
n9(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nd(d){return this.c[d*this.b]},
nb(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
na(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
or(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
ud(d,e){return this.fm(0,d,0,e)},
ua(d,e){return this.fm(0,d,1,e)},
u9(d,e){return this.fm(0,d,2,e)},
u8(d,e){return this.fm(0,d,3,e)}}
A.avy.prototype={
dQ(d){return new A.avy(new Int32Array(B.bV(this.c)),this.a,this.b)},
gaj(d){return D.cl.gaj(this.c)},
gdu(){return C.kG},
gcj(){return 2147483647},
fm(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.B(x)
x[e*v+f]=w}},
pi(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.B(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
n9(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nd(d){return this.c[d*this.b]},
nb(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
na(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
or(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
ud(d,e){return this.fm(0,d,0,e)},
ua(d,e){return this.fm(0,d,1,e)},
u9(d,e){return this.fm(0,d,2,e)},
u8(d,e){return this.fm(0,d,3,e)}}
A.avz.prototype={
dQ(d){return new A.avz(new Int8Array(B.bV(this.c)),this.a,this.b)},
gaj(d){return D.jy.gaj(this.c)},
gdu(){return C.kE},
gcj(){return 127},
fm(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.B(x)
x[e*v+f]=w}},
pi(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.B(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
n9(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nd(d){return this.c[d*this.b]},
nb(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
na(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
or(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
ud(d,e){return this.fm(0,d,0,e)},
ua(d,e){return this.fm(0,d,1,e)},
u9(d,e){return this.fm(0,d,2,e)},
u8(d,e){return this.fm(0,d,3,e)}}
A.avA.prototype={
dQ(d){return new A.avA(new Uint16Array(B.bV(this.c)),this.a,this.b)},
gaj(d){return D.dN.gaj(this.c)},
gdu(){return C.cd},
gcj(){return 65535},
fm(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.B(x)
x[e*v+f]=w}},
pi(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.B(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
n9(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nd(d){return this.c[d*this.b]},
nb(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
na(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
or(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
ud(d,e){return this.fm(0,d,0,e)},
ua(d,e){return this.fm(0,d,1,e)},
u9(d,e){return this.fm(0,d,2,e)},
u8(d,e){return this.fm(0,d,3,e)}}
A.a2o.prototype={
dQ(d){return new A.a2o(new Uint32Array(B.bV(this.c)),this.a,this.b)},
gaj(d){return D.bq.gaj(this.c)},
gdu(){return C.j8},
gcj(){return 4294967295},
fm(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.B(x)
x[e*v+f]=w}},
pi(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.B(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
n9(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nd(d){return this.c[d*this.b]},
nb(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
na(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
or(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
ud(d,e){return this.fm(0,d,0,e)},
ua(d,e){return this.fm(0,d,1,e)},
u9(d,e){return this.fm(0,d,2,e)},
u8(d,e){return this.fm(0,d,3,e)}}
A.uh.prototype={
dQ(d){return A.cA5(this)},
gaj(d){return D.A.gaj(this.c)},
gdu(){return C.a7},
gcj(){return 255},
fm(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.B(x)
x[e*v+f]=w}},
pi(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.B(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
RM(d,e,f,g,h){var x,w,v=this.b
d*=v
x=this.c
w=D.c.C(e)
x.$flags&2&&B.B(x)
x[d]=w
if(v>1){x[d+1]=D.c.C(f)
if(v>2){x[d+2]=D.c.C(g)
if(v>3)x[d+3]=D.c.C(h)}}},
n9(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nd(d){var x
d*=this.b
x=this.c
if(d>=x.length)return 0
return x[d]},
nb(d){var x=this.b
if(x<2)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+1]},
na(d){var x=this.b
if(x<3)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+2]},
or(d){var x=this.b
if(x<4)return 255
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+3]},
ud(d,e){return this.fm(0,d,0,e)},
ua(d,e){return this.fm(0,d,1,e)},
u9(d,e){return this.fm(0,d,2,e)},
u8(d,e){return this.fm(0,d,3,e)}}
A.If.prototype={
dQ(d){var x=this
return new A.If(x.a,x.b,x.c,x.d)},
gdu(){return C.hJ},
gu(d){return this.d.c},
geP(){return null},
gcj(){return 1},
gn8(d){return this.a},
gnT(d){return this.b},
hm(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gL(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
i(d,e){var x,w=this.d
if(e<w.c){w=w.d[this.c+e]
x=$.hM
w=(x!=null?x:A.iD())[w]}else w=0
return w},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=A.fQ(f)
v.$flags&2&&B.B(v)
v[x+e]=w}},
ge7(d){return this.gaf(0)},
se7(d,e){this.saf(0,e)},
gaf(d){var x,w=this.d
if(w.c>0){w=w.d[this.c]
x=$.hM
w=(x!=null?x:A.iD())[w]}else w=0
return w},
saf(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=A.fQ(e)
v.$flags&2&&B.B(v)
v[x]=w}},
gap(){var x,w=this.d
if(w.c>1){w=w.d[this.c+1]
x=$.hM
w=(x!=null?x:A.iD())[w]}else w=0
return w},
sap(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=A.fQ(d)
v.$flags&2&&B.B(v)
v[x+1]=w}},
gau(d){var x,w=this.d
if(w.c>2){w=w.d[this.c+2]
x=$.hM
w=(x!=null?x:A.iD())[w]}else w=0
return w},
sau(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=A.fQ(e)
v.$flags&2&&B.B(v)
v[x+2]=w}},
gaG(d){var x,w=this.d
if(w.c>3){w=w.d[this.c+3]
x=$.hM
w=(x!=null?x:A.iD())[w]}else w=0
return w},
saG(d,e){var x,w,v,u=this.d
if(u.c>3){x=this.gap()
u=u.d
w=this.c
v=A.fQ(x)
u.$flags&2&&B.B(u)
u[w+3]=v}},
giB(){return this.gaf(0)/1},
siB(d){this.saf(0,d)},
gil(){return this.gap()/1},
sil(d){this.sap(d)},
giv(){return this.gau(0)/1},
siv(d){this.sau(0,d)},
gfs(){return this.gaG(0)/1},
sfs(d){this.saG(0,d)},
gju(){return A.jb(this)},
iI(d,e){var x=this
if(x.d.c>0){x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saG(0,e.gaG(e))}},
kF(d,e,f){var x,w,v=this,u=v.d,t=u.c
if(t>0){u=u.d
x=v.c
w=A.fQ(d)
u.$flags&2&&B.B(u)
u[x]=w
if(t>1){u[v.c+1]=A.fQ(e)
if(t>2)u[v.c+2]=A.fQ(f)}}},
ip(d,e,f,g){var x,w,v=this,u=v.d,t=u.c
if(t>0){u=u.d
x=v.c
w=A.fQ(d)
u.$flags&2&&B.B(u)
u[x]=w
if(t>1){u[v.c+1]=A.fQ(e)
if(t>2){u[v.c+2]=A.fQ(f)
if(t>3)u[v.c+3]=A.fQ(g)}}}},
ga3(d){return new A.hr(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.If)return B.aK(B.H(u,!0,B.p(u).h("w.E")))===B.aK(B.H(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
o8(d){return A.pz(this,null,d,null,null)},
$ibq:1,
$idz:1,
$icQ:1,
gfo(d){return this.d}}
A.Ig.prototype={
dQ(d){var x=this
return new A.Ig(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geP(){return null},
gcj(){return 1},
gdu(){return C.j7},
gn8(d){return this.a},
gnT(d){return this.b},
hm(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gL(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
i(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
m(d,e,f){var x,w=this.d
if(e<w.c){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x+e]=f}},
ge7(d){return this.gaf(0)},
se7(d,e){this.saf(0,e)},
gaf(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saf(d,e){var x,w=this.d
if(w.c>0){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x]=e}},
gap(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sap(d){var x,w=this.d
if(w.c>1){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x+1]=d}},
gau(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sau(d,e){var x,w=this.d
if(w.c>2){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x+2]=e}},
gaG(d){var x=this.d
return x.c>3?x.d[this.c+3]:1},
saG(d,e){var x,w=this.d
if(w.c>3){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x+3]=e}},
giB(){return this.gaf(0)/1},
siB(d){this.saf(0,d)},
gil(){return this.gap()/1},
sil(d){this.sap(d)},
giv(){return this.gau(0)/1},
siv(d){this.sau(0,d)},
gfs(){return this.gaG(0)/1},
sfs(d){this.saG(0,d)},
gju(){return A.jb(this)},
iI(d,e){var x=this
x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saG(0,e.gaG(e))},
kF(d,e,f){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.B(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
ip(d,e,f,g){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.B(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
ga3(d){return new A.hr(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Ig)return B.aK(B.H(u,!0,B.p(u).h("w.E")))===B.aK(B.H(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
o8(d){return A.pz(this,null,d,null,null)},
$ibq:1,
$idz:1,
$icQ:1,
gfo(d){return this.d}}
A.Ih.prototype={
dQ(d){var x=this
return new A.Ih(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geP(){return null},
gcj(){return 1},
gdu(){return C.kD},
gn8(d){return this.a},
gnT(d){return this.b},
hm(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gL(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
i(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
m(d,e,f){var x,w=this.d
if(e<w.c){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x+e]=f}},
ge7(d){return this.gaf(0)},
se7(d,e){this.saf(0,e)},
gaf(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saf(d,e){var x,w=this.d
if(w.c>0){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x]=e}},
gap(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sap(d){var x,w=this.d
if(w.c>1){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x+1]=d}},
gau(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sau(d,e){var x,w=this.d
if(w.c>2){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x+2]=e}},
gaG(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saG(d,e){var x,w=this.d
if(w.c>3){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x+3]=e}},
giB(){return this.gaf(0)/1},
siB(d){this.saf(0,d)},
gil(){return this.gap()/1},
sil(d){this.sap(d)},
giv(){return this.gau(0)/1},
siv(d){this.sau(0,d)},
gfs(){return this.gaG(0)/1},
sfs(d){this.saG(0,d)},
gju(){return A.jb(this)},
iI(d,e){var x=this
x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saG(0,e.gaG(e))},
kF(d,e,f){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.B(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
ip(d,e,f,g){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.B(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
ga3(d){return new A.hr(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Ih)return B.aK(B.H(u,!0,B.p(u).h("w.E")))===B.aK(B.H(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
o8(d){return A.pz(this,null,d,null,null)},
$ibq:1,
$idz:1,
$icQ:1,
gfo(d){return this.d}}
A.Ii.prototype={
dQ(d){var x=this
return new A.Ii(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geP(){return null},
gcj(){return 32767},
gdu(){return C.kF},
gn8(d){return this.a},
gnT(d){return this.b},
hm(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gL(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
i(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.d.C(f)
v.$flags&2&&B.B(v)
v[x+e]=w}},
ge7(d){return this.gaf(0)},
se7(d,e){this.saf(0,e)},
gaf(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saf(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.B(v)
v[x]=w}},
gap(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sap(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.C(d)
v.$flags&2&&B.B(v)
v[x+1]=w}},
gau(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sau(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.B(v)
v[x+2]=w}},
gaG(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saG(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.B(v)
v[x+3]=w}},
giB(){return this.gaf(0)/32767},
siB(d){this.saf(0,d*32767)},
gil(){return this.gap()/32767},
sil(d){this.sap(d*32767)},
giv(){return this.gau(0)/32767},
siv(d){this.sau(0,d*32767)},
gfs(){return this.gaG(0)/32767},
sfs(d){this.saG(0,d*32767)},
gju(){return A.jb(this)},
iI(d,e){var x=this
x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saG(0,e.gaG(e))},
kF(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
ip(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga3(d){return new A.hr(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Ii)return B.aK(B.H(u,!0,B.p(u).h("w.E")))===B.aK(B.H(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
o8(d){return A.pz(this,null,d,null,null)},
$ibq:1,
$idz:1,
$icQ:1,
gfo(d){return this.d}}
A.Ij.prototype={
dQ(d){var x=this
return new A.Ij(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geP(){return null},
gcj(){return 2147483647},
gdu(){return C.kG},
gn8(d){return this.a},
gnT(d){return this.b},
hm(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gL(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
i(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.d.C(f)
v.$flags&2&&B.B(v)
v[x+e]=w}},
ge7(d){return this.gaf(0)},
se7(d,e){this.saf(0,e)},
gaf(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saf(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.B(v)
v[x]=w}},
gap(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sap(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.C(d)
v.$flags&2&&B.B(v)
v[x+1]=w}},
gau(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sau(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.B(v)
v[x+2]=w}},
gaG(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saG(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.B(v)
v[x+3]=w}},
giB(){return this.gaf(0)/2147483647},
siB(d){this.saf(0,d*2147483647)},
gil(){return this.gap()/2147483647},
sil(d){this.sap(d*2147483647)},
giv(){return this.gau(0)/2147483647},
siv(d){this.sau(0,d*2147483647)},
gfs(){return this.gaG(0)/2147483647},
sfs(d){this.saG(0,d*2147483647)},
gju(){return A.jb(this)},
iI(d,e){var x=this
x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saG(0,e.gaG(e))},
kF(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
ip(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga3(d){return new A.hr(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Ij)return B.aK(B.H(u,!0,B.p(u).h("w.E")))===B.aK(B.H(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
o8(d){return A.pz(this,null,d,null,null)},
$ibq:1,
$idz:1,
$icQ:1,
gfo(d){return this.d}}
A.Ik.prototype={
dQ(d){var x=this
return new A.Ik(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geP(){return null},
gcj(){return 127},
gdu(){return C.kE},
gn8(d){return this.a},
gnT(d){return this.b},
hm(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gL(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
i(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.d.C(f)
v.$flags&2&&B.B(v)
v[x+e]=w}},
ge7(d){return this.gaf(0)},
se7(d,e){this.saf(0,e)},
gaf(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saf(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.B(v)
v[x]=w}},
gap(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sap(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.C(d)
v.$flags&2&&B.B(v)
v[x+1]=w}},
gau(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sau(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.B(v)
v[x+2]=w}},
gaG(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saG(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.B(v)
v[x+3]=w}},
giB(){return this.gaf(0)/127},
siB(d){this.saf(0,d*127)},
gil(){return this.gap()/127},
sil(d){this.sap(d*127)},
giv(){return this.gau(0)/127},
siv(d){this.sau(0,d*127)},
gfs(){return this.gaG(0)/127},
sfs(d){this.saG(0,d*127)},
gju(){return A.jb(this)},
iI(d,e){var x=this
x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saG(0,e.gaG(e))},
kF(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
ip(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga3(d){return new A.hr(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Ik)return B.aK(B.H(u,!0,B.p(u).h("w.E")))===B.aK(B.H(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
o8(d){return A.pz(this,null,d,null,null)},
$ibq:1,
$idz:1,
$icQ:1,
gfo(d){return this.d}}
A.avN.prototype={
q(){var x=this,w=x.a
if(w.gn8(w)+1>x.d){w.hm(0,x.b,w.gnT(w)+1)
return w.gnT(w)<=x.e}return w.q()},
gL(d){return this.a},
$ibq:1}
A.Il.prototype={
dQ(d){var x=this
return new A.Il(x.a,x.b,x.c,x.d,x.e,x.f)},
gu(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geP(){return this.f.f},
gcj(){return this.f.gcj()},
gdu(){return C.fi},
gn8(d){return this.a},
gnT(d){return this.b},
hm(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.f
w=f*x.e
v.e=w
x=e*x.c
v.c=w+D.c.P(x,3)
v.d=x&7},
gL(d){return this},
q(){var x,w=this,v=++w.a,u=w.f
if(v===u.a){w.a=0
v=++w.b
w.d=0;++w.c
w.e=w.e+u.e
return v<u.b}x=u.c
if(u.f!=null||x===1){if(++w.d>7){w.d=0;++w.c}}else{v*=x
w.d=v&7
w.c=w.e+D.c.P(v,3)}v=w.c
u=u.d
u===$&&B.b()
return v<u.byteLength},
a5D(d,e){var x,w=this.c,v=7-(this.d+e)
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
if(w>=x.length)return 0
return D.c.h2(x[w],v)&1},
pw(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.a5D(0,d):0
else x=w.n9(0,this.a5D(0,0),d)
return x},
kM(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=7-(this.d+d)
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.b9(D.d.C(e),0,1)
s=C.ava[w]
v=D.c.eR(t,w)
r=r.d
r.$flags&2&&B.B(r)
r[x]=(u&s|v)>>>0},
i(d,e){return this.pw(e)},
m(d,e,f){return this.kM(e,f)},
ge7(d){return this.a5D(0,0)},
se7(d,e){this.kM(0,e)},
gaf(d){return this.pw(0)},
saf(d,e){this.kM(0,e)},
gap(){return this.pw(1)},
sap(d){this.kM(1,d)},
gau(d){return this.pw(2)},
sau(d,e){this.kM(2,e)},
gaG(d){return this.pw(3)},
saG(d,e){this.kM(3,e)},
giB(){return this.pw(0)/this.f.gcj()},
siB(d){this.kM(0,d*this.f.gcj())},
gil(){return this.pw(1)/this.f.gcj()},
sil(d){this.kM(1,d*this.f.gcj())},
giv(){return this.pw(2)/this.f.gcj()},
siv(d){this.kM(2,d*this.f.gcj())},
gfs(){return this.pw(3)/this.f.gcj()},
sfs(d){this.kM(3,d*this.f.gcj())},
gju(){return A.jb(this)},
iI(d,e){var x=this
x.kM(0,e.gaf(e))
x.kM(1,e.gap())
x.kM(2,e.gau(e))
x.kM(3,e.gaG(e))},
kF(d,e,f){var x=this,w=x.f.c
if(w>0){x.kM(0,d)
if(w>1){x.kM(1,e)
if(w>2)x.kM(2,f)}}},
ip(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.kM(0,d)
if(w>1){x.kM(1,e)
if(w>2){x.kM(2,f)
if(w>3)x.kM(3,g)}}}},
ga3(d){return new A.hr(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Il)return B.aK(B.H(u,!0,B.p(u).h("w.E")))===B.aK(B.H(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.pw(0)!==x.i(e,0))return!1
if(v>1){if(u.pw(1)!==x.i(e,1))return!1
if(v>2){if(u.pw(2)!==x.i(e,2))return!1
if(v>3)if(u.pw(3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
o8(d){return A.pz(this,null,d,null,null)},
$ibq:1,
$idz:1,
$icQ:1,
gfo(d){return this.f}}
A.Im.prototype={
dQ(d){var x=this
return new A.Im(x.a,x.b,x.c,x.d)},
gu(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
geP(){return this.d.e},
gcj(){return this.d.gcj()},
gdu(){return C.cd},
gn8(d){return this.a},
gnT(d){return this.b},
hm(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gL(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c
x+=v.e==null?v.c:1
w.c=x
return x<v.d.length},
hY(d,e){var x=this.d,w=x.e
if(w!=null)x=w.n9(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
i(d,e){return this.hY(0,e)},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.d.C(f)
v.$flags&2&&B.B(v)
v[x+e]=w}},
ge7(d){return this.gaf(0)},
se7(d,e){this.saf(0,e)},
gaf(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.nd(x.d[this.c])
return x},
saf(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.B(v)
v[x]=w}},
gap(){var x=this.d,w=x.e
if(w==null)x=x.c>1?x.d[this.c+1]:0
else x=w.nb(x.d[this.c])
return x},
sap(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.C(d)
v.$flags&2&&B.B(v)
v[x+1]=w}},
gau(d){var x=this.d,w=x.e
if(w==null)x=x.c>2?x.d[this.c+2]:0
else x=w.na(x.d[this.c])
return x},
sau(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.B(v)
v[x+2]=w}},
gaG(d){var x=this.d,w=x.e
if(w==null)x=x.c>3?x.d[this.c+3]:0
else x=w.or(x.d[this.c])
return x},
saG(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.B(v)
v[x+3]=w}},
giB(){return this.gaf(0)/this.d.gcj()},
siB(d){this.saf(0,d*this.d.gcj())},
gil(){return this.gap()/this.d.gcj()},
sil(d){this.sap(d*this.d.gcj())},
giv(){return this.gau(0)/this.d.gcj()},
siv(d){this.sau(0,d*this.d.gcj())},
gfs(){return this.gaG(0)/this.d.gcj()},
sfs(d){this.saG(0,d*this.d.gcj())},
gju(){return A.jb(this)},
iI(d,e){var x=this
x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saG(0,e.gaG(e))},
kF(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
ip(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga3(d){return new A.hr(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Im)return B.aK(B.H(u,!0,B.p(u).h("w.E")))===B.aK(B.H(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.hY(0,0)!==x.i(e,0))return!1
if(v>1){if(u.hY(0,1)!==x.i(e,1))return!1
if(v>2){if(u.hY(0,2)!==x.i(e,2))return!1
if(v>3)if(u.hY(0,3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
o8(d){return A.pz(this,null,d,null,null)},
$ibq:1,
$idz:1,
$icQ:1,
gfo(d){return this.d}}
A.In.prototype={
dQ(d){var x=this
return new A.In(x.a,x.b,x.c,x.d,x.e,x.f)},
gu(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geP(){return this.f.f},
gcj(){return this.f.gcj()},
gdu(){return C.h2},
gawj(){var x=this.f
return x.f!=null?2:x.c<<1>>>0},
gn8(d){return this.a},
gnT(d){return this.b},
hm(d,e,f){var x,w,v,u=this
u.a=e
u.b=f
x=u.gawj()
w=u.b*u.f.e
u.e=w
v=u.a*x
u.c=w+D.c.P(v,3)
u.d=v&7},
gL(d){return this},
q(){var x,w,v=this,u=v.f
if(++v.a===u.a){v.a=0
x=++v.b
v.d=0;++v.c
v.e=v.e+u.e
return x<u.b}if(u.f!=null||u.c===1){x=v.d+=2
if(x>7){v.d=0;++v.c}}else{w=v.gawj()
x=v.a*w
v.d=x&7
v.c=v.e+D.c.P(x,3)}x=v.c
u=u.d
u===$&&B.b()
return x<u.length},
a5E(d,e){var x,w=this.c,v=6-(this.d+(e<<1>>>0))
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
return D.c.h2(x[w],v)&3},
px(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.a5E(0,d):0
else x=w.n9(0,this.a5E(0,0),d)
return x},
kN(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=6-(this.d+(d<<1>>>0))
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.b9(D.d.C(e),0,3)
s=C.apD[D.c.P(w,1)]
v=D.c.eR(t,w)
r=r.d
r.$flags&2&&B.B(r)
r[x]=(u&s|v)>>>0},
i(d,e){return this.px(e)},
m(d,e,f){return this.kN(e,f)},
ge7(d){return this.a5E(0,0)},
se7(d,e){this.kN(0,e)},
gaf(d){return this.px(0)},
saf(d,e){this.kN(0,e)},
gap(){return this.px(1)},
sap(d){this.kN(1,d)},
gau(d){return this.px(2)},
sau(d,e){this.kN(2,e)},
gaG(d){return this.px(3)},
saG(d,e){this.kN(3,e)},
giB(){return this.px(0)/this.f.gcj()},
siB(d){this.kN(0,d*this.f.gcj())},
gil(){return this.px(1)/this.f.gcj()},
sil(d){this.kN(1,d*this.f.gcj())},
giv(){return this.px(2)/this.f.gcj()},
siv(d){this.kN(2,d*this.f.gcj())},
gfs(){return this.px(3)/this.f.gcj()},
sfs(d){this.kN(3,d*this.f.gcj())},
gju(){return A.jb(this)},
iI(d,e){var x=this
x.kN(0,e.gaf(e))
x.kN(1,e.gap())
x.kN(2,e.gau(e))
x.kN(3,e.gaG(e))},
kF(d,e,f){var x=this,w=x.f.c
if(w>0){x.kN(0,d)
if(w>1){x.kN(1,e)
if(w>2)x.kN(2,f)}}},
ip(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.kN(0,d)
if(w>1){x.kN(1,e)
if(w>2){x.kN(2,f)
if(w>3)x.kN(3,g)}}}},
ga3(d){return new A.hr(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.In)return B.aK(B.H(u,!0,B.p(u).h("w.E")))===B.aK(B.H(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.px(0)!==x.i(e,0))return!1
if(v>1){if(u.px(1)!==x.i(e,1))return!1
if(v>2){if(u.px(2)!==x.i(e,2))return!1
if(v>3)if(u.px(3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
o8(d){return A.pz(this,null,d,null,null)},
$ibq:1,
$idz:1,
$icQ:1,
gfo(d){return this.f}}
A.Io.prototype={
dQ(d){var x=this
return new A.Io(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geP(){return null},
gcj(){return 4294967295},
gdu(){return C.j8},
gn8(d){return this.a},
gnT(d){return this.b},
hm(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gL(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
i(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.d.C(f)
v.$flags&2&&B.B(v)
v[x+e]=w}},
ge7(d){return this.gaf(0)},
se7(d,e){this.saf(0,e)},
gaf(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saf(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.B(v)
v[x]=w}},
gap(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sap(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.C(d)
v.$flags&2&&B.B(v)
v[x+1]=w}},
gau(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sau(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.B(v)
v[x+2]=w}},
gaG(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saG(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.B(v)
v[x+3]=w}},
giB(){return this.gaf(0)/4294967295},
siB(d){this.saf(0,d*4294967295)},
gil(){return this.gap()/4294967295},
sil(d){this.sap(d*4294967295)},
giv(){return this.gau(0)/4294967295},
siv(d){this.sau(0,d*4294967295)},
gfs(){return this.gaG(0)/4294967295},
sfs(d){this.saG(0,d*4294967295)},
gju(){return A.jb(this)},
iI(d,e){var x=this
x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saG(0,e.gaG(e))},
kF(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
ip(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga3(d){return new A.hr(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Io)return B.aK(B.H(u,!0,B.p(u).h("w.E")))===B.aK(B.H(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
o8(d){return A.pz(this,null,d,null,null)},
$ibq:1,
$idz:1,
$icQ:1,
gfo(d){return this.d}}
A.Ip.prototype={
dQ(d){var x=this
return new A.Ip(x.a,x.b,x.c,x.d,x.e)},
gu(d){var x=this.e,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geP(){return this.e.f},
gcj(){return this.e.gcj()},
gdu(){return C.h3},
gn8(d){return this.a},
gnT(d){return this.b},
hm(d,e,f){var x,w,v,u=this
u.a=e
u.b=f
x=u.e
w=x.c*4
v=x.e
if(w===4)x=f*v+D.c.P(e,1)
else if(w===8)x=f*x.a+e
else{x=f*v
x=w===16?x+(e<<1>>>0):x+D.c.P(e*w,3)}u.c=x
x=e*w
u.d=w>7?x&4:x&7},
gL(d){return this},
q(){var x,w,v,u=this,t=u.e
if(++u.a===t.a){u.a=0
x=++u.b
u.d=0
u.c=x*t.e
return x<t.b}w=t.c
x=t.f!=null||w===1
v=u.d
if(x){x=v+4
u.d=x
if(x>7){u.d=0;++u.c}}else{x=u.d=v+(w<<2>>>0)
for(;x>7;){x-=8
u.d=x;++u.c}}x=u.c
t=t.d
t===$&&B.b()
return x<t.length},
a5F(d,e){var x,w=this.c,v=4-(this.d+(e<<2>>>0))
if(v<0){v+=8;++w}x=this.e.d
x===$&&B.b()
return D.c.h2(x[w],v)&15},
pu(d){var x=this.e,w=x.f
if(w==null)x=x.c>d?this.a5F(0,d):0
else x=w.n9(0,this.a5F(0,0),d)
return x},
kO(d,e){var x,w,v,u,t,s,r=this.e
if(d>=r.c)return
x=this.c
w=4-(this.d+(d<<2>>>0))
if(w<0){w+=8;++x}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.b9(D.d.C(e),0,15)
s=w===4?15:240
v=D.c.eR(t,w)
r=r.d
r.$flags&2&&B.B(r)
r[x]=(u&s|v)>>>0},
i(d,e){return this.pu(e)},
m(d,e,f){return this.kO(e,f)},
ge7(d){return this.a5F(0,0)},
se7(d,e){this.kO(0,e)},
gaf(d){return this.pu(0)},
saf(d,e){this.kO(0,e)},
gap(){return this.pu(1)},
sap(d){this.kO(1,d)},
gau(d){return this.pu(2)},
sau(d,e){this.kO(2,e)},
gaG(d){return this.pu(3)},
saG(d,e){this.kO(3,e)},
giB(){return this.pu(0)/this.e.gcj()},
siB(d){this.kO(0,d*this.e.gcj())},
gil(){return this.pu(1)/this.e.gcj()},
sil(d){this.kO(1,d*this.e.gcj())},
giv(){return this.pu(2)/this.e.gcj()},
siv(d){this.kO(2,d*this.e.gcj())},
gfs(){return this.pu(3)/this.e.gcj()},
sfs(d){this.kO(3,d*this.e.gcj())},
gju(){return A.jb(this)},
iI(d,e){var x=this
x.kO(0,e.gaf(e))
x.kO(1,e.gap())
x.kO(2,e.gau(e))
x.kO(3,e.gaG(e))},
kF(d,e,f){var x=this,w=x.e.c
if(w>0){x.kO(0,d)
if(w>1){x.kO(1,e)
if(w>2)x.kO(2,f)}}},
ip(d,e,f,g){var x=this,w=x.e.c
if(w>0){x.kO(0,d)
if(w>1){x.kO(1,e)
if(w>2){x.kO(2,f)
if(w>3)x.kO(3,g)}}}},
ga3(d){return new A.hr(this)},
k(d,e){var x,w,v=this
if(e==null)return!1
if(e instanceof A.Ip)return B.aK(B.H(v,!0,B.p(v).h("w.E")))===B.aK(B.H(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=v.e.c
w=J.a2(e)
if(w.gu(e)!==x)return!1
if(v.pu(0)!==w.i(e,0))return!1
if(x>1){if(v.pu(1)!==w.i(e,1))return!1
if(x>2){if(v.pu(2)!==w.i(e,2))return!1
if(x>3)if(v.pu(3)!==w.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
o8(d){return A.pz(this,null,d,null,null)},
$ibq:1,
$idz:1,
$icQ:1,
gfo(d){return this.e}}
A.Iq.prototype={
dQ(d){var x=this
return new A.Iq(x.a,x.b,x.c,x.d)},
gu(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
geP(){return this.d.e},
gcj(){return this.d.gcj()},
gdu(){return C.a7},
gn8(d){return this.a},
gnT(d){return this.b},
hm(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gL(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c
x+=v.e==null?v.c:1
w.c=x
return x<v.d.length},
hY(d,e){var x=this.d,w=x.e
if(w!=null)x=w.n9(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
i(d,e){return this.hY(0,e)},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.d.C(D.d.b9(f,0,255))
v.$flags&2&&B.B(v)
v[x+e]=w}},
ge7(d){return this.d.d[this.c]},
se7(d,e){var x=this.d.d,w=this.c,v=D.d.C(D.d.b9(e,0,255))
x.$flags&2&&B.B(x)
x[w]=v},
gaf(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.nd(x.d[this.c])
return x},
saf(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(D.d.b9(e,0,255))
v.$flags&2&&B.B(v)
v[x]=w}},
gap(){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>1?w.d[x.c+1]:0}else w=v.nb(w.d[x.c])
return w},
sap(d){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.d.C(D.d.b9(d,0,255))
w.$flags&2&&B.B(w)
w[v]=x}else if(v>1){w=w.d
v=this.c
x=D.d.C(D.d.b9(d,0,255))
w.$flags&2&&B.B(w)
w[v+1]=x}},
gau(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>2?w.d[x.c+2]:0}else w=v.na(w.d[x.c])
return w},
sau(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.d.C(D.d.b9(e,0,255))
w.$flags&2&&B.B(w)
w[v]=x}else if(v>2){w=w.d
v=this.c
x=D.d.C(D.d.b9(e,0,255))
w.$flags&2&&B.B(w)
w[v+2]=x}},
gaG(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c+1]
else w=v>3?w.d[x.c+3]:255}else w=v.or(w.d[x.c])
return w},
saG(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.d.C(D.d.b9(e,0,255))
w.$flags&2&&B.B(w)
w[v+1]=x}else if(v>3){w=w.d
v=this.c
x=D.d.C(D.d.b9(e,0,255))
w.$flags&2&&B.B(w)
w[v+3]=x}},
giB(){return this.gaf(0)/this.d.gcj()},
siB(d){this.saf(0,d*this.d.gcj())},
gil(){return this.gap()/this.d.gcj()},
sil(d){this.sap(d*this.d.gcj())},
giv(){return this.gau(0)/this.d.gcj()},
siv(d){this.sau(0,d*this.d.gcj())},
gfs(){return this.gaG(0)/this.d.gcj()},
sfs(d){this.saG(0,d*this.d.gcj())},
gju(){return this.d.c===2?this.gaf(0):A.jb(this)},
iI(d,e){var x=this
if(x.d.e!=null)x.se7(0,e.ge7(e))
else{x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saG(0,e.gaG(e))}},
kF(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
ip(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga3(d){return new A.hr(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Iq)return B.aK(B.H(u,!0,B.p(u).h("w.E")))===B.aK(B.H(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.hY(0,0)!==x.i(e,0))return!1
if(v>1){if(u.hY(0,1)!==x.i(e,1))return!1
if(v>2){if(u.hY(0,2)!==x.i(e,2))return!1
if(v>3)if(u.hY(0,3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.H(this,!0,B.p(this).h("w.E")))},
o8(d){return A.pz(this,null,d,null,null)},
$ibq:1,
$idz:1,
$icQ:1,
gfo(d){return this.d}}
A.fe.prototype={
dQ(d){return new A.fe()},
gfo(d){return $.cJL()},
gn8(d){return 0},
gnT(d){return 0},
gu(d){return 0},
gcj(){return 0},
gdu(){return C.a7},
geP(){return null},
i(d,e){return 0},
m(d,e,f){},
ge7(d){return 0},
se7(d,e){},
gaf(d){return 0},
saf(d,e){},
gap(){return 0},
sap(d){},
gau(d){return 0},
sau(d,e){},
gaG(d){return 0},
saG(d,e){},
giB(){return 0},
siB(d){},
gil(){return 0},
sil(d){},
giv(){return 0},
siv(d){},
gfs(){return 0},
sfs(d){},
gju(){return 0},
iI(d,e){},
kF(d,e,f){},
ip(d,e,f,g){},
hm(d,e,f){},
gL(d){return this},
q(){return!1},
k(d,e){if(e==null)return!1
return e instanceof A.fe},
gv(d){return 0},
ga3(d){return new A.hr(this)},
o8(d){return this},
$ibq:1,
$idz:1,
$icQ:1}
A.bbl.prototype={
J(){return"FlipDirection."+this.b}}
A.aqA.prototype={
j(d){return"ImageException: "+this.a},
$ibk:1}
A.lU.prototype={
gu(d){return this.c-this.d},
i(d,e){return J.v(this.a,this.d+e)},
m(d,e,f){J.bT(this.a,this.d+e,f)
return f},
rw(d,e,f,g){var x=this.a,w=J.cZ(x),v=this.d+d
if(f instanceof A.lU)w.e3(x,v,v+e,f.a,f.d+g)
else w.e3(x,v,v+e,y.L.a(f),g)},
A2(d,e,f){return this.rw(d,e,f,0)},
bDg(d,e,f){var x=this.a,w=this.d+d
J.tn(x,w,w+e,f)},
a1L(d,e,f){var x=this,w=f!=null?x.b+f:x.d
return A.cV(x.a,x.e,d,w+e)},
jg(d){return this.a1L(d,0,null)},
AX(d,e){return this.a1L(d,0,e)},
Sd(d,e){return this.a1L(d,e,null)},
dM(d,e){var x=this.d,w=x+(this.c-x)
for(;x<w;++x)J.v(this.a,x)
return-1},
cq(){return J.v(this.a,this.d++)},
jb(d){var x=this.jg(d)
this.d=this.d+(x.c-x.d)
return x},
jc(d){var x,w,v,u,t,s=this
if(d==null){x=B.a([],y.t)
for(w=s.c;v=s.d,v<w;){u=s.a
s.d=v+1
t=J.v(u,v)
if(t===0)return B.eo(x,0,null)
x.push(t)}throw B.l(A.c4("EOF reached without finding string terminator (length: "+B.o(d)+")"))}return B.eo(s.jb(d).hK(),0,null)},
Q3(){return this.jc(null)},
aDX(d){var x,w,v,u,t=this,s=B.a([],y.t)
for(x=t.c;w=t.d,w<x;){v=t.a
t.d=w+1
u=J.v(v,w)
s.push(u)
if(u===10||s.length>=d)return B.eo(s,0,null)}return B.eo(s,0,null)},
bHS(){return this.aDX(256)},
bHT(){var x,w,v,u,t=this,s=B.a([],y.t)
for(x=t.c;w=t.d,w<x;){v=t.a
t.d=w+1
u=J.v(v,w)
if(u===0)return new B.EZ(!0).F6(s,0,null,!0)
s.push(u)}return D.at.Cu(0,s,!0)},
al(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255
if(x.e)return w<<8|v
return v<<8|w},
rD(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255
if(x.e)return u|v<<8|w<<16
return w|v<<8|u<<16},
a1(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255,t=J.v(x.a,x.d++)&255
if(x.e)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
a_w(){return A.deo(this.ad8())},
ad8(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255,t=J.v(x.a,x.d++)&255,s=J.v(x.a,x.d++)&255,r=J.v(x.a,x.d++)&255,q=J.v(x.a,x.d++)&255,p=J.v(x.a,x.d++)&255
if(x.e)return(D.c.ek(w,56)|D.c.ek(v,48)|D.c.ek(u,40)|D.c.ek(t,32)|s<<24|r<<16|q<<8|p)>>>0
return(D.c.ek(p,56)|D.c.ek(q,48)|D.c.ek(r,40)|D.c.ek(s,32)|t<<24|u<<16|v<<8|w)>>>0},
Jg(d,e,f){var x,w=this,v=w.a
if(y.D.b(v))return w.aF3(e,f)
x=w.b+w.d+e
return J.cmx(v,x,f<=0?w.c:x+f)},
eJ(d){return this.Jg(0,0,0)},
aF3(d,e){var x,w=this,v=e==null?w.c-w.d-d:e,u=w.a
if(y.D.b(u))return J.da(D.A.gaj(u),u.byteOffset+w.d+d,v)
x=w.d+d
x=J.cmx(u,x,x+v)
return new Uint8Array(B.bV(x))},
hK(){return this.aF3(0,null)},
Qo(){var x=this.a
if(y.D.b(x))return J.op(D.A.gaj(x),x.byteOffset+this.d,null)
return J.op(D.A.gaj(this.hK()),0,null)}}
A.boX.prototype={
bpN(d){var x=this
x.aoL(d)
x.alS()
x.aor()
x.akk()},
bc9(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.c=Math.max(d,4)
n.f=m-n.d
n.r=m-1
x=D.d.b8(m,8)
n.w=x
n.x=x*256
n.Q=new A.a2o(new Uint32Array(1024),256,4)
n.a=new A.uh(new Uint8Array(768),256,3)
n.d=3
n.e=2
x=D.d.P(m,3)
n.y=new Int32Array(x)
x=y.cb
n.z=B.bK(m*3,0,!1,x)
n.at=B.bK(n.c,0,!1,x)
x=n.ax=B.bK(n.c,0,!1,x)
m=n.z
m[0]=0
m[1]=0
m[2]=0
m[3]=255
m[4]=255
m[5]=255
w=n.c
v=1/w
for(u=n.d,t=n.at,s=0;s<u;++s){x[s]=v
t[s]=0}for(r=u*3,q=n.f,s=u;s<w;++s,r=p){p=r+1
o=255*(s-u)/q
m[r]=o
r=p+1
m[p]=o
p=r+1
m[r]=o
x[s]=v
t[s]=0}},
akk(){var x,w,v,u,t,s
for(x=0;x<this.c;++x){w=this.a
w===$&&B.b()
v=this.Q
v===$&&B.b()
u=v.b
t=2<u?v.c[x*u+2]:0
s=1<u?v.c[x*u+1]:0
v=0<u?v.c[x*u]:0
w.pi(x,Math.abs(t),Math.abs(s),Math.abs(v))}},
ba2(d,e,f){var x,w,v,u=this.as[e],t=u-1,s=this.c,r=this.Q,q=1000,p=-1
while(!0){x=u<s
if(!(x||t>=0))break
if(x){r===$&&B.b()
x=r.b
w=(1<x?r.c[u*x+1]:0)-e
if(w>=q)u=s
else{if(w<0)w=-w
v=(0<x?r.c[u*x]:0)-d
w+=v<0?-v:v
if(w<q){v=(2<x?r.c[u*x+2]:0)-f
w+=v<0?-v:v
if(w<q){p=u
q=w}}++u}}if(t>=0){r===$&&B.b()
x=r.b
w=e-(1<x?r.c[t*x+1]:0)
if(w>=q)t=-1
else{if(w<0)w=-w
v=(0<x?r.c[t*x]:0)-d
w+=v<0?-v:v
if(w<q){v=(2<x?r.c[t*x+2]:0)-f
w+=v<0?-v:v
if(w<q){p=t
q=w}}--t}}}return p},
alS(){var x,w,v,u,t,s,r,q=this
for(x=0,w=0;x<q.c;++x){for(v=0;v<3;++v,++w){u=q.z
u===$&&B.b()
t=D.c.b9(D.d.C(0.5+u[w]),0,255)
u=q.Q
u===$&&B.b()
s=u.b
if(v<s){u=u.c
r=D.c.C(t)
u.$flags&2&&B.B(u)
u[x*s+v]=r}}u=q.Q
u===$&&B.b()
s=u.b
if(3<s){u=u.c
r=D.c.C(x)
u.$flags&2&&B.B(u)
u[x*s+3]=r}}},
aor(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
for(x=h.c,w=h.Q,v=h.as,u=v.$flags|0,t=0,s=0,r=0;r<x;r=n){w===$&&B.b()
q=w.b
p=1<q
o=p?w.c[r*q+1]:0
for(n=r+1,m=n,l=r;m<x;++m)if((p?w.c[m*q+1]:0)<o){o=p?w.c[m*q+1]:0
l=m}if(r!==l){k=0<q
m=k?w.c[l*q]:0
j=k?w.c[r*q]:0
if(k){i=w.c
j=D.c.C(j)
i.$flags&2&&B.B(i)
i[l*q]=j}if(k){k=w.c
j=D.c.C(m)
k.$flags&2&&B.B(k)
k[r*q]=j}m=p?w.c[l*q+1]:0
k=p?w.c[r*q+1]:0
if(p){j=w.c
k=D.c.C(k)
j.$flags&2&&B.B(j)
j[l*q+1]=k}if(p){p=w.c
k=D.c.C(m)
p.$flags&2&&B.B(p)
p[r*q+1]=k}p=2<q
m=p?w.c[l*q+2]:0
k=p?w.c[r*q+2]:0
if(p){j=w.c
k=D.c.C(k)
j.$flags&2&&B.B(j)
j[l*q+2]=k}if(p){p=w.c
k=D.c.C(m)
p.$flags&2&&B.B(p)
p[r*q+2]=k}p=3<q
m=p?w.c[l*q+3]:0
k=p?w.c[r*q+3]:0
if(p){j=w.c
k=D.c.C(k)
j.$flags&2&&B.B(j)
j[l*q+3]=k}if(p){p=w.c
k=D.c.C(m)
p.$flags&2&&B.B(p)
p[r*q+3]=k}}if(o!==t){u&2&&B.B(v)
v[t]=s+r>>>1
for(m=t+1;m<o;++m)v[m]=r
s=r
t=o}}x=h.r
x.toString
w=D.c.P(s+x,1)
u&2&&B.B(v)
v[t]=w
for(n=t+1;n<256;++n)v[n]=x},
aus(d,e){var x,w,v,u
for(x=this.y,w=d*d,v=0;v<d;++v){x===$&&B.b()
u=D.d.C(e*((w-v*v)*256/w))
x.$flags&2&&B.B(x)
x[v]=u}},
aoL(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.x
a2===$&&B.b()
x=30+D.c.b8(a1.b-1,3)
w=a3.gd0(0)*a3.gb2(0)
v=D.c.hv(w,a1.b)
u=Math.max(D.c.b8(v,100),1)
if(u===0)u=1
t=D.c.P(a2,8)
if(t<=1)t=0
a1.aus(t,1024)
if(w<1509)s=a1.b=1
else if(D.c.aq(w,499)!==0)s=499
else if(D.c.aq(w,491)!==0)s=491
else s=D.c.aq(w,487)!==0?487:503
r=a3.gd0(0)
q=a3.gb2(0)
for(p=a2,o=1024,n=0,m=0,l=0,k=0;k<v;){a2=a3.a
j=a2==null?null:a2.ed(m,l,null)
if(j==null)j=new A.fe()
i=j.gaf(j)
h=j.gap()
g=j.gau(j)
if(k===0){a2=a1.z
a2===$&&B.b()
f=a1.e
f===$&&B.b()
f*=3
a2[f]=g
a2[f+1]=h
a2[f+2]=i}e=a1.blL(g,h,i)
if(e<0)e=a1.aXC(g,h,i)
if(e>=a1.d){d=o/1024
j=e*3
a2=a1.z
a2===$&&B.b()
f=a2[j]
a2[j]=f-d*(f-g)
f=j+1
a0=a2[f]
a2[f]=a0-d*(a0-h)
a0=j+2
f=a2[a0]
a2[a0]=f-d*(f-i)
if(t>0)a1.aUz(d,t,e,g,h,i)}n+=s
m+=s
for(;m>r;){m-=r;++l}for(;n>=w;){n-=w
l-=q}++k
if(D.c.aq(k,u)===0){o-=D.c.hv(o,x)
p-=D.c.b8(p,30)
t=D.c.P(p,8)
if(t<=1)t=0
a1.aus(t,o)}}},
aUz(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=f-e,j=l.d-1
if(k<j)k=j
x=f+e
w=l.c
if(x>w)x=w
v=f+1
u=f-1
t=l.y
s=l.z
r=1
while(!0){q=v<x
if(!(q||u>k))break
t===$&&B.b()
p=r+1
o=t[r]
if(q){n=v*3
s===$&&B.b()
q=s[n]
s[n]=q-o*(q-g)/262144
q=n+1
m=s[q]
s[q]=m-o*(m-h)/262144
m=n+2
q=s[m]
s[m]=q-o*(q-i)/262144;++v}if(u>k){n=u*3
s===$&&B.b()
q=s[n]
s[n]=q-o*(q-g)/262144
q=n+1
m=s[q]
s[q]=m-o*(m-h)/262144
m=n+2
q=s[m]
s[m]=q-o*(q-i)/262144;--u}r=p}},
aXC(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=1e30
for(x=h.d,w=x*3,v=h.c,u=h.ax,t=h.at,s=h.z,r=g,q=r,p=-1,o=-1;x<v;++x,w=n){s===$&&B.b()
n=w+1
m=s[w]-d
if(m<0)m=-m
w=n+1
l=s[n]-e
if(l<0)l=-l
n=w+1
k=s[w]-f
if(k<0)k=-k
m=m+l+k
if(m<q){p=x
q=m}t===$&&B.b()
j=m-t[x]
if(j<r){o=x
r=j}u===$&&B.b()
i=u[x]
i-=0.0009765625*i
u[x]=i
t[x]=t[x]+i}u===$&&B.b()
u[p]=u[p]+0.0009765625
t===$&&B.b()
t[p]=t[p]-1
return o},
blL(d,e,f){var x,w,v,u,t,s
for(x=this.d,w=this.z,v=0,u=0;v<x;++v){w===$&&B.b()
t=u+1
s=!1
if(w[u]===d){u=t+1
if(w[t]===e){t=u+1
s=w[u]===f
u=t}}else u=t
if(s)return v}return-1}}
A.avf.prototype={
b0(d){var x,w,v=this
if(v.a===v.c.length)v.b0k()
x=v.c
w=v.a++
x.$flags&2&&B.B(x)
x[w]=d&255},
m2(d){var x,w,v,u,t=this,s=J.bz(d)
for(;x=t.a,w=x+s,v=t.c,u=v.length,w>u;)t.alC(w-u)
D.A.ib(v,x,w,d)
t.a+=s},
l6(d){var x=this
if(x.b){x.b0(D.c.P(d,8)&255)
x.b0(d&255)
return}x.b0(d&255)
x.b0(D.c.P(d,8)&255)},
iZ(d){var x=this
if(x.b){x.b0(D.c.P(d,24)&255)
x.b0(D.c.P(d,16)&255)
x.b0(D.c.P(d,8)&255)
x.b0(d&255)
return}x.b0(d&255)
x.b0(D.c.P(d,8)&255)
x.b0(D.c.P(d,16)&255)
x.b0(D.c.P(d,24)&255)},
bKK(d){var x,w=this,v=new Float32Array(1)
v[0]=d
x=J.da(D.eW.gaj(v),0,null)
if(w.b){w.b0(x[3])
w.b0(x[2])
w.b0(x[1])
w.b0(x[0])
return}w.b0(x[0])
w.b0(x[1])
w.b0(x[2])
w.b0(x[3])},
bKL(d){var x,w=this,v=new Float64Array(1)
v[0]=d
x=J.da(D.e8.gaj(v),0,null)
if(w.b){w.b0(x[7])
w.b0(x[6])
w.b0(x[5])
w.b0(x[4])
w.b0(x[3])
w.b0(x[2])
w.b0(x[1])
w.b0(x[0])
return}w.b0(x[0])
w.b0(x[1])
w.b0(x[2])
w.b0(x[3])
w.b0(x[4])
w.b0(x[5])
w.b0(x[6])
w.b0(x[7])},
alC(d){var x,w,v,u
if(d!=null)x=d
else{w=this.c.length
x=w===0?8192:w*2}w=this.c
v=w.length
u=new Uint8Array(v+x)
D.A.ib(u,0,v,w)
this.c=u},
b0k(){return this.alC(null)},
gu(d){return this.a}}
A.buc.prototype={
aHA(d){var x,w,v,u,t,s,r=d.gd0(0),q=d.gb2(0),p=this.a
p===$&&B.b()
x=A.hN(null,null,C.a7,0,C.bk,q,null,0,1,p,C.a7,r,!1)
r=x.a
w=r.ga3(r)
w.q()
x.z=d.z
x.w=d.w
x.y=d.y
for(r=d.a,r=r.ga3(r);r.q();){v=r.gL(r)
u=w.gL(w)
t=D.d.C(v.gaf(v))
s=D.d.C(v.gap())
u.m(0,0,this.ba2(D.d.C(v.gau(v)),s,t))
w.q()}return x}}
A.nS.prototype={
C(d){var x=this.b
return x===0?0:D.c.hv(this.a,x)},
tY(d){var x=this.b
return x===0?0:this.a/x},
k(d,e){if(e==null)return!1
return e instanceof A.nS&&this.a===e.a&&this.b===e.b},
gv(d){return B.ad(this.a,this.b,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
j(d){return""+this.a+"/"+this.b}}
A.bwN.prototype={
J(){return"RequestImageFormat."+this.b}}
A.bIl.prototype={}
var z=a.updateTypes(["~(lU)","t(qy,t,t)","t([t])","~(C0,A<t>)","~(t,t,t,t,t,dQ)","~(e,pW)","~(t)","~(t,jZ)","C0(t)"])
A.bgI.prototype={
$0(){return A.col(this.a,this.b,"jpg",this.c)},
$S:190}
A.bgJ.prototype={
$0(){return A.col(this.a,this.b,"png",null)},
$S:190}
A.bgL.prototype={
$0(){return A.col(this.a,this.b,"webp",this.c)},
$S:190}
A.bgB.prototype={
$2(d,e){var x=A.cy6(e)
this.a.a.m(0,d,x)
return x},
$S:z+5}
A.bgC.prototype={
$2(d,e){var x=e.dQ(0)
this.a.a.m(0,d,x)
return x},
$S:z+7}
A.bgD.prototype={
$2(d,e){var x=A.cy6(e)
this.a.b.a.m(0,d,x)
return x},
$S:z+5}
A.aZy.prototype={
$4(d,e,f,g){var x,w,v=this,u=v.a
if(u.a<v.c){x=v.b.c&&v.d.ch!=null
w=v.e
if(x){x=v.d
w.ip(x.ch.nd(d),x.ch.nb(d),x.ch.na(d),x.ch.or(d))}else w.ip(d,e,f,g)
w.q();++u.a}},
$S:734}
A.bai.prototype={
$1(d){var x,w,v,u,t=this.b,s=t.fy,r=this.a,q=r.b
s=s[q]
x=t.go
w=r.a
x=x[w]
v=new Uint32Array(s*x)
u=q+1
r.b=u
if(u===t.id){r.b=0
r.a=w+1}return v},
$S:735}
A.bi8.prototype={
$1(d){var x,w,v,u,t=this.b,s=t.cq(),r=t.cq()
t=this.a
if(!t.d.y.a4(0,s))throw B.l(A.c4("Invalid Component in SOS block"))
x=t.d.y.i(0,s)
x.toString
w=D.c.P(r,4)&15
v=r&15
u=t.z
if(w<u.length){u=u[w]
u.toString
x.w=u}t=t.y
if(v<t.length){t=t[v]
t.toString
x.x=t}return x},
$S:z+8}
A.bt5.prototype={
$1(d){return d!==""},
$S:19}
A.bK_.prototype={
$2(d,e){return(d|e<<16)>>>0},
$S:175}
A.bh_.prototype={
$4(d,e,f,g){var x=this.b
return d+this.a*(e-d+x*(d+g-f-e))+x*(f-d)},
$S:736}
A.bgZ.prototype={
$5(d,e,f,g,h){var x=-e,w=d*d
return f+0.5*(d*(x+g)+w*(2*e-5*f+4*g-h)+w*d*(x+3*f-3*g+h))},
$S:737};(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_2u,v=a._static_1,u=a._instance_1u,t=a.installStaticTearOff
x(A.jZ.prototype,"gxC",1,0,function(){return[0]},["$1","$0"],["jd","C"],2,0,0)
x(A.u_.prototype,"gxC",1,0,function(){return[0]},["$1","$0"],["jd","C"],2,0,0)
x(A.yg.prototype,"gxC",1,0,function(){return[0]},["$1","$0"],["jd","C"],2,0,0)
x(A.rc.prototype,"gxC",1,0,function(){return[0]},["$1","$0"],["jd","C"],2,0,0)
x(A.u1.prototype,"gxC",1,0,function(){return[0]},["$1","$0"],["jd","C"],2,0,0)
x(A.vZ.prototype,"gxC",1,0,function(){return[0]},["$1","$0"],["jd","C"],2,0,0)
x(A.yf.prototype,"gxC",1,0,function(){return[0]},["$1","$0"],["jd","C"],2,0,0)
x(A.ye.prototype,"gxC",1,0,function(){return[0]},["$1","$0"],["jd","C"],2,0,0)
x(A.u2.prototype,"gxC",1,0,function(){return[0]},["$1","$0"],["jd","C"],2,0,0)
var s
w(s=A.ara.prototype,"gaYA","aYB",3)
w(s,"gaYD","aYE",3)
w(s,"gaYF","aYG",3)
w(s,"gaYu","aYv",3)
w(s,"gaYw","aYx",3)
v(A,"deB","d18",0)
v(A,"deu","d10",0)
v(A,"des","d0Z",0)
v(A,"dez","d16",0)
v(A,"deA","d17",0)
v(A,"dey","d15",0)
v(A,"dex","d14",0)
v(A,"dew","d13",0)
v(A,"deD","d1a",0)
v(A,"deC","d19",0)
v(A,"dev","d11",0)
v(A,"det","d1_",0)
v(A,"deO","d1l",0)
v(A,"deM","d1j",0)
v(A,"deE","d1b",0)
v(A,"deG","d1d",0)
v(A,"deF","d1c",0)
v(A,"deH","d1e",0)
v(A,"deP","d1m",0)
v(A,"deN","d1k",0)
v(A,"deI","d1f",0)
v(A,"deJ","d1g",0)
v(A,"deK","d1h",0)
v(A,"deL","d1i",0)
u(A.a7E.prototype,"gbgQ","bgR",6)
u(A.aqZ.prototype,"gbxS","bxT",6)
t(A,"csQ",3,null,["$3"],["d1n"],1,0)
t(A,"deQ",3,null,["$3"],["d1o"],1,0)
t(A,"deV",3,null,["$3"],["d1t"],1,0)
t(A,"deW",3,null,["$3"],["d1u"],1,0)
t(A,"deX",3,null,["$3"],["d1v"],1,0)
t(A,"deY",3,null,["$3"],["d1w"],1,0)
t(A,"deZ",3,null,["$3"],["d1x"],1,0)
t(A,"df_",3,null,["$3"],["d1y"],1,0)
t(A,"df0",3,null,["$3"],["d1z"],1,0)
t(A,"df1",3,null,["$3"],["d1A"],1,0)
t(A,"deR",3,null,["$3"],["d1p"],1,0)
t(A,"deS",3,null,["$3"],["d1q"],1,0)
t(A,"deT",3,null,["$3"],["d1r"],1,0)
t(A,"deU",3,null,["$3"],["d1s"],1,0)
t(A,"df4",6,null,["$6"],["d1M"],4,0)
t(A,"df5",6,null,["$6"],["d1N"],4,0)
t(A,"df3",6,null,["$6"],["d1L"],4,0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.E,[A.a_B,A.bLw,A.bLx,A.b5L,A.t9,A.bZ_,A.cbj,A.bhd,A.bLv,A.bhw,A.bq7,A.hr,A.u0,A.aJ1,A.ao0,A.pW,A.jZ,A.aZz,A.Fv,A.b5v,A.b5u,A.b97,A.ao1,A.baf,A.ao2,A.ao3,A.bah,A.Zx,A.aM3,A.a_a,A.a_b,A.apy,A.bgp,A.aqk,A.ajW,A.H2,A.bi5,A.C0,A.bi7,A.TZ,A.ar9,A.bib,A.ara,A.a3m,A.bt3,A.wp,A.QP,A.bu1,A.QO,A.bu3,A.axh,A.axk,A.axq,A.a3J,A.QT,A.axp,A.rE,A.aBI,A.bGs,A.aBM,A.bGu,A.aBN,A.bGv,A.bjB,A.bJN,A.a7D,A.bJO,A.bJT,A.bJX,A.bJZ,A.a7C,A.bJY,A.bJP,A.Kx,A.aCH,A.aCJ,A.aCI,A.aCK,A.a7E,A.aCF,A.bJU,A.aCG,A.bKK,A.a7T,A.aqi,A.a_h,A.aD7,A.a_E,A.bqz,A.avN,A.aqA,A.lU,A.buc,A.avf,A.nS,A.bIl])
w(A.cht,A.bLw)
w(A.chu,A.bLx)
x(B.e3,[A.Tr,A.aj6,A.b_O,A.nB,A.aiS,A.mJ,A.lI,A.Od,A.Gx,A.tP,A.OK,A.bi6,A.QA,A.a3l,A.D2,A.awN,A.D3,A.up,A.o7,A.Kl,A.ky,A.rY,A.Ky,A.T_,A.bgm,A.apo,A.ar1,A.bbl,A.bwN])
w(A.bhu,A.bhw)
w(A.avh,A.bq7)
x(B.cj,[A.bgI,A.bgJ,A.bgL])
x(B.w,[A.MT,A.MU,A.MV,A.MW,A.MX,A.MY,A.N0,A.N1,A.N2,A.N3,A.N4,A.xL,A.Xq,A.BI,A.lT,A.If,A.Ig,A.Ih,A.Ii,A.Ij,A.Ik,A.Il,A.Im,A.In,A.Io,A.Ip,A.Iq,A.fe])
x(A.xL,[A.ajR,A.MZ])
w(A.ak2,A.Xq)
w(A.Ob,A.u0)
x(B.dj,[A.bgB,A.bgC,A.bgD,A.bK_])
x(A.jZ,[A.u_,A.BD,A.yg,A.rc,A.u1,A.vZ,A.yf,A.ye,A.u2,A.BF,A.BE,A.Hc])
x(A.b5v,[A.aiW,A.bag,A.be_,A.bgo,A.ar8,A.awM,A.bt4,A.bu2,A.bu7,A.bFN,A.bGt,A.bKL])
x(B.bC,[A.aZy,A.bai,A.bi8,A.bt5,A.bh_,A.bgZ])
w(A.b6M,A.aiW)
w(A.bhE,A.baf)
x(A.bhE,[A.aqU,A.bhF,A.bhG,A.bhH,A.aqW])
w(A.aqV,A.Zx)
w(A.aqX,A.a_b)
w(A.bgn,A.Fv)
x(A.H2,[A.H3,A.a_C])
x(A.b97,[A.bi9,A.bt1])
w(A.aqY,A.a3m)
w(A.bhI,A.bt3)
w(A.IP,A.b5u)
x(A.wp,[A.axf,A.axg,A.axi,A.axj,A.axm,A.axn])
x(A.QP,[A.a3G,A.axl])
x(A.axq,[A.yW,A.m3])
w(A.aqZ,A.a7E)
w(A.ar_,A.a7T)
w(A.ar0,A.aD7)
x(A.lT,[A.OS,A.OT,A.a_I,A.a_J,A.a_K,A.a_L,A.OU,A.OV,A.OW,A.OX,A.OY,A.OZ])
x(A.bqz,[A.avu,A.avv,A.avw,A.avx,A.avy,A.avz,A.avA,A.a2o,A.uh])
w(A.boX,A.buc)})()
B.bl(b.typeUniverse,JSON.parse('{"hr":{"bq":["aX"]},"MT":{"dz":[],"w":["aX"],"w.E":"aX"},"MU":{"dz":[],"w":["aX"],"w.E":"aX"},"MV":{"dz":[],"w":["aX"],"w.E":"aX"},"MW":{"dz":[],"w":["aX"],"w.E":"aX"},"MX":{"dz":[],"w":["aX"],"w.E":"aX"},"MY":{"dz":[],"w":["aX"],"w.E":"aX"},"N0":{"dz":[],"w":["aX"],"w.E":"aX"},"N1":{"dz":[],"w":["aX"],"w.E":"aX"},"N2":{"dz":[],"w":["aX"],"w.E":"aX"},"N3":{"dz":[],"w":["aX"],"w.E":"aX"},"N4":{"dz":[],"w":["aX"],"w.E":"aX"},"xL":{"dz":[],"w":["aX"],"w.E":"aX"},"ajR":{"dz":[],"w":["aX"],"w.E":"aX"},"MZ":{"dz":[],"w":["aX"],"w.E":"aX"},"Xq":{"dz":[],"w":["aX"],"w.E":"aX"},"ak2":{"dz":[],"w":["aX"],"w.E":"aX"},"u_":{"jZ":[]},"BD":{"jZ":[]},"yg":{"jZ":[]},"rc":{"jZ":[]},"u1":{"jZ":[]},"vZ":{"jZ":[]},"yf":{"jZ":[]},"ye":{"jZ":[]},"u2":{"jZ":[]},"BF":{"jZ":[]},"BE":{"jZ":[]},"Hc":{"jZ":[]},"aqV":{"Zx":[]},"aqX":{"a_b":[]},"H3":{"H2":[]},"a_C":{"H2":[]},"aqY":{"a3m":[]},"axf":{"wp":[]},"axg":{"wp":[]},"axi":{"wp":[]},"axj":{"wp":[]},"axm":{"wp":[]},"axn":{"wp":[]},"a3G":{"QP":[]},"axl":{"QP":[]},"ar_":{"a7T":[]},"BI":{"w":["cQ"],"w.E":"cQ"},"lT":{"w":["cQ"]},"OS":{"lT":[],"w":["cQ"],"w.E":"cQ"},"OT":{"lT":[],"w":["cQ"],"w.E":"cQ"},"a_I":{"lT":[],"w":["cQ"],"w.E":"cQ"},"a_J":{"lT":[],"w":["cQ"],"w.E":"cQ"},"a_K":{"lT":[],"w":["cQ"],"w.E":"cQ"},"a_L":{"lT":[],"w":["cQ"],"w.E":"cQ"},"OU":{"lT":[],"w":["cQ"],"w.E":"cQ"},"OV":{"lT":[],"w":["cQ"],"w.E":"cQ"},"OW":{"lT":[],"w":["cQ"],"w.E":"cQ"},"OX":{"lT":[],"w":["cQ"],"w.E":"cQ"},"OY":{"lT":[],"w":["cQ"],"w.E":"cQ"},"OZ":{"lT":[],"w":["cQ"],"w.E":"cQ"},"If":{"cQ":[],"dz":[],"w":["aX"],"bq":["cQ"],"w.E":"aX"},"Ig":{"cQ":[],"dz":[],"w":["aX"],"bq":["cQ"],"w.E":"aX"},"Ih":{"cQ":[],"dz":[],"w":["aX"],"bq":["cQ"],"w.E":"aX"},"Ii":{"cQ":[],"dz":[],"w":["aX"],"bq":["cQ"],"w.E":"aX"},"Ij":{"cQ":[],"dz":[],"w":["aX"],"bq":["cQ"],"w.E":"aX"},"Ik":{"cQ":[],"dz":[],"w":["aX"],"bq":["cQ"],"w.E":"aX"},"avN":{"bq":["cQ"]},"Il":{"cQ":[],"dz":[],"w":["aX"],"bq":["cQ"],"w.E":"aX"},"Im":{"cQ":[],"dz":[],"w":["aX"],"bq":["cQ"],"w.E":"aX"},"In":{"cQ":[],"dz":[],"w":["aX"],"bq":["cQ"],"w.E":"aX"},"Io":{"cQ":[],"dz":[],"w":["aX"],"bq":["cQ"],"w.E":"aX"},"Ip":{"cQ":[],"dz":[],"w":["aX"],"bq":["cQ"],"w.E":"aX"},"Iq":{"cQ":[],"dz":[],"w":["aX"],"bq":["cQ"],"w.E":"aX"},"fe":{"cQ":[],"dz":[],"w":["aX"],"bq":["cQ"],"w.E":"aX"},"aqA":{"bk":[]},"cQ":{"dz":[],"bq":["cQ"],"w":["aX"]}}'))
B.la(b.typeUniverse,JSON.parse('{"axq":1}'))
var y=(function rtii(){var x=B.z
return{G:x("dz"),n:x("ao1"),W:x("ao3"),z:x("aoh"),R:x("a_h"),x:x("aqi"),Y:x("aqk"),P:x("pW"),r:x("jZ"),I:x("lT"),h:x("a0f"),E:x("q<ajW>"),Q:x("q<ao2>"),m:x("q<Zx>"),b:x("q<a_b>"),A:x("q<a_h>"),g:x("q<BI>"),M:x("q<A<A<A<t>>>>"),o:x("q<A<A<t>>>"),S:x("q<A<t>>"),d:x("q<a3m>"),X:x("q<QO>"),u:x("q<wp>"),l:x("q<axk>"),j:x("q<nS>"),T:x("q<e>"),_:x("q<aBN>"),a:x("q<dQ>"),q:x("q<Kx>"),F:x("q<aCG>"),J:x("q<a7T>"),v:x("q<aJ1>"),C:x("q<TZ>"),t:x("q<t>"),aH:x("q<H2?>"),cB:x("q<ar9?>"),cQ:x("q<A<t>?>"),w:x("q<qy?>"),e:x("q<dQ?>"),y:x("q<~(lU)>"),c:x("C0"),bp:x("A<a0f>"),f:x("A<A<t>>"),k:x("A<nS>"),cm:x("A<a7C>"),K:x("A<Kx>"),H:x("A<L>"),L:x("A<t>"),c0:x("cQ"),aG:x("QO"),a2:x("axh"),cK:x("a3G"),O:x("QP"),ab:x("a3J"),aM:x("QT"),i:x("nS"),N:x("e"),aL:x("aBM"),bk:x("qy"),D:x("dQ"),V:x("a7C"),bQ:x("aCH"),bl:x("aCI"),bt:x("aCK"),U:x("af<e>"),bc:x("aM3"),cb:x("L"),p:x("t"),a7:x("aqR?"),cl:x("A<t>?"),bT:x("A<H2?>?"),cM:x("E?"),ac:x("dQ?"),ak:x("a7D?"),B:x("Kx?"),Z:x("aCJ?"),s:x("t?")}})();(function constants(){var x=a.makeConstList
C.yf=new A.aiS(0,"direct")
C.yg=new A.aiS(1,"alpha")
C.Fk=new A.lI(0,"none")
C.yh=new A.lI(3,"bitfields")
C.yi=new A.lI(6,"alphaBitfields")
C.ou=new A.aj6(0,"littleEndian")
C.m2=new A.aj6(1,"bigEndian")
C.iV=new A.bLv()
C.acE=new A.cht()
C.G3=new A.chu()
C.G8=new A.b_O(4,"luminance")
C.z9=new A.ak2(4294967295)
C.akj=new A.Gx(0,"red")
C.akk=new A.Gx(1,"green")
C.akl=new A.Gx(2,"blue")
C.akm=new A.Gx(3,"alpha")
C.akn=new A.Gx(4,"other")
C.It=new A.Od(0,"uint")
C.zQ=new A.Od(1,"half")
C.zR=new A.Od(2,"float")
C.Iu=new A.tP(0,"none")
C.akJ=new A.bbl(2,"both")
C.fi=new A.nB(0,"uint1")
C.h2=new A.nB(1,"uint2")
C.j7=new A.nB(10,"float32")
C.kD=new A.nB(11,"float64")
C.h3=new A.nB(2,"uint4")
C.a7=new A.nB(3,"uint8")
C.cd=new A.nB(4,"uint16")
C.j8=new A.nB(5,"uint32")
C.kE=new A.nB(6,"int8")
C.kF=new A.nB(7,"int16")
C.kG=new A.nB(8,"int32")
C.hJ=new A.nB(9,"float16")
C.akV=new A.apo(1,"page")
C.bk=new A.apo(2,"sequence")
C.A1=new A.bgm(1,"deflate")
C.IV=new A.OK(2,"cur")
C.Y=new A.mJ(0,"none")
C.Jw=new A.mJ(1,"byte")
C.Jx=new A.mJ(10,"sRational")
C.Jy=new A.mJ(11,"single")
C.Jz=new A.mJ(12,"double")
C.bB=new A.mJ(2,"ascii")
C.bi=new A.mJ(3,"short")
C.cM=new A.mJ(4,"long")
C.e5=new A.mJ(5,"rational")
C.JA=new A.mJ(6,"sByte")
C.hM=new A.mJ(7,"undefined")
C.JB=new A.mJ(8,"sShort")
C.JC=new A.mJ(9,"sLong")
C.ao0=new A.ar1(0,"nearest")
C.bdi=new A.ar1(1,"linear")
C.JU=new A.bi6(0,"yuv444")
C.Aw=B.a(x([0,2,8]),y.t)
C.aoU=B.a(x([0,4,2,1]),y.t)
C.al4=new A.OK(0,"invalid")
C.al5=new A.OK(1,"ico")
C.aoZ=B.a(x([C.al4,C.al5,C.IV]),B.z("q<OK>"))
C.Kh=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),y.t)
C.apD=B.a(x([252,243,207,63]),y.t)
C.aUd=new A.QA(0,"none")
C.a1U=new A.QA(1,"background")
C.a1V=new A.QA(2,"previous")
C.apF=B.a(x([C.aUd,C.a1U,C.a1V]),B.z("q<QA>"))
C.Kk=B.a(x([292,260,226,226]),y.t)
C.Km=B.a(x([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125]),y.t)
C.apK=B.a(x([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0]),y.t)
C.apR=B.a(x([2,3,7]),y.t)
C.Kq=B.a(x([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68]),y.t)
C.apY=B.a(x([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),y.t)
C.aqb=B.a(x([3,3,11]),y.t)
C.Bh=B.a(x([128,128,128,128,128,128,128,128,128,128,128]),y.t)
C.L9=B.a(x([C.Bh,C.Bh,C.Bh]),y.S)
C.ass=B.a(x([253,136,254,255,228,219,128,128,128,128,128]),y.t)
C.auN=B.a(x([189,129,242,255,227,213,255,219,128,128,128]),y.t)
C.auU=B.a(x([106,126,227,252,214,209,255,255,128,128,128]),y.t)
C.ayq=B.a(x([C.ass,C.auN,C.auU]),y.S)
C.ayK=B.a(x([1,98,248,255,236,226,255,255,128,128,128]),y.t)
C.aqy=B.a(x([181,133,238,254,221,234,255,154,128,128,128]),y.t)
C.aqh=B.a(x([78,134,202,247,198,180,255,219,128,128,128]),y.t)
C.aA0=B.a(x([C.ayK,C.aqy,C.aqh]),y.S)
C.asi=B.a(x([1,185,249,255,243,255,128,128,128,128,128]),y.t)
C.ayz=B.a(x([184,150,247,255,236,224,128,128,128,128,128]),y.t)
C.aBP=B.a(x([77,110,216,255,236,230,128,128,128,128,128]),y.t)
C.axq=B.a(x([C.asi,C.ayz,C.aBP]),y.S)
C.axF=B.a(x([1,101,251,255,241,255,128,128,128,128,128]),y.t)
C.asq=B.a(x([170,139,241,252,236,209,255,255,128,128,128]),y.t)
C.axT=B.a(x([37,116,196,243,228,255,255,255,128,128,128]),y.t)
C.arB=B.a(x([C.axF,C.asq,C.axT]),y.S)
C.avp=B.a(x([1,204,254,255,245,255,128,128,128,128,128]),y.t)
C.aCE=B.a(x([207,160,250,255,238,128,128,128,128,128,128]),y.t)
C.aCD=B.a(x([102,103,231,255,211,171,128,128,128,128,128]),y.t)
C.atk=B.a(x([C.avp,C.aCE,C.aCD]),y.S)
C.arg=B.a(x([1,152,252,255,240,255,128,128,128,128,128]),y.t)
C.aCO=B.a(x([177,135,243,255,234,225,128,128,128,128,128]),y.t)
C.ax7=B.a(x([80,129,211,255,194,224,128,128,128,128,128]),y.t)
C.ayp=B.a(x([C.arg,C.aCO,C.ax7]),y.S)
C.LQ=B.a(x([1,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aze=B.a(x([246,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aww=B.a(x([255,128,128,128,128,128,128,128,128,128,128]),y.t)
C.aD4=B.a(x([C.LQ,C.aze,C.aww]),y.S)
C.ata=B.a(x([C.L9,C.ayq,C.aA0,C.axq,C.arB,C.atk,C.ayp,C.aD4]),y.o)
C.aBX=B.a(x([198,35,237,223,193,187,162,160,145,155,62]),y.t)
C.asr=B.a(x([131,45,198,221,172,176,220,157,252,221,1]),y.t)
C.aBW=B.a(x([68,47,146,208,149,167,221,162,255,223,128]),y.t)
C.avU=B.a(x([C.aBX,C.asr,C.aBW]),y.S)
C.aA4=B.a(x([1,149,241,255,221,224,255,255,128,128,128]),y.t)
C.aAF=B.a(x([184,141,234,253,222,220,255,199,128,128,128]),y.t)
C.awl=B.a(x([81,99,181,242,176,190,249,202,255,255,128]),y.t)
C.aBq=B.a(x([C.aA4,C.aAF,C.awl]),y.S)
C.aB5=B.a(x([1,129,232,253,214,197,242,196,255,255,128]),y.t)
C.aCt=B.a(x([99,121,210,250,201,198,255,202,128,128,128]),y.t)
C.ayu=B.a(x([23,91,163,242,170,187,247,210,255,255,128]),y.t)
C.awB=B.a(x([C.aB5,C.aCt,C.ayu]),y.S)
C.atT=B.a(x([1,200,246,255,234,255,128,128,128,128,128]),y.t)
C.aB2=B.a(x([109,178,241,255,231,245,255,255,128,128,128]),y.t)
C.apJ=B.a(x([44,130,201,253,205,192,255,255,128,128,128]),y.t)
C.aBA=B.a(x([C.atT,C.aB2,C.apJ]),y.S)
C.ar_=B.a(x([1,132,239,251,219,209,255,165,128,128,128]),y.t)
C.ap0=B.a(x([94,136,225,251,218,190,255,255,128,128,128]),y.t)
C.aB8=B.a(x([22,100,174,245,186,161,255,199,128,128,128]),y.t)
C.axC=B.a(x([C.ar_,C.ap0,C.aB8]),y.S)
C.aAE=B.a(x([1,182,249,255,232,235,128,128,128,128,128]),y.t)
C.ayd=B.a(x([124,143,241,255,227,234,128,128,128,128,128]),y.t)
C.auG=B.a(x([35,77,181,251,193,211,255,205,128,128,128]),y.t)
C.av0=B.a(x([C.aAE,C.ayd,C.auG]),y.S)
C.aD5=B.a(x([1,157,247,255,236,231,255,255,128,128,128]),y.t)
C.at7=B.a(x([121,141,235,255,225,227,255,255,128,128,128]),y.t)
C.aB3=B.a(x([45,99,188,251,195,217,255,224,128,128,128]),y.t)
C.aru=B.a(x([C.aD5,C.at7,C.aB3]),y.S)
C.ap1=B.a(x([1,1,251,255,213,255,128,128,128,128,128]),y.t)
C.aq_=B.a(x([203,1,248,255,255,128,128,128,128,128,128]),y.t)
C.aAI=B.a(x([137,1,177,255,224,255,128,128,128,128,128]),y.t)
C.ari=B.a(x([C.ap1,C.aq_,C.aAI]),y.S)
C.aAq=B.a(x([C.avU,C.aBq,C.awB,C.aBA,C.axC,C.av0,C.aru,C.ari]),y.o)
C.ats=B.a(x([253,9,248,251,207,208,255,192,128,128,128]),y.t)
C.azf=B.a(x([175,13,224,243,193,185,249,198,255,255,128]),y.t)
C.aD3=B.a(x([73,17,171,221,161,179,236,167,255,234,128]),y.t)
C.az_=B.a(x([C.ats,C.azf,C.aD3]),y.S)
C.aAe=B.a(x([1,95,247,253,212,183,255,255,128,128,128]),y.t)
C.awQ=B.a(x([239,90,244,250,211,209,255,255,128,128,128]),y.t)
C.aBO=B.a(x([155,77,195,248,188,195,255,255,128,128,128]),y.t)
C.aAD=B.a(x([C.aAe,C.awQ,C.aBO]),y.S)
C.avt=B.a(x([1,24,239,251,218,219,255,205,128,128,128]),y.t)
C.azN=B.a(x([201,51,219,255,196,186,128,128,128,128,128]),y.t)
C.awP=B.a(x([69,46,190,239,201,218,255,228,128,128,128]),y.t)
C.aAa=B.a(x([C.avt,C.azN,C.awP]),y.S)
C.auQ=B.a(x([1,191,251,255,255,128,128,128,128,128,128]),y.t)
C.axS=B.a(x([223,165,249,255,213,255,128,128,128,128,128]),y.t)
C.ayG=B.a(x([141,124,248,255,255,128,128,128,128,128,128]),y.t)
C.aB4=B.a(x([C.auQ,C.axS,C.ayG]),y.S)
C.avZ=B.a(x([1,16,248,255,255,128,128,128,128,128,128]),y.t)
C.at3=B.a(x([190,36,230,255,236,255,128,128,128,128,128]),y.t)
C.asu=B.a(x([149,1,255,128,128,128,128,128,128,128,128]),y.t)
C.ar0=B.a(x([C.avZ,C.at3,C.asu]),y.S)
C.ayx=B.a(x([1,226,255,128,128,128,128,128,128,128,128]),y.t)
C.az5=B.a(x([247,192,255,128,128,128,128,128,128,128,128]),y.t)
C.aBM=B.a(x([240,128,255,128,128,128,128,128,128,128,128]),y.t)
C.aq4=B.a(x([C.ayx,C.az5,C.aBM]),y.S)
C.aBz=B.a(x([1,134,252,255,255,128,128,128,128,128,128]),y.t)
C.ayb=B.a(x([213,62,250,255,255,128,128,128,128,128,128]),y.t)
C.aCK=B.a(x([55,93,255,128,128,128,128,128,128,128,128]),y.t)
C.ayw=B.a(x([C.aBz,C.ayb,C.aCK]),y.S)
C.asb=B.a(x([C.az_,C.aAD,C.aAa,C.aB4,C.ar0,C.aq4,C.ayw,C.L9]),y.o)
C.aye=B.a(x([202,24,213,235,186,191,220,160,240,175,255]),y.t)
C.asp=B.a(x([126,38,182,232,169,184,228,174,255,187,128]),y.t)
C.ar2=B.a(x([61,46,138,219,151,178,240,170,255,216,128]),y.t)
C.aAw=B.a(x([C.aye,C.asp,C.ar2]),y.S)
C.ax6=B.a(x([1,112,230,250,199,191,247,159,255,255,128]),y.t)
C.art=B.a(x([166,109,228,252,211,215,255,174,128,128,128]),y.t)
C.axK=B.a(x([39,77,162,232,172,180,245,178,255,255,128]),y.t)
C.aAs=B.a(x([C.ax6,C.art,C.axK]),y.S)
C.axg=B.a(x([1,52,220,246,198,199,249,220,255,255,128]),y.t)
C.ath=B.a(x([124,74,191,243,183,193,250,221,255,255,128]),y.t)
C.auF=B.a(x([24,71,130,219,154,170,243,182,255,255,128]),y.t)
C.aAr=B.a(x([C.axg,C.ath,C.auF]),y.S)
C.auB=B.a(x([1,182,225,249,219,240,255,224,128,128,128]),y.t)
C.aCI=B.a(x([149,150,226,252,216,205,255,171,128,128,128]),y.t)
C.aDi=B.a(x([28,108,170,242,183,194,254,223,255,255,128]),y.t)
C.aC9=B.a(x([C.auB,C.aCI,C.aDi]),y.S)
C.aDl=B.a(x([1,81,230,252,204,203,255,192,128,128,128]),y.t)
C.aAZ=B.a(x([123,102,209,247,188,196,255,233,128,128,128]),y.t)
C.aBH=B.a(x([20,95,153,243,164,173,255,203,128,128,128]),y.t)
C.aB_=B.a(x([C.aDl,C.aAZ,C.aBH]),y.S)
C.awd=B.a(x([1,222,248,255,216,213,128,128,128,128,128]),y.t)
C.ay8=B.a(x([168,175,246,252,235,205,255,255,128,128,128]),y.t)
C.auK=B.a(x([47,116,215,255,211,212,255,255,128,128,128]),y.t)
C.asQ=B.a(x([C.awd,C.ay8,C.auK]),y.S)
C.aw5=B.a(x([1,121,236,253,212,214,255,255,128,128,128]),y.t)
C.axi=B.a(x([141,84,213,252,201,202,255,219,128,128,128]),y.t)
C.ayU=B.a(x([42,80,160,240,162,185,255,205,128,128,128]),y.t)
C.av4=B.a(x([C.aw5,C.axi,C.ayU]),y.S)
C.aCX=B.a(x([244,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aoX=B.a(x([238,1,255,128,128,128,128,128,128,128,128]),y.t)
C.az8=B.a(x([C.LQ,C.aCX,C.aoX]),y.S)
C.apA=B.a(x([C.aAw,C.aAs,C.aAr,C.aC9,C.aB_,C.asQ,C.av4,C.az8]),y.o)
C.ar1=B.a(x([C.ata,C.aAq,C.asb,C.apA]),y.M)
C.ar5=B.a(x([511,1023,2047,4095]),y.t)
C.ary=B.a(x([63,207,243,252]),y.t)
C.as4=B.a(x([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]),y.t)
C.qy=B.a(x([0,1,2,3,4,5,6,7,8,9,10,11]),y.t)
C.asx=B.a(x([8,8,4,2]),y.t)
C.ape=B.a(x([173,148,140]),y.t)
C.apf=B.a(x([176,155,140,135]),y.t)
C.apc=B.a(x([180,157,141,134,130]),y.t)
C.apZ=B.a(x([254,254,243,230,196,177,153,140,133,130,129]),y.t)
C.asz=B.a(x([C.ape,C.apf,C.apc,C.apZ]),y.S)
C.asE=B.a(x([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576]),y.t)
C.Lh=B.a(x([1,1.387039845,1.306562965,1.175875602,1,0.785694958,0.5411961,0.275899379]),B.z("q<L>"))
C.asV=B.a(x([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),y.t)
C.atc=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095]),y.t)
C.Lu=B.a(x([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29]),y.t)
C.LG=B.a(x([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250]),y.t)
C.atG=B.a(x([280,256,256,256,40]),y.t)
C.r4=B.a(x([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63]),y.t)
C.LX=B.a(x([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390]),y.t)
C.AN=B.a(x([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157]),y.t)
C.atX=B.a(x([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112]),y.t)
C.AO=B.a(x([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284]),y.t)
C.M7=B.a(x([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119]),y.t)
C.M9=B.a(x([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28]),y.t)
C.auq=B.a(x([C.It,C.zQ,C.zR]),B.z("q<Od>"))
C.rl=B.a(x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),y.t)
C.ava=B.a(x([254,253,251,247,239,223,191,127]),y.t)
C.rA=B.a(x([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8]),y.t)
C.MQ=B.a(x([A.deI(),A.deA(),A.deP(),A.deN(),A.deK(),A.deJ(),A.deL()]),y.y)
C.MS=B.a(x([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5]),y.t)
C.N2=B.a(x([C.Y,C.Jw,C.bB,C.bi,C.cM,C.e5,C.JA,C.hM,C.JB,C.JC,C.Jx,C.Jy,C.Jz]),B.z("q<mJ>"))
C.DV=new A.ky(0,"whiteIsZero")
C.b5w=new A.ky(1,"blackIsZero")
C.b5D=new A.ky(2,"rgb")
C.DX=new A.ky(3,"palette")
C.b5E=new A.ky(4,"transparencyMask")
C.a4V=new A.ky(5,"cmyk")
C.b5F=new A.ky(6,"yCbCr")
C.b5G=new A.ky(7,"reserved7")
C.b5H=new A.ky(8,"cieLab")
C.b5I=new A.ky(9,"iccLab")
C.b5x=new A.ky(10,"ituLab")
C.b5y=new A.ky(11,"logL")
C.b5z=new A.ky(12,"logLuv")
C.b5A=new A.ky(13,"colorFilterArray")
C.b5B=new A.ky(14,"linearRaw")
C.b5C=new A.ky(15,"depth")
C.DW=new A.ky(16,"unknown")
C.avy=B.a(x([C.DV,C.b5w,C.b5D,C.DX,C.b5E,C.a4V,C.b5F,C.b5G,C.b5H,C.b5I,C.b5x,C.b5y,C.b5z,C.b5A,C.b5B,C.b5C,C.DW]),B.z("q<ky>"))
C.Ni=B.a(x([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0]),y.t)
C.a1S=new A.a3l(0,"source")
C.a1T=new A.a3l(1,"over")
C.aw1=B.a(x([C.a1S,C.a1T]),B.z("q<a3l>"))
C.b5o=new A.Kl(0,"invalid")
C.a4T=new A.Kl(1,"uint")
C.b0=new A.Kl(2,"int")
C.o1=new A.Kl(3,"float")
C.aw4=B.a(x([C.b5o,C.a4T,C.b0,C.o1]),B.z("q<Kl>"))
C.awb=B.a(x([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15]),y.t)
C.NS=B.a(x([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9]),y.t)
C.awN=B.a(x([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15]),y.t)
C.ako=new A.tP(1,"rle")
C.akp=new A.tP(2,"zips")
C.akq=new A.tP(3,"zip")
C.akr=new A.tP(4,"piz")
C.aks=new A.tP(5,"pxr24")
C.akt=new A.tP(6,"b44")
C.aku=new A.tP(7,"b44a")
C.awR=B.a(x([C.Iu,C.ako,C.akp,C.akq,C.akr,C.aks,C.akt,C.aku]),B.z("q<tP>"))
C.ayP=B.a(x([231,120,48,89,115,113,120,152,112]),y.t)
C.apB=B.a(x([152,179,64,126,170,118,46,70,95]),y.t)
C.awM=B.a(x([175,69,143,80,85,82,72,155,103]),y.t)
C.aqJ=B.a(x([56,58,10,171,218,189,17,13,152]),y.t)
C.axH=B.a(x([114,26,17,163,44,195,21,10,173]),y.t)
C.ay6=B.a(x([121,24,80,195,26,62,44,64,85]),y.t)
C.axB=B.a(x([144,71,10,38,171,213,144,34,26]),y.t)
C.aBb=B.a(x([170,46,55,19,136,160,33,206,71]),y.t)
C.au0=B.a(x([63,20,8,114,114,208,12,9,226]),y.t)
C.avq=B.a(x([81,40,11,96,182,84,29,16,36]),y.t)
C.ap2=B.a(x([C.ayP,C.apB,C.awM,C.aqJ,C.axH,C.ay6,C.axB,C.aBb,C.au0,C.avq]),y.S)
C.at2=B.a(x([134,183,89,137,98,101,106,165,148]),y.t)
C.aAP=B.a(x([72,187,100,130,157,111,32,75,80]),y.t)
C.ayl=B.a(x([66,102,167,99,74,62,40,234,128]),y.t)
C.aq3=B.a(x([41,53,9,178,241,141,26,8,107]),y.t)
C.avb=B.a(x([74,43,26,146,73,166,49,23,157]),y.t)
C.aul=B.a(x([65,38,105,160,51,52,31,115,128]),y.t)
C.aut=B.a(x([104,79,12,27,217,255,87,17,7]),y.t)
C.awK=B.a(x([87,68,71,44,114,51,15,186,23]),y.t)
C.aAu=B.a(x([47,41,14,110,182,183,21,17,194]),y.t)
C.azd=B.a(x([66,45,25,102,197,189,23,18,22]),y.t)
C.aBI=B.a(x([C.at2,C.aAP,C.ayl,C.aq3,C.avb,C.aul,C.aut,C.awK,C.aAu,C.azd]),y.S)
C.ayO=B.a(x([88,88,147,150,42,46,45,196,205]),y.t)
C.axM=B.a(x([43,97,183,117,85,38,35,179,61]),y.t)
C.auJ=B.a(x([39,53,200,87,26,21,43,232,171]),y.t)
C.aws=B.a(x([56,34,51,104,114,102,29,93,77]),y.t)
C.axu=B.a(x([39,28,85,171,58,165,90,98,64]),y.t)
C.aue=B.a(x([34,22,116,206,23,34,43,166,73]),y.t)
C.ap3=B.a(x([107,54,32,26,51,1,81,43,31]),y.t)
C.aBi=B.a(x([68,25,106,22,64,171,36,225,114]),y.t)
C.at1=B.a(x([34,19,21,102,132,188,16,76,124]),y.t)
C.aC3=B.a(x([62,18,78,95,85,57,50,48,51]),y.t)
C.ato=B.a(x([C.ayO,C.axM,C.auJ,C.aws,C.axu,C.aue,C.ap3,C.aBi,C.at1,C.aC3]),y.S)
C.axm=B.a(x([193,101,35,159,215,111,89,46,111]),y.t)
C.as9=B.a(x([60,148,31,172,219,228,21,18,111]),y.t)
C.aqY=B.a(x([112,113,77,85,179,255,38,120,114]),y.t)
C.aC_=B.a(x([40,42,1,196,245,209,10,25,109]),y.t)
C.aw2=B.a(x([88,43,29,140,166,213,37,43,154]),y.t)
C.aug=B.a(x([61,63,30,155,67,45,68,1,209]),y.t)
C.auT=B.a(x([100,80,8,43,154,1,51,26,71]),y.t)
C.aq8=B.a(x([142,78,78,16,255,128,34,197,171]),y.t)
C.ax1=B.a(x([41,40,5,102,211,183,4,1,221]),y.t)
C.atC=B.a(x([51,50,17,168,209,192,23,25,82]),y.t)
C.atl=B.a(x([C.axm,C.as9,C.aqY,C.aC_,C.aw2,C.aug,C.auT,C.aq8,C.ax1,C.atC]),y.S)
C.auC=B.a(x([138,31,36,171,27,166,38,44,229]),y.t)
C.ati=B.a(x([67,87,58,169,82,115,26,59,179]),y.t)
C.aA_=B.a(x([63,59,90,180,59,166,93,73,154]),y.t)
C.aBF=B.a(x([40,40,21,116,143,209,34,39,175]),y.t)
C.aqf=B.a(x([47,15,16,183,34,223,49,45,183]),y.t)
C.aso=B.a(x([46,17,33,183,6,98,15,32,183]),y.t)
C.aDm=B.a(x([57,46,22,24,128,1,54,17,37]),y.t)
C.auX=B.a(x([65,32,73,115,28,128,23,128,205]),y.t)
C.ayk=B.a(x([40,3,9,115,51,192,18,6,223]),y.t)
C.av8=B.a(x([87,37,9,115,59,77,64,21,47]),y.t)
C.ax0=B.a(x([C.auC,C.ati,C.aA_,C.aBF,C.aqf,C.aso,C.aDm,C.auX,C.ayk,C.av8]),y.S)
C.aCV=B.a(x([104,55,44,218,9,54,53,130,226]),y.t)
C.arr=B.a(x([64,90,70,205,40,41,23,26,57]),y.t)
C.azZ=B.a(x([54,57,112,184,5,41,38,166,213]),y.t)
C.auf=B.a(x([30,34,26,133,152,116,10,32,134]),y.t)
C.az0=B.a(x([39,19,53,221,26,114,32,73,255]),y.t)
C.atA=B.a(x([31,9,65,234,2,15,1,118,73]),y.t)
C.awZ=B.a(x([75,32,12,51,192,255,160,43,51]),y.t)
C.auj=B.a(x([88,31,35,67,102,85,55,186,85]),y.t)
C.avD=B.a(x([56,21,23,111,59,205,45,37,192]),y.t)
C.avO=B.a(x([55,38,70,124,73,102,1,34,98]),y.t)
C.aD1=B.a(x([C.aCV,C.arr,C.azZ,C.auf,C.az0,C.atA,C.awZ,C.auj,C.avD,C.avO]),y.S)
C.avB=B.a(x([125,98,42,88,104,85,117,175,82]),y.t)
C.aup=B.a(x([95,84,53,89,128,100,113,101,45]),y.t)
C.axV=B.a(x([75,79,123,47,51,128,81,171,1]),y.t)
C.ark=B.a(x([57,17,5,71,102,57,53,41,49]),y.t)
C.azK=B.a(x([38,33,13,121,57,73,26,1,85]),y.t)
C.aCG=B.a(x([41,10,67,138,77,110,90,47,114]),y.t)
C.awT=B.a(x([115,21,2,10,102,255,166,23,6]),y.t)
C.at4=B.a(x([101,29,16,10,85,128,101,196,26]),y.t)
C.auP=B.a(x([57,18,10,102,102,213,34,20,43]),y.t)
C.aw0=B.a(x([117,20,15,36,163,128,68,1,26]),y.t)
C.awH=B.a(x([C.avB,C.aup,C.axV,C.ark,C.azK,C.aCG,C.awT,C.at4,C.auP,C.aw0]),y.S)
C.av6=B.a(x([102,61,71,37,34,53,31,243,192]),y.t)
C.aCz=B.a(x([69,60,71,38,73,119,28,222,37]),y.t)
C.av9=B.a(x([68,45,128,34,1,47,11,245,171]),y.t)
C.apb=B.a(x([62,17,19,70,146,85,55,62,70]),y.t)
C.aDf=B.a(x([37,43,37,154,100,163,85,160,1]),y.t)
C.aCe=B.a(x([63,9,92,136,28,64,32,201,85]),y.t)
C.aAU=B.a(x([75,15,9,9,64,255,184,119,16]),y.t)
C.ate=B.a(x([86,6,28,5,64,255,25,248,1]),y.t)
C.az9=B.a(x([56,8,17,132,137,255,55,116,128]),y.t)
C.ar7=B.a(x([58,15,20,82,135,57,26,121,40]),y.t)
C.axz=B.a(x([C.av6,C.aCz,C.av9,C.apb,C.aDf,C.aCe,C.aAU,C.ate,C.az9,C.ar7]),y.S)
C.ay_=B.a(x([164,50,31,137,154,133,25,35,218]),y.t)
C.atd=B.a(x([51,103,44,131,131,123,31,6,158]),y.t)
C.aC6=B.a(x([86,40,64,135,148,224,45,183,128]),y.t)
C.awL=B.a(x([22,26,17,131,240,154,14,1,209]),y.t)
C.asf=B.a(x([45,16,21,91,64,222,7,1,197]),y.t)
C.aBG=B.a(x([56,21,39,155,60,138,23,102,213]),y.t)
C.aD_=B.a(x([83,12,13,54,192,255,68,47,28]),y.t)
C.aym=B.a(x([85,26,85,85,128,128,32,146,171]),y.t)
C.awx=B.a(x([18,11,7,63,144,171,4,4,246]),y.t)
C.atp=B.a(x([35,27,10,146,174,171,12,26,128]),y.t)
C.awf=B.a(x([C.ay_,C.atd,C.aC6,C.awL,C.asf,C.aBG,C.aD_,C.aym,C.awx,C.atp]),y.S)
C.aAp=B.a(x([190,80,35,99,180,80,126,54,45]),y.t)
C.aBa=B.a(x([85,126,47,87,176,51,41,20,32]),y.t)
C.azS=B.a(x([101,75,128,139,118,146,116,128,85]),y.t)
C.aAK=B.a(x([56,41,15,176,236,85,37,9,62]),y.t)
C.arf=B.a(x([71,30,17,119,118,255,17,18,138]),y.t)
C.axy=B.a(x([101,38,60,138,55,70,43,26,142]),y.t)
C.awn=B.a(x([146,36,19,30,171,255,97,27,20]),y.t)
C.ayM=B.a(x([138,45,61,62,219,1,81,188,64]),y.t)
C.aC0=B.a(x([32,41,20,117,151,142,20,21,163]),y.t)
C.aBc=B.a(x([112,19,12,61,195,128,48,4,24]),y.t)
C.aA9=B.a(x([C.aAp,C.aBa,C.azS,C.aAK,C.arf,C.axy,C.awn,C.ayM,C.aC0,C.aBc]),y.S)
C.ax_=B.a(x([C.ap2,C.aBI,C.ato,C.atl,C.ax0,C.aD1,C.awH,C.axz,C.awf,C.aA9]),y.o)
C.wR=new A.o7(0,"none")
C.iG=new A.o7(1,"palette")
C.a4S=new A.o7(2,"rgb")
C.b5f=new A.o7(3,"gray")
C.b5g=new A.o7(4,"reserved4")
C.b5h=new A.o7(5,"reserved5")
C.b5i=new A.o7(6,"reserved6")
C.b5j=new A.o7(7,"reserved7")
C.b5k=new A.o7(8,"reserved8")
C.iH=new A.o7(9,"paletteRle")
C.a4R=new A.o7(10,"rgbRle")
C.b5e=new A.o7(11,"grayRle")
C.ax9=B.a(x([C.wR,C.iG,C.a4S,C.b5f,C.b5g,C.b5h,C.b5i,C.b5j,C.b5k,C.iH,C.a4R,C.b5e]),B.z("q<o7>"))
C.OB=B.a(x([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250]),y.t)
C.axU=B.a(x([A.des(),A.dez(),A.deB(),A.deu(),A.dex(),A.deD(),A.dew(),A.deC(),A.det(),A.dev()]),y.y)
C.AF=B.a(x([8,0,8,0]),y.t)
C.arp=B.a(x([5,3,5,3]),y.t)
C.aqc=B.a(x([3,5,3,5]),y.t)
C.K7=B.a(x([0,8,0,8]),y.t)
C.KE=B.a(x([4,4,4,4]),y.t)
C.aqW=B.a(x([4,4,0,0]),y.t)
C.OS=B.a(x([C.AF,C.arp,C.aqc,C.K7,C.AF,C.KE,C.aqW,C.K7]),y.S)
C.P_=B.a(x([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41]),y.t)
C.ayE=B.a(x([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99]),y.t)
C.tX=B.a(x([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845]),y.t)
C.P4=B.a(x([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127]),y.t)
C.P6=B.a(x([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]),y.t)
C.u4=B.a(x([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567]),y.t)
C.Pj=B.a(x([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232]),y.t)
C.Q1=B.a(x([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0]),y.t)
C.aUe=new A.D2(0,"none")
C.aUf=new A.D2(1,"sub")
C.aUg=new A.D2(2,"up")
C.aUh=new A.D2(3,"average")
C.aUi=new A.D2(4,"paeth")
C.Q2=B.a(x([C.aUe,C.aUf,C.aUg,C.aUh,C.aUi]),B.z("q<D2>"))
C.h7=B.a(x([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]),y.t)
C.n8=B.a(x([0,1,3,7,15,31,63,127,255]),y.t)
C.Bi=B.a(x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),y.t)
C.ex=B.a(x([255,255,255,255,255,255,255,255,255,255,255]),y.t)
C.la=B.a(x([C.ex,C.ex,C.ex]),y.S)
C.awr=B.a(x([176,246,255,255,255,255,255,255,255,255,255]),y.t)
C.aCN=B.a(x([223,241,252,255,255,255,255,255,255,255,255]),y.t)
C.asK=B.a(x([249,253,253,255,255,255,255,255,255,255,255]),y.t)
C.awX=B.a(x([C.awr,C.aCN,C.asK]),y.S)
C.avv=B.a(x([255,244,252,255,255,255,255,255,255,255,255]),y.t)
C.av2=B.a(x([234,254,254,255,255,255,255,255,255,255,255]),y.t)
C.Rk=B.a(x([253,255,255,255,255,255,255,255,255,255,255]),y.t)
C.atb=B.a(x([C.avv,C.av2,C.Rk]),y.S)
C.aC5=B.a(x([255,246,254,255,255,255,255,255,255,255,255]),y.t)
C.az4=B.a(x([239,253,254,255,255,255,255,255,255,255,255]),y.t)
C.QI=B.a(x([254,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aAR=B.a(x([C.aC5,C.az4,C.QI]),y.S)
C.MW=B.a(x([255,248,254,255,255,255,255,255,255,255,255]),y.t)
C.atN=B.a(x([251,255,254,255,255,255,255,255,255,255,255]),y.t)
C.ay5=B.a(x([C.MW,C.atN,C.ex]),y.S)
C.Az=B.a(x([255,253,254,255,255,255,255,255,255,255,255]),y.t)
C.axX=B.a(x([251,254,254,255,255,255,255,255,255,255,255]),y.t)
C.au7=B.a(x([C.Az,C.axX,C.QI]),y.S)
C.aqF=B.a(x([255,254,253,255,254,255,255,255,255,255,255]),y.t)
C.avm=B.a(x([250,255,254,255,254,255,255,255,255,255,255]),y.t)
C.ug=B.a(x([254,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aw3=B.a(x([C.aqF,C.avm,C.ug]),y.S)
C.auO=B.a(x([C.la,C.awX,C.atb,C.aAR,C.ay5,C.au7,C.aw3,C.la]),y.o)
C.apz=B.a(x([217,255,255,255,255,255,255,255,255,255,255]),y.t)
C.awj=B.a(x([225,252,241,253,255,255,254,255,255,255,255]),y.t)
C.azV=B.a(x([234,250,241,250,253,255,253,254,255,255,255]),y.t)
C.aBd=B.a(x([C.apz,C.awj,C.azV]),y.S)
C.Br=B.a(x([255,254,255,255,255,255,255,255,255,255,255]),y.t)
C.asR=B.a(x([223,254,254,255,255,255,255,255,255,255,255]),y.t)
C.ash=B.a(x([238,253,254,254,255,255,255,255,255,255,255]),y.t)
C.ayZ=B.a(x([C.Br,C.asR,C.ash]),y.S)
C.av7=B.a(x([249,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aC2=B.a(x([C.MW,C.av7,C.ex]),y.S)
C.aBk=B.a(x([255,253,255,255,255,255,255,255,255,255,255]),y.t)
C.axW=B.a(x([247,254,255,255,255,255,255,255,255,255,255]),y.t)
C.axD=B.a(x([C.aBk,C.axW,C.ex]),y.S)
C.as5=B.a(x([252,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aq5=B.a(x([C.Az,C.as5,C.ex]),y.S)
C.Rv=B.a(x([255,254,254,255,255,255,255,255,255,255,255]),y.t)
C.ase=B.a(x([C.Rv,C.Rk,C.ex]),y.S)
C.ayT=B.a(x([255,254,253,255,255,255,255,255,255,255,255]),y.t)
C.Ng=B.a(x([250,255,255,255,255,255,255,255,255,255,255]),y.t)
C.as1=B.a(x([C.ayT,C.Ng,C.ug]),y.S)
C.aqL=B.a(x([C.aBd,C.ayZ,C.aC2,C.axD,C.aq5,C.ase,C.as1,C.la]),y.o)
C.aAc=B.a(x([186,251,250,255,255,255,255,255,255,255,255]),y.t)
C.atD=B.a(x([234,251,244,254,255,255,255,255,255,255,255]),y.t)
C.aAT=B.a(x([251,251,243,253,254,255,254,255,255,255,255]),y.t)
C.au3=B.a(x([C.aAc,C.atD,C.aAT]),y.S)
C.atR=B.a(x([236,253,254,255,255,255,255,255,255,255,255]),y.t)
C.ayR=B.a(x([251,253,253,254,254,255,255,255,255,255,255]),y.t)
C.avT=B.a(x([C.Az,C.atR,C.ayR]),y.S)
C.aAo=B.a(x([254,254,254,255,255,255,255,255,255,255,255]),y.t)
C.atK=B.a(x([C.Rv,C.aAo,C.ex]),y.S)
C.aB1=B.a(x([254,254,255,255,255,255,255,255,255,255,255]),y.t)
C.atO=B.a(x([C.Br,C.aB1,C.ug]),y.S)
C.Rx=B.a(x([C.ex,C.ug,C.ex]),y.S)
C.aqI=B.a(x([C.au3,C.avT,C.atK,C.atO,C.Rx,C.la,C.la,C.la]),y.o)
C.avh=B.a(x([248,255,255,255,255,255,255,255,255,255,255]),y.t)
C.auo=B.a(x([250,254,252,254,255,255,255,255,255,255,255]),y.t)
C.atB=B.a(x([248,254,249,253,255,255,255,255,255,255,255]),y.t)
C.avY=B.a(x([C.avh,C.auo,C.atB]),y.S)
C.aqi=B.a(x([255,253,253,255,255,255,255,255,255,255,255]),y.t)
C.aBy=B.a(x([246,253,253,255,255,255,255,255,255,255,255]),y.t)
C.au5=B.a(x([252,254,251,254,254,255,255,255,255,255,255]),y.t)
C.aBx=B.a(x([C.aqi,C.aBy,C.au5]),y.S)
C.aD6=B.a(x([255,254,252,255,255,255,255,255,255,255,255]),y.t)
C.atv=B.a(x([248,254,253,255,255,255,255,255,255,255,255]),y.t)
C.as0=B.a(x([253,255,254,254,255,255,255,255,255,255,255]),y.t)
C.ayf=B.a(x([C.aD6,C.atv,C.as0]),y.S)
C.aCY=B.a(x([255,251,254,255,255,255,255,255,255,255,255]),y.t)
C.axo=B.a(x([245,251,254,255,255,255,255,255,255,255,255]),y.t)
C.axx=B.a(x([253,253,254,255,255,255,255,255,255,255,255]),y.t)
C.asD=B.a(x([C.aCY,C.axo,C.axx]),y.S)
C.asI=B.a(x([255,251,253,255,255,255,255,255,255,255,255]),y.t)
C.avA=B.a(x([252,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aAy=B.a(x([C.asI,C.avA,C.Br]),y.S)
C.arD=B.a(x([255,252,255,255,255,255,255,255,255,255,255]),y.t)
C.aCS=B.a(x([249,255,254,255,255,255,255,255,255,255,255]),y.t)
C.auy=B.a(x([255,255,254,255,255,255,255,255,255,255,255]),y.t)
C.apa=B.a(x([C.arD,C.aCS,C.auy]),y.S)
C.aDh=B.a(x([255,255,253,255,255,255,255,255,255,255,255]),y.t)
C.atM=B.a(x([C.aDh,C.Ng,C.ex]),y.S)
C.as_=B.a(x([C.avY,C.aBx,C.ayf,C.asD,C.aAy,C.apa,C.atM,C.Rx]),y.o)
C.aB6=B.a(x([C.auO,C.aqL,C.aqI,C.as_]),y.M)
C.a8y=new A.lI(1,"rle8")
C.a8D=new A.lI(2,"rle4")
C.a8E=new A.lI(4,"jpeg")
C.a8F=new A.lI(5,"png")
C.a8G=new A.lI(7,"reserved7")
C.a8H=new A.lI(8,"reserved8")
C.a8I=new A.lI(9,"reserved9")
C.a8z=new A.lI(10,"reserved10")
C.a8A=new A.lI(11,"cmyk")
C.a8B=new A.lI(12,"cmykRle8")
C.a8C=new A.lI(13,"cmykRle4")
C.QL=B.a(x([C.Fk,C.a8y,C.a8D,C.yh,C.a8E,C.a8F,C.yi,C.a8G,C.a8H,C.a8I,C.a8z,C.a8A,C.a8B,C.a8C]),B.z("q<lI>"))
C.Bj=B.a(x([0,128,192,224,240,248,252,254,255]),y.t)
C.Bk=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295]),y.t)
C.aBu=B.a(x([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),y.t)
C.aBB=B.a(x([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),y.t)
C.a5D=new A.Ky(0,"predictor")
C.b7P=new A.Ky(1,"crossColor")
C.b7Q=new A.Ky(2,"subtractGreen")
C.a5E=new A.Ky(3,"colorIndexing")
C.aBQ=B.a(x([C.a5D,C.b7P,C.b7Q,C.a5E]),B.z("q<Ky>"))
C.ey=B.a(x([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255]),y.t)
C.aCu=B.a(x([A.deE(),A.dey(),A.deO(),A.deM(),A.deG(),A.deF(),A.deH()]),y.y)
C.RI=B.a(x([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396]),y.t)
C.aCC=B.a(x([null,A.df4(),A.df5(),A.df3()]),B.z("q<~(t,t,t,t,t,dQ)?>"))
C.RS=B.a(x([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),y.t)
C.vu=B.a(x([0,36,72,109,145,182,218,255]),y.t)
C.fx=B.a(x([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255]),y.t)
C.aCP=B.a(x([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),y.t)
C.jm=B.a(x([0,1,1,2,4,8,1,1,2,4,8,4,8]),y.t)
C.aUC=new A.up(0,"bitmap")
C.a2c=new A.up(1,"grayscale")
C.aUD=new A.up(2,"indexed")
C.a2d=new A.up(3,"rgb")
C.a2e=new A.up(4,"cmyk")
C.aUE=new A.up(5,"multiChannel")
C.aUF=new A.up(6,"duoTone")
C.a2f=new A.up(7,"lab")
C.aCR=B.a(x([C.aUC,C.a2c,C.aUD,C.a2d,C.a2e,C.aUE,C.aUF,C.a2f]),B.z("q<up>"))
C.aD2=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),y.t)
C.vE=B.a(x([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),y.t)
C.Sq=B.a(x([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0]),y.t)
C.apV=B.a(x([2,6,2,6]),y.t)
C.arP=B.a(x([6,2,6,2]),y.t)
C.apO=B.a(x([2,2,6,6]),y.t)
C.aps=B.a(x([1,3,3,9]),y.t)
C.aqN=B.a(x([4,0,12,0]),y.t)
C.aqa=B.a(x([3,1,9,3]),y.t)
C.asw=B.a(x([8,8,0,0]),y.t)
C.aqP=B.a(x([4,12,0,0]),y.t)
C.apd=B.a(x([16,0,0,0]),y.t)
C.ap8=B.a(x([12,4,0,0]),y.t)
C.arZ=B.a(x([6,6,2,2]),y.t)
C.aqd=B.a(x([3,9,1,3]),y.t)
C.ap7=B.a(x([12,0,4,0]),y.t)
C.asJ=B.a(x([9,3,3,1]),y.t)
C.d5=B.a(x([C.KE,C.apV,C.AF,C.arP,C.apO,C.aps,C.aqN,C.aqa,C.asw,C.aqP,C.apd,C.ap8,C.arZ,C.aqd,C.ap7,C.asJ]),y.S)
C.lb=B.a(x([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1]),y.t)
C.aO4={ProcessingSoftware:0,SubfileType:1,OldSubfileType:2,ImageWidth:3,ImageLength:4,ImageHeight:5,BitsPerSample:6,Compression:7,PhotometricInterpretation:8,Thresholding:9,CellWidth:10,CellLength:11,FillOrder:12,DocumentName:13,ImageDescription:14,Make:15,Model:16,StripOffsets:17,Orientation:18,SamplesPerPixel:19,RowsPerStrip:20,StripByteCounts:21,MinSampleValue:22,MaxSampleValue:23,XResolution:24,YResolution:25,PlanarConfiguration:26,PageName:27,XPosition:28,YPosition:29,GrayResponseUnit:30,GrayResponseCurve:31,T4Options:32,T6Options:33,ResolutionUnit:34,PageNumber:35,ColorResponseUnit:36,TransferFunction:37,Software:38,DateTime:39,Artist:40,HostComputer:41,Predictor:42,WhitePoint:43,PrimaryChromaticities:44,ColorMap:45,HalftoneHints:46,TileWidth:47,TileLength:48,TileOffsets:49,TileByteCounts:50,BadFaxLines:51,CleanFaxData:52,ConsecutiveBadFaxLines:53,InkSet:54,InkNames:55,NumberofInks:56,DotRange:57,TargetPrinter:58,ExtraSamples:59,SampleFormat:60,SMinSampleValue:61,SMaxSampleValue:62,TransferRange:63,ClipPath:64,JPEGProc:65,JPEGInterchangeFormat:66,JPEGInterchangeFormatLength:67,YCbCrCoefficients:68,YCbCrSubSampling:69,YCbCrPositioning:70,ReferenceBlackWhite:71,ApplicationNotes:72,Rating:73,CFARepeatPatternDim:74,CFAPattern:75,BatteryLevel:76,Copyright:77,ExposureTime:78,FNumber:79,"IPTC-NAA":80,ExifOffset:81,InterColorProfile:82,ExposureProgram:83,SpectralSensitivity:84,GPSOffset:85,ISOSpeed:86,OECF:87,SensitivityType:88,RecommendedExposureIndex:89,ExifVersion:90,DateTimeOriginal:91,DateTimeDigitized:92,OffsetTime:93,OffsetTimeOriginal:94,OffsetTimeDigitized:95,ComponentsConfiguration:96,CompressedBitsPerPixel:97,ShutterSpeedValue:98,ApertureValue:99,BrightnessValue:100,ExposureBiasValue:101,MaxApertureValue:102,SubjectDistance:103,MeteringMode:104,LightSource:105,Flash:106,FocalLength:107,SubjectArea:108,MakerNote:109,UserComment:110,SubSecTime:111,SubSecTimeOriginal:112,SubSecTimeDigitized:113,XPTitle:114,XPComment:115,XPAuthor:116,XPKeywords:117,XPSubject:118,FlashPixVersion:119,ColorSpace:120,ExifImageWidth:121,ExifImageLength:122,RelatedSoundFile:123,InteroperabilityOffset:124,FlashEnergy:125,SpatialFrequencyResponse:126,FocalPlaneXResolution:127,FocalPlaneYResolution:128,FocalPlaneResolutionUnit:129,SubjectLocation:130,ExposureIndex:131,SensingMethod:132,FileSource:133,SceneType:134,CVAPattern:135,CustomRendered:136,ExposureMode:137,WhiteBalance:138,DigitalZoomRatio:139,FocalLengthIn35mmFilm:140,SceneCaptureType:141,GainControl:142,Contrast:143,Saturation:144,Sharpness:145,DeviceSettingDescription:146,SubjectDistanceRange:147,ImageUniqueID:148,CameraOwnerName:149,BodySerialNumber:150,LensSpecification:151,LensMake:152,LensModel:153,LensSerialNumber:154,Gamma:155,PrintIM:156,Padding:157,OffsetSchema:158,OwnerName:159,SerialNumber:160,InteropIndex:161,InteropVersion:162,RelatedImageFileFormat:163,RelatedImageWidth:164,RelatedImageLength:165,GPSVersionID:166,GPSLatitudeRef:167,GPSLatitude:168,GPSLongitudeRef:169,GPSLongitude:170,GPSAltitudeRef:171,GPSAltitude:172,GPSTimeStamp:173,GPSSatellites:174,GPSStatus:175,GPSMeasureMode:176,GPSDOP:177,GPSSpeedRef:178,GPSSpeed:179,GPSTrackRef:180,GPSTrack:181,GPSImgDirectionRef:182,GPSImgDirection:183,GPSMapDatum:184,GPSDestLatitudeRef:185,GPSDestLatitude:186,GPSDestLongitudeRef:187,GPSDestLongitude:188,GPSDestBearingRef:189,GPSDestBearing:190,GPSDestDistanceRef:191,GPSDestDistance:192,GPSProcessingMethod:193,GPSAreaInformation:194,GPSDate:195,GPSDifferential:196}
C.Xt=new B.G(C.aO4,[11,254,255,256,257,257,258,259,262,263,264,265,266,269,270,271,272,273,274,277,278,279,280,281,282,283,284,285,286,287,290,291,292,293,296,297,300,301,305,306,315,316,317,318,319,320,321,322,323,324,325,326,327,328,332,333,334,336,337,338,339,340,341,342,343,512,513,514,529,530,531,532,700,18246,33421,33422,33423,33432,33434,33437,33723,34665,34675,34850,34852,34853,34855,34856,34864,34866,36864,36867,36868,36880,36881,36882,37121,37122,37377,37378,37379,37380,37381,37382,37383,37384,37385,37386,37396,37500,37510,37520,37521,37522,40091,40092,40093,40094,40095,40960,40961,40962,40963,40964,40965,41483,41484,41486,41487,41488,41492,41493,41495,41728,41729,41730,41985,41986,41987,41988,41989,41990,41991,41992,41993,41994,41995,41996,42016,42032,42033,42034,42035,42036,42037,42240,50341,59932,59933,65e3,65001,1,2,4096,4097,4098,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],B.z("G<e,t>"))
C.BL=new B.cX([34665,"exif",40965,"interop",34853,"gps"],B.z("cX<t,e>"))
C.XW=new B.cX([C.fi,1,C.h2,3,C.h3,15,C.a7,255,C.cd,65535,C.j8,4294967295,C.kE,127,C.kF,32767,C.kG,2147483647,C.hJ,1,C.j7,1,C.kD,1],B.z("cX<nB,t>"))
C.aUj=new A.awN(0,"none")
C.aUk=new A.awN(4,"paeth")
C.ny=new A.D3(0,"invalid")
C.a1W=new A.D3(1,"pbm")
C.a1X=new A.D3(2,"pgm2")
C.Cj=new A.D3(3,"pgm5")
C.a1Y=new A.D3(4,"ppm3")
C.Ck=new A.D3(5,"ppm6")
C.aWn=new A.bwN(0,"origin")
C.DU=new A.rY(0,"bilevel")
C.b5p=new A.rY(1,"gray4bit")
C.b5q=new A.rY(2,"gray")
C.b5r=new A.rY(3,"grayAlpha")
C.b5s=new A.rY(4,"palette")
C.a4U=new A.rY(5,"rgb")
C.b5t=new A.rY(6,"rgba")
C.b5u=new A.rY(7,"yCbCrSub")
C.o2=new A.rY(8,"generic")
C.b5v=new A.rY(9,"invalid")
C.o9=new A.T_(0,"undefined")
C.Ej=new A.T_(1,"lossy")
C.x2=new A.T_(2,"lossless")
C.b8g=new A.T_(3,"animated")
C.xa=new A.Tr(0,"none")
C.baG=new A.Tr(1,"partial")
C.baH=new A.Tr(2,"full")
C.ob=new A.Tr(3,"finish")})();(function staticFields(){$.vz=B.bM("_config")
$.cuA=!0
$.crt=null
$.cDm=!1
$.cDn=B.a([A.csQ(),A.deQ(),A.deV(),A.deW(),A.deX(),A.deY(),A.deZ(),A.df_(),A.df0(),A.df1(),A.deR(),A.deS(),A.deT(),A.deU(),A.csQ(),A.csQ()],B.z("q<t(qy,t,t)>"))
$.hM=null
$.cxj=B.bM("_eLut")})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazy
x($,"dkY","cL3",()=>A.cr7(C.rA,C.Kh,257,286,15))
x($,"dkX","cL2",()=>A.cr7(C.MS,C.rl,0,30,15))
x($,"dkW","cL1",()=>A.cr7(null,C.apY,0,19,7))
x($,"dg4","LW",()=>$.hB().gmR(0))
x($,"do6","cmf",()=>{var v=null,u="ISOSpeed"
return B.y([11,A.aI("ProcessingSoftware",C.bB,v),254,A.aI("SubfileType",C.cM,1),255,A.aI("OldSubfileType",C.cM,1),256,A.aI("ImageWidth",C.cM,1),257,A.aI("ImageLength",C.cM,1),258,A.aI("BitsPerSample",C.bi,1),259,A.aI("Compression",C.bi,1),262,A.aI("PhotometricInterpretation",C.bi,1),263,A.aI("Thresholding",C.bi,1),264,A.aI("CellWidth",C.bi,1),265,A.aI("CellLength",C.bi,1),266,A.aI("FillOrder",C.bi,1),269,A.aI("DocumentName",C.bB,v),270,A.aI("ImageDescription",C.bB,v),271,A.aI("Make",C.bB,v),272,A.aI("Model",C.bB,v),273,A.aI("StripOffsets",C.cM,v),274,A.aI("Orientation",C.bi,1),277,A.aI("SamplesPerPixel",C.bi,1),278,A.aI("RowsPerStrip",C.cM,1),279,A.aI("StripByteCounts",C.cM,1),280,A.aI("MinSampleValue",C.bi,1),281,A.aI("MaxSampleValue",C.bi,1),282,A.aI("XResolution",C.e5,1),283,A.aI("YResolution",C.e5,1),284,A.aI("PlanarConfiguration",C.bi,1),285,A.aI("PageName",C.bB,v),286,A.aI("XPosition",C.e5,1),287,A.aI("YPosition",C.e5,1),290,A.aI("GrayResponseUnit",C.bi,1),291,A.aI("GrayResponseCurve",C.Y,v),292,A.aI("T4Options",C.Y,v),293,A.aI("T6Options",C.Y,v),296,A.aI("ResolutionUnit",C.bi,1),297,A.aI("PageNumber",C.bi,2),300,A.aI("ColorResponseUnit",C.Y,v),301,A.aI("TransferFunction",C.bi,768),305,A.aI("Software",C.bB,v),306,A.aI("DateTime",C.bB,v),315,A.aI("Artist",C.bB,v),316,A.aI("HostComputer",C.bB,v),317,A.aI("Predictor",C.bi,1),318,A.aI("WhitePoint",C.e5,2),319,A.aI("PrimaryChromaticities",C.e5,6),320,A.aI("ColorMap",C.bi,v),321,A.aI("HalftoneHints",C.bi,2),322,A.aI("TileWidth",C.cM,1),323,A.aI("TileLength",C.cM,1),324,A.aI("TileOffsets",C.cM,v),325,A.aI("TileByteCounts",C.Y,v),326,A.aI("BadFaxLines",C.Y,v),327,A.aI("CleanFaxData",C.Y,v),328,A.aI("ConsecutiveBadFaxLines",C.Y,v),332,A.aI("InkSet",C.Y,v),333,A.aI("InkNames",C.Y,v),334,A.aI("NumberofInks",C.Y,v),336,A.aI("DotRange",C.Y,v),337,A.aI("TargetPrinter",C.bB,v),338,A.aI("ExtraSamples",C.Y,v),339,A.aI("SampleFormat",C.bi,1),340,A.aI("SMinSampleValue",C.Y,v),341,A.aI("SMaxSampleValue",C.Y,v),342,A.aI("TransferRange",C.Y,v),343,A.aI("ClipPath",C.Y,v),512,A.aI("JPEGProc",C.Y,v),513,A.aI("JPEGInterchangeFormat",C.Y,v),514,A.aI("JPEGInterchangeFormatLength",C.Y,v),529,A.aI("YCbCrCoefficients",C.e5,3),530,A.aI("YCbCrSubSampling",C.bi,1),531,A.aI("YCbCrPositioning",C.bi,1),532,A.aI("ReferenceBlackWhite",C.e5,6),700,A.aI("ApplicationNotes",C.bi,1),18246,A.aI("Rating",C.bi,1),33421,A.aI("CFARepeatPatternDim",C.Y,v),33422,A.aI("CFAPattern",C.Y,v),33423,A.aI("BatteryLevel",C.Y,v),33432,A.aI("Copyright",C.bB,v),33434,A.aI("ExposureTime",C.e5,1),33437,A.aI("FNumber",C.e5,v),33723,A.aI("IPTC-NAA",C.cM,1),34665,A.aI("ExifOffset",C.Y,v),34675,A.aI("InterColorProfile",C.Y,v),34850,A.aI("ExposureProgram",C.bi,1),34852,A.aI("SpectralSensitivity",C.bB,v),34853,A.aI("GPSOffset",C.Y,v),34855,A.aI(u,C.cM,1),34856,A.aI("OECF",C.Y,v),34864,A.aI("SensitivityType",C.bi,1),34866,A.aI("RecommendedExposureIndex",C.cM,1),34867,A.aI(u,C.cM,1),36864,A.aI("ExifVersion",C.hM,v),36867,A.aI("DateTimeOriginal",C.bB,v),36868,A.aI("DateTimeDigitized",C.bB,v),36880,A.aI("OffsetTime",C.bB,v),36881,A.aI("OffsetTimeOriginal",C.bB,v),36882,A.aI("OffsetTimeDigitized",C.bB,v),37121,A.aI("ComponentsConfiguration",C.hM,v),37122,A.aI("CompressedBitsPerPixel",C.Y,v),37377,A.aI("ShutterSpeedValue",C.Y,v),37378,A.aI("ApertureValue",C.Y,v),37379,A.aI("BrightnessValue",C.Y,v),37380,A.aI("ExposureBiasValue",C.Y,v),37381,A.aI("MaxApertureValue",C.Y,v),37382,A.aI("SubjectDistance",C.Y,v),37383,A.aI("MeteringMode",C.Y,v),37384,A.aI("LightSource",C.Y,v),37385,A.aI("Flash",C.Y,v),37386,A.aI("FocalLength",C.Y,v),37396,A.aI("SubjectArea",C.Y,v),37500,A.aI("MakerNote",C.hM,v),37510,A.aI("UserComment",C.hM,v),37520,A.aI("SubSecTime",C.Y,v),37521,A.aI("SubSecTimeOriginal",C.Y,v),37522,A.aI("SubSecTimeDigitized",C.Y,v),40091,A.aI("XPTitle",C.Y,v),40092,A.aI("XPComment",C.Y,v),40093,A.aI("XPAuthor",C.Y,v),40094,A.aI("XPKeywords",C.Y,v),40095,A.aI("XPSubject",C.Y,v),40960,A.aI("FlashPixVersion",C.Y,v),40961,A.aI("ColorSpace",C.bi,1),40962,A.aI("ExifImageWidth",C.bi,1),40963,A.aI("ExifImageLength",C.bi,1),40964,A.aI("RelatedSoundFile",C.Y,v),40965,A.aI("InteroperabilityOffset",C.Y,v),41483,A.aI("FlashEnergy",C.Y,v),41484,A.aI("SpatialFrequencyResponse",C.Y,v),41486,A.aI("FocalPlaneXResolution",C.Y,v),41487,A.aI("FocalPlaneYResolution",C.Y,v),41488,A.aI("FocalPlaneResolutionUnit",C.Y,v),41492,A.aI("SubjectLocation",C.Y,v),41493,A.aI("ExposureIndex",C.Y,v),41495,A.aI("SensingMethod",C.Y,v),41728,A.aI("FileSource",C.Y,v),41729,A.aI("SceneType",C.Y,v),41730,A.aI("CVAPattern",C.Y,v),41985,A.aI("CustomRendered",C.Y,v),41986,A.aI("ExposureMode",C.Y,v),41987,A.aI("WhiteBalance",C.Y,v),41988,A.aI("DigitalZoomRatio",C.Y,v),41989,A.aI("FocalLengthIn35mmFilm",C.Y,v),41990,A.aI("SceneCaptureType",C.Y,v),41991,A.aI("GainControl",C.Y,v),41992,A.aI("Contrast",C.Y,v),41993,A.aI("Saturation",C.Y,v),41994,A.aI("Sharpness",C.Y,v),41995,A.aI("DeviceSettingDescription",C.Y,v),41996,A.aI("SubjectDistanceRange",C.Y,v),42016,A.aI("ImageUniqueID",C.Y,v),42032,A.aI("CameraOwnerName",C.bB,v),42033,A.aI("BodySerialNumber",C.bB,v),42034,A.aI("LensSpecification",C.Y,v),42035,A.aI("LensMake",C.bB,v),42036,A.aI("LensModel",C.bB,v),42037,A.aI("LensSerialNumber",C.bB,v),42240,A.aI("Gamma",C.e5,1),50341,A.aI("PrintIM",C.Y,v),59932,A.aI("Padding",C.Y,v),59933,A.aI("OffsetSchema",C.Y,v),65e3,A.aI("OwnerName",C.bB,v),65001,A.aI("SerialNumber",C.bB,v)],y.p,B.z("ao0"))})
w($,"dk7","aVi",()=>B.Cr(511))
w($,"dk8","cm4",()=>B.Cr(511))
w($,"dka","cm5",()=>A.czy(2041))
w($,"dkb","aVj",()=>A.czy(225))
w($,"dk9","pF",()=>B.Cr(766))
x($,"diy","cJL",()=>A.cyh(0,0,0))
x($,"dlr","nj",()=>B.Cr(1))
x($,"dls","oo",()=>A.cUF(D.A.gaj($.nj()),0,null))
x($,"dlk","ni",()=>E.cWd(1))
x($,"dll","on",()=>J.cNn(D.dN.gaj($.ni()),0,null))
x($,"dlm","hp",()=>B.cWg(1))
x($,"dlo","kB",()=>J.aVx(D.bq.gaj($.hp()),0,null))
x($,"dln","Fd",()=>A.cT0(D.bq.gaj($.hp())))
x($,"dli","aVl",()=>B.coP(1))
x($,"dlj","cm7",()=>A.cD6(D.cl.gaj($.aVl()),0))
x($,"dlg","ctD",()=>B.boB(1))
x($,"dlh","cLk",()=>A.cD6(D.eW.gaj($.ctD()),0))
x($,"dlp","ctE",()=>A.d0H(1))
x($,"dlq","cLl",()=>{var v=$.ctE()
return A.cT1(v.gaj(v))})})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_220",e:"endPart",h:b})})($__dart_deferred_initializers__,"fRaNobpkQFjcRh5wh7FOaTYJA4U=");