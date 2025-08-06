((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_258",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,A={
cX4(d){var x=new A.a4d()
x.a6u(d)
return x},
a4d:function a4d(){this.a=$
this.b=0
this.c=2147483647},
c4F:function c4F(){},
cPJ:function cPJ(){},
c4G:function c4G(){},
cPK:function cPK(){},
dtN(d,e,f,g){var x=A.d_5(),w=A.d_5(),v=A.d_5(),u=new Uint16Array(16),t=new Uint32Array(573),s=new Uint8Array(573)
x=new A.bhS(d,f,x,w,v,u,t,s)
x.b8A(e,g)
x.b8z(C.r1)
return x},
d4O(d,e,f,g){var x=d[e*2],w=d[f*2]
if(x>=w)x=x===w&&g[e]<=g[f]
else x=!0
return x},
d_5(){return new A.cmD()},
dJi(d,e,f){var x,w,v,u,t,s,r,q=new Uint16Array(16)
for(x=0,w=1;w<=15;++w){x=x+f[w-1]<<1>>>0
q[w]=x}for(v=d.$flags|0,u=0;u<=e;++u){t=u*2
s=d[t+1]
if(s===0)continue
r=q[s]
q[s]=r+1
r=A.dJj(r,s)
v&2&&B.L(d)
d[t]=r}},
dJj(d,e){var x,w=0
do{x=A.r0(d,1)
w=(w|d&1)<<1>>>0
if(--e,e>0){d=x
continue}else break}while(!0)
return A.r0(w,1)},
dd5(d){return d<256?C.RK[d]:C.RK[256+A.r0(d,7)]},
d_l(d,e,f,g,h){return new A.cHN(d,e,f,g,h)},
r0(d,e){if(d>=0)return D.c.oH(d,e)
else return D.c.oH(d,e)+D.c.eB(2,(~e>>>0)+65536&65535)},
Xz:function Xz(d,e){this.a=d
this.b=e},
bhS:function bhS(d,e,f,g,h,i,j,k){var _=this
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
_.al=_.ah=_.Y=_.X=_.C=_.bt=_.bj=_.y2=_.y1=_.xr=$},
v4:function v4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cmD:function cmD(){this.c=this.b=this.a=$},
cHN:function cHN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bw0:function bw0(d,e,f,g){var _=this
_.a=d
_.b=null
_.c=e
_.e=_.d=0
_.r=f
_.w=g},
c4E:function c4E(){},
apD:function apD(d,e){this.a=d
this.b=e},
bwh(d,e,f,g){var x,w,v=new A.bwg(e)
if(g==null)g=0
if(f==null)f=d.length-g
x=d.length
if(g+f>x)f=x-g
w=y.D.b(d)?d:new Uint8Array(B.c9(d))
x=J.dx(D.H.gaq(w),w.byteOffset+g,f)
v.b=x
v.d=x.length
return v},
bwg:function bwg(d){var _=this
_.b=null
_.c=0
_.d=$
_.a=d},
bwi:function bwi(){},
d8Q(d,e){var x=e==null?32768:e
return new A.aCt(new Uint8Array(x),d)},
aCt:function aCt(d,e){this.b=0
this.c=d
this.a=e},
bGP:function bGP(){},
a4n(d,e,f){return A.dxz(d,e,f)},
dxz(d,e,f){var x=0,w=B.l(y.D),v
var $async$a4n=B.h(function(g,h){if(g===1)return B.i(h,w)
while(true)switch(x){case 0:x=3
return B.d(A.Kq(d,e,"jpg",new A.buU(d,e,f),f),$async$a4n)
case 3:v=h
x=1
break
case 1:return B.j(v,w)}})
return B.k($async$a4n,w)},
axD(d,e){return A.dxA(d,e)},
dxA(d,e){var x=0,w=B.l(y.D),v
var $async$axD=B.h(function(f,g){if(f===1)return B.i(g,w)
while(true)switch(x){case 0:x=3
return B.d(A.Kq(d,e,"png",new A.buV(d,e),null),$async$axD)
case 3:v=g
x=1
break
case 1:return B.j(v,w)}})
return B.k($async$axD,w)},
buW(d,e,f){return A.dxB(d,e,f)},
dxB(d,e,f){var x=0,w=B.l(y.D),v
var $async$buW=B.h(function(g,h){if(g===1)return B.i(h,w)
while(true)switch(x){case 0:x=3
return B.d(A.Kq(d,e,"webp",new A.buX(d,e,f),f),$async$buW)
case 3:v=h
x=1
break
case 1:return B.j(v,w)}})
return B.k($async$buW,w)},
Kq(d,e,f,g,h){return A.dxy(d,e,f,g,h)},
dxy(d,e,f,g,h){var x=0,w=B.l(y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j
var $async$Kq=B.h(function(i,a0){if(i===1){t.push(a0)
x=u}while(true)switch(x){case 0:if(!$.d35){v=g.$0()
x=1
break}m=$.hx().b
m===$&&B.b()
r=m
q="uploads/"+Date.now()+"."+f
u=4
m=r.as
m===$&&B.b()
x=7
return B.d(m.cg("images-temp").Te(q,d),$async$Kq)
case 7:p=a0
if(J.bl(p)===0){m=g.$0()
v=m
x=1
break}u=9
m=r.as
m===$&&B.b()
x=12
return B.d(m.cg("images-temp").a0h(0,q,new A.bZU(e,h,C.bB3)),$async$Kq)
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
if(m instanceof B.Na){n=m
if(n.c==="403")$.d35=!1
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
return B.d(m.cg("images-temp").I(0,B.a([q],y.T)),$async$Kq)
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
case 6:case 1:return B.j(v,w)
case 2:return B.i(t.at(-1),w)}})
return B.k($async$Kq,w)},
cX9(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n=null,m=A.dga(d)
if(m==null)throw B.p(B.cJ("Failed to decode "+f+" image"))
x=A.dRa(m,e)
if(f==="jpg"){w=g==null?85:g
v=new Uint8Array(64)
u=new Uint8Array(64)
t=new Float32Array(64)
s=new Float32Array(64)
r=B.c2(65535,n,!1,y.cl)
q=y.s
p=B.c2(65535,n,!1,q)
o=B.c2(64,n,!1,q)
q=B.c2(64,n,!1,q)
v=new A.bxw(v,u,t,s,r,p,o,q,new Int32Array(2048))
v.e=v.VL(C.Yv,C.uJ)
v.f=v.VL(C.Tw,C.uJ)
v.r=v.VL(C.QC,C.RV)
v.w=v.VL(C.Sl,C.UN)
v.blj()
v.blv()
v.aTt(w)
return new Uint8Array(B.c9(v.bM4(x,C.Qa)))}else if(f==="png")return new Uint8Array(B.c9(new A.bIf(C.byP,6).bM5(x,!1)))
else if(f==="webp")return d
else throw B.p(B.cJ("Unsupported image format: "+f))},
dxw(d){var x=d.length
if(x>=2&&d[0]===255&&d[1]===216)return"jpg"
if(x>=8&&d[0]===137&&d[1]===80&&d[2]===78&&d[3]===71)return"png"
if(x>=12&&d[0]===82&&d[1]===73&&d[2]===70&&d[3]===70&&d[8]===87&&d[9]===69&&d[10]===66&&d[11]===80)return"webp"
return"jpg"},
ED(d,e,f){return A.dxx(d,e,f)},
dxx(d,e,f){var x=0,w=B.l(y.D),v,u
var $async$ED=B.h(function(g,h){if(g===1)return B.i(h,w)
while(true)switch(x){case 0:u=A.dxw(d)
x=u==="jpg"?3:5
break
case 3:x=6
return B.d(A.a4n(d,e,f),$async$ED)
case 6:v=h
x=1
break
x=4
break
case 5:x=u==="png"?7:9
break
case 7:x=10
return B.d(A.axD(d,e),$async$ED)
case 10:v=h
x=1
break
x=8
break
case 9:x=u==="webp"?11:13
break
case 11:x=14
return B.d(A.buW(d,e,f),$async$ED)
case 14:v=h
x=1
break
x=12
break
case 13:x=15
return B.d(A.a4n(d,e,f),$async$ED)
case 15:v=h
x=1
break
case 12:case 8:case 4:case 1:return B.j(v,w)}})
return B.k($async$ED,w)},
buU:function buU(d,e,f){this.a=d
this.b=e
this.c=f},
buV:function buV(d,e){this.a=d
this.b=e},
buX:function buX(d,e,f){this.a=d
this.b=e
this.c=f},
b9X:function b9X(d,e){this.a=d
this.b=e},
iB:function iB(d){this.a=-1
this.b=d},
QE:function QE(d){this.a=d},
QF:function QF(d){this.a=d},
QG:function QG(d){this.a=d},
QH:function QH(d){this.a=d},
QI:function QI(d){this.a=d},
QJ:function QJ(d){this.a=d},
QM:function QM(d,e){this.a=d
this.b=e},
QN:function QN(d){this.a=d},
QO:function QO(d,e){this.a=d
this.b=e},
QP:function QP(d){this.a=d},
QQ:function QQ(d,e){this.a=d
this.b=e},
dq2(d,e,f,g){var x=new A.QK(new Uint8Array(4))
x.b0R(d,e,f,g)
return x},
zZ:function zZ(d){this.a=d},
aqy:function aqy(d){this.a=d},
QK:function QK(d){this.a=d},
a0V:function a0V(d){this.a=d},
aqK:function aqK(d){this.a=d},
b28(d,e,f){var x
if(e===f)return d
switch(e.a){case 0:if(d===0)x=0
else{x=C.a6S.h(0,f)
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
case 1:return D.c.Z(B.bx(d),1)
case 2:return d
case 3:return d*17
case 4:return d*4369
case 5:return d*286331153
case 6:return d*8
case 7:return d*2184
case 8:return d*143165576
case 9:case 10:case 11:return d/3}break
case 3:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.Z(B.bx(d),6)
case 2:return D.c.Z(B.bx(d),4)
case 3:return d
case 4:return d*257
case 5:return d*16843009
case 6:return D.c.Z(B.bx(d),1)
case 7:return d*128
case 8:return d*8421504
case 9:case 10:case 11:return d/255}break
case 4:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.Z(B.bx(d),14)
case 2:return D.c.Z(B.bx(d),12)
case 3:return D.c.Z(B.bx(d),8)
case 4:return d
case 5:return B.bx(d)<<8>>>0
case 6:return D.c.Z(B.bx(d),9)
case 7:return D.c.Z(B.bx(d),1)
case 8:return d*524296
case 9:case 10:case 11:return d/65535}break
case 5:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.Z(B.bx(d),30)
case 2:return D.c.Z(B.bx(d),28)
case 3:return D.c.Z(B.bx(d),24)
case 4:return D.c.Z(B.bx(d),16)
case 5:return d
case 6:return D.c.Z(B.bx(d),25)
case 7:return D.c.Z(B.bx(d),17)
case 8:return D.c.Z(B.bx(d),1)
case 9:case 10:case 11:return d/4294967295}break
case 6:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.Z(B.bx(d),5)
case 2:return d<=0?0:D.c.Z(B.bx(d),3)
case 3:return d<=0?0:B.bx(d)<<1>>>0
case 4:return d<=0?0:B.bx(d)*516
case 5:return d<=0?0:B.bx(d)*33818640
case 6:return d
case 7:return d*258
case 8:return d*16909320
case 9:case 10:case 11:return d/127}break
case 7:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.Z(B.bx(d),15)
case 2:return d<=0?0:D.c.Z(B.bx(d),11)
case 3:return d<=0?0:D.c.Z(B.bx(d),7)
case 4:return d<=0?0:B.bx(d)<<1>>>0
case 5:return d<=0?0:B.bx(d)*131076
case 6:return D.c.Z(B.bx(d),8)
case 7:return d
case 8:return B.bx(d)*65538
case 9:case 10:case 11:return d/32767}break
case 8:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.Z(B.bx(d),29)
case 2:return d<=0?0:D.c.Z(B.bx(d),27)
case 3:return d<=0?0:D.c.Z(B.bx(d),23)
case 4:return d<=0?0:D.c.Z(B.bx(d),16)
case 5:return d<=0?0:B.bx(d)<<1>>>0
case 6:return D.c.Z(B.bx(d),24)
case 7:return D.c.Z(B.bx(d),16)
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
p8:function p8(d,e){this.a=d
this.b=e},
apo:function apo(d,e){this.a=d
this.b=e},
a2Y(d){var x=new A.RX(B.I(y.N,y.P))
x.b14(d)
return x},
d5w(d){var x=new A.RX(B.I(y.N,y.P))
x.oy(0,d)
return x},
RX:function RX(d){this.a=d},
aQM:function aQM(d,e){this.a=d
this.b=e},
aW(d,e,f){return new A.auQ(d,e)},
auQ:function auQ(d,e){this.a=d
this.b=e},
vY:function vY(d){this.a=d},
buM:function buM(d){this.a=d},
d6D(d){var x=new A.rz(B.I(y.p,y.r),new A.vY(B.I(y.N,y.P)))
x.ae8(d)
return x},
rz:function rz(d,e){this.a=d
this.b=e},
buN:function buN(d){this.a=d},
buO:function buO(d){this.a=d},
dxv(d){var x=new Uint16Array(1)
x[0]=d
return new A.AA(x)},
d6L(d,e){var x=new A.AA(new Uint16Array(e))
x.b19(d,e)
return x},
dxu(d){var x=new Uint32Array(1)
x[0]=d
return new A.u2(x)},
d6G(d,e){var x=new A.u2(new Uint32Array(e))
x.b16(d,e)
return x},
d6H(d,e){var x,w=J.js(e,y.i)
for(x=0;x<e;++x)w[x]=new A.pq(d.ag(),d.ag())
return new A.vZ(w)},
d6K(d,e){var x=new A.Az(new Int16Array(e))
x.b18(d,e)
return x},
d6I(d,e){var x=new A.Ay(new Int32Array(e))
x.b17(d,e)
return x},
d6J(d,e){var x,w,v,u,t=J.js(e,y.i)
for(x=0;x<e;++x){w=d.ag()
v=$.iy()
v.$flags&2&&B.L(v)
v[0]=w
w=$.lX()
u=w[0]
v[0]=d.ag()
t[x]=new A.pq(u,w[0])}return new A.w_(t)},
d6M(d){var x=new Float32Array(1)
x[0]=d
return new A.Ez(x)},
d6N(d,e){var x=new A.Ez(new Float32Array(e))
x.b1a(d,e)
return x},
d6E(d){var x=new Float64Array(1)
x[0]=d
return new A.Ey(x)},
d6F(d,e){var x=new A.Ey(new Float64Array(e))
x.b15(d,e)
return x},
oe:function oe(d,e){this.a=d
this.b=e},
l3:function l3(){},
vX:function vX(d){this.a=d},
Ex:function Ex(d){this.a=d},
AA:function AA(d){this.a=d},
u2:function u2(d){this.a=d},
vZ:function vZ(d){this.a=d},
ya:function ya(d){this.a=d},
Az:function Az(d){this.a=d},
Ay:function Ay(d){this.a=d},
w_:function w_(d){this.a=d},
Ez:function Ez(d){this.a=d},
Ey:function Ey(d){this.a=d},
Ko:function Ko(d){this.a=d},
d3x(d){var x,w,v=new A.b8u()
if(!A.cVz(d))B.aa(A.co("Not a bitmap file."))
d.d+=2
x=d.ag()
w=$.iy()
w.$flags&2&&B.L(w)
w[0]=x
x=$.lX()
d.d+=4
w[0]=d.ag()
v.b=x[0]
return v},
cVz(d){if(d.c-d.d<2)return!1
return A.ct(d,null,0).av()===19778},
dpe(d,e){var x,w,v,u,t=e==null?A.d3x(d):e,s=d.d,r=d.ag(),q=d.ag(),p=$.iy()
p.$flags&2&&B.L(p)
p[0]=q
q=$.lX()
x=q[0]
p[0]=d.ag()
q=q[0]
w=d.av()
v=d.av()
u=C.WT[d.ag()]
d.ag()
p[0]=d.ag()
p[0]=d.ag()
p=d.ag()
d.ag()
s=new A.Iu(t,x,q,r,w,v,u,p,s)
s.anV(d,e)
return s},
ng:function ng(d,e){this.a=d
this.b=e},
b8u:function b8u(){this.b=$},
Iu:function Iu(d,e,f,g,h,i,j,k,l){var _=this
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
aps:function aps(d){this.a=$
this.b=null
this.c=d},
b8t:function b8t(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
biS:function biS(d){this.a=$
this.b=null
this.c=d},
bhA:function bhA(){},
bhB:function bhB(){},
blG:function blG(){},
auS:function auS(d,e,f){this.a=d
this.b=e
this.c=f},
ay5:function ay5(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
RZ:function RZ(d,e){this.a=d
this.b=e},
JB:function JB(d,e){this.a=d
this.b=e},
auT:function auT(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
d5y(d,e,f,g){var x,w
switch(d.a){case 1:return new A.bwu(f,e)
case 2:return new A.ay7(f,g==null?1:g,e)
case 3:return new A.ay7(f,g==null?16:g,e)
case 4:x=g==null?32:g
w=new A.bws(f,x,e)
w.b1i(e,f,x)
return w
case 5:return new A.bwt(f,g==null?16:g,e)
case 6:return new A.ay5(f,g==null?32:g,!1,e)
case 7:return new A.ay5(f,g==null?32:g,!0,e)
default:throw B.p(A.co("Invalid compression type: "+d.j(0)))}},
vL:function vL(d,e){this.a=d
this.b=e},
bng:function bng(){},
bwr:function bwr(){},
dvn(d,e,f,g){var x,w,v,u,t,s,r,q
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
s=B.c2(65537,0,!1,y.p)
r=J.jJ(16384,y.W)
for(q=0;q<16384;++q)r[q]=new A.auU()
A.dvo(d,e-20,w,v,s)
if(u>8*(e-(d.d-x)))throw B.p(A.co("Error in header for Huffman-encoded data (invalid number of bits)."))
A.dvk(s,w,v,r)
A.dvm(s,r,d,u,v,g,f)},
dvm(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p="Error in Huffman-encoded data (invalid code).",o=B.a([0,0],y.t),n=f.d+D.c.aL(g+7,8)
for(x=0;f.d<n;){A.cWz(o,f)
for(;w=o[1],w>=14;){v=e[D.c.oH(o[0],w-14)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cWA(v.b,h,o,f,j,x,i)}else{if(v.c==null)throw B.p(A.co(p))
for(t=0;t<v.b;++t){s=d[v.c[t]]&63
while(!0){w=o[1]
if(!(w<s&&f.d<n))break
A.cWz(o,f)}if(w>=s){u=v.c
w-=s
if(d[u[t]]>>>6===(D.c.oH(o[0],w)&D.c.eB(1,s)-1)>>>0){o[1]=w
r=A.cWA(u[t],h,o,f,j,x,i)
x=r
break}}}if(t===v.b)throw B.p(A.co(p))}}}q=8-g&7
o[0]=D.c.Z(o[0],q)
o[1]=o[1]-q
for(;w=o[1],w>0;){v=e[D.c.f9(o[0],14-w)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cWA(v.b,h,o,f,j,x,i)}else throw B.p(A.co(p))}if(x!==i)throw B.p(A.co("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
cWA(d,e,f,g,h,i,j){var x,w,v,u,t,s="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)A.cWz(f,g)
x=f[1]-8
f[1]=x
w=D.c.oH(f[0],x)&255
if(i+w>j)throw B.p(A.co(s))
v=h[i-1]
for(x=h.$flags|0;u=w-1,w>0;w=u,i=t){t=i+1
x&2&&B.L(h)
h[i]=v}}else{if(i<j){h.toString
t=i+1
h.$flags&2&&B.L(h)
h[i]=d}else throw B.p(A.co(s))
i=t}return i},
dvk(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n="Error in Huffman-encoded data (invalid code table entry)."
for(x=y.t,w=y.p;e<=f;++e){v=d[e]
u=v>>>6
t=v&63
if(D.c.i5(u,t)!==0)throw B.p(A.co(n))
if(t>14){s=g[D.c.ht(u,t-14)]
if(s.a!==0)throw B.p(A.co(n))
v=++s.b
r=s.c
if(r!=null){v=B.c2(v,0,!1,w)
s.c=v
for(q=s.b-1,p=0;p<q;++p)v[p]=r[p]}else s.c=B.a([0],x)
s.c[s.b-1]=e}else if(t!==0){v=14-t
o=D.c.f9(u,v)
for(p=D.c.f9(1,v);p>0;--p,++o){s=g[o]
if(s.a!==0||s.c!=null)throw B.p(A.co(n))
s.a=t
s.b=e}}}},
dvo(d,e,f,g,h){var x,w,v,u,t,s="Error in Huffman-encoded data (unexpected end of code table data).",r="Error in Huffman-encoded data (code table is longer than expected).",q=d.d,p=B.a([0,0],y.t)
for(x=g+1;f<=g;++f){if(d.d-q>e)throw B.p(A.co(s))
w=A.d5z(6,p,d)
h[f]=w
if(w===63){if(d.d-q>e)throw B.p(A.co(s))
v=A.d5z(8,p,d)+6
if(f+v>x)throw B.p(A.co(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}else if(w>=59){v=w-59+2
if(f+v>x)throw B.p(A.co(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}}A.dvl(h)},
dvl(d){var x,w,v,u,t,s=B.c2(59,0,!1,y.p)
for(x=0;x<65537;++x){w=d[x]
s[w]=s[w]+1}for(v=0,x=58;x>0;--x,v=u){u=v+s[x]>>>1
s[x]=v}for(x=0;x<65537;++x){t=d[x]
if(t>0){w=s[t]
s[t]=w+1
d[x]=(t|w<<6)>>>0}}},
cWz(d,e){d[0]=((d[0]<<8|e.cD())&-1)>>>0
d[1]=(d[1]+8&-1)>>>0},
d5z(d,e,f){var x
for(;x=e[1],x<d;){e[0]=((e[0]<<8|J.v(f.a,f.d++))&-1)>>>0
e[1]=(e[1]+8&-1)>>>0}x-=d
e[1]=x
return(D.c.oH(e[0],x)&D.c.eB(1,d)-1)>>>0},
auU:function auU(){this.b=this.a=0
this.c=null},
dvp(d){var x=A.dg(d,!1,null,0)
if(x.ag()!==20000630)return!1
if(x.cD()!==2)return!1
if((x.ts()&4294967289)>>>0!==0)return!1
return!0},
bni:function bni(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
d79(d,e,f){var x=new A.ay6(d,B.a([],y.Q),B.I(y.N,y.n),C.Oq,e)
x.b0X(d,e,f)
return x},
a34:function a34(){},
bnj:function bnj(d,e){this.a=d
this.b=e},
ay6:function ay6(d,e,f,g,h){var _=this
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
bws:function bws(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
aU6:function aU6(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
bwt:function bwt(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
bwu:function bwu(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
ay7:function ay7(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
bnh:function bnh(){this.a=null},
d6b(d){var x=new Uint8Array(d*3)
return new A.a3I(A.dwP(d),d,null,new A.wi(x,d,3))},
dwO(d){return new A.a3I(d.a,d.b,d.c,A.d8W(d.d))},
dwP(d){var x
for(x=1;x<=8;++x)if(D.c.eB(1,x)>=d)return x
return 0},
a3I:function a3I(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3J:function a3J(){},
ay8:function ay8(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=$},
aws:function aws(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
brV:function brV(){var _=this
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
d6A(d){var x,w,v,u,t,s
if(d.av()!==0)return null
x=d.av()
if(x>=3)return null
w=C.aDG[x]
if(w===C.OW)return null
v=d.av()
u=J.js(v,y.Y)
for(t=0;t<v;++t){J.v(d.a,d.d++)
s=J.v(d.a,d.d++)
J.v(d.a,d.d++);++d.d
d.av()
d.av()
u[t]=new A.axr(s,d.ag(),d.ag())}return new A.buv(w,v,u)},
Su:function Su(d,e){this.a=d
this.b=e},
buv:function buv(d,e,f){this.c=d
this.d=e
this.e=f},
axr:function axr(d,e,f){this.b=d
this.d=e
this.e=f},
but:function but(d,e,f,g,h,i,j,k,l){var _=this
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
buu:function buu(){this.b=this.a=null},
aqD:function aqD(d,e,f){this.e=d
this.f=e
this.r=f},
Kf:function Kf(){},
Kg:function Kg(d){this.a=d},
a4e:function a4e(d){this.a=d},
bxs:function bxs(){this.d=null},
EU:function EU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.y=_.x=_.w=_.r=_.f=_.e=$},
d7t(){var x=B.c2(4,null,!1,y.a7),w=B.a([],y.cB),v=y.bT,u=J.ER(0,v)
v=J.ER(0,v)
return new A.bxu(new A.RX(B.I(y.N,y.P)),x,w,u,v,B.a([],y.E))},
bxu:function bxu(d,e,f,g,h,i){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i},
bxv:function bxv(d,e){this.a=d
this.b=e},
Y6:function Y6(d){this.a=d
this.b=0},
ayo:function ayo(d,e){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=d
_.z=e},
bxy:function bxy(){this.r=this.f=$},
ayp:function ayp(d,e,f,g,h,i,j,k){var _=this
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
ayn:function ayn(){},
bxt:function bxt(d,e){this.a=d
this.b=e},
bxw:function bxw(d,e,f,g,h,i,j,k,l){var _=this
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
Ui:function Ui(d,e){this.a=d
this.b=e},
a7H:function a7H(d,e){this.a=d
this.b=e},
a7I:function a7I(){},
ay9:function ay9(d,e,f,g,h,i,j,k,l){var _=this
_.y=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
d7b(){var x=y.N
return new A.bww(B.I(x,x),B.a([],y.d),B.a([],y.t))},
FH:function FH(d,e){this.a=d
this.b=e},
bIh:function bIh(){},
bww:function bww(d,e,f){var _=this
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
aDf:function aDf(d){var _=this
_.a=d
_.c=_.b=0
_.d=$
_.e=0},
aDg:function aDg(d,e){this.a=d
this.b=e},
bIf:function bIf(d,e){var _=this
_.a=null
_.b=d
_.c=0
_.d=e
_.e=$
_.f=0
_.r=!1
_.w=null},
FI:function FI(d,e){this.a=d
this.b=e},
LQ:function LQ(d){this.b=this.a=0
this.e=d},
bIi:function bIi(d){this.b=this.a=null
this.c=d},
bIj:function bIj(){},
aDK:function aDK(){this.b=this.a=null},
aDL:function aDL(){this.b=this.a=null},
yA:function yA(){},
aDN:function aDN(){this.b=this.a=null},
aDO:function aDO(){this.b=this.a=null},
aDR:function aDR(){this.b=this.a=null},
aDS:function aDS(){this.b=this.a=null},
a83:function a83(d){this.b=d},
aDQ:function aDQ(){this.b=$
this.c=null},
bJm:function bJm(){var _=this
_.w=_.r=_.f=_.e=$},
Uz:function Uz(d){this.a=d
this.c=null},
d9j(d){var x=new A.bJo(B.I(y.p,y.a2))
x.b1v(d)
return x},
cYp(d,e,f,g){var x=d/255,w=e/255,v=f/255,u=g/255,t=w*(1-v),s=x*(1-u)
return D.e.L(D.e.aM((2*x<v?2*w*x+t+s:u*v-2*(v-x)*(u-w)+t+s)*255,0,255))},
bJp(d,e){if(e===0)return 0
return D.e.L(D.c.aM(D.e.L(255*(1-(1-d/255)/(e/255))),0,255))},
bJr(d,e){return D.e.L(D.c.aM(d+e-255,0,255))},
cYr(d,e){return D.e.L(D.c.aM(255-(255-e)*(255-d),0,255))},
bJq(d,e){if(e===255)return 255
return D.e.L(D.e.aM(d/255/(1-e/255)*255,0,255))},
cYs(d,e){var x=d/255,w=e/255,v=1-w
return D.e.aD(255*(v*w*x+w*(1-v*(1-x))))},
cYn(d,e){var x=e/255,w=d/255
if(w<0.5)return D.e.aD(510*x*w)
else return D.e.aD(255*(1-2*(1-x)*(1-w)))},
cYt(d,e){if(e<128)return A.bJp(d,2*e)
else return A.bJq(d,2*(e-128))},
cYo(d,e){var x
if(e<128)return A.bJr(d,2*e)
else{x=2*(e-128)
return x+d>255?255:d+x}},
cYq(d,e){return e<128?Math.min(d,2*e):Math.max(d,2*(e-128))},
cYm(d,e){return D.e.aD(e+d-2*e*d/255)},
qu(d,e,f){var x
if(d==null)x=0
else x=f===1?d[e]:(d[e]<<8|d[e+1])>>>8
return x},
d9k(b5,b6,b7,b8,b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4=B.I(y.p,y.aG)
for(x=b9.length,w=0;v=b9.length,w<v;b9.length===x||(0,B.K)(b9),++w){u=b9[w]
b4.m(0,u.a,u)}if(b6===8)t=1
else t=b6===16?2:-1
s=A.iS(b3,b3,C.aj,0,C.bG,b8,b3,0,v,b3,C.aj,b7,!1)
if(t===-1)throw B.p(A.co("PSD: unsupported bit depth: "+B.o(b6)))
r=b4.h(0,0)
q=b4.h(0,1)
p=b4.h(0,2)
o=b4.h(0,-1)
n=B.a([0,0,0],y.t)
m=-t
for(x=s.a,x=x.gaa(x),l=v>=5,k=v===4,j=v>=2,v=v>=4;x.q();){i=x.gM(x)
m+=t
switch(b5){case C.aci:i.sar(0,A.qu(r.c,m,t))
i.saE(A.qu(q.c,m,t))
i.saF(0,A.qu(p.c,m,t))
i.saU(0,v?A.qu(o.c,m,t):255)
if(i.gaU(i)!==0){i.sar(0,(i.gar(i)+i.gaU(i)-255)*255/i.gaU(i))
i.saE((i.gaE()+i.gaU(i)-255)*255/i.gaU(i))
i.saF(0,(i.gaF(i)+i.gaU(i)-255)*255/i.gaU(i))}break
case C.ack:h=A.qu(r.c,m,t)
g=A.qu(q.c,m,t)
f=A.qu(p.c,m,t)
e=v?A.qu(o.c,m,t):255
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
case C.ach:a9=A.qu(r.c,m,t)
e=j?A.qu(o.c,m,t):255
i.sar(0,a9)
i.saE(a9)
i.saF(0,a9)
i.saU(0,e)
break
case C.acj:b0=A.qu(r.c,m,t)
b1=A.qu(q.c,m,t)
d=A.qu(p.c,m,t)
b2=A.qu(b4.h(0,k?-1:3).c,m,t)
e=l?A.qu(o.c,m,t):255
A.dfR(255-b0,255-b1,255-d,255-b2,n)
i.sar(0,n[0])
i.saE(n[1])
i.saF(0,n[2])
i.saU(0,e)
break
default:throw B.p(A.co("Unhandled color mode: "+B.o(b5)))}}return s},
wp:function wp(d,e){this.a=d
this.b=e},
bJo:function bJo(d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=_.w=$
_.y=null
_.z=d
_.as=$
_.ay=_.ax=_.at=null},
aDM:function aDM(d,e){this.a=d
this.b=e},
aDP:function aDP(d,e,f){var _=this
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
dBI(d,e){var x,w
switch(d){case"lsct":x=new A.aDQ()
w=e.c-e.d
x.b=e.ag()
if(w>=12){if(e.jO(4)!=="8BIM")B.aa(A.co("Invalid key in layer additional data"))
x.c=e.jO(4)}if(w>=16)e.ag()
return x
default:return new A.a83(e)}},
UA:function UA(){},
bJn:function bJn(){this.a=null},
aDV:function aDV(){},
Bm:function Bm(d,e,f){this.a=d
this.b=e
this.c=f},
ny:function ny(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a86:function a86(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
UD:function UD(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
aDU:function aDU(){this.y=this.b=this.a=0},
Bn(d,e){return(C.x5[d>>>8]<<17|C.x5[e>>>8]<<16|C.x5[d&255]<<1|C.x5[e&255])>>>0},
us:function us(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
bJs:function bJs(){this.b=this.a=null},
aIr:function aIr(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
pD:function pD(d,e){this.a=d
this.b=e},
bWE:function bWE(){this.a=null
this.b=$},
bXL:function bXL(d){this.a=d
this.c=this.b=0},
aIw:function aIw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
cZi(d,e,f){var x=new A.bXN(e,f,d),w=y.s
x.e=B.c2(e,null,!1,w)
x.f=B.c2(e,null,!1,w)
return x},
bXN:function bXN(d,e,f){var _=this
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
aIx:function aIx(d,e,f,g){var _=this
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
Nx:function Nx(d,e){this.a=d
this.b=e},
lN:function lN(d,e){this.a=d
this.b=e},
uP:function uP(d,e){this.a=d
this.b=e},
bXO:function bXO(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
d7P(){return new A.bza(new Uint8Array(4096))},
bza:function bza(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
bXM:function bXM(){this.a=null
this.c=$},
cZJ(d,e){var x=new Int32Array(4),w=new Int32Array(4),v=new Int8Array(4),u=new Int8Array(4),t=B.c2(8,null,!1,y.ak),s=B.c2(4,null,!1,y.Z)
return new A.c2J(d,e,new A.c2P(),new A.c2T(),new A.c2L(x,w),new A.c2V(v,u),t,s,new Uint8Array(4))},
dcs(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
c2J:function c2J(d,e,f,g,h,i,j,k,l){var _=this
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
_.bt=null
_.X=_.C=$
_.Y=null
_.ah=$},
c2W:function c2W(){},
dcp(d){var x=new A.acW(d)
x.b=254
x.c=0
x.d=-8
return x},
acW:function acW(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
fi(d,e,f){return D.c.lx(D.c.Z(d+2*e+f+2,2),32)},
dH7(d){var x,w=B.a([A.fi(J.v(d.a,d.d+-33),J.v(d.a,d.d+-32),J.v(d.a,d.d+-31)),A.fi(J.v(d.a,d.d+-32),J.v(d.a,d.d+-31),J.v(d.a,d.d+-30)),A.fi(J.v(d.a,d.d+-31),J.v(d.a,d.d+-30),J.v(d.a,d.d+-29)),A.fi(J.v(d.a,d.d+-30),J.v(d.a,d.d+-29),J.v(d.a,d.d+-28))],y.t)
for(x=0;x<4;++x)d.AX(x*32,4,w)},
dH_(d){var x=J.v(d.a,d.d+-33),w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95),s=A.ct(d,null,0),r=s.SZ(),q=A.fi(x,w,v)
r.$flags&2&&B.L(r)
r[0]=16843009*q
s.d+=32
q=s.SZ()
r=A.fi(w,v,u)
q.$flags&2&&B.L(q)
q[0]=16843009*r
s.d+=32
r=s.SZ()
q=A.fi(v,u,t)
r.$flags&2&&B.L(r)
r[0]=16843009*q
s.d+=32
q=s.SZ()
r=A.fi(u,t,t)
q.$flags&2&&B.L(q)
q[0]=16843009*r},
dGY(d){var x,w,v,u
for(x=4,w=0;w<4;++w)x+=J.v(d.a,d.d+(w-32))+J.v(d.a,d.d+(-1+w*32))
x=D.c.Z(x,3)
for(w=0;w<4;++w){v=d.a
u=d.d+w*32
J.vf(v,u,u+4,x)}},
cZK(d,e){var x,w,v,u,t,s=255-J.v(d.a,d.d+-33)
for(x=0,w=0;w<e;++w){v=s+J.v(d.a,d.d+(x-1))
for(u=0;u<e;++u){t=$.r6()[v+J.v(d.a,d.d+(-32+u))]
J.bZ(d.a,d.d+(x+u),t)}x+=32}},
dH5(d){A.cZK(d,4)},
dH6(d){A.cZK(d,8)},
dH4(d){A.cZK(d,16)},
dH3(d){var x,w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95),s=J.v(d.a,d.d+-33),r=J.v(d.a,d.d+-32),q=J.v(d.a,d.d+-31),p=J.v(d.a,d.d+-30),o=J.v(d.a,d.d+-29)
d.m(0,96,A.fi(v,u,t))
x=A.fi(w,v,u)
d.m(0,97,x)
d.m(0,64,x)
x=A.fi(s,w,v)
d.m(0,98,x)
d.m(0,65,x)
d.m(0,32,x)
x=A.fi(r,s,w)
d.m(0,99,x)
d.m(0,66,x)
d.m(0,33,x)
d.m(0,0,x)
x=A.fi(q,r,s)
d.m(0,67,x)
d.m(0,34,x)
d.m(0,1,x)
x=A.fi(p,q,r)
d.m(0,35,x)
d.m(0,2,x)
d.m(0,3,A.fi(o,p,q))},
dH2(d){var x,w=J.v(d.a,d.d+-32),v=J.v(d.a,d.d+-31),u=J.v(d.a,d.d+-30),t=J.v(d.a,d.d+-29),s=J.v(d.a,d.d+-28),r=J.v(d.a,d.d+-27),q=J.v(d.a,d.d+-26),p=J.v(d.a,d.d+-25)
d.m(0,0,A.fi(w,v,u))
x=A.fi(v,u,t)
d.m(0,32,x)
d.m(0,1,x)
x=A.fi(u,t,s)
d.m(0,64,x)
d.m(0,33,x)
d.m(0,2,x)
x=A.fi(t,s,r)
d.m(0,96,x)
d.m(0,65,x)
d.m(0,34,x)
d.m(0,3,x)
x=A.fi(s,r,q)
d.m(0,97,x)
d.m(0,66,x)
d.m(0,35,x)
x=A.fi(r,q,p)
d.m(0,98,x)
d.m(0,67,x)
d.m(0,99,A.fi(q,p,p))},
dH9(d){var x=J.v(d.a,d.d+-1),w=J.v(d.a,d.d+31),v=J.v(d.a,d.d+63),u=J.v(d.a,d.d+-33),t=J.v(d.a,d.d+-32),s=J.v(d.a,d.d+-31),r=J.v(d.a,d.d+-30),q=J.v(d.a,d.d+-29),p=D.c.lx(D.c.Z(u+t+1,1),32)
d.m(0,65,p)
d.m(0,0,p)
p=D.c.lx(D.c.Z(t+s+1,1),32)
d.m(0,66,p)
d.m(0,1,p)
p=D.c.lx(D.c.Z(s+r+1,1),32)
d.m(0,67,p)
d.m(0,2,p)
d.m(0,3,D.c.lx(D.c.Z(r+q+1,1),32))
d.m(0,96,A.fi(v,w,x))
d.m(0,64,A.fi(w,x,u))
p=A.fi(x,u,t)
d.m(0,97,p)
d.m(0,32,p)
p=A.fi(u,t,s)
d.m(0,98,p)
d.m(0,33,p)
p=A.fi(t,s,r)
d.m(0,99,p)
d.m(0,34,p)
d.m(0,35,A.fi(s,r,q))},
dH8(d){var x,w=J.v(d.a,d.d+-32),v=J.v(d.a,d.d+-31),u=J.v(d.a,d.d+-30),t=J.v(d.a,d.d+-29),s=J.v(d.a,d.d+-28),r=J.v(d.a,d.d+-27),q=J.v(d.a,d.d+-26),p=J.v(d.a,d.d+-25)
d.m(0,0,D.c.lx(D.c.Z(w+v+1,1),32))
x=D.c.lx(D.c.Z(v+u+1,1),32)
d.m(0,64,x)
d.m(0,1,x)
x=D.c.lx(D.c.Z(u+t+1,1),32)
d.m(0,65,x)
d.m(0,2,x)
x=D.c.lx(D.c.Z(t+s+1,1),32)
d.m(0,66,x)
d.m(0,3,x)
d.m(0,32,A.fi(w,v,u))
x=A.fi(v,u,t)
d.m(0,96,x)
d.m(0,33,x)
x=A.fi(u,t,s)
d.m(0,97,x)
d.m(0,34,x)
x=A.fi(t,s,r)
d.m(0,98,x)
d.m(0,35,x)
d.m(0,67,A.fi(s,r,q))
d.m(0,99,A.fi(r,q,p))},
dH0(d){var x,w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95)
d.m(0,0,D.c.lx(D.c.Z(w+v+1,1),32))
x=D.c.lx(D.c.Z(v+u+1,1),32)
d.m(0,32,x)
d.m(0,2,x)
x=D.c.lx(D.c.Z(u+t+1,1),32)
d.m(0,64,x)
d.m(0,34,x)
d.m(0,1,A.fi(w,v,u))
x=A.fi(v,u,t)
d.m(0,33,x)
d.m(0,3,x)
x=A.fi(u,t,t)
d.m(0,65,x)
d.m(0,35,x)
d.m(0,99,t)
d.m(0,98,t)
d.m(0,97,t)
d.m(0,96,t)
d.m(0,66,t)
d.m(0,67,t)},
dGZ(d){var x=J.v(d.a,d.d+-1),w=J.v(d.a,d.d+31),v=J.v(d.a,d.d+63),u=J.v(d.a,d.d+95),t=J.v(d.a,d.d+-33),s=J.v(d.a,d.d+-32),r=J.v(d.a,d.d+-31),q=J.v(d.a,d.d+-30),p=D.c.lx(D.c.Z(x+t+1,1),32)
d.m(0,34,p)
d.m(0,0,p)
p=D.c.lx(D.c.Z(w+x+1,1),32)
d.m(0,66,p)
d.m(0,32,p)
p=D.c.lx(D.c.Z(v+w+1,1),32)
d.m(0,98,p)
d.m(0,64,p)
d.m(0,96,D.c.lx(D.c.Z(u+v+1,1),32))
d.m(0,3,A.fi(s,r,q))
d.m(0,2,A.fi(t,s,r))
p=A.fi(x,t,s)
d.m(0,35,p)
d.m(0,1,p)
p=A.fi(w,x,t)
d.m(0,67,p)
d.m(0,33,p)
p=A.fi(v,w,x)
d.m(0,99,p)
d.m(0,65,p)
d.m(0,97,A.fi(u,v,w))},
dHk(d){var x
for(x=0;x<16;++x)d.ti(x*32,16,d,-32)},
dHi(d){var x,w,v,u,t
for(x=0,w=16;w>0;--w){v=J.v(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.vf(u,t,t+16,v)
x+=32}},
c2N(d,e){var x,w,v
for(x=0;x<16;++x){w=e.a
v=e.d+x*32
J.vf(w,v,v+16,d)}},
dHa(d){var x,w
for(x=16,w=0;w<16;++w)x+=J.v(d.a,d.d+(-1+w*32))+J.v(d.a,d.d+(w-32))
A.c2N(D.c.Z(x,5),d)},
dHc(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.v(d.a,d.d+(-1+w*32))
A.c2N(D.c.Z(x,4),d)},
dHb(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.v(d.a,d.d+(w-32))
A.c2N(D.c.Z(x,4),d)},
dHd(d){A.c2N(128,d)},
dHl(d){var x
for(x=0;x<8;++x)d.ti(x*32,8,d,-32)},
dHj(d){var x,w,v,u,t
for(x=0,w=0;w<8;++w){v=J.v(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.vf(u,t,t+8,v)
x+=32}},
c2O(d,e){var x,w,v
for(x=0;x<8;++x){w=e.a
v=e.d+x*32
J.vf(w,v,v+8,d)}},
dHe(d){var x,w
for(x=8,w=0;w<8;++w)x+=J.v(d.a,d.d+(w-32))+J.v(d.a,d.d+(-1+w*32))
A.c2O(D.c.Z(x,4),d)},
dHf(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.v(d.a,d.d+(w-32))
A.c2O(D.c.Z(x,3),d)},
dHg(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.v(d.a,d.d+(-1+w*32))
A.c2O(D.c.Z(x,3),d)},
dHh(d){A.c2O(128,d)},
Hh(d,e,f,g,h){var x=e+f+g*32,w=J.v(d.a,d.d+x)+D.c.Z(h,3)
if(!((w&-256)>>>0===0))w=w<0?0:255
d.m(0,x,w)},
c2M(d,e,f,g,h){A.Hh(d,0,0,e,f+g)
A.Hh(d,0,1,e,f+h)
A.Hh(d,0,2,e,f-h)
A.Hh(d,0,3,e,f-g)},
dH1(){var x,w,v,u
if(!$.dcq){for(x=-255;x<=255;++x){w=$.b2P()
v=255+x
u=x<0?-x:x
w.$flags&2&&B.L(w)
w[v]=u
u=$.cUF()
w=D.c.Z(w[v],1)
u.$flags&2&&B.L(u)
u[v]=w}for(x=-1020;x<=1020;++x){w=$.cUG()
if(x<-128)v=-128
else v=x>127?127:x
w.$flags&2&&B.L(w)
w[1020+x]=v}for(x=-112;x<=112;++x){w=$.b2Q()
if(x<-16)v=-16
else v=x>15?15:x
w.$flags&2&&B.L(w)
w[112+x]=v}for(x=-255;x<=510;++x){w=$.r6()
if(x<0)v=0
else v=x>255?255:x
w.$flags&2&&B.L(w)
w[255+x]=v}$.dcq=!0}},
c2K:function c2K(){},
dGX(){var x,w=J.jJ(3,y.D)
for(x=0;x<3;++x)w[x]=new Uint8Array(11)
return new A.acV(w)},
dHA(){var x,w,v,u,t=new Uint8Array(3),s=J.jJ(4,y.cm)
for(x=y.V,w=0;w<4;++w){v=J.jJ(8,x)
for(u=0;u<8;++u)v[u]=A.dGX()
s[w]=v}D.H.mw(t,0,3,255)
return new A.c2U(t,s)},
c2P:function c2P(){this.d=$},
c2T:function c2T(){this.b=null},
c2V:function c2V(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
acV:function acV(d){this.a=d},
c2U:function c2U(d,e){this.a=d
this.b=e},
c2L:function c2L(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
Od:function Od(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
aKi:function aKi(){this.b=this.a=0},
aKk:function aKk(d,e,f){this.a=d
this.b=e
this.c=f},
aKj:function aKj(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
aKl:function aKl(d,e,f){this.a=d
this.b=e
this.c=f},
cZL(d,e){var x,w=B.a([],y.A),v=B.a([],y.F),u=new Uint32Array(2),t=new A.aKg(d,u)
u=t.d=J.dx(D.bM.gaq(u),0,null)
x=d.cD()
u.$flags&2&&B.L(u)
u[0]=x
x=d.cD()
u.$flags&2&&B.L(u)
u[1]=x
x=d.cD()
u.$flags&2&&B.L(u)
u[2]=x
x=d.cD()
u.$flags&2&&B.L(u)
u[3]=x
x=d.cD()
u.$flags&2&&B.L(u)
u[4]=x
x=d.cD()
u.$flags&2&&B.L(u)
u[5]=x
x=d.cD()
u.$flags&2&&B.L(u)
u[6]=x
x=d.cD()
u.$flags&2&&B.L(u)
u[7]=x
return new A.acX(t,e,w,v)},
Hi(d,e){return D.c.Z(d+D.c.eB(1,e)-1,e)},
acX:function acX(d,e,f,g){var _=this
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
aya:function aya(d,e,f,g){var _=this
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
aKg:function aKg(d,e){var _=this
_.a=0
_.b=d
_.c=e
_.d=$},
c2Q:function c2Q(d,e){this.a=d
this.b=e},
c2R(d,e,f){var x=d[e]
d.$flags&2&&B.L(d)
d[e]=(((x&4278255360)>>>0)+((f&4278255360)>>>0)&4278255360|(x&16711935)+(f&16711935)&16711935)>>>0},
C5(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
Of(d){if(d<0)return 0
if(d>255)return 255
return d},
c2S(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
dHm(d,e,f){return 4278190080},
dHn(d,e,f){return e},
dHs(d,e,f){return d[f]},
dHt(d,e,f){return d[f+1]},
dHu(d,e,f){return d[f-1]},
dHv(d,e,f){var x=d[f]
return A.C5(A.C5(e,d[f+1]),x)},
dHw(d,e,f){return A.C5(e,d[f-1])},
dHx(d,e,f){return A.C5(e,d[f])},
dHy(d,e,f){return A.C5(d[f-1],d[f])},
dHz(d,e,f){return A.C5(d[f],d[f+1])},
dHo(d,e,f){var x=d[f-1],w=d[f],v=d[f+1]
return A.C5(A.C5(e,x),A.C5(w,v))},
dHp(d,e,f){var x=d[f],w=d[f-1]
return A.c2S(x>>>24,e>>>24,w>>>24)+A.c2S(x>>>16&255,e>>>16&255,w>>>16&255)+A.c2S(x>>>8&255,e>>>8&255,w>>>8&255)+A.c2S(x&255,e&255,w&255)<=0?x:e},
dHq(d,e,f){var x=d[f],w=d[f-1]
return(A.Of((e>>>24)+(x>>>24)-(w>>>24))<<24|A.Of((e>>>16&255)+(x>>>16&255)-(w>>>16&255))<<16|A.Of((e>>>8&255)+(x>>>8&255)-(w>>>8&255))<<8|A.Of((e&255)+(x&255)-(w&255)))>>>0},
dHr(d,e,f){var x,w,v,u=d[f],t=d[f-1],s=A.C5(e,u)
u=s>>>24
x=s>>>16&255
w=s>>>8&255
v=s>>>0&255
return(A.Of(u+D.c.aL(u-(t>>>24),2))<<24|A.Of(x+D.c.aL(x-(t>>>16&255),2))<<16|A.Of(w+D.c.aL(w-(t>>>8&255),2))<<8|A.Of(v+D.c.aL(v-(t&255),2)))>>>0},
Oe:function Oe(d,e){this.a=d
this.b=e},
aKh:function aKh(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
c3K:function c3K(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
adc:function adc(){},
ayb:function ayb(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=$
_.r=1
_.x=_.w=$},
d6w(){var x=new Uint8Array(128),w=new Int16Array(128)
x=new A.axd(x,w,new Int16Array(128))
x.act(0)
return x},
dwT(){var x,w=J.jJ(5,y.x)
for(x=0;x<5;++x)w[x]=A.d6w()
return new A.a3Q(w)},
axd:function axd(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$
_.f=_.e=0},
a3Q:function a3Q(d){this.a=d},
X0:function X0(d,e){this.a=d
this.b=e},
aKL:function aKL(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
ayc:function ayc(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
c3L:function c3L(){this.b=this.a=null},
d6z(d){return new A.a4g(d.a,d.b,D.H.lU(d.c,0))},
bus:function bus(d,e){this.a=d
this.b=e},
a4g:function a4g(d,e,f){this.a=d
this.b=e
this.c=f},
iS(d,e,f,g,h,i,j,k,l,m,n,o,p){var x,w=new A.EC(null,null,null,d,k,h,g,0)
w.glq().push(w)
w.c=j
if(e!=null)w.e=A.a2Y(e)
x=!1
if(m==null)if(p)x=w.gdG()===C.hF||w.gdG()===C.iu||w.gdG()===C.iv||w.gdG()===C.aj||w.gdG()===C.cX
w.aqt(o,i,f,l,x?w.b7m(f,n,l):m)
return w},
axB(d,e,f,g){var x,w,v,u=null,t=d.e
t=t==null?u:A.a2Y(t)
x=d.c
x=x==null?u:A.d6z(x)
w=d.w
v=d.r
t=new A.EC(u,x,t,u,v,w,d.y,d.z)
t.b1c(d,e,f,g)
return t},
EB(d,e,f){var x,w,v,u,t=null,s=d.a
s=s==null?t:s.rJ(0,f)
x=d.e
x=x==null?t:A.a2Y(x)
w=d.c
w=w==null?t:A.d6z(w)
v=d.w
u=d.r
s=new A.EC(s,w,x,t,u,v,d.y,d.z)
s.b1b(d,e,f)
return s},
awh:function awh(d,e){this.a=d
this.b=e},
EC:function EC(d,e,f,g,h,i,j,k){var _=this
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
bvm:function bvm(d,e){this.a=d
this.b=e},
bvl:function bvl(){},
no:function no(){},
dxC(d,e,f){return new A.Sz(new Uint16Array(d*e*f),d,e,f)},
Sz:function Sz(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
dxD(d,e,f){return new A.SA(new Float32Array(d*e*f),d,e,f)},
SA:function SA(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a4o:function a4o(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a4p:function a4p(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a4q:function a4q(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a4r:function a4r(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
SB:function SB(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
SC:function SC(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
SD:function SD(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
dxE(d,e,f){return new A.SE(new Uint32Array(d*e*f),d,e,f)},
SE:function SE(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
SF:function SF(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
d6P(d,e,f){return new A.SG(new Uint8Array(d*e*f),null,d,e,f)},
SG:function SG(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
ayd:function ayd(d,e){this.a=d
this.b=e},
bHi:function bHi(){},
aCH:function aCH(d,e,f){this.c=d
this.a=e
this.b=f},
aCI:function aCI(d,e,f){this.c=d
this.a=e
this.b=f},
aCJ:function aCJ(d,e,f){this.c=d
this.a=e
this.b=f},
aCK:function aCK(d,e,f){this.c=d
this.a=e
this.b=f},
aCL:function aCL(d,e,f){this.c=d
this.a=e
this.b=f},
aCM:function aCM(d,e,f){this.c=d
this.a=e
this.b=f},
aCN:function aCN(d,e,f){this.c=d
this.a=e
this.b=f},
a7g:function a7g(d,e,f){this.c=d
this.a=e
this.b=f},
d8W(d){return new A.wi(new Uint8Array(B.c9(d.c)),d.a,d.b)},
wi:function wi(d,e,f){this.c=d
this.a=e
this.b=f},
cXY(d){return new A.LB(-1,0,-d.c,d)},
LB:function LB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cXZ(d){return new A.LC(-1,0,-d.c,d)},
LC:function LC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cY_(d){return new A.LD(-1,0,-d.c,d)},
LD:function LD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cY0(d){return new A.LE(-1,0,-d.c,d)},
LE:function LE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cY1(d){return new A.LF(-1,0,-d.c,d)},
LF:function LF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cY2(d){return new A.LG(-1,0,-d.c,d)},
LG:function LG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wk(d,e,f,g,h){d.hQ(0,e-1,f)
return new A.aD1(d,e,e+g-1,f+h-1)},
aD1:function aD1(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g},
a7x(d){return new A.LH(-1,0,0,-1,0,d)},
LH:function LH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cY3(d){return new A.LI(-1,0,-d.c,d)},
LI:function LI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7y(d){return new A.LJ(-1,0,0,-2,0,d)},
LJ:function LJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cY4(d){return new A.LK(-1,0,-d.c,d)},
LK:function LK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7z(d){return new A.LL(-1,0,0,-(d.c<<2>>>0),d)},
LL:function LL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bHI(d){return new A.LM(-1,0,-d.c,d)},
LM:function LM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h0:function h0(){},
dTg(d,e){switch(e.a){case 0:A.b2g(d)
break
case 1:A.dTk(d)
break
case 2:A.dTi(d)
break}return d},
dTk(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.glq().length
for(x=y.g,w=0;w<h;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?i:t.a
if(r==null)r=0
q=s?i:t.b
if(q==null)q=0
p=D.c.aL(q,2)
t=d.a
if((t==null?i:t.gf7())!=null)for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.er(m,n,i)
if(l==null)l=new A.h0()
t=u.a
k=t==null?i:t.er(m,o,i)
if(k==null)k=new A.h0()
j=l.gdH(l)
l.sdH(0,k.gdH(k))
k.sdH(0,j)}else for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.er(m,n,i)
if(l==null)l=new A.h0()
t=u.a
k=t==null?i:t.er(m,o,i)
if(k==null)k=new A.h0()
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
b2g(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=d.glq().length
for(x=y.g,w=0;w<g;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?h:t.a
if(r==null)r=0
q=s?h:t.b
if(q==null)q=0
p=D.c.aL(r,2)
t=d.a
if((t==null?h:t.gf7())!=null)for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.er(l,n,h)
if(k==null)k=new A.h0()
t=u.a
j=t==null?h:t.er(m,n,h)
if(j==null)j=new A.h0()
i=k.gdH(k)
k.sdH(0,j.gdH(j))
j.sdH(0,i)}else for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.er(l,n,h)
if(k==null)k=new A.h0()
t=u.a
j=t==null?h:t.er(m,n,h)
if(j==null)j=new A.h0()
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
dTi(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=d.glq().length
for(x=y.g,w=0;w<f;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?g:t.a
if(r==null)r=0
q=s?g:t.b
if(q==null)q=0
p=D.c.aL(q,2)
if((s?g:t.gf7())!=null)for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.er(k,m,g)
if(j==null)j=new A.h0()
t=u.a
i=t==null?g:t.er(l,o,g)
if(i==null)i=new A.h0()
h=j.gdH(j)
j.sdH(0,i.gdH(i))
i.sdH(0,h)}else for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.er(k,m,g)
if(j==null)j=new A.h0()
t=u.a
i=t==null?g:t.er(l,o,g)
if(i==null)i=new A.h0()
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
bot:function bot(d,e){this.a=d
this.b=e},
co(d){return new A.axH(d)},
axH:function axH(d){this.a=d},
dg(d,e,f,g){var x=J.a0(d),w=x.gA(d)
x=f==null?x.gA(d):g+f
return new A.nq(d,g,Math.min(w,x),g,e)},
ct(d,e,f){var x=d.a,w=d.d,v=J.bl(x),u=e==null?d.c:d.d+f+e
return new A.nq(x,d.b,Math.min(v,u),w+f,d.e)},
nq:function nq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bFh:function bFh(d){var _=this
_.a=$
_.b=10
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=d
_.ax=_.at=$},
rT(d,e){return new A.aCr(d,new Uint8Array(e))},
aCr:function aCr(d,e){this.a=0
this.b=d
this.c=e},
bJx:function bJx(){},
pq:function pq(d,e){this.a=d
this.b=e},
bMl:function bMl(d,e){this.a=d
this.b=e},
bZU:function bZU(d,e,f){this.a=d
this.d=e
this.e=f},
d8o(d){return new Int8Array(d)},
dGy(d){throw B.p(B.aN("Uint64List not supported on the web."))},
dy_(d,e,f){return J.cV2(d,e,f)},
dc3(d,e){return J.pW(d,e,null)},
dvO(d){return J.b31(d,0,null)},
dvP(d){return d.ad_(0,0,null)},
dTD(d){var x,w,v,u,t=d.gA(0)
for(x=1,w=0;t>0;){v=3800>t?t:3800
t-=v
for(;--v,v>=0;){u=d.b
u.toString
x+=u[d.c++]
w+=x}x=D.c.au(x,65521)
w=D.c.au(w,65521)}return(w<<16|x)>>>0},
zn(d,e){var x,w,v=J.a0(d),u=v.gA(d)
e^=4294967295
for(x=0;u>=8;){w=x+1
e=C.iC[(e^v.h(d,x))&255]^e>>>8
x=w+1
e=C.iC[(e^v.h(d,w))&255]^e>>>8
w=x+1
e=C.iC[(e^v.h(d,x))&255]^e>>>8
x=w+1
e=C.iC[(e^v.h(d,w))&255]^e>>>8
w=x+1
e=C.iC[(e^v.h(d,x))&255]^e>>>8
x=w+1
e=C.iC[(e^v.h(d,w))&255]^e>>>8
w=x+1
e=C.iC[(e^v.h(d,x))&255]^e>>>8
x=w+1
e=C.iC[(e^v.h(d,w))&255]^e>>>8
u-=8}if(u>0)do{w=x+1
e=C.iC[(e^v.h(d,x))&255]^e>>>8
if(--u,u>0){x=w
continue}else break}while(!0)
return(e^4294967295)>>>0},
d0k(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s,r,q
if(m==null)m=0
if(n==null)n=0
if(l==null)l=e.ge7(0)
if(k==null)k=e.ge4(0)
if(h==null)h=d.ge7(0)<e.ge7(0)?d.ge7(0):e.ge7(0)
if(g==null)g=d.ge4(0)<e.ge4(0)?d.ge4(0):e.ge4(0)
x=f===C.C0
if(!x&&d.gta())d=d.aFB(d.gqY())
w=k/g
v=l/h
u=y.p
t=J.jJ(g,u)
for(s=0;s<g;++s)t[s]=n+D.e.L(s*w)
r=J.jJ(h,u)
for(q=0;q<h;++q)r[q]=m+D.e.L(q*v)
if(x)A.dMz(e,d,i,j,h,g,r,t,null,C.LP)
else A.dM8(e,d,i,j,h,g,r,t,f,!1,null,C.LP)
return d},
dMz(d,e,f,g,h,i,j,k,l,m){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.er(t,s,x)
if(x==null)x=new A.h0()
e.BN(f+u,v,x)}},
dM8(d,e,f,g,h,i,j,k,l,m,n,o){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.er(t,s,x)
if(x==null)x=new A.h0()
A.dSS(e,f+u,v,x,l,!1,n,o)}},
dSS(a4,a5,a6,a7,a8,a9,b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
if(!a4.aJD(a5,a6))return a4
if(a8===C.C0||a4.gta())if(a4.aJD(a5,a6)){a4.oE(a5,a6).jd(0,a7)
return a4}x=a7.gj8()
w=a7.giT()
v=a7.gj1()
u=a7.gA(a7)<4?1:a7.gfU()
if(u===0)return a4
t=a4.oE(a5,a6)
s=t.gj8()
r=t.giT()
q=t.gj1()
p=t.gfU()
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
t.sj8(x*u+s*p*a3)
t.siT(w*u+r*p*a3)
t.sj1(v*u+q*p*a3)
t.sfU(u+p*a3)
return a4},
dT5(d,e,f,g,h,i,j){var x,w=D.e.aM(Math.min(g,h),0,d.ge7(0)-1),v=D.e.aM(Math.min(i,j),0,d.ge4(0)-1),u=D.e.aM(Math.max(g,h),0,d.ge7(0)-1),t=D.e.aM(Math.max(i,j),0,d.ge4(0)-1),s=d.a.r8(0,w,v,u-w+1,t-v+1)
for(x=s.a;s.q();)x.jd(0,f)
return d},
dvq(a4,a5,a6,a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=b0<16384,a3=a6>a8?a8:a6
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
if(a2){A.a35(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.a35(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.a35(f,d,v)
a1=v[0]
u&2&&B.L(a4)
a4[j]=a1
a4[i]=v[1]
A.a35(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}else{A.a36(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.a36(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.a36(f,d,v)
a1=v[0]
u&2&&B.L(a4)
a4[j]=a1
a4[i]=v[1]
A.a36(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}}if(n){h=j+r
if(a2){A.a35(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&B.L(a4)
a4[h]=a1}else{A.a36(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&B.L(a4)
a4[h]=a1}u&2&&B.L(a4)
a4[j]=f}}if((a8&x)>>>0!==0){k=l+m
for(j=l;j<=k;j+=o){i=j+p
if(a2){A.a35(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&B.L(a4)
a4[i]=n}else{A.a36(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&B.L(a4)
a4[i]=n}u&2&&B.L(a4)
a4[j]=f}}w=x>>>1}},
a35(d,e,f){var x,w,v,u,t=$.oQ()
t.$flags&2&&B.L(t)
t[0]=d
x=$.pT()
w=x[0]
t[0]=e
v=x[0]
u=w+(v&1)+D.c.Z(v,1)
f[0]=u
f[1]=u-v},
a36(d,e,f){var x=d-D.c.Z(e,1)&65535
f[1]=x
f[0]=e+x-32768&65535},
cSF(d){var x,w,v,u,t,s,r,q,p,o,n=null
if(A.d7t().Ti(d))return new A.ayn()
x=new A.aDf(A.d7b())
if(x.JS(d))return x
w=new A.brV()
w.f=A.dg(d,!1,n,0)
w.a=new A.aws(B.a([],y.b))
if(w.asX())return w
v=new A.c3L()
if(v.JS(d))return v
u=new A.bXM()
if(u.axK(A.dg(d,!1,n,0))!=null)return u
if(A.d9j(d).c===943870035)return new A.bJn()
if(A.dvp(d))return new A.bnh()
if(A.cVz(A.dg(d,!1,n,0)))return new A.aps(!1)
t=new A.bWE()
s=A.dg(d,!1,n,0)
r=t.a=new A.aIr(C.AF)
r.oy(0,s)
if(r.aJX())return t
q=new A.buu()
r=A.dg(d,!1,n,0)
q.a=r
r=A.d6A(r)
q.b=r
if(r!=null)return q
p=new A.bJs()
if(p.pw(d)!=null)return p
o=new A.bIi(B.a([],y.T))
if(o.JS(d))return o
return n},
dga(d){var x=A.cSF(d)
return x==null?null:x.nt(0,d,null)},
dVx(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if($.d_F==null){x=$.d_F=new Uint8Array(768)
for(w=-256;w<0;++w)x[256+w]=0
for(w=0;w<256;++w)x[256+w]=w
for(w=256;w<512;++w)x[256+w]=255}for(x=a6.$flags|0,w=0;w<64;++w){v=a4[w]
u=a3[w]
x&2&&B.L(a6)
a6[w]=v*u}for(t=0,w=0;w<8;++w,t+=8){v=1+t
u=a6[v]
if(u===0&&a6[2+t]===0&&a6[3+t]===0&&a6[4+t]===0&&a6[5+t]===0&&a6[6+t]===0&&a6[7+t]===0){v=D.c.Z(5793*a6[t]+512,10)
s=(v&2147483647)-((v&2147483648)>>>0)
x&2&&B.L(a6)
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
x&2&&B.L(a6)
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
x&2&&B.L(a6)
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
x&2&&B.L(a6)
a6[w]=q+s
a6[k]=q-s
a6[v]=o+a0
a6[m]=o-a0
a6[p]=i+f
a6[u]=i-f
a6[j]=a1+h
a6[r]=a1-h}for(x=$.d_F,v=a5.$flags|0,w=0;w<64;++w){x.toString
u=D.c.Z(a6[w]+8,4)
u=x[384+((u&2147483647)-((u&2147483648)>>>0))]
v&2&&B.L(a5)
a5[w]=u}},
dTK(d9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=null,d7="ifd0",d8=d9.r
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
r=A.iS(d6,d6,C.aj,0,C.bG,s,d6,0,3,d6,C.aj,t,!1)
r.e=A.a2Y(d8)
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
e=n[D.c.i5(g,l)]
f=q-g
d=0
while(!0){a0=d9.d.e
a0.toString
if(!(d<a0))break
a1=e[D.c.i5(d,m)]
if(h){a0=r.a
if(a0!=null)a0.fG(p-d,g,a1,a1,a1)}else if(i){a0=r.a
if(a0!=null)a0.fG(p-d,f,a1,a1,a1)}else if(j){a0=r.a
if(a0!=null)a0.fG(d,f,a1,a1,a1)}else if(k){a0=r.a
if(a0!=null)a0.fG(g,d,a1,a1,a1)}else if(v){a0=r.a
if(a0!=null)a0.fG(f,d,a1,a1,a1)}else if(x){a0=r.a
if(a0!=null)a0.fG(f,p-d,a1,a1,a1)}else{a0=r.a
if(d8){if(a0!=null)a0.fG(g,p-d,a1,a1,a1)}else if(a0!=null)a0.fG(d,g,a1,a1,a1)}++d}++g}break
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
b1=D.c.i5(g,l)
b2=D.c.i5(g,a8)
b3=D.c.i5(g,b0)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
f=q-g
d=0
while(!0){a0=d9.d.e
a0.toString
if(!(d<a0))break
b6=D.c.i5(d,m)
b7=D.c.i5(d,a7)
b8=D.c.i5(d,a9)
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
if(a0!=null)a0.fG(p-d,g,c1,c2,c3)}else if(i){a0=r.a
if(a0!=null)a0.fG(p-d,f,c1,c2,c3)}else if(j){a0=r.a
if(a0!=null)a0.fG(d,f,c1,c2,c3)}else if(k){a0=r.a
if(a0!=null)a0.fG(g,d,c1,c2,c3)}else if(v){a0=r.a
if(a0!=null)a0.fG(f,d,c1,c2,c3)}else if(x){a0=r.a
if(a0!=null)a0.fG(f,p-d,c1,c2,c3)}else{a0=r.a
if(d8){if(a0!=null)a0.fG(g,p-d,c1,c2,c3)}else if(a0!=null)a0.fG(d,g,c1,c2,c3)}++d}++g}break
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
b1=D.c.i5(g,l)
b2=D.c.i5(g,a8)
b3=D.c.i5(g,b0)
c8=D.c.i5(g,c7)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
c9=c5[c8]
a0=q-g
d=0
while(!0){d0=d9.d.e
d0.toString
if(!(d<d0))break
b6=D.c.i5(d,m)
b7=D.c.i5(d,a7)
b8=D.c.i5(d,a9)
d1=D.c.i5(d,c6)
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
if(d0!=null)d0.fG(p-d,g,c1,c2,c3)}else if(h){d0=r.a
if(d0!=null)d0.fG(p-d,a0,c1,c2,c3)}else if(i){d0=r.a
if(d0!=null)d0.fG(d,a0,c1,c2,c3)}else if(j){d0=r.a
if(d0!=null)d0.fG(g,d,c1,c2,c3)}else if(k){d0=r.a
if(d0!=null)d0.fG(a0,d,c1,c2,c3)}else if(v){d0=r.a
if(d0!=null)d0.fG(a0,p-d,c1,c2,c3)}else{d0=r.a
if(d8){if(d0!=null)d0.fG(g,p-d,c1,c2,c3)}else if(d0!=null)d0.fG(d,g,c1,c2,c3)}++d}++g}break
default:throw B.p(A.co("Unsupported color mode"))}return r},
dHO(d,e,f,g,h,i){A.dHL(i,d,e,f,g,h,!0,i)},
dHP(d,e,f,g,h,i){A.dHM(i,d,e,f,g,h,!0,i)},
dHN(d,e,f,g,h,i){A.dHK(i,d,e,f,g,h,!0,i)},
X_(d,e,f,g,h){var x,w,v
for(x=0;x<g;++x){w=J.v(d.a,d.d+x)
v=J.v(e.a,e.d+x)
J.bZ(f.a,f.d+x,w+v)}},
dHL(d,e,f,g,h,i,j,k){var x,w,v=null,u=h*g,t=h+i,s=A.dg(d,!1,v,u),r=A.dg(d,!1,v,u),q=A.ct(r,v,0)
if(h===0){r.m(0,0,J.v(s.a,s.d))
A.X_(A.ct(s,v,1),q,A.ct(r,v,1),e-1,!0)
q.d+=g
s.d+=g
r.d+=g
h=1}for(x=-g,w=e-1;h<t;){A.X_(s,A.ct(q,v,x),r,1,!0)
A.X_(A.ct(s,v,1),q,A.ct(r,v,1),w,!0);++h
q.d+=g
s.d+=g
r.d+=g}},
dHM(d,e,f,g,h,i,j,k){var x=null,w=h*g,v=h+i,u=A.dg(d,!1,x,w),t=A.dg(k,!1,x,w),s=A.ct(t,x,0)
if(h===0){t.m(0,0,J.v(u.a,u.d))
A.X_(A.ct(u,x,1),s,A.ct(t,x,1),e-1,!0)
u.d+=g
t.d+=g
h=1}else s.d-=g
for(;h<v;){A.X_(u,s,t,e,!0);++h
s.d+=g
u.d+=g
t.d+=g}},
dHK(d,e,f,g,h,i,j,k){var x,w,v,u,t,s=null,r=h*g,q=h+i,p=A.dg(d,!1,s,r),o=A.dg(k,!1,s,r),n=A.ct(o,s,0)
if(h===0){o.m(0,0,J.v(p.a,p.d))
A.X_(A.ct(p,s,1),n,A.ct(o,s,1),e-1,!0)
n.d+=g
p.d+=g
o.d+=g
h=1}for(x=-g;h<q;){A.X_(p,A.ct(n,s,x),o,1,!0)
for(w=1;w<e;++w){v=w-g
u=J.v(n.a,n.d+(w-1))+J.v(n.a,n.d+v)-J.v(n.a,n.d+(v-1))
if((u&4294967040)>>>0===0)t=u
else t=u<0?0:255
v=J.v(p.a,p.d+w)
J.bZ(o.a,o.d+w,v+t)}++h
n.d+=g
p.d+=g
o.d+=g}},
dQn(d){var x="ifd0",w=A.EB(d,!1,!1)
if(!d.gxS().h(0,x).a.a4(0,274)||d.gxS().h(0,x).giO(0)===1)return w
w.e=A.a2Y(d.gxS())
w.gxS().h(0,x).siO(0,null)
switch(d.gxS().h(0,x).giO(0)){case 2:return A.b2g(w)
case 3:return A.dTg(w,C.ayn)
case 4:return A.b2g(A.b29(w,180))
case 5:return A.b2g(A.b29(w,90))
case 6:return A.b29(w,90)
case 7:return A.b2g(A.b29(w,-90))
case 8:return A.b29(w,-90)}return w},
dRa(a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null
a2.gta()
if(a2.gxS().h(0,"ifd0").a.a4(0,274)&&a2.gxS().h(0,"ifd0").giO(0)!==1)a2=A.dQn(a2)
x=D.e.aD(a3*(a2.ge4(0)/a2.ge7(0)))
if(a3<=0)a3=D.e.aD(x*(a2.ge7(0)/a2.ge4(0)))
w=x
if(a3===a2.ge7(0)&&x===a2.ge4(0))return A.EB(a2,!1,!1)
v=new Int32Array(a3)
u=a2.ge7(0)/a3
for(t=0;t<a3;++t)v[t]=D.e.L(t*u)
s=new Int32Array(w)
r=a2.ge4(0)/w
for(q=0;q<w;++q)s[q]=D.e.L(q*r)
p=a2.glq().length
for(o=y.g,n=a1,m=0;m<p;++m){l=a2.x
k=(l===$?a2.x=B.a([],o):l)[m]
j=A.axB(k,x,!0,a3)
i=n==null
if(!i)n.o6(j)
if(i)n=j
i=k.a
h=i==null
g=h?a1:i.b
r=(g==null?0:g)/w
if((h?a1:i.gf7())!=null)for(q=0;q<w;++q){f=D.e.L(q*r)
for(t=0;t<a3;++t){i=v[t]
h=k.a
if(h==null)i=a1
else{i=h.oE(i,f)
i=D.e.L(i.gdH(i))}if(i==null)i=0
h=j.a
if(h!=null)h.nc(t,q,i)}}else{e=k.kP(0,0)
for(q=0;q<w;++q)for(t=0;t<a3;++t){i=v[t]
h=s[q]
g=k.a
if(g!=null)g.er(i,h,e)
i=e.gar(e)
h=e.gaE()
g=e.gaF(e)
d=e.gaU(e)
a0=j.a
if(a0!=null)a0.kR(t,q,i,h,g,d)}}}n.toString
return n},
b29(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=D.c.au(a8,360)
a7.gta()
if(D.c.au(a6,90)===0)switch(D.c.aL(a6,90)){case 1:return A.dOR(a7)
case 2:return A.dOP(a7)
case 3:return A.dOQ(a7)
default:return A.EB(a7,!1,!1)}x=a6*3.141592653589793/180
w=Math.cos(x)
v=Math.sin(x)
u=a7.ge7(0)
t=a7.ge7(0)
s=a7.ge4(0)
r=a7.ge4(0)
q=0.5*a7.ge7(0)
p=0.5*a7.ge4(0)
s=Math.abs(u*w)+Math.abs(s*v)
o=0.5*s
r=Math.abs(t*v)+Math.abs(r*w)
n=0.5*r
m=a7.glq().length
for(u=y.g,l=a5,k=0;k<m;++k){j=a7.x
i=(j===$?a7.x=B.a([],u):j)[k]
t=l==null
h=t?a5:l.ZR()
if(h==null){g=D.e.L(s)
h=A.axB(a7,D.e.L(r),!0,g)}if(t)l=h
for(t=h.a,t=t.gaa(t);t.q();){f=t.gM(t)
e=f.gnM(f)
d=f.goC(f)
g=e-o
a0=d-n
a1=q+g*w+a0*v
a2=p-g*v+a0*w
g=!1
if(a1>=0)if(a2>=0){a0=i.a
a3=a0==null
a4=a3?a5:a0.a
if(a1<(a4==null?0:a4)){g=a3?a5:a0.b
g=a2<(g==null?0:g)}}if(g)h.BN(e,d,i.aQO(a1,a2,C.aCF))}}l.toString
return l},
dOR(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.glq(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.K)(x),++u){t=x[u]
s=v==null
r=s?k:v.ZR()
if(r==null){q=t.a
p=q==null
o=p?k:q.b
if(o==null)o=0
q=p?k:q.a
r=A.axB(t,q==null?0:q,!0,o)}if(s)v=r
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
r.BN(l,m,s==null?new A.h0():s);++l}++m}}v.toString
return v},
dOP(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.glq(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.K)(x),++u){t=x[u]
s=t.a
r=s==null
q=r?k:s.a
p=(q==null?0:q)-1
s=r?k:s.b
o=(s==null?0:s)-1
s=v==null
n=s?k:v.ZR()
if(n==null)n=A.EB(t,!0,!0)
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
n.BN(l,m,r==null?new A.h0():r);++l}++m}}v.toString
return v},
dOQ(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.glq(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.K)(x),++u){t=x[u]
s=d.a
s=s==null?k:s.a
r=(s==null?0:s)-1
s=v==null
q=s?k:v.ZR()
if(q==null){p=t.a
o=p==null
n=o?k:p.b
if(n==null)n=0
p=o?k:p.a
q=A.axB(t,p==null?0:p,!0,n)}if(s)v=q
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
q.BN(l,m,p==null?new A.h0():p);++l}++m}}v.toString
return v},
cSd(d){var x
d=(d&-d)>>>0
x=d!==0?31:32
if((d&65535)!==0)x-=16
if((d&16711935)!==0)x-=8
if((d&252645135)!==0)x-=4
if((d&858993459)!==0)x-=2
return(d&1431655765)!==0?x-1:x},
dWK(d){$.d2a().m(0,0,d)
return $.dlo().h(0,0)},
dh7(d,e,f,g){return(D.c.aM(d,0,255)|D.c.aM(e,0,255)<<8|D.c.aM(f,0,255)<<16|D.c.aM(g,0,255)<<24)>>>0},
xg(d,e,f){var x,w,v,u,t,s=e.gA(e),r=e.gdG(),q=d.gf7(),p=q==null?null:q.gdG()
if(p==null)p=d.gdG()
x=d.gA(d)
if(s===1){w=d.gA(d)>2?d.gkd():d.h(0,0)
e.m(0,0,A.b28(B.hk(d.h(0,0))?D.e.fW(w):w,p,r))}else if(s<=x)for(v=0;v<s;++v)e.m(0,v,A.b28(d.h(0,v),p,r))
else if(x===2){u=A.b28(d.h(0,0),p,r)
if(s===3){e.m(0,0,u)
e.m(0,1,u)
e.m(0,2,u)}else{f=A.b28(d.h(0,1),p,r)
e.m(0,0,u)
e.m(0,1,u)
e.m(0,2,u)
e.m(0,3,f)}}else{for(v=0;v<x;++v)e.m(0,v,A.b28(d.h(0,v),p,r))
t=x===1?e.h(0,0):0
for(v=x;v<s;++v)e.m(0,v,v===3?f:t)}return e},
r1(d,e,f,g,h){var x,w,v=d.gf7(),u=v==null?null:v.gdG()
if(u==null)u=d.gdG()
v=h==null
x=v?null:h.gdG()
f=x==null?f:x
if(f==null)f=d.gdG()
x=v?null:h.gA(h)
g=x==null?g:x
if(g==null)g=d.gA(d)
if(e==null)e=0
if(f===u&&g===d.gA(d)){if(v)return d.ew(0)
h.jd(0,d)
return h}switch(f.a){case 3:if(v)w=new A.zZ(new Uint8Array(g))
else w=h
return A.xg(d,w,e)
case 0:return A.xg(d,v?new A.QM(g,0):h,e)
case 1:return A.xg(d,v?new A.QO(g,0):h,e)
case 2:if(v){v=g<3?1:2
w=new A.QQ(g,new Uint8Array(v))}else w=h
return A.xg(d,w,e)
case 4:if(v)w=new A.QN(new Uint16Array(g))
else w=h
return A.xg(d,w,e)
case 5:if(v)w=new A.QP(new Uint32Array(g))
else w=h
return A.xg(d,w,e)
case 6:if(v)w=new A.QJ(new Int8Array(g))
else w=h
return A.xg(d,w,e)
case 7:if(v)w=new A.QH(new Int16Array(g))
else w=h
return A.xg(d,w,e)
case 8:if(v)w=new A.QI(new Int32Array(g))
else w=h
return A.xg(d,w,e)
case 9:if(v)w=new A.QE(new Uint16Array(g))
else w=h
return A.xg(d,w,e)
case 10:if(v)w=new A.QF(new Float32Array(g))
else w=h
return A.xg(d,w,e)
case 11:if(v)w=new A.QG(new Float64Array(g))
else w=h
return A.xg(d,w,e)}},
kb(d){return 0.299*d.gar(d)+0.587*d.gaE()+0.114*d.gaF(d)},
dfR(d,e,f,g,h){var x=1-g/255
h[0]=D.e.aD(255*(1-d/255)*x)
h[1]=D.e.aD(255*(1-e/255)*x)
h[2]=D.e.aD(255*(1-f/255)*x)},
hT(d){var x,w,v,u=$.d29()
u.$flags&2&&B.L(u)
u[0]=d
x=$.dln()[0]
if(d===0)return x>>>16
if($.iR==null)A.jH()
w=$.d5H.c9()[x>>>23&511]
if(w!==0){v=x&8388607
return w+(v+4095+(v>>>13&1)>>>13)}return A.dvM(x)},
dvM(d){var x,w,v=d>>>16&32768,u=(d>>>23&255)-112,t=d&8388607
if(u<=0){if(u<-10)return v
t|=8388608
x=14-u
return(v|D.c.oH(t+(D.c.f9(1,x-1)-1)+(D.c.ht(t,x)&1),x))>>>0}else if(u===143)if(t===0)return v|31744
else{t=t>>>13
w=t===0?1:0
return v|t|w|31744}else{t=t+4095+(t>>>13&1)
if((t&8388608)!==0){++u
t=0}if(u>30)return v|31744
return(v|u<<10|t>>>13)>>>0}},
jH(){var x,w,v,u,t=$.iR
if(t!=null)return t
x=new Uint32Array(65536)
$.iR=J.b31(D.bM.gaq(x),0,null)
t=new Uint16Array(512)
$.d5H.b=t
for(w=0;w<256;++w){v=(w&255)-112
if(v<=0||v>=30){t[w]=0
t[(w|256)>>>0]=0}else{u=v<<10>>>0
t[w]=u
t[(w|256)>>>0]=(u|32768)>>>0}}for(w=0;w<65536;++w)x[w]=A.dvN(w)
t=$.iR
t.toString
return t},
dvN(d){var x,w=d>>>15&1,v=d>>>10&31,u=d&1023
if(v===0)if(u===0)return w<<31>>>0
else{for(;(u&1024)===0;){u=u<<1;--v}++v
u&=4294966271}else if(v===31){x=w<<31
if(u===0)return(x|2139095040)>>>0
else return(x|u<<13|2139095040)>>>0}return(w<<31|v+112<<23|u<<13)>>>0}},C,E
J=c[1]
B=c[0]
D=c[2]
A=a.updateHolder(c[66],A)
C=c[319]
E=c[152]
A.a4d.prototype={
a6u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.length
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
A.c4F.prototype={}
A.cPJ.prototype={
bK6(d,e,f,g){var x,w,v,u,t,s=null
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
return!1}if(s!=null)e.mD(s)
x=new A.a4d()
x.a6u(C.aRV)
w=new A.a4d()
w.a6u(C.aHJ)
v=new A.aCt(new Uint8Array(32768),C.rn)
new A.bw0(d,v,x,w).ble()
s=J.dx(D.H.gaq(v.c),v.c.byteOffset,v.b)
d.ag()}if(s!=null)e.mD(s)
return!0}}
A.c4G.prototype={}
A.cPK.prototype={
aHh(d,e){var x=A.d8Q(C.ov,32768)
this.bM7(A.bwh(d,C.rn,null,null),x,e,!1,null)
return x.akd()},
bM7(d,e,f,g,h){var x,w,v,u,t,s,r,q,p
e.a=C.ov
x=(D.c.aM(15,0,15)-8<<4|8)>>>0
e.bf(x)
w=x*256
for(v=0;u=(v|0)>>>0,D.c.au(w+u,31)!==0;)++v
e.bf(u)
t=d.c
s=A.dTD(d)
d.c=t
u=f==null?6:f
A.dtN(d,u,e,15)
u=s&255
r=s>>>24&255
q=s>>>16&255
p=s>>>8&255
if(e.a===C.ov){e.bf(r)
e.bf(q)
e.bf(p)
e.bf(u)}else{e.bf(u)
e.bf(p)
e.bf(q)
e.bf(r)}}}
A.Xz.prototype={
J(){return"_DeflateFlushMode."+this.b}}
A.bhS.prototype={
b8A(d,e){var x,w,v,u,t=this,s=!0
if(e>=9)if(e<=15)s=d>9
if(s)return!1
x=t.bcd(d)
if(x==null)return!1
$.xP.b=x
s=new Uint16Array(1146)
t.p1=s
w=new Uint16Array(122)
t.p2=w
v=new Uint16Array(78)
t.p3=v
t.as=e
u=t.Q=D.c.eB(1,e)
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
u.c=$.dl7()
u=t.R8
u.a=w
u.c=$.dl6()
u=t.RG
u.a=v
u.c=$.dl5()
t.al=t.ah=0
t.Y=8
t.auO()
t.bmE()
return!0},
b8z(d){var x,w,v,u,t=this,s=t.x
s===$&&B.b()
if(s!==0)t.a7K()
s=t.a
x=s.c
s=s.d
s===$&&B.b()
w=!0
if(x>=s){s=t.k2
s===$&&B.b()
if(s===0)s=d!==C.AX&&t.c!==666
else s=w}else s=w
if(s){switch($.xP.c9().e){case 0:v=t.b8D(d)
break
case 1:v=t.b8B(d)
break
case 2:v=t.b8C(d)
break
default:v=-1
break}s=v===2
if(s||v===3)t.c=666
if(v===0||s)return 0
if(v===1){if(d===C.bS7){t.lY(2,3)
t.Hu(256,C.vK)
t.aDX()
s=t.Y
s===$&&B.b()
x=t.al
x===$&&B.b()
if(1+s+10-x<9){t.lY(2,3)
t.Hu(256,C.vK)
t.aDX()}t.Y=7}else{t.aAT(0,0,!1)
if(d===C.bS8){s=t.cy
s===$&&B.b()
x=t.CW
u=0
for(;u<s;++u){x===$&&B.b()
x.$flags&2&&B.L(x)
x[u]=0}}}t.a7K()}}if(d!==C.r1)return 0
return 1},
bmE(){var x,w,v=this,u=v.Q
u===$&&B.b()
v.ay=2*u
u=v.CW
u===$&&B.b()
x=v.cy
x===$&&B.b();--x
u.$flags&2&&B.L(u)
u[x]=0
for(w=0;w<x;++w)u[w]=0
v.k2=v.fr=v.id=0
v.fx=v.k3=2
v.cx=v.go=0},
auO(){var x,w,v,u=this
for(x=u.p1,w=0;w<286;++w){x===$&&B.b()
x.$flags&2&&B.L(x)
x[w*2]=0}for(v=u.p2,w=0;w<30;++w){v===$&&B.b()
v.$flags&2&&B.L(v)
v[w*2]=0}for(v=u.p3,w=0;w<19;++w){v===$&&B.b()
v.$flags&2&&B.L(v)
v[w*2]=0}x===$&&B.b()
x.$flags&2&&B.L(x)
x[512]=1
u.y2=u.X=u.bt=u.C=0},
aap(d,e){var x,w,v=this.ry,u=v[e],t=e<<1>>>0,s=v.$flags|0,r=this.x2
while(!0){x=this.to
x===$&&B.b()
if(!(t<=x))break
if(t<x&&A.d4O(d,v[t+1],v[t],r))++t
if(A.d4O(d,u,v[t],r))break
x=v[t]
s&2&&B.L(v)
v[e]=x
w=t<<1>>>0
e=t
t=w}s&2&&B.L(v)
v[e]=u},
ayH(d,e){var x,w,v,u,t,s,r,q,p,o,n=d[1]
if(n===0){x=138
w=3}else{x=7
w=4}d.$flags&2&&B.L(d)
d[(e+1)*2+1]=65535
for(v=this.p3,u=0,t=-1,s=0;u<=e;n=r){++u
r=d[u*2+1];++s
if(s<x&&n===r)continue
else{q=3
if(s<w){v===$&&B.b()
p=n*2
o=v[p]
v.$flags&2&&B.L(v)
v[p]=o+s}else if(n!==0){if(n!==t){v===$&&B.b()
p=n*2
o=v[p]
v.$flags&2&&B.L(v)
v[p]=o+1}v===$&&B.b()
p=v[32]
v.$flags&2&&B.L(v)
v[32]=p+1}else if(s<=10){v===$&&B.b()
p=v[34]
v.$flags&2&&B.L(v)
v[34]=p+1}else{v===$&&B.b()
p=v[36]
v.$flags&2&&B.L(v)
v[36]=p+1}}if(r===0){w=q
x=138}else if(n===r){w=q
x=6}else{x=7
w=4}t=n
s=0}},
b3R(){var x,w,v=this,u=v.p1
u===$&&B.b()
x=v.p4.b
x===$&&B.b()
v.ayH(u,x)
x=v.p2
x===$&&B.b()
u=v.R8.b
u===$&&B.b()
v.ayH(x,u)
v.RG.a72(v)
for(u=v.p3,w=18;w>=3;--w){u===$&&B.b()
if(u[C.FI[w]*2+1]!==0)break}u=v.bt
u===$&&B.b()
v.bt=u+(3*(w+1)+5+5+4)
return w},
bxa(d,e,f){var x,w,v,u=this
u.lY(d-257,5)
x=e-1
u.lY(x,5)
u.lY(f-4,4)
for(w=0;w<f;++w){v=u.p3
v===$&&B.b()
u.lY(v[C.FI[w]*2+1],3)}v=u.p1
v===$&&B.b()
u.azg(v,d-1)
v=u.p2
v===$&&B.b()
u.azg(v,x)},
azg(d,e){var x,w,v,u,t,s,r,q,p,o,n=this,m=d[1]
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
n.lY(o[q]&65535,o[p]&65535)}while(--t,t!==0)}else if(m!==0){if(m!==u){q=n.p3
q===$&&B.b()
p=m*2
n.lY(q[p]&65535,q[p+1]&65535);--t}q=n.p3
q===$&&B.b()
n.lY(q[32]&65535,q[33]&65535)
n.lY(t-3,2)}else{q=n.p3
if(t<=10){q===$&&B.b()
n.lY(q[34]&65535,q[35]&65535)
n.lY(t-3,3)}else{q===$&&B.b()
n.lY(q[36]&65535,q[37]&65535)
n.lY(t-11,7)}}}if(s===0){w=r
x=138}else if(m===s){w=r
x=6}else{x=7
w=4}u=m
t=0}},
btS(d,e,f){var x,w,v=this
if(f===0)return
x=v.f
x===$&&B.b()
w=v.x
w===$&&B.b()
D.H.ej(x,w,w+f,d,e)
v.x=v.x+f},
rp(d){var x,w=this.f
w===$&&B.b()
x=this.x
x===$&&B.b()
this.x=x+1
w.$flags&2&&B.L(w)
w[x]=d},
Hu(d,e){var x=d*2
this.lY(e[x]&65535,e[x+1]&65535)},
lY(d,e){var x,w=this,v=w.al
v===$&&B.b()
x=w.ah
if(v>16-e){x===$&&B.b()
v=w.ah=(x|D.c.f9(d,v)&65535)>>>0
w.rp(v)
w.rp(A.r0(v,8))
w.ah=A.r0(d,16-w.al)
w.al=w.al+(e-16)}else{x===$&&B.b()
w.ah=(x|D.c.f9(d,v)&65535)>>>0
w.al=v+e}},
OX(d,e){var x,w,v,u,t,s=this,r=s.f
r===$&&B.b()
x=s.bj
x===$&&B.b()
w=s.y2
w===$&&B.b()
v=A.r0(d,8)
r.$flags&2&&B.L(r)
r[x+w*2]=v
v=s.f
w=s.bj
x=s.y2
v.$flags&2&&B.L(v)
v[w+x*2+1]=d
w=s.xr
w===$&&B.b()
v[w+x]=e
s.y2=x+1
if(d===0){r=s.p1
r===$&&B.b()
x=e*2
w=r[x]
r.$flags&2&&B.L(r)
r[x]=w+1}else{r=s.X
r===$&&B.b()
s.X=r+1
r=s.p1
r===$&&B.b()
x=(C.Sn[e]+256+1)*2
w=r[x]
r.$flags&2&&B.L(r)
r[x]=w+1
w=s.p2
w===$&&B.b()
x=A.dd5(d-1)*2
r=w[x]
w.$flags&2&&B.L(w)
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
u+=w[t*2]*(5+C.vv[t])}u=A.r0(u,3)
w=s.X
w===$&&B.b()
v=s.y2
if(w<v/2&&u<(r-x)/2)return!0
r=v}x=s.y1
x===$&&B.b()
return r===x-1},
aqc(d,e){var x,w,v,u,t,s,r=this,q=r.y2
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
else{t=C.Sn[u]
r.Hu(t+256+1,d)
s=C.Qw[t]
if(s!==0)r.lY(u-C.aEt[t],s);--v
t=A.dd5(v)
r.Hu(t,e)
s=C.vv[t]
if(s!==0)r.lY(v-C.aHt[t],s)}}while(x<r.y2)}r.Hu(256,d)
r.Y=d[513]},
aSM(){var x,w,v,u
for(x=this.p1,w=0,v=0;w<7;){x===$&&B.b()
v+=x[w*2];++w}for(u=0;w<128;){x===$&&B.b()
u+=x[w*2];++w}for(;w<256;){x===$&&B.b()
v+=x[w*2];++w}this.y=v>A.r0(u,2)?0:1},
aDX(){var x=this,w=x.al
w===$&&B.b()
if(w===16){w=x.ah
w===$&&B.b()
x.rp(w)
x.rp(A.r0(w,8))
x.al=x.ah=0}else if(w>=8){w=x.ah
w===$&&B.b()
x.rp(w)
x.ah=A.r0(x.ah,8)
x.al=x.al-8}},
aoO(){var x=this,w=x.al
w===$&&B.b()
if(w>8){w=x.ah
w===$&&B.b()
x.rp(w)
x.rp(A.r0(w,8))}else if(w>0){w=x.ah
w===$&&B.b()
x.rp(w)}x.al=x.ah=0},
zs(d){var x,w,v,u,t,s=this,r=s.fr
r===$&&B.b()
if(r>=0)x=r
else x=-1
w=s.id
w===$&&B.b()
r=w-r
w=s.k4
w===$&&B.b()
if(w>0){if(s.y===2)s.aSM()
s.p4.a72(s)
s.R8.a72(s)
v=s.b3R()
w=s.bt
w===$&&B.b()
u=A.r0(w+3+7,3)
w=s.C
w===$&&B.b()
t=A.r0(w+3+7,3)
if(t<=u)u=t}else{t=r+5
u=t
v=0}if(r+4<=u&&x!==-1)s.aAT(x,r,d)
else if(t===u){s.lY(2+(d?1:0),3)
s.aqc(C.vK,C.T5)}else{s.lY(4+(d?1:0),3)
r=s.p4.b
r===$&&B.b()
x=s.R8.b
x===$&&B.b()
s.bxa(r+1,x+1,v+1)
x=s.p1
x===$&&B.b()
r=s.p2
r===$&&B.b()
s.aqc(x,r)}s.auO()
if(d)s.aoO()
s.fr=s.id
s.a7K()},
b8D(d){var x,w,v,u,t,s=this,r=s.r
r===$&&B.b()
x=r-5
x=65535>x?x:65535
for(r=d===C.AX;!0;){w=s.k2
w===$&&B.b()
if(w<=1){s.a87()
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
s.zs(!1)}w=s.id
v=s.fr
t=s.Q
t===$&&B.b()
if(w-v>=t-262)s.zs(!1)}r=d===C.r1
s.zs(r)
return r?3:1},
aAT(d,e,f){var x,w=this
w.lY(f?1:0,3)
w.aoO()
w.Y=8
w.rp(e)
w.rp(A.r0(e,8))
x=(~e>>>0)+65536&65535
w.rp(x)
w.rp(A.r0(x,8))
x=w.ax
x===$&&B.b()
w.btS(x,d,e)},
a87(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.a
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
v&2&&B.L(w)
w[s]=x}while(--r,r!==0)
x=n.ch
x===$&&B.b()
w=x.$flags|0
s=t
r=s
do{--s
q=x[s]&65535
v=q>=t?q-t:0
w&2&&B.L(x)
x[s]=v}while(--r,r!==0)
u+=t}}x=m.c
w=m.d
w===$&&B.b()
if(x>=w)return
x=n.ax
x===$&&B.b()
r=n.bu2(x,n.id+n.k2,u)
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
b8B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
for(x=d===C.AX,w=$.xP.a,v=0;!0;){u=m.k2
u===$&&B.b()
if(u<262){m.a87()
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
q.$flags&2&&B.L(q)
q[(s&p)>>>0]=t
u.$flags&2&&B.L(u)
u[r]=s}if(v!==0){u=m.id
u===$&&B.b()
t=m.Q
t===$&&B.b()
t=(u-v&65535)<=t-262
u=t}else u=!1
if(u){u=m.ok
u===$&&B.b()
if(u!==2)m.fx=m.avB(v)}u=m.fx
u===$&&B.b()
t=m.id
if(u>=3){t===$&&B.b()
o=m.OX(t-m.k1,u-3)
u=m.k2
t=m.fx
u-=t
m.k2=u
s=$.xP.b
if(s===$.xP)B.aa(B.w5(w))
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
p.$flags&2&&B.L(p)
p[(t&n)>>>0]=r
s.$flags&2&&B.L(s)
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
o=m.OX(0,u[t]&255)
m.k2=m.k2-1
m.id=m.id+1}if(o)m.zs(!1)}x=d===C.r1
m.zs(x)
return x?3:1},
b8C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
for(x=d===C.AX,w=$.xP.a,v=0;!0;){u=l.k2
u===$&&B.b()
if(u<262){l.a87()
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
q.$flags&2&&B.L(q)
q[(s&p)>>>0]=t
u.$flags&2&&B.L(u)
u[r]=s}u=l.fx
u===$&&B.b()
l.k3=u
l.fy=l.k1
l.fx=2
t=!1
if(v!==0){s=$.xP.b
if(s===$.xP)B.aa(B.w5(w))
if(u<s.b){u=l.id
u===$&&B.b()
t=l.Q
t===$&&B.b()
t=(u-v&65535)<=t-262
u=t}else u=t}else u=t
t=2
if(u){u=l.ok
u===$&&B.b()
if(u!==2){u=l.avB(v)
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
n=l.OX(u-1-l.fy,t-3)
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
p.$flags&2&&B.L(p)
p[(t&m)>>>0]=r
s.$flags&2&&B.L(s)
s[q]=t}}while(u=l.k3=u-1,u!==0)
l.go=0
l.fx=2
l.id=t+1
if(n)l.zs(!1)}else{u=l.go
u===$&&B.b()
if(u!==0){u=l.ax
u===$&&B.b()
t=l.id
t===$&&B.b()
if(l.OX(0,u[t-1]&255))l.zs(!1)
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
l.OX(0,x[w-1]&255)
l.go=0}x=d===C.r1
l.zs(x)
return x?3:1},
avB(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=$.xP.c9().d,h=j.id
h===$&&B.b()
x=j.k3
x===$&&B.b()
w=j.Q
w===$&&B.b()
w-=262
v=h>w?h-w:0
u=$.xP.c9().c
w=j.at
w===$&&B.b()
t=j.id+258
s=j.ax
s===$&&B.b()
r=h+x
q=s[r-1]
p=s[r]
if(j.k3>=$.xP.c9().a)i=i>>>2
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
bu2(d,e,f){var x,w,v,u,t,s,r=this
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
D.H.hR(d,e,e+u,t)
r.e+=u
r.d=A.zn(t,r.d)
return u},
a7K(){var x,w=this,v=w.x
v===$&&B.b()
x=w.f
x===$&&B.b()
w.b.aOF(x,v)
x=w.w
x===$&&B.b()
w.w=x+v
v=w.x-v
w.x=v
if(v===0)w.w=0},
bcd(d){switch(d){case 0:return new A.v4(0,0,0,0,0)
case 1:return new A.v4(4,4,8,4,1)
case 2:return new A.v4(4,5,16,8,1)
case 3:return new A.v4(4,6,32,32,1)
case 4:return new A.v4(4,4,16,16,2)
case 5:return new A.v4(8,16,32,32,2)
case 6:return new A.v4(8,16,128,128,2)
case 7:return new A.v4(8,32,128,256,2)
case 8:return new A.v4(32,128,258,1024,2)
case 9:return new A.v4(32,258,258,4096,2)}return null}}
A.v4.prototype={}
A.cmD.prototype={
bbT(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a
d===$&&B.b()
x=e.c
x===$&&B.b()
w=x.a
v=x.b
u=x.c
t=x.e
for(x=a0.rx,s=x.$flags|0,r=0;r<=15;++r){s&2&&B.L(x)
x[r]=0}q=a0.ry
p=a0.x1
p===$&&B.b()
o=q[p]
d.$flags&2&&B.L(d)
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
s&2&&B.L(x)
x[r]=j+1
i=l>=u?v[l-u]:0
h=d[o]
o=a0.bt
o===$&&B.b()
a0.bt=o+h*(r+i)
if(p){o=a0.C
o===$&&B.b()
a0.C=o+h*(w[k]+i)}}if(m===0)return
r=t-1
do{for(g=r;p=x[g],p===0;)--g
s&2&&B.L(x)
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
if(o!==r){k=a0.bt
k===$&&B.b()
a0.bt=k+(r-o)*d[s]
d[p]=r}--l}}},
a72(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
g===$&&B.b()
x=h.c
x===$&&B.b()
w=x.a
v=x.d
d.to=0
d.x1=573
for(x=g.$flags|0,u=d.ry,t=u.$flags|0,s=d.x2,r=s.$flags|0,q=0,p=-1;q<v;++q){o=q*2
if(g[o]!==0){o=++d.to
t&2&&B.L(u)
u[o]=q
r&2&&B.L(s)
s[q]=0
p=q}else{x&2&&B.L(g)
g[o+1]=0}}for(o=w!=null;n=d.to,n<2;){++n
d.to=n
if(p<2){++p
m=p}else m=0
t&2&&B.L(u)
u[n]=m
n=m*2
x&2&&B.L(g)
g[n]=1
r&2&&B.L(s)
s[m]=0
l=d.bt
l===$&&B.b()
d.bt=l-1
if(o){l=d.C
l===$&&B.b()
d.C=l-w[n+1]}}h.b=p
for(q=D.c.aL(n,2);q>=1;--q)d.aap(g,q)
m=v
do{q=u[1]
o=u[d.to--]
t&2&&B.L(u)
u[1]=o
d.aap(g,1)
k=u[1]
o=--d.x1
u[o]=q;--o
d.x1=o
u[o]=k
o=q*2
n=g[o]
l=k*2
j=g[l]
x&2&&B.L(g)
g[m*2]=n+j
j=s[q]
n=s[k]
if(j>n)n=j
r&2&&B.L(s)
s[m]=n+1
g[l+1]=m
g[o+1]=m
i=m+1
u[1]=m
d.aap(g,1)
if(d.to>=2){m=i
continue}else break}while(!0)
u[--d.x1]=u[1]
h.bbT(d)
A.dJi(g,p,d.rx)}}
A.cHN.prototype={}
A.bw0.prototype={
gvo(){var x=this.a
if(x==null)return x
x.d===$&&B.b()
return x},
ble(){var x,w,v=this
v.e=v.d=0
if(v.gvo()==null)return
while(!0){x=v.gvo()
w=x.c
x=x.d
x===$&&B.b()
if(!(w<x))break
if(!v.bs9())return}},
bs9(){var x,w,v,u=this,t=u.gvo()
if(t!=null){x=t.c
w=t.d
w===$&&B.b()
w=x>=w
x=w}else x=!0
if(x)return!1
v=u.rq(3)
switch(D.c.Z(v,1)){case 0:if(u.bst()===-1)return!1
break
case 1:if(u.aqJ(u.r,u.w)===-1)return!1
break
case 2:if(u.bsd()===-1)return!1
break
default:return!1}return(v&1)===0},
rq(d){var x,w,v,u,t=this
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
u=D.c.eB(1,d)
t.d=D.c.i5(w,d)
t.e=x-d
return(w&u-1)>>>0},
aaw(d){var x,w,v,u,t,s,r=this,q=d.a
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
r.d=D.c.i5(v,s)
r.e=w-s
return t&65535},
bst(){var x,w,v=this
v.e=v.d=0
x=v.rq(16)
w=v.rq(16)
if(x!==0&&x!==(w^65535)>>>0)return-1
if(x>v.gvo().gA(0))return-1
v.c.c_R(v.gvo().jN(x))
return 0},
bsd(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.rq(5)
if(m===-1)return-1
m+=257
if(m>288)return-1
x=n.rq(5)
if(x===-1)return-1;++x
if(x>32)return-1
w=n.rq(4)
if(w===-1)return-1
w+=4
if(w>19)return-1
v=new Uint8Array(19)
for(u=0;u<w;++u){t=n.rq(3)
if(t===-1)return-1
v[C.FI[u]]=t}s=A.cX4(v)
r=m+x
q=new Uint8Array(r)
p=J.dx(D.H.gaq(q),0,m)
o=J.dx(D.H.gaq(q),m,x)
if(n.b7H(r,s,q)===-1)return-1
return n.aqJ(A.cX4(p),A.cX4(o))},
aqJ(d,e){var x,w,v,u,t,s,r,q,p=this
for(x=p.c;!0;){w=p.aaw(d)
if(w<0||w>285)return-1
if(w===256)break
if(w<256){x.bf(w&255)
continue}v=w-257
u=C.aQB[v]+p.rq(C.aS8[v])
t=p.aaw(e)
if(t<0||t>29)return-1
s=C.aQI[t]+p.rq(C.vv[t])
for(r=-s;u>s;){x.mD(x.jS(r))
u-=s}if(u===s)x.mD(x.jS(r))
else x.mD(x.amw(r,u-s))}for(;x=p.e,x>=8;){p.e=x-8
x=p.gvo()
r=--x.c
q=x.d
q===$&&B.b()
x.c=D.c.aM(r,0,q)}return 0},
b7H(d,e,f){var x,w,v,u,t,s,r,q,p=this
for(x=f.$flags|0,w=0,v=0;v<d;){u=p.aaw(e)
if(u===-1)return-1
t=0
switch(u){case 16:s=p.rq(2)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.L(f)
f[v]=w}break
case 17:s=p.rq(3)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.L(f)
f[v]=0}w=t
break
case 18:s=p.rq(7)
if(s===-1)return-1
s+=11
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.L(f)
f[v]=0}w=t
break
default:if(u<0||u>15)return-1
q=v+1
x&2&&B.L(f)
f[v]=u
v=q
w=u
break}}return 0}}
A.c4E.prototype={
DJ(d){var x=A.d8Q(C.rn,32768)
C.anM.bK6(A.bwh(d,C.ov,null,null),x,!1,!1)
return x.akd()}}
A.apD.prototype={
J(){return"ByteOrder."+this.b}}
A.bwg.prototype={
gA(d){var x=this.b
return x==null?0:x.length-this.c},
h(d,e){return this.b[this.c+e]},
aVC(d,e){var x=this.b
if(x==null)return A.bwh(B.a([],y.t),C.rn,null,null)
return A.bwh(x,this.a,d,e)},
cD(){var x=this.b
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
A.bwi.prototype={
ag(){var x=this,w=x.cD(),v=x.cD(),u=x.cD(),t=x.cD()
if(x.a===C.ov)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
jN(d){var x=this,w=x.aVC(d,x.c)
x.c=x.c+w.gA(0)
return w}}
A.aCt.prototype={
akd(){return J.dx(D.H.gaq(this.c),this.c.byteOffset,this.b)},
bf(d){var x,w,v=this
if(v.b===v.c.length)v.brH()
x=v.c
w=v.b++
x.$flags&2&&B.L(x)
x[w]=d},
aOF(d,e){var x,w,v,u,t=this
if(e==null)e=d.length
for(;x=t.b,w=x+e,v=t.c,u=v.length,w>u;)t.aa6(w-u)
D.H.hR(v,x,w,d)
t.b+=e},
mD(d){return this.aOF(d,null)},
c_R(d){var x,w,v,u,t,s,r=this
while(!0){x=r.b
w=d.b
v=w==null
u=v?0:w.length-d.c
t=r.c
s=t.length
if(!(x+u>s))break
r.aa6(x+(v?0:w.length-d.c)-s)}if(!v){w=d.gA(0)
v=d.b
v.toString
D.H.ej(t,x,x+w,v,d.c)}r.b=r.b+d.gA(0)},
amw(d,e){var x=this
if(d<0)d=x.b+d
if(e==null)e=x.b
else if(e<0)e=x.b+e
return J.dx(D.H.gaq(x.c),x.c.byteOffset+d,e-d)},
jS(d){return this.amw(d,null)},
aa6(d){var x=d!=null?d>32768?d:32768:32768,w=this.c,v=w.length,u=new Uint8Array((v+x)*2)
D.H.hR(u,0,v,w)
this.c=u},
brH(){return this.aa6(null)},
gA(d){return this.b}}
A.bGP.prototype={}
A.b9X.prototype={
J(){return"Channel."+this.b}}
A.iB.prototype={
q(){var x=this.b
return++this.a<x.gA(x)},
gM(d){return this.b.h(0,this.a)},
$ibP:1}
A.QE.prototype={
ew(d){return new A.QE(new Uint16Array(B.c9(this.a)))},
gdG(){return C.jk},
gA(d){return this.a.length},
gf7(){return null},
h(d,e){var x,w=this.a
if(e<w.length){w=w[e]
x=$.iR
w=(x!=null?x:A.jH())[w]}else w=0
return w},
m(d,e,f){var x,w=this.a
if(e<w.length){x=A.hT(f)
w.$flags&2&&B.L(w)
w[e]=x}},
gdH(d){return this.gar(0)},
gar(d){var x,w=this.a
if(!D.eS.ga0(w)){w=w[0]
x=$.iR
w=(x!=null?x:A.jH())[w]}else w=0
return w},
sar(d,e){var x,w=this.a
if(!D.eS.ga0(w)){x=A.hT(e)
w.$flags&2&&B.L(w)
w[0]=x}},
gaE(){var x,w=this.a
if(w.length>1){w=w[1]
x=$.iR
w=(x!=null?x:A.jH())[w]}else w=0
return w},
saE(d){var x,w=this.a
if(w.length>1){x=A.hT(d)
w.$flags&2&&B.L(w)
w[1]=x}},
gaF(d){var x,w=this.a
if(w.length>2){w=w[2]
x=$.iR
w=(x!=null?x:A.jH())[w]}else w=0
return w},
saF(d,e){var x,w=this.a
if(w.length>2){x=A.hT(e)
w.$flags&2&&B.L(w)
w[2]=x}},
gaU(d){var x,w=this.a
if(w.length>3){w=w[3]
x=$.iR
w=(x!=null?x:A.jH())[w]}else w=0
return w},
gfU(){return this.gaU(0)/1},
gkd(){return A.kb(this)},
jd(d,e){var x,w,v=this
v.sar(0,e.gar(e))
v.saE(e.gaE())
v.saF(0,e.gaF(e))
x=e.gaU(e)
w=v.a
if(w.length>3){x=A.hT(x)
w.$flags&2&&B.L(w)
w[3]=x}},
gaa(d){return new A.iB(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=B.A(this,B.t(this).i("x.E"))
x=x===B.aT(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
$ie2:1}
A.QF.prototype={
ew(d){return new A.QF(new Float32Array(B.c9(this.a)))},
gdG(){return C.kV},
gA(d){return this.a.length},
gf7(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x=this.a
if(e<x.length){x.$flags&2&&B.L(x)
x[e]=f}},
gdH(d){var x=this.a
return!D.fW.ga0(x)?x[0]:0},
gar(d){var x=this.a
return!D.fW.ga0(x)?x[0]:0},
sar(d,e){var x=this.a
if(!D.fW.ga0(x)){x.$flags&2&&B.L(x)
x[0]=e}},
gaE(){var x=this.a
return x.length>1?x[1]:0},
saE(d){var x=this.a
if(x.length>1){x.$flags&2&&B.L(x)
x[1]=d}},
gaF(d){var x=this.a
return x.length>2?x[2]:0},
saF(d,e){var x=this.a
if(x.length>2){x.$flags&2&&B.L(x)
x[2]=e}},
gaU(d){var x=this.a
return x.length>3?x[3]:1},
gfU(){return this.gaU(0)/1},
gkd(){return A.kb(this)},
jd(d,e){var x,w,v=this
v.sar(0,e.gar(e))
v.saE(e.gaE())
v.saF(0,e.gaF(e))
x=e.gaU(e)
w=v.a
if(w.length>3){w.$flags&2&&B.L(w)
w[3]=x}},
gaa(d){return new A.iB(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=B.A(this,B.t(this).i("x.E"))
x=x===B.aT(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
$ie2:1}
A.QG.prototype={
ew(d){return new A.QG(new Float64Array(B.c9(this.a)))},
gdG(){return C.mB},
gA(d){return this.a.length},
gf7(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x=this.a
if(e<x.length){x.$flags&2&&B.L(x)
x[e]=f}},
gdH(d){var x=this.a
return!D.fg.ga0(x)?x[0]:0},
gar(d){var x=this.a
return!D.fg.ga0(x)?x[0]:0},
sar(d,e){var x=this.a
if(!D.fg.ga0(x)){x.$flags&2&&B.L(x)
x[0]=e}},
gaE(){var x=this.a
return x.length>1?x[1]:0},
saE(d){var x=this.a
if(x.length>1){x.$flags&2&&B.L(x)
x[1]=d}},
gaF(d){var x=this.a
return x.length>2?x[2]:0},
saF(d,e){var x=this.a
if(x.length>2){x.$flags&2&&B.L(x)
x[2]=e}},
gaU(d){var x=this.a
return x.length>3?x[3]:1},
gfU(){return this.gaU(0)/1},
gkd(){return A.kb(this)},
jd(d,e){var x,w,v=this
v.sar(0,e.gar(e))
v.saE(e.gaE())
v.saF(0,e.gaF(e))
x=e.gaU(e)
w=v.a
if(w.length>3){w.$flags&2&&B.L(w)
w[3]=x}},
gaa(d){return new A.iB(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=B.A(this,B.t(this).i("x.E"))
x=x===B.aT(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
$ie2:1}
A.QH.prototype={
ew(d){return new A.QH(new Int16Array(B.c9(this.a)))},
gdG(){return C.mD},
gA(d){return this.a.length},
gf7(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.e.L(f)
w.$flags&2&&B.L(w)
w[e]=x}},
gdH(d){var x=this.a
return!D.lq.ga0(x)?x[0]:0},
gar(d){var x=this.a
return!D.lq.ga0(x)?x[0]:0},
sar(d,e){var x,w=this.a
if(!D.lq.ga0(w)){x=D.e.L(e)
w.$flags&2&&B.L(w)
w[0]=x}},
gaE(){var x=this.a
return x.length>1?x[1]:0},
saE(d){var x,w=this.a
if(w.length>1){x=D.e.L(d)
w.$flags&2&&B.L(w)
w[1]=x}},
gaF(d){var x=this.a
return x.length>2?x[2]:0},
saF(d,e){var x,w=this.a
if(w.length>2){x=D.e.L(e)
w.$flags&2&&B.L(w)
w[2]=x}},
gaU(d){var x=this.a
return x.length>3?x[3]:0},
gfU(){return this.gaU(0)/32767},
gkd(){return A.kb(this)},
jd(d,e){var x,w,v=this
v.sar(0,e.gar(e))
v.saE(e.gaE())
v.saF(0,e.gaF(e))
x=e.gaU(e)
w=v.a
if(w.length>3){x=D.e.L(x)
w.$flags&2&&B.L(w)
w[3]=x}},
gaa(d){return new A.iB(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=B.A(this,B.t(this).i("x.E"))
x=x===B.aT(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
$ie2:1}
A.QI.prototype={
ew(d){return new A.QI(new Int32Array(B.c9(this.a)))},
gdG(){return C.mE},
gA(d){return this.a.length},
gf7(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.e.L(f)
w.$flags&2&&B.L(w)
w[e]=x}},
gdH(d){var x=this.a
return!D.d9.ga0(x)?x[0]:0},
gar(d){var x=this.a
return!D.d9.ga0(x)?x[0]:0},
sar(d,e){var x=this.a
if(!D.d9.ga0(x)){B.bx(e)
x.$flags&2&&B.L(x)
x[0]=e}},
gaE(){var x=this.a
return x.length>1?x[1]:0},
saE(d){var x,w=this.a
if(w.length>1){x=D.e.L(d)
w.$flags&2&&B.L(w)
w[1]=x}},
gaF(d){var x=this.a
return x.length>2?x[2]:0},
saF(d,e){var x,w=this.a
if(w.length>2){x=D.e.L(e)
w.$flags&2&&B.L(w)
w[2]=x}},
gaU(d){var x=this.a
return x.length>3?x[3]:0},
gfU(){return this.gaU(0)/2147483647},
gkd(){return A.kb(this)},
jd(d,e){var x,w,v=this
v.sar(0,e.gar(e))
v.saE(e.gaE())
v.saF(0,e.gaF(e))
x=e.gaU(e)
w=v.a
if(w.length>3){x=D.e.L(x)
w.$flags&2&&B.L(w)
w[3]=x}},
gaa(d){return new A.iB(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=B.A(this,B.t(this).i("x.E"))
x=x===B.aT(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
$ie2:1}
A.QJ.prototype={
ew(d){return new A.QJ(new Int8Array(B.c9(this.a)))},
gdG(){return C.mC},
gA(d){return this.a.length},
gf7(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.e.L(f)
w.$flags&2&&B.L(w)
w[e]=x}},
gdH(d){var x=this.a
return!D.lr.ga0(x)?x[0]:0},
gar(d){var x=this.a
return!D.lr.ga0(x)?x[0]:0},
sar(d,e){var x,w=this.a
if(!D.lr.ga0(w)){x=D.e.L(e)
w.$flags&2&&B.L(w)
w[0]=x}},
gaE(){var x=this.a
return x.length>1?x[1]:0},
saE(d){var x,w=this.a
if(w.length>1){x=D.e.L(d)
w.$flags&2&&B.L(w)
w[1]=x}},
gaF(d){var x=this.a
return x.length>2?x[2]:0},
saF(d,e){var x,w=this.a
if(w.length>2){x=D.e.L(e)
w.$flags&2&&B.L(w)
w[2]=x}},
gaU(d){var x=this.a
return x.length>3?x[3]:0},
gfU(){return this.gaU(0)/127},
gkd(){return A.kb(this)},
jd(d,e){var x,w,v=this
v.sar(0,e.gar(e))
v.saE(e.gaE())
v.saF(0,e.gaF(e))
x=e.gaU(e)
w=v.a
if(w.length>3){x=D.e.L(x)
w.$flags&2&&B.L(w)
w[3]=x}},
gaa(d){return new A.iB(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=B.A(this,B.t(this).i("x.E"))
x=x===B.aT(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
$ie2:1}
A.QM.prototype={
ew(d){var x=this.b
x===$&&B.b()
return new A.QM(this.a,x)},
gdG(){return C.hF},
gf7(){return null},
Cj(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.ht(x,7-d)&1}else x=0
return x},
zm(d,e){var x
if(d>=this.a)return
d=7-d
x=this.b
x===$&&B.b()
this.b=e!==0?(x|D.c.f9(1,d))>>>0:(x&~(D.c.f9(1,d)&255))>>>0},
h(d,e){return this.Cj(e)},
m(d,e,f){return this.zm(e,f)},
gdH(d){return this.Cj(0)},
gar(d){return this.Cj(0)},
sar(d,e){this.zm(0,e)},
gaE(){return this.Cj(1)},
saE(d){this.zm(1,d)},
gaF(d){return this.Cj(2)},
saF(d,e){this.zm(2,e)},
gaU(d){return this.Cj(3)},
gfU(){return this.Cj(3)/1},
gkd(){return A.kb(this)},
jd(d,e){this.iV(e.gar(e),e.gaE(),e.gaF(e),e.gaU(e))},
iV(d,e,f,g){var x=this
x.zm(0,d)
x.zm(1,e)
x.zm(2,f)
x.zm(3,g)},
gaa(d){return new A.iB(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a){x=e.gv(e)
w=B.A(this,B.t(this).i("x.E"))
x=x===B.aT(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
$ie2:1,
gA(d){return this.a}}
A.QN.prototype={
ew(d){return new A.QN(new Uint16Array(B.c9(this.a)))},
gdG(){return C.cX},
gA(d){return this.a.length},
gf7(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.e.L(f)
w.$flags&2&&B.L(w)
w[e]=x}},
gdH(d){var x=this.a
return!D.eS.ga0(x)?x[0]:0},
gar(d){var x=this.a
return!D.eS.ga0(x)?x[0]:0},
sar(d,e){var x,w=this.a
if(!D.eS.ga0(w)){x=D.e.L(e)
w.$flags&2&&B.L(w)
w[0]=x}},
gaE(){var x=this.a
return x.length>1?x[1]:0},
saE(d){var x,w=this.a
if(w.length>1){x=D.e.L(d)
w.$flags&2&&B.L(w)
w[1]=x}},
gaF(d){var x=this.a
return x.length>2?x[2]:0},
saF(d,e){var x,w=this.a
if(w.length>2){x=D.e.L(e)
w.$flags&2&&B.L(w)
w[2]=x}},
gaU(d){var x=this.a
return x.length>3?x[3]:0},
gfU(){return this.gaU(0)/65535},
gkd(){return A.kb(this)},
jd(d,e){var x,w,v=this
v.sar(0,e.gar(e))
v.saE(e.gaE())
v.saF(0,e.gaF(e))
x=e.gaU(e)
w=v.a
if(w.length>3){x=D.e.L(x)
w.$flags&2&&B.L(w)
w[3]=x}},
gaa(d){return new A.iB(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=B.A(this,B.t(this).i("x.E"))
x=x===B.aT(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
$ie2:1}
A.QO.prototype={
ew(d){var x=this.b
x===$&&B.b()
return new A.QO(this.a,x)},
gdG(){return C.iu},
gf7(){return null},
Ck(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.ht(x,6-(d<<1>>>0))&3}else x=0
return x},
zn(d,e){var x,w,v
if(d>=this.a)return
x=C.aGl[d]
w=D.e.L(e)
v=this.b
v===$&&B.b()
this.b=(v&x|D.c.f9(w&3,6-(d<<1>>>0)))>>>0},
h(d,e){return this.Ck(e)},
m(d,e,f){return this.zn(e,f)},
gdH(d){return this.Ck(0)},
gar(d){return this.Ck(0)},
sar(d,e){this.zn(0,e)},
gaE(){return this.Ck(1)},
saE(d){this.zn(1,d)},
gaF(d){return this.Ck(2)},
saF(d,e){this.zn(2,e)},
gaU(d){return this.Ck(3)},
gfU(){return this.Ck(3)/3},
gkd(){return A.kb(this)},
jd(d,e){this.iV(e.gar(e),e.gaE(),e.gaF(e),e.gaU(e))},
iV(d,e,f,g){var x=this
x.zn(0,d)
x.zn(1,e)
x.zn(2,f)
x.zn(3,g)},
gaa(d){return new A.iB(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a){x=e.gv(e)
w=B.A(this,B.t(this).i("x.E"))
x=x===B.aT(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
$ie2:1,
gA(d){return this.a}}
A.QP.prototype={
ew(d){return new A.QP(new Uint32Array(B.c9(this.a)))},
gdG(){return C.kW},
gA(d){return this.a.length},
gf7(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.e.L(f)
w.$flags&2&&B.L(w)
w[e]=x}},
gdH(d){var x=this.a
return!D.bM.ga0(x)?x[0]:0},
gar(d){var x=this.a
return!D.bM.ga0(x)?x[0]:0},
sar(d,e){var x,w=this.a
if(!D.bM.ga0(w)){x=D.e.L(e)
w.$flags&2&&B.L(w)
w[0]=x}},
gaE(){var x=this.a
return x.length>1?x[1]:0},
saE(d){var x,w=this.a
if(w.length>1){x=D.e.L(d)
w.$flags&2&&B.L(w)
w[1]=x}},
gaF(d){var x=this.a
return x.length>2?x[2]:0},
saF(d,e){var x,w=this.a
if(w.length>2){x=D.e.L(e)
w.$flags&2&&B.L(w)
w[2]=x}},
gaU(d){var x=this.a
return x.length>3?x[3]:0},
gfU(){return this.gaU(0)/4294967295},
gkd(){return A.kb(this)},
jd(d,e){var x,w,v=this
v.sar(0,e.gar(e))
v.saE(e.gaE())
v.saF(0,e.gaF(e))
x=e.gaU(e)
w=v.a
if(w.length>3){x=D.e.L(x)
w.$flags&2&&B.L(w)
w[3]=x}},
gaa(d){return new A.iB(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=B.A(this,B.t(this).i("x.E"))
x=x===B.aT(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
$ie2:1}
A.QQ.prototype={
ew(d){return new A.QQ(this.a,new Uint8Array(B.c9(this.b)))},
gdG(){return C.iv},
gf7(){return null},
Cl(d){var x
if(d<0||d>=this.a)x=0
else{x=this.b
x=d<2?D.c.ht(x[0],4-(d<<2>>>0))&15:D.c.ht(x[1],4-((d&1)<<2))&15}return x},
zo(d,e){var x,w,v,u
if(d>=this.a)return
x=D.c.aM(D.e.L(e),0,15)
if(d>1){d&=1
w=1}else w=0
if(d===0){v=this.b
u=v[w]
v.$flags&2&&B.L(v)
v[w]=(u&15|x<<4)>>>0}else if(d===1){v=this.b
u=v[w]
v.$flags&2&&B.L(v)
v[w]=(u&240|x)>>>0}},
h(d,e){return this.Cl(e)},
m(d,e,f){return this.zo(e,f)},
gdH(d){return this.Cl(0)},
gar(d){return this.Cl(0)},
sar(d,e){this.zo(0,e)},
gaE(){return this.Cl(1)},
saE(d){this.zo(1,d)},
gaF(d){return this.Cl(2)},
saF(d,e){this.zo(2,e)},
gaU(d){return this.Cl(3)},
gfU(){return this.Cl(3)/15},
gkd(){return A.kb(this)},
jd(d,e){this.iV(e.gar(e),e.gaE(),e.gaF(e),e.gaU(e))},
iV(d,e,f,g){var x=this
x.zo(0,d)
x.zo(1,e)
x.zo(2,f)
x.zo(3,g)},
gaa(d){return new A.iB(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a){x=e.gv(e)
w=B.A(this,B.t(this).i("x.E"))
x=x===B.aT(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
$ie2:1,
gA(d){return this.a}}
A.zZ.prototype={
b0R(d,e,f,g){var x=this.a
x.$flags&2&&B.L(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g},
ew(d){return new A.zZ(new Uint8Array(B.c9(this.a)))},
gdG(){return C.aj},
gA(d){return this.a.length},
gf7(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.e.L(f)
w.$flags&2&&B.L(w)
w[e]=x}},
gdH(d){var x=this.a
return!D.H.ga0(x)?x[0]:0},
gar(d){var x=this.a
return!D.H.ga0(x)?x[0]:0},
sar(d,e){var x,w=this.a
if(!D.H.ga0(w)){x=D.e.L(e)
w.$flags&2&&B.L(w)
w[0]=x}},
gaE(){var x=this.a
return x.length>1?x[1]:0},
saE(d){var x,w=this.a
if(w.length>1){x=D.e.L(d)
w.$flags&2&&B.L(w)
w[1]=x}},
gaF(d){var x=this.a
return x.length>2?x[2]:0},
saF(d,e){var x,w=this.a
if(w.length>2){x=D.e.L(e)
w.$flags&2&&B.L(w)
w[2]=x}},
gaU(d){var x=this.a
return x.length>3?x[3]:255},
gfU(){return this.gaU(0)/255},
gkd(){return A.kb(this)},
jd(d,e){var x,w,v=this
v.sar(0,e.gar(e))
v.saE(e.gaE())
v.saF(0,e.gaF(e))
x=e.gaU(e)
w=v.a
if(w.length>3){x=D.e.L(x)
w.$flags&2&&B.L(w)
w[3]=x}},
gaa(d){return new A.iB(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=B.A(this,B.t(this).i("x.E"))
x=x===B.aT(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
$ie2:1}
A.aqy.prototype={}
A.QK.prototype={}
A.a0V.prototype={
ew(d){return new A.a0V(this.a)},
gdG(){return C.aj},
gA(d){return 4},
gf7(){return null},
h(d,e){var x
if(e>=0&&e<4){x=e<<3>>>0
x=D.c.i5((this.a&D.c.eB(255,x))>>>0,x)}else x=0
return x},
m(d,e,f){},
jd(d,e){},
gdH(d){return this.h(0,0)},
gar(d){return this.h(0,0)},
sar(d,e){},
gaE(){return this.h(0,1)},
saE(d){},
gaF(d){return this.h(0,2)},
saF(d,e){},
gaU(d){return this.h(0,3)},
gfU(){return this.gaU(this)/255},
gkd(){return A.kb(this)},
gaa(d){return new A.iB(this)},
k(d,e){var x,w,v=this
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===v.gA(v)){x=e.gv(e)
w=B.A(v,B.t(v).i("x.E"))
x=x===B.aT(w)}return x},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
$ie2:1}
A.aqK.prototype={
gaU(d){return 255},
gfU(){return 1},
gA(d){return 3}}
A.p8.prototype={
J(){return"Format."+this.b}}
A.apo.prototype={
J(){return"BlendMode."+this.b}}
A.RX.prototype={
TK(d){var x=$.cUV()
if(!x.a4(0,d))return"<unknown>"
return x.h(0,d).a},
j(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(x=j.a,w=new B.ca(x,x.r,x.e,B.t(x).i("ca<1>")),v=y.p,u=y.r,t=y.N,s=y.P,r="";w.q();){q=w.d
r+=q+"\n"
p=x.h(0,q)
for(q=p.a,q=new B.ca(q,q.r,q.e,B.t(q).i("ca<1>"));q.q();){o=q.d
n=p.h(0,o)
r=n==null?r+("\t"+j.TK(o)+"\n"):r+("\t"+j.TK(o)+": "+n.j(0)+"\n")}for(q=p.b.a,o=new B.ca(q,q.r,q.e,B.t(q).i("ca<1>"));o.q();){m=o.d
r+=m+"\n"
if(!q.a4(0,m))q.m(0,m,new A.rz(B.I(v,u),new A.vY(B.I(t,s))))
l=q.h(0,m)
for(m=l.a,m=new B.ca(m,m.r,m.e,B.t(m).i("ca<1>"));m.q();){k=m.d
n=l.h(0,k)
r=n==null?r+("\t"+j.TK(k)+"\n"):r+("\t"+j.TK(k)+": "+n.j(0)+"\n")}}}return r.charCodeAt(0)==0?r:r},
jv(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0="exif",a1="interop",a2=a4.b
a4.b=!0
a4.ly(19789)
a4.ly(42)
a4.jw(8)
x=d.a
if(x.h(0,"ifd0")==null)x.m(0,"ifd0",new A.rz(B.I(y.p,y.r),new A.vY(B.I(y.N,y.P))))
w=y.N
v=y.p
u=B.I(w,v)
for(t=B.t(x),s=t.i("bG<1>"),r=new B.ca(x,x.r,x.e,t.i("ca<1>")),q=y.r,p=y.P,o=8;r.q();){n=r.d
m=x.h(0,n)
m.toString
u.m(0,n,o)
n=m.b.a
if(n.a4(0,a0)){l=new Uint32Array(1)
l[0]=0
m.m(0,34665,new A.u2(l))}else m.a.I(0,34665)
if(n.a4(0,a1)){l=new Uint32Array(1)
l[0]=0
m.m(0,40965,new A.u2(l))}else m.a.I(0,40965)
if(n.a4(0,"gps")){l=new Uint32Array(1)
l[0]=0
m.m(0,34853,new A.u2(l))}else m.a.I(0,34853)
m=m.a
o+=2+12*m.a+4
for(m=new B.bt(m,m.r,m.e,B.t(m).i("bt<2>"));m.q();){l=m.d
k=C.l7[l.gfP(l).a]*l.gA(l)
if(k>4)o+=k}for(m=new B.ca(n,n.r,n.e,B.t(n).i("ca<1>"));m.q();){l=m.d
if(!n.a4(0,l))n.m(0,l,new A.rz(B.I(v,q),new A.vY(B.I(w,p))))
j=n.h(0,l)
j.toString
u.m(0,l,o)
j=j.a
i=2+12*j.a
for(l=new B.bt(j,j.r,j.e,B.t(j).i("bt<2>"));l.q();){j=l.d
k=C.l7[j.gfP(j).a]*j.gA(j)
if(k>4)i+=k}o+=i}}h=x.a
for(r=h-1,t=t.i("aF<2>"),g=0;g<h;++g){f=new B.bG(x,s).dY(0,g)
e=new B.aF(x,t).dY(0,g)
n=e.b.a
if(n.a4(0,a0)){m=e.h(0,34665)
m.toString
l=u.h(0,a0)
l.toString
m.wH(l)}if(n.a4(0,a1)){m=e.h(0,40965)
m.toString
l=u.h(0,a1)
l.toString
m.wH(l)}if(n.a4(0,"gps")){m=e.h(0,34853)
m.toString
l=u.h(0,"gps")
l.toString
m.wH(l)}m=u.h(0,f)
m.toString
d.aCM(a4,e,m+2+12*e.a.a+4)
if(g===r)a4.jw(0)
else{m=u.h(0,new B.bG(x,s).dY(0,g+1))
m.toString
a4.jw(m)}d.aCN(a4,e)
for(m=new B.ca(n,n.r,n.e,B.t(n).i("ca<1>"));m.q();){l=m.d
if(!n.a4(0,l))n.m(0,l,new A.rz(B.I(v,q),new A.vY(B.I(w,p))))
j=n.h(0,l)
j.toString
l=u.h(0,l)
l.toString
d.aCM(a4,j,l+2+12*j.a.a)
d.aCN(a4,j)}}a4.b=a2},
aCM(d,e,f){var x,w,v,u,t,s,r=e.a
d.ly(r.a)
for(r=new B.ca(r,r.r,r.e,B.t(r).i("ca<1>"));r.q();){x=r.d
w=e.h(0,x)
w.toString
v=x===273
u=v&&w.gfP(w)===C.jo?C.dI:w.gfP(w)
t=v&&w.gfP(w)===C.jo?1:w.gA(w)
d.ly(x)
d.ly(u.a)
d.jw(t)
s=C.l7[w.gfP(w).a]*w.gA(w)
if(s<=4){w.jv(0,d)
for(;s<4;){d.bf(0);++s}}else{d.jw(f)
f+=s}}return f},
aCN(d,e){var x,w
for(x=e.a,x=new B.bt(x,x.r,x.e,B.t(x).i("bt<2>"));x.q();){w=x.d
if(C.l7[w.gfP(w).a]*w.gA(w)>4)w.jv(0,d)}},
oy(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a5.e
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
for(i=0;i<k;++i)j[i]=this.axJ(a5,x)
for(m=j.length,h=0;h<j.length;j.length===m||(0,B.K)(j),++h){g=j[h]
f=g.b
if(f!=null)l.m(0,g.a,f)}u.m(0,"ifd"+n,l);++n
e=a5.ag()
if(e===v)break}for(u=new B.bt(u,u.r,u.e,B.t(u).i("bt<2>"));u.q();){o=u.d
for(m=J.aK(C.Gx.gey(C.Gx)),f=o.a,d=o.b.a;m.q();){a0=m.gM(m)
if(f.a4(0,a0)){a5.d=x+o.h(0,a0).L(0)
l=new A.rz(B.I(s,r),new A.vY(B.I(q,p)))
k=a5.av()
j=B.a(new Array(k),t)
for(i=0;i<k;++i)j[i]=this.axJ(a5,x)
for(a1=j.length,h=0;h<j.length;j.length===a1||(0,B.K)(j),++h){g=j[h]
a2=g.b
if(a2!=null)l.m(0,g.a,a2)}a0=C.Gx.h(0,a0)
a0.toString
d.m(0,a0,l)}}}a5.e=a3
return!1},
axJ(d,e){var x,w,v,u,t=d.av(),s=d.av(),r=d.ag(),q=new A.aQM(t,null)
if(s>13)return q
x=C.Tg[s]
w=r*C.l7[s]
v=d.d
if((w>4?d.d=d.ag()+e:v)+w>d.c)return q
u=d.jN(w)
switch(x.a){case 0:break
case 6:q.b=new A.ya(new Int8Array(B.c9(J.cV2(D.H.gaq(u.ik()),0,r))))
break
case 1:q.b=new A.vX(new Uint8Array(B.c9(u.jN(r).ik())))
break
case 7:q.b=new A.Ko(new Uint8Array(B.c9(u.jN(r).ik())))
break
case 2:q.b=new A.Ex(r===0?"":u.jO(r-1))
break
case 3:q.b=A.d6L(u,r)
break
case 4:q.b=A.d6G(u,r)
break
case 5:q.b=A.d6H(u,r)
break
case 10:q.b=A.d6J(u,r)
break
case 8:q.b=A.d6K(u,r)
break
case 9:q.b=A.d6I(u,r)
break
case 11:q.b=A.d6N(u,r)
break
case 12:q.b=A.d6F(u,r)
break}d.d=v+4
return q}}
A.aQM.prototype={
gn(d){return this.b}}
A.auQ.prototype={}
A.vY.prototype={
b14(d){d.a.aN(0,new A.buM(this))},
gfz(d){var x=this.a
return new B.aF(x,B.t(x).i("aF<2>"))},
ga0(d){var x,w=this.a
if(w.a===0)return!0
for(w=new B.bt(w,w.r,w.e,B.t(w).i("bt<2>"));w.q();){x=w.d
if(!(x.a.a===0&&x.b.ga0(0)))return!1}return!0},
a4(d,e){return this.a.a4(0,e)},
h(d,e){var x=this.a
if(!x.a4(0,e))x.m(0,e,new A.rz(B.I(y.p,y.r),new A.vY(B.I(y.N,y.P))))
x=x.h(0,e)
x.toString
return x},
m(d,e,f){this.a.m(0,e,f)}}
A.rz.prototype={
gfz(d){var x=this.a
return new B.aF(x,B.t(x).i("aF<2>"))},
ga0(d){return this.a.a===0&&this.b.ga0(0)},
ae8(d){d.a.aN(0,new A.buN(this))
d.b.a.aN(0,new A.buO(this))},
a4(d,e){return this.a.a4(0,e)},
h(d,e){if(typeof e=="string")e=C.a2R.h(0,e)
if(B.hk(e))return this.a.h(0,e)
return null},
m(d,e,f){var x,w,v,u,t,s,r=this
if(typeof e=="string")e=C.a2R.h(0,e)
if(!B.hk(e))return
if(f==null)r.a.I(0,e)
else if(f instanceof A.l3)r.a.m(0,e,f)
else{x=$.cUV().h(0,e)
if(x!=null)switch(x.b.a){case 1:if(y.L.b(f))r.a.m(0,e,new A.vX(new Uint8Array(B.c9(new Uint8Array(B.c9(f))))))
else if(B.hk(f)){w=new Uint8Array(1)
w[0]=f
r.a.m(0,e,new A.vX(w))}break
case 2:if(typeof f=="string")r.a.m(0,e,new A.Ex(f))
break
case 3:if(y.L.b(f))r.a.m(0,e,new A.AA(new Uint16Array(B.c9(new Uint16Array(B.c9(f))))))
else if(B.hk(f))r.a.m(0,e,A.dxv(f))
break
case 4:if(y.L.b(f))r.a.m(0,e,new A.u2(new Uint32Array(B.c9(new Uint32Array(B.c9(f))))))
else if(B.hk(f))r.a.m(0,e,A.dxu(f))
break
case 5:if(y.k.b(f))r.a.m(0,e,new A.vZ(B.aO(f,!0,y.i)))
else if(y.L.b(f)&&J.bl(f)===2){w=J.a0(f)
r.a.m(0,e,new A.vZ(B.a([new A.pq(w.h(f,0),w.h(f,1))],y.j)))}else if(f instanceof A.pq)r.a.m(0,e,new A.vZ(B.a([new A.pq(f.a,f.b)],y.j)))
else if(y.f.b(f)){w=J.a0(f)
v=w.gA(f)
u=y.i
t=J.js(v,u)
for(s=0;s<v;++s)t[s]=new A.pq(J.v(w.h(f,s),0),J.v(w.h(f,s),1))
r.a.m(0,e,new A.vZ(B.aO(t,!0,u)))}break
case 6:if(y.L.b(f))r.a.m(0,e,new A.ya(new Int8Array(B.c9(new Int8Array(B.c9(f))))))
else if(B.hk(f)){w=new Int8Array(1)
w[0]=f
r.a.m(0,e,new A.ya(w))}break
case 7:if(y.L.b(f))r.a.m(0,e,new A.Ko(new Uint8Array(B.c9(new Uint8Array(B.c9(f))))))
break
case 8:if(y.L.b(f))r.a.m(0,e,new A.Az(new Int16Array(B.c9(new Int16Array(B.c9(f))))))
else if(B.hk(f)){w=new Int16Array(1)
w[0]=f
r.a.m(0,e,new A.Az(w))}break
case 9:if(y.L.b(f))r.a.m(0,e,new A.Ay(new Int32Array(B.c9(new Int32Array(B.c9(f))))))
else if(B.hk(f)){w=new Int32Array(1)
w[0]=f
r.a.m(0,e,new A.Ay(w))}break
case 10:if(y.k.b(f))r.a.m(0,e,new A.w_(B.aO(f,!0,y.i)))
else if(y.L.b(f)&&J.bl(f)===2){w=J.a0(f)
r.a.m(0,e,new A.w_(B.a([new A.pq(w.h(f,0),w.h(f,1))],y.j)))}else if(f instanceof A.pq)r.a.m(0,e,new A.w_(B.a([f],y.j)))
else if(y.f.b(f)){w=J.a0(f)
v=w.gA(f)
u=y.i
t=J.js(v,u)
for(s=0;s<v;++s)t[s]=new A.pq(J.v(w.h(f,s),0),J.v(w.h(f,s),1))
r.a.m(0,e,new A.w_(B.aO(t,!0,u)))}break
case 11:if(y.H.b(f))r.a.m(0,e,new A.Ez(new Float32Array(B.c9(new Float32Array(B.c9(f))))))
else if(typeof f=="number")r.a.m(0,e,A.d6M(f))
else if(B.hk(f))r.a.m(0,e,A.d6M(f))
break
case 12:if(y.H.b(f))r.a.m(0,e,new A.Ey(new Float64Array(B.c9(new Float64Array(B.c9(f))))))
else if(typeof f=="number")r.a.m(0,e,A.d6E(f))
else if(B.hk(f))r.a.m(0,e,A.d6E(f))
break
case 0:break}}},
giO(d){var x=this.a.h(0,274)
return x==null?null:x.L(0)},
siO(d,e){this.a.I(0,274)}}
A.oe.prototype={
J(){return"IfdValueType."+this.b}}
A.l3.prototype={
jP(d,e){return 0},
L(d){return this.jP(0,0)},
uS(d){return 0},
uR(){return new Uint8Array(0)},
j(d){return""},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.l3&&x.gfP(x)===e.gfP(e)&&x.gA(x)===e.gA(e)&&x.gv(x)===e.gv(e)},
gv(d){return 0},
wH(d){}}
A.vX.prototype={
ew(d){return new A.vX(new Uint8Array(B.c9(this.a)))},
gfP(d){return C.PK},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.vX){x=this.a
x=x.length===e.a.length&&B.aT(x)===B.aT(e.a)}else x=!1
return x},
gv(d){return B.aT(this.a)},
jP(d,e){return this.a[e]},
L(d){return this.jP(0,0)},
wH(d){var x=this.a
x.$flags&2&&B.L(x)
x[0]=d},
uR(){return this.a},
jv(d,e){e.mD(this.a)},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gn(d){return this.a}}
A.Ex.prototype={
ew(d){return new A.Ex(this.a)},
gfP(d){return C.bW},
gA(d){return this.a.length+1},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.Ex){x=this.a
x=x.length+1===e.a.length+1&&D.d.gv(x)===D.d.gv(e.a)}else x=!1
return x},
gv(d){return D.d.gv(this.a)},
uR(){return new Uint8Array(B.c9(new B.fk(this.a)))},
jv(d,e){e.mD(new B.fk(this.a))
e.bf(0)},
j(d){return this.a},
gn(d){return this.a}}
A.AA.prototype={
b19(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.av()
w.$flags&2&&B.L(w)
w[x]=v}},
ew(d){return new A.AA(new Uint16Array(B.c9(this.a)))},
gfP(d){return C.bD},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.AA){x=this.a
x=x.length===e.a.length&&B.aT(x)===B.aT(e.a)}else x=!1
return x},
gv(d){return B.aT(this.a)},
jP(d,e){return this.a[e]},
L(d){return this.jP(0,0)},
wH(d){var x=this.a
x.$flags&2&&B.L(x)
x[0]=d},
uR(){return J.jV(D.eS.gaq(this.a))},
jv(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.ly(this.a[x])},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gn(d){return this.a}}
A.u2.prototype={
b16(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.ag()
w.$flags&2&&B.L(w)
w[x]=v}},
ew(d){return new A.u2(new Uint32Array(B.c9(this.a)))},
gfP(d){return C.dI},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.u2){x=this.a
x=x.length===e.a.length&&B.aT(x)===B.aT(e.a)}else x=!1
return x},
gv(d){return B.aT(this.a)},
jP(d,e){return this.a[e]},
L(d){return this.jP(0,0)},
wH(d){var x=this.a
x.$flags&2&&B.L(x)
x[0]=d},
uR(){return J.jV(D.bM.gaq(this.a))},
jv(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.jw(this.a[x])},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gn(d){return this.a}}
A.vZ.prototype={
ew(d){return new A.vZ(B.aO(this.a,!0,y.i))},
gfP(d){return C.f6},
gA(d){return this.a.length},
jP(d,e){return this.a[e].L(0)},
L(d){return this.jP(0,0)},
uS(d){return this.a[0].uS(0)},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.vZ){x=this.a
x=x.length===e.a.length&&B.aT(x)===B.aT(e.a)}else x=!1
return x},
gv(d){return B.aT(this.a)},
jv(d,e){var x,w,v,u
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.K)(x),++v){u=x[v]
e.jw(u.a)
e.jw(u.b)}},
j(d){var x=this.a
return x.length===1?x[0].j(0):B.o(x)},
gn(d){return this.a}}
A.ya.prototype={
ew(d){return new A.ya(new Int8Array(B.c9(this.a)))},
gfP(d){return C.PO},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.ya){x=this.a
x=x.length===e.a.length&&B.aT(x)===B.aT(e.a)}else x=!1
return x},
gv(d){return B.aT(this.a)},
jP(d,e){return this.a[e]},
L(d){return this.jP(0,0)},
wH(d){var x=this.a
x.$flags&2&&B.L(x)
x[0]=d},
uR(){return J.jV(D.lr.gaq(this.a))},
jv(d,e){e.mD(J.dx(D.lr.gaq(this.a),0,null))},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gn(d){return this.a}}
A.Az.prototype={
b18(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.av()
u=$.oQ()
u.$flags&2&&B.L(u)
u[0]=v
v=$.pT()[0]
w.$flags&2&&B.L(w)
w[x]=v}},
ew(d){return new A.Az(new Int16Array(B.c9(this.a)))},
gfP(d){return C.PP},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.Az){x=this.a
x=x.length===e.a.length&&B.aT(x)===B.aT(e.a)}else x=!1
return x},
gv(d){return B.aT(this.a)},
jP(d,e){return this.a[e]},
L(d){return this.jP(0,0)},
wH(d){var x=this.a
x.$flags&2&&B.L(x)
x[0]=d},
uR(){return J.jV(D.lq.gaq(this.a))},
jv(d,e){var x,w=new Int16Array(1),v=J.cV3(D.lq.gaq(w),0,null),u=this.a.length
for(x=0;x<u;++x){w[0]=this.a[x]
e.ly(v[0])}},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gn(d){return this.a}}
A.Ay.prototype={
b17(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.ag()
u=$.iy()
u.$flags&2&&B.L(u)
u[0]=v
v=$.lX()[0]
w.$flags&2&&B.L(w)
w[x]=v}},
ew(d){return new A.Ay(new Int32Array(B.c9(this.a)))},
gfP(d){return C.PQ},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.Ay){x=this.a
x=x.length===e.a.length&&B.aT(x)===B.aT(e.a)}else x=!1
return x},
gv(d){return B.aT(this.a)},
jP(d,e){return this.a[e]},
L(d){return this.jP(0,0)},
wH(d){var x=this.a
x.$flags&2&&B.L(x)
x[0]=d},
uR(){return J.jV(D.d9.gaq(this.a))},
jv(d,e){var x,w,v,u=this.a.length
for(x=0;x<u;++x){w=this.a[x]
v=$.b2S()
v.$flags&2&&B.L(v)
v[0]=w
e.jw($.cUI()[0])}},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gn(d){return this.a}}
A.w_.prototype={
ew(d){return new A.w_(B.aO(this.a,!0,y.i))},
gfP(d){return C.PL},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.w_){x=this.a
x=x.length===e.a.length&&B.aT(x)===B.aT(e.a)}else x=!1
return x},
gv(d){return B.aT(this.a)},
jP(d,e){return this.a[e].L(0)},
L(d){return this.jP(0,0)},
uS(d){return this.a[0].uS(0)},
jv(d,e){var x,w,v,u,t,s
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.K)(x),++v){u=x[v]
t=$.b2S()
t.$flags&2&&B.L(t)
t[0]=u.a
s=$.cUI()
e.jw(s[0])
t[0]=u.b
e.jw(s[0])}},
j(d){var x=this.a
return x.length===1?x[0].j(0):B.o(x)},
gn(d){return this.a}}
A.Ez.prototype={
b1a(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.ag()
u=$.iy()
u.$flags&2&&B.L(u)
u[0]=v
v=$.Ic()[0]
w.$flags&2&&B.L(w)
w[x]=v}},
ew(d){return new A.Ez(new Float32Array(B.c9(this.a)))},
gfP(d){return C.PM},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.Ez){x=this.a
x=x.length===e.a.length&&B.aT(x)===B.aT(e.a)}else x=!1
return x},
gv(d){return B.aT(this.a)},
uR(){return J.jV(D.fW.gaq(this.a))},
uS(d){return this.a[0]},
jv(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.c_O(this.a[x])},
j(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gn(d){return this.a}}
A.Ey.prototype={
b15(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.a3w()
w.$flags&2&&B.L(w)
w[x]=v}},
ew(d){return new A.Ey(new Float64Array(B.c9(this.a)))},
gfP(d){return C.PN},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.Ey){x=this.a
x=x.length===e.a.length&&B.aT(x)===B.aT(e.a)}else x=!1
return x},
gv(d){return B.aT(this.a)},
uS(d){return this.a[0]},
uR(){return J.jV(D.fg.gaq(this.a))},
jv(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.c_P(this.a[x])},
j(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gn(d){return this.a}}
A.Ko.prototype={
ew(d){return new A.Ko(new Uint8Array(B.c9(this.a)))},
gfP(d){return C.jo},
gA(d){return this.a.length},
uR(){return this.a},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.Ko){x=this.a
x=x.length===e.a.length&&B.aT(x)===B.aT(e.a)}else x=!1
return x},
gv(d){return B.aT(this.a)},
jv(d,e){e.mD(this.a)},
j(d){return"<data>"},
gn(d){return this.a}}
A.ng.prototype={
J(){return"BmpCompression."+this.b}}
A.b8u.prototype={}
A.Iu.prototype={
anV(d,e){var x,w,v,u,t,s,r,q=this,p=q.d,o=p<=40
if(o){x=q.r
x=x===C.C2||x===C.C3}else x=!0
if(x){x=q.as=d.ag()
w=A.cSd(x)
q.CW=w
v=D.c.ht(x,w)
x=v>0
q.cx=x?255/v:0
w=q.at=d.ag()
u=A.cSd(w)
q.cy=u
t=D.c.ht(w,u)
q.db=x?255/t:0
w=q.ax=d.ag()
u=A.cSd(w)
q.dx=u
s=D.c.ht(w,u)
q.dy=x?255/s:0
if(!o||q.r===C.C3){o=q.ay=d.ag()
x=A.cSd(o)
q.fr=x
r=D.c.ht(o,x)
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
if(q.f<=8)q.bXq(d)},
gR7(){var x=this.d
if(x!==40)if(x===124){x=this.ay
x===$&&B.b()
x=x===0}else x=!1
else x=!0
return x},
ge4(d){return Math.abs(this.c)},
bXq(d){var x,w,v,u,t,s=this,r=s.z
if(r===0)r=D.c.eB(1,s.f)
s.ch=new A.wi(new Uint8Array(r*3),r,3)
for(x=0;x<r;++x){w=J.v(d.a,d.d++)
v=J.v(d.a,d.d++)
u=J.v(d.a,d.d++)
t=J.v(d.a,d.d++)
s.ch.Uo(x,u,v,w,t)}},
bK5(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(o.ch!=null){x=o.f
if(x===1){w=d.cD()
for(v=7;v>=0;--v)e.$4(D.c.oH(w,v)&1,0,0,0)
return}else if(x===2){w=d.cD()
for(v=6;v>=0;v-=2)e.$4(D.c.oH(w,v)&2,0,0,0)}else if(x===4){w=d.cD()
e.$4(D.c.Z(w,4)&15,0,0,0)
e.$4(w&15,0,0,0)
return}else if(x===8){e.$4(d.cD(),0,0,0)
return}}x=o.r
if(x===C.C2&&o.f===32){u=d.ag()
x=o.as
x===$&&B.b()
t=o.CW
t===$&&B.b()
t=D.c.ht((u&x)>>>0,t)
x=o.cx
x===$&&B.b()
s=D.e.L(t*x)
x=o.at
x===$&&B.b()
t=o.cy
t===$&&B.b()
t=D.c.ht((u&x)>>>0,t)
x=o.db
x===$&&B.b()
r=D.e.L(t*x)
x=o.ax
x===$&&B.b()
t=o.dx
t===$&&B.b()
t=D.c.ht((u&x)>>>0,t)
x=o.dy
x===$&&B.b()
q=D.e.L(t*x)
if(o.gR7())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.ht((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.e.L(t*x)}return e.$4(s,r,q,p)}else{t=o.f
if(t===32&&x===C.L1){q=d.cD()
r=d.cD()
s=d.cD()
p=d.cD()
return e.$4(s,r,q,o.gR7()?255:p)}else if(t===24){q=d.cD()
r=d.cD()
return e.$4(d.cD(),r,q,255)}else if(t===16){u=d.av()
x=o.as
x===$&&B.b()
t=o.CW
t===$&&B.b()
t=D.c.ht((u&x)>>>0,t)
x=o.cx
x===$&&B.b()
s=D.e.L(t*x)
x=o.at
x===$&&B.b()
t=o.cy
t===$&&B.b()
t=D.c.ht((u&x)>>>0,t)
x=o.db
x===$&&B.b()
r=D.e.L(t*x)
x=o.ax
x===$&&B.b()
t=o.dx
t===$&&B.b()
t=D.c.ht((u&x)>>>0,t)
x=o.dy
x===$&&B.b()
q=D.e.L(t*x)
if(o.gR7())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.ht((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.e.L(t*x)}return e.$4(s,r,q,p)}else throw B.p(A.co("Unsupported bitsPerPixel ("+t+") or compression ("+x.j(0)+")."))}}}
A.aps.prototype={
pw(d){var x,w=null
if(!A.cVz(A.dg(d,!1,w,0)))return w
x=A.dg(d,!1,w,0)
this.a=x
return this.b=A.dpe(x,w)},
kE(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b
if(e==null)return new A.EC(f,f,f,f,0,C.bG,0,0)
x=g.a
x===$&&B.b()
w=e.a.b
w===$&&B.b()
x.d=w
v=e.f
w=e.b
u=D.c.aL(w*v+31,32)*4
x=g.c
if(x)t=4
else if(v===1||v===4||v===8)t=1
else{s=v===32?4:3
t=s}if(x)r=C.aj
else if(v===1)r=C.hF
else{if(v===2)s=C.iu
else if(v===4)s=C.iv
else s=C.aj
r=s}q=x?f:e.ch
p=A.iS(f,f,r,0,C.bG,e.ge4(e),f,0,t,q,C.aj,w,!1)
for(o=p.ge4(0)-1,x=e.c,w=1/x<0,s=x<0,x=x===0;o>=0;--o){n={}
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
if(h==null)h=new A.h0()
for(;n.a<i;)e.bK5(k,new A.b8t(n,g,i,e,h))}return p},
nt(d,e,f){if(this.pw(e)==null)return null
return this.kE(0)}}
A.biS.prototype={}
A.bhA.prototype={}
A.bhB.prototype={}
A.blG.prototype={}
A.auS.prototype={}
A.ay5.prototype={
S_(){return this.w},
tD(d,e,f,g,h){throw B.p(A.co("B44 compression not yet supported."))},
L6(d,e,f){return this.tD(d,e,f,null,null)},
j(d){return B.o(this.r)+" "+this.x}}
A.RZ.prototype={
J(){return"ExrChannelType."+this.b}}
A.JB.prototype={
J(){return"ExrChannelName."+this.b}}
A.auT.prototype={
b0V(d){var x=this,w=d.SE()
x.a=w
if(w.length===0)return
x.c=C.aJj[d.ag()]
d.cD()
d.d+=3
x.f=d.ag()
x.r=d.ag()
w=x.a
if(w==="R"){x.w=!0
x.b=C.axS}else if(w==="G"){x.w=!0
x.b=C.axT}else if(w==="B"){x.w=!0
x.b=C.axU}else if(w==="A"){x.w=!0
x.b=C.axV}else{x.w=!1
x.b=C.axW}switch(x.c.a){case 0:x.d=4
break
case 1:x.d=2
break
case 2:x.d=4
break}}}
A.vL.prototype={
J(){return"ExrCompressorType."+this.b}}
A.bng.prototype={
tD(d,e,f,g,h){throw B.p(A.co("Unsupported compression type"))},
L6(d,e,f){return this.tD(d,e,f,null,null)}}
A.bwr.prototype={}
A.auU.prototype={}
A.bni.prototype={
b0W(d){var x,w,v,u,t=this,s=A.dg(d,!1,null,0)
if(s.ag()!==20000630)throw B.p(A.co("File is not an OpenEXR image file."))
x=t.d=s.cD()
if(x!==2)throw B.p(A.co("Cannot read version "+x+" image files."))
x=t.e=s.ts()
if((x&4294967289)>>>0!==0)throw B.p(A.co("The file format version number's flag field contains unrecognized flags."))
if((x&16)===0){w=t.c
v=A.d79(w.length,(x&2)!==0,s)
if(v.w>0)w.push(v)}else for(x=t.c;!0;){v=A.d79(x.length,(t.e&2)!==0,s)
if(v.w<=0)break
x.push(v)}x=t.c
w=x.length
if(w===0)throw B.p(A.co("Error reading image header"))
for(u=0;u<x.length;x.length===w||(0,B.K)(x),++u)x[u].bXp(s)
t.bub(s)},
bub(d){var x,w,v,u,t=this
for(x=t.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.K)(x),++v){u=x[v]
t.a=Math.max(t.a,u.w)
t.b=Math.max(t.b,u.x)
if(u.db)t.bul(u,d)
else t.buj(u,d)}},
bul(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.e
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
h=w.tD(i,k*f,g,f,h)
f=h.length
f=Math.min(f,f)
e=new A.nq(h,0,f,0,!1)
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
a8=$.iR
a9=(a8!=null?a8:A.jH())[h]
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
if(b0==null)b0=new A.h0()
h=a5.b
h===$&&B.b()
b0.m(0,h.a,a9)}else{h=a5.a
h===$&&B.b()
a8=b3.b
b1=a8!=null?a8.h(0,h):b2
if(b1!=null)b1.fG(a6,g,a9,0,0)}}}++a3;++g}}++o;++q}++r}},
buj(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=this.e
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
m=$.iy()
m.$flags&2&&B.L(m)
m[0]=n
n=$.lX()
m[0]=t.ag()
l=t.jS(n[0])
t.d=t.d+(l.c-l.d)
if(q){n=w.L6(l,0,p)
m=n.length
k=new A.nq(n,0,Math.min(m,m),0,!1)}else k=l
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
m=$.iR
a1=(m!=null?m:A.jH())[n]
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
if(a2==null)a2=new A.h0()
n=e.b
n===$&&B.b()
a2.m(0,n.a,a1)}else{n=e.a
n===$&&B.b()
m=a5.b
a3=m!=null?m.h(0,n):a4
if(a3!=null)a3.fG(a0,p,a1,0,0)}}}++h;++p}}}}
A.a34.prototype={
b0X(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=B.I(y.N,y.I)
for(x=a2.e,w=y.t,v=a2.c,u=C.jk;!0;){t=a7.SE()
if(t.length===0)break
s=a7.SE()
r=a7.ag()
q=a7.jS(r)
a7.d=a7.d+(q.c-q.d)
x.m(0,t,new A.auS(t,s,r))
switch(t){case"channels":for(;!0;){p=new A.auT()
p.b0V(q)
o=p.a
o===$&&B.b()
if(o.length===0)break
n=p.w
n===$&&B.b()
if(n){++a2.d
o=p.c
o===$&&B.b()
if(o===C.E9)u=C.jk
else u=o===C.Ea?C.kV:C.kW}else{n=p.c
n===$&&B.b()
if(n===C.E9){n=a2.w
m=a2.x
a4.m(0,o,new A.Sz(new Uint16Array(n*m),n,m,1))}else if(n===C.Ea){n=a2.w
m=a2.x
a4.m(0,o,new A.SA(new Float32Array(n*m),n,m,1))}else if(n===C.Op){n=a2.w
m=a2.x
a4.m(0,o,new A.SE(new Uint32Array(n*m),n,m,1))}}v.push(p)}break
case"chromaticities":o=new Float32Array(8)
a2.at=o
n=q.ag()
m=$.iy()
m.$flags&2&&B.L(m)
m[0]=n
n=$.Ic()
o[0]=n[0]
o=a2.at
m[0]=q.ag()
l=n[0]
o.$flags&2&&B.L(o)
o[1]=l
l=a2.at
m[0]=q.ag()
o=n[0]
l.$flags&2&&B.L(l)
l[2]=o
o=a2.at
m[0]=q.ag()
l=n[0]
o.$flags&2&&B.L(o)
o[3]=l
l=a2.at
m[0]=q.ag()
o=n[0]
l.$flags&2&&B.L(l)
l[4]=o
o=a2.at
m[0]=q.ag()
l=n[0]
o.$flags&2&&B.L(o)
o[5]=l
l=a2.at
m[0]=q.ag()
o=n[0]
l.$flags&2&&B.L(l)
l[6]=o
o=a2.at
m[0]=q.ag()
n=n[0]
o.$flags&2&&B.L(o)
o[7]=n
break
case"compression":a2.ax=C.aLN[J.v(q.a,q.d++)]
break
case"dataWindow":o=q.ag()
n=$.iy()
n.$flags&2&&B.L(n)
n[0]=o
o=$.lX()
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
n=$.iy()
n.$flags&2&&B.L(n)
n[0]=o
$.lX()
n[0]=q.ag()
n[0]=q.ag()
n[0]=q.ag()
break
case"lineOrder":break
case"pixelAspectRatio":o=q.ag()
n=$.iy()
n.$flags&2&&B.L(n)
n[0]=o
$.Ic()
break
case"screenWindowCenter":o=q.ag()
n=$.iy()
n.$flags&2&&B.L(n)
n[0]=o
$.Ic()
n[0]=q.ag()
break
case"screenWindowWidth":o=q.ag()
n=$.iy()
n.$flags&2&&B.L(n)
n[0]=o
$.Ic()
break
case"tiles":a2.dx=q.ag()
a2.dy=q.ag()
j=J.v(q.a,q.d++)
a2.fr=j&15
a2.fx=D.c.Z(j,4)&15
break
case"type":i=q.SE()
if(i!=="deepscanline")if(i!=="deeptile")throw B.p(A.co("EXR Invalid type: "+i))
break
default:break}}x=a2.w
a2.b=A.iS(a3,a3,u,0,C.bG,a2.x,a3,0,a2.d,a3,C.aj,x,!1)
for(x=new B.ca(a4,a4.r,a4.e,a4.$ti.i("ca<1>"));x.q();){w=x.d
o=a2.b
o.toString
n=a4.h(0,w)
n.toString
o.aSU(w,n)}if(a2.db){x={}
w=a2.r
w===$&&B.b()
a2.id=a2.b5a(w[0],w[2],w[1],w[3])
w=a2.r
a2.k1=a2.b5b(w[0],w[2],w[1],w[3])
if(a2.fr!==2)a2.k1=1
w=a2.id
w.toString
v=a2.r
a2.fy=a2.apy(w,v[0],v[2],a2.dx,a2.fx)
v=a2.k1
v.toString
w=a2.r
a2.go=a2.apy(v,w[1],w[3],a2.dy,a2.fx)
w=a2.b58()
a2.k2=w
v=a2.dx
v.toString
v=w*v
a2.k3=v
a2.CW=A.d5y(a2.ax,a2,v,a2.dy)
x.a=x.b=0
v=a2.id
v.toString
w=a2.k1
w.toString
a2.ay=B.ql(v*w,new A.bnj(x,a2),!0,y.bk)}else{x=a2.x
w=a2.ch=new Uint32Array(x+1)
for(o=v.length,n=a2.r,m=a2.w,h=0;h<o;++h){g=v[h]
l=g.d
l===$&&B.b()
k=g.f
k===$&&B.b()
f=D.c.hS(l*m,k)
for(l=g.r,e=0;e<x;++e){n===$&&B.b()
k=n[1]
l===$&&B.b()
if(D.c.au(e+k,l)===0)w[e]=w[e]+f}}for(d=0,e=0;e<x;++e)d=Math.max(d,w[e])
x=A.d5y(a2.ax,a2,d,a3)
a2.CW=x
x=a2.cx=x.S_()
w=a2.ch
v=w.length
o=new Uint32Array(v)
a2.cy=o
for(--v,a0=0,a1=0;a1<=v;++a1){if(D.c.au(a1,x)===0)a0=0
o[a1]=a0
a0+=w[a1]}x=D.c.hS(a2.x+x,x)
a2.ay=B.a([new Uint32Array(x-1)],y.w)}},
b5a(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.Wl(w):u.Vz(w))+1
break
case 2:v=e-d+1
x=(u.fx===0?u.Wl(v):u.Vz(v))+1
break
default:throw B.p(A.co("Unknown LevelMode format."))}return x},
b5b(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.Wl(w):u.Vz(w))+1
break
case 2:v=g-f+1
x=(u.fx===0?u.Wl(v):u.Vz(v))+1
break
default:throw B.p(A.co("Unknown LevelMode format."))}return x},
Wl(d){var x
for(x=0;d>1;){++x
d=D.c.Z(d,1)}return x},
Vz(d){var x,w
for(x=0,w=0;d>1;){if((d&1)!==0)w=1;++x
d=D.c.Z(d,1)}return x+w},
b58(){var x,w,v,u,t
for(x=this.c,w=x.length,v=0,u=0;u<w;++u){t=x[u].d
t===$&&B.b()
v+=t}return v},
apy(d,e,f,g,h){var x,w,v,u,t,s,r=J.jJ(d,y.p)
for(x=h===1,w=f-e+1,v=0;v<d;++v){u=D.c.eB(1,v)
t=D.c.hS(w,u)
if(x&&t*u<w)++t
s=Math.max(t,1)
g.toString
r[v]=D.c.hS(s+g-1,g)}return r}}
A.ay6.prototype={
bXp(d){var x,w,v,u,t,s=this
if(s.db)for(x=0;x<s.ay.length;++x)for(w=0;v=s.ay[x],w<v.length;++w){u=d.aiy()
v.$flags&2&&B.L(v)
v[w]=u}else{t=s.ay[0].length
for(x=0;x<t;++x){v=s.ay[0]
u=d.aiy()
v.$flags&2&&B.L(v)
v[x]=u}}}}
A.bws.prototype={
b1i(d,e,f){var x,w,v,u=this,t=d.c.length,s=J.jJ(t,y.bc)
for(x=0;x<t;++x)s[x]=new A.aU6()
u.y=s
w=u.w
w.toString
v=D.c.aL(w*u.x,2)
u.z=new Uint16Array(v)},
S_(){return this.x},
tD(a4,a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
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
n=D.c.hS(a5,v)
m=D.c.hS(x,v)
v=n*v<a5?0:1
v=m-n+v
o.c=v
u=p.r
u===$&&B.b()
n=D.c.hS(a6,u)
m=D.c.hS(w,u)
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
a0=a3.bvP(i,d)
A.dvn(a4,a4.ag(),a3.z,r)
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
A.dvq(u,l+f,a1,v,a2,a1*v,a0);++f}}v=a3.z
v.toString
a3.b3h(d,v,r)
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
v.ly(u[l])}}v=a3.r
return J.dx(D.H.gaq(v.c),0,v.a)},
L6(d,e,f){return this.tD(d,e,f,null,null)},
b3h(d,e,f){var x,w,v
for(x=e.$flags|0,w=0;w<f;++w){v=d[e[w]]
x&2&&B.L(e)
e[w]=v}},
bvP(d,e){var x,w,v,u,t
for(x=e.$flags|0,w=0,v=0;v<65536;++v)if(v===0||(d[v>>>3]&1<<(v&7))>>>0!==0){u=w+1
x&2&&B.L(e)
e[w]=v
w=u}for(u=w;u<65536;u=t){t=u+1
x&2&&B.L(e)
e[u]=0}return w-1}}
A.aU6.prototype={}
A.bwt.prototype={
S_(){return this.x},
tD(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=C.kH.DJ(a0.ik()),d=f.y
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
m=D.c.hS(a1,s)
l=D.c.hS(u,s)
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
for(g=0;g<4;++g)f.y.bf(v[g])}break
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
for(g=0;g<2;++g)f.y.bf(v[g])}break
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
for(g=0;g<4;++g)f.y.bf(v[g])}break}}d=f.y
return J.dx(D.H.gaq(d.c),0,d.a)},
L6(d,e,f){return this.tD(d,e,f,null,null)}}
A.bwu.prototype={
S_(){return 1},
tD(d,e,f,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.c,g=A.rT(!1,(h-d.d)*2)
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
u=$.oR()
u.$flags&2&&B.L(u)
u[0]=v
t=$.pU()[0]
if(t<0){s=-t
for(;r=s-1,s>0;s=r)g.bf(J.v(d.a,d.d++))}else for(s=t;r=s-1,s>=0;s=r)g.bf(J.v(d.a,d.d++))}q=J.dx(D.H.gaq(g.c),0,g.a)
p=q.length
for(h=q.$flags|0,o=1;o<p;++o){v=q[o-1]
u=q[o]
h&2&&B.L(q)
q[o]=v+u-128}h=i.r
if(h==null||h.length!==p)h=i.r=new Uint8Array(p)
v=D.c.aL(p+1,2)
for(n=0,m=0;!0;v=j,n=k){if(m<p){l=m+1
k=n+1
u=q[n]
h.$flags&2&&B.L(h)
h[m]=u}else break
if(l<p){m=l+1
j=v+1
h[l]=q[v]}else break}return h},
L6(d,e,f){return this.tD(d,e,f,null,null)},
j(d){return B.o(this.w)}}
A.ay7.prototype={
S_(){return this.x},
tD(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=C.kH.DJ(d.ik())
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
v&2&&B.L(k)
k[s]=u+r-128}v=l.y
if(v==null||v.length!==t)v=l.y=new Uint8Array(t)
u=D.c.aL(t+1,2)
for(q=0,p=0;!0;u=m,q=n){if(p<t){o=p+1
n=q+1
r=k[q]
v.$flags&2&&B.L(v)
v[p]=r}else break
if(o<t){p=o+1
m=u+1
v[o]=k[u]}else break}return v},
L6(d,e,f){return this.tD(d,e,f,null,null)},
j(d){return B.o(this.w)}}
A.bnh.prototype={
kE(d){var x=this.a
if(x==null)return null
return x.c[d].b},
nt(d,e,f){var x=new A.bni(B.a([],y.m))
x.b0W(e)
this.a=x
return this.kE(0)}}
A.a3I.prototype={
bN6(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.b,w=this.d,v=-1,u=-1,t=0;t<x;++t){s=w.nR(t)
r=w.nP(t)
q=w.nN(t)
p=w.pq(t)
if(s===d&&r===e&&q===f&&p===g)return t
o=d-s
n=e-r
m=f-q
l=g-p
k=o*o+n*n+m*m+l*l
if(u===-1){u=t
v=k}else if(k<v){u=t
v=k}}return u},
akG(){var x,w,v,u,t,s,r,q=this
if(q.c==null)return q.d
x=q.d
w=x.a
v=new A.wi(new Uint8Array(w*4),w,4)
for(u=0;u<w;++u){t=x.nR(u)
s=x.nP(u)
r=x.nN(u)
v.Uo(u,t,s,r,u===q.c?0:255)}return v}}
A.a3J.prototype={
b1_(d){var x,w,v,u,t,s,r=this
r.a=d.av()
r.b=d.av()
r.c=d.av()
r.d=d.av()
x=d.cD()
r.e=(x&64)!==0
if((x&128)!==0){r.f=A.d6b(D.c.eB(1,(x&7)+1))
for(w=0;v=r.f,w<v.b;++w){u=J.v(d.a,d.d++)
t=J.v(d.a,d.d++)
s=J.v(d.a,d.d++)
v.d.qb(w,u,t,s)}}r.x=d.d-d.b}}
A.ay8.prototype={}
A.aws.prototype={}
A.brV.prototype={
pw(d){var x,w,v,u,t,s,r,q,p,o,n=this
n.f=A.dg(d,!1,null,0)
n.a=new A.aws(B.a([],y.b))
if(!n.asX())return null
try{for(;u=n.f,t=u.d,t<u.c;){s=u.a
u.d=t+1
x=J.v(s,t)
switch(x){case 44:w=n.azM()
if(w==null){u=n.a
return u}u=w
u.r=n.e
u.w=n.c
if(n.b!==0){if(w.f==null&&n.a.e!=null){u=n.a.e
t=u.a
s=u.b
r=u.c
u=u.d
w.f=new A.a3I(t,s,r,new A.wi(new Uint8Array(B.c9(u.c)),u.a,u.b))}if(w.f!=null)w.f.c=n.d}n.a.r.push(w)
break
case 33:u=n.f
v=J.v(u.a,u.d++)
if(J.q(v,255)){u=n.f
if(u.jO(J.v(u.a,u.d++))==="NETSCAPE2.0"){q=J.v(u.a,u.d++)
p=J.v(u.a,u.d++)
if(q===3&&p===1)n.r=u.av()}else n.YR()}else if(J.q(v,249)){u=n.f
u.toString
n.bu7(u)}else n.YR()
break
case 59:u=n.a
return u
default:break}}}catch(o){}return n.a},
bu7(d){var x,w,v,u=this
d.cD()
x=d.cD()
u.e=d.av()
u.d=d.cD()
d.cD()
u.c=D.c.Z(x,2)&7
u.b=x&1
w=d.UT(1,0)
if(J.v(w.a,w.d)===44){++d.d
v=u.azM()
if(v==null)return
v.r=u.e
v.w=u.c
if(u.b!==0){w=v.f
if(w==null&&u.a.e!=null){w=u.a.e
w.toString
w=v.f=A.dwO(w)}if(w!=null)w.c=u.d}u.a.r.push(v)}},
kE(d){var x,w,v,u=this,t=u.f
if(t==null||u.a==null)return null
x=u.a.r
w=x.length
if(d>=w)return null
v=x[d]
x=v.x
x===$&&B.b()
t.d=x
return u.b7Y(v)},
nt(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null
if(a5.pw(a8)==null)return a6
x=a5.a.r.length
if(x===1)return a5.kE(0)
for(x=y.p,w=a6,v=w,u=0;t=a5.a.r,u<t.length;++u){a9=t[u]
s=a5.kE(u)
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
if(t){v.o6(s)
w=s
continue}l=a9.f
if(!(l!=null)){t=a5.a.e
t.toString
l=t}t=o?a6:p.a
if(t==null)t=0
r=o?a6:p.b
if(r==null)r=0
k=A.iS(a6,a6,C.aj,0,C.bG,r,a6,0,1,l.akG(),C.aj,t,!1)
t=a9.w
if(t===2){t=a5.a.c.a
t=!D.H.ga0(t)?t[0]:0
r=l.d
j=r.nR(t)
i=r.nP(t)
h=r.nN(t)
g=t===l.c?0:255
t=new Uint8Array(4)
t[0]=j
t[1]=i
t[2]=h
t[3]=g
r=k.a
if(r!=null)r.od(0,new A.zZ(t))}else if(t!==3)if(a9.f!=null){t=w.a
t=t==null?a6:t.gf7()
t.toString
f=B.I(x,x)
for(r=l.b,e=0;e<r;++e)f.m(0,e,l.bN6(t.nR(e),t.nP(e),t.nN(e),t.pq(e)))
t=k.a
d=t==null?a6:J.jV(t.gaq(t))
if(d==null){t=k.a
t=t==null?a6:t.gaq(t)
if(t==null)t=D.H.gaq(new Uint8Array(0))
d=J.jV(t)}t=w.a
a0=t==null?a6:J.jV(t.gaq(t))
if(a0==null){t=w.a
t=t==null?a6:t.gaq(t)
if(t==null)t=D.H.gaq(new Uint8Array(0))
a0=J.jV(t)}for(a1=d.length,t=d.$flags|0,a2=0;a2<a1;++a2){a3=f.h(0,a0[a2])
if(a3!==-1){a3.toString
t&2&&B.L(d)
d[a2]=a3}}}k.y=s.y
for(t=s.a,t=t.gaa(t);t.q();){a4=t.gM(t)
if(a4.gaU(a4)!==0){r=a4.gnM(a4)
q=a9.a
q===$&&B.b()
p=a4.goC(a4)
o=a9.b
o===$&&B.b()
k.BN(r+q,p+o,a4)}}v.o6(k)
w=k}return v},
azM(){var x,w=this.f
if(w.d>=w.c)return null
x=new A.ay8()
x.b1_(w);++this.f.d
this.YR()
return x},
b7Y(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.w==null){n.w=new Uint8Array(256)
n.x=new Uint8Array(4095)
n.y=new Uint8Array(4096)
n.z=new Uint32Array(4096)}x=n.Q=n.f.cD()
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
x.$flags&2&&B.L(x)
x[0]=0
x=n.z
x.toString
D.bM.mw(x,0,4096,4098)
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
s=A.iS(m,m,C.aj,0,C.bG,w,m,0,1,t.akG(),C.aj,x,!1)
r=new Uint8Array(x)
x=d.e
x===$&&B.b()
if(x){x=d.b
x===$&&B.b()
for(w=x+w,q=0,p=0;q<4;++q)for(o=x+C.aDB[q];o<w;o+=C.aHl[q],++p){if(!n.asZ(r))return s
n.aBL(s,o,t,r)}}else for(o=0;o<w;++o){if(!n.asZ(r))return s
n.aBL(s,o,t,r)}return s},
aBL(d,e,f,g){var x,w,v,u=g.length
for(x=0;x<u;++x){w=g[x]
v=d.a
if(v!=null)v.fG(x,e,w,0,0)}},
asX(){var x,w,v,u,t,s=this,r=s.f.jO(6)
if(r!=="GIF87a"&&r!=="GIF89a")return!1
x=s.a
x.toString
x.a=s.f.av()
x=s.a
x.toString
x.b=s.f.av()
w=s.f.cD()
x=s.a
x.toString
x.c=new A.zZ(new Uint8Array(B.c9(B.a([s.f.cD()],y.t))));++s.f.d
if((w&128)!==0){x=s.a
x.toString
x.e=A.d6b(D.c.eB(1,(w&7)+1))
for(v=0;v<s.a.e.b;++v){x=s.f
u=J.v(x.a,x.d++)
x=s.f
t=J.v(x.a,x.d++)
x=s.f
w=J.v(x.a,x.d++)
s.a.e.d.qb(v,u,t,w)}}s.a.toString
return!0},
asZ(d){var x=this,w=x.as
w.toString
x.as=w-d.length
if(!x.b8b(d))return!1
if(x.as===0)x.YR()
return!0},
YR(){var x,w,v,u=this.f
if(u.d>=u.c)return!0
x=u.cD()
while(!0){if(x!==0){u=this.f
u=u.d<u.c}else u=!1
if(!u)break
u=this.f
w=u.d+=x
if(w>=u.c)return!0
v=u.a
u.d=w+1
x=J.v(v,w)}return!0},
b8b(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.ay
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
v&2&&B.L(d)
d[w]=t
w=u}}for(k=d.$flags|0;w<x;){s=l.ch=l.b8a()
if(s==null)return!1
v=l.dx
if(s===v)return!1
t=l.dy
if(s===t){for(t=l.z,r=0;r<=4095;++r){t.toString
t.$flags&2&&B.L(t)
t[r]=4098}l.db=v+1
v=l.Q+1
l.cy=v
l.cx=D.c.f9(1,v)
l.CW=4098}else{if(s<t){u=w+1
k&2&&B.L(d)
d[w]=s
w=u}else{v=l.z
if(v[s]===4098){q=l.db-2
if(s===q){s=l.CW
p=l.y
p===$&&B.b()
o=l.x
o===$&&B.b()
n=l.ay++
t=l.a8t(v,s,t)
o.$flags&2&&B.L(o)
o[n]=t
p.$flags&2&&B.L(p)
p[q]=t}else return!1}r=0
while(!0){m=r+1
if(!(r<=4095&&s>l.dy&&s<=4095))break
v=l.x
v===$&&B.b()
t=l.ay++
q=l.y
q===$&&B.b()
q=q[s]
v.$flags&2&&B.L(v)
v[t]=q
s=l.z[s]
r=m}if(m>=4095||s>4095)return!1
v=l.x
v===$&&B.b()
t=l.ay
q=l.ay=t+1
v.$flags&2&&B.L(v)
v[t]=s
t=q
while(!0){if(!(t!==0&&w<x))break
u=w+1
t=l.ay=t-1
q=v[t]
k&2&&B.L(d)
d[w]=q
w=u}}v=l.CW
if(v!==4098&&l.z[l.db-2]===4098){t=l.z
t.toString
q=l.db-2
t.$flags&2&&B.L(t)
t[q]=v
p=l.ch
o=l.y
n=l.dy
if(p===q){o===$&&B.b()
v=l.a8t(t,v,n)
o.$flags&2&&B.L(o)
o[q]=v}else{o===$&&B.b()
p.toString
v=l.a8t(t,p,n)
o.$flags&2&&B.L(o)
o[q]=v}}v=l.ch
v.toString
l.CW=v}}return!0},
b8a(){var x,w,v,u,t=this
if(t.cy>12)return null
for(;x=t.ax,w=t.cy,x<w;){x=t.b3L()
x.toString
w=t.at
v=t.ax
t.at=(w|D.c.f9(x,v))>>>0
t.ax=v+8}v=t.at
u=C.aI0[w]
t.at=D.c.ht(v,w)
t.ax=x-w
x=t.db
if(x<4097){++x
t.db=x
x=x>t.cx&&w<12}else x=!1
if(x){t.cx=t.cx<<1>>>0
t.cy=w+1}return v&u},
a8t(d,e,f){var x,w,v=0
while(!0){if(e>f){x=v+1
w=v<=4095
v=x}else w=!1
if(!w)break
if(e>4095)return 4098
e=d[e]}return e},
b3L(){var x,w,v=this,u=v.w,t=u[0],s=u.$flags|0
if(t===0){t=v.f.cD()
s&2&&B.L(u)
u[0]=t
u=v.w
t=u[0]
if(t===0)return null
D.H.hR(u,1,1+t,v.f.jN(t).ik())
u=v.w
x=u[1]
u.$flags&2&&B.L(u)
u[1]=2
u[0]=u[0]-1}else{w=u[1]
s&2&&B.L(u)
u[1]=w+1
x=u[w]
u[0]=t-1}return x}}
A.Su.prototype={
J(){return"IcoType."+this.b}}
A.buv.prototype={}
A.axr.prototype={}
A.but.prototype={
ge4(d){return D.c.aL(A.Iu.prototype.ge4.call(this,0),2)},
gR7(){return!(this.d===40&&this.f===32)&&A.Iu.prototype.gR7.call(this)}}
A.buu.prototype={
nt(d,e,f){var x,w,v,u=this,t=A.dg(e,!1,null,0)
u.a=t
x=u.b=A.d6A(t)
if(x==null)return null
t=x.e.length
if(t===1)return u.kE(0)
for(w=null,v=0;v<u.b.e.length;++v){f=u.kE(v)
if(f==null)continue
if(w==null){f.w=C.bG
w=f}else w.o6(f)}return w},
kE(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=this.a
if(a7!=null){x=this.b
x=x==null||a8>=x.d}else x=!0
if(x)return a6
w=this.b.e[a8]
x=a7.a
a7=a7.b+w.e
v=w.d
u=J.cVe(x,a7,a7+v)
t=new A.aDf(A.d7b())
y.D.a(u)
if(t.JS(u))return t.dh(0,u)
s=A.rT(!1,14)
s.ly(19778)
s.jw(v)
s.jw(0)
s.jw(0)
a7=A.dg(u,!1,a6,0)
x=A.d3x(A.dg(J.dx(D.H.gaq(s.c),0,s.a),!1,a6,0))
v=a7.d
r=a7.ag()
q=a7.ag()
p=$.iy()
p.$flags&2&&B.L(p)
p[0]=q
q=$.lX()
o=q[0]
p[0]=a7.ag()
q=q[0]
n=a7.av()
m=a7.av()
l=C.WT[a7.ag()]
a7.ag()
p[0]=a7.ag()
p[0]=a7.ag()
p=a7.ag()
a7.ag()
k=new A.but(x,o,q,r,n,m,l,p,v)
k.anV(a7,x)
if(r!==40&&n!==1)return a6
j=p===0&&m<=8?40+4*D.c.eB(1,m):40+4*p
x.b=j
s.a-=4
s.jw(j)
i=A.dg(u,!1,a6,0)
h=new A.biS(!0)
h.a=i
h.b=k
g=h.kE(0)
if(m>=32)return g
f=32-D.c.au(o,32)
e=D.c.aL(f===32?o:o+f,8)
for(a7=1/q<0,x=q<0,q=q===0,d=0;d<D.c.aL(A.Iu.prototype.ge4.call(k,0),2);++d){if(!(q?a7:x))a0=d
else{v=g.a
v=v==null?a6:v.b
a0=(v==null?0:v)-1-d}a1=i.jS(e)
i.d=i.d+(a1.c-a1.d)
v=g.a
a2=v==null?a6:v.er(0,a0,a6)
if(a2==null)a2=new A.h0()
for(a3=0;a3<o;){a4=J.v(a1.a,a1.d++)
a5=7
while(!0){if(!(a5>-1&&a3<o))break
if((a4&D.c.f9(1,a5))>>>0!==0)a2.saU(0,0)
a2.q();++a3;--a5}}}return g}}
A.aqD.prototype={}
A.Kf.prototype={}
A.Kg.prototype={}
A.a4e.prototype={
gn(d){return this.a}}
A.bxs.prototype={}
A.EU.prototype={}
A.bxu.prototype={
Ti(d){var x,w,v,u,t,s=this,r=A.dg(d,!0,null,0)
s.a=r
x=r.UT(2,0)
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
oy(d,e){var x,w,v,u,t,s,r,q,p=this
p.a=A.dg(e,!0,null,0)
p.bu0()
if(p.x.length!==1)throw B.p(A.co("Only single frame JPEGs supported"))
for(x=p.Q,w=0;v=p.d,u=v.z,w<u.length;++w){t=v.y.h(0,u[w])
v=t.a
u=p.d
s=u.f
r=t.b
q=u.r
u=p.b3Z(u,t)
v=v===1&&s===2?1:0
x.push(new A.aqD(u,v,r===1&&q===2?1:0))}},
bu0(){var x,w,v,u,t,s=this
if(s.H7()!==216)throw B.p(A.co("Start Of Image marker not found."))
x=s.H7()
while(!0){if(x!==217){w=s.a
w===$&&B.b()
w=w.d<w.c}else w=!1
if(!w)break
w=s.a
w===$&&B.b()
v=w.av()
if(v<2)B.aa(A.co("Invalid Block"))
w=s.a
u=w.jS(v-2)
w.d=w.d+(u.c-u.d)
switch(x){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:s.bu1(x,u)
break
case 219:s.bu4(u)
break
case 192:case 193:case 194:s.bu6(x,u)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw B.p(A.co("Unhandled frame type "+D.c.jQ(x,16)))
case 196:s.bu3(u)
break
case 221:s.e=u.av()
break
case 218:s.bui(u)
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
do{do{x=w.a.cD()
if(x!==255){v=w.a
v=v.d<v.c}else v=!1}while(v)
v=w.a
if(v.d>=v.c)return x
do{x=w.a.cD()
if(x===255){v=w.a
v=v.d<v.c}else v=!1}while(v)
if(x===0){v=w.a
v=v.d<v.c}else v=!1}while(v)
return x},
bu5(d){if(d.ag()!==1165519206)return
if(d.av()!==0)return
this.r.oy(0,d)},
bu1(d,e){var x,w,v,u,t=this,s=e
if(d===224){x=s
w=!1
if(J.v(x.a,x.d)===74){x=s
if(J.v(x.a,x.d+1)===70){x=s
if(J.v(x.a,x.d+2)===73){x=s
if(J.v(x.a,x.d+3)===70){x=s
x=J.v(x.a,x.d+4)===0}else x=w}else x=w}else x=w}else x=w
if(x){x=new A.bxy()
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
s.UT(14+3*w*v,14)}}else if(d===225)t.bu5(s)
else if(d===238){x=s
w=!1
if(J.v(x.a,x.d)===65){x=s
if(J.v(x.a,x.d+1)===100){x=s
if(J.v(x.a,x.d+2)===111){x=s
if(J.v(x.a,x.d+3)===98){x=s
if(J.v(x.a,x.d+4)===101){x=s
x=J.v(x.a,x.d+5)===0}else x=w}else x=w}else x=w}else x=w}else x=w
if(x){t.c=new A.bxs()
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
x.d=J.v(w.a,w.d+11)}}else if(d===254)try{s.bXt()}catch(u){B.bg(u)}},
bu4(d){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=this.w;v=d.d,u=v<x,u;){u=d.a
d.d=v+1
t=J.v(u,v)
s=D.c.Z(t,4)
t&=15
if(t>=4)throw B.p(A.co("Invalid number of quantization tables"))
v=w[t]
if(v==null){v=new Int16Array(64)
w[t]=v}for(u=s!==0,r=0;r<64;++r){q=u?d.av():J.v(d.a,d.d++)
p=C.yN[r]
v.$flags&2&&B.L(v)
v[p]=q}}if(u)throw B.p(A.co("Bad length for DQT block"))},
bu6(d,e){var x,w,v,u,t,s,r,q=this
if(q.d!=null)throw B.p(A.co("Duplicate JPG frame data found."))
x=q.d=new A.ayo(B.I(y.p,y.c),B.a([],y.t))
x.b=d===194
x.c=e.cD()
x=q.d
x.toString
x.d=e.av()
x=q.d
x.toString
x.e=e.av()
w=e.cD()
for(x=q.w,v=0;v<w;++v){u=J.v(e.a,e.d++)
t=J.v(e.a,e.d++)
s=D.c.Z(t,4)
r=J.v(e.a,e.d++)
q.d.z.push(u)
q.d.y.m(0,u,new A.EU(s&15,t&15,x,r))}q.d.aie()
q.x.push(q.d)},
bu3(d){var x,w,v,u,t,s,r,q,p,o,n,m
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
m[s]=this.b4m(r,n)}},
bui(d){var x,w,v,u,t,s,r,q=this,p=d.cD()
if(p<1||p>4)throw B.p(A.co("Invalid SOS block"))
x=B.ql(p,new A.bxv(q,d),!0,y.c)
w=d.cD()
v=d.cD()
u=d.cD()
t=D.c.Z(u,4)
s=q.a
s===$&&B.b()
r=q.d
t=new A.ayp(s,r,x,q.e,w,v,t&15,u&15)
s=r.w
s===$&&B.b()
t.f=s
t.r=r.b
t.oY(0)},
b4m(d,e){var x,w,v,u,t,s,r,q,p,o,n=B.a([],y.C),m=16
while(!0){if(!(m>0&&d[m-1]===0))break;--m}x=y.aH
n.push(new A.Y6(B.a([],x)))
w=n[0]
for(v=0,u=0;u<m;){for(t=0;t<d[u];++t){w=n.pop()
s=w.a
r=s.length
q=w.b
if(r<=q)D.b.sA(s,q+1)
s[w.b]=new A.a4e(e[v])
for(;s=w.b,s>0;)w=n.pop()
w.b=s+1
n.push(w)
for(;n.length<=u;w=p){s=B.a([],x)
p=new A.Y6(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.sA(r,o+1)
r[w.b]=new A.Kg(s)}++v}++u
if(u<m){s=B.a([],x)
p=new A.Y6(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.sA(r,o+1)
r[w.b]=new A.Kg(s)
w=p}}return n[0].a},
b3Z(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.e
d===$&&B.b()
x=a1.f
x===$&&B.b()
w=d<<3>>>0
v=new Int32Array(64)
u=new Uint8Array(64)
t=B.c2(x*8,null,!1,y.ac)
for(s=a1.c,r=a1.d,q=0,p=0;p<x;++p){o=p<<3>>>0
for(n=0;n<8;++n,q=m){m=q+1
t[q]=new Uint8Array(w)}for(l=0;l<d;++l){k=s[r]
k.toString
j=a1.r
j===$&&B.b()
A.dVx(k,j[p][l],u,v)
i=l<<3>>>0
for(h=0,g=0;g<8;++g){f=t[o+g]
for(n=0;n<8;++n,h=e){f.toString
e=h+1
k=u[h]
f.$flags&2&&B.L(f)
f[i+n]=k}}}}return t}}
A.Y6.prototype={}
A.ayo.prototype={
aie(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.y,w=B.t(x).i("ca<1>"),v=new B.ca(x,x.r,x.e,w);v.q();){u=x.h(0,v.d)
g.f=Math.max(g.f,u.a)
g.r=Math.max(g.r,u.b)}v=g.e
v.toString
g.w=D.e.fI(v/8/g.f)
v=g.d
v.toString
g.x=D.e.fI(v/8/g.r)
for(w=new B.ca(x,x.r,x.e,w),v=y.h,t=y.bp;w.q();){s=x.h(0,w.d)
s.toString
r=g.e
r.toString
q=s.a
p=D.e.fI(D.e.fI(r/8)*q/g.f)
r=g.d
r.toString
o=s.b
n=D.e.fI(D.e.fI(r/8)*o/g.r)
m=g.w*q
l=g.x*o
k=J.jJ(l,t)
for(j=0;j<l;++j){i=J.jJ(m,v)
for(h=0;h<m;++h)i[h]=new Int32Array(64)
k[j]=i}s.e=p
s.f=n
s.r=k}}}
A.bxy.prototype={}
A.ayp.prototype={
oY(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.y,f=g.length,e=h.r
e.toString
if(e)if(h.Q===0)x=h.at===0?h.gb7R():h.gb7T()
else x=h.at===0?h.gb7I():h.gb7K()
else x=h.gb7O()
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
p=D.c.hS(t,v)
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
for(l=0;l<m;++l)for(k=0;k<n;++k)h.b7Z(r,x,t,l,k)}++t;++q}}h.ch=0
j=J.v(w.a,w.d)
i=J.v(w.a,w.d+1)
if(j===255)if(i>=208&&i<=215)w.d+=2
else break}},
CV(){var x,w=this,v=w.ch
if(v>0){--v
w.ch=v
return D.c.oH(w.ay,v)&1}v=w.a
if(v.d>=v.c)return null
x=v.cD()
w.ay=x
if(x===255)if(v.cD()!==0)return null
w.ch=7
return D.c.Z(w.ay,7)&1},
NP(d){var x,w=new A.Kg(d)
for(;x=this.CV(),x!=null;){if(w instanceof A.Kg)w=w.a[x]
if(w instanceof A.a4e)return w.a}return null},
aay(d){var x,w
for(x=0;d>0;){w=this.CV()
if(w==null)return null
x=(x<<1|w)>>>0;--d}return x},
On(d){var x
if(d==null)return 0
if(d===1)return this.CV()===1?1:-1
x=this.aay(d)
if(x==null)return 0
if(x>=D.c.f9(1,d-1))return x
return x+D.c.eB(-1,d)+1},
b7P(d,e){var x,w,v,u,t,s,r=this,q=d.w
q===$&&B.b()
x=r.NP(q)
w=x===0?0:r.On(x)
q=d.y
q===$&&B.b()
q+=w
d.y=q
e.$flags&2&&B.L(e)
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
e[C.yN[v]]=t;++v}},
b7S(d,e){var x,w,v=d.w
v===$&&B.b()
x=this.NP(v)
w=x===0?0:D.c.eB(this.On(x),this.ax)
v=d.y
v===$&&B.b()
v+=w
d.y=v
e.$flags&2&&B.L(e)
e[0]=v},
b7U(d,e){var x=e[0],w=this.CV()
w.toString
w=D.c.eB(w,this.ax)
e.$flags&2&&B.L(e)
e[0]=(x|w)>>>0},
b7J(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.CW
if(o>0){p.CW=o-1
return}x=p.Q
w=p.as
for(o=p.ax,v=e.$flags|0;x<=w;){u=d.x
u===$&&B.b()
u=p.NP(u)
u.toString
t=u&15
s=u>>>4
if(t===0){if(s<15){o=p.aay(s)
o.toString
p.CW=o+D.c.eB(1,s)-1
break}x+=16
continue}x+=s
r=C.yN[x]
u=p.On(t)
q=D.c.eB(1,o)
v&2&&B.L(e)
e[r]=u*q;++x}},
b7L(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.Q,n=p.as
$label0$1:for(x=p.ax,w=e.$flags|0,v=0;o<=n;){u=C.yN[o]
t=p.cx
switch(t){case 0:t=d.x
t===$&&B.b()
s=p.NP(t)
if(s==null)throw B.p(A.co("Invalid progressive encoding"))
r=s&15
v=s>>>4
if(r===0)if(v<15){t=p.aay(v)
t.toString
p.CW=t+D.c.eB(1,v)
p.cx=4}else{p.cx=1
v=16}else{if(r!==1)throw B.p(A.co("invalid ACn encoding"))
p.cy=p.On(r)
p.cx=v!==0?2:3}continue $label0$1
case 1:case 2:q=e[u]
if(q!==0){t=p.CV()
t.toString
t=D.c.eB(t,x)
w&2&&B.L(e)
e[u]=q+t}else{--v
if(v===0)p.cx=t===2?3:0}break
case 3:t=e[u]
if(t!==0){q=p.CV()
q.toString
q=D.c.eB(q,x)
w&2&&B.L(e)
e[u]=t+q}else{t=p.cy
t===$&&B.b()
t=D.c.eB(t,x)
w&2&&B.L(e)
e[u]=t
p.cx=0}break
case 4:t=e[u]
if(t!==0){q=p.CV()
q.toString
q=D.c.eB(q,x)
w&2&&B.L(e)
e[u]=t+q}break}++o}if(p.cx===4)if(--p.CW===0)p.cx=0},
b7Z(d,e,f,g,h){var x,w,v=this.f
v===$&&B.b()
x=D.c.hS(f,v)*d.b+g
w=D.c.au(f,v)*d.a+h
v=d.r
v===$&&B.b()
if(x>=v.length)return
v=v[x]
if(w>=v.length)return
e.$2(d,v[w])}}
A.ayn.prototype={
nt(d,e,f){var x=A.d7t()
x.oy(0,e)
if(x.x.length!==1)throw B.p(A.co("only single frame JPEGs supported"))
return A.dTK(x)},
dh(d,e){return this.nt(0,e,null)}}
A.bxt.prototype={
J(){return"JpegChroma."+this.b}}
A.bxw.prototype={
aTt(d){d=D.e.L(D.c.aM(d,1,100))
if(this.at===d)return
this.blu(d<50?D.e.fW(5000/d):D.c.fW(200-d*2))
this.at=d},
bM4(b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=A.rT(!0,8192)
a8.A0(a9,216)
a8.A0(a9,224)
a9.ly(16)
a9.bf(74)
a9.bf(70)
a9.bf(73)
a9.bf(70)
a9.bf(0)
a9.bf(1)
a9.bf(1)
a9.bf(0)
a9.ly(1)
a9.ly(1)
a9.bf(0)
a9.bf(0)
a8.bDz(a9,b0.gxS())
a8.bDD(a9)
x=b0.ge7(0)
w=b0.ge4(0)
a8.A0(a9,192)
a9.ly(17)
a9.bf(8)
a9.ly(w)
a9.ly(x)
a9.bf(3)
a9.bf(1)
x=b1===C.Qa
a9.bf(x?17:34)
a9.bf(0)
a9.bf(2)
a9.bf(17)
a9.bf(1)
a9.bf(3)
a9.bf(17)
a9.bf(1)
a8.bDC(a9)
a8.A0(a9,218)
a9.ly(12)
a9.bf(3)
a9.bf(1)
a9.bf(0)
a9.bf(2)
a9.bf(17)
a9.bf(3)
a9.bf(17)
a9.bf(0)
a9.bf(63)
a9.bf(0)
a8.ax=0
a8.ay=7
v=b0.ge7(0)
u=b0.ge4(0)
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
t=J.js(4,x)
for(j=0;j<4;++j)t[j]=new Float32Array(64)
s=J.js(4,x)
for(j=0;j<4;++j)s[j]=new Float32Array(64)
r=J.js(4,x)
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
a8.aro(i,g,a0,a3,a6)
a8.aro(h,f,a1,a4,a7)
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
a8.xt(a9,B.a([D.c.f9(1,x)-1,x],y.t))}a8.A0(a9,217)
return J.dx(D.H.gaq(a9.c),0,a9.a)},
MA(d,e,f,g,h,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(x=this.as,w=a0.$flags|0,v=a1.$flags|0,u=a2.$flags|0,t=f+1,s=0;s<64;++s){r=s>>>3
q=f+r
p=e+(s&7)
if(q>=h)q-=t+r-h
if(p>=g)p-=p-g+1
o=d.a
n=o==null?null:o.er(p,q,null)
if(n==null)n=new A.h0()
if(n.gdG()!==C.aj)n=n.oX(C.aj)
if(n.gA(n)>3){m=n.gfU()
l=1-m
n.sar(0,D.e.aD(n.gar(n)*m+C.D6.h(0,0)*l))
n.saE(D.e.aD(n.gaE()*m+C.D6.h(0,0)*l))
n.saF(0,D.e.aD(n.gaF(n)*m+C.D6.h(0,0)*l))}k=D.e.L(n.gar(n))
j=D.e.L(n.gaE())
i=D.e.L(n.gaF(n))
o=D.c.Z(x[k]+x[j+256]+x[i+512],16)
w&2&&B.L(a0)
a0[s]=o-128
o=D.c.Z(x[k+768]+x[j+1024]+x[i+1280],16)
v&2&&B.L(a1)
a1[s]=o-128
o=D.c.Z(x[k+1280]+x[j+1536]+x[i+1792],16)
u&2&&B.L(a2)
a2[s]=o-128}},
aro(d,e,f,g,h){var x,w,v,u,t,s,r,q
for(x=d.$flags|0,w=0;w<64;++w){if(w<32)v=D.c.au(w,8)<4?e:f
else v=D.c.au(w,8)<4?g:h
u=(D.c.aL(D.c.au(w,32),8)<<4>>>0)+(D.c.au(w,4)<<1>>>0)
t=v[u]
s=v[u+1]
r=v[u+8]
q=v[u+9]
x&2&&B.L(d)
d[w]=(t+s+r+q)/4}},
A0(d,e){d.bf(255)
d.bf(e&255)},
blu(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.a,w=x.$flags|0,v=0;v<64;++v){u=D.e.fW((C.aNB[v]*d+50)/100)
if(u<1)u=1
else if(u>255)u=255
t=C.ve[v]
w&2&&B.L(x)
x[t]=u}for(w=g.b,t=w.$flags|0,s=0;s<64;++s){r=D.e.fW((C.aGS[s]*d+50)/100)
if(r<1)r=1
else if(r>255)r=255
q=C.ve[s]
t&2&&B.L(w)
w[q]=r}for(t=g.c,q=t.$flags|0,p=g.d,o=p.$flags|0,n=0,m=0;m<8;++m)for(l=0;l<8;++l){k=C.ve[n]
j=x[k]
i=C.Rx[m]
h=C.Rx[l]
q&2&&B.L(t)
t[n]=1/(j*i*h*8)
k=w[k]
o&2&&B.L(p)
p[n]=1/(k*i*h*8);++n}},
VL(d,e){var x,w,v,u,t,s=y.t,r=B.a([B.a([],s)],y.cQ)
for(x=0,w=0,v=1;v<=16;++v){for(u=1;u<=d[v];++u){t=e[w]
if(r.length<=t)D.b.sA(r,t+1)
r[t]=B.a([x,v],s);++w;++x}x*=2}return r},
blj(){var x,w,v,u,t,s,r,q,p,o,n
for(x=this.y,w=this.x,v=y.t,u=1,t=2,s=1;s<=15;++s){for(r=u;r<t;++r){q=32767+r
x[q]=s
w[q]=B.a([r,s],v)}for(q=t-1,p=-q,o=-u;p<=o;++p){n=32767+p
x[n]=s
w[n]=B.a([q+p,s],v)}u=u<<1>>>0
t=t<<1>>>0}},
blv(){var x,w,v
for(x=this.as,w=x.$flags|0,v=0;v<256;++v){w&2&&B.L(x)
x[v]=19595*v
x[v+256]=38470*v
x[v+512]=7471*v+32768
x[v+768]=-11059*v
x[v+1024]=-21709*v
x[v+1280]=32768*v+8421375
x[v+1536]=-27439*v
x[v+1792]=-5329*v}},
baS(d4,d5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3
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
x&2&&B.L(d4)
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
x&2&&B.L(d4)
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
bDz(d,e){var x,w
if(e.ga0(0))return
x=A.rT(!1,8192)
e.jv(0,x)
w=J.dx(D.H.gaq(x.c),0,x.a)
this.A0(d,225)
d.ly(w.length+8)
d.jw(1165519206)
d.ly(0)
d.mD(w)},
bDD(d){var x,w,v
this.A0(d,219)
d.ly(132)
d.bf(0)
for(x=this.a,w=0;w<64;++w)d.bf(x[w])
d.bf(1)
for(x=this.b,v=0;v<64;++v)d.bf(x[v])},
bDC(d){var x,w,v,u,t,s,r,q
this.A0(d,196)
d.ly(418)
d.bf(0)
for(x=0;x<16;){++x
d.bf(C.Yv[x])}for(w=0;w<=11;++w)d.bf(C.uJ[w])
d.bf(16)
for(v=0;v<16;){++v
d.bf(C.QC[v])}for(u=0;u<=161;++u)d.bf(C.RV[u])
d.bf(1)
for(t=0;t<16;){++t
d.bf(C.Tw[t])}for(s=0;s<=11;++s)d.bf(C.uJ[s])
d.bf(17)
for(r=0;r<16;){++r
d.bf(C.Sl[r])}for(q=0;q<=161;++q)d.bf(C.UN[q])},
xg(d,e,f,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=a2[0],h=a2[240],g=j.baS(e,f)
for(x=j.Q,w=0;w<64;++w)x[C.ve[w]]=g[w]
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
if(x===255){d.bf(255)
d.bf(0)}else d.bf(x)
w.ay=7
w.ax=0}}}}
A.Ui.prototype={
J(){return"PngDisposeMode."+this.b}}
A.a7H.prototype={
J(){return"PngBlendMode."+this.b}}
A.a7I.prototype={}
A.ay9.prototype={}
A.FH.prototype={
J(){return"PngFilterType."+this.b}}
A.bIh.prototype={}
A.bww.prototype={}
A.aDf.prototype={
JS(d){var x,w=A.dg(d,!0,null,0).jN(8)
for(x=0;x<8;++x)if(J.v(w.a,w.d+x)!==D.X4[x])return!1
return!0},
pw(b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=A.dg(b4,!0,b2,0)
b1.d=b3
x=b3.jN(8)
for(w=0;w<8;++w)if(J.v(x.a,x.d+w)!==D.X4[w])return b2
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
r.m(0,D.f_.dh(0,new Uint8Array(l.subarray(0,B.ts(0,w,k)))),D.f_.dh(0,new Uint8Array(l.subarray(q,B.ts(q,b2,k)))))
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
break}if(b1.d.ag()!==A.zn(h,A.zn(new B.fk(n),0)))throw B.p(A.co("Invalid "+n+" checksum"))
break
case"PLTE":q=b1.d
m=q.jS(o)
q.d=q.d+(m.c-m.d)
b3.w=m.ik()
if(b1.d.ag()!==A.zn(s.a(b3.w),A.zn(new B.fk(n),0)))throw B.p(A.co("Invalid "+n+" checksum"))
break
case"tRNS":q=b1.d
m=q.jS(o)
q.d=q.d+(m.c-m.d)
b3.x=m.ik()
g=b1.d.ag()
q=b3.x
q.toString
if(g!==A.zn(q,A.zn(new B.fk(n),0)))throw B.p(A.co("Invalid "+n+" checksum"))
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
q=C.aEo[a3]
a5=C.aKW[a4]
v.push(new A.ay9(B.a([],u),f,e,d,a0,a1,a2,q,a5))
b1.d.d+=4
break
case"fdAT":b1.d.ag()
D.b.ga1(v).y.push(p)
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
b3.z=new A.QK(a5)}else{q=new Uint8Array(3)
q[0]=a8
q[1]=a9
q[2]=b0
b3.z=new A.aqy(q)}}else if(q===0||q===4){b1.d.av()
o-=2}else if(q===2||q===6){q=b1.d
q.av()
q.av()
q.av()
o-=24}if(o>0)b1.d.d+=o
b1.d.d+=4
break
case"iCCP":b3.Q=b1.d.SE()
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
kE(b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=null,b4=b1.a,b5=b4.a,b6=b4.b,b7=b4.cx,b8=b7.length
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
if(b1.d.ag()!==A.zn(p,A.zn(new B.fk(r),0)))throw B.p(A.co("Invalid "+r+" checksum"))}b3=new Uint8Array(u)
for(b7=w.length,o=0,n=0;n<w.length;w.length===b7||(0,B.K)(w),++n){p=w[n]
J.cVd(b3,o,p)
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
for(b7=w.length,o=0,n=0;n<w.length;w.length===b7||(0,B.K)(w),++n){p=w[n]
J.cVd(b3,o,p)
o+=p.length}}b7=b4.d
l=1
if(!(b7===3))if(!(b7===0)){if(b7===4)b7=2
else b7=b7===6?4:3
l=b7}x=null
try{x=C.kH.DJ(b3)}catch(k){return b2}j=A.dg(x,!0,b2,0)
b1.c=b1.b=0
i=b2
if(b4.d===3){b7=b4.w
if(b7!=null){h=b7.length/3|0
g=b4.x
b8=g!=null
f=b8?g.length:0
e=b8?4:3
i=new A.wi(new Uint8Array(h*e),h,e)
for(b8=e===4,t=0,d=0;t<h;++t,d+=3){a0=b8&&t<f?g[t]:255
i.Uo(t,b7[d],b7[d+1],b7[d+2],a0)}}}if(b4.d===0&&b4.x!=null&&i==null&&b4.c<=8){g=b4.x
a1=g.length
b7=b4.c
h=D.c.f9(1,b7)
i=new A.wi(new Uint8Array(h*4),h,4)
if(b7===1)a2=255
else if(b7===2)a2=85
else{b7=b7===4?17:1
a2=b7}for(t=0;t<h;++t){a3=t*a2
i.Uo(t,a3,a3,a3,255)}for(b7=i.b,b8=3<b7,a4=i.c,a5=a4.$flags|0,t=0;t<a1;t+=2){a6=(g[t]&255)<<8|g[t+1]&255
if(a6<h)if(b8){a5&2&&B.L(a4)
a4[a6*b7+3]=0}}}b7=b4.c
if(b7===1)a7=C.hF
else if(b7===2)a7=C.iu
else{if(b7===4)b8=C.iv
else b8=b7===16?C.cX:C.aj
a7=b8}b8=b4.d
if(b8===0&&b4.x!=null&&b7>8)l=4
a8=A.iS(b2,b2,a7,0,C.bG,b6,b2,0,b8===2&&b4.x!=null?4:l,i,C.aj,b5,!1)
a9=b4.a
b0=b4.b
b4.a=b5
b4.b=b6
b1.e=0
if(b4.r!==0){b7=b6+7>>>3
b1.CS(j,a8,0,0,8,8,b5+7>>>3,b7)
b8=b5+3
b1.CS(j,a8,4,0,8,8,b8>>>3,b7)
b7=b6+3
b1.CS(j,a8,0,4,4,8,b8>>>2,b7>>>3)
b8=b5+1
b1.CS(j,a8,2,0,4,4,b8>>>2,b7>>>2)
b7=b6+1
b1.CS(j,a8,0,2,2,4,b8>>>1,b7>>>2)
b1.CS(j,a8,1,0,2,2,b5>>>1,b7>>>1)
b1.CS(j,a8,0,1,1,2,b5,b6>>>1)}else b1.bt5(j,a8)
b4.a=a9
b4.b=b0
b7=b4.at
if(b7!=null)a8.c=new A.a4g(b4.Q,C.Em,b7)
b4=b4.ax
if(b4.a!==0)a8.bEs(b4)
return a8},
nt(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(g.pw(e)==null)return f
x=g.a
w=x.cx
v=w.length
if(v===0){x=g.kE(0)
x.toString
return x}for(v=y.g,u=f,t=u,s=0;s<x.ch;++s){a0=w[s]
r=g.kE(s)
if(r==null)continue
if(t==null||u==null){t=r.aFB(r.gqY())
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
o=o===(n==null?0:n)&&a0.d===0&&a0.e===0&&a0.x===C.abZ}else o=!1
if(o){q=a0.f
r.y=D.e.L((q===0||a0.r===0?0:q/a0.r)*1000)
t.o6(r)
u=r
continue}i=t.x
u=A.EB((i===$?t.x=B.a([],v):i)[q],!1,!1)
h=p.w
if(h===C.ac0){q=p.d
o=p.e
n=x.z
if(n==null){n=new Uint8Array(4)
m=new A.QK(n)
n[0]=0
n[1]=0
n[2]=0
n[3]=0
n=m}A.dT5(u,!1,n,q,q+p.b-1,o,o+p.c-1)}else if(h===C.ac1&&s>1){i=t.x
if(i===$)i=t.x=B.a([],v)
q=p.d
o=p.e
n=p.b
m=p.c
u=A.d0k(u,i[s-2],C.C1,m,n,q,o,m,n,q,o)}q=a0.f
u.y=D.e.L((q===0||a0.r===0?0:q/a0.r)*1000)
q=a0.x===C.ac_?C.C1:C.C0
u=A.d0k(u,r,q,f,f,a0.d,a0.e,f,f,f,f)
t.o6(u)}return t},
dh(d,e){return this.nt(0,e,null)},
CS(a0,a1,a2,a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=e.d
if(d===4)x=2
else if(d===2)x=3
else{d=d===6?4:1
x=d}w=x*e.c
v=D.c.Z(w+7,3)
u=D.c.Z(w*a6+7,3)
t=B.a([null,null],y.e)
s=B.a([0,0,0,0],y.t)
for(e=a4>1,r=a4-a2,q=a3,p=0,o=0;p<a7;++p,q+=a5,++f.e){n=C.Wd[J.v(a0.a,a0.d++)]
m=a0.jS(u)
a0.d=a0.d+(m.c-m.d)
d=m.ik()
t[o]=d
o=1-o
f.aB8(n,v,d,t[o])
f.c=f.b=0
l=d.length
k=new A.nq(d,0,Math.min(l,l),0,!0)
for(d=r<=1,j=a2,i=0;i<a6;++i,j+=a4){f.axM(k,s)
l=a1.a
l=l==null?null:l.er(j,q,null)
f.ab8(l==null?new A.h0():l,s)
if(!d||e)for(h=0;h<a4;++h)for(l=q+h,g=0;g<r;++g)f.ab8(a1.kP(j+g,l),s)}}},
bt5(d,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a,e=f.d
if(e===4)x=2
else if(e===2)x=3
else{e=e===6?4:1
x=e}w=x*f.c
v=f.a
u=f.b
t=D.c.Z(v*w+7,3)
s=D.c.Z(w+7,3)
r=B.c2(t,0,!1,y.p)
q=B.a([r,r],y.S)
p=B.a([0,0,0,0],y.t)
f=a0.a
o=f.gaa(f)
o.q()
for(n=0,m=0;n<u;++n,m=j){l=C.Wd[J.v(d.a,d.d++)]
k=d.jS(t)
d.d=d.d+(k.c-k.d)
f=k.ik()
q[m]=f
j=1-m
g.aB8(l,s,f,q[j])
g.c=g.b=0
f=q[m]
e=f.length
i=new A.nq(f,0,Math.min(e,e),0,!0)
for(h=0;h<v;++h){g.axM(i,p)
g.ab8(o.gM(o),p)
o.q()}}},
aB8(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=f.length
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
u1(d,e){var x,w,v,u,t,s=this
if(e===0)return 0
if(e===8)return d.cD()
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
w=D.c.ht(s.b,x)
s.c=x
return w&t},
axM(d,e){var x=this,w=x.a,v=w.d
switch(v){case 0:e[0]=x.u1(d,w.c)
return
case 2:e[0]=x.u1(d,w.c)
e[1]=x.u1(d,w.c)
e[2]=x.u1(d,w.c)
return
case 3:e[0]=x.u1(d,w.c)
return
case 4:e[0]=x.u1(d,w.c)
e[1]=x.u1(d,w.c)
return
case 6:e[0]=x.u1(d,w.c)
e[1]=x.u1(d,w.c)
e[2]=x.u1(d,w.c)
e[3]=x.u1(d,w.c)
return}throw B.p(A.co("Invalid color type: "+v+"."))},
ab8(d,e){var x,w,v,u,t,s,r,q=this.a,p=q.d
switch(p){case 0:p=q.x
if(p!=null&&q.c>8){q=p[0]
p=p[1]
x=e[0]
d.iV(x,x,x,x!==((q&255)<<24|p&255)>>>0?d.gcr():0)
return}d.l9(e[0],0,0)
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
return}}d.l9(w,x,v)
return
case 3:d.sdH(0,e[0])
return
case 4:d.l9(e[0],e[1],0)
return
case 6:d.iV(e[0],e[1],e[2],e[3])
return}throw B.p(A.co("Invalid color type: "+p+"."))}}
A.aDg.prototype={
J(){return"PngFilter."+this.b}}
A.bIf.prototype={
o6(d){var x,w,v,u,t,s,r,q,p=this,o=8192,n=d.a
n=n==null?null:n.gte()
if(!(n===!0&&d.gdG()!==C.cX))n=d.gno()<8&&!d.gta()&&d.gqY()>1
else n=!0
if(n)d=d.oX(C.aj)
if(p.w==null){n=A.rT(!0,o)
p.w=n
n.mD(B.a([137,80,78,71,13,10,26,10],y.t))
x=A.rT(!0,o)
x.jw(d.ge7(0))
x.jw(d.ge4(0))
x.bf(d.gno())
if(d.gta())n=3
else if(d.gqY()===1)n=0
else if(d.gqY()===2)n=4
else n=d.gqY()===3?2:6
x.bf(n)
x.bf(0)
x.bf(0)
x.bf(0)
n=p.w
n.toString
p.u9(n,"IHDR",J.dx(D.H.gaq(x.c),0,x.a))
n=d.c
if(n!=null){x=A.rT(!0,o)
x.mD(new B.fk(n.a))
x.bf(0)
x.bf(0)
x.mD(n.bHx())
n=p.w
n.toString
p.u9(n,"iCCP",J.dx(D.H.gaq(x.c),0,x.a))}if(d.gta()){n=p.a
if(n!=null){n=n.a
n===$&&B.b()
p.aCQ(n)}else{n=d.a
n=n==null?null:n.gf7()
n.toString
p.aCQ(n)}}if(p.r){x=A.rT(!0,o)
n=p.e
n===$&&B.b()
x.jw(n)
x.jw(p.c)
n=p.w
n.toString
p.u9(n,"acTL",J.dx(D.H.gaq(x.c),0,x.a))}}w=d.gta()?1:d.gqY()
v=d.gdG()===C.cX?2:1
n=d.ge7(0)
u=d.ge4(0)
t=d.ge4(0)
s=new Uint8Array(n*u*w*v+t)
p.bt6(0,d,s)
r=C.LJ.aHh(s,p.d)
n=d.d
if(n!=null)for(n=new B.ca(n,n.r,n.e,B.t(n).i("ca<1>"));n.q();){u=n.d
t=d.d.h(0,u)
t.toString
x=new A.aCr(!0,new Uint8Array(8192))
x.mD(D.u4.cq(u))
x.bf(0)
x.mD(D.u4.cq(t))
u=p.w
u.toString
p.u9(u,"tEXt",J.dx(D.H.gaq(x.c),0,x.a))}if(p.r){x=A.rT(!0,o)
x.jw(p.f)
x.jw(d.ge7(0))
x.jw(d.ge4(0))
x.jw(0)
x.jw(0)
x.ly(d.y)
x.ly(1000)
x.bf(1)
x.bf(0)
n=p.w
n.toString
p.u9(n,"fcTL",J.dx(D.H.gaq(x.c),0,x.a));++p.f}if(p.f<=1){n=p.w
n.toString
p.u9(n,"IDAT",r)}else{q=A.rT(!0,o)
q.jw(p.f)
q.mD(r)
n=p.w
n.toString
p.u9(n,"fdAT",J.dx(D.H.gaq(q.c),0,q.a));++p.f}},
bNb(d){var x,w=this,v=w.w
if(v==null)return null
w.u9(v,"IEND",B.a([],y.t))
w.f=0
v=w.w
x=J.dx(D.H.gaq(v.c),0,v.a)
w.w=null
return x},
bM5(d,e){var x,w,v,u,t,s=this,r=d.glq().length
if(r<=1){s.e=1
s.r=!1
s.o6(d)}else{r=d.glq().length
s.e=r
s.r=r>1
s.c=d.r
if(d.gta()){x=new A.bFh(new Int32Array(256))
x.boJ(256)
x.bEf(d)
s.a=x
for(r=d.glq(),w=r.length,v=0;v<r.length;r.length===w||(0,B.K)(r),++v){u=r[v]
if(u!==d){x.avl(u)
x.asd()
x.av1()
x.aqr()}}}for(r=d.glq(),w=r.length,v=0;v<r.length;r.length===w||(0,B.K)(r),++v){u=r[v]
t=s.a
if(t!=null)s.o6(t.aQr(u))
else s.o6(u)}}r=s.bNb(0)
r.toString
return r},
aCQ(d){var x,w,v,u=this
if(d.gdG()===C.aj&&d.b===3&&d.a===256){x=u.w
x.toString
u.u9(x,"PLTE",J.dx(d.gaq(d),0,null))}else{x=d.a
w=A.rT(!0,x*3)
for(v=0;v<x;++v){w.bf(D.e.L(d.nR(v)))
w.bf(D.e.L(d.nP(v)))
w.bf(D.e.L(d.nN(v)))}x=u.w
x.toString
u.u9(x,"PLTE",J.dx(D.H.gaq(w.c),0,w.a))}if(d.b===4){x=d.a
w=A.rT(!0,x)
for(v=0;v<x;++v)w.bf(D.e.L(d.pq(v)))
x=u.w
x.toString
u.u9(x,"tRNS",J.dx(D.H.gaq(w.c),0,w.a))}},
u9(d,e,f){d.jw(f.length)
d.mD(new B.fk(e))
d.mD(f)
d.jw(A.zn(f,A.zn(new B.fk(e),0)))},
bt6(d,e,f){var x,w,v=this,u=e.gta()?C.byO:v.b,t=e.gaq(0),s=e.a.gtx(),r=e.gta()?1:e.gqY(),q=D.c.Z(r*e.gno()+7,3),p=e.gno()+7>>>3,o=u.a,n=J.dD(t),m=0,l=0,k=null,j=0
while(!0){x=e.a
x=x==null?null:x.b
if(!(j<(x==null?0:x)))break
w=n.Dj(t,l,s)
l+=s
switch(o){case 1:m=v.bb8(w,p,q,f,m)
break
case 2:m=v.bbb(w,k,p,f,m)
break
case 3:m=v.bb0(w,k,p,q,f,m)
break
case 4:m=v.bb5(w,k,p,q,f,m)
break
default:m=v.bb3(w,p,f,m)
break}++j
k=w}},
aCK(d,e,f,g,h){var x,w,v;--d
for(x=g.$flags|0;d>=0;h=w){w=h+1
v=e[f+d]
x&2&&B.L(g)
g[h]=v;--d}return h},
bb3(d,e,f,g){var x,w,v=g+1
f.$flags&2&&B.L(f)
f[g]=0
x=d.length
if(e===1)for(g=v,w=0;w<x;++w,g=v){v=g+1
f[g]=d[w]}else for(g=v,w=0;w<x;w+=e)g=this.aCK(e,d,w,f,g)
return g},
bb8(d,e,f,g,h){var x,w,v,u,t,s,r=h+1
g.$flags&2&&B.L(g)
g[h]=1
for(h=r,x=0;x<f;x+=e)h=this.aCK(e,d,x,g,h)
w=d.length
for(v=e-1,x=f;x<w;x+=e)for(u=v,t=0;t<e;++t,--u,h=r){r=h+1
s=x+u
g[h]=d[s]-d[s-f]&255}return h},
bbb(d,e,f,g,h){var x,w,v,u,t,s,r,q=h+1
g.$flags&2&&B.L(g)
g[h]=2
x=d.length
for(w=f-1,v=e!=null,h=q,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,h=q){r=v?e[u+t]:0
q=h+1
g[h]=d[u+t]-r&255}return h},
bb0(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o=i+1
h.$flags&2&&B.L(h)
h[i]=3
x=d.length
for(w=f-1,v=e==null,i=o,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=o){r=u+t
q=r<g?0:d[r-g]
p=v?0:e[r]
o=i+1
h[i]=d[r]-(q+p>>>1)}return i},
brM(d,e,f){var x=d+e-f,w=x>d?x-d:d-x,v=x>e?x-e:e-x,u=x>f?x-f:f-x
if(w<=v&&w<=u)return d
else if(v<=u)return e
return f},
bb5(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m=i+1
h.$flags&2&&B.L(h)
h[i]=4
x=d.length
for(w=f-1,v=e==null,i=m,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=m){r=u+t
q=r<g
p=q?0:d[r-g]
o=v?0:e[r]
n=q||v?0:e[r-g]
m=i+1
h[i]=d[r]-this.brM(p,o,n)&255}return i}}
A.FI.prototype={
J(){return"PnmFormat."+this.b}}
A.LQ.prototype={}
A.bIi.prototype={
JS(d){var x
this.b=A.dg(d,!1,null,0)
x=this.WE()
if(x==="P1"||x==="P2"||x==="P5"||x==="P3"||x==="P6")return!0
return!1},
nt(d,e,f){if(this.pw(e)==null)return null
return this.kE(0)},
pw(d){var x,w,v=this
v.b=A.dg(d,!1,null,0)
x=v.WE()
if(x==="P1"){w=v.a=new A.LQ(C.qq)
w.e=C.ac2}else if(x==="P2"){w=v.a=new A.LQ(C.qq)
w.e=C.ac3}else if(x==="P5"){w=v.a=new A.LQ(C.qq)
w.e=C.HD}else if(x==="P3"){w=v.a=new A.LQ(C.qq)
w.e=C.ac4}else if(x==="P6"){w=v.a=new A.LQ(C.qq)
w.e=C.HE}else return v.b=null
w.a=v.Og()
w=v.a
w.toString
w.b=v.Og()
w=v.a
if(w.a===0||w.b===0)return v.a=v.b=null
return w},
kE(d){var x,w,v,u,t,s=this,r=null,q=s.a
if(q==null)return r
x=q.e
if(x===C.ac2){x=q.a
w=A.iS(r,r,C.hF,0,C.bG,q.b,r,0,1,r,C.aj,x,!1)
for(q=w.a,q=q.gaa(q);q.q();){v=q.gM(q)
if(s.WE()==="1")v.l9(1,1,1)
else v.l9(0,0,0)}return w}else if(x===C.ac3||x===C.HD){u=s.Og()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.iS(r,r,s.aIb(u),0,C.bG,q,r,0,1,r,C.aj,x,!1)
for(q=w.a,q=q.gaa(q);q.q();){v=q.gM(q)
t=s.Yc(s.a.e,u)
v.l9(t,t,t)}return w}else if(x===C.ac4||x===C.HE){u=s.Og()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.iS(r,r,s.aIb(u),0,C.bG,q,r,0,3,r,C.aj,x,!1)
for(q=w.a,q=q.gaa(q);q.q();)q.gM(q).l9(s.Yc(s.a.e,u),s.Yc(s.a.e,u),s.Yc(s.a.e,u))
return w}return r},
aIb(d){if(d>255)return C.cX
if(d>15)return C.aj
if(d>3)return C.iv
if(d>1)return C.iu
return C.hF},
Yc(d,e){if(d===C.HD||d===C.HE)return this.b.cD()
return this.Og()},
Og(){var x,w,v=this.WE()
if(J.bl(v)===0)return 0
try{x=B.d8(v,null)
return x}catch(w){return 0}},
WE(){var x,w,v,u,t=this.b
if(t==null)return""
x=this.c
if(x.length!==0)return D.b.fE(x,0)
w=D.d.bi(t.bXs())
if(w.length===0)return""
for(;D.d.b9(w,"#");)w=D.d.bi(this.b.aMn(70))
t=y.U
v=B.A(new B.a7(B.a(w.split(" "),y.T),new A.bIj(),t),t.i("x.E"))
for(t=v.length,u=0;u<t;++u)if(D.d.b9(v[u],"#")){D.b.sA(v,u)
break}D.b.E(x,v)
if(x.length===0)return""
return D.b.fE(x,0)}}
A.aDK.prototype={}
A.aDL.prototype={}
A.yA.prototype={}
A.aDN.prototype={}
A.aDO.prototype={}
A.aDR.prototype={}
A.aDS.prototype={}
A.a83.prototype={}
A.aDQ.prototype={
gcA(d){return this.c}}
A.bJm.prototype={
b1u(d){var x,w,v,u,t=this
d.av()
d.av()
d.av()
d.av()
x=D.c.aL(d.c-d.d,8)
if(x>0){t.e=new Uint16Array(x)
t.f=new Uint16Array(x)
t.r=new Uint16Array(x)
t.w=new Uint16Array(x)
for(w=0;w<x;++w){v=t.e
u=d.av()
v.$flags&2&&B.L(v)
v[w]=u
u=t.f
v=d.av()
u.$flags&2&&B.L(u)
u[w]=v
v=t.r
u=d.av()
v.$flags&2&&B.L(v)
v[w]=u
u=t.w
v=d.av()
u.$flags&2&&B.L(u)
u[w]=v}}}}
A.Uz.prototype={
aMm(d,e,f,g,h,i,j){if(d.c-d.d<2)return
if(h==null)h=d.av()
switch(h){case 0:g.toString
this.buh(d,e,f,g)
break
case 1:if(i==null)i=this.bue(d,f)
g.toString
this.bug(d,e,f,g,i,j)
break
default:throw B.p(A.co("Unsupported compression: "+h))}},
bXr(d,e,f,g){return this.aMm(d,e,f,g,null,null,0)},
bue(d,e){var x,w=new Uint16Array(e)
for(x=0;x<e;++x)w[x]=d.av()
return w},
buh(d,e,f,g){var x,w=e*f
if(g===16)w*=2
if(w>d.c-d.d){x=new Uint8Array(w)
this.c=x
D.H.mw(x,0,w,255)
return}this.c=d.jN(w).ik()},
bug(d,e,f,g,h,i){var x,w,v,u,t,s,r=e*f
if(g===16)r*=2
x=new Uint8Array(r)
this.c=x
w=i*f
if(w>=h.length){D.H.mw(x,0,r,255)
return}for(v=0,u=0;u<f;++u,w=t){t=w+1
s=d.jS(h[w])
d.d=d.d+(s.c-s.d)
x=this.c
x.toString
this.b83(s,x,v)
v+=e}},
b83(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=e.$flags|0,v=e.length;u=d.d,u<x;){t=d.a
d.d=u+1
u=J.v(t,u)
t=$.oR()
t.$flags&2&&B.L(t)
t[0]=u
s=$.pU()[0]
if(s<0){s=1-s
u=d.d
if(u>=x)break
t=d.a
d.d=u+1
r=J.v(t,u)
if(f+s>v)s=v-f
for(q=0;q<s;++q,f=p){p=f+1
w&2&&B.L(e)
e[f]=r}}else{++s
if(f+s>v)s=v-f
s=Math.min(s,x-d.d)
for(q=0;q<s;++q,f=p){p=f+1
u=J.v(d.a,d.d++)
w&2&&B.L(e)
e[f]=u}}}},
gbb(d){return this.a}}
A.wp.prototype={
J(){return"PsdColorMode."+this.b}}
A.bJo.prototype={
b1v(d){var x,w,v=this
v.as=A.dg(d,!0,null,0)
v.btJ()
if(v.c!==943870035)return
x=v.as.ag()
v.as.jN(x)
x=v.as.ag()
v.at=v.as.jN(x)
x=v.as.ag()
v.ax=v.as.jN(x)
w=v.as
v.ay=w.jN(w.c-w.d)},
oY(d){var x,w=this
if(w.c===943870035){x=w.as
x===$&&B.b()
x=x==null}else x=!0
if(x)return!1
w.buc()
w.bud()
w.buf()
w.ay=w.ax=w.at=w.as=null
return!0},
aGy(){if(!this.oY(0))return null
return this.bY2()},
bY2(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.y
if(d!=null)return d
d=f.a
d=A.iS(e,e,C.aj,0,C.bG,f.b,e,0,4,e,C.aj,d,!1)
f.y=d
d.W(0)
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
if(m==null)m=new A.h0()
l=D.e.L(m.gar(m))
k=D.e.L(m.gaE())
j=D.e.L(m.gaF(m))
i=D.e.L(m.gaU(m))
p.toString
if(p>=0&&p<f.a&&d&&s<f.b){n=w.b
n.toString
h=f.y.a
g=h==null?e:h.er(n+o,q,e)
if(g==null)g=new A.h0()
f.b3w(D.e.L(g.gar(g)),D.e.L(g.gaE()),D.e.L(g.gaF(g)),D.e.L(g.gaU(g)),l,k,j,i,u,v,g)}++o;++p}++r;++s}}++x}d=f.y
d.toString
return d},
b3w(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s=k/255*m
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
case 1768188278:u=A.bJp(d,h)
v=A.bJp(e,i)
w=A.bJp(f,j)
x=k
break
case 1818391150:u=A.bJr(d,h)
v=A.bJr(e,i)
w=A.bJr(f,j)
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
case 1935897198:u=A.cYr(d,h)
v=A.cYr(e,i)
w=A.cYr(f,j)
x=k
break
case 1684633120:u=A.bJq(d,h)
v=A.bJq(e,i)
w=A.bJq(f,j)
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
case 1870030194:u=A.cYp(d,h,g,k)
v=A.cYp(e,i,g,k)
w=A.cYp(f,j,g,k)
x=k
break
case 1934387572:u=A.cYs(d,h)
v=A.cYs(e,i)
w=A.cYs(f,j)
x=k
break
case 1749838196:u=A.cYn(d,h)
v=A.cYn(e,i)
w=A.cYn(f,j)
x=k
break
case 1984719220:u=A.cYt(d,h)
v=A.cYt(e,i)
w=A.cYt(f,j)
x=k
break
case 1816947060:u=A.cYo(d,h)
v=A.cYo(e,i)
w=A.cYo(f,j)
x=k
break
case 1884055924:u=A.cYq(d,h)
v=A.cYq(e,i)
w=A.cYq(f,j)
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
case 1936553316:u=A.cYm(d,h)
v=A.cYm(e,i)
w=A.cYm(f,j)
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
btJ(){var x,w,v=this,u=v.as
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
v.r=C.aRX[v.as.av()]},
buc(){var x,w,v,u,t,s,r=this,q=r.at
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
if(w===943868237)q.m(0,v,new A.aDM(v,t))}},
bud(){var x,w,v,u,t,s,r,q,p,o=this,n=o.ax
n.d=n.b
x=n.ag()
if((x&1)!==0)++x
w=o.ax.jN(x)
n=y.l
o.w=B.a([],n)
if(x>0){v=w.av()
u=$.oQ()
u.$flags&2&&B.L(u)
u[0]=v
t=$.pT()[0]
if(t<0)t=-t
for(v=y.N,u=y.O,s=y.u,r=0;r<t;++r){q=new A.aDP(B.I(v,u),B.a([],n),B.a([],s))
q.b1w(w)
o.w.push(q)}}for(r=0;n=o.w,r<n.length;++r)n[r].bXk(w,o)
x=o.ax.ag()
p=o.ax.jN(x)
if(x>0){p.av()
p.av()
p.av()
p.av()
p.av()
p.av()
p.cD()}},
buf(){var x,w,v,u,t,s,r=this,q=r.ay
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
s=new A.Uz(s)
s.aMm(w,r.a,r.b,r.f,x,u,t)
q.push(s);++t}r.y=A.d9k(r.r,r.f,r.a,r.b,r.x)}}
A.aDM.prototype={
gbb(d){return this.a}}
A.aDP.prototype={
b1w(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=a1.ag(),a0=$.iy()
a0.$flags&2&&B.L(a0)
a0[0]=d
d=$.lX()
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
a0=$.oQ()
a0.$flags&2&&B.L(a0)
a0[0]=d
v=$.pT()[0]
a1.ag()
e.as.push(new A.Uz(v))}u=a1.ag()
if(u!==943868237)throw B.p(A.co("Invalid PSD layer signature: "+D.c.jQ(u,16)))
e.r=a1.ag()
e.w=a1.cD()
a1.cD()
e.y=a1.cD()
if(a1.cD()!==0)throw B.p(A.co("Invalid PSD layer data"))
t=a1.ag()
s=a1.jN(t)
if(t>0){t=s.ag()
if(t>0){r=s.jN(t)
d=r.d
r.ag()
r.ag()
r.ag()
r.ag()
r.cD()
r.cD()
if(r.c-d===20)r.d+=2
else{r.cD()
r.cD()
r.ag()
r.ag()
r.ag()
r.ag()}}t=s.ag()
if(t>0)new A.bJm().b1u(s.jN(t))
t=s.cD()
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
a0.m(0,n,A.dBI(n,m))
if(n==="lrFX"){k=A.ct(o.a(a0.h(0,"lrFX")).b,null,0)
k.av()
j=k.av()
for(i=0;i<j;++i){k.jO(4)
h=k.jO(4)
g=k.ag()
if(h==="dsdw"){f=new A.aDL()
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
k.av()}else if(h==="isdw"){f=new A.aDO()
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
k.av()}else if(h==="oglw"){f=new A.aDR()
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
k.av()}}else if(h==="iglw"){f=new A.aDN()
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
k.av()}}else if(h==="bevl"){f=new A.aDK()
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
k.av()}}else if(h==="sofi"){f=new A.aDS()
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
bXk(d,e){var x,w,v,u,t,s=this,r=0
while(!0){x=s.as
x===$&&B.b()
if(!(r<x.length))break
x=x[r]
w=s.e
w===$&&B.b()
v=s.f
v===$&&B.b()
x.bXr(d,w,v,e.f);++r}w=e.r
v=e.f
u=s.e
u===$&&B.b()
t=s.f
t===$&&B.b()
s.cx=A.d9k(w,v,u,t,x)}}
A.UA.prototype={}
A.bJn.prototype={
nt(d,e,f){var x,w,v,u=null,t=A.d9j(e)
this.a=t
x=1
if(x===1){t=t.aGy()
return t}for(w=u,v=0;v<x;++v){t=this.a
f=t==null?u:t.aGy()
if(f==null)continue
if(w==null){f.w=C.ayD
w=f}else w.o6(f)}return w}}
A.aDV.prototype={}
A.Bm.prototype={
aX(d,e){return new A.Bm(this.a*e,this.b*e,this.c*e)},
ad(d,e){return new A.Bm(this.a+e.a,this.b+e.b,this.c+e.c)},
ac(d,e){return new A.Bm(this.a-e.a,this.b-e.b,this.c-e.c)}}
A.ny.prototype={
aX(d,e){var x=this
return new A.ny(x.a*e,x.b*e,x.c*e,x.d*e)},
ad(d,e){var x=this
return new A.ny(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
ac(d,e){var x=this
return new A.ny(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)}}
A.a86.prototype={
ge4(d){return this.b}}
A.UD.prototype={
ge4(d){return this.f}}
A.aDU.prototype={
ge4(d){return this.b}}
A.us.prototype={
sPO(d){var x=this.a,w=this.b
x.$flags&2&&B.L(x)
x[w+1]=d},
Tq(){var x=this.e,w=this.d
if(x)return new A.Bm(C.hU[w>>>9],C.hU[w>>>4&31],C.fP[w&15])
else return new A.Bm(C.fP[w>>>7&15],C.fP[w>>>3&15],C.yD[w&7])},
Ts(){var x=this.e,w=this.d
if(x)return new A.ny(C.hU[w>>>9],C.hU[w>>>4&31],C.fP[w&15],255)
else return new A.ny(C.fP[w>>>7&15],C.fP[w>>>3&15],C.yD[w&7],C.yD[w>>>11&7])},
Tr(){var x=this.r,w=this.f
if(x)return new A.Bm(C.hU[w>>>10],C.hU[w>>>5&31],C.hU[w&31])
else return new A.Bm(C.fP[w>>>8&15],C.fP[w>>>4&15],C.fP[w&15])},
Tt(){var x=this.r,w=this.f
if(x)return new A.ny(C.hU[w>>>10],C.hU[w>>>5&31],C.hU[w&31],255)
else return new A.ny(C.fP[w>>>8&15],C.fP[w>>>4&15],C.fP[w&15],C.yD[w>>>12&7])},
Nj(){var x=this,w=x.c?1:0,v=x.d,u=x.e?1:0,t=x.f,s=x.r?1:0
return(w|(v&16383)<<1|u<<15|(t&32767)<<16|s<<31)>>>0},
vr(d){var x=this,w=x.a[x.b+1]
x.c=(w&1)===1
x.sPO(x.Nj())
x.d=w>>>1&16383
x.sPO(x.Nj())
x.e=(w>>>15&1)===1
x.sPO(x.Nj())
x.f=w>>>16&32767
x.sPO(x.Nj())
x.r=(w>>>31&1)===1
x.sPO(x.Nj())}}
A.bJs.prototype={
pw(d){var x,w=this,v=d.length,u=v-(v>>>1&1431655765)>>>0
u=(u&858993459)+(u>>>2&858993459)
if((u+(u>>>4)>>>0&252645135)*16843009>>>0>>>24===1){x=w.b7N(d)
if(x!=null){w.a=d
return w.b=x}}x=w.b82(d)
if(x!=null){w.a=d
return w.b=x}x=w.b80(d)
if(x!=null){w.a=d
return w.b=x}return null},
b82(d){var x,w,v=A.dg(d,!1,null,0)
if(v.ag()!==52)return null
if(v.ag()!==55727696)return null
x=B.a([0,0,0,0],y.t)
w=new A.UD(x)
v.ag()
w.b=v.ag()
x[0]=v.cD()
x[1]=v.cD()
x[2]=v.cD()
x[3]=v.cD()
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
b80(d){var x,w,v=A.dg(d,!1,null,0)
if(v.ag()!==52)return null
x=new A.a86()
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
b7N(d){var x,w,v,u,t,s,r=null,q=d.length,p=A.dg(d,!1,r,0)
if(p.ag()!==0)return r
x=new A.aDU()
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
if((D.c.eB(64,s)&q)>>>0!==0){u=D.c.eB(16,t)
v=1
break}if((D.c.eB(128,s)&q)>>>0!==0){u=D.c.eB(16,t)
break}++t}if(t===10)return r}if((v+1)*2===4)return r
x.b=x.a=u
return x},
kE(d){var x,w,v=this,u=v.b
if(u==null||v.a==null)return null
if(u instanceof A.aDU){u=u.a
x=v.b
x=x.ge4(x)
w=v.a
w.toString
return v.a7J(u,x,w)}else if(u instanceof A.a86){u=v.a
u.toString
return v.b8_(u)}else if(u instanceof A.UD){u=v.a
u.toString
return v.b81(u)}return null},
nt(d,e,f){if(this.pw(e)==null)return null
return this.kE(0)},
b8_(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.length
if(j<52||l.b==null)return k
x=l.b
x.toString
y.ab.a(x)
w=A.dg(d,!1,k,0)
w.d+=52
v=x.Q
if(v<1)v=(x.d&4096)!==0?6:1
if(v!==1)return k
u=x.a
t=x.b
if(u*t*x.f/8>j-52)return k
switch(x.d&255){case 16:s=A.iS(k,k,C.aj,0,C.bG,t,k,0,4,k,C.aj,u,!1)
for(x=s.a,x=x.gaa(x);x.q();){r=x.gM(x)
q=J.v(w.a,w.d++)
p=J.v(w.a,w.d++)
r.sar(0,p&240)
r.saE((p&15)<<4)
r.saF(0,q&240)
r.saU(0,(q&15)<<4)}return s
case 17:s=A.iS(k,k,C.aj,0,C.bG,t,k,0,4,k,C.aj,u,!1)
for(x=s.a,x=x.gaa(x);x.q();){r=x.gM(x)
o=w.av()
n=(o&1)!==0?255:0
r.sar(0,o>>>8&248)
r.saE(o>>>3&248)
r.saF(0,(o&62)<<2)
r.saU(0,n)}return s
case 18:s=A.iS(k,k,C.aj,0,C.bG,t,k,0,4,k,C.aj,u,!1)
for(x=s.a,x=x.gaa(x);x.q();){r=x.gM(x)
r.sar(0,J.v(w.a,w.d++))
r.saE(J.v(w.a,w.d++))
r.saF(0,J.v(w.a,w.d++))
r.saU(0,J.v(w.a,w.d++))}return s
case 19:s=A.iS(k,k,C.aj,0,C.bG,t,k,0,3,k,C.aj,u,!1)
for(x=s.a,x=x.gaa(x);x.q();){r=x.gM(x)
o=w.av()
r.sar(0,o>>>8&248)
r.saE(o>>>3&252)
r.saF(0,(o&31)<<3)}return s
case 20:s=A.iS(k,k,C.aj,0,C.bG,t,k,0,3,k,C.aj,u,!1)
for(x=s.a,x=x.gaa(x);x.q();){r=x.gM(x)
o=w.av()
r.sar(0,(o&31)<<3)
r.saE(o>>>2&248)
r.saF(0,o>>>7&248)}return s
case 21:s=A.iS(k,k,C.aj,0,C.bG,t,k,0,3,k,C.aj,u,!1)
for(x=s.a,x=x.gaa(x);x.q();){r=x.gM(x)
r.sar(0,J.v(w.a,w.d++))
r.saE(J.v(w.a,w.d++))
r.saF(0,J.v(w.a,w.d++))}return s
case 22:s=A.iS(k,k,C.aj,0,C.bG,t,k,0,1,k,C.aj,u,!1)
for(x=s.a,x=x.gaa(x);x.q();)x.gM(x).sar(0,J.v(w.a,w.d++))
return s
case 23:s=A.iS(k,k,C.aj,0,C.bG,t,k,0,4,k,C.aj,u,!1)
for(x=s.a,x=x.gaa(x);x.q();){r=x.gM(x)
n=J.v(w.a,w.d++)
m=J.v(w.a,w.d++)
r.sar(0,m)
r.saE(m)
r.saF(0,m)
r.saU(0,n)}return s
case 24:return k
case 25:return x.y===0?l.aqN(u,t,w.ik()):l.a7J(u,t,w.ik())}return k},
b81(d){var x,w,v,u=this
if(!(u.b instanceof A.UD))return null
x=A.dg(d,!1,null,0)
w=x.d+=52
v=y.aM.a(u.b)
x.d=w+v.Q
if(v.c[0]===0)switch(v.b){case 2:return u.aqN(v.r,v.f,x.ik())
case 3:return u.a7J(v.r,v.f,x.ik())}return null},
aqN(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=A.iS(b5,b5,C.aj,0,C.bG,c6,b5,0,3,b5,C.aj,c5,!1),b7=c5/4|0,b8=b7-1,b9=J.pW(D.H.gaq(c7),0,null),c0=new A.us(b9),c1=new A.us(J.pW(D.H.gaq(c7),0,null)),c2=new A.us(J.pW(D.H.gaq(c7),0,null)),c3=new A.us(J.pW(D.H.gaq(c7),0,null)),c4=new A.us(J.pW(D.H.gaq(c7),0,null))
for(x=0,w=0;x<b7;++x,w+=4)for(v=0,u=0;v<b7;++v,u+=4){c0.b=A.Bn(v,x)<<1>>>0
c0.vr(0)
t=b9[c0.b]
s=c0.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&b8)>>>0
o=(p+1&b8)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&b8)>>>0
k=(l+1&b8)>>>0
c1.b=A.Bn(l,p)<<1>>>0
c1.vr(0)
c2.b=A.Bn(k,p)<<1>>>0
c2.vr(0)
c3.b=A.Bn(l,o)<<1>>>0
c3.vr(0)
c4.b=A.Bn(k,o)<<1>>>0
c4.vr(0)
j=c1.Tq()
i=C.e1[r][0]
h=c2.Tq()
g=C.e1[r][1]
f=c3.Tq()
e=C.e1[r][2]
d=c4.Tq()
a0=C.e1[r][3]
a1=c1.Tr()
a2=C.e1[r][0]
a3=c2.Tr()
a4=C.e1[r][1]
a5=c3.Tr()
a6=C.e1[r][2]
a7=c4.Tr()
a8=C.e1[r][3]
a9=C.V3[s+t&3]
b0=a9[0]
b1=a9[1]
b2=D.c.Z((j.a*i+h.a*g+f.a*e+d.a*a0)*b0+(a1.a*a2+a3.a*a4+a5.a*a6+a7.a*a8)*b1,7)
b3=D.c.Z((j.b*i+h.b*g+f.b*e+d.b*a0)*b0+(a1.b*a2+a3.b*a4+a5.b*a6+a7.b*a8)*b1,7)
b4=D.c.Z((j.c*i+h.c*g+f.c*e+d.c*a0)*b0+(a1.c*a2+a3.c*a4+a5.c*a6+a7.c*a8)*b1,7)
b1=b6.a
if(b1!=null)b1.fG(m+u,n,b2,b3,b4)
t=t>>>2;++r}}}return b6},
a7J(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=A.iS(a4,a4,C.aj,0,C.bG,b5,a4,0,4,a4,C.aj,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.pW(D.H.gaq(b6),0,null),a9=new A.us(a8),b0=new A.us(J.pW(D.H.gaq(b6),0,null)),b1=new A.us(J.pW(D.H.gaq(b6),0,null)),b2=new A.us(J.pW(D.H.gaq(b6),0,null)),b3=new A.us(J.pW(D.H.gaq(b6),0,null))
for(x=0,w=0;x<a6;++x,w+=4)for(v=0,u=0;v<a6;++v,u+=4){a9.b=A.Bn(v,x)<<1>>>0
a9.vr(0)
t=a8[a9.b]
s=a9.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&a7)>>>0
o=(p+1&a7)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&a7)>>>0
k=(l+1&a7)>>>0
b0.b=A.Bn(l,p)<<1>>>0
b0.vr(0)
b1.b=A.Bn(k,p)<<1>>>0
b1.vr(0)
b2.b=A.Bn(l,o)<<1>>>0
b2.vr(0)
b3.b=A.Bn(k,o)<<1>>>0
b3.vr(0)
j=b0.Ts()
i=C.e1[r][0]
h=b1.Ts()
g=C.e1[r][1]
g=new A.ny(j.a*i,j.b*i,j.c*i,j.d*i).ad(0,new A.ny(h.a*g,h.b*g,h.c*g,h.d*g))
h=b2.Ts()
i=C.e1[r][2]
i=g.ad(0,new A.ny(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.Ts()
g=C.e1[r][3]
f=i.ad(0,new A.ny(h.a*g,h.b*g,h.c*g,h.d*g))
g=b0.Tt()
h=C.e1[r][0]
i=b1.Tt()
j=C.e1[r][1]
j=new A.ny(g.a*h,g.b*h,g.c*h,g.d*h).ad(0,new A.ny(i.a*j,i.b*j,i.c*j,i.d*j))
i=b2.Tt()
h=C.e1[r][2]
h=j.ad(0,new A.ny(i.a*h,i.b*h,i.c*h,i.d*h))
i=b3.Tt()
j=C.e1[r][3]
e=h.ad(0,new A.ny(i.a*j,i.b*j,i.c*j,i.d*j))
d=C.V3[s+t&3]
j=d[0]
i=d[1]
a0=D.c.Z(f.a*j+e.a*i,7)
a1=D.c.Z(f.b*j+e.b*i,7)
a2=D.c.Z(f.c*j+e.c*i,7)
a3=D.c.Z(f.d*d[2]+e.d*d[3],7)
i=a5.a
if(i!=null)i.kR(m+u,n,a0,a1,a2,a3)
t=t>>>2;++r}}}return a5}}
A.aIr.prototype={
oy(d,e){var x,w=this
if(e.c-e.d<18)return
w.a=e.cD()
w.b=e.cD()
x=e.cD()
w.c=x<12?C.aM4[x]:C.AF
e.av()
w.e=e.av()
w.f=e.cD()
e.av()
e.av()
w.x=e.av()
w.y=e.av()
w.z=e.cD()
w.Q=e.cD()},
aJX(){var x=this,w=x.z
if(w!==8&&w!==16&&w!==24&&w!==32)return!1
w=x.c
if(w===C.ko||w===C.kp){if(x.e>256||x.b!==1)return!1
w=x.f
if(w!==16&&w!==24&&w!==32)return!1}else if(x.b===1)return!1
return!0}}
A.pD.prototype={
J(){return"TgaImageType."+this.b}}
A.bWE.prototype={
nt(d,e,f){if(this.pw(e)==null)return null
return this.kE(0)},
pw(d){var x,w,v,u,t=this
t.a=new A.aIr(C.AF)
x=A.dg(d,!1,null,0)
t.b=x
w=x.jN(18)
t.a.oy(0,w)
if(!t.a.aJX())return null
x=t.b
v=t.a
x.d+=v.a
u=v.c
if(u===C.ko||u===C.kp)v.as=x.jN(v.e*D.c.Z(v.f,3)).ik()
x=t.a
x.ax=t.b.d
return x},
kE(d){var x=this,w=x.a
if(w==null)return null
w=w.c
if(w===C.afk)return x.aqM()
else if(w===C.afj||w===C.kp)return x.b85()
else if(w===C.ko)return x.aqM()
return null},
aqH(d,e){var x,w,v,u,t,s,r,q=this,p=A.dg(d,!1,null,0),o=q.a.f
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
b85(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=h.z,f=g===16,e=f||g===32,d=h.x,a0=h.y,a1=e?4:3
h=h.c
x=A.iS(i,i,C.aj,0,C.bG,a0,i,0,a1,i,C.aj,d,h===C.ko||h===C.kp)
h=x.a
if((h==null?i:h.gf7())!=null){h=j.a.as
h.toString
d=x.a
d=d==null?i:d.gf7()
d.toString
j.aqH(h,d)}w=x.ge7(0)
v=x.ge4(0)-1
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
if(d!=null)d.nc(u,v,q)
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
if(d!=null)d.kR(u,v,q,m,l,k)
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
if(d!=null)d.kR(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}}else if(h)for(p=0;p<s;++p){d=j.b
q=J.v(d.a,d.d++)
o=u+1
d=x.a
if(d!=null)d.nc(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}else if(f)for(p=0;p<s;++p){n=j.b.av()
k=(n&32768)!==0?0:255
o=u+1
d=x.a
if(d!=null)d.kR(u,v,n>>>7&248,n>>>2&248,(n&31)<<3,k)
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
if(d!=null)d.kR(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}if(u>=w){--v
if(v<0)break
u=0}}return x},
aqM(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
g===$&&B.b()
x=i.a
g.d=x.ax
w=x.z
g=w===16
v=!0
if(!g)if(w!==32){u=x.c
if(u===C.ko||u===C.kp){u=x.f
u=u===16||u===32}else u=!1
v=u}u=x.x
t=x.y
s=v?4:3
x=x.c
r=A.iS(h,h,C.aj,0,C.bG,t,h,0,s,h,C.aj,u,x===C.ko||x===C.kp)
x=i.a
u=x.c
if(u===C.ko||u===C.kp){x=x.as
x.toString
u=r.a
u=u==null?h:u.gf7()
u.toString
i.aqH(x,u)}if(w===8)for(q=r.ge4(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
g=i.b
o=J.v(g.a,g.d++)
g=r.a
if(g!=null)g.nc(p,q,o);++p}}else if(g)for(q=r.ge4(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
n=i.b.av()
m=(n&32768)!==0?0:255
g=r.a
if(g!=null)g.kR(p,q,n>>>7&248,n>>>2&248,(n&31)<<3,m);++p}}else for(q=r.ge4(0)-1;q>=0;--q){p=0
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
if(g!=null)g.kR(p,q,j,k,l,m);++p}}return r}}
A.bXL.prototype={
jM(d){var x,w,v,u,t=this
if(d===0)return 0
if(t.c===0){t.c=8
t.b=t.a.cD()}for(x=t.a,w=0;v=t.c,d>v;){w=D.c.f9(w,v)+(t.b&C.pJ[v])
d-=v
t.c=8
t.b=J.v(x.a,x.d++)}if(d>0){if(v===0){t.c=8
t.b=x.cD()}x=D.c.f9(w,d)
v=t.b
u=t.c-d
w=x+(D.c.oH(v,u)&C.pJ[d])
t.c=u}return w}}
A.aIw.prototype={
j(d){var x=this,w=x.a,v=$.cUV().h(0,w)
if(v!=null)return v.a+": "+x.b.j(0)+" "+x.c
return"<"+w+">: "+x.b.j(0)+" "+x.c},
q4(d){var x,w,v,u=this,t=u.e
if(t!=null)return t
t=u.f
t.d=u.d
x=u.c
w=u.b
v=t.jN(x*(w!==C.aa?C.l7[w.a]:0))
switch(w.a){case 1:return u.e=new A.vX(new Uint8Array(B.c9(v.jN(x).ik())))
case 2:return u.e=new A.Ex(x===0?"":v.jO(x-1))
case 7:return u.e=new A.vX(new Uint8Array(B.c9(v.jN(x).ik())))
case 3:return u.e=A.d6L(v,x)
case 4:return u.e=A.d6G(v,x)
case 5:return u.e=A.d6H(v,x)
case 11:return u.e=A.d6N(v,x)
case 12:return u.e=A.d6F(v,x)
case 6:return u.e=new A.ya(new Int8Array(B.c9(J.cV2(D.H.gaq(v.ik()),0,x))))
case 8:return u.e=A.d6K(v,x)
case 9:return u.e=A.d6I(v,x)
case 10:return u.e=A.d6J(v,x)
case 0:return null}},
gn(d){return this.e}}
A.bXN.prototype={
bK0(d,e,f,g){var x,w,v,u=this
u.r=e
u.x=u.w=0
x=D.c.aL(u.a+7,8)
for(w=0,v=0;v<g;++v){u.a7H(d,w,f)
w+=x}},
a7H(d,e,f){var x,w,v,u,t,s,r,q,p=this
p.d=0
for(x=p.a,w=!0;f<x;){for(;w;){v=p.zJ(10)
u=C.Vv[v]
t=D.c.Z(u,1)&15
if(t===12){u=C.xd[(v<<2&12|p.pF(2))>>>0]
s=D.c.Z(u,1)
f+=D.c.Z(u,4)&4095
p.lZ(4-(s&7))}else if(t===0)throw B.p(A.co("TIFFFaxDecoder0"))
else if(t===15)throw B.p(A.co("TIFFFaxDecoder1"))
else{f+=D.c.Z(u,5)&2047
p.lZ(10-t)
if((u&1)===0){p.f[p.d++]=f
w=!1}}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}for(;!w;){u=C.QF[p.pF(4)]
r=u>>>5&2047
q=!0
if(r===100){u=C.Sa[p.zJ(9)]
t=D.c.Z(u,1)&15
r=D.c.Z(u,5)&2047
if(t===12){p.lZ(5)
u=C.xd[p.pF(4)]
s=D.c.Z(u,1)
r=D.c.Z(u,4)&4095
p.qq(d,e,f,r)
f+=r
p.lZ(4-(s&7))}else if(t===15)throw B.p(A.co("TIFFFaxDecoder2"))
else{p.qq(d,e,f,r)
f+=r
p.lZ(9-t)
if((u&1)===0){p.f[p.d++]=f
w=q}}}else{if(r===200){u=C.QA[p.pF(2)]
r=u>>>5&2047
p.qq(d,e,f,r)
f+=r
p.lZ(2-(u>>>1&15))
p.f[p.d++]=f}else{p.qq(d,e,f,r)
f+=r
p.lZ(4-(u>>>1&15))
p.f[p.d++]=f}w=q}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}}p.f[p.d++]=f},
bK1(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.r=a0
e.z=3
e.x=e.w=0
x=e.a
w=D.c.aL(x+7,8)
v=B.c2(2,null,!1,y.s)
e.at=a3&1
e.as=a3>>>2&1
if(e.axI()!==1)throw B.p(A.co("TIFFFaxDecoder3"))
e.a7H(d,0,a1)
for(u=w,t=1;t<a2;++t){if(e.axI()===0){s=e.e
e.e=e.f
e.f=s
e.y=0
r=a1
q=-1
p=!0
o=0
while(!0){r.toString
if(!(r<x))break
e.at4(q,p,v)
n=v[0]
m=v[1]
l=C.Vb[e.pF(7)]&255
k=l>>>3&15
j=l&7
if(k===0){if(!p){m.toString
e.qq(d,u,r,m-r)}e.lZ(7-j)
r=m
q=r}else if(k===1){e.lZ(7-j)
i=o+1
h=i+1
if(p){r+=e.VU()
e.f[o]=r
g=e.VT()
e.qq(d,u,r,g)
r+=g
e.f[i]=r}else{g=e.VT()
e.qq(d,u,r,g)
r+=g
e.f[o]=r
r+=e.VU()
e.f[i]=r}o=h
q=r}else{if(k<=8){n.toString
f=n+(k-5)
i=o+1
e.f[o]=f
p=!p
if(p)e.qq(d,u,r,f-r)
e.lZ(7-j)}else throw B.p(A.co("TIFFFaxDecoder4"))
r=f
o=i
q=r}}e.f[o]=r
e.d=o+1}else e.a7H(d,u,a1)
u+=w}},
bK7(a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.r=a4
a2.z=4
a2.x=a2.w=0
x=a2.a
w=D.c.aL(x+7,8)
v=B.c2(2,null,!1,y.s)
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
a2.at4(p,o,v)
m=v[0]
l=v[1]
k=C.Vb[a2.pF(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
a2.qq(a3,t,q,l-q)}a2.lZ(7-i)
q=l
p=q}else if(j===1){a2.lZ(7-i)
h=n+1
g=h+1
if(o){q+=a2.VU()
r[n]=q
f=a2.VT()
a2.qq(a3,t,q,f)
q+=f
r[h]=q}else{f=a2.VT()
a2.qq(a3,t,q,f)
q+=f
r[n]=q
q+=a2.VU()
r[h]=q}n=g
p=q}else if(j<=8){m.toString
e=m+(j-5)
h=n+1
r[n]=e
o=!o
if(o)a2.qq(a3,t,q,e-q)
a2.lZ(7-i)
q=e
n=h
p=q}else if(j===11){if(a2.pF(3)!==7)throw B.p(A.co("TIFFFaxDecoder5"))
for(d=0,a0=!1;!a0;o=a1){for(;a2.pF(1)!==1;)++d
if(d>5){d-=6
if(!o&&d>0){h=n+1
r[n]=q
n=h}q+=d
if(d>0)o=!0
a1=a2.pF(1)===0
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
a2.qq(a3,t,q,1);++q
n=h}}}else throw B.p(A.co("TIFFFaxDecoder5 "+j))}r[n]=q
a2.d=n+1
t+=w}},
VU(){var x,w,v,u,t,s,r=this
for(x=0,w=!0;w;){v=r.zJ(10)
u=C.Vv[v]
t=D.c.Z(u,1)&15
if(t===12){u=C.xd[(v<<2&12|r.pF(2))>>>0]
s=D.c.Z(u,1)
x+=D.c.Z(u,4)&4095
r.lZ(4-(s&7))}else if(t===0)throw B.p(A.co("TIFFFaxDecoder0"))
else if(t===15)throw B.p(A.co("TIFFFaxDecoder1"))
else{x+=D.c.Z(u,5)&2047
r.lZ(10-t)
if((u&1)===0)w=!1}}return x},
VT(){var x,w,v,u,t,s,r=this
for(x=0,w=!1;!w;){v=C.QF[r.pF(4)]
u=v>>>5&2047
if(u===100){v=C.Sa[r.zJ(9)]
t=D.c.Z(v,1)&15
s=D.c.Z(v,5)
if(t===12){r.lZ(5)
v=C.xd[r.pF(4)]
s=D.c.Z(v,1)
x+=D.c.Z(v,4)&4095
r.lZ(4-(s&7))}else if(t===15)throw B.p(A.co("TIFFFaxDecoder2"))
else{x+=s&2047
r.lZ(9-t)
if((v&1)===0)w=!0}}else{if(u===200){v=C.QA[r.pF(2)]
x+=v>>>5&2047
r.lZ(2-(v>>>1&15))}else{x+=u
r.lZ(4-(v>>>1&15))}w=!0}}return x},
axI(){var x,w,v=this,u="TIFFFaxDecoder8",t=v.as
if(t===0){if(v.zJ(12)!==1)throw B.p(A.co("TIFFFaxDecoder6"))}else if(t===1){t=v.w
t.toString
x=8-t
if(v.zJ(x)!==0)throw B.p(A.co(u))
if(x<4)if(v.zJ(8)!==0)throw B.p(A.co(u))
for(;w=v.zJ(8),w!==1;)if(w!==0)throw B.p(A.co(u))}if(v.at===0)return 1
else return v.pF(1)},
at4(d,e,f){var x,w=this,v=w.e,u=w.d,t=w.y,s=t>0?t-1:0
s=e?(s&4294967294)>>>0:(s|1)>>>0
for(x=s;x<u;x+=2){t=v[x]
t.toString
d.toString
if(t>d){w.y=x
f[0]=t
break}}t=x+1
if(t<u)f[1]=v[t]},
qq(d,e,f,g){var x,w,v,u,t,s=8*e+f,r=s+g,q=D.c.Z(s,3),p=s&7
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
zJ(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.r
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
r=C.nf[J.v(j.a,x+v)&255]
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=C.nf[J.v(u,x+j)&255]
else{t=C.nf[J.v(u,x+j)&255]
j=k.r
s=C.nf[J.v(j.a,j.d+(v+2))&255]}}}else throw B.p(A.co("TIFFFaxDecoder7"))
j=k.w
j.toString
q=8-j
p=d-q
if(p>8){o=p-8
n=8}else{n=p
o=0}j=k.x
j.toString
j=k.x=j+1
m=D.c.f9(r&C.pJ[q],p)
l=D.c.ht(t&C.FK[n],8-n)
if(o!==0){l=D.c.f9(l,o)|D.c.ht(s&C.FK[o],8-o)
k.x=j+1
k.w=o}else if(n===8){k.w=0
k.x=j+1}else k.w=n
return(m|l)>>>0},
pF(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.r
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
s=C.nf[J.v(m.a,x+v)&255]
if(!(v===w)){m=n.r
t=C.nf[J.v(m.a,m.d+(v+1))&255]}}else throw B.p(A.co("TIFFFaxDecoder7"))
m=n.w
m.toString
r=8-m
q=d-r
p=r-d
if(p>=0){o=D.c.ht(s&C.pJ[r],p)
m+=d
n.w=m
if(m===8){n.w=0
m=n.x
m.toString
n.x=m+1}}else{o=(D.c.f9(s&C.pJ[r],-p)|D.c.ht(t&C.FK[q],8-q))>>>0
m=n.x
m.toString
n.x=m+1
n.w=q}return o},
lZ(d){var x,w=this,v=w.w
v.toString
x=v-d
if(x<0){v=w.x
v.toString
w.x=v-1
w.w=8+x}else w.w=x}}
A.aIx.prototype={
b1K(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.ct(d,g,0),e=d.av()
for(x=h.a,w=0;w<e;++w){v=d.av()
u=d.av()
t=C.Tg[u]
s=C.l7[u]
r=d.ag()
if(r*s>4)q=d.ag()
else{q=d.d
d.d=q+4}p=new A.aIw(v,t,r,q,f)
x.m(0,v,p)
if(v===256){o=p.q4(0)
o=o==null?g:o.L(0)
h.b=o==null?0:o}else if(v===257){o=p.q4(0)
o=o==null?g:o.L(0)
h.c=o==null?0:o}else if(v===262){n=p.q4(0)
m=n==null?g:n.L(0)
if(m==null)m=17
if(m<17)h.d=C.aKr[m]
else h.d=C.Jp}else if(v===259){o=p.q4(0)
o=o==null?g:o.L(0)
h.e=o==null?0:o}else if(v===258){o=p.q4(0)
o=o==null?g:o.L(0)
h.f=o==null?0:o}else if(v===277){o=p.q4(0)
o=o==null?g:o.L(0)
h.r=o==null?0:o}else if(v===317){o=p.q4(0)
o=o==null?g:o.L(0)
h.Q=o==null?0:o}else if(v===339){o=p.q4(0)
n=o==null?g:o.L(0)
h.x=C.aKZ[n==null?0:n]}else if(v===320){n=p.q4(0)
if(n!=null){o=J.dnu(D.H.gaq(n.uR()))
h.id=o
h.k1=0
o=o.length/3|0
h.k2=o
h.k3=o*2}}}o=h.id
l=o!=null
if(l&&h.d===C.Jq)h.r=1
if(h.b===0||h.c===0)return
if(l&&h.f===8){k=o.length
for(l=o.$flags|0,w=0;w<k;++w){j=o[w]
l&2&&B.L(o)
o[w]=j>>>8}}if(h.d===C.Jo)h.z=!0
h.w=h.r
if(x.a4(0,324)){h.ay=h.Hf(322)
h.ch=h.Hf(323)
h.CW=h.Yb(324)
h.cx=h.Yb(325)}else{h.ay=h.Ya(322,h.b)
if(!x.a4(0,278))h.ch=h.Ya(323,h.c)
else{i=h.Hf(278)
if(i===-1)h.ch=h.c
else h.ch=i}h.CW=h.Yb(273)
h.cx=h.Yb(279)}o=h.b
l=h.ay
h.cy=D.c.hS(o+l-1,l)
o=h.c
j=h.ch
h.db=D.c.hS(o+j-1,j)
h.dx=l*j*h.r
h.dy=h.Ya(266,1)
h.fr=h.Hf(292)
h.fx=h.Hf(293)
h.Hf(338)
switch(h.d.a){case 0:case 1:x=h.f
if(x===1&&h.r===1)h.y=C.Jn
else if(x===4&&h.r===1)h.y=C.bLH
else if(D.c.au(x,8)===0){x=h.r
if(x===1)h.y=C.bLI
else if(x===2)h.y=C.bLJ
else h.y=C.qR}break
case 2:if(D.c.au(h.f,8)===0){x=h.r
if(x===3)h.y=C.afm
else if(x===4)h.y=C.bLL
else h.y=C.qR}break
case 3:x=!1
if(h.r===1)if(h.id!=null){x=h.f
x=x===4||x===8||x===16}if(x)h.y=C.bLK
break
case 4:if(h.f===1&&h.r===1)h.y=C.Jn
break
case 6:if(h.e===7&&h.f===8&&h.r===3)h.y=C.afm
else{if(x.a4(0,530)){n=x.h(0,530).q4(0)
h.as=n.L(0)
x=h.at=n.jP(0,1)}else x=h.at=h.as=2
o=h.as
o===$&&B.b()
if(o*x===1)h.y=C.qR
else if(h.f===8&&h.r===3)h.y=C.bLM}break
case 5:if(D.c.au(h.f,8)===0)h.y=C.qR
x=h.r
if(x===4)h.w=3
else if(x===5)h.w=4
break
default:if(D.c.au(h.f,8)===0)h.y=C.qR
break}},
dh(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.x,d=e===C.qQ,a0=e===C.bv
e=g.f
if(e===1)x=C.hF
else if(e===2)x=C.iu
else{if(e===4)e=C.iv
else if(d&&e===16)e=C.jk
else if(d&&e===32)e=C.kV
else if(d&&e===64)e=C.mB
else if(a0&&e===8)e=C.mC
else if(a0&&e===16)e=C.mD
else if(a0&&e===32)e=C.mE
else if(e===16)e=C.cX
else e=e===32?C.kW:C.aj
x=e}w=g.id!=null&&g.d===C.Jq
v=w?3:g.w
e=g.b
u=A.iS(f,f,x,0,C.bG,g.c,f,0,v,f,x,e,w)
if(w){e=u.a
e=e==null?f:e.gf7()
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
e.qb(k,t[l],t[m],t[n])}}j=0
i=0
while(!0){e=g.db
e===$&&B.b()
if(!(j<e))break
h=0
while(!0){e=g.cy
e===$&&B.b()
if(!(h<e))break
g.b86(a2,u,h,j);++h;++i}++j}return u},
b86(b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null
if(a8.y===C.Jn){a8.b7Q(b0,b1,b2,b3)
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
else if(u===5){w=A.dg(new Uint8Array(p),!1,a9,0)
v=A.d7P()
try{J.dny(v,A.ct(b0,x,0),w.a)}catch(o){}if(a8.Q===2)for(n=0;n<a8.ch;++n){m=a8.r
u=a8.ay
l=m*(n*u+1)
k=u*m
for(;m<k;++m){u=w
r=J.v(u.a,u.d+l)
j=w
i=a8.r
i=J.v(j.a,j.d+(l-i))
J.bZ(u.a,u.d+l,r+i);++l}}}else if(u===32773){w=A.dg(new Uint8Array(p),!1,a9,0)
a8.aqL(b0,p,w.a)}else if(u===32946)w=A.dg(C.kH.DJ(b0.KY(0,0,x)),!1,a9,0)
else if(u===8)w=A.dg(C.kH.DJ(b0.KY(0,0,x)),!1,a9,0)
else if(u===6){a8.bmk(new A.ayn().dh(0,y.D.a(b0.KY(0,0,x))),b1,s,q,a8.ay,a8.ch)
return}else throw B.p(A.co("Unsupported Compression Type: "+u))
h=B.a([0,0,0],y.t)
for(g=q,f=0;f<a8.ch;++f,++g)for(e=s,d=0;d<a8.ay;++d,++e){u=w
if(u.d>=u.c||e>=a8.b||g>=a8.c)break
u=a8.r
if(u===1){u=a8.x
if(u===C.qQ){u=a8.f
if(u===32){u=w.ag()
r=$.iy()
r.$flags&2&&B.L(r)
r[0]=u
a0=$.Ic()[0]}else if(u===64)a0=w.a3w()
else if(u===16){u=w.av()
r=$.iR
a0=(r!=null?r:A.jH())[u]}else a0=0
if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.nc(e,g,a0)}}else{r=a8.f
if(r===8)if(u===C.bv){u=w
u=J.v(u.a,u.d++)
r=$.oR()
r.$flags&2&&B.L(r)
r[0]=u
a0=$.pU()[0]}else{u=w
a0=J.v(u.a,u.d++)}else if(r===16)if(u===C.bv){u=w.av()
r=$.oQ()
r.$flags&2&&B.L(r)
r[0]=u
a0=$.pT()[0]}else a0=w.av()
else if(r===32)if(u===C.bv){u=w.ag()
r=$.iy()
r.$flags&2&&B.L(r)
r[0]=u
a0=$.lX()[0]}else a0=w.ag()
else a0=0
if(a8.d===C.Jo){u=b1.a
a1=u==null?a9:u.gcr()
a0=(a1==null?0:a1)-a0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.nc(e,g,a0)}}}else if(u===2){u=a8.f
if(u===8){if(a8.x===C.bv){u=w
u=J.v(u.a,u.d++)
r=$.oR()
r.$flags&2&&B.L(r)
r[0]=u
a2=$.pU()[0]}else{u=w
a2=J.v(u.a,u.d++)}if(a8.x===C.bv){u=w
u=J.v(u.a,u.d++)
r=$.oR()
r.$flags&2&&B.L(r)
r[0]=u
a3=$.pU()[0]}else{u=w
a3=J.v(u.a,u.d++)}}else if(u===16){if(a8.x===C.bv){u=w.av()
r=$.oQ()
r.$flags&2&&B.L(r)
r[0]=u
a2=$.pT()[0]}else a2=w.av()
if(a8.x===C.bv){u=w.av()
r=$.oQ()
r.$flags&2&&B.L(r)
r[0]=u
a3=$.pT()[0]}else a3=w.av()}else if(u===32){if(a8.x===C.bv){u=w.ag()
r=$.iy()
r.$flags&2&&B.L(r)
r[0]=u
a2=$.lX()[0]}else a2=w.ag()
if(a8.x===C.bv){u=w.ag()
r=$.iy()
r.$flags&2&&B.L(r)
r[0]=u
a3=$.lX()[0]}else a3=w.ag()}else{a2=0
a3=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.fG(e,g,a2,a3,0)}}else if(u===3){u=a8.x
if(u===C.qQ){u=a8.f
if(u===32){u=w.ag()
r=$.iy()
r.$flags&2&&B.L(r)
r[0]=u
u=$.Ic()
a4=u[0]
r[0]=w.ag()
a5=u[0]
r[0]=w.ag()
a6=u[0]}else{a5=0
a6=0
if(u===64)a4=w.a3w()
else if(u===16){u=w.av()
r=$.iR
a4=(r!=null?r:A.jH())[u]
u=w.av()
r=$.iR
a5=(r!=null?r:A.jH())[u]
u=w.av()
r=$.iR
a6=(r!=null?r:A.jH())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.fG(e,g,a4,a5,a6)}}else{r=a8.f
if(r===8){if(u===C.bv){u=w
u=J.v(u.a,u.d++)
r=$.oR()
r.$flags&2&&B.L(r)
r[0]=u
a4=$.pU()[0]}else{u=w
a4=J.v(u.a,u.d++)}if(a8.x===C.bv){u=w
u=J.v(u.a,u.d++)
r=$.oR()
r.$flags&2&&B.L(r)
r[0]=u
a5=$.pU()[0]}else{u=w
a5=J.v(u.a,u.d++)}if(a8.x===C.bv){u=w
u=J.v(u.a,u.d++)
r=$.oR()
r.$flags&2&&B.L(r)
r[0]=u
a6=$.pU()[0]}else{u=w
a6=J.v(u.a,u.d++)}}else if(r===16){if(u===C.bv){u=w.av()
r=$.oQ()
r.$flags&2&&B.L(r)
r[0]=u
a4=$.pT()[0]}else a4=w.av()
if(a8.x===C.bv){u=w.av()
r=$.oQ()
r.$flags&2&&B.L(r)
r[0]=u
a5=$.pT()[0]}else a5=w.av()
if(a8.x===C.bv){u=w.av()
r=$.oQ()
r.$flags&2&&B.L(r)
r[0]=u
a6=$.pT()[0]}else a6=w.av()}else if(r===32){if(u===C.bv){u=w.ag()
r=$.iy()
r.$flags&2&&B.L(r)
r[0]=u
a4=$.lX()[0]}else a4=w.ag()
if(a8.x===C.bv){u=w.ag()
r=$.iy()
r.$flags&2&&B.L(r)
r[0]=u
a5=$.lX()[0]}else a5=w.ag()
if(a8.x===C.bv){u=w.ag()
r=$.iy()
r.$flags&2&&B.L(r)
r[0]=u
a6=$.lX()[0]}else a6=w.ag()}else{a4=0
a5=0
a6=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.fG(e,g,a4,a5,a6)}}}else if(u>=4)if(a8.x===C.qQ){u=a8.f
if(u===32){u=w.ag()
r=$.iy()
r.$flags&2&&B.L(r)
r[0]=u
u=$.Ic()
a4=u[0]
r[0]=w.ag()
a5=u[0]
r[0]=w.ag()
a6=u[0]
r[0]=w.ag()
a7=u[0]}else{a5=0
a6=0
a7=0
if(u===64)a4=w.a3w()
else if(u===16){u=w.av()
r=$.iR
a4=(r!=null?r:A.jH())[u]
u=w.av()
r=$.iR
a5=(r!=null?r:A.jH())[u]
u=w.av()
r=$.iR
a6=(r!=null?r:A.jH())[u]
u=w.av()
r=$.iR
a7=(r!=null?r:A.jH())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.kR(e,g,a4,a5,a6,a7)}}else{u=b1.a
a3=u==null?a9:u.gcr()
if(a3==null)a3=0
u=a8.f
if(u===8){if(a8.x===C.bv){u=w
u=J.v(u.a,u.d++)
r=$.oR()
r.$flags&2&&B.L(r)
r[0]=u
a4=$.pU()[0]}else{u=w
a4=J.v(u.a,u.d++)}if(a8.x===C.bv){u=w
u=J.v(u.a,u.d++)
r=$.oR()
r.$flags&2&&B.L(r)
r[0]=u
a5=$.pU()[0]}else{u=w
a5=J.v(u.a,u.d++)}if(a8.x===C.bv){u=w
u=J.v(u.a,u.d++)
r=$.oR()
r.$flags&2&&B.L(r)
r[0]=u
a6=$.pU()[0]}else{u=w
a6=J.v(u.a,u.d++)}if(a8.x===C.bv){u=w
u=J.v(u.a,u.d++)
r=$.oR()
r.$flags&2&&B.L(r)
r[0]=u
a7=$.pU()[0]}else{u=w
a7=J.v(u.a,u.d++)}if(a8.r===5)if(a8.x===C.bv){u=w
u=J.v(u.a,u.d++)
r=$.oR()
r.$flags&2&&B.L(r)
r[0]=u
a3=$.pU()[0]}else{u=w
a3=J.v(u.a,u.d++)}}else if(u===16){if(a8.x===C.bv){u=w.av()
r=$.oQ()
r.$flags&2&&B.L(r)
r[0]=u
a4=$.pT()[0]}else a4=w.av()
if(a8.x===C.bv){u=w.av()
r=$.oQ()
r.$flags&2&&B.L(r)
r[0]=u
a5=$.pT()[0]}else a5=w.av()
if(a8.x===C.bv){u=w.av()
r=$.oQ()
r.$flags&2&&B.L(r)
r[0]=u
a6=$.pT()[0]}else a6=w.av()
if(a8.x===C.bv){u=w.av()
r=$.oQ()
r.$flags&2&&B.L(r)
r[0]=u
a7=$.pT()[0]}else a7=w.av()
if(a8.r===5)if(a8.x===C.bv){u=w.av()
r=$.oQ()
r.$flags&2&&B.L(r)
r[0]=u
a3=$.pT()[0]}else a3=w.av()}else if(u===32){if(a8.x===C.bv){u=w.ag()
r=$.iy()
r.$flags&2&&B.L(r)
r[0]=u
a4=$.lX()[0]}else a4=w.ag()
if(a8.x===C.bv){u=w.ag()
r=$.iy()
r.$flags&2&&B.L(r)
r[0]=u
a5=$.lX()[0]}else a5=w.ag()
if(a8.x===C.bv){u=w.ag()
r=$.iy()
r.$flags&2&&B.L(r)
r[0]=u
a6=$.lX()[0]}else a6=w.ag()
if(a8.x===C.bv){u=w.ag()
r=$.iy()
r.$flags&2&&B.L(r)
r[0]=u
a7=$.lX()[0]}else a7=w.ag()
if(a8.r===5)if(a8.x===C.bv){u=w.ag()
r=$.iy()
r.$flags&2&&B.L(r)
r[0]=u
a3=$.lX()[0]}else a3=w.ag()}else{a4=0
a5=0
a6=0
a7=0}if(a8.d===C.afn){A.dfR(a4,a5,a6,a7,h)
a4=h[0]
a5=h[1]
a6=h[2]
a7=a3}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.kR(e,g,a4,a5,a6,a7)}}}}else throw B.p(A.co("Unsupported bitsPerSample: "+u))},
bmk(d,e,f,g,h,i){var x,w,v,u
for(x=0;x<i;++x)for(w=x+g,v=0;v<h;++v){u=d.a
u=u==null?null:u.er(v,x,null)
if(u==null)u=new A.h0()
e.BN(v+f,w,u)}},
b7Q(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.cy
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
if(r===32773){q=D.c.au(a2,8)===0?D.c.aL(a2,8)*u:(D.c.aL(a2,8)+1)*u
x=A.dg(new Uint8Array(a2*u),!1,a1,0)
a0.aqL(a3,q,x.a)}else if(r===5){x=A.dg(new Uint8Array(a2*u),!1,a1,0)
A.d7P().IL(0,A.ct(a3,s,0),x.a)
if(a0.Q===2)for(p=0;p<a0.c;++p){o=a0.r
n=o*(p*a0.b+1)
for(;o<a0.b*a0.r;++o){a2=x
u=J.v(a2.a,a2.d+n)
r=x
m=a0.r
m=J.v(r.a,r.d+(n-m))
J.bZ(a2.a,a2.d+n,u+m);++n}}}else if(r===2){x=A.dg(new Uint8Array(a2*u),!1,a1,0)
try{A.cZi(a0.dy,a0.ay,a0.ch).bK0(x,a3,0,a0.ch)}catch(l){}}else if(r===3){x=A.dg(new Uint8Array(a2*u),!1,a1,0)
try{A.cZi(a0.dy,a0.ay,a0.ch).bK1(x,a3,0,a0.ch,a0.fr)}catch(l){}}else if(r===4){x=A.dg(new Uint8Array(a2*u),!1,a1,0)
try{A.cZi(a0.dy,a0.ay,a0.ch).bK7(x,a3,0,a0.ch,a0.fx)}catch(l){}}else if(r===8)x=A.dg(C.kH.DJ(a3.KY(0,0,s)),!1,a1,0)
else if(r===32946)x=A.dg(C.kH.DJ(a3.KY(0,0,s)),!1,a1,0)
else if(r===1)x=a3
else throw B.p(A.co("Unsupported Compression Type: "+r))
k=new A.bXL(x)
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
if(a2===0){if(u!=null)u.fG(e,g,i,0,0)}else if(u!=null)u.fG(e,g,h,0,0)}k.c=0}},
aqL(d,e,f){var x,w,v,u,t,s,r,q,p,o
for(x=J.cR(f),w=0,v=0;v<e;){u=w+1
t=J.v(d.a,d.d+w)
s=$.oR()
s.$flags&2&&B.L(s)
s[0]=t
r=$.pU()[0]
if(r>=0&&r<=127)for(t=r+1,w=u,q=0;q<t;++q,v=p,w=u){p=v+1
u=w+1
x.m(f,v,J.v(d.a,d.d+w))}else{t=r<=-1&&r>=-127
w=u+1
if(t){o=J.v(d.a,d.d+u)
for(t=-r+1,q=0;q<t;++q,v=p){p=v+1
x.m(f,v,o)}}}}},
Ya(d,e){var x=this.a
if(!x.a4(0,d))return e
x=x.h(0,d).q4(0)
x=x==null?null:x.L(0)
return x==null?0:x},
Hf(d){return this.Ya(d,0)},
Yb(d){var x,w=this.a
if(!w.a4(0,d))return null
x=w.h(0,d)
w=x.q4(0)
w.toString
return B.ql(x.c,w.gyG(w),!0,y.p)}}
A.Nx.prototype={
J(){return"TiffFormat."+this.b}}
A.lN.prototype={
J(){return"TiffPhotometricType."+this.b}}
A.uP.prototype={
J(){return"TiffImageType."+this.b}}
A.bXO.prototype={}
A.bza.prototype={
IL(d,e,f){var x,w,v,u,t,s,r=this
r.r=f
x=J.bl(f)
r.w=0
w=y.D.a(e.a)
r.e=w
r.f=w.length
r.b=e.d
if(w[0]===0&&w[1]===1)throw B.p(A.co("Invalid LZW Data"))
r.auW()
r.d=r.c=0
v=r.a8s()
w=r.x
u=0
while(!0){if(!(v!==257&&r.w<x))break
if(v===256){r.auW()
v=r.a8s()
r.as=0
if(v===257)break
J.bZ(r.r,r.w++,v)
u=v}else{t=r.Q
t.toString
if(v<t){r.atk(v)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bZ(r.r,r.w++,w[s])
r.aoi(u,w[r.as-1])}else{r.atk(u)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bZ(r.r,r.w++,w[s])
J.bZ(r.r,r.w++,w[r.as-1])
r.aoi(u,w[r.as-1])}u=v}v=r.a8s()}},
aoi(d,e){var x,w=this,v=w.y
v===$&&B.b()
x=w.Q
x.toString
v.$flags&2&&B.L(v)
v[x]=e
v=w.z
v===$&&B.b()
v.$flags&2&&B.L(v)
v[x]=d
x=w.Q=x+1
if(x===511)w.a=10
else if(x===1023)w.a=11
else if(x===2047)w.a=12},
atk(d){var x,w,v,u,t,s,r=this
r.as=0
x=r.x
r.as=1
w=r.y
w===$&&B.b()
v=w[d]
x.$flags&2&&B.L(x)
x[0]=v
v=r.z
v===$&&B.b()
u=v[d]
for(t=1;u!==4098;t=s){s=t+1
r.as=s
x[t]=w[u]
u=v[u]}},
a8s(){var x,w,v,u,t=this,s=t.b,r=t.f
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
return D.c.ht(t.c,s)&C.aFS[w-9]},
auW(){var x,w,v=this
v.y=new Uint8Array(4096)
x=new Uint32Array(4096)
v.z=x
D.bM.mw(x,0,4096,4098)
for(x=v.y,w=0;w<256;++w){x.$flags&2&&B.L(x)
x[w]=w}v.a=9
v.Q=258}}
A.bXM.prototype={
kE(d){var x,w,v=this.a
if(v==null)return null
v=v.f[d]
x=this.c
x===$&&B.b()
w=v.dh(0,x)
return w},
nt(d,e,f){var x=this,w=A.dg(e,!1,null,0)
x.c=w
w=x.axK(w)
x.a=w
if(w==null)return null
return x.kE(0)},
axK(d){var x,w,v,u,t,s,r,q,p,o=null,n=B.a([],y._),m=new A.bXO(n),l=d.av()
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
try{r=new A.aIx(B.I(v,s),C.Jp,C.afl,C.bLN)
r.b1K(x)
w=r
q=w
if(!(q.b!==0&&q.c!==0))break}catch(p){break}n.push(w)
if(n.length===1){q=n[0]
m.a=q.b
m.b=q.c}u=x.ag()
if(u!==0)x.d=u}return n.length!==0?m:o}}
A.c2J.prototype={
Qc(){var x,w=this.a,v=w.ts()
if((v&1)!==0)return!1
if((v>>>1&7)>3)return!1
if((v>>>4&1)===0)return!1
this.f.d=v>>>5
if(w.ts()!==2752925)return!1
x=this.b
x.a=w.av()
x.b=w.av()
return!0},
oY(d){var x,w,v,u=this,t=null
if(!u.bcH())return t
x=u.b
w=x.a
u.d=A.iS(t,t,C.aj,0,C.bG,x.b,t,0,4,t,C.aj,w,!1)
u.blo()
if(!u.bsh())return t
x=x.w
if(x.length!==0){v=A.dg(new B.fk(x),!1,t,0)
x=u.d
x.toString
x.e=A.d5w(v)}return u.d},
bcH(){var x,w,v,u,t=this
if(!t.Qc())return!1
t.fr=A.dHA()
for(x=t.dy,w=0;w<4;++w){v=new Int32Array(2)
u=new Int32Array(2)
x[w]=new A.aKk(v,u,new Int32Array(2))}x=t.b
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
u=A.dcp(v.jS(u))
t.c=u
v.d+=x.d
u.dJ(1)
t.c.dJ(1)
t.bsp(t.x,t.fr)
t.bsg()
if(!t.bsk(v))return!1
t.bsm()
t.c.dJ(1)
t.bsl()
return!0},
bsp(d,e){var x,w,v,u=this,t=u.c
t===$&&B.b()
t=t.dJ(1)!==0
d.a=t
if(t){d.b=u.c.dJ(1)!==0
if(u.c.dJ(1)!==0){d.c=u.c.dJ(1)!==0
for(t=d.d,x=0;x<4;++x){if(u.c.dJ(1)!==0){w=u.c
v=w.dJ(7)
w=w.dJ(1)===1?-v:v}else w=0
t.$flags&2&&B.L(t)
t[x]=w}for(t=d.e,x=0;x<4;++x){if(u.c.dJ(1)!==0){w=u.c
v=w.dJ(6)
w=w.dJ(1)===1?-v:v}else w=0
t.$flags&2&&B.L(t)
t[x]=w}}if(d.b)for(x=0;x<3;++x){t=e.a
w=u.c.dJ(1)!==0?u.c.dJ(8):255
t.$flags&2&&B.L(t)
t[x]=w}}else d.b=!1
return!0},
bsg(){var x,w,v,u=this,t=u.w,s=u.c
s===$&&B.b()
t.a=s.dJ(1)!==0
t.b=u.c.dJ(6)
t.c=u.c.dJ(3)
s=u.c.dJ(1)!==0
t.d=s
if(s)if(u.c.dJ(1)!==0){for(s=t.e,x=0;x<4;++x)if(u.c.dJ(1)!==0){w=u.c
v=w.dJ(6)
w=w.dJ(1)===1?-v:v
s.$flags&2&&B.L(s)
s[x]=w}for(s=t.f,x=0;x<4;++x)if(u.c.dJ(1)!==0){w=u.c
v=w.dJ(6)
w=w.dJ(1)===1?-v:v
s.$flags&2&&B.L(s)
s[x]=w}}if(t.b===0)s=0
else s=t.a?1:2
u.bt=s
return!0},
bsk(d){var x,w,v,u,t,s,r,q=d.c-d.d,p=this.c
p===$&&B.b()
p=D.c.eB(1,p.dJ(2))
this.cy=p
x=p-1
w=x*3
if(q<w)return!1
for(p=this.db,v=0,u=0;u<x;++u,w=s){t=d.UT(3,v)
s=w+((J.v(t.a,t.d)|J.v(t.a,t.d+1)<<8|J.v(t.a,t.d+2)<<16)>>>0)
if(s>q)s=q
r=new A.acW(d.C_(s-w,w))
r.b=254
r.c=0
r.d=-8
p[u]=r
v+=3}p[x]=A.dcp(d.C_(q-w,d.d-d.b+w))
return w<q},
bsm(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
h===$&&B.b()
x=h.dJ(7)
w=i.c.dJ(1)!==0?i.c.Ly(4):0
v=i.c.dJ(1)!==0?i.c.Ly(4):0
u=i.c.dJ(1)!==0?i.c.Ly(4):0
t=i.c.dJ(1)!==0?i.c.Ly(4):0
s=i.c.dJ(1)!==0?i.c.Ly(4):0
r=i.x
for(h=i.dy,q=r.a,p=!r.c,o=r.d,n=0;n<4;++n){if(q){m=o[n]
if(p)m+=x}else{if(n>0){h[n]=h[0]
continue}m=x}l=h[n]
k=l.a
j=m+w
if(j<0)j=0
else if(j>127)j=127
j=C.Fb[j]
k.$flags&2&&B.L(k)
k[0]=j
if(m<0)j=0
else j=m>127?127:m
k[1]=C.Fc[j]
j=l.b
k=m+v
if(k<0)k=0
else if(k>127)k=127
k=C.Fb[k]
j.$flags&2&&B.L(j)
j[0]=k*2
k=m+u
if(k<0)k=0
else if(k>127)k=127
j[1]=C.Fc[k]*101581>>>16
if(j[1]<8)j[1]=8
k=l.c
j=m+t
if(j<0)j=0
else if(j>117)j=117
j=C.Fb[j]
k.$flags&2&&B.L(k)
k[0]=j
j=m+s
if(j<0)j=0
else if(j>127)j=127
k[1]=C.Fc[j]}},
bsl(){var x,w,v,u,t,s,r=this,q=r.fr
for(x=0;x<4;++x)for(w=0;w<8;++w)for(v=0;v<3;++v)for(u=0;u<11;++u){t=r.c
t===$&&B.b()
s=t.iU(C.aQa[x][w][v][u])!==0?r.c.dJ(8):C.aFO[x][w][v][u]
t=q.b[x][w].a[v]
t.$flags&2&&B.L(t)
t[u]=s}t=r.c
t===$&&B.b()
t=t.dJ(1)!==0
r.fx=t
if(t)r.fy=r.c.dJ(8)},
btp(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.bt
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
blo(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k.at
if(j!=null)m.Y=j
x=J.jJ(4,y.K)
for(j=y.q,w=0;w<4;++w)x[w]=B.a([new A.Od(),new A.Od()],j)
m.C=x
j=m.at
j.toString
x=J.jJ(j,y.bt)
for(v=0;v<j;++v){u=new Uint8Array(16)
t=new Uint8Array(8)
x[v]=new A.aKl(u,t,new Uint8Array(8))}m.k2=x
m.ok=new Uint8Array(832)
j=m.at
j.toString
m.go=new Uint8Array(4*j)
u=m.p4=16*j
j=8*j
m.R8=j
t=m.bt
t.toString
s=C.EV[t]
r=s*u
q=(s/2|0)*j
m.p1=A.dg(new Uint8Array(16*u+r),!1,l,r)
j=m.R8
j.toString
m.p2=A.dg(new Uint8Array(8*j+q),!1,l,q)
j=m.R8
j.toString
m.p3=A.dg(new Uint8Array(8*j+q),!1,l,q)
j=k.a
m.RG=A.dg(new Uint8Array(j),!1,l,0)
p=k.a+1>>>1
m.rx=A.dg(new Uint8Array(p),!1,l,0)
m.ry=A.dg(new Uint8Array(p),!1,l,0)
k=m.bt
k.toString
o=C.EV[k]
if(k===2)m.ch=m.ay=0
else{k=m.y
k===$&&B.b()
k=D.c.aL(k-o,16)
m.ay=k
j=m.Q
j.toString
j=D.c.aL(j-o,16)
m.ch=j
if(k<0)m.ay=0
if(j<0)m.ch=0}k=m.as
k.toString
k=D.c.aL(k+15+o,16)
m.cx=k
j=m.z
j===$&&B.b()
j=D.c.aL(j+15+o,16)
m.CW=j
u=m.at
u.toString
if(j>u)m.CW=u
j=m.ax
j.toString
if(k>j)m.cx=j
n=u+1
x=J.jJ(n,y.bQ)
for(v=0;v<n;++v)x[v]=new A.aKi()
m.k3=x
k=m.at
k.toString
x=J.jJ(k,y.bl)
for(v=0;v<k;++v){j=new Int16Array(384)
x[v]=new A.aKj(j,new Uint8Array(16))}m.bj=x
k=m.at
k.toString
m.k4=B.c2(k,l,!1,y.B)
m.btp()
A.dH1()
m.e=new A.c2K()
return!0},
bsh(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
j.bsi()
if(!n)n=j.bsn(q,s)
else{r.a=q.a=0
u=p.b
u===$&&B.b()
if(!u)r.b=q.b=0
p.f=p.e=0}u=j.bt
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
D.H.mw(x,0,4,0)
j.y1=0
j.buw()
u=j.bt
u.toString
k=!1
if(u>0){u=j.y2
t=j.ch
t===$&&B.b()
if(u>=t){t=j.cx
t.toString
t=u<=t
k=t}}if(!j.bbo(k))return!1
u=++j.y2}return!0},
buw(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.y2,a5=a2.ok
a5===$&&B.b()
x=A.dg(a5,!1,a3,40)
w=A.dg(a2.ok,!1,a3,584)
v=A.dg(a2.ok,!1,a3,600)
a5=a4>0
u=0
while(!0){t=a2.at
t.toString
if(!(u<t))break
t=a2.bj
t===$&&B.b()
s=t[u]
if(u>0){for(r=-1;r<16;++r){t=r*32
x.ti(t-4,4,x,t+12)}for(r=-1;r<8;++r){t=r*32
q=t-4
t+=4
w.ti(q,4,w,t)
v.ti(q,4,v,t)}}else{for(r=0;r<16;++r)J.bZ(x.a,x.d+(r*32-1),129)
for(r=0;r<8;++r){t=r*32-1
J.bZ(w.a,w.d+t,129)
J.bZ(v.a,v.d+t,129)}if(a5){J.bZ(v.a,v.d+-33,129)
J.bZ(w.a,w.d+-33,129)
J.bZ(x.a,x.d+-33,129)}}t=a2.k2
t===$&&B.b()
p=t[u]
o=s.a
n=s.e
if(a5){x.AX(-32,16,p.a)
w.AX(-32,8,p.b)
v.AX(-32,8,p.c)}else if(u===0){t=x.a
q=x.d+-33
J.vf(t,q,q+21,127)
q=w.a
t=w.d+-33
J.vf(q,t,t+9,127)
t=v.a
q=v.d+-33
J.vf(t,q,q+9,127)}t=s.b
t===$&&B.b()
if(t){m=A.ct(x,a3,-16)
l=m.SZ()
if(a5){t=a2.at
t.toString
if(u>=t-1){t=p.a[15]
q=m.a
k=m.d
J.vf(q,k,k+4,t)}else m.AX(0,4,a2.k2[u+1].a)}j=l[0]
l.$flags&2&&B.L(l)
l[96]=j
l[64]=j
l[32]=j
for(t=s.c,i=0;i<16;++i,n=n<<2>>>0){h=A.ct(x,a3,C.XN[i])
C.aMQ[t[i]].$1(h)
n.toString
q=i*16
a2.arn(n,new A.nq(o,q,Math.min(384,384),q,!1),h)}}else{t=A.dcs(u,a4,s.c[0])
t.toString
C.aRz[t].$1(x)
if(n!==0)for(i=0;i<16;++i,n=n<<2>>>0){h=A.ct(x,a3,C.XN[i])
n.toString
t=i*16
a2.arn(n,new A.nq(o,t,Math.min(384,384),t,!1),h)}}t=s.f
t===$&&B.b()
q=A.dcs(u,a4,s.d)
q.toString
C.T3[q].$1(w)
C.T3[q].$1(v)
q=Math.min(384,384)
g=new A.nq(o,256,q,256,!1)
if((t&255)!==0){k=a2.e
if((t&170)!==0){k===$&&B.b()
k.ws(g,w)
k.ws(A.ct(g,a3,16),A.ct(w,a3,4))
f=A.ct(g,a3,32)
e=A.ct(w,a3,128)
k.ws(f,e)
k.ws(A.ct(f,a3,16),A.ct(e,a3,4))}else{k===$&&B.b()
k.aNw(g,w)}}d=new A.nq(o,320,q,320,!1)
t=t>>>8
if((t&255)!==0){q=a2.e
if((t&170)!==0){q===$&&B.b()
q.ws(d,v)
q.ws(A.ct(d,a3,16),A.ct(v,a3,4))
t=A.ct(d,a3,32)
k=A.ct(v,a3,128)
q.ws(t,k)
q.ws(A.ct(t,a3,16),A.ct(k,a3,4))}else{q===$&&B.b()
q.aNw(d,v)}}t=a2.ax
t.toString
if(a4<t-1){D.H.ej(p.a,0,16,x.ik(),480)
D.H.ej(p.b,0,8,w.ik(),224)
D.H.ej(p.c,0,8,v.ik(),224)}a0=u*16
a1=u*8
for(r=0;r<16;++r){t=a2.p4
t.toString
q=a2.p1
q===$&&B.b()
q.ti(a0+r*t,16,x,r*32)}for(r=0;r<8;++r){t=a2.R8
t.toString
q=a2.p2
q===$&&B.b()
k=r*32
q.ti(a1+r*t,8,w,k)
t=a2.R8
t.toString
q=a2.p3
q===$&&B.b()
q.ti(a1+r*t,8,v,k)}++u}},
arn(d,e,f){var x,w,v,u,t,s
switch(d>>>30){case 3:x=this.e
x===$&&B.b()
x.L4(0,e,f,!1)
break
case 2:this.e===$&&B.b()
w=J.v(e.a,e.d)+4
v=D.c.lx(D.c.Z(J.v(e.a,e.d+4)*35468,16),32)
u=D.c.lx(D.c.Z(J.v(e.a,e.d+4)*85627,16),32)
t=D.c.lx(D.c.Z(J.v(e.a,e.d+1)*35468,16),32)
s=D.c.lx(D.c.Z(J.v(e.a,e.d+1)*85627,16),32)
A.c2M(f,0,w+u,s,t)
A.c2M(f,1,w+v,s,t)
A.c2M(f,2,w-v,s,t)
A.c2M(f,3,w-u,s,t)
break
case 1:x=this.e
x===$&&B.b()
x.T_(e,f)
break
default:break}},
b9w(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.p4,j=m.k4
j===$&&B.b()
j=j[d]
j.toString
x=m.p1
x===$&&B.b()
w=A.ct(x,l,d*16)
v=j.b
u=j.a
if(u===0)return
if(m.bt===1){if(d>0){x=m.e
x===$&&B.b()
k.toString
x.am9(w,k,u+4)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.aUH(w,k,u)}if(e>0){x=m.e
x===$&&B.b()
k.toString
x.ama(w,k,u+4)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.aUK(w,k,u)}}else{t=m.R8
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
x.GH(w,1,k,16,s,v,p)
t.toString
x.GH(r,1,t,8,s,v,p)
x.GH(q,1,t,8,s,v,p)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.bNI(w,k,u,v,p)
t.toString
o=A.ct(r,l,4)
n=A.ct(q,l,4)
x.GG(o,1,t,8,u,v,p)
x.GG(n,1,t,8,u,v,p)}if(e>0){x=m.e
x===$&&B.b()
k.toString
s=u+4
x.GH(w,k,1,16,s,v,p)
t.toString
x.GH(r,t,1,8,s,v,p)
x.GH(q,t,1,8,s,v,p)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.c_9(w,k,u,v,p)
t.toString
x=4*t
o=A.ct(r,l,x)
n=A.ct(q,l,x)
j.GG(o,t,1,8,u,v,p)
j.GG(n,t,1,8,u,v,p)}}},
bb7(){var x,w=this,v=w.ay
v===$&&B.b()
x=v
while(!0){v=w.CW
v.toString
if(!(x<v))break
w.b9w(x,w.y2);++x}},
bbo(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.bt
e.toString
x=C.EV[e]
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
if(d)g.bb7()
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
if(g.Y!=null&&o<n){m=g.xr=g.b89(o,n-o)
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
g.btR(0,o-l,m-h,n-o)}if(e){e=g.p1
m=g.p4
m.toString
e.ti(u,w,t,16*m)
m=g.p2
u=g.R8
u.toString
m.ti(s,v,r,8*u)
u=g.p3
m=g.R8
m.toString
u.ti(s,v,q,8*m)}return!0},
btR(d,e,f,g){if(f<=0||g<=0)return!1
this.bah(e,f,g)
this.bag(e,f,g)
return!0},
a7k(d){var x
if((d&-4194304)>>>0===0)x=D.c.Z(d,14)
else x=d<0?0:255
return x},
ZI(d,e,f,g){var x=19077*d
g.m(0,0,this.a7k(x+26149*f+-3644112))
g.m(0,1,this.a7k(x-6419*e-13320*f+2229552))
g.m(0,2,this.a7k(x+33050*e+-4527440))},
Zq(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=new A.c2W(),a0=b3-1,a1=D.c.Z(a0,1),a2=d.$2(J.v(a7.a,a7.d),J.v(a8.a,a8.d)),a3=d.$2(J.v(a9.a,a9.d),J.v(b0.a,b0.d)),a4=D.c.Z(3*a2+a3+131074,2)
f.ZI(J.v(a5.a,a5.d),a4&255,a4>>>16,b1)
b1.m(0,3,255)
x=a6!=null
if(x){a4=D.c.Z(3*a3+a2+131074,2)
w=J.v(a6.a,a6.d)
b2.toString
f.ZI(w,a4&255,a4>>>16,b2)
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
f.ZI(w,a4&255,a4>>>16,n)
n.m(0,3,255)
if(x){a4=D.c.Z(3*a3+a2+131074,2)
a0=J.v(a6.a,a6.d+a0)
b2.toString
o=A.ct(b2,e,o)
f.ZI(a0,a4&255,a4>>>16,o)
o.m(0,3,255)}}},
bag(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.xr
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
q=q==null?null:q.er(s,u,null);(q==null?new A.h0():q).saU(0,r)}x.d=x.d+o.a}},
bah(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=A.dg(J.dx(l.d.gaq(0),0,null),!1,k,d*j.a*4),h=l.to
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
if(d===0){l.Zq(x,k,w,v,w,v,i,k,e)
p=f}else{j=l.RG
j===$&&B.b()
l.Zq(j,x,r,q,w,v,A.ct(i,k,-s),i,e)
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
l.Zq(A.ct(x,k,-n),x,r,q,w,v,A.ct(i,k,h),i,e)}j=x.d
h=l.p4
h.toString
x.d=j+h
j=l.Q
j.toString
h=l.as
h.toString
if(j+u<h){j=l.RG
j===$&&B.b()
j.AX(0,e,x)
l.rx.AX(0,t,w)
l.ry.AX(0,t,v);--p}else if((u&1)===0)l.Zq(x,k,w,v,w,v,A.ct(i,k,s),k,e)
return p},
b89(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.b,m=n.a,l=n.b
if(d<0||e<=0||d+e>l)return null
if(d===0){n=m*l
o.ah=new Uint8Array(n)
x=o.Y
w=new A.c3K(x,m,l)
v=x.cD()
w.d=v&3
w.e=D.c.Z(v,2)&3
w.f=D.c.Z(v,4)&3
w.r=D.c.Z(v,6)&3
if(w.geQ()){u=w.d
if(u===0){if(x.c-x.d<n)w.r=1}else if(u===1){t=new A.aKL(C.qZ,B.a([],y.J))
t.a=m
t.b=l
n=B.a([],y.A)
u=B.a([],y.F)
s=new Uint32Array(2)
r=new A.aKg(x,s)
s=r.d=J.dx(D.bM.gaq(s),0,null)
q=x.cD()
s.$flags&2&&B.L(s)
s[0]=q
s[1]=x.cD()
s[2]=x.cD()
s[3]=x.cD()
s[4]=x.cD()
s[5]=x.cD()
s[6]=x.cD()
s[7]=x.cD()
u=new A.aya(r,t,n,u)
u.db=m
w.x=u
u.MV(m,l,!0)
n=w.x
x=n.ax
if(x.length===1&&x[0].a===C.agh&&n.bm_()){w.y=!0
n=w.x
x=n.c
p=x.a*x.b
n.cx=0
x=D.c.au(p,4)
x=new Uint8Array(p+(4-x))
n.CW=x
n.ch=J.pW(D.H.gaq(x),0,null)}else{w.y=!1
w.x.aot()}}else w.r=1}o.X=w}n=o.X
n===$&&B.b()
if(!n.w){x=o.ah
x===$&&B.b()
if(!n.Qb(0,d,e,x))return null}n=o.ah
n===$&&B.b()
return A.dg(n,!1,null,d*m)},
bsn(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.fr.b,a3=a1.k1
a3===$&&B.b()
x=a1.dy[a3]
a3=a1.bj
a3===$&&B.b()
w=a3[a1.y1]
v=A.dg(w.a,!1,null,0)
a3=a1.k3
a3===$&&B.b()
u=a3[0]
v.bSz(0,v.c-v.d,0)
a3=w.b
a3===$&&B.b()
if(!a3){t=A.dg(new Int16Array(16),!1,null,0)
a3=a4.b
s=u.b
r=a1.a8m(a5,a2[1],a3+s,x.b,0,t)
a4.b=u.b=r>0?1:0
if(r>1)a1.bAY(t,v)
else{q=D.c.Z(J.v(t.a,t.d)+3,3)
for(p=0;p<256;p+=16)J.bZ(v.a,v.d+p,q)}o=a2[0]
n=1}else{o=a2[3]
n=0}m=a4.a&15
l=u.a&15
for(k=0,j=0;j<4;++j){i=l&1
for(h=0,g=0;g<4;++g){r=a1.a8m(a5,o,i+(m&1),x.a,n,v)
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
m=D.c.i5(a4.a,a3)
l=D.c.i5(u.a,a3)
for(h=0,j=0;j<2;++j){i=l&1
for(g=0;g<2;++g){r=a1.a8m(a5,a2[2],i+(m&1),x.c,0,v)
i=r>0?1:0
m=m>>>1|i<<3
a3=J.v(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=(h<<2|a3)>>>0
v.d+=16}m=m>>>2
l=l>>>1|i<<5}d=(d|D.c.eB(h,4*a0))>>>0
e=(e|D.c.eB(m<<4>>>0,a0))>>>0
f=(f|D.c.eB(l&240,a0))>>>0}a4.a=e
u.a=f
w.e=k
w.f=d
if((d&43690)===0)x.toString
return(k|d)>>>0===0},
bAY(d,e){var x,w,v,u,t,s,r,q,p,o,n=new Int32Array(16)
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
bcP(d,e){var x,w,v,u,t,s
if(d.iU(e[3])===0)x=d.iU(e[4])===0?2:3+d.iU(e[5])
else if(d.iU(e[6])===0)x=d.iU(e[7])===0?5+d.iU(159):7+2*d.iU(165)+d.iU(145)
else{w=d.iU(e[8])
v=2*w+d.iU(e[9+w])
u=C.aHn[v]
t=u.length
for(x=0,s=0;s<t;++s)x+=x+d.iU(u[s])
x+=3+D.c.eB(8,v)}return x},
a8m(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=e[h].a[f]
for(;h<16;h=x){if(d.iU(p[0])===0)return h
for(;d.iU(p[1])===0;){++h
p=e[C.Wc[h]].a[0]
if(h===16)return 16}x=h+1
w=e[C.Wc[x]].a
if(d.iU(p[2])===0){p=w[1]
v=1}else{v=this.bcP(d,p)
p=w[2]}u=C.aLJ[h]
t=d.b
t===$&&B.b()
s=d.aoP(D.c.Z(t,1))
t=d.b
r=C.Vi[t]
d.b=C.Vg[t]
t=d.d
t===$&&B.b()
d.d=t-r
t=s!==0?-v:v
q=g[h>0?1:0]
J.bZ(i.a,i.d+u,t*q)}return 16},
bsi(){var x,w,v,u,t,s,r,q,p,o=this,n=o.y1,m=4*n,l=o.go,k=o.id,j=o.bj
j===$&&B.b()
x=j[n]
n=o.c
n===$&&B.b()
n=n.iU(145)===0
x.b=n
if(!n){if(o.c.iU(156)!==0)w=o.c.iU(128)!==0?1:3
else w=o.c.iU(163)!==0?2:0
n=x.c
n.$flags&2&&B.L(n)
n[0]=w
l.toString
D.H.mw(l,m,m+4,w)
D.H.mw(k,0,4,w)}else{v=x.c
for(n=k.$flags|0,u=0,t=0;t<4;++t,u=p){w=k[t]
for(s=0;s<4;++s){j=m+s
r=C.aLW[l[j]][w]
q=C.U6[o.c.iU(r[0])]
for(;q>0;)q=C.U6[2*q+o.c.iU(r[q])]
w=-q
l.$flags&2&&B.L(l)
l[j]=w}p=u+4
l.toString
D.H.ej(v,u,p,l,m)
n&2&&B.L(k)
k[t]=w}}if(o.c.iU(142)===0)n=0
else if(o.c.iU(114)===0)n=2
else n=o.c.iU(183)!==0?1:3
x.d=n}}
A.acW.prototype={
dJ(d){var x,w
for(x=0;w=d-1,d>0;d=w)x=(x|D.c.f9(this.iU(128),w))>>>0
return x},
Ly(d){var x=this.dJ(d)
return this.dJ(1)===1?-x:x},
iU(d){var x,w=this,v=w.b
v===$&&B.b()
x=w.aoP(D.c.Z(v*d,8))
if(w.b<=126)w.bxP()
return x},
aoP(d){var x,w,v,u,t,s=this,r=s.d
r===$&&B.b()
if(r<0){x=s.a
w=x.c
v=x.d
if(w-v>=1){u=x.cD()
r=s.c
r===$&&B.b()
s.c=(u|r<<8)>>>0
r=s.d+8
s.d=r
t=r}else{if(v<w){r=x.cD()
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
if(D.c.oH(r,t)>d){x=s.b
x===$&&B.b()
w=d+1
s.b=x-w
s.c=r-D.c.f9(w,t)
return 1}else{s.b=d
return 0}},
bxP(){var x,w=this,v=w.b
v===$&&B.b()
x=C.Vi[v]
w.b=C.Vg[v]
v=w.d
v===$&&B.b()
w.d=v-x}}
A.c2K.prototype={
ama(d,e,f){var x,w=A.ct(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x
if(this.aw7(w,e,f))this.W0(w,e)}},
am9(d,e,f){var x,w=A.ct(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x*e
if(this.aw7(w,1,f))this.W0(w,1)}},
aUK(d,e,f){var x,w,v=A.ct(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.ama(v,e,f)}},
aUH(d,e,f){var x,w=A.ct(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.am9(w,e,f)}},
c_9(d,e,f,g,h){var x,w,v=A.ct(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.GG(v,e,1,16,f,g,h)}},
bNI(d,e,f,g,h){var x,w=A.ct(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.GG(w,1,e,16,f,g,h)}},
GH(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=A.ct(d,null,0)
for(x=-3*e,w=-2*e,v=-e,u=2*e;t=g-1,g>0;g=t){if(this.aw8(h,e,a0,a1))if(this.auw(h,e,a2))this.W0(h,e)
else{s=J.v(h.a,h.d+x)
r=J.v(h.a,h.d+w)
q=J.v(h.a,h.d+v)
p=J.v(h.a,h.d)
o=J.v(h.a,h.d+e)
n=J.v(h.a,h.d+u)
m=$.cUG()
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
GG(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=A.ct(d,null,0)
for(x=-2*e,w=-e;v=g-1,g>0;g=v){if(this.aw8(k,e,h,i))if(this.auw(k,e,j))this.W0(k,e)
else{u=J.v(k.a,k.d+x)
t=J.v(k.a,k.d+w)
s=J.v(k.a,k.d)
r=J.v(k.a,k.d+e)
q=3*(s-t)
p=$.b2Q()
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
W0(d,e){var x=J.v(d.a,d.d+-2*e),w=-e,v=J.v(d.a,d.d+w),u=J.v(d.a,d.d),t=J.v(d.a,d.d+e),s=3*(u-v)+$.cUG()[1020+x-t],r=$.b2Q()[112+D.c.lx(D.c.Z(s+4,3),32)],q=$.b2Q()[112+D.c.lx(D.c.Z(s+3,3),32)]
d.m(0,w,$.r6()[255+v+q])
d.m(0,0,$.r6()[255+u-r])},
auw(d,e,f){var x=J.v(d.a,d.d+-2*e),w=J.v(d.a,d.d+-e),v=J.v(d.a,d.d),u=J.v(d.a,d.d+e),t=$.b2P()
return t[255+x-w]>f||t[255+u-v]>f},
aw7(d,e,f){var x=J.v(d.a,d.d+-2*e),w=J.v(d.a,d.d+-e),v=J.v(d.a,d.d),u=J.v(d.a,d.d+e)
return 2*$.b2P()[255+w-v]+$.cUF()[255+x-u]<=f},
aw8(d,e,f,g){var x=J.v(d.a,d.d+-4*e),w=J.v(d.a,d.d+-3*e),v=J.v(d.a,d.d+-2*e),u=J.v(d.a,d.d+-e),t=J.v(d.a,d.d),s=J.v(d.a,d.d+e),r=J.v(d.a,d.d+2*e),q=J.v(d.a,d.d+3*e),p=$.b2P(),o=255+v
if(2*p[255+u-t]+$.cUF()[o-s]>f)return!1
return p[255+x-w]<=g&&p[255+w-v]<=g&&p[o-u]<=g&&p[255+q-r]<=g&&p[255+r-s]<=g&&p[255+s-t]<=g},
ws(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=new Int32Array(16)
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
L4(d,e,f,g){this.ws(e,f)
if(g)this.ws(A.ct(e,null,16),A.ct(f,null,4))},
T_(d,e){var x,w,v=J.v(d.a,d.d)+4
for(x=0;x<4;++x)for(w=0;w<4;++w)A.Hh(e,0,w,x,v)},
aNw(d,e){var x=this,w=null
if(J.v(d.a,d.d)!==0)x.T_(d,e)
if(J.v(d.a,d.d+16)!==0)x.T_(A.ct(d,w,16),A.ct(e,w,4))
if(J.v(d.a,d.d+32)!==0)x.T_(A.ct(d,w,32),A.ct(e,w,128))
if(J.v(d.a,d.d+48)!==0)x.T_(A.ct(d,w,48),A.ct(e,w,132))}}
A.c2P.prototype={}
A.c2T.prototype={}
A.c2V.prototype={}
A.acV.prototype={}
A.c2U.prototype={}
A.c2L.prototype={}
A.Od.prototype={}
A.aKi.prototype={}
A.aKk.prototype={}
A.aKj.prototype={}
A.aKl.prototype={}
A.acX.prototype={
Qc(){var x,w=this.b
if(w.jM(8)!==47)return!1
x=this.c
x.f=C.AR
x.a=w.jM(14)+1
x.b=w.jM(14)+1
x.d=w.jM(1)!==0
if(w.jM(3)!==0)return!1
return!0},
oY(d){var x,w,v,u,t,s=this,r=null
s.e=0
if(!s.Qc())return r
x=s.c
s.MV(x.a,x.b,!0)
s.aot()
w=x.a
s.d=A.iS(r,r,C.aj,0,C.bG,x.b,r,0,4,r,C.aj,w,!1)
w=s.ch
w.toString
v=x.a
u=x.b
if(!s.a7G(w,v,u,u,s.gbty()))return r
x=x.w
if(x.length!==0){t=A.dg(new B.fk(x),!1,r,0)
x=s.d
x.toString
x.e=A.d5w(t)}return s.d},
aot(){var x,w=this,v=w.c,u=v.a
v=u*v.b+u
x=new Uint32Array(v+u*16)
w.ch=x
w.CW=J.dx(D.bM.gaq(x),0,null)
w.cx=v
return!0},
bum(d){var x,w,v,u=this,t=u.b,s=t.jM(2),r=u.ay,q=D.c.eB(1,s)
if((r&q)>>>0!==0)return!1
u.ay=(r|q)>>>0
x=new A.aKh(C.agg)
u.ax.push(x)
r=C.aQY[s]
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
u.baL(w,x)
break
case 2:break}return!0},
MV(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(f)for(x=p.b,w=y.t,v=e,u=d;x.jM(1)!==0;){t=B.a([u,v],w)
if(!p.bum(t))throw B.p(A.co("Invalid Transform"))
u=t[0]
v=t[1]}else{v=e
u=d}x=p.b
if(x.jM(1)!==0){s=x.jM(4)
if(!(s>=1&&s<=11))throw B.p(A.co("Invalid Color Cache"))}else s=0
if(!p.bua(u,v,s,f))throw B.p(A.co("Invalid Huffman Codes"))
if(s>0){x=D.c.eB(1,s)
p.r=x
p.w=new A.c2Q(new Uint32Array(x),32-s)}else p.r=0
x=p.c
x.a=u
x.b=v
r=p.y
p.z=A.Hi(u,r)
p.x=r===0?4294967295:D.c.eB(1,r)-1
if(f){p.e=0
return null}q=new Uint32Array(u*v)
if(!p.a7G(q,u,v,v,null))throw B.p(A.co("Failed to decode image data."))
p.e=0
return q},
a7G(a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=a0.e,a2=D.c.hS(a1,a9),a3=D.c.au(a1,a9),a4=a0.asW(a3,a2),a5=a0.e,a6=a9*b0,a7=a9*b1
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
if((a3&v)>>>0===0){p=a0.Nm(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(u.a>=32)u.D3()
r=a4.a
o=r[0].Ba(u)
n=0
if(o<256){m=r[1].Ba(u)
if(u.a>=32)u.D3()
l=A.dh7(r[2].Ba(u),o,m,r[3].Ba(u))
a1&2&&B.L(a8)
a8[a5]=l;++a5;++a3
if(a3>=a9){++a2
if(D.c.au(a2,16)===0&&t)b2.$1(a2)
if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.c.ht(j*506832829>>>0,r)
k&2&&B.L(q)
q[i]=j;++s}a3=n}}else if(o<280){h=a0.Ww(o-256)
g=r[4].Ba(u)
if(u.a>=32)u.D3()
f=a0.axf(a9,a0.Ww(g))
if(a5<f||a6-a5<h)return!1
else{e=a5-f
for(d=0;d<h;++d){r=a8[e+d]
a1&2&&B.L(a8)
a8[a5+d]=r}a5+=h}a3+=h
for(;a3>=a9;){a3-=a9;++a2
if(D.c.au(a2,16)===0&&t)b2.$1(a2)}if(a5<a7){if((a3&v)>>>0!==0){p=a0.Nm(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.c.ht(j*506832829>>>0,r)
k&2&&B.L(q)
q[i]=j;++s}}}else if(o<x){for(;s<a5;){r=a8[s]
i=D.c.ht(r*506832829>>>0,w.b)
q=w.a
q.$flags&2&&B.L(q)
q[i]=r;++s}r=w.a
q=r[o-280]
a1&2&&B.L(a8)
a8[a5]=q;++a5;++a3
if(a3>=a9){++a2
if(D.c.au(a2,16)===0&&t)b2.$1(a2)
for(q=w.b,k=r.$flags|0;s<a5;){j=a8[s]
i=D.c.ht(j*506832829>>>0,q)
k&2&&B.L(r)
r[i]=j;++s}a3=n}}else return!1}if(t)b2.$1(a2)
if(r.d>=q&&u.a>=64&&a5<a6)return!1
a0.e=a5
return!0},
bm_(){var x,w,v,u
if(this.r>0)return!1
for(x=this.as,w=this.at,v=0;v<x;++v){u=w[v].a
if(u[1].f>1)return!1
if(u[2].f>1)return!1
if(u[3].f>1)return!1}return!0},
baR(d){var x,w,v,u,t,s,r=this,q=r.f,p=d-q
if(p<=0)return
x=r.c
r.aoD(p,x.a*q)
w=x.a
v=w*p
u=w*r.f
x=r.ch
x.toString
q=r.cx
q.toString
t=A.dg(x,!1,null,q)
for(s=0;s<v;++s){q=r.cy
q.toString
x=D.c.Z(J.v(t.a,t.d+s),8)
q.$flags&2&&B.L(q)
q[u+s]=x&255}r.f=d},
b7M(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=o.e,m=D.c.hS(n,d),l=D.c.au(n,d),k=o.asW(l,m),j=o.e,i=d*e,h=d*f,g=o.x
n=o.b
while(!0){x=n.b
if(!(!(x.d>=x.c&&n.a>=64)&&j<h))break
if((l&g)>>>0===0){w=o.Nm(o.Q,o.z,o.y,l,m)
k=o.at[w]}if(n.a>=32)n.D3()
x=k.a
v=x[0].Ba(n)
if(v<256){x=o.CW
x===$&&B.b()
x.$flags&2&&B.L(x)
x[j]=v;++j;++l
if(l>=d){++m
if(D.c.au(m,16)===0)o.a85(m)
l=0}}else if(v<280){u=o.Ww(v-256)
t=x[4].Ba(n)
if(n.a>=32)n.D3()
s=o.axf(d,o.Ww(t))
if(j>=s&&i-j>=u)for(x=o.CW,r=0;r<u;++r){x===$&&B.b()
q=j+r
p=x[q-s]
x.$flags&2&&B.L(x)
x[q]=p}else{o.e=j
return!0}j+=u
l+=u
for(;l>=d;){l-=d;++m
if(D.c.au(m,16)===0)o.a85(m)}if(j<h&&(l&g)>>>0!==0){w=o.Nm(o.Q,o.z,o.y,l,m)
k=o.at[w]}}else return!1}o.a85(m)
o.e=j
return!0},
a85(d){var x,w,v,u=this,t=u.f,s=d-t,r=u.CW
r===$&&B.b()
x=A.dg(r,!1,null,u.c.a*t)
if(s>0){w=u.f
t=u.cy
t.toString
r=u.db
r.toString
v=A.dg(t,!1,null,r*w)
u.ax[0].bHb(w,w+s,x,v)}u.f=d},
btz(d){var x,w,v,u,t,s=this,r=s.c,q=r.a,p=s.f,o=d-p
if(o<=0)return
s.aoD(o,q*p)
q=s.cx
q.toString
x=s.f
w=q
v=0
for(;v<o;++v,++x)for(u=0;u<r.a;++u,++w){t=s.ch[w]
q=s.d.a
if(q!=null)q.kR(u,x,t>>>16&255,t>>>8&255,t&255,t>>>24&255)}s.f=d},
aoD(d,e){var x,w,v,u=this,t=u.ax,s=t.length,r=u.c.a,q=u.f,p=q+d,o=u.cx
o.toString
x=u.ch
x.toString
D.bM.ej(x,o,o+r*d,x,e)
for(w=e;v=s-1,s>0;w=o,s=v){r=t[v]
x=u.ch
x.toString
r.bQm(q,p,x,w,x,o)}},
bua(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=1
if(g&&l.b.jM(1)!==0){x=l.b.jM(3)+2
w=A.Hi(d,x)
v=A.Hi(e,x)
u=w*v
t=l.MV(w,v,!1)
l.y=x
for(s=0;s<u;++s){r=t[s]>>>8&65535
t.$flags&2&&B.L(t)
t[s]=r
if(r>=k)k=r+1}}else t=null
q=J.jJ(k,y.R)
for(p=0;p<k;++p)q[p]=A.dwT()
for(o=f>0,s=0;s<k;++s)for(n=0;n<5;++n){m=C.aIy[n]
if(n===0&&o)m+=D.c.eB(1,f)
if(!l.bu8(m,q[s].a[n]))return!1}l.Q=t
l.as=k
l.at=q
return!0},
bu8(d,e){var x,w,v,u,t,s,r,q,p,o=this.b
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
u[1]=x}s=e.bG4(u,v,w,d,t)}else{r=new Int32Array(19)
q=o.jM(4)+4
if(q>19)return!1
u=new Int32Array(d)
for(p=0;p<q;++p)r[C.aL5[p]]=o.jM(3)
s=this.bu9(r,d,u)
if(s)s=e.aEf(u,d)}return s},
bu9(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.d6w()
if(!j.aEf(d,19))return!1
x=this.b
if(x.jM(1)!==0){w=2+x.jM(2+2*x.jM(3))
if(w>e)return!1}else w=e
for(v=f.$flags|0,u=0,t=8;u<e;w=s){s=w-1
if(w===0)break
if(x.a>=32)x.D3()
r=j.Ba(x)
if(r<16){q=u+1
v&2&&B.L(f)
f[u]=r
if(r!==0)t=r
u=q}else{p=r-16
o=C.aEA[p]
n=C.aEW[p]
m=x.jM(o)+n
if(u+m>e)return!1
else{l=r===16?t:0
for(;k=m-1,m>0;m=k,u=q){q=u+1
v&2&&B.L(f)
f[u]=l}}}}return!0},
Ww(d){var x
if(d<4)return d+1
x=D.c.Z(d-2,1)
return D.c.eB(2+(d&1),x)+this.b.jM(x)+1},
axf(d,e){var x,w
if(e>120)return e-120
else{x=C.aIP[e-1]
w=(x>>>4)*d+(8-(x&15))
return w>=1?w:1}},
baL(d,e){var x,w,v,u,t,s,r=D.c.eB(1,D.c.i5(8,e.e)),q=new Uint32Array(r),p=e.d
p.toString
x=J.dx(D.bM.gaq(p),0,null)
w=J.dx(D.bM.gaq(q),0,null)
q[0]=e.d[0]
v=4*d
for(p=w.$flags|0,u=4;u<v;++u){t=x[u]
s=w[u-4]
p&2&&B.L(w)
w[u]=t+s&255}for(v=4*r;u<v;++u){p&2&&B.L(w)
w[u]=0}e.d=q
return!0},
Nm(d,e,f,g,h){if(f===0)return 0
d.toString
return d[e*D.c.Z(h,f)+D.c.Z(g,f)]},
asW(d,e){var x=this,w=x.Nm(x.Q,x.z,x.y,d,e)
return x.at[w]}}
A.aya.prototype={
bMR(d){return this.baR(d)}}
A.aKg.prototype={
aLI(){var x,w,v=this.a
if(v<32){x=this.c
w=D.c.ht(x[0],v)+((x[1]&C.FL[v])>>>0)*(C.FL[32-v]+1)}else{x=this.c
w=v===32?x[1]:D.c.ht(x[1],v-32)}return w},
jM(d){var x,w=this,v=w.b
if(!(v.d>=v.c&&w.a>=64)&&d<25){v=w.aLI()
x=C.FL[d]
w.a+=d
w.D3()
return(v&x)>>>0}else throw B.p(A.co("Not enough data in input."))},
D3(){var x,w,v,u=this,t=u.b,s=u.c,r=s.$flags|0,q=t.c
while(!0){if(!(u.a>=8&&t.d<q))break
x=J.v(t.a,t.d++)
w=s[0]
v=s[1]
r&2&&B.L(s)
s[0]=(w>>>8)+(v&255)*16777216
s[1]=v>>>8
s[1]=(s[1]|x*16777216)>>>0
u.a-=8}}}
A.c2Q.prototype={}
A.Oe.prototype={
J(){return"VP8LImageTransformType."+this.b}}
A.aKh.prototype={
bQm(d,e,f,g,h,i){var x,w,v,u,t=this,s=t.b
switch(t.a.a){case 2:t.bEd(h,i,i+(e-d)*s)
break
case 0:t.bWm(d,e,h,i)
if(e!==t.c){x=i-s
D.bM.ej(h,x,x+s,f,i+(e-d-1)*s)}break
case 1:t.bHc(d,e,h,i)
break
case 3:if(g===i&&t.e>0){w=e-d
v=w*A.Hi(s,t.e)
u=i+w*s-v
D.bM.ej(h,u,u+v,f,i)
t.aFj(d,e,f,u,h,i)}else t.aFj(d,e,f,g,h,i)
break}},
bHb(d,e,f,g){var x,w,v,u,t,s,r=this.e,q=D.c.i5(8,r),p=this.b,o=this.d
if(q<8){x=D.c.eB(1,r)-1
w=D.c.eB(1,q)-1
for(v=d;v<e;++v)for(u=0,t=0;t<p;++t){if((t&x)>>>0===0){u=J.v(f.a,f.d);++f.d}r=o[(u&w)>>>0]
J.bZ(g.a,g.d,r>>>8&255);++g.d
u=D.c.Z(u,q)}}else for(v=d;v<e;++v)for(t=0;t<p;++t){s=J.v(f.a,f.d);++f.d
r=o[s]
J.bZ(g.a,g.d,r>>>8&255);++g.d}},
aFj(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=this.e,o=D.c.i5(8,p),n=this.b,m=this.d
if(o<8){x=D.c.eB(1,p)-1
w=D.c.eB(1,o)-1
for(p=h.$flags|0,v=d;v<e;++v)for(u=0,t=0;t<n;++t,i=r){if((t&x)>>>0===0){s=g+1
u=f[g]>>>8&255
g=s}r=i+1
q=m[u&w]
p&2&&B.L(h)
h[i]=q
u=D.c.i5(u,o)}}else for(p=h.$flags|0,v=d;v<e;++v)for(t=0;t<n;++t,i=r,g=s){r=i+1
s=g+1
q=m[f[g]>>>8&255]
p&2&&B.L(h)
h[i]=q}},
bHc(a2,a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.b,e=g.e,d=D.c.eB(1,e)-1,a0=A.Hi(f,e),a1=D.c.Z(a2,g.e)*a0
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
o=$.oR()
o.$flags&2&&B.L(o)
o[0]=p
p=$.pU()
n=p[0]
o[0]=q
m=p[0]
l=$.b2S()
l.$flags&2&&B.L(l)
l[0]=n*m
k=$.cUI()
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
e&2&&B.L(a4)
a4[s]=(r&4278255360|j<<16|((r&255)+(i>>>5)>>>0)+(h>>>5)>>>0&255)>>>0}a5+=f;++x
if((x&d)>>>0===0)a1+=a0}},
bWm(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=this,n=o.b
if(d===0){A.c2R(f,g,4278190080)
for(x=1;x<n;++x){w=g+x
A.c2R(f,w,f[w-1])}g+=n;++d}w=o.e
v=D.c.eB(1,w)-1
u=A.Hi(n,w)
t=D.c.Z(d,o.e)*u
for(s=d;s<e;){A.c2R(f,g,f[g-n])
r=t+1
q=$.dcr[o.d[t]>>>8&15]
for(x=1;x<n;++x){if((x&v)>>>0===0){p=r+1
q=$.dcr[o.d[r]>>>8&15]
r=p}w=g+x
A.c2R(f,w,q.$3(f,f[w-1],w-n))}g+=n;++s
if((s&v)>>>0===0)t+=u}},
bEd(d,e,f){var x,w,v,u
for(x=d.$flags|0;e<f;e=u){w=d[e]
v=w>>>8&255
u=e+1
x&2&&B.L(d)
d[e]=(w&4278255360|(w&16711935)+(v<<16|v)&16711935)>>>0}}}
A.c3K.prototype={
geQ(){var x=this,w=x.d
if(w>1||x.e>=4||x.f>1||x.r!==0)return!1
return!0},
Qb(d,e,f,g){var x,w,v,u,t,s,r=this
if(!r.geQ())return!1
x=C.aRI[r.e]
if(r.d===0){w=r.b
v=e*w
u=r.a
D.H.ej(g,v,f*w,u.a,u.d-u.b+v)}else{w=e+f
u=r.x
u===$&&B.b()
u.cy=g
t=u.c
if(r.y)w=u.b7M(t.a,t.b,w)
else{s=u.ch
s.toString
u=u.a7G(s,t.a,t.b,w,u.gbMQ())
w=u}if(!w)return!1}if(x!=null){w=r.b
x.$6(w,r.c,w,e,f,g)}if(r.f===1)if(!r.b8N(g,r.b,r.c,e,f))return!1
if(e+f===r.c)r.w=!0
return!0},
b8N(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
A.adc.prototype={
b1P(d,e){var x=this,w=d.cD()
x.r=0
x.f=(w&1)!==0
x.w=d.d-d.b
x.x=e-16}}
A.ayb.prototype={}
A.axd.prototype={
act(d){var x,w=this
if(d===0)return!1
x=(d<<1>>>0)-1
w.e=x
x=new Int32Array(x<<1>>>0)
w.d=x
x[1]=-1
w.f=1
D.H.mw(w.a,0,128,255)
return!0},
aEf(d,e){var x,w,v,u,t,s=this
for(x=0,w=0,v=0;v<e;++v)if(d[v]>0){++x
w=v}if(!s.act(x))return!1
if(x===1){if(w<0||w>=e)return!1
return s.a6H(w,0,0)}u=new Int32Array(e)
if(!s.bkR(d,e,u))return!1
for(v=0;v<e;++v){t=d[v]
if(t>0)if(!s.a6H(v,u[v],t))return!1}return s.f===s.e},
bG4(d,e,f,g,h){var x,w,v,u=this
if(!u.act(h))return!1
for(x=0;x<h;++x){w=e[x]
if(w!==-1){v=f[x]
if(v>=g)return u.f===u.e
if(!u.a6H(v,w,d[x]))return u.f===u.e}}return u.f===u.e},
Ba(d){var x,w,v=this,u=d.aLI(),t=d.a,s=u&127,r=v.a[s]
if(r<=7){d.a=t+r
return v.b[s]}x=v.c[s]
t+=7
u=u>>>7
do{w=v.d
w===$&&B.b()
x=x+w[(x<<1>>>0)+1]+(u&1)
u=u>>>1;++t}while(v.awd(x))
d.a=t
return v.d[x<<1>>>0]},
a6H(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
if(f<=7){x=l.ays(e,f)
for(w=D.c.f9(1,7-f),v=l.b,u=v.$flags|0,t=l.a,s=t.$flags|0,r=0;r<w;++r){q=(x|D.c.f9(r,f))>>>0
u&2&&B.L(v)
v[q]=d
s&2&&B.L(t)
t[q]=f}}else x=l.ays(D.c.oH(e,f-7),7)
for(w=l.c,v=w.$flags|0,p=7,o=0;n=f-1,f>0;f=n){u=l.e
if(o>=u)return!1
t=l.d
t===$&&B.b()
s=(o<<1>>>0)+1
m=t[s]
if(m<0){m=l.f
if(m===u)return!1
t.$flags&2&&B.L(t)
t[s]=m-o
l.f=m+2
t[(m<<1>>>0)+1]=-1
t[(m+1<<1>>>0)+1]=-1}else if(m===0)return!1
o+=t[s]+(D.c.oH(e,n)&1);--p
if(p===0){v&2&&B.L(w)
w[x]=o}}if(l.boS(o))l.boT(o,0)
else if(l.awd(o))return!1
w=l.d
w===$&&B.b()
w.$flags&2&&B.L(w)
w[o<<1>>>0]=d
return!0},
ays(d,e){return D.c.ht((C.XX[d&15]<<4|C.XX[D.c.Z(d,4)])>>>0,8-e)},
boT(d,e){var x=this.d
x===$&&B.b()
x.$flags&2&&B.L(x)
x[(d<<1>>>0)+1]=e},
awd(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]!==0},
boS(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]<0},
bkR(d,e,f){var x,w,v,u,t,s,r,q,p=new Int32Array(16),o=new Int32Array(16)
for(x=0,w=0;x<e;++x){v=d[x]
if(v>w)w=v}if(w>15)return!1
for(x=0;x<e;++x){u=d[x]
p[u]=p[u]+1}p[0]=0
o[0]=-1
for(t=1,s=0;t<=w;++t){s=s+p[t-1]<<1>>>0
o[t]=s}for(u=f.$flags|0,x=0;x<e;++x){r=d[x]
if(r>0){q=o[r]
o[r]=q+1
u&2&&B.L(f)
f[x]=q}else{u&2&&B.L(f)
f[x]=-1}}return!0}}
A.a3Q.prototype={
h(d,e){return this.a[e]}}
A.X0.prototype={
J(){return"WebPFormat."+this.b}}
A.aKL.prototype={}
A.ayc.prototype={}
A.c3L.prototype={
JS(d){var x=A.dg(d,!1,null,0)
this.b=x
if(!this.asT(x))return!1
return!0},
pw(d){var x,w=this,v=null,u=A.dg(d,!1,v,0)
w.b=u
if(!w.asT(u))return v
u=new A.ayc(C.qZ,B.a([],y.J))
w.a=u
x=w.b
x.toString
if(!w.aCE(x,u))return v
u=w.a
switch(u.f.a){case 3:u.as=u.z.length
return u
case 2:x=w.b
x.toString
x.d=u.ay
if(!A.cZL(x,u).Qc())return v
u=w.a
u.as=u.z.length
return u
case 1:x=w.b
x.toString
x.d=u.ay
if(!A.cZJ(x,u).Qc())return v
u=w.a
u.as=u.z.length
return u
case 0:throw B.p(A.co("Unknown format for WebP"))}},
kE(d){var x,w,v,u,t=this,s=t.b
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
return t.aqI(s.C_(x,w),d)}w=x.f
if(w===C.AR){u=s.C_(x.ch,x.ay)
s=t.a
s.toString
return A.cZL(u,s).oY(0)}else if(w===C.JY){u=s.C_(x.ch,x.ay)
s=t.a
s.toString
return A.cZJ(u,s).oY(0)}return null},
nt(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=null
if(p.pw(e)==null)return o
x=p.a.e
if(!x)return p.kE(0)
for(w=o,v=w,u=0;x=p.a,u<x.as;++u){f=x.z[u]
t=p.kE(u)
if(t==null)continue
t.y=f.e
if(v==null||w==null){x=p.a
s=x.a
x=x.b
r=t.gqY()
q=t.a
q=q==null?o:q.gdG()
if(q==null)q=C.aj
v=A.iS(o,o,q,t.y,C.bG,x,o,0,r,o,C.aj,s,!1)
w=v}else{w=A.EB(w,!1,!1)
x=f.f
x===$&&B.b()
if(x){x=w.a
if(x!=null)x.od(0,o)}}A.d0k(w,t,C.C1,o,o,f.a,f.b,o,o,o,o)
v.o6(w)}return v},
aqI(d,e){var x,w,v,u=null,t=B.a([],y.J),s=new A.ayc(C.qZ,t)
if(!this.aCE(d,s))return u
if(s.f===C.qZ)return u
s.as=this.a.as
if(s.e){x=t.length
if(e>=x)return u
w=t[e]
t=w.x
t===$&&B.b()
x=w.w
x===$&&B.b()
return this.aqI(d.C_(t,x),e)}else{v=d.C_(s.ch,s.ay)
t=s.f
if(t===C.AR)return A.cZL(v,s).oY(0)
else if(t===C.JY)return A.cZJ(v,s).oY(0)}return u},
asT(d){if(d.jO(4)!=="RIFF")return!1
d.ag()
if(d.jO(4)!=="WEBP")return!1
return!0},
aCE(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
for(x=d.c,w=d.b;d.d<x;){v=d.jO(4)
u=d.ag()
t=u+1>>>1<<1>>>0
s=d.d
r=s-w
switch(v){case"VP8X":if(!this.bdr(d,e))return!1
break
case"VP8 ":e.ay=r
e.ch=u
e.f=C.JY
break
case"VP8L":e.ay=r
e.ch=u
e.f=C.AR
break
case"ALPH":e.toString
s=d.a
q=d.e
p=J.a0(s)
o=p.gA(s)
p=p.gA(s)
s=new A.nq(s,0,Math.min(o,p),0,q)
e.at=s
s.d=d.d
d.d+=t
break
case"ANIM":e.f=C.bPJ
n=d.ag()
s=new Uint8Array(4)
s[0]=n>>>8&255
s[1]=n>>>16&255
s[2]=n>>>24&255
s[3]=n&255
d.av()
break
case"ANMF":if(!this.bc2(d,e,u))return!1
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
return e.f!==C.qZ},
bdr(d,e){var x,w,v,u,t=d.cD()
if((t&192)!==0)return!1
x=D.c.Z(t,4)
w=D.c.Z(t,1)
if((t&1)!==0)return!1
if(d.ts()!==0)return!1
v=d.ts()
u=d.ts()
e.a=v+1
e.b=u+1
e.e=(w&1)!==0
e.d=(x&1)!==0
return!0},
bc2(d,e,f){var x,w=d.ts(),v=d.ts()
d.ts()
x=new A.ayb(w*2,v*2,d.ts()+1,d.ts())
x.b1P(d,f)
if(x.r!==0)return!1
e.z.push(x)
return!0}}
A.bus.prototype={
J(){return"IccProfileCompression."+this.b}}
A.a4g.prototype={
bHx(){var x,w=this
if(w.b===C.Em)return w.c
x=C.LJ.aHh(w.c,null)
w.c=x
w.b=C.Em
return x}}
A.awh.prototype={
J(){return"FrameType."+this.b}}
A.EC.prototype={
glq(){var x=this.x
return x===$?this.x=B.a([],y.g):x},
b1c(d,e,f,g){var x,w,v,u=this,t=d.gdG(),s=d.gqY(),r=d.a
u.aqt(g,e,t,s,r==null?null:r.gf7())
t=d.b
if(t!=null)u.b=B.i7(t,y.N,y.I)
t=d.d
if(t!=null){s=y.N
u.d=B.i7(t,s,s)}u.glq().push(u)
if(!f){x=d.glq().length
for(t=y.g,w=1;w<x;++w){v=d.x
u.o6(A.axB((v===$?d.x=B.a([],t):v)[w],e,!1,g))}}},
b1b(d,e,f){var x,w,v,u,t=this,s=d.b
if(s!=null)t.b=B.i7(s,y.N,y.I)
s=d.d
if(s!=null){x=y.N
t.d=B.i7(s,x,x)}t.glq().push(t)
if(!e&&d.glq().length>1){w=d.glq().length
for(s=y.g,v=1;v<w;++v){u=d.x
t.o6(A.EB((u===$?d.x=B.a([],s):u)[v],!1,!1))}}},
o6(d){var x=this
if(d==null)d=A.EB(x,!0,!0)
d.z=x.glq().length
if(D.b.ga1(x.glq())!==d)x.glq().push(d)
return d},
ZR(){return this.o6(null)},
aqt(d,e,f,g,h){var x,w,v=this,u=null
switch(f.a){case 0:if(h==null){x=D.e.fI(d*g/8)
w=new A.SB($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.e.fI(d/8)
w=new A.SB($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 1:if(h==null){x=D.e.fI(d*(g<<1>>>0)/8)
w=new A.SD($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.e.fI(d/4)
w=new A.SD($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 2:if(h==null){if(g===2)x=d
else if(g===4)x=d*2
else x=g===3?D.e.fI(d*1.5):D.e.fI(d/2)
w=new A.SF($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.e.fI(d/2)
w=new A.SF($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 3:if(h==null)v.a=A.d6P(d,e,g)
else v.a=new A.SG(new Uint8Array(d*e),h,d,e,1)
break
case 4:x=d*e
if(h==null)v.a=new A.SC(new Uint16Array(x*g),u,d,e,g)
else v.a=new A.SC(new Uint16Array(x),h,d,e,1)
break
case 5:v.a=A.dxE(d,e,g)
break
case 6:v.a=new A.a4r(new Int8Array(d*e*g),d,e,g)
break
case 7:v.a=new A.a4p(new Int16Array(d*e*g),d,e,g)
break
case 8:v.a=new A.a4q(new Int32Array(d*e*g),d,e,g)
break
case 9:v.a=A.dxC(d,e,g)
break
case 10:v.a=A.dxD(d,e,g)
break
case 11:v.a=new A.a4o(new Float64Array(d*e*4*g),d,e,g)
break}},
j(d){var x=this
return"Image("+x.ge7(0)+", "+x.ge4(0)+", "+x.gdG().b+", "+x.gqY()+")"},
ge7(d){var x=this.a
x=x==null?null:x.a
return x==null?0:x},
ge4(d){var x=this.a
x=x==null?null:x.b
return x==null?0:x},
gdG(){var x=this.a
x=x==null?null:x.gdG()
return x==null?C.aj:x},
gxS(){var x=this.e
return x==null?this.e=new A.RX(B.I(y.N,y.P)):x},
aSU(d,e){var x=this,w=x.b;(w==null?x.b=B.I(y.N,y.I):w).m(0,d,e)
if(x.b.a===0)x.b=null},
gaa(d){var x=this.a
return x.gaa(x)},
gaq(d){var x=this.a
x=x==null?null:x.gaq(x)
if(x==null)x=D.H.gaq(new Uint8Array(0))
return x},
gqY(){var x=this.a
x=x==null?null:x.gf7()
x=x==null?null:x.b
if(x==null){x=this.a
x=x==null?null:x.c}return x==null?0:x},
gta(){var x=this.a
return(x==null?null:x.gf7())!=null},
gno(){var x=this.a
x=x==null?null:x.gno()
return x==null?0:x},
aJD(d,e){return d>=0&&e>=0&&d<this.ge7(0)&&e<this.ge4(0)},
oD(d,e,f,g){var x=this.a
x=x==null?null:x.oD(d,e,f,g)
if(x==null)x=new A.zZ(new Uint8Array(0))
return x},
er(d,e,f){var x=this.a
x=x==null?null:x.er(d,e,f)
return x==null?new A.h0():x},
oE(d,e){return this.er(d,e,null)},
kP(d,e){if(d<0||d>=this.ge7(0)||e<0||e>=this.ge4(0))return new A.h0()
return this.er(d,e,null)},
aQO(d,e,f){switch(f.a){case 0:return this.kP(D.e.L(d),D.e.L(e))
case 1:case 3:return this.aQP(d,e)
case 2:return this.aQN(d,e)}},
aQP(d,e){var x,w,v,u,t,s,r=this,q=D.e.L(d),p=q-(d>=0?0:1),o=p+1
q=D.e.L(e)
x=q-(e>=0?0:1)
w=x+1
q=new A.bvm(d-p,e-x)
v=r.kP(p,x)
u=w>=r.ge4(0)?v:r.kP(p,w)
t=o>=r.ge7(0)?v:r.kP(o,x)
s=o>=r.ge7(0)||w>=r.ge4(0)?v:r.kP(o,w)
return r.oD(q.$4(v.gar(v),t.gar(t),u.gar(u),s.gar(s)),q.$4(v.gaE(),t.gaE(),u.gaE(),s.gaE()),q.$4(v.gaF(v),t.gaF(t),u.gaF(u),s.gaF(s)),q.$4(v.gaU(v),t.gaU(t),u.gaU(u),s.gaU(s)))},
aQN(d0,d1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=D.e.L(d0),c6=c5-(d0>=0?0:1),c7=c6-1,c8=c6+1,c9=c6+2
c5=D.e.L(d1)
x=c5-(d1>=0?0:1)
w=x-1
v=x+1
u=x+2
t=d0-c6
s=d1-x
c5=new A.bvl()
r=c4.kP(c6,x)
q=c7<0
p=!q
o=!p||w<0?r:c4.kP(c7,w)
n=q?r:c4.kP(c6,w)
m=w<0
l=m||c8>=c4.ge7(0)?r:c4.kP(c8,w)
k=c9>=c4.ge7(0)||m?r:c4.kP(c9,w)
j=c5.$5(t,o.gar(o),n.gar(n),l.gar(l),k.gar(k))
i=c5.$5(t,o.gaE(),n.gaE(),l.gaE(),k.gaE())
h=c5.$5(t,o.gaF(o),n.gaF(n),l.gaF(l),k.gaF(k))
g=c5.$5(t,o.gaU(o),n.gaU(n),l.gaU(l),k.gaU(k))
f=q?r:c4.kP(c7,x)
e=c8>=c4.ge7(0)?r:c4.kP(c8,x)
d=c9>=c4.ge7(0)?r:c4.kP(c9,x)
a0=c5.$5(t,f.gar(f),r.gar(r),e.gar(e),d.gar(d))
a1=c5.$5(t,f.gaE(),r.gaE(),e.gaE(),d.gaE())
a2=c5.$5(t,f.gaF(f),r.gaF(r),e.gaF(e),d.gaF(d))
a3=c5.$5(t,f.gaU(f),r.gaU(r),e.gaU(e),d.gaU(d))
a4=!p||v>=c4.ge4(0)?r:c4.kP(c7,v)
a5=v>=c4.ge4(0)?r:c4.kP(c6,v)
a6=c8>=c4.ge7(0)||v>=c4.ge4(0)?r:c4.kP(c8,v)
a7=c9>=c4.ge7(0)||v>=c4.ge4(0)?r:c4.kP(c9,v)
a8=c5.$5(t,a4.gar(a4),a5.gar(a5),a6.gar(a6),a7.gar(a7))
a9=c5.$5(t,a4.gaE(),a5.gaE(),a6.gaE(),a7.gaE())
b0=c5.$5(t,a4.gaF(a4),a5.gaF(a5),a6.gaF(a6),a7.gaF(a7))
b1=c5.$5(t,a4.gaU(a4),a5.gaU(a5),a6.gaU(a6),a7.gaU(a7))
b2=!p||u>=c4.ge4(0)?r:c4.kP(c7,u)
b3=u>=c4.ge4(0)?r:c4.kP(c6,u)
b4=c8>=c4.ge7(0)||u>=c4.ge4(0)?r:c4.kP(c8,u)
b5=c9>=c4.ge7(0)||u>=c4.ge4(0)?r:c4.kP(c9,u)
b6=c5.$5(t,b2.gar(b2),b3.gar(b3),b4.gar(b4),b5.gar(b5))
b7=c5.$5(t,b2.gaE(),b3.gaE(),b4.gaE(),b5.gaE())
b8=c5.$5(t,b2.gaF(b2),b3.gaF(b3),b4.gaF(b4),b5.gaF(b5))
b9=c5.$5(t,b2.gaU(b2),b3.gaU(b3),b4.gaU(b4),b5.gaU(b5))
c0=c5.$5(s,j,a0,a8,b6)
c1=c5.$5(s,i,a1,a9,b7)
c2=c5.$5(s,h,a2,b0,b8)
c3=c5.$5(s,g,a3,b1,b9)
return c4.oD(D.e.L(c0),D.e.L(c1),D.e.L(c2),D.e.L(c3))},
BN(d,e,f){var x
if(y.c0.b(f))if(f.gfM(f).gf7()!=null)if(this.gta()){x=this.a
if(x!=null)x.fG(d,e,f.gdH(f),0,0)
return}x=this.a
if(x!=null)x.kR(d,e,f.gar(f),f.gaE(),f.gaF(f),f.gaU(f))},
gcr(){var x=this.a
x=x==null?null:x.gcr()
return x==null?0:x},
od(d,e){var x=this.a
return x==null?null:x.od(0,e)},
W(d){return this.od(0,null)},
aFC(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
if(a5==null)a5=a3.gdG()
if(a6==null)a6=a3.gqY()
x=C.a6S.h(0,a5)
w=!1
if(a5===a3.gdG())if(a6===a3.gqY()){v=a3.a
w=(v==null?a4:v.gf7())==null}if(w)return A.EB(a3,!1,!1)
for(w=a3.glq(),v=w.length,u=y.N,t=y.p,s=a4,r=0;r<w.length;w.length===v||(0,B.K)(w),++r,s=i){q=w[r]
p=q.a
o=p==null
n=o?a4:p.a
if(n==null)n=0
p=o?a4:p.b
if(p==null)p=0
o=q.e
o=o==null?a4:A.a2Y(o)
m=q.c
if(m==null)m=a4
else{l=m.a
k=m.b
m=m.c
m=new A.a4g(l,k,new Uint8Array(m.subarray(0,B.ts(0,a4,m.length))))}l=q.w
k=q.r
j=A.iS(a4,o,a5,q.y,l,p,m,k,a6,a4,C.aj,n,!1)
p=q.d
j.d=p!=null?B.i7(p,u,u):a4
if(s!=null){s.o6(j)
i=s}else i=j
p=j.a
h=p==null?a4:p.gf7()
p=j.a
p=p==null?a4:p.gf7()
g=p==null?a4:p.gdG()
if(g==null)g=a5
p=q.a
if(h!=null){f=B.I(t,t)
e=p==null?a4:p.er(0,0,a4)
if(e==null)e=new A.h0()
for(p=j.a,p=p.gaa(p),d=a4,a0=0;p.q();){a1=p.gM(p)
a2=A.dh7(D.e.fW(e.gj8()*255),D.e.fW(e.giT()*255),D.e.fW(e.gj1()*255),0)
if(f.a4(0,a2)){o=f.h(0,a2)
o.toString
a1.sdH(0,o)}else{f.m(0,a2,a0)
a1.sdH(0,a0)
d=A.r1(e,x,g,a6,d)
h.qb(a0,d.gar(d),d.gaE(),d.gaF(d));++a0}e.q()}}else{e=p==null?a4:p.er(0,0,a4)
if(e==null)e=new A.h0()
for(p=j.a,p=p.gaa(p);p.q();){A.r1(e,x,a4,a4,p.gM(p))
e.q()}}}s.toString
return s},
oX(d){return this.aFC(d,null)},
aFB(d){return this.aFC(null,d)},
bEs(d){var x,w,v,u
if(this.d==null){x=y.N
this.d=B.I(x,x)}for(x=new B.ca(d,d.r,d.e,B.t(d).i("ca<1>"));x.q();){w=x.d
v=this.d
v.toString
u=d.h(0,w)
u.toString
v.m(0,w,u)}},
b7m(d,e,f){var x,w=65536
switch(e.a){case 0:return null
case 1:return null
case 2:return null
case 3:x=d===C.cX?w:256
return new A.wi(new Uint8Array(x*f),x,f)
case 4:x=d===C.cX?w:256
return new A.aCN(new Uint16Array(x*f),x,f)
case 5:x=d===C.cX?w:256
return new A.a7g(new Uint32Array(x*f),x,f)
case 6:x=d===C.cX?w:256
return new A.aCM(new Int8Array(x*f),x,f)
case 7:x=d===C.cX?w:256
return new A.aCK(new Int16Array(x*f),x,f)
case 8:x=d===C.cX?w:256
return new A.aCL(new Int32Array(x*f),x,f)
case 9:x=d===C.cX?w:256
return new A.aCH(new Uint16Array(x*f),x,f)
case 10:x=d===C.cX?w:256
return new A.aCI(new Float32Array(x*f),x,f)
case 11:x=d===C.cX?w:256
return new A.aCJ(new Float64Array(x*f),x,f)}}}
A.no.prototype={
gf7(){return null}}
A.Sz.prototype={
rJ(d,e){var x=this,w=x.d
if(e)w=new Uint16Array(w.length)
else w=new Uint16Array(B.c9(w))
return new A.Sz(w,x.a,x.b,x.c)},
gdG(){return C.jk},
gaq(d){return D.eS.gaq(this.d)},
gno(){return 16},
gtx(){return this.a*this.c*2},
gaa(d){return A.cXY(this)},
r8(d,e,f,g,h){return A.wk(A.cXY(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gcr(){return 1},
gte(){return!0},
oD(d,e,f,g){var x=new Uint16Array(4),w=new A.QE(x)
x[0]=A.hT(d)
x[1]=A.hT(e)
x[2]=A.hT(f)
x[3]=A.hT(g)
x=w
return x},
er(d,e,f){if(f==null||!(f instanceof A.LB)||f.d!==this)f=A.cXY(this)
f.hQ(0,d,e)
return f},
oE(d,e){return this.er(d,e,null)},
nc(d,e,f){var x=this.c,w=this.d,v=A.hT(f)
w.$flags&2&&B.L(w)
w[e*this.a*x+d*x]=v},
fG(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=A.hT(f)
v.$flags&2&&B.L(v)
v[w]=u
if(x>1){v[w+1]=A.hT(g)
if(x>2)v[w+2]=A.hT(h)}},
kR(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=A.hT(f)
v.$flags&2&&B.L(v)
v[w]=u
if(x>1){v[w+1]=A.hT(g)
if(x>2){v[w+2]=A.hT(h)
if(x>3)v[w+3]=A.hT(i)}}},
j(d){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
od(d,e){}}
A.SA.prototype={
rJ(d,e){var x=this,w=x.d
if(e)w=new Float32Array(w.length)
else w=new Float32Array(B.c9(w))
return new A.SA(w,x.a,x.b,x.c)},
gdG(){return C.kV},
gaq(d){return D.fW.gaq(this.d)},
gno(){return 32},
gaa(d){return A.cXZ(this)},
r8(d,e,f,g,h){return A.wk(A.cXZ(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gcr(){return 1},
gtx(){return this.a*this.c*4},
gte(){return!0},
oD(d,e,f,g){var x=new Float32Array(4),w=new A.QF(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
er(d,e,f){if(f==null||!(f instanceof A.LC)||f.d!==this)f=A.cXZ(this)
f.hQ(0,d,e)
return f},
oE(d,e){return this.er(d,e,null)},
nc(d,e,f){var x=this.c,w=this.d
w.$flags&2&&B.L(w)
w[e*this.a*x+d*x]=f},
fG(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.L(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
kR(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.L(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
od(d,e){}}
A.a4o.prototype={
rJ(d,e){var x=this,w=x.d
if(e)w=new Float64Array(w.length)
else w=new Float64Array(B.c9(w))
return new A.a4o(w,x.a,x.b,x.c)},
gdG(){return C.mB},
gaq(d){return D.fg.gaq(this.d)},
gA(d){return this.d.byteLength},
gno(){return 64},
gaa(d){return A.cY_(this)},
r8(d,e,f,g,h){return A.wk(A.cY_(this),e,f,g,h)},
gcr(){return 1},
gtx(){return this.a*this.c*8},
gte(){return!0},
oD(d,e,f,g){var x=new Float64Array(4),w=new A.QG(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
er(d,e,f){if(f==null||!(f instanceof A.LD)||f.d!==this)f=A.cY_(this)
f.hQ(0,d,e)
return f},
oE(d,e){return this.er(d,e,null)},
nc(d,e,f){var x=this.c,w=this.d
w.$flags&2&&B.L(w)
w[e*this.a*x+d*x]=f},
fG(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.L(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
kR(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.L(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
od(d,e){}}
A.a4p.prototype={
rJ(d,e){var x=this,w=x.d
if(e)w=new Int16Array(w.length)
else w=new Int16Array(B.c9(w))
return new A.a4p(w,x.a,x.b,x.c)},
gdG(){return C.mD},
gaq(d){return D.lq.gaq(this.d)},
gaa(d){return A.cY0(this)},
r8(d,e,f,g,h){return A.wk(A.cY0(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gcr(){return 32767},
gte(){return!0},
gno(){return 16},
gtx(){return this.a*this.c*2},
oD(d,e,f,g){var x=D.e.L(d),w=D.e.L(e),v=D.e.L(f),u=D.e.L(g),t=new Int16Array(4),s=new A.QH(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
er(d,e,f){if(f==null||!(f instanceof A.LE)||f.d!==this)f=A.cY0(this)
f.hQ(0,d,e)
return f},
oE(d,e){return this.er(d,e,null)},
nc(d,e,f){var x=this.c,w=this.d,v=D.e.L(f)
w.$flags&2&&B.L(w)
w[e*this.a*x+d*x]=v},
fG(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2)v[w+2]=D.e.L(h)}},
kR(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2){v[w+2]=D.e.L(h)
if(x>3)v[w+3]=D.e.L(i)}}},
j(d){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
od(d,e){}}
A.a4q.prototype={
rJ(d,e){var x=this,w=x.d
if(e)w=new Int32Array(w.length)
else w=new Int32Array(B.c9(w))
return new A.a4q(w,x.a,x.b,x.c)},
gdG(){return C.mE},
gaq(d){return D.d9.gaq(this.d)},
gno(){return 32},
gtx(){return this.a*this.c*4},
gaa(d){return A.cY1(this)},
r8(d,e,f,g,h){return A.wk(A.cY1(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gcr(){return 2147483647},
gte(){return!0},
oD(d,e,f,g){var x=D.e.L(d),w=D.e.L(e),v=D.e.L(f),u=D.e.L(g),t=new Int32Array(4),s=new A.QI(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
er(d,e,f){if(f==null||!(f instanceof A.LF)||f.d!==this)f=A.cY1(this)
f.hQ(0,d,e)
return f},
oE(d,e){return this.er(d,e,null)},
nc(d,e,f){var x=this.c,w=this.d,v=D.e.L(f)
w.$flags&2&&B.L(w)
w[e*this.a*x+d*x]=v},
fG(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2)v[w+2]=D.e.L(h)}},
kR(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2){v[w+2]=D.e.L(h)
if(x>3)v[w+3]=D.e.L(i)}}},
j(d){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
od(d,e){}}
A.a4r.prototype={
rJ(d,e){var x=this,w=x.d
if(e)w=new Int8Array(w.length)
else w=new Int8Array(B.c9(w))
return new A.a4r(w,x.a,x.b,x.c)},
gdG(){return C.mC},
gaq(d){return D.lr.gaq(this.d)},
gtx(){return this.a*this.c},
gaa(d){return A.cY2(this)},
r8(d,e,f,g,h){return A.wk(A.cY2(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gcr(){return 127},
gte(){return!0},
gno(){return 8},
oD(d,e,f,g){var x=D.e.L(d),w=D.e.L(e),v=D.e.L(f),u=D.e.L(g),t=new Int8Array(4),s=new A.QJ(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
er(d,e,f){if(f==null||!(f instanceof A.LG)||f.d!==this)f=A.cY2(this)
f.hQ(0,d,e)
return f},
oE(d,e){return this.er(d,e,null)},
nc(d,e,f){var x=this.c,w=this.d,v=D.e.L(f)
w.$flags&2&&B.L(w)
w[e*(this.a*x)+d*x]=v},
fG(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2)v[w+2]=D.e.L(h)}},
kR(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2){v[w+2]=D.e.L(h)
if(x>3)v[w+3]=D.e.L(i)}}},
j(d){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
od(d,e){}}
A.SB.prototype={
c00(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.bc()
this.d=x},
rJ(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.c9(v))}x=w.f
x=x==null?null:x.ew(0)
return new A.SB(v,w.e,x,w.a,w.b,w.c)},
gdG(){return C.hF},
gA(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gcr(){var x=this.f
x=x==null?null:x.gcr()
return x==null?1:x},
gte(){return!1},
gaq(d){var x=this.d
x===$&&B.b()
return D.H.gaq(x)},
gno(){return 1},
gaa(d){return A.a7x(this)},
r8(d,e,f,g,h){return A.wk(A.a7x(this),e,f,g,h)},
oD(d,e,f,g){var x=new A.QM(4,0)
x.iV(D.e.L(d),D.e.L(e),D.e.L(f),D.e.L(g))
return x},
er(d,e,f){if(f==null||!(f instanceof A.LH)||f.f!==this)f=A.a7x(this)
f.hQ(0,d,e)
return f},
oE(d,e){return this.er(d,e,null)},
nc(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7x(w):x).hQ(0,d,e)
w.r.lg(0,f)},
fG(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7x(w):x).hQ(0,d,e)
w.r.l9(f,g,h)},
kR(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7x(w):x).hQ(0,d,e)
w.r.iV(f,g,h,i)},
j(d){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
od(d,e){},
gtx(){return this.e},
gf7(){return this.f}}
A.SC.prototype={
rJ(d,e){var x,w=this,v=w.d
if(e)v=new Uint16Array(v.length)
else v=new Uint16Array(B.c9(v))
x=w.e
x=x==null?null:x.ew(0)
return new A.SC(v,x,w.a,w.b,w.c)},
gdG(){return C.cX},
gaq(d){return D.eS.gaq(this.d)},
gno(){return 16},
gcr(){var x=this.e
x=x==null?null:x.gcr()
return x==null?65535:x},
gtx(){return this.a*this.c*2},
gaa(d){return A.cY3(this)},
r8(d,e,f,g,h){return A.wk(A.cY3(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gte(){return!0},
oD(d,e,f,g){var x=D.e.L(d),w=D.e.L(e),v=D.e.L(f),u=D.e.L(g),t=new Uint16Array(4),s=new A.QN(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
er(d,e,f){if(f==null||!(f instanceof A.LI)||f.d!==this)f=A.cY3(this)
f.hQ(0,d,e)
return f},
oE(d,e){return this.er(d,e,null)},
nc(d,e,f){var x=this.c,w=this.d,v=D.e.L(f)
w.$flags&2&&B.L(w)
w[e*this.a*x+d*x]=v},
fG(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2)v[w+2]=D.e.L(h)}},
kR(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2){v[w+2]=D.e.L(h)
if(x>3)v[w+3]=D.e.L(i)}}},
j(d){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
od(d,e){},
gf7(){return this.e}}
A.SD.prototype={
c01(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.bc()
this.d=x},
rJ(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.c9(v))}x=w.f
x=x==null?null:x.ew(0)
return new A.SD(v,w.e,x,w.a,w.b,w.c)},
gdG(){return C.iu},
gno(){return 2},
gaq(d){var x=this.d
x===$&&B.b()
return D.H.gaq(x)},
gaa(d){return A.a7y(this)},
r8(d,e,f,g,h){return A.wk(A.a7y(this),e,f,g,h)},
gA(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gcr(){var x=this.f
x=x==null?null:x.gcr()
return x==null?3:x},
gte(){return!1},
oD(d,e,f,g){var x=new A.QO(4,0)
x.iV(D.e.L(d),D.e.L(e),D.e.L(f),D.e.L(g))
return x},
er(d,e,f){if(f==null||!(f instanceof A.LJ)||f.f!==this)f=A.a7y(this)
f.hQ(0,d,e)
return f},
oE(d,e){return this.er(d,e,null)},
nc(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7y(w):x).hQ(0,d,e)
w.r.lh(0,f)},
fG(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7y(w):x).hQ(0,d,e)
w.r.l9(f,g,h)},
kR(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7y(w):x).hQ(0,d,e)
w.r.iV(f,g,h,i)},
j(d){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
od(d,e){},
gtx(){return this.e},
gf7(){return this.f}}
A.SE.prototype={
rJ(d,e){var x=this,w=x.d
if(e)w=new Uint32Array(w.length)
else w=new Uint32Array(B.c9(w))
return new A.SE(w,x.a,x.b,x.c)},
gdG(){return C.kW},
gaq(d){return D.bM.gaq(this.d)},
gtx(){return this.a*this.c*4},
gno(){return 32},
gcr(){return 4294967295},
gaa(d){return A.cY4(this)},
r8(d,e,f,g,h){return A.wk(A.cY4(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gte(){return!0},
oD(d,e,f,g){var x=D.e.L(d),w=D.e.L(e),v=D.e.L(f),u=D.e.L(g),t=new Uint32Array(4),s=new A.QP(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
er(d,e,f){if(f==null||!(f instanceof A.LK)||f.d!==this)f=A.cY4(this)
f.hQ(0,d,e)
return f},
oE(d,e){return this.er(d,e,null)},
nc(d,e,f){var x=this.c,w=this.d,v=D.e.L(f)
w.$flags&2&&B.L(w)
w[e*this.a*x+d*x]=v},
fG(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2)v[w+2]=D.e.L(h)}},
kR(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2){v[w+2]=D.e.L(h)
if(x>3)v[w+3]=D.e.L(i)}}},
j(d){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
od(d,e){}}
A.SF.prototype={
c02(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.bc()
this.d=x},
rJ(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.c9(v))}x=w.f
x=x==null?null:x.ew(0)
return new A.SF(v,w.e,x,w.a,w.b,w.c)},
gdG(){return C.iv},
gaq(d){var x=this.d
x===$&&B.b()
return D.H.gaq(x)},
gaa(d){return A.a7z(this)},
r8(d,e,f,g,h){return A.wk(A.a7z(this),e,f,g,h)},
gA(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gcr(){var x=this.f
x=x==null?null:x.gcr()
return x==null?15:x},
gte(){return!1},
gno(){return 4},
oD(d,e,f,g){var x=D.e.L(d),w=D.e.L(e),v=D.e.L(f),u=D.e.L(g),t=new A.QQ(4,new Uint8Array(2))
t.iV(x,w,v,u)
x=t
return x},
er(d,e,f){if(f==null||!(f instanceof A.LL)||f.e!==this)f=A.a7z(this)
f.hQ(0,d,e)
return f},
oE(d,e){return this.er(d,e,null)},
nc(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7z(w):x).hQ(0,d,e)
w.r.li(0,f)},
fG(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7z(w):x).hQ(0,d,e)
w.r.l9(f,g,h)},
kR(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7z(w):x).hQ(0,d,e)
w.r.iV(f,g,h,i)},
j(d){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
od(d,e){},
gtx(){return this.e},
gf7(){return this.f}}
A.SG.prototype={
rJ(d,e){var x,w=this,v=w.d
if(e)v=new Uint8Array(v.length)
else v=new Uint8Array(B.c9(v))
x=w.e
x=x==null?null:x.ew(0)
return new A.SG(v,x,w.a,w.b,w.c)},
gdG(){return C.aj},
gaq(d){return D.H.gaq(this.d)},
gtx(){return this.a*this.c},
gno(){return 8},
gaa(d){return A.bHI(this)},
r8(d,e,f,g,h){return A.wk(A.bHI(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gcr(){var x=this.e
x=x==null?null:x.gcr()
return x==null?255:x},
gte(){return!1},
oD(d,e,f,g){var x=A.dq2(D.e.L(D.e.aM(d,0,255)),D.e.L(D.e.aM(e,0,255)),D.e.L(D.e.aM(f,0,255)),D.e.L(D.e.aM(g,0,255)))
return x},
er(d,e,f){if(f==null||!(f instanceof A.LM)||f.d!==this)f=A.bHI(this)
f.hQ(0,d,e)
return f},
oE(d,e){return this.er(d,e,null)},
nc(d,e,f){var x=this.c,w=this.d,v=D.e.L(f)
w.$flags&2&&B.L(w)
w[e*(this.a*x)+d*x]=v},
fG(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2)v[w+2]=D.e.L(h)}},
kR(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&B.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2){v[w+2]=D.e.L(h)
if(x>3)v[w+3]=D.e.L(i)}}},
j(d){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
od(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=e==null?l:A.r1(e,l,C.aj,l,l),j=m.c
if(j===1){x=k==null?0:D.c.aM(B.bx(k.gar(k)),0,255)
j=m.d
D.H.mw(j,0,j.length,x)}else if(j===2){j=k==null
x=j?0:D.c.aM(B.bx(k.gar(k)),0,255)
w=j?0:D.c.aM(B.bx(k.gaE()),0,255)
v=J.cV3(D.H.gaq(m.d),0,null)
D.eS.mw(v,0,v.length,(w<<8|x)>>>0)}else if(j===4){j=k==null
x=j?0:D.c.aM(B.bx(k.gar(k)),0,255)
w=j?0:D.c.aM(B.bx(k.gaE()),0,255)
u=j?0:D.c.aM(B.bx(k.gaF(k)),0,255)
t=j?0:D.c.aM(B.bx(k.gaU(k)),0,255)
s=J.pW(D.H.gaq(m.d),0,null)
D.bM.mw(s,0,s.length,(t<<24|u<<16|w<<8|x)>>>0)}else{j=k==null
x=j?0:D.c.aM(B.bx(k.gar(k)),0,255)
w=j?0:D.c.aM(B.bx(k.gaE()),0,255)
u=j?0:D.c.aM(B.bx(k.gaF(k)),0,255)
for(r=A.bHI(m),j=r.d,q=j.c>0,j=j.d,p=j.$flags|0;r.q();){if(q){o=r.c
n=D.e.L(D.c.aM(x,0,255))
p&2&&B.L(j)
j[o]=n}r.saE(w)
r.saF(0,u)}}},
gf7(){return this.e}}
A.ayd.prototype={
J(){return"Interpolation."+this.b}}
A.bHi.prototype={}
A.aCH.prototype={
ew(d){return new A.aCH(new Uint16Array(B.c9(this.c)),this.a,this.b)},
gaq(d){return D.eS.gaq(this.c)},
gdG(){return C.jk},
gcr(){return 1},
fR(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=A.hT(g)
x.$flags&2&&B.L(x)
x[e*v+f]=w}},
qb(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=A.hT(e)
x.$flags&2&&B.L(x)
x[d]=w
if(v>1){x[d+1]=A.hT(f)
if(v>2)x[d+2]=A.hT(g)}},
na(d,e,f){var x,w=this.b
if(f<w){w=this.c[e*w+f]
x=$.iR
w=(x!=null?x:A.jH())[w]}else w=0
return w},
nR(d){var x=this.c[d*this.b],w=$.iR
return(w!=null?w:A.jH())[x]},
nP(d){var x,w=this.b
if(w<2)return 0
w=this.c[d*w+1]
x=$.iR
return(x!=null?x:A.jH())[w]},
nN(d){var x,w=this.b
if(w<3)return 0
w=this.c[d*w+2]
x=$.iR
return(x!=null?x:A.jH())[w]},
pq(d){var x,w=this.b
if(w<4)return 0
w=this.c[d*w+3]
x=$.iR
return(x!=null?x:A.jH())[w]},
vd(d,e){return this.fR(0,d,0,e)},
vb(d,e){return this.fR(0,d,1,e)},
va(d,e){return this.fR(0,d,2,e)},
v9(d,e){return this.fR(0,d,3,e)}}
A.aCI.prototype={
ew(d){return new A.aCI(new Float32Array(B.c9(this.c)),this.a,this.b)},
gaq(d){return D.fW.gaq(this.c)},
gdG(){return C.kV},
gcr(){return 1},
fR(d,e,f,g){var x,w=this.b
if(f<w){x=this.c
x.$flags&2&&B.L(x)
x[e*w+f]=g}},
qb(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x.$flags&2&&B.L(x)
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
na(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nR(d){return this.c[d*this.b]},
nP(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nN(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
pq(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
vd(d,e){return this.fR(0,d,0,e)},
vb(d,e){return this.fR(0,d,1,e)},
va(d,e){return this.fR(0,d,2,e)},
v9(d,e){return this.fR(0,d,3,e)}}
A.aCJ.prototype={
ew(d){return new A.aCJ(new Float64Array(B.c9(this.c)),this.a,this.b)},
gaq(d){return D.fg.gaq(this.c)},
gdG(){return C.mB},
gcr(){return 1},
fR(d,e,f,g){var x,w=this.b
if(f<w){x=this.c
x.$flags&2&&B.L(x)
x[e*w+f]=g}},
qb(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x.$flags&2&&B.L(x)
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
na(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nR(d){return this.c[d*this.b]},
nP(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nN(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
pq(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
vd(d,e){return this.fR(0,d,0,e)},
vb(d,e){return this.fR(0,d,1,e)},
va(d,e){return this.fR(0,d,2,e)},
v9(d,e){return this.fR(0,d,3,e)}}
A.aCK.prototype={
ew(d){return new A.aCK(new Int16Array(B.c9(this.c)),this.a,this.b)},
gaq(d){return D.lq.gaq(this.c)},
gdG(){return C.mD},
gcr(){return 32767},
fR(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.L(g)
x.$flags&2&&B.L(x)
x[e*v+f]=w}},
qb(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.e.L(e)
x.$flags&2&&B.L(x)
x[d]=w
if(v>1){x[d+1]=D.e.L(f)
if(v>2)x[d+2]=D.e.L(g)}},
na(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nR(d){return this.c[d*this.b]},
nP(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nN(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
pq(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
vd(d,e){return this.fR(0,d,0,e)},
vb(d,e){return this.fR(0,d,1,e)},
va(d,e){return this.fR(0,d,2,e)},
v9(d,e){return this.fR(0,d,3,e)}}
A.aCL.prototype={
ew(d){return new A.aCL(new Int32Array(B.c9(this.c)),this.a,this.b)},
gaq(d){return D.d9.gaq(this.c)},
gdG(){return C.mE},
gcr(){return 2147483647},
fR(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.L(g)
x.$flags&2&&B.L(x)
x[e*v+f]=w}},
qb(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.e.L(e)
x.$flags&2&&B.L(x)
x[d]=w
if(v>1){x[d+1]=D.e.L(f)
if(v>2)x[d+2]=D.e.L(g)}},
na(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nR(d){return this.c[d*this.b]},
nP(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nN(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
pq(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
vd(d,e){return this.fR(0,d,0,e)},
vb(d,e){return this.fR(0,d,1,e)},
va(d,e){return this.fR(0,d,2,e)},
v9(d,e){return this.fR(0,d,3,e)}}
A.aCM.prototype={
ew(d){return new A.aCM(new Int8Array(B.c9(this.c)),this.a,this.b)},
gaq(d){return D.lr.gaq(this.c)},
gdG(){return C.mC},
gcr(){return 127},
fR(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.L(g)
x.$flags&2&&B.L(x)
x[e*v+f]=w}},
qb(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.e.L(e)
x.$flags&2&&B.L(x)
x[d]=w
if(v>1){x[d+1]=D.e.L(f)
if(v>2)x[d+2]=D.e.L(g)}},
na(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nR(d){return this.c[d*this.b]},
nP(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nN(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
pq(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
vd(d,e){return this.fR(0,d,0,e)},
vb(d,e){return this.fR(0,d,1,e)},
va(d,e){return this.fR(0,d,2,e)},
v9(d,e){return this.fR(0,d,3,e)}}
A.aCN.prototype={
ew(d){return new A.aCN(new Uint16Array(B.c9(this.c)),this.a,this.b)},
gaq(d){return D.eS.gaq(this.c)},
gdG(){return C.cX},
gcr(){return 65535},
fR(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.L(g)
x.$flags&2&&B.L(x)
x[e*v+f]=w}},
qb(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.e.L(e)
x.$flags&2&&B.L(x)
x[d]=w
if(v>1){x[d+1]=D.e.L(f)
if(v>2)x[d+2]=D.e.L(g)}},
na(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nR(d){return this.c[d*this.b]},
nP(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nN(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
pq(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
vd(d,e){return this.fR(0,d,0,e)},
vb(d,e){return this.fR(0,d,1,e)},
va(d,e){return this.fR(0,d,2,e)},
v9(d,e){return this.fR(0,d,3,e)}}
A.a7g.prototype={
ew(d){return new A.a7g(new Uint32Array(B.c9(this.c)),this.a,this.b)},
gaq(d){return D.bM.gaq(this.c)},
gdG(){return C.kW},
gcr(){return 4294967295},
fR(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.L(g)
x.$flags&2&&B.L(x)
x[e*v+f]=w}},
qb(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.e.L(e)
x.$flags&2&&B.L(x)
x[d]=w
if(v>1){x[d+1]=D.e.L(f)
if(v>2)x[d+2]=D.e.L(g)}},
na(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nR(d){return this.c[d*this.b]},
nP(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nN(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
pq(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
vd(d,e){return this.fR(0,d,0,e)},
vb(d,e){return this.fR(0,d,1,e)},
va(d,e){return this.fR(0,d,2,e)},
v9(d,e){return this.fR(0,d,3,e)}}
A.wi.prototype={
ew(d){return A.d8W(this)},
gaq(d){return D.H.gaq(this.c)},
gdG(){return C.aj},
gcr(){return 255},
fR(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.L(g)
x.$flags&2&&B.L(x)
x[e*v+f]=w}},
qb(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.e.L(e)
x.$flags&2&&B.L(x)
x[d]=w
if(v>1){x[d+1]=D.e.L(f)
if(v>2)x[d+2]=D.e.L(g)}},
Uo(d,e,f,g,h){var x,w,v=this.b
d*=v
x=this.c
w=D.c.L(e)
x.$flags&2&&B.L(x)
x[d]=w
if(v>1){x[d+1]=D.c.L(f)
if(v>2){x[d+2]=D.c.L(g)
if(v>3)x[d+3]=D.c.L(h)}}},
na(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nR(d){var x
d*=this.b
x=this.c
if(d>=x.length)return 0
return x[d]},
nP(d){var x=this.b
if(x<2)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+1]},
nN(d){var x=this.b
if(x<3)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+2]},
pq(d){var x=this.b
if(x<4)return 255
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+3]},
vd(d,e){return this.fR(0,d,0,e)},
vb(d,e){return this.fR(0,d,1,e)},
va(d,e){return this.fR(0,d,2,e)},
v9(d,e){return this.fR(0,d,3,e)}}
A.LB.prototype={
ew(d){var x=this
return new A.LB(x.a,x.b,x.c,x.d)},
gdG(){return C.jk},
gA(d){return this.d.c},
gf7(){return null},
gcr(){return 1},
gnM(d){return this.a},
goC(d){return this.b},
hQ(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
h(d,e){var x,w=this.d
if(e<w.c){w=w.d[this.c+e]
x=$.iR
w=(x!=null?x:A.jH())[w]}else w=0
return w},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=A.hT(f)
v.$flags&2&&B.L(v)
v[x+e]=w}},
gdH(d){return this.gar(0)},
sdH(d,e){this.sar(0,e)},
gar(d){var x,w=this.d
if(w.c>0){w=w.d[this.c]
x=$.iR
w=(x!=null?x:A.jH())[w]}else w=0
return w},
sar(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=A.hT(e)
v.$flags&2&&B.L(v)
v[x]=w}},
gaE(){var x,w=this.d
if(w.c>1){w=w.d[this.c+1]
x=$.iR
w=(x!=null?x:A.jH())[w]}else w=0
return w},
saE(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=A.hT(d)
v.$flags&2&&B.L(v)
v[x+1]=w}},
gaF(d){var x,w=this.d
if(w.c>2){w=w.d[this.c+2]
x=$.iR
w=(x!=null?x:A.jH())[w]}else w=0
return w},
saF(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=A.hT(e)
v.$flags&2&&B.L(v)
v[x+2]=w}},
gaU(d){var x,w=this.d
if(w.c>3){w=w.d[this.c+3]
x=$.iR
w=(x!=null?x:A.jH())[w]}else w=0
return w},
saU(d,e){var x,w,v,u=this.d
if(u.c>3){x=this.gaE()
u=u.d
w=this.c
v=A.hT(x)
u.$flags&2&&B.L(u)
u[w+3]=v}},
gj8(){return this.gar(0)/1},
sj8(d){this.sar(0,d)},
giT(){return this.gaE()/1},
siT(d){this.saE(d)},
gj1(){return this.gaF(0)/1},
sj1(d){this.saF(0,d)},
gfU(){return this.gaU(0)/1},
sfU(d){this.saU(0,d)},
gkd(){return A.kb(this)},
jd(d,e){var x=this
if(x.d.c>0){x.sar(0,e.gar(e))
x.saE(e.gaE())
x.saF(0,e.gaF(e))
x.saU(0,e.gaU(e))}},
l9(d,e,f){var x,w,v=this,u=v.d,t=u.c
if(t>0){u=u.d
x=v.c
w=A.hT(d)
u.$flags&2&&B.L(u)
u[x]=w
if(t>1){u[v.c+1]=A.hT(e)
if(t>2)u[v.c+2]=A.hT(f)}}},
iV(d,e,f,g){var x,w,v=this,u=v.d,t=u.c
if(t>0){u=u.d
x=v.c
w=A.hT(d)
u.$flags&2&&B.L(u)
u[x]=w
if(t>1){u[v.c+1]=A.hT(e)
if(t>2){u[v.c+2]=A.hT(f)
if(t>3)u[v.c+3]=A.hT(g)}}}},
gaa(d){return new A.iB(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LB){x=B.A(u,B.t(u).i("x.E"))
x=B.aT(x)
w=B.A(e,B.t(e).i("x.E"))
return x===B.aT(w)}if(y.L.b(e)){x=J.a0(e)
w=u.d
v=w.c
if(x.gA(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
oX(d){return A.r1(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idd:1,
gfM(d){return this.d}}
A.LC.prototype={
ew(d){var x=this
return new A.LC(x.a,x.b,x.c,x.d)},
gA(d){return this.d.c},
gf7(){return null},
gcr(){return 1},
gdG(){return C.kV},
gnM(d){return this.a},
goC(d){return this.b},
hQ(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
h(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
m(d,e,f){var x,w=this.d
if(e<w.c){w=w.d
x=this.c
w.$flags&2&&B.L(w)
w[x+e]=f}},
gdH(d){return this.gar(0)},
sdH(d,e){this.sar(0,e)},
gar(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sar(d,e){var x,w=this.d
if(w.c>0){w=w.d
x=this.c
w.$flags&2&&B.L(w)
w[x]=e}},
gaE(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saE(d){var x,w=this.d
if(w.c>1){w=w.d
x=this.c
w.$flags&2&&B.L(w)
w[x+1]=d}},
gaF(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saF(d,e){var x,w=this.d
if(w.c>2){w=w.d
x=this.c
w.$flags&2&&B.L(w)
w[x+2]=e}},
gaU(d){var x=this.d
return x.c>3?x.d[this.c+3]:1},
saU(d,e){var x,w=this.d
if(w.c>3){w=w.d
x=this.c
w.$flags&2&&B.L(w)
w[x+3]=e}},
gj8(){return this.gar(0)/1},
sj8(d){this.sar(0,d)},
giT(){return this.gaE()/1},
siT(d){this.saE(d)},
gj1(){return this.gaF(0)/1},
sj1(d){this.saF(0,d)},
gfU(){return this.gaU(0)/1},
sfU(d){this.saU(0,d)},
gkd(){return A.kb(this)},
jd(d,e){var x=this
x.sar(0,e.gar(e))
x.saE(e.gaE())
x.saF(0,e.gaF(e))
x.saU(0,e.gaU(e))},
l9(d,e,f){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.L(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
iV(d,e,f,g){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.L(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
gaa(d){return new A.iB(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LC){x=B.A(u,B.t(u).i("x.E"))
x=B.aT(x)
w=B.A(e,B.t(e).i("x.E"))
return x===B.aT(w)}if(y.L.b(e)){x=J.a0(e)
w=u.d
v=w.c
if(x.gA(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
oX(d){return A.r1(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idd:1,
gfM(d){return this.d}}
A.LD.prototype={
ew(d){var x=this
return new A.LD(x.a,x.b,x.c,x.d)},
gA(d){return this.d.c},
gf7(){return null},
gcr(){return 1},
gdG(){return C.mB},
gnM(d){return this.a},
goC(d){return this.b},
hQ(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
h(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
m(d,e,f){var x,w=this.d
if(e<w.c){w=w.d
x=this.c
w.$flags&2&&B.L(w)
w[x+e]=f}},
gdH(d){return this.gar(0)},
sdH(d,e){this.sar(0,e)},
gar(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sar(d,e){var x,w=this.d
if(w.c>0){w=w.d
x=this.c
w.$flags&2&&B.L(w)
w[x]=e}},
gaE(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saE(d){var x,w=this.d
if(w.c>1){w=w.d
x=this.c
w.$flags&2&&B.L(w)
w[x+1]=d}},
gaF(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saF(d,e){var x,w=this.d
if(w.c>2){w=w.d
x=this.c
w.$flags&2&&B.L(w)
w[x+2]=e}},
gaU(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saU(d,e){var x,w=this.d
if(w.c>3){w=w.d
x=this.c
w.$flags&2&&B.L(w)
w[x+3]=e}},
gj8(){return this.gar(0)/1},
sj8(d){this.sar(0,d)},
giT(){return this.gaE()/1},
siT(d){this.saE(d)},
gj1(){return this.gaF(0)/1},
sj1(d){this.saF(0,d)},
gfU(){return this.gaU(0)/1},
sfU(d){this.saU(0,d)},
gkd(){return A.kb(this)},
jd(d,e){var x=this
x.sar(0,e.gar(e))
x.saE(e.gaE())
x.saF(0,e.gaF(e))
x.saU(0,e.gaU(e))},
l9(d,e,f){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.L(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
iV(d,e,f,g){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.L(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
gaa(d){return new A.iB(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LD){x=B.A(u,B.t(u).i("x.E"))
x=B.aT(x)
w=B.A(e,B.t(e).i("x.E"))
return x===B.aT(w)}if(y.L.b(e)){x=J.a0(e)
w=u.d
v=w.c
if(x.gA(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
oX(d){return A.r1(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idd:1,
gfM(d){return this.d}}
A.LE.prototype={
ew(d){var x=this
return new A.LE(x.a,x.b,x.c,x.d)},
gA(d){return this.d.c},
gf7(){return null},
gcr(){return 32767},
gdG(){return C.mD},
gnM(d){return this.a},
goC(d){return this.b},
hQ(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
q(){var x,w=this,v=w.d
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
v.$flags&2&&B.L(v)
v[x+e]=w}},
gdH(d){return this.gar(0)},
sdH(d,e){this.sar(0,e)},
gar(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sar(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.L(v)
v[x]=w}},
gaE(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saE(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.e.L(d)
v.$flags&2&&B.L(v)
v[x+1]=w}},
gaF(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saF(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.L(v)
v[x+2]=w}},
gaU(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saU(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.L(v)
v[x+3]=w}},
gj8(){return this.gar(0)/32767},
sj8(d){this.sar(0,d*32767)},
giT(){return this.gaE()/32767},
siT(d){this.saE(d*32767)},
gj1(){return this.gaF(0)/32767},
sj1(d){this.saF(0,d*32767)},
gfU(){return this.gaU(0)/32767},
sfU(d){this.saU(0,d*32767)},
gkd(){return A.kb(this)},
jd(d,e){var x=this
x.sar(0,e.gar(e))
x.saE(e.gaE())
x.saF(0,e.gaF(e))
x.saU(0,e.gaU(e))},
l9(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2)v[x+2]=D.c.L(f)}}},
iV(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2){v[x+2]=D.c.L(f)
if(u>3)v[x+3]=D.c.L(g)}}}},
gaa(d){return new A.iB(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LE){x=B.A(u,B.t(u).i("x.E"))
x=B.aT(x)
w=B.A(e,B.t(e).i("x.E"))
return x===B.aT(w)}if(y.L.b(e)){x=J.a0(e)
w=u.d
v=w.c
if(x.gA(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
oX(d){return A.r1(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idd:1,
gfM(d){return this.d}}
A.LF.prototype={
ew(d){var x=this
return new A.LF(x.a,x.b,x.c,x.d)},
gA(d){return this.d.c},
gf7(){return null},
gcr(){return 2147483647},
gdG(){return C.mE},
gnM(d){return this.a},
goC(d){return this.b},
hQ(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
q(){var x,w=this,v=w.d
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
v.$flags&2&&B.L(v)
v[x+e]=w}},
gdH(d){return this.gar(0)},
sdH(d,e){this.sar(0,e)},
gar(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sar(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.L(v)
v[x]=w}},
gaE(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saE(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.e.L(d)
v.$flags&2&&B.L(v)
v[x+1]=w}},
gaF(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saF(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.L(v)
v[x+2]=w}},
gaU(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saU(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.L(v)
v[x+3]=w}},
gj8(){return this.gar(0)/2147483647},
sj8(d){this.sar(0,d*2147483647)},
giT(){return this.gaE()/2147483647},
siT(d){this.saE(d*2147483647)},
gj1(){return this.gaF(0)/2147483647},
sj1(d){this.saF(0,d*2147483647)},
gfU(){return this.gaU(0)/2147483647},
sfU(d){this.saU(0,d*2147483647)},
gkd(){return A.kb(this)},
jd(d,e){var x=this
x.sar(0,e.gar(e))
x.saE(e.gaE())
x.saF(0,e.gaF(e))
x.saU(0,e.gaU(e))},
l9(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2)v[x+2]=D.c.L(f)}}},
iV(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2){v[x+2]=D.c.L(f)
if(u>3)v[x+3]=D.c.L(g)}}}},
gaa(d){return new A.iB(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LF){x=B.A(u,B.t(u).i("x.E"))
x=B.aT(x)
w=B.A(e,B.t(e).i("x.E"))
return x===B.aT(w)}if(y.L.b(e)){x=J.a0(e)
w=u.d
v=w.c
if(x.gA(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
oX(d){return A.r1(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idd:1,
gfM(d){return this.d}}
A.LG.prototype={
ew(d){var x=this
return new A.LG(x.a,x.b,x.c,x.d)},
gA(d){return this.d.c},
gf7(){return null},
gcr(){return 127},
gdG(){return C.mC},
gnM(d){return this.a},
goC(d){return this.b},
hQ(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
q(){var x,w=this,v=w.d
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
v.$flags&2&&B.L(v)
v[x+e]=w}},
gdH(d){return this.gar(0)},
sdH(d,e){this.sar(0,e)},
gar(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sar(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.L(v)
v[x]=w}},
gaE(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saE(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.e.L(d)
v.$flags&2&&B.L(v)
v[x+1]=w}},
gaF(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saF(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.L(v)
v[x+2]=w}},
gaU(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saU(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.L(v)
v[x+3]=w}},
gj8(){return this.gar(0)/127},
sj8(d){this.sar(0,d*127)},
giT(){return this.gaE()/127},
siT(d){this.saE(d*127)},
gj1(){return this.gaF(0)/127},
sj1(d){this.saF(0,d*127)},
gfU(){return this.gaU(0)/127},
sfU(d){this.saU(0,d*127)},
gkd(){return A.kb(this)},
jd(d,e){var x=this
x.sar(0,e.gar(e))
x.saE(e.gaE())
x.saF(0,e.gaF(e))
x.saU(0,e.gaU(e))},
l9(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2)v[x+2]=D.c.L(f)}}},
iV(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2){v[x+2]=D.c.L(f)
if(u>3)v[x+3]=D.c.L(g)}}}},
gaa(d){return new A.iB(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LG){x=B.A(u,B.t(u).i("x.E"))
x=B.aT(x)
w=B.A(e,B.t(e).i("x.E"))
return x===B.aT(w)}if(y.L.b(e)){x=J.a0(e)
w=u.d
v=w.c
if(x.gA(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
oX(d){return A.r1(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idd:1,
gfM(d){return this.d}}
A.aD1.prototype={
q(){var x=this,w=x.a
if(w.gnM(w)+1>x.d){w.hQ(0,x.b,w.goC(w)+1)
return w.goC(w)<=x.e}return w.q()},
gM(d){return this.a},
$ibP:1}
A.LH.prototype={
ew(d){var x=this
return new A.LH(x.a,x.b,x.c,x.d,x.e,x.f)},
gA(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
gf7(){return this.f.f},
gcr(){return this.f.gcr()},
gdG(){return C.hF},
gnM(d){return this.a},
goC(d){return this.b},
hQ(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.f
w=f*x.e
v.e=w
x=e*x.c
v.c=w+D.c.Z(x,3)
v.d=x&7},
gM(d){return this},
q(){var x,w=this,v=++w.a,u=w.f
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
aaj(d,e){var x,w=this.c,v=7-(this.d+e)
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
if(w>=x.length)return 0
return D.c.ht(x[w],v)&1},
ql(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.aaj(0,d):0
else x=w.na(0,this.aaj(0,0),d)
return x},
lg(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=7-(this.d+d)
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.aM(D.e.L(e),0,1)
s=C.aK4[w]
v=D.c.f9(t,w)
r=r.d
r.$flags&2&&B.L(r)
r[x]=(u&s|v)>>>0},
h(d,e){return this.ql(e)},
m(d,e,f){return this.lg(e,f)},
gdH(d){return this.aaj(0,0)},
sdH(d,e){this.lg(0,e)},
gar(d){return this.ql(0)},
sar(d,e){this.lg(0,e)},
gaE(){return this.ql(1)},
saE(d){this.lg(1,d)},
gaF(d){return this.ql(2)},
saF(d,e){this.lg(2,e)},
gaU(d){return this.ql(3)},
saU(d,e){this.lg(3,e)},
gj8(){return this.ql(0)/this.f.gcr()},
sj8(d){this.lg(0,d*this.f.gcr())},
giT(){return this.ql(1)/this.f.gcr()},
siT(d){this.lg(1,d*this.f.gcr())},
gj1(){return this.ql(2)/this.f.gcr()},
sj1(d){this.lg(2,d*this.f.gcr())},
gfU(){return this.ql(3)/this.f.gcr()},
sfU(d){this.lg(3,d*this.f.gcr())},
gkd(){return A.kb(this)},
jd(d,e){var x=this
x.lg(0,e.gar(e))
x.lg(1,e.gaE())
x.lg(2,e.gaF(e))
x.lg(3,e.gaU(e))},
l9(d,e,f){var x=this,w=x.f.c
if(w>0){x.lg(0,d)
if(w>1){x.lg(1,e)
if(w>2)x.lg(2,f)}}},
iV(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.lg(0,d)
if(w>1){x.lg(1,e)
if(w>2){x.lg(2,f)
if(w>3)x.lg(3,g)}}}},
gaa(d){return new A.iB(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LH){x=B.A(u,B.t(u).i("x.E"))
x=B.aT(x)
w=B.A(e,B.t(e).i("x.E"))
return x===B.aT(w)}if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a0(e)
if(x.gA(e)!==v)return!1
if(u.ql(0)!==x.h(e,0))return!1
if(v>1){if(u.ql(1)!==x.h(e,1))return!1
if(v>2){if(u.ql(2)!==x.h(e,2))return!1
if(v>3)if(u.ql(3)!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
oX(d){return A.r1(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idd:1,
gfM(d){return this.f}}
A.LI.prototype={
ew(d){var x=this
return new A.LI(x.a,x.b,x.c,x.d)},
gA(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
gf7(){return this.d.e},
gcr(){return this.d.gcr()},
gdG(){return C.cX},
gnM(d){return this.a},
goC(d){return this.b},
hQ(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c
x+=v.e==null?v.c:1
w.c=x
return x<v.d.length},
hJ(d,e){var x=this.d,w=x.e
if(w!=null)x=w.na(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
h(d,e){return this.hJ(0,e)},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.e.L(f)
v.$flags&2&&B.L(v)
v[x+e]=w}},
gdH(d){return this.gar(0)},
sdH(d,e){this.sar(0,e)},
gar(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.nR(x.d[this.c])
return x},
sar(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.L(v)
v[x]=w}},
gaE(){var x=this.d,w=x.e
if(w==null)x=x.c>1?x.d[this.c+1]:0
else x=w.nP(x.d[this.c])
return x},
saE(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.e.L(d)
v.$flags&2&&B.L(v)
v[x+1]=w}},
gaF(d){var x=this.d,w=x.e
if(w==null)x=x.c>2?x.d[this.c+2]:0
else x=w.nN(x.d[this.c])
return x},
saF(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.L(v)
v[x+2]=w}},
gaU(d){var x=this.d,w=x.e
if(w==null)x=x.c>3?x.d[this.c+3]:0
else x=w.pq(x.d[this.c])
return x},
saU(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.L(v)
v[x+3]=w}},
gj8(){return this.gar(0)/this.d.gcr()},
sj8(d){this.sar(0,d*this.d.gcr())},
giT(){return this.gaE()/this.d.gcr()},
siT(d){this.saE(d*this.d.gcr())},
gj1(){return this.gaF(0)/this.d.gcr()},
sj1(d){this.saF(0,d*this.d.gcr())},
gfU(){return this.gaU(0)/this.d.gcr()},
sfU(d){this.saU(0,d*this.d.gcr())},
gkd(){return A.kb(this)},
jd(d,e){var x=this
x.sar(0,e.gar(e))
x.saE(e.gaE())
x.saF(0,e.gaF(e))
x.saU(0,e.gaU(e))},
l9(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2)v[x+2]=D.c.L(f)}}},
iV(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2){v[x+2]=D.c.L(f)
if(u>3)v[x+3]=D.c.L(g)}}}},
gaa(d){return new A.iB(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LI){x=B.A(u,B.t(u).i("x.E"))
x=B.aT(x)
w=B.A(e,B.t(e).i("x.E"))
return x===B.aT(w)}if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a0(e)
if(x.gA(e)!==v)return!1
if(u.hJ(0,0)!==x.h(e,0))return!1
if(v>1){if(u.hJ(0,1)!==x.h(e,1))return!1
if(v>2){if(u.hJ(0,2)!==x.h(e,2))return!1
if(v>3)if(u.hJ(0,3)!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
oX(d){return A.r1(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idd:1,
gfM(d){return this.d}}
A.LJ.prototype={
ew(d){var x=this
return new A.LJ(x.a,x.b,x.c,x.d,x.e,x.f)},
gA(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
gf7(){return this.f.f},
gcr(){return this.f.gcr()},
gdG(){return C.iu},
gaDZ(){var x=this.f
return x.f!=null?2:x.c<<1>>>0},
gnM(d){return this.a},
goC(d){return this.b},
hQ(d,e,f){var x,w,v,u=this
u.a=e
u.b=f
x=u.gaDZ()
w=u.b*u.f.e
u.e=w
v=u.a*x
u.c=w+D.c.Z(v,3)
u.d=v&7},
gM(d){return this},
q(){var x,w,v=this,u=v.f
if(++v.a===u.a){v.a=0
x=++v.b
v.d=0;++v.c
v.e=v.e+u.e
return x<u.b}if(u.f!=null||u.c===1){if((v.d+=2)>7){v.d=0;++v.c}}else{w=v.gaDZ()
x=v.a*w
v.d=x&7
v.c=v.e+D.c.Z(x,3)}x=v.c
u=u.d
u===$&&B.b()
return x<u.length},
aak(d,e){var x,w=this.c,v=6-(this.d+(e<<1>>>0))
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
return D.c.ht(x[w],v)&3},
qm(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.aak(0,d):0
else x=w.na(0,this.aak(0,0),d)
return x},
lh(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=6-(this.d+(d<<1>>>0))
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.aM(D.e.L(e),0,3)
s=C.aEm[D.c.Z(w,1)]
v=D.c.f9(t,w)
r=r.d
r.$flags&2&&B.L(r)
r[x]=(u&s|v)>>>0},
h(d,e){return this.qm(e)},
m(d,e,f){return this.lh(e,f)},
gdH(d){return this.aak(0,0)},
sdH(d,e){this.lh(0,e)},
gar(d){return this.qm(0)},
sar(d,e){this.lh(0,e)},
gaE(){return this.qm(1)},
saE(d){this.lh(1,d)},
gaF(d){return this.qm(2)},
saF(d,e){this.lh(2,e)},
gaU(d){return this.qm(3)},
saU(d,e){this.lh(3,e)},
gj8(){return this.qm(0)/this.f.gcr()},
sj8(d){this.lh(0,d*this.f.gcr())},
giT(){return this.qm(1)/this.f.gcr()},
siT(d){this.lh(1,d*this.f.gcr())},
gj1(){return this.qm(2)/this.f.gcr()},
sj1(d){this.lh(2,d*this.f.gcr())},
gfU(){return this.qm(3)/this.f.gcr()},
sfU(d){this.lh(3,d*this.f.gcr())},
gkd(){return A.kb(this)},
jd(d,e){var x=this
x.lh(0,e.gar(e))
x.lh(1,e.gaE())
x.lh(2,e.gaF(e))
x.lh(3,e.gaU(e))},
l9(d,e,f){var x=this,w=x.f.c
if(w>0){x.lh(0,d)
if(w>1){x.lh(1,e)
if(w>2)x.lh(2,f)}}},
iV(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.lh(0,d)
if(w>1){x.lh(1,e)
if(w>2){x.lh(2,f)
if(w>3)x.lh(3,g)}}}},
gaa(d){return new A.iB(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LJ){x=B.A(u,B.t(u).i("x.E"))
x=B.aT(x)
w=B.A(e,B.t(e).i("x.E"))
return x===B.aT(w)}if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a0(e)
if(x.gA(e)!==v)return!1
if(u.qm(0)!==x.h(e,0))return!1
if(v>1){if(u.qm(1)!==x.h(e,1))return!1
if(v>2){if(u.qm(2)!==x.h(e,2))return!1
if(v>3)if(u.qm(3)!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
oX(d){return A.r1(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idd:1,
gfM(d){return this.f}}
A.LK.prototype={
ew(d){var x=this
return new A.LK(x.a,x.b,x.c,x.d)},
gA(d){return this.d.c},
gf7(){return null},
gcr(){return 4294967295},
gdG(){return C.kW},
gnM(d){return this.a},
goC(d){return this.b},
hQ(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
q(){var x,w=this,v=w.d
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
v.$flags&2&&B.L(v)
v[x+e]=w}},
gdH(d){return this.gar(0)},
sdH(d,e){this.sar(0,e)},
gar(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sar(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.L(v)
v[x]=w}},
gaE(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saE(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.e.L(d)
v.$flags&2&&B.L(v)
v[x+1]=w}},
gaF(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saF(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.L(v)
v[x+2]=w}},
gaU(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saU(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&B.L(v)
v[x+3]=w}},
gj8(){return this.gar(0)/4294967295},
sj8(d){this.sar(0,d*4294967295)},
giT(){return this.gaE()/4294967295},
siT(d){this.saE(d*4294967295)},
gj1(){return this.gaF(0)/4294967295},
sj1(d){this.saF(0,d*4294967295)},
gfU(){return this.gaU(0)/4294967295},
sfU(d){this.saU(0,d*4294967295)},
gkd(){return A.kb(this)},
jd(d,e){var x=this
x.sar(0,e.gar(e))
x.saE(e.gaE())
x.saF(0,e.gaF(e))
x.saU(0,e.gaU(e))},
l9(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2)v[x+2]=D.c.L(f)}}},
iV(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2){v[x+2]=D.c.L(f)
if(u>3)v[x+3]=D.c.L(g)}}}},
gaa(d){return new A.iB(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LK){x=B.A(u,B.t(u).i("x.E"))
x=B.aT(x)
w=B.A(e,B.t(e).i("x.E"))
return x===B.aT(w)}if(y.L.b(e)){x=J.a0(e)
w=u.d
v=w.c
if(x.gA(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
oX(d){return A.r1(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idd:1,
gfM(d){return this.d}}
A.LL.prototype={
ew(d){var x=this
return new A.LL(x.a,x.b,x.c,x.d,x.e)},
gA(d){var x=this.e,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
gf7(){return this.e.f},
gcr(){return this.e.gcr()},
gdG(){return C.iv},
gnM(d){return this.a},
goC(d){return this.b},
hQ(d,e,f){var x,w,v,u=this
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
aal(d,e){var x,w=this.c,v=4-(this.d+(e<<2>>>0))
if(v<0){v+=8;++w}x=this.e.d
x===$&&B.b()
return D.c.ht(x[w],v)&15},
qj(d){var x=this.e,w=x.f
if(w==null)x=x.c>d?this.aal(0,d):0
else x=w.na(0,this.aal(0,0),d)
return x},
li(d,e){var x,w,v,u,t,s,r=this.e
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
r.$flags&2&&B.L(r)
r[x]=(u&s|v)>>>0},
h(d,e){return this.qj(e)},
m(d,e,f){return this.li(e,f)},
gdH(d){return this.aal(0,0)},
sdH(d,e){this.li(0,e)},
gar(d){return this.qj(0)},
sar(d,e){this.li(0,e)},
gaE(){return this.qj(1)},
saE(d){this.li(1,d)},
gaF(d){return this.qj(2)},
saF(d,e){this.li(2,e)},
gaU(d){return this.qj(3)},
saU(d,e){this.li(3,e)},
gj8(){return this.qj(0)/this.e.gcr()},
sj8(d){this.li(0,d*this.e.gcr())},
giT(){return this.qj(1)/this.e.gcr()},
siT(d){this.li(1,d*this.e.gcr())},
gj1(){return this.qj(2)/this.e.gcr()},
sj1(d){this.li(2,d*this.e.gcr())},
gfU(){return this.qj(3)/this.e.gcr()},
sfU(d){this.li(3,d*this.e.gcr())},
gkd(){return A.kb(this)},
jd(d,e){var x=this
x.li(0,e.gar(e))
x.li(1,e.gaE())
x.li(2,e.gaF(e))
x.li(3,e.gaU(e))},
l9(d,e,f){var x=this,w=x.e.c
if(w>0){x.li(0,d)
if(w>1){x.li(1,e)
if(w>2)x.li(2,f)}}},
iV(d,e,f,g){var x=this,w=x.e.c
if(w>0){x.li(0,d)
if(w>1){x.li(1,e)
if(w>2){x.li(2,f)
if(w>3)x.li(3,g)}}}},
gaa(d){return new A.iB(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LL){x=B.A(u,B.t(u).i("x.E"))
x=B.aT(x)
w=B.A(e,B.t(e).i("x.E"))
return x===B.aT(w)}if(y.L.b(e)){v=u.e.c
x=J.a0(e)
if(x.gA(e)!==v)return!1
if(u.qj(0)!==x.h(e,0))return!1
if(v>1){if(u.qj(1)!==x.h(e,1))return!1
if(v>2){if(u.qj(2)!==x.h(e,2))return!1
if(v>3)if(u.qj(3)!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
oX(d){return A.r1(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idd:1,
gfM(d){return this.e}}
A.LM.prototype={
ew(d){var x=this
return new A.LM(x.a,x.b,x.c,x.d)},
gA(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
gf7(){return this.d.e},
gcr(){return this.d.gcr()},
gdG(){return C.aj},
gnM(d){return this.a},
goC(d){return this.b},
hQ(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c
x+=v.e==null?v.c:1
w.c=x
return x<v.d.length},
hJ(d,e){var x=this.d,w=x.e
if(w!=null)x=w.na(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
h(d,e){return this.hJ(0,e)},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.e.L(D.e.aM(f,0,255))
v.$flags&2&&B.L(v)
v[x+e]=w}},
gdH(d){return this.d.d[this.c]},
sdH(d,e){var x=this.d.d,w=this.c,v=D.e.L(D.e.aM(e,0,255))
x.$flags&2&&B.L(x)
x[w]=v},
gar(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.nR(x.d[this.c])
return x},
sar(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.e.L(D.e.aM(e,0,255))
v.$flags&2&&B.L(v)
v[x]=w}},
gaE(){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>1?w.d[x.c+1]:0}else w=v.nP(w.d[x.c])
return w},
saE(d){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.e.L(D.e.aM(d,0,255))
w.$flags&2&&B.L(w)
w[v]=x}else if(v>1){w=w.d
v=this.c
x=D.e.L(D.e.aM(d,0,255))
w.$flags&2&&B.L(w)
w[v+1]=x}},
gaF(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>2?w.d[x.c+2]:0}else w=v.nN(w.d[x.c])
return w},
saF(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.e.L(D.e.aM(e,0,255))
w.$flags&2&&B.L(w)
w[v]=x}else if(v>2){w=w.d
v=this.c
x=D.e.L(D.e.aM(e,0,255))
w.$flags&2&&B.L(w)
w[v+2]=x}},
gaU(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c+1]
else w=v>3?w.d[x.c+3]:255}else w=v.pq(w.d[x.c])
return w},
saU(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.e.L(D.e.aM(e,0,255))
w.$flags&2&&B.L(w)
w[v+1]=x}else if(v>3){w=w.d
v=this.c
x=D.e.L(D.e.aM(e,0,255))
w.$flags&2&&B.L(w)
w[v+3]=x}},
gj8(){return this.gar(0)/this.d.gcr()},
sj8(d){this.sar(0,d*this.d.gcr())},
giT(){return this.gaE()/this.d.gcr()},
siT(d){this.saE(d*this.d.gcr())},
gj1(){return this.gaF(0)/this.d.gcr()},
sj1(d){this.saF(0,d*this.d.gcr())},
gfU(){return this.gaU(0)/this.d.gcr()},
sfU(d){this.saU(0,d*this.d.gcr())},
gkd(){return this.d.c===2?this.gar(0):A.kb(this)},
jd(d,e){var x=this
if(x.d.e!=null)x.sdH(0,e.gdH(e))
else{x.sar(0,e.gar(e))
x.saE(e.gaE())
x.saF(0,e.gaF(e))
x.saU(0,e.gaU(e))}},
l9(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2)v[x+2]=D.c.L(f)}}},
iV(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&B.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2){v[x+2]=D.c.L(f)
if(u>3)v[x+3]=D.c.L(g)}}}},
gaa(d){return new A.iB(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LM){x=B.A(u,B.t(u).i("x.E"))
x=B.aT(x)
w=B.A(e,B.t(e).i("x.E"))
return x===B.aT(w)}if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a0(e)
if(x.gA(e)!==v)return!1
if(u.hJ(0,0)!==x.h(e,0))return!1
if(v>1){if(u.hJ(0,1)!==x.h(e,1))return!1
if(v>2){if(u.hJ(0,2)!==x.h(e,2))return!1
if(v>3)if(u.hJ(0,3)!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=B.A(this,B.t(this).i("x.E"))
return B.aT(x)},
oX(d){return A.r1(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idd:1,
gfM(d){return this.d}}
A.h0.prototype={
ew(d){return new A.h0()},
gfM(d){return $.djn()},
gnM(d){return 0},
goC(d){return 0},
gA(d){return 0},
gcr(){return 0},
gdG(){return C.aj},
gf7(){return null},
h(d,e){return 0},
m(d,e,f){},
gdH(d){return 0},
sdH(d,e){},
gar(d){return 0},
sar(d,e){},
gaE(){return 0},
saE(d){},
gaF(d){return 0},
saF(d,e){},
gaU(d){return 0},
saU(d,e){},
gj8(){return 0},
sj8(d){},
giT(){return 0},
siT(d){},
gj1(){return 0},
sj1(d){},
gfU(){return 0},
sfU(d){},
gkd(){return 0},
jd(d,e){},
l9(d,e,f){},
iV(d,e,f,g){},
hQ(d,e,f){},
gM(d){return this},
q(){return!1},
k(d,e){if(e==null)return!1
return e instanceof A.h0},
gv(d){return 0},
gaa(d){return new A.iB(this)},
oX(d){return this},
$ibP:1,
$ie2:1,
$idd:1}
A.bot.prototype={
J(){return"FlipDirection."+this.b}}
A.axH.prototype={
j(d){return"ImageException: "+this.a},
$ibm:1}
A.nq.prototype={
gA(d){return this.c-this.d},
h(d,e){return J.v(this.a,this.d+e)},
m(d,e,f){J.bZ(this.a,this.d+e,f)
return f},
ti(d,e,f,g){var x=this.a,w=J.cR(x),v=this.d+d
if(f instanceof A.nq)w.ej(x,v,v+e,f.a,f.d+g)
else w.ej(x,v,v+e,y.L.a(f),g)},
AX(d,e,f){return this.ti(d,e,f,0)},
bSz(d,e,f){var x=this.a,w=this.d+d
J.vf(x,w,w+e,f)},
a5Y(d,e,f){var x=this,w=f!=null?x.b+f:x.d
return A.dg(x.a,x.e,d,w+e)},
jS(d){return this.a5Y(d,0,null)},
C_(d,e){return this.a5Y(d,0,e)},
UT(d,e){return this.a5Y(d,e,null)},
de(d,e){var x=this.d,w=x+(this.c-x)
for(;x<w;++x)J.v(this.a,x)
return-1},
cD(){return J.v(this.a,this.d++)},
jN(d){var x=this.jS(d)
this.d=this.d+(x.c-x.d)
return x},
jO(d){var x,w,v,u,t,s=this
if(d==null){x=B.a([],y.t)
for(w=s.c;v=s.d,v<w;){u=s.a
s.d=v+1
t=J.v(u,v)
if(t===0)return B.ft(x,0,null)
x.push(t)}throw B.p(A.co("EOF reached without finding string terminator (length: "+B.o(d)+")"))}return B.ft(s.jN(d).ik(),0,null)},
SE(){return this.jO(null)},
aMn(d){var x,w,v,u,t=this,s=B.a([],y.t)
for(x=t.c;w=t.d,w<x;){v=t.a
t.d=w+1
u=J.v(v,w)
s.push(u)
if(u===10||s.length>=d)return B.ft(s,0,null)}return B.ft(s,0,null)},
bXs(){return this.aMn(256)},
bXt(){var x,w,v,u,t=this,s=B.a([],y.t)
for(x=t.c;w=t.d,w<x;){v=t.a
t.d=w+1
u=J.v(v,w)
if(u===0)return new B.HY(!0).Gq(s,0,null,!0)
s.push(u)}return D.aG.DI(0,s,!0)},
av(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255
if(x.e)return w<<8|v
return v<<8|w},
ts(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255
if(x.e)return u|v<<8|w<<16
return w|v<<8|u<<16},
ag(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255,t=J.v(x.a,x.d++)&255
if(x.e)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
a3w(){return A.dWK(this.aiy())},
aiy(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255,t=J.v(x.a,x.d++)&255,s=J.v(x.a,x.d++)&255,r=J.v(x.a,x.d++)&255,q=J.v(x.a,x.d++)&255,p=J.v(x.a,x.d++)&255
if(x.e)return(D.c.eB(w,56)|D.c.eB(v,48)|D.c.eB(u,40)|D.c.eB(t,32)|s<<24|r<<16|q<<8|p)>>>0
return(D.c.eB(p,56)|D.c.eB(q,48)|D.c.eB(r,40)|D.c.eB(s,32)|t<<24|u<<16|v<<8|w)>>>0},
KY(d,e,f){var x,w=this,v=w.a
if(y.D.b(v))return w.aNp(e,f)
x=w.b+w.d+e
return J.cVe(v,x,f<=0?w.c:x+f)},
eG(d){return this.KY(0,0,0)},
aNp(d,e){var x,w=this,v=e==null?w.c-w.d-d:e,u=w.a
if(y.D.b(u))return J.dx(D.H.gaq(u),u.byteOffset+w.d+d,v)
x=w.d+d
x=J.cVe(u,x,x+v)
return new Uint8Array(B.c9(x))},
ik(){return this.aNp(0,null)},
SZ(){var x=this.a
if(y.D.b(x))return J.pW(D.H.gaq(x),x.byteOffset+this.d,null)
return J.pW(D.H.gaq(this.ik()),0,null)}}
A.bFh.prototype={
bEf(d){var x=this
x.avl(d)
x.asd()
x.av1()
x.aqr()},
boJ(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.c=Math.max(d,4)
n.f=m-n.d
n.r=m-1
x=D.e.aL(m,8)
n.w=x
n.x=x*256
n.Q=new A.a7g(new Uint32Array(1024),256,4)
n.a=new A.wi(new Uint8Array(768),256,3)
n.d=3
n.e=2
x=D.e.Z(m,3)
n.y=new Int32Array(x)
x=y.cb
n.z=B.c2(m*3,0,!1,x)
n.at=B.c2(n.c,0,!1,x)
x=n.ax=B.c2(n.c,0,!1,x)
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
aqr(){var x,w,v,u,t,s
for(x=0;x<this.c;++x){w=this.a
w===$&&B.b()
v=this.Q
v===$&&B.b()
u=v.b
t=2<u?v.c[x*u+2]:0
s=1<u?v.c[x*u+1]:0
v=0<u?v.c[x*u]:0
w.qb(x,Math.abs(t),Math.abs(s),Math.abs(v))}},
blZ(d,e,f){var x,w,v,u=this.as[e],t=u-1,s=this.c,r=this.Q,q=1000,p=-1
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
asd(){var x,w,v,u,t,s,r,q=this
for(x=0,w=0;x<q.c;++x){for(v=0;v<3;++v,++w){u=q.z
u===$&&B.b()
t=D.c.aM(D.e.L(0.5+u[w]),0,255)
u=q.Q
u===$&&B.b()
s=u.b
if(v<s){u=u.c
r=D.c.L(t)
u.$flags&2&&B.L(u)
u[x*s+v]=r}}u=q.Q
u===$&&B.b()
s=u.b
if(3<s){u=u.c
r=D.c.L(x)
u.$flags&2&&B.L(u)
u[x*s+3]=r}}},
av1(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
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
i.$flags&2&&B.L(i)
i[l*q]=j}if(k){k=w.c
j=D.c.L(m)
k.$flags&2&&B.L(k)
k[r*q]=j}m=p?w.c[l*q+1]:0
k=p?w.c[r*q+1]:0
if(p){j=w.c
k=D.c.L(k)
j.$flags&2&&B.L(j)
j[l*q+1]=k}if(p){p=w.c
k=D.c.L(m)
p.$flags&2&&B.L(p)
p[r*q+1]=k}p=2<q
m=p?w.c[l*q+2]:0
k=p?w.c[r*q+2]:0
if(p){j=w.c
k=D.c.L(k)
j.$flags&2&&B.L(j)
j[l*q+2]=k}if(p){p=w.c
k=D.c.L(m)
p.$flags&2&&B.L(p)
p[r*q+2]=k}p=3<q
m=p?w.c[l*q+3]:0
k=p?w.c[r*q+3]:0
if(p){j=w.c
k=D.c.L(k)
j.$flags&2&&B.L(j)
j[l*q+3]=k}if(p){p=w.c
k=D.c.L(m)
p.$flags&2&&B.L(p)
p[r*q+3]=k}}if(o!==t){u&2&&B.L(v)
v[t]=s+r>>>1
for(m=t+1;m<o;++m)v[m]=r
s=r
t=o}}x=h.r
x.toString
w=D.c.Z(s+x,1)
u&2&&B.L(v)
v[t]=w
for(n=t+1;n<256;++n)v[n]=x},
aBT(d,e){var x,w,v,u
for(x=this.y,w=d*d,v=0;v<d;++v){x===$&&B.b()
u=D.e.L(e*((w-v*v)*256/w))
x.$flags&2&&B.L(x)
x[v]=u}},
avl(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.x
a2===$&&B.b()
x=30+D.c.aL(a1.b-1,3)
w=a3.ge7(0)*a3.ge4(0)
v=D.c.hS(w,a1.b)
u=Math.max(D.c.aL(v,100),1)
if(u===0)u=1
t=D.c.Z(a2,8)
if(t<=1)t=0
a1.aBT(t,1024)
if(w<1509)s=a1.b=1
else if(D.c.au(w,499)!==0)s=499
else if(D.c.au(w,491)!==0)s=491
else s=D.c.au(w,487)!==0?487:503
r=a3.ge7(0)
q=a3.ge4(0)
for(p=a2,o=1024,n=0,m=0,l=0,k=0;k<v;){a2=a3.a
j=a2==null?null:a2.er(m,l,null)
if(j==null)j=new A.h0()
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
a2[f+2]=i}e=a1.bzd(g,h,i)
if(e<0)e=a1.b6M(g,h,i)
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
if(t>0)a1.b33(d,t,e,g,h,i)}n+=s
m+=s
for(;m>r;){m-=r;++l}for(;n>=w;){n-=w
l-=q}++k
if(D.c.au(k,u)===0){o-=D.c.hS(o,x)
p-=D.c.aL(p,30)
t=D.c.Z(p,8)
if(t<=1)t=0
a1.aBT(t,o)}}},
b33(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=f-e,j=l.d-1
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
b6M(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=1e30
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
bzd(d,e,f){var x,w,v,u,t,s
for(x=this.d,w=this.z,v=0,u=0;v<x;++v){w===$&&B.b()
t=u+1
s=!1
if(w[u]===d){u=t+1
if(w[t]===e){t=u+1
s=w[u]===f
u=t}}else u=t
if(s)return v}return-1}}
A.aCr.prototype={
bf(d){var x,w,v=this
if(v.a===v.c.length)v.baK()
x=v.c
w=v.a++
x.$flags&2&&B.L(x)
x[w]=d&255},
mD(d){var x,w,v,u,t=this,s=J.bl(d)
for(;x=t.a,w=x+s,v=t.c,u=v.length,w>u;)t.arQ(w-u)
D.H.hR(v,x,w,d)
t.a+=s},
ly(d){var x=this
if(x.b){x.bf(D.c.Z(d,8)&255)
x.bf(d&255)
return}x.bf(d&255)
x.bf(D.c.Z(d,8)&255)},
jw(d){var x=this
if(x.b){x.bf(D.c.Z(d,24)&255)
x.bf(D.c.Z(d,16)&255)
x.bf(D.c.Z(d,8)&255)
x.bf(d&255)
return}x.bf(d&255)
x.bf(D.c.Z(d,8)&255)
x.bf(D.c.Z(d,16)&255)
x.bf(D.c.Z(d,24)&255)},
c_O(d){var x,w=this,v=new Float32Array(1)
v[0]=d
x=J.dx(D.fW.gaq(v),0,null)
if(w.b){w.bf(x[3])
w.bf(x[2])
w.bf(x[1])
w.bf(x[0])
return}w.bf(x[0])
w.bf(x[1])
w.bf(x[2])
w.bf(x[3])},
c_P(d){var x,w=this,v=new Float64Array(1)
v[0]=d
x=J.dx(D.fg.gaq(v),0,null)
if(w.b){w.bf(x[7])
w.bf(x[6])
w.bf(x[5])
w.bf(x[4])
w.bf(x[3])
w.bf(x[2])
w.bf(x[1])
w.bf(x[0])
return}w.bf(x[0])
w.bf(x[1])
w.bf(x[2])
w.bf(x[3])
w.bf(x[4])
w.bf(x[5])
w.bf(x[6])
w.bf(x[7])},
arQ(d){var x,w,v,u
if(d!=null)x=d
else{w=this.c.length
x=w===0?8192:w*2}w=this.c
v=w.length
u=new Uint8Array(v+x)
D.H.hR(u,0,v,w)
this.c=u},
baK(){return this.arQ(null)},
gA(d){return this.a}}
A.bJx.prototype={
aQr(d){var x,w,v,u,t,s,r=d.ge7(0),q=d.ge4(0),p=this.a
p===$&&B.b()
x=A.iS(null,null,C.aj,0,C.bG,q,null,0,1,p,C.aj,r,!1)
r=x.a
w=r.gaa(r)
w.q()
x.z=d.z
x.w=d.w
x.y=d.y
for(r=d.a,r=r.gaa(r);r.q();){v=r.gM(r)
u=w.gM(w)
t=D.e.L(v.gar(v))
s=D.e.L(v.gaE())
u.m(0,0,this.blZ(D.e.L(v.gaF(v)),s,t))
w.q()}return x}}
A.pq.prototype={
L(d){var x=this.b
return x===0?0:D.c.hS(this.a,x)},
uS(d){var x=this.b
return x===0?0:this.a/x},
k(d,e){if(e==null)return!1
return e instanceof A.pq&&this.a===e.a&&this.b===e.b},
gv(d){return B.al(this.a,this.b,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
j(d){return""+this.a+"/"+this.b}}
A.bMl.prototype={
J(){return"RequestImageFormat."+this.b}}
A.bZU.prototype={}
var z=a.updateTypes(["~(nq)","m(tl,m,m)","m([m])","~(EU,D<m>)","~(m,m,m,m,m,e_)","~(f,rz)","~(m)","~(m,l3)","EU(m)"])
A.buU.prototype={
$0(){return A.cX9(this.a,this.b,"jpg",this.c)},
$S:224}
A.buV.prototype={
$0(){return A.cX9(this.a,this.b,"png",null)},
$S:224}
A.buX.prototype={
$0(){return A.cX9(this.a,this.b,"webp",this.c)},
$S:224}
A.buM.prototype={
$2(d,e){var x=A.d6D(e)
this.a.a.m(0,d,x)
return x},
$S:z+5}
A.buN.prototype={
$2(d,e){var x=e.ew(0)
this.a.a.m(0,d,x)
return x},
$S:z+7}
A.buO.prototype={
$2(d,e){var x=A.d6D(e)
this.a.b.a.m(0,d,x)
return x},
$S:z+5}
A.b8t.prototype={
$4(d,e,f,g){var x,w,v=this,u=v.a
if(u.a<v.c){x=v.b.c&&v.d.ch!=null
w=v.e
if(x){x=v.d
w.iV(x.ch.nR(d),x.ch.nP(d),x.ch.nN(d),x.ch.pq(d))}else w.iV(d,e,f,g)
w.q();++u.a}},
$S:1170}
A.bnj.prototype={
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
$S:1171}
A.bxv.prototype={
$1(d){var x,w,v,u,t=this.b,s=t.cD(),r=t.cD()
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
A.bIj.prototype={
$1(d){return d!==""},
$S:17}
A.c2W.prototype={
$2(d,e){return(d|e<<16)>>>0},
$S:215}
A.bvm.prototype={
$4(d,e,f,g){var x=this.b
return d+this.a*(e-d+x*(d+g-f-e))+x*(f-d)},
$S:1172}
A.bvl.prototype={
$5(d,e,f,g,h){var x=-e,w=d*d
return f+0.5*(d*(x+g)+w*(2*e-5*f+4*g-h)+w*d*(x+3*f-3*g+h))},
$S:1173};(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_2u,v=a._static_1,u=a._instance_1u,t=a.installStaticTearOff
x(A.l3.prototype,"gyG",1,0,function(){return[0]},["$1","$0"],["jP","L"],2,0,0)
x(A.vX.prototype,"gyG",1,0,function(){return[0]},["$1","$0"],["jP","L"],2,0,0)
x(A.AA.prototype,"gyG",1,0,function(){return[0]},["$1","$0"],["jP","L"],2,0,0)
x(A.u2.prototype,"gyG",1,0,function(){return[0]},["$1","$0"],["jP","L"],2,0,0)
x(A.vZ.prototype,"gyG",1,0,function(){return[0]},["$1","$0"],["jP","L"],2,0,0)
x(A.ya.prototype,"gyG",1,0,function(){return[0]},["$1","$0"],["jP","L"],2,0,0)
x(A.Az.prototype,"gyG",1,0,function(){return[0]},["$1","$0"],["jP","L"],2,0,0)
x(A.Ay.prototype,"gyG",1,0,function(){return[0]},["$1","$0"],["jP","L"],2,0,0)
x(A.w_.prototype,"gyG",1,0,function(){return[0]},["$1","$0"],["jP","L"],2,0,0)
var s
w(s=A.ayp.prototype,"gb7O","b7P",3)
w(s,"gb7R","b7S",3)
w(s,"gb7T","b7U",3)
w(s,"gb7I","b7J",3)
w(s,"gb7K","b7L",3)
v(A,"dX3","dH7",0)
v(A,"dWX","dH_",0)
v(A,"dWV","dGY",0)
v(A,"dX1","dH5",0)
v(A,"dX2","dH6",0)
v(A,"dX0","dH4",0)
v(A,"dX_","dH3",0)
v(A,"dWZ","dH2",0)
v(A,"dX5","dH9",0)
v(A,"dX4","dH8",0)
v(A,"dWY","dH0",0)
v(A,"dWW","dGZ",0)
v(A,"dXg","dHk",0)
v(A,"dXe","dHi",0)
v(A,"dX6","dHa",0)
v(A,"dX8","dHc",0)
v(A,"dX7","dHb",0)
v(A,"dX9","dHd",0)
v(A,"dXh","dHl",0)
v(A,"dXf","dHj",0)
v(A,"dXa","dHe",0)
v(A,"dXb","dHf",0)
v(A,"dXc","dHg",0)
v(A,"dXd","dHh",0)
u(A.acX.prototype,"gbty","btz",6)
u(A.aya.prototype,"gbMQ","bMR",6)
t(A,"d19",3,null,["$3"],["dHm"],1,0)
t(A,"dXi",3,null,["$3"],["dHn"],1,0)
t(A,"dXn",3,null,["$3"],["dHs"],1,0)
t(A,"dXo",3,null,["$3"],["dHt"],1,0)
t(A,"dXp",3,null,["$3"],["dHu"],1,0)
t(A,"dXq",3,null,["$3"],["dHv"],1,0)
t(A,"dXr",3,null,["$3"],["dHw"],1,0)
t(A,"dXs",3,null,["$3"],["dHx"],1,0)
t(A,"dXt",3,null,["$3"],["dHy"],1,0)
t(A,"dXu",3,null,["$3"],["dHz"],1,0)
t(A,"dXj",3,null,["$3"],["dHo"],1,0)
t(A,"dXk",3,null,["$3"],["dHp"],1,0)
t(A,"dXl",3,null,["$3"],["dHq"],1,0)
t(A,"dXm",3,null,["$3"],["dHr"],1,0)
t(A,"dXx",6,null,["$6"],["dHO"],4,0)
t(A,"dXy",6,null,["$6"],["dHP"],4,0)
t(A,"dXw",6,null,["$6"],["dHN"],4,0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.H,[A.a4d,A.c4F,A.c4G,A.bhS,A.v4,A.cmD,A.cHN,A.bw0,A.c4E,A.bwi,A.bGP,A.iB,A.vY,A.aQM,A.auQ,A.rz,A.l3,A.b8u,A.Iu,A.bhB,A.bhA,A.blG,A.auS,A.bng,A.auT,A.auU,A.bni,A.a34,A.aU6,A.a3I,A.a3J,A.aws,A.buv,A.axr,A.aqD,A.Kf,A.bxs,A.EU,A.bxu,A.Y6,A.ayo,A.bxy,A.ayp,A.a7I,A.bIh,A.yA,A.UA,A.bJm,A.Uz,A.bJo,A.aDM,A.aDP,A.aDV,A.a86,A.UD,A.aDU,A.us,A.aIr,A.bXL,A.aIw,A.bXN,A.aIx,A.bXO,A.bza,A.c2J,A.acW,A.c2K,A.c2P,A.c2T,A.c2V,A.acV,A.c2U,A.c2L,A.Od,A.aKi,A.aKk,A.aKj,A.aKl,A.acX,A.aKg,A.c2Q,A.aKh,A.c3K,A.adc,A.axd,A.a3Q,A.aKL,A.a4g,A.bHi,A.aD1,A.axH,A.nq,A.bJx,A.aCr,A.pq,A.bZU])
w(A.cPJ,A.c4F)
w(A.cPK,A.c4G)
x(B.fw,[A.Xz,A.apD,A.b9X,A.p8,A.apo,A.oe,A.ng,A.RZ,A.JB,A.vL,A.Su,A.bxt,A.Ui,A.a7H,A.FH,A.aDg,A.FI,A.wp,A.pD,A.Nx,A.lN,A.uP,A.Oe,A.X0,A.bus,A.awh,A.ayd,A.bot,A.bMl])
w(A.bwg,A.bwi)
w(A.aCt,A.bGP)
x(B.cV,[A.buU,A.buV,A.buX])
x(B.x,[A.QE,A.QF,A.QG,A.QH,A.QI,A.QJ,A.QM,A.QN,A.QO,A.QP,A.QQ,A.zZ,A.a0V,A.EC,A.no,A.LB,A.LC,A.LD,A.LE,A.LF,A.LG,A.LH,A.LI,A.LJ,A.LK,A.LL,A.LM,A.h0])
x(A.zZ,[A.aqy,A.QK])
w(A.aqK,A.a0V)
w(A.RX,A.vY)
x(B.ev,[A.buM,A.buN,A.buO,A.c2W])
x(A.l3,[A.vX,A.Ex,A.AA,A.u2,A.vZ,A.ya,A.Az,A.Ay,A.w_,A.Ez,A.Ey,A.Ko])
x(A.bhB,[A.aps,A.bnh,A.brV,A.buu,A.ayn,A.aDf,A.bIi,A.bJn,A.bJs,A.bWE,A.bXM,A.c3L])
x(B.cl,[A.b8t,A.bnj,A.bxv,A.bIj,A.bvm,A.bvl])
w(A.biS,A.aps)
w(A.bwr,A.bng)
x(A.bwr,[A.ay5,A.bws,A.bwt,A.bwu,A.ay7])
w(A.ay6,A.a34)
w(A.ay8,A.a3J)
w(A.but,A.Iu)
x(A.Kf,[A.Kg,A.a4e])
x(A.blG,[A.bxw,A.bIf])
w(A.ay9,A.a7I)
w(A.bww,A.bIh)
w(A.LQ,A.bhA)
x(A.yA,[A.aDK,A.aDL,A.aDN,A.aDO,A.aDR,A.aDS])
x(A.UA,[A.a83,A.aDQ])
x(A.aDV,[A.Bm,A.ny])
w(A.aya,A.acX)
w(A.ayb,A.adc)
w(A.ayc,A.aKL)
x(A.no,[A.Sz,A.SA,A.a4o,A.a4p,A.a4q,A.a4r,A.SB,A.SC,A.SD,A.SE,A.SF,A.SG])
x(A.bHi,[A.aCH,A.aCI,A.aCJ,A.aCK,A.aCL,A.aCM,A.aCN,A.a7g,A.wi])
w(A.bFh,A.bJx)})()
B.ch(b.typeUniverse,JSON.parse('{"iB":{"bP":["bd"]},"QE":{"e2":[],"x":["bd"],"x.E":"bd"},"QF":{"e2":[],"x":["bd"],"x.E":"bd"},"QG":{"e2":[],"x":["bd"],"x.E":"bd"},"QH":{"e2":[],"x":["bd"],"x.E":"bd"},"QI":{"e2":[],"x":["bd"],"x.E":"bd"},"QJ":{"e2":[],"x":["bd"],"x.E":"bd"},"QM":{"e2":[],"x":["bd"],"x.E":"bd"},"QN":{"e2":[],"x":["bd"],"x.E":"bd"},"QO":{"e2":[],"x":["bd"],"x.E":"bd"},"QP":{"e2":[],"x":["bd"],"x.E":"bd"},"QQ":{"e2":[],"x":["bd"],"x.E":"bd"},"zZ":{"e2":[],"x":["bd"],"x.E":"bd"},"aqy":{"e2":[],"x":["bd"],"x.E":"bd"},"QK":{"e2":[],"x":["bd"],"x.E":"bd"},"a0V":{"e2":[],"x":["bd"],"x.E":"bd"},"aqK":{"e2":[],"x":["bd"],"x.E":"bd"},"vX":{"l3":[]},"Ex":{"l3":[]},"AA":{"l3":[]},"u2":{"l3":[]},"vZ":{"l3":[]},"ya":{"l3":[]},"Az":{"l3":[]},"Ay":{"l3":[]},"w_":{"l3":[]},"Ez":{"l3":[]},"Ey":{"l3":[]},"Ko":{"l3":[]},"ay6":{"a34":[]},"ay8":{"a3J":[]},"Kg":{"Kf":[]},"a4e":{"Kf":[]},"ay9":{"a7I":[]},"aDK":{"yA":[]},"aDL":{"yA":[]},"aDN":{"yA":[]},"aDO":{"yA":[]},"aDR":{"yA":[]},"aDS":{"yA":[]},"a83":{"UA":[]},"aDQ":{"UA":[]},"ayb":{"adc":[]},"EC":{"x":["dd"],"x.E":"dd"},"no":{"x":["dd"]},"Sz":{"no":[],"x":["dd"],"x.E":"dd"},"SA":{"no":[],"x":["dd"],"x.E":"dd"},"a4o":{"no":[],"x":["dd"],"x.E":"dd"},"a4p":{"no":[],"x":["dd"],"x.E":"dd"},"a4q":{"no":[],"x":["dd"],"x.E":"dd"},"a4r":{"no":[],"x":["dd"],"x.E":"dd"},"SB":{"no":[],"x":["dd"],"x.E":"dd"},"SC":{"no":[],"x":["dd"],"x.E":"dd"},"SD":{"no":[],"x":["dd"],"x.E":"dd"},"SE":{"no":[],"x":["dd"],"x.E":"dd"},"SF":{"no":[],"x":["dd"],"x.E":"dd"},"SG":{"no":[],"x":["dd"],"x.E":"dd"},"LB":{"dd":[],"e2":[],"x":["bd"],"bP":["dd"],"x.E":"bd"},"LC":{"dd":[],"e2":[],"x":["bd"],"bP":["dd"],"x.E":"bd"},"LD":{"dd":[],"e2":[],"x":["bd"],"bP":["dd"],"x.E":"bd"},"LE":{"dd":[],"e2":[],"x":["bd"],"bP":["dd"],"x.E":"bd"},"LF":{"dd":[],"e2":[],"x":["bd"],"bP":["dd"],"x.E":"bd"},"LG":{"dd":[],"e2":[],"x":["bd"],"bP":["dd"],"x.E":"bd"},"aD1":{"bP":["dd"]},"LH":{"dd":[],"e2":[],"x":["bd"],"bP":["dd"],"x.E":"bd"},"LI":{"dd":[],"e2":[],"x":["bd"],"bP":["dd"],"x.E":"bd"},"LJ":{"dd":[],"e2":[],"x":["bd"],"bP":["dd"],"x.E":"bd"},"LK":{"dd":[],"e2":[],"x":["bd"],"bP":["dd"],"x.E":"bd"},"LL":{"dd":[],"e2":[],"x":["bd"],"bP":["dd"],"x.E":"bd"},"LM":{"dd":[],"e2":[],"x":["bd"],"bP":["dd"],"x.E":"bd"},"h0":{"dd":[],"e2":[],"x":["bd"],"bP":["dd"],"x.E":"bd"},"axH":{"bm":[]},"dd":{"e2":[],"bP":["dd"],"x":["bd"]}}'))
B.xe(b.typeUniverse,JSON.parse('{"aDV":1}'))
var y=(function rtii(){var x=B.G
return{G:x("e2"),n:x("auS"),W:x("auU"),z:x("avb"),R:x("a3Q"),x:x("axd"),Y:x("axr"),P:x("rz"),r:x("l3"),I:x("no"),h:x("a4W"),E:x("u<aqD>"),Q:x("u<auT>"),m:x("u<a34>"),b:x("u<a3J>"),A:x("u<a3Q>"),g:x("u<EC>"),M:x("u<D<D<D<m>>>>"),o:x("u<D<D<m>>>"),S:x("u<D<m>>"),d:x("u<a7I>"),X:x("u<Uz>"),u:x("u<yA>"),l:x("u<aDP>"),j:x("u<pq>"),T:x("u<f>"),_:x("u<aIx>"),a:x("u<e_>"),q:x("u<Od>"),F:x("u<aKh>"),J:x("u<adc>"),v:x("u<aQM>"),C:x("u<Y6>"),t:x("u<m>"),aH:x("u<Kf?>"),cB:x("u<ayo?>"),cQ:x("u<D<m>?>"),w:x("u<tl?>"),e:x("u<e_?>"),y:x("u<~(nq)>"),c:x("EU"),bp:x("D<a4W>"),f:x("D<D<m>>"),k:x("D<pq>"),cm:x("D<acV>"),K:x("D<Od>"),H:x("D<T>"),L:x("D<m>"),c0:x("dd"),aG:x("Uz"),a2:x("aDM"),cK:x("a83"),O:x("UA"),ab:x("a86"),aM:x("UD"),i:x("pq"),N:x("f"),aL:x("aIw"),bk:x("tl"),D:x("e_"),V:x("acV"),bQ:x("aKi"),bl:x("aKj"),bt:x("aKl"),U:x("a7<f>"),bc:x("aU6"),cb:x("T"),p:x("m"),a7:x("ay1?"),cl:x("D<m>?"),bT:x("D<Kf?>?"),ac:x("e_?"),ak:x("acW?"),B:x("Od?"),Z:x("aKk?"),s:x("m?")}})();(function constants(){var x=a.makeConstList
C.C0=new A.apo(0,"direct")
C.C1=new A.apo(1,"alpha")
C.L1=new A.ng(0,"none")
C.C2=new A.ng(3,"bitfields")
C.C3=new A.ng(6,"alphaBitfields")
C.rn=new A.apD(0,"littleEndian")
C.ov=new A.apD(1,"bigEndian")
C.kH=new A.c4E()
C.anM=new A.cPJ()
C.LJ=new A.cPK()
C.LP=new A.b9X(4,"luminance")
C.D6=new A.aqK(4294967295)
C.axS=new A.JB(0,"red")
C.axT=new A.JB(1,"green")
C.axU=new A.JB(2,"blue")
C.axV=new A.JB(3,"alpha")
C.axW=new A.JB(4,"other")
C.Op=new A.RZ(0,"uint")
C.E9=new A.RZ(1,"half")
C.Ea=new A.RZ(2,"float")
C.Oq=new A.vL(0,"none")
C.ayn=new A.bot(2,"both")
C.hF=new A.p8(0,"uint1")
C.iu=new A.p8(1,"uint2")
C.kV=new A.p8(10,"float32")
C.mB=new A.p8(11,"float64")
C.iv=new A.p8(2,"uint4")
C.aj=new A.p8(3,"uint8")
C.cX=new A.p8(4,"uint16")
C.kW=new A.p8(5,"uint32")
C.mC=new A.p8(6,"int8")
C.mD=new A.p8(7,"int16")
C.mE=new A.p8(8,"int32")
C.jk=new A.p8(9,"float16")
C.ayD=new A.awh(1,"page")
C.bG=new A.awh(2,"sequence")
C.Em=new A.bus(1,"deflate")
C.OW=new A.Su(2,"cur")
C.aa=new A.oe(0,"none")
C.PK=new A.oe(1,"byte")
C.PL=new A.oe(10,"sRational")
C.PM=new A.oe(11,"single")
C.PN=new A.oe(12,"double")
C.bW=new A.oe(2,"ascii")
C.bD=new A.oe(3,"short")
C.dI=new A.oe(4,"long")
C.f6=new A.oe(5,"rational")
C.PO=new A.oe(6,"sByte")
C.jo=new A.oe(7,"undefined")
C.PP=new A.oe(8,"sShort")
C.PQ=new A.oe(9,"sLong")
C.aCF=new A.ayd(0,"nearest")
C.bV0=new A.ayd(1,"linear")
C.Qa=new A.bxt(0,"yuv444")
C.EV=B.a(x([0,2,8]),y.t)
C.aDB=B.a(x([0,4,2,1]),y.t)
C.az0=new A.Su(0,"invalid")
C.az1=new A.Su(1,"ico")
C.aDG=B.a(x([C.az0,C.az1,C.OW]),B.G("u<Su>"))
C.Qw=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),y.t)
C.aEm=B.a(x([252,243,207,63]),y.t)
C.byI=new A.Ui(0,"none")
C.ac0=new A.Ui(1,"background")
C.ac1=new A.Ui(2,"previous")
C.aEo=B.a(x([C.byI,C.ac0,C.ac1]),B.G("u<Ui>"))
C.QA=B.a(x([292,260,226,226]),y.t)
C.QC=B.a(x([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125]),y.t)
C.aEt=B.a(x([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0]),y.t)
C.aEA=B.a(x([2,3,7]),y.t)
C.QF=B.a(x([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68]),y.t)
C.aEI=B.a(x([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),y.t)
C.aEW=B.a(x([3,3,11]),y.t)
C.FH=B.a(x([128,128,128,128,128,128,128,128,128,128,128]),y.t)
C.Rp=B.a(x([C.FH,C.FH,C.FH]),y.S)
C.aHg=B.a(x([253,136,254,255,228,219,128,128,128,128,128]),y.t)
C.aJG=B.a(x([189,129,242,255,227,213,255,219,128,128,128]),y.t)
C.aJN=B.a(x([106,126,227,252,214,209,255,255,128,128,128]),y.t)
C.aNn=B.a(x([C.aHg,C.aJG,C.aJN]),y.S)
C.aNI=B.a(x([1,98,248,255,236,226,255,255,128,128,128]),y.t)
C.aFk=B.a(x([181,133,238,254,221,234,255,154,128,128,128]),y.t)
C.aF3=B.a(x([78,134,202,247,198,180,255,219,128,128,128]),y.t)
C.aP3=B.a(x([C.aNI,C.aFk,C.aF3]),y.S)
C.aH5=B.a(x([1,185,249,255,243,255,128,128,128,128,128]),y.t)
C.aNv=B.a(x([184,150,247,255,236,224,128,128,128,128,128]),y.t)
C.aQX=B.a(x([77,110,216,255,236,230,128,128,128,128,128]),y.t)
C.aMm=B.a(x([C.aH5,C.aNv,C.aQX]),y.S)
C.aMB=B.a(x([1,101,251,255,241,255,128,128,128,128,128]),y.t)
C.aHe=B.a(x([170,139,241,252,236,209,255,255,128,128,128]),y.t)
C.aMP=B.a(x([37,116,196,243,228,255,255,255,128,128,128]),y.t)
C.aGo=B.a(x([C.aMB,C.aHe,C.aMP]),y.S)
C.aKj=B.a(x([1,204,254,255,245,255,128,128,128,128,128]),y.t)
C.aRK=B.a(x([207,160,250,255,238,128,128,128,128,128,128]),y.t)
C.aRJ=B.a(x([102,103,231,255,211,171,128,128,128,128,128]),y.t)
C.aI9=B.a(x([C.aKj,C.aRK,C.aRJ]),y.S)
C.aG2=B.a(x([1,152,252,255,240,255,128,128,128,128,128]),y.t)
C.aRU=B.a(x([177,135,243,255,234,225,128,128,128,128,128]),y.t)
C.aM2=B.a(x([80,129,211,255,194,224,128,128,128,128,128]),y.t)
C.aNm=B.a(x([C.aG2,C.aRU,C.aM2]),y.S)
C.S3=B.a(x([1,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aOf=B.a(x([246,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aLq=B.a(x([255,128,128,128,128,128,128,128,128,128,128]),y.t)
C.aSa=B.a(x([C.S3,C.aOf,C.aLq]),y.S)
C.aHZ=B.a(x([C.Rp,C.aNn,C.aP3,C.aMm,C.aGo,C.aI9,C.aNm,C.aSa]),y.o)
C.aR4=B.a(x([198,35,237,223,193,187,162,160,145,155,62]),y.t)
C.aHf=B.a(x([131,45,198,221,172,176,220,157,252,221,1]),y.t)
C.aR3=B.a(x([68,47,146,208,149,167,221,162,255,223,128]),y.t)
C.aKN=B.a(x([C.aR4,C.aHf,C.aR3]),y.S)
C.aP8=B.a(x([1,149,241,255,221,224,255,255,128,128,128]),y.t)
C.aPL=B.a(x([184,141,234,253,222,220,255,199,128,128,128]),y.t)
C.aLf=B.a(x([81,99,181,242,176,190,249,202,255,255,128]),y.t)
C.aQx=B.a(x([C.aP8,C.aPL,C.aLf]),y.S)
C.aQ9=B.a(x([1,129,232,253,214,197,242,196,255,255,128]),y.t)
C.aRy=B.a(x([99,121,210,250,201,198,255,202,128,128,128]),y.t)
C.aNr=B.a(x([23,91,163,242,170,187,247,210,255,255,128]),y.t)
C.aLw=B.a(x([C.aQ9,C.aRy,C.aNr]),y.S)
C.aIL=B.a(x([1,200,246,255,234,255,128,128,128,128,128]),y.t)
C.aQ6=B.a(x([109,178,241,255,231,245,255,255,128,128,128]),y.t)
C.aEs=B.a(x([44,130,201,253,205,192,255,255,128,128,128]),y.t)
C.aQH=B.a(x([C.aIL,C.aQ6,C.aEs]),y.S)
C.aFM=B.a(x([1,132,239,251,219,209,255,165,128,128,128]),y.t)
C.aDI=B.a(x([94,136,225,251,218,190,255,255,128,128,128]),y.t)
C.aQc=B.a(x([22,100,174,245,186,161,255,199,128,128,128]),y.t)
C.aMy=B.a(x([C.aFM,C.aDI,C.aQc]),y.S)
C.aPK=B.a(x([1,182,249,255,232,235,128,128,128,128,128]),y.t)
C.aN9=B.a(x([124,143,241,255,227,234,128,128,128,128,128]),y.t)
C.aJz=B.a(x([35,77,181,251,193,211,255,205,128,128,128]),y.t)
C.aJV=B.a(x([C.aPK,C.aN9,C.aJz]),y.S)
C.aSb=B.a(x([1,157,247,255,236,231,255,255,128,128,128]),y.t)
C.aHW=B.a(x([121,141,235,255,225,227,255,255,128,128,128]),y.t)
C.aQ7=B.a(x([45,99,188,251,195,217,255,224,128,128,128]),y.t)
C.aGh=B.a(x([C.aSb,C.aHW,C.aQ7]),y.S)
C.aDJ=B.a(x([1,1,251,255,213,255,128,128,128,128,128]),y.t)
C.aEK=B.a(x([203,1,248,255,255,128,128,128,128,128,128]),y.t)
C.aPO=B.a(x([137,1,177,255,224,255,128,128,128,128,128]),y.t)
C.aG4=B.a(x([C.aDJ,C.aEK,C.aPO]),y.S)
C.aPv=B.a(x([C.aKN,C.aQx,C.aLw,C.aQH,C.aMy,C.aJV,C.aGh,C.aG4]),y.o)
C.aIh=B.a(x([253,9,248,251,207,208,255,192,128,128,128]),y.t)
C.aOg=B.a(x([175,13,224,243,193,185,249,198,255,255,128]),y.t)
C.aS9=B.a(x([73,17,171,221,161,179,236,167,255,234,128]),y.t)
C.aO_=B.a(x([C.aIh,C.aOg,C.aS9]),y.S)
C.aPi=B.a(x([1,95,247,253,212,183,255,255,128,128,128]),y.t)
C.aLM=B.a(x([239,90,244,250,211,209,255,255,128,128,128]),y.t)
C.aQW=B.a(x([155,77,195,248,188,195,255,255,128,128,128]),y.t)
C.aPJ=B.a(x([C.aPi,C.aLM,C.aQW]),y.S)
C.aKn=B.a(x([1,24,239,251,218,219,255,205,128,128,128]),y.t)
C.aOP=B.a(x([201,51,219,255,196,186,128,128,128,128,128]),y.t)
C.aLL=B.a(x([69,46,190,239,201,218,255,228,128,128,128]),y.t)
C.aPe=B.a(x([C.aKn,C.aOP,C.aLL]),y.S)
C.aJJ=B.a(x([1,191,251,255,255,128,128,128,128,128,128]),y.t)
C.aMO=B.a(x([223,165,249,255,213,255,128,128,128,128,128]),y.t)
C.aND=B.a(x([141,124,248,255,255,128,128,128,128,128,128]),y.t)
C.aQ8=B.a(x([C.aJJ,C.aMO,C.aND]),y.S)
C.aKT=B.a(x([1,16,248,255,255,128,128,128,128,128,128]),y.t)
C.aHS=B.a(x([190,36,230,255,236,255,128,128,128,128,128]),y.t)
C.aHi=B.a(x([149,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aFN=B.a(x([C.aKT,C.aHS,C.aHi]),y.S)
C.aNu=B.a(x([1,226,255,128,128,128,128,128,128,128,128]),y.t)
C.aO5=B.a(x([247,192,255,128,128,128,128,128,128,128,128]),y.t)
C.aQU=B.a(x([240,128,255,128,128,128,128,128,128,128,128]),y.t)
C.aEP=B.a(x([C.aNu,C.aO5,C.aQU]),y.S)
C.aQG=B.a(x([1,134,252,255,255,128,128,128,128,128,128]),y.t)
C.aN7=B.a(x([213,62,250,255,255,128,128,128,128,128,128]),y.t)
C.aRQ=B.a(x([55,93,255,128,128,128,128,128,128,128,128]),y.t)
C.aNt=B.a(x([C.aQG,C.aN7,C.aRQ]),y.S)
C.aGZ=B.a(x([C.aO_,C.aPJ,C.aPe,C.aQ8,C.aFN,C.aEP,C.aNt,C.Rp]),y.o)
C.aNa=B.a(x([202,24,213,235,186,191,220,160,240,175,255]),y.t)
C.aHd=B.a(x([126,38,182,232,169,184,228,174,255,187,128]),y.t)
C.aFP=B.a(x([61,46,138,219,151,178,240,170,255,216,128]),y.t)
C.aPC=B.a(x([C.aNa,C.aHd,C.aFP]),y.S)
C.aM1=B.a(x([1,112,230,250,199,191,247,159,255,255,128]),y.t)
C.aGf=B.a(x([166,109,228,252,211,215,255,174,128,128,128]),y.t)
C.aMG=B.a(x([39,77,162,232,172,180,245,178,255,255,128]),y.t)
C.aPx=B.a(x([C.aM1,C.aGf,C.aMG]),y.S)
C.aMb=B.a(x([1,52,220,246,198,199,249,220,255,255,128]),y.t)
C.aI6=B.a(x([124,74,191,243,183,193,250,221,255,255,128]),y.t)
C.aJy=B.a(x([24,71,130,219,154,170,243,182,255,255,128]),y.t)
C.aPw=B.a(x([C.aMb,C.aI6,C.aJy]),y.S)
C.aJu=B.a(x([1,182,225,249,219,240,255,224,128,128,128]),y.t)
C.aRO=B.a(x([149,150,226,252,216,205,255,171,128,128,128]),y.t)
C.aSq=B.a(x([28,108,170,242,183,194,254,223,255,255,128]),y.t)
C.aRh=B.a(x([C.aJu,C.aRO,C.aSq]),y.S)
C.aSt=B.a(x([1,81,230,252,204,203,255,192,128,128,128]),y.t)
C.aQ2=B.a(x([123,102,209,247,188,196,255,233,128,128,128]),y.t)
C.aQO=B.a(x([20,95,153,243,164,173,255,203,128,128,128]),y.t)
C.aQ3=B.a(x([C.aSt,C.aQ2,C.aQO]),y.S)
C.aL7=B.a(x([1,222,248,255,216,213,128,128,128,128,128]),y.t)
C.aN4=B.a(x([168,175,246,252,235,205,255,255,128,128,128]),y.t)
C.aJD=B.a(x([47,116,215,255,211,212,255,255,128,128,128]),y.t)
C.aHE=B.a(x([C.aL7,C.aN4,C.aJD]),y.S)
C.aL_=B.a(x([1,121,236,253,212,214,255,255,128,128,128]),y.t)
C.aMd=B.a(x([141,84,213,252,201,202,255,219,128,128,128]),y.t)
C.aNU=B.a(x([42,80,160,240,162,185,255,205,128,128,128]),y.t)
C.aJZ=B.a(x([C.aL_,C.aMd,C.aNU]),y.S)
C.aS2=B.a(x([244,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aDE=B.a(x([238,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aO8=B.a(x([C.S3,C.aS2,C.aDE]),y.S)
C.aEi=B.a(x([C.aPC,C.aPx,C.aPw,C.aRh,C.aQ3,C.aHE,C.aJZ,C.aO8]),y.o)
C.aFO=B.a(x([C.aHZ,C.aPv,C.aGZ,C.aEi]),y.M)
C.aFS=B.a(x([511,1023,2047,4095]),y.t)
C.aGl=B.a(x([63,207,243,252]),y.t)
C.aGS=B.a(x([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]),y.t)
C.uJ=B.a(x([0,1,2,3,4,5,6,7,8,9,10,11]),y.t)
C.aHl=B.a(x([8,8,4,2]),y.t)
C.aDW=B.a(x([173,148,140]),y.t)
C.aDX=B.a(x([176,155,140,135]),y.t)
C.aDU=B.a(x([180,157,141,134,130]),y.t)
C.aEJ=B.a(x([254,254,243,230,196,177,153,140,133,130,129]),y.t)
C.aHn=B.a(x([C.aDW,C.aDX,C.aDU,C.aEJ]),y.S)
C.aHt=B.a(x([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576]),y.t)
C.Rx=B.a(x([1,1.387039845,1.306562965,1.175875602,1,0.785694958,0.5411961,0.275899379]),B.G("u<T>"))
C.aHJ=B.a(x([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),y.t)
C.aI0=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095]),y.t)
C.RK=B.a(x([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29]),y.t)
C.RV=B.a(x([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250]),y.t)
C.aIy=B.a(x([280,256,256,256,40]),y.t)
C.ve=B.a(x([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63]),y.t)
C.Sa=B.a(x([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390]),y.t)
C.Fb=B.a(x([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157]),y.t)
C.aIP=B.a(x([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112]),y.t)
C.Fc=B.a(x([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284]),y.t)
C.Sl=B.a(x([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119]),y.t)
C.Sn=B.a(x([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28]),y.t)
C.aJj=B.a(x([C.Op,C.E9,C.Ea]),B.G("u<RZ>"))
C.vv=B.a(x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),y.t)
C.aK4=B.a(x([254,253,251,247,239,223,191,127]),y.t)
C.vK=B.a(x([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8]),y.t)
C.T3=B.a(x([A.dXa(),A.dX2(),A.dXh(),A.dXf(),A.dXc(),A.dXb(),A.dXd()]),y.y)
C.T5=B.a(x([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5]),y.t)
C.Tg=B.a(x([C.aa,C.PK,C.bW,C.bD,C.dI,C.f6,C.PO,C.jo,C.PP,C.PQ,C.PL,C.PM,C.PN]),B.G("u<oe>"))
C.Jo=new A.lN(0,"whiteIsZero")
C.bLO=new A.lN(1,"blackIsZero")
C.bLV=new A.lN(2,"rgb")
C.Jq=new A.lN(3,"palette")
C.bLW=new A.lN(4,"transparencyMask")
C.afn=new A.lN(5,"cmyk")
C.bLX=new A.lN(6,"yCbCr")
C.bLY=new A.lN(7,"reserved7")
C.bLZ=new A.lN(8,"cieLab")
C.bM_=new A.lN(9,"iccLab")
C.bLP=new A.lN(10,"ituLab")
C.bLQ=new A.lN(11,"logL")
C.bLR=new A.lN(12,"logLuv")
C.bLS=new A.lN(13,"colorFilterArray")
C.bLT=new A.lN(14,"linearRaw")
C.bLU=new A.lN(15,"depth")
C.Jp=new A.lN(16,"unknown")
C.aKr=B.a(x([C.Jo,C.bLO,C.bLV,C.Jq,C.bLW,C.afn,C.bLX,C.bLY,C.bLZ,C.bM_,C.bLP,C.bLQ,C.bLR,C.bLS,C.bLT,C.bLU,C.Jp]),B.G("u<lN>"))
C.Tw=B.a(x([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0]),y.t)
C.abZ=new A.a7H(0,"source")
C.ac_=new A.a7H(1,"over")
C.aKW=B.a(x([C.abZ,C.ac_]),B.G("u<a7H>"))
C.bLG=new A.Nx(0,"invalid")
C.afl=new A.Nx(1,"uint")
C.bv=new A.Nx(2,"int")
C.qQ=new A.Nx(3,"float")
C.aKZ=B.a(x([C.bLG,C.afl,C.bv,C.qQ]),B.G("u<Nx>"))
C.aL5=B.a(x([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15]),y.t)
C.U6=B.a(x([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9]),y.t)
C.aLJ=B.a(x([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15]),y.t)
C.axX=new A.vL(1,"rle")
C.axY=new A.vL(2,"zips")
C.axZ=new A.vL(3,"zip")
C.ay_=new A.vL(4,"piz")
C.ay0=new A.vL(5,"pxr24")
C.ay1=new A.vL(6,"b44")
C.ay2=new A.vL(7,"b44a")
C.aLN=B.a(x([C.Oq,C.axX,C.axY,C.axZ,C.ay_,C.ay0,C.ay1,C.ay2]),B.G("u<vL>"))
C.aNP=B.a(x([231,120,48,89,115,113,120,152,112]),y.t)
C.aEj=B.a(x([152,179,64,126,170,118,46,70,95]),y.t)
C.aLI=B.a(x([175,69,143,80,85,82,72,155,103]),y.t)
C.aFv=B.a(x([56,58,10,171,218,189,17,13,152]),y.t)
C.aMD=B.a(x([114,26,17,163,44,195,21,10,173]),y.t)
C.aN3=B.a(x([121,24,80,195,26,62,44,64,85]),y.t)
C.aMx=B.a(x([144,71,10,38,171,213,144,34,26]),y.t)
C.aQg=B.a(x([170,46,55,19,136,160,33,206,71]),y.t)
C.aIT=B.a(x([63,20,8,114,114,208,12,9,226]),y.t)
C.aKk=B.a(x([81,40,11,96,182,84,29,16,36]),y.t)
C.aDK=B.a(x([C.aNP,C.aEj,C.aLI,C.aFv,C.aMD,C.aN3,C.aMx,C.aQg,C.aIT,C.aKk]),y.S)
C.aHR=B.a(x([134,183,89,137,98,101,106,165,148]),y.t)
C.aPU=B.a(x([72,187,100,130,157,111,32,75,80]),y.t)
C.aNi=B.a(x([66,102,167,99,74,62,40,234,128]),y.t)
C.aEO=B.a(x([41,53,9,178,241,141,26,8,107]),y.t)
C.aK5=B.a(x([74,43,26,146,73,166,49,23,157]),y.t)
C.aJe=B.a(x([65,38,105,160,51,52,31,115,128]),y.t)
C.aJm=B.a(x([104,79,12,27,217,255,87,17,7]),y.t)
C.aLG=B.a(x([87,68,71,44,114,51,15,186,23]),y.t)
C.aPA=B.a(x([47,41,14,110,182,183,21,17,194]),y.t)
C.aOe=B.a(x([66,45,25,102,197,189,23,18,22]),y.t)
C.aQP=B.a(x([C.aHR,C.aPU,C.aNi,C.aEO,C.aK5,C.aJe,C.aJm,C.aLG,C.aPA,C.aOe]),y.S)
C.aNM=B.a(x([88,88,147,150,42,46,45,196,205]),y.t)
C.aMI=B.a(x([43,97,183,117,85,38,35,179,61]),y.t)
C.aJC=B.a(x([39,53,200,87,26,21,43,232,171]),y.t)
C.aLm=B.a(x([56,34,51,104,114,102,29,93,77]),y.t)
C.aMq=B.a(x([39,28,85,171,58,165,90,98,64]),y.t)
C.aJ7=B.a(x([34,22,116,206,23,34,43,166,73]),y.t)
C.aDL=B.a(x([107,54,32,26,51,1,81,43,31]),y.t)
C.aQo=B.a(x([68,25,106,22,64,171,36,225,114]),y.t)
C.aHQ=B.a(x([34,19,21,102,132,188,16,76,124]),y.t)
C.aRb=B.a(x([62,18,78,95,85,57,50,48,51]),y.t)
C.aId=B.a(x([C.aNM,C.aMI,C.aJC,C.aLm,C.aMq,C.aJ7,C.aDL,C.aQo,C.aHQ,C.aRb]),y.S)
C.aMi=B.a(x([193,101,35,159,215,111,89,46,111]),y.t)
C.aGX=B.a(x([60,148,31,172,219,228,21,18,111]),y.t)
C.aFK=B.a(x([112,113,77,85,179,255,38,120,114]),y.t)
C.aR7=B.a(x([40,42,1,196,245,209,10,25,109]),y.t)
C.aKX=B.a(x([88,43,29,140,166,213,37,43,154]),y.t)
C.aJ9=B.a(x([61,63,30,155,67,45,68,1,209]),y.t)
C.aJM=B.a(x([100,80,8,43,154,1,51,26,71]),y.t)
C.aET=B.a(x([142,78,78,16,255,128,34,197,171]),y.t)
C.aLY=B.a(x([41,40,5,102,211,183,4,1,221]),y.t)
C.aIt=B.a(x([51,50,17,168,209,192,23,25,82]),y.t)
C.aIa=B.a(x([C.aMi,C.aGX,C.aFK,C.aR7,C.aKX,C.aJ9,C.aJM,C.aET,C.aLY,C.aIt]),y.S)
C.aJv=B.a(x([138,31,36,171,27,166,38,44,229]),y.t)
C.aI7=B.a(x([67,87,58,169,82,115,26,59,179]),y.t)
C.aP2=B.a(x([63,59,90,180,59,166,93,73,154]),y.t)
C.aQL=B.a(x([40,40,21,116,143,209,34,39,175]),y.t)
C.aF0=B.a(x([47,15,16,183,34,223,49,45,183]),y.t)
C.aHb=B.a(x([46,17,33,183,6,98,15,32,183]),y.t)
C.aSv=B.a(x([57,46,22,24,128,1,54,17,37]),y.t)
C.aJQ=B.a(x([65,32,73,115,28,128,23,128,205]),y.t)
C.aNh=B.a(x([40,3,9,115,51,192,18,6,223]),y.t)
C.aK2=B.a(x([87,37,9,115,59,77,64,21,47]),y.t)
C.aLX=B.a(x([C.aJv,C.aI7,C.aP2,C.aQL,C.aF0,C.aHb,C.aSv,C.aJQ,C.aNh,C.aK2]),y.S)
C.aS0=B.a(x([104,55,44,218,9,54,53,130,226]),y.t)
C.aGd=B.a(x([64,90,70,205,40,41,23,26,57]),y.t)
C.aP1=B.a(x([54,57,112,184,5,41,38,166,213]),y.t)
C.aJ8=B.a(x([30,34,26,133,152,116,10,32,134]),y.t)
C.aO0=B.a(x([39,19,53,221,26,114,32,73,255]),y.t)
C.aIr=B.a(x([31,9,65,234,2,15,1,118,73]),y.t)
C.aLV=B.a(x([75,32,12,51,192,255,160,43,51]),y.t)
C.aJc=B.a(x([88,31,35,67,102,85,55,186,85]),y.t)
C.aKw=B.a(x([56,21,23,111,59,205,45,37,192]),y.t)
C.aKH=B.a(x([55,38,70,124,73,102,1,34,98]),y.t)
C.aS7=B.a(x([C.aS0,C.aGd,C.aP1,C.aJ8,C.aO0,C.aIr,C.aLV,C.aJc,C.aKw,C.aKH]),y.S)
C.aKu=B.a(x([125,98,42,88,104,85,117,175,82]),y.t)
C.aJi=B.a(x([95,84,53,89,128,100,113,101,45]),y.t)
C.aMR=B.a(x([75,79,123,47,51,128,81,171,1]),y.t)
C.aG6=B.a(x([57,17,5,71,102,57,53,41,49]),y.t)
C.aOM=B.a(x([38,33,13,121,57,73,26,1,85]),y.t)
C.aRM=B.a(x([41,10,67,138,77,110,90,47,114]),y.t)
C.aLP=B.a(x([115,21,2,10,102,255,166,23,6]),y.t)
C.aHT=B.a(x([101,29,16,10,85,128,101,196,26]),y.t)
C.aJI=B.a(x([57,18,10,102,102,213,34,20,43]),y.t)
C.aKV=B.a(x([117,20,15,36,163,128,68,1,26]),y.t)
C.aLD=B.a(x([C.aKu,C.aJi,C.aMR,C.aG6,C.aOM,C.aRM,C.aLP,C.aHT,C.aJI,C.aKV]),y.S)
C.aK0=B.a(x([102,61,71,37,34,53,31,243,192]),y.t)
C.aRF=B.a(x([69,60,71,38,73,119,28,222,37]),y.t)
C.aK3=B.a(x([68,45,128,34,1,47,11,245,171]),y.t)
C.aDT=B.a(x([62,17,19,70,146,85,55,62,70]),y.t)
C.aSn=B.a(x([37,43,37,154,100,163,85,160,1]),y.t)
C.aRm=B.a(x([63,9,92,136,28,64,32,201,85]),y.t)
C.aPZ=B.a(x([75,15,9,9,64,255,184,119,16]),y.t)
C.aI3=B.a(x([86,6,28,5,64,255,25,248,1]),y.t)
C.aO9=B.a(x([56,8,17,132,137,255,55,116,128]),y.t)
C.aFU=B.a(x([58,15,20,82,135,57,26,121,40]),y.t)
C.aMv=B.a(x([C.aK0,C.aRF,C.aK3,C.aDT,C.aSn,C.aRm,C.aPZ,C.aI3,C.aO9,C.aFU]),y.S)
C.aMX=B.a(x([164,50,31,137,154,133,25,35,218]),y.t)
C.aI1=B.a(x([51,103,44,131,131,123,31,6,158]),y.t)
C.aRe=B.a(x([86,40,64,135,148,224,45,183,128]),y.t)
C.aLH=B.a(x([22,26,17,131,240,154,14,1,209]),y.t)
C.aH2=B.a(x([45,16,21,91,64,222,7,1,197]),y.t)
C.aQM=B.a(x([56,21,39,155,60,138,23,102,213]),y.t)
C.aS5=B.a(x([83,12,13,54,192,255,68,47,28]),y.t)
C.aNj=B.a(x([85,26,85,85,128,128,32,146,171]),y.t)
C.aLr=B.a(x([18,11,7,63,144,171,4,4,246]),y.t)
C.aIe=B.a(x([35,27,10,146,174,171,12,26,128]),y.t)
C.aL9=B.a(x([C.aMX,C.aI1,C.aRe,C.aLH,C.aH2,C.aQM,C.aS5,C.aNj,C.aLr,C.aIe]),y.S)
C.aPu=B.a(x([190,80,35,99,180,80,126,54,45]),y.t)
C.aQf=B.a(x([85,126,47,87,176,51,41,20,32]),y.t)
C.aOV=B.a(x([101,75,128,139,118,146,116,128,85]),y.t)
C.aPQ=B.a(x([56,41,15,176,236,85,37,9,62]),y.t)
C.aG1=B.a(x([71,30,17,119,118,255,17,18,138]),y.t)
C.aMu=B.a(x([101,38,60,138,55,70,43,26,142]),y.t)
C.aLh=B.a(x([146,36,19,30,171,255,97,27,20]),y.t)
C.aNK=B.a(x([138,45,61,62,219,1,81,188,64]),y.t)
C.aR8=B.a(x([32,41,20,117,151,142,20,21,163]),y.t)
C.aQh=B.a(x([112,19,12,61,195,128,48,4,24]),y.t)
C.aPd=B.a(x([C.aPu,C.aQf,C.aOV,C.aPQ,C.aG1,C.aMu,C.aLh,C.aNK,C.aR8,C.aQh]),y.S)
C.aLW=B.a(x([C.aDK,C.aQP,C.aId,C.aIa,C.aLX,C.aS7,C.aLD,C.aMv,C.aL9,C.aPd]),y.o)
C.AF=new A.pD(0,"none")
C.ko=new A.pD(1,"palette")
C.afk=new A.pD(2,"rgb")
C.bLx=new A.pD(3,"gray")
C.bLy=new A.pD(4,"reserved4")
C.bLz=new A.pD(5,"reserved5")
C.bLA=new A.pD(6,"reserved6")
C.bLB=new A.pD(7,"reserved7")
C.bLC=new A.pD(8,"reserved8")
C.kp=new A.pD(9,"paletteRle")
C.afj=new A.pD(10,"rgbRle")
C.bLw=new A.pD(11,"grayRle")
C.aM4=B.a(x([C.AF,C.ko,C.afk,C.bLx,C.bLy,C.bLz,C.bLA,C.bLB,C.bLC,C.kp,C.afj,C.bLw]),B.G("u<pD>"))
C.UN=B.a(x([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250]),y.t)
C.aMQ=B.a(x([A.dWV(),A.dX1(),A.dX3(),A.dWX(),A.dX_(),A.dX5(),A.dWZ(),A.dX4(),A.dWW(),A.dWY()]),y.y)
C.F5=B.a(x([8,0,8,0]),y.t)
C.aGb=B.a(x([5,3,5,3]),y.t)
C.aEX=B.a(x([3,5,3,5]),y.t)
C.Qm=B.a(x([0,8,0,8]),y.t)
C.QT=B.a(x([4,4,4,4]),y.t)
C.aFI=B.a(x([4,4,0,0]),y.t)
C.V3=B.a(x([C.F5,C.aGb,C.aEX,C.Qm,C.F5,C.QT,C.aFI,C.Qm]),y.S)
C.Vb=B.a(x([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41]),y.t)
C.aNB=B.a(x([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99]),y.t)
C.x5=B.a(x([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845]),y.t)
C.Vg=B.a(x([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127]),y.t)
C.Vi=B.a(x([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]),y.t)
C.xd=B.a(x([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567]),y.t)
C.Vv=B.a(x([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232]),y.t)
C.Wc=B.a(x([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0]),y.t)
C.byJ=new A.FH(0,"none")
C.byK=new A.FH(1,"sub")
C.byL=new A.FH(2,"up")
C.byM=new A.FH(3,"average")
C.byN=new A.FH(4,"paeth")
C.Wd=B.a(x([C.byJ,C.byK,C.byL,C.byM,C.byN]),B.G("u<FH>"))
C.iC=B.a(x([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]),y.t)
C.pJ=B.a(x([0,1,3,7,15,31,63,127,255]),y.t)
C.FI=B.a(x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),y.t)
C.fO=B.a(x([255,255,255,255,255,255,255,255,255,255,255]),y.t)
C.ne=B.a(x([C.fO,C.fO,C.fO]),y.S)
C.aLl=B.a(x([176,246,255,255,255,255,255,255,255,255,255]),y.t)
C.aRT=B.a(x([223,241,252,255,255,255,255,255,255,255,255]),y.t)
C.aHy=B.a(x([249,253,253,255,255,255,255,255,255,255,255]),y.t)
C.aLT=B.a(x([C.aLl,C.aRT,C.aHy]),y.S)
C.aKp=B.a(x([255,244,252,255,255,255,255,255,255,255,255]),y.t)
C.aJW=B.a(x([234,254,254,255,255,255,255,255,255,255,255]),y.t)
C.Xp=B.a(x([253,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aI_=B.a(x([C.aKp,C.aJW,C.Xp]),y.S)
C.aRd=B.a(x([255,246,254,255,255,255,255,255,255,255,255]),y.t)
C.aO4=B.a(x([239,253,254,255,255,255,255,255,255,255,255]),y.t)
C.WQ=B.a(x([254,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aPW=B.a(x([C.aRd,C.aO4,C.WQ]),y.S)
C.T9=B.a(x([255,248,254,255,255,255,255,255,255,255,255]),y.t)
C.aIF=B.a(x([251,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aN2=B.a(x([C.T9,C.aIF,C.fO]),y.S)
C.EZ=B.a(x([255,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aMU=B.a(x([251,254,254,255,255,255,255,255,255,255,255]),y.t)
C.aJ_=B.a(x([C.EZ,C.aMU,C.WQ]),y.S)
C.aFr=B.a(x([255,254,253,255,254,255,255,255,255,255,255]),y.t)
C.aKg=B.a(x([250,255,254,255,254,255,255,255,255,255,255]),y.t)
C.xp=B.a(x([254,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aKY=B.a(x([C.aFr,C.aKg,C.xp]),y.S)
C.aJH=B.a(x([C.ne,C.aLT,C.aI_,C.aPW,C.aN2,C.aJ_,C.aKY,C.ne]),y.o)
C.aEh=B.a(x([217,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aLd=B.a(x([225,252,241,253,255,255,254,255,255,255,255]),y.t)
C.aOY=B.a(x([234,250,241,250,253,255,253,254,255,255,255]),y.t)
C.aQi=B.a(x([C.aEh,C.aLd,C.aOY]),y.S)
C.FS=B.a(x([255,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aHF=B.a(x([223,254,254,255,255,255,255,255,255,255,255]),y.t)
C.aH4=B.a(x([238,253,254,254,255,255,255,255,255,255,255]),y.t)
C.aNZ=B.a(x([C.FS,C.aHF,C.aH4]),y.S)
C.aK1=B.a(x([249,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aRa=B.a(x([C.T9,C.aK1,C.fO]),y.S)
C.aQr=B.a(x([255,253,255,255,255,255,255,255,255,255,255]),y.t)
C.aMS=B.a(x([247,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aMz=B.a(x([C.aQr,C.aMS,C.fO]),y.S)
C.aGT=B.a(x([252,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aEQ=B.a(x([C.EZ,C.aGT,C.fO]),y.S)
C.XA=B.a(x([255,254,254,255,255,255,255,255,255,255,255]),y.t)
C.aH1=B.a(x([C.XA,C.Xp,C.fO]),y.S)
C.aNT=B.a(x([255,254,253,255,255,255,255,255,255,255,255]),y.t)
C.Tu=B.a(x([250,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aGP=B.a(x([C.aNT,C.Tu,C.xp]),y.S)
C.aFx=B.a(x([C.aQi,C.aNZ,C.aRa,C.aMz,C.aEQ,C.aH1,C.aGP,C.ne]),y.o)
C.aPg=B.a(x([186,251,250,255,255,255,255,255,255,255,255]),y.t)
C.aIv=B.a(x([234,251,244,254,255,255,255,255,255,255,255]),y.t)
C.aPY=B.a(x([251,251,243,253,254,255,254,255,255,255,255]),y.t)
C.aIW=B.a(x([C.aPg,C.aIv,C.aPY]),y.S)
C.aIJ=B.a(x([236,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aNR=B.a(x([251,253,253,254,254,255,255,255,255,255,255]),y.t)
C.aKM=B.a(x([C.EZ,C.aIJ,C.aNR]),y.S)
C.aPt=B.a(x([254,254,254,255,255,255,255,255,255,255,255]),y.t)
C.aIC=B.a(x([C.XA,C.aPt,C.fO]),y.S)
C.aQ5=B.a(x([254,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aIG=B.a(x([C.FS,C.aQ5,C.xp]),y.S)
C.XC=B.a(x([C.fO,C.xp,C.fO]),y.S)
C.aFu=B.a(x([C.aIW,C.aKM,C.aIC,C.aIG,C.XC,C.ne,C.ne,C.ne]),y.o)
C.aKb=B.a(x([248,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aJh=B.a(x([250,254,252,254,255,255,255,255,255,255,255]),y.t)
C.aIs=B.a(x([248,254,249,253,255,255,255,255,255,255,255]),y.t)
C.aKR=B.a(x([C.aKb,C.aJh,C.aIs]),y.S)
C.aF4=B.a(x([255,253,253,255,255,255,255,255,255,255,255]),y.t)
C.aQF=B.a(x([246,253,253,255,255,255,255,255,255,255,255]),y.t)
C.aIY=B.a(x([252,254,251,254,254,255,255,255,255,255,255]),y.t)
C.aQE=B.a(x([C.aF4,C.aQF,C.aIY]),y.S)
C.aSc=B.a(x([255,254,252,255,255,255,255,255,255,255,255]),y.t)
C.aIl=B.a(x([248,254,253,255,255,255,255,255,255,255,255]),y.t)
C.aGO=B.a(x([253,255,254,254,255,255,255,255,255,255,255]),y.t)
C.aNc=B.a(x([C.aSc,C.aIl,C.aGO]),y.S)
C.aS3=B.a(x([255,251,254,255,255,255,255,255,255,255,255]),y.t)
C.aMk=B.a(x([245,251,254,255,255,255,255,255,255,255,255]),y.t)
C.aMt=B.a(x([253,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aHs=B.a(x([C.aS3,C.aMk,C.aMt]),y.S)
C.aHw=B.a(x([255,251,253,255,255,255,255,255,255,255,255]),y.t)
C.aKt=B.a(x([252,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aPE=B.a(x([C.aHw,C.aKt,C.FS]),y.S)
C.aGq=B.a(x([255,252,255,255,255,255,255,255,255,255,255]),y.t)
C.aRY=B.a(x([249,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aJr=B.a(x([255,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aDS=B.a(x([C.aGq,C.aRY,C.aJr]),y.S)
C.aSp=B.a(x([255,255,253,255,255,255,255,255,255,255,255]),y.t)
C.aIE=B.a(x([C.aSp,C.Tu,C.fO]),y.S)
C.aGN=B.a(x([C.aKR,C.aQE,C.aNc,C.aHs,C.aPE,C.aDS,C.aIE,C.XC]),y.o)
C.aQa=B.a(x([C.aJH,C.aFx,C.aFu,C.aGN]),y.M)
C.ajk=new A.ng(1,"rle8")
C.ajp=new A.ng(2,"rle4")
C.ajq=new A.ng(4,"jpeg")
C.ajr=new A.ng(5,"png")
C.ajs=new A.ng(7,"reserved7")
C.ajt=new A.ng(8,"reserved8")
C.aju=new A.ng(9,"reserved9")
C.ajl=new A.ng(10,"reserved10")
C.ajm=new A.ng(11,"cmyk")
C.ajn=new A.ng(12,"cmykRle8")
C.ajo=new A.ng(13,"cmykRle4")
C.WT=B.a(x([C.L1,C.ajk,C.ajp,C.C2,C.ajq,C.ajr,C.C3,C.ajs,C.ajt,C.aju,C.ajl,C.ajm,C.ajn,C.ajo]),B.G("u<ng>"))
C.FK=B.a(x([0,128,192,224,240,248,252,254,255]),y.t)
C.FL=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295]),y.t)
C.aQB=B.a(x([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),y.t)
C.aQI=B.a(x([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),y.t)
C.agg=new A.Oe(0,"predictor")
C.bPg=new A.Oe(1,"crossColor")
C.bPh=new A.Oe(2,"subtractGreen")
C.agh=new A.Oe(3,"colorIndexing")
C.aQY=B.a(x([C.agg,C.bPg,C.bPh,C.agh]),B.G("u<Oe>"))
C.fP=B.a(x([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255]),y.t)
C.aRz=B.a(x([A.dX6(),A.dX0(),A.dXg(),A.dXe(),A.dX8(),A.dX7(),A.dX9()]),y.y)
C.XN=B.a(x([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396]),y.t)
C.aRI=B.a(x([null,A.dXx(),A.dXy(),A.dXw()]),B.G("u<~(m,m,m,m,m,e_)?>"))
C.XX=B.a(x([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),y.t)
C.yD=B.a(x([0,36,72,109,145,182,218,255]),y.t)
C.hU=B.a(x([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255]),y.t)
C.aRV=B.a(x([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),y.t)
C.l7=B.a(x([0,1,1,2,4,8,1,1,2,4,8,4,8]),y.t)
C.bz6=new A.wp(0,"bitmap")
C.ach=new A.wp(1,"grayscale")
C.bz7=new A.wp(2,"indexed")
C.aci=new A.wp(3,"rgb")
C.acj=new A.wp(4,"cmyk")
C.bz8=new A.wp(5,"multiChannel")
C.bz9=new A.wp(6,"duoTone")
C.ack=new A.wp(7,"lab")
C.aRX=B.a(x([C.bz6,C.ach,C.bz7,C.aci,C.acj,C.bz8,C.bz9,C.ack]),B.G("u<wp>"))
C.aS8=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),y.t)
C.yN=B.a(x([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),y.t)
C.Yv=B.a(x([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0]),y.t)
C.aEE=B.a(x([2,6,2,6]),y.t)
C.aGC=B.a(x([6,2,6,2]),y.t)
C.aEx=B.a(x([2,2,6,6]),y.t)
C.aEa=B.a(x([1,3,3,9]),y.t)
C.aFz=B.a(x([4,0,12,0]),y.t)
C.aEV=B.a(x([3,1,9,3]),y.t)
C.aHk=B.a(x([8,8,0,0]),y.t)
C.aFB=B.a(x([4,12,0,0]),y.t)
C.aDV=B.a(x([16,0,0,0]),y.t)
C.aDQ=B.a(x([12,4,0,0]),y.t)
C.aGM=B.a(x([6,6,2,2]),y.t)
C.aEY=B.a(x([3,9,1,3]),y.t)
C.aDP=B.a(x([12,0,4,0]),y.t)
C.aHx=B.a(x([9,3,3,1]),y.t)
C.e1=B.a(x([C.QT,C.aEE,C.F5,C.aGC,C.aEx,C.aEa,C.aFz,C.aEV,C.aHk,C.aFB,C.aDV,C.aDQ,C.aGM,C.aEY,C.aDP,C.aHx]),y.S)
C.nf=B.a(x([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1]),y.t)
C.bt3={ProcessingSoftware:0,SubfileType:1,OldSubfileType:2,ImageWidth:3,ImageLength:4,ImageHeight:5,BitsPerSample:6,Compression:7,PhotometricInterpretation:8,Thresholding:9,CellWidth:10,CellLength:11,FillOrder:12,DocumentName:13,ImageDescription:14,Make:15,Model:16,StripOffsets:17,Orientation:18,SamplesPerPixel:19,RowsPerStrip:20,StripByteCounts:21,MinSampleValue:22,MaxSampleValue:23,XResolution:24,YResolution:25,PlanarConfiguration:26,PageName:27,XPosition:28,YPosition:29,GrayResponseUnit:30,GrayResponseCurve:31,T4Options:32,T6Options:33,ResolutionUnit:34,PageNumber:35,ColorResponseUnit:36,TransferFunction:37,Software:38,DateTime:39,Artist:40,HostComputer:41,Predictor:42,WhitePoint:43,PrimaryChromaticities:44,ColorMap:45,HalftoneHints:46,TileWidth:47,TileLength:48,TileOffsets:49,TileByteCounts:50,BadFaxLines:51,CleanFaxData:52,ConsecutiveBadFaxLines:53,InkSet:54,InkNames:55,NumberofInks:56,DotRange:57,TargetPrinter:58,ExtraSamples:59,SampleFormat:60,SMinSampleValue:61,SMaxSampleValue:62,TransferRange:63,ClipPath:64,JPEGProc:65,JPEGInterchangeFormat:66,JPEGInterchangeFormatLength:67,YCbCrCoefficients:68,YCbCrSubSampling:69,YCbCrPositioning:70,ReferenceBlackWhite:71,ApplicationNotes:72,Rating:73,CFARepeatPatternDim:74,CFAPattern:75,BatteryLevel:76,Copyright:77,ExposureTime:78,FNumber:79,"IPTC-NAA":80,ExifOffset:81,InterColorProfile:82,ExposureProgram:83,SpectralSensitivity:84,GPSOffset:85,ISOSpeed:86,OECF:87,SensitivityType:88,RecommendedExposureIndex:89,ExifVersion:90,DateTimeOriginal:91,DateTimeDigitized:92,OffsetTime:93,OffsetTimeOriginal:94,OffsetTimeDigitized:95,ComponentsConfiguration:96,CompressedBitsPerPixel:97,ShutterSpeedValue:98,ApertureValue:99,BrightnessValue:100,ExposureBiasValue:101,MaxApertureValue:102,SubjectDistance:103,MeteringMode:104,LightSource:105,Flash:106,FocalLength:107,SubjectArea:108,MakerNote:109,UserComment:110,SubSecTime:111,SubSecTimeOriginal:112,SubSecTimeDigitized:113,XPTitle:114,XPComment:115,XPAuthor:116,XPKeywords:117,XPSubject:118,FlashPixVersion:119,ColorSpace:120,ExifImageWidth:121,ExifImageLength:122,RelatedSoundFile:123,InteroperabilityOffset:124,FlashEnergy:125,SpatialFrequencyResponse:126,FocalPlaneXResolution:127,FocalPlaneYResolution:128,FocalPlaneResolutionUnit:129,SubjectLocation:130,ExposureIndex:131,SensingMethod:132,FileSource:133,SceneType:134,CVAPattern:135,CustomRendered:136,ExposureMode:137,WhiteBalance:138,DigitalZoomRatio:139,FocalLengthIn35mmFilm:140,SceneCaptureType:141,GainControl:142,Contrast:143,Saturation:144,Sharpness:145,DeviceSettingDescription:146,SubjectDistanceRange:147,ImageUniqueID:148,CameraOwnerName:149,BodySerialNumber:150,LensSpecification:151,LensMake:152,LensModel:153,LensSerialNumber:154,Gamma:155,PrintIM:156,Padding:157,OffsetSchema:158,OwnerName:159,SerialNumber:160,InteropIndex:161,InteropVersion:162,RelatedImageFileFormat:163,RelatedImageWidth:164,RelatedImageLength:165,GPSVersionID:166,GPSLatitudeRef:167,GPSLatitude:168,GPSLongitudeRef:169,GPSLongitude:170,GPSAltitudeRef:171,GPSAltitude:172,GPSTimeStamp:173,GPSSatellites:174,GPSStatus:175,GPSMeasureMode:176,GPSDOP:177,GPSSpeedRef:178,GPSSpeed:179,GPSTrackRef:180,GPSTrack:181,GPSImgDirectionRef:182,GPSImgDirection:183,GPSMapDatum:184,GPSDestLatitudeRef:185,GPSDestLatitude:186,GPSDestLongitudeRef:187,GPSDestLongitude:188,GPSDestBearingRef:189,GPSDestBearing:190,GPSDestDistanceRef:191,GPSDestDistance:192,GPSProcessingMethod:193,GPSAreaInformation:194,GPSDate:195,GPSDifferential:196}
C.a2R=new B.U(C.bt3,[11,254,255,256,257,257,258,259,262,263,264,265,266,269,270,271,272,273,274,277,278,279,280,281,282,283,284,285,286,287,290,291,292,293,296,297,300,301,305,306,315,316,317,318,319,320,321,322,323,324,325,326,327,328,332,333,334,336,337,338,339,340,341,342,343,512,513,514,529,530,531,532,700,18246,33421,33422,33423,33432,33434,33437,33723,34665,34675,34850,34852,34853,34855,34856,34864,34866,36864,36867,36868,36880,36881,36882,37121,37122,37377,37378,37379,37380,37381,37382,37383,37384,37385,37386,37396,37500,37510,37520,37521,37522,40091,40092,40093,40094,40095,40960,40961,40962,40963,40964,40965,41483,41484,41486,41487,41488,41492,41493,41495,41728,41729,41730,41985,41986,41987,41988,41989,41990,41991,41992,41993,41994,41995,41996,42016,42032,42033,42034,42035,42036,42037,42240,50341,59932,59933,65e3,65001,1,2,4096,4097,4098,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],B.G("U<f,m>"))
C.Gx=new B.c([34665,"exif",40965,"interop",34853,"gps"],B.G("c<m,f>"))
C.a6S=new B.c([C.hF,1,C.iu,3,C.iv,15,C.aj,255,C.cX,65535,C.kW,4294967295,C.mC,127,C.mD,32767,C.mE,2147483647,C.jk,1,C.kV,1,C.mB,1],B.G("c<p8,m>"))
C.byO=new A.aDg(0,"none")
C.byP=new A.aDg(4,"paeth")
C.qq=new A.FI(0,"invalid")
C.ac2=new A.FI(1,"pbm")
C.ac3=new A.FI(2,"pgm2")
C.HD=new A.FI(3,"pgm5")
C.ac4=new A.FI(4,"ppm3")
C.HE=new A.FI(5,"ppm6")
C.bB3=new A.bMl(0,"origin")
C.Jn=new A.uP(0,"bilevel")
C.bLH=new A.uP(1,"gray4bit")
C.bLI=new A.uP(2,"gray")
C.bLJ=new A.uP(3,"grayAlpha")
C.bLK=new A.uP(4,"palette")
C.afm=new A.uP(5,"rgb")
C.bLL=new A.uP(6,"rgba")
C.bLM=new A.uP(7,"yCbCrSub")
C.qR=new A.uP(8,"generic")
C.bLN=new A.uP(9,"invalid")
C.qZ=new A.X0(0,"undefined")
C.JY=new A.X0(1,"lossy")
C.AR=new A.X0(2,"lossless")
C.bPJ=new A.X0(3,"animated")
C.AX=new A.Xz(0,"none")
C.bS7=new A.Xz(1,"partial")
C.bS8=new A.Xz(2,"full")
C.r1=new A.Xz(3,"finish")})();(function staticFields(){$.xP=B.bT("_config")
$.d35=!0
$.d_F=null
$.dcq=!1
$.dcr=B.a([A.d19(),A.dXi(),A.dXn(),A.dXo(),A.dXp(),A.dXq(),A.dXr(),A.dXs(),A.dXt(),A.dXu(),A.dXj(),A.dXk(),A.dXl(),A.dXm(),A.d19(),A.d19()],B.G("u<m(tl,m,m)>"))
$.iR=null
$.d5H=B.bT("_eLut")})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazy
x($,"e3F","dl7",()=>A.d_l(C.vK,C.Qw,257,286,15))
x($,"e3E","dl6",()=>A.d_l(C.T5,C.vv,0,30,15))
x($,"e3D","dl5",()=>A.d_l(null,C.aEI,0,19,7))
x($,"e6Q","cUV",()=>{var v=null,u="ISOSpeed"
return B.w([11,A.aW("ProcessingSoftware",C.bW,v),254,A.aW("SubfileType",C.dI,1),255,A.aW("OldSubfileType",C.dI,1),256,A.aW("ImageWidth",C.dI,1),257,A.aW("ImageLength",C.dI,1),258,A.aW("BitsPerSample",C.bD,1),259,A.aW("Compression",C.bD,1),262,A.aW("PhotometricInterpretation",C.bD,1),263,A.aW("Thresholding",C.bD,1),264,A.aW("CellWidth",C.bD,1),265,A.aW("CellLength",C.bD,1),266,A.aW("FillOrder",C.bD,1),269,A.aW("DocumentName",C.bW,v),270,A.aW("ImageDescription",C.bW,v),271,A.aW("Make",C.bW,v),272,A.aW("Model",C.bW,v),273,A.aW("StripOffsets",C.dI,v),274,A.aW("Orientation",C.bD,1),277,A.aW("SamplesPerPixel",C.bD,1),278,A.aW("RowsPerStrip",C.dI,1),279,A.aW("StripByteCounts",C.dI,1),280,A.aW("MinSampleValue",C.bD,1),281,A.aW("MaxSampleValue",C.bD,1),282,A.aW("XResolution",C.f6,1),283,A.aW("YResolution",C.f6,1),284,A.aW("PlanarConfiguration",C.bD,1),285,A.aW("PageName",C.bW,v),286,A.aW("XPosition",C.f6,1),287,A.aW("YPosition",C.f6,1),290,A.aW("GrayResponseUnit",C.bD,1),291,A.aW("GrayResponseCurve",C.aa,v),292,A.aW("T4Options",C.aa,v),293,A.aW("T6Options",C.aa,v),296,A.aW("ResolutionUnit",C.bD,1),297,A.aW("PageNumber",C.bD,2),300,A.aW("ColorResponseUnit",C.aa,v),301,A.aW("TransferFunction",C.bD,768),305,A.aW("Software",C.bW,v),306,A.aW("DateTime",C.bW,v),315,A.aW("Artist",C.bW,v),316,A.aW("HostComputer",C.bW,v),317,A.aW("Predictor",C.bD,1),318,A.aW("WhitePoint",C.f6,2),319,A.aW("PrimaryChromaticities",C.f6,6),320,A.aW("ColorMap",C.bD,v),321,A.aW("HalftoneHints",C.bD,2),322,A.aW("TileWidth",C.dI,1),323,A.aW("TileLength",C.dI,1),324,A.aW("TileOffsets",C.dI,v),325,A.aW("TileByteCounts",C.aa,v),326,A.aW("BadFaxLines",C.aa,v),327,A.aW("CleanFaxData",C.aa,v),328,A.aW("ConsecutiveBadFaxLines",C.aa,v),332,A.aW("InkSet",C.aa,v),333,A.aW("InkNames",C.aa,v),334,A.aW("NumberofInks",C.aa,v),336,A.aW("DotRange",C.aa,v),337,A.aW("TargetPrinter",C.bW,v),338,A.aW("ExtraSamples",C.aa,v),339,A.aW("SampleFormat",C.bD,1),340,A.aW("SMinSampleValue",C.aa,v),341,A.aW("SMaxSampleValue",C.aa,v),342,A.aW("TransferRange",C.aa,v),343,A.aW("ClipPath",C.aa,v),512,A.aW("JPEGProc",C.aa,v),513,A.aW("JPEGInterchangeFormat",C.aa,v),514,A.aW("JPEGInterchangeFormatLength",C.aa,v),529,A.aW("YCbCrCoefficients",C.f6,3),530,A.aW("YCbCrSubSampling",C.bD,1),531,A.aW("YCbCrPositioning",C.bD,1),532,A.aW("ReferenceBlackWhite",C.f6,6),700,A.aW("ApplicationNotes",C.bD,1),18246,A.aW("Rating",C.bD,1),33421,A.aW("CFARepeatPatternDim",C.aa,v),33422,A.aW("CFAPattern",C.aa,v),33423,A.aW("BatteryLevel",C.aa,v),33432,A.aW("Copyright",C.bW,v),33434,A.aW("ExposureTime",C.f6,1),33437,A.aW("FNumber",C.f6,v),33723,A.aW("IPTC-NAA",C.dI,1),34665,A.aW("ExifOffset",C.aa,v),34675,A.aW("InterColorProfile",C.aa,v),34850,A.aW("ExposureProgram",C.bD,1),34852,A.aW("SpectralSensitivity",C.bW,v),34853,A.aW("GPSOffset",C.aa,v),34855,A.aW(u,C.dI,1),34856,A.aW("OECF",C.aa,v),34864,A.aW("SensitivityType",C.bD,1),34866,A.aW("RecommendedExposureIndex",C.dI,1),34867,A.aW(u,C.dI,1),36864,A.aW("ExifVersion",C.jo,v),36867,A.aW("DateTimeOriginal",C.bW,v),36868,A.aW("DateTimeDigitized",C.bW,v),36880,A.aW("OffsetTime",C.bW,v),36881,A.aW("OffsetTimeOriginal",C.bW,v),36882,A.aW("OffsetTimeDigitized",C.bW,v),37121,A.aW("ComponentsConfiguration",C.jo,v),37122,A.aW("CompressedBitsPerPixel",C.aa,v),37377,A.aW("ShutterSpeedValue",C.aa,v),37378,A.aW("ApertureValue",C.aa,v),37379,A.aW("BrightnessValue",C.aa,v),37380,A.aW("ExposureBiasValue",C.aa,v),37381,A.aW("MaxApertureValue",C.aa,v),37382,A.aW("SubjectDistance",C.aa,v),37383,A.aW("MeteringMode",C.aa,v),37384,A.aW("LightSource",C.aa,v),37385,A.aW("Flash",C.aa,v),37386,A.aW("FocalLength",C.aa,v),37396,A.aW("SubjectArea",C.aa,v),37500,A.aW("MakerNote",C.jo,v),37510,A.aW("UserComment",C.jo,v),37520,A.aW("SubSecTime",C.aa,v),37521,A.aW("SubSecTimeOriginal",C.aa,v),37522,A.aW("SubSecTimeDigitized",C.aa,v),40091,A.aW("XPTitle",C.aa,v),40092,A.aW("XPComment",C.aa,v),40093,A.aW("XPAuthor",C.aa,v),40094,A.aW("XPKeywords",C.aa,v),40095,A.aW("XPSubject",C.aa,v),40960,A.aW("FlashPixVersion",C.aa,v),40961,A.aW("ColorSpace",C.bD,1),40962,A.aW("ExifImageWidth",C.bD,1),40963,A.aW("ExifImageLength",C.bD,1),40964,A.aW("RelatedSoundFile",C.aa,v),40965,A.aW("InteroperabilityOffset",C.aa,v),41483,A.aW("FlashEnergy",C.aa,v),41484,A.aW("SpatialFrequencyResponse",C.aa,v),41486,A.aW("FocalPlaneXResolution",C.aa,v),41487,A.aW("FocalPlaneYResolution",C.aa,v),41488,A.aW("FocalPlaneResolutionUnit",C.aa,v),41492,A.aW("SubjectLocation",C.aa,v),41493,A.aW("ExposureIndex",C.aa,v),41495,A.aW("SensingMethod",C.aa,v),41728,A.aW("FileSource",C.aa,v),41729,A.aW("SceneType",C.aa,v),41730,A.aW("CVAPattern",C.aa,v),41985,A.aW("CustomRendered",C.aa,v),41986,A.aW("ExposureMode",C.aa,v),41987,A.aW("WhiteBalance",C.aa,v),41988,A.aW("DigitalZoomRatio",C.aa,v),41989,A.aW("FocalLengthIn35mmFilm",C.aa,v),41990,A.aW("SceneCaptureType",C.aa,v),41991,A.aW("GainControl",C.aa,v),41992,A.aW("Contrast",C.aa,v),41993,A.aW("Saturation",C.aa,v),41994,A.aW("Sharpness",C.aa,v),41995,A.aW("DeviceSettingDescription",C.aa,v),41996,A.aW("SubjectDistanceRange",C.aa,v),42016,A.aW("ImageUniqueID",C.aa,v),42032,A.aW("CameraOwnerName",C.bW,v),42033,A.aW("BodySerialNumber",C.bW,v),42034,A.aW("LensSpecification",C.aa,v),42035,A.aW("LensMake",C.bW,v),42036,A.aW("LensModel",C.bW,v),42037,A.aW("LensSerialNumber",C.bW,v),42240,A.aW("Gamma",C.f6,1),50341,A.aW("PrintIM",C.aa,v),59932,A.aW("Padding",C.aa,v),59933,A.aW("OffsetSchema",C.aa,v),65e3,A.aW("OwnerName",C.bW,v),65001,A.aW("SerialNumber",C.bW,v)],y.p,B.G("auQ"))})
w($,"e2I","b2P",()=>B.Fe(511))
w($,"e2J","cUF",()=>B.Fe(511))
w($,"e2L","cUG",()=>A.d8o(2041))
w($,"e2M","b2Q",()=>A.d8o(225))
w($,"e2K","r6",()=>B.Fe(766))
x($,"e0z","djn",()=>A.d6P(0,0,0))
x($,"e48","oR",()=>B.Fe(1))
x($,"e49","pU",()=>A.dy_(D.H.gaq($.oR()),0,null))
x($,"e41","oQ",()=>E.dzQ(1))
x($,"e42","pT",()=>J.dnt(D.eS.gaq($.oQ()),0,null))
x($,"e43","iy",()=>B.dzT(1))
x($,"e45","lX",()=>J.b32(D.bM.gaq($.iy()),0,null))
x($,"e44","Ic",()=>A.dvO(D.bM.gaq($.iy())))
x($,"e4_","b2S",()=>B.cXF(1))
x($,"e40","cUI",()=>A.dc3(D.d9.gaq($.b2S()),0))
x($,"e3Y","d29",()=>B.bEV(1))
x($,"e3Z","dln",()=>A.dc3(D.fW.gaq($.d29()),0))
x($,"e46","d2a",()=>A.dGy(1))
x($,"e47","dlo",()=>{var v=$.d2a()
return A.dvP(v.gaq(v))})})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_258",e:"endPart",h:b})})($__dart_deferred_initializers__,"DWmJctXEJPv9fYXEmGOt/5HZfPk=");