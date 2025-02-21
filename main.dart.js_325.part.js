((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_325",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,M,N,O,P,H,Q,R,S,F,T,U,I,V,E,K,A={
VJ(d){return new A.ahs(d,null,null)},
ahs:function ahs(d,e,f){this.a=d
this.b=e
this.c=f},
BL(d,e,f,g){var x,w
if(y.ah.b(d))x=J.d_(J.agM(d),d.byteOffset,d.byteLength)
else x=y.L.b(d)?d:B.b2(y.R.a(d),!0,y.p)
w=new A.bg4(x,g,g,e)
w.e=f==null?x.length:f
return w},
bg5:function bg5(){},
bg4:function bg4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
clH(d,e){var x=e==null?32768:e
return new A.boR(d,new Uint8Array(x))},
boS:function boS(){},
boR:function boR(d,e){this.a=0
this.b=d
this.c=e},
ced:function ced(){},
csS(d,e,f,g){var x=d[e*2],w=d[f*2]
if(x>=w)x=x===w&&g[e]<=g[f]
else x=!0
return x},
cnD(){return new A.bX0()},
d_w(d,e,f){var x,w,v,u,t,s,r,q=new Uint16Array(16)
for(x=0,w=1;w<=15;++w){x=x+f[w-1]<<1>>>0
q[w]=x}for(v=d.$flags|0,u=0;u<=e;++u){t=u*2
s=d[t+1]
if(s===0)continue
r=q[s]
q[s]=r+1
r=A.d_x(r,s)
v&2&&B.A(d)
d[t]=r}},
d_x(d,e){var x,w=0
do{x=A.pq(d,1)
w=(w|d&1)<<1>>>0
if(--e,e>0){d=x
continue}else break}while(!0)
return A.pq(w,1)},
cAu(d){return d<256?C.Lk[d]:C.Lk[256+A.pq(d,7)]},
cnP(d,e,f,g,h){return new A.c8s(d,e,f,g,h)},
pq(d,e){if(d>=0)return D.c.nW(d,e)
else return D.c.nW(d,e)+D.c.eq(2,(~e>>>0)+65536&65535)},
b4q:function b4q(d,e,f,g,h,i,j,k){var _=this
_.b=_.a=0
_.c=d
_.d=e
_.e=null
_.x=_.w=_.r=_.f=$
_.y=2
_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=$
_.k2=0
_.p4=_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=$
_.R8=f
_.RG=g
_.rx=h
_.ry=i
_.to=j
_.x2=_.x1=$
_.xr=k
_.X=_.E=_.cN=_.bU=_.b_=_.av=_.bW=_.bs=_.y2=_.y1=$},
rV:function rV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bX0:function bX0(){this.c=this.b=this.a=$},
c8s:function c8s(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
apC(d){var x=new A.beE()
x.aSB(d)
return x},
beE:function beE(){this.a=$
this.b=0
this.c=2147483647},
bfJ:function bfJ(d,e,f,g){var _=this
_.a=d
_.b=!1
_.c=e
_.e=_.d=0
_.r=f
_.w=g},
bJk:function bJk(){},
bJj:function bJj(){},
bJl:function bJl(){},
cQI(d,e){return new A.Bt(d,e)},
Bt:function Bt(d,e){this.c=d
this.a=e},
aa0:function aa0(d){var _=this
_.e=null
_.x=_.w=_.r=_.f=!1
_.y=null
_.z=0
_.Q=d
_.as=$
_.c=_.a=null},
bWD:function bWD(d){this.a=d},
bWA:function bWA(d){this.a=d},
bWB:function bWB(d){this.a=d},
bWC:function bWC(d){this.a=d},
bWG:function bWG(d){this.a=d},
bWH:function bWH(){},
bWF:function bWF(d){this.a=d},
bWI:function bWI(d){this.a=d},
bWJ:function bWJ(d){this.a=d},
bWE:function bWE(d){this.a=d},
bWK:function bWK(d){this.a=d},
bfd(d,e){var x=0,w=B.l(y.D),v
var $async$bfd=B.h(function(f,g){if(f===1)return B.i(g,w)
while(true)switch(x){case 0:x=3
return B.c(A.Op(d,e,"jpg",new A.bfe(d,e,85),85),$async$bfd)
case 3:v=g
x=1
break
case 1:return B.j(v,w)}})
return B.k($async$bfd,w)},
bff(d,e){var x=0,w=B.l(y.D),v
var $async$bff=B.h(function(f,g){if(f===1)return B.i(g,w)
while(true)switch(x){case 0:x=3
return B.c(A.Op(d,e,"png",new A.bfg(d,e),null),$async$bff)
case 3:v=g
x=1
break
case 1:return B.j(v,w)}})
return B.k($async$bff,w)},
Op(d,e,f,g,h){return A.cQZ(d,e,f,g,h)},
cQZ(d,e,f,g,h){var x=0,w=B.l(y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j
var $async$Op=B.h(function(i,a0){if(i===1){t.push(a0)
x=u}while(true)switch(x){case 0:if(!$.crf){v=g.$0()
x=1
break}m=$.hk().b
m===$&&B.b()
r=m
q="uploads/"+Date.now()+"."+f
u=4
m=r.as
m===$&&B.b()
x=7
return B.c(m.bX("images-temp").QJ(q,d),$async$Op)
case 7:p=a0
if(J.bk(p)===0){m=g.$0()
v=m
x=1
break}u=9
m=r.as
m===$&&B.b()
x=12
return B.c(m.bX("images-temp").XO(0,q,new A.bGg(e,C.aVT,h,C.aVS)),$async$Op)
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
m=B.ae(k)
if(m instanceof B.RF){n=m
if(n.c==="403")$.crf=!1
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
return B.c(m.bX("images-temp").K(0,B.a([q],y.s)),$async$Op)
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
return B.k($async$Op,w)},
cuU(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n=null,m=A.cDy(d)
if(m==null)throw B.f(B.cA("Failed to decode "+f+" image"))
x=A.d5Z(m,e)
if(f==="jpg"){w=g==null?85:g
v=new Uint8Array(64)
u=new Uint8Array(64)
t=new Float32Array(64)
s=new Float32Array(64)
r=B.bI(65535,n,!1,y.cl)
q=y.u
p=B.bI(65535,n,!1,q)
o=B.bI(64,n,!1,q)
q=B.bI(64,n,!1,q)
v=new A.bgK(v,u,t,s,r,p,o,q,new Int32Array(2048))
v.e=v.SY(C.Sh,C.qe)
v.f=v.SY(C.N8,C.qe)
v.r=v.SY(C.Kc,C.Lw)
v.w=v.SY(C.LY,C.Or)
v.b9t()
v.b9F()
v.aKn(w)
return new Uint8Array(B.bU(v.bxl(x,C.JL)))}else if(f==="png")return new Uint8Array(B.bU(new A.brD(C.aTP,6).bxm(x,!1)))
else throw B.f(B.cA("Unsupported image format: "+f))},
bfe:function bfe(d,e,f){this.a=d
this.b=e
this.c=f},
bfg:function bfg(d,e){this.a=d
this.b=e},
aZA:function aZA(d,e){this.a=d
this.b=e},
hq:function hq(d){this.a=-1
this.b=d},
Mv:function Mv(d){this.a=d},
Mw:function Mw(d){this.a=d},
Mx:function Mx(d){this.a=d},
My:function My(d){this.a=d},
Mz:function Mz(d){this.a=d},
MA:function MA(d){this.a=d},
MD:function MD(d,e){this.a=d
this.b=e},
ME:function ME(d){this.a=d},
MF:function MF(d,e){this.a=d
this.b=e},
MG:function MG(d){this.a=d},
MH:function MH(d,e){this.a=d
this.b=e},
cMA(d,e,f,g){var x=new A.MB(new Uint8Array(4))
x.aSo(d,e,f,g)
return x},
xv:function xv(d){this.a=d},
ajc:function ajc(d){this.a=d},
MB:function MB(d){this.a=d},
aTy(d,e,f){var x
if(e===f)return d
switch(e.a){case 0:if(d===0)x=0
else{x=C.XM.i(0,f)
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
case 1:return D.c.P(B.b8(d),1)
case 2:return d
case 3:return d*17
case 4:return d*4369
case 5:return d*286331153
case 6:return d*8
case 7:return d*2184
case 8:return d*143165576
case 9:case 10:case 11:return d/3}break
case 3:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.P(B.b8(d),6)
case 2:return D.c.P(B.b8(d),4)
case 3:return d
case 4:return d*257
case 5:return d*16843009
case 6:return D.c.P(B.b8(d),1)
case 7:return d*128
case 8:return d*8421504
case 9:case 10:case 11:return d/255}break
case 4:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.P(B.b8(d),14)
case 2:return D.c.P(B.b8(d),12)
case 3:return D.c.P(B.b8(d),8)
case 4:return d
case 5:return B.b8(d)<<8>>>0
case 6:return D.c.P(B.b8(d),9)
case 7:return D.c.P(B.b8(d),1)
case 8:return d*524296
case 9:case 10:case 11:return d/65535}break
case 5:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.P(B.b8(d),30)
case 2:return D.c.P(B.b8(d),28)
case 3:return D.c.P(B.b8(d),24)
case 4:return D.c.P(B.b8(d),16)
case 5:return d
case 6:return D.c.P(B.b8(d),25)
case 7:return D.c.P(B.b8(d),17)
case 8:return D.c.P(B.b8(d),1)
case 9:case 10:case 11:return d/4294967295}break
case 6:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.P(B.b8(d),5)
case 2:return d<=0?0:D.c.P(B.b8(d),3)
case 3:return d<=0?0:B.b8(d)<<1>>>0
case 4:return d<=0?0:B.b8(d)*516
case 5:return d<=0?0:B.b8(d)*33818640
case 6:return d
case 7:return d*258
case 8:return d*16909320
case 9:case 10:case 11:return d/127}break
case 7:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.P(B.b8(d),15)
case 2:return d<=0?0:D.c.P(B.b8(d),11)
case 3:return d<=0?0:D.c.P(B.b8(d),7)
case 4:return d<=0?0:B.b8(d)<<1>>>0
case 5:return d<=0?0:B.b8(d)*131076
case 6:return D.c.P(B.b8(d),8)
case 7:return d
case 8:return B.b8(d)*65538
case 9:case 10:case 11:return d/32767}break
case 8:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.P(B.b8(d),29)
case 2:return d<=0?0:D.c.P(B.b8(d),27)
case 3:return d<=0?0:D.c.P(B.b8(d),23)
case 4:return d<=0?0:D.c.P(B.b8(d),16)
case 5:return d<=0?0:B.b8(d)<<1>>>0
case 6:return D.c.P(B.b8(d),24)
case 7:return D.c.P(B.b8(d),16)
case 8:return d
case 9:case 10:case 11:return d/2147483647}break
case 9:case 10:case 11:switch(f.a){case 0:return d===0?0:1
case 1:return D.d.D(D.d.bc(d,0,1)*3)
case 2:return D.d.D(D.d.bc(d,0,1)*15)
case 3:return D.d.D(D.d.bc(d,0,1)*255)
case 4:return D.d.D(D.d.bc(d,0,1)*65535)
case 5:return D.d.D(D.d.bc(d,0,1)*4294967295)
case 6:return D.d.D(d<0?D.d.bc(d,-1,1)*128:D.d.bc(d,-1,1)*127)
case 7:return D.d.D(d<0?D.d.bc(d,-1,1)*32768:D.d.bc(d,-1,1)*32767)
case 8:return D.d.D(d<0?D.d.bc(d,-1,1)*2147483648:D.d.bc(d,-1,1)*2147483647)
case 9:case 10:case 11:return d}break}},
nq:function nq(d,e){this.a=d
this.b=e},
aif:function aif(d,e){this.a=d
this.b=e},
YX(d){var x=new A.NO(B.H(y.N,y.P))
x.aSC(d)
return x},
ctQ(d){var x=new A.NO(B.H(y.N,y.P))
x.qe(0,d)
return x},
NO:function NO(d){this.a=d},
aI2:function aI2(d,e){this.a=d
this.b=e},
aG(d,e,f){return new A.anj(d,e)},
anj:function anj(d,e){this.a=d
this.b=e},
tM:function tM(d){this.a=d},
bf6:function bf6(d){this.a=d},
cuJ(d){var x=new A.pP(B.H(y.p,y.r),new A.tM(B.H(y.N,y.P)))
x.btA(d)
return x},
pP:function pP(d,e){this.a=d
this.b=e},
bf7:function bf7(d){this.a=d},
bf8:function bf8(d){this.a=d},
cQX(d){var x=new Uint16Array(1)
x[0]=d
return new A.y9(x)},
cuR(d,e){var x=new A.y9(new Uint16Array(e))
x.aSH(d,e)
return x},
cQW(d){var x=new Uint32Array(1)
x[0]=d
return new A.r0(x)},
cuM(d,e){var x=new A.r0(new Uint32Array(e))
x.aSE(d,e)
return x},
cuN(d,e){var x,w=J.kj(e,y.i)
for(x=0;x<e;++x)w[x]=new A.nK(d.an(),d.an())
return new A.tN(w)},
cuQ(d,e){var x=new A.y8(new Int16Array(e))
x.aSG(d,e)
return x},
cuO(d,e){var x=new A.y7(new Int32Array(e))
x.aSF(d,e)
return x},
cuP(d,e){var x,w,v,u,t=J.kj(e,y.i)
for(x=0;x<e;++x){w=d.an()
v=$.hP()
v.$flags&2&&B.A(v)
v[0]=w
w=$.lv()
u=w[0]
v[0]=d.an()
t[x]=new A.nK(u,w[0])}return new A.tO(t)},
cuS(d){var x=new Float32Array(1)
x[0]=d
return new A.Bz(x)},
cuT(d,e){var x=new A.Bz(new Float32Array(e))
x.aSI(d,e)
return x},
cuK(d){var x=new Float64Array(1)
x[0]=d
return new A.By(x)},
cuL(d,e){var x=new A.By(new Float64Array(e))
x.aSD(d,e)
return x},
mD:function mD(d,e){this.a=d
this.b=e},
jU:function jU(){},
tL:function tL(d){this.a=d},
Bx:function Bx(d){this.a=d},
y9:function y9(d){this.a=d},
r0:function r0(d){this.a=d},
tN:function tN(d){this.a=d},
vI:function vI(d){this.a=d},
y8:function y8(d){this.a=d},
y7:function y7(d){this.a=d},
tO:function tO(d){this.a=d},
Bz:function Bz(d){this.a=d},
By:function By(d){this.a=d},
H0:function H0(d){this.a=d},
crG(d){var x,w,v=new A.aYl()
if(!A.cjG(d))B.a4(A.c4("Not a bitmap file."))
d.d+=2
x=d.an()
w=$.hP()
w.$flags&2&&B.A(w)
w[0]=x
x=$.lv()
d.d+=4
w[0]=d.an()
v.b=x[0]
return v},
cjG(d){if(d.c-d.d<2)return!1
return A.c8(d,null,0).bN()===19778},
cLW(d,e){var x,w,v,u,t=e==null?A.crG(d):e,s=d.d,r=d.an(),q=d.an(),p=$.hP()
p.$flags&2&&B.A(p)
p[0]=q
q=$.lv()
x=q[0]
p[0]=d.an()
q=q[0]
w=d.bN()
v=d.bN()
u=C.QB[d.an()]
d.an()
p[0]=d.an()
p[0]=d.an()
p=d.an()
d.an()
s=new A.Fs(t,x,q,r,w,v,u,p,s)
s.ahV(d,e)
return s},
lB:function lB(d,e){this.a=d
this.b=e},
aYl:function aYl(){this.b=$},
Fs:function Fs(d,e,f,g,h,i,j,k,l){var _=this
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
aij:function aij(d){this.a=$
this.b=null
this.c=d},
aYk:function aYk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
b5r:function b5r(d){this.a=$
this.b=null
this.c=d},
b49:function b49(){},
b4a:function b4a(){},
b7M:function b7M(){},
anl:function anl(d,e,f){this.a=d
this.b=e
this.c=f},
aqc:function aqc(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
NQ:function NQ(d,e){this.a=d
this.b=e},
Gp:function Gp(d,e){this.a=d
this.b=e},
anm:function anm(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
ctR(d,e,f,g){var x,w
switch(d.a){case 1:return new A.bgg(f,e)
case 2:return new A.aqe(f,g==null?1:g,e)
case 3:return new A.aqe(f,g==null?16:g,e)
case 4:x=g==null?32:g
w=new A.bge(f,x,e)
w.aSO(e,f,x)
return w
case 5:return new A.bgf(f,g==null?16:g,e)
case 6:return new A.aqc(f,g==null?32:g,!1,e)
case 7:return new A.aqc(f,g==null?32:g,!0,e)
default:throw B.f(A.c4("Invalid compression type: "+d.j(0)))}},
tD:function tD(d,e){this.a=d
this.b=e},
b8T:function b8T(){},
bgd:function bgd(){},
cPi(d,e,f,g){var x,w,v,u,t,s,r,q
if(e===0){if(g!==0)throw B.f(A.c4("Incomplete huffman data"))
return}x=d.d
w=d.an()
v=d.an()
d.d+=4
u=d.an()
t=!0
if(w<65537)t=v>=65537
if(t)throw B.f(A.c4("Invalid huffman table size"))
d.d+=4
s=B.bI(65537,0,!1,y.p)
r=J.iP(16384,y.W)
for(q=0;q<16384;++q)r[q]=new A.ann()
A.cPj(d,e-20,w,v,s)
if(u>8*(e-(d.d-x)))throw B.f(A.c4("Error in header for Huffman-encoded data (invalid number of bits)."))
A.cPf(s,w,v,r)
A.cPh(s,r,d,u,v,g,f)},
cPh(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p="Error in Huffman-encoded data (invalid code).",o=B.a([0,0],y.t),n=f.d+D.c.b7(g+7,8)
for(x=0;f.d<n;){A.ckI(o,f)
for(;w=o[1],w>=14;){v=e[D.c.nW(o[0],w-14)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.ckJ(v.b,h,o,f,j,x,i)}else{if(v.c==null)throw B.f(A.c4(p))
for(t=0;t<v.b;++t){s=d[v.c[t]]&63
while(!0){w=o[1]
if(!(w<s&&f.d<n))break
A.ckI(o,f)}if(w>=s){u=v.c
w-=s
if(d[u[t]]>>>6===(D.c.nW(o[0],w)&D.c.eq(1,s)-1)>>>0){o[1]=w
r=A.ckJ(u[t],h,o,f,j,x,i)
x=r
break}}}if(t===v.b)throw B.f(A.c4(p))}}}q=8-g&7
o[0]=D.c.P(o[0],q)
o[1]=o[1]-q
for(;w=o[1],w>0;){v=e[D.c.eP(o[0],14-w)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.ckJ(v.b,h,o,f,j,x,i)}else throw B.f(A.c4(p))}if(x!==i)throw B.f(A.c4("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
ckJ(d,e,f,g,h,i,j){var x,w,v,u,t,s="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)A.ckI(f,g)
x=f[1]-8
f[1]=x
w=D.c.nW(f[0],x)&255
if(i+w>j)throw B.f(A.c4(s))
v=h[i-1]
for(x=h.$flags|0;u=w-1,w>0;w=u,i=t){t=i+1
x&2&&B.A(h)
h[i]=v}}else{if(i<j){h.toString
t=i+1
h.$flags&2&&B.A(h)
h[i]=d}else throw B.f(A.c4(s))
i=t}return i},
cPf(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n="Error in Huffman-encoded data (invalid code table entry)."
for(x=y.t,w=y.p;e<=f;++e){v=d[e]
u=v>>>6
t=v&63
if(D.c.hA(u,t)!==0)throw B.f(A.c4(n))
if(t>14){s=g[D.c.fX(u,t-14)]
if(s.a!==0)throw B.f(A.c4(n))
v=++s.b
r=s.c
if(r!=null){v=B.bI(v,0,!1,w)
s.c=v
for(q=s.b-1,p=0;p<q;++p)v[p]=r[p]}else s.c=B.a([0],x)
s.c[s.b-1]=e}else if(t!==0){v=14-t
o=D.c.eP(u,v)
for(p=D.c.eP(1,v);p>0;--p,++o){s=g[o]
if(s.a!==0||s.c!=null)throw B.f(A.c4(n))
s.a=t
s.b=e}}}},
cPj(d,e,f,g,h){var x,w,v,u,t,s="Error in Huffman-encoded data (unexpected end of code table data).",r="Error in Huffman-encoded data (code table is longer than expected).",q=d.d,p=B.a([0,0],y.t)
for(x=g+1;f<=g;++f){if(d.d-q>e)throw B.f(A.c4(s))
w=A.ctS(6,p,d)
h[f]=w
if(w===63){if(d.d-q>e)throw B.f(A.c4(s))
v=A.ctS(8,p,d)+6
if(f+v>x)throw B.f(A.c4(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}else if(w>=59){v=w-59+2
if(f+v>x)throw B.f(A.c4(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}}A.cPg(h)},
cPg(d){var x,w,v,u,t,s=B.bI(59,0,!1,y.p)
for(x=0;x<65537;++x){w=d[x]
s[w]=s[w]+1}for(v=0,x=58;x>0;--x,v=u){u=v+s[x]>>>1
s[x]=v}for(x=0;x<65537;++x){t=d[x]
if(t>0){w=s[t]
s[t]=w+1
d[x]=(t|w<<6)>>>0}}},
ckI(d,e){d[0]=((d[0]<<8|e.df())&-1)>>>0
d[1]=(d[1]+8&-1)>>>0},
ctS(d,e,f){var x
for(;x=e[1],x<d;){e[0]=((e[0]<<8|J.u(f.a,f.d++))&-1)>>>0
e[1]=(e[1]+8&-1)>>>0}x-=d
e[1]=x
return(D.c.nW(e[0],x)&D.c.eq(1,d)-1)>>>0},
ann:function ann(){this.b=this.a=0
this.c=null},
cPk(d){var x=A.cP(d,!1,null,0)
if(x.an()!==20000630)return!1
if(x.df()!==2)return!1
if((x.rF()&4294967289)>>>0!==0)return!1
return!0},
b8V:function b8V(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
cva(d,e,f){var x=new A.aqd(d,B.a([],y.Q),B.H(y.N,y.v),C.Ii,e)
x.aSu(d,e,f)
return x},
Z2:function Z2(){},
b8W:function b8W(d,e){this.a=d
this.b=e},
aqd:function aqd(d,e,f,g,h){var _=this
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
bge:function bge(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
aL1:function aL1(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
bgf:function bgf(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
bgg:function bgg(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
aqe:function aqe(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
b8U:function b8U(){this.a=null},
cum(d){var x=new Uint8Array(d*3)
return new A.ZG(A.cQr(d),d,null,new A.u3(x,d,3))},
cQq(d){return new A.ZG(d.a,d.b,d.c,A.cwE(d.d))},
cQr(d){var x
for(x=1;x<=8;++x)if(D.c.eq(1,x)>=d)return x
return 0},
ZG:function ZG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ZH:function ZH(){},
aqf:function aqf(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=$},
aoU:function aoU(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
bcH:function bcH(){var _=this
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
cuG(d){var x,w,v,u,t,s
if(d.bN()!==0)return null
x=d.bN()
if(x>=3)return null
w=C.aoD[x]
if(w===C.IK)return null
v=d.bN()
u=J.kj(v,y.X)
for(t=0;t<v;++t){J.u(d.a,d.d++)
s=J.u(d.a,d.d++)
J.u(d.a,d.d++);++d.d
d.bN()
d.bN()
u[t]=new A.apF(s,d.an(),d.an())}return new A.beW(w,v,u)},
Og:function Og(d,e){this.a=d
this.b=e},
beW:function beW(d,e,f){this.c=d
this.d=e
this.e=f},
apF:function apF(d,e,f){this.b=d
this.d=e
this.e=f},
beU:function beU(d,e,f,g,h,i,j,k,l){var _=this
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
beV:function beV(){this.b=this.a=null},
ajh:function ajh(d,e,f){this.e=d
this.f=e
this.r=f},
GT:function GT(){},
GU:function GU(d){this.a=d},
a_5:function a_5(d){this.a=d},
bgG:function bgG(){this.d=null},
BW:function BW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.y=_.x=_.w=_.r=_.f=_.e=$},
cvp(){var x=B.bI(4,null,!1,y.a7),w=B.a([],y.cB),v=y.l,u=J.BT(0,v)
v=J.BT(0,v)
return new A.bgI(new A.NO(B.H(y.N,y.P)),x,w,u,v,B.a([],y.q))},
bgI:function bgI(d,e,f,g,h,i){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i},
bgJ:function bgJ(d,e){this.a=d
this.b=e},
Tv:function Tv(d){this.a=d
this.b=0},
aqs:function aqs(d,e){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=d
_.z=e},
bgM:function bgM(){this.r=this.f=$},
aqt:function aqt(d,e,f,g,h,i,j,k){var _=this
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
aqr:function aqr(){},
bgH:function bgH(d,e){this.a=d
this.b=e},
bgK:function bgK(d,e,f,g,h,i,j,k,l){var _=this
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
Q7:function Q7(d,e){this.a=d
this.b=e},
a2P:function a2P(d,e){this.a=d
this.b=e},
a2Q:function a2Q(){},
aqg:function aqg(d,e,f,g,h,i,j,k,l){var _=this
_.y=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
cvb(){var x=y.N
return new A.bgh(B.H(x,x),B.a([],y.d),B.a([],y.t))},
CT:function CT(d,e){this.a=d
this.b=e},
brF:function brF(){},
bgh:function bgh(d,e,f){var _=this
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
aw1:function aw1(d){var _=this
_.a=d
_.c=_.b=0
_.d=$
_.e=0},
aw2:function aw2(d,e){this.a=d
this.b=e},
brD:function brD(d,e){var _=this
_.a=null
_.b=d
_.c=0
_.d=e
_.e=$
_.f=0
_.r=!1
_.w=null},
CU:function CU(d,e){this.a=d
this.b=e},
IA:function IA(d){this.b=this.a=0
this.e=d},
brG:function brG(d){this.b=this.a=null
this.c=d},
brH:function brH(){},
a37:function a37(d){this.a=d
this.c=$},
cxk(d){var x=new A.bsC(B.H(y.p,y.a2))
x.aSZ(d)
return x},
cUy(b6,b7,b8,b9,c0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=B.H(y.p,y.aG)
for(x=c0.length,w=0;v=c0.length,w<v;c0.length===x||(0,B.P)(c0),++w){u=c0[w]
b5.m(0,u.a,u)}if(b7===8)t=1
else t=b7===16?2:-1
s=A.hA(b4,b4,C.a6,0,C.bg,b9,b4,0,v,b4,C.a6,b8,!1)
if(t===-1)throw B.f(A.c4("PSD: unsupported bit depth: "+B.o(b7)))
r=b5.i(0,0)
q=b5.i(0,1)
p=b5.i(0,2)
o=b5.i(0,-1)
n=-t
for(x=s.a,x=x.ga1(x),m=v>=5,l=t===1,k=v===4,j=v>=2,v=v>=4;x.q();){i=x.gL(x)
n+=t
switch(b6){case C.a22:h=r.c
h===$&&B.b()
i.saw(0,l?h[n]:(h[n]<<8|h[n+1])>>>8)
h=q.c
h===$&&B.b()
i.saK(l?h[n]:(h[n]<<8|h[n+1])>>>8)
h=p.c
h===$&&B.b()
i.saL(0,l?h[n]:(h[n]<<8|h[n+1])>>>8)
if(v){h=o.c
h===$&&B.b()
h=l?h[n]:(h[n]<<8|h[n+1])>>>8}else h=255
i.saP(0,h)
if(i.gaP(i)!==0){i.saw(0,(i.gaw(i)+i.gaP(i)-255)*255/i.gaP(i))
i.saK((i.gaK()+i.gaP(i)-255)*255/i.gaP(i))
i.saL(0,(i.gaL(i)+i.gaP(i)-255)*255/i.gaP(i))}break
case C.a24:h=r.c
h===$&&B.b()
h=l?h[n]:(h[n]<<8|h[n+1])>>>8
g=q.c
g===$&&B.b()
g=l?g[n]:(g[n]<<8|g[n+1])>>>8
f=p.c
f===$&&B.b()
f=l?f[n]:(f[n]<<8|f[n+1])>>>8
if(v){e=o.c
e===$&&B.b()
d=l?e[n]:(e[n]<<8|e[n+1])>>>8}else d=255
a0=((h*100>>>8)+16)/116
a1=(g-128)/500+a0
a2=a0-(f-128)/200
a3=Math.pow(a0,3)
a0=a3>0.008856?a3:(a0-0.13793103448275862)/7.787
a4=Math.pow(a1,3)
a1=a4>0.008856?a4:(a1-0.13793103448275862)/7.787
a5=Math.pow(a2,3)
a2=a5>0.008856?a5:(a2-0.13793103448275862)/7.787
a1=a1*95.047/100
a0=a0*100/100
a2=a2*108.883/100
a6=a1*3.2406+a0*-1.5372+a2*-0.4986
a7=a1*-0.9689+a0*1.8758+a2*0.0415
a8=a1*0.0557+a0*-0.204+a2*1.057
a6=a6>0.0031308?1.055*Math.pow(a6,0.4166666666666667)-0.055:12.92*a6
a7=a7>0.0031308?1.055*Math.pow(a7,0.4166666666666667)-0.055:12.92*a7
a8=a8>0.0031308?1.055*Math.pow(a8,0.4166666666666667)-0.055:12.92*a8
a9=[D.d.D(D.d.bc(a6*255,0,255)),D.d.D(D.d.bc(a7*255,0,255)),D.d.D(D.d.bc(a8*255,0,255))]
i.saw(0,a9[0])
i.saK(a9[1])
i.saL(0,a9[2])
i.saP(0,d)
break
case C.a21:h=r.c
h===$&&B.b()
b0=l?h[n]:(h[n]<<8|h[n+1])>>>8
if(j){h=o.c
h===$&&B.b()
d=l?h[n]:(h[n]<<8|h[n+1])>>>8}else d=255
i.saw(0,b0)
i.saK(b0)
i.saL(0,b0)
i.saP(0,d)
break
case C.a23:h=r.c
h===$&&B.b()
b1=l?h[n]:(h[n]<<8|h[n+1])>>>8
h=q.c
h===$&&B.b()
b2=l?h[n]:(h[n]<<8|h[n+1])>>>8
h=p.c
h===$&&B.b()
a0=l?h[n]:(h[n]<<8|h[n+1])>>>8
h=b5.i(0,k?-1:3).c
h===$&&B.b()
b3=l?h[n]:(h[n]<<8|h[n+1])>>>8
if(m){h=o.c
h===$&&B.b()
d=l?h[n]:(h[n]<<8|h[n+1])>>>8}else d=255
a9=A.cDe(255-b1,255-b2,255-a0,255-b3)
i.saw(0,a9[0])
i.saK(a9[1])
i.saL(0,a9[2])
i.saP(0,d)
break
default:throw B.f(A.c4("Unhandled color mode: "+B.o(b6)))}}return s},
u9:function u9(d,e){this.a=d
this.b=e},
bsC:function bsC(d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=$
_.y=null
_.z=d
_.at=_.as=$},
bsB:function bsB(){this.a=null},
awy:function awy(){},
yP:function yP(d,e,f){this.a=d
this.b=e
this.c=f},
lV:function lV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3a:function a3a(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
Qp:function Qp(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
awx:function awx(){this.y=this.b=this.a=0},
yQ(d,e){return(C.tD[d>>>8]<<17|C.tD[e>>>8]<<16|C.tD[d&255]<<1|C.tD[e&255])>>>0},
rq:function rq(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
bsD:function bsD(){this.b=this.a=null},
aAP:function aAP(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
o_:function o_(d,e){this.a=d
this.b=e},
bE_:function bE_(){this.a=null
this.b=$},
bEm:function bEm(d){this.a=d
this.c=this.b=0},
aAU:function aAU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
cn1(d,e,f){var x=new A.bEo(e,f,d),w=y.u
x.e=B.bI(e,null,!1,w)
x.f=B.bI(e,null,!1,w)
return x},
bEo:function bEo(d,e,f){var _=this
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
aAV:function aAV(d,e,f,g){var _=this
_.a=d
_.c=_.b=0
_.d=e
_.r=_.f=_.e=1
_.w=f
_.x=g
_.y=!1
_.z=1
_.as=_.Q=$
_.ay=_.ax=0
_.CW=_.ch=null
_.cy=_.cx=$
_.dx=1
_.fr=_.dy=0
_.go=null
_.k2=_.k1=_.id=$},
JZ:function JZ(d,e){this.a=d
this.b=e},
ku:function ku(d,e){this.a=d
this.b=e},
rJ:function rJ(d,e){this.a=d
this.b=e},
bEp:function bEp(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
cvJ(){return new A.bid(new Uint8Array(4096))},
bid:function bid(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
bEn:function bEn(){this.a=null
this.c=$},
cnh(d,e){var x=new Int32Array(4),w=new Int32Array(4),v=new Int8Array(4),u=new Int8Array(4),t=B.bI(8,null,!1,y.ak),s=B.bI(4,null,!1,y.Z)
return new A.bHB(d,e,new A.bHH(),new A.bHL(),new A.bHD(x,w),new A.bHN(v,u),t,s,new Uint8Array(4))},
czQ(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
bHB:function bHB(d,e,f,g,h,i,j,k,l){var _=this
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
_.bs=$
_.bW=null
_.b_=_.av=$
_.bU=null
_.cN=$},
bHO:function bHO(){},
czN(d){var x=new A.a70(d)
x.b=254
x.c=0
x.d=-8
return x},
a70:function a70(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
eG(d,e,f){return D.c.l4(D.c.P(d+2*e+f+2,2),32)},
cYr(d){var x,w=B.a([A.eG(J.u(d.a,d.d+-33),J.u(d.a,d.d+-32),J.u(d.a,d.d+-31)),A.eG(J.u(d.a,d.d+-32),J.u(d.a,d.d+-31),J.u(d.a,d.d+-30)),A.eG(J.u(d.a,d.d+-31),J.u(d.a,d.d+-30),J.u(d.a,d.d+-29)),A.eG(J.u(d.a,d.d+-30),J.u(d.a,d.d+-29),J.u(d.a,d.d+-28))],y.t)
for(x=0;x<4;++x)d.A6(x*32,4,w)},
cYj(d){var x=J.u(d.a,d.d+-33),w=J.u(d.a,d.d+-1),v=J.u(d.a,d.d+31),u=J.u(d.a,d.d+63),t=J.u(d.a,d.d+95),s=A.c8(d,null,0),r=s.Qt(),q=A.eG(x,w,v)
r.$flags&2&&B.A(r)
r[0]=16843009*q
s.d+=32
q=s.Qt()
r=A.eG(w,v,u)
q.$flags&2&&B.A(q)
q[0]=16843009*r
s.d+=32
r=s.Qt()
q=A.eG(v,u,t)
r.$flags&2&&B.A(r)
r[0]=16843009*q
s.d+=32
q=s.Qt()
r=A.eG(u,t,t)
q.$flags&2&&B.A(q)
q[0]=16843009*r},
cYh(d){var x,w,v,u
for(x=4,w=0;w<4;++w)x+=J.u(d.a,d.d+(w-32))+J.u(d.a,d.d+(-1+w*32))
x=D.c.P(x,3)
for(w=0;w<4;++w){v=d.a
u=d.d+w*32
J.tb(v,u,u+4,x)}},
cni(d,e){var x,w,v,u,t,s=255-J.u(d.a,d.d+-33)
for(x=0,w=0;w<e;++w){v=s+J.u(d.a,d.d+(x-1))
for(u=0;u<e;++u){t=$.pw()[v+J.u(d.a,d.d+(-32+u))]
J.bP(d.a,d.d+(x+u),t)}x+=32}},
cYp(d){A.cni(d,4)},
cYq(d){A.cni(d,8)},
cYo(d){A.cni(d,16)},
cYn(d){var x,w=J.u(d.a,d.d+-1),v=J.u(d.a,d.d+31),u=J.u(d.a,d.d+63),t=J.u(d.a,d.d+95),s=J.u(d.a,d.d+-33),r=J.u(d.a,d.d+-32),q=J.u(d.a,d.d+-31),p=J.u(d.a,d.d+-30),o=J.u(d.a,d.d+-29)
d.m(0,96,A.eG(v,u,t))
x=A.eG(w,v,u)
d.m(0,97,x)
d.m(0,64,x)
x=A.eG(s,w,v)
d.m(0,98,x)
d.m(0,65,x)
d.m(0,32,x)
x=A.eG(r,s,w)
d.m(0,99,x)
d.m(0,66,x)
d.m(0,33,x)
d.m(0,0,x)
x=A.eG(q,r,s)
d.m(0,67,x)
d.m(0,34,x)
d.m(0,1,x)
x=A.eG(p,q,r)
d.m(0,35,x)
d.m(0,2,x)
d.m(0,3,A.eG(o,p,q))},
cYm(d){var x,w=J.u(d.a,d.d+-32),v=J.u(d.a,d.d+-31),u=J.u(d.a,d.d+-30),t=J.u(d.a,d.d+-29),s=J.u(d.a,d.d+-28),r=J.u(d.a,d.d+-27),q=J.u(d.a,d.d+-26),p=J.u(d.a,d.d+-25)
d.m(0,0,A.eG(w,v,u))
x=A.eG(v,u,t)
d.m(0,32,x)
d.m(0,1,x)
x=A.eG(u,t,s)
d.m(0,64,x)
d.m(0,33,x)
d.m(0,2,x)
x=A.eG(t,s,r)
d.m(0,96,x)
d.m(0,65,x)
d.m(0,34,x)
d.m(0,3,x)
x=A.eG(s,r,q)
d.m(0,97,x)
d.m(0,66,x)
d.m(0,35,x)
x=A.eG(r,q,p)
d.m(0,98,x)
d.m(0,67,x)
d.m(0,99,A.eG(q,p,p))},
cYt(d){var x=J.u(d.a,d.d+-1),w=J.u(d.a,d.d+31),v=J.u(d.a,d.d+63),u=J.u(d.a,d.d+-33),t=J.u(d.a,d.d+-32),s=J.u(d.a,d.d+-31),r=J.u(d.a,d.d+-30),q=J.u(d.a,d.d+-29),p=D.c.l4(D.c.P(u+t+1,1),32)
d.m(0,65,p)
d.m(0,0,p)
p=D.c.l4(D.c.P(t+s+1,1),32)
d.m(0,66,p)
d.m(0,1,p)
p=D.c.l4(D.c.P(s+r+1,1),32)
d.m(0,67,p)
d.m(0,2,p)
d.m(0,3,D.c.l4(D.c.P(r+q+1,1),32))
d.m(0,96,A.eG(v,w,x))
d.m(0,64,A.eG(w,x,u))
p=A.eG(x,u,t)
d.m(0,97,p)
d.m(0,32,p)
p=A.eG(u,t,s)
d.m(0,98,p)
d.m(0,33,p)
p=A.eG(t,s,r)
d.m(0,99,p)
d.m(0,34,p)
d.m(0,35,A.eG(s,r,q))},
cYs(d){var x,w=J.u(d.a,d.d+-32),v=J.u(d.a,d.d+-31),u=J.u(d.a,d.d+-30),t=J.u(d.a,d.d+-29),s=J.u(d.a,d.d+-28),r=J.u(d.a,d.d+-27),q=J.u(d.a,d.d+-26),p=J.u(d.a,d.d+-25)
d.m(0,0,D.c.l4(D.c.P(w+v+1,1),32))
x=D.c.l4(D.c.P(v+u+1,1),32)
d.m(0,64,x)
d.m(0,1,x)
x=D.c.l4(D.c.P(u+t+1,1),32)
d.m(0,65,x)
d.m(0,2,x)
x=D.c.l4(D.c.P(t+s+1,1),32)
d.m(0,66,x)
d.m(0,3,x)
d.m(0,32,A.eG(w,v,u))
x=A.eG(v,u,t)
d.m(0,96,x)
d.m(0,33,x)
x=A.eG(u,t,s)
d.m(0,97,x)
d.m(0,34,x)
x=A.eG(t,s,r)
d.m(0,98,x)
d.m(0,35,x)
d.m(0,67,A.eG(s,r,q))
d.m(0,99,A.eG(r,q,p))},
cYk(d){var x,w=J.u(d.a,d.d+-1),v=J.u(d.a,d.d+31),u=J.u(d.a,d.d+63),t=J.u(d.a,d.d+95)
d.m(0,0,D.c.l4(D.c.P(w+v+1,1),32))
x=D.c.l4(D.c.P(v+u+1,1),32)
d.m(0,32,x)
d.m(0,2,x)
x=D.c.l4(D.c.P(u+t+1,1),32)
d.m(0,64,x)
d.m(0,34,x)
d.m(0,1,A.eG(w,v,u))
x=A.eG(v,u,t)
d.m(0,33,x)
d.m(0,3,x)
x=A.eG(u,t,t)
d.m(0,65,x)
d.m(0,35,x)
d.m(0,99,t)
d.m(0,98,t)
d.m(0,97,t)
d.m(0,96,t)
d.m(0,66,t)
d.m(0,67,t)},
cYi(d){var x=J.u(d.a,d.d+-1),w=J.u(d.a,d.d+31),v=J.u(d.a,d.d+63),u=J.u(d.a,d.d+95),t=J.u(d.a,d.d+-33),s=J.u(d.a,d.d+-32),r=J.u(d.a,d.d+-31),q=J.u(d.a,d.d+-30),p=D.c.l4(D.c.P(x+t+1,1),32)
d.m(0,34,p)
d.m(0,0,p)
p=D.c.l4(D.c.P(w+x+1,1),32)
d.m(0,66,p)
d.m(0,32,p)
p=D.c.l4(D.c.P(v+w+1,1),32)
d.m(0,98,p)
d.m(0,64,p)
d.m(0,96,D.c.l4(D.c.P(u+v+1,1),32))
d.m(0,3,A.eG(s,r,q))
d.m(0,2,A.eG(t,s,r))
p=A.eG(x,t,s)
d.m(0,35,p)
d.m(0,1,p)
p=A.eG(w,x,t)
d.m(0,67,p)
d.m(0,33,p)
p=A.eG(v,w,x)
d.m(0,99,p)
d.m(0,65,p)
d.m(0,97,A.eG(u,v,w))},
cYE(d){var x
for(x=0;x<16;++x)d.rA(x*32,16,d,-32)},
cYC(d){var x,w,v,u,t
for(x=0,w=16;w>0;--w){v=J.u(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.tb(u,t,t+16,v)
x+=32}},
bHF(d,e){var x,w,v
for(x=0;x<16;++x){w=e.a
v=e.d+x*32
J.tb(w,v,v+16,d)}},
cYu(d){var x,w
for(x=16,w=0;w<16;++w)x+=J.u(d.a,d.d+(-1+w*32))+J.u(d.a,d.d+(w-32))
A.bHF(D.c.P(x,5),d)},
cYw(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.u(d.a,d.d+(-1+w*32))
A.bHF(D.c.P(x,4),d)},
cYv(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.u(d.a,d.d+(w-32))
A.bHF(D.c.P(x,4),d)},
cYx(d){A.bHF(128,d)},
cYF(d){var x
for(x=0;x<8;++x)d.rA(x*32,8,d,-32)},
cYD(d){var x,w,v,u,t
for(x=0,w=0;w<8;++w){v=J.u(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.tb(u,t,t+8,v)
x+=32}},
bHG(d,e){var x,w,v
for(x=0;x<8;++x){w=e.a
v=e.d+x*32
J.tb(w,v,v+8,d)}},
cYy(d){var x,w
for(x=8,w=0;w<8;++w)x+=J.u(d.a,d.d+(w-32))+J.u(d.a,d.d+(-1+w*32))
A.bHG(D.c.P(x,4),d)},
cYz(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.u(d.a,d.d+(w-32))
A.bHG(D.c.P(x,3),d)},
cYA(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.u(d.a,d.d+(-1+w*32))
A.bHG(D.c.P(x,3),d)},
cYB(d){A.bHG(128,d)},
Ec(d,e,f,g,h){var x=e+f+g*32,w=J.u(d.a,d.d+x)+D.c.P(h,3)
if(!((w&-256)>>>0===0))w=w<0?0:255
d.m(0,x,w)},
bHE(d,e,f,g,h){A.Ec(d,0,0,e,f+g)
A.Ec(d,0,1,e,f+h)
A.Ec(d,0,2,e,f-h)
A.Ec(d,0,3,e,f-g)},
cYl(){var x,w,v,u
if(!$.czO){for(x=-255;x<=255;++x){w=$.aUa()
v=255+x
u=x<0?-x:x
w.$flags&2&&B.A(w)
w[v]=u
u=$.ciS()
w=D.c.P(w[v],1)
u.$flags&2&&B.A(u)
u[v]=w}for(x=-1020;x<=1020;++x){w=$.ciT()
if(x<-128)v=-128
else v=x>127?127:x
w.$flags&2&&B.A(w)
w[1020+x]=v}for(x=-112;x<=112;++x){w=$.aUb()
if(x<-16)v=-16
else v=x>15?15:x
w.$flags&2&&B.A(w)
w[112+x]=v}for(x=-255;x<=510;++x){w=$.pw()
if(x<0)v=0
else v=x>255?255:x
w.$flags&2&&B.A(w)
w[255+x]=v}$.czO=!0}},
bHC:function bHC(){},
cYg(){var x,w=J.iP(3,y.D)
for(x=0;x<3;++x)w[x]=new Uint8Array(11)
return new A.a7_(w)},
cYU(){var x,w,v,u,t=new Uint8Array(3),s=J.iP(4,y.cm)
for(x=y.V,w=0;w<4;++w){v=J.iP(8,x)
for(u=0;u<8;++u)v[u]=A.cYg()
s[w]=v}D.A.kW(t,0,3,255)
return new A.bHM(t,s)},
bHH:function bHH(){this.d=$},
bHL:function bHL(){this.b=null},
bHN:function bHN(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
a7_:function a7_(d){this.a=d},
bHM:function bHM(d,e){this.a=d
this.b=e},
bHD:function bHD(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
K9:function K9(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
aBM:function aBM(){this.b=this.a=0},
aBO:function aBO(d,e,f){this.a=d
this.b=e
this.c=f},
aBN:function aBN(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
aBP:function aBP(d,e,f){this.a=d
this.b=e
this.c=f},
cnj(d,e){var x,w=B.a([],y.A),v=B.a([],y.F),u=new Uint32Array(2),t=new A.aBK(d,u)
u=t.d=J.d_(D.bl.gag(u),0,null)
x=d.df()
u.$flags&2&&B.A(u)
u[0]=x
x=d.df()
u.$flags&2&&B.A(u)
u[1]=x
x=d.df()
u.$flags&2&&B.A(u)
u[2]=x
x=d.df()
u.$flags&2&&B.A(u)
u[3]=x
x=d.df()
u.$flags&2&&B.A(u)
u[4]=x
x=d.df()
u.$flags&2&&B.A(u)
u[5]=x
x=d.df()
u.$flags&2&&B.A(u)
u[6]=x
x=d.df()
u.$flags&2&&B.A(u)
u[7]=x
return new A.a71(t,e,w,v)},
Ed(d,e){return D.c.P(d+D.c.eq(1,e)-1,e)},
a71:function a71(d,e,f,g){var _=this
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
aqh:function aqh(d,e,f,g){var _=this
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
aBK:function aBK(d,e){var _=this
_.a=0
_.b=d
_.c=e
_.d=$},
bHI:function bHI(d,e){this.a=d
this.b=e},
bHJ(d,e,f){var x=d[e]
d.$flags&2&&B.A(d)
d[e]=(((x&4278255360)>>>0)+((f&4278255360)>>>0)&4278255360|(x&16711935)+(f&16711935)&16711935)>>>0},
zp(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
Kb(d){if(d<0)return 0
if(d>255)return 255
return d},
bHK(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
cYG(d,e,f){return 4278190080},
cYH(d,e,f){return e},
cYM(d,e,f){return d[f]},
cYN(d,e,f){return d[f+1]},
cYO(d,e,f){return d[f-1]},
cYP(d,e,f){var x=d[f]
return A.zp(A.zp(e,d[f+1]),x)},
cYQ(d,e,f){return A.zp(e,d[f-1])},
cYR(d,e,f){return A.zp(e,d[f])},
cYS(d,e,f){return A.zp(d[f-1],d[f])},
cYT(d,e,f){return A.zp(d[f],d[f+1])},
cYI(d,e,f){var x=d[f-1],w=d[f],v=d[f+1]
return A.zp(A.zp(e,x),A.zp(w,v))},
cYJ(d,e,f){var x=d[f],w=d[f-1]
return A.bHK(x>>>24,e>>>24,w>>>24)+A.bHK(x>>>16&255,e>>>16&255,w>>>16&255)+A.bHK(x>>>8&255,e>>>8&255,w>>>8&255)+A.bHK(x&255,e&255,w&255)<=0?x:e},
cYK(d,e,f){var x=d[f],w=d[f-1]
return(A.Kb((e>>>24)+(x>>>24)-(w>>>24))<<24|A.Kb((e>>>16&255)+(x>>>16&255)-(w>>>16&255))<<16|A.Kb((e>>>8&255)+(x>>>8&255)-(w>>>8&255))<<8|A.Kb((e&255)+(x&255)-(w&255)))>>>0},
cYL(d,e,f){var x,w,v,u=d[f],t=d[f-1],s=A.zp(e,u)
u=s>>>24
x=s>>>16&255
w=s>>>8&255
v=s>>>0&255
return(A.Kb(u+D.c.b7(u-(t>>>24),2))<<24|A.Kb(x+D.c.b7(x-(t>>>16&255),2))<<16|A.Kb(w+D.c.b7(w-(t>>>8&255),2))<<8|A.Kb(v+D.c.b7(v-(t&255),2)))>>>0},
Ka:function Ka(d,e){this.a=d
this.b=e},
aBL:function aBL(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
bIy:function bIy(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
a7g:function a7g(){},
aqi:function aqi(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=$
_.r=1
_.x=_.w=$},
cuC(){var x=new Uint8Array(128),w=new Int16Array(128)
x=new A.apD(x,w,new Int16Array(128))
x.a7w(0)
return x},
cQu(){var x,w=J.iP(5,y.x)
for(x=0;x<5;++x)w[x]=A.cuC()
return new A.ZM(w)},
apD:function apD(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$
_.f=_.e=0},
ZM:function ZM(d){this.a=d},
Sz:function Sz(d,e){this.a=d
this.b=e},
aCc:function aCc(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
aqj:function aqj(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
bIz:function bIz(){this.b=this.a=null},
cuF(d){return new A.a_7(d.a,d.b,D.A.ln(d.c,0))},
beT:function beT(d,e){this.a=d
this.b=e},
a_7:function a_7(d,e,f){this.a=d
this.b=e
this.c=f},
hA(d,e,f,g,h,i,j,k,l,m,n,o,p){var x,w=new A.BC(null,null,null,d,k,h,g,0)
w.gkY().push(w)
w.c=j
if(e!=null)w.e=A.YX(e)
x=!1
if(m==null)if(p)x=w.gdu()===C.f8||w.gdu()===C.fR||w.gdu()===C.fS||w.gdu()===C.a6||w.gdu()===C.cb
w.akc(o,i,f,l,x?w.aY9(f,n,l):m)
return w},
apO(d,e,f,g){var x,w,v,u=null,t=d.e
t=t==null?u:A.YX(t)
x=d.c
x=x==null?u:A.cuF(x)
w=d.w
v=d.r
t=new A.BC(u,x,t,u,v,w,d.y,d.z)
t.aSK(d,e,f,g)
return t},
BB(d,e,f){var x,w,v,u,t=null,s=d.a
s=s==null?t:s.qV(0,f)
x=d.e
x=x==null?t:A.YX(x)
w=d.c
w=w==null?t:A.cuF(w)
v=d.w
u=d.r
s=new A.BC(s,w,x,t,u,v,d.y,d.z)
s.aSJ(d,e,f)
return s},
aoJ:function aoJ(d,e){this.a=d
this.b=e},
BC:function BC(d,e,f,g,h,i,j,k){var _=this
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
bfv:function bfv(d,e){this.a=d
this.b=e},
bfu:function bfu(){},
lK:function lK(){},
cR_(d,e,f){return new A.Or(new Uint16Array(d*e*f),d,e,f)},
Or:function Or(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
cR0(d,e,f){return new A.Os(new Float32Array(d*e*f),d,e,f)},
Os:function Os(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a_a:function a_a(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a_b:function a_b(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a_c:function a_c(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a_d:function a_d(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
Ot:function Ot(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
Ou:function Ou(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
Ov:function Ov(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
cR1(d,e,f){return new A.Ow(new Uint32Array(d*e*f),d,e,f)},
Ow:function Ow(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
Ox:function Ox(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
cuV(d,e,f){return new A.Oy(new Uint8Array(d*e*f),null,d,e,f)},
Oy:function Oy(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
aqk:function aqk(d,e){this.a=d
this.b=e},
bpk:function bpk(){},
auK:function auK(d,e,f){this.c=d
this.a=e
this.b=f},
auL:function auL(d,e,f){this.c=d
this.a=e
this.b=f},
auM:function auM(d,e,f){this.c=d
this.a=e
this.b=f},
auN:function auN(d,e,f){this.c=d
this.a=e
this.b=f},
auO:function auO(d,e,f){this.c=d
this.a=e
this.b=f},
auP:function auP(d,e,f){this.c=d
this.a=e
this.b=f},
auQ:function auQ(d,e,f){this.c=d
this.a=e
this.b=f},
a1P:function a1P(d,e,f){this.c=d
this.a=e
this.b=f},
cwE(d){return new A.u3(new Uint8Array(B.bU(d.c)),d.a,d.b)},
u3:function u3(d,e,f){this.c=d
this.a=e
this.b=f},
clN(d){return new A.I2(-1,0,-d.c,d)},
I2:function I2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
clO(d){return new A.I3(-1,0,-d.c,d)},
I3:function I3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
clP(d){return new A.I4(-1,0,-d.c,d)},
I4:function I4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
clQ(d){return new A.I5(-1,0,-d.c,d)},
I5:function I5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
clR(d){return new A.I6(-1,0,-d.c,d)},
I6:function I6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
clS(d){return new A.I7(-1,0,-d.c,d)},
I7:function I7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
u4(d,e,f,g,h){d.hn(0,e-1,f)
return new A.av2(d,e,e+g-1,f+h-1)},
av2:function av2(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g},
a22(d){return new A.I8(-1,0,0,-1,0,d)},
I8:function I8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
clT(d){return new A.I9(-1,0,-d.c,d)},
I9:function I9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a23(d){return new A.Ia(-1,0,0,-2,0,d)},
Ia:function Ia(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
clU(d){return new A.Ib(-1,0,-d.c,d)},
Ib:function Ib(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a24(d){return new A.Ic(-1,0,0,-(d.c<<2>>>0),d)},
Ic:function Ic(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bpA(d){return new A.Id(-1,0,-d.c,d)},
Id:function Id(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ff:function ff(){},
d7X(d,e){switch(e.a){case 0:A.aTH(d)
break
case 1:A.d8_(d)
break
case 2:A.d7Y(d)
break}return d},
d8_(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.gkY().length
for(x=y.g,w=0;w<h;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?i:t.a
if(r==null)r=0
q=s?i:t.b
if(q==null)q=0
p=D.c.b7(q,2)
t=d.a
if((t==null?i:t.geS())!=null)for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.ek(m,n,i)
if(l==null)l=new A.ff()
t=u.a
k=t==null?i:t.ek(m,o,i)
if(k==null)k=new A.ff()
j=l.gef(l)
l.sef(0,k.gef(k))
k.sef(0,j)}else for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.ek(m,n,i)
if(l==null)l=new A.ff()
t=u.a
k=t==null?i:t.ek(m,o,i)
if(k==null)k=new A.ff()
j=l.gaw(l)
l.saw(0,k.gaw(k))
k.saw(0,j)
j=l.gaK()
l.saK(k.gaK())
k.saK(j)
j=l.gaL(l)
l.saL(0,k.gaL(k))
k.saL(0,j)
j=l.gaP(l)
l.saP(0,k.gaP(k))
k.saP(0,j)}}return d},
aTH(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=d.gkY().length
for(x=y.g,w=0;w<g;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?h:t.a
if(r==null)r=0
q=s?h:t.b
if(q==null)q=0
p=D.c.b7(r,2)
t=d.a
if((t==null?h:t.geS())!=null)for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.ek(l,n,h)
if(k==null)k=new A.ff()
t=u.a
j=t==null?h:t.ek(m,n,h)
if(j==null)j=new A.ff()
i=k.gef(k)
k.sef(0,j.gef(j))
j.sef(0,i)}else for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.ek(l,n,h)
if(k==null)k=new A.ff()
t=u.a
j=t==null?h:t.ek(m,n,h)
if(j==null)j=new A.ff()
i=k.gaw(k)
k.saw(0,j.gaw(j))
j.saw(0,i)
i=k.gaK()
k.saK(j.gaK())
j.saK(i)
i=k.gaL(k)
k.saL(0,j.gaL(j))
j.saL(0,i)
i=k.gaP(k)
k.saP(0,j.gaP(j))
j.saP(0,i)}}return d},
d7Y(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=d.gkY().length
for(x=y.g,w=0;w<f;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?g:t.a
if(r==null)r=0
q=s?g:t.b
if(q==null)q=0
p=D.c.b7(q,2)
if((s?g:t.geS())!=null)for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.ek(k,m,g)
if(j==null)j=new A.ff()
t=u.a
i=t==null?g:t.ek(l,o,g)
if(i==null)i=new A.ff()
h=j.gef(j)
j.sef(0,i.gef(i))
i.sef(0,h)}else for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.ek(k,m,g)
if(j==null)j=new A.ff()
t=u.a
i=t==null?g:t.ek(l,o,g)
if(i==null)i=new A.ff()
h=j.gaw(j)
j.saw(0,i.gaw(i))
i.saw(0,h)
h=j.gaK()
j.saK(i.gaK())
i.saK(h)
h=j.gaL(j)
j.saL(0,i.gaL(i))
i.saL(0,h)
h=j.gaP(j)
j.saP(0,i.gaP(i))
i.saP(0,h)}}return d},
ba6:function ba6(d,e){this.a=d
this.b=e},
c4(d){return new A.apT(d)},
apT:function apT(d){this.a=d},
cP(d,e,f,g){return new A.lM(d,g,f==null?J.bk(d):g+f,g,e)},
c8(d,e,f){var x=d.a,w=d.d+f,v=e==null?d.c:w+e
return new A.lM(x,d.b,v,w,d.e)},
lM:function lM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bny:function bny(d){var _=this
_.a=$
_.b=10
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=d
_.ax=_.at=$},
q6(d,e){return new A.aux(d,new Uint8Array(e))},
aux:function aux(d,e){this.a=0
this.b=d
this.c=e},
bsK:function bsK(){},
nK:function nK(d,e){this.a=d
this.b=e},
bvb:function bvb(d,e){this.a=d
this.b=e},
bv8:function bv8(d,e){this.a=d
this.b=e},
bGg:function bGg(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
cw8(d){return new Int8Array(d)},
cY0(d){throw B.f(B.aD("Uint64List not supported on the web."))},
cRk(d,e,f){return J.cja(d,e,f)},
czz(d,e){return J.oi(d,e,null)},
cPI(d){return J.aUp(d,0,null)},
cPJ(d){return d.a8_(0,0,null)},
d8h(d){var x,w,v,u,t,s=d.length
for(x=1,w=0,v=0;s>0;){u=3800>s?s:3800
s-=u
for(;--u,u>=0;v=t){t=v+1
x+=d[v]&255
w+=x}x=D.c.ap(x,65521)
w=D.c.ap(w,65521)}return(w<<16|x)>>>0},
x1(d,e){var x,w,v=J.a2(d),u=v.gu(d)
e^=4294967295
for(x=0;u>=8;){w=x+1
e=C.fY[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.fY[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.fY[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.fY[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.fY[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.fY[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.fY[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.fY[(e^v.i(d,w))&255]^e>>>8
u-=8}if(u>0)do{w=x+1
e=C.fY[(e^v.i(d,x))&255]^e>>>8
if(--u,u>0){x=w
continue}else break}while(!0)
return(e^4294967295)>>>0},
cQM(d){var x,w,v,u,t,s,r,q,p=null,o="data:image/jpeg;base64,",n="data:image/png;base64,",m=F.aTP(K.ci8(d),"img"),l=B.a([],y.s)
for(x=m.length,w=0;w<m.length;m.length===x||(0,B.P)(m),++w){v=m[w].b.i(0,"src")
if(v!=null)u=D.e.bf(v,o)||D.e.bf(v,n)
else u=!1
if(u){v.toString
if(B.Lv(v,o,0))t=B.cph(v,o,"",0)
else t=B.cph(v,n,"",0)
if(D.c.b7(t.length*3,4)>524288){s=D.dY.cz(t)
if(D.e.bf(v,o)){r=A.coS(s)
q=r==null?p:r.nv(0,s,p)
if(q!=null){u=q.a
u=u==null?p:u.a
u=(u==null?0:u)>1200}else u=!1
if(u)l.push(v)}else if(D.e.bf(v,n)){r=A.coS(s)
q=r==null?p:r.nv(0,s,p)
if(q!=null){u=q.a
u=u==null?p:u.a
u=(u==null?0:u)>1000}else u=!1
if(u)l.push(v)}}}}return l},
aps(d,e,f){var x=0,w=B.l(y.N),v,u,t,s,r,q
var $async$aps=B.h(function(g,h){if(g===1)return B.i(h,w)
while(true)switch(x){case 0:r=K.ci8(d)
q=new F.Jf().a_q(0,r,F.cfK('img[src="'+e+'"]'))
x=q!=null?3:4
break
case 3:u=D.dY.cz(D.e.n(e,"data:image/jpeg;base64,")?D.e.lZ(e,"data:image/jpeg;base64,",""):D.e.lZ(e,"data:image/png;base64,",""))
x=D.e.bf(e,"data:image/jpeg;base64,")?5:7
break
case 5:x=8
return B.c(A.bfd(u,1200),$async$aps)
case 8:t=h
s=D.f0.glv().cz(t)
q.b.m(0,"src","data:image/jpeg;base64,"+s)
x=6
break
case 7:x=D.e.bf(e,"data:image/png;base64,")?9:10
break
case 9:x=A.cDy(u)!=null?11:12
break
case 11:x=13
return B.c(A.bff(u,1000),$async$aps)
case 13:t=h
s=D.f0.glv().cz(t)
q.b.m(0,"src","data:image/png;base64,"+s)
case 12:case 10:case 6:f.$0()
case 4:v=r.gapN()
x=1
break
case 1:return B.j(v,w)}})
return B.k($async$aps,w)},
coM(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s,r,q
if(m==null)m=0
if(n==null)n=0
if(l==null)l=e.gcX(0)
if(k==null)k=e.gb4(0)
if(h==null)h=d.gcX(0)<e.gcX(0)?d.gcX(0):e.gcX(0)
if(g==null)g=d.gb4(0)<e.gb4(0)?d.gb4(0):e.gb4(0)
x=f===C.xT
if(!x&&d.grl())d=d.axE(d.gq8())
w=k/g
v=l/h
u=y.p
t=J.iP(g,u)
for(s=0;s<g;++s)t[s]=n+D.d.D(s*w)
r=J.iP(h,u)
for(q=0;q<h;++q)r[q]=m+D.d.D(q*v)
if(x)A.d2o(e,d,i,j,h,g,r,t,null,C.FW)
else A.d20(e,d,i,j,h,g,r,t,f,!1,null,C.FW)
return d},
d2o(d,e,f,g,h,i,j,k,l,m){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.ek(t,s,x)
if(x==null)x=new A.ff()
e.xY(f+u,v,x)}},
d20(d,e,f,g,h,i,j,k,l,m,n,o){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.ek(t,s,x)
if(x==null)x=new A.ff()
A.d7A(e,f+u,v,x,l,!1,n,o)}},
d7A(a4,a5,a6,a7,a8,a9,b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
if(!a4.aBd(a5,a6))return a4
if(a8===C.xT||a4.grl())if(a4.aBd(a5,a6)){a4.nT(a5,a6).iX(0,a7)
return a4}x=a7.giw()
w=a7.gih()
v=a7.giq()
u=a7.gu(a7)<4?1:a7.giG()
if(u===0)return a4
t=a4.nT(a5,a6)
s=t.giw()
r=t.gih()
q=t.giq()
p=t.giG()
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
m=D.d.bc(u,0.01,1)
n=u<0
i=n?0:1
h=D.d.bc(x/m*i,0,0.99)
i=D.d.bc(u,0.01,1)
m=n?0:1
g=D.d.bc(w/i*m,0,0.99)
m=D.d.bc(u,0.01,1)
n=n?0:1
f=D.d.bc(v/m*n,0,0.99)
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
t.siw(x*u+s*p*a3)
t.sih(w*u+r*p*a3)
t.siq(v*u+q*p*a3)
t.siG(u+p*a3)
return a4},
d7N(d,e,f,g,h,i,j){var x,w=D.d.bc(Math.min(g,h),0,d.gcX(0)-1),v=D.d.bc(Math.min(i,j),0,d.gb4(0)-1),u=D.d.bc(Math.max(g,h),0,d.gcX(0)-1),t=D.d.bc(Math.max(i,j),0,d.gb4(0)-1),s=d.a.qm(0,w,v,u-w+1,t-v+1)
for(x=s.a;s.q();)x.iX(0,f)
return d},
cPl(a4,a5,a6,a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=b0<16384,a3=a6>a8?a8:a6
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
if(a2){A.Z3(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.Z3(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.Z3(f,d,v)
a1=v[0]
u&2&&B.A(a4)
a4[j]=a1
a4[i]=v[1]
A.Z3(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}else{A.Z4(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.Z4(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.Z4(f,d,v)
a1=v[0]
u&2&&B.A(a4)
a4[j]=a1
a4[i]=v[1]
A.Z4(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}}if(n){h=j+r
if(a2){A.Z3(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&B.A(a4)
a4[h]=a1}else{A.Z4(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&B.A(a4)
a4[h]=a1}u&2&&B.A(a4)
a4[j]=f}}if((a8&x)>>>0!==0){k=l+m
for(j=l;j<=k;j+=o){i=j+p
if(a2){A.Z3(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&B.A(a4)
a4[i]=n}else{A.Z4(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&B.A(a4)
a4[i]=n}u&2&&B.A(a4)
a4[j]=f}}w=x>>>1}},
Z3(d,e,f){var x,w,v,u,t=$.qD()
t.$flags&2&&B.A(t)
t[0]=d
x=$.t8()
w=x[0]
t[0]=e
v=x[0]
u=w+(v&1)+D.c.P(v,1)
f[0]=u
f[1]=u-v},
Z4(d,e,f){var x=d-D.c.P(e,1)&65535
f[1]=x
f[0]=e+x-32768&65535},
coS(d){var x,w,v,u,t,s,r,q,p,o,n=null
if(A.cvp().QM(d))return new A.aqr()
x=new A.aw1(A.cvb())
if(x.Id(d))return x
w=new A.bcH()
w.f=A.cP(d,!1,n,0)
w.a=new A.aoU(B.a([],y.b))
if(w.amh())return w
v=new A.bIz()
if(v.Id(d))return v
u=new A.bEn()
if(u.aqA(A.cP(d,!1,n,0))!=null)return u
if(A.cxk(d).c===943870035)return new A.bsB()
if(A.cPk(d))return new A.b8U()
if(A.cjG(A.cP(d,!1,n,0)))return new A.aij(!1)
t=new A.bE_()
s=A.cP(d,!1,n,0)
r=t.a=new A.aAP(C.wx)
r.qe(0,s)
if(r.aBv())return t
q=new A.beV()
r=A.cP(d,!1,n,0)
q.a=r
r=A.cuG(r)
q.b=r
if(r!=null)return q
p=new A.bsD()
if(p.ow(d)!=null)return p
o=new A.brG(B.a([],y.s))
if(o.Id(d))return o
return n},
cDy(d){var x=A.coS(d)
return x==null?null:x.nv(0,d,null)},
d9S(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if($.co9==null){x=$.co9=new Uint8Array(768)
for(w=-256;w<0;++w)x[256+w]=0
for(w=0;w<256;++w)x[256+w]=w
for(w=256;w<512;++w)x[256+w]=255}for(x=a6.$flags|0,w=0;w<64;++w){v=a4[w]
u=a3[w]
x&2&&B.A(a6)
a6[w]=v*u}for(t=0,w=0;w<8;++w,t+=8){v=1+t
u=a6[v]
if(u===0&&a6[2+t]===0&&a6[3+t]===0&&a6[4+t]===0&&a6[5+t]===0&&a6[6+t]===0&&a6[7+t]===0){v=D.c.P(5793*a6[t]+512,10)
s=(v&2147483647)-((v&2147483648)>>>0)
x&2&&B.A(a6)
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
x&2&&B.A(a6)
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
x&2&&B.A(a6)
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
x&2&&B.A(a6)
a6[w]=q+s
a6[k]=q-s
a6[v]=o+a0
a6[m]=o-a0
a6[p]=i+f
a6[u]=i-f
a6[j]=a1+h
a6[r]=a1-h}for(x=$.co9,v=a5.$flags|0,w=0;w<64;++w){x.toString
u=D.c.P(a6[w]+8,4)
u=x[384+((u&2147483647)-((u&2147483648)>>>0))]
v&2&&B.A(a5)
a5[w]=u}},
d8n(d9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=null,d7="ifd0",d8=d9.r
if(d8.i(0,d7).a.a3(0,274)){x=d8.i(0,d7).gib(0)
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
r=A.hA(d6,d6,C.a6,0,C.bg,s,d6,0,3,d6,C.a6,t,!1)
r.e=A.YX(d8)
r.gwQ().i(0,d7).sib(0,d6)
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
if(a0!=null)a0.fd(p-d,g,a1,a1,a1)}else if(i){a0=r.a
if(a0!=null)a0.fd(p-d,f,a1,a1,a1)}else if(j){a0=r.a
if(a0!=null)a0.fd(d,f,a1,a1,a1)}else if(k){a0=r.a
if(a0!=null)a0.fd(g,d,a1,a1,a1)}else if(v){a0=r.a
if(a0!=null)a0.fd(f,d,a1,a1,a1)}else if(x){a0=r.a
if(a0!=null)a0.fd(f,p-d,a1,a1,a1)}else{a0=r.a
if(d8){if(a0!=null)a0.fd(g,p-d,a1,a1,a1)}else if(a0!=null)a0.fd(d,g,a1,a1,a1)}++d}++g}break
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
a0=D.c.P(a1+359*c0+128,8)
c1=D.c.bc((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.c.P(a1-88*b9-183*c0+128,8)
c2=D.c.bc((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.c.P(a1+454*b9+128,8)
c3=D.c.bc((a0&2147483647)-((a0&2147483648)>>>0),0,255)
if(h){a0=r.a
if(a0!=null)a0.fd(p-d,g,c1,c2,c3)}else if(i){a0=r.a
if(a0!=null)a0.fd(p-d,f,c1,c2,c3)}else if(j){a0=r.a
if(a0!=null)a0.fd(d,f,c1,c2,c3)}else if(k){a0=r.a
if(a0!=null)a0.fd(g,d,c1,c2,c3)}else if(v){a0=r.a
if(a0!=null)a0.fd(f,d,c1,c2,c3)}else if(x){a0=r.a
if(a0!=null)a0.fd(f,p-d,c1,c2,c3)}else{a0=r.a
if(d8){if(a0!=null)a0.fd(g,p-d,c1,c2,c3)}else if(a0!=null)a0.fd(d,g,c1,c2,c3)}++d}++g}break
case 4:x=d9.c
if(x==null)throw B.f(A.c4("Unsupported color mode (4 components)"))
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
d2=255-D.c.bc(D.d.D(a1+1.402*d0),0,255)
d5=b9-128
d3=255-D.d.D(D.d.bc(a1-0.3441363*d5-0.71413636*d0,0,255))
a1=255-D.c.bc(D.d.D(a1+1.772*d5),0,255)}d0=D.c.P(d2*d4,8)
c1=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.c.P(d3*d4,8)
c2=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.c.P(a1*d4,8)
c3=(d0&2147483647)-((d0&2147483648)>>>0)
if(f){d0=r.a
if(d0!=null)d0.fd(p-d,g,c1,c2,c3)}else if(h){d0=r.a
if(d0!=null)d0.fd(p-d,a0,c1,c2,c3)}else if(i){d0=r.a
if(d0!=null)d0.fd(d,a0,c1,c2,c3)}else if(j){d0=r.a
if(d0!=null)d0.fd(g,d,c1,c2,c3)}else if(k){d0=r.a
if(d0!=null)d0.fd(a0,d,c1,c2,c3)}else if(v){d0=r.a
if(d0!=null)d0.fd(a0,p-d,c1,c2,c3)}else{d0=r.a
if(d8){if(d0!=null)d0.fd(g,p-d,c1,c2,c3)}else if(d0!=null)d0.fd(d,g,c1,c2,c3)}++d}++g}break
default:throw B.f(A.c4("Unsupported color mode"))}return r},
cZ4(d,e,f,g,h,i){A.cZ1(i,d,e,f,g,h,!0,i)},
cZ5(d,e,f,g,h,i){A.cZ2(i,d,e,f,g,h,!0,i)},
cZ3(d,e,f,g,h,i){A.cZ0(i,d,e,f,g,h,!0,i)},
Sy(d,e,f,g,h){var x,w,v
for(x=0;x<g;++x){w=J.u(d.a,d.d+x)
v=J.u(e.a,e.d+x)
J.bP(f.a,f.d+x,w+v)}},
cZ1(d,e,f,g,h,i,j,k){var x,w,v=null,u=h*g,t=h+i,s=A.cP(d,!1,v,u),r=A.cP(d,!1,v,u),q=A.c8(r,v,0)
if(h===0){r.m(0,0,J.u(s.a,s.d))
A.Sy(A.c8(s,v,1),q,A.c8(r,v,1),e-1,!0)
q.d+=g
s.d+=g
r.d+=g
h=1}for(x=-g,w=e-1;h<t;){A.Sy(s,A.c8(q,v,x),r,1,!0)
A.Sy(A.c8(s,v,1),q,A.c8(r,v,1),w,!0);++h
q.d+=g
s.d+=g
r.d+=g}},
cZ2(d,e,f,g,h,i,j,k){var x=null,w=h*g,v=h+i,u=A.cP(d,!1,x,w),t=A.cP(k,!1,x,w),s=A.c8(t,x,0)
if(h===0){t.m(0,0,J.u(u.a,u.d))
A.Sy(A.c8(u,x,1),s,A.c8(t,x,1),e-1,!0)
u.d+=g
t.d+=g
h=1}else s.d-=g
for(;h<v;){A.Sy(u,s,t,e,!0);++h
s.d+=g
u.d+=g
t.d+=g}},
cZ0(d,e,f,g,h,i,j,k){var x,w,v,u,t,s=null,r=h*g,q=h+i,p=A.cP(d,!1,s,r),o=A.cP(k,!1,s,r),n=A.c8(o,s,0)
if(h===0){o.m(0,0,J.u(p.a,p.d))
A.Sy(A.c8(p,s,1),n,A.c8(o,s,1),e-1,!0)
n.d+=g
p.d+=g
o.d+=g
h=1}for(x=-g;h<q;){A.Sy(p,A.c8(n,s,x),o,1,!0)
for(w=1;w<e;++w){v=w-g
u=J.u(n.a,n.d+(w-1))+J.u(n.a,n.d+v)-J.u(n.a,n.d+(v-1))
if((u&4294967040)>>>0===0)t=u
else t=u<0?0:255
v=J.u(p.a,p.d+w)
J.bP(o.a,o.d+w,v+t)}++h
n.d+=g
p.d+=g
o.d+=g}},
d5f(d){var x="ifd0",w=A.BB(d,!1,!1)
if(!d.gwQ().i(0,x).a.a3(0,274)||d.gwQ().i(0,x).gib(0)===1)return w
w.e=A.YX(d.gwQ())
w.gwQ().i(0,x).sib(0,null)
switch(d.gwQ().i(0,x).gib(0)){case 2:return A.aTH(w)
case 3:return A.d7X(w,C.akv)
case 4:return A.aTH(A.aTA(w,180))
case 5:return A.aTH(A.aTA(w,90))
case 6:return A.aTA(w,90)
case 7:return A.aTH(A.aTA(w,-90))
case 8:return A.aTA(w,-90)}return w},
d5Z(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
d.grl()
if(d.gwQ().i(0,"ifd0").a.a3(0,274)&&d.gwQ().i(0,"ifd0").gib(0)!==1)d=A.d5f(d)
x=D.d.aY(e*(d.gb4(0)/d.gcX(0)))
if(e<=0)e=D.d.aY(x*(d.gcX(0)/d.gb4(0)))
if(e===d.gcX(0)&&x===d.gb4(0))return A.BB(d,!1,!1)
w=new Int32Array(e)
v=d.gcX(0)/e
for(u=0;u<e;++u)w[u]=D.d.D(u*v)
t=d.gkY().length
for(s=y.g,r=g,q=0;q<t;++q){p=d.x
o=(p===$?d.x=B.a([],s):p)[q]
n=A.apO(o,x,!0,e)
m=r==null
if(!m)r.nn(n)
if(m)r=n
m=o.a
l=m==null
k=l?g:m.b
j=(k==null?0:k)/x
if((l?g:m.geS())!=null)for(i=0;i<x;++i){h=D.d.D(i*j)
for(u=0;u<e;++u){m=w[u]
l=o.a
if(l==null)m=g
else{m=l.nT(m,h)
m=D.d.D(m.gef(m))}if(m==null)m=0
l=n.a
if(l!=null)l.mz(u,i,m)}}else for(i=0;i<x;++i){h=D.d.D(i*j)
for(u=0;u<e;++u){m=w[u]
l=o.a
m=l==null?g:l.ek(m,h,g)
n.xY(u,i,m==null?new A.ff():m)}}}r.toString
return r},
aTA(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=D.c.ap(a8,360)
a7.grl()
if(D.c.ap(a6,90)===0)switch(D.c.b7(a6,90)){case 1:return A.d4v(a7)
case 2:return A.d4t(a7)
case 3:return A.d4u(a7)
default:return A.BB(a7,!1,!1)}x=a6*3.141592653589793/180
w=Math.cos(x)
v=Math.sin(x)
u=a7.gcX(0)
t=a7.gcX(0)
s=a7.gb4(0)
r=a7.gb4(0)
q=0.5*a7.gcX(0)
p=0.5*a7.gb4(0)
s=Math.abs(u*w)+Math.abs(s*v)
o=0.5*s
r=Math.abs(t*v)+Math.abs(r*w)
n=0.5*r
m=a7.gkY().length
for(u=y.g,l=a5,k=0;k<m;++k){j=a7.x
i=(j===$?a7.x=B.a([],u):j)[k]
t=l==null
h=t?a5:l.WB()
if(h==null){g=D.d.D(s)
h=A.apO(a7,D.d.D(r),!0,g)}if(t)l=h
for(t=h.a,t=t.ga1(t);t.q();){f=t.gL(t)
e=f.gn3(f)
d=f.gnR(f)
g=e-o
a0=d-n
a1=q+g*w+a0*v
a2=p-g*v+a0*w
g=!1
if(a1>=0)if(a2>=0){a0=i.a
a3=a0==null
a4=a3?a5:a0.a
if(a1<(a4==null?0:a4)){g=a3?a5:a0.b
g=a2<(g==null?0:g)}}if(g)h.xY(e,d,i.aHL(a1,a2,C.anF))}}l.toString
return l},
d4v(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gkY(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.P)(x),++u){t=x[u]
s=v==null
r=s?k:v.WB()
if(r==null){q=t.a
p=q==null
o=p?k:q.b
if(o==null)o=0
q=p?k:q.a
r=A.apO(t,q==null?0:q,!0,o)}if(s)v=r
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
s=s==null?k:s.ek(m,n-l,k)
r.xY(l,m,s==null?new A.ff():s);++l}++m}}v.toString
return v},
d4t(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gkY(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.P)(x),++u){t=x[u]
s=t.a
r=s==null
q=r?k:s.a
p=(q==null?0:q)-1
s=r?k:s.b
o=(s==null?0:s)-1
s=v==null
n=s?k:v.WB()
if(n==null)n=A.BB(t,!0,!0)
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
r=r==null?k:r.ek(p-l,s,k)
n.xY(l,m,r==null?new A.ff():r);++l}++m}}v.toString
return v},
d4u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gkY(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.P)(x),++u){t=x[u]
s=d.a
s=s==null?k:s.a
r=(s==null?0:s)-1
s=v==null
q=s?k:v.WB()
if(q==null){p=t.a
o=p==null
n=o?k:p.b
if(n==null)n=0
p=o?k:p.a
q=A.apO(t,p==null?0:p,!0,n)}if(s)v=q
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
p=p==null?k:p.ek(s,l,k)
q.xY(l,m,p==null?new A.ff():p);++l}++m}}v.toString
return v},
cgy(d){var x
d=(d&-d)>>>0
x=d!==0?31:32
if((d&65535)!==0)x-=16
if((d&16711935)!==0)x-=8
if((d&252645135)!==0)x-=4
if((d&858993459)!==0)x-=2
return(d&1431655765)!==0?x-1:x},
daS(d){$.cql().m(0,0,d)
return $.cI0().i(0,0)},
cEv(d,e,f,g){return(D.c.bc(d,0,255)|D.c.bc(e,0,255)<<8|D.c.bc(f,0,255)<<16|D.c.bc(g,0,255)<<24)>>>0},
uV(d,e,f){var x,w,v,u,t,s=e.gu(e),r=e.gdu(),q=d.geS(),p=q==null?null:q.gdu()
if(p==null)p=d.gdu()
x=d.gu(d)
if(s===1){w=d.gu(d)>2?d.gjO():d.i(0,0)
e.m(0,0,A.aTy(B.hJ(d.i(0,0))?D.d.fZ(w):w,p,r))}else if(s<=x)for(v=0;v<s;++v)e.m(0,v,A.aTy(d.i(0,v),p,r))
else if(x===2){u=A.aTy(d.i(0,0),p,r)
if(s===3){e.m(0,0,u)
e.m(0,1,u)
e.m(0,2,u)}else{f=A.aTy(d.i(0,1),p,r)
e.m(0,0,u)
e.m(0,1,u)
e.m(0,2,u)
e.m(0,3,f)}}else{for(v=0;v<x;++v)e.m(0,v,A.aTy(d.i(0,v),p,r))
t=x===1?e.i(0,0):0
for(v=x;v<s;++v)e.m(0,v,v===3?f:t)}return e},
pr(d,e,f,g,h){var x,w,v=d.geS(),u=v==null?null:v.gdu()
if(u==null)u=d.gdu()
v=h==null
x=v?null:h.gdu()
f=x==null?f:x
if(f==null)f=d.gdu()
x=v?null:h.gu(h)
g=x==null?g:x
if(g==null)g=d.gu(d)
if(e==null)e=0
if(f===u&&g===d.gu(d)){if(v)return d.dZ(0)
h.iX(0,d)
return h}switch(f.a){case 3:if(v)w=new A.xv(new Uint8Array(g))
else w=h
return A.uV(d,w,e)
case 0:return A.uV(d,v?new A.MD(g,0):h,e)
case 1:return A.uV(d,v?new A.MF(g,0):h,e)
case 2:if(v){v=g<3?1:2
w=new A.MH(g,new Uint8Array(v))}else w=h
return A.uV(d,w,e)
case 4:if(v)w=new A.ME(new Uint16Array(g))
else w=h
return A.uV(d,w,e)
case 5:if(v)w=new A.MG(new Uint32Array(g))
else w=h
return A.uV(d,w,e)
case 6:if(v)w=new A.MA(new Int8Array(g))
else w=h
return A.uV(d,w,e)
case 7:if(v)w=new A.My(new Int16Array(g))
else w=h
return A.uV(d,w,e)
case 8:if(v)w=new A.Mz(new Int32Array(g))
else w=h
return A.uV(d,w,e)
case 9:if(v)w=new A.Mv(new Uint16Array(g))
else w=h
return A.uV(d,w,e)
case 10:if(v)w=new A.Mw(new Float32Array(g))
else w=h
return A.uV(d,w,e)
case 11:if(v)w=new A.Mx(new Float64Array(g))
else w=h
return A.uV(d,w,e)}},
jl(d){return 0.299*d.gaw(d)+0.587*d.gaK()+0.114*d.gaL(d)},
cDe(d,e,f,g){var x=1-g/255
return B.a([D.d.aY(255*(1-d/255)*x),D.d.aY(255*(1-e/255)*x),D.d.aY(255*(1-f/255)*x)],y.t)},
fO(d){var x,w,v,u=$.cqk()
u.$flags&2&&B.A(u)
u[0]=d
x=$.cI_()[0]
if(d===0)return x>>>16
if($.hx==null)A.is()
w=$.ctZ.cl()[x>>>23&511]
if(w!==0){v=x&8388607
return w+(v+4095+(v>>>13&1)>>>13)}return A.cPG(x)},
cPG(d){var x,w,v=d>>>16&32768,u=(d>>>23&255)-112,t=d&8388607
if(u<=0){if(u<-10)return v
t|=8388608
x=14-u
return(v|D.c.nW(t+(D.c.eP(1,x-1)-1)+(D.c.fX(t,x)&1),x))>>>0}else if(u===143)if(t===0)return v|31744
else{t=t>>>13
w=t===0?1:0
return v|t|w|31744}else{t=t+4095+(t>>>13&1)
if((t&8388608)!==0){++u
t=0}if(u>30)return v|31744
return(v|u<<10|t>>>13)>>>0}},
is(){var x,w,v,u,t=$.hx
if(t!=null)return t
x=new Uint32Array(65536)
$.hx=J.aUp(D.bl.gag(x),0,null)
t=new Uint16Array(512)
$.ctZ.b=t
for(w=0;w<256;++w){v=(w&255)-112
if(v<=0||v>=30){t[w]=0
t[(w|256)>>>0]=0}else{u=v<<10>>>0
t[w]=u
t[(w|256)>>>0]=(u|32768)>>>0}}for(w=0;w<65536;++w)x[w]=A.cPH(w)
t=$.hx
t.toString
return t},
cPH(d){var x,w=d>>>15&1,v=d>>>10&31,u=d&1023
if(v===0)if(u===0)return w<<31>>>0
else{for(;(u&1024)===0;){u=u<<1;--v}++v
u&=4294966271}else if(v===31){x=w<<31
if(u===0)return(x|2139095040)>>>0
else return(x|u<<13|2139095040)>>>0}return(w<<31|v+112<<23|u<<13)>>>0}},C,W,G,L
J=c[1]
B=c[0]
D=c[2]
M=c[165]
N=c[153]
O=c[175]
P=c[197]
H=c[206]
Q=c[311]
R=c[247]
S=c[191]
F=c[150]
T=c[155]
U=c[86]
I=c[287]
V=c[248]
E=c[49]
K=c[91]
A=a.updateHolder(c[11],A)
C=c[331]
W=c[257]
G=c[189]
L=c[194]
A.ahs.prototype={}
A.bg5.prototype={}
A.bg4.prototype={
gu(d){var x=this.e
x===$&&B.b()
return x-(this.b-this.c)},
gOZ(){var x=this.b,w=this.e
w===$&&B.b()
return x>=this.c+w},
i(d,e){return this.a[this.b+e]},
dO(d,e){var x,w
for(x=this.b,w=x+this.gu(0);x<w;++x);return-1},
df(){return this.a[this.b++]},
l2(d){var x,w,v,u=this,t=u.c,s=u.b-t+t
if(d<0){x=u.e
x===$&&B.b()
w=x-(s-t)}else w=d
v=A.BL(u.a,u.d,w,s)
u.b=u.b+v.gu(0)
return v},
an(){var x,w,v,u=this,t=u.a,s=u.b,r=u.b=s+1,q=t[s]&255
s=u.b=r+1
x=t[r]&255
r=u.b=s+1
w=t[s]&255
u.b=r+1
v=t[r]&255
if(u.d===1)return(q<<24|x<<16|w<<8|v)>>>0
return(v<<24|w<<16|x<<8|q)>>>0},
hK(){var x,w,v,u,t=this,s=t.gu(0),r=t.a
if(y.D.b(r)){x=t.b
w=r.length
if(x+s>w)s=w-x
return J.d_(D.A.gag(r),r.byteOffset+t.b,s)}x=t.b
v=x+s
u=r.length
return new Uint8Array(B.bU(J.aUz(r,x,v>u?u:v)))}}
A.boS.prototype={}
A.boR.prototype={
aZ(d){var x,w,v=this
if(v.a===v.c.length)v.bex()
x=v.c
w=v.a++
x.$flags&2&&B.A(x)
x[w]=d&255},
a0A(d,e){var x,w,v,u,t,s,r=this
if(e==null)e=d.length
for(;x=r.a,w=x+e,v=r.c,u=v.length,w>u;)r.a5q(w-u)
if(e===1){u=d[0]
v.$flags&2&&B.A(v)
v[x]=u}else if(e===2){u=d[0]
v.$flags&2&&B.A(v)
v[x]=u
v[x+1]=d[1]}else if(e===3){u=d[0]
v.$flags&2&&B.A(v)
v[x]=u
v[x+1]=d[1]
v[x+2]=d[2]}else if(e===4){u=d[0]
v.$flags&2&&B.A(v)
v[x]=u
v[x+1]=d[1]
v[x+2]=d[2]
v[x+3]=d[3]}else if(e===5){u=d[0]
v.$flags&2&&B.A(v)
v[x]=u
v[x+1]=d[1]
v[x+2]=d[2]
v[x+3]=d[3]
v[x+4]=d[4]}else if(e===6){u=d[0]
v.$flags&2&&B.A(v)
v[x]=u
v[x+1]=d[1]
v[x+2]=d[2]
v[x+3]=d[3]
v[x+4]=d[4]
v[x+5]=d[5]}else if(e===7){u=d[0]
v.$flags&2&&B.A(v)
v[x]=u
v[x+1]=d[1]
v[x+2]=d[2]
v[x+3]=d[3]
v[x+4]=d[4]
v[x+5]=d[5]
v[x+6]=d[6]}else if(e===8){u=d[0]
v.$flags&2&&B.A(v)
v[x]=u
v[x+1]=d[1]
v[x+2]=d[2]
v[x+3]=d[3]
v[x+4]=d[4]
v[x+5]=d[5]
v[x+6]=d[6]
v[x+7]=d[7]}else if(e===9){u=d[0]
v.$flags&2&&B.A(v)
v[x]=u
v[x+1]=d[1]
v[x+2]=d[2]
v[x+3]=d[3]
v[x+4]=d[4]
v[x+5]=d[5]
v[x+6]=d[6]
v[x+7]=d[7]
v[x+8]=d[8]}else if(e===10){u=d[0]
v.$flags&2&&B.A(v)
v[x]=u
v[x+1]=d[1]
v[x+2]=d[2]
v[x+3]=d[3]
v[x+4]=d[4]
v[x+5]=d[5]
v[x+6]=d[6]
v[x+7]=d[7]
v[x+8]=d[8]
v[x+9]=d[9]}else for(u=v.$flags|0,t=0;t<e;++t,++x){s=d[t]
u&2&&B.A(v)
v[x]=s}r.a=w},
mx(d){return this.a0A(d,null)},
bKQ(d){var x,w,v,u,t=this,s=d.c
while(!0){x=t.a
w=d.e
w===$&&B.b()
w=x+(w-(d.b-s))
v=t.c
u=v.length
if(!(w>u))break
t.a5q(w-u)}D.A.dM(v,x,x+d.gu(0),d.a,d.b)
t.a=t.a+d.gu(0)},
ig(d){var x=this
if(x.b===1){x.aZ(d>>>24&255)
x.aZ(d>>>16&255)
x.aZ(d>>>8&255)
x.aZ(d&255)
return}x.aZ(d&255)
x.aZ(d>>>8&255)
x.aZ(d>>>16&255)
x.aZ(d>>>24&255)},
agC(d,e){var x=this
if(d<0)d=x.a+d
if(e==null)e=x.a
else if(e<0)e=x.a+e
return J.d_(D.A.gag(x.c),d,e-d)},
jW(d){return this.agC(d,null)},
a5q(d){var x=d!=null?d>32768?d:32768:32768,w=this.c,v=w.length,u=new Uint8Array((v+x)*2)
D.A.ht(u,0,v,w)
this.c=u},
bex(){return this.a5q(null)},
gu(d){return this.a}}
A.ced.prototype={
Cu(d,e){var x,w,v,u,t=d.df(),s=d.df(),r=t&8
D.c.P(t,3)
if(r!==8)throw B.f(A.VJ("Only DEFLATE compression supported: "+r))
if(D.c.ap((t<<8>>>0)+s,31)!==0)throw B.f(A.VJ("Invalid FCHECK"))
if((s>>>5&1)!==0){d.an()
throw B.f(A.VJ("FDICT Encoding not currently supported"))}x=A.apC(C.aCv)
w=A.apC(C.asB)
v=A.clH(0,null)
w=new A.bfJ(d,v,x,w)
w.b=!0
w.b9o()
u=y.L.a(J.d_(D.A.gag(v.c),0,v.a))
d.an()
return u}}
A.b4q.prototype={
aZk(d){var x,w,v,u,t=this
if(d>4)throw B.f(A.VJ("Invalid Deflate Parameter"))
x=t.x
x===$&&B.b()
if(x!==0)t.T8()
x=!0
if(t.c.gOZ()){w=t.k3
w===$&&B.b()
if(w===0)x=d!==0&&t.e!==666}if(x){switch($.vk.cl().e){case 0:v=t.aZn(d)
break
case 1:v=t.aZl(d)
break
case 2:v=t.aZm(d)
break
default:v=-1
break}x=v===2
if(x||v===3)t.e=666
if(v===0||x)return 0
if(v===1){if(d===1){t.lq(2,3)
t.G5(256,C.rg)
t.aw4()
x=t.cN
x===$&&B.b()
w=t.X
w===$&&B.b()
if(1+x+10-w<9){t.lq(2,3)
t.G5(256,C.rg)
t.aw4()}t.cN=7}else{t.atu(0,0,!1)
if(d===3){x=t.db
x===$&&B.b()
w=t.cx
u=0
for(;u<x;++u){w===$&&B.b()
w.$flags&2&&B.A(w)
w[u]=0}}}t.T8()}}if(d!==4)return 0
return 1},
baD(){var x,w,v=this,u=v.as
u===$&&B.b()
v.ch=2*u
u=v.cx
u===$&&B.b()
x=v.db
x===$&&B.b();--x
u.$flags&2&&B.A(u)
u[x]=0
for(w=0;w<x;++w)u[w]=0
v.k3=v.fx=v.k1=0
v.fy=v.k4=2
v.cy=v.id=0},
ao_(){var x,w,v,u=this
for(x=u.p2,w=0;w<286;++w){x===$&&B.b()
x.$flags&2&&B.A(x)
x[w*2]=0}for(v=u.p3,w=0;w<30;++w){v===$&&B.b()
v.$flags&2&&B.A(v)
v[w*2]=0}for(v=u.p4,w=0;w<19;++w){v===$&&B.b()
v.$flags&2&&B.A(v)
v[w*2]=0}x===$&&B.b()
x.$flags&2&&B.A(x)
x[512]=1
u.bs=u.bU=u.av=u.b_=0},
a5H(d,e){var x,w,v=this.to,u=v[e],t=e<<1>>>0,s=v.$flags|0,r=this.xr
while(!0){x=this.x1
x===$&&B.b()
if(!(t<=x))break
if(t<x&&A.csS(d,v[t+1],v[t],r))++t
if(A.csS(d,u,v[t],r))break
x=v[t]
s&2&&B.A(v)
v[e]=x
w=t<<1>>>0
e=t
t=w}s&2&&B.A(v)
v[e]=u},
arq(d,e){var x,w,v,u,t,s,r,q,p,o,n=d[1]
if(n===0){x=138
w=3}else{x=7
w=4}d.$flags&2&&B.A(d)
d[(e+1)*2+1]=65535
for(v=this.p4,u=0,t=-1,s=0;u<=e;n=r){++u
r=d[u*2+1];++s
if(s<x&&n===r)continue
else{q=3
if(s<w){v===$&&B.b()
p=n*2
o=v[p]
v.$flags&2&&B.A(v)
v[p]=o+s}else if(n!==0){if(n!==t){v===$&&B.b()
p=n*2
o=v[p]
v.$flags&2&&B.A(v)
v[p]=o+1}v===$&&B.b()
p=v[32]
v.$flags&2&&B.A(v)
v[32]=p+1}else if(s<=10){v===$&&B.b()
p=v[34]
v.$flags&2&&B.A(v)
v[34]=p+1}else{v===$&&B.b()
p=v[36]
v.$flags&2&&B.A(v)
v[36]=p+1}}if(r===0){w=q
x=138}else if(n===r){w=q
x=6}else{x=7
w=4}t=n
s=0}},
aV8(){var x,w,v=this,u=v.p2
u===$&&B.b()
x=v.R8.b
x===$&&B.b()
v.arq(u,x)
x=v.p3
x===$&&B.b()
u=v.RG.b
u===$&&B.b()
v.arq(x,u)
v.rx.a2I(v)
for(u=v.p4,w=18;w>=3;--w){u===$&&B.b()
if(u[C.B_[w]*2+1]!==0)break}u=v.av
u===$&&B.b()
v.av=u+(3*(w+1)+5+5+4)
return w},
bk8(d,e,f){var x,w,v,u=this
u.lq(d-257,5)
x=e-1
u.lq(x,5)
u.lq(f-4,4)
for(w=0;w<f;++w){v=u.p4
v===$&&B.b()
u.lq(v[C.B_[w]*2+1],3)}v=u.p2
v===$&&B.b()
u.as0(v,d-1)
v=u.p3
v===$&&B.b()
u.as0(v,x)},
as0(d,e){var x,w,v,u,t,s,r,q,p,o,n=this,m=d[1]
if(m===0){x=138
w=3}else{x=7
w=4}for(v=0,u=-1,t=0;v<=e;m=s){++v
s=d[v*2+1];++t
if(t<x&&m===s)continue
else{r=3
if(t<w){q=m*2
p=q+1
do{o=n.p4
o===$&&B.b()
n.lq(o[q]&65535,o[p]&65535)}while(--t,t!==0)}else if(m!==0){if(m!==u){q=n.p4
q===$&&B.b()
p=m*2
n.lq(q[p]&65535,q[p+1]&65535);--t}q=n.p4
q===$&&B.b()
n.lq(q[32]&65535,q[33]&65535)
n.lq(t-3,2)}else{q=n.p4
if(t<=10){q===$&&B.b()
n.lq(q[34]&65535,q[35]&65535)
n.lq(t-3,3)}else{q===$&&B.b()
n.lq(q[36]&65535,q[37]&65535)
n.lq(t-11,7)}}}if(s===0){w=r
x=138}else if(m===s){w=r
x=6}else{x=7
w=4}u=m
t=0}},
bhf(d,e,f){var x,w,v,u,t
if(f===0)return
x=this.x
x===$&&B.b()
w=this.f
v=x
u=0
for(;u<f;++u,++v){w===$&&B.b()
t=d[u+e]
w.$flags&2&&B.A(w)
w[v]=t}this.x=x+f},
qB(d){var x,w=this.f
w===$&&B.b()
x=this.x
x===$&&B.b()
this.x=x+1
w.$flags&2&&B.A(w)
w[x]=d},
G5(d,e){var x=d*2
this.lq(e[x]&65535,e[x+1]&65535)},
lq(d,e){var x,w=this,v=w.X
v===$&&B.b()
x=w.E
if(v>16-e){x===$&&B.b()
v=w.E=(x|D.c.eP(d,v)&65535)>>>0
w.qB(v)
w.qB(A.pq(v,8))
w.E=A.pq(d,16-w.X)
w.X=w.X+(e-16)}else{x===$&&B.b()
w.E=(x|D.c.eP(d,v)&65535)>>>0
w.X=v+e}},
MD(d,e){var x,w,v,u,t,s=this,r=s.f
r===$&&B.b()
x=s.bW
x===$&&B.b()
w=s.bs
w===$&&B.b()
v=A.pq(d,8)
r.$flags&2&&B.A(r)
r[x+w*2]=v
v=s.f
w=s.bW
x=s.bs
v.$flags&2&&B.A(v)
v[w+x*2+1]=d
w=s.y1
w===$&&B.b()
v[w+x]=e
s.bs=x+1
if(d===0){r=s.p2
r===$&&B.b()
x=e*2
w=r[x]
r.$flags&2&&B.A(r)
r[x]=w+1}else{r=s.bU
r===$&&B.b()
s.bU=r+1
r=s.p2
r===$&&B.b()
x=(C.M_[e]+256+1)*2
w=r[x]
r.$flags&2&&B.A(r)
r[x]=w+1
w=s.p3
w===$&&B.b()
x=A.cAu(d-1)*2
r=w[x]
w.$flags&2&&B.A(w)
w[x]=r+1}r=s.bs
if((r&8191)===0){x=s.ok
x===$&&B.b()
x=x>2}else x=!1
if(x){u=r*8
r=s.k1
r===$&&B.b()
x=s.fx
x===$&&B.b()
for(w=s.p3,t=0;t<30;++t){w===$&&B.b()
u+=w[t*2]*(5+C.r1[t])}u=A.pq(u,3)
w=s.bU
w===$&&B.b()
v=s.bs
if(w<v/2&&u<(r-x)/2)return!0
r=v}x=s.y2
x===$&&B.b()
return r===x-1},
ajT(d,e){var x,w,v,u,t,s,r=this,q=r.bs
q===$&&B.b()
if(q!==0){x=0
do{q=r.f
q===$&&B.b()
w=r.bW
w===$&&B.b()
w+=x*2
v=q[w]<<8&65280|q[w+1]&255
w=r.y1
w===$&&B.b()
u=q[w+x]&255;++x
if(v===0)r.G5(u,d)
else{t=C.M_[u]
r.G5(t+256+1,d)
s=C.K8[t]
if(s!==0)r.lq(u-C.apq[t],s);--v
t=A.cAu(v)
r.G5(t,e)
s=C.r1[t]
if(s!==0)r.lq(v-C.ask[t],s)}}while(x<r.bs)}r.G5(256,d)
r.cN=d[513]},
aJF(){var x,w,v,u
for(x=this.p2,w=0,v=0;w<7;){x===$&&B.b()
v+=x[w*2];++w}for(u=0;w<128;){x===$&&B.b()
u+=x[w*2];++w}for(;w<256;){x===$&&B.b()
v+=x[w*2];++w}this.y=v>A.pq(u,2)?0:1},
aw4(){var x=this,w=x.X
w===$&&B.b()
if(w===16){w=x.E
w===$&&B.b()
x.qB(w)
x.qB(A.pq(w,8))
x.X=x.E=0}else if(w>=8){w=x.E
w===$&&B.b()
x.qB(w)
x.E=A.pq(x.E,8)
x.X=x.X-8}},
aiJ(){var x=this,w=x.X
w===$&&B.b()
if(w>8){w=x.E
w===$&&B.b()
x.qB(w)
x.qB(A.pq(w,8))}else if(w>0){w=x.E
w===$&&B.b()
x.qB(w)}x.X=x.E=0},
ys(d){var x,w,v,u,t,s=this,r=s.fx
r===$&&B.b()
if(r>=0)x=r
else x=-1
w=s.k1
w===$&&B.b()
r=w-r
w=s.ok
w===$&&B.b()
if(w>0){if(s.y===2)s.aJF()
s.R8.a2I(s)
s.RG.a2I(s)
v=s.aV8()
w=s.av
w===$&&B.b()
u=A.pq(w+3+7,3)
w=s.b_
w===$&&B.b()
t=A.pq(w+3+7,3)
if(t<=u)u=t}else{t=r+5
u=t
v=0}if(r+4<=u&&x!==-1)s.atu(x,r,d)
else if(t===u){s.lq(2+(d?1:0),3)
s.ajT(C.rg,C.MI)}else{s.lq(4+(d?1:0),3)
r=s.R8.b
r===$&&B.b()
x=s.RG.b
x===$&&B.b()
s.bk8(r+1,x+1,v+1)
x=s.p2
x===$&&B.b()
r=s.p3
r===$&&B.b()
s.ajT(x,r)}s.ao_()
if(d)s.aiJ()
s.fx=s.k1
s.T8()},
aZn(d){var x,w,v,u,t,s=this,r=s.r
r===$&&B.b()
x=r-5
x=65535>x?x:65535
for(r=d===0;!0;){w=s.k3
w===$&&B.b()
if(w<=1){s.a3H()
w=s.k3
v=w===0
if(v&&r)return 0
if(v)break}v=s.k1
v===$&&B.b()
w=s.k1=v+w
s.k3=0
v=s.fx
v===$&&B.b()
u=v+x
if(w>=u){s.k3=w-u
s.k1=u
s.ys(!1)}w=s.k1
v=s.fx
t=s.as
t===$&&B.b()
if(w-v>=t-262)s.ys(!1)}r=d===4
s.ys(r)
return r?3:1},
atu(d,e,f){var x,w=this
w.lq(f?1:0,3)
w.aiJ()
w.cN=8
w.qB(e)
w.qB(A.pq(e,8))
x=(~e>>>0)+65536&65535
w.qB(x)
w.qB(A.pq(x,8))
x=w.ay
x===$&&B.b()
w.bhf(x,d,e)},
a3H(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.c
do{x=n.ch
x===$&&B.b()
w=n.k3
w===$&&B.b()
v=n.k1
v===$&&B.b()
u=x-w-v
if(u===0&&v===0&&w===0){x=n.as
x===$&&B.b()
u=x}else{x=n.as
x===$&&B.b()
if(v>=x+x-262){w=n.ay
w===$&&B.b()
D.A.dM(w,0,x,w,x)
x=n.k2
t=n.as
n.k2=x-t
n.k1=n.k1-t
x=n.fx
x===$&&B.b()
n.fx=x-t
x=n.db
x===$&&B.b()
w=n.cx
w===$&&B.b()
v=w.$flags|0
s=x
r=s
do{--s
q=w[s]&65535
x=q>=t?q-t:0
v&2&&B.A(w)
w[s]=x}while(--r,r!==0)
x=n.CW
x===$&&B.b()
w=x.$flags|0
s=t
r=s
do{--s
q=x[s]&65535
v=q>=t?q-t:0
w&2&&B.A(x)
x[s]=v}while(--r,r!==0)
u+=t}}if(m.gOZ())return
x=n.ay
x===$&&B.b()
r=n.bhp(x,n.k1+n.k3,u)
x=n.k3=n.k3+r
if(x>=3){w=n.ay
v=n.k1
p=w[v]&255
n.cy=p
o=n.fr
o===$&&B.b()
o=D.c.eP(p,o)
v=w[v+1]
w=n.dy
w===$&&B.b()
n.cy=((o^v&255)&w)>>>0}}while(x<262&&!m.gOZ())},
aZl(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
for(x=d===0,w=$.vk.a,v=0;!0;){u=m.k3
u===$&&B.b()
if(u<262){m.a3H()
u=m.k3
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=m.cy
u===$&&B.b()
t=m.fr
t===$&&B.b()
t=D.c.eP(u,t)
u=m.ay
u===$&&B.b()
s=m.k1
s===$&&B.b()
u=u[s+2]
r=m.dy
r===$&&B.b()
r=m.cy=((t^u&255)&r)>>>0
u=m.cx
u===$&&B.b()
t=u[r]
v=t&65535
q=m.CW
q===$&&B.b()
p=m.ax
p===$&&B.b()
q.$flags&2&&B.A(q)
q[(s&p)>>>0]=t
u.$flags&2&&B.A(u)
u[r]=s}if(v!==0){u=m.k1
u===$&&B.b()
t=m.as
t===$&&B.b()
t=(u-v&65535)<=t-262
u=t}else u=!1
if(u){u=m.p1
u===$&&B.b()
if(u!==2)m.fy=m.aoL(v)}u=m.fy
u===$&&B.b()
t=m.k1
if(u>=3){t===$&&B.b()
o=m.MD(t-m.k2,u-3)
u=m.k3
t=m.fy
u-=t
m.k3=u
s=$.vk.b
if(s===$.vk)B.a4(B.vN(w))
if(t<=s.b&&u>=3){u=m.fy=t-1
do{t=m.k1=m.k1+1
s=m.cy
s===$&&B.b()
r=m.fr
r===$&&B.b()
r=D.c.eP(s,r)
s=m.ay
s===$&&B.b()
s=s[t+2]
q=m.dy
q===$&&B.b()
q=m.cy=((r^s&255)&q)>>>0
s=m.cx
s===$&&B.b()
r=s[q]
v=r&65535
p=m.CW
p===$&&B.b()
n=m.ax
n===$&&B.b()
p.$flags&2&&B.A(p)
p[(t&n)>>>0]=r
s.$flags&2&&B.A(s)
s[q]=t}while(u=m.fy=u-1,u!==0)
m.k1=t+1}else{u=m.k1=m.k1+t
m.fy=0
t=m.ay
t===$&&B.b()
s=t[u]&255
m.cy=s
r=m.fr
r===$&&B.b()
r=D.c.eP(s,r)
u=t[u+1]
t=m.dy
t===$&&B.b()
m.cy=((r^u&255)&t)>>>0}}else{u=m.ay
u===$&&B.b()
t===$&&B.b()
o=m.MD(0,u[t]&255)
m.k3=m.k3-1
m.k1=m.k1+1}if(o)m.ys(!1)}x=d===4
m.ys(x)
return x?3:1},
aZm(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
for(x=d===0,w=$.vk.a,v=0;!0;){u=l.k3
u===$&&B.b()
if(u<262){l.a3H()
u=l.k3
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=l.cy
u===$&&B.b()
t=l.fr
t===$&&B.b()
t=D.c.eP(u,t)
u=l.ay
u===$&&B.b()
s=l.k1
s===$&&B.b()
u=u[s+2]
r=l.dy
r===$&&B.b()
r=l.cy=((t^u&255)&r)>>>0
u=l.cx
u===$&&B.b()
t=u[r]
v=t&65535
q=l.CW
q===$&&B.b()
p=l.ax
p===$&&B.b()
q.$flags&2&&B.A(q)
q[(s&p)>>>0]=t
u.$flags&2&&B.A(u)
u[r]=s}u=l.fy
u===$&&B.b()
l.k4=u
l.go=l.k2
l.fy=2
t=!1
if(v!==0){s=$.vk.b
if(s===$.vk)B.a4(B.vN(w))
if(u<s.b){u=l.k1
u===$&&B.b()
t=l.as
t===$&&B.b()
t=(u-v&65535)<=t-262
u=t}else u=t}else u=t
t=2
if(u){u=l.p1
u===$&&B.b()
if(u!==2){u=l.aoL(v)
l.fy=u}else u=t
s=!1
if(u<=5)if(l.p1!==1){if(u===3){s=l.k1
s===$&&B.b()
s=s-l.k2>4096}}else s=!0
if(s){l.fy=2
u=t}}else u=t
t=l.k4
if(t>=3&&u<=t){u=l.k1
u===$&&B.b()
o=u+l.k3-3
n=l.MD(u-1-l.go,t-3)
t=l.k3
u=l.k4
l.k3=t-(u-1)
u=l.k4=u-2
do{t=l.k1=l.k1+1
if(t<=o){s=l.cy
s===$&&B.b()
r=l.fr
r===$&&B.b()
r=D.c.eP(s,r)
s=l.ay
s===$&&B.b()
s=s[t+2]
q=l.dy
q===$&&B.b()
q=l.cy=((r^s&255)&q)>>>0
s=l.cx
s===$&&B.b()
r=s[q]
v=r&65535
p=l.CW
p===$&&B.b()
m=l.ax
m===$&&B.b()
p.$flags&2&&B.A(p)
p[(t&m)>>>0]=r
s.$flags&2&&B.A(s)
s[q]=t}}while(u=l.k4=u-1,u!==0)
l.id=0
l.fy=2
l.k1=t+1
if(n)l.ys(!1)}else{u=l.id
u===$&&B.b()
if(u!==0){u=l.ay
u===$&&B.b()
t=l.k1
t===$&&B.b()
if(l.MD(0,u[t-1]&255))l.ys(!1)
l.k1=l.k1+1
l.k3=l.k3-1}else{l.id=1
u=l.k1
u===$&&B.b()
l.k1=u+1
l.k3=l.k3-1}}}x=l.id
x===$&&B.b()
if(x!==0){x=l.ay
x===$&&B.b()
w=l.k1
w===$&&B.b()
l.MD(0,x[w-1]&255)
l.id=0}x=d===4
l.ys(x)
return x?3:1},
aoL(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=$.vk.cl().d,h=j.k1
h===$&&B.b()
x=j.k4
x===$&&B.b()
w=j.as
w===$&&B.b()
w-=262
v=h>w?h-w:0
u=$.vk.cl().c
w=j.ax
w===$&&B.b()
t=j.k1+258
s=j.ay
s===$&&B.b()
r=h+x
q=s[r-1]
p=s[r]
if(j.k4>=$.vk.cl().a)i=i>>>2
s=j.k3
s===$&&B.b()
if(u>s)u=s
o=t-258
n=x
m=h
do{c$0:{h=j.ay
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
if(k>n){j.k2=d
if(k>=u){n=k
break}h=j.ay
x=o+k
q=h[x-1]
p=h[x]
n=k}m=o}h=j.CW
h===$&&B.b()
d=h[d&w]&65535
if(d>v){--i
h=i!==0}else h=!1}while(h)
h=j.k3
if(n<=h)return n
return h},
bhp(d,e,f){var x,w,v,u,t=this
if(f===0||t.c.gOZ())return 0
x=t.c.l2(f)
w=x.gu(0)
if(w===0)return 0
v=x.hK()
u=v.length
if(w>u)w=u
D.A.ht(d,e,e+w,v)
t.b+=w
t.a=A.x1(v,t.a)
return w},
T8(){var x,w=this,v=w.x
v===$&&B.b()
x=w.f
x===$&&B.b()
w.d.a0A(x,v)
x=w.w
x===$&&B.b()
w.w=x+v
v=w.x-v
w.x=v
if(v===0)w.w=0},
b1E(d){switch(d){case 0:return new A.rV(0,0,0,0,0)
case 1:return new A.rV(4,4,8,4,1)
case 2:return new A.rV(4,5,16,8,1)
case 3:return new A.rV(4,6,32,32,1)
case 4:return new A.rV(4,4,16,16,2)
case 5:return new A.rV(8,16,32,32,2)
case 6:return new A.rV(8,16,128,128,2)
case 7:return new A.rV(8,32,128,256,2)
case 8:return new A.rV(32,128,258,1024,2)
case 9:return new A.rV(32,258,258,4096,2)}throw B.f(A.VJ("Invalid Deflate parameter"))}}
A.rV.prototype={}
A.bX0.prototype={
b1m(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a
d===$&&B.b()
x=e.c
x===$&&B.b()
w=x.a
v=x.b
u=x.c
t=x.e
for(x=a0.ry,s=x.$flags|0,r=0;r<=15;++r){s&2&&B.A(x)
x[r]=0}q=a0.to
p=a0.x2
p===$&&B.b()
o=q[p]
d.$flags&2&&B.A(d)
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
s&2&&B.A(x)
x[r]=j+1
i=l>=u?v[l-u]:0
h=d[o]
o=a0.av
o===$&&B.b()
a0.av=o+h*(r+i)
if(p){o=a0.b_
o===$&&B.b()
a0.b_=o+h*(w[k]+i)}}if(m===0)return
r=t-1
do{for(g=r;p=x[g],p===0;)--g
s&2&&B.A(x)
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
if(o!==r){k=a0.av
k===$&&B.b()
a0.av=k+(r-o)*d[s]
d[p]=r}--l}}},
a2I(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
g===$&&B.b()
x=h.c
x===$&&B.b()
w=x.a
v=x.d
d.x1=0
d.x2=573
for(x=g.$flags|0,u=d.to,t=u.$flags|0,s=d.xr,r=s.$flags|0,q=0,p=-1;q<v;++q){o=q*2
if(g[o]!==0){o=++d.x1
t&2&&B.A(u)
u[o]=q
r&2&&B.A(s)
s[q]=0
p=q}else{x&2&&B.A(g)
g[o+1]=0}}for(o=w!=null;n=d.x1,n<2;){++n
d.x1=n
if(p<2){++p
m=p}else m=0
t&2&&B.A(u)
u[n]=m
n=m*2
x&2&&B.A(g)
g[n]=1
r&2&&B.A(s)
s[m]=0
l=d.av
l===$&&B.b()
d.av=l-1
if(o){l=d.b_
l===$&&B.b()
d.b_=l-w[n+1]}}h.b=p
for(q=D.c.b7(n,2);q>=1;--q)d.a5H(g,q)
m=v
do{q=u[1]
o=u[d.x1--]
t&2&&B.A(u)
u[1]=o
d.a5H(g,1)
k=u[1]
o=--d.x2
u[o]=q;--o
d.x2=o
u[o]=k
o=q*2
n=g[o]
l=k*2
j=g[l]
x&2&&B.A(g)
g[m*2]=n+j
j=s[q]
n=s[k]
if(j>n)n=j
r&2&&B.A(s)
s[m]=n+1
g[l+1]=m
g[o+1]=m
i=m+1
u[1]=m
d.a5H(g,1)
if(d.x1>=2){m=i
continue}else break}while(!0)
u[--d.x2]=u[1]
h.b1m(d)
A.d_w(g,p,d.ry)}}
A.c8s.prototype={}
A.beE.prototype={
aSB(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.length
for(x=0;x<k;++x){w=d[x]
if(w>l.b)l.b=w
if(w<l.c)l.c=w}w=l.b
v=D.c.eP(1,w)
u=new Uint32Array(v)
l.a=u
for(t=1,s=0,r=2;t<=w;){for(q=t<<16,x=0;x<k;++x)if(d[x]===t){for(p=s,o=0,n=0;n<t;++n){o=(o<<1|p&1)>>>0
p=p>>>1}for(m=(q|x)>>>0,n=o;n<v;n+=r)u[n]=m;++s}++t
s=s<<1>>>0
r=r<<1>>>0}}}
A.bfJ.prototype={
b9o(){var x,w,v,u,t=this
t.e=t.d=0
if(!t.b)return
x=t.a
x===$&&B.b()
w=x.c
while(!0){v=x.b
u=x.e
u===$&&B.b()
if(!(v<w+u))break
if(!t.beX())break}},
beX(){var x,w=this,v=w.a
v===$&&B.b()
if(v.gOZ())return!1
x=w.qC(3)
switch(D.c.P(x,1)){case 0:if(w.bfg()===-1)return!1
break
case 1:if(w.ako(w.r,w.w)===-1)return!1
break
case 2:if(w.bf0()===-1)return!1
break
default:return!1}return(x&1)===0},
qC(d){var x,w,v,u,t,s=this
if(d===0)return 0
for(x=s.a;w=s.e,w<d;){x===$&&B.b()
v=x.b
u=x.e
u===$&&B.b()
if(v>=x.c+u)return-1
x.b=v+1
t=x.a[v]
s.d=(s.d|D.c.eP(t,w))>>>0
s.e=w+8}x=s.d
v=D.c.eq(1,d)
s.d=D.c.hA(x,d)
s.e=w-d
return(x&v-1)>>>0},
a5O(d){var x,w,v,u,t,s,r,q,p=this,o=d.a
o===$&&B.b()
x=d.b
for(w=p.a;v=p.e,v<x;){w===$&&B.b()
u=w.b
t=w.e
t===$&&B.b()
if(u>=w.c+t)return-1
w.b=u+1
s=w.a[u]
p.d=(p.d|D.c.eP(s,v))>>>0
p.e=v+8}w=p.d
r=o[(w&D.c.eP(1,x)-1)>>>0]
q=r>>>16
p.d=D.c.hA(w,q)
p.e=v-q
return r&65535},
bfg(){var x,w,v=this
v.e=v.d=0
x=v.qC(16)
w=v.qC(16)
if(x!==0&&x!==(w^65535)>>>0)return-1
w=v.a
w===$&&B.b()
if(x>w.gu(0))return-1
v.c.bKQ(w.l2(x))
return 0},
bf0(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.qC(5)
if(m===-1)return-1
m+=257
if(m>288)return-1
x=n.qC(5)
if(x===-1)return-1;++x
if(x>32)return-1
w=n.qC(4)
if(w===-1)return-1
w+=4
if(w>19)return-1
v=new Uint8Array(19)
for(u=0;u<w;++u){t=n.qC(3)
if(t===-1)return-1
v[C.B_[u]]=t}s=A.apC(v)
r=m+x
q=new Uint8Array(r)
p=J.d_(D.A.gag(q),0,m)
o=J.d_(D.A.gag(q),m,x)
if(n.aYt(r,s,q)===-1)return-1
return n.ako(A.apC(p),A.apC(o))},
ako(d,e){var x,w,v,u,t,s,r,q=this
for(x=q.c;!0;){w=q.a5O(d)
if(w<0||w>285)return-1
if(w===256)break
if(w<256){x.aZ(w&255)
continue}v=w-257
u=C.aBa[v]+q.qC(C.aCJ[v])
t=q.a5O(e)
if(t<0||t>29)return-1
s=C.aBh[t]+q.qC(C.r1[t])
for(r=-s;u>s;){x.mx(x.jW(r))
u-=s}if(u===s)x.mx(x.jW(r))
else x.mx(x.agC(r,u-s))}for(x=q.a;r=q.e,r>=8;){q.e=r-8
x===$&&B.b()
if(--x.b<0)x.b=0}return 0},
aYt(d,e,f){var x,w,v,u,t,s,r,q,p=this
for(x=f.$flags|0,w=0,v=0;v<d;){u=p.a5O(e)
if(u===-1)return-1
t=0
switch(u){case 16:s=p.qC(2)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.A(f)
f[v]=w}break
case 17:s=p.qC(3)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.A(f)
f[v]=0}w=t
break
case 18:s=p.qC(7)
if(s===-1)return-1
s+=11
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.A(f)
f[v]=0}w=t
break
default:if(u<0||u>15)return-1
q=v+1
x&2&&B.A(f)
f[v]=u
v=q
w=u
break}}return 0}}
A.bJk.prototype={}
A.bJj.prototype={}
A.bJl.prototype={
aze(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=A.clH(1,32768)
m.aZ(120)
for(x=0;w=(x|0)>>>0,(30720+w)%31!==0;)++x
m.aZ(w)
v=A.d8h(d)
u=A.BL(d,1,null,0)
w=A.cnD()
t=A.cnD()
s=A.cnD()
r=new Uint16Array(16)
q=new Uint32Array(573)
p=new Uint8Array(573)
o=A.clH(0,32768)
r=new A.b4q(u,o,w,t,s,r,q,p)
if(e==null||e===-1)e=6
q=!0
q=e>9
if(q)B.a4(A.VJ("Invalid Deflate parameter"))
$.vk.b=r.b1E(e)
q=new Uint16Array(1146)
r.p2=q
p=new Uint16Array(122)
r.p3=p
n=new Uint16Array(78)
r.p4=n
r.at=15
r.as=32768
r.ax=32767
r.dx=15
r.db=32768
r.dy=32767
r.fr=5
r.ay=new Uint8Array(65536)
r.CW=new Uint16Array(32768)
r.cx=new Uint16Array(32768)
r.y2=16384
r.f=new Uint8Array(65536)
r.r=65536
r.bW=16384
r.y1=49152
r.ok=e
r.w=r.x=r.p1=0
r.e=113
r.a=0
w.a=q
w.c=$.cHK()
t.a=p
t.c=$.cHJ()
s.a=n
s.c=$.cHI()
r.X=r.E=0
r.cN=8
r.ao_()
r.baD()
r.aZk(4)
r.T8()
m.mx(y.L.a(J.d_(D.A.gag(o.c),0,o.a)))
m.ig(v)
w=J.d_(D.A.gag(m.c),0,m.a)
return w},
k7(d){return this.aze(d,null)}}
A.Bt.prototype={
N(){return new A.aa0(B.a([],y.s))}}
A.aa0.prototype={
Z(){var x,w=this
w.aj()
x=w.a.c
if(x!=null)w.e=x.i(0,"content")
x=new E.awF()
x.ahZ()
w.as=x
x.Py(new A.bWD(w))
if(w.e==null)w.LR()},
LR(){var x=0,w=B.l(y.H),v=1,u=[],t=this,s,r,q
var $async$LR=B.h(function(d,e){if(d===1){u.push(e)
x=v}while(true)switch(x){case 0:t.B(new A.bWA(t))
v=3
s=t.a.c
s=s==null?null:s.i(0,"load").$0()
x=6
return B.c(y._.b(s)?s:B.cC(s,y.z),$async$LR)
case 6:s=t.e=e
x=s!=null?7:8
break
case 7:x=9
return B.c(t.rU(s),$async$LR)
case 9:case 8:v=1
x=5
break
case 3:v=2
q=u.pop()
x=5
break
case 2:x=1
break
case 5:t.B(new A.bWB(t))
return B.j(null,w)
case 1:return B.i(u.at(-1),w)}})
return B.k($async$LR,w)},
l(){var x=this.as
x===$&&B.b()
x.l()
this.ai()},
A(d){var x,w,v,u=this,t=null,s=y.E,r=B.a([],s)
if(!u.w&&!u.x){x=u.as
x===$&&B.b()
r.push(new B.cu(D.aI,t,t,new B.cO(new B.ad(0,820,0,1/0),E.cuv(x,""),t),t))}if(u.r)r.push(B.aJ(t,D.cU,D.k,D.aq,t,t,t,t,t,t,t,t,t))
if(u.x){x=B.a([],s)
if(u.y==null)D.b.I(x,B.a([G.bp(C.b3Y,t)],s))
else D.b.I(x,B.a([B.aJ(t,B.ax(B.a([G.bp(C.b4c,t),R.dp,U.cvx(t,t,u.y),Q.hb,B.Y(""+u.z+" / "+u.Q.length,t,t,t,t,t,t,t,I.Dy,t,t,t,t,t)],s),D.j,D.f,D.a1,t,D.p),D.k,D.m,t,t,t,t,t,H.b2,t,t,t)],s))
r.push(B.aJ(t,B.cb(new B.a6(H.b2,B.ax(x,D.j,D.f,D.a1,t,D.p),t),t,t),D.k,D.aq,t,t,t,t,t,t,t,t,t))}if(!u.w&&!u.x){x=B.w("Reset",t)
x=E.Wi(u.w?t:new A.bWC(u),x)
w=B.w("Storno",t)
w=E.Wi(u.w?t:u.gbsk(),w)
v=B.w("Save",t)
s=B.aJ(t,S.ek(O.r3(B.aH(B.a([x,w,E.Wi(u.w?t:u.gaId(),v)],s),D.j,D.f,D.h,t),t),t,D.u,t,t,t,D.aa),D.k,D.fN,t,t,t,t,t,t,t,t,17976931348623157e292)}else s=t
return B.k0(!0,P.eW(t,D.m,new B.cr(D.ae,t,D.ac,D.z,r,t),s,t,t,t,!0),!0,D.U,!0,!0)},
xP(){var x=0,w=B.l(y.H),v=this,u,t,s,r,q,p
var $async$xP=B.h(function(d,e){if(d===1)return B.i(e,w)
while(true)switch(x){case 0:r=v.as
r===$&&B.b()
q=E
p=E
x=2
return B.c(r.JQ(),$async$xP)
case 2:u=q.cuw(p.cux(e))
v.B(new A.bWG(v))
r=y.z
x=3
return B.c(B.i8(D.K,null,r),$async$xP)
case 3:t=A.cQM(u)
v.Q=t
x=t.length!==0?4:5
break
case 4:t=v.c
t.toString
x=8
return B.c(M.fT(null,null,!1,null,new A.bWH(),t,null,!0,!0,r),$async$xP)
case 8:x=e?6:7
break
case 6:v.B(new A.bWI(v))
x=9
return B.c(B.i8(D.K,null,r),$async$xP)
case 9:r=v.Q,t=r.length,s=0
case 10:if(!(s<r.length)){x=12
break}x=13
return B.c(A.aps(u,r[s],new A.bWJ(v)),$async$xP)
case 13:u=e
case 11:r.length===t||(0,B.P)(r),++s
x=10
break
case 12:case 7:case 5:v.B(new A.bWK(v))
r=v.c
r.toString
L.fC(r,!1).f.tY(u)
return B.j(null,w)}})
return B.k($async$xP,w)},
a8D(){var x=0,w=B.l(y.H),v=this,u
var $async$a8D=B.h(function(d,e){if(d===1)return B.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
L.fC(u,!1).f.tY(null)
return B.j(null,w)}})
return B.k($async$a8D,w)},
rU(d){return this.aJU(d)},
aJU(d){var x=0,w=B.l(y.H),v=this,u
var $async$rU=B.h(function(e,f){if(e===1)return B.i(f,w)
while(true)switch(x){case 0:u=v.as
u===$&&B.b()
x=2
return B.c(u.K5(d),$async$rU)
case 2:return B.j(null,w)}})
return B.k($async$rU,w)}}
A.aZA.prototype={
J(){return"Channel."+this.b}}
A.hq.prototype={
q(){var x=this.b
return++this.a<x.gu(x)},
gL(d){return this.b.i(0,this.a)},
$ibn:1}
A.Mv.prototype={
dZ(d){return new A.Mv(new Uint16Array(B.bU(this.a)))},
gdu(){return C.hA},
gu(d){return this.a.length},
geS(){return null},
i(d,e){var x,w=this.a
if(e<w.length){w=w[e]
x=$.hx
w=(x!=null?x:A.is())[w]}else w=0
return w},
m(d,e,f){var x,w=this.a
if(e<w.length){x=A.fO(f)
w.$flags&2&&B.A(w)
w[e]=x}},
gef(d){return this.gaw(0)},
gaw(d){var x,w=this.a
if(!D.dM.gT(w)){w=w[0]
x=$.hx
w=(x!=null?x:A.is())[w]}else w=0
return w},
gaK(){var x,w=this.a
if(w.length>1){w=w[1]
x=$.hx
w=(x!=null?x:A.is())[w]}else w=0
return w},
gaL(d){var x,w=this.a
if(w.length>2){w=w[2]
x=$.hx
w=(x!=null?x:A.is())[w]}else w=0
return w},
gaP(d){var x,w=this.a
if(w.length>3){w=w[3]
x=$.hx
w=(x!=null?x:A.is())[w]}else w=0
return w},
gjO(){return A.jl(this)},
iX(d,e){var x,w=e.gaw(e),v=this.a
if(!D.dM.gT(v)){w=A.fO(w)
v.$flags&2&&B.A(v)
v[0]=w}w=e.gaK()
x=v.length
if(x>1){w=A.fO(w)
v.$flags&2&&B.A(v)
v[1]=w}w=e.gaL(e)
if(x>2){w=A.fO(w)
v.$flags&2&&B.A(v)
v[2]=w}w=e.gaP(e)
if(x>3){w=A.fO(w)
v.$flags&2&&B.A(v)
v[3]=w}},
ga1(d){return new A.hq(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aK(B.J(this,!0,B.p(this).h("v.E")))},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
$idO:1}
A.Mw.prototype={
dZ(d){return new A.Mw(new Float32Array(B.bU(this.a)))},
gdu(){return C.j_},
gu(d){return this.a.length},
geS(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x=this.a
if(e<x.length){x.$flags&2&&B.A(x)
x[e]=f}},
gef(d){var x=this.a
return!D.eR.gT(x)?x[0]:0},
gaw(d){var x=this.a
return!D.eR.gT(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaL(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:1},
gjO(){return A.jl(this)},
iX(d,e){var x,w=e.gaw(e),v=this.a
if(!D.eR.gT(v)){v.$flags&2&&B.A(v)
v[0]=w}w=e.gaK()
x=v.length
if(x>1){v.$flags&2&&B.A(v)
v[1]=w}w=e.gaL(e)
if(x>2){v.$flags&2&&B.A(v)
v[2]=w}w=e.gaP(e)
if(x>3){v.$flags&2&&B.A(v)
v[3]=w}},
ga1(d){return new A.hq(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aK(B.J(this,!0,B.p(this).h("v.E")))},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
$idO:1}
A.Mx.prototype={
dZ(d){return new A.Mx(new Float64Array(B.bU(this.a)))},
gdu(){return C.kr},
gu(d){return this.a.length},
geS(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x=this.a
if(e<x.length){x.$flags&2&&B.A(x)
x[e]=f}},
gef(d){var x=this.a
return!D.e6.gT(x)?x[0]:0},
gaw(d){var x=this.a
return!D.e6.gT(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaL(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:1},
gjO(){return A.jl(this)},
iX(d,e){var x,w=e.gaw(e),v=this.a
if(!D.e6.gT(v)){v.$flags&2&&B.A(v)
v[0]=w}w=e.gaK()
x=v.length
if(x>1){v.$flags&2&&B.A(v)
v[1]=w}w=e.gaL(e)
if(x>2){v.$flags&2&&B.A(v)
v[2]=w}w=e.gaP(e)
if(x>3){v.$flags&2&&B.A(v)
v[3]=w}},
ga1(d){return new A.hq(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aK(B.J(this,!0,B.p(this).h("v.E")))},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
$idO:1}
A.My.prototype={
dZ(d){return new A.My(new Int16Array(B.bU(this.a)))},
gdu(){return C.kt},
gu(d){return this.a.length},
geS(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.D(f)
w.$flags&2&&B.A(w)
w[e]=x}},
gef(d){var x=this.a
return!D.jm.gT(x)?x[0]:0},
gaw(d){var x=this.a
return!D.jm.gT(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaL(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:0},
gjO(){return A.jl(this)},
iX(d,e){var x,w=e.gaw(e),v=this.a
if(!D.jm.gT(v)){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[0]=w}w=e.gaK()
x=v.length
if(x>1){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[1]=w}w=e.gaL(e)
if(x>2){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[2]=w}w=e.gaP(e)
if(x>3){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[3]=w}},
ga1(d){return new A.hq(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aK(B.J(this,!0,B.p(this).h("v.E")))},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
$idO:1}
A.Mz.prototype={
dZ(d){return new A.Mz(new Int32Array(B.bU(this.a)))},
gdu(){return C.ku},
gu(d){return this.a.length},
geS(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.D(f)
w.$flags&2&&B.A(w)
w[e]=x}},
gef(d){var x=this.a
return!D.ch.gT(x)?x[0]:0},
gaw(d){var x=this.a
return!D.ch.gT(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaL(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:0},
gjO(){return A.jl(this)},
iX(d,e){var x,w=e.gaw(e),v=this.a
if(!D.ch.gT(v)){B.b8(w)
v.$flags&2&&B.A(v)
v[0]=w}w=e.gaK()
x=v.length
if(x>1){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[1]=w}w=e.gaL(e)
if(x>2){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[2]=w}w=e.gaP(e)
if(x>3){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[3]=w}},
ga1(d){return new A.hq(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aK(B.J(this,!0,B.p(this).h("v.E")))},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
$idO:1}
A.MA.prototype={
dZ(d){return new A.MA(new Int8Array(B.bU(this.a)))},
gdu(){return C.ks},
gu(d){return this.a.length},
geS(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.D(f)
w.$flags&2&&B.A(w)
w[e]=x}},
gef(d){var x=this.a
return!D.jn.gT(x)?x[0]:0},
gaw(d){var x=this.a
return!D.jn.gT(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaL(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:0},
gjO(){return A.jl(this)},
iX(d,e){var x,w=e.gaw(e),v=this.a
if(!D.jn.gT(v)){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[0]=w}w=e.gaK()
x=v.length
if(x>1){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[1]=w}w=e.gaL(e)
if(x>2){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[2]=w}w=e.gaP(e)
if(x>3){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[3]=w}},
ga1(d){return new A.hq(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aK(B.J(this,!0,B.p(this).h("v.E")))},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
$idO:1}
A.MD.prototype={
dZ(d){var x=this.b
x===$&&B.b()
return new A.MD(this.a,x)},
gdu(){return C.f8},
geS(){return null},
F3(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.fX(x,7-d)&1}else x=0
return x},
KT(d,e){var x
if(d>=this.a)return
d=7-d
x=this.b
x===$&&B.b()
this.b=e!==0?(x|D.c.eP(1,d))>>>0:(x&~(D.c.eP(1,d)&255))>>>0},
i(d,e){return this.F3(e)},
m(d,e,f){return this.KT(e,f)},
gef(d){return this.F3(0)},
gaw(d){return this.F3(0)},
gaK(){return this.F3(1)},
gaL(d){return this.F3(2)},
gaP(d){return this.F3(3)},
gjO(){return A.jl(this)},
iX(d,e){this.ij(e.gaw(e),e.gaK(),e.gaL(e),e.gaP(e))},
ij(d,e,f,g){var x=this
x.KT(0,d)
x.KT(1,e)
x.KT(2,f)
x.KT(3,g)},
ga1(d){return new A.hq(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a&&e.gv(e)===B.aK(B.J(this,!0,B.p(this).h("v.E")))},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
$idO:1,
gu(d){return this.a}}
A.ME.prototype={
dZ(d){return new A.ME(new Uint16Array(B.bU(this.a)))},
gdu(){return C.cb},
gu(d){return this.a.length},
geS(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.D(f)
w.$flags&2&&B.A(w)
w[e]=x}},
gef(d){var x=this.a
return!D.dM.gT(x)?x[0]:0},
gaw(d){var x=this.a
return!D.dM.gT(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaL(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:0},
gjO(){return A.jl(this)},
iX(d,e){var x,w=e.gaw(e),v=this.a
if(!D.dM.gT(v)){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[0]=w}w=e.gaK()
x=v.length
if(x>1){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[1]=w}w=e.gaL(e)
if(x>2){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[2]=w}w=e.gaP(e)
if(x>3){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[3]=w}},
ga1(d){return new A.hq(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aK(B.J(this,!0,B.p(this).h("v.E")))},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
$idO:1}
A.MF.prototype={
dZ(d){var x=this.b
x===$&&B.b()
return new A.MF(this.a,x)},
gdu(){return C.fR},
geS(){return null},
F4(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.fX(x,6-(d<<1>>>0))&3}else x=0
return x},
KU(d,e){var x,w,v
if(d>=this.a)return
x=C.are[d]
w=D.d.D(e)
v=this.b
v===$&&B.b()
this.b=(v&x|D.c.eP(w&3,6-(d<<1>>>0)))>>>0},
i(d,e){return this.F4(e)},
m(d,e,f){return this.KU(e,f)},
gef(d){return this.F4(0)},
gaw(d){return this.F4(0)},
gaK(){return this.F4(1)},
gaL(d){return this.F4(2)},
gaP(d){return this.F4(3)},
gjO(){return A.jl(this)},
iX(d,e){this.ij(e.gaw(e),e.gaK(),e.gaL(e),e.gaP(e))},
ij(d,e,f,g){var x=this
x.KU(0,d)
x.KU(1,e)
x.KU(2,f)
x.KU(3,g)},
ga1(d){return new A.hq(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a&&e.gv(e)===B.aK(B.J(this,!0,B.p(this).h("v.E")))},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
$idO:1,
gu(d){return this.a}}
A.MG.prototype={
dZ(d){return new A.MG(new Uint32Array(B.bU(this.a)))},
gdu(){return C.j0},
gu(d){return this.a.length},
geS(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.D(f)
w.$flags&2&&B.A(w)
w[e]=x}},
gef(d){var x=this.a
return!D.bl.gT(x)?x[0]:0},
gaw(d){var x=this.a
return!D.bl.gT(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaL(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:0},
gjO(){return A.jl(this)},
iX(d,e){var x,w=e.gaw(e),v=this.a
if(!D.bl.gT(v)){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[0]=w}w=e.gaK()
x=v.length
if(x>1){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[1]=w}w=e.gaL(e)
if(x>2){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[2]=w}w=e.gaP(e)
if(x>3){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[3]=w}},
ga1(d){return new A.hq(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aK(B.J(this,!0,B.p(this).h("v.E")))},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
$idO:1}
A.MH.prototype={
dZ(d){return new A.MH(this.a,new Uint8Array(B.bU(this.b)))},
gdu(){return C.fS},
geS(){return null},
F5(d){var x
if(d<0||d>=this.a)x=0
else{x=this.b
x=d<2?D.c.fX(x[0],4-(d<<2>>>0))&15:D.c.fX(x[1],4-((d&1)<<2))&15}return x},
KV(d,e){var x,w,v,u
if(d>=this.a)return
x=D.c.bc(D.d.D(e),0,15)
if(d>1){d&=1
w=1}else w=0
if(d===0){v=this.b
u=v[w]
v.$flags&2&&B.A(v)
v[w]=(u&15|x<<4)>>>0}else if(d===1){v=this.b
u=v[w]
v.$flags&2&&B.A(v)
v[w]=(u&240|x)>>>0}},
i(d,e){return this.F5(e)},
m(d,e,f){return this.KV(e,f)},
gef(d){return this.F5(0)},
gaw(d){return this.F5(0)},
gaK(){return this.F5(1)},
gaL(d){return this.F5(2)},
gaP(d){return this.F5(3)},
gjO(){return A.jl(this)},
iX(d,e){this.ij(e.gaw(e),e.gaK(),e.gaL(e),e.gaP(e))},
ij(d,e,f,g){var x=this
x.KV(0,d)
x.KV(1,e)
x.KV(2,f)
x.KV(3,g)},
ga1(d){return new A.hq(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a&&e.gv(e)===B.aK(B.J(this,!0,B.p(this).h("v.E")))},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
$idO:1,
gu(d){return this.a}}
A.xv.prototype={
aSo(d,e,f,g){var x=this.a
x.$flags&2&&B.A(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g},
dZ(d){return new A.xv(new Uint8Array(B.bU(this.a)))},
gdu(){return C.a6},
gu(d){return this.a.length},
geS(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.D(f)
w.$flags&2&&B.A(w)
w[e]=x}},
gef(d){var x=this.a
return!D.A.gT(x)?x[0]:0},
gaw(d){var x=this.a
return!D.A.gT(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaL(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:255},
gjO(){return A.jl(this)},
iX(d,e){var x,w=e.gaw(e),v=this.a
if(!D.A.gT(v)){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[0]=w}w=e.gaK()
x=v.length
if(x>1){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[1]=w}w=e.gaL(e)
if(x>2){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[2]=w}w=e.gaP(e)
if(x>3){w=D.d.D(w)
v.$flags&2&&B.A(v)
v[3]=w}},
ga1(d){return new A.hq(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aK(B.J(this,!0,B.p(this).h("v.E")))},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
$idO:1}
A.ajc.prototype={}
A.MB.prototype={}
A.nq.prototype={
J(){return"Format."+this.b}}
A.aif.prototype={
J(){return"BlendMode."+this.b}}
A.NO.prototype={
Rb(d){var x=$.cj2()
if(!x.a3(0,d))return"<unknown>"
return x.i(0,d).a},
j(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(x=j.a,w=new B.cc(x,x.r,x.e,B.p(x).h("cc<1>")),v=y.p,u=y.r,t=y.N,s=y.P,r="";w.q();){q=w.d
r+=q+"\n"
p=x.i(0,q)
for(q=p.a,q=new B.cc(q,q.r,q.e,B.p(q).h("cc<1>"));q.q();){o=q.d
n=p.i(0,o)
r=n==null?r+("\t"+j.Rb(o)+"\n"):r+("\t"+j.Rb(o)+": "+n.j(0)+"\n")}for(q=p.b.a,o=new B.cc(q,q.r,q.e,B.p(q).h("cc<1>"));o.q();){m=o.d
r+=m+"\n"
if(!q.a3(0,m))q.m(0,m,new A.pP(B.H(v,u),new A.tM(B.H(t,s))))
l=q.i(0,m)
for(m=l.a,m=new B.cc(m,m.r,m.e,B.p(m).h("cc<1>"));m.q();){k=m.d
n=l.i(0,k)
r=n==null?r+("\t"+j.Rb(k)+"\n"):r+("\t"+j.Rb(k)+": "+n.j(0)+"\n")}}}return r.charCodeAt(0)==0?r:r},
jt(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0="exif",a1="interop",a2=a4.b
a4.b=!0
a4.l5(19789)
a4.l5(42)
a4.ig(8)
x=d.a
if(x.i(0,"ifd0")==null)x.m(0,"ifd0",new A.pP(B.H(y.p,y.r),new A.tM(B.H(y.N,y.P))))
w=y.N
v=y.p
u=B.H(w,v)
for(t=B.p(x),s=t.h("c_<1>"),r=new B.cc(x,x.r,x.e,t.h("cc<1>")),q=y.r,p=y.P,o=8;r.q();){n=r.d
m=x.i(0,n)
m.toString
u.m(0,n,o)
n=m.b.a
if(n.a3(0,a0)){l=new Uint32Array(1)
l[0]=0
m.m(0,34665,new A.r0(l))}else m.a.K(0,34665)
if(n.a3(0,a1)){l=new Uint32Array(1)
l[0]=0
m.m(0,40965,new A.r0(l))}else m.a.K(0,40965)
if(n.a3(0,"gps")){l=new Uint32Array(1)
l[0]=0
m.m(0,34853,new A.r0(l))}else m.a.K(0,34853)
m=m.a
o+=2+12*m.a+4
for(m=new B.bw(m,m.r,m.e,B.p(m).h("bw<2>"));m.q();){l=m.d
k=C.jc[l.ghL(l).a]*l.gu(l)
if(k>4)o+=k}for(m=new B.cc(n,n.r,n.e,B.p(n).h("cc<1>"));m.q();){l=m.d
if(!n.a3(0,l))n.m(0,l,new A.pP(B.H(v,q),new A.tM(B.H(w,p))))
j=n.i(0,l)
j.toString
u.m(0,l,o)
j=j.a
i=2+12*j.a
for(l=new B.bw(j,j.r,j.e,B.p(j).h("bw<2>"));l.q();){j=l.d
k=C.jc[j.ghL(j).a]*j.gu(j)
if(k>4)i+=k}o+=i}}h=x.a
for(r=h-1,t=t.h("b4<2>"),g=0;g<h;++g){f=new B.c_(x,s).dL(0,g)
e=new B.b4(x,t).dL(0,g)
n=e.b.a
if(n.a3(0,a0)){m=e.i(0,34665)
m.toString
l=u.i(0,a0)
l.toString
m.vR(l)}if(n.a3(0,a1)){m=e.i(0,40965)
m.toString
l=u.i(0,a1)
l.toString
m.vR(l)}if(n.a3(0,"gps")){m=e.i(0,34853)
m.toString
l=u.i(0,"gps")
l.toString
m.vR(l)}m=u.i(0,f)
m.toString
d.av3(a4,e,m+2+12*e.a.a+4)
if(g===r)a4.ig(0)
else{m=u.i(0,new B.c_(x,s).dL(0,g+1))
m.toString
a4.ig(m)}d.av4(a4,e)
for(m=new B.cc(n,n.r,n.e,B.p(n).h("cc<1>"));m.q();){l=m.d
if(!n.a3(0,l))n.m(0,l,new A.pP(B.H(v,q),new A.tM(B.H(w,p))))
j=n.i(0,l)
j.toString
l=u.i(0,l)
l.toString
d.av3(a4,j,l+2+12*j.a.a)
d.av4(a4,j)}}a4.b=a2},
av3(d,e,f){var x,w,v,u,t,s,r=e.a
d.l5(r.a)
for(r=new B.cc(r,r.r,r.e,B.p(r).h("cc<1>"));r.q();){x=r.d
w=e.i(0,x)
w.toString
v=x===273
u=v&&w.ghL(w)===C.hD?C.cI:w.ghL(w)
t=v&&w.ghL(w)===C.hD?1:w.gu(w)
d.l5(x)
d.l5(u.a)
d.ig(t)
s=C.jc[w.ghL(w).a]*w.gu(w)
if(s<=4){w.jt(0,d)
for(;s<4;){d.aZ(0);++s}}else{d.ig(f)
f+=s}}return f},
av4(d,e){var x,w
for(x=e.a,x=new B.bw(x,x.r,x.e,B.p(x).h("bw<2>"));x.q();){w=x.d
if(C.jc[w.ghL(w).a]*w.gu(w)>4)w.jt(0,d)}},
qe(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a5.e
a5.e=!0
x=a5.d
w=a5.bN()
if(w===18761){a5.e=!1
if(a5.bN()!==42){a5.e=a3
return!1}}else if(w===19789){a5.e=!0
if(a5.bN()!==42){a5.e=a3
return!1}}else return!1
v=a5.an()
for(u=this.a,t=y.bg,s=y.p,r=y.r,q=y.N,p=y.P,o=0;v>0;v=f){a5.d=x+v
n=new A.pP(B.H(s,r),new A.tM(B.H(q,p)))
m=a5.bN()
l=B.a(new Array(m),t)
for(k=0;k<m;++k)l[k]=this.aqz(a5,x)
for(j=l.length,i=0;i<l.length;l.length===j||(0,B.P)(l),++i){h=l[i]
g=h.b
if(g!=null)n.m(0,h.a,g)}u.m(0,"ifd"+o,n);++o
f=a5.an()
if(f===v)break}for(u=new B.bw(u,u.r,u.e,B.p(u).h("bw<2>"));u.q();){j=u.d
for(g=J.aI(C.Bs.gem(C.Bs)),e=j.a,d=j.b.a;g.q();){a0=g.gL(g)
if(e.a3(0,a0)){a5.d=x+j.i(0,a0).D(0)
n=new A.pP(B.H(s,r),new A.tM(B.H(q,p)))
m=a5.bN()
l=B.a(new Array(m),t)
for(k=0;k<m;++k)l[k]=this.aqz(a5,x)
for(a1=l.length,i=0;i<l.length;l.length===a1||(0,B.P)(l),++i){h=l[i]
a2=h.b
if(a2!=null)n.m(0,h.a,a2)}a0=C.Bs.i(0,a0)
a0.toString
d.m(0,a0,n)}}}a5.e=a3
return!1},
aqz(d,e){var x,w,v,u,t=d.bN(),s=d.bN(),r=d.an(),q=new A.aI2(t,null)
if(s>13)return q
x=C.MT[s]
w=r*C.jc[s]
v=d.d
if((w>4?d.d=d.an()+e:v)+w>d.c)return q
u=d.l2(w)
switch(x.a){case 0:break
case 6:q.b=new A.vI(new Int8Array(B.bU(J.cja(D.A.gag(u.hK()),0,r))))
break
case 1:q.b=new A.tL(new Uint8Array(B.bU(u.l2(r).hK())))
break
case 7:q.b=new A.H0(new Uint8Array(B.bU(u.l2(r).hK())))
break
case 2:q.b=new A.Bx(r===0?"":u.qf(r-1))
break
case 3:q.b=A.cuR(u,r)
break
case 4:q.b=A.cuM(u,r)
break
case 5:q.b=A.cuN(u,r)
break
case 10:q.b=A.cuP(u,r)
break
case 8:q.b=A.cuQ(u,r)
break
case 9:q.b=A.cuO(u,r)
break
case 11:q.b=A.cuT(u,r)
break
case 12:q.b=A.cuL(u,r)
break}d.d=v+4
return q}}
A.aI2.prototype={
gp(d){return this.b}}
A.anj.prototype={}
A.tM.prototype={
aSC(d){d.a.aO(0,new A.bf6(this))},
gfc(d){var x=this.a
return new B.b4(x,B.p(x).h("b4<2>"))},
gT(d){var x,w=this.a
if(w.a===0)return!0
for(w=new B.bw(w,w.r,w.e,B.p(w).h("bw<2>"));w.q();){x=w.d
if(!(x.a.a===0&&x.b.gT(0)))return!1}return!0},
a3(d,e){return this.a.a3(0,e)},
i(d,e){var x=this.a
if(!x.a3(0,e))x.m(0,e,new A.pP(B.H(y.p,y.r),new A.tM(B.H(y.N,y.P))))
x=x.i(0,e)
x.toString
return x},
m(d,e,f){this.a.m(0,e,f)}}
A.pP.prototype={
gfc(d){var x=this.a
return new B.b4(x,B.p(x).h("b4<2>"))},
gT(d){return this.a.a===0&&this.b.gT(0)},
btA(d){d.a.aO(0,new A.bf7(this))
d.b.a.aO(0,new A.bf8(this))},
a3(d,e){return this.a.a3(0,e)},
i(d,e){if(typeof e=="string")e=C.Xk.i(0,e)
if(B.hJ(e))return this.a.i(0,e)
return null},
m(d,e,f){var x,w,v,u,t,s,r=this
if(typeof e=="string")e=C.Xk.i(0,e)
if(!B.hJ(e))return
if(f==null)r.a.K(0,e)
else if(f instanceof A.jU)r.a.m(0,e,f)
else{x=$.cj2().i(0,e)
if(x!=null)switch(x.b.a){case 1:if(y.L.b(f))r.a.m(0,e,new A.tL(new Uint8Array(B.bU(new Uint8Array(B.bU(f))))))
else if(B.hJ(f)){w=new Uint8Array(1)
w[0]=f
r.a.m(0,e,new A.tL(w))}break
case 2:if(typeof f=="string")r.a.m(0,e,new A.Bx(f))
break
case 3:if(y.L.b(f))r.a.m(0,e,new A.y9(new Uint16Array(B.bU(new Uint16Array(B.bU(f))))))
else if(B.hJ(f))r.a.m(0,e,A.cQX(f))
break
case 4:if(y.L.b(f))r.a.m(0,e,new A.r0(new Uint32Array(B.bU(new Uint32Array(B.bU(f))))))
else if(B.hJ(f))r.a.m(0,e,A.cQW(f))
break
case 5:if(y.k.b(f))r.a.m(0,e,new A.tN(B.b2(f,!0,y.i)))
else if(y.L.b(f)&&J.bk(f)===2){w=J.a2(f)
r.a.m(0,e,new A.tN(B.a([new A.nK(w.i(f,0),w.i(f,1))],y.j)))}else if(f instanceof A.nK)r.a.m(0,e,new A.tN(B.a([new A.nK(f.a,f.b)],y.j)))
else if(y.f.b(f)){w=J.a2(f)
v=w.gu(f)
u=y.i
t=J.kj(v,u)
for(s=0;s<v;++s)t[s]=new A.nK(J.u(w.i(f,s),0),J.u(w.i(f,s),1))
r.a.m(0,e,new A.tN(B.b2(t,!0,u)))}break
case 6:if(y.L.b(f))r.a.m(0,e,new A.vI(new Int8Array(B.bU(new Int8Array(B.bU(f))))))
else if(B.hJ(f)){w=new Int8Array(1)
w[0]=f
r.a.m(0,e,new A.vI(w))}break
case 7:if(y.L.b(f))r.a.m(0,e,new A.H0(new Uint8Array(B.bU(new Uint8Array(B.bU(f))))))
break
case 8:if(y.L.b(f))r.a.m(0,e,new A.y8(new Int16Array(B.bU(new Int16Array(B.bU(f))))))
else if(B.hJ(f)){w=new Int16Array(1)
w[0]=f
r.a.m(0,e,new A.y8(w))}break
case 9:if(y.L.b(f))r.a.m(0,e,new A.y7(new Int32Array(B.bU(new Int32Array(B.bU(f))))))
else if(B.hJ(f)){w=new Int32Array(1)
w[0]=f
r.a.m(0,e,new A.y7(w))}break
case 10:if(y.k.b(f))r.a.m(0,e,new A.tO(B.b2(f,!0,y.i)))
else if(y.L.b(f)&&J.bk(f)===2){w=J.a2(f)
r.a.m(0,e,new A.tO(B.a([new A.nK(w.i(f,0),w.i(f,1))],y.j)))}else if(f instanceof A.nK)r.a.m(0,e,new A.tO(B.a([f],y.j)))
else if(y.f.b(f)){w=J.a2(f)
v=w.gu(f)
u=y.i
t=J.kj(v,u)
for(s=0;s<v;++s)t[s]=new A.nK(J.u(w.i(f,s),0),J.u(w.i(f,s),1))
r.a.m(0,e,new A.tO(B.b2(t,!0,u)))}break
case 11:if(y.n.b(f))r.a.m(0,e,new A.Bz(new Float32Array(B.bU(new Float32Array(B.bU(f))))))
else if(typeof f=="number")r.a.m(0,e,A.cuS(f))
else if(B.hJ(f))r.a.m(0,e,A.cuS(f))
break
case 12:if(y.n.b(f))r.a.m(0,e,new A.By(new Float64Array(B.bU(new Float64Array(B.bU(f))))))
else if(typeof f=="number")r.a.m(0,e,A.cuK(f))
else if(B.hJ(f))r.a.m(0,e,A.cuK(f))
break
case 0:break}}},
gib(d){var x=this.a.i(0,274)
return x==null?null:x.D(0)},
sib(d,e){this.a.K(0,274)}}
A.mD.prototype={
J(){return"IfdValueType."+this.b}}
A.jU.prototype={
ja(d,e){return 0},
D(d){return this.ja(0,0)},
u0(d){return 0},
u_(){return new Uint8Array(0)},
j(d){return""},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.jU&&x.ghL(x)===e.ghL(e)&&x.gu(x)===e.gu(e)&&x.gv(x)===e.gv(e)},
gv(d){return 0},
vR(d){}}
A.tL.prototype={
dZ(d){return new A.tL(new Uint8Array(B.bU(this.a)))},
ghL(d){return C.Jm},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.tL){x=this.a
x=x.length===e.a.length&&B.aK(x)===B.aK(e.a)}else x=!1
return x},
gv(d){return B.aK(this.a)},
ja(d,e){return this.a[e]},
D(d){return this.ja(0,0)},
vR(d){var x=this.a
x.$flags&2&&B.A(x)
x[0]=d},
u_(){return this.a},
jt(d,e){e.mx(this.a)},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.Bx.prototype={
dZ(d){return new A.Bx(this.a)},
ghL(d){return C.bz},
gu(d){return this.a.length+1},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.Bx){x=this.a
x=x.length+1===e.a.length+1&&D.e.gv(x)===D.e.gv(e.a)}else x=!1
return x},
gv(d){return D.e.gv(this.a)},
u_(){return new Uint8Array(B.bU(new B.e2(this.a)))},
jt(d,e){e.mx(new B.e2(this.a))
e.aZ(0)},
j(d){return this.a},
gp(d){return this.a}}
A.y9.prototype={
aSH(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.bN()
w.$flags&2&&B.A(w)
w[x]=v}},
dZ(d){return new A.y9(new Uint16Array(B.bU(this.a)))},
ghL(d){return C.be},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.y9){x=this.a
x=x.length===e.a.length&&B.aK(x)===B.aK(e.a)}else x=!1
return x},
gv(d){return B.aK(this.a)},
ja(d,e){return this.a[e]},
D(d){return this.ja(0,0)},
vR(d){var x=this.a
x.$flags&2&&B.A(x)
x[0]=d},
u_(){return J.hl(D.dM.gag(this.a))},
jt(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.l5(this.a[x])},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.r0.prototype={
aSE(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.an()
w.$flags&2&&B.A(w)
w[x]=v}},
dZ(d){return new A.r0(new Uint32Array(B.bU(this.a)))},
ghL(d){return C.cI},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.r0){x=this.a
x=x.length===e.a.length&&B.aK(x)===B.aK(e.a)}else x=!1
return x},
gv(d){return B.aK(this.a)},
ja(d,e){return this.a[e]},
D(d){return this.ja(0,0)},
vR(d){var x=this.a
x.$flags&2&&B.A(x)
x[0]=d},
u_(){return J.hl(D.bl.gag(this.a))},
jt(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.ig(this.a[x])},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.tN.prototype={
dZ(d){return new A.tN(B.b2(this.a,!0,y.i))},
ghL(d){return C.e3},
gu(d){return this.a.length},
ja(d,e){return this.a[e].D(0)},
D(d){return this.ja(0,0)},
u0(d){return this.a[0].u0(0)},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.tN){x=this.a
x=x.length===e.a.length&&B.aK(x)===B.aK(e.a)}else x=!1
return x},
gv(d){return B.aK(this.a)},
jt(d,e){var x,w,v,u
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.P)(x),++v){u=x[v]
e.ig(u.a)
e.ig(u.b)}},
j(d){var x=this.a
return x.length===1?x[0].j(0):B.o(x)},
gp(d){return this.a}}
A.vI.prototype={
dZ(d){return new A.vI(new Int8Array(B.bU(this.a)))},
ghL(d){return C.Jq},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.vI){x=this.a
x=x.length===e.a.length&&B.aK(x)===B.aK(e.a)}else x=!1
return x},
gv(d){return B.aK(this.a)},
ja(d,e){return this.a[e]},
D(d){return this.ja(0,0)},
vR(d){var x=this.a
x.$flags&2&&B.A(x)
x[0]=d},
u_(){return J.hl(D.jn.gag(this.a))},
jt(d,e){e.mx(J.d_(D.jn.gag(this.a),0,null))},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.y8.prototype={
aSG(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.bN()
u=$.qD()
u.$flags&2&&B.A(u)
u[0]=v
v=$.t8()[0]
w.$flags&2&&B.A(w)
w[x]=v}},
dZ(d){return new A.y8(new Int16Array(B.bU(this.a)))},
ghL(d){return C.Jr},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.y8){x=this.a
x=x.length===e.a.length&&B.aK(x)===B.aK(e.a)}else x=!1
return x},
gv(d){return B.aK(this.a)},
ja(d,e){return this.a[e]},
D(d){return this.ja(0,0)},
vR(d){var x=this.a
x.$flags&2&&B.A(x)
x[0]=d},
u_(){return J.hl(D.jm.gag(this.a))},
jt(d,e){var x,w=new Int16Array(1),v=J.cjb(D.jm.gag(w),0,null),u=this.a.length
for(x=0;x<u;++x){w[0]=this.a[x]
e.l5(v[0])}},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.y7.prototype={
aSF(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.an()
u=$.hP()
u.$flags&2&&B.A(u)
u[0]=v
v=$.lv()[0]
w.$flags&2&&B.A(w)
w[x]=v}},
dZ(d){return new A.y7(new Int32Array(B.bU(this.a)))},
ghL(d){return C.Js},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.y7){x=this.a
x=x.length===e.a.length&&B.aK(x)===B.aK(e.a)}else x=!1
return x},
gv(d){return B.aK(this.a)},
ja(d,e){return this.a[e]},
D(d){return this.ja(0,0)},
vR(d){var x=this.a
x.$flags&2&&B.A(x)
x[0]=d},
u_(){return J.hl(D.ch.gag(this.a))},
jt(d,e){var x,w,v,u=this.a.length
for(x=0;x<u;++x){w=this.a[x]
v=$.aUd()
v.$flags&2&&B.A(v)
v[0]=w
e.ig($.ciV()[0])}},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.tO.prototype={
dZ(d){return new A.tO(B.b2(this.a,!0,y.i))},
ghL(d){return C.Jn},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.tO){x=this.a
x=x.length===e.a.length&&B.aK(x)===B.aK(e.a)}else x=!1
return x},
gv(d){return B.aK(this.a)},
ja(d,e){return this.a[e].D(0)},
D(d){return this.ja(0,0)},
u0(d){return this.a[0].u0(0)},
jt(d,e){var x,w,v,u,t,s
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.P)(x),++v){u=x[v]
t=$.aUd()
t.$flags&2&&B.A(t)
t[0]=u.a
s=$.ciV()
e.ig(s[0])
t[0]=u.b
e.ig(s[0])}},
j(d){var x=this.a
return x.length===1?x[0].j(0):B.o(x)},
gp(d){return this.a}}
A.Bz.prototype={
aSI(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.an()
u=$.hP()
u.$flags&2&&B.A(u)
u[0]=v
v=$.F8()[0]
w.$flags&2&&B.A(w)
w[x]=v}},
dZ(d){return new A.Bz(new Float32Array(B.bU(this.a)))},
ghL(d){return C.Jo},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.Bz){x=this.a
x=x.length===e.a.length&&B.aK(x)===B.aK(e.a)}else x=!1
return x},
gv(d){return B.aK(this.a)},
u_(){return J.hl(D.eR.gag(this.a))},
u0(d){return this.a[0]},
jt(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.bKN(this.a[x])},
j(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gp(d){return this.a}}
A.By.prototype={
aSD(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.a_w()
w.$flags&2&&B.A(w)
w[x]=v}},
dZ(d){return new A.By(new Float64Array(B.bU(this.a)))},
ghL(d){return C.Jp},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.By){x=this.a
x=x.length===e.a.length&&B.aK(x)===B.aK(e.a)}else x=!1
return x},
gv(d){return B.aK(this.a)},
u0(d){return this.a[0]},
u_(){return J.hl(D.e6.gag(this.a))},
jt(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.bKO(this.a[x])},
j(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gp(d){return this.a}}
A.H0.prototype={
dZ(d){return new A.H0(new Uint8Array(B.bU(this.a)))},
ghL(d){return C.hD},
gu(d){return this.a.length},
u_(){return this.a},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.H0){x=this.a
x=x.length===e.a.length&&B.aK(x)===B.aK(e.a)}else x=!1
return x},
gv(d){return B.aK(this.a)},
jt(d,e){e.mx(this.a)},
j(d){return"<data>"},
gp(d){return this.a}}
A.lB.prototype={
J(){return"BmpCompression."+this.b}}
A.aYl.prototype={}
A.Fs.prototype={
ahV(d,e){var x,w,v,u,t,s,r,q=this,p=q.d,o=p<=40
if(o){x=q.r
x=x===C.xV||x===C.xW}else x=!0
if(x){x=q.as=d.an()
w=A.cgy(x)
q.CW=w
v=D.c.fX(x,w)
x=v>0
q.cx=x?255/v:0
w=q.at=d.an()
u=A.cgy(w)
q.cy=u
t=D.c.fX(w,u)
q.db=x?255/t:0
w=q.ax=d.an()
u=A.cgy(w)
q.dx=u
s=D.c.fX(w,u)
q.dy=x?255/s:0
if(!o||q.r===C.xW){o=q.ay=d.an()
x=A.cgy(o)
q.fr=x
r=D.c.fX(o,x)
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
if(q.f<=8)q.bHV(d)},
gOM(){var x=this.d
if(x!==40)if(x===124){x=this.ay
x===$&&B.b()
x=x===0}else x=!1
else x=!0
return x},
gb4(d){return Math.abs(this.c)},
bHV(d){var x,w,v,u,t,s=this,r=s.z
if(r===0)r=D.c.eq(1,s.f)
s.ch=new A.u3(new Uint8Array(r*3),r,3)
for(x=0;x<r;++x){w=J.u(d.a,d.d++)
v=J.u(d.a,d.d++)
u=J.u(d.a,d.d++)
t=J.u(d.a,d.d++)
s.ch.RN(x,u,v,w,t)}},
bvO(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(o.ch!=null){x=o.f
if(x===1){w=d.df()
for(v=7;v>=0;--v)e.$4(D.c.nW(w,v)&1,0,0,0)
return}else if(x===2){w=d.df()
for(v=6;v>=0;v-=2)e.$4(D.c.nW(w,v)&2,0,0,0)}else if(x===4){w=d.df()
e.$4(D.c.P(w,4)&15,0,0,0)
e.$4(w&15,0,0,0)
return}else if(x===8){e.$4(d.df(),0,0,0)
return}}x=o.r
if(x===C.xV&&o.f===32){u=d.an()
x=o.as
x===$&&B.b()
t=o.CW
t===$&&B.b()
t=D.c.fX((u&x)>>>0,t)
x=o.cx
x===$&&B.b()
s=D.d.D(t*x)
x=o.at
x===$&&B.b()
t=o.cy
t===$&&B.b()
t=D.c.fX((u&x)>>>0,t)
x=o.db
x===$&&B.b()
r=D.d.D(t*x)
x=o.ax
x===$&&B.b()
t=o.dx
t===$&&B.b()
t=D.c.fX((u&x)>>>0,t)
x=o.dy
x===$&&B.b()
q=D.d.D(t*x)
if(o.gOM())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.fX((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.d.D(t*x)}return e.$4(s,r,q,p)}else{t=o.f
if(t===32&&x===C.F9){q=d.df()
r=d.df()
s=d.df()
p=d.df()
return e.$4(s,r,q,o.gOM()?255:p)}else if(t===24){q=d.df()
r=d.df()
return e.$4(d.df(),r,q,255)}else if(t===16){u=d.bN()
x=o.as
x===$&&B.b()
t=o.CW
t===$&&B.b()
t=D.c.fX((u&x)>>>0,t)
x=o.cx
x===$&&B.b()
s=D.d.D(t*x)
x=o.at
x===$&&B.b()
t=o.cy
t===$&&B.b()
t=D.c.fX((u&x)>>>0,t)
x=o.db
x===$&&B.b()
r=D.d.D(t*x)
x=o.ax
x===$&&B.b()
t=o.dx
t===$&&B.b()
t=D.c.fX((u&x)>>>0,t)
x=o.dy
x===$&&B.b()
q=D.d.D(t*x)
if(o.gOM())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.fX((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.d.D(t*x)}return e.$4(s,r,q,p)}else throw B.f(A.c4("Unsupported bitsPerPixel ("+t+") or compression ("+x.j(0)+")."))}}}
A.aij.prototype={
ow(d){var x,w=null
if(!A.cjG(A.cP(d,!1,w,0)))return w
x=A.cP(d,!1,w,0)
this.a=x
return this.b=A.cLW(x,w)},
k5(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b
if(e==null)return new A.BC(f,f,f,f,0,C.bg,0,0)
x=g.a
x===$&&B.b()
w=e.a.b
w===$&&B.b()
x.d=w
v=e.f
w=e.b
u=D.c.b7(w*v+31,32)*4
x=g.c
if(x)t=4
else if(v===1||v===4||v===8)t=1
else{s=v===32?4:3
t=s}if(x)r=C.a6
else if(v===1)r=C.f8
else{if(v===2)s=C.fR
else if(v===4)s=C.fS
else s=C.a6
r=s}q=x?f:e.ch
p=A.hA(f,f,r,0,C.bg,e.gb4(e),f,0,t,q,C.a6,w,!1)
for(o=p.gb4(0)-1,x=e.c,w=1/x<0,s=x<0,x=x===0;o>=0;--o){n={}
if(!(x?w:s))m=o
else{l=p.a
l=l==null?f:l.b
m=(l==null?0:l)-1-o}l=g.a
k=l.jW(u)
l.d=l.d+(k.c-k.d)
l=p.a
j=l==null
i=j?f:l.a
if(i==null)i=0
n.a=0
h=j?f:l.ek(0,m,f)
if(h==null)h=new A.ff()
for(;n.a<i;)e.bvO(k,new A.aYk(n,g,i,e,h))}return p},
nv(d,e,f){if(this.ow(e)==null)return null
return this.k5(0)}}
A.b5r.prototype={}
A.b49.prototype={}
A.b4a.prototype={}
A.b7M.prototype={}
A.anl.prototype={}
A.aqc.prototype={
Pt(){return this.w},
rN(d,e,f,g,h){throw B.f(A.c4("B44 compression not yet supported."))},
Jp(d,e,f){return this.rN(d,e,f,null,null)},
j(d){return B.o(this.r)+" "+this.x}}
A.NQ.prototype={
J(){return"ExrChannelType."+this.b}}
A.Gp.prototype={
J(){return"ExrChannelName."+this.b}}
A.anm.prototype={
gbvD(){var x=this.c
x===$&&B.b()
return x},
aSs(d){var x=this,w=d.Q8()
x.a=w
if(w.length===0)return
x.c=C.au6[d.an()]
d.df()
d.d+=3
x.f=d.an()
x.r=d.an()
w=x.a
if(w==="R"){x.w=!0
x.b=C.ak1}else if(w==="G"){x.w=!0
x.b=C.ak2}else if(w==="B"){x.w=!0
x.b=C.ak3}else if(w==="A"){x.w=!0
x.b=C.ak4}else{x.w=!1
x.b=C.ak5}switch(x.c.a){case 0:x.d=4
break
case 1:x.d=2
break
case 2:x.d=4
break
default:throw B.f(A.c4("EXR Invalid pixel type: "+x.gbvD().j(0)))}}}
A.tD.prototype={
J(){return"ExrCompressorType."+this.b}}
A.b8T.prototype={
rN(d,e,f,g,h){throw B.f(A.c4("Unsupported compression type"))},
Jp(d,e,f){return this.rN(d,e,f,null,null)}}
A.bgd.prototype={}
A.ann.prototype={}
A.b8V.prototype={
aSt(d){var x,w,v,u,t=this,s=A.cP(d,!1,null,0)
if(s.an()!==20000630)throw B.f(A.c4("File is not an OpenEXR image file."))
x=t.d=s.df()
if(x!==2)throw B.f(A.c4("Cannot read version "+x+" image files."))
x=t.e=s.rF()
if((x&4294967289)>>>0!==0)throw B.f(A.c4("The file format version number's flag field contains unrecognized flags."))
if((x&16)===0){w=t.c
v=A.cva(w.length,(x&2)!==0,s)
if(v.w>0)w.push(v)}else for(x=t.c;!0;){v=A.cva(x.length,(t.e&2)!==0,s)
if(v.w<=0)break
x.push(v)}x=t.c
w=x.length
if(w===0)throw B.f(A.c4("Error reading image header"))
for(u=0;u<x.length;x.length===w||(0,B.P)(x),++u)x[u].bHU(s)
t.bhy(s)},
bhy(d){var x,w,v,u,t=this
for(x=t.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.P)(x),++v){u=x[v]
t.a=Math.max(t.a,u.w)
t.b=Math.max(t.b,u.x)
if(u.db)t.bhG(u,d)
else t.bhE(u,d)}},
bhG(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.e
b3===$&&B.b()
x=(b3&16)!==0
b3=b4.b
b3.toString
w=b4.CW
v=b4.ay
u=A.c8(b5,b2,0)
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
if(x)if(u.an()!==s)throw B.f(A.c4("Invalid Image Data"))
k=u.an()
j=u.an()
u.an()
u.an()
i=u.jW(u.an())
u.d=u.d+(i.c-i.d)
h=b4.dy
h.toString
g=j*h
f=b4.dx
f.toString
h=w.rN(i,k*f,g,f,h)
e=h.length
d=new A.lM(h,0,e,0,!1)
a0=w.a
a1=w.b
a2=t.length
a3=0
a4=0
while(!0){if(!(a4<a1&&g<this.b))break
for(a5=0;a5<a2;++a5){if(a3>=e)break
a6=t[a5]
h=b4.dx
h.toString
a7=k*h
for(a8=0;a8<a0;++a8,++a7){h=a6.c
h===$&&B.b()
switch(h.a){case 1:h=d.bN()
f=$.hx
a9=(f!=null?f:A.is())[h]
break
case 2:a9=d.bN()
break
case 0:a9=d.an()
break
default:a9=b2}h=a6.d
h===$&&B.b()
a3+=h
h=a6.w
h===$&&B.b()
if(h){h=b3.a
b0=h==null?b2:h.ek(a7,g,b2)
if(b0==null)b0=new A.ff()
h=a6.b
h===$&&B.b()
b0.m(0,h.a,a9)}else{h=a6.a
h===$&&B.b()
f=b3.b
b1=f!=null?f.i(0,h):b2
if(b1!=null)b1.fd(a7,g,a9,0,0)}}}++a4;++g}}++o;++q}++r}},
bhE(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=this.e
a5===$&&B.b()
x=(a5&16)!==0
a5=a6.b
a5.toString
w=a6.CW
v=a6.ay[0]
u=a6.cx
t=A.c8(a7,a4,0)
for(s=v.length,r=a6.c,q=w!=null,p=0,o=0;o<s;++o){t.d=v[o]
if(x)if(t.an()!==3.141592653589793)throw B.f(A.c4("Invalid Image Data"))
n=t.an()
m=$.hP()
m.$flags&2&&B.A(m)
m[0]=n
n=$.lv()
m[0]=t.an()
l=t.jW(n[0])
t.d=t.d+(l.c-l.d)
if(q){n=w.Jp(l,0,p)
k=new A.lM(n,0,n.length,0,!1)}else k=l
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
switch(n.a){case 1:n=k.bN()
m=$.hx
a1=(m!=null?m:A.is())[n]
break
case 2:a1=k.bN()
break
case 0:a1=k.an()
break
default:a1=a4}n=e.d
n===$&&B.b()
g+=n
n=e.w
n===$&&B.b()
if(n){n=a5.a
a2=n==null?a4:n.ek(a0,p,a4)
if(a2==null)a2=new A.ff()
n=e.b
n===$&&B.b()
a2.m(0,n.a,a1)}else{n=e.a
n===$&&B.b()
m=a5.b
a3=m!=null?m.i(0,n):a4
if(a3!=null)a3.fd(a0,p,a1,0,0)}}}++h;++p}}}}
A.Z2.prototype={
aSu(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=B.H(y.N,y.I)
for(x=a2.e,w=y.t,v=a2.c,u=C.hA;!0;){t=a7.Q8()
if(t.length===0)break
s=a7.Q8()
r=a7.an()
q=a7.jW(r)
a7.d=a7.d+(q.c-q.d)
x.m(0,t,new A.anl(t,s,r))
switch(t){case"channels":for(;!0;){p=new A.anm()
p.aSs(q)
o=p.a
o===$&&B.b()
if(o.length===0)break
n=p.w
n===$&&B.b()
if(n){++a2.d
o=p.c
o===$&&B.b()
if(o===C.zu)u=C.hA
else u=o===C.zv?C.j_:C.j0}else{n=p.c
n===$&&B.b()
if(n===C.zu){n=a2.w
m=a2.x
a4.m(0,o,new A.Or(new Uint16Array(n*m),n,m,1))}else if(n===C.zv){n=a2.w
m=a2.x
a4.m(0,o,new A.Os(new Float32Array(n*m),n,m,1))}else if(n===C.Ih){n=a2.w
m=a2.x
a4.m(0,o,new A.Ow(new Uint32Array(n*m),n,m,1))}}v.push(p)}break
case"chromaticities":o=new Float32Array(8)
a2.at=o
n=q.an()
m=$.hP()
m.$flags&2&&B.A(m)
m[0]=n
n=$.F8()
o[0]=n[0]
o=a2.at
m[0]=q.an()
l=n[0]
o.$flags&2&&B.A(o)
o[1]=l
l=a2.at
m[0]=q.an()
o=n[0]
l.$flags&2&&B.A(l)
l[2]=o
o=a2.at
m[0]=q.an()
l=n[0]
o.$flags&2&&B.A(o)
o[3]=l
l=a2.at
m[0]=q.an()
o=n[0]
l.$flags&2&&B.A(l)
l[4]=o
o=a2.at
m[0]=q.an()
l=n[0]
o.$flags&2&&B.A(o)
o[5]=l
l=a2.at
m[0]=q.an()
o=n[0]
l.$flags&2&&B.A(l)
l[6]=o
o=a2.at
m[0]=q.an()
n=n[0]
o.$flags&2&&B.A(o)
o[7]=n
break
case"compression":a2.ax=C.awx[J.u(q.a,q.d++)]
break
case"dataWindow":o=q.an()
n=$.hP()
n.$flags&2&&B.A(n)
n[0]=o
o=$.lv()
m=o[0]
n[0]=q.an()
l=o[0]
n[0]=q.an()
k=o[0]
n[0]=q.an()
o=a2.r=B.a([m,l,k,o[0]],w)
a2.w=o[2]-o[0]+1
a2.x=o[3]-o[1]+1
break
case"displayWindow":o=q.an()
n=$.hP()
n.$flags&2&&B.A(n)
n[0]=o
$.lv()
n[0]=q.an()
n[0]=q.an()
n[0]=q.an()
break
case"lineOrder":break
case"pixelAspectRatio":o=q.an()
n=$.hP()
n.$flags&2&&B.A(n)
n[0]=o
$.F8()
break
case"screenWindowCenter":o=q.an()
n=$.hP()
n.$flags&2&&B.A(n)
n[0]=o
$.F8()
n[0]=q.an()
break
case"screenWindowWidth":o=q.an()
n=$.hP()
n.$flags&2&&B.A(n)
n[0]=o
$.F8()
break
case"tiles":a2.dx=q.an()
a2.dy=q.an()
j=J.u(q.a,q.d++)
a2.fr=j&15
a2.fx=D.c.P(j,4)&15
break
case"type":i=q.Q8()
if(i!=="deepscanline")if(i!=="deeptile")throw B.f(A.c4("EXR Invalid type: "+i))
break
default:break}}x=a2.w
a2.b=A.hA(a3,a3,u,0,C.bg,a2.x,a3,0,a2.d,a3,C.a6,x,!1)
for(x=new B.cc(a4,a4.r,a4.e,a4.$ti.h("cc<1>"));x.q();){w=x.d
o=a2.b
o.toString
n=a4.i(0,w)
n.toString
o.aJN(w,n)}if(a2.db){x={}
w=a2.r
w===$&&B.b()
a2.id=a2.aWk(w[0],w[2],w[1],w[3])
w=a2.r
a2.k1=a2.aWl(w[0],w[2],w[1],w[3])
if(a2.fr!==2)a2.k1=1
w=a2.id
w.toString
v=a2.r
a2.fy=a2.ajd(w,v[0],v[2],a2.dx,a2.fx)
v=a2.k1
v.toString
w=a2.r
a2.go=a2.ajd(v,w[1],w[3],a2.dy,a2.fx)
w=a2.aWi()
a2.k2=w
v=a2.dx
v.toString
v=w*v
a2.k3=v
a2.CW=A.ctR(a2.ax,a2,v,a2.dy)
x.a=x.b=0
v=a2.id
v.toString
w=a2.k1
w.toString
a2.ay=B.vQ(v*w,new A.b8W(x,a2),!0,y.bk)}else{x=a2.x
w=a2.ch=new Uint32Array(x+1)
for(o=v.length,n=a2.r,m=a2.w,h=0;h<o;++h){g=v[h]
l=g.d
l===$&&B.b()
k=g.f
k===$&&B.b()
f=D.c.hu(l*m,k)
for(l=g.r,e=0;e<x;++e){n===$&&B.b()
k=n[1]
l===$&&B.b()
if(D.c.ap(e+k,l)===0)w[e]=w[e]+f}}for(d=0,e=0;e<x;++e)d=Math.max(d,w[e])
x=A.ctR(a2.ax,a2,d,a3)
a2.CW=x
x=a2.cx=x.Pt()
w=a2.ch
v=w.length
o=new Uint32Array(v)
a2.cy=o
for(--v,a0=0,a1=0;a1<=v;++a1){if(D.c.ap(a1,x)===0)a0=0
o[a1]=a0
a0+=w[a1]}x=D.c.hu(a2.x+x,x)
a2.ay=B.a([new Uint32Array(x-1)],y.w)}},
aWk(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.Tx(w):u.SQ(w))+1
break
case 2:v=e-d+1
x=(u.fx===0?u.Tx(v):u.SQ(v))+1
break
default:throw B.f(A.c4("Unknown LevelMode format."))}return x},
aWl(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.Tx(w):u.SQ(w))+1
break
case 2:v=g-f+1
x=(u.fx===0?u.Tx(v):u.SQ(v))+1
break
default:throw B.f(A.c4("Unknown LevelMode format."))}return x},
Tx(d){var x
for(x=0;d>1;){++x
d=D.c.P(d,1)}return x},
SQ(d){var x,w
for(x=0,w=0;d>1;){if((d&1)!==0)w=1;++x
d=D.c.P(d,1)}return x+w},
aWi(){var x,w,v,u,t
for(x=this.c,w=x.length,v=0,u=0;u<w;++u){t=x[u].d
t===$&&B.b()
v+=t}return v},
ajd(d,e,f,g,h){var x,w,v,u,t,s,r=J.iP(d,y.p)
for(x=h===1,w=f-e+1,v=0;v<d;++v){u=D.c.eq(1,v)
t=D.c.hu(w,u)
if(x&&t*u<w)++t
s=Math.max(t,1)
g.toString
r[v]=D.c.hu(s+g-1,g)}return r}}
A.aqd.prototype={
bHU(d){var x,w,v,u,t,s=this
if(s.db)for(x=0;x<s.ay.length;++x)for(w=0;v=s.ay[x],w<v.length;++w){u=d.ad3()
v.$flags&2&&B.A(v)
v[w]=u}else{t=s.ay[0].length
for(x=0;x<t;++x){v=s.ay[0]
u=d.ad3()
v.$flags&2&&B.A(v)
v[x]=u}}}}
A.bge.prototype={
aSO(d,e,f){var x,w,v,u=this,t=d.c.length,s=J.iP(t,y.bc)
for(x=0;x<t;++x)s[x]=new A.aL1()
u.y=s
w=u.w
w.toString
v=D.c.b7(w*u.x,2)
u.z=new Uint16Array(v)},
Pt(){return this.x},
rN(a4,a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
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
n=D.c.hu(a5,v)
m=D.c.hu(x,v)
v=n*v<a5?0:1
v=m-n+v
o.c=v
u=p.r
u===$&&B.b()
n=D.c.hu(a6,u)
m=D.c.hu(w,u)
l=n*u<a6?0:1
l=m-n+l
o.d=l
o.e=u
u=p.d
u===$&&B.b()
u=u/2|0
o.f=u
r+=v*l*u}k=a4.bN()
j=a4.bN()
if(j>=8192)throw B.f(A.c4("Error in header for PIZ-compressed data (invalid bitmap size)."))
i=new Uint8Array(8192)
if(k<=j){h=a4.l2(j-k+1)
g=h.c-h.d
for(f=k,q=0;q<g;++q,f=e){e=f+1
i[f]=J.u(h.a,h.d+q)}}d=new Uint16Array(65536)
a0=a3.biU(i,d)
A.cPi(a4,a4.an(),a3.z,r)
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
A.cPl(u,l+f,a1,v,a2,a1*v,a0);++f}}v=a3.z
v.toString
a3.aUG(d,v,r)
v=a3.r
if(v==null){v=a3.w
v.toString
v=a3.r=A.q6(!1,v*a3.x+73728)}v.a=0
for(;a6<=w;++a6)for(q=0;q<s;++q){v=a3.y
v===$&&B.b()
o=v[q]
v=o.e
v===$&&B.b()
if(D.c.ap(a6,v)!==0)continue
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
v.l5(u[l])}}v=a3.r
return J.d_(D.A.gag(v.c),0,v.a)},
Jp(d,e,f){return this.rN(d,e,f,null,null)},
aUG(d,e,f){var x,w,v
for(x=e.$flags|0,w=0;w<f;++w){v=d[e[w]]
x&2&&B.A(e)
e[w]=v}},
biU(d,e){var x,w,v,u,t
for(x=e.$flags|0,w=0,v=0;v<65536;++v)if(v===0||(d[v>>>3]&1<<(v&7))>>>0!==0){u=w+1
x&2&&B.A(e)
e[w]=v
w=u}for(u=w;u<65536;u=t){t=u+1
x&2&&B.A(e)
e[u]=0}return w-1}}
A.aL1.prototype={}
A.bgf.prototype={
Pt(){return this.x},
rN(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=C.iM.Cu(A.BL(a0.hK(),1,null,0),!1),d=f.y
if(d==null){d=f.w
d.toString
d=f.y=A.q6(!1,f.x*d)}d.a=0
x=B.a([0,0,0,0],y.t)
w=new Uint32Array(1)
v=J.d_(D.bl.gag(w),0,null)
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
if(D.c.ap(a2,s)!==0)continue
s=n.f
s===$&&B.b()
m=D.c.hu(a1,s)
l=D.c.hu(u,s)
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
for(g=0;g<4;++g)f.y.aZ(v[g])}break
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
for(g=0;g<2;++g)f.y.aZ(v[g])}break
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
for(g=0;g<4;++g)f.y.aZ(v[g])}break}}d=f.y
return J.d_(D.A.gag(d.c),0,d.a)},
Jp(d,e,f){return this.rN(d,e,f,null,null)}}
A.bgg.prototype={
Pt(){return 1},
rN(d,e,f,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.c,g=A.q6(!1,(h-d.d)*2)
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
v=J.u(u,v)
u=$.oh()
u.$flags&2&&B.A(u)
u[0]=v
t=$.px()[0]
if(t<0){s=-t
for(;r=s-1,s>0;s=r)g.aZ(J.u(d.a,d.d++))}else for(s=t;r=s-1,s>=0;s=r)g.aZ(J.u(d.a,d.d++))}q=J.d_(D.A.gag(g.c),0,g.a)
p=q.length
for(h=q.$flags|0,o=1;o<p;++o){v=q[o-1]
u=q[o]
h&2&&B.A(q)
q[o]=v+u-128}h=i.r
if(h==null||h.length!==p)h=i.r=new Uint8Array(p)
v=D.c.b7(p+1,2)
for(n=0,m=0;!0;v=j,n=k){if(m<p){h.toString
l=m+1
k=n+1
u=q[n]
h.$flags&2&&B.A(h)
h[m]=u}else break
if(l<p){m=l+1
j=v+1
h[l]=q[v]}else break}h.toString
return h},
Jp(d,e,f){return this.rN(d,e,f,null,null)},
j(d){return B.o(this.w)}}
A.aqe.prototype={
Pt(){return this.x},
rN(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=C.iM.Cu(A.BL(d.hK(),1,null,0),!1)
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
v&2&&B.A(k)
k[s]=u+r-128}v=l.y
if(v==null||v.length!==t)v=l.y=new Uint8Array(t)
u=D.c.b7(t+1,2)
for(q=0,p=0;!0;u=m,q=n){if(p<t){v.toString
o=p+1
n=q+1
r=k[q]
v.$flags&2&&B.A(v)
v[p]=r}else break
if(o<t){p=o+1
m=u+1
v[o]=k[u]}else break}v.toString
return v},
Jp(d,e,f){return this.rN(d,e,f,null,null)},
j(d){return B.o(this.w)}}
A.b8U.prototype={
k5(d){var x=this.a
if(x==null)return null
return x.c[d].b},
nv(d,e,f){var x=new A.b8V(B.a([],y.m))
x.aSt(e)
this.a=x
return this.k5(0)}}
A.ZG.prototype={
byj(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.b,w=this.d,v=-1,u=-1,t=0;t<x;++t){s=w.n7(t)
r=w.n5(t)
q=w.n4(t)
p=w.os(t)
if(s===d&&r===e&&q===f&&p===g)return t
o=d-s
n=e-r
m=f-q
l=g-p
k=o*o+n*n+m*m+l*l
if(u===-1){u=t
v=k}else if(k<v){u=t
v=k}}return u},
aeV(){var x,w,v,u,t,s,r,q=this
if(q.c==null)return q.d
x=q.d
w=x.a
v=new A.u3(new Uint8Array(w*4),w,4)
for(u=0;u<w;++u){t=x.n7(u)
s=x.n5(u)
r=x.n4(u)
v.RN(u,t,s,r,u===q.c?0:255)}return v}}
A.ZH.prototype={
aSx(d){var x,w,v,u,t,s,r=this
r.a=d.bN()
r.b=d.bN()
r.c=d.bN()
r.d=d.bN()
x=d.df()
r.e=(x&64)!==0
if((x&128)!==0){r.f=A.cum(D.c.eq(1,(x&7)+1))
for(w=0;v=r.f,w<v.b;++w){u=J.u(d.a,d.d++)
t=J.u(d.a,d.d++)
s=J.u(d.a,d.d++)
v.d.ph(w,u,t,s)}}r.x=d.d-d.b}}
A.aqf.prototype={}
A.aoU.prototype={}
A.bcH.prototype={
ow(d){var x,w,v,u,t,s,r,q,p,o,n=this
n.f=A.cP(d,!1,null,0)
n.a=new A.aoU(B.a([],y.b))
if(!n.amh())return null
try{for(;u=n.f,t=u.d,t<u.c;){s=u.a
u.d=t+1
x=J.u(s,t)
switch(x){case 44:w=n.asr()
if(w==null){u=n.a
return u}u=w
u.r=n.e
u.w=n.c
if(n.b!==0){if(w.f==null&&n.a.e!=null){u=n.a.e
t=u.a
s=u.b
r=u.c
u=u.d
w.f=new A.ZG(t,s,r,new A.u3(new Uint8Array(B.bU(u.c)),u.a,u.b))}if(w.f!=null)w.f.c=n.d}n.a.r.push(w)
break
case 33:u=n.f
v=J.u(u.a,u.d++)
if(J.m(v,255)){u=n.f
if(u.qf(J.u(u.a,u.d++))==="NETSCAPE2.0"){q=J.u(u.a,u.d++)
p=J.u(u.a,u.d++)
if(q===3&&p===1)n.r=u.bN()}else n.VF()}else if(J.m(v,249)){u=n.f
u.toString
n.bhu(u)}else n.VF()
break
case 59:u=n.a
return u
default:break}}}catch(o){}return n.a},
bhu(d){var x,w,v,u=this
d.df()
x=d.df()
u.e=d.bN()
u.d=d.df()
d.df()
u.c=D.c.P(x,2)&7
u.b=x&1
w=d.Sd(1,0)
if(J.u(w.a,w.d)===44){++d.d
v=u.asr()
if(v==null)return
v.r=u.e
v.w=u.c
if(u.b!==0){w=v.f
if(w==null&&u.a.e!=null){w=u.a.e
w.toString
w=v.f=A.cQq(w)}if(w!=null)w.c=u.d}u.a.r.push(v)}},
k5(d){var x,w,v,u=this,t=u.f
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
nv(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null
if(a5.ow(a8)==null)return a6
x=a5.a.r.length
if(x===1)return a5.k5(0)
for(x=y.p,w=a6,v=w,u=0;t=a5.a.r,u<t.length;++u){a9=t[u]
s=a5.k5(u)
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
if(t){v.nn(s)
w=s
continue}l=a9.f
if(!(l!=null)){t=a5.a.e
t.toString
l=t}t=o?a6:p.a
if(t==null)t=0
r=o?a6:p.b
if(r==null)r=0
k=A.hA(a6,a6,C.a6,0,C.bg,r,a6,0,1,l.aeV(),C.a6,t,!1)
t=a9.w
if(t===2){t=a5.a.c.a
t=!D.A.gT(t)?t[0]:0
r=l.d
j=r.n7(t)
i=r.n5(t)
h=r.n4(t)
g=t===l.c?0:255
t=new Uint8Array(4)
t[0]=j
t[1]=i
t[2]=h
t[3]=g
r=k.a
if(r!=null)r.nq(0,new A.xv(t))}else if(t!==3){t=a9.a
t===$&&B.b()
r=!0
if(t===0){t=a9.b
t===$&&B.b()
if(t===0){t=a9.c
t===$&&B.b()
q=w.a
p=q==null
o=p?a6:q.a
if(t===(o==null?0:o)){t=a9.d
t===$&&B.b()
r=p?a6:q.b
t=t!==(r==null?0:r)}else t=r}else t=r}else t=r
if(t)if(a9.f!=null){t=w.a
t=t==null?a6:t.geS()
t.toString
f=B.H(x,x)
for(r=l.b,e=0;e<r;++e)f.m(0,e,l.byj(t.n7(e),t.n5(e),t.n4(e),t.os(e)))
t=k.a
d=t==null?a6:J.hl(t.gag(t))
if(d==null){t=k.a
t=t==null?a6:t.gag(t)
if(t==null)t=D.A.gag(new Uint8Array(0))
d=J.hl(t)}t=w.a
a0=t==null?a6:J.hl(t.gag(t))
if(a0==null){t=w.a
t=t==null?a6:t.gag(t)
if(t==null)t=D.A.gag(new Uint8Array(0))
a0=J.hl(t)}for(a1=d.length,t=d.$flags|0,a2=0;a2<a1;++a2){a3=f.i(0,a0[a2])
if(a3!==-1){a3.toString
t&2&&B.A(d)
d[a2]=a3}}}}k.y=s.y
for(t=s.a,t=t.ga1(t);t.q();){a4=t.gL(t)
if(a4.gaP(a4)!==0){r=a4.gn3(a4)
q=a9.a
q===$&&B.b()
p=a4.gnR(a4)
o=a9.b
o===$&&B.b()
k.xY(r+q,p+o,a4)}}v.nn(k)
w=k}return v},
asr(){var x,w=this.f
if(w.d>=w.c)return null
x=new A.aqf()
x.aSx(w);++this.f.d
this.VF()
return x},
aYK(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.w==null){n.w=new Uint8Array(256)
n.x=new Uint8Array(4095)
n.y=new Uint8Array(4096)
n.z=new Uint32Array(4096)}x=n.Q=n.f.df()
w=D.c.eP(1,x)
n.dy=w;++w
n.dx=w
n.db=w+1;++x
n.cy=x
n.cx=D.c.eP(1,x)
n.ay=0
n.CW=4098
n.at=n.ax=0
x=n.w
x.toString
x.$flags&2&&B.A(x)
x[0]=0
x=n.z
x.toString
D.bl.kW(x,0,4096,4098)
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
s=A.hA(m,m,C.a6,0,C.bg,w,m,0,1,t.aeV(),C.a6,x,!1)
r=new Uint8Array(x)
x=d.e
x===$&&B.b()
if(x){x=d.b
x===$&&B.b()
for(w=x+w,q=0,p=0;q<4;++q)for(o=x+C.aoy[q];o<w;o+=C.asd[q],++p){if(!n.amj(r))return s
n.au9(s,o,t,r)}}else for(o=0;o<w;++o){if(!n.amj(r))return s
n.au9(s,o,t,r)}return s},
au9(d,e,f,g){var x,w,v,u=g.length
for(x=0;x<u;++x){w=g[x]
v=d.a
if(v!=null)v.fd(x,e,w,0,0)}},
amh(){var x,w,v,u,t,s=this,r=s.f.qf(6)
if(r!=="GIF87a"&&r!=="GIF89a")return!1
x=s.a
x.toString
x.a=s.f.bN()
x=s.a
x.toString
x.b=s.f.bN()
w=s.f.df()
x=s.a
x.toString
x.c=new A.xv(new Uint8Array(B.bU(B.a([s.f.df()],y.t))));++s.f.d
if((w&128)!==0){x=s.a
x.toString
x.e=A.cum(D.c.eq(1,(w&7)+1))
for(v=0;v<s.a.e.b;++v){x=s.f
u=J.u(x.a,x.d++)
x=s.f
t=J.u(x.a,x.d++)
x=s.f
w=J.u(x.a,x.d++)
s.a.e.d.ph(v,u,t,w)}}s.a.toString
return!0},
amj(d){var x=this,w=x.as
w.toString
x.as=w-d.length
if(!x.aYY(d))return!1
if(x.as===0)x.VF()
return!0},
VF(){var x,w,v,u=this.f
if(u.d>=u.c)return!0
x=u.df()
while(!0){if(x!==0){u=this.f
u=u.d<u.c}else u=!1
if(!u)break
u=this.f
w=u.d+=x
if(w>=u.c)return!0
v=u.a
u.d=w+1
x=J.u(v,w)}return!0},
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
v&2&&B.A(d)
d[w]=t
w=u}}for(k=d.$flags|0;w<x;){s=l.ch=l.aYX()
if(s==null)return!1
v=l.dx
if(s===v)return!1
t=l.dy
if(s===t){for(t=l.z,r=0;r<=4095;++r){t.toString
t.$flags&2&&B.A(t)
t[r]=4098}l.db=v+1
v=l.Q+1
l.cy=v
l.cx=D.c.eP(1,v)
l.CW=4098}else{if(s<t){u=w+1
k&2&&B.A(d)
d[w]=s
w=u}else{v=l.z
if(v[s]===4098){q=l.db-2
if(s===q){s=l.CW
p=l.y
p===$&&B.b()
o=l.x
o===$&&B.b()
n=l.ay++
t=l.a41(v,s,t)
o.$flags&2&&B.A(o)
o[n]=t
p.$flags&2&&B.A(p)
p[q]=t}else return!1}r=0
while(!0){m=r+1
if(!(r<=4095&&s>l.dy&&s<=4095))break
v=l.x
v===$&&B.b()
t=l.ay++
q=l.y
q===$&&B.b()
q=q[s]
v.$flags&2&&B.A(v)
v[t]=q
s=l.z[s]
r=m}if(m>=4095||s>4095)return!1
v=l.x
v===$&&B.b()
t=l.ay
q=l.ay=t+1
v.$flags&2&&B.A(v)
v[t]=s
t=q
while(!0){if(!(t!==0&&w<x))break
u=w+1
t=l.ay=t-1
q=v[t]
k&2&&B.A(d)
d[w]=q
w=u}}v=l.CW
if(v!==4098&&l.z[l.db-2]===4098){t=l.z
t.toString
q=l.db-2
t.$flags&2&&B.A(t)
t[q]=v
p=l.ch
o=l.y
n=l.dy
if(p===q){o===$&&B.b()
v=l.a41(t,v,n)
o.$flags&2&&B.A(o)
o[q]=v}else{o===$&&B.b()
p.toString
v=l.a41(t,p,n)
o.$flags&2&&B.A(o)
o[q]=v}}v=l.ch
v.toString
l.CW=v}}return!0},
aYX(){var x,w,v,u,t=this
if(t.cy>12)return null
for(;x=t.ax,w=t.cy,x<w;){x=t.aV5()
x.toString
w=t.at
v=t.ax
t.at=(w|D.c.eP(x,v))>>>0
t.ax=v+8}v=t.at
u=C.asT[w]
t.at=D.c.fX(v,w)
t.ax=x-w
x=t.db
if(x<4097){++x
t.db=x
x=x>t.cx&&w<12}else x=!1
if(x){t.cx=t.cx<<1>>>0
t.cy=w+1}return v&u},
a41(d,e,f){var x,w,v=0
while(!0){if(e>f){x=v+1
w=v<=4095
v=x}else w=!1
if(!w)break
if(e>4095)return 4098
e=d[e]}return e},
aV5(){var x,w,v=this,u=v.w,t=u[0],s=u.$flags|0
if(t===0){t=v.f.df()
s&2&&B.A(u)
u[0]=t
u=v.w
t=u[0]
if(t===0)return null
D.A.ht(u,1,1+t,v.f.l2(t).hK())
u=v.w
x=u[1]
u.$flags&2&&B.A(u)
u[1]=2
u[0]=u[0]-1}else{w=u[1]
s&2&&B.A(u)
u[1]=w+1
x=u[w]
u[0]=t-1}return x}}
A.Og.prototype={
J(){return"IcoType."+this.b}}
A.beW.prototype={}
A.apF.prototype={}
A.beU.prototype={
gb4(d){return D.c.b7(A.Fs.prototype.gb4.call(this,0),2)},
gOM(){return!(this.d===40&&this.f===32)&&A.Fs.prototype.gOM.call(this)}}
A.beV.prototype={
nv(d,e,f){var x,w,v,u=this,t=A.cP(e,!1,null,0)
u.a=t
x=u.b=A.cuG(t)
if(x==null)return null
t=x.e.length
if(t===1)return u.k5(0)
for(w=null,v=0;v<u.b.e.length;++v){f=u.k5(v)
if(f==null)continue
if(w==null){f.w=C.bg
w=f}else w.nn(f)}return w},
k5(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=this.a
if(a7!=null){x=this.b
x=x==null||a8>=x.d}else x=!0
if(x)return a6
w=this.b.e[a8]
x=a7.a
a7=a7.b+w.e
v=w.d
u=J.aUz(x,a7,a7+v)
t=new A.aw1(A.cvb())
y.D.a(u)
if(t.Id(u))return t.dj(0,u)
s=A.q6(!1,14)
s.l5(19778)
s.ig(v)
s.ig(0)
s.ig(0)
a7=A.cP(u,!1,a6,0)
x=A.crG(A.cP(J.d_(D.A.gag(s.c),0,s.a),!1,a6,0))
v=a7.d
r=a7.an()
q=a7.an()
p=$.hP()
p.$flags&2&&B.A(p)
p[0]=q
q=$.lv()
o=q[0]
p[0]=a7.an()
q=q[0]
n=a7.bN()
m=a7.bN()
l=C.QB[a7.an()]
a7.an()
p[0]=a7.an()
p[0]=a7.an()
p=a7.an()
a7.an()
k=new A.beU(x,o,q,r,n,m,l,p,v)
k.ahV(a7,x)
if(r!==40&&n!==1)return a6
j=p===0&&m<=8?40+4*D.c.eq(1,m):40+4*p
x.b=j
s.a-=4
s.ig(j)
i=A.cP(u,!1,a6,0)
h=new A.b5r(!0)
h.a=i
h.b=k
g=h.k5(0)
if(m>=32)return g
f=32-D.c.ap(o,32)
e=D.c.b7(f===32?o:o+f,8)
for(a7=1/q<0,x=q<0,q=q===0,d=0;d<D.c.b7(A.Fs.prototype.gb4.call(k,0),2);++d){if(!(q?a7:x))a0=d
else{v=g.a
v=v==null?a6:v.b
a0=(v==null?0:v)-1-d}a1=i.jW(e)
i.d=i.d+(a1.c-a1.d)
v=g.a
a2=v==null?a6:v.ek(0,a0,a6)
if(a2==null)a2=new A.ff()
for(a3=0;a3<o;){a4=J.u(a1.a,a1.d++)
a5=7
while(!0){if(!(a5>-1&&a3<o))break
if((a4&D.c.eP(1,a5))>>>0!==0)a2.saP(0,0)
a2.q();++a3;--a5}}}return g}}
A.ajh.prototype={}
A.GT.prototype={}
A.GU.prototype={}
A.a_5.prototype={
gp(d){return this.a}}
A.bgG.prototype={}
A.BW.prototype={}
A.bgI.prototype={
QM(d){var x,w,v,u,t,s=this,r=A.cP(d,!0,null,0)
s.a=r
x=r.Sd(2,0)
if(J.u(x.a,x.d)!==255||J.u(x.a,x.d+1)!==216)return!1
if(s.FO()!==216)return!1
w=s.FO()
v=!1
u=!1
while(!0){if(w!==217){r=s.a
r=r.d<r.c}else r=!1
if(!r)break
t=s.a.bN()
if(t<2)break
r=s.a
r.d=r.d+(t-2)
switch(w){case 192:case 193:case 194:v=!0
break
case 218:u=!0
break}w=s.FO()}return v&&u},
qe(d,e){var x,w,v,u,t,s,r,q,p=this
p.a=A.cP(e,!0,null,0)
p.bhm()
if(p.x.length!==1)throw B.f(A.c4("Only single frame JPEGs supported"))
for(x=p.Q,w=0;v=p.d,u=v.z,w<u.length;++w){t=v.y.i(0,u[w])
v=t.a
u=p.d
s=u.f
r=t.b
q=u.r
u=p.aVd(u,t)
v=v===1&&s===2?1:0
x.push(new A.ajh(u,v,r===1&&q===2?1:0))}},
bhm(){var x,w,v,u,t,s=this
if(s.FO()!==216)throw B.f(A.c4("Start Of Image marker not found."))
x=s.FO()
while(!0){if(x!==217){w=s.a
w===$&&B.b()
w=w.d<w.c}else w=!1
if(!w)break
w=s.a
w===$&&B.b()
v=w.bN()
if(v<2)B.a4(A.c4("Invalid Block"))
w=s.a
u=w.jW(v-2)
w.d=w.d+(u.c-u.d)
switch(x){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:s.bhn(x,u)
break
case 219:s.bhr(u)
break
case 192:case 193:case 194:s.bht(x,u)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw B.f(A.c4("Unhandled frame type "+D.c.m0(x,16)))
case 196:s.bhq(u)
break
case 221:s.e=u.bN()
break
case 218:s.bhD(u)
break
case 255:w=s.a
if(J.u(w.a,w.d)!==255)--s.a.d
break
default:w=s.a
t=!1
if(J.u(w.a,w.d+-3)===255){w=s.a
if(J.u(w.a,w.d+-2)>=192){w=s.a
w=J.u(w.a,w.d+-2)<=254}else w=t}else w=t
if(w){s.a.d-=3
break}if(x!==0)throw B.f(A.c4("Unknown JPEG marker "+D.c.m0(x,16)))
break}x=s.FO()}},
FO(){var x,w=this,v=w.a
v===$&&B.b()
if(v.d>=v.c)return 0
do{do{x=w.a.df()
if(x!==255){v=w.a
v=v.d<v.c}else v=!1}while(v)
v=w.a
if(v.d>=v.c)return x
do{x=w.a.df()
if(x===255){v=w.a
v=v.d<v.c}else v=!1}while(v)
if(x===0){v=w.a
v=v.d<v.c}else v=!1}while(v)
return x},
bhs(d){if(d.an()!==1165519206)return
if(d.bN()!==0)return
this.r.qe(0,d)},
bhn(d,e){var x,w,v,u,t=this,s=e
if(d===224){x=s
w=!1
if(J.u(x.a,x.d)===74){x=s
if(J.u(x.a,x.d+1)===70){x=s
if(J.u(x.a,x.d+2)===73){x=s
if(J.u(x.a,x.d+3)===70){x=s
x=J.u(x.a,x.d+4)===0}else x=w}else x=w}else x=w}else x=w
if(x){x=new A.bgM()
w=s
J.u(w.a,w.d+5)
w=s
J.u(w.a,w.d+6)
w=s
J.u(w.a,w.d+7)
w=s
J.u(w.a,w.d+8)
w=s
J.u(w.a,w.d+9)
w=s
J.u(w.a,w.d+10)
w=s
J.u(w.a,w.d+11)
w=s
w=J.u(w.a,w.d+12)
x.f=w
v=s
v=J.u(v.a,v.d+13)
x.r=v
t.b=x
s.Sd(14+3*w*v,14)}}else if(d===225)t.bhs(s)
else if(d===238){x=s
w=!1
if(J.u(x.a,x.d)===65){x=s
if(J.u(x.a,x.d+1)===100){x=s
if(J.u(x.a,x.d+2)===111){x=s
if(J.u(x.a,x.d+3)===98){x=s
if(J.u(x.a,x.d+4)===101){x=s
x=J.u(x.a,x.d+5)===0}else x=w}else x=w}else x=w}else x=w}else x=w
if(x){t.c=new A.bgG()
x=s
J.u(x.a,x.d+6)
t.c.toString
x=s
J.u(x.a,x.d+7)
x=s
J.u(x.a,x.d+8)
t.c.toString
x=s
J.u(x.a,x.d+9)
x=s
J.u(x.a,x.d+10)
x=t.c
x.toString
w=s
x.d=J.u(w.a,w.d+11)}}else if(d===254)try{s.bHY()}catch(u){B.aZ(u)}},
bhr(d){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=this.w;v=d.d,u=v<x,u;){u=d.a
d.d=v+1
t=J.u(u,v)
s=D.c.P(t,4)
t&=15
if(t>=4)throw B.f(A.c4("Invalid number of quantization tables"))
v=w[t]
if(v==null){v=new Int16Array(64)
w[t]=v}for(u=s!==0,r=0;r<64;++r){q=u?d.bN():J.u(d.a,d.d++)
p=C.vl[r]
v.$flags&2&&B.A(v)
v[p]=q}}if(u)throw B.f(A.c4("Bad length for DQT block"))},
bht(d,e){var x,w,v,u,t,s,r,q=this
if(q.d!=null)throw B.f(A.c4("Duplicate JPG frame data found."))
x=q.d=new A.aqs(B.H(y.p,y.c),B.a([],y.t))
x.b=d===194
x.c=e.df()
x=q.d
x.toString
x.d=e.bN()
x=q.d
x.toString
x.e=e.bN()
w=e.df()
for(x=q.w,v=0;v<w;++v){u=J.u(e.a,e.d++)
t=J.u(e.a,e.d++)
s=D.c.P(t,4)
r=J.u(e.a,e.d++)
q.d.z.push(u)
q.d.y.m(0,u,new A.BW(s&15,t&15,x,r))}q.d.bGN()
q.x.push(q.d)},
bhq(d){var x,w,v,u,t,s,r,q,p,o,n,m
for(x=d.c,w=this.z,v=this.y;u=d.d,u<x;){t=d.a
d.d=u+1
s=J.u(t,u)
r=new Uint8Array(16)
for(q=0,p=0;p<16;++p){r[p]=J.u(d.a,d.d++)
q+=r[p]}o=d.jW(q)
d.d=d.d+(o.c-o.d)
n=o.hK()
if((s&16)!==0){s-=16
m=v}else m=w
if(m.length<=s)D.b.su(m,s+1)
m[s]=this.aVo(r,n)}},
bhD(d){var x,w,v,u,t,s,r,q=this,p=d.df()
if(p<1||p>4)throw B.f(A.c4("Invalid SOS block"))
x=B.vQ(p,new A.bgJ(q,d),!0,y.c)
w=d.df()
v=d.df()
u=d.df()
t=D.c.P(u,4)
s=q.a
s===$&&B.b()
r=q.d
t=new A.aqt(s,r,x,q.e,w,v,t&15,u&15)
s=r.w
s===$&&B.b()
t.f=s
t.r=r.b
t.o9(0)},
aVo(d,e){var x,w,v,u,t,s,r,q,p,o,n=B.a([],y.bd),m=16
while(!0){if(!(m>0&&d[m-1]===0))break;--m}x=y.T
n.push(new A.Tv(B.a([],x)))
w=n[0]
for(v=0,u=0;u<m;){for(t=0;t<d[u];++t){w=n.pop()
s=w.a
r=s.length
q=w.b
if(r<=q)D.b.su(s,q+1)
s[w.b]=new A.a_5(e[v])
for(;s=w.b,s>0;)w=n.pop()
w.b=s+1
n.push(w)
for(;n.length<=u;w=p){s=B.a([],x)
p=new A.Tv(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.su(r,o+1)
r[w.b]=new A.GU(s)}++v}++u
if(u<m){s=B.a([],x)
p=new A.Tv(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.su(r,o+1)
r[w.b]=new A.GU(s)
w=p}}return n[0].a},
aVd(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.e
d===$&&B.b()
x=a1.f
x===$&&B.b()
w=d<<3>>>0
v=new Int32Array(64)
u=new Uint8Array(64)
t=B.bI(x*8,null,!1,y.ac)
for(s=a1.c,r=a1.d,q=0,p=0;p<x;++p){o=p<<3>>>0
for(n=0;n<8;++n,q=m){m=q+1
t[q]=new Uint8Array(w)}for(l=0;l<d;++l){k=s[r]
k.toString
j=a1.r
j===$&&B.b()
A.d9S(k,j[p][l],u,v)
i=l<<3>>>0
for(h=0,g=0;g<8;++g){f=t[o+g]
for(n=0;n<8;++n,h=e){f.toString
e=h+1
k=u[h]
f.$flags&2&&B.A(f)
f[i+n]=k}}}}return t}}
A.Tv.prototype={}
A.aqs.prototype={
bGN(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.y,w=B.p(x).h("cc<1>"),v=new B.cc(x,x.r,x.e,w);v.q();){u=x.i(0,v.d)
g.f=Math.max(g.f,u.a)
g.r=Math.max(g.r,u.b)}v=g.e
v.toString
g.w=D.d.f9(v/8/g.f)
v=g.d
v.toString
g.x=D.d.f9(v/8/g.r)
for(w=new B.cc(x,x.r,x.e,w),v=y.h,t=y.bp;w.q();){s=x.i(0,w.d)
s.toString
r=g.e
r.toString
q=s.a
p=D.d.f9(D.d.f9(r/8)*q/g.f)
r=g.d
r.toString
o=s.b
n=D.d.f9(D.d.f9(r/8)*o/g.r)
m=g.w*q
l=g.x*o
k=J.iP(l,t)
for(j=0;j<l;++j){i=J.iP(m,v)
for(h=0;h<m;++h)i[h]=new Int32Array(64)
k[j]=i}s.e=p
s.f=n
s.r=k}}}
A.bgM.prototype={}
A.aqt.prototype={
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
p=D.c.hu(t,v)
o=D.c.ap(t,v)
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
j=J.u(w.a,w.d)
i=J.u(w.a,w.d+1)
if(j===255)if(i>=208&&i<=215)w.d+=2
else break}},
BS(){var x,w=this,v=w.ch
if(v>0){--v
w.ch=v
return D.c.nW(w.ay,v)&1}v=w.a
if(v.d>=v.c)return null
x=v.df()
w.ay=x
if(x===255)if(v.df()!==0)return null
w.ch=7
return D.c.P(w.ay,7)&1},
LL(d){var x,w=new A.GU(d)
for(;x=this.BS(),x!=null;){if(w instanceof A.GU)w=w.a[x]
if(w instanceof A.a_5)return w.a}return null},
a5Q(d){var x,w
for(x=0;d>0;){w=this.BS()
if(w==null)return null
x=(x<<1|w)>>>0;--d}return x},
M9(d){var x
if(d==null)return 0
if(d===1)return this.BS()===1?1:-1
x=this.a5Q(d)
if(x==null)return 0
if(x>=D.c.eP(1,d-1))return x
return x+D.c.eq(-1,d)+1},
aYB(d,e){var x,w,v,u,t,s,r=this,q=d.w
q===$&&B.b()
x=r.LL(q)
w=x===0?0:r.M9(x)
q=d.y
q===$&&B.b()
q+=w
d.y=q
e.$flags&2&&B.A(e)
e[0]=q
for(v=1;v<64;){q=d.x
q===$&&B.b()
u=r.LL(q)
if(u==null)break
t=u&15
s=u>>>4
if(t===0){if(s<15)break
v+=16
continue}v+=s
t=r.M9(t)
e[C.vl[v]]=t;++v}},
aYE(d,e){var x,w,v=d.w
v===$&&B.b()
x=this.LL(v)
w=x===0?0:D.c.eq(this.M9(x),this.ax)
v=d.y
v===$&&B.b()
v+=w
d.y=v
e.$flags&2&&B.A(e)
e[0]=v},
aYG(d,e){var x=e[0],w=this.BS()
w.toString
w=D.c.eq(w,this.ax)
e.$flags&2&&B.A(e)
e[0]=(x|w)>>>0},
aYv(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.CW
if(o>0){p.CW=o-1
return}x=p.Q
w=p.as
for(o=p.ax,v=e.$flags|0;x<=w;){u=d.x
u===$&&B.b()
u=p.LL(u)
u.toString
t=u&15
s=u>>>4
if(t===0){if(s<15){o=p.a5Q(s)
o.toString
p.CW=o+D.c.eq(1,s)-1
break}x+=16
continue}x+=s
r=C.vl[x]
u=p.M9(t)
q=D.c.eq(1,o)
v&2&&B.A(e)
e[r]=u*q;++x}},
aYx(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.Q,n=p.as
$label0$1:for(x=p.ax,w=e.$flags|0,v=0;o<=n;){u=C.vl[o]
t=p.cx
switch(t){case 0:t=d.x
t===$&&B.b()
s=p.LL(t)
if(s==null)throw B.f(A.c4("Invalid progressive encoding"))
r=s&15
v=s>>>4
if(r===0)if(v<15){t=p.a5Q(v)
t.toString
p.CW=t+D.c.eq(1,v)
p.cx=4}else{p.cx=1
v=16}else{if(r!==1)throw B.f(A.c4("invalid ACn encoding"))
p.cy=p.M9(r)
p.cx=v!==0?2:3}continue $label0$1
case 1:case 2:q=e[u]
if(q!==0){t=p.BS()
t.toString
t=D.c.eq(t,x)
w&2&&B.A(e)
e[u]=q+t}else{--v
if(v===0)p.cx=t===2?3:0}break
case 3:t=e[u]
if(t!==0){q=p.BS()
q.toString
q=D.c.eq(q,x)
w&2&&B.A(e)
e[u]=t+q}else{t=p.cy
t===$&&B.b()
t=D.c.eq(t,x)
w&2&&B.A(e)
e[u]=t
p.cx=0}break
case 4:t=e[u]
if(t!==0){q=p.BS()
q.toString
q=D.c.eq(q,x)
w&2&&B.A(e)
e[u]=t+q}break}++o}if(p.cx===4)if(--p.CW===0)p.cx=0},
aYL(d,e,f,g,h){var x,w,v=this.f
v===$&&B.b()
x=D.c.hu(f,v)*d.b+g
w=D.c.ap(f,v)*d.a+h
v=d.r
v===$&&B.b()
if(x>=v.length)return
v=v[x]
if(w>=v.length)return
e.$2(d,v[w])}}
A.aqr.prototype={
nv(d,e,f){var x=A.cvp()
x.qe(0,e)
if(x.x.length!==1)throw B.f(A.c4("only single frame JPEGs supported"))
return A.d8n(x)},
dj(d,e){return this.nv(0,e,null)}}
A.bgH.prototype={
J(){return"JpegChroma."+this.b}}
A.bgK.prototype={
aKn(d){d=D.d.D(D.c.bc(d,1,100))
if(this.at===d)return
this.b9E(d<50?D.d.fZ(5000/d):D.c.fZ(200-d*2))
this.at=d},
bxl(b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=A.q6(!0,8192)
a8.yX(a9,216)
a8.yX(a9,224)
a9.l5(16)
a9.aZ(74)
a9.aZ(70)
a9.aZ(73)
a9.aZ(70)
a9.aZ(0)
a9.aZ(1)
a9.aZ(1)
a9.aZ(0)
a9.l5(1)
a9.l5(1)
a9.aZ(0)
a9.aZ(0)
a8.bph(a9,b0.gwQ())
a8.bpl(a9)
x=b0.gcX(0)
w=b0.gb4(0)
a8.yX(a9,192)
a9.l5(17)
a9.aZ(8)
a9.l5(w)
a9.l5(x)
a9.aZ(3)
a9.aZ(1)
x=b1===C.JL
a9.aZ(x?17:34)
a9.aZ(0)
a9.aZ(2)
a9.aZ(17)
a9.aZ(1)
a9.aZ(3)
a9.aZ(17)
a9.aZ(1)
a8.bpk(a9)
a8.yX(a9,218)
a9.l5(12)
a9.aZ(3)
a9.aZ(1)
a9.aZ(0)
a9.aZ(2)
a9.aZ(17)
a9.aZ(3)
a9.aZ(17)
a9.aZ(0)
a9.aZ(63)
a9.aZ(0)
a8.ax=0
a8.ay=7
v=b0.gcX(0)
u=b0.gb4(0)
if(x){t=new Float32Array(64)
s=new Float32Array(64)
r=new Float32Array(64)
for(x=a8.c,w=a8.d,q=0,p=0,o=0,n=0;n<u;n+=8)for(m=0;m<v;m+=8){a8.KI(b0,m,n,v,u,t,s,r)
l=a8.e
k=a8.r
k===$&&B.b()
q=a8.wh(a9,t,x,q,l,k)
k=a8.f
l=a8.w
l===$&&B.b()
p=a8.wh(a9,s,w,p,k,l)
o=a8.wh(a9,r,w,o,a8.f,a8.w)}}else{x=y.C
t=J.kj(4,x)
for(j=0;j<4;++j)t[j]=new Float32Array(64)
s=J.kj(4,x)
for(j=0;j<4;++j)s[j]=new Float32Array(64)
r=J.kj(4,x)
for(j=0;j<4;++j)r[j]=new Float32Array(64)
i=new Float32Array(64)
h=new Float32Array(64)
for(x=a8.c,w=a8.d,q=0,p=0,o=0,n=0;n<u;n+=16)for(l=n+8,m=0;m<v;m+=16){k=t[0]
g=s[0]
f=r[0]
a8.KI(b0,m,n,v,u,k,g,f)
e=m+8
d=t[1]
a0=s[1]
a1=r[1]
a8.KI(b0,e,n,v,u,d,a0,a1)
a2=t[2]
a3=s[2]
a4=r[2]
a8.KI(b0,m,l,v,u,a2,a3,a4)
a5=t[3]
a6=s[3]
a7=r[3]
a8.KI(b0,e,l,v,u,a5,a6,a7)
a8.akY(i,g,a0,a3,a6)
a8.akY(h,f,a1,a4,a7)
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
a8.wp(a9,B.a([D.c.eP(1,x)-1,x],y.t))}a8.yX(a9,217)
return J.d_(D.A.gag(a9.c),0,a9.a)},
KI(d,e,f,g,h,i,j,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.as,w=i.$flags|0,v=j.$flags|0,u=a0.$flags|0,t=f+1,s=0;s<64;++s){r=s>>>3
q=f+r
p=e+(s&7)
if(q>=h)q-=t+r-h
if(p>=g)p-=p-g+1
o=d.a
n=o==null?null:o.ek(p,q,null)
if(n==null)n=new A.ff()
if(n.gdu()!==C.a6)n=n.o8(C.a6)
m=D.d.D(n.gaw(n))
l=D.d.D(n.gaK())
k=D.d.D(n.gaL(n))
o=D.c.P(x[m]+x[l+256]+x[k+512],16)
w&2&&B.A(i)
i[s]=o-128
o=D.c.P(x[m+768]+x[l+1024]+x[k+1280],16)
v&2&&B.A(j)
j[s]=o-128
o=D.c.P(x[m+1280]+x[l+1536]+x[k+1792],16)
u&2&&B.A(a0)
a0[s]=o-128}},
akY(d,e,f,g,h){var x,w,v,u,t,s,r,q
for(x=d.$flags|0,w=0;w<64;++w){if(w<32)v=D.c.ap(w,8)<4?e:f
else v=D.c.ap(w,8)<4?g:h
u=(D.c.b7(D.c.ap(w,32),8)<<4>>>0)+(D.c.ap(w,4)<<1>>>0)
t=v[u]
s=v[u+1]
r=v[u+8]
q=v[u+9]
x&2&&B.A(d)
d[w]=(t+s+r+q)/4}},
yX(d,e){d.aZ(255)
d.aZ(e&255)},
b9E(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.a,w=x.$flags|0,v=0;v<64;++v){u=D.d.fZ((C.ayj[v]*d+50)/100)
if(u<1)u=1
else if(u>255)u=255
t=C.qL[v]
w&2&&B.A(x)
x[t]=u}for(w=g.b,t=w.$flags|0,s=0;s<64;++s){r=D.d.fZ((C.arL[s]*d+50)/100)
if(r<1)r=1
else if(r>255)r=255
q=C.qL[s]
t&2&&B.A(w)
w[q]=r}for(t=g.c,q=t.$flags|0,p=g.d,o=p.$flags|0,n=0,m=0;m<8;++m)for(l=0;l<8;++l){k=C.qL[n]
j=x[k]
i=C.L7[m]
h=C.L7[l]
q&2&&B.A(t)
t[n]=1/(j*i*h*8)
k=w[k]
o&2&&B.A(p)
p[n]=1/(k*i*h*8);++n}},
SY(d,e){var x,w,v,u,t,s=y.t,r=B.a([B.a([],s)],y.cQ)
for(x=0,w=0,v=1;v<=16;++v){for(u=1;u<=d[v];++u){t=e[w]
if(r.length<=t)D.b.su(r,t+1)
r[t]=B.a([x,v],s);++w;++x}x*=2}return r},
b9t(){var x,w,v,u,t,s,r,q,p,o,n
for(x=this.y,w=this.x,v=y.t,u=1,t=2,s=1;s<=15;++s){for(r=u;r<t;++r){q=32767+r
x[q]=s
w[q]=B.a([r,s],v)}for(q=t-1,p=-q,o=-u;p<=o;++p){n=32767+p
x[n]=s
w[n]=B.a([q+p,s],v)}u=u<<1>>>0
t=t<<1>>>0}},
b9F(){var x,w,v
for(x=this.as,w=x.$flags|0,v=0;v<256;++v){w&2&&B.A(x)
x[v]=19595*v
x[v+256]=38470*v
x[v+512]=7471*v+32768
x[v+768]=-11059*v
x[v+1024]=-21709*v
x[v+1280]=32768*v+8421375
x[v+1536]=-27439*v
x[v+1792]=-5329*v}},
b0s(d4,d5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3
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
x&2&&B.A(d4)
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
x&2&&B.A(d4)
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
x[v]=d3>0?D.d.D(d3+0.5):D.d.D(d3-0.5)}return x},
bph(d,e){var x,w
if(e.gT(0))return
x=A.q6(!1,8192)
e.jt(0,x)
w=J.d_(D.A.gag(x.c),0,x.a)
this.yX(d,225)
d.l5(w.length+8)
d.ig(1165519206)
d.l5(0)
d.mx(w)},
bpl(d){var x,w,v
this.yX(d,219)
d.l5(132)
d.aZ(0)
for(x=this.a,w=0;w<64;++w)d.aZ(x[w])
d.aZ(1)
for(x=this.b,v=0;v<64;++v)d.aZ(x[v])},
bpk(d){var x,w,v,u,t,s,r,q
this.yX(d,196)
d.l5(418)
d.aZ(0)
for(x=0;x<16;){++x
d.aZ(C.Sh[x])}for(w=0;w<=11;++w)d.aZ(C.qe[w])
d.aZ(16)
for(v=0;v<16;){++v
d.aZ(C.Kc[v])}for(u=0;u<=161;++u)d.aZ(C.Lw[u])
d.aZ(1)
for(t=0;t<16;){++t
d.aZ(C.N8[t])}for(s=0;s<=11;++s)d.aZ(C.qe[s])
d.aZ(17)
for(r=0;r<16;){++r
d.aZ(C.LY[r])}for(q=0;q<=161;++q)d.aZ(C.Or[q])},
wh(d,e,f,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=a2[0],h=a2[240],g=j.b0s(e,f)
for(x=j.Q,w=0;w<64;++w)x[C.qL[w]]=g[w]
v=x[0]
v.toString
u=v-a0
if(u===0){t=a1[0]
t.toString
j.wp(d,t)}else{s=32767+u
a1.toString
t=j.y[s]
t.toString
t=a1[t]
t.toString
j.wp(d,t)
t=j.x[s]
t.toString
j.wp(d,t)}r=63
while(!0){if(!(r>0&&x[r]===0))break;--r}if(r===0){i.toString
j.wp(d,i)
return v}for(t=j.y,q=j.x,p=1;p<=r;){o=p
while(!0){if(!(x[o]===0&&o<=r))break;++o}n=o-p
if(n>=16){m=D.c.P(n,4)
for(l=1;l<=m;++l){h.toString
j.wp(d,h)}n&=15}k=x[o]
k.toString
s=32767+k
k=t[s]
k.toString
k=a2[(n<<4>>>0)+k]
k.toString
j.wp(d,k)
k=q[s]
k.toString
j.wp(d,k)
p=o+1}if(r!==63){i.toString
j.wp(d,i)}return v},
wp(d,e){var x,w=this,v=e[0],u=e[1]-1
for(;u>=0;){if((v&D.c.eP(1,u))>>>0!==0)w.ax=(w.ax|D.c.eP(1,w.ay))>>>0;--u
if(--w.ay<0){x=w.ax
if(x===255){d.aZ(255)
d.aZ(0)}else d.aZ(x)
w.ay=7
w.ax=0}}}}
A.Q7.prototype={
J(){return"PngDisposeMode."+this.b}}
A.a2P.prototype={
J(){return"PngBlendMode."+this.b}}
A.a2Q.prototype={}
A.aqg.prototype={}
A.CT.prototype={
J(){return"PngFilterType."+this.b}}
A.brF.prototype={}
A.bgh.prototype={}
A.aw1.prototype={
Id(d){var x,w=A.cP(d,!0,null,0).l2(8)
for(x=0;x<8;++x)if(J.u(w.a,w.d+x)!==D.QQ[x])return!1
return!0},
ow(b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=A.cP(b4,!0,b2,0)
b1.d=b3
x=b3.l2(8)
for(w=0;w<8;++w)if(J.u(x.a,x.d+w)!==D.QQ[w])return b2
for(b3=b1.a,v=b3.cx,u=y.t,t=b3.cy,s=y.L,r=b3.ax;!0;){q=b1.d
p=q.d-q.b
o=q.an()
n=b1.d.qf(4)
switch(n){case"tEXt":q=b1.d
m=q.jW(o)
q.d=q.d+(m.c-m.d)
l=m.hK()
k=l.length
for(w=0;w<k;++w)if(l[w]===0){q=w+1
r.m(0,D.dZ.dj(0,new Uint8Array(l.subarray(0,B.qy(0,w,k)))),D.dZ.dj(0,new Uint8Array(l.subarray(q,B.qy(q,b2,k)))))
break}b1.d.d+=4
break
case"pHYs":q=b1.d
m=q.jW(o)
q.d=q.d+(m.c-m.d)
j=A.c8(m,b2,0)
j.an()
j.an()
J.u(j.a,j.d++)
b1.d.d+=4
break
case"IHDR":q=b1.d
m=q.jW(o)
q.d=q.d+(m.c-m.d)
i=A.c8(m,b2,0)
h=i.hK()
b3.a=i.an()
b3.b=i.an()
b3.c=J.u(i.a,i.d++)
b3.d=J.u(i.a,i.d++)
J.u(i.a,i.d++)
b3.f=J.u(i.a,i.d++)
b3.r=J.u(i.a,i.d++)
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
break}if(b1.d.an()!==A.x1(h,A.x1(new B.e2(n),0)))throw B.f(A.c4("Invalid "+n+" checksum"))
break
case"PLTE":q=b1.d
m=q.jW(o)
q.d=q.d+(m.c-m.d)
b3.w=m.hK()
if(b1.d.an()!==A.x1(s.a(b3.w),A.x1(new B.e2(n),0)))throw B.f(A.c4("Invalid "+n+" checksum"))
break
case"tRNS":q=b1.d
m=q.jW(o)
q.d=q.d+(m.c-m.d)
b3.x=m.hK()
g=b1.d.an()
q=b3.x
q.toString
if(g!==A.x1(q,A.x1(new B.e2(n),0)))throw B.f(A.c4("Invalid "+n+" checksum"))
break
case"IEND":b1.d.d+=4
break
case"gAMA":if(o!==4)throw B.f(A.c4("Invalid gAMA chunk"))
b1.d.an()
b1.d.d+=4
break
case"IDAT":t.push(p)
q=b1.d
f=q.d+=o
q.d=f+4
break
case"acTL":b3.ch=b1.d.an()
b1.d.an()
b1.d.d+=4
break
case"fcTL":b1.d.an()
e=b1.d.an()
d=b1.d.an()
a0=b1.d.an()
a1=b1.d.an()
a2=b1.d.bN()
a3=b1.d.bN()
q=b1.d
a4=J.u(q.a,q.d++)
q=b1.d
a5=J.u(q.a,q.d++)
q=C.apk[a4]
f=C.avI[a5]
v.push(new A.aqg(B.a([],u),e,d,a0,a1,a2,a3,q,f))
b1.d.d+=4
break
case"fdAT":b1.d.an()
D.b.gU(v).y.push(p)
q=b1.d
f=q.d+=o-4
q.d=f+4
break
case"bKGD":q=b3.d
if(q===3){q=b1.d
a6=J.u(q.a,q.d++);--o
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
b3.z=new A.MB(f)}else{q=new Uint8Array(3)
q[0]=a8
q[1]=a9
q[2]=b0
b3.z=new A.ajc(q)}}else if(q===0||q===4){b1.d.bN()
o-=2}else if(q===2||q===6){q=b1.d
q.bN()
q.bN()
q.bN()
o-=24}if(o>0)b1.d.d+=o
b1.d.d+=4
break
case"iCCP":b3.Q=b1.d.Q8()
q=b1.d
J.u(q.a,q.d++)
q=b3.Q
f=b1.d
m=f.jW(o-(q.length+2))
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
k5(b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=null,b4=b1.a,b5=b4.a,b6=b4.b,b7=b4.cx,b8=b7.length
if(b8===0||b9===0){w=B.a([],y.a)
b7=b4.cy
v=b7.length
for(u=0,t=0;t<v;++t){b8=b1.d
b8===$&&B.b()
b8.d=b7[t]
s=b8.an()
r=b1.d.qf(4)
b8=b1.d
q=b8.jW(s)
b8.d=b8.d+(q.c-q.d)
p=q.hK()
u+=p.length
w.push(p)
if(b1.d.an()!==A.x1(p,A.x1(new B.e2(r),0)))throw B.f(A.c4("Invalid "+r+" checksum"))}b3=new Uint8Array(u)
for(b7=w.length,o=0,n=0;n<w.length;w.length===b7||(0,B.P)(w),++n){p=w[n]
J.cjl(b3,o,p)
o+=p.length}}else{if(b9>=b8)throw B.f(A.c4("Invalid Frame Number: "+b9))
m=b7[b9]
b5=m.b
b6=m.c
w=B.a([],y.a)
for(b7=m.y,u=0,t=0;t<b7.length;++t){b8=b1.d
b8===$&&B.b()
b8.d=b7[t]
s=b8.an()
b8=b1.d
b8.qf(4)
b8.d+=4
b8=b1.d
q=b8.jW(s-4)
b8.d=b8.d+(q.c-q.d)
p=q.hK()
u+=p.length
w.push(p)}b3=new Uint8Array(u)
for(b7=w.length,o=0,n=0;n<w.length;w.length===b7||(0,B.P)(w),++n){p=w[n]
J.cjl(b3,o,p)
o+=p.length}}b7=b4.d
l=1
if(!(b7===3))if(!(b7===0)){if(b7===4)b7=2
else b7=b7===6?4:3
l=b7}x=null
try{x=C.iM.Cu(A.BL(b3,1,b2,0),!1)}catch(k){return b2}j=A.cP(x,!0,b2,0)
b1.c=b1.b=0
i=b2
if(b4.d===3){b7=b4.w
if(b7!=null){h=b7.length/3|0
g=b4.x
b8=g!=null
f=b8?g.length:0
e=b8?4:3
i=new A.u3(new Uint8Array(h*e),h,e)
for(b8=e===4,t=0,d=0;t<h;++t,d+=3){a0=b8&&t<f?g[t]:255
i.RN(t,b7[d],b7[d+1],b7[d+2],a0)}}}if(b4.d===0&&b4.x!=null&&i==null&&b4.c<=8){g=b4.x
a1=g.length
b7=b4.c
h=D.c.eP(1,b7)
i=new A.u3(new Uint8Array(h*4),h,4)
if(b7===1)a2=255
else if(b7===2)a2=85
else{b7=b7===4?17:1
a2=b7}for(t=0;t<h;++t){a3=t*a2
i.RN(t,a3,a3,a3,255)}for(b7=i.b,b8=3<b7,a4=i.c,a5=a4.$flags|0,t=0;t<a1;t+=2){a6=(g[t]&255)<<8|g[t+1]&255
if(a6<h)if(b8){a5&2&&B.A(a4)
a4[a6*b7+3]=0}}}b7=b4.c
if(b7===1)a7=C.f8
else if(b7===2)a7=C.fR
else{if(b7===4)b8=C.fS
else b8=b7===16?C.cb:C.a6
a7=b8}b8=b4.d
if(b8===0&&b4.x!=null&&b7>8)l=4
a8=A.hA(b2,b2,a7,0,C.bg,b6,b2,0,b8===2&&b4.x!=null?4:l,i,C.a6,b5,!1)
a9=b4.a
b0=b4.b
b4.a=b5
b4.b=b6
b1.e=0
if(b4.r!==0){b7=b6+7>>>3
b1.BR(j,a8,0,0,8,8,b5+7>>>3,b7)
b8=b5+3
b1.BR(j,a8,4,0,8,8,b8>>>3,b7)
b7=b6+3
b1.BR(j,a8,0,4,4,8,b8>>>2,b7>>>3)
b8=b5+1
b1.BR(j,a8,2,0,4,4,b8>>>2,b7>>>2)
b7=b6+1
b1.BR(j,a8,0,2,2,4,b8>>>1,b7>>>2)
b1.BR(j,a8,1,0,2,2,b5>>>1,b7>>>1)
b1.BR(j,a8,0,1,1,2,b5,b6>>>1)}else b1.bgB(j,a8)
b4.a=a9
b4.b=b0
b7=b4.at
if(b7!=null)a8.c=new A.a_7(b4.Q,C.zH,b7)
b4=b4.ax
if(b4.a!==0)a8.bq9(b4)
return a8},
nv(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(g.ow(e)==null)return f
x=g.a
w=x.cx
v=w.length
if(v===0){x=g.k5(0)
x.toString
return x}for(v=y.g,u=f,t=u,s=0;s<x.ch;++s){a0=w[s]
r=g.k5(s)
if(r==null)continue
if(t==null||u==null){t=r.axE(r.gq8())
q=a0.f
t.y=D.d.D((q===0||a0.r===0?0:q/a0.r)*1000)
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
o=o===(n==null?0:n)&&a0.d===0&&a0.e===0&&a0.x===C.a1H}else o=!1
if(o){q=a0.f
r.y=D.d.D((q===0||a0.r===0?0:q/a0.r)*1000)
t.nn(r)
u=r
continue}i=t.x
u=A.BB((i===$?t.x=B.a([],v):i)[q],!1,!1)
h=p.w
if(h===C.a1J){q=p.d
o=p.e
n=x.z
if(n==null){n=new Uint8Array(4)
m=new A.MB(n)
n[0]=0
n[1]=0
n[2]=0
n[3]=0
n=m}A.d7N(u,!1,n,q,q+p.b-1,o,o+p.c-1)}else if(h===C.a1K&&s>1){i=t.x
if(i===$)i=t.x=B.a([],v)
q=p.d
o=p.e
n=p.b
m=p.c
u=A.coM(u,i[s-2],C.xU,m,n,q,o,m,n,q,o)}q=a0.f
u.y=D.d.D((q===0||a0.r===0?0:q/a0.r)*1000)
q=a0.x===C.a1I?C.xU:C.xT
u=A.coM(u,r,q,f,f,a0.d,a0.e,f,f,f,f)
t.nn(u)}return t},
dj(d,e){return this.nv(0,e,null)},
BR(a0,a1,a2,a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=e.d
if(d===4)x=2
else if(d===2)x=3
else{d=d===6?4:1
x=d}w=x*e.c
v=D.c.P(w+7,3)
u=D.c.P(w*a6+7,3)
t=B.a([null,null],y.e)
s=B.a([0,0,0,0],y.t)
for(e=a4>1,r=a4-a2,q=a3,p=0,o=0;p<a7;++p,q+=a5,++f.e){n=C.PT[J.u(a0.a,a0.d++)]
m=a0.jW(u)
a0.d=a0.d+(m.c-m.d)
d=m.hK()
t[o]=d
o=1-o
f.atD(n,v,d,t[o])
f.c=f.b=0
l=new A.lM(d,0,d.length,0,!0)
for(d=r<=1,k=a2,j=0;j<a6;++j,k+=a4){f.aqC(l,s)
i=a1.a
i=i==null?null:i.ek(k,q,null)
f.a6l(i==null?new A.ff():i,s)
if(!d||e)for(h=0;h<a4;++h)for(i=q+h,g=0;g<r;++g)f.a6l(a1.ky(k+g,i),s)}}},
bgB(d,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a,e=f.d
if(e===4)x=2
else if(e===2)x=3
else{e=e===6?4:1
x=e}w=x*f.c
v=f.a
u=f.b
t=D.c.P(v*w+7,3)
s=D.c.P(w+7,3)
r=B.bI(t,0,!1,y.p)
q=B.a([r,r],y.S)
p=B.a([0,0,0,0],y.t)
f=a0.a
o=f.ga1(f)
o.q()
for(n=0,m=0;n<u;++n,m=j){l=C.PT[J.u(d.a,d.d++)]
k=d.jW(t)
d.d=d.d+(k.c-k.d)
f=k.hK()
q[m]=f
j=1-m
g.atD(l,s,f,q[j])
g.c=g.b=0
f=q[m]
e=f.length
i=new A.lM(f,0,e,0,!0)
for(h=0;h<v;++h){g.aqC(i,p)
g.a6l(o.gL(o),p)
o.q()}}},
atD(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=f.length
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
f[x]=f[x]+m&255}break
default:throw B.f(A.c4("Invalid filter value: "+d.j(0)))}},
ta(d,e){var x,w,v,u,t,s=this
if(e===0)return 0
if(e===8)return d.df()
if(e===16)return d.bN()
for(x=d.c;w=s.c,w<e;){w=d.d
if(w>=x)throw B.f(A.c4("Invalid PNG data."))
v=d.a
d.d=w+1
u=J.u(v,w)
w=s.c
s.b=D.c.eP(u,w)
s.c=w+8}if(e===1)t=1
else if(e===2)t=3
else{if(e===4)x=15
else x=0
t=x}x=w-e
w=D.c.fX(s.b,x)
s.c=x
return w&t},
aqC(d,e){var x=this,w=x.a,v=w.d
switch(v){case 0:e[0]=x.ta(d,w.c)
return
case 2:e[0]=x.ta(d,w.c)
e[1]=x.ta(d,w.c)
e[2]=x.ta(d,w.c)
return
case 3:e[0]=x.ta(d,w.c)
return
case 4:e[0]=x.ta(d,w.c)
e[1]=x.ta(d,w.c)
return
case 6:e[0]=x.ta(d,w.c)
e[1]=x.ta(d,w.c)
e[2]=x.ta(d,w.c)
e[3]=x.ta(d,w.c)
return}throw B.f(A.c4("Invalid color type: "+v+"."))},
a6l(d,e){var x,w,v,u,t,s,r,q,p=this.a,o=p.d
switch(o){case 0:x=p.x
if(x!=null&&p.c>8){p=x[0]
o=x[1]
w=e[0]
d.ij(w,w,w,w!==((p&255)<<24|o&255)>>>0?d.gcf():0)
return}d.kB(e[0],0,0)
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
if(v!==((o&255)<<8|t&255)||w!==((s&255)<<8|r&255)||u!==((q&255)<<8|p&255)){d.ij(v,w,u,d.gcf())
return}}d.kB(v,w,u)
return
case 3:d.sef(0,e[0])
return
case 4:d.kB(e[0],e[1],0)
return
case 6:d.ij(e[0],e[1],e[2],e[3])
return}throw B.f(A.c4("Invalid color type: "+o+"."))}}
A.aw2.prototype={
J(){return"PngFilter."+this.b}}
A.brD.prototype={
nn(d){var x,w,v,u,t,s,r,q,p=this,o=8192,n=d.a
n=n==null?null:n.grr()
if(!(n===!0&&d.gdu()!==C.cb))n=d.gmM()<8&&!d.grl()&&d.gq8()>1
else n=!0
if(n)d=d.o8(C.a6)
if(p.w==null){n=A.q6(!0,o)
p.w=n
n.mx(B.a([137,80,78,71,13,10,26,10],y.t))
x=A.q6(!0,o)
x.ig(d.gcX(0))
x.ig(d.gb4(0))
x.aZ(d.gmM())
if(d.grl())n=3
else if(d.gq8()===1)n=0
else if(d.gq8()===2)n=4
else n=d.gq8()===3?2:6
x.aZ(n)
x.aZ(0)
x.aZ(0)
x.aZ(0)
n=p.w
n.toString
p.ti(n,"IHDR",J.d_(D.A.gag(x.c),0,x.a))
n=d.c
if(n!=null){x=A.q6(!0,o)
x.mx(new B.e2(n.a))
x.aZ(0)
x.aZ(0)
x.mx(n.btf())
n=p.w
n.toString
p.ti(n,"iCCP",J.d_(D.A.gag(x.c),0,x.a))}if(d.grl()){n=p.a
if(n!=null){n=n.a
n===$&&B.b()
p.av7(n)}else{n=d.a
n=n==null?null:n.geS()
n.toString
p.av7(n)}}if(p.r){x=A.q6(!0,o)
n=p.e
n===$&&B.b()
x.ig(n)
x.ig(p.c)
n=p.w
n.toString
p.ti(n,"acTL",J.d_(D.A.gag(x.c),0,x.a))}}w=d.grl()?1:d.gq8()
v=d.gdu()===C.cb?2:1
n=d.gcX(0)
u=d.gb4(0)
t=d.gb4(0)
s=new Uint8Array(n*u*w*v+t)
p.bgC(0,d,s)
r=C.FP.aze(s,p.d)
n=d.d
if(n!=null)for(n=new B.cc(n,n.r,n.e,B.p(n).h("cc<1>"));n.q();){u=n.d
t=d.d.i(0,u)
t.toString
x=new A.aux(!0,new Uint8Array(8192))
x.mx(D.pA.cz(u))
x.aZ(0)
x.mx(D.pA.cz(t))
u=p.w
u.toString
p.ti(u,"tEXt",J.d_(D.A.gag(x.c),0,x.a))}if(p.r){x=A.q6(!0,o)
x.ig(p.f)
x.ig(d.gcX(0))
x.ig(d.gb4(0))
x.ig(0)
x.ig(0)
x.l5(d.y)
x.l5(1000)
x.aZ(1)
x.aZ(0)
n=p.w
n.toString
p.ti(n,"fcTL",J.d_(D.A.gag(x.c),0,x.a));++p.f}if(p.f<=1){n=p.w
n.toString
p.ti(n,"IDAT",r)}else{q=A.q6(!0,o)
q.ig(p.f)
q.mx(r)
n=p.w
n.toString
p.ti(n,"fdAT",J.d_(D.A.gag(q.c),0,q.a));++p.f}},
byp(d){var x,w=this,v=w.w
if(v==null)return null
w.ti(v,"IEND",B.a([],y.t))
w.f=0
v=w.w
x=J.d_(D.A.gag(v.c),0,v.a)
w.w=null
return x},
bxm(d,e){var x,w,v,u,t,s=this,r=d.gkY().length
if(r<=1){s.e=1
s.r=!1
s.nn(d)}else{r=d.gkY().length
s.e=r
s.r=r>1
s.c=d.r
if(d.grl()){x=new A.bny(new Int32Array(256))
x.bc7(256)
x.bpS(d)
s.a=x
for(r=d.gkY(),w=r.length,v=0;v<r.length;r.length===w||(0,B.P)(r),++v){u=r[v]
if(u!==d){x.aow(u)
x.alH()
x.aob()
x.ak9()}}}for(r=d.gkY(),w=r.length,v=0;v<r.length;r.length===w||(0,B.P)(r),++v){u=r[v]
t=s.a
if(t!=null)s.nn(t.aHo(u))
else s.nn(u)}}r=s.byp(0)
r.toString
return r},
av7(d){var x,w,v,u=this
if(d.gdu()===C.a6&&d.b===3&&d.a===256){x=u.w
x.toString
u.ti(x,"PLTE",J.d_(d.gag(d),0,null))}else{x=d.a
w=A.q6(!0,x*3)
for(v=0;v<x;++v){w.aZ(D.d.D(d.n7(v)))
w.aZ(D.d.D(d.n5(v)))
w.aZ(D.d.D(d.n4(v)))}x=u.w
x.toString
u.ti(x,"PLTE",J.d_(D.A.gag(w.c),0,w.a))}if(d.b===4){x=d.a
w=A.q6(!0,x)
for(v=0;v<x;++v)w.aZ(D.d.D(d.os(v)))
x=u.w
x.toString
u.ti(x,"tRNS",J.d_(D.A.gag(w.c),0,w.a))}},
ti(d,e,f){d.ig(f.length)
d.mx(new B.e2(e))
d.mx(f)
d.ig(A.x1(f,A.x1(new B.e2(e),0)))},
bgC(d,e,f){var x,w,v=this,u=e.grl()?C.aTO:v.b,t=e.gag(0),s=e.a.grJ(),r=e.grl()?1:e.gq8(),q=D.c.P(r*e.gmM()+7,3),p=e.gmM()+7>>>3,o=u.a,n=J.d9(t),m=0,l=0,k=null,j=0
while(!0){x=e.a
x=x==null?null:x.b
if(!(j<(x==null?0:x)))break
w=n.z_(t,l,s)
l+=s
switch(o){case 1:m=v.b0F(w,p,q,f,m)
break
case 2:m=v.b0I(w,k,p,f,m)
break
case 3:m=v.b0z(w,k,p,q,f,m)
break
case 4:m=v.b0C(w,k,p,q,f,m)
break
default:m=v.b0B(w,p,f,m)
break}++j
k=w}},
av1(d,e,f,g,h){var x,w,v;--d
for(x=g.$flags|0;d>=0;h=w){w=h+1
v=e[f+d]
x&2&&B.A(g)
g[h]=v;--d}return h},
b0B(d,e,f,g){var x,w,v=g+1
f.$flags&2&&B.A(f)
f[g]=0
x=d.length
if(e===1)for(g=v,w=0;w<x;++w,g=v){v=g+1
f[g]=d[w]}else for(g=v,w=0;w<x;w+=e)g=this.av1(e,d,w,f,g)
return g},
b0F(d,e,f,g,h){var x,w,v,u,t,s,r=h+1
g.$flags&2&&B.A(g)
g[h]=1
for(h=r,x=0;x<f;x+=e)h=this.av1(e,d,x,g,h)
w=d.length
for(v=e-1,x=f;x<w;x+=e)for(u=v,t=0;t<e;++t,--u,h=r){r=h+1
s=x+u
g[h]=d[s]-d[s-f]&255}return h},
b0I(d,e,f,g,h){var x,w,v,u,t,s,r,q=h+1
g.$flags&2&&B.A(g)
g[h]=2
x=d.length
for(w=f-1,v=e!=null,h=q,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,h=q){r=v?e[u+t]:0
q=h+1
g[h]=d[u+t]-r&255}return h},
b0z(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o=i+1
h.$flags&2&&B.A(h)
h[i]=3
x=d.length
for(w=f-1,v=e==null,i=o,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=o){r=u+t
q=r<g?0:d[r-g]
p=v?0:e[r]
o=i+1
h[i]=d[r]-(q+p>>>1)}return i},
beA(d,e,f){var x=d+e-f,w=x>d?x-d:d-x,v=x>e?x-e:e-x,u=x>f?x-f:f-x
if(w<=v&&w<=u)return d
else if(v<=u)return e
return f},
b0C(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m=i+1
h.$flags&2&&B.A(h)
h[i]=4
x=d.length
for(w=f-1,v=e==null,i=m,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=m){r=u+t
q=r<g
p=q?0:d[r-g]
o=v?0:e[r]
n=q||v?0:e[r-g]
m=i+1
h[i]=d[r]-this.beA(p,o,n)&255}return i}}
A.CU.prototype={
J(){return"PnmFormat."+this.b}}
A.IA.prototype={}
A.brG.prototype={
Id(d){var x
this.b=A.cP(d,!1,null,0)
x=this.TO()
if(x==="P1"||x==="P2"||x==="P5"||x==="P3"||x==="P6")return!0
return!1},
nv(d,e,f){if(this.ow(e)==null)return null
return this.k5(0)},
ow(d){var x,w,v=this
v.b=A.cP(d,!1,null,0)
x=v.TO()
if(x==="P1"){w=v.a=new A.IA(C.nk)
w.e=C.a1L}else if(x==="P2"){w=v.a=new A.IA(C.nk)
w.e=C.a1M}else if(x==="P5"){w=v.a=new A.IA(C.nk)
w.e=C.C_}else if(x==="P3"){w=v.a=new A.IA(C.nk)
w.e=C.a1N}else if(x==="P6"){w=v.a=new A.IA(C.nk)
w.e=C.C0}else return v.b=null
w.a=v.M4()
w=v.a
w.toString
w.b=v.M4()
w=v.a
if(w.a===0||w.b===0)return v.a=v.b=null
return w},
k5(d){var x,w,v,u,t,s=this,r=null,q=s.a
if(q==null)return r
x=q.e
if(x===C.a1L){x=q.a
w=A.hA(r,r,C.f8,0,C.bg,q.b,r,0,1,r,C.a6,x,!1)
for(q=w.a,q=q.ga1(q);q.q();){v=q.gL(q)
if(s.TO()==="1")v.kB(1,1,1)
else v.kB(0,0,0)}return w}else if(x===C.a1M||x===C.C_){u=s.M4()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.hA(r,r,s.azV(u),0,C.bg,q,r,0,1,r,C.a6,x,!1)
for(q=w.a,q=q.ga1(q);q.q();){v=q.gL(q)
t=s.V5(s.a.e,u)
v.kB(t,t,t)}return w}else if(x===C.a1N||x===C.C0){u=s.M4()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.hA(r,r,s.azV(u),0,C.bg,q,r,0,3,r,C.a6,x,!1)
for(q=w.a,q=q.ga1(q);q.q();)q.gL(q).kB(s.V5(s.a.e,u),s.V5(s.a.e,u),s.V5(s.a.e,u))
return w}return r},
azV(d){if(d>255)return C.cb
if(d>15)return C.a6
if(d>3)return C.fS
if(d>1)return C.fR
return C.f8},
V5(d,e){if(d===C.C_||d===C.C0)return this.b.df()
return this.M4()},
M4(){var x,w,v=this.TO()
if(J.bk(v)===0)return 0
try{x=B.dS(v,null)
return x}catch(w){return 0}},
TO(){var x,w,v,u,t=this.b
if(t==null)return""
x=this.c
if(x.length!==0)return D.b.ic(x,0)
w=D.e.d2(t.bHX())
if(w.length===0)return""
for(;D.e.bf(w,"#");)w=D.e.d2(this.b.aDO(70))
t=y.U
v=B.J(new B.ai(B.a(w.split(" "),y.s),new A.brH(),t),!0,t.h("v.E"))
for(t=v.length,u=0;u<t;++u)if(D.e.bf(v[u],"#")){D.b.su(v,u)
break}D.b.I(x,v)
if(x.length===0)return""
return D.b.ic(x,0)}}
A.a37.prototype={
bHW(d,e,f,g,h,i,j){switch(h){case 0:g.toString
this.bhC(d,e,f,g)
break
case 1:if(i==null)i=this.bhz(d,f)
g.toString
this.bhB(d,e,f,g,i,j)
break
default:throw B.f(A.c4("Unsupported compression: "+h))}},
bhz(d,e){var x,w=new Uint16Array(e)
for(x=0;x<e;++x)w[x]=d.bN()
return w},
bhC(d,e,f,g){var x,w=e*f
if(g===16)w*=2
if(w>d.c-d.d){x=new Uint8Array(w)
this.c=x
D.A.kW(x,0,w,255)
return}this.c=d.l2(w).hK()},
bhB(d,e,f,g,h,i){var x,w,v,u,t,s,r=e*f
if(g===16)r*=2
x=new Uint8Array(r)
this.c=x
w=i*f
if(w>=h.length){D.A.kW(x,0,r,255)
return}for(v=0,u=0;u<f;++u,w=t){t=w+1
s=d.jW(h[w])
d.d=d.d+(s.c-s.d)
this.aYQ(s,this.c,v)
v+=e}},
aYQ(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=e.$flags|0,v=e.length;u=d.d,u<x;){t=d.a
d.d=u+1
u=J.u(t,u)
t=$.oh()
t.$flags&2&&B.A(t)
t[0]=u
s=$.px()[0]
if(s<0){s=1-s
r=J.u(d.a,d.d++)
if(f+s>v)s=v-f
for(q=0;q<s;++q,f=p){p=f+1
w&2&&B.A(e)
e[f]=r}}else{++s
if(f+s>v)s=v-f
for(q=0;q<s;++q,f=p){p=f+1
u=J.u(d.a,d.d++)
w&2&&B.A(e)
e[f]=u}}}},
gbp(d){return this.a}}
A.u9.prototype={
J(){return"PsdColorMode."+this.b}}
A.bsC.prototype={
gaBG(){$===$&&B.b()
return $},
aSZ(d){var x,w,v=this
v.as=A.cP(d,!0,null,0)
v.bh7()
if(v.c!==943870035)return
x=v.as.an()
v.as.l2(x)
x=v.as.an()
v.as.l2(x)
x=v.as.an()
v.as.l2(x)
w=v.as
v.at=w.l2(w.c-w.d)},
o9(d){var x,w=this
if(w.c===943870035){x=w.as
x===$&&B.b()
x=x==null}else x=!0
if(x)return!1
w.bhA()
w.at=w.as=null
return!0},
ayy(){if(!this.o9(0))return null
return this.bIy()},
bIy(){var x,w=this,v=null,u=w.y
if(u!=null)return u
u=w.a
u=A.hA(v,v,C.a6,0,C.bg,w.b,v,0,4,v,C.a6,u,!1)
w.y=u
u.S(0)
for(x=0;u=w.gaBG(),D.c.JV(x,u.gu(u));++x)w.gaBG().i(0,x)
u=w.y
u.toString
return u},
bh7(){var x,w,v=this,u=v.as
u===$&&B.b()
v.c=u.an()
u=v.as.bN()
v.d=u
if(u!==1){v.c=0
return}x=v.as.l2(6)
for(w=0;w<6;++w)if(J.u(x.a,x.d+w)!==0){v.c=0
return}v.e=v.as.bN()
v.b=v.as.an()
v.a=v.as.an()
v.f=v.as.bN()
v.r=C.aCx[v.as.bN()]},
bhA(){var x,w,v,u,t,s,r=this,q=r.at
q===$&&B.b()
q.d=q.b
x=q.bN()
if(x===1){q=r.b
w=r.e
w===$&&B.b()
v=q*w
u=new Uint16Array(v)
for(t=0;t<v;++t)u[t]=r.at.bN()}else u=null
r.x=B.a([],y.Y)
t=0
while(!0){q=r.e
q===$&&B.b()
if(!(t<q))break
q=r.x
w=r.at
w.toString
s=t===3?-1:t
s=new A.a37(s)
s.bHW(w,r.a,r.b,r.f,x,u,t)
q.push(s);++t}r.y=A.cUy(r.r,r.f,r.a,r.b,r.x)}}
A.bsB.prototype={
nv(d,e,f){var x,w,v,u=null,t=A.cxk(e)
this.a=t
x=1
if(x===1){t=t.ayy()
return t}for(w=u,v=0;v<x;++v){t=this.a
f=t==null?u:t.ayy()
if(f==null)continue
if(w==null){f.w=C.akH
w=f}else w.nn(f)}return w}}
A.awy.prototype={}
A.yP.prototype={
aJ(d,e){return new A.yP(this.a*e,this.b*e,this.c*e)},
a7(d,e){return new A.yP(this.a+e.a,this.b+e.b,this.c+e.c)},
a4(d,e){return new A.yP(this.a-e.a,this.b-e.b,this.c-e.c)}}
A.lV.prototype={
aJ(d,e){var x=this
return new A.lV(x.a*e,x.b*e,x.c*e,x.d*e)},
a7(d,e){var x=this
return new A.lV(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
a4(d,e){var x=this
return new A.lV(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)}}
A.a3a.prototype={
gb4(d){return this.b}}
A.Qp.prototype={
gb4(d){return this.f}}
A.awx.prototype={
gb4(d){return this.b}}
A.rq.prototype={
sNt(d){var x=this.a,w=this.b
x.$flags&2&&B.A(x)
x[w+1]=d},
QU(){var x=this.e,w=this.d
if(x)return new A.yP(C.fn[w>>>9],C.fn[w>>>4&31],C.eu[w&15])
else return new A.yP(C.eu[w>>>7&15],C.eu[w>>>3&15],C.vb[w&7])},
QW(){var x=this.e,w=this.d
if(x)return new A.lV(C.fn[w>>>9],C.fn[w>>>4&31],C.eu[w&15],255)
else return new A.lV(C.eu[w>>>7&15],C.eu[w>>>3&15],C.vb[w&7],C.vb[w>>>11&7])},
QV(){var x=this.r,w=this.f
if(x)return new A.yP(C.fn[w>>>10],C.fn[w>>>5&31],C.fn[w&31])
else return new A.yP(C.eu[w>>>8&15],C.eu[w>>>4&15],C.eu[w&15])},
QX(){var x=this.r,w=this.f
if(x)return new A.lV(C.fn[w>>>10],C.fn[w>>>5&31],C.fn[w&31],255)
else return new A.lV(C.eu[w>>>8&15],C.eu[w>>>4&15],C.eu[w&15],C.vb[w>>>12&7])},
Lm(){var x=this,w=x.c?1:0,v=x.d,u=x.e?1:0,t=x.f,s=x.r?1:0
return(w|(v&16383)<<1|u<<15|(t&32767)<<16|s<<31)>>>0},
uv(d){var x=this,w=x.a[x.b+1]
x.c=(w&1)===1
x.sNt(x.Lm())
x.d=w>>>1&16383
x.sNt(x.Lm())
x.e=(w>>>15&1)===1
x.sNt(x.Lm())
x.f=w>>>16&32767
x.sNt(x.Lm())
x.r=(w>>>31&1)===1
x.sNt(x.Lm())}}
A.bsD.prototype={
ow(d){var x,w=this,v=d.length,u=v-(v>>>1&1431655765)>>>0
u=(u&858993459)+(u>>>2&858993459)
if((u+(u>>>4)>>>0&252645135)*16843009>>>0>>>24===1){x=w.aYz(d)
if(x!=null){w.a=d
return w.b=x}}x=w.aYP(d)
if(x!=null){w.a=d
return w.b=x}x=w.aYN(d)
if(x!=null){w.a=d
return w.b=x}return null},
aYP(d){var x,w,v=A.cP(d,!1,null,0)
if(v.an()!==52)return null
if(v.an()!==55727696)return null
x=B.a([0,0,0,0],y.t)
w=new A.Qp(x)
v.an()
w.b=v.an()
x[0]=v.df()
x[1]=v.df()
x[2]=v.df()
x[3]=v.df()
v.an()
v.an()
w.f=v.an()
w.r=v.an()
v.an()
v.an()
v.an()
v.an()
w.Q=v.an()
return w},
aYN(d){var x,w,v=A.cP(d,!1,null,0)
if(v.an()!==52)return null
x=new A.a3a()
x.b=v.an()
x.a=v.an()
v.an()
x.d=v.an()
v.an()
x.f=v.an()
v.an()
v.an()
v.an()
x.y=v.an()
w=v.an()
x.z=w
x.Q=v.an()
if(w!==559044176)return null
return x},
aYz(d){var x,w,v,u,t,s,r=null,q=d.length,p=A.cP(d,!1,r,0)
if(p.an()!==0)return r
x=new A.awx()
x.b=p.an()
x.a=p.an()
p.an()
p.an()
p.an()
p.an()
p.an()
p.an()
p.an()
w=p.an()
x.y=w
if(w===559044176)return r
v=0
u=8
if(!(q===32)){t=0
while(!0){if(!(t<10)){v=1
break}s=t<<1>>>0
if((D.c.eq(64,s)&q)>>>0!==0){u=D.c.eq(16,t)
v=1
break}if((D.c.eq(128,s)&q)>>>0!==0){u=D.c.eq(16,t)
break}++t}if(t===10)return r}if((v+1)*2===4)return r
x.b=x.a=u
return x},
k5(d){var x,w,v=this,u=v.b
if(u==null||v.a==null)return null
if(u instanceof A.awx){u=u.a
x=v.b
x=x.gb4(x)
w=v.a
w.toString
return v.a3l(u,x,w)}else if(u instanceof A.a3a){u=v.a
u.toString
return v.aYM(u)}else if(u instanceof A.Qp){u=v.a
u.toString
return v.aYO(u)}return null},
nv(d,e,f){if(this.ow(e)==null)return null
return this.k5(0)},
aYM(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.length
if(j<52||l.b==null)return k
x=l.b
x.toString
y.ab.a(x)
w=A.cP(d,!1,k,0)
w.d+=52
v=x.Q
if(v<1)v=(x.d&4096)!==0?6:1
if(v!==1)return k
u=x.a
t=x.b
if(u*t*x.f/8>j-52)return k
switch(x.d&255){case 16:s=A.hA(k,k,C.a6,0,C.bg,t,k,0,4,k,C.a6,u,!1)
for(x=s.a,x=x.ga1(x);x.q();){r=x.gL(x)
q=J.u(w.a,w.d++)
p=J.u(w.a,w.d++)
r.saw(0,p&240)
r.saK((p&15)<<4)
r.saL(0,q&240)
r.saP(0,(q&15)<<4)}return s
case 17:s=A.hA(k,k,C.a6,0,C.bg,t,k,0,4,k,C.a6,u,!1)
for(x=s.a,x=x.ga1(x);x.q();){r=x.gL(x)
o=w.bN()
n=(o&1)!==0?255:0
r.saw(0,o>>>8&248)
r.saK(o>>>3&248)
r.saL(0,(o&62)<<2)
r.saP(0,n)}return s
case 18:s=A.hA(k,k,C.a6,0,C.bg,t,k,0,4,k,C.a6,u,!1)
for(x=s.a,x=x.ga1(x);x.q();){r=x.gL(x)
r.saw(0,J.u(w.a,w.d++))
r.saK(J.u(w.a,w.d++))
r.saL(0,J.u(w.a,w.d++))
r.saP(0,J.u(w.a,w.d++))}return s
case 19:s=A.hA(k,k,C.a6,0,C.bg,t,k,0,3,k,C.a6,u,!1)
for(x=s.a,x=x.ga1(x);x.q();){r=x.gL(x)
o=w.bN()
r.saw(0,o>>>8&248)
r.saK(o>>>3&252)
r.saL(0,(o&31)<<3)}return s
case 20:s=A.hA(k,k,C.a6,0,C.bg,t,k,0,3,k,C.a6,u,!1)
for(x=s.a,x=x.ga1(x);x.q();){r=x.gL(x)
o=w.bN()
r.saw(0,(o&31)<<3)
r.saK(o>>>2&248)
r.saL(0,o>>>7&248)}return s
case 21:s=A.hA(k,k,C.a6,0,C.bg,t,k,0,3,k,C.a6,u,!1)
for(x=s.a,x=x.ga1(x);x.q();){r=x.gL(x)
r.saw(0,J.u(w.a,w.d++))
r.saK(J.u(w.a,w.d++))
r.saL(0,J.u(w.a,w.d++))}return s
case 22:s=A.hA(k,k,C.a6,0,C.bg,t,k,0,1,k,C.a6,u,!1)
for(x=s.a,x=x.ga1(x);x.q();)x.gL(x).saw(0,J.u(w.a,w.d++))
return s
case 23:s=A.hA(k,k,C.a6,0,C.bg,t,k,0,4,k,C.a6,u,!1)
for(x=s.a,x=x.ga1(x);x.q();){r=x.gL(x)
n=J.u(w.a,w.d++)
m=J.u(w.a,w.d++)
r.saw(0,m)
r.saK(m)
r.saL(0,m)
r.saP(0,n)}return s
case 24:return k
case 25:return x.y===0?l.aks(u,t,w.hK()):l.a3l(u,t,w.hK())}return k},
aYO(d){var x,w,v,u=this
if(!(u.b instanceof A.Qp))return null
x=A.cP(d,!1,null,0)
w=x.d+=52
v=y.aM.a(u.b)
x.d=w+v.Q
if(v.c[0]===0)switch(v.b){case 2:return u.aks(v.r,v.f,x.hK())
case 3:return u.a3l(v.r,v.f,x.hK())}return null},
aks(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=A.hA(b5,b5,C.a6,0,C.bg,c6,b5,0,3,b5,C.a6,c5,!1),b7=c5/4|0,b8=b7-1,b9=J.oi(D.A.gag(c7),0,null),c0=new A.rq(b9),c1=new A.rq(J.oi(D.A.gag(c7),0,null)),c2=new A.rq(J.oi(D.A.gag(c7),0,null)),c3=new A.rq(J.oi(D.A.gag(c7),0,null)),c4=new A.rq(J.oi(D.A.gag(c7),0,null))
for(x=0,w=0;x<b7;++x,w+=4)for(v=0,u=0;v<b7;++v,u+=4){c0.b=A.yQ(v,x)<<1>>>0
c0.uv(0)
t=b9[c0.b]
s=c0.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&b8)>>>0
o=(p+1&b8)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&b8)>>>0
k=(l+1&b8)>>>0
c1.b=A.yQ(l,p)<<1>>>0
c1.uv(0)
c2.b=A.yQ(k,p)<<1>>>0
c2.uv(0)
c3.b=A.yQ(l,o)<<1>>>0
c3.uv(0)
c4.b=A.yQ(k,o)<<1>>>0
c4.uv(0)
j=c1.QU()
i=C.d2[r][0]
h=c2.QU()
g=C.d2[r][1]
f=c3.QU()
e=C.d2[r][2]
d=c4.QU()
a0=C.d2[r][3]
a1=c1.QV()
a2=C.d2[r][0]
a3=c2.QV()
a4=C.d2[r][1]
a5=c3.QV()
a6=C.d2[r][2]
a7=c4.QV()
a8=C.d2[r][3]
a9=C.OI[s+t&3]
b0=a9[0]
b1=a9[1]
b2=D.c.P((j.a*i+h.a*g+f.a*e+d.a*a0)*b0+(a1.a*a2+a3.a*a4+a5.a*a6+a7.a*a8)*b1,7)
b3=D.c.P((j.b*i+h.b*g+f.b*e+d.b*a0)*b0+(a1.b*a2+a3.b*a4+a5.b*a6+a7.b*a8)*b1,7)
b4=D.c.P((j.c*i+h.c*g+f.c*e+d.c*a0)*b0+(a1.c*a2+a3.c*a4+a5.c*a6+a7.c*a8)*b1,7)
b1=b6.a
if(b1!=null)b1.fd(m+u,n,b2,b3,b4)
t=t>>>2;++r}}}return b6},
a3l(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=A.hA(a4,a4,C.a6,0,C.bg,b5,a4,0,4,a4,C.a6,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.oi(D.A.gag(b6),0,null),a9=new A.rq(a8),b0=new A.rq(J.oi(D.A.gag(b6),0,null)),b1=new A.rq(J.oi(D.A.gag(b6),0,null)),b2=new A.rq(J.oi(D.A.gag(b6),0,null)),b3=new A.rq(J.oi(D.A.gag(b6),0,null))
for(x=0,w=0;x<a6;++x,w+=4)for(v=0,u=0;v<a6;++v,u+=4){a9.b=A.yQ(v,x)<<1>>>0
a9.uv(0)
t=a8[a9.b]
s=a9.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&a7)>>>0
o=(p+1&a7)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&a7)>>>0
k=(l+1&a7)>>>0
b0.b=A.yQ(l,p)<<1>>>0
b0.uv(0)
b1.b=A.yQ(k,p)<<1>>>0
b1.uv(0)
b2.b=A.yQ(l,o)<<1>>>0
b2.uv(0)
b3.b=A.yQ(k,o)<<1>>>0
b3.uv(0)
j=b0.QW()
i=C.d2[r][0]
h=b1.QW()
g=C.d2[r][1]
g=new A.lV(j.a*i,j.b*i,j.c*i,j.d*i).a7(0,new A.lV(h.a*g,h.b*g,h.c*g,h.d*g))
h=b2.QW()
i=C.d2[r][2]
i=g.a7(0,new A.lV(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.QW()
g=C.d2[r][3]
f=i.a7(0,new A.lV(h.a*g,h.b*g,h.c*g,h.d*g))
g=b0.QX()
h=C.d2[r][0]
i=b1.QX()
j=C.d2[r][1]
j=new A.lV(g.a*h,g.b*h,g.c*h,g.d*h).a7(0,new A.lV(i.a*j,i.b*j,i.c*j,i.d*j))
i=b2.QX()
h=C.d2[r][2]
h=j.a7(0,new A.lV(i.a*h,i.b*h,i.c*h,i.d*h))
i=b3.QX()
j=C.d2[r][3]
e=h.a7(0,new A.lV(i.a*j,i.b*j,i.c*j,i.d*j))
d=C.OI[s+t&3]
j=d[0]
i=d[1]
a0=D.c.P(f.a*j+e.a*i,7)
a1=D.c.P(f.b*j+e.b*i,7)
a2=D.c.P(f.c*j+e.c*i,7)
a3=D.c.P(f.d*d[2]+e.d*d[3],7)
i=a5.a
if(i!=null)i.kA(m+u,n,a0,a1,a2,a3)
t=t>>>2;++r}}}return a5}}
A.aAP.prototype={
qe(d,e){var x,w=this
if(e.c-e.d<18)return
w.a=e.df()
w.b=e.df()
x=e.df()
w.c=x<12?C.awQ[x]:C.wx
e.bN()
w.e=e.bN()
w.f=e.df()
e.bN()
e.bN()
w.x=e.bN()
w.y=e.bN()
w.z=e.df()
w.Q=e.df()},
aBv(){var x=this,w=x.z
if(w!==8&&w!==16&&w!==24&&w!==32)return!1
w=x.c
if(w===C.iu||w===C.iv){if(x.e>256||x.b!==1)return!1
w=x.f
if(w!==16&&w!==24&&w!==32)return!1}else if(x.b===1)return!1
return!0}}
A.o_.prototype={
J(){return"TgaImageType."+this.b}}
A.bE_.prototype={
nv(d,e,f){if(this.ow(e)==null)return null
return this.k5(0)},
ow(d){var x,w,v,u,t=this
t.a=new A.aAP(C.wx)
x=A.cP(d,!1,null,0)
t.b=x
w=x.l2(18)
t.a.qe(0,w)
if(!t.a.aBv())return null
x=t.b
v=t.a
x.d+=v.a
u=v.c
if(u===C.iu||u===C.iv)v.as=x.l2(v.e*D.c.P(v.f,3)).hK()
x=t.a
x.ax=t.b.d
return x},
k5(d){var x=this,w=x.a
if(w==null)return null
w=w.c
if(w===C.a4B)return x.akr()
else if(w===C.a4A||w===C.iv)return x.aYS()
else if(w===C.iu)return x.akr()
return null},
akm(d,e){var x,w,v,u,t,s,r,q=this,p=A.cP(d,!1,null,0),o=q.a.f
if(o===16){o=q.b
o===$&&B.b()
x=o.bN()
w=x>>>7&248
v=x>>>2&248
u=(x&31)<<3
t=(x&32768)!==0?0:255
for(s=0;s<q.a.e;++s){e.ug(s,w)
e.ue(s,v)
e.ud(s,u)
e.uc(s,t)}}else{r=o===32
for(s=0;s<q.a.e;++s){u=J.u(p.a,p.d++)
v=J.u(p.a,p.d++)
w=J.u(p.a,p.d++)
t=r?J.u(p.a,p.d++):255
e.ug(s,w)
e.ue(s,v)
e.ud(s,u)
e.uc(s,t)}}},
aYS(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=h.z,f=g===16,e=f||g===32,d=h.x,a0=h.y,a1=e?4:3
h=h.c
x=A.hA(i,i,C.a6,0,C.bg,a0,i,0,a1,i,C.a6,d,h===C.iu||h===C.iv)
h=x.a
if((h==null?i:h.geS())!=null){h=j.a.as
h.toString
d=x.a
d=d==null?i:d.geS()
d.toString
j.akm(h,d)}w=x.gcX(0)
v=x.gb4(0)-1
h=g===8
u=0
while(!0){d=j.b
d===$&&B.b()
a0=d.d
if(!(a0<d.c&&v>=0))break
a1=d.a
d.d=a0+1
t=J.u(a1,a0)
s=(t&127)+1
r=0
if((t&128)!==0)if(h){d=j.b
q=J.u(d.a,d.d++)
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.mz(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}else{d=j.b
if(f){n=d.bN()
q=n>>>7&248
m=n>>>2&248
l=(n&31)<<3
k=(n&32768)!==0?0:255
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.kA(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}else{l=J.u(d.a,d.d++)
d=j.b
m=J.u(d.a,d.d++)
d=j.b
q=J.u(d.a,d.d++)
if(e){d=j.b
k=J.u(d.a,d.d++)}else k=255
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.kA(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}}else if(h)for(p=0;p<s;++p){d=j.b
q=J.u(d.a,d.d++)
o=u+1
d=x.a
if(d!=null)d.mz(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}else if(f)for(p=0;p<s;++p){n=j.b.bN()
k=(n&32768)!==0?0:255
o=u+1
d=x.a
if(d!=null)d.kA(u,v,n>>>7&248,n>>>2&248,(n&31)<<3,k)
d=j.b
if(d.d>=d.c){u=o
break}if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}else for(p=0;p<s;++p){d=j.b
l=J.u(d.a,d.d++)
d=j.b
m=J.u(d.a,d.d++)
d=j.b
q=J.u(d.a,d.d++)
if(e){d=j.b
k=J.u(d.a,d.d++)}else k=255
o=u+1
d=x.a
if(d!=null)d.kA(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}if(u>=w){--v
if(v<0)break
u=0}}return x},
akr(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
g===$&&B.b()
x=i.a
g.d=x.ax
w=x.z
g=w===16
v=!0
if(!g)if(w!==32){u=x.c
if(u===C.iu||u===C.iv){u=x.f
u=u===16||u===32}else u=!1
v=u}u=x.x
t=x.y
s=v?4:3
x=x.c
r=A.hA(h,h,C.a6,0,C.bg,t,h,0,s,h,C.a6,u,x===C.iu||x===C.iv)
x=i.a
u=x.c
if(u===C.iu||u===C.iv){x=x.as
x.toString
u=r.a
u=u==null?h:u.geS()
u.toString
i.akm(x,u)}if(w===8)for(q=r.gb4(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
g=i.b
o=J.u(g.a,g.d++)
g=r.a
if(g!=null)g.mz(p,q,o);++p}}else if(g)for(q=r.gb4(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
n=i.b.bN()
m=(n&32768)!==0?0:255
g=r.a
if(g!=null)g.kA(p,q,n>>>7&248,n>>>2&248,(n&31)<<3,m);++p}}else for(q=r.gb4(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
g=i.b
l=J.u(g.a,g.d++)
g=i.b
k=J.u(g.a,g.d++)
g=i.b
j=J.u(g.a,g.d++)
if(v){g=i.b
m=J.u(g.a,g.d++)}else m=255
g=r.a
if(g!=null)g.kA(p,q,j,k,l,m);++p}}return r}}
A.bEm.prototype={
j8(d){var x,w,v,u,t=this
if(d===0)return 0
if(t.c===0){t.c=8
t.b=t.a.df()}for(x=t.a,w=0;v=t.c,d>v;){w=D.c.eP(w,v)+(t.b&C.mW[v])
d-=v
t.c=8
t.b=J.u(x.a,x.d++)}if(d>0){if(v===0){t.c=8
t.b=x.df()}x=D.c.eP(w,d)
v=t.b
u=t.c-d
w=x+(D.c.nW(v,u)&C.mW[d])
t.c=u}return w}}
A.aAU.prototype={
j(d){var x=this,w=x.a,v=$.cj2().i(0,w)
if(v!=null)return v.a+": "+x.b.j(0)+" "+x.c
return"<"+w+">: "+x.b.j(0)+" "+x.c},
p7(d){var x,w,v,u=this,t=u.e
if(t!=null)return t
t=u.f
t.d=u.d
x=u.c
w=u.b
v=t.l2(x*(w!==C.W?C.jc[w.a]:0))
switch(w.a){case 1:return u.e=new A.tL(new Uint8Array(B.bU(v.l2(x).hK())))
case 2:return u.e=new A.Bx(x===0?"":v.qf(x-1))
case 7:return u.e=new A.tL(new Uint8Array(B.bU(v.l2(x).hK())))
case 3:return u.e=A.cuR(v,x)
case 4:return u.e=A.cuM(v,x)
case 5:return u.e=A.cuN(v,x)
case 11:return u.e=A.cuT(v,x)
case 12:return u.e=A.cuL(v,x)
case 6:return u.e=new A.vI(new Int8Array(B.bU(J.cja(D.A.gag(v.hK()),0,x))))
case 8:return u.e=A.cuQ(v,x)
case 9:return u.e=A.cuO(v,x)
case 10:return u.e=A.cuP(v,x)
case 0:return null}},
gp(d){return this.e}}
A.bEo.prototype={
bvJ(d,e,f,g){var x,w,v,u=this
u.r=e
u.x=u.w=0
x=D.c.b7(u.a+7,8)
for(w=0,v=0;v<g;++v){u.a3j(d,w,f)
w+=x}},
a3j(d,e,f){var x,w,v,u,t,s,r,q,p=this
p.d=0
for(x=p.a,w=!0;f<x;){for(;w;){v=p.yF(10)
u=C.P9[v]
t=D.c.P(u,1)&15
if(t===12){u=C.tL[(v<<2&12|p.oB(2))>>>0]
s=D.c.P(u,1)
f+=D.c.P(u,4)&4095
p.lr(4-(s&7))}else if(t===0)throw B.f(A.c4("TIFFFaxDecoder0"))
else if(t===15)throw B.f(A.c4("TIFFFaxDecoder1"))
else{f+=D.c.P(u,5)&2047
p.lr(10-t)
if((u&1)===0){p.f[p.d++]=f
w=!1}}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}for(;!w;){u=C.Kg[p.oB(4)]
r=u>>>5&2047
q=!0
if(r===100){u=C.LN[p.yF(9)]
t=D.c.P(u,1)&15
r=D.c.P(u,5)&2047
if(t===12){p.lr(5)
u=C.tL[p.oB(4)]
s=D.c.P(u,1)
r=D.c.P(u,4)&4095
p.pA(d,e,f,r)
f+=r
p.lr(4-(s&7))}else if(t===15)throw B.f(A.c4("TIFFFaxDecoder2"))
else{p.pA(d,e,f,r)
f+=r
p.lr(9-t)
if((u&1)===0){p.f[p.d++]=f
w=q}}}else{if(r===200){u=C.Kb[p.oB(2)]
r=u>>>5&2047
p.pA(d,e,f,r)
f+=r
p.lr(2-(u>>>1&15))
p.f[p.d++]=f}else{p.pA(d,e,f,r)
f+=r
p.lr(4-(u>>>1&15))
p.f[p.d++]=f}w=q}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}}p.f[p.d++]=f},
bvK(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.r=a0
e.z=3
e.x=e.w=0
x=e.a
w=D.c.b7(x+7,8)
v=B.bI(2,null,!1,y.u)
e.at=a3&1
e.as=a3>>>2&1
if(e.aqy()!==1)throw B.f(A.c4("TIFFFaxDecoder3"))
e.a3j(d,0,a1)
for(u=w,t=1;t<a2;++t){if(e.aqy()===0){s=e.e
e.e=e.f
e.f=s
e.y=0
r=a1
q=-1
p=!0
o=0
while(!0){r.toString
if(!(r<x))break
e.amo(q,p,v)
n=v[0]
m=v[1]
l=C.OQ[e.oB(7)]&255
k=l>>>3&15
j=l&7
if(k===0){if(!p){m.toString
e.pA(d,u,r,m-r)}e.lr(7-j)
r=m
q=r}else if(k===1){e.lr(7-j)
i=o+1
h=i+1
if(p){r+=e.T6()
e.f[o]=r
g=e.T5()
e.pA(d,u,r,g)
r+=g
e.f[i]=r}else{g=e.T5()
e.pA(d,u,r,g)
r+=g
e.f[o]=r
r+=e.T6()
e.f[i]=r}o=h
q=r}else{if(k<=8){n.toString
f=n+(k-5)
i=o+1
e.f[o]=f
p=!p
if(p)e.pA(d,u,r,f-r)
e.lr(7-j)}else throw B.f(A.c4("TIFFFaxDecoder4"))
r=f
o=i
q=r}}e.f[o]=r
e.d=o+1}else e.a3j(d,u,a1)
u+=w}},
bvP(a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.r=a4
a2.z=4
a2.x=a2.w=0
x=a2.a
w=D.c.b7(x+7,8)
v=B.bI(2,null,!1,y.u)
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
a2.amo(p,o,v)
m=v[0]
l=v[1]
k=C.OQ[a2.oB(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
a2.pA(a3,t,q,l-q)}a2.lr(7-i)
q=l
p=q}else if(j===1){a2.lr(7-i)
h=n+1
g=h+1
if(o){q+=a2.T6()
r[n]=q
f=a2.T5()
a2.pA(a3,t,q,f)
q+=f
r[h]=q}else{f=a2.T5()
a2.pA(a3,t,q,f)
q+=f
r[n]=q
q+=a2.T6()
r[h]=q}n=g
p=q}else if(j<=8){m.toString
e=m+(j-5)
h=n+1
r[n]=e
o=!o
if(o)a2.pA(a3,t,q,e-q)
a2.lr(7-i)
q=e
n=h
p=q}else if(j===11){if(a2.oB(3)!==7)throw B.f(A.c4("TIFFFaxDecoder5"))
for(d=0,a0=!1;!a0;o=a1){for(;a2.oB(1)!==1;)++d
if(d>5){d-=6
if(!o&&d>0){h=n+1
r[n]=q
n=h}q+=d
if(d>0)o=!0
a1=a2.oB(1)===0
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
a2.pA(a3,t,q,1);++q
n=h}}}else throw B.f(A.c4("TIFFFaxDecoder5 "+j))}r[n]=q
a2.d=n+1
t+=w}},
T6(){var x,w,v,u,t,s,r=this
for(x=0,w=!0;w;){v=r.yF(10)
u=C.P9[v]
t=D.c.P(u,1)&15
if(t===12){u=C.tL[(v<<2&12|r.oB(2))>>>0]
s=D.c.P(u,1)
x+=D.c.P(u,4)&4095
r.lr(4-(s&7))}else if(t===0)throw B.f(A.c4("TIFFFaxDecoder0"))
else if(t===15)throw B.f(A.c4("TIFFFaxDecoder1"))
else{x+=D.c.P(u,5)&2047
r.lr(10-t)
if((u&1)===0)w=!1}}return x},
T5(){var x,w,v,u,t,s,r=this
for(x=0,w=!1;!w;){v=C.Kg[r.oB(4)]
u=v>>>5&2047
if(u===100){v=C.LN[r.yF(9)]
t=D.c.P(v,1)&15
s=D.c.P(v,5)
if(t===12){r.lr(5)
v=C.tL[r.oB(4)]
s=D.c.P(v,1)
x+=D.c.P(v,4)&4095
r.lr(4-(s&7))}else if(t===15)throw B.f(A.c4("TIFFFaxDecoder2"))
else{x+=s&2047
r.lr(9-t)
if((v&1)===0)w=!0}}else{if(u===200){v=C.Kb[r.oB(2)]
x+=v>>>5&2047
r.lr(2-(v>>>1&15))}else{x+=u
r.lr(4-(v>>>1&15))}w=!0}}return x},
aqy(){var x,w,v=this,u="TIFFFaxDecoder8",t=v.as
if(t===0){if(v.yF(12)!==1)throw B.f(A.c4("TIFFFaxDecoder6"))}else if(t===1){t=v.w
t.toString
x=8-t
if(v.yF(x)!==0)throw B.f(A.c4(u))
if(x<4)if(v.yF(8)!==0)throw B.f(A.c4(u))
for(;w=v.yF(8),w!==1;)if(w!==0)throw B.f(A.c4(u))}if(v.at===0)return 1
else return v.oB(1)},
amo(d,e,f){var x,w=this,v=w.e,u=w.d,t=w.y,s=t>0?t-1:0
s=e?(s&4294967294)>>>0:(s|1)>>>0
for(x=s;x<u;x+=2){t=v[x]
t.toString
d.toString
if(t>d){w.y=x
f[0]=t
break}}t=x+1
if(t<u)f[1]=v[t]},
pA(d,e,f,g){var x,w,v,u,t,s=8*e+f,r=s+g,q=D.c.P(s,3),p=s&7
if(p>0){x=D.c.eP(1,7-p)
w=J.u(d.a,d.d+q)
while(!0){if(!(x>0&&s<r))break
w=(w|x)>>>0
x=x>>>1;++s}d.m(0,q,w)}q=D.c.P(s,3)
for(v=r-7;s<v;q=u){u=q+1
J.bP(d.a,d.d+q,255)
s+=8}for(;s<r;){q=D.c.P(s,3)
v=J.u(d.a,d.d+q)
t=D.c.eP(1,7-(s&7))
J.bP(d.a,d.d+q,(v|t)>>>0);++s}},
yF(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.r
j===$&&B.b()
x=j.d
w=j.c-x-1
v=k.x
u=k.c
t=0
s=0
if(u===1){v.toString
r=J.u(j.a,x+v)
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=J.u(u,x+j)
else{t=J.u(u,x+j)
j=k.r
s=J.u(j.a,j.d+(v+2))}}}else if(u===2){v.toString
r=C.l_[J.u(j.a,x+v)&255]
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=C.l_[J.u(u,x+j)&255]
else{t=C.l_[J.u(u,x+j)&255]
j=k.r
s=C.l_[J.u(j.a,j.d+(v+2))&255]}}}else throw B.f(A.c4("TIFFFaxDecoder7"))
j=k.w
j.toString
q=8-j
p=d-q
if(p>8){o=p-8
n=8}else{n=p
o=0}j=k.x
j.toString
j=k.x=j+1
m=D.c.eP(r&C.mW[q],p)
l=D.c.fX(t&C.B0[n],8-n)
if(o!==0){l=D.c.eP(l,o)|D.c.fX(s&C.B0[o],8-o)
k.x=j+1
k.w=o}else if(n===8){k.w=0
k.x=j+1}else k.w=n
return(m|l)>>>0},
oB(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.r
m===$&&B.b()
x=m.d
w=m.c-x-1
v=n.x
u=n.c
t=0
if(u===1){v.toString
s=J.u(m.a,x+v)
if(!(v===w)){m=n.r
t=J.u(m.a,m.d+(v+1))}}else if(u===2){v.toString
s=C.l_[J.u(m.a,x+v)&255]
if(!(v===w)){m=n.r
t=C.l_[J.u(m.a,m.d+(v+1))&255]}}else throw B.f(A.c4("TIFFFaxDecoder7"))
m=n.w
m.toString
r=8-m
q=d-r
p=r-d
if(p>=0){o=D.c.fX(s&C.mW[r],p)
m+=d
n.w=m
if(m===8){n.w=0
m=n.x
m.toString
n.x=m+1}}else{o=(D.c.eP(s&C.mW[r],-p)|D.c.fX(t&C.B0[q],8-q))>>>0
m=n.x
m.toString
n.x=m+1
n.w=q}return o},
lr(d){var x,w=this,v=w.w
v.toString
x=v-d
if(x<0){v=w.x
v.toString
w.x=v-1
w.w=8+x}else w.w=x}}
A.aAV.prototype={
aTc(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.c8(d,g,0),e=d.bN()
for(x=h.a,w=0;w<e;++w){v=d.bN()
u=d.bN()
t=C.MT[u]
s=C.jc[u]
r=d.an()
if(r*s>4)q=d.an()
else{q=d.d
d.d=q+4}p=new A.aAU(v,t,r,q,f)
x.m(0,v,p)
if(v===256){o=p.p7(0)
o=o==null?g:o.D(0)
h.b=o==null?0:o}else if(v===257){o=p.p7(0)
o=o==null?g:o.D(0)
h.c=o==null?0:o}else if(v===262){n=p.p7(0)
m=n==null?g:n.D(0)
if(m==null)m=17
if(m<17)h.d=C.ave[m]
else h.d=C.DH}else if(v===259){o=p.p7(0)
o=o==null?g:o.D(0)
h.e=o==null?0:o}else if(v===258){o=p.p7(0)
o=o==null?g:o.D(0)
h.f=o==null?0:o}else if(v===277){o=p.p7(0)
o=o==null?g:o.D(0)
h.r=o==null?0:o}else if(v===317){o=p.p7(0)
o=o==null?g:o.D(0)
h.z=o==null?0:o}else if(v===339){o=p.p7(0)
n=o==null?g:o.D(0)
h.w=C.avL[n==null?0:n]}else if(v===320){n=p.p7(0)
if(n!=null){o=J.cK4(D.A.gag(n.u_()))
h.go=o
h.id=0
o=o.length/3|0
h.k1=o
h.k2=o*2}}}l=h.go
o=l!=null
if(o&&h.d===C.DI)h.r=1
if(h.b===0||h.c===0)return
if(o&&h.f===8){k=l.length
for(o=l.$flags|0,w=0;w<k;++w){j=l[w]
o&2&&B.A(l)
l[w]=j>>>8}}if(h.d===C.DG)h.y=!0
if(x.a3(0,324)){h.ax=h.FU(322)
h.ay=h.FU(323)
h.ch=h.V4(324)
h.CW=h.V4(325)}else{h.ax=h.V3(322,h.b)
if(!x.a3(0,278))h.ay=h.V3(323,h.c)
else{i=h.FU(278)
if(i===-1)h.ay=h.c
else h.ay=i}h.ch=h.V4(273)
h.CW=h.V4(279)}o=h.b
j=h.ax
h.cx=D.c.hu(o+j-1,j)
j=h.c
o=h.ay
h.cy=D.c.hu(j+o-1,o)
h.dx=h.V3(266,1)
h.dy=h.FU(292)
h.fr=h.FU(293)
h.FU(338)
switch(h.d.a){case 0:case 1:x=h.f
if(x===1&&h.r===1)h.x=C.DF
else if(x===4&&h.r===1)h.x=C.b4X
else if(D.c.ap(x,8)===0){x=h.r
if(x===1)h.x=C.b4Y
else if(x===2)h.x=C.b4Z
else h.x=C.wA}break
case 2:if(D.c.ap(h.f,8)===0){x=h.r
if(x===3)h.x=C.a4D
else if(x===4)h.x=C.b50
else h.x=C.wA}break
case 3:x=!1
if(h.r===1)if(h.go!=null){x=h.f
x=x===4||x===8||x===16}if(x)h.x=C.b5_
break
case 4:if(h.f===1&&h.r===1)h.x=C.DF
break
case 6:if(h.e===7&&h.f===8&&h.r===3)h.x=C.a4D
else{if(x.a3(0,530)){n=x.i(0,530).p7(0)
h.Q=n.D(0)
x=h.as=n.ja(0,1)}else x=h.as=h.Q=2
o=h.Q
o===$&&B.b()
if(o*x===1)h.x=C.wA
else if(h.f===8&&h.r===3)h.x=C.b51}break
default:if(D.c.ap(h.f,8)===0)h.x=C.wA
break}},
dj(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.w,d=e===C.nN,a0=e===C.ba
e=g.f
if(e===1)x=C.f8
else if(e===2)x=C.fR
else{if(e===4)e=C.fS
else if(d&&e===16)e=C.hA
else if(d&&e===32)e=C.j_
else if(d&&e===64)e=C.kr
else if(a0&&e===8)e=C.ks
else if(a0&&e===16)e=C.kt
else if(a0&&e===32)e=C.ku
else if(e===16)e=C.cb
else e=e===32?C.j0:C.a6
x=e}w=g.go!=null&&g.d===C.DI
v=w?3:g.r
e=g.b
u=A.hA(f,f,x,0,C.bg,g.c,f,0,v,f,x,e,w)
if(w){e=u.a
e=e==null?f:e.geS()
e.toString
t=g.go
s=t.length
r=s/3|0
q=g.id
q===$&&B.b()
p=g.k1
p===$&&B.b()
o=g.k2
o===$&&B.b()
for(n=o,m=p,l=q,k=0;k<r;++k,++l,++m,++n){if(n>=s)break
e.ph(k,t[l],t[m],t[n])}}j=0
i=0
while(!0){e=g.cy
e===$&&B.b()
if(!(j<e))break
h=0
while(!0){e=g.cx
e===$&&B.b()
if(!(h<e))break
g.aYT(a2,u,h,j);++h;++i}++j}return u},
aYT(b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null
if(a8.x===C.DF){a8.aYC(b0,b1,b2,b3)
return}u=a8.cx
u===$&&B.b()
t=b3*u+b2
b0.d=a8.ch[t]
u=a8.ax
s=b2*u
r=a8.ay
q=b3*r
x=a8.CW[t]
p=u*r*a8.r
u=a8.f
r=u===16
if(r)p*=2
else if(u===32)p*=4
w=null
if(u===8||r||u===32||u===64){u=a8.e
if(u===1)w=b0
else if(u===5){w=A.cP(new Uint8Array(p),!1,a9,0)
v=A.cvJ()
try{J.cK9(v,A.c8(b0,x,0),w.a)}catch(o){}if(a8.z===2)for(n=0;n<a8.ay;++n){m=a8.r
u=a8.ax
l=m*(n*u+1)
k=u*m
for(;m<k;++m){u=w
r=J.u(u.a,u.d+l)
j=w
i=a8.r
i=J.u(j.a,j.d+(l-i))
J.bP(u.a,u.d+l,r+i);++l}}}else if(u===32773){w=A.cP(new Uint8Array(p),!1,a9,0)
a8.akq(b0,p,w.a)}else if(u===32946)w=A.cP(C.iM.Cu(A.BL(b0.Ji(0,0,x),1,a9,0),!1),!1,a9,0)
else if(u===8)w=A.cP(C.iM.Cu(A.BL(b0.Ji(0,0,x),1,a9,0),!1),!1,a9,0)
else if(u===6){a8.bam(new A.aqr().dj(0,y.D.a(b0.Ji(0,0,x))),b1,s,q,a8.ax,a8.ay)
return}else throw B.f(A.c4("Unsupported Compression Type: "+u))
for(h=q,g=0;g<a8.ay;++g,++h)for(f=s,e=0;e<a8.ax;++e,++f){u=w
if(u.d>=u.c)break
u=a8.r
if(u===1){u=a8.w
if(u===C.nN){u=a8.f
if(u===32){u=w.an()
r=$.hP()
r.$flags&2&&B.A(r)
r[0]=u
d=$.F8()[0]}else if(u===64)d=w.a_w()
else if(u===16){u=w.bN()
r=$.hx
d=(r!=null?r:A.is())[u]}else d=0
if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.mz(f,h,d)}}else{r=a8.f
if(r===8)if(u===C.ba){u=w
u=J.u(u.a,u.d++)
r=$.oh()
r.$flags&2&&B.A(r)
r[0]=u
d=$.px()[0]}else{u=w
d=J.u(u.a,u.d++)}else if(r===16)if(u===C.ba){u=w.bN()
r=$.qD()
r.$flags&2&&B.A(r)
r[0]=u
d=$.t8()[0]}else d=w.bN()
else if(r===32)if(u===C.ba){u=w.an()
r=$.hP()
r.$flags&2&&B.A(r)
r[0]=u
d=$.lv()[0]}else d=w.an()
else d=0
if(a8.d===C.DG){u=b1.a
a0=u==null?a9:u.gcf()
d=(a0==null?0:a0)-d}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.mz(f,h,d)}}}else if(u===2){u=a8.f
if(u===8){if(a8.w===C.ba){u=w
u=J.u(u.a,u.d++)
r=$.oh()
r.$flags&2&&B.A(r)
r[0]=u
a1=$.px()[0]}else{u=w
a1=J.u(u.a,u.d++)}if(a8.w===C.ba){u=w
u=J.u(u.a,u.d++)
r=$.oh()
r.$flags&2&&B.A(r)
r[0]=u
a2=$.px()[0]}else{u=w
a2=J.u(u.a,u.d++)}}else if(u===16){if(a8.w===C.ba){u=w.bN()
r=$.qD()
r.$flags&2&&B.A(r)
r[0]=u
a1=$.t8()[0]}else a1=w.bN()
if(a8.w===C.ba){u=w.bN()
r=$.qD()
r.$flags&2&&B.A(r)
r[0]=u
a2=$.t8()[0]}else a2=w.bN()}else if(u===32){if(a8.w===C.ba){u=w.an()
r=$.hP()
r.$flags&2&&B.A(r)
r[0]=u
a1=$.lv()[0]}else a1=w.an()
if(a8.w===C.ba){u=w.an()
r=$.hP()
r.$flags&2&&B.A(r)
r[0]=u
a2=$.lv()[0]}else a2=w.an()}else{a1=0
a2=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.fd(f,h,a1,a2,0)}}else if(u===3){u=a8.w
if(u===C.nN){u=a8.f
if(u===32){u=w.an()
r=$.hP()
r.$flags&2&&B.A(r)
r[0]=u
u=$.F8()
a3=u[0]
r[0]=w.an()
a4=u[0]
r[0]=w.an()
a5=u[0]}else{a4=0
a5=0
if(u===64)a3=w.a_w()
else if(u===16){u=w.bN()
r=$.hx
a3=(r!=null?r:A.is())[u]
u=w.bN()
r=$.hx
a4=(r!=null?r:A.is())[u]
u=w.bN()
r=$.hx
a5=(r!=null?r:A.is())[u]}else a3=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.fd(f,h,a3,a4,a5)}}else{r=a8.f
if(r===8){if(u===C.ba){u=w
u=J.u(u.a,u.d++)
r=$.oh()
r.$flags&2&&B.A(r)
r[0]=u
a3=$.px()[0]}else{u=w
a3=J.u(u.a,u.d++)}if(a8.w===C.ba){u=w
u=J.u(u.a,u.d++)
r=$.oh()
r.$flags&2&&B.A(r)
r[0]=u
a4=$.px()[0]}else{u=w
a4=J.u(u.a,u.d++)}if(a8.w===C.ba){u=w
u=J.u(u.a,u.d++)
r=$.oh()
r.$flags&2&&B.A(r)
r[0]=u
a5=$.px()[0]}else{u=w
a5=J.u(u.a,u.d++)}}else if(r===16){if(u===C.ba){u=w.bN()
r=$.qD()
r.$flags&2&&B.A(r)
r[0]=u
a3=$.t8()[0]}else a3=w.bN()
if(a8.w===C.ba){u=w.bN()
r=$.qD()
r.$flags&2&&B.A(r)
r[0]=u
a4=$.t8()[0]}else a4=w.bN()
if(a8.w===C.ba){u=w.bN()
r=$.qD()
r.$flags&2&&B.A(r)
r[0]=u
a5=$.t8()[0]}else a5=w.bN()}else if(r===32){if(u===C.ba){u=w.an()
r=$.hP()
r.$flags&2&&B.A(r)
r[0]=u
a3=$.lv()[0]}else a3=w.an()
if(a8.w===C.ba){u=w.an()
r=$.hP()
r.$flags&2&&B.A(r)
r[0]=u
a4=$.lv()[0]}else a4=w.an()
if(a8.w===C.ba){u=w.an()
r=$.hP()
r.$flags&2&&B.A(r)
r[0]=u
a5=$.lv()[0]}else a5=w.an()}else{a3=0
a4=0
a5=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.fd(f,h,a3,a4,a5)}}}else if(u>=4){u=a8.w
if(u===C.nN){u=a8.f
if(u===32){u=w.an()
r=$.hP()
r.$flags&2&&B.A(r)
r[0]=u
u=$.F8()
a3=u[0]
r[0]=w.an()
a4=u[0]
r[0]=w.an()
a5=u[0]
r[0]=w.an()
a6=u[0]}else{a4=0
a5=0
a6=0
if(u===64)a3=w.a_w()
else if(u===16){u=w.bN()
r=$.hx
a3=(r!=null?r:A.is())[u]
u=w.bN()
r=$.hx
a4=(r!=null?r:A.is())[u]
u=w.bN()
r=$.hx
a5=(r!=null?r:A.is())[u]
u=w.bN()
r=$.hx
a6=(r!=null?r:A.is())[u]}else a3=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.kA(f,h,a3,a4,a5,a6)}}else{r=a8.f
if(r===8){if(u===C.ba){u=w
u=J.u(u.a,u.d++)
r=$.oh()
r.$flags&2&&B.A(r)
r[0]=u
a3=$.px()[0]}else{u=w
a3=J.u(u.a,u.d++)}if(a8.w===C.ba){u=w
u=J.u(u.a,u.d++)
r=$.oh()
r.$flags&2&&B.A(r)
r[0]=u
a4=$.px()[0]}else{u=w
a4=J.u(u.a,u.d++)}if(a8.w===C.ba){u=w
u=J.u(u.a,u.d++)
r=$.oh()
r.$flags&2&&B.A(r)
r[0]=u
a5=$.px()[0]}else{u=w
a5=J.u(u.a,u.d++)}if(a8.w===C.ba){u=w
u=J.u(u.a,u.d++)
r=$.oh()
r.$flags&2&&B.A(r)
r[0]=u
a6=$.px()[0]}else{u=w
a6=J.u(u.a,u.d++)}}else if(r===16){if(u===C.ba){u=w.bN()
r=$.qD()
r.$flags&2&&B.A(r)
r[0]=u
a3=$.t8()[0]}else a3=w.bN()
if(a8.w===C.ba){u=w.bN()
r=$.qD()
r.$flags&2&&B.A(r)
r[0]=u
a4=$.t8()[0]}else a4=w.bN()
if(a8.w===C.ba){u=w.bN()
r=$.qD()
r.$flags&2&&B.A(r)
r[0]=u
a5=$.t8()[0]}else a5=w.bN()
if(a8.w===C.ba){u=w.bN()
r=$.qD()
r.$flags&2&&B.A(r)
r[0]=u
a6=$.t8()[0]}else a6=w.bN()}else if(r===32){if(u===C.ba){u=w.an()
r=$.hP()
r.$flags&2&&B.A(r)
r[0]=u
a3=$.lv()[0]}else a3=w.an()
if(a8.w===C.ba){u=w.an()
r=$.hP()
r.$flags&2&&B.A(r)
r[0]=u
a4=$.lv()[0]}else a4=w.an()
if(a8.w===C.ba){u=w.an()
r=$.hP()
r.$flags&2&&B.A(r)
r[0]=u
a5=$.lv()[0]}else a5=w.an()
if(a8.w===C.ba){u=w.an()
r=$.hP()
r.$flags&2&&B.A(r)
r[0]=u
a6=$.lv()[0]}else a6=w.an()}else{a3=0
a4=0
a5=0
a6=0}if(a8.d===C.a4E){a7=A.cDe(a3,a4,a5,a6)
a3=a7[0]
a4=a7[1]
a5=a7[2]
u=b1.a
a6=u==null?a9:u.gcf()
if(a6==null)a6=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.kA(f,h,a3,a4,a5,a6)}}}}}else throw B.f(A.c4("Unsupported bitsPerSample: "+u))},
bam(d,e,f,g,h,i){var x,w,v,u
for(x=0;x<i;++x)for(w=x+g,v=0;v<h;++v){u=d.a
u=u==null?null:u.ek(v,x,null)
if(u==null)u=new A.ff()
e.xY(v+f,w,u)}},
aYC(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.cx
a2===$&&B.b()
w=a6*a2+a5
a3.d=a0.ch[w]
a2=a0.ax
v=a5*a2
u=a0.ay
t=a6*u
s=a0.CW[w]
x=null
r=a0.e
if(r===32773){q=D.c.ap(a2,8)===0?D.c.b7(a2,8)*u:(D.c.b7(a2,8)+1)*u
x=A.cP(new Uint8Array(a2*u),!1,a1,0)
a0.akq(a3,q,x.a)}else if(r===5){x=A.cP(new Uint8Array(a2*u),!1,a1,0)
A.cvJ().Hj(0,A.c8(a3,s,0),x.a)
if(a0.z===2)for(p=0;p<a0.c;++p){o=a0.r
n=o*(p*a0.b+1)
for(;o<a0.b*a0.r;++o){a2=x
u=J.u(a2.a,a2.d+n)
r=x
m=a0.r
m=J.u(r.a,r.d+(n-m))
J.bP(a2.a,a2.d+n,u+m);++n}}}else if(r===2){x=A.cP(new Uint8Array(a2*u),!1,a1,0)
try{A.cn1(a0.dx,a0.ax,a0.ay).bvJ(x,a3,0,a0.ay)}catch(l){}}else if(r===3){x=A.cP(new Uint8Array(a2*u),!1,a1,0)
try{A.cn1(a0.dx,a0.ax,a0.ay).bvK(x,a3,0,a0.ay,a0.dy)}catch(l){}}else if(r===4){x=A.cP(new Uint8Array(a2*u),!1,a1,0)
try{A.cn1(a0.dx,a0.ax,a0.ay).bvP(x,a3,0,a0.ay,a0.fr)}catch(l){}}else if(r===8)x=A.cP(C.iM.Cu(A.BL(a3.Ji(0,0,s),1,a1,0),!1),!1,a1,0)
else if(r===32946)x=A.cP(C.iM.Cu(A.BL(a3.Ji(0,0,s),1,a1,0),!1),!1,a1,0)
else if(r===1)x=a3
else throw B.f(A.c4("Unsupported Compression Type: "+r))
k=new A.bEm(x)
j=a4.gcf()
a2=a0.y
i=a2?j:0
h=a2?0:j
for(g=t,f=0;f<a0.ay;++f,++g){for(e=v,d=0;d<a0.ax;++d,++e){a2=a4.a
u=a2==null
r=u?a1:a2.b
if(g<(r==null?0:r)){a2=u?a1:a2.a
a2=e>=(a2==null?0:a2)}else a2=!0
if(a2)break
a2=k.j8(1)
u=a4.a
if(a2===0){if(u!=null)u.fd(e,g,i,0,0)}else if(u!=null)u.fd(e,g,h,0,0)}k.c=0}},
akq(d,e,f){var x,w,v,u,t,s,r,q,p,o
for(x=J.cR(f),w=0,v=0;v<e;){u=w+1
t=J.u(d.a,d.d+w)
s=$.oh()
s.$flags&2&&B.A(s)
s[0]=t
r=$.px()[0]
if(r>=0&&r<=127)for(t=r+1,w=u,q=0;q<t;++q,v=p,w=u){p=v+1
u=w+1
x.m(f,v,J.u(d.a,d.d+w))}else{t=r<=-1&&r>=-127
w=u+1
if(t){o=J.u(d.a,d.d+u)
for(t=-r+1,q=0;q<t;++q,v=p){p=v+1
x.m(f,v,o)}}}}},
V3(d,e){var x=this.a
if(!x.a3(0,d))return e
x=x.i(0,d).p7(0)
x=x==null?null:x.D(0)
return x==null?0:x},
FU(d){return this.V3(d,0)},
V4(d){var x,w=this.a
if(!w.a3(0,d))return null
x=w.i(0,d)
w=x.p7(0)
w.toString
return B.vQ(x.c,w.gxz(w),!0,y.p)}}
A.JZ.prototype={
J(){return"TiffFormat."+this.b}}
A.ku.prototype={
J(){return"TiffPhotometricType."+this.b}}
A.rJ.prototype={
J(){return"TiffImageType."+this.b}}
A.bEp.prototype={}
A.bid.prototype={
Hj(d,e,f){var x,w,v,u,t,s,r=this
r.r=f
x=J.bk(f)
r.w=0
w=y.D.a(e.a)
r.e=w
r.f=w.length
r.b=e.d
if(w[0]===0&&w[1]===1)throw B.f(A.c4("Invalid LZW Data"))
r.ao6()
r.d=r.c=0
v=r.a40()
w=r.x
u=0
while(!0){if(!(v!==257&&r.w<x))break
if(v===256){r.ao6()
v=r.a40()
r.as=0
if(v===257)break
J.bP(r.r,r.w++,v)
u=v}else{t=r.Q
t.toString
if(v<t){r.amE(v)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bP(r.r,r.w++,w[s])
r.aid(u,w[r.as-1])}else{r.amE(u)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bP(r.r,r.w++,w[s])
J.bP(r.r,r.w++,w[r.as-1])
r.aid(u,w[r.as-1])}u=v}v=r.a40()}},
aid(d,e){var x,w=this,v=w.y
v===$&&B.b()
x=w.Q
x.toString
v.$flags&2&&B.A(v)
v[x]=e
v=w.z
v===$&&B.b()
v.$flags&2&&B.A(v)
v[x]=d
x=w.Q=x+1
if(x===511)w.a=10
else if(x===1023)w.a=11
else if(x===2047)w.a=12},
amE(d){var x,w,v,u,t,s,r=this
r.as=0
x=r.x
r.as=1
w=r.y
w===$&&B.b()
v=w[d]
x.$flags&2&&B.A(x)
x[0]=v
v=r.z
v===$&&B.b()
u=v[d]
for(t=1;u!==4098;t=s){s=t+1
r.as=s
x[t]=w[u]
u=v[u]}},
a40(){var x,w,v,u,t=this,s=t.b,r=t.f
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
return D.c.fX(t.c,s)&C.aqM[w-9]},
ao6(){var x,w,v=this
v.y=new Uint8Array(4096)
x=new Uint32Array(4096)
v.z=x
D.bl.kW(x,0,4096,4098)
for(x=v.y,w=0;w<256;++w){x.$flags&2&&B.A(x)
x[w]=w}v.a=9
v.Q=258}}
A.bEn.prototype={
k5(d){var x,w,v=this.a
if(v==null)return null
v=v.f[d]
x=this.c
x===$&&B.b()
w=v.dj(0,x)
return w},
nv(d,e,f){var x=this,w=A.cP(e,!1,null,0)
x.c=w
w=x.aqA(w)
x.a=w
if(w==null)return null
return x.k5(0)},
aqA(d){var x,w,v,u,t,s,r,q,p,o=null,n=B.a([],y.cp),m=new A.bEp(n),l=d.bN()
if(l!==18761&&l!==19789)return o
if(l===19789)d.e=!0
else d.e=!1
v=d.bN()
m.d=v
if(v!==42)return o
u=d.an()
t=A.c8(d,o,0)
t.d=u
x=t
for(v=y.p,s=y.aL;u!==0;){w=null
try{r=new A.aAV(B.H(v,s),C.DH,C.a4C,C.b52)
r.aTc(x)
w=r
q=w
if(!(q.b!==0&&q.c!==0))break}catch(p){break}n.push(w)
if(n.length===1){q=n[0]
m.a=q.b
m.b=q.c}u=x.an()
if(u!==0)x.d=u}return n.length!==0?m:o}}
A.bHB.prototype={
NT(){var x,w=this.a,v=w.rF()
if((v&1)!==0)return!1
if((v>>>1&7)>3)return!1
if((v>>>4&1)===0)return!1
this.f.d=v>>>5
if(w.rF()!==2752925)return!1
x=this.b
x.a=w.bN()
x.b=w.bN()
return!0},
o9(d){var x,w,v,u=this,t=null
if(!u.b23())return t
x=u.b
w=x.a
u.d=A.hA(t,t,C.a6,0,C.bg,x.b,t,0,4,t,C.a6,w,!1)
u.b9y()
if(!u.bf4())return t
x=x.w
if(x.length!==0){v=A.cP(new B.e2(x),!1,t,0)
x=u.d
x.toString
x.e=A.ctQ(v)}return u.d},
b23(){var x,w,v,u,t=this
if(!t.NT())return!1
t.fr=A.cYU()
for(x=t.dy,w=0;w<4;++w){v=new Int32Array(2)
u=new Int32Array(2)
x[w]=new A.aBO(v,u,new Int32Array(2))}x=t.b
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
u=A.czN(v.jW(u))
t.c=u
v.d+=x.d
u.dA(1)
t.c.dA(1)
t.bfc(t.x,t.fr)
t.bf3()
if(!t.bf7(v))return!1
t.bf9()
t.c.dA(1)
t.bf8()
return!0},
bfc(d,e){var x,w,v,u=this,t=u.c
t===$&&B.b()
t=t.dA(1)!==0
d.a=t
if(t){d.b=u.c.dA(1)!==0
if(u.c.dA(1)!==0){d.c=u.c.dA(1)!==0
for(t=d.d,x=0;x<4;++x){if(u.c.dA(1)!==0){w=u.c
v=w.dA(7)
w=w.dA(1)===1?-v:v}else w=0
t.$flags&2&&B.A(t)
t[x]=w}for(t=d.e,x=0;x<4;++x){if(u.c.dA(1)!==0){w=u.c
v=w.dA(6)
w=w.dA(1)===1?-v:v}else w=0
t.$flags&2&&B.A(t)
t[x]=w}}if(d.b)for(x=0;x<3;++x){t=e.a
w=u.c.dA(1)!==0?u.c.dA(8):255
t.$flags&2&&B.A(t)
t[x]=w}}else d.b=!1
return!0},
bf3(){var x,w,v,u=this,t=u.w,s=u.c
s===$&&B.b()
t.a=s.dA(1)!==0
t.b=u.c.dA(6)
t.c=u.c.dA(3)
s=u.c.dA(1)!==0
t.d=s
if(s)if(u.c.dA(1)!==0){for(s=t.e,x=0;x<4;++x)if(u.c.dA(1)!==0){w=u.c
v=w.dA(6)
w=w.dA(1)===1?-v:v
s.$flags&2&&B.A(s)
s[x]=w}for(s=t.f,x=0;x<4;++x)if(u.c.dA(1)!==0){w=u.c
v=w.dA(6)
w=w.dA(1)===1?-v:v
s.$flags&2&&B.A(s)
s[x]=w}}if(t.b===0)s=0
else s=t.a?1:2
u.bW=s
return!0},
bf7(d){var x,w,v,u,t,s,r,q=d.c-d.d,p=this.c
p===$&&B.b()
p=D.c.eq(1,p.dA(2))
this.cy=p
x=p-1
w=x*3
if(q<w)return!1
for(p=this.db,v=0,u=0;u<x;++u,w=s){t=d.Sd(3,v)
s=w+((J.u(t.a,t.d)|J.u(t.a,t.d+1)<<8|J.u(t.a,t.d+2)<<16)>>>0)
if(s>q)s=q
r=new A.a70(d.B2(s-w,w))
r.b=254
r.c=0
r.d=-8
p[u]=r
v+=3}p[x]=A.czN(d.B2(q-w,d.d-d.b+w))
return w<q},
bf9(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
h===$&&B.b()
x=h.dA(7)
w=i.c.dA(1)!==0?i.c.JP(4):0
v=i.c.dA(1)!==0?i.c.JP(4):0
u=i.c.dA(1)!==0?i.c.JP(4):0
t=i.c.dA(1)!==0?i.c.JP(4):0
s=i.c.dA(1)!==0?i.c.JP(4):0
r=i.x
for(h=i.dy,q=r.a,p=!r.c,o=r.d,n=0;n<4;++n){if(q){m=o[n]
if(p)m+=x}else{if(n>0){h[n]=h[0]
continue}m=x}l=h[n]
k=l.a
j=m+w
if(j<0)j=0
else if(j>127)j=127
j=C.Av[j]
k.$flags&2&&B.A(k)
k[0]=j
if(m<0)j=0
else j=m>127?127:m
k[1]=C.Aw[j]
j=l.b
k=m+v
if(k<0)k=0
else if(k>127)k=127
k=C.Av[k]
j.$flags&2&&B.A(j)
j[0]=k*2
k=m+u
if(k<0)k=0
else if(k>127)k=127
j[1]=C.Aw[k]*101581>>>16
if(j[1]<8)j[1]=8
k=l.c
j=m+t
if(j<0)j=0
else if(j>117)j=117
j=C.Av[j]
k.$flags&2&&B.A(k)
k[0]=j
j=m+s
if(j<0)j=0
else if(j>127)j=127
k[1]=C.Aw[j]}},
bf8(){var x,w,v,u,t,s,r=this,q=r.fr
for(x=0;x<4;++x)for(w=0;w<8;++w)for(v=0;v<3;++v)for(u=0;u<11;++u){t=r.c
t===$&&B.b()
s=t.ii(C.aAM[x][w][v][u])!==0?r.c.dA(8):C.aqI[x][w][v][u]
t=q.b[x][w].a[v]
t.$flags&2&&B.A(t)
t[u]=s}t=r.c
t===$&&B.b()
t=t.dA(1)!==0
r.fx=t
if(t)r.fy=r.c.dA(8)},
bgU(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.bW
k.toString
if(k>0){x=l.w
for(k=x.e,w=x.f,v=l.x,u=v.e,t=0;t<4;++t){if(v.a){s=u[t]
if(!v.c){r=x.b
r.toString
s+=r}}else s=x.b
for(q=0;q<=1;++q){r=l.av
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
b9y(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k.at
if(j!=null)m.bU=j
x=J.iP(4,y.K)
for(j=y.cr,w=0;w<4;++w)x[w]=B.a([new A.K9(),new A.K9()],j)
m.av=x
j=m.at
j.toString
x=J.iP(j,y.bt)
for(v=0;v<j;++v){u=new Uint8Array(16)
t=new Uint8Array(8)
x[v]=new A.aBP(u,t,new Uint8Array(8))}m.k2=x
m.ok=new Uint8Array(832)
j=m.at
j.toString
m.go=new Uint8Array(4*j)
u=m.p4=16*j
j=8*j
m.R8=j
t=m.bW
t.toString
s=C.Ae[t]
r=s*u
q=(s/2|0)*j
m.p1=A.cP(new Uint8Array(16*u+r),!1,l,r)
j=m.R8
j.toString
m.p2=A.cP(new Uint8Array(8*j+q),!1,l,q)
j=m.R8
j.toString
m.p3=A.cP(new Uint8Array(8*j+q),!1,l,q)
j=k.a
m.RG=A.cP(new Uint8Array(j),!1,l,0)
p=k.a+1>>>1
m.rx=A.cP(new Uint8Array(p),!1,l,0)
m.ry=A.cP(new Uint8Array(p),!1,l,0)
k=m.bW
k.toString
o=C.Ae[k]
if(k===2)m.ch=m.ay=0
else{k=m.y
k===$&&B.b()
k=D.c.b7(k-o,16)
m.ay=k
j=m.Q
j.toString
j=D.c.b7(j-o,16)
m.ch=j
if(k<0)m.ay=0
if(j<0)m.ch=0}k=m.as
k.toString
k=D.c.b7(k+15+o,16)
m.cx=k
j=m.z
j===$&&B.b()
j=D.c.b7(j+15+o,16)
m.CW=j
u=m.at
u.toString
if(j>u)m.CW=u
j=m.ax
j.toString
if(k>j)m.cx=j
n=u+1
x=J.iP(n,y.bQ)
for(v=0;v<n;++v)x[v]=new A.aBM()
m.k3=x
k=m.at
k.toString
x=J.iP(k,y.bl)
for(v=0;v<k;++v){j=new Int16Array(384)
x[v]=new A.aBN(j,new Uint8Array(16))}m.bs=x
k=m.at
k.toString
m.k4=B.bI(k,l,!1,y.B)
m.bgU()
A.cYl()
m.e=new A.bHC()
return!0},
bf4(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
t=j.bs
t===$&&B.b()
p=t[u]
if(w.b){u=j.c
u===$&&B.b()
u=u.ii(j.fr.a[0])
t=j.c
o=j.fr
j.k1=u===0?t.ii(o.a[1]):2+t.ii(o.a[2])}u=j.fx
u===$&&B.b()
if(u){u=j.c
u===$&&B.b()
t=j.fy
t===$&&B.b()
n=u.ii(t)!==0}else n=!1
j.bf5()
if(!n)n=j.bfa(q,s)
else{r.a=q.a=0
u=p.b
u===$&&B.b()
if(!u)r.b=q.b=0
p.f=p.e=0}u=j.bW
u.toString
if(u>0){u=j.k4
u===$&&B.b()
t=j.y1
o=j.av
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
D.A.kW(x,0,4,0)
j.y1=0
j.bhR()
u=j.bW
u.toString
k=!1
if(u>0){u=j.y2
t=j.ch
t===$&&B.b()
if(u>=t){t=j.cx
t.toString
t=u<=t
k=t}}if(!j.b0U(k))return!1
u=++j.y2}return!0},
bhR(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.y2,a4=a1.ok
a4===$&&B.b()
x=A.cP(a4,!1,a2,40)
w=A.cP(a1.ok,!1,a2,584)
v=A.cP(a1.ok,!1,a2,600)
a4=a3>0
u=0
while(!0){t=a1.at
t.toString
if(!(u<t))break
t=a1.bs
t===$&&B.b()
s=t[u]
if(u>0){for(r=-1;r<16;++r){t=r*32
x.rA(t-4,4,x,t+12)}for(r=-1;r<8;++r){t=r*32
q=t-4
t+=4
w.rA(q,4,w,t)
v.rA(q,4,v,t)}}else{for(r=0;r<16;++r)J.bP(x.a,x.d+(r*32-1),129)
for(r=0;r<8;++r){t=r*32-1
J.bP(w.a,w.d+t,129)
J.bP(v.a,v.d+t,129)}if(a4){J.bP(v.a,v.d+-33,129)
J.bP(w.a,w.d+-33,129)
J.bP(x.a,x.d+-33,129)}}t=a1.k2
t===$&&B.b()
p=t[u]
o=s.a
n=s.e
if(a4){x.A6(-32,16,p.a)
w.A6(-32,8,p.b)
v.A6(-32,8,p.c)}else if(u===0){t=x.a
q=x.d+-33
J.tb(t,q,q+21,127)
q=w.a
t=w.d+-33
J.tb(q,t,t+9,127)
t=v.a
q=v.d+-33
J.tb(t,q,q+9,127)}t=s.b
t===$&&B.b()
if(t){m=A.c8(x,a2,-16)
l=m.Qt()
if(a4){t=a1.at
t.toString
if(u>=t-1){t=p.a[15]
q=m.a
k=m.d
J.tb(q,k,k+4,t)}else m.A6(0,4,a1.k2[u+1].a)}j=l[0]
l.$flags&2&&B.A(l)
l[96]=j
l[64]=j
l[32]=j
for(t=s.c,i=0;i<16;++i,n=n<<2>>>0){h=A.c8(x,a2,C.Rz[i])
C.axz[t[i]].$1(h)
n.toString
q=i*16
a1.akW(n,new A.lM(o,q,384,q,!1),h)}}else{t=A.czQ(u,a3,s.c[0])
t.toString
C.aCa[t].$1(x)
if(n!==0)for(i=0;i<16;++i,n=n<<2>>>0){h=A.c8(x,a2,C.Rz[i])
n.toString
t=i*16
a1.akW(n,new A.lM(o,t,384,t,!1),h)}}t=s.f
t===$&&B.b()
q=A.czQ(u,a3,s.d)
q.toString
C.MG[q].$1(w)
C.MG[q].$1(v)
g=new A.lM(o,256,384,256,!1)
if((t&255)!==0){q=a1.e
if((t&170)!==0){q===$&&B.b()
q.vA(g,w)
q.vA(A.c8(g,a2,16),A.c8(w,a2,4))
k=A.c8(g,a2,32)
f=A.c8(w,a2,128)
q.vA(k,f)
q.vA(A.c8(k,a2,16),A.c8(f,a2,4))}else{q===$&&B.b()
q.aF1(g,w)}}e=new A.lM(o,320,384,320,!1)
t=t>>>8
if((t&255)!==0){q=a1.e
if((t&170)!==0){q===$&&B.b()
q.vA(e,v)
q.vA(A.c8(e,a2,16),A.c8(v,a2,4))
t=A.c8(e,a2,32)
k=A.c8(v,a2,128)
q.vA(t,k)
q.vA(A.c8(t,a2,16),A.c8(k,a2,4))}else{q===$&&B.b()
q.aF1(e,v)}}t=a1.ax
t.toString
if(a3<t-1){D.A.dM(p.a,0,16,x.hK(),480)
D.A.dM(p.b,0,8,w.hK(),224)
D.A.dM(p.c,0,8,v.hK(),224)}d=u*16
a0=u*8
for(r=0;r<16;++r){t=a1.p4
t.toString
q=a1.p1
q===$&&B.b()
q.rA(d+r*t,16,x,r*32)}for(r=0;r<8;++r){t=a1.R8
t.toString
q=a1.p2
q===$&&B.b()
k=r*32
q.rA(a0+r*t,8,w,k)
t=a1.R8
t.toString
q=a1.p3
q===$&&B.b()
q.rA(a0+r*t,8,v,k)}++u}},
akW(d,e,f){var x,w,v,u,t,s
switch(d>>>30){case 3:x=this.e
x===$&&B.b()
x.Qu(0,e,f,!1)
break
case 2:this.e===$&&B.b()
w=J.u(e.a,e.d)+4
v=D.c.l4(D.c.P(J.u(e.a,e.d+4)*35468,16),32)
u=D.c.l4(D.c.P(J.u(e.a,e.d+4)*85627,16),32)
t=D.c.l4(D.c.P(J.u(e.a,e.d+1)*35468,16),32)
s=D.c.l4(D.c.P(J.u(e.a,e.d+1)*85627,16),32)
A.bHE(f,0,w+u,s,t)
A.bHE(f,1,w+v,s,t)
A.bHE(f,2,w-v,s,t)
A.bHE(f,3,w-u,s,t)
break
case 1:x=this.e
x===$&&B.b()
x.Qv(e,f)
break
default:break}},
b_6(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.p4,j=m.k4
j===$&&B.b()
j=j[d]
j.toString
x=m.p1
x===$&&B.b()
w=A.c8(x,l,d*16)
v=j.b
u=j.a
if(u===0)return
if(m.bW===1){if(d>0){x=m.e
x===$&&B.b()
k.toString
x.age(w,k,u+4)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.aLz(w,k,u)}if(e>0){x=m.e
x===$&&B.b()
k.toString
x.agf(w,k,u+4)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.aLC(w,k,u)}}else{t=m.R8
x=m.p2
x===$&&B.b()
s=d*8
r=A.c8(x,l,s)
x=m.p3
x===$&&B.b()
q=A.c8(x,l,s)
p=j.d
if(d>0){x=m.e
x===$&&B.b()
k.toString
s=u+4
x.Fo(w,1,k,16,s,v,p)
t.toString
x.Fo(r,1,t,8,s,v,p)
x.Fo(q,1,t,8,s,v,p)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.byT(w,k,u,v,p)
t.toString
o=A.c8(r,l,4)
n=A.c8(q,l,4)
x.Fn(o,1,t,8,u,v,p)
x.Fn(n,1,t,8,u,v,p)}if(e>0){x=m.e
x===$&&B.b()
k.toString
s=u+4
x.Fo(w,k,1,16,s,v,p)
t.toString
x.Fo(r,t,1,8,s,v,p)
x.Fo(q,t,1,8,s,v,p)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.bKd(w,k,u,v,p)
t.toString
x=4*t
o=A.c8(r,l,x)
n=A.c8(q,l,x)
j.Fn(o,t,1,8,u,v,p)
j.Fn(n,t,1,8,u,v,p)}}},
b0E(){var x,w=this,v=w.ay
v===$&&B.b()
x=v
while(!0){v=w.CW
v.toString
if(!(x<v))break
w.b_6(x,w.y2);++x}},
b0U(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.bW
e.toString
x=C.Ae[e]
e=g.p4
e.toString
w=x*e
e=g.R8
e.toString
v=(x/2|0)*e
e=g.p1
e===$&&B.b()
u=-w
t=A.c8(e,f,u)
e=g.p2
e===$&&B.b()
s=-v
r=A.c8(e,f,s)
e=g.p3
e===$&&B.b()
q=A.c8(e,f,s)
p=g.y2
e=g.cx
e.toString
o=p*16
n=(p+1)*16
if(d)g.b0E()
if(p!==0){o-=x
g.to=A.c8(t,f,0)
g.x1=A.c8(r,f,0)
g.x2=A.c8(q,f,0)}else{g.to=A.c8(g.p1,f,0)
g.x1=A.c8(g.p2,f,0)
g.x2=A.c8(g.p3,f,0)}e=p<e-1
if(e)n-=x
m=g.as
m.toString
if(n>m)n=m
g.xr=null
if(g.bU!=null&&o<n){m=g.xr=g.aYW(o,n-o)
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
g.bhe(0,o-l,m-h,n-o)}if(e){e=g.p1
m=g.p4
m.toString
e.rA(u,w,t,16*m)
m=g.p2
u=g.R8
u.toString
m.rA(s,v,r,8*u)
u=g.p3
m=g.R8
m.toString
u.rA(s,v,q,8*m)}return!0},
bhe(d,e,f,g){if(f<=0||g<=0)return!1
this.b_T(e,f,g)
this.b_S(e,f,g)
return!0},
a2X(d){var x
if((d&-4194304)>>>0===0)x=D.c.P(d,14)
else x=d<0?0:255
return x},
Wu(d,e,f,g){var x=19077*d
g.m(0,0,this.a2X(x+26149*f+-3644112))
g.m(0,1,this.a2X(x-6419*e-13320*f+2229552))
g.m(0,2,this.a2X(x+33050*e+-4527440))},
Wd(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=new A.bHO(),a0=b3-1,a1=D.c.P(a0,1),a2=d.$2(J.u(a7.a,a7.d),J.u(a8.a,a8.d)),a3=d.$2(J.u(a9.a,a9.d),J.u(b0.a,b0.d)),a4=D.c.P(3*a2+a3+131074,2)
f.Wu(J.u(a5.a,a5.d),a4&255,a4>>>16,b1)
b1.m(0,3,255)
x=a6!=null
if(x){a4=D.c.P(3*a3+a2+131074,2)
w=J.u(a6.a,a6.d)
b2.toString
f.Wu(w,a4&255,a4>>>16,b2)
b2.m(0,3,255)}for(v=1;v<=a1;++v,a3=t,a2=u){u=d.$2(J.u(a7.a,a7.d+v),J.u(a8.a,a8.d+v))
t=d.$2(J.u(a9.a,a9.d+v),J.u(b0.a,b0.d+v))
s=a2+u+a3+t+524296
r=D.c.P(s+2*(u+a3),3)
q=D.c.P(s+2*(a2+t),3)
a4=D.c.P(r+a2,1)
p=D.c.P(q+u,1)
w=2*v
o=w-1
n=J.u(a5.a,a5.d+o)
m=a4&255
l=a4>>>16
k=o*4
j=A.c8(b1,e,k)
n=19077*n
i=n+26149*l+-3644112
if((i&-4194304)>>>0===0)h=D.c.P(i,14)
else h=i<0?0:255
J.bP(j.a,j.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.P(l,14)
else h=l<0?0:255
J.bP(j.a,j.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.P(n,14)
else h=n<0?0:255
J.bP(j.a,j.d+2,h)
J.bP(j.a,j.d+3,255)
n=J.u(a5.a,a5.d+w)
m=p&255
l=p>>>16
j=w*4
i=A.c8(b1,e,j)
n=19077*n
g=n+26149*l+-3644112
if((g&-4194304)>>>0===0)h=D.c.P(g,14)
else h=g<0?0:255
J.bP(i.a,i.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.P(l,14)
else h=l<0?0:255
J.bP(i.a,i.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.P(n,14)
else h=n<0?0:255
J.bP(i.a,i.d+2,h)
J.bP(i.a,i.d+3,255)
if(x){a4=D.c.P(q+a3,1)
p=D.c.P(r+t,1)
o=J.u(a6.a,a6.d+o)
n=a4&255
m=a4>>>16
b2.toString
k=A.c8(b2,e,k)
o=19077*o
l=o+26149*m+-3644112
if((l&-4194304)>>>0===0)h=D.c.P(l,14)
else h=l<0?0:255
J.bP(k.a,k.d,h)
m=o-6419*n-13320*m+2229552
if((m&-4194304)>>>0===0)h=D.c.P(m,14)
else h=m<0?0:255
J.bP(k.a,k.d+1,h)
o=o+33050*n+-4527440
if((o&-4194304)>>>0===0)h=D.c.P(o,14)
else h=o<0?0:255
J.bP(k.a,k.d+2,h)
J.bP(k.a,k.d+3,255)
w=J.u(a6.a,a6.d+w)
o=p&255
n=p>>>16
j=A.c8(b2,e,j)
w=19077*w
m=w+26149*n+-3644112
if((m&-4194304)>>>0===0)h=D.c.P(m,14)
else h=m<0?0:255
J.bP(j.a,j.d,h)
n=w-6419*o-13320*n+2229552
if((n&-4194304)>>>0===0)h=D.c.P(n,14)
else h=n<0?0:255
J.bP(j.a,j.d+1,h)
w=w+33050*o+-4527440
if((w&-4194304)>>>0===0)h=D.c.P(w,14)
else h=w<0?0:255
J.bP(j.a,j.d+2,h)
J.bP(j.a,j.d+3,255)}}if((b3&1)===0){a4=D.c.P(3*a2+a3+131074,2)
w=J.u(a5.a,a5.d+a0)
o=a0*4
n=A.c8(b1,e,o)
f.Wu(w,a4&255,a4>>>16,n)
n.m(0,3,255)
if(x){a4=D.c.P(3*a3+a2+131074,2)
a0=J.u(a6.a,a6.d+a0)
b2.toString
o=A.c8(b2,e,o)
f.Wu(a0,a4&255,a4>>>16,o)
o.m(0,3,255)}}},
b_S(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.xr
if(o==null)return
x=A.c8(o,null,0)
if(d===0){w=f-1
v=d}else{v=d-1
x.d=x.d-p.b.a
w=f}o=p.Q
o.toString
u=p.as
if(o+d+f===u){u.toString
w=u-o-v}for(o=p.b,t=0;t<w;++t){for(u=t+v,s=0;s<e;++s){r=J.u(x.a,x.d+s)
q=p.d.a
q=q==null?null:q.ek(s,u,null);(q==null?new A.ff():q).saP(0,r)}x.d=x.d+o.a}},
b_T(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=A.cP(J.d_(l.d.gag(0),0,null),!1,k,d*j.a*4),h=l.to
h===$&&B.b()
x=A.c8(h,k,0)
h=l.x1
h===$&&B.b()
w=A.c8(h,k,0)
h=l.x2
h===$&&B.b()
v=A.c8(h,k,0)
u=d+f
t=D.c.P(e+1,1)
s=j.a*4
j=l.rx
j===$&&B.b()
r=A.c8(j,k,0)
j=l.ry
j===$&&B.b()
q=A.c8(j,k,0)
if(d===0){l.Wd(x,k,w,v,w,v,i,k,e)
p=f}else{j=l.RG
j===$&&B.b()
l.Wd(j,x,r,q,w,v,A.c8(i,k,-s),i,e)
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
l.Wd(A.c8(x,k,-n),x,r,q,w,v,A.c8(i,k,h),i,e)}j=x.d
h=l.p4
h.toString
x.d=j+h
j=l.Q
j.toString
h=l.as
h.toString
if(j+u<h){j=l.RG
j===$&&B.b()
j.A6(0,e,x)
l.rx.A6(0,t,w)
l.ry.A6(0,t,v);--p}else if((u&1)===0)l.Wd(x,k,w,v,w,v,A.c8(i,k,s),k,e)
return p},
aYW(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.b,m=n.a,l=n.b
if(d<0||e<=0||d+e>l)return null
if(d===0){n=m*l
o.cN=new Uint8Array(n)
x=o.bU
w=new A.bIy(x,m,l)
v=x.df()
w.d=v&3
w.e=D.c.P(v,2)&3
w.f=D.c.P(v,4)&3
w.r=D.c.P(v,6)&3
if(w.gev()){u=w.d
if(u===0){if(x.c-x.d<n)w.r=1}else if(u===1){t=new A.aCc(C.nU,B.a([],y.J))
t.a=m
t.b=l
n=B.a([],y.A)
u=B.a([],y.F)
s=new Uint32Array(2)
r=new A.aBK(x,s)
s=r.d=J.d_(D.bl.gag(s),0,null)
q=x.df()
s.$flags&2&&B.A(s)
s[0]=q
s[1]=x.df()
s[2]=x.df()
s[3]=x.df()
s[4]=x.df()
s[5]=x.df()
s[6]=x.df()
s[7]=x.df()
u=new A.aqh(r,t,n,u)
u.db=m
w.x=u
u.L4(m,l,!0)
n=w.x
x=n.ax
if(x.length===1&&x[0].a===C.a5m&&n.ba4()){w.y=!0
n=w.x
x=n.c
p=x.a*x.b
n.cx=0
x=D.c.ap(p,4)
x=new Uint8Array(p+(4-x))
n.CW=x
n.ch=J.oi(D.A.gag(x),0,null)}else{w.y=!1
w.x.aio()}}else w.r=1}o.b_=w}n=o.b_
n===$&&B.b()
if(!n.w){x=o.cN
x===$&&B.b()
if(!n.NS(0,d,e,x))return null}n=o.cN
n===$&&B.b()
return A.cP(n,!1,null,d*m)},
bfa(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.fr.b,a3=a1.k1
a3===$&&B.b()
x=a1.dy[a3]
a3=a1.bs
a3===$&&B.b()
w=a3[a1.y1]
v=A.cP(w.a,!1,null,0)
a3=a1.k3
a3===$&&B.b()
u=a3[0]
v.bDm(0,v.c-v.d,0)
a3=w.b
a3===$&&B.b()
if(!a3){t=A.cP(new Int16Array(16),!1,null,0)
a3=a4.b
s=u.b
r=a1.a3V(a5,a2[1],a3+s,x.b,0,t)
a4.b=u.b=r>0?1:0
if(r>1)a1.bns(t,v)
else{q=D.c.P(J.u(t.a,t.d)+3,3)
for(p=0;p<256;p+=16)J.bP(v.a,v.d+p,q)}o=a2[0]
n=1}else{o=a2[3]
n=0}m=a4.a&15
l=u.a&15
for(k=0,j=0;j<4;++j){i=l&1
for(h=0,g=0;g<4;++g){r=a1.a3V(a5,o,i+(m&1),x.a,n,v)
i=r>n?1:0
m=m>>>1|i<<7
a3=J.u(v.a,v.d)!==0?1:0
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
for(g=0;g<2;++g){r=a1.a3V(a5,a2[2],i+(m&1),x.c,0,v)
i=r>0?1:0
m=m>>>1|i<<3
a3=J.u(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=(h<<2|a3)>>>0
v.d+=16}m=m>>>2
l=l>>>1|i<<5}d=(d|D.c.eq(h,4*a0))>>>0
e=(e|D.c.eq(m<<4>>>0,a0))>>>0
f=(f|D.c.eq(l&240,a0))>>>0}a4.a=e
u.a=f
w.e=k
w.f=d
if((d&43690)===0)x.toString
return(k|d)>>>0===0},
bns(d,e){var x,w,v,u,t,s,r,q,p,o,n=new Int32Array(16)
for(x=0;x<4;++x){w=12+x
v=J.u(d.a,d.d+x)+J.u(d.a,d.d+w)
u=4+x
t=8+x
s=J.u(d.a,d.d+u)+J.u(d.a,d.d+t)
r=J.u(d.a,d.d+u)-J.u(d.a,d.d+t)
q=J.u(d.a,d.d+x)-J.u(d.a,d.d+w)
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
J.bP(e.a,e.d+p,u)
u=D.c.P(q+r,3)
J.bP(e.a,e.d+(p+16),u)
u=D.c.P(v-s,3)
J.bP(e.a,e.d+(p+32),u)
u=D.c.P(q-r,3)
J.bP(e.a,e.d+(p+48),u)
p+=64}},
b2b(d,e){var x,w,v,u,t,s
if(d.ii(e[3])===0)x=d.ii(e[4])===0?2:3+d.ii(e[5])
else if(d.ii(e[6])===0)x=d.ii(e[7])===0?5+d.ii(159):7+2*d.ii(165)+d.ii(145)
else{w=d.ii(e[8])
v=2*w+d.ii(e[9+w])
u=C.asf[v]
t=u.length
for(x=0,s=0;s<t;++s)x+=x+d.ii(u[s])
x+=3+D.c.eq(8,v)}return x},
a3V(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=e[h].a[f]
for(;h<16;h=x){if(d.ii(p[0])===0)return h
for(;d.ii(p[1])===0;){++h
p=e[C.PS[h]].a[0]
if(h===16)return 16}x=h+1
w=e[C.PS[x]].a
if(d.ii(p[2])===0){p=w[1]
v=1}else{v=this.b2b(d,p)
p=w[2]}u=C.awt[h]
t=d.b
t===$&&B.b()
s=d.aiK(D.c.P(t,1))
t=d.b
r=C.OX[t]
d.b=C.OV[t]
t=d.d
t===$&&B.b()
d.d=t-r
t=s!==0?-v:v
q=g[h>0?1:0]
J.bP(i.a,i.d+u,t*q)}return 16},
bf5(){var x,w,v,u,t,s,r,q,p,o=this,n=o.y1,m=4*n,l=o.go,k=o.id,j=o.bs
j===$&&B.b()
x=j[n]
n=o.c
n===$&&B.b()
n=n.ii(145)===0
x.b=n
if(!n){if(o.c.ii(156)!==0)w=o.c.ii(128)!==0?1:3
else w=o.c.ii(163)!==0?2:0
n=x.c
n.$flags&2&&B.A(n)
n[0]=w
l.toString
D.A.kW(l,m,m+4,w)
D.A.kW(k,0,4,w)}else{v=x.c
for(n=k.$flags|0,u=0,t=0;t<4;++t,u=p){w=k[t]
for(s=0;s<4;++s){j=m+s
r=C.awG[l[j]][w]
q=C.NI[o.c.ii(r[0])]
for(;q>0;)q=C.NI[2*q+o.c.ii(r[q])]
w=-q
l.$flags&2&&B.A(l)
l[j]=w}p=u+4
l.toString
D.A.dM(v,u,p,l,m)
n&2&&B.A(k)
k[t]=w}}if(o.c.ii(142)===0)n=0
else if(o.c.ii(114)===0)n=2
else n=o.c.ii(183)!==0?1:3
x.d=n}}
A.a70.prototype={
dA(d){var x,w
for(x=0;w=d-1,d>0;d=w)x=(x|D.c.eP(this.ii(128),w))>>>0
return x},
JP(d){var x=this.dA(d)
return this.dA(1)===1?-x:x},
ii(d){var x,w=this,v=w.b
v===$&&B.b()
x=w.aiK(D.c.P(v*d,8))
if(w.b<=126)w.bkP()
return x},
aiK(d){var x,w,v,u,t,s=this,r=s.d
r===$&&B.b()
if(r<0){x=s.a
w=x.c
v=x.d
if(w-v>=1){u=x.df()
r=s.c
r===$&&B.b()
s.c=(u|r<<8)>>>0
r=s.d+8
s.d=r
t=r}else{if(v<w){r=x.df()
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
if(D.c.nW(r,t)>d){x=s.b
x===$&&B.b()
w=d+1
s.b=x-w
s.c=r-D.c.eP(w,t)
return 1}else{s.b=d
return 0}},
bkP(){var x,w=this,v=w.b
v===$&&B.b()
x=C.OX[v]
w.b=C.OV[v]
v=w.d
v===$&&B.b()
w.d=v-x}}
A.bHC.prototype={
agf(d,e,f){var x,w=A.c8(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x
if(this.api(w,e,f))this.Td(w,e)}},
age(d,e,f){var x,w=A.c8(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x*e
if(this.api(w,1,f))this.Td(w,1)}},
aLC(d,e,f){var x,w,v=A.c8(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.agf(v,e,f)}},
aLz(d,e,f){var x,w=A.c8(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.age(w,e,f)}},
bKd(d,e,f,g,h){var x,w,v=A.c8(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.Fn(v,e,1,16,f,g,h)}},
byT(d,e,f,g,h){var x,w=A.c8(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.Fn(w,1,e,16,f,g,h)}},
Fo(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=A.c8(d,null,0)
for(x=-3*e,w=-2*e,v=-e,u=2*e;t=g-1,g>0;g=t){if(this.apj(h,e,a0,a1))if(this.anH(h,e,a2))this.Td(h,e)
else{s=J.u(h.a,h.d+x)
r=J.u(h.a,h.d+w)
q=J.u(h.a,h.d+v)
p=J.u(h.a,h.d)
o=J.u(h.a,h.d+e)
n=J.u(h.a,h.d+u)
m=$.ciT()
l=m[1020+3*(p-q)+m[1020+r-o]]
m=D.c.P(27*l+63,7)
k=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.P(18*l+63,7)
j=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.P(9*l+63,7)
i=(m&2147483647)-((m&2147483648)>>>0)
m=$.pw()[255+s+i]
J.bP(h.a,h.d+x,m)
m=$.pw()[255+r+j]
J.bP(h.a,h.d+w,m)
m=$.pw()[255+q+k]
J.bP(h.a,h.d+v,m)
m=$.pw()[255+p-k]
J.bP(h.a,h.d,m)
m=$.pw()[255+o-j]
J.bP(h.a,h.d+e,m)
m=$.pw()[255+n-i]
J.bP(h.a,h.d+u,m)}h.d+=f}},
Fn(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=A.c8(d,null,0)
for(x=-2*e,w=-e;v=g-1,g>0;g=v){if(this.apj(k,e,h,i))if(this.anH(k,e,j))this.Td(k,e)
else{u=J.u(k.a,k.d+x)
t=J.u(k.a,k.d+w)
s=J.u(k.a,k.d)
r=J.u(k.a,k.d+e)
q=3*(s-t)
p=$.aUb()
o=D.c.P(q+4,3)
n=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.P(q+3,3)
m=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.P(n+1,1)
l=(o&2147483647)-((o&2147483648)>>>0)
o=$.pw()[255+u+l]
J.bP(k.a,k.d+x,o)
o=$.pw()[255+t+m]
J.bP(k.a,k.d+w,o)
o=$.pw()[255+s-n]
J.bP(k.a,k.d,o)
o=$.pw()[255+r-l]
J.bP(k.a,k.d+e,o)}k.d+=f}},
Td(d,e){var x=J.u(d.a,d.d+-2*e),w=-e,v=J.u(d.a,d.d+w),u=J.u(d.a,d.d),t=J.u(d.a,d.d+e),s=3*(u-v)+$.ciT()[1020+x-t],r=$.aUb()[112+D.c.l4(D.c.P(s+4,3),32)],q=$.aUb()[112+D.c.l4(D.c.P(s+3,3),32)]
d.m(0,w,$.pw()[255+v+q])
d.m(0,0,$.pw()[255+u-r])},
anH(d,e,f){var x=J.u(d.a,d.d+-2*e),w=J.u(d.a,d.d+-e),v=J.u(d.a,d.d),u=J.u(d.a,d.d+e),t=$.aUa()
return t[255+x-w]>f||t[255+u-v]>f},
api(d,e,f){var x=J.u(d.a,d.d+-2*e),w=J.u(d.a,d.d+-e),v=J.u(d.a,d.d),u=J.u(d.a,d.d+e)
return 2*$.aUa()[255+w-v]+$.ciS()[255+x-u]<=f},
apj(d,e,f,g){var x=J.u(d.a,d.d+-4*e),w=J.u(d.a,d.d+-3*e),v=J.u(d.a,d.d+-2*e),u=J.u(d.a,d.d+-e),t=J.u(d.a,d.d),s=J.u(d.a,d.d+e),r=J.u(d.a,d.d+2*e),q=J.u(d.a,d.d+3*e),p=$.aUa(),o=255+v
if(2*p[255+u-t]+$.ciS()[o-s]>f)return!1
return p[255+x-w]<=g&&p[255+w-v]<=g&&p[o-u]<=g&&p[255+q-r]<=g&&p[255+r-s]<=g&&p[255+s-t]<=g},
vA(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=new Int32Array(16)
for(x=0,w=0,v=0;v<4;++v){u=x+8
t=J.u(d.a,d.d+x)+J.u(d.a,d.d+u)
s=J.u(d.a,d.d+x)-J.u(d.a,d.d+u)
u=x+4
r=D.c.P(J.u(d.a,d.d+u)*35468,16)
q=x+12
p=D.c.P(J.u(d.a,d.d+q)*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.c.P(J.u(d.a,d.d+u)*85627,16)
q=D.c.P(J.u(d.a,d.d+q)*35468,16)
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
A.Ec(e,l,0,0,t+n)
A.Ec(e,l,1,0,s+o)
A.Ec(e,l,2,0,s-o)
A.Ec(e,l,3,0,t-n);++w
l+=32}},
Qu(d,e,f,g){this.vA(e,f)
if(g)this.vA(A.c8(e,null,16),A.c8(f,null,4))},
Qv(d,e){var x,w,v=J.u(d.a,d.d)+4
for(x=0;x<4;++x)for(w=0;w<4;++w)A.Ec(e,0,w,x,v)},
aF1(d,e){var x=this,w=null
if(J.u(d.a,d.d)!==0)x.Qv(d,e)
if(J.u(d.a,d.d+16)!==0)x.Qv(A.c8(d,w,16),A.c8(e,w,4))
if(J.u(d.a,d.d+32)!==0)x.Qv(A.c8(d,w,32),A.c8(e,w,128))
if(J.u(d.a,d.d+48)!==0)x.Qv(A.c8(d,w,48),A.c8(e,w,132))}}
A.bHH.prototype={}
A.bHL.prototype={}
A.bHN.prototype={}
A.a7_.prototype={}
A.bHM.prototype={}
A.bHD.prototype={}
A.K9.prototype={}
A.aBM.prototype={}
A.aBO.prototype={}
A.aBN.prototype={}
A.aBP.prototype={}
A.a71.prototype={
NT(){var x,w=this.b
if(w.j8(8)!==47)return!1
x=this.c
x.f=C.wJ
x.a=w.j8(14)+1
x.b=w.j8(14)+1
x.d=w.j8(1)!==0
if(w.j8(3)!==0)return!1
return!0},
o9(d){var x,w,v,u,t,s=this,r=null
s.e=0
if(!s.NT())return r
x=s.c
s.L4(x.a,x.b,!0)
s.aio()
w=x.a
s.d=A.hA(r,r,C.a6,0,C.bg,x.b,r,0,4,r,C.a6,w,!1)
w=s.ch
w.toString
v=x.a
u=x.b
if(!s.a3i(w,v,u,u,s.gbh1()))return r
x=x.w
if(x.length!==0){t=A.cP(new B.e2(x),!1,r,0)
x=s.d
x.toString
x.e=A.ctQ(t)}return s.d},
aio(){var x,w=this,v=w.c,u=v.a
v=u*v.b+u
x=new Uint32Array(v+u*16)
w.ch=x
w.CW=J.d_(D.bl.gag(x),0,null)
w.cx=v
return!0},
bhH(d){var x,w,v,u=this,t=u.b,s=t.j8(2),r=u.ay,q=D.c.eq(1,s)
if((r&q)>>>0!==0)return!1
u.ay=(r|q)>>>0
x=new A.aBL(C.a5l)
u.ax.push(x)
r=C.aBw[s]
x.a=r
x.b=d[0]
x.c=d[1]
switch(r.a){case 0:case 1:t=t.j8(3)+2
x.e=t
x.d=u.L4(A.Ed(x.b,t),A.Ed(x.c,x.e),!1)
break
case 3:w=t.j8(8)+1
if(w>16)v=0
else if(w>4)v=1
else{t=w>2?2:3
v=t}d[0]=A.Ed(x.b,v)
x.e=v
x.d=u.L4(w,1,!1)
u.b0j(w,x)
break
case 2:break
default:throw B.f(A.c4("Invalid WebP transform type: "+s))}return!0},
L4(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(f)for(x=p.b,w=y.t,v=e,u=d;x.j8(1)!==0;){t=B.a([u,v],w)
if(!p.bhH(t))throw B.f(A.c4("Invalid Transform"))
u=t[0]
v=t[1]}else{v=e
u=d}x=p.b
if(x.j8(1)!==0){s=x.j8(4)
if(!(s>=1&&s<=11))throw B.f(A.c4("Invalid Color Cache"))}else s=0
if(!p.bhx(u,v,s,f))throw B.f(A.c4("Invalid Huffman Codes"))
if(s>0){x=D.c.eq(1,s)
p.r=x
p.w=new A.bHI(new Uint32Array(x),32-s)}else p.r=0
x=p.c
x.a=u
x.b=v
r=p.y
p.z=A.Ed(u,r)
p.x=r===0?4294967295:D.c.eq(1,r)-1
if(f){p.e=0
return null}q=new Uint32Array(u*v)
if(!p.a3i(q,u,v,v,null))throw B.f(A.c4("Failed to decode image data."))
p.e=0
return q},
a3i(a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=a0.e,a2=D.c.hu(a1,a9),a3=D.c.ap(a1,a9),a4=a0.amg(a3,a2),a5=a0.e,a6=a9*b0,a7=a9*b1
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
a4=a0.at[p]}if(u.a>=32)u.C_()
r=a4.a
o=r[0].Ap(u)
n=0
if(o<256){m=r[1].Ap(u)
if(u.a>=32)u.C_()
l=A.cEv(r[2].Ap(u),o,m,r[3].Ap(u))
a1&2&&B.A(a8)
a8[a5]=l;++a5;++a3
if(a3>=a9){++a2
if(D.c.ap(a2,16)===0&&t)b2.$1(a2)
if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.c.fX(j*506832829>>>0,r)
k&2&&B.A(q)
q[i]=j;++s}a3=n}}else if(o<280){h=a0.TG(o-256)
g=r[4].Ap(u)
if(u.a>=32)u.C_()
f=a0.aq9(a9,a0.TG(g))
if(a5<f||a6-a5<h)return!1
else{e=a5-f
for(d=0;d<h;++d){r=a8[e+d]
a1&2&&B.A(a8)
a8[a5+d]=r}a5+=h}a3+=h
for(;a3>=a9;){a3-=a9;++a2
if(D.c.ap(a2,16)===0&&t)b2.$1(a2)}if(a5<a7){if((a3&v)>>>0!==0){p=a0.Lq(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.c.fX(j*506832829>>>0,r)
k&2&&B.A(q)
q[i]=j;++s}}}else if(o<x){for(;s<a5;){r=a8[s]
i=D.c.fX(r*506832829>>>0,w.b)
q=w.a
q.$flags&2&&B.A(q)
q[i]=r;++s}r=w.a
q=r[o-280]
a1&2&&B.A(a8)
a8[a5]=q;++a5;++a3
if(a3>=a9){++a2
if(D.c.ap(a2,16)===0&&t)b2.$1(a2)
for(q=w.b,k=r.$flags|0;s<a5;){j=a8[s]
i=D.c.fX(j*506832829>>>0,q)
k&2&&B.A(r)
r[i]=j;++s}a3=n}}else return!1}if(t)b2.$1(a2)
if(r.d>=q&&u.a>=64&&a5<a6)return!1
a0.e=a5
return!0},
ba4(){var x,w,v,u
if(this.r>0)return!1
for(x=this.as,w=this.at,v=0;v<x;++v){u=w[v].a
if(u[1].f>1)return!1
if(u[2].f>1)return!1
if(u[3].f>1)return!1}return!0},
b0r(d){var x,w,v,u,t,s,r=this,q=r.f,p=d-q
if(p<=0)return
x=r.c
r.aiy(p,x.a*q)
w=x.a
v=w*p
u=w*r.f
x=r.ch
x.toString
q=r.cx
q.toString
t=A.cP(x,!1,null,q)
for(s=0;s<v;++s){q=r.cy
q.toString
x=D.c.P(J.u(t.a,t.d+s),8)
q.$flags&2&&B.A(q)
q[u+s]=x&255}r.f=d},
aYy(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=o.e,m=D.c.hu(n,d),l=D.c.ap(n,d),k=o.amg(l,m),j=o.e,i=d*e,h=d*f,g=o.x
n=o.b
while(!0){x=n.b
if(!(!(x.d>=x.c&&n.a>=64)&&j<h))break
if((l&g)>>>0===0){w=o.Lq(o.Q,o.z,o.y,l,m)
k=o.at[w]}if(n.a>=32)n.C_()
x=k.a
v=x[0].Ap(n)
if(v<256){x=o.CW
x===$&&B.b()
x.$flags&2&&B.A(x)
x[j]=v;++j;++l
if(l>=d){++m
if(D.c.ap(m,16)===0)o.a3F(m)
l=0}}else if(v<280){u=o.TG(v-256)
t=x[4].Ap(n)
if(n.a>=32)n.C_()
s=o.aq9(d,o.TG(t))
if(j>=s&&i-j>=u)for(x=o.CW,r=0;r<u;++r){x===$&&B.b()
q=j+r
p=x[q-s]
x.$flags&2&&B.A(x)
x[q]=p}else{o.e=j
return!0}j+=u
l+=u
for(;l>=d;){l-=d;++m
if(D.c.ap(m,16)===0)o.a3F(m)}if(j<h&&(l&g)>>>0!==0){w=o.Lq(o.Q,o.z,o.y,l,m)
k=o.at[w]}}else return!1}o.a3F(m)
o.e=j
return!0},
a3F(d){var x,w,v,u=this,t=u.f,s=d-t,r=u.CW
r===$&&B.b()
x=A.cP(r,!1,null,u.c.a*t)
if(s>0){w=u.f
t=u.cy
t.toString
r=u.db
r.toString
v=A.cP(t,!1,null,r*w)
u.ax[0].bsX(w,w+s,x,v)}u.f=d},
bh2(d){var x,w,v,u,t,s=this,r=s.c,q=r.a,p=s.f,o=d-p
if(o<=0)return
s.aiy(o,q*p)
q=s.cx
q.toString
x=s.f
w=q
v=0
for(;v<o;++v,++x)for(u=0;u<r.a;++u,++w){t=s.ch[w]
q=s.d.a
if(q!=null)q.kA(u,x,t>>>16&255,t>>>8&255,t&255,t>>>24&255)}s.f=d},
aiy(d,e){var x,w,v,u=this,t=u.ax,s=t.length,r=u.c.a,q=u.f,p=q+d,o=u.cx
o.toString
x=u.ch
x.toString
D.bl.dM(x,o,o+r*d,x,e)
for(w=e;v=s-1,s>0;w=o,s=v){r=t[v]
x=u.ch
x.toString
r.bBe(q,p,x,w,x,o)}},
bhx(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=1
if(g&&l.b.j8(1)!==0){x=l.b.j8(3)+2
w=A.Ed(d,x)
v=A.Ed(e,x)
u=w*v
t=l.L4(w,v,!1)
l.y=x
for(s=0;s<u;++s){r=t[s]>>>8&65535
t.$flags&2&&B.A(t)
t[s]=r
if(r>=k)k=r+1}}else t=null
q=J.iP(k,y.O)
for(p=0;p<k;++p)q[p]=A.cQu()
for(o=f>0,s=0;s<k;++s)for(n=0;n<5;++n){m=C.atm[n]
if(n===0&&o)m+=D.c.eq(1,f)
if(!l.bhv(m,q[s].a[n]))return!1}l.Q=t
l.as=k
l.at=q
return!0},
bhv(d,e){var x,w,v,u,t,s,r,q,p,o=this.b
if(o.j8(1)!==0){x=y.t
w=B.a([0,0],x)
v=B.a([0,0],x)
u=B.a([0,0],x)
t=o.j8(1)+1
w[0]=o.j8(o.j8(1)===0?1:8)
v[0]=0
x=t-1
u[0]=x
if(t===2){w[1]=o.j8(8)
v[1]=1
u[1]=x}s=e.brO(u,v,w,d,t)}else{r=new Int32Array(19)
q=o.j8(4)+4
if(q>19)return!1
u=new Int32Array(d)
for(p=0;p<q;++p)r[C.avS[p]]=o.j8(3)
s=this.bhw(r,d,u)
if(s)s=e.awl(u,d)}return s},
bhw(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.cuC()
if(!j.awl(d,19))return!1
x=this.b
if(x.j8(1)!==0){w=2+x.j8(2+2*x.j8(3))
if(w>e)return!1}else w=e
for(v=f.$flags|0,u=0,t=8;u<e;w=s){s=w-1
if(w===0)break
if(x.a>=32)x.C_()
r=j.Ap(x)
if(r<16){q=u+1
v&2&&B.A(f)
f[u]=r
if(r!==0)t=r
u=q}else{p=r-16
o=C.apx[p]
n=C.apS[p]
m=x.j8(o)+n
if(u+m>e)return!1
else{l=r===16?t:0
for(;k=m-1,m>0;m=k,u=q){q=u+1
v&2&&B.A(f)
f[u]=l}}}}return!0},
TG(d){var x
if(d<4)return d+1
x=D.c.P(d-2,1)
return D.c.eq(2+(d&1),x)+this.b.j8(x)+1},
aq9(d,e){var x,w
if(e>120)return e-120
else{x=C.atD[e-1]
w=(x>>>4)*d+(8-(x&15))
return w>=1?w:1}},
b0j(d,e){var x,w,v,u,t,s,r=D.c.eq(1,D.c.hA(8,e.e)),q=new Uint32Array(r),p=e.d
p.toString
x=J.d_(D.bl.gag(p),0,null)
w=J.d_(D.bl.gag(q),0,null)
q[0]=e.d[0]
v=4*d
for(p=w.$flags|0,u=4;u<v;++u){t=x[u]
s=w[u-4]
p&2&&B.A(w)
w[u]=t+s&255}for(v=4*r;u<v;++u){p&2&&B.A(w)
w[u]=0}e.d=q
return!0},
Lq(d,e,f,g,h){if(f===0)return 0
d.toString
return d[e*D.c.P(h,f)+D.c.P(g,f)]},
amg(d,e){var x=this,w=x.Lq(x.Q,x.z,x.y,d,e)
return x.at[w]}}
A.aqh.prototype={
by2(d){return this.b0r(d)}}
A.aBK.prototype={
aDa(){var x,w,v=this.a
if(v<32){x=this.c
w=D.c.fX(x[0],v)+((x[1]&C.B1[v])>>>0)*(C.B1[32-v]+1)}else{x=this.c
w=v===32?x[1]:D.c.fX(x[1],v-32)}return w},
j8(d){var x,w=this,v=w.b
if(!(v.d>=v.c&&w.a>=64)&&d<25){v=w.aDa()
x=C.B1[d]
w.a+=d
w.C_()
return(v&x)>>>0}else throw B.f(A.c4("Not enough data in input."))},
C_(){var x,w,v,u=this,t=u.b,s=u.c,r=s.$flags|0,q=t.c
while(!0){if(!(u.a>=8&&t.d<q))break
x=J.u(t.a,t.d++)
w=s[0]
v=s[1]
r&2&&B.A(s)
s[0]=(w>>>8)+(v&255)*16777216
s[1]=v>>>8
s[1]=(s[1]|x*16777216)>>>0
u.a-=8}}}
A.bHI.prototype={}
A.Ka.prototype={
J(){return"VP8LImageTransformType."+this.b}}
A.aBL.prototype={
bBe(d,e,f,g,h,i){var x,w,v,u,t=this,s=t.b
switch(t.a.a){case 2:t.bpQ(h,i,i+(e-d)*s)
break
case 0:t.bGL(d,e,h,i)
if(e!==t.c){x=i-s
D.bl.dM(h,x,x+s,f,i+(e-d-1)*s)}break
case 1:t.bsY(d,e,h,i)
break
case 3:if(g===i&&t.e>0){w=e-d
v=w*A.Ed(s,t.e)
u=i+w*s-v
D.bl.dM(h,u,u+v,f,i)
t.axl(d,e,f,u,h,i)}else t.axl(d,e,f,g,h,i)
break}},
bsX(d,e,f,g){var x,w,v,u,t,s,r=this.e,q=D.c.hA(8,r),p=this.b,o=this.d
if(q<8){x=D.c.eq(1,r)-1
w=D.c.eq(1,q)-1
for(v=d;v<e;++v)for(u=0,t=0;t<p;++t){if((t&x)>>>0===0){u=J.u(f.a,f.d);++f.d}r=o[(u&w)>>>0]
J.bP(g.a,g.d,r>>>8&255);++g.d
u=D.c.P(u,q)}}else for(v=d;v<e;++v)for(t=0;t<p;++t){s=J.u(f.a,f.d);++f.d
r=o[s]
J.bP(g.a,g.d,r>>>8&255);++g.d}},
axl(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=this.e,o=D.c.hA(8,p),n=this.b,m=this.d
if(o<8){x=D.c.eq(1,p)-1
w=D.c.eq(1,o)-1
for(p=h.$flags|0,v=d;v<e;++v)for(u=0,t=0;t<n;++t,i=r){if((t&x)>>>0===0){s=g+1
u=f[g]>>>8&255
g=s}r=i+1
q=m[u&w]
p&2&&B.A(h)
h[i]=q
u=D.c.hA(u,o)}}else for(p=h.$flags|0,v=d;v<e;++v)for(t=0;t<n;++t,i=r,g=s){r=i+1
s=g+1
q=m[f[g]>>>8&255]
p&2&&B.A(h)
h[i]=q}},
bsY(a2,a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.b,e=g.e,d=D.c.eq(1,e)-1,a0=A.Ed(f,e),a1=D.c.P(a2,g.e)*a0
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
o=$.oh()
o.$flags&2&&B.A(o)
o[0]=p
p=$.px()
n=p[0]
o[0]=q
m=p[0]
l=$.aUd()
l.$flags&2&&B.A(l)
l[0]=n*m
k=$.ciV()
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
e&2&&B.A(a4)
a4[s]=(r&4278255360|j<<16|((r&255)+(i>>>5)>>>0)+(h>>>5)>>>0&255)>>>0}a5+=f;++x
if((x&d)>>>0===0)a1+=a0}},
bGL(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=this,n=o.b
if(d===0){A.bHJ(f,g,4278190080)
for(x=1;x<n;++x){w=g+x
A.bHJ(f,w,f[w-1])}g+=n;++d}w=o.e
v=D.c.eq(1,w)-1
u=A.Ed(n,w)
t=D.c.P(d,o.e)*u
for(s=d;s<e;){A.bHJ(f,g,f[g-n])
r=t+1
q=$.czP[o.d[t]>>>8&15]
for(x=1;x<n;++x){if((x&v)>>>0===0){p=r+1
q=$.czP[o.d[r]>>>8&15]
r=p}w=g+x
A.bHJ(f,w,q.$3(f,f[w-1],w-n))}g+=n;++s
if((s&v)>>>0===0)t+=u}},
bpQ(d,e,f){var x,w,v,u
for(x=d.$flags|0;e<f;e=u){w=d[e]
v=w>>>8&255
u=e+1
x&2&&B.A(d)
d[e]=(w&4278255360|(w&16711935)+(v<<16|v)&16711935)>>>0}}}
A.bIy.prototype={
gev(){var x=this,w=x.d
if(w>1||x.e>=4||x.f>1||x.r!==0)return!1
return!0},
NS(d,e,f,g){var x,w,v,u,t,s,r=this
if(!r.gev())return!1
x=C.aCi[r.e]
if(r.d===0){w=r.b
v=e*w
u=r.a
D.A.dM(g,v,f*w,u.a,u.d-u.b+v)}else{w=e+f
u=r.x
u===$&&B.b()
u.cy=g
t=u.c
if(r.y)w=u.aYy(t.a,t.b,w)
else{s=u.ch
s.toString
u=u.a3i(s,t.a,t.b,w,u.gby1())
w=u}if(!w)return!1}if(x!=null){w=r.b
x.$6(w,r.c,w,e,f,g)}if(r.f===1)if(!r.aZq(g,r.b,r.c,e,f))return!1
if(e+f===r.c)r.w=!0
return!0},
aZq(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
A.a7g.prototype={
aTe(d,e){var x=this,w=d.df()
x.r=0
x.f=(w&1)!==0
x.w=d.d-d.b
x.x=e-16}}
A.aqi.prototype={}
A.apD.prototype={
a7w(d){var x,w=this
if(d===0)return!1
x=(d<<1>>>0)-1
w.e=x
x=new Int32Array(x<<1>>>0)
w.d=x
x[1]=-1
w.f=1
D.A.kW(w.a,0,128,255)
return!0},
awl(d,e){var x,w,v,u,t,s=this
for(x=0,w=0,v=0;v<e;++v)if(d[v]>0){++x
w=v}if(!s.a7w(x))return!1
if(x===1){if(w<0||w>=e)return!1
return s.a2r(w,0,0)}u=new Int32Array(e)
if(!s.b92(d,e,u))return!1
for(v=0;v<e;++v){t=d[v]
if(t>0)if(!s.a2r(v,u[v],t))return!1}return s.f===s.e},
brO(d,e,f,g,h){var x,w,v,u=this
if(!u.a7w(h))return!1
for(x=0;x<h;++x){w=e[x]
if(w!==-1){v=f[x]
if(v>=g)return u.f===u.e
if(!u.a2r(v,w,d[x]))return u.f===u.e}}return u.f===u.e},
Ap(d){var x,w,v=this,u=d.aDa(),t=d.a,s=u&127,r=v.a[s]
if(r<=7){d.a=t+r
return v.b[s]}x=v.c[s]
t+=7
u=u>>>7
do{w=v.d
w===$&&B.b()
x=x+w[(x<<1>>>0)+1]+(u&1)
u=u>>>1;++t}while(v.app(x))
d.a=t
return v.d[x<<1>>>0]},
a2r(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
if(f<=7){x=l.arf(e,f)
for(w=D.c.eP(1,7-f),v=l.b,u=v.$flags|0,t=l.a,s=t.$flags|0,r=0;r<w;++r){q=(x|D.c.eP(r,f))>>>0
u&2&&B.A(v)
v[q]=d
s&2&&B.A(t)
t[q]=f}}else x=l.arf(D.c.nW(e,f-7),7)
for(w=l.c,v=w.$flags|0,p=7,o=0;n=f-1,f>0;f=n){u=l.e
if(o>=u)return!1
t=l.d
t===$&&B.b()
s=(o<<1>>>0)+1
m=t[s]
if(m<0){m=l.f
if(m===u)return!1
t.$flags&2&&B.A(t)
t[s]=m-o
l.f=m+2
t[(m<<1>>>0)+1]=-1
t[(m+1<<1>>>0)+1]=-1}else if(m===0)return!1
o+=t[s]+(D.c.nW(e,n)&1);--p
if(p===0){v&2&&B.A(w)
w[x]=o}}if(l.bce(o))l.bcf(o,0)
else if(l.app(o))return!1
w=l.d
w===$&&B.b()
w.$flags&2&&B.A(w)
w[o<<1>>>0]=d
return!0},
arf(d,e){return D.c.fX((C.RJ[d&15]<<4|C.RJ[D.c.P(d,4)])>>>0,8-e)},
bcf(d,e){var x=this.d
x===$&&B.b()
x.$flags&2&&B.A(x)
x[(d<<1>>>0)+1]=e},
app(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]!==0},
bce(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]<0},
b92(d,e,f){var x,w,v,u,t,s,r,q,p=new Int32Array(16),o=new Int32Array(16)
for(x=0,w=0;x<e;++x){v=d[x]
if(v>w)w=v}if(w>15)return!1
for(x=0;x<e;++x){u=d[x]
p[u]=p[u]+1}p[0]=0
o[0]=-1
for(t=1,s=0;t<=w;++t){s=s+p[t-1]<<1>>>0
o[t]=s}for(u=f.$flags|0,x=0;x<e;++x){r=d[x]
if(r>0){q=o[r]
o[r]=q+1
u&2&&B.A(f)
f[x]=q}else{u&2&&B.A(f)
f[x]=-1}}return!0}}
A.ZM.prototype={
i(d,e){return this.a[e]}}
A.Sz.prototype={
J(){return"WebPFormat."+this.b}}
A.aCc.prototype={}
A.aqj.prototype={}
A.bIz.prototype={
Id(d){var x=A.cP(d,!1,null,0)
this.b=x
if(!this.amd(x))return!1
return!0},
ow(d){var x,w=this,v=null,u=A.cP(d,!1,v,0)
w.b=u
if(!w.amd(u))return v
u=new A.aqj(C.nU,B.a([],y.J))
w.a=u
x=w.b
x.toString
if(!w.auX(x,u))return v
u=w.a
switch(u.f.a){case 3:u.as=u.z.length
return u
case 2:x=w.b
x.toString
x.d=u.ay
if(!A.cnj(x,u).NT())return v
u=w.a
u.as=u.z.length
return u
case 1:x=w.b
x.toString
x.d=u.ay
if(!A.cnh(x,u).NT())return v
u=w.a
u.as=u.z.length
return u
case 0:throw B.f(A.c4("Unknown format for WebP"))}},
k5(d){var x,w,v,u,t=this,s=t.b
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
return t.akn(s.B2(x,w),d)}w=x.f
if(w===C.wJ){s.toString
u=s.B2(x.ch,x.ay)
s=t.a
s.toString
return A.cnj(u,s).o9(0)}else if(w===C.E5){s.toString
u=s.B2(x.ch,x.ay)
s=t.a
s.toString
return A.cnh(u,s).o9(0)}return null},
nv(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=null
if(p.ow(e)==null)return o
x=p.a.e
if(!x)return p.k5(0)
for(w=o,v=w,u=0;x=p.a,u<x.as;++u){f=x.z[u]
t=p.k5(u)
if(t==null)continue
t.y=f.e
if(v==null||w==null){x=p.a
s=x.a
x=x.b
r=t.gq8()
q=t.a
q=q==null?o:q.gdu()
if(q==null)q=C.a6
v=A.hA(o,o,q,t.y,C.bg,x,o,0,r,o,C.a6,s,!1)
w=v}else{w=A.BB(w,!1,!1)
x=f.f
x===$&&B.b()
if(x){x=w.a
if(x!=null)x.nq(0,o)}}A.coM(w,t,C.xU,o,o,f.a,f.b,o,o,o,o)
v.nn(w)}return v},
akn(d,e){var x,w,v,u=null,t=B.a([],y.J),s=new A.aqj(C.nU,t)
if(!this.auX(d,s))return u
if(s.f===C.nU)return u
s.as=this.a.as
if(s.e){x=t.length
if(e>=x)return u
w=t[e]
t=w.x
t===$&&B.b()
x=w.w
x===$&&B.b()
return this.akn(d.B2(t,x),e)}else{v=d.B2(s.ch,s.ay)
t=s.f
if(t===C.wJ)return A.cnj(v,s).o9(0)
else if(t===C.E5)return A.cnh(v,s).o9(0)}return u},
amd(d){if(d.qf(4)!=="RIFF")return!1
d.an()
if(d.qf(4)!=="WEBP")return!1
return!0},
auX(d,e){var x,w,v,u,t,s,r,q,p,o,n,m
for(x=d.c,w=d.b;d.d<x;){v=d.qf(4)
u=d.an()
t=u+1>>>1<<1>>>0
s=d.d
r=s-w
switch(v){case"VP8X":if(!this.b2I(d,e))return!1
break
case"VP8 ":e.ay=r
e.ch=u
e.f=C.E5
break
case"VP8L":e.ay=r
e.ch=u
e.f=C.wJ
break
case"ALPH":e.toString
s=d.a
q=d.e
p=J.bk(s)
s=new A.lM(s,0,p,0,q)
e.at=s
s.d=d.d
d.d+=t
break
case"ANIM":e.f=C.b7N
o=d.an()
s=new Uint8Array(4)
s[0]=o>>>8&255
s[1]=o>>>16&255
s[2]=o>>>24&255
s[3]=o&255
d.bN()
break
case"ANMF":if(!this.b1v(d,e,u))return!1
break
case"ICCP":e.toString
n=d.jW(u)
d.d=d.d+(n.c-n.d)
n.hK()
break
case"EXIF":e.toString
e.w=d.qf(u)
break
case"XMP ":e.toString
d.qf(u)
break
default:d.d=s+t
break}s=d.d
m=t-(s-w-r)
if(m>0)d.d=s+m}if(!e.d)e.d=e.at!=null
return e.f!==C.nU},
b2I(d,e){var x,w,v,u,t=d.df()
if((t&192)!==0)return!1
x=D.c.P(t,4)
w=D.c.P(t,1)
if((t&1)!==0)return!1
if(d.rF()!==0)return!1
v=d.rF()
u=d.rF()
e.a=v+1
e.b=u+1
e.e=(w&1)!==0
e.d=(x&1)!==0
return!0},
b1v(d,e,f){var x,w=d.rF(),v=d.rF()
d.rF()
x=new A.aqi(w*2,v*2,d.rF()+1,d.rF())
x.aTe(d,f)
if(x.r!==0)return!1
e.z.push(x)
return!0}}
A.beT.prototype={
J(){return"IccProfileCompression."+this.b}}
A.a_7.prototype={
btf(){var x,w=this
if(w.b===C.zH)return w.c
x=y.D.a(C.FP.k7(w.c))
w.c=x
w.b=C.zH
return x}}
A.aoJ.prototype={
J(){return"FrameType."+this.b}}
A.BC.prototype={
gkY(){var x=this.x
return x===$?this.x=B.a([],y.g):x},
aSK(d,e,f,g){var x,w,v,u=this,t=d.gdu(),s=d.gq8(),r=d.a
u.akc(g,e,t,s,r==null?null:r.geS())
t=d.b
if(t!=null)u.b=B.j6(t,y.N,y.I)
t=d.d
if(t!=null){s=y.N
u.d=B.j6(t,s,s)}u.gkY().push(u)
if(!f){x=d.gkY().length
for(t=y.g,w=1;w<x;++w){v=d.x
u.nn(A.apO((v===$?d.x=B.a([],t):v)[w],e,!1,g))}}},
aSJ(d,e,f){var x,w,v,u,t=this,s=d.b
if(s!=null)t.b=B.j6(s,y.N,y.I)
s=d.d
if(s!=null){x=y.N
t.d=B.j6(s,x,x)}t.gkY().push(t)
if(!e&&d.gkY().length>1){w=d.gkY().length
for(s=y.g,v=1;v<w;++v){u=d.x
t.nn(A.BB((u===$?d.x=B.a([],s):u)[v],!1,!1))}}},
nn(d){var x=this
if(d==null)d=A.BB(x,!0,!0)
d.z=x.gkY().length
if(D.b.gU(x.gkY())!==d)x.gkY().push(d)
return d},
WB(){return this.nn(null)},
akc(d,e,f,g,h){var x,w,v=this,u=null
switch(f.a){case 0:if(h==null){x=D.d.f9(d*g/8)
w=new A.Ot($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.f9(d/8)
w=new A.Ot($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 1:if(h==null){x=D.d.f9(d*(g<<1>>>0)/8)
w=new A.Ov($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.f9(d/4)
w=new A.Ov($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 2:if(h==null){if(g===2)x=d
else if(g===4)x=d*2
else x=g===3?D.d.f9(d*1.5):D.d.f9(d/2)
w=new A.Ox($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.f9(d/2)
w=new A.Ox($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 3:if(h==null)v.a=A.cuV(d,e,g)
else v.a=new A.Oy(new Uint8Array(d*e),h,d,e,1)
break
case 4:x=d*e
if(h==null)v.a=new A.Ou(new Uint16Array(x*g),u,d,e,g)
else v.a=new A.Ou(new Uint16Array(x),h,d,e,1)
break
case 5:v.a=A.cR1(d,e,g)
break
case 6:v.a=new A.a_d(new Int8Array(d*e*g),d,e,g)
break
case 7:v.a=new A.a_b(new Int16Array(d*e*g),d,e,g)
break
case 8:v.a=new A.a_c(new Int32Array(d*e*g),d,e,g)
break
case 9:v.a=A.cR_(d,e,g)
break
case 10:v.a=A.cR0(d,e,g)
break
case 11:v.a=new A.a_a(new Float64Array(d*e*4*g),d,e,g)
break}},
j(d){var x=this
return"Image("+x.gcX(0)+", "+x.gb4(0)+", "+x.gdu().b+", "+x.gq8()+")"},
gcX(d){var x=this.a
x=x==null?null:x.a
return x==null?0:x},
gb4(d){var x=this.a
x=x==null?null:x.b
return x==null?0:x},
gdu(){var x=this.a
x=x==null?null:x.gdu()
return x==null?C.a6:x},
gwQ(){var x=this.e
return x==null?this.e=new A.NO(B.H(y.N,y.P)):x},
aJN(d,e){var x=this,w=x.b;(w==null?x.b=B.H(y.N,y.I):w).m(0,d,e)
if(x.b.a===0)x.b=null},
ga1(d){var x=this.a
return x.ga1(x)},
gag(d){var x=this.a
x=x==null?null:x.gag(x)
if(x==null)x=D.A.gag(new Uint8Array(0))
return x},
gq8(){var x=this.a
x=x==null?null:x.geS()
x=x==null?null:x.b
if(x==null){x=this.a
x=x==null?null:x.c}return x==null?0:x},
grl(){var x=this.a
return(x==null?null:x.geS())!=null},
gmM(){var x=this.a
x=x==null?null:x.gmM()
return x==null?0:x},
aBd(d,e){return d>=0&&e>=0&&d<this.gcX(0)&&e<this.gb4(0)},
nS(d,e,f,g){var x=this.a
x=x==null?null:x.nS(d,e,f,g)
if(x==null)x=new A.xv(new Uint8Array(0))
return x},
ek(d,e,f){var x=this.a
x=x==null?null:x.ek(d,e,f)
return x==null?new A.ff():x},
nT(d,e){return this.ek(d,e,null)},
ky(d,e){if(d<0||d>=this.gcX(0)||e<0||e>=this.gb4(0))return new A.ff()
return this.ek(d,e,null)},
aHL(d,e,f){switch(f.a){case 0:return this.ky(D.d.D(d),D.d.D(e))
case 1:case 3:return this.aHM(d,e)
case 2:return this.aHK(d,e)}},
aHM(d,e){var x,w,v,u,t,s,r=this,q=D.d.D(d),p=q-(d>=0?0:1),o=p+1
q=D.d.D(e)
x=q-(e>=0?0:1)
w=x+1
q=new A.bfv(d-p,e-x)
v=r.ky(p,x)
u=w>=r.gb4(0)?v:r.ky(p,w)
t=o>=r.gcX(0)?v:r.ky(o,x)
s=o>=r.gcX(0)||w>=r.gb4(0)?v:r.ky(o,w)
return r.nS(q.$4(v.gaw(v),t.gaw(t),u.gaw(u),s.gaw(s)),q.$4(v.gaK(),t.gaK(),u.gaK(),s.gaK()),q.$4(v.gaL(v),t.gaL(t),u.gaL(u),s.gaL(s)),q.$4(v.gaP(v),t.gaP(t),u.gaP(u),s.gaP(s)))},
aHK(d0,d1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=D.d.D(d0),c6=c5-(d0>=0?0:1),c7=c6-1,c8=c6+1,c9=c6+2
c5=D.d.D(d1)
x=c5-(d1>=0?0:1)
w=x-1
v=x+1
u=x+2
t=d0-c6
s=d1-x
c5=new A.bfu()
r=c4.ky(c6,x)
q=c7<0
p=!q
o=!p||w<0?r:c4.ky(c7,w)
n=q?r:c4.ky(c6,w)
m=w<0
l=m||c8>=c4.gcX(0)?r:c4.ky(c8,w)
k=c9>=c4.gcX(0)||m?r:c4.ky(c9,w)
j=c5.$5(t,o.gaw(o),n.gaw(n),l.gaw(l),k.gaw(k))
i=c5.$5(t,o.gaK(),n.gaK(),l.gaK(),k.gaK())
h=c5.$5(t,o.gaL(o),n.gaL(n),l.gaL(l),k.gaL(k))
g=c5.$5(t,o.gaP(o),n.gaP(n),l.gaP(l),k.gaP(k))
f=q?r:c4.ky(c7,x)
e=c8>=c4.gcX(0)?r:c4.ky(c8,x)
d=c9>=c4.gcX(0)?r:c4.ky(c9,x)
a0=c5.$5(t,f.gaw(f),r.gaw(r),e.gaw(e),d.gaw(d))
a1=c5.$5(t,f.gaK(),r.gaK(),e.gaK(),d.gaK())
a2=c5.$5(t,f.gaL(f),r.gaL(r),e.gaL(e),d.gaL(d))
a3=c5.$5(t,f.gaP(f),r.gaP(r),e.gaP(e),d.gaP(d))
a4=!p||v>=c4.gb4(0)?r:c4.ky(c7,v)
a5=v>=c4.gb4(0)?r:c4.ky(c6,v)
a6=c8>=c4.gcX(0)||v>=c4.gb4(0)?r:c4.ky(c8,v)
a7=c9>=c4.gcX(0)||v>=c4.gb4(0)?r:c4.ky(c9,v)
a8=c5.$5(t,a4.gaw(a4),a5.gaw(a5),a6.gaw(a6),a7.gaw(a7))
a9=c5.$5(t,a4.gaK(),a5.gaK(),a6.gaK(),a7.gaK())
b0=c5.$5(t,a4.gaL(a4),a5.gaL(a5),a6.gaL(a6),a7.gaL(a7))
b1=c5.$5(t,a4.gaP(a4),a5.gaP(a5),a6.gaP(a6),a7.gaP(a7))
b2=!p||u>=c4.gb4(0)?r:c4.ky(c7,u)
b3=u>=c4.gb4(0)?r:c4.ky(c6,u)
b4=c8>=c4.gcX(0)||u>=c4.gb4(0)?r:c4.ky(c8,u)
b5=c9>=c4.gcX(0)||u>=c4.gb4(0)?r:c4.ky(c9,u)
b6=c5.$5(t,b2.gaw(b2),b3.gaw(b3),b4.gaw(b4),b5.gaw(b5))
b7=c5.$5(t,b2.gaK(),b3.gaK(),b4.gaK(),b5.gaK())
b8=c5.$5(t,b2.gaL(b2),b3.gaL(b3),b4.gaL(b4),b5.gaL(b5))
b9=c5.$5(t,b2.gaP(b2),b3.gaP(b3),b4.gaP(b4),b5.gaP(b5))
c0=c5.$5(s,j,a0,a8,b6)
c1=c5.$5(s,i,a1,a9,b7)
c2=c5.$5(s,h,a2,b0,b8)
c3=c5.$5(s,g,a3,b1,b9)
return c4.nS(D.d.D(c0),D.d.D(c1),D.d.D(c2),D.d.D(c3))},
xY(d,e,f){var x
if(y.c0.b(f))if(f.gfl(f).geS()!=null)if(this.grl()){x=this.a
if(x!=null)x.fd(d,e,f.gef(f),0,0)
return}x=this.a
if(x!=null)x.kA(d,e,f.gaw(f),f.gaK(),f.gaL(f),f.gaP(f))},
gcf(){var x=this.a
x=x==null?null:x.gcf()
return x==null?0:x},
nq(d,e){var x=this.a
return x==null?null:x.nq(0,e)},
S(d){return this.nq(0,null)},
axF(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
if(a5==null)a5=a2.gdu()
if(a6==null)a6=a2.gq8()
a4=C.XM.i(0,a5)
if(a5.a<3)a2.gdu()
x=!1
if(a5===a2.gdu())if(a6===a2.gq8()){w=a2.a
x=(w==null?a3:w.geS())==null}if(x)return A.BB(a2,!1,!1)
for(x=a2.gkY(),w=x.length,v=y.N,u=y.p,t=a3,s=0;s<x.length;x.length===w||(0,B.P)(x),++s,t=j){r=x[s]
q=r.a
p=q==null
o=p?a3:q.a
if(o==null)o=0
q=p?a3:q.b
if(q==null)q=0
p=r.e
p=p==null?a3:A.YX(p)
n=r.c
if(n==null)n=a3
else{m=n.a
l=n.b
n=n.c
n=new A.a_7(m,l,new Uint8Array(n.subarray(0,B.qy(0,a3,n.length))))}m=r.w
l=r.r
k=A.hA(a3,p,a5,r.y,m,q,n,l,a6,a3,C.a6,o,!1)
q=r.d
k.d=q!=null?B.j6(q,v,v):a3
if(t!=null){t.nn(k)
j=t}else j=k
q=k.a
i=q==null?a3:q.geS()
q=k.a
q=q==null?a3:q.geS()
h=q==null?a3:q.gdu()
if(h==null)h=a5
q=r.a
if(i!=null){g=B.H(u,u)
f=q==null?a3:q.ek(0,0,a3)
if(f==null)f=new A.ff()
for(q=k.a,q=q.ga1(q),e=a3,d=0;q.q();){a0=q.gL(q)
a1=A.cEv(D.d.fZ(f.giw()*255),D.d.fZ(f.gih()*255),D.d.fZ(f.giq()*255),0)
if(g.a3(0,a1)){p=g.i(0,a1)
p.toString
a0.sef(0,p)}else{g.m(0,a1,d)
a0.sef(0,d)
e=A.pr(f,a4,h,a6,e)
i.ph(d,e.gaw(e),e.gaK(),e.gaL(e));++d}f.q()}}else{f=q==null?a3:q.ek(0,0,a3)
if(f==null)f=new A.ff()
for(q=k.a,q=q.ga1(q);q.q();){A.pr(f,a4,a3,a3,q.gL(q))
f.q()}}}t.toString
return t},
o8(d){return this.axF(null,d,null)},
axE(d){return this.axF(null,null,d)},
bq9(d){var x,w,v,u
if(this.d==null){x=y.N
this.d=B.H(x,x)}for(x=new B.cc(d,d.r,d.e,B.p(d).h("cc<1>"));x.q();){w=x.d
v=this.d
v.toString
u=d.i(0,w)
u.toString
v.m(0,w,u)}},
aY9(d,e,f){var x,w=65536
switch(e.a){case 0:return null
case 1:return null
case 2:return null
case 3:x=d===C.cb?w:256
return new A.u3(new Uint8Array(x*f),x,f)
case 4:x=d===C.cb?w:256
return new A.auQ(new Uint16Array(x*f),x,f)
case 5:x=d===C.cb?w:256
return new A.a1P(new Uint32Array(x*f),x,f)
case 6:x=d===C.cb?w:256
return new A.auP(new Int8Array(x*f),x,f)
case 7:x=d===C.cb?w:256
return new A.auN(new Int16Array(x*f),x,f)
case 8:x=d===C.cb?w:256
return new A.auO(new Int32Array(x*f),x,f)
case 9:x=d===C.cb?w:256
return new A.auK(new Uint16Array(x*f),x,f)
case 10:x=d===C.cb?w:256
return new A.auL(new Float32Array(x*f),x,f)
case 11:x=d===C.cb?w:256
return new A.auM(new Float64Array(x*f),x,f)}}}
A.lK.prototype={
geS(){return null}}
A.Or.prototype={
qV(d,e){var x=this,w=x.d
if(e)w=new Uint16Array(w.length)
else w=new Uint16Array(B.bU(w))
return new A.Or(w,x.a,x.b,x.c)},
gdu(){return C.hA},
gag(d){return D.dM.gag(this.d)},
gmM(){return 16},
grJ(){return this.a*this.c*2},
ga1(d){return A.clN(this)},
qm(d,e,f,g,h){return A.u4(A.clN(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcf(){return 1},
grr(){return!0},
nS(d,e,f,g){var x=new Uint16Array(4),w=new A.Mv(x)
x[0]=A.fO(d)
x[1]=A.fO(e)
x[2]=A.fO(f)
x[3]=A.fO(g)
x=w
return x},
ek(d,e,f){if(f==null||!(f instanceof A.I2)||f.d!==this)f=A.clN(this)
f.hn(0,d,e)
return f},
nT(d,e){return this.ek(d,e,null)},
mz(d,e,f){var x=this.c,w=this.d,v=A.fO(f)
w.$flags&2&&B.A(w)
w[e*this.a*x+d*x]=v},
fd(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=A.fO(f)
v.$flags&2&&B.A(v)
v[w]=u
if(x>1){v[w+1]=A.fO(g)
if(x>2)v[w+2]=A.fO(h)}},
kA(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=A.fO(f)
v.$flags&2&&B.A(v)
v[w]=u
if(x>1){v[w+1]=A.fO(g)
if(x>2){v[w+2]=A.fO(h)
if(x>3)v[w+3]=A.fO(i)}}},
j(d){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
nq(d,e){}}
A.Os.prototype={
qV(d,e){var x=this,w=x.d
if(e)w=new Float32Array(w.length)
else w=new Float32Array(B.bU(w))
return new A.Os(w,x.a,x.b,x.c)},
gdu(){return C.j_},
gag(d){return D.eR.gag(this.d)},
gmM(){return 32},
ga1(d){return A.clO(this)},
qm(d,e,f,g,h){return A.u4(A.clO(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcf(){return 1},
grJ(){return this.a*this.c*4},
grr(){return!0},
nS(d,e,f,g){var x=new Float32Array(4),w=new A.Mw(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
ek(d,e,f){if(f==null||!(f instanceof A.I3)||f.d!==this)f=A.clO(this)
f.hn(0,d,e)
return f},
nT(d,e){return this.ek(d,e,null)},
mz(d,e,f){var x=this.c,w=this.d
w.$flags&2&&B.A(w)
w[e*this.a*x+d*x]=f},
fd(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.A(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
kA(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.A(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
nq(d,e){}}
A.a_a.prototype={
qV(d,e){var x=this,w=x.d
if(e)w=new Float64Array(w.length)
else w=new Float64Array(B.bU(w))
return new A.a_a(w,x.a,x.b,x.c)},
gdu(){return C.kr},
gag(d){return D.e6.gag(this.d)},
gu(d){return this.d.byteLength},
gmM(){return 64},
ga1(d){return A.clP(this)},
qm(d,e,f,g,h){return A.u4(A.clP(this),e,f,g,h)},
gcf(){return 1},
grJ(){return this.a*this.c*8},
grr(){return!0},
nS(d,e,f,g){var x=new Float64Array(4),w=new A.Mx(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
ek(d,e,f){if(f==null||!(f instanceof A.I4)||f.d!==this)f=A.clP(this)
f.hn(0,d,e)
return f},
nT(d,e){return this.ek(d,e,null)},
mz(d,e,f){var x=this.c,w=this.d
w.$flags&2&&B.A(w)
w[e*this.a*x+d*x]=f},
fd(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.A(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
kA(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.A(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
nq(d,e){}}
A.a_b.prototype={
qV(d,e){var x=this,w=x.d
if(e)w=new Int16Array(w.length)
else w=new Int16Array(B.bU(w))
return new A.a_b(w,x.a,x.b,x.c)},
gdu(){return C.kt},
gag(d){return D.jm.gag(this.d)},
ga1(d){return A.clQ(this)},
qm(d,e,f,g,h){return A.u4(A.clQ(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcf(){return 32767},
grr(){return!0},
gmM(){return 16},
grJ(){return this.a*this.c*2},
nS(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Int16Array(4),s=new A.My(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ek(d,e,f){if(f==null||!(f instanceof A.I5)||f.d!==this)f=A.clQ(this)
f.hn(0,d,e)
return f},
nT(d,e){return this.ek(d,e,null)},
mz(d,e,f){var x=this.c,w=this.d,v=D.d.D(f)
w.$flags&2&&B.A(w)
w[e*this.a*x+d*x]=v},
fd(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.A(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
kA(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.A(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
j(d){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
nq(d,e){}}
A.a_c.prototype={
qV(d,e){var x=this,w=x.d
if(e)w=new Int32Array(w.length)
else w=new Int32Array(B.bU(w))
return new A.a_c(w,x.a,x.b,x.c)},
gdu(){return C.ku},
gag(d){return D.ch.gag(this.d)},
gmM(){return 32},
grJ(){return this.a*this.c*4},
ga1(d){return A.clR(this)},
qm(d,e,f,g,h){return A.u4(A.clR(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcf(){return 2147483647},
grr(){return!0},
nS(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Int32Array(4),s=new A.Mz(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ek(d,e,f){if(f==null||!(f instanceof A.I6)||f.d!==this)f=A.clR(this)
f.hn(0,d,e)
return f},
nT(d,e){return this.ek(d,e,null)},
mz(d,e,f){var x=this.c,w=this.d,v=D.d.D(f)
w.$flags&2&&B.A(w)
w[e*this.a*x+d*x]=v},
fd(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.A(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
kA(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.A(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
j(d){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
nq(d,e){}}
A.a_d.prototype={
qV(d,e){var x=this,w=x.d
if(e)w=new Int8Array(w.length)
else w=new Int8Array(B.bU(w))
return new A.a_d(w,x.a,x.b,x.c)},
gdu(){return C.ks},
gag(d){return D.jn.gag(this.d)},
grJ(){return this.a*this.c},
ga1(d){return A.clS(this)},
qm(d,e,f,g,h){return A.u4(A.clS(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcf(){return 127},
grr(){return!0},
gmM(){return 8},
nS(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Int8Array(4),s=new A.MA(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ek(d,e,f){if(f==null||!(f instanceof A.I7)||f.d!==this)f=A.clS(this)
f.hn(0,d,e)
return f},
nT(d,e){return this.ek(d,e,null)},
mz(d,e,f){var x=this.c,w=this.d,v=D.d.D(f)
w.$flags&2&&B.A(w)
w[e*(this.a*x)+d*x]=v},
fd(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.A(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
kA(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.A(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
j(d){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
nq(d,e){}}
A.Ot.prototype={
bL_(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.ba()
this.d=x},
qV(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bU(v))}x=w.f
x=x==null?null:x.dZ(0)
return new A.Ot(v,w.e,x,w.a,w.b,w.c)},
gdu(){return C.f8},
gu(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gcf(){var x=this.f
x=x==null?null:x.gcf()
return x==null?1:x},
grr(){return!1},
gag(d){var x=this.d
x===$&&B.b()
return D.A.gag(x)},
gmM(){return 1},
ga1(d){return A.a22(this)},
qm(d,e,f,g,h){return A.u4(A.a22(this),e,f,g,h)},
nS(d,e,f,g){var x=new A.MD(4,0)
x.ij(D.d.D(d),D.d.D(e),D.d.D(f),D.d.D(g))
return x},
ek(d,e,f){if(f==null||!(f instanceof A.I8)||f.f!==this)f=A.a22(this)
f.hn(0,d,e)
return f},
nT(d,e){return this.ek(d,e,null)},
mz(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a22(w):x).hn(0,d,e)
w.r.kI(0,f)},
fd(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a22(w):x).hn(0,d,e)
w.r.kB(f,g,h)},
kA(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a22(w):x).hn(0,d,e)
w.r.ij(f,g,h,i)},
j(d){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
nq(d,e){},
grJ(){return this.e},
geS(){return this.f}}
A.Ou.prototype={
qV(d,e){var x,w=this,v=w.d
if(e)v=new Uint16Array(v.length)
else v=new Uint16Array(B.bU(v))
x=w.e
x=x==null?null:x.dZ(0)
return new A.Ou(v,x,w.a,w.b,w.c)},
gdu(){return C.cb},
gag(d){return D.dM.gag(this.d)},
gmM(){return 16},
gcf(){var x=this.e
x=x==null?null:x.gcf()
return x==null?65535:x},
grJ(){return this.a*this.c*2},
ga1(d){return A.clT(this)},
qm(d,e,f,g,h){return A.u4(A.clT(this),e,f,g,h)},
gu(d){return this.d.byteLength},
grr(){return!0},
nS(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Uint16Array(4),s=new A.ME(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ek(d,e,f){if(f==null||!(f instanceof A.I9)||f.d!==this)f=A.clT(this)
f.hn(0,d,e)
return f},
nT(d,e){return this.ek(d,e,null)},
mz(d,e,f){var x=this.c,w=this.d,v=D.d.D(f)
w.$flags&2&&B.A(w)
w[e*this.a*x+d*x]=v},
fd(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.A(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
kA(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.A(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
j(d){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
nq(d,e){},
geS(){return this.e}}
A.Ov.prototype={
bL0(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.ba()
this.d=x},
qV(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bU(v))}x=w.f
x=x==null?null:x.dZ(0)
return new A.Ov(v,w.e,x,w.a,w.b,w.c)},
gdu(){return C.fR},
gmM(){return 2},
gag(d){var x=this.d
x===$&&B.b()
return D.A.gag(x)},
ga1(d){return A.a23(this)},
qm(d,e,f,g,h){return A.u4(A.a23(this),e,f,g,h)},
gu(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gcf(){var x=this.f
x=x==null?null:x.gcf()
return x==null?3:x},
grr(){return!1},
nS(d,e,f,g){var x=new A.MF(4,0)
x.ij(D.d.D(d),D.d.D(e),D.d.D(f),D.d.D(g))
return x},
ek(d,e,f){if(f==null||!(f instanceof A.Ia)||f.f!==this)f=A.a23(this)
f.hn(0,d,e)
return f},
nT(d,e){return this.ek(d,e,null)},
mz(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a23(w):x).hn(0,d,e)
w.r.kJ(0,f)},
fd(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a23(w):x).hn(0,d,e)
w.r.kB(f,g,h)},
kA(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a23(w):x).hn(0,d,e)
w.r.ij(f,g,h,i)},
j(d){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
nq(d,e){},
grJ(){return this.e},
geS(){return this.f}}
A.Ow.prototype={
qV(d,e){var x=this,w=x.d
if(e)w=new Uint32Array(w.length)
else w=new Uint32Array(B.bU(w))
return new A.Ow(w,x.a,x.b,x.c)},
gdu(){return C.j0},
gag(d){return D.bl.gag(this.d)},
grJ(){return this.a*this.c*4},
gmM(){return 32},
gcf(){return 4294967295},
ga1(d){return A.clU(this)},
qm(d,e,f,g,h){return A.u4(A.clU(this),e,f,g,h)},
gu(d){return this.d.byteLength},
grr(){return!0},
nS(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Uint32Array(4),s=new A.MG(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ek(d,e,f){if(f==null||!(f instanceof A.Ib)||f.d!==this)f=A.clU(this)
f.hn(0,d,e)
return f},
nT(d,e){return this.ek(d,e,null)},
mz(d,e,f){var x=this.c,w=this.d,v=D.d.D(f)
w.$flags&2&&B.A(w)
w[e*this.a*x+d*x]=v},
fd(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.A(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
kA(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.A(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
j(d){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
nq(d,e){}}
A.Ox.prototype={
bL1(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.ba()
this.d=x},
qV(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bU(v))}x=w.f
x=x==null?null:x.dZ(0)
return new A.Ox(v,w.e,x,w.a,w.b,w.c)},
gdu(){return C.fS},
gag(d){var x=this.d
x===$&&B.b()
return D.A.gag(x)},
ga1(d){return A.a24(this)},
qm(d,e,f,g,h){return A.u4(A.a24(this),e,f,g,h)},
gu(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gcf(){var x=this.f
x=x==null?null:x.gcf()
return x==null?15:x},
grr(){return!1},
gmM(){return 4},
nS(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new A.MH(4,new Uint8Array(2))
t.ij(x,w,v,u)
x=t
return x},
ek(d,e,f){if(f==null||!(f instanceof A.Ic)||f.e!==this)f=A.a24(this)
f.hn(0,d,e)
return f},
nT(d,e){return this.ek(d,e,null)},
mz(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a24(w):x).hn(0,d,e)
w.r.kK(0,f)},
fd(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a24(w):x).hn(0,d,e)
w.r.kB(f,g,h)},
kA(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a24(w):x).hn(0,d,e)
w.r.ij(f,g,h,i)},
j(d){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
nq(d,e){},
grJ(){return this.e},
geS(){return this.f}}
A.Oy.prototype={
qV(d,e){var x,w=this,v=w.d
if(e)v=new Uint8Array(v.length)
else v=new Uint8Array(B.bU(v))
x=w.e
x=x==null?null:x.dZ(0)
return new A.Oy(v,x,w.a,w.b,w.c)},
gdu(){return C.a6},
gag(d){return D.A.gag(this.d)},
grJ(){return this.a*this.c},
gmM(){return 8},
ga1(d){return A.bpA(this)},
qm(d,e,f,g,h){return A.u4(A.bpA(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcf(){var x=this.e
x=x==null?null:x.gcf()
return x==null?255:x},
grr(){return!1},
nS(d,e,f,g){var x=A.cMA(D.d.D(D.d.bc(d,0,255)),D.d.D(D.d.bc(e,0,255)),D.d.D(D.d.bc(f,0,255)),D.d.D(D.d.bc(g,0,255)))
return x},
ek(d,e,f){if(f==null||!(f instanceof A.Id)||f.d!==this)f=A.bpA(this)
f.hn(0,d,e)
return f},
nT(d,e){return this.ek(d,e,null)},
mz(d,e,f){var x=this.c,w=this.d,v=D.d.D(f)
w.$flags&2&&B.A(w)
w[e*(this.a*x)+d*x]=v},
fd(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.A(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
kA(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.A(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
j(d){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
nq(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=e==null?l:A.pr(e,l,C.a6,l,l),j=m.c
if(j===1){x=k==null?0:D.c.bc(B.b8(k.gaw(k)),0,255)
j=m.d
D.A.kW(j,0,j.length,x)}else if(j===2){j=k==null
x=j?0:D.c.bc(B.b8(k.gaw(k)),0,255)
w=j?0:D.c.bc(B.b8(k.gaK()),0,255)
v=J.cjb(D.A.gag(m.d),0,null)
D.dM.kW(v,0,v.length,(w<<8|x)>>>0)}else if(j===4){j=k==null
x=j?0:D.c.bc(B.b8(k.gaw(k)),0,255)
w=j?0:D.c.bc(B.b8(k.gaK()),0,255)
u=j?0:D.c.bc(B.b8(k.gaL(k)),0,255)
t=j?0:D.c.bc(B.b8(k.gaP(k)),0,255)
s=J.oi(D.A.gag(m.d),0,null)
D.bl.kW(s,0,s.length,(t<<24|u<<16|w<<8|x)>>>0)}else{j=k==null
x=j?0:D.c.bc(B.b8(k.gaw(k)),0,255)
w=j?0:D.c.bc(B.b8(k.gaK()),0,255)
u=j?0:D.c.bc(B.b8(k.gaL(k)),0,255)
for(r=A.bpA(m),j=r.d,q=j.c>0,j=j.d,p=j.$flags|0;r.q();){if(q){o=r.c
n=D.d.D(D.c.bc(x,0,255))
p&2&&B.A(j)
j[o]=n}r.saK(w)
r.saL(0,u)}}},
geS(){return this.e}}
A.aqk.prototype={
J(){return"Interpolation."+this.b}}
A.bpk.prototype={}
A.auK.prototype={
dZ(d){return new A.auK(new Uint16Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.dM.gag(this.c)},
gdu(){return C.hA},
gcf(){return 1},
fi(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=A.fO(g)
x.$flags&2&&B.A(x)
x[e*v+f]=w}},
ph(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=A.fO(e)
x.$flags&2&&B.A(x)
x[d]=w
if(v>1){x[d+1]=A.fO(f)
if(v>2)x[d+2]=A.fO(g)}},
pa(d,e,f){var x,w=this.b
if(f<w){w=this.c[e*w+f]
x=$.hx
w=(x!=null?x:A.is())[w]}else w=0
return w},
n7(d){var x=this.c[d*this.b],w=$.hx
return(w!=null?w:A.is())[x]},
n5(d){var x,w=this.b
if(w<2)return 0
w=this.c[d*w+1]
x=$.hx
return(x!=null?x:A.is())[w]},
n4(d){var x,w=this.b
if(w<3)return 0
w=this.c[d*w+2]
x=$.hx
return(x!=null?x:A.is())[w]},
os(d){var x,w=this.b
if(w<4)return 0
w=this.c[d*w+3]
x=$.hx
return(x!=null?x:A.is())[w]},
ug(d,e){return this.fi(0,d,0,e)},
ue(d,e){return this.fi(0,d,1,e)},
ud(d,e){return this.fi(0,d,2,e)},
uc(d,e){return this.fi(0,d,3,e)}}
A.auL.prototype={
dZ(d){return new A.auL(new Float32Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.eR.gag(this.c)},
gdu(){return C.j_},
gcf(){return 1},
fi(d,e,f,g){var x,w=this.b
if(f<w){x=this.c
x.$flags&2&&B.A(x)
x[e*w+f]=g}},
ph(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x.$flags&2&&B.A(x)
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
pa(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
n7(d){return this.c[d*this.b]},
n5(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
n4(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
os(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
ug(d,e){return this.fi(0,d,0,e)},
ue(d,e){return this.fi(0,d,1,e)},
ud(d,e){return this.fi(0,d,2,e)},
uc(d,e){return this.fi(0,d,3,e)}}
A.auM.prototype={
dZ(d){return new A.auM(new Float64Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.e6.gag(this.c)},
gdu(){return C.kr},
gcf(){return 1},
fi(d,e,f,g){var x,w=this.b
if(f<w){x=this.c
x.$flags&2&&B.A(x)
x[e*w+f]=g}},
ph(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x.$flags&2&&B.A(x)
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
pa(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
n7(d){return this.c[d*this.b]},
n5(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
n4(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
os(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
ug(d,e){return this.fi(0,d,0,e)},
ue(d,e){return this.fi(0,d,1,e)},
ud(d,e){return this.fi(0,d,2,e)},
uc(d,e){return this.fi(0,d,3,e)}}
A.auN.prototype={
dZ(d){return new A.auN(new Int16Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.jm.gag(this.c)},
gdu(){return C.kt},
gcf(){return 32767},
fi(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.D(g)
x.$flags&2&&B.A(x)
x[e*v+f]=w}},
ph(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.D(e)
x.$flags&2&&B.A(x)
x[d]=w
if(v>1){x[d+1]=D.d.D(f)
if(v>2)x[d+2]=D.d.D(g)}},
pa(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
n7(d){return this.c[d*this.b]},
n5(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
n4(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
os(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
ug(d,e){return this.fi(0,d,0,e)},
ue(d,e){return this.fi(0,d,1,e)},
ud(d,e){return this.fi(0,d,2,e)},
uc(d,e){return this.fi(0,d,3,e)}}
A.auO.prototype={
dZ(d){return new A.auO(new Int32Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.ch.gag(this.c)},
gdu(){return C.ku},
gcf(){return 2147483647},
fi(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.D(g)
x.$flags&2&&B.A(x)
x[e*v+f]=w}},
ph(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.D(e)
x.$flags&2&&B.A(x)
x[d]=w
if(v>1){x[d+1]=D.d.D(f)
if(v>2)x[d+2]=D.d.D(g)}},
pa(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
n7(d){return this.c[d*this.b]},
n5(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
n4(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
os(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
ug(d,e){return this.fi(0,d,0,e)},
ue(d,e){return this.fi(0,d,1,e)},
ud(d,e){return this.fi(0,d,2,e)},
uc(d,e){return this.fi(0,d,3,e)}}
A.auP.prototype={
dZ(d){return new A.auP(new Int8Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.jn.gag(this.c)},
gdu(){return C.ks},
gcf(){return 127},
fi(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.D(g)
x.$flags&2&&B.A(x)
x[e*v+f]=w}},
ph(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.D(e)
x.$flags&2&&B.A(x)
x[d]=w
if(v>1){x[d+1]=D.d.D(f)
if(v>2)x[d+2]=D.d.D(g)}},
pa(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
n7(d){return this.c[d*this.b]},
n5(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
n4(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
os(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
ug(d,e){return this.fi(0,d,0,e)},
ue(d,e){return this.fi(0,d,1,e)},
ud(d,e){return this.fi(0,d,2,e)},
uc(d,e){return this.fi(0,d,3,e)}}
A.auQ.prototype={
dZ(d){return new A.auQ(new Uint16Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.dM.gag(this.c)},
gdu(){return C.cb},
gcf(){return 65535},
fi(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.D(g)
x.$flags&2&&B.A(x)
x[e*v+f]=w}},
ph(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.D(e)
x.$flags&2&&B.A(x)
x[d]=w
if(v>1){x[d+1]=D.d.D(f)
if(v>2)x[d+2]=D.d.D(g)}},
pa(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
n7(d){return this.c[d*this.b]},
n5(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
n4(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
os(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
ug(d,e){return this.fi(0,d,0,e)},
ue(d,e){return this.fi(0,d,1,e)},
ud(d,e){return this.fi(0,d,2,e)},
uc(d,e){return this.fi(0,d,3,e)}}
A.a1P.prototype={
dZ(d){return new A.a1P(new Uint32Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.bl.gag(this.c)},
gdu(){return C.j0},
gcf(){return 4294967295},
fi(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.D(g)
x.$flags&2&&B.A(x)
x[e*v+f]=w}},
ph(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.D(e)
x.$flags&2&&B.A(x)
x[d]=w
if(v>1){x[d+1]=D.d.D(f)
if(v>2)x[d+2]=D.d.D(g)}},
pa(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
n7(d){return this.c[d*this.b]},
n5(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
n4(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
os(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
ug(d,e){return this.fi(0,d,0,e)},
ue(d,e){return this.fi(0,d,1,e)},
ud(d,e){return this.fi(0,d,2,e)},
uc(d,e){return this.fi(0,d,3,e)}}
A.u3.prototype={
dZ(d){return A.cwE(this)},
gag(d){return D.A.gag(this.c)},
gdu(){return C.a6},
gcf(){return 255},
fi(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.D(g)
x.$flags&2&&B.A(x)
x[e*v+f]=w}},
ph(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.D(e)
x.$flags&2&&B.A(x)
x[d]=w
if(v>1){x[d+1]=D.d.D(f)
if(v>2)x[d+2]=D.d.D(g)}},
RN(d,e,f,g,h){var x,w,v=this.b
d*=v
x=this.c
w=D.c.D(e)
x.$flags&2&&B.A(x)
x[d]=w
if(v>1){x[d+1]=D.c.D(f)
if(v>2){x[d+2]=D.c.D(g)
if(v>3)x[d+3]=D.c.D(h)}}},
pa(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
n7(d){var x
d*=this.b
x=this.c
if(d>=x.length)return 0
return x[d]},
n5(d){var x=this.b
if(x<2)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+1]},
n4(d){var x=this.b
if(x<3)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+2]},
os(d){var x=this.b
if(x<4)return 255
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+3]},
ug(d,e){return this.fi(0,d,0,e)},
ue(d,e){return this.fi(0,d,1,e)},
ud(d,e){return this.fi(0,d,2,e)},
uc(d,e){return this.fi(0,d,3,e)}}
A.I2.prototype={
dZ(d){var x=this
return new A.I2(x.a,x.b,x.c,x.d)},
gdu(){return C.hA},
gu(d){return this.d.c},
geS(){return null},
gcf(){return 1},
gn3(d){return this.a},
gnR(d){return this.b},
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
x=$.hx
w=(x!=null?x:A.is())[w]}else w=0
return w},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=A.fO(f)
v.$flags&2&&B.A(v)
v[x+e]=w}},
gef(d){return this.gaw(0)},
sef(d,e){this.saw(0,e)},
gaw(d){var x,w=this.d
if(w.c>0){w=w.d[this.c]
x=$.hx
w=(x!=null?x:A.is())[w]}else w=0
return w},
saw(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=A.fO(e)
v.$flags&2&&B.A(v)
v[x]=w}},
gaK(){var x,w=this.d
if(w.c>1){w=w.d[this.c+1]
x=$.hx
w=(x!=null?x:A.is())[w]}else w=0
return w},
saK(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=A.fO(d)
v.$flags&2&&B.A(v)
v[x+1]=w}},
gaL(d){var x,w=this.d
if(w.c>2){w=w.d[this.c+2]
x=$.hx
w=(x!=null?x:A.is())[w]}else w=0
return w},
saL(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=A.fO(e)
v.$flags&2&&B.A(v)
v[x+2]=w}},
gaP(d){var x,w=this.d
if(w.c>3){w=w.d[this.c+3]
x=$.hx
w=(x!=null?x:A.is())[w]}else w=0
return w},
saP(d,e){var x,w,v,u=this.d
if(u.c>3){x=this.gaK()
u=u.d
w=this.c
v=A.fO(x)
u.$flags&2&&B.A(u)
u[w+3]=v}},
giw(){return this.gaw(0)/1},
siw(d){this.saw(0,d)},
gih(){return this.gaK()/1},
sih(d){this.saK(d)},
giq(){return this.gaL(0)/1},
siq(d){this.saL(0,d)},
giG(){return this.gaP(0)/1},
siG(d){this.saP(0,d)},
gjO(){return A.jl(this)},
iX(d,e){var x=this
if(x.d.c>0){x.saw(0,e.gaw(e))
x.saK(e.gaK())
x.saL(0,e.gaL(e))
x.saP(0,e.gaP(e))}},
kB(d,e,f){var x,w,v=this,u=v.d,t=u.c
if(t>0){u=u.d
x=v.c
w=A.fO(d)
u.$flags&2&&B.A(u)
u[x]=w
if(t>1){u[v.c+1]=A.fO(e)
if(t>2)u[v.c+2]=A.fO(f)}}},
ij(d,e,f,g){var x,w,v=this,u=v.d,t=u.c
if(t>0){u=u.d
x=v.c
w=A.fO(d)
u.$flags&2&&B.A(u)
u[x]=w
if(t>1){u[v.c+1]=A.fO(e)
if(t>2){u[v.c+2]=A.fO(f)
if(t>3)u[v.c+3]=A.fO(g)}}}},
ga1(d){return new A.hq(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.I2)return B.aK(B.J(u,!0,B.p(u).h("v.E")))===B.aK(B.J(e,!0,B.p(e).h("v.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
o8(d){return A.pr(this,null,d,null,null)},
$ibn:1,
$idO:1,
$icL:1,
gfl(d){return this.d}}
A.I3.prototype={
dZ(d){var x=this
return new A.I3(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geS(){return null},
gcf(){return 1},
gdu(){return C.j_},
gn3(d){return this.a},
gnR(d){return this.b},
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
w.$flags&2&&B.A(w)
w[x+e]=f}},
gef(d){return this.gaw(0)},
sef(d,e){this.saw(0,e)},
gaw(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saw(d,e){var x,w=this.d
if(w.c>0){w=w.d
x=this.c
w.$flags&2&&B.A(w)
w[x]=e}},
gaK(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saK(d){var x,w=this.d
if(w.c>1){w=w.d
x=this.c
w.$flags&2&&B.A(w)
w[x+1]=d}},
gaL(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saL(d,e){var x,w=this.d
if(w.c>2){w=w.d
x=this.c
w.$flags&2&&B.A(w)
w[x+2]=e}},
gaP(d){var x=this.d
return x.c>3?x.d[this.c+3]:1},
saP(d,e){var x,w=this.d
if(w.c>3){w=w.d
x=this.c
w.$flags&2&&B.A(w)
w[x+3]=e}},
giw(){return this.gaw(0)/1},
siw(d){this.saw(0,d)},
gih(){return this.gaK()/1},
sih(d){this.saK(d)},
giq(){return this.gaL(0)/1},
siq(d){this.saL(0,d)},
giG(){return this.gaP(0)/1},
siG(d){this.saP(0,d)},
gjO(){return A.jl(this)},
iX(d,e){var x=this
x.saw(0,e.gaw(e))
x.saK(e.gaK())
x.saL(0,e.gaL(e))
x.saP(0,e.gaP(e))},
kB(d,e,f){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.A(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
ij(d,e,f,g){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.A(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
ga1(d){return new A.hq(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.I3)return B.aK(B.J(u,!0,B.p(u).h("v.E")))===B.aK(B.J(e,!0,B.p(e).h("v.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
o8(d){return A.pr(this,null,d,null,null)},
$ibn:1,
$idO:1,
$icL:1,
gfl(d){return this.d}}
A.I4.prototype={
dZ(d){var x=this
return new A.I4(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geS(){return null},
gcf(){return 1},
gdu(){return C.kr},
gn3(d){return this.a},
gnR(d){return this.b},
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
w.$flags&2&&B.A(w)
w[x+e]=f}},
gef(d){return this.gaw(0)},
sef(d,e){this.saw(0,e)},
gaw(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saw(d,e){var x,w=this.d
if(w.c>0){w=w.d
x=this.c
w.$flags&2&&B.A(w)
w[x]=e}},
gaK(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saK(d){var x,w=this.d
if(w.c>1){w=w.d
x=this.c
w.$flags&2&&B.A(w)
w[x+1]=d}},
gaL(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saL(d,e){var x,w=this.d
if(w.c>2){w=w.d
x=this.c
w.$flags&2&&B.A(w)
w[x+2]=e}},
gaP(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saP(d,e){var x,w=this.d
if(w.c>3){w=w.d
x=this.c
w.$flags&2&&B.A(w)
w[x+3]=e}},
giw(){return this.gaw(0)/1},
siw(d){this.saw(0,d)},
gih(){return this.gaK()/1},
sih(d){this.saK(d)},
giq(){return this.gaL(0)/1},
siq(d){this.saL(0,d)},
giG(){return this.gaP(0)/1},
siG(d){this.saP(0,d)},
gjO(){return A.jl(this)},
iX(d,e){var x=this
x.saw(0,e.gaw(e))
x.saK(e.gaK())
x.saL(0,e.gaL(e))
x.saP(0,e.gaP(e))},
kB(d,e,f){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.A(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
ij(d,e,f,g){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.A(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
ga1(d){return new A.hq(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.I4)return B.aK(B.J(u,!0,B.p(u).h("v.E")))===B.aK(B.J(e,!0,B.p(e).h("v.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
o8(d){return A.pr(this,null,d,null,null)},
$ibn:1,
$idO:1,
$icL:1,
gfl(d){return this.d}}
A.I5.prototype={
dZ(d){var x=this
return new A.I5(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geS(){return null},
gcf(){return 32767},
gdu(){return C.kt},
gn3(d){return this.a},
gnR(d){return this.b},
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
w=D.d.D(f)
v.$flags&2&&B.A(v)
v[x+e]=w}},
gef(d){return this.gaw(0)},
sef(d,e){this.saw(0,e)},
gaw(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saw(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.A(v)
v[x]=w}},
gaK(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saK(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.D(d)
v.$flags&2&&B.A(v)
v[x+1]=w}},
gaL(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saL(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.A(v)
v[x+2]=w}},
gaP(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saP(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.A(v)
v[x+3]=w}},
giw(){return this.gaw(0)/32767},
siw(d){this.saw(0,d*32767)},
gih(){return this.gaK()/32767},
sih(d){this.saK(d*32767)},
giq(){return this.gaL(0)/32767},
siq(d){this.saL(0,d*32767)},
giG(){return this.gaP(0)/32767},
siG(d){this.saP(0,d*32767)},
gjO(){return A.jl(this)},
iX(d,e){var x=this
x.saw(0,e.gaw(e))
x.saK(e.gaK())
x.saL(0,e.gaL(e))
x.saP(0,e.gaP(e))},
kB(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.A(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2)v[x+2]=D.c.D(f)}}},
ij(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.A(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2){v[x+2]=D.c.D(f)
if(u>3)v[x+3]=D.c.D(g)}}}},
ga1(d){return new A.hq(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.I5)return B.aK(B.J(u,!0,B.p(u).h("v.E")))===B.aK(B.J(e,!0,B.p(e).h("v.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
o8(d){return A.pr(this,null,d,null,null)},
$ibn:1,
$idO:1,
$icL:1,
gfl(d){return this.d}}
A.I6.prototype={
dZ(d){var x=this
return new A.I6(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geS(){return null},
gcf(){return 2147483647},
gdu(){return C.ku},
gn3(d){return this.a},
gnR(d){return this.b},
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
w=D.d.D(f)
v.$flags&2&&B.A(v)
v[x+e]=w}},
gef(d){return this.gaw(0)},
sef(d,e){this.saw(0,e)},
gaw(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saw(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.A(v)
v[x]=w}},
gaK(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saK(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.D(d)
v.$flags&2&&B.A(v)
v[x+1]=w}},
gaL(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saL(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.A(v)
v[x+2]=w}},
gaP(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saP(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.A(v)
v[x+3]=w}},
giw(){return this.gaw(0)/2147483647},
siw(d){this.saw(0,d*2147483647)},
gih(){return this.gaK()/2147483647},
sih(d){this.saK(d*2147483647)},
giq(){return this.gaL(0)/2147483647},
siq(d){this.saL(0,d*2147483647)},
giG(){return this.gaP(0)/2147483647},
siG(d){this.saP(0,d*2147483647)},
gjO(){return A.jl(this)},
iX(d,e){var x=this
x.saw(0,e.gaw(e))
x.saK(e.gaK())
x.saL(0,e.gaL(e))
x.saP(0,e.gaP(e))},
kB(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.A(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2)v[x+2]=D.c.D(f)}}},
ij(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.A(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2){v[x+2]=D.c.D(f)
if(u>3)v[x+3]=D.c.D(g)}}}},
ga1(d){return new A.hq(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.I6)return B.aK(B.J(u,!0,B.p(u).h("v.E")))===B.aK(B.J(e,!0,B.p(e).h("v.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
o8(d){return A.pr(this,null,d,null,null)},
$ibn:1,
$idO:1,
$icL:1,
gfl(d){return this.d}}
A.I7.prototype={
dZ(d){var x=this
return new A.I7(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geS(){return null},
gcf(){return 127},
gdu(){return C.ks},
gn3(d){return this.a},
gnR(d){return this.b},
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
w=D.d.D(f)
v.$flags&2&&B.A(v)
v[x+e]=w}},
gef(d){return this.gaw(0)},
sef(d,e){this.saw(0,e)},
gaw(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saw(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.A(v)
v[x]=w}},
gaK(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saK(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.D(d)
v.$flags&2&&B.A(v)
v[x+1]=w}},
gaL(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saL(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.A(v)
v[x+2]=w}},
gaP(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saP(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.A(v)
v[x+3]=w}},
giw(){return this.gaw(0)/127},
siw(d){this.saw(0,d*127)},
gih(){return this.gaK()/127},
sih(d){this.saK(d*127)},
giq(){return this.gaL(0)/127},
siq(d){this.saL(0,d*127)},
giG(){return this.gaP(0)/127},
siG(d){this.saP(0,d*127)},
gjO(){return A.jl(this)},
iX(d,e){var x=this
x.saw(0,e.gaw(e))
x.saK(e.gaK())
x.saL(0,e.gaL(e))
x.saP(0,e.gaP(e))},
kB(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.A(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2)v[x+2]=D.c.D(f)}}},
ij(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.A(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2){v[x+2]=D.c.D(f)
if(u>3)v[x+3]=D.c.D(g)}}}},
ga1(d){return new A.hq(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.I7)return B.aK(B.J(u,!0,B.p(u).h("v.E")))===B.aK(B.J(e,!0,B.p(e).h("v.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
o8(d){return A.pr(this,null,d,null,null)},
$ibn:1,
$idO:1,
$icL:1,
gfl(d){return this.d}}
A.av2.prototype={
q(){var x=this,w=x.a
if(w.gn3(w)+1>x.d){w.hn(0,x.b,w.gnR(w)+1)
return w.gnR(w)<=x.e}return w.q()},
gL(d){return this.a},
$ibn:1}
A.I8.prototype={
dZ(d){var x=this
return new A.I8(x.a,x.b,x.c,x.d,x.e,x.f)},
gu(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geS(){return this.f.f},
gcf(){return this.f.gcf()},
gdu(){return C.f8},
gn3(d){return this.a},
gnR(d){return this.b},
hn(d,e,f){var x,w,v=this
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
a5B(d,e){var x,w=this.c,v=7-(this.d+e)
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
if(w>=x.length)return 0
return D.c.fX(x[w],v)&1},
pu(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.a5B(0,d):0
else x=w.pa(0,this.a5B(0,0),d)
return x},
kI(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=7-(this.d+d)
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.bc(D.d.D(e),0,1)
s=C.auR[w]
v=D.c.eP(t,w)
r=r.d
r.$flags&2&&B.A(r)
r[x]=(u&s|v)>>>0},
i(d,e){return this.pu(e)},
m(d,e,f){return this.kI(e,f)},
gef(d){return this.a5B(0,0)},
sef(d,e){this.kI(0,e)},
gaw(d){return this.pu(0)},
saw(d,e){this.kI(0,e)},
gaK(){return this.pu(1)},
saK(d){this.kI(1,d)},
gaL(d){return this.pu(2)},
saL(d,e){this.kI(2,e)},
gaP(d){return this.pu(3)},
saP(d,e){this.kI(3,e)},
giw(){return this.pu(0)/this.f.gcf()},
siw(d){this.kI(0,d*this.f.gcf())},
gih(){return this.pu(1)/this.f.gcf()},
sih(d){this.kI(1,d*this.f.gcf())},
giq(){return this.pu(2)/this.f.gcf()},
siq(d){this.kI(2,d*this.f.gcf())},
giG(){return this.pu(3)/this.f.gcf()},
siG(d){this.kI(3,d*this.f.gcf())},
gjO(){return A.jl(this)},
iX(d,e){var x=this
x.kI(0,e.gaw(e))
x.kI(1,e.gaK())
x.kI(2,e.gaL(e))
x.kI(3,e.gaP(e))},
kB(d,e,f){var x=this,w=x.f.c
if(w>0){x.kI(0,d)
if(w>1){x.kI(1,e)
if(w>2)x.kI(2,f)}}},
ij(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.kI(0,d)
if(w>1){x.kI(1,e)
if(w>2){x.kI(2,f)
if(w>3)x.kI(3,g)}}}},
ga1(d){return new A.hq(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.I8)return B.aK(B.J(u,!0,B.p(u).h("v.E")))===B.aK(B.J(e,!0,B.p(e).h("v.E")))
if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.pu(0)!==x.i(e,0))return!1
if(v>1){if(u.pu(1)!==x.i(e,1))return!1
if(v>2){if(u.pu(2)!==x.i(e,2))return!1
if(v>3)if(u.pu(3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
o8(d){return A.pr(this,null,d,null,null)},
$ibn:1,
$idO:1,
$icL:1,
gfl(d){return this.f}}
A.I9.prototype={
dZ(d){var x=this
return new A.I9(x.a,x.b,x.c,x.d)},
gu(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
geS(){return this.d.e},
gcf(){return this.d.gcf()},
gdu(){return C.cb},
gn3(d){return this.a},
gnR(d){return this.b},
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
if(w!=null)x=w.pa(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
i(d,e){return this.hY(0,e)},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.d.D(f)
v.$flags&2&&B.A(v)
v[x+e]=w}},
gef(d){return this.gaw(0)},
sef(d,e){this.saw(0,e)},
gaw(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.n7(x.d[this.c])
return x},
saw(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.A(v)
v[x]=w}},
gaK(){var x=this.d,w=x.e
if(w==null)x=x.c>1?x.d[this.c+1]:0
else x=w.n5(x.d[this.c])
return x},
saK(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.D(d)
v.$flags&2&&B.A(v)
v[x+1]=w}},
gaL(d){var x=this.d,w=x.e
if(w==null)x=x.c>2?x.d[this.c+2]:0
else x=w.n4(x.d[this.c])
return x},
saL(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.A(v)
v[x+2]=w}},
gaP(d){var x=this.d,w=x.e
if(w==null)x=x.c>3?x.d[this.c+3]:0
else x=w.os(x.d[this.c])
return x},
saP(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.A(v)
v[x+3]=w}},
giw(){return this.gaw(0)/this.d.gcf()},
siw(d){this.saw(0,d*this.d.gcf())},
gih(){return this.gaK()/this.d.gcf()},
sih(d){this.saK(d*this.d.gcf())},
giq(){return this.gaL(0)/this.d.gcf()},
siq(d){this.saL(0,d*this.d.gcf())},
giG(){return this.gaP(0)/this.d.gcf()},
siG(d){this.saP(0,d*this.d.gcf())},
gjO(){return A.jl(this)},
iX(d,e){var x=this
x.saw(0,e.gaw(e))
x.saK(e.gaK())
x.saL(0,e.gaL(e))
x.saP(0,e.gaP(e))},
kB(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.A(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2)v[x+2]=D.c.D(f)}}},
ij(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.A(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2){v[x+2]=D.c.D(f)
if(u>3)v[x+3]=D.c.D(g)}}}},
ga1(d){return new A.hq(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.I9)return B.aK(B.J(u,!0,B.p(u).h("v.E")))===B.aK(B.J(e,!0,B.p(e).h("v.E")))
if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.hY(0,0)!==x.i(e,0))return!1
if(v>1){if(u.hY(0,1)!==x.i(e,1))return!1
if(v>2){if(u.hY(0,2)!==x.i(e,2))return!1
if(v>3)if(u.hY(0,3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
o8(d){return A.pr(this,null,d,null,null)},
$ibn:1,
$idO:1,
$icL:1,
gfl(d){return this.d}}
A.Ia.prototype={
dZ(d){var x=this
return new A.Ia(x.a,x.b,x.c,x.d,x.e,x.f)},
gu(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geS(){return this.f.f},
gcf(){return this.f.gcf()},
gdu(){return C.fR},
gaw5(){var x=this.f
return x.f!=null?2:x.c<<1>>>0},
gn3(d){return this.a},
gnR(d){return this.b},
hn(d,e,f){var x,w,v,u=this
u.a=e
u.b=f
x=u.gaw5()
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
if(x>7){v.d=0;++v.c}}else{w=v.gaw5()
x=v.a*w
v.d=x&7
v.c=v.e+D.c.P(x,3)}x=v.c
u=u.d
u===$&&B.b()
return x<u.length},
a5C(d,e){var x,w=this.c,v=6-(this.d+(e<<1>>>0))
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
return D.c.fX(x[w],v)&3},
pv(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.a5C(0,d):0
else x=w.pa(0,this.a5C(0,0),d)
return x},
kJ(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=6-(this.d+(d<<1>>>0))
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.bc(D.d.D(e),0,3)
s=C.api[D.c.P(w,1)]
v=D.c.eP(t,w)
r=r.d
r.$flags&2&&B.A(r)
r[x]=(u&s|v)>>>0},
i(d,e){return this.pv(e)},
m(d,e,f){return this.kJ(e,f)},
gef(d){return this.a5C(0,0)},
sef(d,e){this.kJ(0,e)},
gaw(d){return this.pv(0)},
saw(d,e){this.kJ(0,e)},
gaK(){return this.pv(1)},
saK(d){this.kJ(1,d)},
gaL(d){return this.pv(2)},
saL(d,e){this.kJ(2,e)},
gaP(d){return this.pv(3)},
saP(d,e){this.kJ(3,e)},
giw(){return this.pv(0)/this.f.gcf()},
siw(d){this.kJ(0,d*this.f.gcf())},
gih(){return this.pv(1)/this.f.gcf()},
sih(d){this.kJ(1,d*this.f.gcf())},
giq(){return this.pv(2)/this.f.gcf()},
siq(d){this.kJ(2,d*this.f.gcf())},
giG(){return this.pv(3)/this.f.gcf()},
siG(d){this.kJ(3,d*this.f.gcf())},
gjO(){return A.jl(this)},
iX(d,e){var x=this
x.kJ(0,e.gaw(e))
x.kJ(1,e.gaK())
x.kJ(2,e.gaL(e))
x.kJ(3,e.gaP(e))},
kB(d,e,f){var x=this,w=x.f.c
if(w>0){x.kJ(0,d)
if(w>1){x.kJ(1,e)
if(w>2)x.kJ(2,f)}}},
ij(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.kJ(0,d)
if(w>1){x.kJ(1,e)
if(w>2){x.kJ(2,f)
if(w>3)x.kJ(3,g)}}}},
ga1(d){return new A.hq(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Ia)return B.aK(B.J(u,!0,B.p(u).h("v.E")))===B.aK(B.J(e,!0,B.p(e).h("v.E")))
if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.pv(0)!==x.i(e,0))return!1
if(v>1){if(u.pv(1)!==x.i(e,1))return!1
if(v>2){if(u.pv(2)!==x.i(e,2))return!1
if(v>3)if(u.pv(3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
o8(d){return A.pr(this,null,d,null,null)},
$ibn:1,
$idO:1,
$icL:1,
gfl(d){return this.f}}
A.Ib.prototype={
dZ(d){var x=this
return new A.Ib(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geS(){return null},
gcf(){return 4294967295},
gdu(){return C.j0},
gn3(d){return this.a},
gnR(d){return this.b},
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
w=D.d.D(f)
v.$flags&2&&B.A(v)
v[x+e]=w}},
gef(d){return this.gaw(0)},
sef(d,e){this.saw(0,e)},
gaw(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saw(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.A(v)
v[x]=w}},
gaK(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saK(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.D(d)
v.$flags&2&&B.A(v)
v[x+1]=w}},
gaL(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saL(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.A(v)
v[x+2]=w}},
gaP(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saP(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.A(v)
v[x+3]=w}},
giw(){return this.gaw(0)/4294967295},
siw(d){this.saw(0,d*4294967295)},
gih(){return this.gaK()/4294967295},
sih(d){this.saK(d*4294967295)},
giq(){return this.gaL(0)/4294967295},
siq(d){this.saL(0,d*4294967295)},
giG(){return this.gaP(0)/4294967295},
siG(d){this.saP(0,d*4294967295)},
gjO(){return A.jl(this)},
iX(d,e){var x=this
x.saw(0,e.gaw(e))
x.saK(e.gaK())
x.saL(0,e.gaL(e))
x.saP(0,e.gaP(e))},
kB(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.A(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2)v[x+2]=D.c.D(f)}}},
ij(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.A(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2){v[x+2]=D.c.D(f)
if(u>3)v[x+3]=D.c.D(g)}}}},
ga1(d){return new A.hq(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Ib)return B.aK(B.J(u,!0,B.p(u).h("v.E")))===B.aK(B.J(e,!0,B.p(e).h("v.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
o8(d){return A.pr(this,null,d,null,null)},
$ibn:1,
$idO:1,
$icL:1,
gfl(d){return this.d}}
A.Ic.prototype={
dZ(d){var x=this
return new A.Ic(x.a,x.b,x.c,x.d,x.e)},
gu(d){var x=this.e,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geS(){return this.e.f},
gcf(){return this.e.gcf()},
gdu(){return C.fS},
gn3(d){return this.a},
gnR(d){return this.b},
hn(d,e,f){var x,w,v,u=this
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
a5D(d,e){var x,w=this.c,v=4-(this.d+(e<<2>>>0))
if(v<0){v+=8;++w}x=this.e.d
x===$&&B.b()
return D.c.fX(x[w],v)&15},
ps(d){var x=this.e,w=x.f
if(w==null)x=x.c>d?this.a5D(0,d):0
else x=w.pa(0,this.a5D(0,0),d)
return x},
kK(d,e){var x,w,v,u,t,s,r=this.e
if(d>=r.c)return
x=this.c
w=4-(this.d+(d<<2>>>0))
if(w<0){w+=8;++x}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.bc(D.d.D(e),0,15)
s=w===4?15:240
v=D.c.eP(t,w)
r=r.d
r.$flags&2&&B.A(r)
r[x]=(u&s|v)>>>0},
i(d,e){return this.ps(e)},
m(d,e,f){return this.kK(e,f)},
gef(d){return this.a5D(0,0)},
sef(d,e){this.kK(0,e)},
gaw(d){return this.ps(0)},
saw(d,e){this.kK(0,e)},
gaK(){return this.ps(1)},
saK(d){this.kK(1,d)},
gaL(d){return this.ps(2)},
saL(d,e){this.kK(2,e)},
gaP(d){return this.ps(3)},
saP(d,e){this.kK(3,e)},
giw(){return this.ps(0)/this.e.gcf()},
siw(d){this.kK(0,d*this.e.gcf())},
gih(){return this.ps(1)/this.e.gcf()},
sih(d){this.kK(1,d*this.e.gcf())},
giq(){return this.ps(2)/this.e.gcf()},
siq(d){this.kK(2,d*this.e.gcf())},
giG(){return this.ps(3)/this.e.gcf()},
siG(d){this.kK(3,d*this.e.gcf())},
gjO(){return A.jl(this)},
iX(d,e){var x=this
x.kK(0,e.gaw(e))
x.kK(1,e.gaK())
x.kK(2,e.gaL(e))
x.kK(3,e.gaP(e))},
kB(d,e,f){var x=this,w=x.e.c
if(w>0){x.kK(0,d)
if(w>1){x.kK(1,e)
if(w>2)x.kK(2,f)}}},
ij(d,e,f,g){var x=this,w=x.e.c
if(w>0){x.kK(0,d)
if(w>1){x.kK(1,e)
if(w>2){x.kK(2,f)
if(w>3)x.kK(3,g)}}}},
ga1(d){return new A.hq(this)},
k(d,e){var x,w,v=this
if(e==null)return!1
if(e instanceof A.Ic)return B.aK(B.J(v,!0,B.p(v).h("v.E")))===B.aK(B.J(e,!0,B.p(e).h("v.E")))
if(y.L.b(e)){x=v.e.c
w=J.a2(e)
if(w.gu(e)!==x)return!1
if(v.ps(0)!==w.i(e,0))return!1
if(x>1){if(v.ps(1)!==w.i(e,1))return!1
if(x>2){if(v.ps(2)!==w.i(e,2))return!1
if(x>3)if(v.ps(3)!==w.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
o8(d){return A.pr(this,null,d,null,null)},
$ibn:1,
$idO:1,
$icL:1,
gfl(d){return this.e}}
A.Id.prototype={
dZ(d){var x=this
return new A.Id(x.a,x.b,x.c,x.d)},
gu(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
geS(){return this.d.e},
gcf(){return this.d.gcf()},
gdu(){return C.a6},
gn3(d){return this.a},
gnR(d){return this.b},
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
if(w!=null)x=w.pa(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
i(d,e){return this.hY(0,e)},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.d.D(D.d.bc(f,0,255))
v.$flags&2&&B.A(v)
v[x+e]=w}},
gef(d){return this.d.d[this.c]},
sef(d,e){var x=this.d.d,w=this.c,v=D.d.D(D.d.bc(e,0,255))
x.$flags&2&&B.A(x)
x[w]=v},
gaw(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.n7(x.d[this.c])
return x},
saw(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.D(D.d.bc(e,0,255))
v.$flags&2&&B.A(v)
v[x]=w}},
gaK(){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>1?w.d[x.c+1]:0}else w=v.n5(w.d[x.c])
return w},
saK(d){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.d.D(D.d.bc(d,0,255))
w.$flags&2&&B.A(w)
w[v]=x}else if(v>1){w=w.d
v=this.c
x=D.d.D(D.d.bc(d,0,255))
w.$flags&2&&B.A(w)
w[v+1]=x}},
gaL(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>2?w.d[x.c+2]:0}else w=v.n4(w.d[x.c])
return w},
saL(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.d.D(D.d.bc(e,0,255))
w.$flags&2&&B.A(w)
w[v]=x}else if(v>2){w=w.d
v=this.c
x=D.d.D(D.d.bc(e,0,255))
w.$flags&2&&B.A(w)
w[v+2]=x}},
gaP(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c+1]
else w=v>3?w.d[x.c+3]:255}else w=v.os(w.d[x.c])
return w},
saP(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.d.D(D.d.bc(e,0,255))
w.$flags&2&&B.A(w)
w[v+1]=x}else if(v>3){w=w.d
v=this.c
x=D.d.D(D.d.bc(e,0,255))
w.$flags&2&&B.A(w)
w[v+3]=x}},
giw(){return this.gaw(0)/this.d.gcf()},
siw(d){this.saw(0,d*this.d.gcf())},
gih(){return this.gaK()/this.d.gcf()},
sih(d){this.saK(d*this.d.gcf())},
giq(){return this.gaL(0)/this.d.gcf()},
siq(d){this.saL(0,d*this.d.gcf())},
giG(){return this.gaP(0)/this.d.gcf()},
siG(d){this.saP(0,d*this.d.gcf())},
gjO(){return this.d.c===2?this.gaw(0):A.jl(this)},
iX(d,e){var x=this
if(x.d.e!=null)x.sef(0,e.gef(e))
else{x.saw(0,e.gaw(e))
x.saK(e.gaK())
x.saL(0,e.gaL(e))
x.saP(0,e.gaP(e))}},
kB(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.A(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2)v[x+2]=D.c.D(f)}}},
ij(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.A(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2){v[x+2]=D.c.D(f)
if(u>3)v[x+3]=D.c.D(g)}}}},
ga1(d){return new A.hq(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Id)return B.aK(B.J(u,!0,B.p(u).h("v.E")))===B.aK(B.J(e,!0,B.p(e).h("v.E")))
if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.hY(0,0)!==x.i(e,0))return!1
if(v>1){if(u.hY(0,1)!==x.i(e,1))return!1
if(v>2){if(u.hY(0,2)!==x.i(e,2))return!1
if(v>3)if(u.hY(0,3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aK(B.J(this,!0,B.p(this).h("v.E")))},
o8(d){return A.pr(this,null,d,null,null)},
$ibn:1,
$idO:1,
$icL:1,
gfl(d){return this.d}}
A.ff.prototype={
dZ(d){return new A.ff()},
gfl(d){return $.cGp()},
gn3(d){return 0},
gnR(d){return 0},
gu(d){return 0},
gcf(){return 0},
gdu(){return C.a6},
geS(){return null},
i(d,e){return 0},
m(d,e,f){},
gef(d){return 0},
sef(d,e){},
gaw(d){return 0},
saw(d,e){},
gaK(){return 0},
saK(d){},
gaL(d){return 0},
saL(d,e){},
gaP(d){return 0},
saP(d,e){},
giw(){return 0},
siw(d){},
gih(){return 0},
sih(d){},
giq(){return 0},
siq(d){},
giG(){return 0},
siG(d){},
gjO(){return 0},
iX(d,e){},
kB(d,e,f){},
ij(d,e,f,g){},
hn(d,e,f){},
gL(d){return this},
q(){return!1},
k(d,e){if(e==null)return!1
return e instanceof A.ff},
gv(d){return 0},
ga1(d){return new A.hq(this)},
o8(d){return this},
$ibn:1,
$idO:1,
$icL:1}
A.ba6.prototype={
J(){return"FlipDirection."+this.b}}
A.apT.prototype={
j(d){return"ImageException: "+this.a},
$ib6:1}
A.lM.prototype={
gu(d){return this.c-this.d},
i(d,e){return J.u(this.a,this.d+e)},
m(d,e,f){J.bP(this.a,this.d+e,f)
return f},
rA(d,e,f,g){var x=this.a,w=J.cR(x),v=this.d+d
if(f instanceof A.lM)w.dM(x,v,v+e,f.a,f.d+g)
else w.dM(x,v,v+e,y.L.a(f),g)},
A6(d,e,f){return this.rA(d,e,f,0)},
bDm(d,e,f){var x=this.a,w=this.d+d
J.tb(x,w,w+e,f)},
a1N(d,e,f){var x=this,w=f!=null?x.b+f:x.d
return A.cP(x.a,x.e,d,w+e)},
jW(d){return this.a1N(d,0,null)},
B2(d,e){return this.a1N(d,0,e)},
Sd(d,e){return this.a1N(d,e,null)},
dO(d,e){var x=this.d,w=x+(this.c-x)
for(;x<w;++x)J.u(this.a,x)
return-1},
df(){return J.u(this.a,this.d++)},
l2(d){var x=this.jW(d)
this.d=this.d+(x.c-x.d)
return x},
qf(d){var x,w,v,u,t,s=this
if(d==null){x=B.a([],y.t)
for(w=s.c;v=s.d,v<w;){u=s.a
s.d=v+1
t=J.u(u,v)
if(t===0)return B.el(x,0,null)
x.push(t)}throw B.f(A.c4("EOF reached without finding string terminator (length: "+B.o(d)+")"))}return B.el(s.l2(d).hK(),0,null)},
Q8(){return this.qf(null)},
aDO(d){var x,w,v,u,t=this,s=B.a([],y.t)
for(x=t.c;w=t.d,w<x;){v=t.a
t.d=w+1
u=J.u(v,w)
s.push(u)
if(u===10||s.length>=d)return B.el(s,0,null)}return B.el(s,0,null)},
bHX(){return this.aDO(256)},
bHY(){var x,w,v,u,t=this,s=B.a([],y.t)
for(x=t.c;w=t.d,w<x;){v=t.a
t.d=w+1
u=J.u(v,w)
if(u===0)return new B.EU(!0).F8(s,0,null,!0)
s.push(u)}return D.ap.Ct(0,s,!0)},
bN(){var x=this,w=J.u(x.a,x.d++)&255,v=J.u(x.a,x.d++)&255
if(x.e)return w<<8|v
return v<<8|w},
rF(){var x=this,w=J.u(x.a,x.d++)&255,v=J.u(x.a,x.d++)&255,u=J.u(x.a,x.d++)&255
if(x.e)return u|v<<8|w<<16
return w|v<<8|u<<16},
an(){var x=this,w=J.u(x.a,x.d++)&255,v=J.u(x.a,x.d++)&255,u=J.u(x.a,x.d++)&255,t=J.u(x.a,x.d++)&255
if(x.e)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
a_w(){return A.daS(this.ad3())},
ad3(){var x=this,w=J.u(x.a,x.d++)&255,v=J.u(x.a,x.d++)&255,u=J.u(x.a,x.d++)&255,t=J.u(x.a,x.d++)&255,s=J.u(x.a,x.d++)&255,r=J.u(x.a,x.d++)&255,q=J.u(x.a,x.d++)&255,p=J.u(x.a,x.d++)&255
if(x.e)return(D.c.eq(w,56)|D.c.eq(v,48)|D.c.eq(u,40)|D.c.eq(t,32)|s<<24|r<<16|q<<8|p)>>>0
return(D.c.eq(p,56)|D.c.eq(q,48)|D.c.eq(r,40)|D.c.eq(s,32)|t<<24|u<<16|v<<8|w)>>>0},
Ji(d,e,f){var x,w=this,v=w.a
if(y.D.b(v))return w.aEU(e,f)
x=w.b+w.d+e
return J.aUz(v,x,f<=0?w.c:x+f)},
f8(d){return this.Ji(0,0,0)},
aEU(d,e){var x,w=this,v=e==null?w.c-w.d-d:e,u=w.a
if(y.D.b(u))return J.d_(D.A.gag(u),u.byteOffset+w.d+d,v)
x=w.d+d
x=J.aUz(u,x,x+v)
return new Uint8Array(B.bU(x))},
hK(){return this.aEU(0,null)},
Qt(){var x=this.a
if(y.D.b(x))return J.oi(D.A.gag(x),x.byteOffset+this.d,null)
return J.oi(D.A.gag(this.hK()),0,null)}}
A.bny.prototype={
bpS(d){var x=this
x.aow(d)
x.alH()
x.aob()
x.ak9()},
bc7(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.c=Math.max(d,4)
n.f=m-n.d
n.r=m-1
x=D.d.b7(m,8)
n.w=x
n.x=x*256
n.Q=new A.a1P(new Uint32Array(1024),256,4)
n.a=new A.u3(new Uint8Array(768),256,3)
n.d=3
n.e=2
x=D.d.P(m,3)
n.y=new Int32Array(x)
x=y.cb
n.z=B.bI(m*3,0,!1,x)
n.at=B.bI(n.c,0,!1,x)
x=n.ax=B.bI(n.c,0,!1,x)
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
ak9(){var x,w,v,u,t,s
for(x=0;x<this.c;++x){w=this.a
w===$&&B.b()
v=this.Q
v===$&&B.b()
u=v.b
t=2<u?v.c[x*u+2]:0
s=1<u?v.c[x*u+1]:0
v=0<u?v.c[x*u]:0
w.ph(x,Math.abs(t),Math.abs(s),Math.abs(v))}},
ba1(d,e,f){var x,w,v,u=this.as[e],t=u-1,s=this.c,r=this.Q,q=1000,p=-1
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
alH(){var x,w,v,u,t,s,r,q=this
for(x=0,w=0;x<q.c;++x){for(v=0;v<3;++v,++w){u=q.z
u===$&&B.b()
t=D.c.bc(D.d.D(0.5+u[w]),0,255)
u=q.Q
u===$&&B.b()
s=u.b
if(v<s){u=u.c
r=D.c.D(t)
u.$flags&2&&B.A(u)
u[x*s+v]=r}}u=q.Q
u===$&&B.b()
s=u.b
if(3<s){u=u.c
r=D.c.D(x)
u.$flags&2&&B.A(u)
u[x*s+3]=r}}},
aob(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
for(x=h.c,w=h.Q,v=h.as,u=v.$flags|0,t=0,s=0,r=0;r<x;r=n){w===$&&B.b()
q=w.b
p=1<q
o=p?w.c[r*q+1]:0
for(n=r+1,m=n,l=r;m<x;++m)if((p?w.c[m*q+1]:0)<o){o=p?w.c[m*q+1]:0
l=m}if(r!==l){k=0<q
m=k?w.c[l*q]:0
j=k?w.c[r*q]:0
if(k){i=w.c
j=D.c.D(j)
i.$flags&2&&B.A(i)
i[l*q]=j}if(k){k=w.c
j=D.c.D(m)
k.$flags&2&&B.A(k)
k[r*q]=j}m=p?w.c[l*q+1]:0
k=p?w.c[r*q+1]:0
if(p){j=w.c
k=D.c.D(k)
j.$flags&2&&B.A(j)
j[l*q+1]=k}if(p){p=w.c
k=D.c.D(m)
p.$flags&2&&B.A(p)
p[r*q+1]=k}p=2<q
m=p?w.c[l*q+2]:0
k=p?w.c[r*q+2]:0
if(p){j=w.c
k=D.c.D(k)
j.$flags&2&&B.A(j)
j[l*q+2]=k}if(p){p=w.c
k=D.c.D(m)
p.$flags&2&&B.A(p)
p[r*q+2]=k}p=3<q
m=p?w.c[l*q+3]:0
k=p?w.c[r*q+3]:0
if(p){j=w.c
k=D.c.D(k)
j.$flags&2&&B.A(j)
j[l*q+3]=k}if(p){p=w.c
k=D.c.D(m)
p.$flags&2&&B.A(p)
p[r*q+3]=k}}if(o!==t){u&2&&B.A(v)
v[t]=s+r>>>1
for(m=t+1;m<o;++m)v[m]=r
s=r
t=o}}x=h.r
x.toString
w=D.c.P(s+x,1)
u&2&&B.A(v)
v[t]=w
for(n=t+1;n<256;++n)v[n]=x},
auh(d,e){var x,w,v,u
for(x=this.y,w=d*d,v=0;v<d;++v){x===$&&B.b()
u=D.d.D(e*((w-v*v)*256/w))
x.$flags&2&&B.A(x)
x[v]=u}},
aow(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.x
a2===$&&B.b()
x=30+D.c.b7(a1.b-1,3)
w=a3.gcX(0)*a3.gb4(0)
v=D.c.hu(w,a1.b)
u=Math.max(D.c.b7(v,100),1)
if(u===0)u=1
t=D.c.P(a2,8)
if(t<=1)t=0
a1.auh(t,1024)
if(w<1509)s=a1.b=1
else if(D.c.ap(w,499)!==0)s=499
else if(D.c.ap(w,491)!==0)s=491
else s=D.c.ap(w,487)!==0?487:503
r=a3.gcX(0)
q=a3.gb4(0)
for(p=a2,o=1024,n=0,m=0,l=0,k=0;k<v;){a2=a3.a
j=a2==null?null:a2.ek(m,l,null)
if(j==null)j=new A.ff()
i=j.gaw(j)
h=j.gaK()
g=j.gaL(j)
if(k===0){a2=a1.z
a2===$&&B.b()
f=a1.e
f===$&&B.b()
f*=3
a2[f]=g
a2[f+1]=h
a2[f+2]=i}e=a1.blN(g,h,i)
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
if(t>0)a1.aUp(d,t,e,g,h,i)}n+=s
m+=s
for(;m>r;){m-=r;++l}for(;n>=w;){n-=w
l-=q}++k
if(D.c.ap(k,u)===0){o-=D.c.hu(o,x)
p-=D.c.b7(p,30)
t=D.c.P(p,8)
if(t<=1)t=0
a1.auh(t,o)}}},
aUp(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=f-e,j=l.d-1
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
blN(d,e,f){var x,w,v,u,t,s
for(x=this.d,w=this.z,v=0,u=0;v<x;++v){w===$&&B.b()
t=u+1
s=!1
if(w[u]===d){u=t+1
if(w[t]===e){t=u+1
s=w[u]===f
u=t}}else u=t
if(s)return v}return-1}}
A.aux.prototype={
aZ(d){var x,w,v=this
if(v.a===v.c.length)v.b0i()
x=v.c
w=v.a++
x.$flags&2&&B.A(x)
x[w]=d&255},
a0A(d,e){var x,w,v,u,t=this
e=J.bk(d)
for(;x=t.a,w=x+e,v=t.c,u=v.length,w>u;)t.alq(w-u)
D.A.ht(v,x,w,d)
t.a+=e},
mx(d){return this.a0A(d,null)},
l5(d){var x=this
if(x.b){x.aZ(D.c.P(d,8)&255)
x.aZ(d&255)
return}x.aZ(d&255)
x.aZ(D.c.P(d,8)&255)},
ig(d){var x=this
if(x.b){x.aZ(D.c.P(d,24)&255)
x.aZ(D.c.P(d,16)&255)
x.aZ(D.c.P(d,8)&255)
x.aZ(d&255)
return}x.aZ(d&255)
x.aZ(D.c.P(d,8)&255)
x.aZ(D.c.P(d,16)&255)
x.aZ(D.c.P(d,24)&255)},
bKN(d){var x,w=this,v=new Float32Array(1)
v[0]=d
x=J.d_(D.eR.gag(v),0,null)
if(w.b){w.aZ(x[3])
w.aZ(x[2])
w.aZ(x[1])
w.aZ(x[0])
return}w.aZ(x[0])
w.aZ(x[1])
w.aZ(x[2])
w.aZ(x[3])},
bKO(d){var x,w=this,v=new Float64Array(1)
v[0]=d
x=J.d_(D.e6.gag(v),0,null)
if(w.b){w.aZ(x[7])
w.aZ(x[6])
w.aZ(x[5])
w.aZ(x[4])
w.aZ(x[3])
w.aZ(x[2])
w.aZ(x[1])
w.aZ(x[0])
return}w.aZ(x[0])
w.aZ(x[1])
w.aZ(x[2])
w.aZ(x[3])
w.aZ(x[4])
w.aZ(x[5])
w.aZ(x[6])
w.aZ(x[7])},
alq(d){var x,w,v,u
if(d!=null)x=d
else{w=this.c.length
x=w===0?8192:w*2}w=this.c
v=w.length
u=new Uint8Array(v+x)
D.A.ht(u,0,v,w)
this.c=u},
b0i(){return this.alq(null)},
gu(d){return this.a}}
A.bsK.prototype={
aHo(d){var x,w,v,u,t,s,r=d.gcX(0),q=d.gb4(0),p=this.a
p===$&&B.b()
x=A.hA(null,null,C.a6,0,C.bg,q,null,0,1,p,C.a6,r,!1)
r=x.a
w=r.ga1(r)
w.q()
x.z=d.z
x.w=d.w
x.y=d.y
for(r=d.a,r=r.ga1(r);r.q();){v=r.gL(r)
u=w.gL(w)
t=D.d.D(v.gaw(v))
s=D.d.D(v.gaK())
u.m(0,0,this.ba1(D.d.D(v.gaL(v)),s,t))
w.q()}return x}}
A.nK.prototype={
D(d){var x=this.b
return x===0?0:D.c.hu(this.a,x)},
u0(d){var x=this.b
return x===0?0:this.a/x},
k(d,e){if(e==null)return!1
return e instanceof A.nK&&this.a===e.a&&this.b===e.b},
gv(d){return B.ab(this.a,this.b,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
j(d){return""+this.a+"/"+this.b}}
A.bvb.prototype={
J(){return"ResizeMode."+this.b}}
A.bv8.prototype={
J(){return"RequestImageFormat."+this.b}}
A.bGg.prototype={}
var z=a.updateTypes(["~(lM)","r(qt,r,r)","r([r])","~(BW,B<r>)","~(r,r,r,r,r,d5)","~(e,pP)","~(r)","S<~>()","~()","fa(M)","~(r,jU)","BW(r)"])
A.bWD.prototype={
$1(d){var x=0,w=B.l(y.as),v,u=this,t,s
var $async$$1=B.h(function(e,f){if(e===1)return B.i(f,w)
while(true)switch(x){case 0:s=u.a
if(s.r)s.f=!0
if(s.f){x=1
break}t=s.e
x=3
return B.c(s.rU(t==null?"":t),$async$$1)
case 3:s.f=!0
case 1:return B.j(v,w)}})
return B.k($async$$1,w)},
$S:74}
A.bWA.prototype={
$0(){this.a.r=!0},
$S:0}
A.bWB.prototype={
$0(){this.a.r=!1},
$S:0}
A.bWC.prototype={
$0(){var x=0,w=B.l(y.H),v=this,u,t
var $async$$0=B.h(function(d,e){if(d===1)return B.i(e,w)
while(true)switch(x){case 0:u=v.a
t=u.e
x=2
return B.c(u.rU(t==null?"":t),$async$$0)
case 2:return B.j(null,w)}})
return B.k($async$$0,w)},
$S:1}
A.bWG.prototype={
$0(){var x=this.a
x.x=x.w=!0},
$S:0}
A.bWH.prototype={
$1(d){var x=null
return N.jo(B.a([B.de(!1,G.bp(V.DC,x),x,x,x,x,x,x,new A.bWF(d),x,x)],y.E),x,C.b4A,x,x,x,C.b3Z)},
$S:z+9}
A.bWF.prototype={
$0(){return B.bX(this.a,!1).hl(!0)},
$S:0}
A.bWI.prototype={
$0(){this.a.y=0},
$S:0}
A.bWJ.prototype={
$0(){var x=this.a
x.B(new A.bWE(x))},
$S:0}
A.bWE.prototype={
$0(){var x=this.a
x.y=++x.z/x.Q.length},
$S:0}
A.bWK.prototype={
$0(){this.a.w=!1},
$S:0}
A.bfe.prototype={
$0(){return A.cuU(this.a,this.b,"jpg",this.c)},
$S:275}
A.bfg.prototype={
$0(){return A.cuU(this.a,this.b,"png",null)},
$S:275}
A.bf6.prototype={
$2(d,e){var x=A.cuJ(e)
this.a.a.m(0,d,x)
return x},
$S:z+5}
A.bf7.prototype={
$2(d,e){var x=e.dZ(0)
this.a.a.m(0,d,x)
return x},
$S:z+10}
A.bf8.prototype={
$2(d,e){var x=A.cuJ(e)
this.a.b.a.m(0,d,x)
return x},
$S:z+5}
A.aYk.prototype={
$4(d,e,f,g){var x,w,v=this,u=v.a
if(u.a<v.c){x=v.b.c&&v.d.ch!=null
w=v.e
if(x){x=v.d
w.ij(x.ch.n7(d),x.ch.n5(d),x.ch.n4(d),x.ch.os(d))}else w.ij(d,e,f,g)
w.q();++u.a}},
$S:744}
A.b8W.prototype={
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
$S:745}
A.bgJ.prototype={
$1(d){var x,w,v,u,t=this.b,s=t.df(),r=t.df()
t=this.a
if(!t.d.y.a3(0,s))throw B.f(A.c4("Invalid Component in SOS block"))
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
$S:z+11}
A.brH.prototype={
$1(d){return d!==""},
$S:16}
A.bHO.prototype={
$2(d,e){return(d|e<<16)>>>0},
$S:189}
A.bfv.prototype={
$4(d,e,f,g){var x=this.b
return d+this.a*(e-d+x*(d+g-f-e))+x*(f-d)},
$S:746}
A.bfu.prototype={
$5(d,e,f,g,h){var x=-e,w=d*d
return f+0.5*(d*(x+g)+w*(2*e-5*f+4*g-h)+w*d*(x+3*f-3*g+h))},
$S:747};(function installTearOffs(){var x=a._instance_0u,w=a.installInstanceTearOff,v=a._instance_2u,u=a._static_1,t=a._instance_1u,s=a.installStaticTearOff
var r
x(r=A.aa0.prototype,"gaId","xP",7)
x(r,"gbsk","a8D",8)
w(A.jU.prototype,"gxz",1,0,function(){return[0]},["$1","$0"],["ja","D"],2,0,0)
w(A.tL.prototype,"gxz",1,0,function(){return[0]},["$1","$0"],["ja","D"],2,0,0)
w(A.y9.prototype,"gxz",1,0,function(){return[0]},["$1","$0"],["ja","D"],2,0,0)
w(A.r0.prototype,"gxz",1,0,function(){return[0]},["$1","$0"],["ja","D"],2,0,0)
w(A.tN.prototype,"gxz",1,0,function(){return[0]},["$1","$0"],["ja","D"],2,0,0)
w(A.vI.prototype,"gxz",1,0,function(){return[0]},["$1","$0"],["ja","D"],2,0,0)
w(A.y8.prototype,"gxz",1,0,function(){return[0]},["$1","$0"],["ja","D"],2,0,0)
w(A.y7.prototype,"gxz",1,0,function(){return[0]},["$1","$0"],["ja","D"],2,0,0)
w(A.tO.prototype,"gxz",1,0,function(){return[0]},["$1","$0"],["ja","D"],2,0,0)
v(r=A.aqt.prototype,"gaYA","aYB",3)
v(r,"gaYD","aYE",3)
v(r,"gaYF","aYG",3)
v(r,"gaYu","aYv",3)
v(r,"gaYw","aYx",3)
u(A,"db4","cYr",0)
u(A,"daY","cYj",0)
u(A,"daW","cYh",0)
u(A,"db2","cYp",0)
u(A,"db3","cYq",0)
u(A,"db1","cYo",0)
u(A,"db0","cYn",0)
u(A,"db_","cYm",0)
u(A,"db6","cYt",0)
u(A,"db5","cYs",0)
u(A,"daZ","cYk",0)
u(A,"daX","cYi",0)
u(A,"dbh","cYE",0)
u(A,"dbf","cYC",0)
u(A,"db7","cYu",0)
u(A,"db9","cYw",0)
u(A,"db8","cYv",0)
u(A,"dba","cYx",0)
u(A,"dbi","cYF",0)
u(A,"dbg","cYD",0)
u(A,"dbb","cYy",0)
u(A,"dbc","cYz",0)
u(A,"dbd","cYA",0)
u(A,"dbe","cYB",0)
t(A.a71.prototype,"gbh1","bh2",6)
t(A.aqh.prototype,"gby1","by2",6)
s(A,"cpv",3,null,["$3"],["cYG"],1,0)
s(A,"dbj",3,null,["$3"],["cYH"],1,0)
s(A,"dbo",3,null,["$3"],["cYM"],1,0)
s(A,"dbp",3,null,["$3"],["cYN"],1,0)
s(A,"dbq",3,null,["$3"],["cYO"],1,0)
s(A,"dbr",3,null,["$3"],["cYP"],1,0)
s(A,"dbs",3,null,["$3"],["cYQ"],1,0)
s(A,"dbt",3,null,["$3"],["cYR"],1,0)
s(A,"dbu",3,null,["$3"],["cYS"],1,0)
s(A,"dbv",3,null,["$3"],["cYT"],1,0)
s(A,"dbk",3,null,["$3"],["cYI"],1,0)
s(A,"dbl",3,null,["$3"],["cYJ"],1,0)
s(A,"dbm",3,null,["$3"],["cYK"],1,0)
s(A,"dbn",3,null,["$3"],["cYL"],1,0)
s(A,"dby",6,null,["$6"],["cZ4"],4,0)
s(A,"dbz",6,null,["$6"],["cZ5"],4,0)
s(A,"dbx",6,null,["$6"],["cZ3"],4,0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.ahs,B.jS)
w(B.E,[A.bg5,A.boS,A.bJk,A.b4q,A.rV,A.bX0,A.c8s,A.beE,A.bfJ,A.bJj,A.bJl,A.hq,A.tM,A.aI2,A.anj,A.pP,A.jU,A.aYl,A.Fs,A.b4a,A.b49,A.b7M,A.anl,A.b8T,A.anm,A.ann,A.b8V,A.Z2,A.aL1,A.ZG,A.ZH,A.aoU,A.beW,A.apF,A.ajh,A.GT,A.bgG,A.BW,A.bgI,A.Tv,A.aqs,A.bgM,A.aqt,A.a2Q,A.brF,A.a37,A.bsC,A.awy,A.a3a,A.Qp,A.awx,A.rq,A.aAP,A.bEm,A.aAU,A.bEo,A.aAV,A.bEp,A.bid,A.bHB,A.a70,A.bHC,A.bHH,A.bHL,A.bHN,A.a7_,A.bHM,A.bHD,A.K9,A.aBM,A.aBO,A.aBN,A.aBP,A.a71,A.aBK,A.bHI,A.aBL,A.bIy,A.a7g,A.apD,A.ZM,A.aCc,A.a_7,A.bpk,A.av2,A.apT,A.lM,A.bsK,A.aux,A.nK,A.bGg])
x(A.bg4,A.bg5)
x(A.boR,A.boS)
x(A.ced,A.bJk)
x(A.Bt,B.F)
x(A.aa0,B.L)
w(B.bG,[A.bWD,A.bWH,A.aYk,A.b8W,A.bgJ,A.brH,A.bfv,A.bfu])
w(B.cl,[A.bWA,A.bWB,A.bWC,A.bWG,A.bWF,A.bWI,A.bWJ,A.bWE,A.bWK,A.bfe,A.bfg])
w(B.dR,[A.aZA,A.nq,A.aif,A.mD,A.lB,A.NQ,A.Gp,A.tD,A.Og,A.bgH,A.Q7,A.a2P,A.CT,A.aw2,A.CU,A.u9,A.o_,A.JZ,A.ku,A.rJ,A.Ka,A.Sz,A.beT,A.aoJ,A.aqk,A.ba6,A.bvb,A.bv8])
w(B.v,[A.Mv,A.Mw,A.Mx,A.My,A.Mz,A.MA,A.MD,A.ME,A.MF,A.MG,A.MH,A.xv,A.BC,A.lK,A.I2,A.I3,A.I4,A.I5,A.I6,A.I7,A.I8,A.I9,A.Ia,A.Ib,A.Ic,A.Id,A.ff])
w(A.xv,[A.ajc,A.MB])
x(A.NO,A.tM)
w(B.dh,[A.bf6,A.bf7,A.bf8,A.bHO])
w(A.jU,[A.tL,A.Bx,A.y9,A.r0,A.tN,A.vI,A.y8,A.y7,A.tO,A.Bz,A.By,A.H0])
w(A.b4a,[A.aij,A.b8U,A.bcH,A.beV,A.aqr,A.aw1,A.brG,A.bsB,A.bsD,A.bE_,A.bEn,A.bIz])
x(A.b5r,A.aij)
x(A.bgd,A.b8T)
w(A.bgd,[A.aqc,A.bge,A.bgf,A.bgg,A.aqe])
x(A.aqd,A.Z2)
x(A.aqf,A.ZH)
x(A.beU,A.Fs)
w(A.GT,[A.GU,A.a_5])
w(A.b7M,[A.bgK,A.brD])
x(A.aqg,A.a2Q)
x(A.bgh,A.brF)
x(A.IA,A.b49)
w(A.awy,[A.yP,A.lV])
x(A.aqh,A.a71)
x(A.aqi,A.a7g)
x(A.aqj,A.aCc)
w(A.lK,[A.Or,A.Os,A.a_a,A.a_b,A.a_c,A.a_d,A.Ot,A.Ou,A.Ov,A.Ow,A.Ox,A.Oy])
w(A.bpk,[A.auK,A.auL,A.auM,A.auN,A.auO,A.auP,A.auQ,A.a1P,A.u3])
x(A.bny,A.bsK)})()
B.bl(b.typeUniverse,JSON.parse('{"ahs":{"jS":[],"b6":[]},"Bt":{"F":[],"d":[]},"aa0":{"L":["Bt"]},"hq":{"bn":["aW"]},"Mv":{"dO":[],"v":["aW"],"v.E":"aW"},"Mw":{"dO":[],"v":["aW"],"v.E":"aW"},"Mx":{"dO":[],"v":["aW"],"v.E":"aW"},"My":{"dO":[],"v":["aW"],"v.E":"aW"},"Mz":{"dO":[],"v":["aW"],"v.E":"aW"},"MA":{"dO":[],"v":["aW"],"v.E":"aW"},"MD":{"dO":[],"v":["aW"],"v.E":"aW"},"ME":{"dO":[],"v":["aW"],"v.E":"aW"},"MF":{"dO":[],"v":["aW"],"v.E":"aW"},"MG":{"dO":[],"v":["aW"],"v.E":"aW"},"MH":{"dO":[],"v":["aW"],"v.E":"aW"},"xv":{"dO":[],"v":["aW"],"v.E":"aW"},"ajc":{"dO":[],"v":["aW"],"v.E":"aW"},"MB":{"dO":[],"v":["aW"],"v.E":"aW"},"tL":{"jU":[]},"Bx":{"jU":[]},"y9":{"jU":[]},"r0":{"jU":[]},"tN":{"jU":[]},"vI":{"jU":[]},"y8":{"jU":[]},"y7":{"jU":[]},"tO":{"jU":[]},"Bz":{"jU":[]},"By":{"jU":[]},"H0":{"jU":[]},"aqd":{"Z2":[]},"aqf":{"ZH":[]},"GU":{"GT":[]},"a_5":{"GT":[]},"aqg":{"a2Q":[]},"aqi":{"a7g":[]},"BC":{"v":["cL"],"v.E":"cL"},"lK":{"v":["cL"]},"Or":{"lK":[],"v":["cL"],"v.E":"cL"},"Os":{"lK":[],"v":["cL"],"v.E":"cL"},"a_a":{"lK":[],"v":["cL"],"v.E":"cL"},"a_b":{"lK":[],"v":["cL"],"v.E":"cL"},"a_c":{"lK":[],"v":["cL"],"v.E":"cL"},"a_d":{"lK":[],"v":["cL"],"v.E":"cL"},"Ot":{"lK":[],"v":["cL"],"v.E":"cL"},"Ou":{"lK":[],"v":["cL"],"v.E":"cL"},"Ov":{"lK":[],"v":["cL"],"v.E":"cL"},"Ow":{"lK":[],"v":["cL"],"v.E":"cL"},"Ox":{"lK":[],"v":["cL"],"v.E":"cL"},"Oy":{"lK":[],"v":["cL"],"v.E":"cL"},"I2":{"cL":[],"dO":[],"v":["aW"],"bn":["cL"],"v.E":"aW"},"I3":{"cL":[],"dO":[],"v":["aW"],"bn":["cL"],"v.E":"aW"},"I4":{"cL":[],"dO":[],"v":["aW"],"bn":["cL"],"v.E":"aW"},"I5":{"cL":[],"dO":[],"v":["aW"],"bn":["cL"],"v.E":"aW"},"I6":{"cL":[],"dO":[],"v":["aW"],"bn":["cL"],"v.E":"aW"},"I7":{"cL":[],"dO":[],"v":["aW"],"bn":["cL"],"v.E":"aW"},"av2":{"bn":["cL"]},"I8":{"cL":[],"dO":[],"v":["aW"],"bn":["cL"],"v.E":"aW"},"I9":{"cL":[],"dO":[],"v":["aW"],"bn":["cL"],"v.E":"aW"},"Ia":{"cL":[],"dO":[],"v":["aW"],"bn":["cL"],"v.E":"aW"},"Ib":{"cL":[],"dO":[],"v":["aW"],"bn":["cL"],"v.E":"aW"},"Ic":{"cL":[],"dO":[],"v":["aW"],"bn":["cL"],"v.E":"aW"},"Id":{"cL":[],"dO":[],"v":["aW"],"bn":["cL"],"v.E":"aW"},"ff":{"cL":[],"dO":[],"v":["aW"],"bn":["cL"],"v.E":"aW"},"apT":{"b6":[]},"cL":{"dO":[],"bn":["cL"],"v":["aW"]}}'))
B.kx(b.typeUniverse,JSON.parse('{"awy":1}'))
var y=(function rtii(){var x=B.z
return{G:x("dO"),v:x("anl"),W:x("ann"),C:x("anC"),_:x("S<@>"),O:x("ZM"),x:x("apD"),X:x("apF"),P:x("pP"),r:x("jU"),I:x("lK"),h:x("a_G"),R:x("v<@>"),q:x("q<ajh>"),Q:x("q<anm>"),m:x("q<Z2>"),b:x("q<ZH>"),A:x("q<ZM>"),g:x("q<BC>"),M:x("q<B<B<B<r>>>>"),o:x("q<B<B<r>>>"),S:x("q<B<r>>"),d:x("q<a2Q>"),Y:x("q<a37>"),j:x("q<nK>"),s:x("q<e>"),cp:x("q<aAV>"),a:x("q<d5>"),cr:x("q<K9>"),F:x("q<aBL>"),J:x("q<a7g>"),E:x("q<d>"),bg:x("q<aI2>"),bd:x("q<Tv>"),t:x("q<r>"),T:x("q<GT?>"),cB:x("q<aqs?>"),cQ:x("q<B<r>?>"),w:x("q<qt?>"),e:x("q<d5?>"),y:x("q<~(lM)>"),c:x("BW"),bp:x("B<a_G>"),f:x("B<B<r>>"),k:x("B<nK>"),cm:x("B<a7_>"),K:x("B<K9>"),n:x("B<K>"),L:x("B<r>"),as:x("ay"),c0:x("cL"),aG:x("a37"),a2:x("dfp"),ab:x("a3a"),aM:x("Qp"),i:x("nK"),N:x("e"),aL:x("aAU"),ah:x("iE"),bk:x("qt"),D:x("d5"),V:x("a7_"),bQ:x("aBM"),bl:x("aBN"),bt:x("aBP"),U:x("ai<e>"),bc:x("aL1"),cb:x("K"),z:x("@"),p:x("r"),a7:x("aq8?"),cl:x("B<r>?"),l:x("B<GT?>?"),ac:x("d5?"),ak:x("a70?"),B:x("K9?"),Z:x("aBO?"),u:x("r?"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.xT=new A.aif(0,"direct")
C.xU=new A.aif(1,"alpha")
C.F9=new A.lB(0,"none")
C.xV=new A.lB(3,"bitfields")
C.xW=new A.lB(6,"alphaBitfields")
C.bcx=new A.bJj()
C.FP=new A.bJl()
C.iM=new A.ced()
C.FW=new A.aZA(4,"luminance")
C.ak1=new A.Gp(0,"red")
C.ak2=new A.Gp(1,"green")
C.ak3=new A.Gp(2,"blue")
C.ak4=new A.Gp(3,"alpha")
C.ak5=new A.Gp(4,"other")
C.Ih=new A.NQ(0,"uint")
C.zu=new A.NQ(1,"half")
C.zv=new A.NQ(2,"float")
C.Ii=new A.tD(0,"none")
C.akv=new A.ba6(2,"both")
C.f8=new A.nq(0,"uint1")
C.fR=new A.nq(1,"uint2")
C.j_=new A.nq(10,"float32")
C.kr=new A.nq(11,"float64")
C.fS=new A.nq(2,"uint4")
C.a6=new A.nq(3,"uint8")
C.cb=new A.nq(4,"uint16")
C.j0=new A.nq(5,"uint32")
C.ks=new A.nq(6,"int8")
C.kt=new A.nq(7,"int16")
C.ku=new A.nq(8,"int32")
C.hA=new A.nq(9,"float16")
C.akH=new A.aoJ(1,"page")
C.bg=new A.aoJ(2,"sequence")
C.zH=new A.beT(1,"deflate")
C.IK=new A.Og(2,"cur")
C.W=new A.mD(0,"none")
C.Jm=new A.mD(1,"byte")
C.Jn=new A.mD(10,"sRational")
C.Jo=new A.mD(11,"single")
C.Jp=new A.mD(12,"double")
C.bz=new A.mD(2,"ascii")
C.be=new A.mD(3,"short")
C.cI=new A.mD(4,"long")
C.e3=new A.mD(5,"rational")
C.Jq=new A.mD(6,"sByte")
C.hD=new A.mD(7,"undefined")
C.Jr=new A.mD(8,"sShort")
C.Js=new A.mD(9,"sLong")
C.anF=new A.aqk(0,"nearest")
C.bcN=new A.aqk(1,"linear")
C.JL=new A.bgH(0,"yuv444")
C.Ae=B.a(x([0,2,8]),y.t)
C.aoy=B.a(x([0,4,2,1]),y.t)
C.akR=new A.Og(0,"invalid")
C.akS=new A.Og(1,"ico")
C.aoD=B.a(x([C.akR,C.akS,C.IK]),B.z("q<Og>"))
C.K8=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),y.t)
C.api=B.a(x([252,243,207,63]),y.t)
C.aTI=new A.Q7(0,"none")
C.a1J=new A.Q7(1,"background")
C.a1K=new A.Q7(2,"previous")
C.apk=B.a(x([C.aTI,C.a1J,C.a1K]),B.z("q<Q7>"))
C.Kb=B.a(x([292,260,226,226]),y.t)
C.Kc=B.a(x([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125]),y.t)
C.apq=B.a(x([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0]),y.t)
C.apx=B.a(x([2,3,7]),y.t)
C.Kg=B.a(x([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68]),y.t)
C.apE=B.a(x([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),y.t)
C.apS=B.a(x([3,3,11]),y.t)
C.AZ=B.a(x([128,128,128,128,128,128,128,128,128,128,128]),y.t)
C.L_=B.a(x([C.AZ,C.AZ,C.AZ]),y.S)
C.as8=B.a(x([253,136,254,255,228,219,128,128,128,128,128]),y.t)
C.aut=B.a(x([189,129,242,255,227,213,255,219,128,128,128]),y.t)
C.auA=B.a(x([106,126,227,252,214,209,255,255,128,128,128]),y.t)
C.ay5=B.a(x([C.as8,C.aut,C.auA]),y.S)
C.ayp=B.a(x([1,98,248,255,236,226,255,255,128,128,128]),y.t)
C.aqe=B.a(x([181,133,238,254,221,234,255,154,128,128,128]),y.t)
C.apY=B.a(x([78,134,202,247,198,180,255,219,128,128,128]),y.t)
C.azG=B.a(x([C.ayp,C.aqe,C.apY]),y.S)
C.arZ=B.a(x([1,185,249,255,243,255,128,128,128,128,128]),y.t)
C.aye=B.a(x([184,150,247,255,236,224,128,128,128,128,128]),y.t)
C.aBv=B.a(x([77,110,216,255,236,230,128,128,128,128,128]),y.t)
C.ax6=B.a(x([C.arZ,C.aye,C.aBv]),y.S)
C.axk=B.a(x([1,101,251,255,241,255,128,128,128,128,128]),y.t)
C.as6=B.a(x([170,139,241,252,236,209,255,255,128,128,128]),y.t)
C.axy=B.a(x([37,116,196,243,228,255,255,255,128,128,128]),y.t)
C.arh=B.a(x([C.axk,C.as6,C.axy]),y.S)
C.av5=B.a(x([1,204,254,255,245,255,128,128,128,128,128]),y.t)
C.aCk=B.a(x([207,160,250,255,238,128,128,128,128,128,128]),y.t)
C.aCj=B.a(x([102,103,231,255,211,171,128,128,128,128,128]),y.t)
C.at0=B.a(x([C.av5,C.aCk,C.aCj]),y.S)
C.aqX=B.a(x([1,152,252,255,240,255,128,128,128,128,128]),y.t)
C.aCu=B.a(x([177,135,243,255,234,225,128,128,128,128,128]),y.t)
C.awO=B.a(x([80,129,211,255,194,224,128,128,128,128,128]),y.t)
C.ay4=B.a(x([C.aqX,C.aCu,C.awO]),y.S)
C.LG=B.a(x([1,1,255,128,128,128,128,128,128,128,128]),y.t)
C.ayU=B.a(x([246,1,255,128,128,128,128,128,128,128,128]),y.t)
C.awc=B.a(x([255,128,128,128,128,128,128,128,128,128,128]),y.t)
C.aCL=B.a(x([C.LG,C.ayU,C.awc]),y.S)
C.asR=B.a(x([C.L_,C.ay5,C.azG,C.ax6,C.arh,C.at0,C.ay4,C.aCL]),y.o)
C.aBD=B.a(x([198,35,237,223,193,187,162,160,145,155,62]),y.t)
C.as7=B.a(x([131,45,198,221,172,176,220,157,252,221,1]),y.t)
C.aBC=B.a(x([68,47,146,208,149,167,221,162,255,223,128]),y.t)
C.avA=B.a(x([C.aBD,C.as7,C.aBC]),y.S)
C.azK=B.a(x([1,149,241,255,221,224,255,255,128,128,128]),y.t)
C.aAk=B.a(x([184,141,234,253,222,220,255,199,128,128,128]),y.t)
C.aw1=B.a(x([81,99,181,242,176,190,249,202,255,255,128]),y.t)
C.aB6=B.a(x([C.azK,C.aAk,C.aw1]),y.S)
C.aAL=B.a(x([1,129,232,253,214,197,242,196,255,255,128]),y.t)
C.aC9=B.a(x([99,121,210,250,201,198,255,202,128,128,128]),y.t)
C.ay9=B.a(x([23,91,163,242,170,187,247,210,255,255,128]),y.t)
C.awh=B.a(x([C.aAL,C.aC9,C.ay9]),y.S)
C.atz=B.a(x([1,200,246,255,234,255,128,128,128,128,128]),y.t)
C.aAI=B.a(x([109,178,241,255,231,245,255,255,128,128,128]),y.t)
C.app=B.a(x([44,130,201,253,205,192,255,255,128,128,128]),y.t)
C.aBg=B.a(x([C.atz,C.aAI,C.app]),y.S)
C.aqG=B.a(x([1,132,239,251,219,209,255,165,128,128,128]),y.t)
C.aoF=B.a(x([94,136,225,251,218,190,255,255,128,128,128]),y.t)
C.aAO=B.a(x([22,100,174,245,186,161,255,199,128,128,128]),y.t)
C.axh=B.a(x([C.aqG,C.aoF,C.aAO]),y.S)
C.aAj=B.a(x([1,182,249,255,232,235,128,128,128,128,128]),y.t)
C.axT=B.a(x([124,143,241,255,227,234,128,128,128,128,128]),y.t)
C.aum=B.a(x([35,77,181,251,193,211,255,205,128,128,128]),y.t)
C.auH=B.a(x([C.aAj,C.axT,C.aum]),y.S)
C.aCM=B.a(x([1,157,247,255,236,231,255,255,128,128,128]),y.t)
C.asO=B.a(x([121,141,235,255,225,227,255,255,128,128,128]),y.t)
C.aAJ=B.a(x([45,99,188,251,195,217,255,224,128,128,128]),y.t)
C.ara=B.a(x([C.aCM,C.asO,C.aAJ]),y.S)
C.aoG=B.a(x([1,1,251,255,213,255,128,128,128,128,128]),y.t)
C.apG=B.a(x([203,1,248,255,255,128,128,128,128,128,128]),y.t)
C.aAn=B.a(x([137,1,177,255,224,255,128,128,128,128,128]),y.t)
C.aqZ=B.a(x([C.aoG,C.apG,C.aAn]),y.S)
C.aA5=B.a(x([C.avA,C.aB6,C.awh,C.aBg,C.axh,C.auH,C.ara,C.aqZ]),y.o)
C.at8=B.a(x([253,9,248,251,207,208,255,192,128,128,128]),y.t)
C.ayV=B.a(x([175,13,224,243,193,185,249,198,255,255,128]),y.t)
C.aCK=B.a(x([73,17,171,221,161,179,236,167,255,234,128]),y.t)
C.ayF=B.a(x([C.at8,C.ayV,C.aCK]),y.S)
C.azU=B.a(x([1,95,247,253,212,183,255,255,128,128,128]),y.t)
C.aww=B.a(x([239,90,244,250,211,209,255,255,128,128,128]),y.t)
C.aBu=B.a(x([155,77,195,248,188,195,255,255,128,128,128]),y.t)
C.aAi=B.a(x([C.azU,C.aww,C.aBu]),y.S)
C.av9=B.a(x([1,24,239,251,218,219,255,205,128,128,128]),y.t)
C.azs=B.a(x([201,51,219,255,196,186,128,128,128,128,128]),y.t)
C.awv=B.a(x([69,46,190,239,201,218,255,228,128,128,128]),y.t)
C.azQ=B.a(x([C.av9,C.azs,C.awv]),y.S)
C.auw=B.a(x([1,191,251,255,255,128,128,128,128,128,128]),y.t)
C.axx=B.a(x([223,165,249,255,213,255,128,128,128,128,128]),y.t)
C.ayl=B.a(x([141,124,248,255,255,128,128,128,128,128,128]),y.t)
C.aAK=B.a(x([C.auw,C.axx,C.ayl]),y.S)
C.avF=B.a(x([1,16,248,255,255,128,128,128,128,128,128]),y.t)
C.asK=B.a(x([190,36,230,255,236,255,128,128,128,128,128]),y.t)
C.asa=B.a(x([149,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aqH=B.a(x([C.avF,C.asK,C.asa]),y.S)
C.ayc=B.a(x([1,226,255,128,128,128,128,128,128,128,128]),y.t)
C.ayL=B.a(x([247,192,255,128,128,128,128,128,128,128,128]),y.t)
C.aBs=B.a(x([240,128,255,128,128,128,128,128,128,128,128]),y.t)
C.apL=B.a(x([C.ayc,C.ayL,C.aBs]),y.S)
C.aBf=B.a(x([1,134,252,255,255,128,128,128,128,128,128]),y.t)
C.axR=B.a(x([213,62,250,255,255,128,128,128,128,128,128]),y.t)
C.aCq=B.a(x([55,93,255,128,128,128,128,128,128,128,128]),y.t)
C.ayb=B.a(x([C.aBf,C.axR,C.aCq]),y.S)
C.arS=B.a(x([C.ayF,C.aAi,C.azQ,C.aAK,C.aqH,C.apL,C.ayb,C.L_]),y.o)
C.axU=B.a(x([202,24,213,235,186,191,220,160,240,175,255]),y.t)
C.as5=B.a(x([126,38,182,232,169,184,228,174,255,187,128]),y.t)
C.aqJ=B.a(x([61,46,138,219,151,178,240,170,255,216,128]),y.t)
C.aAb=B.a(x([C.axU,C.as5,C.aqJ]),y.S)
C.awN=B.a(x([1,112,230,250,199,191,247,159,255,255,128]),y.t)
C.ar9=B.a(x([166,109,228,252,211,215,255,174,128,128,128]),y.t)
C.axp=B.a(x([39,77,162,232,172,180,245,178,255,255,128]),y.t)
C.aA7=B.a(x([C.awN,C.ar9,C.axp]),y.S)
C.awX=B.a(x([1,52,220,246,198,199,249,220,255,255,128]),y.t)
C.asY=B.a(x([124,74,191,243,183,193,250,221,255,255,128]),y.t)
C.aul=B.a(x([24,71,130,219,154,170,243,182,255,255,128]),y.t)
C.aA6=B.a(x([C.awX,C.asY,C.aul]),y.S)
C.auh=B.a(x([1,182,225,249,219,240,255,224,128,128,128]),y.t)
C.aCo=B.a(x([149,150,226,252,216,205,255,171,128,128,128]),y.t)
C.aCZ=B.a(x([28,108,170,242,183,194,254,223,255,255,128]),y.t)
C.aBQ=B.a(x([C.auh,C.aCo,C.aCZ]),y.S)
C.aD1=B.a(x([1,81,230,252,204,203,255,192,128,128,128]),y.t)
C.aAE=B.a(x([123,102,209,247,188,196,255,233,128,128,128]),y.t)
C.aBn=B.a(x([20,95,153,243,164,173,255,203,128,128,128]),y.t)
C.aAF=B.a(x([C.aD1,C.aAE,C.aBn]),y.S)
C.avU=B.a(x([1,222,248,255,216,213,128,128,128,128,128]),y.t)
C.axO=B.a(x([168,175,246,252,235,205,255,255,128,128,128]),y.t)
C.auq=B.a(x([47,116,215,255,211,212,255,255,128,128,128]),y.t)
C.asw=B.a(x([C.avU,C.axO,C.auq]),y.S)
C.avM=B.a(x([1,121,236,253,212,214,255,255,128,128,128]),y.t)
C.awZ=B.a(x([141,84,213,252,201,202,255,219,128,128,128]),y.t)
C.ayz=B.a(x([42,80,160,240,162,185,255,205,128,128,128]),y.t)
C.auL=B.a(x([C.avM,C.awZ,C.ayz]),y.S)
C.aCD=B.a(x([244,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aoB=B.a(x([238,1,255,128,128,128,128,128,128,128,128]),y.t)
C.ayO=B.a(x([C.LG,C.aCD,C.aoB]),y.S)
C.apf=B.a(x([C.aAb,C.aA7,C.aA6,C.aBQ,C.aAF,C.asw,C.auL,C.ayO]),y.o)
C.aqI=B.a(x([C.asR,C.aA5,C.arS,C.apf]),y.M)
C.aqM=B.a(x([511,1023,2047,4095]),y.t)
C.are=B.a(x([63,207,243,252]),y.t)
C.arL=B.a(x([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]),y.t)
C.qe=B.a(x([0,1,2,3,4,5,6,7,8,9,10,11]),y.t)
C.asd=B.a(x([8,8,4,2]),y.t)
C.aoT=B.a(x([173,148,140]),y.t)
C.aoU=B.a(x([176,155,140,135]),y.t)
C.aoR=B.a(x([180,157,141,134,130]),y.t)
C.apF=B.a(x([254,254,243,230,196,177,153,140,133,130,129]),y.t)
C.asf=B.a(x([C.aoT,C.aoU,C.aoR,C.apF]),y.S)
C.ask=B.a(x([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576]),y.t)
C.L7=B.a(x([1,1.387039845,1.306562965,1.175875602,1,0.785694958,0.5411961,0.275899379]),B.z("q<K>"))
C.asB=B.a(x([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),y.t)
C.asT=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095]),y.t)
C.Lk=B.a(x([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29]),y.t)
C.Lw=B.a(x([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250]),y.t)
C.atm=B.a(x([280,256,256,256,40]),y.t)
C.qL=B.a(x([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63]),y.t)
C.LN=B.a(x([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390]),y.t)
C.Av=B.a(x([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157]),y.t)
C.atD=B.a(x([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112]),y.t)
C.Aw=B.a(x([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284]),y.t)
C.LY=B.a(x([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119]),y.t)
C.M_=B.a(x([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28]),y.t)
C.au6=B.a(x([C.Ih,C.zu,C.zv]),B.z("q<NQ>"))
C.r1=B.a(x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),y.t)
C.auR=B.a(x([254,253,251,247,239,223,191,127]),y.t)
C.rg=B.a(x([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8]),y.t)
C.MG=B.a(x([A.dbb(),A.db3(),A.dbi(),A.dbg(),A.dbd(),A.dbc(),A.dbe()]),y.y)
C.MI=B.a(x([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5]),y.t)
C.MT=B.a(x([C.W,C.Jm,C.bz,C.be,C.cI,C.e3,C.Jq,C.hD,C.Jr,C.Js,C.Jn,C.Jo,C.Jp]),B.z("q<mD>"))
C.DG=new A.ku(0,"whiteIsZero")
C.b53=new A.ku(1,"blackIsZero")
C.b5a=new A.ku(2,"rgb")
C.DI=new A.ku(3,"palette")
C.b5b=new A.ku(4,"transparencyMask")
C.a4E=new A.ku(5,"cmyk")
C.b5c=new A.ku(6,"yCbCr")
C.b5d=new A.ku(7,"reserved7")
C.b5e=new A.ku(8,"cieLab")
C.b5f=new A.ku(9,"iccLab")
C.b54=new A.ku(10,"ituLab")
C.b55=new A.ku(11,"logL")
C.b56=new A.ku(12,"logLuv")
C.b57=new A.ku(13,"colorFilterArray")
C.b58=new A.ku(14,"linearRaw")
C.b59=new A.ku(15,"depth")
C.DH=new A.ku(16,"unknown")
C.ave=B.a(x([C.DG,C.b53,C.b5a,C.DI,C.b5b,C.a4E,C.b5c,C.b5d,C.b5e,C.b5f,C.b54,C.b55,C.b56,C.b57,C.b58,C.b59,C.DH]),B.z("q<ku>"))
C.N8=B.a(x([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0]),y.t)
C.a1H=new A.a2P(0,"source")
C.a1I=new A.a2P(1,"over")
C.avI=B.a(x([C.a1H,C.a1I]),B.z("q<a2P>"))
C.b4W=new A.JZ(0,"invalid")
C.a4C=new A.JZ(1,"uint")
C.ba=new A.JZ(2,"int")
C.nN=new A.JZ(3,"float")
C.avL=B.a(x([C.b4W,C.a4C,C.ba,C.nN]),B.z("q<JZ>"))
C.avS=B.a(x([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15]),y.t)
C.NI=B.a(x([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9]),y.t)
C.awt=B.a(x([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15]),y.t)
C.ak6=new A.tD(1,"rle")
C.ak7=new A.tD(2,"zips")
C.ak8=new A.tD(3,"zip")
C.ak9=new A.tD(4,"piz")
C.aka=new A.tD(5,"pxr24")
C.akb=new A.tD(6,"b44")
C.akc=new A.tD(7,"b44a")
C.awx=B.a(x([C.Ii,C.ak6,C.ak7,C.ak8,C.ak9,C.aka,C.akb,C.akc]),B.z("q<tD>"))
C.ayu=B.a(x([231,120,48,89,115,113,120,152,112]),y.t)
C.apg=B.a(x([152,179,64,126,170,118,46,70,95]),y.t)
C.aws=B.a(x([175,69,143,80,85,82,72,155,103]),y.t)
C.aqp=B.a(x([56,58,10,171,218,189,17,13,152]),y.t)
C.axm=B.a(x([114,26,17,163,44,195,21,10,173]),y.t)
C.axM=B.a(x([121,24,80,195,26,62,44,64,85]),y.t)
C.axg=B.a(x([144,71,10,38,171,213,144,34,26]),y.t)
C.aAR=B.a(x([170,46,55,19,136,160,33,206,71]),y.t)
C.atH=B.a(x([63,20,8,114,114,208,12,9,226]),y.t)
C.av6=B.a(x([81,40,11,96,182,84,29,16,36]),y.t)
C.aoH=B.a(x([C.ayu,C.apg,C.aws,C.aqp,C.axm,C.axM,C.axg,C.aAR,C.atH,C.av6]),y.S)
C.asJ=B.a(x([134,183,89,137,98,101,106,165,148]),y.t)
C.aAu=B.a(x([72,187,100,130,157,111,32,75,80]),y.t)
C.ay0=B.a(x([66,102,167,99,74,62,40,234,128]),y.t)
C.apK=B.a(x([41,53,9,178,241,141,26,8,107]),y.t)
C.auS=B.a(x([74,43,26,146,73,166,49,23,157]),y.t)
C.au1=B.a(x([65,38,105,160,51,52,31,115,128]),y.t)
C.au9=B.a(x([104,79,12,27,217,255,87,17,7]),y.t)
C.awq=B.a(x([87,68,71,44,114,51,15,186,23]),y.t)
C.aA9=B.a(x([47,41,14,110,182,183,21,17,194]),y.t)
C.ayT=B.a(x([66,45,25,102,197,189,23,18,22]),y.t)
C.aBo=B.a(x([C.asJ,C.aAu,C.ay0,C.apK,C.auS,C.au1,C.au9,C.awq,C.aA9,C.ayT]),y.S)
C.ayt=B.a(x([88,88,147,150,42,46,45,196,205]),y.t)
C.axr=B.a(x([43,97,183,117,85,38,35,179,61]),y.t)
C.aup=B.a(x([39,53,200,87,26,21,43,232,171]),y.t)
C.aw8=B.a(x([56,34,51,104,114,102,29,93,77]),y.t)
C.axa=B.a(x([39,28,85,171,58,165,90,98,64]),y.t)
C.atV=B.a(x([34,22,116,206,23,34,43,166,73]),y.t)
C.aoI=B.a(x([107,54,32,26,51,1,81,43,31]),y.t)
C.aAZ=B.a(x([68,25,106,22,64,171,36,225,114]),y.t)
C.asI=B.a(x([34,19,21,102,132,188,16,76,124]),y.t)
C.aBK=B.a(x([62,18,78,95,85,57,50,48,51]),y.t)
C.at4=B.a(x([C.ayt,C.axr,C.aup,C.aw8,C.axa,C.atV,C.aoI,C.aAZ,C.asI,C.aBK]),y.S)
C.ax2=B.a(x([193,101,35,159,215,111,89,46,111]),y.t)
C.arQ=B.a(x([60,148,31,172,219,228,21,18,111]),y.t)
C.aqE=B.a(x([112,113,77,85,179,255,38,120,114]),y.t)
C.aBG=B.a(x([40,42,1,196,245,209,10,25,109]),y.t)
C.avJ=B.a(x([88,43,29,140,166,213,37,43,154]),y.t)
C.atX=B.a(x([61,63,30,155,67,45,68,1,209]),y.t)
C.auz=B.a(x([100,80,8,43,154,1,51,26,71]),y.t)
C.apP=B.a(x([142,78,78,16,255,128,34,197,171]),y.t)
C.awI=B.a(x([41,40,5,102,211,183,4,1,221]),y.t)
C.ati=B.a(x([51,50,17,168,209,192,23,25,82]),y.t)
C.at1=B.a(x([C.ax2,C.arQ,C.aqE,C.aBG,C.avJ,C.atX,C.auz,C.apP,C.awI,C.ati]),y.S)
C.aui=B.a(x([138,31,36,171,27,166,38,44,229]),y.t)
C.asZ=B.a(x([67,87,58,169,82,115,26,59,179]),y.t)
C.azF=B.a(x([63,59,90,180,59,166,93,73,154]),y.t)
C.aBl=B.a(x([40,40,21,116,143,209,34,39,175]),y.t)
C.apW=B.a(x([47,15,16,183,34,223,49,45,183]),y.t)
C.as4=B.a(x([46,17,33,183,6,98,15,32,183]),y.t)
C.aD2=B.a(x([57,46,22,24,128,1,54,17,37]),y.t)
C.auD=B.a(x([65,32,73,115,28,128,23,128,205]),y.t)
C.ay_=B.a(x([40,3,9,115,51,192,18,6,223]),y.t)
C.auP=B.a(x([87,37,9,115,59,77,64,21,47]),y.t)
C.awH=B.a(x([C.aui,C.asZ,C.azF,C.aBl,C.apW,C.as4,C.aD2,C.auD,C.ay_,C.auP]),y.S)
C.aCB=B.a(x([104,55,44,218,9,54,53,130,226]),y.t)
C.ar7=B.a(x([64,90,70,205,40,41,23,26,57]),y.t)
C.azE=B.a(x([54,57,112,184,5,41,38,166,213]),y.t)
C.atW=B.a(x([30,34,26,133,152,116,10,32,134]),y.t)
C.ayG=B.a(x([39,19,53,221,26,114,32,73,255]),y.t)
C.atg=B.a(x([31,9,65,234,2,15,1,118,73]),y.t)
C.awF=B.a(x([75,32,12,51,192,255,160,43,51]),y.t)
C.au_=B.a(x([88,31,35,67,102,85,55,186,85]),y.t)
C.avj=B.a(x([56,21,23,111,59,205,45,37,192]),y.t)
C.avu=B.a(x([55,38,70,124,73,102,1,34,98]),y.t)
C.aCI=B.a(x([C.aCB,C.ar7,C.azE,C.atW,C.ayG,C.atg,C.awF,C.au_,C.avj,C.avu]),y.S)
C.avh=B.a(x([125,98,42,88,104,85,117,175,82]),y.t)
C.au5=B.a(x([95,84,53,89,128,100,113,101,45]),y.t)
C.axA=B.a(x([75,79,123,47,51,128,81,171,1]),y.t)
C.ar0=B.a(x([57,17,5,71,102,57,53,41,49]),y.t)
C.azp=B.a(x([38,33,13,121,57,73,26,1,85]),y.t)
C.aCm=B.a(x([41,10,67,138,77,110,90,47,114]),y.t)
C.awz=B.a(x([115,21,2,10,102,255,166,23,6]),y.t)
C.asL=B.a(x([101,29,16,10,85,128,101,196,26]),y.t)
C.auv=B.a(x([57,18,10,102,102,213,34,20,43]),y.t)
C.avH=B.a(x([117,20,15,36,163,128,68,1,26]),y.t)
C.awn=B.a(x([C.avh,C.au5,C.axA,C.ar0,C.azp,C.aCm,C.awz,C.asL,C.auv,C.avH]),y.S)
C.auN=B.a(x([102,61,71,37,34,53,31,243,192]),y.t)
C.aCf=B.a(x([69,60,71,38,73,119,28,222,37]),y.t)
C.auQ=B.a(x([68,45,128,34,1,47,11,245,171]),y.t)
C.aoQ=B.a(x([62,17,19,70,146,85,55,62,70]),y.t)
C.aCW=B.a(x([37,43,37,154,100,163,85,160,1]),y.t)
C.aBV=B.a(x([63,9,92,136,28,64,32,201,85]),y.t)
C.aAz=B.a(x([75,15,9,9,64,255,184,119,16]),y.t)
C.asV=B.a(x([86,6,28,5,64,255,25,248,1]),y.t)
C.ayP=B.a(x([56,8,17,132,137,255,55,116,128]),y.t)
C.aqO=B.a(x([58,15,20,82,135,57,26,121,40]),y.t)
C.axe=B.a(x([C.auN,C.aCf,C.auQ,C.aoQ,C.aCW,C.aBV,C.aAz,C.asV,C.ayP,C.aqO]),y.S)
C.axF=B.a(x([164,50,31,137,154,133,25,35,218]),y.t)
C.asU=B.a(x([51,103,44,131,131,123,31,6,158]),y.t)
C.aBN=B.a(x([86,40,64,135,148,224,45,183,128]),y.t)
C.awr=B.a(x([22,26,17,131,240,154,14,1,209]),y.t)
C.arW=B.a(x([45,16,21,91,64,222,7,1,197]),y.t)
C.aBm=B.a(x([56,21,39,155,60,138,23,102,213]),y.t)
C.aCG=B.a(x([83,12,13,54,192,255,68,47,28]),y.t)
C.ay1=B.a(x([85,26,85,85,128,128,32,146,171]),y.t)
C.awd=B.a(x([18,11,7,63,144,171,4,4,246]),y.t)
C.at5=B.a(x([35,27,10,146,174,171,12,26,128]),y.t)
C.avW=B.a(x([C.axF,C.asU,C.aBN,C.awr,C.arW,C.aBm,C.aCG,C.ay1,C.awd,C.at5]),y.S)
C.aA4=B.a(x([190,80,35,99,180,80,126,54,45]),y.t)
C.aAQ=B.a(x([85,126,47,87,176,51,41,20,32]),y.t)
C.azx=B.a(x([101,75,128,139,118,146,116,128,85]),y.t)
C.aAp=B.a(x([56,41,15,176,236,85,37,9,62]),y.t)
C.aqW=B.a(x([71,30,17,119,118,255,17,18,138]),y.t)
C.axd=B.a(x([101,38,60,138,55,70,43,26,142]),y.t)
C.aw3=B.a(x([146,36,19,30,171,255,97,27,20]),y.t)
C.ayr=B.a(x([138,45,61,62,219,1,81,188,64]),y.t)
C.aBH=B.a(x([32,41,20,117,151,142,20,21,163]),y.t)
C.aAS=B.a(x([112,19,12,61,195,128,48,4,24]),y.t)
C.azP=B.a(x([C.aA4,C.aAQ,C.azx,C.aAp,C.aqW,C.axd,C.aw3,C.ayr,C.aBH,C.aAS]),y.S)
C.awG=B.a(x([C.aoH,C.aBo,C.at4,C.at1,C.awH,C.aCI,C.awn,C.axe,C.avW,C.azP]),y.o)
C.wx=new A.o_(0,"none")
C.iu=new A.o_(1,"palette")
C.a4B=new A.o_(2,"rgb")
C.b4N=new A.o_(3,"gray")
C.b4O=new A.o_(4,"reserved4")
C.b4P=new A.o_(5,"reserved5")
C.b4Q=new A.o_(6,"reserved6")
C.b4R=new A.o_(7,"reserved7")
C.b4S=new A.o_(8,"reserved8")
C.iv=new A.o_(9,"paletteRle")
C.a4A=new A.o_(10,"rgbRle")
C.b4M=new A.o_(11,"grayRle")
C.awQ=B.a(x([C.wx,C.iu,C.a4B,C.b4N,C.b4O,C.b4P,C.b4Q,C.b4R,C.b4S,C.iv,C.a4A,C.b4M]),B.z("q<o_>"))
C.Or=B.a(x([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250]),y.t)
C.axz=B.a(x([A.daW(),A.db2(),A.db4(),A.daY(),A.db0(),A.db6(),A.db_(),A.db5(),A.daX(),A.daZ()]),y.y)
C.An=B.a(x([8,0,8,0]),y.t)
C.ar5=B.a(x([5,3,5,3]),y.t)
C.apT=B.a(x([3,5,3,5]),y.t)
C.JZ=B.a(x([0,8,0,8]),y.t)
C.Ku=B.a(x([4,4,4,4]),y.t)
C.aqC=B.a(x([4,4,0,0]),y.t)
C.OI=B.a(x([C.An,C.ar5,C.apT,C.JZ,C.An,C.Ku,C.aqC,C.JZ]),y.S)
C.OQ=B.a(x([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41]),y.t)
C.ayj=B.a(x([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99]),y.t)
C.tD=B.a(x([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845]),y.t)
C.OV=B.a(x([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127]),y.t)
C.OX=B.a(x([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]),y.t)
C.tL=B.a(x([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567]),y.t)
C.P9=B.a(x([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232]),y.t)
C.PS=B.a(x([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0]),y.t)
C.aTJ=new A.CT(0,"none")
C.aTK=new A.CT(1,"sub")
C.aTL=new A.CT(2,"up")
C.aTM=new A.CT(3,"average")
C.aTN=new A.CT(4,"paeth")
C.PT=B.a(x([C.aTJ,C.aTK,C.aTL,C.aTM,C.aTN]),B.z("q<CT>"))
C.fY=B.a(x([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]),y.t)
C.mW=B.a(x([0,1,3,7,15,31,63,127,255]),y.t)
C.B_=B.a(x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),y.t)
C.et=B.a(x([255,255,255,255,255,255,255,255,255,255,255]),y.t)
C.kZ=B.a(x([C.et,C.et,C.et]),y.S)
C.aw7=B.a(x([176,246,255,255,255,255,255,255,255,255,255]),y.t)
C.aCt=B.a(x([223,241,252,255,255,255,255,255,255,255,255]),y.t)
C.asq=B.a(x([249,253,253,255,255,255,255,255,255,255,255]),y.t)
C.awD=B.a(x([C.aw7,C.aCt,C.asq]),y.S)
C.avb=B.a(x([255,244,252,255,255,255,255,255,255,255,255]),y.t)
C.auJ=B.a(x([234,254,254,255,255,255,255,255,255,255,255]),y.t)
C.Ra=B.a(x([253,255,255,255,255,255,255,255,255,255,255]),y.t)
C.asS=B.a(x([C.avb,C.auJ,C.Ra]),y.S)
C.aBM=B.a(x([255,246,254,255,255,255,255,255,255,255,255]),y.t)
C.ayK=B.a(x([239,253,254,255,255,255,255,255,255,255,255]),y.t)
C.Qy=B.a(x([254,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aAw=B.a(x([C.aBM,C.ayK,C.Qy]),y.S)
C.MM=B.a(x([255,248,254,255,255,255,255,255,255,255,255]),y.t)
C.att=B.a(x([251,255,254,255,255,255,255,255,255,255,255]),y.t)
C.axL=B.a(x([C.MM,C.att,C.et]),y.S)
C.Ah=B.a(x([255,253,254,255,255,255,255,255,255,255,255]),y.t)
C.axC=B.a(x([251,254,254,255,255,255,255,255,255,255,255]),y.t)
C.atO=B.a(x([C.Ah,C.axC,C.Qy]),y.S)
C.aql=B.a(x([255,254,253,255,254,255,255,255,255,255,255]),y.t)
C.av2=B.a(x([250,255,254,255,254,255,255,255,255,255,255]),y.t)
C.tY=B.a(x([254,255,255,255,255,255,255,255,255,255,255]),y.t)
C.avK=B.a(x([C.aql,C.av2,C.tY]),y.S)
C.auu=B.a(x([C.kZ,C.awD,C.asS,C.aAw,C.axL,C.atO,C.avK,C.kZ]),y.o)
C.apd=B.a(x([217,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aw_=B.a(x([225,252,241,253,255,255,254,255,255,255,255]),y.t)
C.azA=B.a(x([234,250,241,250,253,255,253,254,255,255,255]),y.t)
C.aAT=B.a(x([C.apd,C.aw_,C.azA]),y.S)
C.B8=B.a(x([255,254,255,255,255,255,255,255,255,255,255]),y.t)
C.asx=B.a(x([223,254,254,255,255,255,255,255,255,255,255]),y.t)
C.arY=B.a(x([238,253,254,254,255,255,255,255,255,255,255]),y.t)
C.ayE=B.a(x([C.B8,C.asx,C.arY]),y.S)
C.auO=B.a(x([249,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aBJ=B.a(x([C.MM,C.auO,C.et]),y.S)
C.aB0=B.a(x([255,253,255,255,255,255,255,255,255,255,255]),y.t)
C.axB=B.a(x([247,254,255,255,255,255,255,255,255,255,255]),y.t)
C.axi=B.a(x([C.aB0,C.axB,C.et]),y.S)
C.arM=B.a(x([252,255,255,255,255,255,255,255,255,255,255]),y.t)
C.apM=B.a(x([C.Ah,C.arM,C.et]),y.S)
C.Rm=B.a(x([255,254,254,255,255,255,255,255,255,255,255]),y.t)
C.arV=B.a(x([C.Rm,C.Ra,C.et]),y.S)
C.ayy=B.a(x([255,254,253,255,255,255,255,255,255,255,255]),y.t)
C.N6=B.a(x([250,255,255,255,255,255,255,255,255,255,255]),y.t)
C.arI=B.a(x([C.ayy,C.N6,C.tY]),y.S)
C.aqr=B.a(x([C.aAT,C.ayE,C.aBJ,C.axi,C.apM,C.arV,C.arI,C.kZ]),y.o)
C.azS=B.a(x([186,251,250,255,255,255,255,255,255,255,255]),y.t)
C.atj=B.a(x([234,251,244,254,255,255,255,255,255,255,255]),y.t)
C.aAy=B.a(x([251,251,243,253,254,255,254,255,255,255,255]),y.t)
C.atK=B.a(x([C.azS,C.atj,C.aAy]),y.S)
C.atx=B.a(x([236,253,254,255,255,255,255,255,255,255,255]),y.t)
C.ayw=B.a(x([251,253,253,254,254,255,255,255,255,255,255]),y.t)
C.avz=B.a(x([C.Ah,C.atx,C.ayw]),y.S)
C.aA3=B.a(x([254,254,254,255,255,255,255,255,255,255,255]),y.t)
C.atq=B.a(x([C.Rm,C.aA3,C.et]),y.S)
C.aAH=B.a(x([254,254,255,255,255,255,255,255,255,255,255]),y.t)
C.atu=B.a(x([C.B8,C.aAH,C.tY]),y.S)
C.Ro=B.a(x([C.et,C.tY,C.et]),y.S)
C.aqo=B.a(x([C.atK,C.avz,C.atq,C.atu,C.Ro,C.kZ,C.kZ,C.kZ]),y.o)
C.auY=B.a(x([248,255,255,255,255,255,255,255,255,255,255]),y.t)
C.au4=B.a(x([250,254,252,254,255,255,255,255,255,255,255]),y.t)
C.ath=B.a(x([248,254,249,253,255,255,255,255,255,255,255]),y.t)
C.avE=B.a(x([C.auY,C.au4,C.ath]),y.S)
C.apZ=B.a(x([255,253,253,255,255,255,255,255,255,255,255]),y.t)
C.aBe=B.a(x([246,253,253,255,255,255,255,255,255,255,255]),y.t)
C.atM=B.a(x([252,254,251,254,254,255,255,255,255,255,255]),y.t)
C.aBd=B.a(x([C.apZ,C.aBe,C.atM]),y.S)
C.aCN=B.a(x([255,254,252,255,255,255,255,255,255,255,255]),y.t)
C.atb=B.a(x([248,254,253,255,255,255,255,255,255,255,255]),y.t)
C.arH=B.a(x([253,255,254,254,255,255,255,255,255,255,255]),y.t)
C.axV=B.a(x([C.aCN,C.atb,C.arH]),y.S)
C.aCE=B.a(x([255,251,254,255,255,255,255,255,255,255,255]),y.t)
C.ax4=B.a(x([245,251,254,255,255,255,255,255,255,255,255]),y.t)
C.axc=B.a(x([253,253,254,255,255,255,255,255,255,255,255]),y.t)
C.asj=B.a(x([C.aCE,C.ax4,C.axc]),y.S)
C.aso=B.a(x([255,251,253,255,255,255,255,255,255,255,255]),y.t)
C.avg=B.a(x([252,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aAd=B.a(x([C.aso,C.avg,C.B8]),y.S)
C.arj=B.a(x([255,252,255,255,255,255,255,255,255,255,255]),y.t)
C.aCy=B.a(x([249,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aue=B.a(x([255,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aoP=B.a(x([C.arj,C.aCy,C.aue]),y.S)
C.aCY=B.a(x([255,255,253,255,255,255,255,255,255,255,255]),y.t)
C.ats=B.a(x([C.aCY,C.N6,C.et]),y.S)
C.arG=B.a(x([C.avE,C.aBd,C.axV,C.asj,C.aAd,C.aoP,C.ats,C.Ro]),y.o)
C.aAM=B.a(x([C.auu,C.aqr,C.aqo,C.arG]),y.M)
C.a8h=new A.lB(1,"rle8")
C.a8m=new A.lB(2,"rle4")
C.a8n=new A.lB(4,"jpeg")
C.a8o=new A.lB(5,"png")
C.a8p=new A.lB(7,"reserved7")
C.a8q=new A.lB(8,"reserved8")
C.a8r=new A.lB(9,"reserved9")
C.a8i=new A.lB(10,"reserved10")
C.a8j=new A.lB(11,"cmyk")
C.a8k=new A.lB(12,"cmykRle8")
C.a8l=new A.lB(13,"cmykRle4")
C.QB=B.a(x([C.F9,C.a8h,C.a8m,C.xV,C.a8n,C.a8o,C.xW,C.a8p,C.a8q,C.a8r,C.a8i,C.a8j,C.a8k,C.a8l]),B.z("q<lB>"))
C.B0=B.a(x([0,128,192,224,240,248,252,254,255]),y.t)
C.B1=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295]),y.t)
C.aBa=B.a(x([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),y.t)
C.aBh=B.a(x([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),y.t)
C.a5l=new A.Ka(0,"predictor")
C.b7n=new A.Ka(1,"crossColor")
C.b7o=new A.Ka(2,"subtractGreen")
C.a5m=new A.Ka(3,"colorIndexing")
C.aBw=B.a(x([C.a5l,C.b7n,C.b7o,C.a5m]),B.z("q<Ka>"))
C.eu=B.a(x([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255]),y.t)
C.aCa=B.a(x([A.db7(),A.db1(),A.dbh(),A.dbf(),A.db9(),A.db8(),A.dba()]),y.y)
C.Rz=B.a(x([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396]),y.t)
C.aCi=B.a(x([null,A.dby(),A.dbz(),A.dbx()]),B.z("q<~(r,r,r,r,r,d5)?>"))
C.RJ=B.a(x([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),y.t)
C.vb=B.a(x([0,36,72,109,145,182,218,255]),y.t)
C.fn=B.a(x([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255]),y.t)
C.aCv=B.a(x([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),y.t)
C.jc=B.a(x([0,1,1,2,4,8,1,1,2,4,8,4,8]),y.t)
C.aU6=new A.u9(0,"bitmap")
C.a21=new A.u9(1,"grayscale")
C.aU7=new A.u9(2,"indexed")
C.a22=new A.u9(3,"rgb")
C.a23=new A.u9(4,"cmyk")
C.aU8=new A.u9(5,"multiChannel")
C.aU9=new A.u9(6,"duoTone")
C.a24=new A.u9(7,"lab")
C.aCx=B.a(x([C.aU6,C.a21,C.aU7,C.a22,C.a23,C.aU8,C.aU9,C.a24]),B.z("q<u9>"))
C.aCJ=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),y.t)
C.vl=B.a(x([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),y.t)
C.Sh=B.a(x([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0]),y.t)
C.apB=B.a(x([2,6,2,6]),y.t)
C.arv=B.a(x([6,2,6,2]),y.t)
C.apu=B.a(x([2,2,6,6]),y.t)
C.ap6=B.a(x([1,3,3,9]),y.t)
C.aqt=B.a(x([4,0,12,0]),y.t)
C.apR=B.a(x([3,1,9,3]),y.t)
C.asc=B.a(x([8,8,0,0]),y.t)
C.aqv=B.a(x([4,12,0,0]),y.t)
C.aoS=B.a(x([16,0,0,0]),y.t)
C.aoN=B.a(x([12,4,0,0]),y.t)
C.arF=B.a(x([6,6,2,2]),y.t)
C.apU=B.a(x([3,9,1,3]),y.t)
C.aoM=B.a(x([12,0,4,0]),y.t)
C.asp=B.a(x([9,3,3,1]),y.t)
C.d2=B.a(x([C.Ku,C.apB,C.An,C.arv,C.apu,C.ap6,C.aqt,C.apR,C.asc,C.aqv,C.aoS,C.aoN,C.arF,C.apU,C.aoM,C.asp]),y.S)
C.l_=B.a(x([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1]),y.t)
C.aNz={ProcessingSoftware:0,SubfileType:1,OldSubfileType:2,ImageWidth:3,ImageLength:4,ImageHeight:5,BitsPerSample:6,Compression:7,PhotometricInterpretation:8,Thresholding:9,CellWidth:10,CellLength:11,FillOrder:12,DocumentName:13,ImageDescription:14,Make:15,Model:16,StripOffsets:17,Orientation:18,SamplesPerPixel:19,RowsPerStrip:20,StripByteCounts:21,MinSampleValue:22,MaxSampleValue:23,XResolution:24,YResolution:25,PlanarConfiguration:26,PageName:27,XPosition:28,YPosition:29,GrayResponseUnit:30,GrayResponseCurve:31,T4Options:32,T6Options:33,ResolutionUnit:34,PageNumber:35,ColorResponseUnit:36,TransferFunction:37,Software:38,DateTime:39,Artist:40,HostComputer:41,Predictor:42,WhitePoint:43,PrimaryChromaticities:44,ColorMap:45,HalftoneHints:46,TileWidth:47,TileLength:48,TileOffsets:49,TileByteCounts:50,BadFaxLines:51,CleanFaxData:52,ConsecutiveBadFaxLines:53,InkSet:54,InkNames:55,NumberofInks:56,DotRange:57,TargetPrinter:58,ExtraSamples:59,SampleFormat:60,SMinSampleValue:61,SMaxSampleValue:62,TransferRange:63,ClipPath:64,JPEGProc:65,JPEGInterchangeFormat:66,JPEGInterchangeFormatLength:67,YCbCrCoefficients:68,YCbCrSubSampling:69,YCbCrPositioning:70,ReferenceBlackWhite:71,ApplicationNotes:72,Rating:73,CFARepeatPatternDim:74,CFAPattern:75,BatteryLevel:76,Copyright:77,ExposureTime:78,FNumber:79,"IPTC-NAA":80,ExifOffset:81,InterColorProfile:82,ExposureProgram:83,SpectralSensitivity:84,GPSOffset:85,ISOSpeed:86,OECF:87,SensitivityType:88,RecommendedExposureIndex:89,ExifVersion:90,DateTimeOriginal:91,DateTimeDigitized:92,OffsetTime:93,OffsetTimeOriginal:94,OffsetTimeDigitized:95,ComponentsConfiguration:96,CompressedBitsPerPixel:97,ShutterSpeedValue:98,ApertureValue:99,BrightnessValue:100,ExposureBiasValue:101,MaxApertureValue:102,SubjectDistance:103,MeteringMode:104,LightSource:105,Flash:106,FocalLength:107,SubjectArea:108,MakerNote:109,UserComment:110,SubSecTime:111,SubSecTimeOriginal:112,SubSecTimeDigitized:113,XPTitle:114,XPComment:115,XPAuthor:116,XPKeywords:117,XPSubject:118,FlashPixVersion:119,ColorSpace:120,ExifImageWidth:121,ExifImageLength:122,RelatedSoundFile:123,InteroperabilityOffset:124,FlashEnergy:125,SpatialFrequencyResponse:126,FocalPlaneXResolution:127,FocalPlaneYResolution:128,FocalPlaneResolutionUnit:129,SubjectLocation:130,ExposureIndex:131,SensingMethod:132,FileSource:133,SceneType:134,CVAPattern:135,CustomRendered:136,ExposureMode:137,WhiteBalance:138,DigitalZoomRatio:139,FocalLengthIn35mmFilm:140,SceneCaptureType:141,GainControl:142,Contrast:143,Saturation:144,Sharpness:145,DeviceSettingDescription:146,SubjectDistanceRange:147,ImageUniqueID:148,CameraOwnerName:149,BodySerialNumber:150,LensSpecification:151,LensMake:152,LensModel:153,LensSerialNumber:154,Gamma:155,PrintIM:156,Padding:157,OffsetSchema:158,OwnerName:159,SerialNumber:160,InteropIndex:161,InteropVersion:162,RelatedImageFileFormat:163,RelatedImageWidth:164,RelatedImageLength:165,GPSVersionID:166,GPSLatitudeRef:167,GPSLatitude:168,GPSLongitudeRef:169,GPSLongitude:170,GPSAltitudeRef:171,GPSAltitude:172,GPSTimeStamp:173,GPSSatellites:174,GPSStatus:175,GPSMeasureMode:176,GPSDOP:177,GPSSpeedRef:178,GPSSpeed:179,GPSTrackRef:180,GPSTrack:181,GPSImgDirectionRef:182,GPSImgDirection:183,GPSMapDatum:184,GPSDestLatitudeRef:185,GPSDestLatitude:186,GPSDestLongitudeRef:187,GPSDestLongitude:188,GPSDestBearingRef:189,GPSDestBearing:190,GPSDestDistanceRef:191,GPSDestDistance:192,GPSProcessingMethod:193,GPSAreaInformation:194,GPSDate:195,GPSDifferential:196}
C.Xk=new B.G(C.aNz,[11,254,255,256,257,257,258,259,262,263,264,265,266,269,270,271,272,273,274,277,278,279,280,281,282,283,284,285,286,287,290,291,292,293,296,297,300,301,305,306,315,316,317,318,319,320,321,322,323,324,325,326,327,328,332,333,334,336,337,338,339,340,341,342,343,512,513,514,529,530,531,532,700,18246,33421,33422,33423,33432,33434,33437,33723,34665,34675,34850,34852,34853,34855,34856,34864,34866,36864,36867,36868,36880,36881,36882,37121,37122,37377,37378,37379,37380,37381,37382,37383,37384,37385,37386,37396,37500,37510,37520,37521,37522,40091,40092,40093,40094,40095,40960,40961,40962,40963,40964,40965,41483,41484,41486,41487,41488,41492,41493,41495,41728,41729,41730,41985,41986,41987,41988,41989,41990,41991,41992,41993,41994,41995,41996,42016,42032,42033,42034,42035,42036,42037,42240,50341,59932,59933,65e3,65001,1,2,4096,4097,4098,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],B.z("G<e,r>"))
C.Bs=new B.cS([34665,"exif",40965,"interop",34853,"gps"],B.z("cS<r,e>"))
C.XM=new B.cS([C.f8,1,C.fR,3,C.fS,15,C.a6,255,C.cb,65535,C.j0,4294967295,C.ks,127,C.kt,32767,C.ku,2147483647,C.hA,1,C.j_,1,C.kr,1],B.z("cS<nq,r>"))
C.aTO=new A.aw2(0,"none")
C.aTP=new A.aw2(4,"paeth")
C.nk=new A.CU(0,"invalid")
C.a1L=new A.CU(1,"pbm")
C.a1M=new A.CU(2,"pgm2")
C.C_=new A.CU(3,"pgm5")
C.a1N=new A.CU(4,"ppm3")
C.C0=new A.CU(5,"ppm6")
C.aVS=new A.bv8(0,"origin")
C.aVT=new A.bvb(1,"contain")
C.b3Y=new B.bZ("Processing content and detecting large images...",null,W.a4v,null,null,null,null,null,null,null,null,null,null,null,null)
C.b3Z=new B.bZ("Large Images Detected",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.b4c=new B.bZ("Reducing Images Size...",null,I.Dy,null,null,null,null,null,null,null,null,null,null,null,null)
C.b4A=new B.bZ("Some images are large and may slow down the app. Press OK to convert them into optimal size.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.DF=new A.rJ(0,"bilevel")
C.b4X=new A.rJ(1,"gray4bit")
C.b4Y=new A.rJ(2,"gray")
C.b4Z=new A.rJ(3,"grayAlpha")
C.b5_=new A.rJ(4,"palette")
C.a4D=new A.rJ(5,"rgb")
C.b50=new A.rJ(6,"rgba")
C.b51=new A.rJ(7,"yCbCrSub")
C.wA=new A.rJ(8,"generic")
C.b52=new A.rJ(9,"invalid")
C.nU=new A.Sz(0,"undefined")
C.E5=new A.Sz(1,"lossy")
C.wJ=new A.Sz(2,"lossless")
C.b7N=new A.Sz(3,"animated")})();(function staticFields(){$.vk=B.bF("_config")
$.crf=!0
$.co9=null
$.czO=!1
$.czP=B.a([A.cpv(),A.dbj(),A.dbo(),A.dbp(),A.dbq(),A.dbr(),A.dbs(),A.dbt(),A.dbu(),A.dbv(),A.dbk(),A.dbl(),A.dbm(),A.dbn(),A.cpv(),A.cpv()],B.z("q<r(qt,r,r)>"))
$.hx=null
$.ctZ=B.bF("_eLut")})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazy
x($,"dhE","cHK",()=>A.cnP(C.rg,C.K8,257,286,15))
x($,"dhD","cHJ",()=>A.cnP(C.MI,C.r1,0,30,15))
x($,"dhC","cHI",()=>A.cnP(null,C.apE,0,19,7))
x($,"dkN","cj2",()=>{var v=null,u="ISOSpeed"
return B.y([11,A.aG("ProcessingSoftware",C.bz,v),254,A.aG("SubfileType",C.cI,1),255,A.aG("OldSubfileType",C.cI,1),256,A.aG("ImageWidth",C.cI,1),257,A.aG("ImageLength",C.cI,1),258,A.aG("BitsPerSample",C.be,1),259,A.aG("Compression",C.be,1),262,A.aG("PhotometricInterpretation",C.be,1),263,A.aG("Thresholding",C.be,1),264,A.aG("CellWidth",C.be,1),265,A.aG("CellLength",C.be,1),266,A.aG("FillOrder",C.be,1),269,A.aG("DocumentName",C.bz,v),270,A.aG("ImageDescription",C.bz,v),271,A.aG("Make",C.bz,v),272,A.aG("Model",C.bz,v),273,A.aG("StripOffsets",C.cI,v),274,A.aG("Orientation",C.be,1),277,A.aG("SamplesPerPixel",C.be,1),278,A.aG("RowsPerStrip",C.cI,1),279,A.aG("StripByteCounts",C.cI,1),280,A.aG("MinSampleValue",C.be,1),281,A.aG("MaxSampleValue",C.be,1),282,A.aG("XResolution",C.e3,1),283,A.aG("YResolution",C.e3,1),284,A.aG("PlanarConfiguration",C.be,1),285,A.aG("PageName",C.bz,v),286,A.aG("XPosition",C.e3,1),287,A.aG("YPosition",C.e3,1),290,A.aG("GrayResponseUnit",C.be,1),291,A.aG("GrayResponseCurve",C.W,v),292,A.aG("T4Options",C.W,v),293,A.aG("T6Options",C.W,v),296,A.aG("ResolutionUnit",C.be,1),297,A.aG("PageNumber",C.be,2),300,A.aG("ColorResponseUnit",C.W,v),301,A.aG("TransferFunction",C.be,768),305,A.aG("Software",C.bz,v),306,A.aG("DateTime",C.bz,v),315,A.aG("Artist",C.bz,v),316,A.aG("HostComputer",C.bz,v),317,A.aG("Predictor",C.be,1),318,A.aG("WhitePoint",C.e3,2),319,A.aG("PrimaryChromaticities",C.e3,6),320,A.aG("ColorMap",C.be,v),321,A.aG("HalftoneHints",C.be,2),322,A.aG("TileWidth",C.cI,1),323,A.aG("TileLength",C.cI,1),324,A.aG("TileOffsets",C.cI,v),325,A.aG("TileByteCounts",C.W,v),326,A.aG("BadFaxLines",C.W,v),327,A.aG("CleanFaxData",C.W,v),328,A.aG("ConsecutiveBadFaxLines",C.W,v),332,A.aG("InkSet",C.W,v),333,A.aG("InkNames",C.W,v),334,A.aG("NumberofInks",C.W,v),336,A.aG("DotRange",C.W,v),337,A.aG("TargetPrinter",C.bz,v),338,A.aG("ExtraSamples",C.W,v),339,A.aG("SampleFormat",C.be,1),340,A.aG("SMinSampleValue",C.W,v),341,A.aG("SMaxSampleValue",C.W,v),342,A.aG("TransferRange",C.W,v),343,A.aG("ClipPath",C.W,v),512,A.aG("JPEGProc",C.W,v),513,A.aG("JPEGInterchangeFormat",C.W,v),514,A.aG("JPEGInterchangeFormatLength",C.W,v),529,A.aG("YCbCrCoefficients",C.e3,3),530,A.aG("YCbCrSubSampling",C.be,1),531,A.aG("YCbCrPositioning",C.be,1),532,A.aG("ReferenceBlackWhite",C.e3,6),700,A.aG("ApplicationNotes",C.be,1),18246,A.aG("Rating",C.be,1),33421,A.aG("CFARepeatPatternDim",C.W,v),33422,A.aG("CFAPattern",C.W,v),33423,A.aG("BatteryLevel",C.W,v),33432,A.aG("Copyright",C.bz,v),33434,A.aG("ExposureTime",C.e3,1),33437,A.aG("FNumber",C.e3,v),33723,A.aG("IPTC-NAA",C.cI,1),34665,A.aG("ExifOffset",C.W,v),34675,A.aG("InterColorProfile",C.W,v),34850,A.aG("ExposureProgram",C.be,1),34852,A.aG("SpectralSensitivity",C.bz,v),34853,A.aG("GPSOffset",C.W,v),34855,A.aG(u,C.cI,1),34856,A.aG("OECF",C.W,v),34864,A.aG("SensitivityType",C.be,1),34866,A.aG("RecommendedExposureIndex",C.cI,1),34867,A.aG(u,C.cI,1),36864,A.aG("ExifVersion",C.hD,v),36867,A.aG("DateTimeOriginal",C.bz,v),36868,A.aG("DateTimeDigitized",C.bz,v),36880,A.aG("OffsetTime",C.bz,v),36881,A.aG("OffsetTimeOriginal",C.bz,v),36882,A.aG("OffsetTimeDigitized",C.bz,v),37121,A.aG("ComponentsConfiguration",C.hD,v),37122,A.aG("CompressedBitsPerPixel",C.W,v),37377,A.aG("ShutterSpeedValue",C.W,v),37378,A.aG("ApertureValue",C.W,v),37379,A.aG("BrightnessValue",C.W,v),37380,A.aG("ExposureBiasValue",C.W,v),37381,A.aG("MaxApertureValue",C.W,v),37382,A.aG("SubjectDistance",C.W,v),37383,A.aG("MeteringMode",C.W,v),37384,A.aG("LightSource",C.W,v),37385,A.aG("Flash",C.W,v),37386,A.aG("FocalLength",C.W,v),37396,A.aG("SubjectArea",C.W,v),37500,A.aG("MakerNote",C.hD,v),37510,A.aG("UserComment",C.hD,v),37520,A.aG("SubSecTime",C.W,v),37521,A.aG("SubSecTimeOriginal",C.W,v),37522,A.aG("SubSecTimeDigitized",C.W,v),40091,A.aG("XPTitle",C.W,v),40092,A.aG("XPComment",C.W,v),40093,A.aG("XPAuthor",C.W,v),40094,A.aG("XPKeywords",C.W,v),40095,A.aG("XPSubject",C.W,v),40960,A.aG("FlashPixVersion",C.W,v),40961,A.aG("ColorSpace",C.be,1),40962,A.aG("ExifImageWidth",C.be,1),40963,A.aG("ExifImageLength",C.be,1),40964,A.aG("RelatedSoundFile",C.W,v),40965,A.aG("InteroperabilityOffset",C.W,v),41483,A.aG("FlashEnergy",C.W,v),41484,A.aG("SpatialFrequencyResponse",C.W,v),41486,A.aG("FocalPlaneXResolution",C.W,v),41487,A.aG("FocalPlaneYResolution",C.W,v),41488,A.aG("FocalPlaneResolutionUnit",C.W,v),41492,A.aG("SubjectLocation",C.W,v),41493,A.aG("ExposureIndex",C.W,v),41495,A.aG("SensingMethod",C.W,v),41728,A.aG("FileSource",C.W,v),41729,A.aG("SceneType",C.W,v),41730,A.aG("CVAPattern",C.W,v),41985,A.aG("CustomRendered",C.W,v),41986,A.aG("ExposureMode",C.W,v),41987,A.aG("WhiteBalance",C.W,v),41988,A.aG("DigitalZoomRatio",C.W,v),41989,A.aG("FocalLengthIn35mmFilm",C.W,v),41990,A.aG("SceneCaptureType",C.W,v),41991,A.aG("GainControl",C.W,v),41992,A.aG("Contrast",C.W,v),41993,A.aG("Saturation",C.W,v),41994,A.aG("Sharpness",C.W,v),41995,A.aG("DeviceSettingDescription",C.W,v),41996,A.aG("SubjectDistanceRange",C.W,v),42016,A.aG("ImageUniqueID",C.W,v),42032,A.aG("CameraOwnerName",C.bz,v),42033,A.aG("BodySerialNumber",C.bz,v),42034,A.aG("LensSpecification",C.W,v),42035,A.aG("LensMake",C.bz,v),42036,A.aG("LensModel",C.bz,v),42037,A.aG("LensSerialNumber",C.bz,v),42240,A.aG("Gamma",C.e3,1),50341,A.aG("PrintIM",C.W,v),59932,A.aG("Padding",C.W,v),59933,A.aG("OffsetSchema",C.W,v),65e3,A.aG("OwnerName",C.bz,v),65001,A.aG("SerialNumber",C.bz,v)],y.p,B.z("anj"))})
w($,"dgK","aUa",()=>B.Ck(511))
w($,"dgL","ciS",()=>B.Ck(511))
w($,"dgN","ciT",()=>A.cw8(2041))
w($,"dgO","aUb",()=>A.cw8(225))
w($,"dgM","pw",()=>B.Ck(766))
x($,"df4","cGp",()=>A.cuV(0,0,0))
x($,"di6","oh",()=>B.Ck(1))
x($,"di7","px",()=>A.cRk(D.A.gag($.oh()),0,null))
x($,"di_","qD",()=>T.cSU(1))
x($,"di0","t8",()=>J.cK3(D.dM.gag($.qD()),0,null))
x($,"di1","hP",()=>B.cSX(1))
x($,"di3","lv",()=>J.aUq(D.bl.gag($.hP()),0,null))
x($,"di2","F8",()=>A.cPI(D.bl.gag($.hP())))
x($,"dhY","aUd",()=>B.clz(1))
x($,"dhZ","ciV",()=>A.czz(D.ch.gag($.aUd()),0))
x($,"dhW","cqk",()=>B.bnc(1))
x($,"dhX","cI_",()=>A.czz(D.eR.gag($.cqk()),0))
x($,"di4","cql",()=>A.cY0(1))
x($,"di5","cI0",()=>{var v=$.cql()
return A.cPJ(v.gag(v))})})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_325",e:"endPart",h:b})})($__dart_deferred_initializers__,"HbyAASjbEUkrzBBI3WWL/u/CO78=");