((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_220",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,L,F,M,N,O,E,I,A={
T_(d){return new A.adO(d,null,null)},
adO:function adO(d,e,f){this.a=d
this.b=e
this.c=f},
Ao(d,e,f,g){var x,w
if(y.ah.b(d))x=B.bX(d.buffer,d.byteOffset,d.byteLength)
else x=y.L.b(d)?d:B.bl(y.R.a(d),!0,y.p)
w=new A.b9R(x,g,g,e)
w.e=f==null?x.length:f
return w},
b9S:function b9S(){},
b9R:function b9R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
c7T(d,e){var x=e==null?32768:e
return new A.bhS(d,new Uint8Array(x))},
bhT:function bhT(){},
bhS:function bhS(d,e){this.a=0
this.b=d
this.c=e},
c0s:function c0s(){},
ceT(d,e,f,g){var x=d[e*2],w=d[f*2]
if(x>=w)x=x===w&&g[e]<=g[f]
else x=!0
return x},
c9G(){return new A.bM0()},
cKO(d,e,f){var x,w,v,u,t,s,r=new Uint16Array(16)
for(x=0,w=1;w<=15;++w){x=x+f[w-1]<<1>>>0
r[w]=x}for(v=0;v<=e;++v){u=v*2
t=d[u+1]
if(t===0)continue
s=r[t]
r[t]=s+1
d[u]=A.cKP(s,t)}},
cKP(d,e){var x,w=0
do{x=A.ot(d,1)
w=(w|d&1)<<1>>>0
if(--e,e>0){d=x
continue}else break}while(!0)
return A.ot(w,1)},
clV(d){return d<256?C.I4[d]:C.I4[256+A.ot(d,7)]},
c9U(d,e,f,g,h){return new A.bWh(d,e,f,g,h)},
ot(d,e){if(d>=0)return D.c.nj(d,e)
else return D.c.nj(d,e)+D.c.ef(2,(~e>>>0)+65536&65535)},
aZy:function aZy(d,e,f,g,h,i,j,k){var _=this
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
_.T=_.C=_.cT=_.c5=_.b8=_.ad=_.bd=_.bO=_.y2=_.y1=$},
qV:function qV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bM0:function bM0(){this.c=this.b=this.a=$},
bWh:function bWh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
alO(d){var x=new A.b8i()
x.aOq(d)
return x},
b8i:function b8i(){this.a=$
this.b=0
this.c=2147483647},
b9v:function b9v(d,e,f,g){var _=this
_.a=d
_.b=!1
_.c=e
_.e=_.d=0
_.r=f
_.w=g},
bAU:function bAU(){},
bAT:function bAT(){},
bAV:function bAV(){},
cBA(d,e){return new A.A5(d,e)},
A5:function A5(d,e){this.c=d
this.a=e},
a6P:function a6P(d){var _=this
_.e=null
_.x=_.w=_.r=_.f=!1
_.y=null
_.z=0
_.Q=d
_.as=$
_.c=_.a=null},
bLD:function bLD(d){this.a=d},
bLA:function bLA(d){this.a=d},
bLB:function bLB(d){this.a=d},
bLC:function bLC(d){this.a=d},
bLG:function bLG(d){this.a=d},
bLH:function bLH(){},
bLF:function bLF(d){this.a=d},
bLI:function bLI(d){this.a=d},
bLJ:function bLJ(d){this.a=d},
bLE:function bLE(d){this.a=d},
bLK:function bLK(d){this.a=d},
b8S(d,e){var x=0,w=B.l(y.D),v
var $async$b8S=B.h(function(f,g){if(f===1)return B.i(g,w)
while(true)switch(x){case 0:x=3
return B.c(A.M8(d,e,"jpg",new A.b8T(d,e,85),85),$async$b8S)
case 3:v=g
x=1
break
case 1:return B.j(v,w)}})
return B.k($async$b8S,w)},
b8U(d,e){var x=0,w=B.l(y.D),v
var $async$b8U=B.h(function(f,g){if(f===1)return B.i(g,w)
while(true)switch(x){case 0:x=3
return B.c(A.M8(d,e,"png",new A.b8V(d,e),null),$async$b8U)
case 3:v=g
x=1
break
case 1:return B.j(v,w)}})
return B.k($async$b8U,w)},
M8(d,e,f,g,h){return A.cBR(d,e,f,g,h)},
cBR(d,e,f,g,h){var x=0,w=B.l(y.D),v,u=2,t,s=[],r,q,p,o,n,m,l,k,j
var $async$M8=B.h(function(i,a0){if(i===1){t=a0
x=u}while(true)switch(x){case 0:if(!$.cdh){v=g.$0()
x=1
break}m=$.kq().b
m===$&&B.b()
r=m
q="uploads/"+Date.now()+"."+f
u=4
m=r.as
m===$&&B.b()
x=7
return B.c(m.bZ("images-temp").Zm(q,d),$async$M8)
case 7:p=a0
if(J.b_(p)===0){m=g.$0()
v=m
x=1
break}u=9
m=r.as
m===$&&B.b()
x=12
return B.c(m.bZ("images-temp").VL(0,q,new A.bye(e,C.aT0,h,C.aT_)),$async$M8)
case 12:o=a0
v=o
s=[1]
x=10
break
s.push(11)
x=10
break
case 9:u=8
k=t
m=B.af(k)
if(m instanceof B.P0){n=m
if(n.c==="403")$.cdh=!1
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
return B.c(m.bZ("images-temp").J(0,B.a([q],y.s)),$async$M8)
case 13:x=s.pop()
break
case 11:u=2
x=6
break
case 4:u=3
j=t
m=g.$0()
v=m
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.j(v,w)
case 2:return B.i(t,w)}})
return B.k($async$M8,w)},
cgL(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n=null,m=A.coV(d)
if(m==null)throw B.e(B.d8("Failed to decode "+f+" image"))
x=A.cQX(m,e)
if(f==="jpg"){w=g==null?85:g
v=new Uint8Array(64)
u=new Uint8Array(64)
t=new Float32Array(64)
s=new Float32Array(64)
r=B.br(65535,n,!1,y.cl)
q=y.u
p=B.br(65535,n,!1,q)
o=B.br(64,n,!1,q)
q=B.br(64,n,!1,q)
v=new A.bau(v,u,t,s,r,p,o,q,new Int32Array(2048))
v.e=v.R4(C.In,C.px)
v.f=v.R4(C.Io,C.px)
v.r=v.R4(C.Ip,C.KM)
v.w=v.R4(C.Iq,C.HW)
v.b45()
v.b4h()
v.aGl(w)
return new Uint8Array(B.bD(v.bra(x,C.HK)))}else if(f==="png")return new Uint8Array(B.bD(new A.bkD(C.aR1,6).brb(x,!1)))
else throw B.e(B.d8("Unsupported image format: "+f))},
b8T:function b8T(d,e,f){this.a=d
this.b=e
this.c=f},
b8V:function b8V(d,e){this.a=d
this.b=e},
aUv:function aUv(d,e){this.a=d
this.b=e},
h4:function h4(d){this.a=-1
this.b=d},
Ko:function Ko(d){this.a=d},
Kp:function Kp(d){this.a=d},
Kq:function Kq(d){this.a=d},
Kr:function Kr(d){this.a=d},
Ks:function Ks(d){this.a=d},
Kt:function Kt(d){this.a=d},
Kw:function Kw(d,e){this.a=d
this.b=e},
Kx:function Kx(d){this.a=d},
Ky:function Ky(d,e){this.a=d
this.b=e},
Kz:function Kz(d){this.a=d},
KA:function KA(d,e){this.a=d
this.b=e},
cxF(d,e,f,g){var x=new A.Ku(new Uint8Array(4))
x.aOc(d,e,f,g)
return x},
wg:function wg(d){this.a=d},
afF:function afF(d){this.a=d},
Ku:function Ku(d){this.a=d},
aP2(d,e,f){var x
if(e===f)return d
switch(e.a){case 0:if(d===0)x=0
else{x=C.VD.i(0,f)
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
case 1:return D.c.O(B.b3(d),1)
case 2:return d
case 3:return d*17
case 4:return d*4369
case 5:return d*286331153
case 6:return d*8
case 7:return d*2184
case 8:return d*143165576
case 9:case 10:case 11:return d/3}break
case 3:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.O(B.b3(d),6)
case 2:return D.c.O(B.b3(d),4)
case 3:return d
case 4:return d*257
case 5:return d*16843009
case 6:return D.c.O(B.b3(d),1)
case 7:return d*128
case 8:return d*8421504
case 9:case 10:case 11:return d/255}break
case 4:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.O(B.b3(d),14)
case 2:return D.c.O(B.b3(d),12)
case 3:return D.c.O(B.b3(d),8)
case 4:return d
case 5:return B.b3(d)<<8>>>0
case 6:return D.c.O(B.b3(d),9)
case 7:return D.c.O(B.b3(d),1)
case 8:return d*524296
case 9:case 10:case 11:return d/65535}break
case 5:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.O(B.b3(d),30)
case 2:return D.c.O(B.b3(d),28)
case 3:return D.c.O(B.b3(d),24)
case 4:return D.c.O(B.b3(d),16)
case 5:return d
case 6:return D.c.O(B.b3(d),25)
case 7:return D.c.O(B.b3(d),17)
case 8:return D.c.O(B.b3(d),1)
case 9:case 10:case 11:return d/4294967295}break
case 6:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.O(B.b3(d),5)
case 2:return d<=0?0:D.c.O(B.b3(d),3)
case 3:return d<=0?0:B.b3(d)<<1>>>0
case 4:return d<=0?0:B.b3(d)*516
case 5:return d<=0?0:B.b3(d)*33818640
case 6:return d
case 7:return d*258
case 8:return d*16909320
case 9:case 10:case 11:return d/127}break
case 7:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.O(B.b3(d),15)
case 2:return d<=0?0:D.c.O(B.b3(d),11)
case 3:return d<=0?0:D.c.O(B.b3(d),7)
case 4:return d<=0?0:B.b3(d)<<1>>>0
case 5:return d<=0?0:B.b3(d)*131076
case 6:return D.c.O(B.b3(d),8)
case 7:return d
case 8:return B.b3(d)*65538
case 9:case 10:case 11:return d/32767}break
case 8:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.O(B.b3(d),29)
case 2:return d<=0?0:D.c.O(B.b3(d),27)
case 3:return d<=0?0:D.c.O(B.b3(d),23)
case 4:return d<=0?0:D.c.O(B.b3(d),16)
case 5:return d<=0?0:B.b3(d)<<1>>>0
case 6:return D.c.O(B.b3(d),24)
case 7:return D.c.O(B.b3(d),16)
case 8:return d
case 9:case 10:case 11:return d/2147483647}break
case 9:case 10:case 11:switch(f.a){case 0:return d===0?0:1
case 1:return D.d.D(D.d.bg(d,0,1)*3)
case 2:return D.d.D(D.d.bg(d,0,1)*15)
case 3:return D.d.D(D.d.bg(d,0,1)*255)
case 4:return D.d.D(D.d.bg(d,0,1)*65535)
case 5:return D.d.D(D.d.bg(d,0,1)*4294967295)
case 6:return D.d.D(d<0?D.d.bg(d,-1,1)*128:D.d.bg(d,-1,1)*127)
case 7:return D.d.D(d<0?D.d.bg(d,-1,1)*32768:D.d.bg(d,-1,1)*32767)
case 8:return D.d.D(d<0?D.d.bg(d,-1,1)*2147483648:D.d.bg(d,-1,1)*2147483647)
case 9:case 10:case 11:return d}break}},
mG:function mG(d,e){this.a=d
this.b=e},
aeE:function aeE(d,e){this.a=d
this.b=e},
VZ(d){var x=new A.LE(B.C(y.N,y.P))
x.aOr(d)
return x},
cfO(d){var x=new A.LE(B.C(y.N,y.P))
x.pG(0,d)
return x},
LE:function LE(d){this.a=d},
aDV:function aDV(d,e){this.a=d
this.b=e},
ax(d,e,f){return new A.ajG(d,e)},
ajG:function ajG(d,e){this.a=d
this.b=e},
rE:function rE(d){this.a=d},
b8L:function b8L(d){this.a=d},
cgA(d){var x=new A.oS(B.C(y.p,y.r),new A.rE(B.C(y.N,y.P)))
x.bnD(d)
return x},
oS:function oS(d,e){this.a=d
this.b=e},
b8M:function b8M(d){this.a=d},
b8N:function b8N(d){this.a=d},
cBP(d){var x=new Uint16Array(1)
x[0]=d
return new A.wQ(x)},
cgI(d,e){var x=new A.wQ(new Uint16Array(e))
x.aOw(d,e)
return x},
cBO(d){var x=new Uint32Array(1)
x[0]=d
return new A.q4(x)},
cgD(d,e){var x=new A.q4(new Uint32Array(e))
x.aOt(d,e)
return x},
cgE(d,e){var x,w=J.ji(e,y.i)
for(x=0;x<e;++x)w[x]=new A.mW(d.ai(),d.ai())
return new A.rF(w)},
cgH(d,e){var x=new A.wP(new Int16Array(e))
x.aOv(d,e)
return x},
cgF(d,e){var x=new A.wO(new Int32Array(e))
x.aOu(d,e)
return x},
cgG(d,e){var x,w,v,u,t=J.ji(e,y.i)
for(x=0;x<e;++x){w=d.ai()
v=$.hk()
v[0]=w
w=$.kQ()
u=w[0]
v[0]=d.ai()
t[x]=new A.mW(u,w[0])}return new A.rG(t)},
cgJ(d){var x=new Float32Array(1)
x[0]=d
return new A.Ab(x)},
cgK(d,e){var x=new A.Ab(new Float32Array(e))
x.aOx(d,e)
return x},
cgB(d){var x=new Float64Array(1)
x[0]=d
return new A.Aa(x)},
cgC(d,e){var x=new A.Aa(new Float64Array(e))
x.aOs(d,e)
return x},
lW:function lW(d,e){this.a=d
this.b=e},
jh:function jh(){},
rD:function rD(d){this.a=d},
A9:function A9(d){this.a=d},
wQ:function wQ(d){this.a=d},
q4:function q4(d){this.a=d},
rF:function rF(d){this.a=d},
uz:function uz(d){this.a=d},
wP:function wP(d){this.a=d},
wO:function wO(d){this.a=d},
rG:function rG(d){this.a=d},
Ab:function Ab(d){this.a=d},
Aa:function Aa(d){this.a=d},
Fc:function Fc(d){this.a=d},
cdB(d){var x,w,v=new A.aTe()
if(!A.c5Q(d))B.Y(A.bK("Not a bitmap file."))
d.d+=2
x=d.ai()
w=$.hk()
w[0]=x
x=$.kQ()
d.d+=4
w[0]=d.ai()
v.b=x[0]
return v},
c5Q(d){if(d.c-d.d<2)return!1
return A.bR(d,null,0).bI()===19778},
cx0(d,e){var x,w,v,u,t=e==null?A.cdB(d):e,s=d.d,r=d.ai(),q=d.ai(),p=$.hk()
p[0]=q
q=$.kQ()
x=q[0]
p[0]=d.ai()
q=q[0]
w=d.bI()
v=d.bI()
u=C.Kz[d.ai()]
d.ai()
p[0]=d.ai()
p[0]=d.ai()
p=d.ai()
d.ai()
s=new A.DI(t,x,q,r,w,v,u,p,s)
s.aeU(d,e)
return s},
kX:function kX(d,e){this.a=d
this.b=e},
aTe:function aTe(){this.b=$},
DI:function DI(d,e,f,g,h,i,j,k,l){var _=this
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
aeI:function aeI(d){this.a=$
this.b=null
this.c=d},
aTd:function aTd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
b_v:function b_v(d){this.a=$
this.b=null
this.c=d},
aZg:function aZg(){},
aZh:function aZh(){},
b1S:function b1S(){},
ajI:function ajI(d,e,f){this.a=d
this.b=e
this.c=f},
amp:function amp(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
LG:function LG(d,e){this.a=d
this.b=e},
EF:function EF(d,e){this.a=d
this.b=e},
ajJ:function ajJ(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
cfP(d,e,f,g){var x,w
switch(d.a){case 1:return new A.ba_(f,e)
case 2:return new A.amr(f,g==null?1:g,e)
case 3:return new A.amr(f,g==null?16:g,e)
case 4:x=g==null?32:g
w=new A.b9Y(f,x,e)
w.aOF(e,f,x)
return w
case 5:return new A.b9Z(f,g==null?16:g,e)
case 6:return new A.amp(f,g==null?32:g,!1,e)
case 7:return new A.amp(f,g==null?32:g,!0,e)
default:throw B.e(A.bK("Invalid compression type: "+d.k(0)))}},
ru:function ru(d,e){this.a=d
this.b=e},
b33:function b33(){},
b9X:function b9X(){},
cAf(d,e,f,g){var x,w,v,u,t,s,r,q
if(e===0){if(g!==0)throw B.e(A.bK("Incomplete huffman data"))
return}x=d.d
w=d.ai()
v=d.ai()
d.d+=4
u=d.ai()
t=!0
if(w<65537)t=v>=65537
if(t)throw B.e(A.bK("Invalid huffman table size"))
d.d+=4
s=B.br(65537,0,!1,y.p)
r=J.ia(16384,y.W)
for(q=0;q<16384;++q)r[q]=new A.ajK()
A.cAg(d,e-20,w,v,s)
if(u>8*(e-(d.d-x)))throw B.e(A.bK("Error in header for Huffman-encoded data (invalid number of bits)."))
A.cAc(s,w,v,r)
A.cAe(s,r,d,u,v,g,f)},
cAe(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p="Error in Huffman-encoded data (invalid code).",o=B.a([0,0],y.t),n=f.d+D.c.aY(g+7,8)
for(x=0;f.d<n;){A.c6P(o,f)
for(;w=o[1],w>=14;){v=e[D.c.nj(o[0],w-14)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.c6Q(v.b,h,o,f,j,x,i)}else{if(v.c==null)throw B.e(A.bK(p))
for(t=0;t<v.b;++t){s=d[v.c[t]]&63
while(!0){w=o[1]
if(!(w<s&&f.d<n))break
A.c6P(o,f)}if(w>=s){u=v.c
w-=s
if(d[u[t]]>>>6===(D.c.nj(o[0],w)&D.c.ef(1,s)-1)>>>0){o[1]=w
r=A.c6Q(u[t],h,o,f,j,x,i)
x=r
break}}}if(t===v.b)throw B.e(A.bK(p))}}}q=8-g&7
o[0]=D.c.O(o[0],q)
o[1]=o[1]-q
for(;w=o[1],w>0;){v=e[D.c.ev(o[0],14-w)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.c6Q(v.b,h,o,f,j,x,i)}else throw B.e(A.bK(p))}if(x!==i)throw B.e(A.bK("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
c6Q(d,e,f,g,h,i,j){var x,w,v,u,t,s="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)A.c6P(f,g)
x=f[1]-8
f[1]=x
w=D.c.nj(f[0],x)&255
if(i+w>j)throw B.e(A.bK(s))
v=h[i-1]
for(;u=w-1,w>0;w=u,i=t){t=i+1
h[i]=v}}else{if(i<j){t=i+1
h[i]=d}else throw B.e(A.bK(s))
i=t}return i},
cAc(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n="Error in Huffman-encoded data (invalid code table entry)."
for(x=y.t,w=y.p;e<=f;++e){v=d[e]
u=v>>>6
t=v&63
if(D.c.hh(u,t)!==0)throw B.e(A.bK(n))
if(t>14){s=g[D.c.fC(u,t-14)]
if(s.a!==0)throw B.e(A.bK(n))
v=++s.b
r=s.c
if(r!=null){v=B.br(v,0,!1,w)
s.c=v
for(q=s.b-1,p=0;p<q;++p)v[p]=r[p]}else s.c=B.a([0],x)
s.c[s.b-1]=e}else if(t!==0){v=14-t
o=D.c.ev(u,v)
for(p=D.c.ev(1,v);p>0;--p,++o){s=g[o]
if(s.a!==0||s.c!=null)throw B.e(A.bK(n))
s.a=t
s.b=e}}}},
cAg(d,e,f,g,h){var x,w,v,u,t,s="Error in Huffman-encoded data (unexpected end of code table data).",r="Error in Huffman-encoded data (code table is longer than expected).",q=d.d,p=B.a([0,0],y.t)
for(x=g+1;f<=g;++f){if(d.d-q>e)throw B.e(A.bK(s))
w=A.cfQ(6,p,d)
h[f]=w
if(w===63){if(d.d-q>e)throw B.e(A.bK(s))
v=A.cfQ(8,p,d)+6
if(f+v>x)throw B.e(A.bK(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}else if(w>=59){v=w-59+2
if(f+v>x)throw B.e(A.bK(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}}A.cAd(h)},
cAd(d){var x,w,v,u,t,s=B.br(59,0,!1,y.p)
for(x=0;x<65537;++x){w=d[x]
s[w]=s[w]+1}for(v=0,x=58;x>0;--x,v=u){u=v+s[x]>>>1
s[x]=v}for(x=0;x<65537;++x){t=d[x]
if(t>0){w=s[t]
s[t]=w+1
d[x]=(t|w<<6)>>>0}}},
c6P(d,e){d[0]=((d[0]<<8|e.cW())&-1)>>>0
d[1]=(d[1]+8&-1)>>>0},
cfQ(d,e,f){var x
for(;x=e[1],x<d;){e[0]=((e[0]<<8|J.t(f.a,f.d++))&-1)>>>0
e[1]=(e[1]+8&-1)>>>0}x-=d
e[1]=x
return(D.c.nj(e[0],x)&D.c.ef(1,d)-1)>>>0},
ajK:function ajK(){this.b=this.a=0
this.c=null},
cAh(d){var x=A.cz(d,!1,null,0)
if(x.ai()!==20000630)return!1
if(x.cW()!==2)return!1
if((x.qX()&4294967289)>>>0!==0)return!1
return!0},
b35:function b35(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
cgY(d,e,f){var x=new A.amq(d,B.a([],y.Q),B.C(y.N,y.v),C.Gx,e)
x.aOj(d,e,f,{})
return x},
W4:function W4(){},
b36:function b36(d,e){this.a=d
this.b=e},
amq:function amq(d,e,f,g,h){var _=this
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
b9Y:function b9Y(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
aGN:function aGN(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
b9Z:function b9Z(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
ba_:function ba_(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
amr:function amr(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
b34:function b34(){this.a=null},
cgd(d){var x=new Uint8Array(d*3)
return new A.WF(A.cBj(d),d,null,new A.rY(x,d,3))},
cBi(d){return new A.WF(d.a,d.b,d.c,A.cih(d.d))},
cBj(d){var x
for(x=1;x<=8;++x)if(D.c.ef(1,x)>=d)return x
return 0},
WF:function WF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WG:function WG(){},
ams:function ams(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=$},
al9:function al9(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
b6l:function b6l(){var _=this
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
cgx(d){var x,w,v,u,t,s
if(d.bI()!==0)return null
x=d.bI()
if(x>=3)return null
w=C.arR[x]
if(w===C.H_)return null
v=d.bI()
u=J.ji(v,y.X)
for(t=0;t<v;++t){J.t(d.a,d.d++)
s=J.t(d.a,d.d++)
J.t(d.a,d.d++);++d.d
d.bI()
d.bI()
u[t]=new A.alR(s,d.ai(),d.ai())}return new A.b8A(w,v,u)},
M0:function M0(d,e){this.a=d
this.b=e},
b8A:function b8A(d,e,f){this.c=d
this.d=e
this.e=f},
alR:function alR(d,e,f){this.b=d
this.d=e
this.e=f},
b8y:function b8y(d,e,f,g,h,i,j,k,l){var _=this
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
b8z:function b8z(){this.b=this.a=null},
afL:function afL(d,e,f){this.e=d
this.f=e
this.r=f},
F6:function F6(){},
F7:function F7(d){this.a=d},
X6:function X6(d){this.a=d},
baq:function baq(){this.d=null},
Ay:function Ay(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.y=_.x=_.w=_.r=_.f=_.e=$},
cha(){var x=B.br(4,null,!1,y.a7),w=B.a([],y.cB),v=y.l,u=J.Av(0,v)
v=J.Av(0,v)
return new A.bas(new A.LE(B.C(y.N,y.P)),x,w,u,v,B.a([],y.q))},
bas:function bas(d,e,f,g,h,i){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i},
bat:function bat(d,e){this.a=d
this.b=e},
QN:function QN(d){this.a=d
this.b=0},
amF:function amF(d,e){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=d
_.z=e},
baw:function baw(){this.r=this.f=$},
amG:function amG(d,e,f,g,h,i,j,k){var _=this
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
amE:function amE(){},
bar:function bar(d,e){this.a=d
this.b=e},
bau:function bau(d,e,f,g,h,i,j,k,l){var _=this
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
NE:function NE(d,e){this.a=d
this.b=e},
a_R:function a_R(d,e){this.a=d
this.b=e},
a_S:function a_S(){},
amt:function amt(d,e,f,g,h,i,j,k,l){var _=this
_.y=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
cgZ(){var x=y.N
return new A.ba0(B.C(x,x),B.a([],y.d),B.a([],y.t))},
Bp:function Bp(d,e){this.a=d
this.b=e},
bkF:function bkF(){},
ba0:function ba0(d,e,f){var _=this
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
asf:function asf(d){var _=this
_.a=d
_.c=_.b=0
_.d=$
_.e=0},
asg:function asg(d,e){this.a=d
this.b=e},
bkD:function bkD(d,e){var _=this
_.a=null
_.b=d
_.c=0
_.d=e
_.e=$
_.f=0
_.r=!1
_.w=null},
Bq:function Bq(d,e){this.a=d
this.b=e},
GJ:function GJ(d){this.b=this.a=0
this.e=d},
bkG:function bkG(d){this.b=this.a=null
this.c=d},
bkH:function bkH(){},
a0c:function a0c(d){this.a=d
this.c=$},
ciV(d){var x=new A.blC(B.C(y.p,y.a2))
x.aOQ(d)
return x},
cF8(b6,b7,b8,b9,c0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=B.C(y.p,y.aG)
for(x=c0.length,w=0;v=c0.length,w<v;c0.length===x||(0,B.O)(c0),++w){u=c0[w]
b5.n(0,u.a,u)}if(b7===8)t=1
else t=b7===16?2:-1
s=A.h8(b4,b4,C.a_,0,C.b2,b9,b4,0,v,b4,C.a_,b8,!1)
if(t===-1)throw B.e(A.bK("PSD: unsupported bit depth: "+B.o(b7)))
r=b5.i(0,0)
q=b5.i(0,1)
p=b5.i(0,2)
o=b5.i(0,-1)
n=-t
for(x=s.a,x=x.gW(x),m=v>=5,l=t===1,k=v===4,j=v>=2,v=v>=4;x.q();){i=x.gK(x)
n+=t
switch(b6){case C.a06:h=r.c
h===$&&B.b()
i.saD(0,l?h[n]:(h[n]<<8|h[n+1])>>>8)
h=q.c
h===$&&B.b()
i.saK(l?h[n]:(h[n]<<8|h[n+1])>>>8)
h=p.c
h===$&&B.b()
i.saM(0,l?h[n]:(h[n]<<8|h[n+1])>>>8)
if(v){h=o.c
h===$&&B.b()
h=l?h[n]:(h[n]<<8|h[n+1])>>>8}else h=255
i.saP(0,h)
if(i.gaP(i)!==0){i.saD(0,(i.gaD(i)+i.gaP(i)-255)*255/i.gaP(i))
i.saK((i.gaK()+i.gaP(i)-255)*255/i.gaP(i))
i.saM(0,(i.gaM(i)+i.gaP(i)-255)*255/i.gaP(i))}break
case C.a08:h=r.c
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
a9=[D.d.D(D.d.bg(a6*255,0,255)),D.d.D(D.d.bg(a7*255,0,255)),D.d.D(D.d.bg(a8*255,0,255))]
i.saD(0,a9[0])
i.saK(a9[1])
i.saM(0,a9[2])
i.saP(0,d)
break
case C.a05:h=r.c
h===$&&B.b()
b0=l?h[n]:(h[n]<<8|h[n+1])>>>8
if(j){h=o.c
h===$&&B.b()
d=l?h[n]:(h[n]<<8|h[n+1])>>>8}else d=255
i.saD(0,b0)
i.saK(b0)
i.saM(0,b0)
i.saP(0,d)
break
case C.a07:h=r.c
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
a9=A.coD(255-b1,255-b2,255-a0,255-b3)
i.saD(0,a9[0])
i.saK(a9[1])
i.saM(0,a9[2])
i.saP(0,d)
break
default:throw B.e(A.bK("Unhandled color mode: "+B.o(b6)))}}return s},
t3:function t3(d,e){this.a=d
this.b=e},
blC:function blC(d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=$
_.y=null
_.z=d
_.at=_.as=$},
blB:function blB(){this.a=null},
asN:function asN(){},
xt:function xt(d,e,f){this.a=d
this.b=e
this.c=f},
li:function li(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0f:function a0f(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
NT:function NT(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
asM:function asM(){this.y=this.b=this.a=0},
xu(d,e){return(C.tn[d>>>8]<<17|C.tn[e>>>8]<<16|C.tn[d&255]<<1|C.tn[e&255])>>>0},
qu:function qu(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
blD:function blD(){this.b=this.a=null},
awO:function awO(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
ne:function ne(d,e){this.a=d
this.b=e},
bwg:function bwg(){this.a=null
this.b=$},
bwr:function bwr(d){this.a=d
this.c=this.b=0},
awT:function awT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
c96(d,e,f){var x=new A.bwt(e,f,d),w=y.u
x.e=B.br(e,null,!1,w)
x.f=B.br(e,null,!1,w)
return x},
bwt:function bwt(d,e,f){var _=this
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
awU:function awU(d,e,f,g){var _=this
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
I3:function I3(d,e){this.a=d
this.b=e},
jT:function jT(d,e){this.a=d
this.b=e},
qK:function qK(d,e){this.a=d
this.b=e},
bwu:function bwu(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
chw(){return new A.bbW(new Uint8Array(4096))},
bbW:function bbW(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
bws:function bws(){this.a=null
this.c=$},
c9j(d,e){var x=new Int32Array(4),w=new Int32Array(4),v=new Int8Array(4),u=new Int8Array(4),t=B.br(8,null,!1,y.ak),s=B.br(4,null,!1,y.Z)
return new A.bzd(d,e,new A.bzj(),new A.bzn(),new A.bzf(x,w),new A.bzp(v,u),t,s,new Uint8Array(4))},
clh(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
bzd:function bzd(d,e,f,g,h,i,j,k,l){var _=this
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
_.bO=$
_.bd=null
_.b8=_.ad=$
_.c5=null
_.cT=$},
bzq:function bzq(){},
cle(d){var x=new A.a3X(d)
x.b=254
x.c=0
x.d=-8
return x},
a3X:function a3X(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
el(d,e,f){return D.c.ks(D.c.O(d+2*e+f+2,2),32)},
cIN(d){var x,w=B.a([A.el(J.t(d.a,d.d+-33),J.t(d.a,d.d+-32),J.t(d.a,d.d+-31)),A.el(J.t(d.a,d.d+-32),J.t(d.a,d.d+-31),J.t(d.a,d.d+-30)),A.el(J.t(d.a,d.d+-31),J.t(d.a,d.d+-30),J.t(d.a,d.d+-29)),A.el(J.t(d.a,d.d+-30),J.t(d.a,d.d+-29),J.t(d.a,d.d+-28))],y.t)
for(x=0;x<4;++x)d.z2(x*32,4,w)},
cIF(d){var x=J.t(d.a,d.d+-33),w=J.t(d.a,d.d+-1),v=J.t(d.a,d.d+31),u=J.t(d.a,d.d+63),t=J.t(d.a,d.d+95),s=A.bR(d,null,0)
s.OG()[0]=16843009*A.el(x,w,v)
s.d+=32
s.OG()[0]=16843009*A.el(w,v,u)
s.d+=32
s.OG()[0]=16843009*A.el(v,u,t)
s.d+=32
s.OG()[0]=16843009*A.el(u,t,t)},
cID(d){var x,w,v,u
for(x=4,w=0;w<4;++w)x+=J.t(d.a,d.d+(w-32))+J.t(d.a,d.d+(-1+w*32))
x=D.c.O(x,3)
for(w=0;w<4;++w){v=d.a
u=d.d+w*32
J.ra(v,u,u+4,x)}},
c9k(d,e){var x,w,v,u,t,s=255-J.t(d.a,d.d+-33)
for(x=0,w=0;w<e;++w){v=s+J.t(d.a,d.d+(x-1))
for(u=0;u<e;++u){t=$.oA()[v+J.t(d.a,d.d+(-32+u))]
J.bQ(d.a,d.d+(x+u),t)}x+=32}},
cIL(d){A.c9k(d,4)},
cIM(d){A.c9k(d,8)},
cIK(d){A.c9k(d,16)},
cIJ(d){var x=J.t(d.a,d.d+-1),w=J.t(d.a,d.d+31),v=J.t(d.a,d.d+63),u=J.t(d.a,d.d+95),t=J.t(d.a,d.d+-33),s=J.t(d.a,d.d+-32),r=J.t(d.a,d.d+-31),q=J.t(d.a,d.d+-30),p=J.t(d.a,d.d+-29)
d.n(0,96,A.el(w,v,u))
v=A.el(x,w,v)
d.n(0,97,v)
d.n(0,64,v)
w=A.el(t,x,w)
d.n(0,98,w)
d.n(0,65,w)
d.n(0,32,w)
x=A.el(s,t,x)
d.n(0,99,x)
d.n(0,66,x)
d.n(0,33,x)
d.n(0,0,x)
t=A.el(r,s,t)
d.n(0,67,t)
d.n(0,34,t)
d.n(0,1,t)
s=A.el(q,r,s)
d.n(0,35,s)
d.n(0,2,s)
d.n(0,3,A.el(p,q,r))},
cII(d){var x=J.t(d.a,d.d+-32),w=J.t(d.a,d.d+-31),v=J.t(d.a,d.d+-30),u=J.t(d.a,d.d+-29),t=J.t(d.a,d.d+-28),s=J.t(d.a,d.d+-27),r=J.t(d.a,d.d+-26),q=J.t(d.a,d.d+-25)
d.n(0,0,A.el(x,w,v))
w=A.el(w,v,u)
d.n(0,32,w)
d.n(0,1,w)
v=A.el(v,u,t)
d.n(0,64,v)
d.n(0,33,v)
d.n(0,2,v)
u=A.el(u,t,s)
d.n(0,96,u)
d.n(0,65,u)
d.n(0,34,u)
d.n(0,3,u)
t=A.el(t,s,r)
d.n(0,97,t)
d.n(0,66,t)
d.n(0,35,t)
s=A.el(s,r,q)
d.n(0,98,s)
d.n(0,67,s)
d.n(0,99,A.el(r,q,q))},
cIP(d){var x=J.t(d.a,d.d+-1),w=J.t(d.a,d.d+31),v=J.t(d.a,d.d+63),u=J.t(d.a,d.d+-33),t=J.t(d.a,d.d+-32),s=J.t(d.a,d.d+-31),r=J.t(d.a,d.d+-30),q=J.t(d.a,d.d+-29),p=D.c.ks(D.c.O(u+t+1,1),32)
d.n(0,65,p)
d.n(0,0,p)
p=D.c.ks(D.c.O(t+s+1,1),32)
d.n(0,66,p)
d.n(0,1,p)
p=D.c.ks(D.c.O(s+r+1,1),32)
d.n(0,67,p)
d.n(0,2,p)
d.n(0,3,D.c.ks(D.c.O(r+q+1,1),32))
d.n(0,96,A.el(v,w,x))
d.n(0,64,A.el(w,x,u))
x=A.el(x,u,t)
d.n(0,97,x)
d.n(0,32,x)
u=A.el(u,t,s)
d.n(0,98,u)
d.n(0,33,u)
t=A.el(t,s,r)
d.n(0,99,t)
d.n(0,34,t)
d.n(0,35,A.el(s,r,q))},
cIO(d){var x,w=J.t(d.a,d.d+-32),v=J.t(d.a,d.d+-31),u=J.t(d.a,d.d+-30),t=J.t(d.a,d.d+-29),s=J.t(d.a,d.d+-28),r=J.t(d.a,d.d+-27),q=J.t(d.a,d.d+-26),p=J.t(d.a,d.d+-25)
d.n(0,0,D.c.ks(D.c.O(w+v+1,1),32))
x=D.c.ks(D.c.O(v+u+1,1),32)
d.n(0,64,x)
d.n(0,1,x)
x=D.c.ks(D.c.O(u+t+1,1),32)
d.n(0,65,x)
d.n(0,2,x)
x=D.c.ks(D.c.O(t+s+1,1),32)
d.n(0,66,x)
d.n(0,3,x)
d.n(0,32,A.el(w,v,u))
v=A.el(v,u,t)
d.n(0,96,v)
d.n(0,33,v)
u=A.el(u,t,s)
d.n(0,97,u)
d.n(0,34,u)
t=A.el(t,s,r)
d.n(0,98,t)
d.n(0,35,t)
d.n(0,67,A.el(s,r,q))
d.n(0,99,A.el(r,q,p))},
cIG(d){var x,w=J.t(d.a,d.d+-1),v=J.t(d.a,d.d+31),u=J.t(d.a,d.d+63),t=J.t(d.a,d.d+95)
d.n(0,0,D.c.ks(D.c.O(w+v+1,1),32))
x=D.c.ks(D.c.O(v+u+1,1),32)
d.n(0,32,x)
d.n(0,2,x)
x=D.c.ks(D.c.O(u+t+1,1),32)
d.n(0,64,x)
d.n(0,34,x)
d.n(0,1,A.el(w,v,u))
v=A.el(v,u,t)
d.n(0,33,v)
d.n(0,3,v)
u=A.el(u,t,t)
d.n(0,65,u)
d.n(0,35,u)
d.n(0,99,t)
d.n(0,98,t)
d.n(0,97,t)
d.n(0,96,t)
d.n(0,66,t)
d.n(0,67,t)},
cIE(d){var x=J.t(d.a,d.d+-1),w=J.t(d.a,d.d+31),v=J.t(d.a,d.d+63),u=J.t(d.a,d.d+95),t=J.t(d.a,d.d+-33),s=J.t(d.a,d.d+-32),r=J.t(d.a,d.d+-31),q=J.t(d.a,d.d+-30),p=D.c.ks(D.c.O(x+t+1,1),32)
d.n(0,34,p)
d.n(0,0,p)
p=D.c.ks(D.c.O(w+x+1,1),32)
d.n(0,66,p)
d.n(0,32,p)
p=D.c.ks(D.c.O(v+w+1,1),32)
d.n(0,98,p)
d.n(0,64,p)
d.n(0,96,D.c.ks(D.c.O(u+v+1,1),32))
d.n(0,3,A.el(s,r,q))
d.n(0,2,A.el(t,s,r))
s=A.el(x,t,s)
d.n(0,35,s)
d.n(0,1,s)
t=A.el(w,x,t)
d.n(0,67,t)
d.n(0,33,t)
x=A.el(v,w,x)
d.n(0,99,x)
d.n(0,65,x)
d.n(0,97,A.el(u,v,w))},
cJ_(d){var x
for(x=0;x<16;++x)d.qQ(x*32,16,d,-32)},
cIY(d){var x,w,v,u,t
for(x=0,w=16;w>0;--w){v=J.t(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.ra(u,t,t+16,v)
x+=32}},
bzh(d,e){var x,w,v
for(x=0;x<16;++x){w=e.a
v=e.d+x*32
J.ra(w,v,v+16,d)}},
cIQ(d){var x,w
for(x=16,w=0;w<16;++w)x+=J.t(d.a,d.d+(-1+w*32))+J.t(d.a,d.d+(w-32))
A.bzh(D.c.O(x,5),d)},
cIS(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.t(d.a,d.d+(-1+w*32))
A.bzh(D.c.O(x,4),d)},
cIR(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.t(d.a,d.d+(w-32))
A.bzh(D.c.O(x,4),d)},
cIT(d){A.bzh(128,d)},
cJ0(d){var x
for(x=0;x<8;++x)d.qQ(x*32,8,d,-32)},
cIZ(d){var x,w,v,u,t
for(x=0,w=0;w<8;++w){v=J.t(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.ra(u,t,t+8,v)
x+=32}},
bzi(d,e){var x,w,v
for(x=0;x<8;++x){w=e.a
v=e.d+x*32
J.ra(w,v,v+8,d)}},
cIU(d){var x,w
for(x=8,w=0;w<8;++w)x+=J.t(d.a,d.d+(w-32))+J.t(d.a,d.d+(-1+w*32))
A.bzi(D.c.O(x,4),d)},
cIV(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.t(d.a,d.d+(w-32))
A.bzi(D.c.O(x,3),d)},
cIW(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.t(d.a,d.d+(-1+w*32))
A.bzi(D.c.O(x,3),d)},
cIX(d){A.bzi(128,d)},
CB(d,e,f,g,h){var x=e+f+g*32,w=J.t(d.a,d.d+x)+D.c.O(h,3)
if(!((w&-256)>>>0===0))w=w<0?0:255
d.n(0,x,w)},
bzg(d,e,f,g,h){A.CB(d,0,0,e,f+g)
A.CB(d,0,1,e,f+h)
A.CB(d,0,2,e,f-h)
A.CB(d,0,3,e,f-g)},
cIH(){var x,w,v
if(!$.clf){for(x=-255;x<=255;++x){w=$.aPx()
v=255+x
w[v]=x<0?-x:x
$.c5a()[v]=D.c.O(w[v],1)}for(x=-1020;x<=1020;++x){w=$.c5b()
if(x<-128)v=-128
else v=x>127?127:x
w[1020+x]=v}for(x=-112;x<=112;++x){w=$.aPy()
if(x<-16)v=-16
else v=x>15?15:x
w[112+x]=v}for(x=-255;x<=510;++x){w=$.oA()
if(x<0)v=0
else v=x>255?255:x
w[255+x]=v}$.clf=!0}},
bze:function bze(){},
cIC(){var x,w=J.ia(3,y.D)
for(x=0;x<3;++x)w[x]=new Uint8Array(11)
return new A.a3W(w)},
cJf(){var x,w,v,u,t=new Uint8Array(3),s=J.ia(4,y.cm)
for(x=y.V,w=0;w<4;++w){v=J.ia(8,x)
for(u=0;u<8;++u)v[u]=A.cIC()
s[w]=v}D.aa.jK(t,0,3,255)
return new A.bzo(t,s)},
bzj:function bzj(){this.d=$},
bzn:function bzn(){this.b=null},
bzp:function bzp(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
a3W:function a3W(d){this.a=d},
bzo:function bzo(d,e){this.a=d
this.b=e},
bzf:function bzf(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
Id:function Id(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
axF:function axF(){this.b=this.a=0},
axH:function axH(d,e,f){this.a=d
this.b=e
this.c=f},
axG:function axG(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
axI:function axI(d,e,f){this.a=d
this.b=e
this.c=f},
c9l(d,e){var x=B.a([],y.A),w=B.a([],y.F),v=new Uint32Array(2),u=new A.axD(d,v)
v=u.d=B.bX(v.buffer,0,null)
v[0]=d.cW()
v[1]=d.cW()
v[2]=d.cW()
v[3]=d.cW()
v[4]=d.cW()
v[5]=d.cW()
v[6]=d.cW()
v[7]=d.cW()
return new A.a3Y(u,e,x,w)},
CC(d,e){return D.c.O(d+D.c.ef(1,e)-1,e)},
a3Y:function a3Y(d,e,f,g){var _=this
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
amu:function amu(d,e,f,g){var _=this
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
axD:function axD(d,e){var _=this
_.a=0
_.b=d
_.c=e
_.d=$},
bzk:function bzk(d,e){this.a=d
this.b=e},
bzl(d,e,f){var x=d[e]
d[e]=(((x&4278255360)>>>0)+((f&4278255360)>>>0)&4278255360|(x&16711935)+(f&16711935)&16711935)>>>0},
y3(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
If(d){if(d<0)return 0
if(d>255)return 255
return d},
bzm(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
cJ1(d,e,f){return 4278190080},
cJ2(d,e,f){return e},
cJ7(d,e,f){return d[f]},
cJ8(d,e,f){return d[f+1]},
cJ9(d,e,f){return d[f-1]},
cJa(d,e,f){var x=d[f]
return A.y3(A.y3(e,d[f+1]),x)},
cJb(d,e,f){return A.y3(e,d[f-1])},
cJc(d,e,f){return A.y3(e,d[f])},
cJd(d,e,f){return A.y3(d[f-1],d[f])},
cJe(d,e,f){return A.y3(d[f],d[f+1])},
cJ3(d,e,f){var x=d[f-1],w=d[f],v=d[f+1]
return A.y3(A.y3(e,x),A.y3(w,v))},
cJ4(d,e,f){var x=d[f],w=d[f-1]
return A.bzm(x>>>24,e>>>24,w>>>24)+A.bzm(x>>>16&255,e>>>16&255,w>>>16&255)+A.bzm(x>>>8&255,e>>>8&255,w>>>8&255)+A.bzm(x&255,e&255,w&255)<=0?x:e},
cJ5(d,e,f){var x=d[f],w=d[f-1]
return(A.If((e>>>24)+(x>>>24)-(w>>>24))<<24|A.If((e>>>16&255)+(x>>>16&255)-(w>>>16&255))<<16|A.If((e>>>8&255)+(x>>>8&255)-(w>>>8&255))<<8|A.If((e&255)+(x&255)-(w&255)))>>>0},
cJ6(d,e,f){var x,w,v,u=d[f],t=d[f-1],s=A.y3(e,u)
u=s>>>24
x=s>>>16&255
w=s>>>8&255
v=s>>>0&255
return(A.If(u+D.c.aY(u-(t>>>24),2))<<24|A.If(x+D.c.aY(x-(t>>>16&255),2))<<16|A.If(w+D.c.aY(w-(t>>>8&255),2))<<8|A.If(v+D.c.aY(v-(t&255),2)))>>>0},
Ie:function Ie(d,e){this.a=d
this.b=e},
axE:function axE(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
bA7:function bA7(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
a4b:function a4b(){},
amv:function amv(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=$
_.r=1
_.x=_.w=$},
cgt(){var x=new Uint8Array(128),w=new Int16Array(128)
x=new A.alP(x,w,new Int16Array(128))
x.a5o(0)
return x},
cBm(){var x,w=J.ia(5,y.x)
for(x=0;x<5;++x)w[x]=A.cgt()
return new A.WM(w)},
alP:function alP(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$
_.f=_.e=0},
WM:function WM(d){this.a=d},
PP:function PP(d,e){this.a=d
this.b=e},
ay4:function ay4(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
amw:function amw(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
bA8:function bA8(){this.b=this.a=null},
cgw(d){return new A.X8(d.a,d.b,D.aa.lx(d.c,0))},
b8x:function b8x(d,e){this.a=d
this.b=e},
X8:function X8(d,e,f){this.a=d
this.b=e
this.c=f},
h8(d,e,f,g,h,i,j,k,l,m,n,o,p){var x,w=new A.Ad(null,null,null,d,k,h,g,0)
w.gkj().push(w)
w.c=j
if(e!=null)w.e=A.VZ(e)
x=!1
if(m==null)if(p)x=w.gd8()===C.eS||w.gd8()===C.ft||w.gd8()===C.fu||w.gd8()===C.a_||w.gd8()===C.bY
w.ah6(o,i,f,l,x?w.aTi(f,n,l):m)
return w},
am0(d,e,f,g){var x,w,v,u=null,t=d.e
t=t==null?u:A.VZ(t)
x=d.c
x=x==null?u:A.cgw(x)
w=d.w
v=d.r
t=new A.Ad(u,x,t,u,v,w,d.y,d.z)
t.aOz(d,e,f,g)
return t},
Ac(d,e,f){var x,w,v,u,t=null,s=d.a
s=s==null?t:s.qe(0,f)
x=d.e
x=x==null?t:A.VZ(x)
w=d.c
w=w==null?t:A.cgw(w)
v=d.w
u=d.r
s=new A.Ad(s,w,x,t,u,v,d.y,d.z)
s.aOy(d,e,f)
return s},
akZ:function akZ(d,e){this.a=d
this.b=e},
Ad:function Ad(d,e,f,g,h,i,j,k){var _=this
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
b9a:function b9a(d,e){this.a=d
this.b=e},
b99:function b99(){},
l5:function l5(){},
cBS(d,e,f){return new A.Ma(new Uint16Array(d*e*f),d,e,f)},
Ma:function Ma(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
cBT(d,e,f){return new A.Mb(new Float32Array(d*e*f),d,e,f)},
Mb:function Mb(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
Xb:function Xb(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
Xc:function Xc(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
Xd:function Xd(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
Xe:function Xe(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
Mc:function Mc(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
Md:function Md(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
Me:function Me(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
cBU(d,e,f){return new A.Mf(new Uint32Array(d*e*f),d,e,f)},
Mf:function Mf(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
Mg:function Mg(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
cgM(d,e,f){return new A.Mh(new Uint8Array(d*e*f),null,d,e,f)},
Mh:function Mh(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
amx:function amx(d,e){this.a=d
this.b=e},
bik:function bik(){},
aqX:function aqX(d,e,f){this.c=d
this.a=e
this.b=f},
aqY:function aqY(d,e,f){this.c=d
this.a=e
this.b=f},
aqZ:function aqZ(d,e,f){this.c=d
this.a=e
this.b=f},
ar_:function ar_(d,e,f){this.c=d
this.a=e
this.b=f},
ar0:function ar0(d,e,f){this.c=d
this.a=e
this.b=f},
ar1:function ar1(d,e,f){this.c=d
this.a=e
this.b=f},
ar2:function ar2(d,e,f){this.c=d
this.a=e
this.b=f},
ZO:function ZO(d,e,f){this.c=d
this.a=e
this.b=f},
cih(d){return new A.rY(new Uint8Array(B.bD(d.c)),d.a,d.b)},
rY:function rY(d,e,f){this.c=d
this.a=e
this.b=f},
c7Y(d){return new A.Gb(-1,0,-d.c,d)},
Gb:function Gb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c7Z(d){return new A.Gc(-1,0,-d.c,d)},
Gc:function Gc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c8_(d){return new A.Gd(-1,0,-d.c,d)},
Gd:function Gd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c80(d){return new A.Ge(-1,0,-d.c,d)},
Ge:function Ge(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c81(d){return new A.Gf(-1,0,-d.c,d)},
Gf:function Gf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c82(d){return new A.Gg(-1,0,-d.c,d)},
Gg:function Gg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
rZ(d,e,f,g,h){d.fY(0,e-1,f)
return new A.arg(d,e,e+g-1,f+h-1)},
arg:function arg(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g},
a_3(d){return new A.Gh(-1,0,0,-1,0,d)},
Gh:function Gh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c83(d){return new A.Gi(-1,0,-d.c,d)},
Gi:function Gi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_4(d){return new A.Gj(-1,0,0,-2,0,d)},
Gj:function Gj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c84(d){return new A.Gk(-1,0,-d.c,d)},
Gk:function Gk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_5(d){return new A.Gl(-1,0,0,-(d.c<<2>>>0),d)},
Gl:function Gl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
biz(d){return new A.Gm(-1,0,-d.c,d)},
Gm:function Gm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eX:function eX(){},
cSV(d,e){switch(e.a){case 0:A.aP9(d)
break
case 1:A.cSY(d)
break
case 2:A.cSW(d)
break}return d},
cSY(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.gkj().length
for(x=y.g,w=0;w<h;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?i:t.a
if(r==null)r=0
q=s?i:t.b
if(q==null)q=0
p=D.c.aY(q,2)
t=d.a
if((t==null?i:t.gez())!=null)for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.e1(m,n,i)
if(l==null)l=new A.eX()
t=u.a
k=t==null?i:t.e1(m,o,i)
if(k==null)k=new A.eX()
j=l.gdU(l)
l.sdU(0,k.gdU(k))
k.sdU(0,j)}else for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.e1(m,n,i)
if(l==null)l=new A.eX()
t=u.a
k=t==null?i:t.e1(m,o,i)
if(k==null)k=new A.eX()
j=l.gaD(l)
l.saD(0,k.gaD(k))
k.saD(0,j)
j=l.gaK()
l.saK(k.gaK())
k.saK(j)
j=l.gaM(l)
l.saM(0,k.gaM(k))
k.saM(0,j)
j=l.gaP(l)
l.saP(0,k.gaP(k))
k.saP(0,j)}}return d},
aP9(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=d.gkj().length
for(x=y.g,w=0;w<g;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?h:t.a
if(r==null)r=0
q=s?h:t.b
if(q==null)q=0
p=D.c.aY(r,2)
t=d.a
if((t==null?h:t.gez())!=null)for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.e1(l,n,h)
if(k==null)k=new A.eX()
t=u.a
j=t==null?h:t.e1(m,n,h)
if(j==null)j=new A.eX()
i=k.gdU(k)
k.sdU(0,j.gdU(j))
j.sdU(0,i)}else for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.e1(l,n,h)
if(k==null)k=new A.eX()
t=u.a
j=t==null?h:t.e1(m,n,h)
if(j==null)j=new A.eX()
i=k.gaD(k)
k.saD(0,j.gaD(j))
j.saD(0,i)
i=k.gaK()
k.saK(j.gaK())
j.saK(i)
i=k.gaM(k)
k.saM(0,j.gaM(j))
j.saM(0,i)
i=k.gaP(k)
k.saP(0,j.gaP(j))
j.saP(0,i)}}return d},
cSW(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=d.gkj().length
for(x=y.g,w=0;w<f;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?g:t.a
if(r==null)r=0
q=s?g:t.b
if(q==null)q=0
p=D.c.aY(q,2)
if((s?g:t.gez())!=null)for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.e1(k,m,g)
if(j==null)j=new A.eX()
t=u.a
i=t==null?g:t.e1(l,o,g)
if(i==null)i=new A.eX()
h=j.gdU(j)
j.sdU(0,i.gdU(i))
i.sdU(0,h)}else for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.e1(k,m,g)
if(j==null)j=new A.eX()
t=u.a
i=t==null?g:t.e1(l,o,g)
if(i==null)i=new A.eX()
h=j.gaD(j)
j.saD(0,i.gaD(i))
i.saD(0,h)
h=j.gaK()
j.saK(i.gaK())
i.saK(h)
h=j.gaM(j)
j.saM(0,i.gaM(i))
i.saM(0,h)
h=j.gaP(j)
j.saP(0,i.gaP(i))
i.saP(0,h)}}return d},
b4g:function b4g(d,e){this.a=d
this.b=e},
bK(d){return new A.am4(d)},
am4:function am4(d){this.a=d},
cz(d,e,f,g){return new A.l8(d,g,f==null?J.b_(d):g+f,g,e)},
bR(d,e,f){var x=d.a,w=d.d+f,v=e==null?d.c:w+e
return new A.l8(x,d.b,v,w,d.e)},
l8:function l8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bhd:function bhd(d){var _=this
_.a=$
_.b=10
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=d
_.ax=_.at=$},
p6(d,e){return new A.aqK(d,new Uint8Array(e))},
aqK:function aqK(d,e){this.a=0
this.b=d
this.c=e},
blK:function blK(){},
mW:function mW(d,e){this.a=d
this.b=e},
bo_:function bo_(d,e){this.a=d
this.b=e},
bnX:function bnX(d,e){this.a=d
this.b=e},
bye:function bye(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
chU(d){return new Int8Array(d)},
cIt(d){throw B.e(B.an("Uint64List not supported on the web."))},
cCc(d,e,f){B.yF(d,e,f)
return f==null?new Int8Array(d,e):new Int8Array(d,e,f)},
cl2(d,e){return B.o_(d,e,null)},
cAF(d){return B.bgT(d,0,null)},
cAG(d){return d.bES(0,0,null)},
cTf(d){var x,w,v,u,t,s=d.length
for(x=1,w=0,v=0;s>0;){u=3800>s?s:3800
s-=u
for(;--u,u>=0;v=t){t=v+1
x+=d[v]&255
w+=x}x=D.c.al(x,65521)
w=D.c.al(w,65521)}return(w<<16|x)>>>0},
vO(d,e){var x,w,v=J.a3(d),u=v.gt(d)
e^=4294967295
for(x=0;u>=8;){w=x+1
e=C.fz[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.fz[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.fz[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.fz[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.fz[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.fz[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.fz[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.fz[(e^v.i(d,w))&255]^e>>>8
u-=8}if(u>0)do{w=x+1
e=C.fz[(e^v.i(d,x))&255]^e>>>8
if(--u,u>0){x=w
continue}else break}while(!0)
return(e^4294967295)>>>0},
cBE(d){var x,w,v,u,t,s,r,q,p=null,o="data:image/jpeg;base64,",n="data:image/png;base64,",m=F.aPg(I.c4u(d),"img"),l=B.a([],y.s)
for(x=m.length,w=0;w<m.length;m.length===x||(0,B.O)(m),++w){v=m[w].b.i(0,"src")
if(v!=null)u=D.e.bl(v,o)||D.e.bl(v,n)
else u=!1
if(u){v.toString
if(B.Js(v,o,0))t=B.cbl(v,o,"",0)
else t=B.cbl(v,n,"",0)
if(D.c.aY(t.length*3,4)>524288){s=D.dX.cD(t)
if(D.e.bl(v,o)){r=A.caR(s)
q=r==null?p:r.mX(0,s,p)
if(q!=null){u=q.a
u=u==null?p:u.a
u=(u==null?0:u)>1200}else u=!1
if(u)l.push(v)}else if(D.e.bl(v,n)){r=A.caR(s)
q=r==null?p:r.mX(0,s,p)
if(q!=null){u=q.a
u=u==null?p:u.a
u=(u==null?0:u)>1000}else u=!1
if(u)l.push(v)}}}}return l},
alG(d,e,f){var x=0,w=B.l(y.N),v,u,t,s,r,q
var $async$alG=B.h(function(g,h){if(g===1)return B.i(h,w)
while(true)switch(x){case 0:r=I.c4u(d)
q=new F.Hp().Yo(0,r,F.c24('img[src="'+e+'"]'))
x=q!=null?3:4
break
case 3:u=D.dX.cD(D.e.p(e,"data:image/jpeg;base64,")?D.e.lr(e,"data:image/jpeg;base64,",""):D.e.lr(e,"data:image/png;base64,",""))
x=D.e.bl(e,"data:image/jpeg;base64,")?5:7
break
case 5:x=8
return B.c(A.b8S(u,1200),$async$alG)
case 8:t=h
s=D.fm.gkZ().cD(t)
q.b.n(0,"src","data:image/jpeg;base64,"+s)
x=6
break
case 7:x=D.e.bl(e,"data:image/png;base64,")?9:10
break
case 9:x=A.coV(u)!=null?11:12
break
case 11:x=13
return B.c(A.b8U(u,1000),$async$alG)
case 13:t=h
s=D.fm.gkZ().cD(t)
q.b.n(0,"src","data:image/png;base64,"+s)
case 12:case 10:case 6:f.$0()
case 4:v=r.gamw()
x=1
break
case 1:return B.j(v,w)}})
return B.k($async$alG,w)},
caK(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s,r,q
if(m==null)m=0
if(n==null)n=0
if(l==null)l=e.gcG(0)
if(k==null)k=e.gb_(0)
if(h==null)h=d.gcG(0)<e.gcG(0)?d.gcG(0):e.gcG(0)
if(g==null)g=d.gb_(0)<e.gb_(0)?d.gb_(0):e.gb_(0)
x=f===C.wK
if(!x&&d.gqE())d=d.atY(d.gpB())
w=k/g
v=l/h
u=y.p
t=J.ia(g,u)
for(s=0;s<g;++s)t[s]=n+D.d.D(s*w)
r=J.ia(h,u)
for(q=0;q<h;++q)r[q]=m+D.d.D(q*v)
if(x)A.cNB(e,d,i,j,h,g,r,t,null,C.Eu)
else A.cNd(e,d,i,j,h,g,r,t,f,!1,null,C.Eu)
return d},
cNB(d,e,f,g,h,i,j,k,l,m){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.e1(t,s,x)
if(x==null)x=new A.eX()
e.wW(f+u,v,x)}},
cNd(d,e,f,g,h,i,j,k,l,m,n,o){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.e1(t,s,x)
if(x==null)x=new A.eX()
A.cSy(e,f+u,v,x,l,!1,n,o)}},
cSy(a4,a5,a6,a7,a8,a9,b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
if(!a4.axt(a5,a6))return a4
if(a8===C.wK||a4.gqE())if(a4.axt(a5,a6)){a4.ng(a5,a6).ix(0,a7)
return a4}x=a7.gib()
w=a7.ghX()
v=a7.gi5()
u=a7.gt(a7)<4?1:a7.gii()
if(u===0)return a4
t=a4.ng(a5,a6)
s=t.gib()
r=t.ghX()
q=t.gi5()
p=t.gii()
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
m=D.d.bg(u,0.01,1)
n=u<0
i=n?0:1
h=D.d.bg(x/m*i,0,0.99)
i=D.d.bg(u,0.01,1)
m=n?0:1
g=D.d.bg(w/i*m,0,0.99)
m=D.d.bg(u,0.01,1)
n=n?0:1
f=D.d.bg(v/m*n,0,0.99)
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
t.sib(x*u+s*p*a3)
t.shX(w*u+r*p*a3)
t.si5(v*u+q*p*a3)
t.sii(u+p*a3)
return a4},
cSL(d,e,f,g,h,i,j){var x,w=D.d.bg(Math.min(g,h),0,d.gcG(0)-1),v=D.d.bg(Math.min(i,j),0,d.gb_(0)-1),u=D.d.bg(Math.max(g,h),0,d.gcG(0)-1),t=D.d.bg(Math.max(i,j),0,d.gb_(0)-1),s=d.a.pL(0,w,v,u-w+1,t-v+1)
for(x=s.a;s.q();)x.ix(0,f)
return d},
cAi(a2,a3,a4,a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a8<16384,a1=a4>a6?a6:a4
for(x=1;x<=a1;)x=x<<1>>>0
x=x>>>1
w=x>>>1
v=B.a([0,0],y.t)
for(u=x,x=w;x>=1;u=x,x=w){t=a3+a7*(a6-u)
s=a7*x
r=a7*u
q=a5*x
p=a5*u
for(o=(a4&x)>>>0!==0,n=a5*(a4-u),m=a3;m<=t;m+=r){l=m+n
for(k=m;k<=l;k+=p){j=k+q
i=k+s
h=i+q
if(a0){A.W5(a2[k],a2[i],v)
g=v[0]
f=v[1]
A.W5(a2[j],a2[h],v)
e=v[0]
d=v[1]
A.W5(g,e,v)
a2[k]=v[0]
a2[j]=v[1]
A.W5(f,d,v)
a2[i]=v[0]
a2[h]=v[1]}else{A.W6(a2[k],a2[i],v)
g=v[0]
f=v[1]
A.W6(a2[j],a2[h],v)
e=v[0]
d=v[1]
A.W6(g,e,v)
a2[k]=v[0]
a2[j]=v[1]
A.W6(f,d,v)
a2[i]=v[0]
a2[h]=v[1]}}if(o){i=k+s
if(a0){A.W5(a2[k],a2[i],v)
g=v[0]
a2[i]=v[1]}else{A.W6(a2[k],a2[i],v)
g=v[0]
a2[i]=v[1]}a2[k]=g}}if((a6&x)>>>0!==0){l=m+n
for(k=m;k<=l;k+=p){j=k+q
if(a0){A.W5(a2[k],a2[j],v)
g=v[0]
a2[j]=v[1]}else{A.W6(a2[k],a2[j],v)
g=v[0]
a2[j]=v[1]}a2[k]=g}}w=x>>>1}},
W5(d,e,f){var x,w,v,u,t=$.pE()
t[0]=d
x=$.r5()
w=x[0]
t[0]=e
v=x[0]
u=w+(v&1)+D.c.O(v,1)
f[0]=u
f[1]=u-v},
W6(d,e,f){var x=d-D.c.O(e,1)&65535
f[1]=x
f[0]=e+x-32768&65535},
caR(d){var x,w,v,u,t,s,r,q,p,o,n=null
if(A.cha().P1(d))return new A.amE()
x=new A.asf(A.cgZ())
if(x.GI(d))return x
w=new A.b6l()
w.f=A.cz(d,!1,n,0)
w.a=new A.al9(B.a([],y.b))
if(w.aj1())return w
v=new A.bA8()
if(v.GI(d))return v
u=new A.bws()
if(u.anh(A.cz(d,!1,n,0))!=null)return u
if(A.ciV(d).c===943870035)return new A.blB()
if(A.cAh(d))return new A.b34()
if(A.c5Q(A.cz(d,!1,n,0)))return new A.aeI(!1)
t=new A.bwg()
s=A.cz(d,!1,n,0)
r=t.a=new A.awO(C.vw)
r.pG(0,s)
if(r.axI())return t
q=new A.b8z()
r=A.cz(d,!1,n,0)
q.a=r
r=A.cgx(r)
q.b=r
if(r!=null)return q
p=new A.blD()
if(p.nT(d)!=null)return p
o=new A.bkG(B.a([],y.s))
if(o.GI(d))return o
return n},
coV(d){var x=A.caR(d)
return x==null?null:x.mX(0,d,null)},
cUQ(a2,a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
if($.cac==null){x=$.cac=new Uint8Array(768)
for(w=-256;w<0;++w)x[256+w]=0
for(w=0;w<256;++w)x[256+w]=w
for(w=256;w<512;++w)x[256+w]=255}for(w=0;w<64;++w)a5[w]=a3[w]*a2[w]
for(v=0,w=0;w<8;++w,v+=8){x=1+v
u=a5[x]
if(u===0&&a5[2+v]===0&&a5[3+v]===0&&a5[4+v]===0&&a5[5+v]===0&&a5[6+v]===0&&a5[7+v]===0){x=D.c.O(5793*a5[v]+512,10)
t=(x&2147483647)-((x&2147483648)>>>0)
a5[v]=t
a5[v+1]=t
a5[v+2]=t
a5[v+3]=t
a5[v+4]=t
a5[v+5]=t
a5[v+6]=t
a5[v+7]=t
continue}s=D.c.O(5793*a5[v]+128,8)
r=(s&2147483647)-((s&2147483648)>>>0)
s=4+v
q=D.c.O(5793*a5[s]+128,8)
p=(q&2147483647)-((q&2147483648)>>>0)
q=2+v
o=a5[q]
n=6+v
m=a5[n]
l=7+v
k=a5[l]
j=D.c.O(2896*(u-k)+128,8)
i=(j&2147483647)-((j&2147483648)>>>0)
k=D.c.O(2896*(u+k)+128,8)
h=(k&2147483647)-((k&2147483648)>>>0)
k=3+v
u=a5[k]<<4
g=(u&2147483647)-((u&2147483648)>>>0)
u=5+v
j=a5[u]<<4
f=(j&2147483647)-((j&2147483648)>>>0)
j=D.c.O(r-p+1,1)
t=(j&2147483647)-((j&2147483648)>>>0)
j=D.c.O(r+p+1,1)
r=(j&2147483647)-((j&2147483648)>>>0)
j=D.c.O(o*3784+m*1567+128,8)
j=(j&2147483647)-((j&2147483648)>>>0)
e=D.c.O(o*1567-m*3784+128,8)
o=(e&2147483647)-((e&2147483648)>>>0)
e=D.c.O(i-f+1,1)
e=(e&2147483647)-((e&2147483648)>>>0)
d=D.c.O(i+f+1,1)
i=(d&2147483647)-((d&2147483648)>>>0)
d=D.c.O(h+g+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.c.O(h-g+1,1)
g=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.O(r-j+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
j=D.c.O(r+j+1,1)
r=(j&2147483647)-((j&2147483648)>>>0)
j=D.c.O(t-o+1,1)
j=(j&2147483647)-((j&2147483648)>>>0)
a1=D.c.O(t+o+1,1)
p=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.c.O(i*2276+d*3406+2048,12)
t=(a1&2147483647)-((a1&2147483648)>>>0)
d=D.c.O(i*3406-d*2276+2048,12)
i=(d&2147483647)-((d&2147483648)>>>0)
d=D.c.O(g*799+e*4017+2048,12)
d=(d&2147483647)-((d&2147483648)>>>0)
e=D.c.O(g*4017-e*799+2048,12)
g=(e&2147483647)-((e&2147483648)>>>0)
a5[v]=r+t
a5[l]=r-t
a5[x]=p+d
a5[n]=p-d
a5[q]=j+g
a5[u]=j-g
a5[k]=a0+i
a5[s]=a0-i}for(w=0;w<8;++w){x=8+w
u=a5[x]
if(u===0&&a5[16+w]===0&&a5[24+w]===0&&a5[32+w]===0&&a5[40+w]===0&&a5[48+w]===0&&a5[56+w]===0){u=D.c.O(5793*a5[w]+8192,14)
t=(u&2147483647)-((u&2147483648)>>>0)
a5[w]=t
a5[x]=t
a5[16+w]=t
a5[24+w]=t
a5[32+w]=t
a5[40+w]=t
a5[48+w]=t
a5[56+w]=t
continue}s=D.c.O(5793*a5[w]+2048,12)
r=(s&2147483647)-((s&2147483648)>>>0)
s=32+w
q=D.c.O(5793*a5[s]+2048,12)
p=(q&2147483647)-((q&2147483648)>>>0)
q=16+w
o=a5[q]
n=48+w
m=a5[n]
l=56+w
k=a5[l]
j=D.c.O(2896*(u-k)+2048,12)
i=(j&2147483647)-((j&2147483648)>>>0)
k=D.c.O(2896*(u+k)+2048,12)
h=(k&2147483647)-((k&2147483648)>>>0)
k=24+w
g=a5[k]
u=40+w
f=a5[u]
j=D.c.O(r-p+1,1)
t=(j&2147483647)-((j&2147483648)>>>0)
j=D.c.O(r+p+1,1)
r=(j&2147483647)-((j&2147483648)>>>0)
j=D.c.O(o*3784+m*1567+2048,12)
j=(j&2147483647)-((j&2147483648)>>>0)
e=D.c.O(o*1567-m*3784+2048,12)
o=(e&2147483647)-((e&2147483648)>>>0)
e=D.c.O(i-f+1,1)
e=(e&2147483647)-((e&2147483648)>>>0)
d=D.c.O(i+f+1,1)
i=(d&2147483647)-((d&2147483648)>>>0)
d=D.c.O(h+g+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.c.O(h-g+1,1)
g=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.O(r-j+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
j=D.c.O(r+j+1,1)
r=(j&2147483647)-((j&2147483648)>>>0)
j=D.c.O(t-o+1,1)
j=(j&2147483647)-((j&2147483648)>>>0)
a1=D.c.O(t+o+1,1)
p=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.c.O(i*2276+d*3406+2048,12)
t=(a1&2147483647)-((a1&2147483648)>>>0)
d=D.c.O(i*3406-d*2276+2048,12)
i=(d&2147483647)-((d&2147483648)>>>0)
d=D.c.O(g*799+e*4017+2048,12)
d=(d&2147483647)-((d&2147483648)>>>0)
e=D.c.O(g*4017-e*799+2048,12)
g=(e&2147483647)-((e&2147483648)>>>0)
a5[w]=r+t
a5[l]=r-t
a5[x]=p+d
a5[n]=p-d
a5[q]=j+g
a5[u]=j-g
a5[k]=a0+i
a5[s]=a0-i}for(x=$.cac,w=0;w<64;++w){x.toString
u=D.c.O(a5[w]+8,4)
a4[w]=x[384+((u&2147483647)-((u&2147483648)>>>0))]}},
cTl(d9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=null,d7="ifd0",d8=d9.r
if(d8.i(0,d7).a.Z(0,274)){x=d8.i(0,d7).gia(0)
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
r=A.h8(d6,d6,C.a_,0,C.b2,s,d6,0,3,d6,C.a_,t,!1)
r.e=A.VZ(d8)
r.gw1().i(0,d7).sia(0,d6)
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
e=n[D.c.hh(g,l)]
f=q-g
d=0
while(!0){a0=d9.d.e
a0.toString
if(!(d<a0))break
a1=e[D.c.hh(d,m)]
if(h){a0=r.a
if(a0!=null)a0.eS(p-d,g,a1,a1,a1)}else if(i){a0=r.a
if(a0!=null)a0.eS(p-d,f,a1,a1,a1)}else if(j){a0=r.a
if(a0!=null)a0.eS(d,f,a1,a1,a1)}else if(k){a0=r.a
if(a0!=null)a0.eS(g,d,a1,a1,a1)}else if(v){a0=r.a
if(a0!=null)a0.eS(f,d,a1,a1,a1)}else if(x){a0=r.a
if(a0!=null)a0.eS(f,p-d,a1,a1,a1)}else{a0=r.a
if(d8){if(a0!=null)a0.eS(g,p-d,a1,a1,a1)}else if(a0!=null)a0.eS(d,g,a1,a1,a1)}++d}++g}break
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
b1=D.c.hh(g,l)
b2=D.c.hh(g,a8)
b3=D.c.hh(g,b0)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
f=q-g
d=0
while(!0){a0=d9.d.e
a0.toString
if(!(d<a0))break
b6=D.c.hh(d,m)
b7=D.c.hh(d,a7)
b8=D.c.hh(d,a9)
a1=e[b6]<<8>>>0
b9=b4[b7]-128
c0=b5[b8]-128
a0=D.c.O(a1+359*c0+128,8)
c1=D.c.bg((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.c.O(a1-88*b9-183*c0+128,8)
c2=D.c.bg((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.c.O(a1+454*b9+128,8)
c3=D.c.bg((a0&2147483647)-((a0&2147483648)>>>0),0,255)
if(h){a0=r.a
if(a0!=null)a0.eS(p-d,g,c1,c2,c3)}else if(i){a0=r.a
if(a0!=null)a0.eS(p-d,f,c1,c2,c3)}else if(j){a0=r.a
if(a0!=null)a0.eS(d,f,c1,c2,c3)}else if(k){a0=r.a
if(a0!=null)a0.eS(g,d,c1,c2,c3)}else if(v){a0=r.a
if(a0!=null)a0.eS(f,d,c1,c2,c3)}else if(x){a0=r.a
if(a0!=null)a0.eS(f,p-d,c1,c2,c3)}else{a0=r.a
if(d8){if(a0!=null)a0.eS(g,p-d,c1,c2,c3)}else if(a0!=null)a0.eS(d,g,c1,c2,c3)}++d}++g}break
case 4:x=d9.c
if(x==null)throw B.e(A.bK("Unsupported color mode (4 components)"))
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
b1=D.c.hh(g,l)
b2=D.c.hh(g,a8)
b3=D.c.hh(g,b0)
c8=D.c.hh(g,c7)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
c9=c5[c8]
a0=q-g
d=0
while(!0){d0=d9.d.e
d0.toString
if(!(d<d0))break
b6=D.c.hh(d,m)
b7=D.c.hh(d,a7)
b8=D.c.hh(d,a9)
d1=D.c.hh(d,c6)
if(x){d2=e[b6]
d3=b4[b7]
a1=b5[b8]
d4=c9[d1]}else{a1=e[b6]
b9=b4[b7]
c0=b5[b8]
d4=c9[d1]
d0=c0-128
d2=255-D.c.bg(D.d.D(a1+1.402*d0),0,255)
d5=b9-128
d3=255-D.d.D(D.d.bg(a1-0.3441363*d5-0.71413636*d0,0,255))
a1=255-D.c.bg(D.d.D(a1+1.772*d5),0,255)}d0=D.c.O(d2*d4,8)
c1=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.c.O(d3*d4,8)
c2=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.c.O(a1*d4,8)
c3=(d0&2147483647)-((d0&2147483648)>>>0)
if(f){d0=r.a
if(d0!=null)d0.eS(p-d,g,c1,c2,c3)}else if(h){d0=r.a
if(d0!=null)d0.eS(p-d,a0,c1,c2,c3)}else if(i){d0=r.a
if(d0!=null)d0.eS(d,a0,c1,c2,c3)}else if(j){d0=r.a
if(d0!=null)d0.eS(g,d,c1,c2,c3)}else if(k){d0=r.a
if(d0!=null)d0.eS(a0,d,c1,c2,c3)}else if(v){d0=r.a
if(d0!=null)d0.eS(a0,p-d,c1,c2,c3)}else{d0=r.a
if(d8){if(d0!=null)d0.eS(g,p-d,c1,c2,c3)}else if(d0!=null)d0.eS(d,g,c1,c2,c3)}++d}++g}break
default:throw B.e(A.bK("Unsupported color mode"))}return r},
cJq(d,e,f,g,h,i){A.cJn(i,d,e,f,g,h,!0,i)},
cJr(d,e,f,g,h,i){A.cJo(i,d,e,f,g,h,!0,i)},
cJp(d,e,f,g,h,i){A.cJm(i,d,e,f,g,h,!0,i)},
PO(d,e,f,g,h){var x,w,v
for(x=0;x<g;++x){w=J.t(d.a,d.d+x)
v=J.t(e.a,e.d+x)
J.bQ(f.a,f.d+x,w+v)}},
cJn(d,e,f,g,h,i,j,k){var x,w,v=null,u=h*g,t=h+i,s=A.cz(d,!1,v,u),r=A.cz(d,!1,v,u),q=A.bR(r,v,0)
if(h===0){r.n(0,0,J.t(s.a,s.d))
A.PO(A.bR(s,v,1),q,A.bR(r,v,1),e-1,!0)
q.d+=g
s.d+=g
r.d+=g
h=1}for(x=-g,w=e-1;h<t;){A.PO(s,A.bR(q,v,x),r,1,!0)
A.PO(A.bR(s,v,1),q,A.bR(r,v,1),w,!0);++h
q.d+=g
s.d+=g
r.d+=g}},
cJo(d,e,f,g,h,i,j,k){var x=null,w=h*g,v=h+i,u=A.cz(d,!1,x,w),t=A.cz(k,!1,x,w),s=A.bR(t,x,0)
if(h===0){t.n(0,0,J.t(u.a,u.d))
A.PO(A.bR(u,x,1),s,A.bR(t,x,1),e-1,!0)
u.d+=g
t.d+=g
h=1}else s.d-=g
for(;h<v;){A.PO(u,s,t,e,!0);++h
s.d+=g
u.d+=g
t.d+=g}},
cJm(d,e,f,g,h,i,j,k){var x,w,v,u,t,s=null,r=h*g,q=h+i,p=A.cz(d,!1,s,r),o=A.cz(k,!1,s,r),n=A.bR(o,s,0)
if(h===0){o.n(0,0,J.t(p.a,p.d))
A.PO(A.bR(p,s,1),n,A.bR(o,s,1),e-1,!0)
n.d+=g
p.d+=g
o.d+=g
h=1}for(x=-g;h<q;){A.PO(p,A.bR(n,s,x),o,1,!0)
for(w=1;w<e;++w){v=w-g
u=J.t(n.a,n.d+(w-1))+J.t(n.a,n.d+v)-J.t(n.a,n.d+(v-1))
if((u&4294967040)>>>0===0)t=u
else t=u<0?0:255
v=J.t(p.a,p.d+w)
J.bQ(o.a,o.d+w,v+t)}++h
n.d+=g
p.d+=g
o.d+=g}},
cQg(d){var x="ifd0",w=A.Ac(d,!1,!1)
if(!d.gw1().i(0,x).a.Z(0,274)||d.gw1().i(0,x).gia(0)===1)return w
w.e=A.VZ(d.gw1())
w.gw1().i(0,x).sia(0,null)
switch(d.gw1().i(0,x).gia(0)){case 2:return A.aP9(w)
case 3:return A.cSV(w,C.aig)
case 4:return A.aP9(A.aP3(w,180))
case 5:return A.aP9(A.aP3(w,90))
case 6:return A.aP3(w,90)
case 7:return A.aP9(A.aP3(w,-90))
case 8:return A.aP3(w,-90)}return w},
cQX(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
d.gqE()
if(d.gw1().i(0,"ifd0").a.Z(0,274)&&d.gw1().i(0,"ifd0").gia(0)!==1)d=A.cQg(d)
x=D.d.ab(e*(d.gb_(0)/d.gcG(0)))
if(e<=0)e=D.d.ab(x*(d.gcG(0)/d.gb_(0)))
if(e===d.gcG(0)&&x===d.gb_(0))return A.Ac(d,!1,!1)
w=new Int32Array(e)
v=d.gcG(0)/e
for(u=0;u<e;++u)w[u]=D.d.D(u*v)
t=d.gkj().length
for(s=y.g,r=g,q=0;q<t;++q){p=d.x
o=(p===$?d.x=B.a([],s):p)[q]
n=A.am0(o,x,!0,e)
m=r==null
if(!m)r.mN(n)
if(m)r=n
m=o.a
l=m==null
k=l?g:m.b
j=(k==null?0:k)/x
if((l?g:m.gez())!=null)for(i=0;i<x;++i){h=D.d.D(i*j)
for(u=0;u<e;++u){m=w[u]
l=o.a
if(l==null)m=g
else{m=l.ng(m,h)
m=D.d.D(m.gdU(m))}if(m==null)m=0
l=n.a
if(l!=null)l.m0(u,i,m)}}else for(i=0;i<x;++i){h=D.d.D(i*j)
for(u=0;u<e;++u){m=w[u]
l=o.a
m=l==null?g:l.e1(m,h,g)
n.wW(u,i,m==null?new A.eX():m)}}}r.toString
return r},
aP3(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=D.c.al(a8,360)
a7.gqE()
if(D.c.al(a6,90)===0)switch(D.c.aY(a6,90)){case 1:return A.cPu(a7)
case 2:return A.cPs(a7)
case 3:return A.cPt(a7)
default:return A.Ac(a7,!1,!1)}x=a6*3.141592653589793/180
w=Math.cos(x)
v=Math.sin(x)
u=a7.gcG(0)
t=a7.gcG(0)
s=a7.gb_(0)
r=a7.gb_(0)
q=0.5*a7.gcG(0)
p=0.5*a7.gb_(0)
s=Math.abs(u*w)+Math.abs(s*v)
o=0.5*s
r=Math.abs(t*v)+Math.abs(r*w)
n=0.5*r
m=a7.gkj().length
for(u=y.g,l=a5,k=0;k<m;++k){j=a7.x
i=(j===$?a7.x=B.a([],u):j)[k]
t=l==null
h=t?a5:l.UB()
if(h==null){g=D.d.D(s)
h=A.am0(a7,D.d.D(r),!0,g)}if(t)l=h
for(t=h.a,t=t.gW(t);t.q();){f=t.gK(t)
e=f.gmt(f)
d=f.gne(f)
g=e-o
a0=d-n
a1=q+g*w+a0*v
a2=p-g*v+a0*w
g=!1
if(a1>=0)if(a2>=0){a0=i.a
a3=a0==null
a4=a3?a5:a0.a
if(a1<(a4==null?0:a4)){g=a3?a5:a0.b
g=a2<(g==null?0:g)}}if(g)h.wW(e,d,i.aDL(a1,a2,C.akT))}}l.toString
return l},
cPu(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gkj(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.O)(x),++u){t=x[u]
s=v==null
r=s?k:v.UB()
if(r==null){q=t.a
p=q==null
o=p?k:q.b
if(o==null)o=0
q=p?k:q.a
r=A.am0(t,q==null?0:q,!0,o)}if(s)v=r
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
s=s==null?k:s.e1(m,n-l,k)
r.wW(l,m,s==null?new A.eX():s);++l}++m}}v.toString
return v},
cPs(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gkj(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.O)(x),++u){t=x[u]
s=t.a
r=s==null
q=r?k:s.a
p=(q==null?0:q)-1
s=r?k:s.b
o=(s==null?0:s)-1
s=v==null
n=s?k:v.UB()
if(n==null)n=A.Ac(t,!0,!0)
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
r=r==null?k:r.e1(p-l,s,k)
n.wW(l,m,r==null?new A.eX():r);++l}++m}}v.toString
return v},
cPt(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gkj(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.O)(x),++u){t=x[u]
s=d.a
s=s==null?k:s.a
r=(s==null?0:s)-1
s=v==null
q=s?k:v.UB()
if(q==null){p=t.a
o=p==null
n=o?k:p.b
if(n==null)n=0
p=o?k:p.a
q=A.am0(t,p==null?0:p,!0,n)}if(s)v=q
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
p=p==null?k:p.e1(s,l,k)
q.wW(l,m,p==null?new A.eX():p);++l}++m}}v.toString
return v},
c2S(d){var x
d=(d&-d)>>>0
x=d!==0?31:32
if((d&65535)!==0)x-=16
if((d&16711935)!==0)x-=8
if((d&252645135)!==0)x-=4
if((d&858993459)!==0)x-=2
return(d&1431655765)!==0?x-1:x},
cVM(d){$.ccj().n(0,0,d)
return $.cta().i(0,0)},
cpT(d,e,f,g){return(D.c.bg(d,0,255)|D.c.bg(e,0,255)<<8|D.c.bg(f,0,255)<<16|D.c.bg(g,0,255)<<24)>>>0},
tP(d,e,f){var x,w,v,u,t,s=e.gt(e),r=e.gd8(),q=d.gez(),p=q==null?null:q.gd8()
if(p==null)p=d.gd8()
x=d.gt(d)
if(s===1){w=d.gt(d)>2?d.gjc():d.i(0,0)
e.n(0,0,A.aP2(B.hh(d.i(0,0))?D.d.ft(w):w,p,r))}else if(s<=x)for(v=0;v<s;++v)e.n(0,v,A.aP2(d.i(0,v),p,r))
else if(x===2){u=A.aP2(d.i(0,0),p,r)
if(s===3){e.n(0,0,u)
e.n(0,1,u)
e.n(0,2,u)}else{f=A.aP2(d.i(0,1),p,r)
e.n(0,0,u)
e.n(0,1,u)
e.n(0,2,u)
e.n(0,3,f)}}else{for(v=0;v<x;++v)e.n(0,v,A.aP2(d.i(0,v),p,r))
t=x===1?e.i(0,0):0
for(v=x;v<s;++v)e.n(0,v,v===3?f:t)}return e},
ou(d,e,f,g,h){var x,w,v=d.gez(),u=v==null?null:v.gd8()
if(u==null)u=d.gd8()
v=h==null
x=v?null:h.gd8()
f=x==null?f:x
if(f==null)f=d.gd8()
x=v?null:h.gt(h)
g=x==null?g:x
if(g==null)g=d.gt(d)
if(e==null)e=0
if(f===u&&g===d.gt(d)){if(v)return d.dJ(0)
h.ix(0,d)
return h}switch(f.a){case 3:if(v)w=new A.wg(new Uint8Array(g))
else w=h
return A.tP(d,w,e)
case 0:return A.tP(d,v?new A.Kw(g,0):h,e)
case 1:return A.tP(d,v?new A.Ky(g,0):h,e)
case 2:if(v){v=g<3?1:2
w=new A.KA(g,new Uint8Array(v))}else w=h
return A.tP(d,w,e)
case 4:if(v)w=new A.Kx(new Uint16Array(g))
else w=h
return A.tP(d,w,e)
case 5:if(v)w=new A.Kz(new Uint32Array(g))
else w=h
return A.tP(d,w,e)
case 6:if(v)w=new A.Kt(new Int8Array(g))
else w=h
return A.tP(d,w,e)
case 7:if(v)w=new A.Kr(new Int16Array(g))
else w=h
return A.tP(d,w,e)
case 8:if(v)w=new A.Ks(new Int32Array(g))
else w=h
return A.tP(d,w,e)
case 9:if(v)w=new A.Ko(new Uint16Array(g))
else w=h
return A.tP(d,w,e)
case 10:if(v)w=new A.Kp(new Float32Array(g))
else w=h
return A.tP(d,w,e)
case 11:if(v)w=new A.Kq(new Float64Array(g))
else w=h
return A.tP(d,w,e)}},
iO(d){return 0.299*d.gaD(d)+0.587*d.gaK()+0.114*d.gaM(d)},
coD(d,e,f,g){var x=1-g/255
return B.a([D.d.ab(255*(1-d/255)*x),D.d.ab(255*(1-e/255)*x),D.d.ab(255*(1-f/255)*x)],y.t)},
fq(d){var x,w,v
$.cci()[0]=d
x=$.ct9()[0]
if(d===0)return x>>>16
if($.h7==null)A.hT()
w=$.cfV.cJ()[x>>>23&511]
if(w!==0){v=x&8388607
return w+(v+4095+(v>>>13&1)>>>13)}return A.cAD(x)},
cAD(d){var x,w,v=d>>>16&32768,u=(d>>>23&255)-112,t=d&8388607
if(u<=0){if(u<-10)return v
t|=8388608
x=14-u
return(v|D.c.nj(t+(D.c.ev(1,x-1)-1)+(D.c.fC(t,x)&1),x))>>>0}else if(u===143)if(t===0)return v|31744
else{t=t>>>13
w=t===0?1:0
return v|t|w|31744}else{t=t+4095+(t>>>13&1)
if((t&8388608)!==0){++u
t=0}if(u>30)return v|31744
return(v|u<<10|t>>>13)>>>0}},
hT(){var x,w,v,u,t=$.h7
if(t!=null)return t
x=new Uint32Array(65536)
$.h7=B.bgT(x.buffer,0,null)
t=new Uint16Array(512)
$.cfV.b=t
for(w=0;w<256;++w){v=(w&255)-112
if(v<=0||v>=30){t[w]=0
t[(w|256)>>>0]=0}else{u=v<<10>>>0
t[w]=u
t[(w|256)>>>0]=(u|32768)>>>0}}for(w=0;w<65536;++w)x[w]=A.cAE(w)
t=$.h7
t.toString
return t},
cAE(d){var x,w=d>>>15&1,v=d>>>10&31,u=d&1023
if(v===0)if(u===0)return w<<31>>>0
else{for(;(u&1024)===0;){u=u<<1;--v}++v
u&=4294966271}else if(v===31){x=w<<31
if(u===0)return(x|2139095040)>>>0
else return(x|u<<13|2139095040)>>>0}return(w<<31|v+112<<23|u<<13)>>>0}},C,P,Q,R,K,G,S,T,U,H
J=c[1]
B=c[0]
D=c[2]
L=c[190]
F=c[118]
M=c[127]
N=c[58]
O=c[160]
E=c[49]
I=c[71]
A=a.updateHolder(c[11],A)
C=c[231]
P=c[225]
Q=c[189]
R=c[192]
K=c[177]
G=c[161]
S=c[139]
T=c[131]
U=c[149]
H=c[167]
A.adO.prototype={}
A.b9S.prototype={}
A.b9R.prototype={
gt(d){var x=this.e
x===$&&B.b()
return x-(this.b-this.c)},
gNd(){var x=this.b,w=this.e
w===$&&B.b()
return x>=this.c+w},
i(d,e){return this.a[this.b+e]},
dG(d,e){var x,w,v,u=this
for(x=u.b,w=x+u.gt(0),v=u.a;x<w;++x)if(J.n(v[x],e))return x-u.c
return-1},
cW(){return this.a[this.b++]},
kq(d){var x,w,v,u=this,t=u.c,s=u.b-t+t
if(d<0){x=u.e
x===$&&B.b()
w=x-(s-t)}else w=d
v=A.Ao(u.a,u.d,w,s)
u.b=u.b+v.gt(0)
return v},
ai(){var x,w,v,u=this,t=u.a,s=u.b,r=u.b=s+1,q=t[s]&255
s=u.b=r+1
x=t[r]&255
r=u.b=s+1
w=t[s]&255
u.b=r+1
v=t[r]&255
if(u.d===1)return(q<<24|x<<16|w<<8|v)>>>0
return(v<<24|w<<16|x<<8|q)>>>0},
hp(){var x,w,v,u,t=this,s=t.gt(0),r=t.a
if(y.D.b(r)){x=t.b
w=r.length
if(x+s>w)s=w-x
return B.bX(r.buffer,r.byteOffset+x,s)}x=t.b
v=x+s
u=r.length
return new Uint8Array(B.bD(J.aPY(r,x,v>u?u:v)))}}
A.bhT.prototype={}
A.bhS.prototype={
aS(d){var x=this
if(x.a===x.c.length)x.b8Z()
x.c[x.a++]=d&255},
Zw(d,e){var x,w,v,u,t,s=this
if(e==null)e=d.length
for(;x=s.a,w=x+e,v=s.c,u=v.length,w>u;)s.a3o(w-u)
if(e===1)v[x]=d[0]
else if(e===2){v[x]=d[0]
v[x+1]=d[1]}else if(e===3){v[x]=d[0]
v[x+1]=d[1]
v[x+2]=d[2]}else if(e===4){v[x]=d[0]
v[x+1]=d[1]
v[x+2]=d[2]
v[x+3]=d[3]}else if(e===5){v[x]=d[0]
v[x+1]=d[1]
v[x+2]=d[2]
v[x+3]=d[3]
v[x+4]=d[4]}else if(e===6){v[x]=d[0]
v[x+1]=d[1]
v[x+2]=d[2]
v[x+3]=d[3]
v[x+4]=d[4]
v[x+5]=d[5]}else if(e===7){v[x]=d[0]
v[x+1]=d[1]
v[x+2]=d[2]
v[x+3]=d[3]
v[x+4]=d[4]
v[x+5]=d[5]
v[x+6]=d[6]}else if(e===8){v[x]=d[0]
v[x+1]=d[1]
v[x+2]=d[2]
v[x+3]=d[3]
v[x+4]=d[4]
v[x+5]=d[5]
v[x+6]=d[6]
v[x+7]=d[7]}else if(e===9){v[x]=d[0]
v[x+1]=d[1]
v[x+2]=d[2]
v[x+3]=d[3]
v[x+4]=d[4]
v[x+5]=d[5]
v[x+6]=d[6]
v[x+7]=d[7]
v[x+8]=d[8]}else if(e===10){v[x]=d[0]
v[x+1]=d[1]
v[x+2]=d[2]
v[x+3]=d[3]
v[x+4]=d[4]
v[x+5]=d[5]
v[x+6]=d[6]
v[x+7]=d[7]
v[x+8]=d[8]
v[x+9]=d[9]}else for(t=0;t<e;++t,++x)v[x]=d[t]
s.a=w},
m_(d){return this.Zw(d,null)},
bEp(d){var x,w,v,u,t=this,s=d.c
while(!0){x=t.a
w=d.e
w===$&&B.b()
w=x+(w-(d.b-s))
v=t.c
u=v.length
if(!(w>u))break
t.a3o(w-u)}D.aa.dz(v,x,x+d.gt(0),d.a,d.b)
t.a=t.a+d.gt(0)},
hW(d){var x=this
if(x.b===1){x.aS(d>>>24&255)
x.aS(d>>>16&255)
x.aS(d>>>8&255)
x.aS(d&255)
return}x.aS(d&255)
x.aS(d>>>8&255)
x.aS(d>>>16&255)
x.aS(d>>>24&255)},
adJ(d,e){var x=this
if(d<0)d=x.a+d
if(e==null)e=x.a
else if(e<0)e=x.a+e
return B.bX(x.c.buffer,d,e-d)},
jj(d){return this.adJ(d,null)},
a3o(d){var x=d!=null?d>32768?d:32768:32768,w=this.c,v=w.length,u=new Uint8Array((v+x)*2)
D.aa.h7(u,0,v,w)
this.c=u},
b8Z(){return this.a3o(null)},
gt(d){return this.a}}
A.c0s.prototype={
Bl(d,e){var x,w,v,u,t=d.cW(),s=d.cW(),r=t&8
D.c.O(t,3)
if(r!==8)throw B.e(A.T_("Only DEFLATE compression supported: "+r))
if(D.c.al((t<<8>>>0)+s,31)!==0)throw B.e(A.T_("Invalid FCHECK"))
if((s>>>5&1)!==0){d.ai()
throw B.e(A.T_("FDICT Encoding not currently supported"))}x=A.alO(C.az9)
w=A.alO(C.ays)
v=A.c7T(0,null)
w=new A.b9v(d,v,x,w)
w.b=!0
w.b40()
u=y.L.a(B.bX(v.c.buffer,0,v.a))
d.ai()
return u}}
A.aZy.prototype={
aUt(d){var x,w,v,u,t=this
if(d>4)throw B.e(A.T_("Invalid Deflate Parameter"))
x=t.x
x===$&&B.b()
if(x!==0)t.Rf()
x=!0
if(t.c.gNd()){w=t.k3
w===$&&B.b()
if(w===0)x=d!==0&&t.e!==666}if(x){switch($.ud.cJ().e){case 0:v=t.aUw(d)
break
case 1:v=t.aUu(d)
break
case 2:v=t.aUv(d)
break
default:v=-1
break}x=v===2
if(x||v===3)t.e=666
if(v===0||x)return 0
if(v===1){if(d===1){t.kW(2,3)
t.EP(256,C.rs)
t.asu()
x=t.cT
x===$&&B.b()
w=t.T
w===$&&B.b()
if(1+x+10-w<9){t.kW(2,3)
t.EP(256,C.rs)
t.asu()}t.cT=7}else{t.aq3(0,0,!1)
if(d===3){x=t.db
x===$&&B.b()
w=t.cx
u=0
for(;u<x;++u){w===$&&B.b()
w[u]=0}}}t.Rf()}}if(d!==4)return 0
return 1},
b5e(){var x,w,v=this,u=v.as
u===$&&B.b()
v.ch=2*u
u=v.cx
u===$&&B.b()
x=v.db
x===$&&B.b();--x
u[x]=0
for(w=0;w<x;++w)u[w]=0
v.k3=v.fx=v.k1=0
v.fy=v.k4=2
v.cy=v.id=0},
akH(){var x,w,v,u=this
for(x=u.p2,w=0;w<286;++w){x===$&&B.b()
x[w*2]=0}for(v=u.p3,w=0;w<30;++w){v===$&&B.b()
v[w*2]=0}for(v=u.p4,w=0;w<19;++w){v===$&&B.b()
v[w*2]=0}x===$&&B.b()
x[512]=1
u.bO=u.c5=u.ad=u.b8=0},
a3G(d,e){var x,w,v=this.to,u=v[e],t=e<<1>>>0,s=this.xr
while(!0){x=this.x1
x===$&&B.b()
if(!(t<=x))break
if(t<x&&A.ceT(d,v[t+1],v[t],s))++t
if(A.ceT(d,u,v[t],s))break
v[e]=v[t]
w=t<<1>>>0
e=t
t=w}v[e]=u},
ao2(d,e){var x,w,v,u,t,s,r,q,p,o=d[1]
if(o===0){x=138
w=3}else{x=7
w=4}d[(e+1)*2+1]=65535
for(v=this.p4,u=0,t=-1,s=0;u<=e;o=r){++u
r=d[u*2+1];++s
if(s<x&&o===r)continue
else{q=3
if(s<w){v===$&&B.b()
p=o*2
v[p]=v[p]+s}else if(o!==0){if(o!==t){v===$&&B.b()
p=o*2
v[p]=v[p]+1}v===$&&B.b()
v[32]=v[32]+1}else if(s<=10){v===$&&B.b()
v[34]=v[34]+1}else{v===$&&B.b()
v[36]=v[36]+1}}if(r===0){w=q
x=138}else if(o===r){w=q
x=6}else{x=7
w=4}t=o
s=0}},
aQS(){var x,w,v=this,u=v.p2
u===$&&B.b()
x=v.R8.b
x===$&&B.b()
v.ao2(u,x)
x=v.p3
x===$&&B.b()
u=v.RG.b
u===$&&B.b()
v.ao2(x,u)
v.rx.a0L(v)
for(u=v.p4,w=18;w>=3;--w){u===$&&B.b()
if(u[C.ze[w]*2+1]!==0)break}u=v.ad
u===$&&B.b()
v.ad=u+(3*(w+1)+5+5+4)
return w},
bek(d,e,f){var x,w,v,u=this
u.kW(d-257,5)
x=e-1
u.kW(x,5)
u.kW(f-4,4)
for(w=0;w<f;++w){v=u.p4
v===$&&B.b()
u.kW(v[C.ze[w]*2+1],3)}v=u.p2
v===$&&B.b()
u.aoB(v,d-1)
v=u.p3
v===$&&B.b()
u.aoB(v,x)},
aoB(d,e){var x,w,v,u,t,s,r,q,p,o,n=this,m=d[1]
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
n.kW(o[q]&65535,o[p]&65535)}while(--t,t!==0)}else if(m!==0){if(m!==u){q=n.p4
q===$&&B.b()
p=m*2
n.kW(q[p]&65535,q[p+1]&65535);--t}q=n.p4
q===$&&B.b()
n.kW(q[32]&65535,q[33]&65535)
n.kW(t-3,2)}else{q=n.p4
if(t<=10){q===$&&B.b()
n.kW(q[34]&65535,q[35]&65535)
n.kW(t-3,3)}else{q===$&&B.b()
n.kW(q[36]&65535,q[37]&65535)
n.kW(t-11,7)}}}if(s===0){w=r
x=138}else if(m===s){w=r
x=6}else{x=7
w=4}u=m
t=0}},
bbD(d,e,f){var x,w,v,u
if(f===0)return
x=this.x
x===$&&B.b()
w=this.f
v=x
u=0
for(;u<f;++u,++v){w===$&&B.b()
w[v]=d[u+e]}this.x=x+f},
pZ(d){var x,w=this.f
w===$&&B.b()
x=this.x
x===$&&B.b()
this.x=x+1
w[x]=d},
EP(d,e){var x=d*2
this.kW(e[x]&65535,e[x+1]&65535)},
kW(d,e){var x,w=this,v=w.T
v===$&&B.b()
x=w.C
if(v>16-e){x===$&&B.b()
v=w.C=(x|D.c.ev(d,v)&65535)>>>0
w.pZ(v)
w.pZ(A.ot(v,8))
w.C=A.ot(d,16-w.T)
w.T=w.T+(e-16)}else{x===$&&B.b()
w.C=(x|D.c.ev(d,v)&65535)>>>0
w.T=v+e}},
KJ(d,e){var x,w,v,u,t,s=this,r=s.f
r===$&&B.b()
x=s.bd
x===$&&B.b()
w=s.bO
w===$&&B.b()
r[x+w*2]=A.ot(d,8)
w=s.f
x=s.bd
r=s.bO
w[x+r*2+1]=d
x=s.y1
x===$&&B.b()
w[x+r]=e
s.bO=r+1
if(d===0){r=s.p2
r===$&&B.b()
x=e*2
r[x]=r[x]+1}else{r=s.c5
r===$&&B.b()
s.c5=r+1
r=s.p2
r===$&&B.b()
x=(C.Jw[e]+256+1)*2
r[x]=r[x]+1
x=s.p3
x===$&&B.b()
r=A.clV(d-1)*2
x[r]=x[r]+1}r=s.bO
if((r&8191)===0){x=s.ok
x===$&&B.b()
x=x>2}else x=!1
if(x){v=r*8
r=s.k1
r===$&&B.b()
x=s.fx
x===$&&B.b()
for(w=s.p3,u=0;u<30;++u){w===$&&B.b()
v+=w[u*2]*(5+C.tr[u])}v=A.ot(v,3)
w=s.c5
w===$&&B.b()
t=s.bO
if(w<t/2&&v<(r-x)/2)return!0
r=t}x=s.y2
x===$&&B.b()
return r===x-1},
agO(d,e){var x,w,v,u,t,s,r=this,q=r.bO
q===$&&B.b()
if(q!==0){x=0
do{q=r.f
q===$&&B.b()
w=r.bd
w===$&&B.b()
w+=x*2
v=q[w]<<8&65280|q[w+1]&255
w=r.y1
w===$&&B.b()
u=q[w+x]&255;++x
if(v===0)r.EP(u,d)
else{t=C.Jw[u]
r.EP(t+256+1,d)
s=C.OD[t]
if(s!==0)r.kW(u-C.ayB[t],s);--v
t=A.clV(v)
r.EP(t,e)
s=C.tr[t]
if(s!==0)r.kW(v-C.ayr[t],s)}}while(x<r.bO)}r.EP(256,d)
r.cT=d[513]},
aFD(){var x,w,v,u
for(x=this.p2,w=0,v=0;w<7;){x===$&&B.b()
v+=x[w*2];++w}for(u=0;w<128;){x===$&&B.b()
u+=x[w*2];++w}for(;w<256;){x===$&&B.b()
v+=x[w*2];++w}this.y=v>A.ot(u,2)?0:1},
asu(){var x=this,w=x.T
w===$&&B.b()
if(w===16){w=x.C
w===$&&B.b()
x.pZ(w)
x.pZ(A.ot(w,8))
x.T=x.C=0}else if(w>=8){w=x.C
w===$&&B.b()
x.pZ(w)
x.C=A.ot(x.C,8)
x.T=x.T-8}},
afE(){var x=this,w=x.T
w===$&&B.b()
if(w>8){w=x.C
w===$&&B.b()
x.pZ(w)
x.pZ(A.ot(w,8))}else if(w>0){w=x.C
w===$&&B.b()
x.pZ(w)}x.T=x.C=0},
xp(d){var x,w,v,u,t,s=this,r=s.fx
r===$&&B.b()
if(r>=0)x=r
else x=-1
w=s.k1
w===$&&B.b()
r=w-r
w=s.ok
w===$&&B.b()
if(w>0){if(s.y===2)s.aFD()
s.R8.a0L(s)
s.RG.a0L(s)
v=s.aQS()
w=s.ad
w===$&&B.b()
u=A.ot(w+3+7,3)
w=s.b8
w===$&&B.b()
t=A.ot(w+3+7,3)
if(t<=u)u=t}else{t=r+5
u=t
v=0}if(r+4<=u&&x!==-1)s.aq3(x,r,d)
else if(t===u){s.kW(2+(d?1:0),3)
s.agO(C.rs,C.J8)}else{s.kW(4+(d?1:0),3)
r=s.R8.b
r===$&&B.b()
x=s.RG.b
x===$&&B.b()
s.bek(r+1,x+1,v+1)
x=s.p2
x===$&&B.b()
r=s.p3
r===$&&B.b()
s.agO(x,r)}s.akH()
if(d)s.afE()
s.fx=s.k1
s.Rf()},
aUw(d){var x,w,v,u,t,s=this,r=s.r
r===$&&B.b()
x=r-5
x=65535>x?x:65535
for(r=d===0;!0;){w=s.k3
w===$&&B.b()
if(w<=1){s.a1K()
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
s.xp(!1)}w=s.k1
v=s.fx
t=s.as
t===$&&B.b()
if(w-v>=t-262)s.xp(!1)}r=d===4
s.xp(r)
return r?3:1},
aq3(d,e,f){var x,w=this
w.kW(f?1:0,3)
w.afE()
w.cT=8
w.pZ(e)
w.pZ(A.ot(e,8))
x=(~e>>>0)+65536&65535
w.pZ(x)
w.pZ(A.ot(x,8))
x=w.ay
x===$&&B.b()
w.bbD(x,d,e)},
a1K(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.c
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
D.aa.dz(w,0,x,w,x)
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
s=x
r=s
do{--s
q=w[s]&65535
w[s]=q>=t?q-t:0}while(--r,r!==0)
x=n.CW
x===$&&B.b()
s=t
r=s
do{--s
q=x[s]&65535
x[s]=q>=t?q-t:0}while(--r,r!==0)
u+=t}}if(m.gNd())return
x=n.ay
x===$&&B.b()
r=n.bbN(x,n.k1+n.k3,u)
x=n.k3=n.k3+r
if(x>=3){w=n.ay
v=n.k1
p=w[v]&255
n.cy=p
o=n.fr
o===$&&B.b()
o=D.c.ev(p,o)
v=w[v+1]
w=n.dy
w===$&&B.b()
n.cy=((o^v&255)&w)>>>0}}while(x<262&&!m.gNd())},
aUu(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
for(x=d===0,w=$.ud.a,v=0;!0;){u=m.k3
u===$&&B.b()
if(u<262){m.a1K()
u=m.k3
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=m.cy
u===$&&B.b()
t=m.fr
t===$&&B.b()
t=D.c.ev(u,t)
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
q[(s&p)>>>0]=t
u[r]=s}if(v!==0){u=m.k1
u===$&&B.b()
t=m.as
t===$&&B.b()
t=(u-v&65535)<=t-262
u=t}else u=!1
if(u){u=m.p1
u===$&&B.b()
if(u!==2)m.fy=m.alx(v)}u=m.fy
u===$&&B.b()
t=m.k1
if(u>=3){t===$&&B.b()
o=m.KJ(t-m.k2,u-3)
u=m.k3
t=m.fy
u-=t
m.k3=u
s=$.ud.b
if(s===$.ud)B.Y(B.uD(w))
if(t<=s.b&&u>=3){u=m.fy=t-1
do{t=m.k1=m.k1+1
s=m.cy
s===$&&B.b()
r=m.fr
r===$&&B.b()
r=D.c.ev(s,r)
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
p[(t&n)>>>0]=r
s[q]=t}while(u=m.fy=u-1,u!==0)
m.k1=t+1}else{u=m.k1=m.k1+t
m.fy=0
t=m.ay
t===$&&B.b()
s=t[u]&255
m.cy=s
r=m.fr
r===$&&B.b()
r=D.c.ev(s,r)
u=t[u+1]
t=m.dy
t===$&&B.b()
m.cy=((r^u&255)&t)>>>0}}else{u=m.ay
u===$&&B.b()
t===$&&B.b()
o=m.KJ(0,u[t]&255)
m.k3=m.k3-1
m.k1=m.k1+1}if(o)m.xp(!1)}x=d===4
m.xp(x)
return x?3:1},
aUv(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
for(x=d===0,w=$.ud.a,v=0;!0;){u=l.k3
u===$&&B.b()
if(u<262){l.a1K()
u=l.k3
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=l.cy
u===$&&B.b()
t=l.fr
t===$&&B.b()
t=D.c.ev(u,t)
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
q[(s&p)>>>0]=t
u[r]=s}u=l.fy
u===$&&B.b()
l.k4=u
l.go=l.k2
l.fy=2
t=!1
if(v!==0){s=$.ud.b
if(s===$.ud)B.Y(B.uD(w))
if(u<s.b){u=l.k1
u===$&&B.b()
t=l.as
t===$&&B.b()
t=(u-v&65535)<=t-262
u=t}else u=t}else u=t
t=2
if(u){u=l.p1
u===$&&B.b()
if(u!==2){u=l.alx(v)
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
n=l.KJ(u-1-l.go,t-3)
t=l.k3
u=l.k4
l.k3=t-(u-1)
u=l.k4=u-2
do{t=l.k1=l.k1+1
if(t<=o){s=l.cy
s===$&&B.b()
r=l.fr
r===$&&B.b()
r=D.c.ev(s,r)
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
p[(t&m)>>>0]=r
s[q]=t}}while(u=l.k4=u-1,u!==0)
l.id=0
l.fy=2
l.k1=t+1
if(n)l.xp(!1)}else{u=l.id
u===$&&B.b()
if(u!==0){u=l.ay
u===$&&B.b()
t=l.k1
t===$&&B.b()
if(l.KJ(0,u[t-1]&255))l.xp(!1)
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
l.KJ(0,x[w-1]&255)
l.id=0}x=d===4
l.xp(x)
return x?3:1},
alx(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=$.ud.cJ().d,h=j.k1
h===$&&B.b()
x=j.k4
x===$&&B.b()
w=j.as
w===$&&B.b()
w-=262
v=h>w?h-w:0
u=$.ud.cJ().c
w=j.ax
w===$&&B.b()
t=j.k1+258
s=j.ay
s===$&&B.b()
r=h+x
q=s[r-1]
p=s[r]
if(j.k4>=$.ud.cJ().a)i=i>>>2
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
bbN(d,e,f){var x,w,v,u,t=this
if(f===0||t.c.gNd())return 0
x=t.c.kq(f)
w=x.gt(0)
if(w===0)return 0
v=x.hp()
u=v.length
if(w>u)w=u
D.aa.h7(d,e,e+w,v)
t.b+=w
t.a=A.vO(v,t.a)
return w},
Rf(){var x,w=this,v=w.x
v===$&&B.b()
x=w.f
x===$&&B.b()
w.d.Zw(x,v)
x=w.w
x===$&&B.b()
w.w=x+v
v=w.x-v
w.x=v
if(v===0)w.w=0},
aXB(d){switch(d){case 0:return new A.qV(0,0,0,0,0)
case 1:return new A.qV(4,4,8,4,1)
case 2:return new A.qV(4,5,16,8,1)
case 3:return new A.qV(4,6,32,32,1)
case 4:return new A.qV(4,4,16,16,2)
case 5:return new A.qV(8,16,32,32,2)
case 6:return new A.qV(8,16,128,128,2)
case 7:return new A.qV(8,32,128,256,2)
case 8:return new A.qV(32,128,258,1024,2)
case 9:return new A.qV(32,258,258,4096,2)}throw B.e(A.T_("Invalid Deflate parameter"))}}
A.qV.prototype={}
A.bM0.prototype={
aXk(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a
e===$&&B.b()
x=f.c
x===$&&B.b()
w=x.a
v=x.b
u=x.c
t=x.e
for(x=d.ry,s=0;s<=15;++s)x[s]=0
r=d.to
q=d.x2
q===$&&B.b()
e[r[q]*2+1]=0
for(p=q+1,q=w!=null,o=0;p<573;++p){n=r[p]
m=n*2
l=m+1
s=e[e[l]*2+1]+1
if(s>t){++o
s=t}e[l]=s
k=f.b
k===$&&B.b()
if(n>k)continue
x[s]=x[s]+1
j=n>=u?v[n-u]:0
i=e[m]
m=d.ad
m===$&&B.b()
d.ad=m+i*(s+j)
if(q){m=d.b8
m===$&&B.b()
d.b8=m+i*(w[l]+j)}}if(o===0)return
s=t-1
do{for(h=s;q=x[h],q===0;)--h
x[h]=q-1
q=h+1
x[q]=x[q]+2
x[t]=x[t]-1
o-=2}while(o>0)
for(s=t;s!==0;--s){n=x[s]
for(;n!==0;){--p
g=r[p]
q=f.b
q===$&&B.b()
if(g>q)continue
q=g*2
m=q+1
l=e[m]
if(l!==s){k=d.ad
k===$&&B.b()
d.ad=k+(s-l)*e[q]
e[m]=s}--n}}},
a0L(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.a
j===$&&B.b()
x=k.c
x===$&&B.b()
w=x.a
v=x.d
d.x1=0
d.x2=573
for(x=d.to,u=d.xr,t=0,s=-1;t<v;++t){r=t*2
if(j[r]!==0){x[++d.x1]=t
u[t]=0
s=t}else j[r+1]=0}for(r=w!=null;q=d.x1,q<2;){++q
d.x1=q
if(s<2){++s
p=s}else p=0
x[q]=p
q=p*2
j[q]=1
u[p]=0
o=d.ad
o===$&&B.b()
d.ad=o-1
if(r){o=d.b8
o===$&&B.b()
d.b8=o-w[q+1]}}k.b=s
for(t=D.c.aY(q,2);t>=1;--t)d.a3G(j,t)
p=v
do{t=x[1]
x[1]=x[d.x1--]
d.a3G(j,1)
n=x[1]
r=--d.x2
x[r]=t;--r
d.x2=r
x[r]=n
r=t*2
q=n*2
j[p*2]=j[r]+j[q]
o=u[t]
m=u[n]
u[p]=(o>m?o:m)+1
j[q+1]=p
j[r+1]=p
l=p+1
x[1]=p
d.a3G(j,1)
if(d.x1>=2){p=l
continue}else break}while(!0)
x[--d.x2]=x[1]
k.aXk(d)
A.cKO(j,s,d.ry)}}
A.bWh.prototype={}
A.b8i.prototype={
aOq(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=d.length
for(x=0;x<l;++x){w=d[x]
if(w>m.b)m.b=w
if(w<m.c)m.c=w}v=D.c.ev(1,m.b)
m.a=new Uint32Array(v)
for(u=1,t=0,s=2;u<=m.b;){for(w=u<<16,x=0;x<l;++x)if(J.n(d[x],u)){for(r=t,q=0,p=0;p<u;++p){q=(q<<1|r&1)>>>0
r=r>>>1}for(o=m.a,n=(w|x)>>>0,p=q;p<v;p+=s)o[p]=n;++t}++u
t=t<<1>>>0
s=s<<1>>>0}}}
A.b9v.prototype={
b40(){var x,w,v,u,t=this
t.e=t.d=0
if(!t.b)return
x=t.a
x===$&&B.b()
w=x.c
while(!0){v=x.b
u=x.e
u===$&&B.b()
if(!(v<w+u))break
if(!t.b9o())break}},
b9o(){var x,w=this,v=w.a
v===$&&B.b()
if(v.gNd())return!1
x=w.q_(3)
switch(D.c.O(x,1)){case 0:if(w.b9I()===-1)return!1
break
case 1:if(w.ahi(w.r,w.w)===-1)return!1
break
case 2:if(w.b9s()===-1)return!1
break
default:return!1}return(x&1)===0},
q_(d){var x,w,v,u,t=this
if(d===0)return 0
for(x=t.a;w=t.e,w<d;){x===$&&B.b()
v=x.b
u=x.e
u===$&&B.b()
if(v>=x.c+u)return-1
x.b=v+1
v=x.a[v]
t.d=(t.d|D.c.ev(v,w))>>>0
t.e=w+8}x=t.d
v=D.c.ef(1,d)
t.d=D.c.hh(x,d)
t.e=w-d
return(x&v-1)>>>0},
a3O(d){var x,w,v,u,t,s,r,q=this,p=d.a
p===$&&B.b()
x=d.b
for(w=q.a;v=q.e,v<x;){w===$&&B.b()
u=w.b
t=w.e
t===$&&B.b()
if(u>=w.c+t)return-1
w.b=u+1
u=w.a[u]
q.d=(q.d|D.c.ev(u,v))>>>0
q.e=v+8}w=q.d
s=p[(w&D.c.ev(1,x)-1)>>>0]
r=s>>>16
q.d=D.c.hh(w,r)
q.e=v-r
return s&65535},
b9I(){var x,w,v=this
v.e=v.d=0
x=v.q_(16)
w=v.q_(16)
if(x!==0&&x!==(w^65535)>>>0)return-1
w=v.a
w===$&&B.b()
if(x>w.gt(0))return-1
v.c.bEp(w.kq(x))
return 0},
b9s(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.q_(5)
if(m===-1)return-1
m+=257
if(m>288)return-1
x=n.q_(5)
if(x===-1)return-1;++x
if(x>32)return-1
w=n.q_(4)
if(w===-1)return-1
w+=4
if(w>19)return-1
v=new Uint8Array(19)
for(u=0;u<w;++u){t=n.q_(3)
if(t===-1)return-1
v[C.ze[u]]=t}s=A.alO(v)
r=m+x
q=new Uint8Array(r)
p=B.bX(q.buffer,0,m)
o=B.bX(q.buffer,m,x)
if(n.aTC(r,s,q)===-1)return-1
return n.ahi(A.alO(p),A.alO(o))},
ahi(d,e){var x,w,v,u,t,s,r,q=this
for(x=q.c;!0;){w=q.a3O(d)
if(w<0||w>285)return-1
if(w===256)break
if(w<256){x.aS(w&255)
continue}v=w-257
u=C.ayC[v]+q.q_(C.as9[v])
t=q.a3O(e)
if(t<0||t>29)return-1
s=C.aw4[t]+q.q_(C.tr[t])
for(r=-s;u>s;){x.m_(x.jj(r))
u-=s}if(u===s)x.m_(x.jj(r))
else x.m_(x.adJ(r,u-s))}for(x=q.a;r=q.e,r>=8;){q.e=r-8
x===$&&B.b()
if(--x.b<0)x.b=0}return 0},
aTC(d,e,f){var x,w,v,u,t,s,r,q=this
for(x=0,w=0;w<d;){v=q.a3O(e)
if(v===-1)return-1
u=0
switch(v){case 16:t=q.q_(2)
if(t===-1)return-1
t+=3
for(;s=t-1,t>0;t=s,w=r){r=w+1
f[w]=x}break
case 17:t=q.q_(3)
if(t===-1)return-1
t+=3
for(;s=t-1,t>0;t=s,w=r){r=w+1
f[w]=0}x=u
break
case 18:t=q.q_(7)
if(t===-1)return-1
t+=11
for(;s=t-1,t>0;t=s,w=r){r=w+1
f[w]=0}x=u
break
default:if(v<0||v>15)return-1
r=w+1
f[w]=v
w=r
x=v
break}}return 0}}
A.bAU.prototype={}
A.bAT.prototype={}
A.bAV.prototype={
avu(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=A.c7T(1,32768)
m.aS(120)
for(x=0;w=(x|0)>>>0,(30720+w)%31!==0;)++x
m.aS(w)
v=A.cTf(d)
u=A.Ao(d,1,null,0)
w=A.c9G()
t=A.c9G()
s=A.c9G()
r=new Uint16Array(16)
q=new Uint32Array(573)
p=new Uint8Array(573)
o=A.c7T(0,32768)
r=new A.aZy(u,o,w,t,s,r,q,p)
if(e==null||e===-1)e=6
q=!0
q=e>9
if(q)B.Y(A.T_("Invalid Deflate parameter"))
$.ud.b=r.aXB(e)
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
r.bd=16384
r.y1=49152
r.ok=e
r.w=r.x=r.p1=0
r.e=113
r.a=0
w.a=q
w.c=$.csV()
t.a=p
t.c=$.csU()
s.a=n
s.c=$.csT()
r.T=r.C=0
r.cT=8
r.akH()
r.b5e()
r.aUt(4)
r.Rf()
m.m_(y.L.a(B.bX(o.c.buffer,0,o.a)))
m.hW(v)
w=B.bX(m.c.buffer,0,m.a)
return w},
jp(d){return this.avu(d,null)}}
A.A5.prototype={
M(){return new A.a6P(B.a([],y.s))}}
A.a6P.prototype={
X(){var x,w=this
w.ap()
x=w.a.c
if(x!=null)w.e=x.i(0,"content")
x=new E.asU()
x.aeX()
w.as=x
x.NM(new A.bLD(w))
if(w.e==null)w.K5()},
K5(){var x=0,w=B.l(y.H),v=1,u,t=this,s,r,q
var $async$K5=B.h(function(d,e){if(d===1){u=e
x=v}while(true)switch(x){case 0:t.I(new A.bLA(t))
v=3
s=t.a.c
s=s==null?null:s.i(0,"load").$0()
x=6
return B.c(y._.b(s)?s:B.cw(s,y.z),$async$K5)
case 6:s=t.e=e
x=s!=null?7:8
break
case 7:x=9
return B.c(t.rf(s),$async$K5)
case 9:case 8:v=1
x=5
break
case 3:v=2
q=u
x=5
break
case 2:x=1
break
case 5:t.I(new A.bLB(t))
return B.j(null,w)
case 1:return B.i(u,w)}})
return B.k($async$K5,w)},
m(){var x=this.as
x===$&&B.b()
x.m()
this.am()},
A(d){var x,w,v,u=this,t=null,s=y.E,r=B.a([],s)
if(!u.w&&!u.x){x=u.as
x===$&&B.b()
r.push(new B.cT(D.aS,t,t,new B.dB(new B.a7(0,820,0,1/0),E.cgm(x,""),t),t))}if(u.r)r.push(B.aL(t,D.fU,D.h,D.am,t,t,t,t,t,t,t,t,t))
if(u.x){x=B.a([],s)
if(u.y==null)D.b.H(x,B.a([G.bE(C.b0F,t)],s))
else D.b.H(x,B.a([B.aL(t,B.bk(B.a([G.bE(C.b12,t),Q.eF,N.chj(t,t,u.y),L.kJ,B.ae(""+u.z+" / "+u.Q.length,t,t,t,t,t,t,t,C.a2t,t,t,t,t,t)],s),D.k,D.l,D.ac,t,D.y),D.h,D.o,t,t,t,t,t,K.db,t,t,t)],s))
r.push(B.aL(t,B.d4(new B.ai(K.db,B.bk(x,D.k,D.l,D.ac,t,D.y),t),t,t),D.h,D.am,t,t,t,t,t,t,t,t,t))}r=B.dx(D.ah,r,D.B,D.af,t)
if(!u.w&&!u.x){x=B.P("Reset",t)
x=E.Tv(u.w?t:new A.bLC(u),x)
w=B.P("Storno",t)
w=E.Tv(u.w?t:u.gbmj(),w)
v=B.P("Save",t)
s=B.aL(t,O.eN(U.wX(B.bs(B.a([x,w,E.Tv(u.w?t:u.gaEf(),v)],s),D.k,D.l,D.n,t),t),t,D.v,t,t,t,D.a5),D.h,D.js,t,t,t,t,t,t,t,t,17976931348623157e292)}else s=t
return B.m9(!0,H.hI(t,D.o,r,s,t,t,!0),!0,D.Z,!0,!0)},
wN(){var x=0,w=B.l(y.H),v=this,u,t,s,r,q,p
var $async$wN=B.h(function(d,e){if(d===1)return B.i(e,w)
while(true)switch(x){case 0:r=v.as
r===$&&B.b()
q=E
p=E
x=2
return B.c(r.Ig(),$async$wN)
case 2:u=q.cgn(p.cgo(e))
v.I(new A.bLG(v))
r=y.z
x=3
return B.c(B.it(D.L,null,r),$async$wN)
case 3:t=A.cBE(u)
v.Q=t
x=t.length!==0?4:5
break
case 4:t=v.c
t.toString
x=8
return B.c(S.iR(null,null,!1,null,new A.bLH(),t,null,!0,!0,r),$async$wN)
case 8:x=e?6:7
break
case 6:v.I(new A.bLI(v))
x=9
return B.c(B.it(D.L,null,r),$async$wN)
case 9:r=v.Q,t=r.length,s=0
case 10:if(!(s<r.length)){x=12
break}x=13
return B.c(A.alG(u,r[s],new A.bLJ(v)),$async$wN)
case 13:u=e
case 11:r.length===t||(0,B.O)(r),++s
x=10
break
case 12:case 7:case 5:v.I(new A.bLK(v))
r=v.c
r.toString
H.h0(r,!1).f.uE(u)
return B.j(null,w)}})
return B.k($async$wN,w)},
a6i(){var x=0,w=B.l(y.H),v=this,u
var $async$a6i=B.h(function(d,e){if(d===1)return B.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
H.h0(u,!1).f.uE(null)
return B.j(null,w)}})
return B.k($async$a6i,w)},
rf(d){return this.aFS(d)},
aFS(d){var x=0,w=B.l(y.H),v=this,u
var $async$rf=B.h(function(e,f){if(e===1)return B.i(f,w)
while(true)switch(x){case 0:u=v.as
u===$&&B.b()
x=2
return B.c(u.It(d),$async$rf)
case 2:return B.j(null,w)}})
return B.k($async$rf,w)}}
A.aUv.prototype={
G(){return"Channel."+this.b}}
A.h4.prototype={
q(){var x=this.b
return++this.a<x.gt(x)},
gK(d){return this.b.i(0,this.a)},
$ibd:1}
A.Ko.prototype={
dJ(d){return new A.Ko(new Uint16Array(B.bD(this.a)))},
gd8(){return C.fZ},
gt(d){return this.a.length},
gez(){return null},
i(d,e){var x,w=this.a
if(e<w.length){w=w[e]
x=$.h7
w=(x!=null?x:A.hT())[w]}else w=0
return w},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=A.fq(f)},
gdU(d){return this.gaD(0)},
gaD(d){var x,w=this.a
if(!D.iA.gS(w)){w=w[0]
x=$.h7
w=(x!=null?x:A.hT())[w]}else w=0
return w},
gaK(){var x,w=this.a
if(w.length>1){w=w[1]
x=$.h7
w=(x!=null?x:A.hT())[w]}else w=0
return w},
gaM(d){var x,w=this.a
if(w.length>2){w=w[2]
x=$.h7
w=(x!=null?x:A.hT())[w]}else w=0
return w},
gaP(d){var x,w=this.a
if(w.length>3){w=w[3]
x=$.h7
w=(x!=null?x:A.hT())[w]}else w=0
return w},
gjc(){return A.iO(this)},
ix(d,e){var x,w=e.gaD(e),v=this.a
if(!D.iA.gS(v))v[0]=A.fq(w)
w=e.gaK()
x=v.length
if(x>1)v[1]=A.fq(w)
w=e.gaM(e)
if(x>2)v[2]=A.fq(w)
w=e.gaP(e)
if(x>3)v[3]=A.fq(w)},
gW(d){return new A.h4(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.aB(B.I(this,!0,B.q(this).h("u.E")))},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
$idt:1}
A.Kp.prototype={
dJ(d){return new A.Kp(new Float32Array(B.bD(this.a)))},
gd8(){return C.i9},
gt(d){return this.a.length},
gez(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=f},
gdU(d){var x=this.a
return!D.At.gS(x)?x[0]:0},
gaD(d){var x=this.a
return!D.At.gS(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:1},
gjc(){return A.iO(this)},
ix(d,e){var x,w=e.gaD(e),v=this.a
if(!D.At.gS(v))v[0]=w
w=e.gaK()
x=v.length
if(x>1)v[1]=w
w=e.gaM(e)
if(x>2)v[2]=w
w=e.gaP(e)
if(x>3)v[3]=w},
gW(d){return new A.h4(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.aB(B.I(this,!0,B.q(this).h("u.E")))},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
$idt:1}
A.Kq.prototype={
dJ(d){return new A.Kq(new Float64Array(B.bD(this.a)))},
gd8(){return C.jF},
gt(d){return this.a.length},
gez(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=f},
gdU(d){var x=this.a
return!D.Au.gS(x)?x[0]:0},
gaD(d){var x=this.a
return!D.Au.gS(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:1},
gjc(){return A.iO(this)},
ix(d,e){var x,w=e.gaD(e),v=this.a
if(!D.Au.gS(v))v[0]=w
w=e.gaK()
x=v.length
if(x>1)v[1]=w
w=e.gaM(e)
if(x>2)v[2]=w
w=e.gaP(e)
if(x>3)v[3]=w},
gW(d){return new A.h4(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.aB(B.I(this,!0,B.q(this).h("u.E")))},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
$idt:1}
A.Kr.prototype={
dJ(d){return new A.Kr(new Int16Array(B.bD(this.a)))},
gd8(){return C.jH},
gt(d){return this.a.length},
gez(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=D.d.D(f)},
gdU(d){var x=this.a
return!D.Av.gS(x)?x[0]:0},
gaD(d){var x=this.a
return!D.Av.gS(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:0},
gjc(){return A.iO(this)},
ix(d,e){var x,w=e.gaD(e),v=this.a
if(!D.Av.gS(v))v[0]=D.d.D(w)
w=e.gaK()
x=v.length
if(x>1)v[1]=D.d.D(w)
w=e.gaM(e)
if(x>2)v[2]=D.d.D(w)
w=e.gaP(e)
if(x>3)v[3]=D.d.D(w)},
gW(d){return new A.h4(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.aB(B.I(this,!0,B.q(this).h("u.E")))},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
$idt:1}
A.Ks.prototype={
dJ(d){return new A.Ks(new Int32Array(B.bD(this.a)))},
gd8(){return C.jI},
gt(d){return this.a.length},
gez(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=D.d.D(f)},
gdU(d){var x=this.a
return!D.f9.gS(x)?x[0]:0},
gaD(d){var x=this.a
return!D.f9.gS(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:0},
gjc(){return A.iO(this)},
ix(d,e){var x,w=e.gaD(e),v=this.a
if(!D.f9.gS(v))v[0]=B.b3(w)
w=e.gaK()
x=v.length
if(x>1)v[1]=D.d.D(w)
w=e.gaM(e)
if(x>2)v[2]=D.d.D(w)
w=e.gaP(e)
if(x>3)v[3]=D.d.D(w)},
gW(d){return new A.h4(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.aB(B.I(this,!0,B.q(this).h("u.E")))},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
$idt:1}
A.Kt.prototype={
dJ(d){return new A.Kt(new Int8Array(B.bD(this.a)))},
gd8(){return C.jG},
gt(d){return this.a.length},
gez(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=D.d.D(f)},
gdU(d){var x=this.a
return!D.Aw.gS(x)?x[0]:0},
gaD(d){var x=this.a
return!D.Aw.gS(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:0},
gjc(){return A.iO(this)},
ix(d,e){var x,w=e.gaD(e),v=this.a
if(!D.Aw.gS(v))v[0]=D.d.D(w)
w=e.gaK()
x=v.length
if(x>1)v[1]=D.d.D(w)
w=e.gaM(e)
if(x>2)v[2]=D.d.D(w)
w=e.gaP(e)
if(x>3)v[3]=D.d.D(w)},
gW(d){return new A.h4(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.aB(B.I(this,!0,B.q(this).h("u.E")))},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
$idt:1}
A.Kw.prototype={
dJ(d){var x=this.b
x===$&&B.b()
return new A.Kw(this.a,x)},
gd8(){return C.eS},
gez(){return null},
DU(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.fC(x,7-d)&1}else x=0
return x},
Jd(d,e){var x
if(d>=this.a)return
d=7-d
x=this.b
x===$&&B.b()
this.b=e!==0?(x|D.c.ev(1,d))>>>0:(x&~(D.c.ev(1,d)&255))>>>0},
i(d,e){return this.DU(e)},
n(d,e,f){return this.Jd(e,f)},
gdU(d){return this.DU(0)},
gaD(d){return this.DU(0)},
gaK(){return this.DU(1)},
gaM(d){return this.DU(2)},
gaP(d){return this.DU(3)},
gjc(){return A.iO(this)},
ix(d,e){this.i_(e.gaD(e),e.gaK(),e.gaM(e),e.gaP(e))},
i_(d,e,f,g){var x=this
x.Jd(0,d)
x.Jd(1,e)
x.Jd(2,f)
x.Jd(3,g)},
gW(d){return new A.h4(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a&&e.gv(e)===B.aB(B.I(this,!0,B.q(this).h("u.E")))},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
$idt:1,
gt(d){return this.a}}
A.Kx.prototype={
dJ(d){return new A.Kx(new Uint16Array(B.bD(this.a)))},
gd8(){return C.bY},
gt(d){return this.a.length},
gez(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=D.d.D(f)},
gdU(d){var x=this.a
return!D.iA.gS(x)?x[0]:0},
gaD(d){var x=this.a
return!D.iA.gS(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:0},
gjc(){return A.iO(this)},
ix(d,e){var x,w=e.gaD(e),v=this.a
if(!D.iA.gS(v))v[0]=D.d.D(w)
w=e.gaK()
x=v.length
if(x>1)v[1]=D.d.D(w)
w=e.gaM(e)
if(x>2)v[2]=D.d.D(w)
w=e.gaP(e)
if(x>3)v[3]=D.d.D(w)},
gW(d){return new A.h4(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.aB(B.I(this,!0,B.q(this).h("u.E")))},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
$idt:1}
A.Ky.prototype={
dJ(d){var x=this.b
x===$&&B.b()
return new A.Ky(this.a,x)},
gd8(){return C.ft},
gez(){return null},
DV(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.fC(x,6-(d<<1>>>0))&3}else x=0
return x},
Je(d,e){var x,w,v
if(d>=this.a)return
x=C.apz[d]
w=D.d.D(e)
v=this.b
v===$&&B.b()
this.b=(v&x|D.c.ev(w&3,6-(d<<1>>>0)))>>>0},
i(d,e){return this.DV(e)},
n(d,e,f){return this.Je(e,f)},
gdU(d){return this.DV(0)},
gaD(d){return this.DV(0)},
gaK(){return this.DV(1)},
gaM(d){return this.DV(2)},
gaP(d){return this.DV(3)},
gjc(){return A.iO(this)},
ix(d,e){this.i_(e.gaD(e),e.gaK(),e.gaM(e),e.gaP(e))},
i_(d,e,f,g){var x=this
x.Je(0,d)
x.Je(1,e)
x.Je(2,f)
x.Je(3,g)},
gW(d){return new A.h4(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a&&e.gv(e)===B.aB(B.I(this,!0,B.q(this).h("u.E")))},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
$idt:1,
gt(d){return this.a}}
A.Kz.prototype={
dJ(d){return new A.Kz(new Uint32Array(B.bD(this.a)))},
gd8(){return C.ia},
gt(d){return this.a.length},
gez(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=D.d.D(f)},
gdU(d){var x=this.a
return!D.cs.gS(x)?x[0]:0},
gaD(d){var x=this.a
return!D.cs.gS(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:0},
gjc(){return A.iO(this)},
ix(d,e){var x,w=e.gaD(e),v=this.a
if(!D.cs.gS(v))v[0]=D.d.D(w)
w=e.gaK()
x=v.length
if(x>1)v[1]=D.d.D(w)
w=e.gaM(e)
if(x>2)v[2]=D.d.D(w)
w=e.gaP(e)
if(x>3)v[3]=D.d.D(w)},
gW(d){return new A.h4(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.aB(B.I(this,!0,B.q(this).h("u.E")))},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
$idt:1}
A.KA.prototype={
dJ(d){return new A.KA(this.a,new Uint8Array(B.bD(this.b)))},
gd8(){return C.fu},
gez(){return null},
DW(d){var x
if(d<0||d>=this.a)x=0
else{x=this.b
x=d<2?D.c.fC(x[0],4-(d<<2>>>0))&15:D.c.fC(x[1],4-((d&1)<<2))&15}return x},
Jf(d,e){var x,w,v
if(d>=this.a)return
x=D.c.bg(D.d.D(e),0,15)
if(d>1){d&=1
w=1}else w=0
if(d===0){v=this.b
v[w]=(v[w]&15|x<<4)>>>0}else if(d===1){v=this.b
v[w]=(v[w]&240|x)>>>0}},
i(d,e){return this.DW(e)},
n(d,e,f){return this.Jf(e,f)},
gdU(d){return this.DW(0)},
gaD(d){return this.DW(0)},
gaK(){return this.DW(1)},
gaM(d){return this.DW(2)},
gaP(d){return this.DW(3)},
gjc(){return A.iO(this)},
ix(d,e){this.i_(e.gaD(e),e.gaK(),e.gaM(e),e.gaP(e))},
i_(d,e,f,g){var x=this
x.Jf(0,d)
x.Jf(1,e)
x.Jf(2,f)
x.Jf(3,g)},
gW(d){return new A.h4(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a&&e.gv(e)===B.aB(B.I(this,!0,B.q(this).h("u.E")))},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
$idt:1,
gt(d){return this.a}}
A.wg.prototype={
aOc(d,e,f,g){var x=this.a
x[0]=d
x[1]=e
x[2]=f
x[3]=g},
dJ(d){return new A.wg(new Uint8Array(B.bD(this.a)))},
gd8(){return C.a_},
gt(d){return this.a.length},
gez(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=D.d.D(f)},
gdU(d){var x=this.a
return!D.aa.gS(x)?x[0]:0},
gaD(d){var x=this.a
return!D.aa.gS(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:255},
gjc(){return A.iO(this)},
ix(d,e){var x,w=e.gaD(e),v=this.a
if(!D.aa.gS(v))v[0]=D.d.D(w)
w=e.gaK()
x=v.length
if(x>1)v[1]=D.d.D(w)
w=e.gaM(e)
if(x>2)v[2]=D.d.D(w)
w=e.gaP(e)
if(x>3)v[3]=D.d.D(w)},
gW(d){return new A.h4(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.aB(B.I(this,!0,B.q(this).h("u.E")))},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
$idt:1}
A.afF.prototype={}
A.Ku.prototype={}
A.mG.prototype={
G(){return"Format."+this.b}}
A.aeE.prototype={
G(){return"BlendMode."+this.b}}
A.LE.prototype={
Pr(d){var x=$.c5j()
if(!x.Z(0,d))return"<unknown>"
return x.i(0,d).a},
k(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(x=j.a,w=B.fG(x,x.r,B.q(x).c),v=y.p,u=y.r,t=y.N,s=y.P,r="";w.q();){q=w.d
r+=q+"\n"
p=x.i(0,q)
for(q=p.a,o=new B.iw(q,q.r,B.q(q).h("iw<1>")),o.c=q.e;o.q();){q=o.d
n=p.i(0,q)
r=n==null?r+("\t"+j.Pr(q)+"\n"):r+("\t"+j.Pr(q)+": "+n.k(0)+"\n")}for(q=p.b.a,o=new B.iw(q,q.r,B.q(q).h("iw<1>")),o.c=q.e;o.q();){m=o.d
r+=m+"\n"
if(!q.Z(0,m))q.n(0,m,new A.oS(B.C(v,u),new A.rE(B.C(t,s))))
l=q.i(0,m)
for(m=l.a,k=new B.iw(m,m.r,B.q(m).h("iw<1>")),k.c=m.e;k.q();){m=k.d
n=l.i(0,m)
r=n==null?r+("\t"+j.Pr(m)+"\n"):r+("\t"+j.Pr(m)+": "+n.k(0)+"\n")}}}return r.charCodeAt(0)==0?r:r},
j2(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0="exif",a1="interop",a2=a4.b
a4.b=!0
a4.ku(19789)
a4.ku(42)
a4.hW(8)
x=d.a
if(x.i(0,"ifd0")==null)x.n(0,"ifd0",new A.oS(B.C(y.p,y.r),new A.rE(B.C(y.N,y.P))))
w=y.N
v=y.p
u=B.C(w,v)
for(t=B.q(x),s=t.h("bB<1>"),t=B.fG(x,x.r,t.c),r=y.r,q=y.P,p=8;t.q();){o=t.d
n=x.i(0,o)
n.toString
u.n(0,o,p)
o=n.b.a
if(o.Z(0,a0)){m=new Uint32Array(1)
m[0]=0
n.n(0,34665,new A.q4(m))}else n.a.J(0,34665)
if(o.Z(0,a1)){m=new Uint32Array(1)
m[0]=0
n.n(0,40965,new A.q4(m))}else n.a.J(0,40965)
if(o.Z(0,"gps")){m=new Uint32Array(1)
m[0]=0
n.n(0,34853,new A.q4(m))}else n.a.J(0,34853)
n=n.a
p+=2+12*J.b_(n.gaI(0).a)+4
for(n=n.gaI(0),m=B.q(n),n=new B.be(J.ak(n.a),n.b,m.h("be<1,2>")),m=m.y[1];n.q();){l=n.a
if(l==null)l=m.a(l)
k=C.im[l.ghq(l).a]*l.gt(l)
if(k>4)p+=k}for(n=new B.iw(o,o.r,B.q(o).h("iw<1>")),n.c=o.e;n.q();){m=n.d
if(!o.Z(0,m))o.n(0,m,new A.oS(B.C(v,r),new A.rE(B.C(w,q))))
l=o.i(0,m)
l.toString
u.n(0,m,p)
l=l.a
j=2+12*J.b_(l.gaI(0).a)
for(m=l.gaI(0),l=B.q(m),m=new B.be(J.ak(m.a),m.b,l.h("be<1,2>")),l=l.y[1];m.q();){i=m.a
if(i==null)i=l.a(i)
k=C.im[i.ghq(i).a]*i.gt(i)
if(k>4)j+=k}p+=j}}h=x.a
for(t=h-1,g=0;g<h;++g){f=new B.bB(x,s).dw(0,g)
o=x.gaI(0)
e=o.b.$1(J.r9(o.a,g))
o=e.b.a
if(o.Z(0,a0)){n=e.i(0,34665)
n.toString
m=u.i(0,a0)
m.toString
n.v9(m)}if(o.Z(0,a1)){n=e.i(0,40965)
n.toString
m=u.i(0,a1)
m.toString
n.v9(m)}if(o.Z(0,"gps")){n=e.i(0,34853)
n.toString
m=u.i(0,"gps")
m.toString
n.v9(m)}n=u.i(0,f)
n.toString
d.arC(a4,e,n+2+12*J.b_(e.a.gaI(0).a)+4)
if(g===t)a4.hW(0)
else{n=u.i(0,new B.bB(x,s).dw(0,g+1))
n.toString
a4.hW(n)}d.arD(a4,e)
for(n=new B.iw(o,o.r,B.q(o).h("iw<1>")),n.c=o.e;n.q();){m=n.d
if(!o.Z(0,m))o.n(0,m,new A.oS(B.C(v,r),new A.rE(B.C(w,q))))
l=o.i(0,m)
l.toString
m=u.i(0,m)
m.toString
d.arC(a4,l,m+2+12*J.b_(l.a.gaI(0).a))
d.arD(a4,l)}}a4.b=a2},
arC(d,e,f){var x,w,v,u,t,s,r=e.a
d.ku(r.a)
for(r=B.fG(r,r.r,B.q(r).c);r.q();){x=r.d
w=e.i(0,x)
w.toString
v=x===273
u=v&&w.ghq(w)===C.h0?C.co:w.ghq(w)
t=v&&w.ghq(w)===C.h0?1:w.gt(w)
d.ku(x)
d.ku(u.a)
d.hW(t)
s=C.im[w.ghq(w).a]*w.gt(w)
if(s<=4){w.j2(0,d)
for(;s<4;){d.aS(0);++s}}else{d.hW(f)
f+=s}}return f},
arD(d,e){var x,w,v
for(x=e.a.gaI(0),w=B.q(x),x=new B.be(J.ak(x.a),x.b,w.h("be<1,2>")),w=w.y[1];x.q();){v=x.a
if(v==null)v=w.a(v)
if(C.im[v.ghq(v).a]*v.gt(v)>4)v.j2(0,d)}},
pG(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a6.e
a6.e=!0
x=a6.d
w=a6.bI()
if(w===18761){a6.e=!1
if(a6.bI()!==42){a6.e=a4
return!1}}else if(w===19789){a6.e=!0
if(a6.bI()!==42){a6.e=a4
return!1}}else return!1
v=a6.ai()
for(u=this.a,t=y.bg,s=y.p,r=y.r,q=y.N,p=y.P,o=0;v>0;v=f){a6.d=x+v
n=new A.oS(B.C(s,r),new A.rE(B.C(q,p)))
m=a6.bI()
l=B.a(new Array(m),t)
for(k=0;k<m;++k)l[k]=this.ang(a6,x)
for(j=l.length,i=0;i<l.length;l.length===j||(0,B.O)(l),++i){h=l[i]
g=h.b
if(g!=null)n.n(0,h.a,g)}u.n(0,"ifd"+o,n);++o
f=a6.ai()
if(f===v)break}for(u=u.gaI(0),j=B.q(u),u=new B.be(J.ak(u.a),u.b,j.h("be<1,2>")),j=j.y[1];u.q();){g=u.a
if(g==null)g=j.a(g)
for(e=J.ak(C.Af.ge4(C.Af)),d=g.a,a0=g.b.a;e.q();){a1=e.gK(e)
if(d.Z(0,a1)){a6.d=x+g.i(0,a1).D(0)
n=new A.oS(B.C(s,r),new A.rE(B.C(q,p)))
m=a6.bI()
l=B.a(new Array(m),t)
for(k=0;k<m;++k)l[k]=this.ang(a6,x)
for(a2=l.length,i=0;i<l.length;l.length===a2||(0,B.O)(l),++i){h=l[i]
a3=h.b
if(a3!=null)n.n(0,h.a,a3)}a1=C.Af.i(0,a1)
a1.toString
a0.n(0,a1,n)}}}a6.e=a4
return!1},
ang(d,e){var x,w,v,u,t=d.bI(),s=d.bI(),r=d.ai(),q=new A.aDV(t,null)
if(s>13)return q
x=C.PF[s]
w=r*C.im[s]
v=d.d
if((w>4?d.d=d.ai()+e:v)+w>d.c)return q
u=d.kq(w)
switch(x.a){case 0:break
case 6:q.b=new A.uz(new Int8Array(B.bD(B.chV(u.hp().buffer,0,r))))
break
case 1:q.b=new A.rD(new Uint8Array(B.bD(u.kq(r).hp())))
break
case 7:q.b=new A.Fc(new Uint8Array(B.bD(u.kq(r).hp())))
break
case 2:q.b=new A.A9(r===0?"":u.pH(r-1))
break
case 3:q.b=A.cgI(u,r)
break
case 4:q.b=A.cgD(u,r)
break
case 5:q.b=A.cgE(u,r)
break
case 10:q.b=A.cgG(u,r)
break
case 8:q.b=A.cgH(u,r)
break
case 9:q.b=A.cgF(u,r)
break
case 11:q.b=A.cgK(u,r)
break
case 12:q.b=A.cgC(u,r)
break}d.d=v+4
return q}}
A.aDV.prototype={
gj(d){return this.b}}
A.ajG.prototype={}
A.rE.prototype={
aOr(d){d.a.aH(0,new A.b8L(this))},
gS(d){var x,w,v=this.a
if(v.a===0)return!0
for(v=v.gaI(0),x=B.q(v),v=new B.be(J.ak(v.a),v.b,x.h("be<1,2>")),x=x.y[1];v.q();){w=v.a
if(w==null)w=x.a(w)
if(!(w.a.a===0&&w.b.gS(0)))return!1}return!0},
Z(d,e){return this.a.Z(0,e)},
i(d,e){var x=this.a
if(!x.Z(0,e))x.n(0,e,new A.oS(B.C(y.p,y.r),new A.rE(B.C(y.N,y.P))))
x=x.i(0,e)
x.toString
return x},
n(d,e,f){this.a.n(0,e,f)}}
A.oS.prototype={
gS(d){return this.a.a===0&&this.b.gS(0)},
bnD(d){d.a.aH(0,new A.b8M(this))
d.b.a.aH(0,new A.b8N(this))},
Z(d,e){return this.a.Z(0,e)},
i(d,e){if(typeof e=="string")e=C.VK.i(0,e)
if(B.hh(e))return this.a.i(0,e)
return null},
n(d,e,f){var x,w,v,u,t,s,r=this
if(typeof e=="string")e=C.VK.i(0,e)
if(!B.hh(e))return
if(f==null)r.a.J(0,e)
else if(f instanceof A.jh)r.a.n(0,e,f)
else{x=$.c5j().i(0,e)
if(x!=null)switch(x.b.a){case 1:if(y.L.b(f))r.a.n(0,e,new A.rD(new Uint8Array(B.bD(new Uint8Array(B.bD(f))))))
else if(B.hh(f)){w=new Uint8Array(1)
w[0]=f
r.a.n(0,e,new A.rD(w))}break
case 2:if(typeof f=="string")r.a.n(0,e,new A.A9(f))
break
case 3:if(y.L.b(f))r.a.n(0,e,new A.wQ(new Uint16Array(B.bD(new Uint16Array(B.bD(f))))))
else if(B.hh(f))r.a.n(0,e,A.cBP(f))
break
case 4:if(y.L.b(f))r.a.n(0,e,new A.q4(new Uint32Array(B.bD(new Uint32Array(B.bD(f))))))
else if(B.hh(f))r.a.n(0,e,A.cBO(f))
break
case 5:if(y.k.b(f))r.a.n(0,e,new A.rF(B.bl(f,!0,y.i)))
else if(y.L.b(f)&&J.b_(f)===2){w=J.a3(f)
r.a.n(0,e,new A.rF(B.a([new A.mW(w.i(f,0),w.i(f,1))],y.j)))}else if(f instanceof A.mW)r.a.n(0,e,new A.rF(B.a([new A.mW(f.a,f.b)],y.j)))
else if(y.f.b(f)){w=J.a3(f)
v=w.gt(f)
u=y.i
t=J.ji(v,u)
for(s=0;s<v;++s)t[s]=new A.mW(J.t(w.i(f,s),0),J.t(w.i(f,s),1))
r.a.n(0,e,new A.rF(B.bl(t,!0,u)))}break
case 6:if(y.L.b(f))r.a.n(0,e,new A.uz(new Int8Array(B.bD(new Int8Array(B.bD(f))))))
else if(B.hh(f)){w=new Int8Array(1)
w[0]=f
r.a.n(0,e,new A.uz(w))}break
case 7:if(y.L.b(f))r.a.n(0,e,new A.Fc(new Uint8Array(B.bD(new Uint8Array(B.bD(f))))))
break
case 8:if(y.L.b(f))r.a.n(0,e,new A.wP(new Int16Array(B.bD(new Int16Array(B.bD(f))))))
else if(B.hh(f)){w=new Int16Array(1)
w[0]=f
r.a.n(0,e,new A.wP(w))}break
case 9:if(y.L.b(f))r.a.n(0,e,new A.wO(new Int32Array(B.bD(new Int32Array(B.bD(f))))))
else if(B.hh(f)){w=new Int32Array(1)
w[0]=f
r.a.n(0,e,new A.wO(w))}break
case 10:if(y.k.b(f))r.a.n(0,e,new A.rG(B.bl(f,!0,y.i)))
else if(y.L.b(f)&&J.b_(f)===2){w=J.a3(f)
r.a.n(0,e,new A.rG(B.a([new A.mW(w.i(f,0),w.i(f,1))],y.j)))}else if(f instanceof A.mW)r.a.n(0,e,new A.rG(B.a([f],y.j)))
else if(y.f.b(f)){w=J.a3(f)
v=w.gt(f)
u=y.i
t=J.ji(v,u)
for(s=0;s<v;++s)t[s]=new A.mW(J.t(w.i(f,s),0),J.t(w.i(f,s),1))
r.a.n(0,e,new A.rG(B.bl(t,!0,u)))}break
case 11:if(y.n.b(f))r.a.n(0,e,new A.Ab(new Float32Array(B.bD(new Float32Array(B.bD(f))))))
else if(typeof f=="number")r.a.n(0,e,A.cgJ(f))
else if(B.hh(f))r.a.n(0,e,A.cgJ(f))
break
case 12:if(y.n.b(f))r.a.n(0,e,new A.Aa(new Float64Array(B.bD(new Float64Array(B.bD(f))))))
else if(typeof f=="number")r.a.n(0,e,A.cgB(f))
else if(B.hh(f))r.a.n(0,e,A.cgB(f))
break
case 0:break}}},
gia(d){var x=this.a.i(0,274)
return x==null?null:J.ad9(x)},
sia(d,e){this.a.J(0,274)}}
A.lW.prototype={
G(){return"IfdValueType."+this.b}}
A.jh.prototype={
iG(d,e){return 0},
D(d){return this.iG(0,0)},
CP(d){return 0},
tp(){return new Uint8Array(0)},
k(d){return""},
l(d,e){var x=this
if(e==null)return!1
return e instanceof A.jh&&x.ghq(x)===e.ghq(e)&&x.gt(x)===e.gt(e)&&x.gv(x)===e.gv(e)},
gv(d){return 0},
v9(d){}}
A.rD.prototype={
dJ(d){return new A.rD(new Uint8Array(B.bD(this.a)))},
ghq(d){return C.Hn},
gt(d){return this.a.length},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.rD){x=this.a
x=x.length===e.a.length&&B.aB(x)===B.aB(e.a)}else x=!1
return x},
gv(d){return B.aB(this.a)},
iG(d,e){return this.a[e]},
D(d){return this.iG(0,0)},
v9(d){this.a[0]=d},
tp(){return this.a},
j2(d,e){e.m_(this.a)},
k(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gj(d){return this.a}}
A.A9.prototype={
dJ(d){return new A.A9(this.a)},
ghq(d){return C.bc},
gt(d){return this.a.length+1},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.A9){x=this.a
x=x.length+1===e.a.length+1&&D.e.gv(x)===D.e.gv(e.a)}else x=!1
return x},
gv(d){return D.e.gv(this.a)},
tp(){return new Uint8Array(B.bD(new B.dJ(this.a)))},
j2(d,e){e.m_(new B.dJ(this.a))
e.aS(0)},
k(d){return this.a},
gj(d){return this.a}}
A.wQ.prototype={
aOw(d,e){var x
for(x=0;x<e;++x)this.a[x]=d.bI()},
dJ(d){return new A.wQ(new Uint16Array(B.bD(this.a)))},
ghq(d){return C.b0},
gt(d){return this.a.length},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.wQ){x=this.a
x=x.length===e.a.length&&B.aB(x)===B.aB(e.a)}else x=!1
return x},
gv(d){return B.aB(this.a)},
iG(d,e){return this.a[e]},
D(d){return this.iG(0,0)},
v9(d){this.a[0]=d},
tp(){return B.bX(this.a.buffer,0,null)},
j2(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.ku(this.a[x])},
k(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gj(d){return this.a}}
A.q4.prototype={
aOt(d,e){var x
for(x=0;x<e;++x)this.a[x]=d.ai()},
dJ(d){return new A.q4(new Uint32Array(B.bD(this.a)))},
ghq(d){return C.co},
gt(d){return this.a.length},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.q4){x=this.a
x=x.length===e.a.length&&B.aB(x)===B.aB(e.a)}else x=!1
return x},
gv(d){return B.aB(this.a)},
iG(d,e){return this.a[e]},
D(d){return this.iG(0,0)},
v9(d){this.a[0]=d},
tp(){return B.bX(this.a.buffer,0,null)},
j2(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.hW(this.a[x])},
k(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gj(d){return this.a}}
A.rF.prototype={
dJ(d){return new A.rF(B.bl(this.a,!0,y.i))},
ghq(d){return C.dC},
gt(d){return this.a.length},
iG(d,e){return J.ad9(this.a[e])},
D(d){return this.iG(0,0)},
CP(d){return J.c5x(this.a[0])},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.rF){x=this.a
x=x.length===e.a.length&&B.aB(x)===B.aB(e.a)}else x=!1
return x},
gv(d){return B.aB(this.a)},
j2(d,e){var x,w,v,u
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.O)(x),++v){u=x[v]
e.hW(u.a)
e.hW(u.b)}},
k(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gj(d){return this.a}}
A.uz.prototype={
dJ(d){return new A.uz(new Int8Array(B.bD(this.a)))},
ghq(d){return C.Hr},
gt(d){return this.a.length},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.uz){x=this.a
x=x.length===e.a.length&&B.aB(x)===B.aB(e.a)}else x=!1
return x},
gv(d){return B.aB(this.a)},
iG(d,e){return this.a[e]},
D(d){return this.iG(0,0)},
v9(d){this.a[0]=d},
tp(){return B.bX(this.a.buffer,0,null)},
j2(d,e){e.m_(B.bX(this.a.buffer,0,null))},
k(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gj(d){return this.a}}
A.wP.prototype={
aOv(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.bI()
$.pE()[0]=v
w[x]=$.r5()[0]}},
dJ(d){return new A.wP(new Int16Array(B.bD(this.a)))},
ghq(d){return C.Hs},
gt(d){return this.a.length},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.wP){x=this.a
x=x.length===e.a.length&&B.aB(x)===B.aB(e.a)}else x=!1
return x},
gv(d){return B.aB(this.a)},
iG(d,e){return this.a[e]},
D(d){return this.iG(0,0)},
v9(d){this.a[0]=d},
tp(){return B.bX(this.a.buffer,0,null)},
j2(d,e){var x,w=new Int16Array(1),v=B.c7J(w.buffer,0,null),u=this.a.length
for(x=0;x<u;++x){w[0]=this.a[x]
e.ku(v[0])}},
k(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gj(d){return this.a}}
A.wO.prototype={
aOu(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.ai()
$.hk()[0]=v
w[x]=$.kQ()[0]}},
dJ(d){return new A.wO(new Int32Array(B.bD(this.a)))},
ghq(d){return C.Ht},
gt(d){return this.a.length},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.wO){x=this.a
x=x.length===e.a.length&&B.aB(x)===B.aB(e.a)}else x=!1
return x},
gv(d){return B.aB(this.a)},
iG(d,e){return this.a[e]},
D(d){return this.iG(0,0)},
v9(d){this.a[0]=d},
tp(){return B.bX(this.a.buffer,0,null)},
j2(d,e){var x,w,v=this.a.length
for(x=0;x<v;++x){w=this.a[x]
$.aPA()[0]=w
e.hW($.c5d()[0])}},
k(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gj(d){return this.a}}
A.rG.prototype={
dJ(d){return new A.rG(B.bl(this.a,!0,y.i))},
ghq(d){return C.Ho},
gt(d){return this.a.length},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.rG){x=this.a
x=x.length===e.a.length&&B.aB(x)===B.aB(e.a)}else x=!1
return x},
gv(d){return B.aB(this.a)},
iG(d,e){return J.ad9(this.a[e])},
D(d){return this.iG(0,0)},
CP(d){return J.c5x(this.a[0])},
j2(d,e){var x,w,v,u,t,s
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.O)(x),++v){u=x[v]
t=u.a
s=$.aPA()
s[0]=t
t=$.c5d()
e.hW(t[0])
s[0]=u.b
e.hW(t[0])}},
k(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gj(d){return this.a}}
A.Ab.prototype={
aOx(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.ai()
$.hk()[0]=v
w[x]=$.Dt()[0]}},
dJ(d){return new A.Ab(new Float32Array(B.bD(this.a)))},
ghq(d){return C.Hp},
gt(d){return this.a.length},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.Ab){x=this.a
x=x.length===e.a.length&&B.aB(x)===B.aB(e.a)}else x=!1
return x},
gv(d){return B.aB(this.a)},
tp(){return B.bX(this.a.buffer,0,null)},
CP(d){return this.a[0]},
j2(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.bEm(this.a[x])},
k(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gj(d){return this.a}}
A.Aa.prototype={
aOs(d,e){var x
for(x=0;x<e;++x)this.a[x]=d.Yt()},
dJ(d){return new A.Aa(new Float64Array(B.bD(this.a)))},
ghq(d){return C.Hq},
gt(d){return this.a.length},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.Aa){x=this.a
x=x.length===e.a.length&&B.aB(x)===B.aB(e.a)}else x=!1
return x},
gv(d){return B.aB(this.a)},
CP(d){return this.a[0]},
tp(){return B.bX(this.a.buffer,0,null)},
j2(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.bEn(this.a[x])},
k(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gj(d){return this.a}}
A.Fc.prototype={
dJ(d){return new A.Fc(new Uint8Array(B.bD(this.a)))},
ghq(d){return C.h0},
gt(d){return this.a.length},
tp(){return this.a},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.Fc){x=this.a
x=x.length===e.a.length&&B.aB(x)===B.aB(e.a)}else x=!1
return x},
gv(d){return B.aB(this.a)},
j2(d,e){e.m_(this.a)},
k(d){return"<data>"},
gj(d){return this.a}}
A.kX.prototype={
G(){return"BmpCompression."+this.b}}
A.aTe.prototype={}
A.DI.prototype={
aeU(d,e){var x,w,v,u,t,s,r,q=this,p=q.d,o=p<=40
if(o){x=q.r
x=x===C.wN||x===C.wO}else x=!0
if(x){x=q.as=d.ai()
w=A.c2S(x)
q.CW=w
v=D.c.fC(x,w)
x=v>0
q.cx=x?255/v:0
w=q.at=d.ai()
u=A.c2S(w)
q.cy=u
t=D.c.fC(w,u)
q.db=x?255/t:0
w=q.ax=d.ai()
u=A.c2S(w)
q.dx=u
s=D.c.fC(w,u)
q.dy=x?255/s:0
if(!o||q.r===C.wO){o=q.ay=d.ai()
x=A.c2S(o)
q.fr=x
r=D.c.fC(o,x)
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
if(q.f<=8)q.bBw(d)},
gN0(){var x=this.d
if(x!==40)if(x===124){x=this.ay
x===$&&B.b()
x=x===0}else x=!1
else x=!0
return x},
gb_(d){return Math.abs(this.c)},
bBw(d){var x,w,v,u,t,s=this,r=s.z
if(r===0)r=D.c.ef(1,s.f)
s.ch=new A.rY(new Uint8Array(r*3),r,3)
for(x=0;x<r;++x){w=J.t(d.a,d.d++)
v=J.t(d.a,d.d++)
u=J.t(d.a,d.d++)
t=J.t(d.a,d.d++)
s.ch.Q0(x,u,v,w,t)}},
bpH(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(o.ch!=null){x=o.f
if(x===1){w=d.cW()
for(v=7;v>=0;--v)e.$4(D.c.nj(w,v)&1,0,0,0)
return}else if(x===2){w=d.cW()
for(v=6;v>=0;v-=2)e.$4(D.c.nj(w,v)&2,0,0,0)}else if(x===4){w=d.cW()
e.$4(D.c.O(w,4)&15,0,0,0)
e.$4(w&15,0,0,0)
return}else if(x===8){e.$4(d.cW(),0,0,0)
return}}x=o.r
if(x===C.wN&&o.f===32){u=d.ai()
x=o.as
x===$&&B.b()
t=o.CW
t===$&&B.b()
t=D.c.fC((u&x)>>>0,t)
x=o.cx
x===$&&B.b()
s=D.d.D(t*x)
x=o.at
x===$&&B.b()
t=o.cy
t===$&&B.b()
t=D.c.fC((u&x)>>>0,t)
x=o.db
x===$&&B.b()
r=D.d.D(t*x)
x=o.ax
x===$&&B.b()
t=o.dx
t===$&&B.b()
t=D.c.fC((u&x)>>>0,t)
x=o.dy
x===$&&B.b()
q=D.d.D(t*x)
if(o.gN0())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.fC((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.d.D(t*x)}return e.$4(s,r,q,p)}else{t=o.f
if(t===32&&x===C.DL){q=d.cW()
r=d.cW()
s=d.cW()
p=d.cW()
return e.$4(s,r,q,o.gN0()?255:p)}else if(t===24){q=d.cW()
r=d.cW()
return e.$4(d.cW(),r,q,255)}else if(t===16){u=d.bI()
x=o.as
x===$&&B.b()
t=o.CW
t===$&&B.b()
t=D.c.fC((u&x)>>>0,t)
x=o.cx
x===$&&B.b()
s=D.d.D(t*x)
x=o.at
x===$&&B.b()
t=o.cy
t===$&&B.b()
t=D.c.fC((u&x)>>>0,t)
x=o.db
x===$&&B.b()
r=D.d.D(t*x)
x=o.ax
x===$&&B.b()
t=o.dx
t===$&&B.b()
t=D.c.fC((u&x)>>>0,t)
x=o.dy
x===$&&B.b()
q=D.d.D(t*x)
if(o.gN0())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.fC((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.d.D(t*x)}return e.$4(s,r,q,p)}else throw B.e(A.bK("Unsupported bitsPerPixel ("+t+") or compression ("+x.k(0)+")."))}}}
A.aeI.prototype={
nT(d){var x,w=null
if(!A.c5Q(A.cz(d,!1,w,0)))return w
x=A.cz(d,!1,w,0)
this.a=x
return this.b=A.cx0(x,w)},
jo(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b
if(e==null)return new A.Ad(f,f,f,f,0,C.b2,0,0)
x=g.a
x===$&&B.b()
w=e.a.b
w===$&&B.b()
x.d=w
v=e.f
w=e.b
u=D.c.aY(w*v+31,32)*4
x=g.c
if(x)t=4
else if(v===1||v===4||v===8)t=1
else{s=v===32?4:3
t=s}if(x)r=C.a_
else if(v===1)r=C.eS
else{if(v===2)s=C.ft
else if(v===4)s=C.fu
else s=C.a_
r=s}q=x?f:e.ch
p=A.h8(f,f,r,0,C.b2,e.gb_(e),f,0,t,q,C.a_,w,!1)
for(o=p.gb_(0)-1,x=e.c,w=1/x<0,s=x<0,x=x===0;o>=0;--o){n={}
if(!(x?w:s))m=o
else{l=p.a
l=l==null?f:l.b
m=(l==null?0:l)-1-o}l=g.a
k=l.jj(u)
l.d=l.d+(k.c-k.d)
l=p.a
j=l==null
i=j?f:l.a
if(i==null)i=0
n.a=0
h=j?f:l.e1(0,m,f)
if(h==null)h=new A.eX()
for(;n.a<i;)e.bpH(k,new A.aTd(n,g,i,e,h))}return p},
mX(d,e,f){if(this.nT(e)==null)return null
return this.jo(0)}}
A.b_v.prototype={}
A.aZg.prototype={}
A.aZh.prototype={}
A.b1S.prototype={}
A.ajI.prototype={}
A.amp.prototype={
NI(){return this.w},
r6(d,e,f,g,h){throw B.e(A.bK("B44 compression not yet supported."))},
HU(d,e,f){return this.r6(d,e,f,null,null)},
k(d){return B.o(this.r)+" "+this.x}}
A.LG.prototype={
G(){return"ExrChannelType."+this.b}}
A.EF.prototype={
G(){return"ExrChannelName."+this.b}}
A.ajJ.prototype={
gbpw(){var x=this.c
x===$&&B.b()
return x},
aOh(d){var x=this,w=d.Om()
x.a=w
if(w.length===0)return
x.c=C.azf[d.ai()]
d.cW()
d.d+=3
x.f=d.ai()
x.r=d.ai()
w=x.a
if(w==="R"){x.w=!0
x.b=C.ahN}else if(w==="G"){x.w=!0
x.b=C.ahO}else if(w==="B"){x.w=!0
x.b=C.ahP}else if(w==="A"){x.w=!0
x.b=C.ahQ}else{x.w=!1
x.b=C.ahR}switch(x.c.a){case 0:x.d=4
break
case 1:x.d=2
break
case 2:x.d=4
break
default:throw B.e(A.bK("EXR Invalid pixel type: "+x.gbpw().k(0)))}}}
A.ru.prototype={
G(){return"ExrCompressorType."+this.b}}
A.b33.prototype={
r6(d,e,f,g,h){throw B.e(A.bK("Unsupported compression type"))},
HU(d,e,f){return this.r6(d,e,f,null,null)}}
A.b9X.prototype={}
A.ajK.prototype={}
A.b35.prototype={
aOi(d){var x,w,v,u,t=this,s=A.cz(d,!1,null,0)
if(s.ai()!==20000630)throw B.e(A.bK("File is not an OpenEXR image file."))
x=t.d=s.cW()
if(x!==2)throw B.e(A.bK("Cannot read version "+x+" image files."))
x=t.e=s.qX()
if((x&4294967289)>>>0!==0)throw B.e(A.bK("The file format version number's flag field contains unrecognized flags."))
if((x&16)===0){w=t.c
v=A.cgY(w.length,(x&2)!==0,s)
if(v.w>0)w.push(v)}else for(x=t.c;!0;){v=A.cgY(x.length,(t.e&2)!==0,s)
if(v.w<=0)break
x.push(v)}x=t.c
w=x.length
if(w===0)throw B.e(A.bK("Error reading image header"))
for(u=0;u<x.length;x.length===w||(0,B.O)(x),++u)x[u].bBv(s)
t.bbW(s)},
bbW(d){var x,w,v,u,t=this
for(x=t.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.O)(x),++v){u=x[v]
t.a=Math.max(t.a,u.w)
t.b=Math.max(t.b,u.x)
if(u.db)t.bc4(u,d)
else t.bc2(u,d)}},
bc4(b3,b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=this.e
b2===$&&B.b()
x=(b2&16)!==0
b2=b3.b
b2.toString
w=b3.CW
v=b3.ay
u=A.bR(b4,b1,0)
t=b3.c
s=b3.a
r=0
q=0
while(!0){p=b3.k1
p.toString
if(!(r<p))break
o=0
while(!0){p=b3.id
p.toString
if(!(o<p))break
for(p=q!==0,n=0,m=0;n<b3.go[r];++n)for(l=0;l<b3.fy[o];++l,++m){if(p)break
u.d=v[q][m]
if(x)if(u.ai()!==s)throw B.e(A.bK("Invalid Image Data"))
k=u.ai()
j=u.ai()
u.ai()
u.ai()
i=u.jj(u.ai())
u.d=u.d+(i.c-i.d)
h=b3.dy
h.toString
g=j*h
f=b3.dx
f.toString
h=w.r6(i,k*f,g,f,h)
e=h.length
d=new A.l8(h,0,e,0,!1)
a0=w.a
a1=w.b
a2=t.length
a3=0
a4=0
while(!0){if(!(a4<a1&&g<this.b))break
for(a5=0;a5<a2;++a5){if(a3>=e)break
a6=t[a5]
h=b3.dx
h.toString
a7=k*h
for(a8=0;a8<a0;++a8,++a7){h=a6.c
h===$&&B.b()
switch(h.a){case 1:h=d.bI()
f=$.h7
a9=(f!=null?f:A.hT())[h]
break
case 2:a9=d.bI()
break
case 0:a9=d.ai()
break
default:a9=b1}h=a6.d
h===$&&B.b()
a3+=h
h=a6.w
h===$&&B.b()
if(h){h=b2.a
b0=h==null?b1:h.e1(a7,g,b1)
if(b0==null)b0=new A.eX()
h=a6.b
h===$&&B.b()
b0.n(0,h.a,a9)}else{h=a6.a
h===$&&B.b()
f=b2.b
h=f!=null?f.i(0,h):b1
if(h!=null)h.eS(a7,g,a9,0,0)}}}++a4;++g}}++o;++q}++r}},
bc2(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=this.e
a4===$&&B.b()
x=(a4&16)!==0
a4=a5.b
a4.toString
w=a5.CW
v=a5.ay[0]
u=a5.cx
t=A.bR(a6,a3,0)
for(s=v.length,r=a5.c,q=w!=null,p=0,o=0;o<s;++o){t.d=v[o]
if(x)if(t.ai()!==3.141592653589793)throw B.e(A.bK("Invalid Image Data"))
n=t.ai()
m=$.hk()
m[0]=n
n=$.kQ()
m[0]=t.ai()
l=t.jj(n[0])
t.d=t.d+(l.c-l.d)
if(q){n=w.HU(l,0,p)
k=new A.l8(n,0,n.length,0,!1)}else k=l
j=k.c-k.d
i=r.length
h=0
while(!0){if(!(h<u&&p<this.b))break
g=a5.cy[p]
if(g>=j)break
for(f=0;f<i;++f){if(g>=j)break
e=r[f]
d=a5.w
for(a0=0;a0<d;++a0){n=e.c
n===$&&B.b()
switch(n.a){case 1:n=k.bI()
m=$.h7
a1=(m!=null?m:A.hT())[n]
break
case 2:a1=k.bI()
break
case 0:a1=k.ai()
break
default:a1=a3}n=e.d
n===$&&B.b()
g+=n
n=e.w
n===$&&B.b()
if(n){n=a4.a
a2=n==null?a3:n.e1(a0,p,a3)
if(a2==null)a2=new A.eX()
n=e.b
n===$&&B.b()
a2.n(0,n.a,a1)}else{n=e.a
n===$&&B.b()
m=a4.b
n=m!=null?m.i(0,n):a3
if(n!=null)n.eS(a0,p,a1,0,0)}}}++h;++p}}}}
A.W4.prototype={
aOj(a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=B.C(y.N,y.I)
for(x=a1.e,w=y.t,v=a1.c,u=C.fZ;!0;){t=a6.Om()
if(t.length===0)break
s=a6.Om()
r=a6.ai()
q=a6.jj(r)
a6.d=a6.d+(q.c-q.d)
x.n(0,t,new A.ajI(t,s,r))
switch(t){case"channels":for(;!0;){p=new A.ajJ()
p.aOh(q)
o=p.a
o===$&&B.b()
if(o.length===0)break
n=p.w
n===$&&B.b()
if(n){++a1.d
o=p.c
o===$&&B.b()
if(o===C.yd)u=C.fZ
else u=o===C.ye?C.i9:C.ia}else{n=p.c
n===$&&B.b()
if(n===C.yd){n=a1.w
m=a1.x
a3.n(0,o,new A.Ma(new Uint16Array(n*m),n,m,1))}else if(n===C.ye){n=a1.w
m=a1.x
a3.n(0,o,new A.Mb(new Float32Array(n*m),n,m,1))}else if(n===C.Gw){n=a1.w
m=a1.x
a3.n(0,o,new A.Mf(new Uint32Array(n*m),n,m,1))}}v.push(p)}break
case"chromaticities":o=new Float32Array(8)
a1.at=o
n=q.ai()
m=$.hk()
m[0]=n
n=$.Dt()
o[0]=n[0]
o=a1.at
m[0]=q.ai()
o[1]=n[0]
o=a1.at
m[0]=q.ai()
o[2]=n[0]
o=a1.at
m[0]=q.ai()
o[3]=n[0]
o=a1.at
m[0]=q.ai()
o[4]=n[0]
o=a1.at
m[0]=q.ai()
o[5]=n[0]
o=a1.at
m[0]=q.ai()
o[6]=n[0]
o=a1.at
m[0]=q.ai()
o[7]=n[0]
break
case"compression":a1.ax=C.aoc[J.t(q.a,q.d++)]
break
case"dataWindow":o=q.ai()
n=$.hk()
n[0]=o
o=$.kQ()
m=o[0]
n[0]=q.ai()
l=o[0]
n[0]=q.ai()
k=o[0]
n[0]=q.ai()
o=a1.r=B.a([m,l,k,o[0]],w)
a1.w=o[2]-o[0]+1
a1.x=o[3]-o[1]+1
break
case"displayWindow":o=q.ai()
n=$.hk()
n[0]=o
$.kQ()
n[0]=q.ai()
n[0]=q.ai()
n[0]=q.ai()
break
case"lineOrder":break
case"pixelAspectRatio":o=q.ai()
$.hk()[0]=o
$.Dt()
break
case"screenWindowCenter":o=q.ai()
n=$.hk()
n[0]=o
$.Dt()
n[0]=q.ai()
break
case"screenWindowWidth":o=q.ai()
$.hk()[0]=o
$.Dt()
break
case"tiles":a1.dx=q.ai()
a1.dy=q.ai()
o=J.t(q.a,q.d++)
a1.fr=o&15
a1.fx=D.c.O(o,4)&15
break
case"type":j=q.Om()
if(j!=="deepscanline")if(j!=="deeptile")throw B.e(A.bK("EXR Invalid type: "+j))
break
default:break}}x=a1.w
a1.b=A.h8(a2,a2,u,0,C.b2,a1.x,a2,0,a1.d,a2,C.a_,x,!1)
for(x=B.fG(a3,a3.r,a3.$ti.c);x.q();){w=x.d
o=a1.b
o.toString
n=a3.i(0,w)
n.toString
o.aFL(w,n)}if(a1.db){x=a1.r
x===$&&B.b()
a1.id=a1.aRC(x[0],x[2],x[1],x[3])
x=a1.r
a1.k1=a1.aRD(x[0],x[2],x[1],x[3])
if(a1.fr!==2)a1.k1=1
x=a1.id
x.toString
w=a1.r
a1.fy=a1.ag7(x,w[0],w[2],a1.dx,a1.fx)
w=a1.k1
w.toString
x=a1.r
a1.go=a1.ag7(w,x[1],x[3],a1.dy,a1.fx)
x=a1.aRA()
a1.k2=x
w=a1.dx
w.toString
w=x*w
a1.k3=w
a1.CW=A.cfP(a1.ax,a1,w,a1.dy)
a7.a=a7.b=0
w=a1.id
w.toString
x=a1.k1
x.toString
a1.ay=B.x2(w*x,new A.b36(a7,a1),!0,y.bk)}else{x=a1.x
w=a1.ch=new Uint32Array(x+1)
for(o=v.length,n=a1.r,m=a1.w,i=0;i<o;++i){h=v[i]
l=h.d
l===$&&B.b()
k=h.f
k===$&&B.b()
g=D.c.fK(l*m,k)
for(l=h.r,f=0;f<x;++f){n===$&&B.b()
k=n[1]
l===$&&B.b()
if(D.c.al(f+k,l)===0)w[f]=w[f]+g}}for(e=0,f=0;f<x;++f)e=Math.max(e,w[f])
x=A.cfP(a1.ax,a1,e,a2)
a1.CW=x
x=a1.cx=x.NI()
w=a1.ch
v=w.length
o=new Uint32Array(v)
a1.cy=o
for(--v,d=0,a0=0;a0<=v;++a0){if(D.c.al(a0,x)===0)d=0
o[a0]=d
d+=w[a0]}x=D.c.fK(a1.x+x,x)
a1.ay=B.a([new Uint32Array(x-1)],y.w)}},
aRC(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.Ry(w):u.QZ(w))+1
break
case 2:v=e-d+1
x=(u.fx===0?u.Ry(v):u.QZ(v))+1
break
default:throw B.e(A.bK("Unknown LevelMode format."))}return x},
aRD(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.Ry(w):u.QZ(w))+1
break
case 2:v=g-f+1
x=(u.fx===0?u.Ry(v):u.QZ(v))+1
break
default:throw B.e(A.bK("Unknown LevelMode format."))}return x},
Ry(d){var x
for(x=0;d>1;){++x
d=D.c.O(d,1)}return x},
QZ(d){var x,w
for(x=0,w=0;d>1;){if((d&1)!==0)w=1;++x
d=D.c.O(d,1)}return x+w},
aRA(){var x,w,v,u,t
for(x=this.c,w=x.length,v=0,u=0;u<w;++u){t=x[u].d
t===$&&B.b()
v+=t}return v},
ag7(d,e,f,g,h){var x,w,v,u,t,s,r=J.ia(d,y.p)
for(x=h===1,w=f-e+1,v=0;v<d;++v){u=D.c.ef(1,v)
t=D.c.fK(w,u)
if(x&&t*u<w)++t
s=Math.max(t,1)
g.toString
r[v]=D.c.fK(s+g-1,g)}return r}}
A.amq.prototype={
bBv(d){var x,w,v,u,t=this
if(t.db)for(x=0;x<t.ay.length;++x)for(w=0;v=t.ay[x],w<v.length;++w)v[w]=d.aay()
else{u=t.ay[0].length
for(x=0;x<u;++x)t.ay[0][x]=d.aay()}}}
A.b9Y.prototype={
aOF(d,e,f){var x,w,v,u=this,t=d.c.length,s=J.ia(t,y.bc)
for(x=0;x<t;++x)s[x]=new A.aGN()
u.y=s
w=u.w
w.toString
v=D.c.aY(w*u.x,2)
u.z=new Uint16Array(v)},
NI(){return this.x},
r6(a4,a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
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
n=D.c.fK(a5,v)
m=D.c.fK(x,v)
v=n*v<a5?0:1
v=m-n+v
o.c=v
u=p.r
u===$&&B.b()
n=D.c.fK(a6,u)
m=D.c.fK(w,u)
l=n*u<a6?0:1
l=m-n+l
o.d=l
o.e=u
u=p.d
u===$&&B.b()
u=u/2|0
o.f=u
r+=v*l*u}k=a4.bI()
j=a4.bI()
if(j>=8192)throw B.e(A.bK("Error in header for PIZ-compressed data (invalid bitmap size)."))
i=new Uint8Array(8192)
if(k<=j){h=a4.kq(j-k+1)
g=h.c-h.d
for(f=k,q=0;q<g;++q,f=e){e=f+1
i[f]=J.t(h.a,h.d+q)}}d=new Uint16Array(65536)
a0=a3.bde(i,d)
A.cAf(a4,a4.ai(),a3.z,r)
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
A.cAi(u,l+f,a1,v,a2,a1*v,a0);++f}}v=a3.z
v.toString
a3.aQp(d,v,r)
v=a3.r
if(v==null){v=a3.w
v.toString
v=a3.r=A.p6(!1,v*a3.x+73728)}v.a=0
for(;a6<=w;++a6)for(q=0;q<s;++q){v=a3.y
v===$&&B.b()
o=v[q]
v=o.e
v===$&&B.b()
if(D.c.al(a6,v)!==0)continue
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
v.ku(u[l])}}v=a3.r
return B.bX(v.c.buffer,0,v.a)},
HU(d,e,f){return this.r6(d,e,f,null,null)},
aQp(d,e,f){var x
for(x=0;x<f;++x)e[x]=d[e[x]]},
bde(d,e){var x,w,v,u
for(x=0,w=0;w<65536;++w)if(w===0||(d[w>>>3]&1<<(w&7))>>>0!==0){v=x+1
e[x]=w
x=v}for(v=x;v<65536;v=u){u=v+1
e[v]=0}return x-1}}
A.aGN.prototype={}
A.b9Z.prototype={
NI(){return this.x},
r6(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=C.i0.Bl(A.Ao(a0.hp(),1,null,0),!1),d=f.y
if(d==null){d=f.w
d.toString
d=f.y=A.p6(!1,f.x*d)}d.a=0
x=B.a([0,0,0,0],y.t)
w=new Uint32Array(1)
v=B.bX(w.buffer,0,null)
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
if(D.c.al(a2,s)!==0)continue
s=n.f
s===$&&B.b()
m=D.c.fK(a1,s)
l=D.c.fK(u,s)
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
for(g=0;g<4;++g)f.y.aS(v[g])}break
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
for(g=0;g<2;++g)f.y.aS(v[g])}break
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
for(g=0;g<4;++g)f.y.aS(v[g])}break}}d=f.y
return B.bX(d.c.buffer,0,d.a)},
HU(d,e,f){return this.r6(d,e,f,null,null)}}
A.ba_.prototype={
NI(){return 1},
r6(d,e,f,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.c,g=A.p6(!1,(h-d.d)*2)
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
v=J.t(u,v)
$.nq()[0]=v
t=$.oB()[0]
if(t<0){s=-t
for(;r=s-1,s>0;s=r)g.aS(J.t(d.a,d.d++))}else for(s=t;r=s-1,s>=0;s=r)g.aS(J.t(d.a,d.d++))}q=B.bX(g.c.buffer,0,g.a)
p=q.length
for(o=1;o<p;++o)q[o]=q[o-1]+q[o]-128
h=i.r
if(h==null||h.length!==p)h=i.r=new Uint8Array(p)
v=D.c.aY(p+1,2)
for(n=0,m=0;!0;v=j,n=k){if(m<p){l=m+1
k=n+1
h[m]=q[n]}else break
if(l<p){m=l+1
j=v+1
h[l]=q[v]}else break}h.toString
return h},
HU(d,e,f){return this.r6(d,e,f,null,null)},
k(d){return B.o(this.w)}}
A.amr.prototype={
NI(){return this.x},
r6(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=C.i0.Bl(A.Ao(d.hp(),1,null,0),!1)
if(g==null)g=m.c.w
if(h==null)h=m.c.cx
x=e+g-1
w=f+h-1
v=m.c
u=v.w
if(x>u)x=u-1
v=v.x
if(w>v)w=v-1
m.a=x-e+1
m.b=w-f+1
t=l.length
for(s=1;s<t;++s)l[s]=l[s-1]+l[s]-128
v=m.y
if(v==null||v.length!==t)v=m.y=new Uint8Array(t)
u=D.c.aY(t+1,2)
for(r=0,q=0;!0;u=n,r=o){if(q<t){p=q+1
o=r+1
v[q]=l[r]}else break
if(p<t){q=p+1
n=u+1
v[p]=l[u]}else break}v.toString
return v},
HU(d,e,f){return this.r6(d,e,f,null,null)},
k(d){return B.o(this.w)}}
A.b34.prototype={
jo(d){var x=this.a
if(x==null)return null
return x.c[d].b},
mX(d,e,f){var x=new A.b35(B.a([],y.m))
x.aOi(e)
this.a=x
return this.jo(0)}}
A.WF.prototype={
bs7(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.b,w=this.d,v=-1,u=-1,t=0;t<x;++t){s=w.my(t)
r=w.mw(t)
q=w.mu(t)
p=w.nO(t)
if(s===d&&r===e&&q===f&&p===g)return t
o=d-s
n=e-r
m=f-q
l=g-p
k=o*o+n*n+m*m+l*l
if(u===-1){u=t
v=k}else if(k<v){u=t
v=k}}return u},
ac6(){var x,w,v,u,t,s,r,q=this
if(q.c==null)return q.d
x=q.d
w=x.a
v=new A.rY(new Uint8Array(w*4),w,4)
for(u=0;u<w;++u){t=x.my(u)
s=x.mw(u)
r=x.mu(u)
v.Q0(u,t,s,r,u===q.c?0:255)}return v}}
A.WG.prototype={
aOm(d){var x,w,v,u,t,s,r=this
r.a=d.bI()
r.b=d.bI()
r.c=d.bI()
r.d=d.bI()
x=d.cW()
r.e=(x&64)!==0
if((x&128)!==0){r.f=A.cgd(D.c.ef(1,(x&7)+1))
for(w=0;v=r.f,w<v.b;++w){u=J.t(d.a,d.d++)
t=J.t(d.a,d.d++)
s=J.t(d.a,d.d++)
v.d.oz(w,u,t,s)}}r.x=d.d-d.b}}
A.ams.prototype={}
A.al9.prototype={}
A.b6l.prototype={
nT(d){var x,w,v,u,t,s,r,q,p=this
p.f=A.cz(d,!1,null,0)
p.a=new A.al9(B.a([],y.b))
if(!p.aj1())return null
try{for(;u=p.f,t=u.d,t<u.c;){s=u.a
u.d=t+1
x=J.t(s,t)
switch(x){case 44:w=p.ap3()
if(w==null){u=p.a
return u}u=w
u.r=p.e
u.w=p.c
if(p.b!==0){if(w.f==null&&p.a.e!=null){u=p.a.e
t=u.a
s=u.b
r=u.c
u=u.d
w.f=new A.WF(t,s,r,new A.rY(new Uint8Array(B.bD(u.c)),u.a,u.b))}if(w.f!=null)w.f.c=p.d}p.a.r.push(w)
break
case 33:u=p.f
v=J.t(u.a,u.d++)
if(J.n(v,255)){u=p.f
if(u.pH(J.t(u.a,u.d++))==="NETSCAPE2.0"){t=J.t(u.a,u.d++)
s=J.t(u.a,u.d++)
if(t===3&&s===1)p.r=u.bI()}else p.TI()}else if(J.n(v,249)){u=p.f
u.toString
p.bbS(u)}else p.TI()
break
case 59:u=p.a
return u
default:break}}}catch(q){}return p.a},
bbS(d){var x,w,v,u=this
d.cW()
x=d.cW()
u.e=d.bI()
u.d=d.cW()
d.cW()
u.c=D.c.O(x,2)&7
u.b=x&1
w=d.Qq(1,0)
if(J.t(w.a,w.d)===44){++d.d
v=u.ap3()
if(v==null)return
v.r=u.e
v.w=u.c
if(u.b!==0){w=v.f
if(w==null&&u.a.e!=null){w=u.a.e
w.toString
w=v.f=A.cBi(w)}if(w!=null)w.c=u.d}u.a.r.push(v)}},
jo(d){var x,w,v,u=this,t=u.f
if(t==null||u.a==null)return null
x=u.a.r
w=x.length
if(d>=w)return null
v=x[d]
t.toString
x=v.x
x===$&&B.b()
t.d=x
return u.aTT(v)},
mX(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null
if(a5.nT(a8)==null)return a6
x=a5.a.r.length
if(x===1)return a5.jo(0)
for(x=y.p,w=a6,v=w,u=0;t=a5.a.r,u<t.length;++u){a9=t[u]
s=a5.jo(u)
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
if(t){v.mN(s)
w=s
continue}l=a9.f
if(!(l!=null)){t=a5.a.e
t.toString
l=t}t=o?a6:p.a
if(t==null)t=0
r=o?a6:p.b
if(r==null)r=0
k=A.h8(a6,a6,C.a_,0,C.b2,r,a6,0,1,l.ac6(),C.a_,t,!1)
t=a9.w
if(t===2){t=a5.a.c.a
t=!D.aa.gS(t)?t[0]:0
r=l.d
j=r.my(t)
i=r.mw(t)
h=r.mu(t)
g=t===l.c?0:255
t=new Uint8Array(4)
t[0]=j
t[1]=i
t[2]=h
t[3]=g
r=k.a
if(r!=null)r.mS(0,new A.wg(t))}else if(t!==3){t=a9.a
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
t=t==null?a6:t.gez()
t.toString
f=B.C(x,x)
for(r=l.b,e=0;e<r;++e)f.n(0,e,l.bs7(t.my(e),t.mw(e),t.mu(e),t.nO(e)))
t=k.a
if(t==null)d=a6
else{t=t.gh_(t)
t=new Uint8Array(t,0)
d=t}if(d==null){t=k.a
t=t==null?a6:t.gh_(t)
if(t==null)t=new Uint8Array(0).buffer
d=new Uint8Array(t,0)}t=w.a
if(t==null)a0=a6
else{t=t.gh_(t)
t=new Uint8Array(t,0)
a0=t}if(a0==null){t=w.a
t=t==null?a6:t.gh_(t)
if(t==null)t=new Uint8Array(0).buffer
a0=new Uint8Array(t,0)}for(a1=d.length,a2=0;a2<a1;++a2){a3=f.i(0,a0[a2])
if(a3!==-1){a3.toString
d[a2]=a3}}}}k.y=s.y
for(t=s.a,t=t.gW(t);t.q();){a4=t.gK(t)
if(a4.gaP(a4)!==0){r=a4.gmt(a4)
q=a9.a
q===$&&B.b()
p=a4.gne(a4)
o=a9.b
o===$&&B.b()
k.wW(r+q,p+o,a4)}}v.mN(k)
w=k}return v},
ap3(){var x,w=this.f
if(w.d>=w.c)return null
x=new A.ams()
x.aOm(w);++this.f.d
this.TI()
return x},
aTT(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.w==null){n.w=new Uint8Array(256)
n.x=new Uint8Array(4095)
n.y=new Uint8Array(4096)
n.z=new Uint32Array(4096)}x=n.Q=n.f.cW()
w=D.c.ev(1,x)
n.dy=w;++w
n.dx=w
n.db=w+1;++x
n.cy=x
n.cx=D.c.ev(1,x)
n.ay=0
n.CW=4098
n.at=n.ax=0
n.w[0]=0
x=n.z
x.toString
D.cs.jK(x,0,4096,4098)
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
s=A.h8(m,m,C.a_,0,C.b2,w,m,0,1,t.ac6(),C.a_,x,!1)
r=new Uint8Array(x)
x=d.e
x===$&&B.b()
if(x){x=d.b
x===$&&B.b()
for(w=x+w,q=0,p=0;q<4;++q)for(o=x+C.an9[q];o<w;o+=C.aqp[q],++p){if(!n.aj3(r))return s
n.aqJ(s,o,t,r)}}else for(o=0;o<w;++o){if(!n.aj3(r))return s
n.aqJ(s,o,t,r)}return s},
aqJ(d,e,f,g){var x,w,v,u=g.length
for(x=0;x<u;++x){w=g[x]
v=d.a
if(v!=null)v.eS(x,e,w,0,0)}},
aj1(){var x,w,v,u,t,s=this,r=s.f.pH(6)
if(r!=="GIF87a"&&r!=="GIF89a")return!1
x=s.a
x.toString
x.a=s.f.bI()
x=s.a
x.toString
x.b=s.f.bI()
w=s.f.cW()
x=s.a
x.toString
x.c=new A.wg(new Uint8Array(B.bD(B.a([s.f.cW()],y.t))));++s.f.d
if((w&128)!==0){x=s.a
x.toString
x.e=A.cgd(D.c.ef(1,(w&7)+1))
for(v=0;v<s.a.e.b;++v){x=s.f
x=J.t(x.a,x.d++)
u=s.f
u=J.t(u.a,u.d++)
t=s.f
t=J.t(t.a,t.d++)
s.a.e.d.oz(v,x,u,t)}}s.a.toString
return!0},
aj3(d){var x=this,w=x.as
w.toString
x.as=w-d.length
if(!x.aU6(d))return!1
if(x.as===0)x.TI()
return!0},
TI(){var x,w,v,u=this.f
if(u.d>=u.c)return!0
x=u.cW()
while(!0){if(x!==0){u=this.f
u=u.d<u.c}else u=!1
if(!u)break
u=this.f
w=u.d+=x
if(w>=u.c)return!0
v=u.a
u.d=w+1
x=J.t(v,w)}return!0},
aU6(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=m.ay
if(l>4095)return!1
x=d.length
w=0
if(l!==0)while(!0){if(!(l!==0&&w<x))break
v=w+1
u=m.x
u===$&&B.b()
l=m.ay=l-1
d[w]=u[l]
w=v}for(;w<x;){t=m.ch=m.aU5()
if(t==null)return!1
l=m.dx
if(t===l)return!1
u=m.dy
if(t===u){for(u=m.z,s=0;s<=4095;++s)u[s]=4098
m.db=l+1
l=m.Q+1
m.cy=l
m.cx=D.c.ev(1,l)
m.CW=4098}else{if(t<u){v=w+1
d[w]=t
w=v}else{l=m.z
if(l[t]===4098){r=m.db-2
if(t===r){t=m.CW
q=m.y
q===$&&B.b()
p=m.x
p===$&&B.b()
o=m.ay++
u=m.a22(l,t,u)
p[o]=u
q[r]=u}else return!1}s=0
while(!0){n=s+1
if(!(s<=4095&&t>m.dy&&t<=4095))break
l=m.x
l===$&&B.b()
u=m.ay++
r=m.y
r===$&&B.b()
l[u]=r[t]
t=m.z[t]
s=n}if(n>=4095||t>4095)return!1
l=m.x
l===$&&B.b()
u=m.ay
r=m.ay=u+1
l[u]=t
u=r
while(!0){if(!(u!==0&&w<x))break
v=w+1
u=m.ay=u-1
d[w]=l[u]
w=v}}l=m.CW
if(l!==4098&&m.z[m.db-2]===4098){u=m.z
r=m.db-2
u[r]=l
q=m.ch
p=m.y
o=m.dy
if(q===r){p===$&&B.b()
p[r]=m.a22(u,l,o)}else{p===$&&B.b()
q.toString
p[r]=m.a22(u,q,o)}}l=m.ch
l.toString
m.CW=l}}return!0},
aU5(){var x,w,v,u,t=this
if(t.cy>12)return null
for(;x=t.ax,w=t.cy,x<w;){x=t.aQP()
x.toString
w=t.at
v=t.ax
t.at=(w|D.c.ev(x,v))>>>0
t.ax=v+8}v=t.at
u=C.awv[w]
t.at=D.c.fC(v,w)
t.ax=x-w
x=t.db
if(x<4097){++x
t.db=x
x=x>t.cx&&w<12}else x=!1
if(x){t.cx=t.cx<<1>>>0
t.cy=w+1}return v&u},
a22(d,e,f){var x,w,v=0
while(!0){if(e>f){x=v+1
w=v<=4095
v=x}else w=!1
if(!w)break
if(e>4095)return 4098
e=d[e]}return e},
aQP(){var x,w,v=this,u=v.w,t=u[0]
if(t===0){u[0]=v.f.cW()
u=v.w
t=u[0]
if(t===0)return null
D.aa.h7(u,1,1+t,v.f.kq(t).hp())
u=v.w
x=u[1]
u[1]=2
u[0]=u[0]-1}else{w=u[1]
u[1]=w+1
x=u[w]
u[0]=t-1}return x}}
A.M0.prototype={
G(){return"IcoType."+this.b}}
A.b8A.prototype={}
A.alR.prototype={}
A.b8y.prototype={
gb_(d){return D.c.aY(A.DI.prototype.gb_.call(this,0),2)},
gN0(){return!(this.d===40&&this.f===32)&&A.DI.prototype.gN0.call(this)}}
A.b8z.prototype={
mX(d,e,f){var x,w,v,u=this,t=A.cz(e,!1,null,0)
u.a=t
x=u.b=A.cgx(t)
if(x==null)return null
t=x.e.length
if(t===1)return u.jo(0)
for(w=null,v=0;v<u.b.e.length;++v){f=u.jo(v)
if(f==null)continue
if(w==null){f.w=C.b2
w=f}else w.mN(f)}return w},
jo(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=this.a
if(a6!=null){x=this.b
x=x==null||a7>=x.d}else x=!0
if(x)return a5
w=this.b.e[a7]
x=a6.a
a6=a6.b+w.e
v=w.d
u=J.aPY(x,a6,a6+v)
t=new A.asf(A.cgZ())
y.D.a(u)
if(t.GI(u))return t.d4(0,u)
s=A.p6(!1,14)
s.ku(19778)
s.hW(v)
s.hW(0)
s.hW(0)
a6=A.cz(u,!1,a5,0)
x=A.cdB(A.cz(B.bX(s.c.buffer,0,s.a),!1,a5,0))
v=a6.d
r=a6.ai()
q=a6.ai()
p=$.hk()
p[0]=q
q=$.kQ()
o=q[0]
p[0]=a6.ai()
q=q[0]
n=a6.bI()
m=a6.bI()
l=C.Kz[a6.ai()]
a6.ai()
p[0]=a6.ai()
p[0]=a6.ai()
p=a6.ai()
a6.ai()
k=new A.b8y(x,o,q,r,n,m,l,p,v)
k.aeU(a6,x)
if(r!==40&&n!==1)return a5
j=p===0&&m<=8?40+4*D.c.ef(1,m):40+4*p
x.b=j
s.a-=4
s.hW(j)
i=A.cz(u,!1,a5,0)
h=new A.b_v(!0)
h.a=i
h.b=k
g=h.jo(0)
if(m>=32)return g
f=32-D.c.al(o,32)
e=D.c.aY(f===32?o:o+f,8)
for(a6=1/q<0,x=q<0,q=q===0,d=0;d<D.c.aY(A.DI.prototype.gb_.call(k,0),2);++d){if(!(q?a6:x))a0=d
else{v=g.a
v=v==null?a5:v.b
a0=(v==null?0:v)-1-d}a1=i.jj(e)
i.d=i.d+(a1.c-a1.d)
v=g.a
a2=v==null?a5:v.e1(0,a0,a5)
if(a2==null)a2=new A.eX()
for(a3=0;a3<o;){v=J.t(a1.a,a1.d++)
a4=7
while(!0){if(!(a4>-1&&a3<o))break
if((v&D.c.ev(1,a4))>>>0!==0)a2.saP(0,0)
a2.q();++a3;--a4}}}return g}}
A.afL.prototype={}
A.F6.prototype={}
A.F7.prototype={}
A.X6.prototype={
gj(d){return this.a}}
A.baq.prototype={}
A.Ay.prototype={}
A.bas.prototype={
P1(d){var x,w,v,u,t,s=this,r=A.cz(d,!0,null,0)
s.a=r
x=r.Qq(2,0)
if(J.t(x.a,x.d)!==255||J.t(x.a,x.d+1)!==216)return!1
if(s.Ez()!==216)return!1
w=s.Ez()
v=!1
u=!1
while(!0){if(w!==217){r=s.a
r=r.d<r.c}else r=!1
if(!r)break
t=s.a.bI()
if(t<2)break
r=s.a
r.d=r.d+(t-2)
switch(w){case 192:case 193:case 194:v=!0
break
case 218:u=!0
break}w=s.Ez()}return v&&u},
pG(d,e){var x,w,v,u,t,s,r,q,p=this
p.a=A.cz(e,!0,null,0)
p.bbK()
if(p.x.length!==1)throw B.e(A.bK("Only single frame JPEGs supported"))
for(x=p.Q,w=0;v=p.d,u=v.z,w<u.length;++w){t=v.y.i(0,u[w])
v=t.a
u=p.d
s=u.f
r=t.b
q=u.r
u=p.aQX(u,t)
v=v===1&&s===2?1:0
x.push(new A.afL(u,v,r===1&&q===2?1:0))}},
bbK(){var x,w,v,u,t,s=this
if(s.Ez()!==216)throw B.e(A.bK("Start Of Image marker not found."))
x=s.Ez()
while(!0){if(x!==217){w=s.a
w===$&&B.b()
w=w.d<w.c}else w=!1
if(!w)break
w=s.a
w===$&&B.b()
v=w.bI()
if(v<2)B.Y(A.bK("Invalid Block"))
w=s.a
u=w.jj(v-2)
w.d=w.d+(u.c-u.d)
switch(x){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:s.bbL(x,u)
break
case 219:s.bbP(u)
break
case 192:case 193:case 194:s.bbR(x,u)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw B.e(A.bK("Unhandled frame type "+D.c.kO(x,16)))
case 196:s.bbO(u)
break
case 221:s.e=u.bI()
break
case 218:s.bc1(u)
break
case 255:w=s.a
if(J.t(w.a,w.d)!==255)--s.a.d
break
default:w=s.a
t=!1
if(J.t(w.a,w.d+-3)===255){w=s.a
if(J.t(w.a,w.d+-2)>=192){w=s.a
w=J.t(w.a,w.d+-2)<=254}else w=t}else w=t
if(w){s.a.d-=3
break}if(x!==0)throw B.e(A.bK("Unknown JPEG marker "+D.c.kO(x,16)))
break}x=s.Ez()}},
Ez(){var x,w=this,v=w.a
v===$&&B.b()
if(v.d>=v.c)return 0
do{do{x=w.a.cW()
if(x!==255){v=w.a
v=v.d<v.c}else v=!1}while(v)
v=w.a
if(v.d>=v.c)return x
do{x=w.a.cW()
if(x===255){v=w.a
v=v.d<v.c}else v=!1}while(v)
if(x===0){v=w.a
v=v.d<v.c}else v=!1}while(v)
return x},
bbQ(d){if(d.ai()!==1165519206)return
if(d.bI()!==0)return
this.r.pG(0,d)},
bbL(d,e){var x,w,v,u,t=this,s=e
if(d===224){x=s
w=!1
if(J.t(x.a,x.d)===74){x=s
if(J.t(x.a,x.d+1)===70){x=s
if(J.t(x.a,x.d+2)===73){x=s
if(J.t(x.a,x.d+3)===70){x=s
x=J.t(x.a,x.d+4)===0}else x=w}else x=w}else x=w}else x=w
if(x){x=new A.baw()
w=s
J.t(w.a,w.d+5)
w=s
J.t(w.a,w.d+6)
w=s
J.t(w.a,w.d+7)
w=s
J.t(w.a,w.d+8)
w=s
J.t(w.a,w.d+9)
w=s
J.t(w.a,w.d+10)
w=s
J.t(w.a,w.d+11)
w=s
w=J.t(w.a,w.d+12)
x.f=w
v=s
v=J.t(v.a,v.d+13)
x.r=v
t.b=x
s.Qq(14+3*w*v,14)}}else if(d===225)t.bbQ(s)
else if(d===238){x=s
w=!1
if(J.t(x.a,x.d)===65){x=s
if(J.t(x.a,x.d+1)===100){x=s
if(J.t(x.a,x.d+2)===111){x=s
if(J.t(x.a,x.d+3)===98){x=s
if(J.t(x.a,x.d+4)===101){x=s
x=J.t(x.a,x.d+5)===0}else x=w}else x=w}else x=w}else x=w}else x=w
if(x){t.c=new A.baq()
x=s
J.t(x.a,x.d+6)
t.c.toString
x=s
J.t(x.a,x.d+7)
x=s
J.t(x.a,x.d+8)
t.c.toString
x=s
J.t(x.a,x.d+9)
x=s
J.t(x.a,x.d+10)
x=t.c
x.toString
w=s
x.d=J.t(w.a,w.d+11)}}else if(d===254)try{s.bBz()}catch(u){B.aX(u)}},
bbP(d){var x,w,v,u,t,s,r,q
for(x=d.c,w=this.w;v=d.d,u=v<x,u;){u=d.a
d.d=v+1
v=J.t(u,v)
t=D.c.O(v,4)
s=v&15
if(s>=4)throw B.e(A.bK("Invalid number of quantization tables"))
v=w[s]
if(v==null){v=new Int16Array(64)
w[s]=v}for(u=t!==0,r=0;r<64;++r){q=u?d.bI():J.t(d.a,d.d++)
v[C.r9[r]]=q}}if(u)throw B.e(A.bK("Bad length for DQT block"))},
bbR(d,e){var x,w,v,u,t,s,r,q=this
if(q.d!=null)throw B.e(A.bK("Duplicate JPG frame data found."))
x=q.d=new A.amF(B.C(y.p,y.c),B.a([],y.t))
x.b=d===194
x.c=e.cW()
x=q.d
x.toString
x.d=e.bI()
x=q.d
x.toString
x.e=e.bI()
w=e.cW()
for(x=q.w,v=0;v<w;++v){u=J.t(e.a,e.d++)
t=J.t(e.a,e.d++)
s=D.c.O(t,4)
r=J.t(e.a,e.d++)
q.d.z.push(u)
q.d.y.n(0,u,new A.Ay(s&15,t&15,x,r))}q.d.bAp()
q.x.push(q.d)},
bbO(d){var x,w,v,u,t,s,r,q,p,o,n,m
for(x=d.c,w=this.z,v=this.y;u=d.d,u<x;){t=d.a
d.d=u+1
s=J.t(t,u)
r=new Uint8Array(16)
for(q=0,p=0;p<16;++p){r[p]=J.t(d.a,d.d++)
q+=r[p]}o=d.jj(q)
d.d=d.d+(o.c-o.d)
n=o.hp()
if((s&16)!==0){s-=16
m=v}else m=w
if(m.length<=s)D.b.st(m,s+1)
m[s]=this.aR1(r,n)}},
bc1(d){var x,w,v,u,t,s,r,q=this,p=d.cW()
if(p<1||p>4)throw B.e(A.bK("Invalid SOS block"))
x=B.x2(p,new A.bat(q,d),!0,y.c)
w=d.cW()
v=d.cW()
u=d.cW()
t=D.c.O(u,4)
s=q.a
s===$&&B.b()
r=q.d
t=new A.amG(s,r,x,q.e,w,v,t&15,u&15)
s=r.w
s===$&&B.b()
t.f=s
t.r=r.b
t.vV(0)},
aR1(d,e){var x,w,v,u,t,s,r,q,p,o,n=B.a([],y.bd),m=16
while(!0){if(!(m>0&&d[m-1]===0))break;--m}x=y.T
n.push(new A.QN(B.a([],x)))
w=n[0]
for(v=0,u=0;u<m;){for(t=0;t<d[u];++t){w=n.pop()
s=w.a
r=s.length
q=w.b
if(r<=q)D.b.st(s,q+1)
s[w.b]=new A.X6(e[v])
for(;s=w.b,s>0;)w=n.pop()
w.b=s+1
n.push(w)
for(;n.length<=u;w=p){s=B.a([],x)
p=new A.QN(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.st(r,o+1)
r[w.b]=new A.F7(s)}++v}++u
if(u<m){s=B.a([],x)
p=new A.QN(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.st(r,o+1)
r[w.b]=new A.F7(s)
w=p}}return n[0].a},
aQX(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.e
d===$&&B.b()
x=a1.f
x===$&&B.b()
w=d<<3>>>0
v=new Int32Array(64)
u=new Uint8Array(64)
t=B.br(x*8,null,!1,y.ac)
for(s=a1.c,r=a1.d,q=0,p=0;p<x;++p){o=p<<3>>>0
for(n=0;n<8;++n,q=m){m=q+1
t[q]=new Uint8Array(w)}for(l=0;l<d;++l){k=s[r]
k.toString
j=a1.r
j===$&&B.b()
A.cUQ(k,j[p][l],u,v)
i=l<<3>>>0
for(h=0,g=0;g<8;++g){f=t[o+g]
for(n=0;n<8;++n,h=e){e=h+1
f[i+n]=u[h]}}}}return t}}
A.QN.prototype={}
A.amF.prototype={
bAp(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.y,w=B.q(x).c,v=B.fG(x,x.r,w);v.q();){u=x.i(0,v.d)
g.f=Math.max(g.f,u.a)
g.r=Math.max(g.r,u.b)}v=g.e
v.toString
g.w=D.d.eT(v/8/g.f)
v=g.d
v.toString
g.x=D.d.eT(v/8/g.r)
for(w=B.fG(x,x.r,w),v=y.h,t=y.bp;w.q();){s=x.i(0,w.d)
s.toString
r=g.e
r.toString
q=s.a
p=D.d.eT(D.d.eT(r/8)*q/g.f)
r=g.d
r.toString
o=s.b
n=D.d.eT(D.d.eT(r/8)*o/g.r)
m=g.w*q
l=g.x*o
k=J.ia(l,t)
for(j=0;j<l;++j){i=J.ia(m,v)
for(h=0;h<m;++h)i[h]=new Int32Array(64)
k[j]=i}s.e=p
s.f=n
s.r=k}}}
A.baw.prototype={}
A.amG.prototype={
vV(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.y,g=h.length,f=i.r
f.toString
if(f)if(i.Q===0)x=i.at===0?i.gaTM():i.gaTO()
else x=i.at===0?i.gaTD():i.gaTF()
else x=i.gaTJ()
f=g===1
if(f){w=h[0]
v=w.e
v===$&&B.b()
w=w.f
w===$&&B.b()
u=v*w}else{w=i.f
w===$&&B.b()
v=i.b.x
v===$&&B.b()
u=w*v}w=i.z
if(w==null||w===0)i.z=u
for(w=i.a,t=0;t<u;){for(s=0;s<g;++s)h[s].y=0
i.CW=0
if(f){r=h[0]
q=0
while(!0){v=i.z
v.toString
if(!(q<v))break
v=r.e
v===$&&B.b()
p=D.c.fK(t,v)
o=D.c.al(t,v)
v=r.r
v===$&&B.b()
x.$2(r,v[p][o]);++t;++q}}else{q=0
while(!0){v=i.z
v.toString
if(!(q<v))break
for(s=0;s<g;++s){r=h[s]
n=r.a
m=r.b
for(l=0;l<m;++l)for(k=0;k<n;++k)i.aTU(r,x,t,l,k)}++t;++q}}i.ch=0
v=J.t(w.a,w.d)
j=J.t(w.a,w.d+1)
if(v===255)if(j>=208&&j<=215)w.d+=2
else break}},
AO(){var x,w=this,v=w.ch
if(v>0){--v
w.ch=v
return D.c.nj(w.ay,v)&1}v=w.a
if(v.d>=v.c)return null
x=v.cW()
w.ay=x
if(x===255)if(v.cW()!==0)return null
w.ch=7
return D.c.O(w.ay,7)&1},
K0(d){var x,w=new A.F7(d)
for(;x=this.AO(),x!=null;){if(w instanceof A.F7)w=w.a[x]
if(w instanceof A.X6)return w.a}return null},
a3P(d){var x,w
for(x=0;d>0;){w=this.AO()
if(w==null)return null
x=(x<<1|w)>>>0;--d}return x},
Kl(d){var x
if(d==null)return 0
if(d===1)return this.AO()===1?1:-1
x=this.a3P(d)
if(x==null)return 0
if(x>=D.c.ev(1,d-1))return x
return x+D.c.ef(-1,d)+1},
aTK(d,e){var x,w,v,u,t,s,r=this,q=d.w
q===$&&B.b()
x=r.K0(q)
w=x===0?0:r.Kl(x)
q=d.y
q===$&&B.b()
q+=w
d.y=q
e[0]=q
for(v=1;v<64;){q=d.x
q===$&&B.b()
u=r.K0(q)
if(u==null)break
t=u&15
s=u>>>4
if(t===0){if(s<15)break
v+=16
continue}v+=s
t=r.Kl(t)
e[C.r9[v]]=t;++v}},
aTN(d,e){var x,w,v=d.w
v===$&&B.b()
x=this.K0(v)
w=x===0?0:D.c.ef(this.Kl(x),this.ax)
v=d.y
v===$&&B.b()
v+=w
d.y=v
e[0]=v},
aTP(d,e){var x=e[0],w=this.AO()
w.toString
e[0]=(x|D.c.ef(w,this.ax))>>>0},
aTE(d,e){var x,w,v,u,t,s=this,r=s.CW
if(r>0){s.CW=r-1
return}x=s.Q
w=s.as
for(r=s.ax;x<=w;){v=d.x
v===$&&B.b()
v=s.K0(v)
v.toString
u=v&15
t=v>>>4
if(u===0){if(t<15){r=s.a3P(t)
r.toString
s.CW=r+D.c.ef(1,t)-1
break}x+=16
continue}x+=t
e[C.r9[x]]=s.Kl(u)*D.c.ef(1,r);++x}},
aTG(d,e){var x,w,v,u,t,s,r,q=this,p=q.Q,o=q.as
$label0$1:for(x=q.ax,w=0;p<=o;){v=C.r9[p]
u=q.cx
switch(u){case 0:u=d.x
u===$&&B.b()
t=q.K0(u)
if(t==null)throw B.e(A.bK("Invalid progressive encoding"))
s=t&15
w=t>>>4
if(s===0)if(w<15){u=q.a3P(w)
u.toString
q.CW=u+D.c.ef(1,w)
q.cx=4}else{q.cx=1
w=16}else{if(s!==1)throw B.e(A.bK("invalid ACn encoding"))
q.cy=q.Kl(s)
q.cx=w!==0?2:3}continue $label0$1
case 1:case 2:r=e[v]
if(r!==0){u=q.AO()
u.toString
e[v]=r+D.c.ef(u,x)}else{--w
if(w===0)q.cx=u===2?3:0}break
case 3:u=e[v]
if(u!==0){r=q.AO()
r.toString
e[v]=u+D.c.ef(r,x)}else{u=q.cy
u===$&&B.b()
e[v]=D.c.ef(u,x)
q.cx=0}break
case 4:u=e[v]
if(u!==0){r=q.AO()
r.toString
e[v]=u+D.c.ef(r,x)}break}++p}if(q.cx===4)if(--q.CW===0)q.cx=0},
aTU(d,e,f,g,h){var x,w,v=this.f
v===$&&B.b()
x=D.c.fK(f,v)*d.b+g
w=D.c.al(f,v)*d.a+h
v=d.r
v===$&&B.b()
if(x>=v.length)return
v=v[x]
if(w>=v.length)return
e.$2(d,v[w])}}
A.amE.prototype={
mX(d,e,f){var x=A.cha()
x.pG(0,e)
if(x.x.length!==1)throw B.e(A.bK("only single frame JPEGs supported"))
return A.cTl(x)},
d4(d,e){return this.mX(0,e,null)}}
A.bar.prototype={
G(){return"JpegChroma."+this.b}}
A.bau.prototype={
aGl(d){d=D.d.D(D.c.bg(d,1,100))
if(this.at===d)return
this.b4g(d<50?D.d.ft(5000/d):D.c.ft(200-d*2))
this.at=d},
bra(b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=A.p6(!0,8192)
a8.xU(a9,216)
a8.xU(a9,224)
a9.ku(16)
a9.aS(74)
a9.aS(70)
a9.aS(73)
a9.aS(70)
a9.aS(0)
a9.aS(1)
a9.aS(1)
a9.aS(0)
a9.ku(1)
a9.ku(1)
a9.aS(0)
a9.aS(0)
a8.bjn(a9,b0.gw1())
a8.bjr(a9)
x=b0.gcG(0)
w=b0.gb_(0)
a8.xU(a9,192)
a9.ku(17)
a9.aS(8)
a9.ku(w)
a9.ku(x)
a9.aS(3)
a9.aS(1)
x=b1===C.HK
a9.aS(x?17:34)
a9.aS(0)
a9.aS(2)
a9.aS(17)
a9.aS(1)
a9.aS(3)
a9.aS(17)
a9.aS(1)
a8.bjq(a9)
a8.xU(a9,218)
a9.ku(12)
a9.aS(3)
a9.aS(1)
a9.aS(0)
a9.aS(2)
a9.aS(17)
a9.aS(3)
a9.aS(17)
a9.aS(0)
a9.aS(63)
a9.aS(0)
a8.ax=0
a8.ay=7
v=b0.gcG(0)
u=b0.gb_(0)
if(x){t=new Float32Array(64)
s=new Float32Array(64)
r=new Float32Array(64)
for(x=a8.c,w=a8.d,q=0,p=0,o=0,n=0;n<u;n+=8)for(m=0;m<v;m+=8){a8.J3(b0,m,n,v,u,t,s,r)
l=a8.e
k=a8.r
k===$&&B.b()
q=a8.vv(a9,t,x,q,l,k)
k=a8.f
l=a8.w
l===$&&B.b()
p=a8.vv(a9,s,w,p,k,l)
o=a8.vv(a9,r,w,o,a8.f,a8.w)}}else{x=y.C
t=J.ji(4,x)
for(j=0;j<4;++j)t[j]=new Float32Array(64)
s=J.ji(4,x)
for(j=0;j<4;++j)s[j]=new Float32Array(64)
r=J.ji(4,x)
for(j=0;j<4;++j)r[j]=new Float32Array(64)
i=new Float32Array(64)
h=new Float32Array(64)
for(x=a8.c,w=a8.d,q=0,p=0,o=0,n=0;n<u;n+=16)for(l=n+8,m=0;m<v;m+=16){k=t[0]
g=s[0]
f=r[0]
a8.J3(b0,m,n,v,u,k,g,f)
e=m+8
d=t[1]
a0=s[1]
a1=r[1]
a8.J3(b0,e,n,v,u,d,a0,a1)
a2=t[2]
a3=s[2]
a4=r[2]
a8.J3(b0,m,l,v,u,a2,a3,a4)
a5=t[3]
a6=s[3]
a7=r[3]
a8.J3(b0,e,l,v,u,a5,a6,a7)
a8.ahP(i,g,a0,a3,a6)
a8.ahP(h,f,a1,a4,a7)
a7=a8.e
a4=a8.r
a4===$&&B.b()
q=a8.vv(a9,a5,x,a8.vv(a9,a2,x,a8.vv(a9,d,x,a8.vv(a9,k,x,q,a7,a4),a8.e,a8.r),a8.e,a8.r),a8.e,a8.r)
a4=a8.f
a7=a8.w
a7===$&&B.b()
p=a8.vv(a9,i,w,p,a4,a7)
o=a8.vv(a9,h,w,o,a8.f,a8.w)}}x=a8.ay
if(x>=0){++x
a8.vD(a9,B.a([D.c.ev(1,x)-1,x],y.t))}a8.xU(a9,217)
return B.bX(a9.c.buffer,0,a9.a)},
J3(d,e,f,g,h,i,j,k){var x,w,v,u,t,s,r,q,p,o,n
for(x=this.as,w=f+1,v=0;v<64;++v){u=v>>>3
t=f+u
s=e+(v&7)
if(t>=h)t-=w+u-h
if(s>=g)s-=s-g+1
r=d.a
q=r==null?null:r.e1(s,t,null)
if(q==null)q=new A.eX()
if(q.gd8()!==C.a_)q=q.nv(C.a_)
p=D.d.D(q.gaD(q))
o=D.d.D(q.gaK())
n=D.d.D(q.gaM(q))
i[v]=D.c.O(x[p]+x[o+256]+x[n+512],16)-128
j[v]=D.c.O(x[p+768]+x[o+1024]+x[n+1280],16)-128
k[v]=D.c.O(x[p+1280]+x[o+1536]+x[n+1792],16)-128}},
ahP(d,e,f,g,h){var x,w,v
for(x=0;x<64;++x){if(x<32)w=D.c.al(x,8)<4?e:f
else w=D.c.al(x,8)<4?g:h
v=(D.c.aY(D.c.al(x,32),8)<<4>>>0)+(D.c.al(x,4)<<1>>>0)
d[x]=(w[v]+w[v+1]+w[v+8]+w[v+9])/4}},
xU(d,e){d.aS(255)
d.aS(e&255)},
b4g(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(x=i.a,w=0;w<64;++w){v=D.d.ft((C.azi[w]*d+50)/100)
if(v<1)v=1
else if(v>255)v=255
x[C.u2[w]]=v}for(u=i.b,t=0;t<64;++t){s=D.d.ft((C.azj[t]*d+50)/100)
if(s<1)s=1
else if(s>255)s=255
u[C.u2[t]]=s}for(r=i.c,q=i.d,p=0,o=0;o<8;++o)for(n=0;n<8;++n){m=C.u2[p]
l=x[m]
k=C.Ou[o]
j=C.Ou[n]
r[p]=1/(l*k*j*8)
q[p]=1/(u[m]*k*j*8);++p}},
R4(d,e){var x,w,v,u,t,s=y.t,r=B.a([B.a([],s)],y.cQ)
for(x=0,w=0,v=1;v<=16;++v){for(u=1;u<=d[v];++u){t=e[w]
if(r.length<=t)D.b.st(r,t+1)
r[t]=B.a([x,v],s);++w;++x}x*=2}return r},
b45(){var x,w,v,u,t,s,r,q,p,o,n
for(x=this.y,w=this.x,v=y.t,u=1,t=2,s=1;s<=15;++s){for(r=u;r<t;++r){q=32767+r
x[q]=s
w[q]=B.a([r,s],v)}for(q=t-1,p=-q,o=-u;p<=o;++p){n=32767+p
x[n]=s
w[n]=B.a([q+p,s],v)}u=u<<1>>>0
t=t<<1>>>0}},
b4h(){var x,w
for(x=this.as,w=0;w<256;++w){x[w]=19595*w
x[w+256]=38470*w
x[w+512]=7471*w+32768
x[w+768]=-11059*w
x[w+1024]=-21709*w
x[w+1280]=32768*w+8421375
x[w+1536]=-27439*w
x[w+1792]=-5329*w}},
aWr(d3,d4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2
for(x=0,w=0;w<8;++w){v=d3[x]
u=x+1
t=d3[u]
s=x+2
r=d3[s]
q=x+3
p=d3[q]
o=x+4
n=d3[o]
m=x+5
l=d3[m]
k=x+6
j=d3[k]
i=x+7
h=d3[i]
g=v+h
f=v-h
e=t+j
d=t-j
a0=r+l
a1=r-l
a2=p+n
a3=g+a2
a4=g-a2
a5=e+a0
d3[x]=a3+a5
d3[o]=a3-a5
a6=(e-a0+a4)*0.707106781
d3[s]=a4+a6
d3[k]=a4-a6
a3=p-n+a1
a7=d+f
a8=(a3-a7)*0.382683433
a9=0.5411961*a3+a8
b0=1.306562965*a7+a8
b1=(a1+d)*0.707106781
b2=f+b1
b3=f-b1
d3[m]=b3+a9
d3[q]=b3-a9
d3[u]=b2+b0
d3[i]=b2-b0
x+=8}for(x=0,w=0;w<8;++w){v=d3[x]
u=x+8
t=d3[u]
s=x+16
r=d3[s]
q=x+24
p=d3[q]
o=x+32
n=d3[o]
m=x+40
l=d3[m]
k=x+48
j=d3[k]
i=x+56
h=d3[i]
b4=v+h
b5=v-h
b6=t+j
b7=t-j
b8=r+l
b9=r-l
c0=p+n
c1=b4+c0
c2=b4-c0
c3=b6+b8
d3[x]=c1+c3
d3[o]=c1-c3
c4=(b6-b8+c2)*0.707106781
d3[s]=c2+c4
d3[k]=c2-c4
c1=p-n+b9
c5=b7+b5
c6=(c1-c5)*0.382683433
c7=0.5411961*c1+c6
c8=1.306562965*c5+c6
c9=(b9+b7)*0.707106781
d0=b5+c9
d1=b5-c9
d3[m]=d1+c7
d3[q]=d1-c7
d3[u]=d0+c8
d3[i]=d0-c8;++x}for(u=this.z,w=0;w<64;++w){d2=d3[w]*d4[w]
u[w]=d2>0?D.d.D(d2+0.5):D.d.D(d2-0.5)}return u},
bjn(d,e){var x,w
if(e.gS(0))return
x=A.p6(!1,8192)
e.j2(0,x)
w=B.bX(x.c.buffer,0,x.a)
this.xU(d,225)
d.ku(w.length+8)
d.hW(1165519206)
d.ku(0)
d.m_(w)},
bjr(d){var x,w,v
this.xU(d,219)
d.ku(132)
d.aS(0)
for(x=this.a,w=0;w<64;++w)d.aS(x[w])
d.aS(1)
for(x=this.b,v=0;v<64;++v)d.aS(x[v])},
bjq(d){var x,w,v,u,t,s,r,q
this.xU(d,196)
d.ku(418)
d.aS(0)
for(x=0;x<16;){++x
d.aS(C.In[x])}for(w=0;w<=11;++w)d.aS(C.px[w])
d.aS(16)
for(v=0;v<16;){++v
d.aS(C.Ip[v])}for(u=0;u<=161;++u)d.aS(C.KM[u])
d.aS(1)
for(t=0;t<16;){++t
d.aS(C.Io[t])}for(s=0;s<=11;++s)d.aS(C.px[s])
d.aS(17)
for(r=0;r<16;){++r
d.aS(C.Iq[r])}for(q=0;q<=161;++q)d.aS(C.HW[q])},
vv(d,e,f,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=a2[0],h=a2[240],g=j.aWr(e,f)
for(x=j.Q,w=0;w<64;++w)x[C.u2[w]]=g[w]
v=x[0]
v.toString
u=v-a0
if(u===0){t=a1[0]
t.toString
j.vD(d,t)}else{s=32767+u
a1.toString
t=j.y[s]
t.toString
t=a1[t]
t.toString
j.vD(d,t)
t=j.x[s]
t.toString
j.vD(d,t)}r=63
while(!0){if(!(r>0&&x[r]===0))break;--r}if(r===0){i.toString
j.vD(d,i)
return v}for(t=j.y,q=j.x,p=1;p<=r;){o=p
while(!0){if(!(x[o]===0&&o<=r))break;++o}n=o-p
if(n>=16){m=D.c.O(n,4)
for(l=1;l<=m;++l){h.toString
j.vD(d,h)}n&=15}k=x[o]
k.toString
s=32767+k
k=t[s]
k.toString
k=a2[(n<<4>>>0)+k]
k.toString
j.vD(d,k)
k=q[s]
k.toString
j.vD(d,k)
p=o+1}if(r!==63){i.toString
j.vD(d,i)}return v},
vD(d,e){var x,w=this,v=e[0],u=e[1]-1
for(;u>=0;){if((v&D.c.ev(1,u))>>>0!==0)w.ax=(w.ax|D.c.ev(1,w.ay))>>>0;--u
if(--w.ay<0){x=w.ax
if(x===255){d.aS(255)
d.aS(0)}else d.aS(x)
w.ay=7
w.ax=0}}}}
A.NE.prototype={
G(){return"PngDisposeMode."+this.b}}
A.a_R.prototype={
G(){return"PngBlendMode."+this.b}}
A.a_S.prototype={}
A.amt.prototype={}
A.Bp.prototype={
G(){return"PngFilterType."+this.b}}
A.bkF.prototype={}
A.ba0.prototype={}
A.asf.prototype={
GI(d){var x,w=A.cz(d,!0,null,0).kq(8)
for(x=0;x<8;++x)if(J.t(w.a,w.d+x)!==D.Mx[x])return!1
return!0},
nT(b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0=A.cz(b1,!0,a9,0)
a8.d=b0
x=b0.kq(8)
for(w=0;w<8;++w)if(J.t(x.a,x.d+w)!==D.Mx[w])return a9
for(b0=a8.a,v=b0.cx,u=y.t,t=b0.cy,s=y.L,r=b0.ax;!0;){q=a8.d
p=q.d-q.b
o=q.ai()
n=a8.d.pH(4)
switch(n){case"tEXt":q=a8.d
m=q.jj(o)
q.d=q.d+(m.c-m.d)
l=m.hp()
k=l.length
for(w=0;w<k;++w)if(l[w]===0){q=w+1
r.n(0,D.dx.d4(0,new Uint8Array(l.subarray(0,B.pA(0,w,k)))),D.dx.d4(0,new Uint8Array(l.subarray(q,B.pA(q,a9,k)))))
break}a8.d.d+=4
break
case"pHYs":q=a8.d
m=q.jj(o)
q.d=q.d+(m.c-m.d)
j=A.bR(m,a9,0)
j.ai()
j.ai()
J.t(j.a,j.d++)
a8.d.d+=4
break
case"IHDR":q=a8.d
m=q.jj(o)
q.d=q.d+(m.c-m.d)
i=A.bR(m,a9,0)
h=i.hp()
b0.a=i.ai()
b0.b=i.ai()
b0.c=J.t(i.a,i.d++)
b0.d=J.t(i.a,i.d++)
J.t(i.a,i.d++)
b0.f=J.t(i.a,i.d++)
b0.r=J.t(i.a,i.d++)
q=b0.d
if(!(q===0||q===2||q===3||q===4||q===6))return a9
if(b0.f!==0)return a9
switch(q){case 0:if(!D.b.p(B.a([1,2,4,8,16],u),b0.c))return a9
break
case 2:if(!D.b.p(B.a([8,16],u),b0.c))return a9
break
case 3:if(!D.b.p(B.a([1,2,4,8],u),b0.c))return a9
break
case 4:if(!D.b.p(B.a([8,16],u),b0.c))return a9
break
case 6:if(!D.b.p(B.a([8,16],u),b0.c))return a9
break}if(a8.d.ai()!==A.vO(h,A.vO(new B.dJ(n),0)))throw B.e(A.bK("Invalid "+n+" checksum"))
break
case"PLTE":q=a8.d
m=q.jj(o)
q.d=q.d+(m.c-m.d)
b0.w=m.hp()
if(a8.d.ai()!==A.vO(s.a(b0.w),A.vO(new B.dJ(n),0)))throw B.e(A.bK("Invalid "+n+" checksum"))
break
case"tRNS":q=a8.d
m=q.jj(o)
q.d=q.d+(m.c-m.d)
b0.x=m.hp()
g=a8.d.ai()
q=b0.x
q.toString
if(g!==A.vO(q,A.vO(new B.dJ(n),0)))throw B.e(A.bK("Invalid "+n+" checksum"))
break
case"IEND":a8.d.d+=4
break
case"gAMA":if(o!==4)throw B.e(A.bK("Invalid gAMA chunk"))
a8.d.ai()
a8.d.d+=4
break
case"IDAT":t.push(p)
q=a8.d
f=q.d+=o
q.d=f+4
break
case"acTL":b0.ch=a8.d.ai()
a8.d.ai()
a8.d.d+=4
break
case"fcTL":a8.d.ai()
e=a8.d.ai()
d=a8.d.ai()
a0=a8.d.ai()
a1=a8.d.ai()
a2=a8.d.bI()
a3=a8.d.bI()
q=a8.d
q=J.t(q.a,q.d++)
f=a8.d
f=J.t(f.a,f.d++)
q=C.ayl[q]
f=C.asY[f]
v.push(new A.amt(B.a([],u),e,d,a0,a1,a2,a3,q,f))
a8.d.d+=4
break
case"fdAT":a8.d.ai()
D.b.gR(v).y.push(p)
q=a8.d
f=q.d+=o-4
q.d=f+4
break
case"bKGD":q=b0.d
if(q===3){q=a8.d
q=J.t(q.a,q.d++);--o
a4=q*3
f=b0.w
a5=f[a4]
a6=f[a4+1]
a7=f[a4+2]
f=b0.x
if(f!=null){q=D.aa.p(f,q)?0:255
f=new Uint8Array(4)
f[0]=a5
f[1]=a6
f[2]=a7
f[3]=q
b0.z=new A.Ku(f)}else{q=new Uint8Array(3)
q[0]=a5
q[1]=a6
q[2]=a7
b0.z=new A.afF(q)}}else if(q===0||q===4){a8.d.bI()
o-=2}else if(q===2||q===6){q=a8.d
q.bI()
q.bI()
q.bI()
o-=24}if(o>0)a8.d.d+=o
a8.d.d+=4
break
case"iCCP":b0.Q=a8.d.Om()
q=a8.d
J.t(q.a,q.d++)
q=b0.Q
f=a8.d
m=f.jj(o-(q.length+2))
f.d=f.d+(m.c-m.d)
b0.at=m.hp()
a8.d.d+=4
break
default:q=a8.d
f=q.d+=o
q.d=f+4
break}if(n==="IEND")break
q=a8.d
if(q.d>=q.c)return a9}return b0},
jo(b8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2=null,b3=b0.a,b4=b3.a,b5=b3.b,b6=b3.cx,b7=b6.length
if(b7===0||b8===0){w=B.a([],y.a)
b6=b3.cy
v=b6.length
for(u=0,t=0;t<v;++t){b7=b0.d
b7===$&&B.b()
b7.d=b6[t]
s=b7.ai()
r=b0.d.pH(4)
b7=b0.d
q=b7.jj(s)
b7.d=b7.d+(q.c-q.d)
p=q.hp()
u+=p.length
w.push(p)
if(b0.d.ai()!==A.vO(p,A.vO(new B.dJ(r),0)))throw B.e(A.bK("Invalid "+r+" checksum"))}b2=new Uint8Array(u)
for(b6=w.length,o=0,n=0;n<w.length;w.length===b6||(0,B.O)(w),++n){p=w[n]
J.c5v(b2,o,p)
o+=p.length}}else{if(b8>=b7)throw B.e(A.bK("Invalid Frame Number: "+b8))
m=b6[b8]
b4=m.b
b5=m.c
w=B.a([],y.a)
for(b6=m.y,u=0,t=0;t<b6.length;++t){b7=b0.d
b7===$&&B.b()
b7.d=b6[t]
s=b7.ai()
b7=b0.d
b7.pH(4)
b7.d+=4
b7=b0.d
q=b7.jj(s-4)
b7.d=b7.d+(q.c-q.d)
p=q.hp()
u+=p.length
w.push(p)}b2=new Uint8Array(u)
for(b6=w.length,o=0,n=0;n<w.length;w.length===b6||(0,B.O)(w),++n){p=w[n]
J.c5v(b2,o,p)
o+=p.length}}b6=b3.d
l=1
if(!(b6===3))if(!(b6===0)){if(b6===4)b6=2
else b6=b6===6?4:3
l=b6}x=null
try{x=C.i0.Bl(A.Ao(b2,1,b1,0),!1)}catch(k){return b1}j=A.cz(x,!0,b1,0)
b0.c=b0.b=0
i=b1
if(b3.d===3){b6=b3.w
if(b6!=null){h=b6.length/3|0
g=b3.x
b7=g!=null
f=b7?g.length:0
e=b7?4:3
i=new A.rY(new Uint8Array(h*e),h,e)
for(b7=e===4,t=0,d=0;t<h;++t,d+=3){a0=b7&&t<f?g[t]:255
i.Q0(t,b6[d],b6[d+1],b6[d+2],a0)}}}if(b3.d===0&&b3.x!=null&&i==null&&b3.c<=8){g=b3.x
a1=g.length
b6=b3.c
h=D.c.ev(1,b6)
i=new A.rY(new Uint8Array(h*4),h,4)
if(b6===1)a2=255
else if(b6===2)a2=85
else{b6=b6===4?17:1
a2=b6}for(t=0;t<h;++t){a3=t*a2
i.Q0(t,a3,a3,a3,255)}for(b6=i.b,b7=3<b6,a4=i.c,t=0;t<a1;t+=2){a5=(g[t]&255)<<8|g[t+1]&255
if(a5<h)if(b7)a4[a5*b6+3]=0}}b6=b3.c
if(b6===1)a6=C.eS
else if(b6===2)a6=C.ft
else{if(b6===4)b7=C.fu
else b7=b6===16?C.bY:C.a_
a6=b7}b7=b3.d
if(b7===0&&b3.x!=null&&b6>8)l=4
a7=A.h8(b1,b1,a6,0,C.b2,b5,b1,0,b7===2&&b3.x!=null?4:l,i,C.a_,b4,!1)
a8=b3.a
a9=b3.b
b3.a=b4
b3.b=b5
b0.e=0
if(b3.r!==0){b6=b5+7>>>3
b0.AN(j,a7,0,0,8,8,b4+7>>>3,b6)
b7=b4+3
b0.AN(j,a7,4,0,8,8,b7>>>3,b6)
b6=b5+3
b0.AN(j,a7,0,4,4,8,b7>>>2,b6>>>3)
b7=b4+1
b0.AN(j,a7,2,0,4,4,b7>>>2,b6>>>2)
b6=b5+1
b0.AN(j,a7,0,2,2,4,b7>>>1,b6>>>2)
b0.AN(j,a7,1,0,2,2,b4>>>1,b6>>>1)
b0.AN(j,a7,0,1,1,2,b4,b5>>>1)}else b0.bb2(j,a7)
b3.a=a8
b3.b=a9
b6=b3.at
if(b6!=null)a7.c=new A.X8(b3.Q,C.yr,b6)
b3=b3.ax
if(b3.a!==0)a7.bke(b3)
return a7},
mX(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(g.nT(e)==null)return f
x=g.a
w=x.cx
v=w.length
if(v===0){x=g.jo(0)
x.toString
return x}for(v=y.g,u=f,t=u,s=0;s<x.ch;++s){a0=w[s]
r=g.jo(s)
if(r==null)continue
if(t==null||u==null){t=r.atY(r.gpB())
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
o=o===(n==null?0:n)&&a0.d===0&&a0.e===0&&a0.x===C.a_H}else o=!1
if(o){q=a0.f
r.y=D.d.D((q===0||a0.r===0?0:q/a0.r)*1000)
t.mN(r)
u=r
continue}i=t.x
u=A.Ac((i===$?t.x=B.a([],v):i)[q],!1,!1)
h=p.w
if(h===C.a_J){q=p.d
o=p.e
n=x.z
if(n==null){n=new Uint8Array(4)
m=new A.Ku(n)
n[0]=0
n[1]=0
n[2]=0
n[3]=0
n=m}A.cSL(u,!1,n,q,q+p.b-1,o,o+p.c-1)}else if(h===C.a_K&&s>1){i=t.x
if(i===$)i=t.x=B.a([],v)
q=p.d
o=p.e
n=p.b
m=p.c
u=A.caK(u,i[s-2],C.wL,m,n,q,o,m,n,q,o)}q=a0.f
u.y=D.d.D((q===0||a0.r===0?0:q/a0.r)*1000)
q=a0.x===C.a_I?C.wL:C.wK
u=A.caK(u,r,q,f,f,a0.d,a0.e,f,f,f,f)
t.mN(u)}return t},
d4(d,e){return this.mX(0,e,null)},
AN(a0,a1,a2,a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=e.d
if(d===4)x=2
else if(d===2)x=3
else{d=d===6?4:1
x=d}w=x*e.c
v=D.c.O(w+7,3)
u=D.c.O(w*a6+7,3)
t=B.a([null,null],y.e)
s=B.a([0,0,0,0],y.t)
for(e=a4>1,r=a4-a2,q=a3,p=0,o=0;p<a7;++p,q+=a5,++f.e){n=C.JB[J.t(a0.a,a0.d++)]
m=a0.jj(u)
a0.d=a0.d+(m.c-m.d)
d=m.hp()
t[o]=d
o=1-o
f.aqc(n,v,d,t[o])
f.c=f.b=0
l=new A.l8(d,0,d.length,0,!0)
for(d=r<=1,k=a2,j=0;j<a6;++j,k+=a4){f.anj(l,s)
i=a1.a
i=i==null?null:i.e1(k,q,null)
f.a4h(i==null?new A.eX():i,s)
if(!d||e)for(h=0;h<a4;++h)for(i=q+h,g=0;g<r;++g)f.a4h(a1.jQ(k+g,i),s)}}},
bb2(d,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a,e=f.d
if(e===4)x=2
else if(e===2)x=3
else{e=e===6?4:1
x=e}w=x*f.c
v=f.a
u=f.b
t=D.c.O(v*w+7,3)
s=D.c.O(w+7,3)
r=B.br(t,0,!1,y.p)
q=B.a([r,r],y.S)
p=B.a([0,0,0,0],y.t)
f=a0.a
o=f.gW(f)
o.q()
for(n=0,m=0;n<u;++n,m=j){l=C.JB[J.t(d.a,d.d++)]
k=d.jj(t)
d.d=d.d+(k.c-k.d)
f=k.hp()
q[m]=f
j=1-m
g.aqc(l,s,f,q[j])
g.c=g.b=0
f=q[m]
e=f.length
i=new A.l8(f,0,e,0,!0)
for(h=0;h<v;++h){g.anj(i,p)
g.a4h(o.gK(o),p)
o.q()}}},
aqc(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=f.length
switch(d.a){case 0:break
case 1:for(x=e;x<l;++x)f[x]=f[x]+f[x-e]&255
break
case 2:for(w=g!=null,x=0;x<l;++x){v=w?g[x]:0
f[x]=f[x]+v&255}break
case 3:for(w=g!=null,x=0;x<l;++x){u=x<e?0:f[x-e]
v=w?g[x]:0
f[x]=f[x]+D.c.O(u+v,1)&255}break
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
default:throw B.e(A.bK("Invalid filter value: "+d.k(0)))}},
rB(d,e){var x,w,v,u,t=this
if(e===0)return 0
if(e===8)return d.cW()
if(e===16)return d.bI()
for(x=d.c;w=t.c,w<e;){w=d.d
if(w>=x)throw B.e(A.bK("Invalid PNG data."))
v=d.a
d.d=w+1
w=J.t(v,w)
v=t.c
t.b=D.c.ev(w,v)
t.c=v+8}if(e===1)u=1
else if(e===2)u=3
else{if(e===4)x=15
else x=0
u=x}x=w-e
w=D.c.fC(t.b,x)
t.c=x
return w&u},
anj(d,e){var x=this,w=x.a,v=w.d
switch(v){case 0:e[0]=x.rB(d,w.c)
return
case 2:e[0]=x.rB(d,w.c)
e[1]=x.rB(d,w.c)
e[2]=x.rB(d,w.c)
return
case 3:e[0]=x.rB(d,w.c)
return
case 4:e[0]=x.rB(d,w.c)
e[1]=x.rB(d,w.c)
return
case 6:e[0]=x.rB(d,w.c)
e[1]=x.rB(d,w.c)
e[2]=x.rB(d,w.c)
e[3]=x.rB(d,w.c)
return}throw B.e(A.bK("Invalid color type: "+v+"."))},
a4h(d,e){var x,w,v,u,t,s,r,q,p=this.a,o=p.d
switch(o){case 0:x=p.x
if(x!=null&&p.c>8){p=x[0]
o=x[1]
w=e[0]
d.i_(w,w,w,w!==((p&255)<<24|o&255)>>>0?d.gc0():0)
return}d.jT(e[0],0,0)
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
if(v!==((o&255)<<8|t&255)||w!==((s&255)<<8|r&255)||u!==((q&255)<<8|p&255)){d.i_(v,w,u,d.gc0())
return}}d.jT(v,w,u)
return
case 3:d.sdU(0,e[0])
return
case 4:d.jT(e[0],e[1],0)
return
case 6:d.i_(e[0],e[1],e[2],e[3])
return}throw B.e(A.bK("Invalid color type: "+o+"."))}}
A.asg.prototype={
G(){return"PngFilter."+this.b}}
A.bkD.prototype={
mN(d){var x,w,v,u,t,s,r,q,p,o=this,n=8192,m=d.a
m=m==null?null:m.gqK()
if(!(m===!0&&d.gd8()!==C.bY))m=d.gmg()<8&&!d.gqE()&&d.gpB()>1
else m=!0
if(m)d=d.nv(C.a_)
if(o.w==null){m=A.p6(!0,n)
o.w=m
m.m_(B.a([137,80,78,71,13,10,26,10],y.t))
x=A.p6(!0,n)
x.hW(d.gcG(0))
x.hW(d.gb_(0))
x.aS(d.gmg())
if(d.gqE())m=3
else if(d.gpB()===1)m=0
else if(d.gpB()===2)m=4
else m=d.gpB()===3?2:6
x.aS(m)
x.aS(0)
x.aS(0)
x.aS(0)
m=o.w
m.toString
o.rI(m,"IHDR",B.bX(x.c.buffer,0,x.a))
m=d.c
if(m!=null){x=A.p6(!0,n)
x.m_(new B.dJ(m.a))
x.aS(0)
x.aS(0)
x.m_(m.bne())
m=o.w
m.toString
o.rI(m,"iCCP",B.bX(x.c.buffer,0,x.a))}if(d.gqE()){m=o.a
if(m!=null){m=m.a
m===$&&B.b()
o.arG(m)}else{m=d.a
m=m==null?null:m.gez()
m.toString
o.arG(m)}}if(o.r){x=A.p6(!0,n)
m=o.e
m===$&&B.b()
x.hW(m)
x.hW(o.c)
m=o.w
m.toString
o.rI(m,"acTL",B.bX(x.c.buffer,0,x.a))}}w=d.gqE()?1:d.gpB()
v=d.gd8()===C.bY?2:1
m=d.gcG(0)
u=d.gb_(0)
t=d.gb_(0)
s=new Uint8Array(m*u*w*v+t)
o.bb3(0,d,s)
r=C.El.avu(s,o.d)
m=d.d
if(m!=null)for(m=B.fG(m,m.r,B.q(m).c);m.q();){u=m.d
t=d.d.i(0,u)
t.toString
x=new A.aqK(!0,new Uint8Array(8192))
x.m_(D.oB.cD(u))
x.aS(0)
x.m_(D.oB.cD(t))
u=o.w
u.toString
t=x.c.buffer
q=x.a
t=new Uint8Array(t,0,q)
o.rI(u,"tEXt",t)}if(o.r){x=A.p6(!0,n)
x.hW(o.f)
x.hW(d.gcG(0))
x.hW(d.gb_(0))
x.hW(0)
x.hW(0)
x.ku(d.y)
x.ku(1000)
x.aS(1)
x.aS(0)
m=o.w
m.toString
o.rI(m,"fcTL",B.bX(x.c.buffer,0,x.a));++o.f}if(o.f<=1){m=o.w
m.toString
o.rI(m,"IDAT",r)}else{p=A.p6(!0,n)
p.hW(o.f)
p.m_(r)
m=o.w
m.toString
o.rI(m,"fdAT",B.bX(p.c.buffer,0,p.a));++o.f}},
bsd(d){var x,w=this,v=w.w
if(v==null)return null
w.rI(v,"IEND",B.a([],y.t))
w.f=0
v=w.w
x=B.bX(v.c.buffer,0,v.a)
w.w=null
return x},
brb(d,e){var x,w,v,u,t,s=this,r=d.gkj().length
if(r<=1){s.e=1
s.r=!1
s.mN(d)}else{r=d.gkj().length
s.e=r
s.r=r>1
s.c=d.r
if(d.gqE()){x=new A.bhd(new Int32Array(256))
x.b6G(256)
x.bjX(d)
s.a=x
for(r=d.gkj(),w=r.length,v=0;v<r.length;r.length===w||(0,B.O)(r),++v){u=r[v]
if(u!==d){x.alf(u)
x.ait()
x.akV()
x.ah2()}}}for(r=d.gkj(),w=r.length,v=0;v<r.length;r.length===w||(0,B.O)(r),++v){u=r[v]
t=s.a
if(t!=null)s.mN(t.aDo(u))
else s.mN(u)}}r=s.bsd(0)
r.toString
return r},
arG(d){var x,w,v,u=this
if(d.gd8()===C.a_&&d.b===3&&d.a===256){x=u.w
x.toString
u.rI(x,"PLTE",B.bX(d.gh_(d),0,null))}else{x=d.a
w=A.p6(!0,x*3)
for(v=0;v<x;++v){w.aS(D.d.D(d.my(v)))
w.aS(D.d.D(d.mw(v)))
w.aS(D.d.D(d.mu(v)))}x=u.w
x.toString
u.rI(x,"PLTE",B.bX(w.c.buffer,0,w.a))}if(d.b===4){x=d.a
w=A.p6(!0,x)
for(v=0;v<x;++v)w.aS(D.d.D(d.nO(v)))
x=u.w
x.toString
u.rI(x,"tRNS",B.bX(w.c.buffer,0,w.a))}},
rI(d,e,f){d.hW(f.length)
d.m_(new B.dJ(e))
d.m_(f)
d.hW(A.vO(f,A.vO(new B.dJ(e),0)))},
bb3(d,e,f){var x,w,v=this,u=e.gqE()?C.aR0:v.b,t=e.gh_(0),s=e.a.gr1(),r=e.gqE()?1:e.gpB(),q=D.c.O(r*e.gmg()+7,3),p=e.gmg()+7>>>3,o=u.a,n=0,m=0,l=null,k=0
while(!0){x=e.a
x=x==null?null:x.b
if(!(k<(x==null?0:x)))break
w=new Uint8Array(t,m,s)
m+=s
switch(o){case 1:n=v.aWF(w,p,q,f,n)
break
case 2:n=v.aWG(w,l,p,f,n)
break
case 3:n=v.aWz(w,l,p,q,f,n)
break
case 4:n=v.aWC(w,l,p,q,f,n)
break
default:n=v.aWB(w,p,f,n)
break}++k
l=w}},
arA(d,e,f,g,h){var x;--d
for(;d>=0;h=x){x=h+1
g[h]=e[f+d];--d}return h},
aWB(d,e,f,g){var x,w,v=g+1
f[g]=0
x=d.length
if(e===1)for(g=v,w=0;w<x;++w,g=v){v=g+1
f[g]=d[w]}else for(g=v,w=0;w<x;w+=e)g=this.arA(e,d,w,f,g)
return g},
aWF(d,e,f,g,h){var x,w,v,u,t,s,r=h+1
g[h]=1
for(h=r,x=0;x<f;x+=e)h=this.arA(e,d,x,g,h)
w=d.length
for(v=e-1,x=f;x<w;x+=e)for(u=v,t=0;t<e;++t,--u,h=r){r=h+1
s=x+u
g[h]=d[s]-d[s-f]&255}return h},
aWG(d,e,f,g,h){var x,w,v,u,t,s,r,q=h+1
g[h]=2
x=d.length
for(w=f-1,v=e!=null,h=q,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,h=q){r=v?e[u+t]:0
q=h+1
g[h]=d[u+t]-r&255}return h},
aWz(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o=i+1
h[i]=3
x=d.length
for(w=f-1,v=e==null,i=o,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=o){r=u+t
q=r<g?0:d[r-g]
p=v?0:e[r]
o=i+1
h[i]=d[r]-(q+p>>>1)}return i},
b91(d,e,f){var x=d+e-f,w=x>d?x-d:d-x,v=x>e?x-e:e-x,u=x>f?x-f:f-x
if(w<=v&&w<=u)return d
else if(v<=u)return e
return f},
aWC(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m=i+1
h[i]=4
x=d.length
for(w=f-1,v=e==null,i=m,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=m){r=u+t
q=r<g
p=q?0:d[r-g]
o=v?0:e[r]
n=q||v?0:e[r-g]
m=i+1
h[i]=d[r]-this.b91(p,o,n)&255}return i}}
A.Bq.prototype={
G(){return"PnmFormat."+this.b}}
A.GJ.prototype={}
A.bkG.prototype={
GI(d){var x
this.b=A.cz(d,!1,null,0)
x=this.RR()
if(x==="P1"||x==="P2"||x==="P5"||x==="P3"||x==="P6")return!0
return!1},
mX(d,e,f){if(this.nT(e)==null)return null
return this.jo(0)},
nT(d){var x,w,v=this
v.b=A.cz(d,!1,null,0)
x=v.RR()
if(x==="P1"){w=v.a=new A.GJ(C.mB)
w.e=C.a_L}else if(x==="P2"){w=v.a=new A.GJ(C.mB)
w.e=C.a_M}else if(x==="P5"){w=v.a=new A.GJ(C.mB)
w.e=C.AL}else if(x==="P3"){w=v.a=new A.GJ(C.mB)
w.e=C.a_N}else if(x==="P6"){w=v.a=new A.GJ(C.mB)
w.e=C.AM}else return v.b=null
w.a=v.Kh()
w=v.a
w.toString
w.b=v.Kh()
w=v.a
if(w.a===0||w.b===0)return v.a=v.b=null
return w},
jo(d){var x,w,v,u,t,s=this,r=null,q=s.a
if(q==null)return r
x=q.e
if(x===C.a_L){x=q.a
w=A.h8(r,r,C.eS,0,C.b2,q.b,r,0,1,r,C.a_,x,!1)
for(q=w.a,q=q.gW(q);q.q();){v=q.gK(q)
if(s.RR()==="1")v.jT(1,1,1)
else v.jT(0,0,0)}return w}else if(x===C.a_M||x===C.AL){u=s.Kh()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.h8(r,r,s.awd(u),0,C.b2,q,r,0,1,r,C.a_,x,!1)
for(q=w.a,q=q.gW(q);q.q();){v=q.gK(q)
t=s.T7(s.a.e,u)
v.jT(t,t,t)}return w}else if(x===C.a_N||x===C.AM){u=s.Kh()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.h8(r,r,s.awd(u),0,C.b2,q,r,0,3,r,C.a_,x,!1)
for(q=w.a,q=q.gW(q);q.q();)q.gK(q).jT(s.T7(s.a.e,u),s.T7(s.a.e,u),s.T7(s.a.e,u))
return w}return r},
awd(d){if(d>255)return C.bY
if(d>15)return C.a_
if(d>3)return C.fu
if(d>1)return C.ft
return C.eS},
T7(d,e){if(d===C.AL||d===C.AM)return this.b.cW()
return this.Kh()},
Kh(){var x,w,v=this.RR()
if(J.b_(v)===0)return 0
try{x=B.dM(v,null)
return x}catch(w){return 0}},
RR(){var x,w,v,u,t=this.b
if(t==null)return""
x=this.c
if(x.length!==0)return D.b.iE(x,0)
w=D.e.dX(t.bBy())
if(w.length===0)return""
for(;D.e.bl(w,"#");)w=D.e.dX(this.b.azW(70))
t=y.U
v=B.I(new B.ap(B.a(w.split(" "),y.s),new A.bkH(),t),!0,t.h("u.E"))
for(u=0;u<v.length;++u)if(J.aPX(v[u],"#")){D.b.st(v,u)
break}D.b.H(x,v)
if(x.length===0)return""
return D.b.iE(x,0)}}
A.a0c.prototype={
bBx(d,e,f,g,h,i,j){switch(h){case 0:g.toString
this.bc0(d,e,f,g)
break
case 1:if(i==null)i=this.bbX(d,f)
g.toString
this.bc_(d,e,f,g,i,j)
break
default:throw B.e(A.bK("Unsupported compression: "+h))}},
bbX(d,e){var x,w=new Uint16Array(e)
for(x=0;x<e;++x)w[x]=d.bI()
return w},
bc0(d,e,f,g){var x,w=e*f
if(g===16)w*=2
if(w>d.c-d.d){x=new Uint8Array(w)
this.c=x
D.aa.jK(x,0,w,255)
return}this.c=d.kq(w).hp()},
bc_(d,e,f,g,h,i){var x,w,v,u,t,s,r=e*f
if(g===16)r*=2
x=new Uint8Array(r)
this.c=x
w=i*f
if(w>=h.length){D.aa.jK(x,0,r,255)
return}for(v=0,u=0;u<f;++u,w=t){t=w+1
s=d.jj(h[w])
d.d=d.d+(s.c-s.d)
this.aTZ(s,this.c,v)
v+=e}},
aTZ(d,e,f){var x,w,v,u,t,s,r
for(x=d.c,w=e.length;v=d.d,v<x;){u=d.a
d.d=v+1
v=J.t(u,v)
$.nq()[0]=v
t=$.oB()[0]
if(t<0){t=1-t
v=J.t(d.a,d.d++)
if(f+t>w)t=w-f
for(s=0;s<t;++s,f=r){r=f+1
e[f]=v}}else{++t
if(f+t>w)t=w-f
for(s=0;s<t;++s,f=r){r=f+1
e[f]=J.t(d.a,d.d++)}}}},
gcd(d){return this.a}}
A.t3.prototype={
G(){return"PsdColorMode."+this.b}}
A.blC.prototype={
gaxT(){$===$&&B.b()
return $},
aOQ(d){var x,w,v=this
v.as=A.cz(d,!0,null,0)
v.bbv()
if(v.c!==943870035)return
x=v.as.ai()
v.as.kq(x)
x=v.as.ai()
v.as.kq(x)
x=v.as.ai()
v.as.kq(x)
w=v.as
v.at=w.kq(w.c-w.d)},
vV(d){var x,w=this
if(w.c===943870035){x=w.as
x===$&&B.b()
x=x==null}else x=!0
if(x)return!1
w.bbY()
w.at=w.as=null
return!0},
auS(){if(!this.vV(0))return null
return this.bC7()},
bC7(){var x,w=this,v=null,u=w.y
if(u!=null)return u
u=w.a
u=A.h8(v,v,C.a_,0,C.b2,w.b,v,0,4,v,C.a_,u,!1)
w.y=u
u.P(0)
for(x=0;u=w.gaxT(),D.c.Il(x,u.gt(u));++x)w.gaxT().i(0,x)
u=w.y
u.toString
return u},
bbv(){var x,w,v=this,u=v.as
u===$&&B.b()
v.c=u.ai()
u=v.as.bI()
v.d=u
if(u!==1){v.c=0
return}x=v.as.kq(6)
for(w=0;w<6;++w)if(J.t(x.a,x.d+w)!==0){v.c=0
return}v.e=v.as.bI()
v.b=v.as.ai()
v.a=v.as.ai()
v.f=v.as.bI()
v.r=C.azQ[v.as.bI()]},
bbY(){var x,w,v,u,t,s,r=this,q=r.at
q===$&&B.b()
q.d=q.b
x=q.bI()
if(x===1){q=r.b
w=r.e
w===$&&B.b()
v=q*w
u=new Uint16Array(v)
for(t=0;t<v;++t)u[t]=r.at.bI()}else u=null
r.x=B.a([],y.Y)
t=0
while(!0){q=r.e
q===$&&B.b()
if(!(t<q))break
q=r.x
w=r.at
w.toString
s=t===3?-1:t
s=new A.a0c(s)
s.bBx(w,r.a,r.b,r.f,x,u,t)
q.push(s);++t}r.y=A.cF8(r.r,r.f,r.a,r.b,r.x)}}
A.blB.prototype={
mX(d,e,f){var x,w,v,u=null,t=A.ciV(e)
this.a=t
x=1
if(x===1){t=t.auS()
return t}for(w=u,v=0;v<x;++v){t=this.a
f=t==null?u:t.auS()
if(f==null)continue
if(w==null){f.w=C.ais
w=f}else w.mN(f)}return w}}
A.asN.prototype={}
A.xt.prototype={
aE(d,e){return new A.xt(this.a*e,this.b*e,this.c*e)},
a5(d,e){return new A.xt(this.a+e.a,this.b+e.b,this.c+e.c)},
a7(d,e){return new A.xt(this.a-e.a,this.b-e.b,this.c-e.c)}}
A.li.prototype={
aE(d,e){var x=this
return new A.li(x.a*e,x.b*e,x.c*e,x.d*e)},
a5(d,e){var x=this
return new A.li(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
a7(d,e){var x=this
return new A.li(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)}}
A.a0f.prototype={
gb_(d){return this.b}}
A.NT.prototype={
gb_(d){return this.f}}
A.asM.prototype={
gb_(d){return this.b}}
A.qu.prototype={
sLA(d){this.a[this.b+1]=d},
P9(){var x=this.e,w=this.d
if(x)return new A.xt(C.f1[w>>>9],C.f1[w>>>4&31],C.e8[w&15])
else return new A.xt(C.e8[w>>>7&15],C.e8[w>>>3&15],C.pm[w&7])},
Pb(){var x=this.e,w=this.d
if(x)return new A.li(C.f1[w>>>9],C.f1[w>>>4&31],C.e8[w&15],255)
else return new A.li(C.e8[w>>>7&15],C.e8[w>>>3&15],C.pm[w&7],C.pm[w>>>11&7])},
Pa(){var x=this.r,w=this.f
if(x)return new A.xt(C.f1[w>>>10],C.f1[w>>>5&31],C.f1[w&31])
else return new A.xt(C.e8[w>>>8&15],C.e8[w>>>4&15],C.e8[w&15])},
Pc(){var x=this.r,w=this.f
if(x)return new A.li(C.f1[w>>>10],C.f1[w>>>5&31],C.f1[w&31],255)
else return new A.li(C.e8[w>>>8&15],C.e8[w>>>4&15],C.e8[w&15],C.pm[w>>>12&7])},
JE(){var x=this,w=x.c?1:0,v=x.d,u=x.e?1:0,t=x.f,s=x.r?1:0
return(w|(v&16383)<<1|u<<15|(t&32767)<<16|s<<31)>>>0},
tQ(d){var x=this,w=x.a[x.b+1]
x.c=(w&1)===1
x.sLA(x.JE())
x.d=w>>>1&16383
x.sLA(x.JE())
x.e=(w>>>15&1)===1
x.sLA(x.JE())
x.f=w>>>16&32767
x.sLA(x.JE())
x.r=(w>>>31&1)===1
x.sLA(x.JE())}}
A.blD.prototype={
nT(d){var x,w=this,v=d.length,u=v-(v>>>1&1431655765)>>>0
u=(u&858993459)+(u>>>2&858993459)
if((u+(u>>>4)>>>0&252645135)*16843009>>>0>>>24===1){x=w.aTI(d)
if(x!=null){w.a=d
return w.b=x}}x=w.aTY(d)
if(x!=null){w.a=d
return w.b=x}x=w.aTW(d)
if(x!=null){w.a=d
return w.b=x}return null},
aTY(d){var x,w,v=A.cz(d,!1,null,0)
if(v.ai()!==52)return null
if(v.ai()!==55727696)return null
x=B.a([0,0,0,0],y.t)
w=new A.NT(x)
v.ai()
w.b=v.ai()
x[0]=v.cW()
x[1]=v.cW()
x[2]=v.cW()
x[3]=v.cW()
v.ai()
v.ai()
w.f=v.ai()
w.r=v.ai()
v.ai()
v.ai()
v.ai()
v.ai()
w.Q=v.ai()
return w},
aTW(d){var x,w,v=A.cz(d,!1,null,0)
if(v.ai()!==52)return null
x=new A.a0f()
x.b=v.ai()
x.a=v.ai()
v.ai()
x.d=v.ai()
v.ai()
x.f=v.ai()
v.ai()
v.ai()
v.ai()
x.y=v.ai()
w=v.ai()
x.z=w
x.Q=v.ai()
if(w!==559044176)return null
return x},
aTI(d){var x,w,v,u,t,s,r=null,q=d.length,p=A.cz(d,!1,r,0)
if(p.ai()!==0)return r
x=new A.asM()
x.b=p.ai()
x.a=p.ai()
p.ai()
p.ai()
p.ai()
p.ai()
p.ai()
p.ai()
p.ai()
w=p.ai()
x.y=w
if(w===559044176)return r
v=0
u=8
if(!(q===32)){t=0
while(!0){if(!(t<10)){v=1
break}s=t<<1>>>0
if((D.c.ef(64,s)&q)>>>0!==0){u=D.c.ef(16,t)
v=1
break}if((D.c.ef(128,s)&q)>>>0!==0){u=D.c.ef(16,t)
break}++t}if(t===10)return r}if((v+1)*2===4)return r
x.b=x.a=u
return x},
jo(d){var x,w,v=this,u=v.b
if(u==null||v.a==null)return null
if(u instanceof A.asM){u=u.a
x=v.b
x=x.gb_(x)
w=v.a
w.toString
return v.a1o(u,x,w)}else if(u instanceof A.a0f){u=v.a
u.toString
return v.aTV(u)}else if(u instanceof A.NT){u=v.a
u.toString
return v.aTX(u)}return null},
mX(d,e,f){if(this.nT(e)==null)return null
return this.jo(0)},
aTV(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=d.length
if(m<52||o.b==null)return n
x=o.b
x.toString
y.ab.a(x)
w=A.cz(d,!1,n,0)
w.d+=52
v=x.Q
if(v<1)v=(x.d&4096)!==0?6:1
if(v!==1)return n
u=x.a
t=x.b
if(u*t*x.f/8>m-52)return n
switch(x.d&255){case 16:s=A.h8(n,n,C.a_,0,C.b2,t,n,0,4,n,C.a_,u,!1)
for(x=s.a,x=x.gW(x);x.q();){r=x.gK(x)
u=J.t(w.a,w.d++)
t=J.t(w.a,w.d++)
r.saD(0,t&240)
r.saK((t&15)<<4)
r.saM(0,u&240)
r.saP(0,(u&15)<<4)}return s
case 17:s=A.h8(n,n,C.a_,0,C.b2,t,n,0,4,n,C.a_,u,!1)
for(x=s.a,x=x.gW(x);x.q();){r=x.gK(x)
q=w.bI()
p=(q&1)!==0?255:0
r.saD(0,q>>>8&248)
r.saK(q>>>3&248)
r.saM(0,(q&62)<<2)
r.saP(0,p)}return s
case 18:s=A.h8(n,n,C.a_,0,C.b2,t,n,0,4,n,C.a_,u,!1)
for(x=s.a,x=x.gW(x);x.q();){r=x.gK(x)
r.saD(0,J.t(w.a,w.d++))
r.saK(J.t(w.a,w.d++))
r.saM(0,J.t(w.a,w.d++))
r.saP(0,J.t(w.a,w.d++))}return s
case 19:s=A.h8(n,n,C.a_,0,C.b2,t,n,0,3,n,C.a_,u,!1)
for(x=s.a,x=x.gW(x);x.q();){r=x.gK(x)
q=w.bI()
r.saD(0,q>>>8&248)
r.saK(q>>>3&252)
r.saM(0,(q&31)<<3)}return s
case 20:s=A.h8(n,n,C.a_,0,C.b2,t,n,0,3,n,C.a_,u,!1)
for(x=s.a,x=x.gW(x);x.q();){r=x.gK(x)
q=w.bI()
r.saD(0,(q&31)<<3)
r.saK(q>>>2&248)
r.saM(0,q>>>7&248)}return s
case 21:s=A.h8(n,n,C.a_,0,C.b2,t,n,0,3,n,C.a_,u,!1)
for(x=s.a,x=x.gW(x);x.q();){r=x.gK(x)
r.saD(0,J.t(w.a,w.d++))
r.saK(J.t(w.a,w.d++))
r.saM(0,J.t(w.a,w.d++))}return s
case 22:s=A.h8(n,n,C.a_,0,C.b2,t,n,0,1,n,C.a_,u,!1)
for(x=s.a,x=x.gW(x);x.q();)x.gK(x).saD(0,J.t(w.a,w.d++))
return s
case 23:s=A.h8(n,n,C.a_,0,C.b2,t,n,0,4,n,C.a_,u,!1)
for(x=s.a,x=x.gW(x);x.q();){r=x.gK(x)
u=J.t(w.a,w.d++)
t=J.t(w.a,w.d++)
r.saD(0,t)
r.saK(t)
r.saM(0,t)
r.saP(0,u)}return s
case 24:return n
case 25:return x.y===0?o.ahm(u,t,w.hp()):o.a1o(u,t,w.hp())}return n},
aTX(d){var x,w,v,u=this
if(!(u.b instanceof A.NT))return null
x=A.cz(d,!1,null,0)
w=x.d+=52
v=y.aM.a(u.b)
x.d=w+v.Q
if(v.c[0]===0)switch(v.b){case 2:return u.ahm(v.r,v.f,x.hp())
case 3:return u.a1o(v.r,v.f,x.hp())}return null},
ahm(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=A.h8(b5,b5,C.a_,0,C.b2,c6,b5,0,3,b5,C.a_,c5,!1),b7=c5/4|0,b8=b7-1,b9=B.o_(c7.buffer,0,b5),c0=new A.qu(b9),c1=new A.qu(B.o_(c7.buffer,0,b5)),c2=new A.qu(B.o_(c7.buffer,0,b5)),c3=new A.qu(B.o_(c7.buffer,0,b5)),c4=new A.qu(B.o_(c7.buffer,0,b5))
for(x=0,w=0;x<b7;++x,w+=4)for(v=0,u=0;v<b7;++v,u+=4){c0.b=A.xu(v,x)<<1>>>0
c0.tQ(0)
t=b9[c0.b]
s=c0.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&b8)>>>0
o=(p+1&b8)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&b8)>>>0
k=(l+1&b8)>>>0
c1.b=A.xu(l,p)<<1>>>0
c1.tQ(0)
c2.b=A.xu(k,p)<<1>>>0
c2.tQ(0)
c3.b=A.xu(l,o)<<1>>>0
c3.tQ(0)
c4.b=A.xu(k,o)<<1>>>0
c4.tQ(0)
j=c1.P9()
i=C.cH[r][0]
h=c2.P9()
g=C.cH[r][1]
f=c3.P9()
e=C.cH[r][2]
d=c4.P9()
a0=C.cH[r][3]
a1=c1.Pa()
a2=C.cH[r][0]
a3=c2.Pa()
a4=C.cH[r][1]
a5=c3.Pa()
a6=C.cH[r][2]
a7=c4.Pa()
a8=C.cH[r][3]
a9=C.N4[s+t&3]
b0=a9[0]
b1=a9[1]
b2=D.c.O((j.a*i+h.a*g+f.a*e+d.a*a0)*b0+(a1.a*a2+a3.a*a4+a5.a*a6+a7.a*a8)*b1,7)
b3=D.c.O((j.b*i+h.b*g+f.b*e+d.b*a0)*b0+(a1.b*a2+a3.b*a4+a5.b*a6+a7.b*a8)*b1,7)
b4=D.c.O((j.c*i+h.c*g+f.c*e+d.c*a0)*b0+(a1.c*a2+a3.c*a4+a5.c*a6+a7.c*a8)*b1,7)
b1=b6.a
if(b1!=null)b1.eS(m+u,n,b2,b3,b4)
t=t>>>2;++r}}}return b6},
a1o(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=A.h8(a4,a4,C.a_,0,C.b2,b5,a4,0,4,a4,C.a_,b4,!1),a6=b4/4|0,a7=a6-1,a8=B.o_(b6.buffer,0,a4),a9=new A.qu(a8),b0=new A.qu(B.o_(b6.buffer,0,a4)),b1=new A.qu(B.o_(b6.buffer,0,a4)),b2=new A.qu(B.o_(b6.buffer,0,a4)),b3=new A.qu(B.o_(b6.buffer,0,a4))
for(x=0,w=0;x<a6;++x,w+=4)for(v=0,u=0;v<a6;++v,u+=4){a9.b=A.xu(v,x)<<1>>>0
a9.tQ(0)
t=a8[a9.b]
s=a9.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&a7)>>>0
o=(p+1&a7)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&a7)>>>0
k=(l+1&a7)>>>0
b0.b=A.xu(l,p)<<1>>>0
b0.tQ(0)
b1.b=A.xu(k,p)<<1>>>0
b1.tQ(0)
b2.b=A.xu(l,o)<<1>>>0
b2.tQ(0)
b3.b=A.xu(k,o)<<1>>>0
b3.tQ(0)
j=b0.Pb()
i=C.cH[r][0]
h=b1.Pb()
g=C.cH[r][1]
g=new A.li(j.a*i,j.b*i,j.c*i,j.d*i).a5(0,new A.li(h.a*g,h.b*g,h.c*g,h.d*g))
h=b2.Pb()
i=C.cH[r][2]
i=g.a5(0,new A.li(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.Pb()
g=C.cH[r][3]
f=i.a5(0,new A.li(h.a*g,h.b*g,h.c*g,h.d*g))
g=b0.Pc()
h=C.cH[r][0]
i=b1.Pc()
j=C.cH[r][1]
j=new A.li(g.a*h,g.b*h,g.c*h,g.d*h).a5(0,new A.li(i.a*j,i.b*j,i.c*j,i.d*j))
i=b2.Pc()
h=C.cH[r][2]
h=j.a5(0,new A.li(i.a*h,i.b*h,i.c*h,i.d*h))
i=b3.Pc()
j=C.cH[r][3]
e=h.a5(0,new A.li(i.a*j,i.b*j,i.c*j,i.d*j))
d=C.N4[s+t&3]
j=d[0]
i=d[1]
a0=D.c.O(f.a*j+e.a*i,7)
a1=D.c.O(f.b*j+e.b*i,7)
a2=D.c.O(f.c*j+e.c*i,7)
a3=D.c.O(f.d*d[2]+e.d*d[3],7)
i=a5.a
if(i!=null)i.jS(m+u,n,a0,a1,a2,a3)
t=t>>>2;++r}}}return a5}}
A.awO.prototype={
pG(d,e){var x,w=this
if(e.c-e.d<18)return
w.a=e.cW()
w.b=e.cW()
x=e.cW()
w.c=x<12?C.axA[x]:C.vw
e.bI()
w.e=e.bI()
w.f=e.cW()
e.bI()
e.bI()
w.x=e.bI()
w.y=e.bI()
w.z=e.cW()
w.Q=e.cW()},
axI(){var x=this,w=x.z
if(w!==8&&w!==16&&w!==24&&w!==32)return!1
w=x.c
if(w===C.hO||w===C.hP){if(x.e>256||x.b!==1)return!1
w=x.f
if(w!==16&&w!==24&&w!==32)return!1}else if(x.b===1)return!1
return!0}}
A.ne.prototype={
G(){return"TgaImageType."+this.b}}
A.bwg.prototype={
mX(d,e,f){if(this.nT(e)==null)return null
return this.jo(0)},
nT(d){var x,w,v,u,t=this
t.a=new A.awO(C.vw)
x=A.cz(d,!1,null,0)
t.b=x
w=x.kq(18)
t.a.pG(0,w)
if(!t.a.axI())return null
x=t.b
v=t.a
x.d+=v.a
u=v.c
if(u===C.hO||u===C.hP)v.as=x.kq(v.e*D.c.O(v.f,3)).hp()
x=t.a
x.ax=t.b.d
return x},
jo(d){var x=this,w=x.a
if(w==null)return null
w=w.c
if(w===C.a2F)return x.ahl()
else if(w===C.a2E||w===C.hP)return x.aU0()
else if(w===C.hO)return x.ahl()
return null},
ahg(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=A.cz(d,!1,null,0),m=o.a.f
if(m===16){m=o.b
m===$&&B.b()
x=m.bI()
w=x>>>7&248
v=x>>>2&248
u=(x&31)<<3
t=(x&32768)!==0?0:255
for(s=0;s<o.a.e;++s){e.tF(s,w)
e.tD(s,v)
e.tC(s,u)
e.tB(s,t)}}else{r=m===32
for(s=0;s<o.a.e;++s){m=J.t(n.a,n.d++)
q=J.t(n.a,n.d++)
p=J.t(n.a,n.d++)
t=r?J.t(n.a,n.d++):255
e.tF(s,p)
e.tD(s,q)
e.tC(s,m)
e.tB(s,t)}}},
aU0(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=h.z,f=g===16,e=f||g===32,d=h.x,a0=h.y,a1=e?4:3
h=h.c
x=A.h8(i,i,C.a_,0,C.b2,a0,i,0,a1,i,C.a_,d,h===C.hO||h===C.hP)
h=x.a
if((h==null?i:h.gez())!=null){h=j.a.as
h.toString
d=x.a
d=d==null?i:d.gez()
d.toString
j.ahg(h,d)}w=x.gcG(0)
v=x.gb_(0)-1
h=g===8
u=0
while(!0){d=j.b
d===$&&B.b()
a0=d.d
if(!(a0<d.c&&v>=0))break
a1=d.a
d.d=a0+1
a0=J.t(a1,a0)
t=(a0&127)+1
s=0
if((a0&128)!==0)if(h){d=j.b
d=J.t(d.a,d.d++)
for(r=0;r<t;++r){q=u+1
a0=x.a
if(a0!=null)a0.m0(u,v,d)
if(q>=w){--v
if(v<0){u=s
break}u=0}else u=q}}else{d=j.b
if(f){p=d.bI()
o=p>>>7&248
n=p>>>2&248
m=(p&31)<<3
l=(p&32768)!==0?0:255
for(r=0;r<t;++r){q=u+1
d=x.a
if(d!=null)d.jS(u,v,o,n,m,l)
if(q>=w){--v
if(v<0){u=s
break}u=0}else u=q}}else{d=J.t(d.a,d.d++)
a0=j.b
a0=J.t(a0.a,a0.d++)
a1=j.b
a1=J.t(a1.a,a1.d++)
if(e){k=j.b
l=J.t(k.a,k.d++)}else l=255
for(r=0;r<t;++r){q=u+1
k=x.a
if(k!=null)k.jS(u,v,a1,a0,d,l)
if(q>=w){--v
if(v<0){u=s
break}u=0}else u=q}}}else if(h)for(r=0;r<t;++r){d=j.b
d=J.t(d.a,d.d++)
q=u+1
a0=x.a
if(a0!=null)a0.m0(u,v,d)
if(q>=w){--v
if(v<0){u=s
break}u=0}else u=q}else if(f)for(r=0;r<t;++r){p=j.b.bI()
l=(p&32768)!==0?0:255
q=u+1
d=x.a
if(d!=null)d.jS(u,v,p>>>7&248,p>>>2&248,(p&31)<<3,l)
d=j.b
if(d.d>=d.c){u=q
break}if(q>=w){--v
if(v<0){u=s
break}u=0}else u=q}else for(r=0;r<t;++r){d=j.b
d=J.t(d.a,d.d++)
a0=j.b
a0=J.t(a0.a,a0.d++)
a1=j.b
a1=J.t(a1.a,a1.d++)
if(e){k=j.b
l=J.t(k.a,k.d++)}else l=255
q=u+1
k=x.a
if(k!=null)k.jS(u,v,a1,a0,d,l)
if(q>=w){--v
if(v<0){u=s
break}u=0}else u=q}if(u>=w){--v
if(v<0)break
u=0}}return x},
ahl(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b
k===$&&B.b()
x=m.a
k.d=x.ax
w=x.z
k=w===16
v=!0
if(!k)if(w!==32){u=x.c
if(u===C.hO||u===C.hP){u=x.f
u=u===16||u===32}else u=!1
v=u}u=x.x
t=x.y
s=v?4:3
x=x.c
r=A.h8(l,l,C.a_,0,C.b2,t,l,0,s,l,C.a_,u,x===C.hO||x===C.hP)
x=m.a
u=x.c
if(u===C.hO||u===C.hP){x=x.as
x.toString
u=r.a
u=u==null?l:u.gez()
u.toString
m.ahg(x,u)}if(w===8)for(q=r.gb_(0)-1;q>=0;--q){p=0
while(!0){k=r.a
k=k==null?l:k.a
if(!(p<(k==null?0:k)))break
k=m.b
k=J.t(k.a,k.d++)
x=r.a
if(x!=null)x.m0(p,q,k);++p}}else if(k)for(q=r.gb_(0)-1;q>=0;--q){p=0
while(!0){k=r.a
k=k==null?l:k.a
if(!(p<(k==null?0:k)))break
o=m.b.bI()
n=(o&32768)!==0?0:255
k=r.a
if(k!=null)k.jS(p,q,o>>>7&248,o>>>2&248,(o&31)<<3,n);++p}}else for(q=r.gb_(0)-1;q>=0;--q){p=0
while(!0){k=r.a
k=k==null?l:k.a
if(!(p<(k==null?0:k)))break
k=m.b
k=J.t(k.a,k.d++)
x=m.b
x=J.t(x.a,x.d++)
u=m.b
u=J.t(u.a,u.d++)
if(v){t=m.b
n=J.t(t.a,t.d++)}else n=255
t=r.a
if(t!=null)t.jS(p,q,u,x,k,n);++p}}return r}}
A.bwr.prototype={
iD(d){var x,w,v,u,t=this
if(d===0)return 0
if(t.c===0){t.c=8
t.b=t.a.cW()}for(x=t.a,w=0;v=t.c,d>v;){w=D.c.ev(w,v)+(t.b&C.m2[v])
d-=v
t.c=8
t.b=J.t(x.a,x.d++)}if(d>0){if(v===0){t.c=8
t.b=x.cW()}x=D.c.ev(w,d)
v=t.b
u=t.c-d
w=x+(D.c.nj(v,u)&C.m2[d])
t.c=u}return w}}
A.awT.prototype={
k(d){var x=this,w=x.a,v=$.c5j().i(0,w)
if(v!=null)return v.a+": "+x.b.k(0)+" "+x.c
return"<"+w+">: "+x.b.k(0)+" "+x.c},
op(d){var x,w,v,u=this,t=u.e
if(t!=null)return t
t=u.f
t.d=u.d
x=u.c
w=u.b
v=t.kq(x*(w!==C.S?C.im[w.a]:0))
switch(w.a){case 1:return u.e=new A.rD(new Uint8Array(B.bD(v.kq(x).hp())))
case 2:return u.e=new A.A9(x===0?"":v.pH(x-1))
case 7:return u.e=new A.rD(new Uint8Array(B.bD(v.kq(x).hp())))
case 3:return u.e=A.cgI(v,x)
case 4:return u.e=A.cgD(v,x)
case 5:return u.e=A.cgE(v,x)
case 11:return u.e=A.cgK(v,x)
case 12:return u.e=A.cgC(v,x)
case 6:return u.e=new A.uz(new Int8Array(B.bD(B.chV(v.hp().buffer,0,x))))
case 8:return u.e=A.cgH(v,x)
case 9:return u.e=A.cgF(v,x)
case 10:return u.e=A.cgG(v,x)
case 0:return null}},
gj(d){return this.e}}
A.bwt.prototype={
bpC(d,e,f,g){var x,w,v,u=this
u.r=e
u.x=u.w=0
x=D.c.aY(u.a+7,8)
for(w=0,v=0;v<g;++v){u.a1m(d,w,f)
w+=x}},
a1m(d,e,f){var x,w,v,u,t,s,r,q,p=this
p.d=0
for(x=p.a,w=!0;f<x;){for(;w;){v=p.xB(10)
u=C.Mn[v]
t=D.c.O(u,1)&15
if(t===12){u=C.t5[(v<<2&12|p.nY(2))>>>0]
s=D.c.O(u,1)
f+=D.c.O(u,4)&4095
p.kX(4-(s&7))}else if(t===0)throw B.e(A.bK("TIFFFaxDecoder0"))
else if(t===15)throw B.e(A.bK("TIFFFaxDecoder1"))
else{f+=D.c.O(u,5)&2047
p.kX(10-t)
if((u&1)===0){p.f[p.d++]=f
w=!1}}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}for(;!w;){u=C.Kf[p.nY(4)]
r=u>>>5&2047
q=!0
if(r===100){u=C.Qd[p.xB(9)]
t=D.c.O(u,1)&15
r=D.c.O(u,5)&2047
if(t===12){p.kX(5)
u=C.t5[p.nY(4)]
s=D.c.O(u,1)
r=D.c.O(u,4)&4095
p.oR(d,e,f,r)
f+=r
p.kX(4-(s&7))}else if(t===15)throw B.e(A.bK("TIFFFaxDecoder2"))
else{p.oR(d,e,f,r)
f+=r
p.kX(9-t)
if((u&1)===0){p.f[p.d++]=f
w=q}}}else{if(r===200){u=C.Ii[p.nY(2)]
r=u>>>5&2047
p.oR(d,e,f,r)
f+=r
p.kX(2-(u>>>1&15))
p.f[p.d++]=f}else{p.oR(d,e,f,r)
f+=r
p.kX(4-(u>>>1&15))
p.f[p.d++]=f}w=q}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}}p.f[p.d++]=f},
bpD(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.r=a0
e.z=3
e.x=e.w=0
x=e.a
w=D.c.aY(x+7,8)
v=B.br(2,null,!1,y.u)
e.at=a3&1
e.as=a3>>>2&1
if(e.anf()!==1)throw B.e(A.bK("TIFFFaxDecoder3"))
e.a1m(d,0,a1)
for(u=w,t=1;t<a2;++t){if(e.anf()===0){s=e.e
e.e=e.f
e.f=s
e.y=0
r=a1
q=-1
p=!0
o=0
while(!0){r.toString
if(!(r<x))break
e.aj8(q,p,v)
n=v[0]
m=v[1]
l=C.Pd[e.nY(7)]&255
k=l>>>3&15
j=l&7
if(k===0){if(!p){m.toString
e.oR(d,u,r,m-r)}e.kX(7-j)
r=m
q=r}else if(k===1){e.kX(7-j)
i=o+1
h=i+1
if(p){r+=e.Rd()
e.f[o]=r
g=e.Rc()
e.oR(d,u,r,g)
r+=g
e.f[i]=r}else{g=e.Rc()
e.oR(d,u,r,g)
r+=g
e.f[o]=r
r+=e.Rd()
e.f[i]=r}o=h
q=r}else{if(k<=8){n.toString
f=n+(k-5)
i=o+1
e.f[o]=f
p=!p
if(p)e.oR(d,u,r,f-r)
e.kX(7-j)}else throw B.e(A.bK("TIFFFaxDecoder4"))
r=f
o=i
q=r}}e.f[o]=r
e.d=o+1}else e.a1m(d,u,a1)
u+=w}},
bpI(a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.r=a4
a2.z=4
a2.x=a2.w=0
x=a2.a
w=D.c.aY(x+7,8)
v=B.br(2,null,!1,y.u)
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
a2.aj8(p,o,v)
m=v[0]
l=v[1]
k=C.Pd[a2.nY(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
a2.oR(a3,t,q,l-q)}a2.kX(7-i)
q=l
p=q}else if(j===1){a2.kX(7-i)
h=n+1
g=h+1
if(o){q+=a2.Rd()
r[n]=q
f=a2.Rc()
a2.oR(a3,t,q,f)
q+=f
r[h]=q}else{f=a2.Rc()
a2.oR(a3,t,q,f)
q+=f
r[n]=q
q+=a2.Rd()
r[h]=q}n=g
p=q}else if(j<=8){m.toString
e=m+(j-5)
h=n+1
r[n]=e
o=!o
if(o)a2.oR(a3,t,q,e-q)
a2.kX(7-i)
q=e
n=h
p=q}else if(j===11){if(a2.nY(3)!==7)throw B.e(A.bK("TIFFFaxDecoder5"))
for(d=0,a0=!1;!a0;o=a1){for(;a2.nY(1)!==1;)++d
if(d>5){d-=6
if(!o&&d>0){h=n+1
r[n]=q
n=h}q+=d
if(d>0)o=!0
a1=a2.nY(1)===0
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
a2.oR(a3,t,q,1);++q
n=h}}}else throw B.e(A.bK("TIFFFaxDecoder5 "+j))}r[n]=q
a2.d=n+1
t+=w}},
Rd(){var x,w,v,u,t,s,r=this
for(x=0,w=!0;w;){v=r.xB(10)
u=C.Mn[v]
t=D.c.O(u,1)&15
if(t===12){u=C.t5[(v<<2&12|r.nY(2))>>>0]
s=D.c.O(u,1)
x+=D.c.O(u,4)&4095
r.kX(4-(s&7))}else if(t===0)throw B.e(A.bK("TIFFFaxDecoder0"))
else if(t===15)throw B.e(A.bK("TIFFFaxDecoder1"))
else{x+=D.c.O(u,5)&2047
r.kX(10-t)
if((u&1)===0)w=!1}}return x},
Rc(){var x,w,v,u,t,s,r=this
for(x=0,w=!1;!w;){v=C.Kf[r.nY(4)]
u=v>>>5&2047
if(u===100){v=C.Qd[r.xB(9)]
t=D.c.O(v,1)&15
s=D.c.O(v,5)
if(t===12){r.kX(5)
v=C.t5[r.nY(4)]
s=D.c.O(v,1)
x+=D.c.O(v,4)&4095
r.kX(4-(s&7))}else if(t===15)throw B.e(A.bK("TIFFFaxDecoder2"))
else{x+=s&2047
r.kX(9-t)
if((v&1)===0)w=!0}}else{if(u===200){v=C.Ii[r.nY(2)]
x+=v>>>5&2047
r.kX(2-(v>>>1&15))}else{x+=u
r.kX(4-(v>>>1&15))}w=!0}}return x},
anf(){var x,w,v=this,u="TIFFFaxDecoder8",t=v.as
if(t===0){if(v.xB(12)!==1)throw B.e(A.bK("TIFFFaxDecoder6"))}else if(t===1){t=v.w
t.toString
x=8-t
if(v.xB(x)!==0)throw B.e(A.bK(u))
if(x<4)if(v.xB(8)!==0)throw B.e(A.bK(u))
for(;w=v.xB(8),w!==1;)if(w!==0)throw B.e(A.bK(u))}if(v.at===0)return 1
else return v.nY(1)},
aj8(d,e,f){var x,w=this,v=w.e,u=w.d,t=w.y,s=t>0?t-1:0
s=e?(s&4294967294)>>>0:(s|1)>>>0
for(x=s;x<u;x+=2){t=v[x]
t.toString
d.toString
if(t>d){w.y=x
f[0]=t
break}}t=x+1
if(t<u)f[1]=v[t]},
oR(d,e,f,g){var x,w,v,u,t,s=8*e+f,r=s+g,q=D.c.O(s,3),p=s&7
if(p>0){x=D.c.ev(1,7-p)
w=J.t(d.a,d.d+q)
while(!0){if(!(x>0&&s<r))break
w=(w|x)>>>0
x=x>>>1;++s}d.n(0,q,w)}q=D.c.O(s,3)
for(v=r-7;s<v;q=u){u=q+1
J.bQ(d.a,d.d+q,255)
s+=8}for(;s<r;){q=D.c.O(s,3)
v=J.t(d.a,d.d+q)
t=D.c.ev(1,7-(s&7))
J.bQ(d.a,d.d+q,(v|t)>>>0);++s}},
xB(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.r
j===$&&B.b()
x=j.d
w=j.c-x-1
v=k.x
u=k.c
t=0
s=0
if(u===1){v.toString
r=J.t(j.a,x+v)
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=J.t(u,x+j)
else{t=J.t(u,x+j)
j=k.r
s=J.t(j.a,j.d+(v+2))}}}else if(u===2){v.toString
r=C.jZ[J.t(j.a,x+v)&255]
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=C.jZ[J.t(u,x+j)&255]
else{t=C.jZ[J.t(u,x+j)&255]
j=k.r
s=C.jZ[J.t(j.a,j.d+(v+2))&255]}}}else throw B.e(A.bK("TIFFFaxDecoder7"))
j=k.w
j.toString
q=8-j
p=d-q
if(p>8){o=p-8
n=8}else{n=p
o=0}j=k.x
j.toString
j=k.x=j+1
m=D.c.ev(r&C.m2[q],p)
l=D.c.fC(t&C.zj[n],8-n)
if(o!==0){l=D.c.ev(l,o)|D.c.fC(s&C.zj[o],8-o)
k.x=j+1
k.w=o}else if(n===8){k.w=0
k.x=j+1}else k.w=n
return(m|l)>>>0},
nY(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.r
m===$&&B.b()
x=m.d
w=m.c-x-1
v=n.x
u=n.c
t=0
if(u===1){v.toString
s=J.t(m.a,x+v)
if(!(v===w)){m=n.r
t=J.t(m.a,m.d+(v+1))}}else if(u===2){v.toString
s=C.jZ[J.t(m.a,x+v)&255]
if(!(v===w)){m=n.r
t=C.jZ[J.t(m.a,m.d+(v+1))&255]}}else throw B.e(A.bK("TIFFFaxDecoder7"))
m=n.w
m.toString
r=8-m
q=d-r
p=r-d
if(p>=0){o=D.c.fC(s&C.m2[r],p)
m+=d
n.w=m
if(m===8){n.w=0
m=n.x
m.toString
n.x=m+1}}else{o=(D.c.ev(s&C.m2[r],-p)|D.c.fC(t&C.zj[q],8-q))>>>0
m=n.x
m.toString
n.x=m+1
n.w=q}return o},
kX(d){var x,w=this,v=w.w
v.toString
x=v-d
if(x<0){v=w.x
v.toString
w.x=v-1
w.w=8+x}else w.w=x}}
A.awU.prototype={
aP1(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=A.bR(a0,f,0),d=a0.bI()
for(x=g.a,w=0;w<d;++w){v=a0.bI()
u=a0.bI()
t=C.PF[u]
s=C.im[u]
r=a0.ai()
if(r*s>4)q=a0.ai()
else{q=a0.d
a0.d=q+4}p=new A.awT(v,t,r,q,e)
x.n(0,v,p)
if(v===256){o=p.op(0)
o=o==null?f:o.D(0)
g.b=o==null?0:o}else if(v===257){o=p.op(0)
o=o==null?f:o.D(0)
g.c=o==null?0:o}else if(v===262){n=p.op(0)
m=n==null?f:n.D(0)
if(m==null)m=17
if(m<17)g.d=C.awH[m]
else g.d=C.Ci}else if(v===259){o=p.op(0)
o=o==null?f:o.D(0)
g.e=o==null?0:o}else if(v===258){o=p.op(0)
o=o==null?f:o.D(0)
g.f=o==null?0:o}else if(v===277){o=p.op(0)
o=o==null?f:o.D(0)
g.r=o==null?0:o}else if(v===317){o=p.op(0)
o=o==null?f:o.D(0)
g.z=o==null?0:o}else if(v===339){o=p.op(0)
n=o==null?f:o.D(0)
g.w=C.ayo[n==null?0:n]}else if(v===320){n=p.op(0)
if(n!=null){o=n.tp().buffer
l=D.c.aY(o.byteLength,2)
o=new Uint16Array(o,0,l)
g.go=o
g.id=0
o=o.length/3|0
g.k1=o
g.k2=o*2}}}k=g.go
o=k!=null
if(o&&g.d===C.Cj)g.r=1
if(g.b===0||g.c===0)return
if(o&&g.f===8){j=k.length
for(w=0;w<j;++w)k[w]=k[w]>>>8}if(g.d===C.Ch)g.y=!0
if(x.Z(0,324)){g.ax=g.EF(322)
g.ay=g.EF(323)
g.ch=g.T6(324)
g.CW=g.T6(325)}else{g.ax=g.T5(322,g.b)
if(!x.Z(0,278))g.ay=g.T5(323,g.c)
else{i=g.EF(278)
if(i===-1)g.ay=g.c
else g.ay=i}g.ch=g.T6(273)
g.CW=g.T6(279)}o=g.b
h=g.ax
g.cx=D.c.fK(o+h-1,h)
h=g.c
o=g.ay
g.cy=D.c.fK(h+o-1,o)
g.dx=g.T5(266,1)
g.dy=g.EF(292)
g.fr=g.EF(293)
g.EF(338)
switch(g.d.a){case 0:case 1:x=g.f
if(x===1&&g.r===1)g.x=C.Cg
else if(x===4&&g.r===1)g.x=C.b1B
else if(D.c.al(x,8)===0){x=g.r
if(x===1)g.x=C.b1C
else if(x===2)g.x=C.b1D
else g.x=C.vy}break
case 2:if(D.c.al(g.f,8)===0){x=g.r
if(x===3)g.x=C.a2I
else if(x===4)g.x=C.b1F
else g.x=C.vy}break
case 3:x=!1
if(g.r===1)if(g.go!=null){x=g.f
x=x===4||x===8||x===16}if(x)g.x=C.b1E
break
case 4:if(g.f===1&&g.r===1)g.x=C.Cg
break
case 6:if(g.e===7&&g.f===8&&g.r===3)g.x=C.a2I
else{if(x.Z(0,530)){n=x.i(0,530).op(0)
g.Q=n.D(0)
x=g.as=n.iG(0,1)}else x=g.as=g.Q=2
o=g.Q
o===$&&B.b()
if(o*x===1)g.x=C.vy
else if(g.f===8&&g.r===3)g.x=C.b1G}break
default:if(D.c.al(g.f,8)===0)g.x=C.vy
break}},
d4(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.w,d=e===C.n1,a0=e===C.aV
e=g.f
if(e===1)x=C.eS
else if(e===2)x=C.ft
else{if(e===4)e=C.fu
else if(d&&e===16)e=C.fZ
else if(d&&e===32)e=C.i9
else if(d&&e===64)e=C.jF
else if(a0&&e===8)e=C.jG
else if(a0&&e===16)e=C.jH
else if(a0&&e===32)e=C.jI
else if(e===16)e=C.bY
else e=e===32?C.ia:C.a_
x=e}w=g.go!=null&&g.d===C.Cj
v=w?3:g.r
e=g.b
u=A.h8(f,f,x,0,C.b2,g.c,f,0,v,f,x,e,w)
if(w){e=u.a
e=e==null?f:e.gez()
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
e.oz(k,t[l],t[m],t[n])}}j=0
i=0
while(!0){e=g.cy
e===$&&B.b()
if(!(j<e))break
h=0
while(!0){e=g.cx
e===$&&B.b()
if(!(h<e))break
g.aU1(a2,u,h,j);++h;++i}++j}return u},
aU1(b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null
if(a8.x===C.Cg){a8.aTL(b0,b1,b2,b3)
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
else if(u===5){w=A.cz(new Uint8Array(p),!1,a9,0)
v=A.chw()
try{J.cvj(v,A.bR(b0,x,0),w.a)}catch(o){}if(a8.z===2)for(n=0;n<a8.ay;++n){m=a8.r
u=a8.ax
l=m*(n*u+1)
k=u*m
for(;m<k;++m){u=w
r=J.t(u.a,u.d+l)
j=w
i=a8.r
i=J.t(j.a,j.d+(l-i))
J.bQ(u.a,u.d+l,r+i);++l}}}else if(u===32773){w=A.cz(new Uint8Array(p),!1,a9,0)
a8.ahk(b0,p,w.a)}else if(u===32946)w=A.cz(C.i0.Bl(A.Ao(b0.HM(0,0,x),1,a9,0),!1),!1,a9,0)
else if(u===8)w=A.cz(C.i0.Bl(A.Ao(b0.HM(0,0,x),1,a9,0),!1),!1,a9,0)
else if(u===6){a8.b4Y(new A.amE().d4(0,y.D.a(b0.HM(0,0,x))),b1,s,q,a8.ax,a8.ay)
return}else throw B.e(A.bK("Unsupported Compression Type: "+u))
for(h=q,g=0;g<a8.ay;++g,++h)for(f=s,e=0;e<a8.ax;++e,++f){u=w
if(u.d>=u.c)break
u=a8.r
if(u===1){u=a8.w
if(u===C.n1){u=a8.f
if(u===32){u=w.ai()
$.hk()[0]=u
d=$.Dt()[0]}else if(u===64)d=w.Yt()
else if(u===16){u=w.bI()
r=$.h7
d=(r!=null?r:A.hT())[u]}else d=0
if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.m0(f,h,d)}}else{r=a8.f
if(r===8)if(u===C.aV){u=w
u=J.t(u.a,u.d++)
$.nq()[0]=u
d=$.oB()[0]}else{u=w
d=J.t(u.a,u.d++)}else if(r===16)if(u===C.aV){u=w.bI()
$.pE()[0]=u
d=$.r5()[0]}else d=w.bI()
else if(r===32)if(u===C.aV){u=w.ai()
$.hk()[0]=u
d=$.kQ()[0]}else d=w.ai()
else d=0
if(a8.d===C.Ch){u=b1.a
a0=u==null?a9:u.gc0()
d=(a0==null?0:a0)-d}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.m0(f,h,d)}}}else if(u===2){u=a8.f
if(u===8){if(a8.w===C.aV){u=w
u=J.t(u.a,u.d++)
$.nq()[0]=u
a1=$.oB()[0]}else{u=w
a1=J.t(u.a,u.d++)}if(a8.w===C.aV){u=w
u=J.t(u.a,u.d++)
$.nq()[0]=u
a2=$.oB()[0]}else{u=w
a2=J.t(u.a,u.d++)}}else if(u===16){if(a8.w===C.aV){u=w.bI()
$.pE()[0]=u
a1=$.r5()[0]}else a1=w.bI()
if(a8.w===C.aV){u=w.bI()
$.pE()[0]=u
a2=$.r5()[0]}else a2=w.bI()}else if(u===32){if(a8.w===C.aV){u=w.ai()
$.hk()[0]=u
a1=$.kQ()[0]}else a1=w.ai()
if(a8.w===C.aV){u=w.ai()
$.hk()[0]=u
a2=$.kQ()[0]}else a2=w.ai()}else{a1=0
a2=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.eS(f,h,a1,a2,0)}}else if(u===3){u=a8.w
if(u===C.n1){u=a8.f
if(u===32){u=w.ai()
r=$.hk()
r[0]=u
u=$.Dt()
a3=u[0]
r[0]=w.ai()
a4=u[0]
r[0]=w.ai()
a5=u[0]}else{a4=0
a5=0
if(u===64)a3=w.Yt()
else if(u===16){u=w.bI()
r=$.h7
a3=(r!=null?r:A.hT())[u]
u=w.bI()
r=$.h7
a4=(r!=null?r:A.hT())[u]
u=w.bI()
r=$.h7
a5=(r!=null?r:A.hT())[u]}else a3=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.eS(f,h,a3,a4,a5)}}else{r=a8.f
if(r===8){if(u===C.aV){u=w
u=J.t(u.a,u.d++)
$.nq()[0]=u
a3=$.oB()[0]}else{u=w
a3=J.t(u.a,u.d++)}if(a8.w===C.aV){u=w
u=J.t(u.a,u.d++)
$.nq()[0]=u
a4=$.oB()[0]}else{u=w
a4=J.t(u.a,u.d++)}if(a8.w===C.aV){u=w
u=J.t(u.a,u.d++)
$.nq()[0]=u
a5=$.oB()[0]}else{u=w
a5=J.t(u.a,u.d++)}}else if(r===16){if(u===C.aV){u=w.bI()
$.pE()[0]=u
a3=$.r5()[0]}else a3=w.bI()
if(a8.w===C.aV){u=w.bI()
$.pE()[0]=u
a4=$.r5()[0]}else a4=w.bI()
if(a8.w===C.aV){u=w.bI()
$.pE()[0]=u
a5=$.r5()[0]}else a5=w.bI()}else if(r===32){if(u===C.aV){u=w.ai()
$.hk()[0]=u
a3=$.kQ()[0]}else a3=w.ai()
if(a8.w===C.aV){u=w.ai()
$.hk()[0]=u
a4=$.kQ()[0]}else a4=w.ai()
if(a8.w===C.aV){u=w.ai()
$.hk()[0]=u
a5=$.kQ()[0]}else a5=w.ai()}else{a3=0
a4=0
a5=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.eS(f,h,a3,a4,a5)}}}else if(u>=4){u=a8.w
if(u===C.n1){u=a8.f
if(u===32){u=w.ai()
r=$.hk()
r[0]=u
u=$.Dt()
a3=u[0]
r[0]=w.ai()
a4=u[0]
r[0]=w.ai()
a5=u[0]
r[0]=w.ai()
a6=u[0]}else{a4=0
a5=0
a6=0
if(u===64)a3=w.Yt()
else if(u===16){u=w.bI()
r=$.h7
a3=(r!=null?r:A.hT())[u]
u=w.bI()
r=$.h7
a4=(r!=null?r:A.hT())[u]
u=w.bI()
r=$.h7
a5=(r!=null?r:A.hT())[u]
u=w.bI()
r=$.h7
a6=(r!=null?r:A.hT())[u]}else a3=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.jS(f,h,a3,a4,a5,a6)}}else{r=a8.f
if(r===8){if(u===C.aV){u=w
u=J.t(u.a,u.d++)
$.nq()[0]=u
a3=$.oB()[0]}else{u=w
a3=J.t(u.a,u.d++)}if(a8.w===C.aV){u=w
u=J.t(u.a,u.d++)
$.nq()[0]=u
a4=$.oB()[0]}else{u=w
a4=J.t(u.a,u.d++)}if(a8.w===C.aV){u=w
u=J.t(u.a,u.d++)
$.nq()[0]=u
a5=$.oB()[0]}else{u=w
a5=J.t(u.a,u.d++)}if(a8.w===C.aV){u=w
u=J.t(u.a,u.d++)
$.nq()[0]=u
a6=$.oB()[0]}else{u=w
a6=J.t(u.a,u.d++)}}else if(r===16){if(u===C.aV){u=w.bI()
$.pE()[0]=u
a3=$.r5()[0]}else a3=w.bI()
if(a8.w===C.aV){u=w.bI()
$.pE()[0]=u
a4=$.r5()[0]}else a4=w.bI()
if(a8.w===C.aV){u=w.bI()
$.pE()[0]=u
a5=$.r5()[0]}else a5=w.bI()
if(a8.w===C.aV){u=w.bI()
$.pE()[0]=u
a6=$.r5()[0]}else a6=w.bI()}else if(r===32){if(u===C.aV){u=w.ai()
$.hk()[0]=u
a3=$.kQ()[0]}else a3=w.ai()
if(a8.w===C.aV){u=w.ai()
$.hk()[0]=u
a4=$.kQ()[0]}else a4=w.ai()
if(a8.w===C.aV){u=w.ai()
$.hk()[0]=u
a5=$.kQ()[0]}else a5=w.ai()
if(a8.w===C.aV){u=w.ai()
$.hk()[0]=u
a6=$.kQ()[0]}else a6=w.ai()}else{a3=0
a4=0
a5=0
a6=0}if(a8.d===C.a2J){a7=A.coD(a3,a4,a5,a6)
a3=a7[0]
a4=a7[1]
a5=a7[2]
u=b1.a
a6=u==null?a9:u.gc0()
if(a6==null)a6=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.jS(f,h,a3,a4,a5,a6)}}}}}else throw B.e(A.bK("Unsupported bitsPerSample: "+u))},
b4Y(d,e,f,g,h,i){var x,w,v,u
for(x=0;x<i;++x)for(w=x+g,v=0;v<h;++v){u=d.a
u=u==null?null:u.e1(v,x,null)
if(u==null)u=new A.eX()
e.wW(v+f,w,u)}},
aTL(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.cx
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
if(r===32773){q=D.c.al(a2,8)===0?D.c.aY(a2,8)*u:(D.c.aY(a2,8)+1)*u
x=A.cz(new Uint8Array(a2*u),!1,a1,0)
a0.ahk(a3,q,x.a)}else if(r===5){x=A.cz(new Uint8Array(a2*u),!1,a1,0)
A.chw().FR(0,A.bR(a3,s,0),x.a)
if(a0.z===2)for(p=0;p<a0.c;++p){o=a0.r
n=o*(p*a0.b+1)
for(;o<a0.b*a0.r;++o){a2=x
u=J.t(a2.a,a2.d+n)
r=x
m=a0.r
m=J.t(r.a,r.d+(n-m))
J.bQ(a2.a,a2.d+n,u+m);++n}}}else if(r===2){x=A.cz(new Uint8Array(a2*u),!1,a1,0)
try{A.c96(a0.dx,a0.ax,a0.ay).bpC(x,a3,0,a0.ay)}catch(l){}}else if(r===3){x=A.cz(new Uint8Array(a2*u),!1,a1,0)
try{A.c96(a0.dx,a0.ax,a0.ay).bpD(x,a3,0,a0.ay,a0.dy)}catch(l){}}else if(r===4){x=A.cz(new Uint8Array(a2*u),!1,a1,0)
try{A.c96(a0.dx,a0.ax,a0.ay).bpI(x,a3,0,a0.ay,a0.fr)}catch(l){}}else if(r===8)x=A.cz(C.i0.Bl(A.Ao(a3.HM(0,0,s),1,a1,0),!1),!1,a1,0)
else if(r===32946)x=A.cz(C.i0.Bl(A.Ao(a3.HM(0,0,s),1,a1,0),!1),!1,a1,0)
else if(r===1)x=a3
else throw B.e(A.bK("Unsupported Compression Type: "+r))
k=new A.bwr(x)
j=a4.gc0()
a2=a0.y
i=a2?j:0
h=a2?0:j
for(g=t,f=0;f<a0.ay;++f,++g){for(e=v,d=0;d<a0.ax;++d,++e){a2=a4.a
u=a2==null
r=u?a1:a2.b
if(g<(r==null?0:r)){a2=u?a1:a2.a
a2=e>=(a2==null?0:a2)}else a2=!0
if(a2)break
a2=k.iD(1)
u=a4.a
if(a2===0){if(u!=null)u.eS(e,g,i,0,0)}else if(u!=null)u.eS(e,g,h,0,0)}k.c=0}},
ahk(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=J.cD(f),w=0,v=0;v<e;){u=w+1
t=J.t(d.a,d.d+w)
$.nq()[0]=t
s=$.oB()[0]
if(s>=0&&s<=127)for(t=s+1,w=u,r=0;r<t;++r,v=q,w=u){q=v+1
u=w+1
x.n(f,v,J.t(d.a,d.d+w))}else{t=s<=-1&&s>=-127
w=u+1
if(t){t=J.t(d.a,d.d+u)
for(p=-s+1,r=0;r<p;++r,v=q){q=v+1
x.n(f,v,t)}}}}},
T5(d,e){var x=this.a
if(!x.Z(0,d))return e
x=x.i(0,d).op(0)
x=x==null?null:x.D(0)
return x==null?0:x},
EF(d){return this.T5(d,0)},
T6(d){var x,w=this.a
if(!w.Z(0,d))return null
x=w.i(0,d)
w=x.op(0)
w.toString
return B.x2(x.c,w.gwC(w),!0,y.p)}}
A.I3.prototype={
G(){return"TiffFormat."+this.b}}
A.jT.prototype={
G(){return"TiffPhotometricType."+this.b}}
A.qK.prototype={
G(){return"TiffImageType."+this.b}}
A.bwu.prototype={}
A.bbW.prototype={
FR(d,e,f){var x,w,v,u,t,s,r=this
r.r=f
x=J.b_(f)
r.w=0
w=y.D.a(e.a)
r.e=w
r.f=w.length
r.b=e.d
if(w[0]===0&&w[1]===1)throw B.e(A.bK("Invalid LZW Data"))
r.akQ()
r.d=r.c=0
v=r.a21()
w=r.x
u=0
while(!0){if(!(v!==257&&r.w<x))break
if(v===256){r.akQ()
v=r.a21()
r.as=0
if(v===257)break
J.bQ(r.r,r.w++,v)
u=v}else{t=r.Q
t.toString
if(v<t){r.ajn(v)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bQ(r.r,r.w++,w[s])
r.afa(u,w[r.as-1])}else{r.ajn(u)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bQ(r.r,r.w++,w[s])
J.bQ(r.r,r.w++,w[r.as-1])
r.afa(u,w[r.as-1])}u=v}v=r.a21()}},
afa(d,e){var x,w=this,v=w.y
v===$&&B.b()
x=w.Q
x.toString
v[x]=e
v=w.z
v===$&&B.b()
v[x]=d
x=w.Q=x+1
if(x===511)w.a=10
else if(x===1023)w.a=11
else if(x===2047)w.a=12},
ajn(d){var x,w,v,u,t,s,r=this
r.as=0
x=r.x
r.as=1
w=r.y
w===$&&B.b()
x[0]=w[d]
v=r.z
v===$&&B.b()
u=v[d]
for(t=1;u!==4098;t=s){s=t+1
r.as=s
x[t]=w[u]
u=v[u]}},
a21(){var x,w,v,u,t=this,s=t.b,r=t.f
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
return D.c.fC(t.c,s)&C.apk[w-9]},
akQ(){var x,w,v=this
v.y=new Uint8Array(4096)
x=new Uint32Array(4096)
v.z=x
D.cs.jK(x,0,4096,4098)
for(x=v.y,w=0;w<256;++w)x[w]=w
v.a=9
v.Q=258}}
A.bws.prototype={
jo(d){var x,w,v=this.a
if(v==null)return null
v=v.f[d]
x=this.c
x===$&&B.b()
w=v.d4(0,x)
return w},
mX(d,e,f){var x=this,w=A.cz(e,!1,null,0)
x.c=w
w=x.anh(w)
x.a=w
if(w==null)return null
return x.jo(0)},
anh(d){var x,w,v,u,t,s,r,q,p,o=null,n=B.a([],y.cp),m=new A.bwu(n),l=d.bI()
if(l!==18761&&l!==19789)return o
if(l===19789)d.e=!0
else d.e=!1
v=d.bI()
m.d=v
if(v!==42)return o
u=d.ai()
t=A.bR(d,o,0)
t.d=u
x=t
for(v=y.p,s=y.aL;u!==0;){w=null
try{r=new A.awU(B.C(v,s),C.Ci,C.a2H,C.b1H)
r.aP1(x)
w=r
q=w
if(!(q.b!==0&&q.c!==0))break}catch(p){break}n.push(w)
if(n.length===1){q=n[0]
m.a=q.b
m.b=q.c}u=x.ai()
if(u!==0)x.d=u}return n.length!==0?m:o}}
A.bzd.prototype={
M7(){var x,w=this.a,v=w.qX()
if((v&1)!==0)return!1
if((v>>>1&7)>3)return!1
if((v>>>4&1)===0)return!1
this.f.d=v>>>5
if(w.qX()!==2752925)return!1
x=this.b
x.a=w.bI()
x.b=w.bI()
return!0},
vV(d){var x,w,v,u=this,t=null
if(!u.aY_())return t
x=u.b
w=x.a
u.d=A.h8(t,t,C.a_,0,C.b2,x.b,t,0,4,t,C.a_,w,!1)
u.b4a()
if(!u.b9w())return t
x=x.w
if(x.length!==0){v=A.cz(new B.dJ(x),!1,t,0)
x=u.d
x.toString
x.e=A.cfO(v)}return u.d},
aY_(){var x,w,v,u,t=this
if(!t.M7())return!1
t.fr=A.cJf()
for(x=t.dy,w=0;w<4;++w){v=new Int32Array(2)
u=new Int32Array(2)
x[w]=new A.axH(v,u,new Int32Array(2))}x=t.b
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
u=A.cle(v.jj(u))
t.c=u
v.d+=x.d
u.df(1)
t.c.df(1)
t.b9E(t.x,t.fr)
t.b9v()
if(!t.b9z(v))return!1
t.b9B()
t.c.df(1)
t.b9A()
return!0},
b9E(d,e){var x,w,v,u=this,t=u.c
t===$&&B.b()
t=t.df(1)!==0
d.a=t
if(t){d.b=u.c.df(1)!==0
if(u.c.df(1)!==0){d.c=u.c.df(1)!==0
for(t=d.d,x=0;x<4;++x){if(u.c.df(1)!==0){w=u.c
v=w.df(7)
w=w.df(1)===1?-v:v}else w=0
t[x]=w}for(t=d.e,x=0;x<4;++x){if(u.c.df(1)!==0){w=u.c
v=w.df(6)
w=w.df(1)===1?-v:v}else w=0
t[x]=w}}if(d.b)for(x=0;x<3;++x){t=e.a
t[x]=u.c.df(1)!==0?u.c.df(8):255}}else d.b=!1
return!0},
b9v(){var x,w,v,u=this,t=u.w,s=u.c
s===$&&B.b()
t.a=s.df(1)!==0
t.b=u.c.df(6)
t.c=u.c.df(3)
s=u.c.df(1)!==0
t.d=s
if(s)if(u.c.df(1)!==0){for(s=t.e,x=0;x<4;++x)if(u.c.df(1)!==0){w=u.c
v=w.df(6)
s[x]=w.df(1)===1?-v:v}for(s=t.f,x=0;x<4;++x)if(u.c.df(1)!==0){w=u.c
v=w.df(6)
s[x]=w.df(1)===1?-v:v}}if(t.b===0)s=0
else s=t.a?1:2
u.bd=s
return!0},
b9z(d){var x,w,v,u,t,s,r,q=d.c-d.d,p=this.c
p===$&&B.b()
p=D.c.ef(1,p.df(2))
this.cy=p
x=p-1
w=x*3
if(q<w)return!1
for(p=this.db,v=0,u=0;u<x;++u,w=s){t=d.Qq(3,v)
s=w+((J.t(t.a,t.d)|J.t(t.a,t.d+1)<<8|J.t(t.a,t.d+2)<<16)>>>0)
if(s>q)s=q
r=new A.a3X(d.zZ(s-w,w))
r.b=254
r.c=0
r.d=-8
p[u]=r
v+=3}p[x]=A.cle(d.zZ(q-w,d.d-d.b+w))
return w<q},
b9B(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
h===$&&B.b()
x=h.df(7)
w=i.c.df(1)!==0?i.c.If(4):0
v=i.c.df(1)!==0?i.c.If(4):0
u=i.c.df(1)!==0?i.c.If(4):0
t=i.c.df(1)!==0?i.c.If(4):0
s=i.c.df(1)!==0?i.c.If(4):0
r=i.x
for(h=i.dy,q=r.a,p=!r.c,o=r.d,n=0;n<4;++n){if(q){m=o[n]
if(p)m+=x}else{if(n>0){h[n]=h[0]
continue}m=x}l=h[n]
k=l.a
j=m+w
if(j<0)j=0
else if(j>127)j=127
k[0]=C.zL[j]
if(m<0)j=0
else j=m>127?127:m
k[1]=C.zd[j]
j=l.b
k=m+v
if(k<0)k=0
else if(k>127)k=127
j[0]=C.zL[k]*2
k=m+u
if(k<0)k=0
else if(k>127)k=127
j[1]=C.zd[k]*101581>>>16
if(j[1]<8)j[1]=8
k=l.c
j=m+t
if(j<0)j=0
else if(j>117)j=117
k[0]=C.zL[j]
j=m+s
if(j<0)j=0
else if(j>127)j=127
k[1]=C.zd[j]}},
b9A(){var x,w,v,u,t,s,r=this,q=r.fr
for(x=0;x<4;++x)for(w=0;w<8;++w)for(v=0;v<3;++v)for(u=0;u<11;++u){t=r.c
t===$&&B.b()
s=t.hY(C.arO[x][w][v][u])!==0?r.c.df(8):C.aAi[x][w][v][u]
q.b[x][w].a[v][u]=s}t=r.c
t===$&&B.b()
t=t.df(1)!==0
r.fx=t
if(t)r.fy=r.c.df(8)},
bbi(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.bd
k.toString
if(k>0){x=l.w
for(k=x.e,w=x.f,v=l.x,u=v.e,t=0;t<4;++t){if(v.a){s=u[t]
if(!v.c){r=x.b
r.toString
s+=r}}else s=x.b
for(q=0;q<=1;++q){r=l.ad
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
if(r>0){n=r>4?D.c.O(o,2):D.c.O(o,1)
m=9-r
if(n>m)n=m}else n=o
if(n<1)n=1
p.b=n
p.a=2*o+n
if(o>=40)r=2
else r=o>=15?1:0
p.d=r}else p.a=0
p.c=q!==0}}}},
b4a(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k.at
if(j!=null)m.c5=j
x=J.ia(4,y.K)
for(j=y.cr,w=0;w<4;++w)x[w]=B.a([new A.Id(),new A.Id()],j)
m.ad=x
j=m.at
j.toString
x=J.ia(j,y.bt)
for(v=0;v<j;++v){u=new Uint8Array(16)
t=new Uint8Array(8)
x[v]=new A.axI(u,t,new Uint8Array(8))}m.k2=x
m.ok=new Uint8Array(832)
j=m.at
j.toString
m.go=new Uint8Array(4*j)
u=m.p4=16*j
j=8*j
m.R8=j
t=m.bd
t.toString
s=C.yY[t]
r=s*u
q=(s/2|0)*j
m.p1=A.cz(new Uint8Array(16*u+r),!1,l,r)
j=m.R8
j.toString
m.p2=A.cz(new Uint8Array(8*j+q),!1,l,q)
j=m.R8
j.toString
m.p3=A.cz(new Uint8Array(8*j+q),!1,l,q)
j=k.a
m.RG=A.cz(new Uint8Array(j),!1,l,0)
p=k.a+1>>>1
m.rx=A.cz(new Uint8Array(p),!1,l,0)
m.ry=A.cz(new Uint8Array(p),!1,l,0)
k=m.bd
k.toString
o=C.yY[k]
if(k===2)m.ch=m.ay=0
else{k=m.y
k===$&&B.b()
k=D.c.aY(k-o,16)
m.ay=k
j=m.Q
j.toString
j=D.c.aY(j-o,16)
m.ch=j
if(k<0)m.ay=0
if(j<0)m.ch=0}k=m.as
k.toString
k=D.c.aY(k+15+o,16)
m.cx=k
j=m.z
j===$&&B.b()
j=D.c.aY(j+15+o,16)
m.CW=j
u=m.at
u.toString
if(j>u)m.CW=u
j=m.ax
j.toString
if(k>j)m.cx=j
n=u+1
x=J.ia(n,y.bQ)
for(v=0;v<n;++v)x[v]=new A.axF()
m.k3=x
k=m.at
k.toString
x=J.ia(k,y.bl)
for(v=0;v<k;++v){j=new Int16Array(384)
x[v]=new A.axG(j,new Uint8Array(16))}m.bO=x
k=m.at
k.toString
m.k4=B.br(k,l,!1,y.B)
m.bbi()
A.cIH()
m.e=new A.bze()
return!0},
b9w(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
t=j.bO
t===$&&B.b()
p=t[u]
if(w.b){u=j.c
u===$&&B.b()
u=u.hY(j.fr.a[0])
t=j.c
o=j.fr
j.k1=u===0?t.hY(o.a[1]):2+t.hY(o.a[2])}u=j.fx
u===$&&B.b()
if(u){u=j.c
u===$&&B.b()
t=j.fy
t===$&&B.b()
n=u.hY(t)!==0}else n=!1
j.b9x()
if(!n)n=j.b9C(q,s)
else{r.a=q.a=0
u=p.b
u===$&&B.b()
if(!u)r.b=q.b=0
p.f=p.e=0}u=j.bd
u.toString
if(u>0){u=j.k4
u===$&&B.b()
t=j.y1
o=j.ad
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
D.aa.jK(x,0,4,0)
j.y1=0
j.bcf()
u=j.bd
u.toString
k=!1
if(u>0){u=j.y2
t=j.ch
t===$&&B.b()
if(u>=t){t=j.cx
t.toString
t=u<=t
k=t}}if(!j.aWS(k))return!1
u=++j.y2}return!0},
bcf(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.y2,a4=a1.ok
a4===$&&B.b()
x=A.cz(a4,!1,a2,40)
w=A.cz(a1.ok,!1,a2,584)
v=A.cz(a1.ok,!1,a2,600)
a4=a3>0
u=0
while(!0){t=a1.at
t.toString
if(!(u<t))break
t=a1.bO
t===$&&B.b()
s=t[u]
if(u>0){for(r=-1;r<16;++r){t=r*32
x.qQ(t-4,4,x,t+12)}for(r=-1;r<8;++r){t=r*32
q=t-4
t+=4
w.qQ(q,4,w,t)
v.qQ(q,4,v,t)}}else{for(r=0;r<16;++r)J.bQ(x.a,x.d+(r*32-1),129)
for(r=0;r<8;++r){t=r*32-1
J.bQ(w.a,w.d+t,129)
J.bQ(v.a,v.d+t,129)}if(a4){J.bQ(v.a,v.d+-33,129)
J.bQ(w.a,w.d+-33,129)
J.bQ(x.a,x.d+-33,129)}}t=a1.k2
t===$&&B.b()
p=t[u]
o=s.a
n=s.e
if(a4){x.z2(-32,16,p.a)
w.z2(-32,8,p.b)
v.z2(-32,8,p.c)}else if(u===0){t=x.a
q=x.d+-33
J.ra(t,q,q+21,127)
q=w.a
t=w.d+-33
J.ra(q,t,t+9,127)
t=v.a
q=v.d+-33
J.ra(t,q,q+9,127)}t=s.b
t===$&&B.b()
if(t){m=A.bR(x,a2,-16)
l=m.OG()
if(a4){t=a1.at
t.toString
if(u>=t-1){t=p.a[15]
q=m.a
k=m.d
J.ra(q,k,k+4,t)}else m.z2(0,4,a1.k2[u+1].a)}j=l[0]
l[96]=j
l[64]=j
l[32]=j
for(t=s.c,i=0;i<16;++i,n=n<<2>>>0){h=A.bR(x,a2,C.Pm[i])
C.aAh[t[i]].$1(h)
n.toString
q=i*16
a1.ahN(n,new A.l8(o,q,384,q,!1),h)}}else{t=A.clh(u,a3,s.c[0])
t.toString
C.aqz[t].$1(x)
if(n!==0)for(i=0;i<16;++i,n=n<<2>>>0){h=A.bR(x,a2,C.Pm[i])
n.toString
t=i*16
a1.ahN(n,new A.l8(o,t,384,t,!1),h)}}t=s.f
t===$&&B.b()
q=A.clh(u,a3,s.d)
q.toString
C.Or[q].$1(w)
C.Or[q].$1(v)
g=new A.l8(o,256,384,256,!1)
if((t&255)!==0){q=a1.e
if((t&170)!==0){q===$&&B.b()
q.uW(g,w)
q.uW(A.bR(g,a2,16),A.bR(w,a2,4))
k=A.bR(g,a2,32)
f=A.bR(w,a2,128)
q.uW(k,f)
q.uW(A.bR(k,a2,16),A.bR(f,a2,4))}else{q===$&&B.b()
q.aB8(g,w)}}e=new A.l8(o,320,384,320,!1)
t=t>>>8
if((t&255)!==0){q=a1.e
if((t&170)!==0){q===$&&B.b()
q.uW(e,v)
q.uW(A.bR(e,a2,16),A.bR(v,a2,4))
t=A.bR(e,a2,32)
k=A.bR(v,a2,128)
q.uW(t,k)
q.uW(A.bR(t,a2,16),A.bR(k,a2,4))}else{q===$&&B.b()
q.aB8(e,v)}}t=a1.ax
t.toString
if(a3<t-1){D.aa.dz(p.a,0,16,x.hp(),480)
D.aa.dz(p.b,0,8,w.hp(),224)
D.aa.dz(p.c,0,8,v.hp(),224)}d=u*16
a0=u*8
for(r=0;r<16;++r){t=a1.p4
t.toString
q=a1.p1
q===$&&B.b()
q.qQ(d+r*t,16,x,r*32)}for(r=0;r<8;++r){t=a1.R8
t.toString
q=a1.p2
q===$&&B.b()
k=r*32
q.qQ(a0+r*t,8,w,k)
t=a1.R8
t.toString
q=a1.p3
q===$&&B.b()
q.qQ(a0+r*t,8,v,k)}++u}},
ahN(d,e,f){var x,w,v,u,t,s
switch(d>>>30){case 3:x=this.e
x===$&&B.b()
x.OK(0,e,f,!1)
break
case 2:this.e===$&&B.b()
w=J.t(e.a,e.d)+4
v=D.c.ks(D.c.O(J.t(e.a,e.d+4)*35468,16),32)
u=D.c.ks(D.c.O(J.t(e.a,e.d+4)*85627,16),32)
t=D.c.ks(D.c.O(J.t(e.a,e.d+1)*35468,16),32)
s=D.c.ks(D.c.O(J.t(e.a,e.d+1)*85627,16),32)
A.bzg(f,0,w+u,s,t)
A.bzg(f,1,w+v,s,t)
A.bzg(f,2,w-v,s,t)
A.bzg(f,3,w-u,s,t)
break
case 1:x=this.e
x===$&&B.b()
x.OL(e,f)
break
default:break}},
aVf(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.p4,j=m.k4
j===$&&B.b()
j=j[d]
j.toString
x=m.p1
x===$&&B.b()
w=A.bR(x,l,d*16)
v=j.b
u=j.a
if(u===0)return
if(m.bd===1){if(d>0){x=m.e
x===$&&B.b()
k.toString
x.adm(w,k,u+4)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.aHx(w,k,u)}if(e>0){x=m.e
x===$&&B.b()
k.toString
x.adn(w,k,u+4)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.aHA(w,k,u)}}else{t=m.R8
x=m.p2
x===$&&B.b()
s=d*8
r=A.bR(x,l,s)
x=m.p3
x===$&&B.b()
q=A.bR(x,l,s)
p=j.d
if(d>0){x=m.e
x===$&&B.b()
k.toString
s=u+4
x.Ed(w,1,k,16,s,v,p)
t.toString
x.Ed(r,1,t,8,s,v,p)
x.Ed(q,1,t,8,s,v,p)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.bsH(w,k,u,v,p)
t.toString
o=A.bR(r,l,4)
n=A.bR(q,l,4)
x.Ec(o,1,t,8,u,v,p)
x.Ec(n,1,t,8,u,v,p)}if(e>0){x=m.e
x===$&&B.b()
k.toString
s=u+4
x.Ed(w,k,1,16,s,v,p)
t.toString
x.Ed(r,t,1,8,s,v,p)
x.Ed(q,t,1,8,s,v,p)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.bDN(w,k,u,v,p)
t.toString
x=4*t
o=A.bR(r,l,x)
n=A.bR(q,l,x)
j.Ec(o,t,1,8,u,v,p)
j.Ec(n,t,1,8,u,v,p)}}},
aWE(){var x,w=this,v=w.ay
v===$&&B.b()
x=v
while(!0){v=w.CW
v.toString
if(!(x<v))break
w.aVf(x,w.y2);++x}},
aWS(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.bd
e.toString
x=C.yY[e]
e=g.p4
e.toString
w=x*e
e=g.R8
e.toString
v=(x/2|0)*e
e=g.p1
e===$&&B.b()
u=-w
t=A.bR(e,f,u)
e=g.p2
e===$&&B.b()
s=-v
r=A.bR(e,f,s)
e=g.p3
e===$&&B.b()
q=A.bR(e,f,s)
p=g.y2
e=g.cx
e.toString
o=p*16
n=(p+1)*16
if(d)g.aWE()
if(p!==0){o-=x
g.to=A.bR(t,f,0)
g.x1=A.bR(r,f,0)
g.x2=A.bR(q,f,0)}else{g.to=A.bR(g.p1,f,0)
g.x1=A.bR(g.p2,f,0)
g.x2=A.bR(g.p3,f,0)}e=p<e-1
if(e)n-=x
m=g.as
m.toString
if(n>m)n=m
g.xr=null
if(g.c5!=null&&o<n){m=g.xr=g.aU4(o,n-o)
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
j*=D.c.O(k,1)
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
g.bbC(0,o-l,m-h,n-o)}if(e){e=g.p1
m=g.p4
m.toString
e.qQ(u,w,t,16*m)
m=g.p2
u=g.R8
u.toString
m.qQ(s,v,r,8*u)
u=g.p3
m=g.R8
m.toString
u.qQ(s,v,q,8*m)}return!0},
bbC(d,e,f,g){if(f<=0||g<=0)return!1
this.aVS(e,f,g)
this.aVR(e,f,g)
return!0},
a1_(d){var x
if((d&-4194304)>>>0===0)x=D.c.O(d,14)
else x=d<0?0:255
return x},
Uu(d,e,f,g){var x=19077*d
g.n(0,0,this.a1_(x+26149*f+-3644112))
g.n(0,1,this.a1_(x-6419*e-13320*f+2229552))
g.n(0,2,this.a1_(x+33050*e+-4527440))},
Uf(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=new A.bzq(),a0=b3-1,a1=D.c.O(a0,1),a2=d.$2(J.t(a7.a,a7.d),J.t(a8.a,a8.d)),a3=d.$2(J.t(a9.a,a9.d),J.t(b0.a,b0.d)),a4=D.c.O(3*a2+a3+131074,2)
f.Uu(J.t(a5.a,a5.d),a4&255,a4>>>16,b1)
b1.n(0,3,255)
x=a6!=null
if(x){a4=D.c.O(3*a3+a2+131074,2)
w=J.t(a6.a,a6.d)
b2.toString
f.Uu(w,a4&255,a4>>>16,b2)
b2.n(0,3,255)}for(v=1;v<=a1;++v,a3=t,a2=u){u=d.$2(J.t(a7.a,a7.d+v),J.t(a8.a,a8.d+v))
t=d.$2(J.t(a9.a,a9.d+v),J.t(b0.a,b0.d+v))
s=a2+u+a3+t+524296
r=D.c.O(s+2*(u+a3),3)
q=D.c.O(s+2*(a2+t),3)
a4=D.c.O(r+a2,1)
p=D.c.O(q+u,1)
w=2*v
o=w-1
n=J.t(a5.a,a5.d+o)
m=a4&255
l=a4>>>16
k=o*4
j=A.bR(b1,e,k)
n=19077*n
i=n+26149*l+-3644112
if((i&-4194304)>>>0===0)h=D.c.O(i,14)
else h=i<0?0:255
J.bQ(j.a,j.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.O(l,14)
else h=l<0?0:255
J.bQ(j.a,j.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.O(n,14)
else h=n<0?0:255
J.bQ(j.a,j.d+2,h)
J.bQ(j.a,j.d+3,255)
n=J.t(a5.a,a5.d+w)
m=p&255
l=p>>>16
j=w*4
i=A.bR(b1,e,j)
n=19077*n
g=n+26149*l+-3644112
if((g&-4194304)>>>0===0)h=D.c.O(g,14)
else h=g<0?0:255
J.bQ(i.a,i.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.O(l,14)
else h=l<0?0:255
J.bQ(i.a,i.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.O(n,14)
else h=n<0?0:255
J.bQ(i.a,i.d+2,h)
J.bQ(i.a,i.d+3,255)
if(x){a4=D.c.O(q+a3,1)
p=D.c.O(r+t,1)
o=J.t(a6.a,a6.d+o)
n=a4&255
m=a4>>>16
b2.toString
k=A.bR(b2,e,k)
o=19077*o
l=o+26149*m+-3644112
if((l&-4194304)>>>0===0)h=D.c.O(l,14)
else h=l<0?0:255
J.bQ(k.a,k.d,h)
m=o-6419*n-13320*m+2229552
if((m&-4194304)>>>0===0)h=D.c.O(m,14)
else h=m<0?0:255
J.bQ(k.a,k.d+1,h)
o=o+33050*n+-4527440
if((o&-4194304)>>>0===0)h=D.c.O(o,14)
else h=o<0?0:255
J.bQ(k.a,k.d+2,h)
J.bQ(k.a,k.d+3,255)
w=J.t(a6.a,a6.d+w)
o=p&255
n=p>>>16
j=A.bR(b2,e,j)
w=19077*w
m=w+26149*n+-3644112
if((m&-4194304)>>>0===0)h=D.c.O(m,14)
else h=m<0?0:255
J.bQ(j.a,j.d,h)
n=w-6419*o-13320*n+2229552
if((n&-4194304)>>>0===0)h=D.c.O(n,14)
else h=n<0?0:255
J.bQ(j.a,j.d+1,h)
w=w+33050*o+-4527440
if((w&-4194304)>>>0===0)h=D.c.O(w,14)
else h=w<0?0:255
J.bQ(j.a,j.d+2,h)
J.bQ(j.a,j.d+3,255)}}if((b3&1)===0){a4=D.c.O(3*a2+a3+131074,2)
w=J.t(a5.a,a5.d+a0)
o=a0*4
n=A.bR(b1,e,o)
f.Uu(w,a4&255,a4>>>16,n)
n.n(0,3,255)
if(x){a4=D.c.O(3*a3+a2+131074,2)
a0=J.t(a6.a,a6.d+a0)
b2.toString
o=A.bR(b2,e,o)
f.Uu(a0,a4&255,a4>>>16,o)
o.n(0,3,255)}}},
aVR(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.xr
if(o==null)return
x=A.bR(o,null,0)
if(d===0){w=f-1
v=d}else{v=d-1
x.d=x.d-p.b.a
w=f}o=p.Q
o.toString
u=p.as
if(o+d+f===u){u.toString
w=u-o-v}for(o=p.b,t=0;t<w;++t){for(u=t+v,s=0;s<e;++s){r=J.t(x.a,x.d+s)
q=p.d.a
q=q==null?null:q.e1(s,u,null);(q==null?new A.eX():q).saP(0,r)}x.d=x.d+o.a}},
aVS(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=A.cz(B.bX(l.d.gh_(0),0,k),!1,k,d*j.a*4),h=l.to
h===$&&B.b()
x=A.bR(h,k,0)
h=l.x1
h===$&&B.b()
w=A.bR(h,k,0)
h=l.x2
h===$&&B.b()
v=A.bR(h,k,0)
u=d+f
t=D.c.O(e+1,1)
s=j.a*4
j=l.rx
j===$&&B.b()
r=A.bR(j,k,0)
j=l.ry
j===$&&B.b()
q=A.bR(j,k,0)
if(d===0){l.Uf(x,k,w,v,w,v,i,k,e)
p=f}else{j=l.RG
j===$&&B.b()
l.Uf(j,x,r,q,w,v,A.bR(i,k,-s),i,e)
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
l.Uf(A.bR(x,k,-n),x,r,q,w,v,A.bR(i,k,h),i,e)}j=x.d
h=l.p4
h.toString
x.d=j+h
j=l.Q
j.toString
h=l.as
h.toString
if(j+u<h){j=l.RG
j===$&&B.b()
j.z2(0,e,x)
l.rx.z2(0,t,w)
l.ry.z2(0,t,v);--p}else if((u&1)===0)l.Uf(x,k,w,v,w,v,A.bR(i,k,s),k,e)
return p},
aU4(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.b,m=n.a,l=n.b
if(d<0||e<=0||d+e>l)return o
if(d===0){n=m*l
p.cT=new Uint8Array(n)
x=p.c5
w=new A.bA7(x,m,l)
v=x.cW()
w.d=v&3
w.e=D.c.O(v,2)&3
w.f=D.c.O(v,4)&3
w.r=D.c.O(v,6)&3
if(w.geL()){u=w.d
if(u===0){if(x.c-x.d<n)w.r=1}else if(u===1){t=new A.ay4(C.n8,B.a([],y.J))
t.a=m
t.b=l
n=B.a([],y.A)
u=B.a([],y.F)
s=new Uint32Array(2)
r=new A.axD(x,s)
s=r.d=B.bX(s.buffer,0,o)
s[0]=x.cW()
s[1]=x.cW()
s[2]=x.cW()
s[3]=x.cW()
s[4]=x.cW()
s[5]=x.cW()
s[6]=x.cW()
s[7]=x.cW()
u=new A.amu(r,t,n,u)
u.db=m
w.x=u
u.Jn(m,l,!0)
n=w.x
x=n.ax
if(x.length===1&&x[0].a===C.a3r&&n.b4J()){w.y=!0
n=w.x
x=n.c
q=x.a*x.b
n.cx=0
x=D.c.al(q,4)
x=new Uint8Array(q+(4-x))
n.CW=x
n.ch=B.o_(x.buffer,0,o)}else{w.y=!1
w.x.afj()}}else w.r=1}p.b8=w}n=p.b8
n===$&&B.b()
if(!n.w){x=p.cT
x===$&&B.b()
if(!n.M6(0,d,e,x))return o}n=p.cT
n===$&&B.b()
return A.cz(n,!1,o,d*m)},
b9C(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.fr.b,a3=a1.k1
a3===$&&B.b()
x=a1.dy[a3]
a3=a1.bO
a3===$&&B.b()
w=a3[a1.y1]
v=A.cz(w.a,!1,null,0)
a3=a1.k3
a3===$&&B.b()
u=a3[0]
v.bx4(0,v.c-v.d,0)
a3=w.b
a3===$&&B.b()
if(!a3){t=A.cz(new Int16Array(16),!1,null,0)
a3=a4.b
s=u.b
r=a1.a1X(a5,a2[1],a3+s,x.b,0,t)
a4.b=u.b=r>0?1:0
if(r>1)a1.bhC(t,v)
else{q=D.c.O(J.t(t.a,t.d)+3,3)
for(p=0;p<256;p+=16)J.bQ(v.a,v.d+p,q)}o=a2[0]
n=1}else{o=a2[3]
n=0}m=a4.a&15
l=u.a&15
for(k=0,j=0;j<4;++j){i=l&1
for(h=0,g=0;g<4;++g){r=a1.a1X(a5,o,i+(m&1),x.a,n,v)
i=r>n?1:0
m=m>>>1|i<<7
a3=J.t(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=h<<2|a3
v.d+=16}m=m>>>4
l=l>>>1|i<<7
k=(k<<8|h)>>>0}f=l>>>4
for(e=m,d=0,a0=0;a0<4;a0+=2){a3=4+a0
m=D.c.hh(a4.a,a3)
l=D.c.hh(u.a,a3)
for(h=0,j=0;j<2;++j){i=l&1
for(g=0;g<2;++g){r=a1.a1X(a5,a2[2],i+(m&1),x.c,0,v)
i=r>0?1:0
m=m>>>1|i<<3
a3=J.t(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=(h<<2|a3)>>>0
v.d+=16}m=m>>>2
l=l>>>1|i<<5}d=(d|D.c.ef(h,4*a0))>>>0
e=(e|D.c.ef(m<<4>>>0,a0))>>>0
f=(f|D.c.ef(l&240,a0))>>>0}a4.a=e
u.a=f
w.e=k
w.f=d
if((d&43690)===0)x.toString
return(k|d)>>>0===0},
bhC(d,e){var x,w,v,u,t,s,r,q,p,o,n=new Int32Array(16)
for(x=0;x<4;++x){w=12+x
v=J.t(d.a,d.d+x)+J.t(d.a,d.d+w)
u=4+x
t=8+x
s=J.t(d.a,d.d+u)+J.t(d.a,d.d+t)
r=J.t(d.a,d.d+u)-J.t(d.a,d.d+t)
q=J.t(d.a,d.d+x)-J.t(d.a,d.d+w)
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
u=D.c.O(v+s,3)
J.bQ(e.a,e.d+p,u)
u=D.c.O(q+r,3)
J.bQ(e.a,e.d+(p+16),u)
u=D.c.O(v-s,3)
J.bQ(e.a,e.d+(p+32),u)
u=D.c.O(q-r,3)
J.bQ(e.a,e.d+(p+48),u)
p+=64}},
aY7(d,e){var x,w,v,u,t,s
if(d.hY(e[3])===0)x=d.hY(e[4])===0?2:3+d.hY(e[5])
else if(d.hY(e[6])===0)x=d.hY(e[7])===0?5+d.hY(159):7+2*d.hY(165)+d.hY(145)
else{w=d.hY(e[8])
v=2*w+d.hY(e[9+w])
u=C.ayT[v]
t=u.length
for(x=0,s=0;s<t;++s)x+=x+d.hY(u[s])
x+=3+D.c.ef(8,v)}return x},
a1X(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=e[h].a[f]
for(;h<16;h=x){if(d.hY(p[0])===0)return h
for(;d.hY(p[1])===0;){++h
p=e[C.Ir[h]].a[0]
if(h===16)return 16}x=h+1
w=e[C.Ir[x]].a
if(d.hY(p[2])===0){p=w[1]
v=1}else{v=this.aY7(d,p)
p=w[2]}u=C.azd[h]
t=d.b
t===$&&B.b()
s=d.afF(D.c.O(t,1))
t=d.b
r=C.Pe[t]
d.b=C.Kd[t]
t=d.d
t===$&&B.b()
d.d=t-r
t=s!==0?-v:v
q=g[h>0?1:0]
J.bQ(i.a,i.d+u,t*q)}return 16},
b9x(){var x,w,v,u,t,s,r,q,p,o=this,n=o.y1,m=4*n,l=o.go,k=o.id,j=o.bO
j===$&&B.b()
x=j[n]
n=o.c
n===$&&B.b()
n=n.hY(145)===0
x.b=n
if(!n){if(o.c.hY(156)!==0)w=o.c.hY(128)!==0?1:3
else w=o.c.hY(163)!==0?2:0
x.c[0]=w
l.toString
D.aa.jK(l,m,m+4,w)
D.aa.jK(k,0,4,w)}else{v=x.c
for(u=0,t=0;t<4;++t,u=p){w=k[t]
for(s=0;s<4;++s){n=m+s
r=C.axz[l[n]][w]
q=C.Iy[o.c.hY(r[0])]
for(;q>0;)q=C.Iy[2*q+o.c.hY(r[q])]
w=-q
l[n]=w}p=u+4
l.toString
D.aa.dz(v,u,p,l,m)
k[t]=w}}if(o.c.hY(142)===0)n=0
else if(o.c.hY(114)===0)n=2
else n=o.c.hY(183)!==0?1:3
x.d=n}}
A.a3X.prototype={
df(d){var x,w
for(x=0;w=d-1,d>0;d=w)x=(x|D.c.ev(this.hY(128),w))>>>0
return x},
If(d){var x=this.df(d)
return this.df(1)===1?-x:x},
hY(d){var x,w=this,v=w.b
v===$&&B.b()
x=w.afF(D.c.O(v*d,8))
if(w.b<=126)w.bf_()
return x},
afF(d){var x,w,v,u,t,s=this,r=s.d
r===$&&B.b()
if(r<0){x=s.a
w=x.c
v=x.d
if(w-v>=1){u=x.cW()
r=s.c
r===$&&B.b()
s.c=(u|r<<8)>>>0
r=s.d+8
s.d=r
t=r}else{if(v<w){r=x.cW()
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
if(D.c.nj(r,t)>d){x=s.b
x===$&&B.b()
w=d+1
s.b=x-w
s.c=r-D.c.ev(w,t)
return 1}else{s.b=d
return 0}},
bf_(){var x,w=this,v=w.b
v===$&&B.b()
x=C.Pe[v]
w.b=C.Kd[v]
v=w.d
v===$&&B.b()
w.d=v-x}}
A.bze.prototype={
adn(d,e,f){var x,w=A.bR(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x
if(this.am3(w,e,f))this.Rj(w,e)}},
adm(d,e,f){var x,w=A.bR(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x*e
if(this.am3(w,1,f))this.Rj(w,1)}},
aHA(d,e,f){var x,w,v=A.bR(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.adn(v,e,f)}},
aHx(d,e,f){var x,w=A.bR(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.adm(w,e,f)}},
bDN(d,e,f,g,h){var x,w,v=A.bR(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.Ec(v,e,1,16,f,g,h)}},
bsH(d,e,f,g,h){var x,w=A.bR(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.Ec(w,1,e,16,f,g,h)}},
Ed(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=A.bR(d,null,0)
for(x=-3*e,w=-2*e,v=-e,u=2*e;t=g-1,g>0;g=t){if(this.am4(h,e,a0,a1))if(this.ako(h,e,a2))this.Rj(h,e)
else{s=J.t(h.a,h.d+x)
r=J.t(h.a,h.d+w)
q=J.t(h.a,h.d+v)
p=J.t(h.a,h.d)
o=J.t(h.a,h.d+e)
n=J.t(h.a,h.d+u)
m=$.c5b()
l=m[1020+3*(p-q)+m[1020+r-o]]
m=D.c.O(27*l+63,7)
k=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.O(18*l+63,7)
j=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.O(9*l+63,7)
i=(m&2147483647)-((m&2147483648)>>>0)
s=$.oA()[255+s+i]
J.bQ(h.a,h.d+x,s)
r=$.oA()[255+r+j]
J.bQ(h.a,h.d+w,r)
q=$.oA()[255+q+k]
J.bQ(h.a,h.d+v,q)
p=$.oA()[255+p-k]
J.bQ(h.a,h.d,p)
o=$.oA()[255+o-j]
J.bQ(h.a,h.d+e,o)
n=$.oA()[255+n-i]
J.bQ(h.a,h.d+u,n)}h.d+=f}},
Ec(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=A.bR(d,null,0)
for(x=-2*e,w=-e;v=g-1,g>0;g=v){if(this.am4(k,e,h,i))if(this.ako(k,e,j))this.Rj(k,e)
else{u=J.t(k.a,k.d+x)
t=J.t(k.a,k.d+w)
s=J.t(k.a,k.d)
r=J.t(k.a,k.d+e)
q=3*(s-t)
p=$.aPy()
o=D.c.O(q+4,3)
n=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.O(q+3,3)
m=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.O(n+1,1)
l=(o&2147483647)-((o&2147483648)>>>0)
u=$.oA()[255+u+l]
J.bQ(k.a,k.d+x,u)
t=$.oA()[255+t+m]
J.bQ(k.a,k.d+w,t)
s=$.oA()[255+s-n]
J.bQ(k.a,k.d,s)
r=$.oA()[255+r-l]
J.bQ(k.a,k.d+e,r)}k.d+=f}},
Rj(d,e){var x=J.t(d.a,d.d+-2*e),w=-e,v=J.t(d.a,d.d+w),u=J.t(d.a,d.d),t=J.t(d.a,d.d+e),s=3*(u-v)+$.c5b()[1020+x-t],r=$.aPy()[112+D.c.ks(D.c.O(s+4,3),32)],q=$.aPy()[112+D.c.ks(D.c.O(s+3,3),32)]
d.n(0,w,$.oA()[255+v+q])
d.n(0,0,$.oA()[255+u-r])},
ako(d,e,f){var x=J.t(d.a,d.d+-2*e),w=J.t(d.a,d.d+-e),v=J.t(d.a,d.d),u=J.t(d.a,d.d+e),t=$.aPx()
return t[255+x-w]>f||t[255+u-v]>f},
am3(d,e,f){var x=J.t(d.a,d.d+-2*e),w=J.t(d.a,d.d+-e),v=J.t(d.a,d.d),u=J.t(d.a,d.d+e)
return 2*$.aPx()[255+w-v]+$.c5a()[255+x-u]<=f},
am4(d,e,f,g){var x=J.t(d.a,d.d+-4*e),w=J.t(d.a,d.d+-3*e),v=J.t(d.a,d.d+-2*e),u=J.t(d.a,d.d+-e),t=J.t(d.a,d.d),s=J.t(d.a,d.d+e),r=J.t(d.a,d.d+2*e),q=J.t(d.a,d.d+3*e),p=$.aPx(),o=255+v
if(2*p[255+u-t]+$.c5a()[o-s]>f)return!1
return p[255+x-w]<=g&&p[255+w-v]<=g&&p[o-u]<=g&&p[255+q-r]<=g&&p[255+r-s]<=g&&p[255+s-t]<=g},
uW(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=new Int32Array(16)
for(x=0,w=0,v=0;v<4;++v){u=x+8
t=J.t(d.a,d.d+x)+J.t(d.a,d.d+u)
s=J.t(d.a,d.d+x)-J.t(d.a,d.d+u)
u=x+4
r=D.c.O(J.t(d.a,d.d+u)*35468,16)
q=x+12
p=D.c.O(J.t(d.a,d.d+q)*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.c.O(J.t(d.a,d.d+u)*85627,16)
q=D.c.O(J.t(d.a,d.d+q)*35468,16)
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
r=D.c.O(u*35468,16)
q=j[w+12]
p=D.c.O(q*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.c.O(u*85627,16)
q=D.c.O(q*35468,16)
n=(u&2147483647)-((u&2147483648)>>>0)+((q&2147483647)-((q&2147483648)>>>0))
A.CB(e,l,0,0,t+n)
A.CB(e,l,1,0,s+o)
A.CB(e,l,2,0,s-o)
A.CB(e,l,3,0,t-n);++w
l+=32}},
OK(d,e,f,g){this.uW(e,f)
if(g)this.uW(A.bR(e,null,16),A.bR(f,null,4))},
OL(d,e){var x,w,v=J.t(d.a,d.d)+4
for(x=0;x<4;++x)for(w=0;w<4;++w)A.CB(e,0,w,x,v)},
aB8(d,e){var x=this,w=null
if(J.t(d.a,d.d)!==0)x.OL(d,e)
if(J.t(d.a,d.d+16)!==0)x.OL(A.bR(d,w,16),A.bR(e,w,4))
if(J.t(d.a,d.d+32)!==0)x.OL(A.bR(d,w,32),A.bR(e,w,128))
if(J.t(d.a,d.d+48)!==0)x.OL(A.bR(d,w,48),A.bR(e,w,132))}}
A.bzj.prototype={}
A.bzn.prototype={}
A.bzp.prototype={}
A.a3W.prototype={}
A.bzo.prototype={}
A.bzf.prototype={}
A.Id.prototype={}
A.axF.prototype={}
A.axH.prototype={}
A.axG.prototype={}
A.axI.prototype={}
A.a3Y.prototype={
M7(){var x,w=this.b
if(w.iD(8)!==47)return!1
x=this.c
x.f=C.vE
x.a=w.iD(14)+1
x.b=w.iD(14)+1
x.d=w.iD(1)!==0
if(w.iD(3)!==0)return!1
return!0},
vV(d){var x,w,v,u,t,s=this,r=null
s.e=0
if(!s.M7())return r
x=s.c
s.Jn(x.a,x.b,!0)
s.afj()
w=x.a
s.d=A.h8(r,r,C.a_,0,C.b2,x.b,r,0,4,r,C.a_,w,!1)
w=s.ch
w.toString
v=x.a
u=x.b
if(!s.a1l(w,v,u,u,s.gbbr()))return r
x=x.w
if(x.length!==0){t=A.cz(new B.dJ(x),!1,r,0)
x=s.d
x.toString
x.e=A.cfO(t)}return s.d},
afj(){var x,w=this,v=w.c,u=v.a
v=u*v.b+u
x=new Uint32Array(v+u*16)
w.ch=x
w.CW=B.bX(x.buffer,0,null)
w.cx=v
return!0},
bc5(d){var x,w,v,u=this,t=u.b,s=t.iD(2),r=u.ay,q=D.c.ef(1,s)
if((r&q)>>>0!==0)return!1
u.ay=(r|q)>>>0
x=new A.axE(C.a3q)
u.ax.push(x)
r=C.aqY[s]
x.a=r
x.b=d[0]
x.c=d[1]
switch(r.a){case 0:case 1:t=t.iD(3)+2
x.e=t
x.d=u.Jn(A.CC(x.b,t),A.CC(x.c,x.e),!1)
break
case 3:w=t.iD(8)+1
if(w>16)v=0
else if(w>4)v=1
else{t=w>2?2:3
v=t}d[0]=A.CC(x.b,v)
x.e=v
x.d=u.Jn(w,1,!1)
u.aWh(w,x)
break
case 2:break
default:throw B.e(A.bK("Invalid WebP transform type: "+s))}return!0},
Jn(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(f)for(x=p.b,w=y.t,v=e,u=d;x.iD(1)!==0;){t=B.a([u,v],w)
if(!p.bc5(t))throw B.e(A.bK("Invalid Transform"))
u=t[0]
v=t[1]}else{v=e
u=d}x=p.b
if(x.iD(1)!==0){s=x.iD(4)
if(!(s>=1&&s<=11))throw B.e(A.bK("Invalid Color Cache"))}else s=0
if(!p.bbV(u,v,s,f))throw B.e(A.bK("Invalid Huffman Codes"))
if(s>0){x=D.c.ef(1,s)
p.r=x
p.w=new A.bzk(new Uint32Array(x),32-s)}else p.r=0
x=p.c
x.a=u
x.b=v
r=p.y
p.z=A.CC(u,r)
p.x=r===0?4294967295:D.c.ef(1,r)-1
if(f){p.e=0
return null}q=new Uint32Array(u*v)
if(!p.a1l(q,u,v,v,null))throw B.e(A.bK("Failed to decode image data."))
p.e=0
return q},
a1l(a5,a6,a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e,d=D.c.fK(e,a6),a0=D.c.al(e,a6),a1=f.aj0(a0,d),a2=f.e,a3=a6*a7,a4=a6*a8
e=f.r
x=280+e
w=e>0?f.w:null
v=f.x
e=f.b
u=a9!=null
t=a2
while(!0){s=e.b
r=s.c
if(!(!(s.d>=r&&e.a>=64)&&a2<a4))break
if((a0&v)>>>0===0){q=f.JI(f.Q,f.z,f.y,a0,d)
a1=f.at[q]}if(e.a>=32)e.AU()
s=a1.a
p=s[0].zi(e)
o=0
if(p<256){n=s[1].zi(e)
if(e.a>=32)e.AU()
a5[a2]=A.cpT(s[2].zi(e),p,n,s[3].zi(e));++a2;++a0
if(a0>=a6){++d
if(D.c.al(d,16)===0&&u)a9.$1(d)
if(w!=null)for(s=w.b,r=w.a;t<a2;){m=a5[t]
r[D.c.fC(m*506832829>>>0,s)]=m;++t}a0=o}}else if(p<280){l=f.RJ(p-256)
k=s[4].zi(e)
if(e.a>=32)e.AU()
j=f.amT(a6,f.RJ(k))
if(a2<j||a3-a2<l)return!1
else{i=a2-j
for(h=0;h<l;++h)a5[a2+h]=a5[i+h]
a2+=l}a0+=l
for(;a0>=a6;){a0-=a6;++d
if(D.c.al(d,16)===0&&u)a9.$1(d)}if(a2<a4){if((a0&v)>>>0!==0){q=f.JI(f.Q,f.z,f.y,a0,d)
a1=f.at[q]}if(w!=null)for(s=w.b,r=w.a;t<a2;){m=a5[t]
r[D.c.fC(m*506832829>>>0,s)]=m;++t}}}else if(p<x){for(;t<a2;){s=a5[t]
g=D.c.fC(s*506832829>>>0,w.b)
w.a[g]=s;++t}s=w.a
a5[a2]=s[p-280];++a2;++a0
if(a0>=a6){++d
if(D.c.al(d,16)===0&&u)a9.$1(d)
for(r=w.b;t<a2;){m=a5[t]
s[D.c.fC(m*506832829>>>0,r)]=m;++t}a0=o}}else return!1}if(u)a9.$1(d)
if(s.d>=r&&e.a>=64&&a2<a3)return!1
f.e=a2
return!0},
b4J(){var x,w,v,u
if(this.r>0)return!1
for(x=this.as,w=this.at,v=0;v<x;++v){u=w[v].a
if(u[1].f>1)return!1
if(u[2].f>1)return!1
if(u[3].f>1)return!1}return!0},
aWq(d){var x,w,v,u,t,s,r=this,q=r.f,p=d-q
if(p<=0)return
x=r.c
r.aft(p,x.a*q)
w=x.a
v=w*p
u=w*r.f
x=r.ch
x.toString
q=r.cx
q.toString
t=A.cz(x,!1,null,q)
for(s=0;s<v;++s){q=r.cy
q.toString
q[u+s]=D.c.O(J.t(t.a,t.d+s),8)&255}r.f=d},
aTH(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.e,n=D.c.fK(o,d),m=D.c.al(o,d),l=p.aj0(m,n),k=p.e,j=d*e,i=d*f,h=p.x
o=p.b
while(!0){x=o.b
if(!(!(x.d>=x.c&&o.a>=64)&&k<i))break
if((m&h)>>>0===0){w=p.JI(p.Q,p.z,p.y,m,n)
l=p.at[w]}if(o.a>=32)o.AU()
x=l.a
v=x[0].zi(o)
if(v<256){x=p.CW
x===$&&B.b()
x[k]=v;++k;++m
if(m>=d){++n
if(D.c.al(n,16)===0)p.a1I(n)
m=0}}else if(v<280){u=p.RJ(v-256)
t=x[4].zi(o)
if(o.a>=32)o.AU()
s=p.amT(d,p.RJ(t))
if(k>=s&&j-k>=u)for(x=p.CW,r=0;r<u;++r){x===$&&B.b()
q=k+r
x[q]=x[q-s]}else{p.e=k
return!0}k+=u
m+=u
for(;m>=d;){m-=d;++n
if(D.c.al(n,16)===0)p.a1I(n)}if(k<i&&(m&h)>>>0!==0){w=p.JI(p.Q,p.z,p.y,m,n)
l=p.at[w]}}else return!1}p.a1I(n)
p.e=k
return!0},
a1I(d){var x,w,v,u=this,t=u.f,s=d-t,r=u.CW
r===$&&B.b()
x=A.cz(r,!1,null,u.c.a*t)
if(s>0){w=u.f
t=u.cy
t.toString
r=u.db
r.toString
v=A.cz(t,!1,null,r*w)
u.ax[0].bmW(w,w+s,x,v)}u.f=d},
bbs(d){var x,w,v,u,t,s=this,r=s.c,q=r.a,p=s.f,o=d-p
if(o<=0)return
s.aft(o,q*p)
q=s.cx
q.toString
x=s.f
w=q
v=0
for(;v<o;++v,++x)for(u=0;u<r.a;++u,++w){t=s.ch[w]
q=s.d.a
if(q!=null)q.jS(u,x,t>>>16&255,t>>>8&255,t&255,t>>>24&255)}s.f=d},
aft(d,e){var x,w,v,u=this,t=u.ax,s=t.length,r=u.c.a,q=u.f,p=q+d,o=u.cx
o.toString
x=u.ch
x.toString
D.cs.dz(x,o,o+r*d,x,e)
for(w=e;v=s-1,s>0;w=o,s=v){r=t[v]
x=u.ch
x.toString
r.buX(q,p,x,w,x,o)}},
bbV(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=1
if(g&&l.b.iD(1)!==0){x=l.b.iD(3)+2
w=A.CC(d,x)
v=A.CC(e,x)
u=w*v
t=l.Jn(w,v,!1)
l.y=x
for(s=0;s<u;++s){r=t[s]>>>8&65535
t[s]=r
if(r>=k)k=r+1}}else t=null
q=J.ia(k,y.O)
for(p=0;p<k;++p)q[p]=A.cBm()
for(o=f>0,s=0;s<k;++s)for(n=0;n<5;++n){m=C.ar1[n]
if(n===0&&o)m+=D.c.ef(1,f)
if(!l.bbT(m,q[s].a[n]))return!1}l.Q=t
l.as=k
l.at=q
return!0},
bbT(d,e){var x,w,v,u,t,s,r,q,p,o=this.b
if(o.iD(1)!==0){x=y.t
w=B.a([0,0],x)
v=B.a([0,0],x)
u=B.a([0,0],x)
t=o.iD(1)+1
w[0]=o.iD(o.iD(1)===0?1:8)
v[0]=0
x=t-1
u[0]=x
if(t===2){w[1]=o.iD(8)
v[1]=1
u[1]=x}s=e.blO(u,v,w,d,t)}else{r=new Int32Array(19)
q=o.iD(4)+4
if(q>19)return!1
u=new Int32Array(d)
for(p=0;p<q;++p)r[C.asM[p]]=o.iD(3)
s=this.bbU(r,d,u)
if(s)s=e.asH(u,d)}return s},
bbU(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=A.cgt()
if(!k.asH(d,19))return!1
x=this.b
if(x.iD(1)!==0){w=2+x.iD(2+2*x.iD(3))
if(w>e)return!1}else w=e
for(v=0,u=8;v<e;w=t){t=w-1
if(w===0)break
if(x.a>=32)x.AU()
s=k.zi(x)
if(s<16){r=v+1
f[v]=s
if(s!==0)u=s
v=r}else{q=s-16
p=C.ao3[q]
o=C.aoq[q]
n=x.iD(p)+o
if(v+n>e)return!1
else{m=s===16?u:0
for(;l=n-1,n>0;n=l,v=r){r=v+1
f[v]=m}}}}return!0},
RJ(d){var x
if(d<4)return d+1
x=D.c.O(d-2,1)
return D.c.ef(2+(d&1),x)+this.b.iD(x)+1},
amT(d,e){var x,w
if(e>120)return e-120
else{x=C.aqc[e-1]
w=(x>>>4)*d+(8-(x&15))
return w>=1?w:1}},
aWh(d,e){var x,w,v=D.c.ef(1,D.c.hh(8,e.e)),u=new Uint32Array(v),t=B.bX(e.d.buffer,0,null),s=B.bX(u.buffer,0,null)
u[0]=e.d[0]
x=4*d
for(w=4;w<x;++w)s[w]=t[w]+s[w-4]&255
for(x=4*v;w<x;++w)s[w]=0
e.d=u
return!0},
JI(d,e,f,g,h){if(f===0)return 0
d.toString
return d[e*D.c.O(h,f)+D.c.O(g,f)]},
aj0(d,e){var x=this,w=x.JI(x.Q,x.z,x.y,d,e)
return x.at[w]}}
A.amu.prototype={
brR(d){return this.aWq(d)}}
A.axD.prototype={
azi(){var x,w,v=this.a
if(v<32){x=this.c
w=D.c.fC(x[0],v)+((x[1]&C.zw[v])>>>0)*(C.zw[32-v]+1)}else{x=this.c
w=v===32?x[1]:D.c.fC(x[1],v-32)}return w},
iD(d){var x,w=this,v=w.b
if(!(v.d>=v.c&&w.a>=64)&&d<25){v=w.azi()
x=C.zw[d]
w.a+=d
w.AU()
return(v&x)>>>0}else throw B.e(A.bK("Not enough data in input."))},
AU(){var x,w,v,u=this,t=u.b,s=u.c,r=t.c
while(!0){if(!(u.a>=8&&t.d<r))break
x=J.t(t.a,t.d++)
w=s[0]
v=s[1]
s[0]=(w>>>8)+(v&255)*16777216
s[1]=v>>>8
s[1]=(s[1]|x*16777216)>>>0
u.a-=8}}}
A.bzk.prototype={}
A.Ie.prototype={
G(){return"VP8LImageTransformType."+this.b}}
A.axE.prototype={
buX(d,e,f,g,h,i){var x,w,v,u,t=this,s=t.b
switch(t.a.a){case 2:t.bjW(h,i,i+(e-d)*s)
break
case 0:t.bAn(d,e,h,i)
if(e!==t.c){x=i-s
D.cs.dz(h,x,x+s,f,i+(e-d-1)*s)}break
case 1:t.bmX(d,e,h,i)
break
case 3:if(g===i&&t.e>0){w=e-d
v=w*A.CC(s,t.e)
u=i+w*s-v
D.cs.dz(h,u,u+v,f,i)
t.atD(d,e,f,u,h,i)}else t.atD(d,e,f,g,h,i)
break}},
bmW(d,e,f,g){var x,w,v,u,t,s=this.e,r=D.c.hh(8,s),q=this.b,p=this.d
if(r<8){x=D.c.ef(1,s)-1
w=D.c.ef(1,r)-1
for(v=d;v<e;++v)for(u=0,t=0;t<q;++t){if((t&x)>>>0===0){u=J.t(f.a,f.d);++f.d}s=p[(u&w)>>>0]
J.bQ(g.a,g.d,s>>>8&255);++g.d
u=D.c.O(u,r)}}else for(v=d;v<e;++v)for(t=0;t<q;++t){s=J.t(f.a,f.d);++f.d
s=p[s]
J.bQ(g.a,g.d,s>>>8&255);++g.d}},
atD(d,e,f,g,h,i){var x,w,v,u,t,s,r,q=this.e,p=D.c.hh(8,q),o=this.b,n=this.d
if(p<8){x=D.c.ef(1,q)-1
w=D.c.ef(1,p)-1
for(v=d;v<e;++v)for(u=0,t=0;t<o;++t,i=r){if((t&x)>>>0===0){s=g+1
u=f[g]>>>8&255
g=s}r=i+1
h[i]=n[u&w]
u=D.c.hh(u,p)}}else for(v=d;v<e;++v)for(t=0;t<o;++t,i=r,g=s){r=i+1
s=g+1
h[i]=n[f[g]>>>8&255]}},
bmX(a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.b,f=h.e,e=D.c.ef(1,f)-1,d=A.CC(g,f),a0=D.c.O(a1,h.e)*d
for(x=a1;x<a2;){f=new Uint8Array(3)
for(w=a0,v=0;v<g;++v){if((v&e)>>>0===0){u=w+1
t=h.d[w]
f[0]=t&255
f[1]=t>>>8&255
f[2]=t>>>16&255
w=u}t=a4+v
s=a3[t]
r=s>>>8&255
q=f[0]
p=$.nq()
p[0]=q
q=$.oB()
o=q[0]
p[0]=r
n=q[0]
m=$.aPA()
m[0]=o*n
l=$.c5d()
k=(s>>>16&255)+(l[0]>>>5)>>>0&255
p[0]=f[1]
o=q[0]
p[0]=r
m[0]=o*q[0]
j=l[0]
p[0]=f[2]
o=q[0]
p[0]=k
m[0]=o*q[0]
i=l[0]
a3[t]=(s&4278255360|k<<16|((s&255)+(j>>>5)>>>0)+(i>>>5)>>>0&255)>>>0}a4+=g;++x
if((x&e)>>>0===0)a0+=d}},
bAn(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=this,n=o.b
if(d===0){A.bzl(f,g,4278190080)
for(x=1;x<n;++x){w=g+x
A.bzl(f,w,f[w-1])}g+=n;++d}w=o.e
v=D.c.ef(1,w)-1
u=A.CC(n,w)
t=D.c.O(d,o.e)*u
for(s=d;s<e;){A.bzl(f,g,f[g-n])
r=t+1
q=$.clg[o.d[t]>>>8&15]
for(x=1;x<n;++x){if((x&v)>>>0===0){p=r+1
q=$.clg[o.d[r]>>>8&15]
r=p}w=g+x
A.bzl(f,w,q.$3(f,f[w-1],w-n))}g+=n;++s
if((s&v)>>>0===0)t+=u}},
bjW(d,e,f){var x,w,v
for(;e<f;e=v){x=d[e]
w=x>>>8&255
v=e+1
d[e]=(x&4278255360|(x&16711935)+(w<<16|w)&16711935)>>>0}}}
A.bA7.prototype={
geL(){var x=this,w=x.d
if(w>1||x.e>=4||x.f>1||x.r!==0)return!1
return!0},
M6(d,e,f,g){var x,w,v,u,t,s,r=this
if(!r.geL())return!1
x=C.awm[r.e]
if(r.d===0){w=r.b
v=e*w
u=r.a
D.aa.dz(g,v,f*w,u.a,u.d-u.b+v)}else{w=e+f
u=r.x
u===$&&B.b()
u.cy=g
t=u.c
if(r.y)w=u.aTH(t.a,t.b,w)
else{s=u.ch
s.toString
u=u.a1l(s,t.a,t.b,w,u.gbrQ())
w=u}if(!w)return!1}if(x!=null){w=r.b
x.$6(w,r.c,w,e,f,g)}if(r.f===1)if(!r.aUz(g,r.b,r.c,e,f))return!1
if(e+f===r.c)r.w=!0
return!0},
aUz(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
A.a4b.prototype={
aP3(d,e){var x=this,w=d.cW()
x.r=0
x.f=(w&1)!==0
x.w=d.d-d.b
x.x=e-16}}
A.amv.prototype={}
A.alP.prototype={
a5o(d){var x,w=this
if(d===0)return!1
x=(d<<1>>>0)-1
w.e=x
x=new Int32Array(x<<1>>>0)
w.d=x
x[1]=-1
w.f=1
D.aa.jK(w.a,0,128,255)
return!0},
asH(d,e){var x,w,v,u,t,s=this
for(x=0,w=0,v=0;v<e;++v)if(d[v]>0){++x
w=v}if(!s.a5o(x))return!1
if(x===1){if(w<0||w>=e)return!1
return s.a0v(w,0,0)}u=new Int32Array(e)
if(!s.b3E(d,e,u))return!1
for(v=0;v<e;++v){t=d[v]
if(t>0)if(!s.a0v(v,u[v],t))return!1}return s.f===s.e},
blO(d,e,f,g,h){var x,w,v,u=this
if(!u.a5o(h))return!1
for(x=0;x<h;++x){w=e[x]
if(w!==-1){v=f[x]
if(v>=g)return u.f===u.e
if(!u.a0v(v,w,d[x]))return u.f===u.e}}return u.f===u.e},
zi(d){var x,w,v=this,u=d.azi(),t=d.a,s=u&127,r=v.a[s]
if(r<=7){d.a=t+r
return v.b[s]}x=v.c[s]
t+=7
u=u>>>7
do{w=v.d
w===$&&B.b()
x=x+w[(x<<1>>>0)+1]+(u&1)
u=u>>>1;++t}while(v.ama(x))
d.a=t
return v.d[x<<1>>>0]},
a0v(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this
if(f<=7){x=m.anT(e,f)
for(w=D.c.ev(1,7-f),v=m.b,u=m.a,t=0;t<w;++t){s=(x|D.c.ev(t,f))>>>0
v[s]=d
u[s]=f}}else x=m.anT(D.c.nj(e,f-7),7)
for(w=m.c,r=7,q=0;p=f-1,f>0;f=p){v=m.e
if(q>=v)return!1
u=m.d
u===$&&B.b()
o=(q<<1>>>0)+1
n=u[o]
if(n<0){n=m.f
if(n===v)return!1
u[o]=n-q
m.f=n+2
u[(n<<1>>>0)+1]=-1
u[(n+1<<1>>>0)+1]=-1}else if(n===0)return!1
q+=u[o]+(D.c.nj(e,p)&1);--r
if(r===0)w[x]=q}if(m.b6N(q))m.b6O(q,0)
else if(m.ama(q))return!1
w=m.d
w===$&&B.b()
w[q<<1>>>0]=d
return!0},
anT(d,e){return D.c.fC((C.Pl[d&15]<<4|C.Pl[D.c.O(d,4)])>>>0,8-e)},
b6O(d,e){var x=this.d
x===$&&B.b()
x[(d<<1>>>0)+1]=e},
ama(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]!==0},
b6N(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]<0},
b3E(d,e,f){var x,w,v,u,t,s,r,q=new Int32Array(16),p=new Int32Array(16)
for(x=0,w=0;x<e;++x){v=d[x]
if(v>w)w=v}if(w>15)return!1
for(x=0;x<e;++x){u=d[x]
q[u]=q[u]+1}q[0]=0
p[0]=-1
for(t=1,s=0;t<=w;++t){s=s+q[t-1]<<1>>>0
p[t]=s}for(x=0;x<e;++x){u=d[x]
if(u>0){r=p[u]
p[u]=r+1
f[x]=r}else f[x]=-1}return!0}}
A.WM.prototype={
i(d,e){return this.a[e]}}
A.PP.prototype={
G(){return"WebPFormat."+this.b}}
A.ay4.prototype={}
A.amw.prototype={}
A.bA8.prototype={
GI(d){var x=A.cz(d,!1,null,0)
this.b=x
if(!this.aiY(x))return!1
return!0},
nT(d){var x,w=this,v=null,u=A.cz(d,!1,v,0)
w.b=u
if(!w.aiY(u))return v
u=new A.amw(C.n8,B.a([],y.J))
w.a=u
x=w.b
x.toString
if(!w.aru(x,u))return v
u=w.a
switch(u.f.a){case 3:u.as=u.z.length
return u
case 2:x=w.b
x.toString
x.d=u.ay
if(!A.c9l(x,u).M7())return v
u=w.a
u.as=u.z.length
return u
case 1:x=w.b
x.toString
x.d=u.ay
if(!A.c9j(x,u).M7())return v
u=w.a
u.as=u.z.length
return u
case 0:throw B.e(A.bK("Unknown format for WebP"))}},
jo(d){var x,w,v,u,t=this,s=t.b
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
return t.ahh(s.zZ(x,w),d)}w=x.f
if(w===C.vE){s.toString
u=s.zZ(x.ch,x.ay)
s=t.a
s.toString
return A.c9l(u,s).vV(0)}else if(w===C.CG){s.toString
u=s.zZ(x.ch,x.ay)
s=t.a
s.toString
return A.c9j(u,s).vV(0)}return null},
mX(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=null
if(p.nT(e)==null)return o
x=p.a.e
if(!x)return p.jo(0)
for(w=o,v=w,u=0;x=p.a,u<x.as;++u){f=x.z[u]
t=p.jo(u)
if(t==null)continue
t.y=f.e
if(v==null||w==null){x=p.a
s=x.a
x=x.b
r=t.gpB()
q=t.a
q=q==null?o:q.gd8()
if(q==null)q=C.a_
v=A.h8(o,o,q,t.y,C.b2,x,o,0,r,o,C.a_,s,!1)
w=v}else{w=A.Ac(w,!1,!1)
x=f.f
x===$&&B.b()
if(x){x=w.a
if(x!=null)x.mS(0,o)}}A.caK(w,t,C.wL,o,o,f.a,f.b,o,o,o,o)
v.mN(w)}return v},
ahh(d,e){var x,w,v,u=null,t=B.a([],y.J),s=new A.amw(C.n8,t)
if(!this.aru(d,s))return u
if(s.f===C.n8)return u
s.as=this.a.as
if(s.e){x=t.length
if(e>=x)return u
w=t[e]
t=w.x
t===$&&B.b()
x=w.w
x===$&&B.b()
return this.ahh(d.zZ(t,x),e)}else{v=d.zZ(s.ch,s.ay)
t=s.f
if(t===C.vE)return A.c9l(v,s).vV(0)
else if(t===C.CG)return A.c9j(v,s).vV(0)}return u},
aiY(d){if(d.pH(4)!=="RIFF")return!1
d.ai()
if(d.pH(4)!=="WEBP")return!1
return!0},
aru(d,e){var x,w,v,u,t,s,r,q,p,o,n,m
for(x=d.c,w=d.b;d.d<x;){v=d.pH(4)
u=d.ai()
t=u+1>>>1<<1>>>0
s=d.d
r=s-w
switch(v){case"VP8X":if(!this.aYE(d,e))return!1
break
case"VP8 ":e.ay=r
e.ch=u
e.f=C.CG
break
case"VP8L":e.ay=r
e.ch=u
e.f=C.vE
break
case"ALPH":e.toString
s=d.a
q=d.e
p=J.b_(s)
s=new A.l8(s,0,p,0,q)
e.at=s
s.d=d.d
d.d+=t
break
case"ANIM":e.f=C.b4p
o=d.ai()
s=new Uint8Array(4)
s[0]=o>>>8&255
s[1]=o>>>16&255
s[2]=o>>>24&255
s[3]=o&255
d.bI()
break
case"ANMF":if(!this.aXt(d,e,u))return!1
break
case"ICCP":e.toString
n=d.jj(u)
d.d=d.d+(n.c-n.d)
n.hp()
break
case"EXIF":e.toString
e.w=d.pH(u)
break
case"XMP ":e.toString
d.pH(u)
break
default:d.d=s+t
break}s=d.d
m=t-(s-w-r)
if(m>0)d.d=s+m}if(!e.d)e.d=e.at!=null
return e.f!==C.n8},
aYE(d,e){var x,w,v,u,t=d.cW()
if((t&192)!==0)return!1
x=D.c.O(t,4)
w=D.c.O(t,1)
if((t&1)!==0)return!1
if(d.qX()!==0)return!1
v=d.qX()
u=d.qX()
e.a=v+1
e.b=u+1
e.e=(w&1)!==0
e.d=(x&1)!==0
return!0},
aXt(d,e,f){var x,w=d.qX(),v=d.qX()
d.qX()
x=new A.amv(w*2,v*2,d.qX()+1,d.qX())
x.aP3(d,f)
if(x.r!==0)return!1
e.z.push(x)
return!0}}
A.b8x.prototype={
G(){return"IccProfileCompression."+this.b}}
A.X8.prototype={
bne(){var x,w=this
if(w.b===C.yr)return w.c
x=y.D.a(C.El.jp(w.c))
w.c=x
w.b=C.yr
return x}}
A.akZ.prototype={
G(){return"FrameType."+this.b}}
A.Ad.prototype={
gkj(){var x=this.x
return x===$?this.x=B.a([],y.g):x},
aOz(d,e,f,g){var x,w,v,u=this,t=d.gd8(),s=d.gpB(),r=d.a
u.ah6(g,e,t,s,r==null?null:r.gez())
t=d.b
if(t!=null)u.b=B.jH(t,y.N,y.I)
t=d.d
if(t!=null){s=y.N
u.d=B.jH(t,s,s)}u.gkj().push(u)
if(!f){x=d.gkj().length
for(t=y.g,w=1;w<x;++w){v=d.x
u.mN(A.am0((v===$?d.x=B.a([],t):v)[w],e,!1,g))}}},
aOy(d,e,f){var x,w,v,u,t=this,s=d.b
if(s!=null)t.b=B.jH(s,y.N,y.I)
s=d.d
if(s!=null){x=y.N
t.d=B.jH(s,x,x)}t.gkj().push(t)
if(!e&&d.gkj().length>1){w=d.gkj().length
for(s=y.g,v=1;v<w;++v){u=d.x
t.mN(A.Ac((u===$?d.x=B.a([],s):u)[v],!1,!1))}}},
mN(d){var x=this
if(d==null)d=A.Ac(x,!0,!0)
d.z=x.gkj().length
if(D.b.gR(x.gkj())!==d)x.gkj().push(d)
return d},
UB(){return this.mN(null)},
ah6(d,e,f,g,h){var x,w,v=this,u=null
switch(f.a){case 0:if(h==null){x=D.d.eT(d*g/8)
w=new A.Mc($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.eT(d/8)
w=new A.Mc($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 1:if(h==null){x=D.d.eT(d*(g<<1>>>0)/8)
w=new A.Me($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.eT(d/4)
w=new A.Me($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 2:if(h==null){if(g===2)x=d
else if(g===4)x=d*2
else x=g===3?D.d.eT(d*1.5):D.d.eT(d/2)
w=new A.Mg($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.eT(d/2)
w=new A.Mg($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 3:if(h==null)v.a=A.cgM(d,e,g)
else v.a=new A.Mh(new Uint8Array(d*e),h,d,e,1)
break
case 4:x=d*e
if(h==null)v.a=new A.Md(new Uint16Array(x*g),u,d,e,g)
else v.a=new A.Md(new Uint16Array(x),h,d,e,1)
break
case 5:v.a=A.cBU(d,e,g)
break
case 6:v.a=new A.Xe(new Int8Array(d*e*g),d,e,g)
break
case 7:v.a=new A.Xc(new Int16Array(d*e*g),d,e,g)
break
case 8:v.a=new A.Xd(new Int32Array(d*e*g),d,e,g)
break
case 9:v.a=A.cBS(d,e,g)
break
case 10:v.a=A.cBT(d,e,g)
break
case 11:v.a=new A.Xb(new Float64Array(d*e*4*g),d,e,g)
break}},
k(d){var x=this
return"Image("+x.gcG(0)+", "+x.gb_(0)+", "+x.gd8().b+", "+x.gpB()+")"},
gcG(d){var x=this.a
x=x==null?null:x.a
return x==null?0:x},
gb_(d){var x=this.a
x=x==null?null:x.b
return x==null?0:x},
gd8(){var x=this.a
x=x==null?null:x.gd8()
return x==null?C.a_:x},
gw1(){var x=this.e
return x==null?this.e=new A.LE(B.C(y.N,y.P)):x},
aFL(d,e){var x=this,w=x.b;(w==null?x.b=B.C(y.N,y.I):w).n(0,d,e)
if(x.b.a===0)x.b=null},
gW(d){var x=this.a
return x.gW(x)},
gh_(d){var x=this.a
x=x==null?null:x.gh_(x)
if(x==null)x=new Uint8Array(0).buffer
return x},
gpB(){var x=this.a
x=x==null?null:x.gez()
x=x==null?null:x.b
if(x==null){x=this.a
x=x==null?null:x.c}return x==null?0:x},
gqE(){var x=this.a
return(x==null?null:x.gez())!=null},
gmg(){var x=this.a
x=x==null?null:x.gmg()
return x==null?0:x},
axt(d,e){return d>=0&&e>=0&&d<this.gcG(0)&&e<this.gb_(0)},
nf(d,e,f,g){var x=this.a
x=x==null?null:x.nf(d,e,f,g)
if(x==null)x=new A.wg(new Uint8Array(0))
return x},
e1(d,e,f){var x=this.a
x=x==null?null:x.e1(d,e,f)
return x==null?new A.eX():x},
ng(d,e){return this.e1(d,e,null)},
jQ(d,e){if(d<0||d>=this.gcG(0)||e<0||e>=this.gb_(0))return new A.eX()
return this.e1(d,e,null)},
aDL(d,e,f){switch(f.a){case 0:return this.jQ(D.d.D(d),D.d.D(e))
case 1:case 3:return this.aDM(d,e)
case 2:return this.aDK(d,e)}},
aDM(d,e){var x,w,v,u,t,s,r=this,q=D.d.D(d),p=q-(d>=0?0:1),o=p+1
q=D.d.D(e)
x=q-(e>=0?0:1)
w=x+1
q=new A.b9a(d-p,e-x)
v=r.jQ(p,x)
u=w>=r.gb_(0)?v:r.jQ(p,w)
t=o>=r.gcG(0)?v:r.jQ(o,x)
s=o>=r.gcG(0)||w>=r.gb_(0)?v:r.jQ(o,w)
return r.nf(q.$4(v.gaD(v),t.gaD(t),u.gaD(u),s.gaD(s)),q.$4(v.gaK(),t.gaK(),u.gaK(),s.gaK()),q.$4(v.gaM(v),t.gaM(t),u.gaM(u),s.gaM(s)),q.$4(v.gaP(v),t.gaP(t),u.gaP(u),s.gaP(s)))},
aDK(d0,d1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=D.d.D(d0),c6=c5-(d0>=0?0:1),c7=c6-1,c8=c6+1,c9=c6+2
c5=D.d.D(d1)
x=c5-(d1>=0?0:1)
w=x-1
v=x+1
u=x+2
t=d0-c6
s=d1-x
c5=new A.b99()
r=c4.jQ(c6,x)
q=c7<0
p=!q
o=!p||w<0?r:c4.jQ(c7,w)
n=q?r:c4.jQ(c6,w)
m=w<0
l=m||c8>=c4.gcG(0)?r:c4.jQ(c8,w)
k=c9>=c4.gcG(0)||m?r:c4.jQ(c9,w)
j=c5.$5(t,o.gaD(o),n.gaD(n),l.gaD(l),k.gaD(k))
i=c5.$5(t,o.gaK(),n.gaK(),l.gaK(),k.gaK())
h=c5.$5(t,o.gaM(o),n.gaM(n),l.gaM(l),k.gaM(k))
g=c5.$5(t,o.gaP(o),n.gaP(n),l.gaP(l),k.gaP(k))
f=q?r:c4.jQ(c7,x)
e=c8>=c4.gcG(0)?r:c4.jQ(c8,x)
d=c9>=c4.gcG(0)?r:c4.jQ(c9,x)
a0=c5.$5(t,f.gaD(f),r.gaD(r),e.gaD(e),d.gaD(d))
a1=c5.$5(t,f.gaK(),r.gaK(),e.gaK(),d.gaK())
a2=c5.$5(t,f.gaM(f),r.gaM(r),e.gaM(e),d.gaM(d))
a3=c5.$5(t,f.gaP(f),r.gaP(r),e.gaP(e),d.gaP(d))
a4=!p||v>=c4.gb_(0)?r:c4.jQ(c7,v)
a5=v>=c4.gb_(0)?r:c4.jQ(c6,v)
a6=c8>=c4.gcG(0)||v>=c4.gb_(0)?r:c4.jQ(c8,v)
a7=c9>=c4.gcG(0)||v>=c4.gb_(0)?r:c4.jQ(c9,v)
a8=c5.$5(t,a4.gaD(a4),a5.gaD(a5),a6.gaD(a6),a7.gaD(a7))
a9=c5.$5(t,a4.gaK(),a5.gaK(),a6.gaK(),a7.gaK())
b0=c5.$5(t,a4.gaM(a4),a5.gaM(a5),a6.gaM(a6),a7.gaM(a7))
b1=c5.$5(t,a4.gaP(a4),a5.gaP(a5),a6.gaP(a6),a7.gaP(a7))
b2=!p||u>=c4.gb_(0)?r:c4.jQ(c7,u)
b3=u>=c4.gb_(0)?r:c4.jQ(c6,u)
b4=c8>=c4.gcG(0)||u>=c4.gb_(0)?r:c4.jQ(c8,u)
b5=c9>=c4.gcG(0)||u>=c4.gb_(0)?r:c4.jQ(c9,u)
b6=c5.$5(t,b2.gaD(b2),b3.gaD(b3),b4.gaD(b4),b5.gaD(b5))
b7=c5.$5(t,b2.gaK(),b3.gaK(),b4.gaK(),b5.gaK())
b8=c5.$5(t,b2.gaM(b2),b3.gaM(b3),b4.gaM(b4),b5.gaM(b5))
b9=c5.$5(t,b2.gaP(b2),b3.gaP(b3),b4.gaP(b4),b5.gaP(b5))
c0=c5.$5(s,j,a0,a8,b6)
c1=c5.$5(s,i,a1,a9,b7)
c2=c5.$5(s,h,a2,b0,b8)
c3=c5.$5(s,g,a3,b1,b9)
return c4.nf(D.d.D(c0),D.d.D(c1),D.d.D(c2),D.d.D(c3))},
wW(d,e,f){var x
if(y.c0.b(f))if(f.ghE(f).gez()!=null)if(this.gqE()){x=this.a
if(x!=null)x.eS(d,e,f.gdU(f),0,0)
return}x=this.a
if(x!=null)x.jS(d,e,f.gaD(f),f.gaK(),f.gaM(f),f.gaP(f))},
gc0(){var x=this.a
x=x==null?null:x.gc0()
return x==null?0:x},
mS(d,e){var x=this.a
return x==null?null:x.mS(0,e)},
P(d){return this.mS(0,null)},
atZ(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
if(a5==null)a5=a2.gd8()
if(a6==null)a6=a2.gpB()
a4=C.VD.i(0,a5)
if(a5.a<3)a2.gd8()
x=!1
if(a5===a2.gd8())if(a6===a2.gpB()){w=a2.a
x=(w==null?a3:w.gez())==null}if(x)return A.Ac(a2,!1,!1)
for(x=a2.gkj(),w=x.length,v=y.N,u=y.p,t=a3,s=0;s<x.length;x.length===w||(0,B.O)(x),++s,t=j){r=x[s]
q=r.a
p=q==null
o=p?a3:q.a
if(o==null)o=0
q=p?a3:q.b
if(q==null)q=0
p=r.e
p=p==null?a3:A.VZ(p)
n=r.c
if(n==null)n=a3
else{m=n.a
l=n.b
n=n.c
n=new A.X8(m,l,new Uint8Array(n.subarray(0,B.pA(0,a3,n.length))))}m=r.w
l=r.r
k=A.h8(a3,p,a5,r.y,m,q,n,l,a6,a3,C.a_,o,!1)
q=r.d
k.d=q!=null?B.jH(q,v,v):a3
if(t!=null){t.mN(k)
j=t}else j=k
q=k.a
i=q==null?a3:q.gez()
q=k.a
q=q==null?a3:q.gez()
h=q==null?a3:q.gd8()
if(h==null)h=a5
q=r.a
if(i!=null){g=B.C(u,u)
f=q==null?a3:q.e1(0,0,a3)
if(f==null)f=new A.eX()
for(q=k.a,q=q.gW(q),e=a3,d=0;q.q();){a0=q.gK(q)
a1=A.cpT(D.d.ft(f.gib()*255),D.d.ft(f.ghX()*255),D.d.ft(f.gi5()*255),0)
if(g.Z(0,a1)){p=g.i(0,a1)
p.toString
a0.sdU(0,p)}else{g.n(0,a1,d)
a0.sdU(0,d)
e=A.ou(f,a4,h,a6,e)
i.oz(d,e.gaD(e),e.gaK(),e.gaM(e));++d}f.q()}}else{f=q==null?a3:q.e1(0,0,a3)
if(f==null)f=new A.eX()
for(q=k.a,q=q.gW(q);q.q();){A.ou(f,a4,a3,a3,q.gK(q))
f.q()}}}t.toString
return t},
nv(d){return this.atZ(null,d,null)},
atY(d){return this.atZ(null,null,d)},
bke(d){var x,w,v,u
if(this.d==null){x=y.N
this.d=B.C(x,x)}for(x=B.fG(d,d.r,B.q(d).c);x.q();){w=x.d
v=this.d
v.toString
u=d.i(0,w)
u.toString
v.n(0,w,u)}},
aTi(d,e,f){var x,w=65536
switch(e.a){case 0:return null
case 1:return null
case 2:return null
case 3:x=d===C.bY?w:256
return new A.rY(new Uint8Array(x*f),x,f)
case 4:x=d===C.bY?w:256
return new A.ar2(new Uint16Array(x*f),x,f)
case 5:x=d===C.bY?w:256
return new A.ZO(new Uint32Array(x*f),x,f)
case 6:x=d===C.bY?w:256
return new A.ar1(new Int8Array(x*f),x,f)
case 7:x=d===C.bY?w:256
return new A.ar_(new Int16Array(x*f),x,f)
case 8:x=d===C.bY?w:256
return new A.ar0(new Int32Array(x*f),x,f)
case 9:x=d===C.bY?w:256
return new A.aqX(new Uint16Array(x*f),x,f)
case 10:x=d===C.bY?w:256
return new A.aqY(new Float32Array(x*f),x,f)
case 11:x=d===C.bY?w:256
return new A.aqZ(new Float64Array(x*f),x,f)}}}
A.l5.prototype={
gez(){return null}}
A.Ma.prototype={
qe(d,e){var x=this,w=x.d
if(e)w=new Uint16Array(w.length)
else w=new Uint16Array(B.bD(w))
return new A.Ma(w,x.a,x.b,x.c)},
gd8(){return C.fZ},
gh_(d){return this.d.buffer},
gmg(){return 16},
gr1(){return this.a*this.c*2},
gW(d){return A.c7Y(this)},
pL(d,e,f,g,h){return A.rZ(A.c7Y(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gc0(){return 1},
gqK(){return!0},
nf(d,e,f,g){var x=new Uint16Array(4),w=new A.Ko(x)
x[0]=A.fq(d)
x[1]=A.fq(e)
x[2]=A.fq(f)
x[3]=A.fq(g)
x=w
return x},
e1(d,e,f){if(f==null||!(f instanceof A.Gb)||f.d!==this)f=A.c7Y(this)
f.fY(0,d,e)
return f},
ng(d,e){return this.e1(d,e,null)},
m0(d,e,f){var x=this.c
this.d[e*this.a*x+d*x]=A.fq(f)},
eS(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=A.fq(f)
if(x>1){v[w+1]=A.fq(g)
if(x>2)v[w+2]=A.fq(h)}},
jS(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=A.fq(f)
if(x>1){v[w+1]=A.fq(g)
if(x>2){v[w+2]=A.fq(h)
if(x>3)v[w+3]=A.fq(i)}}},
k(d){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){}}
A.Mb.prototype={
qe(d,e){var x=this,w=x.d
if(e)w=new Float32Array(w.length)
else w=new Float32Array(B.bD(w))
return new A.Mb(w,x.a,x.b,x.c)},
gd8(){return C.i9},
gh_(d){return this.d.buffer},
gmg(){return 32},
gW(d){return A.c7Z(this)},
pL(d,e,f,g,h){return A.rZ(A.c7Z(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gc0(){return 1},
gr1(){return this.a*this.c*4},
gqK(){return!0},
nf(d,e,f,g){var x=new Float32Array(4),w=new A.Kp(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
e1(d,e,f){if(f==null||!(f instanceof A.Gc)||f.d!==this)f=A.c7Z(this)
f.fY(0,d,e)
return f},
ng(d,e){return this.e1(d,e,null)},
m0(d,e,f){var x=this.c
this.d[e*this.a*x+d*x]=f},
eS(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
jS(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
k(d){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){}}
A.Xb.prototype={
qe(d,e){var x=this,w=x.d
if(e)w=new Float64Array(w.length)
else w=new Float64Array(B.bD(w))
return new A.Xb(w,x.a,x.b,x.c)},
gd8(){return C.jF},
gh_(d){return this.d.buffer},
gt(d){return this.d.byteLength},
gmg(){return 64},
gW(d){return A.c8_(this)},
pL(d,e,f,g,h){return A.rZ(A.c8_(this),e,f,g,h)},
gc0(){return 1},
gr1(){return this.a*this.c*8},
gqK(){return!0},
nf(d,e,f,g){var x=new Float64Array(4),w=new A.Kq(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
e1(d,e,f){if(f==null||!(f instanceof A.Gd)||f.d!==this)f=A.c8_(this)
f.fY(0,d,e)
return f},
ng(d,e){return this.e1(d,e,null)},
m0(d,e,f){var x=this.c
this.d[e*this.a*x+d*x]=f},
eS(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
jS(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
k(d){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){}}
A.Xc.prototype={
qe(d,e){var x=this,w=x.d
if(e)w=new Int16Array(w.length)
else w=new Int16Array(B.bD(w))
return new A.Xc(w,x.a,x.b,x.c)},
gd8(){return C.jH},
gh_(d){return this.d.buffer},
gW(d){return A.c80(this)},
pL(d,e,f,g,h){return A.rZ(A.c80(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gc0(){return 32767},
gqK(){return!0},
gmg(){return 16},
gr1(){return this.a*this.c*2},
nf(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Int16Array(4),s=new A.Kr(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
e1(d,e,f){if(f==null||!(f instanceof A.Ge)||f.d!==this)f=A.c80(this)
f.fY(0,d,e)
return f},
ng(d,e){return this.e1(d,e,null)},
m0(d,e,f){var x=this.c
this.d[e*this.a*x+d*x]=D.d.D(f)},
eS(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
jS(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
k(d){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){}}
A.Xd.prototype={
qe(d,e){var x=this,w=x.d
if(e)w=new Int32Array(w.length)
else w=new Int32Array(B.bD(w))
return new A.Xd(w,x.a,x.b,x.c)},
gd8(){return C.jI},
gh_(d){return this.d.buffer},
gmg(){return 32},
gr1(){return this.a*this.c*4},
gW(d){return A.c81(this)},
pL(d,e,f,g,h){return A.rZ(A.c81(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gc0(){return 2147483647},
gqK(){return!0},
nf(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Int32Array(4),s=new A.Ks(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
e1(d,e,f){if(f==null||!(f instanceof A.Gf)||f.d!==this)f=A.c81(this)
f.fY(0,d,e)
return f},
ng(d,e){return this.e1(d,e,null)},
m0(d,e,f){var x=this.c
this.d[e*this.a*x+d*x]=D.d.D(f)},
eS(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
jS(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
k(d){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){}}
A.Xe.prototype={
qe(d,e){var x=this,w=x.d
if(e)w=new Int8Array(w.length)
else w=new Int8Array(B.bD(w))
return new A.Xe(w,x.a,x.b,x.c)},
gd8(){return C.jG},
gh_(d){return this.d.buffer},
gr1(){return this.a*this.c},
gW(d){return A.c82(this)},
pL(d,e,f,g,h){return A.rZ(A.c82(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gc0(){return 127},
gqK(){return!0},
gmg(){return 8},
nf(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Int8Array(4),s=new A.Kt(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
e1(d,e,f){if(f==null||!(f instanceof A.Gg)||f.d!==this)f=A.c82(this)
f.fY(0,d,e)
return f},
ng(d,e){return this.e1(d,e,null)},
m0(d,e,f){var x=this.c
this.d[e*(this.a*x)+d*x]=D.d.D(f)},
eS(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
jS(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
k(d){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){}}
A.Mc.prototype={
bEA(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.b4()
this.d=x},
qe(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bD(v))}x=w.f
x=x==null?null:x.dJ(0)
return new A.Mc(v,w.e,x,w.a,w.b,w.c)},
gd8(){return C.eS},
gt(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gc0(){var x=this.f
x=x==null?null:x.gc0()
return x==null?1:x},
gqK(){return!1},
gh_(d){var x=this.d
x===$&&B.b()
return x.buffer},
gmg(){return 1},
gW(d){return A.a_3(this)},
pL(d,e,f,g,h){return A.rZ(A.a_3(this),e,f,g,h)},
nf(d,e,f,g){var x=new A.Kw(4,0)
x.i_(D.d.D(d),D.d.D(e),D.d.D(f),D.d.D(g))
return x},
e1(d,e,f){if(f==null||!(f instanceof A.Gh)||f.f!==this)f=A.a_3(this)
f.fY(0,d,e)
return f},
ng(d,e){return this.e1(d,e,null)},
m0(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a_3(w):x).fY(0,d,e)
w.r.k0(0,f)},
eS(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a_3(w):x).fY(0,d,e)
w.r.jT(f,g,h)},
jS(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a_3(w):x).fY(0,d,e)
w.r.i_(f,g,h,i)},
k(d){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){},
gr1(){return this.e},
gez(){return this.f}}
A.Md.prototype={
qe(d,e){var x,w=this,v=w.d
if(e)v=new Uint16Array(v.length)
else v=new Uint16Array(B.bD(v))
x=w.e
x=x==null?null:x.dJ(0)
return new A.Md(v,x,w.a,w.b,w.c)},
gd8(){return C.bY},
gh_(d){return this.d.buffer},
gmg(){return 16},
gc0(){var x=this.e
x=x==null?null:x.gc0()
return x==null?65535:x},
gr1(){return this.a*this.c*2},
gW(d){return A.c83(this)},
pL(d,e,f,g,h){return A.rZ(A.c83(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gqK(){return!0},
nf(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Uint16Array(4),s=new A.Kx(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
e1(d,e,f){if(f==null||!(f instanceof A.Gi)||f.d!==this)f=A.c83(this)
f.fY(0,d,e)
return f},
ng(d,e){return this.e1(d,e,null)},
m0(d,e,f){var x=this.c
this.d[e*this.a*x+d*x]=D.d.D(f)},
eS(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
jS(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
k(d){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){},
gez(){return this.e}}
A.Me.prototype={
bEB(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.b4()
this.d=x},
qe(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bD(v))}x=w.f
x=x==null?null:x.dJ(0)
return new A.Me(v,w.e,x,w.a,w.b,w.c)},
gd8(){return C.ft},
gmg(){return 2},
gh_(d){var x=this.d
x===$&&B.b()
return x.buffer},
gW(d){return A.a_4(this)},
pL(d,e,f,g,h){return A.rZ(A.a_4(this),e,f,g,h)},
gt(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gc0(){var x=this.f
x=x==null?null:x.gc0()
return x==null?3:x},
gqK(){return!1},
nf(d,e,f,g){var x=new A.Ky(4,0)
x.i_(D.d.D(d),D.d.D(e),D.d.D(f),D.d.D(g))
return x},
e1(d,e,f){if(f==null||!(f instanceof A.Gj)||f.f!==this)f=A.a_4(this)
f.fY(0,d,e)
return f},
ng(d,e){return this.e1(d,e,null)},
m0(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a_4(w):x).fY(0,d,e)
w.r.k5(0,f)},
eS(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a_4(w):x).fY(0,d,e)
w.r.jT(f,g,h)},
jS(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a_4(w):x).fY(0,d,e)
w.r.i_(f,g,h,i)},
k(d){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){},
gr1(){return this.e},
gez(){return this.f}}
A.Mf.prototype={
qe(d,e){var x=this,w=x.d
if(e)w=new Uint32Array(w.length)
else w=new Uint32Array(B.bD(w))
return new A.Mf(w,x.a,x.b,x.c)},
gd8(){return C.ia},
gh_(d){return this.d.buffer},
gr1(){return this.a*this.c*4},
gmg(){return 32},
gc0(){return 4294967295},
gW(d){return A.c84(this)},
pL(d,e,f,g,h){return A.rZ(A.c84(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gqK(){return!0},
nf(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Uint32Array(4),s=new A.Kz(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
e1(d,e,f){if(f==null||!(f instanceof A.Gk)||f.d!==this)f=A.c84(this)
f.fY(0,d,e)
return f},
ng(d,e){return this.e1(d,e,null)},
m0(d,e,f){var x=this.c
this.d[e*this.a*x+d*x]=D.d.D(f)},
eS(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
jS(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
k(d){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){}}
A.Mg.prototype={
bEC(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.b4()
this.d=x},
qe(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bD(v))}x=w.f
x=x==null?null:x.dJ(0)
return new A.Mg(v,w.e,x,w.a,w.b,w.c)},
gd8(){return C.fu},
gh_(d){var x=this.d
x===$&&B.b()
return x.buffer},
gW(d){return A.a_5(this)},
pL(d,e,f,g,h){return A.rZ(A.a_5(this),e,f,g,h)},
gt(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gc0(){var x=this.f
x=x==null?null:x.gc0()
return x==null?15:x},
gqK(){return!1},
gmg(){return 4},
nf(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new A.KA(4,new Uint8Array(2))
t.i_(x,w,v,u)
x=t
return x},
e1(d,e,f){if(f==null||!(f instanceof A.Gl)||f.e!==this)f=A.a_5(this)
f.fY(0,d,e)
return f},
ng(d,e){return this.e1(d,e,null)},
m0(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a_5(w):x).fY(0,d,e)
w.r.k7(0,f)},
eS(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a_5(w):x).fY(0,d,e)
w.r.jT(f,g,h)},
jS(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a_5(w):x).fY(0,d,e)
w.r.i_(f,g,h,i)},
k(d){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){},
gr1(){return this.e},
gez(){return this.f}}
A.Mh.prototype={
qe(d,e){var x,w=this,v=w.d
if(e)v=new Uint8Array(v.length)
else v=new Uint8Array(B.bD(v))
x=w.e
x=x==null?null:x.dJ(0)
return new A.Mh(v,x,w.a,w.b,w.c)},
gd8(){return C.a_},
gh_(d){return this.d.buffer},
gr1(){return this.a*this.c},
gmg(){return 8},
gW(d){return A.biz(this)},
pL(d,e,f,g,h){return A.rZ(A.biz(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gc0(){var x=this.e
x=x==null?null:x.gc0()
return x==null?255:x},
gqK(){return!1},
nf(d,e,f,g){var x=A.cxF(D.d.D(D.d.bg(d,0,255)),D.d.D(D.d.bg(e,0,255)),D.d.D(D.d.bg(f,0,255)),D.d.D(D.d.bg(g,0,255)))
return x},
e1(d,e,f){if(f==null||!(f instanceof A.Gm)||f.d!==this)f=A.biz(this)
f.fY(0,d,e)
return f},
ng(d,e){return this.e1(d,e,null)},
m0(d,e,f){var x=this.c
this.d[e*(this.a*x)+d*x]=D.d.D(f)},
eS(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
jS(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
k(d){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=e==null?o:A.ou(e,o,C.a_,o,o),m=p.c
if(m===1){x=n==null?0:D.c.bg(B.b3(n.gaD(n)),0,255)
m=p.d
D.aa.jK(m,0,m.length,x)}else if(m===2){m=n==null
x=m?0:D.c.bg(B.b3(n.gaD(n)),0,255)
w=m?0:D.c.bg(B.b3(n.gaK()),0,255)
v=B.c7J(p.d.buffer,0,o)
D.iA.jK(v,0,v.length,(w<<8|x)>>>0)}else if(m===4){m=n==null
x=m?0:D.c.bg(B.b3(n.gaD(n)),0,255)
w=m?0:D.c.bg(B.b3(n.gaK()),0,255)
u=m?0:D.c.bg(B.b3(n.gaM(n)),0,255)
t=m?0:D.c.bg(B.b3(n.gaP(n)),0,255)
s=B.o_(p.d.buffer,0,o)
D.cs.jK(s,0,s.length,(t<<24|u<<16|w<<8|x)>>>0)}else{m=n==null
x=m?0:D.c.bg(B.b3(n.gaD(n)),0,255)
w=m?0:D.c.bg(B.b3(n.gaK()),0,255)
u=m?0:D.c.bg(B.b3(n.gaM(n)),0,255)
for(r=A.biz(p),m=r.d,q=m.c>0,m=m.d;r.q();){if(q)m[r.c]=D.d.D(D.c.bg(x,0,255))
r.saK(w)
r.saM(0,u)}}},
gez(){return this.e}}
A.amx.prototype={
G(){return"Interpolation."+this.b}}
A.bik.prototype={}
A.aqX.prototype={
dJ(d){return new A.aqX(new Uint16Array(B.bD(this.c)),this.a,this.b)},
gh_(d){return this.c.buffer},
gd8(){return C.fZ},
gc0(){return 1},
eV(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=A.fq(g)},
oz(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=A.fq(e)
if(w>1){x[d+1]=A.fq(f)
if(w>2)x[d+2]=A.fq(g)}},
ot(d,e,f){var x,w=this.b
if(f<w){w=this.c[e*w+f]
x=$.h7
w=(x!=null?x:A.hT())[w]}else w=0
return w},
my(d){var x=this.c[d*this.b],w=$.h7
return(w!=null?w:A.hT())[x]},
mw(d){var x,w=this.b
if(w<2)return 0
w=this.c[d*w+1]
x=$.h7
return(x!=null?x:A.hT())[w]},
mu(d){var x,w=this.b
if(w<3)return 0
w=this.c[d*w+2]
x=$.h7
return(x!=null?x:A.hT())[w]},
nO(d){var x,w=this.b
if(w<4)return 0
w=this.c[d*w+3]
x=$.h7
return(x!=null?x:A.hT())[w]},
tF(d,e){return this.eV(0,d,0,e)},
tD(d,e){return this.eV(0,d,1,e)},
tC(d,e){return this.eV(0,d,2,e)},
tB(d,e){return this.eV(0,d,3,e)}}
A.aqY.prototype={
dJ(d){return new A.aqY(new Float32Array(B.bD(this.c)),this.a,this.b)},
gh_(d){return this.c.buffer},
gd8(){return C.i9},
gc0(){return 1},
eV(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=g},
oz(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
ot(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
my(d){return this.c[d*this.b]},
mw(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
mu(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
nO(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
tF(d,e){return this.eV(0,d,0,e)},
tD(d,e){return this.eV(0,d,1,e)},
tC(d,e){return this.eV(0,d,2,e)},
tB(d,e){return this.eV(0,d,3,e)}}
A.aqZ.prototype={
dJ(d){return new A.aqZ(new Float64Array(B.bD(this.c)),this.a,this.b)},
gh_(d){return this.c.buffer},
gd8(){return C.jF},
gc0(){return 1},
eV(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=g},
oz(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
ot(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
my(d){return this.c[d*this.b]},
mw(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
mu(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
nO(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
tF(d,e){return this.eV(0,d,0,e)},
tD(d,e){return this.eV(0,d,1,e)},
tC(d,e){return this.eV(0,d,2,e)},
tB(d,e){return this.eV(0,d,3,e)}}
A.ar_.prototype={
dJ(d){return new A.ar_(new Int16Array(B.bD(this.c)),this.a,this.b)},
gh_(d){return this.c.buffer},
gd8(){return C.jH},
gc0(){return 32767},
eV(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=D.c.D(g)},
oz(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=D.d.D(e)
if(w>1){x[d+1]=D.d.D(f)
if(w>2)x[d+2]=D.d.D(g)}},
ot(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
my(d){return this.c[d*this.b]},
mw(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
mu(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
nO(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
tF(d,e){return this.eV(0,d,0,e)},
tD(d,e){return this.eV(0,d,1,e)},
tC(d,e){return this.eV(0,d,2,e)},
tB(d,e){return this.eV(0,d,3,e)}}
A.ar0.prototype={
dJ(d){return new A.ar0(new Int32Array(B.bD(this.c)),this.a,this.b)},
gh_(d){return this.c.buffer},
gd8(){return C.jI},
gc0(){return 2147483647},
eV(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=D.c.D(g)},
oz(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=D.d.D(e)
if(w>1){x[d+1]=D.d.D(f)
if(w>2)x[d+2]=D.d.D(g)}},
ot(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
my(d){return this.c[d*this.b]},
mw(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
mu(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
nO(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
tF(d,e){return this.eV(0,d,0,e)},
tD(d,e){return this.eV(0,d,1,e)},
tC(d,e){return this.eV(0,d,2,e)},
tB(d,e){return this.eV(0,d,3,e)}}
A.ar1.prototype={
dJ(d){return new A.ar1(new Int8Array(B.bD(this.c)),this.a,this.b)},
gh_(d){return this.c.buffer},
gd8(){return C.jG},
gc0(){return 127},
eV(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=D.c.D(g)},
oz(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=D.d.D(e)
if(w>1){x[d+1]=D.d.D(f)
if(w>2)x[d+2]=D.d.D(g)}},
ot(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
my(d){return this.c[d*this.b]},
mw(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
mu(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
nO(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
tF(d,e){return this.eV(0,d,0,e)},
tD(d,e){return this.eV(0,d,1,e)},
tC(d,e){return this.eV(0,d,2,e)},
tB(d,e){return this.eV(0,d,3,e)}}
A.ar2.prototype={
dJ(d){return new A.ar2(new Uint16Array(B.bD(this.c)),this.a,this.b)},
gh_(d){return this.c.buffer},
gd8(){return C.bY},
gc0(){return 65535},
eV(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=D.c.D(g)},
oz(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=D.d.D(e)
if(w>1){x[d+1]=D.d.D(f)
if(w>2)x[d+2]=D.d.D(g)}},
ot(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
my(d){return this.c[d*this.b]},
mw(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
mu(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
nO(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
tF(d,e){return this.eV(0,d,0,e)},
tD(d,e){return this.eV(0,d,1,e)},
tC(d,e){return this.eV(0,d,2,e)},
tB(d,e){return this.eV(0,d,3,e)}}
A.ZO.prototype={
dJ(d){return new A.ZO(new Uint32Array(B.bD(this.c)),this.a,this.b)},
gh_(d){return this.c.buffer},
gd8(){return C.ia},
gc0(){return 4294967295},
eV(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=D.c.D(g)},
oz(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=D.d.D(e)
if(w>1){x[d+1]=D.d.D(f)
if(w>2)x[d+2]=D.d.D(g)}},
ot(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
my(d){return this.c[d*this.b]},
mw(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
mu(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
nO(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
tF(d,e){return this.eV(0,d,0,e)},
tD(d,e){return this.eV(0,d,1,e)},
tC(d,e){return this.eV(0,d,2,e)},
tB(d,e){return this.eV(0,d,3,e)}}
A.rY.prototype={
dJ(d){return A.cih(this)},
gh_(d){return this.c.buffer},
gd8(){return C.a_},
gc0(){return 255},
eV(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=D.c.D(g)},
oz(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=D.d.D(e)
if(w>1){x[d+1]=D.d.D(f)
if(w>2)x[d+2]=D.d.D(g)}},
Q0(d,e,f,g,h){var x,w=this.b
d*=w
x=this.c
x[d]=D.c.D(e)
if(w>1){x[d+1]=D.c.D(f)
if(w>2){x[d+2]=D.c.D(g)
if(w>3)x[d+3]=D.c.D(h)}}},
ot(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
my(d){var x
d*=this.b
x=this.c
if(d>=x.length)return 0
return x[d]},
mw(d){var x=this.b
if(x<2)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+1]},
mu(d){var x=this.b
if(x<3)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+2]},
nO(d){var x=this.b
if(x<4)return 255
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+3]},
tF(d,e){return this.eV(0,d,0,e)},
tD(d,e){return this.eV(0,d,1,e)},
tC(d,e){return this.eV(0,d,2,e)},
tB(d,e){return this.eV(0,d,3,e)}}
A.Gb.prototype={
dJ(d){var x=this
return new A.Gb(x.a,x.b,x.c,x.d)},
gd8(){return C.fZ},
gt(d){return this.d.c},
gez(){return null},
gc0(){return 1},
gmt(d){return this.a},
gne(d){return this.b},
fY(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gK(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
i(d,e){var x,w=this.d
if(e<w.c){w=w.d[this.c+e]
x=$.h7
w=(x!=null?x:A.hT())[w]}else w=0
return w},
n(d,e,f){var x=this.d
if(e<x.c)x.d[this.c+e]=A.fq(f)},
gdU(d){return this.gaD(0)},
sdU(d,e){this.saD(0,e)},
gaD(d){var x,w=this.d
if(w.c>0){w=w.d[this.c]
x=$.h7
w=(x!=null?x:A.hT())[w]}else w=0
return w},
saD(d,e){var x=this.d
if(x.c>0)x.d[this.c]=A.fq(e)},
gaK(){var x,w=this.d
if(w.c>1){w=w.d[this.c+1]
x=$.h7
w=(x!=null?x:A.hT())[w]}else w=0
return w},
saK(d){var x=this.d
if(x.c>1)x.d[this.c+1]=A.fq(d)},
gaM(d){var x,w=this.d
if(w.c>2){w=w.d[this.c+2]
x=$.h7
w=(x!=null?x:A.hT())[w]}else w=0
return w},
saM(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=A.fq(e)},
gaP(d){var x,w=this.d
if(w.c>3){w=w.d[this.c+3]
x=$.h7
w=(x!=null?x:A.hT())[w]}else w=0
return w},
saP(d,e){var x,w=this.d
if(w.c>3){x=this.gaK()
w.d[this.c+3]=A.fq(x)}},
gib(){return this.gaD(0)/1},
sib(d){this.saD(0,d)},
ghX(){return this.gaK()/1},
shX(d){this.saK(d)},
gi5(){return this.gaM(0)/1},
si5(d){this.saM(0,d)},
gii(){return this.gaP(0)/1},
sii(d){this.saP(0,d)},
gjc(){return A.iO(this)},
ix(d,e){var x=this
if(x.d.c>0){x.saD(0,e.gaD(e))
x.saK(e.gaK())
x.saM(0,e.gaM(e))
x.saP(0,e.gaP(e))}},
jT(d,e,f){var x=this,w=x.d,v=w.c
if(v>0){w=w.d
w[x.c]=A.fq(d)
if(v>1){w[x.c+1]=A.fq(e)
if(v>2)w[x.c+2]=A.fq(f)}}},
i_(d,e,f,g){var x=this,w=x.d,v=w.c
if(v>0){w=w.d
w[x.c]=A.fq(d)
if(v>1){w[x.c+1]=A.fq(e)
if(v>2){w[x.c+2]=A.fq(f)
if(v>3)w[x.c+3]=A.fq(g)}}}},
gW(d){return new A.h4(this)},
l(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Gb)return B.aB(B.I(u,!0,B.q(u).h("u.E")))===B.aB(B.I(e,!0,B.q(e).h("u.E")))
if(y.L.b(e)){x=J.a3(e)
w=u.d
v=w.c
if(x.gt(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
nv(d){return A.ou(this,null,d,null,null)},
$ibd:1,
$idt:1,
$icu:1,
ghE(d){return this.d}}
A.Gc.prototype={
dJ(d){var x=this
return new A.Gc(x.a,x.b,x.c,x.d)},
gt(d){return this.d.c},
gez(){return null},
gc0(){return 1},
gd8(){return C.i9},
gmt(d){return this.a},
gne(d){return this.b},
fY(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gK(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
i(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
n(d,e,f){var x=this.d
if(e<x.c)x.d[this.c+e]=f},
gdU(d){return this.gaD(0)},
sdU(d,e){this.saD(0,e)},
gaD(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saD(d,e){var x=this.d
if(x.c>0)x.d[this.c]=e},
gaK(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saK(d){var x=this.d
if(x.c>1)x.d[this.c+1]=d},
gaM(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saM(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=e},
gaP(d){var x=this.d
return x.c>3?x.d[this.c+3]:1},
saP(d,e){var x=this.d
if(x.c>3)x.d[this.c+3]=e},
gib(){return this.gaD(0)/1},
sib(d){this.saD(0,d)},
ghX(){return this.gaK()/1},
shX(d){this.saK(d)},
gi5(){return this.gaM(0)/1},
si5(d){this.saM(0,d)},
gii(){return this.gaP(0)/1},
sii(d){this.saP(0,d)},
gjc(){return A.iO(this)},
ix(d,e){var x=this
x.saD(0,e.gaD(e))
x.saK(e.gaK())
x.saM(0,e.gaM(e))
x.saP(0,e.gaP(e))},
jT(d,e,f){var x=this.d,w=x.d,v=this.c
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
i_(d,e,f,g){var x=this.d,w=x.d,v=this.c
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
gW(d){return new A.h4(this)},
l(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Gc)return B.aB(B.I(u,!0,B.q(u).h("u.E")))===B.aB(B.I(e,!0,B.q(e).h("u.E")))
if(y.L.b(e)){x=J.a3(e)
w=u.d
v=w.c
if(x.gt(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
nv(d){return A.ou(this,null,d,null,null)},
$ibd:1,
$idt:1,
$icu:1,
ghE(d){return this.d}}
A.Gd.prototype={
dJ(d){var x=this
return new A.Gd(x.a,x.b,x.c,x.d)},
gt(d){return this.d.c},
gez(){return null},
gc0(){return 1},
gd8(){return C.jF},
gmt(d){return this.a},
gne(d){return this.b},
fY(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gK(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
i(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
n(d,e,f){var x=this.d
if(e<x.c)x.d[this.c+e]=f},
gdU(d){return this.gaD(0)},
sdU(d,e){this.saD(0,e)},
gaD(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saD(d,e){var x=this.d
if(x.c>0)x.d[this.c]=e},
gaK(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saK(d){var x=this.d
if(x.c>1)x.d[this.c+1]=d},
gaM(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saM(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=e},
gaP(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saP(d,e){var x=this.d
if(x.c>3)x.d[this.c+3]=e},
gib(){return this.gaD(0)/1},
sib(d){this.saD(0,d)},
ghX(){return this.gaK()/1},
shX(d){this.saK(d)},
gi5(){return this.gaM(0)/1},
si5(d){this.saM(0,d)},
gii(){return this.gaP(0)/1},
sii(d){this.saP(0,d)},
gjc(){return A.iO(this)},
ix(d,e){var x=this
x.saD(0,e.gaD(e))
x.saK(e.gaK())
x.saM(0,e.gaM(e))
x.saP(0,e.gaP(e))},
jT(d,e,f){var x=this.d,w=x.d,v=this.c
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
i_(d,e,f,g){var x=this.d,w=x.d,v=this.c
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
gW(d){return new A.h4(this)},
l(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Gd)return B.aB(B.I(u,!0,B.q(u).h("u.E")))===B.aB(B.I(e,!0,B.q(e).h("u.E")))
if(y.L.b(e)){x=J.a3(e)
w=u.d
v=w.c
if(x.gt(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
nv(d){return A.ou(this,null,d,null,null)},
$ibd:1,
$idt:1,
$icu:1,
ghE(d){return this.d}}
A.Ge.prototype={
dJ(d){var x=this
return new A.Ge(x.a,x.b,x.c,x.d)},
gt(d){return this.d.c},
gez(){return null},
gc0(){return 32767},
gd8(){return C.jH},
gmt(d){return this.a},
gne(d){return this.b},
fY(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gK(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
i(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
n(d,e,f){var x=this.d
if(e<x.c)x.d[this.c+e]=D.d.D(f)},
gdU(d){return this.gaD(0)},
sdU(d,e){this.saD(0,e)},
gaD(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saD(d,e){var x=this.d
if(x.c>0)x.d[this.c]=D.d.D(e)},
gaK(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saK(d){var x=this.d
if(x.c>1)x.d[this.c+1]=D.d.D(d)},
gaM(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saM(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=D.d.D(e)},
gaP(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saP(d,e){var x=this.d
if(x.c>3)x.d[this.c+3]=D.d.D(e)},
gib(){return this.gaD(0)/32767},
sib(d){this.saD(0,d*32767)},
ghX(){return this.gaK()/32767},
shX(d){this.saK(d*32767)},
gi5(){return this.gaM(0)/32767},
si5(d){this.saM(0,d*32767)},
gii(){return this.gaP(0)/32767},
sii(d){this.saP(0,d*32767)},
gjc(){return A.iO(this)},
ix(d,e){var x=this
x.saD(0,e.gaD(e))
x.saK(e.gaK())
x.saM(0,e.gaM(e))
x.saP(0,e.gaP(e))},
jT(d,e,f){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2)w[x+2]=D.c.D(f)}}},
i_(d,e,f,g){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2){w[x+2]=D.c.D(f)
if(v>3)w[x+3]=D.c.D(g)}}}},
gW(d){return new A.h4(this)},
l(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Ge)return B.aB(B.I(u,!0,B.q(u).h("u.E")))===B.aB(B.I(e,!0,B.q(e).h("u.E")))
if(y.L.b(e)){x=J.a3(e)
w=u.d
v=w.c
if(x.gt(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
nv(d){return A.ou(this,null,d,null,null)},
$ibd:1,
$idt:1,
$icu:1,
ghE(d){return this.d}}
A.Gf.prototype={
dJ(d){var x=this
return new A.Gf(x.a,x.b,x.c,x.d)},
gt(d){return this.d.c},
gez(){return null},
gc0(){return 2147483647},
gd8(){return C.jI},
gmt(d){return this.a},
gne(d){return this.b},
fY(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gK(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
i(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
n(d,e,f){var x=this.d
if(e<x.c)x.d[this.c+e]=D.d.D(f)},
gdU(d){return this.gaD(0)},
sdU(d,e){this.saD(0,e)},
gaD(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saD(d,e){var x=this.d
if(x.c>0)x.d[this.c]=D.d.D(e)},
gaK(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saK(d){var x=this.d
if(x.c>1)x.d[this.c+1]=D.d.D(d)},
gaM(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saM(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=D.d.D(e)},
gaP(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saP(d,e){var x=this.d
if(x.c>3)x.d[this.c+3]=D.d.D(e)},
gib(){return this.gaD(0)/2147483647},
sib(d){this.saD(0,d*2147483647)},
ghX(){return this.gaK()/2147483647},
shX(d){this.saK(d*2147483647)},
gi5(){return this.gaM(0)/2147483647},
si5(d){this.saM(0,d*2147483647)},
gii(){return this.gaP(0)/2147483647},
sii(d){this.saP(0,d*2147483647)},
gjc(){return A.iO(this)},
ix(d,e){var x=this
x.saD(0,e.gaD(e))
x.saK(e.gaK())
x.saM(0,e.gaM(e))
x.saP(0,e.gaP(e))},
jT(d,e,f){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2)w[x+2]=D.c.D(f)}}},
i_(d,e,f,g){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2){w[x+2]=D.c.D(f)
if(v>3)w[x+3]=D.c.D(g)}}}},
gW(d){return new A.h4(this)},
l(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Gf)return B.aB(B.I(u,!0,B.q(u).h("u.E")))===B.aB(B.I(e,!0,B.q(e).h("u.E")))
if(y.L.b(e)){x=J.a3(e)
w=u.d
v=w.c
if(x.gt(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
nv(d){return A.ou(this,null,d,null,null)},
$ibd:1,
$idt:1,
$icu:1,
ghE(d){return this.d}}
A.Gg.prototype={
dJ(d){var x=this
return new A.Gg(x.a,x.b,x.c,x.d)},
gt(d){return this.d.c},
gez(){return null},
gc0(){return 127},
gd8(){return C.jG},
gmt(d){return this.a},
gne(d){return this.b},
fY(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gK(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
i(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
n(d,e,f){var x=this.d
if(e<x.c)x.d[this.c+e]=D.d.D(f)},
gdU(d){return this.gaD(0)},
sdU(d,e){this.saD(0,e)},
gaD(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saD(d,e){var x=this.d
if(x.c>0)x.d[this.c]=D.d.D(e)},
gaK(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saK(d){var x=this.d
if(x.c>1)x.d[this.c+1]=D.d.D(d)},
gaM(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saM(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=D.d.D(e)},
gaP(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saP(d,e){var x=this.d
if(x.c>3)x.d[this.c+3]=D.d.D(e)},
gib(){return this.gaD(0)/127},
sib(d){this.saD(0,d*127)},
ghX(){return this.gaK()/127},
shX(d){this.saK(d*127)},
gi5(){return this.gaM(0)/127},
si5(d){this.saM(0,d*127)},
gii(){return this.gaP(0)/127},
sii(d){this.saP(0,d*127)},
gjc(){return A.iO(this)},
ix(d,e){var x=this
x.saD(0,e.gaD(e))
x.saK(e.gaK())
x.saM(0,e.gaM(e))
x.saP(0,e.gaP(e))},
jT(d,e,f){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2)w[x+2]=D.c.D(f)}}},
i_(d,e,f,g){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2){w[x+2]=D.c.D(f)
if(v>3)w[x+3]=D.c.D(g)}}}},
gW(d){return new A.h4(this)},
l(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Gg)return B.aB(B.I(u,!0,B.q(u).h("u.E")))===B.aB(B.I(e,!0,B.q(e).h("u.E")))
if(y.L.b(e)){x=J.a3(e)
w=u.d
v=w.c
if(x.gt(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
nv(d){return A.ou(this,null,d,null,null)},
$ibd:1,
$idt:1,
$icu:1,
ghE(d){return this.d}}
A.arg.prototype={
q(){var x=this,w=x.a
if(w.gmt(w)+1>x.d){w.fY(0,x.b,w.gne(w)+1)
return w.gne(w)<=x.e}return w.q()},
gK(d){return this.a},
$ibd:1}
A.Gh.prototype={
dJ(d){var x=this
return new A.Gh(x.a,x.b,x.c,x.d,x.e,x.f)},
gt(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
gez(){return this.f.f},
gc0(){return this.f.gc0()},
gd8(){return C.eS},
gmt(d){return this.a},
gne(d){return this.b},
fY(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.f
w=f*x.e
v.e=w
x=e*x.c
v.c=w+D.c.O(x,3)
v.d=x&7},
gK(d){return this},
q(){var x,w=this,v=++w.a,u=w.f
if(v===u.a){w.a=0
v=++w.b
w.d=0;++w.c
w.e=w.e+u.e
return v<u.b}x=u.c
if(u.f!=null||x===1){if(++w.d>7){w.d=0;++w.c}}else{v*=x
w.d=v&7
w.c=w.e+D.c.O(v,3)}v=w.c
u=u.d
u===$&&B.b()
return v<u.byteLength},
a3A(d,e){var x,w=this.c,v=7-(this.d+e)
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
if(w>=x.length)return 0
return D.c.fC(x[w],v)&1},
oK(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.a3A(0,d):0
else x=w.ot(0,this.a3A(0,0),d)
return x},
k0(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=7-(this.d+d)
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.bg(D.d.D(e),0,1)
s=C.aA8[w]
v=D.c.ev(t,w)
r.d[x]=(u&s|v)>>>0},
i(d,e){return this.oK(e)},
n(d,e,f){return this.k0(e,f)},
gdU(d){return this.a3A(0,0)},
sdU(d,e){this.k0(0,e)},
gaD(d){return this.oK(0)},
saD(d,e){this.k0(0,e)},
gaK(){return this.oK(1)},
saK(d){this.k0(1,d)},
gaM(d){return this.oK(2)},
saM(d,e){this.k0(2,e)},
gaP(d){return this.oK(3)},
saP(d,e){this.k0(3,e)},
gib(){return this.oK(0)/this.f.gc0()},
sib(d){this.k0(0,d*this.f.gc0())},
ghX(){return this.oK(1)/this.f.gc0()},
shX(d){this.k0(1,d*this.f.gc0())},
gi5(){return this.oK(2)/this.f.gc0()},
si5(d){this.k0(2,d*this.f.gc0())},
gii(){return this.oK(3)/this.f.gc0()},
sii(d){this.k0(3,d*this.f.gc0())},
gjc(){return A.iO(this)},
ix(d,e){var x=this
x.k0(0,e.gaD(e))
x.k0(1,e.gaK())
x.k0(2,e.gaM(e))
x.k0(3,e.gaP(e))},
jT(d,e,f){var x=this,w=x.f.c
if(w>0){x.k0(0,d)
if(w>1){x.k0(1,e)
if(w>2)x.k0(2,f)}}},
i_(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.k0(0,d)
if(w>1){x.k0(1,e)
if(w>2){x.k0(2,f)
if(w>3)x.k0(3,g)}}}},
gW(d){return new A.h4(this)},
l(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Gh)return B.aB(B.I(u,!0,B.q(u).h("u.E")))===B.aB(B.I(e,!0,B.q(e).h("u.E")))
if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a3(e)
if(x.gt(e)!==v)return!1
if(u.oK(0)!==x.i(e,0))return!1
if(v>1){if(u.oK(1)!==x.i(e,1))return!1
if(v>2){if(u.oK(2)!==x.i(e,2))return!1
if(v>3)if(u.oK(3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
nv(d){return A.ou(this,null,d,null,null)},
$ibd:1,
$idt:1,
$icu:1,
ghE(d){return this.f}}
A.Gi.prototype={
dJ(d){var x=this
return new A.Gi(x.a,x.b,x.c,x.d)},
gt(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
gez(){return this.d.e},
gc0(){return this.d.gc0()},
gd8(){return C.bY},
gmt(d){return this.a},
gne(d){return this.b},
fY(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gK(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c
x+=v.e==null?v.c:1
w.c=x
return x<v.d.length},
hx(d,e){var x=this.d,w=x.e
if(w!=null)x=w.ot(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
i(d,e){return this.hx(0,e)},
n(d,e,f){var x=this.d
if(e<x.c)x.d[this.c+e]=D.d.D(f)},
gdU(d){return this.gaD(0)},
sdU(d,e){this.saD(0,e)},
gaD(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.my(x.d[this.c])
return x},
saD(d,e){var x=this.d
if(x.c>0)x.d[this.c]=D.d.D(e)},
gaK(){var x=this.d,w=x.e
if(w==null)x=x.c>1?x.d[this.c+1]:0
else x=w.mw(x.d[this.c])
return x},
saK(d){var x=this.d
if(x.c>1)x.d[this.c+1]=D.d.D(d)},
gaM(d){var x=this.d,w=x.e
if(w==null)x=x.c>2?x.d[this.c+2]:0
else x=w.mu(x.d[this.c])
return x},
saM(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=D.d.D(e)},
gaP(d){var x=this.d,w=x.e
if(w==null)x=x.c>3?x.d[this.c+3]:0
else x=w.nO(x.d[this.c])
return x},
saP(d,e){var x=this.d
if(x.c>3)x.d[this.c+3]=D.d.D(e)},
gib(){return this.gaD(0)/this.d.gc0()},
sib(d){this.saD(0,d*this.d.gc0())},
ghX(){return this.gaK()/this.d.gc0()},
shX(d){this.saK(d*this.d.gc0())},
gi5(){return this.gaM(0)/this.d.gc0()},
si5(d){this.saM(0,d*this.d.gc0())},
gii(){return this.gaP(0)/this.d.gc0()},
sii(d){this.saP(0,d*this.d.gc0())},
gjc(){return A.iO(this)},
ix(d,e){var x=this
x.saD(0,e.gaD(e))
x.saK(e.gaK())
x.saM(0,e.gaM(e))
x.saP(0,e.gaP(e))},
jT(d,e,f){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2)w[x+2]=D.c.D(f)}}},
i_(d,e,f,g){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2){w[x+2]=D.c.D(f)
if(v>3)w[x+3]=D.c.D(g)}}}},
gW(d){return new A.h4(this)},
l(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Gi)return B.aB(B.I(u,!0,B.q(u).h("u.E")))===B.aB(B.I(e,!0,B.q(e).h("u.E")))
if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a3(e)
if(x.gt(e)!==v)return!1
if(u.hx(0,0)!==x.i(e,0))return!1
if(v>1){if(u.hx(0,1)!==x.i(e,1))return!1
if(v>2){if(u.hx(0,2)!==x.i(e,2))return!1
if(v>3)if(u.hx(0,3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
nv(d){return A.ou(this,null,d,null,null)},
$ibd:1,
$idt:1,
$icu:1,
ghE(d){return this.d}}
A.Gj.prototype={
dJ(d){var x=this
return new A.Gj(x.a,x.b,x.c,x.d,x.e,x.f)},
gt(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
gez(){return this.f.f},
gc0(){return this.f.gc0()},
gd8(){return C.ft},
gasv(){var x=this.f
return x.f!=null?2:x.c<<1>>>0},
gmt(d){return this.a},
gne(d){return this.b},
fY(d,e,f){var x,w,v,u=this
u.a=e
u.b=f
x=u.gasv()
w=u.b*u.f.e
u.e=w
v=u.a*x
u.c=w+D.c.O(v,3)
u.d=v&7},
gK(d){return this},
q(){var x,w,v=this,u=v.f
if(++v.a===u.a){v.a=0
x=++v.b
v.d=0;++v.c
v.e=v.e+u.e
return x<u.b}if(u.f!=null||u.c===1){x=v.d+=2
if(x>7){v.d=0;++v.c}}else{w=v.gasv()
x=v.a*w
v.d=x&7
v.c=v.e+D.c.O(x,3)}x=v.c
u=u.d
u===$&&B.b()
return x<u.length},
a3B(d,e){var x,w=this.c,v=6-(this.d+(e<<1>>>0))
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
return D.c.fC(x[w],v)&3},
oL(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.a3B(0,d):0
else x=w.ot(0,this.a3B(0,0),d)
return x},
k5(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=6-(this.d+(d<<1>>>0))
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.bg(D.d.D(e),0,3)
s=C.anJ[D.c.O(w,1)]
v=D.c.ev(t,w)
r.d[x]=(u&s|v)>>>0},
i(d,e){return this.oL(e)},
n(d,e,f){return this.k5(e,f)},
gdU(d){return this.a3B(0,0)},
sdU(d,e){this.k5(0,e)},
gaD(d){return this.oL(0)},
saD(d,e){this.k5(0,e)},
gaK(){return this.oL(1)},
saK(d){this.k5(1,d)},
gaM(d){return this.oL(2)},
saM(d,e){this.k5(2,e)},
gaP(d){return this.oL(3)},
saP(d,e){this.k5(3,e)},
gib(){return this.oL(0)/this.f.gc0()},
sib(d){this.k5(0,d*this.f.gc0())},
ghX(){return this.oL(1)/this.f.gc0()},
shX(d){this.k5(1,d*this.f.gc0())},
gi5(){return this.oL(2)/this.f.gc0()},
si5(d){this.k5(2,d*this.f.gc0())},
gii(){return this.oL(3)/this.f.gc0()},
sii(d){this.k5(3,d*this.f.gc0())},
gjc(){return A.iO(this)},
ix(d,e){var x=this
x.k5(0,e.gaD(e))
x.k5(1,e.gaK())
x.k5(2,e.gaM(e))
x.k5(3,e.gaP(e))},
jT(d,e,f){var x=this,w=x.f.c
if(w>0){x.k5(0,d)
if(w>1){x.k5(1,e)
if(w>2)x.k5(2,f)}}},
i_(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.k5(0,d)
if(w>1){x.k5(1,e)
if(w>2){x.k5(2,f)
if(w>3)x.k5(3,g)}}}},
gW(d){return new A.h4(this)},
l(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Gj)return B.aB(B.I(u,!0,B.q(u).h("u.E")))===B.aB(B.I(e,!0,B.q(e).h("u.E")))
if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a3(e)
if(x.gt(e)!==v)return!1
if(u.oL(0)!==x.i(e,0))return!1
if(v>1){if(u.oL(1)!==x.i(e,1))return!1
if(v>2){if(u.oL(2)!==x.i(e,2))return!1
if(v>3)if(u.oL(3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
nv(d){return A.ou(this,null,d,null,null)},
$ibd:1,
$idt:1,
$icu:1,
ghE(d){return this.f}}
A.Gk.prototype={
dJ(d){var x=this
return new A.Gk(x.a,x.b,x.c,x.d)},
gt(d){return this.d.c},
gez(){return null},
gc0(){return 4294967295},
gd8(){return C.ia},
gmt(d){return this.a},
gne(d){return this.b},
fY(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gK(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
i(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
n(d,e,f){var x=this.d
if(e<x.c)x.d[this.c+e]=D.d.D(f)},
gdU(d){return this.gaD(0)},
sdU(d,e){this.saD(0,e)},
gaD(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saD(d,e){var x=this.d
if(x.c>0)x.d[this.c]=D.d.D(e)},
gaK(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saK(d){var x=this.d
if(x.c>1)x.d[this.c+1]=D.d.D(d)},
gaM(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saM(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=D.d.D(e)},
gaP(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saP(d,e){var x=this.d
if(x.c>3)x.d[this.c+3]=D.d.D(e)},
gib(){return this.gaD(0)/4294967295},
sib(d){this.saD(0,d*4294967295)},
ghX(){return this.gaK()/4294967295},
shX(d){this.saK(d*4294967295)},
gi5(){return this.gaM(0)/4294967295},
si5(d){this.saM(0,d*4294967295)},
gii(){return this.gaP(0)/4294967295},
sii(d){this.saP(0,d*4294967295)},
gjc(){return A.iO(this)},
ix(d,e){var x=this
x.saD(0,e.gaD(e))
x.saK(e.gaK())
x.saM(0,e.gaM(e))
x.saP(0,e.gaP(e))},
jT(d,e,f){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2)w[x+2]=D.c.D(f)}}},
i_(d,e,f,g){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2){w[x+2]=D.c.D(f)
if(v>3)w[x+3]=D.c.D(g)}}}},
gW(d){return new A.h4(this)},
l(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Gk)return B.aB(B.I(u,!0,B.q(u).h("u.E")))===B.aB(B.I(e,!0,B.q(e).h("u.E")))
if(y.L.b(e)){x=J.a3(e)
w=u.d
v=w.c
if(x.gt(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
nv(d){return A.ou(this,null,d,null,null)},
$ibd:1,
$idt:1,
$icu:1,
ghE(d){return this.d}}
A.Gl.prototype={
dJ(d){var x=this
return new A.Gl(x.a,x.b,x.c,x.d,x.e)},
gt(d){var x=this.e,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
gez(){return this.e.f},
gc0(){return this.e.gc0()},
gd8(){return C.fu},
gmt(d){return this.a},
gne(d){return this.b},
fY(d,e,f){var x,w,v,u=this
u.a=e
u.b=f
x=u.e
w=x.c*4
v=x.e
if(w===4)x=f*v+D.c.O(e,1)
else if(w===8)x=f*x.a+e
else{x=f*v
x=w===16?x+(e<<1>>>0):x+D.c.O(e*w,3)}u.c=x
x=e*w
u.d=w>7?x&4:x&7},
gK(d){return this},
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
a3C(d,e){var x,w=this.c,v=4-(this.d+(e<<2>>>0))
if(v<0){v+=8;++w}x=this.e.d
x===$&&B.b()
return D.c.fC(x[w],v)&15},
oJ(d){var x=this.e,w=x.f
if(w==null)x=x.c>d?this.a3C(0,d):0
else x=w.ot(0,this.a3C(0,0),d)
return x},
k7(d,e){var x,w,v,u,t,s,r=this.e
if(d>=r.c)return
x=this.c
w=4-(this.d+(d<<2>>>0))
if(w<0){w+=8;++x}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.bg(D.d.D(e),0,15)
s=w===4?15:240
v=D.c.ev(t,w)
r.d[x]=(u&s|v)>>>0},
i(d,e){return this.oJ(e)},
n(d,e,f){return this.k7(e,f)},
gdU(d){return this.a3C(0,0)},
sdU(d,e){this.k7(0,e)},
gaD(d){return this.oJ(0)},
saD(d,e){this.k7(0,e)},
gaK(){return this.oJ(1)},
saK(d){this.k7(1,d)},
gaM(d){return this.oJ(2)},
saM(d,e){this.k7(2,e)},
gaP(d){return this.oJ(3)},
saP(d,e){this.k7(3,e)},
gib(){return this.oJ(0)/this.e.gc0()},
sib(d){this.k7(0,d*this.e.gc0())},
ghX(){return this.oJ(1)/this.e.gc0()},
shX(d){this.k7(1,d*this.e.gc0())},
gi5(){return this.oJ(2)/this.e.gc0()},
si5(d){this.k7(2,d*this.e.gc0())},
gii(){return this.oJ(3)/this.e.gc0()},
sii(d){this.k7(3,d*this.e.gc0())},
gjc(){return A.iO(this)},
ix(d,e){var x=this
x.k7(0,e.gaD(e))
x.k7(1,e.gaK())
x.k7(2,e.gaM(e))
x.k7(3,e.gaP(e))},
jT(d,e,f){var x=this,w=x.e.c
if(w>0){x.k7(0,d)
if(w>1){x.k7(1,e)
if(w>2)x.k7(2,f)}}},
i_(d,e,f,g){var x=this,w=x.e.c
if(w>0){x.k7(0,d)
if(w>1){x.k7(1,e)
if(w>2){x.k7(2,f)
if(w>3)x.k7(3,g)}}}},
gW(d){return new A.h4(this)},
l(d,e){var x,w,v=this
if(e==null)return!1
if(e instanceof A.Gl)return B.aB(B.I(v,!0,B.q(v).h("u.E")))===B.aB(B.I(e,!0,B.q(e).h("u.E")))
if(y.L.b(e)){x=v.e.c
w=J.a3(e)
if(w.gt(e)!==x)return!1
if(v.oJ(0)!==w.i(e,0))return!1
if(x>1){if(v.oJ(1)!==w.i(e,1))return!1
if(x>2){if(v.oJ(2)!==w.i(e,2))return!1
if(x>3)if(v.oJ(3)!==w.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
nv(d){return A.ou(this,null,d,null,null)},
$ibd:1,
$idt:1,
$icu:1,
ghE(d){return this.e}}
A.Gm.prototype={
dJ(d){var x=this
return new A.Gm(x.a,x.b,x.c,x.d)},
gt(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
gez(){return this.d.e},
gc0(){return this.d.gc0()},
gd8(){return C.a_},
gmt(d){return this.a},
gne(d){return this.b},
fY(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gK(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c
x+=v.e==null?v.c:1
w.c=x
return x<v.d.length},
hx(d,e){var x=this.d,w=x.e
if(w!=null)x=w.ot(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
i(d,e){return this.hx(0,e)},
n(d,e,f){var x=this.d
if(e<x.c)x.d[this.c+e]=D.d.D(D.d.bg(f,0,255))},
gdU(d){return this.d.d[this.c]},
sdU(d,e){this.d.d[this.c]=D.d.D(D.d.bg(e,0,255))},
gaD(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.my(x.d[this.c])
return x},
saD(d,e){var x=this.d
if(x.c>0)x.d[this.c]=D.d.D(D.d.bg(e,0,255))},
gaK(){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>1?w.d[x.c+1]:0}else w=v.mw(w.d[x.c])
return w},
saK(d){var x=this.d,w=x.c
if(w===2)x.d[this.c]=D.d.D(D.d.bg(d,0,255))
else if(w>1)x.d[this.c+1]=D.d.D(D.d.bg(d,0,255))},
gaM(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>2?w.d[x.c+2]:0}else w=v.mu(w.d[x.c])
return w},
saM(d,e){var x=this.d,w=x.c
if(w===2)x.d[this.c]=D.d.D(D.d.bg(e,0,255))
else if(w>2)x.d[this.c+2]=D.d.D(D.d.bg(e,0,255))},
gaP(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c+1]
else w=v>3?w.d[x.c+3]:255}else w=v.nO(w.d[x.c])
return w},
saP(d,e){var x=this.d,w=x.c
if(w===2)x.d[this.c+1]=D.d.D(D.d.bg(e,0,255))
else if(w>3)x.d[this.c+3]=D.d.D(D.d.bg(e,0,255))},
gib(){return this.gaD(0)/this.d.gc0()},
sib(d){this.saD(0,d*this.d.gc0())},
ghX(){return this.gaK()/this.d.gc0()},
shX(d){this.saK(d*this.d.gc0())},
gi5(){return this.gaM(0)/this.d.gc0()},
si5(d){this.saM(0,d*this.d.gc0())},
gii(){return this.gaP(0)/this.d.gc0()},
sii(d){this.saP(0,d*this.d.gc0())},
gjc(){return this.d.c===2?this.gaD(0):A.iO(this)},
ix(d,e){var x=this
if(x.d.e!=null)x.sdU(0,e.gdU(e))
else{x.saD(0,e.gaD(e))
x.saK(e.gaK())
x.saM(0,e.gaM(e))
x.saP(0,e.gaP(e))}},
jT(d,e,f){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2)w[x+2]=D.c.D(f)}}},
i_(d,e,f,g){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2){w[x+2]=D.c.D(f)
if(v>3)w[x+3]=D.c.D(g)}}}},
gW(d){return new A.h4(this)},
l(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Gm)return B.aB(B.I(u,!0,B.q(u).h("u.E")))===B.aB(B.I(e,!0,B.q(e).h("u.E")))
if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a3(e)
if(x.gt(e)!==v)return!1
if(u.hx(0,0)!==x.i(e,0))return!1
if(v>1){if(u.hx(0,1)!==x.i(e,1))return!1
if(v>2){if(u.hx(0,2)!==x.i(e,2))return!1
if(v>3)if(u.hx(0,3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aB(B.I(this,!0,B.q(this).h("u.E")))},
nv(d){return A.ou(this,null,d,null,null)},
$ibd:1,
$idt:1,
$icu:1,
ghE(d){return this.d}}
A.eX.prototype={
dJ(d){return new A.eX()},
ghE(d){return $.crF()},
gmt(d){return 0},
gne(d){return 0},
gt(d){return 0},
gc0(){return 0},
gd8(){return C.a_},
gez(){return null},
i(d,e){return 0},
n(d,e,f){},
gdU(d){return 0},
sdU(d,e){},
gaD(d){return 0},
saD(d,e){},
gaK(){return 0},
saK(d){},
gaM(d){return 0},
saM(d,e){},
gaP(d){return 0},
saP(d,e){},
gib(){return 0},
sib(d){},
ghX(){return 0},
shX(d){},
gi5(){return 0},
si5(d){},
gii(){return 0},
sii(d){},
gjc(){return 0},
ix(d,e){},
jT(d,e,f){},
i_(d,e,f,g){},
fY(d,e,f){},
gK(d){return this},
q(){return!1},
l(d,e){if(e==null)return!1
return e instanceof A.eX},
gv(d){return 0},
gW(d){return new A.h4(this)},
nv(d){return this},
$ibd:1,
$idt:1,
$icu:1}
A.b4g.prototype={
G(){return"FlipDirection."+this.b}}
A.am4.prototype={
k(d){return"ImageException: "+this.a},
$iaZ:1}
A.l8.prototype={
gt(d){return this.c-this.d},
i(d,e){return J.t(this.a,this.d+e)},
n(d,e,f){J.bQ(this.a,this.d+e,f)
return f},
qQ(d,e,f,g){var x=this.a,w=J.cD(x),v=this.d+d
if(f instanceof A.l8)w.dz(x,v,v+e,f.a,f.d+g)
else w.dz(x,v,v+e,y.L.a(f),g)},
z2(d,e,f){return this.qQ(d,e,f,0)},
bx4(d,e,f){var x=this.a,w=this.d+d
J.ra(x,w,w+e,f)},
a_H(d,e,f){var x=this,w=f!=null?x.b+f:x.d
return A.cz(x.a,x.e,d,w+e)},
jj(d){return this.a_H(d,0,null)},
zZ(d,e){return this.a_H(d,0,e)},
Qq(d,e){return this.a_H(d,e,null)},
dG(d,e){var x=this,w=x.d,v=w+(x.c-w)
for(;w<v;++w)if(J.n(J.t(x.a,w),e))return w-x.b
return-1},
cW(){return J.t(this.a,this.d++)},
kq(d){var x=this.jj(d)
this.d=this.d+(x.c-x.d)
return x},
pH(d){var x,w,v,u,t=this
if(d==null){x=B.a([],y.t)
for(w=t.c;v=t.d,v<w;){u=t.a
t.d=v+1
v=J.t(u,v)
if(v===0)return B.e9(x,0,null)
x.push(v)}throw B.e(A.bK("EOF reached without finding string terminator (length: "+B.o(d)+")"))}return B.e9(t.kq(d).hp(),0,null)},
Om(){return this.pH(null)},
azW(d){var x,w,v,u=this,t=B.a([],y.t)
for(x=u.c;w=u.d,w<x;){v=u.a
u.d=w+1
w=J.t(v,w)
t.push(w)
if(w===10||t.length>=d)return B.e9(t,0,null)}return B.e9(t,0,null)},
bBy(){return this.azW(256)},
bBz(){var x,w,v,u=this,t=B.a([],y.t)
for(x=u.c;w=u.d,w<x;){v=u.a
u.d=w+1
w=J.t(v,w)
if(w===0)return new B.De(!0).E_(t,0,null,!0)
t.push(w)}return D.al.Bk(0,t,!0)},
bI(){var x=this,w=J.t(x.a,x.d++)&255,v=J.t(x.a,x.d++)&255
if(x.e)return w<<8|v
return v<<8|w},
qX(){var x=this,w=J.t(x.a,x.d++)&255,v=J.t(x.a,x.d++)&255,u=J.t(x.a,x.d++)&255
if(x.e)return u|v<<8|w<<16
return w|v<<8|u<<16},
ai(){var x=this,w=J.t(x.a,x.d++)&255,v=J.t(x.a,x.d++)&255,u=J.t(x.a,x.d++)&255,t=J.t(x.a,x.d++)&255
if(x.e)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
Yt(){return A.cVM(this.aay())},
aay(){var x=this,w=J.t(x.a,x.d++)&255,v=J.t(x.a,x.d++)&255,u=J.t(x.a,x.d++)&255,t=J.t(x.a,x.d++)&255,s=J.t(x.a,x.d++)&255,r=J.t(x.a,x.d++)&255,q=J.t(x.a,x.d++)&255,p=J.t(x.a,x.d++)&255
if(x.e)return(D.c.ef(w,56)|D.c.ef(v,48)|D.c.ef(u,40)|D.c.ef(t,32)|s<<24|r<<16|q<<8|p)>>>0
return(D.c.ef(p,56)|D.c.ef(q,48)|D.c.ef(r,40)|D.c.ef(s,32)|t<<24|u<<16|v<<8|w)>>>0},
HM(d,e,f){var x,w=this,v=w.a
if(y.D.b(v))return w.aB_(e,f)
x=w.b+w.d+e
return J.aPY(v,x,f<=0?w.c:x+f)},
fA(d){return this.HM(0,0,0)},
aB_(d,e){var x,w=this,v=e==null?w.c-w.d-d:e,u=w.a
if(y.D.b(u))return B.bX(u.buffer,u.byteOffset+w.d+d,v)
x=w.d+d
x=J.aPY(u,x,x+v)
return new Uint8Array(B.bD(x))},
hp(){return this.aB_(0,null)},
OG(){var x=this.a
if(y.D.b(x))return B.o_(x.buffer,x.byteOffset+this.d,null)
return B.o_(this.hp().buffer,0,null)}}
A.bhd.prototype={
bjX(d){var x=this
x.alf(d)
x.ait()
x.akV()
x.ah2()},
b6G(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.c=Math.max(d,4)
n.f=m-n.d
n.r=m-1
x=D.d.aY(m,8)
n.w=x
n.x=x*256
n.Q=new A.ZO(new Uint32Array(1024),256,4)
n.a=new A.rY(new Uint8Array(768),256,3)
n.d=3
n.e=2
x=D.d.O(m,3)
n.y=new Int32Array(x)
x=y.cb
n.z=B.br(m*3,0,!1,x)
n.at=B.br(n.c,0,!1,x)
x=n.ax=B.br(n.c,0,!1,x)
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
ah2(){var x,w,v,u,t,s
for(x=0;x<this.c;++x){w=this.a
w===$&&B.b()
v=this.Q
v===$&&B.b()
u=v.b
t=2<u?v.c[x*u+2]:0
s=1<u?v.c[x*u+1]:0
v=0<u?v.c[x*u]:0
w.oz(x,Math.abs(t),Math.abs(s),Math.abs(v))}},
b4G(d,e,f){var x,w,v,u=this.as[e],t=u-1,s=this.c,r=this.Q,q=1000,p=-1
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
ait(){var x,w,v,u,t,s,r=this
for(x=0,w=0;x<r.c;++x){for(v=0;v<3;++v,++w){u=r.z
u===$&&B.b()
t=D.c.bg(D.d.D(0.5+u[w]),0,255)
u=r.Q
u===$&&B.b()
s=u.b
if(v<s)u.c[x*s+v]=D.c.D(t)}u=r.Q
u===$&&B.b()
s=u.b
if(3<s)u.c[x*s+3]=D.c.D(x)}},
akV(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(x=j.c,w=j.Q,v=j.as,u=0,t=0,s=0;s<x;s=o){w===$&&B.b()
r=w.b
q=1<r
p=q?w.c[s*r+1]:0
for(o=s+1,n=o,m=s;n<x;++n)if((q?w.c[n*r+1]:0)<p){p=q?w.c[n*r+1]:0
m=n}if(s!==m){l=0<r
n=l?w.c[m*r]:0
k=l?w.c[s*r]:0
if(l)w.c[m*r]=D.c.D(k)
if(l)w.c[s*r]=D.c.D(n)
n=q?w.c[m*r+1]:0
l=q?w.c[s*r+1]:0
if(q)w.c[m*r+1]=D.c.D(l)
if(q)w.c[s*r+1]=D.c.D(n)
q=2<r
n=q?w.c[m*r+2]:0
l=q?w.c[s*r+2]:0
if(q)w.c[m*r+2]=D.c.D(l)
if(q)w.c[s*r+2]=D.c.D(n)
q=3<r
n=q?w.c[m*r+3]:0
l=q?w.c[s*r+3]:0
if(q)w.c[m*r+3]=D.c.D(l)
if(q)w.c[s*r+3]=D.c.D(n)}if(p!==u){v[u]=t+s>>>1
for(n=u+1;n<p;++n)v[n]=s
t=s
u=p}}x=j.r
x.toString
v[u]=D.c.O(t+x,1)
for(o=u+1;o<256;++o)v[o]=x},
aqR(d,e){var x,w,v
for(x=this.y,w=d*d,v=0;v<d;++v){x===$&&B.b()
x[v]=D.d.D(e*((w-v*v)*256/w))}},
alf(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.x
a2===$&&B.b()
x=30+D.c.aY(a1.b-1,3)
w=a3.gcG(0)*a3.gb_(0)
v=D.c.fK(w,a1.b)
u=Math.max(D.c.aY(v,100),1)
if(u===0)u=1
t=D.c.O(a2,8)
if(t<=1)t=0
a1.aqR(t,1024)
if(w<1509)s=a1.b=1
else if(D.c.al(w,499)!==0)s=499
else if(D.c.al(w,491)!==0)s=491
else s=D.c.al(w,487)!==0?487:503
r=a3.gcG(0)
q=a3.gb_(0)
for(p=a2,o=1024,n=0,m=0,l=0,k=0;k<v;){a2=a3.a
j=a2==null?null:a2.e1(m,l,null)
if(j==null)j=new A.eX()
i=j.gaD(j)
h=j.gaK()
g=j.gaM(j)
if(k===0){a2=a1.z
a2===$&&B.b()
f=a1.e
f===$&&B.b()
f*=3
a2[f]=g
a2[f+1]=h
a2[f+2]=i}e=a1.bfW(g,h,i)
if(e<0)e=a1.aSL(g,h,i)
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
if(t>0)a1.aQ9(d,t,e,g,h,i)}n+=s
m+=s
for(;m>r;){m-=r;++l}for(;n>=w;){n-=w
l-=q}++k
if(D.c.al(k,u)===0){o-=D.c.fK(o,x)
p-=D.c.aY(p,30)
t=D.c.O(p,8)
if(t<=1)t=0
a1.aqR(t,o)}}},
aQ9(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=f-e,j=l.d-1
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
aSL(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=1e30
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
bfW(d,e,f){var x,w,v,u,t,s=this
for(x=0,w=0;x<s.d;++x){v=s.z
v===$&&B.b()
u=w+1
t=!1
if(J.n(v[w],d)){w=u+1
if(J.n(s.z[u],e)){u=w+1
v=J.n(s.z[w],f)
w=u}else v=t}else{v=t
w=u}if(v)return x}return-1}}
A.aqK.prototype={
aS(d){var x=this
if(x.a===x.c.length)x.aWg()
x.c[x.a++]=d&255},
Zw(d,e){var x,w,v,u,t=this
e=J.b_(d)
for(;x=t.a,w=x+e,v=t.c,u=v.length,w>u;)t.aic(w-u)
D.aa.h7(v,x,w,d)
t.a+=e},
m_(d){return this.Zw(d,null)},
ku(d){var x=this
if(x.b){x.aS(D.c.O(d,8)&255)
x.aS(d&255)
return}x.aS(d&255)
x.aS(D.c.O(d,8)&255)},
hW(d){var x=this
if(x.b){x.aS(D.c.O(d,24)&255)
x.aS(D.c.O(d,16)&255)
x.aS(D.c.O(d,8)&255)
x.aS(d&255)
return}x.aS(d&255)
x.aS(D.c.O(d,8)&255)
x.aS(D.c.O(d,16)&255)
x.aS(D.c.O(d,24)&255)},
bEm(d){var x,w=this,v=new Float32Array(1)
v[0]=d
x=B.bX(v.buffer,0,null)
if(w.b){w.aS(x[3])
w.aS(x[2])
w.aS(x[1])
w.aS(x[0])
return}w.aS(x[0])
w.aS(x[1])
w.aS(x[2])
w.aS(x[3])},
bEn(d){var x,w=this,v=new Float64Array(1)
v[0]=d
x=B.bX(v.buffer,0,null)
if(w.b){w.aS(x[7])
w.aS(x[6])
w.aS(x[5])
w.aS(x[4])
w.aS(x[3])
w.aS(x[2])
w.aS(x[1])
w.aS(x[0])
return}w.aS(x[0])
w.aS(x[1])
w.aS(x[2])
w.aS(x[3])
w.aS(x[4])
w.aS(x[5])
w.aS(x[6])
w.aS(x[7])},
aic(d){var x,w,v,u
if(d!=null)x=d
else{w=this.c.length
x=w===0?8192:w*2}w=this.c
v=w.length
u=new Uint8Array(v+x)
D.aa.h7(u,0,v,w)
this.c=u},
aWg(){return this.aic(null)},
gt(d){return this.a}}
A.blK.prototype={
aDo(d){var x,w,v,u,t,s,r=d.gcG(0),q=d.gb_(0),p=this.a
p===$&&B.b()
x=A.h8(null,null,C.a_,0,C.b2,q,null,0,1,p,C.a_,r,!1)
r=x.a
w=r.gW(r)
w.q()
x.z=d.z
x.w=d.w
x.y=d.y
for(r=d.a,r=r.gW(r);r.q();){v=r.gK(r)
u=w.gK(w)
t=D.d.D(v.gaD(v))
s=D.d.D(v.gaK())
u.n(0,0,this.b4G(D.d.D(v.gaM(v)),s,t))
w.q()}return x}}
A.mW.prototype={
D(d){var x=this.b
return x===0?0:D.c.fK(this.a,x)},
CP(d){var x=this.b
return x===0?0:this.a/x},
l(d,e){if(e==null)return!1
return e instanceof A.mW&&this.a===e.a&&this.b===e.b},
gv(d){return B.a6(this.a,this.b,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
k(d){return""+this.a+"/"+this.b}}
A.bo_.prototype={
G(){return"ResizeMode."+this.b}}
A.bnX.prototype={
G(){return"RequestImageFormat."+this.b}}
A.bye.prototype={}
var z=a.updateTypes(["~(l8)","r(pt,r,r)","r([r])","~(Ay,y<r>)","~(r,r,r,r,r,cC)","~(f,oS)","~(r)","R<~>()","~()","fL(N)","~(r,jh)","Ay(r)"])
A.bLD.prototype={
$1(d){var x=0,w=B.l(y.as),v,u=this,t,s
var $async$$1=B.h(function(e,f){if(e===1)return B.i(f,w)
while(true)switch(x){case 0:s=u.a
if(s.r)s.f=!0
if(s.f){x=1
break}t=s.e
x=3
return B.c(s.rf(t==null?"":t),$async$$1)
case 3:s.f=!0
case 1:return B.j(v,w)}})
return B.k($async$$1,w)},
$S:74}
A.bLA.prototype={
$0(){this.a.r=!0},
$S:0}
A.bLB.prototype={
$0(){this.a.r=!1},
$S:0}
A.bLC.prototype={
$0(){var x=0,w=B.l(y.H),v=this,u,t
var $async$$0=B.h(function(d,e){if(d===1)return B.i(e,w)
while(true)switch(x){case 0:u=v.a
t=u.e
x=2
return B.c(u.rf(t==null?"":t),$async$$0)
case 2:return B.j(null,w)}})
return B.k($async$$0,w)},
$S:2}
A.bLG.prototype={
$0(){var x=this.a
x.x=x.w=!0},
$S:0}
A.bLH.prototype={
$1(d){var x=null
return T.lK(B.a([B.dL(!1,G.bE(R.Cf,x),x,x,D.H,x,x,x,x,new A.bLF(d),x,x)],y.E),x,C.b1l,x,x,C.b1n)},
$S:z+9}
A.bLF.prototype={
$0(){return B.cV(this.a,!1).iB(!0)},
$S:0}
A.bLI.prototype={
$0(){this.a.y=0},
$S:0}
A.bLJ.prototype={
$0(){var x=this.a
x.I(new A.bLE(x))},
$S:0}
A.bLE.prototype={
$0(){var x=this.a
x.y=++x.z/x.Q.length},
$S:0}
A.bLK.prototype={
$0(){this.a.w=!1},
$S:0}
A.b8T.prototype={
$0(){return A.cgL(this.a,this.b,"jpg",this.c)},
$S:267}
A.b8V.prototype={
$0(){return A.cgL(this.a,this.b,"png",null)},
$S:267}
A.b8L.prototype={
$2(d,e){var x=A.cgA(e)
this.a.a.n(0,d,x)
return x},
$S:z+5}
A.b8M.prototype={
$2(d,e){var x=e.dJ(0)
this.a.a.n(0,d,x)
return x},
$S:z+10}
A.b8N.prototype={
$2(d,e){var x=A.cgA(e)
this.a.b.a.n(0,d,x)
return x},
$S:z+5}
A.aTd.prototype={
$4(d,e,f,g){var x,w,v=this,u=v.a
if(u.a<v.c){x=v.b.c&&v.d.ch!=null
w=v.e
if(x){x=v.d
w.i_(x.ch.my(d),x.ch.mw(d),x.ch.mu(d),x.ch.nO(d))}else w.i_(d,e,f,g)
w.q();++u.a}},
$S:713}
A.b36.prototype={
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
$S:714}
A.bat.prototype={
$1(d){var x,w,v,u,t=this.b,s=t.cW(),r=t.cW()
t=this.a
if(!t.d.y.Z(0,s))throw B.e(A.bK("Invalid Component in SOS block"))
x=t.d.y.i(0,s)
x.toString
w=D.c.O(r,4)&15
v=r&15
u=t.z
if(w<u.length){u=u[w]
u.toString
x.w=u}t=t.y
if(v<t.length){t=t[v]
t.toString
x.x=t}return x},
$S:z+11}
A.bkH.prototype={
$1(d){return d!==""},
$S:17}
A.bzq.prototype={
$2(d,e){return(d|e<<16)>>>0},
$S:155}
A.b9a.prototype={
$4(d,e,f,g){var x=this.b
return d+this.a*(e-d+x*(d+g-f-e))+x*(f-d)},
$S:715}
A.b99.prototype={
$5(d,e,f,g,h){var x=-e,w=d*d
return f+0.5*(d*(x+g)+w*(2*e-5*f+4*g-h)+w*d*(x+3*f-3*g+h))},
$S:716};(function installTearOffs(){var x=a._instance_0u,w=a.installInstanceTearOff,v=a._instance_2u,u=a._static_1,t=a._instance_1u,s=a.installStaticTearOff
var r
x(r=A.a6P.prototype,"gaEf","wN",7)
x(r,"gbmj","a6i",8)
w(A.jh.prototype,"gwC",1,0,function(){return[0]},["$1","$0"],["iG","D"],2,0,0)
w(A.rD.prototype,"gwC",1,0,function(){return[0]},["$1","$0"],["iG","D"],2,0,0)
w(A.wQ.prototype,"gwC",1,0,function(){return[0]},["$1","$0"],["iG","D"],2,0,0)
w(A.q4.prototype,"gwC",1,0,function(){return[0]},["$1","$0"],["iG","D"],2,0,0)
w(A.rF.prototype,"gwC",1,0,function(){return[0]},["$1","$0"],["iG","D"],2,0,0)
w(A.uz.prototype,"gwC",1,0,function(){return[0]},["$1","$0"],["iG","D"],2,0,0)
w(A.wP.prototype,"gwC",1,0,function(){return[0]},["$1","$0"],["iG","D"],2,0,0)
w(A.wO.prototype,"gwC",1,0,function(){return[0]},["$1","$0"],["iG","D"],2,0,0)
w(A.rG.prototype,"gwC",1,0,function(){return[0]},["$1","$0"],["iG","D"],2,0,0)
v(r=A.amG.prototype,"gaTJ","aTK",3)
v(r,"gaTM","aTN",3)
v(r,"gaTO","aTP",3)
v(r,"gaTD","aTE",3)
v(r,"gaTF","aTG",3)
u(A,"cVZ","cIN",0)
u(A,"cVS","cIF",0)
u(A,"cVQ","cID",0)
u(A,"cVX","cIL",0)
u(A,"cVY","cIM",0)
u(A,"cVW","cIK",0)
u(A,"cVV","cIJ",0)
u(A,"cVU","cII",0)
u(A,"cW0","cIP",0)
u(A,"cW_","cIO",0)
u(A,"cVT","cIG",0)
u(A,"cVR","cIE",0)
u(A,"cWb","cJ_",0)
u(A,"cW9","cIY",0)
u(A,"cW1","cIQ",0)
u(A,"cW3","cIS",0)
u(A,"cW2","cIR",0)
u(A,"cW4","cIT",0)
u(A,"cWc","cJ0",0)
u(A,"cWa","cIZ",0)
u(A,"cW5","cIU",0)
u(A,"cW6","cIV",0)
u(A,"cW7","cIW",0)
u(A,"cW8","cIX",0)
t(A.a3Y.prototype,"gbbr","bbs",6)
t(A.amu.prototype,"gbrQ","brR",6)
s(A,"cbw",3,null,["$3"],["cJ1"],1,0)
s(A,"cWd",3,null,["$3"],["cJ2"],1,0)
s(A,"cWi",3,null,["$3"],["cJ7"],1,0)
s(A,"cWj",3,null,["$3"],["cJ8"],1,0)
s(A,"cWk",3,null,["$3"],["cJ9"],1,0)
s(A,"cWl",3,null,["$3"],["cJa"],1,0)
s(A,"cWm",3,null,["$3"],["cJb"],1,0)
s(A,"cWn",3,null,["$3"],["cJc"],1,0)
s(A,"cWo",3,null,["$3"],["cJd"],1,0)
s(A,"cWp",3,null,["$3"],["cJe"],1,0)
s(A,"cWe",3,null,["$3"],["cJ3"],1,0)
s(A,"cWf",3,null,["$3"],["cJ4"],1,0)
s(A,"cWg",3,null,["$3"],["cJ5"],1,0)
s(A,"cWh",3,null,["$3"],["cJ6"],1,0)
s(A,"cWs",6,null,["$6"],["cJq"],4,0)
s(A,"cWt",6,null,["$6"],["cJr"],4,0)
s(A,"cWr",6,null,["$6"],["cJp"],4,0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.adO,B.jf)
w(B.z,[A.b9S,A.bhT,A.bAU,A.aZy,A.qV,A.bM0,A.bWh,A.b8i,A.b9v,A.bAT,A.bAV,A.h4,A.rE,A.aDV,A.ajG,A.oS,A.jh,A.aTe,A.DI,A.aZh,A.aZg,A.b1S,A.ajI,A.b33,A.ajJ,A.ajK,A.b35,A.W4,A.aGN,A.WF,A.WG,A.al9,A.b8A,A.alR,A.afL,A.F6,A.baq,A.Ay,A.bas,A.QN,A.amF,A.baw,A.amG,A.a_S,A.bkF,A.a0c,A.blC,A.asN,A.a0f,A.NT,A.asM,A.qu,A.awO,A.bwr,A.awT,A.bwt,A.awU,A.bwu,A.bbW,A.bzd,A.a3X,A.bze,A.bzj,A.bzn,A.bzp,A.a3W,A.bzo,A.bzf,A.Id,A.axF,A.axH,A.axG,A.axI,A.a3Y,A.axD,A.bzk,A.axE,A.bA7,A.a4b,A.alP,A.WM,A.ay4,A.X8,A.bik,A.arg,A.am4,A.l8,A.blK,A.aqK,A.mW,A.bye])
x(A.b9R,A.b9S)
x(A.bhS,A.bhT)
x(A.c0s,A.bAU)
x(A.A5,B.E)
x(A.a6P,B.K)
w(B.bH,[A.bLD,A.bLH,A.aTd,A.b36,A.bat,A.bkH,A.b9a,A.b99])
w(B.cq,[A.bLA,A.bLB,A.bLC,A.bLG,A.bLF,A.bLI,A.bLJ,A.bLE,A.bLK,A.b8T,A.b8V])
w(B.dW,[A.aUv,A.mG,A.aeE,A.lW,A.kX,A.LG,A.EF,A.ru,A.M0,A.bar,A.NE,A.a_R,A.Bp,A.asg,A.Bq,A.t3,A.ne,A.I3,A.jT,A.qK,A.Ie,A.PP,A.b8x,A.akZ,A.amx,A.b4g,A.bo_,A.bnX])
w(B.u,[A.Ko,A.Kp,A.Kq,A.Kr,A.Ks,A.Kt,A.Kw,A.Kx,A.Ky,A.Kz,A.KA,A.wg,A.Ad,A.l5,A.Gb,A.Gc,A.Gd,A.Ge,A.Gf,A.Gg,A.Gh,A.Gi,A.Gj,A.Gk,A.Gl,A.Gm,A.eX])
w(A.wg,[A.afF,A.Ku])
x(A.LE,A.rE)
w(B.dA,[A.b8L,A.b8M,A.b8N,A.bzq])
w(A.jh,[A.rD,A.A9,A.wQ,A.q4,A.rF,A.uz,A.wP,A.wO,A.rG,A.Ab,A.Aa,A.Fc])
w(A.aZh,[A.aeI,A.b34,A.b6l,A.b8z,A.amE,A.asf,A.bkG,A.blB,A.blD,A.bwg,A.bws,A.bA8])
x(A.b_v,A.aeI)
x(A.b9X,A.b33)
w(A.b9X,[A.amp,A.b9Y,A.b9Z,A.ba_,A.amr])
x(A.amq,A.W4)
x(A.ams,A.WG)
x(A.b8y,A.DI)
w(A.F6,[A.F7,A.X6])
w(A.b1S,[A.bau,A.bkD])
x(A.amt,A.a_S)
x(A.ba0,A.bkF)
x(A.GJ,A.aZg)
w(A.asN,[A.xt,A.li])
x(A.amu,A.a3Y)
x(A.amv,A.a4b)
x(A.amw,A.ay4)
w(A.l5,[A.Ma,A.Mb,A.Xb,A.Xc,A.Xd,A.Xe,A.Mc,A.Md,A.Me,A.Mf,A.Mg,A.Mh])
w(A.bik,[A.aqX,A.aqY,A.aqZ,A.ar_,A.ar0,A.ar1,A.ar2,A.ZO,A.rY])
x(A.bhd,A.blK)})()
B.bz(b.typeUniverse,JSON.parse('{"adO":{"jf":[],"aZ":[]},"A5":{"E":[],"d":[]},"a6P":{"K":["A5"]},"h4":{"bd":["aQ"]},"Ko":{"dt":[],"u":["aQ"],"u.E":"aQ"},"Kp":{"dt":[],"u":["aQ"],"u.E":"aQ"},"Kq":{"dt":[],"u":["aQ"],"u.E":"aQ"},"Kr":{"dt":[],"u":["aQ"],"u.E":"aQ"},"Ks":{"dt":[],"u":["aQ"],"u.E":"aQ"},"Kt":{"dt":[],"u":["aQ"],"u.E":"aQ"},"Kw":{"dt":[],"u":["aQ"],"u.E":"aQ"},"Kx":{"dt":[],"u":["aQ"],"u.E":"aQ"},"Ky":{"dt":[],"u":["aQ"],"u.E":"aQ"},"Kz":{"dt":[],"u":["aQ"],"u.E":"aQ"},"KA":{"dt":[],"u":["aQ"],"u.E":"aQ"},"wg":{"dt":[],"u":["aQ"],"u.E":"aQ"},"afF":{"dt":[],"u":["aQ"],"u.E":"aQ"},"Ku":{"dt":[],"u":["aQ"],"u.E":"aQ"},"rD":{"jh":[]},"A9":{"jh":[]},"wQ":{"jh":[]},"q4":{"jh":[]},"rF":{"jh":[]},"uz":{"jh":[]},"wP":{"jh":[]},"wO":{"jh":[]},"rG":{"jh":[]},"Ab":{"jh":[]},"Aa":{"jh":[]},"Fc":{"jh":[]},"amq":{"W4":[]},"ams":{"WG":[]},"F7":{"F6":[]},"X6":{"F6":[]},"amt":{"a_S":[]},"amv":{"a4b":[]},"Ad":{"u":["cu"],"u.E":"cu"},"l5":{"u":["cu"]},"Ma":{"l5":[],"u":["cu"],"u.E":"cu"},"Mb":{"l5":[],"u":["cu"],"u.E":"cu"},"Xb":{"l5":[],"u":["cu"],"u.E":"cu"},"Xc":{"l5":[],"u":["cu"],"u.E":"cu"},"Xd":{"l5":[],"u":["cu"],"u.E":"cu"},"Xe":{"l5":[],"u":["cu"],"u.E":"cu"},"Mc":{"l5":[],"u":["cu"],"u.E":"cu"},"Md":{"l5":[],"u":["cu"],"u.E":"cu"},"Me":{"l5":[],"u":["cu"],"u.E":"cu"},"Mf":{"l5":[],"u":["cu"],"u.E":"cu"},"Mg":{"l5":[],"u":["cu"],"u.E":"cu"},"Mh":{"l5":[],"u":["cu"],"u.E":"cu"},"Gb":{"cu":[],"dt":[],"u":["aQ"],"bd":["cu"],"u.E":"aQ"},"Gc":{"cu":[],"dt":[],"u":["aQ"],"bd":["cu"],"u.E":"aQ"},"Gd":{"cu":[],"dt":[],"u":["aQ"],"bd":["cu"],"u.E":"aQ"},"Ge":{"cu":[],"dt":[],"u":["aQ"],"bd":["cu"],"u.E":"aQ"},"Gf":{"cu":[],"dt":[],"u":["aQ"],"bd":["cu"],"u.E":"aQ"},"Gg":{"cu":[],"dt":[],"u":["aQ"],"bd":["cu"],"u.E":"aQ"},"arg":{"bd":["cu"]},"Gh":{"cu":[],"dt":[],"u":["aQ"],"bd":["cu"],"u.E":"aQ"},"Gi":{"cu":[],"dt":[],"u":["aQ"],"bd":["cu"],"u.E":"aQ"},"Gj":{"cu":[],"dt":[],"u":["aQ"],"bd":["cu"],"u.E":"aQ"},"Gk":{"cu":[],"dt":[],"u":["aQ"],"bd":["cu"],"u.E":"aQ"},"Gl":{"cu":[],"dt":[],"u":["aQ"],"bd":["cu"],"u.E":"aQ"},"Gm":{"cu":[],"dt":[],"u":["aQ"],"bd":["cu"],"u.E":"aQ"},"eX":{"cu":[],"dt":[],"u":["aQ"],"bd":["cu"],"u.E":"aQ"},"am4":{"aZ":[]},"cu":{"dt":[],"bd":["cu"],"u":["aQ"]}}'))
B.kM(b.typeUniverse,JSON.parse('{"asN":1}'))
var y=(function rtii(){var x=B.x
return{G:x("dt"),v:x("ajI"),W:x("ajK"),C:x("ajX"),_:x("R<@>"),O:x("WM"),x:x("alP"),X:x("alR"),P:x("oS"),r:x("jh"),I:x("l5"),h:x("XH"),R:x("u<@>"),q:x("p<afL>"),Q:x("p<ajJ>"),m:x("p<W4>"),b:x("p<WG>"),A:x("p<WM>"),g:x("p<Ad>"),M:x("p<y<y<y<r>>>>"),o:x("p<y<y<r>>>"),S:x("p<y<r>>"),d:x("p<a_S>"),Y:x("p<a0c>"),j:x("p<mW>"),s:x("p<f>"),cp:x("p<awU>"),a:x("p<cC>"),cr:x("p<Id>"),F:x("p<axE>"),J:x("p<a4b>"),E:x("p<d>"),bg:x("p<aDV>"),bd:x("p<QN>"),t:x("p<r>"),T:x("p<F6?>"),cB:x("p<amF?>"),cQ:x("p<y<r>?>"),w:x("p<pt?>"),e:x("p<cC?>"),y:x("p<~(l8)>"),c:x("Ay"),bp:x("y<XH>"),f:x("y<y<r>>"),k:x("y<mW>"),cm:x("y<a3W>"),K:x("y<Id>"),n:x("y<D>"),L:x("y<r>"),as:x("aG"),c0:x("cu"),aG:x("a0c"),a2:x("cZW"),ab:x("a0f"),aM:x("NT"),i:x("mW"),N:x("f"),aL:x("awT"),ah:x("i2"),bk:x("pt"),D:x("cC"),V:x("a3W"),bQ:x("axF"),bl:x("axG"),bt:x("axI"),U:x("ap<f>"),bc:x("aGN"),cb:x("D"),z:x("@"),p:x("r"),a7:x("aml?"),cl:x("y<r>?"),l:x("y<F6?>?"),ac:x("cC?"),ak:x("a3X?"),B:x("Id?"),Z:x("axH?"),u:x("r?"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.wK=new A.aeE(0,"direct")
C.wL=new A.aeE(1,"alpha")
C.DL=new A.kX(0,"none")
C.wN=new A.kX(3,"bitfields")
C.wO=new A.kX(6,"alphaBitfields")
C.b96=new A.bAT()
C.El=new A.bAV()
C.i0=new A.c0s()
C.Eu=new A.aUv(4,"luminance")
C.ahN=new A.EF(0,"red")
C.ahO=new A.EF(1,"green")
C.ahP=new A.EF(2,"blue")
C.ahQ=new A.EF(3,"alpha")
C.ahR=new A.EF(4,"other")
C.Gw=new A.LG(0,"uint")
C.yd=new A.LG(1,"half")
C.ye=new A.LG(2,"float")
C.Gx=new A.ru(0,"none")
C.aig=new A.b4g(2,"both")
C.eS=new A.mG(0,"uint1")
C.ft=new A.mG(1,"uint2")
C.i9=new A.mG(10,"float32")
C.jF=new A.mG(11,"float64")
C.fu=new A.mG(2,"uint4")
C.a_=new A.mG(3,"uint8")
C.bY=new A.mG(4,"uint16")
C.ia=new A.mG(5,"uint32")
C.jG=new A.mG(6,"int8")
C.jH=new A.mG(7,"int16")
C.jI=new A.mG(8,"int32")
C.fZ=new A.mG(9,"float16")
C.ais=new A.akZ(1,"page")
C.b2=new A.akZ(2,"sequence")
C.yr=new A.b8x(1,"deflate")
C.H_=new A.M0(2,"cur")
C.S=new A.lW(0,"none")
C.Hn=new A.lW(1,"byte")
C.Ho=new A.lW(10,"sRational")
C.Hp=new A.lW(11,"single")
C.Hq=new A.lW(12,"double")
C.bc=new A.lW(2,"ascii")
C.b0=new A.lW(3,"short")
C.co=new A.lW(4,"long")
C.dC=new A.lW(5,"rational")
C.Hr=new A.lW(6,"sByte")
C.h0=new A.lW(7,"undefined")
C.Hs=new A.lW(8,"sShort")
C.Ht=new A.lW(9,"sLong")
C.akT=new A.amx(0,"nearest")
C.b9k=new A.amx(1,"linear")
C.HK=new A.bar(0,"yuv444")
C.HW=B.a(x([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250]),y.t)
C.I4=B.a(x([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29]),y.t)
C.yY=B.a(x([0,2,8]),y.t)
C.an9=B.a(x([0,4,2,1]),y.t)
C.anJ=B.a(x([252,243,207,63]),y.t)
C.Ii=B.a(x([292,260,226,226]),y.t)
C.In=B.a(x([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0]),y.t)
C.Iq=B.a(x([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119]),y.t)
C.Ip=B.a(x([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125]),y.t)
C.Io=B.a(x([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0]),y.t)
C.Ir=B.a(x([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0]),y.t)
C.ao3=B.a(x([2,3,7]),y.t)
C.ahS=new A.ru(1,"rle")
C.ahT=new A.ru(2,"zips")
C.ahU=new A.ru(3,"zip")
C.ahV=new A.ru(4,"piz")
C.ahW=new A.ru(5,"pxr24")
C.ahX=new A.ru(6,"b44")
C.ahY=new A.ru(7,"b44a")
C.aoc=B.a(x([C.Gx,C.ahS,C.ahT,C.ahU,C.ahV,C.ahW,C.ahX,C.ahY]),B.x("p<ru>"))
C.Iy=B.a(x([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9]),y.t)
C.aoq=B.a(x([3,3,11]),y.t)
C.apk=B.a(x([511,1023,2047,4095]),y.t)
C.apz=B.a(x([63,207,243,252]),y.t)
C.J8=B.a(x([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5]),y.t)
C.pm=B.a(x([0,36,72,109,145,182,218,255]),y.t)
C.Jw=B.a(x([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28]),y.t)
C.aqc=B.a(x([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112]),y.t)
C.aqp=B.a(x([8,8,4,2]),y.t)
C.aQW=new A.Bp(0,"none")
C.aQX=new A.Bp(1,"sub")
C.aQY=new A.Bp(2,"up")
C.aQZ=new A.Bp(3,"average")
C.aR_=new A.Bp(4,"paeth")
C.JB=B.a(x([C.aQW,C.aQX,C.aQY,C.aQZ,C.aR_]),B.x("p<Bp>"))
C.aqz=B.a(x([A.cW1(),A.cVW(),A.cWb(),A.cW9(),A.cW3(),A.cW2(),A.cW4()]),y.y)
C.px=B.a(x([0,1,2,3,4,5,6,7,8,9,10,11]),y.t)
C.a3q=new A.Ie(0,"predictor")
C.b41=new A.Ie(1,"crossColor")
C.b42=new A.Ie(2,"subtractGreen")
C.a3r=new A.Ie(3,"colorIndexing")
C.aqY=B.a(x([C.a3q,C.b41,C.b42,C.a3r]),B.x("p<Ie>"))
C.ar1=B.a(x([280,256,256,256,40]),y.t)
C.Kd=B.a(x([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127]),y.t)
C.Kf=B.a(x([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68]),y.t)
C.a6h=new A.kX(1,"rle8")
C.a6m=new A.kX(2,"rle4")
C.a6n=new A.kX(4,"jpeg")
C.a6o=new A.kX(5,"png")
C.a6p=new A.kX(7,"reserved7")
C.a6q=new A.kX(8,"reserved8")
C.a6r=new A.kX(9,"reserved9")
C.a6i=new A.kX(10,"reserved10")
C.a6j=new A.kX(11,"cmyk")
C.a6k=new A.kX(12,"cmykRle8")
C.a6l=new A.kX(13,"cmykRle4")
C.Kz=B.a(x([C.DL,C.a6h,C.a6m,C.wN,C.a6n,C.a6o,C.wO,C.a6p,C.a6q,C.a6r,C.a6i,C.a6j,C.a6k,C.a6l]),B.x("p<kX>"))
C.e7=B.a(x([255,255,255,255,255,255,255,255,255,255,255]),y.t)
C.jP=B.a(x([C.e7,C.e7,C.e7]),y.S)
C.ax2=B.a(x([176,246,255,255,255,255,255,255,255,255,255]),y.t)
C.aoe=B.a(x([223,241,252,255,255,255,255,255,255,255,255]),y.t)
C.axL=B.a(x([249,253,253,255,255,255,255,255,255,255,255]),y.t)
C.axR=B.a(x([C.ax2,C.aoe,C.axL]),y.S)
C.apf=B.a(x([255,244,252,255,255,255,255,255,255,255,255]),y.t)
C.ayJ=B.a(x([234,254,254,255,255,255,255,255,255,255,255]),y.t)
C.NX=B.a(x([253,255,255,255,255,255,255,255,255,255,255]),y.t)
C.alN=B.a(x([C.apf,C.ayJ,C.NX]),y.S)
C.apg=B.a(x([255,246,254,255,255,255,255,255,255,255,255]),y.t)
C.axG=B.a(x([239,253,254,255,255,255,255,255,255,255,255]),y.t)
C.Iz=B.a(x([254,255,254,255,255,255,255,255,255,255,255]),y.t)
C.anO=B.a(x([C.apg,C.axG,C.Iz]),y.S)
C.IZ=B.a(x([255,248,254,255,255,255,255,255,255,255,255]),y.t)
C.axH=B.a(x([251,255,254,255,255,255,255,255,255,255,255]),y.t)
C.ay2=B.a(x([C.IZ,C.axH,C.e7]),y.S)
C.zD=B.a(x([255,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aph=B.a(x([251,254,254,255,255,255,255,255,255,255,255]),y.t)
C.axy=B.a(x([C.zD,C.aph,C.Iz]),y.S)
C.apy=B.a(x([255,254,253,255,254,255,255,255,255,255,255]),y.t)
C.avO=B.a(x([250,255,254,255,254,255,255,255,255,255,255]),y.t)
C.ta=B.a(x([254,255,255,255,255,255,255,255,255,255,255]),y.t)
C.ayI=B.a(x([C.apy,C.avO,C.ta]),y.S)
C.azh=B.a(x([C.jP,C.axR,C.alN,C.anO,C.ay2,C.axy,C.ayI,C.jP]),y.o)
C.axV=B.a(x([217,255,255,255,255,255,255,255,255,255,255]),y.t)
C.azR=B.a(x([225,252,241,253,255,255,254,255,255,255,255]),y.t)
C.ay0=B.a(x([234,250,241,250,253,255,253,254,255,255,255]),y.t)
C.azc=B.a(x([C.axV,C.azR,C.ay0]),y.S)
C.zc=B.a(x([255,254,255,255,255,255,255,255,255,255,255]),y.t)
C.ayK=B.a(x([223,254,254,255,255,255,255,255,255,255,255]),y.t)
C.aw5=B.a(x([238,253,254,254,255,255,255,255,255,255,255]),y.t)
C.arP=B.a(x([C.zc,C.ayK,C.aw5]),y.S)
C.ass=B.a(x([249,254,255,255,255,255,255,255,255,255,255]),y.t)
C.ayd=B.a(x([C.IZ,C.ass,C.e7]),y.S)
C.axM=B.a(x([255,253,255,255,255,255,255,255,255,255,255]),y.t)
C.ast=B.a(x([247,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aA5=B.a(x([C.axM,C.ast,C.e7]),y.S)
C.axW=B.a(x([252,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aqM=B.a(x([C.zD,C.axW,C.e7]),y.S)
C.J_=B.a(x([255,254,254,255,255,255,255,255,255,255,255]),y.t)
C.aws=B.a(x([C.J_,C.NX,C.e7]),y.S)
C.asu=B.a(x([255,254,253,255,255,255,255,255,255,255,255]),y.t)
C.O2=B.a(x([250,255,255,255,255,255,255,255,255,255,255]),y.t)
C.ayu=B.a(x([C.asu,C.O2,C.ta]),y.S)
C.aA6=B.a(x([C.azc,C.arP,C.ayd,C.aA5,C.aqM,C.aws,C.ayu,C.jP]),y.o)
C.aof=B.a(x([186,251,250,255,255,255,255,255,255,255,255]),y.t)
C.aw6=B.a(x([234,251,244,254,255,255,255,255,255,255,255]),y.t)
C.avv=B.a(x([251,251,243,253,254,255,254,255,255,255,255]),y.t)
C.asa=B.a(x([C.aof,C.aw6,C.avv]),y.S)
C.aog=B.a(x([236,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aA9=B.a(x([251,253,253,254,254,255,255,255,255,255,255]),y.t)
C.ayR=B.a(x([C.zD,C.aog,C.aA9]),y.S)
C.ayL=B.a(x([254,254,254,255,255,255,255,255,255,255,255]),y.t)
C.alO=B.a(x([C.J_,C.ayL,C.e7]),y.S)
C.ax3=B.a(x([254,254,255,255,255,255,255,255,255,255,255]),y.t)
C.arx=B.a(x([C.zc,C.ax3,C.ta]),y.S)
C.HZ=B.a(x([C.e7,C.ta,C.e7]),y.S)
C.ayU=B.a(x([C.asa,C.ayR,C.alO,C.arx,C.HZ,C.jP,C.jP,C.jP]),y.o)
C.axX=B.a(x([248,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aqs=B.a(x([250,254,252,254,255,255,255,255,255,255,255]),y.t)
C.ax4=B.a(x([248,254,249,253,255,255,255,255,255,255,255]),y.t)
C.aA4=B.a(x([C.axX,C.aqs,C.ax4]),y.S)
C.axN=B.a(x([255,253,253,255,255,255,255,255,255,255,255]),y.t)
C.axY=B.a(x([246,253,253,255,255,255,255,255,255,255,255]),y.t)
C.aqb=B.a(x([252,254,251,254,254,255,255,255,255,255,255]),y.t)
C.ax_=B.a(x([C.axN,C.axY,C.aqb]),y.S)
C.api=B.a(x([255,254,252,255,255,255,255,255,255,255,255]),y.t)
C.ax5=B.a(x([248,254,253,255,255,255,255,255,255,255,255]),y.t)
C.arX=B.a(x([253,255,254,254,255,255,255,255,255,255,255]),y.t)
C.anc=B.a(x([C.api,C.ax5,C.arX]),y.S)
C.axI=B.a(x([255,251,254,255,255,255,255,255,255,255,255]),y.t)
C.axJ=B.a(x([245,251,254,255,255,255,255,255,255,255,255]),y.t)
C.axD=B.a(x([253,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aqV=B.a(x([C.axI,C.axJ,C.axD]),y.S)
C.axO=B.a(x([255,251,253,255,255,255,255,255,255,255,255]),y.t)
C.aoh=B.a(x([252,253,254,255,255,255,255,255,255,255,255]),y.t)
C.ay9=B.a(x([C.axO,C.aoh,C.zc]),y.S)
C.asv=B.a(x([255,252,255,255,255,255,255,255,255,255,255]),y.t)
C.axE=B.a(x([249,255,254,255,255,255,255,255,255,255,255]),y.t)
C.axF=B.a(x([255,255,254,255,255,255,255,255,255,255,255]),y.t)
C.awb=B.a(x([C.asv,C.axE,C.axF]),y.S)
C.axP=B.a(x([255,255,253,255,255,255,255,255,255,255,255]),y.t)
C.ami=B.a(x([C.axP,C.O2,C.e7]),y.S)
C.awC=B.a(x([C.aA4,C.ax_,C.anc,C.aqV,C.ay9,C.awb,C.ami,C.HZ]),y.o)
C.arO=B.a(x([C.azh,C.aA6,C.ayU,C.awC]),y.M)
C.KM=B.a(x([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250]),y.t)
C.aiC=new A.M0(0,"invalid")
C.aiD=new A.M0(1,"ico")
C.arR=B.a(x([C.aiC,C.aiD,C.H_]),B.x("p<M0>"))
C.as9=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),y.t)
C.zd=B.a(x([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284]),y.t)
C.asL=B.a(x([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),y.t)
C.ze=B.a(x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),y.t)
C.asM=B.a(x([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15]),y.t)
C.jZ=B.a(x([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1]),y.t)
C.f1=B.a(x([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255]),y.t)
C.a_H=new A.a_R(0,"source")
C.a_I=new A.a_R(1,"over")
C.asY=B.a(x([C.a_H,C.a_I]),B.x("p<a_R>"))
C.m2=B.a(x([0,1,3,7,15,31,63,127,255]),y.t)
C.zj=B.a(x([0,128,192,224,240,248,252,254,255]),y.t)
C.Mn=B.a(x([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232]),y.t)
C.r9=B.a(x([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),y.t)
C.aw4=B.a(x([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),y.t)
C.fz=B.a(x([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]),y.t)
C.awm=B.a(x([null,A.cWs(),A.cWt(),A.cWr()]),B.x("p<~(r,r,r,r,r,cC)?>"))
C.z5=B.a(x([8,0,8,0]),y.t)
C.apt=B.a(x([5,3,5,3]),y.t)
C.aor=B.a(x([3,5,3,5]),y.t)
C.I6=B.a(x([0,8,0,8]),y.t)
C.IS=B.a(x([4,4,4,4]),y.t)
C.apb=B.a(x([4,4,0,0]),y.t)
C.N4=B.a(x([C.z5,C.apt,C.aor,C.I6,C.z5,C.IS,C.apb,C.I6]),y.S)
C.rs=B.a(x([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8]),y.t)
C.awv=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095]),y.t)
C.im=B.a(x([0,1,1,2,4,8,1,1,2,4,8,4,8]),y.t)
C.Ch=new A.jT(0,"whiteIsZero")
C.b1I=new A.jT(1,"blackIsZero")
C.b1P=new A.jT(2,"rgb")
C.Cj=new A.jT(3,"palette")
C.b1Q=new A.jT(4,"transparencyMask")
C.a2J=new A.jT(5,"cmyk")
C.b1R=new A.jT(6,"yCbCr")
C.b1S=new A.jT(7,"reserved7")
C.b1T=new A.jT(8,"cieLab")
C.b1U=new A.jT(9,"iccLab")
C.b1J=new A.jT(10,"ituLab")
C.b1K=new A.jT(11,"logL")
C.b1L=new A.jT(12,"logLuv")
C.b1M=new A.jT(13,"colorFilterArray")
C.b1N=new A.jT(14,"linearRaw")
C.b1O=new A.jT(15,"depth")
C.Ci=new A.jT(16,"unknown")
C.awH=B.a(x([C.Ch,C.b1I,C.b1P,C.Cj,C.b1Q,C.a2J,C.b1R,C.b1S,C.b1T,C.b1U,C.b1J,C.b1K,C.b1L,C.b1M,C.b1N,C.b1O,C.Ci]),B.x("p<jT>"))
C.zw=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295]),y.t)
C.aA_=B.a(x([231,120,48,89,115,113,120,152,112]),y.t)
C.alP=B.a(x([152,179,64,126,170,118,46,70,95]),y.t)
C.alQ=B.a(x([175,69,143,80,85,82,72,155,103]),y.t)
C.alR=B.a(x([56,58,10,171,218,189,17,13,152]),y.t)
C.alS=B.a(x([114,26,17,163,44,195,21,10,173]),y.t)
C.alT=B.a(x([121,24,80,195,26,62,44,64,85]),y.t)
C.alU=B.a(x([144,71,10,38,171,213,144,34,26]),y.t)
C.alV=B.a(x([170,46,55,19,136,160,33,206,71]),y.t)
C.alW=B.a(x([63,20,8,114,114,208,12,9,226]),y.t)
C.alX=B.a(x([81,40,11,96,182,84,29,16,36]),y.t)
C.azS=B.a(x([C.aA_,C.alP,C.alQ,C.alR,C.alS,C.alT,C.alU,C.alV,C.alW,C.alX]),y.S)
C.alY=B.a(x([134,183,89,137,98,101,106,165,148]),y.t)
C.alZ=B.a(x([72,187,100,130,157,111,32,75,80]),y.t)
C.am_=B.a(x([66,102,167,99,74,62,40,234,128]),y.t)
C.asZ=B.a(x([41,53,9,178,241,141,26,8,107]),y.t)
C.am0=B.a(x([74,43,26,146,73,166,49,23,157]),y.t)
C.am1=B.a(x([65,38,105,160,51,52,31,115,128]),y.t)
C.asB=B.a(x([104,79,12,27,217,255,87,17,7]),y.t)
C.am2=B.a(x([87,68,71,44,114,51,15,186,23]),y.t)
C.am3=B.a(x([47,41,14,110,182,183,21,17,194]),y.t)
C.am4=B.a(x([66,45,25,102,197,189,23,18,22]),y.t)
C.axZ=B.a(x([C.alY,C.alZ,C.am_,C.asZ,C.am0,C.am1,C.asB,C.am2,C.am3,C.am4]),y.S)
C.am5=B.a(x([88,88,147,150,42,46,45,196,205]),y.t)
C.am6=B.a(x([43,97,183,117,85,38,35,179,61]),y.t)
C.am8=B.a(x([39,53,200,87,26,21,43,232,171]),y.t)
C.am9=B.a(x([56,34,51,104,114,102,29,93,77]),y.t)
C.ama=B.a(x([39,28,85,171,58,165,90,98,64]),y.t)
C.amb=B.a(x([34,22,116,206,23,34,43,166,73]),y.t)
C.amc=B.a(x([107,54,32,26,51,1,81,43,31]),y.t)
C.amd=B.a(x([68,25,106,22,64,171,36,225,114]),y.t)
C.ame=B.a(x([34,19,21,102,132,188,16,76,124]),y.t)
C.amf=B.a(x([62,18,78,95,85,57,50,48,51]),y.t)
C.ayp=B.a(x([C.am5,C.am6,C.am8,C.am9,C.ama,C.amb,C.amc,C.amd,C.ame,C.amf]),y.S)
C.amg=B.a(x([193,101,35,159,215,111,89,46,111]),y.t)
C.amh=B.a(x([60,148,31,172,219,228,21,18,111]),y.t)
C.asC=B.a(x([112,113,77,85,179,255,38,120,114]),y.t)
C.at_=B.a(x([40,42,1,196,245,209,10,25,109]),y.t)
C.amj=B.a(x([88,43,29,140,166,213,37,43,154]),y.t)
C.amk=B.a(x([61,63,30,155,67,45,68,1,209]),y.t)
C.aml=B.a(x([100,80,8,43,154,1,51,26,71]),y.t)
C.at0=B.a(x([142,78,78,16,255,128,34,197,171]),y.t)
C.amm=B.a(x([41,40,5,102,211,183,4,1,221]),y.t)
C.amn=B.a(x([51,50,17,168,209,192,23,25,82]),y.t)
C.aoi=B.a(x([C.amg,C.amh,C.asC,C.at_,C.amj,C.amk,C.aml,C.at0,C.amm,C.amn]),y.S)
C.avr=B.a(x([138,31,36,171,27,166,38,44,229]),y.t)
C.amo=B.a(x([67,87,58,169,82,115,26,59,179]),y.t)
C.amp=B.a(x([63,59,90,180,59,166,93,73,154]),y.t)
C.amq=B.a(x([40,40,21,116,143,209,34,39,175]),y.t)
C.amr=B.a(x([47,15,16,183,34,223,49,45,183]),y.t)
C.ams=B.a(x([46,17,33,183,6,98,15,32,183]),y.t)
C.amu=B.a(x([57,46,22,24,128,1,54,17,37]),y.t)
C.amv=B.a(x([65,32,73,115,28,128,23,128,205]),y.t)
C.amw=B.a(x([40,3,9,115,51,192,18,6,223]),y.t)
C.amx=B.a(x([87,37,9,115,59,77,64,21,47]),y.t)
C.at6=B.a(x([C.avr,C.amo,C.amp,C.amq,C.amr,C.ams,C.amu,C.amv,C.amw,C.amx]),y.S)
C.amy=B.a(x([104,55,44,218,9,54,53,130,226]),y.t)
C.amz=B.a(x([64,90,70,205,40,41,23,26,57]),y.t)
C.amA=B.a(x([54,57,112,184,5,41,38,166,213]),y.t)
C.amB=B.a(x([30,34,26,133,152,116,10,32,134]),y.t)
C.avs=B.a(x([39,19,53,221,26,114,32,73,255]),y.t)
C.amC=B.a(x([31,9,65,234,2,15,1,118,73]),y.t)
C.asD=B.a(x([75,32,12,51,192,255,160,43,51]),y.t)
C.amD=B.a(x([88,31,35,67,102,85,55,186,85]),y.t)
C.amE=B.a(x([56,21,23,111,59,205,45,37,192]),y.t)
C.amF=B.a(x([55,38,70,124,73,102,1,34,98]),y.t)
C.aoj=B.a(x([C.amy,C.amz,C.amA,C.amB,C.avs,C.amC,C.asD,C.amD,C.amE,C.amF]),y.S)
C.amG=B.a(x([125,98,42,88,104,85,117,175,82]),y.t)
C.amH=B.a(x([95,84,53,89,128,100,113,101,45]),y.t)
C.amI=B.a(x([75,79,123,47,51,128,81,171,1]),y.t)
C.amJ=B.a(x([57,17,5,71,102,57,53,41,49]),y.t)
C.amK=B.a(x([38,33,13,121,57,73,26,1,85]),y.t)
C.amL=B.a(x([41,10,67,138,77,110,90,47,114]),y.t)
C.asE=B.a(x([115,21,2,10,102,255,166,23,6]),y.t)
C.amM=B.a(x([101,29,16,10,85,128,101,196,26]),y.t)
C.amN=B.a(x([57,18,10,102,102,213,34,20,43]),y.t)
C.amO=B.a(x([117,20,15,36,163,128,68,1,26]),y.t)
C.aA0=B.a(x([C.amG,C.amH,C.amI,C.amJ,C.amK,C.amL,C.asE,C.amM,C.amN,C.amO]),y.S)
C.aqE=B.a(x([102,61,71,37,34,53,31,243,192]),y.t)
C.amP=B.a(x([69,60,71,38,73,119,28,222,37]),y.t)
C.aqF=B.a(x([68,45,128,34,1,47,11,245,171]),y.t)
C.amQ=B.a(x([62,17,19,70,146,85,55,62,70]),y.t)
C.amR=B.a(x([37,43,37,154,100,163,85,160,1]),y.t)
C.amS=B.a(x([63,9,92,136,28,64,32,201,85]),y.t)
C.asF=B.a(x([75,15,9,9,64,255,184,119,16]),y.t)
C.asG=B.a(x([86,6,28,5,64,255,25,248,1]),y.t)
C.asH=B.a(x([56,8,17,132,137,255,55,116,128]),y.t)
C.amT=B.a(x([58,15,20,82,135,57,26,121,40]),y.t)
C.arS=B.a(x([C.aqE,C.amP,C.aqF,C.amQ,C.amR,C.amS,C.asF,C.asG,C.asH,C.amT]),y.S)
C.amU=B.a(x([164,50,31,137,154,133,25,35,218]),y.t)
C.amV=B.a(x([51,103,44,131,131,123,31,6,158]),y.t)
C.amW=B.a(x([86,40,64,135,148,224,45,183,128]),y.t)
C.amX=B.a(x([22,26,17,131,240,154,14,1,209]),y.t)
C.amY=B.a(x([45,16,21,91,64,222,7,1,197]),y.t)
C.amZ=B.a(x([56,21,39,155,60,138,23,102,213]),y.t)
C.asI=B.a(x([83,12,13,54,192,255,68,47,28]),y.t)
C.an_=B.a(x([85,26,85,85,128,128,32,146,171]),y.t)
C.an0=B.a(x([18,11,7,63,144,171,4,4,246]),y.t)
C.an1=B.a(x([35,27,10,146,174,171,12,26,128]),y.t)
C.aA1=B.a(x([C.amU,C.amV,C.amW,C.amX,C.amY,C.amZ,C.asI,C.an_,C.an0,C.an1]),y.S)
C.an2=B.a(x([190,80,35,99,180,80,126,54,45]),y.t)
C.an3=B.a(x([85,126,47,87,176,51,41,20,32]),y.t)
C.an4=B.a(x([101,75,128,139,118,146,116,128,85]),y.t)
C.an5=B.a(x([56,41,15,176,236,85,37,9,62]),y.t)
C.asJ=B.a(x([71,30,17,119,118,255,17,18,138]),y.t)
C.an6=B.a(x([101,38,60,138,55,70,43,26,142]),y.t)
C.asK=B.a(x([146,36,19,30,171,255,97,27,20]),y.t)
C.alH=B.a(x([138,45,61,62,219,1,81,188,64]),y.t)
C.alI=B.a(x([32,41,20,117,151,142,20,21,163]),y.t)
C.alJ=B.a(x([112,19,12,61,195,128,48,4,24]),y.t)
C.asr=B.a(x([C.an2,C.an3,C.an4,C.an5,C.asJ,C.an6,C.asK,C.alH,C.alI,C.alJ]),y.S)
C.axz=B.a(x([C.azS,C.axZ,C.ayp,C.aoi,C.at6,C.aoj,C.aA0,C.arS,C.aA1,C.asr]),y.o)
C.vw=new A.ne(0,"none")
C.hO=new A.ne(1,"palette")
C.a2F=new A.ne(2,"rgb")
C.b1r=new A.ne(3,"gray")
C.b1s=new A.ne(4,"reserved4")
C.b1t=new A.ne(5,"reserved5")
C.b1u=new A.ne(6,"reserved6")
C.b1v=new A.ne(7,"reserved7")
C.b1w=new A.ne(8,"reserved8")
C.hP=new A.ne(9,"paletteRle")
C.a2E=new A.ne(10,"rgbRle")
C.b1q=new A.ne(11,"grayRle")
C.axA=B.a(x([C.vw,C.hO,C.a2F,C.b1r,C.b1s,C.b1t,C.b1u,C.b1v,C.b1w,C.hP,C.a2E,C.b1q]),B.x("p<ne>"))
C.t5=B.a(x([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567]),y.t)
C.Or=B.a(x([A.cW5(),A.cVY(),A.cWc(),A.cWa(),A.cW7(),A.cW6(),A.cW8()]),y.y)
C.Ou=B.a(x([1,1.387039845,1.306562965,1.175875602,1,0.785694958,0.5411961,0.275899379]),B.x("p<D>"))
C.aQV=new A.NE(0,"none")
C.a_J=new A.NE(1,"background")
C.a_K=new A.NE(2,"previous")
C.ayl=B.a(x([C.aQV,C.a_J,C.a_K]),B.x("p<NE>"))
C.tn=B.a(x([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845]),y.t)
C.b1A=new A.I3(0,"invalid")
C.a2H=new A.I3(1,"uint")
C.aV=new A.I3(2,"int")
C.n1=new A.I3(3,"float")
C.ayo=B.a(x([C.b1A,C.a2H,C.aV,C.n1]),B.x("p<I3>"))
C.tr=B.a(x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),y.t)
C.ayr=B.a(x([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576]),y.t)
C.ays=B.a(x([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),y.t)
C.OD=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),y.t)
C.ayB=B.a(x([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0]),y.t)
C.ayC=B.a(x([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),y.t)
C.ani=B.a(x([173,148,140]),y.t)
C.anj=B.a(x([176,155,140,135]),y.t)
C.ar2=B.a(x([180,157,141,134,130]),y.t)
C.aqf=B.a(x([254,254,243,230,196,177,153,140,133,130,129]),y.t)
C.ayT=B.a(x([C.ani,C.anj,C.ar2,C.aqf]),y.S)
C.az9=B.a(x([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),y.t)
C.zL=B.a(x([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157]),y.t)
C.Pe=B.a(x([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]),y.t)
C.Pd=B.a(x([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41]),y.t)
C.azd=B.a(x([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15]),y.t)
C.Pm=B.a(x([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396]),y.t)
C.Pl=B.a(x([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),y.t)
C.azf=B.a(x([C.Gw,C.yd,C.ye]),B.x("p<LG>"))
C.u2=B.a(x([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63]),y.t)
C.azi=B.a(x([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99]),y.t)
C.azj=B.a(x([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]),y.t)
C.ao7=B.a(x([2,6,2,6]),y.t)
C.apU=B.a(x([6,2,6,2]),y.t)
C.ao0=B.a(x([2,2,6,6]),y.t)
C.any=B.a(x([1,3,3,9]),y.t)
C.ap2=B.a(x([4,0,12,0]),y.t)
C.aop=B.a(x([3,1,9,3]),y.t)
C.aqo=B.a(x([8,8,0,0]),y.t)
C.ap4=B.a(x([4,12,0,0]),y.t)
C.anh=B.a(x([16,0,0,0]),y.t)
C.ang=B.a(x([12,4,0,0]),y.t)
C.aq3=B.a(x([6,6,2,2]),y.t)
C.aos=B.a(x([3,9,1,3]),y.t)
C.anf=B.a(x([12,0,4,0]),y.t)
C.aqB=B.a(x([9,3,3,1]),y.t)
C.cH=B.a(x([C.IS,C.ao7,C.z5,C.apU,C.ao0,C.any,C.ap2,C.aop,C.aqo,C.ap4,C.anh,C.ang,C.aq3,C.aos,C.anf,C.aqB]),y.S)
C.PF=B.a(x([C.S,C.Hn,C.bc,C.b0,C.co,C.dC,C.Hr,C.h0,C.Hs,C.Ht,C.Ho,C.Hp,C.Hq]),B.x("p<lW>"))
C.aRj=new A.t3(0,"bitmap")
C.a05=new A.t3(1,"grayscale")
C.aRk=new A.t3(2,"indexed")
C.a06=new A.t3(3,"rgb")
C.a07=new A.t3(4,"cmyk")
C.aRl=new A.t3(5,"multiChannel")
C.aRm=new A.t3(6,"duoTone")
C.a08=new A.t3(7,"lab")
C.azQ=B.a(x([C.aRj,C.a05,C.aRk,C.a06,C.a07,C.aRl,C.aRm,C.a08]),B.x("p<t3>"))
C.e8=B.a(x([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255]),y.t)
C.aA8=B.a(x([254,253,251,247,239,223,191,127]),y.t)
C.Qd=B.a(x([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390]),y.t)
C.aAh=B.a(x([A.cVQ(),A.cVX(),A.cVZ(),A.cVS(),A.cVV(),A.cW0(),A.cVU(),A.cW_(),A.cVR(),A.cVT()]),y.y)
C.z6=B.a(x([128,128,128,128,128,128,128,128,128,128,128]),y.t)
C.Qg=B.a(x([C.z6,C.z6,C.z6]),y.S)
C.aAg=B.a(x([253,136,254,255,228,219,128,128,128,128,128]),y.t)
C.awJ=B.a(x([189,129,242,255,227,213,255,219,128,128,128]),y.t)
C.azl=B.a(x([106,126,227,252,214,209,255,255,128,128,128]),y.t)
C.awD=B.a(x([C.aAg,C.awJ,C.azl]),y.S)
C.avH=B.a(x([1,98,248,255,236,226,255,255,128,128,128]),y.t)
C.azo=B.a(x([181,133,238,254,221,234,255,154,128,128,128]),y.t)
C.awK=B.a(x([78,134,202,247,198,180,255,219,128,128,128]),y.t)
C.azb=B.a(x([C.avH,C.azo,C.awK]),y.S)
C.aqx=B.a(x([1,185,249,255,243,255,128,128,128,128,128]),y.t)
C.aw_=B.a(x([184,150,247,255,236,224,128,128,128,128,128]),y.t)
C.anQ=B.a(x([77,110,216,255,236,230,128,128,128,128,128]),y.t)
C.aod=B.a(x([C.aqx,C.aw_,C.anQ]),y.S)
C.aqy=B.a(x([1,101,251,255,241,255,128,128,128,128,128]),y.t)
C.arY=B.a(x([170,139,241,252,236,209,255,255,128,128,128]),y.t)
C.aqu=B.a(x([37,116,196,243,228,255,255,255,128,128,128]),y.t)
C.aqJ=B.a(x([C.aqy,C.arY,C.aqu]),y.S)
C.aqK=B.a(x([1,204,254,255,245,255,128,128,128,128,128]),y.t)
C.anR=B.a(x([207,160,250,255,238,128,128,128,128,128,128]),y.t)
C.aw0=B.a(x([102,103,231,255,211,171,128,128,128,128,128]),y.t)
C.anX=B.a(x([C.aqK,C.anR,C.aw0]),y.S)
C.ayE=B.a(x([1,152,252,255,240,255,128,128,128,128,128]),y.t)
C.aw1=B.a(x([177,135,243,255,234,225,128,128,128,128,128]),y.t)
C.anS=B.a(x([80,129,211,255,194,224,128,128,128,128,128]),y.t)
C.aoS=B.a(x([C.ayE,C.aw1,C.anS]),y.S)
C.Jz=B.a(x([1,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aqg=B.a(x([246,1,255,128,128,128,128,128,128,128,128]),y.t)
C.arV=B.a(x([255,128,128,128,128,128,128,128,128,128,128]),y.t)
C.ase=B.a(x([C.Jz,C.aqg,C.arV]),y.S)
C.axK=B.a(x([C.Qg,C.awD,C.azb,C.aod,C.aqJ,C.anX,C.aoS,C.ase]),y.o)
C.aqh=B.a(x([198,35,237,223,193,187,162,160,145,155,62]),y.t)
C.aro=B.a(x([131,45,198,221,172,176,220,157,252,221,1]),y.t)
C.ay5=B.a(x([68,47,146,208,149,167,221,162,255,223,128]),y.t)
C.ano=B.a(x([C.aqh,C.aro,C.ay5]),y.S)
C.asi=B.a(x([1,149,241,255,221,224,255,255,128,128,128]),y.t)
C.awL=B.a(x([184,141,234,253,222,220,255,199,128,128,128]),y.t)
C.avz=B.a(x([81,99,181,242,176,190,249,202,255,255,128]),y.t)
C.ayO=B.a(x([C.asi,C.awL,C.avz]),y.S)
C.awg=B.a(x([1,129,232,253,214,197,242,196,255,255,128]),y.t)
C.azp=B.a(x([99,121,210,250,201,198,255,202,128,128,128]),y.t)
C.avA=B.a(x([23,91,163,242,170,187,247,210,255,255,128]),y.t)
C.awe=B.a(x([C.awg,C.azp,C.avA]),y.S)
C.ayF=B.a(x([1,200,246,255,234,255,128,128,128,128,128]),y.t)
C.aww=B.a(x([109,178,241,255,231,245,255,255,128,128,128]),y.t)
C.avI=B.a(x([44,130,201,253,205,192,255,255,128,128,128]),y.t)
C.asR=B.a(x([C.ayF,C.aww,C.avI]),y.S)
C.anL=B.a(x([1,132,239,251,219,209,255,165,128,128,128]),y.t)
C.avJ=B.a(x([94,136,225,251,218,190,255,255,128,128,128]),y.t)
C.awM=B.a(x([22,100,174,245,186,161,255,199,128,128,128]),y.t)
C.arn=B.a(x([C.anL,C.avJ,C.awM]),y.S)
C.apv=B.a(x([1,182,249,255,232,235,128,128,128,128,128]),y.t)
C.aw2=B.a(x([124,143,241,255,227,234,128,128,128,128,128]),y.t)
C.awN=B.a(x([35,77,181,251,193,211,255,205,128,128,128]),y.t)
C.as7=B.a(x([C.apv,C.aw2,C.awN]),y.S)
C.ayj=B.a(x([1,157,247,255,236,231,255,255,128,128,128]),y.t)
C.asj=B.a(x([121,141,235,255,225,227,255,255,128,128,128]),y.t)
C.awO=B.a(x([45,99,188,251,195,217,255,224,128,128,128]),y.t)
C.awu=B.a(x([C.ayj,C.asj,C.awO]),y.S)
C.apw=B.a(x([1,1,251,255,213,255,128,128,128,128,128]),y.t)
C.ask=B.a(x([203,1,248,255,255,128,128,128,128,128,128]),y.t)
C.ayG=B.a(x([137,1,177,255,224,255,128,128,128,128,128]),y.t)
C.avS=B.a(x([C.apw,C.ask,C.ayG]),y.S)
C.aqv=B.a(x([C.ano,C.ayO,C.awe,C.asR,C.arn,C.as7,C.awu,C.avS]),y.o)
C.apr=B.a(x([253,9,248,251,207,208,255,192,128,128,128]),y.t)
C.anF=B.a(x([175,13,224,243,193,185,249,198,255,255,128]),y.t)
C.ay6=B.a(x([73,17,171,221,161,179,236,167,255,234,128]),y.t)
C.awA=B.a(x([C.apr,C.anF,C.ay6]),y.S)
C.asl=B.a(x([1,95,247,253,212,183,255,255,128,128,128]),y.t)
C.aAl=B.a(x([239,90,244,250,211,209,255,255,128,128,128]),y.t)
C.azm=B.a(x([155,77,195,248,188,195,255,255,128,128,128]),y.t)
C.at7=B.a(x([C.asl,C.aAl,C.azm]),y.S)
C.anM=B.a(x([1,24,239,251,218,219,255,205,128,128,128]),y.t)
C.anT=B.a(x([201,51,219,255,196,186,128,128,128,128,128]),y.t)
C.awP=B.a(x([69,46,190,239,201,218,255,228,128,128,128]),y.t)
C.aya=B.a(x([C.anM,C.anT,C.awP]),y.S)
C.arZ=B.a(x([1,191,251,255,255,128,128,128,128,128,128]),y.t)
C.apx=B.a(x([223,165,249,255,213,255,128,128,128,128,128]),y.t)
C.asm=B.a(x([141,124,248,255,255,128,128,128,128,128,128]),y.t)
C.aoN=B.a(x([C.arZ,C.apx,C.asm]),y.S)
C.asn=B.a(x([1,16,248,255,255,128,128,128,128,128,128]),y.t)
C.ayH=B.a(x([190,36,230,255,236,255,128,128,128,128,128]),y.t)
C.aqi=B.a(x([149,1,255,128,128,128,128,128,128,128,128]),y.t)
C.ayM=B.a(x([C.asn,C.ayH,C.aqi]),y.S)
C.aqj=B.a(x([1,226,255,128,128,128,128,128,128,128,128]),y.t)
C.at9=B.a(x([247,192,255,128,128,128,128,128,128,128,128]),y.t)
C.aqk=B.a(x([240,128,255,128,128,128,128,128,128,128,128]),y.t)
C.awn=B.a(x([C.aqj,C.at9,C.aqk]),y.S)
C.aso=B.a(x([1,134,252,255,255,128,128,128,128,128,128]),y.t)
C.asp=B.a(x([213,62,250,255,255,128,128,128,128,128,128]),y.t)
C.aql=B.a(x([55,93,255,128,128,128,128,128,128,128,128]),y.t)
C.az1=B.a(x([C.aso,C.asp,C.aql]),y.S)
C.avR=B.a(x([C.awA,C.at7,C.aya,C.aoN,C.ayM,C.awn,C.az1,C.Qg]),y.o)
C.azU=B.a(x([202,24,213,235,186,191,220,160,240,175,255]),y.t)
C.ay7=B.a(x([126,38,182,232,169,184,228,174,255,187,128]),y.t)
C.ay8=B.a(x([61,46,138,219,151,178,240,170,255,216,128]),y.t)
C.ap_=B.a(x([C.azU,C.ay7,C.ay8]),y.S)
C.avB=B.a(x([1,112,230,250,199,191,247,159,255,255,128]),y.t)
C.azq=B.a(x([166,109,228,252,211,215,255,174,128,128,128]),y.t)
C.avC=B.a(x([39,77,162,232,172,180,245,178,255,255,128]),y.t)
C.asN=B.a(x([C.avB,C.azq,C.avC]),y.S)
C.avD=B.a(x([1,52,220,246,198,199,249,220,255,255,128]),y.t)
C.awh=B.a(x([124,74,191,243,183,193,250,221,255,255,128]),y.t)
C.avE=B.a(x([24,71,130,219,154,170,243,182,255,255,128]),y.t)
C.alK=B.a(x([C.avD,C.awh,C.avE]),y.S)
C.awQ=B.a(x([1,182,225,249,219,240,255,224,128,128,128]),y.t)
C.azr=B.a(x([149,150,226,252,216,205,255,171,128,128,128]),y.t)
C.avG=B.a(x([28,108,170,242,183,194,254,223,255,255,128]),y.t)
C.ax1=B.a(x([C.awQ,C.azr,C.avG]),y.S)
C.azs=B.a(x([1,81,230,252,204,203,255,192,128,128,128]),y.t)
C.avK=B.a(x([123,102,209,247,188,196,255,233,128,128,128]),y.t)
C.awR=B.a(x([20,95,153,243,164,173,255,203,128,128,128]),y.t)
C.arv=B.a(x([C.azs,C.avK,C.awR]),y.S)
C.anU=B.a(x([1,222,248,255,216,213,128,128,128,128,128]),y.t)
C.avF=B.a(x([168,175,246,252,235,205,255,255,128,128,128]),y.t)
C.avL=B.a(x([47,116,215,255,211,212,255,255,128,128,128]),y.t)
C.aqA=B.a(x([C.anU,C.avF,C.avL]),y.S)
C.avM=B.a(x([1,121,236,253,212,214,255,255,128,128,128]),y.t)
C.azt=B.a(x([141,84,213,252,201,202,255,219,128,128,128]),y.t)
C.azu=B.a(x([42,80,160,240,162,185,255,205,128,128,128]),y.t)
C.aoO=B.a(x([C.avM,C.azt,C.azu]),y.S)
C.aqm=B.a(x([244,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aqn=B.a(x([238,1,255,128,128,128,128,128,128,128,128]),y.t)
C.awq=B.a(x([C.Jz,C.aqm,C.aqn]),y.S)
C.azK=B.a(x([C.ap_,C.asN,C.alK,C.ax1,C.arv,C.aqA,C.aoO,C.awq]),y.o)
C.aAi=B.a(x([C.axK,C.aqv,C.avR,C.azK]),y.M)
C.VD=new B.cQ([C.eS,1,C.ft,3,C.fu,15,C.a_,255,C.bY,65535,C.ia,4294967295,C.jG,127,C.jH,32767,C.jI,2147483647,C.fZ,1,C.i9,1,C.jF,1],B.x("cQ<mG,r>"))
C.Af=new B.cQ([34665,"exif",40965,"interop",34853,"gps"],B.x("cQ<r,f>"))
C.aKx={ProcessingSoftware:0,SubfileType:1,OldSubfileType:2,ImageWidth:3,ImageLength:4,ImageHeight:5,BitsPerSample:6,Compression:7,PhotometricInterpretation:8,Thresholding:9,CellWidth:10,CellLength:11,FillOrder:12,DocumentName:13,ImageDescription:14,Make:15,Model:16,StripOffsets:17,Orientation:18,SamplesPerPixel:19,RowsPerStrip:20,StripByteCounts:21,MinSampleValue:22,MaxSampleValue:23,XResolution:24,YResolution:25,PlanarConfiguration:26,PageName:27,XPosition:28,YPosition:29,GrayResponseUnit:30,GrayResponseCurve:31,T4Options:32,T6Options:33,ResolutionUnit:34,PageNumber:35,ColorResponseUnit:36,TransferFunction:37,Software:38,DateTime:39,Artist:40,HostComputer:41,Predictor:42,WhitePoint:43,PrimaryChromaticities:44,ColorMap:45,HalftoneHints:46,TileWidth:47,TileLength:48,TileOffsets:49,TileByteCounts:50,BadFaxLines:51,CleanFaxData:52,ConsecutiveBadFaxLines:53,InkSet:54,InkNames:55,NumberofInks:56,DotRange:57,TargetPrinter:58,ExtraSamples:59,SampleFormat:60,SMinSampleValue:61,SMaxSampleValue:62,TransferRange:63,ClipPath:64,JPEGProc:65,JPEGInterchangeFormat:66,JPEGInterchangeFormatLength:67,YCbCrCoefficients:68,YCbCrSubSampling:69,YCbCrPositioning:70,ReferenceBlackWhite:71,ApplicationNotes:72,Rating:73,CFARepeatPatternDim:74,CFAPattern:75,BatteryLevel:76,Copyright:77,ExposureTime:78,FNumber:79,"IPTC-NAA":80,ExifOffset:81,InterColorProfile:82,ExposureProgram:83,SpectralSensitivity:84,GPSOffset:85,ISOSpeed:86,OECF:87,SensitivityType:88,RecommendedExposureIndex:89,ExifVersion:90,DateTimeOriginal:91,DateTimeDigitized:92,OffsetTime:93,OffsetTimeOriginal:94,OffsetTimeDigitized:95,ComponentsConfiguration:96,CompressedBitsPerPixel:97,ShutterSpeedValue:98,ApertureValue:99,BrightnessValue:100,ExposureBiasValue:101,MaxApertureValue:102,SubjectDistance:103,MeteringMode:104,LightSource:105,Flash:106,FocalLength:107,SubjectArea:108,MakerNote:109,UserComment:110,SubSecTime:111,SubSecTimeOriginal:112,SubSecTimeDigitized:113,XPTitle:114,XPComment:115,XPAuthor:116,XPKeywords:117,XPSubject:118,FlashPixVersion:119,ColorSpace:120,ExifImageWidth:121,ExifImageLength:122,RelatedSoundFile:123,InteroperabilityOffset:124,FlashEnergy:125,SpatialFrequencyResponse:126,FocalPlaneXResolution:127,FocalPlaneYResolution:128,FocalPlaneResolutionUnit:129,SubjectLocation:130,ExposureIndex:131,SensingMethod:132,FileSource:133,SceneType:134,CVAPattern:135,CustomRendered:136,ExposureMode:137,WhiteBalance:138,DigitalZoomRatio:139,FocalLengthIn35mmFilm:140,SceneCaptureType:141,GainControl:142,Contrast:143,Saturation:144,Sharpness:145,DeviceSettingDescription:146,SubjectDistanceRange:147,ImageUniqueID:148,CameraOwnerName:149,BodySerialNumber:150,LensSpecification:151,LensMake:152,LensModel:153,LensSerialNumber:154,Gamma:155,PrintIM:156,Padding:157,OffsetSchema:158,OwnerName:159,SerialNumber:160,InteropIndex:161,InteropVersion:162,RelatedImageFileFormat:163,RelatedImageWidth:164,RelatedImageLength:165,GPSVersionID:166,GPSLatitudeRef:167,GPSLatitude:168,GPSLongitudeRef:169,GPSLongitude:170,GPSAltitudeRef:171,GPSAltitude:172,GPSTimeStamp:173,GPSSatellites:174,GPSStatus:175,GPSMeasureMode:176,GPSDOP:177,GPSSpeedRef:178,GPSSpeed:179,GPSTrackRef:180,GPSTrack:181,GPSImgDirectionRef:182,GPSImgDirection:183,GPSMapDatum:184,GPSDestLatitudeRef:185,GPSDestLatitude:186,GPSDestLongitudeRef:187,GPSDestLongitude:188,GPSDestBearingRef:189,GPSDestBearing:190,GPSDestDistanceRef:191,GPSDestDistance:192,GPSProcessingMethod:193,GPSAreaInformation:194,GPSDate:195,GPSDifferential:196}
C.VK=new B.A(C.aKx,[11,254,255,256,257,257,258,259,262,263,264,265,266,269,270,271,272,273,274,277,278,279,280,281,282,283,284,285,286,287,290,291,292,293,296,297,300,301,305,306,315,316,317,318,319,320,321,322,323,324,325,326,327,328,332,333,334,336,337,338,339,340,341,342,343,512,513,514,529,530,531,532,700,18246,33421,33422,33423,33432,33434,33437,33723,34665,34675,34850,34852,34853,34855,34856,34864,34866,36864,36867,36868,36880,36881,36882,37121,37122,37377,37378,37379,37380,37381,37382,37383,37384,37385,37386,37396,37500,37510,37520,37521,37522,40091,40092,40093,40094,40095,40960,40961,40962,40963,40964,40965,41483,41484,41486,41487,41488,41492,41493,41495,41728,41729,41730,41985,41986,41987,41988,41989,41990,41991,41992,41993,41994,41995,41996,42016,42032,42033,42034,42035,42036,42037,42240,50341,59932,59933,65e3,65001,1,2,4096,4097,4098,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],B.x("A<f,r>"))
C.aR0=new A.asg(0,"none")
C.aR1=new A.asg(4,"paeth")
C.mB=new A.Bq(0,"invalid")
C.a_L=new A.Bq(1,"pbm")
C.a_M=new A.Bq(2,"pgm2")
C.AL=new A.Bq(3,"pgm5")
C.a_N=new A.Bq(4,"ppm3")
C.AM=new A.Bq(5,"ppm6")
C.aT_=new A.bnX(0,"origin")
C.aT0=new A.bo_(1,"contain")
C.a2t=new B.X(!0,D.u,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.b0F=new B.c4("Processing content and detecting large images...",null,P.a2r,null,null,null,null,null,null,null,null,null,null,null,null)
C.b12=new B.c4("Reducing Images Size...",null,C.a2t,null,null,null,null,null,null,null,null,null,null,null,null)
C.b1l=new B.c4("Some images are large and may slow down the app. Press OK to convert them into optimal size.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.b1n=new B.c4("Large Images Detected",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.Cg=new A.qK(0,"bilevel")
C.b1B=new A.qK(1,"gray4bit")
C.b1C=new A.qK(2,"gray")
C.b1D=new A.qK(3,"grayAlpha")
C.b1E=new A.qK(4,"palette")
C.a2I=new A.qK(5,"rgb")
C.b1F=new A.qK(6,"rgba")
C.b1G=new A.qK(7,"yCbCrSub")
C.vy=new A.qK(8,"generic")
C.b1H=new A.qK(9,"invalid")
C.n8=new A.PP(0,"undefined")
C.CG=new A.PP(1,"lossy")
C.vE=new A.PP(2,"lossless")
C.b4p=new A.PP(3,"animated")})();(function staticFields(){$.ud=B.bv("_config")
$.cdh=!0
$.cac=null
$.clf=!1
$.clg=B.a([A.cbw(),A.cWd(),A.cWi(),A.cWj(),A.cWk(),A.cWl(),A.cWm(),A.cWn(),A.cWo(),A.cWp(),A.cWe(),A.cWf(),A.cWg(),A.cWh(),A.cbw(),A.cbw()],B.x("p<r(pt,r,r)>"))
$.h7=null
$.cfV=B.bv("_eLut")})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazy
x($,"d13","csV",()=>A.c9U(C.rs,C.OD,257,286,15))
x($,"d12","csU",()=>A.c9U(C.J8,C.tr,0,30,15))
x($,"d11","csT",()=>A.c9U(null,C.asL,0,19,7))
x($,"d4b","c5j",()=>{var v=null,u="ISOSpeed"
return B.G([11,A.ax("ProcessingSoftware",C.bc,v),254,A.ax("SubfileType",C.co,1),255,A.ax("OldSubfileType",C.co,1),256,A.ax("ImageWidth",C.co,1),257,A.ax("ImageLength",C.co,1),258,A.ax("BitsPerSample",C.b0,1),259,A.ax("Compression",C.b0,1),262,A.ax("PhotometricInterpretation",C.b0,1),263,A.ax("Thresholding",C.b0,1),264,A.ax("CellWidth",C.b0,1),265,A.ax("CellLength",C.b0,1),266,A.ax("FillOrder",C.b0,1),269,A.ax("DocumentName",C.bc,v),270,A.ax("ImageDescription",C.bc,v),271,A.ax("Make",C.bc,v),272,A.ax("Model",C.bc,v),273,A.ax("StripOffsets",C.co,v),274,A.ax("Orientation",C.b0,1),277,A.ax("SamplesPerPixel",C.b0,1),278,A.ax("RowsPerStrip",C.co,1),279,A.ax("StripByteCounts",C.co,1),280,A.ax("MinSampleValue",C.b0,1),281,A.ax("MaxSampleValue",C.b0,1),282,A.ax("XResolution",C.dC,1),283,A.ax("YResolution",C.dC,1),284,A.ax("PlanarConfiguration",C.b0,1),285,A.ax("PageName",C.bc,v),286,A.ax("XPosition",C.dC,1),287,A.ax("YPosition",C.dC,1),290,A.ax("GrayResponseUnit",C.b0,1),291,A.ax("GrayResponseCurve",C.S,v),292,A.ax("T4Options",C.S,v),293,A.ax("T6Options",C.S,v),296,A.ax("ResolutionUnit",C.b0,1),297,A.ax("PageNumber",C.b0,2),300,A.ax("ColorResponseUnit",C.S,v),301,A.ax("TransferFunction",C.b0,768),305,A.ax("Software",C.bc,v),306,A.ax("DateTime",C.bc,v),315,A.ax("Artist",C.bc,v),316,A.ax("HostComputer",C.bc,v),317,A.ax("Predictor",C.b0,1),318,A.ax("WhitePoint",C.dC,2),319,A.ax("PrimaryChromaticities",C.dC,6),320,A.ax("ColorMap",C.b0,v),321,A.ax("HalftoneHints",C.b0,2),322,A.ax("TileWidth",C.co,1),323,A.ax("TileLength",C.co,1),324,A.ax("TileOffsets",C.co,v),325,A.ax("TileByteCounts",C.S,v),326,A.ax("BadFaxLines",C.S,v),327,A.ax("CleanFaxData",C.S,v),328,A.ax("ConsecutiveBadFaxLines",C.S,v),332,A.ax("InkSet",C.S,v),333,A.ax("InkNames",C.S,v),334,A.ax("NumberofInks",C.S,v),336,A.ax("DotRange",C.S,v),337,A.ax("TargetPrinter",C.bc,v),338,A.ax("ExtraSamples",C.S,v),339,A.ax("SampleFormat",C.b0,1),340,A.ax("SMinSampleValue",C.S,v),341,A.ax("SMaxSampleValue",C.S,v),342,A.ax("TransferRange",C.S,v),343,A.ax("ClipPath",C.S,v),512,A.ax("JPEGProc",C.S,v),513,A.ax("JPEGInterchangeFormat",C.S,v),514,A.ax("JPEGInterchangeFormatLength",C.S,v),529,A.ax("YCbCrCoefficients",C.dC,3),530,A.ax("YCbCrSubSampling",C.b0,1),531,A.ax("YCbCrPositioning",C.b0,1),532,A.ax("ReferenceBlackWhite",C.dC,6),700,A.ax("ApplicationNotes",C.b0,1),18246,A.ax("Rating",C.b0,1),33421,A.ax("CFARepeatPatternDim",C.S,v),33422,A.ax("CFAPattern",C.S,v),33423,A.ax("BatteryLevel",C.S,v),33432,A.ax("Copyright",C.bc,v),33434,A.ax("ExposureTime",C.dC,1),33437,A.ax("FNumber",C.dC,v),33723,A.ax("IPTC-NAA",C.co,1),34665,A.ax("ExifOffset",C.S,v),34675,A.ax("InterColorProfile",C.S,v),34850,A.ax("ExposureProgram",C.b0,1),34852,A.ax("SpectralSensitivity",C.bc,v),34853,A.ax("GPSOffset",C.S,v),34855,A.ax(u,C.co,1),34856,A.ax("OECF",C.S,v),34864,A.ax("SensitivityType",C.b0,1),34866,A.ax("RecommendedExposureIndex",C.co,1),34867,A.ax(u,C.co,1),36864,A.ax("ExifVersion",C.h0,v),36867,A.ax("DateTimeOriginal",C.bc,v),36868,A.ax("DateTimeDigitized",C.bc,v),36880,A.ax("OffsetTime",C.bc,v),36881,A.ax("OffsetTimeOriginal",C.bc,v),36882,A.ax("OffsetTimeDigitized",C.bc,v),37121,A.ax("ComponentsConfiguration",C.h0,v),37122,A.ax("CompressedBitsPerPixel",C.S,v),37377,A.ax("ShutterSpeedValue",C.S,v),37378,A.ax("ApertureValue",C.S,v),37379,A.ax("BrightnessValue",C.S,v),37380,A.ax("ExposureBiasValue",C.S,v),37381,A.ax("MaxApertureValue",C.S,v),37382,A.ax("SubjectDistance",C.S,v),37383,A.ax("MeteringMode",C.S,v),37384,A.ax("LightSource",C.S,v),37385,A.ax("Flash",C.S,v),37386,A.ax("FocalLength",C.S,v),37396,A.ax("SubjectArea",C.S,v),37500,A.ax("MakerNote",C.h0,v),37510,A.ax("UserComment",C.h0,v),37520,A.ax("SubSecTime",C.S,v),37521,A.ax("SubSecTimeOriginal",C.S,v),37522,A.ax("SubSecTimeDigitized",C.S,v),40091,A.ax("XPTitle",C.S,v),40092,A.ax("XPComment",C.S,v),40093,A.ax("XPAuthor",C.S,v),40094,A.ax("XPKeywords",C.S,v),40095,A.ax("XPSubject",C.S,v),40960,A.ax("FlashPixVersion",C.S,v),40961,A.ax("ColorSpace",C.b0,1),40962,A.ax("ExifImageWidth",C.b0,1),40963,A.ax("ExifImageLength",C.b0,1),40964,A.ax("RelatedSoundFile",C.S,v),40965,A.ax("InteroperabilityOffset",C.S,v),41483,A.ax("FlashEnergy",C.S,v),41484,A.ax("SpatialFrequencyResponse",C.S,v),41486,A.ax("FocalPlaneXResolution",C.S,v),41487,A.ax("FocalPlaneYResolution",C.S,v),41488,A.ax("FocalPlaneResolutionUnit",C.S,v),41492,A.ax("SubjectLocation",C.S,v),41493,A.ax("ExposureIndex",C.S,v),41495,A.ax("SensingMethod",C.S,v),41728,A.ax("FileSource",C.S,v),41729,A.ax("SceneType",C.S,v),41730,A.ax("CVAPattern",C.S,v),41985,A.ax("CustomRendered",C.S,v),41986,A.ax("ExposureMode",C.S,v),41987,A.ax("WhiteBalance",C.S,v),41988,A.ax("DigitalZoomRatio",C.S,v),41989,A.ax("FocalLengthIn35mmFilm",C.S,v),41990,A.ax("SceneCaptureType",C.S,v),41991,A.ax("GainControl",C.S,v),41992,A.ax("Contrast",C.S,v),41993,A.ax("Saturation",C.S,v),41994,A.ax("Sharpness",C.S,v),41995,A.ax("DeviceSettingDescription",C.S,v),41996,A.ax("SubjectDistanceRange",C.S,v),42016,A.ax("ImageUniqueID",C.S,v),42032,A.ax("CameraOwnerName",C.bc,v),42033,A.ax("BodySerialNumber",C.bc,v),42034,A.ax("LensSpecification",C.S,v),42035,A.ax("LensMake",C.bc,v),42036,A.ax("LensModel",C.bc,v),42037,A.ax("LensSerialNumber",C.bc,v),42240,A.ax("Gamma",C.dC,1),50341,A.ax("PrintIM",C.S,v),59932,A.ax("Padding",C.S,v),59933,A.ax("OffsetSchema",C.S,v),65e3,A.ax("OwnerName",C.bc,v),65001,A.ax("SerialNumber",C.bc,v)],y.p,B.x("ajG"))})
w($,"d0b","aPx",()=>B.AU(511))
w($,"d0c","c5a",()=>B.AU(511))
w($,"d0e","c5b",()=>A.chU(2041))
w($,"d0f","aPy",()=>A.chU(225))
w($,"d0d","oA",()=>B.AU(766))
x($,"cZA","crF",()=>A.cgM(0,0,0))
x($,"d1v","nq",()=>B.AU(1))
x($,"d1w","oB",()=>A.cCc($.nq().buffer,0,null))
x($,"d1o","pE",()=>M.cDF(1))
x($,"d1p","r5",()=>{var v,u=$.pE().buffer
B.yF(u,0,null)
v=D.c.aY(u.byteLength,2)
return new Int16Array(u,0,v)})
x($,"d1q","hk",()=>B.cDH(1))
x($,"d1s","kQ",()=>B.bgU($.hk().buffer,0,null))
x($,"d1r","Dt",()=>A.cAF($.hk().buffer))
x($,"d1m","aPA",()=>B.c7I(1))
x($,"d1n","c5d",()=>A.cl2($.aPA().buffer,0))
x($,"d1k","cci",()=>B.bgS(1))
x($,"d1l","ct9",()=>A.cl2($.cci().buffer,0))
x($,"d1t","ccj",()=>A.cIt(1))
x($,"d1u","cta",()=>{var v=$.ccj()
return A.cAG(v.gh_(v))})})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_220",e:"endPart",h:b})})($__dart_deferred_initializers__,"eGr9N9nTveC4WqxVE6a4yP9x0FQ=");