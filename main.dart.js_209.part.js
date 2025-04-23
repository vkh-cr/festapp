((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_209",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,E,A={
csp(d){var x=new A.a05()
x.a2C(d)
return x},
a05:function a05(){this.a=$
this.b=0
this.c=2147483647},
bNv:function bNv(){},
cls:function cls(){},
bNw:function bNw(){},
clt:function clt(){},
cVz(d,e,f,g){var x=A.cv9(),w=A.cv9(),v=A.cv9(),u=new Uint16Array(16),t=new Uint32Array(573),s=new Uint8Array(573)
x=new A.b6K(d,f,x,w,v,u,t,s)
x.b_s(e,g)
x.b_r(C.oh)
return x},
cAq(d,e,f,g){var x=d[e*2],w=d[f*2]
if(x>=w)x=x===w&&g[e]<=g[f]
else x=!0
return x},
cv9(){return new A.c0b()},
d7r(d,e,f){var x,w,v,u,t,s,r,q=new Uint16Array(16)
for(x=0,w=1;w<=15;++w){x=x+f[w-1]<<1>>>0
q[w]=x}for(v=d.$flags|0,u=0;u<=e;++u){t=u*2
s=d[t+1]
if(s===0)continue
r=q[s]
q[s]=r+1
r=A.d7s(r,s)
v&2&&B.C(d)
d[t]=r}},
d7s(d,e){var x,w=0
do{x=A.pG(d,1)
w=(w|d&1)<<1>>>0
if(--e,e>0){d=x
continue}else break}while(!0)
return A.pG(w,1)},
cIs(d){return d<256?C.LF[d]:C.LF[256+A.pG(d,7)]},
cvl(d,e,f,g,h){return new A.ceu(d,e,f,g,h)},
pG(d,e){if(d>=0)return D.c.o2(d,e)
else return D.c.o2(d,e)+D.c.en(2,(~e>>>0)+65536&65535)},
TZ:function TZ(d,e){this.a=d
this.b=e},
b6K:function b6K(d,e,f,g,h,i,j,k){var _=this
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
_.E=_.bx=_.bo=_.bb=_.aK=_.bP=_.c0=_.y2=_.y1=_.xr=$},
td:function td(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c0b:function c0b(){this.c=this.b=this.a=$},
ceu:function ceu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
biD:function biD(d,e,f,g){var _=this
_.a=d
_.b=null
_.c=e
_.e=_.d=0
_.r=f
_.w=g},
bNu:function bNu(){},
ajW:function ajW(d,e){this.a=d
this.b=e},
biU(d,e,f,g){var x,w,v=new A.biT(e)
if(g==null)g=0
if(f==null)f=d.length-g
x=d.length
if(g+f>x)f=x-g
w=y.D.b(d)?d:new Uint8Array(B.bU(d))
x=J.df(D.B.gaj(w),w.byteOffset+g,f)
v.b=x
v.d=x.length
return v},
biT:function biT(d){var _=this
_.b=null
_.c=0
_.d=$
_.a=d},
biV:function biV(){},
cEk(d,e){var x=e==null?32768:e
return new A.awa(new Uint8Array(x),d)},
awa:function awa(d,e){this.b=0
this.c=d
this.a=e},
brI:function brI(){},
a0b(d,e,f){var x=0,w=B.k(y.D),v
var $async$a0b=B.f(function(g,h){if(g===1)return B.h(h,w)
while(true)switch(x){case 0:x=3
return B.c(A.HG(d,e,"jpg",new A.bi7(d,e,f),f),$async$a0b)
case 3:v=h
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$a0b,w)},
arn(d,e){var x=0,w=B.k(y.D),v
var $async$arn=B.f(function(f,g){if(f===1)return B.h(g,w)
while(true)switch(x){case 0:x=3
return B.c(A.HG(d,e,"png",new A.bi8(d,e),null),$async$arn)
case 3:v=g
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$arn,w)},
bi9(d,e,f){var x=0,w=B.k(y.D),v
var $async$bi9=B.f(function(g,h){if(g===1)return B.h(h,w)
while(true)switch(x){case 0:x=3
return B.c(A.HG(d,e,"webp",new A.bia(d,e,f),f),$async$bi9)
case 3:v=h
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$bi9,w)},
HG(d,e,f,g,h){return A.cYG(d,e,f,g,h)},
cYG(d,e,f,g,h){var x=0,w=B.k(y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j
var $async$HG=B.f(function(i,a0){if(i===1){t.push(a0)
x=u}while(true)switch(x){case 0:if(!$.cyQ){v=g.$0()
x=1
break}m=$.hw().b
m===$&&B.b()
r=m
q="uploads/"+Date.now()+"."+f
u=4
m=r.as
m===$&&B.b()
x=7
return B.c(m.bB("images-temp").QQ(q,d),$async$HG)
case 7:p=a0
if(J.bA(p)===0){m=g.$0()
v=m
x=1
break}u=9
m=r.as
m===$&&B.b()
x=12
return B.c(m.bB("images-temp").Y6(0,q,new A.bIp(e,h,C.aW_)),$async$HG)
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
if(m instanceof B.Sv){n=m
if(n.c==="403")$.cyQ=!1
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
return B.c(m.bB("images-temp").K(0,B.a([q],y.T)),$async$HG)
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
return B.j($async$HG,w)},
csv(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n=null,m=A.cLu(d)
if(m==null)throw B.l(B.cK("Failed to decode "+f+" image"))
x=A.deL(m,e)
if(f==="jpg"){w=g==null?85:g
v=new Uint8Array(64)
u=new Uint8Array(64)
t=new Float32Array(64)
s=new Float32Array(64)
r=B.bO(65535,n,!1,y.cl)
q=y.s
p=B.bO(65535,n,!1,q)
o=B.bO(64,n,!1,q)
q=B.bO(64,n,!1,q)
v=new A.bjz(v,u,t,s,r,p,o,q,new Int32Array(2048))
v.e=v.T9(C.SB,C.qH)
v.f=v.T9(C.Nu,C.qH)
v.r=v.T9(C.Kx,C.LR)
v.w=v.T9(C.Mj,C.ON)
v.baF()
v.baR()
v.aLA(w)
return new Uint8Array(B.bU(v.byU(x,C.K4)))}else if(f==="png")return new Uint8Array(B.bU(new A.bt1(C.aTX,6).byV(x,!1)))
else if(f==="webp")return d
else throw B.l(B.cK("Unsupported image format: "+f))},
cYF(d){var x=d.length
if(x>=2&&d[0]===255&&d[1]===216)return"jpg"
if(x>=8&&d[0]===137&&d[1]===80&&d[2]===78&&d[3]===71)return"png"
if(x>=12&&d[0]===82&&d[1]===73&&d[2]===70&&d[3]===70&&d[8]===87&&d[9]===69&&d[10]===66&&d[11]===80)return"webp"
return"jpg"},
HF(d,e,f){var x=0,w=B.k(y.D),v,u
var $async$HF=B.f(function(g,h){if(g===1)return B.h(h,w)
while(true)switch(x){case 0:u=A.cYF(d)
x=u==="jpg"?3:5
break
case 3:x=6
return B.c(A.a0b(d,e,f),$async$HF)
case 6:v=h
x=1
break
x=4
break
case 5:x=u==="png"?7:9
break
case 7:x=10
return B.c(A.arn(d,e),$async$HF)
case 10:v=h
x=1
break
x=8
break
case 9:x=u==="webp"?11:13
break
case 11:x=14
return B.c(A.bi9(d,e,f),$async$HF)
case 14:v=h
x=1
break
x=12
break
case 13:x=15
return B.c(A.a0b(d,e,f),$async$HF)
case 15:v=h
x=1
break
case 12:case 8:case 4:case 1:return B.i(v,w)}})
return B.j($async$HF,w)},
bi7:function bi7(d,e,f){this.a=d
this.b=e
this.c=f},
bi8:function bi8(d,e){this.a=d
this.b=e},
bia:function bia(d,e,f){this.a=d
this.b=e
this.c=f},
b0E:function b0E(d,e){this.a=d
this.b=e},
hA:function hA(d){this.a=-1
this.b=d},
Nn:function Nn(d){this.a=d},
No:function No(d){this.a=d},
Np:function Np(d){this.a=d},
Nq:function Nq(d){this.a=d},
Nr:function Nr(d){this.a=d},
Ns:function Ns(d){this.a=d},
Nv:function Nv(d,e){this.a=d
this.b=e},
Nw:function Nw(d){this.a=d},
Nx:function Nx(d,e){this.a=d
this.b=e},
Ny:function Ny(d){this.a=d},
Nz:function Nz(d,e){this.a=d
this.b=e},
cUh(d,e,f,g){var x=new A.Nt(new Uint8Array(4))
x.aTH(d,e,f,g)
return x},
xX:function xX(d){this.a=d},
akG:function akG(d){this.a=d},
Nt:function Nt(d){this.a=d},
XZ:function XZ(d){this.a=d},
akR:function akR(d){this.a=d},
aVI(d,e,f){var x
if(e===f)return d
switch(e.a){case 0:if(d===0)x=0
else{x=C.Y6.i(0,f)
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
case 1:return D.c.S(B.bc(d),1)
case 2:return d
case 3:return d*17
case 4:return d*4369
case 5:return d*286331153
case 6:return d*8
case 7:return d*2184
case 8:return d*143165576
case 9:case 10:case 11:return d/3}break
case 3:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.S(B.bc(d),6)
case 2:return D.c.S(B.bc(d),4)
case 3:return d
case 4:return d*257
case 5:return d*16843009
case 6:return D.c.S(B.bc(d),1)
case 7:return d*128
case 8:return d*8421504
case 9:case 10:case 11:return d/255}break
case 4:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.S(B.bc(d),14)
case 2:return D.c.S(B.bc(d),12)
case 3:return D.c.S(B.bc(d),8)
case 4:return d
case 5:return B.bc(d)<<8>>>0
case 6:return D.c.S(B.bc(d),9)
case 7:return D.c.S(B.bc(d),1)
case 8:return d*524296
case 9:case 10:case 11:return d/65535}break
case 5:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.S(B.bc(d),30)
case 2:return D.c.S(B.bc(d),28)
case 3:return D.c.S(B.bc(d),24)
case 4:return D.c.S(B.bc(d),16)
case 5:return d
case 6:return D.c.S(B.bc(d),25)
case 7:return D.c.S(B.bc(d),17)
case 8:return D.c.S(B.bc(d),1)
case 9:case 10:case 11:return d/4294967295}break
case 6:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.S(B.bc(d),5)
case 2:return d<=0?0:D.c.S(B.bc(d),3)
case 3:return d<=0?0:B.bc(d)<<1>>>0
case 4:return d<=0?0:B.bc(d)*516
case 5:return d<=0?0:B.bc(d)*33818640
case 6:return d
case 7:return d*258
case 8:return d*16909320
case 9:case 10:case 11:return d/127}break
case 7:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.S(B.bc(d),15)
case 2:return d<=0?0:D.c.S(B.bc(d),11)
case 3:return d<=0?0:D.c.S(B.bc(d),7)
case 4:return d<=0?0:B.bc(d)<<1>>>0
case 5:return d<=0?0:B.bc(d)*131076
case 6:return D.c.S(B.bc(d),8)
case 7:return d
case 8:return B.bc(d)*65538
case 9:case 10:case 11:return d/32767}break
case 8:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.S(B.bc(d),29)
case 2:return d<=0?0:D.c.S(B.bc(d),27)
case 3:return d<=0?0:D.c.S(B.bc(d),23)
case 4:return d<=0?0:D.c.S(B.bc(d),16)
case 5:return d<=0?0:B.bc(d)<<1>>>0
case 6:return D.c.S(B.bc(d),24)
case 7:return D.c.S(B.bc(d),16)
case 8:return d
case 9:case 10:case 11:return d/2147483647}break
case 9:case 10:case 11:switch(f.a){case 0:return d===0?0:1
case 1:return D.d.C(D.d.b2(d,0,1)*3)
case 2:return D.d.C(D.d.b2(d,0,1)*15)
case 3:return D.d.C(D.d.b2(d,0,1)*255)
case 4:return D.d.C(D.d.b2(d,0,1)*65535)
case 5:return D.d.C(D.d.b2(d,0,1)*4294967295)
case 6:return D.d.C(d<0?D.d.b2(d,-1,1)*128:D.d.b2(d,-1,1)*127)
case 7:return D.d.C(d<0?D.d.b2(d,-1,1)*32768:D.d.b2(d,-1,1)*32767)
case 8:return D.d.C(d<0?D.d.b2(d,-1,1)*2147483648:D.d.b2(d,-1,1)*2147483647)
case 9:case 10:case 11:return d}break}},
nJ:function nJ(d,e){this.a=d
this.b=e},
ajH:function ajH(d,e){this.a=d
this.b=e},
ZX(d){var x=new A.OH(B.I(y.N,y.P))
x.aTU(d)
return x},
cBp(d){var x=new A.OH(B.I(y.N,y.P))
x.vo(0,d)
return x},
OH:function OH(d){this.a=d},
aK2:function aK2(d,e){this.a=d
this.b=e},
aL(d,e,f){return new A.aoQ(d,e)},
aoQ:function aoQ(d,e){this.a=d
this.b=e},
ua:function ua(d){this.a=d},
bi0:function bi0(d){this.a=d},
cCr(d){var x=new A.q4(B.I(y.p,y.r),new A.ua(B.I(y.N,y.P)))
x.a9B(d)
return x},
q4:function q4(d,e){this.a=d
this.b=e},
bi1:function bi1(d){this.a=d},
bi2:function bi2(d){this.a=d},
cYD(d){var x=new Uint16Array(1)
x[0]=d
return new A.yr(x)},
cCz(d,e){var x=new A.yr(new Uint16Array(e))
x.aTZ(d,e)
return x},
cYC(d){var x=new Uint32Array(1)
x[0]=d
return new A.rj(x)},
cCu(d,e){var x=new A.rj(new Uint32Array(e))
x.aTW(d,e)
return x},
cCv(d,e){var x,w=J.ku(e,y.i)
for(x=0;x<e;++x)w[x]=new A.nX(d.a3(),d.a3())
return new A.ub(w)},
cCy(d,e){var x=new A.yq(new Int16Array(e))
x.aTY(d,e)
return x},
cCw(d,e){var x=new A.yp(new Int32Array(e))
x.aTX(d,e)
return x},
cCx(d,e){var x,w,v,u,t=J.ku(e,y.i)
for(x=0;x<e;++x){w=d.a3()
v=$.hx()
v.$flags&2&&B.C(v)
v[0]=w
w=$.kJ()
u=w[0]
v[0]=d.a3()
t[x]=new A.nX(u,w[0])}return new A.uc(t)},
cCA(d){var x=new Float32Array(1)
x[0]=d
return new A.BO(x)},
cCB(d,e){var x=new A.BO(new Float32Array(e))
x.aU_(d,e)
return x},
cCs(d){var x=new Float64Array(1)
x[0]=d
return new A.BN(x)},
cCt(d,e){var x=new A.BN(new Float64Array(e))
x.aTV(d,e)
return x},
mP:function mP(d,e){this.a=d
this.b=e},
k3:function k3(){},
u9:function u9(d){this.a=d},
BM:function BM(d){this.a=d},
yr:function yr(d){this.a=d},
rj:function rj(d){this.a=d},
ub:function ub(d){this.a=d},
w6:function w6(d){this.a=d},
yq:function yq(d){this.a=d},
yp:function yp(d){this.a=d},
uc:function uc(d){this.a=d},
BO:function BO(d){this.a=d},
BN:function BN(d){this.a=d},
HD:function HD(d){this.a=d},
czc(d){var x,w,v=new A.b_p()
if(!A.cqV(d))B.a5(A.c6("Not a bitmap file."))
d.d+=2
x=d.a3()
w=$.hx()
w.$flags&2&&B.C(w)
w[0]=x
x=$.kJ()
d.d+=4
w[0]=d.a3()
v.b=x[0]
return v},
cqV(d){if(d.c-d.d<2)return!1
return A.ca(d,null,0).am()===19778},
cTA(d,e){var x,w,v,u,t=e==null?A.czc(d):e,s=d.d,r=d.a3(),q=d.a3(),p=$.hx()
p.$flags&2&&B.C(p)
p[0]=q
q=$.kJ()
x=q[0]
p[0]=d.a3()
q=q[0]
w=d.am()
v=d.am()
u=C.QW[d.a3()]
d.a3()
p[0]=d.a3()
p[0]=d.a3()
p=d.a3()
d.a3()
s=new A.FR(t,x,q,r,w,v,u,p,s)
s.aiy(d,e)
return s},
lP:function lP(d,e){this.a=d
this.b=e},
b_p:function b_p(){this.b=$},
FR:function FR(d,e,f,g,h,i,j,k,l){var _=this
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
ajL:function ajL(d){this.a=$
this.b=null
this.c=d},
b_o:function b_o(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
b7L:function b7L(d){this.a=$
this.b=null
this.c=d},
b6t:function b6t(){},
b6u:function b6u(){},
ba6:function ba6(){},
aoR:function aoR(d,e,f){this.a=d
this.b=e
this.c=f},
arM:function arM(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
OJ:function OJ(d,e){this.a=d
this.b=e},
GV:function GV(d,e){this.a=d
this.b=e},
aoS:function aoS(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
cBq(d,e,f,g){var x,w
switch(d.a){case 1:return new A.bj5(f,e)
case 2:return new A.arO(f,g==null?1:g,e)
case 3:return new A.arO(f,g==null?16:g,e)
case 4:x=g==null?32:g
w=new A.bj3(f,x,e)
w.aU5(e,f,x)
return w
case 5:return new A.bj4(f,g==null?16:g,e)
case 6:return new A.arM(f,g==null?32:g,!1,e)
case 7:return new A.arM(f,g==null?32:g,!0,e)
default:throw B.l(A.c6("Invalid compression type: "+d.j(0)))}},
tY:function tY(d,e){this.a=d
this.b=e},
bbl:function bbl(){},
bj2:function bj2(){},
cWT(d,e,f,g){var x,w,v,u,t,s,r,q
if(e===0){if(g!==0)throw B.l(A.c6("Incomplete huffman data"))
return}x=d.d
w=d.a3()
v=d.a3()
d.d+=4
u=d.a3()
t=!0
if(w<65537)t=v>=65537
if(t)throw B.l(A.c6("Invalid huffman table size"))
d.d+=4
s=B.bO(65537,0,!1,y.p)
r=J.iN(16384,y.W)
for(q=0;q<16384;++q)r[q]=new A.aoT()
A.cWU(d,e-20,w,v,s)
if(u>8*(e-(d.d-x)))throw B.l(A.c6("Error in header for Huffman-encoded data (invalid number of bits)."))
A.cWQ(s,w,v,r)
A.cWS(s,r,d,u,v,g,f)},
cWS(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p="Error in Huffman-encoded data (invalid code).",o=B.a([0,0],y.t),n=f.d+D.c.b4(g+7,8)
for(x=0;f.d<n;){A.cs_(o,f)
for(;w=o[1],w>=14;){v=e[D.c.o2(o[0],w-14)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cs0(v.b,h,o,f,j,x,i)}else{if(v.c==null)throw B.l(A.c6(p))
for(t=0;t<v.b;++t){s=d[v.c[t]]&63
while(!0){w=o[1]
if(!(w<s&&f.d<n))break
A.cs_(o,f)}if(w>=s){u=v.c
w-=s
if(d[u[t]]>>>6===(D.c.o2(o[0],w)&D.c.en(1,s)-1)>>>0){o[1]=w
r=A.cs0(u[t],h,o,f,j,x,i)
x=r
break}}}if(t===v.b)throw B.l(A.c6(p))}}}q=8-g&7
o[0]=D.c.S(o[0],q)
o[1]=o[1]-q
for(;w=o[1],w>0;){v=e[D.c.eU(o[0],14-w)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cs0(v.b,h,o,f,j,x,i)}else throw B.l(A.c6(p))}if(x!==i)throw B.l(A.c6("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
cs0(d,e,f,g,h,i,j){var x,w,v,u,t,s="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)A.cs_(f,g)
x=f[1]-8
f[1]=x
w=D.c.o2(f[0],x)&255
if(i+w>j)throw B.l(A.c6(s))
v=h[i-1]
for(x=h.$flags|0;u=w-1,w>0;w=u,i=t){t=i+1
x&2&&B.C(h)
h[i]=v}}else{if(i<j){h.toString
t=i+1
h.$flags&2&&B.C(h)
h[i]=d}else throw B.l(A.c6(s))
i=t}return i},
cWQ(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n="Error in Huffman-encoded data (invalid code table entry)."
for(x=y.t,w=y.p;e<=f;++e){v=d[e]
u=v>>>6
t=v&63
if(D.c.hA(u,t)!==0)throw B.l(A.c6(n))
if(t>14){s=g[D.c.h1(u,t-14)]
if(s.a!==0)throw B.l(A.c6(n))
v=++s.b
r=s.c
if(r!=null){v=B.bO(v,0,!1,w)
s.c=v
for(q=s.b-1,p=0;p<q;++p)v[p]=r[p]}else s.c=B.a([0],x)
s.c[s.b-1]=e}else if(t!==0){v=14-t
o=D.c.eU(u,v)
for(p=D.c.eU(1,v);p>0;--p,++o){s=g[o]
if(s.a!==0||s.c!=null)throw B.l(A.c6(n))
s.a=t
s.b=e}}}},
cWU(d,e,f,g,h){var x,w,v,u,t,s="Error in Huffman-encoded data (unexpected end of code table data).",r="Error in Huffman-encoded data (code table is longer than expected).",q=d.d,p=B.a([0,0],y.t)
for(x=g+1;f<=g;++f){if(d.d-q>e)throw B.l(A.c6(s))
w=A.cBr(6,p,d)
h[f]=w
if(w===63){if(d.d-q>e)throw B.l(A.c6(s))
v=A.cBr(8,p,d)+6
if(f+v>x)throw B.l(A.c6(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}else if(w>=59){v=w-59+2
if(f+v>x)throw B.l(A.c6(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}}A.cWR(h)},
cWR(d){var x,w,v,u,t,s=B.bO(59,0,!1,y.p)
for(x=0;x<65537;++x){w=d[x]
s[w]=s[w]+1}for(v=0,x=58;x>0;--x,v=u){u=v+s[x]>>>1
s[x]=v}for(x=0;x<65537;++x){t=d[x]
if(t>0){w=s[t]
s[t]=w+1
d[x]=(t|w<<6)>>>0}}},
cs_(d,e){d[0]=((d[0]<<8|e.ct())&-1)>>>0
d[1]=(d[1]+8&-1)>>>0},
cBr(d,e,f){var x
for(;x=e[1],x<d;){e[0]=((e[0]<<8|J.v(f.a,f.d++))&-1)>>>0
e[1]=(e[1]+8&-1)>>>0}x-=d
e[1]=x
return(D.c.o2(e[0],x)&D.c.en(1,d)-1)>>>0},
aoT:function aoT(){this.b=this.a=0
this.c=null},
cWV(d){var x=A.cY(d,!1,null,0)
if(x.a3()!==20000630)return!1
if(x.ct()!==2)return!1
if((x.rH()&4294967289)>>>0!==0)return!1
return!0},
bbn:function bbn(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
cCS(d,e,f){var x=new A.arN(d,B.a([],y.Q),B.I(y.N,y.n),C.IC,e)
x.aTN(d,e,f)
return x},
a_2:function a_2(){},
bbo:function bbo(d,e){this.a=d
this.b=e},
arN:function arN(d,e,f,g,h){var _=this
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
bj3:function bj3(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
aN4:function aN4(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
bj4:function bj4(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
bj5:function bj5(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
arO:function arO(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
bbm:function bbm(){this.a=null},
cC4(d){var x=new Uint8Array(d*3)
return new A.a_E(A.cY6(d),d,null,new A.uq(x,d,3))},
cY5(d){return new A.a_E(d.a,d.b,d.c,A.cEr(d.d))},
cY6(d){var x
for(x=1;x<=8;++x)if(D.c.en(1,x)>=d)return x
return 0},
a_E:function a_E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_F:function a_F(){},
arP:function arP(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=$},
aqq:function aqq(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
bfp:function bfp(){var _=this
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
cCo(d){var x,w,v,u,t,s
if(d.am()!==0)return null
x=d.am()
if(x>=3)return null
w=C.apg[x]
if(w===C.J2)return null
v=d.am()
u=J.ku(v,y.Y)
for(t=0;t<v;++t){J.v(d.a,d.d++)
s=J.v(d.a,d.d++)
J.v(d.a,d.d++);++d.d
d.am()
d.am()
u[t]=new A.arb(s,d.a3(),d.a3())}return new A.bhP(w,v,u)},
Pe:function Pe(d,e){this.a=d
this.b=e},
bhP:function bhP(d,e,f){this.c=d
this.d=e
this.e=f},
arb:function arb(d,e,f){this.b=d
this.d=e
this.e=f},
bhN:function bhN(d,e,f,g,h,i,j,k,l){var _=this
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
bhO:function bhO(){this.b=this.a=null},
akL:function akL(d,e,f){this.e=d
this.f=e
this.r=f},
Ht:function Ht(){},
Hu:function Hu(d){this.a=d},
a06:function a06(d){this.a=d},
bjv:function bjv(){this.d=null},
Ca:function Ca(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.y=_.x=_.w=_.r=_.f=_.e=$},
cD6(){var x=B.bO(4,null,!1,y.a7),w=B.a([],y.cB),v=y.bT,u=J.C7(0,v)
v=J.C7(0,v)
return new A.bjx(new A.OH(B.I(y.N,y.P)),x,w,u,v,B.a([],y.E))},
bjx:function bjx(d,e,f,g,h,i){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i},
bjy:function bjy(d,e){this.a=d
this.b=e},
Uw:function Uw(d){this.a=d
this.b=0},
as1:function as1(d,e){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=d
_.z=e},
bjB:function bjB(){this.r=this.f=$},
as2:function as2(d,e,f,g,h,i,j,k){var _=this
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
as0:function as0(){},
bjw:function bjw(d,e){this.a=d
this.b=e},
bjz:function bjz(d,e,f,g,h,i,j,k,l){var _=this
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
QY:function QY(d,e){this.a=d
this.b=e},
a3h:function a3h(d,e){this.a=d
this.b=e},
a3i:function a3i(){},
arQ:function arQ(d,e,f,g,h,i,j,k,l){var _=this
_.y=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
cCU(){var x=y.N
return new A.bj7(B.I(x,x),B.a([],y.d),B.a([],y.t))},
D0:function D0(d,e){this.a=d
this.b=e},
bt3:function bt3(){},
bj7:function bj7(d,e,f){var _=this
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
awV:function awV(d){var _=this
_.a=d
_.c=_.b=0
_.d=$
_.e=0},
awW:function awW(d,e){this.a=d
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
D1:function D1(d,e){this.a=d
this.b=e},
IW:function IW(d){this.b=this.a=0
this.e=d},
bt4:function bt4(d){this.b=this.a=null
this.c=d},
bt5:function bt5(){},
axr:function axr(){this.b=this.a=null},
axs:function axs(){this.b=this.a=null},
wy:function wy(){},
axu:function axu(){this.b=this.a=null},
axv:function axv(){this.b=this.a=null},
axy:function axy(){this.b=this.a=null},
axz:function axz(){this.b=this.a=null},
a3B:function a3B(d){this.b=d},
axx:function axx(){this.b=$
this.c=null},
bu0:function bu0(){var _=this
_.w=_.r=_.f=_.e=$},
Ra:function Ra(d){this.a=d
this.c=null},
cES(d){var x=new A.bu2(B.I(y.p,y.a2))
x.aUe(d)
return x},
ctz(d,e,f,g){var x=d/255,w=e/255,v=f/255,u=g/255,t=w*(1-v),s=x*(1-u)
return D.d.C(D.d.b2((2*x<v?2*w*x+t+s:u*v-2*(v-x)*(u-w)+t+s)*255,0,255))},
bu3(d,e){if(e===0)return 0
return D.d.C(D.c.b2(D.d.C(255*(1-(1-d/255)/(e/255))),0,255))},
bu5(d,e){return D.d.C(D.c.b2(d+e-255,0,255))},
ctB(d,e){return D.d.C(D.c.b2(255-(255-e)*(255-d),0,255))},
bu4(d,e){if(e===255)return 255
return D.d.C(D.d.b2(d/255/(1-e/255)*255,0,255))},
ctC(d,e){var x=d/255,w=e/255,v=1-w
return D.d.aV(255*(v*w*x+w*(1-v*(1-x))))},
ctx(d,e){var x=e/255,w=d/255
if(w<0.5)return D.d.aV(510*x*w)
else return D.d.aV(255*(1-2*(1-x)*(1-w)))},
ctD(d,e){if(e<128)return A.bu3(d,2*e)
else return A.bu4(d,2*(e-128))},
cty(d,e){var x
if(e<128)return A.bu5(d,2*e)
else{x=2*(e-128)
return x+d>255?255:d+x}},
ctA(d,e){return e<128?Math.min(d,2*e):Math.max(d,2*(e-128))},
ctw(d,e){return D.d.aV(e+d-2*e*d/255)},
pc(d,e,f){var x
if(d==null)x=0
else x=f===1?d[e]:(d[e]<<8|d[e+1])>>>8
return x},
cET(b5,b6,b7,b8,b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4=B.I(y.p,y.aG)
for(x=b9.length,w=0;v=b9.length,w<v;b9.length===x||(0,B.Q)(b9),++w){u=b9[w]
b4.m(0,u.a,u)}if(b6===8)t=1
else t=b6===16?2:-1
s=A.hT(b3,b3,C.a8,0,C.bm,b8,b3,0,v,b3,C.a8,b7,!1)
if(t===-1)throw B.l(A.c6("PSD: unsupported bit depth: "+B.o(b6)))
r=b4.i(0,0)
q=b4.i(0,1)
p=b4.i(0,2)
o=b4.i(0,-1)
n=B.a([0,0,0],y.t)
m=-t
for(x=s.a,x=x.ga5(x),l=v>=5,k=v===4,j=v>=2,v=v>=4;x.q();){i=x.gL(x)
m+=t
switch(b5){case C.a27:i.saf(0,A.pc(r.c,m,t))
i.sap(A.pc(q.c,m,t))
i.sau(0,A.pc(p.c,m,t))
i.saE(0,v?A.pc(o.c,m,t):255)
if(i.gaE(i)!==0){i.saf(0,(i.gaf(i)+i.gaE(i)-255)*255/i.gaE(i))
i.sap((i.gap()+i.gaE(i)-255)*255/i.gaE(i))
i.sau(0,(i.gau(i)+i.gaE(i)-255)*255/i.gaE(i))}break
case C.a29:h=A.pc(r.c,m,t)
g=A.pc(q.c,m,t)
f=A.pc(p.c,m,t)
e=v?A.pc(o.c,m,t):255
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
a8=[D.d.C(D.d.b2(a5*255,0,255)),D.d.C(D.d.b2(a6*255,0,255)),D.d.C(D.d.b2(a7*255,0,255))]
i.saf(0,a8[0])
i.sap(a8[1])
i.sau(0,a8[2])
i.saE(0,e)
break
case C.a26:a9=A.pc(r.c,m,t)
e=j?A.pc(o.c,m,t):255
i.saf(0,a9)
i.sap(a9)
i.sau(0,a9)
i.saE(0,e)
break
case C.a28:b0=A.pc(r.c,m,t)
b1=A.pc(q.c,m,t)
d=A.pc(p.c,m,t)
b2=A.pc(b4.i(0,k?-1:3).c,m,t)
e=l?A.pc(o.c,m,t):255
A.cL9(255-b0,255-b1,255-d,255-b2,n)
i.saf(0,n[0])
i.sap(n[1])
i.sau(0,n[2])
i.saE(0,e)
break
default:throw B.l(A.c6("Unhandled color mode: "+B.o(b5)))}}return s},
uw:function uw(d,e){this.a=d
this.b=e},
bu2:function bu2(d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=_.w=$
_.y=null
_.z=d
_.as=$
_.ay=_.ax=_.at=null},
axt:function axt(d,e){this.a=d
this.b=e},
axw:function axw(d,e,f){var _=this
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
d13(d,e){var x,w
switch(d){case"lsct":x=new A.axx()
w=e.c-e.d
x.b=e.a3()
if(w>=12){if(e.je(4)!=="8BIM")B.a5(A.c6("Invalid key in layer additional data"))
x.c=e.je(4)}if(w>=16)e.a3()
return x
default:return new A.a3B(e)}},
Rb:function Rb(){},
bu1:function bu1(){this.a=null},
axC:function axC(){},
z2:function z2(d,e,f){this.a=d
this.b=e
this.c=f},
m8:function m8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3E:function a3E(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
Rf:function Rf(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
axB:function axB(){this.y=this.b=this.a=0},
z3(d,e){return(C.u5[d>>>8]<<17|C.u5[e>>>8]<<16|C.u5[d&255]<<1|C.u5[e&255])>>>0},
rH:function rH(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
bu6:function bu6(){this.b=this.a=null},
aBW:function aBW(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
oe:function oe(d,e){this.a=d
this.b=e},
bFR:function bFR(){this.a=null
this.b=$},
bGw:function bGw(d){this.a=d
this.c=this.b=0},
aBZ:function aBZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
cut(d,e,f){var x=new A.bGy(e,f,d),w=y.s
x.e=B.bO(e,null,!1,w)
x.f=B.bO(e,null,!1,w)
return x},
bGy:function bGy(d,e,f){var _=this
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
aC_:function aC_(d,e,f,g){var _=this
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
Ks:function Ks(d,e){this.a=d
this.b=e},
kD:function kD(d,e){this.a=d
this.b=e},
rZ:function rZ(d,e){this.a=d
this.b=e},
bGz:function bGz(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
cDr(){return new A.bl3(new Uint8Array(4096))},
bl3:function bl3(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
bGx:function bGx(){this.a=null
this.c=$},
cuP(d,e){var x=new Int32Array(4),w=new Int32Array(4),v=new Int8Array(4),u=new Int8Array(4),t=B.bO(8,null,!1,y.ak),s=B.bO(4,null,!1,y.Z)
return new A.bLK(d,e,new A.bLQ(),new A.bLU(),new A.bLM(x,w),new A.bLW(v,u),t,s,new Uint8Array(4))},
cHO(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
bLK:function bLK(d,e,f,g,h,i,j,k,l){var _=this
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
_.c0=$
_.bP=null
_.bb=_.aK=$
_.bo=null
_.bx=$},
bLX:function bLX(){},
cHL(d){var x=new A.a87(d)
x.b=254
x.c=0
x.d=-8
return x},
a87:function a87(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
eN(d,e,f){return D.c.lc(D.c.S(d+2*e+f+2,2),32)},
d5s(d){var x,w=B.a([A.eN(J.v(d.a,d.d+-33),J.v(d.a,d.d+-32),J.v(d.a,d.d+-31)),A.eN(J.v(d.a,d.d+-32),J.v(d.a,d.d+-31),J.v(d.a,d.d+-30)),A.eN(J.v(d.a,d.d+-31),J.v(d.a,d.d+-30),J.v(d.a,d.d+-29)),A.eN(J.v(d.a,d.d+-30),J.v(d.a,d.d+-29),J.v(d.a,d.d+-28))],y.t)
for(x=0;x<4;++x)d.A2(x*32,4,w)},
d5k(d){var x=J.v(d.a,d.d+-33),w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95),s=A.ca(d,null,0),r=s.QA(),q=A.eN(x,w,v)
r.$flags&2&&B.C(r)
r[0]=16843009*q
s.d+=32
q=s.QA()
r=A.eN(w,v,u)
q.$flags&2&&B.C(q)
q[0]=16843009*r
s.d+=32
r=s.QA()
q=A.eN(v,u,t)
r.$flags&2&&B.C(r)
r[0]=16843009*q
s.d+=32
q=s.QA()
r=A.eN(u,t,t)
q.$flags&2&&B.C(q)
q[0]=16843009*r},
d5i(d){var x,w,v,u
for(x=4,w=0;w<4;++w)x+=J.v(d.a,d.d+(w-32))+J.v(d.a,d.d+(-1+w*32))
x=D.c.S(x,3)
for(w=0;w<4;++w){v=d.a
u=d.d+w*32
J.tu(v,u,u+4,x)}},
cuQ(d,e){var x,w,v,u,t,s=255-J.v(d.a,d.d+-33)
for(x=0,w=0;w<e;++w){v=s+J.v(d.a,d.d+(x-1))
for(u=0;u<e;++u){t=$.pO()[v+J.v(d.a,d.d+(-32+u))]
J.bV(d.a,d.d+(x+u),t)}x+=32}},
d5q(d){A.cuQ(d,4)},
d5r(d){A.cuQ(d,8)},
d5p(d){A.cuQ(d,16)},
d5o(d){var x,w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95),s=J.v(d.a,d.d+-33),r=J.v(d.a,d.d+-32),q=J.v(d.a,d.d+-31),p=J.v(d.a,d.d+-30),o=J.v(d.a,d.d+-29)
d.m(0,96,A.eN(v,u,t))
x=A.eN(w,v,u)
d.m(0,97,x)
d.m(0,64,x)
x=A.eN(s,w,v)
d.m(0,98,x)
d.m(0,65,x)
d.m(0,32,x)
x=A.eN(r,s,w)
d.m(0,99,x)
d.m(0,66,x)
d.m(0,33,x)
d.m(0,0,x)
x=A.eN(q,r,s)
d.m(0,67,x)
d.m(0,34,x)
d.m(0,1,x)
x=A.eN(p,q,r)
d.m(0,35,x)
d.m(0,2,x)
d.m(0,3,A.eN(o,p,q))},
d5n(d){var x,w=J.v(d.a,d.d+-32),v=J.v(d.a,d.d+-31),u=J.v(d.a,d.d+-30),t=J.v(d.a,d.d+-29),s=J.v(d.a,d.d+-28),r=J.v(d.a,d.d+-27),q=J.v(d.a,d.d+-26),p=J.v(d.a,d.d+-25)
d.m(0,0,A.eN(w,v,u))
x=A.eN(v,u,t)
d.m(0,32,x)
d.m(0,1,x)
x=A.eN(u,t,s)
d.m(0,64,x)
d.m(0,33,x)
d.m(0,2,x)
x=A.eN(t,s,r)
d.m(0,96,x)
d.m(0,65,x)
d.m(0,34,x)
d.m(0,3,x)
x=A.eN(s,r,q)
d.m(0,97,x)
d.m(0,66,x)
d.m(0,35,x)
x=A.eN(r,q,p)
d.m(0,98,x)
d.m(0,67,x)
d.m(0,99,A.eN(q,p,p))},
d5u(d){var x=J.v(d.a,d.d+-1),w=J.v(d.a,d.d+31),v=J.v(d.a,d.d+63),u=J.v(d.a,d.d+-33),t=J.v(d.a,d.d+-32),s=J.v(d.a,d.d+-31),r=J.v(d.a,d.d+-30),q=J.v(d.a,d.d+-29),p=D.c.lc(D.c.S(u+t+1,1),32)
d.m(0,65,p)
d.m(0,0,p)
p=D.c.lc(D.c.S(t+s+1,1),32)
d.m(0,66,p)
d.m(0,1,p)
p=D.c.lc(D.c.S(s+r+1,1),32)
d.m(0,67,p)
d.m(0,2,p)
d.m(0,3,D.c.lc(D.c.S(r+q+1,1),32))
d.m(0,96,A.eN(v,w,x))
d.m(0,64,A.eN(w,x,u))
p=A.eN(x,u,t)
d.m(0,97,p)
d.m(0,32,p)
p=A.eN(u,t,s)
d.m(0,98,p)
d.m(0,33,p)
p=A.eN(t,s,r)
d.m(0,99,p)
d.m(0,34,p)
d.m(0,35,A.eN(s,r,q))},
d5t(d){var x,w=J.v(d.a,d.d+-32),v=J.v(d.a,d.d+-31),u=J.v(d.a,d.d+-30),t=J.v(d.a,d.d+-29),s=J.v(d.a,d.d+-28),r=J.v(d.a,d.d+-27),q=J.v(d.a,d.d+-26),p=J.v(d.a,d.d+-25)
d.m(0,0,D.c.lc(D.c.S(w+v+1,1),32))
x=D.c.lc(D.c.S(v+u+1,1),32)
d.m(0,64,x)
d.m(0,1,x)
x=D.c.lc(D.c.S(u+t+1,1),32)
d.m(0,65,x)
d.m(0,2,x)
x=D.c.lc(D.c.S(t+s+1,1),32)
d.m(0,66,x)
d.m(0,3,x)
d.m(0,32,A.eN(w,v,u))
x=A.eN(v,u,t)
d.m(0,96,x)
d.m(0,33,x)
x=A.eN(u,t,s)
d.m(0,97,x)
d.m(0,34,x)
x=A.eN(t,s,r)
d.m(0,98,x)
d.m(0,35,x)
d.m(0,67,A.eN(s,r,q))
d.m(0,99,A.eN(r,q,p))},
d5l(d){var x,w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95)
d.m(0,0,D.c.lc(D.c.S(w+v+1,1),32))
x=D.c.lc(D.c.S(v+u+1,1),32)
d.m(0,32,x)
d.m(0,2,x)
x=D.c.lc(D.c.S(u+t+1,1),32)
d.m(0,64,x)
d.m(0,34,x)
d.m(0,1,A.eN(w,v,u))
x=A.eN(v,u,t)
d.m(0,33,x)
d.m(0,3,x)
x=A.eN(u,t,t)
d.m(0,65,x)
d.m(0,35,x)
d.m(0,99,t)
d.m(0,98,t)
d.m(0,97,t)
d.m(0,96,t)
d.m(0,66,t)
d.m(0,67,t)},
d5j(d){var x=J.v(d.a,d.d+-1),w=J.v(d.a,d.d+31),v=J.v(d.a,d.d+63),u=J.v(d.a,d.d+95),t=J.v(d.a,d.d+-33),s=J.v(d.a,d.d+-32),r=J.v(d.a,d.d+-31),q=J.v(d.a,d.d+-30),p=D.c.lc(D.c.S(x+t+1,1),32)
d.m(0,34,p)
d.m(0,0,p)
p=D.c.lc(D.c.S(w+x+1,1),32)
d.m(0,66,p)
d.m(0,32,p)
p=D.c.lc(D.c.S(v+w+1,1),32)
d.m(0,98,p)
d.m(0,64,p)
d.m(0,96,D.c.lc(D.c.S(u+v+1,1),32))
d.m(0,3,A.eN(s,r,q))
d.m(0,2,A.eN(t,s,r))
p=A.eN(x,t,s)
d.m(0,35,p)
d.m(0,1,p)
p=A.eN(w,x,t)
d.m(0,67,p)
d.m(0,33,p)
p=A.eN(v,w,x)
d.m(0,99,p)
d.m(0,65,p)
d.m(0,97,A.eN(u,v,w))},
d5F(d){var x
for(x=0;x<16;++x)d.rC(x*32,16,d,-32)},
d5D(d){var x,w,v,u,t
for(x=0,w=16;w>0;--w){v=J.v(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.tu(u,t,t+16,v)
x+=32}},
bLO(d,e){var x,w,v
for(x=0;x<16;++x){w=e.a
v=e.d+x*32
J.tu(w,v,v+16,d)}},
d5v(d){var x,w
for(x=16,w=0;w<16;++w)x+=J.v(d.a,d.d+(-1+w*32))+J.v(d.a,d.d+(w-32))
A.bLO(D.c.S(x,5),d)},
d5x(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.v(d.a,d.d+(-1+w*32))
A.bLO(D.c.S(x,4),d)},
d5w(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.v(d.a,d.d+(w-32))
A.bLO(D.c.S(x,4),d)},
d5y(d){A.bLO(128,d)},
d5G(d){var x
for(x=0;x<8;++x)d.rC(x*32,8,d,-32)},
d5E(d){var x,w,v,u,t
for(x=0,w=0;w<8;++w){v=J.v(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.tu(u,t,t+8,v)
x+=32}},
bLP(d,e){var x,w,v
for(x=0;x<8;++x){w=e.a
v=e.d+x*32
J.tu(w,v,v+8,d)}},
d5z(d){var x,w
for(x=8,w=0;w<8;++w)x+=J.v(d.a,d.d+(w-32))+J.v(d.a,d.d+(-1+w*32))
A.bLP(D.c.S(x,4),d)},
d5A(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.v(d.a,d.d+(w-32))
A.bLP(D.c.S(x,3),d)},
d5B(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.v(d.a,d.d+(-1+w*32))
A.bLP(D.c.S(x,3),d)},
d5C(d){A.bLP(128,d)},
EB(d,e,f,g,h){var x=e+f+g*32,w=J.v(d.a,d.d+x)+D.c.S(h,3)
if(!((w&-256)>>>0===0))w=w<0?0:255
d.m(0,x,w)},
bLN(d,e,f,g,h){A.EB(d,0,0,e,f+g)
A.EB(d,0,1,e,f+h)
A.EB(d,0,2,e,f-h)
A.EB(d,0,3,e,f-g)},
d5m(){var x,w,v,u
if(!$.cHM){for(x=-255;x<=255;++x){w=$.aWm()
v=255+x
u=x<0?-x:x
w.$flags&2&&B.C(w)
w[v]=u
u=$.cq8()
w=D.c.S(w[v],1)
u.$flags&2&&B.C(u)
u[v]=w}for(x=-1020;x<=1020;++x){w=$.cq9()
if(x<-128)v=-128
else v=x>127?127:x
w.$flags&2&&B.C(w)
w[1020+x]=v}for(x=-112;x<=112;++x){w=$.aWn()
if(x<-16)v=-16
else v=x>15?15:x
w.$flags&2&&B.C(w)
w[112+x]=v}for(x=-255;x<=510;++x){w=$.pO()
if(x<0)v=0
else v=x>255?255:x
w.$flags&2&&B.C(w)
w[255+x]=v}$.cHM=!0}},
bLL:function bLL(){},
d5h(){var x,w=J.iN(3,y.D)
for(x=0;x<3;++x)w[x]=new Uint8Array(11)
return new A.a86(w)},
d5V(){var x,w,v,u,t=new Uint8Array(3),s=J.iN(4,y.cm)
for(x=y.V,w=0;w<4;++w){v=J.iN(8,x)
for(u=0;u<8;++u)v[u]=A.d5h()
s[w]=v}D.B.m0(t,0,3,255)
return new A.bLV(t,s)},
bLQ:function bLQ(){this.d=$},
bLU:function bLU(){this.b=null},
bLW:function bLW(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
a86:function a86(d){this.a=d},
bLV:function bLV(d,e){this.a=d
this.b=e},
bLM:function bLM(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
L1:function L1(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
aDF:function aDF(){this.b=this.a=0},
aDH:function aDH(d,e,f){this.a=d
this.b=e
this.c=f},
aDG:function aDG(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
aDI:function aDI(d,e,f){this.a=d
this.b=e
this.c=f},
cuR(d,e){var x,w=B.a([],y.A),v=B.a([],y.F),u=new Uint32Array(2),t=new A.aDD(d,u)
u=t.d=J.df(D.br.gaj(u),0,null)
x=d.ct()
u.$flags&2&&B.C(u)
u[0]=x
x=d.ct()
u.$flags&2&&B.C(u)
u[1]=x
x=d.ct()
u.$flags&2&&B.C(u)
u[2]=x
x=d.ct()
u.$flags&2&&B.C(u)
u[3]=x
x=d.ct()
u.$flags&2&&B.C(u)
u[4]=x
x=d.ct()
u.$flags&2&&B.C(u)
u[5]=x
x=d.ct()
u.$flags&2&&B.C(u)
u[6]=x
x=d.ct()
u.$flags&2&&B.C(u)
u[7]=x
return new A.a88(t,e,w,v)},
EC(d,e){return D.c.S(d+D.c.en(1,e)-1,e)},
a88:function a88(d,e,f,g){var _=this
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
arR:function arR(d,e,f,g){var _=this
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
aDD:function aDD(d,e){var _=this
_.a=0
_.b=d
_.c=e
_.d=$},
bLR:function bLR(d,e){this.a=d
this.b=e},
bLS(d,e,f){var x=d[e]
d.$flags&2&&B.C(d)
d[e]=(((x&4278255360)>>>0)+((f&4278255360)>>>0)&4278255360|(x&16711935)+(f&16711935)&16711935)>>>0},
zE(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
L3(d){if(d<0)return 0
if(d>255)return 255
return d},
bLT(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
d5H(d,e,f){return 4278190080},
d5I(d,e,f){return e},
d5N(d,e,f){return d[f]},
d5O(d,e,f){return d[f+1]},
d5P(d,e,f){return d[f-1]},
d5Q(d,e,f){var x=d[f]
return A.zE(A.zE(e,d[f+1]),x)},
d5R(d,e,f){return A.zE(e,d[f-1])},
d5S(d,e,f){return A.zE(e,d[f])},
d5T(d,e,f){return A.zE(d[f-1],d[f])},
d5U(d,e,f){return A.zE(d[f],d[f+1])},
d5J(d,e,f){var x=d[f-1],w=d[f],v=d[f+1]
return A.zE(A.zE(e,x),A.zE(w,v))},
d5K(d,e,f){var x=d[f],w=d[f-1]
return A.bLT(x>>>24,e>>>24,w>>>24)+A.bLT(x>>>16&255,e>>>16&255,w>>>16&255)+A.bLT(x>>>8&255,e>>>8&255,w>>>8&255)+A.bLT(x&255,e&255,w&255)<=0?x:e},
d5L(d,e,f){var x=d[f],w=d[f-1]
return(A.L3((e>>>24)+(x>>>24)-(w>>>24))<<24|A.L3((e>>>16&255)+(x>>>16&255)-(w>>>16&255))<<16|A.L3((e>>>8&255)+(x>>>8&255)-(w>>>8&255))<<8|A.L3((e&255)+(x&255)-(w&255)))>>>0},
d5M(d,e,f){var x,w,v,u=d[f],t=d[f-1],s=A.zE(e,u)
u=s>>>24
x=s>>>16&255
w=s>>>8&255
v=s>>>0&255
return(A.L3(u+D.c.b4(u-(t>>>24),2))<<24|A.L3(x+D.c.b4(x-(t>>>16&255),2))<<16|A.L3(w+D.c.b4(w-(t>>>8&255),2))<<8|A.L3(v+D.c.b4(v-(t&255),2)))>>>0},
L2:function L2(d,e){this.a=d
this.b=e},
aDE:function aDE(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
bMK:function bMK(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
a8m:function a8m(){},
arS:function arS(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=$
_.r=1
_.x=_.w=$},
cCk(){var x=new Uint8Array(128),w=new Int16Array(128)
x=new A.ar9(x,w,new Int16Array(128))
x.a7X(0)
return x},
cYa(){var x,w=J.iN(5,y.x)
for(x=0;x<5;++x)w[x]=A.cCk()
return new A.a_L(w)},
ar9:function ar9(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$
_.f=_.e=0},
a_L:function a_L(d){this.a=d},
Tx:function Tx(d,e){this.a=d
this.b=e},
aE6:function aE6(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
arT:function arT(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
bML:function bML(){this.b=this.a=null},
cCn(d){return new A.a08(d.a,d.b,D.B.lu(d.c,0))},
bhM:function bhM(d,e){this.a=d
this.b=e},
a08:function a08(d,e,f){this.a=d
this.b=e
this.c=f},
hT(d,e,f,g,h,i,j,k,l,m,n,o,p){var x,w=new A.BR(null,null,null,d,k,h,g,0)
w.gl6().push(w)
w.c=j
if(e!=null)w.e=A.ZX(e)
x=!1
if(m==null)if(p)x=w.gdu()===C.fn||w.gdu()===C.h6||w.gdu()===C.h7||w.gdu()===C.a8||w.gdu()===C.ch
w.akW(o,i,f,l,x?w.aZg(f,n,l):m)
return w},
arl(d,e,f,g){var x,w,v,u=null,t=d.e
t=t==null?u:A.ZX(t)
x=d.c
x=x==null?u:A.cCn(x)
w=d.w
v=d.r
t=new A.BR(u,x,t,u,v,w,d.y,d.z)
t.aU1(d,e,f,g)
return t},
BQ(d,e,f){var x,w,v,u,t=null,s=d.a
s=s==null?t:s.r_(0,f)
x=d.e
x=x==null?t:A.ZX(x)
w=d.c
w=w==null?t:A.cCn(w)
v=d.w
u=d.r
s=new A.BR(s,w,x,t,u,v,d.y,d.z)
s.aU0(d,e,f)
return s},
aqg:function aqg(d,e){this.a=d
this.b=e},
BR:function BR(d,e,f,g,h,i,j,k){var _=this
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
bip:function bip(d,e){this.a=d
this.b=e},
bio:function bio(){},
lY:function lY(){},
cYH(d,e,f){return new A.Pm(new Uint16Array(d*e*f),d,e,f)},
Pm:function Pm(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
cYI(d,e,f){return new A.Pn(new Float32Array(d*e*f),d,e,f)},
Pn:function Pn(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a0c:function a0c(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a0d:function a0d(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a0e:function a0e(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a0f:function a0f(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
Po:function Po(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
Pp:function Pp(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
Pq:function Pq(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
cYJ(d,e,f){return new A.Pr(new Uint32Array(d*e*f),d,e,f)},
Pr:function Pr(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
Ps:function Ps(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
cCC(d,e,f){return new A.Pt(new Uint8Array(d*e*f),null,d,e,f)},
Pt:function Pt(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
arU:function arU(d,e){this.a=d
this.b=e},
bs9:function bs9(){},
awn:function awn(d,e,f){this.c=d
this.a=e
this.b=f},
awo:function awo(d,e,f){this.c=d
this.a=e
this.b=f},
awp:function awp(d,e,f){this.c=d
this.a=e
this.b=f},
awq:function awq(d,e,f){this.c=d
this.a=e
this.b=f},
awr:function awr(d,e,f){this.c=d
this.a=e
this.b=f},
aws:function aws(d,e,f){this.c=d
this.a=e
this.b=f},
awt:function awt(d,e,f){this.c=d
this.a=e
this.b=f},
a2S:function a2S(d,e,f){this.c=d
this.a=e
this.b=f},
cEr(d){return new A.uq(new Uint8Array(B.bU(d.c)),d.a,d.b)},
uq:function uq(d,e,f){this.c=d
this.a=e
this.b=f},
cte(d){return new A.IG(-1,0,-d.c,d)},
IG:function IG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ctf(d){return new A.IH(-1,0,-d.c,d)},
IH:function IH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ctg(d){return new A.II(-1,0,-d.c,d)},
II:function II(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cth(d){return new A.IJ(-1,0,-d.c,d)},
IJ:function IJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cti(d){return new A.IK(-1,0,-d.c,d)},
IK:function IK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ctj(d){return new A.IL(-1,0,-d.c,d)},
IL:function IL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ur(d,e,f,g,h){d.hm(0,e-1,f)
return new A.awH(d,e,e+g-1,f+h-1)},
awH:function awH(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g},
a37(d){return new A.IM(-1,0,0,-1,0,d)},
IM:function IM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ctk(d){return new A.IN(-1,0,-d.c,d)},
IN:function IN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a38(d){return new A.IO(-1,0,0,-2,0,d)},
IO:function IO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ctl(d){return new A.IP(-1,0,-d.c,d)},
IP:function IP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a39(d){return new A.IQ(-1,0,0,-(d.c<<2>>>0),d)},
IQ:function IQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bsz(d){return new A.IR(-1,0,-d.c,d)},
IR:function IR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fi:function fi(){},
dgT(d,e){switch(e.a){case 0:A.aVR(d)
break
case 1:A.dgX(d)
break
case 2:A.dgV(d)
break}return d},
dgX(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.gl6().length
for(x=y.g,w=0;w<h;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?i:t.a
if(r==null)r=0
q=s?i:t.b
if(q==null)q=0
p=D.c.b4(q,2)
t=d.a
if((t==null?i:t.geS())!=null)for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.ec(m,n,i)
if(l==null)l=new A.fi()
t=u.a
k=t==null?i:t.ec(m,o,i)
if(k==null)k=new A.fi()
j=l.ge6(l)
l.se6(0,k.ge6(k))
k.se6(0,j)}else for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.ec(m,n,i)
if(l==null)l=new A.fi()
t=u.a
k=t==null?i:t.ec(m,o,i)
if(k==null)k=new A.fi()
j=l.gaf(l)
l.saf(0,k.gaf(k))
k.saf(0,j)
j=l.gap()
l.sap(k.gap())
k.sap(j)
j=l.gau(l)
l.sau(0,k.gau(k))
k.sau(0,j)
j=l.gaE(l)
l.saE(0,k.gaE(k))
k.saE(0,j)}}return d},
aVR(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=d.gl6().length
for(x=y.g,w=0;w<g;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?h:t.a
if(r==null)r=0
q=s?h:t.b
if(q==null)q=0
p=D.c.b4(r,2)
t=d.a
if((t==null?h:t.geS())!=null)for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.ec(l,n,h)
if(k==null)k=new A.fi()
t=u.a
j=t==null?h:t.ec(m,n,h)
if(j==null)j=new A.fi()
i=k.ge6(k)
k.se6(0,j.ge6(j))
j.se6(0,i)}else for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.ec(l,n,h)
if(k==null)k=new A.fi()
t=u.a
j=t==null?h:t.ec(m,n,h)
if(j==null)j=new A.fi()
i=k.gaf(k)
k.saf(0,j.gaf(j))
j.saf(0,i)
i=k.gap()
k.sap(j.gap())
j.sap(i)
i=k.gau(k)
k.sau(0,j.gau(j))
j.sau(0,i)
i=k.gaE(k)
k.saE(0,j.gaE(j))
j.saE(0,i)}}return d},
dgV(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=d.gl6().length
for(x=y.g,w=0;w<f;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?g:t.a
if(r==null)r=0
q=s?g:t.b
if(q==null)q=0
p=D.c.b4(q,2)
if((s?g:t.geS())!=null)for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.ec(k,m,g)
if(j==null)j=new A.fi()
t=u.a
i=t==null?g:t.ec(l,o,g)
if(i==null)i=new A.fi()
h=j.ge6(j)
j.se6(0,i.ge6(i))
i.se6(0,h)}else for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.ec(k,m,g)
if(j==null)j=new A.fi()
t=u.a
i=t==null?g:t.ec(l,o,g)
if(i==null)i=new A.fi()
h=j.gaf(j)
j.saf(0,i.gaf(i))
i.saf(0,h)
h=j.gap()
j.sap(i.gap())
i.sap(h)
h=j.gau(j)
j.sau(0,i.gau(i))
i.sau(0,h)
h=j.gaE(j)
j.saE(0,i.gaE(i))
i.saE(0,h)}}return d},
bcv:function bcv(d,e){this.a=d
this.b=e},
c6(d){return new A.arr(d)},
arr:function arr(d){this.a=d},
cY(d,e,f,g){var x=J.a2(d),w=x.gu(d)
x=f==null?x.gu(d):g+f
return new A.lZ(d,g,Math.min(w,x),g,e)},
ca(d,e,f){var x=d.a,w=d.d,v=J.bA(x),u=e==null?d.c:d.d+f+e
return new A.lZ(x,d.b,Math.min(v,u),w+f,d.e)},
lZ:function lZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bqx:function bqx(d){var _=this
_.a=$
_.b=10
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=d
_.ax=_.at=$},
qo(d,e){return new A.aw8(d,new Uint8Array(e))},
aw8:function aw8(d,e){this.a=0
this.b=d
this.c=e},
bub:function bub(){},
nX:function nX(d,e){this.a=d
this.b=e},
bwM:function bwM(d,e){this.a=d
this.b=e},
bIp:function bIp(d,e,f){this.a=d
this.d=e
this.e=f},
cDV(d){return new Int8Array(d)},
d54(d){throw B.l(B.aF("Uint64List not supported on the web."))},
cYZ(d,e,f){return J.cqq(d,e,f)},
cHv(d,e){return J.oy(d,e,null)},
cXg(d){return J.aWz(d,0,null)},
cXh(d){return d.a8p(0,0,null)},
dhg(d){var x,w,v,u,t=d.gu(0)
for(x=1,w=0;t>0;){v=3800>t?t:3800
t-=v
for(;--v,v>=0;){u=d.b
u.toString
x+=u[d.c++]
w+=x}x=D.c.an(x,65521)
w=D.c.an(w,65521)}return(w<<16|x)>>>0},
xs(d,e){var x,w,v=J.a2(d),u=v.gu(d)
e^=4294967295
for(x=0;u>=8;){w=x+1
e=C.hb[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.hb[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.hb[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.hb[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.hb[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.hb[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.hb[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.hb[(e^v.i(d,w))&255]^e>>>8
u-=8}if(u>0)do{w=x+1
e=C.hb[(e^v.i(d,x))&255]^e>>>8
if(--u,u>0){x=w
continue}else break}while(!0)
return(e^4294967295)>>>0},
O4(d,e,f){var x=0,w=B.k(y.N),v,u,t,s,r
var $async$O4=B.f(function(g,h){if(g===1)return B.h(h,w)
while(true)switch(x){case 0:t="images/"+Date.now()+".jpg"
s=$.aWb()
r=s.as
r===$&&B.b()
x=3
return B.c(r.bB("public-files").QQ(t,d),$async$O4)
case 3:if(h.length===0)throw B.l(B.cK("Upload failed"))
u=r.bB("public-files").afy(t)
x=4
return B.c(s.bB("images").jt(0,B.x(["link",u,"occasion",e,"unit",f],y.N,y.cM)),$async$O4)
case 4:v=u
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$O4,w)},
cwj(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s,r,q
if(m==null)m=0
if(n==null)n=0
if(l==null)l=e.gd0(0)
if(k==null)k=e.gb5(0)
if(h==null)h=d.gd0(0)<e.gd0(0)?d.gd0(0):e.gd0(0)
if(g==null)g=d.gb5(0)<e.gb5(0)?d.gb5(0):e.gb5(0)
x=f===C.yp
if(!x&&d.grq())d=d.ayC(d.gqi())
w=k/g
v=l/h
u=y.p
t=J.iN(g,u)
for(s=0;s<g;++s)t[s]=n+D.d.C(s*w)
r=J.iN(h,u)
for(q=0;q<h;++q)r[q]=m+D.d.C(q*v)
if(x)A.daG(e,d,i,j,h,g,r,t,null,C.Gh)
else A.dai(e,d,i,j,h,g,r,t,f,!1,null,C.Gh)
return d},
daG(d,e,f,g,h,i,j,k,l,m){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.ec(t,s,x)
if(x==null)x=new A.fi()
e.AN(f+u,v,x)}},
dai(d,e,f,g,h,i,j,k,l,m,n,o){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.ec(t,s,x)
if(x==null)x=new A.fi()
A.dgv(e,f+u,v,x,l,!1,n,o)}},
dgv(a4,a5,a6,a7,a8,a9,b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
if(!a4.aCf(a5,a6))return a4
if(a8===C.yp||a4.grq())if(a4.aCf(a5,a6)){a4.o_(a5,a6).iJ(0,a7)
return a4}x=a7.giD()
w=a7.gio()
v=a7.gix()
u=a7.gu(a7)<4?1:a7.gfs()
if(u===0)return a4
t=a4.o_(a5,a6)
s=t.giD()
r=t.gio()
q=t.gix()
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
m=D.d.b2(u,0.01,1)
n=u<0
i=n?0:1
h=D.d.b2(x/m*i,0,0.99)
i=D.d.b2(u,0.01,1)
m=n?0:1
g=D.d.b2(w/i*m,0,0.99)
m=D.d.b2(u,0.01,1)
n=n?0:1
f=D.d.b2(v/m*n,0,0.99)
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
t.siD(x*u+s*p*a3)
t.sio(w*u+r*p*a3)
t.six(v*u+q*p*a3)
t.sfs(u+p*a3)
return a4},
dgJ(d,e,f,g,h,i,j){var x,w=D.d.b2(Math.min(g,h),0,d.gd0(0)-1),v=D.d.b2(Math.min(i,j),0,d.gb5(0)-1),u=D.d.b2(Math.max(g,h),0,d.gd0(0)-1),t=D.d.b2(Math.max(i,j),0,d.gb5(0)-1),s=d.a.qu(0,w,v,u-w+1,t-v+1)
for(x=s.a;s.q();)x.iJ(0,f)
return d},
cWW(a4,a5,a6,a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=b0<16384,a3=a6>a8?a8:a6
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
if(a2){A.a_3(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.a_3(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.a_3(f,d,v)
a1=v[0]
u&2&&B.C(a4)
a4[j]=a1
a4[i]=v[1]
A.a_3(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}else{A.a_4(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.a_4(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.a_4(f,d,v)
a1=v[0]
u&2&&B.C(a4)
a4[j]=a1
a4[i]=v[1]
A.a_4(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}}if(n){h=j+r
if(a2){A.a_3(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&B.C(a4)
a4[h]=a1}else{A.a_4(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&B.C(a4)
a4[h]=a1}u&2&&B.C(a4)
a4[j]=f}}if((a8&x)>>>0!==0){k=l+m
for(j=l;j<=k;j+=o){i=j+p
if(a2){A.a_3(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&B.C(a4)
a4[i]=n}else{A.a_4(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&B.C(a4)
a4[i]=n}u&2&&B.C(a4)
a4[j]=f}}w=x>>>1}},
a_3(d,e,f){var x,w,v,u,t=$.np()
t.$flags&2&&B.C(t)
t[0]=d
x=$.ow()
w=x[0]
t[0]=e
v=x[0]
u=w+(v&1)+D.c.S(v,1)
f[0]=u
f[1]=u-v},
a_4(d,e,f){var x=d-D.c.S(e,1)&65535
f[1]=x
f[0]=e+x-32768&65535},
coh(d){var x,w,v,u,t,s,r,q,p,o,n=null
if(A.cD6().QU(d))return new A.as0()
x=new A.awV(A.cCU())
if(x.I9(d))return x
w=new A.bfp()
w.f=A.cY(d,!1,n,0)
w.a=new A.aqq(B.a([],y.b))
if(w.an7())return w
v=new A.bML()
if(v.I9(d))return v
u=new A.bGx()
if(u.ars(A.cY(d,!1,n,0))!=null)return u
if(A.cES(d).c===943870035)return new A.bu1()
if(A.cWV(d))return new A.bbm()
if(A.cqV(A.cY(d,!1,n,0)))return new A.ajL(!1)
t=new A.bFR()
s=A.cY(d,!1,n,0)
r=t.a=new A.aBW(C.wZ)
r.vo(0,s)
if(r.aCw())return t
q=new A.bhO()
r=A.cY(d,!1,n,0)
q.a=r
r=A.cCo(r)
q.b=r
if(r!=null)return q
p=new A.bu6()
if(p.oE(d)!=null)return p
o=new A.bt4(B.a([],y.T))
if(o.I9(d))return o
return n},
cLu(d){var x=A.coh(d)
return x==null?null:x.mX(0,d,null)},
dj4(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if($.cvH==null){x=$.cvH=new Uint8Array(768)
for(w=-256;w<0;++w)x[256+w]=0
for(w=0;w<256;++w)x[256+w]=w
for(w=256;w<512;++w)x[256+w]=255}for(x=a6.$flags|0,w=0;w<64;++w){v=a4[w]
u=a3[w]
x&2&&B.C(a6)
a6[w]=v*u}for(t=0,w=0;w<8;++w,t+=8){v=1+t
u=a6[v]
if(u===0&&a6[2+t]===0&&a6[3+t]===0&&a6[4+t]===0&&a6[5+t]===0&&a6[6+t]===0&&a6[7+t]===0){v=D.c.S(5793*a6[t]+512,10)
s=(v&2147483647)-((v&2147483648)>>>0)
x&2&&B.C(a6)
a6[t]=s
a6[t+1]=s
a6[t+2]=s
a6[t+3]=s
a6[t+4]=s
a6[t+5]=s
a6[t+6]=s
a6[t+7]=s
continue}r=D.c.S(5793*a6[t]+128,8)
q=(r&2147483647)-((r&2147483648)>>>0)
r=4+t
p=D.c.S(5793*a6[r]+128,8)
o=(p&2147483647)-((p&2147483648)>>>0)
p=2+t
n=a6[p]
m=6+t
l=a6[m]
k=7+t
j=a6[k]
i=D.c.S(2896*(u-j)+128,8)
h=(i&2147483647)-((i&2147483648)>>>0)
j=D.c.S(2896*(u+j)+128,8)
g=(j&2147483647)-((j&2147483648)>>>0)
j=3+t
u=a6[j]<<4
f=(u&2147483647)-((u&2147483648)>>>0)
u=5+t
i=a6[u]<<4
e=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.S(q-o+1,1)
s=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.S(q+o+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.S(n*3784+l*1567+128,8)
i=(i&2147483647)-((i&2147483648)>>>0)
d=D.c.S(n*1567-l*3784+128,8)
n=(d&2147483647)-((d&2147483648)>>>0)
d=D.c.S(h-e+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.c.S(h+e+1,1)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.S(g+f+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.c.S(g-f+1,1)
f=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.c.S(q-i+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
i=D.c.S(q+i+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.S(s-n+1,1)
i=(i&2147483647)-((i&2147483648)>>>0)
a2=D.c.S(s+n+1,1)
o=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.c.S(h*2276+a0*3406+2048,12)
s=(a2&2147483647)-((a2&2147483648)>>>0)
a0=D.c.S(h*3406-a0*2276+2048,12)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.S(f*799+d*4017+2048,12)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
d=D.c.S(f*4017-d*799+2048,12)
f=(d&2147483647)-((d&2147483648)>>>0)
x&2&&B.C(a6)
a6[t]=q+s
a6[k]=q-s
a6[v]=o+a0
a6[m]=o-a0
a6[p]=i+f
a6[u]=i-f
a6[j]=a1+h
a6[r]=a1-h}for(w=0;w<8;++w){v=8+w
u=a6[v]
if(u===0&&a6[16+w]===0&&a6[24+w]===0&&a6[32+w]===0&&a6[40+w]===0&&a6[48+w]===0&&a6[56+w]===0){u=D.c.S(5793*a6[w]+8192,14)
s=(u&2147483647)-((u&2147483648)>>>0)
x&2&&B.C(a6)
a6[w]=s
a6[v]=s
a6[16+w]=s
a6[24+w]=s
a6[32+w]=s
a6[40+w]=s
a6[48+w]=s
a6[56+w]=s
continue}r=D.c.S(5793*a6[w]+2048,12)
q=(r&2147483647)-((r&2147483648)>>>0)
r=32+w
p=D.c.S(5793*a6[r]+2048,12)
o=(p&2147483647)-((p&2147483648)>>>0)
p=16+w
n=a6[p]
m=48+w
l=a6[m]
k=56+w
j=a6[k]
i=D.c.S(2896*(u-j)+2048,12)
h=(i&2147483647)-((i&2147483648)>>>0)
j=D.c.S(2896*(u+j)+2048,12)
g=(j&2147483647)-((j&2147483648)>>>0)
j=24+w
f=a6[j]
u=40+w
e=a6[u]
i=D.c.S(q-o+1,1)
s=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.S(q+o+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.S(n*3784+l*1567+2048,12)
i=(i&2147483647)-((i&2147483648)>>>0)
d=D.c.S(n*1567-l*3784+2048,12)
n=(d&2147483647)-((d&2147483648)>>>0)
d=D.c.S(h-e+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.c.S(h+e+1,1)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.S(g+f+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.c.S(g-f+1,1)
f=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.c.S(q-i+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
i=D.c.S(q+i+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.S(s-n+1,1)
i=(i&2147483647)-((i&2147483648)>>>0)
a2=D.c.S(s+n+1,1)
o=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.c.S(h*2276+a0*3406+2048,12)
s=(a2&2147483647)-((a2&2147483648)>>>0)
a0=D.c.S(h*3406-a0*2276+2048,12)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.S(f*799+d*4017+2048,12)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
d=D.c.S(f*4017-d*799+2048,12)
f=(d&2147483647)-((d&2147483648)>>>0)
x&2&&B.C(a6)
a6[w]=q+s
a6[k]=q-s
a6[v]=o+a0
a6[m]=o-a0
a6[p]=i+f
a6[u]=i-f
a6[j]=a1+h
a6[r]=a1-h}for(x=$.cvH,v=a5.$flags|0,w=0;w<64;++w){x.toString
u=D.c.S(a6[w]+8,4)
u=x[384+((u&2147483647)-((u&2147483648)>>>0))]
v&2&&B.C(a5)
a5[w]=u}},
dhn(d9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=null,d7="ifd0",d8=d9.r
if(d8.i(0,d7).a.a7(0,274)){x=d8.i(0,d7).gij(0)
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
r=A.hT(d6,d6,C.a8,0,C.bm,s,d6,0,3,d6,C.a8,t,!1)
r.e=A.ZX(d8)
r.gwP().i(0,d7).sij(0,d6)
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
e=n[D.c.hA(g,l)]
f=q-g
d=0
while(!0){a0=d9.d.e
a0.toString
if(!(d<a0))break
a1=e[D.c.hA(d,m)]
if(h){a0=r.a
if(a0!=null)a0.fg(p-d,g,a1,a1,a1)}else if(i){a0=r.a
if(a0!=null)a0.fg(p-d,f,a1,a1,a1)}else if(j){a0=r.a
if(a0!=null)a0.fg(d,f,a1,a1,a1)}else if(k){a0=r.a
if(a0!=null)a0.fg(g,d,a1,a1,a1)}else if(v){a0=r.a
if(a0!=null)a0.fg(f,d,a1,a1,a1)}else if(x){a0=r.a
if(a0!=null)a0.fg(f,p-d,a1,a1,a1)}else{a0=r.a
if(d8){if(a0!=null)a0.fg(g,p-d,a1,a1,a1)}else if(a0!=null)a0.fg(d,g,a1,a1,a1)}++d}++g}break
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
b1=D.c.hA(g,l)
b2=D.c.hA(g,a8)
b3=D.c.hA(g,b0)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
f=q-g
d=0
while(!0){a0=d9.d.e
a0.toString
if(!(d<a0))break
b6=D.c.hA(d,m)
b7=D.c.hA(d,a7)
b8=D.c.hA(d,a9)
a1=e[b6]<<8>>>0
b9=b4[b7]-128
c0=b5[b8]-128
a0=D.c.S(a1+359*c0+128,8)
c1=D.c.b2((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.c.S(a1-88*b9-183*c0+128,8)
c2=D.c.b2((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.c.S(a1+454*b9+128,8)
c3=D.c.b2((a0&2147483647)-((a0&2147483648)>>>0),0,255)
if(h){a0=r.a
if(a0!=null)a0.fg(p-d,g,c1,c2,c3)}else if(i){a0=r.a
if(a0!=null)a0.fg(p-d,f,c1,c2,c3)}else if(j){a0=r.a
if(a0!=null)a0.fg(d,f,c1,c2,c3)}else if(k){a0=r.a
if(a0!=null)a0.fg(g,d,c1,c2,c3)}else if(v){a0=r.a
if(a0!=null)a0.fg(f,d,c1,c2,c3)}else if(x){a0=r.a
if(a0!=null)a0.fg(f,p-d,c1,c2,c3)}else{a0=r.a
if(d8){if(a0!=null)a0.fg(g,p-d,c1,c2,c3)}else if(a0!=null)a0.fg(d,g,c1,c2,c3)}++d}++g}break
case 4:x=d9.c
if(x==null)throw B.l(A.c6("Unsupported color mode (4 components)"))
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
b1=D.c.hA(g,l)
b2=D.c.hA(g,a8)
b3=D.c.hA(g,b0)
c8=D.c.hA(g,c7)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
c9=c5[c8]
a0=q-g
d=0
while(!0){d0=d9.d.e
d0.toString
if(!(d<d0))break
b6=D.c.hA(d,m)
b7=D.c.hA(d,a7)
b8=D.c.hA(d,a9)
d1=D.c.hA(d,c6)
if(x){d2=e[b6]
d3=b4[b7]
a1=b5[b8]
d4=c9[d1]}else{a1=e[b6]
b9=b4[b7]
c0=b5[b8]
d4=c9[d1]
d0=c0-128
d2=255-D.c.b2(D.d.C(a1+1.402*d0),0,255)
d5=b9-128
d3=255-D.d.C(D.d.b2(a1-0.3441363*d5-0.71413636*d0,0,255))
a1=255-D.c.b2(D.d.C(a1+1.772*d5),0,255)}d0=D.c.S(d2*d4,8)
c1=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.c.S(d3*d4,8)
c2=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.c.S(a1*d4,8)
c3=(d0&2147483647)-((d0&2147483648)>>>0)
if(f){d0=r.a
if(d0!=null)d0.fg(p-d,g,c1,c2,c3)}else if(h){d0=r.a
if(d0!=null)d0.fg(p-d,a0,c1,c2,c3)}else if(i){d0=r.a
if(d0!=null)d0.fg(d,a0,c1,c2,c3)}else if(j){d0=r.a
if(d0!=null)d0.fg(g,d,c1,c2,c3)}else if(k){d0=r.a
if(d0!=null)d0.fg(a0,d,c1,c2,c3)}else if(v){d0=r.a
if(d0!=null)d0.fg(a0,p-d,c1,c2,c3)}else{d0=r.a
if(d8){if(d0!=null)d0.fg(g,p-d,c1,c2,c3)}else if(d0!=null)d0.fg(d,g,c1,c2,c3)}++d}++g}break
default:throw B.l(A.c6("Unsupported color mode"))}return r},
d66(d,e,f,g,h,i){A.d63(i,d,e,f,g,h,!0,i)},
d67(d,e,f,g,h,i){A.d64(i,d,e,f,g,h,!0,i)},
d65(d,e,f,g,h,i){A.d62(i,d,e,f,g,h,!0,i)},
Tw(d,e,f,g,h){var x,w,v
for(x=0;x<g;++x){w=J.v(d.a,d.d+x)
v=J.v(e.a,e.d+x)
J.bV(f.a,f.d+x,w+v)}},
d63(d,e,f,g,h,i,j,k){var x,w,v=null,u=h*g,t=h+i,s=A.cY(d,!1,v,u),r=A.cY(d,!1,v,u),q=A.ca(r,v,0)
if(h===0){r.m(0,0,J.v(s.a,s.d))
A.Tw(A.ca(s,v,1),q,A.ca(r,v,1),e-1,!0)
q.d+=g
s.d+=g
r.d+=g
h=1}for(x=-g,w=e-1;h<t;){A.Tw(s,A.ca(q,v,x),r,1,!0)
A.Tw(A.ca(s,v,1),q,A.ca(r,v,1),w,!0);++h
q.d+=g
s.d+=g
r.d+=g}},
d64(d,e,f,g,h,i,j,k){var x=null,w=h*g,v=h+i,u=A.cY(d,!1,x,w),t=A.cY(k,!1,x,w),s=A.ca(t,x,0)
if(h===0){t.m(0,0,J.v(u.a,u.d))
A.Tw(A.ca(u,x,1),s,A.ca(t,x,1),e-1,!0)
u.d+=g
t.d+=g
h=1}else s.d-=g
for(;h<v;){A.Tw(u,s,t,e,!0);++h
s.d+=g
u.d+=g
t.d+=g}},
d62(d,e,f,g,h,i,j,k){var x,w,v,u,t,s=null,r=h*g,q=h+i,p=A.cY(d,!1,s,r),o=A.cY(k,!1,s,r),n=A.ca(o,s,0)
if(h===0){o.m(0,0,J.v(p.a,p.d))
A.Tw(A.ca(p,s,1),n,A.ca(o,s,1),e-1,!0)
n.d+=g
p.d+=g
o.d+=g
h=1}for(x=-g;h<q;){A.Tw(p,A.ca(n,s,x),o,1,!0)
for(w=1;w<e;++w){v=w-g
u=J.v(n.a,n.d+(w-1))+J.v(n.a,n.d+v)-J.v(n.a,n.d+(v-1))
if((u&4294967040)>>>0===0)t=u
else t=u<0?0:255
v=J.v(p.a,p.d+w)
J.bV(o.a,o.d+w,v+t)}++h
n.d+=g
p.d+=g
o.d+=g}},
de1(d){var x="ifd0",w=A.BQ(d,!1,!1)
if(!d.gwP().i(0,x).a.a7(0,274)||d.gwP().i(0,x).gij(0)===1)return w
w.e=A.ZX(d.gwP())
w.gwP().i(0,x).sij(0,null)
switch(d.gwP().i(0,x).gij(0)){case 2:return A.aVR(w)
case 3:return A.dgT(w,C.akV)
case 4:return A.aVR(A.aVK(w,180))
case 5:return A.aVR(A.aVK(w,90))
case 6:return A.aVK(w,90)
case 7:return A.aVR(A.aVK(w,-90))
case 8:return A.aVK(w,-90)}return w},
deL(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null
a1.grq()
if(a1.gwP().i(0,"ifd0").a.a7(0,274)&&a1.gwP().i(0,"ifd0").gij(0)!==1)a1=A.de1(a1)
x=D.d.aV(a2*(a1.gb5(0)/a1.gd0(0)))
if(a2<=0)a2=D.d.aV(x*(a1.gd0(0)/a1.gb5(0)))
if(a2===a1.gd0(0)&&x===a1.gb5(0))return A.BQ(a1,!1,!1)
w=new Int32Array(a2)
v=a1.gd0(0)/a2
for(u=0;u<a2;++u)w[u]=D.d.C(u*v)
t=new Int32Array(x)
s=a1.gb5(0)/x
for(r=0;r<x;++r)t[r]=D.d.C(r*s)
q=a1.gl6().length
for(p=y.g,o=a0,n=0;n<q;++n){m=a1.x
l=(m===$?a1.x=B.a([],p):m)[n]
k=A.arl(l,x,!0,a2)
j=o==null
if(!j)o.ny(k)
if(j)o=k
j=l.a
i=j==null
h=i?a0:j.b
s=(h==null?0:h)/x
if((i?a0:j.geS())!=null)for(r=0;r<x;++r){g=D.d.C(r*s)
for(u=0;u<a2;++u){j=w[u]
i=l.a
if(i==null)j=a0
else{j=i.o_(j,g)
j=D.d.C(j.ge6(j))}if(j==null)j=0
i=k.a
if(i!=null)i.mG(u,r,j)}}else{f=l.ko(0,0)
for(r=0;r<x;++r)for(u=0;u<a2;++u){j=w[u]
i=t[r]
h=l.a
if(h!=null)h.ec(j,i,f)
j=f.gaf(f)
i=f.gap()
h=f.gau(f)
e=f.gaE(f)
d=k.a
if(d!=null)d.kp(u,r,j,i,h,e)}}}o.toString
return o},
aVK(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=D.c.an(a8,360)
a7.grq()
if(D.c.an(a6,90)===0)switch(D.c.b4(a6,90)){case 1:return A.dcP(a7)
case 2:return A.dcN(a7)
case 3:return A.dcO(a7)
default:return A.BQ(a7,!1,!1)}x=a6*3.141592653589793/180
w=Math.cos(x)
v=Math.sin(x)
u=a7.gd0(0)
t=a7.gd0(0)
s=a7.gb5(0)
r=a7.gb5(0)
q=0.5*a7.gd0(0)
p=0.5*a7.gb5(0)
s=Math.abs(u*w)+Math.abs(s*v)
o=0.5*s
r=Math.abs(t*v)+Math.abs(r*w)
n=0.5*r
m=a7.gl6().length
for(u=y.g,l=a5,k=0;k<m;++k){j=a7.x
i=(j===$?a7.x=B.a([],u):j)[k]
t=l==null
h=t?a5:l.WT()
if(h==null){g=D.d.C(s)
h=A.arl(a7,D.d.C(r),!0,g)}if(t)l=h
for(t=h.a,t=t.ga5(t);t.q();){f=t.gL(t)
e=f.gnd(f)
d=f.gnY(f)
g=e-o
a0=d-n
a1=q+g*w+a0*v
a2=p-g*v+a0*w
g=!1
if(a1>=0)if(a2>=0){a0=i.a
a3=a0==null
a4=a3?a5:a0.a
if(a1<(a4==null?0:a4)){g=a3?a5:a0.b
g=a2<(g==null?0:g)}}if(g)h.AN(e,d,i.aIS(a1,a2,C.aoi))}}l.toString
return l},
dcP(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gl6(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.Q)(x),++u){t=x[u]
s=v==null
r=s?k:v.WT()
if(r==null){q=t.a
p=q==null
o=p?k:q.b
if(o==null)o=0
q=p?k:q.a
r=A.arl(t,q==null?0:q,!0,o)}if(s)v=r
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
s=s==null?k:s.ec(m,n-l,k)
r.AN(l,m,s==null?new A.fi():s);++l}++m}}v.toString
return v},
dcN(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gl6(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.Q)(x),++u){t=x[u]
s=t.a
r=s==null
q=r?k:s.a
p=(q==null?0:q)-1
s=r?k:s.b
o=(s==null?0:s)-1
s=v==null
n=s?k:v.WT()
if(n==null)n=A.BQ(t,!0,!0)
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
r=r==null?k:r.ec(p-l,s,k)
n.AN(l,m,r==null?new A.fi():r);++l}++m}}v.toString
return v},
dcO(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gl6(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.Q)(x),++u){t=x[u]
s=d.a
s=s==null?k:s.a
r=(s==null?0:s)-1
s=v==null
q=s?k:v.WT()
if(q==null){p=t.a
o=p==null
n=o?k:p.b
if(n==null)n=0
p=o?k:p.a
q=A.arl(t,p==null?0:p,!0,n)}if(s)v=q
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
p=p==null?k:p.ec(s,l,k)
q.AN(l,m,p==null?new A.fi():p);++l}++m}}v.toString
return v},
cnP(d){var x
d=(d&-d)>>>0
x=d!==0?31:32
if((d&65535)!==0)x-=16
if((d&16711935)!==0)x-=8
if((d&252645135)!==0)x-=4
if((d&858993459)!==0)x-=2
return(d&1431655765)!==0?x-1:x},
dk6(d){$.cxV().m(0,0,d)
return $.cQ7().i(0,0)},
cMr(d,e,f,g){return(D.c.b2(d,0,255)|D.c.b2(e,0,255)<<8|D.c.b2(f,0,255)<<16|D.c.b2(g,0,255)<<24)>>>0},
vi(d,e,f){var x,w,v,u,t,s=e.gu(e),r=e.gdu(),q=d.geS(),p=q==null?null:q.gdu()
if(p==null)p=d.gdu()
x=d.gu(d)
if(s===1){w=d.gu(d)>2?d.gjy():d.i(0,0)
e.m(0,0,A.aVI(B.h5(d.i(0,0))?D.d.fv(w):w,p,r))}else if(s<=x)for(v=0;v<s;++v)e.m(0,v,A.aVI(d.i(0,v),p,r))
else if(x===2){u=A.aVI(d.i(0,0),p,r)
if(s===3){e.m(0,0,u)
e.m(0,1,u)
e.m(0,2,u)}else{f=A.aVI(d.i(0,1),p,r)
e.m(0,0,u)
e.m(0,1,u)
e.m(0,2,u)
e.m(0,3,f)}}else{for(v=0;v<x;++v)e.m(0,v,A.aVI(d.i(0,v),p,r))
t=x===1?e.i(0,0):0
for(v=x;v<s;++v)e.m(0,v,v===3?f:t)}return e},
pH(d,e,f,g,h){var x,w,v=d.geS(),u=v==null?null:v.gdu()
if(u==null)u=d.gdu()
v=h==null
x=v?null:h.gdu()
f=x==null?f:x
if(f==null)f=d.gdu()
x=v?null:h.gu(h)
g=x==null?g:x
if(g==null)g=d.gu(d)
if(e==null)e=0
if(f===u&&g===d.gu(d)){if(v)return d.dT(0)
h.iJ(0,d)
return h}switch(f.a){case 3:if(v)w=new A.xX(new Uint8Array(g))
else w=h
return A.vi(d,w,e)
case 0:return A.vi(d,v?new A.Nv(g,0):h,e)
case 1:return A.vi(d,v?new A.Nx(g,0):h,e)
case 2:if(v){v=g<3?1:2
w=new A.Nz(g,new Uint8Array(v))}else w=h
return A.vi(d,w,e)
case 4:if(v)w=new A.Nw(new Uint16Array(g))
else w=h
return A.vi(d,w,e)
case 5:if(v)w=new A.Ny(new Uint32Array(g))
else w=h
return A.vi(d,w,e)
case 6:if(v)w=new A.Ns(new Int8Array(g))
else w=h
return A.vi(d,w,e)
case 7:if(v)w=new A.Nq(new Int16Array(g))
else w=h
return A.vi(d,w,e)
case 8:if(v)w=new A.Nr(new Int32Array(g))
else w=h
return A.vi(d,w,e)
case 9:if(v)w=new A.Nn(new Uint16Array(g))
else w=h
return A.vi(d,w,e)
case 10:if(v)w=new A.No(new Float32Array(g))
else w=h
return A.vi(d,w,e)
case 11:if(v)w=new A.Np(new Float64Array(g))
else w=h
return A.vi(d,w,e)}},
jf(d){return 0.299*d.gaf(d)+0.587*d.gap()+0.114*d.gau(d)},
cL9(d,e,f,g,h){var x=1-g/255
h[0]=D.d.aV(255*(1-d/255)*x)
h[1]=D.d.aV(255*(1-e/255)*x)
h[2]=D.d.aV(255*(1-f/255)*x)},
fY(d){var x,w,v,u=$.cxU()
u.$flags&2&&B.C(u)
u[0]=d
x=$.cQ6()[0]
if(d===0)return x>>>16
if($.hR==null)A.iI()
w=$.cBA.cp()[x>>>23&511]
if(w!==0){v=x&8388607
return w+(v+4095+(v>>>13&1)>>>13)}return A.cXe(x)},
cXe(d){var x,w,v=d>>>16&32768,u=(d>>>23&255)-112,t=d&8388607
if(u<=0){if(u<-10)return v
t|=8388608
x=14-u
return(v|D.c.o2(t+(D.c.eU(1,x-1)-1)+(D.c.h1(t,x)&1),x))>>>0}else if(u===143)if(t===0)return v|31744
else{t=t>>>13
w=t===0?1:0
return v|t|w|31744}else{t=t+4095+(t>>>13&1)
if((t&8388608)!==0){++u
t=0}if(u>30)return v|31744
return(v|u<<10|t>>>13)>>>0}},
iI(){var x,w,v,u,t=$.hR
if(t!=null)return t
x=new Uint32Array(65536)
$.hR=J.aWz(D.br.gaj(x),0,null)
t=new Uint16Array(512)
$.cBA.b=t
for(w=0;w<256;++w){v=(w&255)-112
if(v<=0||v>=30){t[w]=0
t[(w|256)>>>0]=0}else{u=v<<10>>>0
t[w]=u
t[(w|256)>>>0]=(u|32768)>>>0}}for(w=0;w<65536;++w)x[w]=A.cXf(w)
t=$.hR
t.toString
return t},
cXf(d){var x,w=d>>>15&1,v=d>>>10&31,u=d&1023
if(v===0)if(u===0)return w<<31>>>0
else{for(;(u&1024)===0;){u=u<<1;--v}++v
u&=4294966271}else if(v===31){x=w<<31
if(u===0)return(x|2139095040)>>>0
else return(x|u<<13|2139095040)>>>0}return(w<<31|v+112<<23|u<<13)>>>0}},C
J=c[1]
B=c[0]
D=c[2]
E=c[164]
A=a.updateHolder(c[56],A)
C=c[358]
A.a05.prototype={
a2C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.length
for(x=0;x<k;++x){w=d[x]
if(w>l.b)l.b=w
if(w<l.c)l.c=w}w=l.b
v=D.c.eU(1,w)
u=new Uint32Array(v)
l.a=u
for(t=1,s=0,r=2;t<=w;){for(q=t<<16,x=0;x<k;++x)if(d[x]===t){for(p=s,o=0,n=0;n<t;++n){o=(o<<1|p&1)>>>0
p=p>>>1}for(m=(q|x)>>>0,n=o;n<v;n+=r)u[n]=m;++s}++t
s=s<<1>>>0
r=r<<1>>>0}}}
A.bNv.prototype={}
A.cls.prototype={
bxl(d,e,f,g){var x,w,v,u,t,s=null
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
if(D.c.an(u*256+t,31)!==0)return!1
if((t>>>5&1)!==0){d.a3()
return!1}if(s!=null)e.m7(s)
x=new A.a05()
x.a2C(C.aD7)
w=new A.a05()
w.a2C(C.atc)
v=new A.awa(new Uint8Array(32768),C.oB)
new A.biD(d,v,x,w).baA()
s=J.df(D.B.gaj(v.c),v.c.byteOffset,v.b)
d.a3()}if(s!=null)e.m7(s)
return!0}}
A.bNw.prototype={}
A.clt.prototype={
aAd(d,e){var x=A.cEk(C.m5,32768)
this.byX(A.biU(d,C.oB,null,null),x,e,!1,null)
return x.af5()},
byX(d,e,f,g,h){var x,w,v,u,t,s,r,q,p
e.a=C.m5
x=(D.c.b2(15,0,15)-8<<4|8)>>>0
e.b1(x)
w=x*256
for(v=0;u=(v|0)>>>0,D.c.an(w+u,31)!==0;)++v
e.b1(u)
t=d.c
s=A.dhg(d)
d.c=t
u=f==null?6:f
A.cVz(d,u,e,15)
u=s&255
r=s>>>24&255
q=s>>>16&255
p=s>>>8&255
if(e.a===C.m5){e.b1(r)
e.b1(q)
e.b1(p)
e.b1(u)}else{e.b1(u)
e.b1(p)
e.b1(q)
e.b1(r)}}}
A.TZ.prototype={
J(){return"_DeflateFlushMode."+this.b}}
A.b6K.prototype={
b_s(d,e){var x,w,v,u,t=this,s=!0
if(e>=9)if(e<=15)s=d>9
if(s)return!1
x=t.b2N(d)
if(x==null)return!1
$.vI.b=x
s=new Uint16Array(1146)
t.p1=s
w=new Uint16Array(122)
t.p2=w
v=new Uint16Array(78)
t.p3=v
t.as=e
u=t.Q=D.c.en(1,e)
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
t.c0=16384
t.xr=49152
t.k4=d
t.w=t.x=t.ok=0
t.c=113
t.d=0
u=t.p4
u.a=s
u.c=$.cPQ()
u=t.R8
u.a=w
u.c=$.cPP()
u=t.RG
u.a=v
u.c=$.cPO()
t.E=t.bx=0
t.bo=8
t.aoR()
t.bbN()
return!0},
b_r(d){var x,w,v,u,t=this,s=t.x
s===$&&B.b()
if(s!==0)t.a3I()
s=t.a
x=s.c
s=s.d
s===$&&B.b()
w=!0
if(x>=s){s=t.k2
s===$&&B.b()
if(s===0)s=d!==C.xk&&t.c!==666
else s=w}else s=w
if(s){switch($.vI.cp().e){case 0:v=t.b_v(d)
break
case 1:v=t.b_t(d)
break
case 2:v=t.b_u(d)
break
default:v=-1
break}s=v===2
if(s||v===3)t.c=666
if(v===0||s)return 0
if(v===1){if(d===C.bb_){t.lx(2,3)
t.G0(256,C.rJ)
t.ax3()
s=t.bo
s===$&&B.b()
x=t.E
x===$&&B.b()
if(1+s+10-x<9){t.lx(2,3)
t.G0(256,C.rJ)
t.ax3()}t.bo=7}else{t.aui(0,0,!1)
if(d===C.bb0){s=t.cy
s===$&&B.b()
x=t.CW
u=0
for(;u<s;++u){x===$&&B.b()
x.$flags&2&&B.C(x)
x[u]=0}}}t.a3I()}}if(d!==C.oh)return 0
return 1},
bbN(){var x,w,v=this,u=v.Q
u===$&&B.b()
v.ay=2*u
u=v.CW
u===$&&B.b()
x=v.cy
x===$&&B.b();--x
u.$flags&2&&B.C(u)
u[x]=0
for(w=0;w<x;++w)u[w]=0
v.k2=v.fr=v.id=0
v.fx=v.k3=2
v.cx=v.go=0},
aoR(){var x,w,v,u=this
for(x=u.p1,w=0;w<286;++w){x===$&&B.b()
x.$flags&2&&B.C(x)
x[w*2]=0}for(v=u.p2,w=0;w<30;++w){v===$&&B.b()
v.$flags&2&&B.C(v)
v[w*2]=0}for(v=u.p3,w=0;w<19;++w){v===$&&B.b()
v.$flags&2&&B.C(v)
v[w*2]=0}x===$&&B.b()
x.$flags&2&&B.C(x)
x[512]=1
u.y2=u.bb=u.bP=u.aK=0},
a63(d,e){var x,w,v=this.ry,u=v[e],t=e<<1>>>0,s=v.$flags|0,r=this.x2
while(!0){x=this.to
x===$&&B.b()
if(!(t<=x))break
if(t<x&&A.cAq(d,v[t+1],v[t],r))++t
if(A.cAq(d,u,v[t],r))break
x=v[t]
s&2&&B.C(v)
v[e]=x
w=t<<1>>>0
e=t
t=w}s&2&&B.C(v)
v[e]=u},
asf(d,e){var x,w,v,u,t,s,r,q,p,o,n=d[1]
if(n===0){x=138
w=3}else{x=7
w=4}d.$flags&2&&B.C(d)
d[(e+1)*2+1]=65535
for(v=this.p3,u=0,t=-1,s=0;u<=e;n=r){++u
r=d[u*2+1];++s
if(s<x&&n===r)continue
else{q=3
if(s<w){v===$&&B.b()
p=n*2
o=v[p]
v.$flags&2&&B.C(v)
v[p]=o+s}else if(n!==0){if(n!==t){v===$&&B.b()
p=n*2
o=v[p]
v.$flags&2&&B.C(v)
v[p]=o+1}v===$&&B.b()
p=v[32]
v.$flags&2&&B.C(v)
v[32]=p+1}else if(s<=10){v===$&&B.b()
p=v[34]
v.$flags&2&&B.C(v)
v[34]=p+1}else{v===$&&B.b()
p=v[36]
v.$flags&2&&B.C(v)
v[36]=p+1}}if(r===0){w=q
x=138}else if(n===r){w=q
x=6}else{x=7
w=4}t=n
s=0}},
aWn(){var x,w,v=this,u=v.p1
u===$&&B.b()
x=v.p4.b
x===$&&B.b()
v.asf(u,x)
x=v.p2
x===$&&B.b()
u=v.R8.b
u===$&&B.b()
v.asf(x,u)
v.RG.a33(v)
for(u=v.p3,w=18;w>=3;--w){u===$&&B.b()
if(u[C.Bu[w]*2+1]!==0)break}u=v.bP
u===$&&B.b()
v.bP=u+(3*(w+1)+5+5+4)
return w},
bkX(d,e,f){var x,w,v,u=this
u.lx(d-257,5)
x=e-1
u.lx(x,5)
u.lx(f-4,4)
for(w=0;w<f;++w){v=u.p3
v===$&&B.b()
u.lx(v[C.Bu[w]*2+1],3)}v=u.p1
v===$&&B.b()
u.asO(v,d-1)
v=u.p2
v===$&&B.b()
u.asO(v,x)},
asO(d,e){var x,w,v,u,t,s,r,q,p,o,n=this,m=d[1]
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
n.lx(o[q]&65535,o[p]&65535)}while(--t,t!==0)}else if(m!==0){if(m!==u){q=n.p3
q===$&&B.b()
p=m*2
n.lx(q[p]&65535,q[p+1]&65535);--t}q=n.p3
q===$&&B.b()
n.lx(q[32]&65535,q[33]&65535)
n.lx(t-3,2)}else{q=n.p3
if(t<=10){q===$&&B.b()
n.lx(q[34]&65535,q[35]&65535)
n.lx(t-3,3)}else{q===$&&B.b()
n.lx(q[36]&65535,q[37]&65535)
n.lx(t-11,7)}}}if(s===0){w=r
x=138}else if(m===s){w=r
x=6}else{x=7
w=4}u=m
t=0}},
bhY(d,e,f){var x,w,v=this
if(f===0)return
x=v.f
x===$&&B.b()
w=v.x
w===$&&B.b()
D.B.e3(x,w,w+f,d,e)
v.x=v.x+f},
qI(d){var x,w=this.f
w===$&&B.b()
x=this.x
x===$&&B.b()
this.x=x+1
w.$flags&2&&B.C(w)
w[x]=d},
G0(d,e){var x=d*2
this.lx(e[x]&65535,e[x+1]&65535)},
lx(d,e){var x,w=this,v=w.E
v===$&&B.b()
x=w.bx
if(v>16-e){x===$&&B.b()
v=w.bx=(x|D.c.eU(d,v)&65535)>>>0
w.qI(v)
w.qI(A.pG(v,8))
w.bx=A.pG(d,16-w.E)
w.E=w.E+(e-16)}else{x===$&&B.b()
w.bx=(x|D.c.eU(d,v)&65535)>>>0
w.E=v+e}},
MD(d,e){var x,w,v,u,t,s=this,r=s.f
r===$&&B.b()
x=s.c0
x===$&&B.b()
w=s.y2
w===$&&B.b()
v=A.pG(d,8)
r.$flags&2&&B.C(r)
r[x+w*2]=v
v=s.f
w=s.c0
x=s.y2
v.$flags&2&&B.C(v)
v[w+x*2+1]=d
w=s.xr
w===$&&B.b()
v[w+x]=e
s.y2=x+1
if(d===0){r=s.p1
r===$&&B.b()
x=e*2
w=r[x]
r.$flags&2&&B.C(r)
r[x]=w+1}else{r=s.bb
r===$&&B.b()
s.bb=r+1
r=s.p1
r===$&&B.b()
x=(C.Ml[e]+256+1)*2
w=r[x]
r.$flags&2&&B.C(r)
r[x]=w+1
w=s.p2
w===$&&B.b()
x=A.cIs(d-1)*2
r=w[x]
w.$flags&2&&B.C(w)
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
u+=w[t*2]*(5+C.ru[t])}u=A.pG(u,3)
w=s.bb
w===$&&B.b()
v=s.y2
if(w<v/2&&u<(r-x)/2)return!0
r=v}x=s.y1
x===$&&B.b()
return r===x-1},
akC(d,e){var x,w,v,u,t,s,r=this,q=r.y2
q===$&&B.b()
if(q!==0){x=0
do{q=r.f
q===$&&B.b()
w=r.c0
w===$&&B.b()
w+=x*2
v=q[w]<<8&65280|q[w+1]&255
w=r.xr
w===$&&B.b()
u=q[w+x]&255;++x
if(v===0)r.G0(u,d)
else{t=C.Ml[u]
r.G0(t+256+1,d)
s=C.Ks[t]
if(s!==0)r.lx(u-C.aq1[t],s);--v
t=A.cIs(v)
r.G0(t,e)
s=C.ru[t]
if(s!==0)r.lx(v-C.asW[t],s)}}while(x<r.y2)}r.G0(256,d)
r.bo=d[513]},
aKS(){var x,w,v,u
for(x=this.p1,w=0,v=0;w<7;){x===$&&B.b()
v+=x[w*2];++w}for(u=0;w<128;){x===$&&B.b()
u+=x[w*2];++w}for(;w<256;){x===$&&B.b()
v+=x[w*2];++w}this.y=v>A.pG(u,2)?0:1},
ax3(){var x=this,w=x.E
w===$&&B.b()
if(w===16){w=x.bx
w===$&&B.b()
x.qI(w)
x.qI(A.pG(w,8))
x.E=x.bx=0}else if(w>=8){w=x.bx
w===$&&B.b()
x.qI(w)
x.bx=A.pG(x.bx,8)
x.E=x.E-8}},
ajo(){var x=this,w=x.E
w===$&&B.b()
if(w>8){w=x.bx
w===$&&B.b()
x.qI(w)
x.qI(A.pG(w,8))}else if(w>0){w=x.bx
w===$&&B.b()
x.qI(w)}x.E=x.bx=0},
yw(d){var x,w,v,u,t,s=this,r=s.fr
r===$&&B.b()
if(r>=0)x=r
else x=-1
w=s.id
w===$&&B.b()
r=w-r
w=s.k4
w===$&&B.b()
if(w>0){if(s.y===2)s.aKS()
s.p4.a33(s)
s.R8.a33(s)
v=s.aWn()
w=s.bP
w===$&&B.b()
u=A.pG(w+3+7,3)
w=s.aK
w===$&&B.b()
t=A.pG(w+3+7,3)
if(t<=u)u=t}else{t=r+5
u=t
v=0}if(r+4<=u&&x!==-1)s.aui(x,r,d)
else if(t===u){s.lx(2+(d?1:0),3)
s.akC(C.rJ,C.N3)}else{s.lx(4+(d?1:0),3)
r=s.p4.b
r===$&&B.b()
x=s.R8.b
x===$&&B.b()
s.bkX(r+1,x+1,v+1)
x=s.p1
x===$&&B.b()
r=s.p2
r===$&&B.b()
s.akC(x,r)}s.aoR()
if(d)s.ajo()
s.fr=s.id
s.a3I()},
b_v(d){var x,w,v,u,t,s=this,r=s.r
r===$&&B.b()
x=r-5
x=65535>x?x:65535
for(r=d===C.xk;!0;){w=s.k2
w===$&&B.b()
if(w<=1){s.a44()
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
if(w-v>=t-262)s.yw(!1)}r=d===C.oh
s.yw(r)
return r?3:1},
aui(d,e,f){var x,w=this
w.lx(f?1:0,3)
w.ajo()
w.bo=8
w.qI(e)
w.qI(A.pG(e,8))
x=(~e>>>0)+65536&65535
w.qI(x)
w.qI(A.pG(x,8))
x=w.ax
x===$&&B.b()
w.bhY(x,d,e)},
a44(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.a
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
D.B.e3(w,0,x,w,x)
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
v&2&&B.C(w)
w[s]=x}while(--r,r!==0)
x=n.ch
x===$&&B.b()
w=x.$flags|0
s=t
r=s
do{--s
q=x[s]&65535
v=q>=t?q-t:0
w&2&&B.C(x)
x[s]=v}while(--r,r!==0)
u+=t}}x=m.c
w=m.d
w===$&&B.b()
if(x>=w)return
x=n.ax
x===$&&B.b()
r=n.bi6(x,n.id+n.k2,u)
x=n.k2=n.k2+r
if(x>=3){w=n.ax
v=n.id
p=w[v]&255
n.cx=p
o=n.dy
o===$&&B.b()
o=D.c.eU(p,o)
v=w[v+1]
w=n.dx
w===$&&B.b()
n.cx=((o^v&255)&w)>>>0}}while(x<262&&!(m.c>=m.d))},
b_t(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
for(x=d===C.xk,w=$.vI.a,v=0;!0;){u=m.k2
u===$&&B.b()
if(u<262){m.a44()
u=m.k2
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=m.cx
u===$&&B.b()
t=m.dy
t===$&&B.b()
t=D.c.eU(u,t)
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
q.$flags&2&&B.C(q)
q[(s&p)>>>0]=t
u.$flags&2&&B.C(u)
u[r]=s}if(v!==0){u=m.id
u===$&&B.b()
t=m.Q
t===$&&B.b()
t=(u-v&65535)<=t-262
u=t}else u=!1
if(u){u=m.ok
u===$&&B.b()
if(u!==2)m.fx=m.apB(v)}u=m.fx
u===$&&B.b()
t=m.id
if(u>=3){t===$&&B.b()
o=m.MD(t-m.k1,u-3)
u=m.k2
t=m.fx
u-=t
m.k2=u
s=$.vI.b
if(s===$.vI)B.a5(B.wb(w))
if(t<=s.b&&u>=3){u=m.fx=t-1
do{t=m.id=m.id+1
s=m.cx
s===$&&B.b()
r=m.dy
r===$&&B.b()
r=D.c.eU(s,r)
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
p.$flags&2&&B.C(p)
p[(t&n)>>>0]=r
s.$flags&2&&B.C(s)
s[q]=t}while(u=m.fx=u-1,u!==0)
m.id=t+1}else{u=m.id=m.id+t
m.fx=0
t=m.ax
t===$&&B.b()
s=t[u]&255
m.cx=s
r=m.dy
r===$&&B.b()
r=D.c.eU(s,r)
u=t[u+1]
t=m.dx
t===$&&B.b()
m.cx=((r^u&255)&t)>>>0}}else{u=m.ax
u===$&&B.b()
t===$&&B.b()
o=m.MD(0,u[t]&255)
m.k2=m.k2-1
m.id=m.id+1}if(o)m.yw(!1)}x=d===C.oh
m.yw(x)
return x?3:1},
b_u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
for(x=d===C.xk,w=$.vI.a,v=0;!0;){u=l.k2
u===$&&B.b()
if(u<262){l.a44()
u=l.k2
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=l.cx
u===$&&B.b()
t=l.dy
t===$&&B.b()
t=D.c.eU(u,t)
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
q.$flags&2&&B.C(q)
q[(s&p)>>>0]=t
u.$flags&2&&B.C(u)
u[r]=s}u=l.fx
u===$&&B.b()
l.k3=u
l.fy=l.k1
l.fx=2
t=!1
if(v!==0){s=$.vI.b
if(s===$.vI)B.a5(B.wb(w))
if(u<s.b){u=l.id
u===$&&B.b()
t=l.Q
t===$&&B.b()
t=(u-v&65535)<=t-262
u=t}else u=t}else u=t
t=2
if(u){u=l.ok
u===$&&B.b()
if(u!==2){u=l.apB(v)
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
n=l.MD(u-1-l.fy,t-3)
t=l.k2
u=l.k3
l.k2=t-(u-1)
u=l.k3=u-2
do{t=l.id=l.id+1
if(t<=o){s=l.cx
s===$&&B.b()
r=l.dy
r===$&&B.b()
r=D.c.eU(s,r)
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
p.$flags&2&&B.C(p)
p[(t&m)>>>0]=r
s.$flags&2&&B.C(s)
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
if(l.MD(0,u[t-1]&255))l.yw(!1)
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
l.MD(0,x[w-1]&255)
l.go=0}x=d===C.oh
l.yw(x)
return x?3:1},
apB(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=$.vI.cp().d,h=j.id
h===$&&B.b()
x=j.k3
x===$&&B.b()
w=j.Q
w===$&&B.b()
w-=262
v=h>w?h-w:0
u=$.vI.cp().c
w=j.at
w===$&&B.b()
t=j.id+258
s=j.ax
s===$&&B.b()
r=h+x
q=s[r-1]
p=s[r]
if(j.k3>=$.vI.cp().a)i=i>>>2
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
bi6(d,e,f){var x,w,v,u,t,s,r=this
if(f!==0){x=r.a
w=x.c
x=x.d
x===$&&B.b()
x=w>=x}else x=!0
if(x)return 0
v=r.a.jd(f)
u=v.gu(0)
if(u===0)return 0
t=v.hL()
s=t.length
if(u>s)u=s
D.B.hZ(d,e,e+u,t)
r.e+=u
r.d=A.xs(t,r.d)
return u},
a3I(){var x,w=this,v=w.x
v===$&&B.b()
x=w.f
x===$&&B.b()
w.b.aH6(x,v)
x=w.w
x===$&&B.b()
w.w=x+v
v=w.x-v
w.x=v
if(v===0)w.w=0},
b2N(d){switch(d){case 0:return new A.td(0,0,0,0,0)
case 1:return new A.td(4,4,8,4,1)
case 2:return new A.td(4,5,16,8,1)
case 3:return new A.td(4,6,32,32,1)
case 4:return new A.td(4,4,16,16,2)
case 5:return new A.td(8,16,32,32,2)
case 6:return new A.td(8,16,128,128,2)
case 7:return new A.td(8,32,128,256,2)
case 8:return new A.td(32,128,258,1024,2)
case 9:return new A.td(32,258,258,4096,2)}return null}}
A.td.prototype={}
A.c0b.prototype={
b2w(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a
d===$&&B.b()
x=e.c
x===$&&B.b()
w=x.a
v=x.b
u=x.c
t=x.e
for(x=a0.rx,s=x.$flags|0,r=0;r<=15;++r){s&2&&B.C(x)
x[r]=0}q=a0.ry
p=a0.x1
p===$&&B.b()
o=q[p]
d.$flags&2&&B.C(d)
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
s&2&&B.C(x)
x[r]=j+1
i=l>=u?v[l-u]:0
h=d[o]
o=a0.bP
o===$&&B.b()
a0.bP=o+h*(r+i)
if(p){o=a0.aK
o===$&&B.b()
a0.aK=o+h*(w[k]+i)}}if(m===0)return
r=t-1
do{for(g=r;p=x[g],p===0;)--g
s&2&&B.C(x)
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
if(o!==r){k=a0.bP
k===$&&B.b()
a0.bP=k+(r-o)*d[s]
d[p]=r}--l}}},
a33(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
g===$&&B.b()
x=h.c
x===$&&B.b()
w=x.a
v=x.d
d.to=0
d.x1=573
for(x=g.$flags|0,u=d.ry,t=u.$flags|0,s=d.x2,r=s.$flags|0,q=0,p=-1;q<v;++q){o=q*2
if(g[o]!==0){o=++d.to
t&2&&B.C(u)
u[o]=q
r&2&&B.C(s)
s[q]=0
p=q}else{x&2&&B.C(g)
g[o+1]=0}}for(o=w!=null;n=d.to,n<2;){++n
d.to=n
if(p<2){++p
m=p}else m=0
t&2&&B.C(u)
u[n]=m
n=m*2
x&2&&B.C(g)
g[n]=1
r&2&&B.C(s)
s[m]=0
l=d.bP
l===$&&B.b()
d.bP=l-1
if(o){l=d.aK
l===$&&B.b()
d.aK=l-w[n+1]}}h.b=p
for(q=D.c.b4(n,2);q>=1;--q)d.a63(g,q)
m=v
do{q=u[1]
o=u[d.to--]
t&2&&B.C(u)
u[1]=o
d.a63(g,1)
k=u[1]
o=--d.x1
u[o]=q;--o
d.x1=o
u[o]=k
o=q*2
n=g[o]
l=k*2
j=g[l]
x&2&&B.C(g)
g[m*2]=n+j
j=s[q]
n=s[k]
if(j>n)n=j
r&2&&B.C(s)
s[m]=n+1
g[l+1]=m
g[o+1]=m
i=m+1
u[1]=m
d.a63(g,1)
if(d.to>=2){m=i
continue}else break}while(!0)
u[--d.x1]=u[1]
h.b2w(d)
A.d7r(g,p,d.rx)}}
A.ceu.prototype={}
A.biD.prototype={
guw(){var x=this.a
if(x==null)return x
x.d===$&&B.b()
return x},
baA(){var x,w,v=this
v.e=v.d=0
if(v.guw()==null)return
while(!0){x=v.guw()
w=x.c
x=x.d
x===$&&B.b()
if(!(w<x))break
if(!v.bgl())return}},
bgl(){var x,w,v,u=this,t=u.guw()
if(t!=null){x=t.c
w=t.d
w===$&&B.b()
w=x>=w
x=w}else x=!0
if(x)return!1
v=u.qJ(3)
switch(D.c.S(v,1)){case 0:if(u.bgF()===-1)return!1
break
case 1:if(u.al7(u.r,u.w)===-1)return!1
break
case 2:if(u.bgp()===-1)return!1
break
default:return!1}return(v&1)===0},
qJ(d){var x,w,v,u,t=this
if(d===0)return 0
for(;x=t.e,x<d;){x=t.guw()
w=x.c
x=x.d
x===$&&B.b()
if(w>=x)return-1
x=t.guw()
w=x.b
w.toString
v=w[x.c++]
x=t.d
w=t.e
t.d=(x|D.c.eU(v,w))>>>0
t.e=w+8}w=t.d
u=D.c.en(1,d)
t.d=D.c.hA(w,d)
t.e=x-d
return(w&u-1)>>>0},
a68(d){var x,w,v,u,t,s,r=this,q=d.a
q===$&&B.b()
x=d.b
for(;w=r.e,w<x;){w=r.guw()
v=w.c
w=w.d
w===$&&B.b()
if(v>=w)return-1
w=r.guw()
v=w.b
v.toString
u=v[w.c++]
w=r.d
v=r.e
r.d=(w|D.c.eU(u,v))>>>0
r.e=v+8}v=r.d
t=q[(v&D.c.eU(1,x)-1)>>>0]
s=t>>>16
r.d=D.c.hA(v,s)
r.e=w-s
return t&65535},
bgF(){var x,w,v=this
v.e=v.d=0
x=v.qJ(16)
w=v.qJ(16)
if(x!==0&&x!==(w^65535)>>>0)return-1
if(x>v.guw().gu(0))return-1
v.c.bMO(v.guw().jd(x))
return 0},
bgp(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.qJ(5)
if(m===-1)return-1
m+=257
if(m>288)return-1
x=n.qJ(5)
if(x===-1)return-1;++x
if(x>32)return-1
w=n.qJ(4)
if(w===-1)return-1
w+=4
if(w>19)return-1
v=new Uint8Array(19)
for(u=0;u<w;++u){t=n.qJ(3)
if(t===-1)return-1
v[C.Bu[u]]=t}s=A.csp(v)
r=m+x
q=new Uint8Array(r)
p=J.df(D.B.gaj(q),0,m)
o=J.df(D.B.gaj(q),m,x)
if(n.aZA(r,s,q)===-1)return-1
return n.al7(A.csp(p),A.csp(o))},
al7(d,e){var x,w,v,u,t,s,r,q,p=this
for(x=p.c;!0;){w=p.a68(d)
if(w<0||w>285)return-1
if(w===256)break
if(w<256){x.b1(w&255)
continue}v=w-257
u=C.aBN[v]+p.qJ(C.aDk[v])
t=p.a68(e)
if(t<0||t>29)return-1
s=C.aBU[t]+p.qJ(C.ru[t])
for(r=-s;u>s;){x.m7(x.ji(r))
u-=s}if(u===s)x.m7(x.ji(r))
else x.m7(x.ahe(r,u-s))}for(;x=p.e,x>=8;){p.e=x-8
x=p.guw()
r=--x.c
q=x.d
q===$&&B.b()
x.c=D.c.b2(r,0,q)}return 0},
aZA(d,e,f){var x,w,v,u,t,s,r,q,p=this
for(x=f.$flags|0,w=0,v=0;v<d;){u=p.a68(e)
if(u===-1)return-1
t=0
switch(u){case 16:s=p.qJ(2)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.C(f)
f[v]=w}break
case 17:s=p.qJ(3)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.C(f)
f[v]=0}w=t
break
case 18:s=p.qJ(7)
if(s===-1)return-1
s+=11
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.C(f)
f[v]=0}w=t
break
default:if(u<0||u>15)return-1
q=v+1
x&2&&B.C(f)
f[v]=u
v=q
w=u
break}}return 0}}
A.bNu.prototype={
Cs(d){var x=A.cEk(C.oB,32768)
C.acN.bxl(A.biU(d,C.m5,null,null),x,!1,!1)
return x.af5()}}
A.ajW.prototype={
J(){return"ByteOrder."+this.b}}
A.biT.prototype={
gu(d){var x=this.b
return x==null?0:x.length-this.c},
i(d,e){return this.b[this.c+e]},
aNH(d,e){var x=this.b
if(x==null)return A.biU(B.a([],y.t),C.oB,null,null)
return A.biU(x,this.a,d,e)},
ct(){var x=this.b
x.toString
return x[this.c++]},
hL(){var x,w,v,u,t=this
if(t.b==null)return new Uint8Array(0)
x=t.gu(0)
w=t.c
v=t.b
u=v.length
if(w+x>u)x=u-w
return J.df(D.B.gaj(v),t.b.byteOffset+t.c,x)}}
A.biV.prototype={
a3(){var x=this,w=x.ct(),v=x.ct(),u=x.ct(),t=x.ct()
if(x.a===C.m5)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
jd(d){var x=this,w=x.aNH(d,x.c)
x.c=x.c+w.gu(0)
return w}}
A.awa.prototype={
af5(){return J.df(D.B.gaj(this.c),this.c.byteOffset,this.b)},
b1(d){var x,w,v=this
if(v.b===v.c.length)v.bfW()
x=v.c
w=v.b++
x.$flags&2&&B.C(x)
x[w]=d},
aH6(d,e){var x,w,v,u,t=this
if(e==null)e=d.length
for(;x=t.b,w=x+e,v=t.c,u=v.length,w>u;)t.a5O(w-u)
D.B.hZ(v,x,w,d)
t.b+=e},
m7(d){return this.aH6(d,null)},
bMO(d){var x,w,v,u,t,s,r=this
while(!0){x=r.b
w=d.b
v=w==null
u=v?0:w.length-d.c
t=r.c
s=t.length
if(!(x+u>s))break
r.a5O(x+(v?0:w.length-d.c)-s)}if(!v){w=d.gu(0)
v=d.b
v.toString
D.B.e3(t,x,x+w,v,d.c)}r.b=r.b+d.gu(0)},
ahe(d,e){var x=this
if(d<0)d=x.b+d
if(e==null)e=x.b
else if(e<0)e=x.b+e
return J.df(D.B.gaj(x.c),x.c.byteOffset+d,e-d)},
ji(d){return this.ahe(d,null)},
a5O(d){var x=d!=null?d>32768?d:32768:32768,w=this.c,v=w.length,u=new Uint8Array((v+x)*2)
D.B.hZ(u,0,v,w)
this.c=u},
bfW(){return this.a5O(null)},
gu(d){return this.b}}
A.brI.prototype={}
A.b0E.prototype={
J(){return"Channel."+this.b}}
A.hA.prototype={
q(){var x=this.b
return++this.a<x.gu(x)},
gL(d){return this.b.i(0,this.a)},
$ibt:1}
A.Nn.prototype={
dT(d){return new A.Nn(new Uint16Array(B.bU(this.a)))},
gdu(){return C.hO},
gu(d){return this.a.length},
geS(){return null},
i(d,e){var x,w=this.a
if(e<w.length){w=w[e]
x=$.hR
w=(x!=null?x:A.iI())[w]}else w=0
return w},
m(d,e,f){var x,w=this.a
if(e<w.length){x=A.fY(f)
w.$flags&2&&B.C(w)
w[e]=x}},
ge6(d){return this.gaf(0)},
gaf(d){var x,w=this.a
if(!D.dQ.gV(w)){w=w[0]
x=$.hR
w=(x!=null?x:A.iI())[w]}else w=0
return w},
saf(d,e){var x,w=this.a
if(!D.dQ.gV(w)){x=A.fY(e)
w.$flags&2&&B.C(w)
w[0]=x}},
gap(){var x,w=this.a
if(w.length>1){w=w[1]
x=$.hR
w=(x!=null?x:A.iI())[w]}else w=0
return w},
sap(d){var x,w=this.a
if(w.length>1){x=A.fY(d)
w.$flags&2&&B.C(w)
w[1]=x}},
gau(d){var x,w=this.a
if(w.length>2){w=w[2]
x=$.hR
w=(x!=null?x:A.iI())[w]}else w=0
return w},
sau(d,e){var x,w=this.a
if(w.length>2){x=A.fY(e)
w.$flags&2&&B.C(w)
w[2]=x}},
gaE(d){var x,w=this.a
if(w.length>3){w=w[3]
x=$.hR
w=(x!=null?x:A.iI())[w]}else w=0
return w},
gfs(){return this.gaE(0)/1},
gjy(){return A.jf(this)},
iJ(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaE(e)
w=v.a
if(w.length>3){x=A.fY(x)
w.$flags&2&&B.C(w)
w[3]=x}},
ga5(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gA(e)===B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
$idD:1}
A.No.prototype={
dT(d){return new A.No(new Float32Array(B.bU(this.a)))},
gdu(){return C.jb},
gu(d){return this.a.length},
geS(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x=this.a
if(e<x.length){x.$flags&2&&B.C(x)
x[e]=f}},
ge6(d){var x=this.a
return!D.f3.gV(x)?x[0]:0},
gaf(d){var x=this.a
return!D.f3.gV(x)?x[0]:0},
saf(d,e){var x=this.a
if(!D.f3.gV(x)){x.$flags&2&&B.C(x)
x[0]=e}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x=this.a
if(x.length>1){x.$flags&2&&B.C(x)
x[1]=d}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x=this.a
if(x.length>2){x.$flags&2&&B.C(x)
x[2]=e}},
gaE(d){var x=this.a
return x.length>3?x[3]:1},
gfs(){return this.gaE(0)/1},
gjy(){return A.jf(this)},
iJ(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaE(e)
w=v.a
if(w.length>3){w.$flags&2&&B.C(w)
w[3]=x}},
ga5(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gA(e)===B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
$idD:1}
A.Np.prototype={
dT(d){return new A.Np(new Float64Array(B.bU(this.a)))},
gdu(){return C.kI},
gu(d){return this.a.length},
geS(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x=this.a
if(e<x.length){x.$flags&2&&B.C(x)
x[e]=f}},
ge6(d){var x=this.a
return!D.ed.gV(x)?x[0]:0},
gaf(d){var x=this.a
return!D.ed.gV(x)?x[0]:0},
saf(d,e){var x=this.a
if(!D.ed.gV(x)){x.$flags&2&&B.C(x)
x[0]=e}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x=this.a
if(x.length>1){x.$flags&2&&B.C(x)
x[1]=d}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x=this.a
if(x.length>2){x.$flags&2&&B.C(x)
x[2]=e}},
gaE(d){var x=this.a
return x.length>3?x[3]:1},
gfs(){return this.gaE(0)/1},
gjy(){return A.jf(this)},
iJ(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaE(e)
w=v.a
if(w.length>3){w.$flags&2&&B.C(w)
w[3]=x}},
ga5(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gA(e)===B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
$idD:1}
A.Nq.prototype={
dT(d){return new A.Nq(new Int16Array(B.bU(this.a)))},
gdu(){return C.kK},
gu(d){return this.a.length},
geS(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.C(w)
w[e]=x}},
ge6(d){var x=this.a
return!D.jB.gV(x)?x[0]:0},
gaf(d){var x=this.a
return!D.jB.gV(x)?x[0]:0},
saf(d,e){var x,w=this.a
if(!D.jB.gV(w)){x=D.d.C(e)
w.$flags&2&&B.C(w)
w[0]=x}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.C(w)
w[1]=x}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.C(w)
w[2]=x}},
gaE(d){var x=this.a
return x.length>3?x[3]:0},
gfs(){return this.gaE(0)/32767},
gjy(){return A.jf(this)},
iJ(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaE(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.C(w)
w[3]=x}},
ga5(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gA(e)===B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
$idD:1}
A.Nr.prototype={
dT(d){return new A.Nr(new Int32Array(B.bU(this.a)))},
gdu(){return C.kL},
gu(d){return this.a.length},
geS(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.C(w)
w[e]=x}},
ge6(d){var x=this.a
return!D.co.gV(x)?x[0]:0},
gaf(d){var x=this.a
return!D.co.gV(x)?x[0]:0},
saf(d,e){var x=this.a
if(!D.co.gV(x)){B.bc(e)
x.$flags&2&&B.C(x)
x[0]=e}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.C(w)
w[1]=x}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.C(w)
w[2]=x}},
gaE(d){var x=this.a
return x.length>3?x[3]:0},
gfs(){return this.gaE(0)/2147483647},
gjy(){return A.jf(this)},
iJ(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaE(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.C(w)
w[3]=x}},
ga5(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gA(e)===B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
$idD:1}
A.Ns.prototype={
dT(d){return new A.Ns(new Int8Array(B.bU(this.a)))},
gdu(){return C.kJ},
gu(d){return this.a.length},
geS(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.C(w)
w[e]=x}},
ge6(d){var x=this.a
return!D.jC.gV(x)?x[0]:0},
gaf(d){var x=this.a
return!D.jC.gV(x)?x[0]:0},
saf(d,e){var x,w=this.a
if(!D.jC.gV(w)){x=D.d.C(e)
w.$flags&2&&B.C(w)
w[0]=x}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.C(w)
w[1]=x}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.C(w)
w[2]=x}},
gaE(d){var x=this.a
return x.length>3?x[3]:0},
gfs(){return this.gaE(0)/127},
gjy(){return A.jf(this)},
iJ(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaE(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.C(w)
w[3]=x}},
ga5(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gA(e)===B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
$idD:1}
A.Nv.prototype={
dT(d){var x=this.b
x===$&&B.b()
return new A.Nv(this.a,x)},
gdu(){return C.fn},
geS(){return null},
Bd(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.h1(x,7-d)&1}else x=0
return x},
yp(d,e){var x
if(d>=this.a)return
d=7-d
x=this.b
x===$&&B.b()
this.b=e!==0?(x|D.c.eU(1,d))>>>0:(x&~(D.c.eU(1,d)&255))>>>0},
i(d,e){return this.Bd(e)},
m(d,e,f){return this.yp(e,f)},
ge6(d){return this.Bd(0)},
gaf(d){return this.Bd(0)},
saf(d,e){this.yp(0,e)},
gap(){return this.Bd(1)},
sap(d){this.yp(1,d)},
gau(d){return this.Bd(2)},
sau(d,e){this.yp(2,e)},
gaE(d){return this.Bd(3)},
gfs(){return this.Bd(3)/1},
gjy(){return A.jf(this)},
iJ(d,e){this.iq(e.gaf(e),e.gap(),e.gau(e),e.gaE(e))},
iq(d,e,f,g){var x=this
x.yp(0,d)
x.yp(1,e)
x.yp(2,f)
x.yp(3,g)},
ga5(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a&&e.gA(e)===B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
$idD:1,
gu(d){return this.a}}
A.Nw.prototype={
dT(d){return new A.Nw(new Uint16Array(B.bU(this.a)))},
gdu(){return C.ch},
gu(d){return this.a.length},
geS(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.C(w)
w[e]=x}},
ge6(d){var x=this.a
return!D.dQ.gV(x)?x[0]:0},
gaf(d){var x=this.a
return!D.dQ.gV(x)?x[0]:0},
saf(d,e){var x,w=this.a
if(!D.dQ.gV(w)){x=D.d.C(e)
w.$flags&2&&B.C(w)
w[0]=x}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.C(w)
w[1]=x}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.C(w)
w[2]=x}},
gaE(d){var x=this.a
return x.length>3?x[3]:0},
gfs(){return this.gaE(0)/65535},
gjy(){return A.jf(this)},
iJ(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaE(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.C(w)
w[3]=x}},
ga5(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gA(e)===B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
$idD:1}
A.Nx.prototype={
dT(d){var x=this.b
x===$&&B.b()
return new A.Nx(this.a,x)},
gdu(){return C.h6},
geS(){return null},
Be(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.h1(x,6-(d<<1>>>0))&3}else x=0
return x},
yq(d,e){var x,w,v
if(d>=this.a)return
x=C.arQ[d]
w=D.d.C(e)
v=this.b
v===$&&B.b()
this.b=(v&x|D.c.eU(w&3,6-(d<<1>>>0)))>>>0},
i(d,e){return this.Be(e)},
m(d,e,f){return this.yq(e,f)},
ge6(d){return this.Be(0)},
gaf(d){return this.Be(0)},
saf(d,e){this.yq(0,e)},
gap(){return this.Be(1)},
sap(d){this.yq(1,d)},
gau(d){return this.Be(2)},
sau(d,e){this.yq(2,e)},
gaE(d){return this.Be(3)},
gfs(){return this.Be(3)/3},
gjy(){return A.jf(this)},
iJ(d,e){this.iq(e.gaf(e),e.gap(),e.gau(e),e.gaE(e))},
iq(d,e,f,g){var x=this
x.yq(0,d)
x.yq(1,e)
x.yq(2,f)
x.yq(3,g)},
ga5(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a&&e.gA(e)===B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
$idD:1,
gu(d){return this.a}}
A.Ny.prototype={
dT(d){return new A.Ny(new Uint32Array(B.bU(this.a)))},
gdu(){return C.jc},
gu(d){return this.a.length},
geS(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.C(w)
w[e]=x}},
ge6(d){var x=this.a
return!D.br.gV(x)?x[0]:0},
gaf(d){var x=this.a
return!D.br.gV(x)?x[0]:0},
saf(d,e){var x,w=this.a
if(!D.br.gV(w)){x=D.d.C(e)
w.$flags&2&&B.C(w)
w[0]=x}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.C(w)
w[1]=x}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.C(w)
w[2]=x}},
gaE(d){var x=this.a
return x.length>3?x[3]:0},
gfs(){return this.gaE(0)/4294967295},
gjy(){return A.jf(this)},
iJ(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaE(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.C(w)
w[3]=x}},
ga5(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gA(e)===B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
$idD:1}
A.Nz.prototype={
dT(d){return new A.Nz(this.a,new Uint8Array(B.bU(this.b)))},
gdu(){return C.h7},
geS(){return null},
Bf(d){var x
if(d<0||d>=this.a)x=0
else{x=this.b
x=d<2?D.c.h1(x[0],4-(d<<2>>>0))&15:D.c.h1(x[1],4-((d&1)<<2))&15}return x},
yr(d,e){var x,w,v,u
if(d>=this.a)return
x=D.c.b2(D.d.C(e),0,15)
if(d>1){d&=1
w=1}else w=0
if(d===0){v=this.b
u=v[w]
v.$flags&2&&B.C(v)
v[w]=(u&15|x<<4)>>>0}else if(d===1){v=this.b
u=v[w]
v.$flags&2&&B.C(v)
v[w]=(u&240|x)>>>0}},
i(d,e){return this.Bf(e)},
m(d,e,f){return this.yr(e,f)},
ge6(d){return this.Bf(0)},
gaf(d){return this.Bf(0)},
saf(d,e){this.yr(0,e)},
gap(){return this.Bf(1)},
sap(d){this.yr(1,d)},
gau(d){return this.Bf(2)},
sau(d,e){this.yr(2,e)},
gaE(d){return this.Bf(3)},
gfs(){return this.Bf(3)/15},
gjy(){return A.jf(this)},
iJ(d,e){this.iq(e.gaf(e),e.gap(),e.gau(e),e.gaE(e))},
iq(d,e,f,g){var x=this
x.yr(0,d)
x.yr(1,e)
x.yr(2,f)
x.yr(3,g)},
ga5(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a&&e.gA(e)===B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
$idD:1,
gu(d){return this.a}}
A.xX.prototype={
aTH(d,e,f,g){var x=this.a
x.$flags&2&&B.C(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g},
dT(d){return new A.xX(new Uint8Array(B.bU(this.a)))},
gdu(){return C.a8},
gu(d){return this.a.length},
geS(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.C(w)
w[e]=x}},
ge6(d){var x=this.a
return!D.B.gV(x)?x[0]:0},
gaf(d){var x=this.a
return!D.B.gV(x)?x[0]:0},
saf(d,e){var x,w=this.a
if(!D.B.gV(w)){x=D.d.C(e)
w.$flags&2&&B.C(w)
w[0]=x}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.C(w)
w[1]=x}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.C(w)
w[2]=x}},
gaE(d){var x=this.a
return x.length>3?x[3]:255},
gfs(){return this.gaE(0)/255},
gjy(){return A.jf(this)},
iJ(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaE(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.C(w)
w[3]=x}},
ga5(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gA(e)===B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
$idD:1}
A.akG.prototype={}
A.Nt.prototype={}
A.XZ.prototype={
dT(d){return new A.XZ(this.a)},
gdu(){return C.a8},
gu(d){return 4},
geS(){return null},
i(d,e){var x
if(e>=0&&e<4){x=e<<3>>>0
x=D.c.hA((this.a&D.c.en(255,x))>>>0,x)}else x=0
return x},
m(d,e,f){},
iJ(d,e){},
ge6(d){return this.i(0,0)},
gaf(d){return this.i(0,0)},
saf(d,e){},
gap(){return this.i(0,1)},
sap(d){},
gau(d){return this.i(0,2)},
sau(d,e){},
gaE(d){return this.i(0,3)},
gfs(){return this.gaE(this)/255},
gjy(){return A.jf(this)},
ga5(d){return new A.hA(this)},
k(d,e){var x=this
if(e==null)return!1
return y.G.b(e)&&e.gu(e)===x.gu(x)&&e.gA(e)===B.aJ(B.F(x,!0,B.q(x).h("w.E")))},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
$idD:1}
A.akR.prototype={
gaE(d){return 255},
gfs(){return 1},
gu(d){return 3}}
A.nJ.prototype={
J(){return"Format."+this.b}}
A.ajH.prototype={
J(){return"BlendMode."+this.b}}
A.OH.prototype={
Rk(d){var x=$.cqj()
if(!x.a7(0,d))return"<unknown>"
return x.i(0,d).a},
j(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(x=j.a,w=new B.cg(x,x.r,x.e,B.q(x).h("cg<1>")),v=y.p,u=y.r,t=y.N,s=y.P,r="";w.q();){q=w.d
r+=q+"\n"
p=x.i(0,q)
for(q=p.a,q=new B.cg(q,q.r,q.e,B.q(q).h("cg<1>"));q.q();){o=q.d
n=p.i(0,o)
r=n==null?r+("\t"+j.Rk(o)+"\n"):r+("\t"+j.Rk(o)+": "+n.j(0)+"\n")}for(q=p.b.a,o=new B.cg(q,q.r,q.e,B.q(q).h("cg<1>"));o.q();){m=o.d
r+=m+"\n"
if(!q.a7(0,m))q.m(0,m,new A.q4(B.I(v,u),new A.ua(B.I(t,s))))
l=q.i(0,m)
for(m=l.a,m=new B.cg(m,m.r,m.e,B.q(m).h("cg<1>"));m.q();){k=m.d
n=l.i(0,k)
r=n==null?r+("\t"+j.Rk(k)+"\n"):r+("\t"+j.Rk(k)+": "+n.j(0)+"\n")}}}return r.charCodeAt(0)==0?r:r},
jE(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0="exif",a1="interop",a2=a4.b
a4.b=!0
a4.ld(19789)
a4.ld(42)
a4.j0(8)
x=d.a
if(x.i(0,"ifd0")==null)x.m(0,"ifd0",new A.q4(B.I(y.p,y.r),new A.ua(B.I(y.N,y.P))))
w=y.N
v=y.p
u=B.I(w,v)
for(t=B.q(x),s=t.h("c2<1>"),r=new B.cg(x,x.r,x.e,t.h("cg<1>")),q=y.r,p=y.P,o=8;r.q();){n=r.d
m=x.i(0,n)
m.toString
u.m(0,n,o)
n=m.b.a
if(n.a7(0,a0)){l=new Uint32Array(1)
l[0]=0
m.m(0,34665,new A.rj(l))}else m.a.K(0,34665)
if(n.a7(0,a1)){l=new Uint32Array(1)
l[0]=0
m.m(0,40965,new A.rj(l))}else m.a.K(0,40965)
if(n.a7(0,"gps")){l=new Uint32Array(1)
l[0]=0
m.m(0,34853,new A.rj(l))}else m.a.K(0,34853)
m=m.a
o+=2+12*m.a+4
for(m=new B.bD(m,m.r,m.e,B.q(m).h("bD<2>"));m.q();){l=m.d
k=C.jq[l.ghM(l).a]*l.gu(l)
if(k>4)o+=k}for(m=new B.cg(n,n.r,n.e,B.q(n).h("cg<1>"));m.q();){l=m.d
if(!n.a7(0,l))n.m(0,l,new A.q4(B.I(v,q),new A.ua(B.I(w,p))))
j=n.i(0,l)
j.toString
u.m(0,l,o)
j=j.a
i=2+12*j.a
for(l=new B.bD(j,j.r,j.e,B.q(j).h("bD<2>"));l.q();){j=l.d
k=C.jq[j.ghM(j).a]*j.gu(j)
if(k>4)i+=k}o+=i}}h=x.a
for(r=h-1,t=t.h("b6<2>"),g=0;g<h;++g){f=new B.c2(x,s).dE(0,g)
e=new B.b6(x,t).dE(0,g)
n=e.b.a
if(n.a7(0,a0)){m=e.i(0,34665)
m.toString
l=u.i(0,a0)
l.toString
m.vQ(l)}if(n.a7(0,a1)){m=e.i(0,40965)
m.toString
l=u.i(0,a1)
l.toString
m.vQ(l)}if(n.a7(0,"gps")){m=e.i(0,34853)
m.toString
l=u.i(0,"gps")
l.toString
m.vQ(l)}m=u.i(0,f)
m.toString
d.aw0(a4,e,m+2+12*e.a.a+4)
if(g===r)a4.j0(0)
else{m=u.i(0,new B.c2(x,s).dE(0,g+1))
m.toString
a4.j0(m)}d.aw1(a4,e)
for(m=new B.cg(n,n.r,n.e,B.q(n).h("cg<1>"));m.q();){l=m.d
if(!n.a7(0,l))n.m(0,l,new A.q4(B.I(v,q),new A.ua(B.I(w,p))))
j=n.i(0,l)
j.toString
l=u.i(0,l)
l.toString
d.aw0(a4,j,l+2+12*j.a.a)
d.aw1(a4,j)}}a4.b=a2},
aw0(d,e,f){var x,w,v,u,t,s,r=e.a
d.ld(r.a)
for(r=new B.cg(r,r.r,r.e,B.q(r).h("cg<1>"));r.q();){x=r.d
w=e.i(0,x)
w.toString
v=x===273
u=v&&w.ghM(w)===C.hR?C.cO:w.ghM(w)
t=v&&w.ghM(w)===C.hR?1:w.gu(w)
d.ld(x)
d.ld(u.a)
d.j0(t)
s=C.jq[w.ghM(w).a]*w.gu(w)
if(s<=4){w.jE(0,d)
for(;s<4;){d.b1(0);++s}}else{d.j0(f)
f+=s}}return f},
aw1(d,e){var x,w
for(x=e.a,x=new B.bD(x,x.r,x.e,B.q(x).h("bD<2>"));x.q();){w=x.d
if(C.jq[w.ghM(w).a]*w.gu(w)>4)w.jE(0,d)}},
vo(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a5.e
a5.e=!0
x=a5.d
w=a5.am()
if(w===18761){a5.e=!1
if(a5.am()!==42){a5.e=a3
return!1}}else if(w===19789){a5.e=!0
if(a5.am()!==42){a5.e=a3
return!1}}else return!1
v=a5.a3()
for(u=this.a,t=y.v,s=y.p,r=y.r,q=y.N,p=y.P,o=a5.c,n=0;v>0;v=e){m=x+v
a5.d=m
if(o-m<2)break
l=new A.q4(B.I(s,r),new A.ua(B.I(q,p)))
k=a5.am()
j=B.a(new Array(k),t)
for(i=0;i<k;++i)j[i]=this.arr(a5,x)
for(m=j.length,h=0;h<j.length;j.length===m||(0,B.Q)(j),++h){g=j[h]
f=g.b
if(f!=null)l.m(0,g.a,f)}u.m(0,"ifd"+n,l);++n
e=a5.a3()
if(e===v)break}for(u=new B.bD(u,u.r,u.e,B.q(u).h("bD<2>"));u.q();){o=u.d
for(m=J.aN(C.BX.geq(C.BX)),f=o.a,d=o.b.a;m.q();){a0=m.gL(m)
if(f.a7(0,a0)){a5.d=x+o.i(0,a0).C(0)
l=new A.q4(B.I(s,r),new A.ua(B.I(q,p)))
k=a5.am()
j=B.a(new Array(k),t)
for(i=0;i<k;++i)j[i]=this.arr(a5,x)
for(a1=j.length,h=0;h<j.length;j.length===a1||(0,B.Q)(j),++h){g=j[h]
a2=g.b
if(a2!=null)l.m(0,g.a,a2)}a0=C.BX.i(0,a0)
a0.toString
d.m(0,a0,l)}}}a5.e=a3
return!1},
arr(d,e){var x,w,v,u,t=d.am(),s=d.am(),r=d.a3(),q=new A.aK2(t,null)
if(s>13)return q
x=C.Ne[s]
w=r*C.jq[s]
v=d.d
if((w>4?d.d=d.a3()+e:v)+w>d.c)return q
u=d.jd(w)
switch(x.a){case 0:break
case 6:q.b=new A.w6(new Int8Array(B.bU(J.cqq(D.B.gaj(u.hL()),0,r))))
break
case 1:q.b=new A.u9(new Uint8Array(B.bU(u.jd(r).hL())))
break
case 7:q.b=new A.HD(new Uint8Array(B.bU(u.jd(r).hL())))
break
case 2:q.b=new A.BM(r===0?"":u.je(r-1))
break
case 3:q.b=A.cCz(u,r)
break
case 4:q.b=A.cCu(u,r)
break
case 5:q.b=A.cCv(u,r)
break
case 10:q.b=A.cCx(u,r)
break
case 8:q.b=A.cCy(u,r)
break
case 9:q.b=A.cCw(u,r)
break
case 11:q.b=A.cCB(u,r)
break
case 12:q.b=A.cCt(u,r)
break}d.d=v+4
return q}}
A.aK2.prototype={
gp(d){return this.b}}
A.aoQ.prototype={}
A.ua.prototype={
aTU(d){d.a.aU(0,new A.bi0(this))},
gff(d){var x=this.a
return new B.b6(x,B.q(x).h("b6<2>"))},
gV(d){var x,w=this.a
if(w.a===0)return!0
for(w=new B.bD(w,w.r,w.e,B.q(w).h("bD<2>"));w.q();){x=w.d
if(!(x.a.a===0&&x.b.gV(0)))return!1}return!0},
a7(d,e){return this.a.a7(0,e)},
i(d,e){var x=this.a
if(!x.a7(0,e))x.m(0,e,new A.q4(B.I(y.p,y.r),new A.ua(B.I(y.N,y.P))))
x=x.i(0,e)
x.toString
return x},
m(d,e,f){this.a.m(0,e,f)}}
A.q4.prototype={
gff(d){var x=this.a
return new B.b6(x,B.q(x).h("b6<2>"))},
gV(d){return this.a.a===0&&this.b.gV(0)},
a9B(d){d.a.aU(0,new A.bi1(this))
d.b.a.aU(0,new A.bi2(this))},
a7(d,e){return this.a.a7(0,e)},
i(d,e){if(typeof e=="string")e=C.XE.i(0,e)
if(B.h5(e))return this.a.i(0,e)
return null},
m(d,e,f){var x,w,v,u,t,s,r=this
if(typeof e=="string")e=C.XE.i(0,e)
if(!B.h5(e))return
if(f==null)r.a.K(0,e)
else if(f instanceof A.k3)r.a.m(0,e,f)
else{x=$.cqj().i(0,e)
if(x!=null)switch(x.b.a){case 1:if(y.L.b(f))r.a.m(0,e,new A.u9(new Uint8Array(B.bU(new Uint8Array(B.bU(f))))))
else if(B.h5(f)){w=new Uint8Array(1)
w[0]=f
r.a.m(0,e,new A.u9(w))}break
case 2:if(typeof f=="string")r.a.m(0,e,new A.BM(f))
break
case 3:if(y.L.b(f))r.a.m(0,e,new A.yr(new Uint16Array(B.bU(new Uint16Array(B.bU(f))))))
else if(B.h5(f))r.a.m(0,e,A.cYD(f))
break
case 4:if(y.L.b(f))r.a.m(0,e,new A.rj(new Uint32Array(B.bU(new Uint32Array(B.bU(f))))))
else if(B.h5(f))r.a.m(0,e,A.cYC(f))
break
case 5:if(y.k.b(f))r.a.m(0,e,new A.ub(B.aZ(f,!0,y.i)))
else if(y.L.b(f)&&J.bA(f)===2){w=J.a2(f)
r.a.m(0,e,new A.ub(B.a([new A.nX(w.i(f,0),w.i(f,1))],y.j)))}else if(f instanceof A.nX)r.a.m(0,e,new A.ub(B.a([new A.nX(f.a,f.b)],y.j)))
else if(y.f.b(f)){w=J.a2(f)
v=w.gu(f)
u=y.i
t=J.ku(v,u)
for(s=0;s<v;++s)t[s]=new A.nX(J.v(w.i(f,s),0),J.v(w.i(f,s),1))
r.a.m(0,e,new A.ub(B.aZ(t,!0,u)))}break
case 6:if(y.L.b(f))r.a.m(0,e,new A.w6(new Int8Array(B.bU(new Int8Array(B.bU(f))))))
else if(B.h5(f)){w=new Int8Array(1)
w[0]=f
r.a.m(0,e,new A.w6(w))}break
case 7:if(y.L.b(f))r.a.m(0,e,new A.HD(new Uint8Array(B.bU(new Uint8Array(B.bU(f))))))
break
case 8:if(y.L.b(f))r.a.m(0,e,new A.yq(new Int16Array(B.bU(new Int16Array(B.bU(f))))))
else if(B.h5(f)){w=new Int16Array(1)
w[0]=f
r.a.m(0,e,new A.yq(w))}break
case 9:if(y.L.b(f))r.a.m(0,e,new A.yp(new Int32Array(B.bU(new Int32Array(B.bU(f))))))
else if(B.h5(f)){w=new Int32Array(1)
w[0]=f
r.a.m(0,e,new A.yp(w))}break
case 10:if(y.k.b(f))r.a.m(0,e,new A.uc(B.aZ(f,!0,y.i)))
else if(y.L.b(f)&&J.bA(f)===2){w=J.a2(f)
r.a.m(0,e,new A.uc(B.a([new A.nX(w.i(f,0),w.i(f,1))],y.j)))}else if(f instanceof A.nX)r.a.m(0,e,new A.uc(B.a([f],y.j)))
else if(y.f.b(f)){w=J.a2(f)
v=w.gu(f)
u=y.i
t=J.ku(v,u)
for(s=0;s<v;++s)t[s]=new A.nX(J.v(w.i(f,s),0),J.v(w.i(f,s),1))
r.a.m(0,e,new A.uc(B.aZ(t,!0,u)))}break
case 11:if(y.H.b(f))r.a.m(0,e,new A.BO(new Float32Array(B.bU(new Float32Array(B.bU(f))))))
else if(typeof f=="number")r.a.m(0,e,A.cCA(f))
else if(B.h5(f))r.a.m(0,e,A.cCA(f))
break
case 12:if(y.H.b(f))r.a.m(0,e,new A.BN(new Float64Array(B.bU(new Float64Array(B.bU(f))))))
else if(typeof f=="number")r.a.m(0,e,A.cCs(f))
else if(B.h5(f))r.a.m(0,e,A.cCs(f))
break
case 0:break}}},
gij(d){var x=this.a.i(0,274)
return x==null?null:x.C(0)},
sij(d,e){this.a.K(0,274)}}
A.mP.prototype={
J(){return"IfdValueType."+this.b}}
A.k3.prototype={
jf(d,e){return 0},
C(d){return this.jf(0,0)},
u2(d){return 0},
u1(){return new Uint8Array(0)},
j(d){return""},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.k3&&x.ghM(x)===e.ghM(e)&&x.gu(x)===e.gu(e)&&x.gA(x)===e.gA(e)},
gA(d){return 0},
vQ(d){}}
A.u9.prototype={
dT(d){return new A.u9(new Uint8Array(B.bU(this.a)))},
ghM(d){return C.JH},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.u9){x=this.a
x=x.length===e.a.length&&B.aJ(x)===B.aJ(e.a)}else x=!1
return x},
gA(d){return B.aJ(this.a)},
jf(d,e){return this.a[e]},
C(d){return this.jf(0,0)},
vQ(d){var x=this.a
x.$flags&2&&B.C(x)
x[0]=d},
u1(){return this.a},
jE(d,e){e.m7(this.a)},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.BM.prototype={
dT(d){return new A.BM(this.a)},
ghM(d){return C.bD},
gu(d){return this.a.length+1},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.BM){x=this.a
x=x.length+1===e.a.length+1&&D.e.gA(x)===D.e.gA(e.a)}else x=!1
return x},
gA(d){return D.e.gA(this.a)},
u1(){return new Uint8Array(B.bU(new B.e9(this.a)))},
jE(d,e){e.m7(new B.e9(this.a))
e.b1(0)},
j(d){return this.a},
gp(d){return this.a}}
A.yr.prototype={
aTZ(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.am()
w.$flags&2&&B.C(w)
w[x]=v}},
dT(d){return new A.yr(new Uint16Array(B.bU(this.a)))},
ghM(d){return C.bl},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.yr){x=this.a
x=x.length===e.a.length&&B.aJ(x)===B.aJ(e.a)}else x=!1
return x},
gA(d){return B.aJ(this.a)},
jf(d,e){return this.a[e]},
C(d){return this.jf(0,0)},
vQ(d){var x=this.a
x.$flags&2&&B.C(x)
x[0]=d},
u1(){return J.hI(D.dQ.gaj(this.a))},
jE(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.ld(this.a[x])},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.rj.prototype={
aTW(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.a3()
w.$flags&2&&B.C(w)
w[x]=v}},
dT(d){return new A.rj(new Uint32Array(B.bU(this.a)))},
ghM(d){return C.cO},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.rj){x=this.a
x=x.length===e.a.length&&B.aJ(x)===B.aJ(e.a)}else x=!1
return x},
gA(d){return B.aJ(this.a)},
jf(d,e){return this.a[e]},
C(d){return this.jf(0,0)},
vQ(d){var x=this.a
x.$flags&2&&B.C(x)
x[0]=d},
u1(){return J.hI(D.br.gaj(this.a))},
jE(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.j0(this.a[x])},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.ub.prototype={
dT(d){return new A.ub(B.aZ(this.a,!0,y.i))},
ghM(d){return C.e7},
gu(d){return this.a.length},
jf(d,e){return this.a[e].C(0)},
C(d){return this.jf(0,0)},
u2(d){return this.a[0].u2(0)},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.ub){x=this.a
x=x.length===e.a.length&&B.aJ(x)===B.aJ(e.a)}else x=!1
return x},
gA(d){return B.aJ(this.a)},
jE(d,e){var x,w,v,u
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.Q)(x),++v){u=x[v]
e.j0(u.a)
e.j0(u.b)}},
j(d){var x=this.a
return x.length===1?x[0].j(0):B.o(x)},
gp(d){return this.a}}
A.w6.prototype={
dT(d){return new A.w6(new Int8Array(B.bU(this.a)))},
ghM(d){return C.JL},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.w6){x=this.a
x=x.length===e.a.length&&B.aJ(x)===B.aJ(e.a)}else x=!1
return x},
gA(d){return B.aJ(this.a)},
jf(d,e){return this.a[e]},
C(d){return this.jf(0,0)},
vQ(d){var x=this.a
x.$flags&2&&B.C(x)
x[0]=d},
u1(){return J.hI(D.jC.gaj(this.a))},
jE(d,e){e.m7(J.df(D.jC.gaj(this.a),0,null))},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.yq.prototype={
aTY(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.am()
u=$.np()
u.$flags&2&&B.C(u)
u[0]=v
v=$.ow()[0]
w.$flags&2&&B.C(w)
w[x]=v}},
dT(d){return new A.yq(new Int16Array(B.bU(this.a)))},
ghM(d){return C.JM},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.yq){x=this.a
x=x.length===e.a.length&&B.aJ(x)===B.aJ(e.a)}else x=!1
return x},
gA(d){return B.aJ(this.a)},
jf(d,e){return this.a[e]},
C(d){return this.jf(0,0)},
vQ(d){var x=this.a
x.$flags&2&&B.C(x)
x[0]=d},
u1(){return J.hI(D.jB.gaj(this.a))},
jE(d,e){var x,w=new Int16Array(1),v=J.cqr(D.jB.gaj(w),0,null),u=this.a.length
for(x=0;x<u;++x){w[0]=this.a[x]
e.ld(v[0])}},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.yp.prototype={
aTX(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.a3()
u=$.hx()
u.$flags&2&&B.C(u)
u[0]=v
v=$.kJ()[0]
w.$flags&2&&B.C(w)
w[x]=v}},
dT(d){return new A.yp(new Int32Array(B.bU(this.a)))},
ghM(d){return C.JN},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.yp){x=this.a
x=x.length===e.a.length&&B.aJ(x)===B.aJ(e.a)}else x=!1
return x},
gA(d){return B.aJ(this.a)},
jf(d,e){return this.a[e]},
C(d){return this.jf(0,0)},
vQ(d){var x=this.a
x.$flags&2&&B.C(x)
x[0]=d},
u1(){return J.hI(D.co.gaj(this.a))},
jE(d,e){var x,w,v,u=this.a.length
for(x=0;x<u;++x){w=this.a[x]
v=$.aWp()
v.$flags&2&&B.C(v)
v[0]=w
e.j0($.cqb()[0])}},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.uc.prototype={
dT(d){return new A.uc(B.aZ(this.a,!0,y.i))},
ghM(d){return C.JI},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.uc){x=this.a
x=x.length===e.a.length&&B.aJ(x)===B.aJ(e.a)}else x=!1
return x},
gA(d){return B.aJ(this.a)},
jf(d,e){return this.a[e].C(0)},
C(d){return this.jf(0,0)},
u2(d){return this.a[0].u2(0)},
jE(d,e){var x,w,v,u,t,s
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.Q)(x),++v){u=x[v]
t=$.aWp()
t.$flags&2&&B.C(t)
t[0]=u.a
s=$.cqb()
e.j0(s[0])
t[0]=u.b
e.j0(s[0])}},
j(d){var x=this.a
return x.length===1?x[0].j(0):B.o(x)},
gp(d){return this.a}}
A.BO.prototype={
aU_(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.a3()
u=$.hx()
u.$flags&2&&B.C(u)
u[0]=v
v=$.Fz()[0]
w.$flags&2&&B.C(w)
w[x]=v}},
dT(d){return new A.BO(new Float32Array(B.bU(this.a)))},
ghM(d){return C.JJ},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.BO){x=this.a
x=x.length===e.a.length&&B.aJ(x)===B.aJ(e.a)}else x=!1
return x},
gA(d){return B.aJ(this.a)},
u1(){return J.hI(D.f3.gaj(this.a))},
u2(d){return this.a[0]},
jE(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.bML(this.a[x])},
j(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gp(d){return this.a}}
A.BN.prototype={
aTV(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.a_T()
w.$flags&2&&B.C(w)
w[x]=v}},
dT(d){return new A.BN(new Float64Array(B.bU(this.a)))},
ghM(d){return C.JK},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.BN){x=this.a
x=x.length===e.a.length&&B.aJ(x)===B.aJ(e.a)}else x=!1
return x},
gA(d){return B.aJ(this.a)},
u2(d){return this.a[0]},
u1(){return J.hI(D.ed.gaj(this.a))},
jE(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.bMM(this.a[x])},
j(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gp(d){return this.a}}
A.HD.prototype={
dT(d){return new A.HD(new Uint8Array(B.bU(this.a)))},
ghM(d){return C.hR},
gu(d){return this.a.length},
u1(){return this.a},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.HD){x=this.a
x=x.length===e.a.length&&B.aJ(x)===B.aJ(e.a)}else x=!1
return x},
gA(d){return B.aJ(this.a)},
jE(d,e){e.m7(this.a)},
j(d){return"<data>"},
gp(d){return this.a}}
A.lP.prototype={
J(){return"BmpCompression."+this.b}}
A.b_p.prototype={}
A.FR.prototype={
aiy(d,e){var x,w,v,u,t,s,r,q=this,p=q.d,o=p<=40
if(o){x=q.r
x=x===C.yr||x===C.ys}else x=!0
if(x){x=q.as=d.a3()
w=A.cnP(x)
q.CW=w
v=D.c.h1(x,w)
x=v>0
q.cx=x?255/v:0
w=q.at=d.a3()
u=A.cnP(w)
q.cy=u
t=D.c.h1(w,u)
q.db=x?255/t:0
w=q.ax=d.a3()
u=A.cnP(w)
q.dx=u
s=D.c.h1(w,u)
q.dy=x?255/s:0
if(!o||q.r===C.ys){o=q.ay=d.a3()
x=A.cnP(o)
q.fr=x
r=D.c.h1(o,x)
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
if(q.f<=8)q.bJL(d)},
gOP(){var x=this.d
if(x!==40)if(x===124){x=this.ay
x===$&&B.b()
x=x===0}else x=!1
else x=!0
return x},
gb5(d){return Math.abs(this.c)},
bJL(d){var x,w,v,u,t,s=this,r=s.z
if(r===0)r=D.c.en(1,s.f)
s.ch=new A.uq(new Uint8Array(r*3),r,3)
for(x=0;x<r;++x){w=J.v(d.a,d.d++)
v=J.v(d.a,d.d++)
u=J.v(d.a,d.d++)
t=J.v(d.a,d.d++)
s.ch.RZ(x,u,v,w,t)}},
bxk(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(o.ch!=null){x=o.f
if(x===1){w=d.ct()
for(v=7;v>=0;--v)e.$4(D.c.o2(w,v)&1,0,0,0)
return}else if(x===2){w=d.ct()
for(v=6;v>=0;v-=2)e.$4(D.c.o2(w,v)&2,0,0,0)}else if(x===4){w=d.ct()
e.$4(D.c.S(w,4)&15,0,0,0)
e.$4(w&15,0,0,0)
return}else if(x===8){e.$4(d.ct(),0,0,0)
return}}x=o.r
if(x===C.yr&&o.f===32){u=d.a3()
x=o.as
x===$&&B.b()
t=o.CW
t===$&&B.b()
t=D.c.h1((u&x)>>>0,t)
x=o.cx
x===$&&B.b()
s=D.d.C(t*x)
x=o.at
x===$&&B.b()
t=o.cy
t===$&&B.b()
t=D.c.h1((u&x)>>>0,t)
x=o.db
x===$&&B.b()
r=D.d.C(t*x)
x=o.ax
x===$&&B.b()
t=o.dx
t===$&&B.b()
t=D.c.h1((u&x)>>>0,t)
x=o.dy
x===$&&B.b()
q=D.d.C(t*x)
if(o.gOP())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.h1((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.d.C(t*x)}return e.$4(s,r,q,p)}else{t=o.f
if(t===32&&x===C.Ft){q=d.ct()
r=d.ct()
s=d.ct()
p=d.ct()
return e.$4(s,r,q,o.gOP()?255:p)}else if(t===24){q=d.ct()
r=d.ct()
return e.$4(d.ct(),r,q,255)}else if(t===16){u=d.am()
x=o.as
x===$&&B.b()
t=o.CW
t===$&&B.b()
t=D.c.h1((u&x)>>>0,t)
x=o.cx
x===$&&B.b()
s=D.d.C(t*x)
x=o.at
x===$&&B.b()
t=o.cy
t===$&&B.b()
t=D.c.h1((u&x)>>>0,t)
x=o.db
x===$&&B.b()
r=D.d.C(t*x)
x=o.ax
x===$&&B.b()
t=o.dx
t===$&&B.b()
t=D.c.h1((u&x)>>>0,t)
x=o.dy
x===$&&B.b()
q=D.d.C(t*x)
if(o.gOP())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.h1((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.d.C(t*x)}return e.$4(s,r,q,p)}else throw B.l(A.c6("Unsupported bitsPerPixel ("+t+") or compression ("+x.j(0)+")."))}}}
A.ajL.prototype={
oE(d){var x,w=null
if(!A.cqV(A.cY(d,!1,w,0)))return w
x=A.cY(d,!1,w,0)
this.a=x
return this.b=A.cTA(x,w)},
kf(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b
if(e==null)return new A.BR(f,f,f,f,0,C.bm,0,0)
x=g.a
x===$&&B.b()
w=e.a.b
w===$&&B.b()
x.d=w
v=e.f
w=e.b
u=D.c.b4(w*v+31,32)*4
x=g.c
if(x)t=4
else if(v===1||v===4||v===8)t=1
else{s=v===32?4:3
t=s}if(x)r=C.a8
else if(v===1)r=C.fn
else{if(v===2)s=C.h6
else if(v===4)s=C.h7
else s=C.a8
r=s}q=x?f:e.ch
p=A.hT(f,f,r,0,C.bm,e.gb5(e),f,0,t,q,C.a8,w,!1)
for(o=p.gb5(0)-1,x=e.c,w=1/x<0,s=x<0,x=x===0;o>=0;--o){n={}
if(!(x?w:s))m=o
else{l=p.a
l=l==null?f:l.b
m=(l==null?0:l)-1-o}l=g.a
k=l.ji(u)
l.d=l.d+(k.c-k.d)
l=p.a
j=l==null
i=j?f:l.a
if(i==null)i=0
n.a=0
h=j?f:l.ec(0,m,f)
if(h==null)h=new A.fi()
for(;n.a<i;)e.bxk(k,new A.b_o(n,g,i,e,h))}return p},
mX(d,e,f){if(this.oE(e)==null)return null
return this.kf(0)}}
A.b7L.prototype={}
A.b6t.prototype={}
A.b6u.prototype={}
A.ba6.prototype={}
A.aoR.prototype={}
A.arM.prototype={
Py(){return this.w},
rO(d,e,f,g,h){throw B.l(A.c6("B44 compression not yet supported."))},
Jq(d,e,f){return this.rO(d,e,f,null,null)},
j(d){return B.o(this.r)+" "+this.x}}
A.OJ.prototype={
J(){return"ExrChannelType."+this.b}}
A.GV.prototype={
J(){return"ExrChannelName."+this.b}}
A.aoS.prototype={
aTL(d){var x=this,w=d.Qe()
x.a=w
if(w.length===0)return
x.c=C.auI[d.a3()]
d.ct()
d.d+=3
x.f=d.a3()
x.r=d.a3()
w=x.a
if(w==="R"){x.w=!0
x.b=C.akv}else if(w==="G"){x.w=!0
x.b=C.akw}else if(w==="B"){x.w=!0
x.b=C.akx}else if(w==="A"){x.w=!0
x.b=C.aky}else{x.w=!1
x.b=C.akz}switch(x.c.a){case 0:x.d=4
break
case 1:x.d=2
break
case 2:x.d=4
break}}}
A.tY.prototype={
J(){return"ExrCompressorType."+this.b}}
A.bbl.prototype={
rO(d,e,f,g,h){throw B.l(A.c6("Unsupported compression type"))},
Jq(d,e,f){return this.rO(d,e,f,null,null)}}
A.bj2.prototype={}
A.aoT.prototype={}
A.bbn.prototype={
aTM(d){var x,w,v,u,t=this,s=A.cY(d,!1,null,0)
if(s.a3()!==20000630)throw B.l(A.c6("File is not an OpenEXR image file."))
x=t.d=s.ct()
if(x!==2)throw B.l(A.c6("Cannot read version "+x+" image files."))
x=t.e=s.rH()
if((x&4294967289)>>>0!==0)throw B.l(A.c6("The file format version number's flag field contains unrecognized flags."))
if((x&16)===0){w=t.c
v=A.cCS(w.length,(x&2)!==0,s)
if(v.w>0)w.push(v)}else for(x=t.c;!0;){v=A.cCS(x.length,(t.e&2)!==0,s)
if(v.w<=0)break
x.push(v)}x=t.c
w=x.length
if(w===0)throw B.l(A.c6("Error reading image header"))
for(u=0;u<x.length;x.length===w||(0,B.Q)(x),++u)x[u].bJK(s)
t.bif(s)},
bif(d){var x,w,v,u,t=this
for(x=t.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.Q)(x),++v){u=x[v]
t.a=Math.max(t.a,u.w)
t.b=Math.max(t.b,u.x)
if(u.db)t.biq(u,d)
else t.bio(u,d)}},
biq(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.e
b3===$&&B.b()
x=(b3&16)!==0
b3=b4.b
b3.toString
w=b4.CW
v=b4.ay
u=A.ca(b5,b2,0)
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
if(x)if(u.a3()!==s)throw B.l(A.c6("Invalid Image Data"))
k=u.a3()
j=u.a3()
u.a3()
u.a3()
i=u.ji(u.a3())
u.d=u.d+(i.c-i.d)
h=b4.dy
h.toString
g=j*h
f=b4.dx
f.toString
h=w.rO(i,k*f,g,f,h)
f=h.length
f=Math.min(f,f)
e=new A.lZ(h,0,f,0,!1)
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
switch(h.a){case 1:h=e.am()
a8=$.hR
a9=(a8!=null?a8:A.iI())[h]
break
case 2:a9=e.am()
break
case 0:a9=e.a3()
break
default:a9=b2}h=a5.d
h===$&&B.b()
a2+=h
h=a5.w
h===$&&B.b()
if(h){h=b3.a
b0=h==null?b2:h.ec(a6,g,b2)
if(b0==null)b0=new A.fi()
h=a5.b
h===$&&B.b()
b0.m(0,h.a,a9)}else{h=a5.a
h===$&&B.b()
a8=b3.b
b1=a8!=null?a8.i(0,h):b2
if(b1!=null)b1.fg(a6,g,a9,0,0)}}}++a3;++g}}++o;++q}++r}},
bio(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=this.e
a5===$&&B.b()
x=(a5&16)!==0
a5=a6.b
a5.toString
w=a6.CW
v=a6.ay[0]
u=a6.cx
t=A.ca(a7,a4,0)
for(s=v.length,r=a6.c,q=w!=null,p=0,o=0;o<s;++o){t.d=v[o]
if(x)if(t.a3()!==3.141592653589793)throw B.l(A.c6("Invalid Image Data"))
n=t.a3()
m=$.hx()
m.$flags&2&&B.C(m)
m[0]=n
n=$.kJ()
m[0]=t.a3()
l=t.ji(n[0])
t.d=t.d+(l.c-l.d)
if(q){n=w.Jq(l,0,p)
m=n.length
k=new A.lZ(n,0,Math.min(m,m),0,!1)}else k=l
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
switch(n.a){case 1:n=k.am()
m=$.hR
a1=(m!=null?m:A.iI())[n]
break
case 2:a1=k.am()
break
case 0:a1=k.a3()
break
default:a1=a4}n=e.d
n===$&&B.b()
g+=n
n=e.w
n===$&&B.b()
if(n){n=a5.a
a2=n==null?a4:n.ec(a0,p,a4)
if(a2==null)a2=new A.fi()
n=e.b
n===$&&B.b()
a2.m(0,n.a,a1)}else{n=e.a
n===$&&B.b()
m=a5.b
a3=m!=null?m.i(0,n):a4
if(a3!=null)a3.fg(a0,p,a1,0,0)}}}++h;++p}}}}
A.a_2.prototype={
aTN(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=B.I(y.N,y.I)
for(x=a2.e,w=y.t,v=a2.c,u=C.hO;!0;){t=a7.Qe()
if(t.length===0)break
s=a7.Qe()
r=a7.a3()
q=a7.ji(r)
a7.d=a7.d+(q.c-q.d)
x.m(0,t,new A.aoR(t,s,r))
switch(t){case"channels":for(;!0;){p=new A.aoS()
p.aTL(q)
o=p.a
o===$&&B.b()
if(o.length===0)break
n=p.w
n===$&&B.b()
if(n){++a2.d
o=p.c
o===$&&B.b()
if(o===C.A1)u=C.hO
else u=o===C.A2?C.jb:C.jc}else{n=p.c
n===$&&B.b()
if(n===C.A1){n=a2.w
m=a2.x
a4.m(0,o,new A.Pm(new Uint16Array(n*m),n,m,1))}else if(n===C.A2){n=a2.w
m=a2.x
a4.m(0,o,new A.Pn(new Float32Array(n*m),n,m,1))}else if(n===C.IB){n=a2.w
m=a2.x
a4.m(0,o,new A.Pr(new Uint32Array(n*m),n,m,1))}}v.push(p)}break
case"chromaticities":o=new Float32Array(8)
a2.at=o
n=q.a3()
m=$.hx()
m.$flags&2&&B.C(m)
m[0]=n
n=$.Fz()
o[0]=n[0]
o=a2.at
m[0]=q.a3()
l=n[0]
o.$flags&2&&B.C(o)
o[1]=l
l=a2.at
m[0]=q.a3()
o=n[0]
l.$flags&2&&B.C(l)
l[2]=o
o=a2.at
m[0]=q.a3()
l=n[0]
o.$flags&2&&B.C(o)
o[3]=l
l=a2.at
m[0]=q.a3()
o=n[0]
l.$flags&2&&B.C(l)
l[4]=o
o=a2.at
m[0]=q.a3()
l=n[0]
o.$flags&2&&B.C(o)
o[5]=l
l=a2.at
m[0]=q.a3()
o=n[0]
l.$flags&2&&B.C(l)
l[6]=o
o=a2.at
m[0]=q.a3()
n=n[0]
o.$flags&2&&B.C(o)
o[7]=n
break
case"compression":a2.ax=C.ax8[J.v(q.a,q.d++)]
break
case"dataWindow":o=q.a3()
n=$.hx()
n.$flags&2&&B.C(n)
n[0]=o
o=$.kJ()
m=o[0]
n[0]=q.a3()
l=o[0]
n[0]=q.a3()
k=o[0]
n[0]=q.a3()
o=a2.r=B.a([m,l,k,o[0]],w)
a2.w=o[2]-o[0]+1
a2.x=o[3]-o[1]+1
break
case"displayWindow":o=q.a3()
n=$.hx()
n.$flags&2&&B.C(n)
n[0]=o
$.kJ()
n[0]=q.a3()
n[0]=q.a3()
n[0]=q.a3()
break
case"lineOrder":break
case"pixelAspectRatio":o=q.a3()
n=$.hx()
n.$flags&2&&B.C(n)
n[0]=o
$.Fz()
break
case"screenWindowCenter":o=q.a3()
n=$.hx()
n.$flags&2&&B.C(n)
n[0]=o
$.Fz()
n[0]=q.a3()
break
case"screenWindowWidth":o=q.a3()
n=$.hx()
n.$flags&2&&B.C(n)
n[0]=o
$.Fz()
break
case"tiles":a2.dx=q.a3()
a2.dy=q.a3()
j=J.v(q.a,q.d++)
a2.fr=j&15
a2.fx=D.c.S(j,4)&15
break
case"type":i=q.Qe()
if(i!=="deepscanline")if(i!=="deeptile")throw B.l(A.c6("EXR Invalid type: "+i))
break
default:break}}x=a2.w
a2.b=A.hT(a3,a3,u,0,C.bm,a2.x,a3,0,a2.d,a3,C.a8,x,!1)
for(x=new B.cg(a4,a4.r,a4.e,a4.$ti.h("cg<1>"));x.q();){w=x.d
o=a2.b
o.toString
n=a4.i(0,w)
n.toString
o.aL_(w,n)}if(a2.db){x={}
w=a2.r
w===$&&B.b()
a2.id=a2.aXq(w[0],w[2],w[1],w[3])
w=a2.r
a2.k1=a2.aXr(w[0],w[2],w[1],w[3])
if(a2.fr!==2)a2.k1=1
w=a2.id
w.toString
v=a2.r
a2.fy=a2.ajX(w,v[0],v[2],a2.dx,a2.fx)
v=a2.k1
v.toString
w=a2.r
a2.go=a2.ajX(v,w[1],w[3],a2.dy,a2.fx)
w=a2.aXo()
a2.k2=w
v=a2.dx
v.toString
v=w*v
a2.k3=v
a2.CW=A.cBq(a2.ax,a2,v,a2.dy)
x.a=x.b=0
v=a2.id
v.toString
w=a2.k1
w.toString
a2.ay=B.rr(v*w,new A.bbo(x,a2),!0,y.bk)}else{x=a2.x
w=a2.ch=new Uint32Array(x+1)
for(o=v.length,n=a2.r,m=a2.w,h=0;h<o;++h){g=v[h]
l=g.d
l===$&&B.b()
k=g.f
k===$&&B.b()
f=D.c.hy(l*m,k)
for(l=g.r,e=0;e<x;++e){n===$&&B.b()
k=n[1]
l===$&&B.b()
if(D.c.an(e+k,l)===0)w[e]=w[e]+f}}for(d=0,e=0;e<x;++e)d=Math.max(d,w[e])
x=A.cBq(a2.ax,a2,d,a3)
a2.CW=x
x=a2.cx=x.Py()
w=a2.ch
v=w.length
o=new Uint32Array(v)
a2.cy=o
for(--v,a0=0,a1=0;a1<=v;++a1){if(D.c.an(a1,x)===0)a0=0
o[a1]=a0
a0+=w[a1]}x=D.c.hy(a2.x+x,x)
a2.ay=B.a([new Uint32Array(x-1)],y.w)}},
aXq(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.TI(w):u.T1(w))+1
break
case 2:v=e-d+1
x=(u.fx===0?u.TI(v):u.T1(v))+1
break
default:throw B.l(A.c6("Unknown LevelMode format."))}return x},
aXr(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.TI(w):u.T1(w))+1
break
case 2:v=g-f+1
x=(u.fx===0?u.TI(v):u.T1(v))+1
break
default:throw B.l(A.c6("Unknown LevelMode format."))}return x},
TI(d){var x
for(x=0;d>1;){++x
d=D.c.S(d,1)}return x},
T1(d){var x,w
for(x=0,w=0;d>1;){if((d&1)!==0)w=1;++x
d=D.c.S(d,1)}return x+w},
aXo(){var x,w,v,u,t
for(x=this.c,w=x.length,v=0,u=0;u<w;++u){t=x[u].d
t===$&&B.b()
v+=t}return v},
ajX(d,e,f,g,h){var x,w,v,u,t,s,r=J.iN(d,y.p)
for(x=h===1,w=f-e+1,v=0;v<d;++v){u=D.c.en(1,v)
t=D.c.hy(w,u)
if(x&&t*u<w)++t
s=Math.max(t,1)
g.toString
r[v]=D.c.hy(s+g-1,g)}return r}}
A.arN.prototype={
bJK(d){var x,w,v,u,t,s=this
if(s.db)for(x=0;x<s.ay.length;++x)for(w=0;v=s.ay[x],w<v.length;++w){u=d.adI()
v.$flags&2&&B.C(v)
v[w]=u}else{t=s.ay[0].length
for(x=0;x<t;++x){v=s.ay[0]
u=d.adI()
v.$flags&2&&B.C(v)
v[x]=u}}}}
A.bj3.prototype={
aU5(d,e,f){var x,w,v,u=this,t=d.c.length,s=J.iN(t,y.bc)
for(x=0;x<t;++x)s[x]=new A.aN4()
u.y=s
w=u.w
w.toString
v=D.c.b4(w*u.x,2)
u.z=new Uint16Array(v)},
Py(){return this.x},
rO(a4,a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
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
n=D.c.hy(a5,v)
m=D.c.hy(x,v)
v=n*v<a5?0:1
v=m-n+v
o.c=v
u=p.r
u===$&&B.b()
n=D.c.hy(a6,u)
m=D.c.hy(w,u)
l=n*u<a6?0:1
l=m-n+l
o.d=l
o.e=u
u=p.d
u===$&&B.b()
u=u/2|0
o.f=u
r+=v*l*u}k=a4.am()
j=a4.am()
if(j>=8192)throw B.l(A.c6("Error in header for PIZ-compressed data (invalid bitmap size)."))
i=new Uint8Array(8192)
if(k<=j){h=a4.jd(j-k+1)
g=h.c-h.d
for(f=k,q=0;q<g;++q,f=e){e=f+1
i[f]=J.v(h.a,h.d+q)}}d=new Uint16Array(65536)
a0=a3.bjD(i,d)
A.cWT(a4,a4.a3(),a3.z,r)
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
A.cWW(u,l+f,a1,v,a2,a1*v,a0);++f}}v=a3.z
v.toString
a3.aVU(d,v,r)
v=a3.r
if(v==null){v=a3.w
v.toString
v=a3.r=A.qo(!1,v*a3.x+73728)}v.a=0
for(;a6<=w;++a6)for(q=0;q<s;++q){v=a3.y
v===$&&B.b()
o=v[q]
v=o.e
v===$&&B.b()
if(D.c.an(a6,v)!==0)continue
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
v.ld(u[l])}}v=a3.r
return J.df(D.B.gaj(v.c),0,v.a)},
Jq(d,e,f){return this.rO(d,e,f,null,null)},
aVU(d,e,f){var x,w,v
for(x=e.$flags|0,w=0;w<f;++w){v=d[e[w]]
x&2&&B.C(e)
e[w]=v}},
bjD(d,e){var x,w,v,u,t
for(x=e.$flags|0,w=0,v=0;v<65536;++v)if(v===0||(d[v>>>3]&1<<(v&7))>>>0!==0){u=w+1
x&2&&B.C(e)
e[w]=v
w=u}for(u=w;u<65536;u=t){t=u+1
x&2&&B.C(e)
e[u]=0}return w-1}}
A.aN4.prototype={}
A.bj4.prototype={
Py(){return this.x},
rO(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=C.iY.Cs(a0.hL()),d=f.y
if(d==null){d=f.w
d.toString
d=f.y=A.qo(!1,f.x*d)}d.a=0
x=B.a([0,0,0,0],y.t)
w=new Uint32Array(1)
v=J.df(D.br.gaj(w),0,null)
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
if(D.c.an(a2,s)!==0)continue
s=n.f
s===$&&B.b()
m=D.c.hy(a1,s)
l=D.c.hy(u,s)
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
for(g=0;g<4;++g)f.y.b1(v[g])}break
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
for(g=0;g<2;++g)f.y.b1(v[g])}break
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
for(g=0;g<4;++g)f.y.b1(v[g])}break}}d=f.y
return J.df(D.B.gaj(d.c),0,d.a)},
Jq(d,e,f){return this.rO(d,e,f,null,null)}}
A.bj5.prototype={
Py(){return 1},
rO(d,e,f,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.c,g=A.qo(!1,(h-d.d)*2)
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
u=$.nq()
u.$flags&2&&B.C(u)
u[0]=v
t=$.ox()[0]
if(t<0){s=-t
for(;r=s-1,s>0;s=r)g.b1(J.v(d.a,d.d++))}else for(s=t;r=s-1,s>=0;s=r)g.b1(J.v(d.a,d.d++))}q=J.df(D.B.gaj(g.c),0,g.a)
p=q.length
for(h=q.$flags|0,o=1;o<p;++o){v=q[o-1]
u=q[o]
h&2&&B.C(q)
q[o]=v+u-128}h=i.r
if(h==null||h.length!==p)h=i.r=new Uint8Array(p)
v=D.c.b4(p+1,2)
for(n=0,m=0;!0;v=j,n=k){if(m<p){h.toString
l=m+1
k=n+1
u=q[n]
h.$flags&2&&B.C(h)
h[m]=u}else break
if(l<p){m=l+1
j=v+1
h[l]=q[v]}else break}h.toString
return h},
Jq(d,e,f){return this.rO(d,e,f,null,null)},
j(d){return B.o(this.w)}}
A.arO.prototype={
Py(){return this.x},
rO(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=C.iY.Cs(d.hL())
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
v&2&&B.C(k)
k[s]=u+r-128}v=l.y
if(v==null||v.length!==t)v=l.y=new Uint8Array(t)
u=D.c.b4(t+1,2)
for(q=0,p=0;!0;u=m,q=n){if(p<t){v.toString
o=p+1
n=q+1
r=k[q]
v.$flags&2&&B.C(v)
v[p]=r}else break
if(o<t){p=o+1
m=u+1
v[o]=k[u]}else break}v.toString
return v},
Jq(d,e,f){return this.rO(d,e,f,null,null)},
j(d){return B.o(this.w)}}
A.bbm.prototype={
kf(d){var x=this.a
if(x==null)return null
return x.c[d].b},
mX(d,e,f){var x=new A.bbn(B.a([],y.m))
x.aTM(e)
this.a=x
return this.kf(0)}}
A.a_E.prototype={
bzV(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.b,w=this.d,v=-1,u=-1,t=0;t<x;++t){s=w.ni(t)
r=w.ng(t)
q=w.nf(t)
p=w.oy(t)
if(s===d&&r===e&&q===f&&p===g)return t
o=d-s
n=e-r
m=f-q
l=g-p
k=o*o+n*n+m*m+l*l
if(u===-1){u=t
v=k}else if(k<v){u=t
v=k}}return u},
afw(){var x,w,v,u,t,s,r,q=this
if(q.c==null)return q.d
x=q.d
w=x.a
v=new A.uq(new Uint8Array(w*4),w,4)
for(u=0;u<w;++u){t=x.ni(u)
s=x.ng(u)
r=x.nf(u)
v.RZ(u,t,s,r,u===q.c?0:255)}return v}}
A.a_F.prototype={
aTQ(d){var x,w,v,u,t,s,r=this
r.a=d.am()
r.b=d.am()
r.c=d.am()
r.d=d.am()
x=d.ct()
r.e=(x&64)!==0
if((x&128)!==0){r.f=A.cC4(D.c.en(1,(x&7)+1))
for(w=0;v=r.f,w<v.b;++w){u=J.v(d.a,d.d++)
t=J.v(d.a,d.d++)
s=J.v(d.a,d.d++)
v.d.pt(w,u,t,s)}}r.x=d.d-d.b}}
A.arP.prototype={}
A.aqq.prototype={}
A.bfp.prototype={
oE(d){var x,w,v,u,t,s,r,q,p,o,n=this
n.f=A.cY(d,!1,null,0)
n.a=new A.aqq(B.a([],y.b))
if(!n.an7())return null
try{for(;u=n.f,t=u.d,t<u.c;){s=u.a
u.d=t+1
x=J.v(s,t)
switch(x){case 44:w=n.atg()
if(w==null){u=n.a
return u}u=w
u.r=n.e
u.w=n.c
if(n.b!==0){if(w.f==null&&n.a.e!=null){u=n.a.e
t=u.a
s=u.b
r=u.c
u=u.d
w.f=new A.a_E(t,s,r,new A.uq(new Uint8Array(B.bU(u.c)),u.a,u.b))}if(w.f!=null)w.f.c=n.d}n.a.r.push(w)
break
case 33:u=n.f
v=J.v(u.a,u.d++)
if(J.m(v,255)){u=n.f
if(u.je(J.v(u.a,u.d++))==="NETSCAPE2.0"){q=J.v(u.a,u.d++)
p=J.v(u.a,u.d++)
if(q===3&&p===1)n.r=u.am()}else n.VW()}else if(J.m(v,249)){u=n.f
u.toString
n.bib(u)}else n.VW()
break
case 59:u=n.a
return u
default:break}}}catch(o){}return n.a},
bib(d){var x,w,v,u=this
d.ct()
x=d.ct()
u.e=d.am()
u.d=d.ct()
d.ct()
u.c=D.c.S(x,2)&7
u.b=x&1
w=d.Sr(1,0)
if(J.v(w.a,w.d)===44){++d.d
v=u.atg()
if(v==null)return
v.r=u.e
v.w=u.c
if(u.b!==0){w=v.f
if(w==null&&u.a.e!=null){w=u.a.e
w.toString
w=v.f=A.cY5(w)}if(w!=null)w.c=u.d}u.a.r.push(v)}},
kf(d){var x,w,v,u=this,t=u.f
if(t==null||u.a==null)return null
x=u.a.r
w=x.length
if(d>=w)return null
v=x[d]
t.toString
x=v.x
x===$&&B.b()
t.d=x
return u.aZR(v)},
mX(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null
if(a5.oE(a8)==null)return a6
x=a5.a.r.length
if(x===1)return a5.kf(0)
for(x=y.p,w=a6,v=w,u=0;t=a5.a.r,u<t.length;++u){a9=t[u]
s=a5.kf(u)
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
if(t){v.ny(s)
w=s
continue}l=a9.f
if(!(l!=null)){t=a5.a.e
t.toString
l=t}t=o?a6:p.a
if(t==null)t=0
r=o?a6:p.b
if(r==null)r=0
k=A.hT(a6,a6,C.a8,0,C.bm,r,a6,0,1,l.afw(),C.a8,t,!1)
t=a9.w
if(t===2){t=a5.a.c.a
t=!D.B.gV(t)?t[0]:0
r=l.d
j=r.ni(t)
i=r.ng(t)
h=r.nf(t)
g=t===l.c?0:255
t=new Uint8Array(4)
t[0]=j
t[1]=i
t[2]=h
t[3]=g
r=k.a
if(r!=null)r.nA(0,new A.xX(t))}else if(t!==3)if(a9.f!=null){t=w.a
t=t==null?a6:t.geS()
t.toString
f=B.I(x,x)
for(r=l.b,e=0;e<r;++e)f.m(0,e,l.bzV(t.ni(e),t.ng(e),t.nf(e),t.oy(e)))
t=k.a
d=t==null?a6:J.hI(t.gaj(t))
if(d==null){t=k.a
t=t==null?a6:t.gaj(t)
if(t==null)t=D.B.gaj(new Uint8Array(0))
d=J.hI(t)}t=w.a
a0=t==null?a6:J.hI(t.gaj(t))
if(a0==null){t=w.a
t=t==null?a6:t.gaj(t)
if(t==null)t=D.B.gaj(new Uint8Array(0))
a0=J.hI(t)}for(a1=d.length,t=d.$flags|0,a2=0;a2<a1;++a2){a3=f.i(0,a0[a2])
if(a3!==-1){a3.toString
t&2&&B.C(d)
d[a2]=a3}}}k.y=s.y
for(t=s.a,t=t.ga5(t);t.q();){a4=t.gL(t)
if(a4.gaE(a4)!==0){r=a4.gnd(a4)
q=a9.a
q===$&&B.b()
p=a4.gnY(a4)
o=a9.b
o===$&&B.b()
k.AN(r+q,p+o,a4)}}v.ny(k)
w=k}return v},
atg(){var x,w=this.f
if(w.d>=w.c)return null
x=new A.arP()
x.aTQ(w);++this.f.d
this.VW()
return x},
aZR(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.w==null){n.w=new Uint8Array(256)
n.x=new Uint8Array(4095)
n.y=new Uint8Array(4096)
n.z=new Uint32Array(4096)}x=n.Q=n.f.ct()
w=D.c.eU(1,x)
n.dy=w;++w
n.dx=w
n.db=w+1;++x
n.cy=x
n.cx=D.c.eU(1,x)
n.ay=0
n.CW=4098
n.at=n.ax=0
x=n.w
x.toString
x.$flags&2&&B.C(x)
x[0]=0
x=n.z
x.toString
D.br.m0(x,0,4096,4098)
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
s=A.hT(m,m,C.a8,0,C.bm,w,m,0,1,t.afw(),C.a8,x,!1)
r=new Uint8Array(x)
x=d.e
x===$&&B.b()
if(x){x=d.b
x===$&&B.b()
for(w=x+w,q=0,p=0;q<4;++q)for(o=x+C.apb[q];o<w;o+=C.asP[q],++p){if(!n.an9(r))return s
n.av3(s,o,t,r)}}else for(o=0;o<w;++o){if(!n.an9(r))return s
n.av3(s,o,t,r)}return s},
av3(d,e,f,g){var x,w,v,u=g.length
for(x=0;x<u;++x){w=g[x]
v=d.a
if(v!=null)v.fg(x,e,w,0,0)}},
an7(){var x,w,v,u,t,s=this,r=s.f.je(6)
if(r!=="GIF87a"&&r!=="GIF89a")return!1
x=s.a
x.toString
x.a=s.f.am()
x=s.a
x.toString
x.b=s.f.am()
w=s.f.ct()
x=s.a
x.toString
x.c=new A.xX(new Uint8Array(B.bU(B.a([s.f.ct()],y.t))));++s.f.d
if((w&128)!==0){x=s.a
x.toString
x.e=A.cC4(D.c.en(1,(w&7)+1))
for(v=0;v<s.a.e.b;++v){x=s.f
u=J.v(x.a,x.d++)
x=s.f
t=J.v(x.a,x.d++)
x=s.f
w=J.v(x.a,x.d++)
s.a.e.d.pt(v,u,t,w)}}s.a.toString
return!0},
an9(d){var x=this,w=x.as
w.toString
x.as=w-d.length
if(!x.b_4(d))return!1
if(x.as===0)x.VW()
return!0},
VW(){var x,w,v,u=this.f
if(u.d>=u.c)return!0
x=u.ct()
while(!0){if(x!==0){u=this.f
u=u.d<u.c}else u=!1
if(!u)break
u=this.f
w=u.d+=x
if(w>=u.c)return!0
v=u.a
u.d=w+1
x=J.v(v,w)}return!0},
b_4(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.ay
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
v&2&&B.C(d)
d[w]=t
w=u}}for(k=d.$flags|0;w<x;){s=l.ch=l.b_3()
if(s==null)return!1
v=l.dx
if(s===v)return!1
t=l.dy
if(s===t){for(t=l.z,r=0;r<=4095;++r){t.toString
t.$flags&2&&B.C(t)
t[r]=4098}l.db=v+1
v=l.Q+1
l.cy=v
l.cx=D.c.eU(1,v)
l.CW=4098}else{if(s<t){u=w+1
k&2&&B.C(d)
d[w]=s
w=u}else{v=l.z
if(v[s]===4098){q=l.db-2
if(s===q){s=l.CW
p=l.y
p===$&&B.b()
o=l.x
o===$&&B.b()
n=l.ay++
t=l.a4p(v,s,t)
o.$flags&2&&B.C(o)
o[n]=t
p.$flags&2&&B.C(p)
p[q]=t}else return!1}r=0
while(!0){m=r+1
if(!(r<=4095&&s>l.dy&&s<=4095))break
v=l.x
v===$&&B.b()
t=l.ay++
q=l.y
q===$&&B.b()
q=q[s]
v.$flags&2&&B.C(v)
v[t]=q
s=l.z[s]
r=m}if(m>=4095||s>4095)return!1
v=l.x
v===$&&B.b()
t=l.ay
q=l.ay=t+1
v.$flags&2&&B.C(v)
v[t]=s
t=q
while(!0){if(!(t!==0&&w<x))break
u=w+1
t=l.ay=t-1
q=v[t]
k&2&&B.C(d)
d[w]=q
w=u}}v=l.CW
if(v!==4098&&l.z[l.db-2]===4098){t=l.z
t.toString
q=l.db-2
t.$flags&2&&B.C(t)
t[q]=v
p=l.ch
o=l.y
n=l.dy
if(p===q){o===$&&B.b()
v=l.a4p(t,v,n)
o.$flags&2&&B.C(o)
o[q]=v}else{o===$&&B.b()
p.toString
v=l.a4p(t,p,n)
o.$flags&2&&B.C(o)
o[q]=v}}v=l.ch
v.toString
l.CW=v}}return!0},
b_3(){var x,w,v,u,t=this
if(t.cy>12)return null
for(;x=t.ax,w=t.cy,x<w;){x=t.aWk()
x.toString
w=t.at
v=t.ax
t.at=(w|D.c.eU(x,v))>>>0
t.ax=v+8}v=t.at
u=C.atu[w]
t.at=D.c.h1(v,w)
t.ax=x-w
x=t.db
if(x<4097){++x
t.db=x
x=x>t.cx&&w<12}else x=!1
if(x){t.cx=t.cx<<1>>>0
t.cy=w+1}return v&u},
a4p(d,e,f){var x,w,v=0
while(!0){if(e>f){x=v+1
w=v<=4095
v=x}else w=!1
if(!w)break
if(e>4095)return 4098
e=d[e]}return e},
aWk(){var x,w,v=this,u=v.w,t=u[0],s=u.$flags|0
if(t===0){t=v.f.ct()
s&2&&B.C(u)
u[0]=t
u=v.w
t=u[0]
if(t===0)return null
D.B.hZ(u,1,1+t,v.f.jd(t).hL())
u=v.w
x=u[1]
u.$flags&2&&B.C(u)
u[1]=2
u[0]=u[0]-1}else{w=u[1]
s&2&&B.C(u)
u[1]=w+1
x=u[w]
u[0]=t-1}return x}}
A.Pe.prototype={
J(){return"IcoType."+this.b}}
A.bhP.prototype={}
A.arb.prototype={}
A.bhN.prototype={
gb5(d){return D.c.b4(A.FR.prototype.gb5.call(this,0),2)},
gOP(){return!(this.d===40&&this.f===32)&&A.FR.prototype.gOP.call(this)}}
A.bhO.prototype={
mX(d,e,f){var x,w,v,u=this,t=A.cY(e,!1,null,0)
u.a=t
x=u.b=A.cCo(t)
if(x==null)return null
t=x.e.length
if(t===1)return u.kf(0)
for(w=null,v=0;v<u.b.e.length;++v){f=u.kf(v)
if(f==null)continue
if(w==null){f.w=C.bm
w=f}else w.ny(f)}return w},
kf(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=this.a
if(a7!=null){x=this.b
x=x==null||a8>=x.d}else x=!0
if(x)return a6
w=this.b.e[a8]
x=a7.a
a7=a7.b+w.e
v=w.d
u=J.cqC(x,a7,a7+v)
t=new A.awV(A.cCU())
y.D.a(u)
if(t.I9(u))return t.dj(0,u)
s=A.qo(!1,14)
s.ld(19778)
s.j0(v)
s.j0(0)
s.j0(0)
a7=A.cY(u,!1,a6,0)
x=A.czc(A.cY(J.df(D.B.gaj(s.c),0,s.a),!1,a6,0))
v=a7.d
r=a7.a3()
q=a7.a3()
p=$.hx()
p.$flags&2&&B.C(p)
p[0]=q
q=$.kJ()
o=q[0]
p[0]=a7.a3()
q=q[0]
n=a7.am()
m=a7.am()
l=C.QW[a7.a3()]
a7.a3()
p[0]=a7.a3()
p[0]=a7.a3()
p=a7.a3()
a7.a3()
k=new A.bhN(x,o,q,r,n,m,l,p,v)
k.aiy(a7,x)
if(r!==40&&n!==1)return a6
j=p===0&&m<=8?40+4*D.c.en(1,m):40+4*p
x.b=j
s.a-=4
s.j0(j)
i=A.cY(u,!1,a6,0)
h=new A.b7L(!0)
h.a=i
h.b=k
g=h.kf(0)
if(m>=32)return g
f=32-D.c.an(o,32)
e=D.c.b4(f===32?o:o+f,8)
for(a7=1/q<0,x=q<0,q=q===0,d=0;d<D.c.b4(A.FR.prototype.gb5.call(k,0),2);++d){if(!(q?a7:x))a0=d
else{v=g.a
v=v==null?a6:v.b
a0=(v==null?0:v)-1-d}a1=i.ji(e)
i.d=i.d+(a1.c-a1.d)
v=g.a
a2=v==null?a6:v.ec(0,a0,a6)
if(a2==null)a2=new A.fi()
for(a3=0;a3<o;){a4=J.v(a1.a,a1.d++)
a5=7
while(!0){if(!(a5>-1&&a3<o))break
if((a4&D.c.eU(1,a5))>>>0!==0)a2.saE(0,0)
a2.q();++a3;--a5}}}return g}}
A.akL.prototype={}
A.Ht.prototype={}
A.Hu.prototype={}
A.a06.prototype={
gp(d){return this.a}}
A.bjv.prototype={}
A.Ca.prototype={}
A.bjx.prototype={
QU(d){var x,w,v,u,t,s=this,r=A.cY(d,!0,null,0)
s.a=r
x=r.Sr(2,0)
if(J.v(x.a,x.d)!==255||J.v(x.a,x.d+1)!==216)return!1
if(s.FI()!==216)return!1
w=s.FI()
v=!1
u=!1
while(!0){if(w!==217){r=s.a
r=r.d<r.c}else r=!1
if(!r)break
t=s.a.am()
if(t<2)break
r=s.a
r.d=r.d+(t-2)
switch(w){case 192:case 193:case 194:v=!0
break
case 218:u=!0
break}w=s.FI()}return v&&u},
vo(d,e){var x,w,v,u,t,s,r,q,p=this
p.a=A.cY(e,!0,null,0)
p.bi4()
if(p.x.length!==1)throw B.l(A.c6("Only single frame JPEGs supported"))
for(x=p.Q,w=0;v=p.d,u=v.z,w<u.length;++w){t=v.y.i(0,u[w])
v=t.a
u=p.d
s=u.f
r=t.b
q=u.r
u=p.aWt(u,t)
v=v===1&&s===2?1:0
x.push(new A.akL(u,v,r===1&&q===2?1:0))}},
bi4(){var x,w,v,u,t,s=this
if(s.FI()!==216)throw B.l(A.c6("Start Of Image marker not found."))
x=s.FI()
while(!0){if(x!==217){w=s.a
w===$&&B.b()
w=w.d<w.c}else w=!1
if(!w)break
w=s.a
w===$&&B.b()
v=w.am()
if(v<2)B.a5(A.c6("Invalid Block"))
w=s.a
u=w.ji(v-2)
w.d=w.d+(u.c-u.d)
switch(x){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:s.bi5(x,u)
break
case 219:s.bi8(u)
break
case 192:case 193:case 194:s.bia(x,u)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw B.l(A.c6("Unhandled frame type "+D.c.lM(x,16)))
case 196:s.bi7(u)
break
case 221:s.e=u.am()
break
case 218:s.bin(u)
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
break}if(x!==0)throw B.l(A.c6("Unknown JPEG marker "+D.c.lM(x,16)))
break}x=s.FI()}},
FI(){var x,w=this,v=w.a
v===$&&B.b()
if(v.d>=v.c)return 0
do{do{x=w.a.ct()
if(x!==255){v=w.a
v=v.d<v.c}else v=!1}while(v)
v=w.a
if(v.d>=v.c)return x
do{x=w.a.ct()
if(x===255){v=w.a
v=v.d<v.c}else v=!1}while(v)
if(x===0){v=w.a
v=v.d<v.c}else v=!1}while(v)
return x},
bi9(d){if(d.a3()!==1165519206)return
if(d.am()!==0)return
this.r.vo(0,d)},
bi5(d,e){var x,w,v,u,t=this,s=e
if(d===224){x=s
w=!1
if(J.v(x.a,x.d)===74){x=s
if(J.v(x.a,x.d+1)===70){x=s
if(J.v(x.a,x.d+2)===73){x=s
if(J.v(x.a,x.d+3)===70){x=s
x=J.v(x.a,x.d+4)===0}else x=w}else x=w}else x=w}else x=w
if(x){x=new A.bjB()
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
s.Sr(14+3*w*v,14)}}else if(d===225)t.bi9(s)
else if(d===238){x=s
w=!1
if(J.v(x.a,x.d)===65){x=s
if(J.v(x.a,x.d+1)===100){x=s
if(J.v(x.a,x.d+2)===111){x=s
if(J.v(x.a,x.d+3)===98){x=s
if(J.v(x.a,x.d+4)===101){x=s
x=J.v(x.a,x.d+5)===0}else x=w}else x=w}else x=w}else x=w}else x=w
if(x){t.c=new A.bjv()
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
x.d=J.v(w.a,w.d+11)}}else if(d===254)try{s.bJO()}catch(u){B.b0(u)}},
bi8(d){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=this.w;v=d.d,u=v<x,u;){u=d.a
d.d=v+1
t=J.v(u,v)
s=D.c.S(t,4)
t&=15
if(t>=4)throw B.l(A.c6("Invalid number of quantization tables"))
v=w[t]
if(v==null){v=new Int16Array(64)
w[t]=v}for(u=s!==0,r=0;r<64;++r){q=u?d.am():J.v(d.a,d.d++)
p=C.vN[r]
v.$flags&2&&B.C(v)
v[p]=q}}if(u)throw B.l(A.c6("Bad length for DQT block"))},
bia(d,e){var x,w,v,u,t,s,r,q=this
if(q.d!=null)throw B.l(A.c6("Duplicate JPG frame data found."))
x=q.d=new A.as1(B.I(y.p,y.c),B.a([],y.t))
x.b=d===194
x.c=e.ct()
x=q.d
x.toString
x.d=e.am()
x=q.d
x.toString
x.e=e.am()
w=e.ct()
for(x=q.w,v=0;v<w;++v){u=J.v(e.a,e.d++)
t=J.v(e.a,e.d++)
s=D.c.S(t,4)
r=J.v(e.a,e.d++)
q.d.z.push(u)
q.d.y.m(0,u,new A.Ca(s&15,t&15,x,r))}q.d.bID()
q.x.push(q.d)},
bi7(d){var x,w,v,u,t,s,r,q,p,o,n,m
for(x=d.c,w=this.z,v=this.y;u=d.d,u<x;){t=d.a
d.d=u+1
s=J.v(t,u)
r=new Uint8Array(16)
for(q=0,p=0;p<16;++p){r[p]=J.v(d.a,d.d++)
q+=r[p]}o=d.ji(q)
d.d=d.d+(o.c-o.d)
n=o.hL()
if((s&16)!==0){s-=16
m=v}else m=w
if(m.length<=s)D.b.su(m,s+1)
m[s]=this.aWG(r,n)}},
bin(d){var x,w,v,u,t,s,r,q=this,p=d.ct()
if(p<1||p>4)throw B.l(A.c6("Invalid SOS block"))
x=B.rr(p,new A.bjy(q,d),!0,y.c)
w=d.ct()
v=d.ct()
u=d.ct()
t=D.c.S(u,4)
s=q.a
s===$&&B.b()
r=q.d
t=new A.as2(s,r,x,q.e,w,v,t&15,u&15)
s=r.w
s===$&&B.b()
t.f=s
t.r=r.b
t.oe(0)},
aWG(d,e){var x,w,v,u,t,s,r,q,p,o,n=B.a([],y.C),m=16
while(!0){if(!(m>0&&d[m-1]===0))break;--m}x=y.aH
n.push(new A.Uw(B.a([],x)))
w=n[0]
for(v=0,u=0;u<m;){for(t=0;t<d[u];++t){w=n.pop()
s=w.a
r=s.length
q=w.b
if(r<=q)D.b.su(s,q+1)
s[w.b]=new A.a06(e[v])
for(;s=w.b,s>0;)w=n.pop()
w.b=s+1
n.push(w)
for(;n.length<=u;w=p){s=B.a([],x)
p=new A.Uw(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.su(r,o+1)
r[w.b]=new A.Hu(s)}++v}++u
if(u<m){s=B.a([],x)
p=new A.Uw(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.su(r,o+1)
r[w.b]=new A.Hu(s)
w=p}}return n[0].a},
aWt(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.e
d===$&&B.b()
x=a1.f
x===$&&B.b()
w=d<<3>>>0
v=new Int32Array(64)
u=new Uint8Array(64)
t=B.bO(x*8,null,!1,y.ac)
for(s=a1.c,r=a1.d,q=0,p=0;p<x;++p){o=p<<3>>>0
for(n=0;n<8;++n,q=m){m=q+1
t[q]=new Uint8Array(w)}for(l=0;l<d;++l){k=s[r]
k.toString
j=a1.r
j===$&&B.b()
A.dj4(k,j[p][l],u,v)
i=l<<3>>>0
for(h=0,g=0;g<8;++g){f=t[o+g]
for(n=0;n<8;++n,h=e){f.toString
e=h+1
k=u[h]
f.$flags&2&&B.C(f)
f[i+n]=k}}}}return t}}
A.Uw.prototype={}
A.as1.prototype={
bID(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.y,w=B.q(x).h("cg<1>"),v=new B.cg(x,x.r,x.e,w);v.q();){u=x.i(0,v.d)
g.f=Math.max(g.f,u.a)
g.r=Math.max(g.r,u.b)}v=g.e
v.toString
g.w=D.d.f8(v/8/g.f)
v=g.d
v.toString
g.x=D.d.f8(v/8/g.r)
for(w=new B.cg(x,x.r,x.e,w),v=y.h,t=y.bp;w.q();){s=x.i(0,w.d)
s.toString
r=g.e
r.toString
q=s.a
p=D.d.f8(D.d.f8(r/8)*q/g.f)
r=g.d
r.toString
o=s.b
n=D.d.f8(D.d.f8(r/8)*o/g.r)
m=g.w*q
l=g.x*o
k=J.iN(l,t)
for(j=0;j<l;++j){i=J.iN(m,v)
for(h=0;h<m;++h)i[h]=new Int32Array(64)
k[j]=i}s.e=p
s.f=n
s.r=k}}}
A.bjB.prototype={}
A.as2.prototype={
oe(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.y,f=g.length,e=h.r
e.toString
if(e)if(h.Q===0)x=h.at===0?h.gaZK():h.gaZM()
else x=h.at===0?h.gaZB():h.gaZD()
else x=h.gaZH()
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
p=D.c.hy(t,v)
o=D.c.an(t,v)
v=r.r
v===$&&B.b()
x.$2(r,v[p][o]);++t;++q}}else{q=0
while(!0){v=h.z
v.toString
if(!(q<v))break
for(s=0;s<f;++s){r=g[s]
n=r.a
m=r.b
for(l=0;l<m;++l)for(k=0;k<n;++k)h.aZS(r,x,t,l,k)}++t;++q}}h.ch=0
j=J.v(w.a,w.d)
i=J.v(w.a,w.d+1)
if(j===255)if(i>=208&&i<=215)w.d+=2
else break}},
BN(){var x,w=this,v=w.ch
if(v>0){--v
w.ch=v
return D.c.o2(w.ay,v)&1}v=w.a
if(v.d>=v.c)return null
x=v.ct()
w.ay=x
if(x===255)if(v.ct()!==0)return null
w.ch=7
return D.c.S(w.ay,7)&1},
LJ(d){var x,w=new A.Hu(d)
for(;x=this.BN(),x!=null;){if(w instanceof A.Hu)w=w.a[x]
if(w instanceof A.a06)return w.a}return null},
a6a(d){var x,w
for(x=0;d>0;){w=this.BN()
if(w==null)return null
x=(x<<1|w)>>>0;--d}return x},
M9(d){var x
if(d==null)return 0
if(d===1)return this.BN()===1?1:-1
x=this.a6a(d)
if(x==null)return 0
if(x>=D.c.eU(1,d-1))return x
return x+D.c.en(-1,d)+1},
aZI(d,e){var x,w,v,u,t,s,r=this,q=d.w
q===$&&B.b()
x=r.LJ(q)
w=x===0?0:r.M9(x)
q=d.y
q===$&&B.b()
q+=w
d.y=q
e.$flags&2&&B.C(e)
e[0]=q
for(v=1;v<64;){q=d.x
q===$&&B.b()
u=r.LJ(q)
if(u==null)break
t=u&15
s=u>>>4
if(t===0){if(s<15)break
v+=16
continue}v+=s
t=r.M9(t)
e[C.vN[v]]=t;++v}},
aZL(d,e){var x,w,v=d.w
v===$&&B.b()
x=this.LJ(v)
w=x===0?0:D.c.en(this.M9(x),this.ax)
v=d.y
v===$&&B.b()
v+=w
d.y=v
e.$flags&2&&B.C(e)
e[0]=v},
aZN(d,e){var x=e[0],w=this.BN()
w.toString
w=D.c.en(w,this.ax)
e.$flags&2&&B.C(e)
e[0]=(x|w)>>>0},
aZC(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.CW
if(o>0){p.CW=o-1
return}x=p.Q
w=p.as
for(o=p.ax,v=e.$flags|0;x<=w;){u=d.x
u===$&&B.b()
u=p.LJ(u)
u.toString
t=u&15
s=u>>>4
if(t===0){if(s<15){o=p.a6a(s)
o.toString
p.CW=o+D.c.en(1,s)-1
break}x+=16
continue}x+=s
r=C.vN[x]
u=p.M9(t)
q=D.c.en(1,o)
v&2&&B.C(e)
e[r]=u*q;++x}},
aZE(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.Q,n=p.as
$label0$1:for(x=p.ax,w=e.$flags|0,v=0;o<=n;){u=C.vN[o]
t=p.cx
switch(t){case 0:t=d.x
t===$&&B.b()
s=p.LJ(t)
if(s==null)throw B.l(A.c6("Invalid progressive encoding"))
r=s&15
v=s>>>4
if(r===0)if(v<15){t=p.a6a(v)
t.toString
p.CW=t+D.c.en(1,v)
p.cx=4}else{p.cx=1
v=16}else{if(r!==1)throw B.l(A.c6("invalid ACn encoding"))
p.cy=p.M9(r)
p.cx=v!==0?2:3}continue $label0$1
case 1:case 2:q=e[u]
if(q!==0){t=p.BN()
t.toString
t=D.c.en(t,x)
w&2&&B.C(e)
e[u]=q+t}else{--v
if(v===0)p.cx=t===2?3:0}break
case 3:t=e[u]
if(t!==0){q=p.BN()
q.toString
q=D.c.en(q,x)
w&2&&B.C(e)
e[u]=t+q}else{t=p.cy
t===$&&B.b()
t=D.c.en(t,x)
w&2&&B.C(e)
e[u]=t
p.cx=0}break
case 4:t=e[u]
if(t!==0){q=p.BN()
q.toString
q=D.c.en(q,x)
w&2&&B.C(e)
e[u]=t+q}break}++o}if(p.cx===4)if(--p.CW===0)p.cx=0},
aZS(d,e,f,g,h){var x,w,v=this.f
v===$&&B.b()
x=D.c.hy(f,v)*d.b+g
w=D.c.an(f,v)*d.a+h
v=d.r
v===$&&B.b()
if(x>=v.length)return
v=v[x]
if(w>=v.length)return
e.$2(d,v[w])}}
A.as0.prototype={
mX(d,e,f){var x=A.cD6()
x.vo(0,e)
if(x.x.length!==1)throw B.l(A.c6("only single frame JPEGs supported"))
return A.dhn(x)},
dj(d,e){return this.mX(0,e,null)}}
A.bjw.prototype={
J(){return"JpegChroma."+this.b}}
A.bjz.prototype={
aLA(d){d=D.d.C(D.c.b2(d,1,100))
if(this.at===d)return
this.baQ(d<50?D.d.fv(5000/d):D.c.fv(200-d*2))
this.at=d},
byU(b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=A.qo(!0,8192)
a8.z1(a9,216)
a8.z1(a9,224)
a9.ld(16)
a9.b1(74)
a9.b1(70)
a9.b1(73)
a9.b1(70)
a9.b1(0)
a9.b1(1)
a9.b1(1)
a9.b1(0)
a9.ld(1)
a9.ld(1)
a9.b1(0)
a9.b1(0)
a8.bqO(a9,b0.gwP())
a8.bqS(a9)
x=b0.gd0(0)
w=b0.gb5(0)
a8.z1(a9,192)
a9.ld(17)
a9.b1(8)
a9.ld(w)
a9.ld(x)
a9.b1(3)
a9.b1(1)
x=b1===C.K4
a9.b1(x?17:34)
a9.b1(0)
a9.b1(2)
a9.b1(17)
a9.b1(1)
a9.b1(3)
a9.b1(17)
a9.b1(1)
a8.bqR(a9)
a8.z1(a9,218)
a9.ld(12)
a9.b1(3)
a9.b1(1)
a9.b1(0)
a9.b1(2)
a9.b1(17)
a9.b1(3)
a9.b1(17)
a9.b1(0)
a9.b1(63)
a9.b1(0)
a8.ax=0
a8.ay=7
v=b0.gd0(0)
u=b0.gb5(0)
if(x){t=new Float32Array(64)
s=new Float32Array(64)
r=new Float32Array(64)
for(x=a8.c,w=a8.d,q=0,p=0,o=0,n=0;n<u;n+=8)for(m=0;m<v;m+=8){a8.KL(b0,m,n,v,u,t,s,r)
l=a8.e
k=a8.r
k===$&&B.b()
q=a8.we(a9,t,x,q,l,k)
k=a8.f
l=a8.w
l===$&&B.b()
p=a8.we(a9,s,w,p,k,l)
o=a8.we(a9,r,w,o,a8.f,a8.w)}}else{x=y.z
t=J.ku(4,x)
for(j=0;j<4;++j)t[j]=new Float32Array(64)
s=J.ku(4,x)
for(j=0;j<4;++j)s[j]=new Float32Array(64)
r=J.ku(4,x)
for(j=0;j<4;++j)r[j]=new Float32Array(64)
i=new Float32Array(64)
h=new Float32Array(64)
for(x=a8.c,w=a8.d,q=0,p=0,o=0,n=0;n<u;n+=16)for(l=n+8,m=0;m<v;m+=16){k=t[0]
g=s[0]
f=r[0]
a8.KL(b0,m,n,v,u,k,g,f)
e=m+8
d=t[1]
a0=s[1]
a1=r[1]
a8.KL(b0,e,n,v,u,d,a0,a1)
a2=t[2]
a3=s[2]
a4=r[2]
a8.KL(b0,m,l,v,u,a2,a3,a4)
a5=t[3]
a6=s[3]
a7=r[3]
a8.KL(b0,e,l,v,u,a5,a6,a7)
a8.alJ(i,g,a0,a3,a6)
a8.alJ(h,f,a1,a4,a7)
a7=a8.e
a4=a8.r
a4===$&&B.b()
q=a8.we(a9,a5,x,a8.we(a9,a2,x,a8.we(a9,d,x,a8.we(a9,k,x,q,a7,a4),a8.e,a8.r),a8.e,a8.r),a8.e,a8.r)
a4=a8.f
a7=a8.w
a7===$&&B.b()
p=a8.we(a9,i,w,p,a4,a7)
o=a8.we(a9,h,w,o,a8.f,a8.w)}}x=a8.ay
if(x>=0){++x
a8.wn(a9,B.a([D.c.eU(1,x)-1,x],y.t))}a8.z1(a9,217)
return J.df(D.B.gaj(a9.c),0,a9.a)},
KL(d,e,f,g,h,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(x=this.as,w=a0.$flags|0,v=a1.$flags|0,u=a2.$flags|0,t=f+1,s=0;s<64;++s){r=s>>>3
q=f+r
p=e+(s&7)
if(q>=h)q-=t+r-h
if(p>=g)p-=p-g+1
o=d.a
n=o==null?null:o.ec(p,q,null)
if(n==null)n=new A.fi()
if(n.gdu()!==C.a8)n=n.od(C.a8)
if(n.gu(n)>3){m=n.gfs()
l=1-m
n.saf(0,D.d.aV(n.gaf(n)*m+C.zi.i(0,0)*l))
n.sap(D.d.aV(n.gap()*m+C.zi.i(0,0)*l))
n.sau(0,D.d.aV(n.gau(n)*m+C.zi.i(0,0)*l))}k=D.d.C(n.gaf(n))
j=D.d.C(n.gap())
i=D.d.C(n.gau(n))
o=D.c.S(x[k]+x[j+256]+x[i+512],16)
w&2&&B.C(a0)
a0[s]=o-128
o=D.c.S(x[k+768]+x[j+1024]+x[i+1280],16)
v&2&&B.C(a1)
a1[s]=o-128
o=D.c.S(x[k+1280]+x[j+1536]+x[i+1792],16)
u&2&&B.C(a2)
a2[s]=o-128}},
alJ(d,e,f,g,h){var x,w,v,u,t,s,r,q
for(x=d.$flags|0,w=0;w<64;++w){if(w<32)v=D.c.an(w,8)<4?e:f
else v=D.c.an(w,8)<4?g:h
u=(D.c.b4(D.c.an(w,32),8)<<4>>>0)+(D.c.an(w,4)<<1>>>0)
t=v[u]
s=v[u+1]
r=v[u+8]
q=v[u+9]
x&2&&B.C(d)
d[w]=(t+s+r+q)/4}},
z1(d,e){d.b1(255)
d.b1(e&255)},
baQ(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.a,w=x.$flags|0,v=0;v<64;++v){u=D.d.fv((C.ayW[v]*d+50)/100)
if(u<1)u=1
else if(u>255)u=255
t=C.rd[v]
w&2&&B.C(x)
x[t]=u}for(w=g.b,t=w.$flags|0,s=0;s<64;++s){r=D.d.fv((C.asm[s]*d+50)/100)
if(r<1)r=1
else if(r>255)r=255
q=C.rd[s]
t&2&&B.C(w)
w[q]=r}for(t=g.c,q=t.$flags|0,p=g.d,o=p.$flags|0,n=0,m=0;m<8;++m)for(l=0;l<8;++l){k=C.rd[n]
j=x[k]
i=C.Ls[m]
h=C.Ls[l]
q&2&&B.C(t)
t[n]=1/(j*i*h*8)
k=w[k]
o&2&&B.C(p)
p[n]=1/(k*i*h*8);++n}},
T9(d,e){var x,w,v,u,t,s=y.t,r=B.a([B.a([],s)],y.cQ)
for(x=0,w=0,v=1;v<=16;++v){for(u=1;u<=d[v];++u){t=e[w]
if(r.length<=t)D.b.su(r,t+1)
r[t]=B.a([x,v],s);++w;++x}x*=2}return r},
baF(){var x,w,v,u,t,s,r,q,p,o,n
for(x=this.y,w=this.x,v=y.t,u=1,t=2,s=1;s<=15;++s){for(r=u;r<t;++r){q=32767+r
x[q]=s
w[q]=B.a([r,s],v)}for(q=t-1,p=-q,o=-u;p<=o;++p){n=32767+p
x[n]=s
w[n]=B.a([q+p,s],v)}u=u<<1>>>0
t=t<<1>>>0}},
baR(){var x,w,v
for(x=this.as,w=x.$flags|0,v=0;v<256;++v){w&2&&B.C(x)
x[v]=19595*v
x[v+256]=38470*v
x[v+512]=7471*v+32768
x[v+768]=-11059*v
x[v+1024]=-21709*v
x[v+1280]=32768*v+8421375
x[v+1536]=-27439*v
x[v+1792]=-5329*v}},
b1B(d4,d5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3
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
x&2&&B.C(d4)
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
x&2&&B.C(d4)
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
bqO(d,e){var x,w
if(e.gV(0))return
x=A.qo(!1,8192)
e.jE(0,x)
w=J.df(D.B.gaj(x.c),0,x.a)
this.z1(d,225)
d.ld(w.length+8)
d.j0(1165519206)
d.ld(0)
d.m7(w)},
bqS(d){var x,w,v
this.z1(d,219)
d.ld(132)
d.b1(0)
for(x=this.a,w=0;w<64;++w)d.b1(x[w])
d.b1(1)
for(x=this.b,v=0;v<64;++v)d.b1(x[v])},
bqR(d){var x,w,v,u,t,s,r,q
this.z1(d,196)
d.ld(418)
d.b1(0)
for(x=0;x<16;){++x
d.b1(C.SB[x])}for(w=0;w<=11;++w)d.b1(C.qH[w])
d.b1(16)
for(v=0;v<16;){++v
d.b1(C.Kx[v])}for(u=0;u<=161;++u)d.b1(C.LR[u])
d.b1(1)
for(t=0;t<16;){++t
d.b1(C.Nu[t])}for(s=0;s<=11;++s)d.b1(C.qH[s])
d.b1(17)
for(r=0;r<16;){++r
d.b1(C.Mj[r])}for(q=0;q<=161;++q)d.b1(C.ON[q])},
we(d,e,f,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=a2[0],h=a2[240],g=j.b1B(e,f)
for(x=j.Q,w=0;w<64;++w)x[C.rd[w]]=g[w]
v=x[0]
v.toString
u=v-a0
if(u===0){t=a1[0]
t.toString
j.wn(d,t)}else{s=32767+u
a1.toString
t=j.y[s]
t.toString
t=a1[t]
t.toString
j.wn(d,t)
t=j.x[s]
t.toString
j.wn(d,t)}r=63
while(!0){if(!(r>0&&x[r]===0))break;--r}if(r===0){i.toString
j.wn(d,i)
return v}for(t=j.y,q=j.x,p=1;p<=r;){o=p
while(!0){if(!(x[o]===0&&o<=r))break;++o}n=o-p
if(n>=16){m=D.c.S(n,4)
for(l=1;l<=m;++l){h.toString
j.wn(d,h)}n&=15}k=x[o]
k.toString
s=32767+k
k=t[s]
k.toString
k=a2[(n<<4>>>0)+k]
k.toString
j.wn(d,k)
k=q[s]
k.toString
j.wn(d,k)
p=o+1}if(r!==63){i.toString
j.wn(d,i)}return v},
wn(d,e){var x,w=this,v=e[0],u=e[1]-1
for(;u>=0;){if((v&D.c.eU(1,u))>>>0!==0)w.ax=(w.ax|D.c.eU(1,w.ay))>>>0;--u
if(--w.ay<0){x=w.ax
if(x===255){d.b1(255)
d.b1(0)}else d.b1(x)
w.ay=7
w.ax=0}}}}
A.QY.prototype={
J(){return"PngDisposeMode."+this.b}}
A.a3h.prototype={
J(){return"PngBlendMode."+this.b}}
A.a3i.prototype={}
A.arQ.prototype={}
A.D0.prototype={
J(){return"PngFilterType."+this.b}}
A.bt3.prototype={}
A.bj7.prototype={}
A.awV.prototype={
I9(d){var x,w=A.cY(d,!0,null,0).jd(8)
for(x=0;x<8;++x)if(J.v(w.a,w.d+x)!==D.Ra[x])return!1
return!0},
oE(b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=A.cY(b4,!0,b2,0)
b1.d=b3
x=b3.jd(8)
for(w=0;w<8;++w)if(J.v(x.a,x.d+w)!==D.Ra[w])return b2
for(b3=b1.a,v=b3.cx,u=y.t,t=b3.cy,s=y.L,r=b3.ax;!0;){q=b1.d
p=q.d-q.b
o=q.a3()
n=b1.d.je(4)
switch(n){case"tEXt":q=b1.d
m=q.ji(o)
q.d=q.d+(m.c-m.d)
l=m.hL()
k=l.length
for(w=0;w<k;++w)if(l[w]===0){q=w+1
r.m(0,D.e2.dj(0,new Uint8Array(l.subarray(0,B.qQ(0,w,k)))),D.e2.dj(0,new Uint8Array(l.subarray(q,B.qQ(q,b2,k)))))
break}b1.d.d+=4
break
case"pHYs":q=b1.d
m=q.ji(o)
q.d=q.d+(m.c-m.d)
j=A.ca(m,b2,0)
j.a3()
j.a3()
J.v(j.a,j.d++)
b1.d.d+=4
break
case"IHDR":q=b1.d
m=q.ji(o)
q.d=q.d+(m.c-m.d)
i=A.ca(m,b2,0)
h=i.hL()
b3.a=i.a3()
b3.b=i.a3()
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
break}if(b1.d.a3()!==A.xs(h,A.xs(new B.e9(n),0)))throw B.l(A.c6("Invalid "+n+" checksum"))
break
case"PLTE":q=b1.d
m=q.ji(o)
q.d=q.d+(m.c-m.d)
b3.w=m.hL()
if(b1.d.a3()!==A.xs(s.a(b3.w),A.xs(new B.e9(n),0)))throw B.l(A.c6("Invalid "+n+" checksum"))
break
case"tRNS":q=b1.d
m=q.ji(o)
q.d=q.d+(m.c-m.d)
b3.x=m.hL()
g=b1.d.a3()
q=b3.x
q.toString
if(g!==A.xs(q,A.xs(new B.e9(n),0)))throw B.l(A.c6("Invalid "+n+" checksum"))
break
case"IEND":b1.d.d+=4
break
case"gAMA":if(o!==4)throw B.l(A.c6("Invalid gAMA chunk"))
b1.d.a3()
b1.d.d+=4
break
case"IDAT":t.push(p)
q=b1.d
f=q.d+=o
q.d=f+4
break
case"acTL":b3.ch=b1.d.a3()
b1.d.a3()
b1.d.d+=4
break
case"fcTL":b1.d.a3()
e=b1.d.a3()
d=b1.d.a3()
a0=b1.d.a3()
a1=b1.d.a3()
a2=b1.d.am()
a3=b1.d.am()
q=b1.d
a4=J.v(q.a,q.d++)
q=b1.d
a5=J.v(q.a,q.d++)
q=C.apX[a4]
f=C.awj[a5]
v.push(new A.arQ(B.a([],u),e,d,a0,a1,a2,a3,q,f))
b1.d.d+=4
break
case"fdAT":b1.d.a3()
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
if(q!=null){q=D.B.n(q,a6)?0:255
f=new Uint8Array(4)
f[0]=a8
f[1]=a9
f[2]=b0
f[3]=q
b3.z=new A.Nt(f)}else{q=new Uint8Array(3)
q[0]=a8
q[1]=a9
q[2]=b0
b3.z=new A.akG(q)}}else if(q===0||q===4){b1.d.am()
o-=2}else if(q===2||q===6){q=b1.d
q.am()
q.am()
q.am()
o-=24}if(o>0)b1.d.d+=o
b1.d.d+=4
break
case"iCCP":b3.Q=b1.d.Qe()
q=b1.d
J.v(q.a,q.d++)
q=b3.Q
f=b1.d
m=f.ji(o-(q.length+2))
f.d=f.d+(m.c-m.d)
b3.at=m.hL()
b1.d.d+=4
break
default:q=b1.d
f=q.d+=o
q.d=f+4
break}if(n==="IEND")break
q=b1.d
if(q.d>=q.c)return b2}return b3},
kf(b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=null,b4=b1.a,b5=b4.a,b6=b4.b,b7=b4.cx,b8=b7.length
if(b8===0||b9===0){w=B.a([],y.a)
b7=b4.cy
v=b7.length
for(u=0,t=0;t<v;++t){b8=b1.d
b8===$&&B.b()
b8.d=b7[t]
s=b8.a3()
r=b1.d.je(4)
b8=b1.d
q=b8.ji(s)
b8.d=b8.d+(q.c-q.d)
p=q.hL()
u+=p.length
w.push(p)
if(b1.d.a3()!==A.xs(p,A.xs(new B.e9(r),0)))throw B.l(A.c6("Invalid "+r+" checksum"))}b3=new Uint8Array(u)
for(b7=w.length,o=0,n=0;n<w.length;w.length===b7||(0,B.Q)(w),++n){p=w[n]
J.cqB(b3,o,p)
o+=p.length}}else{if(b9>=b8)throw B.l(A.c6("Invalid Frame Number: "+b9))
m=b7[b9]
b5=m.b
b6=m.c
w=B.a([],y.a)
for(b7=m.y,u=0,t=0;t<b7.length;++t){b8=b1.d
b8===$&&B.b()
b8.d=b7[t]
s=b8.a3()
b8=b1.d
b8.je(4)
b8.d+=4
b8=b1.d
q=b8.ji(s-4)
b8.d=b8.d+(q.c-q.d)
p=q.hL()
u+=p.length
w.push(p)}b3=new Uint8Array(u)
for(b7=w.length,o=0,n=0;n<w.length;w.length===b7||(0,B.Q)(w),++n){p=w[n]
J.cqB(b3,o,p)
o+=p.length}}b7=b4.d
l=1
if(!(b7===3))if(!(b7===0)){if(b7===4)b7=2
else b7=b7===6?4:3
l=b7}x=null
try{x=C.iY.Cs(b3)}catch(k){return b2}j=A.cY(x,!0,b2,0)
b1.c=b1.b=0
i=b2
if(b4.d===3){b7=b4.w
if(b7!=null){h=b7.length/3|0
g=b4.x
b8=g!=null
f=b8?g.length:0
e=b8?4:3
i=new A.uq(new Uint8Array(h*e),h,e)
for(b8=e===4,t=0,d=0;t<h;++t,d+=3){a0=b8&&t<f?g[t]:255
i.RZ(t,b7[d],b7[d+1],b7[d+2],a0)}}}if(b4.d===0&&b4.x!=null&&i==null&&b4.c<=8){g=b4.x
a1=g.length
b7=b4.c
h=D.c.eU(1,b7)
i=new A.uq(new Uint8Array(h*4),h,4)
if(b7===1)a2=255
else if(b7===2)a2=85
else{b7=b7===4?17:1
a2=b7}for(t=0;t<h;++t){a3=t*a2
i.RZ(t,a3,a3,a3,255)}for(b7=i.b,b8=3<b7,a4=i.c,a5=a4.$flags|0,t=0;t<a1;t+=2){a6=(g[t]&255)<<8|g[t+1]&255
if(a6<h)if(b8){a5&2&&B.C(a4)
a4[a6*b7+3]=0}}}b7=b4.c
if(b7===1)a7=C.fn
else if(b7===2)a7=C.h6
else{if(b7===4)b8=C.h7
else b8=b7===16?C.ch:C.a8
a7=b8}b8=b4.d
if(b8===0&&b4.x!=null&&b7>8)l=4
a8=A.hT(b2,b2,a7,0,C.bm,b6,b2,0,b8===2&&b4.x!=null?4:l,i,C.a8,b5,!1)
a9=b4.a
b0=b4.b
b4.a=b5
b4.b=b6
b1.e=0
if(b4.r!==0){b7=b6+7>>>3
b1.BM(j,a8,0,0,8,8,b5+7>>>3,b7)
b8=b5+3
b1.BM(j,a8,4,0,8,8,b8>>>3,b7)
b7=b6+3
b1.BM(j,a8,0,4,4,8,b8>>>2,b7>>>3)
b8=b5+1
b1.BM(j,a8,2,0,4,4,b8>>>2,b7>>>2)
b7=b6+1
b1.BM(j,a8,0,2,2,4,b8>>>1,b7>>>2)
b1.BM(j,a8,1,0,2,2,b5>>>1,b7>>>1)
b1.BM(j,a8,0,1,1,2,b5,b6>>>1)}else b1.bhg(j,a8)
b4.a=a9
b4.b=b0
b7=b4.at
if(b7!=null)a8.c=new A.a08(b4.Q,C.Ad,b7)
b4=b4.ax
if(b4.a!==0)a8.brJ(b4)
return a8},
mX(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(g.oE(e)==null)return f
x=g.a
w=x.cx
v=w.length
if(v===0){x=g.kf(0)
x.toString
return x}for(v=y.g,u=f,t=u,s=0;s<x.ch;++s){a0=w[s]
r=g.kf(s)
if(r==null)continue
if(t==null||u==null){t=r.ayC(r.gqi())
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
o=o===(n==null?0:n)&&a0.d===0&&a0.e===0&&a0.x===C.a1M}else o=!1
if(o){q=a0.f
r.y=D.d.C((q===0||a0.r===0?0:q/a0.r)*1000)
t.ny(r)
u=r
continue}i=t.x
u=A.BQ((i===$?t.x=B.a([],v):i)[q],!1,!1)
h=p.w
if(h===C.a1O){q=p.d
o=p.e
n=x.z
if(n==null){n=new Uint8Array(4)
m=new A.Nt(n)
n[0]=0
n[1]=0
n[2]=0
n[3]=0
n=m}A.dgJ(u,!1,n,q,q+p.b-1,o,o+p.c-1)}else if(h===C.a1P&&s>1){i=t.x
if(i===$)i=t.x=B.a([],v)
q=p.d
o=p.e
n=p.b
m=p.c
u=A.cwj(u,i[s-2],C.yq,m,n,q,o,m,n,q,o)}q=a0.f
u.y=D.d.C((q===0||a0.r===0?0:q/a0.r)*1000)
q=a0.x===C.a1N?C.yq:C.yp
u=A.cwj(u,r,q,f,f,a0.d,a0.e,f,f,f,f)
t.ny(u)}return t},
dj(d,e){return this.mX(0,e,null)},
BM(a0,a1,a2,a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=e.d
if(d===4)x=2
else if(d===2)x=3
else{d=d===6?4:1
x=d}w=x*e.c
v=D.c.S(w+7,3)
u=D.c.S(w*a6+7,3)
t=B.a([null,null],y.e)
s=B.a([0,0,0,0],y.t)
for(e=a4>1,r=a4-a2,q=a3,p=0,o=0;p<a7;++p,q+=a5,++f.e){n=C.Qe[J.v(a0.a,a0.d++)]
m=a0.ji(u)
a0.d=a0.d+(m.c-m.d)
d=m.hL()
t[o]=d
o=1-o
f.auw(n,v,d,t[o])
f.c=f.b=0
l=d.length
k=new A.lZ(d,0,Math.min(l,l),0,!0)
for(d=r<=1,j=a2,i=0;i<a6;++i,j+=a4){f.aru(k,s)
l=a1.a
l=l==null?null:l.ec(j,q,null)
f.a6G(l==null?new A.fi():l,s)
if(!d||e)for(h=0;h<a4;++h)for(l=q+h,g=0;g<r;++g)f.a6G(a1.ko(j+g,l),s)}}},
bhg(d,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a,e=f.d
if(e===4)x=2
else if(e===2)x=3
else{e=e===6?4:1
x=e}w=x*f.c
v=f.a
u=f.b
t=D.c.S(v*w+7,3)
s=D.c.S(w+7,3)
r=B.bO(t,0,!1,y.p)
q=B.a([r,r],y.S)
p=B.a([0,0,0,0],y.t)
f=a0.a
o=f.ga5(f)
o.q()
for(n=0,m=0;n<u;++n,m=j){l=C.Qe[J.v(d.a,d.d++)]
k=d.ji(t)
d.d=d.d+(k.c-k.d)
f=k.hL()
q[m]=f
j=1-m
g.auw(l,s,f,q[j])
g.c=g.b=0
f=q[m]
e=f.length
i=new A.lZ(f,0,Math.min(e,e),0,!0)
for(h=0;h<v;++h){g.aru(i,p)
g.a6G(o.gL(o),p)
o.q()}}},
auw(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=f.length
switch(d.a){case 0:break
case 1:for(x=e;x<l;++x)f[x]=f[x]+f[x-e]&255
break
case 2:for(w=g!=null,x=0;x<l;++x){v=w?g[x]:0
f[x]=f[x]+v&255}break
case 3:for(w=g!=null,x=0;x<l;++x){u=x<e?0:f[x-e]
v=w?g[x]:0
f[x]=f[x]+D.c.S(u+v,1)&255}break
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
tb(d,e){var x,w,v,u,t,s=this
if(e===0)return 0
if(e===8)return d.ct()
if(e===16)return d.am()
for(x=d.c;w=s.c,w<e;){w=d.d
if(w>=x)throw B.l(A.c6("Invalid PNG data."))
v=d.a
d.d=w+1
u=J.v(v,w)
w=s.c
s.b=D.c.eU(u,w)
s.c=w+8}if(e===1)t=1
else if(e===2)t=3
else{if(e===4)x=15
else x=0
t=x}x=w-e
w=D.c.h1(s.b,x)
s.c=x
return w&t},
aru(d,e){var x=this,w=x.a,v=w.d
switch(v){case 0:e[0]=x.tb(d,w.c)
return
case 2:e[0]=x.tb(d,w.c)
e[1]=x.tb(d,w.c)
e[2]=x.tb(d,w.c)
return
case 3:e[0]=x.tb(d,w.c)
return
case 4:e[0]=x.tb(d,w.c)
e[1]=x.tb(d,w.c)
return
case 6:e[0]=x.tb(d,w.c)
e[1]=x.tb(d,w.c)
e[2]=x.tb(d,w.c)
e[3]=x.tb(d,w.c)
return}throw B.l(A.c6("Invalid color type: "+v+"."))},
a6G(d,e){var x,w,v,u,t,s,r,q,p=this.a,o=p.d
switch(o){case 0:x=p.x
if(x!=null&&p.c>8){p=x[0]
o=x[1]
w=e[0]
d.iq(w,w,w,w!==((p&255)<<24|o&255)>>>0?d.gck():0)
return}d.kH(e[0],0,0)
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
if(v!==((o&255)<<8|t&255)||w!==((s&255)<<8|r&255)||u!==((q&255)<<8|p&255)){d.iq(v,w,u,d.gck())
return}}d.kH(v,w,u)
return
case 3:d.se6(0,e[0])
return
case 4:d.kH(e[0],e[1],0)
return
case 6:d.iq(e[0],e[1],e[2],e[3])
return}throw B.l(A.c6("Invalid color type: "+o+"."))}}
A.awW.prototype={
J(){return"PngFilter."+this.b}}
A.bt1.prototype={
ny(d){var x,w,v,u,t,s,r,q,p=this,o=8192,n=d.a
n=n==null?null:n.grv()
if(!(n===!0&&d.gdu()!==C.ch))n=d.gmU()<8&&!d.grq()&&d.gqi()>1
else n=!0
if(n)d=d.od(C.a8)
if(p.w==null){n=A.qo(!0,o)
p.w=n
n.m7(B.a([137,80,78,71,13,10,26,10],y.t))
x=A.qo(!0,o)
x.j0(d.gd0(0))
x.j0(d.gb5(0))
x.b1(d.gmU())
if(d.grq())n=3
else if(d.gqi()===1)n=0
else if(d.gqi()===2)n=4
else n=d.gqi()===3?2:6
x.b1(n)
x.b1(0)
x.b1(0)
x.b1(0)
n=p.w
n.toString
p.tj(n,"IHDR",J.df(D.B.gaj(x.c),0,x.a))
n=d.c
if(n!=null){x=A.qo(!0,o)
x.m7(new B.e9(n.a))
x.b1(0)
x.b1(0)
x.m7(n.buP())
n=p.w
n.toString
p.tj(n,"iCCP",J.df(D.B.gaj(x.c),0,x.a))}if(d.grq()){n=p.a
if(n!=null){n=n.a
n===$&&B.b()
p.aw4(n)}else{n=d.a
n=n==null?null:n.geS()
n.toString
p.aw4(n)}}if(p.r){x=A.qo(!0,o)
n=p.e
n===$&&B.b()
x.j0(n)
x.j0(p.c)
n=p.w
n.toString
p.tj(n,"acTL",J.df(D.B.gaj(x.c),0,x.a))}}w=d.grq()?1:d.gqi()
v=d.gdu()===C.ch?2:1
n=d.gd0(0)
u=d.gb5(0)
t=d.gb5(0)
s=new Uint8Array(n*u*w*v+t)
p.bhh(0,d,s)
r=C.Gc.aAd(s,p.d)
n=d.d
if(n!=null)for(n=new B.cg(n,n.r,n.e,B.q(n).h("cg<1>"));n.q();){u=n.d
t=d.d.i(0,u)
t.toString
x=new A.aw8(!0,new Uint8Array(8192))
x.m7(D.q1.cq(u))
x.b1(0)
x.m7(D.q1.cq(t))
u=p.w
u.toString
p.tj(u,"tEXt",J.df(D.B.gaj(x.c),0,x.a))}if(p.r){x=A.qo(!0,o)
x.j0(p.f)
x.j0(d.gd0(0))
x.j0(d.gb5(0))
x.j0(0)
x.j0(0)
x.ld(d.y)
x.ld(1000)
x.b1(1)
x.b1(0)
n=p.w
n.toString
p.tj(n,"fcTL",J.df(D.B.gaj(x.c),0,x.a));++p.f}if(p.f<=1){n=p.w
n.toString
p.tj(n,"IDAT",r)}else{q=A.qo(!0,o)
q.j0(p.f)
q.m7(r)
n=p.w
n.toString
p.tj(n,"fdAT",J.df(D.B.gaj(q.c),0,q.a));++p.f}},
bA0(d){var x,w=this,v=w.w
if(v==null)return null
w.tj(v,"IEND",B.a([],y.t))
w.f=0
v=w.w
x=J.df(D.B.gaj(v.c),0,v.a)
w.w=null
return x},
byV(d,e){var x,w,v,u,t,s=this,r=d.gl6().length
if(r<=1){s.e=1
s.r=!1
s.ny(d)}else{r=d.gl6().length
s.e=r
s.r=r>1
s.c=d.r
if(d.grq()){x=new A.bqx(new Int32Array(256))
x.bdr(256)
x.brr(d)
s.a=x
for(r=d.gl6(),w=r.length,v=0;v<r.length;r.length===w||(0,B.Q)(r),++v){u=r[v]
if(u!==d){x.apm(u)
x.amr()
x.ap2()
x.akT()}}}for(r=d.gl6(),w=r.length,v=0;v<r.length;r.length===w||(0,B.Q)(r),++v){u=r[v]
t=s.a
if(t!=null)s.ny(t.aIv(u))
else s.ny(u)}}r=s.bA0(0)
r.toString
return r},
aw4(d){var x,w,v,u=this
if(d.gdu()===C.a8&&d.b===3&&d.a===256){x=u.w
x.toString
u.tj(x,"PLTE",J.df(d.gaj(d),0,null))}else{x=d.a
w=A.qo(!0,x*3)
for(v=0;v<x;++v){w.b1(D.d.C(d.ni(v)))
w.b1(D.d.C(d.ng(v)))
w.b1(D.d.C(d.nf(v)))}x=u.w
x.toString
u.tj(x,"PLTE",J.df(D.B.gaj(w.c),0,w.a))}if(d.b===4){x=d.a
w=A.qo(!0,x)
for(v=0;v<x;++v)w.b1(D.d.C(d.oy(v)))
x=u.w
x.toString
u.tj(x,"tRNS",J.df(D.B.gaj(w.c),0,w.a))}},
tj(d,e,f){d.j0(f.length)
d.m7(new B.e9(e))
d.m7(f)
d.j0(A.xs(f,A.xs(new B.e9(e),0)))},
bhh(d,e,f){var x,w,v=this,u=e.grq()?C.aTW:v.b,t=e.gaj(0),s=e.a.grK(),r=e.grq()?1:e.gqi(),q=D.c.S(r*e.gmU()+7,3),p=e.gmU()+7>>>3,o=u.a,n=J.dy(t),m=0,l=0,k=null,j=0
while(!0){x=e.a
x=x==null?null:x.b
if(!(j<(x==null?0:x)))break
w=n.C6(t,l,s)
l+=s
switch(o){case 1:m=v.b1O(w,p,q,f,m)
break
case 2:m=v.b1R(w,k,p,f,m)
break
case 3:m=v.b1I(w,k,p,q,f,m)
break
case 4:m=v.b1L(w,k,p,q,f,m)
break
default:m=v.b1K(w,p,f,m)
break}++j
k=w}},
avZ(d,e,f,g,h){var x,w,v;--d
for(x=g.$flags|0;d>=0;h=w){w=h+1
v=e[f+d]
x&2&&B.C(g)
g[h]=v;--d}return h},
b1K(d,e,f,g){var x,w,v=g+1
f.$flags&2&&B.C(f)
f[g]=0
x=d.length
if(e===1)for(g=v,w=0;w<x;++w,g=v){v=g+1
f[g]=d[w]}else for(g=v,w=0;w<x;w+=e)g=this.avZ(e,d,w,f,g)
return g},
b1O(d,e,f,g,h){var x,w,v,u,t,s,r=h+1
g.$flags&2&&B.C(g)
g[h]=1
for(h=r,x=0;x<f;x+=e)h=this.avZ(e,d,x,g,h)
w=d.length
for(v=e-1,x=f;x<w;x+=e)for(u=v,t=0;t<e;++t,--u,h=r){r=h+1
s=x+u
g[h]=d[s]-d[s-f]&255}return h},
b1R(d,e,f,g,h){var x,w,v,u,t,s,r,q=h+1
g.$flags&2&&B.C(g)
g[h]=2
x=d.length
for(w=f-1,v=e!=null,h=q,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,h=q){r=v?e[u+t]:0
q=h+1
g[h]=d[u+t]-r&255}return h},
b1I(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o=i+1
h.$flags&2&&B.C(h)
h[i]=3
x=d.length
for(w=f-1,v=e==null,i=o,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=o){r=u+t
q=r<g?0:d[r-g]
p=v?0:e[r]
o=i+1
h[i]=d[r]-(q+p>>>1)}return i},
bfZ(d,e,f){var x=d+e-f,w=x>d?x-d:d-x,v=x>e?x-e:e-x,u=x>f?x-f:f-x
if(w<=v&&w<=u)return d
else if(v<=u)return e
return f},
b1L(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m=i+1
h.$flags&2&&B.C(h)
h[i]=4
x=d.length
for(w=f-1,v=e==null,i=m,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=m){r=u+t
q=r<g
p=q?0:d[r-g]
o=v?0:e[r]
n=q||v?0:e[r-g]
m=i+1
h[i]=d[r]-this.bfZ(p,o,n)&255}return i}}
A.D1.prototype={
J(){return"PnmFormat."+this.b}}
A.IW.prototype={}
A.bt4.prototype={
I9(d){var x
this.b=A.cY(d,!1,null,0)
x=this.U_()
if(x==="P1"||x==="P2"||x==="P5"||x==="P3"||x==="P6")return!0
return!1},
mX(d,e,f){if(this.oE(e)==null)return null
return this.kf(0)},
oE(d){var x,w,v=this
v.b=A.cY(d,!1,null,0)
x=v.U_()
if(x==="P1"){w=v.a=new A.IW(C.nA)
w.e=C.a1Q}else if(x==="P2"){w=v.a=new A.IW(C.nA)
w.e=C.a1R}else if(x==="P5"){w=v.a=new A.IW(C.nA)
w.e=C.Cl}else if(x==="P3"){w=v.a=new A.IW(C.nA)
w.e=C.a1S}else if(x==="P6"){w=v.a=new A.IW(C.nA)
w.e=C.Cm}else return v.b=null
w.a=v.M4()
w=v.a
w.toString
w.b=v.M4()
w=v.a
if(w.a===0||w.b===0)return v.a=v.b=null
return w},
kf(d){var x,w,v,u,t,s=this,r=null,q=s.a
if(q==null)return r
x=q.e
if(x===C.a1Q){x=q.a
w=A.hT(r,r,C.fn,0,C.bm,q.b,r,0,1,r,C.a8,x,!1)
for(q=w.a,q=q.ga5(q);q.q();){v=q.gL(q)
if(s.U_()==="1")v.kH(1,1,1)
else v.kH(0,0,0)}return w}else if(x===C.a1R||x===C.Cl){u=s.M4()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.hT(r,r,s.aAW(u),0,C.bm,q,r,0,1,r,C.a8,x,!1)
for(q=w.a,q=q.ga5(q);q.q();){v=q.gL(q)
t=s.Vi(s.a.e,u)
v.kH(t,t,t)}return w}else if(x===C.a1S||x===C.Cm){u=s.M4()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.hT(r,r,s.aAW(u),0,C.bm,q,r,0,3,r,C.a8,x,!1)
for(q=w.a,q=q.ga5(q);q.q();)q.gL(q).kH(s.Vi(s.a.e,u),s.Vi(s.a.e,u),s.Vi(s.a.e,u))
return w}return r},
aAW(d){if(d>255)return C.ch
if(d>15)return C.a8
if(d>3)return C.h7
if(d>1)return C.h6
return C.fn},
Vi(d,e){if(d===C.Cl||d===C.Cm)return this.b.ct()
return this.M4()},
M4(){var x,w,v=this.U_()
if(J.bA(v)===0)return 0
try{x=B.dz(v,null)
return x}catch(w){return 0}},
U_(){var x,w,v,u,t=this.b
if(t==null)return""
x=this.c
if(x.length!==0)return D.b.iE(x,0)
w=D.e.c7(t.bJN())
if(w.length===0)return""
for(;D.e.bg(w,"#");)w=D.e.c7(this.b.aEO(70))
t=y.U
v=B.F(new B.af(B.a(w.split(" "),y.T),new A.bt5(),t),!0,t.h("w.E"))
for(t=v.length,u=0;u<t;++u)if(D.e.bg(v[u],"#")){D.b.su(v,u)
break}D.b.I(x,v)
if(x.length===0)return""
return D.b.iE(x,0)}}
A.axr.prototype={}
A.axs.prototype={}
A.wy.prototype={}
A.axu.prototype={}
A.axv.prototype={}
A.axy.prototype={}
A.axz.prototype={}
A.a3B.prototype={}
A.axx.prototype={
gcs(d){return this.c}}
A.bu0.prototype={
aUd(d){var x,w,v,u,t=this
d.am()
d.am()
d.am()
d.am()
x=D.c.b4(d.c-d.d,8)
if(x>0){t.e=new Uint16Array(x)
t.f=new Uint16Array(x)
t.r=new Uint16Array(x)
t.w=new Uint16Array(x)
for(w=0;w<x;++w){v=t.e
u=d.am()
v.$flags&2&&B.C(v)
v[w]=u
u=t.f
v=d.am()
u.$flags&2&&B.C(u)
u[w]=v
v=t.r
u=d.am()
v.$flags&2&&B.C(v)
v[w]=u
u=t.w
v=d.am()
u.$flags&2&&B.C(u)
u[w]=v}}}}
A.Ra.prototype={
aEN(d,e,f,g,h,i,j){if(d.c-d.d<2)return
if(h==null)h=d.am()
switch(h){case 0:g.toString
this.bim(d,e,f,g)
break
case 1:if(i==null)i=this.bij(d,f)
g.toString
this.bil(d,e,f,g,i,j)
break
default:throw B.l(A.c6("Unsupported compression: "+h))}},
bJM(d,e,f,g){return this.aEN(d,e,f,g,null,null,0)},
bij(d,e){var x,w=new Uint16Array(e)
for(x=0;x<e;++x)w[x]=d.am()
return w},
bim(d,e,f,g){var x,w=e*f
if(g===16)w*=2
if(w>d.c-d.d){x=new Uint8Array(w)
this.c=x
D.B.m0(x,0,w,255)
return}this.c=d.jd(w).hL()},
bil(d,e,f,g,h,i){var x,w,v,u,t,s,r=e*f
if(g===16)r*=2
x=new Uint8Array(r)
this.c=x
w=i*f
if(w>=h.length){D.B.m0(x,0,r,255)
return}for(v=0,u=0;u<f;++u,w=t){t=w+1
s=d.ji(h[w])
d.d=d.d+(s.c-s.d)
x=this.c
x.toString
this.aZX(s,x,v)
v+=e}},
aZX(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=e.$flags|0,v=e.length;u=d.d,u<x;){t=d.a
d.d=u+1
u=J.v(t,u)
t=$.nq()
t.$flags&2&&B.C(t)
t[0]=u
s=$.ox()[0]
if(s<0){s=1-s
u=d.d
if(u>=x)break
t=d.a
d.d=u+1
r=J.v(t,u)
if(f+s>v)s=v-f
for(q=0;q<s;++q,f=p){p=f+1
w&2&&B.C(e)
e[f]=r}}else{++s
if(f+s>v)s=v-f
s=Math.min(s,x-d.d)
for(q=0;q<s;++q,f=p){p=f+1
u=J.v(d.a,d.d++)
w&2&&B.C(e)
e[f]=u}}}},
gbn(d){return this.a}}
A.uw.prototype={
J(){return"PsdColorMode."+this.b}}
A.bu2.prototype={
aUe(d){var x,w,v=this
v.as=A.cY(d,!0,null,0)
v.bhQ()
if(v.c!==943870035)return
x=v.as.a3()
v.as.jd(x)
x=v.as.a3()
v.at=v.as.jd(x)
x=v.as.a3()
v.ax=v.as.jd(x)
w=v.as
v.ay=w.jd(w.c-w.d)},
oe(d){var x,w=this
if(w.c===943870035){x=w.as
x===$&&B.b()
x=x==null}else x=!0
if(x)return!1
w.bih()
w.bii()
w.bik()
w.ay=w.ax=w.at=w.as=null
return!0},
azv(){if(!this.oe(0))return null
return this.bKo()},
bKo(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.y
if(d!=null)return d
d=f.a
d=A.hT(e,e,C.a8,0,C.bm,f.b,e,0,4,e,C.a8,d,!1)
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
m=n==null?e:n.ec(o,r,e)
if(m==null)m=new A.fi()
l=D.d.C(m.gaf(m))
k=D.d.C(m.gap())
j=D.d.C(m.gau(m))
i=D.d.C(m.gaE(m))
p.toString
if(p>=0&&p<f.a&&d&&s<f.b){n=w.b
n.toString
h=f.y.a
g=h==null?e:h.ec(n+o,q,e)
if(g==null)g=new A.fi()
f.aW3(D.d.C(g.gaf(g)),D.d.C(g.gap()),D.d.C(g.gau(g)),D.d.C(g.gaE(g)),l,k,j,i,u,v,g)}++o;++p}++r;++s}}++x}d=f.y
d.toString
return d},
aW3(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s=k/255*m
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
case 1836411936:u=D.c.S(d*h,8)
v=D.c.S(e*i,8)
w=D.c.S(f*j,8)
x=k
break
case 1768188278:u=A.bu3(d,h)
v=A.bu3(e,i)
w=A.bu3(f,j)
x=k
break
case 1818391150:u=A.bu5(d,h)
v=A.bu5(e,i)
w=A.bu5(f,j)
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
case 1935897198:u=A.ctB(d,h)
v=A.ctB(e,i)
w=A.ctB(f,j)
x=k
break
case 1684633120:u=A.bu4(d,h)
v=A.bu4(e,i)
w=A.bu4(f,j)
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
case 1870030194:u=A.ctz(d,h,g,k)
v=A.ctz(e,i,g,k)
w=A.ctz(f,j,g,k)
x=k
break
case 1934387572:u=A.ctC(d,h)
v=A.ctC(e,i)
w=A.ctC(f,j)
x=k
break
case 1749838196:u=A.ctx(d,h)
v=A.ctx(e,i)
w=A.ctx(f,j)
x=k
break
case 1984719220:u=A.ctD(d,h)
v=A.ctD(e,i)
w=A.ctD(f,j)
x=k
break
case 1816947060:u=A.cty(d,h)
v=A.cty(e,i)
w=A.cty(f,j)
x=k
break
case 1884055924:u=A.ctA(d,h)
v=A.ctA(e,i)
w=A.ctA(f,j)
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
case 1936553316:u=A.ctw(d,h)
v=A.ctw(e,i)
w=A.ctw(f,j)
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
n.saE(0,D.d.C(g*t+x*s))},
bhQ(){var x,w,v=this,u=v.as
u===$&&B.b()
v.c=u.a3()
u=v.as.am()
v.d=u
if(u!==1){v.c=0
return}x=v.as.jd(6)
for(w=0;w<6;++w)if(J.v(x.a,x.d+w)!==0){v.c=0
return}v.e=v.as.am()
v.b=v.as.a3()
v.a=v.as.a3()
v.f=v.as.am()
v.r=C.aD8[v.as.am()]},
bih(){var x,w,v,u,t,s,r=this,q=r.at
q.d=q.b
for(q=r.z;x=r.at,x.d<x.c;){w=x.a3()
v=r.at.am()
x=r.at
u=J.v(x.a,x.d++)
t=r.at.je(u)
if((u&1)===0)++r.at.d
u=r.at.a3()
x=r.at
s=x.ji(u)
x.d=x.d+(s.c-s.d)
if((u&1)===1)++r.at.d
if(w===943868237)q.m(0,v,new A.axt(v,t))}},
bii(){var x,w,v,u,t,s,r,q,p,o=this,n=o.ax
n.d=n.b
x=n.a3()
if((x&1)!==0)++x
w=o.ax.jd(x)
n=y.l
o.w=B.a([],n)
if(x>0){v=w.am()
u=$.np()
u.$flags&2&&B.C(u)
u[0]=v
t=$.ow()[0]
if(t<0)t=-t
for(v=y.N,u=y.O,s=y.u,r=0;r<t;++r){q=new A.axw(B.I(v,u),B.a([],n),B.a([],s))
q.aUf(w)
o.w.push(q)}}for(r=0;n=o.w,r<n.length;++r)n[r].bJF(w,o)
x=o.ax.a3()
p=o.ax.jd(x)
if(x>0){p.am()
p.am()
p.am()
p.am()
p.am()
p.am()
p.ct()}},
bik(){var x,w,v,u,t,s,r=this,q=r.ay
q.d=q.b
x=q.am()
if(x===1){q=r.b
w=r.e
w===$&&B.b()
v=q*w
u=new Uint16Array(v)
for(t=0;t<v;++t)u[t]=r.ay.am()}else u=null
r.x=B.a([],y.X)
t=0
while(!0){q=r.e
q===$&&B.b()
if(!(t<q))break
q=r.x
w=r.ay
w.toString
s=t===3?-1:t
s=new A.Ra(s)
s.aEN(w,r.a,r.b,r.f,x,u,t)
q.push(s);++t}r.y=A.cET(r.r,r.f,r.a,r.b,r.x)}}
A.axt.prototype={
gbn(d){return this.a}}
A.axw.prototype={
aUf(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=a1.a3(),a0=$.hx()
a0.$flags&2&&B.C(a0)
a0[0]=d
d=$.kJ()
e.a=d[0]
a0[0]=a1.a3()
e.b=d[0]
a0[0]=a1.a3()
e.c=d[0]
a0[0]=a1.a3()
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
x=a1.am()
for(w=0;w<x;++w){d=a1.am()
a0=$.np()
a0.$flags&2&&B.C(a0)
a0[0]=d
v=$.ow()[0]
a1.a3()
e.as.push(new A.Ra(v))}u=a1.a3()
if(u!==943868237)throw B.l(A.c6("Invalid PSD layer signature: "+D.c.lM(u,16)))
e.r=a1.a3()
e.w=a1.ct()
a1.ct()
e.y=a1.ct()
if(a1.ct()!==0)throw B.l(A.c6("Invalid PSD layer data"))
t=a1.a3()
s=a1.jd(t)
if(t>0){t=s.a3()
if(t>0){r=s.jd(t)
d=r.d
r.a3()
r.a3()
r.a3()
r.a3()
r.ct()
r.ct()
if(r.c-d===20)r.d+=2
else{r.ct()
r.ct()
r.a3()
r.a3()
r.a3()
r.a3()}}t=s.a3()
if(t>0)new A.bu0().aUd(s.jd(t))
t=s.ct()
e.Q=s.je(t)
q=4-D.c.an(t,4)-1
if(q>0)s.d+=q
for(d=s.c,a0=e.ay,p=e.cy,o=y.cK;s.d<d;){u=s.a3()
if(u!==943868237)throw B.l(A.c6("PSD invalid signature for layer additional data: "+D.c.lM(u,16)))
n=s.je(4)
t=s.a3()
m=s.ji(t)
l=s.d+(m.c-m.d)
s.d=l
if((t&1)===1)s.d=l+1
a0.m(0,n,A.d13(n,m))
if(n==="lrFX"){k=A.ca(o.a(a0.i(0,"lrFX")).b,null,0)
k.am()
j=k.am()
for(i=0;i<j;++i){k.je(4)
h=k.je(4)
g=k.a3()
if(h==="dsdw"){f=new A.axs()
p.push(f)
f.a=k.a3()
k.a3()
k.a3()
k.a3()
k.a3()
k.am()
k.am()
k.am()
k.am()
k.am()
k.je(8)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
J.v(k.a,k.d++)
k.am()
k.am()
k.am()
k.am()
k.am()}else if(h==="isdw"){f=new A.axv()
p.push(f)
f.a=k.a3()
k.a3()
k.a3()
k.a3()
k.a3()
k.am()
k.am()
k.am()
k.am()
k.am()
k.je(8)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
J.v(k.a,k.d++)
k.am()
k.am()
k.am()
k.am()
k.am()}else if(h==="oglw"){f=new A.axy()
p.push(f)
f.a=k.a3()
k.a3()
k.a3()
k.am()
k.am()
k.am()
k.am()
k.am()
k.je(8)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
if(f.a===2){k.am()
k.am()
k.am()
k.am()
k.am()}}else if(h==="iglw"){f=new A.axu()
p.push(f)
f.a=k.a3()
k.a3()
k.a3()
k.am()
k.am()
k.am()
k.am()
k.am()
k.je(8)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
if(f.a===2){J.v(k.a,k.d++)
k.am()
k.am()
k.am()
k.am()
k.am()}}else if(h==="bevl"){f=new A.axr()
p.push(f)
f.a=k.a3()
k.a3()
k.a3()
k.a3()
k.je(8)
k.je(8)
k.am()
k.am()
k.am()
k.am()
k.am()
k.am()
k.am()
k.am()
k.am()
k.am()
J.v(k.a,k.d++)
J.v(k.a,k.d++)
J.v(k.a,k.d++)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
J.v(k.a,k.d++)
if(f.a===2){k.am()
k.am()
k.am()
k.am()
k.am()
k.am()
k.am()
k.am()
k.am()
k.am()}}else if(h==="sofi"){f=new A.axz()
p.push(f)
f.a=k.a3()
k.je(4)
k.am()
k.am()
k.am()
k.am()
k.am()
J.v(k.a,k.d++)
f.b=J.v(k.a,k.d++)!==0
k.am()
k.am()
k.am()
k.am()
k.am()}else k.d+=g}}}}},
bJF(d,e){var x,w,v,u,t,s=this,r=0
while(!0){x=s.as
x===$&&B.b()
if(!(r<x.length))break
x=x[r]
w=s.e
w===$&&B.b()
v=s.f
v===$&&B.b()
x.bJM(d,w,v,e.f);++r}w=e.r
v=e.f
u=s.e
u===$&&B.b()
t=s.f
t===$&&B.b()
s.cx=A.cET(w,v,u,t,x)}}
A.Rb.prototype={}
A.bu1.prototype={
mX(d,e,f){var x,w,v,u=null,t=A.cES(e)
this.a=t
x=1
if(x===1){t=t.azv()
return t}for(w=u,v=0;v<x;++v){t=this.a
f=t==null?u:t.azv()
if(f==null)continue
if(w==null){f.w=C.al6
w=f}else w.ny(f)}return w}}
A.axC.prototype={}
A.z2.prototype={
aO(d,e){return new A.z2(this.a*e,this.b*e,this.c*e)},
a6(d,e){return new A.z2(this.a+e.a,this.b+e.b,this.c+e.c)},
a2(d,e){return new A.z2(this.a-e.a,this.b-e.b,this.c-e.c)}}
A.m8.prototype={
aO(d,e){var x=this
return new A.m8(x.a*e,x.b*e,x.c*e,x.d*e)},
a6(d,e){var x=this
return new A.m8(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
a2(d,e){var x=this
return new A.m8(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)}}
A.a3E.prototype={
gb5(d){return this.b}}
A.Rf.prototype={
gb5(d){return this.f}}
A.axB.prototype={
gb5(d){return this.b}}
A.rH.prototype={
sNu(d){var x=this.a,w=this.b
x.$flags&2&&B.C(x)
x[w+1]=d},
R2(){var x=this.e,w=this.d
if(x)return new A.z2(C.fC[w>>>9],C.fC[w>>>4&31],C.eG[w&15])
else return new A.z2(C.eG[w>>>7&15],C.eG[w>>>3&15],C.vD[w&7])},
R4(){var x=this.e,w=this.d
if(x)return new A.m8(C.fC[w>>>9],C.fC[w>>>4&31],C.eG[w&15],255)
else return new A.m8(C.eG[w>>>7&15],C.eG[w>>>3&15],C.vD[w&7],C.vD[w>>>11&7])},
R3(){var x=this.r,w=this.f
if(x)return new A.z2(C.fC[w>>>10],C.fC[w>>>5&31],C.fC[w&31])
else return new A.z2(C.eG[w>>>8&15],C.eG[w>>>4&15],C.eG[w&15])},
R5(){var x=this.r,w=this.f
if(x)return new A.m8(C.fC[w>>>10],C.fC[w>>>5&31],C.fC[w&31],255)
else return new A.m8(C.eG[w>>>8&15],C.eG[w>>>4&15],C.eG[w&15],C.vD[w>>>12&7])},
Lm(){var x=this,w=x.c?1:0,v=x.d,u=x.e?1:0,t=x.f,s=x.r?1:0
return(w|(v&16383)<<1|u<<15|(t&32767)<<16|s<<31)>>>0},
uz(d){var x=this,w=x.a[x.b+1]
x.c=(w&1)===1
x.sNu(x.Lm())
x.d=w>>>1&16383
x.sNu(x.Lm())
x.e=(w>>>15&1)===1
x.sNu(x.Lm())
x.f=w>>>16&32767
x.sNu(x.Lm())
x.r=(w>>>31&1)===1
x.sNu(x.Lm())}}
A.bu6.prototype={
oE(d){var x,w=this,v=d.length,u=v-(v>>>1&1431655765)>>>0
u=(u&858993459)+(u>>>2&858993459)
if((u+(u>>>4)>>>0&252645135)*16843009>>>0>>>24===1){x=w.aZG(d)
if(x!=null){w.a=d
return w.b=x}}x=w.aZW(d)
if(x!=null){w.a=d
return w.b=x}x=w.aZU(d)
if(x!=null){w.a=d
return w.b=x}return null},
aZW(d){var x,w,v=A.cY(d,!1,null,0)
if(v.a3()!==52)return null
if(v.a3()!==55727696)return null
x=B.a([0,0,0,0],y.t)
w=new A.Rf(x)
v.a3()
w.b=v.a3()
x[0]=v.ct()
x[1]=v.ct()
x[2]=v.ct()
x[3]=v.ct()
v.a3()
v.a3()
w.f=v.a3()
w.r=v.a3()
v.a3()
v.a3()
v.a3()
v.a3()
w.Q=v.a3()
return w},
aZU(d){var x,w,v=A.cY(d,!1,null,0)
if(v.a3()!==52)return null
x=new A.a3E()
x.b=v.a3()
x.a=v.a3()
v.a3()
x.d=v.a3()
v.a3()
x.f=v.a3()
v.a3()
v.a3()
v.a3()
x.y=v.a3()
w=v.a3()
x.z=w
x.Q=v.a3()
if(w!==559044176)return null
return x},
aZG(d){var x,w,v,u,t,s,r=null,q=d.length,p=A.cY(d,!1,r,0)
if(p.a3()!==0)return r
x=new A.axB()
x.b=p.a3()
x.a=p.a3()
p.a3()
p.a3()
p.a3()
p.a3()
p.a3()
p.a3()
p.a3()
w=p.a3()
x.y=w
if(w===559044176)return r
v=0
u=8
if(!(q===32)){t=0
while(!0){if(!(t<10)){v=1
break}s=t<<1>>>0
if((D.c.en(64,s)&q)>>>0!==0){u=D.c.en(16,t)
v=1
break}if((D.c.en(128,s)&q)>>>0!==0){u=D.c.en(16,t)
break}++t}if(t===10)return r}if((v+1)*2===4)return r
x.b=x.a=u
return x},
kf(d){var x,w,v=this,u=v.b
if(u==null||v.a==null)return null
if(u instanceof A.axB){u=u.a
x=v.b
x=x.gb5(x)
w=v.a
w.toString
return v.a3H(u,x,w)}else if(u instanceof A.a3E){u=v.a
u.toString
return v.aZT(u)}else if(u instanceof A.Rf){u=v.a
u.toString
return v.aZV(u)}return null},
mX(d,e,f){if(this.oE(e)==null)return null
return this.kf(0)},
aZT(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.length
if(j<52||l.b==null)return k
x=l.b
x.toString
y.ab.a(x)
w=A.cY(d,!1,k,0)
w.d+=52
v=x.Q
if(v<1)v=(x.d&4096)!==0?6:1
if(v!==1)return k
u=x.a
t=x.b
if(u*t*x.f/8>j-52)return k
switch(x.d&255){case 16:s=A.hT(k,k,C.a8,0,C.bm,t,k,0,4,k,C.a8,u,!1)
for(x=s.a,x=x.ga5(x);x.q();){r=x.gL(x)
q=J.v(w.a,w.d++)
p=J.v(w.a,w.d++)
r.saf(0,p&240)
r.sap((p&15)<<4)
r.sau(0,q&240)
r.saE(0,(q&15)<<4)}return s
case 17:s=A.hT(k,k,C.a8,0,C.bm,t,k,0,4,k,C.a8,u,!1)
for(x=s.a,x=x.ga5(x);x.q();){r=x.gL(x)
o=w.am()
n=(o&1)!==0?255:0
r.saf(0,o>>>8&248)
r.sap(o>>>3&248)
r.sau(0,(o&62)<<2)
r.saE(0,n)}return s
case 18:s=A.hT(k,k,C.a8,0,C.bm,t,k,0,4,k,C.a8,u,!1)
for(x=s.a,x=x.ga5(x);x.q();){r=x.gL(x)
r.saf(0,J.v(w.a,w.d++))
r.sap(J.v(w.a,w.d++))
r.sau(0,J.v(w.a,w.d++))
r.saE(0,J.v(w.a,w.d++))}return s
case 19:s=A.hT(k,k,C.a8,0,C.bm,t,k,0,3,k,C.a8,u,!1)
for(x=s.a,x=x.ga5(x);x.q();){r=x.gL(x)
o=w.am()
r.saf(0,o>>>8&248)
r.sap(o>>>3&252)
r.sau(0,(o&31)<<3)}return s
case 20:s=A.hT(k,k,C.a8,0,C.bm,t,k,0,3,k,C.a8,u,!1)
for(x=s.a,x=x.ga5(x);x.q();){r=x.gL(x)
o=w.am()
r.saf(0,(o&31)<<3)
r.sap(o>>>2&248)
r.sau(0,o>>>7&248)}return s
case 21:s=A.hT(k,k,C.a8,0,C.bm,t,k,0,3,k,C.a8,u,!1)
for(x=s.a,x=x.ga5(x);x.q();){r=x.gL(x)
r.saf(0,J.v(w.a,w.d++))
r.sap(J.v(w.a,w.d++))
r.sau(0,J.v(w.a,w.d++))}return s
case 22:s=A.hT(k,k,C.a8,0,C.bm,t,k,0,1,k,C.a8,u,!1)
for(x=s.a,x=x.ga5(x);x.q();)x.gL(x).saf(0,J.v(w.a,w.d++))
return s
case 23:s=A.hT(k,k,C.a8,0,C.bm,t,k,0,4,k,C.a8,u,!1)
for(x=s.a,x=x.ga5(x);x.q();){r=x.gL(x)
n=J.v(w.a,w.d++)
m=J.v(w.a,w.d++)
r.saf(0,m)
r.sap(m)
r.sau(0,m)
r.saE(0,n)}return s
case 24:return k
case 25:return x.y===0?l.alb(u,t,w.hL()):l.a3H(u,t,w.hL())}return k},
aZV(d){var x,w,v,u=this
if(!(u.b instanceof A.Rf))return null
x=A.cY(d,!1,null,0)
w=x.d+=52
v=y.aM.a(u.b)
x.d=w+v.Q
if(v.c[0]===0)switch(v.b){case 2:return u.alb(v.r,v.f,x.hL())
case 3:return u.a3H(v.r,v.f,x.hL())}return null},
alb(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=A.hT(b5,b5,C.a8,0,C.bm,c6,b5,0,3,b5,C.a8,c5,!1),b7=c5/4|0,b8=b7-1,b9=J.oy(D.B.gaj(c7),0,null),c0=new A.rH(b9),c1=new A.rH(J.oy(D.B.gaj(c7),0,null)),c2=new A.rH(J.oy(D.B.gaj(c7),0,null)),c3=new A.rH(J.oy(D.B.gaj(c7),0,null)),c4=new A.rH(J.oy(D.B.gaj(c7),0,null))
for(x=0,w=0;x<b7;++x,w+=4)for(v=0,u=0;v<b7;++v,u+=4){c0.b=A.z3(v,x)<<1>>>0
c0.uz(0)
t=b9[c0.b]
s=c0.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&b8)>>>0
o=(p+1&b8)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&b8)>>>0
k=(l+1&b8)>>>0
c1.b=A.z3(l,p)<<1>>>0
c1.uz(0)
c2.b=A.z3(k,p)<<1>>>0
c2.uz(0)
c3.b=A.z3(l,o)<<1>>>0
c3.uz(0)
c4.b=A.z3(k,o)<<1>>>0
c4.uz(0)
j=c1.R2()
i=C.d6[r][0]
h=c2.R2()
g=C.d6[r][1]
f=c3.R2()
e=C.d6[r][2]
d=c4.R2()
a0=C.d6[r][3]
a1=c1.R3()
a2=C.d6[r][0]
a3=c2.R3()
a4=C.d6[r][1]
a5=c3.R3()
a6=C.d6[r][2]
a7=c4.R3()
a8=C.d6[r][3]
a9=C.P3[s+t&3]
b0=a9[0]
b1=a9[1]
b2=D.c.S((j.a*i+h.a*g+f.a*e+d.a*a0)*b0+(a1.a*a2+a3.a*a4+a5.a*a6+a7.a*a8)*b1,7)
b3=D.c.S((j.b*i+h.b*g+f.b*e+d.b*a0)*b0+(a1.b*a2+a3.b*a4+a5.b*a6+a7.b*a8)*b1,7)
b4=D.c.S((j.c*i+h.c*g+f.c*e+d.c*a0)*b0+(a1.c*a2+a3.c*a4+a5.c*a6+a7.c*a8)*b1,7)
b1=b6.a
if(b1!=null)b1.fg(m+u,n,b2,b3,b4)
t=t>>>2;++r}}}return b6},
a3H(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=A.hT(a4,a4,C.a8,0,C.bm,b5,a4,0,4,a4,C.a8,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.oy(D.B.gaj(b6),0,null),a9=new A.rH(a8),b0=new A.rH(J.oy(D.B.gaj(b6),0,null)),b1=new A.rH(J.oy(D.B.gaj(b6),0,null)),b2=new A.rH(J.oy(D.B.gaj(b6),0,null)),b3=new A.rH(J.oy(D.B.gaj(b6),0,null))
for(x=0,w=0;x<a6;++x,w+=4)for(v=0,u=0;v<a6;++v,u+=4){a9.b=A.z3(v,x)<<1>>>0
a9.uz(0)
t=a8[a9.b]
s=a9.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&a7)>>>0
o=(p+1&a7)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&a7)>>>0
k=(l+1&a7)>>>0
b0.b=A.z3(l,p)<<1>>>0
b0.uz(0)
b1.b=A.z3(k,p)<<1>>>0
b1.uz(0)
b2.b=A.z3(l,o)<<1>>>0
b2.uz(0)
b3.b=A.z3(k,o)<<1>>>0
b3.uz(0)
j=b0.R4()
i=C.d6[r][0]
h=b1.R4()
g=C.d6[r][1]
g=new A.m8(j.a*i,j.b*i,j.c*i,j.d*i).a6(0,new A.m8(h.a*g,h.b*g,h.c*g,h.d*g))
h=b2.R4()
i=C.d6[r][2]
i=g.a6(0,new A.m8(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.R4()
g=C.d6[r][3]
f=i.a6(0,new A.m8(h.a*g,h.b*g,h.c*g,h.d*g))
g=b0.R5()
h=C.d6[r][0]
i=b1.R5()
j=C.d6[r][1]
j=new A.m8(g.a*h,g.b*h,g.c*h,g.d*h).a6(0,new A.m8(i.a*j,i.b*j,i.c*j,i.d*j))
i=b2.R5()
h=C.d6[r][2]
h=j.a6(0,new A.m8(i.a*h,i.b*h,i.c*h,i.d*h))
i=b3.R5()
j=C.d6[r][3]
e=h.a6(0,new A.m8(i.a*j,i.b*j,i.c*j,i.d*j))
d=C.P3[s+t&3]
j=d[0]
i=d[1]
a0=D.c.S(f.a*j+e.a*i,7)
a1=D.c.S(f.b*j+e.b*i,7)
a2=D.c.S(f.c*j+e.c*i,7)
a3=D.c.S(f.d*d[2]+e.d*d[3],7)
i=a5.a
if(i!=null)i.kp(m+u,n,a0,a1,a2,a3)
t=t>>>2;++r}}}return a5}}
A.aBW.prototype={
vo(d,e){var x,w=this
if(e.c-e.d<18)return
w.a=e.ct()
w.b=e.ct()
x=e.ct()
w.c=x<12?C.axr[x]:C.wZ
e.am()
w.e=e.am()
w.f=e.ct()
e.am()
e.am()
w.x=e.am()
w.y=e.am()
w.z=e.ct()
w.Q=e.ct()},
aCw(){var x=this,w=x.z
if(w!==8&&w!==16&&w!==24&&w!==32)return!1
w=x.c
if(w===C.iK||w===C.iL){if(x.e>256||x.b!==1)return!1
w=x.f
if(w!==16&&w!==24&&w!==32)return!1}else if(x.b===1)return!1
return!0}}
A.oe.prototype={
J(){return"TgaImageType."+this.b}}
A.bFR.prototype={
mX(d,e,f){if(this.oE(e)==null)return null
return this.kf(0)},
oE(d){var x,w,v,u,t=this
t.a=new A.aBW(C.wZ)
x=A.cY(d,!1,null,0)
t.b=x
w=x.jd(18)
t.a.vo(0,w)
if(!t.a.aCw())return null
x=t.b
v=t.a
x.d+=v.a
u=v.c
if(u===C.iK||u===C.iL)v.as=x.jd(v.e*D.c.S(v.f,3)).hL()
x=t.a
x.ax=t.b.d
return x},
kf(d){var x=this,w=x.a
if(w==null)return null
w=w.c
if(w===C.a4O)return x.ala()
else if(w===C.a4N||w===C.iL)return x.aZZ()
else if(w===C.iK)return x.ala()
return null},
al5(d,e){var x,w,v,u,t,s,r,q=this,p=A.cY(d,!1,null,0),o=q.a.f
if(o===16){o=q.b
o===$&&B.b()
x=o.am()
w=x>>>7&248
v=x>>>2&248
u=(x&31)<<3
t=(x&32768)!==0?0:255
for(s=0;s<q.a.e;++s){e.uk(s,w)
e.ui(s,v)
e.uh(s,u)
e.ug(s,t)}}else{r=o===32
for(s=0;s<q.a.e;++s){u=J.v(p.a,p.d++)
v=J.v(p.a,p.d++)
w=J.v(p.a,p.d++)
t=r?J.v(p.a,p.d++):255
e.uk(s,w)
e.ui(s,v)
e.uh(s,u)
e.ug(s,t)}}},
aZZ(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=h.z,f=g===16,e=f||g===32,d=h.x,a0=h.y,a1=e?4:3
h=h.c
x=A.hT(i,i,C.a8,0,C.bm,a0,i,0,a1,i,C.a8,d,h===C.iK||h===C.iL)
h=x.a
if((h==null?i:h.geS())!=null){h=j.a.as
h.toString
d=x.a
d=d==null?i:d.geS()
d.toString
j.al5(h,d)}w=x.gd0(0)
v=x.gb5(0)-1
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
if(d!=null)d.mG(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}else{d=j.b
if(f){n=d.am()
q=n>>>7&248
m=n>>>2&248
l=(n&31)<<3
k=(n&32768)!==0?0:255
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.kp(u,v,q,m,l,k)
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
if(d!=null)d.kp(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}}else if(h)for(p=0;p<s;++p){d=j.b
q=J.v(d.a,d.d++)
o=u+1
d=x.a
if(d!=null)d.mG(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}else if(f)for(p=0;p<s;++p){n=j.b.am()
k=(n&32768)!==0?0:255
o=u+1
d=x.a
if(d!=null)d.kp(u,v,n>>>7&248,n>>>2&248,(n&31)<<3,k)
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
if(d!=null)d.kp(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}if(u>=w){--v
if(v<0)break
u=0}}return x},
ala(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
g===$&&B.b()
x=i.a
g.d=x.ax
w=x.z
g=w===16
v=!0
if(!g)if(w!==32){u=x.c
if(u===C.iK||u===C.iL){u=x.f
u=u===16||u===32}else u=!1
v=u}u=x.x
t=x.y
s=v?4:3
x=x.c
r=A.hT(h,h,C.a8,0,C.bm,t,h,0,s,h,C.a8,u,x===C.iK||x===C.iL)
x=i.a
u=x.c
if(u===C.iK||u===C.iL){x=x.as
x.toString
u=r.a
u=u==null?h:u.geS()
u.toString
i.al5(x,u)}if(w===8)for(q=r.gb5(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
g=i.b
o=J.v(g.a,g.d++)
g=r.a
if(g!=null)g.mG(p,q,o);++p}}else if(g)for(q=r.gb5(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
n=i.b.am()
m=(n&32768)!==0?0:255
g=r.a
if(g!=null)g.kp(p,q,n>>>7&248,n>>>2&248,(n&31)<<3,m);++p}}else for(q=r.gb5(0)-1;q>=0;--q){p=0
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
if(g!=null)g.kp(p,q,j,k,l,m);++p}}return r}}
A.bGw.prototype={
jc(d){var x,w,v,u,t=this
if(d===0)return 0
if(t.c===0){t.c=8
t.b=t.a.ct()}for(x=t.a,w=0;v=t.c,d>v;){w=D.c.eU(w,v)+(t.b&C.nb[v])
d-=v
t.c=8
t.b=J.v(x.a,x.d++)}if(d>0){if(v===0){t.c=8
t.b=x.ct()}x=D.c.eU(w,d)
v=t.b
u=t.c-d
w=x+(D.c.o2(v,u)&C.nb[d])
t.c=u}return w}}
A.aBZ.prototype={
j(d){var x=this,w=x.a,v=$.cqj().i(0,w)
if(v!=null)return v.a+": "+x.b.j(0)+" "+x.c
return"<"+w+">: "+x.b.j(0)+" "+x.c},
ph(d){var x,w,v,u=this,t=u.e
if(t!=null)return t
t=u.f
t.d=u.d
x=u.c
w=u.b
v=t.jd(x*(w!==C.Y?C.jq[w.a]:0))
switch(w.a){case 1:return u.e=new A.u9(new Uint8Array(B.bU(v.jd(x).hL())))
case 2:return u.e=new A.BM(x===0?"":v.je(x-1))
case 7:return u.e=new A.u9(new Uint8Array(B.bU(v.jd(x).hL())))
case 3:return u.e=A.cCz(v,x)
case 4:return u.e=A.cCu(v,x)
case 5:return u.e=A.cCv(v,x)
case 11:return u.e=A.cCB(v,x)
case 12:return u.e=A.cCt(v,x)
case 6:return u.e=new A.w6(new Int8Array(B.bU(J.cqq(D.B.gaj(v.hL()),0,x))))
case 8:return u.e=A.cCy(v,x)
case 9:return u.e=A.cCw(v,x)
case 10:return u.e=A.cCx(v,x)
case 0:return null}},
gp(d){return this.e}}
A.bGy.prototype={
bxf(d,e,f,g){var x,w,v,u=this
u.r=e
u.x=u.w=0
x=D.c.b4(u.a+7,8)
for(w=0,v=0;v<g;++v){u.a3F(d,w,f)
w+=x}},
a3F(d,e,f){var x,w,v,u,t,s,r,q,p=this
p.d=0
for(x=p.a,w=!0;f<x;){for(;w;){v=p.yK(10)
u=C.Pv[v]
t=D.c.S(u,1)&15
if(t===12){u=C.ud[(v<<2&12|p.oJ(2))>>>0]
s=D.c.S(u,1)
f+=D.c.S(u,4)&4095
p.ly(4-(s&7))}else if(t===0)throw B.l(A.c6("TIFFFaxDecoder0"))
else if(t===15)throw B.l(A.c6("TIFFFaxDecoder1"))
else{f+=D.c.S(u,5)&2047
p.ly(10-t)
if((u&1)===0){p.f[p.d++]=f
w=!1}}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}for(;!w;){u=C.KB[p.oJ(4)]
r=u>>>5&2047
q=!0
if(r===100){u=C.M8[p.yK(9)]
t=D.c.S(u,1)&15
r=D.c.S(u,5)&2047
if(t===12){p.ly(5)
u=C.ud[p.oJ(4)]
s=D.c.S(u,1)
r=D.c.S(u,4)&4095
p.pL(d,e,f,r)
f+=r
p.ly(4-(s&7))}else if(t===15)throw B.l(A.c6("TIFFFaxDecoder2"))
else{p.pL(d,e,f,r)
f+=r
p.ly(9-t)
if((u&1)===0){p.f[p.d++]=f
w=q}}}else{if(r===200){u=C.Kv[p.oJ(2)]
r=u>>>5&2047
p.pL(d,e,f,r)
f+=r
p.ly(2-(u>>>1&15))
p.f[p.d++]=f}else{p.pL(d,e,f,r)
f+=r
p.ly(4-(u>>>1&15))
p.f[p.d++]=f}w=q}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}}p.f[p.d++]=f},
bxg(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.r=a0
e.z=3
e.x=e.w=0
x=e.a
w=D.c.b4(x+7,8)
v=B.bO(2,null,!1,y.s)
e.at=a3&1
e.as=a3>>>2&1
if(e.arq()!==1)throw B.l(A.c6("TIFFFaxDecoder3"))
e.a3F(d,0,a1)
for(u=w,t=1;t<a2;++t){if(e.arq()===0){s=e.e
e.e=e.f
e.f=s
e.y=0
r=a1
q=-1
p=!0
o=0
while(!0){r.toString
if(!(r<x))break
e.ane(q,p,v)
n=v[0]
m=v[1]
l=C.Pb[e.oJ(7)]&255
k=l>>>3&15
j=l&7
if(k===0){if(!p){m.toString
e.pL(d,u,r,m-r)}e.ly(7-j)
r=m
q=r}else if(k===1){e.ly(7-j)
i=o+1
h=i+1
if(p){r+=e.Ti()
e.f[o]=r
g=e.Th()
e.pL(d,u,r,g)
r+=g
e.f[i]=r}else{g=e.Th()
e.pL(d,u,r,g)
r+=g
e.f[o]=r
r+=e.Ti()
e.f[i]=r}o=h
q=r}else{if(k<=8){n.toString
f=n+(k-5)
i=o+1
e.f[o]=f
p=!p
if(p)e.pL(d,u,r,f-r)
e.ly(7-j)}else throw B.l(A.c6("TIFFFaxDecoder4"))
r=f
o=i
q=r}}e.f[o]=r
e.d=o+1}else e.a3F(d,u,a1)
u+=w}},
bxm(a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.r=a4
a2.z=4
a2.x=a2.w=0
x=a2.a
w=D.c.b4(x+7,8)
v=B.bO(2,null,!1,y.s)
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
a2.ane(p,o,v)
m=v[0]
l=v[1]
k=C.Pb[a2.oJ(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
a2.pL(a3,t,q,l-q)}a2.ly(7-i)
q=l
p=q}else if(j===1){a2.ly(7-i)
h=n+1
g=h+1
if(o){q+=a2.Ti()
r[n]=q
f=a2.Th()
a2.pL(a3,t,q,f)
q+=f
r[h]=q}else{f=a2.Th()
a2.pL(a3,t,q,f)
q+=f
r[n]=q
q+=a2.Ti()
r[h]=q}n=g
p=q}else if(j<=8){m.toString
e=m+(j-5)
h=n+1
r[n]=e
o=!o
if(o)a2.pL(a3,t,q,e-q)
a2.ly(7-i)
q=e
n=h
p=q}else if(j===11){if(a2.oJ(3)!==7)throw B.l(A.c6("TIFFFaxDecoder5"))
for(d=0,a0=!1;!a0;o=a1){for(;a2.oJ(1)!==1;)++d
if(d>5){d-=6
if(!o&&d>0){h=n+1
r[n]=q
n=h}q+=d
if(d>0)o=!0
a1=a2.oJ(1)===0
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
a2.pL(a3,t,q,1);++q
n=h}}}else throw B.l(A.c6("TIFFFaxDecoder5 "+j))}r[n]=q
a2.d=n+1
t+=w}},
Ti(){var x,w,v,u,t,s,r=this
for(x=0,w=!0;w;){v=r.yK(10)
u=C.Pv[v]
t=D.c.S(u,1)&15
if(t===12){u=C.ud[(v<<2&12|r.oJ(2))>>>0]
s=D.c.S(u,1)
x+=D.c.S(u,4)&4095
r.ly(4-(s&7))}else if(t===0)throw B.l(A.c6("TIFFFaxDecoder0"))
else if(t===15)throw B.l(A.c6("TIFFFaxDecoder1"))
else{x+=D.c.S(u,5)&2047
r.ly(10-t)
if((u&1)===0)w=!1}}return x},
Th(){var x,w,v,u,t,s,r=this
for(x=0,w=!1;!w;){v=C.KB[r.oJ(4)]
u=v>>>5&2047
if(u===100){v=C.M8[r.yK(9)]
t=D.c.S(v,1)&15
s=D.c.S(v,5)
if(t===12){r.ly(5)
v=C.ud[r.oJ(4)]
s=D.c.S(v,1)
x+=D.c.S(v,4)&4095
r.ly(4-(s&7))}else if(t===15)throw B.l(A.c6("TIFFFaxDecoder2"))
else{x+=s&2047
r.ly(9-t)
if((v&1)===0)w=!0}}else{if(u===200){v=C.Kv[r.oJ(2)]
x+=v>>>5&2047
r.ly(2-(v>>>1&15))}else{x+=u
r.ly(4-(v>>>1&15))}w=!0}}return x},
arq(){var x,w,v=this,u="TIFFFaxDecoder8",t=v.as
if(t===0){if(v.yK(12)!==1)throw B.l(A.c6("TIFFFaxDecoder6"))}else if(t===1){t=v.w
t.toString
x=8-t
if(v.yK(x)!==0)throw B.l(A.c6(u))
if(x<4)if(v.yK(8)!==0)throw B.l(A.c6(u))
for(;w=v.yK(8),w!==1;)if(w!==0)throw B.l(A.c6(u))}if(v.at===0)return 1
else return v.oJ(1)},
ane(d,e,f){var x,w=this,v=w.e,u=w.d,t=w.y,s=t>0?t-1:0
s=e?(s&4294967294)>>>0:(s|1)>>>0
for(x=s;x<u;x+=2){t=v[x]
t.toString
d.toString
if(t>d){w.y=x
f[0]=t
break}}t=x+1
if(t<u)f[1]=v[t]},
pL(d,e,f,g){var x,w,v,u,t,s=8*e+f,r=s+g,q=D.c.S(s,3),p=s&7
if(p>0){x=D.c.eU(1,7-p)
w=J.v(d.a,d.d+q)
while(!0){if(!(x>0&&s<r))break
w=(w|x)>>>0
x=x>>>1;++s}d.m(0,q,w)}q=D.c.S(s,3)
for(v=r-7;s<v;q=u){u=q+1
J.bV(d.a,d.d+q,255)
s+=8}for(;s<r;){q=D.c.S(s,3)
v=J.v(d.a,d.d+q)
t=D.c.eU(1,7-(s&7))
J.bV(d.a,d.d+q,(v|t)>>>0);++s}},
yK(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.r
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
r=C.lh[J.v(j.a,x+v)&255]
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=C.lh[J.v(u,x+j)&255]
else{t=C.lh[J.v(u,x+j)&255]
j=k.r
s=C.lh[J.v(j.a,j.d+(v+2))&255]}}}else throw B.l(A.c6("TIFFFaxDecoder7"))
j=k.w
j.toString
q=8-j
p=d-q
if(p>8){o=p-8
n=8}else{n=p
o=0}j=k.x
j.toString
j=k.x=j+1
m=D.c.eU(r&C.nb[q],p)
l=D.c.h1(t&C.Bv[n],8-n)
if(o!==0){l=D.c.eU(l,o)|D.c.h1(s&C.Bv[o],8-o)
k.x=j+1
k.w=o}else if(n===8){k.w=0
k.x=j+1}else k.w=n
return(m|l)>>>0},
oJ(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.r
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
s=C.lh[J.v(m.a,x+v)&255]
if(!(v===w)){m=n.r
t=C.lh[J.v(m.a,m.d+(v+1))&255]}}else throw B.l(A.c6("TIFFFaxDecoder7"))
m=n.w
m.toString
r=8-m
q=d-r
p=r-d
if(p>=0){o=D.c.h1(s&C.nb[r],p)
m+=d
n.w=m
if(m===8){n.w=0
m=n.x
m.toString
n.x=m+1}}else{o=(D.c.eU(s&C.nb[r],-p)|D.c.h1(t&C.Bv[q],8-q))>>>0
m=n.x
m.toString
n.x=m+1
n.w=q}return o},
ly(d){var x,w=this,v=w.w
v.toString
x=v-d
if(x<0){v=w.x
v.toString
w.x=v-1
w.w=8+x}else w.w=x}}
A.aC_.prototype={
aUt(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=A.ca(a0,f,0),d=a0.am()
for(x=g.a,w=0;w<d;++w){v=a0.am()
u=a0.am()
t=C.Ne[u]
s=C.jq[u]
r=a0.a3()
if(r*s>4)q=a0.a3()
else{q=a0.d
a0.d=q+4}p=new A.aBZ(v,t,r,q,e)
x.m(0,v,p)
if(v===256){o=p.ph(0)
o=o==null?f:o.C(0)
g.b=o==null?0:o}else if(v===257){o=p.ph(0)
o=o==null?f:o.C(0)
g.c=o==null?0:o}else if(v===262){n=p.ph(0)
m=n==null?f:n.C(0)
if(m==null)m=17
if(m<17)g.d=C.avQ[m]
else g.d=C.DW}else if(v===259){o=p.ph(0)
o=o==null?f:o.C(0)
g.e=o==null?0:o}else if(v===258){o=p.ph(0)
o=o==null?f:o.C(0)
g.f=o==null?0:o}else if(v===277){o=p.ph(0)
o=o==null?f:o.C(0)
g.r=o==null?0:o}else if(v===317){o=p.ph(0)
o=o==null?f:o.C(0)
g.Q=o==null?0:o}else if(v===339){o=p.ph(0)
n=o==null?f:o.C(0)
g.x=C.awm[n==null?0:n]}else if(v===320){n=p.ph(0)
if(n!=null){o=J.cSd(D.B.gaj(n.u1()))
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
o&2&&B.C(l)
l[w]=j>>>8}}if(g.d===C.DV)g.z=!0
g.w=g.r
if(x.a7(0,324)){g.ay=g.FO(322)
g.ch=g.FO(323)
g.CW=g.Vh(324)
g.cx=g.Vh(325)}else{g.ay=g.Vg(322,g.b)
if(!x.a7(0,278))g.ch=g.Vg(323,g.c)
else{i=g.FO(278)
if(i===-1)g.ch=g.c
else g.ch=i}g.CW=g.Vh(273)
g.cx=g.Vh(279)}o=g.b
j=g.ay
g.cy=D.c.hy(o+j-1,j)
o=g.c
h=g.ch
g.db=D.c.hy(o+h-1,h)
g.dx=j*h*g.r
g.dy=g.Vg(266,1)
g.fr=g.FO(292)
g.fx=g.FO(293)
g.FO(338)
switch(g.d.a){case 0:case 1:x=g.f
if(x===1&&g.r===1)g.y=C.DU
else if(x===4&&g.r===1)g.y=C.b51
else if(D.c.an(x,8)===0){x=g.r
if(x===1)g.y=C.b52
else if(x===2)g.y=C.b53
else g.y=C.o5}break
case 2:if(D.c.an(g.f,8)===0){x=g.r
if(x===3)g.y=C.a4Q
else if(x===4)g.y=C.b55
else g.y=C.o5}break
case 3:x=!1
if(g.r===1)if(g.id!=null){x=g.f
x=x===4||x===8||x===16}if(x)g.y=C.b54
break
case 4:if(g.f===1&&g.r===1)g.y=C.DU
break
case 6:if(g.e===7&&g.f===8&&g.r===3)g.y=C.a4Q
else{if(x.a7(0,530)){n=x.i(0,530).ph(0)
g.as=n.C(0)
x=g.at=n.jf(0,1)}else x=g.at=g.as=2
o=g.as
o===$&&B.b()
if(o*x===1)g.y=C.o5
else if(g.f===8&&g.r===3)g.y=C.b56}break
case 5:if(D.c.an(g.f,8)===0)g.y=C.o5
x=g.r
if(x===4)g.w=3
else if(x===5)g.w=4
break
default:if(D.c.an(g.f,8)===0)g.y=C.o5
break}},
dj(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.x,d=e===C.o4,a0=e===C.b2
e=g.f
if(e===1)x=C.fn
else if(e===2)x=C.h6
else{if(e===4)e=C.h7
else if(d&&e===16)e=C.hO
else if(d&&e===32)e=C.jb
else if(d&&e===64)e=C.kI
else if(a0&&e===8)e=C.kJ
else if(a0&&e===16)e=C.kK
else if(a0&&e===32)e=C.kL
else if(e===16)e=C.ch
else e=e===32?C.jc:C.a8
x=e}w=g.id!=null&&g.d===C.DX
v=w?3:g.w
e=g.b
u=A.hT(f,f,x,0,C.bm,g.c,f,0,v,f,x,e,w)
if(w){e=u.a
e=e==null?f:e.geS()
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
e.pt(k,t[l],t[m],t[n])}}j=0
i=0
while(!0){e=g.db
e===$&&B.b()
if(!(j<e))break
h=0
while(!0){e=g.cy
e===$&&B.b()
if(!(h<e))break
g.b__(a2,u,h,j);++h;++i}++j}return u},
b__(b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null
if(a8.y===C.DU){a8.aZJ(b0,b1,b2,b3)
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
else if(u===5){w=A.cY(new Uint8Array(p),!1,a9,0)
v=A.cDr()
try{J.cSi(v,A.ca(b0,x,0),w.a)}catch(o){}if(a8.Q===2)for(n=0;n<a8.ch;++n){m=a8.r
u=a8.ay
l=m*(n*u+1)
k=u*m
for(;m<k;++m){u=w
r=J.v(u.a,u.d+l)
j=w
i=a8.r
i=J.v(j.a,j.d+(l-i))
J.bV(u.a,u.d+l,r+i);++l}}}else if(u===32773){w=A.cY(new Uint8Array(p),!1,a9,0)
a8.al9(b0,p,w.a)}else if(u===32946)w=A.cY(C.iY.Cs(b0.Jh(0,0,x)),!1,a9,0)
else if(u===8)w=A.cY(C.iY.Cs(b0.Jh(0,0,x)),!1,a9,0)
else if(u===6){a8.bbw(new A.as0().dj(0,y.D.a(b0.Jh(0,0,x))),b1,s,q,a8.ay,a8.ch)
return}else throw B.l(A.c6("Unsupported Compression Type: "+u))
h=B.a([0,0,0],y.t)
for(g=q,f=0;f<a8.ch;++f,++g)for(e=s,d=0;d<a8.ay;++d,++e){u=w
if(u.d>=u.c||e>=a8.b||g>=a8.c)break
u=a8.r
if(u===1){u=a8.x
if(u===C.o4){u=a8.f
if(u===32){u=w.a3()
r=$.hx()
r.$flags&2&&B.C(r)
r[0]=u
a0=$.Fz()[0]}else if(u===64)a0=w.a_T()
else if(u===16){u=w.am()
r=$.hR
a0=(r!=null?r:A.iI())[u]}else a0=0
if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.mG(e,g,a0)}}else{r=a8.f
if(r===8)if(u===C.b2){u=w
u=J.v(u.a,u.d++)
r=$.nq()
r.$flags&2&&B.C(r)
r[0]=u
a0=$.ox()[0]}else{u=w
a0=J.v(u.a,u.d++)}else if(r===16)if(u===C.b2){u=w.am()
r=$.np()
r.$flags&2&&B.C(r)
r[0]=u
a0=$.ow()[0]}else a0=w.am()
else if(r===32)if(u===C.b2){u=w.a3()
r=$.hx()
r.$flags&2&&B.C(r)
r[0]=u
a0=$.kJ()[0]}else a0=w.a3()
else a0=0
if(a8.d===C.DV){u=b1.a
a1=u==null?a9:u.gck()
a0=(a1==null?0:a1)-a0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.mG(e,g,a0)}}}else if(u===2){u=a8.f
if(u===8){if(a8.x===C.b2){u=w
u=J.v(u.a,u.d++)
r=$.nq()
r.$flags&2&&B.C(r)
r[0]=u
a2=$.ox()[0]}else{u=w
a2=J.v(u.a,u.d++)}if(a8.x===C.b2){u=w
u=J.v(u.a,u.d++)
r=$.nq()
r.$flags&2&&B.C(r)
r[0]=u
a3=$.ox()[0]}else{u=w
a3=J.v(u.a,u.d++)}}else if(u===16){if(a8.x===C.b2){u=w.am()
r=$.np()
r.$flags&2&&B.C(r)
r[0]=u
a2=$.ow()[0]}else a2=w.am()
if(a8.x===C.b2){u=w.am()
r=$.np()
r.$flags&2&&B.C(r)
r[0]=u
a3=$.ow()[0]}else a3=w.am()}else if(u===32){if(a8.x===C.b2){u=w.a3()
r=$.hx()
r.$flags&2&&B.C(r)
r[0]=u
a2=$.kJ()[0]}else a2=w.a3()
if(a8.x===C.b2){u=w.a3()
r=$.hx()
r.$flags&2&&B.C(r)
r[0]=u
a3=$.kJ()[0]}else a3=w.a3()}else{a2=0
a3=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.fg(e,g,a2,a3,0)}}else if(u===3){u=a8.x
if(u===C.o4){u=a8.f
if(u===32){u=w.a3()
r=$.hx()
r.$flags&2&&B.C(r)
r[0]=u
u=$.Fz()
a4=u[0]
r[0]=w.a3()
a5=u[0]
r[0]=w.a3()
a6=u[0]}else{a5=0
a6=0
if(u===64)a4=w.a_T()
else if(u===16){u=w.am()
r=$.hR
a4=(r!=null?r:A.iI())[u]
u=w.am()
r=$.hR
a5=(r!=null?r:A.iI())[u]
u=w.am()
r=$.hR
a6=(r!=null?r:A.iI())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.fg(e,g,a4,a5,a6)}}else{r=a8.f
if(r===8){if(u===C.b2){u=w
u=J.v(u.a,u.d++)
r=$.nq()
r.$flags&2&&B.C(r)
r[0]=u
a4=$.ox()[0]}else{u=w
a4=J.v(u.a,u.d++)}if(a8.x===C.b2){u=w
u=J.v(u.a,u.d++)
r=$.nq()
r.$flags&2&&B.C(r)
r[0]=u
a5=$.ox()[0]}else{u=w
a5=J.v(u.a,u.d++)}if(a8.x===C.b2){u=w
u=J.v(u.a,u.d++)
r=$.nq()
r.$flags&2&&B.C(r)
r[0]=u
a6=$.ox()[0]}else{u=w
a6=J.v(u.a,u.d++)}}else if(r===16){if(u===C.b2){u=w.am()
r=$.np()
r.$flags&2&&B.C(r)
r[0]=u
a4=$.ow()[0]}else a4=w.am()
if(a8.x===C.b2){u=w.am()
r=$.np()
r.$flags&2&&B.C(r)
r[0]=u
a5=$.ow()[0]}else a5=w.am()
if(a8.x===C.b2){u=w.am()
r=$.np()
r.$flags&2&&B.C(r)
r[0]=u
a6=$.ow()[0]}else a6=w.am()}else if(r===32){if(u===C.b2){u=w.a3()
r=$.hx()
r.$flags&2&&B.C(r)
r[0]=u
a4=$.kJ()[0]}else a4=w.a3()
if(a8.x===C.b2){u=w.a3()
r=$.hx()
r.$flags&2&&B.C(r)
r[0]=u
a5=$.kJ()[0]}else a5=w.a3()
if(a8.x===C.b2){u=w.a3()
r=$.hx()
r.$flags&2&&B.C(r)
r[0]=u
a6=$.kJ()[0]}else a6=w.a3()}else{a4=0
a5=0
a6=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.fg(e,g,a4,a5,a6)}}}else if(u>=4)if(a8.x===C.o4){u=a8.f
if(u===32){u=w.a3()
r=$.hx()
r.$flags&2&&B.C(r)
r[0]=u
u=$.Fz()
a4=u[0]
r[0]=w.a3()
a5=u[0]
r[0]=w.a3()
a6=u[0]
r[0]=w.a3()
a7=u[0]}else{a5=0
a6=0
a7=0
if(u===64)a4=w.a_T()
else if(u===16){u=w.am()
r=$.hR
a4=(r!=null?r:A.iI())[u]
u=w.am()
r=$.hR
a5=(r!=null?r:A.iI())[u]
u=w.am()
r=$.hR
a6=(r!=null?r:A.iI())[u]
u=w.am()
r=$.hR
a7=(r!=null?r:A.iI())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.kp(e,g,a4,a5,a6,a7)}}else{u=b1.a
a3=u==null?a9:u.gck()
if(a3==null)a3=0
u=a8.f
if(u===8){if(a8.x===C.b2){u=w
u=J.v(u.a,u.d++)
r=$.nq()
r.$flags&2&&B.C(r)
r[0]=u
a4=$.ox()[0]}else{u=w
a4=J.v(u.a,u.d++)}if(a8.x===C.b2){u=w
u=J.v(u.a,u.d++)
r=$.nq()
r.$flags&2&&B.C(r)
r[0]=u
a5=$.ox()[0]}else{u=w
a5=J.v(u.a,u.d++)}if(a8.x===C.b2){u=w
u=J.v(u.a,u.d++)
r=$.nq()
r.$flags&2&&B.C(r)
r[0]=u
a6=$.ox()[0]}else{u=w
a6=J.v(u.a,u.d++)}if(a8.x===C.b2){u=w
u=J.v(u.a,u.d++)
r=$.nq()
r.$flags&2&&B.C(r)
r[0]=u
a7=$.ox()[0]}else{u=w
a7=J.v(u.a,u.d++)}if(a8.r===5)if(a8.x===C.b2){u=w
u=J.v(u.a,u.d++)
r=$.nq()
r.$flags&2&&B.C(r)
r[0]=u
a3=$.ox()[0]}else{u=w
a3=J.v(u.a,u.d++)}}else if(u===16){if(a8.x===C.b2){u=w.am()
r=$.np()
r.$flags&2&&B.C(r)
r[0]=u
a4=$.ow()[0]}else a4=w.am()
if(a8.x===C.b2){u=w.am()
r=$.np()
r.$flags&2&&B.C(r)
r[0]=u
a5=$.ow()[0]}else a5=w.am()
if(a8.x===C.b2){u=w.am()
r=$.np()
r.$flags&2&&B.C(r)
r[0]=u
a6=$.ow()[0]}else a6=w.am()
if(a8.x===C.b2){u=w.am()
r=$.np()
r.$flags&2&&B.C(r)
r[0]=u
a7=$.ow()[0]}else a7=w.am()
if(a8.r===5)if(a8.x===C.b2){u=w.am()
r=$.np()
r.$flags&2&&B.C(r)
r[0]=u
a3=$.ow()[0]}else a3=w.am()}else if(u===32){if(a8.x===C.b2){u=w.a3()
r=$.hx()
r.$flags&2&&B.C(r)
r[0]=u
a4=$.kJ()[0]}else a4=w.a3()
if(a8.x===C.b2){u=w.a3()
r=$.hx()
r.$flags&2&&B.C(r)
r[0]=u
a5=$.kJ()[0]}else a5=w.a3()
if(a8.x===C.b2){u=w.a3()
r=$.hx()
r.$flags&2&&B.C(r)
r[0]=u
a6=$.kJ()[0]}else a6=w.a3()
if(a8.x===C.b2){u=w.a3()
r=$.hx()
r.$flags&2&&B.C(r)
r[0]=u
a7=$.kJ()[0]}else a7=w.a3()
if(a8.r===5)if(a8.x===C.b2){u=w.a3()
r=$.hx()
r.$flags&2&&B.C(r)
r[0]=u
a3=$.kJ()[0]}else a3=w.a3()}else{a4=0
a5=0
a6=0
a7=0}if(a8.d===C.a4R){A.cL9(a4,a5,a6,a7,h)
a4=h[0]
a5=h[1]
a6=h[2]
a7=a3}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.kp(e,g,a4,a5,a6,a7)}}}}else throw B.l(A.c6("Unsupported bitsPerSample: "+u))},
bbw(d,e,f,g,h,i){var x,w,v,u
for(x=0;x<i;++x)for(w=x+g,v=0;v<h;++v){u=d.a
u=u==null?null:u.ec(v,x,null)
if(u==null)u=new A.fi()
e.AN(v+f,w,u)}},
aZJ(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.cy
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
if(r===32773){q=D.c.an(a2,8)===0?D.c.b4(a2,8)*u:(D.c.b4(a2,8)+1)*u
x=A.cY(new Uint8Array(a2*u),!1,a1,0)
a0.al9(a3,q,x.a)}else if(r===5){x=A.cY(new Uint8Array(a2*u),!1,a1,0)
A.cDr().Hd(0,A.ca(a3,s,0),x.a)
if(a0.Q===2)for(p=0;p<a0.c;++p){o=a0.r
n=o*(p*a0.b+1)
for(;o<a0.b*a0.r;++o){a2=x
u=J.v(a2.a,a2.d+n)
r=x
m=a0.r
m=J.v(r.a,r.d+(n-m))
J.bV(a2.a,a2.d+n,u+m);++n}}}else if(r===2){x=A.cY(new Uint8Array(a2*u),!1,a1,0)
try{A.cut(a0.dy,a0.ay,a0.ch).bxf(x,a3,0,a0.ch)}catch(l){}}else if(r===3){x=A.cY(new Uint8Array(a2*u),!1,a1,0)
try{A.cut(a0.dy,a0.ay,a0.ch).bxg(x,a3,0,a0.ch,a0.fr)}catch(l){}}else if(r===4){x=A.cY(new Uint8Array(a2*u),!1,a1,0)
try{A.cut(a0.dy,a0.ay,a0.ch).bxm(x,a3,0,a0.ch,a0.fx)}catch(l){}}else if(r===8)x=A.cY(C.iY.Cs(a3.Jh(0,0,s)),!1,a1,0)
else if(r===32946)x=A.cY(C.iY.Cs(a3.Jh(0,0,s)),!1,a1,0)
else if(r===1)x=a3
else throw B.l(A.c6("Unsupported Compression Type: "+r))
k=new A.bGw(x)
j=a4.gck()
a2=a0.z
i=a2?j:0
h=a2?0:j
for(g=t,f=0;f<a0.ch;++f,++g){for(e=v,d=0;d<a0.ay;++d,++e){a2=a4.a
u=a2==null
r=u?a1:a2.b
if(g<(r==null?0:r)){a2=u?a1:a2.a
a2=e>=(a2==null?0:a2)}else a2=!0
if(a2)break
a2=k.jc(1)
u=a4.a
if(a2===0){if(u!=null)u.fg(e,g,i,0,0)}else if(u!=null)u.fg(e,g,h,0,0)}k.c=0}},
al9(d,e,f){var x,w,v,u,t,s,r,q,p,o
for(x=J.cU(f),w=0,v=0;v<e;){u=w+1
t=J.v(d.a,d.d+w)
s=$.nq()
s.$flags&2&&B.C(s)
s[0]=t
r=$.ox()[0]
if(r>=0&&r<=127)for(t=r+1,w=u,q=0;q<t;++q,v=p,w=u){p=v+1
u=w+1
x.m(f,v,J.v(d.a,d.d+w))}else{t=r<=-1&&r>=-127
w=u+1
if(t){o=J.v(d.a,d.d+u)
for(t=-r+1,q=0;q<t;++q,v=p){p=v+1
x.m(f,v,o)}}}}},
Vg(d,e){var x=this.a
if(!x.a7(0,d))return e
x=x.i(0,d).ph(0)
x=x==null?null:x.C(0)
return x==null?0:x},
FO(d){return this.Vg(d,0)},
Vh(d){var x,w=this.a
if(!w.a7(0,d))return null
x=w.i(0,d)
w=x.ph(0)
w.toString
return B.rr(x.c,w.gxB(w),!0,y.p)}}
A.Ks.prototype={
J(){return"TiffFormat."+this.b}}
A.kD.prototype={
J(){return"TiffPhotometricType."+this.b}}
A.rZ.prototype={
J(){return"TiffImageType."+this.b}}
A.bGz.prototype={}
A.bl3.prototype={
Hd(d,e,f){var x,w,v,u,t,s,r=this
r.r=f
x=J.bA(f)
r.w=0
w=y.D.a(e.a)
r.e=w
r.f=w.length
r.b=e.d
if(w[0]===0&&w[1]===1)throw B.l(A.c6("Invalid LZW Data"))
r.aoY()
r.d=r.c=0
v=r.a4o()
w=r.x
u=0
while(!0){if(!(v!==257&&r.w<x))break
if(v===256){r.aoY()
v=r.a4o()
r.as=0
if(v===257)break
J.bV(r.r,r.w++,v)
u=v}else{t=r.Q
t.toString
if(v<t){r.anu(v)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bV(r.r,r.w++,w[s])
r.aiU(u,w[r.as-1])}else{r.anu(u)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bV(r.r,r.w++,w[s])
J.bV(r.r,r.w++,w[r.as-1])
r.aiU(u,w[r.as-1])}u=v}v=r.a4o()}},
aiU(d,e){var x,w=this,v=w.y
v===$&&B.b()
x=w.Q
x.toString
v.$flags&2&&B.C(v)
v[x]=e
v=w.z
v===$&&B.b()
v.$flags&2&&B.C(v)
v[x]=d
x=w.Q=x+1
if(x===511)w.a=10
else if(x===1023)w.a=11
else if(x===2047)w.a=12},
anu(d){var x,w,v,u,t,s,r=this
r.as=0
x=r.x
r.as=1
w=r.y
w===$&&B.b()
v=w[d]
x.$flags&2&&B.C(x)
x[0]=v
v=r.z
v===$&&B.b()
u=v[d]
for(t=1;u!==4098;t=s){s=t+1
r.as=s
x[t]=w[u]
u=v[u]}},
a4o(){var x,w,v,u,t=this,s=t.b,r=t.f
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
return D.c.h1(t.c,s)&C.arn[w-9]},
aoY(){var x,w,v=this
v.y=new Uint8Array(4096)
x=new Uint32Array(4096)
v.z=x
D.br.m0(x,0,4096,4098)
for(x=v.y,w=0;w<256;++w){x.$flags&2&&B.C(x)
x[w]=w}v.a=9
v.Q=258}}
A.bGx.prototype={
kf(d){var x,w,v=this.a
if(v==null)return null
v=v.f[d]
x=this.c
x===$&&B.b()
w=v.dj(0,x)
return w},
mX(d,e,f){var x=this,w=A.cY(e,!1,null,0)
x.c=w
w=x.ars(w)
x.a=w
if(w==null)return null
return x.kf(0)},
ars(d){var x,w,v,u,t,s,r,q,p,o=null,n=B.a([],y._),m=new A.bGz(n),l=d.am()
if(l!==18761&&l!==19789)return o
if(l===19789)d.e=!0
else d.e=!1
v=d.am()
m.d=v
if(v!==42)return o
u=d.a3()
t=A.ca(d,o,0)
t.d=u
x=t
for(v=y.p,s=y.aL;u!==0;){w=null
try{r=new A.aC_(B.I(v,s),C.DW,C.a4P,C.b57)
r.aUt(x)
w=r
q=w
if(!(q.b!==0&&q.c!==0))break}catch(p){break}n.push(w)
if(n.length===1){q=n[0]
m.a=q.b
m.b=q.c}u=x.a3()
if(u!==0)x.d=u}return n.length!==0?m:o}}
A.bLK.prototype={
NS(){var x,w=this.a,v=w.rH()
if((v&1)!==0)return!1
if((v>>>1&7)>3)return!1
if((v>>>4&1)===0)return!1
this.f.d=v>>>5
if(w.rH()!==2752925)return!1
x=this.b
x.a=w.am()
x.b=w.am()
return!0},
oe(d){var x,w,v,u=this,t=null
if(!u.b3d())return t
x=u.b
w=x.a
u.d=A.hT(t,t,C.a8,0,C.bm,x.b,t,0,4,t,C.a8,w,!1)
u.baK()
if(!u.bgt())return t
x=x.w
if(x.length!==0){v=A.cY(new B.e9(x),!1,t,0)
x=u.d
x.toString
x.e=A.cBp(v)}return u.d},
b3d(){var x,w,v,u,t=this
if(!t.NS())return!1
t.fr=A.d5V()
for(x=t.dy,w=0;w<4;++w){v=new Int32Array(2)
u=new Int32Array(2)
x[w]=new A.aDH(v,u,new Int32Array(2))}x=t.b
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
u=A.cHL(v.ji(u))
t.c=u
v.d+=x.d
u.dz(1)
t.c.dz(1)
t.bgB(t.x,t.fr)
t.bgs()
if(!t.bgw(v))return!1
t.bgy()
t.c.dz(1)
t.bgx()
return!0},
bgB(d,e){var x,w,v,u=this,t=u.c
t===$&&B.b()
t=t.dz(1)!==0
d.a=t
if(t){d.b=u.c.dz(1)!==0
if(u.c.dz(1)!==0){d.c=u.c.dz(1)!==0
for(t=d.d,x=0;x<4;++x){if(u.c.dz(1)!==0){w=u.c
v=w.dz(7)
w=w.dz(1)===1?-v:v}else w=0
t.$flags&2&&B.C(t)
t[x]=w}for(t=d.e,x=0;x<4;++x){if(u.c.dz(1)!==0){w=u.c
v=w.dz(6)
w=w.dz(1)===1?-v:v}else w=0
t.$flags&2&&B.C(t)
t[x]=w}}if(d.b)for(x=0;x<3;++x){t=e.a
w=u.c.dz(1)!==0?u.c.dz(8):255
t.$flags&2&&B.C(t)
t[x]=w}}else d.b=!1
return!0},
bgs(){var x,w,v,u=this,t=u.w,s=u.c
s===$&&B.b()
t.a=s.dz(1)!==0
t.b=u.c.dz(6)
t.c=u.c.dz(3)
s=u.c.dz(1)!==0
t.d=s
if(s)if(u.c.dz(1)!==0){for(s=t.e,x=0;x<4;++x)if(u.c.dz(1)!==0){w=u.c
v=w.dz(6)
w=w.dz(1)===1?-v:v
s.$flags&2&&B.C(s)
s[x]=w}for(s=t.f,x=0;x<4;++x)if(u.c.dz(1)!==0){w=u.c
v=w.dz(6)
w=w.dz(1)===1?-v:v
s.$flags&2&&B.C(s)
s[x]=w}}if(t.b===0)s=0
else s=t.a?1:2
u.bP=s
return!0},
bgw(d){var x,w,v,u,t,s,r,q=d.c-d.d,p=this.c
p===$&&B.b()
p=D.c.en(1,p.dz(2))
this.cy=p
x=p-1
w=x*3
if(q<w)return!1
for(p=this.db,v=0,u=0;u<x;++u,w=s){t=d.Sr(3,v)
s=w+((J.v(t.a,t.d)|J.v(t.a,t.d+1)<<8|J.v(t.a,t.d+2)<<16)>>>0)
if(s>q)s=q
r=new A.a87(d.AW(s-w,w))
r.b=254
r.c=0
r.d=-8
p[u]=r
v+=3}p[x]=A.cHL(d.AW(q-w,d.d-d.b+w))
return w<q},
bgy(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
h===$&&B.b()
x=h.dz(7)
w=i.c.dz(1)!==0?i.c.JR(4):0
v=i.c.dz(1)!==0?i.c.JR(4):0
u=i.c.dz(1)!==0?i.c.JR(4):0
t=i.c.dz(1)!==0?i.c.JR(4):0
s=i.c.dz(1)!==0?i.c.JR(4):0
r=i.x
for(h=i.dy,q=r.a,p=!r.c,o=r.d,n=0;n<4;++n){if(q){m=o[n]
if(p)m+=x}else{if(n>0){h[n]=h[0]
continue}m=x}l=h[n]
k=l.a
j=m+w
if(j<0)j=0
else if(j>127)j=127
j=C.AZ[j]
k.$flags&2&&B.C(k)
k[0]=j
if(m<0)j=0
else j=m>127?127:m
k[1]=C.B_[j]
j=l.b
k=m+v
if(k<0)k=0
else if(k>127)k=127
k=C.AZ[k]
j.$flags&2&&B.C(j)
j[0]=k*2
k=m+u
if(k<0)k=0
else if(k>127)k=127
j[1]=C.B_[k]*101581>>>16
if(j[1]<8)j[1]=8
k=l.c
j=m+t
if(j<0)j=0
else if(j>117)j=117
j=C.AZ[j]
k.$flags&2&&B.C(k)
k[0]=j
j=m+s
if(j<0)j=0
else if(j>127)j=127
k[1]=C.B_[j]}},
bgx(){var x,w,v,u,t,s,r=this,q=r.fr
for(x=0;x<4;++x)for(w=0;w<8;++w)for(v=0;v<3;++v)for(u=0;u<11;++u){t=r.c
t===$&&B.b()
s=t.ip(C.aBp[x][w][v][u])!==0?r.c.dz(8):C.arj[x][w][v][u]
t=q.b[x][w].a[v]
t.$flags&2&&B.C(t)
t[u]=s}t=r.c
t===$&&B.b()
t=t.dz(1)!==0
r.fx=t
if(t)r.fy=r.c.dz(8)},
bhy(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.bP
k.toString
if(k>0){x=l.w
for(k=x.e,w=x.f,v=l.x,u=v.e,t=0;t<4;++t){if(v.a){s=u[t]
if(!v.c){r=x.b
r.toString
s+=r}}else s=x.b
for(q=0;q<=1;++q){r=l.aK
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
if(r>0){n=r>4?D.c.S(o,2):D.c.S(o,1)
m=9-r
if(n>m)n=m}else n=o
if(n<1)n=1
p.b=n
p.a=2*o+n
if(o>=40)r=2
else r=o>=15?1:0
p.d=r}else p.a=0
p.c=q!==0}}}},
baK(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k.at
if(j!=null)m.bo=j
x=J.iN(4,y.K)
for(j=y.q,w=0;w<4;++w)x[w]=B.a([new A.L1(),new A.L1()],j)
m.aK=x
j=m.at
j.toString
x=J.iN(j,y.bt)
for(v=0;v<j;++v){u=new Uint8Array(16)
t=new Uint8Array(8)
x[v]=new A.aDI(u,t,new Uint8Array(8))}m.k2=x
m.ok=new Uint8Array(832)
j=m.at
j.toString
m.go=new Uint8Array(4*j)
u=m.p4=16*j
j=8*j
m.R8=j
t=m.bP
t.toString
s=C.AI[t]
r=s*u
q=(s/2|0)*j
m.p1=A.cY(new Uint8Array(16*u+r),!1,l,r)
j=m.R8
j.toString
m.p2=A.cY(new Uint8Array(8*j+q),!1,l,q)
j=m.R8
j.toString
m.p3=A.cY(new Uint8Array(8*j+q),!1,l,q)
j=k.a
m.RG=A.cY(new Uint8Array(j),!1,l,0)
p=k.a+1>>>1
m.rx=A.cY(new Uint8Array(p),!1,l,0)
m.ry=A.cY(new Uint8Array(p),!1,l,0)
k=m.bP
k.toString
o=C.AI[k]
if(k===2)m.ch=m.ay=0
else{k=m.y
k===$&&B.b()
k=D.c.b4(k-o,16)
m.ay=k
j=m.Q
j.toString
j=D.c.b4(j-o,16)
m.ch=j
if(k<0)m.ay=0
if(j<0)m.ch=0}k=m.as
k.toString
k=D.c.b4(k+15+o,16)
m.cx=k
j=m.z
j===$&&B.b()
j=D.c.b4(j+15+o,16)
m.CW=j
u=m.at
u.toString
if(j>u)m.CW=u
j=m.ax
j.toString
if(k>j)m.cx=j
n=u+1
x=J.iN(n,y.bQ)
for(v=0;v<n;++v)x[v]=new A.aDF()
m.k3=x
k=m.at
k.toString
x=J.iN(k,y.bl)
for(v=0;v<k;++v){j=new Int16Array(384)
x[v]=new A.aDG(j,new Uint8Array(16))}m.c0=x
k=m.at
k.toString
m.k4=B.bO(k,l,!1,y.B)
m.bhy()
A.d5m()
m.e=new A.bLL()
return!0},
bgt(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
t=j.c0
t===$&&B.b()
p=t[u]
if(w.b){u=j.c
u===$&&B.b()
u=u.ip(j.fr.a[0])
t=j.c
o=j.fr
j.k1=u===0?t.ip(o.a[1]):2+t.ip(o.a[2])}u=j.fx
u===$&&B.b()
if(u){u=j.c
u===$&&B.b()
t=j.fy
t===$&&B.b()
n=u.ip(t)!==0}else n=!1
j.bgu()
if(!n)n=j.bgz(q,s)
else{r.a=q.a=0
u=p.b
u===$&&B.b()
if(!u)r.b=q.b=0
p.f=p.e=0}u=j.bP
u.toString
if(u>0){u=j.k4
u===$&&B.b()
t=j.y1
o=j.aK
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
D.B.m0(x,0,4,0)
j.y1=0
j.biB()
u=j.bP
u.toString
k=!1
if(u>0){u=j.y2
t=j.ch
t===$&&B.b()
if(u>=t){t=j.cx
t.toString
t=u<=t
k=t}}if(!j.b22(k))return!1
u=++j.y2}return!0},
biB(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.y2,a5=a2.ok
a5===$&&B.b()
x=A.cY(a5,!1,a3,40)
w=A.cY(a2.ok,!1,a3,584)
v=A.cY(a2.ok,!1,a3,600)
a5=a4>0
u=0
while(!0){t=a2.at
t.toString
if(!(u<t))break
t=a2.c0
t===$&&B.b()
s=t[u]
if(u>0){for(r=-1;r<16;++r){t=r*32
x.rC(t-4,4,x,t+12)}for(r=-1;r<8;++r){t=r*32
q=t-4
t+=4
w.rC(q,4,w,t)
v.rC(q,4,v,t)}}else{for(r=0;r<16;++r)J.bV(x.a,x.d+(r*32-1),129)
for(r=0;r<8;++r){t=r*32-1
J.bV(w.a,w.d+t,129)
J.bV(v.a,v.d+t,129)}if(a5){J.bV(v.a,v.d+-33,129)
J.bV(w.a,w.d+-33,129)
J.bV(x.a,x.d+-33,129)}}t=a2.k2
t===$&&B.b()
p=t[u]
o=s.a
n=s.e
if(a5){x.A2(-32,16,p.a)
w.A2(-32,8,p.b)
v.A2(-32,8,p.c)}else if(u===0){t=x.a
q=x.d+-33
J.tu(t,q,q+21,127)
q=w.a
t=w.d+-33
J.tu(q,t,t+9,127)
t=v.a
q=v.d+-33
J.tu(t,q,q+9,127)}t=s.b
t===$&&B.b()
if(t){m=A.ca(x,a3,-16)
l=m.QA()
if(a5){t=a2.at
t.toString
if(u>=t-1){t=p.a[15]
q=m.a
k=m.d
J.tu(q,k,k+4,t)}else m.A2(0,4,a2.k2[u+1].a)}j=l[0]
l.$flags&2&&B.C(l)
l[96]=j
l[64]=j
l[32]=j
for(t=s.c,i=0;i<16;++i,n=n<<2>>>0){h=A.ca(x,a3,C.RT[i])
C.ayb[t[i]].$1(h)
n.toString
q=i*16
a2.alH(n,new A.lZ(o,q,Math.min(384,384),q,!1),h)}}else{t=A.cHO(u,a4,s.c[0])
t.toString
C.aCN[t].$1(x)
if(n!==0)for(i=0;i<16;++i,n=n<<2>>>0){h=A.ca(x,a3,C.RT[i])
n.toString
t=i*16
a2.alH(n,new A.lZ(o,t,Math.min(384,384),t,!1),h)}}t=s.f
t===$&&B.b()
q=A.cHO(u,a4,s.d)
q.toString
C.N1[q].$1(w)
C.N1[q].$1(v)
q=Math.min(384,384)
g=new A.lZ(o,256,q,256,!1)
if((t&255)!==0){k=a2.e
if((t&170)!==0){k===$&&B.b()
k.vB(g,w)
k.vB(A.ca(g,a3,16),A.ca(w,a3,4))
f=A.ca(g,a3,32)
e=A.ca(w,a3,128)
k.vB(f,e)
k.vB(A.ca(f,a3,16),A.ca(e,a3,4))}else{k===$&&B.b()
k.aG2(g,w)}}d=new A.lZ(o,320,q,320,!1)
t=t>>>8
if((t&255)!==0){q=a2.e
if((t&170)!==0){q===$&&B.b()
q.vB(d,v)
q.vB(A.ca(d,a3,16),A.ca(v,a3,4))
t=A.ca(d,a3,32)
k=A.ca(v,a3,128)
q.vB(t,k)
q.vB(A.ca(t,a3,16),A.ca(k,a3,4))}else{q===$&&B.b()
q.aG2(d,v)}}t=a2.ax
t.toString
if(a4<t-1){D.B.e3(p.a,0,16,x.hL(),480)
D.B.e3(p.b,0,8,w.hL(),224)
D.B.e3(p.c,0,8,v.hL(),224)}a0=u*16
a1=u*8
for(r=0;r<16;++r){t=a2.p4
t.toString
q=a2.p1
q===$&&B.b()
q.rC(a0+r*t,16,x,r*32)}for(r=0;r<8;++r){t=a2.R8
t.toString
q=a2.p2
q===$&&B.b()
k=r*32
q.rC(a1+r*t,8,w,k)
t=a2.R8
t.toString
q=a2.p3
q===$&&B.b()
q.rC(a1+r*t,8,v,k)}++u}},
alH(d,e,f){var x,w,v,u,t,s
switch(d>>>30){case 3:x=this.e
x===$&&B.b()
x.Jo(0,e,f,!1)
break
case 2:this.e===$&&B.b()
w=J.v(e.a,e.d)+4
v=D.c.lc(D.c.S(J.v(e.a,e.d+4)*35468,16),32)
u=D.c.lc(D.c.S(J.v(e.a,e.d+4)*85627,16),32)
t=D.c.lc(D.c.S(J.v(e.a,e.d+1)*35468,16),32)
s=D.c.lc(D.c.S(J.v(e.a,e.d+1)*85627,16),32)
A.bLN(f,0,w+u,s,t)
A.bLN(f,1,w+v,s,t)
A.bLN(f,2,w-v,s,t)
A.bLN(f,3,w-u,s,t)
break
case 1:x=this.e
x===$&&B.b()
x.QB(e,f)
break
default:break}},
b0e(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.p4,j=m.k4
j===$&&B.b()
j=j[d]
j.toString
x=m.p1
x===$&&B.b()
w=A.ca(x,l,d*16)
v=j.b
u=j.a
if(u===0)return
if(m.bP===1){if(d>0){x=m.e
x===$&&B.b()
k.toString
x.agS(w,k,u+4)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.aML(w,k,u)}if(e>0){x=m.e
x===$&&B.b()
k.toString
x.agT(w,k,u+4)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.aMO(w,k,u)}}else{t=m.R8
x=m.p2
x===$&&B.b()
s=d*8
r=A.ca(x,l,s)
x=m.p3
x===$&&B.b()
q=A.ca(x,l,s)
p=j.d
if(d>0){x=m.e
x===$&&B.b()
k.toString
s=u+4
x.Fk(w,1,k,16,s,v,p)
t.toString
x.Fk(r,1,t,8,s,v,p)
x.Fk(q,1,t,8,s,v,p)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.bAu(w,k,u,v,p)
t.toString
o=A.ca(r,l,4)
n=A.ca(q,l,4)
x.Fj(o,1,t,8,u,v,p)
x.Fj(n,1,t,8,u,v,p)}if(e>0){x=m.e
x===$&&B.b()
k.toString
s=u+4
x.Fk(w,k,1,16,s,v,p)
t.toString
x.Fk(r,t,1,8,s,v,p)
x.Fk(q,t,1,8,s,v,p)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.bM8(w,k,u,v,p)
t.toString
x=4*t
o=A.ca(r,l,x)
n=A.ca(q,l,x)
j.Fj(o,t,1,8,u,v,p)
j.Fj(n,t,1,8,u,v,p)}}},
b1N(){var x,w=this,v=w.ay
v===$&&B.b()
x=v
while(!0){v=w.CW
v.toString
if(!(x<v))break
w.b0e(x,w.y2);++x}},
b22(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.bP
e.toString
x=C.AI[e]
e=g.p4
e.toString
w=x*e
e=g.R8
e.toString
v=(x/2|0)*e
e=g.p1
e===$&&B.b()
u=-w
t=A.ca(e,f,u)
e=g.p2
e===$&&B.b()
s=-v
r=A.ca(e,f,s)
e=g.p3
e===$&&B.b()
q=A.ca(e,f,s)
p=g.y2
e=g.cx
e.toString
o=p*16
n=(p+1)*16
if(d)g.b1N()
if(p!==0){o-=x
g.to=A.ca(t,f,0)
g.x1=A.ca(r,f,0)
g.x2=A.ca(q,f,0)}else{g.to=A.ca(g.p1,f,0)
g.x1=A.ca(g.p2,f,0)
g.x2=A.ca(g.p3,f,0)}e=p<e-1
if(e)n-=x
m=g.as
m.toString
if(n>m)n=m
g.xr=null
if(g.bo!=null&&o<n){m=g.xr=g.b_2(o,n-o)
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
j*=D.c.S(k,1)
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
g.bhX(0,o-l,m-h,n-o)}if(e){e=g.p1
m=g.p4
m.toString
e.rC(u,w,t,16*m)
m=g.p2
u=g.R8
u.toString
m.rC(s,v,r,8*u)
u=g.p3
m=g.R8
m.toString
u.rC(s,v,q,8*m)}return!0},
bhX(d,e,f,g){if(f<=0||g<=0)return!1
this.b11(e,f,g)
this.b10(e,f,g)
return!0},
a3i(d){var x
if((d&-4194304)>>>0===0)x=D.c.S(d,14)
else x=d<0?0:255
return x},
WM(d,e,f,g){var x=19077*d
g.m(0,0,this.a3i(x+26149*f+-3644112))
g.m(0,1,this.a3i(x-6419*e-13320*f+2229552))
g.m(0,2,this.a3i(x+33050*e+-4527440))},
Wv(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=new A.bLX(),a0=b3-1,a1=D.c.S(a0,1),a2=d.$2(J.v(a7.a,a7.d),J.v(a8.a,a8.d)),a3=d.$2(J.v(a9.a,a9.d),J.v(b0.a,b0.d)),a4=D.c.S(3*a2+a3+131074,2)
f.WM(J.v(a5.a,a5.d),a4&255,a4>>>16,b1)
b1.m(0,3,255)
x=a6!=null
if(x){a4=D.c.S(3*a3+a2+131074,2)
w=J.v(a6.a,a6.d)
b2.toString
f.WM(w,a4&255,a4>>>16,b2)
b2.m(0,3,255)}for(v=1;v<=a1;++v,a3=t,a2=u){u=d.$2(J.v(a7.a,a7.d+v),J.v(a8.a,a8.d+v))
t=d.$2(J.v(a9.a,a9.d+v),J.v(b0.a,b0.d+v))
s=a2+u+a3+t+524296
r=D.c.S(s+2*(u+a3),3)
q=D.c.S(s+2*(a2+t),3)
a4=D.c.S(r+a2,1)
p=D.c.S(q+u,1)
w=2*v
o=w-1
n=J.v(a5.a,a5.d+o)
m=a4&255
l=a4>>>16
k=o*4
j=A.ca(b1,e,k)
n=19077*n
i=n+26149*l+-3644112
if((i&-4194304)>>>0===0)h=D.c.S(i,14)
else h=i<0?0:255
J.bV(j.a,j.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.S(l,14)
else h=l<0?0:255
J.bV(j.a,j.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.S(n,14)
else h=n<0?0:255
J.bV(j.a,j.d+2,h)
J.bV(j.a,j.d+3,255)
n=J.v(a5.a,a5.d+w)
m=p&255
l=p>>>16
j=w*4
i=A.ca(b1,e,j)
n=19077*n
g=n+26149*l+-3644112
if((g&-4194304)>>>0===0)h=D.c.S(g,14)
else h=g<0?0:255
J.bV(i.a,i.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.S(l,14)
else h=l<0?0:255
J.bV(i.a,i.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.S(n,14)
else h=n<0?0:255
J.bV(i.a,i.d+2,h)
J.bV(i.a,i.d+3,255)
if(x){a4=D.c.S(q+a3,1)
p=D.c.S(r+t,1)
o=J.v(a6.a,a6.d+o)
n=a4&255
m=a4>>>16
b2.toString
k=A.ca(b2,e,k)
o=19077*o
l=o+26149*m+-3644112
if((l&-4194304)>>>0===0)h=D.c.S(l,14)
else h=l<0?0:255
J.bV(k.a,k.d,h)
m=o-6419*n-13320*m+2229552
if((m&-4194304)>>>0===0)h=D.c.S(m,14)
else h=m<0?0:255
J.bV(k.a,k.d+1,h)
o=o+33050*n+-4527440
if((o&-4194304)>>>0===0)h=D.c.S(o,14)
else h=o<0?0:255
J.bV(k.a,k.d+2,h)
J.bV(k.a,k.d+3,255)
w=J.v(a6.a,a6.d+w)
o=p&255
n=p>>>16
j=A.ca(b2,e,j)
w=19077*w
m=w+26149*n+-3644112
if((m&-4194304)>>>0===0)h=D.c.S(m,14)
else h=m<0?0:255
J.bV(j.a,j.d,h)
n=w-6419*o-13320*n+2229552
if((n&-4194304)>>>0===0)h=D.c.S(n,14)
else h=n<0?0:255
J.bV(j.a,j.d+1,h)
w=w+33050*o+-4527440
if((w&-4194304)>>>0===0)h=D.c.S(w,14)
else h=w<0?0:255
J.bV(j.a,j.d+2,h)
J.bV(j.a,j.d+3,255)}}if((b3&1)===0){a4=D.c.S(3*a2+a3+131074,2)
w=J.v(a5.a,a5.d+a0)
o=a0*4
n=A.ca(b1,e,o)
f.WM(w,a4&255,a4>>>16,n)
n.m(0,3,255)
if(x){a4=D.c.S(3*a3+a2+131074,2)
a0=J.v(a6.a,a6.d+a0)
b2.toString
o=A.ca(b2,e,o)
f.WM(a0,a4&255,a4>>>16,o)
o.m(0,3,255)}}},
b10(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.xr
if(o==null)return
x=A.ca(o,null,0)
if(d===0){w=f-1
v=d}else{v=d-1
x.d=x.d-p.b.a
w=f}o=p.Q
o.toString
u=p.as
if(o+d+f===u){u.toString
w=u-o-v}for(o=p.b,t=0;t<w;++t){for(u=t+v,s=0;s<e;++s){r=J.v(x.a,x.d+s)
q=p.d.a
q=q==null?null:q.ec(s,u,null);(q==null?new A.fi():q).saE(0,r)}x.d=x.d+o.a}},
b11(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=A.cY(J.df(l.d.gaj(0),0,null),!1,k,d*j.a*4),h=l.to
h===$&&B.b()
x=A.ca(h,k,0)
h=l.x1
h===$&&B.b()
w=A.ca(h,k,0)
h=l.x2
h===$&&B.b()
v=A.ca(h,k,0)
u=d+f
t=D.c.S(e+1,1)
s=j.a*4
j=l.rx
j===$&&B.b()
r=A.ca(j,k,0)
j=l.ry
j===$&&B.b()
q=A.ca(j,k,0)
if(d===0){l.Wv(x,k,w,v,w,v,i,k,e)
p=f}else{j=l.RG
j===$&&B.b()
l.Wv(j,x,r,q,w,v,A.ca(i,k,-s),i,e)
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
l.Wv(A.ca(x,k,-n),x,r,q,w,v,A.ca(i,k,h),i,e)}j=x.d
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
l.ry.A2(0,t,v);--p}else if((u&1)===0)l.Wv(x,k,w,v,w,v,A.ca(i,k,s),k,e)
return p},
b_2(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.b,m=n.a,l=n.b
if(d<0||e<=0||d+e>l)return null
if(d===0){n=m*l
o.bx=new Uint8Array(n)
x=o.bo
w=new A.bMK(x,m,l)
v=x.ct()
w.d=v&3
w.e=D.c.S(v,2)&3
w.f=D.c.S(v,4)&3
w.r=D.c.S(v,6)&3
if(w.geD()){u=w.d
if(u===0){if(x.c-x.d<n)w.r=1}else if(u===1){t=new A.aE6(C.of,B.a([],y.J))
t.a=m
t.b=l
n=B.a([],y.A)
u=B.a([],y.F)
s=new Uint32Array(2)
r=new A.aDD(x,s)
s=r.d=J.df(D.br.gaj(s),0,null)
q=x.ct()
s.$flags&2&&B.C(s)
s[0]=q
s[1]=x.ct()
s[2]=x.ct()
s[3]=x.ct()
s[4]=x.ct()
s[5]=x.ct()
s[6]=x.ct()
s[7]=x.ct()
u=new A.arR(r,t,n,u)
u.db=m
w.x=u
u.L4(m,l,!0)
n=w.x
x=n.ax
if(x.length===1&&x[0].a===C.a5K&&n.bbe()){w.y=!0
n=w.x
x=n.c
p=x.a*x.b
n.cx=0
x=D.c.an(p,4)
x=new Uint8Array(p+(4-x))
n.CW=x
n.ch=J.oy(D.B.gaj(x),0,null)}else{w.y=!1
w.x.aj4()}}else w.r=1}o.bb=w}n=o.bb
n===$&&B.b()
if(!n.w){x=o.bx
x===$&&B.b()
if(!n.NR(0,d,e,x))return null}n=o.bx
n===$&&B.b()
return A.cY(n,!1,null,d*m)},
bgz(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.fr.b,a3=a1.k1
a3===$&&B.b()
x=a1.dy[a3]
a3=a1.c0
a3===$&&B.b()
w=a3[a1.y1]
v=A.cY(w.a,!1,null,0)
a3=a1.k3
a3===$&&B.b()
u=a3[0]
v.bF7(0,v.c-v.d,0)
a3=w.b
a3===$&&B.b()
if(!a3){t=A.cY(new Int16Array(16),!1,null,0)
a3=a4.b
s=u.b
r=a1.a4i(a5,a2[1],a3+s,x.b,0,t)
a4.b=u.b=r>0?1:0
if(r>1)a1.boq(t,v)
else{q=D.c.S(J.v(t.a,t.d)+3,3)
for(p=0;p<256;p+=16)J.bV(v.a,v.d+p,q)}o=a2[0]
n=1}else{o=a2[3]
n=0}m=a4.a&15
l=u.a&15
for(k=0,j=0;j<4;++j){i=l&1
for(h=0,g=0;g<4;++g){r=a1.a4i(a5,o,i+(m&1),x.a,n,v)
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
m=D.c.hA(a4.a,a3)
l=D.c.hA(u.a,a3)
for(h=0,j=0;j<2;++j){i=l&1
for(g=0;g<2;++g){r=a1.a4i(a5,a2[2],i+(m&1),x.c,0,v)
i=r>0?1:0
m=m>>>1|i<<3
a3=J.v(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=(h<<2|a3)>>>0
v.d+=16}m=m>>>2
l=l>>>1|i<<5}d=(d|D.c.en(h,4*a0))>>>0
e=(e|D.c.en(m<<4>>>0,a0))>>>0
f=(f|D.c.en(l&240,a0))>>>0}a4.a=e
u.a=f
w.e=k
w.f=d
if((d&43690)===0)x.toString
return(k|d)>>>0===0},
boq(d,e){var x,w,v,u,t,s,r,q,p,o,n=new Int32Array(16)
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
u=D.c.S(v+s,3)
J.bV(e.a,e.d+p,u)
u=D.c.S(q+r,3)
J.bV(e.a,e.d+(p+16),u)
u=D.c.S(v-s,3)
J.bV(e.a,e.d+(p+32),u)
u=D.c.S(q-r,3)
J.bV(e.a,e.d+(p+48),u)
p+=64}},
b3k(d,e){var x,w,v,u,t,s
if(d.ip(e[3])===0)x=d.ip(e[4])===0?2:3+d.ip(e[5])
else if(d.ip(e[6])===0)x=d.ip(e[7])===0?5+d.ip(159):7+2*d.ip(165)+d.ip(145)
else{w=d.ip(e[8])
v=2*w+d.ip(e[9+w])
u=C.asR[v]
t=u.length
for(x=0,s=0;s<t;++s)x+=x+d.ip(u[s])
x+=3+D.c.en(8,v)}return x},
a4i(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=e[h].a[f]
for(;h<16;h=x){if(d.ip(p[0])===0)return h
for(;d.ip(p[1])===0;){++h
p=e[C.Qd[h]].a[0]
if(h===16)return 16}x=h+1
w=e[C.Qd[x]].a
if(d.ip(p[2])===0){p=w[1]
v=1}else{v=this.b3k(d,p)
p=w[2]}u=C.ax4[h]
t=d.b
t===$&&B.b()
s=d.ajp(D.c.S(t,1))
t=d.b
r=C.Pi[t]
d.b=C.Pg[t]
t=d.d
t===$&&B.b()
d.d=t-r
t=s!==0?-v:v
q=g[h>0?1:0]
J.bV(i.a,i.d+u,t*q)}return 16},
bgu(){var x,w,v,u,t,s,r,q,p,o=this,n=o.y1,m=4*n,l=o.go,k=o.id,j=o.c0
j===$&&B.b()
x=j[n]
n=o.c
n===$&&B.b()
n=n.ip(145)===0
x.b=n
if(!n){if(o.c.ip(156)!==0)w=o.c.ip(128)!==0?1:3
else w=o.c.ip(163)!==0?2:0
n=x.c
n.$flags&2&&B.C(n)
n[0]=w
l.toString
D.B.m0(l,m,m+4,w)
D.B.m0(k,0,4,w)}else{v=x.c
for(n=k.$flags|0,u=0,t=0;t<4;++t,u=p){w=k[t]
for(s=0;s<4;++s){j=m+s
r=C.axh[l[j]][w]
q=C.O3[o.c.ip(r[0])]
for(;q>0;)q=C.O3[2*q+o.c.ip(r[q])]
w=-q
l.$flags&2&&B.C(l)
l[j]=w}p=u+4
l.toString
D.B.e3(v,u,p,l,m)
n&2&&B.C(k)
k[t]=w}}if(o.c.ip(142)===0)n=0
else if(o.c.ip(114)===0)n=2
else n=o.c.ip(183)!==0?1:3
x.d=n}}
A.a87.prototype={
dz(d){var x,w
for(x=0;w=d-1,d>0;d=w)x=(x|D.c.eU(this.ip(128),w))>>>0
return x},
JR(d){var x=this.dz(d)
return this.dz(1)===1?-x:x},
ip(d){var x,w=this,v=w.b
v===$&&B.b()
x=w.ajp(D.c.S(v*d,8))
if(w.b<=126)w.blD()
return x},
ajp(d){var x,w,v,u,t,s=this,r=s.d
r===$&&B.b()
if(r<0){x=s.a
w=x.c
v=x.d
if(w-v>=1){u=x.ct()
r=s.c
r===$&&B.b()
s.c=(u|r<<8)>>>0
r=s.d+8
s.d=r
t=r}else{if(v<w){r=x.ct()
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
if(D.c.o2(r,t)>d){x=s.b
x===$&&B.b()
w=d+1
s.b=x-w
s.c=r-D.c.eU(w,t)
return 1}else{s.b=d
return 0}},
blD(){var x,w=this,v=w.b
v===$&&B.b()
x=C.Pi[v]
w.b=C.Pg[v]
v=w.d
v===$&&B.b()
w.d=v-x}}
A.bLL.prototype={
agT(d,e,f){var x,w=A.ca(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x
if(this.aq6(w,e,f))this.To(w,e)}},
agS(d,e,f){var x,w=A.ca(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x*e
if(this.aq6(w,1,f))this.To(w,1)}},
aMO(d,e,f){var x,w,v=A.ca(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.agT(v,e,f)}},
aML(d,e,f){var x,w=A.ca(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.agS(w,e,f)}},
bM8(d,e,f,g,h){var x,w,v=A.ca(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.Fj(v,e,1,16,f,g,h)}},
bAu(d,e,f,g,h){var x,w=A.ca(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.Fj(w,1,e,16,f,g,h)}},
Fk(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=A.ca(d,null,0)
for(x=-3*e,w=-2*e,v=-e,u=2*e;t=g-1,g>0;g=t){if(this.aq7(h,e,a0,a1))if(this.aoz(h,e,a2))this.To(h,e)
else{s=J.v(h.a,h.d+x)
r=J.v(h.a,h.d+w)
q=J.v(h.a,h.d+v)
p=J.v(h.a,h.d)
o=J.v(h.a,h.d+e)
n=J.v(h.a,h.d+u)
m=$.cq9()
l=m[1020+3*(p-q)+m[1020+r-o]]
m=D.c.S(27*l+63,7)
k=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.S(18*l+63,7)
j=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.S(9*l+63,7)
i=(m&2147483647)-((m&2147483648)>>>0)
m=$.pO()[255+s+i]
J.bV(h.a,h.d+x,m)
m=$.pO()[255+r+j]
J.bV(h.a,h.d+w,m)
m=$.pO()[255+q+k]
J.bV(h.a,h.d+v,m)
m=$.pO()[255+p-k]
J.bV(h.a,h.d,m)
m=$.pO()[255+o-j]
J.bV(h.a,h.d+e,m)
m=$.pO()[255+n-i]
J.bV(h.a,h.d+u,m)}h.d+=f}},
Fj(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=A.ca(d,null,0)
for(x=-2*e,w=-e;v=g-1,g>0;g=v){if(this.aq7(k,e,h,i))if(this.aoz(k,e,j))this.To(k,e)
else{u=J.v(k.a,k.d+x)
t=J.v(k.a,k.d+w)
s=J.v(k.a,k.d)
r=J.v(k.a,k.d+e)
q=3*(s-t)
p=$.aWn()
o=D.c.S(q+4,3)
n=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.S(q+3,3)
m=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.S(n+1,1)
l=(o&2147483647)-((o&2147483648)>>>0)
o=$.pO()[255+u+l]
J.bV(k.a,k.d+x,o)
o=$.pO()[255+t+m]
J.bV(k.a,k.d+w,o)
o=$.pO()[255+s-n]
J.bV(k.a,k.d,o)
o=$.pO()[255+r-l]
J.bV(k.a,k.d+e,o)}k.d+=f}},
To(d,e){var x=J.v(d.a,d.d+-2*e),w=-e,v=J.v(d.a,d.d+w),u=J.v(d.a,d.d),t=J.v(d.a,d.d+e),s=3*(u-v)+$.cq9()[1020+x-t],r=$.aWn()[112+D.c.lc(D.c.S(s+4,3),32)],q=$.aWn()[112+D.c.lc(D.c.S(s+3,3),32)]
d.m(0,w,$.pO()[255+v+q])
d.m(0,0,$.pO()[255+u-r])},
aoz(d,e,f){var x=J.v(d.a,d.d+-2*e),w=J.v(d.a,d.d+-e),v=J.v(d.a,d.d),u=J.v(d.a,d.d+e),t=$.aWm()
return t[255+x-w]>f||t[255+u-v]>f},
aq6(d,e,f){var x=J.v(d.a,d.d+-2*e),w=J.v(d.a,d.d+-e),v=J.v(d.a,d.d),u=J.v(d.a,d.d+e)
return 2*$.aWm()[255+w-v]+$.cq8()[255+x-u]<=f},
aq7(d,e,f,g){var x=J.v(d.a,d.d+-4*e),w=J.v(d.a,d.d+-3*e),v=J.v(d.a,d.d+-2*e),u=J.v(d.a,d.d+-e),t=J.v(d.a,d.d),s=J.v(d.a,d.d+e),r=J.v(d.a,d.d+2*e),q=J.v(d.a,d.d+3*e),p=$.aWm(),o=255+v
if(2*p[255+u-t]+$.cq8()[o-s]>f)return!1
return p[255+x-w]<=g&&p[255+w-v]<=g&&p[o-u]<=g&&p[255+q-r]<=g&&p[255+r-s]<=g&&p[255+s-t]<=g},
vB(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=new Int32Array(16)
for(x=0,w=0,v=0;v<4;++v){u=x+8
t=J.v(d.a,d.d+x)+J.v(d.a,d.d+u)
s=J.v(d.a,d.d+x)-J.v(d.a,d.d+u)
u=x+4
r=D.c.S(J.v(d.a,d.d+u)*35468,16)
q=x+12
p=D.c.S(J.v(d.a,d.d+q)*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.c.S(J.v(d.a,d.d+u)*85627,16)
q=D.c.S(J.v(d.a,d.d+q)*35468,16)
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
r=D.c.S(u*35468,16)
q=j[w+12]
p=D.c.S(q*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.c.S(u*85627,16)
q=D.c.S(q*35468,16)
n=(u&2147483647)-((u&2147483648)>>>0)+((q&2147483647)-((q&2147483648)>>>0))
A.EB(e,l,0,0,t+n)
A.EB(e,l,1,0,s+o)
A.EB(e,l,2,0,s-o)
A.EB(e,l,3,0,t-n);++w
l+=32}},
Jo(d,e,f,g){this.vB(e,f)
if(g)this.vB(A.ca(e,null,16),A.ca(f,null,4))},
QB(d,e){var x,w,v=J.v(d.a,d.d)+4
for(x=0;x<4;++x)for(w=0;w<4;++w)A.EB(e,0,w,x,v)},
aG2(d,e){var x=this,w=null
if(J.v(d.a,d.d)!==0)x.QB(d,e)
if(J.v(d.a,d.d+16)!==0)x.QB(A.ca(d,w,16),A.ca(e,w,4))
if(J.v(d.a,d.d+32)!==0)x.QB(A.ca(d,w,32),A.ca(e,w,128))
if(J.v(d.a,d.d+48)!==0)x.QB(A.ca(d,w,48),A.ca(e,w,132))}}
A.bLQ.prototype={}
A.bLU.prototype={}
A.bLW.prototype={}
A.a86.prototype={}
A.bLV.prototype={}
A.bLM.prototype={}
A.L1.prototype={}
A.aDF.prototype={}
A.aDH.prototype={}
A.aDG.prototype={}
A.aDI.prototype={}
A.a88.prototype={
NS(){var x,w=this.b
if(w.jc(8)!==47)return!1
x=this.c
x.f=C.xc
x.a=w.jc(14)+1
x.b=w.jc(14)+1
x.d=w.jc(1)!==0
if(w.jc(3)!==0)return!1
return!0},
oe(d){var x,w,v,u,t,s=this,r=null
s.e=0
if(!s.NS())return r
x=s.c
s.L4(x.a,x.b,!0)
s.aj4()
w=x.a
s.d=A.hT(r,r,C.a8,0,C.bm,x.b,r,0,4,r,C.a8,w,!1)
w=s.ch
w.toString
v=x.a
u=x.b
if(!s.a3E(w,v,u,u,s.gbhG()))return r
x=x.w
if(x.length!==0){t=A.cY(new B.e9(x),!1,r,0)
x=s.d
x.toString
x.e=A.cBp(t)}return s.d},
aj4(){var x,w=this,v=w.c,u=v.a
v=u*v.b+u
x=new Uint32Array(v+u*16)
w.ch=x
w.CW=J.df(D.br.gaj(x),0,null)
w.cx=v
return!0},
bir(d){var x,w,v,u=this,t=u.b,s=t.jc(2),r=u.ay,q=D.c.en(1,s)
if((r&q)>>>0!==0)return!1
u.ay=(r|q)>>>0
x=new A.aDE(C.a5J)
u.ax.push(x)
r=C.aC8[s]
x.a=r
x.b=d[0]
x.c=d[1]
switch(r.a){case 0:case 1:t=t.jc(3)+2
x.e=t
x.d=u.L4(A.EC(x.b,t),A.EC(x.c,x.e),!1)
break
case 3:w=t.jc(8)+1
if(w>16)v=0
else if(w>4)v=1
else{t=w>2?2:3
v=t}d[0]=A.EC(x.b,v)
x.e=v
x.d=u.L4(w,1,!1)
u.b1s(w,x)
break
case 2:break}return!0},
L4(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(f)for(x=p.b,w=y.t,v=e,u=d;x.jc(1)!==0;){t=B.a([u,v],w)
if(!p.bir(t))throw B.l(A.c6("Invalid Transform"))
u=t[0]
v=t[1]}else{v=e
u=d}x=p.b
if(x.jc(1)!==0){s=x.jc(4)
if(!(s>=1&&s<=11))throw B.l(A.c6("Invalid Color Cache"))}else s=0
if(!p.bie(u,v,s,f))throw B.l(A.c6("Invalid Huffman Codes"))
if(s>0){x=D.c.en(1,s)
p.r=x
p.w=new A.bLR(new Uint32Array(x),32-s)}else p.r=0
x=p.c
x.a=u
x.b=v
r=p.y
p.z=A.EC(u,r)
p.x=r===0?4294967295:D.c.en(1,r)-1
if(f){p.e=0
return null}q=new Uint32Array(u*v)
if(!p.a3E(q,u,v,v,null))throw B.l(A.c6("Failed to decode image data."))
p.e=0
return q},
a3E(a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=a0.e,a2=D.c.hy(a1,a9),a3=D.c.an(a1,a9),a4=a0.an6(a3,a2),a5=a0.e,a6=a9*b0,a7=a9*b1
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
if((a3&v)>>>0===0){p=a0.Lp(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(u.a>=32)u.BV()
r=a4.a
o=r[0].Aj(u)
n=0
if(o<256){m=r[1].Aj(u)
if(u.a>=32)u.BV()
l=A.cMr(r[2].Aj(u),o,m,r[3].Aj(u))
a1&2&&B.C(a8)
a8[a5]=l;++a5;++a3
if(a3>=a9){++a2
if(D.c.an(a2,16)===0&&t)b2.$1(a2)
if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.c.h1(j*506832829>>>0,r)
k&2&&B.C(q)
q[i]=j;++s}a3=n}}else if(o<280){h=a0.TS(o-256)
g=r[4].Aj(u)
if(u.a>=32)u.BV()
f=a0.ar_(a9,a0.TS(g))
if(a5<f||a6-a5<h)return!1
else{e=a5-f
for(d=0;d<h;++d){r=a8[e+d]
a1&2&&B.C(a8)
a8[a5+d]=r}a5+=h}a3+=h
for(;a3>=a9;){a3-=a9;++a2
if(D.c.an(a2,16)===0&&t)b2.$1(a2)}if(a5<a7){if((a3&v)>>>0!==0){p=a0.Lp(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.c.h1(j*506832829>>>0,r)
k&2&&B.C(q)
q[i]=j;++s}}}else if(o<x){for(;s<a5;){r=a8[s]
i=D.c.h1(r*506832829>>>0,w.b)
q=w.a
q.$flags&2&&B.C(q)
q[i]=r;++s}r=w.a
q=r[o-280]
a1&2&&B.C(a8)
a8[a5]=q;++a5;++a3
if(a3>=a9){++a2
if(D.c.an(a2,16)===0&&t)b2.$1(a2)
for(q=w.b,k=r.$flags|0;s<a5;){j=a8[s]
i=D.c.h1(j*506832829>>>0,q)
k&2&&B.C(r)
r[i]=j;++s}a3=n}}else return!1}if(t)b2.$1(a2)
if(r.d>=q&&u.a>=64&&a5<a6)return!1
a0.e=a5
return!0},
bbe(){var x,w,v,u
if(this.r>0)return!1
for(x=this.as,w=this.at,v=0;v<x;++v){u=w[v].a
if(u[1].f>1)return!1
if(u[2].f>1)return!1
if(u[3].f>1)return!1}return!0},
b1A(d){var x,w,v,u,t,s,r=this,q=r.f,p=d-q
if(p<=0)return
x=r.c
r.ajd(p,x.a*q)
w=x.a
v=w*p
u=w*r.f
x=r.ch
x.toString
q=r.cx
q.toString
t=A.cY(x,!1,null,q)
for(s=0;s<v;++s){q=r.cy
q.toString
x=D.c.S(J.v(t.a,t.d+s),8)
q.$flags&2&&B.C(q)
q[u+s]=x&255}r.f=d},
aZF(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=o.e,m=D.c.hy(n,d),l=D.c.an(n,d),k=o.an6(l,m),j=o.e,i=d*e,h=d*f,g=o.x
n=o.b
while(!0){x=n.b
if(!(!(x.d>=x.c&&n.a>=64)&&j<h))break
if((l&g)>>>0===0){w=o.Lp(o.Q,o.z,o.y,l,m)
k=o.at[w]}if(n.a>=32)n.BV()
x=k.a
v=x[0].Aj(n)
if(v<256){x=o.CW
x===$&&B.b()
x.$flags&2&&B.C(x)
x[j]=v;++j;++l
if(l>=d){++m
if(D.c.an(m,16)===0)o.a42(m)
l=0}}else if(v<280){u=o.TS(v-256)
t=x[4].Aj(n)
if(n.a>=32)n.BV()
s=o.ar_(d,o.TS(t))
if(j>=s&&i-j>=u)for(x=o.CW,r=0;r<u;++r){x===$&&B.b()
q=j+r
p=x[q-s]
x.$flags&2&&B.C(x)
x[q]=p}else{o.e=j
return!0}j+=u
l+=u
for(;l>=d;){l-=d;++m
if(D.c.an(m,16)===0)o.a42(m)}if(j<h&&(l&g)>>>0!==0){w=o.Lp(o.Q,o.z,o.y,l,m)
k=o.at[w]}}else return!1}o.a42(m)
o.e=j
return!0},
a42(d){var x,w,v,u=this,t=u.f,s=d-t,r=u.CW
r===$&&B.b()
x=A.cY(r,!1,null,u.c.a*t)
if(s>0){w=u.f
t=u.cy
t.toString
r=u.db
r.toString
v=A.cY(t,!1,null,r*w)
u.ax[0].buv(w,w+s,x,v)}u.f=d},
bhH(d){var x,w,v,u,t,s=this,r=s.c,q=r.a,p=s.f,o=d-p
if(o<=0)return
s.ajd(o,q*p)
q=s.cx
q.toString
x=s.f
w=q
v=0
for(;v<o;++v,++x)for(u=0;u<r.a;++u,++w){t=s.ch[w]
q=s.d.a
if(q!=null)q.kp(u,x,t>>>16&255,t>>>8&255,t&255,t>>>24&255)}s.f=d},
ajd(d,e){var x,w,v,u=this,t=u.ax,s=t.length,r=u.c.a,q=u.f,p=q+d,o=u.cx
o.toString
x=u.ch
x.toString
D.br.e3(x,o,o+r*d,x,e)
for(w=e;v=s-1,s>0;w=o,s=v){r=t[v]
x=u.ch
x.toString
r.bCX(q,p,x,w,x,o)}},
bie(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=1
if(g&&l.b.jc(1)!==0){x=l.b.jc(3)+2
w=A.EC(d,x)
v=A.EC(e,x)
u=w*v
t=l.L4(w,v,!1)
l.y=x
for(s=0;s<u;++s){r=t[s]>>>8&65535
t.$flags&2&&B.C(t)
t[s]=r
if(r>=k)k=r+1}}else t=null
q=J.iN(k,y.R)
for(p=0;p<k;++p)q[p]=A.cYa()
for(o=f>0,s=0;s<k;++s)for(n=0;n<5;++n){m=C.atY[n]
if(n===0&&o)m+=D.c.en(1,f)
if(!l.bic(m,q[s].a[n]))return!1}l.Q=t
l.as=k
l.at=q
return!0},
bic(d,e){var x,w,v,u,t,s,r,q,p,o=this.b
if(o.jc(1)!==0){x=y.t
w=B.a([0,0],x)
v=B.a([0,0],x)
u=B.a([0,0],x)
t=o.jc(1)+1
w[0]=o.jc(o.jc(1)===0?1:8)
v[0]=0
x=t-1
u[0]=x
if(t===2){w[1]=o.jc(8)
v[1]=1
u[1]=x}s=e.btn(u,v,w,d,t)}else{r=new Int32Array(19)
q=o.jc(4)+4
if(q>19)return!1
u=new Int32Array(d)
for(p=0;p<q;++p)r[C.awt[p]]=o.jc(3)
s=this.bid(r,d,u)
if(s)s=e.axk(u,d)}return s},
bid(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.cCk()
if(!j.axk(d,19))return!1
x=this.b
if(x.jc(1)!==0){w=2+x.jc(2+2*x.jc(3))
if(w>e)return!1}else w=e
for(v=f.$flags|0,u=0,t=8;u<e;w=s){s=w-1
if(w===0)break
if(x.a>=32)x.BV()
r=j.Aj(x)
if(r<16){q=u+1
v&2&&B.C(f)
f[u]=r
if(r!==0)t=r
u=q}else{p=r-16
o=C.aq8[p]
n=C.aqt[p]
m=x.jc(o)+n
if(u+m>e)return!1
else{l=r===16?t:0
for(;k=m-1,m>0;m=k,u=q){q=u+1
v&2&&B.C(f)
f[u]=l}}}}return!0},
TS(d){var x
if(d<4)return d+1
x=D.c.S(d-2,1)
return D.c.en(2+(d&1),x)+this.b.jc(x)+1},
ar_(d,e){var x,w
if(e>120)return e-120
else{x=C.aue[e-1]
w=(x>>>4)*d+(8-(x&15))
return w>=1?w:1}},
b1s(d,e){var x,w,v,u,t,s,r=D.c.en(1,D.c.hA(8,e.e)),q=new Uint32Array(r),p=e.d
p.toString
x=J.df(D.br.gaj(p),0,null)
w=J.df(D.br.gaj(q),0,null)
q[0]=e.d[0]
v=4*d
for(p=w.$flags|0,u=4;u<v;++u){t=x[u]
s=w[u-4]
p&2&&B.C(w)
w[u]=t+s&255}for(v=4*r;u<v;++u){p&2&&B.C(w)
w[u]=0}e.d=q
return!0},
Lp(d,e,f,g,h){if(f===0)return 0
d.toString
return d[e*D.c.S(h,f)+D.c.S(g,f)]},
an6(d,e){var x=this,w=x.Lp(x.Q,x.z,x.y,d,e)
return x.at[w]}}
A.arR.prototype={
bzE(d){return this.b1A(d)}}
A.aDD.prototype={
aE8(){var x,w,v=this.a
if(v<32){x=this.c
w=D.c.h1(x[0],v)+((x[1]&C.Bw[v])>>>0)*(C.Bw[32-v]+1)}else{x=this.c
w=v===32?x[1]:D.c.h1(x[1],v-32)}return w},
jc(d){var x,w=this,v=w.b
if(!(v.d>=v.c&&w.a>=64)&&d<25){v=w.aE8()
x=C.Bw[d]
w.a+=d
w.BV()
return(v&x)>>>0}else throw B.l(A.c6("Not enough data in input."))},
BV(){var x,w,v,u=this,t=u.b,s=u.c,r=s.$flags|0,q=t.c
while(!0){if(!(u.a>=8&&t.d<q))break
x=J.v(t.a,t.d++)
w=s[0]
v=s[1]
r&2&&B.C(s)
s[0]=(w>>>8)+(v&255)*16777216
s[1]=v>>>8
s[1]=(s[1]|x*16777216)>>>0
u.a-=8}}}
A.bLR.prototype={}
A.L2.prototype={
J(){return"VP8LImageTransformType."+this.b}}
A.aDE.prototype={
bCX(d,e,f,g,h,i){var x,w,v,u,t=this,s=t.b
switch(t.a.a){case 2:t.brp(h,i,i+(e-d)*s)
break
case 0:t.bIB(d,e,h,i)
if(e!==t.c){x=i-s
D.br.e3(h,x,x+s,f,i+(e-d-1)*s)}break
case 1:t.buw(d,e,h,i)
break
case 3:if(g===i&&t.e>0){w=e-d
v=w*A.EC(s,t.e)
u=i+w*s-v
D.br.e3(h,u,u+v,f,i)
t.ayk(d,e,f,u,h,i)}else t.ayk(d,e,f,g,h,i)
break}},
buv(d,e,f,g){var x,w,v,u,t,s,r=this.e,q=D.c.hA(8,r),p=this.b,o=this.d
if(q<8){x=D.c.en(1,r)-1
w=D.c.en(1,q)-1
for(v=d;v<e;++v)for(u=0,t=0;t<p;++t){if((t&x)>>>0===0){u=J.v(f.a,f.d);++f.d}r=o[(u&w)>>>0]
J.bV(g.a,g.d,r>>>8&255);++g.d
u=D.c.S(u,q)}}else for(v=d;v<e;++v)for(t=0;t<p;++t){s=J.v(f.a,f.d);++f.d
r=o[s]
J.bV(g.a,g.d,r>>>8&255);++g.d}},
ayk(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=this.e,o=D.c.hA(8,p),n=this.b,m=this.d
if(o<8){x=D.c.en(1,p)-1
w=D.c.en(1,o)-1
for(p=h.$flags|0,v=d;v<e;++v)for(u=0,t=0;t<n;++t,i=r){if((t&x)>>>0===0){s=g+1
u=f[g]>>>8&255
g=s}r=i+1
q=m[u&w]
p&2&&B.C(h)
h[i]=q
u=D.c.hA(u,o)}}else for(p=h.$flags|0,v=d;v<e;++v)for(t=0;t<n;++t,i=r,g=s){r=i+1
s=g+1
q=m[f[g]>>>8&255]
p&2&&B.C(h)
h[i]=q}},
buw(a2,a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.b,e=g.e,d=D.c.en(1,e)-1,a0=A.EC(f,e),a1=D.c.S(a2,g.e)*a0
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
o=$.nq()
o.$flags&2&&B.C(o)
o[0]=p
p=$.ox()
n=p[0]
o[0]=q
m=p[0]
l=$.aWp()
l.$flags&2&&B.C(l)
l[0]=n*m
k=$.cqb()
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
e&2&&B.C(a4)
a4[s]=(r&4278255360|j<<16|((r&255)+(i>>>5)>>>0)+(h>>>5)>>>0&255)>>>0}a5+=f;++x
if((x&d)>>>0===0)a1+=a0}},
bIB(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=this,n=o.b
if(d===0){A.bLS(f,g,4278190080)
for(x=1;x<n;++x){w=g+x
A.bLS(f,w,f[w-1])}g+=n;++d}w=o.e
v=D.c.en(1,w)-1
u=A.EC(n,w)
t=D.c.S(d,o.e)*u
for(s=d;s<e;){A.bLS(f,g,f[g-n])
r=t+1
q=$.cHN[o.d[t]>>>8&15]
for(x=1;x<n;++x){if((x&v)>>>0===0){p=r+1
q=$.cHN[o.d[r]>>>8&15]
r=p}w=g+x
A.bLS(f,w,q.$3(f,f[w-1],w-n))}g+=n;++s
if((s&v)>>>0===0)t+=u}},
brp(d,e,f){var x,w,v,u
for(x=d.$flags|0;e<f;e=u){w=d[e]
v=w>>>8&255
u=e+1
x&2&&B.C(d)
d[e]=(w&4278255360|(w&16711935)+(v<<16|v)&16711935)>>>0}}}
A.bMK.prototype={
geD(){var x=this,w=x.d
if(w>1||x.e>=4||x.f>1||x.r!==0)return!1
return!0},
NR(d,e,f,g){var x,w,v,u,t,s,r=this
if(!r.geD())return!1
x=C.aCV[r.e]
if(r.d===0){w=r.b
v=e*w
u=r.a
D.B.e3(g,v,f*w,u.a,u.d-u.b+v)}else{w=e+f
u=r.x
u===$&&B.b()
u.cy=g
t=u.c
if(r.y)w=u.aZF(t.a,t.b,w)
else{s=u.ch
s.toString
u=u.a3E(s,t.a,t.b,w,u.gbzD())
w=u}if(!w)return!1}if(x!=null){w=r.b
x.$6(w,r.c,w,e,f,g)}if(r.f===1)if(!r.b_y(g,r.b,r.c,e,f))return!1
if(e+f===r.c)r.w=!0
return!0},
b_y(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
A.a8m.prototype={
aUy(d,e){var x=this,w=d.ct()
x.r=0
x.f=(w&1)!==0
x.w=d.d-d.b
x.x=e-16}}
A.arS.prototype={}
A.ar9.prototype={
a7X(d){var x,w=this
if(d===0)return!1
x=(d<<1>>>0)-1
w.e=x
x=new Int32Array(x<<1>>>0)
w.d=x
x[1]=-1
w.f=1
D.B.m0(w.a,0,128,255)
return!0},
axk(d,e){var x,w,v,u,t,s=this
for(x=0,w=0,v=0;v<e;++v)if(d[v]>0){++x
w=v}if(!s.a7X(x))return!1
if(x===1){if(w<0||w>=e)return!1
return s.a2L(w,0,0)}u=new Int32Array(e)
if(!s.bae(d,e,u))return!1
for(v=0;v<e;++v){t=d[v]
if(t>0)if(!s.a2L(v,u[v],t))return!1}return s.f===s.e},
btn(d,e,f,g,h){var x,w,v,u=this
if(!u.a7X(h))return!1
for(x=0;x<h;++x){w=e[x]
if(w!==-1){v=f[x]
if(v>=g)return u.f===u.e
if(!u.a2L(v,w,d[x]))return u.f===u.e}}return u.f===u.e},
Aj(d){var x,w,v=this,u=d.aE8(),t=d.a,s=u&127,r=v.a[s]
if(r<=7){d.a=t+r
return v.b[s]}x=v.c[s]
t+=7
u=u>>>7
do{w=v.d
w===$&&B.b()
x=x+w[(x<<1>>>0)+1]+(u&1)
u=u>>>1;++t}while(v.aqd(x))
d.a=t
return v.d[x<<1>>>0]},
a2L(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
if(f<=7){x=l.as4(e,f)
for(w=D.c.eU(1,7-f),v=l.b,u=v.$flags|0,t=l.a,s=t.$flags|0,r=0;r<w;++r){q=(x|D.c.eU(r,f))>>>0
u&2&&B.C(v)
v[q]=d
s&2&&B.C(t)
t[q]=f}}else x=l.as4(D.c.o2(e,f-7),7)
for(w=l.c,v=w.$flags|0,p=7,o=0;n=f-1,f>0;f=n){u=l.e
if(o>=u)return!1
t=l.d
t===$&&B.b()
s=(o<<1>>>0)+1
m=t[s]
if(m<0){m=l.f
if(m===u)return!1
t.$flags&2&&B.C(t)
t[s]=m-o
l.f=m+2
t[(m<<1>>>0)+1]=-1
t[(m+1<<1>>>0)+1]=-1}else if(m===0)return!1
o+=t[s]+(D.c.o2(e,n)&1);--p
if(p===0){v&2&&B.C(w)
w[x]=o}}if(l.bdy(o))l.bdz(o,0)
else if(l.aqd(o))return!1
w=l.d
w===$&&B.b()
w.$flags&2&&B.C(w)
w[o<<1>>>0]=d
return!0},
as4(d,e){return D.c.h1((C.S2[d&15]<<4|C.S2[D.c.S(d,4)])>>>0,8-e)},
bdz(d,e){var x=this.d
x===$&&B.b()
x.$flags&2&&B.C(x)
x[(d<<1>>>0)+1]=e},
aqd(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]!==0},
bdy(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]<0},
bae(d,e,f){var x,w,v,u,t,s,r,q,p=new Int32Array(16),o=new Int32Array(16)
for(x=0,w=0;x<e;++x){v=d[x]
if(v>w)w=v}if(w>15)return!1
for(x=0;x<e;++x){u=d[x]
p[u]=p[u]+1}p[0]=0
o[0]=-1
for(t=1,s=0;t<=w;++t){s=s+p[t-1]<<1>>>0
o[t]=s}for(u=f.$flags|0,x=0;x<e;++x){r=d[x]
if(r>0){q=o[r]
o[r]=q+1
u&2&&B.C(f)
f[x]=q}else{u&2&&B.C(f)
f[x]=-1}}return!0}}
A.a_L.prototype={
i(d,e){return this.a[e]}}
A.Tx.prototype={
J(){return"WebPFormat."+this.b}}
A.aE6.prototype={}
A.arT.prototype={}
A.bML.prototype={
I9(d){var x=A.cY(d,!1,null,0)
this.b=x
if(!this.an3(x))return!1
return!0},
oE(d){var x,w=this,v=null,u=A.cY(d,!1,v,0)
w.b=u
if(!w.an3(u))return v
u=new A.arT(C.of,B.a([],y.J))
w.a=u
x=w.b
x.toString
if(!w.avU(x,u))return v
u=w.a
switch(u.f.a){case 3:u.as=u.z.length
return u
case 2:x=w.b
x.toString
x.d=u.ay
if(!A.cuR(x,u).NS())return v
u=w.a
u.as=u.z.length
return u
case 1:x=w.b
x.toString
x.d=u.ay
if(!A.cuP(x,u).NS())return v
u=w.a
u.as=u.z.length
return u
case 0:throw B.l(A.c6("Unknown format for WebP"))}},
kf(d){var x,w,v,u,t=this,s=t.b
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
return t.al6(s.AW(x,w),d)}w=x.f
if(w===C.xc){s.toString
u=s.AW(x.ch,x.ay)
s=t.a
s.toString
return A.cuR(u,s).oe(0)}else if(w===C.Er){s.toString
u=s.AW(x.ch,x.ay)
s=t.a
s.toString
return A.cuP(u,s).oe(0)}return null},
mX(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=null
if(p.oE(e)==null)return o
x=p.a.e
if(!x)return p.kf(0)
for(w=o,v=w,u=0;x=p.a,u<x.as;++u){f=x.z[u]
t=p.kf(u)
if(t==null)continue
t.y=f.e
if(v==null||w==null){x=p.a
s=x.a
x=x.b
r=t.gqi()
q=t.a
q=q==null?o:q.gdu()
if(q==null)q=C.a8
v=A.hT(o,o,q,t.y,C.bm,x,o,0,r,o,C.a8,s,!1)
w=v}else{w=A.BQ(w,!1,!1)
x=f.f
x===$&&B.b()
if(x){x=w.a
if(x!=null)x.nA(0,o)}}A.cwj(w,t,C.yq,o,o,f.a,f.b,o,o,o,o)
v.ny(w)}return v},
al6(d,e){var x,w,v,u=null,t=B.a([],y.J),s=new A.arT(C.of,t)
if(!this.avU(d,s))return u
if(s.f===C.of)return u
s.as=this.a.as
if(s.e){x=t.length
if(e>=x)return u
w=t[e]
t=w.x
t===$&&B.b()
x=w.w
x===$&&B.b()
return this.al6(d.AW(t,x),e)}else{v=d.AW(s.ch,s.ay)
t=s.f
if(t===C.xc)return A.cuR(v,s).oe(0)
else if(t===C.Er)return A.cuP(v,s).oe(0)}return u},
an3(d){if(d.je(4)!=="RIFF")return!1
d.a3()
if(d.je(4)!=="WEBP")return!1
return!0},
avU(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
for(x=d.c,w=d.b;d.d<x;){v=d.je(4)
u=d.a3()
t=u+1>>>1<<1>>>0
s=d.d
r=s-w
switch(v){case"VP8X":if(!this.b3S(d,e))return!1
break
case"VP8 ":e.ay=r
e.ch=u
e.f=C.Er
break
case"VP8L":e.ay=r
e.ch=u
e.f=C.xc
break
case"ALPH":e.toString
s=d.a
q=d.e
p=J.a2(s)
o=p.gu(s)
p=p.gu(s)
s=new A.lZ(s,0,Math.min(o,p),0,q)
e.at=s
s.d=d.d
d.d+=t
break
case"ANIM":e.f=C.b8A
n=d.a3()
s=new Uint8Array(4)
s[0]=n>>>8&255
s[1]=n>>>16&255
s[2]=n>>>24&255
s[3]=n&255
d.am()
break
case"ANMF":if(!this.b2F(d,e,u))return!1
break
case"ICCP":e.toString
m=d.ji(u)
d.d=d.d+(m.c-m.d)
m.hL()
break
case"EXIF":e.toString
e.w=d.je(u)
break
case"XMP ":e.toString
d.je(u)
break
default:d.d=s+t
break}s=d.d
l=t-(s-w-r)
if(l>0)d.d=s+l}if(!e.d)e.d=e.at!=null
return e.f!==C.of},
b3S(d,e){var x,w,v,u,t=d.ct()
if((t&192)!==0)return!1
x=D.c.S(t,4)
w=D.c.S(t,1)
if((t&1)!==0)return!1
if(d.rH()!==0)return!1
v=d.rH()
u=d.rH()
e.a=v+1
e.b=u+1
e.e=(w&1)!==0
e.d=(x&1)!==0
return!0},
b2F(d,e,f){var x,w=d.rH(),v=d.rH()
d.rH()
x=new A.arS(w*2,v*2,d.rH()+1,d.rH())
x.aUy(d,f)
if(x.r!==0)return!1
e.z.push(x)
return!0}}
A.bhM.prototype={
J(){return"IccProfileCompression."+this.b}}
A.a08.prototype={
buP(){var x,w=this
if(w.b===C.Ad)return w.c
x=C.Gc.aAd(w.c,null)
w.c=x
w.b=C.Ad
return x}}
A.aqg.prototype={
J(){return"FrameType."+this.b}}
A.BR.prototype={
gl6(){var x=this.x
return x===$?this.x=B.a([],y.g):x},
aU1(d,e,f,g){var x,w,v,u=this,t=d.gdu(),s=d.gqi(),r=d.a
u.akW(g,e,t,s,r==null?null:r.geS())
t=d.b
if(t!=null)u.b=B.jm(t,y.N,y.I)
t=d.d
if(t!=null){s=y.N
u.d=B.jm(t,s,s)}u.gl6().push(u)
if(!f){x=d.gl6().length
for(t=y.g,w=1;w<x;++w){v=d.x
u.ny(A.arl((v===$?d.x=B.a([],t):v)[w],e,!1,g))}}},
aU0(d,e,f){var x,w,v,u,t=this,s=d.b
if(s!=null)t.b=B.jm(s,y.N,y.I)
s=d.d
if(s!=null){x=y.N
t.d=B.jm(s,x,x)}t.gl6().push(t)
if(!e&&d.gl6().length>1){w=d.gl6().length
for(s=y.g,v=1;v<w;++v){u=d.x
t.ny(A.BQ((u===$?d.x=B.a([],s):u)[v],!1,!1))}}},
ny(d){var x=this
if(d==null)d=A.BQ(x,!0,!0)
d.z=x.gl6().length
if(D.b.gY(x.gl6())!==d)x.gl6().push(d)
return d},
WT(){return this.ny(null)},
akW(d,e,f,g,h){var x,w,v=this,u=null
switch(f.a){case 0:if(h==null){x=D.d.f8(d*g/8)
w=new A.Po($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.f8(d/8)
w=new A.Po($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 1:if(h==null){x=D.d.f8(d*(g<<1>>>0)/8)
w=new A.Pq($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.f8(d/4)
w=new A.Pq($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 2:if(h==null){if(g===2)x=d
else if(g===4)x=d*2
else x=g===3?D.d.f8(d*1.5):D.d.f8(d/2)
w=new A.Ps($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.f8(d/2)
w=new A.Ps($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 3:if(h==null)v.a=A.cCC(d,e,g)
else v.a=new A.Pt(new Uint8Array(d*e),h,d,e,1)
break
case 4:x=d*e
if(h==null)v.a=new A.Pp(new Uint16Array(x*g),u,d,e,g)
else v.a=new A.Pp(new Uint16Array(x),h,d,e,1)
break
case 5:v.a=A.cYJ(d,e,g)
break
case 6:v.a=new A.a0f(new Int8Array(d*e*g),d,e,g)
break
case 7:v.a=new A.a0d(new Int16Array(d*e*g),d,e,g)
break
case 8:v.a=new A.a0e(new Int32Array(d*e*g),d,e,g)
break
case 9:v.a=A.cYH(d,e,g)
break
case 10:v.a=A.cYI(d,e,g)
break
case 11:v.a=new A.a0c(new Float64Array(d*e*4*g),d,e,g)
break}},
j(d){var x=this
return"Image("+x.gd0(0)+", "+x.gb5(0)+", "+x.gdu().b+", "+x.gqi()+")"},
gd0(d){var x=this.a
x=x==null?null:x.a
return x==null?0:x},
gb5(d){var x=this.a
x=x==null?null:x.b
return x==null?0:x},
gdu(){var x=this.a
x=x==null?null:x.gdu()
return x==null?C.a8:x},
gwP(){var x=this.e
return x==null?this.e=new A.OH(B.I(y.N,y.P)):x},
aL_(d,e){var x=this,w=x.b;(w==null?x.b=B.I(y.N,y.I):w).m(0,d,e)
if(x.b.a===0)x.b=null},
ga5(d){var x=this.a
return x.ga5(x)},
gaj(d){var x=this.a
x=x==null?null:x.gaj(x)
if(x==null)x=D.B.gaj(new Uint8Array(0))
return x},
gqi(){var x=this.a
x=x==null?null:x.geS()
x=x==null?null:x.b
if(x==null){x=this.a
x=x==null?null:x.c}return x==null?0:x},
grq(){var x=this.a
return(x==null?null:x.geS())!=null},
gmU(){var x=this.a
x=x==null?null:x.gmU()
return x==null?0:x},
aCf(d,e){return d>=0&&e>=0&&d<this.gd0(0)&&e<this.gb5(0)},
nZ(d,e,f,g){var x=this.a
x=x==null?null:x.nZ(d,e,f,g)
if(x==null)x=new A.xX(new Uint8Array(0))
return x},
ec(d,e,f){var x=this.a
x=x==null?null:x.ec(d,e,f)
return x==null?new A.fi():x},
o_(d,e){return this.ec(d,e,null)},
ko(d,e){if(d<0||d>=this.gd0(0)||e<0||e>=this.gb5(0))return new A.fi()
return this.ec(d,e,null)},
aIS(d,e,f){switch(f.a){case 0:return this.ko(D.d.C(d),D.d.C(e))
case 1:case 3:return this.aIT(d,e)
case 2:return this.aIR(d,e)}},
aIT(d,e){var x,w,v,u,t,s,r=this,q=D.d.C(d),p=q-(d>=0?0:1),o=p+1
q=D.d.C(e)
x=q-(e>=0?0:1)
w=x+1
q=new A.bip(d-p,e-x)
v=r.ko(p,x)
u=w>=r.gb5(0)?v:r.ko(p,w)
t=o>=r.gd0(0)?v:r.ko(o,x)
s=o>=r.gd0(0)||w>=r.gb5(0)?v:r.ko(o,w)
return r.nZ(q.$4(v.gaf(v),t.gaf(t),u.gaf(u),s.gaf(s)),q.$4(v.gap(),t.gap(),u.gap(),s.gap()),q.$4(v.gau(v),t.gau(t),u.gau(u),s.gau(s)),q.$4(v.gaE(v),t.gaE(t),u.gaE(u),s.gaE(s)))},
aIR(d0,d1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=D.d.C(d0),c6=c5-(d0>=0?0:1),c7=c6-1,c8=c6+1,c9=c6+2
c5=D.d.C(d1)
x=c5-(d1>=0?0:1)
w=x-1
v=x+1
u=x+2
t=d0-c6
s=d1-x
c5=new A.bio()
r=c4.ko(c6,x)
q=c7<0
p=!q
o=!p||w<0?r:c4.ko(c7,w)
n=q?r:c4.ko(c6,w)
m=w<0
l=m||c8>=c4.gd0(0)?r:c4.ko(c8,w)
k=c9>=c4.gd0(0)||m?r:c4.ko(c9,w)
j=c5.$5(t,o.gaf(o),n.gaf(n),l.gaf(l),k.gaf(k))
i=c5.$5(t,o.gap(),n.gap(),l.gap(),k.gap())
h=c5.$5(t,o.gau(o),n.gau(n),l.gau(l),k.gau(k))
g=c5.$5(t,o.gaE(o),n.gaE(n),l.gaE(l),k.gaE(k))
f=q?r:c4.ko(c7,x)
e=c8>=c4.gd0(0)?r:c4.ko(c8,x)
d=c9>=c4.gd0(0)?r:c4.ko(c9,x)
a0=c5.$5(t,f.gaf(f),r.gaf(r),e.gaf(e),d.gaf(d))
a1=c5.$5(t,f.gap(),r.gap(),e.gap(),d.gap())
a2=c5.$5(t,f.gau(f),r.gau(r),e.gau(e),d.gau(d))
a3=c5.$5(t,f.gaE(f),r.gaE(r),e.gaE(e),d.gaE(d))
a4=!p||v>=c4.gb5(0)?r:c4.ko(c7,v)
a5=v>=c4.gb5(0)?r:c4.ko(c6,v)
a6=c8>=c4.gd0(0)||v>=c4.gb5(0)?r:c4.ko(c8,v)
a7=c9>=c4.gd0(0)||v>=c4.gb5(0)?r:c4.ko(c9,v)
a8=c5.$5(t,a4.gaf(a4),a5.gaf(a5),a6.gaf(a6),a7.gaf(a7))
a9=c5.$5(t,a4.gap(),a5.gap(),a6.gap(),a7.gap())
b0=c5.$5(t,a4.gau(a4),a5.gau(a5),a6.gau(a6),a7.gau(a7))
b1=c5.$5(t,a4.gaE(a4),a5.gaE(a5),a6.gaE(a6),a7.gaE(a7))
b2=!p||u>=c4.gb5(0)?r:c4.ko(c7,u)
b3=u>=c4.gb5(0)?r:c4.ko(c6,u)
b4=c8>=c4.gd0(0)||u>=c4.gb5(0)?r:c4.ko(c8,u)
b5=c9>=c4.gd0(0)||u>=c4.gb5(0)?r:c4.ko(c9,u)
b6=c5.$5(t,b2.gaf(b2),b3.gaf(b3),b4.gaf(b4),b5.gaf(b5))
b7=c5.$5(t,b2.gap(),b3.gap(),b4.gap(),b5.gap())
b8=c5.$5(t,b2.gau(b2),b3.gau(b3),b4.gau(b4),b5.gau(b5))
b9=c5.$5(t,b2.gaE(b2),b3.gaE(b3),b4.gaE(b4),b5.gaE(b5))
c0=c5.$5(s,j,a0,a8,b6)
c1=c5.$5(s,i,a1,a9,b7)
c2=c5.$5(s,h,a2,b0,b8)
c3=c5.$5(s,g,a3,b1,b9)
return c4.nZ(D.d.C(c0),D.d.C(c1),D.d.C(c2),D.d.C(c3))},
AN(d,e,f){var x
if(y.c0.b(f))if(f.gfo(f).geS()!=null)if(this.grq()){x=this.a
if(x!=null)x.fg(d,e,f.ge6(f),0,0)
return}x=this.a
if(x!=null)x.kp(d,e,f.gaf(f),f.gap(),f.gau(f),f.gaE(f))},
gck(){var x=this.a
x=x==null?null:x.gck()
return x==null?0:x},
nA(d,e){var x=this.a
return x==null?null:x.nA(0,e)},
W(d){return this.nA(0,null)},
ayD(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
if(a5==null)a5=a3.gdu()
if(a6==null)a6=a3.gqi()
x=C.Y6.i(0,a5)
w=!1
if(a5===a3.gdu())if(a6===a3.gqi()){v=a3.a
w=(v==null?a4:v.geS())==null}if(w)return A.BQ(a3,!1,!1)
for(w=a3.gl6(),v=w.length,u=y.N,t=y.p,s=a4,r=0;r<w.length;w.length===v||(0,B.Q)(w),++r,s=i){q=w[r]
p=q.a
o=p==null
n=o?a4:p.a
if(n==null)n=0
p=o?a4:p.b
if(p==null)p=0
o=q.e
o=o==null?a4:A.ZX(o)
m=q.c
if(m==null)m=a4
else{l=m.a
k=m.b
m=m.c
m=new A.a08(l,k,new Uint8Array(m.subarray(0,B.qQ(0,a4,m.length))))}l=q.w
k=q.r
j=A.hT(a4,o,a5,q.y,l,p,m,k,a6,a4,C.a8,n,!1)
p=q.d
j.d=p!=null?B.jm(p,u,u):a4
if(s!=null){s.ny(j)
i=s}else i=j
p=j.a
h=p==null?a4:p.geS()
p=j.a
p=p==null?a4:p.geS()
g=p==null?a4:p.gdu()
if(g==null)g=a5
p=q.a
if(h!=null){f=B.I(t,t)
e=p==null?a4:p.ec(0,0,a4)
if(e==null)e=new A.fi()
for(p=j.a,p=p.ga5(p),d=a4,a0=0;p.q();){a1=p.gL(p)
a2=A.cMr(D.d.fv(e.giD()*255),D.d.fv(e.gio()*255),D.d.fv(e.gix()*255),0)
if(f.a7(0,a2)){o=f.i(0,a2)
o.toString
a1.se6(0,o)}else{f.m(0,a2,a0)
a1.se6(0,a0)
d=A.pH(e,x,g,a6,d)
h.pt(a0,d.gaf(d),d.gap(),d.gau(d));++a0}e.q()}}else{e=p==null?a4:p.ec(0,0,a4)
if(e==null)e=new A.fi()
for(p=j.a,p=p.ga5(p);p.q();){A.pH(e,x,a4,a4,p.gL(p))
e.q()}}}s.toString
return s},
od(d){return this.ayD(d,null)},
ayC(d){return this.ayD(null,d)},
brJ(d){var x,w,v,u
if(this.d==null){x=y.N
this.d=B.I(x,x)}for(x=new B.cg(d,d.r,d.e,B.q(d).h("cg<1>"));x.q();){w=x.d
v=this.d
v.toString
u=d.i(0,w)
u.toString
v.m(0,w,u)}},
aZg(d,e,f){var x,w=65536
switch(e.a){case 0:return null
case 1:return null
case 2:return null
case 3:x=d===C.ch?w:256
return new A.uq(new Uint8Array(x*f),x,f)
case 4:x=d===C.ch?w:256
return new A.awt(new Uint16Array(x*f),x,f)
case 5:x=d===C.ch?w:256
return new A.a2S(new Uint32Array(x*f),x,f)
case 6:x=d===C.ch?w:256
return new A.aws(new Int8Array(x*f),x,f)
case 7:x=d===C.ch?w:256
return new A.awq(new Int16Array(x*f),x,f)
case 8:x=d===C.ch?w:256
return new A.awr(new Int32Array(x*f),x,f)
case 9:x=d===C.ch?w:256
return new A.awn(new Uint16Array(x*f),x,f)
case 10:x=d===C.ch?w:256
return new A.awo(new Float32Array(x*f),x,f)
case 11:x=d===C.ch?w:256
return new A.awp(new Float64Array(x*f),x,f)}}}
A.lY.prototype={
geS(){return null}}
A.Pm.prototype={
r_(d,e){var x=this,w=x.d
if(e)w=new Uint16Array(w.length)
else w=new Uint16Array(B.bU(w))
return new A.Pm(w,x.a,x.b,x.c)},
gdu(){return C.hO},
gaj(d){return D.dQ.gaj(this.d)},
gmU(){return 16},
grK(){return this.a*this.c*2},
ga5(d){return A.cte(this)},
qu(d,e,f,g,h){return A.ur(A.cte(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gck(){return 1},
grv(){return!0},
nZ(d,e,f,g){var x=new Uint16Array(4),w=new A.Nn(x)
x[0]=A.fY(d)
x[1]=A.fY(e)
x[2]=A.fY(f)
x[3]=A.fY(g)
x=w
return x},
ec(d,e,f){if(f==null||!(f instanceof A.IG)||f.d!==this)f=A.cte(this)
f.hm(0,d,e)
return f},
o_(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x=this.c,w=this.d,v=A.fY(f)
w.$flags&2&&B.C(w)
w[e*this.a*x+d*x]=v},
fg(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=A.fY(f)
v.$flags&2&&B.C(v)
v[w]=u
if(x>1){v[w+1]=A.fY(g)
if(x>2)v[w+2]=A.fY(h)}},
kp(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=A.fY(f)
v.$flags&2&&B.C(v)
v[w]=u
if(x>1){v[w+1]=A.fY(g)
if(x>2){v[w+2]=A.fY(h)
if(x>3)v[w+3]=A.fY(i)}}},
j(d){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
nA(d,e){}}
A.Pn.prototype={
r_(d,e){var x=this,w=x.d
if(e)w=new Float32Array(w.length)
else w=new Float32Array(B.bU(w))
return new A.Pn(w,x.a,x.b,x.c)},
gdu(){return C.jb},
gaj(d){return D.f3.gaj(this.d)},
gmU(){return 32},
ga5(d){return A.ctf(this)},
qu(d,e,f,g,h){return A.ur(A.ctf(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gck(){return 1},
grK(){return this.a*this.c*4},
grv(){return!0},
nZ(d,e,f,g){var x=new Float32Array(4),w=new A.No(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
ec(d,e,f){if(f==null||!(f instanceof A.IH)||f.d!==this)f=A.ctf(this)
f.hm(0,d,e)
return f},
o_(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x=this.c,w=this.d
w.$flags&2&&B.C(w)
w[e*this.a*x+d*x]=f},
fg(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.C(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
kp(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.C(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
nA(d,e){}}
A.a0c.prototype={
r_(d,e){var x=this,w=x.d
if(e)w=new Float64Array(w.length)
else w=new Float64Array(B.bU(w))
return new A.a0c(w,x.a,x.b,x.c)},
gdu(){return C.kI},
gaj(d){return D.ed.gaj(this.d)},
gu(d){return this.d.byteLength},
gmU(){return 64},
ga5(d){return A.ctg(this)},
qu(d,e,f,g,h){return A.ur(A.ctg(this),e,f,g,h)},
gck(){return 1},
grK(){return this.a*this.c*8},
grv(){return!0},
nZ(d,e,f,g){var x=new Float64Array(4),w=new A.Np(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
ec(d,e,f){if(f==null||!(f instanceof A.II)||f.d!==this)f=A.ctg(this)
f.hm(0,d,e)
return f},
o_(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x=this.c,w=this.d
w.$flags&2&&B.C(w)
w[e*this.a*x+d*x]=f},
fg(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.C(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
kp(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.C(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
nA(d,e){}}
A.a0d.prototype={
r_(d,e){var x=this,w=x.d
if(e)w=new Int16Array(w.length)
else w=new Int16Array(B.bU(w))
return new A.a0d(w,x.a,x.b,x.c)},
gdu(){return C.kK},
gaj(d){return D.jB.gaj(this.d)},
ga5(d){return A.cth(this)},
qu(d,e,f,g,h){return A.ur(A.cth(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gck(){return 32767},
grv(){return!0},
gmU(){return 16},
grK(){return this.a*this.c*2},
nZ(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Int16Array(4),s=new A.Nq(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ec(d,e,f){if(f==null||!(f instanceof A.IJ)||f.d!==this)f=A.cth(this)
f.hm(0,d,e)
return f},
o_(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.C(w)
w[e*this.a*x+d*x]=v},
fg(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.C(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
kp(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.C(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
nA(d,e){}}
A.a0e.prototype={
r_(d,e){var x=this,w=x.d
if(e)w=new Int32Array(w.length)
else w=new Int32Array(B.bU(w))
return new A.a0e(w,x.a,x.b,x.c)},
gdu(){return C.kL},
gaj(d){return D.co.gaj(this.d)},
gmU(){return 32},
grK(){return this.a*this.c*4},
ga5(d){return A.cti(this)},
qu(d,e,f,g,h){return A.ur(A.cti(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gck(){return 2147483647},
grv(){return!0},
nZ(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Int32Array(4),s=new A.Nr(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ec(d,e,f){if(f==null||!(f instanceof A.IK)||f.d!==this)f=A.cti(this)
f.hm(0,d,e)
return f},
o_(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.C(w)
w[e*this.a*x+d*x]=v},
fg(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.C(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
kp(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.C(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
nA(d,e){}}
A.a0f.prototype={
r_(d,e){var x=this,w=x.d
if(e)w=new Int8Array(w.length)
else w=new Int8Array(B.bU(w))
return new A.a0f(w,x.a,x.b,x.c)},
gdu(){return C.kJ},
gaj(d){return D.jC.gaj(this.d)},
grK(){return this.a*this.c},
ga5(d){return A.ctj(this)},
qu(d,e,f,g,h){return A.ur(A.ctj(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gck(){return 127},
grv(){return!0},
gmU(){return 8},
nZ(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Int8Array(4),s=new A.Ns(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ec(d,e,f){if(f==null||!(f instanceof A.IL)||f.d!==this)f=A.ctj(this)
f.hm(0,d,e)
return f},
o_(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.C(w)
w[e*(this.a*x)+d*x]=v},
fg(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.C(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
kp(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.C(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
nA(d,e){}}
A.Po.prototype={
bMY(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.b7()
this.d=x},
r_(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bU(v))}x=w.f
x=x==null?null:x.dT(0)
return new A.Po(v,w.e,x,w.a,w.b,w.c)},
gdu(){return C.fn},
gu(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gck(){var x=this.f
x=x==null?null:x.gck()
return x==null?1:x},
grv(){return!1},
gaj(d){var x=this.d
x===$&&B.b()
return D.B.gaj(x)},
gmU(){return 1},
ga5(d){return A.a37(this)},
qu(d,e,f,g,h){return A.ur(A.a37(this),e,f,g,h)},
nZ(d,e,f,g){var x=new A.Nv(4,0)
x.iq(D.d.C(d),D.d.C(e),D.d.C(f),D.d.C(g))
return x},
ec(d,e,f){if(f==null||!(f instanceof A.IM)||f.f!==this)f=A.a37(this)
f.hm(0,d,e)
return f},
o_(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a37(w):x).hm(0,d,e)
w.r.kQ(0,f)},
fg(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a37(w):x).hm(0,d,e)
w.r.kH(f,g,h)},
kp(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a37(w):x).hm(0,d,e)
w.r.iq(f,g,h,i)},
j(d){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
nA(d,e){},
grK(){return this.e},
geS(){return this.f}}
A.Pp.prototype={
r_(d,e){var x,w=this,v=w.d
if(e)v=new Uint16Array(v.length)
else v=new Uint16Array(B.bU(v))
x=w.e
x=x==null?null:x.dT(0)
return new A.Pp(v,x,w.a,w.b,w.c)},
gdu(){return C.ch},
gaj(d){return D.dQ.gaj(this.d)},
gmU(){return 16},
gck(){var x=this.e
x=x==null?null:x.gck()
return x==null?65535:x},
grK(){return this.a*this.c*2},
ga5(d){return A.ctk(this)},
qu(d,e,f,g,h){return A.ur(A.ctk(this),e,f,g,h)},
gu(d){return this.d.byteLength},
grv(){return!0},
nZ(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Uint16Array(4),s=new A.Nw(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ec(d,e,f){if(f==null||!(f instanceof A.IN)||f.d!==this)f=A.ctk(this)
f.hm(0,d,e)
return f},
o_(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.C(w)
w[e*this.a*x+d*x]=v},
fg(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.C(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
kp(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.C(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
nA(d,e){},
geS(){return this.e}}
A.Pq.prototype={
bMZ(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.b7()
this.d=x},
r_(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bU(v))}x=w.f
x=x==null?null:x.dT(0)
return new A.Pq(v,w.e,x,w.a,w.b,w.c)},
gdu(){return C.h6},
gmU(){return 2},
gaj(d){var x=this.d
x===$&&B.b()
return D.B.gaj(x)},
ga5(d){return A.a38(this)},
qu(d,e,f,g,h){return A.ur(A.a38(this),e,f,g,h)},
gu(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gck(){var x=this.f
x=x==null?null:x.gck()
return x==null?3:x},
grv(){return!1},
nZ(d,e,f,g){var x=new A.Nx(4,0)
x.iq(D.d.C(d),D.d.C(e),D.d.C(f),D.d.C(g))
return x},
ec(d,e,f){if(f==null||!(f instanceof A.IO)||f.f!==this)f=A.a38(this)
f.hm(0,d,e)
return f},
o_(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a38(w):x).hm(0,d,e)
w.r.kR(0,f)},
fg(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a38(w):x).hm(0,d,e)
w.r.kH(f,g,h)},
kp(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a38(w):x).hm(0,d,e)
w.r.iq(f,g,h,i)},
j(d){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
nA(d,e){},
grK(){return this.e},
geS(){return this.f}}
A.Pr.prototype={
r_(d,e){var x=this,w=x.d
if(e)w=new Uint32Array(w.length)
else w=new Uint32Array(B.bU(w))
return new A.Pr(w,x.a,x.b,x.c)},
gdu(){return C.jc},
gaj(d){return D.br.gaj(this.d)},
grK(){return this.a*this.c*4},
gmU(){return 32},
gck(){return 4294967295},
ga5(d){return A.ctl(this)},
qu(d,e,f,g,h){return A.ur(A.ctl(this),e,f,g,h)},
gu(d){return this.d.byteLength},
grv(){return!0},
nZ(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Uint32Array(4),s=new A.Ny(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ec(d,e,f){if(f==null||!(f instanceof A.IP)||f.d!==this)f=A.ctl(this)
f.hm(0,d,e)
return f},
o_(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.C(w)
w[e*this.a*x+d*x]=v},
fg(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.C(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
kp(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.C(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
nA(d,e){}}
A.Ps.prototype={
bN_(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.b7()
this.d=x},
r_(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bU(v))}x=w.f
x=x==null?null:x.dT(0)
return new A.Ps(v,w.e,x,w.a,w.b,w.c)},
gdu(){return C.h7},
gaj(d){var x=this.d
x===$&&B.b()
return D.B.gaj(x)},
ga5(d){return A.a39(this)},
qu(d,e,f,g,h){return A.ur(A.a39(this),e,f,g,h)},
gu(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gck(){var x=this.f
x=x==null?null:x.gck()
return x==null?15:x},
grv(){return!1},
gmU(){return 4},
nZ(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new A.Nz(4,new Uint8Array(2))
t.iq(x,w,v,u)
x=t
return x},
ec(d,e,f){if(f==null||!(f instanceof A.IQ)||f.e!==this)f=A.a39(this)
f.hm(0,d,e)
return f},
o_(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a39(w):x).hm(0,d,e)
w.r.kS(0,f)},
fg(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a39(w):x).hm(0,d,e)
w.r.kH(f,g,h)},
kp(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a39(w):x).hm(0,d,e)
w.r.iq(f,g,h,i)},
j(d){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
nA(d,e){},
grK(){return this.e},
geS(){return this.f}}
A.Pt.prototype={
r_(d,e){var x,w=this,v=w.d
if(e)v=new Uint8Array(v.length)
else v=new Uint8Array(B.bU(v))
x=w.e
x=x==null?null:x.dT(0)
return new A.Pt(v,x,w.a,w.b,w.c)},
gdu(){return C.a8},
gaj(d){return D.B.gaj(this.d)},
grK(){return this.a*this.c},
gmU(){return 8},
ga5(d){return A.bsz(this)},
qu(d,e,f,g,h){return A.ur(A.bsz(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gck(){var x=this.e
x=x==null?null:x.gck()
return x==null?255:x},
grv(){return!1},
nZ(d,e,f,g){var x=A.cUh(D.d.C(D.d.b2(d,0,255)),D.d.C(D.d.b2(e,0,255)),D.d.C(D.d.b2(f,0,255)),D.d.C(D.d.b2(g,0,255)))
return x},
ec(d,e,f){if(f==null||!(f instanceof A.IR)||f.d!==this)f=A.bsz(this)
f.hm(0,d,e)
return f},
o_(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.C(w)
w[e*(this.a*x)+d*x]=v},
fg(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.C(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
kp(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.C(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
nA(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=e==null?l:A.pH(e,l,C.a8,l,l),j=m.c
if(j===1){x=k==null?0:D.c.b2(B.bc(k.gaf(k)),0,255)
j=m.d
D.B.m0(j,0,j.length,x)}else if(j===2){j=k==null
x=j?0:D.c.b2(B.bc(k.gaf(k)),0,255)
w=j?0:D.c.b2(B.bc(k.gap()),0,255)
v=J.cqr(D.B.gaj(m.d),0,null)
D.dQ.m0(v,0,v.length,(w<<8|x)>>>0)}else if(j===4){j=k==null
x=j?0:D.c.b2(B.bc(k.gaf(k)),0,255)
w=j?0:D.c.b2(B.bc(k.gap()),0,255)
u=j?0:D.c.b2(B.bc(k.gau(k)),0,255)
t=j?0:D.c.b2(B.bc(k.gaE(k)),0,255)
s=J.oy(D.B.gaj(m.d),0,null)
D.br.m0(s,0,s.length,(t<<24|u<<16|w<<8|x)>>>0)}else{j=k==null
x=j?0:D.c.b2(B.bc(k.gaf(k)),0,255)
w=j?0:D.c.b2(B.bc(k.gap()),0,255)
u=j?0:D.c.b2(B.bc(k.gau(k)),0,255)
for(r=A.bsz(m),j=r.d,q=j.c>0,j=j.d,p=j.$flags|0;r.q();){if(q){o=r.c
n=D.d.C(D.c.b2(x,0,255))
p&2&&B.C(j)
j[o]=n}r.sap(w)
r.sau(0,u)}}},
geS(){return this.e}}
A.arU.prototype={
J(){return"Interpolation."+this.b}}
A.bs9.prototype={}
A.awn.prototype={
dT(d){return new A.awn(new Uint16Array(B.bU(this.c)),this.a,this.b)},
gaj(d){return D.dQ.gaj(this.c)},
gdu(){return C.hO},
gck(){return 1},
fm(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=A.fY(g)
x.$flags&2&&B.C(x)
x[e*v+f]=w}},
pt(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=A.fY(e)
x.$flags&2&&B.C(x)
x[d]=w
if(v>1){x[d+1]=A.fY(f)
if(v>2)x[d+2]=A.fY(g)}},
ne(d,e,f){var x,w=this.b
if(f<w){w=this.c[e*w+f]
x=$.hR
w=(x!=null?x:A.iI())[w]}else w=0
return w},
ni(d){var x=this.c[d*this.b],w=$.hR
return(w!=null?w:A.iI())[x]},
ng(d){var x,w=this.b
if(w<2)return 0
w=this.c[d*w+1]
x=$.hR
return(x!=null?x:A.iI())[w]},
nf(d){var x,w=this.b
if(w<3)return 0
w=this.c[d*w+2]
x=$.hR
return(x!=null?x:A.iI())[w]},
oy(d){var x,w=this.b
if(w<4)return 0
w=this.c[d*w+3]
x=$.hR
return(x!=null?x:A.iI())[w]},
uk(d,e){return this.fm(0,d,0,e)},
ui(d,e){return this.fm(0,d,1,e)},
uh(d,e){return this.fm(0,d,2,e)},
ug(d,e){return this.fm(0,d,3,e)}}
A.awo.prototype={
dT(d){return new A.awo(new Float32Array(B.bU(this.c)),this.a,this.b)},
gaj(d){return D.f3.gaj(this.c)},
gdu(){return C.jb},
gck(){return 1},
fm(d,e,f,g){var x,w=this.b
if(f<w){x=this.c
x.$flags&2&&B.C(x)
x[e*w+f]=g}},
pt(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x.$flags&2&&B.C(x)
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
ne(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
ni(d){return this.c[d*this.b]},
ng(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nf(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
oy(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uk(d,e){return this.fm(0,d,0,e)},
ui(d,e){return this.fm(0,d,1,e)},
uh(d,e){return this.fm(0,d,2,e)},
ug(d,e){return this.fm(0,d,3,e)}}
A.awp.prototype={
dT(d){return new A.awp(new Float64Array(B.bU(this.c)),this.a,this.b)},
gaj(d){return D.ed.gaj(this.c)},
gdu(){return C.kI},
gck(){return 1},
fm(d,e,f,g){var x,w=this.b
if(f<w){x=this.c
x.$flags&2&&B.C(x)
x[e*w+f]=g}},
pt(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x.$flags&2&&B.C(x)
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
ne(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
ni(d){return this.c[d*this.b]},
ng(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nf(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
oy(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uk(d,e){return this.fm(0,d,0,e)},
ui(d,e){return this.fm(0,d,1,e)},
uh(d,e){return this.fm(0,d,2,e)},
ug(d,e){return this.fm(0,d,3,e)}}
A.awq.prototype={
dT(d){return new A.awq(new Int16Array(B.bU(this.c)),this.a,this.b)},
gaj(d){return D.jB.gaj(this.c)},
gdu(){return C.kK},
gck(){return 32767},
fm(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.C(x)
x[e*v+f]=w}},
pt(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.C(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
ne(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
ni(d){return this.c[d*this.b]},
ng(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nf(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
oy(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uk(d,e){return this.fm(0,d,0,e)},
ui(d,e){return this.fm(0,d,1,e)},
uh(d,e){return this.fm(0,d,2,e)},
ug(d,e){return this.fm(0,d,3,e)}}
A.awr.prototype={
dT(d){return new A.awr(new Int32Array(B.bU(this.c)),this.a,this.b)},
gaj(d){return D.co.gaj(this.c)},
gdu(){return C.kL},
gck(){return 2147483647},
fm(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.C(x)
x[e*v+f]=w}},
pt(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.C(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
ne(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
ni(d){return this.c[d*this.b]},
ng(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nf(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
oy(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uk(d,e){return this.fm(0,d,0,e)},
ui(d,e){return this.fm(0,d,1,e)},
uh(d,e){return this.fm(0,d,2,e)},
ug(d,e){return this.fm(0,d,3,e)}}
A.aws.prototype={
dT(d){return new A.aws(new Int8Array(B.bU(this.c)),this.a,this.b)},
gaj(d){return D.jC.gaj(this.c)},
gdu(){return C.kJ},
gck(){return 127},
fm(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.C(x)
x[e*v+f]=w}},
pt(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.C(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
ne(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
ni(d){return this.c[d*this.b]},
ng(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nf(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
oy(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uk(d,e){return this.fm(0,d,0,e)},
ui(d,e){return this.fm(0,d,1,e)},
uh(d,e){return this.fm(0,d,2,e)},
ug(d,e){return this.fm(0,d,3,e)}}
A.awt.prototype={
dT(d){return new A.awt(new Uint16Array(B.bU(this.c)),this.a,this.b)},
gaj(d){return D.dQ.gaj(this.c)},
gdu(){return C.ch},
gck(){return 65535},
fm(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.C(x)
x[e*v+f]=w}},
pt(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.C(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
ne(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
ni(d){return this.c[d*this.b]},
ng(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nf(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
oy(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uk(d,e){return this.fm(0,d,0,e)},
ui(d,e){return this.fm(0,d,1,e)},
uh(d,e){return this.fm(0,d,2,e)},
ug(d,e){return this.fm(0,d,3,e)}}
A.a2S.prototype={
dT(d){return new A.a2S(new Uint32Array(B.bU(this.c)),this.a,this.b)},
gaj(d){return D.br.gaj(this.c)},
gdu(){return C.jc},
gck(){return 4294967295},
fm(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.C(x)
x[e*v+f]=w}},
pt(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.C(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
ne(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
ni(d){return this.c[d*this.b]},
ng(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nf(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
oy(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uk(d,e){return this.fm(0,d,0,e)},
ui(d,e){return this.fm(0,d,1,e)},
uh(d,e){return this.fm(0,d,2,e)},
ug(d,e){return this.fm(0,d,3,e)}}
A.uq.prototype={
dT(d){return A.cEr(this)},
gaj(d){return D.B.gaj(this.c)},
gdu(){return C.a8},
gck(){return 255},
fm(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.C(x)
x[e*v+f]=w}},
pt(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.C(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
RZ(d,e,f,g,h){var x,w,v=this.b
d*=v
x=this.c
w=D.c.C(e)
x.$flags&2&&B.C(x)
x[d]=w
if(v>1){x[d+1]=D.c.C(f)
if(v>2){x[d+2]=D.c.C(g)
if(v>3)x[d+3]=D.c.C(h)}}},
ne(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
ni(d){var x
d*=this.b
x=this.c
if(d>=x.length)return 0
return x[d]},
ng(d){var x=this.b
if(x<2)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+1]},
nf(d){var x=this.b
if(x<3)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+2]},
oy(d){var x=this.b
if(x<4)return 255
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+3]},
uk(d,e){return this.fm(0,d,0,e)},
ui(d,e){return this.fm(0,d,1,e)},
uh(d,e){return this.fm(0,d,2,e)},
ug(d,e){return this.fm(0,d,3,e)}}
A.IG.prototype={
dT(d){var x=this
return new A.IG(x.a,x.b,x.c,x.d)},
gdu(){return C.hO},
gu(d){return this.d.c},
geS(){return null},
gck(){return 1},
gnd(d){return this.a},
gnY(d){return this.b},
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
x=$.hR
w=(x!=null?x:A.iI())[w]}else w=0
return w},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=A.fY(f)
v.$flags&2&&B.C(v)
v[x+e]=w}},
ge6(d){return this.gaf(0)},
se6(d,e){this.saf(0,e)},
gaf(d){var x,w=this.d
if(w.c>0){w=w.d[this.c]
x=$.hR
w=(x!=null?x:A.iI())[w]}else w=0
return w},
saf(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=A.fY(e)
v.$flags&2&&B.C(v)
v[x]=w}},
gap(){var x,w=this.d
if(w.c>1){w=w.d[this.c+1]
x=$.hR
w=(x!=null?x:A.iI())[w]}else w=0
return w},
sap(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=A.fY(d)
v.$flags&2&&B.C(v)
v[x+1]=w}},
gau(d){var x,w=this.d
if(w.c>2){w=w.d[this.c+2]
x=$.hR
w=(x!=null?x:A.iI())[w]}else w=0
return w},
sau(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=A.fY(e)
v.$flags&2&&B.C(v)
v[x+2]=w}},
gaE(d){var x,w=this.d
if(w.c>3){w=w.d[this.c+3]
x=$.hR
w=(x!=null?x:A.iI())[w]}else w=0
return w},
saE(d,e){var x,w,v,u=this.d
if(u.c>3){x=this.gap()
u=u.d
w=this.c
v=A.fY(x)
u.$flags&2&&B.C(u)
u[w+3]=v}},
giD(){return this.gaf(0)/1},
siD(d){this.saf(0,d)},
gio(){return this.gap()/1},
sio(d){this.sap(d)},
gix(){return this.gau(0)/1},
six(d){this.sau(0,d)},
gfs(){return this.gaE(0)/1},
sfs(d){this.saE(0,d)},
gjy(){return A.jf(this)},
iJ(d,e){var x=this
if(x.d.c>0){x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saE(0,e.gaE(e))}},
kH(d,e,f){var x,w,v=this,u=v.d,t=u.c
if(t>0){u=u.d
x=v.c
w=A.fY(d)
u.$flags&2&&B.C(u)
u[x]=w
if(t>1){u[v.c+1]=A.fY(e)
if(t>2)u[v.c+2]=A.fY(f)}}},
iq(d,e,f,g){var x,w,v=this,u=v.d,t=u.c
if(t>0){u=u.d
x=v.c
w=A.fY(d)
u.$flags&2&&B.C(u)
u[x]=w
if(t>1){u[v.c+1]=A.fY(e)
if(t>2){u[v.c+2]=A.fY(f)
if(t>3)u[v.c+3]=A.fY(g)}}}},
ga5(d){return new A.hA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.IG)return B.aJ(B.F(u,!0,B.q(u).h("w.E")))===B.aJ(B.F(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
od(d){return A.pH(this,null,d,null,null)},
$ibt:1,
$idD:1,
$icT:1,
gfo(d){return this.d}}
A.IH.prototype={
dT(d){var x=this
return new A.IH(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geS(){return null},
gck(){return 1},
gdu(){return C.jb},
gnd(d){return this.a},
gnY(d){return this.b},
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
w.$flags&2&&B.C(w)
w[x+e]=f}},
ge6(d){return this.gaf(0)},
se6(d,e){this.saf(0,e)},
gaf(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saf(d,e){var x,w=this.d
if(w.c>0){w=w.d
x=this.c
w.$flags&2&&B.C(w)
w[x]=e}},
gap(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sap(d){var x,w=this.d
if(w.c>1){w=w.d
x=this.c
w.$flags&2&&B.C(w)
w[x+1]=d}},
gau(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sau(d,e){var x,w=this.d
if(w.c>2){w=w.d
x=this.c
w.$flags&2&&B.C(w)
w[x+2]=e}},
gaE(d){var x=this.d
return x.c>3?x.d[this.c+3]:1},
saE(d,e){var x,w=this.d
if(w.c>3){w=w.d
x=this.c
w.$flags&2&&B.C(w)
w[x+3]=e}},
giD(){return this.gaf(0)/1},
siD(d){this.saf(0,d)},
gio(){return this.gap()/1},
sio(d){this.sap(d)},
gix(){return this.gau(0)/1},
six(d){this.sau(0,d)},
gfs(){return this.gaE(0)/1},
sfs(d){this.saE(0,d)},
gjy(){return A.jf(this)},
iJ(d,e){var x=this
x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saE(0,e.gaE(e))},
kH(d,e,f){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.C(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
iq(d,e,f,g){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.C(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
ga5(d){return new A.hA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.IH)return B.aJ(B.F(u,!0,B.q(u).h("w.E")))===B.aJ(B.F(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
od(d){return A.pH(this,null,d,null,null)},
$ibt:1,
$idD:1,
$icT:1,
gfo(d){return this.d}}
A.II.prototype={
dT(d){var x=this
return new A.II(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geS(){return null},
gck(){return 1},
gdu(){return C.kI},
gnd(d){return this.a},
gnY(d){return this.b},
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
w.$flags&2&&B.C(w)
w[x+e]=f}},
ge6(d){return this.gaf(0)},
se6(d,e){this.saf(0,e)},
gaf(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saf(d,e){var x,w=this.d
if(w.c>0){w=w.d
x=this.c
w.$flags&2&&B.C(w)
w[x]=e}},
gap(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sap(d){var x,w=this.d
if(w.c>1){w=w.d
x=this.c
w.$flags&2&&B.C(w)
w[x+1]=d}},
gau(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sau(d,e){var x,w=this.d
if(w.c>2){w=w.d
x=this.c
w.$flags&2&&B.C(w)
w[x+2]=e}},
gaE(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saE(d,e){var x,w=this.d
if(w.c>3){w=w.d
x=this.c
w.$flags&2&&B.C(w)
w[x+3]=e}},
giD(){return this.gaf(0)/1},
siD(d){this.saf(0,d)},
gio(){return this.gap()/1},
sio(d){this.sap(d)},
gix(){return this.gau(0)/1},
six(d){this.sau(0,d)},
gfs(){return this.gaE(0)/1},
sfs(d){this.saE(0,d)},
gjy(){return A.jf(this)},
iJ(d,e){var x=this
x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saE(0,e.gaE(e))},
kH(d,e,f){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.C(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
iq(d,e,f,g){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.C(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
ga5(d){return new A.hA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.II)return B.aJ(B.F(u,!0,B.q(u).h("w.E")))===B.aJ(B.F(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
od(d){return A.pH(this,null,d,null,null)},
$ibt:1,
$idD:1,
$icT:1,
gfo(d){return this.d}}
A.IJ.prototype={
dT(d){var x=this
return new A.IJ(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geS(){return null},
gck(){return 32767},
gdu(){return C.kK},
gnd(d){return this.a},
gnY(d){return this.b},
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
v.$flags&2&&B.C(v)
v[x+e]=w}},
ge6(d){return this.gaf(0)},
se6(d,e){this.saf(0,e)},
gaf(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saf(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.C(v)
v[x]=w}},
gap(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sap(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.C(d)
v.$flags&2&&B.C(v)
v[x+1]=w}},
gau(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sau(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.C(v)
v[x+2]=w}},
gaE(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saE(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.C(v)
v[x+3]=w}},
giD(){return this.gaf(0)/32767},
siD(d){this.saf(0,d*32767)},
gio(){return this.gap()/32767},
sio(d){this.sap(d*32767)},
gix(){return this.gau(0)/32767},
six(d){this.sau(0,d*32767)},
gfs(){return this.gaE(0)/32767},
sfs(d){this.saE(0,d*32767)},
gjy(){return A.jf(this)},
iJ(d,e){var x=this
x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saE(0,e.gaE(e))},
kH(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.C(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
iq(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.C(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga5(d){return new A.hA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.IJ)return B.aJ(B.F(u,!0,B.q(u).h("w.E")))===B.aJ(B.F(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
od(d){return A.pH(this,null,d,null,null)},
$ibt:1,
$idD:1,
$icT:1,
gfo(d){return this.d}}
A.IK.prototype={
dT(d){var x=this
return new A.IK(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geS(){return null},
gck(){return 2147483647},
gdu(){return C.kL},
gnd(d){return this.a},
gnY(d){return this.b},
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
v.$flags&2&&B.C(v)
v[x+e]=w}},
ge6(d){return this.gaf(0)},
se6(d,e){this.saf(0,e)},
gaf(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saf(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.C(v)
v[x]=w}},
gap(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sap(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.C(d)
v.$flags&2&&B.C(v)
v[x+1]=w}},
gau(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sau(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.C(v)
v[x+2]=w}},
gaE(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saE(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.C(v)
v[x+3]=w}},
giD(){return this.gaf(0)/2147483647},
siD(d){this.saf(0,d*2147483647)},
gio(){return this.gap()/2147483647},
sio(d){this.sap(d*2147483647)},
gix(){return this.gau(0)/2147483647},
six(d){this.sau(0,d*2147483647)},
gfs(){return this.gaE(0)/2147483647},
sfs(d){this.saE(0,d*2147483647)},
gjy(){return A.jf(this)},
iJ(d,e){var x=this
x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saE(0,e.gaE(e))},
kH(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.C(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
iq(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.C(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga5(d){return new A.hA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.IK)return B.aJ(B.F(u,!0,B.q(u).h("w.E")))===B.aJ(B.F(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
od(d){return A.pH(this,null,d,null,null)},
$ibt:1,
$idD:1,
$icT:1,
gfo(d){return this.d}}
A.IL.prototype={
dT(d){var x=this
return new A.IL(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geS(){return null},
gck(){return 127},
gdu(){return C.kJ},
gnd(d){return this.a},
gnY(d){return this.b},
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
v.$flags&2&&B.C(v)
v[x+e]=w}},
ge6(d){return this.gaf(0)},
se6(d,e){this.saf(0,e)},
gaf(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saf(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.C(v)
v[x]=w}},
gap(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sap(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.C(d)
v.$flags&2&&B.C(v)
v[x+1]=w}},
gau(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sau(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.C(v)
v[x+2]=w}},
gaE(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saE(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.C(v)
v[x+3]=w}},
giD(){return this.gaf(0)/127},
siD(d){this.saf(0,d*127)},
gio(){return this.gap()/127},
sio(d){this.sap(d*127)},
gix(){return this.gau(0)/127},
six(d){this.sau(0,d*127)},
gfs(){return this.gaE(0)/127},
sfs(d){this.saE(0,d*127)},
gjy(){return A.jf(this)},
iJ(d,e){var x=this
x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saE(0,e.gaE(e))},
kH(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.C(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
iq(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.C(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga5(d){return new A.hA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.IL)return B.aJ(B.F(u,!0,B.q(u).h("w.E")))===B.aJ(B.F(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
od(d){return A.pH(this,null,d,null,null)},
$ibt:1,
$idD:1,
$icT:1,
gfo(d){return this.d}}
A.awH.prototype={
q(){var x=this,w=x.a
if(w.gnd(w)+1>x.d){w.hm(0,x.b,w.gnY(w)+1)
return w.gnY(w)<=x.e}return w.q()},
gL(d){return this.a},
$ibt:1}
A.IM.prototype={
dT(d){var x=this
return new A.IM(x.a,x.b,x.c,x.d,x.e,x.f)},
gu(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geS(){return this.f.f},
gck(){return this.f.gck()},
gdu(){return C.fn},
gnd(d){return this.a},
gnY(d){return this.b},
hm(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.f
w=f*x.e
v.e=w
x=e*x.c
v.c=w+D.c.S(x,3)
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
w.c=w.e+D.c.S(v,3)}v=w.c
u=u.d
u===$&&B.b()
return v<u.byteLength},
a5Z(d,e){var x,w=this.c,v=7-(this.d+e)
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
if(w>=x.length)return 0
return D.c.h1(x[w],v)&1},
pF(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.a5Z(0,d):0
else x=w.ne(0,this.a5Z(0,0),d)
return x},
kQ(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=7-(this.d+d)
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.b2(D.d.C(e),0,1)
s=C.avs[w]
v=D.c.eU(t,w)
r=r.d
r.$flags&2&&B.C(r)
r[x]=(u&s|v)>>>0},
i(d,e){return this.pF(e)},
m(d,e,f){return this.kQ(e,f)},
ge6(d){return this.a5Z(0,0)},
se6(d,e){this.kQ(0,e)},
gaf(d){return this.pF(0)},
saf(d,e){this.kQ(0,e)},
gap(){return this.pF(1)},
sap(d){this.kQ(1,d)},
gau(d){return this.pF(2)},
sau(d,e){this.kQ(2,e)},
gaE(d){return this.pF(3)},
saE(d,e){this.kQ(3,e)},
giD(){return this.pF(0)/this.f.gck()},
siD(d){this.kQ(0,d*this.f.gck())},
gio(){return this.pF(1)/this.f.gck()},
sio(d){this.kQ(1,d*this.f.gck())},
gix(){return this.pF(2)/this.f.gck()},
six(d){this.kQ(2,d*this.f.gck())},
gfs(){return this.pF(3)/this.f.gck()},
sfs(d){this.kQ(3,d*this.f.gck())},
gjy(){return A.jf(this)},
iJ(d,e){var x=this
x.kQ(0,e.gaf(e))
x.kQ(1,e.gap())
x.kQ(2,e.gau(e))
x.kQ(3,e.gaE(e))},
kH(d,e,f){var x=this,w=x.f.c
if(w>0){x.kQ(0,d)
if(w>1){x.kQ(1,e)
if(w>2)x.kQ(2,f)}}},
iq(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.kQ(0,d)
if(w>1){x.kQ(1,e)
if(w>2){x.kQ(2,f)
if(w>3)x.kQ(3,g)}}}},
ga5(d){return new A.hA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.IM)return B.aJ(B.F(u,!0,B.q(u).h("w.E")))===B.aJ(B.F(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.pF(0)!==x.i(e,0))return!1
if(v>1){if(u.pF(1)!==x.i(e,1))return!1
if(v>2){if(u.pF(2)!==x.i(e,2))return!1
if(v>3)if(u.pF(3)!==x.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
od(d){return A.pH(this,null,d,null,null)},
$ibt:1,
$idD:1,
$icT:1,
gfo(d){return this.f}}
A.IN.prototype={
dT(d){var x=this
return new A.IN(x.a,x.b,x.c,x.d)},
gu(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
geS(){return this.d.e},
gck(){return this.d.gck()},
gdu(){return C.ch},
gnd(d){return this.a},
gnY(d){return this.b},
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
if(w!=null)x=w.ne(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
i(d,e){return this.hY(0,e)},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.d.C(f)
v.$flags&2&&B.C(v)
v[x+e]=w}},
ge6(d){return this.gaf(0)},
se6(d,e){this.saf(0,e)},
gaf(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.ni(x.d[this.c])
return x},
saf(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.C(v)
v[x]=w}},
gap(){var x=this.d,w=x.e
if(w==null)x=x.c>1?x.d[this.c+1]:0
else x=w.ng(x.d[this.c])
return x},
sap(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.C(d)
v.$flags&2&&B.C(v)
v[x+1]=w}},
gau(d){var x=this.d,w=x.e
if(w==null)x=x.c>2?x.d[this.c+2]:0
else x=w.nf(x.d[this.c])
return x},
sau(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.C(v)
v[x+2]=w}},
gaE(d){var x=this.d,w=x.e
if(w==null)x=x.c>3?x.d[this.c+3]:0
else x=w.oy(x.d[this.c])
return x},
saE(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.C(v)
v[x+3]=w}},
giD(){return this.gaf(0)/this.d.gck()},
siD(d){this.saf(0,d*this.d.gck())},
gio(){return this.gap()/this.d.gck()},
sio(d){this.sap(d*this.d.gck())},
gix(){return this.gau(0)/this.d.gck()},
six(d){this.sau(0,d*this.d.gck())},
gfs(){return this.gaE(0)/this.d.gck()},
sfs(d){this.saE(0,d*this.d.gck())},
gjy(){return A.jf(this)},
iJ(d,e){var x=this
x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saE(0,e.gaE(e))},
kH(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.C(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
iq(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.C(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga5(d){return new A.hA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.IN)return B.aJ(B.F(u,!0,B.q(u).h("w.E")))===B.aJ(B.F(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.hY(0,0)!==x.i(e,0))return!1
if(v>1){if(u.hY(0,1)!==x.i(e,1))return!1
if(v>2){if(u.hY(0,2)!==x.i(e,2))return!1
if(v>3)if(u.hY(0,3)!==x.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
od(d){return A.pH(this,null,d,null,null)},
$ibt:1,
$idD:1,
$icT:1,
gfo(d){return this.d}}
A.IO.prototype={
dT(d){var x=this
return new A.IO(x.a,x.b,x.c,x.d,x.e,x.f)},
gu(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geS(){return this.f.f},
gck(){return this.f.gck()},
gdu(){return C.h6},
gax4(){var x=this.f
return x.f!=null?2:x.c<<1>>>0},
gnd(d){return this.a},
gnY(d){return this.b},
hm(d,e,f){var x,w,v,u=this
u.a=e
u.b=f
x=u.gax4()
w=u.b*u.f.e
u.e=w
v=u.a*x
u.c=w+D.c.S(v,3)
u.d=v&7},
gL(d){return this},
q(){var x,w,v=this,u=v.f
if(++v.a===u.a){v.a=0
x=++v.b
v.d=0;++v.c
v.e=v.e+u.e
return x<u.b}if(u.f!=null||u.c===1){x=v.d+=2
if(x>7){v.d=0;++v.c}}else{w=v.gax4()
x=v.a*w
v.d=x&7
v.c=v.e+D.c.S(x,3)}x=v.c
u=u.d
u===$&&B.b()
return x<u.length},
a6_(d,e){var x,w=this.c,v=6-(this.d+(e<<1>>>0))
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
return D.c.h1(x[w],v)&3},
pG(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.a6_(0,d):0
else x=w.ne(0,this.a6_(0,0),d)
return x},
kR(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=6-(this.d+(d<<1>>>0))
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.b2(D.d.C(e),0,3)
s=C.apV[D.c.S(w,1)]
v=D.c.eU(t,w)
r=r.d
r.$flags&2&&B.C(r)
r[x]=(u&s|v)>>>0},
i(d,e){return this.pG(e)},
m(d,e,f){return this.kR(e,f)},
ge6(d){return this.a6_(0,0)},
se6(d,e){this.kR(0,e)},
gaf(d){return this.pG(0)},
saf(d,e){this.kR(0,e)},
gap(){return this.pG(1)},
sap(d){this.kR(1,d)},
gau(d){return this.pG(2)},
sau(d,e){this.kR(2,e)},
gaE(d){return this.pG(3)},
saE(d,e){this.kR(3,e)},
giD(){return this.pG(0)/this.f.gck()},
siD(d){this.kR(0,d*this.f.gck())},
gio(){return this.pG(1)/this.f.gck()},
sio(d){this.kR(1,d*this.f.gck())},
gix(){return this.pG(2)/this.f.gck()},
six(d){this.kR(2,d*this.f.gck())},
gfs(){return this.pG(3)/this.f.gck()},
sfs(d){this.kR(3,d*this.f.gck())},
gjy(){return A.jf(this)},
iJ(d,e){var x=this
x.kR(0,e.gaf(e))
x.kR(1,e.gap())
x.kR(2,e.gau(e))
x.kR(3,e.gaE(e))},
kH(d,e,f){var x=this,w=x.f.c
if(w>0){x.kR(0,d)
if(w>1){x.kR(1,e)
if(w>2)x.kR(2,f)}}},
iq(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.kR(0,d)
if(w>1){x.kR(1,e)
if(w>2){x.kR(2,f)
if(w>3)x.kR(3,g)}}}},
ga5(d){return new A.hA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.IO)return B.aJ(B.F(u,!0,B.q(u).h("w.E")))===B.aJ(B.F(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.pG(0)!==x.i(e,0))return!1
if(v>1){if(u.pG(1)!==x.i(e,1))return!1
if(v>2){if(u.pG(2)!==x.i(e,2))return!1
if(v>3)if(u.pG(3)!==x.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
od(d){return A.pH(this,null,d,null,null)},
$ibt:1,
$idD:1,
$icT:1,
gfo(d){return this.f}}
A.IP.prototype={
dT(d){var x=this
return new A.IP(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geS(){return null},
gck(){return 4294967295},
gdu(){return C.jc},
gnd(d){return this.a},
gnY(d){return this.b},
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
v.$flags&2&&B.C(v)
v[x+e]=w}},
ge6(d){return this.gaf(0)},
se6(d,e){this.saf(0,e)},
gaf(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saf(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.C(v)
v[x]=w}},
gap(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sap(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.C(d)
v.$flags&2&&B.C(v)
v[x+1]=w}},
gau(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sau(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.C(v)
v[x+2]=w}},
gaE(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saE(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.C(v)
v[x+3]=w}},
giD(){return this.gaf(0)/4294967295},
siD(d){this.saf(0,d*4294967295)},
gio(){return this.gap()/4294967295},
sio(d){this.sap(d*4294967295)},
gix(){return this.gau(0)/4294967295},
six(d){this.sau(0,d*4294967295)},
gfs(){return this.gaE(0)/4294967295},
sfs(d){this.saE(0,d*4294967295)},
gjy(){return A.jf(this)},
iJ(d,e){var x=this
x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saE(0,e.gaE(e))},
kH(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.C(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
iq(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.C(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga5(d){return new A.hA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.IP)return B.aJ(B.F(u,!0,B.q(u).h("w.E")))===B.aJ(B.F(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
od(d){return A.pH(this,null,d,null,null)},
$ibt:1,
$idD:1,
$icT:1,
gfo(d){return this.d}}
A.IQ.prototype={
dT(d){var x=this
return new A.IQ(x.a,x.b,x.c,x.d,x.e)},
gu(d){var x=this.e,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geS(){return this.e.f},
gck(){return this.e.gck()},
gdu(){return C.h7},
gnd(d){return this.a},
gnY(d){return this.b},
hm(d,e,f){var x,w,v,u=this
u.a=e
u.b=f
x=u.e
w=x.c*4
v=x.e
if(w===4)x=f*v+D.c.S(e,1)
else if(w===8)x=f*x.a+e
else{x=f*v
x=w===16?x+(e<<1>>>0):x+D.c.S(e*w,3)}u.c=x
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
a60(d,e){var x,w=this.c,v=4-(this.d+(e<<2>>>0))
if(v<0){v+=8;++w}x=this.e.d
x===$&&B.b()
return D.c.h1(x[w],v)&15},
pD(d){var x=this.e,w=x.f
if(w==null)x=x.c>d?this.a60(0,d):0
else x=w.ne(0,this.a60(0,0),d)
return x},
kS(d,e){var x,w,v,u,t,s,r=this.e
if(d>=r.c)return
x=this.c
w=4-(this.d+(d<<2>>>0))
if(w<0){w+=8;++x}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.b2(D.d.C(e),0,15)
s=w===4?15:240
v=D.c.eU(t,w)
r=r.d
r.$flags&2&&B.C(r)
r[x]=(u&s|v)>>>0},
i(d,e){return this.pD(e)},
m(d,e,f){return this.kS(e,f)},
ge6(d){return this.a60(0,0)},
se6(d,e){this.kS(0,e)},
gaf(d){return this.pD(0)},
saf(d,e){this.kS(0,e)},
gap(){return this.pD(1)},
sap(d){this.kS(1,d)},
gau(d){return this.pD(2)},
sau(d,e){this.kS(2,e)},
gaE(d){return this.pD(3)},
saE(d,e){this.kS(3,e)},
giD(){return this.pD(0)/this.e.gck()},
siD(d){this.kS(0,d*this.e.gck())},
gio(){return this.pD(1)/this.e.gck()},
sio(d){this.kS(1,d*this.e.gck())},
gix(){return this.pD(2)/this.e.gck()},
six(d){this.kS(2,d*this.e.gck())},
gfs(){return this.pD(3)/this.e.gck()},
sfs(d){this.kS(3,d*this.e.gck())},
gjy(){return A.jf(this)},
iJ(d,e){var x=this
x.kS(0,e.gaf(e))
x.kS(1,e.gap())
x.kS(2,e.gau(e))
x.kS(3,e.gaE(e))},
kH(d,e,f){var x=this,w=x.e.c
if(w>0){x.kS(0,d)
if(w>1){x.kS(1,e)
if(w>2)x.kS(2,f)}}},
iq(d,e,f,g){var x=this,w=x.e.c
if(w>0){x.kS(0,d)
if(w>1){x.kS(1,e)
if(w>2){x.kS(2,f)
if(w>3)x.kS(3,g)}}}},
ga5(d){return new A.hA(this)},
k(d,e){var x,w,v=this
if(e==null)return!1
if(e instanceof A.IQ)return B.aJ(B.F(v,!0,B.q(v).h("w.E")))===B.aJ(B.F(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=v.e.c
w=J.a2(e)
if(w.gu(e)!==x)return!1
if(v.pD(0)!==w.i(e,0))return!1
if(x>1){if(v.pD(1)!==w.i(e,1))return!1
if(x>2){if(v.pD(2)!==w.i(e,2))return!1
if(x>3)if(v.pD(3)!==w.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
od(d){return A.pH(this,null,d,null,null)},
$ibt:1,
$idD:1,
$icT:1,
gfo(d){return this.e}}
A.IR.prototype={
dT(d){var x=this
return new A.IR(x.a,x.b,x.c,x.d)},
gu(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
geS(){return this.d.e},
gck(){return this.d.gck()},
gdu(){return C.a8},
gnd(d){return this.a},
gnY(d){return this.b},
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
if(w!=null)x=w.ne(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
i(d,e){return this.hY(0,e)},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.d.C(D.d.b2(f,0,255))
v.$flags&2&&B.C(v)
v[x+e]=w}},
ge6(d){return this.d.d[this.c]},
se6(d,e){var x=this.d.d,w=this.c,v=D.d.C(D.d.b2(e,0,255))
x.$flags&2&&B.C(x)
x[w]=v},
gaf(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.ni(x.d[this.c])
return x},
saf(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(D.d.b2(e,0,255))
v.$flags&2&&B.C(v)
v[x]=w}},
gap(){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>1?w.d[x.c+1]:0}else w=v.ng(w.d[x.c])
return w},
sap(d){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.d.C(D.d.b2(d,0,255))
w.$flags&2&&B.C(w)
w[v]=x}else if(v>1){w=w.d
v=this.c
x=D.d.C(D.d.b2(d,0,255))
w.$flags&2&&B.C(w)
w[v+1]=x}},
gau(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>2?w.d[x.c+2]:0}else w=v.nf(w.d[x.c])
return w},
sau(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.d.C(D.d.b2(e,0,255))
w.$flags&2&&B.C(w)
w[v]=x}else if(v>2){w=w.d
v=this.c
x=D.d.C(D.d.b2(e,0,255))
w.$flags&2&&B.C(w)
w[v+2]=x}},
gaE(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c+1]
else w=v>3?w.d[x.c+3]:255}else w=v.oy(w.d[x.c])
return w},
saE(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.d.C(D.d.b2(e,0,255))
w.$flags&2&&B.C(w)
w[v+1]=x}else if(v>3){w=w.d
v=this.c
x=D.d.C(D.d.b2(e,0,255))
w.$flags&2&&B.C(w)
w[v+3]=x}},
giD(){return this.gaf(0)/this.d.gck()},
siD(d){this.saf(0,d*this.d.gck())},
gio(){return this.gap()/this.d.gck()},
sio(d){this.sap(d*this.d.gck())},
gix(){return this.gau(0)/this.d.gck()},
six(d){this.sau(0,d*this.d.gck())},
gfs(){return this.gaE(0)/this.d.gck()},
sfs(d){this.saE(0,d*this.d.gck())},
gjy(){return this.d.c===2?this.gaf(0):A.jf(this)},
iJ(d,e){var x=this
if(x.d.e!=null)x.se6(0,e.ge6(e))
else{x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saE(0,e.gaE(e))}},
kH(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.C(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
iq(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.C(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga5(d){return new A.hA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.IR)return B.aJ(B.F(u,!0,B.q(u).h("w.E")))===B.aJ(B.F(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.hY(0,0)!==x.i(e,0))return!1
if(v>1){if(u.hY(0,1)!==x.i(e,1))return!1
if(v>2){if(u.hY(0,2)!==x.i(e,2))return!1
if(v>3)if(u.hY(0,3)!==x.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.F(this,!0,B.q(this).h("w.E")))},
od(d){return A.pH(this,null,d,null,null)},
$ibt:1,
$idD:1,
$icT:1,
gfo(d){return this.d}}
A.fi.prototype={
dT(d){return new A.fi()},
gfo(d){return $.cOm()},
gnd(d){return 0},
gnY(d){return 0},
gu(d){return 0},
gck(){return 0},
gdu(){return C.a8},
geS(){return null},
i(d,e){return 0},
m(d,e,f){},
ge6(d){return 0},
se6(d,e){},
gaf(d){return 0},
saf(d,e){},
gap(){return 0},
sap(d){},
gau(d){return 0},
sau(d,e){},
gaE(d){return 0},
saE(d,e){},
giD(){return 0},
siD(d){},
gio(){return 0},
sio(d){},
gix(){return 0},
six(d){},
gfs(){return 0},
sfs(d){},
gjy(){return 0},
iJ(d,e){},
kH(d,e,f){},
iq(d,e,f,g){},
hm(d,e,f){},
gL(d){return this},
q(){return!1},
k(d,e){if(e==null)return!1
return e instanceof A.fi},
gA(d){return 0},
ga5(d){return new A.hA(this)},
od(d){return this},
$ibt:1,
$idD:1,
$icT:1}
A.bcv.prototype={
J(){return"FlipDirection."+this.b}}
A.arr.prototype={
j(d){return"ImageException: "+this.a},
$ib9:1}
A.lZ.prototype={
gu(d){return this.c-this.d},
i(d,e){return J.v(this.a,this.d+e)},
m(d,e,f){J.bV(this.a,this.d+e,f)
return f},
rC(d,e,f,g){var x=this.a,w=J.cU(x),v=this.d+d
if(f instanceof A.lZ)w.e3(x,v,v+e,f.a,f.d+g)
else w.e3(x,v,v+e,y.L.a(f),g)},
A2(d,e,f){return this.rC(d,e,f,0)},
bF7(d,e,f){var x=this.a,w=this.d+d
J.tu(x,w,w+e,f)},
a25(d,e,f){var x=this,w=f!=null?x.b+f:x.d
return A.cY(x.a,x.e,d,w+e)},
ji(d){return this.a25(d,0,null)},
AW(d,e){return this.a25(d,0,e)},
Sr(d,e){return this.a25(d,e,null)},
dN(d,e){var x=this.d,w=x+(this.c-x)
for(;x<w;++x)J.v(this.a,x)
return-1},
ct(){return J.v(this.a,this.d++)},
jd(d){var x=this.ji(d)
this.d=this.d+(x.c-x.d)
return x},
je(d){var x,w,v,u,t,s=this
if(d==null){x=B.a([],y.t)
for(w=s.c;v=s.d,v<w;){u=s.a
s.d=v+1
t=J.v(u,v)
if(t===0)return B.eq(x,0,null)
x.push(t)}throw B.l(A.c6("EOF reached without finding string terminator (length: "+B.o(d)+")"))}return B.eq(s.jd(d).hL(),0,null)},
Qe(){return this.je(null)},
aEO(d){var x,w,v,u,t=this,s=B.a([],y.t)
for(x=t.c;w=t.d,w<x;){v=t.a
t.d=w+1
u=J.v(v,w)
s.push(u)
if(u===10||s.length>=d)return B.eq(s,0,null)}return B.eq(s,0,null)},
bJN(){return this.aEO(256)},
bJO(){var x,w,v,u,t=this,s=B.a([],y.t)
for(x=t.c;w=t.d,w<x;){v=t.a
t.d=w+1
u=J.v(v,w)
if(u===0)return new B.Fh(!0).F4(s,0,null,!0)
s.push(u)}return D.au.Cr(0,s,!0)},
am(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255
if(x.e)return w<<8|v
return v<<8|w},
rH(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255
if(x.e)return u|v<<8|w<<16
return w|v<<8|u<<16},
a3(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255,t=J.v(x.a,x.d++)&255
if(x.e)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
a_T(){return A.dk6(this.adI())},
adI(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255,t=J.v(x.a,x.d++)&255,s=J.v(x.a,x.d++)&255,r=J.v(x.a,x.d++)&255,q=J.v(x.a,x.d++)&255,p=J.v(x.a,x.d++)&255
if(x.e)return(D.c.en(w,56)|D.c.en(v,48)|D.c.en(u,40)|D.c.en(t,32)|s<<24|r<<16|q<<8|p)>>>0
return(D.c.en(p,56)|D.c.en(q,48)|D.c.en(r,40)|D.c.en(s,32)|t<<24|u<<16|v<<8|w)>>>0},
Jh(d,e,f){var x,w=this,v=w.a
if(y.D.b(v))return w.aFW(e,f)
x=w.b+w.d+e
return J.cqC(v,x,f<=0?w.c:x+f)},
eK(d){return this.Jh(0,0,0)},
aFW(d,e){var x,w=this,v=e==null?w.c-w.d-d:e,u=w.a
if(y.D.b(u))return J.df(D.B.gaj(u),u.byteOffset+w.d+d,v)
x=w.d+d
x=J.cqC(u,x,x+v)
return new Uint8Array(B.bU(x))},
hL(){return this.aFW(0,null)},
QA(){var x=this.a
if(y.D.b(x))return J.oy(D.B.gaj(x),x.byteOffset+this.d,null)
return J.oy(D.B.gaj(this.hL()),0,null)}}
A.bqx.prototype={
brr(d){var x=this
x.apm(d)
x.amr()
x.ap2()
x.akT()},
bdr(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.c=Math.max(d,4)
n.f=m-n.d
n.r=m-1
x=D.d.b4(m,8)
n.w=x
n.x=x*256
n.Q=new A.a2S(new Uint32Array(1024),256,4)
n.a=new A.uq(new Uint8Array(768),256,3)
n.d=3
n.e=2
x=D.d.S(m,3)
n.y=new Int32Array(x)
x=y.cb
n.z=B.bO(m*3,0,!1,x)
n.at=B.bO(n.c,0,!1,x)
x=n.ax=B.bO(n.c,0,!1,x)
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
akT(){var x,w,v,u,t,s
for(x=0;x<this.c;++x){w=this.a
w===$&&B.b()
v=this.Q
v===$&&B.b()
u=v.b
t=2<u?v.c[x*u+2]:0
s=1<u?v.c[x*u+1]:0
v=0<u?v.c[x*u]:0
w.pt(x,Math.abs(t),Math.abs(s),Math.abs(v))}},
bbd(d,e,f){var x,w,v,u=this.as[e],t=u-1,s=this.c,r=this.Q,q=1000,p=-1
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
amr(){var x,w,v,u,t,s,r,q=this
for(x=0,w=0;x<q.c;++x){for(v=0;v<3;++v,++w){u=q.z
u===$&&B.b()
t=D.c.b2(D.d.C(0.5+u[w]),0,255)
u=q.Q
u===$&&B.b()
s=u.b
if(v<s){u=u.c
r=D.c.C(t)
u.$flags&2&&B.C(u)
u[x*s+v]=r}}u=q.Q
u===$&&B.b()
s=u.b
if(3<s){u=u.c
r=D.c.C(x)
u.$flags&2&&B.C(u)
u[x*s+3]=r}}},
ap2(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
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
i.$flags&2&&B.C(i)
i[l*q]=j}if(k){k=w.c
j=D.c.C(m)
k.$flags&2&&B.C(k)
k[r*q]=j}m=p?w.c[l*q+1]:0
k=p?w.c[r*q+1]:0
if(p){j=w.c
k=D.c.C(k)
j.$flags&2&&B.C(j)
j[l*q+1]=k}if(p){p=w.c
k=D.c.C(m)
p.$flags&2&&B.C(p)
p[r*q+1]=k}p=2<q
m=p?w.c[l*q+2]:0
k=p?w.c[r*q+2]:0
if(p){j=w.c
k=D.c.C(k)
j.$flags&2&&B.C(j)
j[l*q+2]=k}if(p){p=w.c
k=D.c.C(m)
p.$flags&2&&B.C(p)
p[r*q+2]=k}p=3<q
m=p?w.c[l*q+3]:0
k=p?w.c[r*q+3]:0
if(p){j=w.c
k=D.c.C(k)
j.$flags&2&&B.C(j)
j[l*q+3]=k}if(p){p=w.c
k=D.c.C(m)
p.$flags&2&&B.C(p)
p[r*q+3]=k}}if(o!==t){u&2&&B.C(v)
v[t]=s+r>>>1
for(m=t+1;m<o;++m)v[m]=r
s=r
t=o}}x=h.r
x.toString
w=D.c.S(s+x,1)
u&2&&B.C(v)
v[t]=w
for(n=t+1;n<256;++n)v[n]=x},
avb(d,e){var x,w,v,u
for(x=this.y,w=d*d,v=0;v<d;++v){x===$&&B.b()
u=D.d.C(e*((w-v*v)*256/w))
x.$flags&2&&B.C(x)
x[v]=u}},
apm(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.x
a2===$&&B.b()
x=30+D.c.b4(a1.b-1,3)
w=a3.gd0(0)*a3.gb5(0)
v=D.c.hy(w,a1.b)
u=Math.max(D.c.b4(v,100),1)
if(u===0)u=1
t=D.c.S(a2,8)
if(t<=1)t=0
a1.avb(t,1024)
if(w<1509)s=a1.b=1
else if(D.c.an(w,499)!==0)s=499
else if(D.c.an(w,491)!==0)s=491
else s=D.c.an(w,487)!==0?487:503
r=a3.gd0(0)
q=a3.gb5(0)
for(p=a2,o=1024,n=0,m=0,l=0,k=0;k<v;){a2=a3.a
j=a2==null?null:a2.ec(m,l,null)
if(j==null)j=new A.fi()
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
a2[f+2]=i}e=a1.bmL(g,h,i)
if(e<0)e=a1.aYJ(g,h,i)
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
if(t>0)a1.aVD(d,t,e,g,h,i)}n+=s
m+=s
for(;m>r;){m-=r;++l}for(;n>=w;){n-=w
l-=q}++k
if(D.c.an(k,u)===0){o-=D.c.hy(o,x)
p-=D.c.b4(p,30)
t=D.c.S(p,8)
if(t<=1)t=0
a1.avb(t,o)}}},
aVD(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=f-e,j=l.d-1
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
aYJ(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=1e30
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
bmL(d,e,f){var x,w,v,u,t,s
for(x=this.d,w=this.z,v=0,u=0;v<x;++v){w===$&&B.b()
t=u+1
s=!1
if(w[u]===d){u=t+1
if(w[t]===e){t=u+1
s=w[u]===f
u=t}}else u=t
if(s)return v}return-1}}
A.aw8.prototype={
b1(d){var x,w,v=this
if(v.a===v.c.length)v.b1r()
x=v.c
w=v.a++
x.$flags&2&&B.C(x)
x[w]=d&255},
m7(d){var x,w,v,u,t=this,s=J.bA(d)
for(;x=t.a,w=x+s,v=t.c,u=v.length,w>u;)t.amb(w-u)
D.B.hZ(v,x,w,d)
t.a+=s},
ld(d){var x=this
if(x.b){x.b1(D.c.S(d,8)&255)
x.b1(d&255)
return}x.b1(d&255)
x.b1(D.c.S(d,8)&255)},
j0(d){var x=this
if(x.b){x.b1(D.c.S(d,24)&255)
x.b1(D.c.S(d,16)&255)
x.b1(D.c.S(d,8)&255)
x.b1(d&255)
return}x.b1(d&255)
x.b1(D.c.S(d,8)&255)
x.b1(D.c.S(d,16)&255)
x.b1(D.c.S(d,24)&255)},
bML(d){var x,w=this,v=new Float32Array(1)
v[0]=d
x=J.df(D.f3.gaj(v),0,null)
if(w.b){w.b1(x[3])
w.b1(x[2])
w.b1(x[1])
w.b1(x[0])
return}w.b1(x[0])
w.b1(x[1])
w.b1(x[2])
w.b1(x[3])},
bMM(d){var x,w=this,v=new Float64Array(1)
v[0]=d
x=J.df(D.ed.gaj(v),0,null)
if(w.b){w.b1(x[7])
w.b1(x[6])
w.b1(x[5])
w.b1(x[4])
w.b1(x[3])
w.b1(x[2])
w.b1(x[1])
w.b1(x[0])
return}w.b1(x[0])
w.b1(x[1])
w.b1(x[2])
w.b1(x[3])
w.b1(x[4])
w.b1(x[5])
w.b1(x[6])
w.b1(x[7])},
amb(d){var x,w,v,u
if(d!=null)x=d
else{w=this.c.length
x=w===0?8192:w*2}w=this.c
v=w.length
u=new Uint8Array(v+x)
D.B.hZ(u,0,v,w)
this.c=u},
b1r(){return this.amb(null)},
gu(d){return this.a}}
A.bub.prototype={
aIv(d){var x,w,v,u,t,s,r=d.gd0(0),q=d.gb5(0),p=this.a
p===$&&B.b()
x=A.hT(null,null,C.a8,0,C.bm,q,null,0,1,p,C.a8,r,!1)
r=x.a
w=r.ga5(r)
w.q()
x.z=d.z
x.w=d.w
x.y=d.y
for(r=d.a,r=r.ga5(r);r.q();){v=r.gL(r)
u=w.gL(w)
t=D.d.C(v.gaf(v))
s=D.d.C(v.gap())
u.m(0,0,this.bbd(D.d.C(v.gau(v)),s,t))
w.q()}return x}}
A.nX.prototype={
C(d){var x=this.b
return x===0?0:D.c.hy(this.a,x)},
u2(d){var x=this.b
return x===0?0:this.a/x},
k(d,e){if(e==null)return!1
return e instanceof A.nX&&this.a===e.a&&this.b===e.b},
gA(d){return B.ad(this.a,this.b,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
j(d){return""+this.a+"/"+this.b}}
A.bwM.prototype={
J(){return"RequestImageFormat."+this.b}}
A.bIp.prototype={}
var z=a.updateTypes(["~(lZ)","t(qK,t,t)","t([t])","~(Ca,A<t>)","~(t,t,t,t,t,dI)","~(e,q4)","~(t)","~(t,k3)","Ca(t)"])
A.bi7.prototype={
$0(){return A.csv(this.a,this.b,"jpg",this.c)},
$S:182}
A.bi8.prototype={
$0(){return A.csv(this.a,this.b,"png",null)},
$S:182}
A.bia.prototype={
$0(){return A.csv(this.a,this.b,"webp",this.c)},
$S:182}
A.bi0.prototype={
$2(d,e){var x=A.cCr(e)
this.a.a.m(0,d,x)
return x},
$S:z+5}
A.bi1.prototype={
$2(d,e){var x=e.dT(0)
this.a.a.m(0,d,x)
return x},
$S:z+7}
A.bi2.prototype={
$2(d,e){var x=A.cCr(e)
this.a.b.a.m(0,d,x)
return x},
$S:z+5}
A.b_o.prototype={
$4(d,e,f,g){var x,w,v=this,u=v.a
if(u.a<v.c){x=v.b.c&&v.d.ch!=null
w=v.e
if(x){x=v.d
w.iq(x.ch.ni(d),x.ch.ng(d),x.ch.nf(d),x.ch.oy(d))}else w.iq(d,e,f,g)
w.q();++u.a}},
$S:785}
A.bbo.prototype={
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
$S:786}
A.bjy.prototype={
$1(d){var x,w,v,u,t=this.b,s=t.ct(),r=t.ct()
t=this.a
if(!t.d.y.a7(0,s))throw B.l(A.c6("Invalid Component in SOS block"))
x=t.d.y.i(0,s)
x.toString
w=D.c.S(r,4)&15
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
$S:20}
A.bLX.prototype={
$2(d,e){return(d|e<<16)>>>0},
$S:201}
A.bip.prototype={
$4(d,e,f,g){var x=this.b
return d+this.a*(e-d+x*(d+g-f-e))+x*(f-d)},
$S:787}
A.bio.prototype={
$5(d,e,f,g,h){var x=-e,w=d*d
return f+0.5*(d*(x+g)+w*(2*e-5*f+4*g-h)+w*d*(x+3*f-3*g+h))},
$S:788};(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_2u,v=a._static_1,u=a._instance_1u,t=a.installStaticTearOff
x(A.k3.prototype,"gxB",1,0,function(){return[0]},["$1","$0"],["jf","C"],2,0,0)
x(A.u9.prototype,"gxB",1,0,function(){return[0]},["$1","$0"],["jf","C"],2,0,0)
x(A.yr.prototype,"gxB",1,0,function(){return[0]},["$1","$0"],["jf","C"],2,0,0)
x(A.rj.prototype,"gxB",1,0,function(){return[0]},["$1","$0"],["jf","C"],2,0,0)
x(A.ub.prototype,"gxB",1,0,function(){return[0]},["$1","$0"],["jf","C"],2,0,0)
x(A.w6.prototype,"gxB",1,0,function(){return[0]},["$1","$0"],["jf","C"],2,0,0)
x(A.yq.prototype,"gxB",1,0,function(){return[0]},["$1","$0"],["jf","C"],2,0,0)
x(A.yp.prototype,"gxB",1,0,function(){return[0]},["$1","$0"],["jf","C"],2,0,0)
x(A.uc.prototype,"gxB",1,0,function(){return[0]},["$1","$0"],["jf","C"],2,0,0)
var s
w(s=A.as2.prototype,"gaZH","aZI",3)
w(s,"gaZK","aZL",3)
w(s,"gaZM","aZN",3)
w(s,"gaZB","aZC",3)
w(s,"gaZD","aZE",3)
v(A,"dkn","d5s",0)
v(A,"dkg","d5k",0)
v(A,"dke","d5i",0)
v(A,"dkl","d5q",0)
v(A,"dkm","d5r",0)
v(A,"dkk","d5p",0)
v(A,"dkj","d5o",0)
v(A,"dki","d5n",0)
v(A,"dkp","d5u",0)
v(A,"dko","d5t",0)
v(A,"dkh","d5l",0)
v(A,"dkf","d5j",0)
v(A,"dkA","d5F",0)
v(A,"dky","d5D",0)
v(A,"dkq","d5v",0)
v(A,"dks","d5x",0)
v(A,"dkr","d5w",0)
v(A,"dkt","d5y",0)
v(A,"dkB","d5G",0)
v(A,"dkz","d5E",0)
v(A,"dku","d5z",0)
v(A,"dkv","d5A",0)
v(A,"dkw","d5B",0)
v(A,"dkx","d5C",0)
u(A.a88.prototype,"gbhG","bhH",6)
u(A.arR.prototype,"gbzD","bzE",6)
t(A,"cx3",3,null,["$3"],["d5H"],1,0)
t(A,"dkC",3,null,["$3"],["d5I"],1,0)
t(A,"dkH",3,null,["$3"],["d5N"],1,0)
t(A,"dkI",3,null,["$3"],["d5O"],1,0)
t(A,"dkJ",3,null,["$3"],["d5P"],1,0)
t(A,"dkK",3,null,["$3"],["d5Q"],1,0)
t(A,"dkL",3,null,["$3"],["d5R"],1,0)
t(A,"dkM",3,null,["$3"],["d5S"],1,0)
t(A,"dkN",3,null,["$3"],["d5T"],1,0)
t(A,"dkO",3,null,["$3"],["d5U"],1,0)
t(A,"dkD",3,null,["$3"],["d5J"],1,0)
t(A,"dkE",3,null,["$3"],["d5K"],1,0)
t(A,"dkF",3,null,["$3"],["d5L"],1,0)
t(A,"dkG",3,null,["$3"],["d5M"],1,0)
t(A,"dkR",6,null,["$6"],["d66"],4,0)
t(A,"dkS",6,null,["$6"],["d67"],4,0)
t(A,"dkQ",6,null,["$6"],["d65"],4,0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.E,[A.a05,A.bNv,A.bNw,A.b6K,A.td,A.c0b,A.ceu,A.biD,A.bNu,A.biV,A.brI,A.hA,A.ua,A.aK2,A.aoQ,A.q4,A.k3,A.b_p,A.FR,A.b6u,A.b6t,A.ba6,A.aoR,A.bbl,A.aoS,A.aoT,A.bbn,A.a_2,A.aN4,A.a_E,A.a_F,A.aqq,A.bhP,A.arb,A.akL,A.Ht,A.bjv,A.Ca,A.bjx,A.Uw,A.as1,A.bjB,A.as2,A.a3i,A.bt3,A.wy,A.Rb,A.bu0,A.Ra,A.bu2,A.axt,A.axw,A.axC,A.a3E,A.Rf,A.axB,A.rH,A.aBW,A.bGw,A.aBZ,A.bGy,A.aC_,A.bGz,A.bl3,A.bLK,A.a87,A.bLL,A.bLQ,A.bLU,A.bLW,A.a86,A.bLV,A.bLM,A.L1,A.aDF,A.aDH,A.aDG,A.aDI,A.a88,A.aDD,A.bLR,A.aDE,A.bMK,A.a8m,A.ar9,A.a_L,A.aE6,A.a08,A.bs9,A.awH,A.arr,A.lZ,A.bub,A.aw8,A.nX,A.bIp])
w(A.cls,A.bNv)
w(A.clt,A.bNw)
x(B.e7,[A.TZ,A.ajW,A.b0E,A.nJ,A.ajH,A.mP,A.lP,A.OJ,A.GV,A.tY,A.Pe,A.bjw,A.QY,A.a3h,A.D0,A.awW,A.D1,A.uw,A.oe,A.Ks,A.kD,A.rZ,A.L2,A.Tx,A.bhM,A.aqg,A.arU,A.bcv,A.bwM])
w(A.biT,A.biV)
w(A.awa,A.brI)
x(B.cm,[A.bi7,A.bi8,A.bia])
x(B.w,[A.Nn,A.No,A.Np,A.Nq,A.Nr,A.Ns,A.Nv,A.Nw,A.Nx,A.Ny,A.Nz,A.xX,A.XZ,A.BR,A.lY,A.IG,A.IH,A.II,A.IJ,A.IK,A.IL,A.IM,A.IN,A.IO,A.IP,A.IQ,A.IR,A.fi])
x(A.xX,[A.akG,A.Nt])
w(A.akR,A.XZ)
w(A.OH,A.ua)
x(B.dq,[A.bi0,A.bi1,A.bi2,A.bLX])
x(A.k3,[A.u9,A.BM,A.yr,A.rj,A.ub,A.w6,A.yq,A.yp,A.uc,A.BO,A.BN,A.HD])
x(A.b6u,[A.ajL,A.bbm,A.bfp,A.bhO,A.as0,A.awV,A.bt4,A.bu1,A.bu6,A.bFR,A.bGx,A.bML])
x(B.bH,[A.b_o,A.bbo,A.bjy,A.bt5,A.bip,A.bio])
w(A.b7L,A.ajL)
w(A.bj2,A.bbl)
x(A.bj2,[A.arM,A.bj3,A.bj4,A.bj5,A.arO])
w(A.arN,A.a_2)
w(A.arP,A.a_F)
w(A.bhN,A.FR)
x(A.Ht,[A.Hu,A.a06])
x(A.ba6,[A.bjz,A.bt1])
w(A.arQ,A.a3i)
w(A.bj7,A.bt3)
w(A.IW,A.b6t)
x(A.wy,[A.axr,A.axs,A.axu,A.axv,A.axy,A.axz])
x(A.Rb,[A.a3B,A.axx])
x(A.axC,[A.z2,A.m8])
w(A.arR,A.a88)
w(A.arS,A.a8m)
w(A.arT,A.aE6)
x(A.lY,[A.Pm,A.Pn,A.a0c,A.a0d,A.a0e,A.a0f,A.Po,A.Pp,A.Pq,A.Pr,A.Ps,A.Pt])
x(A.bs9,[A.awn,A.awo,A.awp,A.awq,A.awr,A.aws,A.awt,A.a2S,A.uq])
w(A.bqx,A.bub)})()
B.br(b.typeUniverse,JSON.parse('{"hA":{"bt":["aX"]},"Nn":{"dD":[],"w":["aX"],"w.E":"aX"},"No":{"dD":[],"w":["aX"],"w.E":"aX"},"Np":{"dD":[],"w":["aX"],"w.E":"aX"},"Nq":{"dD":[],"w":["aX"],"w.E":"aX"},"Nr":{"dD":[],"w":["aX"],"w.E":"aX"},"Ns":{"dD":[],"w":["aX"],"w.E":"aX"},"Nv":{"dD":[],"w":["aX"],"w.E":"aX"},"Nw":{"dD":[],"w":["aX"],"w.E":"aX"},"Nx":{"dD":[],"w":["aX"],"w.E":"aX"},"Ny":{"dD":[],"w":["aX"],"w.E":"aX"},"Nz":{"dD":[],"w":["aX"],"w.E":"aX"},"xX":{"dD":[],"w":["aX"],"w.E":"aX"},"akG":{"dD":[],"w":["aX"],"w.E":"aX"},"Nt":{"dD":[],"w":["aX"],"w.E":"aX"},"XZ":{"dD":[],"w":["aX"],"w.E":"aX"},"akR":{"dD":[],"w":["aX"],"w.E":"aX"},"u9":{"k3":[]},"BM":{"k3":[]},"yr":{"k3":[]},"rj":{"k3":[]},"ub":{"k3":[]},"w6":{"k3":[]},"yq":{"k3":[]},"yp":{"k3":[]},"uc":{"k3":[]},"BO":{"k3":[]},"BN":{"k3":[]},"HD":{"k3":[]},"arN":{"a_2":[]},"arP":{"a_F":[]},"Hu":{"Ht":[]},"a06":{"Ht":[]},"arQ":{"a3i":[]},"axr":{"wy":[]},"axs":{"wy":[]},"axu":{"wy":[]},"axv":{"wy":[]},"axy":{"wy":[]},"axz":{"wy":[]},"a3B":{"Rb":[]},"axx":{"Rb":[]},"arS":{"a8m":[]},"BR":{"w":["cT"],"w.E":"cT"},"lY":{"w":["cT"]},"Pm":{"lY":[],"w":["cT"],"w.E":"cT"},"Pn":{"lY":[],"w":["cT"],"w.E":"cT"},"a0c":{"lY":[],"w":["cT"],"w.E":"cT"},"a0d":{"lY":[],"w":["cT"],"w.E":"cT"},"a0e":{"lY":[],"w":["cT"],"w.E":"cT"},"a0f":{"lY":[],"w":["cT"],"w.E":"cT"},"Po":{"lY":[],"w":["cT"],"w.E":"cT"},"Pp":{"lY":[],"w":["cT"],"w.E":"cT"},"Pq":{"lY":[],"w":["cT"],"w.E":"cT"},"Pr":{"lY":[],"w":["cT"],"w.E":"cT"},"Ps":{"lY":[],"w":["cT"],"w.E":"cT"},"Pt":{"lY":[],"w":["cT"],"w.E":"cT"},"IG":{"cT":[],"dD":[],"w":["aX"],"bt":["cT"],"w.E":"aX"},"IH":{"cT":[],"dD":[],"w":["aX"],"bt":["cT"],"w.E":"aX"},"II":{"cT":[],"dD":[],"w":["aX"],"bt":["cT"],"w.E":"aX"},"IJ":{"cT":[],"dD":[],"w":["aX"],"bt":["cT"],"w.E":"aX"},"IK":{"cT":[],"dD":[],"w":["aX"],"bt":["cT"],"w.E":"aX"},"IL":{"cT":[],"dD":[],"w":["aX"],"bt":["cT"],"w.E":"aX"},"awH":{"bt":["cT"]},"IM":{"cT":[],"dD":[],"w":["aX"],"bt":["cT"],"w.E":"aX"},"IN":{"cT":[],"dD":[],"w":["aX"],"bt":["cT"],"w.E":"aX"},"IO":{"cT":[],"dD":[],"w":["aX"],"bt":["cT"],"w.E":"aX"},"IP":{"cT":[],"dD":[],"w":["aX"],"bt":["cT"],"w.E":"aX"},"IQ":{"cT":[],"dD":[],"w":["aX"],"bt":["cT"],"w.E":"aX"},"IR":{"cT":[],"dD":[],"w":["aX"],"bt":["cT"],"w.E":"aX"},"fi":{"cT":[],"dD":[],"w":["aX"],"bt":["cT"],"w.E":"aX"},"arr":{"b9":[]},"cT":{"dD":[],"bt":["cT"],"w":["aX"]}}'))
B.lH(b.typeUniverse,JSON.parse('{"axC":1}'))
var y=(function rtii(){var x=B.z
return{G:x("dD"),n:x("aoR"),W:x("aoT"),z:x("ap9"),R:x("a_L"),x:x("ar9"),Y:x("arb"),P:x("q4"),r:x("k3"),I:x("lY"),h:x("a0K"),E:x("r<akL>"),Q:x("r<aoS>"),m:x("r<a_2>"),b:x("r<a_F>"),A:x("r<a_L>"),g:x("r<BR>"),M:x("r<A<A<A<t>>>>"),o:x("r<A<A<t>>>"),S:x("r<A<t>>"),d:x("r<a3i>"),X:x("r<Ra>"),u:x("r<wy>"),l:x("r<axw>"),j:x("r<nX>"),T:x("r<e>"),_:x("r<aC_>"),a:x("r<dI>"),q:x("r<L1>"),F:x("r<aDE>"),J:x("r<a8m>"),v:x("r<aK2>"),C:x("r<Uw>"),t:x("r<t>"),aH:x("r<Ht?>"),cB:x("r<as1?>"),cQ:x("r<A<t>?>"),w:x("r<qK?>"),e:x("r<dI?>"),y:x("r<~(lZ)>"),c:x("Ca"),bp:x("A<a0K>"),f:x("A<A<t>>"),k:x("A<nX>"),cm:x("A<a86>"),K:x("A<L1>"),H:x("A<M>"),L:x("A<t>"),c0:x("cT"),aG:x("Ra"),a2:x("axt"),cK:x("a3B"),O:x("Rb"),ab:x("a3E"),aM:x("Rf"),i:x("nX"),N:x("e"),aL:x("aBZ"),bk:x("qK"),D:x("dI"),V:x("a86"),bQ:x("aDF"),bl:x("aDG"),bt:x("aDI"),U:x("af<e>"),bc:x("aN4"),cb:x("M"),p:x("t"),a7:x("arI?"),cl:x("A<t>?"),bT:x("A<Ht?>?"),cM:x("E?"),ac:x("dI?"),ak:x("a87?"),B:x("L1?"),Z:x("aDH?"),s:x("t?")}})();(function constants(){var x=a.makeConstList
C.yp=new A.ajH(0,"direct")
C.yq=new A.ajH(1,"alpha")
C.Ft=new A.lP(0,"none")
C.yr=new A.lP(3,"bitfields")
C.ys=new A.lP(6,"alphaBitfields")
C.oB=new A.ajW(0,"littleEndian")
C.m5=new A.ajW(1,"bigEndian")
C.iY=new A.bNu()
C.acN=new A.cls()
C.Gc=new A.clt()
C.Gh=new A.b0E(4,"luminance")
C.zi=new A.akR(4294967295)
C.akv=new A.GV(0,"red")
C.akw=new A.GV(1,"green")
C.akx=new A.GV(2,"blue")
C.aky=new A.GV(3,"alpha")
C.akz=new A.GV(4,"other")
C.IB=new A.OJ(0,"uint")
C.A1=new A.OJ(1,"half")
C.A2=new A.OJ(2,"float")
C.IC=new A.tY(0,"none")
C.akV=new A.bcv(2,"both")
C.fn=new A.nJ(0,"uint1")
C.h6=new A.nJ(1,"uint2")
C.jb=new A.nJ(10,"float32")
C.kI=new A.nJ(11,"float64")
C.h7=new A.nJ(2,"uint4")
C.a8=new A.nJ(3,"uint8")
C.ch=new A.nJ(4,"uint16")
C.jc=new A.nJ(5,"uint32")
C.kJ=new A.nJ(6,"int8")
C.kK=new A.nJ(7,"int16")
C.kL=new A.nJ(8,"int32")
C.hO=new A.nJ(9,"float16")
C.al6=new A.aqg(1,"page")
C.bm=new A.aqg(2,"sequence")
C.Ad=new A.bhM(1,"deflate")
C.J2=new A.Pe(2,"cur")
C.Y=new A.mP(0,"none")
C.JH=new A.mP(1,"byte")
C.JI=new A.mP(10,"sRational")
C.JJ=new A.mP(11,"single")
C.JK=new A.mP(12,"double")
C.bD=new A.mP(2,"ascii")
C.bl=new A.mP(3,"short")
C.cO=new A.mP(4,"long")
C.e7=new A.mP(5,"rational")
C.JL=new A.mP(6,"sByte")
C.hR=new A.mP(7,"undefined")
C.JM=new A.mP(8,"sShort")
C.JN=new A.mP(9,"sLong")
C.aoi=new A.arU(0,"nearest")
C.bdB=new A.arU(1,"linear")
C.K4=new A.bjw(0,"yuv444")
C.AI=B.a(x([0,2,8]),y.t)
C.apb=B.a(x([0,4,2,1]),y.t)
C.alg=new A.Pe(0,"invalid")
C.alh=new A.Pe(1,"ico")
C.apg=B.a(x([C.alg,C.alh,C.J2]),B.z("r<Pe>"))
C.Ks=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),y.t)
C.apV=B.a(x([252,243,207,63]),y.t)
C.aTQ=new A.QY(0,"none")
C.a1O=new A.QY(1,"background")
C.a1P=new A.QY(2,"previous")
C.apX=B.a(x([C.aTQ,C.a1O,C.a1P]),B.z("r<QY>"))
C.Kv=B.a(x([292,260,226,226]),y.t)
C.Kx=B.a(x([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125]),y.t)
C.aq1=B.a(x([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0]),y.t)
C.aq8=B.a(x([2,3,7]),y.t)
C.KB=B.a(x([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68]),y.t)
C.aqf=B.a(x([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),y.t)
C.aqt=B.a(x([3,3,11]),y.t)
C.Bt=B.a(x([128,128,128,128,128,128,128,128,128,128,128]),y.t)
C.Lk=B.a(x([C.Bt,C.Bt,C.Bt]),y.S)
C.asK=B.a(x([253,136,254,255,228,219,128,128,128,128,128]),y.t)
C.av4=B.a(x([189,129,242,255,227,213,255,219,128,128,128]),y.t)
C.avb=B.a(x([106,126,227,252,214,209,255,255,128,128,128]),y.t)
C.ayI=B.a(x([C.asK,C.av4,C.avb]),y.S)
C.az2=B.a(x([1,98,248,255,236,226,255,255,128,128,128]),y.t)
C.aqQ=B.a(x([181,133,238,254,221,234,255,154,128,128,128]),y.t)
C.aqz=B.a(x([78,134,202,247,198,180,255,219,128,128,128]),y.t)
C.aAj=B.a(x([C.az2,C.aqQ,C.aqz]),y.S)
C.asA=B.a(x([1,185,249,255,243,255,128,128,128,128,128]),y.t)
C.ayR=B.a(x([184,150,247,255,236,224,128,128,128,128,128]),y.t)
C.aC7=B.a(x([77,110,216,255,236,230,128,128,128,128,128]),y.t)
C.axI=B.a(x([C.asA,C.ayR,C.aC7]),y.S)
C.axX=B.a(x([1,101,251,255,241,255,128,128,128,128,128]),y.t)
C.asI=B.a(x([170,139,241,252,236,209,255,255,128,128,128]),y.t)
C.aya=B.a(x([37,116,196,243,228,255,255,255,128,128,128]),y.t)
C.arT=B.a(x([C.axX,C.asI,C.aya]),y.S)
C.avH=B.a(x([1,204,254,255,245,255,128,128,128,128,128]),y.t)
C.aCX=B.a(x([207,160,250,255,238,128,128,128,128,128,128]),y.t)
C.aCW=B.a(x([102,103,231,255,211,171,128,128,128,128,128]),y.t)
C.atC=B.a(x([C.avH,C.aCX,C.aCW]),y.S)
C.ary=B.a(x([1,152,252,255,240,255,128,128,128,128,128]),y.t)
C.aD6=B.a(x([177,135,243,255,234,225,128,128,128,128,128]),y.t)
C.axp=B.a(x([80,129,211,255,194,224,128,128,128,128,128]),y.t)
C.ayH=B.a(x([C.ary,C.aD6,C.axp]),y.S)
C.M1=B.a(x([1,1,255,128,128,128,128,128,128,128,128]),y.t)
C.azx=B.a(x([246,1,255,128,128,128,128,128,128,128,128]),y.t)
C.awO=B.a(x([255,128,128,128,128,128,128,128,128,128,128]),y.t)
C.aDm=B.a(x([C.M1,C.azx,C.awO]),y.S)
C.ats=B.a(x([C.Lk,C.ayI,C.aAj,C.axI,C.arT,C.atC,C.ayH,C.aDm]),y.o)
C.aCf=B.a(x([198,35,237,223,193,187,162,160,145,155,62]),y.t)
C.asJ=B.a(x([131,45,198,221,172,176,220,157,252,221,1]),y.t)
C.aCe=B.a(x([68,47,146,208,149,167,221,162,255,223,128]),y.t)
C.awb=B.a(x([C.aCf,C.asJ,C.aCe]),y.S)
C.aAn=B.a(x([1,149,241,255,221,224,255,255,128,128,128]),y.t)
C.aAY=B.a(x([184,141,234,253,222,220,255,199,128,128,128]),y.t)
C.awD=B.a(x([81,99,181,242,176,190,249,202,255,255,128]),y.t)
C.aBJ=B.a(x([C.aAn,C.aAY,C.awD]),y.S)
C.aBo=B.a(x([1,129,232,253,214,197,242,196,255,255,128]),y.t)
C.aCM=B.a(x([99,121,210,250,201,198,255,202,128,128,128]),y.t)
C.ayM=B.a(x([23,91,163,242,170,187,247,210,255,255,128]),y.t)
C.awT=B.a(x([C.aBo,C.aCM,C.ayM]),y.S)
C.aua=B.a(x([1,200,246,255,234,255,128,128,128,128,128]),y.t)
C.aBl=B.a(x([109,178,241,255,231,245,255,255,128,128,128]),y.t)
C.aq0=B.a(x([44,130,201,253,205,192,255,255,128,128,128]),y.t)
C.aBT=B.a(x([C.aua,C.aBl,C.aq0]),y.S)
C.arh=B.a(x([1,132,239,251,219,209,255,165,128,128,128]),y.t)
C.api=B.a(x([94,136,225,251,218,190,255,255,128,128,128]),y.t)
C.aBr=B.a(x([22,100,174,245,186,161,255,199,128,128,128]),y.t)
C.axU=B.a(x([C.arh,C.api,C.aBr]),y.S)
C.aAX=B.a(x([1,182,249,255,232,235,128,128,128,128,128]),y.t)
C.ayv=B.a(x([124,143,241,255,227,234,128,128,128,128,128]),y.t)
C.auY=B.a(x([35,77,181,251,193,211,255,205,128,128,128]),y.t)
C.avi=B.a(x([C.aAX,C.ayv,C.auY]),y.S)
C.aDn=B.a(x([1,157,247,255,236,231,255,255,128,128,128]),y.t)
C.atp=B.a(x([121,141,235,255,225,227,255,255,128,128,128]),y.t)
C.aBm=B.a(x([45,99,188,251,195,217,255,224,128,128,128]),y.t)
C.arM=B.a(x([C.aDn,C.atp,C.aBm]),y.S)
C.apj=B.a(x([1,1,251,255,213,255,128,128,128,128,128]),y.t)
C.aqh=B.a(x([203,1,248,255,255,128,128,128,128,128,128]),y.t)
C.aB0=B.a(x([137,1,177,255,224,255,128,128,128,128,128]),y.t)
C.arA=B.a(x([C.apj,C.aqh,C.aB0]),y.S)
C.aAJ=B.a(x([C.awb,C.aBJ,C.awT,C.aBT,C.axU,C.avi,C.arM,C.arA]),y.o)
C.atK=B.a(x([253,9,248,251,207,208,255,192,128,128,128]),y.t)
C.azy=B.a(x([175,13,224,243,193,185,249,198,255,255,128]),y.t)
C.aDl=B.a(x([73,17,171,221,161,179,236,167,255,234,128]),y.t)
C.azi=B.a(x([C.atK,C.azy,C.aDl]),y.S)
C.aAx=B.a(x([1,95,247,253,212,183,255,255,128,128,128]),y.t)
C.ax7=B.a(x([239,90,244,250,211,209,255,255,128,128,128]),y.t)
C.aC6=B.a(x([155,77,195,248,188,195,255,255,128,128,128]),y.t)
C.aAW=B.a(x([C.aAx,C.ax7,C.aC6]),y.S)
C.avL=B.a(x([1,24,239,251,218,219,255,205,128,128,128]),y.t)
C.aA5=B.a(x([201,51,219,255,196,186,128,128,128,128,128]),y.t)
C.ax6=B.a(x([69,46,190,239,201,218,255,228,128,128,128]),y.t)
C.aAt=B.a(x([C.avL,C.aA5,C.ax6]),y.S)
C.av7=B.a(x([1,191,251,255,255,128,128,128,128,128,128]),y.t)
C.ay9=B.a(x([223,165,249,255,213,255,128,128,128,128,128]),y.t)
C.ayY=B.a(x([141,124,248,255,255,128,128,128,128,128,128]),y.t)
C.aBn=B.a(x([C.av7,C.ay9,C.ayY]),y.S)
C.awg=B.a(x([1,16,248,255,255,128,128,128,128,128,128]),y.t)
C.atl=B.a(x([190,36,230,255,236,255,128,128,128,128,128]),y.t)
C.asM=B.a(x([149,1,255,128,128,128,128,128,128,128,128]),y.t)
C.ari=B.a(x([C.awg,C.atl,C.asM]),y.S)
C.ayP=B.a(x([1,226,255,128,128,128,128,128,128,128,128]),y.t)
C.azo=B.a(x([247,192,255,128,128,128,128,128,128,128,128]),y.t)
C.aC4=B.a(x([240,128,255,128,128,128,128,128,128,128,128]),y.t)
C.aqm=B.a(x([C.ayP,C.azo,C.aC4]),y.S)
C.aBS=B.a(x([1,134,252,255,255,128,128,128,128,128,128]),y.t)
C.ayt=B.a(x([213,62,250,255,255,128,128,128,128,128,128]),y.t)
C.aD2=B.a(x([55,93,255,128,128,128,128,128,128,128,128]),y.t)
C.ayO=B.a(x([C.aBS,C.ayt,C.aD2]),y.S)
C.ast=B.a(x([C.azi,C.aAW,C.aAt,C.aBn,C.ari,C.aqm,C.ayO,C.Lk]),y.o)
C.ayw=B.a(x([202,24,213,235,186,191,220,160,240,175,255]),y.t)
C.asH=B.a(x([126,38,182,232,169,184,228,174,255,187,128]),y.t)
C.ark=B.a(x([61,46,138,219,151,178,240,170,255,216,128]),y.t)
C.aAP=B.a(x([C.ayw,C.asH,C.ark]),y.S)
C.axo=B.a(x([1,112,230,250,199,191,247,159,255,255,128]),y.t)
C.arL=B.a(x([166,109,228,252,211,215,255,174,128,128,128]),y.t)
C.ay1=B.a(x([39,77,162,232,172,180,245,178,255,255,128]),y.t)
C.aAL=B.a(x([C.axo,C.arL,C.ay1]),y.S)
C.axy=B.a(x([1,52,220,246,198,199,249,220,255,255,128]),y.t)
C.atz=B.a(x([124,74,191,243,183,193,250,221,255,255,128]),y.t)
C.auX=B.a(x([24,71,130,219,154,170,243,182,255,255,128]),y.t)
C.aAK=B.a(x([C.axy,C.atz,C.auX]),y.S)
C.auT=B.a(x([1,182,225,249,219,240,255,224,128,128,128]),y.t)
C.aD0=B.a(x([149,150,226,252,216,205,255,171,128,128,128]),y.t)
C.aDA=B.a(x([28,108,170,242,183,194,254,223,255,255,128]),y.t)
C.aCs=B.a(x([C.auT,C.aD0,C.aDA]),y.S)
C.aDD=B.a(x([1,81,230,252,204,203,255,192,128,128,128]),y.t)
C.aBh=B.a(x([123,102,209,247,188,196,255,233,128,128,128]),y.t)
C.aC_=B.a(x([20,95,153,243,164,173,255,203,128,128,128]),y.t)
C.aBi=B.a(x([C.aDD,C.aBh,C.aC_]),y.S)
C.awv=B.a(x([1,222,248,255,216,213,128,128,128,128,128]),y.t)
C.ayq=B.a(x([168,175,246,252,235,205,255,255,128,128,128]),y.t)
C.av1=B.a(x([47,116,215,255,211,212,255,255,128,128,128]),y.t)
C.at7=B.a(x([C.awv,C.ayq,C.av1]),y.S)
C.awn=B.a(x([1,121,236,253,212,214,255,255,128,128,128]),y.t)
C.axA=B.a(x([141,84,213,252,201,202,255,219,128,128,128]),y.t)
C.azc=B.a(x([42,80,160,240,162,185,255,205,128,128,128]),y.t)
C.avm=B.a(x([C.awn,C.axA,C.azc]),y.S)
C.aDe=B.a(x([244,1,255,128,128,128,128,128,128,128,128]),y.t)
C.ape=B.a(x([238,1,255,128,128,128,128,128,128,128,128]),y.t)
C.azr=B.a(x([C.M1,C.aDe,C.ape]),y.S)
C.apS=B.a(x([C.aAP,C.aAL,C.aAK,C.aCs,C.aBi,C.at7,C.avm,C.azr]),y.o)
C.arj=B.a(x([C.ats,C.aAJ,C.ast,C.apS]),y.M)
C.arn=B.a(x([511,1023,2047,4095]),y.t)
C.arQ=B.a(x([63,207,243,252]),y.t)
C.asm=B.a(x([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]),y.t)
C.qH=B.a(x([0,1,2,3,4,5,6,7,8,9,10,11]),y.t)
C.asP=B.a(x([8,8,4,2]),y.t)
C.apw=B.a(x([173,148,140]),y.t)
C.apx=B.a(x([176,155,140,135]),y.t)
C.apu=B.a(x([180,157,141,134,130]),y.t)
C.aqg=B.a(x([254,254,243,230,196,177,153,140,133,130,129]),y.t)
C.asR=B.a(x([C.apw,C.apx,C.apu,C.aqg]),y.S)
C.asW=B.a(x([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576]),y.t)
C.Ls=B.a(x([1,1.387039845,1.306562965,1.175875602,1,0.785694958,0.5411961,0.275899379]),B.z("r<M>"))
C.atc=B.a(x([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),y.t)
C.atu=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095]),y.t)
C.LF=B.a(x([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29]),y.t)
C.LR=B.a(x([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250]),y.t)
C.atY=B.a(x([280,256,256,256,40]),y.t)
C.rd=B.a(x([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63]),y.t)
C.M8=B.a(x([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390]),y.t)
C.AZ=B.a(x([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157]),y.t)
C.aue=B.a(x([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112]),y.t)
C.B_=B.a(x([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284]),y.t)
C.Mj=B.a(x([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119]),y.t)
C.Ml=B.a(x([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28]),y.t)
C.auI=B.a(x([C.IB,C.A1,C.A2]),B.z("r<OJ>"))
C.ru=B.a(x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),y.t)
C.avs=B.a(x([254,253,251,247,239,223,191,127]),y.t)
C.rJ=B.a(x([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8]),y.t)
C.N1=B.a(x([A.dku(),A.dkm(),A.dkB(),A.dkz(),A.dkw(),A.dkv(),A.dkx()]),y.y)
C.N3=B.a(x([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5]),y.t)
C.Ne=B.a(x([C.Y,C.JH,C.bD,C.bl,C.cO,C.e7,C.JL,C.hR,C.JM,C.JN,C.JI,C.JJ,C.JK]),B.z("r<mP>"))
C.DV=new A.kD(0,"whiteIsZero")
C.b58=new A.kD(1,"blackIsZero")
C.b5f=new A.kD(2,"rgb")
C.DX=new A.kD(3,"palette")
C.b5g=new A.kD(4,"transparencyMask")
C.a4R=new A.kD(5,"cmyk")
C.b5h=new A.kD(6,"yCbCr")
C.b5i=new A.kD(7,"reserved7")
C.b5j=new A.kD(8,"cieLab")
C.b5k=new A.kD(9,"iccLab")
C.b59=new A.kD(10,"ituLab")
C.b5a=new A.kD(11,"logL")
C.b5b=new A.kD(12,"logLuv")
C.b5c=new A.kD(13,"colorFilterArray")
C.b5d=new A.kD(14,"linearRaw")
C.b5e=new A.kD(15,"depth")
C.DW=new A.kD(16,"unknown")
C.avQ=B.a(x([C.DV,C.b58,C.b5f,C.DX,C.b5g,C.a4R,C.b5h,C.b5i,C.b5j,C.b5k,C.b59,C.b5a,C.b5b,C.b5c,C.b5d,C.b5e,C.DW]),B.z("r<kD>"))
C.Nu=B.a(x([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0]),y.t)
C.a1M=new A.a3h(0,"source")
C.a1N=new A.a3h(1,"over")
C.awj=B.a(x([C.a1M,C.a1N]),B.z("r<a3h>"))
C.b50=new A.Ks(0,"invalid")
C.a4P=new A.Ks(1,"uint")
C.b2=new A.Ks(2,"int")
C.o4=new A.Ks(3,"float")
C.awm=B.a(x([C.b50,C.a4P,C.b2,C.o4]),B.z("r<Ks>"))
C.awt=B.a(x([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15]),y.t)
C.O3=B.a(x([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9]),y.t)
C.ax4=B.a(x([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15]),y.t)
C.akA=new A.tY(1,"rle")
C.akB=new A.tY(2,"zips")
C.akC=new A.tY(3,"zip")
C.akD=new A.tY(4,"piz")
C.akE=new A.tY(5,"pxr24")
C.akF=new A.tY(6,"b44")
C.akG=new A.tY(7,"b44a")
C.ax8=B.a(x([C.IC,C.akA,C.akB,C.akC,C.akD,C.akE,C.akF,C.akG]),B.z("r<tY>"))
C.az7=B.a(x([231,120,48,89,115,113,120,152,112]),y.t)
C.apT=B.a(x([152,179,64,126,170,118,46,70,95]),y.t)
C.ax3=B.a(x([175,69,143,80,85,82,72,155,103]),y.t)
C.ar0=B.a(x([56,58,10,171,218,189,17,13,152]),y.t)
C.axZ=B.a(x([114,26,17,163,44,195,21,10,173]),y.t)
C.ayo=B.a(x([121,24,80,195,26,62,44,64,85]),y.t)
C.axT=B.a(x([144,71,10,38,171,213,144,34,26]),y.t)
C.aBu=B.a(x([170,46,55,19,136,160,33,206,71]),y.t)
C.aui=B.a(x([63,20,8,114,114,208,12,9,226]),y.t)
C.avI=B.a(x([81,40,11,96,182,84,29,16,36]),y.t)
C.apk=B.a(x([C.az7,C.apT,C.ax3,C.ar0,C.axZ,C.ayo,C.axT,C.aBu,C.aui,C.avI]),y.S)
C.atk=B.a(x([134,183,89,137,98,101,106,165,148]),y.t)
C.aB7=B.a(x([72,187,100,130,157,111,32,75,80]),y.t)
C.ayD=B.a(x([66,102,167,99,74,62,40,234,128]),y.t)
C.aql=B.a(x([41,53,9,178,241,141,26,8,107]),y.t)
C.avt=B.a(x([74,43,26,146,73,166,49,23,157]),y.t)
C.auD=B.a(x([65,38,105,160,51,52,31,115,128]),y.t)
C.auL=B.a(x([104,79,12,27,217,255,87,17,7]),y.t)
C.ax1=B.a(x([87,68,71,44,114,51,15,186,23]),y.t)
C.aAN=B.a(x([47,41,14,110,182,183,21,17,194]),y.t)
C.azw=B.a(x([66,45,25,102,197,189,23,18,22]),y.t)
C.aC0=B.a(x([C.atk,C.aB7,C.ayD,C.aql,C.avt,C.auD,C.auL,C.ax1,C.aAN,C.azw]),y.S)
C.az6=B.a(x([88,88,147,150,42,46,45,196,205]),y.t)
C.ay3=B.a(x([43,97,183,117,85,38,35,179,61]),y.t)
C.av0=B.a(x([39,53,200,87,26,21,43,232,171]),y.t)
C.awK=B.a(x([56,34,51,104,114,102,29,93,77]),y.t)
C.axM=B.a(x([39,28,85,171,58,165,90,98,64]),y.t)
C.auw=B.a(x([34,22,116,206,23,34,43,166,73]),y.t)
C.apl=B.a(x([107,54,32,26,51,1,81,43,31]),y.t)
C.aBB=B.a(x([68,25,106,22,64,171,36,225,114]),y.t)
C.atj=B.a(x([34,19,21,102,132,188,16,76,124]),y.t)
C.aCm=B.a(x([62,18,78,95,85,57,50,48,51]),y.t)
C.atG=B.a(x([C.az6,C.ay3,C.av0,C.awK,C.axM,C.auw,C.apl,C.aBB,C.atj,C.aCm]),y.S)
C.axE=B.a(x([193,101,35,159,215,111,89,46,111]),y.t)
C.asr=B.a(x([60,148,31,172,219,228,21,18,111]),y.t)
C.arf=B.a(x([112,113,77,85,179,255,38,120,114]),y.t)
C.aCi=B.a(x([40,42,1,196,245,209,10,25,109]),y.t)
C.awk=B.a(x([88,43,29,140,166,213,37,43,154]),y.t)
C.auy=B.a(x([61,63,30,155,67,45,68,1,209]),y.t)
C.ava=B.a(x([100,80,8,43,154,1,51,26,71]),y.t)
C.aqq=B.a(x([142,78,78,16,255,128,34,197,171]),y.t)
C.axj=B.a(x([41,40,5,102,211,183,4,1,221]),y.t)
C.atU=B.a(x([51,50,17,168,209,192,23,25,82]),y.t)
C.atD=B.a(x([C.axE,C.asr,C.arf,C.aCi,C.awk,C.auy,C.ava,C.aqq,C.axj,C.atU]),y.S)
C.auU=B.a(x([138,31,36,171,27,166,38,44,229]),y.t)
C.atA=B.a(x([67,87,58,169,82,115,26,59,179]),y.t)
C.aAi=B.a(x([63,59,90,180,59,166,93,73,154]),y.t)
C.aBY=B.a(x([40,40,21,116,143,209,34,39,175]),y.t)
C.aqx=B.a(x([47,15,16,183,34,223,49,45,183]),y.t)
C.asG=B.a(x([46,17,33,183,6,98,15,32,183]),y.t)
C.aDF=B.a(x([57,46,22,24,128,1,54,17,37]),y.t)
C.ave=B.a(x([65,32,73,115,28,128,23,128,205]),y.t)
C.ayC=B.a(x([40,3,9,115,51,192,18,6,223]),y.t)
C.avq=B.a(x([87,37,9,115,59,77,64,21,47]),y.t)
C.axi=B.a(x([C.auU,C.atA,C.aAi,C.aBY,C.aqx,C.asG,C.aDF,C.ave,C.ayC,C.avq]),y.S)
C.aDc=B.a(x([104,55,44,218,9,54,53,130,226]),y.t)
C.arJ=B.a(x([64,90,70,205,40,41,23,26,57]),y.t)
C.aAh=B.a(x([54,57,112,184,5,41,38,166,213]),y.t)
C.aux=B.a(x([30,34,26,133,152,116,10,32,134]),y.t)
C.azj=B.a(x([39,19,53,221,26,114,32,73,255]),y.t)
C.atS=B.a(x([31,9,65,234,2,15,1,118,73]),y.t)
C.axg=B.a(x([75,32,12,51,192,255,160,43,51]),y.t)
C.auB=B.a(x([88,31,35,67,102,85,55,186,85]),y.t)
C.avV=B.a(x([56,21,23,111,59,205,45,37,192]),y.t)
C.aw5=B.a(x([55,38,70,124,73,102,1,34,98]),y.t)
C.aDj=B.a(x([C.aDc,C.arJ,C.aAh,C.aux,C.azj,C.atS,C.axg,C.auB,C.avV,C.aw5]),y.S)
C.avT=B.a(x([125,98,42,88,104,85,117,175,82]),y.t)
C.auH=B.a(x([95,84,53,89,128,100,113,101,45]),y.t)
C.ayc=B.a(x([75,79,123,47,51,128,81,171,1]),y.t)
C.arC=B.a(x([57,17,5,71,102,57,53,41,49]),y.t)
C.aA2=B.a(x([38,33,13,121,57,73,26,1,85]),y.t)
C.aCZ=B.a(x([41,10,67,138,77,110,90,47,114]),y.t)
C.axa=B.a(x([115,21,2,10,102,255,166,23,6]),y.t)
C.atm=B.a(x([101,29,16,10,85,128,101,196,26]),y.t)
C.av6=B.a(x([57,18,10,102,102,213,34,20,43]),y.t)
C.awi=B.a(x([117,20,15,36,163,128,68,1,26]),y.t)
C.awZ=B.a(x([C.avT,C.auH,C.ayc,C.arC,C.aA2,C.aCZ,C.axa,C.atm,C.av6,C.awi]),y.S)
C.avo=B.a(x([102,61,71,37,34,53,31,243,192]),y.t)
C.aCS=B.a(x([69,60,71,38,73,119,28,222,37]),y.t)
C.avr=B.a(x([68,45,128,34,1,47,11,245,171]),y.t)
C.apt=B.a(x([62,17,19,70,146,85,55,62,70]),y.t)
C.aDx=B.a(x([37,43,37,154,100,163,85,160,1]),y.t)
C.aCx=B.a(x([63,9,92,136,28,64,32,201,85]),y.t)
C.aBc=B.a(x([75,15,9,9,64,255,184,119,16]),y.t)
C.atw=B.a(x([86,6,28,5,64,255,25,248,1]),y.t)
C.azs=B.a(x([56,8,17,132,137,255,55,116,128]),y.t)
C.arp=B.a(x([58,15,20,82,135,57,26,121,40]),y.t)
C.axR=B.a(x([C.avo,C.aCS,C.avr,C.apt,C.aDx,C.aCx,C.aBc,C.atw,C.azs,C.arp]),y.S)
C.ayh=B.a(x([164,50,31,137,154,133,25,35,218]),y.t)
C.atv=B.a(x([51,103,44,131,131,123,31,6,158]),y.t)
C.aCp=B.a(x([86,40,64,135,148,224,45,183,128]),y.t)
C.ax2=B.a(x([22,26,17,131,240,154,14,1,209]),y.t)
C.asx=B.a(x([45,16,21,91,64,222,7,1,197]),y.t)
C.aBZ=B.a(x([56,21,39,155,60,138,23,102,213]),y.t)
C.aDh=B.a(x([83,12,13,54,192,255,68,47,28]),y.t)
C.ayE=B.a(x([85,26,85,85,128,128,32,146,171]),y.t)
C.awP=B.a(x([18,11,7,63,144,171,4,4,246]),y.t)
C.atH=B.a(x([35,27,10,146,174,171,12,26,128]),y.t)
C.awx=B.a(x([C.ayh,C.atv,C.aCp,C.ax2,C.asx,C.aBZ,C.aDh,C.ayE,C.awP,C.atH]),y.S)
C.aAI=B.a(x([190,80,35,99,180,80,126,54,45]),y.t)
C.aBt=B.a(x([85,126,47,87,176,51,41,20,32]),y.t)
C.aAa=B.a(x([101,75,128,139,118,146,116,128,85]),y.t)
C.aB2=B.a(x([56,41,15,176,236,85,37,9,62]),y.t)
C.arx=B.a(x([71,30,17,119,118,255,17,18,138]),y.t)
C.axQ=B.a(x([101,38,60,138,55,70,43,26,142]),y.t)
C.awF=B.a(x([146,36,19,30,171,255,97,27,20]),y.t)
C.az4=B.a(x([138,45,61,62,219,1,81,188,64]),y.t)
C.aCj=B.a(x([32,41,20,117,151,142,20,21,163]),y.t)
C.aBv=B.a(x([112,19,12,61,195,128,48,4,24]),y.t)
C.aAs=B.a(x([C.aAI,C.aBt,C.aAa,C.aB2,C.arx,C.axQ,C.awF,C.az4,C.aCj,C.aBv]),y.S)
C.axh=B.a(x([C.apk,C.aC0,C.atG,C.atD,C.axi,C.aDj,C.awZ,C.axR,C.awx,C.aAs]),y.o)
C.wZ=new A.oe(0,"none")
C.iK=new A.oe(1,"palette")
C.a4O=new A.oe(2,"rgb")
C.b4S=new A.oe(3,"gray")
C.b4T=new A.oe(4,"reserved4")
C.b4U=new A.oe(5,"reserved5")
C.b4V=new A.oe(6,"reserved6")
C.b4W=new A.oe(7,"reserved7")
C.b4X=new A.oe(8,"reserved8")
C.iL=new A.oe(9,"paletteRle")
C.a4N=new A.oe(10,"rgbRle")
C.b4R=new A.oe(11,"grayRle")
C.axr=B.a(x([C.wZ,C.iK,C.a4O,C.b4S,C.b4T,C.b4U,C.b4V,C.b4W,C.b4X,C.iL,C.a4N,C.b4R]),B.z("r<oe>"))
C.ON=B.a(x([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250]),y.t)
C.ayb=B.a(x([A.dke(),A.dkl(),A.dkn(),A.dkg(),A.dkj(),A.dkp(),A.dki(),A.dko(),A.dkf(),A.dkh()]),y.y)
C.AR=B.a(x([8,0,8,0]),y.t)
C.arH=B.a(x([5,3,5,3]),y.t)
C.aqu=B.a(x([3,5,3,5]),y.t)
C.Ki=B.a(x([0,8,0,8]),y.t)
C.KP=B.a(x([4,4,4,4]),y.t)
C.ard=B.a(x([4,4,0,0]),y.t)
C.P3=B.a(x([C.AR,C.arH,C.aqu,C.Ki,C.AR,C.KP,C.ard,C.Ki]),y.S)
C.Pb=B.a(x([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41]),y.t)
C.ayW=B.a(x([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99]),y.t)
C.u5=B.a(x([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845]),y.t)
C.Pg=B.a(x([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127]),y.t)
C.Pi=B.a(x([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]),y.t)
C.ud=B.a(x([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567]),y.t)
C.Pv=B.a(x([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232]),y.t)
C.Qd=B.a(x([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0]),y.t)
C.aTR=new A.D0(0,"none")
C.aTS=new A.D0(1,"sub")
C.aTT=new A.D0(2,"up")
C.aTU=new A.D0(3,"average")
C.aTV=new A.D0(4,"paeth")
C.Qe=B.a(x([C.aTR,C.aTS,C.aTT,C.aTU,C.aTV]),B.z("r<D0>"))
C.hb=B.a(x([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]),y.t)
C.nb=B.a(x([0,1,3,7,15,31,63,127,255]),y.t)
C.Bu=B.a(x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),y.t)
C.eF=B.a(x([255,255,255,255,255,255,255,255,255,255,255]),y.t)
C.lg=B.a(x([C.eF,C.eF,C.eF]),y.S)
C.awJ=B.a(x([176,246,255,255,255,255,255,255,255,255,255]),y.t)
C.aD5=B.a(x([223,241,252,255,255,255,255,255,255,255,255]),y.t)
C.at1=B.a(x([249,253,253,255,255,255,255,255,255,255,255]),y.t)
C.axe=B.a(x([C.awJ,C.aD5,C.at1]),y.S)
C.avN=B.a(x([255,244,252,255,255,255,255,255,255,255,255]),y.t)
C.avk=B.a(x([234,254,254,255,255,255,255,255,255,255,255]),y.t)
C.Rv=B.a(x([253,255,255,255,255,255,255,255,255,255,255]),y.t)
C.att=B.a(x([C.avN,C.avk,C.Rv]),y.S)
C.aCo=B.a(x([255,246,254,255,255,255,255,255,255,255,255]),y.t)
C.azn=B.a(x([239,253,254,255,255,255,255,255,255,255,255]),y.t)
C.QT=B.a(x([254,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aB9=B.a(x([C.aCo,C.azn,C.QT]),y.S)
C.N7=B.a(x([255,248,254,255,255,255,255,255,255,255,255]),y.t)
C.au4=B.a(x([251,255,254,255,255,255,255,255,255,255,255]),y.t)
C.ayn=B.a(x([C.N7,C.au4,C.eF]),y.S)
C.AL=B.a(x([255,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aye=B.a(x([251,254,254,255,255,255,255,255,255,255,255]),y.t)
C.aup=B.a(x([C.AL,C.aye,C.QT]),y.S)
C.aqX=B.a(x([255,254,253,255,254,255,255,255,255,255,255]),y.t)
C.avE=B.a(x([250,255,254,255,254,255,255,255,255,255,255]),y.t)
C.up=B.a(x([254,255,255,255,255,255,255,255,255,255,255]),y.t)
C.awl=B.a(x([C.aqX,C.avE,C.up]),y.S)
C.av5=B.a(x([C.lg,C.axe,C.att,C.aB9,C.ayn,C.aup,C.awl,C.lg]),y.o)
C.apR=B.a(x([217,255,255,255,255,255,255,255,255,255,255]),y.t)
C.awB=B.a(x([225,252,241,253,255,255,254,255,255,255,255]),y.t)
C.aAd=B.a(x([234,250,241,250,253,255,253,254,255,255,255]),y.t)
C.aBw=B.a(x([C.apR,C.awB,C.aAd]),y.S)
C.BD=B.a(x([255,254,255,255,255,255,255,255,255,255,255]),y.t)
C.at8=B.a(x([223,254,254,255,255,255,255,255,255,255,255]),y.t)
C.asz=B.a(x([238,253,254,254,255,255,255,255,255,255,255]),y.t)
C.azh=B.a(x([C.BD,C.at8,C.asz]),y.S)
C.avp=B.a(x([249,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aCl=B.a(x([C.N7,C.avp,C.eF]),y.S)
C.aBD=B.a(x([255,253,255,255,255,255,255,255,255,255,255]),y.t)
C.ayd=B.a(x([247,254,255,255,255,255,255,255,255,255,255]),y.t)
C.axV=B.a(x([C.aBD,C.ayd,C.eF]),y.S)
C.asn=B.a(x([252,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aqn=B.a(x([C.AL,C.asn,C.eF]),y.S)
C.RG=B.a(x([255,254,254,255,255,255,255,255,255,255,255]),y.t)
C.asw=B.a(x([C.RG,C.Rv,C.eF]),y.S)
C.azb=B.a(x([255,254,253,255,255,255,255,255,255,255,255]),y.t)
C.Ns=B.a(x([250,255,255,255,255,255,255,255,255,255,255]),y.t)
C.asj=B.a(x([C.azb,C.Ns,C.up]),y.S)
C.ar2=B.a(x([C.aBw,C.azh,C.aCl,C.axV,C.aqn,C.asw,C.asj,C.lg]),y.o)
C.aAv=B.a(x([186,251,250,255,255,255,255,255,255,255,255]),y.t)
C.atV=B.a(x([234,251,244,254,255,255,255,255,255,255,255]),y.t)
C.aBb=B.a(x([251,251,243,253,254,255,254,255,255,255,255]),y.t)
C.aul=B.a(x([C.aAv,C.atV,C.aBb]),y.S)
C.au8=B.a(x([236,253,254,255,255,255,255,255,255,255,255]),y.t)
C.az9=B.a(x([251,253,253,254,254,255,255,255,255,255,255]),y.t)
C.awa=B.a(x([C.AL,C.au8,C.az9]),y.S)
C.aAH=B.a(x([254,254,254,255,255,255,255,255,255,255,255]),y.t)
C.au1=B.a(x([C.RG,C.aAH,C.eF]),y.S)
C.aBk=B.a(x([254,254,255,255,255,255,255,255,255,255,255]),y.t)
C.au5=B.a(x([C.BD,C.aBk,C.up]),y.S)
C.RI=B.a(x([C.eF,C.up,C.eF]),y.S)
C.ar_=B.a(x([C.aul,C.awa,C.au1,C.au5,C.RI,C.lg,C.lg,C.lg]),y.o)
C.avz=B.a(x([248,255,255,255,255,255,255,255,255,255,255]),y.t)
C.auG=B.a(x([250,254,252,254,255,255,255,255,255,255,255]),y.t)
C.atT=B.a(x([248,254,249,253,255,255,255,255,255,255,255]),y.t)
C.awf=B.a(x([C.avz,C.auG,C.atT]),y.S)
C.aqA=B.a(x([255,253,253,255,255,255,255,255,255,255,255]),y.t)
C.aBR=B.a(x([246,253,253,255,255,255,255,255,255,255,255]),y.t)
C.aun=B.a(x([252,254,251,254,254,255,255,255,255,255,255]),y.t)
C.aBQ=B.a(x([C.aqA,C.aBR,C.aun]),y.S)
C.aDo=B.a(x([255,254,252,255,255,255,255,255,255,255,255]),y.t)
C.atN=B.a(x([248,254,253,255,255,255,255,255,255,255,255]),y.t)
C.asi=B.a(x([253,255,254,254,255,255,255,255,255,255,255]),y.t)
C.ayx=B.a(x([C.aDo,C.atN,C.asi]),y.S)
C.aDf=B.a(x([255,251,254,255,255,255,255,255,255,255,255]),y.t)
C.axG=B.a(x([245,251,254,255,255,255,255,255,255,255,255]),y.t)
C.axP=B.a(x([253,253,254,255,255,255,255,255,255,255,255]),y.t)
C.asV=B.a(x([C.aDf,C.axG,C.axP]),y.S)
C.at_=B.a(x([255,251,253,255,255,255,255,255,255,255,255]),y.t)
C.avS=B.a(x([252,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aAR=B.a(x([C.at_,C.avS,C.BD]),y.S)
C.arV=B.a(x([255,252,255,255,255,255,255,255,255,255,255]),y.t)
C.aD9=B.a(x([249,255,254,255,255,255,255,255,255,255,255]),y.t)
C.auQ=B.a(x([255,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aps=B.a(x([C.arV,C.aD9,C.auQ]),y.S)
C.aDz=B.a(x([255,255,253,255,255,255,255,255,255,255,255]),y.t)
C.au3=B.a(x([C.aDz,C.Ns,C.eF]),y.S)
C.ash=B.a(x([C.awf,C.aBQ,C.ayx,C.asV,C.aAR,C.aps,C.au3,C.RI]),y.o)
C.aBp=B.a(x([C.av5,C.ar2,C.ar_,C.ash]),y.M)
C.a8D=new A.lP(1,"rle8")
C.a8I=new A.lP(2,"rle4")
C.a8J=new A.lP(4,"jpeg")
C.a8K=new A.lP(5,"png")
C.a8L=new A.lP(7,"reserved7")
C.a8M=new A.lP(8,"reserved8")
C.a8N=new A.lP(9,"reserved9")
C.a8E=new A.lP(10,"reserved10")
C.a8F=new A.lP(11,"cmyk")
C.a8G=new A.lP(12,"cmykRle8")
C.a8H=new A.lP(13,"cmykRle4")
C.QW=B.a(x([C.Ft,C.a8D,C.a8I,C.yr,C.a8J,C.a8K,C.ys,C.a8L,C.a8M,C.a8N,C.a8E,C.a8F,C.a8G,C.a8H]),B.z("r<lP>"))
C.Bv=B.a(x([0,128,192,224,240,248,252,254,255]),y.t)
C.Bw=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295]),y.t)
C.aBN=B.a(x([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),y.t)
C.aBU=B.a(x([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),y.t)
C.a5J=new A.L2(0,"predictor")
C.b89=new A.L2(1,"crossColor")
C.b8a=new A.L2(2,"subtractGreen")
C.a5K=new A.L2(3,"colorIndexing")
C.aC8=B.a(x([C.a5J,C.b89,C.b8a,C.a5K]),B.z("r<L2>"))
C.eG=B.a(x([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255]),y.t)
C.aCN=B.a(x([A.dkq(),A.dkk(),A.dkA(),A.dky(),A.dks(),A.dkr(),A.dkt()]),y.y)
C.RT=B.a(x([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396]),y.t)
C.aCV=B.a(x([null,A.dkR(),A.dkS(),A.dkQ()]),B.z("r<~(t,t,t,t,t,dI)?>"))
C.S2=B.a(x([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),y.t)
C.vD=B.a(x([0,36,72,109,145,182,218,255]),y.t)
C.fC=B.a(x([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255]),y.t)
C.aD7=B.a(x([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),y.t)
C.jq=B.a(x([0,1,1,2,4,8,1,1,2,4,8,4,8]),y.t)
C.aUe=new A.uw(0,"bitmap")
C.a26=new A.uw(1,"grayscale")
C.aUf=new A.uw(2,"indexed")
C.a27=new A.uw(3,"rgb")
C.a28=new A.uw(4,"cmyk")
C.aUg=new A.uw(5,"multiChannel")
C.aUh=new A.uw(6,"duoTone")
C.a29=new A.uw(7,"lab")
C.aD8=B.a(x([C.aUe,C.a26,C.aUf,C.a27,C.a28,C.aUg,C.aUh,C.a29]),B.z("r<uw>"))
C.aDk=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),y.t)
C.vN=B.a(x([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),y.t)
C.SB=B.a(x([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0]),y.t)
C.aqc=B.a(x([2,6,2,6]),y.t)
C.as6=B.a(x([6,2,6,2]),y.t)
C.aq5=B.a(x([2,2,6,6]),y.t)
C.apK=B.a(x([1,3,3,9]),y.t)
C.ar4=B.a(x([4,0,12,0]),y.t)
C.aqs=B.a(x([3,1,9,3]),y.t)
C.asO=B.a(x([8,8,0,0]),y.t)
C.ar6=B.a(x([4,12,0,0]),y.t)
C.apv=B.a(x([16,0,0,0]),y.t)
C.apq=B.a(x([12,4,0,0]),y.t)
C.asg=B.a(x([6,6,2,2]),y.t)
C.aqv=B.a(x([3,9,1,3]),y.t)
C.app=B.a(x([12,0,4,0]),y.t)
C.at0=B.a(x([9,3,3,1]),y.t)
C.d6=B.a(x([C.KP,C.aqc,C.AR,C.as6,C.aq5,C.apK,C.ar4,C.aqs,C.asO,C.ar6,C.apv,C.apq,C.asg,C.aqv,C.app,C.at0]),y.S)
C.lh=B.a(x([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1]),y.t)
C.aOl={ProcessingSoftware:0,SubfileType:1,OldSubfileType:2,ImageWidth:3,ImageLength:4,ImageHeight:5,BitsPerSample:6,Compression:7,PhotometricInterpretation:8,Thresholding:9,CellWidth:10,CellLength:11,FillOrder:12,DocumentName:13,ImageDescription:14,Make:15,Model:16,StripOffsets:17,Orientation:18,SamplesPerPixel:19,RowsPerStrip:20,StripByteCounts:21,MinSampleValue:22,MaxSampleValue:23,XResolution:24,YResolution:25,PlanarConfiguration:26,PageName:27,XPosition:28,YPosition:29,GrayResponseUnit:30,GrayResponseCurve:31,T4Options:32,T6Options:33,ResolutionUnit:34,PageNumber:35,ColorResponseUnit:36,TransferFunction:37,Software:38,DateTime:39,Artist:40,HostComputer:41,Predictor:42,WhitePoint:43,PrimaryChromaticities:44,ColorMap:45,HalftoneHints:46,TileWidth:47,TileLength:48,TileOffsets:49,TileByteCounts:50,BadFaxLines:51,CleanFaxData:52,ConsecutiveBadFaxLines:53,InkSet:54,InkNames:55,NumberofInks:56,DotRange:57,TargetPrinter:58,ExtraSamples:59,SampleFormat:60,SMinSampleValue:61,SMaxSampleValue:62,TransferRange:63,ClipPath:64,JPEGProc:65,JPEGInterchangeFormat:66,JPEGInterchangeFormatLength:67,YCbCrCoefficients:68,YCbCrSubSampling:69,YCbCrPositioning:70,ReferenceBlackWhite:71,ApplicationNotes:72,Rating:73,CFARepeatPatternDim:74,CFAPattern:75,BatteryLevel:76,Copyright:77,ExposureTime:78,FNumber:79,"IPTC-NAA":80,ExifOffset:81,InterColorProfile:82,ExposureProgram:83,SpectralSensitivity:84,GPSOffset:85,ISOSpeed:86,OECF:87,SensitivityType:88,RecommendedExposureIndex:89,ExifVersion:90,DateTimeOriginal:91,DateTimeDigitized:92,OffsetTime:93,OffsetTimeOriginal:94,OffsetTimeDigitized:95,ComponentsConfiguration:96,CompressedBitsPerPixel:97,ShutterSpeedValue:98,ApertureValue:99,BrightnessValue:100,ExposureBiasValue:101,MaxApertureValue:102,SubjectDistance:103,MeteringMode:104,LightSource:105,Flash:106,FocalLength:107,SubjectArea:108,MakerNote:109,UserComment:110,SubSecTime:111,SubSecTimeOriginal:112,SubSecTimeDigitized:113,XPTitle:114,XPComment:115,XPAuthor:116,XPKeywords:117,XPSubject:118,FlashPixVersion:119,ColorSpace:120,ExifImageWidth:121,ExifImageLength:122,RelatedSoundFile:123,InteroperabilityOffset:124,FlashEnergy:125,SpatialFrequencyResponse:126,FocalPlaneXResolution:127,FocalPlaneYResolution:128,FocalPlaneResolutionUnit:129,SubjectLocation:130,ExposureIndex:131,SensingMethod:132,FileSource:133,SceneType:134,CVAPattern:135,CustomRendered:136,ExposureMode:137,WhiteBalance:138,DigitalZoomRatio:139,FocalLengthIn35mmFilm:140,SceneCaptureType:141,GainControl:142,Contrast:143,Saturation:144,Sharpness:145,DeviceSettingDescription:146,SubjectDistanceRange:147,ImageUniqueID:148,CameraOwnerName:149,BodySerialNumber:150,LensSpecification:151,LensMake:152,LensModel:153,LensSerialNumber:154,Gamma:155,PrintIM:156,Padding:157,OffsetSchema:158,OwnerName:159,SerialNumber:160,InteropIndex:161,InteropVersion:162,RelatedImageFileFormat:163,RelatedImageWidth:164,RelatedImageLength:165,GPSVersionID:166,GPSLatitudeRef:167,GPSLatitude:168,GPSLongitudeRef:169,GPSLongitude:170,GPSAltitudeRef:171,GPSAltitude:172,GPSTimeStamp:173,GPSSatellites:174,GPSStatus:175,GPSMeasureMode:176,GPSDOP:177,GPSSpeedRef:178,GPSSpeed:179,GPSTrackRef:180,GPSTrack:181,GPSImgDirectionRef:182,GPSImgDirection:183,GPSMapDatum:184,GPSDestLatitudeRef:185,GPSDestLatitude:186,GPSDestLongitudeRef:187,GPSDestLongitude:188,GPSDestBearingRef:189,GPSDestBearing:190,GPSDestDistanceRef:191,GPSDestDistance:192,GPSProcessingMethod:193,GPSAreaInformation:194,GPSDate:195,GPSDifferential:196}
C.XE=new B.H(C.aOl,[11,254,255,256,257,257,258,259,262,263,264,265,266,269,270,271,272,273,274,277,278,279,280,281,282,283,284,285,286,287,290,291,292,293,296,297,300,301,305,306,315,316,317,318,319,320,321,322,323,324,325,326,327,328,332,333,334,336,337,338,339,340,341,342,343,512,513,514,529,530,531,532,700,18246,33421,33422,33423,33432,33434,33437,33723,34665,34675,34850,34852,34853,34855,34856,34864,34866,36864,36867,36868,36880,36881,36882,37121,37122,37377,37378,37379,37380,37381,37382,37383,37384,37385,37386,37396,37500,37510,37520,37521,37522,40091,40092,40093,40094,40095,40960,40961,40962,40963,40964,40965,41483,41484,41486,41487,41488,41492,41493,41495,41728,41729,41730,41985,41986,41987,41988,41989,41990,41991,41992,41993,41994,41995,41996,42016,42032,42033,42034,42035,42036,42037,42240,50341,59932,59933,65e3,65001,1,2,4096,4097,4098,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],B.z("H<e,t>"))
C.BX=new B.cZ([34665,"exif",40965,"interop",34853,"gps"],B.z("cZ<t,e>"))
C.Y6=new B.cZ([C.fn,1,C.h6,3,C.h7,15,C.a8,255,C.ch,65535,C.jc,4294967295,C.kJ,127,C.kK,32767,C.kL,2147483647,C.hO,1,C.jb,1,C.kI,1],B.z("cZ<nJ,t>"))
C.aTW=new A.awW(0,"none")
C.aTX=new A.awW(4,"paeth")
C.nA=new A.D1(0,"invalid")
C.a1Q=new A.D1(1,"pbm")
C.a1R=new A.D1(2,"pgm2")
C.Cl=new A.D1(3,"pgm5")
C.a1S=new A.D1(4,"ppm3")
C.Cm=new A.D1(5,"ppm6")
C.aW_=new A.bwM(0,"origin")
C.DU=new A.rZ(0,"bilevel")
C.b51=new A.rZ(1,"gray4bit")
C.b52=new A.rZ(2,"gray")
C.b53=new A.rZ(3,"grayAlpha")
C.b54=new A.rZ(4,"palette")
C.a4Q=new A.rZ(5,"rgb")
C.b55=new A.rZ(6,"rgba")
C.b56=new A.rZ(7,"yCbCrSub")
C.o5=new A.rZ(8,"generic")
C.b57=new A.rZ(9,"invalid")
C.of=new A.Tx(0,"undefined")
C.Er=new A.Tx(1,"lossy")
C.xc=new A.Tx(2,"lossless")
C.b8A=new A.Tx(3,"animated")
C.xk=new A.TZ(0,"none")
C.bb_=new A.TZ(1,"partial")
C.bb0=new A.TZ(2,"full")
C.oh=new A.TZ(3,"finish")})();(function staticFields(){$.vI=B.bK("_config")
$.cyQ=!0
$.cvH=null
$.cHM=!1
$.cHN=B.a([A.cx3(),A.dkC(),A.dkH(),A.dkI(),A.dkJ(),A.dkK(),A.dkL(),A.dkM(),A.dkN(),A.dkO(),A.dkD(),A.dkE(),A.dkF(),A.dkG(),A.cx3(),A.cx3()],B.z("r<t(qK,t,t)>"))
$.hR=null
$.cBA=B.bK("_eLut")})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazy
x($,"dr1","cPQ",()=>A.cvl(C.rJ,C.Ks,257,286,15))
x($,"dr0","cPP",()=>A.cvl(C.N3,C.ru,0,30,15))
x($,"dr_","cPO",()=>A.cvl(null,C.aqf,0,19,7))
x($,"dlS","aWb",()=>$.hw().gmV(0))
x($,"dud","cqj",()=>{var v=null,u="ISOSpeed"
return B.x([11,A.aL("ProcessingSoftware",C.bD,v),254,A.aL("SubfileType",C.cO,1),255,A.aL("OldSubfileType",C.cO,1),256,A.aL("ImageWidth",C.cO,1),257,A.aL("ImageLength",C.cO,1),258,A.aL("BitsPerSample",C.bl,1),259,A.aL("Compression",C.bl,1),262,A.aL("PhotometricInterpretation",C.bl,1),263,A.aL("Thresholding",C.bl,1),264,A.aL("CellWidth",C.bl,1),265,A.aL("CellLength",C.bl,1),266,A.aL("FillOrder",C.bl,1),269,A.aL("DocumentName",C.bD,v),270,A.aL("ImageDescription",C.bD,v),271,A.aL("Make",C.bD,v),272,A.aL("Model",C.bD,v),273,A.aL("StripOffsets",C.cO,v),274,A.aL("Orientation",C.bl,1),277,A.aL("SamplesPerPixel",C.bl,1),278,A.aL("RowsPerStrip",C.cO,1),279,A.aL("StripByteCounts",C.cO,1),280,A.aL("MinSampleValue",C.bl,1),281,A.aL("MaxSampleValue",C.bl,1),282,A.aL("XResolution",C.e7,1),283,A.aL("YResolution",C.e7,1),284,A.aL("PlanarConfiguration",C.bl,1),285,A.aL("PageName",C.bD,v),286,A.aL("XPosition",C.e7,1),287,A.aL("YPosition",C.e7,1),290,A.aL("GrayResponseUnit",C.bl,1),291,A.aL("GrayResponseCurve",C.Y,v),292,A.aL("T4Options",C.Y,v),293,A.aL("T6Options",C.Y,v),296,A.aL("ResolutionUnit",C.bl,1),297,A.aL("PageNumber",C.bl,2),300,A.aL("ColorResponseUnit",C.Y,v),301,A.aL("TransferFunction",C.bl,768),305,A.aL("Software",C.bD,v),306,A.aL("DateTime",C.bD,v),315,A.aL("Artist",C.bD,v),316,A.aL("HostComputer",C.bD,v),317,A.aL("Predictor",C.bl,1),318,A.aL("WhitePoint",C.e7,2),319,A.aL("PrimaryChromaticities",C.e7,6),320,A.aL("ColorMap",C.bl,v),321,A.aL("HalftoneHints",C.bl,2),322,A.aL("TileWidth",C.cO,1),323,A.aL("TileLength",C.cO,1),324,A.aL("TileOffsets",C.cO,v),325,A.aL("TileByteCounts",C.Y,v),326,A.aL("BadFaxLines",C.Y,v),327,A.aL("CleanFaxData",C.Y,v),328,A.aL("ConsecutiveBadFaxLines",C.Y,v),332,A.aL("InkSet",C.Y,v),333,A.aL("InkNames",C.Y,v),334,A.aL("NumberofInks",C.Y,v),336,A.aL("DotRange",C.Y,v),337,A.aL("TargetPrinter",C.bD,v),338,A.aL("ExtraSamples",C.Y,v),339,A.aL("SampleFormat",C.bl,1),340,A.aL("SMinSampleValue",C.Y,v),341,A.aL("SMaxSampleValue",C.Y,v),342,A.aL("TransferRange",C.Y,v),343,A.aL("ClipPath",C.Y,v),512,A.aL("JPEGProc",C.Y,v),513,A.aL("JPEGInterchangeFormat",C.Y,v),514,A.aL("JPEGInterchangeFormatLength",C.Y,v),529,A.aL("YCbCrCoefficients",C.e7,3),530,A.aL("YCbCrSubSampling",C.bl,1),531,A.aL("YCbCrPositioning",C.bl,1),532,A.aL("ReferenceBlackWhite",C.e7,6),700,A.aL("ApplicationNotes",C.bl,1),18246,A.aL("Rating",C.bl,1),33421,A.aL("CFARepeatPatternDim",C.Y,v),33422,A.aL("CFAPattern",C.Y,v),33423,A.aL("BatteryLevel",C.Y,v),33432,A.aL("Copyright",C.bD,v),33434,A.aL("ExposureTime",C.e7,1),33437,A.aL("FNumber",C.e7,v),33723,A.aL("IPTC-NAA",C.cO,1),34665,A.aL("ExifOffset",C.Y,v),34675,A.aL("InterColorProfile",C.Y,v),34850,A.aL("ExposureProgram",C.bl,1),34852,A.aL("SpectralSensitivity",C.bD,v),34853,A.aL("GPSOffset",C.Y,v),34855,A.aL(u,C.cO,1),34856,A.aL("OECF",C.Y,v),34864,A.aL("SensitivityType",C.bl,1),34866,A.aL("RecommendedExposureIndex",C.cO,1),34867,A.aL(u,C.cO,1),36864,A.aL("ExifVersion",C.hR,v),36867,A.aL("DateTimeOriginal",C.bD,v),36868,A.aL("DateTimeDigitized",C.bD,v),36880,A.aL("OffsetTime",C.bD,v),36881,A.aL("OffsetTimeOriginal",C.bD,v),36882,A.aL("OffsetTimeDigitized",C.bD,v),37121,A.aL("ComponentsConfiguration",C.hR,v),37122,A.aL("CompressedBitsPerPixel",C.Y,v),37377,A.aL("ShutterSpeedValue",C.Y,v),37378,A.aL("ApertureValue",C.Y,v),37379,A.aL("BrightnessValue",C.Y,v),37380,A.aL("ExposureBiasValue",C.Y,v),37381,A.aL("MaxApertureValue",C.Y,v),37382,A.aL("SubjectDistance",C.Y,v),37383,A.aL("MeteringMode",C.Y,v),37384,A.aL("LightSource",C.Y,v),37385,A.aL("Flash",C.Y,v),37386,A.aL("FocalLength",C.Y,v),37396,A.aL("SubjectArea",C.Y,v),37500,A.aL("MakerNote",C.hR,v),37510,A.aL("UserComment",C.hR,v),37520,A.aL("SubSecTime",C.Y,v),37521,A.aL("SubSecTimeOriginal",C.Y,v),37522,A.aL("SubSecTimeDigitized",C.Y,v),40091,A.aL("XPTitle",C.Y,v),40092,A.aL("XPComment",C.Y,v),40093,A.aL("XPAuthor",C.Y,v),40094,A.aL("XPKeywords",C.Y,v),40095,A.aL("XPSubject",C.Y,v),40960,A.aL("FlashPixVersion",C.Y,v),40961,A.aL("ColorSpace",C.bl,1),40962,A.aL("ExifImageWidth",C.bl,1),40963,A.aL("ExifImageLength",C.bl,1),40964,A.aL("RelatedSoundFile",C.Y,v),40965,A.aL("InteroperabilityOffset",C.Y,v),41483,A.aL("FlashEnergy",C.Y,v),41484,A.aL("SpatialFrequencyResponse",C.Y,v),41486,A.aL("FocalPlaneXResolution",C.Y,v),41487,A.aL("FocalPlaneYResolution",C.Y,v),41488,A.aL("FocalPlaneResolutionUnit",C.Y,v),41492,A.aL("SubjectLocation",C.Y,v),41493,A.aL("ExposureIndex",C.Y,v),41495,A.aL("SensingMethod",C.Y,v),41728,A.aL("FileSource",C.Y,v),41729,A.aL("SceneType",C.Y,v),41730,A.aL("CVAPattern",C.Y,v),41985,A.aL("CustomRendered",C.Y,v),41986,A.aL("ExposureMode",C.Y,v),41987,A.aL("WhiteBalance",C.Y,v),41988,A.aL("DigitalZoomRatio",C.Y,v),41989,A.aL("FocalLengthIn35mmFilm",C.Y,v),41990,A.aL("SceneCaptureType",C.Y,v),41991,A.aL("GainControl",C.Y,v),41992,A.aL("Contrast",C.Y,v),41993,A.aL("Saturation",C.Y,v),41994,A.aL("Sharpness",C.Y,v),41995,A.aL("DeviceSettingDescription",C.Y,v),41996,A.aL("SubjectDistanceRange",C.Y,v),42016,A.aL("ImageUniqueID",C.Y,v),42032,A.aL("CameraOwnerName",C.bD,v),42033,A.aL("BodySerialNumber",C.bD,v),42034,A.aL("LensSpecification",C.Y,v),42035,A.aL("LensMake",C.bD,v),42036,A.aL("LensModel",C.bD,v),42037,A.aL("LensSerialNumber",C.bD,v),42240,A.aL("Gamma",C.e7,1),50341,A.aL("PrintIM",C.Y,v),59932,A.aL("Padding",C.Y,v),59933,A.aL("OffsetSchema",C.Y,v),65e3,A.aL("OwnerName",C.bD,v),65001,A.aL("SerialNumber",C.bD,v)],y.p,B.z("aoQ"))})
w($,"dq8","aWm",()=>B.CC(511))
w($,"dq9","cq8",()=>B.CC(511))
w($,"dqb","cq9",()=>A.cDV(2041))
w($,"dqc","aWn",()=>A.cDV(225))
w($,"dqa","pO",()=>B.CC(766))
x($,"doo","cOm",()=>A.cCC(0,0,0))
x($,"drv","nq",()=>B.CC(1))
x($,"drw","ox",()=>A.cYZ(D.B.gaj($.nq()),0,null))
x($,"dro","np",()=>E.d_B(1))
x($,"drp","ow",()=>J.cSc(D.dQ.gaj($.np()),0,null))
x($,"drq","hx",()=>B.d_E(1))
x($,"drs","kJ",()=>J.aWA(D.br.gaj($.hx()),0,null))
x($,"drr","Fz",()=>A.cXg(D.br.gaj($.hx())))
x($,"drm","aWp",()=>B.ct0(1))
x($,"drn","cqb",()=>A.cHv(D.co.gaj($.aWp()),0))
x($,"drk","cxU",()=>B.bqb(1))
x($,"drl","cQ6",()=>A.cHv(D.f3.gaj($.cxU()),0))
x($,"drt","cxV",()=>A.d54(1))
x($,"dru","cQ7",()=>{var v=$.cxV()
return A.cXh(v.gaj(v))})})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_209",e:"endPart",h:b})})($__dart_deferred_initializers__,"1UY0Sy5+25ZfOXqySSFWhmF7JOs=");