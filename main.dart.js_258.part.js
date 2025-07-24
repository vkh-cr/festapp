((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_258",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,A={
cWa(d){var x=new A.a49()
x.a6t(d)
return x},
a49:function a49(){this.a=$
this.b=0
this.c=2147483647},
c4h:function c4h(){},
cOP:function cOP(){},
c4i:function c4i(){},
cOQ:function cOQ(){},
dsY(d,e,f,g){var x=A.cZb(),w=A.cZb(),v=A.cZb(),u=new Uint16Array(16),t=new Uint32Array(573),s=new Uint8Array(573)
x=new A.bhF(d,f,x,w,v,u,t,s)
x.b8n(e,g)
x.b8m(C.qW)
return x},
d3W(d,e,f,g){var x=d[e*2],w=d[f*2]
if(x>=w)x=x===w&&g[e]<=g[f]
else x=!0
return x},
cZb(){return new A.cm1()},
dIt(d,e,f){var x,w,v,u,t,s,r,q=new Uint16Array(16)
for(x=0,w=1;w<=15;++w){x=x+f[w-1]<<1>>>0
q[w]=x}for(v=d.$flags|0,u=0;u<=e;++u){t=u*2
s=d[t+1]
if(s===0)continue
r=q[s]
q[s]=r+1
r=A.dIu(r,s)
v&2&&B.K(d)
d[t]=r}},
dIu(d,e){var x,w=0
do{x=A.r0(d,1)
w=(w|d&1)<<1>>>0
if(--e,e>0){d=x
continue}else break}while(!0)
return A.r0(w,1)},
dcb(d){return d<256?C.Rw[d]:C.Rw[256+A.r0(d,7)]},
cZr(d,e,f,g,h){return new A.cGT(d,e,f,g,h)},
r0(d,e){if(d>=0)return D.c.oJ(d,e)
else return D.c.oJ(d,e)+D.c.ez(2,(~e>>>0)+65536&65535)},
Xx:function Xx(d,e){this.a=d
this.b=e},
bhF:function bhF(d,e,f,g,h,i,j,k){var _=this
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
_.am=_.ah=_.Y=_.X=_.C=_.bs=_.bj=_.y2=_.y1=_.xr=$},
v3:function v3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cm1:function cm1(){this.c=this.b=this.a=$},
cGT:function cGT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bvN:function bvN(d,e,f,g){var _=this
_.a=d
_.b=null
_.c=e
_.e=_.d=0
_.r=f
_.w=g},
c4g:function c4g(){},
apy:function apy(d,e){this.a=d
this.b=e},
bw3(d,e,f,g){var x,w,v=new A.bw2(e)
if(g==null)g=0
if(f==null)f=d.length-g
x=d.length
if(g+f>x)f=x-g
w=y.D.b(d)?d:new Uint8Array(B.c9(d))
x=J.dx(D.H.gaq(w),w.byteOffset+g,f)
v.b=x
v.d=x.length
return v},
bw2:function bw2(d){var _=this
_.b=null
_.c=0
_.d=$
_.a=d},
bw4:function bw4(){},
d7Z(d,e){var x=e==null?32768:e
return new A.aCn(new Uint8Array(x),d)},
aCn:function aCn(d,e){this.b=0
this.c=d
this.a=e},
bGC:function bGC(){},
a4k(d,e,f){return A.dwK(d,e,f)},
dwK(d,e,f){var x=0,w=B.k(y.D),v
var $async$a4k=B.f(function(g,h){if(g===1)return B.h(h,w)
while(true)switch(x){case 0:x=3
return B.d(A.Kr(d,e,"jpg",new A.buG(d,e,f),f),$async$a4k)
case 3:v=h
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$a4k,w)},
axy(d,e){return A.dwL(d,e)},
dwL(d,e){var x=0,w=B.k(y.D),v
var $async$axy=B.f(function(f,g){if(f===1)return B.h(g,w)
while(true)switch(x){case 0:x=3
return B.d(A.Kr(d,e,"png",new A.buH(d,e),null),$async$axy)
case 3:v=g
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$axy,w)},
buI(d,e,f){return A.dwM(d,e,f)},
dwM(d,e,f){var x=0,w=B.k(y.D),v
var $async$buI=B.f(function(g,h){if(g===1)return B.h(h,w)
while(true)switch(x){case 0:x=3
return B.d(A.Kr(d,e,"webp",new A.buJ(d,e,f),f),$async$buI)
case 3:v=h
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$buI,w)},
Kr(d,e,f,g,h){return A.dwJ(d,e,f,g,h)},
dwJ(d,e,f,g,h){var x=0,w=B.k(y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j
var $async$Kr=B.f(function(i,a0){if(i===1){t.push(a0)
x=u}while(true)switch(x){case 0:if(!$.d2c){v=g.$0()
x=1
break}m=$.hu().b
m===$&&B.b()
r=m
q="uploads/"+Date.now()+"."+f
u=4
m=r.as
m===$&&B.b()
x=7
return B.d(m.cg("images-temp").Th(q,d),$async$Kr)
case 7:p=a0
if(J.bk(p)===0){m=g.$0()
v=m
x=1
break}u=9
m=r.as
m===$&&B.b()
x=12
return B.d(m.cg("images-temp").a0j(0,q,new A.bZz(e,h,C.bAU)),$async$Kr)
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
m=B.ag(k)
if(m instanceof B.N9){n=m
if(n.c==="403")$.d2c=!1
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
return B.d(m.cg("images-temp").I(0,B.a([q],y.T)),$async$Kr)
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
return B.j($async$Kr,w)},
cWf(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n=null,m=A.dfh(d)
if(m==null)throw B.p(B.cF("Failed to decode "+f+" image"))
x=A.dQk(m,e)
if(f==="jpg"){w=g==null?85:g
v=new Uint8Array(64)
u=new Uint8Array(64)
t=new Float32Array(64)
s=new Float32Array(64)
r=B.c3(65535,n,!1,y.cl)
q=y.s
p=B.c3(65535,n,!1,q)
o=B.c3(64,n,!1,q)
q=B.c3(64,n,!1,q)
v=new A.bxi(v,u,t,s,r,p,o,q,new Int32Array(2048))
v.e=v.VO(C.Yh,C.uA)
v.f=v.VO(C.Ti,C.uA)
v.r=v.VO(C.Qo,C.RH)
v.w=v.VO(C.S7,C.Uz)
v.bl3()
v.blf()
v.aTi(w)
return new Uint8Array(B.c9(v.bLR(x,C.PX)))}else if(f==="png")return new Uint8Array(B.c9(new A.bI2(C.byF,6).bLS(x,!1)))
else if(f==="webp")return d
else throw B.p(B.cF("Unsupported image format: "+f))},
dwH(d){var x=d.length
if(x>=2&&d[0]===255&&d[1]===216)return"jpg"
if(x>=8&&d[0]===137&&d[1]===80&&d[2]===78&&d[3]===71)return"png"
if(x>=12&&d[0]===82&&d[1]===73&&d[2]===70&&d[3]===70&&d[8]===87&&d[9]===69&&d[10]===66&&d[11]===80)return"webp"
return"jpg"},
Ez(d,e,f){return A.dwI(d,e,f)},
dwI(d,e,f){var x=0,w=B.k(y.D),v,u
var $async$Ez=B.f(function(g,h){if(g===1)return B.h(h,w)
while(true)switch(x){case 0:u=A.dwH(d)
x=u==="jpg"?3:5
break
case 3:x=6
return B.d(A.a4k(d,e,f),$async$Ez)
case 6:v=h
x=1
break
x=4
break
case 5:x=u==="png"?7:9
break
case 7:x=10
return B.d(A.axy(d,e),$async$Ez)
case 10:v=h
x=1
break
x=8
break
case 9:x=u==="webp"?11:13
break
case 11:x=14
return B.d(A.buI(d,e,f),$async$Ez)
case 14:v=h
x=1
break
x=12
break
case 13:x=15
return B.d(A.a4k(d,e,f),$async$Ez)
case 15:v=h
x=1
break
case 12:case 8:case 4:case 1:return B.i(v,w)}})
return B.j($async$Ez,w)},
buG:function buG(d,e,f){this.a=d
this.b=e
this.c=f},
buH:function buH(d,e){this.a=d
this.b=e},
buJ:function buJ(d,e,f){this.a=d
this.b=e
this.c=f},
b9T:function b9T(d,e){this.a=d
this.b=e},
iA:function iA(d){this.a=-1
this.b=d},
QC:function QC(d){this.a=d},
QD:function QD(d){this.a=d},
QE:function QE(d){this.a=d},
QF:function QF(d){this.a=d},
QG:function QG(d){this.a=d},
QH:function QH(d){this.a=d},
QK:function QK(d,e){this.a=d
this.b=e},
QL:function QL(d){this.a=d},
QM:function QM(d,e){this.a=d
this.b=e},
QN:function QN(d){this.a=d},
QO:function QO(d,e){this.a=d
this.b=e},
dpe(d,e,f,g){var x=new A.QI(new Uint8Array(4))
x.b0F(d,e,f,g)
return x},
zY:function zY(d){this.a=d},
aqt:function aqt(d){this.a=d},
QI:function QI(d){this.a=d},
a0T:function a0T(d){this.a=d},
aqF:function aqF(d){this.a=d},
b26(d,e,f){var x
if(e===f)return d
switch(e.a){case 0:if(d===0)x=0
else{x=C.a6E.h(0,f)
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
case 1:return D.c.Z(B.bw(d),1)
case 2:return d
case 3:return d*17
case 4:return d*4369
case 5:return d*286331153
case 6:return d*8
case 7:return d*2184
case 8:return d*143165576
case 9:case 10:case 11:return d/3}break
case 3:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.Z(B.bw(d),6)
case 2:return D.c.Z(B.bw(d),4)
case 3:return d
case 4:return d*257
case 5:return d*16843009
case 6:return D.c.Z(B.bw(d),1)
case 7:return d*128
case 8:return d*8421504
case 9:case 10:case 11:return d/255}break
case 4:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.Z(B.bw(d),14)
case 2:return D.c.Z(B.bw(d),12)
case 3:return D.c.Z(B.bw(d),8)
case 4:return d
case 5:return B.bw(d)<<8>>>0
case 6:return D.c.Z(B.bw(d),9)
case 7:return D.c.Z(B.bw(d),1)
case 8:return d*524296
case 9:case 10:case 11:return d/65535}break
case 5:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.Z(B.bw(d),30)
case 2:return D.c.Z(B.bw(d),28)
case 3:return D.c.Z(B.bw(d),24)
case 4:return D.c.Z(B.bw(d),16)
case 5:return d
case 6:return D.c.Z(B.bw(d),25)
case 7:return D.c.Z(B.bw(d),17)
case 8:return D.c.Z(B.bw(d),1)
case 9:case 10:case 11:return d/4294967295}break
case 6:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.Z(B.bw(d),5)
case 2:return d<=0?0:D.c.Z(B.bw(d),3)
case 3:return d<=0?0:B.bw(d)<<1>>>0
case 4:return d<=0?0:B.bw(d)*516
case 5:return d<=0?0:B.bw(d)*33818640
case 6:return d
case 7:return d*258
case 8:return d*16909320
case 9:case 10:case 11:return d/127}break
case 7:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.Z(B.bw(d),15)
case 2:return d<=0?0:D.c.Z(B.bw(d),11)
case 3:return d<=0?0:D.c.Z(B.bw(d),7)
case 4:return d<=0?0:B.bw(d)<<1>>>0
case 5:return d<=0?0:B.bw(d)*131076
case 6:return D.c.Z(B.bw(d),8)
case 7:return d
case 8:return B.bw(d)*65538
case 9:case 10:case 11:return d/32767}break
case 8:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.Z(B.bw(d),29)
case 2:return d<=0?0:D.c.Z(B.bw(d),27)
case 3:return d<=0?0:D.c.Z(B.bw(d),23)
case 4:return d<=0?0:D.c.Z(B.bw(d),16)
case 5:return d<=0?0:B.bw(d)<<1>>>0
case 6:return D.c.Z(B.bw(d),24)
case 7:return D.c.Z(B.bw(d),16)
case 8:return d
case 9:case 10:case 11:return d/2147483647}break
case 9:case 10:case 11:switch(f.a){case 0:return d===0?0:1
case 1:return D.e.L(D.e.aM(d,0,1)*3)
case 2:return D.e.L(D.e.aM(d,0,1)*15)
case 3:return D.e.L(D.e.aM(d,0,1)*255)
case 4:return D.e.L(D.e.aM(d,0,1)*65535)
case 5:return D.e.L(D.e.aM(d,0,1)*4294967295)
case 6:return D.e.L(d<0?D.e.aM(d,-1,1)*128:D.e.aM(d,-1,1)*127)
case 7:return D.e.L(d<0?D.e.aM(d,-1,1)*32768:D.e.aM(d,-1,1)*32767)
case 8:return D.e.L(d<0?D.e.aM(d,-1,1)*2147483648:D.e.aM(d,-1,1)*2147483647)
case 9:case 10:case 11:return d}break}},
p7:function p7(d,e){this.a=d
this.b=e},
apj:function apj(d,e){this.a=d
this.b=e},
a2U(d){var x=new A.RT(B.I(y.N,y.P))
x.b0T(d)
return x},
d4E(d){var x=new A.RT(B.I(y.N,y.P))
x.oA(0,d)
return x},
RT:function RT(d){this.a=d},
aQJ:function aQJ(d,e){this.a=d
this.b=e},
aW(d,e,f){return new A.auM(d,e)},
auM:function auM(d,e){this.a=d
this.b=e},
vY:function vY(d){this.a=d},
buy:function buy(d){this.a=d},
d5L(d){var x=new A.rz(B.I(y.p,y.r),new A.vY(B.I(y.N,y.P)))
x.ae9(d)
return x},
rz:function rz(d,e){this.a=d
this.b=e},
buz:function buz(d){this.a=d},
buA:function buA(d){this.a=d},
dwG(d){var x=new Uint16Array(1)
x[0]=d
return new A.Az(x)},
d5T(d,e){var x=new A.Az(new Uint16Array(e))
x.b0Y(d,e)
return x},
dwF(d){var x=new Uint32Array(1)
x[0]=d
return new A.u_(x)},
d5O(d,e){var x=new A.u_(new Uint32Array(e))
x.b0V(d,e)
return x},
d5P(d,e){var x,w=J.jn(e,y.i)
for(x=0;x<e;++x)w[x]=new A.pq(d.ag(),d.ag())
return new A.vZ(w)},
d5S(d,e){var x=new A.Ay(new Int16Array(e))
x.b0X(d,e)
return x},
d5Q(d,e){var x=new A.Ax(new Int32Array(e))
x.b0W(d,e)
return x},
d5R(d,e){var x,w,v,u,t=J.jn(e,y.i)
for(x=0;x<e;++x){w=d.ag()
v=$.ix()
v.$flags&2&&B.K(v)
v[0]=w
w=$.lW()
u=w[0]
v[0]=d.ag()
t[x]=new A.pq(u,w[0])}return new A.w_(t)},
d5U(d){var x=new Float32Array(1)
x[0]=d
return new A.Ev(x)},
d5V(d,e){var x=new A.Ev(new Float32Array(e))
x.b0Z(d,e)
return x},
d5M(d){var x=new Float64Array(1)
x[0]=d
return new A.Eu(x)},
d5N(d,e){var x=new A.Eu(new Float64Array(e))
x.b0U(d,e)
return x},
ob:function ob(d,e){this.a=d
this.b=e},
l1:function l1(){},
vX:function vX(d){this.a=d},
Et:function Et(d){this.a=d},
Az:function Az(d){this.a=d},
u_:function u_(d){this.a=d},
vZ:function vZ(d){this.a=d},
y7:function y7(d){this.a=d},
Ay:function Ay(d){this.a=d},
Ax:function Ax(d){this.a=d},
w_:function w_(d){this.a=d},
Ev:function Ev(d){this.a=d},
Eu:function Eu(d){this.a=d},
Kp:function Kp(d){this.a=d},
d2E(d){var x,w,v=new A.b8r()
if(!A.cUE(d))B.a9(A.co("Not a bitmap file."))
d.d+=2
x=d.ag()
w=$.ix()
w.$flags&2&&B.K(w)
w[0]=x
x=$.lW()
d.d+=4
w[0]=d.ag()
v.b=x[0]
return v},
cUE(d){if(d.c-d.d<2)return!1
return A.ct(d,null,0).av()===19778},
doq(d,e){var x,w,v,u,t=e==null?A.d2E(d):e,s=d.d,r=d.ag(),q=d.ag(),p=$.ix()
p.$flags&2&&B.K(p)
p[0]=q
q=$.lW()
x=q[0]
p[0]=d.ag()
q=q[0]
w=d.av()
v=d.av()
u=C.WF[d.ag()]
d.ag()
p[0]=d.ag()
p[0]=d.ag()
p=d.ag()
d.ag()
s=new A.Iv(t,x,q,r,w,v,u,p,s)
s.anU(d,e)
return s},
nd:function nd(d,e){this.a=d
this.b=e},
b8r:function b8r(){this.b=$},
Iv:function Iv(d,e,f,g,h,i,j,k,l){var _=this
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
apn:function apn(d){this.a=$
this.b=null
this.c=d},
b8q:function b8q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
biF:function biF(d){this.a=$
this.b=null
this.c=d},
bhn:function bhn(){},
bho:function bho(){},
blt:function blt(){},
auO:function auO(d,e,f){this.a=d
this.b=e
this.c=f},
ay0:function ay0(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
RV:function RV(d,e){this.a=d
this.b=e},
JC:function JC(d,e){this.a=d
this.b=e},
auP:function auP(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
d4G(d,e,f,g){var x,w
switch(d.a){case 1:return new A.bwg(f,e)
case 2:return new A.ay2(f,g==null?1:g,e)
case 3:return new A.ay2(f,g==null?16:g,e)
case 4:x=g==null?32:g
w=new A.bwe(f,x,e)
w.b16(e,f,x)
return w
case 5:return new A.bwf(f,g==null?16:g,e)
case 6:return new A.ay0(f,g==null?32:g,!1,e)
case 7:return new A.ay0(f,g==null?32:g,!0,e)
default:throw B.p(A.co("Invalid compression type: "+d.j(0)))}},
vL:function vL(d,e){this.a=d
this.b=e},
bn3:function bn3(){},
bwd:function bwd(){},
duy(d,e,f,g){var x,w,v,u,t,s,r,q
if(e===0){if(g!==0)throw B.p(A.co("Incomplete huffman data"))
return}x=d.d
w=d.ag()
v=d.ag()
d.d+=4
u=d.ag()
t=!0
if(w<65537)t=v>=65537
if(t)throw B.p(A.co("Invalid huffman table size"))
d.d+=4
s=B.c3(65537,0,!1,y.p)
r=J.jG(16384,y.W)
for(q=0;q<16384;++q)r[q]=new A.auQ()
A.duz(d,e-20,w,v,s)
if(u>8*(e-(d.d-x)))throw B.p(A.co("Error in header for Huffman-encoded data (invalid number of bits)."))
A.duv(s,w,v,r)
A.dux(s,r,d,u,v,g,f)},
dux(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p="Error in Huffman-encoded data (invalid code).",o=B.a([0,0],y.t),n=f.d+D.c.aK(g+7,8)
for(x=0;f.d<n;){A.cVE(o,f)
for(;w=o[1],w>=14;){v=e[D.c.oJ(o[0],w-14)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cVF(v.b,h,o,f,j,x,i)}else{if(v.c==null)throw B.p(A.co(p))
for(t=0;t<v.b;++t){s=d[v.c[t]]&63
while(!0){w=o[1]
if(!(w<s&&f.d<n))break
A.cVE(o,f)}if(w>=s){u=v.c
w-=s
if(d[u[t]]>>>6===(D.c.oJ(o[0],w)&D.c.ez(1,s)-1)>>>0){o[1]=w
r=A.cVF(u[t],h,o,f,j,x,i)
x=r
break}}}if(t===v.b)throw B.p(A.co(p))}}}q=8-g&7
o[0]=D.c.Z(o[0],q)
o[1]=o[1]-q
for(;w=o[1],w>0;){v=e[D.c.f9(o[0],14-w)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cVF(v.b,h,o,f,j,x,i)}else throw B.p(A.co(p))}if(x!==i)throw B.p(A.co("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
cVF(d,e,f,g,h,i,j){var x,w,v,u,t,s="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)A.cVE(f,g)
x=f[1]-8
f[1]=x
w=D.c.oJ(f[0],x)&255
if(i+w>j)throw B.p(A.co(s))
v=h[i-1]
for(x=h.$flags|0;u=w-1,w>0;w=u,i=t){t=i+1
x&2&&B.K(h)
h[i]=v}}else{if(i<j){h.toString
t=i+1
h.$flags&2&&B.K(h)
h[i]=d}else throw B.p(A.co(s))
i=t}return i},
duv(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n="Error in Huffman-encoded data (invalid code table entry)."
for(x=y.t,w=y.p;e<=f;++e){v=d[e]
u=v>>>6
t=v&63
if(D.c.i4(u,t)!==0)throw B.p(A.co(n))
if(t>14){s=g[D.c.hs(u,t-14)]
if(s.a!==0)throw B.p(A.co(n))
v=++s.b
r=s.c
if(r!=null){v=B.c3(v,0,!1,w)
s.c=v
for(q=s.b-1,p=0;p<q;++p)v[p]=r[p]}else s.c=B.a([0],x)
s.c[s.b-1]=e}else if(t!==0){v=14-t
o=D.c.f9(u,v)
for(p=D.c.f9(1,v);p>0;--p,++o){s=g[o]
if(s.a!==0||s.c!=null)throw B.p(A.co(n))
s.a=t
s.b=e}}}},
duz(d,e,f,g,h){var x,w,v,u,t,s="Error in Huffman-encoded data (unexpected end of code table data).",r="Error in Huffman-encoded data (code table is longer than expected).",q=d.d,p=B.a([0,0],y.t)
for(x=g+1;f<=g;++f){if(d.d-q>e)throw B.p(A.co(s))
w=A.d4H(6,p,d)
h[f]=w
if(w===63){if(d.d-q>e)throw B.p(A.co(s))
v=A.d4H(8,p,d)+6
if(f+v>x)throw B.p(A.co(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}else if(w>=59){v=w-59+2
if(f+v>x)throw B.p(A.co(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}}A.duw(h)},
duw(d){var x,w,v,u,t,s=B.c3(59,0,!1,y.p)
for(x=0;x<65537;++x){w=d[x]
s[w]=s[w]+1}for(v=0,x=58;x>0;--x,v=u){u=v+s[x]>>>1
s[x]=v}for(x=0;x<65537;++x){t=d[x]
if(t>0){w=s[t]
s[t]=w+1
d[x]=(t|w<<6)>>>0}}},
cVE(d,e){d[0]=((d[0]<<8|e.cE())&-1)>>>0
d[1]=(d[1]+8&-1)>>>0},
d4H(d,e,f){var x
for(;x=e[1],x<d;){e[0]=((e[0]<<8|J.v(f.a,f.d++))&-1)>>>0
e[1]=(e[1]+8&-1)>>>0}x-=d
e[1]=x
return(D.c.oJ(e[0],x)&D.c.ez(1,d)-1)>>>0},
auQ:function auQ(){this.b=this.a=0
this.c=null},
duA(d){var x=A.de(d,!1,null,0)
if(x.ag()!==20000630)return!1
if(x.cE()!==2)return!1
if((x.tu()&4294967289)>>>0!==0)return!1
return!0},
bn5:function bn5(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
d6h(d,e,f){var x=new A.ay1(d,B.a([],y.Q),B.I(y.N,y.n),C.Oc,e)
x.b0L(d,e,f)
return x},
a30:function a30(){},
bn6:function bn6(d,e){this.a=d
this.b=e},
ay1:function ay1(d,e,f,g,h){var _=this
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
bwe:function bwe(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
aU3:function aU3(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
bwf:function bwf(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
bwg:function bwg(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
ay2:function ay2(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
bn4:function bn4(){this.a=null},
d5j(d){var x=new Uint8Array(d*3)
return new A.a3E(A.dw_(d),d,null,new A.wh(x,d,3))},
dvZ(d){return new A.a3E(d.a,d.b,d.c,A.d84(d.d))},
dw_(d){var x
for(x=1;x<=8;++x)if(D.c.ez(1,x)>=d)return x
return 0},
a3E:function a3E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3F:function a3F(){},
ay3:function ay3(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=$},
awo:function awo(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
brH:function brH(){var _=this
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
d5I(d){var x,w,v,u,t,s
if(d.av()!==0)return null
x=d.av()
if(x>=3)return null
w=C.aDv[x]
if(w===C.OI)return null
v=d.av()
u=J.jn(v,y.Y)
for(t=0;t<v;++t){J.v(d.a,d.d++)
s=J.v(d.a,d.d++)
J.v(d.a,d.d++);++d.d
d.av()
d.av()
u[t]=new A.axm(s,d.ag(),d.ag())}return new A.buh(w,v,u)},
Sr:function Sr(d,e){this.a=d
this.b=e},
buh:function buh(d,e,f){this.c=d
this.d=e
this.e=f},
axm:function axm(d,e,f){this.b=d
this.d=e
this.e=f},
buf:function buf(d,e,f,g,h,i,j,k,l){var _=this
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
bug:function bug(){this.b=this.a=null},
aqy:function aqy(d,e,f){this.e=d
this.f=e
this.r=f},
Kg:function Kg(){},
Kh:function Kh(d){this.a=d},
a4a:function a4a(d){this.a=d},
bxe:function bxe(){this.d=null},
EQ:function EQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.y=_.x=_.w=_.r=_.f=_.e=$},
d6B(){var x=B.c3(4,null,!1,y.a7),w=B.a([],y.cB),v=y.bT,u=J.EN(0,v)
v=J.EN(0,v)
return new A.bxg(new A.RT(B.I(y.N,y.P)),x,w,u,v,B.a([],y.E))},
bxg:function bxg(d,e,f,g,h,i){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i},
bxh:function bxh(d,e){this.a=d
this.b=e},
Y4:function Y4(d){this.a=d
this.b=0},
ayj:function ayj(d,e){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=d
_.z=e},
bxk:function bxk(){this.r=this.f=$},
ayk:function ayk(d,e,f,g,h,i,j,k){var _=this
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
ayi:function ayi(){},
bxf:function bxf(d,e){this.a=d
this.b=e},
bxi:function bxi(d,e,f,g,h,i,j,k,l){var _=this
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
Ue:function Ue(d,e){this.a=d
this.b=e},
a7F:function a7F(d,e){this.a=d
this.b=e},
a7G:function a7G(){},
ay4:function ay4(d,e,f,g,h,i,j,k,l){var _=this
_.y=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
d6j(){var x=y.N
return new A.bwi(B.I(x,x),B.a([],y.d),B.a([],y.t))},
FE:function FE(d,e){this.a=d
this.b=e},
bI4:function bI4(){},
bwi:function bwi(d,e,f){var _=this
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
aDa:function aDa(d){var _=this
_.a=d
_.c=_.b=0
_.d=$
_.e=0},
aDb:function aDb(d,e){this.a=d
this.b=e},
bI2:function bI2(d,e){var _=this
_.a=null
_.b=d
_.c=0
_.d=e
_.e=$
_.f=0
_.r=!1
_.w=null},
FF:function FF(d,e){this.a=d
this.b=e},
LQ:function LQ(d){this.b=this.a=0
this.e=d},
bI5:function bI5(d){this.b=this.a=null
this.c=d},
bI6:function bI6(){},
aDG:function aDG(){this.b=this.a=null},
aDH:function aDH(){this.b=this.a=null},
yy:function yy(){},
aDJ:function aDJ(){this.b=this.a=null},
aDK:function aDK(){this.b=this.a=null},
aDN:function aDN(){this.b=this.a=null},
aDO:function aDO(){this.b=this.a=null},
a81:function a81(d){this.b=d},
aDM:function aDM(){this.b=$
this.c=null},
bJ8:function bJ8(){var _=this
_.w=_.r=_.f=_.e=$},
Uv:function Uv(d){this.a=d
this.c=null},
d8s(d){var x=new A.bJa(B.I(y.p,y.a2))
x.b1j(d)
return x},
cXu(d,e,f,g){var x=d/255,w=e/255,v=f/255,u=g/255,t=w*(1-v),s=x*(1-u)
return D.e.L(D.e.aM((2*x<v?2*w*x+t+s:u*v-2*(v-x)*(u-w)+t+s)*255,0,255))},
bJb(d,e){if(e===0)return 0
return D.e.L(D.c.aM(D.e.L(255*(1-(1-d/255)/(e/255))),0,255))},
bJd(d,e){return D.e.L(D.c.aM(d+e-255,0,255))},
cXw(d,e){return D.e.L(D.c.aM(255-(255-e)*(255-d),0,255))},
bJc(d,e){if(e===255)return 255
return D.e.L(D.e.aM(d/255/(1-e/255)*255,0,255))},
cXx(d,e){var x=d/255,w=e/255,v=1-w
return D.e.aD(255*(v*w*x+w*(1-v*(1-x))))},
cXs(d,e){var x=e/255,w=d/255
if(w<0.5)return D.e.aD(510*x*w)
else return D.e.aD(255*(1-2*(1-x)*(1-w)))},
cXy(d,e){if(e<128)return A.bJb(d,2*e)
else return A.bJc(d,2*(e-128))},
cXt(d,e){var x
if(e<128)return A.bJd(d,2*e)
else{x=2*(e-128)
return x+d>255?255:d+x}},
cXv(d,e){return e<128?Math.min(d,2*e):Math.max(d,2*(e-128))},
cXr(d,e){return D.e.aD(e+d-2*e*d/255)},
qt(d,e,f){var x
if(d==null)x=0
else x=f===1?d[e]:(d[e]<<8|d[e+1])>>>8
return x},
d8t(b5,b6,b7,b8,b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4=B.I(y.p,y.aG)
for(x=b9.length,w=0;v=b9.length,w<v;b9.length===x||(0,B.L)(b9),++w){u=b9[w]
b4.m(0,u.a,u)}if(b6===8)t=1
else t=b6===16?2:-1
s=A.iQ(b3,b3,C.aj,0,C.bG,b8,b3,0,v,b3,C.aj,b7,!1)
if(t===-1)throw B.p(A.co("PSD: unsupported bit depth: "+B.o(b6)))
r=b4.h(0,0)
q=b4.h(0,1)
p=b4.h(0,2)
o=b4.h(0,-1)
n=B.a([0,0,0],y.t)
m=-t
for(x=s.a,x=x.gac(x),l=v>=5,k=v===4,j=v>=2,v=v>=4;x.t();){i=x.gM(x)
m+=t
switch(b5){case C.ac4:i.sar(0,A.qt(r.c,m,t))
i.saE(A.qt(q.c,m,t))
i.saF(0,A.qt(p.c,m,t))
i.saU(0,v?A.qt(o.c,m,t):255)
if(i.gaU(i)!==0){i.sar(0,(i.gar(i)+i.gaU(i)-255)*255/i.gaU(i))
i.saE((i.gaE()+i.gaU(i)-255)*255/i.gaU(i))
i.saF(0,(i.gaF(i)+i.gaU(i)-255)*255/i.gaU(i))}break
case C.ac6:h=A.qt(r.c,m,t)
g=A.qt(q.c,m,t)
f=A.qt(p.c,m,t)
e=v?A.qt(o.c,m,t):255
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
a8=[D.e.L(D.e.aM(a5*255,0,255)),D.e.L(D.e.aM(a6*255,0,255)),D.e.L(D.e.aM(a7*255,0,255))]
i.sar(0,a8[0])
i.saE(a8[1])
i.saF(0,a8[2])
i.saU(0,e)
break
case C.ac3:a9=A.qt(r.c,m,t)
e=j?A.qt(o.c,m,t):255
i.sar(0,a9)
i.saE(a9)
i.saF(0,a9)
i.saU(0,e)
break
case C.ac5:b0=A.qt(r.c,m,t)
b1=A.qt(q.c,m,t)
d=A.qt(p.c,m,t)
b2=A.qt(b4.h(0,k?-1:3).c,m,t)
e=l?A.qt(o.c,m,t):255
A.deY(255-b0,255-b1,255-d,255-b2,n)
i.sar(0,n[0])
i.saE(n[1])
i.saF(0,n[2])
i.saU(0,e)
break
default:throw B.p(A.co("Unhandled color mode: "+B.o(b5)))}}return s},
wo:function wo(d,e){this.a=d
this.b=e},
bJa:function bJa(d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=_.w=$
_.y=null
_.z=d
_.as=$
_.ay=_.ax=_.at=null},
aDI:function aDI(d,e){this.a=d
this.b=e},
aDL:function aDL(d,e,f){var _=this
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
dAT(d,e){var x,w
switch(d){case"lsct":x=new A.aDM()
w=e.c-e.d
x.b=e.ag()
if(w>=12){if(e.jO(4)!=="8BIM")B.a9(A.co("Invalid key in layer additional data"))
x.c=e.jO(4)}if(w>=16)e.ag()
return x
default:return new A.a81(e)}},
Uw:function Uw(){},
bJ9:function bJ9(){this.a=null},
aDR:function aDR(){},
Bk:function Bk(d,e,f){this.a=d
this.b=e
this.c=f},
nv:function nv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a84:function a84(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
Uz:function Uz(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
aDQ:function aDQ(){this.y=this.b=this.a=0},
Bl(d,e){return(C.wX[d>>>8]<<17|C.wX[e>>>8]<<16|C.wX[d&255]<<1|C.wX[e&255])>>>0},
up:function up(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
bJe:function bJe(){this.b=this.a=null},
aIo:function aIo(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
pC:function pC(d,e){this.a=d
this.b=e},
bWk:function bWk(){this.a=null
this.b=$},
bXq:function bXq(d){this.a=d
this.c=this.b=0},
aIt:function aIt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
cYo(d,e,f){var x=new A.bXs(e,f,d),w=y.s
x.e=B.c3(e,null,!1,w)
x.f=B.c3(e,null,!1,w)
return x},
bXs:function bXs(d,e,f){var _=this
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
aIu:function aIu(d,e,f,g){var _=this
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
Nw:function Nw(d,e){this.a=d
this.b=e},
lL:function lL(d,e){this.a=d
this.b=e},
uO:function uO(d,e){this.a=d
this.b=e},
bXt:function bXt(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
d6X(){return new A.byX(new Uint8Array(4096))},
byX:function byX(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
bXr:function bXr(){this.a=null
this.c=$},
cYP(d,e){var x=new Int32Array(4),w=new Int32Array(4),v=new Int8Array(4),u=new Int8Array(4),t=B.c3(8,null,!1,y.ak),s=B.c3(4,null,!1,y.Z)
return new A.c2l(d,e,new A.c2r(),new A.c2v(),new A.c2n(x,w),new A.c2x(v,u),t,s,new Uint8Array(4))},
dby(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
c2l:function c2l(d,e,f,g,h,i,j,k,l){var _=this
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
_.bj=$
_.bs=null
_.X=_.C=$
_.Y=null
_.ah=$},
c2y:function c2y(){},
dbv(d){var x=new A.acU(d)
x.b=254
x.c=0
x.d=-8
return x},
acU:function acU(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
fg(d,e,f){return D.c.lD(D.c.Z(d+2*e+f+2,2),32)},
dGi(d){var x,w=B.a([A.fg(J.v(d.a,d.d+-33),J.v(d.a,d.d+-32),J.v(d.a,d.d+-31)),A.fg(J.v(d.a,d.d+-32),J.v(d.a,d.d+-31),J.v(d.a,d.d+-30)),A.fg(J.v(d.a,d.d+-31),J.v(d.a,d.d+-30),J.v(d.a,d.d+-29)),A.fg(J.v(d.a,d.d+-30),J.v(d.a,d.d+-29),J.v(d.a,d.d+-28))],y.t)
for(x=0;x<4;++x)d.AZ(x*32,4,w)},
dGa(d){var x=J.v(d.a,d.d+-33),w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95),s=A.ct(d,null,0),r=s.T1(),q=A.fg(x,w,v)
r.$flags&2&&B.K(r)
r[0]=16843009*q
s.d+=32
q=s.T1()
r=A.fg(w,v,u)
q.$flags&2&&B.K(q)
q[0]=16843009*r
s.d+=32
r=s.T1()
q=A.fg(v,u,t)
r.$flags&2&&B.K(r)
r[0]=16843009*q
s.d+=32
q=s.T1()
r=A.fg(u,t,t)
q.$flags&2&&B.K(q)
q[0]=16843009*r},
dG8(d){var x,w,v,u
for(x=4,w=0;w<4;++w)x+=J.v(d.a,d.d+(w-32))+J.v(d.a,d.d+(-1+w*32))
x=D.c.Z(x,3)
for(w=0;w<4;++w){v=d.a
u=d.d+w*32
J.vg(v,u,u+4,x)}},
cYQ(d,e){var x,w,v,u,t,s=255-J.v(d.a,d.d+-33)
for(x=0,w=0;w<e;++w){v=s+J.v(d.a,d.d+(x-1))
for(u=0;u<e;++u){t=$.r6()[v+J.v(d.a,d.d+(-32+u))]
J.bZ(d.a,d.d+(x+u),t)}x+=32}},
dGg(d){A.cYQ(d,4)},
dGh(d){A.cYQ(d,8)},
dGf(d){A.cYQ(d,16)},
dGe(d){var x,w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95),s=J.v(d.a,d.d+-33),r=J.v(d.a,d.d+-32),q=J.v(d.a,d.d+-31),p=J.v(d.a,d.d+-30),o=J.v(d.a,d.d+-29)
d.m(0,96,A.fg(v,u,t))
x=A.fg(w,v,u)
d.m(0,97,x)
d.m(0,64,x)
x=A.fg(s,w,v)
d.m(0,98,x)
d.m(0,65,x)
d.m(0,32,x)
x=A.fg(r,s,w)
d.m(0,99,x)
d.m(0,66,x)
d.m(0,33,x)
d.m(0,0,x)
x=A.fg(q,r,s)
d.m(0,67,x)
d.m(0,34,x)
d.m(0,1,x)
x=A.fg(p,q,r)
d.m(0,35,x)
d.m(0,2,x)
d.m(0,3,A.fg(o,p,q))},
dGd(d){var x,w=J.v(d.a,d.d+-32),v=J.v(d.a,d.d+-31),u=J.v(d.a,d.d+-30),t=J.v(d.a,d.d+-29),s=J.v(d.a,d.d+-28),r=J.v(d.a,d.d+-27),q=J.v(d.a,d.d+-26),p=J.v(d.a,d.d+-25)
d.m(0,0,A.fg(w,v,u))
x=A.fg(v,u,t)
d.m(0,32,x)
d.m(0,1,x)
x=A.fg(u,t,s)
d.m(0,64,x)
d.m(0,33,x)
d.m(0,2,x)
x=A.fg(t,s,r)
d.m(0,96,x)
d.m(0,65,x)
d.m(0,34,x)
d.m(0,3,x)
x=A.fg(s,r,q)
d.m(0,97,x)
d.m(0,66,x)
d.m(0,35,x)
x=A.fg(r,q,p)
d.m(0,98,x)
d.m(0,67,x)
d.m(0,99,A.fg(q,p,p))},
dGk(d){var x=J.v(d.a,d.d+-1),w=J.v(d.a,d.d+31),v=J.v(d.a,d.d+63),u=J.v(d.a,d.d+-33),t=J.v(d.a,d.d+-32),s=J.v(d.a,d.d+-31),r=J.v(d.a,d.d+-30),q=J.v(d.a,d.d+-29),p=D.c.lD(D.c.Z(u+t+1,1),32)
d.m(0,65,p)
d.m(0,0,p)
p=D.c.lD(D.c.Z(t+s+1,1),32)
d.m(0,66,p)
d.m(0,1,p)
p=D.c.lD(D.c.Z(s+r+1,1),32)
d.m(0,67,p)
d.m(0,2,p)
d.m(0,3,D.c.lD(D.c.Z(r+q+1,1),32))
d.m(0,96,A.fg(v,w,x))
d.m(0,64,A.fg(w,x,u))
p=A.fg(x,u,t)
d.m(0,97,p)
d.m(0,32,p)
p=A.fg(u,t,s)
d.m(0,98,p)
d.m(0,33,p)
p=A.fg(t,s,r)
d.m(0,99,p)
d.m(0,34,p)
d.m(0,35,A.fg(s,r,q))},
dGj(d){var x,w=J.v(d.a,d.d+-32),v=J.v(d.a,d.d+-31),u=J.v(d.a,d.d+-30),t=J.v(d.a,d.d+-29),s=J.v(d.a,d.d+-28),r=J.v(d.a,d.d+-27),q=J.v(d.a,d.d+-26),p=J.v(d.a,d.d+-25)
d.m(0,0,D.c.lD(D.c.Z(w+v+1,1),32))
x=D.c.lD(D.c.Z(v+u+1,1),32)
d.m(0,64,x)
d.m(0,1,x)
x=D.c.lD(D.c.Z(u+t+1,1),32)
d.m(0,65,x)
d.m(0,2,x)
x=D.c.lD(D.c.Z(t+s+1,1),32)
d.m(0,66,x)
d.m(0,3,x)
d.m(0,32,A.fg(w,v,u))
x=A.fg(v,u,t)
d.m(0,96,x)
d.m(0,33,x)
x=A.fg(u,t,s)
d.m(0,97,x)
d.m(0,34,x)
x=A.fg(t,s,r)
d.m(0,98,x)
d.m(0,35,x)
d.m(0,67,A.fg(s,r,q))
d.m(0,99,A.fg(r,q,p))},
dGb(d){var x,w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95)
d.m(0,0,D.c.lD(D.c.Z(w+v+1,1),32))
x=D.c.lD(D.c.Z(v+u+1,1),32)
d.m(0,32,x)
d.m(0,2,x)
x=D.c.lD(D.c.Z(u+t+1,1),32)
d.m(0,64,x)
d.m(0,34,x)
d.m(0,1,A.fg(w,v,u))
x=A.fg(v,u,t)
d.m(0,33,x)
d.m(0,3,x)
x=A.fg(u,t,t)
d.m(0,65,x)
d.m(0,35,x)
d.m(0,99,t)
d.m(0,98,t)
d.m(0,97,t)
d.m(0,96,t)
d.m(0,66,t)
d.m(0,67,t)},
dG9(d){var x=J.v(d.a,d.d+-1),w=J.v(d.a,d.d+31),v=J.v(d.a,d.d+63),u=J.v(d.a,d.d+95),t=J.v(d.a,d.d+-33),s=J.v(d.a,d.d+-32),r=J.v(d.a,d.d+-31),q=J.v(d.a,d.d+-30),p=D.c.lD(D.c.Z(x+t+1,1),32)
d.m(0,34,p)
d.m(0,0,p)
p=D.c.lD(D.c.Z(w+x+1,1),32)
d.m(0,66,p)
d.m(0,32,p)
p=D.c.lD(D.c.Z(v+w+1,1),32)
d.m(0,98,p)
d.m(0,64,p)
d.m(0,96,D.c.lD(D.c.Z(u+v+1,1),32))
d.m(0,3,A.fg(s,r,q))
d.m(0,2,A.fg(t,s,r))
p=A.fg(x,t,s)
d.m(0,35,p)
d.m(0,1,p)
p=A.fg(w,x,t)
d.m(0,67,p)
d.m(0,33,p)
p=A.fg(v,w,x)
d.m(0,99,p)
d.m(0,65,p)
d.m(0,97,A.fg(u,v,w))},
dGv(d){var x
for(x=0;x<16;++x)d.tk(x*32,16,d,-32)},
dGt(d){var x,w,v,u,t
for(x=0,w=16;w>0;--w){v=J.v(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.vg(u,t,t+16,v)
x+=32}},
c2p(d,e){var x,w,v
for(x=0;x<16;++x){w=e.a
v=e.d+x*32
J.vg(w,v,v+16,d)}},
dGl(d){var x,w
for(x=16,w=0;w<16;++w)x+=J.v(d.a,d.d+(-1+w*32))+J.v(d.a,d.d+(w-32))
A.c2p(D.c.Z(x,5),d)},
dGn(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.v(d.a,d.d+(-1+w*32))
A.c2p(D.c.Z(x,4),d)},
dGm(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.v(d.a,d.d+(w-32))
A.c2p(D.c.Z(x,4),d)},
dGo(d){A.c2p(128,d)},
dGw(d){var x
for(x=0;x<8;++x)d.tk(x*32,8,d,-32)},
dGu(d){var x,w,v,u,t
for(x=0,w=0;w<8;++w){v=J.v(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.vg(u,t,t+8,v)
x+=32}},
c2q(d,e){var x,w,v
for(x=0;x<8;++x){w=e.a
v=e.d+x*32
J.vg(w,v,v+8,d)}},
dGp(d){var x,w
for(x=8,w=0;w<8;++w)x+=J.v(d.a,d.d+(w-32))+J.v(d.a,d.d+(-1+w*32))
A.c2q(D.c.Z(x,4),d)},
dGq(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.v(d.a,d.d+(w-32))
A.c2q(D.c.Z(x,3),d)},
dGr(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.v(d.a,d.d+(-1+w*32))
A.c2q(D.c.Z(x,3),d)},
dGs(d){A.c2q(128,d)},
Hh(d,e,f,g,h){var x=e+f+g*32,w=J.v(d.a,d.d+x)+D.c.Z(h,3)
if(!((w&-256)>>>0===0))w=w<0?0:255
d.m(0,x,w)},
c2o(d,e,f,g,h){A.Hh(d,0,0,e,f+g)
A.Hh(d,0,1,e,f+h)
A.Hh(d,0,2,e,f-h)
A.Hh(d,0,3,e,f-g)},
dGc(){var x,w,v,u
if(!$.dbw){for(x=-255;x<=255;++x){w=$.b2O()
v=255+x
u=x<0?-x:x
w.$flags&2&&B.K(w)
w[v]=u
u=$.cTK()
w=D.c.Z(w[v],1)
u.$flags&2&&B.K(u)
u[v]=w}for(x=-1020;x<=1020;++x){w=$.cTL()
if(x<-128)v=-128
else v=x>127?127:x
w.$flags&2&&B.K(w)
w[1020+x]=v}for(x=-112;x<=112;++x){w=$.b2P()
if(x<-16)v=-16
else v=x>15?15:x
w.$flags&2&&B.K(w)
w[112+x]=v}for(x=-255;x<=510;++x){w=$.r6()
if(x<0)v=0
else v=x>255?255:x
w.$flags&2&&B.K(w)
w[255+x]=v}$.dbw=!0}},
c2m:function c2m(){},
dG7(){var x,w=J.jG(3,y.D)
for(x=0;x<3;++x)w[x]=new Uint8Array(11)
return new A.acT(w)},
dGL(){var x,w,v,u,t=new Uint8Array(3),s=J.jG(4,y.cm)
for(x=y.V,w=0;w<4;++w){v=J.jG(8,x)
for(u=0;u<8;++u)v[u]=A.dG7()
s[w]=v}D.H.mB(t,0,3,255)
return new A.c2w(t,s)},
c2r:function c2r(){this.d=$},
c2v:function c2v(){this.b=null},
c2x:function c2x(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
acT:function acT(d){this.a=d},
c2w:function c2w(d,e){this.a=d
this.b=e},
c2n:function c2n(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
Oa:function Oa(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
aKf:function aKf(){this.b=this.a=0},
aKh:function aKh(d,e,f){this.a=d
this.b=e
this.c=f},
aKg:function aKg(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
aKi:function aKi(d,e,f){this.a=d
this.b=e
this.c=f},
cYR(d,e){var x,w=B.a([],y.A),v=B.a([],y.F),u=new Uint32Array(2),t=new A.aKd(d,u)
u=t.d=J.dx(D.bM.gaq(u),0,null)
x=d.cE()
u.$flags&2&&B.K(u)
u[0]=x
x=d.cE()
u.$flags&2&&B.K(u)
u[1]=x
x=d.cE()
u.$flags&2&&B.K(u)
u[2]=x
x=d.cE()
u.$flags&2&&B.K(u)
u[3]=x
x=d.cE()
u.$flags&2&&B.K(u)
u[4]=x
x=d.cE()
u.$flags&2&&B.K(u)
u[5]=x
x=d.cE()
u.$flags&2&&B.K(u)
u[6]=x
x=d.cE()
u.$flags&2&&B.K(u)
u[7]=x
return new A.acV(t,e,w,v)},
Hi(d,e){return D.c.Z(d+D.c.ez(1,e)-1,e)},
acV:function acV(d,e,f,g){var _=this
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
ay5:function ay5(d,e,f,g){var _=this
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
aKd:function aKd(d,e){var _=this
_.a=0
_.b=d
_.c=e
_.d=$},
c2s:function c2s(d,e){this.a=d
this.b=e},
c2t(d,e,f){var x=d[e]
d.$flags&2&&B.K(d)
d[e]=(((x&4278255360)>>>0)+((f&4278255360)>>>0)&4278255360|(x&16711935)+(f&16711935)&16711935)>>>0},
C_(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
Oc(d){if(d<0)return 0
if(d>255)return 255
return d},
c2u(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
dGx(d,e,f){return 4278190080},
dGy(d,e,f){return e},
dGD(d,e,f){return d[f]},
dGE(d,e,f){return d[f+1]},
dGF(d,e,f){return d[f-1]},
dGG(d,e,f){var x=d[f]
return A.C_(A.C_(e,d[f+1]),x)},
dGH(d,e,f){return A.C_(e,d[f-1])},
dGI(d,e,f){return A.C_(e,d[f])},
dGJ(d,e,f){return A.C_(d[f-1],d[f])},
dGK(d,e,f){return A.C_(d[f],d[f+1])},
dGz(d,e,f){var x=d[f-1],w=d[f],v=d[f+1]
return A.C_(A.C_(e,x),A.C_(w,v))},
dGA(d,e,f){var x=d[f],w=d[f-1]
return A.c2u(x>>>24,e>>>24,w>>>24)+A.c2u(x>>>16&255,e>>>16&255,w>>>16&255)+A.c2u(x>>>8&255,e>>>8&255,w>>>8&255)+A.c2u(x&255,e&255,w&255)<=0?x:e},
dGB(d,e,f){var x=d[f],w=d[f-1]
return(A.Oc((e>>>24)+(x>>>24)-(w>>>24))<<24|A.Oc((e>>>16&255)+(x>>>16&255)-(w>>>16&255))<<16|A.Oc((e>>>8&255)+(x>>>8&255)-(w>>>8&255))<<8|A.Oc((e&255)+(x&255)-(w&255)))>>>0},
dGC(d,e,f){var x,w,v,u=d[f],t=d[f-1],s=A.C_(e,u)
u=s>>>24
x=s>>>16&255
w=s>>>8&255
v=s>>>0&255
return(A.Oc(u+D.c.aK(u-(t>>>24),2))<<24|A.Oc(x+D.c.aK(x-(t>>>16&255),2))<<16|A.Oc(w+D.c.aK(w-(t>>>8&255),2))<<8|A.Oc(v+D.c.aK(v-(t&255),2)))>>>0},
Ob:function Ob(d,e){this.a=d
this.b=e},
aKe:function aKe(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
c3m:function c3m(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
ada:function ada(){},
ay6:function ay6(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=$
_.r=1
_.x=_.w=$},
d5E(){var x=new Uint8Array(128),w=new Int16Array(128)
x=new A.ax9(x,w,new Int16Array(128))
x.acs(0)
return x},
dw3(){var x,w=J.jG(5,y.x)
for(x=0;x<5;++x)w[x]=A.d5E()
return new A.a3M(w)},
ax9:function ax9(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$
_.f=_.e=0},
a3M:function a3M(d){this.a=d},
WZ:function WZ(d,e){this.a=d
this.b=e},
aKI:function aKI(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
ay7:function ay7(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
c3n:function c3n(){this.b=this.a=null},
d5H(d){return new A.a4d(d.a,d.b,D.H.m_(d.c,0))},
bue:function bue(d,e){this.a=d
this.b=e},
a4d:function a4d(d,e,f){this.a=d
this.b=e
this.c=f},
iQ(d,e,f,g,h,i,j,k,l,m,n,o,p){var x,w=new A.Ey(null,null,null,d,k,h,g,0)
w.glw().push(w)
w.c=j
if(e!=null)w.e=A.a2U(e)
x=!1
if(m==null)if(p)x=w.gdH()===C.hE||w.gdH()===C.it||w.gdH()===C.iu||w.gdH()===C.aj||w.gdH()===C.cV
w.aqq(o,i,f,l,x?w.b79(f,n,l):m)
return w},
axw(d,e,f,g){var x,w,v,u=null,t=d.e
t=t==null?u:A.a2U(t)
x=d.c
x=x==null?u:A.d5H(x)
w=d.w
v=d.r
t=new A.Ey(u,x,t,u,v,w,d.y,d.z)
t.b10(d,e,f,g)
return t},
Ex(d,e,f){var x,w,v,u,t=null,s=d.a
s=s==null?t:s.rO(0,f)
x=d.e
x=x==null?t:A.a2U(x)
w=d.c
w=w==null?t:A.d5H(w)
v=d.w
u=d.r
s=new A.Ey(s,w,x,t,u,v,d.y,d.z)
s.b1_(d,e,f)
return s},
awd:function awd(d,e){this.a=d
this.b=e},
Ey:function Ey(d,e,f,g,h,i,j,k){var _=this
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
bv8:function bv8(d,e){this.a=d
this.b=e},
bv7:function bv7(){},
nl:function nl(){},
dwN(d,e,f){return new A.Sw(new Uint16Array(d*e*f),d,e,f)},
Sw:function Sw(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
dwO(d,e,f){return new A.Sx(new Float32Array(d*e*f),d,e,f)},
Sx:function Sx(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a4l:function a4l(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a4m:function a4m(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a4n:function a4n(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a4o:function a4o(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
Sy:function Sy(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
Sz:function Sz(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
SA:function SA(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
dwP(d,e,f){return new A.SB(new Uint32Array(d*e*f),d,e,f)},
SB:function SB(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
SC:function SC(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
d5X(d,e,f){return new A.SD(new Uint8Array(d*e*f),null,d,e,f)},
SD:function SD(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
ay8:function ay8(d,e){this.a=d
this.b=e},
bH5:function bH5(){},
aCB:function aCB(d,e,f){this.c=d
this.a=e
this.b=f},
aCC:function aCC(d,e,f){this.c=d
this.a=e
this.b=f},
aCD:function aCD(d,e,f){this.c=d
this.a=e
this.b=f},
aCE:function aCE(d,e,f){this.c=d
this.a=e
this.b=f},
aCF:function aCF(d,e,f){this.c=d
this.a=e
this.b=f},
aCG:function aCG(d,e,f){this.c=d
this.a=e
this.b=f},
aCH:function aCH(d,e,f){this.c=d
this.a=e
this.b=f},
a7e:function a7e(d,e,f){this.c=d
this.a=e
this.b=f},
d84(d){return new A.wh(new Uint8Array(B.c9(d.c)),d.a,d.b)},
wh:function wh(d,e,f){this.c=d
this.a=e
this.b=f},
cX2(d){return new A.LB(-1,0,-d.c,d)},
LB:function LB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cX3(d){return new A.LC(-1,0,-d.c,d)},
LC:function LC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cX4(d){return new A.LD(-1,0,-d.c,d)},
LD:function LD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cX5(d){return new A.LE(-1,0,-d.c,d)},
LE:function LE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cX6(d){return new A.LF(-1,0,-d.c,d)},
LF:function LF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cX7(d){return new A.LG(-1,0,-d.c,d)},
LG:function LG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wj(d,e,f,g,h){d.hO(0,e-1,f)
return new A.aCX(d,e,e+g-1,f+h-1)},
aCX:function aCX(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g},
a7v(d){return new A.LH(-1,0,0,-1,0,d)},
LH:function LH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cX8(d){return new A.LI(-1,0,-d.c,d)},
LI:function LI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7w(d){return new A.LJ(-1,0,0,-2,0,d)},
LJ:function LJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cX9(d){return new A.LK(-1,0,-d.c,d)},
LK:function LK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7x(d){return new A.LL(-1,0,0,-(d.c<<2>>>0),d)},
LL:function LL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bHv(d){return new A.LM(-1,0,-d.c,d)},
LM:function LM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h_:function h_(){},
dSq(d,e){switch(e.a){case 0:A.b2e(d)
break
case 1:A.dSu(d)
break
case 2:A.dSs(d)
break}return d},
dSu(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.glw().length
for(x=y.g,w=0;w<h;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?i:t.a
if(r==null)r=0
q=s?i:t.b
if(q==null)q=0
p=D.c.aK(q,2)
t=d.a
if((t==null?i:t.gf8())!=null)for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.er(m,n,i)
if(l==null)l=new A.h_()
t=u.a
k=t==null?i:t.er(m,o,i)
if(k==null)k=new A.h_()
j=l.gdI(l)
l.sdI(0,k.gdI(k))
k.sdI(0,j)}else for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.er(m,n,i)
if(l==null)l=new A.h_()
t=u.a
k=t==null?i:t.er(m,o,i)
if(k==null)k=new A.h_()
j=l.gar(l)
l.sar(0,k.gar(k))
k.sar(0,j)
j=l.gaE()
l.saE(k.gaE())
k.saE(j)
j=l.gaF(l)
l.saF(0,k.gaF(k))
k.saF(0,j)
j=l.gaU(l)
l.saU(0,k.gaU(k))
k.saU(0,j)}}return d},
b2e(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=d.glw().length
for(x=y.g,w=0;w<g;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?h:t.a
if(r==null)r=0
q=s?h:t.b
if(q==null)q=0
p=D.c.aK(r,2)
t=d.a
if((t==null?h:t.gf8())!=null)for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.er(l,n,h)
if(k==null)k=new A.h_()
t=u.a
j=t==null?h:t.er(m,n,h)
if(j==null)j=new A.h_()
i=k.gdI(k)
k.sdI(0,j.gdI(j))
j.sdI(0,i)}else for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.er(l,n,h)
if(k==null)k=new A.h_()
t=u.a
j=t==null?h:t.er(m,n,h)
if(j==null)j=new A.h_()
i=k.gar(k)
k.sar(0,j.gar(j))
j.sar(0,i)
i=k.gaE()
k.saE(j.gaE())
j.saE(i)
i=k.gaF(k)
k.saF(0,j.gaF(j))
j.saF(0,i)
i=k.gaU(k)
k.saU(0,j.gaU(j))
j.saU(0,i)}}return d},
dSs(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=d.glw().length
for(x=y.g,w=0;w<f;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?g:t.a
if(r==null)r=0
q=s?g:t.b
if(q==null)q=0
p=D.c.aK(q,2)
if((s?g:t.gf8())!=null)for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.er(k,m,g)
if(j==null)j=new A.h_()
t=u.a
i=t==null?g:t.er(l,o,g)
if(i==null)i=new A.h_()
h=j.gdI(j)
j.sdI(0,i.gdI(i))
i.sdI(0,h)}else for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.er(k,m,g)
if(j==null)j=new A.h_()
t=u.a
i=t==null?g:t.er(l,o,g)
if(i==null)i=new A.h_()
h=j.gar(j)
j.sar(0,i.gar(i))
i.sar(0,h)
h=j.gaE()
j.saE(i.gaE())
i.saE(h)
h=j.gaF(j)
j.saF(0,i.gaF(i))
i.saF(0,h)
h=j.gaU(j)
j.saU(0,i.gaU(i))
i.saU(0,h)}}return d},
bog:function bog(d,e){this.a=d
this.b=e},
co(d){return new A.axC(d)},
axC:function axC(d){this.a=d},
de(d,e,f,g){var x=J.a_(d),w=x.gA(d)
x=f==null?x.gA(d):g+f
return new A.nn(d,g,Math.min(w,x),g,e)},
ct(d,e,f){var x=d.a,w=d.d,v=J.bk(x),u=e==null?d.c:d.d+f+e
return new A.nn(x,d.b,Math.min(v,u),w+f,d.e)},
nn:function nn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bF3:function bF3(d){var _=this
_.a=$
_.b=10
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=d
_.ax=_.at=$},
rT(d,e){return new A.aCl(d,new Uint8Array(e))},
aCl:function aCl(d,e){this.a=0
this.b=d
this.c=e},
bJj:function bJj(){},
pq:function pq(d,e){this.a=d
this.b=e},
bM7:function bM7(d,e){this.a=d
this.b=e},
bZz:function bZz(d,e,f){this.a=d
this.d=e
this.e=f},
d7w(d){return new Int8Array(d)},
dFJ(d){throw B.p(B.aL("Uint64List not supported on the web."))},
dxa(d,e,f){return J.cU7(d,e,f)},
db9(d,e){return J.pV(d,e,null)},
duZ(d){return J.b30(d,0,null)},
dv_(d){return d.acZ(0,0,null)},
dSN(d){var x,w,v,u,t=d.gA(0)
for(x=1,w=0;t>0;){v=3800>t?t:3800
t-=v
for(;--v,v>=0;){u=d.b
u.toString
x+=u[d.c++]
w+=x}x=D.c.au(x,65521)
w=D.c.au(w,65521)}return(w<<16|x)>>>0},
zm(d,e){var x,w,v=J.a_(d),u=v.gA(d)
e^=4294967295
for(x=0;u>=8;){w=x+1
e=C.iB[(e^v.h(d,x))&255]^e>>>8
x=w+1
e=C.iB[(e^v.h(d,w))&255]^e>>>8
w=x+1
e=C.iB[(e^v.h(d,x))&255]^e>>>8
x=w+1
e=C.iB[(e^v.h(d,w))&255]^e>>>8
w=x+1
e=C.iB[(e^v.h(d,x))&255]^e>>>8
x=w+1
e=C.iB[(e^v.h(d,w))&255]^e>>>8
w=x+1
e=C.iB[(e^v.h(d,x))&255]^e>>>8
x=w+1
e=C.iB[(e^v.h(d,w))&255]^e>>>8
u-=8}if(u>0)do{w=x+1
e=C.iB[(e^v.h(d,x))&255]^e>>>8
if(--u,u>0){x=w
continue}else break}while(!0)
return(e^4294967295)>>>0},
d_q(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s,r,q
if(m==null)m=0
if(n==null)n=0
if(l==null)l=e.ge7(0)
if(k==null)k=e.ge3(0)
if(h==null)h=d.ge7(0)<e.ge7(0)?d.ge7(0):e.ge7(0)
if(g==null)g=d.ge3(0)<e.ge3(0)?d.ge3(0):e.ge3(0)
x=f===C.BR
if(!x&&d.gtc())d=d.aFs(d.gr2())
w=k/g
v=l/h
u=y.p
t=J.jG(g,u)
for(s=0;s<g;++s)t[s]=n+D.e.L(s*w)
r=J.jG(h,u)
for(q=0;q<h;++q)r[q]=m+D.e.L(q*v)
if(x)A.dLJ(e,d,i,j,h,g,r,t,null,C.LE)
else A.dLi(e,d,i,j,h,g,r,t,f,!1,null,C.LE)
return d},
dLJ(d,e,f,g,h,i,j,k,l,m){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.er(t,s,x)
if(x==null)x=new A.h_()
e.BQ(f+u,v,x)}},
dLi(d,e,f,g,h,i,j,k,l,m,n,o){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.er(t,s,x)
if(x==null)x=new A.h_()
A.dS1(e,f+u,v,x,l,!1,n,o)}},
dS1(a4,a5,a6,a7,a8,a9,b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
if(!a4.aJu(a5,a6))return a4
if(a8===C.BR||a4.gtc())if(a4.aJu(a5,a6)){a4.oG(a5,a6).je(0,a7)
return a4}x=a7.gj9()
w=a7.giT()
v=a7.gj1()
u=a7.gA(a7)<4?1:a7.gfS()
if(u===0)return a4
t=a4.oG(a5,a6)
s=t.gj9()
r=t.giT()
q=t.gj1()
p=t.gfS()
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
m=D.e.aM(u,0.01,1)
n=u<0
i=n?0:1
h=D.e.aM(x/m*i,0,0.99)
i=D.e.aM(u,0.01,1)
m=n?0:1
g=D.e.aM(w/i*m,0,0.99)
m=D.e.aM(u,0.01,1)
n=n?0:1
f=D.e.aM(v/m*n,0,0.99)
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
t.sj9(x*u+s*p*a3)
t.siT(w*u+r*p*a3)
t.sj1(v*u+q*p*a3)
t.sfS(u+p*a3)
return a4},
dSf(d,e,f,g,h,i,j){var x,w=D.e.aM(Math.min(g,h),0,d.ge7(0)-1),v=D.e.aM(Math.min(i,j),0,d.ge3(0)-1),u=D.e.aM(Math.max(g,h),0,d.ge7(0)-1),t=D.e.aM(Math.max(i,j),0,d.ge3(0)-1),s=d.a.rf(0,w,v,u-w+1,t-v+1)
for(x=s.a;s.t();)x.je(0,f)
return d},
duB(a4,a5,a6,a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=b0<16384,a3=a6>a8?a8:a6
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
if(a2){A.a31(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.a31(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.a31(f,d,v)
a1=v[0]
u&2&&B.K(a4)
a4[j]=a1
a4[i]=v[1]
A.a31(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}else{A.a32(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.a32(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.a32(f,d,v)
a1=v[0]
u&2&&B.K(a4)
a4[j]=a1
a4[i]=v[1]
A.a32(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}}if(n){h=j+r
if(a2){A.a31(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&B.K(a4)
a4[h]=a1}else{A.a32(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&B.K(a4)
a4[h]=a1}u&2&&B.K(a4)
a4[j]=f}}if((a8&x)>>>0!==0){k=l+m
for(j=l;j<=k;j+=o){i=j+p
if(a2){A.a31(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&B.K(a4)
a4[i]=n}else{A.a32(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&B.K(a4)
a4[i]=n}u&2&&B.K(a4)
a4[j]=f}}w=x>>>1}},
a31(d,e,f){var x,w,v,u,t=$.oO()
t.$flags&2&&B.K(t)
t[0]=d
x=$.pS()
w=x[0]
t[0]=e
v=x[0]
u=w+(v&1)+D.c.Z(v,1)
f[0]=u
f[1]=u-v},
a32(d,e,f){var x=d-D.c.Z(e,1)&65535
f[1]=x
f[0]=e+x-32768&65535},
cRL(d){var x,w,v,u,t,s,r,q,p,o,n=null
if(A.d6B().Tl(d))return new A.ayi()
x=new A.aDa(A.d6j())
if(x.JR(d))return x
w=new A.brH()
w.f=A.de(d,!1,n,0)
w.a=new A.awo(B.a([],y.b))
if(w.asR())return w
v=new A.c3n()
if(v.JR(d))return v
u=new A.bXr()
if(u.axD(A.de(d,!1,n,0))!=null)return u
if(A.d8s(d).c===943870035)return new A.bJ9()
if(A.duA(d))return new A.bn4()
if(A.cUE(A.de(d,!1,n,0)))return new A.apn(!1)
t=new A.bWk()
s=A.de(d,!1,n,0)
r=t.a=new A.aIo(C.Aw)
r.oA(0,s)
if(r.aJO())return t
q=new A.bug()
r=A.de(d,!1,n,0)
q.a=r
r=A.d5I(r)
q.b=r
if(r!=null)return q
p=new A.bJe()
if(p.pA(d)!=null)return p
o=new A.bI5(B.a([],y.T))
if(o.JR(d))return o
return n},
dfh(d){var x=A.cRL(d)
return x==null?null:x.ny(0,d,null)},
dUH(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if($.cZL==null){x=$.cZL=new Uint8Array(768)
for(w=-256;w<0;++w)x[256+w]=0
for(w=0;w<256;++w)x[256+w]=w
for(w=256;w<512;++w)x[256+w]=255}for(x=a6.$flags|0,w=0;w<64;++w){v=a4[w]
u=a3[w]
x&2&&B.K(a6)
a6[w]=v*u}for(t=0,w=0;w<8;++w,t+=8){v=1+t
u=a6[v]
if(u===0&&a6[2+t]===0&&a6[3+t]===0&&a6[4+t]===0&&a6[5+t]===0&&a6[6+t]===0&&a6[7+t]===0){v=D.c.Z(5793*a6[t]+512,10)
s=(v&2147483647)-((v&2147483648)>>>0)
x&2&&B.K(a6)
a6[t]=s
a6[t+1]=s
a6[t+2]=s
a6[t+3]=s
a6[t+4]=s
a6[t+5]=s
a6[t+6]=s
a6[t+7]=s
continue}r=D.c.Z(5793*a6[t]+128,8)
q=(r&2147483647)-((r&2147483648)>>>0)
r=4+t
p=D.c.Z(5793*a6[r]+128,8)
o=(p&2147483647)-((p&2147483648)>>>0)
p=2+t
n=a6[p]
m=6+t
l=a6[m]
k=7+t
j=a6[k]
i=D.c.Z(2896*(u-j)+128,8)
h=(i&2147483647)-((i&2147483648)>>>0)
j=D.c.Z(2896*(u+j)+128,8)
g=(j&2147483647)-((j&2147483648)>>>0)
j=3+t
u=a6[j]<<4
f=(u&2147483647)-((u&2147483648)>>>0)
u=5+t
i=a6[u]<<4
e=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.Z(q-o+1,1)
s=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.Z(q+o+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.Z(n*3784+l*1567+128,8)
i=(i&2147483647)-((i&2147483648)>>>0)
d=D.c.Z(n*1567-l*3784+128,8)
n=(d&2147483647)-((d&2147483648)>>>0)
d=D.c.Z(h-e+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.c.Z(h+e+1,1)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.Z(g+f+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.c.Z(g-f+1,1)
f=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.c.Z(q-i+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
i=D.c.Z(q+i+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.Z(s-n+1,1)
i=(i&2147483647)-((i&2147483648)>>>0)
a2=D.c.Z(s+n+1,1)
o=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.c.Z(h*2276+a0*3406+2048,12)
s=(a2&2147483647)-((a2&2147483648)>>>0)
a0=D.c.Z(h*3406-a0*2276+2048,12)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.Z(f*799+d*4017+2048,12)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
d=D.c.Z(f*4017-d*799+2048,12)
f=(d&2147483647)-((d&2147483648)>>>0)
x&2&&B.K(a6)
a6[t]=q+s
a6[k]=q-s
a6[v]=o+a0
a6[m]=o-a0
a6[p]=i+f
a6[u]=i-f
a6[j]=a1+h
a6[r]=a1-h}for(w=0;w<8;++w){v=8+w
u=a6[v]
if(u===0&&a6[16+w]===0&&a6[24+w]===0&&a6[32+w]===0&&a6[40+w]===0&&a6[48+w]===0&&a6[56+w]===0){u=D.c.Z(5793*a6[w]+8192,14)
s=(u&2147483647)-((u&2147483648)>>>0)
x&2&&B.K(a6)
a6[w]=s
a6[v]=s
a6[16+w]=s
a6[24+w]=s
a6[32+w]=s
a6[40+w]=s
a6[48+w]=s
a6[56+w]=s
continue}r=D.c.Z(5793*a6[w]+2048,12)
q=(r&2147483647)-((r&2147483648)>>>0)
r=32+w
p=D.c.Z(5793*a6[r]+2048,12)
o=(p&2147483647)-((p&2147483648)>>>0)
p=16+w
n=a6[p]
m=48+w
l=a6[m]
k=56+w
j=a6[k]
i=D.c.Z(2896*(u-j)+2048,12)
h=(i&2147483647)-((i&2147483648)>>>0)
j=D.c.Z(2896*(u+j)+2048,12)
g=(j&2147483647)-((j&2147483648)>>>0)
j=24+w
f=a6[j]
u=40+w
e=a6[u]
i=D.c.Z(q-o+1,1)
s=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.Z(q+o+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.Z(n*3784+l*1567+2048,12)
i=(i&2147483647)-((i&2147483648)>>>0)
d=D.c.Z(n*1567-l*3784+2048,12)
n=(d&2147483647)-((d&2147483648)>>>0)
d=D.c.Z(h-e+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.c.Z(h+e+1,1)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.Z(g+f+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.c.Z(g-f+1,1)
f=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.c.Z(q-i+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
i=D.c.Z(q+i+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.Z(s-n+1,1)
i=(i&2147483647)-((i&2147483648)>>>0)
a2=D.c.Z(s+n+1,1)
o=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.c.Z(h*2276+a0*3406+2048,12)
s=(a2&2147483647)-((a2&2147483648)>>>0)
a0=D.c.Z(h*3406-a0*2276+2048,12)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.Z(f*799+d*4017+2048,12)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
d=D.c.Z(f*4017-d*799+2048,12)
f=(d&2147483647)-((d&2147483648)>>>0)
x&2&&B.K(a6)
a6[w]=q+s
a6[k]=q-s
a6[v]=o+a0
a6[m]=o-a0
a6[p]=i+f
a6[u]=i-f
a6[j]=a1+h
a6[r]=a1-h}for(x=$.cZL,v=a5.$flags|0,w=0;w<64;++w){x.toString
u=D.c.Z(a6[w]+8,4)
u=x[384+((u&2147483647)-((u&2147483648)>>>0))]
v&2&&B.K(a5)
a5[w]=u}},
dSU(d9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=null,d7="ifd0",d8=d9.r
if(d8.h(0,d7).a.a4(0,274)){x=d8.h(0,d7).giO(0)
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
r=A.iQ(d6,d6,C.aj,0,C.bG,s,d6,0,3,d6,C.aj,t,!1)
r.e=A.a2U(d8)
r.gxS().h(0,d7).siO(0,d6)
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
e=n[D.c.i4(g,l)]
f=q-g
d=0
while(!0){a0=d9.d.e
a0.toString
if(!(d<a0))break
a1=e[D.c.i4(d,m)]
if(h){a0=r.a
if(a0!=null)a0.fF(p-d,g,a1,a1,a1)}else if(i){a0=r.a
if(a0!=null)a0.fF(p-d,f,a1,a1,a1)}else if(j){a0=r.a
if(a0!=null)a0.fF(d,f,a1,a1,a1)}else if(k){a0=r.a
if(a0!=null)a0.fF(g,d,a1,a1,a1)}else if(v){a0=r.a
if(a0!=null)a0.fF(f,d,a1,a1,a1)}else if(x){a0=r.a
if(a0!=null)a0.fF(f,p-d,a1,a1,a1)}else{a0=r.a
if(d8){if(a0!=null)a0.fF(g,p-d,a1,a1,a1)}else if(a0!=null)a0.fF(d,g,a1,a1,a1)}++d}++g}break
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
b1=D.c.i4(g,l)
b2=D.c.i4(g,a8)
b3=D.c.i4(g,b0)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
f=q-g
d=0
while(!0){a0=d9.d.e
a0.toString
if(!(d<a0))break
b6=D.c.i4(d,m)
b7=D.c.i4(d,a7)
b8=D.c.i4(d,a9)
a1=e[b6]<<8>>>0
b9=b4[b7]-128
c0=b5[b8]-128
a0=D.c.Z(a1+359*c0+128,8)
c1=D.c.aM((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.c.Z(a1-88*b9-183*c0+128,8)
c2=D.c.aM((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.c.Z(a1+454*b9+128,8)
c3=D.c.aM((a0&2147483647)-((a0&2147483648)>>>0),0,255)
if(h){a0=r.a
if(a0!=null)a0.fF(p-d,g,c1,c2,c3)}else if(i){a0=r.a
if(a0!=null)a0.fF(p-d,f,c1,c2,c3)}else if(j){a0=r.a
if(a0!=null)a0.fF(d,f,c1,c2,c3)}else if(k){a0=r.a
if(a0!=null)a0.fF(g,d,c1,c2,c3)}else if(v){a0=r.a
if(a0!=null)a0.fF(f,d,c1,c2,c3)}else if(x){a0=r.a
if(a0!=null)a0.fF(f,p-d,c1,c2,c3)}else{a0=r.a
if(d8){if(a0!=null)a0.fF(g,p-d,c1,c2,c3)}else if(a0!=null)a0.fF(d,g,c1,c2,c3)}++d}++g}break
case 4:x=d9.c
if(x==null)throw B.p(A.co("Unsupported color mode (4 components)"))
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
b1=D.c.i4(g,l)
b2=D.c.i4(g,a8)
b3=D.c.i4(g,b0)
c8=D.c.i4(g,c7)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
c9=c5[c8]
a0=q-g
d=0
while(!0){d0=d9.d.e
d0.toString
if(!(d<d0))break
b6=D.c.i4(d,m)
b7=D.c.i4(d,a7)
b8=D.c.i4(d,a9)
d1=D.c.i4(d,c6)
if(x){d2=e[b6]
d3=b4[b7]
a1=b5[b8]
d4=c9[d1]}else{a1=e[b6]
b9=b4[b7]
c0=b5[b8]
d4=c9[d1]
d0=c0-128
d2=255-D.c.aM(D.e.L(a1+1.402*d0),0,255)
d5=b9-128
d3=255-D.e.L(D.e.aM(a1-0.3441363*d5-0.71413636*d0,0,255))
a1=255-D.c.aM(D.e.L(a1+1.772*d5),0,255)}d0=D.c.Z(d2*d4,8)
c1=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.c.Z(d3*d4,8)
c2=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.c.Z(a1*d4,8)
c3=(d0&2147483647)-((d0&2147483648)>>>0)
if(f){d0=r.a
if(d0!=null)d0.fF(p-d,g,c1,c2,c3)}else if(h){d0=r.a
if(d0!=null)d0.fF(p-d,a0,c1,c2,c3)}else if(i){d0=r.a
if(d0!=null)d0.fF(d,a0,c1,c2,c3)}else if(j){d0=r.a
if(d0!=null)d0.fF(g,d,c1,c2,c3)}else if(k){d0=r.a
if(d0!=null)d0.fF(a0,d,c1,c2,c3)}else if(v){d0=r.a
if(d0!=null)d0.fF(a0,p-d,c1,c2,c3)}else{d0=r.a
if(d8){if(d0!=null)d0.fF(g,p-d,c1,c2,c3)}else if(d0!=null)d0.fF(d,g,c1,c2,c3)}++d}++g}break
default:throw B.p(A.co("Unsupported color mode"))}return r},
dGZ(d,e,f,g,h,i){A.dGW(i,d,e,f,g,h,!0,i)},
dH_(d,e,f,g,h,i){A.dGX(i,d,e,f,g,h,!0,i)},
dGY(d,e,f,g,h,i){A.dGV(i,d,e,f,g,h,!0,i)},
WY(d,e,f,g,h){var x,w,v
for(x=0;x<g;++x){w=J.v(d.a,d.d+x)
v=J.v(e.a,e.d+x)
J.bZ(f.a,f.d+x,w+v)}},
dGW(d,e,f,g,h,i,j,k){var x,w,v=null,u=h*g,t=h+i,s=A.de(d,!1,v,u),r=A.de(d,!1,v,u),q=A.ct(r,v,0)
if(h===0){r.m(0,0,J.v(s.a,s.d))
A.WY(A.ct(s,v,1),q,A.ct(r,v,1),e-1,!0)
q.d+=g
s.d+=g
r.d+=g
h=1}for(x=-g,w=e-1;h<t;){A.WY(s,A.ct(q,v,x),r,1,!0)
A.WY(A.ct(s,v,1),q,A.ct(r,v,1),w,!0);++h
q.d+=g
s.d+=g
r.d+=g}},
dGX(d,e,f,g,h,i,j,k){var x=null,w=h*g,v=h+i,u=A.de(d,!1,x,w),t=A.de(k,!1,x,w),s=A.ct(t,x,0)
if(h===0){t.m(0,0,J.v(u.a,u.d))
A.WY(A.ct(u,x,1),s,A.ct(t,x,1),e-1,!0)
u.d+=g
t.d+=g
h=1}else s.d-=g
for(;h<v;){A.WY(u,s,t,e,!0);++h
s.d+=g
u.d+=g
t.d+=g}},
dGV(d,e,f,g,h,i,j,k){var x,w,v,u,t,s=null,r=h*g,q=h+i,p=A.de(d,!1,s,r),o=A.de(k,!1,s,r),n=A.ct(o,s,0)
if(h===0){o.m(0,0,J.v(p.a,p.d))
A.WY(A.ct(p,s,1),n,A.ct(o,s,1),e-1,!0)
n.d+=g
p.d+=g
o.d+=g
h=1}for(x=-g;h<q;){A.WY(p,A.ct(n,s,x),o,1,!0)
for(w=1;w<e;++w){v=w-g
u=J.v(n.a,n.d+(w-1))+J.v(n.a,n.d+v)-J.v(n.a,n.d+(v-1))
if((u&4294967040)>>>0===0)t=u
else t=u<0?0:255
v=J.v(p.a,p.d+w)
J.bZ(o.a,o.d+w,v+t)}++h
n.d+=g
p.d+=g
o.d+=g}},
dPx(d){var x="ifd0",w=A.Ex(d,!1,!1)
if(!d.gxS().h(0,x).a.a4(0,274)||d.gxS().h(0,x).giO(0)===1)return w
w.e=A.a2U(d.gxS())
w.gxS().h(0,x).siO(0,null)
switch(d.gxS().h(0,x).giO(0)){case 2:return A.b2e(w)
case 3:return A.dSq(w,C.ayg)
case 4:return A.b2e(A.b27(w,180))
case 5:return A.b2e(A.b27(w,90))
case 6:return A.b27(w,90)
case 7:return A.b2e(A.b27(w,-90))
case 8:return A.b27(w,-90)}return w},
dQk(a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null
a2.gtc()
if(a2.gxS().h(0,"ifd0").a.a4(0,274)&&a2.gxS().h(0,"ifd0").giO(0)!==1)a2=A.dPx(a2)
x=D.e.aD(a3*(a2.ge3(0)/a2.ge7(0)))
if(a3<=0)a3=D.e.aD(x*(a2.ge7(0)/a2.ge3(0)))
w=x
if(a3===a2.ge7(0)&&x===a2.ge3(0))return A.Ex(a2,!1,!1)
v=new Int32Array(a3)
u=a2.ge7(0)/a3
for(t=0;t<a3;++t)v[t]=D.e.L(t*u)
s=new Int32Array(w)
r=a2.ge3(0)/w
for(q=0;q<w;++q)s[q]=D.e.L(q*r)
p=a2.glw().length
for(o=y.g,n=a1,m=0;m<p;++m){l=a2.x
k=(l===$?a2.x=B.a([],o):l)[m]
j=A.axw(k,x,!0,a3)
i=n==null
if(!i)n.oc(j)
if(i)n=j
i=k.a
h=i==null
g=h?a1:i.b
r=(g==null?0:g)/w
if((h?a1:i.gf8())!=null)for(q=0;q<w;++q){f=D.e.L(q*r)
for(t=0;t<a3;++t){i=v[t]
h=k.a
if(h==null)i=a1
else{i=h.oG(i,f)
i=D.e.L(i.gdI(i))}if(i==null)i=0
h=j.a
if(h!=null)h.ni(t,q,i)}}else{e=k.kS(0,0)
for(q=0;q<w;++q)for(t=0;t<a3;++t){i=v[t]
h=s[q]
g=k.a
if(g!=null)g.er(i,h,e)
i=e.gar(e)
h=e.gaE()
g=e.gaF(e)
d=e.gaU(e)
a0=j.a
if(a0!=null)a0.kU(t,q,i,h,g,d)}}}n.toString
return n},
b27(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=D.c.au(a8,360)
a7.gtc()
if(D.c.au(a6,90)===0)switch(D.c.aK(a6,90)){case 1:return A.dO0(a7)
case 2:return A.dNZ(a7)
case 3:return A.dO_(a7)
default:return A.Ex(a7,!1,!1)}x=a6*3.141592653589793/180
w=Math.cos(x)
v=Math.sin(x)
u=a7.ge7(0)
t=a7.ge7(0)
s=a7.ge3(0)
r=a7.ge3(0)
q=0.5*a7.ge7(0)
p=0.5*a7.ge3(0)
s=Math.abs(u*w)+Math.abs(s*v)
o=0.5*s
r=Math.abs(t*v)+Math.abs(r*w)
n=0.5*r
m=a7.glw().length
for(u=y.g,l=a5,k=0;k<m;++k){j=a7.x
i=(j===$?a7.x=B.a([],u):j)[k]
t=l==null
h=t?a5:l.ZT()
if(h==null){g=D.e.L(s)
h=A.axw(a7,D.e.L(r),!0,g)}if(t)l=h
for(t=h.a,t=t.gac(t);t.t();){f=t.gM(t)
e=f.gnS(f)
d=f.goE(f)
g=e-o
a0=d-n
a1=q+g*w+a0*v
a2=p-g*v+a0*w
g=!1
if(a1>=0)if(a2>=0){a0=i.a
a3=a0==null
a4=a3?a5:a0.a
if(a1<(a4==null?0:a4)){g=a3?a5:a0.b
g=a2<(g==null?0:g)}}if(g)h.BQ(e,d,i.aQD(a1,a2,C.aCu))}}l.toString
return l},
dO0(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.glw(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.L)(x),++u){t=x[u]
s=v==null
r=s?k:v.ZT()
if(r==null){q=t.a
p=q==null
o=p?k:q.b
if(o==null)o=0
q=p?k:q.a
r=A.axw(t,q==null?0:q,!0,o)}if(s)v=r
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
s=s==null?k:s.er(m,n-l,k)
r.BQ(l,m,s==null?new A.h_():s);++l}++m}}v.toString
return v},
dNZ(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.glw(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.L)(x),++u){t=x[u]
s=t.a
r=s==null
q=r?k:s.a
p=(q==null?0:q)-1
s=r?k:s.b
o=(s==null?0:s)-1
s=v==null
n=s?k:v.ZT()
if(n==null)n=A.Ex(t,!0,!0)
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
r=r==null?k:r.er(p-l,s,k)
n.BQ(l,m,r==null?new A.h_():r);++l}++m}}v.toString
return v},
dO_(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.glw(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.L)(x),++u){t=x[u]
s=d.a
s=s==null?k:s.a
r=(s==null?0:s)-1
s=v==null
q=s?k:v.ZT()
if(q==null){p=t.a
o=p==null
n=o?k:p.b
if(n==null)n=0
p=o?k:p.a
q=A.axw(t,p==null?0:p,!0,n)}if(s)v=q
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
p=p==null?k:p.er(s,l,k)
q.BQ(l,m,p==null?new A.h_():p);++l}++m}}v.toString
return v},
cRj(d){var x
d=(d&-d)>>>0
x=d!==0?31:32
if((d&65535)!==0)x-=16
if((d&16711935)!==0)x-=8
if((d&252645135)!==0)x-=4
if((d&858993459)!==0)x-=2
return(d&1431655765)!==0?x-1:x},
dVU(d){$.d1h().m(0,0,d)
return $.dkA().h(0,0)},
dge(d,e,f,g){return(D.c.aM(d,0,255)|D.c.aM(e,0,255)<<8|D.c.aM(f,0,255)<<16|D.c.aM(g,0,255)<<24)>>>0},
xf(d,e,f){var x,w,v,u,t,s=e.gA(e),r=e.gdH(),q=d.gf8(),p=q==null?null:q.gdH()
if(p==null)p=d.gdH()
x=d.gA(d)
if(s===1){w=d.gA(d)>2?d.gkd():d.h(0,0)
e.m(0,0,A.b26(B.ht(d.h(0,0))?D.e.fU(w):w,p,r))}else if(s<=x)for(v=0;v<s;++v)e.m(0,v,A.b26(d.h(0,v),p,r))
else if(x===2){u=A.b26(d.h(0,0),p,r)
if(s===3){e.m(0,0,u)
e.m(0,1,u)
e.m(0,2,u)}else{f=A.b26(d.h(0,1),p,r)
e.m(0,0,u)
e.m(0,1,u)
e.m(0,2,u)
e.m(0,3,f)}}else{for(v=0;v<x;++v)e.m(0,v,A.b26(d.h(0,v),p,r))
t=x===1?e.h(0,0):0
for(v=x;v<s;++v)e.m(0,v,v===3?f:t)}return e},
r1(d,e,f,g,h){var x,w,v=d.gf8(),u=v==null?null:v.gdH()
if(u==null)u=d.gdH()
v=h==null
x=v?null:h.gdH()
f=x==null?f:x
if(f==null)f=d.gdH()
x=v?null:h.gA(h)
g=x==null?g:x
if(g==null)g=d.gA(d)
if(e==null)e=0
if(f===u&&g===d.gA(d)){if(v)return d.ew(0)
h.je(0,d)
return h}switch(f.a){case 3:if(v)w=new A.zY(new Uint8Array(g))
else w=h
return A.xf(d,w,e)
case 0:return A.xf(d,v?new A.QK(g,0):h,e)
case 1:return A.xf(d,v?new A.QM(g,0):h,e)
case 2:if(v){v=g<3?1:2
w=new A.QO(g,new Uint8Array(v))}else w=h
return A.xf(d,w,e)
case 4:if(v)w=new A.QL(new Uint16Array(g))
else w=h
return A.xf(d,w,e)
case 5:if(v)w=new A.QN(new Uint32Array(g))
else w=h
return A.xf(d,w,e)
case 6:if(v)w=new A.QH(new Int8Array(g))
else w=h
return A.xf(d,w,e)
case 7:if(v)w=new A.QF(new Int16Array(g))
else w=h
return A.xf(d,w,e)
case 8:if(v)w=new A.QG(new Int32Array(g))
else w=h
return A.xf(d,w,e)
case 9:if(v)w=new A.QC(new Uint16Array(g))
else w=h
return A.xf(d,w,e)
case 10:if(v)w=new A.QD(new Float32Array(g))
else w=h
return A.xf(d,w,e)
case 11:if(v)w=new A.QE(new Float64Array(g))
else w=h
return A.xf(d,w,e)}},
k9(d){return 0.299*d.gar(d)+0.587*d.gaE()+0.114*d.gaF(d)},
deY(d,e,f,g,h){var x=1-g/255
h[0]=D.e.aD(255*(1-d/255)*x)
h[1]=D.e.aD(255*(1-e/255)*x)
h[2]=D.e.aD(255*(1-f/255)*x)},
hP(d){var x,w,v,u=$.d1g()
u.$flags&2&&B.K(u)
u[0]=d
x=$.dkz()[0]
if(d===0)return x>>>16
if($.iP==null)A.jE()
w=$.d4P.c9()[x>>>23&511]
if(w!==0){v=x&8388607
return w+(v+4095+(v>>>13&1)>>>13)}return A.duX(x)},
duX(d){var x,w,v=d>>>16&32768,u=(d>>>23&255)-112,t=d&8388607
if(u<=0){if(u<-10)return v
t|=8388608
x=14-u
return(v|D.c.oJ(t+(D.c.f9(1,x-1)-1)+(D.c.hs(t,x)&1),x))>>>0}else if(u===143)if(t===0)return v|31744
else{t=t>>>13
w=t===0?1:0
return v|t|w|31744}else{t=t+4095+(t>>>13&1)
if((t&8388608)!==0){++u
t=0}if(u>30)return v|31744
return(v|u<<10|t>>>13)>>>0}},
jE(){var x,w,v,u,t=$.iP
if(t!=null)return t
x=new Uint32Array(65536)
$.iP=J.b30(D.bM.gaq(x),0,null)
t=new Uint16Array(512)
$.d4P.b=t
for(w=0;w<256;++w){v=(w&255)-112
if(v<=0||v>=30){t[w]=0
t[(w|256)>>>0]=0}else{u=v<<10>>>0
t[w]=u
t[(w|256)>>>0]=(u|32768)>>>0}}for(w=0;w<65536;++w)x[w]=A.duY(w)
t=$.iP
t.toString
return t},
duY(d){var x,w=d>>>15&1,v=d>>>10&31,u=d&1023
if(v===0)if(u===0)return w<<31>>>0
else{for(;(u&1024)===0;){u=u<<1;--v}++v
u&=4294966271}else if(v===31){x=w<<31
if(u===0)return(x|2139095040)>>>0
else return(x|u<<13|2139095040)>>>0}return(w<<31|v+112<<23|u<<13)>>>0}},C,E
J=c[1]
B=c[0]
D=c[2]
A=a.updateHolder(c[66],A)
C=c[318]
E=c[152]
A.a49.prototype={
a6t(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.length
for(x=0;x<k;++x){w=d[x]
if(w>l.b)l.b=w
if(w<l.c)l.c=w}w=l.b
v=D.c.f9(1,w)
u=new Uint32Array(v)
l.a=u
for(t=1,s=0,r=2;t<=w;){for(q=t<<16,x=0;x<k;++x)if(d[x]===t){for(p=s,o=0,n=0;n<t;++n){o=(o<<1|p&1)>>>0
p=p>>>1}for(m=(q|x)>>>0,n=o;n<v;n+=r)u[n]=m;++s}++t
s=s<<1>>>0
r=r<<1>>>0}}}
A.c4h.prototype={}
A.cOP.prototype={
bJT(d,e,f,g){var x,w,v,u,t,s=null
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
if(D.c.au(u*256+t,31)!==0)return!1
if((t>>>5&1)!==0){d.ag()
return!1}if(s!=null)e.mI(s)
x=new A.a49()
x.a6t(C.aRL)
w=new A.a49()
w.a6t(C.aHy)
v=new A.aCn(new Uint8Array(32768),C.rh)
new A.bvN(d,v,x,w).bkZ()
s=J.dx(D.H.gaq(v.c),v.c.byteOffset,v.b)
d.ag()}if(s!=null)e.mI(s)
return!0}}
A.c4i.prototype={}
A.cOQ.prototype={
aH8(d,e){var x=A.d7Z(C.or,32768)
this.bLU(A.bw3(d,C.rh,null,null),x,e,!1,null)
return x.aka()},
bLU(d,e,f,g,h){var x,w,v,u,t,s,r,q,p
e.a=C.or
x=(D.c.aM(15,0,15)-8<<4|8)>>>0
e.be(x)
w=x*256
for(v=0;u=(v|0)>>>0,D.c.au(w+u,31)!==0;)++v
e.be(u)
t=d.c
s=A.dSN(d)
d.c=t
u=f==null?6:f
A.dsY(d,u,e,15)
u=s&255
r=s>>>24&255
q=s>>>16&255
p=s>>>8&255
if(e.a===C.or){e.be(r)
e.be(q)
e.be(p)
e.be(u)}else{e.be(u)
e.be(p)
e.be(q)
e.be(r)}}}
A.Xx.prototype={
J(){return"_DeflateFlushMode."+this.b}}
A.bhF.prototype={
b8n(d,e){var x,w,v,u,t=this,s=!0
if(e>=9)if(e<=15)s=d>9
if(s)return!1
x=t.bc0(d)
if(x==null)return!1
$.xM.b=x
s=new Uint16Array(1146)
t.p1=s
w=new Uint16Array(122)
t.p2=w
v=new Uint16Array(78)
t.p3=v
t.as=e
u=t.Q=D.c.ez(1,e)
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
t.bj=16384
t.xr=49152
t.k4=d
t.w=t.x=t.ok=0
t.c=113
t.d=0
u=t.p4
u.a=s
u.c=$.dkj()
u=t.R8
u.a=w
u.c=$.dki()
u=t.RG
u.a=v
u.c=$.dkh()
t.am=t.ah=0
t.Y=8
t.auH()
t.bmo()
return!0},
b8m(d){var x,w,v,u,t=this,s=t.x
s===$&&B.b()
if(s!==0)t.a7I()
s=t.a
x=s.c
s=s.d
s===$&&B.b()
w=!0
if(x>=s){s=t.k2
s===$&&B.b()
if(s===0)s=d!==C.AN&&t.c!==666
else s=w}else s=w
if(s){switch($.xM.c9().e){case 0:v=t.b8q(d)
break
case 1:v=t.b8o(d)
break
case 2:v=t.b8p(d)
break
default:v=-1
break}s=v===2
if(s||v===3)t.c=666
if(v===0||s)return 0
if(v===1){if(d===C.bRY){t.m2(2,3)
t.Hu(256,C.vB)
t.aDN()
s=t.Y
s===$&&B.b()
x=t.am
x===$&&B.b()
if(1+s+10-x<9){t.m2(2,3)
t.Hu(256,C.vB)
t.aDN()}t.Y=7}else{t.aAK(0,0,!1)
if(d===C.bRZ){s=t.cy
s===$&&B.b()
x=t.CW
u=0
for(;u<s;++u){x===$&&B.b()
x.$flags&2&&B.K(x)
x[u]=0}}}t.a7I()}}if(d!==C.qW)return 0
return 1},
bmo(){var x,w,v=this,u=v.Q
u===$&&B.b()
v.ay=2*u
u=v.CW
u===$&&B.b()
x=v.cy
x===$&&B.b();--x
u.$flags&2&&B.K(u)
u[x]=0
for(w=0;w<x;++w)u[w]=0
v.k2=v.fr=v.id=0
v.fx=v.k3=2
v.cx=v.go=0},
auH(){var x,w,v,u=this
for(x=u.p1,w=0;w<286;++w){x===$&&B.b()
x.$flags&2&&B.K(x)
x[w*2]=0}for(v=u.p2,w=0;w<30;++w){v===$&&B.b()
v.$flags&2&&B.K(v)
v[w*2]=0}for(v=u.p3,w=0;w<19;++w){v===$&&B.b()
v.$flags&2&&B.K(v)
v[w*2]=0}x===$&&B.b()
x.$flags&2&&B.K(x)
x[512]=1
u.y2=u.X=u.bs=u.C=0},
aao(d,e){var x,w,v=this.ry,u=v[e],t=e<<1>>>0,s=v.$flags|0,r=this.x2
while(!0){x=this.to
x===$&&B.b()
if(!(t<=x))break
if(t<x&&A.d3W(d,v[t+1],v[t],r))++t
if(A.d3W(d,u,v[t],r))break
x=v[t]
s&2&&B.K(v)
v[e]=x
w=t<<1>>>0
e=t
t=w}s&2&&B.K(v)
v[e]=u},
ayz(d,e){var x,w,v,u,t,s,r,q,p,o,n=d[1]
if(n===0){x=138
w=3}else{x=7
w=4}d.$flags&2&&B.K(d)
d[(e+1)*2+1]=65535
for(v=this.p3,u=0,t=-1,s=0;u<=e;n=r){++u
r=d[u*2+1];++s
if(s<x&&n===r)continue
else{q=3
if(s<w){v===$&&B.b()
p=n*2
o=v[p]
v.$flags&2&&B.K(v)
v[p]=o+s}else if(n!==0){if(n!==t){v===$&&B.b()
p=n*2
o=v[p]
v.$flags&2&&B.K(v)
v[p]=o+1}v===$&&B.b()
p=v[32]
v.$flags&2&&B.K(v)
v[32]=p+1}else if(s<=10){v===$&&B.b()
p=v[34]
v.$flags&2&&B.K(v)
v[34]=p+1}else{v===$&&B.b()
p=v[36]
v.$flags&2&&B.K(v)
v[36]=p+1}}if(r===0){w=q
x=138}else if(n===r){w=q
x=6}else{x=7
w=4}t=n
s=0}},
b3F(){var x,w,v=this,u=v.p1
u===$&&B.b()
x=v.p4.b
x===$&&B.b()
v.ayz(u,x)
x=v.p2
x===$&&B.b()
u=v.R8.b
u===$&&B.b()
v.ayz(x,u)
v.RG.a70(v)
for(u=v.p3,w=18;w>=3;--w){u===$&&B.b()
if(u[C.FA[w]*2+1]!==0)break}u=v.bs
u===$&&B.b()
v.bs=u+(3*(w+1)+5+5+4)
return w},
bwU(d,e,f){var x,w,v,u=this
u.m2(d-257,5)
x=e-1
u.m2(x,5)
u.m2(f-4,4)
for(w=0;w<f;++w){v=u.p3
v===$&&B.b()
u.m2(v[C.FA[w]*2+1],3)}v=u.p1
v===$&&B.b()
u.az8(v,d-1)
v=u.p2
v===$&&B.b()
u.az8(v,x)},
az8(d,e){var x,w,v,u,t,s,r,q,p,o,n=this,m=d[1]
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
n.m2(o[q]&65535,o[p]&65535)}while(--t,t!==0)}else if(m!==0){if(m!==u){q=n.p3
q===$&&B.b()
p=m*2
n.m2(q[p]&65535,q[p+1]&65535);--t}q=n.p3
q===$&&B.b()
n.m2(q[32]&65535,q[33]&65535)
n.m2(t-3,2)}else{q=n.p3
if(t<=10){q===$&&B.b()
n.m2(q[34]&65535,q[35]&65535)
n.m2(t-3,3)}else{q===$&&B.b()
n.m2(q[36]&65535,q[37]&65535)
n.m2(t-11,7)}}}if(s===0){w=r
x=138}else if(m===s){w=r
x=6}else{x=7
w=4}u=m
t=0}},
btB(d,e,f){var x,w,v=this
if(f===0)return
x=v.f
x===$&&B.b()
w=v.x
w===$&&B.b()
D.H.ej(x,w,w+f,d,e)
v.x=v.x+f},
ru(d){var x,w=this.f
w===$&&B.b()
x=this.x
x===$&&B.b()
this.x=x+1
w.$flags&2&&B.K(w)
w[x]=d},
Hu(d,e){var x=d*2
this.m2(e[x]&65535,e[x+1]&65535)},
m2(d,e){var x,w=this,v=w.am
v===$&&B.b()
x=w.ah
if(v>16-e){x===$&&B.b()
v=w.ah=(x|D.c.f9(d,v)&65535)>>>0
w.ru(v)
w.ru(A.r0(v,8))
w.ah=A.r0(d,16-w.am)
w.am=w.am+(e-16)}else{x===$&&B.b()
w.ah=(x|D.c.f9(d,v)&65535)>>>0
w.am=v+e}},
OY(d,e){var x,w,v,u,t,s=this,r=s.f
r===$&&B.b()
x=s.bj
x===$&&B.b()
w=s.y2
w===$&&B.b()
v=A.r0(d,8)
r.$flags&2&&B.K(r)
r[x+w*2]=v
v=s.f
w=s.bj
x=s.y2
v.$flags&2&&B.K(v)
v[w+x*2+1]=d
w=s.xr
w===$&&B.b()
v[w+x]=e
s.y2=x+1
if(d===0){r=s.p1
r===$&&B.b()
x=e*2
w=r[x]
r.$flags&2&&B.K(r)
r[x]=w+1}else{r=s.X
r===$&&B.b()
s.X=r+1
r=s.p1
r===$&&B.b()
x=(C.S9[e]+256+1)*2
w=r[x]
r.$flags&2&&B.K(r)
r[x]=w+1
w=s.p2
w===$&&B.b()
x=A.dcb(d-1)*2
r=w[x]
w.$flags&2&&B.K(w)
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
u+=w[t*2]*(5+C.vm[t])}u=A.r0(u,3)
w=s.X
w===$&&B.b()
v=s.y2
if(w<v/2&&u<(r-x)/2)return!0
r=v}x=s.y1
x===$&&B.b()
return r===x-1},
aq9(d,e){var x,w,v,u,t,s,r=this,q=r.y2
q===$&&B.b()
if(q!==0){x=0
do{q=r.f
q===$&&B.b()
w=r.bj
w===$&&B.b()
w+=x*2
v=q[w]<<8&65280|q[w+1]&255
w=r.xr
w===$&&B.b()
u=q[w+x]&255;++x
if(v===0)r.Hu(u,d)
else{t=C.S9[u]
r.Hu(t+256+1,d)
s=C.Qi[t]
if(s!==0)r.m2(u-C.aEi[t],s);--v
t=A.dcb(v)
r.Hu(t,e)
s=C.vm[t]
if(s!==0)r.m2(v-C.aHi[t],s)}}while(x<r.y2)}r.Hu(256,d)
r.Y=d[513]},
aSB(){var x,w,v,u
for(x=this.p1,w=0,v=0;w<7;){x===$&&B.b()
v+=x[w*2];++w}for(u=0;w<128;){x===$&&B.b()
u+=x[w*2];++w}for(;w<256;){x===$&&B.b()
v+=x[w*2];++w}this.y=v>A.r0(u,2)?0:1},
aDN(){var x=this,w=x.am
w===$&&B.b()
if(w===16){w=x.ah
w===$&&B.b()
x.ru(w)
x.ru(A.r0(w,8))
x.am=x.ah=0}else if(w>=8){w=x.ah
w===$&&B.b()
x.ru(w)
x.ah=A.r0(x.ah,8)
x.am=x.am-8}},
aoM(){var x=this,w=x.am
w===$&&B.b()
if(w>8){w=x.ah
w===$&&B.b()
x.ru(w)
x.ru(A.r0(w,8))}else if(w>0){w=x.ah
w===$&&B.b()
x.ru(w)}x.am=x.ah=0},
zt(d){var x,w,v,u,t,s=this,r=s.fr
r===$&&B.b()
if(r>=0)x=r
else x=-1
w=s.id
w===$&&B.b()
r=w-r
w=s.k4
w===$&&B.b()
if(w>0){if(s.y===2)s.aSB()
s.p4.a70(s)
s.R8.a70(s)
v=s.b3F()
w=s.bs
w===$&&B.b()
u=A.r0(w+3+7,3)
w=s.C
w===$&&B.b()
t=A.r0(w+3+7,3)
if(t<=u)u=t}else{t=r+5
u=t
v=0}if(r+4<=u&&x!==-1)s.aAK(x,r,d)
else if(t===u){s.m2(2+(d?1:0),3)
s.aq9(C.vB,C.SS)}else{s.m2(4+(d?1:0),3)
r=s.p4.b
r===$&&B.b()
x=s.R8.b
x===$&&B.b()
s.bwU(r+1,x+1,v+1)
x=s.p1
x===$&&B.b()
r=s.p2
r===$&&B.b()
s.aq9(x,r)}s.auH()
if(d)s.aoM()
s.fr=s.id
s.a7I()},
b8q(d){var x,w,v,u,t,s=this,r=s.r
r===$&&B.b()
x=r-5
x=65535>x?x:65535
for(r=d===C.AN;!0;){w=s.k2
w===$&&B.b()
if(w<=1){s.a85()
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
s.zt(!1)}w=s.id
v=s.fr
t=s.Q
t===$&&B.b()
if(w-v>=t-262)s.zt(!1)}r=d===C.qW
s.zt(r)
return r?3:1},
aAK(d,e,f){var x,w=this
w.m2(f?1:0,3)
w.aoM()
w.Y=8
w.ru(e)
w.ru(A.r0(e,8))
x=(~e>>>0)+65536&65535
w.ru(x)
w.ru(A.r0(x,8))
x=w.ax
x===$&&B.b()
w.btB(x,d,e)},
a85(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.a
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
D.H.ej(w,0,x,w,x)
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
v&2&&B.K(w)
w[s]=x}while(--r,r!==0)
x=n.ch
x===$&&B.b()
w=x.$flags|0
s=t
r=s
do{--s
q=x[s]&65535
v=q>=t?q-t:0
w&2&&B.K(x)
x[s]=v}while(--r,r!==0)
u+=t}}x=m.c
w=m.d
w===$&&B.b()
if(x>=w)return
x=n.ax
x===$&&B.b()
r=n.btM(x,n.id+n.k2,u)
x=n.k2=n.k2+r
if(x>=3){w=n.ax
v=n.id
p=w[v]&255
n.cx=p
o=n.dy
o===$&&B.b()
o=D.c.f9(p,o)
v=w[v+1]
w=n.dx
w===$&&B.b()
n.cx=((o^v&255)&w)>>>0}}while(x<262&&!(m.c>=m.d))},
b8o(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
for(x=d===C.AN,w=$.xM.a,v=0;!0;){u=m.k2
u===$&&B.b()
if(u<262){m.a85()
u=m.k2
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=m.cx
u===$&&B.b()
t=m.dy
t===$&&B.b()
t=D.c.f9(u,t)
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
q.$flags&2&&B.K(q)
q[(s&p)>>>0]=t
u.$flags&2&&B.K(u)
u[r]=s}if(v!==0){u=m.id
u===$&&B.b()
t=m.Q
t===$&&B.b()
t=(u-v&65535)<=t-262
u=t}else u=!1
if(u){u=m.ok
u===$&&B.b()
if(u!==2)m.fx=m.avu(v)}u=m.fx
u===$&&B.b()
t=m.id
if(u>=3){t===$&&B.b()
o=m.OY(t-m.k1,u-3)
u=m.k2
t=m.fx
u-=t
m.k2=u
s=$.xM.b
if(s===$.xM)B.a9(B.w5(w))
if(t<=s.b&&u>=3){u=m.fx=t-1
do{t=m.id=m.id+1
s=m.cx
s===$&&B.b()
r=m.dy
r===$&&B.b()
r=D.c.f9(s,r)
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
p.$flags&2&&B.K(p)
p[(t&n)>>>0]=r
s.$flags&2&&B.K(s)
s[q]=t}while(u=m.fx=u-1,u!==0)
m.id=t+1}else{u=m.id=m.id+t
m.fx=0
t=m.ax
t===$&&B.b()
s=t[u]&255
m.cx=s
r=m.dy
r===$&&B.b()
r=D.c.f9(s,r)
u=t[u+1]
t=m.dx
t===$&&B.b()
m.cx=((r^u&255)&t)>>>0}}else{u=m.ax
u===$&&B.b()
t===$&&B.b()
o=m.OY(0,u[t]&255)
m.k2=m.k2-1
m.id=m.id+1}if(o)m.zt(!1)}x=d===C.qW
m.zt(x)
return x?3:1},
b8p(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
for(x=d===C.AN,w=$.xM.a,v=0;!0;){u=l.k2
u===$&&B.b()
if(u<262){l.a85()
u=l.k2
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=l.cx
u===$&&B.b()
t=l.dy
t===$&&B.b()
t=D.c.f9(u,t)
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
q.$flags&2&&B.K(q)
q[(s&p)>>>0]=t
u.$flags&2&&B.K(u)
u[r]=s}u=l.fx
u===$&&B.b()
l.k3=u
l.fy=l.k1
l.fx=2
t=!1
if(v!==0){s=$.xM.b
if(s===$.xM)B.a9(B.w5(w))
if(u<s.b){u=l.id
u===$&&B.b()
t=l.Q
t===$&&B.b()
t=(u-v&65535)<=t-262
u=t}else u=t}else u=t
t=2
if(u){u=l.ok
u===$&&B.b()
if(u!==2){u=l.avu(v)
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
n=l.OY(u-1-l.fy,t-3)
t=l.k2
u=l.k3
l.k2=t-(u-1)
u=l.k3=u-2
do{t=l.id=l.id+1
if(t<=o){s=l.cx
s===$&&B.b()
r=l.dy
r===$&&B.b()
r=D.c.f9(s,r)
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
p.$flags&2&&B.K(p)
p[(t&m)>>>0]=r
s.$flags&2&&B.K(s)
s[q]=t}}while(u=l.k3=u-1,u!==0)
l.go=0
l.fx=2
l.id=t+1
if(n)l.zt(!1)}else{u=l.go
u===$&&B.b()
if(u!==0){u=l.ax
u===$&&B.b()
t=l.id
t===$&&B.b()
if(l.OY(0,u[t-1]&255))l.zt(!1)
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
l.OY(0,x[w-1]&255)
l.go=0}x=d===C.qW
l.zt(x)
return x?3:1},
avu(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=$.xM.c9().d,h=j.id
h===$&&B.b()
x=j.k3
x===$&&B.b()
w=j.Q
w===$&&B.b()
w-=262
v=h>w?h-w:0
u=$.xM.c9().c
w=j.at
w===$&&B.b()
t=j.id+258
s=j.ax
s===$&&B.b()
r=h+x
q=s[r-1]
p=s[r]
if(j.k3>=$.xM.c9().a)i=i>>>2
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
btM(d,e,f){var x,w,v,u,t,s,r=this
if(f!==0){x=r.a
w=x.c
x=x.d
x===$&&B.b()
x=w>=x}else x=!0
if(x)return 0
v=r.a.jN(f)
u=v.gA(0)
if(u===0)return 0
t=v.ik()
s=t.length
if(u>s)u=s
D.H.hP(d,e,e+u,t)
r.e+=u
r.d=A.zm(t,r.d)
return u},
a7I(){var x,w=this,v=w.x
v===$&&B.b()
x=w.f
x===$&&B.b()
w.b.aOv(x,v)
x=w.w
x===$&&B.b()
w.w=x+v
v=w.x-v
w.x=v
if(v===0)w.w=0},
bc0(d){switch(d){case 0:return new A.v3(0,0,0,0,0)
case 1:return new A.v3(4,4,8,4,1)
case 2:return new A.v3(4,5,16,8,1)
case 3:return new A.v3(4,6,32,32,1)
case 4:return new A.v3(4,4,16,16,2)
case 5:return new A.v3(8,16,32,32,2)
case 6:return new A.v3(8,16,128,128,2)
case 7:return new A.v3(8,32,128,256,2)
case 8:return new A.v3(32,128,258,1024,2)
case 9:return new A.v3(32,258,258,4096,2)}return null}}
A.v3.prototype={}
A.cm1.prototype={
bbG(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a
d===$&&B.b()
x=e.c
x===$&&B.b()
w=x.a
v=x.b
u=x.c
t=x.e
for(x=a0.rx,s=x.$flags|0,r=0;r<=15;++r){s&2&&B.K(x)
x[r]=0}q=a0.ry
p=a0.x1
p===$&&B.b()
o=q[p]
d.$flags&2&&B.K(d)
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
s&2&&B.K(x)
x[r]=j+1
i=l>=u?v[l-u]:0
h=d[o]
o=a0.bs
o===$&&B.b()
a0.bs=o+h*(r+i)
if(p){o=a0.C
o===$&&B.b()
a0.C=o+h*(w[k]+i)}}if(m===0)return
r=t-1
do{for(g=r;p=x[g],p===0;)--g
s&2&&B.K(x)
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
if(o!==r){k=a0.bs
k===$&&B.b()
a0.bs=k+(r-o)*d[s]
d[p]=r}--l}}},
a70(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
g===$&&B.b()
x=h.c
x===$&&B.b()
w=x.a
v=x.d
d.to=0
d.x1=573
for(x=g.$flags|0,u=d.ry,t=u.$flags|0,s=d.x2,r=s.$flags|0,q=0,p=-1;q<v;++q){o=q*2
if(g[o]!==0){o=++d.to
t&2&&B.K(u)
u[o]=q
r&2&&B.K(s)
s[q]=0
p=q}else{x&2&&B.K(g)
g[o+1]=0}}for(o=w!=null;n=d.to,n<2;){++n
d.to=n
if(p<2){++p
m=p}else m=0
t&2&&B.K(u)
u[n]=m
n=m*2
x&2&&B.K(g)
g[n]=1
r&2&&B.K(s)
s[m]=0
l=d.bs
l===$&&B.b()
d.bs=l-1
if(o){l=d.C
l===$&&B.b()
d.C=l-w[n+1]}}h.b=p
for(q=D.c.aK(n,2);q>=1;--q)d.aao(g,q)
m=v
do{q=u[1]
o=u[d.to--]
t&2&&B.K(u)
u[1]=o
d.aao(g,1)
k=u[1]
o=--d.x1
u[o]=q;--o
d.x1=o
u[o]=k
o=q*2
n=g[o]
l=k*2
j=g[l]
x&2&&B.K(g)
g[m*2]=n+j
j=s[q]
n=s[k]
if(j>n)n=j
r&2&&B.K(s)
s[m]=n+1
g[l+1]=m
g[o+1]=m
i=m+1
u[1]=m
d.aao(g,1)
if(d.to>=2){m=i
continue}else break}while(!0)
u[--d.x1]=u[1]
h.bbG(d)
A.dIt(g,p,d.rx)}}
A.cGT.prototype={}
A.bvN.prototype={
gvo(){var x=this.a
if(x==null)return x
x.d===$&&B.b()
return x},
bkZ(){var x,w,v=this
v.e=v.d=0
if(v.gvo()==null)return
while(!0){x=v.gvo()
w=x.c
x=x.d
x===$&&B.b()
if(!(w<x))break
if(!v.brU())return}},
brU(){var x,w,v,u=this,t=u.gvo()
if(t!=null){x=t.c
w=t.d
w===$&&B.b()
w=x>=w
x=w}else x=!0
if(x)return!1
v=u.rv(3)
switch(D.c.Z(v,1)){case 0:if(u.bsd()===-1)return!1
break
case 1:if(u.aqG(u.r,u.w)===-1)return!1
break
case 2:if(u.brY()===-1)return!1
break
default:return!1}return(v&1)===0},
rv(d){var x,w,v,u,t=this
if(d===0)return 0
for(;x=t.e,x<d;){x=t.gvo()
w=x.c
x=x.d
x===$&&B.b()
if(w>=x)return-1
x=t.gvo()
w=x.b
w.toString
v=w[x.c++]
x=t.d
w=t.e
t.d=(x|D.c.f9(v,w))>>>0
t.e=w+8}w=t.d
u=D.c.ez(1,d)
t.d=D.c.i4(w,d)
t.e=x-d
return(w&u-1)>>>0},
aav(d){var x,w,v,u,t,s,r=this,q=d.a
q===$&&B.b()
x=d.b
for(;w=r.e,w<x;){w=r.gvo()
v=w.c
w=w.d
w===$&&B.b()
if(v>=w)return-1
w=r.gvo()
v=w.b
v.toString
u=v[w.c++]
w=r.d
v=r.e
r.d=(w|D.c.f9(u,v))>>>0
r.e=v+8}v=r.d
t=q[(v&D.c.f9(1,x)-1)>>>0]
s=t>>>16
r.d=D.c.i4(v,s)
r.e=w-s
return t&65535},
bsd(){var x,w,v=this
v.e=v.d=0
x=v.rv(16)
w=v.rv(16)
if(x!==0&&x!==(w^65535)>>>0)return-1
if(x>v.gvo().gA(0))return-1
v.c.c_F(v.gvo().jN(x))
return 0},
brY(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.rv(5)
if(m===-1)return-1
m+=257
if(m>288)return-1
x=n.rv(5)
if(x===-1)return-1;++x
if(x>32)return-1
w=n.rv(4)
if(w===-1)return-1
w+=4
if(w>19)return-1
v=new Uint8Array(19)
for(u=0;u<w;++u){t=n.rv(3)
if(t===-1)return-1
v[C.FA[u]]=t}s=A.cWa(v)
r=m+x
q=new Uint8Array(r)
p=J.dx(D.H.gaq(q),0,m)
o=J.dx(D.H.gaq(q),m,x)
if(n.b7u(r,s,q)===-1)return-1
return n.aqG(A.cWa(p),A.cWa(o))},
aqG(d,e){var x,w,v,u,t,s,r,q,p=this
for(x=p.c;!0;){w=p.aav(d)
if(w<0||w>285)return-1
if(w===256)break
if(w<256){x.be(w&255)
continue}v=w-257
u=C.aQr[v]+p.rv(C.aRZ[v])
t=p.aav(e)
if(t<0||t>29)return-1
s=C.aQy[t]+p.rv(C.vm[t])
for(r=-s;u>s;){x.mI(x.jS(r))
u-=s}if(u===s)x.mI(x.jS(r))
else x.mI(x.amt(r,u-s))}for(;x=p.e,x>=8;){p.e=x-8
x=p.gvo()
r=--x.c
q=x.d
q===$&&B.b()
x.c=D.c.aM(r,0,q)}return 0},
b7u(d,e,f){var x,w,v,u,t,s,r,q,p=this
for(x=f.$flags|0,w=0,v=0;v<d;){u=p.aav(e)
if(u===-1)return-1
t=0
switch(u){case 16:s=p.rv(2)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.K(f)
f[v]=w}break
case 17:s=p.rv(3)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.K(f)
f[v]=0}w=t
break
case 18:s=p.rv(7)
if(s===-1)return-1
s+=11
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.K(f)
f[v]=0}w=t
break
default:if(u<0||u>15)return-1
q=v+1
x&2&&B.K(f)
f[v]=u
v=q
w=u
break}}return 0}}
A.c4g.prototype={
DN(d){var x=A.d7Z(C.rh,32768)
C.anz.bJT(A.bw3(d,C.or,null,null),x,!1,!1)
return x.aka()}}
A.apy.prototype={
J(){return"ByteOrder."+this.b}}
A.bw2.prototype={
gA(d){var x=this.b
return x==null?0:x.length-this.c},
h(d,e){return this.b[this.c+e]},
aVr(d,e){var x=this.b
if(x==null)return A.bw3(B.a([],y.t),C.rh,null,null)
return A.bw3(x,this.a,d,e)},
cE(){var x=this.b
x.toString
return x[this.c++]},
ik(){var x,w,v,u,t=this
if(t.b==null)return new Uint8Array(0)
x=t.gA(0)
w=t.c
v=t.b
u=v.length
if(w+x>u)x=u-w
return J.dx(D.H.gaq(v),t.b.byteOffset+t.c,x)}}
A.bw4.prototype={
ag(){var x=this,w=x.cE(),v=x.cE(),u=x.cE(),t=x.cE()
if(x.a===C.or)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
jN(d){var x=this,w=x.aVr(d,x.c)
x.c=x.c+w.gA(0)
return w}}
A.aCn.prototype={
aka(){return J.dx(D.H.gaq(this.c),this.c.byteOffset,this.b)},
N(d){this.c=new Uint8Array(32768)
this.b=0},
be(d){var x,w,v=this
if(v.b===v.c.length)v.brr()
x=v.c
w=v.b++
x.$flags&2&&B.K(x)
x[w]=d},
aOv(d,e){var x,w,v,u,t=this
if(e==null)e=d.length
for(;x=t.b,w=x+e,v=t.c,u=v.length,w>u;)t.aa5(w-u)
D.H.hP(v,x,w,d)
t.b+=e},
mI(d){return this.aOv(d,null)},
c_F(d){var x,w,v,u,t,s,r=this
while(!0){x=r.b
w=d.b
v=w==null
u=v?0:w.length-d.c
t=r.c
s=t.length
if(!(x+u>s))break
r.aa5(x+(v?0:w.length-d.c)-s)}if(!v){w=d.gA(0)
v=d.b
v.toString
D.H.ej(t,x,x+w,v,d.c)}r.b=r.b+d.gA(0)},
amt(d,e){var x=this
if(d<0)d=x.b+d
if(e==null)e=x.b
else if(e<0)e=x.b+e
return J.dx(D.H.gaq(x.c),x.c.byteOffset+d,e-d)},
jS(d){return this.amt(d,null)},
aa5(d){var x=d!=null?d>32768?d:32768:32768,w=this.c,v=w.length,u=new Uint8Array((v+x)*2)
D.H.hP(u,0,v,w)
this.c=u},
brr(){return this.aa5(null)},
gA(d){return this.b}}
A.bGC.prototype={}
A.b9T.prototype={
J(){return"Channel."+this.b}}
A.iA.prototype={
t(){var x=this.b
return++this.a<x.gA(x)},
gM(d){return this.b.h(0,this.a)},
$ibQ:1}
A.QC.prototype={
ew(d){return new A.QC(new Uint16Array(B.c9(this.a)))},
gdH(){return C.jj},
gA(d){return this.a.length},
gf8(){return null},
h(d,e){var x,w=this.a
if(e<w.length){w=w[e]
x=$.iP
w=(x!=null?x:A.jE())[w]}else w=0
return w},
m(d,e,f){var x,w=this.a
if(e<w.length){x=A.hP(f)
w.$flags&2&&B.K(w)
w[e]=x}},
gdI(d){return this.gar(0)},
gar(d){var x,w=this.a
if(!D.eN.ga2(w)){w=w[0]
x=$.iP
w=(x!=null?x:A.jE())[w]}else w=0
return w},
sar(d,e){var x,w=this.a
if(!D.eN.ga2(w)){x=A.hP(e)
w.$flags&2&&B.K(w)
w[0]=x}},
gaE(){var x,w=this.a
if(w.length>1){w=w[1]
x=$.iP
w=(x!=null?x:A.jE())[w]}else w=0
return w},
saE(d){var x,w=this.a
if(w.length>1){x=A.hP(d)
w.$flags&2&&B.K(w)
w[1]=x}},
gaF(d){var x,w=this.a
if(w.length>2){w=w[2]
x=$.iP
w=(x!=null?x:A.jE())[w]}else w=0
return w},
saF(d,e){var x,w=this.a
if(w.length>2){x=A.hP(e)
w.$flags&2&&B.K(w)
w[2]=x}},
gaU(d){var x,w=this.a
if(w.length>3){w=w[3]
x=$.iP
w=(x!=null?x:A.jE())[w]}else w=0
return w},
gfS(){return this.gaU(0)/1},
gkd(){return A.k9(this)},
je(d,e){var x,w,v=this
v.sar(0,e.gar(e))
v.saE(e.gaE())
v.saF(0,e.gaF(e))
x=e.gaU(e)
w=v.a
if(w.length>3){x=A.hP(x)
w.$flags&2&&B.K(w)
w[3]=x}},
gac(d){return new A.iA(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=B.A(this,B.t(this).i("y.E"))
x=x===B.aS(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
$ie3:1}
A.QD.prototype={
ew(d){return new A.QD(new Float32Array(B.c9(this.a)))},
gdH(){return C.kR},
gA(d){return this.a.length},
gf8(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x=this.a
if(e<x.length){x.$flags&2&&B.K(x)
x[e]=f}},
gdI(d){var x=this.a
return!D.fR.ga2(x)?x[0]:0},
gar(d){var x=this.a
return!D.fR.ga2(x)?x[0]:0},
sar(d,e){var x=this.a
if(!D.fR.ga2(x)){x.$flags&2&&B.K(x)
x[0]=e}},
gaE(){var x=this.a
return x.length>1?x[1]:0},
saE(d){var x=this.a
if(x.length>1){x.$flags&2&&B.K(x)
x[1]=d}},
gaF(d){var x=this.a
return x.length>2?x[2]:0},
saF(d,e){var x=this.a
if(x.length>2){x.$flags&2&&B.K(x)
x[2]=e}},
gaU(d){var x=this.a
return x.length>3?x[3]:1},
gfS(){return this.gaU(0)/1},
gkd(){return A.k9(this)},
je(d,e){var x,w,v=this
v.sar(0,e.gar(e))
v.saE(e.gaE())
v.saF(0,e.gaF(e))
x=e.gaU(e)
w=v.a
if(w.length>3){w.$flags&2&&B.K(w)
w[3]=x}},
gac(d){return new A.iA(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=B.A(this,B.t(this).i("y.E"))
x=x===B.aS(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
$ie3:1}
A.QE.prototype={
ew(d){return new A.QE(new Float64Array(B.c9(this.a)))},
gdH(){return C.mx},
gA(d){return this.a.length},
gf8(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x=this.a
if(e<x.length){x.$flags&2&&B.K(x)
x[e]=f}},
gdI(d){var x=this.a
return!D.fe.ga2(x)?x[0]:0},
gar(d){var x=this.a
return!D.fe.ga2(x)?x[0]:0},
sar(d,e){var x=this.a
if(!D.fe.ga2(x)){x.$flags&2&&B.K(x)
x[0]=e}},
gaE(){var x=this.a
return x.length>1?x[1]:0},
saE(d){var x=this.a
if(x.length>1){x.$flags&2&&B.K(x)
x[1]=d}},
gaF(d){var x=this.a
return x.length>2?x[2]:0},
saF(d,e){var x=this.a
if(x.length>2){x.$flags&2&&B.K(x)
x[2]=e}},
gaU(d){var x=this.a
return x.length>3?x[3]:1},
gfS(){return this.gaU(0)/1},
gkd(){return A.k9(this)},
je(d,e){var x,w,v=this
v.sar(0,e.gar(e))
v.saE(e.gaE())
v.saF(0,e.gaF(e))
x=e.gaU(e)
w=v.a
if(w.length>3){w.$flags&2&&B.K(w)
w[3]=x}},
gac(d){return new A.iA(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=B.A(this,B.t(this).i("y.E"))
x=x===B.aS(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
$ie3:1}
A.QF.prototype={
ew(d){return new A.QF(new Int16Array(B.c9(this.a)))},
gdH(){return C.mz},
gA(d){return this.a.length},
gf8(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.e.L(f)
w.$flags&2&&B.K(w)
w[e]=x}},
gdI(d){var x=this.a
return!D.lm.ga2(x)?x[0]:0},
gar(d){var x=this.a
return!D.lm.ga2(x)?x[0]:0},
sar(d,e){var x,w=this.a
if(!D.lm.ga2(w)){x=D.e.L(e)
w.$flags&2&&B.K(w)
w[0]=x}},
gaE(){var x=this.a
return x.length>1?x[1]:0},
saE(d){var x,w=this.a
if(w.length>1){x=D.e.L(d)
w.$flags&2&&B.K(w)
w[1]=x}},
gaF(d){var x=this.a
return x.length>2?x[2]:0},
saF(d,e){var x,w=this.a
if(w.length>2){x=D.e.L(e)
w.$flags&2&&B.K(w)
w[2]=x}},
gaU(d){var x=this.a
return x.length>3?x[3]:0},
gfS(){return this.gaU(0)/32767},
gkd(){return A.k9(this)},
je(d,e){var x,w,v=this
v.sar(0,e.gar(e))
v.saE(e.gaE())
v.saF(0,e.gaF(e))
x=e.gaU(e)
w=v.a
if(w.length>3){x=D.e.L(x)
w.$flags&2&&B.K(w)
w[3]=x}},
gac(d){return new A.iA(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=B.A(this,B.t(this).i("y.E"))
x=x===B.aS(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
$ie3:1}
A.QG.prototype={
ew(d){return new A.QG(new Int32Array(B.c9(this.a)))},
gdH(){return C.mA},
gA(d){return this.a.length},
gf8(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.e.L(f)
w.$flags&2&&B.K(w)
w[e]=x}},
gdI(d){var x=this.a
return!D.d7.ga2(x)?x[0]:0},
gar(d){var x=this.a
return!D.d7.ga2(x)?x[0]:0},
sar(d,e){var x=this.a
if(!D.d7.ga2(x)){B.bw(e)
x.$flags&2&&B.K(x)
x[0]=e}},
gaE(){var x=this.a
return x.length>1?x[1]:0},
saE(d){var x,w=this.a
if(w.length>1){x=D.e.L(d)
w.$flags&2&&B.K(w)
w[1]=x}},
gaF(d){var x=this.a
return x.length>2?x[2]:0},
saF(d,e){var x,w=this.a
if(w.length>2){x=D.e.L(e)
w.$flags&2&&B.K(w)
w[2]=x}},
gaU(d){var x=this.a
return x.length>3?x[3]:0},
gfS(){return this.gaU(0)/2147483647},
gkd(){return A.k9(this)},
je(d,e){var x,w,v=this
v.sar(0,e.gar(e))
v.saE(e.gaE())
v.saF(0,e.gaF(e))
x=e.gaU(e)
w=v.a
if(w.length>3){x=D.e.L(x)
w.$flags&2&&B.K(w)
w[3]=x}},
gac(d){return new A.iA(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=B.A(this,B.t(this).i("y.E"))
x=x===B.aS(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
$ie3:1}
A.QH.prototype={
ew(d){return new A.QH(new Int8Array(B.c9(this.a)))},
gdH(){return C.my},
gA(d){return this.a.length},
gf8(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.e.L(f)
w.$flags&2&&B.K(w)
w[e]=x}},
gdI(d){var x=this.a
return!D.ln.ga2(x)?x[0]:0},
gar(d){var x=this.a
return!D.ln.ga2(x)?x[0]:0},
sar(d,e){var x,w=this.a
if(!D.ln.ga2(w)){x=D.e.L(e)
w.$flags&2&&B.K(w)
w[0]=x}},
gaE(){var x=this.a
return x.length>1?x[1]:0},
saE(d){var x,w=this.a
if(w.length>1){x=D.e.L(d)
w.$flags&2&&B.K(w)
w[1]=x}},
gaF(d){var x=this.a
return x.length>2?x[2]:0},
saF(d,e){var x,w=this.a
if(w.length>2){x=D.e.L(e)
w.$flags&2&&B.K(w)
w[2]=x}},
gaU(d){var x=this.a
return x.length>3?x[3]:0},
gfS(){return this.gaU(0)/127},
gkd(){return A.k9(this)},
je(d,e){var x,w,v=this
v.sar(0,e.gar(e))
v.saE(e.gaE())
v.saF(0,e.gaF(e))
x=e.gaU(e)
w=v.a
if(w.length>3){x=D.e.L(x)
w.$flags&2&&B.K(w)
w[3]=x}},
gac(d){return new A.iA(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=B.A(this,B.t(this).i("y.E"))
x=x===B.aS(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
$ie3:1}
A.QK.prototype={
ew(d){var x=this.b
x===$&&B.b()
return new A.QK(this.a,x)},
gdH(){return C.hE},
gf8(){return null},
Cn(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.hs(x,7-d)&1}else x=0
return x},
zn(d,e){var x
if(d>=this.a)return
d=7-d
x=this.b
x===$&&B.b()
this.b=e!==0?(x|D.c.f9(1,d))>>>0:(x&~(D.c.f9(1,d)&255))>>>0},
h(d,e){return this.Cn(e)},
m(d,e,f){return this.zn(e,f)},
gdI(d){return this.Cn(0)},
gar(d){return this.Cn(0)},
sar(d,e){this.zn(0,e)},
gaE(){return this.Cn(1)},
saE(d){this.zn(1,d)},
gaF(d){return this.Cn(2)},
saF(d,e){this.zn(2,e)},
gaU(d){return this.Cn(3)},
gfS(){return this.Cn(3)/1},
gkd(){return A.k9(this)},
je(d,e){this.iV(e.gar(e),e.gaE(),e.gaF(e),e.gaU(e))},
iV(d,e,f,g){var x=this
x.zn(0,d)
x.zn(1,e)
x.zn(2,f)
x.zn(3,g)},
gac(d){return new A.iA(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a){x=e.gv(e)
w=B.A(this,B.t(this).i("y.E"))
x=x===B.aS(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
$ie3:1,
gA(d){return this.a}}
A.QL.prototype={
ew(d){return new A.QL(new Uint16Array(B.c9(this.a)))},
gdH(){return C.cV},
gA(d){return this.a.length},
gf8(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.e.L(f)
w.$flags&2&&B.K(w)
w[e]=x}},
gdI(d){var x=this.a
return!D.eN.ga2(x)?x[0]:0},
gar(d){var x=this.a
return!D.eN.ga2(x)?x[0]:0},
sar(d,e){var x,w=this.a
if(!D.eN.ga2(w)){x=D.e.L(e)
w.$flags&2&&B.K(w)
w[0]=x}},
gaE(){var x=this.a
return x.length>1?x[1]:0},
saE(d){var x,w=this.a
if(w.length>1){x=D.e.L(d)
w.$flags&2&&B.K(w)
w[1]=x}},
gaF(d){var x=this.a
return x.length>2?x[2]:0},
saF(d,e){var x,w=this.a
if(w.length>2){x=D.e.L(e)
w.$flags&2&&B.K(w)
w[2]=x}},
gaU(d){var x=this.a
return x.length>3?x[3]:0},
gfS(){return this.gaU(0)/65535},
gkd(){return A.k9(this)},
je(d,e){var x,w,v=this
v.sar(0,e.gar(e))
v.saE(e.gaE())
v.saF(0,e.gaF(e))
x=e.gaU(e)
w=v.a
if(w.length>3){x=D.e.L(x)
w.$flags&2&&B.K(w)
w[3]=x}},
gac(d){return new A.iA(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=B.A(this,B.t(this).i("y.E"))
x=x===B.aS(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
$ie3:1}
A.QM.prototype={
ew(d){var x=this.b
x===$&&B.b()
return new A.QM(this.a,x)},
gdH(){return C.it},
gf8(){return null},
Co(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.hs(x,6-(d<<1>>>0))&3}else x=0
return x},
zo(d,e){var x,w,v
if(d>=this.a)return
x=C.aGa[d]
w=D.e.L(e)
v=this.b
v===$&&B.b()
this.b=(v&x|D.c.f9(w&3,6-(d<<1>>>0)))>>>0},
h(d,e){return this.Co(e)},
m(d,e,f){return this.zo(e,f)},
gdI(d){return this.Co(0)},
gar(d){return this.Co(0)},
sar(d,e){this.zo(0,e)},
gaE(){return this.Co(1)},
saE(d){this.zo(1,d)},
gaF(d){return this.Co(2)},
saF(d,e){this.zo(2,e)},
gaU(d){return this.Co(3)},
gfS(){return this.Co(3)/3},
gkd(){return A.k9(this)},
je(d,e){this.iV(e.gar(e),e.gaE(),e.gaF(e),e.gaU(e))},
iV(d,e,f,g){var x=this
x.zo(0,d)
x.zo(1,e)
x.zo(2,f)
x.zo(3,g)},
gac(d){return new A.iA(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a){x=e.gv(e)
w=B.A(this,B.t(this).i("y.E"))
x=x===B.aS(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
$ie3:1,
gA(d){return this.a}}
A.QN.prototype={
ew(d){return new A.QN(new Uint32Array(B.c9(this.a)))},
gdH(){return C.kS},
gA(d){return this.a.length},
gf8(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.e.L(f)
w.$flags&2&&B.K(w)
w[e]=x}},
gdI(d){var x=this.a
return!D.bM.ga2(x)?x[0]:0},
gar(d){var x=this.a
return!D.bM.ga2(x)?x[0]:0},
sar(d,e){var x,w=this.a
if(!D.bM.ga2(w)){x=D.e.L(e)
w.$flags&2&&B.K(w)
w[0]=x}},
gaE(){var x=this.a
return x.length>1?x[1]:0},
saE(d){var x,w=this.a
if(w.length>1){x=D.e.L(d)
w.$flags&2&&B.K(w)
w[1]=x}},
gaF(d){var x=this.a
return x.length>2?x[2]:0},
saF(d,e){var x,w=this.a
if(w.length>2){x=D.e.L(e)
w.$flags&2&&B.K(w)
w[2]=x}},
gaU(d){var x=this.a
return x.length>3?x[3]:0},
gfS(){return this.gaU(0)/4294967295},
gkd(){return A.k9(this)},
je(d,e){var x,w,v=this
v.sar(0,e.gar(e))
v.saE(e.gaE())
v.saF(0,e.gaF(e))
x=e.gaU(e)
w=v.a
if(w.length>3){x=D.e.L(x)
w.$flags&2&&B.K(w)
w[3]=x}},
gac(d){return new A.iA(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=B.A(this,B.t(this).i("y.E"))
x=x===B.aS(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
$ie3:1}
A.QO.prototype={
ew(d){return new A.QO(this.a,new Uint8Array(B.c9(this.b)))},
gdH(){return C.iu},
gf8(){return null},
Cp(d){var x
if(d<0||d>=this.a)x=0
else{x=this.b
x=d<2?D.c.hs(x[0],4-(d<<2>>>0))&15:D.c.hs(x[1],4-((d&1)<<2))&15}return x},
zp(d,e){var x,w,v,u
if(d>=this.a)return
x=D.c.aM(D.e.L(e),0,15)
if(d>1){d&=1
w=1}else w=0
if(d===0){v=this.b
u=v[w]
v.$flags&2&&B.K(v)
v[w]=(u&15|x<<4)>>>0}else if(d===1){v=this.b
u=v[w]
v.$flags&2&&B.K(v)
v[w]=(u&240|x)>>>0}},
h(d,e){return this.Cp(e)},
m(d,e,f){return this.zp(e,f)},
gdI(d){return this.Cp(0)},
gar(d){return this.Cp(0)},
sar(d,e){this.zp(0,e)},
gaE(){return this.Cp(1)},
saE(d){this.zp(1,d)},
gaF(d){return this.Cp(2)},
saF(d,e){this.zp(2,e)},
gaU(d){return this.Cp(3)},
gfS(){return this.Cp(3)/15},
gkd(){return A.k9(this)},
je(d,e){this.iV(e.gar(e),e.gaE(),e.gaF(e),e.gaU(e))},
iV(d,e,f,g){var x=this
x.zp(0,d)
x.zp(1,e)
x.zp(2,f)
x.zp(3,g)},
gac(d){return new A.iA(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a){x=e.gv(e)
w=B.A(this,B.t(this).i("y.E"))
x=x===B.aS(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
$ie3:1,
gA(d){return this.a}}
A.zY.prototype={
b0F(d,e,f,g){var x=this.a
x.$flags&2&&B.K(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g},
ew(d){return new A.zY(new Uint8Array(B.c9(this.a)))},
gdH(){return C.aj},
gA(d){return this.a.length},
gf8(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.e.L(f)
w.$flags&2&&B.K(w)
w[e]=x}},
gdI(d){var x=this.a
return!D.H.ga2(x)?x[0]:0},
gar(d){var x=this.a
return!D.H.ga2(x)?x[0]:0},
sar(d,e){var x,w=this.a
if(!D.H.ga2(w)){x=D.e.L(e)
w.$flags&2&&B.K(w)
w[0]=x}},
gaE(){var x=this.a
return x.length>1?x[1]:0},
saE(d){var x,w=this.a
if(w.length>1){x=D.e.L(d)
w.$flags&2&&B.K(w)
w[1]=x}},
gaF(d){var x=this.a
return x.length>2?x[2]:0},
saF(d,e){var x,w=this.a
if(w.length>2){x=D.e.L(e)
w.$flags&2&&B.K(w)
w[2]=x}},
gaU(d){var x=this.a
return x.length>3?x[3]:255},
gfS(){return this.gaU(0)/255},
gkd(){return A.k9(this)},
je(d,e){var x,w,v=this
v.sar(0,e.gar(e))
v.saE(e.gaE())
v.saF(0,e.gaF(e))
x=e.gaU(e)
w=v.a
if(w.length>3){x=D.e.L(x)
w.$flags&2&&B.K(w)
w[3]=x}},
gac(d){return new A.iA(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=B.A(this,B.t(this).i("y.E"))
x=x===B.aS(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
$ie3:1}
A.aqt.prototype={}
A.QI.prototype={}
A.a0T.prototype={
ew(d){return new A.a0T(this.a)},
gdH(){return C.aj},
gA(d){return 4},
gf8(){return null},
h(d,e){var x
if(e>=0&&e<4){x=e<<3>>>0
x=D.c.i4((this.a&D.c.ez(255,x))>>>0,x)}else x=0
return x},
m(d,e,f){},
je(d,e){},
gdI(d){return this.h(0,0)},
gar(d){return this.h(0,0)},
sar(d,e){},
gaE(){return this.h(0,1)},
saE(d){},
gaF(d){return this.h(0,2)},
saF(d,e){},
gaU(d){return this.h(0,3)},
gfS(){return this.gaU(this)/255},
gkd(){return A.k9(this)},
gac(d){return new A.iA(this)},
k(d,e){var x,w,v=this
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===v.gA(v)){x=e.gv(e)
w=B.A(v,B.t(v).i("y.E"))
x=x===B.aS(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
$ie3:1}
A.aqF.prototype={
gaU(d){return 255},
gfS(){return 1},
gA(d){return 3}}
A.p7.prototype={
J(){return"Format."+this.b}}
A.apj.prototype={
J(){return"BlendMode."+this.b}}
A.RT.prototype={
TO(d){var x=$.cU_()
if(!x.a4(0,d))return"<unknown>"
return x.h(0,d).a},
j(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(x=j.a,w=new B.ce(x,x.r,x.e,B.t(x).i("ce<1>")),v=y.p,u=y.r,t=y.N,s=y.P,r="";w.t();){q=w.d
r+=q+"\n"
p=x.h(0,q)
for(q=p.a,q=new B.ce(q,q.r,q.e,B.t(q).i("ce<1>"));q.t();){o=q.d
n=p.h(0,o)
r=n==null?r+("\t"+j.TO(o)+"\n"):r+("\t"+j.TO(o)+": "+n.j(0)+"\n")}for(q=p.b.a,o=new B.ce(q,q.r,q.e,B.t(q).i("ce<1>"));o.t();){m=o.d
r+=m+"\n"
if(!q.a4(0,m))q.m(0,m,new A.rz(B.I(v,u),new A.vY(B.I(t,s))))
l=q.h(0,m)
for(m=l.a,m=new B.ce(m,m.r,m.e,B.t(m).i("ce<1>"));m.t();){k=m.d
n=l.h(0,k)
r=n==null?r+("\t"+j.TO(k)+"\n"):r+("\t"+j.TO(k)+": "+n.j(0)+"\n")}}}return r.charCodeAt(0)==0?r:r},
jw(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0="exif",a1="interop",a2=a4.b
a4.b=!0
a4.lE(19789)
a4.lE(42)
a4.jx(8)
x=d.a
if(x.h(0,"ifd0")==null)x.m(0,"ifd0",new A.rz(B.I(y.p,y.r),new A.vY(B.I(y.N,y.P))))
w=y.N
v=y.p
u=B.I(w,v)
for(t=B.t(x),s=t.i("bO<1>"),r=new B.ce(x,x.r,x.e,t.i("ce<1>")),q=y.r,p=y.P,o=8;r.t();){n=r.d
m=x.h(0,n)
m.toString
u.m(0,n,o)
n=m.b.a
if(n.a4(0,a0)){l=new Uint32Array(1)
l[0]=0
m.m(0,34665,new A.u_(l))}else m.a.I(0,34665)
if(n.a4(0,a1)){l=new Uint32Array(1)
l[0]=0
m.m(0,40965,new A.u_(l))}else m.a.I(0,40965)
if(n.a4(0,"gps")){l=new Uint32Array(1)
l[0]=0
m.m(0,34853,new A.u_(l))}else m.a.I(0,34853)
m=m.a
o+=2+12*m.a+4
for(m=new B.bL(m,m.r,m.e,B.t(m).i("bL<2>"));m.t();){l=m.d
k=C.l3[l.gfN(l).a]*l.gA(l)
if(k>4)o+=k}for(m=new B.ce(n,n.r,n.e,B.t(n).i("ce<1>"));m.t();){l=m.d
if(!n.a4(0,l))n.m(0,l,new A.rz(B.I(v,q),new A.vY(B.I(w,p))))
j=n.h(0,l)
j.toString
u.m(0,l,o)
j=j.a
i=2+12*j.a
for(l=new B.bL(j,j.r,j.e,B.t(j).i("bL<2>"));l.t();){j=l.d
k=C.l3[j.gfN(j).a]*j.gA(j)
if(k>4)i+=k}o+=i}}h=x.a
for(r=h-1,t=t.i("aJ<2>"),g=0;g<h;++g){f=new B.bO(x,s).dX(0,g)
e=new B.aJ(x,t).dX(0,g)
n=e.b.a
if(n.a4(0,a0)){m=e.h(0,34665)
m.toString
l=u.h(0,a0)
l.toString
m.wI(l)}if(n.a4(0,a1)){m=e.h(0,40965)
m.toString
l=u.h(0,a1)
l.toString
m.wI(l)}if(n.a4(0,"gps")){m=e.h(0,34853)
m.toString
l=u.h(0,"gps")
l.toString
m.wI(l)}m=u.h(0,f)
m.toString
d.aCD(a4,e,m+2+12*e.a.a+4)
if(g===r)a4.jx(0)
else{m=u.h(0,new B.bO(x,s).dX(0,g+1))
m.toString
a4.jx(m)}d.aCE(a4,e)
for(m=new B.ce(n,n.r,n.e,B.t(n).i("ce<1>"));m.t();){l=m.d
if(!n.a4(0,l))n.m(0,l,new A.rz(B.I(v,q),new A.vY(B.I(w,p))))
j=n.h(0,l)
j.toString
l=u.h(0,l)
l.toString
d.aCD(a4,j,l+2+12*j.a.a)
d.aCE(a4,j)}}a4.b=a2},
aCD(d,e,f){var x,w,v,u,t,s,r=e.a
d.lE(r.a)
for(r=new B.ce(r,r.r,r.e,B.t(r).i("ce<1>"));r.t();){x=r.d
w=e.h(0,x)
w.toString
v=x===273
u=v&&w.gfN(w)===C.jm?C.dE:w.gfN(w)
t=v&&w.gfN(w)===C.jm?1:w.gA(w)
d.lE(x)
d.lE(u.a)
d.jx(t)
s=C.l3[w.gfN(w).a]*w.gA(w)
if(s<=4){w.jw(0,d)
for(;s<4;){d.be(0);++s}}else{d.jx(f)
f+=s}}return f},
aCE(d,e){var x,w
for(x=e.a,x=new B.bL(x,x.r,x.e,B.t(x).i("bL<2>"));x.t();){w=x.d
if(C.l3[w.gfN(w).a]*w.gA(w)>4)w.jw(0,d)}},
oA(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a5.e
a5.e=!0
x=a5.d
w=a5.av()
if(w===18761){a5.e=!1
if(a5.av()!==42){a5.e=a3
return!1}}else if(w===19789){a5.e=!0
if(a5.av()!==42){a5.e=a3
return!1}}else return!1
v=a5.ag()
for(u=this.a,t=y.v,s=y.p,r=y.r,q=y.N,p=y.P,o=a5.c,n=0;v>0;v=e){m=x+v
a5.d=m
if(o-m<2)break
l=new A.rz(B.I(s,r),new A.vY(B.I(q,p)))
k=a5.av()
j=B.a(new Array(k),t)
for(i=0;i<k;++i)j[i]=this.axC(a5,x)
for(m=j.length,h=0;h<j.length;j.length===m||(0,B.L)(j),++h){g=j[h]
f=g.b
if(f!=null)l.m(0,g.a,f)}u.m(0,"ifd"+n,l);++n
e=a5.ag()
if(e===v)break}for(u=new B.bL(u,u.r,u.e,B.t(u).i("bL<2>"));u.t();){o=u.d
for(m=J.aN(C.Gp.geD(C.Gp)),f=o.a,d=o.b.a;m.t();){a0=m.gM(m)
if(f.a4(0,a0)){a5.d=x+o.h(0,a0).L(0)
l=new A.rz(B.I(s,r),new A.vY(B.I(q,p)))
k=a5.av()
j=B.a(new Array(k),t)
for(i=0;i<k;++i)j[i]=this.axC(a5,x)
for(a1=j.length,h=0;h<j.length;j.length===a1||(0,B.L)(j),++h){g=j[h]
a2=g.b
if(a2!=null)l.m(0,g.a,a2)}a0=C.Gp.h(0,a0)
a0.toString
d.m(0,a0,l)}}}a5.e=a3
return!1},
axC(d,e){var x,w,v,u,t=d.av(),s=d.av(),r=d.ag(),q=new A.aQJ(t,null)
if(s>13)return q
x=C.T2[s]
w=r*C.l3[s]
v=d.d
if((w>4?d.d=d.ag()+e:v)+w>d.c)return q
u=d.jN(w)
switch(x.a){case 0:break
case 6:q.b=new A.y7(new Int8Array(B.c9(J.cU7(D.H.gaq(u.ik()),0,r))))
break
case 1:q.b=new A.vX(new Uint8Array(B.c9(u.jN(r).ik())))
break
case 7:q.b=new A.Kp(new Uint8Array(B.c9(u.jN(r).ik())))
break
case 2:q.b=new A.Et(r===0?"":u.jO(r-1))
break
case 3:q.b=A.d5T(u,r)
break
case 4:q.b=A.d5O(u,r)
break
case 5:q.b=A.d5P(u,r)
break
case 10:q.b=A.d5R(u,r)
break
case 8:q.b=A.d5S(u,r)
break
case 9:q.b=A.d5Q(u,r)
break
case 11:q.b=A.d5V(u,r)
break
case 12:q.b=A.d5N(u,r)
break}d.d=v+4
return q}}
A.aQJ.prototype={
gn(d){return this.b}}
A.auM.prototype={}
A.vY.prototype={
b0T(d){d.a.aO(0,new A.buy(this))},
gfE(d){var x=this.a
return new B.aJ(x,B.t(x).i("aJ<2>"))},
ga2(d){var x,w=this.a
if(w.a===0)return!0
for(w=new B.bL(w,w.r,w.e,B.t(w).i("bL<2>"));w.t();){x=w.d
if(!(x.a.a===0&&x.b.ga2(0)))return!1}return!0},
a4(d,e){return this.a.a4(0,e)},
N(d){this.a.N(0)},
h(d,e){var x=this.a
if(!x.a4(0,e))x.m(0,e,new A.rz(B.I(y.p,y.r),new A.vY(B.I(y.N,y.P))))
x=x.h(0,e)
x.toString
return x},
m(d,e,f){this.a.m(0,e,f)}}
A.rz.prototype={
gfE(d){var x=this.a
return new B.aJ(x,B.t(x).i("aJ<2>"))},
ga2(d){return this.a.a===0&&this.b.ga2(0)},
ae9(d){d.a.aO(0,new A.buz(this))
d.b.a.aO(0,new A.buA(this))},
a4(d,e){return this.a.a4(0,e)},
h(d,e){if(typeof e=="string")e=C.a2D.h(0,e)
if(B.ht(e))return this.a.h(0,e)
return null},
m(d,e,f){var x,w,v,u,t,s,r=this
if(typeof e=="string")e=C.a2D.h(0,e)
if(!B.ht(e))return
if(f==null)r.a.I(0,e)
else if(f instanceof A.l1)r.a.m(0,e,f)
else{x=$.cU_().h(0,e)
if(x!=null)switch(x.b.a){case 1:if(y.L.b(f))r.a.m(0,e,new A.vX(new Uint8Array(B.c9(new Uint8Array(B.c9(f))))))
else if(B.ht(f)){w=new Uint8Array(1)
w[0]=f
r.a.m(0,e,new A.vX(w))}break
case 2:if(typeof f=="string")r.a.m(0,e,new A.Et(f))
break
case 3:if(y.L.b(f))r.a.m(0,e,new A.Az(new Uint16Array(B.c9(new Uint16Array(B.c9(f))))))
else if(B.ht(f))r.a.m(0,e,A.dwG(f))
break
case 4:if(y.L.b(f))r.a.m(0,e,new A.u_(new Uint32Array(B.c9(new Uint32Array(B.c9(f))))))
else if(B.ht(f))r.a.m(0,e,A.dwF(f))
break
case 5:if(y.k.b(f))r.a.m(0,e,new A.vZ(B.aR(f,!0,y.i)))
else if(y.L.b(f)&&J.bk(f)===2){w=J.a_(f)
r.a.m(0,e,new A.vZ(B.a([new A.pq(w.h(f,0),w.h(f,1))],y.j)))}else if(f instanceof A.pq)r.a.m(0,e,new A.vZ(B.a([new A.pq(f.a,f.b)],y.j)))
else if(y.f.b(f)){w=J.a_(f)
v=w.gA(f)
u=y.i
t=J.jn(v,u)
for(s=0;s<v;++s)t[s]=new A.pq(J.v(w.h(f,s),0),J.v(w.h(f,s),1))
r.a.m(0,e,new A.vZ(B.aR(t,!0,u)))}break
case 6:if(y.L.b(f))r.a.m(0,e,new A.y7(new Int8Array(B.c9(new Int8Array(B.c9(f))))))
else if(B.ht(f)){w=new Int8Array(1)
w[0]=f
r.a.m(0,e,new A.y7(w))}break
case 7:if(y.L.b(f))r.a.m(0,e,new A.Kp(new Uint8Array(B.c9(new Uint8Array(B.c9(f))))))
break
case 8:if(y.L.b(f))r.a.m(0,e,new A.Ay(new Int16Array(B.c9(new Int16Array(B.c9(f))))))
else if(B.ht(f)){w=new Int16Array(1)
w[0]=f
r.a.m(0,e,new A.Ay(w))}break
case 9:if(y.L.b(f))r.a.m(0,e,new A.Ax(new Int32Array(B.c9(new Int32Array(B.c9(f))))))
else if(B.ht(f)){w=new Int32Array(1)
w[0]=f
r.a.m(0,e,new A.Ax(w))}break
case 10:if(y.k.b(f))r.a.m(0,e,new A.w_(B.aR(f,!0,y.i)))
else if(y.L.b(f)&&J.bk(f)===2){w=J.a_(f)
r.a.m(0,e,new A.w_(B.a([new A.pq(w.h(f,0),w.h(f,1))],y.j)))}else if(f instanceof A.pq)r.a.m(0,e,new A.w_(B.a([f],y.j)))
else if(y.f.b(f)){w=J.a_(f)
v=w.gA(f)
u=y.i
t=J.jn(v,u)
for(s=0;s<v;++s)t[s]=new A.pq(J.v(w.h(f,s),0),J.v(w.h(f,s),1))
r.a.m(0,e,new A.w_(B.aR(t,!0,u)))}break
case 11:if(y.H.b(f))r.a.m(0,e,new A.Ev(new Float32Array(B.c9(new Float32Array(B.c9(f))))))
else if(typeof f=="number")r.a.m(0,e,A.d5U(f))
else if(B.ht(f))r.a.m(0,e,A.d5U(f))
break
case 12:if(y.H.b(f))r.a.m(0,e,new A.Eu(new Float64Array(B.c9(new Float64Array(B.c9(f))))))
else if(typeof f=="number")r.a.m(0,e,A.d5M(f))
else if(B.ht(f))r.a.m(0,e,A.d5M(f))
break
case 0:break}}},
giO(d){var x=this.a.h(0,274)
return x==null?null:x.L(0)},
siO(d,e){this.a.I(0,274)}}
A.ob.prototype={
J(){return"IfdValueType."+this.b}}
A.l1.prototype={
jP(d,e){return 0},
L(d){return this.jP(0,0)},
uS(d){return 0},
uR(){return new Uint8Array(0)},
j(d){return""},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.l1&&x.gfN(x)===e.gfN(e)&&x.gA(x)===e.gA(e)&&x.gv(x)===e.gv(e)},
gv(d){return 0},
wI(d){}}
A.vX.prototype={
ew(d){return new A.vX(new Uint8Array(B.c9(this.a)))},
gfN(d){return C.Pw},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.vX){x=this.a
x=x.length===e.a.length&&B.aS(x)===B.aS(e.a)}else x=!1
return x},
gv(d){return B.aS(this.a)},
jP(d,e){return this.a[e]},
L(d){return this.jP(0,0)},
wI(d){var x=this.a
x.$flags&2&&B.K(x)
x[0]=d},
uR(){return this.a},
jw(d,e){e.mI(this.a)},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gn(d){return this.a}}
A.Et.prototype={
ew(d){return new A.Et(this.a)},
gfN(d){return C.bW},
gA(d){return this.a.length+1},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.Et){x=this.a
x=x.length+1===e.a.length+1&&D.d.gv(x)===D.d.gv(e.a)}else x=!1
return x},
gv(d){return D.d.gv(this.a)},
uR(){return new Uint8Array(B.c9(new B.fj(this.a)))},
jw(d,e){e.mI(new B.fj(this.a))
e.be(0)},
j(d){return this.a},
gn(d){return this.a}}
A.Az.prototype={
b0Y(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.av()
w.$flags&2&&B.K(w)
w[x]=v}},
ew(d){return new A.Az(new Uint16Array(B.c9(this.a)))},
gfN(d){return C.bD},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.Az){x=this.a
x=x.length===e.a.length&&B.aS(x)===B.aS(e.a)}else x=!1
return x},
gv(d){return B.aS(this.a)},
jP(d,e){return this.a[e]},
L(d){return this.jP(0,0)},
wI(d){var x=this.a
x.$flags&2&&B.K(x)
x[0]=d},
uR(){return J.jT(D.eN.gaq(this.a))},
jw(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.lE(this.a[x])},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gn(d){return this.a}}
A.u_.prototype={
b0V(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.ag()
w.$flags&2&&B.K(w)
w[x]=v}},
ew(d){return new A.u_(new Uint32Array(B.c9(this.a)))},
gfN(d){return C.dE},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.u_){x=this.a
x=x.length===e.a.length&&B.aS(x)===B.aS(e.a)}else x=!1
return x},
gv(d){return B.aS(this.a)},
jP(d,e){return this.a[e]},
L(d){return this.jP(0,0)},
wI(d){var x=this.a
x.$flags&2&&B.K(x)
x[0]=d},
uR(){return J.jT(D.bM.gaq(this.a))},
jw(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.jx(this.a[x])},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gn(d){return this.a}}
A.vZ.prototype={
ew(d){return new A.vZ(B.aR(this.a,!0,y.i))},
gfN(d){return C.f3},
gA(d){return this.a.length},
jP(d,e){return this.a[e].L(0)},
L(d){return this.jP(0,0)},
uS(d){return this.a[0].uS(0)},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.vZ){x=this.a
x=x.length===e.a.length&&B.aS(x)===B.aS(e.a)}else x=!1
return x},
gv(d){return B.aS(this.a)},
jw(d,e){var x,w,v,u
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.L)(x),++v){u=x[v]
e.jx(u.a)
e.jx(u.b)}},
j(d){var x=this.a
return x.length===1?x[0].j(0):B.o(x)},
gn(d){return this.a}}
A.y7.prototype={
ew(d){return new A.y7(new Int8Array(B.c9(this.a)))},
gfN(d){return C.PA},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.y7){x=this.a
x=x.length===e.a.length&&B.aS(x)===B.aS(e.a)}else x=!1
return x},
gv(d){return B.aS(this.a)},
jP(d,e){return this.a[e]},
L(d){return this.jP(0,0)},
wI(d){var x=this.a
x.$flags&2&&B.K(x)
x[0]=d},
uR(){return J.jT(D.ln.gaq(this.a))},
jw(d,e){e.mI(J.dx(D.ln.gaq(this.a),0,null))},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gn(d){return this.a}}
A.Ay.prototype={
b0X(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.av()
u=$.oO()
u.$flags&2&&B.K(u)
u[0]=v
v=$.pS()[0]
w.$flags&2&&B.K(w)
w[x]=v}},
ew(d){return new A.Ay(new Int16Array(B.c9(this.a)))},
gfN(d){return C.PB},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.Ay){x=this.a
x=x.length===e.a.length&&B.aS(x)===B.aS(e.a)}else x=!1
return x},
gv(d){return B.aS(this.a)},
jP(d,e){return this.a[e]},
L(d){return this.jP(0,0)},
wI(d){var x=this.a
x.$flags&2&&B.K(x)
x[0]=d},
uR(){return J.jT(D.lm.gaq(this.a))},
jw(d,e){var x,w=new Int16Array(1),v=J.cU8(D.lm.gaq(w),0,null),u=this.a.length
for(x=0;x<u;++x){w[0]=this.a[x]
e.lE(v[0])}},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gn(d){return this.a}}
A.Ax.prototype={
b0W(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.ag()
u=$.ix()
u.$flags&2&&B.K(u)
u[0]=v
v=$.lW()[0]
w.$flags&2&&B.K(w)
w[x]=v}},
ew(d){return new A.Ax(new Int32Array(B.c9(this.a)))},
gfN(d){return C.PC},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.Ax){x=this.a
x=x.length===e.a.length&&B.aS(x)===B.aS(e.a)}else x=!1
return x},
gv(d){return B.aS(this.a)},
jP(d,e){return this.a[e]},
L(d){return this.jP(0,0)},
wI(d){var x=this.a
x.$flags&2&&B.K(x)
x[0]=d},
uR(){return J.jT(D.d7.gaq(this.a))},
jw(d,e){var x,w,v,u=this.a.length
for(x=0;x<u;++x){w=this.a[x]
v=$.b2R()
v.$flags&2&&B.K(v)
v[0]=w
e.jx($.cTN()[0])}},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gn(d){return this.a}}
A.w_.prototype={
ew(d){return new A.w_(B.aR(this.a,!0,y.i))},
gfN(d){return C.Px},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.w_){x=this.a
x=x.length===e.a.length&&B.aS(x)===B.aS(e.a)}else x=!1
return x},
gv(d){return B.aS(this.a)},
jP(d,e){return this.a[e].L(0)},
L(d){return this.jP(0,0)},
uS(d){return this.a[0].uS(0)},
jw(d,e){var x,w,v,u,t,s
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.L)(x),++v){u=x[v]
t=$.b2R()
t.$flags&2&&B.K(t)
t[0]=u.a
s=$.cTN()
e.jx(s[0])
t[0]=u.b
e.jx(s[0])}},
j(d){var x=this.a
return x.length===1?x[0].j(0):B.o(x)},
gn(d){return this.a}}
A.Ev.prototype={
b0Z(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.ag()
u=$.ix()
u.$flags&2&&B.K(u)
u[0]=v
v=$.Id()[0]
w.$flags&2&&B.K(w)
w[x]=v}},
ew(d){return new A.Ev(new Float32Array(B.c9(this.a)))},
gfN(d){return C.Py},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.Ev){x=this.a
x=x.length===e.a.length&&B.aS(x)===B.aS(e.a)}else x=!1
return x},
gv(d){return B.aS(this.a)},
uR(){return J.jT(D.fR.gaq(this.a))},
uS(d){return this.a[0]},
jw(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.c_C(this.a[x])},
j(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gn(d){return this.a}}
A.Eu.prototype={
b0U(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.a3x()
w.$flags&2&&B.K(w)
w[x]=v}},
ew(d){return new A.Eu(new Float64Array(B.c9(this.a)))},
gfN(d){return C.Pz},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.Eu){x=this.a
x=x.length===e.a.length&&B.aS(x)===B.aS(e.a)}else x=!1
return x},
gv(d){return B.aS(this.a)},
uS(d){return this.a[0]},
uR(){return J.jT(D.fe.gaq(this.a))},
jw(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.c_D(this.a[x])},
j(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gn(d){return this.a}}
A.Kp.prototype={
ew(d){return new A.Kp(new Uint8Array(B.c9(this.a)))},
gfN(d){return C.jm},
gA(d){return this.a.length},
uR(){return this.a},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.Kp){x=this.a
x=x.length===e.a.length&&B.aS(x)===B.aS(e.a)}else x=!1
return x},
gv(d){return B.aS(this.a)},
jw(d,e){e.mI(this.a)},
j(d){return"<data>"},
gn(d){return this.a}}
A.nd.prototype={
J(){return"BmpCompression."+this.b}}
A.b8r.prototype={}
A.Iv.prototype={
anU(d,e){var x,w,v,u,t,s,r,q=this,p=q.d,o=p<=40
if(o){x=q.r
x=x===C.BT||x===C.BU}else x=!0
if(x){x=q.as=d.ag()
w=A.cRj(x)
q.CW=w
v=D.c.hs(x,w)
x=v>0
q.cx=x?255/v:0
w=q.at=d.ag()
u=A.cRj(w)
q.cy=u
t=D.c.hs(w,u)
q.db=x?255/t:0
w=q.ax=d.ag()
u=A.cRj(w)
q.dx=u
s=D.c.hs(w,u)
q.dy=x?255/s:0
if(!o||q.r===C.BU){o=q.ay=d.ag()
x=A.cRj(o)
q.fr=x
r=D.c.hs(o,x)
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
if(q.f<=8)q.bXd(d)},
gRb(){var x=this.d
if(x!==40)if(x===124){x=this.ay
x===$&&B.b()
x=x===0}else x=!1
else x=!0
return x},
ge3(d){return Math.abs(this.c)},
bXd(d){var x,w,v,u,t,s=this,r=s.z
if(r===0)r=D.c.ez(1,s.f)
s.ch=new A.wh(new Uint8Array(r*3),r,3)
for(x=0;x<r;++x){w=J.v(d.a,d.d++)
v=J.v(d.a,d.d++)
u=J.v(d.a,d.d++)
t=J.v(d.a,d.d++)
s.ch.Us(x,u,v,w,t)}},
bJS(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(o.ch!=null){x=o.f
if(x===1){w=d.cE()
for(v=7;v>=0;--v)e.$4(D.c.oJ(w,v)&1,0,0,0)
return}else if(x===2){w=d.cE()
for(v=6;v>=0;v-=2)e.$4(D.c.oJ(w,v)&2,0,0,0)}else if(x===4){w=d.cE()
e.$4(D.c.Z(w,4)&15,0,0,0)
e.$4(w&15,0,0,0)
return}else if(x===8){e.$4(d.cE(),0,0,0)
return}}x=o.r
if(x===C.BT&&o.f===32){u=d.ag()
x=o.as
x===$&&B.b()
t=o.CW
t===$&&B.b()
t=D.c.hs((u&x)>>>0,t)
x=o.cx
x===$&&B.b()
s=D.e.L(t*x)
x=o.at
x===$&&B.b()
t=o.cy
t===$&&B.b()
t=D.c.hs((u&x)>>>0,t)
x=o.db
x===$&&B.b()
r=D.e.L(t*x)
x=o.ax
x===$&&B.b()
t=o.dx
t===$&&B.b()
t=D.c.hs((u&x)>>>0,t)
x=o.dy
x===$&&B.b()
q=D.e.L(t*x)
if(o.gRb())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.hs((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.e.L(t*x)}return e.$4(s,r,q,p)}else{t=o.f
if(t===32&&x===C.KQ){q=d.cE()
r=d.cE()
s=d.cE()
p=d.cE()
return e.$4(s,r,q,o.gRb()?255:p)}else if(t===24){q=d.cE()
r=d.cE()
return e.$4(d.cE(),r,q,255)}else if(t===16){u=d.av()
x=o.as
x===$&&B.b()
t=o.CW
t===$&&B.b()
t=D.c.hs((u&x)>>>0,t)
x=o.cx
x===$&&B.b()
s=D.e.L(t*x)
x=o.at
x===$&&B.b()
t=o.cy
t===$&&B.b()
t=D.c.hs((u&x)>>>0,t)
x=o.db
x===$&&B.b()
r=D.e.L(t*x)
x=o.ax
x===$&&B.b()
t=o.dx
t===$&&B.b()
t=D.c.hs((u&x)>>>0,t)
x=o.dy
x===$&&B.b()
q=D.e.L(t*x)
if(o.gRb())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.hs((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.e.L(t*x)}return e.$4(s,r,q,p)}else throw B.p(A.co("Unsupported bitsPerPixel ("+t+") or compression ("+x.j(0)+")."))}}}
A.apn.prototype={
pA(d){var x,w=null
if(!A.cUE(A.de(d,!1,w,0)))return w
x=A.de(d,!1,w,0)
this.a=x
return this.b=A.doq(x,w)},
kH(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b
if(e==null)return new A.Ey(f,f,f,f,0,C.bG,0,0)
x=g.a
x===$&&B.b()
w=e.a.b
w===$&&B.b()
x.d=w
v=e.f
w=e.b
u=D.c.aK(w*v+31,32)*4
x=g.c
if(x)t=4
else if(v===1||v===4||v===8)t=1
else{s=v===32?4:3
t=s}if(x)r=C.aj
else if(v===1)r=C.hE
else{if(v===2)s=C.it
else if(v===4)s=C.iu
else s=C.aj
r=s}q=x?f:e.ch
p=A.iQ(f,f,r,0,C.bG,e.ge3(e),f,0,t,q,C.aj,w,!1)
for(o=p.ge3(0)-1,x=e.c,w=1/x<0,s=x<0,x=x===0;o>=0;--o){n={}
if(!(x?w:s))m=o
else{l=p.a
l=l==null?f:l.b
m=(l==null?0:l)-1-o}l=g.a
k=l.jS(u)
l.d=l.d+(k.c-k.d)
l=p.a
j=l==null
i=j?f:l.a
if(i==null)i=0
n.a=0
h=j?f:l.er(0,m,f)
if(h==null)h=new A.h_()
for(;n.a<i;)e.bJS(k,new A.b8q(n,g,i,e,h))}return p},
ny(d,e,f){if(this.pA(e)==null)return null
return this.kH(0)}}
A.biF.prototype={}
A.bhn.prototype={}
A.bho.prototype={}
A.blt.prototype={}
A.auO.prototype={}
A.ay0.prototype={
S3(){return this.w},
tF(d,e,f,g,h){throw B.p(A.co("B44 compression not yet supported."))},
L4(d,e,f){return this.tF(d,e,f,null,null)},
j(d){return B.o(this.r)+" "+this.x}}
A.RV.prototype={
J(){return"ExrChannelType."+this.b}}
A.JC.prototype={
J(){return"ExrChannelName."+this.b}}
A.auP.prototype={
b0J(d){var x=this,w=d.SI()
x.a=w
if(w.length===0)return
x.c=C.aJ8[d.ag()]
d.cE()
d.d+=3
x.f=d.ag()
x.r=d.ag()
w=x.a
if(w==="R"){x.w=!0
x.b=C.axL}else if(w==="G"){x.w=!0
x.b=C.axM}else if(w==="B"){x.w=!0
x.b=C.axN}else if(w==="A"){x.w=!0
x.b=C.axO}else{x.w=!1
x.b=C.axP}switch(x.c.a){case 0:x.d=4
break
case 1:x.d=2
break
case 2:x.d=4
break}}}
A.vL.prototype={
J(){return"ExrCompressorType."+this.b}}
A.bn3.prototype={
tF(d,e,f,g,h){throw B.p(A.co("Unsupported compression type"))},
L4(d,e,f){return this.tF(d,e,f,null,null)}}
A.bwd.prototype={}
A.auQ.prototype={}
A.bn5.prototype={
b0K(d){var x,w,v,u,t=this,s=A.de(d,!1,null,0)
if(s.ag()!==20000630)throw B.p(A.co("File is not an OpenEXR image file."))
x=t.d=s.cE()
if(x!==2)throw B.p(A.co("Cannot read version "+x+" image files."))
x=t.e=s.tu()
if((x&4294967289)>>>0!==0)throw B.p(A.co("The file format version number's flag field contains unrecognized flags."))
if((x&16)===0){w=t.c
v=A.d6h(w.length,(x&2)!==0,s)
if(v.w>0)w.push(v)}else for(x=t.c;!0;){v=A.d6h(x.length,(t.e&2)!==0,s)
if(v.w<=0)break
x.push(v)}x=t.c
w=x.length
if(w===0)throw B.p(A.co("Error reading image header"))
for(u=0;u<x.length;x.length===w||(0,B.L)(x),++u)x[u].bXc(s)
t.btV(s)},
btV(d){var x,w,v,u,t=this
for(x=t.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.L)(x),++v){u=x[v]
t.a=Math.max(t.a,u.w)
t.b=Math.max(t.b,u.x)
if(u.db)t.bu4(u,d)
else t.bu2(u,d)}},
bu4(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.e
b3===$&&B.b()
x=(b3&16)!==0
b3=b4.b
b3.toString
w=b4.CW
v=b4.ay
u=A.ct(b5,b2,0)
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
if(x)if(u.ag()!==s)throw B.p(A.co("Invalid Image Data"))
k=u.ag()
j=u.ag()
u.ag()
u.ag()
i=u.jS(u.ag())
u.d=u.d+(i.c-i.d)
h=b4.dy
h.toString
g=j*h
f=b4.dx
f.toString
h=w.tF(i,k*f,g,f,h)
f=h.length
f=Math.min(f,f)
e=new A.nn(h,0,f,0,!1)
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
switch(h.a){case 1:h=e.av()
a8=$.iP
a9=(a8!=null?a8:A.jE())[h]
break
case 2:a9=e.av()
break
case 0:a9=e.ag()
break
default:a9=b2}h=a5.d
h===$&&B.b()
a2+=h
h=a5.w
h===$&&B.b()
if(h){h=b3.a
b0=h==null?b2:h.er(a6,g,b2)
if(b0==null)b0=new A.h_()
h=a5.b
h===$&&B.b()
b0.m(0,h.a,a9)}else{h=a5.a
h===$&&B.b()
a8=b3.b
b1=a8!=null?a8.h(0,h):b2
if(b1!=null)b1.fF(a6,g,a9,0,0)}}}++a3;++g}}++o;++q}++r}},
bu2(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=this.e
a5===$&&B.b()
x=(a5&16)!==0
a5=a6.b
a5.toString
w=a6.CW
v=a6.ay[0]
u=a6.cx
t=A.ct(a7,a4,0)
for(s=v.length,r=a6.c,q=w!=null,p=0,o=0;o<s;++o){t.d=v[o]
if(x)if(t.ag()!==3.141592653589793)throw B.p(A.co("Invalid Image Data"))
n=t.ag()
m=$.ix()
m.$flags&2&&B.K(m)
m[0]=n
n=$.lW()
m[0]=t.ag()
l=t.jS(n[0])
t.d=t.d+(l.c-l.d)
if(q){n=w.L4(l,0,p)
m=n.length
k=new A.nn(n,0,Math.min(m,m),0,!1)}else k=l
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
switch(n.a){case 1:n=k.av()
m=$.iP
a1=(m!=null?m:A.jE())[n]
break
case 2:a1=k.av()
break
case 0:a1=k.ag()
break
default:a1=a4}n=e.d
n===$&&B.b()
g+=n
n=e.w
n===$&&B.b()
if(n){n=a5.a
a2=n==null?a4:n.er(a0,p,a4)
if(a2==null)a2=new A.h_()
n=e.b
n===$&&B.b()
a2.m(0,n.a,a1)}else{n=e.a
n===$&&B.b()
m=a5.b
a3=m!=null?m.h(0,n):a4
if(a3!=null)a3.fF(a0,p,a1,0,0)}}}++h;++p}}}}
A.a30.prototype={
b0L(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=B.I(y.N,y.I)
for(x=a2.e,w=y.t,v=a2.c,u=C.jj;!0;){t=a7.SI()
if(t.length===0)break
s=a7.SI()
r=a7.ag()
q=a7.jS(r)
a7.d=a7.d+(q.c-q.d)
x.m(0,t,new A.auO(t,s,r))
switch(t){case"channels":for(;!0;){p=new A.auP()
p.b0J(q)
o=p.a
o===$&&B.b()
if(o.length===0)break
n=p.w
n===$&&B.b()
if(n){++a2.d
o=p.c
o===$&&B.b()
if(o===C.DY)u=C.jj
else u=o===C.DZ?C.kR:C.kS}else{n=p.c
n===$&&B.b()
if(n===C.DY){n=a2.w
m=a2.x
a4.m(0,o,new A.Sw(new Uint16Array(n*m),n,m,1))}else if(n===C.DZ){n=a2.w
m=a2.x
a4.m(0,o,new A.Sx(new Float32Array(n*m),n,m,1))}else if(n===C.Ob){n=a2.w
m=a2.x
a4.m(0,o,new A.SB(new Uint32Array(n*m),n,m,1))}}v.push(p)}break
case"chromaticities":o=new Float32Array(8)
a2.at=o
n=q.ag()
m=$.ix()
m.$flags&2&&B.K(m)
m[0]=n
n=$.Id()
o[0]=n[0]
o=a2.at
m[0]=q.ag()
l=n[0]
o.$flags&2&&B.K(o)
o[1]=l
l=a2.at
m[0]=q.ag()
o=n[0]
l.$flags&2&&B.K(l)
l[2]=o
o=a2.at
m[0]=q.ag()
l=n[0]
o.$flags&2&&B.K(o)
o[3]=l
l=a2.at
m[0]=q.ag()
o=n[0]
l.$flags&2&&B.K(l)
l[4]=o
o=a2.at
m[0]=q.ag()
l=n[0]
o.$flags&2&&B.K(o)
o[5]=l
l=a2.at
m[0]=q.ag()
o=n[0]
l.$flags&2&&B.K(l)
l[6]=o
o=a2.at
m[0]=q.ag()
n=n[0]
o.$flags&2&&B.K(o)
o[7]=n
break
case"compression":a2.ax=C.aLC[J.v(q.a,q.d++)]
break
case"dataWindow":o=q.ag()
n=$.ix()
n.$flags&2&&B.K(n)
n[0]=o
o=$.lW()
m=o[0]
n[0]=q.ag()
l=o[0]
n[0]=q.ag()
k=o[0]
n[0]=q.ag()
o=a2.r=B.a([m,l,k,o[0]],w)
a2.w=o[2]-o[0]+1
a2.x=o[3]-o[1]+1
break
case"displayWindow":o=q.ag()
n=$.ix()
n.$flags&2&&B.K(n)
n[0]=o
$.lW()
n[0]=q.ag()
n[0]=q.ag()
n[0]=q.ag()
break
case"lineOrder":break
case"pixelAspectRatio":o=q.ag()
n=$.ix()
n.$flags&2&&B.K(n)
n[0]=o
$.Id()
break
case"screenWindowCenter":o=q.ag()
n=$.ix()
n.$flags&2&&B.K(n)
n[0]=o
$.Id()
n[0]=q.ag()
break
case"screenWindowWidth":o=q.ag()
n=$.ix()
n.$flags&2&&B.K(n)
n[0]=o
$.Id()
break
case"tiles":a2.dx=q.ag()
a2.dy=q.ag()
j=J.v(q.a,q.d++)
a2.fr=j&15
a2.fx=D.c.Z(j,4)&15
break
case"type":i=q.SI()
if(i!=="deepscanline")if(i!=="deeptile")throw B.p(A.co("EXR Invalid type: "+i))
break
default:break}}x=a2.w
a2.b=A.iQ(a3,a3,u,0,C.bG,a2.x,a3,0,a2.d,a3,C.aj,x,!1)
for(x=new B.ce(a4,a4.r,a4.e,a4.$ti.i("ce<1>"));x.t();){w=x.d
o=a2.b
o.toString
n=a4.h(0,w)
n.toString
o.aSJ(w,n)}if(a2.db){x={}
w=a2.r
w===$&&B.b()
a2.id=a2.b4Z(w[0],w[2],w[1],w[3])
w=a2.r
a2.k1=a2.b5_(w[0],w[2],w[1],w[3])
if(a2.fr!==2)a2.k1=1
w=a2.id
w.toString
v=a2.r
a2.fy=a2.apu(w,v[0],v[2],a2.dx,a2.fx)
v=a2.k1
v.toString
w=a2.r
a2.go=a2.apu(v,w[1],w[3],a2.dy,a2.fx)
w=a2.b4X()
a2.k2=w
v=a2.dx
v.toString
v=w*v
a2.k3=v
a2.CW=A.d4G(a2.ax,a2,v,a2.dy)
x.a=x.b=0
v=a2.id
v.toString
w=a2.k1
w.toString
a2.ay=B.ql(v*w,new A.bn6(x,a2),!0,y.bk)}else{x=a2.x
w=a2.ch=new Uint32Array(x+1)
for(o=v.length,n=a2.r,m=a2.w,h=0;h<o;++h){g=v[h]
l=g.d
l===$&&B.b()
k=g.f
k===$&&B.b()
f=D.c.hR(l*m,k)
for(l=g.r,e=0;e<x;++e){n===$&&B.b()
k=n[1]
l===$&&B.b()
if(D.c.au(e+k,l)===0)w[e]=w[e]+f}}for(d=0,e=0;e<x;++e)d=Math.max(d,w[e])
x=A.d4G(a2.ax,a2,d,a3)
a2.CW=x
x=a2.cx=x.S3()
w=a2.ch
v=w.length
o=new Uint32Array(v)
a2.cy=o
for(--v,a0=0,a1=0;a1<=v;++a1){if(D.c.au(a1,x)===0)a0=0
o[a1]=a0
a0+=w[a1]}x=D.c.hR(a2.x+x,x)
a2.ay=B.a([new Uint32Array(x-1)],y.w)}},
b4Z(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.Wp(w):u.VC(w))+1
break
case 2:v=e-d+1
x=(u.fx===0?u.Wp(v):u.VC(v))+1
break
default:throw B.p(A.co("Unknown LevelMode format."))}return x},
b5_(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.Wp(w):u.VC(w))+1
break
case 2:v=g-f+1
x=(u.fx===0?u.Wp(v):u.VC(v))+1
break
default:throw B.p(A.co("Unknown LevelMode format."))}return x},
Wp(d){var x
for(x=0;d>1;){++x
d=D.c.Z(d,1)}return x},
VC(d){var x,w
for(x=0,w=0;d>1;){if((d&1)!==0)w=1;++x
d=D.c.Z(d,1)}return x+w},
b4X(){var x,w,v,u,t
for(x=this.c,w=x.length,v=0,u=0;u<w;++u){t=x[u].d
t===$&&B.b()
v+=t}return v},
apu(d,e,f,g,h){var x,w,v,u,t,s,r=J.jG(d,y.p)
for(x=h===1,w=f-e+1,v=0;v<d;++v){u=D.c.ez(1,v)
t=D.c.hR(w,u)
if(x&&t*u<w)++t
s=Math.max(t,1)
g.toString
r[v]=D.c.hR(s+g-1,g)}return r}}
A.ay1.prototype={
bXc(d){var x,w,v,u,t,s=this
if(s.db)for(x=0;x<s.ay.length;++x)for(w=0;v=s.ay[x],w<v.length;++w){u=d.aix()
v.$flags&2&&B.K(v)
v[w]=u}else{t=s.ay[0].length
for(x=0;x<t;++x){v=s.ay[0]
u=d.aix()
v.$flags&2&&B.K(v)
v[x]=u}}}}
A.bwe.prototype={
b16(d,e,f){var x,w,v,u=this,t=d.c.length,s=J.jG(t,y.bc)
for(x=0;x<t;++x)s[x]=new A.aU3()
u.y=s
w=u.w
w.toString
v=D.c.aK(w*u.x,2)
u.z=new Uint16Array(v)},
S3(){return this.x},
tF(a4,a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
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
n=D.c.hR(a5,v)
m=D.c.hR(x,v)
v=n*v<a5?0:1
v=m-n+v
o.c=v
u=p.r
u===$&&B.b()
n=D.c.hR(a6,u)
m=D.c.hR(w,u)
l=n*u<a6?0:1
l=m-n+l
o.d=l
o.e=u
u=p.d
u===$&&B.b()
u=u/2|0
o.f=u
r+=v*l*u}k=a4.av()
j=a4.av()
if(j>=8192)throw B.p(A.co("Error in header for PIZ-compressed data (invalid bitmap size)."))
i=new Uint8Array(8192)
if(k<=j){h=a4.jN(j-k+1)
g=h.c-h.d
for(f=k,q=0;q<g;++q,f=e){e=f+1
i[f]=J.v(h.a,h.d+q)}}d=new Uint16Array(65536)
a0=a3.bvy(i,d)
A.duy(a4,a4.ag(),a3.z,r)
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
A.duB(u,l+f,a1,v,a2,a1*v,a0);++f}}v=a3.z
v.toString
a3.b34(d,v,r)
v=a3.r
if(v==null){v=a3.w
v.toString
v=a3.r=A.rT(!1,v*a3.x+73728)}v.a=0
for(;a6<=w;++a6)for(q=0;q<s;++q){v=a3.y
v===$&&B.b()
o=v[q]
v=o.e
v===$&&B.b()
if(D.c.au(a6,v)!==0)continue
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
v.lE(u[l])}}v=a3.r
return J.dx(D.H.gaq(v.c),0,v.a)},
L4(d,e,f){return this.tF(d,e,f,null,null)},
b34(d,e,f){var x,w,v
for(x=e.$flags|0,w=0;w<f;++w){v=d[e[w]]
x&2&&B.K(e)
e[w]=v}},
bvy(d,e){var x,w,v,u,t
for(x=e.$flags|0,w=0,v=0;v<65536;++v)if(v===0||(d[v>>>3]&1<<(v&7))>>>0!==0){u=w+1
x&2&&B.K(e)
e[w]=v
w=u}for(u=w;u<65536;u=t){t=u+1
x&2&&B.K(e)
e[u]=0}return w-1}}
A.aU3.prototype={}
A.bwf.prototype={
S3(){return this.x},
tF(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=C.kE.DN(a0.ik()),d=f.y
if(d==null){d=f.w
d.toString
d=f.y=A.rT(!1,f.x*d)}d.a=0
x=B.a([0,0,0,0],y.t)
w=new Uint32Array(1)
v=J.dx(D.bM.gaq(w),0,null)
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
if(D.c.au(a2,s)!==0)continue
s=n.f
s===$&&B.b()
m=D.c.hR(a1,s)
l=D.c.hR(u,s)
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
for(g=0;g<4;++g)f.y.be(v[g])}break
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
for(g=0;g<2;++g)f.y.be(v[g])}break
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
for(g=0;g<4;++g)f.y.be(v[g])}break}}d=f.y
return J.dx(D.H.gaq(d.c),0,d.a)},
L4(d,e,f){return this.tF(d,e,f,null,null)}}
A.bwg.prototype={
S3(){return 1},
tF(d,e,f,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.c,g=A.rT(!1,(h-d.d)*2)
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
u=$.oP()
u.$flags&2&&B.K(u)
u[0]=v
t=$.pT()[0]
if(t<0){s=-t
for(;r=s-1,s>0;s=r)g.be(J.v(d.a,d.d++))}else for(s=t;r=s-1,s>=0;s=r)g.be(J.v(d.a,d.d++))}q=J.dx(D.H.gaq(g.c),0,g.a)
p=q.length
for(h=q.$flags|0,o=1;o<p;++o){v=q[o-1]
u=q[o]
h&2&&B.K(q)
q[o]=v+u-128}h=i.r
if(h==null||h.length!==p)h=i.r=new Uint8Array(p)
v=D.c.aK(p+1,2)
for(n=0,m=0;!0;v=j,n=k){if(m<p){l=m+1
k=n+1
u=q[n]
h.$flags&2&&B.K(h)
h[m]=u}else break
if(l<p){m=l+1
j=v+1
h[l]=q[v]}else break}return h},
L4(d,e,f){return this.tF(d,e,f,null,null)},
j(d){return B.o(this.w)}}
A.ay2.prototype={
S3(){return this.x},
tF(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=C.kE.DN(d.ik())
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
v&2&&B.K(k)
k[s]=u+r-128}v=l.y
if(v==null||v.length!==t)v=l.y=new Uint8Array(t)
u=D.c.aK(t+1,2)
for(q=0,p=0;!0;u=m,q=n){if(p<t){o=p+1
n=q+1
r=k[q]
v.$flags&2&&B.K(v)
v[p]=r}else break
if(o<t){p=o+1
m=u+1
v[o]=k[u]}else break}return v},
L4(d,e,f){return this.tF(d,e,f,null,null)},
j(d){return B.o(this.w)}}
A.bn4.prototype={
kH(d){var x=this.a
if(x==null)return null
return x.c[d].b},
ny(d,e,f){var x=new A.bn5(B.a([],y.m))
x.b0K(e)
this.a=x
return this.kH(0)}}
A.a3E.prototype={
bMT(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.b,w=this.d,v=-1,u=-1,t=0;t<x;++t){s=w.nX(t)
r=w.nV(t)
q=w.nT(t)
p=w.pt(t)
if(s===d&&r===e&&q===f&&p===g)return t
o=d-s
n=e-r
m=f-q
l=g-p
k=o*o+n*n+m*m+l*l
if(u===-1){u=t
v=k}else if(k<v){u=t
v=k}}return u},
akD(){var x,w,v,u,t,s,r,q=this
if(q.c==null)return q.d
x=q.d
w=x.a
v=new A.wh(new Uint8Array(w*4),w,4)
for(u=0;u<w;++u){t=x.nX(u)
s=x.nV(u)
r=x.nT(u)
v.Us(u,t,s,r,u===q.c?0:255)}return v}}
A.a3F.prototype={
b0O(d){var x,w,v,u,t,s,r=this
r.a=d.av()
r.b=d.av()
r.c=d.av()
r.d=d.av()
x=d.cE()
r.e=(x&64)!==0
if((x&128)!==0){r.f=A.d5j(D.c.ez(1,(x&7)+1))
for(w=0;v=r.f,w<v.b;++w){u=J.v(d.a,d.d++)
t=J.v(d.a,d.d++)
s=J.v(d.a,d.d++)
v.d.qh(w,u,t,s)}}r.x=d.d-d.b}}
A.ay3.prototype={}
A.awo.prototype={}
A.brH.prototype={
pA(d){var x,w,v,u,t,s,r,q,p,o,n=this
n.f=A.de(d,!1,null,0)
n.a=new A.awo(B.a([],y.b))
if(!n.asR())return null
try{for(;u=n.f,t=u.d,t<u.c;){s=u.a
u.d=t+1
x=J.v(s,t)
switch(x){case 44:w=n.azE()
if(w==null){u=n.a
return u}u=w
u.r=n.e
u.w=n.c
if(n.b!==0){if(w.f==null&&n.a.e!=null){u=n.a.e
t=u.a
s=u.b
r=u.c
u=u.d
w.f=new A.a3E(t,s,r,new A.wh(new Uint8Array(B.c9(u.c)),u.a,u.b))}if(w.f!=null)w.f.c=n.d}n.a.r.push(w)
break
case 33:u=n.f
v=J.v(u.a,u.d++)
if(J.q(v,255)){u=n.f
if(u.jO(J.v(u.a,u.d++))==="NETSCAPE2.0"){q=J.v(u.a,u.d++)
p=J.v(u.a,u.d++)
if(q===3&&p===1)n.r=u.av()}else n.YT()}else if(J.q(v,249)){u=n.f
u.toString
n.btR(u)}else n.YT()
break
case 59:u=n.a
return u
default:break}}}catch(o){}return n.a},
btR(d){var x,w,v,u=this
d.cE()
x=d.cE()
u.e=d.av()
u.d=d.cE()
d.cE()
u.c=D.c.Z(x,2)&7
u.b=x&1
w=d.UX(1,0)
if(J.v(w.a,w.d)===44){++d.d
v=u.azE()
if(v==null)return
v.r=u.e
v.w=u.c
if(u.b!==0){w=v.f
if(w==null&&u.a.e!=null){w=u.a.e
w.toString
w=v.f=A.dvZ(w)}if(w!=null)w.c=u.d}u.a.r.push(v)}},
kH(d){var x,w,v,u=this,t=u.f
if(t==null||u.a==null)return null
x=u.a.r
w=x.length
if(d>=w)return null
v=x[d]
x=v.x
x===$&&B.b()
t.d=x
return u.b7L(v)},
ny(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null
if(a5.pA(a8)==null)return a6
x=a5.a.r.length
if(x===1)return a5.kH(0)
for(x=y.p,w=a6,v=w,u=0;t=a5.a.r,u<t.length;++u){a9=t[u]
s=a5.kH(u)
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
if(t){v.oc(s)
w=s
continue}l=a9.f
if(!(l!=null)){t=a5.a.e
t.toString
l=t}t=o?a6:p.a
if(t==null)t=0
r=o?a6:p.b
if(r==null)r=0
k=A.iQ(a6,a6,C.aj,0,C.bG,r,a6,0,1,l.akD(),C.aj,t,!1)
t=a9.w
if(t===2){t=a5.a.c.a
t=!D.H.ga2(t)?t[0]:0
r=l.d
j=r.nX(t)
i=r.nV(t)
h=r.nT(t)
g=t===l.c?0:255
t=new Uint8Array(4)
t[0]=j
t[1]=i
t[2]=h
t[3]=g
r=k.a
if(r!=null)r.jo(0,new A.zY(t))}else if(t!==3)if(a9.f!=null){t=w.a
t=t==null?a6:t.gf8()
t.toString
f=B.I(x,x)
for(r=l.b,e=0;e<r;++e)f.m(0,e,l.bMT(t.nX(e),t.nV(e),t.nT(e),t.pt(e)))
t=k.a
d=t==null?a6:J.jT(t.gaq(t))
if(d==null){t=k.a
t=t==null?a6:t.gaq(t)
if(t==null)t=D.H.gaq(new Uint8Array(0))
d=J.jT(t)}t=w.a
a0=t==null?a6:J.jT(t.gaq(t))
if(a0==null){t=w.a
t=t==null?a6:t.gaq(t)
if(t==null)t=D.H.gaq(new Uint8Array(0))
a0=J.jT(t)}for(a1=d.length,t=d.$flags|0,a2=0;a2<a1;++a2){a3=f.h(0,a0[a2])
if(a3!==-1){a3.toString
t&2&&B.K(d)
d[a2]=a3}}}k.y=s.y
for(t=s.a,t=t.gac(t);t.t();){a4=t.gM(t)
if(a4.gaU(a4)!==0){r=a4.gnS(a4)
q=a9.a
q===$&&B.b()
p=a4.goE(a4)
o=a9.b
o===$&&B.b()
k.BQ(r+q,p+o,a4)}}v.oc(k)
w=k}return v},
azE(){var x,w=this.f
if(w.d>=w.c)return null
x=new A.ay3()
x.b0O(w);++this.f.d
this.YT()
return x},
b7L(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.w==null){n.w=new Uint8Array(256)
n.x=new Uint8Array(4095)
n.y=new Uint8Array(4096)
n.z=new Uint32Array(4096)}x=n.Q=n.f.cE()
w=D.c.f9(1,x)
n.dy=w;++w
n.dx=w
n.db=w+1;++x
n.cy=x
n.cx=D.c.f9(1,x)
n.ay=0
n.CW=4098
n.at=n.ax=0
x=n.w
x.toString
x.$flags&2&&B.K(x)
x[0]=0
x=n.z
x.toString
D.bM.mB(x,0,4096,4098)
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
s=A.iQ(m,m,C.aj,0,C.bG,w,m,0,1,t.akD(),C.aj,x,!1)
r=new Uint8Array(x)
x=d.e
x===$&&B.b()
if(x){x=d.b
x===$&&B.b()
for(w=x+w,q=0,p=0;q<4;++q)for(o=x+C.aDq[q];o<w;o+=C.aHa[q],++p){if(!n.asT(r))return s
n.aBC(s,o,t,r)}}else for(o=0;o<w;++o){if(!n.asT(r))return s
n.aBC(s,o,t,r)}return s},
aBC(d,e,f,g){var x,w,v,u=g.length
for(x=0;x<u;++x){w=g[x]
v=d.a
if(v!=null)v.fF(x,e,w,0,0)}},
asR(){var x,w,v,u,t,s=this,r=s.f.jO(6)
if(r!=="GIF87a"&&r!=="GIF89a")return!1
x=s.a
x.toString
x.a=s.f.av()
x=s.a
x.toString
x.b=s.f.av()
w=s.f.cE()
x=s.a
x.toString
x.c=new A.zY(new Uint8Array(B.c9(B.a([s.f.cE()],y.t))));++s.f.d
if((w&128)!==0){x=s.a
x.toString
x.e=A.d5j(D.c.ez(1,(w&7)+1))
for(v=0;v<s.a.e.b;++v){x=s.f
u=J.v(x.a,x.d++)
x=s.f
t=J.v(x.a,x.d++)
x=s.f
w=J.v(x.a,x.d++)
s.a.e.d.qh(v,u,t,w)}}s.a.toString
return!0},
asT(d){var x=this,w=x.as
w.toString
x.as=w-d.length
if(!x.b7Z(d))return!1
if(x.as===0)x.YT()
return!0},
YT(){var x,w,v,u=this.f
if(u.d>=u.c)return!0
x=u.cE()
while(!0){if(x!==0){u=this.f
u=u.d<u.c}else u=!1
if(!u)break
u=this.f
w=u.d+=x
if(w>=u.c)return!0
v=u.a
u.d=w+1
x=J.v(v,w)}return!0},
b7Z(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.ay
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
v&2&&B.K(d)
d[w]=t
w=u}}for(k=d.$flags|0;w<x;){s=l.ch=l.b7Y()
if(s==null)return!1
v=l.dx
if(s===v)return!1
t=l.dy
if(s===t){for(t=l.z,r=0;r<=4095;++r){t.toString
t.$flags&2&&B.K(t)
t[r]=4098}l.db=v+1
v=l.Q+1
l.cy=v
l.cx=D.c.f9(1,v)
l.CW=4098}else{if(s<t){u=w+1
k&2&&B.K(d)
d[w]=s
w=u}else{v=l.z
if(v[s]===4098){q=l.db-2
if(s===q){s=l.CW
p=l.y
p===$&&B.b()
o=l.x
o===$&&B.b()
n=l.ay++
t=l.a8r(v,s,t)
o.$flags&2&&B.K(o)
o[n]=t
p.$flags&2&&B.K(p)
p[q]=t}else return!1}r=0
while(!0){m=r+1
if(!(r<=4095&&s>l.dy&&s<=4095))break
v=l.x
v===$&&B.b()
t=l.ay++
q=l.y
q===$&&B.b()
q=q[s]
v.$flags&2&&B.K(v)
v[t]=q
s=l.z[s]
r=m}if(m>=4095||s>4095)return!1
v=l.x
v===$&&B.b()
t=l.ay
q=l.ay=t+1
v.$flags&2&&B.K(v)
v[t]=s
t=q
while(!0){if(!(t!==0&&w<x))break
u=w+1
t=l.ay=t-1
q=v[t]
k&2&&B.K(d)
d[w]=q
w=u}}v=l.CW
if(v!==4098&&l.z[l.db-2]===4098){t=l.z
t.toString
q=l.db-2
t.$flags&2&&B.K(t)
t[q]=v
p=l.ch
o=l.y
n=l.dy
if(p===q){o===$&&B.b()
v=l.a8r(t,v,n)
o.$flags&2&&B.K(o)
o[q]=v}else{o===$&&B.b()
p.toString
v=l.a8r(t,p,n)
o.$flags&2&&B.K(o)
o[q]=v}}v=l.ch
v.toString
l.CW=v}}return!0},
b7Y(){var x,w,v,u,t=this
if(t.cy>12)return null
for(;x=t.ax,w=t.cy,x<w;){x=t.b3z()
x.toString
w=t.at
v=t.ax
t.at=(w|D.c.f9(x,v))>>>0
t.ax=v+8}v=t.at
u=C.aHQ[w]
t.at=D.c.hs(v,w)
t.ax=x-w
x=t.db
if(x<4097){++x
t.db=x
x=x>t.cx&&w<12}else x=!1
if(x){t.cx=t.cx<<1>>>0
t.cy=w+1}return v&u},
a8r(d,e,f){var x,w,v=0
while(!0){if(e>f){x=v+1
w=v<=4095
v=x}else w=!1
if(!w)break
if(e>4095)return 4098
e=d[e]}return e},
b3z(){var x,w,v=this,u=v.w,t=u[0],s=u.$flags|0
if(t===0){t=v.f.cE()
s&2&&B.K(u)
u[0]=t
u=v.w
t=u[0]
if(t===0)return null
D.H.hP(u,1,1+t,v.f.jN(t).ik())
u=v.w
x=u[1]
u.$flags&2&&B.K(u)
u[1]=2
u[0]=u[0]-1}else{w=u[1]
s&2&&B.K(u)
u[1]=w+1
x=u[w]
u[0]=t-1}return x}}
A.Sr.prototype={
J(){return"IcoType."+this.b}}
A.buh.prototype={}
A.axm.prototype={}
A.buf.prototype={
ge3(d){return D.c.aK(A.Iv.prototype.ge3.call(this,0),2)},
gRb(){return!(this.d===40&&this.f===32)&&A.Iv.prototype.gRb.call(this)}}
A.bug.prototype={
ny(d,e,f){var x,w,v,u=this,t=A.de(e,!1,null,0)
u.a=t
x=u.b=A.d5I(t)
if(x==null)return null
t=x.e.length
if(t===1)return u.kH(0)
for(w=null,v=0;v<u.b.e.length;++v){f=u.kH(v)
if(f==null)continue
if(w==null){f.w=C.bG
w=f}else w.oc(f)}return w},
kH(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=this.a
if(a7!=null){x=this.b
x=x==null||a8>=x.d}else x=!0
if(x)return a6
w=this.b.e[a8]
x=a7.a
a7=a7.b+w.e
v=w.d
u=J.cUj(x,a7,a7+v)
t=new A.aDa(A.d6j())
y.D.a(u)
if(t.JR(u))return t.dh(0,u)
s=A.rT(!1,14)
s.lE(19778)
s.jx(v)
s.jx(0)
s.jx(0)
a7=A.de(u,!1,a6,0)
x=A.d2E(A.de(J.dx(D.H.gaq(s.c),0,s.a),!1,a6,0))
v=a7.d
r=a7.ag()
q=a7.ag()
p=$.ix()
p.$flags&2&&B.K(p)
p[0]=q
q=$.lW()
o=q[0]
p[0]=a7.ag()
q=q[0]
n=a7.av()
m=a7.av()
l=C.WF[a7.ag()]
a7.ag()
p[0]=a7.ag()
p[0]=a7.ag()
p=a7.ag()
a7.ag()
k=new A.buf(x,o,q,r,n,m,l,p,v)
k.anU(a7,x)
if(r!==40&&n!==1)return a6
j=p===0&&m<=8?40+4*D.c.ez(1,m):40+4*p
x.b=j
s.a-=4
s.jx(j)
i=A.de(u,!1,a6,0)
h=new A.biF(!0)
h.a=i
h.b=k
g=h.kH(0)
if(m>=32)return g
f=32-D.c.au(o,32)
e=D.c.aK(f===32?o:o+f,8)
for(a7=1/q<0,x=q<0,q=q===0,d=0;d<D.c.aK(A.Iv.prototype.ge3.call(k,0),2);++d){if(!(q?a7:x))a0=d
else{v=g.a
v=v==null?a6:v.b
a0=(v==null?0:v)-1-d}a1=i.jS(e)
i.d=i.d+(a1.c-a1.d)
v=g.a
a2=v==null?a6:v.er(0,a0,a6)
if(a2==null)a2=new A.h_()
for(a3=0;a3<o;){a4=J.v(a1.a,a1.d++)
a5=7
while(!0){if(!(a5>-1&&a3<o))break
if((a4&D.c.f9(1,a5))>>>0!==0)a2.saU(0,0)
a2.t();++a3;--a5}}}return g}}
A.aqy.prototype={}
A.Kg.prototype={}
A.Kh.prototype={}
A.a4a.prototype={
gn(d){return this.a}}
A.bxe.prototype={}
A.EQ.prototype={}
A.bxg.prototype={
Tl(d){var x,w,v,u,t,s=this,r=A.de(d,!0,null,0)
s.a=r
x=r.UX(2,0)
if(J.v(x.a,x.d)!==255||J.v(x.a,x.d+1)!==216)return!1
if(s.H7()!==216)return!1
w=s.H7()
v=!1
u=!1
while(!0){if(w!==217){r=s.a
r=r.d<r.c}else r=!1
if(!r)break
t=s.a.av()
if(t<2)break
r=s.a
r.d=r.d+(t-2)
switch(w){case 192:case 193:case 194:v=!0
break
case 218:u=!0
break}w=s.H7()}return v&&u},
oA(d,e){var x,w,v,u,t,s,r,q,p=this
p.a=A.de(e,!0,null,0)
p.btK()
if(p.x.length!==1)throw B.p(A.co("Only single frame JPEGs supported"))
for(x=p.Q,w=0;v=p.d,u=v.z,w<u.length;++w){t=v.y.h(0,u[w])
v=t.a
u=p.d
s=u.f
r=t.b
q=u.r
u=p.b3N(u,t)
v=v===1&&s===2?1:0
x.push(new A.aqy(u,v,r===1&&q===2?1:0))}},
btK(){var x,w,v,u,t,s=this
if(s.H7()!==216)throw B.p(A.co("Start Of Image marker not found."))
x=s.H7()
while(!0){if(x!==217){w=s.a
w===$&&B.b()
w=w.d<w.c}else w=!1
if(!w)break
w=s.a
w===$&&B.b()
v=w.av()
if(v<2)B.a9(A.co("Invalid Block"))
w=s.a
u=w.jS(v-2)
w.d=w.d+(u.c-u.d)
switch(x){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:s.btL(x,u)
break
case 219:s.btO(u)
break
case 192:case 193:case 194:s.btQ(x,u)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw B.p(A.co("Unhandled frame type "+D.c.jQ(x,16)))
case 196:s.btN(u)
break
case 221:s.e=u.av()
break
case 218:s.bu1(u)
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
break}if(x!==0)throw B.p(A.co("Unknown JPEG marker "+D.c.jQ(x,16)))
break}x=s.H7()}},
H7(){var x,w=this,v=w.a
v===$&&B.b()
if(v.d>=v.c)return 0
do{do{x=w.a.cE()
if(x!==255){v=w.a
v=v.d<v.c}else v=!1}while(v)
v=w.a
if(v.d>=v.c)return x
do{x=w.a.cE()
if(x===255){v=w.a
v=v.d<v.c}else v=!1}while(v)
if(x===0){v=w.a
v=v.d<v.c}else v=!1}while(v)
return x},
btP(d){if(d.ag()!==1165519206)return
if(d.av()!==0)return
this.r.oA(0,d)},
btL(d,e){var x,w,v,u,t=this,s=e
if(d===224){x=s
w=!1
if(J.v(x.a,x.d)===74){x=s
if(J.v(x.a,x.d+1)===70){x=s
if(J.v(x.a,x.d+2)===73){x=s
if(J.v(x.a,x.d+3)===70){x=s
x=J.v(x.a,x.d+4)===0}else x=w}else x=w}else x=w}else x=w
if(x){x=new A.bxk()
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
s.UX(14+3*w*v,14)}}else if(d===225)t.btP(s)
else if(d===238){x=s
w=!1
if(J.v(x.a,x.d)===65){x=s
if(J.v(x.a,x.d+1)===100){x=s
if(J.v(x.a,x.d+2)===111){x=s
if(J.v(x.a,x.d+3)===98){x=s
if(J.v(x.a,x.d+4)===101){x=s
x=J.v(x.a,x.d+5)===0}else x=w}else x=w}else x=w}else x=w}else x=w
if(x){t.c=new A.bxe()
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
x.d=J.v(w.a,w.d+11)}}else if(d===254)try{s.bXg()}catch(u){B.bb(u)}},
btO(d){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=this.w;v=d.d,u=v<x,u;){u=d.a
d.d=v+1
t=J.v(u,v)
s=D.c.Z(t,4)
t&=15
if(t>=4)throw B.p(A.co("Invalid number of quantization tables"))
v=w[t]
if(v==null){v=new Int16Array(64)
w[t]=v}for(u=s!==0,r=0;r<64;++r){q=u?d.av():J.v(d.a,d.d++)
p=C.yE[r]
v.$flags&2&&B.K(v)
v[p]=q}}if(u)throw B.p(A.co("Bad length for DQT block"))},
btQ(d,e){var x,w,v,u,t,s,r,q=this
if(q.d!=null)throw B.p(A.co("Duplicate JPG frame data found."))
x=q.d=new A.ayj(B.I(y.p,y.c),B.a([],y.t))
x.b=d===194
x.c=e.cE()
x=q.d
x.toString
x.d=e.av()
x=q.d
x.toString
x.e=e.av()
w=e.cE()
for(x=q.w,v=0;v<w;++v){u=J.v(e.a,e.d++)
t=J.v(e.a,e.d++)
s=D.c.Z(t,4)
r=J.v(e.a,e.d++)
q.d.z.push(u)
q.d.y.m(0,u,new A.EQ(s&15,t&15,x,r))}q.d.aid()
q.x.push(q.d)},
btN(d){var x,w,v,u,t,s,r,q,p,o,n,m
for(x=d.c,w=this.z,v=this.y;u=d.d,u<x;){t=d.a
d.d=u+1
s=J.v(t,u)
r=new Uint8Array(16)
for(q=0,p=0;p<16;++p){r[p]=J.v(d.a,d.d++)
q+=r[p]}o=d.jS(q)
d.d=d.d+(o.c-o.d)
n=o.ik()
if((s&16)!==0){s-=16
m=v}else m=w
if(m.length<=s)D.b.sA(m,s+1)
m[s]=this.b4a(r,n)}},
bu1(d){var x,w,v,u,t,s,r,q=this,p=d.cE()
if(p<1||p>4)throw B.p(A.co("Invalid SOS block"))
x=B.ql(p,new A.bxh(q,d),!0,y.c)
w=d.cE()
v=d.cE()
u=d.cE()
t=D.c.Z(u,4)
s=q.a
s===$&&B.b()
r=q.d
t=new A.ayk(s,r,x,q.e,w,v,t&15,u&15)
s=r.w
s===$&&B.b()
t.f=s
t.r=r.b
t.p5(0)},
b4a(d,e){var x,w,v,u,t,s,r,q,p,o,n=B.a([],y.C),m=16
while(!0){if(!(m>0&&d[m-1]===0))break;--m}x=y.aH
n.push(new A.Y4(B.a([],x)))
w=n[0]
for(v=0,u=0;u<m;){for(t=0;t<d[u];++t){w=n.pop()
s=w.a
r=s.length
q=w.b
if(r<=q)D.b.sA(s,q+1)
s[w.b]=new A.a4a(e[v])
for(;s=w.b,s>0;)w=n.pop()
w.b=s+1
n.push(w)
for(;n.length<=u;w=p){s=B.a([],x)
p=new A.Y4(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.sA(r,o+1)
r[w.b]=new A.Kh(s)}++v}++u
if(u<m){s=B.a([],x)
p=new A.Y4(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.sA(r,o+1)
r[w.b]=new A.Kh(s)
w=p}}return n[0].a},
b3N(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.e
d===$&&B.b()
x=a1.f
x===$&&B.b()
w=d<<3>>>0
v=new Int32Array(64)
u=new Uint8Array(64)
t=B.c3(x*8,null,!1,y.ac)
for(s=a1.c,r=a1.d,q=0,p=0;p<x;++p){o=p<<3>>>0
for(n=0;n<8;++n,q=m){m=q+1
t[q]=new Uint8Array(w)}for(l=0;l<d;++l){k=s[r]
k.toString
j=a1.r
j===$&&B.b()
A.dUH(k,j[p][l],u,v)
i=l<<3>>>0
for(h=0,g=0;g<8;++g){f=t[o+g]
for(n=0;n<8;++n,h=e){f.toString
e=h+1
k=u[h]
f.$flags&2&&B.K(f)
f[i+n]=k}}}}return t}}
A.Y4.prototype={}
A.ayj.prototype={
aid(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.y,w=B.t(x).i("ce<1>"),v=new B.ce(x,x.r,x.e,w);v.t();){u=x.h(0,v.d)
g.f=Math.max(g.f,u.a)
g.r=Math.max(g.r,u.b)}v=g.e
v.toString
g.w=D.e.fH(v/8/g.f)
v=g.d
v.toString
g.x=D.e.fH(v/8/g.r)
for(w=new B.ce(x,x.r,x.e,w),v=y.h,t=y.bp;w.t();){s=x.h(0,w.d)
s.toString
r=g.e
r.toString
q=s.a
p=D.e.fH(D.e.fH(r/8)*q/g.f)
r=g.d
r.toString
o=s.b
n=D.e.fH(D.e.fH(r/8)*o/g.r)
m=g.w*q
l=g.x*o
k=J.jG(l,t)
for(j=0;j<l;++j){i=J.jG(m,v)
for(h=0;h<m;++h)i[h]=new Int32Array(64)
k[j]=i}s.e=p
s.f=n
s.r=k}}}
A.bxk.prototype={}
A.ayk.prototype={
p5(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.y,f=g.length,e=h.r
e.toString
if(e)if(h.Q===0)x=h.at===0?h.gb7E():h.gb7G()
else x=h.at===0?h.gb7v():h.gb7x()
else x=h.gb7B()
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
p=D.c.hR(t,v)
o=D.c.au(t,v)
v=r.r
v===$&&B.b()
x.$2(r,v[p][o]);++t;++q}}else{q=0
while(!0){v=h.z
v.toString
if(!(q<v))break
for(s=0;s<f;++s){r=g[s]
n=r.a
m=r.b
for(l=0;l<m;++l)for(k=0;k<n;++k)h.b7M(r,x,t,l,k)}++t;++q}}h.ch=0
j=J.v(w.a,w.d)
i=J.v(w.a,w.d+1)
if(j===255)if(i>=208&&i<=215)w.d+=2
else break}},
D_(){var x,w=this,v=w.ch
if(v>0){--v
w.ch=v
return D.c.oJ(w.ay,v)&1}v=w.a
if(v.d>=v.c)return null
x=v.cE()
w.ay=x
if(x===255)if(v.cE()!==0)return null
w.ch=7
return D.c.Z(w.ay,7)&1},
NP(d){var x,w=new A.Kh(d)
for(;x=this.D_(),x!=null;){if(w instanceof A.Kh)w=w.a[x]
if(w instanceof A.a4a)return w.a}return null},
aax(d){var x,w
for(x=0;d>0;){w=this.D_()
if(w==null)return null
x=(x<<1|w)>>>0;--d}return x},
On(d){var x
if(d==null)return 0
if(d===1)return this.D_()===1?1:-1
x=this.aax(d)
if(x==null)return 0
if(x>=D.c.f9(1,d-1))return x
return x+D.c.ez(-1,d)+1},
b7C(d,e){var x,w,v,u,t,s,r=this,q=d.w
q===$&&B.b()
x=r.NP(q)
w=x===0?0:r.On(x)
q=d.y
q===$&&B.b()
q+=w
d.y=q
e.$flags&2&&B.K(e)
e[0]=q
for(v=1;v<64;){q=d.x
q===$&&B.b()
u=r.NP(q)
if(u==null)break
t=u&15
s=u>>>4
if(t===0){if(s<15)break
v+=16
continue}v+=s
t=r.On(t)
e[C.yE[v]]=t;++v}},
b7F(d,e){var x,w,v=d.w
v===$&&B.b()
x=this.NP(v)
w=x===0?0:D.c.ez(this.On(x),this.ax)
v=d.y
v===$&&B.b()
v+=w
d.y=v
e.$flags&2&&B.K(e)
e[0]=v},
b7H(d,e){var x=e[0],w=this.D_()
w.toString
w=D.c.ez(w,this.ax)
e.$flags&2&&B.K(e)
e[0]=(x|w)>>>0},
b7w(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.CW
if(o>0){p.CW=o-1
return}x=p.Q
w=p.as
for(o=p.ax,v=e.$flags|0;x<=w;){u=d.x
u===$&&B.b()
u=p.NP(u)
u.toString
t=u&15
s=u>>>4
if(t===0){if(s<15){o=p.aax(s)
o.toString
p.CW=o+D.c.ez(1,s)-1
break}x+=16
continue}x+=s
r=C.yE[x]
u=p.On(t)
q=D.c.ez(1,o)
v&2&&B.K(e)
e[r]=u*q;++x}},
b7y(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.Q,n=p.as
$label0$1:for(x=p.ax,w=e.$flags|0,v=0;o<=n;){u=C.yE[o]
t=p.cx
switch(t){case 0:t=d.x
t===$&&B.b()
s=p.NP(t)
if(s==null)throw B.p(A.co("Invalid progressive encoding"))
r=s&15
v=s>>>4
if(r===0)if(v<15){t=p.aax(v)
t.toString
p.CW=t+D.c.ez(1,v)
p.cx=4}else{p.cx=1
v=16}else{if(r!==1)throw B.p(A.co("invalid ACn encoding"))
p.cy=p.On(r)
p.cx=v!==0?2:3}continue $label0$1
case 1:case 2:q=e[u]
if(q!==0){t=p.D_()
t.toString
t=D.c.ez(t,x)
w&2&&B.K(e)
e[u]=q+t}else{--v
if(v===0)p.cx=t===2?3:0}break
case 3:t=e[u]
if(t!==0){q=p.D_()
q.toString
q=D.c.ez(q,x)
w&2&&B.K(e)
e[u]=t+q}else{t=p.cy
t===$&&B.b()
t=D.c.ez(t,x)
w&2&&B.K(e)
e[u]=t
p.cx=0}break
case 4:t=e[u]
if(t!==0){q=p.D_()
q.toString
q=D.c.ez(q,x)
w&2&&B.K(e)
e[u]=t+q}break}++o}if(p.cx===4)if(--p.CW===0)p.cx=0},
b7M(d,e,f,g,h){var x,w,v=this.f
v===$&&B.b()
x=D.c.hR(f,v)*d.b+g
w=D.c.au(f,v)*d.a+h
v=d.r
v===$&&B.b()
if(x>=v.length)return
v=v[x]
if(w>=v.length)return
e.$2(d,v[w])}}
A.ayi.prototype={
ny(d,e,f){var x=A.d6B()
x.oA(0,e)
if(x.x.length!==1)throw B.p(A.co("only single frame JPEGs supported"))
return A.dSU(x)},
dh(d,e){return this.ny(0,e,null)}}
A.bxf.prototype={
J(){return"JpegChroma."+this.b}}
A.bxi.prototype={
aTi(d){d=D.e.L(D.c.aM(d,1,100))
if(this.at===d)return
this.ble(d<50?D.e.fU(5000/d):D.c.fU(200-d*2))
this.at=d},
bLR(b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=A.rT(!0,8192)
a8.A2(a9,216)
a8.A2(a9,224)
a9.lE(16)
a9.be(74)
a9.be(70)
a9.be(73)
a9.be(70)
a9.be(0)
a9.be(1)
a9.be(1)
a9.be(0)
a9.lE(1)
a9.lE(1)
a9.be(0)
a9.be(0)
a8.bDi(a9,b0.gxS())
a8.bDm(a9)
x=b0.ge7(0)
w=b0.ge3(0)
a8.A2(a9,192)
a9.lE(17)
a9.be(8)
a9.lE(w)
a9.lE(x)
a9.be(3)
a9.be(1)
x=b1===C.PX
a9.be(x?17:34)
a9.be(0)
a9.be(2)
a9.be(17)
a9.be(1)
a9.be(3)
a9.be(17)
a9.be(1)
a8.bDl(a9)
a8.A2(a9,218)
a9.lE(12)
a9.be(3)
a9.be(1)
a9.be(0)
a9.be(2)
a9.be(17)
a9.be(3)
a9.be(17)
a9.be(0)
a9.be(63)
a9.be(0)
a8.ax=0
a8.ay=7
v=b0.ge7(0)
u=b0.ge3(0)
if(x){t=new Float32Array(64)
s=new Float32Array(64)
r=new Float32Array(64)
for(x=a8.c,w=a8.d,q=0,p=0,o=0,n=0;n<u;n+=8)for(m=0;m<v;m+=8){a8.MA(b0,m,n,v,u,t,s,r)
l=a8.e
k=a8.r
k===$&&B.b()
q=a8.xg(a9,t,x,q,l,k)
k=a8.f
l=a8.w
l===$&&B.b()
p=a8.xg(a9,s,w,p,k,l)
o=a8.xg(a9,r,w,o,a8.f,a8.w)}}else{x=y.z
t=J.jn(4,x)
for(j=0;j<4;++j)t[j]=new Float32Array(64)
s=J.jn(4,x)
for(j=0;j<4;++j)s[j]=new Float32Array(64)
r=J.jn(4,x)
for(j=0;j<4;++j)r[j]=new Float32Array(64)
i=new Float32Array(64)
h=new Float32Array(64)
for(x=a8.c,w=a8.d,q=0,p=0,o=0,n=0;n<u;n+=16)for(l=n+8,m=0;m<v;m+=16){k=t[0]
g=s[0]
f=r[0]
a8.MA(b0,m,n,v,u,k,g,f)
e=m+8
d=t[1]
a0=s[1]
a1=r[1]
a8.MA(b0,e,n,v,u,d,a0,a1)
a2=t[2]
a3=s[2]
a4=r[2]
a8.MA(b0,m,l,v,u,a2,a3,a4)
a5=t[3]
a6=s[3]
a7=r[3]
a8.MA(b0,e,l,v,u,a5,a6,a7)
a8.ark(i,g,a0,a3,a6)
a8.ark(h,f,a1,a4,a7)
a7=a8.e
a4=a8.r
a4===$&&B.b()
q=a8.xg(a9,a5,x,a8.xg(a9,a2,x,a8.xg(a9,d,x,a8.xg(a9,k,x,q,a7,a4),a8.e,a8.r),a8.e,a8.r),a8.e,a8.r)
a4=a8.f
a7=a8.w
a7===$&&B.b()
p=a8.xg(a9,i,w,p,a4,a7)
o=a8.xg(a9,h,w,o,a8.f,a8.w)}}x=a8.ay
if(x>=0){++x
a8.xt(a9,B.a([D.c.f9(1,x)-1,x],y.t))}a8.A2(a9,217)
return J.dx(D.H.gaq(a9.c),0,a9.a)},
MA(d,e,f,g,h,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(x=this.as,w=a0.$flags|0,v=a1.$flags|0,u=a2.$flags|0,t=f+1,s=0;s<64;++s){r=s>>>3
q=f+r
p=e+(s&7)
if(q>=h)q-=t+r-h
if(p>=g)p-=p-g+1
o=d.a
n=o==null?null:o.er(p,q,null)
if(n==null)n=new A.h_()
if(n.gdH()!==C.aj)n=n.p_(C.aj)
if(n.gA(n)>3){m=n.gfS()
l=1-m
n.sar(0,D.e.aD(n.gar(n)*m+C.CT.h(0,0)*l))
n.saE(D.e.aD(n.gaE()*m+C.CT.h(0,0)*l))
n.saF(0,D.e.aD(n.gaF(n)*m+C.CT.h(0,0)*l))}k=D.e.L(n.gar(n))
j=D.e.L(n.gaE())
i=D.e.L(n.gaF(n))
o=D.c.Z(x[k]+x[j+256]+x[i+512],16)
w&2&&B.K(a0)
a0[s]=o-128
o=D.c.Z(x[k+768]+x[j+1024]+x[i+1280],16)
v&2&&B.K(a1)
a1[s]=o-128
o=D.c.Z(x[k+1280]+x[j+1536]+x[i+1792],16)
u&2&&B.K(a2)
a2[s]=o-128}},
ark(d,e,f,g,h){var x,w,v,u,t,s,r,q
for(x=d.$flags|0,w=0;w<64;++w){if(w<32)v=D.c.au(w,8)<4?e:f
else v=D.c.au(w,8)<4?g:h
u=(D.c.aK(D.c.au(w,32),8)<<4>>>0)+(D.c.au(w,4)<<1>>>0)
t=v[u]
s=v[u+1]
r=v[u+8]
q=v[u+9]
x&2&&B.K(d)
d[w]=(t+s+r+q)/4}},
A2(d,e){d.be(255)
d.be(e&255)},
ble(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.a,w=x.$flags|0,v=0;v<64;++v){u=D.e.fU((C.aNq[v]*d+50)/100)
if(u<1)u=1
else if(u>255)u=255
t=C.v5[v]
w&2&&B.K(x)
x[t]=u}for(w=g.b,t=w.$flags|0,s=0;s<64;++s){r=D.e.fU((C.aGH[s]*d+50)/100)
if(r<1)r=1
else if(r>255)r=255
q=C.v5[s]
t&2&&B.K(w)
w[q]=r}for(t=g.c,q=t.$flags|0,p=g.d,o=p.$flags|0,n=0,m=0;m<8;++m)for(l=0;l<8;++l){k=C.v5[n]
j=x[k]
i=C.Rj[m]
h=C.Rj[l]
q&2&&B.K(t)
t[n]=1/(j*i*h*8)
k=w[k]
o&2&&B.K(p)
p[n]=1/(k*i*h*8);++n}},
VO(d,e){var x,w,v,u,t,s=y.t,r=B.a([B.a([],s)],y.cQ)
for(x=0,w=0,v=1;v<=16;++v){for(u=1;u<=d[v];++u){t=e[w]
if(r.length<=t)D.b.sA(r,t+1)
r[t]=B.a([x,v],s);++w;++x}x*=2}return r},
bl3(){var x,w,v,u,t,s,r,q,p,o,n
for(x=this.y,w=this.x,v=y.t,u=1,t=2,s=1;s<=15;++s){for(r=u;r<t;++r){q=32767+r
x[q]=s
w[q]=B.a([r,s],v)}for(q=t-1,p=-q,o=-u;p<=o;++p){n=32767+p
x[n]=s
w[n]=B.a([q+p,s],v)}u=u<<1>>>0
t=t<<1>>>0}},
blf(){var x,w,v
for(x=this.as,w=x.$flags|0,v=0;v<256;++v){w&2&&B.K(x)
x[v]=19595*v
x[v+256]=38470*v
x[v+512]=7471*v+32768
x[v+768]=-11059*v
x[v+1024]=-21709*v
x[v+1280]=32768*v+8421375
x[v+1536]=-27439*v
x[v+1792]=-5329*v}},
baF(d4,d5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3
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
x&2&&B.K(d4)
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
x&2&&B.K(d4)
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
x[v]=d3>0?D.e.L(d3+0.5):D.e.L(d3-0.5)}return x},
bDi(d,e){var x,w
if(e.ga2(0))return
x=A.rT(!1,8192)
e.jw(0,x)
w=J.dx(D.H.gaq(x.c),0,x.a)
this.A2(d,225)
d.lE(w.length+8)
d.jx(1165519206)
d.lE(0)
d.mI(w)},
bDm(d){var x,w,v
this.A2(d,219)
d.lE(132)
d.be(0)
for(x=this.a,w=0;w<64;++w)d.be(x[w])
d.be(1)
for(x=this.b,v=0;v<64;++v)d.be(x[v])},
bDl(d){var x,w,v,u,t,s,r,q
this.A2(d,196)
d.lE(418)
d.be(0)
for(x=0;x<16;){++x
d.be(C.Yh[x])}for(w=0;w<=11;++w)d.be(C.uA[w])
d.be(16)
for(v=0;v<16;){++v
d.be(C.Qo[v])}for(u=0;u<=161;++u)d.be(C.RH[u])
d.be(1)
for(t=0;t<16;){++t
d.be(C.Ti[t])}for(s=0;s<=11;++s)d.be(C.uA[s])
d.be(17)
for(r=0;r<16;){++r
d.be(C.S7[r])}for(q=0;q<=161;++q)d.be(C.Uz[q])},
xg(d,e,f,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=a2[0],h=a2[240],g=j.baF(e,f)
for(x=j.Q,w=0;w<64;++w)x[C.v5[w]]=g[w]
v=x[0]
v.toString
u=v-a0
if(u===0){t=a1[0]
t.toString
j.xt(d,t)}else{s=32767+u
a1.toString
t=j.y[s]
t.toString
t=a1[t]
t.toString
j.xt(d,t)
t=j.x[s]
t.toString
j.xt(d,t)}r=63
while(!0){if(!(r>0&&x[r]===0))break;--r}if(r===0){i.toString
j.xt(d,i)
return v}for(t=j.y,q=j.x,p=1;p<=r;){o=p
while(!0){if(!(x[o]===0&&o<=r))break;++o}n=o-p
if(n>=16){m=D.c.Z(n,4)
for(l=1;l<=m;++l){h.toString
j.xt(d,h)}n&=15}k=x[o]
k.toString
s=32767+k
k=t[s]
k.toString
k=a2[(n<<4>>>0)+k]
k.toString
j.xt(d,k)
k=q[s]
k.toString
j.xt(d,k)
p=o+1}if(r!==63){i.toString
j.xt(d,i)}return v},
xt(d,e){var x,w=this,v=e[0],u=e[1]-1
for(;u>=0;){if((v&D.c.f9(1,u))>>>0!==0)w.ax=(w.ax|D.c.f9(1,w.ay))>>>0;--u
if(--w.ay<0){x=w.ax
if(x===255){d.be(255)
d.be(0)}else d.be(x)
w.ay=7
w.ax=0}}}}
A.Ue.prototype={
J(){return"PngDisposeMode."+this.b}}
A.a7F.prototype={
J(){return"PngBlendMode."+this.b}}
A.a7G.prototype={}
A.ay4.prototype={}
A.FE.prototype={
J(){return"PngFilterType."+this.b}}
A.bI4.prototype={}
A.bwi.prototype={}
A.aDa.prototype={
JR(d){var x,w=A.de(d,!0,null,0).jN(8)
for(x=0;x<8;++x)if(J.v(w.a,w.d+x)!==D.WR[x])return!1
return!0},
pA(b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=A.de(b4,!0,b2,0)
b1.d=b3
x=b3.jN(8)
for(w=0;w<8;++w)if(J.v(x.a,x.d+w)!==D.WR[w])return b2
for(b3=b1.a,v=b3.cx,u=y.t,t=b3.cy,s=y.L,r=b3.ax;!0;){q=b1.d
p=q.d-q.b
o=q.ag()
n=b1.d.jO(4)
switch(n){case"tEXt":q=b1.d
m=q.jS(o)
q.d=q.d+(m.c-m.d)
l=m.ik()
k=l.length
for(w=0;w<k;++w)if(l[w]===0){q=w+1
r.m(0,D.eX.dh(0,new Uint8Array(l.subarray(0,B.tq(0,w,k)))),D.eX.dh(0,new Uint8Array(l.subarray(q,B.tq(q,b2,k)))))
break}b1.d.d+=4
break
case"pHYs":q=b1.d
m=q.jS(o)
q.d=q.d+(m.c-m.d)
j=A.ct(m,b2,0)
j.ag()
j.ag()
J.v(j.a,j.d++)
b1.d.d+=4
break
case"IHDR":q=b1.d
m=q.jS(o)
q.d=q.d+(m.c-m.d)
i=A.ct(m,b2,0)
h=i.ik()
b3.a=i.ag()
b3.b=i.ag()
b3.c=J.v(i.a,i.d++)
b3.d=J.v(i.a,i.d++)
J.v(i.a,i.d++)
b3.f=J.v(i.a,i.d++)
b3.r=J.v(i.a,i.d++)
q=b3.d
if(!(q===0||q===2||q===3||q===4||q===6))return b2
if(b3.f!==0)return b2
switch(q){case 0:if(!D.b.p(B.a([1,2,4,8,16],u),b3.c))return b2
break
case 2:if(!D.b.p(B.a([8,16],u),b3.c))return b2
break
case 3:if(!D.b.p(B.a([1,2,4,8],u),b3.c))return b2
break
case 4:if(!D.b.p(B.a([8,16],u),b3.c))return b2
break
case 6:if(!D.b.p(B.a([8,16],u),b3.c))return b2
break}if(b1.d.ag()!==A.zm(h,A.zm(new B.fj(n),0)))throw B.p(A.co("Invalid "+n+" checksum"))
break
case"PLTE":q=b1.d
m=q.jS(o)
q.d=q.d+(m.c-m.d)
b3.w=m.ik()
if(b1.d.ag()!==A.zm(s.a(b3.w),A.zm(new B.fj(n),0)))throw B.p(A.co("Invalid "+n+" checksum"))
break
case"tRNS":q=b1.d
m=q.jS(o)
q.d=q.d+(m.c-m.d)
b3.x=m.ik()
g=b1.d.ag()
q=b3.x
q.toString
if(g!==A.zm(q,A.zm(new B.fj(n),0)))throw B.p(A.co("Invalid "+n+" checksum"))
break
case"IEND":b1.d.d+=4
break
case"gAMA":if(o!==4)throw B.p(A.co("Invalid gAMA chunk"))
b1.d.ag()
b1.d.d+=4
break
case"IDAT":t.push(p)
q=b1.d
q.d=(q.d+=o)+4
break
case"acTL":b3.ch=b1.d.ag()
b1.d.ag()
b1.d.d+=4
break
case"fcTL":b1.d.ag()
f=b1.d.ag()
e=b1.d.ag()
d=b1.d.ag()
a0=b1.d.ag()
a1=b1.d.av()
a2=b1.d.av()
q=b1.d
a3=J.v(q.a,q.d++)
q=b1.d
a4=J.v(q.a,q.d++)
q=C.aEd[a3]
a5=C.aKL[a4]
v.push(new A.ay4(B.a([],u),f,e,d,a0,a1,a2,q,a5))
b1.d.d+=4
break
case"fdAT":b1.d.ag()
D.b.ga_(v).y.push(p)
q=b1.d
q.d=(q.d+=o-4)+4
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
if(q!=null){q=D.H.p(q,a6)?0:255
a5=new Uint8Array(4)
a5[0]=a8
a5[1]=a9
a5[2]=b0
a5[3]=q
b3.z=new A.QI(a5)}else{q=new Uint8Array(3)
q[0]=a8
q[1]=a9
q[2]=b0
b3.z=new A.aqt(q)}}else if(q===0||q===4){b1.d.av()
o-=2}else if(q===2||q===6){q=b1.d
q.av()
q.av()
q.av()
o-=24}if(o>0)b1.d.d+=o
b1.d.d+=4
break
case"iCCP":b3.Q=b1.d.SI()
q=b1.d
J.v(q.a,q.d++)
q=b3.Q
a5=b1.d
m=a5.jS(o-(q.length+2))
a5.d=a5.d+(m.c-m.d)
b3.at=m.ik()
b1.d.d+=4
break
default:q=b1.d
q.d=(q.d+=o)+4
break}if(n==="IEND")break
q=b1.d
if(q.d>=q.c)return b2}return b3},
kH(b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=null,b4=b1.a,b5=b4.a,b6=b4.b,b7=b4.cx,b8=b7.length
if(b8===0||b9===0){w=B.a([],y.a)
b7=b4.cy
v=b7.length
for(u=0,t=0;t<v;++t){b8=b1.d
b8===$&&B.b()
b8.d=b7[t]
s=b8.ag()
r=b1.d.jO(4)
b8=b1.d
q=b8.jS(s)
b8.d=b8.d+(q.c-q.d)
p=q.ik()
u+=p.length
w.push(p)
if(b1.d.ag()!==A.zm(p,A.zm(new B.fj(r),0)))throw B.p(A.co("Invalid "+r+" checksum"))}b3=new Uint8Array(u)
for(b7=w.length,o=0,n=0;n<w.length;w.length===b7||(0,B.L)(w),++n){p=w[n]
J.cUi(b3,o,p)
o+=p.length}}else{if(b9>=b8)throw B.p(A.co("Invalid Frame Number: "+b9))
m=b7[b9]
b5=m.b
b6=m.c
w=B.a([],y.a)
for(b7=m.y,u=0,t=0;t<b7.length;++t){b8=b1.d
b8===$&&B.b()
b8.d=b7[t]
s=b8.ag()
b8=b1.d
b8.jO(4)
b8.d+=4
b8=b1.d
q=b8.jS(s-4)
b8.d=b8.d+(q.c-q.d)
p=q.ik()
u+=p.length
w.push(p)}b3=new Uint8Array(u)
for(b7=w.length,o=0,n=0;n<w.length;w.length===b7||(0,B.L)(w),++n){p=w[n]
J.cUi(b3,o,p)
o+=p.length}}b7=b4.d
l=1
if(!(b7===3))if(!(b7===0)){if(b7===4)b7=2
else b7=b7===6?4:3
l=b7}x=null
try{x=C.kE.DN(b3)}catch(k){return b2}j=A.de(x,!0,b2,0)
b1.c=b1.b=0
i=b2
if(b4.d===3){b7=b4.w
if(b7!=null){h=b7.length/3|0
g=b4.x
b8=g!=null
f=b8?g.length:0
e=b8?4:3
i=new A.wh(new Uint8Array(h*e),h,e)
for(b8=e===4,t=0,d=0;t<h;++t,d+=3){a0=b8&&t<f?g[t]:255
i.Us(t,b7[d],b7[d+1],b7[d+2],a0)}}}if(b4.d===0&&b4.x!=null&&i==null&&b4.c<=8){g=b4.x
a1=g.length
b7=b4.c
h=D.c.f9(1,b7)
i=new A.wh(new Uint8Array(h*4),h,4)
if(b7===1)a2=255
else if(b7===2)a2=85
else{b7=b7===4?17:1
a2=b7}for(t=0;t<h;++t){a3=t*a2
i.Us(t,a3,a3,a3,255)}for(b7=i.b,b8=3<b7,a4=i.c,a5=a4.$flags|0,t=0;t<a1;t+=2){a6=(g[t]&255)<<8|g[t+1]&255
if(a6<h)if(b8){a5&2&&B.K(a4)
a4[a6*b7+3]=0}}}b7=b4.c
if(b7===1)a7=C.hE
else if(b7===2)a7=C.it
else{if(b7===4)b8=C.iu
else b8=b7===16?C.cV:C.aj
a7=b8}b8=b4.d
if(b8===0&&b4.x!=null&&b7>8)l=4
a8=A.iQ(b2,b2,a7,0,C.bG,b6,b2,0,b8===2&&b4.x!=null?4:l,i,C.aj,b5,!1)
a9=b4.a
b0=b4.b
b4.a=b5
b4.b=b6
b1.e=0
if(b4.r!==0){b7=b6+7>>>3
b1.CX(j,a8,0,0,8,8,b5+7>>>3,b7)
b8=b5+3
b1.CX(j,a8,4,0,8,8,b8>>>3,b7)
b7=b6+3
b1.CX(j,a8,0,4,4,8,b8>>>2,b7>>>3)
b8=b5+1
b1.CX(j,a8,2,0,4,4,b8>>>2,b7>>>2)
b7=b6+1
b1.CX(j,a8,0,2,2,4,b8>>>1,b7>>>2)
b1.CX(j,a8,1,0,2,2,b5>>>1,b7>>>1)
b1.CX(j,a8,0,1,1,2,b5,b6>>>1)}else b1.bsQ(j,a8)
b4.a=a9
b4.b=b0
b7=b4.at
if(b7!=null)a8.c=new A.a4d(b4.Q,C.Ea,b7)
b4=b4.ax
if(b4.a!==0)a8.bEb(b4)
return a8},
ny(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(g.pA(e)==null)return f
x=g.a
w=x.cx
v=w.length
if(v===0){x=g.kH(0)
x.toString
return x}for(v=y.g,u=f,t=u,s=0;s<x.ch;++s){a0=w[s]
r=g.kH(s)
if(r==null)continue
if(t==null||u==null){t=r.aFs(r.gr2())
q=a0.f
t.y=D.e.L((q===0||a0.r===0?0:q/a0.r)*1000)
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
o=o===(n==null?0:n)&&a0.d===0&&a0.e===0&&a0.x===C.abL}else o=!1
if(o){q=a0.f
r.y=D.e.L((q===0||a0.r===0?0:q/a0.r)*1000)
t.oc(r)
u=r
continue}i=t.x
u=A.Ex((i===$?t.x=B.a([],v):i)[q],!1,!1)
h=p.w
if(h===C.abN){q=p.d
o=p.e
n=x.z
if(n==null){n=new Uint8Array(4)
m=new A.QI(n)
n[0]=0
n[1]=0
n[2]=0
n[3]=0
n=m}A.dSf(u,!1,n,q,q+p.b-1,o,o+p.c-1)}else if(h===C.abO&&s>1){i=t.x
if(i===$)i=t.x=B.a([],v)
q=p.d
o=p.e
n=p.b
m=p.c
u=A.d_q(u,i[s-2],C.BS,m,n,q,o,m,n,q,o)}q=a0.f
u.y=D.e.L((q===0||a0.r===0?0:q/a0.r)*1000)
q=a0.x===C.abM?C.BS:C.BR
u=A.d_q(u,r,q,f,f,a0.d,a0.e,f,f,f,f)
t.oc(u)}return t},
dh(d,e){return this.ny(0,e,null)},
CX(a0,a1,a2,a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=e.d
if(d===4)x=2
else if(d===2)x=3
else{d=d===6?4:1
x=d}w=x*e.c
v=D.c.Z(w+7,3)
u=D.c.Z(w*a6+7,3)
t=B.a([null,null],y.e)
s=B.a([0,0,0,0],y.t)
for(e=a4>1,r=a4-a2,q=a3,p=0,o=0;p<a7;++p,q+=a5,++f.e){n=C.W_[J.v(a0.a,a0.d++)]
m=a0.jS(u)
a0.d=a0.d+(m.c-m.d)
d=m.ik()
t[o]=d
o=1-o
f.aB_(n,v,d,t[o])
f.c=f.b=0
l=d.length
k=new A.nn(d,0,Math.min(l,l),0,!0)
for(d=r<=1,j=a2,i=0;i<a6;++i,j+=a4){f.axF(k,s)
l=a1.a
l=l==null?null:l.er(j,q,null)
f.ab7(l==null?new A.h_():l,s)
if(!d||e)for(h=0;h<a4;++h)for(l=q+h,g=0;g<r;++g)f.ab7(a1.kS(j+g,l),s)}}},
bsQ(d,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a,e=f.d
if(e===4)x=2
else if(e===2)x=3
else{e=e===6?4:1
x=e}w=x*f.c
v=f.a
u=f.b
t=D.c.Z(v*w+7,3)
s=D.c.Z(w+7,3)
r=B.c3(t,0,!1,y.p)
q=B.a([r,r],y.S)
p=B.a([0,0,0,0],y.t)
f=a0.a
o=f.gac(f)
o.t()
for(n=0,m=0;n<u;++n,m=j){l=C.W_[J.v(d.a,d.d++)]
k=d.jS(t)
d.d=d.d+(k.c-k.d)
f=k.ik()
q[m]=f
j=1-m
g.aB_(l,s,f,q[j])
g.c=g.b=0
f=q[m]
e=f.length
i=new A.nn(f,0,Math.min(e,e),0,!0)
for(h=0;h<v;++h){g.axF(i,p)
g.ab7(o.gM(o),p)
o.t()}}},
aB_(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=f.length
switch(d.a){case 0:break
case 1:for(x=e;x<l;++x)f[x]=f[x]+f[x-e]&255
break
case 2:for(w=g!=null,x=0;x<l;++x){v=w?g[x]:0
f[x]=f[x]+v&255}break
case 3:for(w=g!=null,x=0;x<l;++x){u=x<e?0:f[x-e]
v=w?g[x]:0
f[x]=f[x]+D.c.Z(u+v,1)&255}break
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
u2(d,e){var x,w,v,u,t,s=this
if(e===0)return 0
if(e===8)return d.cE()
if(e===16)return d.av()
for(x=d.c;w=s.c,w<e;){w=d.d
if(w>=x)throw B.p(A.co("Invalid PNG data."))
v=d.a
d.d=w+1
u=J.v(v,w)
w=s.c
s.b=D.c.f9(u,w)
s.c=w+8}if(e===1)t=1
else if(e===2)t=3
else{if(e===4)x=15
else x=0
t=x}x=w-e
w=D.c.hs(s.b,x)
s.c=x
return w&t},
axF(d,e){var x=this,w=x.a,v=w.d
switch(v){case 0:e[0]=x.u2(d,w.c)
return
case 2:e[0]=x.u2(d,w.c)
e[1]=x.u2(d,w.c)
e[2]=x.u2(d,w.c)
return
case 3:e[0]=x.u2(d,w.c)
return
case 4:e[0]=x.u2(d,w.c)
e[1]=x.u2(d,w.c)
return
case 6:e[0]=x.u2(d,w.c)
e[1]=x.u2(d,w.c)
e[2]=x.u2(d,w.c)
e[3]=x.u2(d,w.c)
return}throw B.p(A.co("Invalid color type: "+v+"."))},
ab7(d,e){var x,w,v,u,t,s,r,q=this.a,p=q.d
switch(p){case 0:p=q.x
if(p!=null&&q.c>8){q=p[0]
p=p[1]
x=e[0]
d.iV(x,x,x,x!==((q&255)<<24|p&255)>>>0?d.gcr():0)
return}d.le(e[0],0,0)
return
case 2:w=e[0]
x=e[1]
v=e[2]
q=q.x
if(q!=null){p=q[0]
u=q[1]
t=q[2]
s=q[3]
r=q[4]
q=q[5]
if(w!==((p&255)<<8|u&255)||x!==((t&255)<<8|s&255)||v!==((r&255)<<8|q&255)){d.iV(w,x,v,d.gcr())
return}}d.le(w,x,v)
return
case 3:d.sdI(0,e[0])
return
case 4:d.le(e[0],e[1],0)
return
case 6:d.iV(e[0],e[1],e[2],e[3])
return}throw B.p(A.co("Invalid color type: "+p+"."))}}
A.aDb.prototype={
J(){return"PngFilter."+this.b}}
A.bI2.prototype={
oc(d){var x,w,v,u,t,s,r,q,p=this,o=8192,n=d.a
n=n==null?null:n.gtg()
if(!(n===!0&&d.gdH()!==C.cV))n=d.gnu()<8&&!d.gtc()&&d.gr2()>1
else n=!0
if(n)d=d.p_(C.aj)
if(p.w==null){n=A.rT(!0,o)
p.w=n
n.mI(B.a([137,80,78,71,13,10,26,10],y.t))
x=A.rT(!0,o)
x.jx(d.ge7(0))
x.jx(d.ge3(0))
x.be(d.gnu())
if(d.gtc())n=3
else if(d.gr2()===1)n=0
else if(d.gr2()===2)n=4
else n=d.gr2()===3?2:6
x.be(n)
x.be(0)
x.be(0)
x.be(0)
n=p.w
n.toString
p.ua(n,"IHDR",J.dx(D.H.gaq(x.c),0,x.a))
n=d.c
if(n!=null){x=A.rT(!0,o)
x.mI(new B.fj(n.a))
x.be(0)
x.be(0)
x.mI(n.bHg())
n=p.w
n.toString
p.ua(n,"iCCP",J.dx(D.H.gaq(x.c),0,x.a))}if(d.gtc()){n=p.a
if(n!=null){n=n.a
n===$&&B.b()
p.aCH(n)}else{n=d.a
n=n==null?null:n.gf8()
n.toString
p.aCH(n)}}if(p.r){x=A.rT(!0,o)
n=p.e
n===$&&B.b()
x.jx(n)
x.jx(p.c)
n=p.w
n.toString
p.ua(n,"acTL",J.dx(D.H.gaq(x.c),0,x.a))}}w=d.gtc()?1:d.gr2()
v=d.gdH()===C.cV?2:1
n=d.ge7(0)
u=d.ge3(0)
t=d.ge3(0)
s=new Uint8Array(n*u*w*v+t)
p.bsR(0,d,s)
r=C.Ly.aH8(s,p.d)
n=d.d
if(n!=null)for(n=new B.ce(n,n.r,n.e,B.t(n).i("ce<1>"));n.t();){u=n.d
t=d.d.h(0,u)
t.toString
x=new A.aCl(!0,new Uint8Array(8192))
x.mI(D.tW.cq(u))
x.be(0)
x.mI(D.tW.cq(t))
u=p.w
u.toString
p.ua(u,"tEXt",J.dx(D.H.gaq(x.c),0,x.a))}if(p.r){x=A.rT(!0,o)
x.jx(p.f)
x.jx(d.ge7(0))
x.jx(d.ge3(0))
x.jx(0)
x.jx(0)
x.lE(d.y)
x.lE(1000)
x.be(1)
x.be(0)
n=p.w
n.toString
p.ua(n,"fcTL",J.dx(D.H.gaq(x.c),0,x.a));++p.f}if(p.f<=1){n=p.w
n.toString
p.ua(n,"IDAT",r)}else{q=A.rT(!0,o)
q.jx(p.f)
q.mI(r)
n=p.w
n.toString
p.ua(n,"fdAT",J.dx(D.H.gaq(q.c),0,q.a));++p.f}},
bMY(d){var x,w=this,v=w.w
if(v==null)return null
w.ua(v,"IEND",B.a([],y.t))
w.f=0
v=w.w
x=J.dx(D.H.gaq(v.c),0,v.a)
w.w=null
return x},
bLS(d,e){var x,w,v,u,t,s=this,r=d.glw().length
if(r<=1){s.e=1
s.r=!1
s.oc(d)}else{r=d.glw().length
s.e=r
s.r=r>1
s.c=d.r
if(d.gtc()){x=new A.bF3(new Int32Array(256))
x.bot(256)
x.bDZ(d)
s.a=x
for(r=d.glw(),w=r.length,v=0;v<r.length;r.length===w||(0,B.L)(r),++v){u=r[v]
if(u!==d){x.avd(u)
x.as7()
x.auV()
x.aqo()}}}for(r=d.glw(),w=r.length,v=0;v<r.length;r.length===w||(0,B.L)(r),++v){u=r[v]
t=s.a
if(t!=null)s.oc(t.aQg(u))
else s.oc(u)}}r=s.bMY(0)
r.toString
return r},
aCH(d){var x,w,v,u=this
if(d.gdH()===C.aj&&d.b===3&&d.a===256){x=u.w
x.toString
u.ua(x,"PLTE",J.dx(d.gaq(d),0,null))}else{x=d.a
w=A.rT(!0,x*3)
for(v=0;v<x;++v){w.be(D.e.L(d.nX(v)))
w.be(D.e.L(d.nV(v)))
w.be(D.e.L(d.nT(v)))}x=u.w
x.toString
u.ua(x,"PLTE",J.dx(D.H.gaq(w.c),0,w.a))}if(d.b===4){x=d.a
w=A.rT(!0,x)
for(v=0;v<x;++v)w.be(D.e.L(d.pt(v)))
x=u.w
x.toString
u.ua(x,"tRNS",J.dx(D.H.gaq(w.c),0,w.a))}},
ua(d,e,f){d.jx(f.length)
d.mI(new B.fj(e))
d.mI(f)
d.jx(A.zm(f,A.zm(new B.fj(e),0)))},
bsR(d,e,f){var x,w,v=this,u=e.gtc()?C.byE:v.b,t=e.gaq(0),s=e.a.gtz(),r=e.gtc()?1:e.gr2(),q=D.c.Z(r*e.gnu()+7,3),p=e.gnu()+7>>>3,o=u.a,n=J.dF(t),m=0,l=0,k=null,j=0
while(!0){x=e.a
x=x==null?null:x.b
if(!(j<(x==null?0:x)))break
w=n.Dn(t,l,s)
l+=s
switch(o){case 1:m=v.baW(w,p,q,f,m)
break
case 2:m=v.baZ(w,k,p,f,m)
break
case 3:m=v.baO(w,k,p,q,f,m)
break
case 4:m=v.baT(w,k,p,q,f,m)
break
default:m=v.baR(w,p,f,m)
break}++j
k=w}},
aCB(d,e,f,g,h){var x,w,v;--d
for(x=g.$flags|0;d>=0;h=w){w=h+1
v=e[f+d]
x&2&&B.K(g)
g[h]=v;--d}return h},
baR(d,e,f,g){var x,w,v=g+1
f.$flags&2&&B.K(f)
f[g]=0
x=d.length
if(e===1)for(g=v,w=0;w<x;++w,g=v){v=g+1
f[g]=d[w]}else for(g=v,w=0;w<x;w+=e)g=this.aCB(e,d,w,f,g)
return g},
baW(d,e,f,g,h){var x,w,v,u,t,s,r=h+1
g.$flags&2&&B.K(g)
g[h]=1
for(h=r,x=0;x<f;x+=e)h=this.aCB(e,d,x,g,h)
w=d.length
for(v=e-1,x=f;x<w;x+=e)for(u=v,t=0;t<e;++t,--u,h=r){r=h+1
s=x+u
g[h]=d[s]-d[s-f]&255}return h},
baZ(d,e,f,g,h){var x,w,v,u,t,s,r,q=h+1
g.$flags&2&&B.K(g)
g[h]=2
x=d.length
for(w=f-1,v=e!=null,h=q,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,h=q){r=v?e[u+t]:0
q=h+1
g[h]=d[u+t]-r&255}return h},
baO(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o=i+1
h.$flags&2&&B.K(h)
h[i]=3
x=d.length
for(w=f-1,v=e==null,i=o,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=o){r=u+t
q=r<g?0:d[r-g]
p=v?0:e[r]
o=i+1
h[i]=d[r]-(q+p>>>1)}return i},
brw(d,e,f){var x=d+e-f,w=x>d?x-d:d-x,v=x>e?x-e:e-x,u=x>f?x-f:f-x
if(w<=v&&w<=u)return d
else if(v<=u)return e
return f},
baT(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m=i+1
h.$flags&2&&B.K(h)
h[i]=4
x=d.length
for(w=f-1,v=e==null,i=m,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=m){r=u+t
q=r<g
p=q?0:d[r-g]
o=v?0:e[r]
n=q||v?0:e[r-g]
m=i+1
h[i]=d[r]-this.brw(p,o,n)&255}return i}}
A.FF.prototype={
J(){return"PnmFormat."+this.b}}
A.LQ.prototype={}
A.bI5.prototype={
JR(d){var x
this.b=A.de(d,!1,null,0)
x=this.WI()
if(x==="P1"||x==="P2"||x==="P5"||x==="P3"||x==="P6")return!0
return!1},
ny(d,e,f){if(this.pA(e)==null)return null
return this.kH(0)},
pA(d){var x,w,v=this
v.b=A.de(d,!1,null,0)
x=v.WI()
if(x==="P1"){w=v.a=new A.LQ(C.qi)
w.e=C.abP}else if(x==="P2"){w=v.a=new A.LQ(C.qi)
w.e=C.abQ}else if(x==="P5"){w=v.a=new A.LQ(C.qi)
w.e=C.Hu}else if(x==="P3"){w=v.a=new A.LQ(C.qi)
w.e=C.abR}else if(x==="P6"){w=v.a=new A.LQ(C.qi)
w.e=C.Hv}else return v.b=null
w.a=v.Og()
w=v.a
w.toString
w.b=v.Og()
w=v.a
if(w.a===0||w.b===0)return v.a=v.b=null
return w},
kH(d){var x,w,v,u,t,s=this,r=null,q=s.a
if(q==null)return r
x=q.e
if(x===C.abP){x=q.a
w=A.iQ(r,r,C.hE,0,C.bG,q.b,r,0,1,r,C.aj,x,!1)
for(q=w.a,q=q.gac(q);q.t();){v=q.gM(q)
if(s.WI()==="1")v.le(1,1,1)
else v.le(0,0,0)}return w}else if(x===C.abQ||x===C.Hu){u=s.Og()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.iQ(r,r,s.aI2(u),0,C.bG,q,r,0,1,r,C.aj,x,!1)
for(q=w.a,q=q.gac(q);q.t();){v=q.gM(q)
t=s.Yf(s.a.e,u)
v.le(t,t,t)}return w}else if(x===C.abR||x===C.Hv){u=s.Og()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.iQ(r,r,s.aI2(u),0,C.bG,q,r,0,3,r,C.aj,x,!1)
for(q=w.a,q=q.gac(q);q.t();)q.gM(q).le(s.Yf(s.a.e,u),s.Yf(s.a.e,u),s.Yf(s.a.e,u))
return w}return r},
aI2(d){if(d>255)return C.cV
if(d>15)return C.aj
if(d>3)return C.iu
if(d>1)return C.it
return C.hE},
Yf(d,e){if(d===C.Hu||d===C.Hv)return this.b.cE()
return this.Og()},
Og(){var x,w,v=this.WI()
if(J.bk(v)===0)return 0
try{x=B.dv(v,null)
return x}catch(w){return 0}},
WI(){var x,w,v,u,t=this.b
if(t==null)return""
x=this.c
if(x.length!==0)return D.b.fC(x,0)
w=D.d.bh(t.bXf())
if(w.length===0)return""
for(;D.d.b8(w,"#");)w=D.d.bh(this.b.aMd(70))
t=y.U
v=B.A(new B.a7(B.a(w.split(" "),y.T),new A.bI6(),t),t.i("y.E"))
for(t=v.length,u=0;u<t;++u)if(D.d.b8(v[u],"#")){D.b.sA(v,u)
break}D.b.E(x,v)
if(x.length===0)return""
return D.b.fC(x,0)}}
A.aDG.prototype={}
A.aDH.prototype={}
A.yy.prototype={}
A.aDJ.prototype={}
A.aDK.prototype={}
A.aDN.prototype={}
A.aDO.prototype={}
A.a81.prototype={}
A.aDM.prototype={
gcB(d){return this.c}}
A.bJ8.prototype={
b1i(d){var x,w,v,u,t=this
d.av()
d.av()
d.av()
d.av()
x=D.c.aK(d.c-d.d,8)
if(x>0){t.e=new Uint16Array(x)
t.f=new Uint16Array(x)
t.r=new Uint16Array(x)
t.w=new Uint16Array(x)
for(w=0;w<x;++w){v=t.e
u=d.av()
v.$flags&2&&B.K(v)
v[w]=u
u=t.f
v=d.av()
u.$flags&2&&B.K(u)
u[w]=v
v=t.r
u=d.av()
v.$flags&2&&B.K(v)
v[w]=u
u=t.w
v=d.av()
u.$flags&2&&B.K(u)
u[w]=v}}}}
A.Uv.prototype={
aMc(d,e,f,g,h,i,j){if(d.c-d.d<2)return
if(h==null)h=d.av()
switch(h){case 0:g.toString
this.bu0(d,e,f,g)
break
case 1:if(i==null)i=this.btY(d,f)
g.toString
this.bu_(d,e,f,g,i,j)
break
default:throw B.p(A.co("Unsupported compression: "+h))}},
bXe(d,e,f,g){return this.aMc(d,e,f,g,null,null,0)},
btY(d,e){var x,w=new Uint16Array(e)
for(x=0;x<e;++x)w[x]=d.av()
return w},
bu0(d,e,f,g){var x,w=e*f
if(g===16)w*=2
if(w>d.c-d.d){x=new Uint8Array(w)
this.c=x
D.H.mB(x,0,w,255)
return}this.c=d.jN(w).ik()},
bu_(d,e,f,g,h,i){var x,w,v,u,t,s,r=e*f
if(g===16)r*=2
x=new Uint8Array(r)
this.c=x
w=i*f
if(w>=h.length){D.H.mB(x,0,r,255)
return}for(v=0,u=0;u<f;++u,w=t){t=w+1
s=d.jS(h[w])
d.d=d.d+(s.c-s.d)
x=this.c
x.toString
this.b7R(s,x,v)
v+=e}},
b7R(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=e.$flags|0,v=e.length;u=d.d,u<x;){t=d.a
d.d=u+1
u=J.v(t,u)
t=$.oP()
t.$flags&2&&B.K(t)
t[0]=u
s=$.pT()[0]
if(s<0){s=1-s
u=d.d
if(u>=x)break
t=d.a
d.d=u+1
r=J.v(t,u)
if(f+s>v)s=v-f
for(q=0;q<s;++q,f=p){p=f+1
w&2&&B.K(e)
e[f]=r}}else{++s
if(f+s>v)s=v-f
s=Math.min(s,x-d.d)
for(q=0;q<s;++q,f=p){p=f+1
u=J.v(d.a,d.d++)
w&2&&B.K(e)
e[f]=u}}}},
gbb(d){return this.a}}
A.wo.prototype={
J(){return"PsdColorMode."+this.b}}
A.bJa.prototype={
b1j(d){var x,w,v=this
v.as=A.de(d,!0,null,0)
v.bts()
if(v.c!==943870035)return
x=v.as.ag()
v.as.jN(x)
x=v.as.ag()
v.at=v.as.jN(x)
x=v.as.ag()
v.ax=v.as.jN(x)
w=v.as
v.ay=w.jN(w.c-w.d)},
p5(d){var x,w=this
if(w.c===943870035){x=w.as
x===$&&B.b()
x=x==null}else x=!0
if(x)return!1
w.btW()
w.btX()
w.btZ()
w.ay=w.ax=w.at=w.as=null
return!0},
aGp(){if(!this.p5(0))return null
return this.bXQ()},
bXQ(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.y
if(d!=null)return d
d=f.a
d=A.iQ(e,e,C.aj,0,C.bG,f.b,e,0,4,e,C.aj,d,!1)
f.y=d
d.N(0)
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
m=n==null?e:n.er(o,r,e)
if(m==null)m=new A.h_()
l=D.e.L(m.gar(m))
k=D.e.L(m.gaE())
j=D.e.L(m.gaF(m))
i=D.e.L(m.gaU(m))
p.toString
if(p>=0&&p<f.a&&d&&s<f.b){n=w.b
n.toString
h=f.y.a
g=h==null?e:h.er(n+o,q,e)
if(g==null)g=new A.h_()
f.b3j(D.e.L(g.gar(g)),D.e.L(g.gaE()),D.e.L(g.gaF(g)),D.e.L(g.gaU(g)),l,k,j,i,u,v,g)}++o;++p}++r;++s}}++x}d=f.y
d.toString
return d},
b3j(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s=k/255*m
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
case 1836411936:u=D.c.Z(d*h,8)
v=D.c.Z(e*i,8)
w=D.c.Z(f*j,8)
x=k
break
case 1768188278:u=A.bJb(d,h)
v=A.bJb(e,i)
w=A.bJb(f,j)
x=k
break
case 1818391150:u=A.bJd(d,h)
v=A.bJd(e,i)
w=A.bJd(f,j)
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
case 1935897198:u=A.cXw(d,h)
v=A.cXw(e,i)
w=A.cXw(f,j)
x=k
break
case 1684633120:u=A.bJc(d,h)
v=A.bJc(e,i)
w=A.bJc(f,j)
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
case 1870030194:u=A.cXu(d,h,g,k)
v=A.cXu(e,i,g,k)
w=A.cXu(f,j,g,k)
x=k
break
case 1934387572:u=A.cXx(d,h)
v=A.cXx(e,i)
w=A.cXx(f,j)
x=k
break
case 1749838196:u=A.cXs(d,h)
v=A.cXs(e,i)
w=A.cXs(f,j)
x=k
break
case 1984719220:u=A.cXy(d,h)
v=A.cXy(e,i)
w=A.cXy(f,j)
x=k
break
case 1816947060:u=A.cXt(d,h)
v=A.cXt(e,i)
w=A.cXt(f,j)
x=k
break
case 1884055924:u=A.cXv(d,h)
v=A.cXv(e,i)
w=A.cXv(f,j)
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
case 1936553316:u=A.cXr(d,h)
v=A.cXr(e,i)
w=A.cXr(f,j)
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
n.sar(0,D.e.L(d*t+u*s))
n.saE(D.e.L(e*t+v*s))
n.saF(0,D.e.L(f*t+w*s))
n.saU(0,D.e.L(g*t+x*s))},
bts(){var x,w,v=this,u=v.as
u===$&&B.b()
v.c=u.ag()
u=v.as.av()
v.d=u
if(u!==1){v.c=0
return}x=v.as.jN(6)
for(w=0;w<6;++w)if(J.v(x.a,x.d+w)!==0){v.c=0
return}v.e=v.as.av()
v.b=v.as.ag()
v.a=v.as.ag()
v.f=v.as.av()
v.r=C.aRN[v.as.av()]},
btW(){var x,w,v,u,t,s,r=this,q=r.at
q.d=q.b
for(q=r.z;x=r.at,x.d<x.c;){w=x.ag()
v=r.at.av()
x=r.at
u=J.v(x.a,x.d++)
t=r.at.jO(u)
if((u&1)===0)++r.at.d
u=r.at.ag()
x=r.at
s=x.jS(u)
x.d=x.d+(s.c-s.d)
if((u&1)===1)++r.at.d
if(w===943868237)q.m(0,v,new A.aDI(v,t))}},
btX(){var x,w,v,u,t,s,r,q,p,o=this,n=o.ax
n.d=n.b
x=n.ag()
if((x&1)!==0)++x
w=o.ax.jN(x)
n=y.l
o.w=B.a([],n)
if(x>0){v=w.av()
u=$.oO()
u.$flags&2&&B.K(u)
u[0]=v
t=$.pS()[0]
if(t<0)t=-t
for(v=y.N,u=y.O,s=y.u,r=0;r<t;++r){q=new A.aDL(B.I(v,u),B.a([],n),B.a([],s))
q.b1k(w)
o.w.push(q)}}for(r=0;n=o.w,r<n.length;++r)n[r].bX7(w,o)
x=o.ax.ag()
p=o.ax.jN(x)
if(x>0){p.av()
p.av()
p.av()
p.av()
p.av()
p.av()
p.cE()}},
btZ(){var x,w,v,u,t,s,r=this,q=r.ay
q.d=q.b
x=q.av()
if(x===1){q=r.b
w=r.e
w===$&&B.b()
v=q*w
u=new Uint16Array(v)
for(t=0;t<v;++t)u[t]=r.ay.av()}else u=null
r.x=B.a([],y.X)
t=0
while(!0){q=r.e
q===$&&B.b()
if(!(t<q))break
q=r.x
w=r.ay
w.toString
s=t===3?-1:t
s=new A.Uv(s)
s.aMc(w,r.a,r.b,r.f,x,u,t)
q.push(s);++t}r.y=A.d8t(r.r,r.f,r.a,r.b,r.x)}}
A.aDI.prototype={
gbb(d){return this.a}}
A.aDL.prototype={
b1k(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=a1.ag(),a0=$.ix()
a0.$flags&2&&B.K(a0)
a0[0]=d
d=$.lW()
e.a=d[0]
a0[0]=a1.ag()
e.b=d[0]
a0[0]=a1.ag()
e.c=d[0]
a0[0]=a1.ag()
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
x=a1.av()
for(w=0;w<x;++w){d=a1.av()
a0=$.oO()
a0.$flags&2&&B.K(a0)
a0[0]=d
v=$.pS()[0]
a1.ag()
e.as.push(new A.Uv(v))}u=a1.ag()
if(u!==943868237)throw B.p(A.co("Invalid PSD layer signature: "+D.c.jQ(u,16)))
e.r=a1.ag()
e.w=a1.cE()
a1.cE()
e.y=a1.cE()
if(a1.cE()!==0)throw B.p(A.co("Invalid PSD layer data"))
t=a1.ag()
s=a1.jN(t)
if(t>0){t=s.ag()
if(t>0){r=s.jN(t)
d=r.d
r.ag()
r.ag()
r.ag()
r.ag()
r.cE()
r.cE()
if(r.c-d===20)r.d+=2
else{r.cE()
r.cE()
r.ag()
r.ag()
r.ag()
r.ag()}}t=s.ag()
if(t>0)new A.bJ8().b1i(s.jN(t))
t=s.cE()
e.Q=s.jO(t)
q=4-D.c.au(t,4)-1
if(q>0)s.d+=q
for(d=s.c,a0=e.ay,p=e.cy,o=y.cK;s.d<d;){u=s.ag()
if(u!==943868237)throw B.p(A.co("PSD invalid signature for layer additional data: "+D.c.jQ(u,16)))
n=s.jO(4)
t=s.ag()
m=s.jS(t)
l=s.d+(m.c-m.d)
s.d=l
if((t&1)===1)s.d=l+1
a0.m(0,n,A.dAT(n,m))
if(n==="lrFX"){k=A.ct(o.a(a0.h(0,"lrFX")).b,null,0)
k.av()
j=k.av()
for(i=0;i<j;++i){k.jO(4)
h=k.jO(4)
g=k.ag()
if(h==="dsdw"){f=new A.aDH()
p.push(f)
f.a=k.ag()
k.ag()
k.ag()
k.ag()
k.ag()
k.av()
k.av()
k.av()
k.av()
k.av()
k.jO(8)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
J.v(k.a,k.d++)
k.av()
k.av()
k.av()
k.av()
k.av()}else if(h==="isdw"){f=new A.aDK()
p.push(f)
f.a=k.ag()
k.ag()
k.ag()
k.ag()
k.ag()
k.av()
k.av()
k.av()
k.av()
k.av()
k.jO(8)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
J.v(k.a,k.d++)
k.av()
k.av()
k.av()
k.av()
k.av()}else if(h==="oglw"){f=new A.aDN()
p.push(f)
f.a=k.ag()
k.ag()
k.ag()
k.av()
k.av()
k.av()
k.av()
k.av()
k.jO(8)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
if(f.a===2){k.av()
k.av()
k.av()
k.av()
k.av()}}else if(h==="iglw"){f=new A.aDJ()
p.push(f)
f.a=k.ag()
k.ag()
k.ag()
k.av()
k.av()
k.av()
k.av()
k.av()
k.jO(8)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
if(f.a===2){J.v(k.a,k.d++)
k.av()
k.av()
k.av()
k.av()
k.av()}}else if(h==="bevl"){f=new A.aDG()
p.push(f)
f.a=k.ag()
k.ag()
k.ag()
k.ag()
k.jO(8)
k.jO(8)
k.av()
k.av()
k.av()
k.av()
k.av()
k.av()
k.av()
k.av()
k.av()
k.av()
J.v(k.a,k.d++)
J.v(k.a,k.d++)
J.v(k.a,k.d++)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
J.v(k.a,k.d++)
if(f.a===2){k.av()
k.av()
k.av()
k.av()
k.av()
k.av()
k.av()
k.av()
k.av()
k.av()}}else if(h==="sofi"){f=new A.aDO()
p.push(f)
f.a=k.ag()
k.jO(4)
k.av()
k.av()
k.av()
k.av()
k.av()
J.v(k.a,k.d++)
f.b=J.v(k.a,k.d++)!==0
k.av()
k.av()
k.av()
k.av()
k.av()}else k.d+=g}}}}},
bX7(d,e){var x,w,v,u,t,s=this,r=0
while(!0){x=s.as
x===$&&B.b()
if(!(r<x.length))break
x=x[r]
w=s.e
w===$&&B.b()
v=s.f
v===$&&B.b()
x.bXe(d,w,v,e.f);++r}w=e.r
v=e.f
u=s.e
u===$&&B.b()
t=s.f
t===$&&B.b()
s.cx=A.d8t(w,v,u,t,x)}}
A.Uw.prototype={}
A.bJ9.prototype={
ny(d,e,f){var x,w,v,u=null,t=A.d8s(e)
this.a=t
x=1
if(x===1){t=t.aGp()
return t}for(w=u,v=0;v<x;++v){t=this.a
f=t==null?u:t.aGp()
if(f==null)continue
if(w==null){f.w=C.ayw
w=f}else w.oc(f)}return w}}
A.aDR.prototype={}
A.Bk.prototype={
aX(d,e){return new A.Bk(this.a*e,this.b*e,this.c*e)},
ad(d,e){return new A.Bk(this.a+e.a,this.b+e.b,this.c+e.c)},
ab(d,e){return new A.Bk(this.a-e.a,this.b-e.b,this.c-e.c)}}
A.nv.prototype={
aX(d,e){var x=this
return new A.nv(x.a*e,x.b*e,x.c*e,x.d*e)},
ad(d,e){var x=this
return new A.nv(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
ab(d,e){var x=this
return new A.nv(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)}}
A.a84.prototype={
ge3(d){return this.b}}
A.Uz.prototype={
ge3(d){return this.f}}
A.aDQ.prototype={
ge3(d){return this.b}}
A.up.prototype={
sPQ(d){var x=this.a,w=this.b
x.$flags&2&&B.K(x)
x[w+1]=d},
Tt(){var x=this.e,w=this.d
if(x)return new A.Bk(C.hT[w>>>9],C.hT[w>>>4&31],C.fK[w&15])
else return new A.Bk(C.fK[w>>>7&15],C.fK[w>>>3&15],C.yu[w&7])},
Tv(){var x=this.e,w=this.d
if(x)return new A.nv(C.hT[w>>>9],C.hT[w>>>4&31],C.fK[w&15],255)
else return new A.nv(C.fK[w>>>7&15],C.fK[w>>>3&15],C.yu[w&7],C.yu[w>>>11&7])},
Tu(){var x=this.r,w=this.f
if(x)return new A.Bk(C.hT[w>>>10],C.hT[w>>>5&31],C.hT[w&31])
else return new A.Bk(C.fK[w>>>8&15],C.fK[w>>>4&15],C.fK[w&15])},
Tw(){var x=this.r,w=this.f
if(x)return new A.nv(C.hT[w>>>10],C.hT[w>>>5&31],C.hT[w&31],255)
else return new A.nv(C.fK[w>>>8&15],C.fK[w>>>4&15],C.fK[w&15],C.yu[w>>>12&7])},
Ni(){var x=this,w=x.c?1:0,v=x.d,u=x.e?1:0,t=x.f,s=x.r?1:0
return(w|(v&16383)<<1|u<<15|(t&32767)<<16|s<<31)>>>0},
vr(d){var x=this,w=x.a[x.b+1]
x.c=(w&1)===1
x.sPQ(x.Ni())
x.d=w>>>1&16383
x.sPQ(x.Ni())
x.e=(w>>>15&1)===1
x.sPQ(x.Ni())
x.f=w>>>16&32767
x.sPQ(x.Ni())
x.r=(w>>>31&1)===1
x.sPQ(x.Ni())}}
A.bJe.prototype={
pA(d){var x,w=this,v=d.length,u=v-(v>>>1&1431655765)>>>0
u=(u&858993459)+(u>>>2&858993459)
if((u+(u>>>4)>>>0&252645135)*16843009>>>0>>>24===1){x=w.b7A(d)
if(x!=null){w.a=d
return w.b=x}}x=w.b7Q(d)
if(x!=null){w.a=d
return w.b=x}x=w.b7O(d)
if(x!=null){w.a=d
return w.b=x}return null},
b7Q(d){var x,w,v=A.de(d,!1,null,0)
if(v.ag()!==52)return null
if(v.ag()!==55727696)return null
x=B.a([0,0,0,0],y.t)
w=new A.Uz(x)
v.ag()
w.b=v.ag()
x[0]=v.cE()
x[1]=v.cE()
x[2]=v.cE()
x[3]=v.cE()
v.ag()
v.ag()
w.f=v.ag()
w.r=v.ag()
v.ag()
v.ag()
v.ag()
v.ag()
w.Q=v.ag()
return w},
b7O(d){var x,w,v=A.de(d,!1,null,0)
if(v.ag()!==52)return null
x=new A.a84()
x.b=v.ag()
x.a=v.ag()
v.ag()
x.d=v.ag()
v.ag()
x.f=v.ag()
v.ag()
v.ag()
v.ag()
x.y=v.ag()
w=v.ag()
x.z=w
x.Q=v.ag()
if(w!==559044176)return null
return x},
b7A(d){var x,w,v,u,t,s,r=null,q=d.length,p=A.de(d,!1,r,0)
if(p.ag()!==0)return r
x=new A.aDQ()
x.b=p.ag()
x.a=p.ag()
p.ag()
p.ag()
p.ag()
p.ag()
p.ag()
p.ag()
p.ag()
w=p.ag()
x.y=w
if(w===559044176)return r
v=0
u=8
if(!(q===32)){t=0
while(!0){if(!(t<10)){v=1
break}s=t<<1>>>0
if((D.c.ez(64,s)&q)>>>0!==0){u=D.c.ez(16,t)
v=1
break}if((D.c.ez(128,s)&q)>>>0!==0){u=D.c.ez(16,t)
break}++t}if(t===10)return r}if((v+1)*2===4)return r
x.b=x.a=u
return x},
kH(d){var x,w,v=this,u=v.b
if(u==null||v.a==null)return null
if(u instanceof A.aDQ){u=u.a
x=v.b
x=x.ge3(x)
w=v.a
w.toString
return v.a7H(u,x,w)}else if(u instanceof A.a84){u=v.a
u.toString
return v.b7N(u)}else if(u instanceof A.Uz){u=v.a
u.toString
return v.b7P(u)}return null},
ny(d,e,f){if(this.pA(e)==null)return null
return this.kH(0)},
b7N(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.length
if(j<52||l.b==null)return k
x=l.b
x.toString
y.ab.a(x)
w=A.de(d,!1,k,0)
w.d+=52
v=x.Q
if(v<1)v=(x.d&4096)!==0?6:1
if(v!==1)return k
u=x.a
t=x.b
if(u*t*x.f/8>j-52)return k
switch(x.d&255){case 16:s=A.iQ(k,k,C.aj,0,C.bG,t,k,0,4,k,C.aj,u,!1)
for(x=s.a,x=x.gac(x);x.t();){r=x.gM(x)
q=J.v(w.a,w.d++)
p=J.v(w.a,w.d++)
r.sar(0,p&240)
r.saE((p&15)<<4)
r.saF(0,q&240)
r.saU(0,(q&15)<<4)}return s
case 17:s=A.iQ(k,k,C.aj,0,C.bG,t,k,0,4,k,C.aj,u,!1)
for(x=s.a,x=x.gac(x);x.t();){r=x.gM(x)
o=w.av()
n=(o&1)!==0?255:0
r.sar(0,o>>>8&248)
r.saE(o>>>3&248)
r.saF(0,(o&62)<<2)
r.saU(0,n)}return s
case 18:s=A.iQ(k,k,C.aj,0,C.bG,t,k,0,4,k,C.aj,u,!1)
for(x=s.a,x=x.gac(x);x.t();){r=x.gM(x)
r.sar(0,J.v(w.a,w.d++))
r.saE(J.v(w.a,w.d++))
r.saF(0,J.v(w.a,w.d++))
r.saU(0,J.v(w.a,w.d++))}return s
case 19:s=A.iQ(k,k,C.aj,0,C.bG,t,k,0,3,k,C.aj,u,!1)
for(x=s.a,x=x.gac(x);x.t();){r=x.gM(x)
o=w.av()
r.sar(0,o>>>8&248)
r.saE(o>>>3&252)
r.saF(0,(o&31)<<3)}return s
case 20:s=A.iQ(k,k,C.aj,0,C.bG,t,k,0,3,k,C.aj,u,!1)
for(x=s.a,x=x.gac(x);x.t();){r=x.gM(x)
o=w.av()
r.sar(0,(o&31)<<3)
r.saE(o>>>2&248)
r.saF(0,o>>>7&248)}return s
case 21:s=A.iQ(k,k,C.aj,0,C.bG,t,k,0,3,k,C.aj,u,!1)
for(x=s.a,x=x.gac(x);x.t();){r=x.gM(x)
r.sar(0,J.v(w.a,w.d++))
r.saE(J.v(w.a,w.d++))
r.saF(0,J.v(w.a,w.d++))}return s
case 22:s=A.iQ(k,k,C.aj,0,C.bG,t,k,0,1,k,C.aj,u,!1)
for(x=s.a,x=x.gac(x);x.t();)x.gM(x).sar(0,J.v(w.a,w.d++))
return s
case 23:s=A.iQ(k,k,C.aj,0,C.bG,t,k,0,4,k,C.aj,u,!1)
for(x=s.a,x=x.gac(x);x.t();){r=x.gM(x)
n=J.v(w.a,w.d++)
m=J.v(w.a,w.d++)
r.sar(0,m)
r.saE(m)
r.saF(0,m)
r.saU(0,n)}return s
case 24:return k
case 25:return x.y===0?l.aqK(u,t,w.ik()):l.a7H(u,t,w.ik())}return k},
b7P(d){var x,w,v,u=this
if(!(u.b instanceof A.Uz))return null
x=A.de(d,!1,null,0)
w=x.d+=52
v=y.aM.a(u.b)
x.d=w+v.Q
if(v.c[0]===0)switch(v.b){case 2:return u.aqK(v.r,v.f,x.ik())
case 3:return u.a7H(v.r,v.f,x.ik())}return null},
aqK(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=A.iQ(b5,b5,C.aj,0,C.bG,c6,b5,0,3,b5,C.aj,c5,!1),b7=c5/4|0,b8=b7-1,b9=J.pV(D.H.gaq(c7),0,null),c0=new A.up(b9),c1=new A.up(J.pV(D.H.gaq(c7),0,null)),c2=new A.up(J.pV(D.H.gaq(c7),0,null)),c3=new A.up(J.pV(D.H.gaq(c7),0,null)),c4=new A.up(J.pV(D.H.gaq(c7),0,null))
for(x=0,w=0;x<b7;++x,w+=4)for(v=0,u=0;v<b7;++v,u+=4){c0.b=A.Bl(v,x)<<1>>>0
c0.vr(0)
t=b9[c0.b]
s=c0.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&b8)>>>0
o=(p+1&b8)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&b8)>>>0
k=(l+1&b8)>>>0
c1.b=A.Bl(l,p)<<1>>>0
c1.vr(0)
c2.b=A.Bl(k,p)<<1>>>0
c2.vr(0)
c3.b=A.Bl(l,o)<<1>>>0
c3.vr(0)
c4.b=A.Bl(k,o)<<1>>>0
c4.vr(0)
j=c1.Tt()
i=C.e_[r][0]
h=c2.Tt()
g=C.e_[r][1]
f=c3.Tt()
e=C.e_[r][2]
d=c4.Tt()
a0=C.e_[r][3]
a1=c1.Tu()
a2=C.e_[r][0]
a3=c2.Tu()
a4=C.e_[r][1]
a5=c3.Tu()
a6=C.e_[r][2]
a7=c4.Tu()
a8=C.e_[r][3]
a9=C.UQ[s+t&3]
b0=a9[0]
b1=a9[1]
b2=D.c.Z((j.a*i+h.a*g+f.a*e+d.a*a0)*b0+(a1.a*a2+a3.a*a4+a5.a*a6+a7.a*a8)*b1,7)
b3=D.c.Z((j.b*i+h.b*g+f.b*e+d.b*a0)*b0+(a1.b*a2+a3.b*a4+a5.b*a6+a7.b*a8)*b1,7)
b4=D.c.Z((j.c*i+h.c*g+f.c*e+d.c*a0)*b0+(a1.c*a2+a3.c*a4+a5.c*a6+a7.c*a8)*b1,7)
b1=b6.a
if(b1!=null)b1.fF(m+u,n,b2,b3,b4)
t=t>>>2;++r}}}return b6},
a7H(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=A.iQ(a4,a4,C.aj,0,C.bG,b5,a4,0,4,a4,C.aj,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.pV(D.H.gaq(b6),0,null),a9=new A.up(a8),b0=new A.up(J.pV(D.H.gaq(b6),0,null)),b1=new A.up(J.pV(D.H.gaq(b6),0,null)),b2=new A.up(J.pV(D.H.gaq(b6),0,null)),b3=new A.up(J.pV(D.H.gaq(b6),0,null))
for(x=0,w=0;x<a6;++x,w+=4)for(v=0,u=0;v<a6;++v,u+=4){a9.b=A.Bl(v,x)<<1>>>0
a9.vr(0)
t=a8[a9.b]
s=a9.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&a7)>>>0
o=(p+1&a7)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&a7)>>>0
k=(l+1&a7)>>>0
b0.b=A.Bl(l,p)<<1>>>0
b0.vr(0)
b1.b=A.Bl(k,p)<<1>>>0
b1.vr(0)
b2.b=A.Bl(l,o)<<1>>>0
b2.vr(0)
b3.b=A.Bl(k,o)<<1>>>0
b3.vr(0)
j=b0.Tv()
i=C.e_[r][0]
h=b1.Tv()
g=C.e_[r][1]
g=new A.nv(j.a*i,j.b*i,j.c*i,j.d*i).ad(0,new A.nv(h.a*g,h.b*g,h.c*g,h.d*g))
h=b2.Tv()
i=C.e_[r][2]
i=g.ad(0,new A.nv(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.Tv()
g=C.e_[r][3]
f=i.ad(0,new A.nv(h.a*g,h.b*g,h.c*g,h.d*g))
g=b0.Tw()
h=C.e_[r][0]
i=b1.Tw()
j=C.e_[r][1]
j=new A.nv(g.a*h,g.b*h,g.c*h,g.d*h).ad(0,new A.nv(i.a*j,i.b*j,i.c*j,i.d*j))
i=b2.Tw()
h=C.e_[r][2]
h=j.ad(0,new A.nv(i.a*h,i.b*h,i.c*h,i.d*h))
i=b3.Tw()
j=C.e_[r][3]
e=h.ad(0,new A.nv(i.a*j,i.b*j,i.c*j,i.d*j))
d=C.UQ[s+t&3]
j=d[0]
i=d[1]
a0=D.c.Z(f.a*j+e.a*i,7)
a1=D.c.Z(f.b*j+e.b*i,7)
a2=D.c.Z(f.c*j+e.c*i,7)
a3=D.c.Z(f.d*d[2]+e.d*d[3],7)
i=a5.a
if(i!=null)i.kU(m+u,n,a0,a1,a2,a3)
t=t>>>2;++r}}}return a5}}
A.aIo.prototype={
oA(d,e){var x,w=this
if(e.c-e.d<18)return
w.a=e.cE()
w.b=e.cE()
x=e.cE()
w.c=x<12?C.aLU[x]:C.Aw
e.av()
w.e=e.av()
w.f=e.cE()
e.av()
e.av()
w.x=e.av()
w.y=e.av()
w.z=e.cE()
w.Q=e.cE()},
aJO(){var x=this,w=x.z
if(w!==8&&w!==16&&w!==24&&w!==32)return!1
w=x.c
if(w===C.km||w===C.kn){if(x.e>256||x.b!==1)return!1
w=x.f
if(w!==16&&w!==24&&w!==32)return!1}else if(x.b===1)return!1
return!0}}
A.pC.prototype={
J(){return"TgaImageType."+this.b}}
A.bWk.prototype={
ny(d,e,f){if(this.pA(e)==null)return null
return this.kH(0)},
pA(d){var x,w,v,u,t=this
t.a=new A.aIo(C.Aw)
x=A.de(d,!1,null,0)
t.b=x
w=x.jN(18)
t.a.oA(0,w)
if(!t.a.aJO())return null
x=t.b
v=t.a
x.d+=v.a
u=v.c
if(u===C.km||u===C.kn)v.as=x.jN(v.e*D.c.Z(v.f,3)).ik()
x=t.a
x.ax=t.b.d
return x},
kH(d){var x=this,w=x.a
if(w==null)return null
w=w.c
if(w===C.af6)return x.aqJ()
else if(w===C.af5||w===C.kn)return x.b7T()
else if(w===C.km)return x.aqJ()
return null},
aqE(d,e){var x,w,v,u,t,s,r,q=this,p=A.de(d,!1,null,0),o=q.a.f
if(o===16){o=q.b
o===$&&B.b()
x=o.av()
w=x>>>7&248
v=x>>>2&248
u=(x&31)<<3
t=(x&32768)!==0?0:255
for(s=0;s<q.a.e;++s){e.vd(s,w)
e.vb(s,v)
e.va(s,u)
e.v9(s,t)}}else{r=o===32
for(s=0;s<q.a.e;++s){u=J.v(p.a,p.d++)
v=J.v(p.a,p.d++)
w=J.v(p.a,p.d++)
t=r?J.v(p.a,p.d++):255
e.vd(s,w)
e.vb(s,v)
e.va(s,u)
e.v9(s,t)}}},
b7T(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=h.z,f=g===16,e=f||g===32,d=h.x,a0=h.y,a1=e?4:3
h=h.c
x=A.iQ(i,i,C.aj,0,C.bG,a0,i,0,a1,i,C.aj,d,h===C.km||h===C.kn)
h=x.a
if((h==null?i:h.gf8())!=null){h=j.a.as
h.toString
d=x.a
d=d==null?i:d.gf8()
d.toString
j.aqE(h,d)}w=x.ge7(0)
v=x.ge3(0)-1
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
if(d!=null)d.ni(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}else{d=j.b
if(f){n=d.av()
q=n>>>7&248
m=n>>>2&248
l=(n&31)<<3
k=(n&32768)!==0?0:255
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.kU(u,v,q,m,l,k)
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
if(d!=null)d.kU(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}}else if(h)for(p=0;p<s;++p){d=j.b
q=J.v(d.a,d.d++)
o=u+1
d=x.a
if(d!=null)d.ni(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}else if(f)for(p=0;p<s;++p){n=j.b.av()
k=(n&32768)!==0?0:255
o=u+1
d=x.a
if(d!=null)d.kU(u,v,n>>>7&248,n>>>2&248,(n&31)<<3,k)
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
if(d!=null)d.kU(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}if(u>=w){--v
if(v<0)break
u=0}}return x},
aqJ(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
g===$&&B.b()
x=i.a
g.d=x.ax
w=x.z
g=w===16
v=!0
if(!g)if(w!==32){u=x.c
if(u===C.km||u===C.kn){u=x.f
u=u===16||u===32}else u=!1
v=u}u=x.x
t=x.y
s=v?4:3
x=x.c
r=A.iQ(h,h,C.aj,0,C.bG,t,h,0,s,h,C.aj,u,x===C.km||x===C.kn)
x=i.a
u=x.c
if(u===C.km||u===C.kn){x=x.as
x.toString
u=r.a
u=u==null?h:u.gf8()
u.toString
i.aqE(x,u)}if(w===8)for(q=r.ge3(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
g=i.b
o=J.v(g.a,g.d++)
g=r.a
if(g!=null)g.ni(p,q,o);++p}}else if(g)for(q=r.ge3(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
n=i.b.av()
m=(n&32768)!==0?0:255
g=r.a
if(g!=null)g.kU(p,q,n>>>7&248,n>>>2&248,(n&31)<<3,m);++p}}else for(q=r.ge3(0)-1;q>=0;--q){p=0
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
if(g!=null)g.kU(p,q,j,k,l,m);++p}}return r}}
A.bXq.prototype={
jM(d){var x,w,v,u,t=this
if(d===0)return 0
if(t.c===0){t.c=8
t.b=t.a.cE()}for(x=t.a,w=0;v=t.c,d>v;){w=D.c.f9(w,v)+(t.b&C.pB[v])
d-=v
t.c=8
t.b=J.v(x.a,x.d++)}if(d>0){if(v===0){t.c=8
t.b=x.cE()}x=D.c.f9(w,d)
v=t.b
u=t.c-d
w=x+(D.c.oJ(v,u)&C.pB[d])
t.c=u}return w}}
A.aIt.prototype={
j(d){var x=this,w=x.a,v=$.cU_().h(0,w)
if(v!=null)return v.a+": "+x.b.j(0)+" "+x.c
return"<"+w+">: "+x.b.j(0)+" "+x.c},
q9(d){var x,w,v,u=this,t=u.e
if(t!=null)return t
t=u.f
t.d=u.d
x=u.c
w=u.b
v=t.jN(x*(w!==C.aa?C.l3[w.a]:0))
switch(w.a){case 1:return u.e=new A.vX(new Uint8Array(B.c9(v.jN(x).ik())))
case 2:return u.e=new A.Et(x===0?"":v.jO(x-1))
case 7:return u.e=new A.vX(new Uint8Array(B.c9(v.jN(x).ik())))
case 3:return u.e=A.d5T(v,x)
case 4:return u.e=A.d5O(v,x)
case 5:return u.e=A.d5P(v,x)
case 11:return u.e=A.d5V(v,x)
case 12:return u.e=A.d5N(v,x)
case 6:return u.e=new A.y7(new Int8Array(B.c9(J.cU7(D.H.gaq(v.ik()),0,x))))
case 8:return u.e=A.d5S(v,x)
case 9:return u.e=A.d5Q(v,x)
case 10:return u.e=A.d5R(v,x)
case 0:return null}},
gn(d){return this.e}}
A.bXs.prototype={
bJN(d,e,f,g){var x,w,v,u=this
u.r=e
u.x=u.w=0
x=D.c.aK(u.a+7,8)
for(w=0,v=0;v<g;++v){u.a7F(d,w,f)
w+=x}},
a7F(d,e,f){var x,w,v,u,t,s,r,q,p=this
p.d=0
for(x=p.a,w=!0;f<x;){for(;w;){v=p.zL(10)
u=C.Vh[v]
t=D.c.Z(u,1)&15
if(t===12){u=C.x4[(v<<2&12|p.pJ(2))>>>0]
s=D.c.Z(u,1)
f+=D.c.Z(u,4)&4095
p.m3(4-(s&7))}else if(t===0)throw B.p(A.co("TIFFFaxDecoder0"))
else if(t===15)throw B.p(A.co("TIFFFaxDecoder1"))
else{f+=D.c.Z(u,5)&2047
p.m3(10-t)
if((u&1)===0){p.f[p.d++]=f
w=!1}}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}for(;!w;){u=C.Qr[p.pJ(4)]
r=u>>>5&2047
q=!0
if(r===100){u=C.RX[p.zL(9)]
t=D.c.Z(u,1)&15
r=D.c.Z(u,5)&2047
if(t===12){p.m3(5)
u=C.x4[p.pJ(4)]
s=D.c.Z(u,1)
r=D.c.Z(u,4)&4095
p.qu(d,e,f,r)
f+=r
p.m3(4-(s&7))}else if(t===15)throw B.p(A.co("TIFFFaxDecoder2"))
else{p.qu(d,e,f,r)
f+=r
p.m3(9-t)
if((u&1)===0){p.f[p.d++]=f
w=q}}}else{if(r===200){u=C.Qm[p.pJ(2)]
r=u>>>5&2047
p.qu(d,e,f,r)
f+=r
p.m3(2-(u>>>1&15))
p.f[p.d++]=f}else{p.qu(d,e,f,r)
f+=r
p.m3(4-(u>>>1&15))
p.f[p.d++]=f}w=q}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}}p.f[p.d++]=f},
bJO(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.r=a0
e.z=3
e.x=e.w=0
x=e.a
w=D.c.aK(x+7,8)
v=B.c3(2,null,!1,y.s)
e.at=a3&1
e.as=a3>>>2&1
if(e.axB()!==1)throw B.p(A.co("TIFFFaxDecoder3"))
e.a7F(d,0,a1)
for(u=w,t=1;t<a2;++t){if(e.axB()===0){s=e.e
e.e=e.f
e.f=s
e.y=0
r=a1
q=-1
p=!0
o=0
while(!0){r.toString
if(!(r<x))break
e.asZ(q,p,v)
n=v[0]
m=v[1]
l=C.UY[e.pJ(7)]&255
k=l>>>3&15
j=l&7
if(k===0){if(!p){m.toString
e.qu(d,u,r,m-r)}e.m3(7-j)
r=m
q=r}else if(k===1){e.m3(7-j)
i=o+1
h=i+1
if(p){r+=e.VX()
e.f[o]=r
g=e.VW()
e.qu(d,u,r,g)
r+=g
e.f[i]=r}else{g=e.VW()
e.qu(d,u,r,g)
r+=g
e.f[o]=r
r+=e.VX()
e.f[i]=r}o=h
q=r}else{if(k<=8){n.toString
f=n+(k-5)
i=o+1
e.f[o]=f
p=!p
if(p)e.qu(d,u,r,f-r)
e.m3(7-j)}else throw B.p(A.co("TIFFFaxDecoder4"))
r=f
o=i
q=r}}e.f[o]=r
e.d=o+1}else e.a7F(d,u,a1)
u+=w}},
bJU(a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.r=a4
a2.z=4
a2.x=a2.w=0
x=a2.a
w=D.c.aK(x+7,8)
v=B.c3(2,null,!1,y.s)
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
a2.asZ(p,o,v)
m=v[0]
l=v[1]
k=C.UY[a2.pJ(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
a2.qu(a3,t,q,l-q)}a2.m3(7-i)
q=l
p=q}else if(j===1){a2.m3(7-i)
h=n+1
g=h+1
if(o){q+=a2.VX()
r[n]=q
f=a2.VW()
a2.qu(a3,t,q,f)
q+=f
r[h]=q}else{f=a2.VW()
a2.qu(a3,t,q,f)
q+=f
r[n]=q
q+=a2.VX()
r[h]=q}n=g
p=q}else if(j<=8){m.toString
e=m+(j-5)
h=n+1
r[n]=e
o=!o
if(o)a2.qu(a3,t,q,e-q)
a2.m3(7-i)
q=e
n=h
p=q}else if(j===11){if(a2.pJ(3)!==7)throw B.p(A.co("TIFFFaxDecoder5"))
for(d=0,a0=!1;!a0;o=a1){for(;a2.pJ(1)!==1;)++d
if(d>5){d-=6
if(!o&&d>0){h=n+1
r[n]=q
n=h}q+=d
if(d>0)o=!0
a1=a2.pJ(1)===0
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
a2.qu(a3,t,q,1);++q
n=h}}}else throw B.p(A.co("TIFFFaxDecoder5 "+j))}r[n]=q
a2.d=n+1
t+=w}},
VX(){var x,w,v,u,t,s,r=this
for(x=0,w=!0;w;){v=r.zL(10)
u=C.Vh[v]
t=D.c.Z(u,1)&15
if(t===12){u=C.x4[(v<<2&12|r.pJ(2))>>>0]
s=D.c.Z(u,1)
x+=D.c.Z(u,4)&4095
r.m3(4-(s&7))}else if(t===0)throw B.p(A.co("TIFFFaxDecoder0"))
else if(t===15)throw B.p(A.co("TIFFFaxDecoder1"))
else{x+=D.c.Z(u,5)&2047
r.m3(10-t)
if((u&1)===0)w=!1}}return x},
VW(){var x,w,v,u,t,s,r=this
for(x=0,w=!1;!w;){v=C.Qr[r.pJ(4)]
u=v>>>5&2047
if(u===100){v=C.RX[r.zL(9)]
t=D.c.Z(v,1)&15
s=D.c.Z(v,5)
if(t===12){r.m3(5)
v=C.x4[r.pJ(4)]
s=D.c.Z(v,1)
x+=D.c.Z(v,4)&4095
r.m3(4-(s&7))}else if(t===15)throw B.p(A.co("TIFFFaxDecoder2"))
else{x+=s&2047
r.m3(9-t)
if((v&1)===0)w=!0}}else{if(u===200){v=C.Qm[r.pJ(2)]
x+=v>>>5&2047
r.m3(2-(v>>>1&15))}else{x+=u
r.m3(4-(v>>>1&15))}w=!0}}return x},
axB(){var x,w,v=this,u="TIFFFaxDecoder8",t=v.as
if(t===0){if(v.zL(12)!==1)throw B.p(A.co("TIFFFaxDecoder6"))}else if(t===1){t=v.w
t.toString
x=8-t
if(v.zL(x)!==0)throw B.p(A.co(u))
if(x<4)if(v.zL(8)!==0)throw B.p(A.co(u))
for(;w=v.zL(8),w!==1;)if(w!==0)throw B.p(A.co(u))}if(v.at===0)return 1
else return v.pJ(1)},
asZ(d,e,f){var x,w=this,v=w.e,u=w.d,t=w.y,s=t>0?t-1:0
s=e?(s&4294967294)>>>0:(s|1)>>>0
for(x=s;x<u;x+=2){t=v[x]
t.toString
d.toString
if(t>d){w.y=x
f[0]=t
break}}t=x+1
if(t<u)f[1]=v[t]},
qu(d,e,f,g){var x,w,v,u,t,s=8*e+f,r=s+g,q=D.c.Z(s,3),p=s&7
if(p>0){x=D.c.f9(1,7-p)
w=J.v(d.a,d.d+q)
while(!0){if(!(x>0&&s<r))break
w=(w|x)>>>0
x=x>>>1;++s}d.m(0,q,w)}q=D.c.Z(s,3)
for(v=r-7;s<v;q=u){u=q+1
J.bZ(d.a,d.d+q,255)
s+=8}for(;s<r;){q=D.c.Z(s,3)
v=J.v(d.a,d.d+q)
t=D.c.f9(1,7-(s&7))
J.bZ(d.a,d.d+q,(v|t)>>>0);++s}},
zL(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.r
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
r=C.nc[J.v(j.a,x+v)&255]
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=C.nc[J.v(u,x+j)&255]
else{t=C.nc[J.v(u,x+j)&255]
j=k.r
s=C.nc[J.v(j.a,j.d+(v+2))&255]}}}else throw B.p(A.co("TIFFFaxDecoder7"))
j=k.w
j.toString
q=8-j
p=d-q
if(p>8){o=p-8
n=8}else{n=p
o=0}j=k.x
j.toString
j=k.x=j+1
m=D.c.f9(r&C.pB[q],p)
l=D.c.hs(t&C.FC[n],8-n)
if(o!==0){l=D.c.f9(l,o)|D.c.hs(s&C.FC[o],8-o)
k.x=j+1
k.w=o}else if(n===8){k.w=0
k.x=j+1}else k.w=n
return(m|l)>>>0},
pJ(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.r
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
s=C.nc[J.v(m.a,x+v)&255]
if(!(v===w)){m=n.r
t=C.nc[J.v(m.a,m.d+(v+1))&255]}}else throw B.p(A.co("TIFFFaxDecoder7"))
m=n.w
m.toString
r=8-m
q=d-r
p=r-d
if(p>=0){o=D.c.hs(s&C.pB[r],p)
m+=d
n.w=m
if(m===8){n.w=0
m=n.x
m.toString
n.x=m+1}}else{o=(D.c.f9(s&C.pB[r],-p)|D.c.hs(t&C.FC[q],8-q))>>>0
m=n.x
m.toString
n.x=m+1
n.w=q}return o},
m3(d){var x,w=this,v=w.w
v.toString
x=v-d
if(x<0){v=w.x
v.toString
w.x=v-1
w.w=8+x}else w.w=x}}
A.aIu.prototype={
b1y(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.ct(d,g,0),e=d.av()
for(x=h.a,w=0;w<e;++w){v=d.av()
u=d.av()
t=C.T2[u]
s=C.l3[u]
r=d.ag()
if(r*s>4)q=d.ag()
else{q=d.d
d.d=q+4}p=new A.aIt(v,t,r,q,f)
x.m(0,v,p)
if(v===256){o=p.q9(0)
o=o==null?g:o.L(0)
h.b=o==null?0:o}else if(v===257){o=p.q9(0)
o=o==null?g:o.L(0)
h.c=o==null?0:o}else if(v===262){n=p.q9(0)
m=n==null?g:n.L(0)
if(m==null)m=17
if(m<17)h.d=C.aKg[m]
else h.d=C.Jh}else if(v===259){o=p.q9(0)
o=o==null?g:o.L(0)
h.e=o==null?0:o}else if(v===258){o=p.q9(0)
o=o==null?g:o.L(0)
h.f=o==null?0:o}else if(v===277){o=p.q9(0)
o=o==null?g:o.L(0)
h.r=o==null?0:o}else if(v===317){o=p.q9(0)
o=o==null?g:o.L(0)
h.Q=o==null?0:o}else if(v===339){o=p.q9(0)
n=o==null?g:o.L(0)
h.x=C.aKO[n==null?0:n]}else if(v===320){n=p.q9(0)
if(n!=null){o=J.dmG(D.H.gaq(n.uR()))
h.id=o
h.k1=0
o=o.length/3|0
h.k2=o
h.k3=o*2}}}o=h.id
l=o!=null
if(l&&h.d===C.Ji)h.r=1
if(h.b===0||h.c===0)return
if(l&&h.f===8){k=o.length
for(l=o.$flags|0,w=0;w<k;++w){j=o[w]
l&2&&B.K(o)
o[w]=j>>>8}}if(h.d===C.Jg)h.z=!0
h.w=h.r
if(x.a4(0,324)){h.ay=h.Hf(322)
h.ch=h.Hf(323)
h.CW=h.Ye(324)
h.cx=h.Ye(325)}else{h.ay=h.Yd(322,h.b)
if(!x.a4(0,278))h.ch=h.Yd(323,h.c)
else{i=h.Hf(278)
if(i===-1)h.ch=h.c
else h.ch=i}h.CW=h.Ye(273)
h.cx=h.Ye(279)}o=h.b
l=h.ay
h.cy=D.c.hR(o+l-1,l)
o=h.c
j=h.ch
h.db=D.c.hR(o+j-1,j)
h.dx=l*j*h.r
h.dy=h.Yd(266,1)
h.fr=h.Hf(292)
h.fx=h.Hf(293)
h.Hf(338)
switch(h.d.a){case 0:case 1:x=h.f
if(x===1&&h.r===1)h.y=C.Jf
else if(x===4&&h.r===1)h.y=C.bLw
else if(D.c.au(x,8)===0){x=h.r
if(x===1)h.y=C.bLx
else if(x===2)h.y=C.bLy
else h.y=C.qJ}break
case 2:if(D.c.au(h.f,8)===0){x=h.r
if(x===3)h.y=C.af8
else if(x===4)h.y=C.bLA
else h.y=C.qJ}break
case 3:x=!1
if(h.r===1)if(h.id!=null){x=h.f
x=x===4||x===8||x===16}if(x)h.y=C.bLz
break
case 4:if(h.f===1&&h.r===1)h.y=C.Jf
break
case 6:if(h.e===7&&h.f===8&&h.r===3)h.y=C.af8
else{if(x.a4(0,530)){n=x.h(0,530).q9(0)
h.as=n.L(0)
x=h.at=n.jP(0,1)}else x=h.at=h.as=2
o=h.as
o===$&&B.b()
if(o*x===1)h.y=C.qJ
else if(h.f===8&&h.r===3)h.y=C.bLB}break
case 5:if(D.c.au(h.f,8)===0)h.y=C.qJ
x=h.r
if(x===4)h.w=3
else if(x===5)h.w=4
break
default:if(D.c.au(h.f,8)===0)h.y=C.qJ
break}},
dh(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.x,d=e===C.qI,a0=e===C.bw
e=g.f
if(e===1)x=C.hE
else if(e===2)x=C.it
else{if(e===4)e=C.iu
else if(d&&e===16)e=C.jj
else if(d&&e===32)e=C.kR
else if(d&&e===64)e=C.mx
else if(a0&&e===8)e=C.my
else if(a0&&e===16)e=C.mz
else if(a0&&e===32)e=C.mA
else if(e===16)e=C.cV
else e=e===32?C.kS:C.aj
x=e}w=g.id!=null&&g.d===C.Ji
v=w?3:g.w
e=g.b
u=A.iQ(f,f,x,0,C.bG,g.c,f,0,v,f,x,e,w)
if(w){e=u.a
e=e==null?f:e.gf8()
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
e.qh(k,t[l],t[m],t[n])}}j=0
i=0
while(!0){e=g.db
e===$&&B.b()
if(!(j<e))break
h=0
while(!0){e=g.cy
e===$&&B.b()
if(!(h<e))break
g.b7U(a2,u,h,j);++h;++i}++j}return u},
b7U(b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null
if(a8.y===C.Jf){a8.b7D(b0,b1,b2,b3)
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
else if(u===5){w=A.de(new Uint8Array(p),!1,a9,0)
v=A.d6X()
try{J.dmK(v,A.ct(b0,x,0),w.a)}catch(o){}if(a8.Q===2)for(n=0;n<a8.ch;++n){m=a8.r
u=a8.ay
l=m*(n*u+1)
k=u*m
for(;m<k;++m){u=w
r=J.v(u.a,u.d+l)
j=w
i=a8.r
i=J.v(j.a,j.d+(l-i))
J.bZ(u.a,u.d+l,r+i);++l}}}else if(u===32773){w=A.de(new Uint8Array(p),!1,a9,0)
a8.aqI(b0,p,w.a)}else if(u===32946)w=A.de(C.kE.DN(b0.KW(0,0,x)),!1,a9,0)
else if(u===8)w=A.de(C.kE.DN(b0.KW(0,0,x)),!1,a9,0)
else if(u===6){a8.bm4(new A.ayi().dh(0,y.D.a(b0.KW(0,0,x))),b1,s,q,a8.ay,a8.ch)
return}else throw B.p(A.co("Unsupported Compression Type: "+u))
h=B.a([0,0,0],y.t)
for(g=q,f=0;f<a8.ch;++f,++g)for(e=s,d=0;d<a8.ay;++d,++e){u=w
if(u.d>=u.c||e>=a8.b||g>=a8.c)break
u=a8.r
if(u===1){u=a8.x
if(u===C.qI){u=a8.f
if(u===32){u=w.ag()
r=$.ix()
r.$flags&2&&B.K(r)
r[0]=u
a0=$.Id()[0]}else if(u===64)a0=w.a3x()
else if(u===16){u=w.av()
r=$.iP
a0=(r!=null?r:A.jE())[u]}else a0=0
if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.ni(e,g,a0)}}else{r=a8.f
if(r===8)if(u===C.bw){u=w
u=J.v(u.a,u.d++)
r=$.oP()
r.$flags&2&&B.K(r)
r[0]=u
a0=$.pT()[0]}else{u=w
a0=J.v(u.a,u.d++)}else if(r===16)if(u===C.bw){u=w.av()
r=$.oO()
r.$flags&2&&B.K(r)
r[0]=u
a0=$.pS()[0]}else a0=w.av()
else if(r===32)if(u===C.bw){u=w.ag()
r=$.ix()
r.$flags&2&&B.K(r)
r[0]=u
a0=$.lW()[0]}else a0=w.ag()
else a0=0
if(a8.d===C.Jg){u=b1.a
a1=u==null?a9:u.gcr()
a0=(a1==null?0:a1)-a0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.ni(e,g,a0)}}}else if(u===2){u=a8.f
if(u===8){if(a8.x===C.bw){u=w
u=J.v(u.a,u.d++)
r=$.oP()
r.$flags&2&&B.K(r)
r[0]=u
a2=$.pT()[0]}else{u=w
a2=J.v(u.a,u.d++)}if(a8.x===C.bw){u=w
u=J.v(u.a,u.d++)
r=$.oP()
r.$flags&2&&B.K(r)
r[0]=u
a3=$.pT()[0]}else{u=w
a3=J.v(u.a,u.d++)}}else if(u===16){if(a8.x===C.bw){u=w.av()
r=$.oO()
r.$flags&2&&B.K(r)
r[0]=u
a2=$.pS()[0]}else a2=w.av()
if(a8.x===C.bw){u=w.av()
r=$.oO()
r.$flags&2&&B.K(r)
r[0]=u
a3=$.pS()[0]}else a3=w.av()}else if(u===32){if(a8.x===C.bw){u=w.ag()
r=$.ix()
r.$flags&2&&B.K(r)
r[0]=u
a2=$.lW()[0]}else a2=w.ag()
if(a8.x===C.bw){u=w.ag()
r=$.ix()
r.$flags&2&&B.K(r)
r[0]=u
a3=$.lW()[0]}else a3=w.ag()}else{a2=0
a3=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.fF(e,g,a2,a3,0)}}else if(u===3){u=a8.x
if(u===C.qI){u=a8.f
if(u===32){u=w.ag()
r=$.ix()
r.$flags&2&&B.K(r)
r[0]=u
u=$.Id()
a4=u[0]
r[0]=w.ag()
a5=u[0]
r[0]=w.ag()
a6=u[0]}else{a5=0
a6=0
if(u===64)a4=w.a3x()
else if(u===16){u=w.av()
r=$.iP
a4=(r!=null?r:A.jE())[u]
u=w.av()
r=$.iP
a5=(r!=null?r:A.jE())[u]
u=w.av()
r=$.iP
a6=(r!=null?r:A.jE())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.fF(e,g,a4,a5,a6)}}else{r=a8.f
if(r===8){if(u===C.bw){u=w
u=J.v(u.a,u.d++)
r=$.oP()
r.$flags&2&&B.K(r)
r[0]=u
a4=$.pT()[0]}else{u=w
a4=J.v(u.a,u.d++)}if(a8.x===C.bw){u=w
u=J.v(u.a,u.d++)
r=$.oP()
r.$flags&2&&B.K(r)
r[0]=u
a5=$.pT()[0]}else{u=w
a5=J.v(u.a,u.d++)}if(a8.x===C.bw){u=w
u=J.v(u.a,u.d++)
r=$.oP()
r.$flags&2&&B.K(r)
r[0]=u
a6=$.pT()[0]}else{u=w
a6=J.v(u.a,u.d++)}}else if(r===16){if(u===C.bw){u=w.av()
r=$.oO()
r.$flags&2&&B.K(r)
r[0]=u
a4=$.pS()[0]}else a4=w.av()
if(a8.x===C.bw){u=w.av()
r=$.oO()
r.$flags&2&&B.K(r)
r[0]=u
a5=$.pS()[0]}else a5=w.av()
if(a8.x===C.bw){u=w.av()
r=$.oO()
r.$flags&2&&B.K(r)
r[0]=u
a6=$.pS()[0]}else a6=w.av()}else if(r===32){if(u===C.bw){u=w.ag()
r=$.ix()
r.$flags&2&&B.K(r)
r[0]=u
a4=$.lW()[0]}else a4=w.ag()
if(a8.x===C.bw){u=w.ag()
r=$.ix()
r.$flags&2&&B.K(r)
r[0]=u
a5=$.lW()[0]}else a5=w.ag()
if(a8.x===C.bw){u=w.ag()
r=$.ix()
r.$flags&2&&B.K(r)
r[0]=u
a6=$.lW()[0]}else a6=w.ag()}else{a4=0
a5=0
a6=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.fF(e,g,a4,a5,a6)}}}else if(u>=4)if(a8.x===C.qI){u=a8.f
if(u===32){u=w.ag()
r=$.ix()
r.$flags&2&&B.K(r)
r[0]=u
u=$.Id()
a4=u[0]
r[0]=w.ag()
a5=u[0]
r[0]=w.ag()
a6=u[0]
r[0]=w.ag()
a7=u[0]}else{a5=0
a6=0
a7=0
if(u===64)a4=w.a3x()
else if(u===16){u=w.av()
r=$.iP
a4=(r!=null?r:A.jE())[u]
u=w.av()
r=$.iP
a5=(r!=null?r:A.jE())[u]
u=w.av()
r=$.iP
a6=(r!=null?r:A.jE())[u]
u=w.av()
r=$.iP
a7=(r!=null?r:A.jE())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.kU(e,g,a4,a5,a6,a7)}}else{u=b1.a
a3=u==null?a9:u.gcr()
if(a3==null)a3=0
u=a8.f
if(u===8){if(a8.x===C.bw){u=w
u=J.v(u.a,u.d++)
r=$.oP()
r.$flags&2&&B.K(r)
r[0]=u
a4=$.pT()[0]}else{u=w
a4=J.v(u.a,u.d++)}if(a8.x===C.bw){u=w
u=J.v(u.a,u.d++)
r=$.oP()
r.$flags&2&&B.K(r)
r[0]=u
a5=$.pT()[0]}else{u=w
a5=J.v(u.a,u.d++)}if(a8.x===C.bw){u=w
u=J.v(u.a,u.d++)
r=$.oP()
r.$flags&2&&B.K(r)
r[0]=u
a6=$.pT()[0]}else{u=w
a6=J.v(u.a,u.d++)}if(a8.x===C.bw){u=w
u=J.v(u.a,u.d++)
r=$.oP()
r.$flags&2&&B.K(r)
r[0]=u
a7=$.pT()[0]}else{u=w
a7=J.v(u.a,u.d++)}if(a8.r===5)if(a8.x===C.bw){u=w
u=J.v(u.a,u.d++)
r=$.oP()
r.$flags&2&&B.K(r)
r[0]=u
a3=$.pT()[0]}else{u=w
a3=J.v(u.a,u.d++)}}else if(u===16){if(a8.x===C.bw){u=w.av()
r=$.oO()
r.$flags&2&&B.K(r)
r[0]=u
a4=$.pS()[0]}else a4=w.av()
if(a8.x===C.bw){u=w.av()
r=$.oO()
r.$flags&2&&B.K(r)
r[0]=u
a5=$.pS()[0]}else a5=w.av()
if(a8.x===C.bw){u=w.av()
r=$.oO()
r.$flags&2&&B.K(r)
r[0]=u
a6=$.pS()[0]}else a6=w.av()
if(a8.x===C.bw){u=w.av()
r=$.oO()
r.$flags&2&&B.K(r)
r[0]=u
a7=$.pS()[0]}else a7=w.av()
if(a8.r===5)if(a8.x===C.bw){u=w.av()
r=$.oO()
r.$flags&2&&B.K(r)
r[0]=u
a3=$.pS()[0]}else a3=w.av()}else if(u===32){if(a8.x===C.bw){u=w.ag()
r=$.ix()
r.$flags&2&&B.K(r)
r[0]=u
a4=$.lW()[0]}else a4=w.ag()
if(a8.x===C.bw){u=w.ag()
r=$.ix()
r.$flags&2&&B.K(r)
r[0]=u
a5=$.lW()[0]}else a5=w.ag()
if(a8.x===C.bw){u=w.ag()
r=$.ix()
r.$flags&2&&B.K(r)
r[0]=u
a6=$.lW()[0]}else a6=w.ag()
if(a8.x===C.bw){u=w.ag()
r=$.ix()
r.$flags&2&&B.K(r)
r[0]=u
a7=$.lW()[0]}else a7=w.ag()
if(a8.r===5)if(a8.x===C.bw){u=w.ag()
r=$.ix()
r.$flags&2&&B.K(r)
r[0]=u
a3=$.lW()[0]}else a3=w.ag()}else{a4=0
a5=0
a6=0
a7=0}if(a8.d===C.af9){A.deY(a4,a5,a6,a7,h)
a4=h[0]
a5=h[1]
a6=h[2]
a7=a3}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.kU(e,g,a4,a5,a6,a7)}}}}else throw B.p(A.co("Unsupported bitsPerSample: "+u))},
bm4(d,e,f,g,h,i){var x,w,v,u
for(x=0;x<i;++x)for(w=x+g,v=0;v<h;++v){u=d.a
u=u==null?null:u.er(v,x,null)
if(u==null)u=new A.h_()
e.BQ(v+f,w,u)}},
b7D(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.cy
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
if(r===32773){q=D.c.au(a2,8)===0?D.c.aK(a2,8)*u:(D.c.aK(a2,8)+1)*u
x=A.de(new Uint8Array(a2*u),!1,a1,0)
a0.aqI(a3,q,x.a)}else if(r===5){x=A.de(new Uint8Array(a2*u),!1,a1,0)
A.d6X().IL(0,A.ct(a3,s,0),x.a)
if(a0.Q===2)for(p=0;p<a0.c;++p){o=a0.r
n=o*(p*a0.b+1)
for(;o<a0.b*a0.r;++o){a2=x
u=J.v(a2.a,a2.d+n)
r=x
m=a0.r
m=J.v(r.a,r.d+(n-m))
J.bZ(a2.a,a2.d+n,u+m);++n}}}else if(r===2){x=A.de(new Uint8Array(a2*u),!1,a1,0)
try{A.cYo(a0.dy,a0.ay,a0.ch).bJN(x,a3,0,a0.ch)}catch(l){}}else if(r===3){x=A.de(new Uint8Array(a2*u),!1,a1,0)
try{A.cYo(a0.dy,a0.ay,a0.ch).bJO(x,a3,0,a0.ch,a0.fr)}catch(l){}}else if(r===4){x=A.de(new Uint8Array(a2*u),!1,a1,0)
try{A.cYo(a0.dy,a0.ay,a0.ch).bJU(x,a3,0,a0.ch,a0.fx)}catch(l){}}else if(r===8)x=A.de(C.kE.DN(a3.KW(0,0,s)),!1,a1,0)
else if(r===32946)x=A.de(C.kE.DN(a3.KW(0,0,s)),!1,a1,0)
else if(r===1)x=a3
else throw B.p(A.co("Unsupported Compression Type: "+r))
k=new A.bXq(x)
j=a4.gcr()
a2=a0.z
i=a2?j:0
h=a2?0:j
for(g=t,f=0;f<a0.ch;++f,++g){for(e=v,d=0;d<a0.ay;++d,++e){a2=a4.a
u=a2==null
r=u?a1:a2.b
if(g<(r==null?0:r)){a2=u?a1:a2.a
a2=e>=(a2==null?0:a2)}else a2=!0
if(a2)break
a2=k.jM(1)
u=a4.a
if(a2===0){if(u!=null)u.fF(e,g,i,0,0)}else if(u!=null)u.fF(e,g,h,0,0)}k.c=0}},
aqI(d,e,f){var x,w,v,u,t,s,r,q,p,o
for(x=J.cT(f),w=0,v=0;v<e;){u=w+1
t=J.v(d.a,d.d+w)
s=$.oP()
s.$flags&2&&B.K(s)
s[0]=t
r=$.pT()[0]
if(r>=0&&r<=127)for(t=r+1,w=u,q=0;q<t;++q,v=p,w=u){p=v+1
u=w+1
x.m(f,v,J.v(d.a,d.d+w))}else{t=r<=-1&&r>=-127
w=u+1
if(t){o=J.v(d.a,d.d+u)
for(t=-r+1,q=0;q<t;++q,v=p){p=v+1
x.m(f,v,o)}}}}},
Yd(d,e){var x=this.a
if(!x.a4(0,d))return e
x=x.h(0,d).q9(0)
x=x==null?null:x.L(0)
return x==null?0:x},
Hf(d){return this.Yd(d,0)},
Ye(d){var x,w=this.a
if(!w.a4(0,d))return null
x=w.h(0,d)
w=x.q9(0)
w.toString
return B.ql(x.c,w.gyH(w),!0,y.p)}}
A.Nw.prototype={
J(){return"TiffFormat."+this.b}}
A.lL.prototype={
J(){return"TiffPhotometricType."+this.b}}
A.uO.prototype={
J(){return"TiffImageType."+this.b}}
A.bXt.prototype={}
A.byX.prototype={
IL(d,e,f){var x,w,v,u,t,s,r=this
r.r=f
x=J.bk(f)
r.w=0
w=y.D.a(e.a)
r.e=w
r.f=w.length
r.b=e.d
if(w[0]===0&&w[1]===1)throw B.p(A.co("Invalid LZW Data"))
r.auP()
r.d=r.c=0
v=r.a8q()
w=r.x
u=0
while(!0){if(!(v!==257&&r.w<x))break
if(v===256){r.auP()
v=r.a8q()
r.as=0
if(v===257)break
J.bZ(r.r,r.w++,v)
u=v}else{t=r.Q
t.toString
if(v<t){r.atf(v)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bZ(r.r,r.w++,w[s])
r.aoh(u,w[r.as-1])}else{r.atf(u)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bZ(r.r,r.w++,w[s])
J.bZ(r.r,r.w++,w[r.as-1])
r.aoh(u,w[r.as-1])}u=v}v=r.a8q()}},
aoh(d,e){var x,w=this,v=w.y
v===$&&B.b()
x=w.Q
x.toString
v.$flags&2&&B.K(v)
v[x]=e
v=w.z
v===$&&B.b()
v.$flags&2&&B.K(v)
v[x]=d
x=w.Q=x+1
if(x===511)w.a=10
else if(x===1023)w.a=11
else if(x===2047)w.a=12},
atf(d){var x,w,v,u,t,s,r=this
r.as=0
x=r.x
r.as=1
w=r.y
w===$&&B.b()
v=w[d]
x.$flags&2&&B.K(x)
x[0]=v
v=r.z
v===$&&B.b()
u=v[d]
for(t=1;u!==4098;t=s){s=t+1
r.as=s
x[t]=w[u]
u=v[u]}},
a8q(){var x,w,v,u,t=this,s=t.b,r=t.f
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
return D.c.hs(t.c,s)&C.aFH[w-9]},
auP(){var x,w,v=this
v.y=new Uint8Array(4096)
x=new Uint32Array(4096)
v.z=x
D.bM.mB(x,0,4096,4098)
for(x=v.y,w=0;w<256;++w){x.$flags&2&&B.K(x)
x[w]=w}v.a=9
v.Q=258}}
A.bXr.prototype={
kH(d){var x,w,v=this.a
if(v==null)return null
v=v.f[d]
x=this.c
x===$&&B.b()
w=v.dh(0,x)
return w},
ny(d,e,f){var x=this,w=A.de(e,!1,null,0)
x.c=w
w=x.axD(w)
x.a=w
if(w==null)return null
return x.kH(0)},
axD(d){var x,w,v,u,t,s,r,q,p,o=null,n=B.a([],y._),m=new A.bXt(n),l=d.av()
if(l!==18761&&l!==19789)return o
if(l===19789)d.e=!0
else d.e=!1
v=d.av()
m.d=v
if(v!==42)return o
u=d.ag()
t=A.ct(d,o,0)
t.d=u
x=t
for(v=y.p,s=y.aL;u!==0;){w=null
try{r=new A.aIu(B.I(v,s),C.Jh,C.af7,C.bLC)
r.b1y(x)
w=r
q=w
if(!(q.b!==0&&q.c!==0))break}catch(p){break}n.push(w)
if(n.length===1){q=n[0]
m.a=q.b
m.b=q.c}u=x.ag()
if(u!==0)x.d=u}return n.length!==0?m:o}}
A.c2l.prototype={
Qe(){var x,w=this.a,v=w.tu()
if((v&1)!==0)return!1
if((v>>>1&7)>3)return!1
if((v>>>4&1)===0)return!1
this.f.d=v>>>5
if(w.tu()!==2752925)return!1
x=this.b
x.a=w.av()
x.b=w.av()
return!0},
p5(d){var x,w,v,u=this,t=null
if(!u.bcu())return t
x=u.b
w=x.a
u.d=A.iQ(t,t,C.aj,0,C.bG,x.b,t,0,4,t,C.aj,w,!1)
u.bl8()
if(!u.bs1())return t
x=x.w
if(x.length!==0){v=A.de(new B.fj(x),!1,t,0)
x=u.d
x.toString
x.e=A.d4E(v)}return u.d},
bcu(){var x,w,v,u,t=this
if(!t.Qe())return!1
t.fr=A.dGL()
for(x=t.dy,w=0;w<4;++w){v=new Int32Array(2)
u=new Int32Array(2)
x[w]=new A.aKh(v,u,new Int32Array(2))}x=t.b
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
u=A.dbv(v.jS(u))
t.c=u
v.d+=x.d
u.dK(1)
t.c.dK(1)
t.bs9(t.x,t.fr)
t.bs0()
if(!t.bs4(v))return!1
t.bs6()
t.c.dK(1)
t.bs5()
return!0},
bs9(d,e){var x,w,v,u=this,t=u.c
t===$&&B.b()
t=t.dK(1)!==0
d.a=t
if(t){d.b=u.c.dK(1)!==0
if(u.c.dK(1)!==0){d.c=u.c.dK(1)!==0
for(t=d.d,x=0;x<4;++x){if(u.c.dK(1)!==0){w=u.c
v=w.dK(7)
w=w.dK(1)===1?-v:v}else w=0
t.$flags&2&&B.K(t)
t[x]=w}for(t=d.e,x=0;x<4;++x){if(u.c.dK(1)!==0){w=u.c
v=w.dK(6)
w=w.dK(1)===1?-v:v}else w=0
t.$flags&2&&B.K(t)
t[x]=w}}if(d.b)for(x=0;x<3;++x){t=e.a
w=u.c.dK(1)!==0?u.c.dK(8):255
t.$flags&2&&B.K(t)
t[x]=w}}else d.b=!1
return!0},
bs0(){var x,w,v,u=this,t=u.w,s=u.c
s===$&&B.b()
t.a=s.dK(1)!==0
t.b=u.c.dK(6)
t.c=u.c.dK(3)
s=u.c.dK(1)!==0
t.d=s
if(s)if(u.c.dK(1)!==0){for(s=t.e,x=0;x<4;++x)if(u.c.dK(1)!==0){w=u.c
v=w.dK(6)
w=w.dK(1)===1?-v:v
s.$flags&2&&B.K(s)
s[x]=w}for(s=t.f,x=0;x<4;++x)if(u.c.dK(1)!==0){w=u.c
v=w.dK(6)
w=w.dK(1)===1?-v:v
s.$flags&2&&B.K(s)
s[x]=w}}if(t.b===0)s=0
else s=t.a?1:2
u.bs=s
return!0},
bs4(d){var x,w,v,u,t,s,r,q=d.c-d.d,p=this.c
p===$&&B.b()
p=D.c.ez(1,p.dK(2))
this.cy=p
x=p-1
w=x*3
if(q<w)return!1
for(p=this.db,v=0,u=0;u<x;++u,w=s){t=d.UX(3,v)
s=w+((J.v(t.a,t.d)|J.v(t.a,t.d+1)<<8|J.v(t.a,t.d+2)<<16)>>>0)
if(s>q)s=q
r=new A.acU(d.C2(s-w,w))
r.b=254
r.c=0
r.d=-8
p[u]=r
v+=3}p[x]=A.dbv(d.C2(q-w,d.d-d.b+w))
return w<q},
bs6(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
h===$&&B.b()
x=h.dK(7)
w=i.c.dK(1)!==0?i.c.Lx(4):0
v=i.c.dK(1)!==0?i.c.Lx(4):0
u=i.c.dK(1)!==0?i.c.Lx(4):0
t=i.c.dK(1)!==0?i.c.Lx(4):0
s=i.c.dK(1)!==0?i.c.Lx(4):0
r=i.x
for(h=i.dy,q=r.a,p=!r.c,o=r.d,n=0;n<4;++n){if(q){m=o[n]
if(p)m+=x}else{if(n>0){h[n]=h[0]
continue}m=x}l=h[n]
k=l.a
j=m+w
if(j<0)j=0
else if(j>127)j=127
j=C.F3[j]
k.$flags&2&&B.K(k)
k[0]=j
if(m<0)j=0
else j=m>127?127:m
k[1]=C.F4[j]
j=l.b
k=m+v
if(k<0)k=0
else if(k>127)k=127
k=C.F3[k]
j.$flags&2&&B.K(j)
j[0]=k*2
k=m+u
if(k<0)k=0
else if(k>127)k=127
j[1]=C.F4[k]*101581>>>16
if(j[1]<8)j[1]=8
k=l.c
j=m+t
if(j<0)j=0
else if(j>117)j=117
j=C.F3[j]
k.$flags&2&&B.K(k)
k[0]=j
j=m+s
if(j<0)j=0
else if(j>127)j=127
k[1]=C.F4[j]}},
bs5(){var x,w,v,u,t,s,r=this,q=r.fr
for(x=0;x<4;++x)for(w=0;w<8;++w)for(v=0;v<3;++v)for(u=0;u<11;++u){t=r.c
t===$&&B.b()
s=t.iU(C.aQ0[x][w][v][u])!==0?r.c.dK(8):C.aFD[x][w][v][u]
t=q.b[x][w].a[v]
t.$flags&2&&B.K(t)
t[u]=s}t=r.c
t===$&&B.b()
t=t.dK(1)!==0
r.fx=t
if(t)r.fy=r.c.dK(8)},
bt9(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.bs
k.toString
if(k>0){x=l.w
for(k=x.e,w=x.f,v=l.x,u=v.e,t=0;t<4;++t){if(v.a){s=u[t]
if(!v.c){r=x.b
r.toString
s+=r}}else s=x.b
for(q=0;q<=1;++q){r=l.C
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
if(r>0){n=r>4?D.c.Z(o,2):D.c.Z(o,1)
m=9-r
if(n>m)n=m}else n=o
if(n<1)n=1
p.b=n
p.a=2*o+n
if(o>=40)r=2
else r=o>=15?1:0
p.d=r}else p.a=0
p.c=q!==0}}}},
bl8(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k.at
if(j!=null)m.Y=j
x=J.jG(4,y.K)
for(j=y.q,w=0;w<4;++w)x[w]=B.a([new A.Oa(),new A.Oa()],j)
m.C=x
j=m.at
j.toString
x=J.jG(j,y.bt)
for(v=0;v<j;++v){u=new Uint8Array(16)
t=new Uint8Array(8)
x[v]=new A.aKi(u,t,new Uint8Array(8))}m.k2=x
m.ok=new Uint8Array(832)
j=m.at
j.toString
m.go=new Uint8Array(4*j)
u=m.p4=16*j
j=8*j
m.R8=j
t=m.bs
t.toString
s=C.EN[t]
r=s*u
q=(s/2|0)*j
m.p1=A.de(new Uint8Array(16*u+r),!1,l,r)
j=m.R8
j.toString
m.p2=A.de(new Uint8Array(8*j+q),!1,l,q)
j=m.R8
j.toString
m.p3=A.de(new Uint8Array(8*j+q),!1,l,q)
j=k.a
m.RG=A.de(new Uint8Array(j),!1,l,0)
p=k.a+1>>>1
m.rx=A.de(new Uint8Array(p),!1,l,0)
m.ry=A.de(new Uint8Array(p),!1,l,0)
k=m.bs
k.toString
o=C.EN[k]
if(k===2)m.ch=m.ay=0
else{k=m.y
k===$&&B.b()
k=D.c.aK(k-o,16)
m.ay=k
j=m.Q
j.toString
j=D.c.aK(j-o,16)
m.ch=j
if(k<0)m.ay=0
if(j<0)m.ch=0}k=m.as
k.toString
k=D.c.aK(k+15+o,16)
m.cx=k
j=m.z
j===$&&B.b()
j=D.c.aK(j+15+o,16)
m.CW=j
u=m.at
u.toString
if(j>u)m.CW=u
j=m.ax
j.toString
if(k>j)m.cx=j
n=u+1
x=J.jG(n,y.bQ)
for(v=0;v<n;++v)x[v]=new A.aKf()
m.k3=x
k=m.at
k.toString
x=J.jG(k,y.bl)
for(v=0;v<k;++v){j=new Int16Array(384)
x[v]=new A.aKg(j,new Uint8Array(16))}m.bj=x
k=m.at
k.toString
m.k4=B.c3(k,l,!1,y.B)
m.bt9()
A.dGc()
m.e=new A.c2m()
return!0},
bs1(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
t=j.bj
t===$&&B.b()
p=t[u]
if(w.b){u=j.c
u===$&&B.b()
u=u.iU(j.fr.a[0])
t=j.c
o=j.fr
j.k1=u===0?t.iU(o.a[1]):2+t.iU(o.a[2])}u=j.fx
u===$&&B.b()
if(u){u=j.c
u===$&&B.b()
t=j.fy
t===$&&B.b()
n=u.iU(t)!==0}else n=!1
j.bs2()
if(!n)n=j.bs7(q,s)
else{r.a=q.a=0
u=p.b
u===$&&B.b()
if(!u)r.b=q.b=0
p.f=p.e=0}u=j.bs
u.toString
if(u>0){u=j.k4
u===$&&B.b()
t=j.y1
o=j.C
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
D.H.mB(x,0,4,0)
j.y1=0
j.buf()
u=j.bs
u.toString
k=!1
if(u>0){u=j.y2
t=j.ch
t===$&&B.b()
if(u>=t){t=j.cx
t.toString
t=u<=t
k=t}}if(!j.bbb(k))return!1
u=++j.y2}return!0},
buf(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.y2,a5=a2.ok
a5===$&&B.b()
x=A.de(a5,!1,a3,40)
w=A.de(a2.ok,!1,a3,584)
v=A.de(a2.ok,!1,a3,600)
a5=a4>0
u=0
while(!0){t=a2.at
t.toString
if(!(u<t))break
t=a2.bj
t===$&&B.b()
s=t[u]
if(u>0){for(r=-1;r<16;++r){t=r*32
x.tk(t-4,4,x,t+12)}for(r=-1;r<8;++r){t=r*32
q=t-4
t+=4
w.tk(q,4,w,t)
v.tk(q,4,v,t)}}else{for(r=0;r<16;++r)J.bZ(x.a,x.d+(r*32-1),129)
for(r=0;r<8;++r){t=r*32-1
J.bZ(w.a,w.d+t,129)
J.bZ(v.a,v.d+t,129)}if(a5){J.bZ(v.a,v.d+-33,129)
J.bZ(w.a,w.d+-33,129)
J.bZ(x.a,x.d+-33,129)}}t=a2.k2
t===$&&B.b()
p=t[u]
o=s.a
n=s.e
if(a5){x.AZ(-32,16,p.a)
w.AZ(-32,8,p.b)
v.AZ(-32,8,p.c)}else if(u===0){t=x.a
q=x.d+-33
J.vg(t,q,q+21,127)
q=w.a
t=w.d+-33
J.vg(q,t,t+9,127)
t=v.a
q=v.d+-33
J.vg(t,q,q+9,127)}t=s.b
t===$&&B.b()
if(t){m=A.ct(x,a3,-16)
l=m.T1()
if(a5){t=a2.at
t.toString
if(u>=t-1){t=p.a[15]
q=m.a
k=m.d
J.vg(q,k,k+4,t)}else m.AZ(0,4,a2.k2[u+1].a)}j=l[0]
l.$flags&2&&B.K(l)
l[96]=j
l[64]=j
l[32]=j
for(t=s.c,i=0;i<16;++i,n=n<<2>>>0){h=A.ct(x,a3,C.Xz[i])
C.aMF[t[i]].$1(h)
n.toString
q=i*16
a2.arj(n,new A.nn(o,q,Math.min(384,384),q,!1),h)}}else{t=A.dby(u,a4,s.c[0])
t.toString
C.aRp[t].$1(x)
if(n!==0)for(i=0;i<16;++i,n=n<<2>>>0){h=A.ct(x,a3,C.Xz[i])
n.toString
t=i*16
a2.arj(n,new A.nn(o,t,Math.min(384,384),t,!1),h)}}t=s.f
t===$&&B.b()
q=A.dby(u,a4,s.d)
q.toString
C.SQ[q].$1(w)
C.SQ[q].$1(v)
q=Math.min(384,384)
g=new A.nn(o,256,q,256,!1)
if((t&255)!==0){k=a2.e
if((t&170)!==0){k===$&&B.b()
k.wt(g,w)
k.wt(A.ct(g,a3,16),A.ct(w,a3,4))
f=A.ct(g,a3,32)
e=A.ct(w,a3,128)
k.wt(f,e)
k.wt(A.ct(f,a3,16),A.ct(e,a3,4))}else{k===$&&B.b()
k.aNm(g,w)}}d=new A.nn(o,320,q,320,!1)
t=t>>>8
if((t&255)!==0){q=a2.e
if((t&170)!==0){q===$&&B.b()
q.wt(d,v)
q.wt(A.ct(d,a3,16),A.ct(v,a3,4))
t=A.ct(d,a3,32)
k=A.ct(v,a3,128)
q.wt(t,k)
q.wt(A.ct(t,a3,16),A.ct(k,a3,4))}else{q===$&&B.b()
q.aNm(d,v)}}t=a2.ax
t.toString
if(a4<t-1){D.H.ej(p.a,0,16,x.ik(),480)
D.H.ej(p.b,0,8,w.ik(),224)
D.H.ej(p.c,0,8,v.ik(),224)}a0=u*16
a1=u*8
for(r=0;r<16;++r){t=a2.p4
t.toString
q=a2.p1
q===$&&B.b()
q.tk(a0+r*t,16,x,r*32)}for(r=0;r<8;++r){t=a2.R8
t.toString
q=a2.p2
q===$&&B.b()
k=r*32
q.tk(a1+r*t,8,w,k)
t=a2.R8
t.toString
q=a2.p3
q===$&&B.b()
q.tk(a1+r*t,8,v,k)}++u}},
arj(d,e,f){var x,w,v,u,t,s
switch(d>>>30){case 3:x=this.e
x===$&&B.b()
x.L2(0,e,f,!1)
break
case 2:this.e===$&&B.b()
w=J.v(e.a,e.d)+4
v=D.c.lD(D.c.Z(J.v(e.a,e.d+4)*35468,16),32)
u=D.c.lD(D.c.Z(J.v(e.a,e.d+4)*85627,16),32)
t=D.c.lD(D.c.Z(J.v(e.a,e.d+1)*35468,16),32)
s=D.c.lD(D.c.Z(J.v(e.a,e.d+1)*85627,16),32)
A.c2o(f,0,w+u,s,t)
A.c2o(f,1,w+v,s,t)
A.c2o(f,2,w-v,s,t)
A.c2o(f,3,w-u,s,t)
break
case 1:x=this.e
x===$&&B.b()
x.T2(e,f)
break
default:break}},
b9j(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.p4,j=m.k4
j===$&&B.b()
j=j[d]
j.toString
x=m.p1
x===$&&B.b()
w=A.ct(x,l,d*16)
v=j.b
u=j.a
if(u===0)return
if(m.bs===1){if(d>0){x=m.e
x===$&&B.b()
k.toString
x.am6(w,k,u+4)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.aUw(w,k,u)}if(e>0){x=m.e
x===$&&B.b()
k.toString
x.am7(w,k,u+4)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.aUz(w,k,u)}}else{t=m.R8
x=m.p2
x===$&&B.b()
s=d*8
r=A.ct(x,l,s)
x=m.p3
x===$&&B.b()
q=A.ct(x,l,s)
p=j.d
if(d>0){x=m.e
x===$&&B.b()
k.toString
s=u+4
x.GI(w,1,k,16,s,v,p)
t.toString
x.GI(r,1,t,8,s,v,p)
x.GI(q,1,t,8,s,v,p)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.bNu(w,k,u,v,p)
t.toString
o=A.ct(r,l,4)
n=A.ct(q,l,4)
x.GH(o,1,t,8,u,v,p)
x.GH(n,1,t,8,u,v,p)}if(e>0){x=m.e
x===$&&B.b()
k.toString
s=u+4
x.GI(w,k,1,16,s,v,p)
t.toString
x.GI(r,t,1,8,s,v,p)
x.GI(q,t,1,8,s,v,p)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.bZY(w,k,u,v,p)
t.toString
x=4*t
o=A.ct(r,l,x)
n=A.ct(q,l,x)
j.GH(o,t,1,8,u,v,p)
j.GH(n,t,1,8,u,v,p)}}},
baV(){var x,w=this,v=w.ay
v===$&&B.b()
x=v
while(!0){v=w.CW
v.toString
if(!(x<v))break
w.b9j(x,w.y2);++x}},
bbb(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.bs
e.toString
x=C.EN[e]
e=g.p4
e.toString
w=x*e
e=g.R8
e.toString
v=(x/2|0)*e
e=g.p1
e===$&&B.b()
u=-w
t=A.ct(e,f,u)
e=g.p2
e===$&&B.b()
s=-v
r=A.ct(e,f,s)
e=g.p3
e===$&&B.b()
q=A.ct(e,f,s)
p=g.y2
e=g.cx
e.toString
o=p*16
n=(p+1)*16
if(d)g.baV()
if(p!==0){o-=x
g.to=A.ct(t,f,0)
g.x1=A.ct(r,f,0)
g.x2=A.ct(q,f,0)}else{g.to=A.ct(g.p1,f,0)
g.x1=A.ct(g.p2,f,0)
g.x2=A.ct(g.p3,f,0)}e=p<e-1
if(e)n-=x
m=g.as
m.toString
if(n>m)n=m
g.xr=null
if(g.Y!=null&&o<n){m=g.xr=g.b7X(o,n-o)
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
j*=D.c.Z(k,1)
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
g.btA(0,o-l,m-h,n-o)}if(e){e=g.p1
m=g.p4
m.toString
e.tk(u,w,t,16*m)
m=g.p2
u=g.R8
u.toString
m.tk(s,v,r,8*u)
u=g.p3
m=g.R8
m.toString
u.tk(s,v,q,8*m)}return!0},
btA(d,e,f,g){if(f<=0||g<=0)return!1
this.ba4(e,f,g)
this.ba3(e,f,g)
return!0},
a7i(d){var x
if((d&-4194304)>>>0===0)x=D.c.Z(d,14)
else x=d<0?0:255
return x},
ZK(d,e,f,g){var x=19077*d
g.m(0,0,this.a7i(x+26149*f+-3644112))
g.m(0,1,this.a7i(x-6419*e-13320*f+2229552))
g.m(0,2,this.a7i(x+33050*e+-4527440))},
Zs(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=new A.c2y(),a0=b3-1,a1=D.c.Z(a0,1),a2=d.$2(J.v(a7.a,a7.d),J.v(a8.a,a8.d)),a3=d.$2(J.v(a9.a,a9.d),J.v(b0.a,b0.d)),a4=D.c.Z(3*a2+a3+131074,2)
f.ZK(J.v(a5.a,a5.d),a4&255,a4>>>16,b1)
b1.m(0,3,255)
x=a6!=null
if(x){a4=D.c.Z(3*a3+a2+131074,2)
w=J.v(a6.a,a6.d)
b2.toString
f.ZK(w,a4&255,a4>>>16,b2)
b2.m(0,3,255)}for(v=1;v<=a1;++v,a3=t,a2=u){u=d.$2(J.v(a7.a,a7.d+v),J.v(a8.a,a8.d+v))
t=d.$2(J.v(a9.a,a9.d+v),J.v(b0.a,b0.d+v))
s=a2+u+a3+t+524296
r=D.c.Z(s+2*(u+a3),3)
q=D.c.Z(s+2*(a2+t),3)
a4=D.c.Z(r+a2,1)
p=D.c.Z(q+u,1)
w=2*v
o=w-1
n=J.v(a5.a,a5.d+o)
m=a4&255
l=a4>>>16
k=o*4
j=A.ct(b1,e,k)
n=19077*n
i=n+26149*l+-3644112
if((i&-4194304)>>>0===0)h=D.c.Z(i,14)
else h=i<0?0:255
J.bZ(j.a,j.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.Z(l,14)
else h=l<0?0:255
J.bZ(j.a,j.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.Z(n,14)
else h=n<0?0:255
J.bZ(j.a,j.d+2,h)
J.bZ(j.a,j.d+3,255)
n=J.v(a5.a,a5.d+w)
m=p&255
l=p>>>16
j=w*4
i=A.ct(b1,e,j)
n=19077*n
g=n+26149*l+-3644112
if((g&-4194304)>>>0===0)h=D.c.Z(g,14)
else h=g<0?0:255
J.bZ(i.a,i.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.Z(l,14)
else h=l<0?0:255
J.bZ(i.a,i.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.Z(n,14)
else h=n<0?0:255
J.bZ(i.a,i.d+2,h)
J.bZ(i.a,i.d+3,255)
if(x){a4=D.c.Z(q+a3,1)
p=D.c.Z(r+t,1)
o=J.v(a6.a,a6.d+o)
n=a4&255
m=a4>>>16
b2.toString
k=A.ct(b2,e,k)
o=19077*o
l=o+26149*m+-3644112
if((l&-4194304)>>>0===0)h=D.c.Z(l,14)
else h=l<0?0:255
J.bZ(k.a,k.d,h)
m=o-6419*n-13320*m+2229552
if((m&-4194304)>>>0===0)h=D.c.Z(m,14)
else h=m<0?0:255
J.bZ(k.a,k.d+1,h)
o=o+33050*n+-4527440
if((o&-4194304)>>>0===0)h=D.c.Z(o,14)
else h=o<0?0:255
J.bZ(k.a,k.d+2,h)
J.bZ(k.a,k.d+3,255)
w=J.v(a6.a,a6.d+w)
o=p&255
n=p>>>16
j=A.ct(b2,e,j)
w=19077*w
m=w+26149*n+-3644112
if((m&-4194304)>>>0===0)h=D.c.Z(m,14)
else h=m<0?0:255
J.bZ(j.a,j.d,h)
n=w-6419*o-13320*n+2229552
if((n&-4194304)>>>0===0)h=D.c.Z(n,14)
else h=n<0?0:255
J.bZ(j.a,j.d+1,h)
w=w+33050*o+-4527440
if((w&-4194304)>>>0===0)h=D.c.Z(w,14)
else h=w<0?0:255
J.bZ(j.a,j.d+2,h)
J.bZ(j.a,j.d+3,255)}}if((b3&1)===0){a4=D.c.Z(3*a2+a3+131074,2)
w=J.v(a5.a,a5.d+a0)
o=a0*4
n=A.ct(b1,e,o)
f.ZK(w,a4&255,a4>>>16,n)
n.m(0,3,255)
if(x){a4=D.c.Z(3*a3+a2+131074,2)
a0=J.v(a6.a,a6.d+a0)
b2.toString
o=A.ct(b2,e,o)
f.ZK(a0,a4&255,a4>>>16,o)
o.m(0,3,255)}}},
ba3(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.xr
if(o==null)return
x=A.ct(o,null,0)
if(d===0){w=f-1
v=d}else{v=d-1
x.d=x.d-p.b.a
w=f}o=p.Q
o.toString
u=p.as
if(o+d+f===u){u.toString
w=u-o-v}for(o=p.b,t=0;t<w;++t){for(u=t+v,s=0;s<e;++s){r=J.v(x.a,x.d+s)
q=p.d.a
q=q==null?null:q.er(s,u,null);(q==null?new A.h_():q).saU(0,r)}x.d=x.d+o.a}},
ba4(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=A.de(J.dx(l.d.gaq(0),0,null),!1,k,d*j.a*4),h=l.to
h===$&&B.b()
x=A.ct(h,k,0)
h=l.x1
h===$&&B.b()
w=A.ct(h,k,0)
h=l.x2
h===$&&B.b()
v=A.ct(h,k,0)
u=d+f
t=D.c.Z(e+1,1)
s=j.a*4
j=l.rx
j===$&&B.b()
r=A.ct(j,k,0)
j=l.ry
j===$&&B.b()
q=A.ct(j,k,0)
if(d===0){l.Zs(x,k,w,v,w,v,i,k,e)
p=f}else{j=l.RG
j===$&&B.b()
l.Zs(j,x,r,q,w,v,A.ct(i,k,-s),i,e)
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
l.Zs(A.ct(x,k,-n),x,r,q,w,v,A.ct(i,k,h),i,e)}j=x.d
h=l.p4
h.toString
x.d=j+h
j=l.Q
j.toString
h=l.as
h.toString
if(j+u<h){j=l.RG
j===$&&B.b()
j.AZ(0,e,x)
l.rx.AZ(0,t,w)
l.ry.AZ(0,t,v);--p}else if((u&1)===0)l.Zs(x,k,w,v,w,v,A.ct(i,k,s),k,e)
return p},
b7X(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.b,m=n.a,l=n.b
if(d<0||e<=0||d+e>l)return null
if(d===0){n=m*l
o.ah=new Uint8Array(n)
x=o.Y
w=new A.c3m(x,m,l)
v=x.cE()
w.d=v&3
w.e=D.c.Z(v,2)&3
w.f=D.c.Z(v,4)&3
w.r=D.c.Z(v,6)&3
if(w.geP()){u=w.d
if(u===0){if(x.c-x.d<n)w.r=1}else if(u===1){t=new A.aKI(C.qT,B.a([],y.J))
t.a=m
t.b=l
n=B.a([],y.A)
u=B.a([],y.F)
s=new Uint32Array(2)
r=new A.aKd(x,s)
s=r.d=J.dx(D.bM.gaq(s),0,null)
q=x.cE()
s.$flags&2&&B.K(s)
s[0]=q
s[1]=x.cE()
s[2]=x.cE()
s[3]=x.cE()
s[4]=x.cE()
s[5]=x.cE()
s[6]=x.cE()
s[7]=x.cE()
u=new A.ay5(r,t,n,u)
u.db=m
w.x=u
u.MV(m,l,!0)
n=w.x
x=n.ax
if(x.length===1&&x[0].a===C.ag4&&n.blK()){w.y=!0
n=w.x
x=n.c
p=x.a*x.b
n.cx=0
x=D.c.au(p,4)
x=new Uint8Array(p+(4-x))
n.CW=x
n.ch=J.pV(D.H.gaq(x),0,null)}else{w.y=!1
w.x.aos()}}else w.r=1}o.X=w}n=o.X
n===$&&B.b()
if(!n.w){x=o.ah
x===$&&B.b()
if(!n.Qd(0,d,e,x))return null}n=o.ah
n===$&&B.b()
return A.de(n,!1,null,d*m)},
bs7(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.fr.b,a3=a1.k1
a3===$&&B.b()
x=a1.dy[a3]
a3=a1.bj
a3===$&&B.b()
w=a3[a1.y1]
v=A.de(w.a,!1,null,0)
a3=a1.k3
a3===$&&B.b()
u=a3[0]
v.bSl(0,v.c-v.d,0)
a3=w.b
a3===$&&B.b()
if(!a3){t=A.de(new Int16Array(16),!1,null,0)
a3=a4.b
s=u.b
r=a1.a8k(a5,a2[1],a3+s,x.b,0,t)
a4.b=u.b=r>0?1:0
if(r>1)a1.bAH(t,v)
else{q=D.c.Z(J.v(t.a,t.d)+3,3)
for(p=0;p<256;p+=16)J.bZ(v.a,v.d+p,q)}o=a2[0]
n=1}else{o=a2[3]
n=0}m=a4.a&15
l=u.a&15
for(k=0,j=0;j<4;++j){i=l&1
for(h=0,g=0;g<4;++g){r=a1.a8k(a5,o,i+(m&1),x.a,n,v)
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
m=D.c.i4(a4.a,a3)
l=D.c.i4(u.a,a3)
for(h=0,j=0;j<2;++j){i=l&1
for(g=0;g<2;++g){r=a1.a8k(a5,a2[2],i+(m&1),x.c,0,v)
i=r>0?1:0
m=m>>>1|i<<3
a3=J.v(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=(h<<2|a3)>>>0
v.d+=16}m=m>>>2
l=l>>>1|i<<5}d=(d|D.c.ez(h,4*a0))>>>0
e=(e|D.c.ez(m<<4>>>0,a0))>>>0
f=(f|D.c.ez(l&240,a0))>>>0}a4.a=e
u.a=f
w.e=k
w.f=d
if((d&43690)===0)x.toString
return(k|d)>>>0===0},
bAH(d,e){var x,w,v,u,t,s,r,q,p,o,n=new Int32Array(16)
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
u=D.c.Z(v+s,3)
J.bZ(e.a,e.d+p,u)
u=D.c.Z(q+r,3)
J.bZ(e.a,e.d+(p+16),u)
u=D.c.Z(v-s,3)
J.bZ(e.a,e.d+(p+32),u)
u=D.c.Z(q-r,3)
J.bZ(e.a,e.d+(p+48),u)
p+=64}},
bcC(d,e){var x,w,v,u,t,s
if(d.iU(e[3])===0)x=d.iU(e[4])===0?2:3+d.iU(e[5])
else if(d.iU(e[6])===0)x=d.iU(e[7])===0?5+d.iU(159):7+2*d.iU(165)+d.iU(145)
else{w=d.iU(e[8])
v=2*w+d.iU(e[9+w])
u=C.aHc[v]
t=u.length
for(x=0,s=0;s<t;++s)x+=x+d.iU(u[s])
x+=3+D.c.ez(8,v)}return x},
a8k(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=e[h].a[f]
for(;h<16;h=x){if(d.iU(p[0])===0)return h
for(;d.iU(p[1])===0;){++h
p=e[C.VZ[h]].a[0]
if(h===16)return 16}x=h+1
w=e[C.VZ[x]].a
if(d.iU(p[2])===0){p=w[1]
v=1}else{v=this.bcC(d,p)
p=w[2]}u=C.aLy[h]
t=d.b
t===$&&B.b()
s=d.aoN(D.c.Z(t,1))
t=d.b
r=C.V4[t]
d.b=C.V2[t]
t=d.d
t===$&&B.b()
d.d=t-r
t=s!==0?-v:v
q=g[h>0?1:0]
J.bZ(i.a,i.d+u,t*q)}return 16},
bs2(){var x,w,v,u,t,s,r,q,p,o=this,n=o.y1,m=4*n,l=o.go,k=o.id,j=o.bj
j===$&&B.b()
x=j[n]
n=o.c
n===$&&B.b()
n=n.iU(145)===0
x.b=n
if(!n){if(o.c.iU(156)!==0)w=o.c.iU(128)!==0?1:3
else w=o.c.iU(163)!==0?2:0
n=x.c
n.$flags&2&&B.K(n)
n[0]=w
l.toString
D.H.mB(l,m,m+4,w)
D.H.mB(k,0,4,w)}else{v=x.c
for(n=k.$flags|0,u=0,t=0;t<4;++t,u=p){w=k[t]
for(s=0;s<4;++s){j=m+s
r=C.aLL[l[j]][w]
q=C.TT[o.c.iU(r[0])]
for(;q>0;)q=C.TT[2*q+o.c.iU(r[q])]
w=-q
l.$flags&2&&B.K(l)
l[j]=w}p=u+4
l.toString
D.H.ej(v,u,p,l,m)
n&2&&B.K(k)
k[t]=w}}if(o.c.iU(142)===0)n=0
else if(o.c.iU(114)===0)n=2
else n=o.c.iU(183)!==0?1:3
x.d=n}}
A.acU.prototype={
dK(d){var x,w
for(x=0;w=d-1,d>0;d=w)x=(x|D.c.f9(this.iU(128),w))>>>0
return x},
Lx(d){var x=this.dK(d)
return this.dK(1)===1?-x:x},
iU(d){var x,w=this,v=w.b
v===$&&B.b()
x=w.aoN(D.c.Z(v*d,8))
if(w.b<=126)w.bxy()
return x},
aoN(d){var x,w,v,u,t,s=this,r=s.d
r===$&&B.b()
if(r<0){x=s.a
w=x.c
v=x.d
if(w-v>=1){u=x.cE()
r=s.c
r===$&&B.b()
s.c=(u|r<<8)>>>0
r=s.d+8
s.d=r
t=r}else{if(v<w){r=x.cE()
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
if(D.c.oJ(r,t)>d){x=s.b
x===$&&B.b()
w=d+1
s.b=x-w
s.c=r-D.c.f9(w,t)
return 1}else{s.b=d
return 0}},
bxy(){var x,w=this,v=w.b
v===$&&B.b()
x=C.V4[v]
w.b=C.V2[v]
v=w.d
v===$&&B.b()
w.d=v-x}}
A.c2m.prototype={
am7(d,e,f){var x,w=A.ct(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x
if(this.aw0(w,e,f))this.W3(w,e)}},
am6(d,e,f){var x,w=A.ct(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x*e
if(this.aw0(w,1,f))this.W3(w,1)}},
aUz(d,e,f){var x,w,v=A.ct(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.am7(v,e,f)}},
aUw(d,e,f){var x,w=A.ct(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.am6(w,e,f)}},
bZY(d,e,f,g,h){var x,w,v=A.ct(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.GH(v,e,1,16,f,g,h)}},
bNu(d,e,f,g,h){var x,w=A.ct(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.GH(w,1,e,16,f,g,h)}},
GI(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=A.ct(d,null,0)
for(x=-3*e,w=-2*e,v=-e,u=2*e;t=g-1,g>0;g=t){if(this.aw1(h,e,a0,a1))if(this.aup(h,e,a2))this.W3(h,e)
else{s=J.v(h.a,h.d+x)
r=J.v(h.a,h.d+w)
q=J.v(h.a,h.d+v)
p=J.v(h.a,h.d)
o=J.v(h.a,h.d+e)
n=J.v(h.a,h.d+u)
m=$.cTL()
l=m[1020+3*(p-q)+m[1020+r-o]]
m=D.c.Z(27*l+63,7)
k=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.Z(18*l+63,7)
j=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.Z(9*l+63,7)
i=(m&2147483647)-((m&2147483648)>>>0)
m=$.r6()[255+s+i]
J.bZ(h.a,h.d+x,m)
m=$.r6()[255+r+j]
J.bZ(h.a,h.d+w,m)
m=$.r6()[255+q+k]
J.bZ(h.a,h.d+v,m)
m=$.r6()[255+p-k]
J.bZ(h.a,h.d,m)
m=$.r6()[255+o-j]
J.bZ(h.a,h.d+e,m)
m=$.r6()[255+n-i]
J.bZ(h.a,h.d+u,m)}h.d+=f}},
GH(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=A.ct(d,null,0)
for(x=-2*e,w=-e;v=g-1,g>0;g=v){if(this.aw1(k,e,h,i))if(this.aup(k,e,j))this.W3(k,e)
else{u=J.v(k.a,k.d+x)
t=J.v(k.a,k.d+w)
s=J.v(k.a,k.d)
r=J.v(k.a,k.d+e)
q=3*(s-t)
p=$.b2P()
o=D.c.Z(q+4,3)
n=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.Z(q+3,3)
m=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.Z(n+1,1)
l=(o&2147483647)-((o&2147483648)>>>0)
o=$.r6()[255+u+l]
J.bZ(k.a,k.d+x,o)
o=$.r6()[255+t+m]
J.bZ(k.a,k.d+w,o)
o=$.r6()[255+s-n]
J.bZ(k.a,k.d,o)
o=$.r6()[255+r-l]
J.bZ(k.a,k.d+e,o)}k.d+=f}},
W3(d,e){var x=J.v(d.a,d.d+-2*e),w=-e,v=J.v(d.a,d.d+w),u=J.v(d.a,d.d),t=J.v(d.a,d.d+e),s=3*(u-v)+$.cTL()[1020+x-t],r=$.b2P()[112+D.c.lD(D.c.Z(s+4,3),32)],q=$.b2P()[112+D.c.lD(D.c.Z(s+3,3),32)]
d.m(0,w,$.r6()[255+v+q])
d.m(0,0,$.r6()[255+u-r])},
aup(d,e,f){var x=J.v(d.a,d.d+-2*e),w=J.v(d.a,d.d+-e),v=J.v(d.a,d.d),u=J.v(d.a,d.d+e),t=$.b2O()
return t[255+x-w]>f||t[255+u-v]>f},
aw0(d,e,f){var x=J.v(d.a,d.d+-2*e),w=J.v(d.a,d.d+-e),v=J.v(d.a,d.d),u=J.v(d.a,d.d+e)
return 2*$.b2O()[255+w-v]+$.cTK()[255+x-u]<=f},
aw1(d,e,f,g){var x=J.v(d.a,d.d+-4*e),w=J.v(d.a,d.d+-3*e),v=J.v(d.a,d.d+-2*e),u=J.v(d.a,d.d+-e),t=J.v(d.a,d.d),s=J.v(d.a,d.d+e),r=J.v(d.a,d.d+2*e),q=J.v(d.a,d.d+3*e),p=$.b2O(),o=255+v
if(2*p[255+u-t]+$.cTK()[o-s]>f)return!1
return p[255+x-w]<=g&&p[255+w-v]<=g&&p[o-u]<=g&&p[255+q-r]<=g&&p[255+r-s]<=g&&p[255+s-t]<=g},
wt(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=new Int32Array(16)
for(x=0,w=0,v=0;v<4;++v){u=x+8
t=J.v(d.a,d.d+x)+J.v(d.a,d.d+u)
s=J.v(d.a,d.d+x)-J.v(d.a,d.d+u)
u=x+4
r=D.c.Z(J.v(d.a,d.d+u)*35468,16)
q=x+12
p=D.c.Z(J.v(d.a,d.d+q)*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.c.Z(J.v(d.a,d.d+u)*85627,16)
q=D.c.Z(J.v(d.a,d.d+q)*35468,16)
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
r=D.c.Z(u*35468,16)
q=j[w+12]
p=D.c.Z(q*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.c.Z(u*85627,16)
q=D.c.Z(q*35468,16)
n=(u&2147483647)-((u&2147483648)>>>0)+((q&2147483647)-((q&2147483648)>>>0))
A.Hh(e,l,0,0,t+n)
A.Hh(e,l,1,0,s+o)
A.Hh(e,l,2,0,s-o)
A.Hh(e,l,3,0,t-n);++w
l+=32}},
L2(d,e,f,g){this.wt(e,f)
if(g)this.wt(A.ct(e,null,16),A.ct(f,null,4))},
T2(d,e){var x,w,v=J.v(d.a,d.d)+4
for(x=0;x<4;++x)for(w=0;w<4;++w)A.Hh(e,0,w,x,v)},
aNm(d,e){var x=this,w=null
if(J.v(d.a,d.d)!==0)x.T2(d,e)
if(J.v(d.a,d.d+16)!==0)x.T2(A.ct(d,w,16),A.ct(e,w,4))
if(J.v(d.a,d.d+32)!==0)x.T2(A.ct(d,w,32),A.ct(e,w,128))
if(J.v(d.a,d.d+48)!==0)x.T2(A.ct(d,w,48),A.ct(e,w,132))}}
A.c2r.prototype={}
A.c2v.prototype={}
A.c2x.prototype={}
A.acT.prototype={}
A.c2w.prototype={}
A.c2n.prototype={}
A.Oa.prototype={}
A.aKf.prototype={}
A.aKh.prototype={}
A.aKg.prototype={}
A.aKi.prototype={}
A.acV.prototype={
Qe(){var x,w=this.b
if(w.jM(8)!==47)return!1
x=this.c
x.f=C.AH
x.a=w.jM(14)+1
x.b=w.jM(14)+1
x.d=w.jM(1)!==0
if(w.jM(3)!==0)return!1
return!0},
p5(d){var x,w,v,u,t,s=this,r=null
s.e=0
if(!s.Qe())return r
x=s.c
s.MV(x.a,x.b,!0)
s.aos()
w=x.a
s.d=A.iQ(r,r,C.aj,0,C.bG,x.b,r,0,4,r,C.aj,w,!1)
w=s.ch
w.toString
v=x.a
u=x.b
if(!s.a7E(w,v,u,u,s.gbti()))return r
x=x.w
if(x.length!==0){t=A.de(new B.fj(x),!1,r,0)
x=s.d
x.toString
x.e=A.d4E(t)}return s.d},
aos(){var x,w=this,v=w.c,u=v.a
v=u*v.b+u
x=new Uint32Array(v+u*16)
w.ch=x
w.CW=J.dx(D.bM.gaq(x),0,null)
w.cx=v
return!0},
bu5(d){var x,w,v,u=this,t=u.b,s=t.jM(2),r=u.ay,q=D.c.ez(1,s)
if((r&q)>>>0!==0)return!1
u.ay=(r|q)>>>0
x=new A.aKe(C.ag3)
u.ax.push(x)
r=C.aQO[s]
x.a=r
x.b=d[0]
x.c=d[1]
switch(r.a){case 0:case 1:t=t.jM(3)+2
x.e=t
x.d=u.MV(A.Hi(x.b,t),A.Hi(x.c,x.e),!1)
break
case 3:w=t.jM(8)+1
if(w>16)v=0
else if(w>4)v=1
else{t=w>2?2:3
v=t}d[0]=A.Hi(x.b,v)
x.e=v
x.d=u.MV(w,1,!1)
u.bay(w,x)
break
case 2:break}return!0},
MV(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(f)for(x=p.b,w=y.t,v=e,u=d;x.jM(1)!==0;){t=B.a([u,v],w)
if(!p.bu5(t))throw B.p(A.co("Invalid Transform"))
u=t[0]
v=t[1]}else{v=e
u=d}x=p.b
if(x.jM(1)!==0){s=x.jM(4)
if(!(s>=1&&s<=11))throw B.p(A.co("Invalid Color Cache"))}else s=0
if(!p.btU(u,v,s,f))throw B.p(A.co("Invalid Huffman Codes"))
if(s>0){x=D.c.ez(1,s)
p.r=x
p.w=new A.c2s(new Uint32Array(x),32-s)}else p.r=0
x=p.c
x.a=u
x.b=v
r=p.y
p.z=A.Hi(u,r)
p.x=r===0?4294967295:D.c.ez(1,r)-1
if(f){p.e=0
return null}q=new Uint32Array(u*v)
if(!p.a7E(q,u,v,v,null))throw B.p(A.co("Failed to decode image data."))
p.e=0
return q},
a7E(a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=a0.e,a2=D.c.hR(a1,a9),a3=D.c.au(a1,a9),a4=a0.asQ(a3,a2),a5=a0.e,a6=a9*b0,a7=a9*b1
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
if((a3&v)>>>0===0){p=a0.Nl(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(u.a>=32)u.D7()
r=a4.a
o=r[0].Bc(u)
n=0
if(o<256){m=r[1].Bc(u)
if(u.a>=32)u.D7()
l=A.dge(r[2].Bc(u),o,m,r[3].Bc(u))
a1&2&&B.K(a8)
a8[a5]=l;++a5;++a3
if(a3>=a9){++a2
if(D.c.au(a2,16)===0&&t)b2.$1(a2)
if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.c.hs(j*506832829>>>0,r)
k&2&&B.K(q)
q[i]=j;++s}a3=n}}else if(o<280){h=a0.WA(o-256)
g=r[4].Bc(u)
if(u.a>=32)u.D7()
f=a0.ax8(a9,a0.WA(g))
if(a5<f||a6-a5<h)return!1
else{e=a5-f
for(d=0;d<h;++d){r=a8[e+d]
a1&2&&B.K(a8)
a8[a5+d]=r}a5+=h}a3+=h
for(;a3>=a9;){a3-=a9;++a2
if(D.c.au(a2,16)===0&&t)b2.$1(a2)}if(a5<a7){if((a3&v)>>>0!==0){p=a0.Nl(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.c.hs(j*506832829>>>0,r)
k&2&&B.K(q)
q[i]=j;++s}}}else if(o<x){for(;s<a5;){r=a8[s]
i=D.c.hs(r*506832829>>>0,w.b)
q=w.a
q.$flags&2&&B.K(q)
q[i]=r;++s}r=w.a
q=r[o-280]
a1&2&&B.K(a8)
a8[a5]=q;++a5;++a3
if(a3>=a9){++a2
if(D.c.au(a2,16)===0&&t)b2.$1(a2)
for(q=w.b,k=r.$flags|0;s<a5;){j=a8[s]
i=D.c.hs(j*506832829>>>0,q)
k&2&&B.K(r)
r[i]=j;++s}a3=n}}else return!1}if(t)b2.$1(a2)
if(r.d>=q&&u.a>=64&&a5<a6)return!1
a0.e=a5
return!0},
blK(){var x,w,v,u
if(this.r>0)return!1
for(x=this.as,w=this.at,v=0;v<x;++v){u=w[v].a
if(u[1].f>1)return!1
if(u[2].f>1)return!1
if(u[3].f>1)return!1}return!0},
baE(d){var x,w,v,u,t,s,r=this,q=r.f,p=d-q
if(p<=0)return
x=r.c
r.aoB(p,x.a*q)
w=x.a
v=w*p
u=w*r.f
x=r.ch
x.toString
q=r.cx
q.toString
t=A.de(x,!1,null,q)
for(s=0;s<v;++s){q=r.cy
q.toString
x=D.c.Z(J.v(t.a,t.d+s),8)
q.$flags&2&&B.K(q)
q[u+s]=x&255}r.f=d},
b7z(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=o.e,m=D.c.hR(n,d),l=D.c.au(n,d),k=o.asQ(l,m),j=o.e,i=d*e,h=d*f,g=o.x
n=o.b
while(!0){x=n.b
if(!(!(x.d>=x.c&&n.a>=64)&&j<h))break
if((l&g)>>>0===0){w=o.Nl(o.Q,o.z,o.y,l,m)
k=o.at[w]}if(n.a>=32)n.D7()
x=k.a
v=x[0].Bc(n)
if(v<256){x=o.CW
x===$&&B.b()
x.$flags&2&&B.K(x)
x[j]=v;++j;++l
if(l>=d){++m
if(D.c.au(m,16)===0)o.a83(m)
l=0}}else if(v<280){u=o.WA(v-256)
t=x[4].Bc(n)
if(n.a>=32)n.D7()
s=o.ax8(d,o.WA(t))
if(j>=s&&i-j>=u)for(x=o.CW,r=0;r<u;++r){x===$&&B.b()
q=j+r
p=x[q-s]
x.$flags&2&&B.K(x)
x[q]=p}else{o.e=j
return!0}j+=u
l+=u
for(;l>=d;){l-=d;++m
if(D.c.au(m,16)===0)o.a83(m)}if(j<h&&(l&g)>>>0!==0){w=o.Nl(o.Q,o.z,o.y,l,m)
k=o.at[w]}}else return!1}o.a83(m)
o.e=j
return!0},
a83(d){var x,w,v,u=this,t=u.f,s=d-t,r=u.CW
r===$&&B.b()
x=A.de(r,!1,null,u.c.a*t)
if(s>0){w=u.f
t=u.cy
t.toString
r=u.db
r.toString
v=A.de(t,!1,null,r*w)
u.ax[0].bGV(w,w+s,x,v)}u.f=d},
btj(d){var x,w,v,u,t,s=this,r=s.c,q=r.a,p=s.f,o=d-p
if(o<=0)return
s.aoB(o,q*p)
q=s.cx
q.toString
x=s.f
w=q
v=0
for(;v<o;++v,++x)for(u=0;u<r.a;++u,++w){t=s.ch[w]
q=s.d.a
if(q!=null)q.kU(u,x,t>>>16&255,t>>>8&255,t&255,t>>>24&255)}s.f=d},
aoB(d,e){var x,w,v,u=this,t=u.ax,s=t.length,r=u.c.a,q=u.f,p=q+d,o=u.cx
o.toString
x=u.ch
x.toString
D.bM.ej(x,o,o+r*d,x,e)
for(w=e;v=s-1,s>0;w=o,s=v){r=t[v]
x=u.ch
x.toString
r.bQ8(q,p,x,w,x,o)}},
btU(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=1
if(g&&l.b.jM(1)!==0){x=l.b.jM(3)+2
w=A.Hi(d,x)
v=A.Hi(e,x)
u=w*v
t=l.MV(w,v,!1)
l.y=x
for(s=0;s<u;++s){r=t[s]>>>8&65535
t.$flags&2&&B.K(t)
t[s]=r
if(r>=k)k=r+1}}else t=null
q=J.jG(k,y.R)
for(p=0;p<k;++p)q[p]=A.dw3()
for(o=f>0,s=0;s<k;++s)for(n=0;n<5;++n){m=C.aIn[n]
if(n===0&&o)m+=D.c.ez(1,f)
if(!l.btS(m,q[s].a[n]))return!1}l.Q=t
l.as=k
l.at=q
return!0},
btS(d,e){var x,w,v,u,t,s,r,q,p,o=this.b
if(o.jM(1)!==0){x=y.t
w=B.a([0,0],x)
v=B.a([0,0],x)
u=B.a([0,0],x)
t=o.jM(1)+1
w[0]=o.jM(o.jM(1)===0?1:8)
v[0]=0
x=t-1
u[0]=x
if(t===2){w[1]=o.jM(8)
v[1]=1
u[1]=x}s=e.bFO(u,v,w,d,t)}else{r=new Int32Array(19)
q=o.jM(4)+4
if(q>19)return!1
u=new Int32Array(d)
for(p=0;p<q;++p)r[C.aKV[p]]=o.jM(3)
s=this.btT(r,d,u)
if(s)s=e.aE5(u,d)}return s},
btT(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.d5E()
if(!j.aE5(d,19))return!1
x=this.b
if(x.jM(1)!==0){w=2+x.jM(2+2*x.jM(3))
if(w>e)return!1}else w=e
for(v=f.$flags|0,u=0,t=8;u<e;w=s){s=w-1
if(w===0)break
if(x.a>=32)x.D7()
r=j.Bc(x)
if(r<16){q=u+1
v&2&&B.K(f)
f[u]=r
if(r!==0)t=r
u=q}else{p=r-16
o=C.aEp[p]
n=C.aEL[p]
m=x.jM(o)+n
if(u+m>e)return!1
else{l=r===16?t:0
for(;k=m-1,m>0;m=k,u=q){q=u+1
v&2&&B.K(f)
f[u]=l}}}}return!0},
WA(d){var x
if(d<4)return d+1
x=D.c.Z(d-2,1)
return D.c.ez(2+(d&1),x)+this.b.jM(x)+1},
ax8(d,e){var x,w
if(e>120)return e-120
else{x=C.aIE[e-1]
w=(x>>>4)*d+(8-(x&15))
return w>=1?w:1}},
bay(d,e){var x,w,v,u,t,s,r=D.c.ez(1,D.c.i4(8,e.e)),q=new Uint32Array(r),p=e.d
p.toString
x=J.dx(D.bM.gaq(p),0,null)
w=J.dx(D.bM.gaq(q),0,null)
q[0]=e.d[0]
v=4*d
for(p=w.$flags|0,u=4;u<v;++u){t=x[u]
s=w[u-4]
p&2&&B.K(w)
w[u]=t+s&255}for(v=4*r;u<v;++u){p&2&&B.K(w)
w[u]=0}e.d=q
return!0},
Nl(d,e,f,g,h){if(f===0)return 0
d.toString
return d[e*D.c.Z(h,f)+D.c.Z(g,f)]},
asQ(d,e){var x=this,w=x.Nl(x.Q,x.z,x.y,d,e)
return x.at[w]}}
A.ay5.prototype={
bMD(d){return this.baE(d)}}
A.aKd.prototype={
aLy(){var x,w,v=this.a
if(v<32){x=this.c
w=D.c.hs(x[0],v)+((x[1]&C.FD[v])>>>0)*(C.FD[32-v]+1)}else{x=this.c
w=v===32?x[1]:D.c.hs(x[1],v-32)}return w},
jM(d){var x,w=this,v=w.b
if(!(v.d>=v.c&&w.a>=64)&&d<25){v=w.aLy()
x=C.FD[d]
w.a+=d
w.D7()
return(v&x)>>>0}else throw B.p(A.co("Not enough data in input."))},
D7(){var x,w,v,u=this,t=u.b,s=u.c,r=s.$flags|0,q=t.c
while(!0){if(!(u.a>=8&&t.d<q))break
x=J.v(t.a,t.d++)
w=s[0]
v=s[1]
r&2&&B.K(s)
s[0]=(w>>>8)+(v&255)*16777216
s[1]=v>>>8
s[1]=(s[1]|x*16777216)>>>0
u.a-=8}}}
A.c2s.prototype={}
A.Ob.prototype={
J(){return"VP8LImageTransformType."+this.b}}
A.aKe.prototype={
bQ8(d,e,f,g,h,i){var x,w,v,u,t=this,s=t.b
switch(t.a.a){case 2:t.bDX(h,i,i+(e-d)*s)
break
case 0:t.bW9(d,e,h,i)
if(e!==t.c){x=i-s
D.bM.ej(h,x,x+s,f,i+(e-d-1)*s)}break
case 1:t.bGW(d,e,h,i)
break
case 3:if(g===i&&t.e>0){w=e-d
v=w*A.Hi(s,t.e)
u=i+w*s-v
D.bM.ej(h,u,u+v,f,i)
t.aFa(d,e,f,u,h,i)}else t.aFa(d,e,f,g,h,i)
break}},
bGV(d,e,f,g){var x,w,v,u,t,s,r=this.e,q=D.c.i4(8,r),p=this.b,o=this.d
if(q<8){x=D.c.ez(1,r)-1
w=D.c.ez(1,q)-1
for(v=d;v<e;++v)for(u=0,t=0;t<p;++t){if((t&x)>>>0===0){u=J.v(f.a,f.d);++f.d}r=o[(u&w)>>>0]
J.bZ(g.a,g.d,r>>>8&255);++g.d
u=D.c.Z(u,q)}}else for(v=d;v<e;++v)for(t=0;t<p;++t){s=J.v(f.a,f.d);++f.d
r=o[s]
J.bZ(g.a,g.d,r>>>8&255);++g.d}},
aFa(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=this.e,o=D.c.i4(8,p),n=this.b,m=this.d
if(o<8){x=D.c.ez(1,p)-1
w=D.c.ez(1,o)-1
for(p=h.$flags|0,v=d;v<e;++v)for(u=0,t=0;t<n;++t,i=r){if((t&x)>>>0===0){s=g+1
u=f[g]>>>8&255
g=s}r=i+1
q=m[u&w]
p&2&&B.K(h)
h[i]=q
u=D.c.i4(u,o)}}else for(p=h.$flags|0,v=d;v<e;++v)for(t=0;t<n;++t,i=r,g=s){r=i+1
s=g+1
q=m[f[g]>>>8&255]
p&2&&B.K(h)
h[i]=q}},
bGW(a2,a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.b,e=g.e,d=D.c.ez(1,e)-1,a0=A.Hi(f,e),a1=D.c.Z(a2,g.e)*a0
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
o=$.oP()
o.$flags&2&&B.K(o)
o[0]=p
p=$.pT()
n=p[0]
o[0]=q
m=p[0]
l=$.b2R()
l.$flags&2&&B.K(l)
l[0]=n*m
k=$.cTN()
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
e&2&&B.K(a4)
a4[s]=(r&4278255360|j<<16|((r&255)+(i>>>5)>>>0)+(h>>>5)>>>0&255)>>>0}a5+=f;++x
if((x&d)>>>0===0)a1+=a0}},
bW9(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=this,n=o.b
if(d===0){A.c2t(f,g,4278190080)
for(x=1;x<n;++x){w=g+x
A.c2t(f,w,f[w-1])}g+=n;++d}w=o.e
v=D.c.ez(1,w)-1
u=A.Hi(n,w)
t=D.c.Z(d,o.e)*u
for(s=d;s<e;){A.c2t(f,g,f[g-n])
r=t+1
q=$.dbx[o.d[t]>>>8&15]
for(x=1;x<n;++x){if((x&v)>>>0===0){p=r+1
q=$.dbx[o.d[r]>>>8&15]
r=p}w=g+x
A.c2t(f,w,q.$3(f,f[w-1],w-n))}g+=n;++s
if((s&v)>>>0===0)t+=u}},
bDX(d,e,f){var x,w,v,u
for(x=d.$flags|0;e<f;e=u){w=d[e]
v=w>>>8&255
u=e+1
x&2&&B.K(d)
d[e]=(w&4278255360|(w&16711935)+(v<<16|v)&16711935)>>>0}}}
A.c3m.prototype={
geP(){var x=this,w=x.d
if(w>1||x.e>=4||x.f>1||x.r!==0)return!1
return!0},
Qd(d,e,f,g){var x,w,v,u,t,s,r=this
if(!r.geP())return!1
x=C.aRy[r.e]
if(r.d===0){w=r.b
v=e*w
u=r.a
D.H.ej(g,v,f*w,u.a,u.d-u.b+v)}else{w=e+f
u=r.x
u===$&&B.b()
u.cy=g
t=u.c
if(r.y)w=u.b7z(t.a,t.b,w)
else{s=u.ch
s.toString
u=u.a7E(s,t.a,t.b,w,u.gbMC())
w=u}if(!w)return!1}if(x!=null){w=r.b
x.$6(w,r.c,w,e,f,g)}if(r.f===1)if(!r.b8A(g,r.b,r.c,e,f))return!1
if(e+f===r.c)r.w=!0
return!0},
b8A(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
A.ada.prototype={
b1D(d,e){var x=this,w=d.cE()
x.r=0
x.f=(w&1)!==0
x.w=d.d-d.b
x.x=e-16}}
A.ay6.prototype={}
A.ax9.prototype={
acs(d){var x,w=this
if(d===0)return!1
x=(d<<1>>>0)-1
w.e=x
x=new Int32Array(x<<1>>>0)
w.d=x
x[1]=-1
w.f=1
D.H.mB(w.a,0,128,255)
return!0},
aE5(d,e){var x,w,v,u,t,s=this
for(x=0,w=0,v=0;v<e;++v)if(d[v]>0){++x
w=v}if(!s.acs(x))return!1
if(x===1){if(w<0||w>=e)return!1
return s.a6G(w,0,0)}u=new Int32Array(e)
if(!s.bkB(d,e,u))return!1
for(v=0;v<e;++v){t=d[v]
if(t>0)if(!s.a6G(v,u[v],t))return!1}return s.f===s.e},
bFO(d,e,f,g,h){var x,w,v,u=this
if(!u.acs(h))return!1
for(x=0;x<h;++x){w=e[x]
if(w!==-1){v=f[x]
if(v>=g)return u.f===u.e
if(!u.a6G(v,w,d[x]))return u.f===u.e}}return u.f===u.e},
Bc(d){var x,w,v=this,u=d.aLy(),t=d.a,s=u&127,r=v.a[s]
if(r<=7){d.a=t+r
return v.b[s]}x=v.c[s]
t+=7
u=u>>>7
do{w=v.d
w===$&&B.b()
x=x+w[(x<<1>>>0)+1]+(u&1)
u=u>>>1;++t}while(v.aw6(x))
d.a=t
return v.d[x<<1>>>0]},
a6G(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
if(f<=7){x=l.ayk(e,f)
for(w=D.c.f9(1,7-f),v=l.b,u=v.$flags|0,t=l.a,s=t.$flags|0,r=0;r<w;++r){q=(x|D.c.f9(r,f))>>>0
u&2&&B.K(v)
v[q]=d
s&2&&B.K(t)
t[q]=f}}else x=l.ayk(D.c.oJ(e,f-7),7)
for(w=l.c,v=w.$flags|0,p=7,o=0;n=f-1,f>0;f=n){u=l.e
if(o>=u)return!1
t=l.d
t===$&&B.b()
s=(o<<1>>>0)+1
m=t[s]
if(m<0){m=l.f
if(m===u)return!1
t.$flags&2&&B.K(t)
t[s]=m-o
l.f=m+2
t[(m<<1>>>0)+1]=-1
t[(m+1<<1>>>0)+1]=-1}else if(m===0)return!1
o+=t[s]+(D.c.oJ(e,n)&1);--p
if(p===0){v&2&&B.K(w)
w[x]=o}}if(l.boC(o))l.boD(o,0)
else if(l.aw6(o))return!1
w=l.d
w===$&&B.b()
w.$flags&2&&B.K(w)
w[o<<1>>>0]=d
return!0},
ayk(d,e){return D.c.hs((C.XJ[d&15]<<4|C.XJ[D.c.Z(d,4)])>>>0,8-e)},
boD(d,e){var x=this.d
x===$&&B.b()
x.$flags&2&&B.K(x)
x[(d<<1>>>0)+1]=e},
aw6(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]!==0},
boC(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]<0},
bkB(d,e,f){var x,w,v,u,t,s,r,q,p=new Int32Array(16),o=new Int32Array(16)
for(x=0,w=0;x<e;++x){v=d[x]
if(v>w)w=v}if(w>15)return!1
for(x=0;x<e;++x){u=d[x]
p[u]=p[u]+1}p[0]=0
o[0]=-1
for(t=1,s=0;t<=w;++t){s=s+p[t-1]<<1>>>0
o[t]=s}for(u=f.$flags|0,x=0;x<e;++x){r=d[x]
if(r>0){q=o[r]
o[r]=q+1
u&2&&B.K(f)
f[x]=q}else{u&2&&B.K(f)
f[x]=-1}}return!0}}
A.a3M.prototype={
h(d,e){return this.a[e]}}
A.WZ.prototype={
J(){return"WebPFormat."+this.b}}
A.aKI.prototype={}
A.ay7.prototype={}
A.c3n.prototype={
JR(d){var x=A.de(d,!1,null,0)
this.b=x
if(!this.asN(x))return!1
return!0},
pA(d){var x,w=this,v=null,u=A.de(d,!1,v,0)
w.b=u
if(!w.asN(u))return v
u=new A.ay7(C.qT,B.a([],y.J))
w.a=u
x=w.b
x.toString
if(!w.aCv(x,u))return v
u=w.a
switch(u.f.a){case 3:u.as=u.z.length
return u
case 2:x=w.b
x.toString
x.d=u.ay
if(!A.cYR(x,u).Qe())return v
u=w.a
u.as=u.z.length
return u
case 1:x=w.b
x.toString
x.d=u.ay
if(!A.cYP(x,u).Qe())return v
u=w.a
u.as=u.z.length
return u
case 0:throw B.p(A.co("Unknown format for WebP"))}},
kH(d){var x,w,v,u,t=this,s=t.b
if(s==null||t.a==null)return null
x=t.a
if(x.e){x=x.z
w=x.length
if(d>=w)return null
v=x[d]
x=v.x
x===$&&B.b()
w=v.w
w===$&&B.b()
return t.aqF(s.C2(x,w),d)}w=x.f
if(w===C.AH){u=s.C2(x.ch,x.ay)
s=t.a
s.toString
return A.cYR(u,s).p5(0)}else if(w===C.JM){u=s.C2(x.ch,x.ay)
s=t.a
s.toString
return A.cYP(u,s).p5(0)}return null},
ny(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=null
if(p.pA(e)==null)return o
x=p.a.e
if(!x)return p.kH(0)
for(w=o,v=w,u=0;x=p.a,u<x.as;++u){f=x.z[u]
t=p.kH(u)
if(t==null)continue
t.y=f.e
if(v==null||w==null){x=p.a
s=x.a
x=x.b
r=t.gr2()
q=t.a
q=q==null?o:q.gdH()
if(q==null)q=C.aj
v=A.iQ(o,o,q,t.y,C.bG,x,o,0,r,o,C.aj,s,!1)
w=v}else{w=A.Ex(w,!1,!1)
x=f.f
x===$&&B.b()
if(x){x=w.a
if(x!=null)x.jo(0,o)}}A.d_q(w,t,C.BS,o,o,f.a,f.b,o,o,o,o)
v.oc(w)}return v},
aqF(d,e){var x,w,v,u=null,t=B.a([],y.J),s=new A.ay7(C.qT,t)
if(!this.aCv(d,s))return u
if(s.f===C.qT)return u
s.as=this.a.as
if(s.e){x=t.length
if(e>=x)return u
w=t[e]
t=w.x
t===$&&B.b()
x=w.w
x===$&&B.b()
return this.aqF(d.C2(t,x),e)}else{v=d.C2(s.ch,s.ay)
t=s.f
if(t===C.AH)return A.cYR(v,s).p5(0)
else if(t===C.JM)return A.cYP(v,s).p5(0)}return u},
asN(d){if(d.jO(4)!=="RIFF")return!1
d.ag()
if(d.jO(4)!=="WEBP")return!1
return!0},
aCv(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
for(x=d.c,w=d.b;d.d<x;){v=d.jO(4)
u=d.ag()
t=u+1>>>1<<1>>>0
s=d.d
r=s-w
switch(v){case"VP8X":if(!this.bdd(d,e))return!1
break
case"VP8 ":e.ay=r
e.ch=u
e.f=C.JM
break
case"VP8L":e.ay=r
e.ch=u
e.f=C.AH
break
case"ALPH":e.toString
s=d.a
q=d.e
p=J.a_(s)
o=p.gA(s)
p=p.gA(s)
s=new A.nn(s,0,Math.min(o,p),0,q)
e.at=s
s.d=d.d
d.d+=t
break
case"ANIM":e.f=C.bPz
n=d.ag()
s=new Uint8Array(4)
s[0]=n>>>8&255
s[1]=n>>>16&255
s[2]=n>>>24&255
s[3]=n&255
d.av()
break
case"ANMF":if(!this.bbQ(d,e,u))return!1
break
case"ICCP":e.toString
m=d.jS(u)
d.d=d.d+(m.c-m.d)
m.ik()
break
case"EXIF":e.toString
e.w=d.jO(u)
break
case"XMP ":e.toString
d.jO(u)
break
default:d.d=s+t
break}s=d.d
l=t-(s-w-r)
if(l>0)d.d=s+l}if(!e.d)e.d=e.at!=null
return e.f!==C.qT},
bdd(d,e){var x,w,v,u,t=d.cE()
if((t&192)!==0)return!1
x=D.c.Z(t,4)
w=D.c.Z(t,1)
if((t&1)!==0)return!1
if(d.tu()!==0)return!1
v=d.tu()
u=d.tu()
e.a=v+1
e.b=u+1
e.e=(w&1)!==0
e.d=(x&1)!==0
return!0},
bbQ(d,e,f){var x,w=d.tu(),v=d.tu()
d.tu()
x=new A.ay6(w*2,v*2,d.tu()+1,d.tu())
x.b1D(d,f)
if(x.r!==0)return!1
e.z.push(x)
return!0}}
A.bue.prototype={
J(){return"IccProfileCompression."+this.b}}
A.a4d.prototype={
bHg(){var x,w=this
if(w.b===C.Ea)return w.c
x=C.Ly.aH8(w.c,null)
w.c=x
w.b=C.Ea
return x}}
A.awd.prototype={
J(){return"FrameType."+this.b}}
A.Ey.prototype={
glw(){var x=this.x
return x===$?this.x=B.a([],y.g):x},
b10(d,e,f,g){var x,w,v,u=this,t=d.gdH(),s=d.gr2(),r=d.a
u.aqq(g,e,t,s,r==null?null:r.gf8())
t=d.b
if(t!=null)u.b=B.i3(t,y.N,y.I)
t=d.d
if(t!=null){s=y.N
u.d=B.i3(t,s,s)}u.glw().push(u)
if(!f){x=d.glw().length
for(t=y.g,w=1;w<x;++w){v=d.x
u.oc(A.axw((v===$?d.x=B.a([],t):v)[w],e,!1,g))}}},
b1_(d,e,f){var x,w,v,u,t=this,s=d.b
if(s!=null)t.b=B.i3(s,y.N,y.I)
s=d.d
if(s!=null){x=y.N
t.d=B.i3(s,x,x)}t.glw().push(t)
if(!e&&d.glw().length>1){w=d.glw().length
for(s=y.g,v=1;v<w;++v){u=d.x
t.oc(A.Ex((u===$?d.x=B.a([],s):u)[v],!1,!1))}}},
oc(d){var x=this
if(d==null)d=A.Ex(x,!0,!0)
d.z=x.glw().length
if(D.b.ga_(x.glw())!==d)x.glw().push(d)
return d},
ZT(){return this.oc(null)},
aqq(d,e,f,g,h){var x,w,v=this,u=null
switch(f.a){case 0:if(h==null){x=D.e.fH(d*g/8)
w=new A.Sy($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.e.fH(d/8)
w=new A.Sy($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 1:if(h==null){x=D.e.fH(d*(g<<1>>>0)/8)
w=new A.SA($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.e.fH(d/4)
w=new A.SA($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 2:if(h==null){if(g===2)x=d
else if(g===4)x=d*2
else x=g===3?D.e.fH(d*1.5):D.e.fH(d/2)
w=new A.SC($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.e.fH(d/2)
w=new A.SC($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 3:if(h==null)v.a=A.d5X(d,e,g)
else v.a=new A.SD(new Uint8Array(d*e),h,d,e,1)
break
case 4:x=d*e
if(h==null)v.a=new A.Sz(new Uint16Array(x*g),u,d,e,g)
else v.a=new A.Sz(new Uint16Array(x),h,d,e,1)
break
case 5:v.a=A.dwP(d,e,g)
break
case 6:v.a=new A.a4o(new Int8Array(d*e*g),d,e,g)
break
case 7:v.a=new A.a4m(new Int16Array(d*e*g),d,e,g)
break
case 8:v.a=new A.a4n(new Int32Array(d*e*g),d,e,g)
break
case 9:v.a=A.dwN(d,e,g)
break
case 10:v.a=A.dwO(d,e,g)
break
case 11:v.a=new A.a4l(new Float64Array(d*e*4*g),d,e,g)
break}},
j(d){var x=this
return"Image("+x.ge7(0)+", "+x.ge3(0)+", "+x.gdH().b+", "+x.gr2()+")"},
ge7(d){var x=this.a
x=x==null?null:x.a
return x==null?0:x},
ge3(d){var x=this.a
x=x==null?null:x.b
return x==null?0:x},
gdH(){var x=this.a
x=x==null?null:x.gdH()
return x==null?C.aj:x},
gxS(){var x=this.e
return x==null?this.e=new A.RT(B.I(y.N,y.P)):x},
aSJ(d,e){var x=this,w=x.b;(w==null?x.b=B.I(y.N,y.I):w).m(0,d,e)
if(x.b.a===0)x.b=null},
gac(d){var x=this.a
return x.gac(x)},
gaq(d){var x=this.a
x=x==null?null:x.gaq(x)
if(x==null)x=D.H.gaq(new Uint8Array(0))
return x},
gr2(){var x=this.a
x=x==null?null:x.gf8()
x=x==null?null:x.b
if(x==null){x=this.a
x=x==null?null:x.c}return x==null?0:x},
gtc(){var x=this.a
return(x==null?null:x.gf8())!=null},
gnu(){var x=this.a
x=x==null?null:x.gnu()
return x==null?0:x},
aJu(d,e){return d>=0&&e>=0&&d<this.ge7(0)&&e<this.ge3(0)},
oF(d,e,f,g){var x=this.a
x=x==null?null:x.oF(d,e,f,g)
if(x==null)x=new A.zY(new Uint8Array(0))
return x},
er(d,e,f){var x=this.a
x=x==null?null:x.er(d,e,f)
return x==null?new A.h_():x},
oG(d,e){return this.er(d,e,null)},
kS(d,e){if(d<0||d>=this.ge7(0)||e<0||e>=this.ge3(0))return new A.h_()
return this.er(d,e,null)},
aQD(d,e,f){switch(f.a){case 0:return this.kS(D.e.L(d),D.e.L(e))
case 1:case 3:return this.aQE(d,e)
case 2:return this.aQC(d,e)}},
aQE(d,e){var x,w,v,u,t,s,r=this,q=D.e.L(d),p=q-(d>=0?0:1),o=p+1
q=D.e.L(e)
x=q-(e>=0?0:1)
w=x+1
q=new A.bv8(d-p,e-x)
v=r.kS(p,x)
u=w>=r.ge3(0)?v:r.kS(p,w)
t=o>=r.ge7(0)?v:r.kS(o,x)
s=o>=r.ge7(0)||w>=r.ge3(0)?v:r.kS(o,w)
return r.oF(q.$4(v.gar(v),t.gar(t),u.gar(u),s.gar(s)),q.$4(v.gaE(),t.gaE(),u.gaE(),s.gaE()),q.$4(v.gaF(v),t.gaF(t),u.gaF(u),s.gaF(s)),q.$4(v.gaU(v),t.gaU(t),u.gaU(u),s.gaU(s)))},
aQC(d0,d1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=D.e.L(d0),c6=c5-(d0>=0?0:1),c7=c6-1,c8=c6+1,c9=c6+2
c5=D.e.L(d1)
x=c5-(d1>=0?0:1)
w=x-1
v=x+1
u=x+2
t=d0-c6
s=d1-x
c5=new A.bv7()
r=c4.kS(c6,x)
q=c7<0
p=!q
o=!p||w<0?r:c4.kS(c7,w)
n=q?r:c4.kS(c6,w)
m=w<0
l=m||c8>=c4.ge7(0)?r:c4.kS(c8,w)
k=c9>=c4.ge7(0)||m?r:c4.kS(c9,w)
j=c5.$5(t,o.gar(o),n.gar(n),l.gar(l),k.gar(k))
i=c5.$5(t,o.gaE(),n.gaE(),l.gaE(),k.gaE())
h=c5.$5(t,o.gaF(o),n.gaF(n),l.gaF(l),k.gaF(k))
g=c5.$5(t,o.gaU(o),n.gaU(n),l.gaU(l),k.gaU(k))
f=q?r:c4.kS(c7,x)
e=c8>=c4.ge7(0)?r:c4.kS(c8,x)
d=c9>=c4.ge7(0)?r:c4.kS(c9,x)
a0=c5.$5(t,f.gar(f),r.gar(r),e.gar(e),d.gar(d))
a1=c5.$5(t,f.gaE(),r.gaE(),e.gaE(),d.gaE())
a2=c5.$5(t,f.gaF(f),r.gaF(r),e.gaF(e),d.gaF(d))
a3=c5.$5(t,f.gaU(f),r.gaU(r),e.gaU(e),d.gaU(d))
a4=!p||v>=c4.ge3(0)?r:c4.kS(c7,v)
a5=v>=c4.ge3(0)?r:c4.kS(c6,v)
a6=c8>=c4.ge7(0)||v>=c4.ge3(0)?r:c4.kS(c8,v)
a7=c9>=c4.ge7(0)||v>=c4.ge3(0)?r:c4.kS(c9,v)
a8=c5.$5(t,a4.gar(a4),a5.gar(a5),a6.gar(a6),a7.gar(a7))
a9=c5.$5(t,a4.gaE(),a5.gaE(),a6.gaE(),a7.gaE())
b0=c5.$5(t,a4.gaF(a4),a5.gaF(a5),a6.gaF(a6),a7.gaF(a7))
b1=c5.$5(t,a4.gaU(a4),a5.gaU(a5),a6.gaU(a6),a7.gaU(a7))
b2=!p||u>=c4.ge3(0)?r:c4.kS(c7,u)
b3=u>=c4.ge3(0)?r:c4.kS(c6,u)
b4=c8>=c4.ge7(0)||u>=c4.ge3(0)?r:c4.kS(c8,u)
b5=c9>=c4.ge7(0)||u>=c4.ge3(0)?r:c4.kS(c9,u)
b6=c5.$5(t,b2.gar(b2),b3.gar(b3),b4.gar(b4),b5.gar(b5))
b7=c5.$5(t,b2.gaE(),b3.gaE(),b4.gaE(),b5.gaE())
b8=c5.$5(t,b2.gaF(b2),b3.gaF(b3),b4.gaF(b4),b5.gaF(b5))
b9=c5.$5(t,b2.gaU(b2),b3.gaU(b3),b4.gaU(b4),b5.gaU(b5))
c0=c5.$5(s,j,a0,a8,b6)
c1=c5.$5(s,i,a1,a9,b7)
c2=c5.$5(s,h,a2,b0,b8)
c3=c5.$5(s,g,a3,b1,b9)
return c4.oF(D.e.L(c0),D.e.L(c1),D.e.L(c2),D.e.L(c3))},
BQ(d,e,f){var x
if(y.c0.b(f))if(f.gfL(f).gf8()!=null)if(this.gtc()){x=this.a
if(x!=null)x.fF(d,e,f.gdI(f),0,0)
return}x=this.a
if(x!=null)x.kU(d,e,f.gar(f),f.gaE(),f.gaF(f),f.gaU(f))},
gcr(){var x=this.a
x=x==null?null:x.gcr()
return x==null?0:x},
jo(d,e){var x=this.a
return x==null?null:x.jo(0,e)},
N(d){return this.jo(0,null)},
aFt(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
if(a5==null)a5=a3.gdH()
if(a6==null)a6=a3.gr2()
x=C.a6E.h(0,a5)
w=!1
if(a5===a3.gdH())if(a6===a3.gr2()){v=a3.a
w=(v==null?a4:v.gf8())==null}if(w)return A.Ex(a3,!1,!1)
for(w=a3.glw(),v=w.length,u=y.N,t=y.p,s=a4,r=0;r<w.length;w.length===v||(0,B.L)(w),++r,s=i){q=w[r]
p=q.a
o=p==null
n=o?a4:p.a
if(n==null)n=0
p=o?a4:p.b
if(p==null)p=0
o=q.e
o=o==null?a4:A.a2U(o)
m=q.c
if(m==null)m=a4
else{l=m.a
k=m.b
m=m.c
m=new A.a4d(l,k,new Uint8Array(m.subarray(0,B.tq(0,a4,m.length))))}l=q.w
k=q.r
j=A.iQ(a4,o,a5,q.y,l,p,m,k,a6,a4,C.aj,n,!1)
p=q.d
j.d=p!=null?B.i3(p,u,u):a4
if(s!=null){s.oc(j)
i=s}else i=j
p=j.a
h=p==null?a4:p.gf8()
p=j.a
p=p==null?a4:p.gf8()
g=p==null?a4:p.gdH()
if(g==null)g=a5
p=q.a
if(h!=null){f=B.I(t,t)
e=p==null?a4:p.er(0,0,a4)
if(e==null)e=new A.h_()
for(p=j.a,p=p.gac(p),d=a4,a0=0;p.t();){a1=p.gM(p)
a2=A.dge(D.e.fU(e.gj9()*255),D.e.fU(e.giT()*255),D.e.fU(e.gj1()*255),0)
if(f.a4(0,a2)){o=f.h(0,a2)
o.toString
a1.sdI(0,o)}else{f.m(0,a2,a0)
a1.sdI(0,a0)
d=A.r1(e,x,g,a6,d)
h.qh(a0,d.gar(d),d.gaE(),d.gaF(d));++a0}e.t()}}else{e=p==null?a4:p.er(0,0,a4)
if(e==null)e=new A.h_()
for(p=j.a,p=p.gac(p);p.t();){A.r1(e,x,a4,a4,p.gM(p))
e.t()}}}s.toString
return s},
p_(d){return this.aFt(d,null)},
aFs(d){return this.aFt(null,d)},
bEb(d){var x,w,v,u
if(this.d==null){x=y.N
this.d=B.I(x,x)}for(x=new B.ce(d,d.r,d.e,B.t(d).i("ce<1>"));x.t();){w=x.d
v=this.d
v.toString
u=d.h(0,w)
u.toString
v.m(0,w,u)}},
b79(d,e,f){var x,w=65536
switch(e.a){case 0:return null
case 1:return null
case 2:return null
case 3:x=d===C.cV?w:256
return new A.wh(new Uint8Array(x*f),x,f)
case 4:x=d===C.cV?w:256
return new A.aCH(new Uint16Array(x*f),x,f)
case 5:x=d===C.cV?w:256
return new A.a7e(new Uint32Array(x*f),x,f)
case 6:x=d===C.cV?w:256
return new A.aCG(new Int8Array(x*f),x,f)
case 7:x=d===C.cV?w:256
return new A.aCE(new Int16Array(x*f),x,f)
case 8:x=d===C.cV?w:256
return new A.aCF(new Int32Array(x*f),x,f)
case 9:x=d===C.cV?w:256
return new A.aCB(new Uint16Array(x*f),x,f)
case 10:x=d===C.cV?w:256
return new A.aCC(new Float32Array(x*f),x,f)
case 11:x=d===C.cV?w:256
return new A.aCD(new Float64Array(x*f),x,f)}}}
A.nl.prototype={
gf8(){return null}}
A.Sw.prototype={
rO(d,e){var x=this,w=x.d
if(e)w=new Uint16Array(w.length)
else w=new Uint16Array(B.c9(w))
return new A.Sw(w,x.a,x.b,x.c)},
gdH(){return C.jj},
gaq(d){return D.eN.gaq(this.d)},
gnu(){return 16},
gtz(){return this.a*this.c*2},
gac(d){return A.cX2(this)},
rf(d,e,f,g,h){return A.wj(A.cX2(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gcr(){return 1},
gtg(){return!0},
oF(d,e,f,g){var x=new Uint16Array(4),w=new A.QC(x)
x[0]=A.hP(d)
x[1]=A.hP(e)
x[2]=A.hP(f)
x[3]=A.hP(g)
x=w
return x},
er(d,e,f){if(f==null||!(f instanceof A.LB)||f.d!==this)f=A.cX2(this)
f.hO(0,d,e)
return f},
oG(d,e){return this.er(d,e,null)},
ni(d,e,f){var x=this.c,w=this.d,v=A.hP(f)
w.$flags&2&&B.K(w)
w[e*this.a*x+d*x]=v},
fF(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=A.hP(f)
v.$flags&2&&B.K(v)
v[w]=u
if(x>1){v[w+1]=A.hP(g)
if(x>2)v[w+2]=A.hP(h)}},
kU(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=A.hP(f)
v.$flags&2&&B.K(v)
v[w]=u
if(x>1){v[w+1]=A.hP(g)
if(x>2){v[w+2]=A.hP(h)
if(x>3)v[w+3]=A.hP(i)}}},
j(d){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
jo(d,e){},
N(d){return this.jo(0,null)}}
A.Sx.prototype={
rO(d,e){var x=this,w=x.d
if(e)w=new Float32Array(w.length)
else w=new Float32Array(B.c9(w))
return new A.Sx(w,x.a,x.b,x.c)},
gdH(){return C.kR},
gaq(d){return D.fR.gaq(this.d)},
gnu(){return 32},
gac(d){return A.cX3(this)},
rf(d,e,f,g,h){return A.wj(A.cX3(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gcr(){return 1},
gtz(){return this.a*this.c*4},
gtg(){return!0},
oF(d,e,f,g){var x=new Float32Array(4),w=new A.QD(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
er(d,e,f){if(f==null||!(f instanceof A.LC)||f.d!==this)f=A.cX3(this)
f.hO(0,d,e)
return f},
oG(d,e){return this.er(d,e,null)},
ni(d,e,f){var x=this.c,w=this.d
w.$flags&2&&B.K(w)
w[e*this.a*x+d*x]=f},
fF(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.K(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
kU(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.K(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
jo(d,e){},
N(d){return this.jo(0,null)}}
A.a4l.prototype={
rO(d,e){var x=this,w=x.d
if(e)w=new Float64Array(w.length)
else w=new Float64Array(B.c9(w))
return new A.a4l(w,x.a,x.b,x.c)},
gdH(){return C.mx},
gaq(d){return D.fe.gaq(this.d)},
gA(d){return this.d.byteLength},
gnu(){return 64},
gac(d){return A.cX4(this)},
rf(d,e,f,g,h){return A.wj(A.cX4(this),e,f,g,h)},
gcr(){return 1},
gtz(){return this.a*this.c*8},
gtg(){return!0},
oF(d,e,f,g){var x=new Float64Array(4),w=new A.QE(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
er(d,e,f){if(f==null||!(f instanceof A.LD)||f.d!==this)f=A.cX4(this)
f.hO(0,d,e)
return f},
oG(d,e){return this.er(d,e,null)},
ni(d,e,f){var x=this.c,w=this.d
w.$flags&2&&B.K(w)
w[e*this.a*x+d*x]=f},
fF(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.K(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
kU(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.K(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
jo(d,e){},
N(d){return this.jo(0,null)}}
A.a4m.prototype={
rO(d,e){var x=this,w=x.d
if(e)w=new Int16Array(w.length)
else w=new Int16Array(B.c9(w))
return new A.a4m(w,x.a,x.b,x.c)},
gdH(){return C.mz},
gaq(d){return D.lm.gaq(this.d)},
gac(d){return A.cX5(this)},
rf(d,e,f,g,h){return A.wj(A.cX5(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gcr(){return 32767},
gtg(){return!0},
gnu(){return 16},
gtz(){return this.a*this.c*2},
oF(d,e,f,g){var x=D.e.L(d),w=D.e.L(e),v=D.e.L(f),u=D.e.L(g),t=new Int16Array(4),s=new A.QF(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
er(d,e,f){if(f==null||!(f instanceof A.LE)||f.d!==this)f=A.cX5(this)
f.hO(0,d,e)
return f},
oG(d,e){return this.er(d,e,null)},
ni(d,e,f){var x=this.c,w=this.d,v=D.e.L(f)
w.$flags&2&&B.K(w)
w[e*this.a*x+d*x]=v},
fF(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.K(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2)v[w+2]=D.e.L(h)}},
kU(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.K(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2){v[w+2]=D.e.L(h)
if(x>3)v[w+3]=D.e.L(i)}}},
j(d){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
jo(d,e){},
N(d){return this.jo(0,null)}}
A.a4n.prototype={
rO(d,e){var x=this,w=x.d
if(e)w=new Int32Array(w.length)
else w=new Int32Array(B.c9(w))
return new A.a4n(w,x.a,x.b,x.c)},
gdH(){return C.mA},
gaq(d){return D.d7.gaq(this.d)},
gnu(){return 32},
gtz(){return this.a*this.c*4},
gac(d){return A.cX6(this)},
rf(d,e,f,g,h){return A.wj(A.cX6(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gcr(){return 2147483647},
gtg(){return!0},
oF(d,e,f,g){var x=D.e.L(d),w=D.e.L(e),v=D.e.L(f),u=D.e.L(g),t=new Int32Array(4),s=new A.QG(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
er(d,e,f){if(f==null||!(f instanceof A.LF)||f.d!==this)f=A.cX6(this)
f.hO(0,d,e)
return f},
oG(d,e){return this.er(d,e,null)},
ni(d,e,f){var x=this.c,w=this.d,v=D.e.L(f)
w.$flags&2&&B.K(w)
w[e*this.a*x+d*x]=v},
fF(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.K(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2)v[w+2]=D.e.L(h)}},
kU(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.K(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2){v[w+2]=D.e.L(h)
if(x>3)v[w+3]=D.e.L(i)}}},
j(d){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
jo(d,e){},
N(d){return this.jo(0,null)}}
A.a4o.prototype={
rO(d,e){var x=this,w=x.d
if(e)w=new Int8Array(w.length)
else w=new Int8Array(B.c9(w))
return new A.a4o(w,x.a,x.b,x.c)},
gdH(){return C.my},
gaq(d){return D.ln.gaq(this.d)},
gtz(){return this.a*this.c},
gac(d){return A.cX7(this)},
rf(d,e,f,g,h){return A.wj(A.cX7(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gcr(){return 127},
gtg(){return!0},
gnu(){return 8},
oF(d,e,f,g){var x=D.e.L(d),w=D.e.L(e),v=D.e.L(f),u=D.e.L(g),t=new Int8Array(4),s=new A.QH(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
er(d,e,f){if(f==null||!(f instanceof A.LG)||f.d!==this)f=A.cX7(this)
f.hO(0,d,e)
return f},
oG(d,e){return this.er(d,e,null)},
ni(d,e,f){var x=this.c,w=this.d,v=D.e.L(f)
w.$flags&2&&B.K(w)
w[e*(this.a*x)+d*x]=v},
fF(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.K(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2)v[w+2]=D.e.L(h)}},
kU(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.K(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2){v[w+2]=D.e.L(h)
if(x>3)v[w+3]=D.e.L(i)}}},
j(d){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
jo(d,e){},
N(d){return this.jo(0,null)}}
A.Sy.prototype={
c_P(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.be()
this.d=x},
rO(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.c9(v))}x=w.f
x=x==null?null:x.ew(0)
return new A.Sy(v,w.e,x,w.a,w.b,w.c)},
gdH(){return C.hE},
gA(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gcr(){var x=this.f
x=x==null?null:x.gcr()
return x==null?1:x},
gtg(){return!1},
gaq(d){var x=this.d
x===$&&B.b()
return D.H.gaq(x)},
gnu(){return 1},
gac(d){return A.a7v(this)},
rf(d,e,f,g,h){return A.wj(A.a7v(this),e,f,g,h)},
oF(d,e,f,g){var x=new A.QK(4,0)
x.iV(D.e.L(d),D.e.L(e),D.e.L(f),D.e.L(g))
return x},
er(d,e,f){if(f==null||!(f instanceof A.LH)||f.f!==this)f=A.a7v(this)
f.hO(0,d,e)
return f},
oG(d,e){return this.er(d,e,null)},
ni(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7v(w):x).hO(0,d,e)
w.r.ll(0,f)},
fF(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7v(w):x).hO(0,d,e)
w.r.le(f,g,h)},
kU(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7v(w):x).hO(0,d,e)
w.r.iV(f,g,h,i)},
j(d){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
jo(d,e){},
N(d){return this.jo(0,null)},
gtz(){return this.e},
gf8(){return this.f}}
A.Sz.prototype={
rO(d,e){var x,w=this,v=w.d
if(e)v=new Uint16Array(v.length)
else v=new Uint16Array(B.c9(v))
x=w.e
x=x==null?null:x.ew(0)
return new A.Sz(v,x,w.a,w.b,w.c)},
gdH(){return C.cV},
gaq(d){return D.eN.gaq(this.d)},
gnu(){return 16},
gcr(){var x=this.e
x=x==null?null:x.gcr()
return x==null?65535:x},
gtz(){return this.a*this.c*2},
gac(d){return A.cX8(this)},
rf(d,e,f,g,h){return A.wj(A.cX8(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gtg(){return!0},
oF(d,e,f,g){var x=D.e.L(d),w=D.e.L(e),v=D.e.L(f),u=D.e.L(g),t=new Uint16Array(4),s=new A.QL(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
er(d,e,f){if(f==null||!(f instanceof A.LI)||f.d!==this)f=A.cX8(this)
f.hO(0,d,e)
return f},
oG(d,e){return this.er(d,e,null)},
ni(d,e,f){var x=this.c,w=this.d,v=D.e.L(f)
w.$flags&2&&B.K(w)
w[e*this.a*x+d*x]=v},
fF(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.K(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2)v[w+2]=D.e.L(h)}},
kU(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.K(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2){v[w+2]=D.e.L(h)
if(x>3)v[w+3]=D.e.L(i)}}},
j(d){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
jo(d,e){},
N(d){return this.jo(0,null)},
gf8(){return this.e}}
A.SA.prototype={
c_Q(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.be()
this.d=x},
rO(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.c9(v))}x=w.f
x=x==null?null:x.ew(0)
return new A.SA(v,w.e,x,w.a,w.b,w.c)},
gdH(){return C.it},
gnu(){return 2},
gaq(d){var x=this.d
x===$&&B.b()
return D.H.gaq(x)},
gac(d){return A.a7w(this)},
rf(d,e,f,g,h){return A.wj(A.a7w(this),e,f,g,h)},
gA(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gcr(){var x=this.f
x=x==null?null:x.gcr()
return x==null?3:x},
gtg(){return!1},
oF(d,e,f,g){var x=new A.QM(4,0)
x.iV(D.e.L(d),D.e.L(e),D.e.L(f),D.e.L(g))
return x},
er(d,e,f){if(f==null||!(f instanceof A.LJ)||f.f!==this)f=A.a7w(this)
f.hO(0,d,e)
return f},
oG(d,e){return this.er(d,e,null)},
ni(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7w(w):x).hO(0,d,e)
w.r.lm(0,f)},
fF(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7w(w):x).hO(0,d,e)
w.r.le(f,g,h)},
kU(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7w(w):x).hO(0,d,e)
w.r.iV(f,g,h,i)},
j(d){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
jo(d,e){},
N(d){return this.jo(0,null)},
gtz(){return this.e},
gf8(){return this.f}}
A.SB.prototype={
rO(d,e){var x=this,w=x.d
if(e)w=new Uint32Array(w.length)
else w=new Uint32Array(B.c9(w))
return new A.SB(w,x.a,x.b,x.c)},
gdH(){return C.kS},
gaq(d){return D.bM.gaq(this.d)},
gtz(){return this.a*this.c*4},
gnu(){return 32},
gcr(){return 4294967295},
gac(d){return A.cX9(this)},
rf(d,e,f,g,h){return A.wj(A.cX9(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gtg(){return!0},
oF(d,e,f,g){var x=D.e.L(d),w=D.e.L(e),v=D.e.L(f),u=D.e.L(g),t=new Uint32Array(4),s=new A.QN(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
er(d,e,f){if(f==null||!(f instanceof A.LK)||f.d!==this)f=A.cX9(this)
f.hO(0,d,e)
return f},
oG(d,e){return this.er(d,e,null)},
ni(d,e,f){var x=this.c,w=this.d,v=D.e.L(f)
w.$flags&2&&B.K(w)
w[e*this.a*x+d*x]=v},
fF(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.K(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2)v[w+2]=D.e.L(h)}},
kU(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.K(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2){v[w+2]=D.e.L(h)
if(x>3)v[w+3]=D.e.L(i)}}},
j(d){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
jo(d,e){},
N(d){return this.jo(0,null)}}
A.SC.prototype={
c_R(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.be()
this.d=x},
rO(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.c9(v))}x=w.f
x=x==null?null:x.ew(0)
return new A.SC(v,w.e,x,w.a,w.b,w.c)},
gdH(){return C.iu},
gaq(d){var x=this.d
x===$&&B.b()
return D.H.gaq(x)},
gac(d){return A.a7x(this)},
rf(d,e,f,g,h){return A.wj(A.a7x(this),e,f,g,h)},
gA(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gcr(){var x=this.f
x=x==null?null:x.gcr()
return x==null?15:x},
gtg(){return!1},
gnu(){return 4},
oF(d,e,f,g){var x=D.e.L(d),w=D.e.L(e),v=D.e.L(f),u=D.e.L(g),t=new A.QO(4,new Uint8Array(2))
t.iV(x,w,v,u)
x=t
return x},
er(d,e,f){if(f==null||!(f instanceof A.LL)||f.e!==this)f=A.a7x(this)
f.hO(0,d,e)
return f},
oG(d,e){return this.er(d,e,null)},
ni(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7x(w):x).hO(0,d,e)
w.r.ln(0,f)},
fF(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7x(w):x).hO(0,d,e)
w.r.le(f,g,h)},
kU(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7x(w):x).hO(0,d,e)
w.r.iV(f,g,h,i)},
j(d){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
jo(d,e){},
N(d){return this.jo(0,null)},
gtz(){return this.e},
gf8(){return this.f}}
A.SD.prototype={
rO(d,e){var x,w=this,v=w.d
if(e)v=new Uint8Array(v.length)
else v=new Uint8Array(B.c9(v))
x=w.e
x=x==null?null:x.ew(0)
return new A.SD(v,x,w.a,w.b,w.c)},
gdH(){return C.aj},
gaq(d){return D.H.gaq(this.d)},
gtz(){return this.a*this.c},
gnu(){return 8},
gac(d){return A.bHv(this)},
rf(d,e,f,g,h){return A.wj(A.bHv(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gcr(){var x=this.e
x=x==null?null:x.gcr()
return x==null?255:x},
gtg(){return!1},
oF(d,e,f,g){var x=A.dpe(D.e.L(D.e.aM(d,0,255)),D.e.L(D.e.aM(e,0,255)),D.e.L(D.e.aM(f,0,255)),D.e.L(D.e.aM(g,0,255)))
return x},
er(d,e,f){if(f==null||!(f instanceof A.LM)||f.d!==this)f=A.bHv(this)
f.hO(0,d,e)
return f},
oG(d,e){return this.er(d,e,null)},
ni(d,e,f){var x=this.c,w=this.d,v=D.e.L(f)
w.$flags&2&&B.K(w)
w[e*(this.a*x)+d*x]=v},
fF(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.K(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2)v[w+2]=D.e.L(h)}},
kU(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.K(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2){v[w+2]=D.e.L(h)
if(x>3)v[w+3]=D.e.L(i)}}},
j(d){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
jo(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=e==null?l:A.r1(e,l,C.aj,l,l),j=m.c
if(j===1){x=k==null?0:D.c.aM(B.bw(k.gar(k)),0,255)
j=m.d
D.H.mB(j,0,j.length,x)}else if(j===2){j=k==null
x=j?0:D.c.aM(B.bw(k.gar(k)),0,255)
w=j?0:D.c.aM(B.bw(k.gaE()),0,255)
v=J.cU8(D.H.gaq(m.d),0,null)
D.eN.mB(v,0,v.length,(w<<8|x)>>>0)}else if(j===4){j=k==null
x=j?0:D.c.aM(B.bw(k.gar(k)),0,255)
w=j?0:D.c.aM(B.bw(k.gaE()),0,255)
u=j?0:D.c.aM(B.bw(k.gaF(k)),0,255)
t=j?0:D.c.aM(B.bw(k.gaU(k)),0,255)
s=J.pV(D.H.gaq(m.d),0,null)
D.bM.mB(s,0,s.length,(t<<24|u<<16|w<<8|x)>>>0)}else{j=k==null
x=j?0:D.c.aM(B.bw(k.gar(k)),0,255)
w=j?0:D.c.aM(B.bw(k.gaE()),0,255)
u=j?0:D.c.aM(B.bw(k.gaF(k)),0,255)
for(r=A.bHv(m),j=r.d,q=j.c>0,j=j.d,p=j.$flags|0;r.t();){if(q){o=r.c
n=D.e.L(D.c.aM(x,0,255))
p&2&&B.K(j)
j[o]=n}r.saE(w)
r.saF(0,u)}}},
N(d){return this.jo(0,null)},
gf8(){return this.e}}
A.ay8.prototype={
J(){return"Interpolation."+this.b}}
A.bH5.prototype={}
A.aCB.prototype={
ew(d){return new A.aCB(new Uint16Array(B.c9(this.c)),this.a,this.b)},
gaq(d){return D.eN.gaq(this.c)},
gdH(){return C.jj},
gcr(){return 1},
fP(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=A.hP(g)
x.$flags&2&&B.K(x)
x[e*v+f]=w}},
qh(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=A.hP(e)
x.$flags&2&&B.K(x)
x[d]=w
if(v>1){x[d+1]=A.hP(f)
if(v>2)x[d+2]=A.hP(g)}},
nf(d,e,f){var x,w=this.b
if(f<w){w=this.c[e*w+f]
x=$.iP
w=(x!=null?x:A.jE())[w]}else w=0
return w},
nX(d){var x=this.c[d*this.b],w=$.iP
return(w!=null?w:A.jE())[x]},
nV(d){var x,w=this.b
if(w<2)return 0
w=this.c[d*w+1]
x=$.iP
return(x!=null?x:A.jE())[w]},
nT(d){var x,w=this.b
if(w<3)return 0
w=this.c[d*w+2]
x=$.iP
return(x!=null?x:A.jE())[w]},
pt(d){var x,w=this.b
if(w<4)return 0
w=this.c[d*w+3]
x=$.iP
return(x!=null?x:A.jE())[w]},
vd(d,e){return this.fP(0,d,0,e)},
vb(d,e){return this.fP(0,d,1,e)},
va(d,e){return this.fP(0,d,2,e)},
v9(d,e){return this.fP(0,d,3,e)}}
A.aCC.prototype={
ew(d){return new A.aCC(new Float32Array(B.c9(this.c)),this.a,this.b)},
gaq(d){return D.fR.gaq(this.c)},
gdH(){return C.kR},
gcr(){return 1},
fP(d,e,f,g){var x,w=this.b
if(f<w){x=this.c
x.$flags&2&&B.K(x)
x[e*w+f]=g}},
qh(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x.$flags&2&&B.K(x)
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
nf(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nX(d){return this.c[d*this.b]},
nV(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nT(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
pt(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
vd(d,e){return this.fP(0,d,0,e)},
vb(d,e){return this.fP(0,d,1,e)},
va(d,e){return this.fP(0,d,2,e)},
v9(d,e){return this.fP(0,d,3,e)}}
A.aCD.prototype={
ew(d){return new A.aCD(new Float64Array(B.c9(this.c)),this.a,this.b)},
gaq(d){return D.fe.gaq(this.c)},
gdH(){return C.mx},
gcr(){return 1},
fP(d,e,f,g){var x,w=this.b
if(f<w){x=this.c
x.$flags&2&&B.K(x)
x[e*w+f]=g}},
qh(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x.$flags&2&&B.K(x)
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
nf(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nX(d){return this.c[d*this.b]},
nV(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nT(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
pt(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
vd(d,e){return this.fP(0,d,0,e)},
vb(d,e){return this.fP(0,d,1,e)},
va(d,e){return this.fP(0,d,2,e)},
v9(d,e){return this.fP(0,d,3,e)}}
A.aCE.prototype={
ew(d){return new A.aCE(new Int16Array(B.c9(this.c)),this.a,this.b)},
gaq(d){return D.lm.gaq(this.c)},
gdH(){return C.mz},
gcr(){return 32767},
fP(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.L(g)
x.$flags&2&&B.K(x)
x[e*v+f]=w}},
qh(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.e.L(e)
x.$flags&2&&B.K(x)
x[d]=w
if(v>1){x[d+1]=D.e.L(f)
if(v>2)x[d+2]=D.e.L(g)}},
nf(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nX(d){return this.c[d*this.b]},
nV(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nT(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
pt(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
vd(d,e){return this.fP(0,d,0,e)},
vb(d,e){return this.fP(0,d,1,e)},
va(d,e){return this.fP(0,d,2,e)},
v9(d,e){return this.fP(0,d,3,e)}}
A.aCF.prototype={
ew(d){return new A.aCF(new Int32Array(B.c9(this.c)),this.a,this.b)},
gaq(d){return D.d7.gaq(this.c)},
gdH(){return C.mA},
gcr(){return 2147483647},
fP(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.L(g)
x.$flags&2&&B.K(x)
x[e*v+f]=w}},
qh(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.e.L(e)
x.$flags&2&&B.K(x)
x[d]=w
if(v>1){x[d+1]=D.e.L(f)
if(v>2)x[d+2]=D.e.L(g)}},
nf(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nX(d){return this.c[d*this.b]},
nV(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nT(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
pt(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
vd(d,e){return this.fP(0,d,0,e)},
vb(d,e){return this.fP(0,d,1,e)},
va(d,e){return this.fP(0,d,2,e)},
v9(d,e){return this.fP(0,d,3,e)}}
A.aCG.prototype={
ew(d){return new A.aCG(new Int8Array(B.c9(this.c)),this.a,this.b)},
gaq(d){return D.ln.gaq(this.c)},
gdH(){return C.my},
gcr(){return 127},
fP(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.L(g)
x.$flags&2&&B.K(x)
x[e*v+f]=w}},
qh(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.e.L(e)
x.$flags&2&&B.K(x)
x[d]=w
if(v>1){x[d+1]=D.e.L(f)
if(v>2)x[d+2]=D.e.L(g)}},
nf(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nX(d){return this.c[d*this.b]},
nV(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nT(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
pt(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
vd(d,e){return this.fP(0,d,0,e)},
vb(d,e){return this.fP(0,d,1,e)},
va(d,e){return this.fP(0,d,2,e)},
v9(d,e){return this.fP(0,d,3,e)}}
A.aCH.prototype={
ew(d){return new A.aCH(new Uint16Array(B.c9(this.c)),this.a,this.b)},
gaq(d){return D.eN.gaq(this.c)},
gdH(){return C.cV},
gcr(){return 65535},
fP(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.L(g)
x.$flags&2&&B.K(x)
x[e*v+f]=w}},
qh(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.e.L(e)
x.$flags&2&&B.K(x)
x[d]=w
if(v>1){x[d+1]=D.e.L(f)
if(v>2)x[d+2]=D.e.L(g)}},
nf(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nX(d){return this.c[d*this.b]},
nV(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nT(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
pt(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
vd(d,e){return this.fP(0,d,0,e)},
vb(d,e){return this.fP(0,d,1,e)},
va(d,e){return this.fP(0,d,2,e)},
v9(d,e){return this.fP(0,d,3,e)}}
A.a7e.prototype={
ew(d){return new A.a7e(new Uint32Array(B.c9(this.c)),this.a,this.b)},
gaq(d){return D.bM.gaq(this.c)},
gdH(){return C.kS},
gcr(){return 4294967295},
fP(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.L(g)
x.$flags&2&&B.K(x)
x[e*v+f]=w}},
qh(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.e.L(e)
x.$flags&2&&B.K(x)
x[d]=w
if(v>1){x[d+1]=D.e.L(f)
if(v>2)x[d+2]=D.e.L(g)}},
nf(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nX(d){return this.c[d*this.b]},
nV(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nT(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
pt(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
vd(d,e){return this.fP(0,d,0,e)},
vb(d,e){return this.fP(0,d,1,e)},
va(d,e){return this.fP(0,d,2,e)},
v9(d,e){return this.fP(0,d,3,e)}}
A.wh.prototype={
ew(d){return A.d84(this)},
gaq(d){return D.H.gaq(this.c)},
gdH(){return C.aj},
gcr(){return 255},
fP(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.L(g)
x.$flags&2&&B.K(x)
x[e*v+f]=w}},
qh(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.e.L(e)
x.$flags&2&&B.K(x)
x[d]=w
if(v>1){x[d+1]=D.e.L(f)
if(v>2)x[d+2]=D.e.L(g)}},
Us(d,e,f,g,h){var x,w,v=this.b
d*=v
x=this.c
w=D.c.L(e)
x.$flags&2&&B.K(x)
x[d]=w
if(v>1){x[d+1]=D.c.L(f)
if(v>2){x[d+2]=D.c.L(g)
if(v>3)x[d+3]=D.c.L(h)}}},
nf(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nX(d){var x
d*=this.b
x=this.c
if(d>=x.length)return 0
return x[d]},
nV(d){var x=this.b
if(x<2)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+1]},
nT(d){var x=this.b
if(x<3)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+2]},
pt(d){var x=this.b
if(x<4)return 255
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+3]},
vd(d,e){return this.fP(0,d,0,e)},
vb(d,e){return this.fP(0,d,1,e)},
va(d,e){return this.fP(0,d,2,e)},
v9(d,e){return this.fP(0,d,3,e)}}
A.LB.prototype={
ew(d){var x=this
return new A.LB(x.a,x.b,x.c,x.d)},
gdH(){return C.jj},
gA(d){return this.d.c},
gf8(){return null},
gcr(){return 1},
gnS(d){return this.a},
goE(d){return this.b},
hO(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
t(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
h(d,e){var x,w=this.d
if(e<w.c){w=w.d[this.c+e]
x=$.iP
w=(x!=null?x:A.jE())[w]}else w=0
return w},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=A.hP(f)
v.$flags&2&&B.K(v)
v[x+e]=w}},
gdI(d){return this.gar(0)},
sdI(d,e){this.sar(0,e)},
gar(d){var x,w=this.d
if(w.c>0){w=w.d[this.c]
x=$.iP
w=(x!=null?x:A.jE())[w]}else w=0
return w},
sar(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=A.hP(e)
v.$flags&2&&B.K(v)
v[x]=w}},
gaE(){var x,w=this.d
if(w.c>1){w=w.d[this.c+1]
x=$.iP
w=(x!=null?x:A.jE())[w]}else w=0
return w},
saE(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=A.hP(d)
v.$flags&2&&B.K(v)
v[x+1]=w}},
gaF(d){var x,w=this.d
if(w.c>2){w=w.d[this.c+2]
x=$.iP
w=(x!=null?x:A.jE())[w]}else w=0
return w},
saF(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=A.hP(e)
v.$flags&2&&B.K(v)
v[x+2]=w}},
gaU(d){var x,w=this.d
if(w.c>3){w=w.d[this.c+3]
x=$.iP
w=(x!=null?x:A.jE())[w]}else w=0
return w},
saU(d,e){var x,w,v,u=this.d
if(u.c>3){x=this.gaE()
u=u.d
w=this.c
v=A.hP(x)
u.$flags&2&&B.K(u)
u[w+3]=v}},
gj9(){return this.gar(0)/1},
sj9(d){this.sar(0,d)},
giT(){return this.gaE()/1},
siT(d){this.saE(d)},
gj1(){return this.gaF(0)/1},
sj1(d){this.saF(0,d)},
gfS(){return this.gaU(0)/1},
sfS(d){this.saU(0,d)},
gkd(){return A.k9(this)},
je(d,e){var x=this
if(x.d.c>0){x.sar(0,e.gar(e))
x.saE(e.gaE())
x.saF(0,e.gaF(e))
x.saU(0,e.gaU(e))}},
le(d,e,f){var x,w,v=this,u=v.d,t=u.c
if(t>0){u=u.d
x=v.c
w=A.hP(d)
u.$flags&2&&B.K(u)
u[x]=w
if(t>1){u[v.c+1]=A.hP(e)
if(t>2)u[v.c+2]=A.hP(f)}}},
iV(d,e,f,g){var x,w,v=this,u=v.d,t=u.c
if(t>0){u=u.d
x=v.c
w=A.hP(d)
u.$flags&2&&B.K(u)
u[x]=w
if(t>1){u[v.c+1]=A.hP(e)
if(t>2){u[v.c+2]=A.hP(f)
if(t>3)u[v.c+3]=A.hP(g)}}}},
gac(d){return new A.iA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LB){x=B.A(u,B.t(u).i("y.E"))
x=B.aS(x)
w=B.A(e,B.t(e).i("y.E"))
return x===B.aS(w)}if(y.L.b(e)){x=J.a_(e)
w=u.d
v=w.c
if(x.gA(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
p_(d){return A.r1(this,null,d,null,null)},
$ibQ:1,
$ie3:1,
$idc:1,
gfL(d){return this.d}}
A.LC.prototype={
ew(d){var x=this
return new A.LC(x.a,x.b,x.c,x.d)},
gA(d){return this.d.c},
gf8(){return null},
gcr(){return 1},
gdH(){return C.kR},
gnS(d){return this.a},
goE(d){return this.b},
hO(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
t(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
h(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
m(d,e,f){var x,w=this.d
if(e<w.c){w=w.d
x=this.c
w.$flags&2&&B.K(w)
w[x+e]=f}},
gdI(d){return this.gar(0)},
sdI(d,e){this.sar(0,e)},
gar(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sar(d,e){var x,w=this.d
if(w.c>0){w=w.d
x=this.c
w.$flags&2&&B.K(w)
w[x]=e}},
gaE(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saE(d){var x,w=this.d
if(w.c>1){w=w.d
x=this.c
w.$flags&2&&B.K(w)
w[x+1]=d}},
gaF(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saF(d,e){var x,w=this.d
if(w.c>2){w=w.d
x=this.c
w.$flags&2&&B.K(w)
w[x+2]=e}},
gaU(d){var x=this.d
return x.c>3?x.d[this.c+3]:1},
saU(d,e){var x,w=this.d
if(w.c>3){w=w.d
x=this.c
w.$flags&2&&B.K(w)
w[x+3]=e}},
gj9(){return this.gar(0)/1},
sj9(d){this.sar(0,d)},
giT(){return this.gaE()/1},
siT(d){this.saE(d)},
gj1(){return this.gaF(0)/1},
sj1(d){this.saF(0,d)},
gfS(){return this.gaU(0)/1},
sfS(d){this.saU(0,d)},
gkd(){return A.k9(this)},
je(d,e){var x=this
x.sar(0,e.gar(e))
x.saE(e.gaE())
x.saF(0,e.gaF(e))
x.saU(0,e.gaU(e))},
le(d,e,f){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.K(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
iV(d,e,f,g){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.K(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
gac(d){return new A.iA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LC){x=B.A(u,B.t(u).i("y.E"))
x=B.aS(x)
w=B.A(e,B.t(e).i("y.E"))
return x===B.aS(w)}if(y.L.b(e)){x=J.a_(e)
w=u.d
v=w.c
if(x.gA(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
p_(d){return A.r1(this,null,d,null,null)},
$ibQ:1,
$ie3:1,
$idc:1,
gfL(d){return this.d}}
A.LD.prototype={
ew(d){var x=this
return new A.LD(x.a,x.b,x.c,x.d)},
gA(d){return this.d.c},
gf8(){return null},
gcr(){return 1},
gdH(){return C.mx},
gnS(d){return this.a},
goE(d){return this.b},
hO(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
t(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
h(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
m(d,e,f){var x,w=this.d
if(e<w.c){w=w.d
x=this.c
w.$flags&2&&B.K(w)
w[x+e]=f}},
gdI(d){return this.gar(0)},
sdI(d,e){this.sar(0,e)},
gar(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sar(d,e){var x,w=this.d
if(w.c>0){w=w.d
x=this.c
w.$flags&2&&B.K(w)
w[x]=e}},
gaE(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saE(d){var x,w=this.d
if(w.c>1){w=w.d
x=this.c
w.$flags&2&&B.K(w)
w[x+1]=d}},
gaF(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saF(d,e){var x,w=this.d
if(w.c>2){w=w.d
x=this.c
w.$flags&2&&B.K(w)
w[x+2]=e}},
gaU(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saU(d,e){var x,w=this.d
if(w.c>3){w=w.d
x=this.c
w.$flags&2&&B.K(w)
w[x+3]=e}},
gj9(){return this.gar(0)/1},
sj9(d){this.sar(0,d)},
giT(){return this.gaE()/1},
siT(d){this.saE(d)},
gj1(){return this.gaF(0)/1},
sj1(d){this.saF(0,d)},
gfS(){return this.gaU(0)/1},
sfS(d){this.saU(0,d)},
gkd(){return A.k9(this)},
je(d,e){var x=this
x.sar(0,e.gar(e))
x.saE(e.gaE())
x.saF(0,e.gaF(e))
x.saU(0,e.gaU(e))},
le(d,e,f){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.K(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
iV(d,e,f,g){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.K(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
gac(d){return new A.iA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LD){x=B.A(u,B.t(u).i("y.E"))
x=B.aS(x)
w=B.A(e,B.t(e).i("y.E"))
return x===B.aS(w)}if(y.L.b(e)){x=J.a_(e)
w=u.d
v=w.c
if(x.gA(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
p_(d){return A.r1(this,null,d,null,null)},
$ibQ:1,
$ie3:1,
$idc:1,
gfL(d){return this.d}}
A.LE.prototype={
ew(d){var x=this
return new A.LE(x.a,x.b,x.c,x.d)},
gA(d){return this.d.c},
gf8(){return null},
gcr(){return 32767},
gdH(){return C.mz},
gnS(d){return this.a},
goE(d){return this.b},
hO(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
t(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
h(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.e.L(f)
v.$flags&2&&B.K(v)
v[x+e]=w}},
gdI(d){return this.gar(0)},
sdI(d,e){this.sar(0,e)},
gar(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sar(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.K(v)
v[x]=w}},
gaE(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saE(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.e.L(d)
v.$flags&2&&B.K(v)
v[x+1]=w}},
gaF(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saF(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.K(v)
v[x+2]=w}},
gaU(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saU(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.K(v)
v[x+3]=w}},
gj9(){return this.gar(0)/32767},
sj9(d){this.sar(0,d*32767)},
giT(){return this.gaE()/32767},
siT(d){this.saE(d*32767)},
gj1(){return this.gaF(0)/32767},
sj1(d){this.saF(0,d*32767)},
gfS(){return this.gaU(0)/32767},
sfS(d){this.saU(0,d*32767)},
gkd(){return A.k9(this)},
je(d,e){var x=this
x.sar(0,e.gar(e))
x.saE(e.gaE())
x.saF(0,e.gaF(e))
x.saU(0,e.gaU(e))},
le(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.K(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2)v[x+2]=D.c.L(f)}}},
iV(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.K(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2){v[x+2]=D.c.L(f)
if(u>3)v[x+3]=D.c.L(g)}}}},
gac(d){return new A.iA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LE){x=B.A(u,B.t(u).i("y.E"))
x=B.aS(x)
w=B.A(e,B.t(e).i("y.E"))
return x===B.aS(w)}if(y.L.b(e)){x=J.a_(e)
w=u.d
v=w.c
if(x.gA(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
p_(d){return A.r1(this,null,d,null,null)},
$ibQ:1,
$ie3:1,
$idc:1,
gfL(d){return this.d}}
A.LF.prototype={
ew(d){var x=this
return new A.LF(x.a,x.b,x.c,x.d)},
gA(d){return this.d.c},
gf8(){return null},
gcr(){return 2147483647},
gdH(){return C.mA},
gnS(d){return this.a},
goE(d){return this.b},
hO(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
t(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
h(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.e.L(f)
v.$flags&2&&B.K(v)
v[x+e]=w}},
gdI(d){return this.gar(0)},
sdI(d,e){this.sar(0,e)},
gar(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sar(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.K(v)
v[x]=w}},
gaE(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saE(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.e.L(d)
v.$flags&2&&B.K(v)
v[x+1]=w}},
gaF(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saF(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.K(v)
v[x+2]=w}},
gaU(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saU(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.K(v)
v[x+3]=w}},
gj9(){return this.gar(0)/2147483647},
sj9(d){this.sar(0,d*2147483647)},
giT(){return this.gaE()/2147483647},
siT(d){this.saE(d*2147483647)},
gj1(){return this.gaF(0)/2147483647},
sj1(d){this.saF(0,d*2147483647)},
gfS(){return this.gaU(0)/2147483647},
sfS(d){this.saU(0,d*2147483647)},
gkd(){return A.k9(this)},
je(d,e){var x=this
x.sar(0,e.gar(e))
x.saE(e.gaE())
x.saF(0,e.gaF(e))
x.saU(0,e.gaU(e))},
le(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.K(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2)v[x+2]=D.c.L(f)}}},
iV(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.K(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2){v[x+2]=D.c.L(f)
if(u>3)v[x+3]=D.c.L(g)}}}},
gac(d){return new A.iA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LF){x=B.A(u,B.t(u).i("y.E"))
x=B.aS(x)
w=B.A(e,B.t(e).i("y.E"))
return x===B.aS(w)}if(y.L.b(e)){x=J.a_(e)
w=u.d
v=w.c
if(x.gA(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
p_(d){return A.r1(this,null,d,null,null)},
$ibQ:1,
$ie3:1,
$idc:1,
gfL(d){return this.d}}
A.LG.prototype={
ew(d){var x=this
return new A.LG(x.a,x.b,x.c,x.d)},
gA(d){return this.d.c},
gf8(){return null},
gcr(){return 127},
gdH(){return C.my},
gnS(d){return this.a},
goE(d){return this.b},
hO(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
t(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
h(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.e.L(f)
v.$flags&2&&B.K(v)
v[x+e]=w}},
gdI(d){return this.gar(0)},
sdI(d,e){this.sar(0,e)},
gar(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sar(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.K(v)
v[x]=w}},
gaE(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saE(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.e.L(d)
v.$flags&2&&B.K(v)
v[x+1]=w}},
gaF(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saF(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.K(v)
v[x+2]=w}},
gaU(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saU(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.K(v)
v[x+3]=w}},
gj9(){return this.gar(0)/127},
sj9(d){this.sar(0,d*127)},
giT(){return this.gaE()/127},
siT(d){this.saE(d*127)},
gj1(){return this.gaF(0)/127},
sj1(d){this.saF(0,d*127)},
gfS(){return this.gaU(0)/127},
sfS(d){this.saU(0,d*127)},
gkd(){return A.k9(this)},
je(d,e){var x=this
x.sar(0,e.gar(e))
x.saE(e.gaE())
x.saF(0,e.gaF(e))
x.saU(0,e.gaU(e))},
le(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.K(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2)v[x+2]=D.c.L(f)}}},
iV(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.K(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2){v[x+2]=D.c.L(f)
if(u>3)v[x+3]=D.c.L(g)}}}},
gac(d){return new A.iA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LG){x=B.A(u,B.t(u).i("y.E"))
x=B.aS(x)
w=B.A(e,B.t(e).i("y.E"))
return x===B.aS(w)}if(y.L.b(e)){x=J.a_(e)
w=u.d
v=w.c
if(x.gA(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
p_(d){return A.r1(this,null,d,null,null)},
$ibQ:1,
$ie3:1,
$idc:1,
gfL(d){return this.d}}
A.aCX.prototype={
t(){var x=this,w=x.a
if(w.gnS(w)+1>x.d){w.hO(0,x.b,w.goE(w)+1)
return w.goE(w)<=x.e}return w.t()},
gM(d){return this.a},
$ibQ:1}
A.LH.prototype={
ew(d){var x=this
return new A.LH(x.a,x.b,x.c,x.d,x.e,x.f)},
gA(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
gf8(){return this.f.f},
gcr(){return this.f.gcr()},
gdH(){return C.hE},
gnS(d){return this.a},
goE(d){return this.b},
hO(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.f
w=f*x.e
v.e=w
x=e*x.c
v.c=w+D.c.Z(x,3)
v.d=x&7},
gM(d){return this},
t(){var x,w=this,v=++w.a,u=w.f
if(v===u.a){w.a=0
v=++w.b
w.d=0;++w.c
w.e=w.e+u.e
return v<u.b}x=u.c
if(u.f!=null||x===1){if(++w.d>7){w.d=0;++w.c}}else{v*=x
w.d=v&7
w.c=w.e+D.c.Z(v,3)}v=w.c
u=u.d
u===$&&B.b()
return v<u.byteLength},
aai(d,e){var x,w=this.c,v=7-(this.d+e)
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
if(w>=x.length)return 0
return D.c.hs(x[w],v)&1},
qq(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.aai(0,d):0
else x=w.nf(0,this.aai(0,0),d)
return x},
ll(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=7-(this.d+d)
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.aM(D.e.L(e),0,1)
s=C.aJU[w]
v=D.c.f9(t,w)
r=r.d
r.$flags&2&&B.K(r)
r[x]=(u&s|v)>>>0},
h(d,e){return this.qq(e)},
m(d,e,f){return this.ll(e,f)},
gdI(d){return this.aai(0,0)},
sdI(d,e){this.ll(0,e)},
gar(d){return this.qq(0)},
sar(d,e){this.ll(0,e)},
gaE(){return this.qq(1)},
saE(d){this.ll(1,d)},
gaF(d){return this.qq(2)},
saF(d,e){this.ll(2,e)},
gaU(d){return this.qq(3)},
saU(d,e){this.ll(3,e)},
gj9(){return this.qq(0)/this.f.gcr()},
sj9(d){this.ll(0,d*this.f.gcr())},
giT(){return this.qq(1)/this.f.gcr()},
siT(d){this.ll(1,d*this.f.gcr())},
gj1(){return this.qq(2)/this.f.gcr()},
sj1(d){this.ll(2,d*this.f.gcr())},
gfS(){return this.qq(3)/this.f.gcr()},
sfS(d){this.ll(3,d*this.f.gcr())},
gkd(){return A.k9(this)},
je(d,e){var x=this
x.ll(0,e.gar(e))
x.ll(1,e.gaE())
x.ll(2,e.gaF(e))
x.ll(3,e.gaU(e))},
le(d,e,f){var x=this,w=x.f.c
if(w>0){x.ll(0,d)
if(w>1){x.ll(1,e)
if(w>2)x.ll(2,f)}}},
iV(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.ll(0,d)
if(w>1){x.ll(1,e)
if(w>2){x.ll(2,f)
if(w>3)x.ll(3,g)}}}},
gac(d){return new A.iA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LH){x=B.A(u,B.t(u).i("y.E"))
x=B.aS(x)
w=B.A(e,B.t(e).i("y.E"))
return x===B.aS(w)}if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a_(e)
if(x.gA(e)!==v)return!1
if(u.qq(0)!==x.h(e,0))return!1
if(v>1){if(u.qq(1)!==x.h(e,1))return!1
if(v>2){if(u.qq(2)!==x.h(e,2))return!1
if(v>3)if(u.qq(3)!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
p_(d){return A.r1(this,null,d,null,null)},
$ibQ:1,
$ie3:1,
$idc:1,
gfL(d){return this.f}}
A.LI.prototype={
ew(d){var x=this
return new A.LI(x.a,x.b,x.c,x.d)},
gA(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
gf8(){return this.d.e},
gcr(){return this.d.gcr()},
gdH(){return C.cV},
gnS(d){return this.a},
goE(d){return this.b},
hO(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
t(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c
x+=v.e==null?v.c:1
w.c=x
return x<v.d.length},
hI(d,e){var x=this.d,w=x.e
if(w!=null)x=w.nf(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
h(d,e){return this.hI(0,e)},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.e.L(f)
v.$flags&2&&B.K(v)
v[x+e]=w}},
gdI(d){return this.gar(0)},
sdI(d,e){this.sar(0,e)},
gar(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.nX(x.d[this.c])
return x},
sar(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.K(v)
v[x]=w}},
gaE(){var x=this.d,w=x.e
if(w==null)x=x.c>1?x.d[this.c+1]:0
else x=w.nV(x.d[this.c])
return x},
saE(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.e.L(d)
v.$flags&2&&B.K(v)
v[x+1]=w}},
gaF(d){var x=this.d,w=x.e
if(w==null)x=x.c>2?x.d[this.c+2]:0
else x=w.nT(x.d[this.c])
return x},
saF(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.K(v)
v[x+2]=w}},
gaU(d){var x=this.d,w=x.e
if(w==null)x=x.c>3?x.d[this.c+3]:0
else x=w.pt(x.d[this.c])
return x},
saU(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.K(v)
v[x+3]=w}},
gj9(){return this.gar(0)/this.d.gcr()},
sj9(d){this.sar(0,d*this.d.gcr())},
giT(){return this.gaE()/this.d.gcr()},
siT(d){this.saE(d*this.d.gcr())},
gj1(){return this.gaF(0)/this.d.gcr()},
sj1(d){this.saF(0,d*this.d.gcr())},
gfS(){return this.gaU(0)/this.d.gcr()},
sfS(d){this.saU(0,d*this.d.gcr())},
gkd(){return A.k9(this)},
je(d,e){var x=this
x.sar(0,e.gar(e))
x.saE(e.gaE())
x.saF(0,e.gaF(e))
x.saU(0,e.gaU(e))},
le(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.K(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2)v[x+2]=D.c.L(f)}}},
iV(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.K(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2){v[x+2]=D.c.L(f)
if(u>3)v[x+3]=D.c.L(g)}}}},
gac(d){return new A.iA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LI){x=B.A(u,B.t(u).i("y.E"))
x=B.aS(x)
w=B.A(e,B.t(e).i("y.E"))
return x===B.aS(w)}if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a_(e)
if(x.gA(e)!==v)return!1
if(u.hI(0,0)!==x.h(e,0))return!1
if(v>1){if(u.hI(0,1)!==x.h(e,1))return!1
if(v>2){if(u.hI(0,2)!==x.h(e,2))return!1
if(v>3)if(u.hI(0,3)!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
p_(d){return A.r1(this,null,d,null,null)},
$ibQ:1,
$ie3:1,
$idc:1,
gfL(d){return this.d}}
A.LJ.prototype={
ew(d){var x=this
return new A.LJ(x.a,x.b,x.c,x.d,x.e,x.f)},
gA(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
gf8(){return this.f.f},
gcr(){return this.f.gcr()},
gdH(){return C.it},
gaDP(){var x=this.f
return x.f!=null?2:x.c<<1>>>0},
gnS(d){return this.a},
goE(d){return this.b},
hO(d,e,f){var x,w,v,u=this
u.a=e
u.b=f
x=u.gaDP()
w=u.b*u.f.e
u.e=w
v=u.a*x
u.c=w+D.c.Z(v,3)
u.d=v&7},
gM(d){return this},
t(){var x,w,v=this,u=v.f
if(++v.a===u.a){v.a=0
x=++v.b
v.d=0;++v.c
v.e=v.e+u.e
return x<u.b}if(u.f!=null||u.c===1){if((v.d+=2)>7){v.d=0;++v.c}}else{w=v.gaDP()
x=v.a*w
v.d=x&7
v.c=v.e+D.c.Z(x,3)}x=v.c
u=u.d
u===$&&B.b()
return x<u.length},
aaj(d,e){var x,w=this.c,v=6-(this.d+(e<<1>>>0))
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
return D.c.hs(x[w],v)&3},
qr(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.aaj(0,d):0
else x=w.nf(0,this.aaj(0,0),d)
return x},
lm(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=6-(this.d+(d<<1>>>0))
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.aM(D.e.L(e),0,3)
s=C.aEb[D.c.Z(w,1)]
v=D.c.f9(t,w)
r=r.d
r.$flags&2&&B.K(r)
r[x]=(u&s|v)>>>0},
h(d,e){return this.qr(e)},
m(d,e,f){return this.lm(e,f)},
gdI(d){return this.aaj(0,0)},
sdI(d,e){this.lm(0,e)},
gar(d){return this.qr(0)},
sar(d,e){this.lm(0,e)},
gaE(){return this.qr(1)},
saE(d){this.lm(1,d)},
gaF(d){return this.qr(2)},
saF(d,e){this.lm(2,e)},
gaU(d){return this.qr(3)},
saU(d,e){this.lm(3,e)},
gj9(){return this.qr(0)/this.f.gcr()},
sj9(d){this.lm(0,d*this.f.gcr())},
giT(){return this.qr(1)/this.f.gcr()},
siT(d){this.lm(1,d*this.f.gcr())},
gj1(){return this.qr(2)/this.f.gcr()},
sj1(d){this.lm(2,d*this.f.gcr())},
gfS(){return this.qr(3)/this.f.gcr()},
sfS(d){this.lm(3,d*this.f.gcr())},
gkd(){return A.k9(this)},
je(d,e){var x=this
x.lm(0,e.gar(e))
x.lm(1,e.gaE())
x.lm(2,e.gaF(e))
x.lm(3,e.gaU(e))},
le(d,e,f){var x=this,w=x.f.c
if(w>0){x.lm(0,d)
if(w>1){x.lm(1,e)
if(w>2)x.lm(2,f)}}},
iV(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.lm(0,d)
if(w>1){x.lm(1,e)
if(w>2){x.lm(2,f)
if(w>3)x.lm(3,g)}}}},
gac(d){return new A.iA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LJ){x=B.A(u,B.t(u).i("y.E"))
x=B.aS(x)
w=B.A(e,B.t(e).i("y.E"))
return x===B.aS(w)}if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a_(e)
if(x.gA(e)!==v)return!1
if(u.qr(0)!==x.h(e,0))return!1
if(v>1){if(u.qr(1)!==x.h(e,1))return!1
if(v>2){if(u.qr(2)!==x.h(e,2))return!1
if(v>3)if(u.qr(3)!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
p_(d){return A.r1(this,null,d,null,null)},
$ibQ:1,
$ie3:1,
$idc:1,
gfL(d){return this.f}}
A.LK.prototype={
ew(d){var x=this
return new A.LK(x.a,x.b,x.c,x.d)},
gA(d){return this.d.c},
gf8(){return null},
gcr(){return 4294967295},
gdH(){return C.kS},
gnS(d){return this.a},
goE(d){return this.b},
hO(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
t(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
h(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.e.L(f)
v.$flags&2&&B.K(v)
v[x+e]=w}},
gdI(d){return this.gar(0)},
sdI(d,e){this.sar(0,e)},
gar(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sar(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.K(v)
v[x]=w}},
gaE(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saE(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.e.L(d)
v.$flags&2&&B.K(v)
v[x+1]=w}},
gaF(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saF(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.K(v)
v[x+2]=w}},
gaU(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saU(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.K(v)
v[x+3]=w}},
gj9(){return this.gar(0)/4294967295},
sj9(d){this.sar(0,d*4294967295)},
giT(){return this.gaE()/4294967295},
siT(d){this.saE(d*4294967295)},
gj1(){return this.gaF(0)/4294967295},
sj1(d){this.saF(0,d*4294967295)},
gfS(){return this.gaU(0)/4294967295},
sfS(d){this.saU(0,d*4294967295)},
gkd(){return A.k9(this)},
je(d,e){var x=this
x.sar(0,e.gar(e))
x.saE(e.gaE())
x.saF(0,e.gaF(e))
x.saU(0,e.gaU(e))},
le(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.K(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2)v[x+2]=D.c.L(f)}}},
iV(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.K(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2){v[x+2]=D.c.L(f)
if(u>3)v[x+3]=D.c.L(g)}}}},
gac(d){return new A.iA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LK){x=B.A(u,B.t(u).i("y.E"))
x=B.aS(x)
w=B.A(e,B.t(e).i("y.E"))
return x===B.aS(w)}if(y.L.b(e)){x=J.a_(e)
w=u.d
v=w.c
if(x.gA(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
p_(d){return A.r1(this,null,d,null,null)},
$ibQ:1,
$ie3:1,
$idc:1,
gfL(d){return this.d}}
A.LL.prototype={
ew(d){var x=this
return new A.LL(x.a,x.b,x.c,x.d,x.e)},
gA(d){var x=this.e,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
gf8(){return this.e.f},
gcr(){return this.e.gcr()},
gdH(){return C.iu},
gnS(d){return this.a},
goE(d){return this.b},
hO(d,e,f){var x,w,v,u=this
u.a=e
u.b=f
x=u.e
w=x.c*4
v=x.e
if(w===4)x=f*v+D.c.Z(e,1)
else if(w===8)x=f*x.a+e
else{x=f*v
x=w===16?x+(e<<1>>>0):x+D.c.Z(e*w,3)}u.c=x
x=e*w
u.d=w>7?x&4:x&7},
gM(d){return this},
t(){var x,w,v,u=this,t=u.e
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
aak(d,e){var x,w=this.c,v=4-(this.d+(e<<2>>>0))
if(v<0){v+=8;++w}x=this.e.d
x===$&&B.b()
return D.c.hs(x[w],v)&15},
qo(d){var x=this.e,w=x.f
if(w==null)x=x.c>d?this.aak(0,d):0
else x=w.nf(0,this.aak(0,0),d)
return x},
ln(d,e){var x,w,v,u,t,s,r=this.e
if(d>=r.c)return
x=this.c
w=4-(this.d+(d<<2>>>0))
if(w<0){w+=8;++x}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.aM(D.e.L(e),0,15)
s=w===4?15:240
v=D.c.f9(t,w)
r=r.d
r.$flags&2&&B.K(r)
r[x]=(u&s|v)>>>0},
h(d,e){return this.qo(e)},
m(d,e,f){return this.ln(e,f)},
gdI(d){return this.aak(0,0)},
sdI(d,e){this.ln(0,e)},
gar(d){return this.qo(0)},
sar(d,e){this.ln(0,e)},
gaE(){return this.qo(1)},
saE(d){this.ln(1,d)},
gaF(d){return this.qo(2)},
saF(d,e){this.ln(2,e)},
gaU(d){return this.qo(3)},
saU(d,e){this.ln(3,e)},
gj9(){return this.qo(0)/this.e.gcr()},
sj9(d){this.ln(0,d*this.e.gcr())},
giT(){return this.qo(1)/this.e.gcr()},
siT(d){this.ln(1,d*this.e.gcr())},
gj1(){return this.qo(2)/this.e.gcr()},
sj1(d){this.ln(2,d*this.e.gcr())},
gfS(){return this.qo(3)/this.e.gcr()},
sfS(d){this.ln(3,d*this.e.gcr())},
gkd(){return A.k9(this)},
je(d,e){var x=this
x.ln(0,e.gar(e))
x.ln(1,e.gaE())
x.ln(2,e.gaF(e))
x.ln(3,e.gaU(e))},
le(d,e,f){var x=this,w=x.e.c
if(w>0){x.ln(0,d)
if(w>1){x.ln(1,e)
if(w>2)x.ln(2,f)}}},
iV(d,e,f,g){var x=this,w=x.e.c
if(w>0){x.ln(0,d)
if(w>1){x.ln(1,e)
if(w>2){x.ln(2,f)
if(w>3)x.ln(3,g)}}}},
gac(d){return new A.iA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LL){x=B.A(u,B.t(u).i("y.E"))
x=B.aS(x)
w=B.A(e,B.t(e).i("y.E"))
return x===B.aS(w)}if(y.L.b(e)){v=u.e.c
x=J.a_(e)
if(x.gA(e)!==v)return!1
if(u.qo(0)!==x.h(e,0))return!1
if(v>1){if(u.qo(1)!==x.h(e,1))return!1
if(v>2){if(u.qo(2)!==x.h(e,2))return!1
if(v>3)if(u.qo(3)!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
p_(d){return A.r1(this,null,d,null,null)},
$ibQ:1,
$ie3:1,
$idc:1,
gfL(d){return this.e}}
A.LM.prototype={
ew(d){var x=this
return new A.LM(x.a,x.b,x.c,x.d)},
gA(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
gf8(){return this.d.e},
gcr(){return this.d.gcr()},
gdH(){return C.aj},
gnS(d){return this.a},
goE(d){return this.b},
hO(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
t(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c
x+=v.e==null?v.c:1
w.c=x
return x<v.d.length},
hI(d,e){var x=this.d,w=x.e
if(w!=null)x=w.nf(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
h(d,e){return this.hI(0,e)},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.e.L(D.e.aM(f,0,255))
v.$flags&2&&B.K(v)
v[x+e]=w}},
gdI(d){return this.d.d[this.c]},
sdI(d,e){var x=this.d.d,w=this.c,v=D.e.L(D.e.aM(e,0,255))
x.$flags&2&&B.K(x)
x[w]=v},
gar(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.nX(x.d[this.c])
return x},
sar(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.e.L(D.e.aM(e,0,255))
v.$flags&2&&B.K(v)
v[x]=w}},
gaE(){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>1?w.d[x.c+1]:0}else w=v.nV(w.d[x.c])
return w},
saE(d){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.e.L(D.e.aM(d,0,255))
w.$flags&2&&B.K(w)
w[v]=x}else if(v>1){w=w.d
v=this.c
x=D.e.L(D.e.aM(d,0,255))
w.$flags&2&&B.K(w)
w[v+1]=x}},
gaF(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>2?w.d[x.c+2]:0}else w=v.nT(w.d[x.c])
return w},
saF(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.e.L(D.e.aM(e,0,255))
w.$flags&2&&B.K(w)
w[v]=x}else if(v>2){w=w.d
v=this.c
x=D.e.L(D.e.aM(e,0,255))
w.$flags&2&&B.K(w)
w[v+2]=x}},
gaU(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c+1]
else w=v>3?w.d[x.c+3]:255}else w=v.pt(w.d[x.c])
return w},
saU(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.e.L(D.e.aM(e,0,255))
w.$flags&2&&B.K(w)
w[v+1]=x}else if(v>3){w=w.d
v=this.c
x=D.e.L(D.e.aM(e,0,255))
w.$flags&2&&B.K(w)
w[v+3]=x}},
gj9(){return this.gar(0)/this.d.gcr()},
sj9(d){this.sar(0,d*this.d.gcr())},
giT(){return this.gaE()/this.d.gcr()},
siT(d){this.saE(d*this.d.gcr())},
gj1(){return this.gaF(0)/this.d.gcr()},
sj1(d){this.saF(0,d*this.d.gcr())},
gfS(){return this.gaU(0)/this.d.gcr()},
sfS(d){this.saU(0,d*this.d.gcr())},
gkd(){return this.d.c===2?this.gar(0):A.k9(this)},
je(d,e){var x=this
if(x.d.e!=null)x.sdI(0,e.gdI(e))
else{x.sar(0,e.gar(e))
x.saE(e.gaE())
x.saF(0,e.gaF(e))
x.saU(0,e.gaU(e))}},
le(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.K(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2)v[x+2]=D.c.L(f)}}},
iV(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.K(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2){v[x+2]=D.c.L(f)
if(u>3)v[x+3]=D.c.L(g)}}}},
gac(d){return new A.iA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LM){x=B.A(u,B.t(u).i("y.E"))
x=B.aS(x)
w=B.A(e,B.t(e).i("y.E"))
return x===B.aS(w)}if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a_(e)
if(x.gA(e)!==v)return!1
if(u.hI(0,0)!==x.h(e,0))return!1
if(v>1){if(u.hI(0,1)!==x.h(e,1))return!1
if(v>2){if(u.hI(0,2)!==x.h(e,2))return!1
if(v>3)if(u.hI(0,3)!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("y.E"))
return B.aS(x)},
p_(d){return A.r1(this,null,d,null,null)},
$ibQ:1,
$ie3:1,
$idc:1,
gfL(d){return this.d}}
A.h_.prototype={
ew(d){return new A.h_()},
gfL(d){return $.diz()},
gnS(d){return 0},
goE(d){return 0},
gA(d){return 0},
gcr(){return 0},
gdH(){return C.aj},
gf8(){return null},
h(d,e){return 0},
m(d,e,f){},
gdI(d){return 0},
sdI(d,e){},
gar(d){return 0},
sar(d,e){},
gaE(){return 0},
saE(d){},
gaF(d){return 0},
saF(d,e){},
gaU(d){return 0},
saU(d,e){},
gj9(){return 0},
sj9(d){},
giT(){return 0},
siT(d){},
gj1(){return 0},
sj1(d){},
gfS(){return 0},
sfS(d){},
gkd(){return 0},
je(d,e){},
le(d,e,f){},
iV(d,e,f,g){},
hO(d,e,f){},
gM(d){return this},
t(){return!1},
k(d,e){if(e==null)return!1
return e instanceof A.h_},
gv(d){return 0},
gac(d){return new A.iA(this)},
p_(d){return this},
$ibQ:1,
$ie3:1,
$idc:1}
A.bog.prototype={
J(){return"FlipDirection."+this.b}}
A.axC.prototype={
j(d){return"ImageException: "+this.a},
$ibj:1}
A.nn.prototype={
gA(d){return this.c-this.d},
h(d,e){return J.v(this.a,this.d+e)},
m(d,e,f){J.bZ(this.a,this.d+e,f)
return f},
tk(d,e,f,g){var x=this.a,w=J.cT(x),v=this.d+d
if(f instanceof A.nn)w.ej(x,v,v+e,f.a,f.d+g)
else w.ej(x,v,v+e,y.L.a(f),g)},
AZ(d,e,f){return this.tk(d,e,f,0)},
bSl(d,e,f){var x=this.a,w=this.d+d
J.vg(x,w,w+e,f)},
a5X(d,e,f){var x=this,w=f!=null?x.b+f:x.d
return A.de(x.a,x.e,d,w+e)},
jS(d){return this.a5X(d,0,null)},
C2(d,e){return this.a5X(d,0,e)},
UX(d,e){return this.a5X(d,e,null)},
cA(d,e){var x=this.d,w=x+(this.c-x)
for(;x<w;++x)J.v(this.a,x)
return-1},
cE(){return J.v(this.a,this.d++)},
jN(d){var x=this.jS(d)
this.d=this.d+(x.c-x.d)
return x},
jO(d){var x,w,v,u,t,s=this
if(d==null){x=B.a([],y.t)
for(w=s.c;v=s.d,v<w;){u=s.a
s.d=v+1
t=J.v(u,v)
if(t===0)return B.fr(x,0,null)
x.push(t)}throw B.p(A.co("EOF reached without finding string terminator (length: "+B.o(d)+")"))}return B.fr(s.jN(d).ik(),0,null)},
SI(){return this.jO(null)},
aMd(d){var x,w,v,u,t=this,s=B.a([],y.t)
for(x=t.c;w=t.d,w<x;){v=t.a
t.d=w+1
u=J.v(v,w)
s.push(u)
if(u===10||s.length>=d)return B.fr(s,0,null)}return B.fr(s,0,null)},
bXf(){return this.aMd(256)},
bXg(){var x,w,v,u,t=this,s=B.a([],y.t)
for(x=t.c;w=t.d,w<x;){v=t.a
t.d=w+1
u=J.v(v,w)
if(u===0)return new B.HY(!0).Gr(s,0,null,!0)
s.push(u)}return D.aD.DM(0,s,!0)},
av(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255
if(x.e)return w<<8|v
return v<<8|w},
tu(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255
if(x.e)return u|v<<8|w<<16
return w|v<<8|u<<16},
ag(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255,t=J.v(x.a,x.d++)&255
if(x.e)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
a3x(){return A.dVU(this.aix())},
aix(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255,t=J.v(x.a,x.d++)&255,s=J.v(x.a,x.d++)&255,r=J.v(x.a,x.d++)&255,q=J.v(x.a,x.d++)&255,p=J.v(x.a,x.d++)&255
if(x.e)return(D.c.ez(w,56)|D.c.ez(v,48)|D.c.ez(u,40)|D.c.ez(t,32)|s<<24|r<<16|q<<8|p)>>>0
return(D.c.ez(p,56)|D.c.ez(q,48)|D.c.ez(r,40)|D.c.ez(s,32)|t<<24|u<<16|v<<8|w)>>>0},
KW(d,e,f){var x,w=this,v=w.a
if(y.D.b(v))return w.aNf(e,f)
x=w.b+w.d+e
return J.cUj(v,x,f<=0?w.c:x+f)},
eH(d){return this.KW(0,0,0)},
aNf(d,e){var x,w=this,v=e==null?w.c-w.d-d:e,u=w.a
if(y.D.b(u))return J.dx(D.H.gaq(u),u.byteOffset+w.d+d,v)
x=w.d+d
x=J.cUj(u,x,x+v)
return new Uint8Array(B.c9(x))},
ik(){return this.aNf(0,null)},
T1(){var x=this.a
if(y.D.b(x))return J.pV(D.H.gaq(x),x.byteOffset+this.d,null)
return J.pV(D.H.gaq(this.ik()),0,null)}}
A.bF3.prototype={
bDZ(d){var x=this
x.avd(d)
x.as7()
x.auV()
x.aqo()},
bot(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.c=Math.max(d,4)
n.f=m-n.d
n.r=m-1
x=D.e.aK(m,8)
n.w=x
n.x=x*256
n.Q=new A.a7e(new Uint32Array(1024),256,4)
n.a=new A.wh(new Uint8Array(768),256,3)
n.d=3
n.e=2
x=D.e.Z(m,3)
n.y=new Int32Array(x)
x=y.cb
n.z=B.c3(m*3,0,!1,x)
n.at=B.c3(n.c,0,!1,x)
x=n.ax=B.c3(n.c,0,!1,x)
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
aqo(){var x,w,v,u,t,s
for(x=0;x<this.c;++x){w=this.a
w===$&&B.b()
v=this.Q
v===$&&B.b()
u=v.b
t=2<u?v.c[x*u+2]:0
s=1<u?v.c[x*u+1]:0
v=0<u?v.c[x*u]:0
w.qh(x,Math.abs(t),Math.abs(s),Math.abs(v))}},
blJ(d,e,f){var x,w,v,u=this.as[e],t=u-1,s=this.c,r=this.Q,q=1000,p=-1
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
as7(){var x,w,v,u,t,s,r,q=this
for(x=0,w=0;x<q.c;++x){for(v=0;v<3;++v,++w){u=q.z
u===$&&B.b()
t=D.c.aM(D.e.L(0.5+u[w]),0,255)
u=q.Q
u===$&&B.b()
s=u.b
if(v<s){u=u.c
r=D.c.L(t)
u.$flags&2&&B.K(u)
u[x*s+v]=r}}u=q.Q
u===$&&B.b()
s=u.b
if(3<s){u=u.c
r=D.c.L(x)
u.$flags&2&&B.K(u)
u[x*s+3]=r}}},
auV(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
for(x=h.c,w=h.Q,v=h.as,u=v.$flags|0,t=0,s=0,r=0;r<x;r=n){w===$&&B.b()
q=w.b
p=1<q
o=p?w.c[r*q+1]:0
for(n=r+1,m=n,l=r;m<x;++m)if((p?w.c[m*q+1]:0)<o){o=p?w.c[m*q+1]:0
l=m}if(r!==l){k=0<q
m=k?w.c[l*q]:0
j=k?w.c[r*q]:0
if(k){i=w.c
j=D.c.L(j)
i.$flags&2&&B.K(i)
i[l*q]=j}if(k){k=w.c
j=D.c.L(m)
k.$flags&2&&B.K(k)
k[r*q]=j}m=p?w.c[l*q+1]:0
k=p?w.c[r*q+1]:0
if(p){j=w.c
k=D.c.L(k)
j.$flags&2&&B.K(j)
j[l*q+1]=k}if(p){p=w.c
k=D.c.L(m)
p.$flags&2&&B.K(p)
p[r*q+1]=k}p=2<q
m=p?w.c[l*q+2]:0
k=p?w.c[r*q+2]:0
if(p){j=w.c
k=D.c.L(k)
j.$flags&2&&B.K(j)
j[l*q+2]=k}if(p){p=w.c
k=D.c.L(m)
p.$flags&2&&B.K(p)
p[r*q+2]=k}p=3<q
m=p?w.c[l*q+3]:0
k=p?w.c[r*q+3]:0
if(p){j=w.c
k=D.c.L(k)
j.$flags&2&&B.K(j)
j[l*q+3]=k}if(p){p=w.c
k=D.c.L(m)
p.$flags&2&&B.K(p)
p[r*q+3]=k}}if(o!==t){u&2&&B.K(v)
v[t]=s+r>>>1
for(m=t+1;m<o;++m)v[m]=r
s=r
t=o}}x=h.r
x.toString
w=D.c.Z(s+x,1)
u&2&&B.K(v)
v[t]=w
for(n=t+1;n<256;++n)v[n]=x},
aBK(d,e){var x,w,v,u
for(x=this.y,w=d*d,v=0;v<d;++v){x===$&&B.b()
u=D.e.L(e*((w-v*v)*256/w))
x.$flags&2&&B.K(x)
x[v]=u}},
avd(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.x
a2===$&&B.b()
x=30+D.c.aK(a1.b-1,3)
w=a3.ge7(0)*a3.ge3(0)
v=D.c.hR(w,a1.b)
u=Math.max(D.c.aK(v,100),1)
if(u===0)u=1
t=D.c.Z(a2,8)
if(t<=1)t=0
a1.aBK(t,1024)
if(w<1509)s=a1.b=1
else if(D.c.au(w,499)!==0)s=499
else if(D.c.au(w,491)!==0)s=491
else s=D.c.au(w,487)!==0?487:503
r=a3.ge7(0)
q=a3.ge3(0)
for(p=a2,o=1024,n=0,m=0,l=0,k=0;k<v;){a2=a3.a
j=a2==null?null:a2.er(m,l,null)
if(j==null)j=new A.h_()
i=j.gar(j)
h=j.gaE()
g=j.gaF(j)
if(k===0){a2=a1.z
a2===$&&B.b()
f=a1.e
f===$&&B.b()
f*=3
a2[f]=g
a2[f+1]=h
a2[f+2]=i}e=a1.byX(g,h,i)
if(e<0)e=a1.b6z(g,h,i)
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
if(t>0)a1.b2R(d,t,e,g,h,i)}n+=s
m+=s
for(;m>r;){m-=r;++l}for(;n>=w;){n-=w
l-=q}++k
if(D.c.au(k,u)===0){o-=D.c.hR(o,x)
p-=D.c.aK(p,30)
t=D.c.Z(p,8)
if(t<=1)t=0
a1.aBK(t,o)}}},
b2R(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=f-e,j=l.d-1
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
b6z(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=1e30
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
byX(d,e,f){var x,w,v,u,t,s
for(x=this.d,w=this.z,v=0,u=0;v<x;++v){w===$&&B.b()
t=u+1
s=!1
if(w[u]===d){u=t+1
if(w[t]===e){t=u+1
s=w[u]===f
u=t}}else u=t
if(s)return v}return-1}}
A.aCl.prototype={
N(d){this.c=new Uint8Array(8192)
this.a=0},
be(d){var x,w,v=this
if(v.a===v.c.length)v.bax()
x=v.c
w=v.a++
x.$flags&2&&B.K(x)
x[w]=d&255},
mI(d){var x,w,v,u,t=this,s=J.bk(d)
for(;x=t.a,w=x+s,v=t.c,u=v.length,w>u;)t.arM(w-u)
D.H.hP(v,x,w,d)
t.a+=s},
lE(d){var x=this
if(x.b){x.be(D.c.Z(d,8)&255)
x.be(d&255)
return}x.be(d&255)
x.be(D.c.Z(d,8)&255)},
jx(d){var x=this
if(x.b){x.be(D.c.Z(d,24)&255)
x.be(D.c.Z(d,16)&255)
x.be(D.c.Z(d,8)&255)
x.be(d&255)
return}x.be(d&255)
x.be(D.c.Z(d,8)&255)
x.be(D.c.Z(d,16)&255)
x.be(D.c.Z(d,24)&255)},
c_C(d){var x,w=this,v=new Float32Array(1)
v[0]=d
x=J.dx(D.fR.gaq(v),0,null)
if(w.b){w.be(x[3])
w.be(x[2])
w.be(x[1])
w.be(x[0])
return}w.be(x[0])
w.be(x[1])
w.be(x[2])
w.be(x[3])},
c_D(d){var x,w=this,v=new Float64Array(1)
v[0]=d
x=J.dx(D.fe.gaq(v),0,null)
if(w.b){w.be(x[7])
w.be(x[6])
w.be(x[5])
w.be(x[4])
w.be(x[3])
w.be(x[2])
w.be(x[1])
w.be(x[0])
return}w.be(x[0])
w.be(x[1])
w.be(x[2])
w.be(x[3])
w.be(x[4])
w.be(x[5])
w.be(x[6])
w.be(x[7])},
arM(d){var x,w,v,u
if(d!=null)x=d
else{w=this.c.length
x=w===0?8192:w*2}w=this.c
v=w.length
u=new Uint8Array(v+x)
D.H.hP(u,0,v,w)
this.c=u},
bax(){return this.arM(null)},
gA(d){return this.a}}
A.bJj.prototype={
aQg(d){var x,w,v,u,t,s,r=d.ge7(0),q=d.ge3(0),p=this.a
p===$&&B.b()
x=A.iQ(null,null,C.aj,0,C.bG,q,null,0,1,p,C.aj,r,!1)
r=x.a
w=r.gac(r)
w.t()
x.z=d.z
x.w=d.w
x.y=d.y
for(r=d.a,r=r.gac(r);r.t();){v=r.gM(r)
u=w.gM(w)
t=D.e.L(v.gar(v))
s=D.e.L(v.gaE())
u.m(0,0,this.blJ(D.e.L(v.gaF(v)),s,t))
w.t()}return x}}
A.pq.prototype={
L(d){var x=this.b
return x===0?0:D.c.hR(this.a,x)},
uS(d){var x=this.b
return x===0?0:this.a/x},
k(d,e){if(e==null)return!1
return e instanceof A.pq&&this.a===e.a&&this.b===e.b},
gv(d){return B.al(this.a,this.b,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
j(d){return""+this.a+"/"+this.b}}
A.bM7.prototype={
J(){return"RequestImageFormat."+this.b}}
A.bZz.prototype={}
var z=a.updateTypes(["~(nn)","m(tj,m,m)","m([m])","~(EQ,D<m>)","~(m,m,m,m,m,e0)","~(l,rz)","~(m)","~(m,l1)","EQ(m)"])
A.buG.prototype={
$0(){return A.cWf(this.a,this.b,"jpg",this.c)},
$S:224}
A.buH.prototype={
$0(){return A.cWf(this.a,this.b,"png",null)},
$S:224}
A.buJ.prototype={
$0(){return A.cWf(this.a,this.b,"webp",this.c)},
$S:224}
A.buy.prototype={
$2(d,e){var x=A.d5L(e)
this.a.a.m(0,d,x)
return x},
$S:z+5}
A.buz.prototype={
$2(d,e){var x=e.ew(0)
this.a.a.m(0,d,x)
return x},
$S:z+7}
A.buA.prototype={
$2(d,e){var x=A.d5L(e)
this.a.b.a.m(0,d,x)
return x},
$S:z+5}
A.b8q.prototype={
$4(d,e,f,g){var x,w,v=this,u=v.a
if(u.a<v.c){x=v.b.c&&v.d.ch!=null
w=v.e
if(x){x=v.d
w.iV(x.ch.nX(d),x.ch.nV(d),x.ch.nT(d),x.ch.pt(d))}else w.iV(d,e,f,g)
w.t();++u.a}},
$S:1146}
A.bn6.prototype={
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
$S:1147}
A.bxh.prototype={
$1(d){var x,w,v,u,t=this.b,s=t.cE(),r=t.cE()
t=this.a
if(!t.d.y.a4(0,s))throw B.p(A.co("Invalid Component in SOS block"))
x=t.d.y.h(0,s)
x.toString
w=D.c.Z(r,4)&15
v=r&15
u=t.z
if(w<u.length){u=u[w]
u.toString
x.w=u}t=t.y
if(v<t.length){t=t[v]
t.toString
x.x=t}return x},
$S:z+8}
A.bI6.prototype={
$1(d){return d!==""},
$S:17}
A.c2y.prototype={
$2(d,e){return(d|e<<16)>>>0},
$S:239}
A.bv8.prototype={
$4(d,e,f,g){var x=this.b
return d+this.a*(e-d+x*(d+g-f-e))+x*(f-d)},
$S:1148}
A.bv7.prototype={
$5(d,e,f,g,h){var x=-e,w=d*d
return f+0.5*(d*(x+g)+w*(2*e-5*f+4*g-h)+w*d*(x+3*f-3*g+h))},
$S:1149};(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_2u,v=a._static_1,u=a._instance_1u,t=a.installStaticTearOff
x(A.l1.prototype,"gyH",1,0,function(){return[0]},["$1","$0"],["jP","L"],2,0,0)
x(A.vX.prototype,"gyH",1,0,function(){return[0]},["$1","$0"],["jP","L"],2,0,0)
x(A.Az.prototype,"gyH",1,0,function(){return[0]},["$1","$0"],["jP","L"],2,0,0)
x(A.u_.prototype,"gyH",1,0,function(){return[0]},["$1","$0"],["jP","L"],2,0,0)
x(A.vZ.prototype,"gyH",1,0,function(){return[0]},["$1","$0"],["jP","L"],2,0,0)
x(A.y7.prototype,"gyH",1,0,function(){return[0]},["$1","$0"],["jP","L"],2,0,0)
x(A.Ay.prototype,"gyH",1,0,function(){return[0]},["$1","$0"],["jP","L"],2,0,0)
x(A.Ax.prototype,"gyH",1,0,function(){return[0]},["$1","$0"],["jP","L"],2,0,0)
x(A.w_.prototype,"gyH",1,0,function(){return[0]},["$1","$0"],["jP","L"],2,0,0)
var s
w(s=A.ayk.prototype,"gb7B","b7C",3)
w(s,"gb7E","b7F",3)
w(s,"gb7G","b7H",3)
w(s,"gb7v","b7w",3)
w(s,"gb7x","b7y",3)
v(A,"dWd","dGi",0)
v(A,"dW6","dGa",0)
v(A,"dW4","dG8",0)
v(A,"dWb","dGg",0)
v(A,"dWc","dGh",0)
v(A,"dWa","dGf",0)
v(A,"dW9","dGe",0)
v(A,"dW8","dGd",0)
v(A,"dWf","dGk",0)
v(A,"dWe","dGj",0)
v(A,"dW7","dGb",0)
v(A,"dW5","dG9",0)
v(A,"dWq","dGv",0)
v(A,"dWo","dGt",0)
v(A,"dWg","dGl",0)
v(A,"dWi","dGn",0)
v(A,"dWh","dGm",0)
v(A,"dWj","dGo",0)
v(A,"dWr","dGw",0)
v(A,"dWp","dGu",0)
v(A,"dWk","dGp",0)
v(A,"dWl","dGq",0)
v(A,"dWm","dGr",0)
v(A,"dWn","dGs",0)
u(A.acV.prototype,"gbti","btj",6)
u(A.ay5.prototype,"gbMC","bMD",6)
t(A,"d0f",3,null,["$3"],["dGx"],1,0)
t(A,"dWs",3,null,["$3"],["dGy"],1,0)
t(A,"dWx",3,null,["$3"],["dGD"],1,0)
t(A,"dWy",3,null,["$3"],["dGE"],1,0)
t(A,"dWz",3,null,["$3"],["dGF"],1,0)
t(A,"dWA",3,null,["$3"],["dGG"],1,0)
t(A,"dWB",3,null,["$3"],["dGH"],1,0)
t(A,"dWC",3,null,["$3"],["dGI"],1,0)
t(A,"dWD",3,null,["$3"],["dGJ"],1,0)
t(A,"dWE",3,null,["$3"],["dGK"],1,0)
t(A,"dWt",3,null,["$3"],["dGz"],1,0)
t(A,"dWu",3,null,["$3"],["dGA"],1,0)
t(A,"dWv",3,null,["$3"],["dGB"],1,0)
t(A,"dWw",3,null,["$3"],["dGC"],1,0)
t(A,"dWH",6,null,["$6"],["dGZ"],4,0)
t(A,"dWI",6,null,["$6"],["dH_"],4,0)
t(A,"dWG",6,null,["$6"],["dGY"],4,0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.H,[A.a49,A.c4h,A.c4i,A.bhF,A.v3,A.cm1,A.cGT,A.bvN,A.c4g,A.bw4,A.bGC,A.iA,A.vY,A.aQJ,A.auM,A.rz,A.l1,A.b8r,A.Iv,A.bho,A.bhn,A.blt,A.auO,A.bn3,A.auP,A.auQ,A.bn5,A.a30,A.aU3,A.a3E,A.a3F,A.awo,A.buh,A.axm,A.aqy,A.Kg,A.bxe,A.EQ,A.bxg,A.Y4,A.ayj,A.bxk,A.ayk,A.a7G,A.bI4,A.yy,A.Uw,A.bJ8,A.Uv,A.bJa,A.aDI,A.aDL,A.aDR,A.a84,A.Uz,A.aDQ,A.up,A.aIo,A.bXq,A.aIt,A.bXs,A.aIu,A.bXt,A.byX,A.c2l,A.acU,A.c2m,A.c2r,A.c2v,A.c2x,A.acT,A.c2w,A.c2n,A.Oa,A.aKf,A.aKh,A.aKg,A.aKi,A.acV,A.aKd,A.c2s,A.aKe,A.c3m,A.ada,A.ax9,A.a3M,A.aKI,A.a4d,A.bH5,A.aCX,A.axC,A.nn,A.bJj,A.aCl,A.pq,A.bZz])
w(A.cOP,A.c4h)
w(A.cOQ,A.c4i)
x(B.fu,[A.Xx,A.apy,A.b9T,A.p7,A.apj,A.ob,A.nd,A.RV,A.JC,A.vL,A.Sr,A.bxf,A.Ue,A.a7F,A.FE,A.aDb,A.FF,A.wo,A.pC,A.Nw,A.lL,A.uO,A.Ob,A.WZ,A.bue,A.awd,A.ay8,A.bog,A.bM7])
w(A.bw2,A.bw4)
w(A.aCn,A.bGC)
x(B.cV,[A.buG,A.buH,A.buJ])
x(B.y,[A.QC,A.QD,A.QE,A.QF,A.QG,A.QH,A.QK,A.QL,A.QM,A.QN,A.QO,A.zY,A.a0T,A.Ey,A.nl,A.LB,A.LC,A.LD,A.LE,A.LF,A.LG,A.LH,A.LI,A.LJ,A.LK,A.LL,A.LM,A.h_])
x(A.zY,[A.aqt,A.QI])
w(A.aqF,A.a0T)
w(A.RT,A.vY)
x(B.et,[A.buy,A.buz,A.buA,A.c2y])
x(A.l1,[A.vX,A.Et,A.Az,A.u_,A.vZ,A.y7,A.Ay,A.Ax,A.w_,A.Ev,A.Eu,A.Kp])
x(A.bho,[A.apn,A.bn4,A.brH,A.bug,A.ayi,A.aDa,A.bI5,A.bJ9,A.bJe,A.bWk,A.bXr,A.c3n])
x(B.cl,[A.b8q,A.bn6,A.bxh,A.bI6,A.bv8,A.bv7])
w(A.biF,A.apn)
w(A.bwd,A.bn3)
x(A.bwd,[A.ay0,A.bwe,A.bwf,A.bwg,A.ay2])
w(A.ay1,A.a30)
w(A.ay3,A.a3F)
w(A.buf,A.Iv)
x(A.Kg,[A.Kh,A.a4a])
x(A.blt,[A.bxi,A.bI2])
w(A.ay4,A.a7G)
w(A.bwi,A.bI4)
w(A.LQ,A.bhn)
x(A.yy,[A.aDG,A.aDH,A.aDJ,A.aDK,A.aDN,A.aDO])
x(A.Uw,[A.a81,A.aDM])
x(A.aDR,[A.Bk,A.nv])
w(A.ay5,A.acV)
w(A.ay6,A.ada)
w(A.ay7,A.aKI)
x(A.nl,[A.Sw,A.Sx,A.a4l,A.a4m,A.a4n,A.a4o,A.Sy,A.Sz,A.SA,A.SB,A.SC,A.SD])
x(A.bH5,[A.aCB,A.aCC,A.aCD,A.aCE,A.aCF,A.aCG,A.aCH,A.a7e,A.wh])
w(A.bF3,A.bJj)})()
B.cf(b.typeUniverse,JSON.parse('{"iA":{"bQ":["bc"]},"QC":{"e3":[],"y":["bc"],"y.E":"bc"},"QD":{"e3":[],"y":["bc"],"y.E":"bc"},"QE":{"e3":[],"y":["bc"],"y.E":"bc"},"QF":{"e3":[],"y":["bc"],"y.E":"bc"},"QG":{"e3":[],"y":["bc"],"y.E":"bc"},"QH":{"e3":[],"y":["bc"],"y.E":"bc"},"QK":{"e3":[],"y":["bc"],"y.E":"bc"},"QL":{"e3":[],"y":["bc"],"y.E":"bc"},"QM":{"e3":[],"y":["bc"],"y.E":"bc"},"QN":{"e3":[],"y":["bc"],"y.E":"bc"},"QO":{"e3":[],"y":["bc"],"y.E":"bc"},"zY":{"e3":[],"y":["bc"],"y.E":"bc"},"aqt":{"e3":[],"y":["bc"],"y.E":"bc"},"QI":{"e3":[],"y":["bc"],"y.E":"bc"},"a0T":{"e3":[],"y":["bc"],"y.E":"bc"},"aqF":{"e3":[],"y":["bc"],"y.E":"bc"},"vX":{"l1":[]},"Et":{"l1":[]},"Az":{"l1":[]},"u_":{"l1":[]},"vZ":{"l1":[]},"y7":{"l1":[]},"Ay":{"l1":[]},"Ax":{"l1":[]},"w_":{"l1":[]},"Ev":{"l1":[]},"Eu":{"l1":[]},"Kp":{"l1":[]},"ay1":{"a30":[]},"ay3":{"a3F":[]},"Kh":{"Kg":[]},"a4a":{"Kg":[]},"ay4":{"a7G":[]},"aDG":{"yy":[]},"aDH":{"yy":[]},"aDJ":{"yy":[]},"aDK":{"yy":[]},"aDN":{"yy":[]},"aDO":{"yy":[]},"a81":{"Uw":[]},"aDM":{"Uw":[]},"ay6":{"ada":[]},"Ey":{"y":["dc"],"y.E":"dc"},"nl":{"y":["dc"]},"Sw":{"nl":[],"y":["dc"],"y.E":"dc"},"Sx":{"nl":[],"y":["dc"],"y.E":"dc"},"a4l":{"nl":[],"y":["dc"],"y.E":"dc"},"a4m":{"nl":[],"y":["dc"],"y.E":"dc"},"a4n":{"nl":[],"y":["dc"],"y.E":"dc"},"a4o":{"nl":[],"y":["dc"],"y.E":"dc"},"Sy":{"nl":[],"y":["dc"],"y.E":"dc"},"Sz":{"nl":[],"y":["dc"],"y.E":"dc"},"SA":{"nl":[],"y":["dc"],"y.E":"dc"},"SB":{"nl":[],"y":["dc"],"y.E":"dc"},"SC":{"nl":[],"y":["dc"],"y.E":"dc"},"SD":{"nl":[],"y":["dc"],"y.E":"dc"},"LB":{"dc":[],"e3":[],"y":["bc"],"bQ":["dc"],"y.E":"bc"},"LC":{"dc":[],"e3":[],"y":["bc"],"bQ":["dc"],"y.E":"bc"},"LD":{"dc":[],"e3":[],"y":["bc"],"bQ":["dc"],"y.E":"bc"},"LE":{"dc":[],"e3":[],"y":["bc"],"bQ":["dc"],"y.E":"bc"},"LF":{"dc":[],"e3":[],"y":["bc"],"bQ":["dc"],"y.E":"bc"},"LG":{"dc":[],"e3":[],"y":["bc"],"bQ":["dc"],"y.E":"bc"},"aCX":{"bQ":["dc"]},"LH":{"dc":[],"e3":[],"y":["bc"],"bQ":["dc"],"y.E":"bc"},"LI":{"dc":[],"e3":[],"y":["bc"],"bQ":["dc"],"y.E":"bc"},"LJ":{"dc":[],"e3":[],"y":["bc"],"bQ":["dc"],"y.E":"bc"},"LK":{"dc":[],"e3":[],"y":["bc"],"bQ":["dc"],"y.E":"bc"},"LL":{"dc":[],"e3":[],"y":["bc"],"bQ":["dc"],"y.E":"bc"},"LM":{"dc":[],"e3":[],"y":["bc"],"bQ":["dc"],"y.E":"bc"},"h_":{"dc":[],"e3":[],"y":["bc"],"bQ":["dc"],"y.E":"bc"},"axC":{"bj":[]},"dc":{"e3":[],"bQ":["dc"],"y":["bc"]}}'))
B.xd(b.typeUniverse,JSON.parse('{"aDR":1}'))
var y=(function rtii(){var x=B.F
return{G:x("e3"),n:x("auO"),W:x("auQ"),z:x("av7"),R:x("a3M"),x:x("ax9"),Y:x("axm"),P:x("rz"),r:x("l1"),I:x("nl"),h:x("a4T"),E:x("u<aqy>"),Q:x("u<auP>"),m:x("u<a30>"),b:x("u<a3F>"),A:x("u<a3M>"),g:x("u<Ey>"),M:x("u<D<D<D<m>>>>"),o:x("u<D<D<m>>>"),S:x("u<D<m>>"),d:x("u<a7G>"),X:x("u<Uv>"),u:x("u<yy>"),l:x("u<aDL>"),j:x("u<pq>"),T:x("u<l>"),_:x("u<aIu>"),a:x("u<e0>"),q:x("u<Oa>"),F:x("u<aKe>"),J:x("u<ada>"),v:x("u<aQJ>"),C:x("u<Y4>"),t:x("u<m>"),aH:x("u<Kg?>"),cB:x("u<ayj?>"),cQ:x("u<D<m>?>"),w:x("u<tj?>"),e:x("u<e0?>"),y:x("u<~(nn)>"),c:x("EQ"),bp:x("D<a4T>"),f:x("D<D<m>>"),k:x("D<pq>"),cm:x("D<acT>"),K:x("D<Oa>"),H:x("D<T>"),L:x("D<m>"),c0:x("dc"),aG:x("Uv"),a2:x("aDI"),cK:x("a81"),O:x("Uw"),ab:x("a84"),aM:x("Uz"),i:x("pq"),N:x("l"),aL:x("aIt"),bk:x("tj"),D:x("e0"),V:x("acT"),bQ:x("aKf"),bl:x("aKg"),bt:x("aKi"),U:x("a7<l>"),bc:x("aU3"),cb:x("T"),p:x("m"),a7:x("axX?"),cl:x("D<m>?"),bT:x("D<Kg?>?"),ac:x("e0?"),ak:x("acU?"),B:x("Oa?"),Z:x("aKh?"),s:x("m?")}})();(function constants(){var x=a.makeConstList
C.BR=new A.apj(0,"direct")
C.BS=new A.apj(1,"alpha")
C.KQ=new A.nd(0,"none")
C.BT=new A.nd(3,"bitfields")
C.BU=new A.nd(6,"alphaBitfields")
C.rh=new A.apy(0,"littleEndian")
C.or=new A.apy(1,"bigEndian")
C.kE=new A.c4g()
C.anz=new A.cOP()
C.Ly=new A.cOQ()
C.LE=new A.b9T(4,"luminance")
C.CT=new A.aqF(4294967295)
C.axL=new A.JC(0,"red")
C.axM=new A.JC(1,"green")
C.axN=new A.JC(2,"blue")
C.axO=new A.JC(3,"alpha")
C.axP=new A.JC(4,"other")
C.Ob=new A.RV(0,"uint")
C.DY=new A.RV(1,"half")
C.DZ=new A.RV(2,"float")
C.Oc=new A.vL(0,"none")
C.ayg=new A.bog(2,"both")
C.hE=new A.p7(0,"uint1")
C.it=new A.p7(1,"uint2")
C.kR=new A.p7(10,"float32")
C.mx=new A.p7(11,"float64")
C.iu=new A.p7(2,"uint4")
C.aj=new A.p7(3,"uint8")
C.cV=new A.p7(4,"uint16")
C.kS=new A.p7(5,"uint32")
C.my=new A.p7(6,"int8")
C.mz=new A.p7(7,"int16")
C.mA=new A.p7(8,"int32")
C.jj=new A.p7(9,"float16")
C.ayw=new A.awd(1,"page")
C.bG=new A.awd(2,"sequence")
C.Ea=new A.bue(1,"deflate")
C.OI=new A.Sr(2,"cur")
C.aa=new A.ob(0,"none")
C.Pw=new A.ob(1,"byte")
C.Px=new A.ob(10,"sRational")
C.Py=new A.ob(11,"single")
C.Pz=new A.ob(12,"double")
C.bW=new A.ob(2,"ascii")
C.bD=new A.ob(3,"short")
C.dE=new A.ob(4,"long")
C.f3=new A.ob(5,"rational")
C.PA=new A.ob(6,"sByte")
C.jm=new A.ob(7,"undefined")
C.PB=new A.ob(8,"sShort")
C.PC=new A.ob(9,"sLong")
C.aCu=new A.ay8(0,"nearest")
C.bUR=new A.ay8(1,"linear")
C.PX=new A.bxf(0,"yuv444")
C.EN=B.a(x([0,2,8]),y.t)
C.aDq=B.a(x([0,4,2,1]),y.t)
C.ayU=new A.Sr(0,"invalid")
C.ayV=new A.Sr(1,"ico")
C.aDv=B.a(x([C.ayU,C.ayV,C.OI]),B.F("u<Sr>"))
C.Qi=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),y.t)
C.aEb=B.a(x([252,243,207,63]),y.t)
C.byy=new A.Ue(0,"none")
C.abN=new A.Ue(1,"background")
C.abO=new A.Ue(2,"previous")
C.aEd=B.a(x([C.byy,C.abN,C.abO]),B.F("u<Ue>"))
C.Qm=B.a(x([292,260,226,226]),y.t)
C.Qo=B.a(x([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125]),y.t)
C.aEi=B.a(x([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0]),y.t)
C.aEp=B.a(x([2,3,7]),y.t)
C.Qr=B.a(x([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68]),y.t)
C.aEx=B.a(x([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),y.t)
C.aEL=B.a(x([3,3,11]),y.t)
C.Fz=B.a(x([128,128,128,128,128,128,128,128,128,128,128]),y.t)
C.Rb=B.a(x([C.Fz,C.Fz,C.Fz]),y.S)
C.aH5=B.a(x([253,136,254,255,228,219,128,128,128,128,128]),y.t)
C.aJv=B.a(x([189,129,242,255,227,213,255,219,128,128,128]),y.t)
C.aJC=B.a(x([106,126,227,252,214,209,255,255,128,128,128]),y.t)
C.aNc=B.a(x([C.aH5,C.aJv,C.aJC]),y.S)
C.aNx=B.a(x([1,98,248,255,236,226,255,255,128,128,128]),y.t)
C.aF9=B.a(x([181,133,238,254,221,234,255,154,128,128,128]),y.t)
C.aET=B.a(x([78,134,202,247,198,180,255,219,128,128,128]),y.t)
C.aOU=B.a(x([C.aNx,C.aF9,C.aET]),y.S)
C.aGV=B.a(x([1,185,249,255,243,255,128,128,128,128,128]),y.t)
C.aNk=B.a(x([184,150,247,255,236,224,128,128,128,128,128]),y.t)
C.aQN=B.a(x([77,110,216,255,236,230,128,128,128,128,128]),y.t)
C.aMb=B.a(x([C.aGV,C.aNk,C.aQN]),y.S)
C.aMq=B.a(x([1,101,251,255,241,255,128,128,128,128,128]),y.t)
C.aH3=B.a(x([170,139,241,252,236,209,255,255,128,128,128]),y.t)
C.aME=B.a(x([37,116,196,243,228,255,255,255,128,128,128]),y.t)
C.aGd=B.a(x([C.aMq,C.aH3,C.aME]),y.S)
C.aK8=B.a(x([1,204,254,255,245,255,128,128,128,128,128]),y.t)
C.aRA=B.a(x([207,160,250,255,238,128,128,128,128,128,128]),y.t)
C.aRz=B.a(x([102,103,231,255,211,171,128,128,128,128,128]),y.t)
C.aHZ=B.a(x([C.aK8,C.aRA,C.aRz]),y.S)
C.aFS=B.a(x([1,152,252,255,240,255,128,128,128,128,128]),y.t)
C.aRK=B.a(x([177,135,243,255,234,225,128,128,128,128,128]),y.t)
C.aLS=B.a(x([80,129,211,255,194,224,128,128,128,128,128]),y.t)
C.aNb=B.a(x([C.aFS,C.aRK,C.aLS]),y.S)
C.RQ=B.a(x([1,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aO4=B.a(x([246,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aLf=B.a(x([255,128,128,128,128,128,128,128,128,128,128]),y.t)
C.aS0=B.a(x([C.RQ,C.aO4,C.aLf]),y.S)
C.aHO=B.a(x([C.Rb,C.aNc,C.aOU,C.aMb,C.aGd,C.aHZ,C.aNb,C.aS0]),y.o)
C.aQV=B.a(x([198,35,237,223,193,187,162,160,145,155,62]),y.t)
C.aH4=B.a(x([131,45,198,221,172,176,220,157,252,221,1]),y.t)
C.aQU=B.a(x([68,47,146,208,149,167,221,162,255,223,128]),y.t)
C.aKC=B.a(x([C.aQV,C.aH4,C.aQU]),y.S)
C.aOZ=B.a(x([1,149,241,255,221,224,255,255,128,128,128]),y.t)
C.aPB=B.a(x([184,141,234,253,222,220,255,199,128,128,128]),y.t)
C.aL4=B.a(x([81,99,181,242,176,190,249,202,255,255,128]),y.t)
C.aQn=B.a(x([C.aOZ,C.aPB,C.aL4]),y.S)
C.aQ_=B.a(x([1,129,232,253,214,197,242,196,255,255,128]),y.t)
C.aRo=B.a(x([99,121,210,250,201,198,255,202,128,128,128]),y.t)
C.aNg=B.a(x([23,91,163,242,170,187,247,210,255,255,128]),y.t)
C.aLl=B.a(x([C.aQ_,C.aRo,C.aNg]),y.S)
C.aIA=B.a(x([1,200,246,255,234,255,128,128,128,128,128]),y.t)
C.aPX=B.a(x([109,178,241,255,231,245,255,255,128,128,128]),y.t)
C.aEh=B.a(x([44,130,201,253,205,192,255,255,128,128,128]),y.t)
C.aQx=B.a(x([C.aIA,C.aPX,C.aEh]),y.S)
C.aFB=B.a(x([1,132,239,251,219,209,255,165,128,128,128]),y.t)
C.aDx=B.a(x([94,136,225,251,218,190,255,255,128,128,128]),y.t)
C.aQ2=B.a(x([22,100,174,245,186,161,255,199,128,128,128]),y.t)
C.aMn=B.a(x([C.aFB,C.aDx,C.aQ2]),y.S)
C.aPA=B.a(x([1,182,249,255,232,235,128,128,128,128,128]),y.t)
C.aMZ=B.a(x([124,143,241,255,227,234,128,128,128,128,128]),y.t)
C.aJo=B.a(x([35,77,181,251,193,211,255,205,128,128,128]),y.t)
C.aJK=B.a(x([C.aPA,C.aMZ,C.aJo]),y.S)
C.aS1=B.a(x([1,157,247,255,236,231,255,255,128,128,128]),y.t)
C.aHL=B.a(x([121,141,235,255,225,227,255,255,128,128,128]),y.t)
C.aPY=B.a(x([45,99,188,251,195,217,255,224,128,128,128]),y.t)
C.aG6=B.a(x([C.aS1,C.aHL,C.aPY]),y.S)
C.aDy=B.a(x([1,1,251,255,213,255,128,128,128,128,128]),y.t)
C.aEz=B.a(x([203,1,248,255,255,128,128,128,128,128,128]),y.t)
C.aPE=B.a(x([137,1,177,255,224,255,128,128,128,128,128]),y.t)
C.aFU=B.a(x([C.aDy,C.aEz,C.aPE]),y.S)
C.aPl=B.a(x([C.aKC,C.aQn,C.aLl,C.aQx,C.aMn,C.aJK,C.aG6,C.aFU]),y.o)
C.aI6=B.a(x([253,9,248,251,207,208,255,192,128,128,128]),y.t)
C.aO5=B.a(x([175,13,224,243,193,185,249,198,255,255,128]),y.t)
C.aS_=B.a(x([73,17,171,221,161,179,236,167,255,234,128]),y.t)
C.aNP=B.a(x([C.aI6,C.aO5,C.aS_]),y.S)
C.aP8=B.a(x([1,95,247,253,212,183,255,255,128,128,128]),y.t)
C.aLB=B.a(x([239,90,244,250,211,209,255,255,128,128,128]),y.t)
C.aQM=B.a(x([155,77,195,248,188,195,255,255,128,128,128]),y.t)
C.aPz=B.a(x([C.aP8,C.aLB,C.aQM]),y.S)
C.aKc=B.a(x([1,24,239,251,218,219,255,205,128,128,128]),y.t)
C.aOF=B.a(x([201,51,219,255,196,186,128,128,128,128,128]),y.t)
C.aLA=B.a(x([69,46,190,239,201,218,255,228,128,128,128]),y.t)
C.aP4=B.a(x([C.aKc,C.aOF,C.aLA]),y.S)
C.aJy=B.a(x([1,191,251,255,255,128,128,128,128,128,128]),y.t)
C.aMD=B.a(x([223,165,249,255,213,255,128,128,128,128,128]),y.t)
C.aNs=B.a(x([141,124,248,255,255,128,128,128,128,128,128]),y.t)
C.aPZ=B.a(x([C.aJy,C.aMD,C.aNs]),y.S)
C.aKI=B.a(x([1,16,248,255,255,128,128,128,128,128,128]),y.t)
C.aHH=B.a(x([190,36,230,255,236,255,128,128,128,128,128]),y.t)
C.aH7=B.a(x([149,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aFC=B.a(x([C.aKI,C.aHH,C.aH7]),y.S)
C.aNj=B.a(x([1,226,255,128,128,128,128,128,128,128,128]),y.t)
C.aNV=B.a(x([247,192,255,128,128,128,128,128,128,128,128]),y.t)
C.aQK=B.a(x([240,128,255,128,128,128,128,128,128,128,128]),y.t)
C.aEE=B.a(x([C.aNj,C.aNV,C.aQK]),y.S)
C.aQw=B.a(x([1,134,252,255,255,128,128,128,128,128,128]),y.t)
C.aMX=B.a(x([213,62,250,255,255,128,128,128,128,128,128]),y.t)
C.aRG=B.a(x([55,93,255,128,128,128,128,128,128,128,128]),y.t)
C.aNi=B.a(x([C.aQw,C.aMX,C.aRG]),y.S)
C.aGO=B.a(x([C.aNP,C.aPz,C.aP4,C.aPZ,C.aFC,C.aEE,C.aNi,C.Rb]),y.o)
C.aN_=B.a(x([202,24,213,235,186,191,220,160,240,175,255]),y.t)
C.aH2=B.a(x([126,38,182,232,169,184,228,174,255,187,128]),y.t)
C.aFE=B.a(x([61,46,138,219,151,178,240,170,255,216,128]),y.t)
C.aPs=B.a(x([C.aN_,C.aH2,C.aFE]),y.S)
C.aLR=B.a(x([1,112,230,250,199,191,247,159,255,255,128]),y.t)
C.aG4=B.a(x([166,109,228,252,211,215,255,174,128,128,128]),y.t)
C.aMv=B.a(x([39,77,162,232,172,180,245,178,255,255,128]),y.t)
C.aPn=B.a(x([C.aLR,C.aG4,C.aMv]),y.S)
C.aM0=B.a(x([1,52,220,246,198,199,249,220,255,255,128]),y.t)
C.aHW=B.a(x([124,74,191,243,183,193,250,221,255,255,128]),y.t)
C.aJn=B.a(x([24,71,130,219,154,170,243,182,255,255,128]),y.t)
C.aPm=B.a(x([C.aM0,C.aHW,C.aJn]),y.S)
C.aJj=B.a(x([1,182,225,249,219,240,255,224,128,128,128]),y.t)
C.aRE=B.a(x([149,150,226,252,216,205,255,171,128,128,128]),y.t)
C.aSg=B.a(x([28,108,170,242,183,194,254,223,255,255,128]),y.t)
C.aR7=B.a(x([C.aJj,C.aRE,C.aSg]),y.S)
C.aSj=B.a(x([1,81,230,252,204,203,255,192,128,128,128]),y.t)
C.aPT=B.a(x([123,102,209,247,188,196,255,233,128,128,128]),y.t)
C.aQE=B.a(x([20,95,153,243,164,173,255,203,128,128,128]),y.t)
C.aPU=B.a(x([C.aSj,C.aPT,C.aQE]),y.S)
C.aKX=B.a(x([1,222,248,255,216,213,128,128,128,128,128]),y.t)
C.aMU=B.a(x([168,175,246,252,235,205,255,255,128,128,128]),y.t)
C.aJs=B.a(x([47,116,215,255,211,212,255,255,128,128,128]),y.t)
C.aHt=B.a(x([C.aKX,C.aMU,C.aJs]),y.S)
C.aKP=B.a(x([1,121,236,253,212,214,255,255,128,128,128]),y.t)
C.aM2=B.a(x([141,84,213,252,201,202,255,219,128,128,128]),y.t)
C.aNJ=B.a(x([42,80,160,240,162,185,255,205,128,128,128]),y.t)
C.aJO=B.a(x([C.aKP,C.aM2,C.aNJ]),y.S)
C.aRT=B.a(x([244,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aDt=B.a(x([238,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aNY=B.a(x([C.RQ,C.aRT,C.aDt]),y.S)
C.aE7=B.a(x([C.aPs,C.aPn,C.aPm,C.aR7,C.aPU,C.aHt,C.aJO,C.aNY]),y.o)
C.aFD=B.a(x([C.aHO,C.aPl,C.aGO,C.aE7]),y.M)
C.aFH=B.a(x([511,1023,2047,4095]),y.t)
C.aGa=B.a(x([63,207,243,252]),y.t)
C.aGH=B.a(x([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]),y.t)
C.uA=B.a(x([0,1,2,3,4,5,6,7,8,9,10,11]),y.t)
C.aHa=B.a(x([8,8,4,2]),y.t)
C.aDL=B.a(x([173,148,140]),y.t)
C.aDM=B.a(x([176,155,140,135]),y.t)
C.aDJ=B.a(x([180,157,141,134,130]),y.t)
C.aEy=B.a(x([254,254,243,230,196,177,153,140,133,130,129]),y.t)
C.aHc=B.a(x([C.aDL,C.aDM,C.aDJ,C.aEy]),y.S)
C.aHi=B.a(x([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576]),y.t)
C.Rj=B.a(x([1,1.387039845,1.306562965,1.175875602,1,0.785694958,0.5411961,0.275899379]),B.F("u<T>"))
C.aHy=B.a(x([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),y.t)
C.aHQ=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095]),y.t)
C.Rw=B.a(x([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29]),y.t)
C.RH=B.a(x([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250]),y.t)
C.aIn=B.a(x([280,256,256,256,40]),y.t)
C.v5=B.a(x([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63]),y.t)
C.RX=B.a(x([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390]),y.t)
C.F3=B.a(x([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157]),y.t)
C.aIE=B.a(x([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112]),y.t)
C.F4=B.a(x([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284]),y.t)
C.S7=B.a(x([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119]),y.t)
C.S9=B.a(x([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28]),y.t)
C.aJ8=B.a(x([C.Ob,C.DY,C.DZ]),B.F("u<RV>"))
C.vm=B.a(x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),y.t)
C.aJU=B.a(x([254,253,251,247,239,223,191,127]),y.t)
C.vB=B.a(x([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8]),y.t)
C.SQ=B.a(x([A.dWk(),A.dWc(),A.dWr(),A.dWp(),A.dWm(),A.dWl(),A.dWn()]),y.y)
C.SS=B.a(x([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5]),y.t)
C.T2=B.a(x([C.aa,C.Pw,C.bW,C.bD,C.dE,C.f3,C.PA,C.jm,C.PB,C.PC,C.Px,C.Py,C.Pz]),B.F("u<ob>"))
C.Jg=new A.lL(0,"whiteIsZero")
C.bLD=new A.lL(1,"blackIsZero")
C.bLK=new A.lL(2,"rgb")
C.Ji=new A.lL(3,"palette")
C.bLL=new A.lL(4,"transparencyMask")
C.af9=new A.lL(5,"cmyk")
C.bLM=new A.lL(6,"yCbCr")
C.bLN=new A.lL(7,"reserved7")
C.bLO=new A.lL(8,"cieLab")
C.bLP=new A.lL(9,"iccLab")
C.bLE=new A.lL(10,"ituLab")
C.bLF=new A.lL(11,"logL")
C.bLG=new A.lL(12,"logLuv")
C.bLH=new A.lL(13,"colorFilterArray")
C.bLI=new A.lL(14,"linearRaw")
C.bLJ=new A.lL(15,"depth")
C.Jh=new A.lL(16,"unknown")
C.aKg=B.a(x([C.Jg,C.bLD,C.bLK,C.Ji,C.bLL,C.af9,C.bLM,C.bLN,C.bLO,C.bLP,C.bLE,C.bLF,C.bLG,C.bLH,C.bLI,C.bLJ,C.Jh]),B.F("u<lL>"))
C.Ti=B.a(x([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0]),y.t)
C.abL=new A.a7F(0,"source")
C.abM=new A.a7F(1,"over")
C.aKL=B.a(x([C.abL,C.abM]),B.F("u<a7F>"))
C.bLv=new A.Nw(0,"invalid")
C.af7=new A.Nw(1,"uint")
C.bw=new A.Nw(2,"int")
C.qI=new A.Nw(3,"float")
C.aKO=B.a(x([C.bLv,C.af7,C.bw,C.qI]),B.F("u<Nw>"))
C.aKV=B.a(x([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15]),y.t)
C.TT=B.a(x([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9]),y.t)
C.aLy=B.a(x([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15]),y.t)
C.axQ=new A.vL(1,"rle")
C.axR=new A.vL(2,"zips")
C.axS=new A.vL(3,"zip")
C.axT=new A.vL(4,"piz")
C.axU=new A.vL(5,"pxr24")
C.axV=new A.vL(6,"b44")
C.axW=new A.vL(7,"b44a")
C.aLC=B.a(x([C.Oc,C.axQ,C.axR,C.axS,C.axT,C.axU,C.axV,C.axW]),B.F("u<vL>"))
C.aNE=B.a(x([231,120,48,89,115,113,120,152,112]),y.t)
C.aE8=B.a(x([152,179,64,126,170,118,46,70,95]),y.t)
C.aLx=B.a(x([175,69,143,80,85,82,72,155,103]),y.t)
C.aFk=B.a(x([56,58,10,171,218,189,17,13,152]),y.t)
C.aMs=B.a(x([114,26,17,163,44,195,21,10,173]),y.t)
C.aMT=B.a(x([121,24,80,195,26,62,44,64,85]),y.t)
C.aMm=B.a(x([144,71,10,38,171,213,144,34,26]),y.t)
C.aQ6=B.a(x([170,46,55,19,136,160,33,206,71]),y.t)
C.aII=B.a(x([63,20,8,114,114,208,12,9,226]),y.t)
C.aK9=B.a(x([81,40,11,96,182,84,29,16,36]),y.t)
C.aDz=B.a(x([C.aNE,C.aE8,C.aLx,C.aFk,C.aMs,C.aMT,C.aMm,C.aQ6,C.aII,C.aK9]),y.S)
C.aHG=B.a(x([134,183,89,137,98,101,106,165,148]),y.t)
C.aPK=B.a(x([72,187,100,130,157,111,32,75,80]),y.t)
C.aN7=B.a(x([66,102,167,99,74,62,40,234,128]),y.t)
C.aED=B.a(x([41,53,9,178,241,141,26,8,107]),y.t)
C.aJV=B.a(x([74,43,26,146,73,166,49,23,157]),y.t)
C.aJ3=B.a(x([65,38,105,160,51,52,31,115,128]),y.t)
C.aJb=B.a(x([104,79,12,27,217,255,87,17,7]),y.t)
C.aLv=B.a(x([87,68,71,44,114,51,15,186,23]),y.t)
C.aPq=B.a(x([47,41,14,110,182,183,21,17,194]),y.t)
C.aO3=B.a(x([66,45,25,102,197,189,23,18,22]),y.t)
C.aQF=B.a(x([C.aHG,C.aPK,C.aN7,C.aED,C.aJV,C.aJ3,C.aJb,C.aLv,C.aPq,C.aO3]),y.S)
C.aNB=B.a(x([88,88,147,150,42,46,45,196,205]),y.t)
C.aMx=B.a(x([43,97,183,117,85,38,35,179,61]),y.t)
C.aJr=B.a(x([39,53,200,87,26,21,43,232,171]),y.t)
C.aLb=B.a(x([56,34,51,104,114,102,29,93,77]),y.t)
C.aMf=B.a(x([39,28,85,171,58,165,90,98,64]),y.t)
C.aIX=B.a(x([34,22,116,206,23,34,43,166,73]),y.t)
C.aDA=B.a(x([107,54,32,26,51,1,81,43,31]),y.t)
C.aQe=B.a(x([68,25,106,22,64,171,36,225,114]),y.t)
C.aHF=B.a(x([34,19,21,102,132,188,16,76,124]),y.t)
C.aR1=B.a(x([62,18,78,95,85,57,50,48,51]),y.t)
C.aI2=B.a(x([C.aNB,C.aMx,C.aJr,C.aLb,C.aMf,C.aIX,C.aDA,C.aQe,C.aHF,C.aR1]),y.S)
C.aM7=B.a(x([193,101,35,159,215,111,89,46,111]),y.t)
C.aGM=B.a(x([60,148,31,172,219,228,21,18,111]),y.t)
C.aFz=B.a(x([112,113,77,85,179,255,38,120,114]),y.t)
C.aQY=B.a(x([40,42,1,196,245,209,10,25,109]),y.t)
C.aKM=B.a(x([88,43,29,140,166,213,37,43,154]),y.t)
C.aIZ=B.a(x([61,63,30,155,67,45,68,1,209]),y.t)
C.aJB=B.a(x([100,80,8,43,154,1,51,26,71]),y.t)
C.aEI=B.a(x([142,78,78,16,255,128,34,197,171]),y.t)
C.aLN=B.a(x([41,40,5,102,211,183,4,1,221]),y.t)
C.aIi=B.a(x([51,50,17,168,209,192,23,25,82]),y.t)
C.aI_=B.a(x([C.aM7,C.aGM,C.aFz,C.aQY,C.aKM,C.aIZ,C.aJB,C.aEI,C.aLN,C.aIi]),y.S)
C.aJk=B.a(x([138,31,36,171,27,166,38,44,229]),y.t)
C.aHX=B.a(x([67,87,58,169,82,115,26,59,179]),y.t)
C.aOT=B.a(x([63,59,90,180,59,166,93,73,154]),y.t)
C.aQB=B.a(x([40,40,21,116,143,209,34,39,175]),y.t)
C.aEQ=B.a(x([47,15,16,183,34,223,49,45,183]),y.t)
C.aH0=B.a(x([46,17,33,183,6,98,15,32,183]),y.t)
C.aSl=B.a(x([57,46,22,24,128,1,54,17,37]),y.t)
C.aJF=B.a(x([65,32,73,115,28,128,23,128,205]),y.t)
C.aN6=B.a(x([40,3,9,115,51,192,18,6,223]),y.t)
C.aJS=B.a(x([87,37,9,115,59,77,64,21,47]),y.t)
C.aLM=B.a(x([C.aJk,C.aHX,C.aOT,C.aQB,C.aEQ,C.aH0,C.aSl,C.aJF,C.aN6,C.aJS]),y.S)
C.aRR=B.a(x([104,55,44,218,9,54,53,130,226]),y.t)
C.aG2=B.a(x([64,90,70,205,40,41,23,26,57]),y.t)
C.aOS=B.a(x([54,57,112,184,5,41,38,166,213]),y.t)
C.aIY=B.a(x([30,34,26,133,152,116,10,32,134]),y.t)
C.aNQ=B.a(x([39,19,53,221,26,114,32,73,255]),y.t)
C.aIg=B.a(x([31,9,65,234,2,15,1,118,73]),y.t)
C.aLK=B.a(x([75,32,12,51,192,255,160,43,51]),y.t)
C.aJ1=B.a(x([88,31,35,67,102,85,55,186,85]),y.t)
C.aKl=B.a(x([56,21,23,111,59,205,45,37,192]),y.t)
C.aKw=B.a(x([55,38,70,124,73,102,1,34,98]),y.t)
C.aRY=B.a(x([C.aRR,C.aG2,C.aOS,C.aIY,C.aNQ,C.aIg,C.aLK,C.aJ1,C.aKl,C.aKw]),y.S)
C.aKj=B.a(x([125,98,42,88,104,85,117,175,82]),y.t)
C.aJ7=B.a(x([95,84,53,89,128,100,113,101,45]),y.t)
C.aMG=B.a(x([75,79,123,47,51,128,81,171,1]),y.t)
C.aFW=B.a(x([57,17,5,71,102,57,53,41,49]),y.t)
C.aOC=B.a(x([38,33,13,121,57,73,26,1,85]),y.t)
C.aRC=B.a(x([41,10,67,138,77,110,90,47,114]),y.t)
C.aLE=B.a(x([115,21,2,10,102,255,166,23,6]),y.t)
C.aHI=B.a(x([101,29,16,10,85,128,101,196,26]),y.t)
C.aJx=B.a(x([57,18,10,102,102,213,34,20,43]),y.t)
C.aKK=B.a(x([117,20,15,36,163,128,68,1,26]),y.t)
C.aLs=B.a(x([C.aKj,C.aJ7,C.aMG,C.aFW,C.aOC,C.aRC,C.aLE,C.aHI,C.aJx,C.aKK]),y.S)
C.aJQ=B.a(x([102,61,71,37,34,53,31,243,192]),y.t)
C.aRv=B.a(x([69,60,71,38,73,119,28,222,37]),y.t)
C.aJT=B.a(x([68,45,128,34,1,47,11,245,171]),y.t)
C.aDI=B.a(x([62,17,19,70,146,85,55,62,70]),y.t)
C.aSd=B.a(x([37,43,37,154,100,163,85,160,1]),y.t)
C.aRc=B.a(x([63,9,92,136,28,64,32,201,85]),y.t)
C.aPP=B.a(x([75,15,9,9,64,255,184,119,16]),y.t)
C.aHT=B.a(x([86,6,28,5,64,255,25,248,1]),y.t)
C.aNZ=B.a(x([56,8,17,132,137,255,55,116,128]),y.t)
C.aFJ=B.a(x([58,15,20,82,135,57,26,121,40]),y.t)
C.aMk=B.a(x([C.aJQ,C.aRv,C.aJT,C.aDI,C.aSd,C.aRc,C.aPP,C.aHT,C.aNZ,C.aFJ]),y.S)
C.aMM=B.a(x([164,50,31,137,154,133,25,35,218]),y.t)
C.aHR=B.a(x([51,103,44,131,131,123,31,6,158]),y.t)
C.aR4=B.a(x([86,40,64,135,148,224,45,183,128]),y.t)
C.aLw=B.a(x([22,26,17,131,240,154,14,1,209]),y.t)
C.aGS=B.a(x([45,16,21,91,64,222,7,1,197]),y.t)
C.aQC=B.a(x([56,21,39,155,60,138,23,102,213]),y.t)
C.aRW=B.a(x([83,12,13,54,192,255,68,47,28]),y.t)
C.aN8=B.a(x([85,26,85,85,128,128,32,146,171]),y.t)
C.aLg=B.a(x([18,11,7,63,144,171,4,4,246]),y.t)
C.aI3=B.a(x([35,27,10,146,174,171,12,26,128]),y.t)
C.aKZ=B.a(x([C.aMM,C.aHR,C.aR4,C.aLw,C.aGS,C.aQC,C.aRW,C.aN8,C.aLg,C.aI3]),y.S)
C.aPk=B.a(x([190,80,35,99,180,80,126,54,45]),y.t)
C.aQ5=B.a(x([85,126,47,87,176,51,41,20,32]),y.t)
C.aOL=B.a(x([101,75,128,139,118,146,116,128,85]),y.t)
C.aPG=B.a(x([56,41,15,176,236,85,37,9,62]),y.t)
C.aFR=B.a(x([71,30,17,119,118,255,17,18,138]),y.t)
C.aMj=B.a(x([101,38,60,138,55,70,43,26,142]),y.t)
C.aL6=B.a(x([146,36,19,30,171,255,97,27,20]),y.t)
C.aNz=B.a(x([138,45,61,62,219,1,81,188,64]),y.t)
C.aQZ=B.a(x([32,41,20,117,151,142,20,21,163]),y.t)
C.aQ7=B.a(x([112,19,12,61,195,128,48,4,24]),y.t)
C.aP3=B.a(x([C.aPk,C.aQ5,C.aOL,C.aPG,C.aFR,C.aMj,C.aL6,C.aNz,C.aQZ,C.aQ7]),y.S)
C.aLL=B.a(x([C.aDz,C.aQF,C.aI2,C.aI_,C.aLM,C.aRY,C.aLs,C.aMk,C.aKZ,C.aP3]),y.o)
C.Aw=new A.pC(0,"none")
C.km=new A.pC(1,"palette")
C.af6=new A.pC(2,"rgb")
C.bLm=new A.pC(3,"gray")
C.bLn=new A.pC(4,"reserved4")
C.bLo=new A.pC(5,"reserved5")
C.bLp=new A.pC(6,"reserved6")
C.bLq=new A.pC(7,"reserved7")
C.bLr=new A.pC(8,"reserved8")
C.kn=new A.pC(9,"paletteRle")
C.af5=new A.pC(10,"rgbRle")
C.bLl=new A.pC(11,"grayRle")
C.aLU=B.a(x([C.Aw,C.km,C.af6,C.bLm,C.bLn,C.bLo,C.bLp,C.bLq,C.bLr,C.kn,C.af5,C.bLl]),B.F("u<pC>"))
C.Uz=B.a(x([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250]),y.t)
C.aMF=B.a(x([A.dW4(),A.dWb(),A.dWd(),A.dW6(),A.dW9(),A.dWf(),A.dW8(),A.dWe(),A.dW5(),A.dW7()]),y.y)
C.EY=B.a(x([8,0,8,0]),y.t)
C.aG0=B.a(x([5,3,5,3]),y.t)
C.aEM=B.a(x([3,5,3,5]),y.t)
C.Q8=B.a(x([0,8,0,8]),y.t)
C.QF=B.a(x([4,4,4,4]),y.t)
C.aFx=B.a(x([4,4,0,0]),y.t)
C.UQ=B.a(x([C.EY,C.aG0,C.aEM,C.Q8,C.EY,C.QF,C.aFx,C.Q8]),y.S)
C.UY=B.a(x([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41]),y.t)
C.aNq=B.a(x([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99]),y.t)
C.wX=B.a(x([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845]),y.t)
C.V2=B.a(x([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127]),y.t)
C.V4=B.a(x([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]),y.t)
C.x4=B.a(x([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567]),y.t)
C.Vh=B.a(x([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232]),y.t)
C.VZ=B.a(x([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0]),y.t)
C.byz=new A.FE(0,"none")
C.byA=new A.FE(1,"sub")
C.byB=new A.FE(2,"up")
C.byC=new A.FE(3,"average")
C.byD=new A.FE(4,"paeth")
C.W_=B.a(x([C.byz,C.byA,C.byB,C.byC,C.byD]),B.F("u<FE>"))
C.iB=B.a(x([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]),y.t)
C.pB=B.a(x([0,1,3,7,15,31,63,127,255]),y.t)
C.FA=B.a(x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),y.t)
C.fJ=B.a(x([255,255,255,255,255,255,255,255,255,255,255]),y.t)
C.nb=B.a(x([C.fJ,C.fJ,C.fJ]),y.S)
C.aLa=B.a(x([176,246,255,255,255,255,255,255,255,255,255]),y.t)
C.aRJ=B.a(x([223,241,252,255,255,255,255,255,255,255,255]),y.t)
C.aHn=B.a(x([249,253,253,255,255,255,255,255,255,255,255]),y.t)
C.aLI=B.a(x([C.aLa,C.aRJ,C.aHn]),y.S)
C.aKe=B.a(x([255,244,252,255,255,255,255,255,255,255,255]),y.t)
C.aJL=B.a(x([234,254,254,255,255,255,255,255,255,255,255]),y.t)
C.Xb=B.a(x([253,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aHP=B.a(x([C.aKe,C.aJL,C.Xb]),y.S)
C.aR3=B.a(x([255,246,254,255,255,255,255,255,255,255,255]),y.t)
C.aNU=B.a(x([239,253,254,255,255,255,255,255,255,255,255]),y.t)
C.WC=B.a(x([254,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aPM=B.a(x([C.aR3,C.aNU,C.WC]),y.S)
C.SW=B.a(x([255,248,254,255,255,255,255,255,255,255,255]),y.t)
C.aIu=B.a(x([251,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aMS=B.a(x([C.SW,C.aIu,C.fJ]),y.S)
C.ER=B.a(x([255,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aMJ=B.a(x([251,254,254,255,255,255,255,255,255,255,255]),y.t)
C.aIP=B.a(x([C.ER,C.aMJ,C.WC]),y.S)
C.aFg=B.a(x([255,254,253,255,254,255,255,255,255,255,255]),y.t)
C.aK5=B.a(x([250,255,254,255,254,255,255,255,255,255,255]),y.t)
C.xg=B.a(x([254,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aKN=B.a(x([C.aFg,C.aK5,C.xg]),y.S)
C.aJw=B.a(x([C.nb,C.aLI,C.aHP,C.aPM,C.aMS,C.aIP,C.aKN,C.nb]),y.o)
C.aE6=B.a(x([217,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aL2=B.a(x([225,252,241,253,255,255,254,255,255,255,255]),y.t)
C.aOO=B.a(x([234,250,241,250,253,255,253,254,255,255,255]),y.t)
C.aQ8=B.a(x([C.aE6,C.aL2,C.aOO]),y.S)
C.FK=B.a(x([255,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aHu=B.a(x([223,254,254,255,255,255,255,255,255,255,255]),y.t)
C.aGU=B.a(x([238,253,254,254,255,255,255,255,255,255,255]),y.t)
C.aNO=B.a(x([C.FK,C.aHu,C.aGU]),y.S)
C.aJR=B.a(x([249,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aR0=B.a(x([C.SW,C.aJR,C.fJ]),y.S)
C.aQh=B.a(x([255,253,255,255,255,255,255,255,255,255,255]),y.t)
C.aMH=B.a(x([247,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aMo=B.a(x([C.aQh,C.aMH,C.fJ]),y.S)
C.aGI=B.a(x([252,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aEF=B.a(x([C.ER,C.aGI,C.fJ]),y.S)
C.Xm=B.a(x([255,254,254,255,255,255,255,255,255,255,255]),y.t)
C.aGR=B.a(x([C.Xm,C.Xb,C.fJ]),y.S)
C.aNI=B.a(x([255,254,253,255,255,255,255,255,255,255,255]),y.t)
C.Tg=B.a(x([250,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aGE=B.a(x([C.aNI,C.Tg,C.xg]),y.S)
C.aFm=B.a(x([C.aQ8,C.aNO,C.aR0,C.aMo,C.aEF,C.aGR,C.aGE,C.nb]),y.o)
C.aP6=B.a(x([186,251,250,255,255,255,255,255,255,255,255]),y.t)
C.aIk=B.a(x([234,251,244,254,255,255,255,255,255,255,255]),y.t)
C.aPO=B.a(x([251,251,243,253,254,255,254,255,255,255,255]),y.t)
C.aIL=B.a(x([C.aP6,C.aIk,C.aPO]),y.S)
C.aIy=B.a(x([236,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aNG=B.a(x([251,253,253,254,254,255,255,255,255,255,255]),y.t)
C.aKB=B.a(x([C.ER,C.aIy,C.aNG]),y.S)
C.aPj=B.a(x([254,254,254,255,255,255,255,255,255,255,255]),y.t)
C.aIr=B.a(x([C.Xm,C.aPj,C.fJ]),y.S)
C.aPW=B.a(x([254,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aIv=B.a(x([C.FK,C.aPW,C.xg]),y.S)
C.Xo=B.a(x([C.fJ,C.xg,C.fJ]),y.S)
C.aFj=B.a(x([C.aIL,C.aKB,C.aIr,C.aIv,C.Xo,C.nb,C.nb,C.nb]),y.o)
C.aK0=B.a(x([248,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aJ6=B.a(x([250,254,252,254,255,255,255,255,255,255,255]),y.t)
C.aIh=B.a(x([248,254,249,253,255,255,255,255,255,255,255]),y.t)
C.aKG=B.a(x([C.aK0,C.aJ6,C.aIh]),y.S)
C.aEU=B.a(x([255,253,253,255,255,255,255,255,255,255,255]),y.t)
C.aQv=B.a(x([246,253,253,255,255,255,255,255,255,255,255]),y.t)
C.aIN=B.a(x([252,254,251,254,254,255,255,255,255,255,255]),y.t)
C.aQu=B.a(x([C.aEU,C.aQv,C.aIN]),y.S)
C.aS2=B.a(x([255,254,252,255,255,255,255,255,255,255,255]),y.t)
C.aIa=B.a(x([248,254,253,255,255,255,255,255,255,255,255]),y.t)
C.aGD=B.a(x([253,255,254,254,255,255,255,255,255,255,255]),y.t)
C.aN1=B.a(x([C.aS2,C.aIa,C.aGD]),y.S)
C.aRU=B.a(x([255,251,254,255,255,255,255,255,255,255,255]),y.t)
C.aM9=B.a(x([245,251,254,255,255,255,255,255,255,255,255]),y.t)
C.aMi=B.a(x([253,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aHh=B.a(x([C.aRU,C.aM9,C.aMi]),y.S)
C.aHl=B.a(x([255,251,253,255,255,255,255,255,255,255,255]),y.t)
C.aKi=B.a(x([252,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aPu=B.a(x([C.aHl,C.aKi,C.FK]),y.S)
C.aGf=B.a(x([255,252,255,255,255,255,255,255,255,255,255]),y.t)
C.aRO=B.a(x([249,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aJg=B.a(x([255,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aDH=B.a(x([C.aGf,C.aRO,C.aJg]),y.S)
C.aSf=B.a(x([255,255,253,255,255,255,255,255,255,255,255]),y.t)
C.aIt=B.a(x([C.aSf,C.Tg,C.fJ]),y.S)
C.aGC=B.a(x([C.aKG,C.aQu,C.aN1,C.aHh,C.aPu,C.aDH,C.aIt,C.Xo]),y.o)
C.aQ0=B.a(x([C.aJw,C.aFm,C.aFj,C.aGC]),y.M)
C.aj7=new A.nd(1,"rle8")
C.ajc=new A.nd(2,"rle4")
C.ajd=new A.nd(4,"jpeg")
C.aje=new A.nd(5,"png")
C.ajf=new A.nd(7,"reserved7")
C.ajg=new A.nd(8,"reserved8")
C.ajh=new A.nd(9,"reserved9")
C.aj8=new A.nd(10,"reserved10")
C.aj9=new A.nd(11,"cmyk")
C.aja=new A.nd(12,"cmykRle8")
C.ajb=new A.nd(13,"cmykRle4")
C.WF=B.a(x([C.KQ,C.aj7,C.ajc,C.BT,C.ajd,C.aje,C.BU,C.ajf,C.ajg,C.ajh,C.aj8,C.aj9,C.aja,C.ajb]),B.F("u<nd>"))
C.FC=B.a(x([0,128,192,224,240,248,252,254,255]),y.t)
C.FD=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295]),y.t)
C.aQr=B.a(x([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),y.t)
C.aQy=B.a(x([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),y.t)
C.ag3=new A.Ob(0,"predictor")
C.bP6=new A.Ob(1,"crossColor")
C.bP7=new A.Ob(2,"subtractGreen")
C.ag4=new A.Ob(3,"colorIndexing")
C.aQO=B.a(x([C.ag3,C.bP6,C.bP7,C.ag4]),B.F("u<Ob>"))
C.fK=B.a(x([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255]),y.t)
C.aRp=B.a(x([A.dWg(),A.dWa(),A.dWq(),A.dWo(),A.dWi(),A.dWh(),A.dWj()]),y.y)
C.Xz=B.a(x([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396]),y.t)
C.aRy=B.a(x([null,A.dWH(),A.dWI(),A.dWG()]),B.F("u<~(m,m,m,m,m,e0)?>"))
C.XJ=B.a(x([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),y.t)
C.yu=B.a(x([0,36,72,109,145,182,218,255]),y.t)
C.hT=B.a(x([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255]),y.t)
C.aRL=B.a(x([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),y.t)
C.l3=B.a(x([0,1,1,2,4,8,1,1,2,4,8,4,8]),y.t)
C.byX=new A.wo(0,"bitmap")
C.ac3=new A.wo(1,"grayscale")
C.byY=new A.wo(2,"indexed")
C.ac4=new A.wo(3,"rgb")
C.ac5=new A.wo(4,"cmyk")
C.byZ=new A.wo(5,"multiChannel")
C.bz_=new A.wo(6,"duoTone")
C.ac6=new A.wo(7,"lab")
C.aRN=B.a(x([C.byX,C.ac3,C.byY,C.ac4,C.ac5,C.byZ,C.bz_,C.ac6]),B.F("u<wo>"))
C.aRZ=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),y.t)
C.yE=B.a(x([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),y.t)
C.Yh=B.a(x([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0]),y.t)
C.aEt=B.a(x([2,6,2,6]),y.t)
C.aGr=B.a(x([6,2,6,2]),y.t)
C.aEm=B.a(x([2,2,6,6]),y.t)
C.aE_=B.a(x([1,3,3,9]),y.t)
C.aFo=B.a(x([4,0,12,0]),y.t)
C.aEK=B.a(x([3,1,9,3]),y.t)
C.aH9=B.a(x([8,8,0,0]),y.t)
C.aFq=B.a(x([4,12,0,0]),y.t)
C.aDK=B.a(x([16,0,0,0]),y.t)
C.aDF=B.a(x([12,4,0,0]),y.t)
C.aGB=B.a(x([6,6,2,2]),y.t)
C.aEN=B.a(x([3,9,1,3]),y.t)
C.aDE=B.a(x([12,0,4,0]),y.t)
C.aHm=B.a(x([9,3,3,1]),y.t)
C.e_=B.a(x([C.QF,C.aEt,C.EY,C.aGr,C.aEm,C.aE_,C.aFo,C.aEK,C.aH9,C.aFq,C.aDK,C.aDF,C.aGB,C.aEN,C.aDE,C.aHm]),y.S)
C.nc=B.a(x([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1]),y.t)
C.bsU={ProcessingSoftware:0,SubfileType:1,OldSubfileType:2,ImageWidth:3,ImageLength:4,ImageHeight:5,BitsPerSample:6,Compression:7,PhotometricInterpretation:8,Thresholding:9,CellWidth:10,CellLength:11,FillOrder:12,DocumentName:13,ImageDescription:14,Make:15,Model:16,StripOffsets:17,Orientation:18,SamplesPerPixel:19,RowsPerStrip:20,StripByteCounts:21,MinSampleValue:22,MaxSampleValue:23,XResolution:24,YResolution:25,PlanarConfiguration:26,PageName:27,XPosition:28,YPosition:29,GrayResponseUnit:30,GrayResponseCurve:31,T4Options:32,T6Options:33,ResolutionUnit:34,PageNumber:35,ColorResponseUnit:36,TransferFunction:37,Software:38,DateTime:39,Artist:40,HostComputer:41,Predictor:42,WhitePoint:43,PrimaryChromaticities:44,ColorMap:45,HalftoneHints:46,TileWidth:47,TileLength:48,TileOffsets:49,TileByteCounts:50,BadFaxLines:51,CleanFaxData:52,ConsecutiveBadFaxLines:53,InkSet:54,InkNames:55,NumberofInks:56,DotRange:57,TargetPrinter:58,ExtraSamples:59,SampleFormat:60,SMinSampleValue:61,SMaxSampleValue:62,TransferRange:63,ClipPath:64,JPEGProc:65,JPEGInterchangeFormat:66,JPEGInterchangeFormatLength:67,YCbCrCoefficients:68,YCbCrSubSampling:69,YCbCrPositioning:70,ReferenceBlackWhite:71,ApplicationNotes:72,Rating:73,CFARepeatPatternDim:74,CFAPattern:75,BatteryLevel:76,Copyright:77,ExposureTime:78,FNumber:79,"IPTC-NAA":80,ExifOffset:81,InterColorProfile:82,ExposureProgram:83,SpectralSensitivity:84,GPSOffset:85,ISOSpeed:86,OECF:87,SensitivityType:88,RecommendedExposureIndex:89,ExifVersion:90,DateTimeOriginal:91,DateTimeDigitized:92,OffsetTime:93,OffsetTimeOriginal:94,OffsetTimeDigitized:95,ComponentsConfiguration:96,CompressedBitsPerPixel:97,ShutterSpeedValue:98,ApertureValue:99,BrightnessValue:100,ExposureBiasValue:101,MaxApertureValue:102,SubjectDistance:103,MeteringMode:104,LightSource:105,Flash:106,FocalLength:107,SubjectArea:108,MakerNote:109,UserComment:110,SubSecTime:111,SubSecTimeOriginal:112,SubSecTimeDigitized:113,XPTitle:114,XPComment:115,XPAuthor:116,XPKeywords:117,XPSubject:118,FlashPixVersion:119,ColorSpace:120,ExifImageWidth:121,ExifImageLength:122,RelatedSoundFile:123,InteroperabilityOffset:124,FlashEnergy:125,SpatialFrequencyResponse:126,FocalPlaneXResolution:127,FocalPlaneYResolution:128,FocalPlaneResolutionUnit:129,SubjectLocation:130,ExposureIndex:131,SensingMethod:132,FileSource:133,SceneType:134,CVAPattern:135,CustomRendered:136,ExposureMode:137,WhiteBalance:138,DigitalZoomRatio:139,FocalLengthIn35mmFilm:140,SceneCaptureType:141,GainControl:142,Contrast:143,Saturation:144,Sharpness:145,DeviceSettingDescription:146,SubjectDistanceRange:147,ImageUniqueID:148,CameraOwnerName:149,BodySerialNumber:150,LensSpecification:151,LensMake:152,LensModel:153,LensSerialNumber:154,Gamma:155,PrintIM:156,Padding:157,OffsetSchema:158,OwnerName:159,SerialNumber:160,InteropIndex:161,InteropVersion:162,RelatedImageFileFormat:163,RelatedImageWidth:164,RelatedImageLength:165,GPSVersionID:166,GPSLatitudeRef:167,GPSLatitude:168,GPSLongitudeRef:169,GPSLongitude:170,GPSAltitudeRef:171,GPSAltitude:172,GPSTimeStamp:173,GPSSatellites:174,GPSStatus:175,GPSMeasureMode:176,GPSDOP:177,GPSSpeedRef:178,GPSSpeed:179,GPSTrackRef:180,GPSTrack:181,GPSImgDirectionRef:182,GPSImgDirection:183,GPSMapDatum:184,GPSDestLatitudeRef:185,GPSDestLatitude:186,GPSDestLongitudeRef:187,GPSDestLongitude:188,GPSDestBearingRef:189,GPSDestBearing:190,GPSDestDistanceRef:191,GPSDestDistance:192,GPSProcessingMethod:193,GPSAreaInformation:194,GPSDate:195,GPSDifferential:196}
C.a2D=new B.U(C.bsU,[11,254,255,256,257,257,258,259,262,263,264,265,266,269,270,271,272,273,274,277,278,279,280,281,282,283,284,285,286,287,290,291,292,293,296,297,300,301,305,306,315,316,317,318,319,320,321,322,323,324,325,326,327,328,332,333,334,336,337,338,339,340,341,342,343,512,513,514,529,530,531,532,700,18246,33421,33422,33423,33432,33434,33437,33723,34665,34675,34850,34852,34853,34855,34856,34864,34866,36864,36867,36868,36880,36881,36882,37121,37122,37377,37378,37379,37380,37381,37382,37383,37384,37385,37386,37396,37500,37510,37520,37521,37522,40091,40092,40093,40094,40095,40960,40961,40962,40963,40964,40965,41483,41484,41486,41487,41488,41492,41493,41495,41728,41729,41730,41985,41986,41987,41988,41989,41990,41991,41992,41993,41994,41995,41996,42016,42032,42033,42034,42035,42036,42037,42240,50341,59932,59933,65e3,65001,1,2,4096,4097,4098,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],B.F("U<l,m>"))
C.Gp=new B.c([34665,"exif",40965,"interop",34853,"gps"],B.F("c<m,l>"))
C.a6E=new B.c([C.hE,1,C.it,3,C.iu,15,C.aj,255,C.cV,65535,C.kS,4294967295,C.my,127,C.mz,32767,C.mA,2147483647,C.jj,1,C.kR,1,C.mx,1],B.F("c<p7,m>"))
C.byE=new A.aDb(0,"none")
C.byF=new A.aDb(4,"paeth")
C.qi=new A.FF(0,"invalid")
C.abP=new A.FF(1,"pbm")
C.abQ=new A.FF(2,"pgm2")
C.Hu=new A.FF(3,"pgm5")
C.abR=new A.FF(4,"ppm3")
C.Hv=new A.FF(5,"ppm6")
C.bAU=new A.bM7(0,"origin")
C.Jf=new A.uO(0,"bilevel")
C.bLw=new A.uO(1,"gray4bit")
C.bLx=new A.uO(2,"gray")
C.bLy=new A.uO(3,"grayAlpha")
C.bLz=new A.uO(4,"palette")
C.af8=new A.uO(5,"rgb")
C.bLA=new A.uO(6,"rgba")
C.bLB=new A.uO(7,"yCbCrSub")
C.qJ=new A.uO(8,"generic")
C.bLC=new A.uO(9,"invalid")
C.qT=new A.WZ(0,"undefined")
C.JM=new A.WZ(1,"lossy")
C.AH=new A.WZ(2,"lossless")
C.bPz=new A.WZ(3,"animated")
C.AN=new A.Xx(0,"none")
C.bRY=new A.Xx(1,"partial")
C.bRZ=new A.Xx(2,"full")
C.qW=new A.Xx(3,"finish")})();(function staticFields(){$.xM=B.bT("_config")
$.d2c=!0
$.cZL=null
$.dbw=!1
$.dbx=B.a([A.d0f(),A.dWs(),A.dWx(),A.dWy(),A.dWz(),A.dWA(),A.dWB(),A.dWC(),A.dWD(),A.dWE(),A.dWt(),A.dWu(),A.dWv(),A.dWw(),A.d0f(),A.d0f()],B.F("u<m(tj,m,m)>"))
$.iP=null
$.d4P=B.bT("_eLut")})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazy
x($,"e2V","dkj",()=>A.cZr(C.vB,C.Qi,257,286,15))
x($,"e2U","dki",()=>A.cZr(C.SS,C.vm,0,30,15))
x($,"e2T","dkh",()=>A.cZr(null,C.aEx,0,19,7))
x($,"e65","cU_",()=>{var v=null,u="ISOSpeed"
return B.w([11,A.aW("ProcessingSoftware",C.bW,v),254,A.aW("SubfileType",C.dE,1),255,A.aW("OldSubfileType",C.dE,1),256,A.aW("ImageWidth",C.dE,1),257,A.aW("ImageLength",C.dE,1),258,A.aW("BitsPerSample",C.bD,1),259,A.aW("Compression",C.bD,1),262,A.aW("PhotometricInterpretation",C.bD,1),263,A.aW("Thresholding",C.bD,1),264,A.aW("CellWidth",C.bD,1),265,A.aW("CellLength",C.bD,1),266,A.aW("FillOrder",C.bD,1),269,A.aW("DocumentName",C.bW,v),270,A.aW("ImageDescription",C.bW,v),271,A.aW("Make",C.bW,v),272,A.aW("Model",C.bW,v),273,A.aW("StripOffsets",C.dE,v),274,A.aW("Orientation",C.bD,1),277,A.aW("SamplesPerPixel",C.bD,1),278,A.aW("RowsPerStrip",C.dE,1),279,A.aW("StripByteCounts",C.dE,1),280,A.aW("MinSampleValue",C.bD,1),281,A.aW("MaxSampleValue",C.bD,1),282,A.aW("XResolution",C.f3,1),283,A.aW("YResolution",C.f3,1),284,A.aW("PlanarConfiguration",C.bD,1),285,A.aW("PageName",C.bW,v),286,A.aW("XPosition",C.f3,1),287,A.aW("YPosition",C.f3,1),290,A.aW("GrayResponseUnit",C.bD,1),291,A.aW("GrayResponseCurve",C.aa,v),292,A.aW("T4Options",C.aa,v),293,A.aW("T6Options",C.aa,v),296,A.aW("ResolutionUnit",C.bD,1),297,A.aW("PageNumber",C.bD,2),300,A.aW("ColorResponseUnit",C.aa,v),301,A.aW("TransferFunction",C.bD,768),305,A.aW("Software",C.bW,v),306,A.aW("DateTime",C.bW,v),315,A.aW("Artist",C.bW,v),316,A.aW("HostComputer",C.bW,v),317,A.aW("Predictor",C.bD,1),318,A.aW("WhitePoint",C.f3,2),319,A.aW("PrimaryChromaticities",C.f3,6),320,A.aW("ColorMap",C.bD,v),321,A.aW("HalftoneHints",C.bD,2),322,A.aW("TileWidth",C.dE,1),323,A.aW("TileLength",C.dE,1),324,A.aW("TileOffsets",C.dE,v),325,A.aW("TileByteCounts",C.aa,v),326,A.aW("BadFaxLines",C.aa,v),327,A.aW("CleanFaxData",C.aa,v),328,A.aW("ConsecutiveBadFaxLines",C.aa,v),332,A.aW("InkSet",C.aa,v),333,A.aW("InkNames",C.aa,v),334,A.aW("NumberofInks",C.aa,v),336,A.aW("DotRange",C.aa,v),337,A.aW("TargetPrinter",C.bW,v),338,A.aW("ExtraSamples",C.aa,v),339,A.aW("SampleFormat",C.bD,1),340,A.aW("SMinSampleValue",C.aa,v),341,A.aW("SMaxSampleValue",C.aa,v),342,A.aW("TransferRange",C.aa,v),343,A.aW("ClipPath",C.aa,v),512,A.aW("JPEGProc",C.aa,v),513,A.aW("JPEGInterchangeFormat",C.aa,v),514,A.aW("JPEGInterchangeFormatLength",C.aa,v),529,A.aW("YCbCrCoefficients",C.f3,3),530,A.aW("YCbCrSubSampling",C.bD,1),531,A.aW("YCbCrPositioning",C.bD,1),532,A.aW("ReferenceBlackWhite",C.f3,6),700,A.aW("ApplicationNotes",C.bD,1),18246,A.aW("Rating",C.bD,1),33421,A.aW("CFARepeatPatternDim",C.aa,v),33422,A.aW("CFAPattern",C.aa,v),33423,A.aW("BatteryLevel",C.aa,v),33432,A.aW("Copyright",C.bW,v),33434,A.aW("ExposureTime",C.f3,1),33437,A.aW("FNumber",C.f3,v),33723,A.aW("IPTC-NAA",C.dE,1),34665,A.aW("ExifOffset",C.aa,v),34675,A.aW("InterColorProfile",C.aa,v),34850,A.aW("ExposureProgram",C.bD,1),34852,A.aW("SpectralSensitivity",C.bW,v),34853,A.aW("GPSOffset",C.aa,v),34855,A.aW(u,C.dE,1),34856,A.aW("OECF",C.aa,v),34864,A.aW("SensitivityType",C.bD,1),34866,A.aW("RecommendedExposureIndex",C.dE,1),34867,A.aW(u,C.dE,1),36864,A.aW("ExifVersion",C.jm,v),36867,A.aW("DateTimeOriginal",C.bW,v),36868,A.aW("DateTimeDigitized",C.bW,v),36880,A.aW("OffsetTime",C.bW,v),36881,A.aW("OffsetTimeOriginal",C.bW,v),36882,A.aW("OffsetTimeDigitized",C.bW,v),37121,A.aW("ComponentsConfiguration",C.jm,v),37122,A.aW("CompressedBitsPerPixel",C.aa,v),37377,A.aW("ShutterSpeedValue",C.aa,v),37378,A.aW("ApertureValue",C.aa,v),37379,A.aW("BrightnessValue",C.aa,v),37380,A.aW("ExposureBiasValue",C.aa,v),37381,A.aW("MaxApertureValue",C.aa,v),37382,A.aW("SubjectDistance",C.aa,v),37383,A.aW("MeteringMode",C.aa,v),37384,A.aW("LightSource",C.aa,v),37385,A.aW("Flash",C.aa,v),37386,A.aW("FocalLength",C.aa,v),37396,A.aW("SubjectArea",C.aa,v),37500,A.aW("MakerNote",C.jm,v),37510,A.aW("UserComment",C.jm,v),37520,A.aW("SubSecTime",C.aa,v),37521,A.aW("SubSecTimeOriginal",C.aa,v),37522,A.aW("SubSecTimeDigitized",C.aa,v),40091,A.aW("XPTitle",C.aa,v),40092,A.aW("XPComment",C.aa,v),40093,A.aW("XPAuthor",C.aa,v),40094,A.aW("XPKeywords",C.aa,v),40095,A.aW("XPSubject",C.aa,v),40960,A.aW("FlashPixVersion",C.aa,v),40961,A.aW("ColorSpace",C.bD,1),40962,A.aW("ExifImageWidth",C.bD,1),40963,A.aW("ExifImageLength",C.bD,1),40964,A.aW("RelatedSoundFile",C.aa,v),40965,A.aW("InteroperabilityOffset",C.aa,v),41483,A.aW("FlashEnergy",C.aa,v),41484,A.aW("SpatialFrequencyResponse",C.aa,v),41486,A.aW("FocalPlaneXResolution",C.aa,v),41487,A.aW("FocalPlaneYResolution",C.aa,v),41488,A.aW("FocalPlaneResolutionUnit",C.aa,v),41492,A.aW("SubjectLocation",C.aa,v),41493,A.aW("ExposureIndex",C.aa,v),41495,A.aW("SensingMethod",C.aa,v),41728,A.aW("FileSource",C.aa,v),41729,A.aW("SceneType",C.aa,v),41730,A.aW("CVAPattern",C.aa,v),41985,A.aW("CustomRendered",C.aa,v),41986,A.aW("ExposureMode",C.aa,v),41987,A.aW("WhiteBalance",C.aa,v),41988,A.aW("DigitalZoomRatio",C.aa,v),41989,A.aW("FocalLengthIn35mmFilm",C.aa,v),41990,A.aW("SceneCaptureType",C.aa,v),41991,A.aW("GainControl",C.aa,v),41992,A.aW("Contrast",C.aa,v),41993,A.aW("Saturation",C.aa,v),41994,A.aW("Sharpness",C.aa,v),41995,A.aW("DeviceSettingDescription",C.aa,v),41996,A.aW("SubjectDistanceRange",C.aa,v),42016,A.aW("ImageUniqueID",C.aa,v),42032,A.aW("CameraOwnerName",C.bW,v),42033,A.aW("BodySerialNumber",C.bW,v),42034,A.aW("LensSpecification",C.aa,v),42035,A.aW("LensMake",C.bW,v),42036,A.aW("LensModel",C.bW,v),42037,A.aW("LensSerialNumber",C.bW,v),42240,A.aW("Gamma",C.f3,1),50341,A.aW("PrintIM",C.aa,v),59932,A.aW("Padding",C.aa,v),59933,A.aW("OffsetSchema",C.aa,v),65e3,A.aW("OwnerName",C.bW,v),65001,A.aW("SerialNumber",C.bW,v)],y.p,B.F("auM"))})
w($,"e1Y","b2O",()=>B.Fa(511))
w($,"e1Z","cTK",()=>B.Fa(511))
w($,"e20","cTL",()=>A.d7w(2041))
w($,"e21","b2P",()=>A.d7w(225))
w($,"e2_","r6",()=>B.Fa(766))
x($,"e_P","diz",()=>A.d5X(0,0,0))
x($,"e3o","oP",()=>B.Fa(1))
x($,"e3p","pT",()=>A.dxa(D.H.gaq($.oP()),0,null))
x($,"e3h","oO",()=>E.dz0(1))
x($,"e3i","pS",()=>J.dmF(D.eN.gaq($.oO()),0,null))
x($,"e3j","ix",()=>B.dz3(1))
x($,"e3l","lW",()=>J.b31(D.bM.gaq($.ix()),0,null))
x($,"e3k","Id",()=>A.duZ(D.bM.gaq($.ix())))
x($,"e3f","b2R",()=>B.cWL(1))
x($,"e3g","cTN",()=>A.db9(D.d7.gaq($.b2R()),0))
x($,"e3d","d1g",()=>B.bEH(1))
x($,"e3e","dkz",()=>A.db9(D.fR.gaq($.d1g()),0))
x($,"e3m","d1h",()=>A.dFJ(1))
x($,"e3n","dkA",()=>{var v=$.d1h()
return A.dv_(v.gaq(v))})})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_258",e:"endPart",h:b})})($__dart_deferred_initializers__,"MdjtyhrEm2/RnsKH1ps5PXVMohY=");