((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_209",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,A={
csK(d){var x=new A.a05()
x.a2A(d)
return x},
a05:function a05(){this.a=$
this.b=0
this.c=2147483647},
bNM:function bNM(){},
clP:function clP(){},
bNN:function bNN(){},
clQ:function clQ(){},
cVY(d,e,f,g){var x=A.cvx(),w=A.cvx(),v=A.cvx(),u=new Uint16Array(16),t=new Uint32Array(573),s=new Uint8Array(573)
x=new A.b6T(d,f,x,w,v,u,t,s)
x.b_w(e,g)
x.b_v(C.pQ)
return x},
cAR(d,e,f,g){var x=d[e*2],w=d[f*2]
if(x>=w)x=x===w&&g[e]<=g[f]
else x=!0
return x},
cvx(){return new A.c0t()},
d7V(d,e,f){var x,w,v,u,t,s,r,q=new Uint16Array(16)
for(x=0,w=1;w<=15;++w){x=x+f[w-1]<<1>>>0
q[w]=x}for(v=d.$flags|0,u=0;u<=e;++u){t=u*2
s=d[t+1]
if(s===0)continue
r=q[s]
q[s]=r+1
r=A.d7W(r,s)
v&2&&B.E(d)
d[t]=r}},
d7W(d,e){var x,w=0
do{x=A.pH(d,1)
w=(w|d&1)<<1>>>0
if(--e,e>0){d=x
continue}else break}while(!0)
return A.pH(w,1)},
cIN(d){return d<256?C.Ot[d]:C.Ot[256+A.pH(d,7)]},
cvJ(d,e,f,g,h){return new A.ceP(d,e,f,g,h)},
pH(d,e){if(d>=0)return D.c.o3(d,e)
else return D.c.o3(d,e)+D.c.eo(2,(~e>>>0)+65536&65535)},
TY:function TY(d,e){this.a=d
this.b=e},
b6T:function b6T(d,e,f,g,h,i,j,k){var _=this
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
_.E=_.by=_.bo=_.bb=_.aK=_.bQ=_.c1=_.y2=_.y1=_.xr=$},
te:function te(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c0t:function c0t(){this.c=this.b=this.a=$},
ceP:function ceP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
biR:function biR(d,e,f,g){var _=this
_.a=d
_.b=null
_.c=e
_.e=_.d=0
_.r=f
_.w=g},
bNL:function bNL(){},
ajZ:function ajZ(d,e){this.a=d
this.b=e},
bj7(d,e,f,g){var x,w,v=new A.bj6(e)
if(g==null)g=0
if(f==null)f=d.length-g
x=d.length
if(g+f>x)f=x-g
w=y.D.b(d)?d:new Uint8Array(B.bZ(d))
x=J.df(D.D.gaj(w),w.byteOffset+g,f)
v.b=x
v.d=x.length
return v},
bj6:function bj6(d){var _=this
_.b=null
_.c=0
_.d=$
_.a=d},
bj8:function bj8(){},
cEJ(d,e){var x=e==null?32768:e
return new A.awd(new Uint8Array(x),d)},
awd:function awd(d,e){this.b=0
this.c=d
this.a=e},
brW:function brW(){},
a0b(d,e,f){var x=0,w=B.m(y.D),v
var $async$a0b=B.i(function(g,h){if(g===1)return B.j(h,w)
while(true)switch(x){case 0:x=3
return B.d(A.HF(d,e,"jpg",new A.bil(d,e,f),f),$async$a0b)
case 3:v=h
x=1
break
case 1:return B.k(v,w)}})
return B.l($async$a0b,w)},
arq(d,e){var x=0,w=B.m(y.D),v
var $async$arq=B.i(function(f,g){if(f===1)return B.j(g,w)
while(true)switch(x){case 0:x=3
return B.d(A.HF(d,e,"png",new A.bim(d,e),null),$async$arq)
case 3:v=g
x=1
break
case 1:return B.k(v,w)}})
return B.l($async$arq,w)},
bin(d,e,f){var x=0,w=B.m(y.D),v
var $async$bin=B.i(function(g,h){if(g===1)return B.j(h,w)
while(true)switch(x){case 0:x=3
return B.d(A.HF(d,e,"webp",new A.bio(d,e,f),f),$async$bin)
case 3:v=h
x=1
break
case 1:return B.k(v,w)}})
return B.l($async$bin,w)},
HF(d,e,f,g,h){return A.cZ4(d,e,f,g,h)},
cZ4(d,e,f,g,h){var x=0,w=B.m(y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j
var $async$HF=B.i(function(i,a0){if(i===1){t.push(a0)
x=u}while(true)switch(x){case 0:if(!$.cze){v=g.$0()
x=1
break}m=$.hx().b
m===$&&B.b()
r=m
q="uploads/"+Date.now()+"."+f
u=4
m=r.as
m===$&&B.b()
x=7
return B.d(m.bC("images-temp").QS(q,d),$async$HF)
case 7:p=a0
if(J.bB(p)===0){m=g.$0()
v=m
x=1
break}u=9
m=r.as
m===$&&B.b()
x=12
return B.d(m.bC("images-temp").Y8(0,q,new A.bIE(e,h,C.btp)),$async$HF)
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
if(m instanceof B.K8){n=m
if(n.c==="403")$.cze=!1
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
return B.d(m.bC("images-temp").K(0,B.a([q],y.T)),$async$HF)
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
case 6:case 1:return B.k(v,w)
case 2:return B.j(t.at(-1),w)}})
return B.l($async$HF,w)},
csQ(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n=null,m=A.cLP(d)
if(m==null)throw B.n(B.cM("Failed to decode "+f+" image"))
x=A.dfg(m,e)
if(f==="jpg"){w=g==null?85:g
v=new Uint8Array(64)
u=new Uint8Array(64)
t=new Float32Array(64)
s=new Float32Array(64)
r=B.bP(65535,n,!1,y.cl)
q=y.s
p=B.bP(65535,n,!1,q)
o=B.bP(64,n,!1,q)
q=B.bP(64,n,!1,q)
v=new A.bjN(v,u,t,s,r,p,o,q,new Int32Array(2048))
v.e=v.Tb(C.Vo,C.tf)
v.f=v.Tb(C.Qh,C.tf)
v.r=v.Tb(C.Nm,C.OF)
v.w=v.Tb(C.P6,C.Rz)
v.baK()
v.baW()
v.aLE(w)
return new Uint8Array(B.bZ(v.bz1(x,C.MU)))}else if(f==="png")return new Uint8Array(B.bZ(new A.btf(C.brm,6).bz2(x,!1)))
else if(f==="webp")return d
else throw B.n(B.cM("Unsupported image format: "+f))},
cZ3(d){var x=d.length
if(x>=2&&d[0]===255&&d[1]===216)return"jpg"
if(x>=8&&d[0]===137&&d[1]===80&&d[2]===78&&d[3]===71)return"png"
if(x>=12&&d[0]===82&&d[1]===73&&d[2]===70&&d[3]===70&&d[8]===87&&d[9]===69&&d[10]===66&&d[11]===80)return"webp"
return"jpg"},
HE(d,e,f){var x=0,w=B.m(y.D),v,u
var $async$HE=B.i(function(g,h){if(g===1)return B.j(h,w)
while(true)switch(x){case 0:u=A.cZ3(d)
x=u==="jpg"?3:5
break
case 3:x=6
return B.d(A.a0b(d,e,f),$async$HE)
case 6:v=h
x=1
break
x=4
break
case 5:x=u==="png"?7:9
break
case 7:x=10
return B.d(A.arq(d,e),$async$HE)
case 10:v=h
x=1
break
x=8
break
case 9:x=u==="webp"?11:13
break
case 11:x=14
return B.d(A.bin(d,e,f),$async$HE)
case 14:v=h
x=1
break
x=12
break
case 13:x=15
return B.d(A.a0b(d,e,f),$async$HE)
case 15:v=h
x=1
break
case 12:case 8:case 4:case 1:return B.k(v,w)}})
return B.l($async$HE,w)},
bil:function bil(d,e,f){this.a=d
this.b=e
this.c=f},
bim:function bim(d,e){this.a=d
this.b=e},
bio:function bio(d,e,f){this.a=d
this.b=e
this.c=f},
b0F:function b0F(d,e){this.a=d
this.b=e},
hC:function hC(d){this.a=-1
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
cUG(d,e,f,g){var x=new A.Nt(new Uint8Array(4))
x.aTK(d,e,f,g)
return x},
y_:function y_(d){this.a=d},
akJ:function akJ(d){this.a=d},
Nt:function Nt(d){this.a=d},
XY:function XY(d){this.a=d},
akU:function akU(d){this.a=d},
aVJ(d,e,f){var x
if(e===f)return d
switch(e.a){case 0:if(d===0)x=0
else{x=C.a3l.i(0,f)
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
case 1:return D.c.S(B.be(d),1)
case 2:return d
case 3:return d*17
case 4:return d*4369
case 5:return d*286331153
case 6:return d*8
case 7:return d*2184
case 8:return d*143165576
case 9:case 10:case 11:return d/3}break
case 3:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.S(B.be(d),6)
case 2:return D.c.S(B.be(d),4)
case 3:return d
case 4:return d*257
case 5:return d*16843009
case 6:return D.c.S(B.be(d),1)
case 7:return d*128
case 8:return d*8421504
case 9:case 10:case 11:return d/255}break
case 4:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.S(B.be(d),14)
case 2:return D.c.S(B.be(d),12)
case 3:return D.c.S(B.be(d),8)
case 4:return d
case 5:return B.be(d)<<8>>>0
case 6:return D.c.S(B.be(d),9)
case 7:return D.c.S(B.be(d),1)
case 8:return d*524296
case 9:case 10:case 11:return d/65535}break
case 5:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.S(B.be(d),30)
case 2:return D.c.S(B.be(d),28)
case 3:return D.c.S(B.be(d),24)
case 4:return D.c.S(B.be(d),16)
case 5:return d
case 6:return D.c.S(B.be(d),25)
case 7:return D.c.S(B.be(d),17)
case 8:return D.c.S(B.be(d),1)
case 9:case 10:case 11:return d/4294967295}break
case 6:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.S(B.be(d),5)
case 2:return d<=0?0:D.c.S(B.be(d),3)
case 3:return d<=0?0:B.be(d)<<1>>>0
case 4:return d<=0?0:B.be(d)*516
case 5:return d<=0?0:B.be(d)*33818640
case 6:return d
case 7:return d*258
case 8:return d*16909320
case 9:case 10:case 11:return d/127}break
case 7:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.S(B.be(d),15)
case 2:return d<=0?0:D.c.S(B.be(d),11)
case 3:return d<=0?0:D.c.S(B.be(d),7)
case 4:return d<=0?0:B.be(d)<<1>>>0
case 5:return d<=0?0:B.be(d)*131076
case 6:return D.c.S(B.be(d),8)
case 7:return d
case 8:return B.be(d)*65538
case 9:case 10:case 11:return d/32767}break
case 8:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.S(B.be(d),29)
case 2:return d<=0?0:D.c.S(B.be(d),27)
case 3:return d<=0?0:D.c.S(B.be(d),23)
case 4:return d<=0?0:D.c.S(B.be(d),16)
case 5:return d<=0?0:B.be(d)<<1>>>0
case 6:return D.c.S(B.be(d),24)
case 7:return D.c.S(B.be(d),16)
case 8:return d
case 9:case 10:case 11:return d/2147483647}break
case 9:case 10:case 11:switch(f.a){case 0:return d===0?0:1
case 1:return D.d.C(D.d.b3(d,0,1)*3)
case 2:return D.d.C(D.d.b3(d,0,1)*15)
case 3:return D.d.C(D.d.b3(d,0,1)*255)
case 4:return D.d.C(D.d.b3(d,0,1)*65535)
case 5:return D.d.C(D.d.b3(d,0,1)*4294967295)
case 6:return D.d.C(d<0?D.d.b3(d,-1,1)*128:D.d.b3(d,-1,1)*127)
case 7:return D.d.C(d<0?D.d.b3(d,-1,1)*32768:D.d.b3(d,-1,1)*32767)
case 8:return D.d.C(d<0?D.d.b3(d,-1,1)*2147483648:D.d.b3(d,-1,1)*2147483647)
case 9:case 10:case 11:return d}break}},
nK:function nK(d,e){this.a=d
this.b=e},
ajK:function ajK(d,e){this.a=d
this.b=e},
ZX(d){var x=new A.OI(B.K(y.N,y.P))
x.aTX(d)
return x},
cBQ(d){var x=new A.OI(B.K(y.N,y.P))
x.vo(0,d)
return x},
OI:function OI(d){this.a=d},
aK2:function aK2(d,e){this.a=d
this.b=e},
aM(d,e,f){return new A.aoR(d,e)},
aoR:function aoR(d,e){this.a=d
this.b=e},
uc:function uc(d){this.a=d},
bie:function bie(d){this.a=d},
cCS(d){var x=new A.q5(B.K(y.p,y.r),new A.uc(B.K(y.N,y.P)))
x.a9A(d)
return x},
q5:function q5(d,e){this.a=d
this.b=e},
bif:function bif(d){this.a=d},
big:function big(d){this.a=d},
cZ1(d){var x=new Uint16Array(1)
x[0]=d
return new A.yv(x)},
cD_(d,e){var x=new A.yv(new Uint16Array(e))
x.aU1(d,e)
return x},
cZ0(d){var x=new Uint32Array(1)
x[0]=d
return new A.rk(x)},
cCV(d,e){var x=new A.rk(new Uint32Array(e))
x.aTZ(d,e)
return x},
cCW(d,e){var x,w=J.kw(e,y.i)
for(x=0;x<e;++x)w[x]=new A.nY(d.a3(),d.a3())
return new A.ud(w)},
cCZ(d,e){var x=new A.yu(new Int16Array(e))
x.aU0(d,e)
return x},
cCX(d,e){var x=new A.yt(new Int32Array(e))
x.aU_(d,e)
return x},
cCY(d,e){var x,w,v,u,t=J.kw(e,y.i)
for(x=0;x<e;++x){w=d.a3()
v=$.hy()
v.$flags&2&&B.E(v)
v[0]=w
w=$.kL()
u=w[0]
v[0]=d.a3()
t[x]=new A.nY(u,w[0])}return new A.ue(t)},
cD0(d){var x=new Float32Array(1)
x[0]=d
return new A.BP(x)},
cD1(d,e){var x=new A.BP(new Float32Array(e))
x.aU2(d,e)
return x},
cCT(d){var x=new Float64Array(1)
x[0]=d
return new A.BO(x)},
cCU(d,e){var x=new A.BO(new Float64Array(e))
x.aTY(d,e)
return x},
mR:function mR(d,e){this.a=d
this.b=e},
k5:function k5(){},
ub:function ub(d){this.a=d},
BN:function BN(d){this.a=d},
yv:function yv(d){this.a=d},
rk:function rk(d){this.a=d},
ud:function ud(d){this.a=d},
wb:function wb(d){this.a=d},
yu:function yu(d){this.a=d},
yt:function yt(d){this.a=d},
ue:function ue(d){this.a=d},
BP:function BP(d){this.a=d},
BO:function BO(d){this.a=d},
HC:function HC(d){this.a=d},
czC(d){var x,w,v=new A.b_q()
if(!A.crg(d))B.a7(A.c8("Not a bitmap file."))
d.d+=2
x=d.a3()
w=$.hy()
w.$flags&2&&B.E(w)
w[0]=x
x=$.kL()
d.d+=4
w[0]=d.a3()
v.b=x[0]
return v},
crg(d){if(d.c-d.d<2)return!1
return A.cb(d,null,0).am()===19778},
cTZ(d,e){var x,w,v,u,t=e==null?A.czC(d):e,s=d.d,r=d.a3(),q=d.a3(),p=$.hy()
p.$flags&2&&B.E(p)
p[0]=q
q=$.kL()
x=q[0]
p[0]=d.a3()
q=q[0]
w=d.am()
v=d.am()
u=C.TJ[d.a3()]
d.a3()
p[0]=d.a3()
p[0]=d.a3()
p=d.a3()
d.a3()
s=new A.FR(t,x,q,r,w,v,u,p,s)
s.aiy(d,e)
return s},
lU:function lU(d,e){this.a=d
this.b=e},
b_q:function b_q(){this.b=$},
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
ajO:function ajO(d){this.a=$
this.b=null
this.c=d},
b_p:function b_p(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
b7U:function b7U(d){this.a=$
this.b=null
this.c=d},
b6C:function b6C(){},
b6D:function b6D(){},
baf:function baf(){},
aoS:function aoS(d,e,f){this.a=d
this.b=e
this.c=f},
arP:function arP(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
OK:function OK(d,e){this.a=d
this.b=e},
GU:function GU(d,e){this.a=d
this.b=e},
aoT:function aoT(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
cBR(d,e,f,g){var x,w
switch(d.a){case 1:return new A.bjj(f,e)
case 2:return new A.arR(f,g==null?1:g,e)
case 3:return new A.arR(f,g==null?16:g,e)
case 4:x=g==null?32:g
w=new A.bjh(f,x,e)
w.aU8(e,f,x)
return w
case 5:return new A.bji(f,g==null?16:g,e)
case 6:return new A.arP(f,g==null?32:g,!1,e)
case 7:return new A.arP(f,g==null?32:g,!0,e)
default:throw B.n(A.c8("Invalid compression type: "+d.j(0)))}},
u_:function u_(d,e){this.a=d
this.b=e},
bbA:function bbA(){},
bjg:function bjg(){},
cXh(d,e,f,g){var x,w,v,u,t,s,r,q
if(e===0){if(g!==0)throw B.n(A.c8("Incomplete huffman data"))
return}x=d.d
w=d.a3()
v=d.a3()
d.d+=4
u=d.a3()
t=!0
if(w<65537)t=v>=65537
if(t)throw B.n(A.c8("Invalid huffman table size"))
d.d+=4
s=B.bP(65537,0,!1,y.p)
r=J.iO(16384,y.W)
for(q=0;q<16384;++q)r[q]=new A.aoU()
A.cXi(d,e-20,w,v,s)
if(u>8*(e-(d.d-x)))throw B.n(A.c8("Error in header for Huffman-encoded data (invalid number of bits)."))
A.cXe(s,w,v,r)
A.cXg(s,r,d,u,v,g,f)},
cXg(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p="Error in Huffman-encoded data (invalid code).",o=B.a([0,0],y.t),n=f.d+D.c.b2(g+7,8)
for(x=0;f.d<n;){A.csk(o,f)
for(;w=o[1],w>=14;){v=e[D.c.o3(o[0],w-14)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.csl(v.b,h,o,f,j,x,i)}else{if(v.c==null)throw B.n(A.c8(p))
for(t=0;t<v.b;++t){s=d[v.c[t]]&63
while(!0){w=o[1]
if(!(w<s&&f.d<n))break
A.csk(o,f)}if(w>=s){u=v.c
w-=s
if(d[u[t]]>>>6===(D.c.o3(o[0],w)&D.c.eo(1,s)-1)>>>0){o[1]=w
r=A.csl(u[t],h,o,f,j,x,i)
x=r
break}}}if(t===v.b)throw B.n(A.c8(p))}}}q=8-g&7
o[0]=D.c.S(o[0],q)
o[1]=o[1]-q
for(;w=o[1],w>0;){v=e[D.c.eW(o[0],14-w)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.csl(v.b,h,o,f,j,x,i)}else throw B.n(A.c8(p))}if(x!==i)throw B.n(A.c8("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
csl(d,e,f,g,h,i,j){var x,w,v,u,t,s="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)A.csk(f,g)
x=f[1]-8
f[1]=x
w=D.c.o3(f[0],x)&255
if(i+w>j)throw B.n(A.c8(s))
v=h[i-1]
for(x=h.$flags|0;u=w-1,w>0;w=u,i=t){t=i+1
x&2&&B.E(h)
h[i]=v}}else{if(i<j){h.toString
t=i+1
h.$flags&2&&B.E(h)
h[i]=d}else throw B.n(A.c8(s))
i=t}return i},
cXe(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n="Error in Huffman-encoded data (invalid code table entry)."
for(x=y.t,w=y.p;e<=f;++e){v=d[e]
u=v>>>6
t=v&63
if(D.c.hA(u,t)!==0)throw B.n(A.c8(n))
if(t>14){s=g[D.c.h1(u,t-14)]
if(s.a!==0)throw B.n(A.c8(n))
v=++s.b
r=s.c
if(r!=null){v=B.bP(v,0,!1,w)
s.c=v
for(q=s.b-1,p=0;p<q;++p)v[p]=r[p]}else s.c=B.a([0],x)
s.c[s.b-1]=e}else if(t!==0){v=14-t
o=D.c.eW(u,v)
for(p=D.c.eW(1,v);p>0;--p,++o){s=g[o]
if(s.a!==0||s.c!=null)throw B.n(A.c8(n))
s.a=t
s.b=e}}}},
cXi(d,e,f,g,h){var x,w,v,u,t,s="Error in Huffman-encoded data (unexpected end of code table data).",r="Error in Huffman-encoded data (code table is longer than expected).",q=d.d,p=B.a([0,0],y.t)
for(x=g+1;f<=g;++f){if(d.d-q>e)throw B.n(A.c8(s))
w=A.cBS(6,p,d)
h[f]=w
if(w===63){if(d.d-q>e)throw B.n(A.c8(s))
v=A.cBS(8,p,d)+6
if(f+v>x)throw B.n(A.c8(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}else if(w>=59){v=w-59+2
if(f+v>x)throw B.n(A.c8(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}}A.cXf(h)},
cXf(d){var x,w,v,u,t,s=B.bP(59,0,!1,y.p)
for(x=0;x<65537;++x){w=d[x]
s[w]=s[w]+1}for(v=0,x=58;x>0;--x,v=u){u=v+s[x]>>>1
s[x]=v}for(x=0;x<65537;++x){t=d[x]
if(t>0){w=s[t]
s[t]=w+1
d[x]=(t|w<<6)>>>0}}},
csk(d,e){d[0]=((d[0]<<8|e.ct())&-1)>>>0
d[1]=(d[1]+8&-1)>>>0},
cBS(d,e,f){var x
for(;x=e[1],x<d;){e[0]=((e[0]<<8|J.v(f.a,f.d++))&-1)>>>0
e[1]=(e[1]+8&-1)>>>0}x-=d
e[1]=x
return(D.c.o3(e[0],x)&D.c.eo(1,d)-1)>>>0},
aoU:function aoU(){this.b=this.a=0
this.c=null},
cXj(d){var x=A.cY(d,!1,null,0)
if(x.a3()!==20000630)return!1
if(x.ct()!==2)return!1
if((x.rH()&4294967289)>>>0!==0)return!1
return!0},
bbC:function bbC(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
cDi(d,e,f){var x=new A.arQ(d,B.a([],y.Q),B.K(y.N,y.n),C.Lt,e)
x.aTQ(d,e,f)
return x},
a_2:function a_2(){},
bbD:function bbD(d,e){this.a=d
this.b=e},
arQ:function arQ(d,e,f,g,h){var _=this
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
bjh:function bjh(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
aN4:function aN4(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
bji:function bji(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
bjj:function bjj(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
arR:function arR(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
bbB:function bbB(){this.a=null},
cCv(d){var x=new Uint8Array(d*3)
return new A.a_E(A.cYv(d),d,null,new A.us(x,d,3))},
cYu(d){return new A.a_E(d.a,d.b,d.c,A.cEQ(d.d))},
cYv(d){var x
for(x=1;x<=8;++x)if(D.c.eo(1,x)>=d)return x
return 0},
a_E:function a_E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_F:function a_F(){},
arS:function arS(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=$},
aqs:function aqs(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
bfD:function bfD(){var _=this
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
cCP(d){var x,w,v,u,t,s
if(d.am()!==0)return null
x=d.am()
if(x>=3)return null
w=C.avU[x]
if(w===C.LT)return null
v=d.am()
u=J.kw(v,y.Y)
for(t=0;t<v;++t){J.v(d.a,d.d++)
s=J.v(d.a,d.d++)
J.v(d.a,d.d++);++d.d
d.am()
d.am()
u[t]=new A.are(s,d.a3(),d.a3())}return new A.bi2(w,v,u)},
Pf:function Pf(d,e){this.a=d
this.b=e},
bi2:function bi2(d,e,f){this.c=d
this.d=e
this.e=f},
are:function are(d,e,f){this.b=d
this.d=e
this.e=f},
bi0:function bi0(d,e,f,g,h,i,j,k,l){var _=this
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
bi1:function bi1(){this.b=this.a=null},
akO:function akO(d,e,f){this.e=d
this.f=e
this.r=f},
Hs:function Hs(){},
Ht:function Ht(d){this.a=d},
a06:function a06(d){this.a=d},
bjJ:function bjJ(){this.d=null},
Cb:function Cb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.y=_.x=_.w=_.r=_.f=_.e=$},
cDx(){var x=B.bP(4,null,!1,y.a7),w=B.a([],y.cB),v=y.bT,u=J.C8(0,v)
v=J.C8(0,v)
return new A.bjL(new A.OI(B.K(y.N,y.P)),x,w,u,v,B.a([],y.E))},
bjL:function bjL(d,e,f,g,h,i){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i},
bjM:function bjM(d,e){this.a=d
this.b=e},
Uv:function Uv(d){this.a=d
this.b=0},
as4:function as4(d,e){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=d
_.z=e},
bjP:function bjP(){this.r=this.f=$},
as5:function as5(d,e,f,g,h,i,j,k){var _=this
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
as3:function as3(){},
bjK:function bjK(d,e){this.a=d
this.b=e},
bjN:function bjN(d,e,f,g,h,i,j,k,l){var _=this
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
arT:function arT(d,e,f,g,h,i,j,k,l){var _=this
_.y=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
cDk(){var x=y.N
return new A.bjl(B.K(x,x),B.a([],y.d),B.a([],y.t))},
D0:function D0(d,e){this.a=d
this.b=e},
bth:function bth(){},
bjl:function bjl(d,e,f){var _=this
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
awY:function awY(d){var _=this
_.a=d
_.c=_.b=0
_.d=$
_.e=0},
awZ:function awZ(d,e){this.a=d
this.b=e},
btf:function btf(d,e){var _=this
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
bti:function bti(d){this.b=this.a=null
this.c=d},
btj:function btj(){},
axt:function axt(){this.b=this.a=null},
axu:function axu(){this.b=this.a=null},
wC:function wC(){},
axw:function axw(){this.b=this.a=null},
axx:function axx(){this.b=this.a=null},
axA:function axA(){this.b=this.a=null},
axB:function axB(){this.b=this.a=null},
a3D:function a3D(d){this.b=d},
axz:function axz(){this.b=$
this.c=null},
bue:function bue(){var _=this
_.w=_.r=_.f=_.e=$},
Ra:function Ra(d){this.a=d
this.c=null},
cFe(d){var x=new A.bug(B.K(y.p,y.a2))
x.aUh(d)
return x},
ctW(d,e,f,g){var x=d/255,w=e/255,v=f/255,u=g/255,t=w*(1-v),s=x*(1-u)
return D.d.C(D.d.b3((2*x<v?2*w*x+t+s:u*v-2*(v-x)*(u-w)+t+s)*255,0,255))},
buh(d,e){if(e===0)return 0
return D.d.C(D.c.b3(D.d.C(255*(1-(1-d/255)/(e/255))),0,255))},
buj(d,e){return D.d.C(D.c.b3(d+e-255,0,255))},
ctY(d,e){return D.d.C(D.c.b3(255-(255-e)*(255-d),0,255))},
bui(d,e){if(e===255)return 255
return D.d.C(D.d.b3(d/255/(1-e/255)*255,0,255))},
ctZ(d,e){var x=d/255,w=e/255,v=1-w
return D.d.aT(255*(v*w*x+w*(1-v*(1-x))))},
ctU(d,e){var x=e/255,w=d/255
if(w<0.5)return D.d.aT(510*x*w)
else return D.d.aT(255*(1-2*(1-x)*(1-w)))},
cu_(d,e){if(e<128)return A.buh(d,2*e)
else return A.bui(d,2*(e-128))},
ctV(d,e){var x
if(e<128)return A.buj(d,2*e)
else{x=2*(e-128)
return x+d>255?255:d+x}},
ctX(d,e){return e<128?Math.min(d,2*e):Math.max(d,2*(e-128))},
ctT(d,e){return D.d.aT(e+d-2*e*d/255)},
pc(d,e,f){var x
if(d==null)x=0
else x=f===1?d[e]:(d[e]<<8|d[e+1])>>>8
return x},
cFf(b5,b6,b7,b8,b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4=B.K(y.p,y.aG)
for(x=b9.length,w=0;v=b9.length,w<v;b9.length===x||(0,B.S)(b9),++w){u=b9[w]
b4.m(0,u.a,u)}if(b6===8)t=1
else t=b6===16?2:-1
s=A.hV(b3,b3,C.ab,0,C.bt,b8,b3,0,v,b3,C.ab,b7,!1)
if(t===-1)throw B.n(A.c8("PSD: unsupported bit depth: "+B.q(b6)))
r=b4.i(0,0)
q=b4.i(0,1)
p=b4.i(0,2)
o=b4.i(0,-1)
n=B.a([0,0,0],y.t)
m=-t
for(x=s.a,x=x.ga5(x),l=v>=5,k=v===4,j=v>=2,v=v>=4;x.q();){i=x.gL(x)
m+=t
switch(b5){case C.a8I:i.saf(0,A.pc(r.c,m,t))
i.sap(A.pc(q.c,m,t))
i.sau(0,A.pc(p.c,m,t))
i.saE(0,v?A.pc(o.c,m,t):255)
if(i.gaE(i)!==0){i.saf(0,(i.gaf(i)+i.gaE(i)-255)*255/i.gaE(i))
i.sap((i.gap()+i.gaE(i)-255)*255/i.gaE(i))
i.sau(0,(i.gau(i)+i.gaE(i)-255)*255/i.gaE(i))}break
case C.a8K:h=A.pc(r.c,m,t)
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
a8=[D.d.C(D.d.b3(a5*255,0,255)),D.d.C(D.d.b3(a6*255,0,255)),D.d.C(D.d.b3(a7*255,0,255))]
i.saf(0,a8[0])
i.sap(a8[1])
i.sau(0,a8[2])
i.saE(0,e)
break
case C.a8H:a9=A.pc(r.c,m,t)
e=j?A.pc(o.c,m,t):255
i.saf(0,a9)
i.sap(a9)
i.sau(0,a9)
i.saE(0,e)
break
case C.a8J:b0=A.pc(r.c,m,t)
b1=A.pc(q.c,m,t)
d=A.pc(p.c,m,t)
b2=A.pc(b4.i(0,k?-1:3).c,m,t)
e=l?A.pc(o.c,m,t):255
A.cLu(255-b0,255-b1,255-d,255-b2,n)
i.saf(0,n[0])
i.sap(n[1])
i.sau(0,n[2])
i.saE(0,e)
break
default:throw B.n(A.c8("Unhandled color mode: "+B.q(b5)))}}return s},
uA:function uA(d,e){this.a=d
this.b=e},
bug:function bug(d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=_.w=$
_.y=null
_.z=d
_.as=$
_.ay=_.ax=_.at=null},
axv:function axv(d,e){this.a=d
this.b=e},
axy:function axy(d,e,f){var _=this
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
d1v(d,e){var x,w
switch(d){case"lsct":x=new A.axz()
w=e.c-e.d
x.b=e.a3()
if(w>=12){if(e.je(4)!=="8BIM")B.a7(A.c8("Invalid key in layer additional data"))
x.c=e.je(4)}if(w>=16)e.a3()
return x
default:return new A.a3D(e)}},
Rb:function Rb(){},
buf:function buf(){this.a=null},
axE:function axE(){},
z5:function z5(d,e,f){this.a=d
this.b=e
this.c=f},
md:function md(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3G:function a3G(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
Rf:function Rf(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
axD:function axD(){this.y=this.b=this.a=0},
z6(d,e){return(C.vE[d>>>8]<<17|C.vE[e>>>8]<<16|C.vE[d&255]<<1|C.vE[e&255])>>>0},
rH:function rH(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
buk:function buk(){this.b=this.a=null},
aBX:function aBX(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
oe:function oe(d,e){this.a=d
this.b=e},
bG6:function bG6(){this.a=null
this.b=$},
bGM:function bGM(d){this.a=d
this.c=this.b=0},
aC_:function aC_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
cuQ(d,e,f){var x=new A.bGO(e,f,d),w=y.s
x.e=B.bP(e,null,!1,w)
x.f=B.bP(e,null,!1,w)
return x},
bGO:function bGO(d,e,f){var _=this
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
aC0:function aC0(d,e,f,g){var _=this
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
Ku:function Ku(d,e){this.a=d
this.b=e},
kF:function kF(d,e){this.a=d
this.b=e},
t_:function t_(d,e){this.a=d
this.b=e},
bGP:function bGP(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
cDS(){return new A.blh(new Uint8Array(4096))},
blh:function blh(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
bGN:function bGN(){this.a=null
this.c=$},
cvc(d,e){var x=new Int32Array(4),w=new Int32Array(4),v=new Int8Array(4),u=new Int8Array(4),t=B.bP(8,null,!1,y.ak),s=B.bP(4,null,!1,y.Z)
return new A.bM0(d,e,new A.bM6(),new A.bMa(),new A.bM2(x,w),new A.bMc(v,u),t,s,new Uint8Array(4))},
cI8(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
bM0:function bM0(d,e,f,g,h,i,j,k,l){var _=this
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
_.c1=$
_.bQ=null
_.bb=_.aK=$
_.bo=null
_.by=$},
bMd:function bMd(){},
cI5(d){var x=new A.a8a(d)
x.b=254
x.c=0
x.d=-8
return x},
a8a:function a8a(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
eO(d,e,f){return D.c.ld(D.c.S(d+2*e+f+2,2),32)},
d5W(d){var x,w=B.a([A.eO(J.v(d.a,d.d+-33),J.v(d.a,d.d+-32),J.v(d.a,d.d+-31)),A.eO(J.v(d.a,d.d+-32),J.v(d.a,d.d+-31),J.v(d.a,d.d+-30)),A.eO(J.v(d.a,d.d+-31),J.v(d.a,d.d+-30),J.v(d.a,d.d+-29)),A.eO(J.v(d.a,d.d+-30),J.v(d.a,d.d+-29),J.v(d.a,d.d+-28))],y.t)
for(x=0;x<4;++x)d.A0(x*32,4,w)},
d5O(d){var x=J.v(d.a,d.d+-33),w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95),s=A.cb(d,null,0),r=s.QC(),q=A.eO(x,w,v)
r.$flags&2&&B.E(r)
r[0]=16843009*q
s.d+=32
q=s.QC()
r=A.eO(w,v,u)
q.$flags&2&&B.E(q)
q[0]=16843009*r
s.d+=32
r=s.QC()
q=A.eO(v,u,t)
r.$flags&2&&B.E(r)
r[0]=16843009*q
s.d+=32
q=s.QC()
r=A.eO(u,t,t)
q.$flags&2&&B.E(q)
q[0]=16843009*r},
d5M(d){var x,w,v,u
for(x=4,w=0;w<4;++w)x+=J.v(d.a,d.d+(w-32))+J.v(d.a,d.d+(-1+w*32))
x=D.c.S(x,3)
for(w=0;w<4;++w){v=d.a
u=d.d+w*32
J.tw(v,u,u+4,x)}},
cvd(d,e){var x,w,v,u,t,s=255-J.v(d.a,d.d+-33)
for(x=0,w=0;w<e;++w){v=s+J.v(d.a,d.d+(x-1))
for(u=0;u<e;++u){t=$.pP()[v+J.v(d.a,d.d+(-32+u))]
J.bW(d.a,d.d+(x+u),t)}x+=32}},
d5U(d){A.cvd(d,4)},
d5V(d){A.cvd(d,8)},
d5T(d){A.cvd(d,16)},
d5S(d){var x,w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95),s=J.v(d.a,d.d+-33),r=J.v(d.a,d.d+-32),q=J.v(d.a,d.d+-31),p=J.v(d.a,d.d+-30),o=J.v(d.a,d.d+-29)
d.m(0,96,A.eO(v,u,t))
x=A.eO(w,v,u)
d.m(0,97,x)
d.m(0,64,x)
x=A.eO(s,w,v)
d.m(0,98,x)
d.m(0,65,x)
d.m(0,32,x)
x=A.eO(r,s,w)
d.m(0,99,x)
d.m(0,66,x)
d.m(0,33,x)
d.m(0,0,x)
x=A.eO(q,r,s)
d.m(0,67,x)
d.m(0,34,x)
d.m(0,1,x)
x=A.eO(p,q,r)
d.m(0,35,x)
d.m(0,2,x)
d.m(0,3,A.eO(o,p,q))},
d5R(d){var x,w=J.v(d.a,d.d+-32),v=J.v(d.a,d.d+-31),u=J.v(d.a,d.d+-30),t=J.v(d.a,d.d+-29),s=J.v(d.a,d.d+-28),r=J.v(d.a,d.d+-27),q=J.v(d.a,d.d+-26),p=J.v(d.a,d.d+-25)
d.m(0,0,A.eO(w,v,u))
x=A.eO(v,u,t)
d.m(0,32,x)
d.m(0,1,x)
x=A.eO(u,t,s)
d.m(0,64,x)
d.m(0,33,x)
d.m(0,2,x)
x=A.eO(t,s,r)
d.m(0,96,x)
d.m(0,65,x)
d.m(0,34,x)
d.m(0,3,x)
x=A.eO(s,r,q)
d.m(0,97,x)
d.m(0,66,x)
d.m(0,35,x)
x=A.eO(r,q,p)
d.m(0,98,x)
d.m(0,67,x)
d.m(0,99,A.eO(q,p,p))},
d5Y(d){var x=J.v(d.a,d.d+-1),w=J.v(d.a,d.d+31),v=J.v(d.a,d.d+63),u=J.v(d.a,d.d+-33),t=J.v(d.a,d.d+-32),s=J.v(d.a,d.d+-31),r=J.v(d.a,d.d+-30),q=J.v(d.a,d.d+-29),p=D.c.ld(D.c.S(u+t+1,1),32)
d.m(0,65,p)
d.m(0,0,p)
p=D.c.ld(D.c.S(t+s+1,1),32)
d.m(0,66,p)
d.m(0,1,p)
p=D.c.ld(D.c.S(s+r+1,1),32)
d.m(0,67,p)
d.m(0,2,p)
d.m(0,3,D.c.ld(D.c.S(r+q+1,1),32))
d.m(0,96,A.eO(v,w,x))
d.m(0,64,A.eO(w,x,u))
p=A.eO(x,u,t)
d.m(0,97,p)
d.m(0,32,p)
p=A.eO(u,t,s)
d.m(0,98,p)
d.m(0,33,p)
p=A.eO(t,s,r)
d.m(0,99,p)
d.m(0,34,p)
d.m(0,35,A.eO(s,r,q))},
d5X(d){var x,w=J.v(d.a,d.d+-32),v=J.v(d.a,d.d+-31),u=J.v(d.a,d.d+-30),t=J.v(d.a,d.d+-29),s=J.v(d.a,d.d+-28),r=J.v(d.a,d.d+-27),q=J.v(d.a,d.d+-26),p=J.v(d.a,d.d+-25)
d.m(0,0,D.c.ld(D.c.S(w+v+1,1),32))
x=D.c.ld(D.c.S(v+u+1,1),32)
d.m(0,64,x)
d.m(0,1,x)
x=D.c.ld(D.c.S(u+t+1,1),32)
d.m(0,65,x)
d.m(0,2,x)
x=D.c.ld(D.c.S(t+s+1,1),32)
d.m(0,66,x)
d.m(0,3,x)
d.m(0,32,A.eO(w,v,u))
x=A.eO(v,u,t)
d.m(0,96,x)
d.m(0,33,x)
x=A.eO(u,t,s)
d.m(0,97,x)
d.m(0,34,x)
x=A.eO(t,s,r)
d.m(0,98,x)
d.m(0,35,x)
d.m(0,67,A.eO(s,r,q))
d.m(0,99,A.eO(r,q,p))},
d5P(d){var x,w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95)
d.m(0,0,D.c.ld(D.c.S(w+v+1,1),32))
x=D.c.ld(D.c.S(v+u+1,1),32)
d.m(0,32,x)
d.m(0,2,x)
x=D.c.ld(D.c.S(u+t+1,1),32)
d.m(0,64,x)
d.m(0,34,x)
d.m(0,1,A.eO(w,v,u))
x=A.eO(v,u,t)
d.m(0,33,x)
d.m(0,3,x)
x=A.eO(u,t,t)
d.m(0,65,x)
d.m(0,35,x)
d.m(0,99,t)
d.m(0,98,t)
d.m(0,97,t)
d.m(0,96,t)
d.m(0,66,t)
d.m(0,67,t)},
d5N(d){var x=J.v(d.a,d.d+-1),w=J.v(d.a,d.d+31),v=J.v(d.a,d.d+63),u=J.v(d.a,d.d+95),t=J.v(d.a,d.d+-33),s=J.v(d.a,d.d+-32),r=J.v(d.a,d.d+-31),q=J.v(d.a,d.d+-30),p=D.c.ld(D.c.S(x+t+1,1),32)
d.m(0,34,p)
d.m(0,0,p)
p=D.c.ld(D.c.S(w+x+1,1),32)
d.m(0,66,p)
d.m(0,32,p)
p=D.c.ld(D.c.S(v+w+1,1),32)
d.m(0,98,p)
d.m(0,64,p)
d.m(0,96,D.c.ld(D.c.S(u+v+1,1),32))
d.m(0,3,A.eO(s,r,q))
d.m(0,2,A.eO(t,s,r))
p=A.eO(x,t,s)
d.m(0,35,p)
d.m(0,1,p)
p=A.eO(w,x,t)
d.m(0,67,p)
d.m(0,33,p)
p=A.eO(v,w,x)
d.m(0,99,p)
d.m(0,65,p)
d.m(0,97,A.eO(u,v,w))},
d68(d){var x
for(x=0;x<16;++x)d.rC(x*32,16,d,-32)},
d66(d){var x,w,v,u,t
for(x=0,w=16;w>0;--w){v=J.v(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.tw(u,t,t+16,v)
x+=32}},
bM4(d,e){var x,w,v
for(x=0;x<16;++x){w=e.a
v=e.d+x*32
J.tw(w,v,v+16,d)}},
d5Z(d){var x,w
for(x=16,w=0;w<16;++w)x+=J.v(d.a,d.d+(-1+w*32))+J.v(d.a,d.d+(w-32))
A.bM4(D.c.S(x,5),d)},
d60(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.v(d.a,d.d+(-1+w*32))
A.bM4(D.c.S(x,4),d)},
d6_(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.v(d.a,d.d+(w-32))
A.bM4(D.c.S(x,4),d)},
d61(d){A.bM4(128,d)},
d69(d){var x
for(x=0;x<8;++x)d.rC(x*32,8,d,-32)},
d67(d){var x,w,v,u,t
for(x=0,w=0;w<8;++w){v=J.v(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.tw(u,t,t+8,v)
x+=32}},
bM5(d,e){var x,w,v
for(x=0;x<8;++x){w=e.a
v=e.d+x*32
J.tw(w,v,v+8,d)}},
d62(d){var x,w
for(x=8,w=0;w<8;++w)x+=J.v(d.a,d.d+(w-32))+J.v(d.a,d.d+(-1+w*32))
A.bM5(D.c.S(x,4),d)},
d63(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.v(d.a,d.d+(w-32))
A.bM5(D.c.S(x,3),d)},
d64(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.v(d.a,d.d+(-1+w*32))
A.bM5(D.c.S(x,3),d)},
d65(d){A.bM5(128,d)},
EB(d,e,f,g,h){var x=e+f+g*32,w=J.v(d.a,d.d+x)+D.c.S(h,3)
if(!((w&-256)>>>0===0))w=w<0?0:255
d.m(0,x,w)},
bM3(d,e,f,g,h){A.EB(d,0,0,e,f+g)
A.EB(d,0,1,e,f+h)
A.EB(d,0,2,e,f-h)
A.EB(d,0,3,e,f-g)},
d5Q(){var x,w,v,u
if(!$.cI6){for(x=-255;x<=255;++x){w=$.aWn()
v=255+x
u=x<0?-x:x
w.$flags&2&&B.E(w)
w[v]=u
u=$.cqu()
w=D.c.S(w[v],1)
u.$flags&2&&B.E(u)
u[v]=w}for(x=-1020;x<=1020;++x){w=$.cqv()
if(x<-128)v=-128
else v=x>127?127:x
w.$flags&2&&B.E(w)
w[1020+x]=v}for(x=-112;x<=112;++x){w=$.aWo()
if(x<-16)v=-16
else v=x>15?15:x
w.$flags&2&&B.E(w)
w[112+x]=v}for(x=-255;x<=510;++x){w=$.pP()
if(x<0)v=0
else v=x>255?255:x
w.$flags&2&&B.E(w)
w[255+x]=v}$.cI6=!0}},
bM1:function bM1(){},
d5L(){var x,w=J.iO(3,y.D)
for(x=0;x<3;++x)w[x]=new Uint8Array(11)
return new A.a89(w)},
d6o(){var x,w,v,u,t=new Uint8Array(3),s=J.iO(4,y.cm)
for(x=y.V,w=0;w<4;++w){v=J.iO(8,x)
for(u=0;u<8;++u)v[u]=A.d5L()
s[w]=v}D.D.m_(t,0,3,255)
return new A.bMb(t,s)},
bM6:function bM6(){this.d=$},
bMa:function bMa(){this.b=null},
bMc:function bMc(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
a89:function a89(d){this.a=d},
bMb:function bMb(d,e){this.a=d
this.b=e},
bM2:function bM2(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
L3:function L3(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
aDE:function aDE(){this.b=this.a=0},
aDG:function aDG(d,e,f){this.a=d
this.b=e
this.c=f},
aDF:function aDF(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
aDH:function aDH(d,e,f){this.a=d
this.b=e
this.c=f},
cve(d,e){var x,w=B.a([],y.A),v=B.a([],y.F),u=new Uint32Array(2),t=new A.aDC(d,u)
u=t.d=J.df(D.by.gaj(u),0,null)
x=d.ct()
u.$flags&2&&B.E(u)
u[0]=x
x=d.ct()
u.$flags&2&&B.E(u)
u[1]=x
x=d.ct()
u.$flags&2&&B.E(u)
u[2]=x
x=d.ct()
u.$flags&2&&B.E(u)
u[3]=x
x=d.ct()
u.$flags&2&&B.E(u)
u[4]=x
x=d.ct()
u.$flags&2&&B.E(u)
u[5]=x
x=d.ct()
u.$flags&2&&B.E(u)
u[6]=x
x=d.ct()
u.$flags&2&&B.E(u)
u[7]=x
return new A.a8b(t,e,w,v)},
EC(d,e){return D.c.S(d+D.c.eo(1,e)-1,e)},
a8b:function a8b(d,e,f,g){var _=this
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
arU:function arU(d,e,f,g){var _=this
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
aDC:function aDC(d,e){var _=this
_.a=0
_.b=d
_.c=e
_.d=$},
bM7:function bM7(d,e){this.a=d
this.b=e},
bM8(d,e,f){var x=d[e]
d.$flags&2&&B.E(d)
d[e]=(((x&4278255360)>>>0)+((f&4278255360)>>>0)&4278255360|(x&16711935)+(f&16711935)&16711935)>>>0},
zG(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
L5(d){if(d<0)return 0
if(d>255)return 255
return d},
bM9(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
d6a(d,e,f){return 4278190080},
d6b(d,e,f){return e},
d6g(d,e,f){return d[f]},
d6h(d,e,f){return d[f+1]},
d6i(d,e,f){return d[f-1]},
d6j(d,e,f){var x=d[f]
return A.zG(A.zG(e,d[f+1]),x)},
d6k(d,e,f){return A.zG(e,d[f-1])},
d6l(d,e,f){return A.zG(e,d[f])},
d6m(d,e,f){return A.zG(d[f-1],d[f])},
d6n(d,e,f){return A.zG(d[f],d[f+1])},
d6c(d,e,f){var x=d[f-1],w=d[f],v=d[f+1]
return A.zG(A.zG(e,x),A.zG(w,v))},
d6d(d,e,f){var x=d[f],w=d[f-1]
return A.bM9(x>>>24,e>>>24,w>>>24)+A.bM9(x>>>16&255,e>>>16&255,w>>>16&255)+A.bM9(x>>>8&255,e>>>8&255,w>>>8&255)+A.bM9(x&255,e&255,w&255)<=0?x:e},
d6e(d,e,f){var x=d[f],w=d[f-1]
return(A.L5((e>>>24)+(x>>>24)-(w>>>24))<<24|A.L5((e>>>16&255)+(x>>>16&255)-(w>>>16&255))<<16|A.L5((e>>>8&255)+(x>>>8&255)-(w>>>8&255))<<8|A.L5((e&255)+(x&255)-(w&255)))>>>0},
d6f(d,e,f){var x,w,v,u=d[f],t=d[f-1],s=A.zG(e,u)
u=s>>>24
x=s>>>16&255
w=s>>>8&255
v=s>>>0&255
return(A.L5(u+D.c.b2(u-(t>>>24),2))<<24|A.L5(x+D.c.b2(x-(t>>>16&255),2))<<16|A.L5(w+D.c.b2(w-(t>>>8&255),2))<<8|A.L5(v+D.c.b2(v-(t&255),2)))>>>0},
L4:function L4(d,e){this.a=d
this.b=e},
aDD:function aDD(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
bN0:function bN0(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
a8p:function a8p(){},
arV:function arV(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=$
_.r=1
_.x=_.w=$},
cCL(){var x=new Uint8Array(128),w=new Int16Array(128)
x=new A.arc(x,w,new Int16Array(128))
x.a7W(0)
return x},
cYz(){var x,w=J.iO(5,y.x)
for(x=0;x<5;++x)w[x]=A.cCL()
return new A.a_L(w)},
arc:function arc(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$
_.f=_.e=0},
a_L:function a_L(d){this.a=d},
Tw:function Tw(d,e){this.a=d
this.b=e},
aE5:function aE5(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
arW:function arW(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
bN1:function bN1(){this.b=this.a=null},
cCO(d){return new A.a08(d.a,d.b,D.D.lv(d.c,0))},
bi_:function bi_(d,e){this.a=d
this.b=e},
a08:function a08(d,e,f){this.a=d
this.b=e
this.c=f},
hV(d,e,f,g,h,i,j,k,l,m,n,o,p){var x,w=new A.BS(null,null,null,d,k,h,g,0)
w.gl7().push(w)
w.c=j
if(e!=null)w.e=A.ZX(e)
x=!1
if(m==null)if(p)x=w.gdt()===C.fS||w.gdt()===C.hI||w.gdt()===C.hJ||w.gdt()===C.ab||w.gdt()===C.cy
w.akV(o,i,f,l,x?w.aZk(f,n,l):m)
return w},
aro(d,e,f,g){var x,w,v,u=null,t=d.e
t=t==null?u:A.ZX(t)
x=d.c
x=x==null?u:A.cCO(x)
w=d.w
v=d.r
t=new A.BS(u,x,t,u,v,w,d.y,d.z)
t.aU4(d,e,f,g)
return t},
BR(d,e,f){var x,w,v,u,t=null,s=d.a
s=s==null?t:s.qZ(0,f)
x=d.e
x=x==null?t:A.ZX(x)
w=d.c
w=w==null?t:A.cCO(w)
v=d.w
u=d.r
s=new A.BS(s,w,x,t,u,v,d.y,d.z)
s.aU3(d,e,f)
return s},
aqh:function aqh(d,e){this.a=d
this.b=e},
BS:function BS(d,e,f,g,h,i,j,k){var _=this
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
biD:function biD(d,e){this.a=d
this.b=e},
biC:function biC(){},
m2:function m2(){},
cZ5(d,e,f){return new A.Pn(new Uint16Array(d*e*f),d,e,f)},
Pn:function Pn(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
cZ6(d,e,f){return new A.Po(new Float32Array(d*e*f),d,e,f)},
Po:function Po(d,e,f,g){var _=this
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
Pp:function Pp(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
Pq:function Pq(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
Pr:function Pr(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
cZ7(d,e,f){return new A.Ps(new Uint32Array(d*e*f),d,e,f)},
Ps:function Ps(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
Pt:function Pt(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
cD2(d,e,f){return new A.Pu(new Uint8Array(d*e*f),null,d,e,f)},
Pu:function Pu(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
arX:function arX(d,e){this.a=d
this.b=e},
bsn:function bsn(){},
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
awu:function awu(d,e,f){this.c=d
this.a=e
this.b=f},
awv:function awv(d,e,f){this.c=d
this.a=e
this.b=f},
aww:function aww(d,e,f){this.c=d
this.a=e
this.b=f},
a2S:function a2S(d,e,f){this.c=d
this.a=e
this.b=f},
cEQ(d){return new A.us(new Uint8Array(B.bZ(d.c)),d.a,d.b)},
us:function us(d,e,f){this.c=d
this.a=e
this.b=f},
ctz(d){return new A.IG(-1,0,-d.c,d)},
IG:function IG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ctA(d){return new A.IH(-1,0,-d.c,d)},
IH:function IH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ctB(d){return new A.II(-1,0,-d.c,d)},
II:function II(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ctC(d){return new A.IJ(-1,0,-d.c,d)},
IJ:function IJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ctD(d){return new A.IK(-1,0,-d.c,d)},
IK:function IK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ctE(d){return new A.IL(-1,0,-d.c,d)},
IL:function IL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ut(d,e,f,g,h){d.hn(0,e-1,f)
return new A.awK(d,e,e+g-1,f+h-1)},
awK:function awK(d,e,f,g){var _=this
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
ctF(d){return new A.IN(-1,0,-d.c,d)},
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
ctG(d){return new A.IP(-1,0,-d.c,d)},
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
bsN(d){return new A.IR(-1,0,-d.c,d)},
IR:function IR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fk:function fk(){},
dho(d,e){switch(e.a){case 0:A.aVS(d)
break
case 1:A.dhs(d)
break
case 2:A.dhq(d)
break}return d},
dhs(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.gl7().length
for(x=y.g,w=0;w<h;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?i:t.a
if(r==null)r=0
q=s?i:t.b
if(q==null)q=0
p=D.c.b2(q,2)
t=d.a
if((t==null?i:t.geU())!=null)for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.ec(m,n,i)
if(l==null)l=new A.fk()
t=u.a
k=t==null?i:t.ec(m,o,i)
if(k==null)k=new A.fk()
j=l.ge6(l)
l.se6(0,k.ge6(k))
k.se6(0,j)}else for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.ec(m,n,i)
if(l==null)l=new A.fk()
t=u.a
k=t==null?i:t.ec(m,o,i)
if(k==null)k=new A.fk()
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
aVS(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=d.gl7().length
for(x=y.g,w=0;w<g;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?h:t.a
if(r==null)r=0
q=s?h:t.b
if(q==null)q=0
p=D.c.b2(r,2)
t=d.a
if((t==null?h:t.geU())!=null)for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.ec(l,n,h)
if(k==null)k=new A.fk()
t=u.a
j=t==null?h:t.ec(m,n,h)
if(j==null)j=new A.fk()
i=k.ge6(k)
k.se6(0,j.ge6(j))
j.se6(0,i)}else for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.ec(l,n,h)
if(k==null)k=new A.fk()
t=u.a
j=t==null?h:t.ec(m,n,h)
if(j==null)j=new A.fk()
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
dhq(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=d.gl7().length
for(x=y.g,w=0;w<f;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?g:t.a
if(r==null)r=0
q=s?g:t.b
if(q==null)q=0
p=D.c.b2(q,2)
if((s?g:t.geU())!=null)for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.ec(k,m,g)
if(j==null)j=new A.fk()
t=u.a
i=t==null?g:t.ec(l,o,g)
if(i==null)i=new A.fk()
h=j.ge6(j)
j.se6(0,i.ge6(i))
i.se6(0,h)}else for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.ec(k,m,g)
if(j==null)j=new A.fk()
t=u.a
i=t==null?g:t.ec(l,o,g)
if(i==null)i=new A.fk()
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
bcK:function bcK(d,e){this.a=d
this.b=e},
c8(d){return new A.aru(d)},
aru:function aru(d){this.a=d},
cY(d,e,f,g){var x=J.a3(d),w=x.gu(d)
x=f==null?x.gu(d):g+f
return new A.m3(d,g,Math.min(w,x),g,e)},
cb(d,e,f){var x=d.a,w=d.d,v=J.bB(x),u=e==null?d.c:d.d+f+e
return new A.m3(x,d.b,Math.min(v,u),w+f,d.e)},
m3:function m3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bqL:function bqL(d){var _=this
_.a=$
_.b=10
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=d
_.ax=_.at=$},
qq(d,e){return new A.awb(d,new Uint8Array(e))},
awb:function awb(d,e){this.a=0
this.b=d
this.c=e},
bup:function bup(){},
nY:function nY(d,e){this.a=d
this.b=e},
bx_:function bx_(d,e){this.a=d
this.b=e},
bIE:function bIE(d,e,f){this.a=d
this.d=e
this.e=f},
cEl(d){return new Int8Array(d)},
d5y(d){throw B.n(B.aH("Uint64List not supported on the web."))},
cZn(d,e,f){return J.cqM(d,e,f)},
cHR(d,e){return J.oy(d,e,null)},
cXF(d){return J.aWA(d,0,null)},
cXG(d){return d.a8p(0,0,null)},
dhL(d){var x,w,v,u,t=d.gu(0)
for(x=1,w=0;t>0;){v=3800>t?t:3800
t-=v
for(;--v,v>=0;){u=d.b
u.toString
x+=u[d.c++]
w+=x}x=D.c.an(x,65521)
w=D.c.an(w,65521)}return(w<<16|x)>>>0},
xv(d,e){var x,w,v=J.a3(d),u=v.gu(d)
e^=4294967295
for(x=0;u>=8;){w=x+1
e=C.hN[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.hN[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.hN[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.hN[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.hN[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.hN[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.hN[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.hN[(e^v.i(d,w))&255]^e>>>8
u-=8}if(u>0)do{w=x+1
e=C.hN[(e^v.i(d,x))&255]^e>>>8
if(--u,u>0){x=w
continue}else break}while(!0)
return(e^4294967295)>>>0},
O5(d,e,f){var x=0,w=B.m(y.N),v,u,t,s,r
var $async$O5=B.i(function(g,h){if(g===1)return B.j(h,w)
while(true)switch(x){case 0:t="images/"+Date.now()+".jpg"
s=$.aWc()
r=s.as
r===$&&B.b()
x=3
return B.d(r.bC("public-files").QS(t,d),$async$O5)
case 3:if(h.length===0)throw B.n(B.cM("Upload failed"))
u=r.bC("public-files").afy(t)
x=4
return B.d(s.bC("images").jt(0,B.z(["link",u,"occasion",e,"unit",f],y.N,y.cM)),$async$O5)
case 4:v=u
x=1
break
case 1:return B.k(v,w)}})
return B.l($async$O5,w)},
cwH(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s,r,q
if(m==null)m=0
if(n==null)n=0
if(l==null)l=e.gd0(0)
if(k==null)k=e.gb5(0)
if(h==null)h=d.gd0(0)<e.gd0(0)?d.gd0(0):e.gd0(0)
if(g==null)g=d.gb5(0)<e.gb5(0)?d.gb5(0):e.gb5(0)
x=f===C.Al
if(!x&&d.grq())d=d.ayC(d.gqh())
w=k/g
v=l/h
u=y.p
t=J.iO(g,u)
for(s=0;s<g;++s)t[s]=n+D.d.C(s*w)
r=J.iO(h,u)
for(q=0;q<h;++q)r[q]=m+D.d.C(q*v)
if(x)A.db9(e,d,i,j,h,g,r,t,null,C.J9)
else A.daM(e,d,i,j,h,g,r,t,f,!1,null,C.J9)
return d},
db9(d,e,f,g,h,i,j,k,l,m){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.ec(t,s,x)
if(x==null)x=new A.fk()
e.AK(f+u,v,x)}},
daM(d,e,f,g,h,i,j,k,l,m,n,o){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.ec(t,s,x)
if(x==null)x=new A.fk()
A.dh0(e,f+u,v,x,l,!1,n,o)}},
dh0(a4,a5,a6,a7,a8,a9,b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
if(!a4.aCg(a5,a6))return a4
if(a8===C.Al||a4.grq())if(a4.aCg(a5,a6)){a4.o0(a5,a6).iJ(0,a7)
return a4}x=a7.giE()
w=a7.giq()
v=a7.giy()
u=a7.gu(a7)<4?1:a7.gfs()
if(u===0)return a4
t=a4.o0(a5,a6)
s=t.giE()
r=t.giq()
q=t.giy()
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
m=D.d.b3(u,0.01,1)
n=u<0
i=n?0:1
h=D.d.b3(x/m*i,0,0.99)
i=D.d.b3(u,0.01,1)
m=n?0:1
g=D.d.b3(w/i*m,0,0.99)
m=D.d.b3(u,0.01,1)
n=n?0:1
f=D.d.b3(v/m*n,0,0.99)
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
t.siE(x*u+s*p*a3)
t.siq(w*u+r*p*a3)
t.siy(v*u+q*p*a3)
t.sfs(u+p*a3)
return a4},
dhe(d,e,f,g,h,i,j){var x,w=D.d.b3(Math.min(g,h),0,d.gd0(0)-1),v=D.d.b3(Math.min(i,j),0,d.gb5(0)-1),u=D.d.b3(Math.max(g,h),0,d.gd0(0)-1),t=D.d.b3(Math.max(i,j),0,d.gb5(0)-1),s=d.a.qt(0,w,v,u-w+1,t-v+1)
for(x=s.a;s.q();)x.iJ(0,f)
return d},
cXk(a4,a5,a6,a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=b0<16384,a3=a6>a8?a8:a6
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
u&2&&B.E(a4)
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
u&2&&B.E(a4)
a4[j]=a1
a4[i]=v[1]
A.a_4(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}}if(n){h=j+r
if(a2){A.a_3(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&B.E(a4)
a4[h]=a1}else{A.a_4(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&B.E(a4)
a4[h]=a1}u&2&&B.E(a4)
a4[j]=f}}if((a8&x)>>>0!==0){k=l+m
for(j=l;j<=k;j+=o){i=j+p
if(a2){A.a_3(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&B.E(a4)
a4[i]=n}else{A.a_4(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&B.E(a4)
a4[i]=n}u&2&&B.E(a4)
a4[j]=f}}w=x>>>1}},
a_3(d,e,f){var x,w,v,u,t=$.np()
t.$flags&2&&B.E(t)
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
coC(d){var x,w,v,u,t,s,r,q,p,o,n=null
if(A.cDx().QW(d))return new A.as3()
x=new A.awY(A.cDk())
if(x.I8(d))return x
w=new A.bfD()
w.f=A.cY(d,!1,n,0)
w.a=new A.aqs(B.a([],y.b))
if(w.an6())return w
v=new A.bN1()
if(v.I8(d))return v
u=new A.bGN()
if(u.arq(A.cY(d,!1,n,0))!=null)return u
if(A.cFe(d).c===943870035)return new A.buf()
if(A.cXj(d))return new A.bbB()
if(A.crg(A.cY(d,!1,n,0)))return new A.ajO(!1)
t=new A.bG6()
s=A.cY(d,!1,n,0)
r=t.a=new A.aBX(C.yV)
r.vo(0,s)
if(r.aCx())return t
q=new A.bi1()
r=A.cY(d,!1,n,0)
q.a=r
r=A.cCP(r)
q.b=r
if(r!=null)return q
p=new A.buk()
if(p.oF(d)!=null)return p
o=new A.bti(B.a([],y.T))
if(o.I8(d))return o
return n},
cLP(d){var x=A.coC(d)
return x==null?null:x.mY(0,d,null)},
djA(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if($.cw4==null){x=$.cw4=new Uint8Array(768)
for(w=-256;w<0;++w)x[256+w]=0
for(w=0;w<256;++w)x[256+w]=w
for(w=256;w<512;++w)x[256+w]=255}for(x=a6.$flags|0,w=0;w<64;++w){v=a4[w]
u=a3[w]
x&2&&B.E(a6)
a6[w]=v*u}for(t=0,w=0;w<8;++w,t+=8){v=1+t
u=a6[v]
if(u===0&&a6[2+t]===0&&a6[3+t]===0&&a6[4+t]===0&&a6[5+t]===0&&a6[6+t]===0&&a6[7+t]===0){v=D.c.S(5793*a6[t]+512,10)
s=(v&2147483647)-((v&2147483648)>>>0)
x&2&&B.E(a6)
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
x&2&&B.E(a6)
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
x&2&&B.E(a6)
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
x&2&&B.E(a6)
a6[w]=q+s
a6[k]=q-s
a6[v]=o+a0
a6[m]=o-a0
a6[p]=i+f
a6[u]=i-f
a6[j]=a1+h
a6[r]=a1-h}for(x=$.cw4,v=a5.$flags|0,w=0;w<64;++w){x.toString
u=D.c.S(a6[w]+8,4)
u=x[384+((u&2147483647)-((u&2147483648)>>>0))]
v&2&&B.E(a5)
a5[w]=u}},
dhS(d9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=null,d7="ifd0",d8=d9.r
if(d8.i(0,d7).a.a7(0,274)){x=d8.i(0,d7).gik(0)
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
r=A.hV(d6,d6,C.ab,0,C.bt,s,d6,0,3,d6,C.ab,t,!1)
r.e=A.ZX(d8)
r.gwO().i(0,d7).sik(0,d6)
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
c1=D.c.b3((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.c.S(a1-88*b9-183*c0+128,8)
c2=D.c.b3((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.c.S(a1+454*b9+128,8)
c3=D.c.b3((a0&2147483647)-((a0&2147483648)>>>0),0,255)
if(h){a0=r.a
if(a0!=null)a0.fg(p-d,g,c1,c2,c3)}else if(i){a0=r.a
if(a0!=null)a0.fg(p-d,f,c1,c2,c3)}else if(j){a0=r.a
if(a0!=null)a0.fg(d,f,c1,c2,c3)}else if(k){a0=r.a
if(a0!=null)a0.fg(g,d,c1,c2,c3)}else if(v){a0=r.a
if(a0!=null)a0.fg(f,d,c1,c2,c3)}else if(x){a0=r.a
if(a0!=null)a0.fg(f,p-d,c1,c2,c3)}else{a0=r.a
if(d8){if(a0!=null)a0.fg(g,p-d,c1,c2,c3)}else if(a0!=null)a0.fg(d,g,c1,c2,c3)}++d}++g}break
case 4:x=d9.c
if(x==null)throw B.n(A.c8("Unsupported color mode (4 components)"))
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
d2=255-D.c.b3(D.d.C(a1+1.402*d0),0,255)
d5=b9-128
d3=255-D.d.C(D.d.b3(a1-0.3441363*d5-0.71413636*d0,0,255))
a1=255-D.c.b3(D.d.C(a1+1.772*d5),0,255)}d0=D.c.S(d2*d4,8)
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
default:throw B.n(A.c8("Unsupported color mode"))}return r},
d6A(d,e,f,g,h,i){A.d6x(i,d,e,f,g,h,!0,i)},
d6B(d,e,f,g,h,i){A.d6y(i,d,e,f,g,h,!0,i)},
d6z(d,e,f,g,h,i){A.d6w(i,d,e,f,g,h,!0,i)},
Tv(d,e,f,g,h){var x,w,v
for(x=0;x<g;++x){w=J.v(d.a,d.d+x)
v=J.v(e.a,e.d+x)
J.bW(f.a,f.d+x,w+v)}},
d6x(d,e,f,g,h,i,j,k){var x,w,v=null,u=h*g,t=h+i,s=A.cY(d,!1,v,u),r=A.cY(d,!1,v,u),q=A.cb(r,v,0)
if(h===0){r.m(0,0,J.v(s.a,s.d))
A.Tv(A.cb(s,v,1),q,A.cb(r,v,1),e-1,!0)
q.d+=g
s.d+=g
r.d+=g
h=1}for(x=-g,w=e-1;h<t;){A.Tv(s,A.cb(q,v,x),r,1,!0)
A.Tv(A.cb(s,v,1),q,A.cb(r,v,1),w,!0);++h
q.d+=g
s.d+=g
r.d+=g}},
d6y(d,e,f,g,h,i,j,k){var x=null,w=h*g,v=h+i,u=A.cY(d,!1,x,w),t=A.cY(k,!1,x,w),s=A.cb(t,x,0)
if(h===0){t.m(0,0,J.v(u.a,u.d))
A.Tv(A.cb(u,x,1),s,A.cb(t,x,1),e-1,!0)
u.d+=g
t.d+=g
h=1}else s.d-=g
for(;h<v;){A.Tv(u,s,t,e,!0);++h
s.d+=g
u.d+=g
t.d+=g}},
d6w(d,e,f,g,h,i,j,k){var x,w,v,u,t,s=null,r=h*g,q=h+i,p=A.cY(d,!1,s,r),o=A.cY(k,!1,s,r),n=A.cb(o,s,0)
if(h===0){o.m(0,0,J.v(p.a,p.d))
A.Tv(A.cb(p,s,1),n,A.cb(o,s,1),e-1,!0)
n.d+=g
p.d+=g
o.d+=g
h=1}for(x=-g;h<q;){A.Tv(p,A.cb(n,s,x),o,1,!0)
for(w=1;w<e;++w){v=w-g
u=J.v(n.a,n.d+(w-1))+J.v(n.a,n.d+v)-J.v(n.a,n.d+(v-1))
if((u&4294967040)>>>0===0)t=u
else t=u<0?0:255
v=J.v(p.a,p.d+w)
J.bW(o.a,o.d+w,v+t)}++h
n.d+=g
p.d+=g
o.d+=g}},
dev(d){var x="ifd0",w=A.BR(d,!1,!1)
if(!d.gwO().i(0,x).a.a7(0,274)||d.gwO().i(0,x).gik(0)===1)return w
w.e=A.ZX(d.gwO())
w.gwO().i(0,x).sik(0,null)
switch(d.gwO().i(0,x).gik(0)){case 2:return A.aVS(w)
case 3:return A.dho(w,C.arx)
case 4:return A.aVS(A.aVL(w,180))
case 5:return A.aVS(A.aVL(w,90))
case 6:return A.aVL(w,90)
case 7:return A.aVS(A.aVL(w,-90))
case 8:return A.aVL(w,-90)}return w},
dfg(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null
a1.grq()
if(a1.gwO().i(0,"ifd0").a.a7(0,274)&&a1.gwO().i(0,"ifd0").gik(0)!==1)a1=A.dev(a1)
x=D.d.aT(a2*(a1.gb5(0)/a1.gd0(0)))
if(a2<=0)a2=D.d.aT(x*(a1.gd0(0)/a1.gb5(0)))
if(a2===a1.gd0(0)&&x===a1.gb5(0))return A.BR(a1,!1,!1)
w=new Int32Array(a2)
v=a1.gd0(0)/a2
for(u=0;u<a2;++u)w[u]=D.d.C(u*v)
t=new Int32Array(x)
s=a1.gb5(0)/x
for(r=0;r<x;++r)t[r]=D.d.C(r*s)
q=a1.gl7().length
for(p=y.g,o=a0,n=0;n<q;++n){m=a1.x
l=(m===$?a1.x=B.a([],p):m)[n]
k=A.aro(l,x,!0,a2)
j=o==null
if(!j)o.nz(k)
if(j)o=k
j=l.a
i=j==null
h=i?a0:j.b
s=(h==null?0:h)/x
if((i?a0:j.geU())!=null)for(r=0;r<x;++r){g=D.d.C(r*s)
for(u=0;u<a2;++u){j=w[u]
i=l.a
if(i==null)j=a0
else{j=i.o0(j,g)
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
aVL(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=D.c.an(a8,360)
a7.grq()
if(D.c.an(a6,90)===0)switch(D.c.b2(a6,90)){case 1:return A.ddi(a7)
case 2:return A.ddg(a7)
case 3:return A.ddh(a7)
default:return A.BR(a7,!1,!1)}x=a6*3.141592653589793/180
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
m=a7.gl7().length
for(u=y.g,l=a5,k=0;k<m;++k){j=a7.x
i=(j===$?a7.x=B.a([],u):j)[k]
t=l==null
h=t?a5:l.WV()
if(h==null){g=D.d.C(s)
h=A.aro(a7,D.d.C(r),!0,g)}if(t)l=h
for(t=h.a,t=t.ga5(t);t.q();){f=t.gL(t)
e=f.gne(f)
d=f.gnZ(f)
g=e-o
a0=d-n
a1=q+g*w+a0*v
a2=p-g*v+a0*w
g=!1
if(a1>=0)if(a2>=0){a0=i.a
a3=a0==null
a4=a3?a5:a0.a
if(a1<(a4==null?0:a4)){g=a3?a5:a0.b
g=a2<(g==null?0:g)}}if(g)h.AK(e,d,i.aIV(a1,a2,C.auV))}}l.toString
return l},
ddi(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gl7(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.S)(x),++u){t=x[u]
s=v==null
r=s?k:v.WV()
if(r==null){q=t.a
p=q==null
o=p?k:q.b
if(o==null)o=0
q=p?k:q.a
r=A.aro(t,q==null?0:q,!0,o)}if(s)v=r
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
r.AK(l,m,s==null?new A.fk():s);++l}++m}}v.toString
return v},
ddg(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gl7(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.S)(x),++u){t=x[u]
s=t.a
r=s==null
q=r?k:s.a
p=(q==null?0:q)-1
s=r?k:s.b
o=(s==null?0:s)-1
s=v==null
n=s?k:v.WV()
if(n==null)n=A.BR(t,!0,!0)
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
n.AK(l,m,r==null?new A.fk():r);++l}++m}}v.toString
return v},
ddh(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gl7(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.S)(x),++u){t=x[u]
s=d.a
s=s==null?k:s.a
r=(s==null?0:s)-1
s=v==null
q=s?k:v.WV()
if(q==null){p=t.a
o=p==null
n=o?k:p.b
if(n==null)n=0
p=o?k:p.a
q=A.aro(t,p==null?0:p,!0,n)}if(s)v=q
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
q.AK(l,m,p==null?new A.fk():p);++l}++m}}v.toString
return v},
cob(d){var x
d=(d&-d)>>>0
x=d!==0?31:32
if((d&65535)!==0)x-=16
if((d&16711935)!==0)x-=8
if((d&252645135)!==0)x-=4
if((d&858993459)!==0)x-=2
return(d&1431655765)!==0?x-1:x},
dkD(d){$.cyj().m(0,0,d)
return $.cQv().i(0,0)},
cMP(d,e,f,g){return(D.c.b3(d,0,255)|D.c.b3(e,0,255)<<8|D.c.b3(f,0,255)<<16|D.c.b3(g,0,255)<<24)>>>0},
vm(d,e,f){var x,w,v,u,t,s=e.gu(e),r=e.gdt(),q=d.geU(),p=q==null?null:q.gdt()
if(p==null)p=d.gdt()
x=d.gu(d)
if(s===1){w=d.gu(d)>2?d.gjy():d.i(0,0)
e.m(0,0,A.aVJ(B.h8(d.i(0,0))?D.d.fv(w):w,p,r))}else if(s<=x)for(v=0;v<s;++v)e.m(0,v,A.aVJ(d.i(0,v),p,r))
else if(x===2){u=A.aVJ(d.i(0,0),p,r)
if(s===3){e.m(0,0,u)
e.m(0,1,u)
e.m(0,2,u)}else{f=A.aVJ(d.i(0,1),p,r)
e.m(0,0,u)
e.m(0,1,u)
e.m(0,2,u)
e.m(0,3,f)}}else{for(v=0;v<x;++v)e.m(0,v,A.aVJ(d.i(0,v),p,r))
t=x===1?e.i(0,0):0
for(v=x;v<s;++v)e.m(0,v,v===3?f:t)}return e},
pI(d,e,f,g,h){var x,w,v=d.geU(),u=v==null?null:v.gdt()
if(u==null)u=d.gdt()
v=h==null
x=v?null:h.gdt()
f=x==null?f:x
if(f==null)f=d.gdt()
x=v?null:h.gu(h)
g=x==null?g:x
if(g==null)g=d.gu(d)
if(e==null)e=0
if(f===u&&g===d.gu(d)){if(v)return d.dT(0)
h.iJ(0,d)
return h}switch(f.a){case 3:if(v)w=new A.y_(new Uint8Array(g))
else w=h
return A.vm(d,w,e)
case 0:return A.vm(d,v?new A.Nv(g,0):h,e)
case 1:return A.vm(d,v?new A.Nx(g,0):h,e)
case 2:if(v){v=g<3?1:2
w=new A.Nz(g,new Uint8Array(v))}else w=h
return A.vm(d,w,e)
case 4:if(v)w=new A.Nw(new Uint16Array(g))
else w=h
return A.vm(d,w,e)
case 5:if(v)w=new A.Ny(new Uint32Array(g))
else w=h
return A.vm(d,w,e)
case 6:if(v)w=new A.Ns(new Int8Array(g))
else w=h
return A.vm(d,w,e)
case 7:if(v)w=new A.Nq(new Int16Array(g))
else w=h
return A.vm(d,w,e)
case 8:if(v)w=new A.Nr(new Int32Array(g))
else w=h
return A.vm(d,w,e)
case 9:if(v)w=new A.Nn(new Uint16Array(g))
else w=h
return A.vm(d,w,e)
case 10:if(v)w=new A.No(new Float32Array(g))
else w=h
return A.vm(d,w,e)
case 11:if(v)w=new A.Np(new Float64Array(g))
else w=h
return A.vm(d,w,e)}},
jh(d){return 0.299*d.gaf(d)+0.587*d.gap()+0.114*d.gau(d)},
cLu(d,e,f,g,h){var x=1-g/255
h[0]=D.d.aT(255*(1-d/255)*x)
h[1]=D.d.aT(255*(1-e/255)*x)
h[2]=D.d.aT(255*(1-f/255)*x)},
h0(d){var x,w,v,u=$.cyi()
u.$flags&2&&B.E(u)
u[0]=d
x=$.cQu()[0]
if(d===0)return x>>>16
if($.hU==null)A.iJ()
w=$.cC0.cp()[x>>>23&511]
if(w!==0){v=x&8388607
return w+(v+4095+(v>>>13&1)>>>13)}return A.cXD(x)},
cXD(d){var x,w,v=d>>>16&32768,u=(d>>>23&255)-112,t=d&8388607
if(u<=0){if(u<-10)return v
t|=8388608
x=14-u
return(v|D.c.o3(t+(D.c.eW(1,x-1)-1)+(D.c.h1(t,x)&1),x))>>>0}else if(u===143)if(t===0)return v|31744
else{t=t>>>13
w=t===0?1:0
return v|t|w|31744}else{t=t+4095+(t>>>13&1)
if((t&8388608)!==0){++u
t=0}if(u>30)return v|31744
return(v|u<<10|t>>>13)>>>0}},
iJ(){var x,w,v,u,t=$.hU
if(t!=null)return t
x=new Uint32Array(65536)
$.hU=J.aWA(D.by.gaj(x),0,null)
t=new Uint16Array(512)
$.cC0.b=t
for(w=0;w<256;++w){v=(w&255)-112
if(v<=0||v>=30){t[w]=0
t[(w|256)>>>0]=0}else{u=v<<10>>>0
t[w]=u
t[(w|256)>>>0]=(u|32768)>>>0}}for(w=0;w<65536;++w)x[w]=A.cXE(w)
t=$.hU
t.toString
return t},
cXE(d){var x,w=d>>>15&1,v=d>>>10&31,u=d&1023
if(v===0)if(u===0)return w<<31>>>0
else{for(;(u&1024)===0;){u=u<<1;--v}++v
u&=4294966271}else if(v===31){x=w<<31
if(u===0)return(x|2139095040)>>>0
else return(x|u<<13|2139095040)>>>0}return(w<<31|v+112<<23|u<<13)>>>0}},C,E
J=c[1]
B=c[0]
D=c[2]
A=a.updateHolder(c[56],A)
C=c[358]
E=c[165]
A.a05.prototype={
a2A(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.length
for(x=0;x<k;++x){w=d[x]
if(w>l.b)l.b=w
if(w<l.c)l.c=w}w=l.b
v=D.c.eW(1,w)
u=new Uint32Array(v)
l.a=u
for(t=1,s=0,r=2;t<=w;){for(q=t<<16,x=0;x<k;++x)if(d[x]===t){for(p=s,o=0,n=0;n<t;++n){o=(o<<1|p&1)>>>0
p=p>>>1}for(m=(q|x)>>>0,n=o;n<v;n+=r)u[n]=m;++s}++t
s=s<<1>>>0
r=r<<1>>>0}}}
A.bNM.prototype={}
A.clP.prototype={
bxt(d,e,f,g){var x,w,v,u,t,s=null
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
x.a2A(C.aJH)
w=new A.a05()
w.a2A(C.azQ)
v=new A.awd(new Uint8Array(32768),C.q9)
new A.biR(d,v,x,w).baF()
s=J.df(D.D.gaj(v.c),v.c.byteOffset,v.b)
d.a3()}if(s!=null)e.m7(s)
return!0}}
A.bNN.prototype={}
A.clQ.prototype={
aAe(d,e){var x=A.cEJ(C.nn,32768)
this.bz4(A.bj7(d,C.q9,null,null),x,e,!1,null)
return x.af5()},
bz4(d,e,f,g,h){var x,w,v,u,t,s,r,q,p
e.a=C.nn
x=(D.c.b3(15,0,15)-8<<4|8)>>>0
e.b1(x)
w=x*256
for(v=0;u=(v|0)>>>0,D.c.an(w+u,31)!==0;)++v
e.b1(u)
t=d.c
s=A.dhL(d)
d.c=t
u=f==null?6:f
A.cVY(d,u,e,15)
u=s&255
r=s>>>24&255
q=s>>>16&255
p=s>>>8&255
if(e.a===C.nn){e.b1(r)
e.b1(q)
e.b1(p)
e.b1(u)}else{e.b1(u)
e.b1(p)
e.b1(q)
e.b1(r)}}}
A.TY.prototype={
J(){return"_DeflateFlushMode."+this.b}}
A.b6T.prototype={
b_w(d,e){var x,w,v,u,t=this,s=!0
if(e>=9)if(e<=15)s=d>9
if(s)return!1
x=t.b2R(d)
if(x==null)return!1
$.vN.b=x
s=new Uint16Array(1146)
t.p1=s
w=new Uint16Array(122)
t.p2=w
v=new Uint16Array(78)
t.p3=v
t.as=e
u=t.Q=D.c.eo(1,e)
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
t.c1=16384
t.xr=49152
t.k4=d
t.w=t.x=t.ok=0
t.c=113
t.d=0
u=t.p4
u.a=s
u.c=$.cQd()
u=t.R8
u.a=w
u.c=$.cQc()
u=t.RG
u.a=v
u.c=$.cQb()
t.E=t.by=0
t.bo=8
t.aoQ()
t.bbS()
return!0},
b_v(d){var x,w,v,u,t=this,s=t.x
s===$&&B.b()
if(s!==0)t.a3G()
s=t.a
x=s.c
s=s.d
s===$&&B.b()
w=!0
if(x>=s){s=t.k2
s===$&&B.b()
if(s===0)s=d!==C.zg&&t.c!==666
else s=w}else s=w
if(s){switch($.vN.cp().e){case 0:v=t.b_z(d)
break
case 1:v=t.b_x(d)
break
case 2:v=t.b_y(d)
break
default:v=-1
break}s=v===2
if(s||v===3)t.c=666
if(v===0||s)return 0
if(v===1){if(d===C.bJy){t.ly(2,3)
t.FZ(256,C.uh)
t.ax1()
s=t.bo
s===$&&B.b()
x=t.E
x===$&&B.b()
if(1+s+10-x<9){t.ly(2,3)
t.FZ(256,C.uh)
t.ax1()}t.bo=7}else{t.aug(0,0,!1)
if(d===C.bJz){s=t.cy
s===$&&B.b()
x=t.CW
u=0
for(;u<s;++u){x===$&&B.b()
x.$flags&2&&B.E(x)
x[u]=0}}}t.a3G()}}if(d!==C.pQ)return 0
return 1},
bbS(){var x,w,v=this,u=v.Q
u===$&&B.b()
v.ay=2*u
u=v.CW
u===$&&B.b()
x=v.cy
x===$&&B.b();--x
u.$flags&2&&B.E(u)
u[x]=0
for(w=0;w<x;++w)u[w]=0
v.k2=v.fr=v.id=0
v.fx=v.k3=2
v.cx=v.go=0},
aoQ(){var x,w,v,u=this
for(x=u.p1,w=0;w<286;++w){x===$&&B.b()
x.$flags&2&&B.E(x)
x[w*2]=0}for(v=u.p2,w=0;w<30;++w){v===$&&B.b()
v.$flags&2&&B.E(v)
v[w*2]=0}for(v=u.p3,w=0;w<19;++w){v===$&&B.b()
v.$flags&2&&B.E(v)
v[w*2]=0}x===$&&B.b()
x.$flags&2&&B.E(x)
x[512]=1
u.y2=u.bb=u.bQ=u.aK=0},
a62(d,e){var x,w,v=this.ry,u=v[e],t=e<<1>>>0,s=v.$flags|0,r=this.x2
while(!0){x=this.to
x===$&&B.b()
if(!(t<=x))break
if(t<x&&A.cAR(d,v[t+1],v[t],r))++t
if(A.cAR(d,u,v[t],r))break
x=v[t]
s&2&&B.E(v)
v[e]=x
w=t<<1>>>0
e=t
t=w}s&2&&B.E(v)
v[e]=u},
asd(d,e){var x,w,v,u,t,s,r,q,p,o,n=d[1]
if(n===0){x=138
w=3}else{x=7
w=4}d.$flags&2&&B.E(d)
d[(e+1)*2+1]=65535
for(v=this.p3,u=0,t=-1,s=0;u<=e;n=r){++u
r=d[u*2+1];++s
if(s<x&&n===r)continue
else{q=3
if(s<w){v===$&&B.b()
p=n*2
o=v[p]
v.$flags&2&&B.E(v)
v[p]=o+s}else if(n!==0){if(n!==t){v===$&&B.b()
p=n*2
o=v[p]
v.$flags&2&&B.E(v)
v[p]=o+1}v===$&&B.b()
p=v[32]
v.$flags&2&&B.E(v)
v[32]=p+1}else if(s<=10){v===$&&B.b()
p=v[34]
v.$flags&2&&B.E(v)
v[34]=p+1}else{v===$&&B.b()
p=v[36]
v.$flags&2&&B.E(v)
v[36]=p+1}}if(r===0){w=q
x=138}else if(n===r){w=q
x=6}else{x=7
w=4}t=n
s=0}},
aWr(){var x,w,v=this,u=v.p1
u===$&&B.b()
x=v.p4.b
x===$&&B.b()
v.asd(u,x)
x=v.p2
x===$&&B.b()
u=v.R8.b
u===$&&B.b()
v.asd(x,u)
v.RG.a31(v)
for(u=v.p3,w=18;w>=3;--w){u===$&&B.b()
if(u[C.Dq[w]*2+1]!==0)break}u=v.bQ
u===$&&B.b()
v.bQ=u+(3*(w+1)+5+5+4)
return w},
bl1(d,e,f){var x,w,v,u=this
u.ly(d-257,5)
x=e-1
u.ly(x,5)
u.ly(f-4,4)
for(w=0;w<f;++w){v=u.p3
v===$&&B.b()
u.ly(v[C.Dq[w]*2+1],3)}v=u.p1
v===$&&B.b()
u.asM(v,d-1)
v=u.p2
v===$&&B.b()
u.asM(v,x)},
asM(d,e){var x,w,v,u,t,s,r,q,p,o,n=this,m=d[1]
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
n.ly(o[q]&65535,o[p]&65535)}while(--t,t!==0)}else if(m!==0){if(m!==u){q=n.p3
q===$&&B.b()
p=m*2
n.ly(q[p]&65535,q[p+1]&65535);--t}q=n.p3
q===$&&B.b()
n.ly(q[32]&65535,q[33]&65535)
n.ly(t-3,2)}else{q=n.p3
if(t<=10){q===$&&B.b()
n.ly(q[34]&65535,q[35]&65535)
n.ly(t-3,3)}else{q===$&&B.b()
n.ly(q[36]&65535,q[37]&65535)
n.ly(t-11,7)}}}if(s===0){w=r
x=138}else if(m===s){w=r
x=6}else{x=7
w=4}u=m
t=0}},
bi2(d,e,f){var x,w,v=this
if(f===0)return
x=v.f
x===$&&B.b()
w=v.x
w===$&&B.b()
D.D.e3(x,w,w+f,d,e)
v.x=v.x+f},
qH(d){var x,w=this.f
w===$&&B.b()
x=this.x
x===$&&B.b()
this.x=x+1
w.$flags&2&&B.E(w)
w[x]=d},
FZ(d,e){var x=d*2
this.ly(e[x]&65535,e[x+1]&65535)},
ly(d,e){var x,w=this,v=w.E
v===$&&B.b()
x=w.by
if(v>16-e){x===$&&B.b()
v=w.by=(x|D.c.eW(d,v)&65535)>>>0
w.qH(v)
w.qH(A.pH(v,8))
w.by=A.pH(d,16-w.E)
w.E=w.E+(e-16)}else{x===$&&B.b()
w.by=(x|D.c.eW(d,v)&65535)>>>0
w.E=v+e}},
ME(d,e){var x,w,v,u,t,s=this,r=s.f
r===$&&B.b()
x=s.c1
x===$&&B.b()
w=s.y2
w===$&&B.b()
v=A.pH(d,8)
r.$flags&2&&B.E(r)
r[x+w*2]=v
v=s.f
w=s.c1
x=s.y2
v.$flags&2&&B.E(v)
v[w+x*2+1]=d
w=s.xr
w===$&&B.b()
v[w+x]=e
s.y2=x+1
if(d===0){r=s.p1
r===$&&B.b()
x=e*2
w=r[x]
r.$flags&2&&B.E(r)
r[x]=w+1}else{r=s.bb
r===$&&B.b()
s.bb=r+1
r=s.p1
r===$&&B.b()
x=(C.P8[e]+256+1)*2
w=r[x]
r.$flags&2&&B.E(r)
r[x]=w+1
w=s.p2
w===$&&B.b()
x=A.cIN(d-1)*2
r=w[x]
w.$flags&2&&B.E(w)
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
u+=w[t*2]*(5+C.u2[t])}u=A.pH(u,3)
w=s.bb
w===$&&B.b()
v=s.y2
if(w<v/2&&u<(r-x)/2)return!0
r=v}x=s.y1
x===$&&B.b()
return r===x-1},
akB(d,e){var x,w,v,u,t,s,r=this,q=r.y2
q===$&&B.b()
if(q!==0){x=0
do{q=r.f
q===$&&B.b()
w=r.c1
w===$&&B.b()
w+=x*2
v=q[w]<<8&65280|q[w+1]&255
w=r.xr
w===$&&B.b()
u=q[w+x]&255;++x
if(v===0)r.FZ(u,d)
else{t=C.P8[u]
r.FZ(t+256+1,d)
s=C.Nh[t]
if(s!==0)r.ly(u-C.awF[t],s);--v
t=A.cIN(v)
r.FZ(t,e)
s=C.u2[t]
if(s!==0)r.ly(v-C.azz[t],s)}}while(x<r.y2)}r.FZ(256,d)
r.bo=d[513]},
aKW(){var x,w,v,u
for(x=this.p1,w=0,v=0;w<7;){x===$&&B.b()
v+=x[w*2];++w}for(u=0;w<128;){x===$&&B.b()
u+=x[w*2];++w}for(;w<256;){x===$&&B.b()
v+=x[w*2];++w}this.y=v>A.pH(u,2)?0:1},
ax1(){var x=this,w=x.E
w===$&&B.b()
if(w===16){w=x.by
w===$&&B.b()
x.qH(w)
x.qH(A.pH(w,8))
x.E=x.by=0}else if(w>=8){w=x.by
w===$&&B.b()
x.qH(w)
x.by=A.pH(x.by,8)
x.E=x.E-8}},
ajn(){var x=this,w=x.E
w===$&&B.b()
if(w>8){w=x.by
w===$&&B.b()
x.qH(w)
x.qH(A.pH(w,8))}else if(w>0){w=x.by
w===$&&B.b()
x.qH(w)}x.E=x.by=0},
yu(d){var x,w,v,u,t,s=this,r=s.fr
r===$&&B.b()
if(r>=0)x=r
else x=-1
w=s.id
w===$&&B.b()
r=w-r
w=s.k4
w===$&&B.b()
if(w>0){if(s.y===2)s.aKW()
s.p4.a31(s)
s.R8.a31(s)
v=s.aWr()
w=s.bQ
w===$&&B.b()
u=A.pH(w+3+7,3)
w=s.aK
w===$&&B.b()
t=A.pH(w+3+7,3)
if(t<=u)u=t}else{t=r+5
u=t
v=0}if(r+4<=u&&x!==-1)s.aug(x,r,d)
else if(t===u){s.ly(2+(d?1:0),3)
s.akB(C.uh,C.PR)}else{s.ly(4+(d?1:0),3)
r=s.p4.b
r===$&&B.b()
x=s.R8.b
x===$&&B.b()
s.bl1(r+1,x+1,v+1)
x=s.p1
x===$&&B.b()
r=s.p2
r===$&&B.b()
s.akB(x,r)}s.aoQ()
if(d)s.ajn()
s.fr=s.id
s.a3G()},
b_z(d){var x,w,v,u,t,s=this,r=s.r
r===$&&B.b()
x=r-5
x=65535>x?x:65535
for(r=d===C.zg;!0;){w=s.k2
w===$&&B.b()
if(w<=1){s.a42()
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
s.yu(!1)}w=s.id
v=s.fr
t=s.Q
t===$&&B.b()
if(w-v>=t-262)s.yu(!1)}r=d===C.pQ
s.yu(r)
return r?3:1},
aug(d,e,f){var x,w=this
w.ly(f?1:0,3)
w.ajn()
w.bo=8
w.qH(e)
w.qH(A.pH(e,8))
x=(~e>>>0)+65536&65535
w.qH(x)
w.qH(A.pH(x,8))
x=w.ax
x===$&&B.b()
w.bi2(x,d,e)},
a42(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.a
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
D.D.e3(w,0,x,w,x)
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
v&2&&B.E(w)
w[s]=x}while(--r,r!==0)
x=n.ch
x===$&&B.b()
w=x.$flags|0
s=t
r=s
do{--s
q=x[s]&65535
v=q>=t?q-t:0
w&2&&B.E(x)
x[s]=v}while(--r,r!==0)
u+=t}}x=m.c
w=m.d
w===$&&B.b()
if(x>=w)return
x=n.ax
x===$&&B.b()
r=n.bib(x,n.id+n.k2,u)
x=n.k2=n.k2+r
if(x>=3){w=n.ax
v=n.id
p=w[v]&255
n.cx=p
o=n.dy
o===$&&B.b()
o=D.c.eW(p,o)
v=w[v+1]
w=n.dx
w===$&&B.b()
n.cx=((o^v&255)&w)>>>0}}while(x<262&&!(m.c>=m.d))},
b_x(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
for(x=d===C.zg,w=$.vN.a,v=0;!0;){u=m.k2
u===$&&B.b()
if(u<262){m.a42()
u=m.k2
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=m.cx
u===$&&B.b()
t=m.dy
t===$&&B.b()
t=D.c.eW(u,t)
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
q.$flags&2&&B.E(q)
q[(s&p)>>>0]=t
u.$flags&2&&B.E(u)
u[r]=s}if(v!==0){u=m.id
u===$&&B.b()
t=m.Q
t===$&&B.b()
t=(u-v&65535)<=t-262
u=t}else u=!1
if(u){u=m.ok
u===$&&B.b()
if(u!==2)m.fx=m.apz(v)}u=m.fx
u===$&&B.b()
t=m.id
if(u>=3){t===$&&B.b()
o=m.ME(t-m.k1,u-3)
u=m.k2
t=m.fx
u-=t
m.k2=u
s=$.vN.b
if(s===$.vN)B.a7(B.wg(w))
if(t<=s.b&&u>=3){u=m.fx=t-1
do{t=m.id=m.id+1
s=m.cx
s===$&&B.b()
r=m.dy
r===$&&B.b()
r=D.c.eW(s,r)
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
p.$flags&2&&B.E(p)
p[(t&n)>>>0]=r
s.$flags&2&&B.E(s)
s[q]=t}while(u=m.fx=u-1,u!==0)
m.id=t+1}else{u=m.id=m.id+t
m.fx=0
t=m.ax
t===$&&B.b()
s=t[u]&255
m.cx=s
r=m.dy
r===$&&B.b()
r=D.c.eW(s,r)
u=t[u+1]
t=m.dx
t===$&&B.b()
m.cx=((r^u&255)&t)>>>0}}else{u=m.ax
u===$&&B.b()
t===$&&B.b()
o=m.ME(0,u[t]&255)
m.k2=m.k2-1
m.id=m.id+1}if(o)m.yu(!1)}x=d===C.pQ
m.yu(x)
return x?3:1},
b_y(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
for(x=d===C.zg,w=$.vN.a,v=0;!0;){u=l.k2
u===$&&B.b()
if(u<262){l.a42()
u=l.k2
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=l.cx
u===$&&B.b()
t=l.dy
t===$&&B.b()
t=D.c.eW(u,t)
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
q.$flags&2&&B.E(q)
q[(s&p)>>>0]=t
u.$flags&2&&B.E(u)
u[r]=s}u=l.fx
u===$&&B.b()
l.k3=u
l.fy=l.k1
l.fx=2
t=!1
if(v!==0){s=$.vN.b
if(s===$.vN)B.a7(B.wg(w))
if(u<s.b){u=l.id
u===$&&B.b()
t=l.Q
t===$&&B.b()
t=(u-v&65535)<=t-262
u=t}else u=t}else u=t
t=2
if(u){u=l.ok
u===$&&B.b()
if(u!==2){u=l.apz(v)
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
n=l.ME(u-1-l.fy,t-3)
t=l.k2
u=l.k3
l.k2=t-(u-1)
u=l.k3=u-2
do{t=l.id=l.id+1
if(t<=o){s=l.cx
s===$&&B.b()
r=l.dy
r===$&&B.b()
r=D.c.eW(s,r)
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
p.$flags&2&&B.E(p)
p[(t&m)>>>0]=r
s.$flags&2&&B.E(s)
s[q]=t}}while(u=l.k3=u-1,u!==0)
l.go=0
l.fx=2
l.id=t+1
if(n)l.yu(!1)}else{u=l.go
u===$&&B.b()
if(u!==0){u=l.ax
u===$&&B.b()
t=l.id
t===$&&B.b()
if(l.ME(0,u[t-1]&255))l.yu(!1)
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
l.ME(0,x[w-1]&255)
l.go=0}x=d===C.pQ
l.yu(x)
return x?3:1},
apz(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=$.vN.cp().d,h=j.id
h===$&&B.b()
x=j.k3
x===$&&B.b()
w=j.Q
w===$&&B.b()
w-=262
v=h>w?h-w:0
u=$.vN.cp().c
w=j.at
w===$&&B.b()
t=j.id+258
s=j.ax
s===$&&B.b()
r=h+x
q=s[r-1]
p=s[r]
if(j.k3>=$.vN.cp().a)i=i>>>2
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
bib(d,e,f){var x,w,v,u,t,s,r=this
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
D.D.hZ(d,e,e+u,t)
r.e+=u
r.d=A.xv(t,r.d)
return u},
a3G(){var x,w=this,v=w.x
v===$&&B.b()
x=w.f
x===$&&B.b()
w.b.aH8(x,v)
x=w.w
x===$&&B.b()
w.w=x+v
v=w.x-v
w.x=v
if(v===0)w.w=0},
b2R(d){switch(d){case 0:return new A.te(0,0,0,0,0)
case 1:return new A.te(4,4,8,4,1)
case 2:return new A.te(4,5,16,8,1)
case 3:return new A.te(4,6,32,32,1)
case 4:return new A.te(4,4,16,16,2)
case 5:return new A.te(8,16,32,32,2)
case 6:return new A.te(8,16,128,128,2)
case 7:return new A.te(8,32,128,256,2)
case 8:return new A.te(32,128,258,1024,2)
case 9:return new A.te(32,258,258,4096,2)}return null}}
A.te.prototype={}
A.c0t.prototype={
b2A(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a
d===$&&B.b()
x=e.c
x===$&&B.b()
w=x.a
v=x.b
u=x.c
t=x.e
for(x=a0.rx,s=x.$flags|0,r=0;r<=15;++r){s&2&&B.E(x)
x[r]=0}q=a0.ry
p=a0.x1
p===$&&B.b()
o=q[p]
d.$flags&2&&B.E(d)
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
s&2&&B.E(x)
x[r]=j+1
i=l>=u?v[l-u]:0
h=d[o]
o=a0.bQ
o===$&&B.b()
a0.bQ=o+h*(r+i)
if(p){o=a0.aK
o===$&&B.b()
a0.aK=o+h*(w[k]+i)}}if(m===0)return
r=t-1
do{for(g=r;p=x[g],p===0;)--g
s&2&&B.E(x)
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
if(o!==r){k=a0.bQ
k===$&&B.b()
a0.bQ=k+(r-o)*d[s]
d[p]=r}--l}}},
a31(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
g===$&&B.b()
x=h.c
x===$&&B.b()
w=x.a
v=x.d
d.to=0
d.x1=573
for(x=g.$flags|0,u=d.ry,t=u.$flags|0,s=d.x2,r=s.$flags|0,q=0,p=-1;q<v;++q){o=q*2
if(g[o]!==0){o=++d.to
t&2&&B.E(u)
u[o]=q
r&2&&B.E(s)
s[q]=0
p=q}else{x&2&&B.E(g)
g[o+1]=0}}for(o=w!=null;n=d.to,n<2;){++n
d.to=n
if(p<2){++p
m=p}else m=0
t&2&&B.E(u)
u[n]=m
n=m*2
x&2&&B.E(g)
g[n]=1
r&2&&B.E(s)
s[m]=0
l=d.bQ
l===$&&B.b()
d.bQ=l-1
if(o){l=d.aK
l===$&&B.b()
d.aK=l-w[n+1]}}h.b=p
for(q=D.c.b2(n,2);q>=1;--q)d.a62(g,q)
m=v
do{q=u[1]
o=u[d.to--]
t&2&&B.E(u)
u[1]=o
d.a62(g,1)
k=u[1]
o=--d.x1
u[o]=q;--o
d.x1=o
u[o]=k
o=q*2
n=g[o]
l=k*2
j=g[l]
x&2&&B.E(g)
g[m*2]=n+j
j=s[q]
n=s[k]
if(j>n)n=j
r&2&&B.E(s)
s[m]=n+1
g[l+1]=m
g[o+1]=m
i=m+1
u[1]=m
d.a62(g,1)
if(d.to>=2){m=i
continue}else break}while(!0)
u[--d.x1]=u[1]
h.b2A(d)
A.d7V(g,p,d.rx)}}
A.ceP.prototype={}
A.biR.prototype={
guv(){var x=this.a
if(x==null)return x
x.d===$&&B.b()
return x},
baF(){var x,w,v=this
v.e=v.d=0
if(v.guv()==null)return
while(!0){x=v.guv()
w=x.c
x=x.d
x===$&&B.b()
if(!(w<x))break
if(!v.bgq())return}},
bgq(){var x,w,v,u=this,t=u.guv()
if(t!=null){x=t.c
w=t.d
w===$&&B.b()
w=x>=w
x=w}else x=!0
if(x)return!1
v=u.qI(3)
switch(D.c.S(v,1)){case 0:if(u.bgK()===-1)return!1
break
case 1:if(u.al6(u.r,u.w)===-1)return!1
break
case 2:if(u.bgu()===-1)return!1
break
default:return!1}return(v&1)===0},
qI(d){var x,w,v,u,t=this
if(d===0)return 0
for(;x=t.e,x<d;){x=t.guv()
w=x.c
x=x.d
x===$&&B.b()
if(w>=x)return-1
x=t.guv()
w=x.b
w.toString
v=w[x.c++]
x=t.d
w=t.e
t.d=(x|D.c.eW(v,w))>>>0
t.e=w+8}w=t.d
u=D.c.eo(1,d)
t.d=D.c.hA(w,d)
t.e=x-d
return(w&u-1)>>>0},
a67(d){var x,w,v,u,t,s,r=this,q=d.a
q===$&&B.b()
x=d.b
for(;w=r.e,w<x;){w=r.guv()
v=w.c
w=w.d
w===$&&B.b()
if(v>=w)return-1
w=r.guv()
v=w.b
v.toString
u=v[w.c++]
w=r.d
v=r.e
r.d=(w|D.c.eW(u,v))>>>0
r.e=v+8}v=r.d
t=q[(v&D.c.eW(1,x)-1)>>>0]
s=t>>>16
r.d=D.c.hA(v,s)
r.e=w-s
return t&65535},
bgK(){var x,w,v=this
v.e=v.d=0
x=v.qI(16)
w=v.qI(16)
if(x!==0&&x!==(w^65535)>>>0)return-1
if(x>v.guv().gu(0))return-1
v.c.bMY(v.guv().jd(x))
return 0},
bgu(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.qI(5)
if(m===-1)return-1
m+=257
if(m>288)return-1
x=n.qI(5)
if(x===-1)return-1;++x
if(x>32)return-1
w=n.qI(4)
if(w===-1)return-1
w+=4
if(w>19)return-1
v=new Uint8Array(19)
for(u=0;u<w;++u){t=n.qI(3)
if(t===-1)return-1
v[C.Dq[u]]=t}s=A.csK(v)
r=m+x
q=new Uint8Array(r)
p=J.df(D.D.gaj(q),0,m)
o=J.df(D.D.gaj(q),m,x)
if(n.aZE(r,s,q)===-1)return-1
return n.al6(A.csK(p),A.csK(o))},
al6(d,e){var x,w,v,u,t,s,r,q,p=this
for(x=p.c;!0;){w=p.a67(d)
if(w<0||w>285)return-1
if(w===256)break
if(w<256){x.b1(w&255)
continue}v=w-257
u=C.aIo[v]+p.qI(C.aJU[v])
t=p.a67(e)
if(t<0||t>29)return-1
s=C.aIv[t]+p.qI(C.u2[t])
for(r=-s;u>s;){x.m7(x.ji(r))
u-=s}if(u===s)x.m7(x.ji(r))
else x.m7(x.ahe(r,u-s))}for(;x=p.e,x>=8;){p.e=x-8
x=p.guv()
r=--x.c
q=x.d
q===$&&B.b()
x.c=D.c.b3(r,0,q)}return 0},
aZE(d,e,f){var x,w,v,u,t,s,r,q,p=this
for(x=f.$flags|0,w=0,v=0;v<d;){u=p.a67(e)
if(u===-1)return-1
t=0
switch(u){case 16:s=p.qI(2)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.E(f)
f[v]=w}break
case 17:s=p.qI(3)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.E(f)
f[v]=0}w=t
break
case 18:s=p.qI(7)
if(s===-1)return-1
s+=11
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.E(f)
f[v]=0}w=t
break
default:if(u<0||u>15)return-1
q=v+1
x&2&&B.E(f)
f[v]=u
v=q
w=u
break}}return 0}}
A.bNL.prototype={
Co(d){var x=A.cEJ(C.q9,32768)
C.ajo.bxt(A.bj7(d,C.nn,null,null),x,!1,!1)
return x.af5()}}
A.ajZ.prototype={
J(){return"ByteOrder."+this.b}}
A.bj6.prototype={
gu(d){var x=this.b
return x==null?0:x.length-this.c},
i(d,e){return this.b[this.c+e]},
aNL(d,e){var x=this.b
if(x==null)return A.bj7(B.a([],y.t),C.q9,null,null)
return A.bj7(x,this.a,d,e)},
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
return J.df(D.D.gaj(v),t.b.byteOffset+t.c,x)}}
A.bj8.prototype={
a3(){var x=this,w=x.ct(),v=x.ct(),u=x.ct(),t=x.ct()
if(x.a===C.nn)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
jd(d){var x=this,w=x.aNL(d,x.c)
x.c=x.c+w.gu(0)
return w}}
A.awd.prototype={
af5(){return J.df(D.D.gaj(this.c),this.c.byteOffset,this.b)},
b1(d){var x,w,v=this
if(v.b===v.c.length)v.bg0()
x=v.c
w=v.b++
x.$flags&2&&B.E(x)
x[w]=d},
aH8(d,e){var x,w,v,u,t=this
if(e==null)e=d.length
for(;x=t.b,w=x+e,v=t.c,u=v.length,w>u;)t.a5N(w-u)
D.D.hZ(v,x,w,d)
t.b+=e},
m7(d){return this.aH8(d,null)},
bMY(d){var x,w,v,u,t,s,r=this
while(!0){x=r.b
w=d.b
v=w==null
u=v?0:w.length-d.c
t=r.c
s=t.length
if(!(x+u>s))break
r.a5N(x+(v?0:w.length-d.c)-s)}if(!v){w=d.gu(0)
v=d.b
v.toString
D.D.e3(t,x,x+w,v,d.c)}r.b=r.b+d.gu(0)},
ahe(d,e){var x=this
if(d<0)d=x.b+d
if(e==null)e=x.b
else if(e<0)e=x.b+e
return J.df(D.D.gaj(x.c),x.c.byteOffset+d,e-d)},
ji(d){return this.ahe(d,null)},
a5N(d){var x=d!=null?d>32768?d:32768:32768,w=this.c,v=w.length,u=new Uint8Array((v+x)*2)
D.D.hZ(u,0,v,w)
this.c=u},
bg0(){return this.a5N(null)},
gu(d){return this.b}}
A.brW.prototype={}
A.b0F.prototype={
J(){return"Channel."+this.b}}
A.hC.prototype={
q(){var x=this.b
return++this.a<x.gu(x)},
gL(d){return this.b.i(0,this.a)},
$ibu:1}
A.Nn.prototype={
dT(d){return new A.Nn(new Uint16Array(B.bZ(this.a)))},
gdt(){return C.iv},
gu(d){return this.a.length},
geU(){return null},
i(d,e){var x,w=this.a
if(e<w.length){w=w[e]
x=$.hU
w=(x!=null?x:A.iJ())[w]}else w=0
return w},
m(d,e,f){var x,w=this.a
if(e<w.length){x=A.h0(f)
w.$flags&2&&B.E(w)
w[e]=x}},
ge6(d){return this.gaf(0)},
gaf(d){var x,w=this.a
if(!D.ea.gV(w)){w=w[0]
x=$.hU
w=(x!=null?x:A.iJ())[w]}else w=0
return w},
saf(d,e){var x,w=this.a
if(!D.ea.gV(w)){x=A.h0(e)
w.$flags&2&&B.E(w)
w[0]=x}},
gap(){var x,w=this.a
if(w.length>1){w=w[1]
x=$.hU
w=(x!=null?x:A.iJ())[w]}else w=0
return w},
sap(d){var x,w=this.a
if(w.length>1){x=A.h0(d)
w.$flags&2&&B.E(w)
w[1]=x}},
gau(d){var x,w=this.a
if(w.length>2){w=w[2]
x=$.hU
w=(x!=null?x:A.iJ())[w]}else w=0
return w},
sau(d,e){var x,w=this.a
if(w.length>2){x=A.h0(e)
w.$flags&2&&B.E(w)
w[2]=x}},
gaE(d){var x,w=this.a
if(w.length>3){w=w[3]
x=$.hU
w=(x!=null?x:A.iJ())[w]}else w=0
return w},
gfs(){return this.gaE(0)/1},
gjy(){return A.jh(this)},
iJ(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaE(e)
w=v.a
if(w.length>3){x=A.h0(x)
w.$flags&2&&B.E(w)
w[3]=x}},
ga5(d){return new A.hC(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gA(e)===B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
$idD:1}
A.No.prototype={
dT(d){return new A.No(new Float32Array(B.bZ(this.a)))},
gdt(){return C.k2},
gu(d){return this.a.length},
geU(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x=this.a
if(e<x.length){x.$flags&2&&B.E(x)
x[e]=f}},
ge6(d){var x=this.a
return!D.fy.gV(x)?x[0]:0},
gaf(d){var x=this.a
return!D.fy.gV(x)?x[0]:0},
saf(d,e){var x=this.a
if(!D.fy.gV(x)){x.$flags&2&&B.E(x)
x[0]=e}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x=this.a
if(x.length>1){x.$flags&2&&B.E(x)
x[1]=d}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x=this.a
if(x.length>2){x.$flags&2&&B.E(x)
x[2]=e}},
gaE(d){var x=this.a
return x.length>3?x[3]:1},
gfs(){return this.gaE(0)/1},
gjy(){return A.jh(this)},
iJ(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaE(e)
w=v.a
if(w.length>3){w.$flags&2&&B.E(w)
w[3]=x}},
ga5(d){return new A.hC(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gA(e)===B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
$idD:1}
A.Np.prototype={
dT(d){return new A.Np(new Float64Array(B.bZ(this.a)))},
gdt(){return C.lG},
gu(d){return this.a.length},
geU(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x=this.a
if(e<x.length){x.$flags&2&&B.E(x)
x[e]=f}},
ge6(d){var x=this.a
return!D.eB.gV(x)?x[0]:0},
gaf(d){var x=this.a
return!D.eB.gV(x)?x[0]:0},
saf(d,e){var x=this.a
if(!D.eB.gV(x)){x.$flags&2&&B.E(x)
x[0]=e}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x=this.a
if(x.length>1){x.$flags&2&&B.E(x)
x[1]=d}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x=this.a
if(x.length>2){x.$flags&2&&B.E(x)
x[2]=e}},
gaE(d){var x=this.a
return x.length>3?x[3]:1},
gfs(){return this.gaE(0)/1},
gjy(){return A.jh(this)},
iJ(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaE(e)
w=v.a
if(w.length>3){w.$flags&2&&B.E(w)
w[3]=x}},
ga5(d){return new A.hC(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gA(e)===B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
$idD:1}
A.Nq.prototype={
dT(d){return new A.Nq(new Int16Array(B.bZ(this.a)))},
gdt(){return C.lI},
gu(d){return this.a.length},
geU(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.E(w)
w[e]=x}},
ge6(d){var x=this.a
return!D.kB.gV(x)?x[0]:0},
gaf(d){var x=this.a
return!D.kB.gV(x)?x[0]:0},
saf(d,e){var x,w=this.a
if(!D.kB.gV(w)){x=D.d.C(e)
w.$flags&2&&B.E(w)
w[0]=x}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.E(w)
w[1]=x}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.E(w)
w[2]=x}},
gaE(d){var x=this.a
return x.length>3?x[3]:0},
gfs(){return this.gaE(0)/32767},
gjy(){return A.jh(this)},
iJ(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaE(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.E(w)
w[3]=x}},
ga5(d){return new A.hC(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gA(e)===B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
$idD:1}
A.Nr.prototype={
dT(d){return new A.Nr(new Int32Array(B.bZ(this.a)))},
gdt(){return C.lJ},
gu(d){return this.a.length},
geU(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.E(w)
w[e]=x}},
ge6(d){var x=this.a
return!D.cG.gV(x)?x[0]:0},
gaf(d){var x=this.a
return!D.cG.gV(x)?x[0]:0},
saf(d,e){var x=this.a
if(!D.cG.gV(x)){B.be(e)
x.$flags&2&&B.E(x)
x[0]=e}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.E(w)
w[1]=x}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.E(w)
w[2]=x}},
gaE(d){var x=this.a
return x.length>3?x[3]:0},
gfs(){return this.gaE(0)/2147483647},
gjy(){return A.jh(this)},
iJ(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaE(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.E(w)
w[3]=x}},
ga5(d){return new A.hC(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gA(e)===B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
$idD:1}
A.Ns.prototype={
dT(d){return new A.Ns(new Int8Array(B.bZ(this.a)))},
gdt(){return C.lH},
gu(d){return this.a.length},
geU(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.E(w)
w[e]=x}},
ge6(d){var x=this.a
return!D.kC.gV(x)?x[0]:0},
gaf(d){var x=this.a
return!D.kC.gV(x)?x[0]:0},
saf(d,e){var x,w=this.a
if(!D.kC.gV(w)){x=D.d.C(e)
w.$flags&2&&B.E(w)
w[0]=x}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.E(w)
w[1]=x}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.E(w)
w[2]=x}},
gaE(d){var x=this.a
return x.length>3?x[3]:0},
gfs(){return this.gaE(0)/127},
gjy(){return A.jh(this)},
iJ(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaE(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.E(w)
w[3]=x}},
ga5(d){return new A.hC(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gA(e)===B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
$idD:1}
A.Nv.prototype={
dT(d){var x=this.b
x===$&&B.b()
return new A.Nv(this.a,x)},
gdt(){return C.fS},
geU(){return null},
Ba(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.h1(x,7-d)&1}else x=0
return x},
yn(d,e){var x
if(d>=this.a)return
d=7-d
x=this.b
x===$&&B.b()
this.b=e!==0?(x|D.c.eW(1,d))>>>0:(x&~(D.c.eW(1,d)&255))>>>0},
i(d,e){return this.Ba(e)},
m(d,e,f){return this.yn(e,f)},
ge6(d){return this.Ba(0)},
gaf(d){return this.Ba(0)},
saf(d,e){this.yn(0,e)},
gap(){return this.Ba(1)},
sap(d){this.yn(1,d)},
gau(d){return this.Ba(2)},
sau(d,e){this.yn(2,e)},
gaE(d){return this.Ba(3)},
gfs(){return this.Ba(3)/1},
gjy(){return A.jh(this)},
iJ(d,e){this.is(e.gaf(e),e.gap(),e.gau(e),e.gaE(e))},
is(d,e,f,g){var x=this
x.yn(0,d)
x.yn(1,e)
x.yn(2,f)
x.yn(3,g)},
ga5(d){return new A.hC(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a&&e.gA(e)===B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
$idD:1,
gu(d){return this.a}}
A.Nw.prototype={
dT(d){return new A.Nw(new Uint16Array(B.bZ(this.a)))},
gdt(){return C.cy},
gu(d){return this.a.length},
geU(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.E(w)
w[e]=x}},
ge6(d){var x=this.a
return!D.ea.gV(x)?x[0]:0},
gaf(d){var x=this.a
return!D.ea.gV(x)?x[0]:0},
saf(d,e){var x,w=this.a
if(!D.ea.gV(w)){x=D.d.C(e)
w.$flags&2&&B.E(w)
w[0]=x}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.E(w)
w[1]=x}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.E(w)
w[2]=x}},
gaE(d){var x=this.a
return x.length>3?x[3]:0},
gfs(){return this.gaE(0)/65535},
gjy(){return A.jh(this)},
iJ(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaE(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.E(w)
w[3]=x}},
ga5(d){return new A.hC(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gA(e)===B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
$idD:1}
A.Nx.prototype={
dT(d){var x=this.b
x===$&&B.b()
return new A.Nx(this.a,x)},
gdt(){return C.hI},
geU(){return null},
Bb(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.h1(x,6-(d<<1>>>0))&3}else x=0
return x},
yo(d,e){var x,w,v
if(d>=this.a)return
x=C.ayt[d]
w=D.d.C(e)
v=this.b
v===$&&B.b()
this.b=(v&x|D.c.eW(w&3,6-(d<<1>>>0)))>>>0},
i(d,e){return this.Bb(e)},
m(d,e,f){return this.yo(e,f)},
ge6(d){return this.Bb(0)},
gaf(d){return this.Bb(0)},
saf(d,e){this.yo(0,e)},
gap(){return this.Bb(1)},
sap(d){this.yo(1,d)},
gau(d){return this.Bb(2)},
sau(d,e){this.yo(2,e)},
gaE(d){return this.Bb(3)},
gfs(){return this.Bb(3)/3},
gjy(){return A.jh(this)},
iJ(d,e){this.is(e.gaf(e),e.gap(),e.gau(e),e.gaE(e))},
is(d,e,f,g){var x=this
x.yo(0,d)
x.yo(1,e)
x.yo(2,f)
x.yo(3,g)},
ga5(d){return new A.hC(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a&&e.gA(e)===B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
$idD:1,
gu(d){return this.a}}
A.Ny.prototype={
dT(d){return new A.Ny(new Uint32Array(B.bZ(this.a)))},
gdt(){return C.k3},
gu(d){return this.a.length},
geU(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.E(w)
w[e]=x}},
ge6(d){var x=this.a
return!D.by.gV(x)?x[0]:0},
gaf(d){var x=this.a
return!D.by.gV(x)?x[0]:0},
saf(d,e){var x,w=this.a
if(!D.by.gV(w)){x=D.d.C(e)
w.$flags&2&&B.E(w)
w[0]=x}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.E(w)
w[1]=x}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.E(w)
w[2]=x}},
gaE(d){var x=this.a
return x.length>3?x[3]:0},
gfs(){return this.gaE(0)/4294967295},
gjy(){return A.jh(this)},
iJ(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaE(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.E(w)
w[3]=x}},
ga5(d){return new A.hC(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gA(e)===B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
$idD:1}
A.Nz.prototype={
dT(d){return new A.Nz(this.a,new Uint8Array(B.bZ(this.b)))},
gdt(){return C.hJ},
geU(){return null},
Bc(d){var x
if(d<0||d>=this.a)x=0
else{x=this.b
x=d<2?D.c.h1(x[0],4-(d<<2>>>0))&15:D.c.h1(x[1],4-((d&1)<<2))&15}return x},
yp(d,e){var x,w,v,u
if(d>=this.a)return
x=D.c.b3(D.d.C(e),0,15)
if(d>1){d&=1
w=1}else w=0
if(d===0){v=this.b
u=v[w]
v.$flags&2&&B.E(v)
v[w]=(u&15|x<<4)>>>0}else if(d===1){v=this.b
u=v[w]
v.$flags&2&&B.E(v)
v[w]=(u&240|x)>>>0}},
i(d,e){return this.Bc(e)},
m(d,e,f){return this.yp(e,f)},
ge6(d){return this.Bc(0)},
gaf(d){return this.Bc(0)},
saf(d,e){this.yp(0,e)},
gap(){return this.Bc(1)},
sap(d){this.yp(1,d)},
gau(d){return this.Bc(2)},
sau(d,e){this.yp(2,e)},
gaE(d){return this.Bc(3)},
gfs(){return this.Bc(3)/15},
gjy(){return A.jh(this)},
iJ(d,e){this.is(e.gaf(e),e.gap(),e.gau(e),e.gaE(e))},
is(d,e,f,g){var x=this
x.yp(0,d)
x.yp(1,e)
x.yp(2,f)
x.yp(3,g)},
ga5(d){return new A.hC(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a&&e.gA(e)===B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
$idD:1,
gu(d){return this.a}}
A.y_.prototype={
aTK(d,e,f,g){var x=this.a
x.$flags&2&&B.E(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g},
dT(d){return new A.y_(new Uint8Array(B.bZ(this.a)))},
gdt(){return C.ab},
gu(d){return this.a.length},
geU(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.E(w)
w[e]=x}},
ge6(d){var x=this.a
return!D.D.gV(x)?x[0]:0},
gaf(d){var x=this.a
return!D.D.gV(x)?x[0]:0},
saf(d,e){var x,w=this.a
if(!D.D.gV(w)){x=D.d.C(e)
w.$flags&2&&B.E(w)
w[0]=x}},
gap(){var x=this.a
return x.length>1?x[1]:0},
sap(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.E(w)
w[1]=x}},
gau(d){var x=this.a
return x.length>2?x[2]:0},
sau(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.E(w)
w[2]=x}},
gaE(d){var x=this.a
return x.length>3?x[3]:255},
gfs(){return this.gaE(0)/255},
gjy(){return A.jh(this)},
iJ(d,e){var x,w,v=this
v.saf(0,e.gaf(e))
v.sap(e.gap())
v.sau(0,e.gau(e))
x=e.gaE(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.E(w)
w[3]=x}},
ga5(d){return new A.hC(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gA(e)===B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
$idD:1}
A.akJ.prototype={}
A.Nt.prototype={}
A.XY.prototype={
dT(d){return new A.XY(this.a)},
gdt(){return C.ab},
gu(d){return 4},
geU(){return null},
i(d,e){var x
if(e>=0&&e<4){x=e<<3>>>0
x=D.c.hA((this.a&D.c.eo(255,x))>>>0,x)}else x=0
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
gjy(){return A.jh(this)},
ga5(d){return new A.hC(this)},
k(d,e){var x=this
if(e==null)return!1
return y.G.b(e)&&e.gu(e)===x.gu(x)&&e.gA(e)===B.aJ(B.H(x,!0,B.t(x).h("x.E")))},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
$idD:1}
A.akU.prototype={
gaE(d){return 255},
gfs(){return 1},
gu(d){return 3}}
A.nK.prototype={
J(){return"Format."+this.b}}
A.ajK.prototype={
J(){return"BlendMode."+this.b}}
A.OI.prototype={
Rm(d){var x=$.cqF()
if(!x.a7(0,d))return"<unknown>"
return x.i(0,d).a},
j(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(x=j.a,w=new B.ch(x,x.r,x.e,B.t(x).h("ch<1>")),v=y.p,u=y.r,t=y.N,s=y.P,r="";w.q();){q=w.d
r+=q+"\n"
p=x.i(0,q)
for(q=p.a,q=new B.ch(q,q.r,q.e,B.t(q).h("ch<1>"));q.q();){o=q.d
n=p.i(0,o)
r=n==null?r+("\t"+j.Rm(o)+"\n"):r+("\t"+j.Rm(o)+": "+n.j(0)+"\n")}for(q=p.b.a,o=new B.ch(q,q.r,q.e,B.t(q).h("ch<1>"));o.q();){m=o.d
r+=m+"\n"
if(!q.a7(0,m))q.m(0,m,new A.q5(B.K(v,u),new A.uc(B.K(t,s))))
l=q.i(0,m)
for(m=l.a,m=new B.ch(m,m.r,m.e,B.t(m).h("ch<1>"));m.q();){k=m.d
n=l.i(0,k)
r=n==null?r+("\t"+j.Rm(k)+"\n"):r+("\t"+j.Rm(k)+": "+n.j(0)+"\n")}}}return r.charCodeAt(0)==0?r:r},
jE(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0="exif",a1="interop",a2=a4.b
a4.b=!0
a4.le(19789)
a4.le(42)
a4.j_(8)
x=d.a
if(x.i(0,"ifd0")==null)x.m(0,"ifd0",new A.q5(B.K(y.p,y.r),new A.uc(B.K(y.N,y.P))))
w=y.N
v=y.p
u=B.K(w,v)
for(t=B.t(x),s=t.h("c4<1>"),r=new B.ch(x,x.r,x.e,t.h("ch<1>")),q=y.r,p=y.P,o=8;r.q();){n=r.d
m=x.i(0,n)
m.toString
u.m(0,n,o)
n=m.b.a
if(n.a7(0,a0)){l=new Uint32Array(1)
l[0]=0
m.m(0,34665,new A.rk(l))}else m.a.K(0,34665)
if(n.a7(0,a1)){l=new Uint32Array(1)
l[0]=0
m.m(0,40965,new A.rk(l))}else m.a.K(0,40965)
if(n.a7(0,"gps")){l=new Uint32Array(1)
l[0]=0
m.m(0,34853,new A.rk(l))}else m.a.K(0,34853)
m=m.a
o+=2+12*m.a+4
for(m=new B.bF(m,m.r,m.e,B.t(m).h("bF<2>"));m.q();){l=m.d
k=C.kh[l.ghM(l).a]*l.gu(l)
if(k>4)o+=k}for(m=new B.ch(n,n.r,n.e,B.t(n).h("ch<1>"));m.q();){l=m.d
if(!n.a7(0,l))n.m(0,l,new A.q5(B.K(v,q),new A.uc(B.K(w,p))))
j=n.i(0,l)
j.toString
u.m(0,l,o)
j=j.a
i=2+12*j.a
for(l=new B.bF(j,j.r,j.e,B.t(j).h("bF<2>"));l.q();){j=l.d
k=C.kh[j.ghM(j).a]*j.gu(j)
if(k>4)i+=k}o+=i}}h=x.a
for(r=h-1,t=t.h("b8<2>"),g=0;g<h;++g){f=new B.c4(x,s).dF(0,g)
e=new B.b8(x,t).dF(0,g)
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
d.avZ(a4,e,m+2+12*e.a.a+4)
if(g===r)a4.j_(0)
else{m=u.i(0,new B.c4(x,s).dF(0,g+1))
m.toString
a4.j_(m)}d.aw_(a4,e)
for(m=new B.ch(n,n.r,n.e,B.t(n).h("ch<1>"));m.q();){l=m.d
if(!n.a7(0,l))n.m(0,l,new A.q5(B.K(v,q),new A.uc(B.K(w,p))))
j=n.i(0,l)
j.toString
l=u.i(0,l)
l.toString
d.avZ(a4,j,l+2+12*j.a.a)
d.aw_(a4,j)}}a4.b=a2},
avZ(d,e,f){var x,w,v,u,t,s,r=e.a
d.le(r.a)
for(r=new B.ch(r,r.r,r.e,B.t(r).h("ch<1>"));r.q();){x=r.d
w=e.i(0,x)
w.toString
v=x===273
u=v&&w.ghM(w)===C.iy?C.d4:w.ghM(w)
t=v&&w.ghM(w)===C.iy?1:w.gu(w)
d.le(x)
d.le(u.a)
d.j_(t)
s=C.kh[w.ghM(w).a]*w.gu(w)
if(s<=4){w.jE(0,d)
for(;s<4;){d.b1(0);++s}}else{d.j_(f)
f+=s}}return f},
aw_(d,e){var x,w
for(x=e.a,x=new B.bF(x,x.r,x.e,B.t(x).h("bF<2>"));x.q();){w=x.d
if(C.kh[w.ghM(w).a]*w.gu(w)>4)w.jE(0,d)}},
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
l=new A.q5(B.K(s,r),new A.uc(B.K(q,p)))
k=a5.am()
j=B.a(new Array(k),t)
for(i=0;i<k;++i)j[i]=this.arp(a5,x)
for(m=j.length,h=0;h<j.length;j.length===m||(0,B.S)(j),++h){g=j[h]
f=g.b
if(f!=null)l.m(0,g.a,f)}u.m(0,"ifd"+n,l);++n
e=a5.a3()
if(e===v)break}for(u=new B.bF(u,u.r,u.e,B.t(u).h("bF<2>"));u.q();){o=u.d
for(m=J.aO(C.Ee.gew(C.Ee)),f=o.a,d=o.b.a;m.q();){a0=m.gL(m)
if(f.a7(0,a0)){a5.d=x+o.i(0,a0).C(0)
l=new A.q5(B.K(s,r),new A.uc(B.K(q,p)))
k=a5.am()
j=B.a(new Array(k),t)
for(i=0;i<k;++i)j[i]=this.arp(a5,x)
for(a1=j.length,h=0;h<j.length;j.length===a1||(0,B.S)(j),++h){g=j[h]
a2=g.b
if(a2!=null)l.m(0,g.a,a2)}a0=C.Ee.i(0,a0)
a0.toString
d.m(0,a0,l)}}}a5.e=a3
return!1},
arp(d,e){var x,w,v,u,t=d.am(),s=d.am(),r=d.a3(),q=new A.aK2(t,null)
if(s>13)return q
x=C.Q1[s]
w=r*C.kh[s]
v=d.d
if((w>4?d.d=d.a3()+e:v)+w>d.c)return q
u=d.jd(w)
switch(x.a){case 0:break
case 6:q.b=new A.wb(new Int8Array(B.bZ(J.cqM(D.D.gaj(u.hL()),0,r))))
break
case 1:q.b=new A.ub(new Uint8Array(B.bZ(u.jd(r).hL())))
break
case 7:q.b=new A.HC(new Uint8Array(B.bZ(u.jd(r).hL())))
break
case 2:q.b=new A.BN(r===0?"":u.je(r-1))
break
case 3:q.b=A.cD_(u,r)
break
case 4:q.b=A.cCV(u,r)
break
case 5:q.b=A.cCW(u,r)
break
case 10:q.b=A.cCY(u,r)
break
case 8:q.b=A.cCZ(u,r)
break
case 9:q.b=A.cCX(u,r)
break
case 11:q.b=A.cD1(u,r)
break
case 12:q.b=A.cCU(u,r)
break}d.d=v+4
return q}}
A.aK2.prototype={
gp(d){return this.b}}
A.aoR.prototype={}
A.uc.prototype={
aTX(d){d.a.aV(0,new A.bie(this))},
gff(d){var x=this.a
return new B.b8(x,B.t(x).h("b8<2>"))},
gV(d){var x,w=this.a
if(w.a===0)return!0
for(w=new B.bF(w,w.r,w.e,B.t(w).h("bF<2>"));w.q();){x=w.d
if(!(x.a.a===0&&x.b.gV(0)))return!1}return!0},
a7(d,e){return this.a.a7(0,e)},
i(d,e){var x=this.a
if(!x.a7(0,e))x.m(0,e,new A.q5(B.K(y.p,y.r),new A.uc(B.K(y.N,y.P))))
x=x.i(0,e)
x.toString
return x},
m(d,e,f){this.a.m(0,e,f)}}
A.q5.prototype={
gff(d){var x=this.a
return new B.b8(x,B.t(x).h("b8<2>"))},
gV(d){return this.a.a===0&&this.b.gV(0)},
a9A(d){d.a.aV(0,new A.bif(this))
d.b.a.aV(0,new A.big(this))},
a7(d,e){return this.a.a7(0,e)},
i(d,e){if(typeof e=="string")e=C.a_I.i(0,e)
if(B.h8(e))return this.a.i(0,e)
return null},
m(d,e,f){var x,w,v,u,t,s,r=this
if(typeof e=="string")e=C.a_I.i(0,e)
if(!B.h8(e))return
if(f==null)r.a.K(0,e)
else if(f instanceof A.k5)r.a.m(0,e,f)
else{x=$.cqF().i(0,e)
if(x!=null)switch(x.b.a){case 1:if(y.L.b(f))r.a.m(0,e,new A.ub(new Uint8Array(B.bZ(new Uint8Array(B.bZ(f))))))
else if(B.h8(f)){w=new Uint8Array(1)
w[0]=f
r.a.m(0,e,new A.ub(w))}break
case 2:if(typeof f=="string")r.a.m(0,e,new A.BN(f))
break
case 3:if(y.L.b(f))r.a.m(0,e,new A.yv(new Uint16Array(B.bZ(new Uint16Array(B.bZ(f))))))
else if(B.h8(f))r.a.m(0,e,A.cZ1(f))
break
case 4:if(y.L.b(f))r.a.m(0,e,new A.rk(new Uint32Array(B.bZ(new Uint32Array(B.bZ(f))))))
else if(B.h8(f))r.a.m(0,e,A.cZ0(f))
break
case 5:if(y.k.b(f))r.a.m(0,e,new A.ud(B.b0(f,!0,y.i)))
else if(y.L.b(f)&&J.bB(f)===2){w=J.a3(f)
r.a.m(0,e,new A.ud(B.a([new A.nY(w.i(f,0),w.i(f,1))],y.j)))}else if(f instanceof A.nY)r.a.m(0,e,new A.ud(B.a([new A.nY(f.a,f.b)],y.j)))
else if(y.f.b(f)){w=J.a3(f)
v=w.gu(f)
u=y.i
t=J.kw(v,u)
for(s=0;s<v;++s)t[s]=new A.nY(J.v(w.i(f,s),0),J.v(w.i(f,s),1))
r.a.m(0,e,new A.ud(B.b0(t,!0,u)))}break
case 6:if(y.L.b(f))r.a.m(0,e,new A.wb(new Int8Array(B.bZ(new Int8Array(B.bZ(f))))))
else if(B.h8(f)){w=new Int8Array(1)
w[0]=f
r.a.m(0,e,new A.wb(w))}break
case 7:if(y.L.b(f))r.a.m(0,e,new A.HC(new Uint8Array(B.bZ(new Uint8Array(B.bZ(f))))))
break
case 8:if(y.L.b(f))r.a.m(0,e,new A.yu(new Int16Array(B.bZ(new Int16Array(B.bZ(f))))))
else if(B.h8(f)){w=new Int16Array(1)
w[0]=f
r.a.m(0,e,new A.yu(w))}break
case 9:if(y.L.b(f))r.a.m(0,e,new A.yt(new Int32Array(B.bZ(new Int32Array(B.bZ(f))))))
else if(B.h8(f)){w=new Int32Array(1)
w[0]=f
r.a.m(0,e,new A.yt(w))}break
case 10:if(y.k.b(f))r.a.m(0,e,new A.ue(B.b0(f,!0,y.i)))
else if(y.L.b(f)&&J.bB(f)===2){w=J.a3(f)
r.a.m(0,e,new A.ue(B.a([new A.nY(w.i(f,0),w.i(f,1))],y.j)))}else if(f instanceof A.nY)r.a.m(0,e,new A.ue(B.a([f],y.j)))
else if(y.f.b(f)){w=J.a3(f)
v=w.gu(f)
u=y.i
t=J.kw(v,u)
for(s=0;s<v;++s)t[s]=new A.nY(J.v(w.i(f,s),0),J.v(w.i(f,s),1))
r.a.m(0,e,new A.ue(B.b0(t,!0,u)))}break
case 11:if(y.H.b(f))r.a.m(0,e,new A.BP(new Float32Array(B.bZ(new Float32Array(B.bZ(f))))))
else if(typeof f=="number")r.a.m(0,e,A.cD0(f))
else if(B.h8(f))r.a.m(0,e,A.cD0(f))
break
case 12:if(y.H.b(f))r.a.m(0,e,new A.BO(new Float64Array(B.bZ(new Float64Array(B.bZ(f))))))
else if(typeof f=="number")r.a.m(0,e,A.cCT(f))
else if(B.h8(f))r.a.m(0,e,A.cCT(f))
break
case 0:break}}},
gik(d){var x=this.a.i(0,274)
return x==null?null:x.C(0)},
sik(d,e){this.a.K(0,274)}}
A.mR.prototype={
J(){return"IfdValueType."+this.b}}
A.k5.prototype={
jf(d,e){return 0},
C(d){return this.jf(0,0)},
u1(d){return 0},
u0(){return new Uint8Array(0)},
j(d){return""},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.k5&&x.ghM(x)===e.ghM(e)&&x.gu(x)===e.gu(e)&&x.gA(x)===e.gA(e)},
gA(d){return 0},
vQ(d){}}
A.ub.prototype={
dT(d){return new A.ub(new Uint8Array(B.bZ(this.a)))},
ghM(d){return C.Mw},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.ub){x=this.a
x=x.length===e.a.length&&B.aJ(x)===B.aJ(e.a)}else x=!1
return x},
gA(d){return B.aJ(this.a)},
jf(d,e){return this.a[e]},
C(d){return this.jf(0,0)},
vQ(d){var x=this.a
x.$flags&2&&B.E(x)
x[0]=d},
u0(){return this.a},
jE(d,e){e.m7(this.a)},
j(d){var x=this.a
return x.length===1?""+x[0]:B.q(x)},
gp(d){return this.a}}
A.BN.prototype={
dT(d){return new A.BN(this.a)},
ghM(d){return C.bJ},
gu(d){return this.a.length+1},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.BN){x=this.a
x=x.length+1===e.a.length+1&&D.e.gA(x)===D.e.gA(e.a)}else x=!1
return x},
gA(d){return D.e.gA(this.a)},
u0(){return new Uint8Array(B.bZ(new B.eQ(this.a)))},
jE(d,e){e.m7(new B.eQ(this.a))
e.b1(0)},
j(d){return this.a},
gp(d){return this.a}}
A.yv.prototype={
aU1(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.am()
w.$flags&2&&B.E(w)
w[x]=v}},
dT(d){return new A.yv(new Uint16Array(B.bZ(this.a)))},
ghM(d){return C.bq},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.yv){x=this.a
x=x.length===e.a.length&&B.aJ(x)===B.aJ(e.a)}else x=!1
return x},
gA(d){return B.aJ(this.a)},
jf(d,e){return this.a[e]},
C(d){return this.jf(0,0)},
vQ(d){var x=this.a
x.$flags&2&&B.E(x)
x[0]=d},
u0(){return J.hL(D.ea.gaj(this.a))},
jE(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.le(this.a[x])},
j(d){var x=this.a
return x.length===1?""+x[0]:B.q(x)},
gp(d){return this.a}}
A.rk.prototype={
aTZ(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.a3()
w.$flags&2&&B.E(w)
w[x]=v}},
dT(d){return new A.rk(new Uint32Array(B.bZ(this.a)))},
ghM(d){return C.d4},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.rk){x=this.a
x=x.length===e.a.length&&B.aJ(x)===B.aJ(e.a)}else x=!1
return x},
gA(d){return B.aJ(this.a)},
jf(d,e){return this.a[e]},
C(d){return this.jf(0,0)},
vQ(d){var x=this.a
x.$flags&2&&B.E(x)
x[0]=d},
u0(){return J.hL(D.by.gaj(this.a))},
jE(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.j_(this.a[x])},
j(d){var x=this.a
return x.length===1?""+x[0]:B.q(x)},
gp(d){return this.a}}
A.ud.prototype={
dT(d){return new A.ud(B.b0(this.a,!0,y.i))},
ghM(d){return C.es},
gu(d){return this.a.length},
jf(d,e){return this.a[e].C(0)},
C(d){return this.jf(0,0)},
u1(d){return this.a[0].u1(0)},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.ud){x=this.a
x=x.length===e.a.length&&B.aJ(x)===B.aJ(e.a)}else x=!1
return x},
gA(d){return B.aJ(this.a)},
jE(d,e){var x,w,v,u
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.S)(x),++v){u=x[v]
e.j_(u.a)
e.j_(u.b)}},
j(d){var x=this.a
return x.length===1?x[0].j(0):B.q(x)},
gp(d){return this.a}}
A.wb.prototype={
dT(d){return new A.wb(new Int8Array(B.bZ(this.a)))},
ghM(d){return C.MA},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.wb){x=this.a
x=x.length===e.a.length&&B.aJ(x)===B.aJ(e.a)}else x=!1
return x},
gA(d){return B.aJ(this.a)},
jf(d,e){return this.a[e]},
C(d){return this.jf(0,0)},
vQ(d){var x=this.a
x.$flags&2&&B.E(x)
x[0]=d},
u0(){return J.hL(D.kC.gaj(this.a))},
jE(d,e){e.m7(J.df(D.kC.gaj(this.a),0,null))},
j(d){var x=this.a
return x.length===1?""+x[0]:B.q(x)},
gp(d){return this.a}}
A.yu.prototype={
aU0(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.am()
u=$.np()
u.$flags&2&&B.E(u)
u[0]=v
v=$.ow()[0]
w.$flags&2&&B.E(w)
w[x]=v}},
dT(d){return new A.yu(new Int16Array(B.bZ(this.a)))},
ghM(d){return C.MB},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.yu){x=this.a
x=x.length===e.a.length&&B.aJ(x)===B.aJ(e.a)}else x=!1
return x},
gA(d){return B.aJ(this.a)},
jf(d,e){return this.a[e]},
C(d){return this.jf(0,0)},
vQ(d){var x=this.a
x.$flags&2&&B.E(x)
x[0]=d},
u0(){return J.hL(D.kB.gaj(this.a))},
jE(d,e){var x,w=new Int16Array(1),v=J.cqN(D.kB.gaj(w),0,null),u=this.a.length
for(x=0;x<u;++x){w[0]=this.a[x]
e.le(v[0])}},
j(d){var x=this.a
return x.length===1?""+x[0]:B.q(x)},
gp(d){return this.a}}
A.yt.prototype={
aU_(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.a3()
u=$.hy()
u.$flags&2&&B.E(u)
u[0]=v
v=$.kL()[0]
w.$flags&2&&B.E(w)
w[x]=v}},
dT(d){return new A.yt(new Int32Array(B.bZ(this.a)))},
ghM(d){return C.MC},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.yt){x=this.a
x=x.length===e.a.length&&B.aJ(x)===B.aJ(e.a)}else x=!1
return x},
gA(d){return B.aJ(this.a)},
jf(d,e){return this.a[e]},
C(d){return this.jf(0,0)},
vQ(d){var x=this.a
x.$flags&2&&B.E(x)
x[0]=d},
u0(){return J.hL(D.cG.gaj(this.a))},
jE(d,e){var x,w,v,u=this.a.length
for(x=0;x<u;++x){w=this.a[x]
v=$.aWq()
v.$flags&2&&B.E(v)
v[0]=w
e.j_($.cqx()[0])}},
j(d){var x=this.a
return x.length===1?""+x[0]:B.q(x)},
gp(d){return this.a}}
A.ue.prototype={
dT(d){return new A.ue(B.b0(this.a,!0,y.i))},
ghM(d){return C.Mx},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.ue){x=this.a
x=x.length===e.a.length&&B.aJ(x)===B.aJ(e.a)}else x=!1
return x},
gA(d){return B.aJ(this.a)},
jf(d,e){return this.a[e].C(0)},
C(d){return this.jf(0,0)},
u1(d){return this.a[0].u1(0)},
jE(d,e){var x,w,v,u,t,s
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.S)(x),++v){u=x[v]
t=$.aWq()
t.$flags&2&&B.E(t)
t[0]=u.a
s=$.cqx()
e.j_(s[0])
t[0]=u.b
e.j_(s[0])}},
j(d){var x=this.a
return x.length===1?x[0].j(0):B.q(x)},
gp(d){return this.a}}
A.BP.prototype={
aU2(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.a3()
u=$.hy()
u.$flags&2&&B.E(u)
u[0]=v
v=$.Fz()[0]
w.$flags&2&&B.E(w)
w[x]=v}},
dT(d){return new A.BP(new Float32Array(B.bZ(this.a)))},
ghM(d){return C.My},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.BP){x=this.a
x=x.length===e.a.length&&B.aJ(x)===B.aJ(e.a)}else x=!1
return x},
gA(d){return B.aJ(this.a)},
u0(){return J.hL(D.fy.gaj(this.a))},
u1(d){return this.a[0]},
jE(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.bMV(this.a[x])},
j(d){var x=this.a
return x.length===1?B.q(x[0]):B.q(x)},
gp(d){return this.a}}
A.BO.prototype={
aTY(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.a_T()
w.$flags&2&&B.E(w)
w[x]=v}},
dT(d){return new A.BO(new Float64Array(B.bZ(this.a)))},
ghM(d){return C.Mz},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.BO){x=this.a
x=x.length===e.a.length&&B.aJ(x)===B.aJ(e.a)}else x=!1
return x},
gA(d){return B.aJ(this.a)},
u1(d){return this.a[0]},
u0(){return J.hL(D.eB.gaj(this.a))},
jE(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.bMW(this.a[x])},
j(d){var x=this.a
return x.length===1?B.q(x[0]):B.q(x)},
gp(d){return this.a}}
A.HC.prototype={
dT(d){return new A.HC(new Uint8Array(B.bZ(this.a)))},
ghM(d){return C.iy},
gu(d){return this.a.length},
u0(){return this.a},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.HC){x=this.a
x=x.length===e.a.length&&B.aJ(x)===B.aJ(e.a)}else x=!1
return x},
gA(d){return B.aJ(this.a)},
jE(d,e){e.m7(this.a)},
j(d){return"<data>"},
gp(d){return this.a}}
A.lU.prototype={
J(){return"BmpCompression."+this.b}}
A.b_q.prototype={}
A.FR.prototype={
aiy(d,e){var x,w,v,u,t,s,r,q=this,p=q.d,o=p<=40
if(o){x=q.r
x=x===C.An||x===C.Ao}else x=!0
if(x){x=q.as=d.a3()
w=A.cob(x)
q.CW=w
v=D.c.h1(x,w)
x=v>0
q.cx=x?255/v:0
w=q.at=d.a3()
u=A.cob(w)
q.cy=u
t=D.c.h1(w,u)
q.db=x?255/t:0
w=q.ax=d.a3()
u=A.cob(w)
q.dx=u
s=D.c.h1(w,u)
q.dy=x?255/s:0
if(!o||q.r===C.Ao){o=q.ay=d.a3()
x=A.cob(o)
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
if(q.f<=8)q.bJS(d)},
gOQ(){var x=this.d
if(x!==40)if(x===124){x=this.ay
x===$&&B.b()
x=x===0}else x=!1
else x=!0
return x},
gb5(d){return Math.abs(this.c)},
bJS(d){var x,w,v,u,t,s=this,r=s.z
if(r===0)r=D.c.eo(1,s.f)
s.ch=new A.us(new Uint8Array(r*3),r,3)
for(x=0;x<r;++x){w=J.v(d.a,d.d++)
v=J.v(d.a,d.d++)
u=J.v(d.a,d.d++)
t=J.v(d.a,d.d++)
s.ch.S0(x,u,v,w,t)}},
bxs(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(o.ch!=null){x=o.f
if(x===1){w=d.ct()
for(v=7;v>=0;--v)e.$4(D.c.o3(w,v)&1,0,0,0)
return}else if(x===2){w=d.ct()
for(v=6;v>=0;v-=2)e.$4(D.c.o3(w,v)&2,0,0,0)}else if(x===4){w=d.ct()
e.$4(D.c.S(w,4)&15,0,0,0)
e.$4(w&15,0,0,0)
return}else if(x===8){e.$4(d.ct(),0,0,0)
return}}x=o.r
if(x===C.An&&o.f===32){u=d.a3()
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
if(o.gOQ())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.h1((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.d.C(t*x)}return e.$4(s,r,q,p)}else{t=o.f
if(t===32&&x===C.In){q=d.ct()
r=d.ct()
s=d.ct()
p=d.ct()
return e.$4(s,r,q,o.gOQ()?255:p)}else if(t===24){q=d.ct()
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
if(o.gOQ())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.h1((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.d.C(t*x)}return e.$4(s,r,q,p)}else throw B.n(A.c8("Unsupported bitsPerPixel ("+t+") or compression ("+x.j(0)+")."))}}}
A.ajO.prototype={
oF(d){var x,w=null
if(!A.crg(A.cY(d,!1,w,0)))return w
x=A.cY(d,!1,w,0)
this.a=x
return this.b=A.cTZ(x,w)},
kf(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b
if(e==null)return new A.BS(f,f,f,f,0,C.bt,0,0)
x=g.a
x===$&&B.b()
w=e.a.b
w===$&&B.b()
x.d=w
v=e.f
w=e.b
u=D.c.b2(w*v+31,32)*4
x=g.c
if(x)t=4
else if(v===1||v===4||v===8)t=1
else{s=v===32?4:3
t=s}if(x)r=C.ab
else if(v===1)r=C.fS
else{if(v===2)s=C.hI
else if(v===4)s=C.hJ
else s=C.ab
r=s}q=x?f:e.ch
p=A.hV(f,f,r,0,C.bt,e.gb5(e),f,0,t,q,C.ab,w,!1)
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
if(h==null)h=new A.fk()
for(;n.a<i;)e.bxs(k,new A.b_p(n,g,i,e,h))}return p},
mY(d,e,f){if(this.oF(e)==null)return null
return this.kf(0)}}
A.b7U.prototype={}
A.b6C.prototype={}
A.b6D.prototype={}
A.baf.prototype={}
A.aoS.prototype={}
A.arP.prototype={
PA(){return this.w},
rO(d,e,f,g,h){throw B.n(A.c8("B44 compression not yet supported."))},
Jq(d,e,f){return this.rO(d,e,f,null,null)},
j(d){return B.q(this.r)+" "+this.x}}
A.OK.prototype={
J(){return"ExrChannelType."+this.b}}
A.GU.prototype={
J(){return"ExrChannelName."+this.b}}
A.aoT.prototype={
aTO(d){var x=this,w=d.Qg()
x.a=w
if(w.length===0)return
x.c=C.aBl[d.a3()]
d.ct()
d.d+=3
x.f=d.a3()
x.r=d.a3()
w=x.a
if(w==="R"){x.w=!0
x.b=C.ar7}else if(w==="G"){x.w=!0
x.b=C.ar8}else if(w==="B"){x.w=!0
x.b=C.ar9}else if(w==="A"){x.w=!0
x.b=C.ara}else{x.w=!1
x.b=C.arb}switch(x.c.a){case 0:x.d=4
break
case 1:x.d=2
break
case 2:x.d=4
break}}}
A.u_.prototype={
J(){return"ExrCompressorType."+this.b}}
A.bbA.prototype={
rO(d,e,f,g,h){throw B.n(A.c8("Unsupported compression type"))},
Jq(d,e,f){return this.rO(d,e,f,null,null)}}
A.bjg.prototype={}
A.aoU.prototype={}
A.bbC.prototype={
aTP(d){var x,w,v,u,t=this,s=A.cY(d,!1,null,0)
if(s.a3()!==20000630)throw B.n(A.c8("File is not an OpenEXR image file."))
x=t.d=s.ct()
if(x!==2)throw B.n(A.c8("Cannot read version "+x+" image files."))
x=t.e=s.rH()
if((x&4294967289)>>>0!==0)throw B.n(A.c8("The file format version number's flag field contains unrecognized flags."))
if((x&16)===0){w=t.c
v=A.cDi(w.length,(x&2)!==0,s)
if(v.w>0)w.push(v)}else for(x=t.c;!0;){v=A.cDi(x.length,(t.e&2)!==0,s)
if(v.w<=0)break
x.push(v)}x=t.c
w=x.length
if(w===0)throw B.n(A.c8("Error reading image header"))
for(u=0;u<x.length;x.length===w||(0,B.S)(x),++u)x[u].bJR(s)
t.bil(s)},
bil(d){var x,w,v,u,t=this
for(x=t.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.S)(x),++v){u=x[v]
t.a=Math.max(t.a,u.w)
t.b=Math.max(t.b,u.x)
if(u.db)t.biv(u,d)
else t.bit(u,d)}},
biv(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.e
b3===$&&B.b()
x=(b3&16)!==0
b3=b4.b
b3.toString
w=b4.CW
v=b4.ay
u=A.cb(b5,b2,0)
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
if(x)if(u.a3()!==s)throw B.n(A.c8("Invalid Image Data"))
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
e=new A.m3(h,0,f,0,!1)
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
a8=$.hU
a9=(a8!=null?a8:A.iJ())[h]
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
if(b0==null)b0=new A.fk()
h=a5.b
h===$&&B.b()
b0.m(0,h.a,a9)}else{h=a5.a
h===$&&B.b()
a8=b3.b
b1=a8!=null?a8.i(0,h):b2
if(b1!=null)b1.fg(a6,g,a9,0,0)}}}++a3;++g}}++o;++q}++r}},
bit(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=this.e
a5===$&&B.b()
x=(a5&16)!==0
a5=a6.b
a5.toString
w=a6.CW
v=a6.ay[0]
u=a6.cx
t=A.cb(a7,a4,0)
for(s=v.length,r=a6.c,q=w!=null,p=0,o=0;o<s;++o){t.d=v[o]
if(x)if(t.a3()!==3.141592653589793)throw B.n(A.c8("Invalid Image Data"))
n=t.a3()
m=$.hy()
m.$flags&2&&B.E(m)
m[0]=n
n=$.kL()
m[0]=t.a3()
l=t.ji(n[0])
t.d=t.d+(l.c-l.d)
if(q){n=w.Jq(l,0,p)
m=n.length
k=new A.m3(n,0,Math.min(m,m),0,!1)}else k=l
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
m=$.hU
a1=(m!=null?m:A.iJ())[n]
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
if(a2==null)a2=new A.fk()
n=e.b
n===$&&B.b()
a2.m(0,n.a,a1)}else{n=e.a
n===$&&B.b()
m=a5.b
a3=m!=null?m.i(0,n):a4
if(a3!=null)a3.fg(a0,p,a1,0,0)}}}++h;++p}}}}
A.a_2.prototype={
aTQ(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=B.K(y.N,y.I)
for(x=a2.e,w=y.t,v=a2.c,u=C.iv;!0;){t=a7.Qg()
if(t.length===0)break
s=a7.Qg()
r=a7.a3()
q=a7.ji(r)
a7.d=a7.d+(q.c-q.d)
x.m(0,t,new A.aoS(t,s,r))
switch(t){case"channels":for(;!0;){p=new A.aoT()
p.aTO(q)
o=p.a
o===$&&B.b()
if(o.length===0)break
n=p.w
n===$&&B.b()
if(n){++a2.d
o=p.c
o===$&&B.b()
if(o===C.BZ)u=C.iv
else u=o===C.C_?C.k2:C.k3}else{n=p.c
n===$&&B.b()
if(n===C.BZ){n=a2.w
m=a2.x
a4.m(0,o,new A.Pn(new Uint16Array(n*m),n,m,1))}else if(n===C.C_){n=a2.w
m=a2.x
a4.m(0,o,new A.Po(new Float32Array(n*m),n,m,1))}else if(n===C.Ls){n=a2.w
m=a2.x
a4.m(0,o,new A.Ps(new Uint32Array(n*m),n,m,1))}}v.push(p)}break
case"chromaticities":o=new Float32Array(8)
a2.at=o
n=q.a3()
m=$.hy()
m.$flags&2&&B.E(m)
m[0]=n
n=$.Fz()
o[0]=n[0]
o=a2.at
m[0]=q.a3()
l=n[0]
o.$flags&2&&B.E(o)
o[1]=l
l=a2.at
m[0]=q.a3()
o=n[0]
l.$flags&2&&B.E(l)
l[2]=o
o=a2.at
m[0]=q.a3()
l=n[0]
o.$flags&2&&B.E(o)
o[3]=l
l=a2.at
m[0]=q.a3()
o=n[0]
l.$flags&2&&B.E(l)
l[4]=o
o=a2.at
m[0]=q.a3()
l=n[0]
o.$flags&2&&B.E(o)
o[5]=l
l=a2.at
m[0]=q.a3()
o=n[0]
l.$flags&2&&B.E(l)
l[6]=o
o=a2.at
m[0]=q.a3()
n=n[0]
o.$flags&2&&B.E(o)
o[7]=n
break
case"compression":a2.ax=C.aDK[J.v(q.a,q.d++)]
break
case"dataWindow":o=q.a3()
n=$.hy()
n.$flags&2&&B.E(n)
n[0]=o
o=$.kL()
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
n=$.hy()
n.$flags&2&&B.E(n)
n[0]=o
$.kL()
n[0]=q.a3()
n[0]=q.a3()
n[0]=q.a3()
break
case"lineOrder":break
case"pixelAspectRatio":o=q.a3()
n=$.hy()
n.$flags&2&&B.E(n)
n[0]=o
$.Fz()
break
case"screenWindowCenter":o=q.a3()
n=$.hy()
n.$flags&2&&B.E(n)
n[0]=o
$.Fz()
n[0]=q.a3()
break
case"screenWindowWidth":o=q.a3()
n=$.hy()
n.$flags&2&&B.E(n)
n[0]=o
$.Fz()
break
case"tiles":a2.dx=q.a3()
a2.dy=q.a3()
j=J.v(q.a,q.d++)
a2.fr=j&15
a2.fx=D.c.S(j,4)&15
break
case"type":i=q.Qg()
if(i!=="deepscanline")if(i!=="deeptile")throw B.n(A.c8("EXR Invalid type: "+i))
break
default:break}}x=a2.w
a2.b=A.hV(a3,a3,u,0,C.bt,a2.x,a3,0,a2.d,a3,C.ab,x,!1)
for(x=new B.ch(a4,a4.r,a4.e,a4.$ti.h("ch<1>"));x.q();){w=x.d
o=a2.b
o.toString
n=a4.i(0,w)
n.toString
o.aL3(w,n)}if(a2.db){x={}
w=a2.r
w===$&&B.b()
a2.id=a2.aXu(w[0],w[2],w[1],w[3])
w=a2.r
a2.k1=a2.aXv(w[0],w[2],w[1],w[3])
if(a2.fr!==2)a2.k1=1
w=a2.id
w.toString
v=a2.r
a2.fy=a2.ajW(w,v[0],v[2],a2.dx,a2.fx)
v=a2.k1
v.toString
w=a2.r
a2.go=a2.ajW(v,w[1],w[3],a2.dy,a2.fx)
w=a2.aXs()
a2.k2=w
v=a2.dx
v.toString
v=w*v
a2.k3=v
a2.CW=A.cBR(a2.ax,a2,v,a2.dy)
x.a=x.b=0
v=a2.id
v.toString
w=a2.k1
w.toString
a2.ay=B.qb(v*w,new A.bbD(x,a2),!0,y.bk)}else{x=a2.x
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
x=A.cBR(a2.ax,a2,d,a3)
a2.CW=x
x=a2.cx=x.PA()
w=a2.ch
v=w.length
o=new Uint32Array(v)
a2.cy=o
for(--v,a0=0,a1=0;a1<=v;++a1){if(D.c.an(a1,x)===0)a0=0
o[a1]=a0
a0+=w[a1]}x=D.c.hy(a2.x+x,x)
a2.ay=B.a([new Uint32Array(x-1)],y.w)}},
aXu(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.TK(w):u.T3(w))+1
break
case 2:v=e-d+1
x=(u.fx===0?u.TK(v):u.T3(v))+1
break
default:throw B.n(A.c8("Unknown LevelMode format."))}return x},
aXv(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.TK(w):u.T3(w))+1
break
case 2:v=g-f+1
x=(u.fx===0?u.TK(v):u.T3(v))+1
break
default:throw B.n(A.c8("Unknown LevelMode format."))}return x},
TK(d){var x
for(x=0;d>1;){++x
d=D.c.S(d,1)}return x},
T3(d){var x,w
for(x=0,w=0;d>1;){if((d&1)!==0)w=1;++x
d=D.c.S(d,1)}return x+w},
aXs(){var x,w,v,u,t
for(x=this.c,w=x.length,v=0,u=0;u<w;++u){t=x[u].d
t===$&&B.b()
v+=t}return v},
ajW(d,e,f,g,h){var x,w,v,u,t,s,r=J.iO(d,y.p)
for(x=h===1,w=f-e+1,v=0;v<d;++v){u=D.c.eo(1,v)
t=D.c.hy(w,u)
if(x&&t*u<w)++t
s=Math.max(t,1)
g.toString
r[v]=D.c.hy(s+g-1,g)}return r}}
A.arQ.prototype={
bJR(d){var x,w,v,u,t,s=this
if(s.db)for(x=0;x<s.ay.length;++x)for(w=0;v=s.ay[x],w<v.length;++w){u=d.adI()
v.$flags&2&&B.E(v)
v[w]=u}else{t=s.ay[0].length
for(x=0;x<t;++x){v=s.ay[0]
u=d.adI()
v.$flags&2&&B.E(v)
v[x]=u}}}}
A.bjh.prototype={
aU8(d,e,f){var x,w,v,u=this,t=d.c.length,s=J.iO(t,y.bc)
for(x=0;x<t;++x)s[x]=new A.aN4()
u.y=s
w=u.w
w.toString
v=D.c.b2(w*u.x,2)
u.z=new Uint16Array(v)},
PA(){return this.x},
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
if(j>=8192)throw B.n(A.c8("Error in header for PIZ-compressed data (invalid bitmap size)."))
i=new Uint8Array(8192)
if(k<=j){h=a4.jd(j-k+1)
g=h.c-h.d
for(f=k,q=0;q<g;++q,f=e){e=f+1
i[f]=J.v(h.a,h.d+q)}}d=new Uint16Array(65536)
a0=a3.bjI(i,d)
A.cXh(a4,a4.a3(),a3.z,r)
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
A.cXk(u,l+f,a1,v,a2,a1*v,a0);++f}}v=a3.z
v.toString
a3.aVY(d,v,r)
v=a3.r
if(v==null){v=a3.w
v.toString
v=a3.r=A.qq(!1,v*a3.x+73728)}v.a=0
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
v.le(u[l])}}v=a3.r
return J.df(D.D.gaj(v.c),0,v.a)},
Jq(d,e,f){return this.rO(d,e,f,null,null)},
aVY(d,e,f){var x,w,v
for(x=e.$flags|0,w=0;w<f;++w){v=d[e[w]]
x&2&&B.E(e)
e[w]=v}},
bjI(d,e){var x,w,v,u,t
for(x=e.$flags|0,w=0,v=0;v<65536;++v)if(v===0||(d[v>>>3]&1<<(v&7))>>>0!==0){u=w+1
x&2&&B.E(e)
e[w]=v
w=u}for(u=w;u<65536;u=t){t=u+1
x&2&&B.E(e)
e[u]=0}return w-1}}
A.aN4.prototype={}
A.bji.prototype={
PA(){return this.x},
rO(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=C.jO.Co(a0.hL()),d=f.y
if(d==null){d=f.w
d.toString
d=f.y=A.qq(!1,f.x*d)}d.a=0
x=B.a([0,0,0,0],y.t)
w=new Uint32Array(1)
v=J.df(D.by.gaj(w),0,null)
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
return J.df(D.D.gaj(d.c),0,d.a)},
Jq(d,e,f){return this.rO(d,e,f,null,null)}}
A.bjj.prototype={
PA(){return 1},
rO(d,e,f,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.c,g=A.qq(!1,(h-d.d)*2)
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
u.$flags&2&&B.E(u)
u[0]=v
t=$.ox()[0]
if(t<0){s=-t
for(;r=s-1,s>0;s=r)g.b1(J.v(d.a,d.d++))}else for(s=t;r=s-1,s>=0;s=r)g.b1(J.v(d.a,d.d++))}q=J.df(D.D.gaj(g.c),0,g.a)
p=q.length
for(h=q.$flags|0,o=1;o<p;++o){v=q[o-1]
u=q[o]
h&2&&B.E(q)
q[o]=v+u-128}h=i.r
if(h==null||h.length!==p)h=i.r=new Uint8Array(p)
v=D.c.b2(p+1,2)
for(n=0,m=0;!0;v=j,n=k){if(m<p){h.toString
l=m+1
k=n+1
u=q[n]
h.$flags&2&&B.E(h)
h[m]=u}else break
if(l<p){m=l+1
j=v+1
h[l]=q[v]}else break}h.toString
return h},
Jq(d,e,f){return this.rO(d,e,f,null,null)},
j(d){return B.q(this.w)}}
A.arR.prototype={
PA(){return this.x},
rO(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=C.jO.Co(d.hL())
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
v&2&&B.E(k)
k[s]=u+r-128}v=l.y
if(v==null||v.length!==t)v=l.y=new Uint8Array(t)
u=D.c.b2(t+1,2)
for(q=0,p=0;!0;u=m,q=n){if(p<t){v.toString
o=p+1
n=q+1
r=k[q]
v.$flags&2&&B.E(v)
v[p]=r}else break
if(o<t){p=o+1
m=u+1
v[o]=k[u]}else break}v.toString
return v},
Jq(d,e,f){return this.rO(d,e,f,null,null)},
j(d){return B.q(this.w)}}
A.bbB.prototype={
kf(d){var x=this.a
if(x==null)return null
return x.c[d].b},
mY(d,e,f){var x=new A.bbC(B.a([],y.m))
x.aTP(e)
this.a=x
return this.kf(0)}}
A.a_E.prototype={
bA2(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.b,w=this.d,v=-1,u=-1,t=0;t<x;++t){s=w.nj(t)
r=w.nh(t)
q=w.ng(t)
p=w.oz(t)
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
v=new A.us(new Uint8Array(w*4),w,4)
for(u=0;u<w;++u){t=x.nj(u)
s=x.nh(u)
r=x.ng(u)
v.S0(u,t,s,r,u===q.c?0:255)}return v}}
A.a_F.prototype={
aTT(d){var x,w,v,u,t,s,r=this
r.a=d.am()
r.b=d.am()
r.c=d.am()
r.d=d.am()
x=d.ct()
r.e=(x&64)!==0
if((x&128)!==0){r.f=A.cCv(D.c.eo(1,(x&7)+1))
for(w=0;v=r.f,w<v.b;++w){u=J.v(d.a,d.d++)
t=J.v(d.a,d.d++)
s=J.v(d.a,d.d++)
v.d.ps(w,u,t,s)}}r.x=d.d-d.b}}
A.arS.prototype={}
A.aqs.prototype={}
A.bfD.prototype={
oF(d){var x,w,v,u,t,s,r,q,p,o,n=this
n.f=A.cY(d,!1,null,0)
n.a=new A.aqs(B.a([],y.b))
if(!n.an6())return null
try{for(;u=n.f,t=u.d,t<u.c;){s=u.a
u.d=t+1
x=J.v(s,t)
switch(x){case 44:w=n.ate()
if(w==null){u=n.a
return u}u=w
u.r=n.e
u.w=n.c
if(n.b!==0){if(w.f==null&&n.a.e!=null){u=n.a.e
t=u.a
s=u.b
r=u.c
u=u.d
w.f=new A.a_E(t,s,r,new A.us(new Uint8Array(B.bZ(u.c)),u.a,u.b))}if(w.f!=null)w.f.c=n.d}n.a.r.push(w)
break
case 33:u=n.f
v=J.v(u.a,u.d++)
if(J.o(v,255)){u=n.f
if(u.je(J.v(u.a,u.d++))==="NETSCAPE2.0"){q=J.v(u.a,u.d++)
p=J.v(u.a,u.d++)
if(q===3&&p===1)n.r=u.am()}else n.VY()}else if(J.o(v,249)){u=n.f
u.toString
n.bih(u)}else n.VY()
break
case 59:u=n.a
return u
default:break}}}catch(o){}return n.a},
bih(d){var x,w,v,u=this
d.ct()
x=d.ct()
u.e=d.am()
u.d=d.ct()
d.ct()
u.c=D.c.S(x,2)&7
u.b=x&1
w=d.St(1,0)
if(J.v(w.a,w.d)===44){++d.d
v=u.ate()
if(v==null)return
v.r=u.e
v.w=u.c
if(u.b!==0){w=v.f
if(w==null&&u.a.e!=null){w=u.a.e
w.toString
w=v.f=A.cYu(w)}if(w!=null)w.c=u.d}u.a.r.push(v)}},
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
return u.aZV(v)},
mY(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null
if(a5.oF(a8)==null)return a6
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
if(t){v.nz(s)
w=s
continue}l=a9.f
if(!(l!=null)){t=a5.a.e
t.toString
l=t}t=o?a6:p.a
if(t==null)t=0
r=o?a6:p.b
if(r==null)r=0
k=A.hV(a6,a6,C.ab,0,C.bt,r,a6,0,1,l.afw(),C.ab,t,!1)
t=a9.w
if(t===2){t=a5.a.c.a
t=!D.D.gV(t)?t[0]:0
r=l.d
j=r.nj(t)
i=r.nh(t)
h=r.ng(t)
g=t===l.c?0:255
t=new Uint8Array(4)
t[0]=j
t[1]=i
t[2]=h
t[3]=g
r=k.a
if(r!=null)r.nB(0,new A.y_(t))}else if(t!==3)if(a9.f!=null){t=w.a
t=t==null?a6:t.geU()
t.toString
f=B.K(x,x)
for(r=l.b,e=0;e<r;++e)f.m(0,e,l.bA2(t.nj(e),t.nh(e),t.ng(e),t.oz(e)))
t=k.a
d=t==null?a6:J.hL(t.gaj(t))
if(d==null){t=k.a
t=t==null?a6:t.gaj(t)
if(t==null)t=D.D.gaj(new Uint8Array(0))
d=J.hL(t)}t=w.a
a0=t==null?a6:J.hL(t.gaj(t))
if(a0==null){t=w.a
t=t==null?a6:t.gaj(t)
if(t==null)t=D.D.gaj(new Uint8Array(0))
a0=J.hL(t)}for(a1=d.length,t=d.$flags|0,a2=0;a2<a1;++a2){a3=f.i(0,a0[a2])
if(a3!==-1){a3.toString
t&2&&B.E(d)
d[a2]=a3}}}k.y=s.y
for(t=s.a,t=t.ga5(t);t.q();){a4=t.gL(t)
if(a4.gaE(a4)!==0){r=a4.gne(a4)
q=a9.a
q===$&&B.b()
p=a4.gnZ(a4)
o=a9.b
o===$&&B.b()
k.AK(r+q,p+o,a4)}}v.nz(k)
w=k}return v},
ate(){var x,w=this.f
if(w.d>=w.c)return null
x=new A.arS()
x.aTT(w);++this.f.d
this.VY()
return x},
aZV(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.w==null){n.w=new Uint8Array(256)
n.x=new Uint8Array(4095)
n.y=new Uint8Array(4096)
n.z=new Uint32Array(4096)}x=n.Q=n.f.ct()
w=D.c.eW(1,x)
n.dy=w;++w
n.dx=w
n.db=w+1;++x
n.cy=x
n.cx=D.c.eW(1,x)
n.ay=0
n.CW=4098
n.at=n.ax=0
x=n.w
x.toString
x.$flags&2&&B.E(x)
x[0]=0
x=n.z
x.toString
D.by.m_(x,0,4096,4098)
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
s=A.hV(m,m,C.ab,0,C.bt,w,m,0,1,t.afw(),C.ab,x,!1)
r=new Uint8Array(x)
x=d.e
x===$&&B.b()
if(x){x=d.b
x===$&&B.b()
for(w=x+w,q=0,p=0;q<4;++q)for(o=x+C.avP[q];o<w;o+=C.azs[q],++p){if(!n.an8(r))return s
n.av1(s,o,t,r)}}else for(o=0;o<w;++o){if(!n.an8(r))return s
n.av1(s,o,t,r)}return s},
av1(d,e,f,g){var x,w,v,u=g.length
for(x=0;x<u;++x){w=g[x]
v=d.a
if(v!=null)v.fg(x,e,w,0,0)}},
an6(){var x,w,v,u,t,s=this,r=s.f.je(6)
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
x.c=new A.y_(new Uint8Array(B.bZ(B.a([s.f.ct()],y.t))));++s.f.d
if((w&128)!==0){x=s.a
x.toString
x.e=A.cCv(D.c.eo(1,(w&7)+1))
for(v=0;v<s.a.e.b;++v){x=s.f
u=J.v(x.a,x.d++)
x=s.f
t=J.v(x.a,x.d++)
x=s.f
w=J.v(x.a,x.d++)
s.a.e.d.ps(v,u,t,w)}}s.a.toString
return!0},
an8(d){var x=this,w=x.as
w.toString
x.as=w-d.length
if(!x.b_8(d))return!1
if(x.as===0)x.VY()
return!0},
VY(){var x,w,v,u=this.f
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
b_8(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.ay
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
v&2&&B.E(d)
d[w]=t
w=u}}for(k=d.$flags|0;w<x;){s=l.ch=l.b_7()
if(s==null)return!1
v=l.dx
if(s===v)return!1
t=l.dy
if(s===t){for(t=l.z,r=0;r<=4095;++r){t.toString
t.$flags&2&&B.E(t)
t[r]=4098}l.db=v+1
v=l.Q+1
l.cy=v
l.cx=D.c.eW(1,v)
l.CW=4098}else{if(s<t){u=w+1
k&2&&B.E(d)
d[w]=s
w=u}else{v=l.z
if(v[s]===4098){q=l.db-2
if(s===q){s=l.CW
p=l.y
p===$&&B.b()
o=l.x
o===$&&B.b()
n=l.ay++
t=l.a4n(v,s,t)
o.$flags&2&&B.E(o)
o[n]=t
p.$flags&2&&B.E(p)
p[q]=t}else return!1}r=0
while(!0){m=r+1
if(!(r<=4095&&s>l.dy&&s<=4095))break
v=l.x
v===$&&B.b()
t=l.ay++
q=l.y
q===$&&B.b()
q=q[s]
v.$flags&2&&B.E(v)
v[t]=q
s=l.z[s]
r=m}if(m>=4095||s>4095)return!1
v=l.x
v===$&&B.b()
t=l.ay
q=l.ay=t+1
v.$flags&2&&B.E(v)
v[t]=s
t=q
while(!0){if(!(t!==0&&w<x))break
u=w+1
t=l.ay=t-1
q=v[t]
k&2&&B.E(d)
d[w]=q
w=u}}v=l.CW
if(v!==4098&&l.z[l.db-2]===4098){t=l.z
t.toString
q=l.db-2
t.$flags&2&&B.E(t)
t[q]=v
p=l.ch
o=l.y
n=l.dy
if(p===q){o===$&&B.b()
v=l.a4n(t,v,n)
o.$flags&2&&B.E(o)
o[q]=v}else{o===$&&B.b()
p.toString
v=l.a4n(t,p,n)
o.$flags&2&&B.E(o)
o[q]=v}}v=l.ch
v.toString
l.CW=v}}return!0},
b_7(){var x,w,v,u,t=this
if(t.cy>12)return null
for(;x=t.ax,w=t.cy,x<w;){x=t.aWo()
x.toString
w=t.at
v=t.ax
t.at=(w|D.c.eW(x,v))>>>0
t.ax=v+8}v=t.at
u=C.aA7[w]
t.at=D.c.h1(v,w)
t.ax=x-w
x=t.db
if(x<4097){++x
t.db=x
x=x>t.cx&&w<12}else x=!1
if(x){t.cx=t.cx<<1>>>0
t.cy=w+1}return v&u},
a4n(d,e,f){var x,w,v=0
while(!0){if(e>f){x=v+1
w=v<=4095
v=x}else w=!1
if(!w)break
if(e>4095)return 4098
e=d[e]}return e},
aWo(){var x,w,v=this,u=v.w,t=u[0],s=u.$flags|0
if(t===0){t=v.f.ct()
s&2&&B.E(u)
u[0]=t
u=v.w
t=u[0]
if(t===0)return null
D.D.hZ(u,1,1+t,v.f.jd(t).hL())
u=v.w
x=u[1]
u.$flags&2&&B.E(u)
u[1]=2
u[0]=u[0]-1}else{w=u[1]
s&2&&B.E(u)
u[1]=w+1
x=u[w]
u[0]=t-1}return x}}
A.Pf.prototype={
J(){return"IcoType."+this.b}}
A.bi2.prototype={}
A.are.prototype={}
A.bi0.prototype={
gb5(d){return D.c.b2(A.FR.prototype.gb5.call(this,0),2)},
gOQ(){return!(this.d===40&&this.f===32)&&A.FR.prototype.gOQ.call(this)}}
A.bi1.prototype={
mY(d,e,f){var x,w,v,u=this,t=A.cY(e,!1,null,0)
u.a=t
x=u.b=A.cCP(t)
if(x==null)return null
t=x.e.length
if(t===1)return u.kf(0)
for(w=null,v=0;v<u.b.e.length;++v){f=u.kf(v)
if(f==null)continue
if(w==null){f.w=C.bt
w=f}else w.nz(f)}return w},
kf(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=this.a
if(a7!=null){x=this.b
x=x==null||a8>=x.d}else x=!0
if(x)return a6
w=this.b.e[a8]
x=a7.a
a7=a7.b+w.e
v=w.d
u=J.cqY(x,a7,a7+v)
t=new A.awY(A.cDk())
y.D.a(u)
if(t.I8(u))return t.da(0,u)
s=A.qq(!1,14)
s.le(19778)
s.j_(v)
s.j_(0)
s.j_(0)
a7=A.cY(u,!1,a6,0)
x=A.czC(A.cY(J.df(D.D.gaj(s.c),0,s.a),!1,a6,0))
v=a7.d
r=a7.a3()
q=a7.a3()
p=$.hy()
p.$flags&2&&B.E(p)
p[0]=q
q=$.kL()
o=q[0]
p[0]=a7.a3()
q=q[0]
n=a7.am()
m=a7.am()
l=C.TJ[a7.a3()]
a7.a3()
p[0]=a7.a3()
p[0]=a7.a3()
p=a7.a3()
a7.a3()
k=new A.bi0(x,o,q,r,n,m,l,p,v)
k.aiy(a7,x)
if(r!==40&&n!==1)return a6
j=p===0&&m<=8?40+4*D.c.eo(1,m):40+4*p
x.b=j
s.a-=4
s.j_(j)
i=A.cY(u,!1,a6,0)
h=new A.b7U(!0)
h.a=i
h.b=k
g=h.kf(0)
if(m>=32)return g
f=32-D.c.an(o,32)
e=D.c.b2(f===32?o:o+f,8)
for(a7=1/q<0,x=q<0,q=q===0,d=0;d<D.c.b2(A.FR.prototype.gb5.call(k,0),2);++d){if(!(q?a7:x))a0=d
else{v=g.a
v=v==null?a6:v.b
a0=(v==null?0:v)-1-d}a1=i.ji(e)
i.d=i.d+(a1.c-a1.d)
v=g.a
a2=v==null?a6:v.ec(0,a0,a6)
if(a2==null)a2=new A.fk()
for(a3=0;a3<o;){a4=J.v(a1.a,a1.d++)
a5=7
while(!0){if(!(a5>-1&&a3<o))break
if((a4&D.c.eW(1,a5))>>>0!==0)a2.saE(0,0)
a2.q();++a3;--a5}}}return g}}
A.akO.prototype={}
A.Hs.prototype={}
A.Ht.prototype={}
A.a06.prototype={
gp(d){return this.a}}
A.bjJ.prototype={}
A.Cb.prototype={}
A.bjL.prototype={
QW(d){var x,w,v,u,t,s=this,r=A.cY(d,!0,null,0)
s.a=r
x=r.St(2,0)
if(J.v(x.a,x.d)!==255||J.v(x.a,x.d+1)!==216)return!1
if(s.FG()!==216)return!1
w=s.FG()
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
break}w=s.FG()}return v&&u},
vo(d,e){var x,w,v,u,t,s,r,q,p=this
p.a=A.cY(e,!0,null,0)
p.bi9()
if(p.x.length!==1)throw B.n(A.c8("Only single frame JPEGs supported"))
for(x=p.Q,w=0;v=p.d,u=v.z,w<u.length;++w){t=v.y.i(0,u[w])
v=t.a
u=p.d
s=u.f
r=t.b
q=u.r
u=p.aWx(u,t)
v=v===1&&s===2?1:0
x.push(new A.akO(u,v,r===1&&q===2?1:0))}},
bi9(){var x,w,v,u,t,s=this
if(s.FG()!==216)throw B.n(A.c8("Start Of Image marker not found."))
x=s.FG()
while(!0){if(x!==217){w=s.a
w===$&&B.b()
w=w.d<w.c}else w=!1
if(!w)break
w=s.a
w===$&&B.b()
v=w.am()
if(v<2)B.a7(A.c8("Invalid Block"))
w=s.a
u=w.ji(v-2)
w.d=w.d+(u.c-u.d)
switch(x){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:s.bia(x,u)
break
case 219:s.bid(u)
break
case 192:case 193:case 194:s.bif(x,u)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw B.n(A.c8("Unhandled frame type "+D.c.kG(x,16)))
case 196:s.bic(u)
break
case 221:s.e=u.am()
break
case 218:s.bis(u)
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
break}if(x!==0)throw B.n(A.c8("Unknown JPEG marker "+D.c.kG(x,16)))
break}x=s.FG()}},
FG(){var x,w=this,v=w.a
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
bie(d){if(d.a3()!==1165519206)return
if(d.am()!==0)return
this.r.vo(0,d)},
bia(d,e){var x,w,v,u,t=this,s=e
if(d===224){x=s
w=!1
if(J.v(x.a,x.d)===74){x=s
if(J.v(x.a,x.d+1)===70){x=s
if(J.v(x.a,x.d+2)===73){x=s
if(J.v(x.a,x.d+3)===70){x=s
x=J.v(x.a,x.d+4)===0}else x=w}else x=w}else x=w}else x=w
if(x){x=new A.bjP()
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
s.St(14+3*w*v,14)}}else if(d===225)t.bie(s)
else if(d===238){x=s
w=!1
if(J.v(x.a,x.d)===65){x=s
if(J.v(x.a,x.d+1)===100){x=s
if(J.v(x.a,x.d+2)===111){x=s
if(J.v(x.a,x.d+3)===98){x=s
if(J.v(x.a,x.d+4)===101){x=s
x=J.v(x.a,x.d+5)===0}else x=w}else x=w}else x=w}else x=w}else x=w
if(x){t.c=new A.bjJ()
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
x.d=J.v(w.a,w.d+11)}}else if(d===254)try{s.bJV()}catch(u){B.aZ(u)}},
bid(d){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=this.w;v=d.d,u=v<x,u;){u=d.a
d.d=v+1
t=J.v(u,v)
s=D.c.S(t,4)
t&=15
if(t>=4)throw B.n(A.c8("Invalid number of quantization tables"))
v=w[t]
if(v==null){v=new Int16Array(64)
w[t]=v}for(u=s!==0,r=0;r<64;++r){q=u?d.am():J.v(d.a,d.d++)
p=C.xk[r]
v.$flags&2&&B.E(v)
v[p]=q}}if(u)throw B.n(A.c8("Bad length for DQT block"))},
bif(d,e){var x,w,v,u,t,s,r,q=this
if(q.d!=null)throw B.n(A.c8("Duplicate JPG frame data found."))
x=q.d=new A.as4(B.K(y.p,y.c),B.a([],y.t))
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
q.d.y.m(0,u,new A.Cb(s&15,t&15,x,r))}q.d.bIK()
q.x.push(q.d)},
bic(d){var x,w,v,u,t,s,r,q,p,o,n,m
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
m[s]=this.aWK(r,n)}},
bis(d){var x,w,v,u,t,s,r,q=this,p=d.ct()
if(p<1||p>4)throw B.n(A.c8("Invalid SOS block"))
x=B.qb(p,new A.bjM(q,d),!0,y.c)
w=d.ct()
v=d.ct()
u=d.ct()
t=D.c.S(u,4)
s=q.a
s===$&&B.b()
r=q.d
t=new A.as5(s,r,x,q.e,w,v,t&15,u&15)
s=r.w
s===$&&B.b()
t.f=s
t.r=r.b
t.oe(0)},
aWK(d,e){var x,w,v,u,t,s,r,q,p,o,n=B.a([],y.C),m=16
while(!0){if(!(m>0&&d[m-1]===0))break;--m}x=y.aH
n.push(new A.Uv(B.a([],x)))
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
p=new A.Uv(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.su(r,o+1)
r[w.b]=new A.Ht(s)}++v}++u
if(u<m){s=B.a([],x)
p=new A.Uv(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.su(r,o+1)
r[w.b]=new A.Ht(s)
w=p}}return n[0].a},
aWx(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.e
d===$&&B.b()
x=a1.f
x===$&&B.b()
w=d<<3>>>0
v=new Int32Array(64)
u=new Uint8Array(64)
t=B.bP(x*8,null,!1,y.ac)
for(s=a1.c,r=a1.d,q=0,p=0;p<x;++p){o=p<<3>>>0
for(n=0;n<8;++n,q=m){m=q+1
t[q]=new Uint8Array(w)}for(l=0;l<d;++l){k=s[r]
k.toString
j=a1.r
j===$&&B.b()
A.djA(k,j[p][l],u,v)
i=l<<3>>>0
for(h=0,g=0;g<8;++g){f=t[o+g]
for(n=0;n<8;++n,h=e){f.toString
e=h+1
k=u[h]
f.$flags&2&&B.E(f)
f[i+n]=k}}}}return t}}
A.Uv.prototype={}
A.as4.prototype={
bIK(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.y,w=B.t(x).h("ch<1>"),v=new B.ch(x,x.r,x.e,w);v.q();){u=x.i(0,v.d)
g.f=Math.max(g.f,u.a)
g.r=Math.max(g.r,u.b)}v=g.e
v.toString
g.w=D.d.f8(v/8/g.f)
v=g.d
v.toString
g.x=D.d.f8(v/8/g.r)
for(w=new B.ch(x,x.r,x.e,w),v=y.h,t=y.bp;w.q();){s=x.i(0,w.d)
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
k=J.iO(l,t)
for(j=0;j<l;++j){i=J.iO(m,v)
for(h=0;h<m;++h)i[h]=new Int32Array(64)
k[j]=i}s.e=p
s.f=n
s.r=k}}}
A.bjP.prototype={}
A.as5.prototype={
oe(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.y,f=g.length,e=h.r
e.toString
if(e)if(h.Q===0)x=h.at===0?h.gaZO():h.gaZQ()
else x=h.at===0?h.gaZF():h.gaZH()
else x=h.gaZL()
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
for(l=0;l<m;++l)for(k=0;k<n;++k)h.aZW(r,x,t,l,k)}++t;++q}}h.ch=0
j=J.v(w.a,w.d)
i=J.v(w.a,w.d+1)
if(j===255)if(i>=208&&i<=215)w.d+=2
else break}},
BK(){var x,w=this,v=w.ch
if(v>0){--v
w.ch=v
return D.c.o3(w.ay,v)&1}v=w.a
if(v.d>=v.c)return null
x=v.ct()
w.ay=x
if(x===255)if(v.ct()!==0)return null
w.ch=7
return D.c.S(w.ay,7)&1},
LK(d){var x,w=new A.Ht(d)
for(;x=this.BK(),x!=null;){if(w instanceof A.Ht)w=w.a[x]
if(w instanceof A.a06)return w.a}return null},
a69(d){var x,w
for(x=0;d>0;){w=this.BK()
if(w==null)return null
x=(x<<1|w)>>>0;--d}return x},
Ma(d){var x
if(d==null)return 0
if(d===1)return this.BK()===1?1:-1
x=this.a69(d)
if(x==null)return 0
if(x>=D.c.eW(1,d-1))return x
return x+D.c.eo(-1,d)+1},
aZM(d,e){var x,w,v,u,t,s,r=this,q=d.w
q===$&&B.b()
x=r.LK(q)
w=x===0?0:r.Ma(x)
q=d.y
q===$&&B.b()
q+=w
d.y=q
e.$flags&2&&B.E(e)
e[0]=q
for(v=1;v<64;){q=d.x
q===$&&B.b()
u=r.LK(q)
if(u==null)break
t=u&15
s=u>>>4
if(t===0){if(s<15)break
v+=16
continue}v+=s
t=r.Ma(t)
e[C.xk[v]]=t;++v}},
aZP(d,e){var x,w,v=d.w
v===$&&B.b()
x=this.LK(v)
w=x===0?0:D.c.eo(this.Ma(x),this.ax)
v=d.y
v===$&&B.b()
v+=w
d.y=v
e.$flags&2&&B.E(e)
e[0]=v},
aZR(d,e){var x=e[0],w=this.BK()
w.toString
w=D.c.eo(w,this.ax)
e.$flags&2&&B.E(e)
e[0]=(x|w)>>>0},
aZG(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.CW
if(o>0){p.CW=o-1
return}x=p.Q
w=p.as
for(o=p.ax,v=e.$flags|0;x<=w;){u=d.x
u===$&&B.b()
u=p.LK(u)
u.toString
t=u&15
s=u>>>4
if(t===0){if(s<15){o=p.a69(s)
o.toString
p.CW=o+D.c.eo(1,s)-1
break}x+=16
continue}x+=s
r=C.xk[x]
u=p.Ma(t)
q=D.c.eo(1,o)
v&2&&B.E(e)
e[r]=u*q;++x}},
aZI(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.Q,n=p.as
$label0$1:for(x=p.ax,w=e.$flags|0,v=0;o<=n;){u=C.xk[o]
t=p.cx
switch(t){case 0:t=d.x
t===$&&B.b()
s=p.LK(t)
if(s==null)throw B.n(A.c8("Invalid progressive encoding"))
r=s&15
v=s>>>4
if(r===0)if(v<15){t=p.a69(v)
t.toString
p.CW=t+D.c.eo(1,v)
p.cx=4}else{p.cx=1
v=16}else{if(r!==1)throw B.n(A.c8("invalid ACn encoding"))
p.cy=p.Ma(r)
p.cx=v!==0?2:3}continue $label0$1
case 1:case 2:q=e[u]
if(q!==0){t=p.BK()
t.toString
t=D.c.eo(t,x)
w&2&&B.E(e)
e[u]=q+t}else{--v
if(v===0)p.cx=t===2?3:0}break
case 3:t=e[u]
if(t!==0){q=p.BK()
q.toString
q=D.c.eo(q,x)
w&2&&B.E(e)
e[u]=t+q}else{t=p.cy
t===$&&B.b()
t=D.c.eo(t,x)
w&2&&B.E(e)
e[u]=t
p.cx=0}break
case 4:t=e[u]
if(t!==0){q=p.BK()
q.toString
q=D.c.eo(q,x)
w&2&&B.E(e)
e[u]=t+q}break}++o}if(p.cx===4)if(--p.CW===0)p.cx=0},
aZW(d,e,f,g,h){var x,w,v=this.f
v===$&&B.b()
x=D.c.hy(f,v)*d.b+g
w=D.c.an(f,v)*d.a+h
v=d.r
v===$&&B.b()
if(x>=v.length)return
v=v[x]
if(w>=v.length)return
e.$2(d,v[w])}}
A.as3.prototype={
mY(d,e,f){var x=A.cDx()
x.vo(0,e)
if(x.x.length!==1)throw B.n(A.c8("only single frame JPEGs supported"))
return A.dhS(x)},
da(d,e){return this.mY(0,e,null)}}
A.bjK.prototype={
J(){return"JpegChroma."+this.b}}
A.bjN.prototype={
aLE(d){d=D.d.C(D.c.b3(d,1,100))
if(this.at===d)return
this.baV(d<50?D.d.fv(5000/d):D.c.fv(200-d*2))
this.at=d},
bz1(b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=A.qq(!0,8192)
a8.z_(a9,216)
a8.z_(a9,224)
a9.le(16)
a9.b1(74)
a9.b1(70)
a9.b1(73)
a9.b1(70)
a9.b1(0)
a9.b1(1)
a9.b1(1)
a9.b1(0)
a9.le(1)
a9.le(1)
a9.b1(0)
a9.b1(0)
a8.bqT(a9,b0.gwO())
a8.bqX(a9)
x=b0.gd0(0)
w=b0.gb5(0)
a8.z_(a9,192)
a9.le(17)
a9.b1(8)
a9.le(w)
a9.le(x)
a9.b1(3)
a9.b1(1)
x=b1===C.MU
a9.b1(x?17:34)
a9.b1(0)
a9.b1(2)
a9.b1(17)
a9.b1(1)
a9.b1(3)
a9.b1(17)
a9.b1(1)
a8.bqW(a9)
a8.z_(a9,218)
a9.le(12)
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
for(x=a8.c,w=a8.d,q=0,p=0,o=0,n=0;n<u;n+=8)for(m=0;m<v;m+=8){a8.KM(b0,m,n,v,u,t,s,r)
l=a8.e
k=a8.r
k===$&&B.b()
q=a8.we(a9,t,x,q,l,k)
k=a8.f
l=a8.w
l===$&&B.b()
p=a8.we(a9,s,w,p,k,l)
o=a8.we(a9,r,w,o,a8.f,a8.w)}}else{x=y.z
t=J.kw(4,x)
for(j=0;j<4;++j)t[j]=new Float32Array(64)
s=J.kw(4,x)
for(j=0;j<4;++j)s[j]=new Float32Array(64)
r=J.kw(4,x)
for(j=0;j<4;++j)r[j]=new Float32Array(64)
i=new Float32Array(64)
h=new Float32Array(64)
for(x=a8.c,w=a8.d,q=0,p=0,o=0,n=0;n<u;n+=16)for(l=n+8,m=0;m<v;m+=16){k=t[0]
g=s[0]
f=r[0]
a8.KM(b0,m,n,v,u,k,g,f)
e=m+8
d=t[1]
a0=s[1]
a1=r[1]
a8.KM(b0,e,n,v,u,d,a0,a1)
a2=t[2]
a3=s[2]
a4=r[2]
a8.KM(b0,m,l,v,u,a2,a3,a4)
a5=t[3]
a6=s[3]
a7=r[3]
a8.KM(b0,e,l,v,u,a5,a6,a7)
a8.alI(i,g,a0,a3,a6)
a8.alI(h,f,a1,a4,a7)
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
a8.wn(a9,B.a([D.c.eW(1,x)-1,x],y.t))}a8.z_(a9,217)
return J.df(D.D.gaj(a9.c),0,a9.a)},
KM(d,e,f,g,h,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(x=this.as,w=a0.$flags|0,v=a1.$flags|0,u=a2.$flags|0,t=f+1,s=0;s<64;++s){r=s>>>3
q=f+r
p=e+(s&7)
if(q>=h)q-=t+r-h
if(p>=g)p-=p-g+1
o=d.a
n=o==null?null:o.ec(p,q,null)
if(n==null)n=new A.fk()
if(n.gdt()!==C.ab)n=n.od(C.ab)
if(n.gu(n)>3){m=n.gfs()
l=1-m
n.saf(0,D.d.aT(n.gaf(n)*m+C.Bf.i(0,0)*l))
n.sap(D.d.aT(n.gap()*m+C.Bf.i(0,0)*l))
n.sau(0,D.d.aT(n.gau(n)*m+C.Bf.i(0,0)*l))}k=D.d.C(n.gaf(n))
j=D.d.C(n.gap())
i=D.d.C(n.gau(n))
o=D.c.S(x[k]+x[j+256]+x[i+512],16)
w&2&&B.E(a0)
a0[s]=o-128
o=D.c.S(x[k+768]+x[j+1024]+x[i+1280],16)
v&2&&B.E(a1)
a1[s]=o-128
o=D.c.S(x[k+1280]+x[j+1536]+x[i+1792],16)
u&2&&B.E(a2)
a2[s]=o-128}},
alI(d,e,f,g,h){var x,w,v,u,t,s,r,q
for(x=d.$flags|0,w=0;w<64;++w){if(w<32)v=D.c.an(w,8)<4?e:f
else v=D.c.an(w,8)<4?g:h
u=(D.c.b2(D.c.an(w,32),8)<<4>>>0)+(D.c.an(w,4)<<1>>>0)
t=v[u]
s=v[u+1]
r=v[u+8]
q=v[u+9]
x&2&&B.E(d)
d[w]=(t+s+r+q)/4}},
z_(d,e){d.b1(255)
d.b1(e&255)},
baV(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.a,w=x.$flags|0,v=0;v<64;++v){u=D.d.fv((C.aFx[v]*d+50)/100)
if(u<1)u=1
else if(u>255)u=255
t=C.tM[v]
w&2&&B.E(x)
x[t]=u}for(w=g.b,t=w.$flags|0,s=0;s<64;++s){r=D.d.fv((C.az_[s]*d+50)/100)
if(r<1)r=1
else if(r>255)r=255
q=C.tM[s]
t&2&&B.E(w)
w[q]=r}for(t=g.c,q=t.$flags|0,p=g.d,o=p.$flags|0,n=0,m=0;m<8;++m)for(l=0;l<8;++l){k=C.tM[n]
j=x[k]
i=C.Og[m]
h=C.Og[l]
q&2&&B.E(t)
t[n]=1/(j*i*h*8)
k=w[k]
o&2&&B.E(p)
p[n]=1/(k*i*h*8);++n}},
Tb(d,e){var x,w,v,u,t,s=y.t,r=B.a([B.a([],s)],y.cQ)
for(x=0,w=0,v=1;v<=16;++v){for(u=1;u<=d[v];++u){t=e[w]
if(r.length<=t)D.b.su(r,t+1)
r[t]=B.a([x,v],s);++w;++x}x*=2}return r},
baK(){var x,w,v,u,t,s,r,q,p,o,n
for(x=this.y,w=this.x,v=y.t,u=1,t=2,s=1;s<=15;++s){for(r=u;r<t;++r){q=32767+r
x[q]=s
w[q]=B.a([r,s],v)}for(q=t-1,p=-q,o=-u;p<=o;++p){n=32767+p
x[n]=s
w[n]=B.a([q+p,s],v)}u=u<<1>>>0
t=t<<1>>>0}},
baW(){var x,w,v
for(x=this.as,w=x.$flags|0,v=0;v<256;++v){w&2&&B.E(x)
x[v]=19595*v
x[v+256]=38470*v
x[v+512]=7471*v+32768
x[v+768]=-11059*v
x[v+1024]=-21709*v
x[v+1280]=32768*v+8421375
x[v+1536]=-27439*v
x[v+1792]=-5329*v}},
b1F(d4,d5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3
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
x&2&&B.E(d4)
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
x&2&&B.E(d4)
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
bqT(d,e){var x,w
if(e.gV(0))return
x=A.qq(!1,8192)
e.jE(0,x)
w=J.df(D.D.gaj(x.c),0,x.a)
this.z_(d,225)
d.le(w.length+8)
d.j_(1165519206)
d.le(0)
d.m7(w)},
bqX(d){var x,w,v
this.z_(d,219)
d.le(132)
d.b1(0)
for(x=this.a,w=0;w<64;++w)d.b1(x[w])
d.b1(1)
for(x=this.b,v=0;v<64;++v)d.b1(x[v])},
bqW(d){var x,w,v,u,t,s,r,q
this.z_(d,196)
d.le(418)
d.b1(0)
for(x=0;x<16;){++x
d.b1(C.Vo[x])}for(w=0;w<=11;++w)d.b1(C.tf[w])
d.b1(16)
for(v=0;v<16;){++v
d.b1(C.Nm[v])}for(u=0;u<=161;++u)d.b1(C.OF[u])
d.b1(1)
for(t=0;t<16;){++t
d.b1(C.Qh[t])}for(s=0;s<=11;++s)d.b1(C.tf[s])
d.b1(17)
for(r=0;r<16;){++r
d.b1(C.P6[r])}for(q=0;q<=161;++q)d.b1(C.Rz[q])},
we(d,e,f,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=a2[0],h=a2[240],g=j.b1F(e,f)
for(x=j.Q,w=0;w<64;++w)x[C.tM[w]]=g[w]
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
for(;u>=0;){if((v&D.c.eW(1,u))>>>0!==0)w.ax=(w.ax|D.c.eW(1,w.ay))>>>0;--u
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
A.arT.prototype={}
A.D0.prototype={
J(){return"PngFilterType."+this.b}}
A.bth.prototype={}
A.bjl.prototype={}
A.awY.prototype={
I8(d){var x,w=A.cY(d,!0,null,0).jd(8)
for(x=0;x<8;++x)if(J.v(w.a,w.d+x)!==D.TY[x])return!1
return!0},
oF(b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=A.cY(b4,!0,b2,0)
b1.d=b3
x=b3.jd(8)
for(w=0;w<8;++w)if(J.v(x.a,x.d+w)!==D.TY[w])return b2
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
r.m(0,D.em.da(0,new Uint8Array(l.subarray(0,B.qR(0,w,k)))),D.em.da(0,new Uint8Array(l.subarray(q,B.qR(q,b2,k)))))
break}b1.d.d+=4
break
case"pHYs":q=b1.d
m=q.ji(o)
q.d=q.d+(m.c-m.d)
j=A.cb(m,b2,0)
j.a3()
j.a3()
J.v(j.a,j.d++)
b1.d.d+=4
break
case"IHDR":q=b1.d
m=q.ji(o)
q.d=q.d+(m.c-m.d)
i=A.cb(m,b2,0)
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
break}if(b1.d.a3()!==A.xv(h,A.xv(new B.eQ(n),0)))throw B.n(A.c8("Invalid "+n+" checksum"))
break
case"PLTE":q=b1.d
m=q.ji(o)
q.d=q.d+(m.c-m.d)
b3.w=m.hL()
if(b1.d.a3()!==A.xv(s.a(b3.w),A.xv(new B.eQ(n),0)))throw B.n(A.c8("Invalid "+n+" checksum"))
break
case"tRNS":q=b1.d
m=q.ji(o)
q.d=q.d+(m.c-m.d)
b3.x=m.hL()
g=b1.d.a3()
q=b3.x
q.toString
if(g!==A.xv(q,A.xv(new B.eQ(n),0)))throw B.n(A.c8("Invalid "+n+" checksum"))
break
case"IEND":b1.d.d+=4
break
case"gAMA":if(o!==4)throw B.n(A.c8("Invalid gAMA chunk"))
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
q=C.awA[a4]
f=C.aCV[a5]
v.push(new A.arT(B.a([],u),e,d,a0,a1,a2,a3,q,f))
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
if(q!=null){q=D.D.n(q,a6)?0:255
f=new Uint8Array(4)
f[0]=a8
f[1]=a9
f[2]=b0
f[3]=q
b3.z=new A.Nt(f)}else{q=new Uint8Array(3)
q[0]=a8
q[1]=a9
q[2]=b0
b3.z=new A.akJ(q)}}else if(q===0||q===4){b1.d.am()
o-=2}else if(q===2||q===6){q=b1.d
q.am()
q.am()
q.am()
o-=24}if(o>0)b1.d.d+=o
b1.d.d+=4
break
case"iCCP":b3.Q=b1.d.Qg()
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
if(b1.d.a3()!==A.xv(p,A.xv(new B.eQ(r),0)))throw B.n(A.c8("Invalid "+r+" checksum"))}b3=new Uint8Array(u)
for(b7=w.length,o=0,n=0;n<w.length;w.length===b7||(0,B.S)(w),++n){p=w[n]
J.cqX(b3,o,p)
o+=p.length}}else{if(b9>=b8)throw B.n(A.c8("Invalid Frame Number: "+b9))
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
for(b7=w.length,o=0,n=0;n<w.length;w.length===b7||(0,B.S)(w),++n){p=w[n]
J.cqX(b3,o,p)
o+=p.length}}b7=b4.d
l=1
if(!(b7===3))if(!(b7===0)){if(b7===4)b7=2
else b7=b7===6?4:3
l=b7}x=null
try{x=C.jO.Co(b3)}catch(k){return b2}j=A.cY(x,!0,b2,0)
b1.c=b1.b=0
i=b2
if(b4.d===3){b7=b4.w
if(b7!=null){h=b7.length/3|0
g=b4.x
b8=g!=null
f=b8?g.length:0
e=b8?4:3
i=new A.us(new Uint8Array(h*e),h,e)
for(b8=e===4,t=0,d=0;t<h;++t,d+=3){a0=b8&&t<f?g[t]:255
i.S0(t,b7[d],b7[d+1],b7[d+2],a0)}}}if(b4.d===0&&b4.x!=null&&i==null&&b4.c<=8){g=b4.x
a1=g.length
b7=b4.c
h=D.c.eW(1,b7)
i=new A.us(new Uint8Array(h*4),h,4)
if(b7===1)a2=255
else if(b7===2)a2=85
else{b7=b7===4?17:1
a2=b7}for(t=0;t<h;++t){a3=t*a2
i.S0(t,a3,a3,a3,255)}for(b7=i.b,b8=3<b7,a4=i.c,a5=a4.$flags|0,t=0;t<a1;t+=2){a6=(g[t]&255)<<8|g[t+1]&255
if(a6<h)if(b8){a5&2&&B.E(a4)
a4[a6*b7+3]=0}}}b7=b4.c
if(b7===1)a7=C.fS
else if(b7===2)a7=C.hI
else{if(b7===4)b8=C.hJ
else b8=b7===16?C.cy:C.ab
a7=b8}b8=b4.d
if(b8===0&&b4.x!=null&&b7>8)l=4
a8=A.hV(b2,b2,a7,0,C.bt,b6,b2,0,b8===2&&b4.x!=null?4:l,i,C.ab,b5,!1)
a9=b4.a
b0=b4.b
b4.a=b5
b4.b=b6
b1.e=0
if(b4.r!==0){b7=b6+7>>>3
b1.BJ(j,a8,0,0,8,8,b5+7>>>3,b7)
b8=b5+3
b1.BJ(j,a8,4,0,8,8,b8>>>3,b7)
b7=b6+3
b1.BJ(j,a8,0,4,4,8,b8>>>2,b7>>>3)
b8=b5+1
b1.BJ(j,a8,2,0,4,4,b8>>>2,b7>>>2)
b7=b6+1
b1.BJ(j,a8,0,2,2,4,b8>>>1,b7>>>2)
b1.BJ(j,a8,1,0,2,2,b5>>>1,b7>>>1)
b1.BJ(j,a8,0,1,1,2,b5,b6>>>1)}else b1.bhl(j,a8)
b4.a=a9
b4.b=b0
b7=b4.at
if(b7!=null)a8.c=new A.a08(b4.Q,C.Cb,b7)
b4=b4.ax
if(b4.a!==0)a8.brO(b4)
return a8},
mY(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(g.oF(e)==null)return f
x=g.a
w=x.cx
v=w.length
if(v===0){x=g.kf(0)
x.toString
return x}for(v=y.g,u=f,t=u,s=0;s<x.ch;++s){a0=w[s]
r=g.kf(s)
if(r==null)continue
if(t==null||u==null){t=r.ayC(r.gqh())
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
o=o===(n==null?0:n)&&a0.d===0&&a0.e===0&&a0.x===C.a8m}else o=!1
if(o){q=a0.f
r.y=D.d.C((q===0||a0.r===0?0:q/a0.r)*1000)
t.nz(r)
u=r
continue}i=t.x
u=A.BR((i===$?t.x=B.a([],v):i)[q],!1,!1)
h=p.w
if(h===C.a8o){q=p.d
o=p.e
n=x.z
if(n==null){n=new Uint8Array(4)
m=new A.Nt(n)
n[0]=0
n[1]=0
n[2]=0
n[3]=0
n=m}A.dhe(u,!1,n,q,q+p.b-1,o,o+p.c-1)}else if(h===C.a8p&&s>1){i=t.x
if(i===$)i=t.x=B.a([],v)
q=p.d
o=p.e
n=p.b
m=p.c
u=A.cwH(u,i[s-2],C.Am,m,n,q,o,m,n,q,o)}q=a0.f
u.y=D.d.C((q===0||a0.r===0?0:q/a0.r)*1000)
q=a0.x===C.a8n?C.Am:C.Al
u=A.cwH(u,r,q,f,f,a0.d,a0.e,f,f,f,f)
t.nz(u)}return t},
da(d,e){return this.mY(0,e,null)},
BJ(a0,a1,a2,a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=e.d
if(d===4)x=2
else if(d===2)x=3
else{d=d===6?4:1
x=d}w=x*e.c
v=D.c.S(w+7,3)
u=D.c.S(w*a6+7,3)
t=B.a([null,null],y.e)
s=B.a([0,0,0,0],y.t)
for(e=a4>1,r=a4-a2,q=a3,p=0,o=0;p<a7;++p,q+=a5,++f.e){n=C.T1[J.v(a0.a,a0.d++)]
m=a0.ji(u)
a0.d=a0.d+(m.c-m.d)
d=m.hL()
t[o]=d
o=1-o
f.auu(n,v,d,t[o])
f.c=f.b=0
l=d.length
k=new A.m3(d,0,Math.min(l,l),0,!0)
for(d=r<=1,j=a2,i=0;i<a6;++i,j+=a4){f.ars(k,s)
l=a1.a
l=l==null?null:l.ec(j,q,null)
f.a6F(l==null?new A.fk():l,s)
if(!d||e)for(h=0;h<a4;++h)for(l=q+h,g=0;g<r;++g)f.a6F(a1.ko(j+g,l),s)}}},
bhl(d,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a,e=f.d
if(e===4)x=2
else if(e===2)x=3
else{e=e===6?4:1
x=e}w=x*f.c
v=f.a
u=f.b
t=D.c.S(v*w+7,3)
s=D.c.S(w+7,3)
r=B.bP(t,0,!1,y.p)
q=B.a([r,r],y.S)
p=B.a([0,0,0,0],y.t)
f=a0.a
o=f.ga5(f)
o.q()
for(n=0,m=0;n<u;++n,m=j){l=C.T1[J.v(d.a,d.d++)]
k=d.ji(t)
d.d=d.d+(k.c-k.d)
f=k.hL()
q[m]=f
j=1-m
g.auu(l,s,f,q[j])
g.c=g.b=0
f=q[m]
e=f.length
i=new A.m3(f,0,Math.min(e,e),0,!0)
for(h=0;h<v;++h){g.ars(i,p)
g.a6F(o.gL(o),p)
o.q()}}},
auu(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=f.length
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
if(w>=x)throw B.n(A.c8("Invalid PNG data."))
v=d.a
d.d=w+1
u=J.v(v,w)
w=s.c
s.b=D.c.eW(u,w)
s.c=w+8}if(e===1)t=1
else if(e===2)t=3
else{if(e===4)x=15
else x=0
t=x}x=w-e
w=D.c.h1(s.b,x)
s.c=x
return w&t},
ars(d,e){var x=this,w=x.a,v=w.d
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
return}throw B.n(A.c8("Invalid color type: "+v+"."))},
a6F(d,e){var x,w,v,u,t,s,r,q,p=this.a,o=p.d
switch(o){case 0:x=p.x
if(x!=null&&p.c>8){p=x[0]
o=x[1]
w=e[0]
d.is(w,w,w,w!==((p&255)<<24|o&255)>>>0?d.gck():0)
return}d.kJ(e[0],0,0)
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
if(v!==((o&255)<<8|t&255)||w!==((s&255)<<8|r&255)||u!==((q&255)<<8|p&255)){d.is(v,w,u,d.gck())
return}}d.kJ(v,w,u)
return
case 3:d.se6(0,e[0])
return
case 4:d.kJ(e[0],e[1],0)
return
case 6:d.is(e[0],e[1],e[2],e[3])
return}throw B.n(A.c8("Invalid color type: "+o+"."))}}
A.awZ.prototype={
J(){return"PngFilter."+this.b}}
A.btf.prototype={
nz(d){var x,w,v,u,t,s,r,q,p=this,o=8192,n=d.a
n=n==null?null:n.grv()
if(!(n===!0&&d.gdt()!==C.cy))n=d.gmU()<8&&!d.grq()&&d.gqh()>1
else n=!0
if(n)d=d.od(C.ab)
if(p.w==null){n=A.qq(!0,o)
p.w=n
n.m7(B.a([137,80,78,71,13,10,26,10],y.t))
x=A.qq(!0,o)
x.j_(d.gd0(0))
x.j_(d.gb5(0))
x.b1(d.gmU())
if(d.grq())n=3
else if(d.gqh()===1)n=0
else if(d.gqh()===2)n=4
else n=d.gqh()===3?2:6
x.b1(n)
x.b1(0)
x.b1(0)
x.b1(0)
n=p.w
n.toString
p.tj(n,"IHDR",J.df(D.D.gaj(x.c),0,x.a))
n=d.c
if(n!=null){x=A.qq(!0,o)
x.m7(new B.eQ(n.a))
x.b1(0)
x.b1(0)
x.m7(n.buX())
n=p.w
n.toString
p.tj(n,"iCCP",J.df(D.D.gaj(x.c),0,x.a))}if(d.grq()){n=p.a
if(n!=null){n=n.a
n===$&&B.b()
p.aw2(n)}else{n=d.a
n=n==null?null:n.geU()
n.toString
p.aw2(n)}}if(p.r){x=A.qq(!0,o)
n=p.e
n===$&&B.b()
x.j_(n)
x.j_(p.c)
n=p.w
n.toString
p.tj(n,"acTL",J.df(D.D.gaj(x.c),0,x.a))}}w=d.grq()?1:d.gqh()
v=d.gdt()===C.cy?2:1
n=d.gd0(0)
u=d.gb5(0)
t=d.gb5(0)
s=new Uint8Array(n*u*w*v+t)
p.bhm(0,d,s)
r=C.J4.aAe(s,p.d)
n=d.d
if(n!=null)for(n=new B.ch(n,n.r,n.e,B.t(n).h("ch<1>"));n.q();){u=n.d
t=d.d.i(0,u)
t.toString
x=new A.awb(!0,new Uint8Array(8192))
x.m7(D.rA.cq(u))
x.b1(0)
x.m7(D.rA.cq(t))
u=p.w
u.toString
p.tj(u,"tEXt",J.df(D.D.gaj(x.c),0,x.a))}if(p.r){x=A.qq(!0,o)
x.j_(p.f)
x.j_(d.gd0(0))
x.j_(d.gb5(0))
x.j_(0)
x.j_(0)
x.le(d.y)
x.le(1000)
x.b1(1)
x.b1(0)
n=p.w
n.toString
p.tj(n,"fcTL",J.df(D.D.gaj(x.c),0,x.a));++p.f}if(p.f<=1){n=p.w
n.toString
p.tj(n,"IDAT",r)}else{q=A.qq(!0,o)
q.j_(p.f)
q.m7(r)
n=p.w
n.toString
p.tj(n,"fdAT",J.df(D.D.gaj(q.c),0,q.a));++p.f}},
bA8(d){var x,w=this,v=w.w
if(v==null)return null
w.tj(v,"IEND",B.a([],y.t))
w.f=0
v=w.w
x=J.df(D.D.gaj(v.c),0,v.a)
w.w=null
return x},
bz2(d,e){var x,w,v,u,t,s=this,r=d.gl7().length
if(r<=1){s.e=1
s.r=!1
s.nz(d)}else{r=d.gl7().length
s.e=r
s.r=r>1
s.c=d.r
if(d.grq()){x=new A.bqL(new Int32Array(256))
x.bdw(256)
x.brw(d)
s.a=x
for(r=d.gl7(),w=r.length,v=0;v<r.length;r.length===w||(0,B.S)(r),++v){u=r[v]
if(u!==d){x.apk(u)
x.amq()
x.ap1()
x.akS()}}}for(r=d.gl7(),w=r.length,v=0;v<r.length;r.length===w||(0,B.S)(r),++v){u=r[v]
t=s.a
if(t!=null)s.nz(t.aIy(u))
else s.nz(u)}}r=s.bA8(0)
r.toString
return r},
aw2(d){var x,w,v,u=this
if(d.gdt()===C.ab&&d.b===3&&d.a===256){x=u.w
x.toString
u.tj(x,"PLTE",J.df(d.gaj(d),0,null))}else{x=d.a
w=A.qq(!0,x*3)
for(v=0;v<x;++v){w.b1(D.d.C(d.nj(v)))
w.b1(D.d.C(d.nh(v)))
w.b1(D.d.C(d.ng(v)))}x=u.w
x.toString
u.tj(x,"PLTE",J.df(D.D.gaj(w.c),0,w.a))}if(d.b===4){x=d.a
w=A.qq(!0,x)
for(v=0;v<x;++v)w.b1(D.d.C(d.oz(v)))
x=u.w
x.toString
u.tj(x,"tRNS",J.df(D.D.gaj(w.c),0,w.a))}},
tj(d,e,f){d.j_(f.length)
d.m7(new B.eQ(e))
d.m7(f)
d.j_(A.xv(f,A.xv(new B.eQ(e),0)))},
bhm(d,e,f){var x,w,v=this,u=e.grq()?C.brl:v.b,t=e.gaj(0),s=e.a.grK(),r=e.grq()?1:e.gqh(),q=D.c.S(r*e.gmU()+7,3),p=e.gmU()+7>>>3,o=u.a,n=J.dL(t),m=0,l=0,k=null,j=0
while(!0){x=e.a
x=x==null?null:x.b
if(!(j<(x==null?0:x)))break
w=n.C3(t,l,s)
l+=s
switch(o){case 1:m=v.b1S(w,p,q,f,m)
break
case 2:m=v.b1V(w,k,p,f,m)
break
case 3:m=v.b1M(w,k,p,q,f,m)
break
case 4:m=v.b1P(w,k,p,q,f,m)
break
default:m=v.b1O(w,p,f,m)
break}++j
k=w}},
avX(d,e,f,g,h){var x,w,v;--d
for(x=g.$flags|0;d>=0;h=w){w=h+1
v=e[f+d]
x&2&&B.E(g)
g[h]=v;--d}return h},
b1O(d,e,f,g){var x,w,v=g+1
f.$flags&2&&B.E(f)
f[g]=0
x=d.length
if(e===1)for(g=v,w=0;w<x;++w,g=v){v=g+1
f[g]=d[w]}else for(g=v,w=0;w<x;w+=e)g=this.avX(e,d,w,f,g)
return g},
b1S(d,e,f,g,h){var x,w,v,u,t,s,r=h+1
g.$flags&2&&B.E(g)
g[h]=1
for(h=r,x=0;x<f;x+=e)h=this.avX(e,d,x,g,h)
w=d.length
for(v=e-1,x=f;x<w;x+=e)for(u=v,t=0;t<e;++t,--u,h=r){r=h+1
s=x+u
g[h]=d[s]-d[s-f]&255}return h},
b1V(d,e,f,g,h){var x,w,v,u,t,s,r,q=h+1
g.$flags&2&&B.E(g)
g[h]=2
x=d.length
for(w=f-1,v=e!=null,h=q,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,h=q){r=v?e[u+t]:0
q=h+1
g[h]=d[u+t]-r&255}return h},
b1M(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o=i+1
h.$flags&2&&B.E(h)
h[i]=3
x=d.length
for(w=f-1,v=e==null,i=o,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=o){r=u+t
q=r<g?0:d[r-g]
p=v?0:e[r]
o=i+1
h[i]=d[r]-(q+p>>>1)}return i},
bg3(d,e,f){var x=d+e-f,w=x>d?x-d:d-x,v=x>e?x-e:e-x,u=x>f?x-f:f-x
if(w<=v&&w<=u)return d
else if(v<=u)return e
return f},
b1P(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m=i+1
h.$flags&2&&B.E(h)
h[i]=4
x=d.length
for(w=f-1,v=e==null,i=m,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=m){r=u+t
q=r<g
p=q?0:d[r-g]
o=v?0:e[r]
n=q||v?0:e[r-g]
m=i+1
h[i]=d[r]-this.bg3(p,o,n)&255}return i}}
A.D1.prototype={
J(){return"PnmFormat."+this.b}}
A.IW.prototype={}
A.bti.prototype={
I8(d){var x
this.b=A.cY(d,!1,null,0)
x=this.U1()
if(x==="P1"||x==="P2"||x==="P5"||x==="P3"||x==="P6")return!0
return!1},
mY(d,e,f){if(this.oF(e)==null)return null
return this.kf(0)},
oF(d){var x,w,v=this
v.b=A.cY(d,!1,null,0)
x=v.U1()
if(x==="P1"){w=v.a=new A.IW(C.p9)
w.e=C.a8q}else if(x==="P2"){w=v.a=new A.IW(C.p9)
w.e=C.a8r}else if(x==="P5"){w=v.a=new A.IW(C.p9)
w.e=C.Fc}else if(x==="P3"){w=v.a=new A.IW(C.p9)
w.e=C.a8s}else if(x==="P6"){w=v.a=new A.IW(C.p9)
w.e=C.Fd}else return v.b=null
w.a=v.M5()
w=v.a
w.toString
w.b=v.M5()
w=v.a
if(w.a===0||w.b===0)return v.a=v.b=null
return w},
kf(d){var x,w,v,u,t,s=this,r=null,q=s.a
if(q==null)return r
x=q.e
if(x===C.a8q){x=q.a
w=A.hV(r,r,C.fS,0,C.bt,q.b,r,0,1,r,C.ab,x,!1)
for(q=w.a,q=q.ga5(q);q.q();){v=q.gL(q)
if(s.U1()==="1")v.kJ(1,1,1)
else v.kJ(0,0,0)}return w}else if(x===C.a8r||x===C.Fc){u=s.M5()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.hV(r,r,s.aAX(u),0,C.bt,q,r,0,1,r,C.ab,x,!1)
for(q=w.a,q=q.ga5(q);q.q();){v=q.gL(q)
t=s.Vk(s.a.e,u)
v.kJ(t,t,t)}return w}else if(x===C.a8s||x===C.Fd){u=s.M5()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.hV(r,r,s.aAX(u),0,C.bt,q,r,0,3,r,C.ab,x,!1)
for(q=w.a,q=q.ga5(q);q.q();)q.gL(q).kJ(s.Vk(s.a.e,u),s.Vk(s.a.e,u),s.Vk(s.a.e,u))
return w}return r},
aAX(d){if(d>255)return C.cy
if(d>15)return C.ab
if(d>3)return C.hJ
if(d>1)return C.hI
return C.fS},
Vk(d,e){if(d===C.Fc||d===C.Fd)return this.b.ct()
return this.M5()},
M5(){var x,w,v=this.U1()
if(J.bB(v)===0)return 0
try{x=B.dz(v,null)
return x}catch(w){return 0}},
U1(){var x,w,v,u,t=this.b
if(t==null)return""
x=this.c
if(x.length!==0)return D.b.il(x,0)
w=D.e.c8(t.bJU())
if(w.length===0)return""
for(;D.e.bh(w,"#");)w=D.e.c8(this.b.aEP(70))
t=y.U
v=B.H(new B.ag(B.a(w.split(" "),y.T),new A.btj(),t),!0,t.h("x.E"))
for(t=v.length,u=0;u<t;++u)if(D.e.bh(v[u],"#")){D.b.su(v,u)
break}D.b.H(x,v)
if(x.length===0)return""
return D.b.il(x,0)}}
A.axt.prototype={}
A.axu.prototype={}
A.wC.prototype={}
A.axw.prototype={}
A.axx.prototype={}
A.axA.prototype={}
A.axB.prototype={}
A.a3D.prototype={}
A.axz.prototype={
gcs(d){return this.c}}
A.bue.prototype={
aUg(d){var x,w,v,u,t=this
d.am()
d.am()
d.am()
d.am()
x=D.c.b2(d.c-d.d,8)
if(x>0){t.e=new Uint16Array(x)
t.f=new Uint16Array(x)
t.r=new Uint16Array(x)
t.w=new Uint16Array(x)
for(w=0;w<x;++w){v=t.e
u=d.am()
v.$flags&2&&B.E(v)
v[w]=u
u=t.f
v=d.am()
u.$flags&2&&B.E(u)
u[w]=v
v=t.r
u=d.am()
v.$flags&2&&B.E(v)
v[w]=u
u=t.w
v=d.am()
u.$flags&2&&B.E(u)
u[w]=v}}}}
A.Ra.prototype={
aEO(d,e,f,g,h,i,j){if(d.c-d.d<2)return
if(h==null)h=d.am()
switch(h){case 0:g.toString
this.bir(d,e,f,g)
break
case 1:if(i==null)i=this.bio(d,f)
g.toString
this.biq(d,e,f,g,i,j)
break
default:throw B.n(A.c8("Unsupported compression: "+h))}},
bJT(d,e,f,g){return this.aEO(d,e,f,g,null,null,0)},
bio(d,e){var x,w=new Uint16Array(e)
for(x=0;x<e;++x)w[x]=d.am()
return w},
bir(d,e,f,g){var x,w=e*f
if(g===16)w*=2
if(w>d.c-d.d){x=new Uint8Array(w)
this.c=x
D.D.m_(x,0,w,255)
return}this.c=d.jd(w).hL()},
biq(d,e,f,g,h,i){var x,w,v,u,t,s,r=e*f
if(g===16)r*=2
x=new Uint8Array(r)
this.c=x
w=i*f
if(w>=h.length){D.D.m_(x,0,r,255)
return}for(v=0,u=0;u<f;++u,w=t){t=w+1
s=d.ji(h[w])
d.d=d.d+(s.c-s.d)
x=this.c
x.toString
this.b_0(s,x,v)
v+=e}},
b_0(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=e.$flags|0,v=e.length;u=d.d,u<x;){t=d.a
d.d=u+1
u=J.v(t,u)
t=$.nq()
t.$flags&2&&B.E(t)
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
w&2&&B.E(e)
e[f]=r}}else{++s
if(f+s>v)s=v-f
s=Math.min(s,x-d.d)
for(q=0;q<s;++q,f=p){p=f+1
u=J.v(d.a,d.d++)
w&2&&B.E(e)
e[f]=u}}}},
gbn(d){return this.a}}
A.uA.prototype={
J(){return"PsdColorMode."+this.b}}
A.bug.prototype={
aUh(d){var x,w,v=this
v.as=A.cY(d,!0,null,0)
v.bhV()
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
w.bim()
w.bin()
w.bip()
w.ay=w.ax=w.at=w.as=null
return!0},
azw(){if(!this.oe(0))return null
return this.bKv()},
bKv(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.y
if(d!=null)return d
d=f.a
d=A.hV(e,e,C.ab,0,C.bt,f.b,e,0,4,e,C.ab,d,!1)
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
if(m==null)m=new A.fk()
l=D.d.C(m.gaf(m))
k=D.d.C(m.gap())
j=D.d.C(m.gau(m))
i=D.d.C(m.gaE(m))
p.toString
if(p>=0&&p<f.a&&d&&s<f.b){n=w.b
n.toString
h=f.y.a
g=h==null?e:h.ec(n+o,q,e)
if(g==null)g=new A.fk()
f.aW7(D.d.C(g.gaf(g)),D.d.C(g.gap()),D.d.C(g.gau(g)),D.d.C(g.gaE(g)),l,k,j,i,u,v,g)}++o;++p}++r;++s}}++x}d=f.y
d.toString
return d},
aW7(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s=k/255*m
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
case 1768188278:u=A.buh(d,h)
v=A.buh(e,i)
w=A.buh(f,j)
x=k
break
case 1818391150:u=A.buj(d,h)
v=A.buj(e,i)
w=A.buj(f,j)
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
case 1935897198:u=A.ctY(d,h)
v=A.ctY(e,i)
w=A.ctY(f,j)
x=k
break
case 1684633120:u=A.bui(d,h)
v=A.bui(e,i)
w=A.bui(f,j)
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
case 1870030194:u=A.ctW(d,h,g,k)
v=A.ctW(e,i,g,k)
w=A.ctW(f,j,g,k)
x=k
break
case 1934387572:u=A.ctZ(d,h)
v=A.ctZ(e,i)
w=A.ctZ(f,j)
x=k
break
case 1749838196:u=A.ctU(d,h)
v=A.ctU(e,i)
w=A.ctU(f,j)
x=k
break
case 1984719220:u=A.cu_(d,h)
v=A.cu_(e,i)
w=A.cu_(f,j)
x=k
break
case 1816947060:u=A.ctV(d,h)
v=A.ctV(e,i)
w=A.ctV(f,j)
x=k
break
case 1884055924:u=A.ctX(d,h)
v=A.ctX(e,i)
w=A.ctX(f,j)
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
case 1936553316:u=A.ctT(d,h)
v=A.ctT(e,i)
w=A.ctT(f,j)
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
bhV(){var x,w,v=this,u=v.as
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
v.r=C.aJI[v.as.am()]},
bim(){var x,w,v,u,t,s,r=this,q=r.at
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
if(w===943868237)q.m(0,v,new A.axv(v,t))}},
bin(){var x,w,v,u,t,s,r,q,p,o=this,n=o.ax
n.d=n.b
x=n.a3()
if((x&1)!==0)++x
w=o.ax.jd(x)
n=y.l
o.w=B.a([],n)
if(x>0){v=w.am()
u=$.np()
u.$flags&2&&B.E(u)
u[0]=v
t=$.ow()[0]
if(t<0)t=-t
for(v=y.N,u=y.O,s=y.u,r=0;r<t;++r){q=new A.axy(B.K(v,u),B.a([],n),B.a([],s))
q.aUi(w)
o.w.push(q)}}for(r=0;n=o.w,r<n.length;++r)n[r].bJM(w,o)
x=o.ax.a3()
p=o.ax.jd(x)
if(x>0){p.am()
p.am()
p.am()
p.am()
p.am()
p.am()
p.ct()}},
bip(){var x,w,v,u,t,s,r=this,q=r.ay
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
s.aEO(w,r.a,r.b,r.f,x,u,t)
q.push(s);++t}r.y=A.cFf(r.r,r.f,r.a,r.b,r.x)}}
A.axv.prototype={
gbn(d){return this.a}}
A.axy.prototype={
aUi(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=a1.a3(),a0=$.hy()
a0.$flags&2&&B.E(a0)
a0[0]=d
d=$.kL()
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
a0.$flags&2&&B.E(a0)
a0[0]=d
v=$.ow()[0]
a1.a3()
e.as.push(new A.Ra(v))}u=a1.a3()
if(u!==943868237)throw B.n(A.c8("Invalid PSD layer signature: "+D.c.kG(u,16)))
e.r=a1.a3()
e.w=a1.ct()
a1.ct()
e.y=a1.ct()
if(a1.ct()!==0)throw B.n(A.c8("Invalid PSD layer data"))
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
if(t>0)new A.bue().aUg(s.jd(t))
t=s.ct()
e.Q=s.je(t)
q=4-D.c.an(t,4)-1
if(q>0)s.d+=q
for(d=s.c,a0=e.ay,p=e.cy,o=y.cK;s.d<d;){u=s.a3()
if(u!==943868237)throw B.n(A.c8("PSD invalid signature for layer additional data: "+D.c.kG(u,16)))
n=s.je(4)
t=s.a3()
m=s.ji(t)
l=s.d+(m.c-m.d)
s.d=l
if((t&1)===1)s.d=l+1
a0.m(0,n,A.d1v(n,m))
if(n==="lrFX"){k=A.cb(o.a(a0.i(0,"lrFX")).b,null,0)
k.am()
j=k.am()
for(i=0;i<j;++i){k.je(4)
h=k.je(4)
g=k.a3()
if(h==="dsdw"){f=new A.axu()
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
k.am()}else if(h==="isdw"){f=new A.axx()
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
k.am()}else if(h==="oglw"){f=new A.axA()
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
k.am()}}else if(h==="iglw"){f=new A.axw()
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
k.am()}}else if(h==="bevl"){f=new A.axt()
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
k.am()}}else if(h==="sofi"){f=new A.axB()
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
bJM(d,e){var x,w,v,u,t,s=this,r=0
while(!0){x=s.as
x===$&&B.b()
if(!(r<x.length))break
x=x[r]
w=s.e
w===$&&B.b()
v=s.f
v===$&&B.b()
x.bJT(d,w,v,e.f);++r}w=e.r
v=e.f
u=s.e
u===$&&B.b()
t=s.f
t===$&&B.b()
s.cx=A.cFf(w,v,u,t,x)}}
A.Rb.prototype={}
A.buf.prototype={
mY(d,e,f){var x,w,v,u=null,t=A.cFe(e)
this.a=t
x=1
if(x===1){t=t.azw()
return t}for(w=u,v=0;v<x;++v){t=this.a
f=t==null?u:t.azw()
if(f==null)continue
if(w==null){f.w=C.arJ
w=f}else w.nz(f)}return w}}
A.axE.prototype={}
A.z5.prototype={
aO(d,e){return new A.z5(this.a*e,this.b*e,this.c*e)},
a6(d,e){return new A.z5(this.a+e.a,this.b+e.b,this.c+e.c)},
a2(d,e){return new A.z5(this.a-e.a,this.b-e.b,this.c-e.c)}}
A.md.prototype={
aO(d,e){var x=this
return new A.md(x.a*e,x.b*e,x.c*e,x.d*e)},
a6(d,e){var x=this
return new A.md(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
a2(d,e){var x=this
return new A.md(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)}}
A.a3G.prototype={
gb5(d){return this.b}}
A.Rf.prototype={
gb5(d){return this.f}}
A.axD.prototype={
gb5(d){return this.b}}
A.rH.prototype={
sNv(d){var x=this.a,w=this.b
x.$flags&2&&B.E(x)
x[w+1]=d},
R4(){var x=this.e,w=this.d
if(x)return new A.z5(C.h6[w>>>9],C.h6[w>>>4&31],C.f3[w&15])
else return new A.z5(C.f3[w>>>7&15],C.f3[w>>>3&15],C.xa[w&7])},
R6(){var x=this.e,w=this.d
if(x)return new A.md(C.h6[w>>>9],C.h6[w>>>4&31],C.f3[w&15],255)
else return new A.md(C.f3[w>>>7&15],C.f3[w>>>3&15],C.xa[w&7],C.xa[w>>>11&7])},
R5(){var x=this.r,w=this.f
if(x)return new A.z5(C.h6[w>>>10],C.h6[w>>>5&31],C.h6[w&31])
else return new A.z5(C.f3[w>>>8&15],C.f3[w>>>4&15],C.f3[w&15])},
R7(){var x=this.r,w=this.f
if(x)return new A.md(C.h6[w>>>10],C.h6[w>>>5&31],C.h6[w&31],255)
else return new A.md(C.f3[w>>>8&15],C.f3[w>>>4&15],C.f3[w&15],C.xa[w>>>12&7])},
Ln(){var x=this,w=x.c?1:0,v=x.d,u=x.e?1:0,t=x.f,s=x.r?1:0
return(w|(v&16383)<<1|u<<15|(t&32767)<<16|s<<31)>>>0},
uy(d){var x=this,w=x.a[x.b+1]
x.c=(w&1)===1
x.sNv(x.Ln())
x.d=w>>>1&16383
x.sNv(x.Ln())
x.e=(w>>>15&1)===1
x.sNv(x.Ln())
x.f=w>>>16&32767
x.sNv(x.Ln())
x.r=(w>>>31&1)===1
x.sNv(x.Ln())}}
A.buk.prototype={
oF(d){var x,w=this,v=d.length,u=v-(v>>>1&1431655765)>>>0
u=(u&858993459)+(u>>>2&858993459)
if((u+(u>>>4)>>>0&252645135)*16843009>>>0>>>24===1){x=w.aZK(d)
if(x!=null){w.a=d
return w.b=x}}x=w.b__(d)
if(x!=null){w.a=d
return w.b=x}x=w.aZY(d)
if(x!=null){w.a=d
return w.b=x}return null},
b__(d){var x,w,v=A.cY(d,!1,null,0)
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
aZY(d){var x,w,v=A.cY(d,!1,null,0)
if(v.a3()!==52)return null
x=new A.a3G()
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
aZK(d){var x,w,v,u,t,s,r=null,q=d.length,p=A.cY(d,!1,r,0)
if(p.a3()!==0)return r
x=new A.axD()
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
if((D.c.eo(64,s)&q)>>>0!==0){u=D.c.eo(16,t)
v=1
break}if((D.c.eo(128,s)&q)>>>0!==0){u=D.c.eo(16,t)
break}++t}if(t===10)return r}if((v+1)*2===4)return r
x.b=x.a=u
return x},
kf(d){var x,w,v=this,u=v.b
if(u==null||v.a==null)return null
if(u instanceof A.axD){u=u.a
x=v.b
x=x.gb5(x)
w=v.a
w.toString
return v.a3F(u,x,w)}else if(u instanceof A.a3G){u=v.a
u.toString
return v.aZX(u)}else if(u instanceof A.Rf){u=v.a
u.toString
return v.aZZ(u)}return null},
mY(d,e,f){if(this.oF(e)==null)return null
return this.kf(0)},
aZX(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.length
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
switch(x.d&255){case 16:s=A.hV(k,k,C.ab,0,C.bt,t,k,0,4,k,C.ab,u,!1)
for(x=s.a,x=x.ga5(x);x.q();){r=x.gL(x)
q=J.v(w.a,w.d++)
p=J.v(w.a,w.d++)
r.saf(0,p&240)
r.sap((p&15)<<4)
r.sau(0,q&240)
r.saE(0,(q&15)<<4)}return s
case 17:s=A.hV(k,k,C.ab,0,C.bt,t,k,0,4,k,C.ab,u,!1)
for(x=s.a,x=x.ga5(x);x.q();){r=x.gL(x)
o=w.am()
n=(o&1)!==0?255:0
r.saf(0,o>>>8&248)
r.sap(o>>>3&248)
r.sau(0,(o&62)<<2)
r.saE(0,n)}return s
case 18:s=A.hV(k,k,C.ab,0,C.bt,t,k,0,4,k,C.ab,u,!1)
for(x=s.a,x=x.ga5(x);x.q();){r=x.gL(x)
r.saf(0,J.v(w.a,w.d++))
r.sap(J.v(w.a,w.d++))
r.sau(0,J.v(w.a,w.d++))
r.saE(0,J.v(w.a,w.d++))}return s
case 19:s=A.hV(k,k,C.ab,0,C.bt,t,k,0,3,k,C.ab,u,!1)
for(x=s.a,x=x.ga5(x);x.q();){r=x.gL(x)
o=w.am()
r.saf(0,o>>>8&248)
r.sap(o>>>3&252)
r.sau(0,(o&31)<<3)}return s
case 20:s=A.hV(k,k,C.ab,0,C.bt,t,k,0,3,k,C.ab,u,!1)
for(x=s.a,x=x.ga5(x);x.q();){r=x.gL(x)
o=w.am()
r.saf(0,(o&31)<<3)
r.sap(o>>>2&248)
r.sau(0,o>>>7&248)}return s
case 21:s=A.hV(k,k,C.ab,0,C.bt,t,k,0,3,k,C.ab,u,!1)
for(x=s.a,x=x.ga5(x);x.q();){r=x.gL(x)
r.saf(0,J.v(w.a,w.d++))
r.sap(J.v(w.a,w.d++))
r.sau(0,J.v(w.a,w.d++))}return s
case 22:s=A.hV(k,k,C.ab,0,C.bt,t,k,0,1,k,C.ab,u,!1)
for(x=s.a,x=x.ga5(x);x.q();)x.gL(x).saf(0,J.v(w.a,w.d++))
return s
case 23:s=A.hV(k,k,C.ab,0,C.bt,t,k,0,4,k,C.ab,u,!1)
for(x=s.a,x=x.ga5(x);x.q();){r=x.gL(x)
n=J.v(w.a,w.d++)
m=J.v(w.a,w.d++)
r.saf(0,m)
r.sap(m)
r.sau(0,m)
r.saE(0,n)}return s
case 24:return k
case 25:return x.y===0?l.ala(u,t,w.hL()):l.a3F(u,t,w.hL())}return k},
aZZ(d){var x,w,v,u=this
if(!(u.b instanceof A.Rf))return null
x=A.cY(d,!1,null,0)
w=x.d+=52
v=y.aM.a(u.b)
x.d=w+v.Q
if(v.c[0]===0)switch(v.b){case 2:return u.ala(v.r,v.f,x.hL())
case 3:return u.a3F(v.r,v.f,x.hL())}return null},
ala(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=A.hV(b5,b5,C.ab,0,C.bt,c6,b5,0,3,b5,C.ab,c5,!1),b7=c5/4|0,b8=b7-1,b9=J.oy(D.D.gaj(c7),0,null),c0=new A.rH(b9),c1=new A.rH(J.oy(D.D.gaj(c7),0,null)),c2=new A.rH(J.oy(D.D.gaj(c7),0,null)),c3=new A.rH(J.oy(D.D.gaj(c7),0,null)),c4=new A.rH(J.oy(D.D.gaj(c7),0,null))
for(x=0,w=0;x<b7;++x,w+=4)for(v=0,u=0;v<b7;++v,u+=4){c0.b=A.z6(v,x)<<1>>>0
c0.uy(0)
t=b9[c0.b]
s=c0.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&b8)>>>0
o=(p+1&b8)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&b8)>>>0
k=(l+1&b8)>>>0
c1.b=A.z6(l,p)<<1>>>0
c1.uy(0)
c2.b=A.z6(k,p)<<1>>>0
c2.uy(0)
c3.b=A.z6(l,o)<<1>>>0
c3.uy(0)
c4.b=A.z6(k,o)<<1>>>0
c4.uy(0)
j=c1.R4()
i=C.dp[r][0]
h=c2.R4()
g=C.dp[r][1]
f=c3.R4()
e=C.dp[r][2]
d=c4.R4()
a0=C.dp[r][3]
a1=c1.R5()
a2=C.dp[r][0]
a3=c2.R5()
a4=C.dp[r][1]
a5=c3.R5()
a6=C.dp[r][2]
a7=c4.R5()
a8=C.dp[r][3]
a9=C.RQ[s+t&3]
b0=a9[0]
b1=a9[1]
b2=D.c.S((j.a*i+h.a*g+f.a*e+d.a*a0)*b0+(a1.a*a2+a3.a*a4+a5.a*a6+a7.a*a8)*b1,7)
b3=D.c.S((j.b*i+h.b*g+f.b*e+d.b*a0)*b0+(a1.b*a2+a3.b*a4+a5.b*a6+a7.b*a8)*b1,7)
b4=D.c.S((j.c*i+h.c*g+f.c*e+d.c*a0)*b0+(a1.c*a2+a3.c*a4+a5.c*a6+a7.c*a8)*b1,7)
b1=b6.a
if(b1!=null)b1.fg(m+u,n,b2,b3,b4)
t=t>>>2;++r}}}return b6},
a3F(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=A.hV(a4,a4,C.ab,0,C.bt,b5,a4,0,4,a4,C.ab,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.oy(D.D.gaj(b6),0,null),a9=new A.rH(a8),b0=new A.rH(J.oy(D.D.gaj(b6),0,null)),b1=new A.rH(J.oy(D.D.gaj(b6),0,null)),b2=new A.rH(J.oy(D.D.gaj(b6),0,null)),b3=new A.rH(J.oy(D.D.gaj(b6),0,null))
for(x=0,w=0;x<a6;++x,w+=4)for(v=0,u=0;v<a6;++v,u+=4){a9.b=A.z6(v,x)<<1>>>0
a9.uy(0)
t=a8[a9.b]
s=a9.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&a7)>>>0
o=(p+1&a7)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&a7)>>>0
k=(l+1&a7)>>>0
b0.b=A.z6(l,p)<<1>>>0
b0.uy(0)
b1.b=A.z6(k,p)<<1>>>0
b1.uy(0)
b2.b=A.z6(l,o)<<1>>>0
b2.uy(0)
b3.b=A.z6(k,o)<<1>>>0
b3.uy(0)
j=b0.R6()
i=C.dp[r][0]
h=b1.R6()
g=C.dp[r][1]
g=new A.md(j.a*i,j.b*i,j.c*i,j.d*i).a6(0,new A.md(h.a*g,h.b*g,h.c*g,h.d*g))
h=b2.R6()
i=C.dp[r][2]
i=g.a6(0,new A.md(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.R6()
g=C.dp[r][3]
f=i.a6(0,new A.md(h.a*g,h.b*g,h.c*g,h.d*g))
g=b0.R7()
h=C.dp[r][0]
i=b1.R7()
j=C.dp[r][1]
j=new A.md(g.a*h,g.b*h,g.c*h,g.d*h).a6(0,new A.md(i.a*j,i.b*j,i.c*j,i.d*j))
i=b2.R7()
h=C.dp[r][2]
h=j.a6(0,new A.md(i.a*h,i.b*h,i.c*h,i.d*h))
i=b3.R7()
j=C.dp[r][3]
e=h.a6(0,new A.md(i.a*j,i.b*j,i.c*j,i.d*j))
d=C.RQ[s+t&3]
j=d[0]
i=d[1]
a0=D.c.S(f.a*j+e.a*i,7)
a1=D.c.S(f.b*j+e.b*i,7)
a2=D.c.S(f.c*j+e.c*i,7)
a3=D.c.S(f.d*d[2]+e.d*d[3],7)
i=a5.a
if(i!=null)i.kp(m+u,n,a0,a1,a2,a3)
t=t>>>2;++r}}}return a5}}
A.aBX.prototype={
vo(d,e){var x,w=this
if(e.c-e.d<18)return
w.a=e.ct()
w.b=e.ct()
x=e.ct()
w.c=x<12?C.aE2[x]:C.yV
e.am()
w.e=e.am()
w.f=e.ct()
e.am()
e.am()
w.x=e.am()
w.y=e.am()
w.z=e.ct()
w.Q=e.ct()},
aCx(){var x=this,w=x.z
if(w!==8&&w!==16&&w!==24&&w!==32)return!1
w=x.c
if(w===C.jz||w===C.jA){if(x.e>256||x.b!==1)return!1
w=x.f
if(w!==16&&w!==24&&w!==32)return!1}else if(x.b===1)return!1
return!0}}
A.oe.prototype={
J(){return"TgaImageType."+this.b}}
A.bG6.prototype={
mY(d,e,f){if(this.oF(e)==null)return null
return this.kf(0)},
oF(d){var x,w,v,u,t=this
t.a=new A.aBX(C.yV)
x=A.cY(d,!1,null,0)
t.b=x
w=x.jd(18)
t.a.vo(0,w)
if(!t.a.aCx())return null
x=t.b
v=t.a
x.d+=v.a
u=v.c
if(u===C.jz||u===C.jA)v.as=x.jd(v.e*D.c.S(v.f,3)).hL()
x=t.a
x.ax=t.b.d
return x},
kf(d){var x=this,w=x.a
if(w==null)return null
w=w.c
if(w===C.abr)return x.al9()
else if(w===C.abq||w===C.jA)return x.b_2()
else if(w===C.jz)return x.al9()
return null},
al4(d,e){var x,w,v,u,t,s,r,q=this,p=A.cY(d,!1,null,0),o=q.a.f
if(o===16){o=q.b
o===$&&B.b()
x=o.am()
w=x>>>7&248
v=x>>>2&248
u=(x&31)<<3
t=(x&32768)!==0?0:255
for(s=0;s<q.a.e;++s){e.uj(s,w)
e.uh(s,v)
e.ug(s,u)
e.uf(s,t)}}else{r=o===32
for(s=0;s<q.a.e;++s){u=J.v(p.a,p.d++)
v=J.v(p.a,p.d++)
w=J.v(p.a,p.d++)
t=r?J.v(p.a,p.d++):255
e.uj(s,w)
e.uh(s,v)
e.ug(s,u)
e.uf(s,t)}}},
b_2(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=h.z,f=g===16,e=f||g===32,d=h.x,a0=h.y,a1=e?4:3
h=h.c
x=A.hV(i,i,C.ab,0,C.bt,a0,i,0,a1,i,C.ab,d,h===C.jz||h===C.jA)
h=x.a
if((h==null?i:h.geU())!=null){h=j.a.as
h.toString
d=x.a
d=d==null?i:d.geU()
d.toString
j.al4(h,d)}w=x.gd0(0)
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
al9(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
g===$&&B.b()
x=i.a
g.d=x.ax
w=x.z
g=w===16
v=!0
if(!g)if(w!==32){u=x.c
if(u===C.jz||u===C.jA){u=x.f
u=u===16||u===32}else u=!1
v=u}u=x.x
t=x.y
s=v?4:3
x=x.c
r=A.hV(h,h,C.ab,0,C.bt,t,h,0,s,h,C.ab,u,x===C.jz||x===C.jA)
x=i.a
u=x.c
if(u===C.jz||u===C.jA){x=x.as
x.toString
u=r.a
u=u==null?h:u.geU()
u.toString
i.al4(x,u)}if(w===8)for(q=r.gb5(0)-1;q>=0;--q){p=0
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
A.bGM.prototype={
jc(d){var x,w,v,u,t=this
if(d===0)return 0
if(t.c===0){t.c=8
t.b=t.a.ct()}for(x=t.a,w=0;v=t.c,d>v;){w=D.c.eW(w,v)+(t.b&C.ou[v])
d-=v
t.c=8
t.b=J.v(x.a,x.d++)}if(d>0){if(v===0){t.c=8
t.b=x.ct()}x=D.c.eW(w,d)
v=t.b
u=t.c-d
w=x+(D.c.o3(v,u)&C.ou[d])
t.c=u}return w}}
A.aC_.prototype={
j(d){var x=this,w=x.a,v=$.cqF().i(0,w)
if(v!=null)return v.a+": "+x.b.j(0)+" "+x.c
return"<"+w+">: "+x.b.j(0)+" "+x.c},
ph(d){var x,w,v,u=this,t=u.e
if(t!=null)return t
t=u.f
t.d=u.d
x=u.c
w=u.b
v=t.jd(x*(w!==C.a0?C.kh[w.a]:0))
switch(w.a){case 1:return u.e=new A.ub(new Uint8Array(B.bZ(v.jd(x).hL())))
case 2:return u.e=new A.BN(x===0?"":v.je(x-1))
case 7:return u.e=new A.ub(new Uint8Array(B.bZ(v.jd(x).hL())))
case 3:return u.e=A.cD_(v,x)
case 4:return u.e=A.cCV(v,x)
case 5:return u.e=A.cCW(v,x)
case 11:return u.e=A.cD1(v,x)
case 12:return u.e=A.cCU(v,x)
case 6:return u.e=new A.wb(new Int8Array(B.bZ(J.cqM(D.D.gaj(v.hL()),0,x))))
case 8:return u.e=A.cCZ(v,x)
case 9:return u.e=A.cCX(v,x)
case 10:return u.e=A.cCY(v,x)
case 0:return null}},
gp(d){return this.e}}
A.bGO.prototype={
bxn(d,e,f,g){var x,w,v,u=this
u.r=e
u.x=u.w=0
x=D.c.b2(u.a+7,8)
for(w=0,v=0;v<g;++v){u.a3D(d,w,f)
w+=x}},
a3D(d,e,f){var x,w,v,u,t,s,r,q,p=this
p.d=0
for(x=p.a,w=!0;f<x;){for(;w;){v=p.yI(10)
u=C.Sh[v]
t=D.c.S(u,1)&15
if(t===12){u=C.vM[(v<<2&12|p.oK(2))>>>0]
s=D.c.S(u,1)
f+=D.c.S(u,4)&4095
p.lz(4-(s&7))}else if(t===0)throw B.n(A.c8("TIFFFaxDecoder0"))
else if(t===15)throw B.n(A.c8("TIFFFaxDecoder1"))
else{f+=D.c.S(u,5)&2047
p.lz(10-t)
if((u&1)===0){p.f[p.d++]=f
w=!1}}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}for(;!w;){u=C.Np[p.oK(4)]
r=u>>>5&2047
q=!0
if(r===100){u=C.OW[p.yI(9)]
t=D.c.S(u,1)&15
r=D.c.S(u,5)&2047
if(t===12){p.lz(5)
u=C.vM[p.oK(4)]
s=D.c.S(u,1)
r=D.c.S(u,4)&4095
p.pK(d,e,f,r)
f+=r
p.lz(4-(s&7))}else if(t===15)throw B.n(A.c8("TIFFFaxDecoder2"))
else{p.pK(d,e,f,r)
f+=r
p.lz(9-t)
if((u&1)===0){p.f[p.d++]=f
w=q}}}else{if(r===200){u=C.Nk[p.oK(2)]
r=u>>>5&2047
p.pK(d,e,f,r)
f+=r
p.lz(2-(u>>>1&15))
p.f[p.d++]=f}else{p.pK(d,e,f,r)
f+=r
p.lz(4-(u>>>1&15))
p.f[p.d++]=f}w=q}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}}p.f[p.d++]=f},
bxo(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.r=a0
e.z=3
e.x=e.w=0
x=e.a
w=D.c.b2(x+7,8)
v=B.bP(2,null,!1,y.s)
e.at=a3&1
e.as=a3>>>2&1
if(e.aro()!==1)throw B.n(A.c8("TIFFFaxDecoder3"))
e.a3D(d,0,a1)
for(u=w,t=1;t<a2;++t){if(e.aro()===0){s=e.e
e.e=e.f
e.f=s
e.y=0
r=a1
q=-1
p=!0
o=0
while(!0){r.toString
if(!(r<x))break
e.and(q,p,v)
n=v[0]
m=v[1]
l=C.RY[e.oK(7)]&255
k=l>>>3&15
j=l&7
if(k===0){if(!p){m.toString
e.pK(d,u,r,m-r)}e.lz(7-j)
r=m
q=r}else if(k===1){e.lz(7-j)
i=o+1
h=i+1
if(p){r+=e.Tk()
e.f[o]=r
g=e.Tj()
e.pK(d,u,r,g)
r+=g
e.f[i]=r}else{g=e.Tj()
e.pK(d,u,r,g)
r+=g
e.f[o]=r
r+=e.Tk()
e.f[i]=r}o=h
q=r}else{if(k<=8){n.toString
f=n+(k-5)
i=o+1
e.f[o]=f
p=!p
if(p)e.pK(d,u,r,f-r)
e.lz(7-j)}else throw B.n(A.c8("TIFFFaxDecoder4"))
r=f
o=i
q=r}}e.f[o]=r
e.d=o+1}else e.a3D(d,u,a1)
u+=w}},
bxu(a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.r=a4
a2.z=4
a2.x=a2.w=0
x=a2.a
w=D.c.b2(x+7,8)
v=B.bP(2,null,!1,y.s)
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
a2.and(p,o,v)
m=v[0]
l=v[1]
k=C.RY[a2.oK(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
a2.pK(a3,t,q,l-q)}a2.lz(7-i)
q=l
p=q}else if(j===1){a2.lz(7-i)
h=n+1
g=h+1
if(o){q+=a2.Tk()
r[n]=q
f=a2.Tj()
a2.pK(a3,t,q,f)
q+=f
r[h]=q}else{f=a2.Tj()
a2.pK(a3,t,q,f)
q+=f
r[n]=q
q+=a2.Tk()
r[h]=q}n=g
p=q}else if(j<=8){m.toString
e=m+(j-5)
h=n+1
r[n]=e
o=!o
if(o)a2.pK(a3,t,q,e-q)
a2.lz(7-i)
q=e
n=h
p=q}else if(j===11){if(a2.oK(3)!==7)throw B.n(A.c8("TIFFFaxDecoder5"))
for(d=0,a0=!1;!a0;o=a1){for(;a2.oK(1)!==1;)++d
if(d>5){d-=6
if(!o&&d>0){h=n+1
r[n]=q
n=h}q+=d
if(d>0)o=!0
a1=a2.oK(1)===0
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
a2.pK(a3,t,q,1);++q
n=h}}}else throw B.n(A.c8("TIFFFaxDecoder5 "+j))}r[n]=q
a2.d=n+1
t+=w}},
Tk(){var x,w,v,u,t,s,r=this
for(x=0,w=!0;w;){v=r.yI(10)
u=C.Sh[v]
t=D.c.S(u,1)&15
if(t===12){u=C.vM[(v<<2&12|r.oK(2))>>>0]
s=D.c.S(u,1)
x+=D.c.S(u,4)&4095
r.lz(4-(s&7))}else if(t===0)throw B.n(A.c8("TIFFFaxDecoder0"))
else if(t===15)throw B.n(A.c8("TIFFFaxDecoder1"))
else{x+=D.c.S(u,5)&2047
r.lz(10-t)
if((u&1)===0)w=!1}}return x},
Tj(){var x,w,v,u,t,s,r=this
for(x=0,w=!1;!w;){v=C.Np[r.oK(4)]
u=v>>>5&2047
if(u===100){v=C.OW[r.yI(9)]
t=D.c.S(v,1)&15
s=D.c.S(v,5)
if(t===12){r.lz(5)
v=C.vM[r.oK(4)]
s=D.c.S(v,1)
x+=D.c.S(v,4)&4095
r.lz(4-(s&7))}else if(t===15)throw B.n(A.c8("TIFFFaxDecoder2"))
else{x+=s&2047
r.lz(9-t)
if((v&1)===0)w=!0}}else{if(u===200){v=C.Nk[r.oK(2)]
x+=v>>>5&2047
r.lz(2-(v>>>1&15))}else{x+=u
r.lz(4-(v>>>1&15))}w=!0}}return x},
aro(){var x,w,v=this,u="TIFFFaxDecoder8",t=v.as
if(t===0){if(v.yI(12)!==1)throw B.n(A.c8("TIFFFaxDecoder6"))}else if(t===1){t=v.w
t.toString
x=8-t
if(v.yI(x)!==0)throw B.n(A.c8(u))
if(x<4)if(v.yI(8)!==0)throw B.n(A.c8(u))
for(;w=v.yI(8),w!==1;)if(w!==0)throw B.n(A.c8(u))}if(v.at===0)return 1
else return v.oK(1)},
and(d,e,f){var x,w=this,v=w.e,u=w.d,t=w.y,s=t>0?t-1:0
s=e?(s&4294967294)>>>0:(s|1)>>>0
for(x=s;x<u;x+=2){t=v[x]
t.toString
d.toString
if(t>d){w.y=x
f[0]=t
break}}t=x+1
if(t<u)f[1]=v[t]},
pK(d,e,f,g){var x,w,v,u,t,s=8*e+f,r=s+g,q=D.c.S(s,3),p=s&7
if(p>0){x=D.c.eW(1,7-p)
w=J.v(d.a,d.d+q)
while(!0){if(!(x>0&&s<r))break
w=(w|x)>>>0
x=x>>>1;++s}d.m(0,q,w)}q=D.c.S(s,3)
for(v=r-7;s<v;q=u){u=q+1
J.bW(d.a,d.d+q,255)
s+=8}for(;s<r;){q=D.c.S(s,3)
v=J.v(d.a,d.d+q)
t=D.c.eW(1,7-(s&7))
J.bW(d.a,d.d+q,(v|t)>>>0);++s}},
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
r=C.mf[J.v(j.a,x+v)&255]
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=C.mf[J.v(u,x+j)&255]
else{t=C.mf[J.v(u,x+j)&255]
j=k.r
s=C.mf[J.v(j.a,j.d+(v+2))&255]}}}else throw B.n(A.c8("TIFFFaxDecoder7"))
j=k.w
j.toString
q=8-j
p=d-q
if(p>8){o=p-8
n=8}else{n=p
o=0}j=k.x
j.toString
j=k.x=j+1
m=D.c.eW(r&C.ou[q],p)
l=D.c.h1(t&C.Dr[n],8-n)
if(o!==0){l=D.c.eW(l,o)|D.c.h1(s&C.Dr[o],8-o)
k.x=j+1
k.w=o}else if(n===8){k.w=0
k.x=j+1}else k.w=n
return(m|l)>>>0},
oK(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.r
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
s=C.mf[J.v(m.a,x+v)&255]
if(!(v===w)){m=n.r
t=C.mf[J.v(m.a,m.d+(v+1))&255]}}else throw B.n(A.c8("TIFFFaxDecoder7"))
m=n.w
m.toString
r=8-m
q=d-r
p=r-d
if(p>=0){o=D.c.h1(s&C.ou[r],p)
m+=d
n.w=m
if(m===8){n.w=0
m=n.x
m.toString
n.x=m+1}}else{o=(D.c.eW(s&C.ou[r],-p)|D.c.h1(t&C.Dr[q],8-q))>>>0
m=n.x
m.toString
n.x=m+1
n.w=q}return o},
lz(d){var x,w=this,v=w.w
v.toString
x=v-d
if(x<0){v=w.x
v.toString
w.x=v-1
w.w=8+x}else w.w=x}}
A.aC0.prototype={
aUx(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=A.cb(a0,f,0),d=a0.am()
for(x=g.a,w=0;w<d;++w){v=a0.am()
u=a0.am()
t=C.Q1[u]
s=C.kh[u]
r=a0.a3()
if(r*s>4)q=a0.a3()
else{q=a0.d
a0.d=q+4}p=new A.aC_(v,t,r,q,e)
x.m(0,v,p)
if(v===256){o=p.ph(0)
o=o==null?f:o.C(0)
g.b=o==null?0:o}else if(v===257){o=p.ph(0)
o=o==null?f:o.C(0)
g.c=o==null?0:o}else if(v===262){n=p.ph(0)
m=n==null?f:n.C(0)
if(m==null)m=17
if(m<17)g.d=C.aCr[m]
else g.d=C.GQ}else if(v===259){o=p.ph(0)
o=o==null?f:o.C(0)
g.e=o==null?0:o}else if(v===258){o=p.ph(0)
o=o==null?f:o.C(0)
g.f=o==null?0:o}else if(v===277){o=p.ph(0)
o=o==null?f:o.C(0)
g.r=o==null?0:o}else if(v===317){o=p.ph(0)
o=o==null?f:o.C(0)
g.Q=o==null?0:o}else if(v===339){o=p.ph(0)
n=o==null?f:o.C(0)
g.x=C.aCY[n==null?0:n]}else if(v===320){n=p.ph(0)
if(n!=null){o=J.cSA(D.D.gaj(n.u0()))
g.id=o
g.k1=0
o=o.length/3|0
g.k2=o
g.k3=o*2}}}l=g.id
o=l!=null
if(o&&g.d===C.GR)g.r=1
if(g.b===0||g.c===0)return
if(o&&g.f===8){k=l.length
for(o=l.$flags|0,w=0;w<k;++w){j=l[w]
o&2&&B.E(l)
l[w]=j>>>8}}if(g.d===C.GP)g.z=!0
g.w=g.r
if(x.a7(0,324)){g.ay=g.FM(322)
g.ch=g.FM(323)
g.CW=g.Vj(324)
g.cx=g.Vj(325)}else{g.ay=g.Vi(322,g.b)
if(!x.a7(0,278))g.ch=g.Vi(323,g.c)
else{i=g.FM(278)
if(i===-1)g.ch=g.c
else g.ch=i}g.CW=g.Vj(273)
g.cx=g.Vj(279)}o=g.b
j=g.ay
g.cy=D.c.hy(o+j-1,j)
o=g.c
h=g.ch
g.db=D.c.hy(o+h-1,h)
g.dx=j*h*g.r
g.dy=g.Vi(266,1)
g.fr=g.FM(292)
g.fx=g.FM(293)
g.FM(338)
switch(g.d.a){case 0:case 1:x=g.f
if(x===1&&g.r===1)g.y=C.GO
else if(x===4&&g.r===1)g.y=C.bDz
else if(D.c.an(x,8)===0){x=g.r
if(x===1)g.y=C.bDA
else if(x===2)g.y=C.bDB
else g.y=C.pF}break
case 2:if(D.c.an(g.f,8)===0){x=g.r
if(x===3)g.y=C.abt
else if(x===4)g.y=C.bDD
else g.y=C.pF}break
case 3:x=!1
if(g.r===1)if(g.id!=null){x=g.f
x=x===4||x===8||x===16}if(x)g.y=C.bDC
break
case 4:if(g.f===1&&g.r===1)g.y=C.GO
break
case 6:if(g.e===7&&g.f===8&&g.r===3)g.y=C.abt
else{if(x.a7(0,530)){n=x.i(0,530).ph(0)
g.as=n.C(0)
x=g.at=n.jf(0,1)}else x=g.at=g.as=2
o=g.as
o===$&&B.b()
if(o*x===1)g.y=C.pF
else if(g.f===8&&g.r===3)g.y=C.bDE}break
case 5:if(D.c.an(g.f,8)===0)g.y=C.pF
x=g.r
if(x===4)g.w=3
else if(x===5)g.w=4
break
default:if(D.c.an(g.f,8)===0)g.y=C.pF
break}},
da(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.x,d=e===C.pE,a0=e===C.b6
e=g.f
if(e===1)x=C.fS
else if(e===2)x=C.hI
else{if(e===4)e=C.hJ
else if(d&&e===16)e=C.iv
else if(d&&e===32)e=C.k2
else if(d&&e===64)e=C.lG
else if(a0&&e===8)e=C.lH
else if(a0&&e===16)e=C.lI
else if(a0&&e===32)e=C.lJ
else if(e===16)e=C.cy
else e=e===32?C.k3:C.ab
x=e}w=g.id!=null&&g.d===C.GR
v=w?3:g.w
e=g.b
u=A.hV(f,f,x,0,C.bt,g.c,f,0,v,f,x,e,w)
if(w){e=u.a
e=e==null?f:e.geU()
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
e.ps(k,t[l],t[m],t[n])}}j=0
i=0
while(!0){e=g.db
e===$&&B.b()
if(!(j<e))break
h=0
while(!0){e=g.cy
e===$&&B.b()
if(!(h<e))break
g.b_3(a2,u,h,j);++h;++i}++j}return u},
b_3(b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null
if(a8.y===C.GO){a8.aZN(b0,b1,b2,b3)
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
v=A.cDS()
try{J.cSF(v,A.cb(b0,x,0),w.a)}catch(o){}if(a8.Q===2)for(n=0;n<a8.ch;++n){m=a8.r
u=a8.ay
l=m*(n*u+1)
k=u*m
for(;m<k;++m){u=w
r=J.v(u.a,u.d+l)
j=w
i=a8.r
i=J.v(j.a,j.d+(l-i))
J.bW(u.a,u.d+l,r+i);++l}}}else if(u===32773){w=A.cY(new Uint8Array(p),!1,a9,0)
a8.al8(b0,p,w.a)}else if(u===32946)w=A.cY(C.jO.Co(b0.Jh(0,0,x)),!1,a9,0)
else if(u===8)w=A.cY(C.jO.Co(b0.Jh(0,0,x)),!1,a9,0)
else if(u===6){a8.bbB(new A.as3().da(0,y.D.a(b0.Jh(0,0,x))),b1,s,q,a8.ay,a8.ch)
return}else throw B.n(A.c8("Unsupported Compression Type: "+u))
h=B.a([0,0,0],y.t)
for(g=q,f=0;f<a8.ch;++f,++g)for(e=s,d=0;d<a8.ay;++d,++e){u=w
if(u.d>=u.c||e>=a8.b||g>=a8.c)break
u=a8.r
if(u===1){u=a8.x
if(u===C.pE){u=a8.f
if(u===32){u=w.a3()
r=$.hy()
r.$flags&2&&B.E(r)
r[0]=u
a0=$.Fz()[0]}else if(u===64)a0=w.a_T()
else if(u===16){u=w.am()
r=$.hU
a0=(r!=null?r:A.iJ())[u]}else a0=0
if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.mG(e,g,a0)}}else{r=a8.f
if(r===8)if(u===C.b6){u=w
u=J.v(u.a,u.d++)
r=$.nq()
r.$flags&2&&B.E(r)
r[0]=u
a0=$.ox()[0]}else{u=w
a0=J.v(u.a,u.d++)}else if(r===16)if(u===C.b6){u=w.am()
r=$.np()
r.$flags&2&&B.E(r)
r[0]=u
a0=$.ow()[0]}else a0=w.am()
else if(r===32)if(u===C.b6){u=w.a3()
r=$.hy()
r.$flags&2&&B.E(r)
r[0]=u
a0=$.kL()[0]}else a0=w.a3()
else a0=0
if(a8.d===C.GP){u=b1.a
a1=u==null?a9:u.gck()
a0=(a1==null?0:a1)-a0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.mG(e,g,a0)}}}else if(u===2){u=a8.f
if(u===8){if(a8.x===C.b6){u=w
u=J.v(u.a,u.d++)
r=$.nq()
r.$flags&2&&B.E(r)
r[0]=u
a2=$.ox()[0]}else{u=w
a2=J.v(u.a,u.d++)}if(a8.x===C.b6){u=w
u=J.v(u.a,u.d++)
r=$.nq()
r.$flags&2&&B.E(r)
r[0]=u
a3=$.ox()[0]}else{u=w
a3=J.v(u.a,u.d++)}}else if(u===16){if(a8.x===C.b6){u=w.am()
r=$.np()
r.$flags&2&&B.E(r)
r[0]=u
a2=$.ow()[0]}else a2=w.am()
if(a8.x===C.b6){u=w.am()
r=$.np()
r.$flags&2&&B.E(r)
r[0]=u
a3=$.ow()[0]}else a3=w.am()}else if(u===32){if(a8.x===C.b6){u=w.a3()
r=$.hy()
r.$flags&2&&B.E(r)
r[0]=u
a2=$.kL()[0]}else a2=w.a3()
if(a8.x===C.b6){u=w.a3()
r=$.hy()
r.$flags&2&&B.E(r)
r[0]=u
a3=$.kL()[0]}else a3=w.a3()}else{a2=0
a3=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.fg(e,g,a2,a3,0)}}else if(u===3){u=a8.x
if(u===C.pE){u=a8.f
if(u===32){u=w.a3()
r=$.hy()
r.$flags&2&&B.E(r)
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
r=$.hU
a4=(r!=null?r:A.iJ())[u]
u=w.am()
r=$.hU
a5=(r!=null?r:A.iJ())[u]
u=w.am()
r=$.hU
a6=(r!=null?r:A.iJ())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.fg(e,g,a4,a5,a6)}}else{r=a8.f
if(r===8){if(u===C.b6){u=w
u=J.v(u.a,u.d++)
r=$.nq()
r.$flags&2&&B.E(r)
r[0]=u
a4=$.ox()[0]}else{u=w
a4=J.v(u.a,u.d++)}if(a8.x===C.b6){u=w
u=J.v(u.a,u.d++)
r=$.nq()
r.$flags&2&&B.E(r)
r[0]=u
a5=$.ox()[0]}else{u=w
a5=J.v(u.a,u.d++)}if(a8.x===C.b6){u=w
u=J.v(u.a,u.d++)
r=$.nq()
r.$flags&2&&B.E(r)
r[0]=u
a6=$.ox()[0]}else{u=w
a6=J.v(u.a,u.d++)}}else if(r===16){if(u===C.b6){u=w.am()
r=$.np()
r.$flags&2&&B.E(r)
r[0]=u
a4=$.ow()[0]}else a4=w.am()
if(a8.x===C.b6){u=w.am()
r=$.np()
r.$flags&2&&B.E(r)
r[0]=u
a5=$.ow()[0]}else a5=w.am()
if(a8.x===C.b6){u=w.am()
r=$.np()
r.$flags&2&&B.E(r)
r[0]=u
a6=$.ow()[0]}else a6=w.am()}else if(r===32){if(u===C.b6){u=w.a3()
r=$.hy()
r.$flags&2&&B.E(r)
r[0]=u
a4=$.kL()[0]}else a4=w.a3()
if(a8.x===C.b6){u=w.a3()
r=$.hy()
r.$flags&2&&B.E(r)
r[0]=u
a5=$.kL()[0]}else a5=w.a3()
if(a8.x===C.b6){u=w.a3()
r=$.hy()
r.$flags&2&&B.E(r)
r[0]=u
a6=$.kL()[0]}else a6=w.a3()}else{a4=0
a5=0
a6=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.fg(e,g,a4,a5,a6)}}}else if(u>=4)if(a8.x===C.pE){u=a8.f
if(u===32){u=w.a3()
r=$.hy()
r.$flags&2&&B.E(r)
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
r=$.hU
a4=(r!=null?r:A.iJ())[u]
u=w.am()
r=$.hU
a5=(r!=null?r:A.iJ())[u]
u=w.am()
r=$.hU
a6=(r!=null?r:A.iJ())[u]
u=w.am()
r=$.hU
a7=(r!=null?r:A.iJ())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.kp(e,g,a4,a5,a6,a7)}}else{u=b1.a
a3=u==null?a9:u.gck()
if(a3==null)a3=0
u=a8.f
if(u===8){if(a8.x===C.b6){u=w
u=J.v(u.a,u.d++)
r=$.nq()
r.$flags&2&&B.E(r)
r[0]=u
a4=$.ox()[0]}else{u=w
a4=J.v(u.a,u.d++)}if(a8.x===C.b6){u=w
u=J.v(u.a,u.d++)
r=$.nq()
r.$flags&2&&B.E(r)
r[0]=u
a5=$.ox()[0]}else{u=w
a5=J.v(u.a,u.d++)}if(a8.x===C.b6){u=w
u=J.v(u.a,u.d++)
r=$.nq()
r.$flags&2&&B.E(r)
r[0]=u
a6=$.ox()[0]}else{u=w
a6=J.v(u.a,u.d++)}if(a8.x===C.b6){u=w
u=J.v(u.a,u.d++)
r=$.nq()
r.$flags&2&&B.E(r)
r[0]=u
a7=$.ox()[0]}else{u=w
a7=J.v(u.a,u.d++)}if(a8.r===5)if(a8.x===C.b6){u=w
u=J.v(u.a,u.d++)
r=$.nq()
r.$flags&2&&B.E(r)
r[0]=u
a3=$.ox()[0]}else{u=w
a3=J.v(u.a,u.d++)}}else if(u===16){if(a8.x===C.b6){u=w.am()
r=$.np()
r.$flags&2&&B.E(r)
r[0]=u
a4=$.ow()[0]}else a4=w.am()
if(a8.x===C.b6){u=w.am()
r=$.np()
r.$flags&2&&B.E(r)
r[0]=u
a5=$.ow()[0]}else a5=w.am()
if(a8.x===C.b6){u=w.am()
r=$.np()
r.$flags&2&&B.E(r)
r[0]=u
a6=$.ow()[0]}else a6=w.am()
if(a8.x===C.b6){u=w.am()
r=$.np()
r.$flags&2&&B.E(r)
r[0]=u
a7=$.ow()[0]}else a7=w.am()
if(a8.r===5)if(a8.x===C.b6){u=w.am()
r=$.np()
r.$flags&2&&B.E(r)
r[0]=u
a3=$.ow()[0]}else a3=w.am()}else if(u===32){if(a8.x===C.b6){u=w.a3()
r=$.hy()
r.$flags&2&&B.E(r)
r[0]=u
a4=$.kL()[0]}else a4=w.a3()
if(a8.x===C.b6){u=w.a3()
r=$.hy()
r.$flags&2&&B.E(r)
r[0]=u
a5=$.kL()[0]}else a5=w.a3()
if(a8.x===C.b6){u=w.a3()
r=$.hy()
r.$flags&2&&B.E(r)
r[0]=u
a6=$.kL()[0]}else a6=w.a3()
if(a8.x===C.b6){u=w.a3()
r=$.hy()
r.$flags&2&&B.E(r)
r[0]=u
a7=$.kL()[0]}else a7=w.a3()
if(a8.r===5)if(a8.x===C.b6){u=w.a3()
r=$.hy()
r.$flags&2&&B.E(r)
r[0]=u
a3=$.kL()[0]}else a3=w.a3()}else{a4=0
a5=0
a6=0
a7=0}if(a8.d===C.abu){A.cLu(a4,a5,a6,a7,h)
a4=h[0]
a5=h[1]
a6=h[2]
a7=a3}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.kp(e,g,a4,a5,a6,a7)}}}}else throw B.n(A.c8("Unsupported bitsPerSample: "+u))},
bbB(d,e,f,g,h,i){var x,w,v,u
for(x=0;x<i;++x)for(w=x+g,v=0;v<h;++v){u=d.a
u=u==null?null:u.ec(v,x,null)
if(u==null)u=new A.fk()
e.AK(v+f,w,u)}},
aZN(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.cy
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
if(r===32773){q=D.c.an(a2,8)===0?D.c.b2(a2,8)*u:(D.c.b2(a2,8)+1)*u
x=A.cY(new Uint8Array(a2*u),!1,a1,0)
a0.al8(a3,q,x.a)}else if(r===5){x=A.cY(new Uint8Array(a2*u),!1,a1,0)
A.cDS().Hc(0,A.cb(a3,s,0),x.a)
if(a0.Q===2)for(p=0;p<a0.c;++p){o=a0.r
n=o*(p*a0.b+1)
for(;o<a0.b*a0.r;++o){a2=x
u=J.v(a2.a,a2.d+n)
r=x
m=a0.r
m=J.v(r.a,r.d+(n-m))
J.bW(a2.a,a2.d+n,u+m);++n}}}else if(r===2){x=A.cY(new Uint8Array(a2*u),!1,a1,0)
try{A.cuQ(a0.dy,a0.ay,a0.ch).bxn(x,a3,0,a0.ch)}catch(l){}}else if(r===3){x=A.cY(new Uint8Array(a2*u),!1,a1,0)
try{A.cuQ(a0.dy,a0.ay,a0.ch).bxo(x,a3,0,a0.ch,a0.fr)}catch(l){}}else if(r===4){x=A.cY(new Uint8Array(a2*u),!1,a1,0)
try{A.cuQ(a0.dy,a0.ay,a0.ch).bxu(x,a3,0,a0.ch,a0.fx)}catch(l){}}else if(r===8)x=A.cY(C.jO.Co(a3.Jh(0,0,s)),!1,a1,0)
else if(r===32946)x=A.cY(C.jO.Co(a3.Jh(0,0,s)),!1,a1,0)
else if(r===1)x=a3
else throw B.n(A.c8("Unsupported Compression Type: "+r))
k=new A.bGM(x)
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
al8(d,e,f){var x,w,v,u,t,s,r,q,p,o
for(x=J.cZ(f),w=0,v=0;v<e;){u=w+1
t=J.v(d.a,d.d+w)
s=$.nq()
s.$flags&2&&B.E(s)
s[0]=t
r=$.ox()[0]
if(r>=0&&r<=127)for(t=r+1,w=u,q=0;q<t;++q,v=p,w=u){p=v+1
u=w+1
x.m(f,v,J.v(d.a,d.d+w))}else{t=r<=-1&&r>=-127
w=u+1
if(t){o=J.v(d.a,d.d+u)
for(t=-r+1,q=0;q<t;++q,v=p){p=v+1
x.m(f,v,o)}}}}},
Vi(d,e){var x=this.a
if(!x.a7(0,d))return e
x=x.i(0,d).ph(0)
x=x==null?null:x.C(0)
return x==null?0:x},
FM(d){return this.Vi(d,0)},
Vj(d){var x,w=this.a
if(!w.a7(0,d))return null
x=w.i(0,d)
w=x.ph(0)
w.toString
return B.qb(x.c,w.gxB(w),!0,y.p)}}
A.Ku.prototype={
J(){return"TiffFormat."+this.b}}
A.kF.prototype={
J(){return"TiffPhotometricType."+this.b}}
A.t_.prototype={
J(){return"TiffImageType."+this.b}}
A.bGP.prototype={}
A.blh.prototype={
Hc(d,e,f){var x,w,v,u,t,s,r=this
r.r=f
x=J.bB(f)
r.w=0
w=y.D.a(e.a)
r.e=w
r.f=w.length
r.b=e.d
if(w[0]===0&&w[1]===1)throw B.n(A.c8("Invalid LZW Data"))
r.aoX()
r.d=r.c=0
v=r.a4m()
w=r.x
u=0
while(!0){if(!(v!==257&&r.w<x))break
if(v===256){r.aoX()
v=r.a4m()
r.as=0
if(v===257)break
J.bW(r.r,r.w++,v)
u=v}else{t=r.Q
t.toString
if(v<t){r.ant(v)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bW(r.r,r.w++,w[s])
r.aiT(u,w[r.as-1])}else{r.ant(u)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bW(r.r,r.w++,w[s])
J.bW(r.r,r.w++,w[r.as-1])
r.aiT(u,w[r.as-1])}u=v}v=r.a4m()}},
aiT(d,e){var x,w=this,v=w.y
v===$&&B.b()
x=w.Q
x.toString
v.$flags&2&&B.E(v)
v[x]=e
v=w.z
v===$&&B.b()
v.$flags&2&&B.E(v)
v[x]=d
x=w.Q=x+1
if(x===511)w.a=10
else if(x===1023)w.a=11
else if(x===2047)w.a=12},
ant(d){var x,w,v,u,t,s,r=this
r.as=0
x=r.x
r.as=1
w=r.y
w===$&&B.b()
v=w[d]
x.$flags&2&&B.E(x)
x[0]=v
v=r.z
v===$&&B.b()
u=v[d]
for(t=1;u!==4098;t=s){s=t+1
r.as=s
x[t]=w[u]
u=v[u]}},
a4m(){var x,w,v,u,t=this,s=t.b,r=t.f
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
return D.c.h1(t.c,s)&C.ay0[w-9]},
aoX(){var x,w,v=this
v.y=new Uint8Array(4096)
x=new Uint32Array(4096)
v.z=x
D.by.m_(x,0,4096,4098)
for(x=v.y,w=0;w<256;++w){x.$flags&2&&B.E(x)
x[w]=w}v.a=9
v.Q=258}}
A.bGN.prototype={
kf(d){var x,w,v=this.a
if(v==null)return null
v=v.f[d]
x=this.c
x===$&&B.b()
w=v.da(0,x)
return w},
mY(d,e,f){var x=this,w=A.cY(e,!1,null,0)
x.c=w
w=x.arq(w)
x.a=w
if(w==null)return null
return x.kf(0)},
arq(d){var x,w,v,u,t,s,r,q,p,o=null,n=B.a([],y._),m=new A.bGP(n),l=d.am()
if(l!==18761&&l!==19789)return o
if(l===19789)d.e=!0
else d.e=!1
v=d.am()
m.d=v
if(v!==42)return o
u=d.a3()
t=A.cb(d,o,0)
t.d=u
x=t
for(v=y.p,s=y.aL;u!==0;){w=null
try{r=new A.aC0(B.K(v,s),C.GQ,C.abs,C.bDF)
r.aUx(x)
w=r
q=w
if(!(q.b!==0&&q.c!==0))break}catch(p){break}n.push(w)
if(n.length===1){q=n[0]
m.a=q.b
m.b=q.c}u=x.a3()
if(u!==0)x.d=u}return n.length!==0?m:o}}
A.bM0.prototype={
NT(){var x,w=this.a,v=w.rH()
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
if(!u.b3h())return t
x=u.b
w=x.a
u.d=A.hV(t,t,C.ab,0,C.bt,x.b,t,0,4,t,C.ab,w,!1)
u.baP()
if(!u.bgy())return t
x=x.w
if(x.length!==0){v=A.cY(new B.eQ(x),!1,t,0)
x=u.d
x.toString
x.e=A.cBQ(v)}return u.d},
b3h(){var x,w,v,u,t=this
if(!t.NT())return!1
t.fr=A.d6o()
for(x=t.dy,w=0;w<4;++w){v=new Int32Array(2)
u=new Int32Array(2)
x[w]=new A.aDG(v,u,new Int32Array(2))}x=t.b
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
u=A.cI5(v.ji(u))
t.c=u
v.d+=x.d
u.dz(1)
t.c.dz(1)
t.bgG(t.x,t.fr)
t.bgx()
if(!t.bgB(v))return!1
t.bgD()
t.c.dz(1)
t.bgC()
return!0},
bgG(d,e){var x,w,v,u=this,t=u.c
t===$&&B.b()
t=t.dz(1)!==0
d.a=t
if(t){d.b=u.c.dz(1)!==0
if(u.c.dz(1)!==0){d.c=u.c.dz(1)!==0
for(t=d.d,x=0;x<4;++x){if(u.c.dz(1)!==0){w=u.c
v=w.dz(7)
w=w.dz(1)===1?-v:v}else w=0
t.$flags&2&&B.E(t)
t[x]=w}for(t=d.e,x=0;x<4;++x){if(u.c.dz(1)!==0){w=u.c
v=w.dz(6)
w=w.dz(1)===1?-v:v}else w=0
t.$flags&2&&B.E(t)
t[x]=w}}if(d.b)for(x=0;x<3;++x){t=e.a
w=u.c.dz(1)!==0?u.c.dz(8):255
t.$flags&2&&B.E(t)
t[x]=w}}else d.b=!1
return!0},
bgx(){var x,w,v,u=this,t=u.w,s=u.c
s===$&&B.b()
t.a=s.dz(1)!==0
t.b=u.c.dz(6)
t.c=u.c.dz(3)
s=u.c.dz(1)!==0
t.d=s
if(s)if(u.c.dz(1)!==0){for(s=t.e,x=0;x<4;++x)if(u.c.dz(1)!==0){w=u.c
v=w.dz(6)
w=w.dz(1)===1?-v:v
s.$flags&2&&B.E(s)
s[x]=w}for(s=t.f,x=0;x<4;++x)if(u.c.dz(1)!==0){w=u.c
v=w.dz(6)
w=w.dz(1)===1?-v:v
s.$flags&2&&B.E(s)
s[x]=w}}if(t.b===0)s=0
else s=t.a?1:2
u.bQ=s
return!0},
bgB(d){var x,w,v,u,t,s,r,q=d.c-d.d,p=this.c
p===$&&B.b()
p=D.c.eo(1,p.dz(2))
this.cy=p
x=p-1
w=x*3
if(q<w)return!1
for(p=this.db,v=0,u=0;u<x;++u,w=s){t=d.St(3,v)
s=w+((J.v(t.a,t.d)|J.v(t.a,t.d+1)<<8|J.v(t.a,t.d+2)<<16)>>>0)
if(s>q)s=q
r=new A.a8a(d.AT(s-w,w))
r.b=254
r.c=0
r.d=-8
p[u]=r
v+=3}p[x]=A.cI5(d.AT(q-w,d.d-d.b+w))
return w<q},
bgD(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
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
j=C.CX[j]
k.$flags&2&&B.E(k)
k[0]=j
if(m<0)j=0
else j=m>127?127:m
k[1]=C.CY[j]
j=l.b
k=m+v
if(k<0)k=0
else if(k>127)k=127
k=C.CX[k]
j.$flags&2&&B.E(j)
j[0]=k*2
k=m+u
if(k<0)k=0
else if(k>127)k=127
j[1]=C.CY[k]*101581>>>16
if(j[1]<8)j[1]=8
k=l.c
j=m+t
if(j<0)j=0
else if(j>117)j=117
j=C.CX[j]
k.$flags&2&&B.E(k)
k[0]=j
j=m+s
if(j<0)j=0
else if(j>127)j=127
k[1]=C.CY[j]}},
bgC(){var x,w,v,u,t,s,r=this,q=r.fr
for(x=0;x<4;++x)for(w=0;w<8;++w)for(v=0;v<3;++v)for(u=0;u<11;++u){t=r.c
t===$&&B.b()
s=t.ir(C.aI1[x][w][v][u])!==0?r.c.dz(8):C.axX[x][w][v][u]
t=q.b[x][w].a[v]
t.$flags&2&&B.E(t)
t[u]=s}t=r.c
t===$&&B.b()
t=t.dz(1)!==0
r.fx=t
if(t)r.fy=r.c.dz(8)},
bhD(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.bQ
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
baP(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k.at
if(j!=null)m.bo=j
x=J.iO(4,y.K)
for(j=y.q,w=0;w<4;++w)x[w]=B.a([new A.L3(),new A.L3()],j)
m.aK=x
j=m.at
j.toString
x=J.iO(j,y.bt)
for(v=0;v<j;++v){u=new Uint8Array(16)
t=new Uint8Array(8)
x[v]=new A.aDH(u,t,new Uint8Array(8))}m.k2=x
m.ok=new Uint8Array(832)
j=m.at
j.toString
m.go=new Uint8Array(4*j)
u=m.p4=16*j
j=8*j
m.R8=j
t=m.bQ
t.toString
s=C.CG[t]
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
k=m.bQ
k.toString
o=C.CG[k]
if(k===2)m.ch=m.ay=0
else{k=m.y
k===$&&B.b()
k=D.c.b2(k-o,16)
m.ay=k
j=m.Q
j.toString
j=D.c.b2(j-o,16)
m.ch=j
if(k<0)m.ay=0
if(j<0)m.ch=0}k=m.as
k.toString
k=D.c.b2(k+15+o,16)
m.cx=k
j=m.z
j===$&&B.b()
j=D.c.b2(j+15+o,16)
m.CW=j
u=m.at
u.toString
if(j>u)m.CW=u
j=m.ax
j.toString
if(k>j)m.cx=j
n=u+1
x=J.iO(n,y.bQ)
for(v=0;v<n;++v)x[v]=new A.aDE()
m.k3=x
k=m.at
k.toString
x=J.iO(k,y.bl)
for(v=0;v<k;++v){j=new Int16Array(384)
x[v]=new A.aDF(j,new Uint8Array(16))}m.c1=x
k=m.at
k.toString
m.k4=B.bP(k,l,!1,y.B)
m.bhD()
A.d5Q()
m.e=new A.bM1()
return!0},
bgy(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
t=j.c1
t===$&&B.b()
p=t[u]
if(w.b){u=j.c
u===$&&B.b()
u=u.ir(j.fr.a[0])
t=j.c
o=j.fr
j.k1=u===0?t.ir(o.a[1]):2+t.ir(o.a[2])}u=j.fx
u===$&&B.b()
if(u){u=j.c
u===$&&B.b()
t=j.fy
t===$&&B.b()
n=u.ir(t)!==0}else n=!1
j.bgz()
if(!n)n=j.bgE(q,s)
else{r.a=q.a=0
u=p.b
u===$&&B.b()
if(!u)r.b=q.b=0
p.f=p.e=0}u=j.bQ
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
D.D.m_(x,0,4,0)
j.y1=0
j.biG()
u=j.bQ
u.toString
k=!1
if(u>0){u=j.y2
t=j.ch
t===$&&B.b()
if(u>=t){t=j.cx
t.toString
t=u<=t
k=t}}if(!j.b26(k))return!1
u=++j.y2}return!0},
biG(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.y2,a5=a2.ok
a5===$&&B.b()
x=A.cY(a5,!1,a3,40)
w=A.cY(a2.ok,!1,a3,584)
v=A.cY(a2.ok,!1,a3,600)
a5=a4>0
u=0
while(!0){t=a2.at
t.toString
if(!(u<t))break
t=a2.c1
t===$&&B.b()
s=t[u]
if(u>0){for(r=-1;r<16;++r){t=r*32
x.rC(t-4,4,x,t+12)}for(r=-1;r<8;++r){t=r*32
q=t-4
t+=4
w.rC(q,4,w,t)
v.rC(q,4,v,t)}}else{for(r=0;r<16;++r)J.bW(x.a,x.d+(r*32-1),129)
for(r=0;r<8;++r){t=r*32-1
J.bW(w.a,w.d+t,129)
J.bW(v.a,v.d+t,129)}if(a5){J.bW(v.a,v.d+-33,129)
J.bW(w.a,w.d+-33,129)
J.bW(x.a,x.d+-33,129)}}t=a2.k2
t===$&&B.b()
p=t[u]
o=s.a
n=s.e
if(a5){x.A0(-32,16,p.a)
w.A0(-32,8,p.b)
v.A0(-32,8,p.c)}else if(u===0){t=x.a
q=x.d+-33
J.tw(t,q,q+21,127)
q=w.a
t=w.d+-33
J.tw(q,t,t+9,127)
t=v.a
q=v.d+-33
J.tw(t,q,q+9,127)}t=s.b
t===$&&B.b()
if(t){m=A.cb(x,a3,-16)
l=m.QC()
if(a5){t=a2.at
t.toString
if(u>=t-1){t=p.a[15]
q=m.a
k=m.d
J.tw(q,k,k+4,t)}else m.A0(0,4,a2.k2[u+1].a)}j=l[0]
l.$flags&2&&B.E(l)
l[96]=j
l[64]=j
l[32]=j
for(t=s.c,i=0;i<16;++i,n=n<<2>>>0){h=A.cb(x,a3,C.UG[i])
C.aEN[t[i]].$1(h)
n.toString
q=i*16
a2.alG(n,new A.m3(o,q,Math.min(384,384),q,!1),h)}}else{t=A.cI8(u,a4,s.c[0])
t.toString
C.aJm[t].$1(x)
if(n!==0)for(i=0;i<16;++i,n=n<<2>>>0){h=A.cb(x,a3,C.UG[i])
n.toString
t=i*16
a2.alG(n,new A.m3(o,t,Math.min(384,384),t,!1),h)}}t=s.f
t===$&&B.b()
q=A.cI8(u,a4,s.d)
q.toString
C.PP[q].$1(w)
C.PP[q].$1(v)
q=Math.min(384,384)
g=new A.m3(o,256,q,256,!1)
if((t&255)!==0){k=a2.e
if((t&170)!==0){k===$&&B.b()
k.vA(g,w)
k.vA(A.cb(g,a3,16),A.cb(w,a3,4))
f=A.cb(g,a3,32)
e=A.cb(w,a3,128)
k.vA(f,e)
k.vA(A.cb(f,a3,16),A.cb(e,a3,4))}else{k===$&&B.b()
k.aG4(g,w)}}d=new A.m3(o,320,q,320,!1)
t=t>>>8
if((t&255)!==0){q=a2.e
if((t&170)!==0){q===$&&B.b()
q.vA(d,v)
q.vA(A.cb(d,a3,16),A.cb(v,a3,4))
t=A.cb(d,a3,32)
k=A.cb(v,a3,128)
q.vA(t,k)
q.vA(A.cb(t,a3,16),A.cb(k,a3,4))}else{q===$&&B.b()
q.aG4(d,v)}}t=a2.ax
t.toString
if(a4<t-1){D.D.e3(p.a,0,16,x.hL(),480)
D.D.e3(p.b,0,8,w.hL(),224)
D.D.e3(p.c,0,8,v.hL(),224)}a0=u*16
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
alG(d,e,f){var x,w,v,u,t,s
switch(d>>>30){case 3:x=this.e
x===$&&B.b()
x.Jo(0,e,f,!1)
break
case 2:this.e===$&&B.b()
w=J.v(e.a,e.d)+4
v=D.c.ld(D.c.S(J.v(e.a,e.d+4)*35468,16),32)
u=D.c.ld(D.c.S(J.v(e.a,e.d+4)*85627,16),32)
t=D.c.ld(D.c.S(J.v(e.a,e.d+1)*35468,16),32)
s=D.c.ld(D.c.S(J.v(e.a,e.d+1)*85627,16),32)
A.bM3(f,0,w+u,s,t)
A.bM3(f,1,w+v,s,t)
A.bM3(f,2,w-v,s,t)
A.bM3(f,3,w-u,s,t)
break
case 1:x=this.e
x===$&&B.b()
x.QD(e,f)
break
default:break}},
b0i(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.p4,j=m.k4
j===$&&B.b()
j=j[d]
j.toString
x=m.p1
x===$&&B.b()
w=A.cb(x,l,d*16)
v=j.b
u=j.a
if(u===0)return
if(m.bQ===1){if(d>0){x=m.e
x===$&&B.b()
k.toString
x.agS(w,k,u+4)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.aMP(w,k,u)}if(e>0){x=m.e
x===$&&B.b()
k.toString
x.agT(w,k,u+4)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.aMS(w,k,u)}}else{t=m.R8
x=m.p2
x===$&&B.b()
s=d*8
r=A.cb(x,l,s)
x=m.p3
x===$&&B.b()
q=A.cb(x,l,s)
p=j.d
if(d>0){x=m.e
x===$&&B.b()
k.toString
s=u+4
x.Fi(w,1,k,16,s,v,p)
t.toString
x.Fi(r,1,t,8,s,v,p)
x.Fi(q,1,t,8,s,v,p)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.bAC(w,k,u,v,p)
t.toString
o=A.cb(r,l,4)
n=A.cb(q,l,4)
x.Fh(o,1,t,8,u,v,p)
x.Fh(n,1,t,8,u,v,p)}if(e>0){x=m.e
x===$&&B.b()
k.toString
s=u+4
x.Fi(w,k,1,16,s,v,p)
t.toString
x.Fi(r,t,1,8,s,v,p)
x.Fi(q,t,1,8,s,v,p)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.bMi(w,k,u,v,p)
t.toString
x=4*t
o=A.cb(r,l,x)
n=A.cb(q,l,x)
j.Fh(o,t,1,8,u,v,p)
j.Fh(n,t,1,8,u,v,p)}}},
b1R(){var x,w=this,v=w.ay
v===$&&B.b()
x=v
while(!0){v=w.CW
v.toString
if(!(x<v))break
w.b0i(x,w.y2);++x}},
b26(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.bQ
e.toString
x=C.CG[e]
e=g.p4
e.toString
w=x*e
e=g.R8
e.toString
v=(x/2|0)*e
e=g.p1
e===$&&B.b()
u=-w
t=A.cb(e,f,u)
e=g.p2
e===$&&B.b()
s=-v
r=A.cb(e,f,s)
e=g.p3
e===$&&B.b()
q=A.cb(e,f,s)
p=g.y2
e=g.cx
e.toString
o=p*16
n=(p+1)*16
if(d)g.b1R()
if(p!==0){o-=x
g.to=A.cb(t,f,0)
g.x1=A.cb(r,f,0)
g.x2=A.cb(q,f,0)}else{g.to=A.cb(g.p1,f,0)
g.x1=A.cb(g.p2,f,0)
g.x2=A.cb(g.p3,f,0)}e=p<e-1
if(e)n-=x
m=g.as
m.toString
if(n>m)n=m
g.xr=null
if(g.bo!=null&&o<n){m=g.xr=g.b_6(o,n-o)
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
g.bi1(0,o-l,m-h,n-o)}if(e){e=g.p1
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
bi1(d,e,f,g){if(f<=0||g<=0)return!1
this.b15(e,f,g)
this.b14(e,f,g)
return!0},
a3g(d){var x
if((d&-4194304)>>>0===0)x=D.c.S(d,14)
else x=d<0?0:255
return x},
WO(d,e,f,g){var x=19077*d
g.m(0,0,this.a3g(x+26149*f+-3644112))
g.m(0,1,this.a3g(x-6419*e-13320*f+2229552))
g.m(0,2,this.a3g(x+33050*e+-4527440))},
Wx(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=new A.bMd(),a0=b3-1,a1=D.c.S(a0,1),a2=d.$2(J.v(a7.a,a7.d),J.v(a8.a,a8.d)),a3=d.$2(J.v(a9.a,a9.d),J.v(b0.a,b0.d)),a4=D.c.S(3*a2+a3+131074,2)
f.WO(J.v(a5.a,a5.d),a4&255,a4>>>16,b1)
b1.m(0,3,255)
x=a6!=null
if(x){a4=D.c.S(3*a3+a2+131074,2)
w=J.v(a6.a,a6.d)
b2.toString
f.WO(w,a4&255,a4>>>16,b2)
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
j=A.cb(b1,e,k)
n=19077*n
i=n+26149*l+-3644112
if((i&-4194304)>>>0===0)h=D.c.S(i,14)
else h=i<0?0:255
J.bW(j.a,j.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.S(l,14)
else h=l<0?0:255
J.bW(j.a,j.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.S(n,14)
else h=n<0?0:255
J.bW(j.a,j.d+2,h)
J.bW(j.a,j.d+3,255)
n=J.v(a5.a,a5.d+w)
m=p&255
l=p>>>16
j=w*4
i=A.cb(b1,e,j)
n=19077*n
g=n+26149*l+-3644112
if((g&-4194304)>>>0===0)h=D.c.S(g,14)
else h=g<0?0:255
J.bW(i.a,i.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.S(l,14)
else h=l<0?0:255
J.bW(i.a,i.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.S(n,14)
else h=n<0?0:255
J.bW(i.a,i.d+2,h)
J.bW(i.a,i.d+3,255)
if(x){a4=D.c.S(q+a3,1)
p=D.c.S(r+t,1)
o=J.v(a6.a,a6.d+o)
n=a4&255
m=a4>>>16
b2.toString
k=A.cb(b2,e,k)
o=19077*o
l=o+26149*m+-3644112
if((l&-4194304)>>>0===0)h=D.c.S(l,14)
else h=l<0?0:255
J.bW(k.a,k.d,h)
m=o-6419*n-13320*m+2229552
if((m&-4194304)>>>0===0)h=D.c.S(m,14)
else h=m<0?0:255
J.bW(k.a,k.d+1,h)
o=o+33050*n+-4527440
if((o&-4194304)>>>0===0)h=D.c.S(o,14)
else h=o<0?0:255
J.bW(k.a,k.d+2,h)
J.bW(k.a,k.d+3,255)
w=J.v(a6.a,a6.d+w)
o=p&255
n=p>>>16
j=A.cb(b2,e,j)
w=19077*w
m=w+26149*n+-3644112
if((m&-4194304)>>>0===0)h=D.c.S(m,14)
else h=m<0?0:255
J.bW(j.a,j.d,h)
n=w-6419*o-13320*n+2229552
if((n&-4194304)>>>0===0)h=D.c.S(n,14)
else h=n<0?0:255
J.bW(j.a,j.d+1,h)
w=w+33050*o+-4527440
if((w&-4194304)>>>0===0)h=D.c.S(w,14)
else h=w<0?0:255
J.bW(j.a,j.d+2,h)
J.bW(j.a,j.d+3,255)}}if((b3&1)===0){a4=D.c.S(3*a2+a3+131074,2)
w=J.v(a5.a,a5.d+a0)
o=a0*4
n=A.cb(b1,e,o)
f.WO(w,a4&255,a4>>>16,n)
n.m(0,3,255)
if(x){a4=D.c.S(3*a3+a2+131074,2)
a0=J.v(a6.a,a6.d+a0)
b2.toString
o=A.cb(b2,e,o)
f.WO(a0,a4&255,a4>>>16,o)
o.m(0,3,255)}}},
b14(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.xr
if(o==null)return
x=A.cb(o,null,0)
if(d===0){w=f-1
v=d}else{v=d-1
x.d=x.d-p.b.a
w=f}o=p.Q
o.toString
u=p.as
if(o+d+f===u){u.toString
w=u-o-v}for(o=p.b,t=0;t<w;++t){for(u=t+v,s=0;s<e;++s){r=J.v(x.a,x.d+s)
q=p.d.a
q=q==null?null:q.ec(s,u,null);(q==null?new A.fk():q).saE(0,r)}x.d=x.d+o.a}},
b15(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=A.cY(J.df(l.d.gaj(0),0,null),!1,k,d*j.a*4),h=l.to
h===$&&B.b()
x=A.cb(h,k,0)
h=l.x1
h===$&&B.b()
w=A.cb(h,k,0)
h=l.x2
h===$&&B.b()
v=A.cb(h,k,0)
u=d+f
t=D.c.S(e+1,1)
s=j.a*4
j=l.rx
j===$&&B.b()
r=A.cb(j,k,0)
j=l.ry
j===$&&B.b()
q=A.cb(j,k,0)
if(d===0){l.Wx(x,k,w,v,w,v,i,k,e)
p=f}else{j=l.RG
j===$&&B.b()
l.Wx(j,x,r,q,w,v,A.cb(i,k,-s),i,e)
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
l.Wx(A.cb(x,k,-n),x,r,q,w,v,A.cb(i,k,h),i,e)}j=x.d
h=l.p4
h.toString
x.d=j+h
j=l.Q
j.toString
h=l.as
h.toString
if(j+u<h){j=l.RG
j===$&&B.b()
j.A0(0,e,x)
l.rx.A0(0,t,w)
l.ry.A0(0,t,v);--p}else if((u&1)===0)l.Wx(x,k,w,v,w,v,A.cb(i,k,s),k,e)
return p},
b_6(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.b,m=n.a,l=n.b
if(d<0||e<=0||d+e>l)return null
if(d===0){n=m*l
o.by=new Uint8Array(n)
x=o.bo
w=new A.bN0(x,m,l)
v=x.ct()
w.d=v&3
w.e=D.c.S(v,2)&3
w.f=D.c.S(v,4)&3
w.r=D.c.S(v,6)&3
if(w.geE()){u=w.d
if(u===0){if(x.c-x.d<n)w.r=1}else if(u===1){t=new A.aE5(C.pO,B.a([],y.J))
t.a=m
t.b=l
n=B.a([],y.A)
u=B.a([],y.F)
s=new Uint32Array(2)
r=new A.aDC(x,s)
s=r.d=J.df(D.by.gaj(s),0,null)
q=x.ct()
s.$flags&2&&B.E(s)
s[0]=q
s[1]=x.ct()
s[2]=x.ct()
s[3]=x.ct()
s[4]=x.ct()
s[5]=x.ct()
s[6]=x.ct()
s[7]=x.ct()
u=new A.arU(r,t,n,u)
u.db=m
w.x=u
u.L5(m,l,!0)
n=w.x
x=n.ax
if(x.length===1&&x[0].a===C.acn&&n.bbj()){w.y=!0
n=w.x
x=n.c
p=x.a*x.b
n.cx=0
x=D.c.an(p,4)
x=new Uint8Array(p+(4-x))
n.CW=x
n.ch=J.oy(D.D.gaj(x),0,null)}else{w.y=!1
w.x.aj3()}}else w.r=1}o.bb=w}n=o.bb
n===$&&B.b()
if(!n.w){x=o.by
x===$&&B.b()
if(!n.NS(0,d,e,x))return null}n=o.by
n===$&&B.b()
return A.cY(n,!1,null,d*m)},
bgE(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.fr.b,a3=a1.k1
a3===$&&B.b()
x=a1.dy[a3]
a3=a1.c1
a3===$&&B.b()
w=a3[a1.y1]
v=A.cY(w.a,!1,null,0)
a3=a1.k3
a3===$&&B.b()
u=a3[0]
v.bFf(0,v.c-v.d,0)
a3=w.b
a3===$&&B.b()
if(!a3){t=A.cY(new Int16Array(16),!1,null,0)
a3=a4.b
s=u.b
r=a1.a4g(a5,a2[1],a3+s,x.b,0,t)
a4.b=u.b=r>0?1:0
if(r>1)a1.bov(t,v)
else{q=D.c.S(J.v(t.a,t.d)+3,3)
for(p=0;p<256;p+=16)J.bW(v.a,v.d+p,q)}o=a2[0]
n=1}else{o=a2[3]
n=0}m=a4.a&15
l=u.a&15
for(k=0,j=0;j<4;++j){i=l&1
for(h=0,g=0;g<4;++g){r=a1.a4g(a5,o,i+(m&1),x.a,n,v)
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
for(g=0;g<2;++g){r=a1.a4g(a5,a2[2],i+(m&1),x.c,0,v)
i=r>0?1:0
m=m>>>1|i<<3
a3=J.v(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=(h<<2|a3)>>>0
v.d+=16}m=m>>>2
l=l>>>1|i<<5}d=(d|D.c.eo(h,4*a0))>>>0
e=(e|D.c.eo(m<<4>>>0,a0))>>>0
f=(f|D.c.eo(l&240,a0))>>>0}a4.a=e
u.a=f
w.e=k
w.f=d
if((d&43690)===0)x.toString
return(k|d)>>>0===0},
bov(d,e){var x,w,v,u,t,s,r,q,p,o,n=new Int32Array(16)
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
J.bW(e.a,e.d+p,u)
u=D.c.S(q+r,3)
J.bW(e.a,e.d+(p+16),u)
u=D.c.S(v-s,3)
J.bW(e.a,e.d+(p+32),u)
u=D.c.S(q-r,3)
J.bW(e.a,e.d+(p+48),u)
p+=64}},
b3o(d,e){var x,w,v,u,t,s
if(d.ir(e[3])===0)x=d.ir(e[4])===0?2:3+d.ir(e[5])
else if(d.ir(e[6])===0)x=d.ir(e[7])===0?5+d.ir(159):7+2*d.ir(165)+d.ir(145)
else{w=d.ir(e[8])
v=2*w+d.ir(e[9+w])
u=C.azu[v]
t=u.length
for(x=0,s=0;s<t;++s)x+=x+d.ir(u[s])
x+=3+D.c.eo(8,v)}return x},
a4g(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=e[h].a[f]
for(;h<16;h=x){if(d.ir(p[0])===0)return h
for(;d.ir(p[1])===0;){++h
p=e[C.T0[h]].a[0]
if(h===16)return 16}x=h+1
w=e[C.T0[x]].a
if(d.ir(p[2])===0){p=w[1]
v=1}else{v=this.b3o(d,p)
p=w[2]}u=C.aDG[h]
t=d.b
t===$&&B.b()
s=d.ajo(D.c.S(t,1))
t=d.b
r=C.S4[t]
d.b=C.S2[t]
t=d.d
t===$&&B.b()
d.d=t-r
t=s!==0?-v:v
q=g[h>0?1:0]
J.bW(i.a,i.d+u,t*q)}return 16},
bgz(){var x,w,v,u,t,s,r,q,p,o=this,n=o.y1,m=4*n,l=o.go,k=o.id,j=o.c1
j===$&&B.b()
x=j[n]
n=o.c
n===$&&B.b()
n=n.ir(145)===0
x.b=n
if(!n){if(o.c.ir(156)!==0)w=o.c.ir(128)!==0?1:3
else w=o.c.ir(163)!==0?2:0
n=x.c
n.$flags&2&&B.E(n)
n[0]=w
l.toString
D.D.m_(l,m,m+4,w)
D.D.m_(k,0,4,w)}else{v=x.c
for(n=k.$flags|0,u=0,t=0;t<4;++t,u=p){w=k[t]
for(s=0;s<4;++s){j=m+s
r=C.aDT[l[j]][w]
q=C.QR[o.c.ir(r[0])]
for(;q>0;)q=C.QR[2*q+o.c.ir(r[q])]
w=-q
l.$flags&2&&B.E(l)
l[j]=w}p=u+4
l.toString
D.D.e3(v,u,p,l,m)
n&2&&B.E(k)
k[t]=w}}if(o.c.ir(142)===0)n=0
else if(o.c.ir(114)===0)n=2
else n=o.c.ir(183)!==0?1:3
x.d=n}}
A.a8a.prototype={
dz(d){var x,w
for(x=0;w=d-1,d>0;d=w)x=(x|D.c.eW(this.ir(128),w))>>>0
return x},
JR(d){var x=this.dz(d)
return this.dz(1)===1?-x:x},
ir(d){var x,w=this,v=w.b
v===$&&B.b()
x=w.ajo(D.c.S(v*d,8))
if(w.b<=126)w.blI()
return x},
ajo(d){var x,w,v,u,t,s=this,r=s.d
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
if(D.c.o3(r,t)>d){x=s.b
x===$&&B.b()
w=d+1
s.b=x-w
s.c=r-D.c.eW(w,t)
return 1}else{s.b=d
return 0}},
blI(){var x,w=this,v=w.b
v===$&&B.b()
x=C.S4[v]
w.b=C.S2[v]
v=w.d
v===$&&B.b()
w.d=v-x}}
A.bM1.prototype={
agT(d,e,f){var x,w=A.cb(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x
if(this.aq4(w,e,f))this.Tq(w,e)}},
agS(d,e,f){var x,w=A.cb(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x*e
if(this.aq4(w,1,f))this.Tq(w,1)}},
aMS(d,e,f){var x,w,v=A.cb(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.agT(v,e,f)}},
aMP(d,e,f){var x,w=A.cb(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.agS(w,e,f)}},
bMi(d,e,f,g,h){var x,w,v=A.cb(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.Fh(v,e,1,16,f,g,h)}},
bAC(d,e,f,g,h){var x,w=A.cb(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.Fh(w,1,e,16,f,g,h)}},
Fi(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=A.cb(d,null,0)
for(x=-3*e,w=-2*e,v=-e,u=2*e;t=g-1,g>0;g=t){if(this.aq5(h,e,a0,a1))if(this.aoy(h,e,a2))this.Tq(h,e)
else{s=J.v(h.a,h.d+x)
r=J.v(h.a,h.d+w)
q=J.v(h.a,h.d+v)
p=J.v(h.a,h.d)
o=J.v(h.a,h.d+e)
n=J.v(h.a,h.d+u)
m=$.cqv()
l=m[1020+3*(p-q)+m[1020+r-o]]
m=D.c.S(27*l+63,7)
k=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.S(18*l+63,7)
j=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.S(9*l+63,7)
i=(m&2147483647)-((m&2147483648)>>>0)
m=$.pP()[255+s+i]
J.bW(h.a,h.d+x,m)
m=$.pP()[255+r+j]
J.bW(h.a,h.d+w,m)
m=$.pP()[255+q+k]
J.bW(h.a,h.d+v,m)
m=$.pP()[255+p-k]
J.bW(h.a,h.d,m)
m=$.pP()[255+o-j]
J.bW(h.a,h.d+e,m)
m=$.pP()[255+n-i]
J.bW(h.a,h.d+u,m)}h.d+=f}},
Fh(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=A.cb(d,null,0)
for(x=-2*e,w=-e;v=g-1,g>0;g=v){if(this.aq5(k,e,h,i))if(this.aoy(k,e,j))this.Tq(k,e)
else{u=J.v(k.a,k.d+x)
t=J.v(k.a,k.d+w)
s=J.v(k.a,k.d)
r=J.v(k.a,k.d+e)
q=3*(s-t)
p=$.aWo()
o=D.c.S(q+4,3)
n=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.S(q+3,3)
m=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.S(n+1,1)
l=(o&2147483647)-((o&2147483648)>>>0)
o=$.pP()[255+u+l]
J.bW(k.a,k.d+x,o)
o=$.pP()[255+t+m]
J.bW(k.a,k.d+w,o)
o=$.pP()[255+s-n]
J.bW(k.a,k.d,o)
o=$.pP()[255+r-l]
J.bW(k.a,k.d+e,o)}k.d+=f}},
Tq(d,e){var x=J.v(d.a,d.d+-2*e),w=-e,v=J.v(d.a,d.d+w),u=J.v(d.a,d.d),t=J.v(d.a,d.d+e),s=3*(u-v)+$.cqv()[1020+x-t],r=$.aWo()[112+D.c.ld(D.c.S(s+4,3),32)],q=$.aWo()[112+D.c.ld(D.c.S(s+3,3),32)]
d.m(0,w,$.pP()[255+v+q])
d.m(0,0,$.pP()[255+u-r])},
aoy(d,e,f){var x=J.v(d.a,d.d+-2*e),w=J.v(d.a,d.d+-e),v=J.v(d.a,d.d),u=J.v(d.a,d.d+e),t=$.aWn()
return t[255+x-w]>f||t[255+u-v]>f},
aq4(d,e,f){var x=J.v(d.a,d.d+-2*e),w=J.v(d.a,d.d+-e),v=J.v(d.a,d.d),u=J.v(d.a,d.d+e)
return 2*$.aWn()[255+w-v]+$.cqu()[255+x-u]<=f},
aq5(d,e,f,g){var x=J.v(d.a,d.d+-4*e),w=J.v(d.a,d.d+-3*e),v=J.v(d.a,d.d+-2*e),u=J.v(d.a,d.d+-e),t=J.v(d.a,d.d),s=J.v(d.a,d.d+e),r=J.v(d.a,d.d+2*e),q=J.v(d.a,d.d+3*e),p=$.aWn(),o=255+v
if(2*p[255+u-t]+$.cqu()[o-s]>f)return!1
return p[255+x-w]<=g&&p[255+w-v]<=g&&p[o-u]<=g&&p[255+q-r]<=g&&p[255+r-s]<=g&&p[255+s-t]<=g},
vA(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=new Int32Array(16)
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
Jo(d,e,f,g){this.vA(e,f)
if(g)this.vA(A.cb(e,null,16),A.cb(f,null,4))},
QD(d,e){var x,w,v=J.v(d.a,d.d)+4
for(x=0;x<4;++x)for(w=0;w<4;++w)A.EB(e,0,w,x,v)},
aG4(d,e){var x=this,w=null
if(J.v(d.a,d.d)!==0)x.QD(d,e)
if(J.v(d.a,d.d+16)!==0)x.QD(A.cb(d,w,16),A.cb(e,w,4))
if(J.v(d.a,d.d+32)!==0)x.QD(A.cb(d,w,32),A.cb(e,w,128))
if(J.v(d.a,d.d+48)!==0)x.QD(A.cb(d,w,48),A.cb(e,w,132))}}
A.bM6.prototype={}
A.bMa.prototype={}
A.bMc.prototype={}
A.a89.prototype={}
A.bMb.prototype={}
A.bM2.prototype={}
A.L3.prototype={}
A.aDE.prototype={}
A.aDG.prototype={}
A.aDF.prototype={}
A.aDH.prototype={}
A.a8b.prototype={
NT(){var x,w=this.b
if(w.jc(8)!==47)return!1
x=this.c
x.f=C.z8
x.a=w.jc(14)+1
x.b=w.jc(14)+1
x.d=w.jc(1)!==0
if(w.jc(3)!==0)return!1
return!0},
oe(d){var x,w,v,u,t,s=this,r=null
s.e=0
if(!s.NT())return r
x=s.c
s.L5(x.a,x.b,!0)
s.aj3()
w=x.a
s.d=A.hV(r,r,C.ab,0,C.bt,x.b,r,0,4,r,C.ab,w,!1)
w=s.ch
w.toString
v=x.a
u=x.b
if(!s.a3C(w,v,u,u,s.gbhL()))return r
x=x.w
if(x.length!==0){t=A.cY(new B.eQ(x),!1,r,0)
x=s.d
x.toString
x.e=A.cBQ(t)}return s.d},
aj3(){var x,w=this,v=w.c,u=v.a
v=u*v.b+u
x=new Uint32Array(v+u*16)
w.ch=x
w.CW=J.df(D.by.gaj(x),0,null)
w.cx=v
return!0},
biw(d){var x,w,v,u=this,t=u.b,s=t.jc(2),r=u.ay,q=D.c.eo(1,s)
if((r&q)>>>0!==0)return!1
u.ay=(r|q)>>>0
x=new A.aDD(C.acm)
u.ax.push(x)
r=C.aIK[s]
x.a=r
x.b=d[0]
x.c=d[1]
switch(r.a){case 0:case 1:t=t.jc(3)+2
x.e=t
x.d=u.L5(A.EC(x.b,t),A.EC(x.c,x.e),!1)
break
case 3:w=t.jc(8)+1
if(w>16)v=0
else if(w>4)v=1
else{t=w>2?2:3
v=t}d[0]=A.EC(x.b,v)
x.e=v
x.d=u.L5(w,1,!1)
u.b1w(w,x)
break
case 2:break}return!0},
L5(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(f)for(x=p.b,w=y.t,v=e,u=d;x.jc(1)!==0;){t=B.a([u,v],w)
if(!p.biw(t))throw B.n(A.c8("Invalid Transform"))
u=t[0]
v=t[1]}else{v=e
u=d}x=p.b
if(x.jc(1)!==0){s=x.jc(4)
if(!(s>=1&&s<=11))throw B.n(A.c8("Invalid Color Cache"))}else s=0
if(!p.bik(u,v,s,f))throw B.n(A.c8("Invalid Huffman Codes"))
if(s>0){x=D.c.eo(1,s)
p.r=x
p.w=new A.bM7(new Uint32Array(x),32-s)}else p.r=0
x=p.c
x.a=u
x.b=v
r=p.y
p.z=A.EC(u,r)
p.x=r===0?4294967295:D.c.eo(1,r)-1
if(f){p.e=0
return null}q=new Uint32Array(u*v)
if(!p.a3C(q,u,v,v,null))throw B.n(A.c8("Failed to decode image data."))
p.e=0
return q},
a3C(a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=a0.e,a2=D.c.hy(a1,a9),a3=D.c.an(a1,a9),a4=a0.an5(a3,a2),a5=a0.e,a6=a9*b0,a7=a9*b1
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
if((a3&v)>>>0===0){p=a0.Lq(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(u.a>=32)u.BS()
r=a4.a
o=r[0].Ah(u)
n=0
if(o<256){m=r[1].Ah(u)
if(u.a>=32)u.BS()
l=A.cMP(r[2].Ah(u),o,m,r[3].Ah(u))
a1&2&&B.E(a8)
a8[a5]=l;++a5;++a3
if(a3>=a9){++a2
if(D.c.an(a2,16)===0&&t)b2.$1(a2)
if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.c.h1(j*506832829>>>0,r)
k&2&&B.E(q)
q[i]=j;++s}a3=n}}else if(o<280){h=a0.TU(o-256)
g=r[4].Ah(u)
if(u.a>=32)u.BS()
f=a0.aqY(a9,a0.TU(g))
if(a5<f||a6-a5<h)return!1
else{e=a5-f
for(d=0;d<h;++d){r=a8[e+d]
a1&2&&B.E(a8)
a8[a5+d]=r}a5+=h}a3+=h
for(;a3>=a9;){a3-=a9;++a2
if(D.c.an(a2,16)===0&&t)b2.$1(a2)}if(a5<a7){if((a3&v)>>>0!==0){p=a0.Lq(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.c.h1(j*506832829>>>0,r)
k&2&&B.E(q)
q[i]=j;++s}}}else if(o<x){for(;s<a5;){r=a8[s]
i=D.c.h1(r*506832829>>>0,w.b)
q=w.a
q.$flags&2&&B.E(q)
q[i]=r;++s}r=w.a
q=r[o-280]
a1&2&&B.E(a8)
a8[a5]=q;++a5;++a3
if(a3>=a9){++a2
if(D.c.an(a2,16)===0&&t)b2.$1(a2)
for(q=w.b,k=r.$flags|0;s<a5;){j=a8[s]
i=D.c.h1(j*506832829>>>0,q)
k&2&&B.E(r)
r[i]=j;++s}a3=n}}else return!1}if(t)b2.$1(a2)
if(r.d>=q&&u.a>=64&&a5<a6)return!1
a0.e=a5
return!0},
bbj(){var x,w,v,u
if(this.r>0)return!1
for(x=this.as,w=this.at,v=0;v<x;++v){u=w[v].a
if(u[1].f>1)return!1
if(u[2].f>1)return!1
if(u[3].f>1)return!1}return!0},
b1E(d){var x,w,v,u,t,s,r=this,q=r.f,p=d-q
if(p<=0)return
x=r.c
r.ajc(p,x.a*q)
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
q.$flags&2&&B.E(q)
q[u+s]=x&255}r.f=d},
aZJ(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=o.e,m=D.c.hy(n,d),l=D.c.an(n,d),k=o.an5(l,m),j=o.e,i=d*e,h=d*f,g=o.x
n=o.b
while(!0){x=n.b
if(!(!(x.d>=x.c&&n.a>=64)&&j<h))break
if((l&g)>>>0===0){w=o.Lq(o.Q,o.z,o.y,l,m)
k=o.at[w]}if(n.a>=32)n.BS()
x=k.a
v=x[0].Ah(n)
if(v<256){x=o.CW
x===$&&B.b()
x.$flags&2&&B.E(x)
x[j]=v;++j;++l
if(l>=d){++m
if(D.c.an(m,16)===0)o.a40(m)
l=0}}else if(v<280){u=o.TU(v-256)
t=x[4].Ah(n)
if(n.a>=32)n.BS()
s=o.aqY(d,o.TU(t))
if(j>=s&&i-j>=u)for(x=o.CW,r=0;r<u;++r){x===$&&B.b()
q=j+r
p=x[q-s]
x.$flags&2&&B.E(x)
x[q]=p}else{o.e=j
return!0}j+=u
l+=u
for(;l>=d;){l-=d;++m
if(D.c.an(m,16)===0)o.a40(m)}if(j<h&&(l&g)>>>0!==0){w=o.Lq(o.Q,o.z,o.y,l,m)
k=o.at[w]}}else return!1}o.a40(m)
o.e=j
return!0},
a40(d){var x,w,v,u=this,t=u.f,s=d-t,r=u.CW
r===$&&B.b()
x=A.cY(r,!1,null,u.c.a*t)
if(s>0){w=u.f
t=u.cy
t.toString
r=u.db
r.toString
v=A.cY(t,!1,null,r*w)
u.ax[0].buD(w,w+s,x,v)}u.f=d},
bhM(d){var x,w,v,u,t,s=this,r=s.c,q=r.a,p=s.f,o=d-p
if(o<=0)return
s.ajc(o,q*p)
q=s.cx
q.toString
x=s.f
w=q
v=0
for(;v<o;++v,++x)for(u=0;u<r.a;++u,++w){t=s.ch[w]
q=s.d.a
if(q!=null)q.kp(u,x,t>>>16&255,t>>>8&255,t&255,t>>>24&255)}s.f=d},
ajc(d,e){var x,w,v,u=this,t=u.ax,s=t.length,r=u.c.a,q=u.f,p=q+d,o=u.cx
o.toString
x=u.ch
x.toString
D.by.e3(x,o,o+r*d,x,e)
for(w=e;v=s-1,s>0;w=o,s=v){r=t[v]
x=u.ch
x.toString
r.bD4(q,p,x,w,x,o)}},
bik(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=1
if(g&&l.b.jc(1)!==0){x=l.b.jc(3)+2
w=A.EC(d,x)
v=A.EC(e,x)
u=w*v
t=l.L5(w,v,!1)
l.y=x
for(s=0;s<u;++s){r=t[s]>>>8&65535
t.$flags&2&&B.E(t)
t[s]=r
if(r>=k)k=r+1}}else t=null
q=J.iO(k,y.R)
for(p=0;p<k;++p)q[p]=A.cYz()
for(o=f>0,s=0;s<k;++s)for(n=0;n<5;++n){m=C.aAB[n]
if(n===0&&o)m+=D.c.eo(1,f)
if(!l.bii(m,q[s].a[n]))return!1}l.Q=t
l.as=k
l.at=q
return!0},
bii(d,e){var x,w,v,u,t,s,r,q,p,o=this.b
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
u[1]=x}s=e.btt(u,v,w,d,t)}else{r=new Int32Array(19)
q=o.jc(4)+4
if(q>19)return!1
u=new Int32Array(d)
for(p=0;p<q;++p)r[C.aD4[p]]=o.jc(3)
s=this.bij(r,d,u)
if(s)s=e.axi(u,d)}return s},
bij(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.cCL()
if(!j.axi(d,19))return!1
x=this.b
if(x.jc(1)!==0){w=2+x.jc(2+2*x.jc(3))
if(w>e)return!1}else w=e
for(v=f.$flags|0,u=0,t=8;u<e;w=s){s=w-1
if(w===0)break
if(x.a>=32)x.BS()
r=j.Ah(x)
if(r<16){q=u+1
v&2&&B.E(f)
f[u]=r
if(r!==0)t=r
u=q}else{p=r-16
o=C.awM[p]
n=C.ax6[p]
m=x.jc(o)+n
if(u+m>e)return!1
else{l=r===16?t:0
for(;k=m-1,m>0;m=k,u=q){q=u+1
v&2&&B.E(f)
f[u]=l}}}}return!0},
TU(d){var x
if(d<4)return d+1
x=D.c.S(d-2,1)
return D.c.eo(2+(d&1),x)+this.b.jc(x)+1},
aqY(d,e){var x,w
if(e>120)return e-120
else{x=C.aAS[e-1]
w=(x>>>4)*d+(8-(x&15))
return w>=1?w:1}},
b1w(d,e){var x,w,v,u,t,s,r=D.c.eo(1,D.c.hA(8,e.e)),q=new Uint32Array(r),p=e.d
p.toString
x=J.df(D.by.gaj(p),0,null)
w=J.df(D.by.gaj(q),0,null)
q[0]=e.d[0]
v=4*d
for(p=w.$flags|0,u=4;u<v;++u){t=x[u]
s=w[u-4]
p&2&&B.E(w)
w[u]=t+s&255}for(v=4*r;u<v;++u){p&2&&B.E(w)
w[u]=0}e.d=q
return!0},
Lq(d,e,f,g,h){if(f===0)return 0
d.toString
return d[e*D.c.S(h,f)+D.c.S(g,f)]},
an5(d,e){var x=this,w=x.Lq(x.Q,x.z,x.y,d,e)
return x.at[w]}}
A.arU.prototype={
bzM(d){return this.b1E(d)}}
A.aDC.prototype={
aE9(){var x,w,v=this.a
if(v<32){x=this.c
w=D.c.h1(x[0],v)+((x[1]&C.Ds[v])>>>0)*(C.Ds[32-v]+1)}else{x=this.c
w=v===32?x[1]:D.c.h1(x[1],v-32)}return w},
jc(d){var x,w=this,v=w.b
if(!(v.d>=v.c&&w.a>=64)&&d<25){v=w.aE9()
x=C.Ds[d]
w.a+=d
w.BS()
return(v&x)>>>0}else throw B.n(A.c8("Not enough data in input."))},
BS(){var x,w,v,u=this,t=u.b,s=u.c,r=s.$flags|0,q=t.c
while(!0){if(!(u.a>=8&&t.d<q))break
x=J.v(t.a,t.d++)
w=s[0]
v=s[1]
r&2&&B.E(s)
s[0]=(w>>>8)+(v&255)*16777216
s[1]=v>>>8
s[1]=(s[1]|x*16777216)>>>0
u.a-=8}}}
A.bM7.prototype={}
A.L4.prototype={
J(){return"VP8LImageTransformType."+this.b}}
A.aDD.prototype={
bD4(d,e,f,g,h,i){var x,w,v,u,t=this,s=t.b
switch(t.a.a){case 2:t.bru(h,i,i+(e-d)*s)
break
case 0:t.bII(d,e,h,i)
if(e!==t.c){x=i-s
D.by.e3(h,x,x+s,f,i+(e-d-1)*s)}break
case 1:t.buE(d,e,h,i)
break
case 3:if(g===i&&t.e>0){w=e-d
v=w*A.EC(s,t.e)
u=i+w*s-v
D.by.e3(h,u,u+v,f,i)
t.ayk(d,e,f,u,h,i)}else t.ayk(d,e,f,g,h,i)
break}},
buD(d,e,f,g){var x,w,v,u,t,s,r=this.e,q=D.c.hA(8,r),p=this.b,o=this.d
if(q<8){x=D.c.eo(1,r)-1
w=D.c.eo(1,q)-1
for(v=d;v<e;++v)for(u=0,t=0;t<p;++t){if((t&x)>>>0===0){u=J.v(f.a,f.d);++f.d}r=o[(u&w)>>>0]
J.bW(g.a,g.d,r>>>8&255);++g.d
u=D.c.S(u,q)}}else for(v=d;v<e;++v)for(t=0;t<p;++t){s=J.v(f.a,f.d);++f.d
r=o[s]
J.bW(g.a,g.d,r>>>8&255);++g.d}},
ayk(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=this.e,o=D.c.hA(8,p),n=this.b,m=this.d
if(o<8){x=D.c.eo(1,p)-1
w=D.c.eo(1,o)-1
for(p=h.$flags|0,v=d;v<e;++v)for(u=0,t=0;t<n;++t,i=r){if((t&x)>>>0===0){s=g+1
u=f[g]>>>8&255
g=s}r=i+1
q=m[u&w]
p&2&&B.E(h)
h[i]=q
u=D.c.hA(u,o)}}else for(p=h.$flags|0,v=d;v<e;++v)for(t=0;t<n;++t,i=r,g=s){r=i+1
s=g+1
q=m[f[g]>>>8&255]
p&2&&B.E(h)
h[i]=q}},
buE(a2,a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.b,e=g.e,d=D.c.eo(1,e)-1,a0=A.EC(f,e),a1=D.c.S(a2,g.e)*a0
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
o.$flags&2&&B.E(o)
o[0]=p
p=$.ox()
n=p[0]
o[0]=q
m=p[0]
l=$.aWq()
l.$flags&2&&B.E(l)
l[0]=n*m
k=$.cqx()
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
e&2&&B.E(a4)
a4[s]=(r&4278255360|j<<16|((r&255)+(i>>>5)>>>0)+(h>>>5)>>>0&255)>>>0}a5+=f;++x
if((x&d)>>>0===0)a1+=a0}},
bII(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=this,n=o.b
if(d===0){A.bM8(f,g,4278190080)
for(x=1;x<n;++x){w=g+x
A.bM8(f,w,f[w-1])}g+=n;++d}w=o.e
v=D.c.eo(1,w)-1
u=A.EC(n,w)
t=D.c.S(d,o.e)*u
for(s=d;s<e;){A.bM8(f,g,f[g-n])
r=t+1
q=$.cI7[o.d[t]>>>8&15]
for(x=1;x<n;++x){if((x&v)>>>0===0){p=r+1
q=$.cI7[o.d[r]>>>8&15]
r=p}w=g+x
A.bM8(f,w,q.$3(f,f[w-1],w-n))}g+=n;++s
if((s&v)>>>0===0)t+=u}},
bru(d,e,f){var x,w,v,u
for(x=d.$flags|0;e<f;e=u){w=d[e]
v=w>>>8&255
u=e+1
x&2&&B.E(d)
d[e]=(w&4278255360|(w&16711935)+(v<<16|v)&16711935)>>>0}}}
A.bN0.prototype={
geE(){var x=this,w=x.d
if(w>1||x.e>=4||x.f>1||x.r!==0)return!1
return!0},
NS(d,e,f,g){var x,w,v,u,t,s,r=this
if(!r.geE())return!1
x=C.aJu[r.e]
if(r.d===0){w=r.b
v=e*w
u=r.a
D.D.e3(g,v,f*w,u.a,u.d-u.b+v)}else{w=e+f
u=r.x
u===$&&B.b()
u.cy=g
t=u.c
if(r.y)w=u.aZJ(t.a,t.b,w)
else{s=u.ch
s.toString
u=u.a3C(s,t.a,t.b,w,u.gbzL())
w=u}if(!w)return!1}if(x!=null){w=r.b
x.$6(w,r.c,w,e,f,g)}if(r.f===1)if(!r.b_C(g,r.b,r.c,e,f))return!1
if(e+f===r.c)r.w=!0
return!0},
b_C(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
A.a8p.prototype={
aUC(d,e){var x=this,w=d.ct()
x.r=0
x.f=(w&1)!==0
x.w=d.d-d.b
x.x=e-16}}
A.arV.prototype={}
A.arc.prototype={
a7W(d){var x,w=this
if(d===0)return!1
x=(d<<1>>>0)-1
w.e=x
x=new Int32Array(x<<1>>>0)
w.d=x
x[1]=-1
w.f=1
D.D.m_(w.a,0,128,255)
return!0},
axi(d,e){var x,w,v,u,t,s=this
for(x=0,w=0,v=0;v<e;++v)if(d[v]>0){++x
w=v}if(!s.a7W(x))return!1
if(x===1){if(w<0||w>=e)return!1
return s.a2J(w,0,0)}u=new Int32Array(e)
if(!s.baj(d,e,u))return!1
for(v=0;v<e;++v){t=d[v]
if(t>0)if(!s.a2J(v,u[v],t))return!1}return s.f===s.e},
btt(d,e,f,g,h){var x,w,v,u=this
if(!u.a7W(h))return!1
for(x=0;x<h;++x){w=e[x]
if(w!==-1){v=f[x]
if(v>=g)return u.f===u.e
if(!u.a2J(v,w,d[x]))return u.f===u.e}}return u.f===u.e},
Ah(d){var x,w,v=this,u=d.aE9(),t=d.a,s=u&127,r=v.a[s]
if(r<=7){d.a=t+r
return v.b[s]}x=v.c[s]
t+=7
u=u>>>7
do{w=v.d
w===$&&B.b()
x=x+w[(x<<1>>>0)+1]+(u&1)
u=u>>>1;++t}while(v.aqb(x))
d.a=t
return v.d[x<<1>>>0]},
a2J(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
if(f<=7){x=l.as2(e,f)
for(w=D.c.eW(1,7-f),v=l.b,u=v.$flags|0,t=l.a,s=t.$flags|0,r=0;r<w;++r){q=(x|D.c.eW(r,f))>>>0
u&2&&B.E(v)
v[q]=d
s&2&&B.E(t)
t[q]=f}}else x=l.as2(D.c.o3(e,f-7),7)
for(w=l.c,v=w.$flags|0,p=7,o=0;n=f-1,f>0;f=n){u=l.e
if(o>=u)return!1
t=l.d
t===$&&B.b()
s=(o<<1>>>0)+1
m=t[s]
if(m<0){m=l.f
if(m===u)return!1
t.$flags&2&&B.E(t)
t[s]=m-o
l.f=m+2
t[(m<<1>>>0)+1]=-1
t[(m+1<<1>>>0)+1]=-1}else if(m===0)return!1
o+=t[s]+(D.c.o3(e,n)&1);--p
if(p===0){v&2&&B.E(w)
w[x]=o}}if(l.bdD(o))l.bdE(o,0)
else if(l.aqb(o))return!1
w=l.d
w===$&&B.b()
w.$flags&2&&B.E(w)
w[o<<1>>>0]=d
return!0},
as2(d,e){return D.c.h1((C.UQ[d&15]<<4|C.UQ[D.c.S(d,4)])>>>0,8-e)},
bdE(d,e){var x=this.d
x===$&&B.b()
x.$flags&2&&B.E(x)
x[(d<<1>>>0)+1]=e},
aqb(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]!==0},
bdD(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]<0},
baj(d,e,f){var x,w,v,u,t,s,r,q,p=new Int32Array(16),o=new Int32Array(16)
for(x=0,w=0;x<e;++x){v=d[x]
if(v>w)w=v}if(w>15)return!1
for(x=0;x<e;++x){u=d[x]
p[u]=p[u]+1}p[0]=0
o[0]=-1
for(t=1,s=0;t<=w;++t){s=s+p[t-1]<<1>>>0
o[t]=s}for(u=f.$flags|0,x=0;x<e;++x){r=d[x]
if(r>0){q=o[r]
o[r]=q+1
u&2&&B.E(f)
f[x]=q}else{u&2&&B.E(f)
f[x]=-1}}return!0}}
A.a_L.prototype={
i(d,e){return this.a[e]}}
A.Tw.prototype={
J(){return"WebPFormat."+this.b}}
A.aE5.prototype={}
A.arW.prototype={}
A.bN1.prototype={
I8(d){var x=A.cY(d,!1,null,0)
this.b=x
if(!this.an2(x))return!1
return!0},
oF(d){var x,w=this,v=null,u=A.cY(d,!1,v,0)
w.b=u
if(!w.an2(u))return v
u=new A.arW(C.pO,B.a([],y.J))
w.a=u
x=w.b
x.toString
if(!w.avS(x,u))return v
u=w.a
switch(u.f.a){case 3:u.as=u.z.length
return u
case 2:x=w.b
x.toString
x.d=u.ay
if(!A.cve(x,u).NT())return v
u=w.a
u.as=u.z.length
return u
case 1:x=w.b
x.toString
x.d=u.ay
if(!A.cvc(x,u).NT())return v
u=w.a
u.as=u.z.length
return u
case 0:throw B.n(A.c8("Unknown format for WebP"))}},
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
return t.al5(s.AT(x,w),d)}w=x.f
if(w===C.z8){s.toString
u=s.AT(x.ch,x.ay)
s=t.a
s.toString
return A.cve(u,s).oe(0)}else if(w===C.Hl){s.toString
u=s.AT(x.ch,x.ay)
s=t.a
s.toString
return A.cvc(u,s).oe(0)}return null},
mY(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=null
if(p.oF(e)==null)return o
x=p.a.e
if(!x)return p.kf(0)
for(w=o,v=w,u=0;x=p.a,u<x.as;++u){f=x.z[u]
t=p.kf(u)
if(t==null)continue
t.y=f.e
if(v==null||w==null){x=p.a
s=x.a
x=x.b
r=t.gqh()
q=t.a
q=q==null?o:q.gdt()
if(q==null)q=C.ab
v=A.hV(o,o,q,t.y,C.bt,x,o,0,r,o,C.ab,s,!1)
w=v}else{w=A.BR(w,!1,!1)
x=f.f
x===$&&B.b()
if(x){x=w.a
if(x!=null)x.nB(0,o)}}A.cwH(w,t,C.Am,o,o,f.a,f.b,o,o,o,o)
v.nz(w)}return v},
al5(d,e){var x,w,v,u=null,t=B.a([],y.J),s=new A.arW(C.pO,t)
if(!this.avS(d,s))return u
if(s.f===C.pO)return u
s.as=this.a.as
if(s.e){x=t.length
if(e>=x)return u
w=t[e]
t=w.x
t===$&&B.b()
x=w.w
x===$&&B.b()
return this.al5(d.AT(t,x),e)}else{v=d.AT(s.ch,s.ay)
t=s.f
if(t===C.z8)return A.cve(v,s).oe(0)
else if(t===C.Hl)return A.cvc(v,s).oe(0)}return u},
an2(d){if(d.je(4)!=="RIFF")return!1
d.a3()
if(d.je(4)!=="WEBP")return!1
return!0},
avS(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
for(x=d.c,w=d.b;d.d<x;){v=d.je(4)
u=d.a3()
t=u+1>>>1<<1>>>0
s=d.d
r=s-w
switch(v){case"VP8X":if(!this.b3W(d,e))return!1
break
case"VP8 ":e.ay=r
e.ch=u
e.f=C.Hl
break
case"VP8L":e.ay=r
e.ch=u
e.f=C.z8
break
case"ALPH":e.toString
s=d.a
q=d.e
p=J.a3(s)
o=p.gu(s)
p=p.gu(s)
s=new A.m3(s,0,Math.min(o,p),0,q)
e.at=s
s.d=d.d
d.d+=t
break
case"ANIM":e.f=C.bH8
n=d.a3()
s=new Uint8Array(4)
s[0]=n>>>8&255
s[1]=n>>>16&255
s[2]=n>>>24&255
s[3]=n&255
d.am()
break
case"ANMF":if(!this.b2J(d,e,u))return!1
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
return e.f!==C.pO},
b3W(d,e){var x,w,v,u,t=d.ct()
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
b2J(d,e,f){var x,w=d.rH(),v=d.rH()
d.rH()
x=new A.arV(w*2,v*2,d.rH()+1,d.rH())
x.aUC(d,f)
if(x.r!==0)return!1
e.z.push(x)
return!0}}
A.bi_.prototype={
J(){return"IccProfileCompression."+this.b}}
A.a08.prototype={
buX(){var x,w=this
if(w.b===C.Cb)return w.c
x=C.J4.aAe(w.c,null)
w.c=x
w.b=C.Cb
return x}}
A.aqh.prototype={
J(){return"FrameType."+this.b}}
A.BS.prototype={
gl7(){var x=this.x
return x===$?this.x=B.a([],y.g):x},
aU4(d,e,f,g){var x,w,v,u=this,t=d.gdt(),s=d.gqh(),r=d.a
u.akV(g,e,t,s,r==null?null:r.geU())
t=d.b
if(t!=null)u.b=B.jo(t,y.N,y.I)
t=d.d
if(t!=null){s=y.N
u.d=B.jo(t,s,s)}u.gl7().push(u)
if(!f){x=d.gl7().length
for(t=y.g,w=1;w<x;++w){v=d.x
u.nz(A.aro((v===$?d.x=B.a([],t):v)[w],e,!1,g))}}},
aU3(d,e,f){var x,w,v,u,t=this,s=d.b
if(s!=null)t.b=B.jo(s,y.N,y.I)
s=d.d
if(s!=null){x=y.N
t.d=B.jo(s,x,x)}t.gl7().push(t)
if(!e&&d.gl7().length>1){w=d.gl7().length
for(s=y.g,v=1;v<w;++v){u=d.x
t.nz(A.BR((u===$?d.x=B.a([],s):u)[v],!1,!1))}}},
nz(d){var x=this
if(d==null)d=A.BR(x,!0,!0)
d.z=x.gl7().length
if(D.b.gY(x.gl7())!==d)x.gl7().push(d)
return d},
WV(){return this.nz(null)},
akV(d,e,f,g,h){var x,w,v=this,u=null
switch(f.a){case 0:if(h==null){x=D.d.f8(d*g/8)
w=new A.Pp($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.f8(d/8)
w=new A.Pp($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 1:if(h==null){x=D.d.f8(d*(g<<1>>>0)/8)
w=new A.Pr($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.f8(d/4)
w=new A.Pr($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 2:if(h==null){if(g===2)x=d
else if(g===4)x=d*2
else x=g===3?D.d.f8(d*1.5):D.d.f8(d/2)
w=new A.Pt($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.f8(d/2)
w=new A.Pt($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 3:if(h==null)v.a=A.cD2(d,e,g)
else v.a=new A.Pu(new Uint8Array(d*e),h,d,e,1)
break
case 4:x=d*e
if(h==null)v.a=new A.Pq(new Uint16Array(x*g),u,d,e,g)
else v.a=new A.Pq(new Uint16Array(x),h,d,e,1)
break
case 5:v.a=A.cZ7(d,e,g)
break
case 6:v.a=new A.a0f(new Int8Array(d*e*g),d,e,g)
break
case 7:v.a=new A.a0d(new Int16Array(d*e*g),d,e,g)
break
case 8:v.a=new A.a0e(new Int32Array(d*e*g),d,e,g)
break
case 9:v.a=A.cZ5(d,e,g)
break
case 10:v.a=A.cZ6(d,e,g)
break
case 11:v.a=new A.a0c(new Float64Array(d*e*4*g),d,e,g)
break}},
j(d){var x=this
return"Image("+x.gd0(0)+", "+x.gb5(0)+", "+x.gdt().b+", "+x.gqh()+")"},
gd0(d){var x=this.a
x=x==null?null:x.a
return x==null?0:x},
gb5(d){var x=this.a
x=x==null?null:x.b
return x==null?0:x},
gdt(){var x=this.a
x=x==null?null:x.gdt()
return x==null?C.ab:x},
gwO(){var x=this.e
return x==null?this.e=new A.OI(B.K(y.N,y.P)):x},
aL3(d,e){var x=this,w=x.b;(w==null?x.b=B.K(y.N,y.I):w).m(0,d,e)
if(x.b.a===0)x.b=null},
ga5(d){var x=this.a
return x.ga5(x)},
gaj(d){var x=this.a
x=x==null?null:x.gaj(x)
if(x==null)x=D.D.gaj(new Uint8Array(0))
return x},
gqh(){var x=this.a
x=x==null?null:x.geU()
x=x==null?null:x.b
if(x==null){x=this.a
x=x==null?null:x.c}return x==null?0:x},
grq(){var x=this.a
return(x==null?null:x.geU())!=null},
gmU(){var x=this.a
x=x==null?null:x.gmU()
return x==null?0:x},
aCg(d,e){return d>=0&&e>=0&&d<this.gd0(0)&&e<this.gb5(0)},
o_(d,e,f,g){var x=this.a
x=x==null?null:x.o_(d,e,f,g)
if(x==null)x=new A.y_(new Uint8Array(0))
return x},
ec(d,e,f){var x=this.a
x=x==null?null:x.ec(d,e,f)
return x==null?new A.fk():x},
o0(d,e){return this.ec(d,e,null)},
ko(d,e){if(d<0||d>=this.gd0(0)||e<0||e>=this.gb5(0))return new A.fk()
return this.ec(d,e,null)},
aIV(d,e,f){switch(f.a){case 0:return this.ko(D.d.C(d),D.d.C(e))
case 1:case 3:return this.aIW(d,e)
case 2:return this.aIU(d,e)}},
aIW(d,e){var x,w,v,u,t,s,r=this,q=D.d.C(d),p=q-(d>=0?0:1),o=p+1
q=D.d.C(e)
x=q-(e>=0?0:1)
w=x+1
q=new A.biD(d-p,e-x)
v=r.ko(p,x)
u=w>=r.gb5(0)?v:r.ko(p,w)
t=o>=r.gd0(0)?v:r.ko(o,x)
s=o>=r.gd0(0)||w>=r.gb5(0)?v:r.ko(o,w)
return r.o_(q.$4(v.gaf(v),t.gaf(t),u.gaf(u),s.gaf(s)),q.$4(v.gap(),t.gap(),u.gap(),s.gap()),q.$4(v.gau(v),t.gau(t),u.gau(u),s.gau(s)),q.$4(v.gaE(v),t.gaE(t),u.gaE(u),s.gaE(s)))},
aIU(d0,d1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=D.d.C(d0),c6=c5-(d0>=0?0:1),c7=c6-1,c8=c6+1,c9=c6+2
c5=D.d.C(d1)
x=c5-(d1>=0?0:1)
w=x-1
v=x+1
u=x+2
t=d0-c6
s=d1-x
c5=new A.biC()
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
return c4.o_(D.d.C(c0),D.d.C(c1),D.d.C(c2),D.d.C(c3))},
AK(d,e,f){var x
if(y.c0.b(f))if(f.gfo(f).geU()!=null)if(this.grq()){x=this.a
if(x!=null)x.fg(d,e,f.ge6(f),0,0)
return}x=this.a
if(x!=null)x.kp(d,e,f.gaf(f),f.gap(),f.gau(f),f.gaE(f))},
gck(){var x=this.a
x=x==null?null:x.gck()
return x==null?0:x},
nB(d,e){var x=this.a
return x==null?null:x.nB(0,e)},
W(d){return this.nB(0,null)},
ayD(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
if(a5==null)a5=a3.gdt()
if(a6==null)a6=a3.gqh()
x=C.a3l.i(0,a5)
w=!1
if(a5===a3.gdt())if(a6===a3.gqh()){v=a3.a
w=(v==null?a4:v.geU())==null}if(w)return A.BR(a3,!1,!1)
for(w=a3.gl7(),v=w.length,u=y.N,t=y.p,s=a4,r=0;r<w.length;w.length===v||(0,B.S)(w),++r,s=i){q=w[r]
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
m=new A.a08(l,k,new Uint8Array(m.subarray(0,B.qR(0,a4,m.length))))}l=q.w
k=q.r
j=A.hV(a4,o,a5,q.y,l,p,m,k,a6,a4,C.ab,n,!1)
p=q.d
j.d=p!=null?B.jo(p,u,u):a4
if(s!=null){s.nz(j)
i=s}else i=j
p=j.a
h=p==null?a4:p.geU()
p=j.a
p=p==null?a4:p.geU()
g=p==null?a4:p.gdt()
if(g==null)g=a5
p=q.a
if(h!=null){f=B.K(t,t)
e=p==null?a4:p.ec(0,0,a4)
if(e==null)e=new A.fk()
for(p=j.a,p=p.ga5(p),d=a4,a0=0;p.q();){a1=p.gL(p)
a2=A.cMP(D.d.fv(e.giE()*255),D.d.fv(e.giq()*255),D.d.fv(e.giy()*255),0)
if(f.a7(0,a2)){o=f.i(0,a2)
o.toString
a1.se6(0,o)}else{f.m(0,a2,a0)
a1.se6(0,a0)
d=A.pI(e,x,g,a6,d)
h.ps(a0,d.gaf(d),d.gap(),d.gau(d));++a0}e.q()}}else{e=p==null?a4:p.ec(0,0,a4)
if(e==null)e=new A.fk()
for(p=j.a,p=p.ga5(p);p.q();){A.pI(e,x,a4,a4,p.gL(p))
e.q()}}}s.toString
return s},
od(d){return this.ayD(d,null)},
ayC(d){return this.ayD(null,d)},
brO(d){var x,w,v,u
if(this.d==null){x=y.N
this.d=B.K(x,x)}for(x=new B.ch(d,d.r,d.e,B.t(d).h("ch<1>"));x.q();){w=x.d
v=this.d
v.toString
u=d.i(0,w)
u.toString
v.m(0,w,u)}},
aZk(d,e,f){var x,w=65536
switch(e.a){case 0:return null
case 1:return null
case 2:return null
case 3:x=d===C.cy?w:256
return new A.us(new Uint8Array(x*f),x,f)
case 4:x=d===C.cy?w:256
return new A.aww(new Uint16Array(x*f),x,f)
case 5:x=d===C.cy?w:256
return new A.a2S(new Uint32Array(x*f),x,f)
case 6:x=d===C.cy?w:256
return new A.awv(new Int8Array(x*f),x,f)
case 7:x=d===C.cy?w:256
return new A.awt(new Int16Array(x*f),x,f)
case 8:x=d===C.cy?w:256
return new A.awu(new Int32Array(x*f),x,f)
case 9:x=d===C.cy?w:256
return new A.awq(new Uint16Array(x*f),x,f)
case 10:x=d===C.cy?w:256
return new A.awr(new Float32Array(x*f),x,f)
case 11:x=d===C.cy?w:256
return new A.aws(new Float64Array(x*f),x,f)}}}
A.m2.prototype={
geU(){return null}}
A.Pn.prototype={
qZ(d,e){var x=this,w=x.d
if(e)w=new Uint16Array(w.length)
else w=new Uint16Array(B.bZ(w))
return new A.Pn(w,x.a,x.b,x.c)},
gdt(){return C.iv},
gaj(d){return D.ea.gaj(this.d)},
gmU(){return 16},
grK(){return this.a*this.c*2},
ga5(d){return A.ctz(this)},
qt(d,e,f,g,h){return A.ut(A.ctz(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gck(){return 1},
grv(){return!0},
o_(d,e,f,g){var x=new Uint16Array(4),w=new A.Nn(x)
x[0]=A.h0(d)
x[1]=A.h0(e)
x[2]=A.h0(f)
x[3]=A.h0(g)
x=w
return x},
ec(d,e,f){if(f==null||!(f instanceof A.IG)||f.d!==this)f=A.ctz(this)
f.hn(0,d,e)
return f},
o0(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x=this.c,w=this.d,v=A.h0(f)
w.$flags&2&&B.E(w)
w[e*this.a*x+d*x]=v},
fg(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=A.h0(f)
v.$flags&2&&B.E(v)
v[w]=u
if(x>1){v[w+1]=A.h0(g)
if(x>2)v[w+2]=A.h0(h)}},
kp(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=A.h0(f)
v.$flags&2&&B.E(v)
v[w]=u
if(x>1){v[w+1]=A.h0(g)
if(x>2){v[w+2]=A.h0(h)
if(x>3)v[w+3]=A.h0(i)}}},
j(d){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
nB(d,e){}}
A.Po.prototype={
qZ(d,e){var x=this,w=x.d
if(e)w=new Float32Array(w.length)
else w=new Float32Array(B.bZ(w))
return new A.Po(w,x.a,x.b,x.c)},
gdt(){return C.k2},
gaj(d){return D.fy.gaj(this.d)},
gmU(){return 32},
ga5(d){return A.ctA(this)},
qt(d,e,f,g,h){return A.ut(A.ctA(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gck(){return 1},
grK(){return this.a*this.c*4},
grv(){return!0},
o_(d,e,f,g){var x=new Float32Array(4),w=new A.No(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
ec(d,e,f){if(f==null||!(f instanceof A.IH)||f.d!==this)f=A.ctA(this)
f.hn(0,d,e)
return f},
o0(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x=this.c,w=this.d
w.$flags&2&&B.E(w)
w[e*this.a*x+d*x]=f},
fg(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.E(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
kp(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.E(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
nB(d,e){}}
A.a0c.prototype={
qZ(d,e){var x=this,w=x.d
if(e)w=new Float64Array(w.length)
else w=new Float64Array(B.bZ(w))
return new A.a0c(w,x.a,x.b,x.c)},
gdt(){return C.lG},
gaj(d){return D.eB.gaj(this.d)},
gu(d){return this.d.byteLength},
gmU(){return 64},
ga5(d){return A.ctB(this)},
qt(d,e,f,g,h){return A.ut(A.ctB(this),e,f,g,h)},
gck(){return 1},
grK(){return this.a*this.c*8},
grv(){return!0},
o_(d,e,f,g){var x=new Float64Array(4),w=new A.Np(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
ec(d,e,f){if(f==null||!(f instanceof A.II)||f.d!==this)f=A.ctB(this)
f.hn(0,d,e)
return f},
o0(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x=this.c,w=this.d
w.$flags&2&&B.E(w)
w[e*this.a*x+d*x]=f},
fg(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.E(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
kp(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.E(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
nB(d,e){}}
A.a0d.prototype={
qZ(d,e){var x=this,w=x.d
if(e)w=new Int16Array(w.length)
else w=new Int16Array(B.bZ(w))
return new A.a0d(w,x.a,x.b,x.c)},
gdt(){return C.lI},
gaj(d){return D.kB.gaj(this.d)},
ga5(d){return A.ctC(this)},
qt(d,e,f,g,h){return A.ut(A.ctC(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gck(){return 32767},
grv(){return!0},
gmU(){return 16},
grK(){return this.a*this.c*2},
o_(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Int16Array(4),s=new A.Nq(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ec(d,e,f){if(f==null||!(f instanceof A.IJ)||f.d!==this)f=A.ctC(this)
f.hn(0,d,e)
return f},
o0(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.E(w)
w[e*this.a*x+d*x]=v},
fg(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.E(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
kp(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.E(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
nB(d,e){}}
A.a0e.prototype={
qZ(d,e){var x=this,w=x.d
if(e)w=new Int32Array(w.length)
else w=new Int32Array(B.bZ(w))
return new A.a0e(w,x.a,x.b,x.c)},
gdt(){return C.lJ},
gaj(d){return D.cG.gaj(this.d)},
gmU(){return 32},
grK(){return this.a*this.c*4},
ga5(d){return A.ctD(this)},
qt(d,e,f,g,h){return A.ut(A.ctD(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gck(){return 2147483647},
grv(){return!0},
o_(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Int32Array(4),s=new A.Nr(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ec(d,e,f){if(f==null||!(f instanceof A.IK)||f.d!==this)f=A.ctD(this)
f.hn(0,d,e)
return f},
o0(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.E(w)
w[e*this.a*x+d*x]=v},
fg(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.E(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
kp(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.E(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
nB(d,e){}}
A.a0f.prototype={
qZ(d,e){var x=this,w=x.d
if(e)w=new Int8Array(w.length)
else w=new Int8Array(B.bZ(w))
return new A.a0f(w,x.a,x.b,x.c)},
gdt(){return C.lH},
gaj(d){return D.kC.gaj(this.d)},
grK(){return this.a*this.c},
ga5(d){return A.ctE(this)},
qt(d,e,f,g,h){return A.ut(A.ctE(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gck(){return 127},
grv(){return!0},
gmU(){return 8},
o_(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Int8Array(4),s=new A.Ns(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ec(d,e,f){if(f==null||!(f instanceof A.IL)||f.d!==this)f=A.ctE(this)
f.hn(0,d,e)
return f},
o0(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.E(w)
w[e*(this.a*x)+d*x]=v},
fg(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.E(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
kp(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.E(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
nB(d,e){}}
A.Pp.prototype={
bN7(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.bb()
this.d=x},
qZ(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bZ(v))}x=w.f
x=x==null?null:x.dT(0)
return new A.Pp(v,w.e,x,w.a,w.b,w.c)},
gdt(){return C.fS},
gu(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gck(){var x=this.f
x=x==null?null:x.gck()
return x==null?1:x},
grv(){return!1},
gaj(d){var x=this.d
x===$&&B.b()
return D.D.gaj(x)},
gmU(){return 1},
ga5(d){return A.a37(this)},
qt(d,e,f,g,h){return A.ut(A.a37(this),e,f,g,h)},
o_(d,e,f,g){var x=new A.Nv(4,0)
x.is(D.d.C(d),D.d.C(e),D.d.C(f),D.d.C(g))
return x},
ec(d,e,f){if(f==null||!(f instanceof A.IM)||f.f!==this)f=A.a37(this)
f.hn(0,d,e)
return f},
o0(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a37(w):x).hn(0,d,e)
w.r.kR(0,f)},
fg(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a37(w):x).hn(0,d,e)
w.r.kJ(f,g,h)},
kp(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a37(w):x).hn(0,d,e)
w.r.is(f,g,h,i)},
j(d){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
nB(d,e){},
grK(){return this.e},
geU(){return this.f}}
A.Pq.prototype={
qZ(d,e){var x,w=this,v=w.d
if(e)v=new Uint16Array(v.length)
else v=new Uint16Array(B.bZ(v))
x=w.e
x=x==null?null:x.dT(0)
return new A.Pq(v,x,w.a,w.b,w.c)},
gdt(){return C.cy},
gaj(d){return D.ea.gaj(this.d)},
gmU(){return 16},
gck(){var x=this.e
x=x==null?null:x.gck()
return x==null?65535:x},
grK(){return this.a*this.c*2},
ga5(d){return A.ctF(this)},
qt(d,e,f,g,h){return A.ut(A.ctF(this),e,f,g,h)},
gu(d){return this.d.byteLength},
grv(){return!0},
o_(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Uint16Array(4),s=new A.Nw(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ec(d,e,f){if(f==null||!(f instanceof A.IN)||f.d!==this)f=A.ctF(this)
f.hn(0,d,e)
return f},
o0(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.E(w)
w[e*this.a*x+d*x]=v},
fg(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.E(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
kp(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.E(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
nB(d,e){},
geU(){return this.e}}
A.Pr.prototype={
bN8(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.bb()
this.d=x},
qZ(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bZ(v))}x=w.f
x=x==null?null:x.dT(0)
return new A.Pr(v,w.e,x,w.a,w.b,w.c)},
gdt(){return C.hI},
gmU(){return 2},
gaj(d){var x=this.d
x===$&&B.b()
return D.D.gaj(x)},
ga5(d){return A.a38(this)},
qt(d,e,f,g,h){return A.ut(A.a38(this),e,f,g,h)},
gu(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gck(){var x=this.f
x=x==null?null:x.gck()
return x==null?3:x},
grv(){return!1},
o_(d,e,f,g){var x=new A.Nx(4,0)
x.is(D.d.C(d),D.d.C(e),D.d.C(f),D.d.C(g))
return x},
ec(d,e,f){if(f==null||!(f instanceof A.IO)||f.f!==this)f=A.a38(this)
f.hn(0,d,e)
return f},
o0(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a38(w):x).hn(0,d,e)
w.r.kS(0,f)},
fg(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a38(w):x).hn(0,d,e)
w.r.kJ(f,g,h)},
kp(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a38(w):x).hn(0,d,e)
w.r.is(f,g,h,i)},
j(d){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
nB(d,e){},
grK(){return this.e},
geU(){return this.f}}
A.Ps.prototype={
qZ(d,e){var x=this,w=x.d
if(e)w=new Uint32Array(w.length)
else w=new Uint32Array(B.bZ(w))
return new A.Ps(w,x.a,x.b,x.c)},
gdt(){return C.k3},
gaj(d){return D.by.gaj(this.d)},
grK(){return this.a*this.c*4},
gmU(){return 32},
gck(){return 4294967295},
ga5(d){return A.ctG(this)},
qt(d,e,f,g,h){return A.ut(A.ctG(this),e,f,g,h)},
gu(d){return this.d.byteLength},
grv(){return!0},
o_(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Uint32Array(4),s=new A.Ny(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ec(d,e,f){if(f==null||!(f instanceof A.IP)||f.d!==this)f=A.ctG(this)
f.hn(0,d,e)
return f},
o0(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.E(w)
w[e*this.a*x+d*x]=v},
fg(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.E(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
kp(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.E(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
nB(d,e){}}
A.Pt.prototype={
bN9(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.bb()
this.d=x},
qZ(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bZ(v))}x=w.f
x=x==null?null:x.dT(0)
return new A.Pt(v,w.e,x,w.a,w.b,w.c)},
gdt(){return C.hJ},
gaj(d){var x=this.d
x===$&&B.b()
return D.D.gaj(x)},
ga5(d){return A.a39(this)},
qt(d,e,f,g,h){return A.ut(A.a39(this),e,f,g,h)},
gu(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gck(){var x=this.f
x=x==null?null:x.gck()
return x==null?15:x},
grv(){return!1},
gmU(){return 4},
o_(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new A.Nz(4,new Uint8Array(2))
t.is(x,w,v,u)
x=t
return x},
ec(d,e,f){if(f==null||!(f instanceof A.IQ)||f.e!==this)f=A.a39(this)
f.hn(0,d,e)
return f},
o0(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a39(w):x).hn(0,d,e)
w.r.kT(0,f)},
fg(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a39(w):x).hn(0,d,e)
w.r.kJ(f,g,h)},
kp(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a39(w):x).hn(0,d,e)
w.r.is(f,g,h,i)},
j(d){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
nB(d,e){},
grK(){return this.e},
geU(){return this.f}}
A.Pu.prototype={
qZ(d,e){var x,w=this,v=w.d
if(e)v=new Uint8Array(v.length)
else v=new Uint8Array(B.bZ(v))
x=w.e
x=x==null?null:x.dT(0)
return new A.Pu(v,x,w.a,w.b,w.c)},
gdt(){return C.ab},
gaj(d){return D.D.gaj(this.d)},
grK(){return this.a*this.c},
gmU(){return 8},
ga5(d){return A.bsN(this)},
qt(d,e,f,g,h){return A.ut(A.bsN(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gck(){var x=this.e
x=x==null?null:x.gck()
return x==null?255:x},
grv(){return!1},
o_(d,e,f,g){var x=A.cUG(D.d.C(D.d.b3(d,0,255)),D.d.C(D.d.b3(e,0,255)),D.d.C(D.d.b3(f,0,255)),D.d.C(D.d.b3(g,0,255)))
return x},
ec(d,e,f){if(f==null||!(f instanceof A.IR)||f.d!==this)f=A.bsN(this)
f.hn(0,d,e)
return f},
o0(d,e){return this.ec(d,e,null)},
mG(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.E(w)
w[e*(this.a*x)+d*x]=v},
fg(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.E(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
kp(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.E(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
nB(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=e==null?l:A.pI(e,l,C.ab,l,l),j=m.c
if(j===1){x=k==null?0:D.c.b3(B.be(k.gaf(k)),0,255)
j=m.d
D.D.m_(j,0,j.length,x)}else if(j===2){j=k==null
x=j?0:D.c.b3(B.be(k.gaf(k)),0,255)
w=j?0:D.c.b3(B.be(k.gap()),0,255)
v=J.cqN(D.D.gaj(m.d),0,null)
D.ea.m_(v,0,v.length,(w<<8|x)>>>0)}else if(j===4){j=k==null
x=j?0:D.c.b3(B.be(k.gaf(k)),0,255)
w=j?0:D.c.b3(B.be(k.gap()),0,255)
u=j?0:D.c.b3(B.be(k.gau(k)),0,255)
t=j?0:D.c.b3(B.be(k.gaE(k)),0,255)
s=J.oy(D.D.gaj(m.d),0,null)
D.by.m_(s,0,s.length,(t<<24|u<<16|w<<8|x)>>>0)}else{j=k==null
x=j?0:D.c.b3(B.be(k.gaf(k)),0,255)
w=j?0:D.c.b3(B.be(k.gap()),0,255)
u=j?0:D.c.b3(B.be(k.gau(k)),0,255)
for(r=A.bsN(m),j=r.d,q=j.c>0,j=j.d,p=j.$flags|0;r.q();){if(q){o=r.c
n=D.d.C(D.c.b3(x,0,255))
p&2&&B.E(j)
j[o]=n}r.sap(w)
r.sau(0,u)}}},
geU(){return this.e}}
A.arX.prototype={
J(){return"Interpolation."+this.b}}
A.bsn.prototype={}
A.awq.prototype={
dT(d){return new A.awq(new Uint16Array(B.bZ(this.c)),this.a,this.b)},
gaj(d){return D.ea.gaj(this.c)},
gdt(){return C.iv},
gck(){return 1},
fm(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=A.h0(g)
x.$flags&2&&B.E(x)
x[e*v+f]=w}},
ps(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=A.h0(e)
x.$flags&2&&B.E(x)
x[d]=w
if(v>1){x[d+1]=A.h0(f)
if(v>2)x[d+2]=A.h0(g)}},
nf(d,e,f){var x,w=this.b
if(f<w){w=this.c[e*w+f]
x=$.hU
w=(x!=null?x:A.iJ())[w]}else w=0
return w},
nj(d){var x=this.c[d*this.b],w=$.hU
return(w!=null?w:A.iJ())[x]},
nh(d){var x,w=this.b
if(w<2)return 0
w=this.c[d*w+1]
x=$.hU
return(x!=null?x:A.iJ())[w]},
ng(d){var x,w=this.b
if(w<3)return 0
w=this.c[d*w+2]
x=$.hU
return(x!=null?x:A.iJ())[w]},
oz(d){var x,w=this.b
if(w<4)return 0
w=this.c[d*w+3]
x=$.hU
return(x!=null?x:A.iJ())[w]},
uj(d,e){return this.fm(0,d,0,e)},
uh(d,e){return this.fm(0,d,1,e)},
ug(d,e){return this.fm(0,d,2,e)},
uf(d,e){return this.fm(0,d,3,e)}}
A.awr.prototype={
dT(d){return new A.awr(new Float32Array(B.bZ(this.c)),this.a,this.b)},
gaj(d){return D.fy.gaj(this.c)},
gdt(){return C.k2},
gck(){return 1},
fm(d,e,f,g){var x,w=this.b
if(f<w){x=this.c
x.$flags&2&&B.E(x)
x[e*w+f]=g}},
ps(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x.$flags&2&&B.E(x)
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
nf(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nj(d){return this.c[d*this.b]},
nh(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
ng(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
oz(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uj(d,e){return this.fm(0,d,0,e)},
uh(d,e){return this.fm(0,d,1,e)},
ug(d,e){return this.fm(0,d,2,e)},
uf(d,e){return this.fm(0,d,3,e)}}
A.aws.prototype={
dT(d){return new A.aws(new Float64Array(B.bZ(this.c)),this.a,this.b)},
gaj(d){return D.eB.gaj(this.c)},
gdt(){return C.lG},
gck(){return 1},
fm(d,e,f,g){var x,w=this.b
if(f<w){x=this.c
x.$flags&2&&B.E(x)
x[e*w+f]=g}},
ps(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x.$flags&2&&B.E(x)
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
nf(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nj(d){return this.c[d*this.b]},
nh(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
ng(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
oz(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uj(d,e){return this.fm(0,d,0,e)},
uh(d,e){return this.fm(0,d,1,e)},
ug(d,e){return this.fm(0,d,2,e)},
uf(d,e){return this.fm(0,d,3,e)}}
A.awt.prototype={
dT(d){return new A.awt(new Int16Array(B.bZ(this.c)),this.a,this.b)},
gaj(d){return D.kB.gaj(this.c)},
gdt(){return C.lI},
gck(){return 32767},
fm(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.E(x)
x[e*v+f]=w}},
ps(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.E(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
nf(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nj(d){return this.c[d*this.b]},
nh(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
ng(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
oz(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uj(d,e){return this.fm(0,d,0,e)},
uh(d,e){return this.fm(0,d,1,e)},
ug(d,e){return this.fm(0,d,2,e)},
uf(d,e){return this.fm(0,d,3,e)}}
A.awu.prototype={
dT(d){return new A.awu(new Int32Array(B.bZ(this.c)),this.a,this.b)},
gaj(d){return D.cG.gaj(this.c)},
gdt(){return C.lJ},
gck(){return 2147483647},
fm(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.E(x)
x[e*v+f]=w}},
ps(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.E(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
nf(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nj(d){return this.c[d*this.b]},
nh(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
ng(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
oz(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uj(d,e){return this.fm(0,d,0,e)},
uh(d,e){return this.fm(0,d,1,e)},
ug(d,e){return this.fm(0,d,2,e)},
uf(d,e){return this.fm(0,d,3,e)}}
A.awv.prototype={
dT(d){return new A.awv(new Int8Array(B.bZ(this.c)),this.a,this.b)},
gaj(d){return D.kC.gaj(this.c)},
gdt(){return C.lH},
gck(){return 127},
fm(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.E(x)
x[e*v+f]=w}},
ps(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.E(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
nf(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nj(d){return this.c[d*this.b]},
nh(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
ng(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
oz(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uj(d,e){return this.fm(0,d,0,e)},
uh(d,e){return this.fm(0,d,1,e)},
ug(d,e){return this.fm(0,d,2,e)},
uf(d,e){return this.fm(0,d,3,e)}}
A.aww.prototype={
dT(d){return new A.aww(new Uint16Array(B.bZ(this.c)),this.a,this.b)},
gaj(d){return D.ea.gaj(this.c)},
gdt(){return C.cy},
gck(){return 65535},
fm(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.E(x)
x[e*v+f]=w}},
ps(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.E(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
nf(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nj(d){return this.c[d*this.b]},
nh(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
ng(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
oz(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uj(d,e){return this.fm(0,d,0,e)},
uh(d,e){return this.fm(0,d,1,e)},
ug(d,e){return this.fm(0,d,2,e)},
uf(d,e){return this.fm(0,d,3,e)}}
A.a2S.prototype={
dT(d){return new A.a2S(new Uint32Array(B.bZ(this.c)),this.a,this.b)},
gaj(d){return D.by.gaj(this.c)},
gdt(){return C.k3},
gck(){return 4294967295},
fm(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.E(x)
x[e*v+f]=w}},
ps(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.E(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
nf(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nj(d){return this.c[d*this.b]},
nh(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
ng(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
oz(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uj(d,e){return this.fm(0,d,0,e)},
uh(d,e){return this.fm(0,d,1,e)},
ug(d,e){return this.fm(0,d,2,e)},
uf(d,e){return this.fm(0,d,3,e)}}
A.us.prototype={
dT(d){return A.cEQ(this)},
gaj(d){return D.D.gaj(this.c)},
gdt(){return C.ab},
gck(){return 255},
fm(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.E(x)
x[e*v+f]=w}},
ps(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.E(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
S0(d,e,f,g,h){var x,w,v=this.b
d*=v
x=this.c
w=D.c.C(e)
x.$flags&2&&B.E(x)
x[d]=w
if(v>1){x[d+1]=D.c.C(f)
if(v>2){x[d+2]=D.c.C(g)
if(v>3)x[d+3]=D.c.C(h)}}},
nf(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nj(d){var x
d*=this.b
x=this.c
if(d>=x.length)return 0
return x[d]},
nh(d){var x=this.b
if(x<2)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+1]},
ng(d){var x=this.b
if(x<3)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+2]},
oz(d){var x=this.b
if(x<4)return 255
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+3]},
uj(d,e){return this.fm(0,d,0,e)},
uh(d,e){return this.fm(0,d,1,e)},
ug(d,e){return this.fm(0,d,2,e)},
uf(d,e){return this.fm(0,d,3,e)}}
A.IG.prototype={
dT(d){var x=this
return new A.IG(x.a,x.b,x.c,x.d)},
gdt(){return C.iv},
gu(d){return this.d.c},
geU(){return null},
gck(){return 1},
gne(d){return this.a},
gnZ(d){return this.b},
hn(d,e,f){var x,w,v=this
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
x=$.hU
w=(x!=null?x:A.iJ())[w]}else w=0
return w},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=A.h0(f)
v.$flags&2&&B.E(v)
v[x+e]=w}},
ge6(d){return this.gaf(0)},
se6(d,e){this.saf(0,e)},
gaf(d){var x,w=this.d
if(w.c>0){w=w.d[this.c]
x=$.hU
w=(x!=null?x:A.iJ())[w]}else w=0
return w},
saf(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=A.h0(e)
v.$flags&2&&B.E(v)
v[x]=w}},
gap(){var x,w=this.d
if(w.c>1){w=w.d[this.c+1]
x=$.hU
w=(x!=null?x:A.iJ())[w]}else w=0
return w},
sap(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=A.h0(d)
v.$flags&2&&B.E(v)
v[x+1]=w}},
gau(d){var x,w=this.d
if(w.c>2){w=w.d[this.c+2]
x=$.hU
w=(x!=null?x:A.iJ())[w]}else w=0
return w},
sau(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=A.h0(e)
v.$flags&2&&B.E(v)
v[x+2]=w}},
gaE(d){var x,w=this.d
if(w.c>3){w=w.d[this.c+3]
x=$.hU
w=(x!=null?x:A.iJ())[w]}else w=0
return w},
saE(d,e){var x,w,v,u=this.d
if(u.c>3){x=this.gap()
u=u.d
w=this.c
v=A.h0(x)
u.$flags&2&&B.E(u)
u[w+3]=v}},
giE(){return this.gaf(0)/1},
siE(d){this.saf(0,d)},
giq(){return this.gap()/1},
siq(d){this.sap(d)},
giy(){return this.gau(0)/1},
siy(d){this.sau(0,d)},
gfs(){return this.gaE(0)/1},
sfs(d){this.saE(0,d)},
gjy(){return A.jh(this)},
iJ(d,e){var x=this
if(x.d.c>0){x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saE(0,e.gaE(e))}},
kJ(d,e,f){var x,w,v=this,u=v.d,t=u.c
if(t>0){u=u.d
x=v.c
w=A.h0(d)
u.$flags&2&&B.E(u)
u[x]=w
if(t>1){u[v.c+1]=A.h0(e)
if(t>2)u[v.c+2]=A.h0(f)}}},
is(d,e,f,g){var x,w,v=this,u=v.d,t=u.c
if(t>0){u=u.d
x=v.c
w=A.h0(d)
u.$flags&2&&B.E(u)
u[x]=w
if(t>1){u[v.c+1]=A.h0(e)
if(t>2){u[v.c+2]=A.h0(f)
if(t>3)u[v.c+3]=A.h0(g)}}}},
ga5(d){return new A.hC(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.IG)return B.aJ(B.H(u,!0,B.t(u).h("x.E")))===B.aJ(B.H(e,!0,B.t(e).h("x.E")))
if(y.L.b(e)){x=J.a3(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
od(d){return A.pI(this,null,d,null,null)},
$ibu:1,
$idD:1,
$icU:1,
gfo(d){return this.d}}
A.IH.prototype={
dT(d){var x=this
return new A.IH(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geU(){return null},
gck(){return 1},
gdt(){return C.k2},
gne(d){return this.a},
gnZ(d){return this.b},
hn(d,e,f){var x,w,v=this
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
w.$flags&2&&B.E(w)
w[x+e]=f}},
ge6(d){return this.gaf(0)},
se6(d,e){this.saf(0,e)},
gaf(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saf(d,e){var x,w=this.d
if(w.c>0){w=w.d
x=this.c
w.$flags&2&&B.E(w)
w[x]=e}},
gap(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sap(d){var x,w=this.d
if(w.c>1){w=w.d
x=this.c
w.$flags&2&&B.E(w)
w[x+1]=d}},
gau(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sau(d,e){var x,w=this.d
if(w.c>2){w=w.d
x=this.c
w.$flags&2&&B.E(w)
w[x+2]=e}},
gaE(d){var x=this.d
return x.c>3?x.d[this.c+3]:1},
saE(d,e){var x,w=this.d
if(w.c>3){w=w.d
x=this.c
w.$flags&2&&B.E(w)
w[x+3]=e}},
giE(){return this.gaf(0)/1},
siE(d){this.saf(0,d)},
giq(){return this.gap()/1},
siq(d){this.sap(d)},
giy(){return this.gau(0)/1},
siy(d){this.sau(0,d)},
gfs(){return this.gaE(0)/1},
sfs(d){this.saE(0,d)},
gjy(){return A.jh(this)},
iJ(d,e){var x=this
x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saE(0,e.gaE(e))},
kJ(d,e,f){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.E(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
is(d,e,f,g){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.E(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
ga5(d){return new A.hC(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.IH)return B.aJ(B.H(u,!0,B.t(u).h("x.E")))===B.aJ(B.H(e,!0,B.t(e).h("x.E")))
if(y.L.b(e)){x=J.a3(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
od(d){return A.pI(this,null,d,null,null)},
$ibu:1,
$idD:1,
$icU:1,
gfo(d){return this.d}}
A.II.prototype={
dT(d){var x=this
return new A.II(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geU(){return null},
gck(){return 1},
gdt(){return C.lG},
gne(d){return this.a},
gnZ(d){return this.b},
hn(d,e,f){var x,w,v=this
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
w.$flags&2&&B.E(w)
w[x+e]=f}},
ge6(d){return this.gaf(0)},
se6(d,e){this.saf(0,e)},
gaf(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saf(d,e){var x,w=this.d
if(w.c>0){w=w.d
x=this.c
w.$flags&2&&B.E(w)
w[x]=e}},
gap(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sap(d){var x,w=this.d
if(w.c>1){w=w.d
x=this.c
w.$flags&2&&B.E(w)
w[x+1]=d}},
gau(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sau(d,e){var x,w=this.d
if(w.c>2){w=w.d
x=this.c
w.$flags&2&&B.E(w)
w[x+2]=e}},
gaE(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saE(d,e){var x,w=this.d
if(w.c>3){w=w.d
x=this.c
w.$flags&2&&B.E(w)
w[x+3]=e}},
giE(){return this.gaf(0)/1},
siE(d){this.saf(0,d)},
giq(){return this.gap()/1},
siq(d){this.sap(d)},
giy(){return this.gau(0)/1},
siy(d){this.sau(0,d)},
gfs(){return this.gaE(0)/1},
sfs(d){this.saE(0,d)},
gjy(){return A.jh(this)},
iJ(d,e){var x=this
x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saE(0,e.gaE(e))},
kJ(d,e,f){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.E(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
is(d,e,f,g){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.E(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
ga5(d){return new A.hC(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.II)return B.aJ(B.H(u,!0,B.t(u).h("x.E")))===B.aJ(B.H(e,!0,B.t(e).h("x.E")))
if(y.L.b(e)){x=J.a3(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
od(d){return A.pI(this,null,d,null,null)},
$ibu:1,
$idD:1,
$icU:1,
gfo(d){return this.d}}
A.IJ.prototype={
dT(d){var x=this
return new A.IJ(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geU(){return null},
gck(){return 32767},
gdt(){return C.lI},
gne(d){return this.a},
gnZ(d){return this.b},
hn(d,e,f){var x,w,v=this
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
v.$flags&2&&B.E(v)
v[x+e]=w}},
ge6(d){return this.gaf(0)},
se6(d,e){this.saf(0,e)},
gaf(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saf(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.E(v)
v[x]=w}},
gap(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sap(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.C(d)
v.$flags&2&&B.E(v)
v[x+1]=w}},
gau(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sau(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.E(v)
v[x+2]=w}},
gaE(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saE(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.E(v)
v[x+3]=w}},
giE(){return this.gaf(0)/32767},
siE(d){this.saf(0,d*32767)},
giq(){return this.gap()/32767},
siq(d){this.sap(d*32767)},
giy(){return this.gau(0)/32767},
siy(d){this.sau(0,d*32767)},
gfs(){return this.gaE(0)/32767},
sfs(d){this.saE(0,d*32767)},
gjy(){return A.jh(this)},
iJ(d,e){var x=this
x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saE(0,e.gaE(e))},
kJ(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.E(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
is(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.E(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga5(d){return new A.hC(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.IJ)return B.aJ(B.H(u,!0,B.t(u).h("x.E")))===B.aJ(B.H(e,!0,B.t(e).h("x.E")))
if(y.L.b(e)){x=J.a3(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
od(d){return A.pI(this,null,d,null,null)},
$ibu:1,
$idD:1,
$icU:1,
gfo(d){return this.d}}
A.IK.prototype={
dT(d){var x=this
return new A.IK(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geU(){return null},
gck(){return 2147483647},
gdt(){return C.lJ},
gne(d){return this.a},
gnZ(d){return this.b},
hn(d,e,f){var x,w,v=this
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
v.$flags&2&&B.E(v)
v[x+e]=w}},
ge6(d){return this.gaf(0)},
se6(d,e){this.saf(0,e)},
gaf(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saf(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.E(v)
v[x]=w}},
gap(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sap(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.C(d)
v.$flags&2&&B.E(v)
v[x+1]=w}},
gau(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sau(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.E(v)
v[x+2]=w}},
gaE(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saE(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.E(v)
v[x+3]=w}},
giE(){return this.gaf(0)/2147483647},
siE(d){this.saf(0,d*2147483647)},
giq(){return this.gap()/2147483647},
siq(d){this.sap(d*2147483647)},
giy(){return this.gau(0)/2147483647},
siy(d){this.sau(0,d*2147483647)},
gfs(){return this.gaE(0)/2147483647},
sfs(d){this.saE(0,d*2147483647)},
gjy(){return A.jh(this)},
iJ(d,e){var x=this
x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saE(0,e.gaE(e))},
kJ(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.E(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
is(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.E(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga5(d){return new A.hC(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.IK)return B.aJ(B.H(u,!0,B.t(u).h("x.E")))===B.aJ(B.H(e,!0,B.t(e).h("x.E")))
if(y.L.b(e)){x=J.a3(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
od(d){return A.pI(this,null,d,null,null)},
$ibu:1,
$idD:1,
$icU:1,
gfo(d){return this.d}}
A.IL.prototype={
dT(d){var x=this
return new A.IL(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geU(){return null},
gck(){return 127},
gdt(){return C.lH},
gne(d){return this.a},
gnZ(d){return this.b},
hn(d,e,f){var x,w,v=this
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
v.$flags&2&&B.E(v)
v[x+e]=w}},
ge6(d){return this.gaf(0)},
se6(d,e){this.saf(0,e)},
gaf(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saf(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.E(v)
v[x]=w}},
gap(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sap(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.C(d)
v.$flags&2&&B.E(v)
v[x+1]=w}},
gau(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sau(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.E(v)
v[x+2]=w}},
gaE(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saE(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.E(v)
v[x+3]=w}},
giE(){return this.gaf(0)/127},
siE(d){this.saf(0,d*127)},
giq(){return this.gap()/127},
siq(d){this.sap(d*127)},
giy(){return this.gau(0)/127},
siy(d){this.sau(0,d*127)},
gfs(){return this.gaE(0)/127},
sfs(d){this.saE(0,d*127)},
gjy(){return A.jh(this)},
iJ(d,e){var x=this
x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saE(0,e.gaE(e))},
kJ(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.E(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
is(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.E(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga5(d){return new A.hC(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.IL)return B.aJ(B.H(u,!0,B.t(u).h("x.E")))===B.aJ(B.H(e,!0,B.t(e).h("x.E")))
if(y.L.b(e)){x=J.a3(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
od(d){return A.pI(this,null,d,null,null)},
$ibu:1,
$idD:1,
$icU:1,
gfo(d){return this.d}}
A.awK.prototype={
q(){var x=this,w=x.a
if(w.gne(w)+1>x.d){w.hn(0,x.b,w.gnZ(w)+1)
return w.gnZ(w)<=x.e}return w.q()},
gL(d){return this.a},
$ibu:1}
A.IM.prototype={
dT(d){var x=this
return new A.IM(x.a,x.b,x.c,x.d,x.e,x.f)},
gu(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geU(){return this.f.f},
gck(){return this.f.gck()},
gdt(){return C.fS},
gne(d){return this.a},
gnZ(d){return this.b},
hn(d,e,f){var x,w,v=this
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
a5Y(d,e){var x,w=this.c,v=7-(this.d+e)
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
if(w>=x.length)return 0
return D.c.h1(x[w],v)&1},
pE(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.a5Y(0,d):0
else x=w.nf(0,this.a5Y(0,0),d)
return x},
kR(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=7-(this.d+d)
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.b3(D.d.C(e),0,1)
s=C.aC4[w]
v=D.c.eW(t,w)
r=r.d
r.$flags&2&&B.E(r)
r[x]=(u&s|v)>>>0},
i(d,e){return this.pE(e)},
m(d,e,f){return this.kR(e,f)},
ge6(d){return this.a5Y(0,0)},
se6(d,e){this.kR(0,e)},
gaf(d){return this.pE(0)},
saf(d,e){this.kR(0,e)},
gap(){return this.pE(1)},
sap(d){this.kR(1,d)},
gau(d){return this.pE(2)},
sau(d,e){this.kR(2,e)},
gaE(d){return this.pE(3)},
saE(d,e){this.kR(3,e)},
giE(){return this.pE(0)/this.f.gck()},
siE(d){this.kR(0,d*this.f.gck())},
giq(){return this.pE(1)/this.f.gck()},
siq(d){this.kR(1,d*this.f.gck())},
giy(){return this.pE(2)/this.f.gck()},
siy(d){this.kR(2,d*this.f.gck())},
gfs(){return this.pE(3)/this.f.gck()},
sfs(d){this.kR(3,d*this.f.gck())},
gjy(){return A.jh(this)},
iJ(d,e){var x=this
x.kR(0,e.gaf(e))
x.kR(1,e.gap())
x.kR(2,e.gau(e))
x.kR(3,e.gaE(e))},
kJ(d,e,f){var x=this,w=x.f.c
if(w>0){x.kR(0,d)
if(w>1){x.kR(1,e)
if(w>2)x.kR(2,f)}}},
is(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.kR(0,d)
if(w>1){x.kR(1,e)
if(w>2){x.kR(2,f)
if(w>3)x.kR(3,g)}}}},
ga5(d){return new A.hC(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.IM)return B.aJ(B.H(u,!0,B.t(u).h("x.E")))===B.aJ(B.H(e,!0,B.t(e).h("x.E")))
if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a3(e)
if(x.gu(e)!==v)return!1
if(u.pE(0)!==x.i(e,0))return!1
if(v>1){if(u.pE(1)!==x.i(e,1))return!1
if(v>2){if(u.pE(2)!==x.i(e,2))return!1
if(v>3)if(u.pE(3)!==x.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
od(d){return A.pI(this,null,d,null,null)},
$ibu:1,
$idD:1,
$icU:1,
gfo(d){return this.f}}
A.IN.prototype={
dT(d){var x=this
return new A.IN(x.a,x.b,x.c,x.d)},
gu(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
geU(){return this.d.e},
gck(){return this.d.gck()},
gdt(){return C.cy},
gne(d){return this.a},
gnZ(d){return this.b},
hn(d,e,f){var x,w,v=this
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
if(w!=null)x=w.nf(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
i(d,e){return this.hY(0,e)},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.d.C(f)
v.$flags&2&&B.E(v)
v[x+e]=w}},
ge6(d){return this.gaf(0)},
se6(d,e){this.saf(0,e)},
gaf(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.nj(x.d[this.c])
return x},
saf(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.E(v)
v[x]=w}},
gap(){var x=this.d,w=x.e
if(w==null)x=x.c>1?x.d[this.c+1]:0
else x=w.nh(x.d[this.c])
return x},
sap(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.C(d)
v.$flags&2&&B.E(v)
v[x+1]=w}},
gau(d){var x=this.d,w=x.e
if(w==null)x=x.c>2?x.d[this.c+2]:0
else x=w.ng(x.d[this.c])
return x},
sau(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.E(v)
v[x+2]=w}},
gaE(d){var x=this.d,w=x.e
if(w==null)x=x.c>3?x.d[this.c+3]:0
else x=w.oz(x.d[this.c])
return x},
saE(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.E(v)
v[x+3]=w}},
giE(){return this.gaf(0)/this.d.gck()},
siE(d){this.saf(0,d*this.d.gck())},
giq(){return this.gap()/this.d.gck()},
siq(d){this.sap(d*this.d.gck())},
giy(){return this.gau(0)/this.d.gck()},
siy(d){this.sau(0,d*this.d.gck())},
gfs(){return this.gaE(0)/this.d.gck()},
sfs(d){this.saE(0,d*this.d.gck())},
gjy(){return A.jh(this)},
iJ(d,e){var x=this
x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saE(0,e.gaE(e))},
kJ(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.E(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
is(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.E(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga5(d){return new A.hC(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.IN)return B.aJ(B.H(u,!0,B.t(u).h("x.E")))===B.aJ(B.H(e,!0,B.t(e).h("x.E")))
if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a3(e)
if(x.gu(e)!==v)return!1
if(u.hY(0,0)!==x.i(e,0))return!1
if(v>1){if(u.hY(0,1)!==x.i(e,1))return!1
if(v>2){if(u.hY(0,2)!==x.i(e,2))return!1
if(v>3)if(u.hY(0,3)!==x.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
od(d){return A.pI(this,null,d,null,null)},
$ibu:1,
$idD:1,
$icU:1,
gfo(d){return this.d}}
A.IO.prototype={
dT(d){var x=this
return new A.IO(x.a,x.b,x.c,x.d,x.e,x.f)},
gu(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geU(){return this.f.f},
gck(){return this.f.gck()},
gdt(){return C.hI},
gax2(){var x=this.f
return x.f!=null?2:x.c<<1>>>0},
gne(d){return this.a},
gnZ(d){return this.b},
hn(d,e,f){var x,w,v,u=this
u.a=e
u.b=f
x=u.gax2()
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
if(x>7){v.d=0;++v.c}}else{w=v.gax2()
x=v.a*w
v.d=x&7
v.c=v.e+D.c.S(x,3)}x=v.c
u=u.d
u===$&&B.b()
return x<u.length},
a5Z(d,e){var x,w=this.c,v=6-(this.d+(e<<1>>>0))
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
return D.c.h1(x[w],v)&3},
pF(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.a5Z(0,d):0
else x=w.nf(0,this.a5Z(0,0),d)
return x},
kS(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=6-(this.d+(d<<1>>>0))
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.b3(D.d.C(e),0,3)
s=C.awy[D.c.S(w,1)]
v=D.c.eW(t,w)
r=r.d
r.$flags&2&&B.E(r)
r[x]=(u&s|v)>>>0},
i(d,e){return this.pF(e)},
m(d,e,f){return this.kS(e,f)},
ge6(d){return this.a5Z(0,0)},
se6(d,e){this.kS(0,e)},
gaf(d){return this.pF(0)},
saf(d,e){this.kS(0,e)},
gap(){return this.pF(1)},
sap(d){this.kS(1,d)},
gau(d){return this.pF(2)},
sau(d,e){this.kS(2,e)},
gaE(d){return this.pF(3)},
saE(d,e){this.kS(3,e)},
giE(){return this.pF(0)/this.f.gck()},
siE(d){this.kS(0,d*this.f.gck())},
giq(){return this.pF(1)/this.f.gck()},
siq(d){this.kS(1,d*this.f.gck())},
giy(){return this.pF(2)/this.f.gck()},
siy(d){this.kS(2,d*this.f.gck())},
gfs(){return this.pF(3)/this.f.gck()},
sfs(d){this.kS(3,d*this.f.gck())},
gjy(){return A.jh(this)},
iJ(d,e){var x=this
x.kS(0,e.gaf(e))
x.kS(1,e.gap())
x.kS(2,e.gau(e))
x.kS(3,e.gaE(e))},
kJ(d,e,f){var x=this,w=x.f.c
if(w>0){x.kS(0,d)
if(w>1){x.kS(1,e)
if(w>2)x.kS(2,f)}}},
is(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.kS(0,d)
if(w>1){x.kS(1,e)
if(w>2){x.kS(2,f)
if(w>3)x.kS(3,g)}}}},
ga5(d){return new A.hC(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.IO)return B.aJ(B.H(u,!0,B.t(u).h("x.E")))===B.aJ(B.H(e,!0,B.t(e).h("x.E")))
if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a3(e)
if(x.gu(e)!==v)return!1
if(u.pF(0)!==x.i(e,0))return!1
if(v>1){if(u.pF(1)!==x.i(e,1))return!1
if(v>2){if(u.pF(2)!==x.i(e,2))return!1
if(v>3)if(u.pF(3)!==x.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
od(d){return A.pI(this,null,d,null,null)},
$ibu:1,
$idD:1,
$icU:1,
gfo(d){return this.f}}
A.IP.prototype={
dT(d){var x=this
return new A.IP(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geU(){return null},
gck(){return 4294967295},
gdt(){return C.k3},
gne(d){return this.a},
gnZ(d){return this.b},
hn(d,e,f){var x,w,v=this
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
v.$flags&2&&B.E(v)
v[x+e]=w}},
ge6(d){return this.gaf(0)},
se6(d,e){this.saf(0,e)},
gaf(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saf(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.E(v)
v[x]=w}},
gap(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sap(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.C(d)
v.$flags&2&&B.E(v)
v[x+1]=w}},
gau(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sau(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.E(v)
v[x+2]=w}},
gaE(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saE(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.E(v)
v[x+3]=w}},
giE(){return this.gaf(0)/4294967295},
siE(d){this.saf(0,d*4294967295)},
giq(){return this.gap()/4294967295},
siq(d){this.sap(d*4294967295)},
giy(){return this.gau(0)/4294967295},
siy(d){this.sau(0,d*4294967295)},
gfs(){return this.gaE(0)/4294967295},
sfs(d){this.saE(0,d*4294967295)},
gjy(){return A.jh(this)},
iJ(d,e){var x=this
x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saE(0,e.gaE(e))},
kJ(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.E(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
is(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.E(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga5(d){return new A.hC(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.IP)return B.aJ(B.H(u,!0,B.t(u).h("x.E")))===B.aJ(B.H(e,!0,B.t(e).h("x.E")))
if(y.L.b(e)){x=J.a3(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
od(d){return A.pI(this,null,d,null,null)},
$ibu:1,
$idD:1,
$icU:1,
gfo(d){return this.d}}
A.IQ.prototype={
dT(d){var x=this
return new A.IQ(x.a,x.b,x.c,x.d,x.e)},
gu(d){var x=this.e,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geU(){return this.e.f},
gck(){return this.e.gck()},
gdt(){return C.hJ},
gne(d){return this.a},
gnZ(d){return this.b},
hn(d,e,f){var x,w,v,u=this
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
a6_(d,e){var x,w=this.c,v=4-(this.d+(e<<2>>>0))
if(v<0){v+=8;++w}x=this.e.d
x===$&&B.b()
return D.c.h1(x[w],v)&15},
pC(d){var x=this.e,w=x.f
if(w==null)x=x.c>d?this.a6_(0,d):0
else x=w.nf(0,this.a6_(0,0),d)
return x},
kT(d,e){var x,w,v,u,t,s,r=this.e
if(d>=r.c)return
x=this.c
w=4-(this.d+(d<<2>>>0))
if(w<0){w+=8;++x}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.b3(D.d.C(e),0,15)
s=w===4?15:240
v=D.c.eW(t,w)
r=r.d
r.$flags&2&&B.E(r)
r[x]=(u&s|v)>>>0},
i(d,e){return this.pC(e)},
m(d,e,f){return this.kT(e,f)},
ge6(d){return this.a6_(0,0)},
se6(d,e){this.kT(0,e)},
gaf(d){return this.pC(0)},
saf(d,e){this.kT(0,e)},
gap(){return this.pC(1)},
sap(d){this.kT(1,d)},
gau(d){return this.pC(2)},
sau(d,e){this.kT(2,e)},
gaE(d){return this.pC(3)},
saE(d,e){this.kT(3,e)},
giE(){return this.pC(0)/this.e.gck()},
siE(d){this.kT(0,d*this.e.gck())},
giq(){return this.pC(1)/this.e.gck()},
siq(d){this.kT(1,d*this.e.gck())},
giy(){return this.pC(2)/this.e.gck()},
siy(d){this.kT(2,d*this.e.gck())},
gfs(){return this.pC(3)/this.e.gck()},
sfs(d){this.kT(3,d*this.e.gck())},
gjy(){return A.jh(this)},
iJ(d,e){var x=this
x.kT(0,e.gaf(e))
x.kT(1,e.gap())
x.kT(2,e.gau(e))
x.kT(3,e.gaE(e))},
kJ(d,e,f){var x=this,w=x.e.c
if(w>0){x.kT(0,d)
if(w>1){x.kT(1,e)
if(w>2)x.kT(2,f)}}},
is(d,e,f,g){var x=this,w=x.e.c
if(w>0){x.kT(0,d)
if(w>1){x.kT(1,e)
if(w>2){x.kT(2,f)
if(w>3)x.kT(3,g)}}}},
ga5(d){return new A.hC(this)},
k(d,e){var x,w,v=this
if(e==null)return!1
if(e instanceof A.IQ)return B.aJ(B.H(v,!0,B.t(v).h("x.E")))===B.aJ(B.H(e,!0,B.t(e).h("x.E")))
if(y.L.b(e)){x=v.e.c
w=J.a3(e)
if(w.gu(e)!==x)return!1
if(v.pC(0)!==w.i(e,0))return!1
if(x>1){if(v.pC(1)!==w.i(e,1))return!1
if(x>2){if(v.pC(2)!==w.i(e,2))return!1
if(x>3)if(v.pC(3)!==w.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
od(d){return A.pI(this,null,d,null,null)},
$ibu:1,
$idD:1,
$icU:1,
gfo(d){return this.e}}
A.IR.prototype={
dT(d){var x=this
return new A.IR(x.a,x.b,x.c,x.d)},
gu(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
geU(){return this.d.e},
gck(){return this.d.gck()},
gdt(){return C.ab},
gne(d){return this.a},
gnZ(d){return this.b},
hn(d,e,f){var x,w,v=this
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
if(w!=null)x=w.nf(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
i(d,e){return this.hY(0,e)},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.d.C(D.d.b3(f,0,255))
v.$flags&2&&B.E(v)
v[x+e]=w}},
ge6(d){return this.d.d[this.c]},
se6(d,e){var x=this.d.d,w=this.c,v=D.d.C(D.d.b3(e,0,255))
x.$flags&2&&B.E(x)
x[w]=v},
gaf(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.nj(x.d[this.c])
return x},
saf(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(D.d.b3(e,0,255))
v.$flags&2&&B.E(v)
v[x]=w}},
gap(){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>1?w.d[x.c+1]:0}else w=v.nh(w.d[x.c])
return w},
sap(d){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.d.C(D.d.b3(d,0,255))
w.$flags&2&&B.E(w)
w[v]=x}else if(v>1){w=w.d
v=this.c
x=D.d.C(D.d.b3(d,0,255))
w.$flags&2&&B.E(w)
w[v+1]=x}},
gau(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>2?w.d[x.c+2]:0}else w=v.ng(w.d[x.c])
return w},
sau(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.d.C(D.d.b3(e,0,255))
w.$flags&2&&B.E(w)
w[v]=x}else if(v>2){w=w.d
v=this.c
x=D.d.C(D.d.b3(e,0,255))
w.$flags&2&&B.E(w)
w[v+2]=x}},
gaE(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c+1]
else w=v>3?w.d[x.c+3]:255}else w=v.oz(w.d[x.c])
return w},
saE(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.d.C(D.d.b3(e,0,255))
w.$flags&2&&B.E(w)
w[v+1]=x}else if(v>3){w=w.d
v=this.c
x=D.d.C(D.d.b3(e,0,255))
w.$flags&2&&B.E(w)
w[v+3]=x}},
giE(){return this.gaf(0)/this.d.gck()},
siE(d){this.saf(0,d*this.d.gck())},
giq(){return this.gap()/this.d.gck()},
siq(d){this.sap(d*this.d.gck())},
giy(){return this.gau(0)/this.d.gck()},
siy(d){this.sau(0,d*this.d.gck())},
gfs(){return this.gaE(0)/this.d.gck()},
sfs(d){this.saE(0,d*this.d.gck())},
gjy(){return this.d.c===2?this.gaf(0):A.jh(this)},
iJ(d,e){var x=this
if(x.d.e!=null)x.se6(0,e.ge6(e))
else{x.saf(0,e.gaf(e))
x.sap(e.gap())
x.sau(0,e.gau(e))
x.saE(0,e.gaE(e))}},
kJ(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.E(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
is(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.E(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga5(d){return new A.hC(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.IR)return B.aJ(B.H(u,!0,B.t(u).h("x.E")))===B.aJ(B.H(e,!0,B.t(e).h("x.E")))
if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a3(e)
if(x.gu(e)!==v)return!1
if(u.hY(0,0)!==x.i(e,0))return!1
if(v>1){if(u.hY(0,1)!==x.i(e,1))return!1
if(v>2){if(u.hY(0,2)!==x.i(e,2))return!1
if(v>3)if(u.hY(0,3)!==x.i(e,3))return!1}}return!0}return!1},
gA(d){return B.aJ(B.H(this,!0,B.t(this).h("x.E")))},
od(d){return A.pI(this,null,d,null,null)},
$ibu:1,
$idD:1,
$icU:1,
gfo(d){return this.d}}
A.fk.prototype={
dT(d){return new A.fk()},
gfo(d){return $.cOJ()},
gne(d){return 0},
gnZ(d){return 0},
gu(d){return 0},
gck(){return 0},
gdt(){return C.ab},
geU(){return null},
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
giE(){return 0},
siE(d){},
giq(){return 0},
siq(d){},
giy(){return 0},
siy(d){},
gfs(){return 0},
sfs(d){},
gjy(){return 0},
iJ(d,e){},
kJ(d,e,f){},
is(d,e,f,g){},
hn(d,e,f){},
gL(d){return this},
q(){return!1},
k(d,e){if(e==null)return!1
return e instanceof A.fk},
gA(d){return 0},
ga5(d){return new A.hC(this)},
od(d){return this},
$ibu:1,
$idD:1,
$icU:1}
A.bcK.prototype={
J(){return"FlipDirection."+this.b}}
A.aru.prototype={
j(d){return"ImageException: "+this.a},
$ib7:1}
A.m3.prototype={
gu(d){return this.c-this.d},
i(d,e){return J.v(this.a,this.d+e)},
m(d,e,f){J.bW(this.a,this.d+e,f)
return f},
rC(d,e,f,g){var x=this.a,w=J.cZ(x),v=this.d+d
if(f instanceof A.m3)w.e3(x,v,v+e,f.a,f.d+g)
else w.e3(x,v,v+e,y.L.a(f),g)},
A0(d,e,f){return this.rC(d,e,f,0)},
bFf(d,e,f){var x=this.a,w=this.d+d
J.tw(x,w,w+e,f)},
a23(d,e,f){var x=this,w=f!=null?x.b+f:x.d
return A.cY(x.a,x.e,d,w+e)},
ji(d){return this.a23(d,0,null)},
AT(d,e){return this.a23(d,0,e)},
St(d,e){return this.a23(d,e,null)},
dP(d,e){var x=this.d,w=x+(this.c-x)
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
if(t===0)return B.eV(x,0,null)
x.push(t)}throw B.n(A.c8("EOF reached without finding string terminator (length: "+B.q(d)+")"))}return B.eV(s.jd(d).hL(),0,null)},
Qg(){return this.je(null)},
aEP(d){var x,w,v,u,t=this,s=B.a([],y.t)
for(x=t.c;w=t.d,w<x;){v=t.a
t.d=w+1
u=J.v(v,w)
s.push(u)
if(u===10||s.length>=d)return B.eV(s,0,null)}return B.eV(s,0,null)},
bJU(){return this.aEP(256)},
bJV(){var x,w,v,u,t=this,s=B.a([],y.t)
for(x=t.c;w=t.d,w<x;){v=t.a
t.d=w+1
u=J.v(v,w)
if(u===0)return new B.Fh(!0).F2(s,0,null,!0)
s.push(u)}return D.ax.Cn(0,s,!0)},
am(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255
if(x.e)return w<<8|v
return v<<8|w},
rH(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255
if(x.e)return u|v<<8|w<<16
return w|v<<8|u<<16},
a3(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255,t=J.v(x.a,x.d++)&255
if(x.e)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
a_T(){return A.dkD(this.adI())},
adI(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255,t=J.v(x.a,x.d++)&255,s=J.v(x.a,x.d++)&255,r=J.v(x.a,x.d++)&255,q=J.v(x.a,x.d++)&255,p=J.v(x.a,x.d++)&255
if(x.e)return(D.c.eo(w,56)|D.c.eo(v,48)|D.c.eo(u,40)|D.c.eo(t,32)|s<<24|r<<16|q<<8|p)>>>0
return(D.c.eo(p,56)|D.c.eo(q,48)|D.c.eo(r,40)|D.c.eo(s,32)|t<<24|u<<16|v<<8|w)>>>0},
Jh(d,e,f){var x,w=this,v=w.a
if(y.D.b(v))return w.aFY(e,f)
x=w.b+w.d+e
return J.cqY(v,x,f<=0?w.c:x+f)},
eM(d){return this.Jh(0,0,0)},
aFY(d,e){var x,w=this,v=e==null?w.c-w.d-d:e,u=w.a
if(y.D.b(u))return J.df(D.D.gaj(u),u.byteOffset+w.d+d,v)
x=w.d+d
x=J.cqY(u,x,x+v)
return new Uint8Array(B.bZ(x))},
hL(){return this.aFY(0,null)},
QC(){var x=this.a
if(y.D.b(x))return J.oy(D.D.gaj(x),x.byteOffset+this.d,null)
return J.oy(D.D.gaj(this.hL()),0,null)}}
A.bqL.prototype={
brw(d){var x=this
x.apk(d)
x.amq()
x.ap1()
x.akS()},
bdw(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.c=Math.max(d,4)
n.f=m-n.d
n.r=m-1
x=D.d.b2(m,8)
n.w=x
n.x=x*256
n.Q=new A.a2S(new Uint32Array(1024),256,4)
n.a=new A.us(new Uint8Array(768),256,3)
n.d=3
n.e=2
x=D.d.S(m,3)
n.y=new Int32Array(x)
x=y.cb
n.z=B.bP(m*3,0,!1,x)
n.at=B.bP(n.c,0,!1,x)
x=n.ax=B.bP(n.c,0,!1,x)
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
akS(){var x,w,v,u,t,s
for(x=0;x<this.c;++x){w=this.a
w===$&&B.b()
v=this.Q
v===$&&B.b()
u=v.b
t=2<u?v.c[x*u+2]:0
s=1<u?v.c[x*u+1]:0
v=0<u?v.c[x*u]:0
w.ps(x,Math.abs(t),Math.abs(s),Math.abs(v))}},
bbi(d,e,f){var x,w,v,u=this.as[e],t=u-1,s=this.c,r=this.Q,q=1000,p=-1
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
amq(){var x,w,v,u,t,s,r,q=this
for(x=0,w=0;x<q.c;++x){for(v=0;v<3;++v,++w){u=q.z
u===$&&B.b()
t=D.c.b3(D.d.C(0.5+u[w]),0,255)
u=q.Q
u===$&&B.b()
s=u.b
if(v<s){u=u.c
r=D.c.C(t)
u.$flags&2&&B.E(u)
u[x*s+v]=r}}u=q.Q
u===$&&B.b()
s=u.b
if(3<s){u=u.c
r=D.c.C(x)
u.$flags&2&&B.E(u)
u[x*s+3]=r}}},
ap1(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
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
i.$flags&2&&B.E(i)
i[l*q]=j}if(k){k=w.c
j=D.c.C(m)
k.$flags&2&&B.E(k)
k[r*q]=j}m=p?w.c[l*q+1]:0
k=p?w.c[r*q+1]:0
if(p){j=w.c
k=D.c.C(k)
j.$flags&2&&B.E(j)
j[l*q+1]=k}if(p){p=w.c
k=D.c.C(m)
p.$flags&2&&B.E(p)
p[r*q+1]=k}p=2<q
m=p?w.c[l*q+2]:0
k=p?w.c[r*q+2]:0
if(p){j=w.c
k=D.c.C(k)
j.$flags&2&&B.E(j)
j[l*q+2]=k}if(p){p=w.c
k=D.c.C(m)
p.$flags&2&&B.E(p)
p[r*q+2]=k}p=3<q
m=p?w.c[l*q+3]:0
k=p?w.c[r*q+3]:0
if(p){j=w.c
k=D.c.C(k)
j.$flags&2&&B.E(j)
j[l*q+3]=k}if(p){p=w.c
k=D.c.C(m)
p.$flags&2&&B.E(p)
p[r*q+3]=k}}if(o!==t){u&2&&B.E(v)
v[t]=s+r>>>1
for(m=t+1;m<o;++m)v[m]=r
s=r
t=o}}x=h.r
x.toString
w=D.c.S(s+x,1)
u&2&&B.E(v)
v[t]=w
for(n=t+1;n<256;++n)v[n]=x},
av9(d,e){var x,w,v,u
for(x=this.y,w=d*d,v=0;v<d;++v){x===$&&B.b()
u=D.d.C(e*((w-v*v)*256/w))
x.$flags&2&&B.E(x)
x[v]=u}},
apk(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.x
a2===$&&B.b()
x=30+D.c.b2(a1.b-1,3)
w=a3.gd0(0)*a3.gb5(0)
v=D.c.hy(w,a1.b)
u=Math.max(D.c.b2(v,100),1)
if(u===0)u=1
t=D.c.S(a2,8)
if(t<=1)t=0
a1.av9(t,1024)
if(w<1509)s=a1.b=1
else if(D.c.an(w,499)!==0)s=499
else if(D.c.an(w,491)!==0)s=491
else s=D.c.an(w,487)!==0?487:503
r=a3.gd0(0)
q=a3.gb5(0)
for(p=a2,o=1024,n=0,m=0,l=0,k=0;k<v;){a2=a3.a
j=a2==null?null:a2.ec(m,l,null)
if(j==null)j=new A.fk()
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
a2[f+2]=i}e=a1.bmQ(g,h,i)
if(e<0)e=a1.aYN(g,h,i)
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
if(t>0)a1.aVH(d,t,e,g,h,i)}n+=s
m+=s
for(;m>r;){m-=r;++l}for(;n>=w;){n-=w
l-=q}++k
if(D.c.an(k,u)===0){o-=D.c.hy(o,x)
p-=D.c.b2(p,30)
t=D.c.S(p,8)
if(t<=1)t=0
a1.av9(t,o)}}},
aVH(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=f-e,j=l.d-1
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
aYN(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=1e30
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
bmQ(d,e,f){var x,w,v,u,t,s
for(x=this.d,w=this.z,v=0,u=0;v<x;++v){w===$&&B.b()
t=u+1
s=!1
if(w[u]===d){u=t+1
if(w[t]===e){t=u+1
s=w[u]===f
u=t}}else u=t
if(s)return v}return-1}}
A.awb.prototype={
b1(d){var x,w,v=this
if(v.a===v.c.length)v.b1v()
x=v.c
w=v.a++
x.$flags&2&&B.E(x)
x[w]=d&255},
m7(d){var x,w,v,u,t=this,s=J.bB(d)
for(;x=t.a,w=x+s,v=t.c,u=v.length,w>u;)t.ama(w-u)
D.D.hZ(v,x,w,d)
t.a+=s},
le(d){var x=this
if(x.b){x.b1(D.c.S(d,8)&255)
x.b1(d&255)
return}x.b1(d&255)
x.b1(D.c.S(d,8)&255)},
j_(d){var x=this
if(x.b){x.b1(D.c.S(d,24)&255)
x.b1(D.c.S(d,16)&255)
x.b1(D.c.S(d,8)&255)
x.b1(d&255)
return}x.b1(d&255)
x.b1(D.c.S(d,8)&255)
x.b1(D.c.S(d,16)&255)
x.b1(D.c.S(d,24)&255)},
bMV(d){var x,w=this,v=new Float32Array(1)
v[0]=d
x=J.df(D.fy.gaj(v),0,null)
if(w.b){w.b1(x[3])
w.b1(x[2])
w.b1(x[1])
w.b1(x[0])
return}w.b1(x[0])
w.b1(x[1])
w.b1(x[2])
w.b1(x[3])},
bMW(d){var x,w=this,v=new Float64Array(1)
v[0]=d
x=J.df(D.eB.gaj(v),0,null)
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
ama(d){var x,w,v,u
if(d!=null)x=d
else{w=this.c.length
x=w===0?8192:w*2}w=this.c
v=w.length
u=new Uint8Array(v+x)
D.D.hZ(u,0,v,w)
this.c=u},
b1v(){return this.ama(null)},
gu(d){return this.a}}
A.bup.prototype={
aIy(d){var x,w,v,u,t,s,r=d.gd0(0),q=d.gb5(0),p=this.a
p===$&&B.b()
x=A.hV(null,null,C.ab,0,C.bt,q,null,0,1,p,C.ab,r,!1)
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
u.m(0,0,this.bbi(D.d.C(v.gau(v)),s,t))
w.q()}return x}}
A.nY.prototype={
C(d){var x=this.b
return x===0?0:D.c.hy(this.a,x)},
u1(d){var x=this.b
return x===0?0:this.a/x},
k(d,e){if(e==null)return!1
return e instanceof A.nY&&this.a===e.a&&this.b===e.b},
gA(d){return B.af(this.a,this.b,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
j(d){return""+this.a+"/"+this.b}}
A.bx_.prototype={
J(){return"RequestImageFormat."+this.b}}
A.bIE.prototype={}
var z=a.updateTypes(["~(m3)","f(qL,f,f)","f([f])","~(Cb,C<f>)","~(f,f,f,f,f,dJ)","~(h,q5)","~(f)","~(f,k5)","Cb(f)"])
A.bil.prototype={
$0(){return A.csQ(this.a,this.b,"jpg",this.c)},
$S:182}
A.bim.prototype={
$0(){return A.csQ(this.a,this.b,"png",null)},
$S:182}
A.bio.prototype={
$0(){return A.csQ(this.a,this.b,"webp",this.c)},
$S:182}
A.bie.prototype={
$2(d,e){var x=A.cCS(e)
this.a.a.m(0,d,x)
return x},
$S:z+5}
A.bif.prototype={
$2(d,e){var x=e.dT(0)
this.a.a.m(0,d,x)
return x},
$S:z+7}
A.big.prototype={
$2(d,e){var x=A.cCS(e)
this.a.b.a.m(0,d,x)
return x},
$S:z+5}
A.b_p.prototype={
$4(d,e,f,g){var x,w,v=this,u=v.a
if(u.a<v.c){x=v.b.c&&v.d.ch!=null
w=v.e
if(x){x=v.d
w.is(x.ch.nj(d),x.ch.nh(d),x.ch.ng(d),x.ch.oz(d))}else w.is(d,e,f,g)
w.q();++u.a}},
$S:782}
A.bbD.prototype={
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
$S:783}
A.bjM.prototype={
$1(d){var x,w,v,u,t=this.b,s=t.ct(),r=t.ct()
t=this.a
if(!t.d.y.a7(0,s))throw B.n(A.c8("Invalid Component in SOS block"))
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
A.btj.prototype={
$1(d){return d!==""},
$S:21}
A.bMd.prototype={
$2(d,e){return(d|e<<16)>>>0},
$S:201}
A.biD.prototype={
$4(d,e,f,g){var x=this.b
return d+this.a*(e-d+x*(d+g-f-e))+x*(f-d)},
$S:784}
A.biC.prototype={
$5(d,e,f,g,h){var x=-e,w=d*d
return f+0.5*(d*(x+g)+w*(2*e-5*f+4*g-h)+w*d*(x+3*f-3*g+h))},
$S:785};(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_2u,v=a._static_1,u=a._instance_1u,t=a.installStaticTearOff
x(A.k5.prototype,"gxB",1,0,function(){return[0]},["$1","$0"],["jf","C"],2,0,0)
x(A.ub.prototype,"gxB",1,0,function(){return[0]},["$1","$0"],["jf","C"],2,0,0)
x(A.yv.prototype,"gxB",1,0,function(){return[0]},["$1","$0"],["jf","C"],2,0,0)
x(A.rk.prototype,"gxB",1,0,function(){return[0]},["$1","$0"],["jf","C"],2,0,0)
x(A.ud.prototype,"gxB",1,0,function(){return[0]},["$1","$0"],["jf","C"],2,0,0)
x(A.wb.prototype,"gxB",1,0,function(){return[0]},["$1","$0"],["jf","C"],2,0,0)
x(A.yu.prototype,"gxB",1,0,function(){return[0]},["$1","$0"],["jf","C"],2,0,0)
x(A.yt.prototype,"gxB",1,0,function(){return[0]},["$1","$0"],["jf","C"],2,0,0)
x(A.ue.prototype,"gxB",1,0,function(){return[0]},["$1","$0"],["jf","C"],2,0,0)
var s
w(s=A.as5.prototype,"gaZL","aZM",3)
w(s,"gaZO","aZP",3)
w(s,"gaZQ","aZR",3)
w(s,"gaZF","aZG",3)
w(s,"gaZH","aZI",3)
v(A,"dkU","d5W",0)
v(A,"dkN","d5O",0)
v(A,"dkL","d5M",0)
v(A,"dkS","d5U",0)
v(A,"dkT","d5V",0)
v(A,"dkR","d5T",0)
v(A,"dkQ","d5S",0)
v(A,"dkP","d5R",0)
v(A,"dkW","d5Y",0)
v(A,"dkV","d5X",0)
v(A,"dkO","d5P",0)
v(A,"dkM","d5N",0)
v(A,"dl6","d68",0)
v(A,"dl4","d66",0)
v(A,"dkX","d5Z",0)
v(A,"dkZ","d60",0)
v(A,"dkY","d6_",0)
v(A,"dl_","d61",0)
v(A,"dl7","d69",0)
v(A,"dl5","d67",0)
v(A,"dl0","d62",0)
v(A,"dl1","d63",0)
v(A,"dl2","d64",0)
v(A,"dl3","d65",0)
u(A.a8b.prototype,"gbhL","bhM",6)
u(A.arU.prototype,"gbzL","bzM",6)
t(A,"cxs",3,null,["$3"],["d6a"],1,0)
t(A,"dl8",3,null,["$3"],["d6b"],1,0)
t(A,"dld",3,null,["$3"],["d6g"],1,0)
t(A,"dle",3,null,["$3"],["d6h"],1,0)
t(A,"dlf",3,null,["$3"],["d6i"],1,0)
t(A,"dlg",3,null,["$3"],["d6j"],1,0)
t(A,"dlh",3,null,["$3"],["d6k"],1,0)
t(A,"dli",3,null,["$3"],["d6l"],1,0)
t(A,"dlj",3,null,["$3"],["d6m"],1,0)
t(A,"dlk",3,null,["$3"],["d6n"],1,0)
t(A,"dl9",3,null,["$3"],["d6c"],1,0)
t(A,"dla",3,null,["$3"],["d6d"],1,0)
t(A,"dlb",3,null,["$3"],["d6e"],1,0)
t(A,"dlc",3,null,["$3"],["d6f"],1,0)
t(A,"dln",6,null,["$6"],["d6A"],4,0)
t(A,"dlo",6,null,["$6"],["d6B"],4,0)
t(A,"dlm",6,null,["$6"],["d6z"],4,0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.G,[A.a05,A.bNM,A.bNN,A.b6T,A.te,A.c0t,A.ceP,A.biR,A.bNL,A.bj8,A.brW,A.hC,A.uc,A.aK2,A.aoR,A.q5,A.k5,A.b_q,A.FR,A.b6D,A.b6C,A.baf,A.aoS,A.bbA,A.aoT,A.aoU,A.bbC,A.a_2,A.aN4,A.a_E,A.a_F,A.aqs,A.bi2,A.are,A.akO,A.Hs,A.bjJ,A.Cb,A.bjL,A.Uv,A.as4,A.bjP,A.as5,A.a3i,A.bth,A.wC,A.Rb,A.bue,A.Ra,A.bug,A.axv,A.axy,A.axE,A.a3G,A.Rf,A.axD,A.rH,A.aBX,A.bGM,A.aC_,A.bGO,A.aC0,A.bGP,A.blh,A.bM0,A.a8a,A.bM1,A.bM6,A.bMa,A.bMc,A.a89,A.bMb,A.bM2,A.L3,A.aDE,A.aDG,A.aDF,A.aDH,A.a8b,A.aDC,A.bM7,A.aDD,A.bN0,A.a8p,A.arc,A.a_L,A.aE5,A.a08,A.bsn,A.awK,A.aru,A.m3,A.bup,A.awb,A.nY,A.bIE])
w(A.clP,A.bNM)
w(A.clQ,A.bNN)
x(B.e7,[A.TY,A.ajZ,A.b0F,A.nK,A.ajK,A.mR,A.lU,A.OK,A.GU,A.u_,A.Pf,A.bjK,A.QY,A.a3h,A.D0,A.awZ,A.D1,A.uA,A.oe,A.Ku,A.kF,A.t_,A.L4,A.Tw,A.bi_,A.aqh,A.arX,A.bcK,A.bx_])
w(A.bj6,A.bj8)
w(A.awd,A.brW)
x(B.cn,[A.bil,A.bim,A.bio])
x(B.x,[A.Nn,A.No,A.Np,A.Nq,A.Nr,A.Ns,A.Nv,A.Nw,A.Nx,A.Ny,A.Nz,A.y_,A.XY,A.BS,A.m2,A.IG,A.IH,A.II,A.IJ,A.IK,A.IL,A.IM,A.IN,A.IO,A.IP,A.IQ,A.IR,A.fk])
x(A.y_,[A.akJ,A.Nt])
w(A.akU,A.XY)
w(A.OI,A.uc)
x(B.ds,[A.bie,A.bif,A.big,A.bMd])
x(A.k5,[A.ub,A.BN,A.yv,A.rk,A.ud,A.wb,A.yu,A.yt,A.ue,A.BP,A.BO,A.HC])
x(A.b6D,[A.ajO,A.bbB,A.bfD,A.bi1,A.as3,A.awY,A.bti,A.buf,A.buk,A.bG6,A.bGN,A.bN1])
x(B.bJ,[A.b_p,A.bbD,A.bjM,A.btj,A.biD,A.biC])
w(A.b7U,A.ajO)
w(A.bjg,A.bbA)
x(A.bjg,[A.arP,A.bjh,A.bji,A.bjj,A.arR])
w(A.arQ,A.a_2)
w(A.arS,A.a_F)
w(A.bi0,A.FR)
x(A.Hs,[A.Ht,A.a06])
x(A.baf,[A.bjN,A.btf])
w(A.arT,A.a3i)
w(A.bjl,A.bth)
w(A.IW,A.b6C)
x(A.wC,[A.axt,A.axu,A.axw,A.axx,A.axA,A.axB])
x(A.Rb,[A.a3D,A.axz])
x(A.axE,[A.z5,A.md])
w(A.arU,A.a8b)
w(A.arV,A.a8p)
w(A.arW,A.aE5)
x(A.m2,[A.Pn,A.Po,A.a0c,A.a0d,A.a0e,A.a0f,A.Pp,A.Pq,A.Pr,A.Ps,A.Pt,A.Pu])
x(A.bsn,[A.awq,A.awr,A.aws,A.awt,A.awu,A.awv,A.aww,A.a2S,A.us])
w(A.bqL,A.bup)})()
B.br(b.typeUniverse,JSON.parse('{"hC":{"bu":["aX"]},"Nn":{"dD":[],"x":["aX"],"x.E":"aX"},"No":{"dD":[],"x":["aX"],"x.E":"aX"},"Np":{"dD":[],"x":["aX"],"x.E":"aX"},"Nq":{"dD":[],"x":["aX"],"x.E":"aX"},"Nr":{"dD":[],"x":["aX"],"x.E":"aX"},"Ns":{"dD":[],"x":["aX"],"x.E":"aX"},"Nv":{"dD":[],"x":["aX"],"x.E":"aX"},"Nw":{"dD":[],"x":["aX"],"x.E":"aX"},"Nx":{"dD":[],"x":["aX"],"x.E":"aX"},"Ny":{"dD":[],"x":["aX"],"x.E":"aX"},"Nz":{"dD":[],"x":["aX"],"x.E":"aX"},"y_":{"dD":[],"x":["aX"],"x.E":"aX"},"akJ":{"dD":[],"x":["aX"],"x.E":"aX"},"Nt":{"dD":[],"x":["aX"],"x.E":"aX"},"XY":{"dD":[],"x":["aX"],"x.E":"aX"},"akU":{"dD":[],"x":["aX"],"x.E":"aX"},"ub":{"k5":[]},"BN":{"k5":[]},"yv":{"k5":[]},"rk":{"k5":[]},"ud":{"k5":[]},"wb":{"k5":[]},"yu":{"k5":[]},"yt":{"k5":[]},"ue":{"k5":[]},"BP":{"k5":[]},"BO":{"k5":[]},"HC":{"k5":[]},"arQ":{"a_2":[]},"arS":{"a_F":[]},"Ht":{"Hs":[]},"a06":{"Hs":[]},"arT":{"a3i":[]},"axt":{"wC":[]},"axu":{"wC":[]},"axw":{"wC":[]},"axx":{"wC":[]},"axA":{"wC":[]},"axB":{"wC":[]},"a3D":{"Rb":[]},"axz":{"Rb":[]},"arV":{"a8p":[]},"BS":{"x":["cU"],"x.E":"cU"},"m2":{"x":["cU"]},"Pn":{"m2":[],"x":["cU"],"x.E":"cU"},"Po":{"m2":[],"x":["cU"],"x.E":"cU"},"a0c":{"m2":[],"x":["cU"],"x.E":"cU"},"a0d":{"m2":[],"x":["cU"],"x.E":"cU"},"a0e":{"m2":[],"x":["cU"],"x.E":"cU"},"a0f":{"m2":[],"x":["cU"],"x.E":"cU"},"Pp":{"m2":[],"x":["cU"],"x.E":"cU"},"Pq":{"m2":[],"x":["cU"],"x.E":"cU"},"Pr":{"m2":[],"x":["cU"],"x.E":"cU"},"Ps":{"m2":[],"x":["cU"],"x.E":"cU"},"Pt":{"m2":[],"x":["cU"],"x.E":"cU"},"Pu":{"m2":[],"x":["cU"],"x.E":"cU"},"IG":{"cU":[],"dD":[],"x":["aX"],"bu":["cU"],"x.E":"aX"},"IH":{"cU":[],"dD":[],"x":["aX"],"bu":["cU"],"x.E":"aX"},"II":{"cU":[],"dD":[],"x":["aX"],"bu":["cU"],"x.E":"aX"},"IJ":{"cU":[],"dD":[],"x":["aX"],"bu":["cU"],"x.E":"aX"},"IK":{"cU":[],"dD":[],"x":["aX"],"bu":["cU"],"x.E":"aX"},"IL":{"cU":[],"dD":[],"x":["aX"],"bu":["cU"],"x.E":"aX"},"awK":{"bu":["cU"]},"IM":{"cU":[],"dD":[],"x":["aX"],"bu":["cU"],"x.E":"aX"},"IN":{"cU":[],"dD":[],"x":["aX"],"bu":["cU"],"x.E":"aX"},"IO":{"cU":[],"dD":[],"x":["aX"],"bu":["cU"],"x.E":"aX"},"IP":{"cU":[],"dD":[],"x":["aX"],"bu":["cU"],"x.E":"aX"},"IQ":{"cU":[],"dD":[],"x":["aX"],"bu":["cU"],"x.E":"aX"},"IR":{"cU":[],"dD":[],"x":["aX"],"bu":["cU"],"x.E":"aX"},"fk":{"cU":[],"dD":[],"x":["aX"],"bu":["cU"],"x.E":"aX"},"aru":{"b7":[]},"cU":{"dD":[],"bu":["cU"],"x":["aX"]}}'))
B.lM(b.typeUniverse,JSON.parse('{"axE":1}'))
var y=(function rtii(){var x=B.B
return{G:x("dD"),n:x("aoS"),W:x("aoU"),z:x("apa"),R:x("a_L"),x:x("arc"),Y:x("are"),P:x("q5"),r:x("k5"),I:x("m2"),h:x("a0K"),E:x("u<akO>"),Q:x("u<aoT>"),m:x("u<a_2>"),b:x("u<a_F>"),A:x("u<a_L>"),g:x("u<BS>"),M:x("u<C<C<C<f>>>>"),o:x("u<C<C<f>>>"),S:x("u<C<f>>"),d:x("u<a3i>"),X:x("u<Ra>"),u:x("u<wC>"),l:x("u<axy>"),j:x("u<nY>"),T:x("u<h>"),_:x("u<aC0>"),a:x("u<dJ>"),q:x("u<L3>"),F:x("u<aDD>"),J:x("u<a8p>"),v:x("u<aK2>"),C:x("u<Uv>"),t:x("u<f>"),aH:x("u<Hs?>"),cB:x("u<as4?>"),cQ:x("u<C<f>?>"),w:x("u<qL?>"),e:x("u<dJ?>"),y:x("u<~(m3)>"),c:x("Cb"),bp:x("C<a0K>"),f:x("C<C<f>>"),k:x("C<nY>"),cm:x("C<a89>"),K:x("C<L3>"),H:x("C<O>"),L:x("C<f>"),c0:x("cU"),aG:x("Ra"),a2:x("axv"),cK:x("a3D"),O:x("Rb"),ab:x("a3G"),aM:x("Rf"),i:x("nY"),N:x("h"),aL:x("aC_"),bk:x("qL"),D:x("dJ"),V:x("a89"),bQ:x("aDE"),bl:x("aDF"),bt:x("aDH"),U:x("ag<h>"),bc:x("aN4"),cb:x("O"),p:x("f"),a7:x("arL?"),cl:x("C<f>?"),bT:x("C<Hs?>?"),cM:x("G?"),ac:x("dJ?"),ak:x("a8a?"),B:x("L3?"),Z:x("aDG?"),s:x("f?")}})();(function constants(){var x=a.makeConstList
C.Al=new A.ajK(0,"direct")
C.Am=new A.ajK(1,"alpha")
C.In=new A.lU(0,"none")
C.An=new A.lU(3,"bitfields")
C.Ao=new A.lU(6,"alphaBitfields")
C.q9=new A.ajZ(0,"littleEndian")
C.nn=new A.ajZ(1,"bigEndian")
C.jO=new A.bNL()
C.ajo=new A.clP()
C.J4=new A.clQ()
C.J9=new A.b0F(4,"luminance")
C.Bf=new A.akU(4294967295)
C.ar7=new A.GU(0,"red")
C.ar8=new A.GU(1,"green")
C.ar9=new A.GU(2,"blue")
C.ara=new A.GU(3,"alpha")
C.arb=new A.GU(4,"other")
C.Ls=new A.OK(0,"uint")
C.BZ=new A.OK(1,"half")
C.C_=new A.OK(2,"float")
C.Lt=new A.u_(0,"none")
C.arx=new A.bcK(2,"both")
C.fS=new A.nK(0,"uint1")
C.hI=new A.nK(1,"uint2")
C.k2=new A.nK(10,"float32")
C.lG=new A.nK(11,"float64")
C.hJ=new A.nK(2,"uint4")
C.ab=new A.nK(3,"uint8")
C.cy=new A.nK(4,"uint16")
C.k3=new A.nK(5,"uint32")
C.lH=new A.nK(6,"int8")
C.lI=new A.nK(7,"int16")
C.lJ=new A.nK(8,"int32")
C.iv=new A.nK(9,"float16")
C.arJ=new A.aqh(1,"page")
C.bt=new A.aqh(2,"sequence")
C.Cb=new A.bi_(1,"deflate")
C.LT=new A.Pf(2,"cur")
C.a0=new A.mR(0,"none")
C.Mw=new A.mR(1,"byte")
C.Mx=new A.mR(10,"sRational")
C.My=new A.mR(11,"single")
C.Mz=new A.mR(12,"double")
C.bJ=new A.mR(2,"ascii")
C.bq=new A.mR(3,"short")
C.d4=new A.mR(4,"long")
C.es=new A.mR(5,"rational")
C.MA=new A.mR(6,"sByte")
C.iy=new A.mR(7,"undefined")
C.MB=new A.mR(8,"sShort")
C.MC=new A.mR(9,"sLong")
C.auV=new A.arX(0,"nearest")
C.bM9=new A.arX(1,"linear")
C.MU=new A.bjK(0,"yuv444")
C.CG=B.a(x([0,2,8]),y.t)
C.avP=B.a(x([0,4,2,1]),y.t)
C.arT=new A.Pf(0,"invalid")
C.arU=new A.Pf(1,"ico")
C.avU=B.a(x([C.arT,C.arU,C.LT]),B.B("u<Pf>"))
C.Nh=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),y.t)
C.awy=B.a(x([252,243,207,63]),y.t)
C.brf=new A.QY(0,"none")
C.a8o=new A.QY(1,"background")
C.a8p=new A.QY(2,"previous")
C.awA=B.a(x([C.brf,C.a8o,C.a8p]),B.B("u<QY>"))
C.Nk=B.a(x([292,260,226,226]),y.t)
C.Nm=B.a(x([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125]),y.t)
C.awF=B.a(x([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0]),y.t)
C.awM=B.a(x([2,3,7]),y.t)
C.Np=B.a(x([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68]),y.t)
C.awT=B.a(x([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),y.t)
C.ax6=B.a(x([3,3,11]),y.t)
C.Dp=B.a(x([128,128,128,128,128,128,128,128,128,128,128]),y.t)
C.O8=B.a(x([C.Dp,C.Dp,C.Dp]),y.S)
C.azn=B.a(x([253,136,254,255,228,219,128,128,128,128,128]),y.t)
C.aBI=B.a(x([189,129,242,255,227,213,255,219,128,128,128]),y.t)
C.aBP=B.a(x([106,126,227,252,214,209,255,255,128,128,128]),y.t)
C.aFj=B.a(x([C.azn,C.aBI,C.aBP]),y.S)
C.aFE=B.a(x([1,98,248,255,236,226,255,255,128,128,128]),y.t)
C.axt=B.a(x([181,133,238,254,221,234,255,154,128,128,128]),y.t)
C.axc=B.a(x([78,134,202,247,198,180,255,219,128,128,128]),y.t)
C.aGW=B.a(x([C.aFE,C.axt,C.axc]),y.S)
C.azd=B.a(x([1,185,249,255,243,255,128,128,128,128,128]),y.t)
C.aFs=B.a(x([184,150,247,255,236,224,128,128,128,128,128]),y.t)
C.aIJ=B.a(x([77,110,216,255,236,230,128,128,128,128,128]),y.t)
C.aEj=B.a(x([C.azd,C.aFs,C.aIJ]),y.S)
C.aEy=B.a(x([1,101,251,255,241,255,128,128,128,128,128]),y.t)
C.azl=B.a(x([170,139,241,252,236,209,255,255,128,128,128]),y.t)
C.aEM=B.a(x([37,116,196,243,228,255,255,255,128,128,128]),y.t)
C.ayw=B.a(x([C.aEy,C.azl,C.aEM]),y.S)
C.aCj=B.a(x([1,204,254,255,245,255,128,128,128,128,128]),y.t)
C.aJw=B.a(x([207,160,250,255,238,128,128,128,128,128,128]),y.t)
C.aJv=B.a(x([102,103,231,255,211,171,128,128,128,128,128]),y.t)
C.aAf=B.a(x([C.aCj,C.aJw,C.aJv]),y.S)
C.ayb=B.a(x([1,152,252,255,240,255,128,128,128,128,128]),y.t)
C.aJG=B.a(x([177,135,243,255,234,225,128,128,128,128,128]),y.t)
C.aE0=B.a(x([80,129,211,255,194,224,128,128,128,128,128]),y.t)
C.aFi=B.a(x([C.ayb,C.aJG,C.aE0]),y.S)
C.OP=B.a(x([1,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aG9=B.a(x([246,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aDp=B.a(x([255,128,128,128,128,128,128,128,128,128,128]),y.t)
C.aJW=B.a(x([C.OP,C.aG9,C.aDp]),y.S)
C.aA5=B.a(x([C.O8,C.aFj,C.aGW,C.aEj,C.ayw,C.aAf,C.aFi,C.aJW]),y.o)
C.aIR=B.a(x([198,35,237,223,193,187,162,160,145,155,62]),y.t)
C.azm=B.a(x([131,45,198,221,172,176,220,157,252,221,1]),y.t)
C.aIQ=B.a(x([68,47,146,208,149,167,221,162,255,223,128]),y.t)
C.aCN=B.a(x([C.aIR,C.azm,C.aIQ]),y.S)
C.aH_=B.a(x([1,149,241,255,221,224,255,255,128,128,128]),y.t)
C.aHB=B.a(x([184,141,234,253,222,220,255,199,128,128,128]),y.t)
C.aDe=B.a(x([81,99,181,242,176,190,249,202,255,255,128]),y.t)
C.aIk=B.a(x([C.aH_,C.aHB,C.aDe]),y.S)
C.aI0=B.a(x([1,129,232,253,214,197,242,196,255,255,128]),y.t)
C.aJl=B.a(x([99,121,210,250,201,198,255,202,128,128,128]),y.t)
C.aFn=B.a(x([23,91,163,242,170,187,247,210,255,255,128]),y.t)
C.aDu=B.a(x([C.aI0,C.aJl,C.aFn]),y.S)
C.aAO=B.a(x([1,200,246,255,234,255,128,128,128,128,128]),y.t)
C.aHY=B.a(x([109,178,241,255,231,245,255,255,128,128,128]),y.t)
C.awE=B.a(x([44,130,201,253,205,192,255,255,128,128,128]),y.t)
C.aIu=B.a(x([C.aAO,C.aHY,C.awE]),y.S)
C.axV=B.a(x([1,132,239,251,219,209,255,165,128,128,128]),y.t)
C.avW=B.a(x([94,136,225,251,218,190,255,255,128,128,128]),y.t)
C.aI3=B.a(x([22,100,174,245,186,161,255,199,128,128,128]),y.t)
C.aEv=B.a(x([C.axV,C.avW,C.aI3]),y.S)
C.aHA=B.a(x([1,182,249,255,232,235,128,128,128,128,128]),y.t)
C.aF6=B.a(x([124,143,241,255,227,234,128,128,128,128,128]),y.t)
C.aBB=B.a(x([35,77,181,251,193,211,255,205,128,128,128]),y.t)
C.aBW=B.a(x([C.aHA,C.aF6,C.aBB]),y.S)
C.aJX=B.a(x([1,157,247,255,236,231,255,255,128,128,128]),y.t)
C.aA2=B.a(x([121,141,235,255,225,227,255,255,128,128,128]),y.t)
C.aHZ=B.a(x([45,99,188,251,195,217,255,224,128,128,128]),y.t)
C.ayp=B.a(x([C.aJX,C.aA2,C.aHZ]),y.S)
C.avX=B.a(x([1,1,251,255,213,255,128,128,128,128,128]),y.t)
C.awV=B.a(x([203,1,248,255,255,128,128,128,128,128,128]),y.t)
C.aHE=B.a(x([137,1,177,255,224,255,128,128,128,128,128]),y.t)
C.ayd=B.a(x([C.avX,C.awV,C.aHE]),y.S)
C.aHm=B.a(x([C.aCN,C.aIk,C.aDu,C.aIu,C.aEv,C.aBW,C.ayp,C.ayd]),y.o)
C.aAn=B.a(x([253,9,248,251,207,208,255,192,128,128,128]),y.t)
C.aGa=B.a(x([175,13,224,243,193,185,249,198,255,255,128]),y.t)
C.aJV=B.a(x([73,17,171,221,161,179,236,167,255,234,128]),y.t)
C.aFV=B.a(x([C.aAn,C.aGa,C.aJV]),y.S)
C.aH9=B.a(x([1,95,247,253,212,183,255,255,128,128,128]),y.t)
C.aDJ=B.a(x([239,90,244,250,211,209,255,255,128,128,128]),y.t)
C.aII=B.a(x([155,77,195,248,188,195,255,255,128,128,128]),y.t)
C.aHz=B.a(x([C.aH9,C.aDJ,C.aII]),y.S)
C.aCn=B.a(x([1,24,239,251,218,219,255,205,128,128,128]),y.t)
C.aGI=B.a(x([201,51,219,255,196,186,128,128,128,128,128]),y.t)
C.aDI=B.a(x([69,46,190,239,201,218,255,228,128,128,128]),y.t)
C.aH5=B.a(x([C.aCn,C.aGI,C.aDI]),y.S)
C.aBL=B.a(x([1,191,251,255,255,128,128,128,128,128,128]),y.t)
C.aEL=B.a(x([223,165,249,255,213,255,128,128,128,128,128]),y.t)
C.aFz=B.a(x([141,124,248,255,255,128,128,128,128,128,128]),y.t)
C.aI_=B.a(x([C.aBL,C.aEL,C.aFz]),y.S)
C.aCS=B.a(x([1,16,248,255,255,128,128,128,128,128,128]),y.t)
C.azZ=B.a(x([190,36,230,255,236,255,128,128,128,128,128]),y.t)
C.azp=B.a(x([149,1,255,128,128,128,128,128,128,128,128]),y.t)
C.axW=B.a(x([C.aCS,C.azZ,C.azp]),y.S)
C.aFq=B.a(x([1,226,255,128,128,128,128,128,128,128,128]),y.t)
C.aG0=B.a(x([247,192,255,128,128,128,128,128,128,128,128]),y.t)
C.aIG=B.a(x([240,128,255,128,128,128,128,128,128,128,128]),y.t)
C.ax_=B.a(x([C.aFq,C.aG0,C.aIG]),y.S)
C.aIt=B.a(x([1,134,252,255,255,128,128,128,128,128,128]),y.t)
C.aF4=B.a(x([213,62,250,255,255,128,128,128,128,128,128]),y.t)
C.aJC=B.a(x([55,93,255,128,128,128,128,128,128,128,128]),y.t)
C.aFp=B.a(x([C.aIt,C.aF4,C.aJC]),y.S)
C.az6=B.a(x([C.aFV,C.aHz,C.aH5,C.aI_,C.axW,C.ax_,C.aFp,C.O8]),y.o)
C.aF7=B.a(x([202,24,213,235,186,191,220,160,240,175,255]),y.t)
C.azk=B.a(x([126,38,182,232,169,184,228,174,255,187,128]),y.t)
C.axY=B.a(x([61,46,138,219,151,178,240,170,255,216,128]),y.t)
C.aHs=B.a(x([C.aF7,C.azk,C.axY]),y.S)
C.aE_=B.a(x([1,112,230,250,199,191,247,159,255,255,128]),y.t)
C.ayo=B.a(x([166,109,228,252,211,215,255,174,128,128,128]),y.t)
C.aED=B.a(x([39,77,162,232,172,180,245,178,255,255,128]),y.t)
C.aHo=B.a(x([C.aE_,C.ayo,C.aED]),y.S)
C.aE9=B.a(x([1,52,220,246,198,199,249,220,255,255,128]),y.t)
C.aAc=B.a(x([124,74,191,243,183,193,250,221,255,255,128]),y.t)
C.aBA=B.a(x([24,71,130,219,154,170,243,182,255,255,128]),y.t)
C.aHn=B.a(x([C.aE9,C.aAc,C.aBA]),y.S)
C.aBw=B.a(x([1,182,225,249,219,240,255,224,128,128,128]),y.t)
C.aJA=B.a(x([149,150,226,252,216,205,255,171,128,128,128]),y.t)
C.aK9=B.a(x([28,108,170,242,183,194,254,223,255,255,128]),y.t)
C.aJ3=B.a(x([C.aBw,C.aJA,C.aK9]),y.S)
C.aKc=B.a(x([1,81,230,252,204,203,255,192,128,128,128]),y.t)
C.aHU=B.a(x([123,102,209,247,188,196,255,233,128,128,128]),y.t)
C.aIB=B.a(x([20,95,153,243,164,173,255,203,128,128,128]),y.t)
C.aHV=B.a(x([C.aKc,C.aHU,C.aIB]),y.S)
C.aD6=B.a(x([1,222,248,255,216,213,128,128,128,128,128]),y.t)
C.aF1=B.a(x([168,175,246,252,235,205,255,255,128,128,128]),y.t)
C.aBF=B.a(x([47,116,215,255,211,212,255,255,128,128,128]),y.t)
C.azL=B.a(x([C.aD6,C.aF1,C.aBF]),y.S)
C.aCZ=B.a(x([1,121,236,253,212,214,255,255,128,128,128]),y.t)
C.aEb=B.a(x([141,84,213,252,201,202,255,219,128,128,128]),y.t)
C.aFP=B.a(x([42,80,160,240,162,185,255,205,128,128,128]),y.t)
C.aBZ=B.a(x([C.aCZ,C.aEb,C.aFP]),y.S)
C.aJO=B.a(x([244,1,255,128,128,128,128,128,128,128,128]),y.t)
C.avS=B.a(x([238,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aG3=B.a(x([C.OP,C.aJO,C.avS]),y.S)
C.awv=B.a(x([C.aHs,C.aHo,C.aHn,C.aJ3,C.aHV,C.azL,C.aBZ,C.aG3]),y.o)
C.axX=B.a(x([C.aA5,C.aHm,C.az6,C.awv]),y.M)
C.ay0=B.a(x([511,1023,2047,4095]),y.t)
C.ayt=B.a(x([63,207,243,252]),y.t)
C.az_=B.a(x([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]),y.t)
C.tf=B.a(x([0,1,2,3,4,5,6,7,8,9,10,11]),y.t)
C.azs=B.a(x([8,8,4,2]),y.t)
C.aw9=B.a(x([173,148,140]),y.t)
C.awa=B.a(x([176,155,140,135]),y.t)
C.aw7=B.a(x([180,157,141,134,130]),y.t)
C.awU=B.a(x([254,254,243,230,196,177,153,140,133,130,129]),y.t)
C.azu=B.a(x([C.aw9,C.awa,C.aw7,C.awU]),y.S)
C.azz=B.a(x([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576]),y.t)
C.Og=B.a(x([1,1.387039845,1.306562965,1.175875602,1,0.785694958,0.5411961,0.275899379]),B.B("u<O>"))
C.azQ=B.a(x([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),y.t)
C.aA7=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095]),y.t)
C.Ot=B.a(x([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29]),y.t)
C.OF=B.a(x([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250]),y.t)
C.aAB=B.a(x([280,256,256,256,40]),y.t)
C.tM=B.a(x([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63]),y.t)
C.OW=B.a(x([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390]),y.t)
C.CX=B.a(x([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157]),y.t)
C.aAS=B.a(x([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112]),y.t)
C.CY=B.a(x([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284]),y.t)
C.P6=B.a(x([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119]),y.t)
C.P8=B.a(x([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28]),y.t)
C.aBl=B.a(x([C.Ls,C.BZ,C.C_]),B.B("u<OK>"))
C.u2=B.a(x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),y.t)
C.aC4=B.a(x([254,253,251,247,239,223,191,127]),y.t)
C.uh=B.a(x([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8]),y.t)
C.PP=B.a(x([A.dl0(),A.dkT(),A.dl7(),A.dl5(),A.dl2(),A.dl1(),A.dl3()]),y.y)
C.PR=B.a(x([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5]),y.t)
C.Q1=B.a(x([C.a0,C.Mw,C.bJ,C.bq,C.d4,C.es,C.MA,C.iy,C.MB,C.MC,C.Mx,C.My,C.Mz]),B.B("u<mR>"))
C.GP=new A.kF(0,"whiteIsZero")
C.bDG=new A.kF(1,"blackIsZero")
C.bDN=new A.kF(2,"rgb")
C.GR=new A.kF(3,"palette")
C.bDO=new A.kF(4,"transparencyMask")
C.abu=new A.kF(5,"cmyk")
C.bDP=new A.kF(6,"yCbCr")
C.bDQ=new A.kF(7,"reserved7")
C.bDR=new A.kF(8,"cieLab")
C.bDS=new A.kF(9,"iccLab")
C.bDH=new A.kF(10,"ituLab")
C.bDI=new A.kF(11,"logL")
C.bDJ=new A.kF(12,"logLuv")
C.bDK=new A.kF(13,"colorFilterArray")
C.bDL=new A.kF(14,"linearRaw")
C.bDM=new A.kF(15,"depth")
C.GQ=new A.kF(16,"unknown")
C.aCr=B.a(x([C.GP,C.bDG,C.bDN,C.GR,C.bDO,C.abu,C.bDP,C.bDQ,C.bDR,C.bDS,C.bDH,C.bDI,C.bDJ,C.bDK,C.bDL,C.bDM,C.GQ]),B.B("u<kF>"))
C.Qh=B.a(x([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0]),y.t)
C.a8m=new A.a3h(0,"source")
C.a8n=new A.a3h(1,"over")
C.aCV=B.a(x([C.a8m,C.a8n]),B.B("u<a3h>"))
C.bDy=new A.Ku(0,"invalid")
C.abs=new A.Ku(1,"uint")
C.b6=new A.Ku(2,"int")
C.pE=new A.Ku(3,"float")
C.aCY=B.a(x([C.bDy,C.abs,C.b6,C.pE]),B.B("u<Ku>"))
C.aD4=B.a(x([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15]),y.t)
C.QR=B.a(x([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9]),y.t)
C.aDG=B.a(x([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15]),y.t)
C.arc=new A.u_(1,"rle")
C.ard=new A.u_(2,"zips")
C.are=new A.u_(3,"zip")
C.arf=new A.u_(4,"piz")
C.arg=new A.u_(5,"pxr24")
C.arh=new A.u_(6,"b44")
C.ari=new A.u_(7,"b44a")
C.aDK=B.a(x([C.Lt,C.arc,C.ard,C.are,C.arf,C.arg,C.arh,C.ari]),B.B("u<u_>"))
C.aFK=B.a(x([231,120,48,89,115,113,120,152,112]),y.t)
C.aww=B.a(x([152,179,64,126,170,118,46,70,95]),y.t)
C.aDF=B.a(x([175,69,143,80,85,82,72,155,103]),y.t)
C.axE=B.a(x([56,58,10,171,218,189,17,13,152]),y.t)
C.aEA=B.a(x([114,26,17,163,44,195,21,10,173]),y.t)
C.aF_=B.a(x([121,24,80,195,26,62,44,64,85]),y.t)
C.aEu=B.a(x([144,71,10,38,171,213,144,34,26]),y.t)
C.aI6=B.a(x([170,46,55,19,136,160,33,206,71]),y.t)
C.aAW=B.a(x([63,20,8,114,114,208,12,9,226]),y.t)
C.aCk=B.a(x([81,40,11,96,182,84,29,16,36]),y.t)
C.avY=B.a(x([C.aFK,C.aww,C.aDF,C.axE,C.aEA,C.aF_,C.aEu,C.aI6,C.aAW,C.aCk]),y.S)
C.azY=B.a(x([134,183,89,137,98,101,106,165,148]),y.t)
C.aHK=B.a(x([72,187,100,130,157,111,32,75,80]),y.t)
C.aFe=B.a(x([66,102,167,99,74,62,40,234,128]),y.t)
C.awZ=B.a(x([41,53,9,178,241,141,26,8,107]),y.t)
C.aC5=B.a(x([74,43,26,146,73,166,49,23,157]),y.t)
C.aBg=B.a(x([65,38,105,160,51,52,31,115,128]),y.t)
C.aBo=B.a(x([104,79,12,27,217,255,87,17,7]),y.t)
C.aDD=B.a(x([87,68,71,44,114,51,15,186,23]),y.t)
C.aHq=B.a(x([47,41,14,110,182,183,21,17,194]),y.t)
C.aG8=B.a(x([66,45,25,102,197,189,23,18,22]),y.t)
C.aIC=B.a(x([C.azY,C.aHK,C.aFe,C.awZ,C.aC5,C.aBg,C.aBo,C.aDD,C.aHq,C.aG8]),y.S)
C.aFI=B.a(x([88,88,147,150,42,46,45,196,205]),y.t)
C.aEF=B.a(x([43,97,183,117,85,38,35,179,61]),y.t)
C.aBE=B.a(x([39,53,200,87,26,21,43,232,171]),y.t)
C.aDl=B.a(x([56,34,51,104,114,102,29,93,77]),y.t)
C.aEn=B.a(x([39,28,85,171,58,165,90,98,64]),y.t)
C.aB9=B.a(x([34,22,116,206,23,34,43,166,73]),y.t)
C.avZ=B.a(x([107,54,32,26,51,1,81,43,31]),y.t)
C.aId=B.a(x([68,25,106,22,64,171,36,225,114]),y.t)
C.azX=B.a(x([34,19,21,102,132,188,16,76,124]),y.t)
C.aIY=B.a(x([62,18,78,95,85,57,50,48,51]),y.t)
C.aAj=B.a(x([C.aFI,C.aEF,C.aBE,C.aDl,C.aEn,C.aB9,C.avZ,C.aId,C.azX,C.aIY]),y.S)
C.aEf=B.a(x([193,101,35,159,215,111,89,46,111]),y.t)
C.az4=B.a(x([60,148,31,172,219,228,21,18,111]),y.t)
C.axT=B.a(x([112,113,77,85,179,255,38,120,114]),y.t)
C.aIU=B.a(x([40,42,1,196,245,209,10,25,109]),y.t)
C.aCW=B.a(x([88,43,29,140,166,213,37,43,154]),y.t)
C.aBb=B.a(x([61,63,30,155,67,45,68,1,209]),y.t)
C.aBO=B.a(x([100,80,8,43,154,1,51,26,71]),y.t)
C.ax3=B.a(x([142,78,78,16,255,128,34,197,171]),y.t)
C.aDV=B.a(x([41,40,5,102,211,183,4,1,221]),y.t)
C.aAx=B.a(x([51,50,17,168,209,192,23,25,82]),y.t)
C.aAg=B.a(x([C.aEf,C.az4,C.axT,C.aIU,C.aCW,C.aBb,C.aBO,C.ax3,C.aDV,C.aAx]),y.S)
C.aBx=B.a(x([138,31,36,171,27,166,38,44,229]),y.t)
C.aAd=B.a(x([67,87,58,169,82,115,26,59,179]),y.t)
C.aGV=B.a(x([63,59,90,180,59,166,93,73,154]),y.t)
C.aIz=B.a(x([40,40,21,116,143,209,34,39,175]),y.t)
C.axa=B.a(x([47,15,16,183,34,223,49,45,183]),y.t)
C.azj=B.a(x([46,17,33,183,6,98,15,32,183]),y.t)
C.aKe=B.a(x([57,46,22,24,128,1,54,17,37]),y.t)
C.aBS=B.a(x([65,32,73,115,28,128,23,128,205]),y.t)
C.aFd=B.a(x([40,3,9,115,51,192,18,6,223]),y.t)
C.aC2=B.a(x([87,37,9,115,59,77,64,21,47]),y.t)
C.aDU=B.a(x([C.aBx,C.aAd,C.aGV,C.aIz,C.axa,C.azj,C.aKe,C.aBS,C.aFd,C.aC2]),y.S)
C.aJM=B.a(x([104,55,44,218,9,54,53,130,226]),y.t)
C.aym=B.a(x([64,90,70,205,40,41,23,26,57]),y.t)
C.aGU=B.a(x([54,57,112,184,5,41,38,166,213]),y.t)
C.aBa=B.a(x([30,34,26,133,152,116,10,32,134]),y.t)
C.aFW=B.a(x([39,19,53,221,26,114,32,73,255]),y.t)
C.aAv=B.a(x([31,9,65,234,2,15,1,118,73]),y.t)
C.aDS=B.a(x([75,32,12,51,192,255,160,43,51]),y.t)
C.aBe=B.a(x([88,31,35,67,102,85,55,186,85]),y.t)
C.aCw=B.a(x([56,21,23,111,59,205,45,37,192]),y.t)
C.aCH=B.a(x([55,38,70,124,73,102,1,34,98]),y.t)
C.aJT=B.a(x([C.aJM,C.aym,C.aGU,C.aBa,C.aFW,C.aAv,C.aDS,C.aBe,C.aCw,C.aCH]),y.S)
C.aCu=B.a(x([125,98,42,88,104,85,117,175,82]),y.t)
C.aBk=B.a(x([95,84,53,89,128,100,113,101,45]),y.t)
C.aEO=B.a(x([75,79,123,47,51,128,81,171,1]),y.t)
C.ayf=B.a(x([57,17,5,71,102,57,53,41,49]),y.t)
C.aGF=B.a(x([38,33,13,121,57,73,26,1,85]),y.t)
C.aJy=B.a(x([41,10,67,138,77,110,90,47,114]),y.t)
C.aDM=B.a(x([115,21,2,10,102,255,166,23,6]),y.t)
C.aA_=B.a(x([101,29,16,10,85,128,101,196,26]),y.t)
C.aBK=B.a(x([57,18,10,102,102,213,34,20,43]),y.t)
C.aCU=B.a(x([117,20,15,36,163,128,68,1,26]),y.t)
C.aDA=B.a(x([C.aCu,C.aBk,C.aEO,C.ayf,C.aGF,C.aJy,C.aDM,C.aA_,C.aBK,C.aCU]),y.S)
C.aC0=B.a(x([102,61,71,37,34,53,31,243,192]),y.t)
C.aJr=B.a(x([69,60,71,38,73,119,28,222,37]),y.t)
C.aC3=B.a(x([68,45,128,34,1,47,11,245,171]),y.t)
C.aw6=B.a(x([62,17,19,70,146,85,55,62,70]),y.t)
C.aK6=B.a(x([37,43,37,154,100,163,85,160,1]),y.t)
C.aJ8=B.a(x([63,9,92,136,28,64,32,201,85]),y.t)
C.aHP=B.a(x([75,15,9,9,64,255,184,119,16]),y.t)
C.aA9=B.a(x([86,6,28,5,64,255,25,248,1]),y.t)
C.aG4=B.a(x([56,8,17,132,137,255,55,116,128]),y.t)
C.ay2=B.a(x([58,15,20,82,135,57,26,121,40]),y.t)
C.aEs=B.a(x([C.aC0,C.aJr,C.aC3,C.aw6,C.aK6,C.aJ8,C.aHP,C.aA9,C.aG4,C.ay2]),y.S)
C.aET=B.a(x([164,50,31,137,154,133,25,35,218]),y.t)
C.aA8=B.a(x([51,103,44,131,131,123,31,6,158]),y.t)
C.aJ0=B.a(x([86,40,64,135,148,224,45,183,128]),y.t)
C.aDE=B.a(x([22,26,17,131,240,154,14,1,209]),y.t)
C.aza=B.a(x([45,16,21,91,64,222,7,1,197]),y.t)
C.aIA=B.a(x([56,21,39,155,60,138,23,102,213]),y.t)
C.aJR=B.a(x([83,12,13,54,192,255,68,47,28]),y.t)
C.aFf=B.a(x([85,26,85,85,128,128,32,146,171]),y.t)
C.aDq=B.a(x([18,11,7,63,144,171,4,4,246]),y.t)
C.aAk=B.a(x([35,27,10,146,174,171,12,26,128]),y.t)
C.aD8=B.a(x([C.aET,C.aA8,C.aJ0,C.aDE,C.aza,C.aIA,C.aJR,C.aFf,C.aDq,C.aAk]),y.S)
C.aHk=B.a(x([190,80,35,99,180,80,126,54,45]),y.t)
C.aI5=B.a(x([85,126,47,87,176,51,41,20,32]),y.t)
C.aGN=B.a(x([101,75,128,139,118,146,116,128,85]),y.t)
C.aHG=B.a(x([56,41,15,176,236,85,37,9,62]),y.t)
C.aya=B.a(x([71,30,17,119,118,255,17,18,138]),y.t)
C.aEr=B.a(x([101,38,60,138,55,70,43,26,142]),y.t)
C.aDg=B.a(x([146,36,19,30,171,255,97,27,20]),y.t)
C.aFG=B.a(x([138,45,61,62,219,1,81,188,64]),y.t)
C.aIV=B.a(x([32,41,20,117,151,142,20,21,163]),y.t)
C.aI7=B.a(x([112,19,12,61,195,128,48,4,24]),y.t)
C.aH4=B.a(x([C.aHk,C.aI5,C.aGN,C.aHG,C.aya,C.aEr,C.aDg,C.aFG,C.aIV,C.aI7]),y.S)
C.aDT=B.a(x([C.avY,C.aIC,C.aAj,C.aAg,C.aDU,C.aJT,C.aDA,C.aEs,C.aD8,C.aH4]),y.o)
C.yV=new A.oe(0,"none")
C.jz=new A.oe(1,"palette")
C.abr=new A.oe(2,"rgb")
C.bDp=new A.oe(3,"gray")
C.bDq=new A.oe(4,"reserved4")
C.bDr=new A.oe(5,"reserved5")
C.bDs=new A.oe(6,"reserved6")
C.bDt=new A.oe(7,"reserved7")
C.bDu=new A.oe(8,"reserved8")
C.jA=new A.oe(9,"paletteRle")
C.abq=new A.oe(10,"rgbRle")
C.bDo=new A.oe(11,"grayRle")
C.aE2=B.a(x([C.yV,C.jz,C.abr,C.bDp,C.bDq,C.bDr,C.bDs,C.bDt,C.bDu,C.jA,C.abq,C.bDo]),B.B("u<oe>"))
C.Rz=B.a(x([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250]),y.t)
C.aEN=B.a(x([A.dkL(),A.dkS(),A.dkU(),A.dkN(),A.dkQ(),A.dkW(),A.dkP(),A.dkV(),A.dkM(),A.dkO()]),y.y)
C.CP=B.a(x([8,0,8,0]),y.t)
C.ayk=B.a(x([5,3,5,3]),y.t)
C.ax7=B.a(x([3,5,3,5]),y.t)
C.N7=B.a(x([0,8,0,8]),y.t)
C.ND=B.a(x([4,4,4,4]),y.t)
C.axR=B.a(x([4,4,0,0]),y.t)
C.RQ=B.a(x([C.CP,C.ayk,C.ax7,C.N7,C.CP,C.ND,C.axR,C.N7]),y.S)
C.RY=B.a(x([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41]),y.t)
C.aFx=B.a(x([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99]),y.t)
C.vE=B.a(x([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845]),y.t)
C.S2=B.a(x([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127]),y.t)
C.S4=B.a(x([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]),y.t)
C.vM=B.a(x([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567]),y.t)
C.Sh=B.a(x([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232]),y.t)
C.T0=B.a(x([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0]),y.t)
C.brg=new A.D0(0,"none")
C.brh=new A.D0(1,"sub")
C.bri=new A.D0(2,"up")
C.brj=new A.D0(3,"average")
C.brk=new A.D0(4,"paeth")
C.T1=B.a(x([C.brg,C.brh,C.bri,C.brj,C.brk]),B.B("u<D0>"))
C.hN=B.a(x([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]),y.t)
C.ou=B.a(x([0,1,3,7,15,31,63,127,255]),y.t)
C.Dq=B.a(x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),y.t)
C.f2=B.a(x([255,255,255,255,255,255,255,255,255,255,255]),y.t)
C.me=B.a(x([C.f2,C.f2,C.f2]),y.S)
C.aDk=B.a(x([176,246,255,255,255,255,255,255,255,255,255]),y.t)
C.aJF=B.a(x([223,241,252,255,255,255,255,255,255,255,255]),y.t)
C.azF=B.a(x([249,253,253,255,255,255,255,255,255,255,255]),y.t)
C.aDQ=B.a(x([C.aDk,C.aJF,C.azF]),y.S)
C.aCp=B.a(x([255,244,252,255,255,255,255,255,255,255,255]),y.t)
C.aBX=B.a(x([234,254,254,255,255,255,255,255,255,255,255]),y.t)
C.Ui=B.a(x([253,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aA6=B.a(x([C.aCp,C.aBX,C.Ui]),y.S)
C.aJ_=B.a(x([255,246,254,255,255,255,255,255,255,255,255]),y.t)
C.aG_=B.a(x([239,253,254,255,255,255,255,255,255,255,255]),y.t)
C.TG=B.a(x([254,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aHM=B.a(x([C.aJ_,C.aG_,C.TG]),y.S)
C.PV=B.a(x([255,248,254,255,255,255,255,255,255,255,255]),y.t)
C.aAI=B.a(x([251,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aEZ=B.a(x([C.PV,C.aAI,C.f2]),y.S)
C.CJ=B.a(x([255,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aEQ=B.a(x([251,254,254,255,255,255,255,255,255,255,255]),y.t)
C.aB2=B.a(x([C.CJ,C.aEQ,C.TG]),y.S)
C.axA=B.a(x([255,254,253,255,254,255,255,255,255,255,255]),y.t)
C.aCg=B.a(x([250,255,254,255,254,255,255,255,255,255,255]),y.t)
C.vX=B.a(x([254,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aCX=B.a(x([C.axA,C.aCg,C.vX]),y.S)
C.aBJ=B.a(x([C.me,C.aDQ,C.aA6,C.aHM,C.aEZ,C.aB2,C.aCX,C.me]),y.o)
C.awu=B.a(x([217,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aDc=B.a(x([225,252,241,253,255,255,254,255,255,255,255]),y.t)
C.aGQ=B.a(x([234,250,241,250,253,255,253,254,255,255,255]),y.t)
C.aI8=B.a(x([C.awu,C.aDc,C.aGQ]),y.S)
C.Dz=B.a(x([255,254,255,255,255,255,255,255,255,255,255]),y.t)
C.azM=B.a(x([223,254,254,255,255,255,255,255,255,255,255]),y.t)
C.azc=B.a(x([238,253,254,254,255,255,255,255,255,255,255]),y.t)
C.aFU=B.a(x([C.Dz,C.azM,C.azc]),y.S)
C.aC1=B.a(x([249,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aIX=B.a(x([C.PV,C.aC1,C.f2]),y.S)
C.aIf=B.a(x([255,253,255,255,255,255,255,255,255,255,255]),y.t)
C.aEP=B.a(x([247,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aEw=B.a(x([C.aIf,C.aEP,C.f2]),y.S)
C.az0=B.a(x([252,255,255,255,255,255,255,255,255,255,255]),y.t)
C.ax0=B.a(x([C.CJ,C.az0,C.f2]),y.S)
C.Ut=B.a(x([255,254,254,255,255,255,255,255,255,255,255]),y.t)
C.az9=B.a(x([C.Ut,C.Ui,C.f2]),y.S)
C.aFO=B.a(x([255,254,253,255,255,255,255,255,255,255,255]),y.t)
C.Qf=B.a(x([250,255,255,255,255,255,255,255,255,255,255]),y.t)
C.ayX=B.a(x([C.aFO,C.Qf,C.vX]),y.S)
C.axG=B.a(x([C.aI8,C.aFU,C.aIX,C.aEw,C.ax0,C.az9,C.ayX,C.me]),y.o)
C.aH7=B.a(x([186,251,250,255,255,255,255,255,255,255,255]),y.t)
C.aAy=B.a(x([234,251,244,254,255,255,255,255,255,255,255]),y.t)
C.aHO=B.a(x([251,251,243,253,254,255,254,255,255,255,255]),y.t)
C.aAZ=B.a(x([C.aH7,C.aAy,C.aHO]),y.S)
C.aAM=B.a(x([236,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aFM=B.a(x([251,253,253,254,254,255,255,255,255,255,255]),y.t)
C.aCM=B.a(x([C.CJ,C.aAM,C.aFM]),y.S)
C.aHj=B.a(x([254,254,254,255,255,255,255,255,255,255,255]),y.t)
C.aAF=B.a(x([C.Ut,C.aHj,C.f2]),y.S)
C.aHX=B.a(x([254,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aAJ=B.a(x([C.Dz,C.aHX,C.vX]),y.S)
C.Uv=B.a(x([C.f2,C.vX,C.f2]),y.S)
C.axD=B.a(x([C.aAZ,C.aCM,C.aAF,C.aAJ,C.Uv,C.me,C.me,C.me]),y.o)
C.aCb=B.a(x([248,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aBj=B.a(x([250,254,252,254,255,255,255,255,255,255,255]),y.t)
C.aAw=B.a(x([248,254,249,253,255,255,255,255,255,255,255]),y.t)
C.aCR=B.a(x([C.aCb,C.aBj,C.aAw]),y.S)
C.axd=B.a(x([255,253,253,255,255,255,255,255,255,255,255]),y.t)
C.aIs=B.a(x([246,253,253,255,255,255,255,255,255,255,255]),y.t)
C.aB0=B.a(x([252,254,251,254,254,255,255,255,255,255,255]),y.t)
C.aIr=B.a(x([C.axd,C.aIs,C.aB0]),y.S)
C.aJY=B.a(x([255,254,252,255,255,255,255,255,255,255,255]),y.t)
C.aAq=B.a(x([248,254,253,255,255,255,255,255,255,255,255]),y.t)
C.ayW=B.a(x([253,255,254,254,255,255,255,255,255,255,255]),y.t)
C.aF8=B.a(x([C.aJY,C.aAq,C.ayW]),y.S)
C.aJP=B.a(x([255,251,254,255,255,255,255,255,255,255,255]),y.t)
C.aEh=B.a(x([245,251,254,255,255,255,255,255,255,255,255]),y.t)
C.aEq=B.a(x([253,253,254,255,255,255,255,255,255,255,255]),y.t)
C.azy=B.a(x([C.aJP,C.aEh,C.aEq]),y.S)
C.azD=B.a(x([255,251,253,255,255,255,255,255,255,255,255]),y.t)
C.aCt=B.a(x([252,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aHu=B.a(x([C.azD,C.aCt,C.Dz]),y.S)
C.ayy=B.a(x([255,252,255,255,255,255,255,255,255,255,255]),y.t)
C.aJJ=B.a(x([249,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aBt=B.a(x([255,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aw5=B.a(x([C.ayy,C.aJJ,C.aBt]),y.S)
C.aK8=B.a(x([255,255,253,255,255,255,255,255,255,255,255]),y.t)
C.aAH=B.a(x([C.aK8,C.Qf,C.f2]),y.S)
C.ayV=B.a(x([C.aCR,C.aIr,C.aF8,C.azy,C.aHu,C.aw5,C.aAH,C.Uv]),y.o)
C.aI1=B.a(x([C.aBJ,C.axG,C.axD,C.ayV]),y.M)
C.afg=new A.lU(1,"rle8")
C.afl=new A.lU(2,"rle4")
C.afm=new A.lU(4,"jpeg")
C.afn=new A.lU(5,"png")
C.afo=new A.lU(7,"reserved7")
C.afp=new A.lU(8,"reserved8")
C.afq=new A.lU(9,"reserved9")
C.afh=new A.lU(10,"reserved10")
C.afi=new A.lU(11,"cmyk")
C.afj=new A.lU(12,"cmykRle8")
C.afk=new A.lU(13,"cmykRle4")
C.TJ=B.a(x([C.In,C.afg,C.afl,C.An,C.afm,C.afn,C.Ao,C.afo,C.afp,C.afq,C.afh,C.afi,C.afj,C.afk]),B.B("u<lU>"))
C.Dr=B.a(x([0,128,192,224,240,248,252,254,255]),y.t)
C.Ds=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295]),y.t)
C.aIo=B.a(x([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),y.t)
C.aIv=B.a(x([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),y.t)
C.acm=new A.L4(0,"predictor")
C.bGI=new A.L4(1,"crossColor")
C.bGJ=new A.L4(2,"subtractGreen")
C.acn=new A.L4(3,"colorIndexing")
C.aIK=B.a(x([C.acm,C.bGI,C.bGJ,C.acn]),B.B("u<L4>"))
C.f3=B.a(x([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255]),y.t)
C.aJm=B.a(x([A.dkX(),A.dkR(),A.dl6(),A.dl4(),A.dkZ(),A.dkY(),A.dl_()]),y.y)
C.UG=B.a(x([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396]),y.t)
C.aJu=B.a(x([null,A.dln(),A.dlo(),A.dlm()]),B.B("u<~(f,f,f,f,f,dJ)?>"))
C.UQ=B.a(x([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),y.t)
C.xa=B.a(x([0,36,72,109,145,182,218,255]),y.t)
C.h6=B.a(x([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255]),y.t)
C.aJH=B.a(x([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),y.t)
C.kh=B.a(x([0,1,1,2,4,8,1,1,2,4,8,4,8]),y.t)
C.brE=new A.uA(0,"bitmap")
C.a8H=new A.uA(1,"grayscale")
C.brF=new A.uA(2,"indexed")
C.a8I=new A.uA(3,"rgb")
C.a8J=new A.uA(4,"cmyk")
C.brG=new A.uA(5,"multiChannel")
C.brH=new A.uA(6,"duoTone")
C.a8K=new A.uA(7,"lab")
C.aJI=B.a(x([C.brE,C.a8H,C.brF,C.a8I,C.a8J,C.brG,C.brH,C.a8K]),B.B("u<uA>"))
C.aJU=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),y.t)
C.xk=B.a(x([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),y.t)
C.Vo=B.a(x([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0]),y.t)
C.awQ=B.a(x([2,6,2,6]),y.t)
C.ayK=B.a(x([6,2,6,2]),y.t)
C.awJ=B.a(x([2,2,6,6]),y.t)
C.awn=B.a(x([1,3,3,9]),y.t)
C.axI=B.a(x([4,0,12,0]),y.t)
C.ax5=B.a(x([3,1,9,3]),y.t)
C.azr=B.a(x([8,8,0,0]),y.t)
C.axK=B.a(x([4,12,0,0]),y.t)
C.aw8=B.a(x([16,0,0,0]),y.t)
C.aw3=B.a(x([12,4,0,0]),y.t)
C.ayU=B.a(x([6,6,2,2]),y.t)
C.ax8=B.a(x([3,9,1,3]),y.t)
C.aw2=B.a(x([12,0,4,0]),y.t)
C.azE=B.a(x([9,3,3,1]),y.t)
C.dp=B.a(x([C.ND,C.awQ,C.CP,C.ayK,C.awJ,C.awn,C.axI,C.ax5,C.azr,C.axK,C.aw8,C.aw3,C.ayU,C.ax8,C.aw2,C.azE]),y.S)
C.mf=B.a(x([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1]),y.t)
C.blK={ProcessingSoftware:0,SubfileType:1,OldSubfileType:2,ImageWidth:3,ImageLength:4,ImageHeight:5,BitsPerSample:6,Compression:7,PhotometricInterpretation:8,Thresholding:9,CellWidth:10,CellLength:11,FillOrder:12,DocumentName:13,ImageDescription:14,Make:15,Model:16,StripOffsets:17,Orientation:18,SamplesPerPixel:19,RowsPerStrip:20,StripByteCounts:21,MinSampleValue:22,MaxSampleValue:23,XResolution:24,YResolution:25,PlanarConfiguration:26,PageName:27,XPosition:28,YPosition:29,GrayResponseUnit:30,GrayResponseCurve:31,T4Options:32,T6Options:33,ResolutionUnit:34,PageNumber:35,ColorResponseUnit:36,TransferFunction:37,Software:38,DateTime:39,Artist:40,HostComputer:41,Predictor:42,WhitePoint:43,PrimaryChromaticities:44,ColorMap:45,HalftoneHints:46,TileWidth:47,TileLength:48,TileOffsets:49,TileByteCounts:50,BadFaxLines:51,CleanFaxData:52,ConsecutiveBadFaxLines:53,InkSet:54,InkNames:55,NumberofInks:56,DotRange:57,TargetPrinter:58,ExtraSamples:59,SampleFormat:60,SMinSampleValue:61,SMaxSampleValue:62,TransferRange:63,ClipPath:64,JPEGProc:65,JPEGInterchangeFormat:66,JPEGInterchangeFormatLength:67,YCbCrCoefficients:68,YCbCrSubSampling:69,YCbCrPositioning:70,ReferenceBlackWhite:71,ApplicationNotes:72,Rating:73,CFARepeatPatternDim:74,CFAPattern:75,BatteryLevel:76,Copyright:77,ExposureTime:78,FNumber:79,"IPTC-NAA":80,ExifOffset:81,InterColorProfile:82,ExposureProgram:83,SpectralSensitivity:84,GPSOffset:85,ISOSpeed:86,OECF:87,SensitivityType:88,RecommendedExposureIndex:89,ExifVersion:90,DateTimeOriginal:91,DateTimeDigitized:92,OffsetTime:93,OffsetTimeOriginal:94,OffsetTimeDigitized:95,ComponentsConfiguration:96,CompressedBitsPerPixel:97,ShutterSpeedValue:98,ApertureValue:99,BrightnessValue:100,ExposureBiasValue:101,MaxApertureValue:102,SubjectDistance:103,MeteringMode:104,LightSource:105,Flash:106,FocalLength:107,SubjectArea:108,MakerNote:109,UserComment:110,SubSecTime:111,SubSecTimeOriginal:112,SubSecTimeDigitized:113,XPTitle:114,XPComment:115,XPAuthor:116,XPKeywords:117,XPSubject:118,FlashPixVersion:119,ColorSpace:120,ExifImageWidth:121,ExifImageLength:122,RelatedSoundFile:123,InteroperabilityOffset:124,FlashEnergy:125,SpatialFrequencyResponse:126,FocalPlaneXResolution:127,FocalPlaneYResolution:128,FocalPlaneResolutionUnit:129,SubjectLocation:130,ExposureIndex:131,SensingMethod:132,FileSource:133,SceneType:134,CVAPattern:135,CustomRendered:136,ExposureMode:137,WhiteBalance:138,DigitalZoomRatio:139,FocalLengthIn35mmFilm:140,SceneCaptureType:141,GainControl:142,Contrast:143,Saturation:144,Sharpness:145,DeviceSettingDescription:146,SubjectDistanceRange:147,ImageUniqueID:148,CameraOwnerName:149,BodySerialNumber:150,LensSpecification:151,LensMake:152,LensModel:153,LensSerialNumber:154,Gamma:155,PrintIM:156,Padding:157,OffsetSchema:158,OwnerName:159,SerialNumber:160,InteropIndex:161,InteropVersion:162,RelatedImageFileFormat:163,RelatedImageWidth:164,RelatedImageLength:165,GPSVersionID:166,GPSLatitudeRef:167,GPSLatitude:168,GPSLongitudeRef:169,GPSLongitude:170,GPSAltitudeRef:171,GPSAltitude:172,GPSTimeStamp:173,GPSSatellites:174,GPSStatus:175,GPSMeasureMode:176,GPSDOP:177,GPSSpeedRef:178,GPSSpeed:179,GPSTrackRef:180,GPSTrack:181,GPSImgDirectionRef:182,GPSImgDirection:183,GPSMapDatum:184,GPSDestLatitudeRef:185,GPSDestLatitude:186,GPSDestLongitudeRef:187,GPSDestLongitude:188,GPSDestBearingRef:189,GPSDestBearing:190,GPSDestDistanceRef:191,GPSDestDistance:192,GPSProcessingMethod:193,GPSAreaInformation:194,GPSDate:195,GPSDifferential:196}
C.a_I=new B.J(C.blK,[11,254,255,256,257,257,258,259,262,263,264,265,266,269,270,271,272,273,274,277,278,279,280,281,282,283,284,285,286,287,290,291,292,293,296,297,300,301,305,306,315,316,317,318,319,320,321,322,323,324,325,326,327,328,332,333,334,336,337,338,339,340,341,342,343,512,513,514,529,530,531,532,700,18246,33421,33422,33423,33432,33434,33437,33723,34665,34675,34850,34852,34853,34855,34856,34864,34866,36864,36867,36868,36880,36881,36882,37121,37122,37377,37378,37379,37380,37381,37382,37383,37384,37385,37386,37396,37500,37510,37520,37521,37522,40091,40092,40093,40094,40095,40960,40961,40962,40963,40964,40965,41483,41484,41486,41487,41488,41492,41493,41495,41728,41729,41730,41985,41986,41987,41988,41989,41990,41991,41992,41993,41994,41995,41996,42016,42032,42033,42034,42035,42036,42037,42240,50341,59932,59933,65e3,65001,1,2,4096,4097,4098,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],B.B("J<h,f>"))
C.Ee=new B.c([34665,"exif",40965,"interop",34853,"gps"],B.B("c<f,h>"))
C.a3l=new B.c([C.fS,1,C.hI,3,C.hJ,15,C.ab,255,C.cy,65535,C.k3,4294967295,C.lH,127,C.lI,32767,C.lJ,2147483647,C.iv,1,C.k2,1,C.lG,1],B.B("c<nK,f>"))
C.brl=new A.awZ(0,"none")
C.brm=new A.awZ(4,"paeth")
C.p9=new A.D1(0,"invalid")
C.a8q=new A.D1(1,"pbm")
C.a8r=new A.D1(2,"pgm2")
C.Fc=new A.D1(3,"pgm5")
C.a8s=new A.D1(4,"ppm3")
C.Fd=new A.D1(5,"ppm6")
C.btp=new A.bx_(0,"origin")
C.GO=new A.t_(0,"bilevel")
C.bDz=new A.t_(1,"gray4bit")
C.bDA=new A.t_(2,"gray")
C.bDB=new A.t_(3,"grayAlpha")
C.bDC=new A.t_(4,"palette")
C.abt=new A.t_(5,"rgb")
C.bDD=new A.t_(6,"rgba")
C.bDE=new A.t_(7,"yCbCrSub")
C.pF=new A.t_(8,"generic")
C.bDF=new A.t_(9,"invalid")
C.pO=new A.Tw(0,"undefined")
C.Hl=new A.Tw(1,"lossy")
C.z8=new A.Tw(2,"lossless")
C.bH8=new A.Tw(3,"animated")
C.zg=new A.TY(0,"none")
C.bJy=new A.TY(1,"partial")
C.bJz=new A.TY(2,"full")
C.pQ=new A.TY(3,"finish")})();(function staticFields(){$.vN=B.bM("_config")
$.cze=!0
$.cw4=null
$.cI6=!1
$.cI7=B.a([A.cxs(),A.dl8(),A.dld(),A.dle(),A.dlf(),A.dlg(),A.dlh(),A.dli(),A.dlj(),A.dlk(),A.dl9(),A.dla(),A.dlb(),A.dlc(),A.cxs(),A.cxs()],B.B("u<f(qL,f,f)>"))
$.hU=null
$.cC0=B.bM("_eLut")})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazy
x($,"dry","cQd",()=>A.cvJ(C.uh,C.Nh,257,286,15))
x($,"drx","cQc",()=>A.cvJ(C.PR,C.u2,0,30,15))
x($,"drw","cQb",()=>A.cvJ(null,C.awT,0,19,7))
x($,"dmn","aWc",()=>$.hx().gmV(0))
x($,"duJ","cqF",()=>{var v=null,u="ISOSpeed"
return B.z([11,A.aM("ProcessingSoftware",C.bJ,v),254,A.aM("SubfileType",C.d4,1),255,A.aM("OldSubfileType",C.d4,1),256,A.aM("ImageWidth",C.d4,1),257,A.aM("ImageLength",C.d4,1),258,A.aM("BitsPerSample",C.bq,1),259,A.aM("Compression",C.bq,1),262,A.aM("PhotometricInterpretation",C.bq,1),263,A.aM("Thresholding",C.bq,1),264,A.aM("CellWidth",C.bq,1),265,A.aM("CellLength",C.bq,1),266,A.aM("FillOrder",C.bq,1),269,A.aM("DocumentName",C.bJ,v),270,A.aM("ImageDescription",C.bJ,v),271,A.aM("Make",C.bJ,v),272,A.aM("Model",C.bJ,v),273,A.aM("StripOffsets",C.d4,v),274,A.aM("Orientation",C.bq,1),277,A.aM("SamplesPerPixel",C.bq,1),278,A.aM("RowsPerStrip",C.d4,1),279,A.aM("StripByteCounts",C.d4,1),280,A.aM("MinSampleValue",C.bq,1),281,A.aM("MaxSampleValue",C.bq,1),282,A.aM("XResolution",C.es,1),283,A.aM("YResolution",C.es,1),284,A.aM("PlanarConfiguration",C.bq,1),285,A.aM("PageName",C.bJ,v),286,A.aM("XPosition",C.es,1),287,A.aM("YPosition",C.es,1),290,A.aM("GrayResponseUnit",C.bq,1),291,A.aM("GrayResponseCurve",C.a0,v),292,A.aM("T4Options",C.a0,v),293,A.aM("T6Options",C.a0,v),296,A.aM("ResolutionUnit",C.bq,1),297,A.aM("PageNumber",C.bq,2),300,A.aM("ColorResponseUnit",C.a0,v),301,A.aM("TransferFunction",C.bq,768),305,A.aM("Software",C.bJ,v),306,A.aM("DateTime",C.bJ,v),315,A.aM("Artist",C.bJ,v),316,A.aM("HostComputer",C.bJ,v),317,A.aM("Predictor",C.bq,1),318,A.aM("WhitePoint",C.es,2),319,A.aM("PrimaryChromaticities",C.es,6),320,A.aM("ColorMap",C.bq,v),321,A.aM("HalftoneHints",C.bq,2),322,A.aM("TileWidth",C.d4,1),323,A.aM("TileLength",C.d4,1),324,A.aM("TileOffsets",C.d4,v),325,A.aM("TileByteCounts",C.a0,v),326,A.aM("BadFaxLines",C.a0,v),327,A.aM("CleanFaxData",C.a0,v),328,A.aM("ConsecutiveBadFaxLines",C.a0,v),332,A.aM("InkSet",C.a0,v),333,A.aM("InkNames",C.a0,v),334,A.aM("NumberofInks",C.a0,v),336,A.aM("DotRange",C.a0,v),337,A.aM("TargetPrinter",C.bJ,v),338,A.aM("ExtraSamples",C.a0,v),339,A.aM("SampleFormat",C.bq,1),340,A.aM("SMinSampleValue",C.a0,v),341,A.aM("SMaxSampleValue",C.a0,v),342,A.aM("TransferRange",C.a0,v),343,A.aM("ClipPath",C.a0,v),512,A.aM("JPEGProc",C.a0,v),513,A.aM("JPEGInterchangeFormat",C.a0,v),514,A.aM("JPEGInterchangeFormatLength",C.a0,v),529,A.aM("YCbCrCoefficients",C.es,3),530,A.aM("YCbCrSubSampling",C.bq,1),531,A.aM("YCbCrPositioning",C.bq,1),532,A.aM("ReferenceBlackWhite",C.es,6),700,A.aM("ApplicationNotes",C.bq,1),18246,A.aM("Rating",C.bq,1),33421,A.aM("CFARepeatPatternDim",C.a0,v),33422,A.aM("CFAPattern",C.a0,v),33423,A.aM("BatteryLevel",C.a0,v),33432,A.aM("Copyright",C.bJ,v),33434,A.aM("ExposureTime",C.es,1),33437,A.aM("FNumber",C.es,v),33723,A.aM("IPTC-NAA",C.d4,1),34665,A.aM("ExifOffset",C.a0,v),34675,A.aM("InterColorProfile",C.a0,v),34850,A.aM("ExposureProgram",C.bq,1),34852,A.aM("SpectralSensitivity",C.bJ,v),34853,A.aM("GPSOffset",C.a0,v),34855,A.aM(u,C.d4,1),34856,A.aM("OECF",C.a0,v),34864,A.aM("SensitivityType",C.bq,1),34866,A.aM("RecommendedExposureIndex",C.d4,1),34867,A.aM(u,C.d4,1),36864,A.aM("ExifVersion",C.iy,v),36867,A.aM("DateTimeOriginal",C.bJ,v),36868,A.aM("DateTimeDigitized",C.bJ,v),36880,A.aM("OffsetTime",C.bJ,v),36881,A.aM("OffsetTimeOriginal",C.bJ,v),36882,A.aM("OffsetTimeDigitized",C.bJ,v),37121,A.aM("ComponentsConfiguration",C.iy,v),37122,A.aM("CompressedBitsPerPixel",C.a0,v),37377,A.aM("ShutterSpeedValue",C.a0,v),37378,A.aM("ApertureValue",C.a0,v),37379,A.aM("BrightnessValue",C.a0,v),37380,A.aM("ExposureBiasValue",C.a0,v),37381,A.aM("MaxApertureValue",C.a0,v),37382,A.aM("SubjectDistance",C.a0,v),37383,A.aM("MeteringMode",C.a0,v),37384,A.aM("LightSource",C.a0,v),37385,A.aM("Flash",C.a0,v),37386,A.aM("FocalLength",C.a0,v),37396,A.aM("SubjectArea",C.a0,v),37500,A.aM("MakerNote",C.iy,v),37510,A.aM("UserComment",C.iy,v),37520,A.aM("SubSecTime",C.a0,v),37521,A.aM("SubSecTimeOriginal",C.a0,v),37522,A.aM("SubSecTimeDigitized",C.a0,v),40091,A.aM("XPTitle",C.a0,v),40092,A.aM("XPComment",C.a0,v),40093,A.aM("XPAuthor",C.a0,v),40094,A.aM("XPKeywords",C.a0,v),40095,A.aM("XPSubject",C.a0,v),40960,A.aM("FlashPixVersion",C.a0,v),40961,A.aM("ColorSpace",C.bq,1),40962,A.aM("ExifImageWidth",C.bq,1),40963,A.aM("ExifImageLength",C.bq,1),40964,A.aM("RelatedSoundFile",C.a0,v),40965,A.aM("InteroperabilityOffset",C.a0,v),41483,A.aM("FlashEnergy",C.a0,v),41484,A.aM("SpatialFrequencyResponse",C.a0,v),41486,A.aM("FocalPlaneXResolution",C.a0,v),41487,A.aM("FocalPlaneYResolution",C.a0,v),41488,A.aM("FocalPlaneResolutionUnit",C.a0,v),41492,A.aM("SubjectLocation",C.a0,v),41493,A.aM("ExposureIndex",C.a0,v),41495,A.aM("SensingMethod",C.a0,v),41728,A.aM("FileSource",C.a0,v),41729,A.aM("SceneType",C.a0,v),41730,A.aM("CVAPattern",C.a0,v),41985,A.aM("CustomRendered",C.a0,v),41986,A.aM("ExposureMode",C.a0,v),41987,A.aM("WhiteBalance",C.a0,v),41988,A.aM("DigitalZoomRatio",C.a0,v),41989,A.aM("FocalLengthIn35mmFilm",C.a0,v),41990,A.aM("SceneCaptureType",C.a0,v),41991,A.aM("GainControl",C.a0,v),41992,A.aM("Contrast",C.a0,v),41993,A.aM("Saturation",C.a0,v),41994,A.aM("Sharpness",C.a0,v),41995,A.aM("DeviceSettingDescription",C.a0,v),41996,A.aM("SubjectDistanceRange",C.a0,v),42016,A.aM("ImageUniqueID",C.a0,v),42032,A.aM("CameraOwnerName",C.bJ,v),42033,A.aM("BodySerialNumber",C.bJ,v),42034,A.aM("LensSpecification",C.a0,v),42035,A.aM("LensMake",C.bJ,v),42036,A.aM("LensModel",C.bJ,v),42037,A.aM("LensSerialNumber",C.bJ,v),42240,A.aM("Gamma",C.es,1),50341,A.aM("PrintIM",C.a0,v),59932,A.aM("Padding",C.a0,v),59933,A.aM("OffsetSchema",C.a0,v),65e3,A.aM("OwnerName",C.bJ,v),65001,A.aM("SerialNumber",C.bJ,v)],y.p,B.B("aoR"))})
w($,"dqF","aWn",()=>B.CC(511))
w($,"dqG","cqu",()=>B.CC(511))
w($,"dqI","cqv",()=>A.cEl(2041))
w($,"dqJ","aWo",()=>A.cEl(225))
w($,"dqH","pP",()=>B.CC(766))
x($,"doU","cOJ",()=>A.cD2(0,0,0))
x($,"ds1","nq",()=>B.CC(1))
x($,"ds2","ox",()=>A.cZn(D.D.gaj($.nq()),0,null))
x($,"drV","np",()=>E.d0_(1))
x($,"drW","ow",()=>J.cSz(D.ea.gaj($.np()),0,null))
x($,"drX","hy",()=>B.d02(1))
x($,"drZ","kL",()=>J.aWB(D.by.gaj($.hy()),0,null))
x($,"drY","Fz",()=>A.cXF(D.by.gaj($.hy())))
x($,"drT","aWq",()=>B.ctl(1))
x($,"drU","cqx",()=>A.cHR(D.cG.gaj($.aWq()),0))
x($,"drR","cyi",()=>B.bqp(1))
x($,"drS","cQu",()=>A.cHR(D.fy.gaj($.cyi()),0))
x($,"ds_","cyj",()=>A.d5y(1))
x($,"ds0","cQv",()=>{var v=$.cyj()
return A.cXG(v.gaj(v))})})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_209",e:"endPart",h:b})})($__dart_deferred_initializers__,"Yl/bvZgcUmTS6nDIo6rXyZmw6Us=");