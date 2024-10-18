((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_210",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,M,G,N,O,P,I,Q,E,A={
RU(d){return new A.abs(d,null,null)},
abs:function abs(d,e,f){this.a=d
this.b=e
this.c=f},
zy(d,e,f,g){var x,w
if(y.ah.b(d))x=B.bS(d.buffer,d.byteOffset,d.byteLength)
else x=y.L.b(d)?d:B.bd(y.R.a(d),!0,y.p)
w=new A.b4H(x,g,g,e)
w.e=f==null?x.length:f
return w},
b4I:function b4I(){},
b4H:function b4H(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
c_8(d,e){var x=e==null?32768:e
return new A.bcz(d,new Uint8Array(x))},
bcA:function bcA(){},
bcz:function bcz(d,e){this.a=0
this.b=d
this.c=e},
bT0:function bT0(){},
c5N(d,e,f,g){var x=d[e*2],w=d[f*2]
if(x>=w)x=x===w&&g[e]<=g[f]
else x=!0
return x},
c0M(){return new A.bFT()},
cB6(d,e,f){var x,w,v,u,t,s,r=new Uint16Array(16)
for(x=0,w=1;w<=15;++w){x=x+f[w-1]<<1>>>0
r[w]=x}for(v=0;v<=e;++v){u=v*2
t=d[u+1]
if(t===0)continue
s=r[t]
r[t]=s+1
d[u]=A.cB7(s,t)}},
cB7(d,e){var x,w=0
do{x=A.nV(d,1)
w=(w|d&1)<<1>>>0
if(--e,e>0){d=x
continue}else break}while(!0)
return A.nV(w,1)},
ccN(d){return d<256?C.GY[d]:C.GY[256+A.nV(d,7)]},
c0Z(d,e,f,g,h){return new A.bOP(d,e,f,g,h)},
nV(d,e){if(d>=0)return D.c.mL(d,e)
else return D.c.mL(d,e)+D.c.dU(2,(~e>>>0)+65536&65535)},
aUR:function aUR(d,e,f,g,h,i,j,k){var _=this
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
_.S=_.A=_.ck=_.c7=_.by=_.al=_.bp=_.bo=_.y2=_.y1=$},
qd:function qd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bFT:function bFT(){this.c=this.b=this.a=$},
bOP:function bOP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aj9(d){var x=new A.b3f()
x.aLw(d)
return x},
b3f:function b3f(){this.a=$
this.b=0
this.c=2147483647},
b4q:function b4q(d,e,f,g){var _=this
_.a=d
_.b=!1
_.c=e
_.e=_.d=0
_.r=f
_.w=g},
bv7:function bv7(){},
bv6:function bv6(){},
bv8:function bv8(){},
cs5(d,e){return new A.zh(d,e)},
zh:function zh(d,e){this.c=d
this.a=e},
a4V:function a4V(d){var _=this
_.e=null
_.x=_.w=_.r=_.f=!1
_.y=null
_.z=0
_.Q=d
_.as=$
_.c=_.a=null},
bFv:function bFv(d){this.a=d},
bFs:function bFs(d){this.a=d},
bFt:function bFt(d){this.a=d},
bFu:function bFu(d){this.a=d},
bFy:function bFy(d){this.a=d},
bFz:function bFz(){},
bFx:function bFx(d){this.a=d},
bFA:function bFA(d){this.a=d},
bFB:function bFB(d){this.a=d},
bFw:function bFw(d){this.a=d},
bFC:function bFC(d){this.a=d},
b3P(d,e){var x=0,w=B.l(y.D),v
var $async$b3P=B.h(function(f,g){if(f===1)return B.i(g,w)
while(true)switch(x){case 0:x=3
return B.c(A.L9(d,e,"jpg",new A.b3Q(d,e,85),85),$async$b3P)
case 3:v=g
x=1
break
case 1:return B.j(v,w)}})
return B.k($async$b3P,w)},
b3R(d,e){var x=0,w=B.l(y.D),v
var $async$b3R=B.h(function(f,g){if(f===1)return B.i(g,w)
while(true)switch(x){case 0:x=3
return B.c(A.L9(d,e,"png",new A.b3S(d,e),null),$async$b3R)
case 3:v=g
x=1
break
case 1:return B.j(v,w)}})
return B.k($async$b3R,w)},
L9(d,e,f,g,h){return A.csm(d,e,f,g,h)},
csm(d,e,f,g,h){var x=0,w=B.l(y.D),v,u=2,t,s=[],r,q,p,o,n,m,l,k,j
var $async$L9=B.h(function(i,a0){if(i===1){t=a0
x=u}while(true)switch(x){case 0:if(!$.c4g){v=g.$0()
x=1
break}m=$.kp().b
m===$&&B.b()
r=m
q="uploads/"+Date.now()+"."+f
u=4
m=r.as
m===$&&B.b()
x=7
return B.c(m.bQ("images-temp").XN(q,d),$async$L9)
case 7:p=a0
if(J.aY(p)===0){m=g.$0()
v=m
x=1
break}u=9
m=r.as
m===$&&B.b()
x=12
return B.c(m.bQ("images-temp").Uh(0,q,new A.bsu(e,C.aRA,h,C.aRz)),$async$L9)
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
m=B.ab(k)
if(m instanceof B.O1){n=m
if(n.c==="403")$.c4g=!1
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
return B.c(m.bQ("images-temp").E(0,B.a([q],y.s)),$async$L9)
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
return B.k($async$L9,w)},
c7G(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n=null,m=A.cfJ(d)
if(m==null)throw B.d(B.cX("Failed to decode "+f+" image"))
x=A.cH8(m,e)
if(f==="jpg"){w=g==null?85:g
v=new Uint8Array(64)
u=new Uint8Array(64)
t=new Float32Array(64)
s=new Float32Array(64)
r=B.bk(65535,n,!1,y.cl)
q=y.u
p=B.bk(65535,n,!1,q)
o=B.bk(64,n,!1,q)
q=B.bk(64,n,!1,q)
v=new A.b5j(v,u,t,s,r,p,o,q,new Int32Array(2048))
v.e=v.PK(C.Hg,C.p2)
v.f=v.PK(C.Hh,C.p2)
v.r=v.PK(C.Hi,C.JE)
v.w=v.PK(C.Hj,C.GP)
v.b0u()
v.b0G()
v.aDL(w)
return new Uint8Array(B.bv(v.bn0(x,C.GD)))}else if(f==="png")return new Uint8Array(B.bv(new A.bff(C.aQJ,6).bn1(x,!1)))
else throw B.d(B.cX("Unsupported image format: "+f))},
b3Q:function b3Q(d,e,f){this.a=d
this.b=e
this.c=f},
b3S:function b3S(d,e){this.a=d
this.b=e},
aQh:function aQh(d,e){this.a=d
this.b=e},
fQ:function fQ(d){this.a=-1
this.b=d},
Jk:function Jk(d){this.a=d},
Jl:function Jl(d){this.a=d},
Jm:function Jm(d){this.a=d},
Jn:function Jn(d){this.a=d},
Jo:function Jo(d){this.a=d},
Jp:function Jp(d){this.a=d},
Js:function Js(d,e){this.a=d
this.b=e},
Jt:function Jt(d){this.a=d},
Ju:function Ju(d,e){this.a=d
this.b=e},
Jv:function Jv(d){this.a=d},
Jw:function Jw(d,e){this.a=d
this.b=e},
coh(d,e,f,g){var x=new A.Jq(new Uint8Array(4))
x.aLi(d,e,f,g)
return x},
vF:function vF(d){this.a=d},
add:function add(d){this.a=d},
Jq:function Jq(d){this.a=d},
aLd(d,e,f){var x
if(e===f)return d
switch(e.a){case 0:if(d===0)x=0
else{x=C.Uv.i(0,f)
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
case 1:return D.c.M(B.b0(d),1)
case 2:return d
case 3:return d*17
case 4:return d*4369
case 5:return d*286331153
case 6:return d*8
case 7:return d*2184
case 8:return d*143165576
case 9:case 10:case 11:return d/3}break
case 3:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.M(B.b0(d),6)
case 2:return D.c.M(B.b0(d),4)
case 3:return d
case 4:return d*257
case 5:return d*16843009
case 6:return D.c.M(B.b0(d),1)
case 7:return d*128
case 8:return d*8421504
case 9:case 10:case 11:return d/255}break
case 4:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.M(B.b0(d),14)
case 2:return D.c.M(B.b0(d),12)
case 3:return D.c.M(B.b0(d),8)
case 4:return d
case 5:return B.b0(d)<<8>>>0
case 6:return D.c.M(B.b0(d),9)
case 7:return D.c.M(B.b0(d),1)
case 8:return d*524296
case 9:case 10:case 11:return d/65535}break
case 5:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.M(B.b0(d),30)
case 2:return D.c.M(B.b0(d),28)
case 3:return D.c.M(B.b0(d),24)
case 4:return D.c.M(B.b0(d),16)
case 5:return d
case 6:return D.c.M(B.b0(d),25)
case 7:return D.c.M(B.b0(d),17)
case 8:return D.c.M(B.b0(d),1)
case 9:case 10:case 11:return d/4294967295}break
case 6:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.M(B.b0(d),5)
case 2:return d<=0?0:D.c.M(B.b0(d),3)
case 3:return d<=0?0:B.b0(d)<<1>>>0
case 4:return d<=0?0:B.b0(d)*516
case 5:return d<=0?0:B.b0(d)*33818640
case 6:return d
case 7:return d*258
case 8:return d*16909320
case 9:case 10:case 11:return d/127}break
case 7:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.M(B.b0(d),15)
case 2:return d<=0?0:D.c.M(B.b0(d),11)
case 3:return d<=0?0:D.c.M(B.b0(d),7)
case 4:return d<=0?0:B.b0(d)<<1>>>0
case 5:return d<=0?0:B.b0(d)*131076
case 6:return D.c.M(B.b0(d),8)
case 7:return d
case 8:return B.b0(d)*65538
case 9:case 10:case 11:return d/32767}break
case 8:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.M(B.b0(d),29)
case 2:return d<=0?0:D.c.M(B.b0(d),27)
case 3:return d<=0?0:D.c.M(B.b0(d),23)
case 4:return d<=0?0:D.c.M(B.b0(d),16)
case 5:return d<=0?0:B.b0(d)<<1>>>0
case 6:return D.c.M(B.b0(d),24)
case 7:return D.c.M(B.b0(d),16)
case 8:return d
case 9:case 10:case 11:return d/2147483647}break
case 9:case 10:case 11:switch(f.a){case 0:return d===0?0:1
case 1:return D.d.C(D.d.bh(d,0,1)*3)
case 2:return D.d.C(D.d.bh(d,0,1)*15)
case 3:return D.d.C(D.d.bh(d,0,1)*255)
case 4:return D.d.C(D.d.bh(d,0,1)*65535)
case 5:return D.d.C(D.d.bh(d,0,1)*4294967295)
case 6:return D.d.C(d<0?D.d.bh(d,-1,1)*128:D.d.bh(d,-1,1)*127)
case 7:return D.d.C(d<0?D.d.bh(d,-1,1)*32768:D.d.bh(d,-1,1)*32767)
case 8:return D.d.C(d<0?D.d.bh(d,-1,1)*2147483648:D.d.bh(d,-1,1)*2147483647)
case 9:case 10:case 11:return d}break}},
m2:function m2(d,e){this.a=d
this.b=e},
aci:function aci(d,e){this.a=d
this.b=e},
UL(d){var x=new A.KF(B.C(y.N,y.P))
x.aLx(d)
return x},
c6I(d){var x=new A.KF(B.C(y.N,y.P))
x.p6(0,d)
return x},
KF:function KF(d){this.a=d},
aAD:function aAD(d,e){this.a=d
this.b=e},
at(d,e,f){return new A.ah0(d,e)},
ah0:function ah0(d,e){this.a=d
this.b=e},
r0:function r0(d){this.a=d},
b3I:function b3I(d){this.a=d},
c7v(d){var x=new A.oh(B.C(y.p,y.r),new A.r0(B.C(y.N,y.P)))
x.bjv(d)
return x},
oh:function oh(d,e){this.a=d
this.b=e},
b3J:function b3J(d){this.a=d},
b3K:function b3K(d){this.a=d},
csk(d){var x=new Uint16Array(1)
x[0]=d
return new A.we(x)},
c7D(d,e){var x=new A.we(new Uint16Array(e))
x.aLC(d,e)
return x},
csj(d){var x=new Uint32Array(1)
x[0]=d
return new A.pr(x)},
c7y(d,e){var x=new A.pr(new Uint32Array(e))
x.aLz(d,e)
return x},
c7z(d,e){var x,w=J.jE(e,y.i)
for(x=0;x<e;++x)w[x]=new A.mi(d.ae(),d.ae())
return new A.r1(w)},
c7C(d,e){var x=new A.wd(new Int16Array(e))
x.aLB(d,e)
return x},
c7A(d,e){var x=new A.wc(new Int32Array(e))
x.aLA(d,e)
return x},
c7B(d,e){var x,w,v,u,t=J.jE(e,y.i)
for(x=0;x<e;++x){w=d.ae()
v=$.h5()
v[0]=w
w=$.kq()
u=w[0]
v[0]=d.ae()
t[x]=new A.mi(u,w[0])}return new A.r2(t)},
c7E(d){var x=new Float32Array(1)
x[0]=d
return new A.zn(x)},
c7F(d,e){var x=new A.zn(new Float32Array(e))
x.aLD(d,e)
return x},
c7w(d){var x=new Float64Array(1)
x[0]=d
return new A.zm(x)},
c7x(d,e){var x=new A.zm(new Float64Array(e))
x.aLy(d,e)
return x},
ll:function ll(d,e){this.a=d
this.b=e},
iU:function iU(){},
r_:function r_(d){this.a=d},
zl:function zl(d){this.a=d},
we:function we(d){this.a=d},
pr:function pr(d){this.a=d},
r1:function r1(d){this.a=d},
tX:function tX(d){this.a=d},
wd:function wd(d){this.a=d},
wc:function wc(d){this.a=d},
r2:function r2(d){this.a=d},
zn:function zn(d){this.a=d},
zm:function zm(d){this.a=d},
Ek:function Ek(d){this.a=d},
c4z(d){var x,w,v=new A.aP2()
if(!A.bYc(d))B.V(A.bC("Not a bitmap file."))
d.d+=2
x=d.ae()
w=$.h5()
w[0]=x
x=$.kq()
d.d+=4
w[0]=d.ae()
v.b=x[0]
return v},
bYc(d){if(d.c-d.d<2)return!1
return A.bK(d,null,0).bz()===19778},
cnD(d,e){var x,w,v,u,t=e==null?A.c4z(d):e,s=d.d,r=d.ae(),q=d.ae(),p=$.h5()
p[0]=q
q=$.kq()
x=q[0]
p[0]=d.ae()
q=q[0]
w=d.bz()
v=d.bz()
u=C.Jr[d.ae()]
d.ae()
p[0]=d.ae()
p[0]=d.ae()
p=d.ae()
d.ae()
s=new A.CT(t,x,q,r,w,v,u,p,s)
s.ad_(d,e)
return s},
ky:function ky(d,e){this.a=d
this.b=e},
aP2:function aP2(){this.b=$},
CT:function CT(d,e,f,g,h,i,j,k,l){var _=this
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
acl:function acl(d){this.a=$
this.b=null
this.c=d},
aP1:function aP1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aVN:function aVN(d){this.a=$
this.b=null
this.c=d},
aUA:function aUA(){},
aUB:function aUB(){},
aY0:function aY0(){},
ah1:function ah1(d,e,f){this.a=d
this.b=e
this.c=f},
ajJ:function ajJ(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
KH:function KH(d,e){this.a=d
this.b=e},
DK:function DK(d,e){this.a=d
this.b=e},
ah2:function ah2(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
c6J(d,e,f,g){var x,w
switch(d.a){case 1:return new A.b4Q(f,e)
case 2:return new A.ajL(f,g==null?1:g,e)
case 3:return new A.ajL(f,g==null?16:g,e)
case 4:x=g==null?32:g
w=new A.b4O(f,x,e)
w.aLL(e,f,x)
return w
case 5:return new A.b4P(f,g==null?16:g,e)
case 6:return new A.ajJ(f,g==null?32:g,!1,e)
case 7:return new A.ajJ(f,g==null?32:g,!0,e)
default:throw B.d(A.bC("Invalid compression type: "+d.j(0)))}},
qR:function qR(d,e){this.a=d
this.b=e},
aZa:function aZa(){},
b4N:function b4N(){},
cqO(d,e,f,g){var x,w,v,u,t,s,r,q
if(e===0){if(g!==0)throw B.d(A.bC("Incomplete huffman data"))
return}x=d.d
w=d.ae()
v=d.ae()
d.d+=4
u=d.ae()
t=!0
if(w<65537)t=v>=65537
if(t)throw B.d(A.bC("Invalid huffman table size"))
d.d+=4
s=B.bk(65537,0,!1,y.p)
r=J.hU(16384,y.W)
for(q=0;q<16384;++q)r[q]=new A.ah3()
A.cqP(d,e-20,w,v,s)
if(u>8*(e-(d.d-x)))throw B.d(A.bC("Error in header for Huffman-encoded data (invalid number of bits)."))
A.cqL(s,w,v,r)
A.cqN(s,r,d,u,v,g,f)},
cqN(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p="Error in Huffman-encoded data (invalid code).",o=B.a([0,0],y.t),n=f.d+D.c.aZ(g+7,8)
for(x=0;f.d<n;){A.bZ6(o,f)
for(;w=o[1],w>=14;){v=e[D.c.mL(o[0],w-14)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.bZ7(v.b,h,o,f,j,x,i)}else{if(v.c==null)throw B.d(A.bC(p))
for(t=0;t<v.b;++t){s=d[v.c[t]]&63
while(!0){w=o[1]
if(!(w<s&&f.d<n))break
A.bZ6(o,f)}if(w>=s){u=v.c
w-=s
if(d[u[t]]>>>6===(D.c.mL(o[0],w)&D.c.dU(1,s)-1)>>>0){o[1]=w
r=A.bZ7(u[t],h,o,f,j,x,i)
x=r
break}}}if(t===v.b)throw B.d(A.bC(p))}}}q=8-g&7
o[0]=D.c.M(o[0],q)
o[1]=o[1]-q
for(;w=o[1],w>0;){v=e[D.c.e8(o[0],14-w)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.bZ7(v.b,h,o,f,j,x,i)}else throw B.d(A.bC(p))}if(x!==i)throw B.d(A.bC("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
bZ7(d,e,f,g,h,i,j){var x,w,v,u,t,s="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)A.bZ6(f,g)
x=f[1]-8
f[1]=x
w=D.c.mL(f[0],x)&255
if(i+w>j)throw B.d(A.bC(s))
v=h[i-1]
for(;u=w-1,w>0;w=u,i=t){t=i+1
h[i]=v}}else{if(i<j){t=i+1
h[i]=d}else throw B.d(A.bC(s))
i=t}return i},
cqL(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n="Error in Huffman-encoded data (invalid code table entry)."
for(x=y.t,w=y.p;e<=f;++e){v=d[e]
u=v>>>6
t=v&63
if(D.c.fP(u,t)!==0)throw B.d(A.bC(n))
if(t>14){s=g[D.c.f8(u,t-14)]
if(s.a!==0)throw B.d(A.bC(n))
v=++s.b
r=s.c
if(r!=null){v=B.bk(v,0,!1,w)
s.c=v
for(q=s.b-1,p=0;p<q;++p)v[p]=r[p]}else s.c=B.a([0],x)
s.c[s.b-1]=e}else if(t!==0){v=14-t
o=D.c.e8(u,v)
for(p=D.c.e8(1,v);p>0;--p,++o){s=g[o]
if(s.a!==0||s.c!=null)throw B.d(A.bC(n))
s.a=t
s.b=e}}}},
cqP(d,e,f,g,h){var x,w,v,u,t,s="Error in Huffman-encoded data (unexpected end of code table data).",r="Error in Huffman-encoded data (code table is longer than expected).",q=d.d,p=B.a([0,0],y.t)
for(x=g+1;f<=g;++f){if(d.d-q>e)throw B.d(A.bC(s))
w=A.c6K(6,p,d)
h[f]=w
if(w===63){if(d.d-q>e)throw B.d(A.bC(s))
v=A.c6K(8,p,d)+6
if(f+v>x)throw B.d(A.bC(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}else if(w>=59){v=w-59+2
if(f+v>x)throw B.d(A.bC(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}}A.cqM(h)},
cqM(d){var x,w,v,u,t,s=B.bk(59,0,!1,y.p)
for(x=0;x<65537;++x){w=d[x]
s[w]=s[w]+1}for(v=0,x=58;x>0;--x,v=u){u=v+s[x]>>>1
s[x]=v}for(x=0;x<65537;++x){t=d[x]
if(t>0){w=s[t]
s[t]=w+1
d[x]=(t|w<<6)>>>0}}},
bZ6(d,e){d[0]=((d[0]<<8|e.cw())&-1)>>>0
d[1]=(d[1]+8&-1)>>>0},
c6K(d,e,f){var x
for(;x=e[1],x<d;){e[0]=((e[0]<<8|J.u(f.a,f.d++))&-1)>>>0
e[1]=(e[1]+8&-1)>>>0}x-=d
e[1]=x
return(D.c.mL(e[0],x)&D.c.dU(1,d)-1)>>>0},
ah3:function ah3(){this.b=this.a=0
this.c=null},
cqQ(d){var x=A.cl(d,!1,null,0)
if(x.ae()!==20000630)return!1
if(x.cw()!==2)return!1
if((x.qh()&4294967289)>>>0!==0)return!1
return!0},
aZc:function aZc(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
c7S(d,e,f){var x=new A.ajK(d,B.a([],y.Q),B.C(y.N,y.v),C.Fr,e)
x.aLp(d,e,f,{})
return x},
UR:function UR(){},
aZd:function aZd(d,e){this.a=d
this.b=e},
ajK:function ajK(d,e,f,g,h){var _=this
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
b4O:function b4O(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
aDk:function aDk(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
b4P:function b4P(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
b4Q:function b4Q(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
ajL:function ajL(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
aZb:function aZb(){this.a=null},
c77(d){var x=new Uint8Array(d*3)
return new A.Vk(A.crQ(d),d,null,new A.rj(x,d,3))},
crP(d){return new A.Vk(d.a,d.b,d.c,A.c9f(d.d))},
crQ(d){var x
for(x=1;x<=8;++x)if(D.c.dU(1,x)>=d)return x
return 0},
Vk:function Vk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vl:function Vl(){},
ajM:function ajM(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=$},
ais:function ais(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
b1j:function b1j(){var _=this
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
c7s(d){var x,w,v,u,t,s
if(d.bz()!==0)return null
x=d.bz()
if(x>=3)return null
w=C.aqp[x]
if(w===C.FS)return null
v=d.bz()
u=J.jE(v,y.X)
for(t=0;t<v;++t){J.u(d.a,d.d++)
s=J.u(d.a,d.d++)
J.u(d.a,d.d++);++d.d
d.bz()
d.bz()
u[t]=new A.ajc(s,d.ae(),d.ae())}return new A.b3x(w,v,u)},
L2:function L2(d,e){this.a=d
this.b=e},
b3x:function b3x(d,e,f){this.c=d
this.d=e
this.e=f},
ajc:function ajc(d,e,f){this.b=d
this.d=e
this.e=f},
b3v:function b3v(d,e,f,g,h,i,j,k,l){var _=this
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
b3w:function b3w(){this.b=this.a=null},
adi:function adi(d,e,f){this.e=d
this.f=e
this.r=f},
Ee:function Ee(){},
Ef:function Ef(d){this.a=d},
VI:function VI(d){this.a=d},
b5f:function b5f(){this.d=null},
zI:function zI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.y=_.x=_.w=_.r=_.f=_.e=$},
c85(){var x=B.bk(4,null,!1,y.a7),w=B.a([],y.cB),v=y.l,u=J.zF(0,v)
v=J.zF(0,v)
return new A.b5h(new A.KF(B.C(y.N,y.P)),x,w,u,v,B.a([],y.q))},
b5h:function b5h(d,e,f,g,h,i){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i},
b5i:function b5i(d,e){this.a=d
this.b=e},
PN:function PN(d){this.a=d
this.b=0},
ak_:function ak_(d,e){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=d
_.z=e},
b5l:function b5l(){this.r=this.f=$},
ak0:function ak0(d,e,f,g,h,i,j,k){var _=this
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
ajZ:function ajZ(){},
b5g:function b5g(d,e){this.a=d
this.b=e},
b5j:function b5j(d,e,f,g,h,i,j,k,l){var _=this
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
ME:function ME(d,e){this.a=d
this.b=e},
Zr:function Zr(d,e){this.a=d
this.b=e},
Zs:function Zs(){},
ajN:function ajN(d,e,f,g,h,i,j,k,l){var _=this
_.y=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
c7T(){var x=y.N
return new A.b4R(B.C(x,x),B.a([],y.d),B.a([],y.t))},
AA:function AA(d,e){this.a=d
this.b=e},
bfh:function bfh(){},
b4R:function b4R(d,e,f){var _=this
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
apq:function apq(d){var _=this
_.a=d
_.c=_.b=0
_.d=$
_.e=0},
apr:function apr(d,e){this.a=d
this.b=e},
bff:function bff(d,e){var _=this
_.a=null
_.b=d
_.c=0
_.d=e
_.e=$
_.f=0
_.r=!1
_.w=null},
AB:function AB(d,e){this.a=d
this.b=e},
FS:function FS(d){this.b=this.a=0
this.e=d},
bfi:function bfi(d){this.b=this.a=null
this.c=d},
bfj:function bfj(){},
ZL:function ZL(d){this.a=d
this.c=$},
c9S(d){var x=new A.bgc(B.C(y.p,y.a2))
x.aLW(d)
return x},
cvu(b6,b7,b8,b9,c0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=B.C(y.p,y.aG)
for(x=c0.length,w=0;v=c0.length,w<v;c0.length===x||(0,B.M)(c0),++w){u=c0[w]
b5.n(0,u.a,u)}if(b7===8)t=1
else t=b7===16?2:-1
s=A.fV(b4,b4,C.V,0,C.aW,b9,b4,0,v,b4,C.V,b8,!1)
if(t===-1)throw B.d(A.bC("PSD: unsupported bit depth: "+B.o(b7)))
r=b5.i(0,0)
q=b5.i(0,1)
p=b5.i(0,2)
o=b5.i(0,-1)
n=-t
for(x=s.a,x=x.gW(x),m=v>=5,l=t===1,k=v===4,j=v>=2,v=v>=4;x.q();){i=x.gJ(x)
n+=t
switch(b6){case C.a_c:h=r.c
h===$&&B.b()
i.sav(0,l?h[n]:(h[n]<<8|h[n+1])>>>8)
h=q.c
h===$&&B.b()
i.saH(l?h[n]:(h[n]<<8|h[n+1])>>>8)
h=p.c
h===$&&B.b()
i.saL(0,l?h[n]:(h[n]<<8|h[n+1])>>>8)
if(v){h=o.c
h===$&&B.b()
h=l?h[n]:(h[n]<<8|h[n+1])>>>8}else h=255
i.saO(0,h)
if(i.gaO(i)!==0){i.sav(0,(i.gav(i)+i.gaO(i)-255)*255/i.gaO(i))
i.saH((i.gaH()+i.gaO(i)-255)*255/i.gaO(i))
i.saL(0,(i.gaL(i)+i.gaO(i)-255)*255/i.gaO(i))}break
case C.a_e:h=r.c
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
a9=[D.d.C(D.d.bh(a6*255,0,255)),D.d.C(D.d.bh(a7*255,0,255)),D.d.C(D.d.bh(a8*255,0,255))]
i.sav(0,a9[0])
i.saH(a9[1])
i.saL(0,a9[2])
i.saO(0,d)
break
case C.a_b:h=r.c
h===$&&B.b()
b0=l?h[n]:(h[n]<<8|h[n+1])>>>8
if(j){h=o.c
h===$&&B.b()
d=l?h[n]:(h[n]<<8|h[n+1])>>>8}else d=255
i.sav(0,b0)
i.saH(b0)
i.saL(0,b0)
i.saO(0,d)
break
case C.a_d:h=r.c
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
a9=A.cfr(255-b1,255-b2,255-a0,255-b3)
i.sav(0,a9[0])
i.saH(a9[1])
i.saL(0,a9[2])
i.saO(0,d)
break
default:throw B.d(A.bC("Unhandled color mode: "+B.o(b6)))}}return s},
rr:function rr(d,e){this.a=d
this.b=e},
bgc:function bgc(d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=$
_.y=null
_.z=d
_.at=_.as=$},
bgb:function bgb(){this.a=null},
apU:function apU(){},
wR:function wR(d,e,f){this.a=d
this.b=e
this.c=f},
kR:function kR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ZO:function ZO(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
MV:function MV(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
apT:function apT(){this.y=this.b=this.a=0},
wS(d,e){return(C.rS[d>>>8]<<17|C.rS[e>>>8]<<16|C.rS[d&255]<<1|C.rS[e&255])>>>0},
pP:function pP(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
bgd:function bgd(){this.b=this.a=null},
atK:function atK(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
mx:function mx(d,e){this.a=d
this.b=e},
bqw:function bqw(){this.a=null
this.b=$},
bqH:function bqH(d){this.a=d
this.c=this.b=0},
atN:function atN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
c0e(d,e,f){var x=new A.bqJ(e,f,d),w=y.u
x.e=B.bk(e,null,!1,w)
x.f=B.bk(e,null,!1,w)
return x},
bqJ:function bqJ(d,e,f){var _=this
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
atO:function atO(d,e,f,g){var _=this
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
H7:function H7(d,e){this.a=d
this.b=e},
jr:function jr(d,e){this.a=d
this.b=e},
q4:function q4(d,e){this.a=d
this.b=e},
bqK:function bqK(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
c8q(){return new A.b6L(new Uint8Array(4096))},
b6L:function b6L(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
bqI:function bqI(){this.a=null
this.c=$},
c0q(d,e){var x=new Int32Array(4),w=new Int32Array(4),v=new Int8Array(4),u=new Int8Array(4),t=B.bk(8,null,!1,y.ak),s=B.bk(4,null,!1,y.Z)
return new A.btr(d,e,new A.btx(),new A.btB(),new A.btt(x,w),new A.btD(v,u),t,s,new Uint8Array(4))},
ccc(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
btr:function btr(d,e,f,g,h,i,j,k,l){var _=this
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
_.bo=$
_.bp=null
_.by=_.al=$
_.c7=null
_.ck=$},
btE:function btE(){},
cc9(d){var x=new A.a2e(d)
x.b=254
x.c=0
x.d=-8
return x},
a2e:function a2e(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
e8(d,e,f){return D.c.jW(D.c.M(d+2*e+f+2,2),32)},
cz6(d){var x,w=B.a([A.e8(J.u(d.a,d.d+-33),J.u(d.a,d.d+-32),J.u(d.a,d.d+-31)),A.e8(J.u(d.a,d.d+-32),J.u(d.a,d.d+-31),J.u(d.a,d.d+-30)),A.e8(J.u(d.a,d.d+-31),J.u(d.a,d.d+-30),J.u(d.a,d.d+-29)),A.e8(J.u(d.a,d.d+-30),J.u(d.a,d.d+-29),J.u(d.a,d.d+-28))],y.t)
for(x=0;x<4;++x)d.yc(x*32,4,w)},
cyZ(d){var x=J.u(d.a,d.d+-33),w=J.u(d.a,d.d+-1),v=J.u(d.a,d.d+31),u=J.u(d.a,d.d+63),t=J.u(d.a,d.d+95),s=A.bK(d,null,0)
s.Nr()[0]=16843009*A.e8(x,w,v)
s.d+=32
s.Nr()[0]=16843009*A.e8(w,v,u)
s.d+=32
s.Nr()[0]=16843009*A.e8(v,u,t)
s.d+=32
s.Nr()[0]=16843009*A.e8(u,t,t)},
cyX(d){var x,w,v,u
for(x=4,w=0;w<4;++w)x+=J.u(d.a,d.d+(w-32))+J.u(d.a,d.d+(-1+w*32))
x=D.c.M(x,3)
for(w=0;w<4;++w){v=d.a
u=d.d+w*32
J.qv(v,u,u+4,x)}},
c0r(d,e){var x,w,v,u,t,s=255-J.u(d.a,d.d+-33)
for(x=0,w=0;w<e;++w){v=s+J.u(d.a,d.d+(x-1))
for(u=0;u<e;++u){t=$.o1()[v+J.u(d.a,d.d+(-32+u))]
J.bX(d.a,d.d+(x+u),t)}x+=32}},
cz4(d){A.c0r(d,4)},
cz5(d){A.c0r(d,8)},
cz3(d){A.c0r(d,16)},
cz2(d){var x=J.u(d.a,d.d+-1),w=J.u(d.a,d.d+31),v=J.u(d.a,d.d+63),u=J.u(d.a,d.d+95),t=J.u(d.a,d.d+-33),s=J.u(d.a,d.d+-32),r=J.u(d.a,d.d+-31),q=J.u(d.a,d.d+-30),p=J.u(d.a,d.d+-29)
d.n(0,96,A.e8(w,v,u))
v=A.e8(x,w,v)
d.n(0,97,v)
d.n(0,64,v)
w=A.e8(t,x,w)
d.n(0,98,w)
d.n(0,65,w)
d.n(0,32,w)
x=A.e8(s,t,x)
d.n(0,99,x)
d.n(0,66,x)
d.n(0,33,x)
d.n(0,0,x)
t=A.e8(r,s,t)
d.n(0,67,t)
d.n(0,34,t)
d.n(0,1,t)
s=A.e8(q,r,s)
d.n(0,35,s)
d.n(0,2,s)
d.n(0,3,A.e8(p,q,r))},
cz1(d){var x=J.u(d.a,d.d+-32),w=J.u(d.a,d.d+-31),v=J.u(d.a,d.d+-30),u=J.u(d.a,d.d+-29),t=J.u(d.a,d.d+-28),s=J.u(d.a,d.d+-27),r=J.u(d.a,d.d+-26),q=J.u(d.a,d.d+-25)
d.n(0,0,A.e8(x,w,v))
w=A.e8(w,v,u)
d.n(0,32,w)
d.n(0,1,w)
v=A.e8(v,u,t)
d.n(0,64,v)
d.n(0,33,v)
d.n(0,2,v)
u=A.e8(u,t,s)
d.n(0,96,u)
d.n(0,65,u)
d.n(0,34,u)
d.n(0,3,u)
t=A.e8(t,s,r)
d.n(0,97,t)
d.n(0,66,t)
d.n(0,35,t)
s=A.e8(s,r,q)
d.n(0,98,s)
d.n(0,67,s)
d.n(0,99,A.e8(r,q,q))},
cz8(d){var x=J.u(d.a,d.d+-1),w=J.u(d.a,d.d+31),v=J.u(d.a,d.d+63),u=J.u(d.a,d.d+-33),t=J.u(d.a,d.d+-32),s=J.u(d.a,d.d+-31),r=J.u(d.a,d.d+-30),q=J.u(d.a,d.d+-29),p=D.c.jW(D.c.M(u+t+1,1),32)
d.n(0,65,p)
d.n(0,0,p)
p=D.c.jW(D.c.M(t+s+1,1),32)
d.n(0,66,p)
d.n(0,1,p)
p=D.c.jW(D.c.M(s+r+1,1),32)
d.n(0,67,p)
d.n(0,2,p)
d.n(0,3,D.c.jW(D.c.M(r+q+1,1),32))
d.n(0,96,A.e8(v,w,x))
d.n(0,64,A.e8(w,x,u))
x=A.e8(x,u,t)
d.n(0,97,x)
d.n(0,32,x)
u=A.e8(u,t,s)
d.n(0,98,u)
d.n(0,33,u)
t=A.e8(t,s,r)
d.n(0,99,t)
d.n(0,34,t)
d.n(0,35,A.e8(s,r,q))},
cz7(d){var x,w=J.u(d.a,d.d+-32),v=J.u(d.a,d.d+-31),u=J.u(d.a,d.d+-30),t=J.u(d.a,d.d+-29),s=J.u(d.a,d.d+-28),r=J.u(d.a,d.d+-27),q=J.u(d.a,d.d+-26),p=J.u(d.a,d.d+-25)
d.n(0,0,D.c.jW(D.c.M(w+v+1,1),32))
x=D.c.jW(D.c.M(v+u+1,1),32)
d.n(0,64,x)
d.n(0,1,x)
x=D.c.jW(D.c.M(u+t+1,1),32)
d.n(0,65,x)
d.n(0,2,x)
x=D.c.jW(D.c.M(t+s+1,1),32)
d.n(0,66,x)
d.n(0,3,x)
d.n(0,32,A.e8(w,v,u))
v=A.e8(v,u,t)
d.n(0,96,v)
d.n(0,33,v)
u=A.e8(u,t,s)
d.n(0,97,u)
d.n(0,34,u)
t=A.e8(t,s,r)
d.n(0,98,t)
d.n(0,35,t)
d.n(0,67,A.e8(s,r,q))
d.n(0,99,A.e8(r,q,p))},
cz_(d){var x,w=J.u(d.a,d.d+-1),v=J.u(d.a,d.d+31),u=J.u(d.a,d.d+63),t=J.u(d.a,d.d+95)
d.n(0,0,D.c.jW(D.c.M(w+v+1,1),32))
x=D.c.jW(D.c.M(v+u+1,1),32)
d.n(0,32,x)
d.n(0,2,x)
x=D.c.jW(D.c.M(u+t+1,1),32)
d.n(0,64,x)
d.n(0,34,x)
d.n(0,1,A.e8(w,v,u))
v=A.e8(v,u,t)
d.n(0,33,v)
d.n(0,3,v)
u=A.e8(u,t,t)
d.n(0,65,u)
d.n(0,35,u)
d.n(0,99,t)
d.n(0,98,t)
d.n(0,97,t)
d.n(0,96,t)
d.n(0,66,t)
d.n(0,67,t)},
cyY(d){var x=J.u(d.a,d.d+-1),w=J.u(d.a,d.d+31),v=J.u(d.a,d.d+63),u=J.u(d.a,d.d+95),t=J.u(d.a,d.d+-33),s=J.u(d.a,d.d+-32),r=J.u(d.a,d.d+-31),q=J.u(d.a,d.d+-30),p=D.c.jW(D.c.M(x+t+1,1),32)
d.n(0,34,p)
d.n(0,0,p)
p=D.c.jW(D.c.M(w+x+1,1),32)
d.n(0,66,p)
d.n(0,32,p)
p=D.c.jW(D.c.M(v+w+1,1),32)
d.n(0,98,p)
d.n(0,64,p)
d.n(0,96,D.c.jW(D.c.M(u+v+1,1),32))
d.n(0,3,A.e8(s,r,q))
d.n(0,2,A.e8(t,s,r))
s=A.e8(x,t,s)
d.n(0,35,s)
d.n(0,1,s)
t=A.e8(w,x,t)
d.n(0,67,t)
d.n(0,33,t)
x=A.e8(v,w,x)
d.n(0,99,x)
d.n(0,65,x)
d.n(0,97,A.e8(u,v,w))},
czj(d){var x
for(x=0;x<16;++x)d.qc(x*32,16,d,-32)},
czh(d){var x,w,v,u,t
for(x=0,w=16;w>0;--w){v=J.u(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.qv(u,t,t+16,v)
x+=32}},
btv(d,e){var x,w,v
for(x=0;x<16;++x){w=e.a
v=e.d+x*32
J.qv(w,v,v+16,d)}},
cz9(d){var x,w
for(x=16,w=0;w<16;++w)x+=J.u(d.a,d.d+(-1+w*32))+J.u(d.a,d.d+(w-32))
A.btv(D.c.M(x,5),d)},
czb(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.u(d.a,d.d+(-1+w*32))
A.btv(D.c.M(x,4),d)},
cza(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.u(d.a,d.d+(w-32))
A.btv(D.c.M(x,4),d)},
czc(d){A.btv(128,d)},
czk(d){var x
for(x=0;x<8;++x)d.qc(x*32,8,d,-32)},
czi(d){var x,w,v,u,t
for(x=0,w=0;w<8;++w){v=J.u(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.qv(u,t,t+8,v)
x+=32}},
btw(d,e){var x,w,v
for(x=0;x<8;++x){w=e.a
v=e.d+x*32
J.qv(w,v,v+8,d)}},
czd(d){var x,w
for(x=8,w=0;w<8;++w)x+=J.u(d.a,d.d+(w-32))+J.u(d.a,d.d+(-1+w*32))
A.btw(D.c.M(x,4),d)},
cze(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.u(d.a,d.d+(w-32))
A.btw(D.c.M(x,3),d)},
czf(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.u(d.a,d.d+(-1+w*32))
A.btw(D.c.M(x,3),d)},
czg(d){A.btw(128,d)},
BN(d,e,f,g,h){var x=e+f+g*32,w=J.u(d.a,d.d+x)+D.c.M(h,3)
if(!((w&-256)>>>0===0))w=w<0?0:255
d.n(0,x,w)},
btu(d,e,f,g,h){A.BN(d,0,0,e,f+g)
A.BN(d,0,1,e,f+h)
A.BN(d,0,2,e,f-h)
A.BN(d,0,3,e,f-g)},
cz0(){var x,w,v
if(!$.cca){for(x=-255;x<=255;++x){w=$.aLJ()
v=255+x
w[v]=x<0?-x:x
$.bXC()[v]=D.c.M(w[v],1)}for(x=-1020;x<=1020;++x){w=$.bXD()
if(x<-128)v=-128
else v=x>127?127:x
w[1020+x]=v}for(x=-112;x<=112;++x){w=$.aLK()
if(x<-16)v=-16
else v=x>15?15:x
w[112+x]=v}for(x=-255;x<=510;++x){w=$.o1()
if(x<0)v=0
else v=x>255?255:x
w[255+x]=v}$.cca=!0}},
bts:function bts(){},
cyW(){var x,w=J.hU(3,y.D)
for(x=0;x<3;++x)w[x]=new Uint8Array(11)
return new A.a2d(w)},
czz(){var x,w,v,u,t=new Uint8Array(3),s=J.hU(4,y.cm)
for(x=y.V,w=0;w<4;++w){v=J.hU(8,x)
for(u=0;u<8;++u)v[u]=A.cyW()
s[w]=v}D.a5.jm(t,0,3,255)
return new A.btC(t,s)},
btx:function btx(){this.d=$},
btB:function btB(){this.b=null},
btD:function btD(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
a2d:function a2d(d){this.a=d},
btC:function btC(d,e){this.a=d
this.b=e},
btt:function btt(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
Hg:function Hg(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
auw:function auw(){this.b=this.a=0},
auy:function auy(d,e,f){this.a=d
this.b=e
this.c=f},
aux:function aux(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
auz:function auz(d,e,f){this.a=d
this.b=e
this.c=f},
c0s(d,e){var x=B.a([],y.A),w=B.a([],y.F),v=new Uint32Array(2),u=new A.auu(d,v)
v=u.d=B.bS(v.buffer,0,null)
v[0]=d.cw()
v[1]=d.cw()
v[2]=d.cw()
v[3]=d.cw()
v[4]=d.cw()
v[5]=d.cw()
v[6]=d.cw()
v[7]=d.cw()
return new A.a2f(u,e,x,w)},
BO(d,e){return D.c.M(d+D.c.dU(1,e)-1,e)},
a2f:function a2f(d,e,f,g){var _=this
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
ajO:function ajO(d,e,f,g){var _=this
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
auu:function auu(d,e){var _=this
_.a=0
_.b=d
_.c=e
_.d=$},
bty:function bty(d,e){this.a=d
this.b=e},
btz(d,e,f){var x=d[e]
d[e]=(((x&4278255360)>>>0)+((f&4278255360)>>>0)&4278255360|(x&16711935)+(f&16711935)&16711935)>>>0},
xt(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
Hi(d){if(d<0)return 0
if(d>255)return 255
return d},
btA(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
czl(d,e,f){return 4278190080},
czm(d,e,f){return e},
czr(d,e,f){return d[f]},
czs(d,e,f){return d[f+1]},
czt(d,e,f){return d[f-1]},
czu(d,e,f){var x=d[f]
return A.xt(A.xt(e,d[f+1]),x)},
czv(d,e,f){return A.xt(e,d[f-1])},
czw(d,e,f){return A.xt(e,d[f])},
czx(d,e,f){return A.xt(d[f-1],d[f])},
czy(d,e,f){return A.xt(d[f],d[f+1])},
czn(d,e,f){var x=d[f-1],w=d[f],v=d[f+1]
return A.xt(A.xt(e,x),A.xt(w,v))},
czo(d,e,f){var x=d[f],w=d[f-1]
return A.btA(x>>>24,e>>>24,w>>>24)+A.btA(x>>>16&255,e>>>16&255,w>>>16&255)+A.btA(x>>>8&255,e>>>8&255,w>>>8&255)+A.btA(x&255,e&255,w&255)<=0?x:e},
czp(d,e,f){var x=d[f],w=d[f-1]
return(A.Hi((e>>>24)+(x>>>24)-(w>>>24))<<24|A.Hi((e>>>16&255)+(x>>>16&255)-(w>>>16&255))<<16|A.Hi((e>>>8&255)+(x>>>8&255)-(w>>>8&255))<<8|A.Hi((e&255)+(x&255)-(w&255)))>>>0},
czq(d,e,f){var x,w,v,u=d[f],t=d[f-1],s=A.xt(e,u)
u=s>>>24
x=s>>>16&255
w=s>>>8&255
v=s>>>0&255
return(A.Hi(u+D.c.aZ(u-(t>>>24),2))<<24|A.Hi(x+D.c.aZ(x-(t>>>16&255),2))<<16|A.Hi(w+D.c.aZ(w-(t>>>8&255),2))<<8|A.Hi(v+D.c.aZ(v-(t&255),2)))>>>0},
Hh:function Hh(d,e){this.a=d
this.b=e},
auv:function auv(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
bul:function bul(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
a2t:function a2t(){},
ajP:function ajP(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=$
_.r=1
_.x=_.w=$},
c7o(){var x=new Uint8Array(128),w=new Int16Array(128)
x=new A.aja(x,w,new Int16Array(128))
x.a3y(0)
return x},
crS(){var x,w=J.hU(5,y.x)
for(x=0;x<5;++x)w[x]=A.c7o()
return new A.Vq(w)},
aja:function aja(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$
_.f=_.e=0},
Vq:function Vq(d){this.a=d},
OP:function OP(d,e){this.a=d
this.b=e},
auU:function auU(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
ajQ:function ajQ(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
bum:function bum(){this.b=this.a=null},
c7r(d){return new A.VK(d.a,d.b,D.a5.l5(d.c,0))},
b3u:function b3u(d,e){this.a=d
this.b=e},
VK:function VK(d,e,f){this.a=d
this.b=e
this.c=f},
fV(d,e,f,g,h,i,j,k,l,m,n,o,p){var x,w=new A.zp(null,null,null,d,k,h,g,0)
w.gjP().push(w)
w.c=j
if(e!=null)w.e=A.UL(e)
x=!1
if(m==null)if(p)x=w.gcJ()===C.eu||w.gcJ()===C.f6||w.gcJ()===C.f7||w.gcJ()===C.V||w.gcJ()===C.bH
w.afb(o,i,f,l,x?w.aQg(f,n,l):m)
return w},
ajm(d,e,f,g){var x,w,v,u=null,t=d.e
t=t==null?u:A.UL(t)
x=d.c
x=x==null?u:A.c7r(x)
w=d.w
v=d.r
t=new A.zp(u,x,t,u,v,w,d.y,d.z)
t.aLF(d,e,f,g)
return t},
zo(d,e,f){var x,w,v,u,t=null,s=d.a
s=s==null?t:s.pF(0,f)
x=d.e
x=x==null?t:A.UL(x)
w=d.c
w=w==null?t:A.c7r(w)
v=d.w
u=d.r
s=new A.zp(s,w,x,t,u,v,d.y,d.z)
s.aLE(d,e,f)
return s},
aij:function aij(d,e){this.a=d
this.b=e},
zp:function zp(d,e,f,g,h,i,j,k){var _=this
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
b47:function b47(d,e){this.a=d
this.b=e},
b46:function b46(){},
kG:function kG(){},
csn(d,e,f){return new A.Lb(new Uint16Array(d*e*f),d,e,f)},
Lb:function Lb(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
cso(d,e,f){return new A.Lc(new Float32Array(d*e*f),d,e,f)},
Lc:function Lc(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
VP:function VP(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
VQ:function VQ(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
VR:function VR(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
VS:function VS(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
Ld:function Ld(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
Le:function Le(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
Lf:function Lf(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
csp(d,e,f){return new A.Lg(new Uint32Array(d*e*f),d,e,f)},
Lg:function Lg(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
Lh:function Lh(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
c7H(d,e,f){return new A.Li(new Uint8Array(d*e*f),null,d,e,f)},
Li:function Li(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
ajR:function ajR(d,e){this.a=d
this.b=e},
bd_:function bd_(){},
ao9:function ao9(d,e,f){this.c=d
this.a=e
this.b=f},
aoa:function aoa(d,e,f){this.c=d
this.a=e
this.b=f},
aob:function aob(d,e,f){this.c=d
this.a=e
this.b=f},
aoc:function aoc(d,e,f){this.c=d
this.a=e
this.b=f},
aod:function aod(d,e,f){this.c=d
this.a=e
this.b=f},
aoe:function aoe(d,e,f){this.c=d
this.a=e
this.b=f},
aof:function aof(d,e,f){this.c=d
this.a=e
this.b=f},
Yp:function Yp(d,e,f){this.c=d
this.a=e
this.b=f},
c9f(d){return new A.rj(new Uint8Array(B.bv(d.c)),d.a,d.b)},
rj:function rj(d,e,f){this.c=d
this.a=e
this.b=f},
c_e(d){return new A.Fk(-1,0,-d.c,d)},
Fk:function Fk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c_f(d){return new A.Fl(-1,0,-d.c,d)},
Fl:function Fl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c_g(d){return new A.Fm(-1,0,-d.c,d)},
Fm:function Fm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c_h(d){return new A.Fn(-1,0,-d.c,d)},
Fn:function Fn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c_i(d){return new A.Fo(-1,0,-d.c,d)},
Fo:function Fo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c_j(d){return new A.Fp(-1,0,-d.c,d)},
Fp:function Fp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
rk(d,e,f,g,h){d.fu(0,e-1,f)
return new A.aor(d,e,e+g-1,f+h-1)},
aor:function aor(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g},
YF(d){return new A.Fq(-1,0,0,-1,0,d)},
Fq:function Fq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c_k(d){return new A.Fr(-1,0,-d.c,d)},
Fr:function Fr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
YG(d){return new A.Fs(-1,0,0,-2,0,d)},
Fs:function Fs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c_l(d){return new A.Ft(-1,0,-d.c,d)},
Ft:function Ft(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
YH(d){return new A.Fu(-1,0,0,-(d.c<<2>>>0),d)},
Fu:function Fu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bde(d){return new A.Fv(-1,0,-d.c,d)},
Fv:function Fv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eI:function eI(){},
cJ6(d,e){switch(e.a){case 0:A.aLj(d)
break
case 1:A.cJ9(d)
break
case 2:A.cJ7(d)
break}return d},
cJ9(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.gjP().length
for(x=y.g,w=0;w<h;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?i:t.a
if(r==null)r=0
q=s?i:t.b
if(q==null)q=0
p=D.c.aZ(q,2)
t=d.a
if((t==null?i:t.ged())!=null)for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.dB(m,n,i)
if(l==null)l=new A.eI()
t=u.a
k=t==null?i:t.dB(m,o,i)
if(k==null)k=new A.eI()
j=l.gdu(l)
l.sdu(0,k.gdu(k))
k.sdu(0,j)}else for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.dB(m,n,i)
if(l==null)l=new A.eI()
t=u.a
k=t==null?i:t.dB(m,o,i)
if(k==null)k=new A.eI()
j=l.gav(l)
l.sav(0,k.gav(k))
k.sav(0,j)
j=l.gaH()
l.saH(k.gaH())
k.saH(j)
j=l.gaL(l)
l.saL(0,k.gaL(k))
k.saL(0,j)
j=l.gaO(l)
l.saO(0,k.gaO(k))
k.saO(0,j)}}return d},
aLj(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=d.gjP().length
for(x=y.g,w=0;w<g;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?h:t.a
if(r==null)r=0
q=s?h:t.b
if(q==null)q=0
p=D.c.aZ(r,2)
t=d.a
if((t==null?h:t.ged())!=null)for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.dB(l,n,h)
if(k==null)k=new A.eI()
t=u.a
j=t==null?h:t.dB(m,n,h)
if(j==null)j=new A.eI()
i=k.gdu(k)
k.sdu(0,j.gdu(j))
j.sdu(0,i)}else for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.dB(l,n,h)
if(k==null)k=new A.eI()
t=u.a
j=t==null?h:t.dB(m,n,h)
if(j==null)j=new A.eI()
i=k.gav(k)
k.sav(0,j.gav(j))
j.sav(0,i)
i=k.gaH()
k.saH(j.gaH())
j.saH(i)
i=k.gaL(k)
k.saL(0,j.gaL(j))
j.saL(0,i)
i=k.gaO(k)
k.saO(0,j.gaO(j))
j.saO(0,i)}}return d},
cJ7(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=d.gjP().length
for(x=y.g,w=0;w<f;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?g:t.a
if(r==null)r=0
q=s?g:t.b
if(q==null)q=0
p=D.c.aZ(q,2)
if((s?g:t.ged())!=null)for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.dB(k,m,g)
if(j==null)j=new A.eI()
t=u.a
i=t==null?g:t.dB(l,o,g)
if(i==null)i=new A.eI()
h=j.gdu(j)
j.sdu(0,i.gdu(i))
i.sdu(0,h)}else for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.dB(k,m,g)
if(j==null)j=new A.eI()
t=u.a
i=t==null?g:t.dB(l,o,g)
if(i==null)i=new A.eI()
h=j.gav(j)
j.sav(0,i.gav(i))
i.sav(0,h)
h=j.gaH()
j.saH(i.gaH())
i.saH(h)
h=j.gaL(j)
j.saL(0,i.gaL(i))
i.saL(0,h)
h=j.gaO(j)
j.saO(0,i.gaO(i))
i.saO(0,h)}}return d},
b_n:function b_n(d,e){this.a=d
this.b=e},
bC(d){return new A.ajq(d)},
ajq:function ajq(d){this.a=d},
cl(d,e,f,g){return new A.kI(d,g,f==null?J.aY(d):g+f,g,e)},
bK(d,e,f){var x=d.a,w=d.d+f,v=e==null?d.c:w+e
return new A.kI(x,d.b,v,w,d.e)},
kI:function kI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bbY:function bbY(d){var _=this
_.a=$
_.b=10
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=d
_.ax=_.at=$},
oy(d,e){return new A.anW(d,new Uint8Array(e))},
anW:function anW(d,e){this.a=0
this.b=d
this.c=e},
bgk:function bgk(){},
mi:function mi(d,e){this.a=d
this.b=e},
biB:function biB(d,e){this.a=d
this.b=e},
biy:function biy(d,e){this.a=d
this.b=e},
bsu:function bsu(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
c8S(d){return new Int8Array(d)},
cyO(d){throw B.d(B.ah("Uint64List not supported on the web."))},
csF(d,e,f){B.y3(d,e,f)
return f==null?new Int8Array(d,e):new Int8Array(d,e,f)},
cbY(d,e){return B.no(d,e,null)},
crd(d){return B.bbD(d,0,null)},
cre(d){return d.bAs(0,0,null)},
cJr(d){var x,w,v,u,t,s=d.length
for(x=1,w=0,v=0;s>0;){u=3800>s?s:3800
s-=u
for(;--u,u>=0;v=t){t=v+1
x+=d[v]&255
w+=x}x=D.c.az(x,65521)
w=D.c.az(w,65521)}return(w<<16|x)>>>0},
vc(d,e){var x,w,v=J.a5(d),u=v.gt(d)
e^=4294967295
for(x=0;u>=8;){w=x+1
e=C.fc[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.fc[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.fc[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.fc[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.fc[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.fc[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.fc[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.fc[(e^v.i(d,w))&255]^e>>>8
u-=8}if(u>0)do{w=x+1
e=C.fc[(e^v.i(d,x))&255]^e>>>8
if(--u,u>0){x=w
continue}else break}while(!0)
return(e^4294967295)>>>0},
cs9(d){var x,w,v,u,t,s,r,q,p=null,o="data:image/jpeg;base64,",n="data:image/png;base64,",m=G.aLr(I.bWX(d),"img"),l=B.a([],y.s)
for(x=m.length,w=0;w<m.length;m.length===x||(0,B.M)(m),++w){v=m[w].b.i(0,"src")
if(v!=null)u=D.e.bg(v,o)||D.e.bg(v,n)
else u=!1
if(u){v.toString
if(B.Ir(v,o,0))t=B.c2r(v,o,"",0)
else t=B.c2r(v,n,"",0)
if(D.c.aZ(t.length*3,4)>524288){s=D.dG.cj(t)
if(D.e.bg(v,o)){r=A.c1Y(s)
q=r==null?p:r.mm(0,s,p)
if(q!=null){u=q.a
u=u==null?p:u.a
u=(u==null?0:u)>1200}else u=!1
if(u)l.push(v)}else if(D.e.bg(v,n)){r=A.c1Y(s)
q=r==null?p:r.mm(0,s,p)
if(q!=null){u=q.a
u=u==null?p:u.a
u=(u==null?0:u)>1000}else u=!1
if(u)l.push(v)}}}}return l},
aj0(d,e,f){var x=0,w=B.l(y.N),v,u,t,s,r,q
var $async$aj0=B.h(function(g,h){if(g===1)return B.i(h,w)
while(true)switch(x){case 0:r=I.bWX(d)
q=new G.Gz().WR(0,r,G.bUy('img[src="'+e+'"]'))
x=q!=null?3:4
break
case 3:u=D.dG.cj(D.e.p(e,"data:image/jpeg;base64,")?D.e.kE(e,"data:image/jpeg;base64,",""):D.e.kE(e,"data:image/png;base64,",""))
x=D.e.bg(e,"data:image/jpeg;base64,")?5:7
break
case 5:x=8
return B.c(A.b3P(u,1200),$async$aj0)
case 8:t=h
s=D.eZ.gky().cj(t)
q.b.n(0,"src","data:image/jpeg;base64,"+s)
x=6
break
case 7:x=D.e.bg(e,"data:image/png;base64,")?9:10
break
case 9:x=A.cfJ(u)!=null?11:12
break
case 11:x=13
return B.c(A.b3R(u,1000),$async$aj0)
case 13:t=h
s=D.eZ.gky().cj(t)
q.b.n(0,"src","data:image/png;base64,"+s)
case 12:case 10:case 6:f.$0()
case 4:v=r.gako()
x=1
break
case 1:return B.j(v,w)}})
return B.k($async$aj0,w)},
c1R(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s,r,q
if(m==null)m=0
if(n==null)n=0
if(l==null)l=e.gcm(0)
if(k==null)k=e.gb0(0)
if(h==null)h=d.gcm(0)<e.gcm(0)?d.gcm(0):e.gcm(0)
if(g==null)g=d.gb0(0)<e.gb0(0)?d.gb0(0):e.gb0(0)
x=f===C.w5
if(!x&&d.gpZ())d=d.arA(d.goZ())
w=k/g
v=l/h
u=y.p
t=J.hU(g,u)
for(s=0;s<g;++s)t[s]=n+D.d.C(s*w)
r=J.hU(h,u)
for(q=0;q<h;++q)r[q]=m+D.d.C(q*v)
if(x)A.cDP(e,d,i,j,h,g,r,t,null,C.Dt)
else A.cDr(e,d,i,j,h,g,r,t,f,!1,null,C.Dt)
return d},
cDP(d,e,f,g,h,i,j,k,l,m){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.dB(t,s,x)
if(x==null)x=new A.eI()
e.wc(f+u,v,x)}},
cDr(d,e,f,g,h,i,j,k,l,m,n,o){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.dB(t,s,x)
if(x==null)x=new A.eI()
A.cIK(e,f+u,v,x,l,!1,n,o)}},
cIK(a4,a5,a6,a7,a8,a9,b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
if(!a4.av_(a5,a6))return a4
if(a8===C.w5||a4.gpZ())if(a4.av_(a5,a6)){a4.mH(a5,a6).i2(0,a7)
return a4}x=a7.ghK()
w=a7.ghv()
v=a7.ghC()
u=a7.gt(a7)<4?1:a7.ghO()
if(u===0)return a4
t=a4.mH(a5,a6)
s=t.ghK()
r=t.ghv()
q=t.ghC()
p=t.ghO()
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
m=D.d.bh(u,0.01,1)
n=u<0
i=n?0:1
h=D.d.bh(x/m*i,0,0.99)
i=D.d.bh(u,0.01,1)
m=n?0:1
g=D.d.bh(w/i*m,0,0.99)
m=D.d.bh(u,0.01,1)
n=n?0:1
f=D.d.bh(v/m*n,0,0.99)
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
t.shK(x*u+s*p*a3)
t.shv(w*u+r*p*a3)
t.shC(v*u+q*p*a3)
t.shO(u+p*a3)
return a4},
cIX(d,e,f,g,h,i,j){var x,w=D.d.bh(Math.min(g,h),0,d.gcm(0)-1),v=D.d.bh(Math.min(i,j),0,d.gb0(0)-1),u=D.d.bh(Math.max(g,h),0,d.gcm(0)-1),t=D.d.bh(Math.max(i,j),0,d.gb0(0)-1),s=d.a.pc(0,w,v,u-w+1,t-v+1)
for(x=s.a;s.q();)x.i2(0,f)
return d},
cqR(a2,a3,a4,a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a8<16384,a1=a4>a6?a6:a4
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
if(a0){A.US(a2[k],a2[i],v)
g=v[0]
f=v[1]
A.US(a2[j],a2[h],v)
e=v[0]
d=v[1]
A.US(g,e,v)
a2[k]=v[0]
a2[j]=v[1]
A.US(f,d,v)
a2[i]=v[0]
a2[h]=v[1]}else{A.UT(a2[k],a2[i],v)
g=v[0]
f=v[1]
A.UT(a2[j],a2[h],v)
e=v[0]
d=v[1]
A.UT(g,e,v)
a2[k]=v[0]
a2[j]=v[1]
A.UT(f,d,v)
a2[i]=v[0]
a2[h]=v[1]}}if(o){i=k+s
if(a0){A.US(a2[k],a2[i],v)
g=v[0]
a2[i]=v[1]}else{A.UT(a2[k],a2[i],v)
g=v[0]
a2[i]=v[1]}a2[k]=g}}if((a6&x)>>>0!==0){l=m+n
for(k=m;k<=l;k+=p){j=k+q
if(a0){A.US(a2[k],a2[j],v)
g=v[0]
a2[j]=v[1]}else{A.UT(a2[k],a2[j],v)
g=v[0]
a2[j]=v[1]}a2[k]=g}}w=x>>>1}},
US(d,e,f){var x,w,v,u,t=$.p4()
t[0]=d
x=$.qq()
w=x[0]
t[0]=e
v=x[0]
u=w+(v&1)+D.c.M(v,1)
f[0]=u
f[1]=u-v},
UT(d,e,f){var x=d-D.c.M(e,1)&65535
f[1]=x
f[0]=e+x-32768&65535},
c1Y(d){var x,w,v,u,t,s,r,q,p,o,n=null
if(A.c85().NL(d))return new A.ajZ()
x=new A.apq(A.c7T())
if(x.Fx(d))return x
w=new A.b1j()
w.f=A.cl(d,!1,n,0)
w.a=new A.ais(B.a([],y.b))
if(w.ah2())return w
v=new A.bum()
if(v.Fx(d))return v
u=new A.bqI()
if(u.al6(A.cl(d,!1,n,0))!=null)return u
if(A.c9S(d).c===943870035)return new A.bgb()
if(A.cqQ(d))return new A.aZb()
if(A.bYc(A.cl(d,!1,n,0)))return new A.acl(!1)
t=new A.bqw()
s=A.cl(d,!1,n,0)
r=t.a=new A.atK(C.uW)
r.p6(0,s)
if(r.avf())return t
q=new A.b3w()
r=A.cl(d,!1,n,0)
q.a=r
r=A.c7s(r)
q.b=r
if(r!=null)return q
p=new A.bgd()
if(p.np(d)!=null)return p
o=new A.bfi(B.a([],y.s))
if(o.Fx(d))return o
return n},
cfJ(d){var x=A.c1Y(d)
return x==null?null:x.mm(0,d,null)},
cL0(a2,a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
if($.c1i==null){x=$.c1i=new Uint8Array(768)
for(w=-256;w<0;++w)x[256+w]=0
for(w=0;w<256;++w)x[256+w]=w
for(w=256;w<512;++w)x[256+w]=255}for(w=0;w<64;++w)a5[w]=a3[w]*a2[w]
for(v=0,w=0;w<8;++w,v+=8){x=1+v
u=a5[x]
if(u===0&&a5[2+v]===0&&a5[3+v]===0&&a5[4+v]===0&&a5[5+v]===0&&a5[6+v]===0&&a5[7+v]===0){x=D.c.M(5793*a5[v]+512,10)
t=(x&2147483647)-((x&2147483648)>>>0)
a5[v]=t
a5[v+1]=t
a5[v+2]=t
a5[v+3]=t
a5[v+4]=t
a5[v+5]=t
a5[v+6]=t
a5[v+7]=t
continue}s=D.c.M(5793*a5[v]+128,8)
r=(s&2147483647)-((s&2147483648)>>>0)
s=4+v
q=D.c.M(5793*a5[s]+128,8)
p=(q&2147483647)-((q&2147483648)>>>0)
q=2+v
o=a5[q]
n=6+v
m=a5[n]
l=7+v
k=a5[l]
j=D.c.M(2896*(u-k)+128,8)
i=(j&2147483647)-((j&2147483648)>>>0)
k=D.c.M(2896*(u+k)+128,8)
h=(k&2147483647)-((k&2147483648)>>>0)
k=3+v
u=a5[k]<<4
g=(u&2147483647)-((u&2147483648)>>>0)
u=5+v
j=a5[u]<<4
f=(j&2147483647)-((j&2147483648)>>>0)
j=D.c.M(r-p+1,1)
t=(j&2147483647)-((j&2147483648)>>>0)
j=D.c.M(r+p+1,1)
r=(j&2147483647)-((j&2147483648)>>>0)
j=D.c.M(o*3784+m*1567+128,8)
j=(j&2147483647)-((j&2147483648)>>>0)
e=D.c.M(o*1567-m*3784+128,8)
o=(e&2147483647)-((e&2147483648)>>>0)
e=D.c.M(i-f+1,1)
e=(e&2147483647)-((e&2147483648)>>>0)
d=D.c.M(i+f+1,1)
i=(d&2147483647)-((d&2147483648)>>>0)
d=D.c.M(h+g+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.c.M(h-g+1,1)
g=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.M(r-j+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
j=D.c.M(r+j+1,1)
r=(j&2147483647)-((j&2147483648)>>>0)
j=D.c.M(t-o+1,1)
j=(j&2147483647)-((j&2147483648)>>>0)
a1=D.c.M(t+o+1,1)
p=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.c.M(i*2276+d*3406+2048,12)
t=(a1&2147483647)-((a1&2147483648)>>>0)
d=D.c.M(i*3406-d*2276+2048,12)
i=(d&2147483647)-((d&2147483648)>>>0)
d=D.c.M(g*799+e*4017+2048,12)
d=(d&2147483647)-((d&2147483648)>>>0)
e=D.c.M(g*4017-e*799+2048,12)
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
if(u===0&&a5[16+w]===0&&a5[24+w]===0&&a5[32+w]===0&&a5[40+w]===0&&a5[48+w]===0&&a5[56+w]===0){u=D.c.M(5793*a5[w]+8192,14)
t=(u&2147483647)-((u&2147483648)>>>0)
a5[w]=t
a5[x]=t
a5[16+w]=t
a5[24+w]=t
a5[32+w]=t
a5[40+w]=t
a5[48+w]=t
a5[56+w]=t
continue}s=D.c.M(5793*a5[w]+2048,12)
r=(s&2147483647)-((s&2147483648)>>>0)
s=32+w
q=D.c.M(5793*a5[s]+2048,12)
p=(q&2147483647)-((q&2147483648)>>>0)
q=16+w
o=a5[q]
n=48+w
m=a5[n]
l=56+w
k=a5[l]
j=D.c.M(2896*(u-k)+2048,12)
i=(j&2147483647)-((j&2147483648)>>>0)
k=D.c.M(2896*(u+k)+2048,12)
h=(k&2147483647)-((k&2147483648)>>>0)
k=24+w
g=a5[k]
u=40+w
f=a5[u]
j=D.c.M(r-p+1,1)
t=(j&2147483647)-((j&2147483648)>>>0)
j=D.c.M(r+p+1,1)
r=(j&2147483647)-((j&2147483648)>>>0)
j=D.c.M(o*3784+m*1567+2048,12)
j=(j&2147483647)-((j&2147483648)>>>0)
e=D.c.M(o*1567-m*3784+2048,12)
o=(e&2147483647)-((e&2147483648)>>>0)
e=D.c.M(i-f+1,1)
e=(e&2147483647)-((e&2147483648)>>>0)
d=D.c.M(i+f+1,1)
i=(d&2147483647)-((d&2147483648)>>>0)
d=D.c.M(h+g+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.c.M(h-g+1,1)
g=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.M(r-j+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
j=D.c.M(r+j+1,1)
r=(j&2147483647)-((j&2147483648)>>>0)
j=D.c.M(t-o+1,1)
j=(j&2147483647)-((j&2147483648)>>>0)
a1=D.c.M(t+o+1,1)
p=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.c.M(i*2276+d*3406+2048,12)
t=(a1&2147483647)-((a1&2147483648)>>>0)
d=D.c.M(i*3406-d*2276+2048,12)
i=(d&2147483647)-((d&2147483648)>>>0)
d=D.c.M(g*799+e*4017+2048,12)
d=(d&2147483647)-((d&2147483648)>>>0)
e=D.c.M(g*4017-e*799+2048,12)
g=(e&2147483647)-((e&2147483648)>>>0)
a5[w]=r+t
a5[l]=r-t
a5[x]=p+d
a5[n]=p-d
a5[q]=j+g
a5[u]=j-g
a5[k]=a0+i
a5[s]=a0-i}for(x=$.c1i,w=0;w<64;++w){x.toString
u=D.c.M(a5[w]+8,4)
a4[w]=x[384+((u&2147483647)-((u&2147483648)>>>0))]}},
cJx(d9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=null,d7="ifd0",d8=d9.r
if(d8.i(0,d7).a.Y(0,274)){x=d8.i(0,d7).gjU(0)
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
r=A.fV(d6,d6,C.V,0,C.aW,s,d6,0,3,d6,C.V,t,!1)
r.e=A.UL(d8)
r.gvi().i(0,d7).sjU(0,d6)
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
e=n[D.c.fP(g,l)]
f=q-g
d=0
while(!0){a0=d9.d.e
a0.toString
if(!(d<a0))break
a1=e[D.c.fP(d,m)]
if(h){a0=r.a
if(a0!=null)a0.ew(p-d,g,a1,a1,a1)}else if(i){a0=r.a
if(a0!=null)a0.ew(p-d,f,a1,a1,a1)}else if(j){a0=r.a
if(a0!=null)a0.ew(d,f,a1,a1,a1)}else if(k){a0=r.a
if(a0!=null)a0.ew(g,d,a1,a1,a1)}else if(v){a0=r.a
if(a0!=null)a0.ew(f,d,a1,a1,a1)}else if(x){a0=r.a
if(a0!=null)a0.ew(f,p-d,a1,a1,a1)}else{a0=r.a
if(d8){if(a0!=null)a0.ew(g,p-d,a1,a1,a1)}else if(a0!=null)a0.ew(d,g,a1,a1,a1)}++d}++g}break
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
b1=D.c.fP(g,l)
b2=D.c.fP(g,a8)
b3=D.c.fP(g,b0)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
f=q-g
d=0
while(!0){a0=d9.d.e
a0.toString
if(!(d<a0))break
b6=D.c.fP(d,m)
b7=D.c.fP(d,a7)
b8=D.c.fP(d,a9)
a1=e[b6]<<8>>>0
b9=b4[b7]-128
c0=b5[b8]-128
a0=D.c.M(a1+359*c0+128,8)
c1=D.c.bh((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.c.M(a1-88*b9-183*c0+128,8)
c2=D.c.bh((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.c.M(a1+454*b9+128,8)
c3=D.c.bh((a0&2147483647)-((a0&2147483648)>>>0),0,255)
if(h){a0=r.a
if(a0!=null)a0.ew(p-d,g,c1,c2,c3)}else if(i){a0=r.a
if(a0!=null)a0.ew(p-d,f,c1,c2,c3)}else if(j){a0=r.a
if(a0!=null)a0.ew(d,f,c1,c2,c3)}else if(k){a0=r.a
if(a0!=null)a0.ew(g,d,c1,c2,c3)}else if(v){a0=r.a
if(a0!=null)a0.ew(f,d,c1,c2,c3)}else if(x){a0=r.a
if(a0!=null)a0.ew(f,p-d,c1,c2,c3)}else{a0=r.a
if(d8){if(a0!=null)a0.ew(g,p-d,c1,c2,c3)}else if(a0!=null)a0.ew(d,g,c1,c2,c3)}++d}++g}break
case 4:x=d9.c
if(x==null)throw B.d(A.bC("Unsupported color mode (4 components)"))
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
b1=D.c.fP(g,l)
b2=D.c.fP(g,a8)
b3=D.c.fP(g,b0)
c8=D.c.fP(g,c7)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
c9=c5[c8]
a0=q-g
d=0
while(!0){d0=d9.d.e
d0.toString
if(!(d<d0))break
b6=D.c.fP(d,m)
b7=D.c.fP(d,a7)
b8=D.c.fP(d,a9)
d1=D.c.fP(d,c6)
if(x){d2=e[b6]
d3=b4[b7]
a1=b5[b8]
d4=c9[d1]}else{a1=e[b6]
b9=b4[b7]
c0=b5[b8]
d4=c9[d1]
d0=c0-128
d2=255-D.c.bh(D.d.C(a1+1.402*d0),0,255)
d5=b9-128
d3=255-D.d.C(D.d.bh(a1-0.3441363*d5-0.71413636*d0,0,255))
a1=255-D.c.bh(D.d.C(a1+1.772*d5),0,255)}d0=D.c.M(d2*d4,8)
c1=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.c.M(d3*d4,8)
c2=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.c.M(a1*d4,8)
c3=(d0&2147483647)-((d0&2147483648)>>>0)
if(f){d0=r.a
if(d0!=null)d0.ew(p-d,g,c1,c2,c3)}else if(h){d0=r.a
if(d0!=null)d0.ew(p-d,a0,c1,c2,c3)}else if(i){d0=r.a
if(d0!=null)d0.ew(d,a0,c1,c2,c3)}else if(j){d0=r.a
if(d0!=null)d0.ew(g,d,c1,c2,c3)}else if(k){d0=r.a
if(d0!=null)d0.ew(a0,d,c1,c2,c3)}else if(v){d0=r.a
if(d0!=null)d0.ew(a0,p-d,c1,c2,c3)}else{d0=r.a
if(d8){if(d0!=null)d0.ew(g,p-d,c1,c2,c3)}else if(d0!=null)d0.ew(d,g,c1,c2,c3)}++d}++g}break
default:throw B.d(A.bC("Unsupported color mode"))}return r},
czK(d,e,f,g,h,i){A.czH(i,d,e,f,g,h,!0,i)},
czL(d,e,f,g,h,i){A.czI(i,d,e,f,g,h,!0,i)},
czJ(d,e,f,g,h,i){A.czG(i,d,e,f,g,h,!0,i)},
OO(d,e,f,g,h){var x,w,v
for(x=0;x<g;++x){w=J.u(d.a,d.d+x)
v=J.u(e.a,e.d+x)
J.bX(f.a,f.d+x,w+v)}},
czH(d,e,f,g,h,i,j,k){var x,w,v=null,u=h*g,t=h+i,s=A.cl(d,!1,v,u),r=A.cl(d,!1,v,u),q=A.bK(r,v,0)
if(h===0){r.n(0,0,J.u(s.a,s.d))
A.OO(A.bK(s,v,1),q,A.bK(r,v,1),e-1,!0)
q.d+=g
s.d+=g
r.d+=g
h=1}for(x=-g,w=e-1;h<t;){A.OO(s,A.bK(q,v,x),r,1,!0)
A.OO(A.bK(s,v,1),q,A.bK(r,v,1),w,!0);++h
q.d+=g
s.d+=g
r.d+=g}},
czI(d,e,f,g,h,i,j,k){var x=null,w=h*g,v=h+i,u=A.cl(d,!1,x,w),t=A.cl(k,!1,x,w),s=A.bK(t,x,0)
if(h===0){t.n(0,0,J.u(u.a,u.d))
A.OO(A.bK(u,x,1),s,A.bK(t,x,1),e-1,!0)
u.d+=g
t.d+=g
h=1}else s.d-=g
for(;h<v;){A.OO(u,s,t,e,!0);++h
s.d+=g
u.d+=g
t.d+=g}},
czG(d,e,f,g,h,i,j,k){var x,w,v,u,t,s=null,r=h*g,q=h+i,p=A.cl(d,!1,s,r),o=A.cl(k,!1,s,r),n=A.bK(o,s,0)
if(h===0){o.n(0,0,J.u(p.a,p.d))
A.OO(A.bK(p,s,1),n,A.bK(o,s,1),e-1,!0)
n.d+=g
p.d+=g
o.d+=g
h=1}for(x=-g;h<q;){A.OO(p,A.bK(n,s,x),o,1,!0)
for(w=1;w<e;++w){v=w-g
u=J.u(n.a,n.d+(w-1))+J.u(n.a,n.d+v)-J.u(n.a,n.d+(v-1))
if((u&4294967040)>>>0===0)t=u
else t=u<0?0:255
v=J.u(p.a,p.d+w)
J.bX(o.a,o.d+w,v+t)}++h
n.d+=g
p.d+=g
o.d+=g}},
cGs(d){var x="ifd0",w=A.zo(d,!1,!1)
if(!d.gvi().i(0,x).a.Y(0,274)||d.gvi().i(0,x).gjU(0)===1)return w
w.e=A.UL(d.gvi())
w.gvi().i(0,x).sjU(0,null)
switch(d.gvi().i(0,x).gjU(0)){case 2:return A.aLj(w)
case 3:return A.cJ6(w,C.agP)
case 4:return A.aLj(A.aLe(w,180))
case 5:return A.aLj(A.aLe(w,90))
case 6:return A.aLe(w,90)
case 7:return A.aLj(A.aLe(w,-90))
case 8:return A.aLe(w,-90)}return w},
cH8(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
d.gpZ()
if(d.gvi().i(0,"ifd0").a.Y(0,274)&&d.gvi().i(0,"ifd0").gjU(0)!==1)d=A.cGs(d)
x=D.d.ac(e*(d.gb0(0)/d.gcm(0)))
if(e<=0)e=D.d.ac(x*(d.gcm(0)/d.gb0(0)))
if(e===d.gcm(0)&&x===d.gb0(0))return A.zo(d,!1,!1)
w=new Int32Array(e)
v=d.gcm(0)/e
for(u=0;u<e;++u)w[u]=D.d.C(u*v)
t=d.gjP().length
for(s=y.g,r=g,q=0;q<t;++q){p=d.x
o=(p===$?d.x=B.a([],s):p)[q]
n=A.ajm(o,x,!0,e)
m=r==null
if(!m)r.mc(n)
if(m)r=n
m=o.a
l=m==null
k=l?g:m.b
j=(k==null?0:k)/x
if((l?g:m.ged())!=null)for(i=0;i<x;++i){h=D.d.C(i*j)
for(u=0;u<e;++u){m=w[u]
l=o.a
if(l==null)m=g
else{m=l.mH(m,h)
m=D.d.C(m.gdu(m))}if(m==null)m=0
l=n.a
if(l!=null)l.lr(u,i,m)}}else for(i=0;i<x;++i){h=D.d.C(i*j)
for(u=0;u<e;++u){m=w[u]
l=o.a
m=l==null?g:l.dB(m,h,g)
n.wc(u,i,m==null?new A.eI():m)}}}r.toString
return r},
aLe(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=D.c.az(a8,360)
a7.gpZ()
if(D.c.az(a6,90)===0)switch(D.c.aZ(a6,90)){case 1:return A.cFH(a7)
case 2:return A.cFF(a7)
case 3:return A.cFG(a7)
default:return A.zo(a7,!1,!1)}x=a6*3.141592653589793/180
w=Math.cos(x)
v=Math.sin(x)
u=a7.gcm(0)
t=a7.gcm(0)
s=a7.gb0(0)
r=a7.gb0(0)
q=0.5*a7.gcm(0)
p=0.5*a7.gb0(0)
s=Math.abs(u*w)+Math.abs(s*v)
o=0.5*s
r=Math.abs(t*v)+Math.abs(r*w)
n=0.5*r
m=a7.gjP().length
for(u=y.g,l=a5,k=0;k<m;++k){j=a7.x
i=(j===$?a7.x=B.a([],u):j)[k]
t=l==null
h=t?a5:l.T8()
if(h==null){g=D.d.C(s)
h=A.ajm(a7,D.d.C(r),!0,g)}if(t)l=h
for(t=h.a,t=t.gW(t);t.q();){f=t.gJ(t)
e=f.glW(f)
d=f.gmF(f)
g=e-o
a0=d-n
a1=q+g*w+a0*v
a2=p-g*v+a0*w
g=!1
if(a1>=0)if(a2>=0){a0=i.a
a3=a0==null
a4=a3?a5:a0.a
if(a1<(a4==null?0:a4)){g=a3?a5:a0.b
g=a2<(g==null?0:g)}}if(g)h.wc(e,d,i.aBf(a1,a2,C.ajB))}}l.toString
return l},
cFH(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gjP(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.M)(x),++u){t=x[u]
s=v==null
r=s?k:v.T8()
if(r==null){q=t.a
p=q==null
o=p?k:q.b
if(o==null)o=0
q=p?k:q.a
r=A.ajm(t,q==null?0:q,!0,o)}if(s)v=r
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
s=s==null?k:s.dB(m,n-l,k)
r.wc(l,m,s==null?new A.eI():s);++l}++m}}v.toString
return v},
cFF(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gjP(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.M)(x),++u){t=x[u]
s=t.a
r=s==null
q=r?k:s.a
p=(q==null?0:q)-1
s=r?k:s.b
o=(s==null?0:s)-1
s=v==null
n=s?k:v.T8()
if(n==null)n=A.zo(t,!0,!0)
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
r=r==null?k:r.dB(p-l,s,k)
n.wc(l,m,r==null?new A.eI():r);++l}++m}}v.toString
return v},
cFG(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gjP(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.M)(x),++u){t=x[u]
s=d.a
s=s==null?k:s.a
r=(s==null?0:s)-1
s=v==null
q=s?k:v.T8()
if(q==null){p=t.a
o=p==null
n=o?k:p.b
if(n==null)n=0
p=o?k:p.a
q=A.ajm(t,p==null?0:p,!0,n)}if(s)v=q
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
p=p==null?k:p.dB(s,l,k)
q.wc(l,m,p==null?new A.eI():p);++l}++m}}v.toString
return v},
bVk(d){var x
d=(d&-d)>>>0
x=d!==0?31:32
if((d&65535)!==0)x-=16
if((d&16711935)!==0)x-=8
if((d&252645135)!==0)x-=4
if((d&858993459)!==0)x-=2
return(d&1431655765)!==0?x-1:x},
cLX(d){$.c3m().n(0,0,d)
return $.cjU().i(0,0)},
cgH(d,e,f,g){return(D.c.bh(d,0,255)|D.c.bh(e,0,255)<<8|D.c.bh(f,0,255)<<16|D.c.bh(g,0,255)<<24)>>>0},
tc(d,e,f){var x,w,v,u,t,s=e.gt(e),r=e.gcJ(),q=d.ged(),p=q==null?null:q.gcJ()
if(p==null)p=d.gcJ()
x=d.gt(d)
if(s===1){w=d.gt(d)>2?d.giL():d.i(0,0)
e.n(0,0,A.aLd(B.h2(d.i(0,0))?D.d.f3(w):w,p,r))}else if(s<=x)for(v=0;v<s;++v)e.n(0,v,A.aLd(d.i(0,v),p,r))
else if(x===2){u=A.aLd(d.i(0,0),p,r)
if(s===3){e.n(0,0,u)
e.n(0,1,u)
e.n(0,2,u)}else{f=A.aLd(d.i(0,1),p,r)
e.n(0,0,u)
e.n(0,1,u)
e.n(0,2,u)
e.n(0,3,f)}}else{for(v=0;v<x;++v)e.n(0,v,A.aLd(d.i(0,v),p,r))
t=x===1?e.i(0,0):0
for(v=x;v<s;++v)e.n(0,v,v===3?f:t)}return e},
nW(d,e,f,g,h){var x,w,v=d.ged(),u=v==null?null:v.gcJ()
if(u==null)u=d.gcJ()
v=h==null
x=v?null:h.gcJ()
f=x==null?f:x
if(f==null)f=d.gcJ()
x=v?null:h.gt(h)
g=x==null?g:x
if(g==null)g=d.gt(d)
if(e==null)e=0
if(f===u&&g===d.gt(d)){if(v)return d.dg(0)
h.i2(0,d)
return h}switch(f.a){case 3:if(v)w=new A.vF(new Uint8Array(g))
else w=h
return A.tc(d,w,e)
case 0:return A.tc(d,v?new A.Js(g,0):h,e)
case 1:return A.tc(d,v?new A.Ju(g,0):h,e)
case 2:if(v){v=g<3?1:2
w=new A.Jw(g,new Uint8Array(v))}else w=h
return A.tc(d,w,e)
case 4:if(v)w=new A.Jt(new Uint16Array(g))
else w=h
return A.tc(d,w,e)
case 5:if(v)w=new A.Jv(new Uint32Array(g))
else w=h
return A.tc(d,w,e)
case 6:if(v)w=new A.Jp(new Int8Array(g))
else w=h
return A.tc(d,w,e)
case 7:if(v)w=new A.Jn(new Int16Array(g))
else w=h
return A.tc(d,w,e)
case 8:if(v)w=new A.Jo(new Int32Array(g))
else w=h
return A.tc(d,w,e)
case 9:if(v)w=new A.Jk(new Uint16Array(g))
else w=h
return A.tc(d,w,e)
case 10:if(v)w=new A.Jl(new Float32Array(g))
else w=h
return A.tc(d,w,e)
case 11:if(v)w=new A.Jm(new Float64Array(g))
else w=h
return A.tc(d,w,e)}},
is(d){return 0.299*d.gav(d)+0.587*d.gaH()+0.114*d.gaL(d)},
cfr(d,e,f,g){var x=1-g/255
return B.a([D.d.ac(255*(1-d/255)*x),D.d.ac(255*(1-e/255)*x),D.d.ac(255*(1-f/255)*x)],y.t)},
fe(d){var x,w,v
$.c3l()[0]=d
x=$.cjT()[0]
if(d===0)return x>>>16
if($.fT==null)A.hz()
w=$.c6P.cp()[x>>>23&511]
if(w!==0){v=x&8388607
return w+(v+4095+(v>>>13&1)>>>13)}return A.crb(x)},
crb(d){var x,w,v=d>>>16&32768,u=(d>>>23&255)-112,t=d&8388607
if(u<=0){if(u<-10)return v
t|=8388608
x=14-u
return(v|D.c.mL(t+(D.c.e8(1,x-1)-1)+(D.c.f8(t,x)&1),x))>>>0}else if(u===143)if(t===0)return v|31744
else{t=t>>>13
w=t===0?1:0
return v|t|w|31744}else{t=t+4095+(t>>>13&1)
if((t&8388608)!==0){++u
t=0}if(u>30)return v|31744
return(v|u<<10|t>>>13)>>>0}},
hz(){var x,w,v,u,t=$.fT
if(t!=null)return t
x=new Uint32Array(65536)
$.fT=B.bbD(x.buffer,0,null)
t=new Uint16Array(512)
$.c6P.b=t
for(w=0;w<256;++w){v=(w&255)-112
if(v<=0||v>=30){t[w]=0
t[(w|256)>>>0]=0}else{u=v<<10>>>0
t[w]=u
t[(w|256)>>>0]=(u|32768)>>>0}}for(w=0;w<65536;++w)x[w]=A.crc(w)
t=$.fT
t.toString
return t},
crc(d){var x,w=d>>>15&1,v=d>>>10&31,u=d&1023
if(v===0)if(u===0)return w<<31>>>0
else{for(;(u&1024)===0;){u=u<<1;--v}++v
u&=4294966271}else if(v===31){x=w<<31
if(u===0)return(x|2139095040)>>>0
else return(x|u<<13|2139095040)>>>0}return(w<<31|v+112<<23|u<<13)>>>0}},C,R,S,K,H,L,F,T
J=c[1]
B=c[0]
D=c[2]
M=c[209]
G=c[99]
N=c[112]
O=c[51]
P=c[134]
I=c[66]
Q=c[190]
E=c[42]
A=a.updateHolder(c[9],A)
C=c[208]
R=c[204]
S=c[191]
K=c[164]
H=c[137]
L=c[103]
F=c[144]
T=c[118]
A.abs.prototype={}
A.b4I.prototype={}
A.b4H.prototype={
gt(d){var x=this.e
x===$&&B.b()
return x-(this.b-this.c)},
gM1(){var x=this.b,w=this.e
w===$&&B.b()
return x>=this.c+w},
i(d,e){return this.a[this.b+e]},
dc(d,e){var x,w,v,u=this
for(x=u.b,w=x+u.gt(0),v=u.a;x<w;++x)if(J.n(v[x],e))return x-u.c
return-1},
cw(){return this.a[this.b++]},
jV(d){var x,w,v,u=this,t=u.c,s=u.b-t+t
if(d<0){x=u.e
x===$&&B.b()
w=x-(s-t)}else w=d
v=A.zy(u.a,u.d,w,s)
u.b=u.b+v.gt(0)
return v},
ae(){var x,w,v,u=this,t=u.a,s=u.b,r=u.b=s+1,q=t[s]&255
s=u.b=r+1
x=t[r]&255
r=u.b=s+1
w=t[s]&255
u.b=r+1
v=t[r]&255
if(u.d===1)return(q<<24|x<<16|w<<8|v)>>>0
return(v<<24|w<<16|x<<8|q)>>>0},
fX(){var x,w,v,u,t=this,s=t.gt(0),r=t.a
if(y.D.b(r)){x=t.b
w=r.length
if(x+s>w)s=w-x
return B.bS(r.buffer,r.byteOffset+x,s)}x=t.b
v=x+s
u=r.length
return new Uint8Array(B.bv(J.aM9(r,x,v>u?u:v)))}}
A.bcA.prototype={}
A.bcz.prototype={
aQ(d){var x=this
if(x.a===x.c.length)x.b5o()
x.c[x.a++]=d&255},
XU(d,e){var x,w,v,u,t,s=this
if(e==null)e=d.length
for(;x=s.a,w=x+e,v=s.c,u=v.length,w>u;)s.a1D(w-u)
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
lq(d){return this.XU(d,null)},
bA_(d){var x,w,v,u,t=this,s=d.c
while(!0){x=t.a
w=d.e
w===$&&B.b()
w=x+(w-(d.b-s))
v=t.c
u=v.length
if(!(w>u))break
t.a1D(w-u)}D.a5.d_(v,x,x+d.gt(0),d.a,d.b)
t.a=t.a+d.gt(0)},
hu(d){var x=this
if(x.b===1){x.aQ(d>>>24&255)
x.aQ(d>>>16&255)
x.aQ(d>>>8&255)
x.aQ(d&255)
return}x.aQ(d&255)
x.aQ(d>>>8&255)
x.aQ(d>>>16&255)
x.aQ(d>>>24&255)},
abM(d,e){var x=this
if(d<0)d=x.a+d
if(e==null)e=x.a
else if(e<0)e=x.a+e
return B.bS(x.c.buffer,d,e-d)},
iS(d){return this.abM(d,null)},
a1D(d){var x=d!=null?d>32768?d:32768:32768,w=this.c,v=w.length,u=new Uint8Array((v+x)*2)
D.a5.fG(u,0,v,w)
this.c=u},
b5o(){return this.a1D(null)},
gt(d){return this.a}}
A.bT0.prototype={
Au(d,e){var x,w,v,u,t=d.cw(),s=d.cw(),r=t&8
D.c.M(t,3)
if(r!==8)throw B.d(A.RU("Only DEFLATE compression supported: "+r))
if(D.c.az((t<<8>>>0)+s,31)!==0)throw B.d(A.RU("Invalid FCHECK"))
if((s>>>5&1)!==0){d.ae()
throw B.d(A.RU("FDICT Encoding not currently supported"))}x=A.aj9(C.axz)
w=A.aj9(C.awT)
v=A.c_8(0,null)
w=new A.b4q(d,v,x,w)
w.b=!0
w.b0p()
u=y.L.a(B.bS(v.c.buffer,0,v.a))
d.ae()
return u}}
A.aUR.prototype={
aRp(d){var x,w,v,u,t=this
if(d>4)throw B.d(A.RU("Invalid Deflate Parameter"))
x=t.x
x===$&&B.b()
if(x!==0)t.PT()
x=!0
if(t.c.gM1()){w=t.k3
w===$&&B.b()
if(w===0)x=d!==0&&t.e!==666}if(x){switch($.tE.cp().e){case 0:v=t.aRs(d)
break
case 1:v=t.aRq(d)
break
case 2:v=t.aRr(d)
break
default:v=-1
break}x=v===2
if(x||v===3)t.e=666
if(v===0||x)return 0
if(v===1){if(d===1){t.ku(2,3)
t.DN(256,C.qY)
t.aq7()
x=t.ck
x===$&&B.b()
w=t.S
w===$&&B.b()
if(1+x+10-w<9){t.ku(2,3)
t.DN(256,C.qY)
t.aq7()}t.ck=7}else{t.anM(0,0,!1)
if(d===3){x=t.db
x===$&&B.b()
w=t.cx
u=0
for(;u<x;++u){w===$&&B.b()
w[u]=0}}}t.PT()}}if(d!==4)return 0
return 1},
b1D(){var x,w,v=this,u=v.as
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
aiH(){var x,w,v,u=this
for(x=u.p2,w=0;w<286;++w){x===$&&B.b()
x[w*2]=0}for(v=u.p3,w=0;w<30;++w){v===$&&B.b()
v[w*2]=0}for(v=u.p4,w=0;w<19;++w){v===$&&B.b()
v[w*2]=0}x===$&&B.b()
x[512]=1
u.bo=u.c7=u.al=u.by=0},
a1U(d,e){var x,w,v=this.to,u=v[e],t=e<<1>>>0,s=this.xr
while(!0){x=this.x1
x===$&&B.b()
if(!(t<=x))break
if(t<x&&A.c5N(d,v[t+1],v[t],s))++t
if(A.c5N(d,u,v[t],s))break
v[e]=v[t]
w=t<<1>>>0
e=t
t=w}v[e]=u},
alQ(d,e){var x,w,v,u,t,s,r,q,p,o=d[1]
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
aNR(){var x,w,v=this,u=v.p2
u===$&&B.b()
x=v.R8.b
x===$&&B.b()
v.alQ(u,x)
x=v.p3
x===$&&B.b()
u=v.RG.b
u===$&&B.b()
v.alQ(x,u)
v.rx.a_3(v)
for(u=v.p4,w=18;w>=3;--w){u===$&&B.b()
if(u[C.ys[w]*2+1]!==0)break}u=v.al
u===$&&B.b()
v.al=u+(3*(w+1)+5+5+4)
return w},
baD(d,e,f){var x,w,v,u=this
u.ku(d-257,5)
x=e-1
u.ku(x,5)
u.ku(f-4,4)
for(w=0;w<f;++w){v=u.p4
v===$&&B.b()
u.ku(v[C.ys[w]*2+1],3)}v=u.p2
v===$&&B.b()
u.amo(v,d-1)
v=u.p3
v===$&&B.b()
u.amo(v,x)},
amo(d,e){var x,w,v,u,t,s,r,q,p,o,n=this,m=d[1]
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
n.ku(o[q]&65535,o[p]&65535)}while(--t,t!==0)}else if(m!==0){if(m!==u){q=n.p4
q===$&&B.b()
p=m*2
n.ku(q[p]&65535,q[p+1]&65535);--t}q=n.p4
q===$&&B.b()
n.ku(q[32]&65535,q[33]&65535)
n.ku(t-3,2)}else{q=n.p4
if(t<=10){q===$&&B.b()
n.ku(q[34]&65535,q[35]&65535)
n.ku(t-3,3)}else{q===$&&B.b()
n.ku(q[36]&65535,q[37]&65535)
n.ku(t-11,7)}}}if(s===0){w=r
x=138}else if(m===s){w=r
x=6}else{x=7
w=4}u=m
t=0}},
b8_(d,e,f){var x,w,v,u
if(f===0)return
x=this.x
x===$&&B.b()
w=this.f
v=x
u=0
for(;u<f;++u,++v){w===$&&B.b()
w[v]=d[u+e]}this.x=x+f},
pq(d){var x,w=this.f
w===$&&B.b()
x=this.x
x===$&&B.b()
this.x=x+1
w[x]=d},
DN(d,e){var x=d*2
this.ku(e[x]&65535,e[x+1]&65535)},
ku(d,e){var x,w=this,v=w.S
v===$&&B.b()
x=w.A
if(v>16-e){x===$&&B.b()
v=w.A=(x|D.c.e8(d,v)&65535)>>>0
w.pq(v)
w.pq(A.nV(v,8))
w.A=A.nV(d,16-w.S)
w.S=w.S+(e-16)}else{x===$&&B.b()
w.A=(x|D.c.e8(d,v)&65535)>>>0
w.S=v+e}},
JA(d,e){var x,w,v,u,t,s=this,r=s.f
r===$&&B.b()
x=s.bp
x===$&&B.b()
w=s.bo
w===$&&B.b()
r[x+w*2]=A.nV(d,8)
w=s.f
x=s.bp
r=s.bo
w[x+r*2+1]=d
x=s.y1
x===$&&B.b()
w[x+r]=e
s.bo=r+1
if(d===0){r=s.p2
r===$&&B.b()
x=e*2
r[x]=r[x]+1}else{r=s.c7
r===$&&B.b()
s.c7=r+1
r=s.p2
r===$&&B.b()
x=(C.Io[e]+256+1)*2
r[x]=r[x]+1
x=s.p3
x===$&&B.b()
r=A.ccN(d-1)*2
x[r]=x[r]+1}r=s.bo
if((r&8191)===0){x=s.ok
x===$&&B.b()
x=x>2}else x=!1
if(x){v=r*8
r=s.k1
r===$&&B.b()
x=s.fx
x===$&&B.b()
for(w=s.p3,u=0;u<30;++u){w===$&&B.b()
v+=w[u*2]*(5+C.rW[u])}v=A.nV(v,3)
w=s.c7
w===$&&B.b()
t=s.bo
if(w<t/2&&v<(r-x)/2)return!0
r=t}x=s.y2
x===$&&B.b()
return r===x-1},
aeQ(d,e){var x,w,v,u,t,s,r=this,q=r.bo
q===$&&B.b()
if(q!==0){x=0
do{q=r.f
q===$&&B.b()
w=r.bp
w===$&&B.b()
w+=x*2
v=q[w]<<8&65280|q[w+1]&255
w=r.y1
w===$&&B.b()
u=q[w+x]&255;++x
if(v===0)r.DN(u,d)
else{t=C.Io[u]
r.DN(t+256+1,d)
s=C.Nv[t]
if(s!==0)r.ku(u-C.ax0[t],s);--v
t=A.ccN(v)
r.DN(t,e)
s=C.rW[t]
if(s!==0)r.ku(v-C.awS[t],s)}}while(x<r.bo)}r.DN(256,d)
r.ck=d[513]},
aD2(){var x,w,v,u
for(x=this.p2,w=0,v=0;w<7;){x===$&&B.b()
v+=x[w*2];++w}for(u=0;w<128;){x===$&&B.b()
u+=x[w*2];++w}for(;w<256;){x===$&&B.b()
v+=x[w*2];++w}this.y=v>A.nV(u,2)?0:1},
aq7(){var x=this,w=x.S
w===$&&B.b()
if(w===16){w=x.A
w===$&&B.b()
x.pq(w)
x.pq(A.nV(w,8))
x.S=x.A=0}else if(w>=8){w=x.A
w===$&&B.b()
x.pq(w)
x.A=A.nV(x.A,8)
x.S=x.S-8}},
adL(){var x=this,w=x.S
w===$&&B.b()
if(w>8){w=x.A
w===$&&B.b()
x.pq(w)
x.pq(A.nV(w,8))}else if(w>0){w=x.A
w===$&&B.b()
x.pq(w)}x.S=x.A=0},
wD(d){var x,w,v,u,t,s=this,r=s.fx
r===$&&B.b()
if(r>=0)x=r
else x=-1
w=s.k1
w===$&&B.b()
r=w-r
w=s.ok
w===$&&B.b()
if(w>0){if(s.y===2)s.aD2()
s.R8.a_3(s)
s.RG.a_3(s)
v=s.aNR()
w=s.al
w===$&&B.b()
u=A.nV(w+3+7,3)
w=s.by
w===$&&B.b()
t=A.nV(w+3+7,3)
if(t<=u)u=t}else{t=r+5
u=t
v=0}if(r+4<=u&&x!==-1)s.anM(x,r,d)
else if(t===u){s.ku(2+(d?1:0),3)
s.aeQ(C.qY,C.I0)}else{s.ku(4+(d?1:0),3)
r=s.R8.b
r===$&&B.b()
x=s.RG.b
x===$&&B.b()
s.baD(r+1,x+1,v+1)
x=s.p2
x===$&&B.b()
r=s.p3
r===$&&B.b()
s.aeQ(x,r)}s.aiH()
if(d)s.adL()
s.fx=s.k1
s.PT()},
aRs(d){var x,w,v,u,t,s=this,r=s.r
r===$&&B.b()
x=r-5
x=65535>x?x:65535
for(r=d===0;!0;){w=s.k3
w===$&&B.b()
if(w<=1){s.a01()
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
s.wD(!1)}w=s.k1
v=s.fx
t=s.as
t===$&&B.b()
if(w-v>=t-262)s.wD(!1)}r=d===4
s.wD(r)
return r?3:1},
anM(d,e,f){var x,w=this
w.ku(f?1:0,3)
w.adL()
w.ck=8
w.pq(e)
w.pq(A.nV(e,8))
x=(~e>>>0)+65536&65535
w.pq(x)
w.pq(A.nV(x,8))
x=w.ay
x===$&&B.b()
w.b8_(x,d,e)},
a01(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.c
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
D.a5.d_(w,0,x,w,x)
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
u+=t}}if(m.gM1())return
x=n.ay
x===$&&B.b()
r=n.b89(x,n.k1+n.k3,u)
x=n.k3=n.k3+r
if(x>=3){w=n.ay
v=n.k1
p=w[v]&255
n.cy=p
o=n.fr
o===$&&B.b()
o=D.c.e8(p,o)
v=w[v+1]
w=n.dy
w===$&&B.b()
n.cy=((o^v&255)&w)>>>0}}while(x<262&&!m.gM1())},
aRq(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
for(x=d===0,w=$.tE.a,v=0;!0;){u=m.k3
u===$&&B.b()
if(u<262){m.a01()
u=m.k3
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=m.cy
u===$&&B.b()
t=m.fr
t===$&&B.b()
t=D.c.e8(u,t)
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
if(u!==2)m.fy=m.ajr(v)}u=m.fy
u===$&&B.b()
t=m.k1
if(u>=3){t===$&&B.b()
o=m.JA(t-m.k2,u-3)
u=m.k3
t=m.fy
u-=t
m.k3=u
s=$.tE.b
if(s===$.tE)B.V(B.u0(w))
if(t<=s.b&&u>=3){u=m.fy=t-1
do{t=m.k1=m.k1+1
s=m.cy
s===$&&B.b()
r=m.fr
r===$&&B.b()
r=D.c.e8(s,r)
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
r=D.c.e8(s,r)
u=t[u+1]
t=m.dy
t===$&&B.b()
m.cy=((r^u&255)&t)>>>0}}else{u=m.ay
u===$&&B.b()
t===$&&B.b()
o=m.JA(0,u[t]&255)
m.k3=m.k3-1
m.k1=m.k1+1}if(o)m.wD(!1)}x=d===4
m.wD(x)
return x?3:1},
aRr(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
for(x=d===0,w=$.tE.a,v=0;!0;){u=l.k3
u===$&&B.b()
if(u<262){l.a01()
u=l.k3
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=l.cy
u===$&&B.b()
t=l.fr
t===$&&B.b()
t=D.c.e8(u,t)
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
if(v!==0){s=$.tE.b
if(s===$.tE)B.V(B.u0(w))
if(u<s.b){u=l.k1
u===$&&B.b()
t=l.as
t===$&&B.b()
t=(u-v&65535)<=t-262
u=t}else u=t}else u=t
t=2
if(u){u=l.p1
u===$&&B.b()
if(u!==2){u=l.ajr(v)
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
n=l.JA(u-1-l.go,t-3)
t=l.k3
u=l.k4
l.k3=t-(u-1)
u=l.k4=u-2
do{t=l.k1=l.k1+1
if(t<=o){s=l.cy
s===$&&B.b()
r=l.fr
r===$&&B.b()
r=D.c.e8(s,r)
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
if(n)l.wD(!1)}else{u=l.id
u===$&&B.b()
if(u!==0){u=l.ay
u===$&&B.b()
t=l.k1
t===$&&B.b()
if(l.JA(0,u[t-1]&255))l.wD(!1)
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
l.JA(0,x[w-1]&255)
l.id=0}x=d===4
l.wD(x)
return x?3:1},
ajr(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=$.tE.cp().d,h=j.k1
h===$&&B.b()
x=j.k4
x===$&&B.b()
w=j.as
w===$&&B.b()
w-=262
v=h>w?h-w:0
u=$.tE.cp().c
w=j.ax
w===$&&B.b()
t=j.k1+258
s=j.ay
s===$&&B.b()
r=h+x
q=s[r-1]
p=s[r]
if(j.k4>=$.tE.cp().a)i=i>>>2
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
b89(d,e,f){var x,w,v,u,t=this
if(f===0||t.c.gM1())return 0
x=t.c.jV(f)
w=x.gt(0)
if(w===0)return 0
v=x.fX()
u=v.length
if(w>u)w=u
D.a5.fG(d,e,e+w,v)
t.b+=w
t.a=A.vc(v,t.a)
return w},
PT(){var x,w=this,v=w.x
v===$&&B.b()
x=w.f
x===$&&B.b()
w.d.XU(x,v)
x=w.w
x===$&&B.b()
w.w=x+v
v=w.x-v
w.x=v
if(v===0)w.w=0},
aUr(d){switch(d){case 0:return new A.qd(0,0,0,0,0)
case 1:return new A.qd(4,4,8,4,1)
case 2:return new A.qd(4,5,16,8,1)
case 3:return new A.qd(4,6,32,32,1)
case 4:return new A.qd(4,4,16,16,2)
case 5:return new A.qd(8,16,32,32,2)
case 6:return new A.qd(8,16,128,128,2)
case 7:return new A.qd(8,32,128,256,2)
case 8:return new A.qd(32,128,258,1024,2)
case 9:return new A.qd(32,258,258,4096,2)}throw B.d(A.RU("Invalid Deflate parameter"))}}
A.qd.prototype={}
A.bFT.prototype={
aUc(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a
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
m=d.al
m===$&&B.b()
d.al=m+i*(s+j)
if(q){m=d.by
m===$&&B.b()
d.by=m+i*(w[l]+j)}}if(o===0)return
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
if(l!==s){k=d.al
k===$&&B.b()
d.al=k+(s-l)*e[q]
e[m]=s}--n}}},
a_3(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.a
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
o=d.al
o===$&&B.b()
d.al=o-1
if(r){o=d.by
o===$&&B.b()
d.by=o-w[q+1]}}k.b=s
for(t=D.c.aZ(q,2);t>=1;--t)d.a1U(j,t)
p=v
do{t=x[1]
x[1]=x[d.x1--]
d.a1U(j,1)
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
d.a1U(j,1)
if(d.x1>=2){p=l
continue}else break}while(!0)
x[--d.x2]=x[1]
k.aUc(d)
A.cB6(j,s,d.ry)}}
A.bOP.prototype={}
A.b3f.prototype={
aLw(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=d.length
for(x=0;x<l;++x){w=d[x]
if(w>m.b)m.b=w
if(w<m.c)m.c=w}v=D.c.e8(1,m.b)
m.a=new Uint32Array(v)
for(u=1,t=0,s=2;u<=m.b;){for(w=u<<16,x=0;x<l;++x)if(J.n(d[x],u)){for(r=t,q=0,p=0;p<u;++p){q=(q<<1|r&1)>>>0
r=r>>>1}for(o=m.a,n=(w|x)>>>0,p=q;p<v;p+=s)o[p]=n;++t}++u
t=t<<1>>>0
s=s<<1>>>0}}}
A.b4q.prototype={
b0p(){var x,w,v,u,t=this
t.e=t.d=0
if(!t.b)return
x=t.a
x===$&&B.b()
w=x.c
while(!0){v=x.b
u=x.e
u===$&&B.b()
if(!(v<w+u))break
if(!t.b5O())break}},
b5O(){var x,w=this,v=w.a
v===$&&B.b()
if(v.gM1())return!1
x=w.pr(3)
switch(D.c.M(x,1)){case 0:if(w.b67()===-1)return!1
break
case 1:if(w.afm(w.r,w.w)===-1)return!1
break
case 2:if(w.b5S()===-1)return!1
break
default:return!1}return(x&1)===0},
pr(d){var x,w,v,u,t=this
if(d===0)return 0
for(x=t.a;w=t.e,w<d;){x===$&&B.b()
v=x.b
u=x.e
u===$&&B.b()
if(v>=x.c+u)return-1
x.b=v+1
v=x.a[v]
t.d=(t.d|D.c.e8(v,w))>>>0
t.e=w+8}x=t.d
v=D.c.dU(1,d)
t.d=D.c.fP(x,d)
t.e=w-d
return(x&v-1)>>>0},
a2_(d){var x,w,v,u,t,s,r,q=this,p=d.a
p===$&&B.b()
x=d.b
for(w=q.a;v=q.e,v<x;){w===$&&B.b()
u=w.b
t=w.e
t===$&&B.b()
if(u>=w.c+t)return-1
w.b=u+1
u=w.a[u]
q.d=(q.d|D.c.e8(u,v))>>>0
q.e=v+8}w=q.d
s=p[(w&D.c.e8(1,x)-1)>>>0]
r=s>>>16
q.d=D.c.fP(w,r)
q.e=v-r
return s&65535},
b67(){var x,w,v=this
v.e=v.d=0
x=v.pr(16)
w=v.pr(16)
if(x!==0&&x!==(w^65535)>>>0)return-1
w=v.a
w===$&&B.b()
if(x>w.gt(0))return-1
v.c.bA_(w.jV(x))
return 0},
b5S(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.pr(5)
if(m===-1)return-1
m+=257
if(m>288)return-1
x=n.pr(5)
if(x===-1)return-1;++x
if(x>32)return-1
w=n.pr(4)
if(w===-1)return-1
w+=4
if(w>19)return-1
v=new Uint8Array(19)
for(u=0;u<w;++u){t=n.pr(3)
if(t===-1)return-1
v[C.ys[u]]=t}s=A.aj9(v)
r=m+x
q=new Uint8Array(r)
p=B.bS(q.buffer,0,m)
o=B.bS(q.buffer,m,x)
if(n.aQz(r,s,q)===-1)return-1
return n.afm(A.aj9(p),A.aj9(o))},
afm(d,e){var x,w,v,u,t,s,r,q=this
for(x=q.c;!0;){w=q.a2_(d)
if(w<0||w>285)return-1
if(w===256)break
if(w<256){x.aQ(w&255)
continue}v=w-257
u=C.ax1[v]+q.pr(C.aqI[v])
t=q.a2_(e)
if(t<0||t>29)return-1
s=C.auA[t]+q.pr(C.rW[t])
for(r=-s;u>s;){x.lq(x.iS(r))
u-=s}if(u===s)x.lq(x.iS(r))
else x.lq(x.abM(r,u-s))}for(x=q.a;r=q.e,r>=8;){q.e=r-8
x===$&&B.b()
if(--x.b<0)x.b=0}return 0},
aQz(d,e,f){var x,w,v,u,t,s,r,q=this
for(x=0,w=0;w<d;){v=q.a2_(e)
if(v===-1)return-1
u=0
switch(v){case 16:t=q.pr(2)
if(t===-1)return-1
t+=3
for(;s=t-1,t>0;t=s,w=r){r=w+1
f[w]=x}break
case 17:t=q.pr(3)
if(t===-1)return-1
t+=3
for(;s=t-1,t>0;t=s,w=r){r=w+1
f[w]=0}x=u
break
case 18:t=q.pr(7)
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
A.bv7.prototype={}
A.bv6.prototype={}
A.bv8.prototype={
at1(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=A.c_8(1,32768)
m.aQ(120)
for(x=0;w=(x|0)>>>0,(30720+w)%31!==0;)++x
m.aQ(w)
v=A.cJr(d)
u=A.zy(d,1,null,0)
w=A.c0M()
t=A.c0M()
s=A.c0M()
r=new Uint16Array(16)
q=new Uint32Array(573)
p=new Uint8Array(573)
o=A.c_8(0,32768)
r=new A.aUR(u,o,w,t,s,r,q,p)
if(e==null||e===-1)e=6
q=!0
q=e>9
if(q)B.V(A.RU("Invalid Deflate parameter"))
$.tE.b=r.aUr(e)
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
r.bp=16384
r.y1=49152
r.ok=e
r.w=r.x=r.p1=0
r.e=113
r.a=0
w.a=q
w.c=$.cjE()
t.a=p
t.c=$.cjD()
s.a=n
s.c=$.cjC()
r.S=r.A=0
r.ck=8
r.aiH()
r.b1D()
r.aRp(4)
r.PT()
m.lq(y.L.a(B.bS(o.c.buffer,0,o.a)))
m.hu(v)
w=B.bS(m.c.buffer,0,m.a)
return w},
jk(d){return this.at1(d,null)}}
A.zh.prototype={
O(){return new A.a4V(B.a([],y.s))}}
A.a4V.prototype={
a6(){var x,w=this
w.aE()
x=w.a.c
if(x!=null)w.e=x.i(0,"content")
x=new E.aq0()
x.ad2()
w.as=x
x.Mz(new A.bFv(w))
if(w.e==null)w.IW()},
IW(){var x=0,w=B.l(y.H),v=1,u,t=this,s,r,q
var $async$IW=B.h(function(d,e){if(d===1){u=e
x=v}while(true)switch(x){case 0:t.K(new A.bFs(t))
v=3
s=t.a.c
s=s==null?null:s.i(0,"load").$0()
x=6
return B.c(y._.b(s)?s:B.cy(s,y.z),$async$IW)
case 6:s=t.e=e
x=s!=null?7:8
break
case 7:x=9
return B.c(t.qz(s),$async$IW)
case 9:case 8:v=1
x=5
break
case 3:v=2
q=u
x=5
break
case 2:x=1
break
case 5:t.K(new A.bFt(t))
return B.j(null,w)
case 1:return B.i(u,w)}})
return B.k($async$IW,w)},
l(){var x=this.as
x===$&&B.b()
x.l()
this.aw()},
D(d){var x,w,v,u,t=this,s=null,r=y.E,q=B.a([],r)
if(!t.w&&!t.x){x=t.as
x===$&&B.b()
q.push(new B.dc(D.b0,s,s,new B.dK(new B.aa(0,820,0,1/0),E.c7h(x,""),s),s))}if(t.r)q.push(B.aP(s,D.hF,D.h,D.ag,s,s,s,s,s,s,s,s,s))
if(t.x){x=B.a([],r)
if(t.y==null)D.b.F(x,B.a([H.bL(C.b_A,s)],r))
else D.b.F(x,B.a([B.aP(s,B.bJ(B.a([H.bL(C.b_b,s),Q.hr,O.ct2(s,s,t.y),M.uS,B.ay(""+t.z+" / "+t.Q.length,s,s,s,s,s,s,s,C.a1h,s,s,s,s)],r),D.n,D.p,D.ak,s,D.A),D.h,D.l,s,s,s,s,s,K.f5,s,s,s)],r))
q.push(B.aP(s,B.dA(new B.am(K.f5,B.bJ(x,D.n,D.p,D.ak,s,D.A),s),s,s),D.h,D.ag,s,s,s,s,s,s,s,s,s))}q=B.dw(D.al,q,D.B,D.aa,s)
if(!t.w&&!t.x){x=B.a1("Reset",s)
x=E.J0(t.w?s:new A.bFu(t),x)
w=B.a1("Storno",s)
w=E.J0(t.w?s:t.gbic(),w)
v=B.a1("Process and Save",s)
v=E.J0(t.w?s:t.gaBH(),v)
u=B.a1("Save",s)
r=B.aP(s,P.eT(T.Es(B.bP(B.a([x,w,v,E.J0(t.w?s:t.gaBI(),u)],r),D.n,D.p,D.q),s),s,D.w,s,s,D.a8),D.h,D.hI,s,s,s,s,s,s,s,s,17976931348623157e292)}else r=s
return B.lz(!0,F.hX(s,D.l,q,r,s,s,!0),D.a_,!0)},
w3(){var x=0,w=B.l(y.H),v=this,u,t,s,r,q
var $async$w3=B.h(function(d,e){if(d===1)return B.i(e,w)
while(true)switch(x){case 0:q=v.as
q===$&&B.b()
x=2
return B.c(q.Cd(),$async$w3)
case 2:u=e
E.c7j(u)
t=E.c7i(u)
v.K(new A.bFy(v))
q=y.z
x=3
return B.c(B.iS(D.N,null,q),$async$w3)
case 3:s=A.cs9(t)
v.Q=s
x=s.length!==0?4:5
break
case 4:s=v.c
s.toString
x=8
return B.c(L.mK(null,null,!1,null,new A.bFz(),s,null,!0,!0,q),$async$w3)
case 8:x=e?6:7
break
case 6:v.K(new A.bFA(v))
x=9
return B.c(B.iS(D.N,null,q),$async$w3)
case 9:q=v.Q,s=q.length,r=0
case 10:if(!(r<q.length)){x=12
break}x=13
return B.c(A.aj0(t,q[r],new A.bFB(v)),$async$w3)
case 13:t=e
case 11:q.length===s||(0,B.M)(q),++r
x=10
break
case 12:case 7:case 5:v.K(new A.bFC(v))
q=v.c
q.toString
F.hG(q,!1).f.rF(t)
return B.j(null,w)}})
return B.k($async$w3,w)},
Og(){var x=0,w=B.l(y.H),v=this,u,t
var $async$Og=B.h(function(d,e){if(d===1)return B.i(e,w)
while(true)switch(x){case 0:t=v.as
t===$&&B.b()
x=2
return B.c(t.Cd(),$async$Og)
case 2:u=e
t=v.c
t.toString
F.hG(t,!1).f.rF(u)
return B.j(null,w)}})
return B.k($async$Og,w)},
a4t(){var x=0,w=B.l(y.H),v=this,u
var $async$a4t=B.h(function(d,e){if(d===1)return B.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
F.hG(u,!1).f.rF(null)
return B.j(null,w)}})
return B.k($async$a4t,w)},
qz(d){return this.aDh(d)},
aDh(d){var x=0,w=B.l(y.H),v=this,u
var $async$qz=B.h(function(e,f){if(e===1)return B.i(f,w)
while(true)switch(x){case 0:u=v.as
u===$&&B.b()
x=2
return B.c(u.Hh(d),$async$qz)
case 2:return B.j(null,w)}})
return B.k($async$qz,w)}}
A.aQh.prototype={
G(){return"Channel."+this.b}}
A.fQ.prototype={
q(){var x=this.b
return++this.a<x.gt(x)},
gJ(d){return this.b.i(0,this.a)},
$ib6:1}
A.Jk.prototype={
dg(d){return new A.Jk(new Uint16Array(B.bv(this.a)))},
gcJ(){return C.fD},
gt(d){return this.a.length},
ged(){return null},
i(d,e){var x,w=this.a
if(e<w.length){w=w[e]
x=$.fT
w=(x!=null?x:A.hz())[w]}else w=0
return w},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=A.fe(f)},
gdu(d){return this.gav(0)},
gav(d){var x,w=this.a
if(!D.id.gR(w)){w=w[0]
x=$.fT
w=(x!=null?x:A.hz())[w]}else w=0
return w},
gaH(){var x,w=this.a
if(w.length>1){w=w[1]
x=$.fT
w=(x!=null?x:A.hz())[w]}else w=0
return w},
gaL(d){var x,w=this.a
if(w.length>2){w=w[2]
x=$.fT
w=(x!=null?x:A.hz())[w]}else w=0
return w},
gaO(d){var x,w=this.a
if(w.length>3){w=w[3]
x=$.fT
w=(x!=null?x:A.hz())[w]}else w=0
return w},
giL(){return A.is(this)},
i2(d,e){var x,w=e.gav(e),v=this.a
if(!D.id.gR(v))v[0]=A.fe(w)
w=e.gaH()
x=v.length
if(x>1)v[1]=A.fe(w)
w=e.gaL(e)
if(x>2)v[2]=A.fe(w)
w=e.gaO(e)
if(x>3)v[3]=A.fe(w)},
gW(d){return new A.fQ(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.ax(B.F(this,!0,B.q(this).h("t.E")))},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
$id8:1}
A.Jl.prototype={
dg(d){return new A.Jl(new Float32Array(B.bv(this.a)))},
gcJ(){return C.hQ},
gt(d){return this.a.length},
ged(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=f},
gdu(d){var x=this.a
return!D.zF.gR(x)?x[0]:0},
gav(d){var x=this.a
return!D.zF.gR(x)?x[0]:0},
gaH(){var x=this.a
return x.length>1?x[1]:0},
gaL(d){var x=this.a
return x.length>2?x[2]:0},
gaO(d){var x=this.a
return x.length>3?x[3]:1},
giL(){return A.is(this)},
i2(d,e){var x,w=e.gav(e),v=this.a
if(!D.zF.gR(v))v[0]=w
w=e.gaH()
x=v.length
if(x>1)v[1]=w
w=e.gaL(e)
if(x>2)v[2]=w
w=e.gaO(e)
if(x>3)v[3]=w},
gW(d){return new A.fQ(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.ax(B.F(this,!0,B.q(this).h("t.E")))},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
$id8:1}
A.Jm.prototype={
dg(d){return new A.Jm(new Float64Array(B.bv(this.a)))},
gcJ(){return C.jb},
gt(d){return this.a.length},
ged(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=f},
gdu(d){var x=this.a
return!D.zG.gR(x)?x[0]:0},
gav(d){var x=this.a
return!D.zG.gR(x)?x[0]:0},
gaH(){var x=this.a
return x.length>1?x[1]:0},
gaL(d){var x=this.a
return x.length>2?x[2]:0},
gaO(d){var x=this.a
return x.length>3?x[3]:1},
giL(){return A.is(this)},
i2(d,e){var x,w=e.gav(e),v=this.a
if(!D.zG.gR(v))v[0]=w
w=e.gaH()
x=v.length
if(x>1)v[1]=w
w=e.gaL(e)
if(x>2)v[2]=w
w=e.gaO(e)
if(x>3)v[3]=w},
gW(d){return new A.fQ(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.ax(B.F(this,!0,B.q(this).h("t.E")))},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
$id8:1}
A.Jn.prototype={
dg(d){return new A.Jn(new Int16Array(B.bv(this.a)))},
gcJ(){return C.jd},
gt(d){return this.a.length},
ged(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=D.d.C(f)},
gdu(d){var x=this.a
return!D.zH.gR(x)?x[0]:0},
gav(d){var x=this.a
return!D.zH.gR(x)?x[0]:0},
gaH(){var x=this.a
return x.length>1?x[1]:0},
gaL(d){var x=this.a
return x.length>2?x[2]:0},
gaO(d){var x=this.a
return x.length>3?x[3]:0},
giL(){return A.is(this)},
i2(d,e){var x,w=e.gav(e),v=this.a
if(!D.zH.gR(v))v[0]=D.d.C(w)
w=e.gaH()
x=v.length
if(x>1)v[1]=D.d.C(w)
w=e.gaL(e)
if(x>2)v[2]=D.d.C(w)
w=e.gaO(e)
if(x>3)v[3]=D.d.C(w)},
gW(d){return new A.fQ(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.ax(B.F(this,!0,B.q(this).h("t.E")))},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
$id8:1}
A.Jo.prototype={
dg(d){return new A.Jo(new Int32Array(B.bv(this.a)))},
gcJ(){return C.je},
gt(d){return this.a.length},
ged(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=D.d.C(f)},
gdu(d){var x=this.a
return!D.eM.gR(x)?x[0]:0},
gav(d){var x=this.a
return!D.eM.gR(x)?x[0]:0},
gaH(){var x=this.a
return x.length>1?x[1]:0},
gaL(d){var x=this.a
return x.length>2?x[2]:0},
gaO(d){var x=this.a
return x.length>3?x[3]:0},
giL(){return A.is(this)},
i2(d,e){var x,w=e.gav(e),v=this.a
if(!D.eM.gR(v))v[0]=B.b0(w)
w=e.gaH()
x=v.length
if(x>1)v[1]=D.d.C(w)
w=e.gaL(e)
if(x>2)v[2]=D.d.C(w)
w=e.gaO(e)
if(x>3)v[3]=D.d.C(w)},
gW(d){return new A.fQ(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.ax(B.F(this,!0,B.q(this).h("t.E")))},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
$id8:1}
A.Jp.prototype={
dg(d){return new A.Jp(new Int8Array(B.bv(this.a)))},
gcJ(){return C.jc},
gt(d){return this.a.length},
ged(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=D.d.C(f)},
gdu(d){var x=this.a
return!D.zI.gR(x)?x[0]:0},
gav(d){var x=this.a
return!D.zI.gR(x)?x[0]:0},
gaH(){var x=this.a
return x.length>1?x[1]:0},
gaL(d){var x=this.a
return x.length>2?x[2]:0},
gaO(d){var x=this.a
return x.length>3?x[3]:0},
giL(){return A.is(this)},
i2(d,e){var x,w=e.gav(e),v=this.a
if(!D.zI.gR(v))v[0]=D.d.C(w)
w=e.gaH()
x=v.length
if(x>1)v[1]=D.d.C(w)
w=e.gaL(e)
if(x>2)v[2]=D.d.C(w)
w=e.gaO(e)
if(x>3)v[3]=D.d.C(w)},
gW(d){return new A.fQ(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.ax(B.F(this,!0,B.q(this).h("t.E")))},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
$id8:1}
A.Js.prototype={
dg(d){var x=this.b
x===$&&B.b()
return new A.Js(this.a,x)},
gcJ(){return C.eu},
ged(){return null},
CU(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.f8(x,7-d)&1}else x=0
return x},
I4(d,e){var x
if(d>=this.a)return
d=7-d
x=this.b
x===$&&B.b()
this.b=e!==0?(x|D.c.e8(1,d))>>>0:(x&~(D.c.e8(1,d)&255))>>>0},
i(d,e){return this.CU(e)},
n(d,e,f){return this.I4(e,f)},
gdu(d){return this.CU(0)},
gav(d){return this.CU(0)},
gaH(){return this.CU(1)},
gaL(d){return this.CU(2)},
gaO(d){return this.CU(3)},
giL(){return A.is(this)},
i2(d,e){this.hx(e.gav(e),e.gaH(),e.gaL(e),e.gaO(e))},
hx(d,e,f,g){var x=this
x.I4(0,d)
x.I4(1,e)
x.I4(2,f)
x.I4(3,g)},
gW(d){return new A.fQ(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a&&e.gv(e)===B.ax(B.F(this,!0,B.q(this).h("t.E")))},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
$id8:1,
gt(d){return this.a}}
A.Jt.prototype={
dg(d){return new A.Jt(new Uint16Array(B.bv(this.a)))},
gcJ(){return C.bH},
gt(d){return this.a.length},
ged(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=D.d.C(f)},
gdu(d){var x=this.a
return!D.id.gR(x)?x[0]:0},
gav(d){var x=this.a
return!D.id.gR(x)?x[0]:0},
gaH(){var x=this.a
return x.length>1?x[1]:0},
gaL(d){var x=this.a
return x.length>2?x[2]:0},
gaO(d){var x=this.a
return x.length>3?x[3]:0},
giL(){return A.is(this)},
i2(d,e){var x,w=e.gav(e),v=this.a
if(!D.id.gR(v))v[0]=D.d.C(w)
w=e.gaH()
x=v.length
if(x>1)v[1]=D.d.C(w)
w=e.gaL(e)
if(x>2)v[2]=D.d.C(w)
w=e.gaO(e)
if(x>3)v[3]=D.d.C(w)},
gW(d){return new A.fQ(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.ax(B.F(this,!0,B.q(this).h("t.E")))},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
$id8:1}
A.Ju.prototype={
dg(d){var x=this.b
x===$&&B.b()
return new A.Ju(this.a,x)},
gcJ(){return C.f6},
ged(){return null},
CV(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.f8(x,6-(d<<1>>>0))&3}else x=0
return x},
I5(d,e){var x,w,v
if(d>=this.a)return
x=C.ao9[d]
w=D.d.C(e)
v=this.b
v===$&&B.b()
this.b=(v&x|D.c.e8(w&3,6-(d<<1>>>0)))>>>0},
i(d,e){return this.CV(e)},
n(d,e,f){return this.I5(e,f)},
gdu(d){return this.CV(0)},
gav(d){return this.CV(0)},
gaH(){return this.CV(1)},
gaL(d){return this.CV(2)},
gaO(d){return this.CV(3)},
giL(){return A.is(this)},
i2(d,e){this.hx(e.gav(e),e.gaH(),e.gaL(e),e.gaO(e))},
hx(d,e,f,g){var x=this
x.I5(0,d)
x.I5(1,e)
x.I5(2,f)
x.I5(3,g)},
gW(d){return new A.fQ(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a&&e.gv(e)===B.ax(B.F(this,!0,B.q(this).h("t.E")))},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
$id8:1,
gt(d){return this.a}}
A.Jv.prototype={
dg(d){return new A.Jv(new Uint32Array(B.bv(this.a)))},
gcJ(){return C.hR},
gt(d){return this.a.length},
ged(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=D.d.C(f)},
gdu(d){var x=this.a
return!D.cc.gR(x)?x[0]:0},
gav(d){var x=this.a
return!D.cc.gR(x)?x[0]:0},
gaH(){var x=this.a
return x.length>1?x[1]:0},
gaL(d){var x=this.a
return x.length>2?x[2]:0},
gaO(d){var x=this.a
return x.length>3?x[3]:0},
giL(){return A.is(this)},
i2(d,e){var x,w=e.gav(e),v=this.a
if(!D.cc.gR(v))v[0]=D.d.C(w)
w=e.gaH()
x=v.length
if(x>1)v[1]=D.d.C(w)
w=e.gaL(e)
if(x>2)v[2]=D.d.C(w)
w=e.gaO(e)
if(x>3)v[3]=D.d.C(w)},
gW(d){return new A.fQ(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.ax(B.F(this,!0,B.q(this).h("t.E")))},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
$id8:1}
A.Jw.prototype={
dg(d){return new A.Jw(this.a,new Uint8Array(B.bv(this.b)))},
gcJ(){return C.f7},
ged(){return null},
CX(d){var x
if(d<0||d>=this.a)x=0
else{x=this.b
x=d<2?D.c.f8(x[0],4-(d<<2>>>0))&15:D.c.f8(x[1],4-((d&1)<<2))&15}return x},
I6(d,e){var x,w,v
if(d>=this.a)return
x=D.c.bh(D.d.C(e),0,15)
if(d>1){d&=1
w=1}else w=0
if(d===0){v=this.b
v[w]=(v[w]&15|x<<4)>>>0}else if(d===1){v=this.b
v[w]=(v[w]&240|x)>>>0}},
i(d,e){return this.CX(e)},
n(d,e,f){return this.I6(e,f)},
gdu(d){return this.CX(0)},
gav(d){return this.CX(0)},
gaH(){return this.CX(1)},
gaL(d){return this.CX(2)},
gaO(d){return this.CX(3)},
giL(){return A.is(this)},
i2(d,e){this.hx(e.gav(e),e.gaH(),e.gaL(e),e.gaO(e))},
hx(d,e,f,g){var x=this
x.I6(0,d)
x.I6(1,e)
x.I6(2,f)
x.I6(3,g)},
gW(d){return new A.fQ(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a&&e.gv(e)===B.ax(B.F(this,!0,B.q(this).h("t.E")))},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
$id8:1,
gt(d){return this.a}}
A.vF.prototype={
aLi(d,e,f,g){var x=this.a
x[0]=d
x[1]=e
x[2]=f
x[3]=g},
dg(d){return new A.vF(new Uint8Array(B.bv(this.a)))},
gcJ(){return C.V},
gt(d){return this.a.length},
ged(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=D.d.C(f)},
gdu(d){var x=this.a
return!D.a5.gR(x)?x[0]:0},
gav(d){var x=this.a
return!D.a5.gR(x)?x[0]:0},
gaH(){var x=this.a
return x.length>1?x[1]:0},
gaL(d){var x=this.a
return x.length>2?x[2]:0},
gaO(d){var x=this.a
return x.length>3?x[3]:255},
giL(){return A.is(this)},
i2(d,e){var x,w=e.gav(e),v=this.a
if(!D.a5.gR(v))v[0]=D.d.C(w)
w=e.gaH()
x=v.length
if(x>1)v[1]=D.d.C(w)
w=e.gaL(e)
if(x>2)v[2]=D.d.C(w)
w=e.gaO(e)
if(x>3)v[3]=D.d.C(w)},
gW(d){return new A.fQ(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.ax(B.F(this,!0,B.q(this).h("t.E")))},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
$id8:1}
A.add.prototype={}
A.Jq.prototype={}
A.m2.prototype={
G(){return"Format."+this.b}}
A.aci.prototype={
G(){return"BlendMode."+this.b}}
A.KF.prototype={
O9(d){var x=$.bXM()
if(!x.Y(0,d))return"<unknown>"
return x.i(0,d).a},
j(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(x=j.a,w=B.fr(x,x.r,B.q(x).c),v=y.p,u=y.r,t=y.N,s=y.P,r="";w.q();){q=w.d
r+=q+"\n"
p=x.i(0,q)
for(q=p.a,o=new B.ic(q,q.r,B.q(q).h("ic<1>")),o.c=q.e;o.q();){q=o.d
n=p.i(0,q)
r=n==null?r+("\t"+j.O9(q)+"\n"):r+("\t"+j.O9(q)+": "+n.j(0)+"\n")}for(q=p.b.a,o=new B.ic(q,q.r,B.q(q).h("ic<1>")),o.c=q.e;o.q();){m=o.d
r+=m+"\n"
if(!q.Y(0,m))q.n(0,m,new A.oh(B.C(v,u),new A.r0(B.C(t,s))))
l=q.i(0,m)
for(m=l.a,k=new B.ic(m,m.r,B.q(m).h("ic<1>")),k.c=m.e;k.q();){m=k.d
n=l.i(0,m)
r=n==null?r+("\t"+j.O9(m)+"\n"):r+("\t"+j.O9(m)+": "+n.j(0)+"\n")}}}return r.charCodeAt(0)==0?r:r},
iy(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0="exif",a1="interop",a2=a4.b
a4.b=!0
a4.jY(19789)
a4.jY(42)
a4.hu(8)
x=d.a
if(x.i(0,"ifd0")==null)x.n(0,"ifd0",new A.oh(B.C(y.p,y.r),new A.r0(B.C(y.N,y.P))))
w=y.N
v=y.p
u=B.C(w,v)
for(t=B.q(x),s=t.h("bt<1>"),t=B.fr(x,x.r,t.c),r=y.r,q=y.P,p=8;t.q();){o=t.d
n=x.i(0,o)
n.toString
u.n(0,o,p)
o=n.b.a
if(o.Y(0,a0)){m=new Uint32Array(1)
m[0]=0
n.n(0,34665,new A.pr(m))}else n.a.E(0,34665)
if(o.Y(0,a1)){m=new Uint32Array(1)
m[0]=0
n.n(0,40965,new A.pr(m))}else n.a.E(0,40965)
if(o.Y(0,"gps")){m=new Uint32Array(1)
m[0]=0
n.n(0,34853,new A.pr(m))}else n.a.E(0,34853)
n=n.a
p+=2+12*J.aY(n.gaF(0).a)+4
for(n=n.gaF(0),m=B.q(n),n=new B.b7(J.ag(n.a),n.b,m.h("b7<1,2>")),m=m.y[1];n.q();){l=n.a
if(l==null)l=m.a(l)
k=C.i0[l.gfY(l).a]*l.gt(l)
if(k>4)p+=k}for(n=new B.ic(o,o.r,B.q(o).h("ic<1>")),n.c=o.e;n.q();){m=n.d
if(!o.Y(0,m))o.n(0,m,new A.oh(B.C(v,r),new A.r0(B.C(w,q))))
l=o.i(0,m)
l.toString
u.n(0,m,p)
l=l.a
j=2+12*J.aY(l.gaF(0).a)
for(m=l.gaF(0),l=B.q(m),m=new B.b7(J.ag(m.a),m.b,l.h("b7<1,2>")),l=l.y[1];m.q();){i=m.a
if(i==null)i=l.a(i)
k=C.i0[i.gfY(i).a]*i.gt(i)
if(k>4)j+=k}p+=j}}h=x.a
for(t=h-1,g=0;g<h;++g){f=new B.bt(x,s).d2(0,g)
o=x.gaF(0)
e=o.b.$1(J.qu(o.a,g))
o=e.b.a
if(o.Y(0,a0)){n=e.i(0,34665)
n.toString
m=u.i(0,a0)
m.toString
n.us(m)}if(o.Y(0,a1)){n=e.i(0,40965)
n.toString
m=u.i(0,a1)
m.toString
n.us(m)}if(o.Y(0,"gps")){n=e.i(0,34853)
n.toString
m=u.i(0,"gps")
m.toString
n.us(m)}n=u.i(0,f)
n.toString
d.apf(a4,e,n+2+12*J.aY(e.a.gaF(0).a)+4)
if(g===t)a4.hu(0)
else{n=u.i(0,new B.bt(x,s).d2(0,g+1))
n.toString
a4.hu(n)}d.apg(a4,e)
for(n=new B.ic(o,o.r,B.q(o).h("ic<1>")),n.c=o.e;n.q();){m=n.d
if(!o.Y(0,m))o.n(0,m,new A.oh(B.C(v,r),new A.r0(B.C(w,q))))
l=o.i(0,m)
l.toString
m=u.i(0,m)
m.toString
d.apf(a4,l,m+2+12*J.aY(l.a.gaF(0).a))
d.apg(a4,l)}}a4.b=a2},
apf(d,e,f){var x,w,v,u,t,s,r=e.a
d.jY(r.a)
for(r=B.fr(r,r.r,B.q(r).c);r.q();){x=r.d
w=e.i(0,x)
w.toString
v=x===273
u=v&&w.gfY(w)===C.fF?C.c8:w.gfY(w)
t=v&&w.gfY(w)===C.fF?1:w.gt(w)
d.jY(x)
d.jY(u.a)
d.hu(t)
s=C.i0[w.gfY(w).a]*w.gt(w)
if(s<=4){w.iy(0,d)
for(;s<4;){d.aQ(0);++s}}else{d.hu(f)
f+=s}}return f},
apg(d,e){var x,w,v
for(x=e.a.gaF(0),w=B.q(x),x=new B.b7(J.ag(x.a),x.b,w.h("b7<1,2>")),w=w.y[1];x.q();){v=x.a
if(v==null)v=w.a(v)
if(C.i0[v.gfY(v).a]*v.gt(v)>4)v.iy(0,d)}},
p6(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a6.e
a6.e=!0
x=a6.d
w=a6.bz()
if(w===18761){a6.e=!1
if(a6.bz()!==42){a6.e=a4
return!1}}else if(w===19789){a6.e=!0
if(a6.bz()!==42){a6.e=a4
return!1}}else return!1
v=a6.ae()
for(u=this.a,t=y.bg,s=y.p,r=y.r,q=y.N,p=y.P,o=0;v>0;v=f){a6.d=x+v
n=new A.oh(B.C(s,r),new A.r0(B.C(q,p)))
m=a6.bz()
l=B.a(new Array(m),t)
for(k=0;k<m;++k)l[k]=this.al5(a6,x)
for(j=l.length,i=0;i<l.length;l.length===j||(0,B.M)(l),++i){h=l[i]
g=h.b
if(g!=null)n.n(0,h.a,g)}u.n(0,"ifd"+o,n);++o
f=a6.ae()
if(f===v)break}for(u=u.gaF(0),j=B.q(u),u=new B.b7(J.ag(u.a),u.b,j.h("b7<1,2>")),j=j.y[1];u.q();){g=u.a
if(g==null)g=j.a(g)
for(e=J.ag(C.zs.gdP(C.zs)),d=g.a,a0=g.b.a;e.q();){a1=e.gJ(e)
if(d.Y(0,a1)){a6.d=x+g.i(0,a1).C(0)
n=new A.oh(B.C(s,r),new A.r0(B.C(q,p)))
m=a6.bz()
l=B.a(new Array(m),t)
for(k=0;k<m;++k)l[k]=this.al5(a6,x)
for(a2=l.length,i=0;i<l.length;l.length===a2||(0,B.M)(l),++i){h=l[i]
a3=h.b
if(a3!=null)n.n(0,h.a,a3)}a1=C.zs.i(0,a1)
a1.toString
a0.n(0,a1,n)}}}a6.e=a4
return!1},
al5(d,e){var x,w,v,u,t=d.bz(),s=d.bz(),r=d.ae(),q=new A.aAD(t,null)
if(s>13)return q
x=C.Ox[s]
w=r*C.i0[s]
v=d.d
if((w>4?d.d=d.ae()+e:v)+w>d.c)return q
u=d.jV(w)
switch(x.a){case 0:break
case 6:q.b=new A.tX(new Int8Array(B.bv(B.c8T(u.fX().buffer,0,r))))
break
case 1:q.b=new A.r_(new Uint8Array(B.bv(u.jV(r).fX())))
break
case 7:q.b=new A.Ek(new Uint8Array(B.bv(u.jV(r).fX())))
break
case 2:q.b=new A.zl(r===0?"":u.p7(r-1))
break
case 3:q.b=A.c7D(u,r)
break
case 4:q.b=A.c7y(u,r)
break
case 5:q.b=A.c7z(u,r)
break
case 10:q.b=A.c7B(u,r)
break
case 8:q.b=A.c7C(u,r)
break
case 9:q.b=A.c7A(u,r)
break
case 11:q.b=A.c7F(u,r)
break
case 12:q.b=A.c7x(u,r)
break}d.d=v+4
return q}}
A.aAD.prototype={}
A.ah0.prototype={}
A.r0.prototype={
aLx(d){d.a.aK(0,new A.b3I(this))},
gR(d){var x,w,v=this.a
if(v.a===0)return!0
for(v=v.gaF(0),x=B.q(v),v=new B.b7(J.ag(v.a),v.b,x.h("b7<1,2>")),x=x.y[1];v.q();){w=v.a
if(w==null)w=x.a(w)
if(!(w.a.a===0&&w.b.gR(0)))return!1}return!0},
Y(d,e){return this.a.Y(0,e)},
i(d,e){var x=this.a
if(!x.Y(0,e))x.n(0,e,new A.oh(B.C(y.p,y.r),new A.r0(B.C(y.N,y.P))))
x=x.i(0,e)
x.toString
return x},
n(d,e,f){this.a.n(0,e,f)}}
A.oh.prototype={
gR(d){return this.a.a===0&&this.b.gR(0)},
bjv(d){d.a.aK(0,new A.b3J(this))
d.b.a.aK(0,new A.b3K(this))},
Y(d,e){return this.a.Y(0,e)},
i(d,e){if(typeof e=="string")e=C.UC.i(0,e)
if(B.h2(e))return this.a.i(0,e)
return null},
n(d,e,f){var x,w,v,u,t,s,r=this
if(typeof e=="string")e=C.UC.i(0,e)
if(!B.h2(e))return
if(f==null)r.a.E(0,e)
else if(f instanceof A.iU)r.a.n(0,e,f)
else{x=$.bXM().i(0,e)
if(x!=null)switch(x.b.a){case 1:if(y.L.b(f))r.a.n(0,e,new A.r_(new Uint8Array(B.bv(new Uint8Array(B.bv(f))))))
else if(B.h2(f)){w=new Uint8Array(1)
w[0]=f
r.a.n(0,e,new A.r_(w))}break
case 2:if(typeof f=="string")r.a.n(0,e,new A.zl(f))
break
case 3:if(y.L.b(f))r.a.n(0,e,new A.we(new Uint16Array(B.bv(new Uint16Array(B.bv(f))))))
else if(B.h2(f))r.a.n(0,e,A.csk(f))
break
case 4:if(y.L.b(f))r.a.n(0,e,new A.pr(new Uint32Array(B.bv(new Uint32Array(B.bv(f))))))
else if(B.h2(f))r.a.n(0,e,A.csj(f))
break
case 5:if(y.k.b(f))r.a.n(0,e,new A.r1(B.bd(f,!0,y.i)))
else if(y.L.b(f)&&J.aY(f)===2){w=J.a5(f)
r.a.n(0,e,new A.r1(B.a([new A.mi(w.i(f,0),w.i(f,1))],y.j)))}else if(f instanceof A.mi)r.a.n(0,e,new A.r1(B.a([new A.mi(f.a,f.b)],y.j)))
else if(y.f.b(f)){w=J.a5(f)
v=w.gt(f)
u=y.i
t=J.jE(v,u)
for(s=0;s<v;++s)t[s]=new A.mi(J.u(w.i(f,s),0),J.u(w.i(f,s),1))
r.a.n(0,e,new A.r1(B.bd(t,!0,u)))}break
case 6:if(y.L.b(f))r.a.n(0,e,new A.tX(new Int8Array(B.bv(new Int8Array(B.bv(f))))))
else if(B.h2(f)){w=new Int8Array(1)
w[0]=f
r.a.n(0,e,new A.tX(w))}break
case 7:if(y.L.b(f))r.a.n(0,e,new A.Ek(new Uint8Array(B.bv(new Uint8Array(B.bv(f))))))
break
case 8:if(y.L.b(f))r.a.n(0,e,new A.wd(new Int16Array(B.bv(new Int16Array(B.bv(f))))))
else if(B.h2(f)){w=new Int16Array(1)
w[0]=f
r.a.n(0,e,new A.wd(w))}break
case 9:if(y.L.b(f))r.a.n(0,e,new A.wc(new Int32Array(B.bv(new Int32Array(B.bv(f))))))
else if(B.h2(f)){w=new Int32Array(1)
w[0]=f
r.a.n(0,e,new A.wc(w))}break
case 10:if(y.k.b(f))r.a.n(0,e,new A.r2(B.bd(f,!0,y.i)))
else if(y.L.b(f)&&J.aY(f)===2){w=J.a5(f)
r.a.n(0,e,new A.r2(B.a([new A.mi(w.i(f,0),w.i(f,1))],y.j)))}else if(f instanceof A.mi)r.a.n(0,e,new A.r2(B.a([f],y.j)))
else if(y.f.b(f)){w=J.a5(f)
v=w.gt(f)
u=y.i
t=J.jE(v,u)
for(s=0;s<v;++s)t[s]=new A.mi(J.u(w.i(f,s),0),J.u(w.i(f,s),1))
r.a.n(0,e,new A.r2(B.bd(t,!0,u)))}break
case 11:if(y.n.b(f))r.a.n(0,e,new A.zn(new Float32Array(B.bv(new Float32Array(B.bv(f))))))
else if(typeof f=="number")r.a.n(0,e,A.c7E(f))
else if(B.h2(f))r.a.n(0,e,A.c7E(f))
break
case 12:if(y.n.b(f))r.a.n(0,e,new A.zm(new Float64Array(B.bv(new Float64Array(B.bv(f))))))
else if(typeof f=="number")r.a.n(0,e,A.c7w(f))
else if(B.h2(f))r.a.n(0,e,A.c7w(f))
break
case 0:break}}},
gjU(d){var x=this.a.i(0,274)
return x==null?null:J.aaS(x)},
sjU(d,e){this.a.E(0,274)}}
A.ll.prototype={
G(){return"IfdValueType."+this.b}}
A.iU.prototype={
i8(d,e){return 0},
C(d){return this.i8(0,0)},
BQ(d){return 0},
rJ(){return new Uint8Array(0)},
j(d){return""},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.iU&&x.gfY(x)===e.gfY(e)&&x.gt(x)===e.gt(e)&&x.gv(x)===e.gv(e)},
gv(d){return 0},
us(d){}}
A.r_.prototype={
dg(d){return new A.r_(new Uint8Array(B.bv(this.a)))},
gfY(d){return C.Gj},
gt(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.r_){x=this.a
x=x.length===e.a.length&&B.ax(x)===B.ax(e.a)}else x=!1
return x},
gv(d){return B.ax(this.a)},
i8(d,e){return this.a[e]},
C(d){return this.i8(0,0)},
us(d){this.a[0]=d},
rJ(){return this.a},
iy(d,e){e.lq(this.a)},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)}}
A.zl.prototype={
dg(d){return new A.zl(this.a)},
gfY(d){return C.b7},
gt(d){return this.a.length+1},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.zl){x=this.a
x=x.length+1===e.a.length+1&&D.e.gv(x)===D.e.gv(e.a)}else x=!1
return x},
gv(d){return D.e.gv(this.a)},
rJ(){return new Uint8Array(B.bv(new B.di(this.a)))},
iy(d,e){e.lq(new B.di(this.a))
e.aQ(0)},
j(d){return this.a}}
A.we.prototype={
aLC(d,e){var x
for(x=0;x<e;++x)this.a[x]=d.bz()},
dg(d){return new A.we(new Uint16Array(B.bv(this.a)))},
gfY(d){return C.aR},
gt(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.we){x=this.a
x=x.length===e.a.length&&B.ax(x)===B.ax(e.a)}else x=!1
return x},
gv(d){return B.ax(this.a)},
i8(d,e){return this.a[e]},
C(d){return this.i8(0,0)},
us(d){this.a[0]=d},
rJ(){return B.bS(this.a.buffer,0,null)},
iy(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.jY(this.a[x])},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)}}
A.pr.prototype={
aLz(d,e){var x
for(x=0;x<e;++x)this.a[x]=d.ae()},
dg(d){return new A.pr(new Uint32Array(B.bv(this.a)))},
gfY(d){return C.c8},
gt(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.pr){x=this.a
x=x.length===e.a.length&&B.ax(x)===B.ax(e.a)}else x=!1
return x},
gv(d){return B.ax(this.a)},
i8(d,e){return this.a[e]},
C(d){return this.i8(0,0)},
us(d){this.a[0]=d},
rJ(){return B.bS(this.a.buffer,0,null)},
iy(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.hu(this.a[x])},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)}}
A.r1.prototype={
dg(d){return new A.r1(B.bd(this.a,!0,y.i))},
gfY(d){return C.dq},
gt(d){return this.a.length},
i8(d,e){return J.aaS(this.a[e])},
C(d){return this.i8(0,0)},
BQ(d){return J.aMa(this.a[0])},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.r1){x=this.a
x=x.length===e.a.length&&B.ax(x)===B.ax(e.a)}else x=!1
return x},
gv(d){return B.ax(this.a)},
iy(d,e){var x,w,v,u
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.M)(x),++v){u=x[v]
e.hu(u.a)
e.hu(u.b)}},
j(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)}}
A.tX.prototype={
dg(d){return new A.tX(new Int8Array(B.bv(this.a)))},
gfY(d){return C.Gn},
gt(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.tX){x=this.a
x=x.length===e.a.length&&B.ax(x)===B.ax(e.a)}else x=!1
return x},
gv(d){return B.ax(this.a)},
i8(d,e){return this.a[e]},
C(d){return this.i8(0,0)},
us(d){this.a[0]=d},
rJ(){return B.bS(this.a.buffer,0,null)},
iy(d,e){e.lq(B.bS(this.a.buffer,0,null))},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)}}
A.wd.prototype={
aLB(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.bz()
$.p4()[0]=v
w[x]=$.qq()[0]}},
dg(d){return new A.wd(new Int16Array(B.bv(this.a)))},
gfY(d){return C.Go},
gt(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.wd){x=this.a
x=x.length===e.a.length&&B.ax(x)===B.ax(e.a)}else x=!1
return x},
gv(d){return B.ax(this.a)},
i8(d,e){return this.a[e]},
C(d){return this.i8(0,0)},
us(d){this.a[0]=d},
rJ(){return B.bS(this.a.buffer,0,null)},
iy(d,e){var x,w=new Int16Array(1),v=B.c__(w.buffer,0,null),u=this.a.length
for(x=0;x<u;++x){w[0]=this.a[x]
e.jY(v[0])}},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)}}
A.wc.prototype={
aLA(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.ae()
$.h5()[0]=v
w[x]=$.kq()[0]}},
dg(d){return new A.wc(new Int32Array(B.bv(this.a)))},
gfY(d){return C.Gp},
gt(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.wc){x=this.a
x=x.length===e.a.length&&B.ax(x)===B.ax(e.a)}else x=!1
return x},
gv(d){return B.ax(this.a)},
i8(d,e){return this.a[e]},
C(d){return this.i8(0,0)},
us(d){this.a[0]=d},
rJ(){return B.bS(this.a.buffer,0,null)},
iy(d,e){var x,w,v=this.a.length
for(x=0;x<v;++x){w=this.a[x]
$.aLM()[0]=w
e.hu($.bXF()[0])}},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)}}
A.r2.prototype={
dg(d){return new A.r2(B.bd(this.a,!0,y.i))},
gfY(d){return C.Gk},
gt(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.r2){x=this.a
x=x.length===e.a.length&&B.ax(x)===B.ax(e.a)}else x=!1
return x},
gv(d){return B.ax(this.a)},
i8(d,e){return J.aaS(this.a[e])},
C(d){return this.i8(0,0)},
BQ(d){return J.aMa(this.a[0])},
iy(d,e){var x,w,v,u,t,s
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.M)(x),++v){u=x[v]
t=u.a
s=$.aLM()
s[0]=t
t=$.bXF()
e.hu(t[0])
s[0]=u.b
e.hu(t[0])}},
j(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)}}
A.zn.prototype={
aLD(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.ae()
$.h5()[0]=v
w[x]=$.CE()[0]}},
dg(d){return new A.zn(new Float32Array(B.bv(this.a)))},
gfY(d){return C.Gl},
gt(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.zn){x=this.a
x=x.length===e.a.length&&B.ax(x)===B.ax(e.a)}else x=!1
return x},
gv(d){return B.ax(this.a)},
rJ(){return B.bS(this.a.buffer,0,null)},
BQ(d){return this.a[0]},
iy(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.bzX(this.a[x])},
j(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)}}
A.zm.prototype={
aLy(d,e){var x
for(x=0;x<e;++x)this.a[x]=d.WW()},
dg(d){return new A.zm(new Float64Array(B.bv(this.a)))},
gfY(d){return C.Gm},
gt(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.zm){x=this.a
x=x.length===e.a.length&&B.ax(x)===B.ax(e.a)}else x=!1
return x},
gv(d){return B.ax(this.a)},
BQ(d){return this.a[0]},
rJ(){return B.bS(this.a.buffer,0,null)},
iy(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.bzY(this.a[x])},
j(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)}}
A.Ek.prototype={
dg(d){return new A.Ek(new Uint8Array(B.bv(this.a)))},
gfY(d){return C.fF},
gt(d){return this.a.length},
rJ(){return this.a},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.Ek){x=this.a
x=x.length===e.a.length&&B.ax(x)===B.ax(e.a)}else x=!1
return x},
gv(d){return B.ax(this.a)},
iy(d,e){e.lq(this.a)},
j(d){return"<data>"}}
A.ky.prototype={
G(){return"BmpCompression."+this.b}}
A.aP2.prototype={}
A.CT.prototype={
ad_(d,e){var x,w,v,u,t,s,r,q=this,p=q.d,o=p<=40
if(o){x=q.r
x=x===C.w8||x===C.w9}else x=!0
if(x){x=q.as=d.ae()
w=A.bVk(x)
q.CW=w
v=D.c.f8(x,w)
x=v>0
q.cx=x?255/v:0
w=q.at=d.ae()
u=A.bVk(w)
q.cy=u
t=D.c.f8(w,u)
q.db=x?255/t:0
w=q.ax=d.ae()
u=A.bVk(w)
q.dx=u
s=D.c.f8(w,u)
q.dy=x?255/s:0
if(!o||q.r===C.w9){o=q.ay=d.ae()
x=A.bVk(o)
q.fr=x
r=D.c.f8(o,x)
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
if(q.f<=8)q.bx8(d)},
gLQ(){var x=this.d
if(x!==40)if(x===124){x=this.ay
x===$&&B.b()
x=x===0}else x=!1
else x=!0
return x},
gb0(d){return Math.abs(this.c)},
bx8(d){var x,w,v,u,t,s=this,r=s.z
if(r===0)r=D.c.dU(1,s.f)
s.ch=new A.rj(new Uint8Array(r*3),r,3)
for(x=0;x<r;++x){w=J.u(d.a,d.d++)
v=J.u(d.a,d.d++)
u=J.u(d.a,d.d++)
t=J.u(d.a,d.d++)
s.ch.OH(x,u,v,w,t)}},
bly(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(o.ch!=null){x=o.f
if(x===1){w=d.cw()
for(v=7;v>=0;--v)e.$4(D.c.mL(w,v)&1,0,0,0)
return}else if(x===2){w=d.cw()
for(v=6;v>=0;v-=2)e.$4(D.c.mL(w,v)&2,0,0,0)}else if(x===4){w=d.cw()
e.$4(D.c.M(w,4)&15,0,0,0)
e.$4(w&15,0,0,0)
return}else if(x===8){e.$4(d.cw(),0,0,0)
return}}x=o.r
if(x===C.w8&&o.f===32){u=d.ae()
x=o.as
x===$&&B.b()
t=o.CW
t===$&&B.b()
t=D.c.f8((u&x)>>>0,t)
x=o.cx
x===$&&B.b()
s=D.d.C(t*x)
x=o.at
x===$&&B.b()
t=o.cy
t===$&&B.b()
t=D.c.f8((u&x)>>>0,t)
x=o.db
x===$&&B.b()
r=D.d.C(t*x)
x=o.ax
x===$&&B.b()
t=o.dx
t===$&&B.b()
t=D.c.f8((u&x)>>>0,t)
x=o.dy
x===$&&B.b()
q=D.d.C(t*x)
if(o.gLQ())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.f8((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.d.C(t*x)}return e.$4(s,r,q,p)}else{t=o.f
if(t===32&&x===C.CK){q=d.cw()
r=d.cw()
s=d.cw()
p=d.cw()
return e.$4(s,r,q,o.gLQ()?255:p)}else if(t===24){q=d.cw()
r=d.cw()
return e.$4(d.cw(),r,q,255)}else if(t===16){u=d.bz()
x=o.as
x===$&&B.b()
t=o.CW
t===$&&B.b()
t=D.c.f8((u&x)>>>0,t)
x=o.cx
x===$&&B.b()
s=D.d.C(t*x)
x=o.at
x===$&&B.b()
t=o.cy
t===$&&B.b()
t=D.c.f8((u&x)>>>0,t)
x=o.db
x===$&&B.b()
r=D.d.C(t*x)
x=o.ax
x===$&&B.b()
t=o.dx
t===$&&B.b()
t=D.c.f8((u&x)>>>0,t)
x=o.dy
x===$&&B.b()
q=D.d.C(t*x)
if(o.gLQ())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.f8((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.d.C(t*x)}return e.$4(s,r,q,p)}else throw B.d(A.bC("Unsupported bitsPerPixel ("+t+") or compression ("+x.j(0)+")."))}}}
A.acl.prototype={
np(d){var x,w=null
if(!A.bYc(A.cl(d,!1,w,0)))return w
x=A.cl(d,!1,w,0)
this.a=x
return this.b=A.cnD(x,w)},
iX(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b
if(e==null)return new A.zp(f,f,f,f,0,C.aW,0,0)
x=g.a
x===$&&B.b()
w=e.a.b
w===$&&B.b()
x.d=w
v=e.f
w=e.b
u=D.c.aZ(w*v+31,32)*4
x=g.c
if(x)t=4
else if(v===1||v===4||v===8)t=1
else{s=v===32?4:3
t=s}if(x)r=C.V
else if(v===1)r=C.eu
else{if(v===2)s=C.f6
else if(v===4)s=C.f7
else s=C.V
r=s}q=x?f:e.ch
p=A.fV(f,f,r,0,C.aW,e.gb0(e),f,0,t,q,C.V,w,!1)
for(o=p.gb0(0)-1,x=e.c,w=1/x<0,s=x<0,x=x===0;o>=0;--o){n={}
if(!(x?w:s))m=o
else{l=p.a
l=l==null?f:l.b
m=(l==null?0:l)-1-o}l=g.a
k=l.iS(u)
l.d=l.d+(k.c-k.d)
l=p.a
j=l==null
i=j?f:l.a
if(i==null)i=0
n.a=0
h=j?f:l.dB(0,m,f)
if(h==null)h=new A.eI()
for(;n.a<i;)e.bly(k,new A.aP1(n,g,i,e,h))}return p},
mm(d,e,f){if(this.np(e)==null)return null
return this.iX(0)}}
A.aVN.prototype={}
A.aUA.prototype={}
A.aUB.prototype={}
A.aY0.prototype={}
A.ah1.prototype={}
A.ajJ.prototype={
Mt(){return this.w},
qr(d,e,f,g,h){throw B.d(A.bC("B44 compression not yet supported."))},
GJ(d,e,f){return this.qr(d,e,f,null,null)},
j(d){return B.o(this.r)+" "+this.x}}
A.KH.prototype={
G(){return"ExrChannelType."+this.b}}
A.DK.prototype={
G(){return"ExrChannelName."+this.b}}
A.ah2.prototype={
gbln(){var x=this.c
x===$&&B.b()
return x},
aLn(d){var x=this,w=d.N8()
x.a=w
if(w.length===0)return
x.c=C.axF[d.ae()]
d.cw()
d.d+=3
x.f=d.ae()
x.r=d.ae()
w=x.a
if(w==="R"){x.w=!0
x.b=C.agl}else if(w==="G"){x.w=!0
x.b=C.agm}else if(w==="B"){x.w=!0
x.b=C.agn}else if(w==="A"){x.w=!0
x.b=C.ago}else{x.w=!1
x.b=C.agp}switch(x.c.a){case 0:x.d=4
break
case 1:x.d=2
break
case 2:x.d=4
break
default:throw B.d(A.bC("EXR Invalid pixel type: "+x.gbln().j(0)))}}}
A.qR.prototype={
G(){return"ExrCompressorType."+this.b}}
A.aZa.prototype={
qr(d,e,f,g,h){throw B.d(A.bC("Unsupported compression type"))},
GJ(d,e,f){return this.qr(d,e,f,null,null)}}
A.b4N.prototype={}
A.ah3.prototype={}
A.aZc.prototype={
aLo(d){var x,w,v,u,t=this,s=A.cl(d,!1,null,0)
if(s.ae()!==20000630)throw B.d(A.bC("File is not an OpenEXR image file."))
x=t.d=s.cw()
if(x!==2)throw B.d(A.bC("Cannot read version "+x+" image files."))
x=t.e=s.qh()
if((x&4294967289)>>>0!==0)throw B.d(A.bC("The file format version number's flag field contains unrecognized flags."))
if((x&16)===0){w=t.c
v=A.c7S(w.length,(x&2)!==0,s)
if(v.w>0)w.push(v)}else for(x=t.c;!0;){v=A.c7S(x.length,(t.e&2)!==0,s)
if(v.w<=0)break
x.push(v)}x=t.c
w=x.length
if(w===0)throw B.d(A.bC("Error reading image header"))
for(u=0;u<x.length;x.length===w||(0,B.M)(x),++u)x[u].bx7(s)
t.b8i(s)},
b8i(d){var x,w,v,u,t=this
for(x=t.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.M)(x),++v){u=x[v]
t.a=Math.max(t.a,u.w)
t.b=Math.max(t.b,u.x)
if(u.db)t.b8r(u,d)
else t.b8p(u,d)}},
b8r(b3,b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=this.e
b2===$&&B.b()
x=(b2&16)!==0
b2=b3.b
b2.toString
w=b3.CW
v=b3.ay
u=A.bK(b4,b1,0)
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
if(x)if(u.ae()!==s)throw B.d(A.bC("Invalid Image Data"))
k=u.ae()
j=u.ae()
u.ae()
u.ae()
i=u.iS(u.ae())
u.d=u.d+(i.c-i.d)
h=b3.dy
h.toString
g=j*h
f=b3.dx
f.toString
h=w.qr(i,k*f,g,f,h)
e=h.length
d=new A.kI(h,0,e,0,!1)
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
switch(h.a){case 1:h=d.bz()
f=$.fT
a9=(f!=null?f:A.hz())[h]
break
case 2:a9=d.bz()
break
case 0:a9=d.ae()
break
default:a9=b1}h=a6.d
h===$&&B.b()
a3+=h
h=a6.w
h===$&&B.b()
if(h){h=b2.a
b0=h==null?b1:h.dB(a7,g,b1)
if(b0==null)b0=new A.eI()
h=a6.b
h===$&&B.b()
b0.n(0,h.a,a9)}else{h=a6.a
h===$&&B.b()
f=b2.b
h=f!=null?f.i(0,h):b1
if(h!=null)h.ew(a7,g,a9,0,0)}}}++a4;++g}}++o;++q}++r}},
b8p(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=this.e
a4===$&&B.b()
x=(a4&16)!==0
a4=a5.b
a4.toString
w=a5.CW
v=a5.ay[0]
u=a5.cx
t=A.bK(a6,a3,0)
for(s=v.length,r=a5.c,q=w!=null,p=0,o=0;o<s;++o){t.d=v[o]
if(x)if(t.ae()!==3.141592653589793)throw B.d(A.bC("Invalid Image Data"))
n=t.ae()
m=$.h5()
m[0]=n
n=$.kq()
m[0]=t.ae()
l=t.iS(n[0])
t.d=t.d+(l.c-l.d)
if(q){n=w.GJ(l,0,p)
k=new A.kI(n,0,n.length,0,!1)}else k=l
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
switch(n.a){case 1:n=k.bz()
m=$.fT
a1=(m!=null?m:A.hz())[n]
break
case 2:a1=k.bz()
break
case 0:a1=k.ae()
break
default:a1=a3}n=e.d
n===$&&B.b()
g+=n
n=e.w
n===$&&B.b()
if(n){n=a4.a
a2=n==null?a3:n.dB(a0,p,a3)
if(a2==null)a2=new A.eI()
n=e.b
n===$&&B.b()
a2.n(0,n.a,a1)}else{n=e.a
n===$&&B.b()
m=a4.b
n=m!=null?m.i(0,n):a3
if(n!=null)n.ew(a0,p,a1,0,0)}}}++h;++p}}}}
A.UR.prototype={
aLp(a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=B.C(y.N,y.I)
for(x=a1.e,w=y.t,v=a1.c,u=C.fD;!0;){t=a6.N8()
if(t.length===0)break
s=a6.N8()
r=a6.ae()
q=a6.iS(r)
a6.d=a6.d+(q.c-q.d)
x.n(0,t,new A.ah1(t,s,r))
switch(t){case"channels":for(;!0;){p=new A.ah2()
p.aLn(q)
o=p.a
o===$&&B.b()
if(o.length===0)break
n=p.w
n===$&&B.b()
if(n){++a1.d
o=p.c
o===$&&B.b()
if(o===C.xC)u=C.fD
else u=o===C.xD?C.hQ:C.hR}else{n=p.c
n===$&&B.b()
if(n===C.xC){n=a1.w
m=a1.x
a3.n(0,o,new A.Lb(new Uint16Array(n*m),n,m,1))}else if(n===C.xD){n=a1.w
m=a1.x
a3.n(0,o,new A.Lc(new Float32Array(n*m),n,m,1))}else if(n===C.Fq){n=a1.w
m=a1.x
a3.n(0,o,new A.Lg(new Uint32Array(n*m),n,m,1))}}v.push(p)}break
case"chromaticities":o=new Float32Array(8)
a1.at=o
n=q.ae()
m=$.h5()
m[0]=n
n=$.CE()
o[0]=n[0]
o=a1.at
m[0]=q.ae()
o[1]=n[0]
o=a1.at
m[0]=q.ae()
o[2]=n[0]
o=a1.at
m[0]=q.ae()
o[3]=n[0]
o=a1.at
m[0]=q.ae()
o[4]=n[0]
o=a1.at
m[0]=q.ae()
o[5]=n[0]
o=a1.at
m[0]=q.ae()
o[6]=n[0]
o=a1.at
m[0]=q.ae()
o[7]=n[0]
break
case"compression":a1.ax=C.amM[J.u(q.a,q.d++)]
break
case"dataWindow":o=q.ae()
n=$.h5()
n[0]=o
o=$.kq()
m=o[0]
n[0]=q.ae()
l=o[0]
n[0]=q.ae()
k=o[0]
n[0]=q.ae()
o=a1.r=B.a([m,l,k,o[0]],w)
a1.w=o[2]-o[0]+1
a1.x=o[3]-o[1]+1
break
case"displayWindow":o=q.ae()
n=$.h5()
n[0]=o
$.kq()
n[0]=q.ae()
n[0]=q.ae()
n[0]=q.ae()
break
case"lineOrder":break
case"pixelAspectRatio":o=q.ae()
$.h5()[0]=o
$.CE()
break
case"screenWindowCenter":o=q.ae()
n=$.h5()
n[0]=o
$.CE()
n[0]=q.ae()
break
case"screenWindowWidth":o=q.ae()
$.h5()[0]=o
$.CE()
break
case"tiles":a1.dx=q.ae()
a1.dy=q.ae()
o=J.u(q.a,q.d++)
a1.fr=o&15
a1.fx=D.c.M(o,4)&15
break
case"type":j=q.N8()
if(j!=="deepscanline")if(j!=="deeptile")throw B.d(A.bC("EXR Invalid type: "+j))
break
default:break}}x=a1.w
a1.b=A.fV(a2,a2,u,0,C.aW,a1.x,a2,0,a1.d,a2,C.V,x,!1)
for(x=B.fr(a3,a3.r,a3.$ti.c);x.q();){w=x.d
o=a1.b
o.toString
n=a3.i(0,w)
n.toString
o.aDa(w,n)}if(a1.db){x=a1.r
x===$&&B.b()
a1.id=a1.aOB(x[0],x[2],x[1],x[3])
x=a1.r
a1.k1=a1.aOC(x[0],x[2],x[1],x[3])
if(a1.fr!==2)a1.k1=1
x=a1.id
x.toString
w=a1.r
a1.fy=a1.aea(x,w[0],w[2],a1.dx,a1.fx)
w=a1.k1
w.toString
x=a1.r
a1.go=a1.aea(w,x[1],x[3],a1.dy,a1.fx)
x=a1.aOz()
a1.k2=x
w=a1.dx
w.toString
w=x*w
a1.k3=w
a1.CW=A.c6J(a1.ax,a1,w,a1.dy)
a7.a=a7.b=0
w=a1.id
w.toString
x=a1.k1
x.toString
a1.ay=B.EK(w*x,new A.aZd(a7,a1),!0,y.bk)}else{x=a1.x
w=a1.ch=new Uint32Array(x+1)
for(o=v.length,n=a1.r,m=a1.w,i=0;i<o;++i){h=v[i]
l=h.d
l===$&&B.b()
k=h.f
k===$&&B.b()
g=D.c.fg(l*m,k)
for(l=h.r,f=0;f<x;++f){n===$&&B.b()
k=n[1]
l===$&&B.b()
if(D.c.az(f+k,l)===0)w[f]=w[f]+g}}for(e=0,f=0;f<x;++f)e=Math.max(e,w[f])
x=A.c6J(a1.ax,a1,e,a2)
a1.CW=x
x=a1.cx=x.Mt()
w=a1.ch
v=w.length
o=new Uint32Array(v)
a1.cy=o
for(--v,d=0,a0=0;a0<=v;++a0){if(D.c.az(a0,x)===0)d=0
o[a0]=d
d+=w[a0]}x=D.c.fg(a1.x+x,x)
a1.ay=B.a([new Uint32Array(x-1)],y.w)}},
aOB(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.Qb(w):u.PE(w))+1
break
case 2:v=e-d+1
x=(u.fx===0?u.Qb(v):u.PE(v))+1
break
default:throw B.d(A.bC("Unknown LevelMode format."))}return x},
aOC(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.Qb(w):u.PE(w))+1
break
case 2:v=g-f+1
x=(u.fx===0?u.Qb(v):u.PE(v))+1
break
default:throw B.d(A.bC("Unknown LevelMode format."))}return x},
Qb(d){var x
for(x=0;d>1;){++x
d=D.c.M(d,1)}return x},
PE(d){var x,w
for(x=0,w=0;d>1;){if((d&1)!==0)w=1;++x
d=D.c.M(d,1)}return x+w},
aOz(){var x,w,v,u,t
for(x=this.c,w=x.length,v=0,u=0;u<w;++u){t=x[u].d
t===$&&B.b()
v+=t}return v},
aea(d,e,f,g,h){var x,w,v,u,t,s,r=J.hU(d,y.p)
for(x=h===1,w=f-e+1,v=0;v<d;++v){u=D.c.dU(1,v)
t=D.c.fg(w,u)
if(x&&t*u<w)++t
s=Math.max(t,1)
g.toString
r[v]=D.c.fg(s+g-1,g)}return r}}
A.ajK.prototype={
bx7(d){var x,w,v,u,t=this
if(t.db)for(x=0;x<t.ay.length;++x)for(w=0;v=t.ay[x],w<v.length;++w)v[w]=d.a8H()
else{u=t.ay[0].length
for(x=0;x<u;++x)t.ay[0][x]=d.a8H()}}}
A.b4O.prototype={
aLL(d,e,f){var x,w,v,u=this,t=d.c.length,s=J.hU(t,y.bc)
for(x=0;x<t;++x)s[x]=new A.aDk()
u.y=s
w=u.w
w.toString
v=D.c.aZ(w*u.x,2)
u.z=new Uint16Array(v)},
Mt(){return this.x},
qr(a4,a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
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
n=D.c.fg(a5,v)
m=D.c.fg(x,v)
v=n*v<a5?0:1
v=m-n+v
o.c=v
u=p.r
u===$&&B.b()
n=D.c.fg(a6,u)
m=D.c.fg(w,u)
l=n*u<a6?0:1
l=m-n+l
o.d=l
o.e=u
u=p.d
u===$&&B.b()
u=u/2|0
o.f=u
r+=v*l*u}k=a4.bz()
j=a4.bz()
if(j>=8192)throw B.d(A.bC("Error in header for PIZ-compressed data (invalid bitmap size)."))
i=new Uint8Array(8192)
if(k<=j){h=a4.jV(j-k+1)
g=h.c-h.d
for(f=k,q=0;q<g;++q,f=e){e=f+1
i[f]=J.u(h.a,h.d+q)}}d=new Uint16Array(65536)
a0=a3.b9z(i,d)
A.cqO(a4,a4.ae(),a3.z,r)
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
A.cqR(u,l+f,a1,v,a2,a1*v,a0);++f}}v=a3.z
v.toString
a3.aNt(d,v,r)
v=a3.r
if(v==null){v=a3.w
v.toString
v=a3.r=A.oy(!1,v*a3.x+73728)}v.a=0
for(;a6<=w;++a6)for(q=0;q<s;++q){v=a3.y
v===$&&B.b()
o=v[q]
v=o.e
v===$&&B.b()
if(D.c.az(a6,v)!==0)continue
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
v.jY(u[l])}}v=a3.r
return B.bS(v.c.buffer,0,v.a)},
GJ(d,e,f){return this.qr(d,e,f,null,null)},
aNt(d,e,f){var x
for(x=0;x<f;++x)e[x]=d[e[x]]},
b9z(d,e){var x,w,v,u
for(x=0,w=0;w<65536;++w)if(w===0||(d[w>>>3]&1<<(w&7))>>>0!==0){v=x+1
e[x]=w
x=v}for(v=x;v<65536;v=u){u=v+1
e[v]=0}return x-1}}
A.aDk.prototype={}
A.b4P.prototype={
Mt(){return this.x},
qr(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=C.hE.Au(A.zy(a0.fX(),1,null,0),!1),d=f.y
if(d==null){d=f.w
d.toString
d=f.y=A.oy(!1,f.x*d)}d.a=0
x=B.a([0,0,0,0],y.t)
w=new Uint32Array(1)
v=B.bS(w.buffer,0,null)
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
if(D.c.az(a2,s)!==0)continue
s=n.f
s===$&&B.b()
m=D.c.fg(a1,s)
l=D.c.fg(u,s)
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
for(g=0;g<4;++g)f.y.aQ(v[g])}break
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
for(g=0;g<2;++g)f.y.aQ(v[g])}break
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
for(g=0;g<4;++g)f.y.aQ(v[g])}break}}d=f.y
return B.bS(d.c.buffer,0,d.a)},
GJ(d,e,f){return this.qr(d,e,f,null,null)}}
A.b4Q.prototype={
Mt(){return 1},
qr(d,e,f,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.c,g=A.oy(!1,(h-d.d)*2)
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
$.mM()[0]=v
t=$.o2()[0]
if(t<0){s=-t
for(;r=s-1,s>0;s=r)g.aQ(J.u(d.a,d.d++))}else for(s=t;r=s-1,s>=0;s=r)g.aQ(J.u(d.a,d.d++))}q=B.bS(g.c.buffer,0,g.a)
p=q.length
for(o=1;o<p;++o)q[o]=q[o-1]+q[o]-128
h=i.r
if(h==null||h.length!==p)h=i.r=new Uint8Array(p)
v=D.c.aZ(p+1,2)
for(n=0,m=0;!0;v=j,n=k){if(m<p){l=m+1
k=n+1
h[m]=q[n]}else break
if(l<p){m=l+1
j=v+1
h[l]=q[v]}else break}h.toString
return h},
GJ(d,e,f){return this.qr(d,e,f,null,null)},
j(d){return B.o(this.w)}}
A.ajL.prototype={
Mt(){return this.x},
qr(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=C.hE.Au(A.zy(d.fX(),1,null,0),!1)
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
u=D.c.aZ(t+1,2)
for(r=0,q=0;!0;u=n,r=o){if(q<t){p=q+1
o=r+1
v[q]=l[r]}else break
if(p<t){q=p+1
n=u+1
v[p]=l[u]}else break}v.toString
return v},
GJ(d,e,f){return this.qr(d,e,f,null,null)},
j(d){return B.o(this.w)}}
A.aZb.prototype={
iX(d){var x=this.a
if(x==null)return null
return x.c[d].b},
mm(d,e,f){var x=new A.aZc(B.a([],y.m))
x.aLo(e)
this.a=x
return this.iX(0)}}
A.Vk.prototype={
bnZ(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.b,w=this.d,v=-1,u=-1,t=0;t<x;++t){s=w.m0(t)
r=w.lZ(t)
q=w.lX(t)
p=w.nk(t)
if(s===d&&r===e&&q===f&&p===g)return t
o=d-s
n=e-r
m=f-q
l=g-p
k=o*o+n*n+m*m+l*l
if(u===-1){u=t
v=k}else if(k<v){u=t
v=k}}return u},
aab(){var x,w,v,u,t,s,r,q=this
if(q.c==null)return q.d
x=q.d
w=x.a
v=new A.rj(new Uint8Array(w*4),w,4)
for(u=0;u<w;++u){t=x.m0(u)
s=x.lZ(u)
r=x.lX(u)
v.OH(u,t,s,r,u===q.c?0:255)}return v}}
A.Vl.prototype={
aLs(d){var x,w,v,u,t,s,r=this
r.a=d.bz()
r.b=d.bz()
r.c=d.bz()
r.d=d.bz()
x=d.cw()
r.e=(x&64)!==0
if((x&128)!==0){r.f=A.c77(D.c.dU(1,(x&7)+1))
for(w=0;v=r.f,w<v.b;++w){u=J.u(d.a,d.d++)
t=J.u(d.a,d.d++)
s=J.u(d.a,d.d++)
v.d.o3(w,u,t,s)}}r.x=d.d-d.b}}
A.ajM.prototype={}
A.ais.prototype={}
A.b1j.prototype={
np(d){var x,w,v,u,t,s,r,q,p=this
p.f=A.cl(d,!1,null,0)
p.a=new A.ais(B.a([],y.b))
if(!p.ah2())return null
try{for(;u=p.f,t=u.d,t<u.c;){s=u.a
u.d=t+1
x=J.u(s,t)
switch(x){case 44:w=p.amQ()
if(w==null){u=p.a
return u}u=w
u.r=p.e
u.w=p.c
if(p.b!==0){if(w.f==null&&p.a.e!=null){u=p.a.e
t=u.a
s=u.b
r=u.c
u=u.d
w.f=new A.Vk(t,s,r,new A.rj(new Uint8Array(B.bv(u.c)),u.a,u.b))}if(w.f!=null)w.f.c=p.d}p.a.r.push(w)
break
case 33:u=p.f
v=J.u(u.a,u.d++)
if(J.n(v,255)){u=p.f
if(u.p7(J.u(u.a,u.d++))==="NETSCAPE2.0"){t=J.u(u.a,u.d++)
s=J.u(u.a,u.d++)
if(t===3&&s===1)p.r=u.bz()}else p.Sf()}else if(J.n(v,249)){u=p.f
u.toString
p.b8e(u)}else p.Sf()
break
case 59:u=p.a
return u
default:break}}}catch(q){}return p.a},
b8e(d){var x,w,v,u=this
d.cw()
x=d.cw()
u.e=d.bz()
u.d=d.cw()
d.cw()
u.c=D.c.M(x,2)&7
u.b=x&1
w=d.P6(1,0)
if(J.u(w.a,w.d)===44){++d.d
v=u.amQ()
if(v==null)return
v.r=u.e
v.w=u.c
if(u.b!==0){w=v.f
if(w==null&&u.a.e!=null){w=u.a.e
w.toString
w=v.f=A.crP(w)}if(w!=null)w.c=u.d}u.a.r.push(v)}},
iX(d){var x,w,v,u=this,t=u.f
if(t==null||u.a==null)return null
x=u.a.r
w=x.length
if(d>=w)return null
v=x[d]
t.toString
x=v.x
x===$&&B.b()
t.d=x
return u.aQQ(v)},
mm(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null
if(a5.np(a8)==null)return a6
x=a5.a.r.length
if(x===1)return a5.iX(0)
for(x=y.p,w=a6,v=w,u=0;t=a5.a.r,u<t.length;++u){a9=t[u]
s=a5.iX(u)
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
if(t){v.mc(s)
w=s
continue}l=a9.f
if(!(l!=null)){t=a5.a.e
t.toString
l=t}t=o?a6:p.a
if(t==null)t=0
r=o?a6:p.b
if(r==null)r=0
k=A.fV(a6,a6,C.V,0,C.aW,r,a6,0,1,l.aab(),C.V,t,!1)
t=a9.w
if(t===2){t=a5.a.c.a
t=!D.a5.gR(t)?t[0]:0
r=l.d
j=r.m0(t)
i=r.lZ(t)
h=r.lX(t)
g=t===l.c?0:255
t=new Uint8Array(4)
t[0]=j
t[1]=i
t[2]=h
t[3]=g
r=k.a
if(r!=null)r.mh(0,new A.vF(t))}else if(t!==3){t=a9.a
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
t=t==null?a6:t.ged()
t.toString
f=B.C(x,x)
for(r=l.b,e=0;e<r;++e)f.n(0,e,l.bnZ(t.m0(e),t.lZ(e),t.lX(e),t.nk(e)))
t=k.a
if(t==null)d=a6
else{t=t.gfw(t)
t=new Uint8Array(t,0)
d=t}if(d==null){t=k.a
t=t==null?a6:t.gfw(t)
if(t==null)t=new Uint8Array(0).buffer
d=new Uint8Array(t,0)}t=w.a
if(t==null)a0=a6
else{t=t.gfw(t)
t=new Uint8Array(t,0)
a0=t}if(a0==null){t=w.a
t=t==null?a6:t.gfw(t)
if(t==null)t=new Uint8Array(0).buffer
a0=new Uint8Array(t,0)}for(a1=d.length,a2=0;a2<a1;++a2){a3=f.i(0,a0[a2])
if(a3!==-1){a3.toString
d[a2]=a3}}}}k.y=s.y
for(t=s.a,t=t.gW(t);t.q();){a4=t.gJ(t)
if(a4.gaO(a4)!==0){r=a4.glW(a4)
q=a9.a
q===$&&B.b()
p=a4.gmF(a4)
o=a9.b
o===$&&B.b()
k.wc(r+q,p+o,a4)}}v.mc(k)
w=k}return v},
amQ(){var x,w=this.f
if(w.d>=w.c)return null
x=new A.ajM()
x.aLs(w);++this.f.d
this.Sf()
return x},
aQQ(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.w==null){n.w=new Uint8Array(256)
n.x=new Uint8Array(4095)
n.y=new Uint8Array(4096)
n.z=new Uint32Array(4096)}x=n.Q=n.f.cw()
w=D.c.e8(1,x)
n.dy=w;++w
n.dx=w
n.db=w+1;++x
n.cy=x
n.cx=D.c.e8(1,x)
n.ay=0
n.CW=4098
n.at=n.ax=0
n.w[0]=0
x=n.z
x.toString
D.cc.jm(x,0,4096,4098)
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
s=A.fV(m,m,C.V,0,C.aW,w,m,0,1,t.aab(),C.V,x,!1)
r=new Uint8Array(x)
x=d.e
x===$&&B.b()
if(x){x=d.b
x===$&&B.b()
for(w=x+w,q=0,p=0;q<4;++q)for(o=x+C.alK[q];o<w;o+=C.ap0[q],++p){if(!n.ah4(r))return s
n.aoq(s,o,t,r)}}else for(o=0;o<w;++o){if(!n.ah4(r))return s
n.aoq(s,o,t,r)}return s},
aoq(d,e,f,g){var x,w,v,u=g.length
for(x=0;x<u;++x){w=g[x]
v=d.a
if(v!=null)v.ew(x,e,w,0,0)}},
ah2(){var x,w,v,u,t,s=this,r=s.f.p7(6)
if(r!=="GIF87a"&&r!=="GIF89a")return!1
x=s.a
x.toString
x.a=s.f.bz()
x=s.a
x.toString
x.b=s.f.bz()
w=s.f.cw()
x=s.a
x.toString
x.c=new A.vF(new Uint8Array(B.bv(B.a([s.f.cw()],y.t))));++s.f.d
if((w&128)!==0){x=s.a
x.toString
x.e=A.c77(D.c.dU(1,(w&7)+1))
for(v=0;v<s.a.e.b;++v){x=s.f
x=J.u(x.a,x.d++)
u=s.f
u=J.u(u.a,u.d++)
t=s.f
t=J.u(t.a,t.d++)
s.a.e.d.o3(v,x,u,t)}}s.a.toString
return!0},
ah4(d){var x=this,w=x.as
w.toString
x.as=w-d.length
if(!x.aR3(d))return!1
if(x.as===0)x.Sf()
return!0},
Sf(){var x,w,v,u=this.f
if(u.d>=u.c)return!0
x=u.cw()
while(!0){if(x!==0){u=this.f
u=u.d<u.c}else u=!1
if(!u)break
u=this.f
w=u.d+=x
if(w>=u.c)return!0
v=u.a
u.d=w+1
x=J.u(v,w)}return!0},
aR3(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=m.ay
if(l>4095)return!1
x=d.length
w=0
if(l!==0)while(!0){if(!(l!==0&&w<x))break
v=w+1
u=m.x
u===$&&B.b()
l=m.ay=l-1
d[w]=u[l]
w=v}for(;w<x;){t=m.ch=m.aR2()
if(t==null)return!1
l=m.dx
if(t===l)return!1
u=m.dy
if(t===u){for(u=m.z,s=0;s<=4095;++s)u[s]=4098
m.db=l+1
l=m.Q+1
m.cy=l
m.cx=D.c.e8(1,l)
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
u=m.a0j(l,t,u)
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
p[r]=m.a0j(u,l,o)}else{p===$&&B.b()
q.toString
p[r]=m.a0j(u,q,o)}}l=m.ch
l.toString
m.CW=l}}return!0},
aR2(){var x,w,v,u,t=this
if(t.cy>12)return null
for(;x=t.ax,w=t.cy,x<w;){x=t.aNO()
x.toString
w=t.at
v=t.ax
t.at=(w|D.c.e8(x,v))>>>0
t.ax=v+8}v=t.at
u=C.auX[w]
t.at=D.c.f8(v,w)
t.ax=x-w
x=t.db
if(x<4097){++x
t.db=x
x=x>t.cx&&w<12}else x=!1
if(x){t.cx=t.cx<<1>>>0
t.cy=w+1}return v&u},
a0j(d,e,f){var x,w,v=0
while(!0){if(e>f){x=v+1
w=v<=4095
v=x}else w=!1
if(!w)break
if(e>4095)return 4098
e=d[e]}return e},
aNO(){var x,w,v=this,u=v.w,t=u[0]
if(t===0){u[0]=v.f.cw()
u=v.w
t=u[0]
if(t===0)return null
D.a5.fG(u,1,1+t,v.f.jV(t).fX())
u=v.w
x=u[1]
u[1]=2
u[0]=u[0]-1}else{w=u[1]
u[1]=w+1
x=u[w]
u[0]=t-1}return x}}
A.L2.prototype={
G(){return"IcoType."+this.b}}
A.b3x.prototype={}
A.ajc.prototype={}
A.b3v.prototype={
gb0(d){return D.c.aZ(A.CT.prototype.gb0.call(this,0),2)},
gLQ(){return!(this.d===40&&this.f===32)&&A.CT.prototype.gLQ.call(this)}}
A.b3w.prototype={
mm(d,e,f){var x,w,v,u=this,t=A.cl(e,!1,null,0)
u.a=t
x=u.b=A.c7s(t)
if(x==null)return null
t=x.e.length
if(t===1)return u.iX(0)
for(w=null,v=0;v<u.b.e.length;++v){f=u.iX(v)
if(f==null)continue
if(w==null){f.w=C.aW
w=f}else w.mc(f)}return w},
iX(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=this.a
if(a6!=null){x=this.b
x=x==null||a7>=x.d}else x=!0
if(x)return a5
w=this.b.e[a7]
x=a6.a
a6=a6.b+w.e
v=w.d
u=J.aM9(x,a6,a6+v)
t=new A.apq(A.c7T())
y.D.a(u)
if(t.Fx(u))return t.cI(0,u)
s=A.oy(!1,14)
s.jY(19778)
s.hu(v)
s.hu(0)
s.hu(0)
a6=A.cl(u,!1,a5,0)
x=A.c4z(A.cl(B.bS(s.c.buffer,0,s.a),!1,a5,0))
v=a6.d
r=a6.ae()
q=a6.ae()
p=$.h5()
p[0]=q
q=$.kq()
o=q[0]
p[0]=a6.ae()
q=q[0]
n=a6.bz()
m=a6.bz()
l=C.Jr[a6.ae()]
a6.ae()
p[0]=a6.ae()
p[0]=a6.ae()
p=a6.ae()
a6.ae()
k=new A.b3v(x,o,q,r,n,m,l,p,v)
k.ad_(a6,x)
if(r!==40&&n!==1)return a5
j=p===0&&m<=8?40+4*D.c.dU(1,m):40+4*p
x.b=j
s.a-=4
s.hu(j)
i=A.cl(u,!1,a5,0)
h=new A.aVN(!0)
h.a=i
h.b=k
g=h.iX(0)
if(m>=32)return g
f=32-D.c.az(o,32)
e=D.c.aZ(f===32?o:o+f,8)
for(a6=1/q<0,x=q<0,q=q===0,d=0;d<D.c.aZ(A.CT.prototype.gb0.call(k,0),2);++d){if(!(q?a6:x))a0=d
else{v=g.a
v=v==null?a5:v.b
a0=(v==null?0:v)-1-d}a1=i.iS(e)
i.d=i.d+(a1.c-a1.d)
v=g.a
a2=v==null?a5:v.dB(0,a0,a5)
if(a2==null)a2=new A.eI()
for(a3=0;a3<o;){v=J.u(a1.a,a1.d++)
a4=7
while(!0){if(!(a4>-1&&a3<o))break
if((v&D.c.e8(1,a4))>>>0!==0)a2.saO(0,0)
a2.q();++a3;--a4}}}return g}}
A.adi.prototype={}
A.Ee.prototype={}
A.Ef.prototype={}
A.VI.prototype={}
A.b5f.prototype={}
A.zI.prototype={}
A.b5h.prototype={
NL(d){var x,w,v,u,t,s=this,r=A.cl(d,!0,null,0)
s.a=r
x=r.P6(2,0)
if(J.u(x.a,x.d)!==255||J.u(x.a,x.d+1)!==216)return!1
if(s.Dz()!==216)return!1
w=s.Dz()
v=!1
u=!1
while(!0){if(w!==217){r=s.a
r=r.d<r.c}else r=!1
if(!r)break
t=s.a.bz()
if(t<2)break
r=s.a
r.d=r.d+(t-2)
switch(w){case 192:case 193:case 194:v=!0
break
case 218:u=!0
break}w=s.Dz()}return v&&u},
p6(d,e){var x,w,v,u,t,s,r,q,p=this
p.a=A.cl(e,!0,null,0)
p.b86()
if(p.x.length!==1)throw B.d(A.bC("Only single frame JPEGs supported"))
for(x=p.Q,w=0;v=p.d,u=v.z,w<u.length;++w){t=v.y.i(0,u[w])
v=t.a
u=p.d
s=u.f
r=t.b
q=u.r
u=p.aNW(u,t)
v=v===1&&s===2?1:0
x.push(new A.adi(u,v,r===1&&q===2?1:0))}},
b86(){var x,w,v,u,t,s=this
if(s.Dz()!==216)throw B.d(A.bC("Start Of Image marker not found."))
x=s.Dz()
while(!0){if(x!==217){w=s.a
w===$&&B.b()
w=w.d<w.c}else w=!1
if(!w)break
w=s.a
w===$&&B.b()
v=w.bz()
if(v<2)B.V(A.bC("Invalid Block"))
w=s.a
u=w.iS(v-2)
w.d=w.d+(u.c-u.d)
switch(x){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:s.b87(x,u)
break
case 219:s.b8b(u)
break
case 192:case 193:case 194:s.b8d(x,u)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw B.d(A.bC("Unhandled frame type "+D.c.ko(x,16)))
case 196:s.b8a(u)
break
case 221:s.e=u.bz()
break
case 218:s.b8o(u)
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
break}if(x!==0)throw B.d(A.bC("Unknown JPEG marker "+D.c.ko(x,16)))
break}x=s.Dz()}},
Dz(){var x,w=this,v=w.a
v===$&&B.b()
if(v.d>=v.c)return 0
do{do{x=w.a.cw()
if(x!==255){v=w.a
v=v.d<v.c}else v=!1}while(v)
v=w.a
if(v.d>=v.c)return x
do{x=w.a.cw()
if(x===255){v=w.a
v=v.d<v.c}else v=!1}while(v)
if(x===0){v=w.a
v=v.d<v.c}else v=!1}while(v)
return x},
b8c(d){if(d.ae()!==1165519206)return
if(d.bz()!==0)return
this.r.p6(0,d)},
b87(d,e){var x,w,v,u,t=this,s=e
if(d===224){x=s
w=!1
if(J.u(x.a,x.d)===74){x=s
if(J.u(x.a,x.d+1)===70){x=s
if(J.u(x.a,x.d+2)===73){x=s
if(J.u(x.a,x.d+3)===70){x=s
x=J.u(x.a,x.d+4)===0}else x=w}else x=w}else x=w}else x=w
if(x){x=new A.b5l()
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
s.P6(14+3*w*v,14)}}else if(d===225)t.b8c(s)
else if(d===238){x=s
w=!1
if(J.u(x.a,x.d)===65){x=s
if(J.u(x.a,x.d+1)===100){x=s
if(J.u(x.a,x.d+2)===111){x=s
if(J.u(x.a,x.d+3)===98){x=s
if(J.u(x.a,x.d+4)===101){x=s
x=J.u(x.a,x.d+5)===0}else x=w}else x=w}else x=w}else x=w}else x=w
if(x){t.c=new A.b5f()
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
x.d=J.u(w.a,w.d+11)}}else if(d===254)try{s.bxb()}catch(u){B.aR(u)}},
b8b(d){var x,w,v,u,t,s,r,q
for(x=d.c,w=this.w;v=d.d,u=v<x,u;){u=d.a
d.d=v+1
v=J.u(u,v)
t=D.c.M(v,4)
s=v&15
if(s>=4)throw B.d(A.bC("Invalid number of quantization tables"))
v=w[s]
if(v==null){v=new Int16Array(64)
w[s]=v}for(u=t!==0,r=0;r<64;++r){q=u?d.bz():J.u(d.a,d.d++)
v[C.qF[r]]=q}}if(u)throw B.d(A.bC("Bad length for DQT block"))},
b8d(d,e){var x,w,v,u,t,s,r,q=this
if(q.d!=null)throw B.d(A.bC("Duplicate JPG frame data found."))
x=q.d=new A.ak_(B.C(y.p,y.c),B.a([],y.t))
x.b=d===194
x.c=e.cw()
x=q.d
x.toString
x.d=e.bz()
x=q.d
x.toString
x.e=e.bz()
w=e.cw()
for(x=q.w,v=0;v<w;++v){u=J.u(e.a,e.d++)
t=J.u(e.a,e.d++)
s=D.c.M(t,4)
r=J.u(e.a,e.d++)
q.d.z.push(u)
q.d.y.n(0,u,new A.zI(s&15,t&15,x,r))}q.d.bw2()
q.x.push(q.d)},
b8a(d){var x,w,v,u,t,s,r,q,p,o,n,m
for(x=d.c,w=this.z,v=this.y;u=d.d,u<x;){t=d.a
d.d=u+1
s=J.u(t,u)
r=new Uint8Array(16)
for(q=0,p=0;p<16;++p){r[p]=J.u(d.a,d.d++)
q+=r[p]}o=d.iS(q)
d.d=d.d+(o.c-o.d)
n=o.fX()
if((s&16)!==0){s-=16
m=v}else m=w
if(m.length<=s)D.b.st(m,s+1)
m[s]=this.aO0(r,n)}},
b8o(d){var x,w,v,u,t,s,r,q=this,p=d.cw()
if(p<1||p>4)throw B.d(A.bC("Invalid SOS block"))
x=B.EK(p,new A.b5i(q,d),!0,y.c)
w=d.cw()
v=d.cw()
u=d.cw()
t=D.c.M(u,4)
s=q.a
s===$&&B.b()
r=q.d
t=new A.ak0(s,r,x,q.e,w,v,t&15,u&15)
s=r.w
s===$&&B.b()
t.f=s
t.r=r.b
t.vb(0)},
aO0(d,e){var x,w,v,u,t,s,r,q,p,o,n=B.a([],y.bd),m=16
while(!0){if(!(m>0&&d[m-1]===0))break;--m}x=y.T
n.push(new A.PN(B.a([],x)))
w=n[0]
for(v=0,u=0;u<m;){for(t=0;t<d[u];++t){w=n.pop()
s=w.a
r=s.length
q=w.b
if(r<=q)D.b.st(s,q+1)
s[w.b]=new A.VI(e[v])
for(;s=w.b,s>0;)w=n.pop()
w.b=s+1
n.push(w)
for(;n.length<=u;w=p){s=B.a([],x)
p=new A.PN(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.st(r,o+1)
r[w.b]=new A.Ef(s)}++v}++u
if(u<m){s=B.a([],x)
p=new A.PN(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.st(r,o+1)
r[w.b]=new A.Ef(s)
w=p}}return n[0].a},
aNW(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.e
d===$&&B.b()
x=a1.f
x===$&&B.b()
w=d<<3>>>0
v=new Int32Array(64)
u=new Uint8Array(64)
t=B.bk(x*8,null,!1,y.ac)
for(s=a1.c,r=a1.d,q=0,p=0;p<x;++p){o=p<<3>>>0
for(n=0;n<8;++n,q=m){m=q+1
t[q]=new Uint8Array(w)}for(l=0;l<d;++l){k=s[r]
k.toString
j=a1.r
j===$&&B.b()
A.cL0(k,j[p][l],u,v)
i=l<<3>>>0
for(h=0,g=0;g<8;++g){f=t[o+g]
for(n=0;n<8;++n,h=e){e=h+1
f[i+n]=u[h]}}}}return t}}
A.PN.prototype={}
A.ak_.prototype={
bw2(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.y,w=B.q(x).c,v=B.fr(x,x.r,w);v.q();){u=x.i(0,v.d)
g.f=Math.max(g.f,u.a)
g.r=Math.max(g.r,u.b)}v=g.e
v.toString
g.w=D.d.ex(v/8/g.f)
v=g.d
v.toString
g.x=D.d.ex(v/8/g.r)
for(w=B.fr(x,x.r,w),v=y.h,t=y.bp;w.q();){s=x.i(0,w.d)
s.toString
r=g.e
r.toString
q=s.a
p=D.d.ex(D.d.ex(r/8)*q/g.f)
r=g.d
r.toString
o=s.b
n=D.d.ex(D.d.ex(r/8)*o/g.r)
m=g.w*q
l=g.x*o
k=J.hU(l,t)
for(j=0;j<l;++j){i=J.hU(m,v)
for(h=0;h<m;++h)i[h]=new Int32Array(64)
k[j]=i}s.e=p
s.f=n
s.r=k}}}
A.b5l.prototype={}
A.ak0.prototype={
vb(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.y,g=h.length,f=i.r
f.toString
if(f)if(i.Q===0)x=i.at===0?i.gaQJ():i.gaQL()
else x=i.at===0?i.gaQA():i.gaQC()
else x=i.gaQG()
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
p=D.c.fg(t,v)
o=D.c.az(t,v)
v=r.r
v===$&&B.b()
x.$2(r,v[p][o]);++t;++q}}else{q=0
while(!0){v=i.z
v.toString
if(!(q<v))break
for(s=0;s<g;++s){r=h[s]
n=r.a
m=r.b
for(l=0;l<m;++l)for(k=0;k<n;++k)i.aQR(r,x,t,l,k)}++t;++q}}i.ch=0
v=J.u(w.a,w.d)
j=J.u(w.a,w.d+1)
if(v===255)if(j>=208&&j<=215)w.d+=2
else break}},
zW(){var x,w=this,v=w.ch
if(v>0){--v
w.ch=v
return D.c.mL(w.ay,v)&1}v=w.a
if(v.d>=v.c)return null
x=v.cw()
w.ay=x
if(x===255)if(v.cw()!==0)return null
w.ch=7
return D.c.M(w.ay,7)&1},
IR(d){var x,w=new A.Ef(d)
for(;x=this.zW(),x!=null;){if(w instanceof A.Ef)w=w.a[x]
if(w instanceof A.VI)return w.a}return null},
a20(d){var x,w
for(x=0;d>0;){w=this.zW()
if(w==null)return null
x=(x<<1|w)>>>0;--d}return x},
Jb(d){var x
if(d==null)return 0
if(d===1)return this.zW()===1?1:-1
x=this.a20(d)
if(x==null)return 0
if(x>=D.c.e8(1,d-1))return x
return x+D.c.dU(-1,d)+1},
aQH(d,e){var x,w,v,u,t,s,r=this,q=d.w
q===$&&B.b()
x=r.IR(q)
w=x===0?0:r.Jb(x)
q=d.y
q===$&&B.b()
q+=w
d.y=q
e[0]=q
for(v=1;v<64;){q=d.x
q===$&&B.b()
u=r.IR(q)
if(u==null)break
t=u&15
s=u>>>4
if(t===0){if(s<15)break
v+=16
continue}v+=s
t=r.Jb(t)
e[C.qF[v]]=t;++v}},
aQK(d,e){var x,w,v=d.w
v===$&&B.b()
x=this.IR(v)
w=x===0?0:D.c.dU(this.Jb(x),this.ax)
v=d.y
v===$&&B.b()
v+=w
d.y=v
e[0]=v},
aQM(d,e){var x=e[0],w=this.zW()
w.toString
e[0]=(x|D.c.dU(w,this.ax))>>>0},
aQB(d,e){var x,w,v,u,t,s=this,r=s.CW
if(r>0){s.CW=r-1
return}x=s.Q
w=s.as
for(r=s.ax;x<=w;){v=d.x
v===$&&B.b()
v=s.IR(v)
v.toString
u=v&15
t=v>>>4
if(u===0){if(t<15){r=s.a20(t)
r.toString
s.CW=r+D.c.dU(1,t)-1
break}x+=16
continue}x+=t
e[C.qF[x]]=s.Jb(u)*D.c.dU(1,r);++x}},
aQD(d,e){var x,w,v,u,t,s,r,q=this,p=q.Q,o=q.as
$label0$1:for(x=q.ax,w=0;p<=o;){v=C.qF[p]
u=q.cx
switch(u){case 0:u=d.x
u===$&&B.b()
t=q.IR(u)
if(t==null)throw B.d(A.bC("Invalid progressive encoding"))
s=t&15
w=t>>>4
if(s===0)if(w<15){u=q.a20(w)
u.toString
q.CW=u+D.c.dU(1,w)
q.cx=4}else{q.cx=1
w=16}else{if(s!==1)throw B.d(A.bC("invalid ACn encoding"))
q.cy=q.Jb(s)
q.cx=w!==0?2:3}continue $label0$1
case 1:case 2:r=e[v]
if(r!==0){u=q.zW()
u.toString
e[v]=r+D.c.dU(u,x)}else{--w
if(w===0)q.cx=u===2?3:0}break
case 3:u=e[v]
if(u!==0){r=q.zW()
r.toString
e[v]=u+D.c.dU(r,x)}else{u=q.cy
u===$&&B.b()
e[v]=D.c.dU(u,x)
q.cx=0}break
case 4:u=e[v]
if(u!==0){r=q.zW()
r.toString
e[v]=u+D.c.dU(r,x)}break}++p}if(q.cx===4)if(--q.CW===0)q.cx=0},
aQR(d,e,f,g,h){var x,w,v=this.f
v===$&&B.b()
x=D.c.fg(f,v)*d.b+g
w=D.c.az(f,v)*d.a+h
v=d.r
v===$&&B.b()
if(x>=v.length)return
v=v[x]
if(w>=v.length)return
e.$2(d,v[w])}}
A.ajZ.prototype={
mm(d,e,f){var x=A.c85()
x.p6(0,e)
if(x.x.length!==1)throw B.d(A.bC("only single frame JPEGs supported"))
return A.cJx(x)},
cI(d,e){return this.mm(0,e,null)}}
A.b5g.prototype={
G(){return"JpegChroma."+this.b}}
A.b5j.prototype={
aDL(d){d=D.d.C(D.c.bh(d,1,100))
if(this.at===d)return
this.b0F(d<50?D.d.f3(5000/d):D.c.f3(200-d*2))
this.at=d},
bn0(b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=A.oy(!0,8192)
a8.x7(a9,216)
a8.x7(a9,224)
a9.jY(16)
a9.aQ(74)
a9.aQ(70)
a9.aQ(73)
a9.aQ(70)
a9.aQ(0)
a9.aQ(1)
a9.aQ(1)
a9.aQ(0)
a9.jY(1)
a9.jY(1)
a9.aQ(0)
a9.aQ(0)
a8.bfh(a9,b0.gvi())
a8.bfl(a9)
x=b0.gcm(0)
w=b0.gb0(0)
a8.x7(a9,192)
a9.jY(17)
a9.aQ(8)
a9.jY(w)
a9.jY(x)
a9.aQ(3)
a9.aQ(1)
x=b1===C.GD
a9.aQ(x?17:34)
a9.aQ(0)
a9.aQ(2)
a9.aQ(17)
a9.aQ(1)
a9.aQ(3)
a9.aQ(17)
a9.aQ(1)
a8.bfk(a9)
a8.x7(a9,218)
a9.jY(12)
a9.aQ(3)
a9.aQ(1)
a9.aQ(0)
a9.aQ(2)
a9.aQ(17)
a9.aQ(3)
a9.aQ(17)
a9.aQ(0)
a9.aQ(63)
a9.aQ(0)
a8.ax=0
a8.ay=7
v=b0.gcm(0)
u=b0.gb0(0)
if(x){t=new Float32Array(64)
s=new Float32Array(64)
r=new Float32Array(64)
for(x=a8.c,w=a8.d,q=0,p=0,o=0,n=0;n<u;n+=8)for(m=0;m<v;m+=8){a8.HV(b0,m,n,v,u,t,s,r)
l=a8.e
k=a8.r
k===$&&B.b()
q=a8.uM(a9,t,x,q,l,k)
k=a8.f
l=a8.w
l===$&&B.b()
p=a8.uM(a9,s,w,p,k,l)
o=a8.uM(a9,r,w,o,a8.f,a8.w)}}else{x=y.C
t=J.jE(4,x)
for(j=0;j<4;++j)t[j]=new Float32Array(64)
s=J.jE(4,x)
for(j=0;j<4;++j)s[j]=new Float32Array(64)
r=J.jE(4,x)
for(j=0;j<4;++j)r[j]=new Float32Array(64)
i=new Float32Array(64)
h=new Float32Array(64)
for(x=a8.c,w=a8.d,q=0,p=0,o=0,n=0;n<u;n+=16)for(l=n+8,m=0;m<v;m+=16){k=t[0]
g=s[0]
f=r[0]
a8.HV(b0,m,n,v,u,k,g,f)
e=m+8
d=t[1]
a0=s[1]
a1=r[1]
a8.HV(b0,e,n,v,u,d,a0,a1)
a2=t[2]
a3=s[2]
a4=r[2]
a8.HV(b0,m,l,v,u,a2,a3,a4)
a5=t[3]
a6=s[3]
a7=r[3]
a8.HV(b0,e,l,v,u,a5,a6,a7)
a8.afS(i,g,a0,a3,a6)
a8.afS(h,f,a1,a4,a7)
a7=a8.e
a4=a8.r
a4===$&&B.b()
q=a8.uM(a9,a5,x,a8.uM(a9,a2,x,a8.uM(a9,d,x,a8.uM(a9,k,x,q,a7,a4),a8.e,a8.r),a8.e,a8.r),a8.e,a8.r)
a4=a8.f
a7=a8.w
a7===$&&B.b()
p=a8.uM(a9,i,w,p,a4,a7)
o=a8.uM(a9,h,w,o,a8.f,a8.w)}}x=a8.ay
if(x>=0){++x
a8.uT(a9,B.a([D.c.e8(1,x)-1,x],y.t))}a8.x7(a9,217)
return B.bS(a9.c.buffer,0,a9.a)},
HV(d,e,f,g,h,i,j,k){var x,w,v,u,t,s,r,q,p,o,n
for(x=this.as,w=f+1,v=0;v<64;++v){u=v>>>3
t=f+u
s=e+(v&7)
if(t>=h)t-=w+u-h
if(s>=g)s-=s-g+1
r=d.a
q=r==null?null:r.dB(s,t,null)
if(q==null)q=new A.eI()
if(q.gcJ()!==C.V)q=q.mY(C.V)
p=D.d.C(q.gav(q))
o=D.d.C(q.gaH())
n=D.d.C(q.gaL(q))
i[v]=D.c.M(x[p]+x[o+256]+x[n+512],16)-128
j[v]=D.c.M(x[p+768]+x[o+1024]+x[n+1280],16)-128
k[v]=D.c.M(x[p+1280]+x[o+1536]+x[n+1792],16)-128}},
afS(d,e,f,g,h){var x,w,v
for(x=0;x<64;++x){if(x<32)w=D.c.az(x,8)<4?e:f
else w=D.c.az(x,8)<4?g:h
v=(D.c.aZ(D.c.az(x,32),8)<<4>>>0)+(D.c.az(x,4)<<1>>>0)
d[x]=(w[v]+w[v+1]+w[v+8]+w[v+9])/4}},
x7(d,e){d.aQ(255)
d.aQ(e&255)},
b0F(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(x=i.a,w=0;w<64;++w){v=D.d.f3((C.axI[w]*d+50)/100)
if(v<1)v=1
else if(v>255)v=255
x[C.tx[w]]=v}for(u=i.b,t=0;t<64;++t){s=D.d.f3((C.axJ[t]*d+50)/100)
if(s<1)s=1
else if(s>255)s=255
u[C.tx[t]]=s}for(r=i.c,q=i.d,p=0,o=0;o<8;++o)for(n=0;n<8;++n){m=C.tx[p]
l=x[m]
k=C.Nm[o]
j=C.Nm[n]
r[p]=1/(l*k*j*8)
q[p]=1/(u[m]*k*j*8);++p}},
PK(d,e){var x,w,v,u,t,s=y.t,r=B.a([B.a([],s)],y.cQ)
for(x=0,w=0,v=1;v<=16;++v){for(u=1;u<=d[v];++u){t=e[w]
if(r.length<=t)D.b.st(r,t+1)
r[t]=B.a([x,v],s);++w;++x}x*=2}return r},
b0u(){var x,w,v,u,t,s,r,q,p,o,n
for(x=this.y,w=this.x,v=y.t,u=1,t=2,s=1;s<=15;++s){for(r=u;r<t;++r){q=32767+r
x[q]=s
w[q]=B.a([r,s],v)}for(q=t-1,p=-q,o=-u;p<=o;++p){n=32767+p
x[n]=s
w[n]=B.a([q+p,s],v)}u=u<<1>>>0
t=t<<1>>>0}},
b0G(){var x,w
for(x=this.as,w=0;w<256;++w){x[w]=19595*w
x[w+256]=38470*w
x[w+512]=7471*w+32768
x[w+768]=-11059*w
x[w+1024]=-21709*w
x[w+1280]=32768*w+8421375
x[w+1536]=-27439*w
x[w+1792]=-5329*w}},
aTk(d3,d4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2
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
u[w]=d2>0?D.d.C(d2+0.5):D.d.C(d2-0.5)}return u},
bfh(d,e){var x,w
if(e.gR(0))return
x=A.oy(!1,8192)
e.iy(0,x)
w=B.bS(x.c.buffer,0,x.a)
this.x7(d,225)
d.jY(w.length+8)
d.hu(1165519206)
d.jY(0)
d.lq(w)},
bfl(d){var x,w,v
this.x7(d,219)
d.jY(132)
d.aQ(0)
for(x=this.a,w=0;w<64;++w)d.aQ(x[w])
d.aQ(1)
for(x=this.b,v=0;v<64;++v)d.aQ(x[v])},
bfk(d){var x,w,v,u,t,s,r,q
this.x7(d,196)
d.jY(418)
d.aQ(0)
for(x=0;x<16;){++x
d.aQ(C.Hg[x])}for(w=0;w<=11;++w)d.aQ(C.p2[w])
d.aQ(16)
for(v=0;v<16;){++v
d.aQ(C.Hi[v])}for(u=0;u<=161;++u)d.aQ(C.JE[u])
d.aQ(1)
for(t=0;t<16;){++t
d.aQ(C.Hh[t])}for(s=0;s<=11;++s)d.aQ(C.p2[s])
d.aQ(17)
for(r=0;r<16;){++r
d.aQ(C.Hj[r])}for(q=0;q<=161;++q)d.aQ(C.GP[q])},
uM(d,e,f,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=a2[0],h=a2[240],g=j.aTk(e,f)
for(x=j.Q,w=0;w<64;++w)x[C.tx[w]]=g[w]
v=x[0]
v.toString
u=v-a0
if(u===0){t=a1[0]
t.toString
j.uT(d,t)}else{s=32767+u
a1.toString
t=j.y[s]
t.toString
t=a1[t]
t.toString
j.uT(d,t)
t=j.x[s]
t.toString
j.uT(d,t)}r=63
while(!0){if(!(r>0&&x[r]===0))break;--r}if(r===0){i.toString
j.uT(d,i)
return v}for(t=j.y,q=j.x,p=1;p<=r;){o=p
while(!0){if(!(x[o]===0&&o<=r))break;++o}n=o-p
if(n>=16){m=D.c.M(n,4)
for(l=1;l<=m;++l){h.toString
j.uT(d,h)}n&=15}k=x[o]
k.toString
s=32767+k
k=t[s]
k.toString
k=a2[(n<<4>>>0)+k]
k.toString
j.uT(d,k)
k=q[s]
k.toString
j.uT(d,k)
p=o+1}if(r!==63){i.toString
j.uT(d,i)}return v},
uT(d,e){var x,w=this,v=e[0],u=e[1]-1
for(;u>=0;){if((v&D.c.e8(1,u))>>>0!==0)w.ax=(w.ax|D.c.e8(1,w.ay))>>>0;--u
if(--w.ay<0){x=w.ax
if(x===255){d.aQ(255)
d.aQ(0)}else d.aQ(x)
w.ay=7
w.ax=0}}}}
A.ME.prototype={
G(){return"PngDisposeMode."+this.b}}
A.Zr.prototype={
G(){return"PngBlendMode."+this.b}}
A.Zs.prototype={}
A.ajN.prototype={}
A.AA.prototype={
G(){return"PngFilterType."+this.b}}
A.bfh.prototype={}
A.b4R.prototype={}
A.apq.prototype={
Fx(d){var x,w=A.cl(d,!0,null,0).jV(8)
for(x=0;x<8;++x)if(J.u(w.a,w.d+x)!==D.Lo[x])return!1
return!0},
np(b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0=A.cl(b1,!0,a9,0)
a8.d=b0
x=b0.jV(8)
for(w=0;w<8;++w)if(J.u(x.a,x.d+w)!==D.Lo[w])return a9
for(b0=a8.a,v=b0.cx,u=y.t,t=b0.cy,s=y.L,r=b0.ax;!0;){q=a8.d
p=q.d-q.b
o=q.ae()
n=a8.d.p7(4)
switch(n){case"tEXt":q=a8.d
m=q.iS(o)
q.d=q.d+(m.c-m.d)
l=m.fX()
k=l.length
for(w=0;w<k;++w)if(l[w]===0){q=w+1
r.n(0,D.dl.cI(0,new Uint8Array(l.subarray(0,B.p1(0,w,k)))),D.dl.cI(0,new Uint8Array(l.subarray(q,B.p1(q,a9,k)))))
break}a8.d.d+=4
break
case"pHYs":q=a8.d
m=q.iS(o)
q.d=q.d+(m.c-m.d)
j=A.bK(m,a9,0)
j.ae()
j.ae()
J.u(j.a,j.d++)
a8.d.d+=4
break
case"IHDR":q=a8.d
m=q.iS(o)
q.d=q.d+(m.c-m.d)
i=A.bK(m,a9,0)
h=i.fX()
b0.a=i.ae()
b0.b=i.ae()
b0.c=J.u(i.a,i.d++)
b0.d=J.u(i.a,i.d++)
J.u(i.a,i.d++)
b0.f=J.u(i.a,i.d++)
b0.r=J.u(i.a,i.d++)
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
break}if(a8.d.ae()!==A.vc(h,A.vc(new B.di(n),0)))throw B.d(A.bC("Invalid "+n+" checksum"))
break
case"PLTE":q=a8.d
m=q.iS(o)
q.d=q.d+(m.c-m.d)
b0.w=m.fX()
if(a8.d.ae()!==A.vc(s.a(b0.w),A.vc(new B.di(n),0)))throw B.d(A.bC("Invalid "+n+" checksum"))
break
case"tRNS":q=a8.d
m=q.iS(o)
q.d=q.d+(m.c-m.d)
b0.x=m.fX()
g=a8.d.ae()
q=b0.x
q.toString
if(g!==A.vc(q,A.vc(new B.di(n),0)))throw B.d(A.bC("Invalid "+n+" checksum"))
break
case"IEND":a8.d.d+=4
break
case"gAMA":if(o!==4)throw B.d(A.bC("Invalid gAMA chunk"))
a8.d.ae()
a8.d.d+=4
break
case"IDAT":t.push(p)
q=a8.d
f=q.d+=o
q.d=f+4
break
case"acTL":b0.ch=a8.d.ae()
a8.d.ae()
a8.d.d+=4
break
case"fcTL":a8.d.ae()
e=a8.d.ae()
d=a8.d.ae()
a0=a8.d.ae()
a1=a8.d.ae()
a2=a8.d.bz()
a3=a8.d.bz()
q=a8.d
q=J.u(q.a,q.d++)
f=a8.d
f=J.u(f.a,f.d++)
q=C.awL[q]
f=C.aru[f]
v.push(new A.ajN(B.a([],u),e,d,a0,a1,a2,a3,q,f))
a8.d.d+=4
break
case"fdAT":a8.d.ae()
D.b.gP(v).y.push(p)
q=a8.d
f=q.d+=o-4
q.d=f+4
break
case"bKGD":q=b0.d
if(q===3){q=a8.d
q=J.u(q.a,q.d++);--o
a4=q*3
f=b0.w
a5=f[a4]
a6=f[a4+1]
a7=f[a4+2]
f=b0.x
if(f!=null){q=D.a5.p(f,q)?0:255
f=new Uint8Array(4)
f[0]=a5
f[1]=a6
f[2]=a7
f[3]=q
b0.z=new A.Jq(f)}else{q=new Uint8Array(3)
q[0]=a5
q[1]=a6
q[2]=a7
b0.z=new A.add(q)}}else if(q===0||q===4){a8.d.bz()
o-=2}else if(q===2||q===6){q=a8.d
q.bz()
q.bz()
q.bz()
o-=24}if(o>0)a8.d.d+=o
a8.d.d+=4
break
case"iCCP":b0.Q=a8.d.N8()
q=a8.d
J.u(q.a,q.d++)
q=b0.Q
f=a8.d
m=f.iS(o-(q.length+2))
f.d=f.d+(m.c-m.d)
b0.at=m.fX()
a8.d.d+=4
break
default:q=a8.d
f=q.d+=o
q.d=f+4
break}if(n==="IEND")break
q=a8.d
if(q.d>=q.c)return a9}return b0},
iX(b8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2=null,b3=b0.a,b4=b3.a,b5=b3.b,b6=b3.cx,b7=b6.length
if(b7===0||b8===0){w=B.a([],y.a)
b6=b3.cy
v=b6.length
for(u=0,t=0;t<v;++t){b7=b0.d
b7===$&&B.b()
b7.d=b6[t]
s=b7.ae()
r=b0.d.p7(4)
b7=b0.d
q=b7.iS(s)
b7.d=b7.d+(q.c-q.d)
p=q.fX()
u+=p.length
w.push(p)
if(b0.d.ae()!==A.vc(p,A.vc(new B.di(r),0)))throw B.d(A.bC("Invalid "+r+" checksum"))}b2=new Uint8Array(u)
for(b6=w.length,o=0,n=0;n<w.length;w.length===b6||(0,B.M)(w),++n){p=w[n]
J.bXW(b2,o,p)
o+=p.length}}else{if(b8>=b7)throw B.d(A.bC("Invalid Frame Number: "+b8))
m=b6[b8]
b4=m.b
b5=m.c
w=B.a([],y.a)
for(b6=m.y,u=0,t=0;t<b6.length;++t){b7=b0.d
b7===$&&B.b()
b7.d=b6[t]
s=b7.ae()
b7=b0.d
b7.p7(4)
b7.d+=4
b7=b0.d
q=b7.iS(s-4)
b7.d=b7.d+(q.c-q.d)
p=q.fX()
u+=p.length
w.push(p)}b2=new Uint8Array(u)
for(b6=w.length,o=0,n=0;n<w.length;w.length===b6||(0,B.M)(w),++n){p=w[n]
J.bXW(b2,o,p)
o+=p.length}}b6=b3.d
l=1
if(!(b6===3))if(!(b6===0)){if(b6===4)b6=2
else b6=b6===6?4:3
l=b6}x=null
try{x=C.hE.Au(A.zy(b2,1,b1,0),!1)}catch(k){return b1}j=A.cl(x,!0,b1,0)
b0.c=b0.b=0
i=b1
if(b3.d===3){b6=b3.w
if(b6!=null){h=b6.length/3|0
g=b3.x
b7=g!=null
f=b7?g.length:0
e=b7?4:3
i=new A.rj(new Uint8Array(h*e),h,e)
for(b7=e===4,t=0,d=0;t<h;++t,d+=3){a0=b7&&t<f?g[t]:255
i.OH(t,b6[d],b6[d+1],b6[d+2],a0)}}}if(b3.d===0&&b3.x!=null&&i==null&&b3.c<=8){g=b3.x
a1=g.length
b6=b3.c
h=D.c.e8(1,b6)
i=new A.rj(new Uint8Array(h*4),h,4)
if(b6===1)a2=255
else if(b6===2)a2=85
else{b6=b6===4?17:1
a2=b6}for(t=0;t<h;++t){a3=t*a2
i.OH(t,a3,a3,a3,255)}for(b6=i.b,b7=3<b6,a4=i.c,t=0;t<a1;t+=2){a5=(g[t]&255)<<8|g[t+1]&255
if(a5<h)if(b7)a4[a5*b6+3]=0}}b6=b3.c
if(b6===1)a6=C.eu
else if(b6===2)a6=C.f6
else{if(b6===4)b7=C.f7
else b7=b6===16?C.bH:C.V
a6=b7}b7=b3.d
if(b7===0&&b3.x!=null&&b6>8)l=4
a7=A.fV(b1,b1,a6,0,C.aW,b5,b1,0,b7===2&&b3.x!=null?4:l,i,C.V,b4,!1)
a8=b3.a
a9=b3.b
b3.a=b4
b3.b=b5
b0.e=0
if(b3.r!==0){b6=b5+7>>>3
b0.zU(j,a7,0,0,8,8,b4+7>>>3,b6)
b7=b4+3
b0.zU(j,a7,4,0,8,8,b7>>>3,b6)
b6=b5+3
b0.zU(j,a7,0,4,4,8,b7>>>2,b6>>>3)
b7=b4+1
b0.zU(j,a7,2,0,4,4,b7>>>2,b6>>>2)
b6=b5+1
b0.zU(j,a7,0,2,2,4,b7>>>1,b6>>>2)
b0.zU(j,a7,1,0,2,2,b4>>>1,b6>>>1)
b0.zU(j,a7,0,1,1,2,b4,b5>>>1)}else b0.b7o(j,a7)
b3.a=a8
b3.b=a9
b6=b3.at
if(b6!=null)a7.c=new A.VK(b3.Q,C.xP,b6)
b3=b3.ax
if(b3.a!==0)a7.bg9(b3)
return a7},
mm(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(g.np(e)==null)return f
x=g.a
w=x.cx
v=w.length
if(v===0){x=g.iX(0)
x.toString
return x}for(v=y.g,u=f,t=u,s=0;s<x.ch;++s){a0=w[s]
r=g.iX(s)
if(r==null)continue
if(t==null||u==null){t=r.arA(r.goZ())
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
o=o===(n==null?0:n)&&a0.d===0&&a0.e===0&&a0.x===C.ZN}else o=!1
if(o){q=a0.f
r.y=D.d.C((q===0||a0.r===0?0:q/a0.r)*1000)
t.mc(r)
u=r
continue}i=t.x
u=A.zo((i===$?t.x=B.a([],v):i)[q],!1,!1)
h=p.w
if(h===C.ZP){q=p.d
o=p.e
n=x.z
if(n==null){n=new Uint8Array(4)
m=new A.Jq(n)
n[0]=0
n[1]=0
n[2]=0
n[3]=0
n=m}A.cIX(u,!1,n,q,q+p.b-1,o,o+p.c-1)}else if(h===C.ZQ&&s>1){i=t.x
if(i===$)i=t.x=B.a([],v)
q=p.d
o=p.e
n=p.b
m=p.c
u=A.c1R(u,i[s-2],C.w6,m,n,q,o,m,n,q,o)}q=a0.f
u.y=D.d.C((q===0||a0.r===0?0:q/a0.r)*1000)
q=a0.x===C.ZO?C.w6:C.w5
u=A.c1R(u,r,q,f,f,a0.d,a0.e,f,f,f,f)
t.mc(u)}return t},
cI(d,e){return this.mm(0,e,null)},
zU(a0,a1,a2,a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=e.d
if(d===4)x=2
else if(d===2)x=3
else{d=d===6?4:1
x=d}w=x*e.c
v=D.c.M(w+7,3)
u=D.c.M(w*a6+7,3)
t=B.a([null,null],y.e)
s=B.a([0,0,0,0],y.t)
for(e=a4>1,r=a4-a2,q=a3,p=0,o=0;p<a7;++p,q+=a5,++f.e){n=C.Iu[J.u(a0.a,a0.d++)]
m=a0.iS(u)
a0.d=a0.d+(m.c-m.d)
d=m.fX()
t[o]=d
o=1-o
f.anV(n,v,d,t[o])
f.c=f.b=0
l=new A.kI(d,0,d.length,0,!0)
for(d=r<=1,k=a2,j=0;j<a6;++j,k+=a4){f.al8(l,s)
i=a1.a
i=i==null?null:i.dB(k,q,null)
f.a2r(i==null?new A.eI():i,s)
if(!d||e)for(h=0;h<a4;++h)for(i=q+h,g=0;g<r;++g)f.a2r(a1.jr(k+g,i),s)}}},
b7o(d,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a,e=f.d
if(e===4)x=2
else if(e===2)x=3
else{e=e===6?4:1
x=e}w=x*f.c
v=f.a
u=f.b
t=D.c.M(v*w+7,3)
s=D.c.M(w+7,3)
r=B.bk(t,0,!1,y.p)
q=B.a([r,r],y.S)
p=B.a([0,0,0,0],y.t)
f=a0.a
o=f.gW(f)
o.q()
for(n=0,m=0;n<u;++n,m=j){l=C.Iu[J.u(d.a,d.d++)]
k=d.iS(t)
d.d=d.d+(k.c-k.d)
f=k.fX()
q[m]=f
j=1-m
g.anV(l,s,f,q[j])
g.c=g.b=0
f=q[m]
e=f.length
i=new A.kI(f,0,e,0,!0)
for(h=0;h<v;++h){g.al8(i,p)
g.a2r(o.gJ(o),p)
o.q()}}},
anV(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=f.length
switch(d.a){case 0:break
case 1:for(x=e;x<l;++x)f[x]=f[x]+f[x-e]&255
break
case 2:for(w=g!=null,x=0;x<l;++x){v=w?g[x]:0
f[x]=f[x]+v&255}break
case 3:for(w=g!=null,x=0;x<l;++x){u=x<e?0:f[x-e]
v=w?g[x]:0
f[x]=f[x]+D.c.M(u+v,1)&255}break
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
default:throw B.d(A.bC("Invalid filter value: "+d.j(0)))}},
qQ(d,e){var x,w,v,u,t=this
if(e===0)return 0
if(e===8)return d.cw()
if(e===16)return d.bz()
for(x=d.c;w=t.c,w<e;){w=d.d
if(w>=x)throw B.d(A.bC("Invalid PNG data."))
v=d.a
d.d=w+1
w=J.u(v,w)
v=t.c
t.b=D.c.e8(w,v)
t.c=v+8}if(e===1)u=1
else if(e===2)u=3
else{if(e===4)x=15
else x=0
u=x}x=w-e
w=D.c.f8(t.b,x)
t.c=x
return w&u},
al8(d,e){var x=this,w=x.a,v=w.d
switch(v){case 0:e[0]=x.qQ(d,w.c)
return
case 2:e[0]=x.qQ(d,w.c)
e[1]=x.qQ(d,w.c)
e[2]=x.qQ(d,w.c)
return
case 3:e[0]=x.qQ(d,w.c)
return
case 4:e[0]=x.qQ(d,w.c)
e[1]=x.qQ(d,w.c)
return
case 6:e[0]=x.qQ(d,w.c)
e[1]=x.qQ(d,w.c)
e[2]=x.qQ(d,w.c)
e[3]=x.qQ(d,w.c)
return}throw B.d(A.bC("Invalid color type: "+v+"."))},
a2r(d,e){var x,w,v,u,t,s,r,q,p=this.a,o=p.d
switch(o){case 0:x=p.x
if(x!=null&&p.c>8){p=x[0]
o=x[1]
w=e[0]
d.hx(w,w,w,w!==((p&255)<<24|o&255)>>>0?d.gbP():0)
return}d.ju(e[0],0,0)
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
if(v!==((o&255)<<8|t&255)||w!==((s&255)<<8|r&255)||u!==((q&255)<<8|p&255)){d.hx(v,w,u,d.gbP())
return}}d.ju(v,w,u)
return
case 3:d.sdu(0,e[0])
return
case 4:d.ju(e[0],e[1],0)
return
case 6:d.hx(e[0],e[1],e[2],e[3])
return}throw B.d(A.bC("Invalid color type: "+o+"."))}}
A.apr.prototype={
G(){return"PngFilter."+this.b}}
A.bff.prototype={
mc(d){var x,w,v,u,t,s,r,q,p,o=this,n=8192,m=d.a
m=m==null?null:m.gq4()
if(!(m===!0&&d.gcJ()!==C.bH))m=d.glH()<8&&!d.gpZ()&&d.goZ()>1
else m=!0
if(m)d=d.mY(C.V)
if(o.w==null){m=A.oy(!0,n)
o.w=m
m.lq(B.a([137,80,78,71,13,10,26,10],y.t))
x=A.oy(!0,n)
x.hu(d.gcm(0))
x.hu(d.gb0(0))
x.aQ(d.glH())
if(d.gpZ())m=3
else if(d.goZ()===1)m=0
else if(d.goZ()===2)m=4
else m=d.goZ()===3?2:6
x.aQ(m)
x.aQ(0)
x.aQ(0)
x.aQ(0)
m=o.w
m.toString
o.qY(m,"IHDR",B.bS(x.c.buffer,0,x.a))
m=d.c
if(m!=null){x=A.oy(!0,n)
x.lq(new B.di(m.a))
x.aQ(0)
x.aQ(0)
x.lq(m.bj6())
m=o.w
m.toString
o.qY(m,"iCCP",B.bS(x.c.buffer,0,x.a))}if(d.gpZ()){m=o.a
if(m!=null){m=m.a
m===$&&B.b()
o.apj(m)}else{m=d.a
m=m==null?null:m.ged()
m.toString
o.apj(m)}}if(o.r){x=A.oy(!0,n)
m=o.e
m===$&&B.b()
x.hu(m)
x.hu(o.c)
m=o.w
m.toString
o.qY(m,"acTL",B.bS(x.c.buffer,0,x.a))}}w=d.gpZ()?1:d.goZ()
v=d.gcJ()===C.bH?2:1
m=d.gcm(0)
u=d.gb0(0)
t=d.gb0(0)
s=new Uint8Array(m*u*w*v+t)
o.b7p(0,d,s)
r=C.Dl.at1(s,o.d)
m=d.d
if(m!=null)for(m=B.fr(m,m.r,B.q(m).c);m.q();){u=m.d
t=d.d.i(0,u)
t.toString
x=new A.anW(!0,new Uint8Array(8192))
x.lq(D.o6.cj(u))
x.aQ(0)
x.lq(D.o6.cj(t))
u=o.w
u.toString
t=x.c.buffer
q=x.a
t=new Uint8Array(t,0,q)
o.qY(u,"tEXt",t)}if(o.r){x=A.oy(!0,n)
x.hu(o.f)
x.hu(d.gcm(0))
x.hu(d.gb0(0))
x.hu(0)
x.hu(0)
x.jY(d.y)
x.jY(1000)
x.aQ(1)
x.aQ(0)
m=o.w
m.toString
o.qY(m,"fcTL",B.bS(x.c.buffer,0,x.a));++o.f}if(o.f<=1){m=o.w
m.toString
o.qY(m,"IDAT",r)}else{p=A.oy(!0,n)
p.hu(o.f)
p.lq(r)
m=o.w
m.toString
o.qY(m,"fdAT",B.bS(p.c.buffer,0,p.a));++o.f}},
bo4(d){var x,w=this,v=w.w
if(v==null)return null
w.qY(v,"IEND",B.a([],y.t))
w.f=0
v=w.w
x=B.bS(v.c.buffer,0,v.a)
w.w=null
return x},
bn1(d,e){var x,w,v,u,t,s=this,r=d.gjP().length
if(r<=1){s.e=1
s.r=!1
s.mc(d)}else{r=d.gjP().length
s.e=r
s.r=r>1
s.c=d.r
if(d.gpZ()){x=new A.bbY(new Int32Array(256))
x.b35(256)
x.bfS(d)
s.a=x
for(r=d.gjP(),w=r.length,v=0;v<r.length;r.length===w||(0,B.M)(r),++v){u=r[v]
if(u!==d){x.ajd(u)
x.agu()
x.aiV()
x.af7()}}}for(r=d.gjP(),w=r.length,v=0;v<r.length;r.length===w||(0,B.M)(r),++v){u=r[v]
t=s.a
if(t!=null)s.mc(t.aAT(u))
else s.mc(u)}}r=s.bo4(0)
r.toString
return r},
apj(d){var x,w,v,u=this
if(d.gcJ()===C.V&&d.b===3&&d.a===256){x=u.w
x.toString
u.qY(x,"PLTE",B.bS(d.gfw(d),0,null))}else{x=d.a
w=A.oy(!0,x*3)
for(v=0;v<x;++v){w.aQ(D.d.C(d.m0(v)))
w.aQ(D.d.C(d.lZ(v)))
w.aQ(D.d.C(d.lX(v)))}x=u.w
x.toString
u.qY(x,"PLTE",B.bS(w.c.buffer,0,w.a))}if(d.b===4){x=d.a
w=A.oy(!0,x)
for(v=0;v<x;++v)w.aQ(D.d.C(d.nk(v)))
x=u.w
x.toString
u.qY(x,"tRNS",B.bS(w.c.buffer,0,w.a))}},
qY(d,e,f){d.hu(f.length)
d.lq(new B.di(e))
d.lq(f)
d.hu(A.vc(f,A.vc(new B.di(e),0)))},
b7p(d,e,f){var x,w,v=this,u=e.gpZ()?C.aQI:v.b,t=e.gfw(0),s=e.a.gqn(),r=e.gpZ()?1:e.goZ(),q=D.c.M(r*e.glH()+7,3),p=e.glH()+7>>>3,o=u.a,n=0,m=0,l=null,k=0
while(!0){x=e.a
x=x==null?null:x.b
if(!(k<(x==null?0:x)))break
w=new Uint8Array(t,m,s)
m+=s
switch(o){case 1:n=v.aTy(w,p,q,f,n)
break
case 2:n=v.aTz(w,l,p,f,n)
break
case 3:n=v.aTs(w,l,p,q,f,n)
break
case 4:n=v.aTv(w,l,p,q,f,n)
break
default:n=v.aTu(w,p,f,n)
break}++k
l=w}},
apd(d,e,f,g,h){var x;--d
for(;d>=0;h=x){x=h+1
g[h]=e[f+d];--d}return h},
aTu(d,e,f,g){var x,w,v=g+1
f[g]=0
x=d.length
if(e===1)for(g=v,w=0;w<x;++w,g=v){v=g+1
f[g]=d[w]}else for(g=v,w=0;w<x;w+=e)g=this.apd(e,d,w,f,g)
return g},
aTy(d,e,f,g,h){var x,w,v,u,t,s,r=h+1
g[h]=1
for(h=r,x=0;x<f;x+=e)h=this.apd(e,d,x,g,h)
w=d.length
for(v=e-1,x=f;x<w;x+=e)for(u=v,t=0;t<e;++t,--u,h=r){r=h+1
s=x+u
g[h]=d[s]-d[s-f]&255}return h},
aTz(d,e,f,g,h){var x,w,v,u,t,s,r,q=h+1
g[h]=2
x=d.length
for(w=f-1,v=e!=null,h=q,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,h=q){r=v?e[u+t]:0
q=h+1
g[h]=d[u+t]-r&255}return h},
aTs(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o=i+1
h[i]=3
x=d.length
for(w=f-1,v=e==null,i=o,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=o){r=u+t
q=r<g?0:d[r-g]
p=v?0:e[r]
o=i+1
h[i]=d[r]-(q+p>>>1)}return i},
b5r(d,e,f){var x=d+e-f,w=x>d?x-d:d-x,v=x>e?x-e:e-x,u=x>f?x-f:f-x
if(w<=v&&w<=u)return d
else if(v<=u)return e
return f},
aTv(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m=i+1
h[i]=4
x=d.length
for(w=f-1,v=e==null,i=m,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=m){r=u+t
q=r<g
p=q?0:d[r-g]
o=v?0:e[r]
n=q||v?0:e[r-g]
m=i+1
h[i]=d[r]-this.b5r(p,o,n)&255}return i}}
A.AB.prototype={
G(){return"PnmFormat."+this.b}}
A.FS.prototype={}
A.bfi.prototype={
Fx(d){var x
this.b=A.cl(d,!1,null,0)
x=this.Qs()
if(x==="P1"||x==="P2"||x==="P5"||x==="P3"||x==="P6")return!0
return!1},
mm(d,e,f){if(this.np(e)==null)return null
return this.iX(0)},
np(d){var x,w,v=this
v.b=A.cl(d,!1,null,0)
x=v.Qs()
if(x==="P1"){w=v.a=new A.FS(C.m5)
w.e=C.ZR}else if(x==="P2"){w=v.a=new A.FS(C.m5)
w.e=C.ZS}else if(x==="P5"){w=v.a=new A.FS(C.m5)
w.e=C.A_}else if(x==="P3"){w=v.a=new A.FS(C.m5)
w.e=C.ZT}else if(x==="P6"){w=v.a=new A.FS(C.m5)
w.e=C.A0}else return v.b=null
w.a=v.J7()
w=v.a
w.toString
w.b=v.J7()
w=v.a
if(w.a===0||w.b===0)return v.a=v.b=null
return w},
iX(d){var x,w,v,u,t,s=this,r=null,q=s.a
if(q==null)return r
x=q.e
if(x===C.ZR){x=q.a
w=A.fV(r,r,C.eu,0,C.aW,q.b,r,0,1,r,C.V,x,!1)
for(q=w.a,q=q.gW(q);q.q();){v=q.gJ(q)
if(s.Qs()==="1")v.ju(1,1,1)
else v.ju(0,0,0)}return w}else if(x===C.ZS||x===C.A_){u=s.J7()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.fV(r,r,s.atK(u),0,C.aW,q,r,0,1,r,C.V,x,!1)
for(q=w.a,q=q.gW(q);q.q();){v=q.gJ(q)
t=s.RI(s.a.e,u)
v.ju(t,t,t)}return w}else if(x===C.ZT||x===C.A0){u=s.J7()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.fV(r,r,s.atK(u),0,C.aW,q,r,0,3,r,C.V,x,!1)
for(q=w.a,q=q.gW(q);q.q();)q.gJ(q).ju(s.RI(s.a.e,u),s.RI(s.a.e,u),s.RI(s.a.e,u))
return w}return r},
atK(d){if(d>255)return C.bH
if(d>15)return C.V
if(d>3)return C.f7
if(d>1)return C.f6
return C.eu},
RI(d,e){if(d===C.A_||d===C.A0)return this.b.cw()
return this.J7()},
J7(){var x,w,v=this.Qs()
if(J.aY(v)===0)return 0
try{x=B.dO(v,null)
return x}catch(w){return 0}},
Qs(){var x,w,v,u,t=this.b
if(t==null)return""
x=this.c
if(x.length!==0)return D.b.iw(x,0)
w=D.e.dH(t.bxa())
if(w.length===0)return""
for(;D.e.bg(w,"#");)w=D.e.dH(this.b.axp(70))
t=y.U
v=B.F(new B.ak(B.a(w.split(" "),y.s),new A.bfj(),t),!0,t.h("t.E"))
for(u=0;u<v.length;++u)if(J.aM8(v[u],"#")){D.b.st(v,u)
break}D.b.F(x,v)
if(x.length===0)return""
return D.b.iw(x,0)}}
A.ZL.prototype={
bx9(d,e,f,g,h,i,j){switch(h){case 0:g.toString
this.b8n(d,e,f,g)
break
case 1:if(i==null)i=this.b8j(d,f)
g.toString
this.b8m(d,e,f,g,i,j)
break
default:throw B.d(A.bC("Unsupported compression: "+h))}},
b8j(d,e){var x,w=new Uint16Array(e)
for(x=0;x<e;++x)w[x]=d.bz()
return w},
b8n(d,e,f,g){var x,w=e*f
if(g===16)w*=2
if(w>d.c-d.d){x=new Uint8Array(w)
this.c=x
D.a5.jm(x,0,w,255)
return}this.c=d.jV(w).fX()},
b8m(d,e,f,g,h,i){var x,w,v,u,t,s,r=e*f
if(g===16)r*=2
x=new Uint8Array(r)
this.c=x
w=i*f
if(w>=h.length){D.a5.jm(x,0,r,255)
return}for(v=0,u=0;u<f;++u,w=t){t=w+1
s=d.iS(h[w])
d.d=d.d+(s.c-s.d)
this.aQW(s,this.c,v)
v+=e}},
aQW(d,e,f){var x,w,v,u,t,s,r
for(x=d.c,w=e.length;v=d.d,v<x;){u=d.a
d.d=v+1
v=J.u(u,v)
$.mM()[0]=v
t=$.o2()[0]
if(t<0){t=1-t
v=J.u(d.a,d.d++)
if(f+t>w)t=w-f
for(s=0;s<t;++s,f=r){r=f+1
e[f]=v}}else{++t
if(f+t>w)t=w-f
for(s=0;s<t;++s,f=r){r=f+1
e[f]=J.u(d.a,d.d++)}}}}}
A.rr.prototype={
G(){return"PsdColorMode."+this.b}}
A.bgc.prototype={
gavq(){$===$&&B.b()
return $},
aLW(d){var x,w,v=this
v.as=A.cl(d,!0,null,0)
v.b7T()
if(v.c!==943870035)return
x=v.as.ae()
v.as.jV(x)
x=v.as.ae()
v.as.jV(x)
x=v.as.ae()
v.as.jV(x)
w=v.as
v.at=w.jV(w.c-w.d)},
vb(d){var x,w=this
if(w.c===943870035){x=w.as
x===$&&B.b()
x=x==null}else x=!0
if(x)return!1
w.b8k()
w.at=w.as=null
return!0},
asr(){if(!this.vb(0))return null
return this.bxK()},
bxK(){var x,w=this,v=null,u=w.y
if(u!=null)return u
u=w.a
u=A.fV(v,v,C.V,0,C.aW,w.b,v,0,4,v,C.V,u,!1)
w.y=u
u.T(0)
for(x=0;u=w.gavq(),D.c.H9(x,u.gt(u));++x)w.gavq().i(0,x)
u=w.y
u.toString
return u},
b7T(){var x,w,v=this,u=v.as
u===$&&B.b()
v.c=u.ae()
u=v.as.bz()
v.d=u
if(u!==1){v.c=0
return}x=v.as.jV(6)
for(w=0;w<6;++w)if(J.u(x.a,x.d+w)!==0){v.c=0
return}v.e=v.as.bz()
v.b=v.as.ae()
v.a=v.as.ae()
v.f=v.as.bz()
v.r=C.ayf[v.as.bz()]},
b8k(){var x,w,v,u,t,s,r=this,q=r.at
q===$&&B.b()
q.d=q.b
x=q.bz()
if(x===1){q=r.b
w=r.e
w===$&&B.b()
v=q*w
u=new Uint16Array(v)
for(t=0;t<v;++t)u[t]=r.at.bz()}else u=null
r.x=B.a([],y.Y)
t=0
while(!0){q=r.e
q===$&&B.b()
if(!(t<q))break
q=r.x
w=r.at
w.toString
s=t===3?-1:t
s=new A.ZL(s)
s.bx9(w,r.a,r.b,r.f,x,u,t)
q.push(s);++t}r.y=A.cvu(r.r,r.f,r.a,r.b,r.x)}}
A.bgb.prototype={
mm(d,e,f){var x,w,v,u=null,t=A.c9S(e)
this.a=t
x=1
if(x===1){t=t.asr()
return t}for(w=u,v=0;v<x;++v){t=this.a
f=t==null?u:t.asr()
if(f==null)continue
if(w==null){f.w=C.ah0
w=f}else w.mc(f)}return w}}
A.apU.prototype={}
A.wR.prototype={
aB(d,e){return new A.wR(this.a*e,this.b*e,this.c*e)},
a5(d,e){return new A.wR(this.a+e.a,this.b+e.b,this.c+e.c)},
aa(d,e){return new A.wR(this.a-e.a,this.b-e.b,this.c-e.c)}}
A.kR.prototype={
aB(d,e){var x=this
return new A.kR(x.a*e,x.b*e,x.c*e,x.d*e)},
a5(d,e){var x=this
return new A.kR(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
aa(d,e){var x=this
return new A.kR(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)}}
A.ZO.prototype={
gb0(d){return this.b}}
A.MV.prototype={
gb0(d){return this.f}}
A.apT.prototype={
gb0(d){return this.b}}
A.pP.prototype={
sKo(d){this.a[this.b+1]=d},
NT(){var x=this.e,w=this.d
if(x)return new A.wR(C.eE[w>>>9],C.eE[w>>>4&31],C.dS[w&15])
else return new A.wR(C.dS[w>>>7&15],C.dS[w>>>3&15],C.oS[w&7])},
NV(){var x=this.e,w=this.d
if(x)return new A.kR(C.eE[w>>>9],C.eE[w>>>4&31],C.dS[w&15],255)
else return new A.kR(C.dS[w>>>7&15],C.dS[w>>>3&15],C.oS[w&7],C.oS[w>>>11&7])},
NU(){var x=this.r,w=this.f
if(x)return new A.wR(C.eE[w>>>10],C.eE[w>>>5&31],C.eE[w&31])
else return new A.wR(C.dS[w>>>8&15],C.dS[w>>>4&15],C.dS[w&15])},
NW(){var x=this.r,w=this.f
if(x)return new A.kR(C.eE[w>>>10],C.eE[w>>>5&31],C.eE[w&31],255)
else return new A.kR(C.dS[w>>>8&15],C.dS[w>>>4&15],C.dS[w&15],C.oS[w>>>12&7])},
Iu(){var x=this,w=x.c?1:0,v=x.d,u=x.e?1:0,t=x.f,s=x.r?1:0
return(w|(v&16383)<<1|u<<15|(t&32767)<<16|s<<31)>>>0},
tb(d){var x=this,w=x.a[x.b+1]
x.c=(w&1)===1
x.sKo(x.Iu())
x.d=w>>>1&16383
x.sKo(x.Iu())
x.e=(w>>>15&1)===1
x.sKo(x.Iu())
x.f=w>>>16&32767
x.sKo(x.Iu())
x.r=(w>>>31&1)===1
x.sKo(x.Iu())}}
A.bgd.prototype={
np(d){var x,w=this,v=d.length,u=v-(v>>>1&1431655765)>>>0
u=(u&858993459)+(u>>>2&858993459)
if((u+(u>>>4)>>>0&252645135)*16843009>>>0>>>24===1){x=w.aQF(d)
if(x!=null){w.a=d
return w.b=x}}x=w.aQV(d)
if(x!=null){w.a=d
return w.b=x}x=w.aQT(d)
if(x!=null){w.a=d
return w.b=x}return null},
aQV(d){var x,w,v=A.cl(d,!1,null,0)
if(v.ae()!==52)return null
if(v.ae()!==55727696)return null
x=B.a([0,0,0,0],y.t)
w=new A.MV(x)
v.ae()
w.b=v.ae()
x[0]=v.cw()
x[1]=v.cw()
x[2]=v.cw()
x[3]=v.cw()
v.ae()
v.ae()
w.f=v.ae()
w.r=v.ae()
v.ae()
v.ae()
v.ae()
v.ae()
w.Q=v.ae()
return w},
aQT(d){var x,w,v=A.cl(d,!1,null,0)
if(v.ae()!==52)return null
x=new A.ZO()
x.b=v.ae()
x.a=v.ae()
v.ae()
x.d=v.ae()
v.ae()
x.f=v.ae()
v.ae()
v.ae()
v.ae()
x.y=v.ae()
w=v.ae()
x.z=w
x.Q=v.ae()
if(w!==559044176)return null
return x},
aQF(d){var x,w,v,u,t,s,r=null,q=d.length,p=A.cl(d,!1,r,0)
if(p.ae()!==0)return r
x=new A.apT()
x.b=p.ae()
x.a=p.ae()
p.ae()
p.ae()
p.ae()
p.ae()
p.ae()
p.ae()
p.ae()
w=p.ae()
x.y=w
if(w===559044176)return r
v=0
u=8
if(!(q===32)){t=0
while(!0){if(!(t<10)){v=1
break}s=t<<1>>>0
if((D.c.dU(64,s)&q)>>>0!==0){u=D.c.dU(16,t)
v=1
break}if((D.c.dU(128,s)&q)>>>0!==0){u=D.c.dU(16,t)
break}++t}if(t===10)return r}if((v+1)*2===4)return r
x.b=x.a=u
return x},
iX(d){var x,w,v=this,u=v.b
if(u==null||v.a==null)return null
if(u instanceof A.apT){u=u.a
x=v.b
x=x.gb0(x)
w=v.a
w.toString
return v.a_G(u,x,w)}else if(u instanceof A.ZO){u=v.a
u.toString
return v.aQS(u)}else if(u instanceof A.MV){u=v.a
u.toString
return v.aQU(u)}return null},
mm(d,e,f){if(this.np(e)==null)return null
return this.iX(0)},
aQS(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=d.length
if(m<52||o.b==null)return n
x=o.b
x.toString
y.ab.a(x)
w=A.cl(d,!1,n,0)
w.d+=52
v=x.Q
if(v<1)v=(x.d&4096)!==0?6:1
if(v!==1)return n
u=x.a
t=x.b
if(u*t*x.f/8>m-52)return n
switch(x.d&255){case 16:s=A.fV(n,n,C.V,0,C.aW,t,n,0,4,n,C.V,u,!1)
for(x=s.a,x=x.gW(x);x.q();){r=x.gJ(x)
u=J.u(w.a,w.d++)
t=J.u(w.a,w.d++)
r.sav(0,t&240)
r.saH((t&15)<<4)
r.saL(0,u&240)
r.saO(0,(u&15)<<4)}return s
case 17:s=A.fV(n,n,C.V,0,C.aW,t,n,0,4,n,C.V,u,!1)
for(x=s.a,x=x.gW(x);x.q();){r=x.gJ(x)
q=w.bz()
p=(q&1)!==0?255:0
r.sav(0,q>>>8&248)
r.saH(q>>>3&248)
r.saL(0,(q&62)<<2)
r.saO(0,p)}return s
case 18:s=A.fV(n,n,C.V,0,C.aW,t,n,0,4,n,C.V,u,!1)
for(x=s.a,x=x.gW(x);x.q();){r=x.gJ(x)
r.sav(0,J.u(w.a,w.d++))
r.saH(J.u(w.a,w.d++))
r.saL(0,J.u(w.a,w.d++))
r.saO(0,J.u(w.a,w.d++))}return s
case 19:s=A.fV(n,n,C.V,0,C.aW,t,n,0,3,n,C.V,u,!1)
for(x=s.a,x=x.gW(x);x.q();){r=x.gJ(x)
q=w.bz()
r.sav(0,q>>>8&248)
r.saH(q>>>3&252)
r.saL(0,(q&31)<<3)}return s
case 20:s=A.fV(n,n,C.V,0,C.aW,t,n,0,3,n,C.V,u,!1)
for(x=s.a,x=x.gW(x);x.q();){r=x.gJ(x)
q=w.bz()
r.sav(0,(q&31)<<3)
r.saH(q>>>2&248)
r.saL(0,q>>>7&248)}return s
case 21:s=A.fV(n,n,C.V,0,C.aW,t,n,0,3,n,C.V,u,!1)
for(x=s.a,x=x.gW(x);x.q();){r=x.gJ(x)
r.sav(0,J.u(w.a,w.d++))
r.saH(J.u(w.a,w.d++))
r.saL(0,J.u(w.a,w.d++))}return s
case 22:s=A.fV(n,n,C.V,0,C.aW,t,n,0,1,n,C.V,u,!1)
for(x=s.a,x=x.gW(x);x.q();)x.gJ(x).sav(0,J.u(w.a,w.d++))
return s
case 23:s=A.fV(n,n,C.V,0,C.aW,t,n,0,4,n,C.V,u,!1)
for(x=s.a,x=x.gW(x);x.q();){r=x.gJ(x)
u=J.u(w.a,w.d++)
t=J.u(w.a,w.d++)
r.sav(0,t)
r.saH(t)
r.saL(0,t)
r.saO(0,u)}return s
case 24:return n
case 25:return x.y===0?o.afq(u,t,w.fX()):o.a_G(u,t,w.fX())}return n},
aQU(d){var x,w,v,u=this
if(!(u.b instanceof A.MV))return null
x=A.cl(d,!1,null,0)
w=x.d+=52
v=y.aM.a(u.b)
x.d=w+v.Q
if(v.c[0]===0)switch(v.b){case 2:return u.afq(v.r,v.f,x.fX())
case 3:return u.a_G(v.r,v.f,x.fX())}return null},
afq(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=A.fV(b5,b5,C.V,0,C.aW,c6,b5,0,3,b5,C.V,c5,!1),b7=c5/4|0,b8=b7-1,b9=B.no(c7.buffer,0,b5),c0=new A.pP(b9),c1=new A.pP(B.no(c7.buffer,0,b5)),c2=new A.pP(B.no(c7.buffer,0,b5)),c3=new A.pP(B.no(c7.buffer,0,b5)),c4=new A.pP(B.no(c7.buffer,0,b5))
for(x=0,w=0;x<b7;++x,w+=4)for(v=0,u=0;v<b7;++v,u+=4){c0.b=A.wS(v,x)<<1>>>0
c0.tb(0)
t=b9[c0.b]
s=c0.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&b8)>>>0
o=(p+1&b8)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&b8)>>>0
k=(l+1&b8)>>>0
c1.b=A.wS(l,p)<<1>>>0
c1.tb(0)
c2.b=A.wS(k,p)<<1>>>0
c2.tb(0)
c3.b=A.wS(l,o)<<1>>>0
c3.tb(0)
c4.b=A.wS(k,o)<<1>>>0
c4.tb(0)
j=c1.NT()
i=C.cr[r][0]
h=c2.NT()
g=C.cr[r][1]
f=c3.NT()
e=C.cr[r][2]
d=c4.NT()
a0=C.cr[r][3]
a1=c1.NU()
a2=C.cr[r][0]
a3=c2.NU()
a4=C.cr[r][1]
a5=c3.NU()
a6=C.cr[r][2]
a7=c4.NU()
a8=C.cr[r][3]
a9=C.LW[s+t&3]
b0=a9[0]
b1=a9[1]
b2=D.c.M((j.a*i+h.a*g+f.a*e+d.a*a0)*b0+(a1.a*a2+a3.a*a4+a5.a*a6+a7.a*a8)*b1,7)
b3=D.c.M((j.b*i+h.b*g+f.b*e+d.b*a0)*b0+(a1.b*a2+a3.b*a4+a5.b*a6+a7.b*a8)*b1,7)
b4=D.c.M((j.c*i+h.c*g+f.c*e+d.c*a0)*b0+(a1.c*a2+a3.c*a4+a5.c*a6+a7.c*a8)*b1,7)
b1=b6.a
if(b1!=null)b1.ew(m+u,n,b2,b3,b4)
t=t>>>2;++r}}}return b6},
a_G(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=A.fV(a4,a4,C.V,0,C.aW,b5,a4,0,4,a4,C.V,b4,!1),a6=b4/4|0,a7=a6-1,a8=B.no(b6.buffer,0,a4),a9=new A.pP(a8),b0=new A.pP(B.no(b6.buffer,0,a4)),b1=new A.pP(B.no(b6.buffer,0,a4)),b2=new A.pP(B.no(b6.buffer,0,a4)),b3=new A.pP(B.no(b6.buffer,0,a4))
for(x=0,w=0;x<a6;++x,w+=4)for(v=0,u=0;v<a6;++v,u+=4){a9.b=A.wS(v,x)<<1>>>0
a9.tb(0)
t=a8[a9.b]
s=a9.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&a7)>>>0
o=(p+1&a7)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&a7)>>>0
k=(l+1&a7)>>>0
b0.b=A.wS(l,p)<<1>>>0
b0.tb(0)
b1.b=A.wS(k,p)<<1>>>0
b1.tb(0)
b2.b=A.wS(l,o)<<1>>>0
b2.tb(0)
b3.b=A.wS(k,o)<<1>>>0
b3.tb(0)
j=b0.NV()
i=C.cr[r][0]
h=b1.NV()
g=C.cr[r][1]
g=new A.kR(j.a*i,j.b*i,j.c*i,j.d*i).a5(0,new A.kR(h.a*g,h.b*g,h.c*g,h.d*g))
h=b2.NV()
i=C.cr[r][2]
i=g.a5(0,new A.kR(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.NV()
g=C.cr[r][3]
f=i.a5(0,new A.kR(h.a*g,h.b*g,h.c*g,h.d*g))
g=b0.NW()
h=C.cr[r][0]
i=b1.NW()
j=C.cr[r][1]
j=new A.kR(g.a*h,g.b*h,g.c*h,g.d*h).a5(0,new A.kR(i.a*j,i.b*j,i.c*j,i.d*j))
i=b2.NW()
h=C.cr[r][2]
h=j.a5(0,new A.kR(i.a*h,i.b*h,i.c*h,i.d*h))
i=b3.NW()
j=C.cr[r][3]
e=h.a5(0,new A.kR(i.a*j,i.b*j,i.c*j,i.d*j))
d=C.LW[s+t&3]
j=d[0]
i=d[1]
a0=D.c.M(f.a*j+e.a*i,7)
a1=D.c.M(f.b*j+e.b*i,7)
a2=D.c.M(f.c*j+e.c*i,7)
a3=D.c.M(f.d*d[2]+e.d*d[3],7)
i=a5.a
if(i!=null)i.jt(m+u,n,a0,a1,a2,a3)
t=t>>>2;++r}}}return a5}}
A.atK.prototype={
p6(d,e){var x,w=this
if(e.c-e.d<18)return
w.a=e.cw()
w.b=e.cw()
x=e.cw()
w.c=x<12?C.aw0[x]:C.uW
e.bz()
w.e=e.bz()
w.f=e.cw()
e.bz()
e.bz()
w.x=e.bz()
w.y=e.bz()
w.z=e.cw()
w.Q=e.cw()},
avf(){var x=this,w=x.z
if(w!==8&&w!==16&&w!==24&&w!==32)return!1
w=x.c
if(w===C.hv||w===C.hw){if(x.e>256||x.b!==1)return!1
w=x.f
if(w!==16&&w!==24&&w!==32)return!1}else if(x.b===1)return!1
return!0}}
A.mx.prototype={
G(){return"TgaImageType."+this.b}}
A.bqw.prototype={
mm(d,e,f){if(this.np(e)==null)return null
return this.iX(0)},
np(d){var x,w,v,u,t=this
t.a=new A.atK(C.uW)
x=A.cl(d,!1,null,0)
t.b=x
w=x.jV(18)
t.a.p6(0,w)
if(!t.a.avf())return null
x=t.b
v=t.a
x.d+=v.a
u=v.c
if(u===C.hv||u===C.hw)v.as=x.jV(v.e*D.c.M(v.f,3)).fX()
x=t.a
x.ax=t.b.d
return x},
iX(d){var x=this,w=x.a
if(w==null)return null
w=w.c
if(w===C.a1x)return x.afp()
else if(w===C.a1w||w===C.hw)return x.aQY()
else if(w===C.hv)return x.afp()
return null},
afk(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=A.cl(d,!1,null,0),m=o.a.f
if(m===16){m=o.b
m===$&&B.b()
x=m.bz()
w=x>>>7&248
v=x>>>2&248
u=(x&31)<<3
t=(x&32768)!==0?0:255
for(s=0;s<o.a.e;++s){e.t_(s,w)
e.rY(s,v)
e.rX(s,u)
e.rW(s,t)}}else{r=m===32
for(s=0;s<o.a.e;++s){m=J.u(n.a,n.d++)
q=J.u(n.a,n.d++)
p=J.u(n.a,n.d++)
t=r?J.u(n.a,n.d++):255
e.t_(s,p)
e.rY(s,q)
e.rX(s,m)
e.rW(s,t)}}},
aQY(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=h.z,f=g===16,e=f||g===32,d=h.x,a0=h.y,a1=e?4:3
h=h.c
x=A.fV(i,i,C.V,0,C.aW,a0,i,0,a1,i,C.V,d,h===C.hv||h===C.hw)
h=x.a
if((h==null?i:h.ged())!=null){h=j.a.as
h.toString
d=x.a
d=d==null?i:d.ged()
d.toString
j.afk(h,d)}w=x.gcm(0)
v=x.gb0(0)-1
h=g===8
u=0
while(!0){d=j.b
d===$&&B.b()
a0=d.d
if(!(a0<d.c&&v>=0))break
a1=d.a
d.d=a0+1
a0=J.u(a1,a0)
t=(a0&127)+1
s=0
if((a0&128)!==0)if(h){d=j.b
d=J.u(d.a,d.d++)
for(r=0;r<t;++r){q=u+1
a0=x.a
if(a0!=null)a0.lr(u,v,d)
if(q>=w){--v
if(v<0){u=s
break}u=0}else u=q}}else{d=j.b
if(f){p=d.bz()
o=p>>>7&248
n=p>>>2&248
m=(p&31)<<3
l=(p&32768)!==0?0:255
for(r=0;r<t;++r){q=u+1
d=x.a
if(d!=null)d.jt(u,v,o,n,m,l)
if(q>=w){--v
if(v<0){u=s
break}u=0}else u=q}}else{d=J.u(d.a,d.d++)
a0=j.b
a0=J.u(a0.a,a0.d++)
a1=j.b
a1=J.u(a1.a,a1.d++)
if(e){k=j.b
l=J.u(k.a,k.d++)}else l=255
for(r=0;r<t;++r){q=u+1
k=x.a
if(k!=null)k.jt(u,v,a1,a0,d,l)
if(q>=w){--v
if(v<0){u=s
break}u=0}else u=q}}}else if(h)for(r=0;r<t;++r){d=j.b
d=J.u(d.a,d.d++)
q=u+1
a0=x.a
if(a0!=null)a0.lr(u,v,d)
if(q>=w){--v
if(v<0){u=s
break}u=0}else u=q}else if(f)for(r=0;r<t;++r){p=j.b.bz()
l=(p&32768)!==0?0:255
q=u+1
d=x.a
if(d!=null)d.jt(u,v,p>>>7&248,p>>>2&248,(p&31)<<3,l)
d=j.b
if(d.d>=d.c){u=q
break}if(q>=w){--v
if(v<0){u=s
break}u=0}else u=q}else for(r=0;r<t;++r){d=j.b
d=J.u(d.a,d.d++)
a0=j.b
a0=J.u(a0.a,a0.d++)
a1=j.b
a1=J.u(a1.a,a1.d++)
if(e){k=j.b
l=J.u(k.a,k.d++)}else l=255
q=u+1
k=x.a
if(k!=null)k.jt(u,v,a1,a0,d,l)
if(q>=w){--v
if(v<0){u=s
break}u=0}else u=q}if(u>=w){--v
if(v<0)break
u=0}}return x},
afp(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b
k===$&&B.b()
x=m.a
k.d=x.ax
w=x.z
k=w===16
v=!0
if(!k)if(w!==32){u=x.c
if(u===C.hv||u===C.hw){u=x.f
u=u===16||u===32}else u=!1
v=u}u=x.x
t=x.y
s=v?4:3
x=x.c
r=A.fV(l,l,C.V,0,C.aW,t,l,0,s,l,C.V,u,x===C.hv||x===C.hw)
x=m.a
u=x.c
if(u===C.hv||u===C.hw){x=x.as
x.toString
u=r.a
u=u==null?l:u.ged()
u.toString
m.afk(x,u)}if(w===8)for(q=r.gb0(0)-1;q>=0;--q){p=0
while(!0){k=r.a
k=k==null?l:k.a
if(!(p<(k==null?0:k)))break
k=m.b
k=J.u(k.a,k.d++)
x=r.a
if(x!=null)x.lr(p,q,k);++p}}else if(k)for(q=r.gb0(0)-1;q>=0;--q){p=0
while(!0){k=r.a
k=k==null?l:k.a
if(!(p<(k==null?0:k)))break
o=m.b.bz()
n=(o&32768)!==0?0:255
k=r.a
if(k!=null)k.jt(p,q,o>>>7&248,o>>>2&248,(o&31)<<3,n);++p}}else for(q=r.gb0(0)-1;q>=0;--q){p=0
while(!0){k=r.a
k=k==null?l:k.a
if(!(p<(k==null?0:k)))break
k=m.b
k=J.u(k.a,k.d++)
x=m.b
x=J.u(x.a,x.d++)
u=m.b
u=J.u(u.a,u.d++)
if(v){t=m.b
n=J.u(t.a,t.d++)}else n=255
t=r.a
if(t!=null)t.jt(p,q,u,x,k,n);++p}}return r}}
A.bqH.prototype={
i6(d){var x,w,v,u,t=this
if(d===0)return 0
if(t.c===0){t.c=8
t.b=t.a.cw()}for(x=t.a,w=0;v=t.c,d>v;){w=D.c.e8(w,v)+(t.b&C.lu[v])
d-=v
t.c=8
t.b=J.u(x.a,x.d++)}if(d>0){if(v===0){t.c=8
t.b=x.cw()}x=D.c.e8(w,d)
v=t.b
u=t.c-d
w=x+(D.c.mL(v,u)&C.lu[d])
t.c=u}return w}}
A.atN.prototype={
j(d){var x=this,w=x.a,v=$.bXM().i(0,w)
if(v!=null)return v.a+": "+x.b.j(0)+" "+x.c
return"<"+w+">: "+x.b.j(0)+" "+x.c},
nU(d){var x,w,v,u=this,t=u.e
if(t!=null)return t
t=u.f
t.d=u.d
x=u.c
w=u.b
v=t.jV(x*(w!==C.L?C.i0[w.a]:0))
switch(w.a){case 1:return u.e=new A.r_(new Uint8Array(B.bv(v.jV(x).fX())))
case 2:return u.e=new A.zl(x===0?"":v.p7(x-1))
case 7:return u.e=new A.r_(new Uint8Array(B.bv(v.jV(x).fX())))
case 3:return u.e=A.c7D(v,x)
case 4:return u.e=A.c7y(v,x)
case 5:return u.e=A.c7z(v,x)
case 11:return u.e=A.c7F(v,x)
case 12:return u.e=A.c7x(v,x)
case 6:return u.e=new A.tX(new Int8Array(B.bv(B.c8T(v.fX().buffer,0,x))))
case 8:return u.e=A.c7C(v,x)
case 9:return u.e=A.c7A(v,x)
case 10:return u.e=A.c7B(v,x)
case 0:return null}}}
A.bqJ.prototype={
blt(d,e,f,g){var x,w,v,u=this
u.r=e
u.x=u.w=0
x=D.c.aZ(u.a+7,8)
for(w=0,v=0;v<g;++v){u.a_E(d,w,f)
w+=x}},
a_E(d,e,f){var x,w,v,u,t,s,r,q,p=this
p.d=0
for(x=p.a,w=!0;f<x;){for(;w;){v=p.wP(10)
u=C.Le[v]
t=D.c.M(u,1)&15
if(t===12){u=C.rA[(v<<2&12|p.nu(2))>>>0]
s=D.c.M(u,1)
f+=D.c.M(u,4)&4095
p.kv(4-(s&7))}else if(t===0)throw B.d(A.bC("TIFFFaxDecoder0"))
else if(t===15)throw B.d(A.bC("TIFFFaxDecoder1"))
else{f+=D.c.M(u,5)&2047
p.kv(10-t)
if((u&1)===0){p.f[p.d++]=f
w=!1}}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}for(;!w;){u=C.J7[p.nu(4)]
r=u>>>5&2047
q=!0
if(r===100){u=C.P4[p.wP(9)]
t=D.c.M(u,1)&15
r=D.c.M(u,5)&2047
if(t===12){p.kv(5)
u=C.rA[p.nu(4)]
s=D.c.M(u,1)
r=D.c.M(u,4)&4095
p.om(d,e,f,r)
f+=r
p.kv(4-(s&7))}else if(t===15)throw B.d(A.bC("TIFFFaxDecoder2"))
else{p.om(d,e,f,r)
f+=r
p.kv(9-t)
if((u&1)===0){p.f[p.d++]=f
w=q}}}else{if(r===200){u=C.Hb[p.nu(2)]
r=u>>>5&2047
p.om(d,e,f,r)
f+=r
p.kv(2-(u>>>1&15))
p.f[p.d++]=f}else{p.om(d,e,f,r)
f+=r
p.kv(4-(u>>>1&15))
p.f[p.d++]=f}w=q}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}}p.f[p.d++]=f},
blu(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.r=a0
e.z=3
e.x=e.w=0
x=e.a
w=D.c.aZ(x+7,8)
v=B.bk(2,null,!1,y.u)
e.at=a3&1
e.as=a3>>>2&1
if(e.al4()!==1)throw B.d(A.bC("TIFFFaxDecoder3"))
e.a_E(d,0,a1)
for(u=w,t=1;t<a2;++t){if(e.al4()===0){s=e.e
e.e=e.f
e.f=s
e.y=0
r=a1
q=-1
p=!0
o=0
while(!0){r.toString
if(!(r<x))break
e.ah9(q,p,v)
n=v[0]
m=v[1]
l=C.O5[e.nu(7)]&255
k=l>>>3&15
j=l&7
if(k===0){if(!p){m.toString
e.om(d,u,r,m-r)}e.kv(7-j)
r=m
q=r}else if(k===1){e.kv(7-j)
i=o+1
h=i+1
if(p){r+=e.PR()
e.f[o]=r
g=e.PQ()
e.om(d,u,r,g)
r+=g
e.f[i]=r}else{g=e.PQ()
e.om(d,u,r,g)
r+=g
e.f[o]=r
r+=e.PR()
e.f[i]=r}o=h
q=r}else{if(k<=8){n.toString
f=n+(k-5)
i=o+1
e.f[o]=f
p=!p
if(p)e.om(d,u,r,f-r)
e.kv(7-j)}else throw B.d(A.bC("TIFFFaxDecoder4"))
r=f
o=i
q=r}}e.f[o]=r
e.d=o+1}else e.a_E(d,u,a1)
u+=w}},
blz(a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.r=a4
a2.z=4
a2.x=a2.w=0
x=a2.a
w=D.c.aZ(x+7,8)
v=B.bk(2,null,!1,y.u)
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
a2.ah9(p,o,v)
m=v[0]
l=v[1]
k=C.O5[a2.nu(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
a2.om(a3,t,q,l-q)}a2.kv(7-i)
q=l
p=q}else if(j===1){a2.kv(7-i)
h=n+1
g=h+1
if(o){q+=a2.PR()
r[n]=q
f=a2.PQ()
a2.om(a3,t,q,f)
q+=f
r[h]=q}else{f=a2.PQ()
a2.om(a3,t,q,f)
q+=f
r[n]=q
q+=a2.PR()
r[h]=q}n=g
p=q}else if(j<=8){m.toString
e=m+(j-5)
h=n+1
r[n]=e
o=!o
if(o)a2.om(a3,t,q,e-q)
a2.kv(7-i)
q=e
n=h
p=q}else if(j===11){if(a2.nu(3)!==7)throw B.d(A.bC("TIFFFaxDecoder5"))
for(d=0,a0=!1;!a0;o=a1){for(;a2.nu(1)!==1;)++d
if(d>5){d-=6
if(!o&&d>0){h=n+1
r[n]=q
n=h}q+=d
if(d>0)o=!0
a1=a2.nu(1)===0
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
a2.om(a3,t,q,1);++q
n=h}}}else throw B.d(A.bC("TIFFFaxDecoder5 "+j))}r[n]=q
a2.d=n+1
t+=w}},
PR(){var x,w,v,u,t,s,r=this
for(x=0,w=!0;w;){v=r.wP(10)
u=C.Le[v]
t=D.c.M(u,1)&15
if(t===12){u=C.rA[(v<<2&12|r.nu(2))>>>0]
s=D.c.M(u,1)
x+=D.c.M(u,4)&4095
r.kv(4-(s&7))}else if(t===0)throw B.d(A.bC("TIFFFaxDecoder0"))
else if(t===15)throw B.d(A.bC("TIFFFaxDecoder1"))
else{x+=D.c.M(u,5)&2047
r.kv(10-t)
if((u&1)===0)w=!1}}return x},
PQ(){var x,w,v,u,t,s,r=this
for(x=0,w=!1;!w;){v=C.J7[r.nu(4)]
u=v>>>5&2047
if(u===100){v=C.P4[r.wP(9)]
t=D.c.M(v,1)&15
s=D.c.M(v,5)
if(t===12){r.kv(5)
v=C.rA[r.nu(4)]
s=D.c.M(v,1)
x+=D.c.M(v,4)&4095
r.kv(4-(s&7))}else if(t===15)throw B.d(A.bC("TIFFFaxDecoder2"))
else{x+=s&2047
r.kv(9-t)
if((v&1)===0)w=!0}}else{if(u===200){v=C.Hb[r.nu(2)]
x+=v>>>5&2047
r.kv(2-(v>>>1&15))}else{x+=u
r.kv(4-(v>>>1&15))}w=!0}}return x},
al4(){var x,w,v=this,u="TIFFFaxDecoder8",t=v.as
if(t===0){if(v.wP(12)!==1)throw B.d(A.bC("TIFFFaxDecoder6"))}else if(t===1){t=v.w
t.toString
x=8-t
if(v.wP(x)!==0)throw B.d(A.bC(u))
if(x<4)if(v.wP(8)!==0)throw B.d(A.bC(u))
for(;w=v.wP(8),w!==1;)if(w!==0)throw B.d(A.bC(u))}if(v.at===0)return 1
else return v.nu(1)},
ah9(d,e,f){var x,w=this,v=w.e,u=w.d,t=w.y,s=t>0?t-1:0
s=e?(s&4294967294)>>>0:(s|1)>>>0
for(x=s;x<u;x+=2){t=v[x]
t.toString
d.toString
if(t>d){w.y=x
f[0]=t
break}}t=x+1
if(t<u)f[1]=v[t]},
om(d,e,f,g){var x,w,v,u,t,s=8*e+f,r=s+g,q=D.c.M(s,3),p=s&7
if(p>0){x=D.c.e8(1,7-p)
w=J.u(d.a,d.d+q)
while(!0){if(!(x>0&&s<r))break
w=(w|x)>>>0
x=x>>>1;++s}d.n(0,q,w)}q=D.c.M(s,3)
for(v=r-7;s<v;q=u){u=q+1
J.bX(d.a,d.d+q,255)
s+=8}for(;s<r;){q=D.c.M(s,3)
v=J.u(d.a,d.d+q)
t=D.c.e8(1,7-(s&7))
J.bX(d.a,d.d+q,(v|t)>>>0);++s}},
wP(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.r
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
r=C.ju[J.u(j.a,x+v)&255]
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=C.ju[J.u(u,x+j)&255]
else{t=C.ju[J.u(u,x+j)&255]
j=k.r
s=C.ju[J.u(j.a,j.d+(v+2))&255]}}}else throw B.d(A.bC("TIFFFaxDecoder7"))
j=k.w
j.toString
q=8-j
p=d-q
if(p>8){o=p-8
n=8}else{n=p
o=0}j=k.x
j.toString
j=k.x=j+1
m=D.c.e8(r&C.lu[q],p)
l=D.c.f8(t&C.yx[n],8-n)
if(o!==0){l=D.c.e8(l,o)|D.c.f8(s&C.yx[o],8-o)
k.x=j+1
k.w=o}else if(n===8){k.w=0
k.x=j+1}else k.w=n
return(m|l)>>>0},
nu(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.r
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
s=C.ju[J.u(m.a,x+v)&255]
if(!(v===w)){m=n.r
t=C.ju[J.u(m.a,m.d+(v+1))&255]}}else throw B.d(A.bC("TIFFFaxDecoder7"))
m=n.w
m.toString
r=8-m
q=d-r
p=r-d
if(p>=0){o=D.c.f8(s&C.lu[r],p)
m+=d
n.w=m
if(m===8){n.w=0
m=n.x
m.toString
n.x=m+1}}else{o=(D.c.e8(s&C.lu[r],-p)|D.c.f8(t&C.yx[q],8-q))>>>0
m=n.x
m.toString
n.x=m+1
n.w=q}return o},
kv(d){var x,w=this,v=w.w
v.toString
x=v-d
if(x<0){v=w.x
v.toString
w.x=v-1
w.w=8+x}else w.w=x}}
A.atO.prototype={
aM7(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=A.bK(a0,f,0),d=a0.bz()
for(x=g.a,w=0;w<d;++w){v=a0.bz()
u=a0.bz()
t=C.Ox[u]
s=C.i0[u]
r=a0.ae()
if(r*s>4)q=a0.ae()
else{q=a0.d
a0.d=q+4}p=new A.atN(v,t,r,q,e)
x.n(0,v,p)
if(v===256){o=p.nU(0)
o=o==null?f:o.C(0)
g.b=o==null?0:o}else if(v===257){o=p.nU(0)
o=o==null?f:o.C(0)
g.c=o==null?0:o}else if(v===262){n=p.nU(0)
m=n==null?f:n.C(0)
if(m==null)m=17
if(m<17)g.d=C.av8[m]
else g.d=C.Bu}else if(v===259){o=p.nU(0)
o=o==null?f:o.C(0)
g.e=o==null?0:o}else if(v===258){o=p.nU(0)
o=o==null?f:o.C(0)
g.f=o==null?0:o}else if(v===277){o=p.nU(0)
o=o==null?f:o.C(0)
g.r=o==null?0:o}else if(v===317){o=p.nU(0)
o=o==null?f:o.C(0)
g.z=o==null?0:o}else if(v===339){o=p.nU(0)
n=o==null?f:o.C(0)
g.w=C.awP[n==null?0:n]}else if(v===320){n=p.nU(0)
if(n!=null){o=n.rJ().buffer
l=D.c.aZ(o.byteLength,2)
o=new Uint16Array(o,0,l)
g.go=o
g.id=0
o=o.length/3|0
g.k1=o
g.k2=o*2}}}k=g.go
o=k!=null
if(o&&g.d===C.Bv)g.r=1
if(g.b===0||g.c===0)return
if(o&&g.f===8){j=k.length
for(w=0;w<j;++w)k[w]=k[w]>>>8}if(g.d===C.Bt)g.y=!0
if(x.Y(0,324)){g.ax=g.DE(322)
g.ay=g.DE(323)
g.ch=g.RH(324)
g.CW=g.RH(325)}else{g.ax=g.RF(322,g.b)
if(!x.Y(0,278))g.ay=g.RF(323,g.c)
else{i=g.DE(278)
if(i===-1)g.ay=g.c
else g.ay=i}g.ch=g.RH(273)
g.CW=g.RH(279)}o=g.b
h=g.ax
g.cx=D.c.fg(o+h-1,h)
h=g.c
o=g.ay
g.cy=D.c.fg(h+o-1,o)
g.dx=g.RF(266,1)
g.dy=g.DE(292)
g.fr=g.DE(293)
g.DE(338)
switch(g.d.a){case 0:case 1:x=g.f
if(x===1&&g.r===1)g.x=C.Bs
else if(x===4&&g.r===1)g.x=C.b08
else if(D.c.az(x,8)===0){x=g.r
if(x===1)g.x=C.b09
else if(x===2)g.x=C.b0a
else g.x=C.uY}break
case 2:if(D.c.az(g.f,8)===0){x=g.r
if(x===3)g.x=C.a1A
else if(x===4)g.x=C.b0c
else g.x=C.uY}break
case 3:x=!1
if(g.r===1)if(g.go!=null){x=g.f
x=x===4||x===8||x===16}if(x)g.x=C.b0b
break
case 4:if(g.f===1&&g.r===1)g.x=C.Bs
break
case 6:if(g.e===7&&g.f===8&&g.r===3)g.x=C.a1A
else{if(x.Y(0,530)){n=x.i(0,530).nU(0)
g.Q=n.C(0)
x=g.as=n.i8(0,1)}else x=g.as=g.Q=2
o=g.Q
o===$&&B.b()
if(o*x===1)g.x=C.uY
else if(g.f===8&&g.r===3)g.x=C.b0d}break
default:if(D.c.az(g.f,8)===0)g.x=C.uY
break}},
cI(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.w,d=e===C.mv,a0=e===C.aO
e=g.f
if(e===1)x=C.eu
else if(e===2)x=C.f6
else{if(e===4)e=C.f7
else if(d&&e===16)e=C.fD
else if(d&&e===32)e=C.hQ
else if(d&&e===64)e=C.jb
else if(a0&&e===8)e=C.jc
else if(a0&&e===16)e=C.jd
else if(a0&&e===32)e=C.je
else if(e===16)e=C.bH
else e=e===32?C.hR:C.V
x=e}w=g.go!=null&&g.d===C.Bv
v=w?3:g.r
e=g.b
u=A.fV(f,f,x,0,C.aW,g.c,f,0,v,f,x,e,w)
if(w){e=u.a
e=e==null?f:e.ged()
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
e.o3(k,t[l],t[m],t[n])}}j=0
i=0
while(!0){e=g.cy
e===$&&B.b()
if(!(j<e))break
h=0
while(!0){e=g.cx
e===$&&B.b()
if(!(h<e))break
g.aQZ(a2,u,h,j);++h;++i}++j}return u},
aQZ(b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null
if(a8.x===C.Bs){a8.aQI(b0,b1,b2,b3)
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
else if(u===5){w=A.cl(new Uint8Array(p),!1,a9,0)
v=A.c8q()
try{J.cm2(v,A.bK(b0,x,0),w.a)}catch(o){}if(a8.z===2)for(n=0;n<a8.ay;++n){m=a8.r
u=a8.ax
l=m*(n*u+1)
k=u*m
for(;m<k;++m){u=w
r=J.u(u.a,u.d+l)
j=w
i=a8.r
i=J.u(j.a,j.d+(l-i))
J.bX(u.a,u.d+l,r+i);++l}}}else if(u===32773){w=A.cl(new Uint8Array(p),!1,a9,0)
a8.afo(b0,p,w.a)}else if(u===32946)w=A.cl(C.hE.Au(A.zy(b0.No(0,0,x),1,a9,0),!1),!1,a9,0)
else if(u===8)w=A.cl(C.hE.Au(A.zy(b0.No(0,0,x),1,a9,0),!1),!1,a9,0)
else if(u===6){a8.b1m(new A.ajZ().cI(0,y.D.a(b0.No(0,0,x))),b1,s,q,a8.ax,a8.ay)
return}else throw B.d(A.bC("Unsupported Compression Type: "+u))
for(h=q,g=0;g<a8.ay;++g,++h)for(f=s,e=0;e<a8.ax;++e,++f){u=w
if(u.d>=u.c)break
u=a8.r
if(u===1){u=a8.w
if(u===C.mv){u=a8.f
if(u===32){u=w.ae()
$.h5()[0]=u
d=$.CE()[0]}else if(u===64)d=w.WW()
else if(u===16){u=w.bz()
r=$.fT
d=(r!=null?r:A.hz())[u]}else d=0
if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.lr(f,h,d)}}else{r=a8.f
if(r===8)if(u===C.aO){u=w
u=J.u(u.a,u.d++)
$.mM()[0]=u
d=$.o2()[0]}else{u=w
d=J.u(u.a,u.d++)}else if(r===16)if(u===C.aO){u=w.bz()
$.p4()[0]=u
d=$.qq()[0]}else d=w.bz()
else if(r===32)if(u===C.aO){u=w.ae()
$.h5()[0]=u
d=$.kq()[0]}else d=w.ae()
else d=0
if(a8.d===C.Bt){u=b1.a
a0=u==null?a9:u.gbP()
d=(a0==null?0:a0)-d}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.lr(f,h,d)}}}else if(u===2){u=a8.f
if(u===8){if(a8.w===C.aO){u=w
u=J.u(u.a,u.d++)
$.mM()[0]=u
a1=$.o2()[0]}else{u=w
a1=J.u(u.a,u.d++)}if(a8.w===C.aO){u=w
u=J.u(u.a,u.d++)
$.mM()[0]=u
a2=$.o2()[0]}else{u=w
a2=J.u(u.a,u.d++)}}else if(u===16){if(a8.w===C.aO){u=w.bz()
$.p4()[0]=u
a1=$.qq()[0]}else a1=w.bz()
if(a8.w===C.aO){u=w.bz()
$.p4()[0]=u
a2=$.qq()[0]}else a2=w.bz()}else if(u===32){if(a8.w===C.aO){u=w.ae()
$.h5()[0]=u
a1=$.kq()[0]}else a1=w.ae()
if(a8.w===C.aO){u=w.ae()
$.h5()[0]=u
a2=$.kq()[0]}else a2=w.ae()}else{a1=0
a2=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.ew(f,h,a1,a2,0)}}else if(u===3){u=a8.w
if(u===C.mv){u=a8.f
if(u===32){u=w.ae()
r=$.h5()
r[0]=u
u=$.CE()
a3=u[0]
r[0]=w.ae()
a4=u[0]
r[0]=w.ae()
a5=u[0]}else{a4=0
a5=0
if(u===64)a3=w.WW()
else if(u===16){u=w.bz()
r=$.fT
a3=(r!=null?r:A.hz())[u]
u=w.bz()
r=$.fT
a4=(r!=null?r:A.hz())[u]
u=w.bz()
r=$.fT
a5=(r!=null?r:A.hz())[u]}else a3=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.ew(f,h,a3,a4,a5)}}else{r=a8.f
if(r===8){if(u===C.aO){u=w
u=J.u(u.a,u.d++)
$.mM()[0]=u
a3=$.o2()[0]}else{u=w
a3=J.u(u.a,u.d++)}if(a8.w===C.aO){u=w
u=J.u(u.a,u.d++)
$.mM()[0]=u
a4=$.o2()[0]}else{u=w
a4=J.u(u.a,u.d++)}if(a8.w===C.aO){u=w
u=J.u(u.a,u.d++)
$.mM()[0]=u
a5=$.o2()[0]}else{u=w
a5=J.u(u.a,u.d++)}}else if(r===16){if(u===C.aO){u=w.bz()
$.p4()[0]=u
a3=$.qq()[0]}else a3=w.bz()
if(a8.w===C.aO){u=w.bz()
$.p4()[0]=u
a4=$.qq()[0]}else a4=w.bz()
if(a8.w===C.aO){u=w.bz()
$.p4()[0]=u
a5=$.qq()[0]}else a5=w.bz()}else if(r===32){if(u===C.aO){u=w.ae()
$.h5()[0]=u
a3=$.kq()[0]}else a3=w.ae()
if(a8.w===C.aO){u=w.ae()
$.h5()[0]=u
a4=$.kq()[0]}else a4=w.ae()
if(a8.w===C.aO){u=w.ae()
$.h5()[0]=u
a5=$.kq()[0]}else a5=w.ae()}else{a3=0
a4=0
a5=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.ew(f,h,a3,a4,a5)}}}else if(u>=4){u=a8.w
if(u===C.mv){u=a8.f
if(u===32){u=w.ae()
r=$.h5()
r[0]=u
u=$.CE()
a3=u[0]
r[0]=w.ae()
a4=u[0]
r[0]=w.ae()
a5=u[0]
r[0]=w.ae()
a6=u[0]}else{a4=0
a5=0
a6=0
if(u===64)a3=w.WW()
else if(u===16){u=w.bz()
r=$.fT
a3=(r!=null?r:A.hz())[u]
u=w.bz()
r=$.fT
a4=(r!=null?r:A.hz())[u]
u=w.bz()
r=$.fT
a5=(r!=null?r:A.hz())[u]
u=w.bz()
r=$.fT
a6=(r!=null?r:A.hz())[u]}else a3=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.jt(f,h,a3,a4,a5,a6)}}else{r=a8.f
if(r===8){if(u===C.aO){u=w
u=J.u(u.a,u.d++)
$.mM()[0]=u
a3=$.o2()[0]}else{u=w
a3=J.u(u.a,u.d++)}if(a8.w===C.aO){u=w
u=J.u(u.a,u.d++)
$.mM()[0]=u
a4=$.o2()[0]}else{u=w
a4=J.u(u.a,u.d++)}if(a8.w===C.aO){u=w
u=J.u(u.a,u.d++)
$.mM()[0]=u
a5=$.o2()[0]}else{u=w
a5=J.u(u.a,u.d++)}if(a8.w===C.aO){u=w
u=J.u(u.a,u.d++)
$.mM()[0]=u
a6=$.o2()[0]}else{u=w
a6=J.u(u.a,u.d++)}}else if(r===16){if(u===C.aO){u=w.bz()
$.p4()[0]=u
a3=$.qq()[0]}else a3=w.bz()
if(a8.w===C.aO){u=w.bz()
$.p4()[0]=u
a4=$.qq()[0]}else a4=w.bz()
if(a8.w===C.aO){u=w.bz()
$.p4()[0]=u
a5=$.qq()[0]}else a5=w.bz()
if(a8.w===C.aO){u=w.bz()
$.p4()[0]=u
a6=$.qq()[0]}else a6=w.bz()}else if(r===32){if(u===C.aO){u=w.ae()
$.h5()[0]=u
a3=$.kq()[0]}else a3=w.ae()
if(a8.w===C.aO){u=w.ae()
$.h5()[0]=u
a4=$.kq()[0]}else a4=w.ae()
if(a8.w===C.aO){u=w.ae()
$.h5()[0]=u
a5=$.kq()[0]}else a5=w.ae()
if(a8.w===C.aO){u=w.ae()
$.h5()[0]=u
a6=$.kq()[0]}else a6=w.ae()}else{a3=0
a4=0
a5=0
a6=0}if(a8.d===C.a1B){a7=A.cfr(a3,a4,a5,a6)
a3=a7[0]
a4=a7[1]
a5=a7[2]
u=b1.a
a6=u==null?a9:u.gbP()
if(a6==null)a6=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.jt(f,h,a3,a4,a5,a6)}}}}}else throw B.d(A.bC("Unsupported bitsPerSample: "+u))},
b1m(d,e,f,g,h,i){var x,w,v,u
for(x=0;x<i;++x)for(w=x+g,v=0;v<h;++v){u=d.a
u=u==null?null:u.dB(v,x,null)
if(u==null)u=new A.eI()
e.wc(v+f,w,u)}},
aQI(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.cx
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
if(r===32773){q=D.c.az(a2,8)===0?D.c.aZ(a2,8)*u:(D.c.aZ(a2,8)+1)*u
x=A.cl(new Uint8Array(a2*u),!1,a1,0)
a0.afo(a3,q,x.a)}else if(r===5){x=A.cl(new Uint8Array(a2*u),!1,a1,0)
A.c8q().EL(0,A.bK(a3,s,0),x.a)
if(a0.z===2)for(p=0;p<a0.c;++p){o=a0.r
n=o*(p*a0.b+1)
for(;o<a0.b*a0.r;++o){a2=x
u=J.u(a2.a,a2.d+n)
r=x
m=a0.r
m=J.u(r.a,r.d+(n-m))
J.bX(a2.a,a2.d+n,u+m);++n}}}else if(r===2){x=A.cl(new Uint8Array(a2*u),!1,a1,0)
try{A.c0e(a0.dx,a0.ax,a0.ay).blt(x,a3,0,a0.ay)}catch(l){}}else if(r===3){x=A.cl(new Uint8Array(a2*u),!1,a1,0)
try{A.c0e(a0.dx,a0.ax,a0.ay).blu(x,a3,0,a0.ay,a0.dy)}catch(l){}}else if(r===4){x=A.cl(new Uint8Array(a2*u),!1,a1,0)
try{A.c0e(a0.dx,a0.ax,a0.ay).blz(x,a3,0,a0.ay,a0.fr)}catch(l){}}else if(r===8)x=A.cl(C.hE.Au(A.zy(a3.No(0,0,s),1,a1,0),!1),!1,a1,0)
else if(r===32946)x=A.cl(C.hE.Au(A.zy(a3.No(0,0,s),1,a1,0),!1),!1,a1,0)
else if(r===1)x=a3
else throw B.d(A.bC("Unsupported Compression Type: "+r))
k=new A.bqH(x)
j=a4.gbP()
a2=a0.y
i=a2?j:0
h=a2?0:j
for(g=t,f=0;f<a0.ay;++f,++g){for(e=v,d=0;d<a0.ax;++d,++e){a2=a4.a
u=a2==null
r=u?a1:a2.b
if(g<(r==null?0:r)){a2=u?a1:a2.a
a2=e>=(a2==null?0:a2)}else a2=!0
if(a2)break
a2=k.i6(1)
u=a4.a
if(a2===0){if(u!=null)u.ew(e,g,i,0,0)}else if(u!=null)u.ew(e,g,h,0,0)}k.c=0}},
afo(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=J.cG(f),w=0,v=0;v<e;){u=w+1
t=J.u(d.a,d.d+w)
$.mM()[0]=t
s=$.o2()[0]
if(s>=0&&s<=127)for(t=s+1,w=u,r=0;r<t;++r,v=q,w=u){q=v+1
u=w+1
x.n(f,v,J.u(d.a,d.d+w))}else{t=s<=-1&&s>=-127
w=u+1
if(t){t=J.u(d.a,d.d+u)
for(p=-s+1,r=0;r<p;++r,v=q){q=v+1
x.n(f,v,t)}}}}},
RF(d,e){var x=this.a
if(!x.Y(0,d))return e
x=x.i(0,d).nU(0)
x=x==null?null:x.C(0)
return x==null?0:x},
DE(d){return this.RF(d,0)},
RH(d){var x,w=this.a
if(!w.Y(0,d))return null
x=w.i(0,d)
w=x.nU(0)
w.toString
return B.EK(x.c,w.gvS(w),!0,y.p)}}
A.H7.prototype={
G(){return"TiffFormat."+this.b}}
A.jr.prototype={
G(){return"TiffPhotometricType."+this.b}}
A.q4.prototype={
G(){return"TiffImageType."+this.b}}
A.bqK.prototype={}
A.b6L.prototype={
EL(d,e,f){var x,w,v,u,t,s,r=this
r.r=f
x=J.aY(f)
r.w=0
w=y.D.a(e.a)
r.e=w
r.f=w.length
r.b=e.d
if(w[0]===0&&w[1]===1)throw B.d(A.bC("Invalid LZW Data"))
r.aiQ()
r.d=r.c=0
v=r.a0i()
w=r.x
u=0
while(!0){if(!(v!==257&&r.w<x))break
if(v===256){r.aiQ()
v=r.a0i()
r.as=0
if(v===257)break
J.bX(r.r,r.w++,v)
u=v}else{t=r.Q
t.toString
if(v<t){r.aho(v)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bX(r.r,r.w++,w[s])
r.adg(u,w[r.as-1])}else{r.aho(u)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bX(r.r,r.w++,w[s])
J.bX(r.r,r.w++,w[r.as-1])
r.adg(u,w[r.as-1])}u=v}v=r.a0i()}},
adg(d,e){var x,w=this,v=w.y
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
aho(d){var x,w,v,u,t,s,r=this
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
a0i(){var x,w,v,u,t=this,s=t.b,r=t.f
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
return D.c.f8(t.c,s)&C.anV[w-9]},
aiQ(){var x,w,v=this
v.y=new Uint8Array(4096)
x=new Uint32Array(4096)
v.z=x
D.cc.jm(x,0,4096,4098)
for(x=v.y,w=0;w<256;++w)x[w]=w
v.a=9
v.Q=258}}
A.bqI.prototype={
iX(d){var x,w,v=this.a
if(v==null)return null
v=v.f[d]
x=this.c
x===$&&B.b()
w=v.cI(0,x)
return w},
mm(d,e,f){var x=this,w=A.cl(e,!1,null,0)
x.c=w
w=x.al6(w)
x.a=w
if(w==null)return null
return x.iX(0)},
al6(d){var x,w,v,u,t,s,r,q,p,o=null,n=B.a([],y.cp),m=new A.bqK(n),l=d.bz()
if(l!==18761&&l!==19789)return o
if(l===19789)d.e=!0
else d.e=!1
v=d.bz()
m.d=v
if(v!==42)return o
u=d.ae()
t=A.bK(d,o,0)
t.d=u
x=t
for(v=y.p,s=y.aL;u!==0;){w=null
try{r=new A.atO(B.C(v,s),C.Bu,C.a1z,C.b0e)
r.aM7(x)
w=r
q=w
if(!(q.b!==0&&q.c!==0))break}catch(p){break}n.push(w)
if(n.length===1){q=n[0]
m.a=q.b
m.b=q.c}u=x.ae()
if(u!==0)x.d=u}return n.length!==0?m:o}}
A.btr.prototype={
KY(){var x,w=this.a,v=w.qh()
if((v&1)!==0)return!1
if((v>>>1&7)>3)return!1
if((v>>>4&1)===0)return!1
this.f.d=v>>>5
if(w.qh()!==2752925)return!1
x=this.b
x.a=w.bz()
x.b=w.bz()
return!0},
vb(d){var x,w,v,u=this,t=null
if(!u.aUP())return t
x=u.b
w=x.a
u.d=A.fV(t,t,C.V,0,C.aW,x.b,t,0,4,t,C.V,w,!1)
u.b0z()
if(!u.b5W())return t
x=x.w
if(x.length!==0){v=A.cl(new B.di(x),!1,t,0)
x=u.d
x.toString
x.e=A.c6I(v)}return u.d},
aUP(){var x,w,v,u,t=this
if(!t.KY())return!1
t.fr=A.czz()
for(x=t.dy,w=0;w<4;++w){v=new Int32Array(2)
u=new Int32Array(2)
x[w]=new A.auy(v,u,new Int32Array(2))}x=t.b
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
u=A.cc9(v.iS(u))
t.c=u
v.d+=x.d
u.cN(1)
t.c.cN(1)
t.b63(t.x,t.fr)
t.b5V()
if(!t.b5Z(v))return!1
t.b60()
t.c.cN(1)
t.b6_()
return!0},
b63(d,e){var x,w,v,u=this,t=u.c
t===$&&B.b()
t=t.cN(1)!==0
d.a=t
if(t){d.b=u.c.cN(1)!==0
if(u.c.cN(1)!==0){d.c=u.c.cN(1)!==0
for(t=d.d,x=0;x<4;++x){if(u.c.cN(1)!==0){w=u.c
v=w.cN(7)
w=w.cN(1)===1?-v:v}else w=0
t[x]=w}for(t=d.e,x=0;x<4;++x){if(u.c.cN(1)!==0){w=u.c
v=w.cN(6)
w=w.cN(1)===1?-v:v}else w=0
t[x]=w}}if(d.b)for(x=0;x<3;++x){t=e.a
t[x]=u.c.cN(1)!==0?u.c.cN(8):255}}else d.b=!1
return!0},
b5V(){var x,w,v,u=this,t=u.w,s=u.c
s===$&&B.b()
t.a=s.cN(1)!==0
t.b=u.c.cN(6)
t.c=u.c.cN(3)
s=u.c.cN(1)!==0
t.d=s
if(s)if(u.c.cN(1)!==0){for(s=t.e,x=0;x<4;++x)if(u.c.cN(1)!==0){w=u.c
v=w.cN(6)
s[x]=w.cN(1)===1?-v:v}for(s=t.f,x=0;x<4;++x)if(u.c.cN(1)!==0){w=u.c
v=w.cN(6)
s[x]=w.cN(1)===1?-v:v}}if(t.b===0)s=0
else s=t.a?1:2
u.bp=s
return!0},
b5Z(d){var x,w,v,u,t,s,r,q=d.c-d.d,p=this.c
p===$&&B.b()
p=D.c.dU(1,p.cN(2))
this.cy=p
x=p-1
w=x*3
if(q<w)return!1
for(p=this.db,v=0,u=0;u<x;++u,w=s){t=d.P6(3,v)
s=w+((J.u(t.a,t.d)|J.u(t.a,t.d+1)<<8|J.u(t.a,t.d+2)<<16)>>>0)
if(s>q)s=q
r=new A.a2e(d.z7(s-w,w))
r.b=254
r.c=0
r.d=-8
p[u]=r
v+=3}p[x]=A.cc9(d.z7(q-w,d.d-d.b+w))
return w<q},
b60(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
h===$&&B.b()
x=h.cN(7)
w=i.c.cN(1)!==0?i.c.H4(4):0
v=i.c.cN(1)!==0?i.c.H4(4):0
u=i.c.cN(1)!==0?i.c.H4(4):0
t=i.c.cN(1)!==0?i.c.H4(4):0
s=i.c.cN(1)!==0?i.c.H4(4):0
r=i.x
for(h=i.dy,q=r.a,p=!r.c,o=r.d,n=0;n<4;++n){if(q){m=o[n]
if(p)m+=x}else{if(n>0){h[n]=h[0]
continue}m=x}l=h[n]
k=l.a
j=m+w
if(j<0)j=0
else if(j>127)j=127
k[0]=C.z_[j]
if(m<0)j=0
else j=m>127?127:m
k[1]=C.yr[j]
j=l.b
k=m+v
if(k<0)k=0
else if(k>127)k=127
j[0]=C.z_[k]*2
k=m+u
if(k<0)k=0
else if(k>127)k=127
j[1]=C.yr[k]*101581>>>16
if(j[1]<8)j[1]=8
k=l.c
j=m+t
if(j<0)j=0
else if(j>117)j=117
k[0]=C.z_[j]
j=m+s
if(j<0)j=0
else if(j>127)j=127
k[1]=C.yr[j]}},
b6_(){var x,w,v,u,t,s,r=this,q=r.fr
for(x=0;x<4;++x)for(w=0;w<8;++w)for(v=0;v<3;++v)for(u=0;u<11;++u){t=r.c
t===$&&B.b()
s=t.hw(C.aqm[x][w][v][u])!==0?r.c.cN(8):C.ayI[x][w][v][u]
q.b[x][w].a[v][u]=s}t=r.c
t===$&&B.b()
t=t.cN(1)!==0
r.fx=t
if(t)r.fy=r.c.cN(8)},
b7E(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.bp
k.toString
if(k>0){x=l.w
for(k=x.e,w=x.f,v=l.x,u=v.e,t=0;t<4;++t){if(v.a){s=u[t]
if(!v.c){r=x.b
r.toString
s+=r}}else s=x.b
for(q=0;q<=1;++q){r=l.al
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
if(r>0){n=r>4?D.c.M(o,2):D.c.M(o,1)
m=9-r
if(n>m)n=m}else n=o
if(n<1)n=1
p.b=n
p.a=2*o+n
if(o>=40)r=2
else r=o>=15?1:0
p.d=r}else p.a=0
p.c=q!==0}}}},
b0z(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k.at
if(j!=null)m.c7=j
x=J.hU(4,y.K)
for(j=y.cr,w=0;w<4;++w)x[w]=B.a([new A.Hg(),new A.Hg()],j)
m.al=x
j=m.at
j.toString
x=J.hU(j,y.bt)
for(v=0;v<j;++v){u=new Uint8Array(16)
t=new Uint8Array(8)
x[v]=new A.auz(u,t,new Uint8Array(8))}m.k2=x
m.ok=new Uint8Array(832)
j=m.at
j.toString
m.go=new Uint8Array(4*j)
u=m.p4=16*j
j=8*j
m.R8=j
t=m.bp
t.toString
s=C.ya[t]
r=s*u
q=(s/2|0)*j
m.p1=A.cl(new Uint8Array(16*u+r),!1,l,r)
j=m.R8
j.toString
m.p2=A.cl(new Uint8Array(8*j+q),!1,l,q)
j=m.R8
j.toString
m.p3=A.cl(new Uint8Array(8*j+q),!1,l,q)
j=k.a
m.RG=A.cl(new Uint8Array(j),!1,l,0)
p=k.a+1>>>1
m.rx=A.cl(new Uint8Array(p),!1,l,0)
m.ry=A.cl(new Uint8Array(p),!1,l,0)
k=m.bp
k.toString
o=C.ya[k]
if(k===2)m.ch=m.ay=0
else{k=m.y
k===$&&B.b()
k=D.c.aZ(k-o,16)
m.ay=k
j=m.Q
j.toString
j=D.c.aZ(j-o,16)
m.ch=j
if(k<0)m.ay=0
if(j<0)m.ch=0}k=m.as
k.toString
k=D.c.aZ(k+15+o,16)
m.cx=k
j=m.z
j===$&&B.b()
j=D.c.aZ(j+15+o,16)
m.CW=j
u=m.at
u.toString
if(j>u)m.CW=u
j=m.ax
j.toString
if(k>j)m.cx=j
n=u+1
x=J.hU(n,y.bQ)
for(v=0;v<n;++v)x[v]=new A.auw()
m.k3=x
k=m.at
k.toString
x=J.hU(k,y.bl)
for(v=0;v<k;++v){j=new Int16Array(384)
x[v]=new A.aux(j,new Uint8Array(16))}m.bo=x
k=m.at
k.toString
m.k4=B.bk(k,l,!1,y.B)
m.b7E()
A.cz0()
m.e=new A.bts()
return!0},
b5W(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
t=j.bo
t===$&&B.b()
p=t[u]
if(w.b){u=j.c
u===$&&B.b()
u=u.hw(j.fr.a[0])
t=j.c
o=j.fr
j.k1=u===0?t.hw(o.a[1]):2+t.hw(o.a[2])}u=j.fx
u===$&&B.b()
if(u){u=j.c
u===$&&B.b()
t=j.fy
t===$&&B.b()
n=u.hw(t)!==0}else n=!1
j.b5X()
if(!n)n=j.b61(q,s)
else{r.a=q.a=0
u=p.b
u===$&&B.b()
if(!u)r.b=q.b=0
p.f=p.e=0}u=j.bp
u.toString
if(u>0){u=j.k4
u===$&&B.b()
t=j.y1
o=j.al
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
D.a5.jm(x,0,4,0)
j.y1=0
j.b8B()
u=j.bp
u.toString
k=!1
if(u>0){u=j.y2
t=j.ch
t===$&&B.b()
if(u>=t){t=j.cx
t.toString
t=u<=t
k=t}}if(!j.aTM(k))return!1
u=++j.y2}return!0},
b8B(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.y2,a4=a1.ok
a4===$&&B.b()
x=A.cl(a4,!1,a2,40)
w=A.cl(a1.ok,!1,a2,584)
v=A.cl(a1.ok,!1,a2,600)
a4=a3>0
u=0
while(!0){t=a1.at
t.toString
if(!(u<t))break
t=a1.bo
t===$&&B.b()
s=t[u]
if(u>0){for(r=-1;r<16;++r){t=r*32
x.qc(t-4,4,x,t+12)}for(r=-1;r<8;++r){t=r*32
q=t-4
t+=4
w.qc(q,4,w,t)
v.qc(q,4,v,t)}}else{for(r=0;r<16;++r)J.bX(x.a,x.d+(r*32-1),129)
for(r=0;r<8;++r){t=r*32-1
J.bX(w.a,w.d+t,129)
J.bX(v.a,v.d+t,129)}if(a4){J.bX(v.a,v.d+-33,129)
J.bX(w.a,w.d+-33,129)
J.bX(x.a,x.d+-33,129)}}t=a1.k2
t===$&&B.b()
p=t[u]
o=s.a
n=s.e
if(a4){x.yc(-32,16,p.a)
w.yc(-32,8,p.b)
v.yc(-32,8,p.c)}else if(u===0){t=x.a
q=x.d+-33
J.qv(t,q,q+21,127)
q=w.a
t=w.d+-33
J.qv(q,t,t+9,127)
t=v.a
q=v.d+-33
J.qv(t,q,q+9,127)}t=s.b
t===$&&B.b()
if(t){m=A.bK(x,a2,-16)
l=m.Nr()
if(a4){t=a1.at
t.toString
if(u>=t-1){t=p.a[15]
q=m.a
k=m.d
J.qv(q,k,k+4,t)}else m.yc(0,4,a1.k2[u+1].a)}j=l[0]
l[96]=j
l[64]=j
l[32]=j
for(t=s.c,i=0;i<16;++i,n=n<<2>>>0){h=A.bK(x,a2,C.Oe[i])
C.ayH[t[i]].$1(h)
n.toString
q=i*16
a1.afQ(n,new A.kI(o,q,384,q,!1),h)}}else{t=A.ccc(u,a3,s.c[0])
t.toString
C.apa[t].$1(x)
if(n!==0)for(i=0;i<16;++i,n=n<<2>>>0){h=A.bK(x,a2,C.Oe[i])
n.toString
t=i*16
a1.afQ(n,new A.kI(o,t,384,t,!1),h)}}t=s.f
t===$&&B.b()
q=A.ccc(u,a3,s.d)
q.toString
C.Nj[q].$1(w)
C.Nj[q].$1(v)
g=new A.kI(o,256,384,256,!1)
if((t&255)!==0){q=a1.e
if((t&170)!==0){q===$&&B.b()
q.ue(g,w)
q.ue(A.bK(g,a2,16),A.bK(w,a2,4))
k=A.bK(g,a2,32)
f=A.bK(w,a2,128)
q.ue(k,f)
q.ue(A.bK(k,a2,16),A.bK(f,a2,4))}else{q===$&&B.b()
q.ayD(g,w)}}e=new A.kI(o,320,384,320,!1)
t=t>>>8
if((t&255)!==0){q=a1.e
if((t&170)!==0){q===$&&B.b()
q.ue(e,v)
q.ue(A.bK(e,a2,16),A.bK(v,a2,4))
t=A.bK(e,a2,32)
k=A.bK(v,a2,128)
q.ue(t,k)
q.ue(A.bK(t,a2,16),A.bK(k,a2,4))}else{q===$&&B.b()
q.ayD(e,v)}}t=a1.ax
t.toString
if(a3<t-1){D.a5.d_(p.a,0,16,x.fX(),480)
D.a5.d_(p.b,0,8,w.fX(),224)
D.a5.d_(p.c,0,8,v.fX(),224)}d=u*16
a0=u*8
for(r=0;r<16;++r){t=a1.p4
t.toString
q=a1.p1
q===$&&B.b()
q.qc(d+r*t,16,x,r*32)}for(r=0;r<8;++r){t=a1.R8
t.toString
q=a1.p2
q===$&&B.b()
k=r*32
q.qc(a0+r*t,8,w,k)
t=a1.R8
t.toString
q=a1.p3
q===$&&B.b()
q.qc(a0+r*t,8,v,k)}++u}},
afQ(d,e,f){var x,w,v,u,t,s
switch(d>>>30){case 3:x=this.e
x===$&&B.b()
x.Nu(0,e,f,!1)
break
case 2:this.e===$&&B.b()
w=J.u(e.a,e.d)+4
v=D.c.jW(D.c.M(J.u(e.a,e.d+4)*35468,16),32)
u=D.c.jW(D.c.M(J.u(e.a,e.d+4)*85627,16),32)
t=D.c.jW(D.c.M(J.u(e.a,e.d+1)*35468,16),32)
s=D.c.jW(D.c.M(J.u(e.a,e.d+1)*85627,16),32)
A.btu(f,0,w+u,s,t)
A.btu(f,1,w+v,s,t)
A.btu(f,2,w-v,s,t)
A.btu(f,3,w-u,s,t)
break
case 1:x=this.e
x===$&&B.b()
x.Nv(e,f)
break
default:break}},
aS8(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.p4,j=m.k4
j===$&&B.b()
j=j[d]
j.toString
x=m.p1
x===$&&B.b()
w=A.bK(x,l,d*16)
v=j.b
u=j.a
if(u===0)return
if(m.bp===1){if(d>0){x=m.e
x===$&&B.b()
k.toString
x.abq(w,k,u+4)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.aET(w,k,u)}if(e>0){x=m.e
x===$&&B.b()
k.toString
x.abr(w,k,u+4)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.aEW(w,k,u)}}else{t=m.R8
x=m.p2
x===$&&B.b()
s=d*8
r=A.bK(x,l,s)
x=m.p3
x===$&&B.b()
q=A.bK(x,l,s)
p=j.d
if(d>0){x=m.e
x===$&&B.b()
k.toString
s=u+4
x.De(w,1,k,16,s,v,p)
t.toString
x.De(r,1,t,8,s,v,p)
x.De(q,1,t,8,s,v,p)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.boy(w,k,u,v,p)
t.toString
o=A.bK(r,l,4)
n=A.bK(q,l,4)
x.Dd(o,1,t,8,u,v,p)
x.Dd(n,1,t,8,u,v,p)}if(e>0){x=m.e
x===$&&B.b()
k.toString
s=u+4
x.De(w,k,1,16,s,v,p)
t.toString
x.De(r,t,1,8,s,v,p)
x.De(q,t,1,8,s,v,p)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.bzn(w,k,u,v,p)
t.toString
x=4*t
o=A.bK(r,l,x)
n=A.bK(q,l,x)
j.Dd(o,t,1,8,u,v,p)
j.Dd(n,t,1,8,u,v,p)}}},
aTx(){var x,w=this,v=w.ay
v===$&&B.b()
x=v
while(!0){v=w.CW
v.toString
if(!(x<v))break
w.aS8(x,w.y2);++x}},
aTM(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.bp
e.toString
x=C.ya[e]
e=g.p4
e.toString
w=x*e
e=g.R8
e.toString
v=(x/2|0)*e
e=g.p1
e===$&&B.b()
u=-w
t=A.bK(e,f,u)
e=g.p2
e===$&&B.b()
s=-v
r=A.bK(e,f,s)
e=g.p3
e===$&&B.b()
q=A.bK(e,f,s)
p=g.y2
e=g.cx
e.toString
o=p*16
n=(p+1)*16
if(d)g.aTx()
if(p!==0){o-=x
g.to=A.bK(t,f,0)
g.x1=A.bK(r,f,0)
g.x2=A.bK(q,f,0)}else{g.to=A.bK(g.p1,f,0)
g.x1=A.bK(g.p2,f,0)
g.x2=A.bK(g.p3,f,0)}e=p<e-1
if(e)n-=x
m=g.as
m.toString
if(n>m)n=m
g.xr=null
if(g.c7!=null&&o<n){m=g.xr=g.aR1(o,n-o)
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
j*=D.c.M(k,1)
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
g.b7Z(0,o-l,m-h,n-o)}if(e){e=g.p1
m=g.p4
m.toString
e.qc(u,w,t,16*m)
m=g.p2
u=g.R8
u.toString
m.qc(s,v,r,8*u)
u=g.p3
m=g.R8
m.toString
u.qc(s,v,q,8*m)}return!0},
b7Z(d,e,f,g){if(f<=0||g<=0)return!1
this.aSN(e,f,g)
this.aSM(e,f,g)
return!0},
a_i(d){var x
if((d&-4194304)>>>0===0)x=D.c.M(d,14)
else x=d<0?0:255
return x},
T1(d,e,f,g){var x=19077*d
g.n(0,0,this.a_i(x+26149*f+-3644112))
g.n(0,1,this.a_i(x-6419*e-13320*f+2229552))
g.n(0,2,this.a_i(x+33050*e+-4527440))},
SN(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=new A.btE(),a0=b3-1,a1=D.c.M(a0,1),a2=d.$2(J.u(a7.a,a7.d),J.u(a8.a,a8.d)),a3=d.$2(J.u(a9.a,a9.d),J.u(b0.a,b0.d)),a4=D.c.M(3*a2+a3+131074,2)
f.T1(J.u(a5.a,a5.d),a4&255,a4>>>16,b1)
b1.n(0,3,255)
x=a6!=null
if(x){a4=D.c.M(3*a3+a2+131074,2)
w=J.u(a6.a,a6.d)
b2.toString
f.T1(w,a4&255,a4>>>16,b2)
b2.n(0,3,255)}for(v=1;v<=a1;++v,a3=t,a2=u){u=d.$2(J.u(a7.a,a7.d+v),J.u(a8.a,a8.d+v))
t=d.$2(J.u(a9.a,a9.d+v),J.u(b0.a,b0.d+v))
s=a2+u+a3+t+524296
r=D.c.M(s+2*(u+a3),3)
q=D.c.M(s+2*(a2+t),3)
a4=D.c.M(r+a2,1)
p=D.c.M(q+u,1)
w=2*v
o=w-1
n=J.u(a5.a,a5.d+o)
m=a4&255
l=a4>>>16
k=o*4
j=A.bK(b1,e,k)
n=19077*n
i=n+26149*l+-3644112
if((i&-4194304)>>>0===0)h=D.c.M(i,14)
else h=i<0?0:255
J.bX(j.a,j.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.M(l,14)
else h=l<0?0:255
J.bX(j.a,j.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.M(n,14)
else h=n<0?0:255
J.bX(j.a,j.d+2,h)
J.bX(j.a,j.d+3,255)
n=J.u(a5.a,a5.d+w)
m=p&255
l=p>>>16
j=w*4
i=A.bK(b1,e,j)
n=19077*n
g=n+26149*l+-3644112
if((g&-4194304)>>>0===0)h=D.c.M(g,14)
else h=g<0?0:255
J.bX(i.a,i.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.M(l,14)
else h=l<0?0:255
J.bX(i.a,i.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.M(n,14)
else h=n<0?0:255
J.bX(i.a,i.d+2,h)
J.bX(i.a,i.d+3,255)
if(x){a4=D.c.M(q+a3,1)
p=D.c.M(r+t,1)
o=J.u(a6.a,a6.d+o)
n=a4&255
m=a4>>>16
b2.toString
k=A.bK(b2,e,k)
o=19077*o
l=o+26149*m+-3644112
if((l&-4194304)>>>0===0)h=D.c.M(l,14)
else h=l<0?0:255
J.bX(k.a,k.d,h)
m=o-6419*n-13320*m+2229552
if((m&-4194304)>>>0===0)h=D.c.M(m,14)
else h=m<0?0:255
J.bX(k.a,k.d+1,h)
o=o+33050*n+-4527440
if((o&-4194304)>>>0===0)h=D.c.M(o,14)
else h=o<0?0:255
J.bX(k.a,k.d+2,h)
J.bX(k.a,k.d+3,255)
w=J.u(a6.a,a6.d+w)
o=p&255
n=p>>>16
j=A.bK(b2,e,j)
w=19077*w
m=w+26149*n+-3644112
if((m&-4194304)>>>0===0)h=D.c.M(m,14)
else h=m<0?0:255
J.bX(j.a,j.d,h)
n=w-6419*o-13320*n+2229552
if((n&-4194304)>>>0===0)h=D.c.M(n,14)
else h=n<0?0:255
J.bX(j.a,j.d+1,h)
w=w+33050*o+-4527440
if((w&-4194304)>>>0===0)h=D.c.M(w,14)
else h=w<0?0:255
J.bX(j.a,j.d+2,h)
J.bX(j.a,j.d+3,255)}}if((b3&1)===0){a4=D.c.M(3*a2+a3+131074,2)
w=J.u(a5.a,a5.d+a0)
o=a0*4
n=A.bK(b1,e,o)
f.T1(w,a4&255,a4>>>16,n)
n.n(0,3,255)
if(x){a4=D.c.M(3*a3+a2+131074,2)
a0=J.u(a6.a,a6.d+a0)
b2.toString
o=A.bK(b2,e,o)
f.T1(a0,a4&255,a4>>>16,o)
o.n(0,3,255)}}},
aSM(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.xr
if(o==null)return
x=A.bK(o,null,0)
if(d===0){w=f-1
v=d}else{v=d-1
x.d=x.d-p.b.a
w=f}o=p.Q
o.toString
u=p.as
if(o+d+f===u){u.toString
w=u-o-v}for(o=p.b,t=0;t<w;++t){for(u=t+v,s=0;s<e;++s){r=J.u(x.a,x.d+s)
q=p.d.a
q=q==null?null:q.dB(s,u,null);(q==null?new A.eI():q).saO(0,r)}x.d=x.d+o.a}},
aSN(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=A.cl(B.bS(l.d.gfw(0),0,k),!1,k,d*j.a*4),h=l.to
h===$&&B.b()
x=A.bK(h,k,0)
h=l.x1
h===$&&B.b()
w=A.bK(h,k,0)
h=l.x2
h===$&&B.b()
v=A.bK(h,k,0)
u=d+f
t=D.c.M(e+1,1)
s=j.a*4
j=l.rx
j===$&&B.b()
r=A.bK(j,k,0)
j=l.ry
j===$&&B.b()
q=A.bK(j,k,0)
if(d===0){l.SN(x,k,w,v,w,v,i,k,e)
p=f}else{j=l.RG
j===$&&B.b()
l.SN(j,x,r,q,w,v,A.bK(i,k,-s),i,e)
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
l.SN(A.bK(x,k,-n),x,r,q,w,v,A.bK(i,k,h),i,e)}j=x.d
h=l.p4
h.toString
x.d=j+h
j=l.Q
j.toString
h=l.as
h.toString
if(j+u<h){j=l.RG
j===$&&B.b()
j.yc(0,e,x)
l.rx.yc(0,t,w)
l.ry.yc(0,t,v);--p}else if((u&1)===0)l.SN(x,k,w,v,w,v,A.bK(i,k,s),k,e)
return p},
aR1(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.b,m=n.a,l=n.b
if(d<0||e<=0||d+e>l)return o
if(d===0){n=m*l
p.ck=new Uint8Array(n)
x=p.c7
w=new A.bul(x,m,l)
v=x.cw()
w.d=v&3
w.e=D.c.M(v,2)&3
w.f=D.c.M(v,4)&3
w.r=D.c.M(v,6)&3
if(w.gel()){u=w.d
if(u===0){if(x.c-x.d<n)w.r=1}else if(u===1){t=new A.auU(C.mC,B.a([],y.J))
t.a=m
t.b=l
n=B.a([],y.A)
u=B.a([],y.F)
s=new Uint32Array(2)
r=new A.auu(x,s)
s=r.d=B.bS(s.buffer,0,o)
s[0]=x.cw()
s[1]=x.cw()
s[2]=x.cw()
s[3]=x.cw()
s[4]=x.cw()
s[5]=x.cw()
s[6]=x.cw()
s[7]=x.cw()
u=new A.ajO(r,t,n,u)
u.db=m
w.x=u
u.Ic(m,l,!0)
n=w.x
x=n.ax
if(x.length===1&&x[0].a===C.a27&&n.b17()){w.y=!0
n=w.x
x=n.c
q=x.a*x.b
n.cx=0
x=D.c.az(q,4)
x=new Uint8Array(q+(4-x))
n.CW=x
n.ch=B.no(x.buffer,0,o)}else{w.y=!1
w.x.adr()}}else w.r=1}p.by=w}n=p.by
n===$&&B.b()
if(!n.w){x=p.ck
x===$&&B.b()
if(!n.KX(0,d,e,x))return o}n=p.ck
n===$&&B.b()
return A.cl(n,!1,o,d*m)},
b61(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.fr.b,a3=a1.k1
a3===$&&B.b()
x=a1.dy[a3]
a3=a1.bo
a3===$&&B.b()
w=a3[a1.y1]
v=A.cl(w.a,!1,null,0)
a3=a1.k3
a3===$&&B.b()
u=a3[0]
v.bsK(0,v.c-v.d,0)
a3=w.b
a3===$&&B.b()
if(!a3){t=A.cl(new Int16Array(16),!1,null,0)
a3=a4.b
s=u.b
r=a1.a0d(a5,a2[1],a3+s,x.b,0,t)
a4.b=u.b=r>0?1:0
if(r>1)a1.bdD(t,v)
else{q=D.c.M(J.u(t.a,t.d)+3,3)
for(p=0;p<256;p+=16)J.bX(v.a,v.d+p,q)}o=a2[0]
n=1}else{o=a2[3]
n=0}m=a4.a&15
l=u.a&15
for(k=0,j=0;j<4;++j){i=l&1
for(h=0,g=0;g<4;++g){r=a1.a0d(a5,o,i+(m&1),x.a,n,v)
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
m=D.c.fP(a4.a,a3)
l=D.c.fP(u.a,a3)
for(h=0,j=0;j<2;++j){i=l&1
for(g=0;g<2;++g){r=a1.a0d(a5,a2[2],i+(m&1),x.c,0,v)
i=r>0?1:0
m=m>>>1|i<<3
a3=J.u(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=(h<<2|a3)>>>0
v.d+=16}m=m>>>2
l=l>>>1|i<<5}d=(d|D.c.dU(h,4*a0))>>>0
e=(e|D.c.dU(m<<4>>>0,a0))>>>0
f=(f|D.c.dU(l&240,a0))>>>0}a4.a=e
u.a=f
w.e=k
w.f=d
if((d&43690)===0)x.toString
return(k|d)>>>0===0},
bdD(d,e){var x,w,v,u,t,s,r,q,p,o,n=new Int32Array(16)
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
u=D.c.M(v+s,3)
J.bX(e.a,e.d+p,u)
u=D.c.M(q+r,3)
J.bX(e.a,e.d+(p+16),u)
u=D.c.M(v-s,3)
J.bX(e.a,e.d+(p+32),u)
u=D.c.M(q-r,3)
J.bX(e.a,e.d+(p+48),u)
p+=64}},
aUX(d,e){var x,w,v,u,t,s
if(d.hw(e[3])===0)x=d.hw(e[4])===0?2:3+d.hw(e[5])
else if(d.hw(e[6])===0)x=d.hw(e[7])===0?5+d.hw(159):7+2*d.hw(165)+d.hw(145)
else{w=d.hw(e[8])
v=2*w+d.hw(e[9+w])
u=C.axi[v]
t=u.length
for(x=0,s=0;s<t;++s)x+=x+d.hw(u[s])
x+=3+D.c.dU(8,v)}return x},
a0d(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=e[h].a[f]
for(;h<16;h=x){if(d.hw(p[0])===0)return h
for(;d.hw(p[1])===0;){++h
p=e[C.Hk[h]].a[0]
if(h===16)return 16}x=h+1
w=e[C.Hk[x]].a
if(d.hw(p[2])===0){p=w[1]
v=1}else{v=this.aUX(d,p)
p=w[2]}u=C.axD[h]
t=d.b
t===$&&B.b()
s=d.adM(D.c.M(t,1))
t=d.b
r=C.O6[t]
d.b=C.J5[t]
t=d.d
t===$&&B.b()
d.d=t-r
t=s!==0?-v:v
q=g[h>0?1:0]
J.bX(i.a,i.d+u,t*q)}return 16},
b5X(){var x,w,v,u,t,s,r,q,p,o=this,n=o.y1,m=4*n,l=o.go,k=o.id,j=o.bo
j===$&&B.b()
x=j[n]
n=o.c
n===$&&B.b()
n=n.hw(145)===0
x.b=n
if(!n){if(o.c.hw(156)!==0)w=o.c.hw(128)!==0?1:3
else w=o.c.hw(163)!==0?2:0
x.c[0]=w
l.toString
D.a5.jm(l,m,m+4,w)
D.a5.jm(k,0,4,w)}else{v=x.c
for(u=0,t=0;t<4;++t,u=p){w=k[t]
for(s=0;s<4;++s){n=m+s
r=C.aw_[l[n]][w]
q=C.Hr[o.c.hw(r[0])]
for(;q>0;)q=C.Hr[2*q+o.c.hw(r[q])]
w=-q
l[n]=w}p=u+4
l.toString
D.a5.d_(v,u,p,l,m)
k[t]=w}}if(o.c.hw(142)===0)n=0
else if(o.c.hw(114)===0)n=2
else n=o.c.hw(183)!==0?1:3
x.d=n}}
A.a2e.prototype={
cN(d){var x,w
for(x=0;w=d-1,d>0;d=w)x=(x|D.c.e8(this.hw(128),w))>>>0
return x},
H4(d){var x=this.cN(d)
return this.cN(1)===1?-x:x},
hw(d){var x,w=this,v=w.b
v===$&&B.b()
x=w.adM(D.c.M(v*d,8))
if(w.b<=126)w.bbg()
return x},
adM(d){var x,w,v,u,t,s=this,r=s.d
r===$&&B.b()
if(r<0){x=s.a
w=x.c
v=x.d
if(w-v>=1){u=x.cw()
r=s.c
r===$&&B.b()
s.c=(u|r<<8)>>>0
r=s.d+8
s.d=r
t=r}else{if(v<w){r=x.cw()
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
if(D.c.mL(r,t)>d){x=s.b
x===$&&B.b()
w=d+1
s.b=x-w
s.c=r-D.c.e8(w,t)
return 1}else{s.b=d
return 0}},
bbg(){var x,w=this,v=w.b
v===$&&B.b()
x=C.O6[v]
w.b=C.J5[v]
v=w.d
v===$&&B.b()
w.d=v-x}}
A.bts.prototype={
abr(d,e,f){var x,w=A.bK(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x
if(this.ajX(w,e,f))this.PX(w,e)}},
abq(d,e,f){var x,w=A.bK(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x*e
if(this.ajX(w,1,f))this.PX(w,1)}},
aEW(d,e,f){var x,w,v=A.bK(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.abr(v,e,f)}},
aET(d,e,f){var x,w=A.bK(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.abq(w,e,f)}},
bzn(d,e,f,g,h){var x,w,v=A.bK(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.Dd(v,e,1,16,f,g,h)}},
boy(d,e,f,g,h){var x,w=A.bK(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.Dd(w,1,e,16,f,g,h)}},
De(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=A.bK(d,null,0)
for(x=-3*e,w=-2*e,v=-e,u=2*e;t=g-1,g>0;g=t){if(this.ajY(h,e,a0,a1))if(this.aip(h,e,a2))this.PX(h,e)
else{s=J.u(h.a,h.d+x)
r=J.u(h.a,h.d+w)
q=J.u(h.a,h.d+v)
p=J.u(h.a,h.d)
o=J.u(h.a,h.d+e)
n=J.u(h.a,h.d+u)
m=$.bXD()
l=m[1020+3*(p-q)+m[1020+r-o]]
m=D.c.M(27*l+63,7)
k=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.M(18*l+63,7)
j=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.M(9*l+63,7)
i=(m&2147483647)-((m&2147483648)>>>0)
s=$.o1()[255+s+i]
J.bX(h.a,h.d+x,s)
r=$.o1()[255+r+j]
J.bX(h.a,h.d+w,r)
q=$.o1()[255+q+k]
J.bX(h.a,h.d+v,q)
p=$.o1()[255+p-k]
J.bX(h.a,h.d,p)
o=$.o1()[255+o-j]
J.bX(h.a,h.d+e,o)
n=$.o1()[255+n-i]
J.bX(h.a,h.d+u,n)}h.d+=f}},
Dd(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=A.bK(d,null,0)
for(x=-2*e,w=-e;v=g-1,g>0;g=v){if(this.ajY(k,e,h,i))if(this.aip(k,e,j))this.PX(k,e)
else{u=J.u(k.a,k.d+x)
t=J.u(k.a,k.d+w)
s=J.u(k.a,k.d)
r=J.u(k.a,k.d+e)
q=3*(s-t)
p=$.aLK()
o=D.c.M(q+4,3)
n=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.M(q+3,3)
m=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.M(n+1,1)
l=(o&2147483647)-((o&2147483648)>>>0)
u=$.o1()[255+u+l]
J.bX(k.a,k.d+x,u)
t=$.o1()[255+t+m]
J.bX(k.a,k.d+w,t)
s=$.o1()[255+s-n]
J.bX(k.a,k.d,s)
r=$.o1()[255+r-l]
J.bX(k.a,k.d+e,r)}k.d+=f}},
PX(d,e){var x=J.u(d.a,d.d+-2*e),w=-e,v=J.u(d.a,d.d+w),u=J.u(d.a,d.d),t=J.u(d.a,d.d+e),s=3*(u-v)+$.bXD()[1020+x-t],r=$.aLK()[112+D.c.jW(D.c.M(s+4,3),32)],q=$.aLK()[112+D.c.jW(D.c.M(s+3,3),32)]
d.n(0,w,$.o1()[255+v+q])
d.n(0,0,$.o1()[255+u-r])},
aip(d,e,f){var x=J.u(d.a,d.d+-2*e),w=J.u(d.a,d.d+-e),v=J.u(d.a,d.d),u=J.u(d.a,d.d+e),t=$.aLJ()
return t[255+x-w]>f||t[255+u-v]>f},
ajX(d,e,f){var x=J.u(d.a,d.d+-2*e),w=J.u(d.a,d.d+-e),v=J.u(d.a,d.d),u=J.u(d.a,d.d+e)
return 2*$.aLJ()[255+w-v]+$.bXC()[255+x-u]<=f},
ajY(d,e,f,g){var x=J.u(d.a,d.d+-4*e),w=J.u(d.a,d.d+-3*e),v=J.u(d.a,d.d+-2*e),u=J.u(d.a,d.d+-e),t=J.u(d.a,d.d),s=J.u(d.a,d.d+e),r=J.u(d.a,d.d+2*e),q=J.u(d.a,d.d+3*e),p=$.aLJ(),o=255+v
if(2*p[255+u-t]+$.bXC()[o-s]>f)return!1
return p[255+x-w]<=g&&p[255+w-v]<=g&&p[o-u]<=g&&p[255+q-r]<=g&&p[255+r-s]<=g&&p[255+s-t]<=g},
ue(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=new Int32Array(16)
for(x=0,w=0,v=0;v<4;++v){u=x+8
t=J.u(d.a,d.d+x)+J.u(d.a,d.d+u)
s=J.u(d.a,d.d+x)-J.u(d.a,d.d+u)
u=x+4
r=D.c.M(J.u(d.a,d.d+u)*35468,16)
q=x+12
p=D.c.M(J.u(d.a,d.d+q)*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.c.M(J.u(d.a,d.d+u)*85627,16)
q=D.c.M(J.u(d.a,d.d+q)*35468,16)
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
r=D.c.M(u*35468,16)
q=j[w+12]
p=D.c.M(q*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.c.M(u*85627,16)
q=D.c.M(q*35468,16)
n=(u&2147483647)-((u&2147483648)>>>0)+((q&2147483647)-((q&2147483648)>>>0))
A.BN(e,l,0,0,t+n)
A.BN(e,l,1,0,s+o)
A.BN(e,l,2,0,s-o)
A.BN(e,l,3,0,t-n);++w
l+=32}},
Nu(d,e,f,g){this.ue(e,f)
if(g)this.ue(A.bK(e,null,16),A.bK(f,null,4))},
Nv(d,e){var x,w,v=J.u(d.a,d.d)+4
for(x=0;x<4;++x)for(w=0;w<4;++w)A.BN(e,0,w,x,v)},
ayD(d,e){var x=this,w=null
if(J.u(d.a,d.d)!==0)x.Nv(d,e)
if(J.u(d.a,d.d+16)!==0)x.Nv(A.bK(d,w,16),A.bK(e,w,4))
if(J.u(d.a,d.d+32)!==0)x.Nv(A.bK(d,w,32),A.bK(e,w,128))
if(J.u(d.a,d.d+48)!==0)x.Nv(A.bK(d,w,48),A.bK(e,w,132))}}
A.btx.prototype={}
A.btB.prototype={}
A.btD.prototype={}
A.a2d.prototype={}
A.btC.prototype={}
A.btt.prototype={}
A.Hg.prototype={}
A.auw.prototype={}
A.auy.prototype={}
A.aux.prototype={}
A.auz.prototype={}
A.a2f.prototype={
KY(){var x,w=this.b
if(w.i6(8)!==47)return!1
x=this.c
x.f=C.v2
x.a=w.i6(14)+1
x.b=w.i6(14)+1
x.d=w.i6(1)!==0
if(w.i6(3)!==0)return!1
return!0},
vb(d){var x,w,v,u,t,s=this,r=null
s.e=0
if(!s.KY())return r
x=s.c
s.Ic(x.a,x.b,!0)
s.adr()
w=x.a
s.d=A.fV(r,r,C.V,0,C.aW,x.b,r,0,4,r,C.V,w,!1)
w=s.ch
w.toString
v=x.a
u=x.b
if(!s.a_D(w,v,u,u,s.gb7L()))return r
x=x.w
if(x.length!==0){t=A.cl(new B.di(x),!1,r,0)
x=s.d
x.toString
x.e=A.c6I(t)}return s.d},
adr(){var x,w=this,v=w.c,u=v.a
v=u*v.b+u
x=new Uint32Array(v+u*16)
w.ch=x
w.CW=B.bS(x.buffer,0,null)
w.cx=v
return!0},
b8s(d){var x,w,v,u=this,t=u.b,s=t.i6(2),r=u.ay,q=D.c.dU(1,s)
if((r&q)>>>0!==0)return!1
u.ay=(r|q)>>>0
x=new A.auv(C.a26)
u.ax.push(x)
r=C.apz[s]
x.a=r
x.b=d[0]
x.c=d[1]
switch(r.a){case 0:case 1:t=t.i6(3)+2
x.e=t
x.d=u.Ic(A.BO(x.b,t),A.BO(x.c,x.e),!1)
break
case 3:w=t.i6(8)+1
if(w>16)v=0
else if(w>4)v=1
else{t=w>2?2:3
v=t}d[0]=A.BO(x.b,v)
x.e=v
x.d=u.Ic(w,1,!1)
u.aTa(w,x)
break
case 2:break
default:throw B.d(A.bC("Invalid WebP transform type: "+s))}return!0},
Ic(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(f)for(x=p.b,w=y.t,v=e,u=d;x.i6(1)!==0;){t=B.a([u,v],w)
if(!p.b8s(t))throw B.d(A.bC("Invalid Transform"))
u=t[0]
v=t[1]}else{v=e
u=d}x=p.b
if(x.i6(1)!==0){s=x.i6(4)
if(!(s>=1&&s<=11))throw B.d(A.bC("Invalid Color Cache"))}else s=0
if(!p.b8h(u,v,s,f))throw B.d(A.bC("Invalid Huffman Codes"))
if(s>0){x=D.c.dU(1,s)
p.r=x
p.w=new A.bty(new Uint32Array(x),32-s)}else p.r=0
x=p.c
x.a=u
x.b=v
r=p.y
p.z=A.BO(u,r)
p.x=r===0?4294967295:D.c.dU(1,r)-1
if(f){p.e=0
return null}q=new Uint32Array(u*v)
if(!p.a_D(q,u,v,v,null))throw B.d(A.bC("Failed to decode image data."))
p.e=0
return q},
a_D(a5,a6,a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e,d=D.c.fg(e,a6),a0=D.c.az(e,a6),a1=f.ah1(a0,d),a2=f.e,a3=a6*a7,a4=a6*a8
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
if((a0&v)>>>0===0){q=f.Iy(f.Q,f.z,f.y,a0,d)
a1=f.at[q]}if(e.a>=32)e.A1()
s=a1.a
p=s[0].yt(e)
o=0
if(p<256){n=s[1].yt(e)
if(e.a>=32)e.A1()
a5[a2]=A.cgH(s[2].yt(e),p,n,s[3].yt(e));++a2;++a0
if(a0>=a6){++d
if(D.c.az(d,16)===0&&u)a9.$1(d)
if(w!=null)for(s=w.b,r=w.a;t<a2;){m=a5[t]
r[D.c.f8(m*506832829>>>0,s)]=m;++t}a0=o}}else if(p<280){l=f.Qk(p-256)
k=s[4].yt(e)
if(e.a>=32)e.A1()
j=f.akK(a6,f.Qk(k))
if(a2<j||a3-a2<l)return!1
else{i=a2-j
for(h=0;h<l;++h)a5[a2+h]=a5[i+h]
a2+=l}a0+=l
for(;a0>=a6;){a0-=a6;++d
if(D.c.az(d,16)===0&&u)a9.$1(d)}if(a2<a4){if((a0&v)>>>0!==0){q=f.Iy(f.Q,f.z,f.y,a0,d)
a1=f.at[q]}if(w!=null)for(s=w.b,r=w.a;t<a2;){m=a5[t]
r[D.c.f8(m*506832829>>>0,s)]=m;++t}}}else if(p<x){for(;t<a2;){s=a5[t]
g=D.c.f8(s*506832829>>>0,w.b)
w.a[g]=s;++t}s=w.a
a5[a2]=s[p-280];++a2;++a0
if(a0>=a6){++d
if(D.c.az(d,16)===0&&u)a9.$1(d)
for(r=w.b;t<a2;){m=a5[t]
s[D.c.f8(m*506832829>>>0,r)]=m;++t}a0=o}}else return!1}if(u)a9.$1(d)
if(s.d>=r&&e.a>=64&&a2<a3)return!1
f.e=a2
return!0},
b17(){var x,w,v,u
if(this.r>0)return!1
for(x=this.as,w=this.at,v=0;v<x;++v){u=w[v].a
if(u[1].f>1)return!1
if(u[2].f>1)return!1
if(u[3].f>1)return!1}return!0},
aTj(d){var x,w,v,u,t,s,r=this,q=r.f,p=d-q
if(p<=0)return
x=r.c
r.adB(p,x.a*q)
w=x.a
v=w*p
u=w*r.f
x=r.ch
x.toString
q=r.cx
q.toString
t=A.cl(x,!1,null,q)
for(s=0;s<v;++s){q=r.cy
q.toString
q[u+s]=D.c.M(J.u(t.a,t.d+s),8)&255}r.f=d},
aQE(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.e,n=D.c.fg(o,d),m=D.c.az(o,d),l=p.ah1(m,n),k=p.e,j=d*e,i=d*f,h=p.x
o=p.b
while(!0){x=o.b
if(!(!(x.d>=x.c&&o.a>=64)&&k<i))break
if((m&h)>>>0===0){w=p.Iy(p.Q,p.z,p.y,m,n)
l=p.at[w]}if(o.a>=32)o.A1()
x=l.a
v=x[0].yt(o)
if(v<256){x=p.CW
x===$&&B.b()
x[k]=v;++k;++m
if(m>=d){++n
if(D.c.az(n,16)===0)p.a0_(n)
m=0}}else if(v<280){u=p.Qk(v-256)
t=x[4].yt(o)
if(o.a>=32)o.A1()
s=p.akK(d,p.Qk(t))
if(k>=s&&j-k>=u)for(x=p.CW,r=0;r<u;++r){x===$&&B.b()
q=k+r
x[q]=x[q-s]}else{p.e=k
return!0}k+=u
m+=u
for(;m>=d;){m-=d;++n
if(D.c.az(n,16)===0)p.a0_(n)}if(k<i&&(m&h)>>>0!==0){w=p.Iy(p.Q,p.z,p.y,m,n)
l=p.at[w]}}else return!1}p.a0_(n)
p.e=k
return!0},
a0_(d){var x,w,v,u=this,t=u.f,s=d-t,r=u.CW
r===$&&B.b()
x=A.cl(r,!1,null,u.c.a*t)
if(s>0){w=u.f
t=u.cy
t.toString
r=u.db
r.toString
v=A.cl(t,!1,null,r*w)
u.ax[0].biO(w,w+s,x,v)}u.f=d},
b7M(d){var x,w,v,u,t,s=this,r=s.c,q=r.a,p=s.f,o=d-p
if(o<=0)return
s.adB(o,q*p)
q=s.cx
q.toString
x=s.f
w=q
v=0
for(;v<o;++v,++x)for(u=0;u<r.a;++u,++w){t=s.ch[w]
q=s.d.a
if(q!=null)q.jt(u,x,t>>>16&255,t>>>8&255,t&255,t>>>24&255)}s.f=d},
adB(d,e){var x,w,v,u=this,t=u.ax,s=t.length,r=u.c.a,q=u.f,p=q+d,o=u.cx
o.toString
x=u.ch
x.toString
D.cc.d_(x,o,o+r*d,x,e)
for(w=e;v=s-1,s>0;w=o,s=v){r=t[v]
x=u.ch
x.toString
r.bqK(q,p,x,w,x,o)}},
b8h(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=1
if(g&&l.b.i6(1)!==0){x=l.b.i6(3)+2
w=A.BO(d,x)
v=A.BO(e,x)
u=w*v
t=l.Ic(w,v,!1)
l.y=x
for(s=0;s<u;++s){r=t[s]>>>8&65535
t[s]=r
if(r>=k)k=r+1}}else t=null
q=J.hU(k,y.O)
for(p=0;p<k;++p)q[p]=A.crS()
for(o=f>0,s=0;s<k;++s)for(n=0;n<5;++n){m=C.apC[n]
if(n===0&&o)m+=D.c.dU(1,f)
if(!l.b8f(m,q[s].a[n]))return!1}l.Q=t
l.as=k
l.at=q
return!0},
b8f(d,e){var x,w,v,u,t,s,r,q,p,o=this.b
if(o.i6(1)!==0){x=y.t
w=B.a([0,0],x)
v=B.a([0,0],x)
u=B.a([0,0],x)
t=o.i6(1)+1
w[0]=o.i6(o.i6(1)===0?1:8)
v[0]=0
x=t-1
u[0]=x
if(t===2){w[1]=o.i6(8)
v[1]=1
u[1]=x}s=e.bhI(u,v,w,d,t)}else{r=new Int32Array(19)
q=o.i6(4)+4
if(q>19)return!1
u=new Int32Array(d)
for(p=0;p<q;++p)r[C.arj[p]]=o.i6(3)
s=this.b8g(r,d,u)
if(s)s=e.aqk(u,d)}return s},
b8g(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=A.c7o()
if(!k.aqk(d,19))return!1
x=this.b
if(x.i6(1)!==0){w=2+x.i6(2+2*x.i6(3))
if(w>e)return!1}else w=e
for(v=0,u=8;v<e;w=t){t=w-1
if(w===0)break
if(x.a>=32)x.A1()
s=k.yt(x)
if(s<16){r=v+1
f[v]=s
if(s!==0)u=s
v=r}else{q=s-16
p=C.amD[q]
o=C.an_[q]
n=x.i6(p)+o
if(v+n>e)return!1
else{m=s===16?u:0
for(;l=n-1,n>0;n=l,v=r){r=v+1
f[v]=m}}}}return!0},
Qk(d){var x
if(d<4)return d+1
x=D.c.M(d-2,1)
return D.c.dU(2+(d&1),x)+this.b.i6(x)+1},
akK(d,e){var x,w
if(e>120)return e-120
else{x=C.aoO[e-1]
w=(x>>>4)*d+(8-(x&15))
return w>=1?w:1}},
aTa(d,e){var x,w,v=D.c.dU(1,D.c.fP(8,e.e)),u=new Uint32Array(v),t=B.bS(e.d.buffer,0,null),s=B.bS(u.buffer,0,null)
u[0]=e.d[0]
x=4*d
for(w=4;w<x;++w)s[w]=t[w]+s[w-4]&255
for(x=4*v;w<x;++w)s[w]=0
e.d=u
return!0},
Iy(d,e,f,g,h){if(f===0)return 0
d.toString
return d[e*D.c.M(h,f)+D.c.M(g,f)]},
ah1(d,e){var x=this,w=x.Iy(x.Q,x.z,x.y,d,e)
return x.at[w]}}
A.ajO.prototype={
bnH(d){return this.aTj(d)}}
A.auu.prototype={
awM(){var x,w,v=this.a
if(v<32){x=this.c
w=D.c.f8(x[0],v)+((x[1]&C.yK[v])>>>0)*(C.yK[32-v]+1)}else{x=this.c
w=v===32?x[1]:D.c.f8(x[1],v-32)}return w},
i6(d){var x,w=this,v=w.b
if(!(v.d>=v.c&&w.a>=64)&&d<25){v=w.awM()
x=C.yK[d]
w.a+=d
w.A1()
return(v&x)>>>0}else throw B.d(A.bC("Not enough data in input."))},
A1(){var x,w,v,u=this,t=u.b,s=u.c,r=t.c
while(!0){if(!(u.a>=8&&t.d<r))break
x=J.u(t.a,t.d++)
w=s[0]
v=s[1]
s[0]=(w>>>8)+(v&255)*16777216
s[1]=v>>>8
s[1]=(s[1]|x*16777216)>>>0
u.a-=8}}}
A.bty.prototype={}
A.Hh.prototype={
G(){return"VP8LImageTransformType."+this.b}}
A.auv.prototype={
bqK(d,e,f,g,h,i){var x,w,v,u,t=this,s=t.b
switch(t.a.a){case 2:t.bfR(h,i,i+(e-d)*s)
break
case 0:t.bw1(d,e,h,i)
if(e!==t.c){x=i-s
D.cc.d_(h,x,x+s,f,i+(e-d-1)*s)}break
case 1:t.biP(d,e,h,i)
break
case 3:if(g===i&&t.e>0){w=e-d
v=w*A.BO(s,t.e)
u=i+w*s-v
D.cc.d_(h,u,u+v,f,i)
t.arh(d,e,f,u,h,i)}else t.arh(d,e,f,g,h,i)
break}},
biO(d,e,f,g){var x,w,v,u,t,s=this.e,r=D.c.fP(8,s),q=this.b,p=this.d
if(r<8){x=D.c.dU(1,s)-1
w=D.c.dU(1,r)-1
for(v=d;v<e;++v)for(u=0,t=0;t<q;++t){if((t&x)>>>0===0){u=J.u(f.a,f.d);++f.d}s=p[(u&w)>>>0]
J.bX(g.a,g.d,s>>>8&255);++g.d
u=D.c.M(u,r)}}else for(v=d;v<e;++v)for(t=0;t<q;++t){s=J.u(f.a,f.d);++f.d
s=p[s]
J.bX(g.a,g.d,s>>>8&255);++g.d}},
arh(d,e,f,g,h,i){var x,w,v,u,t,s,r,q=this.e,p=D.c.fP(8,q),o=this.b,n=this.d
if(p<8){x=D.c.dU(1,q)-1
w=D.c.dU(1,p)-1
for(v=d;v<e;++v)for(u=0,t=0;t<o;++t,i=r){if((t&x)>>>0===0){s=g+1
u=f[g]>>>8&255
g=s}r=i+1
h[i]=n[u&w]
u=D.c.fP(u,p)}}else for(v=d;v<e;++v)for(t=0;t<o;++t,i=r,g=s){r=i+1
s=g+1
h[i]=n[f[g]>>>8&255]}},
biP(a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.b,f=h.e,e=D.c.dU(1,f)-1,d=A.BO(g,f),a0=D.c.M(a1,h.e)*d
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
p=$.mM()
p[0]=q
q=$.o2()
o=q[0]
p[0]=r
n=q[0]
m=$.aLM()
m[0]=o*n
l=$.bXF()
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
bw1(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=this,n=o.b
if(d===0){A.btz(f,g,4278190080)
for(x=1;x<n;++x){w=g+x
A.btz(f,w,f[w-1])}g+=n;++d}w=o.e
v=D.c.dU(1,w)-1
u=A.BO(n,w)
t=D.c.M(d,o.e)*u
for(s=d;s<e;){A.btz(f,g,f[g-n])
r=t+1
q=$.ccb[o.d[t]>>>8&15]
for(x=1;x<n;++x){if((x&v)>>>0===0){p=r+1
q=$.ccb[o.d[r]>>>8&15]
r=p}w=g+x
A.btz(f,w,q.$3(f,f[w-1],w-n))}g+=n;++s
if((s&v)>>>0===0)t+=u}},
bfR(d,e,f){var x,w,v
for(;e<f;e=v){x=d[e]
w=x>>>8&255
v=e+1
d[e]=(x&4278255360|(x&16711935)+(w<<16|w)&16711935)>>>0}}}
A.bul.prototype={
gel(){var x=this,w=x.d
if(w>1||x.e>=4||x.f>1||x.r!==0)return!1
return!0},
KX(d,e,f,g){var x,w,v,u,t,s,r=this
if(!r.gel())return!1
x=C.auP[r.e]
if(r.d===0){w=r.b
v=e*w
u=r.a
D.a5.d_(g,v,f*w,u.a,u.d-u.b+v)}else{w=e+f
u=r.x
u===$&&B.b()
u.cy=g
t=u.c
if(r.y)w=u.aQE(t.a,t.b,w)
else{s=u.ch
s.toString
u=u.a_D(s,t.a,t.b,w,u.gbnG())
w=u}if(!w)return!1}if(x!=null){w=r.b
x.$6(w,r.c,w,e,f,g)}if(r.f===1)if(!r.aRu(g,r.b,r.c,e,f))return!1
if(e+f===r.c)r.w=!0
return!0},
aRu(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
A.a2t.prototype={
aM9(d,e){var x=this,w=d.cw()
x.r=0
x.f=(w&1)!==0
x.w=d.d-d.b
x.x=e-16}}
A.ajP.prototype={}
A.aja.prototype={
a3y(d){var x,w=this
if(d===0)return!1
x=(d<<1>>>0)-1
w.e=x
x=new Int32Array(x<<1>>>0)
w.d=x
x[1]=-1
w.f=1
D.a5.jm(w.a,0,128,255)
return!0},
aqk(d,e){var x,w,v,u,t,s=this
for(x=0,w=0,v=0;v<e;++v)if(d[v]>0){++x
w=v}if(!s.a3y(x))return!1
if(x===1){if(w<0||w>=e)return!1
return s.ZR(w,0,0)}u=new Int32Array(e)
if(!s.b01(d,e,u))return!1
for(v=0;v<e;++v){t=d[v]
if(t>0)if(!s.ZR(v,u[v],t))return!1}return s.f===s.e},
bhI(d,e,f,g,h){var x,w,v,u=this
if(!u.a3y(h))return!1
for(x=0;x<h;++x){w=e[x]
if(w!==-1){v=f[x]
if(v>=g)return u.f===u.e
if(!u.ZR(v,w,d[x]))return u.f===u.e}}return u.f===u.e},
yt(d){var x,w,v=this,u=d.awM(),t=d.a,s=u&127,r=v.a[s]
if(r<=7){d.a=t+r
return v.b[s]}x=v.c[s]
t+=7
u=u>>>7
do{w=v.d
w===$&&B.b()
x=x+w[(x<<1>>>0)+1]+(u&1)
u=u>>>1;++t}while(v.ak3(x))
d.a=t
return v.d[x<<1>>>0]},
ZR(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this
if(f<=7){x=m.alG(e,f)
for(w=D.c.e8(1,7-f),v=m.b,u=m.a,t=0;t<w;++t){s=(x|D.c.e8(t,f))>>>0
v[s]=d
u[s]=f}}else x=m.alG(D.c.mL(e,f-7),7)
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
q+=u[o]+(D.c.mL(e,p)&1);--r
if(r===0)w[x]=q}if(m.b3d(q))m.b3e(q,0)
else if(m.ak3(q))return!1
w=m.d
w===$&&B.b()
w[q<<1>>>0]=d
return!0},
alG(d,e){return D.c.f8((C.Od[d&15]<<4|C.Od[D.c.M(d,4)])>>>0,8-e)},
b3e(d,e){var x=this.d
x===$&&B.b()
x[(d<<1>>>0)+1]=e},
ak3(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]!==0},
b3d(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]<0},
b01(d,e,f){var x,w,v,u,t,s,r,q=new Int32Array(16),p=new Int32Array(16)
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
A.Vq.prototype={
i(d,e){return this.a[e]}}
A.OP.prototype={
G(){return"WebPFormat."+this.b}}
A.auU.prototype={}
A.ajQ.prototype={}
A.bum.prototype={
Fx(d){var x=A.cl(d,!1,null,0)
this.b=x
if(!this.agZ(x))return!1
return!0},
np(d){var x,w=this,v=null,u=A.cl(d,!1,v,0)
w.b=u
if(!w.agZ(u))return v
u=new A.ajQ(C.mC,B.a([],y.J))
w.a=u
x=w.b
x.toString
if(!w.ap7(x,u))return v
u=w.a
switch(u.f.a){case 3:u.as=u.z.length
return u
case 2:x=w.b
x.toString
x.d=u.ay
if(!A.c0s(x,u).KY())return v
u=w.a
u.as=u.z.length
return u
case 1:x=w.b
x.toString
x.d=u.ay
if(!A.c0q(x,u).KY())return v
u=w.a
u.as=u.z.length
return u
case 0:throw B.d(A.bC("Unknown format for WebP"))}},
iX(d){var x,w,v,u,t=this,s=t.b
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
return t.afl(s.z7(x,w),d)}w=x.f
if(w===C.v2){s.toString
u=s.z7(x.ch,x.ay)
s=t.a
s.toString
return A.c0s(u,s).vb(0)}else if(w===C.BL){s.toString
u=s.z7(x.ch,x.ay)
s=t.a
s.toString
return A.c0q(u,s).vb(0)}return null},
mm(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=null
if(p.np(e)==null)return o
x=p.a.e
if(!x)return p.iX(0)
for(w=o,v=w,u=0;x=p.a,u<x.as;++u){f=x.z[u]
t=p.iX(u)
if(t==null)continue
t.y=f.e
if(v==null||w==null){x=p.a
s=x.a
x=x.b
r=t.goZ()
q=t.a
q=q==null?o:q.gcJ()
if(q==null)q=C.V
v=A.fV(o,o,q,t.y,C.aW,x,o,0,r,o,C.V,s,!1)
w=v}else{w=A.zo(w,!1,!1)
x=f.f
x===$&&B.b()
if(x){x=w.a
if(x!=null)x.mh(0,o)}}A.c1R(w,t,C.w6,o,o,f.a,f.b,o,o,o,o)
v.mc(w)}return v},
afl(d,e){var x,w,v,u=null,t=B.a([],y.J),s=new A.ajQ(C.mC,t)
if(!this.ap7(d,s))return u
if(s.f===C.mC)return u
s.as=this.a.as
if(s.e){x=t.length
if(e>=x)return u
w=t[e]
t=w.x
t===$&&B.b()
x=w.w
x===$&&B.b()
return this.afl(d.z7(t,x),e)}else{v=d.z7(s.ch,s.ay)
t=s.f
if(t===C.v2)return A.c0s(v,s).vb(0)
else if(t===C.BL)return A.c0q(v,s).vb(0)}return u},
agZ(d){if(d.p7(4)!=="RIFF")return!1
d.ae()
if(d.p7(4)!=="WEBP")return!1
return!0},
ap7(d,e){var x,w,v,u,t,s,r,q,p,o,n,m
for(x=d.c,w=d.b;d.d<x;){v=d.p7(4)
u=d.ae()
t=u+1>>>1<<1>>>0
s=d.d
r=s-w
switch(v){case"VP8X":if(!this.aVq(d,e))return!1
break
case"VP8 ":e.ay=r
e.ch=u
e.f=C.BL
break
case"VP8L":e.ay=r
e.ch=u
e.f=C.v2
break
case"ALPH":e.toString
s=d.a
q=d.e
p=J.aY(s)
s=new A.kI(s,0,p,0,q)
e.at=s
s.d=d.d
d.d+=t
break
case"ANIM":e.f=C.b2F
o=d.ae()
s=new Uint8Array(4)
s[0]=o>>>8&255
s[1]=o>>>16&255
s[2]=o>>>24&255
s[3]=o&255
d.bz()
break
case"ANMF":if(!this.aUl(d,e,u))return!1
break
case"ICCP":e.toString
n=d.iS(u)
d.d=d.d+(n.c-n.d)
n.fX()
break
case"EXIF":e.toString
e.w=d.p7(u)
break
case"XMP ":e.toString
d.p7(u)
break
default:d.d=s+t
break}s=d.d
m=t-(s-w-r)
if(m>0)d.d=s+m}if(!e.d)e.d=e.at!=null
return e.f!==C.mC},
aVq(d,e){var x,w,v,u,t=d.cw()
if((t&192)!==0)return!1
x=D.c.M(t,4)
w=D.c.M(t,1)
if((t&1)!==0)return!1
if(d.qh()!==0)return!1
v=d.qh()
u=d.qh()
e.a=v+1
e.b=u+1
e.e=(w&1)!==0
e.d=(x&1)!==0
return!0},
aUl(d,e,f){var x,w=d.qh(),v=d.qh()
d.qh()
x=new A.ajP(w*2,v*2,d.qh()+1,d.qh())
x.aM9(d,f)
if(x.r!==0)return!1
e.z.push(x)
return!0}}
A.b3u.prototype={
G(){return"IccProfileCompression."+this.b}}
A.VK.prototype={
bj6(){var x,w=this
if(w.b===C.xP)return w.c
x=y.D.a(C.Dl.jk(w.c))
w.c=x
w.b=C.xP
return x}}
A.aij.prototype={
G(){return"FrameType."+this.b}}
A.zp.prototype={
gjP(){var x=this.x
return x===$?this.x=B.a([],y.g):x},
aLF(d,e,f,g){var x,w,v,u=this,t=d.gcJ(),s=d.goZ(),r=d.a
u.afb(g,e,t,s,r==null?null:r.ged())
t=d.b
if(t!=null)u.b=B.ji(t,y.N,y.I)
t=d.d
if(t!=null){s=y.N
u.d=B.ji(t,s,s)}u.gjP().push(u)
if(!f){x=d.gjP().length
for(t=y.g,w=1;w<x;++w){v=d.x
u.mc(A.ajm((v===$?d.x=B.a([],t):v)[w],e,!1,g))}}},
aLE(d,e,f){var x,w,v,u,t=this,s=d.b
if(s!=null)t.b=B.ji(s,y.N,y.I)
s=d.d
if(s!=null){x=y.N
t.d=B.ji(s,x,x)}t.gjP().push(t)
if(!e&&d.gjP().length>1){w=d.gjP().length
for(s=y.g,v=1;v<w;++v){u=d.x
t.mc(A.zo((u===$?d.x=B.a([],s):u)[v],!1,!1))}}},
mc(d){var x=this
if(d==null)d=A.zo(x,!0,!0)
d.z=x.gjP().length
if(D.b.gP(x.gjP())!==d)x.gjP().push(d)
return d},
T8(){return this.mc(null)},
afb(d,e,f,g,h){var x,w,v=this,u=null
switch(f.a){case 0:if(h==null){x=D.d.ex(d*g/8)
w=new A.Ld($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.ex(d/8)
w=new A.Ld($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 1:if(h==null){x=D.d.ex(d*(g<<1>>>0)/8)
w=new A.Lf($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.ex(d/4)
w=new A.Lf($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 2:if(h==null){if(g===2)x=d
else if(g===4)x=d*2
else x=g===3?D.d.ex(d*1.5):D.d.ex(d/2)
w=new A.Lh($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.ex(d/2)
w=new A.Lh($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 3:if(h==null)v.a=A.c7H(d,e,g)
else v.a=new A.Li(new Uint8Array(d*e),h,d,e,1)
break
case 4:x=d*e
if(h==null)v.a=new A.Le(new Uint16Array(x*g),u,d,e,g)
else v.a=new A.Le(new Uint16Array(x),h,d,e,1)
break
case 5:v.a=A.csp(d,e,g)
break
case 6:v.a=new A.VS(new Int8Array(d*e*g),d,e,g)
break
case 7:v.a=new A.VQ(new Int16Array(d*e*g),d,e,g)
break
case 8:v.a=new A.VR(new Int32Array(d*e*g),d,e,g)
break
case 9:v.a=A.csn(d,e,g)
break
case 10:v.a=A.cso(d,e,g)
break
case 11:v.a=new A.VP(new Float64Array(d*e*4*g),d,e,g)
break}},
j(d){var x=this
return"Image("+x.gcm(0)+", "+x.gb0(0)+", "+x.gcJ().b+", "+x.goZ()+")"},
gcm(d){var x=this.a
x=x==null?null:x.a
return x==null?0:x},
gb0(d){var x=this.a
x=x==null?null:x.b
return x==null?0:x},
gcJ(){var x=this.a
x=x==null?null:x.gcJ()
return x==null?C.V:x},
gvi(){var x=this.e
return x==null?this.e=new A.KF(B.C(y.N,y.P)):x},
aDa(d,e){var x=this,w=x.b;(w==null?x.b=B.C(y.N,y.I):w).n(0,d,e)
if(x.b.a===0)x.b=null},
gW(d){var x=this.a
return x.gW(x)},
gfw(d){var x=this.a
x=x==null?null:x.gfw(x)
if(x==null)x=new Uint8Array(0).buffer
return x},
goZ(){var x=this.a
x=x==null?null:x.ged()
x=x==null?null:x.b
if(x==null){x=this.a
x=x==null?null:x.c}return x==null?0:x},
gpZ(){var x=this.a
return(x==null?null:x.ged())!=null},
glH(){var x=this.a
x=x==null?null:x.glH()
return x==null?0:x},
av_(d,e){return d>=0&&e>=0&&d<this.gcm(0)&&e<this.gb0(0)},
mG(d,e,f,g){var x=this.a
x=x==null?null:x.mG(d,e,f,g)
if(x==null)x=new A.vF(new Uint8Array(0))
return x},
dB(d,e,f){var x=this.a
x=x==null?null:x.dB(d,e,f)
return x==null?new A.eI():x},
mH(d,e){return this.dB(d,e,null)},
jr(d,e){if(d<0||d>=this.gcm(0)||e<0||e>=this.gb0(0))return new A.eI()
return this.dB(d,e,null)},
aBf(d,e,f){switch(f.a){case 0:return this.jr(D.d.C(d),D.d.C(e))
case 1:case 3:return this.aBg(d,e)
case 2:return this.aBe(d,e)}},
aBg(d,e){var x,w,v,u,t,s,r=this,q=D.d.C(d),p=q-(d>=0?0:1),o=p+1
q=D.d.C(e)
x=q-(e>=0?0:1)
w=x+1
q=new A.b47(d-p,e-x)
v=r.jr(p,x)
u=w>=r.gb0(0)?v:r.jr(p,w)
t=o>=r.gcm(0)?v:r.jr(o,x)
s=o>=r.gcm(0)||w>=r.gb0(0)?v:r.jr(o,w)
return r.mG(q.$4(v.gav(v),t.gav(t),u.gav(u),s.gav(s)),q.$4(v.gaH(),t.gaH(),u.gaH(),s.gaH()),q.$4(v.gaL(v),t.gaL(t),u.gaL(u),s.gaL(s)),q.$4(v.gaO(v),t.gaO(t),u.gaO(u),s.gaO(s)))},
aBe(d0,d1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=D.d.C(d0),c6=c5-(d0>=0?0:1),c7=c6-1,c8=c6+1,c9=c6+2
c5=D.d.C(d1)
x=c5-(d1>=0?0:1)
w=x-1
v=x+1
u=x+2
t=d0-c6
s=d1-x
c5=new A.b46()
r=c4.jr(c6,x)
q=c7<0
p=!q
o=!p||w<0?r:c4.jr(c7,w)
n=q?r:c4.jr(c6,w)
m=w<0
l=m||c8>=c4.gcm(0)?r:c4.jr(c8,w)
k=c9>=c4.gcm(0)||m?r:c4.jr(c9,w)
j=c5.$5(t,o.gav(o),n.gav(n),l.gav(l),k.gav(k))
i=c5.$5(t,o.gaH(),n.gaH(),l.gaH(),k.gaH())
h=c5.$5(t,o.gaL(o),n.gaL(n),l.gaL(l),k.gaL(k))
g=c5.$5(t,o.gaO(o),n.gaO(n),l.gaO(l),k.gaO(k))
f=q?r:c4.jr(c7,x)
e=c8>=c4.gcm(0)?r:c4.jr(c8,x)
d=c9>=c4.gcm(0)?r:c4.jr(c9,x)
a0=c5.$5(t,f.gav(f),r.gav(r),e.gav(e),d.gav(d))
a1=c5.$5(t,f.gaH(),r.gaH(),e.gaH(),d.gaH())
a2=c5.$5(t,f.gaL(f),r.gaL(r),e.gaL(e),d.gaL(d))
a3=c5.$5(t,f.gaO(f),r.gaO(r),e.gaO(e),d.gaO(d))
a4=!p||v>=c4.gb0(0)?r:c4.jr(c7,v)
a5=v>=c4.gb0(0)?r:c4.jr(c6,v)
a6=c8>=c4.gcm(0)||v>=c4.gb0(0)?r:c4.jr(c8,v)
a7=c9>=c4.gcm(0)||v>=c4.gb0(0)?r:c4.jr(c9,v)
a8=c5.$5(t,a4.gav(a4),a5.gav(a5),a6.gav(a6),a7.gav(a7))
a9=c5.$5(t,a4.gaH(),a5.gaH(),a6.gaH(),a7.gaH())
b0=c5.$5(t,a4.gaL(a4),a5.gaL(a5),a6.gaL(a6),a7.gaL(a7))
b1=c5.$5(t,a4.gaO(a4),a5.gaO(a5),a6.gaO(a6),a7.gaO(a7))
b2=!p||u>=c4.gb0(0)?r:c4.jr(c7,u)
b3=u>=c4.gb0(0)?r:c4.jr(c6,u)
b4=c8>=c4.gcm(0)||u>=c4.gb0(0)?r:c4.jr(c8,u)
b5=c9>=c4.gcm(0)||u>=c4.gb0(0)?r:c4.jr(c9,u)
b6=c5.$5(t,b2.gav(b2),b3.gav(b3),b4.gav(b4),b5.gav(b5))
b7=c5.$5(t,b2.gaH(),b3.gaH(),b4.gaH(),b5.gaH())
b8=c5.$5(t,b2.gaL(b2),b3.gaL(b3),b4.gaL(b4),b5.gaL(b5))
b9=c5.$5(t,b2.gaO(b2),b3.gaO(b3),b4.gaO(b4),b5.gaO(b5))
c0=c5.$5(s,j,a0,a8,b6)
c1=c5.$5(s,i,a1,a9,b7)
c2=c5.$5(s,h,a2,b0,b8)
c3=c5.$5(s,g,a3,b1,b9)
return c4.mG(D.d.C(c0),D.d.C(c1),D.d.C(c2),D.d.C(c3))},
wc(d,e,f){var x
if(y.c0.b(f))if(f.ghf(f).ged()!=null)if(this.gpZ()){x=this.a
if(x!=null)x.ew(d,e,f.gdu(f),0,0)
return}x=this.a
if(x!=null)x.jt(d,e,f.gav(f),f.gaH(),f.gaL(f),f.gaO(f))},
gbP(){var x=this.a
x=x==null?null:x.gbP()
return x==null?0:x},
mh(d,e){var x=this.a
return x==null?null:x.mh(0,e)},
T(d){return this.mh(0,null)},
arB(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
if(a5==null)a5=a2.gcJ()
if(a6==null)a6=a2.goZ()
a4=C.Uv.i(0,a5)
if(a5.a<3)a2.gcJ()
x=!1
if(a5===a2.gcJ())if(a6===a2.goZ()){w=a2.a
x=(w==null?a3:w.ged())==null}if(x)return A.zo(a2,!1,!1)
for(x=a2.gjP(),w=x.length,v=y.N,u=y.p,t=a3,s=0;s<x.length;x.length===w||(0,B.M)(x),++s,t=j){r=x[s]
q=r.a
p=q==null
o=p?a3:q.a
if(o==null)o=0
q=p?a3:q.b
if(q==null)q=0
p=r.e
p=p==null?a3:A.UL(p)
n=r.c
if(n==null)n=a3
else{m=n.a
l=n.b
n=n.c
n=new A.VK(m,l,new Uint8Array(n.subarray(0,B.p1(0,a3,n.length))))}m=r.w
l=r.r
k=A.fV(a3,p,a5,r.y,m,q,n,l,a6,a3,C.V,o,!1)
q=r.d
k.d=q!=null?B.ji(q,v,v):a3
if(t!=null){t.mc(k)
j=t}else j=k
q=k.a
i=q==null?a3:q.ged()
q=k.a
q=q==null?a3:q.ged()
h=q==null?a3:q.gcJ()
if(h==null)h=a5
q=r.a
if(i!=null){g=B.C(u,u)
f=q==null?a3:q.dB(0,0,a3)
if(f==null)f=new A.eI()
for(q=k.a,q=q.gW(q),e=a3,d=0;q.q();){a0=q.gJ(q)
a1=A.cgH(D.d.f3(f.ghK()*255),D.d.f3(f.ghv()*255),D.d.f3(f.ghC()*255),0)
if(g.Y(0,a1)){p=g.i(0,a1)
p.toString
a0.sdu(0,p)}else{g.n(0,a1,d)
a0.sdu(0,d)
e=A.nW(f,a4,h,a6,e)
i.o3(d,e.gav(e),e.gaH(),e.gaL(e));++d}f.q()}}else{f=q==null?a3:q.dB(0,0,a3)
if(f==null)f=new A.eI()
for(q=k.a,q=q.gW(q);q.q();){A.nW(f,a4,a3,a3,q.gJ(q))
f.q()}}}t.toString
return t},
mY(d){return this.arB(null,d,null)},
arA(d){return this.arB(null,null,d)},
bg9(d){var x,w,v,u
if(this.d==null){x=y.N
this.d=B.C(x,x)}for(x=B.fr(d,d.r,B.q(d).c);x.q();){w=x.d
v=this.d
v.toString
u=d.i(0,w)
u.toString
v.n(0,w,u)}},
aQg(d,e,f){var x,w=65536
switch(e.a){case 0:return null
case 1:return null
case 2:return null
case 3:x=d===C.bH?w:256
return new A.rj(new Uint8Array(x*f),x,f)
case 4:x=d===C.bH?w:256
return new A.aof(new Uint16Array(x*f),x,f)
case 5:x=d===C.bH?w:256
return new A.Yp(new Uint32Array(x*f),x,f)
case 6:x=d===C.bH?w:256
return new A.aoe(new Int8Array(x*f),x,f)
case 7:x=d===C.bH?w:256
return new A.aoc(new Int16Array(x*f),x,f)
case 8:x=d===C.bH?w:256
return new A.aod(new Int32Array(x*f),x,f)
case 9:x=d===C.bH?w:256
return new A.ao9(new Uint16Array(x*f),x,f)
case 10:x=d===C.bH?w:256
return new A.aoa(new Float32Array(x*f),x,f)
case 11:x=d===C.bH?w:256
return new A.aob(new Float64Array(x*f),x,f)}}}
A.kG.prototype={
ged(){return null}}
A.Lb.prototype={
pF(d,e){var x=this,w=x.d
if(e)w=new Uint16Array(w.length)
else w=new Uint16Array(B.bv(w))
return new A.Lb(w,x.a,x.b,x.c)},
gcJ(){return C.fD},
gfw(d){return this.d.buffer},
glH(){return 16},
gqn(){return this.a*this.c*2},
gW(d){return A.c_e(this)},
pc(d,e,f,g,h){return A.rk(A.c_e(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gbP(){return 1},
gq4(){return!0},
mG(d,e,f,g){var x=new Uint16Array(4),w=new A.Jk(x)
x[0]=A.fe(d)
x[1]=A.fe(e)
x[2]=A.fe(f)
x[3]=A.fe(g)
x=w
return x},
dB(d,e,f){if(f==null||!(f instanceof A.Fk)||f.d!==this)f=A.c_e(this)
f.fu(0,d,e)
return f},
mH(d,e){return this.dB(d,e,null)},
lr(d,e,f){var x=this.c
this.d[e*this.a*x+d*x]=A.fe(f)},
ew(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=A.fe(f)
if(x>1){v[w+1]=A.fe(g)
if(x>2)v[w+2]=A.fe(h)}},
jt(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=A.fe(f)
if(x>1){v[w+1]=A.fe(g)
if(x>2){v[w+2]=A.fe(h)
if(x>3)v[w+3]=A.fe(i)}}},
j(d){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
mh(d,e){}}
A.Lc.prototype={
pF(d,e){var x=this,w=x.d
if(e)w=new Float32Array(w.length)
else w=new Float32Array(B.bv(w))
return new A.Lc(w,x.a,x.b,x.c)},
gcJ(){return C.hQ},
gfw(d){return this.d.buffer},
glH(){return 32},
gW(d){return A.c_f(this)},
pc(d,e,f,g,h){return A.rk(A.c_f(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gbP(){return 1},
gqn(){return this.a*this.c*4},
gq4(){return!0},
mG(d,e,f,g){var x=new Float32Array(4),w=new A.Jl(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
dB(d,e,f){if(f==null||!(f instanceof A.Fl)||f.d!==this)f=A.c_f(this)
f.fu(0,d,e)
return f},
mH(d,e){return this.dB(d,e,null)},
lr(d,e,f){var x=this.c
this.d[e*this.a*x+d*x]=f},
ew(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
jt(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
mh(d,e){}}
A.VP.prototype={
pF(d,e){var x=this,w=x.d
if(e)w=new Float64Array(w.length)
else w=new Float64Array(B.bv(w))
return new A.VP(w,x.a,x.b,x.c)},
gcJ(){return C.jb},
gfw(d){return this.d.buffer},
gt(d){return this.d.byteLength},
glH(){return 64},
gW(d){return A.c_g(this)},
pc(d,e,f,g,h){return A.rk(A.c_g(this),e,f,g,h)},
gbP(){return 1},
gqn(){return this.a*this.c*8},
gq4(){return!0},
mG(d,e,f,g){var x=new Float64Array(4),w=new A.Jm(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
dB(d,e,f){if(f==null||!(f instanceof A.Fm)||f.d!==this)f=A.c_g(this)
f.fu(0,d,e)
return f},
mH(d,e){return this.dB(d,e,null)},
lr(d,e,f){var x=this.c
this.d[e*this.a*x+d*x]=f},
ew(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
jt(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
mh(d,e){}}
A.VQ.prototype={
pF(d,e){var x=this,w=x.d
if(e)w=new Int16Array(w.length)
else w=new Int16Array(B.bv(w))
return new A.VQ(w,x.a,x.b,x.c)},
gcJ(){return C.jd},
gfw(d){return this.d.buffer},
gW(d){return A.c_h(this)},
pc(d,e,f,g,h){return A.rk(A.c_h(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gbP(){return 32767},
gq4(){return!0},
glH(){return 16},
gqn(){return this.a*this.c*2},
mG(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Int16Array(4),s=new A.Jn(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
dB(d,e,f){if(f==null||!(f instanceof A.Fn)||f.d!==this)f=A.c_h(this)
f.fu(0,d,e)
return f},
mH(d,e){return this.dB(d,e,null)},
lr(d,e,f){var x=this.c
this.d[e*this.a*x+d*x]=D.d.C(f)},
ew(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.C(f)
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
jt(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.C(f)
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
mh(d,e){}}
A.VR.prototype={
pF(d,e){var x=this,w=x.d
if(e)w=new Int32Array(w.length)
else w=new Int32Array(B.bv(w))
return new A.VR(w,x.a,x.b,x.c)},
gcJ(){return C.je},
gfw(d){return this.d.buffer},
glH(){return 32},
gqn(){return this.a*this.c*4},
gW(d){return A.c_i(this)},
pc(d,e,f,g,h){return A.rk(A.c_i(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gbP(){return 2147483647},
gq4(){return!0},
mG(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Int32Array(4),s=new A.Jo(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
dB(d,e,f){if(f==null||!(f instanceof A.Fo)||f.d!==this)f=A.c_i(this)
f.fu(0,d,e)
return f},
mH(d,e){return this.dB(d,e,null)},
lr(d,e,f){var x=this.c
this.d[e*this.a*x+d*x]=D.d.C(f)},
ew(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.C(f)
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
jt(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.C(f)
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
mh(d,e){}}
A.VS.prototype={
pF(d,e){var x=this,w=x.d
if(e)w=new Int8Array(w.length)
else w=new Int8Array(B.bv(w))
return new A.VS(w,x.a,x.b,x.c)},
gcJ(){return C.jc},
gfw(d){return this.d.buffer},
gqn(){return this.a*this.c},
gW(d){return A.c_j(this)},
pc(d,e,f,g,h){return A.rk(A.c_j(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gbP(){return 127},
gq4(){return!0},
glH(){return 8},
mG(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Int8Array(4),s=new A.Jp(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
dB(d,e,f){if(f==null||!(f instanceof A.Fp)||f.d!==this)f=A.c_j(this)
f.fu(0,d,e)
return f},
mH(d,e){return this.dB(d,e,null)},
lr(d,e,f){var x=this.c
this.d[e*(this.a*x)+d*x]=D.d.C(f)},
ew(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d
v[w]=D.d.C(f)
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
jt(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d
v[w]=D.d.C(f)
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
mh(d,e){}}
A.Ld.prototype={
bAa(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.b_()
this.d=x},
pF(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bv(v))}x=w.f
x=x==null?null:x.dg(0)
return new A.Ld(v,w.e,x,w.a,w.b,w.c)},
gcJ(){return C.eu},
gt(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gbP(){var x=this.f
x=x==null?null:x.gbP()
return x==null?1:x},
gq4(){return!1},
gfw(d){var x=this.d
x===$&&B.b()
return x.buffer},
glH(){return 1},
gW(d){return A.YF(this)},
pc(d,e,f,g,h){return A.rk(A.YF(this),e,f,g,h)},
mG(d,e,f,g){var x=new A.Js(4,0)
x.hx(D.d.C(d),D.d.C(e),D.d.C(f),D.d.C(g))
return x},
dB(d,e,f){if(f==null||!(f instanceof A.Fq)||f.f!==this)f=A.YF(this)
f.fu(0,d,e)
return f},
mH(d,e){return this.dB(d,e,null)},
lr(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.YF(w):x).fu(0,d,e)
w.r.jB(0,f)},
ew(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.YF(w):x).fu(0,d,e)
w.r.ju(f,g,h)},
jt(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.YF(w):x).fu(0,d,e)
w.r.hx(f,g,h,i)},
j(d){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
mh(d,e){},
gqn(){return this.e},
ged(){return this.f}}
A.Le.prototype={
pF(d,e){var x,w=this,v=w.d
if(e)v=new Uint16Array(v.length)
else v=new Uint16Array(B.bv(v))
x=w.e
x=x==null?null:x.dg(0)
return new A.Le(v,x,w.a,w.b,w.c)},
gcJ(){return C.bH},
gfw(d){return this.d.buffer},
glH(){return 16},
gbP(){var x=this.e
x=x==null?null:x.gbP()
return x==null?65535:x},
gqn(){return this.a*this.c*2},
gW(d){return A.c_k(this)},
pc(d,e,f,g,h){return A.rk(A.c_k(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gq4(){return!0},
mG(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Uint16Array(4),s=new A.Jt(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
dB(d,e,f){if(f==null||!(f instanceof A.Fr)||f.d!==this)f=A.c_k(this)
f.fu(0,d,e)
return f},
mH(d,e){return this.dB(d,e,null)},
lr(d,e,f){var x=this.c
this.d[e*this.a*x+d*x]=D.d.C(f)},
ew(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.C(f)
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
jt(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.C(f)
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
mh(d,e){},
ged(){return this.e}}
A.Lf.prototype={
bAb(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.b_()
this.d=x},
pF(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bv(v))}x=w.f
x=x==null?null:x.dg(0)
return new A.Lf(v,w.e,x,w.a,w.b,w.c)},
gcJ(){return C.f6},
glH(){return 2},
gfw(d){var x=this.d
x===$&&B.b()
return x.buffer},
gW(d){return A.YG(this)},
pc(d,e,f,g,h){return A.rk(A.YG(this),e,f,g,h)},
gt(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gbP(){var x=this.f
x=x==null?null:x.gbP()
return x==null?3:x},
gq4(){return!1},
mG(d,e,f,g){var x=new A.Ju(4,0)
x.hx(D.d.C(d),D.d.C(e),D.d.C(f),D.d.C(g))
return x},
dB(d,e,f){if(f==null||!(f instanceof A.Fs)||f.f!==this)f=A.YG(this)
f.fu(0,d,e)
return f},
mH(d,e){return this.dB(d,e,null)},
lr(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.YG(w):x).fu(0,d,e)
w.r.jC(0,f)},
ew(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.YG(w):x).fu(0,d,e)
w.r.ju(f,g,h)},
jt(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.YG(w):x).fu(0,d,e)
w.r.hx(f,g,h,i)},
j(d){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
mh(d,e){},
gqn(){return this.e},
ged(){return this.f}}
A.Lg.prototype={
pF(d,e){var x=this,w=x.d
if(e)w=new Uint32Array(w.length)
else w=new Uint32Array(B.bv(w))
return new A.Lg(w,x.a,x.b,x.c)},
gcJ(){return C.hR},
gfw(d){return this.d.buffer},
gqn(){return this.a*this.c*4},
glH(){return 32},
gbP(){return 4294967295},
gW(d){return A.c_l(this)},
pc(d,e,f,g,h){return A.rk(A.c_l(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gq4(){return!0},
mG(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Uint32Array(4),s=new A.Jv(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
dB(d,e,f){if(f==null||!(f instanceof A.Ft)||f.d!==this)f=A.c_l(this)
f.fu(0,d,e)
return f},
mH(d,e){return this.dB(d,e,null)},
lr(d,e,f){var x=this.c
this.d[e*this.a*x+d*x]=D.d.C(f)},
ew(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.C(f)
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
jt(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.C(f)
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
mh(d,e){}}
A.Lh.prototype={
bAc(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.b_()
this.d=x},
pF(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bv(v))}x=w.f
x=x==null?null:x.dg(0)
return new A.Lh(v,w.e,x,w.a,w.b,w.c)},
gcJ(){return C.f7},
gfw(d){var x=this.d
x===$&&B.b()
return x.buffer},
gW(d){return A.YH(this)},
pc(d,e,f,g,h){return A.rk(A.YH(this),e,f,g,h)},
gt(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gbP(){var x=this.f
x=x==null?null:x.gbP()
return x==null?15:x},
gq4(){return!1},
glH(){return 4},
mG(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new A.Jw(4,new Uint8Array(2))
t.hx(x,w,v,u)
x=t
return x},
dB(d,e,f){if(f==null||!(f instanceof A.Fu)||f.e!==this)f=A.YH(this)
f.fu(0,d,e)
return f},
mH(d,e){return this.dB(d,e,null)},
lr(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.YH(w):x).fu(0,d,e)
w.r.jE(0,f)},
ew(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.YH(w):x).fu(0,d,e)
w.r.ju(f,g,h)},
jt(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.YH(w):x).fu(0,d,e)
w.r.hx(f,g,h,i)},
j(d){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
mh(d,e){},
gqn(){return this.e},
ged(){return this.f}}
A.Li.prototype={
pF(d,e){var x,w=this,v=w.d
if(e)v=new Uint8Array(v.length)
else v=new Uint8Array(B.bv(v))
x=w.e
x=x==null?null:x.dg(0)
return new A.Li(v,x,w.a,w.b,w.c)},
gcJ(){return C.V},
gfw(d){return this.d.buffer},
gqn(){return this.a*this.c},
glH(){return 8},
gW(d){return A.bde(this)},
pc(d,e,f,g,h){return A.rk(A.bde(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gbP(){var x=this.e
x=x==null?null:x.gbP()
return x==null?255:x},
gq4(){return!1},
mG(d,e,f,g){var x=A.coh(D.d.C(D.d.bh(d,0,255)),D.d.C(D.d.bh(e,0,255)),D.d.C(D.d.bh(f,0,255)),D.d.C(D.d.bh(g,0,255)))
return x},
dB(d,e,f){if(f==null||!(f instanceof A.Fv)||f.d!==this)f=A.bde(this)
f.fu(0,d,e)
return f},
mH(d,e){return this.dB(d,e,null)},
lr(d,e,f){var x=this.c
this.d[e*(this.a*x)+d*x]=D.d.C(f)},
ew(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d
v[w]=D.d.C(f)
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
jt(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d
v[w]=D.d.C(f)
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
mh(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=e==null?o:A.nW(e,o,C.V,o,o),m=p.c
if(m===1){x=n==null?0:D.c.bh(B.b0(n.gav(n)),0,255)
m=p.d
D.a5.jm(m,0,m.length,x)}else if(m===2){m=n==null
x=m?0:D.c.bh(B.b0(n.gav(n)),0,255)
w=m?0:D.c.bh(B.b0(n.gaH()),0,255)
v=B.c__(p.d.buffer,0,o)
D.id.jm(v,0,v.length,(w<<8|x)>>>0)}else if(m===4){m=n==null
x=m?0:D.c.bh(B.b0(n.gav(n)),0,255)
w=m?0:D.c.bh(B.b0(n.gaH()),0,255)
u=m?0:D.c.bh(B.b0(n.gaL(n)),0,255)
t=m?0:D.c.bh(B.b0(n.gaO(n)),0,255)
s=B.no(p.d.buffer,0,o)
D.cc.jm(s,0,s.length,(t<<24|u<<16|w<<8|x)>>>0)}else{m=n==null
x=m?0:D.c.bh(B.b0(n.gav(n)),0,255)
w=m?0:D.c.bh(B.b0(n.gaH()),0,255)
u=m?0:D.c.bh(B.b0(n.gaL(n)),0,255)
for(r=A.bde(p),m=r.d,q=m.c>0,m=m.d;r.q();){if(q)m[r.c]=D.d.C(D.c.bh(x,0,255))
r.saH(w)
r.saL(0,u)}}},
ged(){return this.e}}
A.ajR.prototype={
G(){return"Interpolation."+this.b}}
A.bd_.prototype={}
A.ao9.prototype={
dg(d){return new A.ao9(new Uint16Array(B.bv(this.c)),this.a,this.b)},
gfw(d){return this.c.buffer},
gcJ(){return C.fD},
gbP(){return 1},
eA(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=A.fe(g)},
o3(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=A.fe(e)
if(w>1){x[d+1]=A.fe(f)
if(w>2)x[d+2]=A.fe(g)}},
nX(d,e,f){var x,w=this.b
if(f<w){w=this.c[e*w+f]
x=$.fT
w=(x!=null?x:A.hz())[w]}else w=0
return w},
m0(d){var x=this.c[d*this.b],w=$.fT
return(w!=null?w:A.hz())[x]},
lZ(d){var x,w=this.b
if(w<2)return 0
w=this.c[d*w+1]
x=$.fT
return(x!=null?x:A.hz())[w]},
lX(d){var x,w=this.b
if(w<3)return 0
w=this.c[d*w+2]
x=$.fT
return(x!=null?x:A.hz())[w]},
nk(d){var x,w=this.b
if(w<4)return 0
w=this.c[d*w+3]
x=$.fT
return(x!=null?x:A.hz())[w]},
t_(d,e){return this.eA(0,d,0,e)},
rY(d,e){return this.eA(0,d,1,e)},
rX(d,e){return this.eA(0,d,2,e)},
rW(d,e){return this.eA(0,d,3,e)}}
A.aoa.prototype={
dg(d){return new A.aoa(new Float32Array(B.bv(this.c)),this.a,this.b)},
gfw(d){return this.c.buffer},
gcJ(){return C.hQ},
gbP(){return 1},
eA(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=g},
o3(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
nX(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
m0(d){return this.c[d*this.b]},
lZ(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
lX(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
nk(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
t_(d,e){return this.eA(0,d,0,e)},
rY(d,e){return this.eA(0,d,1,e)},
rX(d,e){return this.eA(0,d,2,e)},
rW(d,e){return this.eA(0,d,3,e)}}
A.aob.prototype={
dg(d){return new A.aob(new Float64Array(B.bv(this.c)),this.a,this.b)},
gfw(d){return this.c.buffer},
gcJ(){return C.jb},
gbP(){return 1},
eA(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=g},
o3(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
nX(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
m0(d){return this.c[d*this.b]},
lZ(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
lX(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
nk(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
t_(d,e){return this.eA(0,d,0,e)},
rY(d,e){return this.eA(0,d,1,e)},
rX(d,e){return this.eA(0,d,2,e)},
rW(d,e){return this.eA(0,d,3,e)}}
A.aoc.prototype={
dg(d){return new A.aoc(new Int16Array(B.bv(this.c)),this.a,this.b)},
gfw(d){return this.c.buffer},
gcJ(){return C.jd},
gbP(){return 32767},
eA(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=D.c.C(g)},
o3(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=D.d.C(e)
if(w>1){x[d+1]=D.d.C(f)
if(w>2)x[d+2]=D.d.C(g)}},
nX(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
m0(d){return this.c[d*this.b]},
lZ(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
lX(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
nk(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
t_(d,e){return this.eA(0,d,0,e)},
rY(d,e){return this.eA(0,d,1,e)},
rX(d,e){return this.eA(0,d,2,e)},
rW(d,e){return this.eA(0,d,3,e)}}
A.aod.prototype={
dg(d){return new A.aod(new Int32Array(B.bv(this.c)),this.a,this.b)},
gfw(d){return this.c.buffer},
gcJ(){return C.je},
gbP(){return 2147483647},
eA(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=D.c.C(g)},
o3(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=D.d.C(e)
if(w>1){x[d+1]=D.d.C(f)
if(w>2)x[d+2]=D.d.C(g)}},
nX(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
m0(d){return this.c[d*this.b]},
lZ(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
lX(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
nk(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
t_(d,e){return this.eA(0,d,0,e)},
rY(d,e){return this.eA(0,d,1,e)},
rX(d,e){return this.eA(0,d,2,e)},
rW(d,e){return this.eA(0,d,3,e)}}
A.aoe.prototype={
dg(d){return new A.aoe(new Int8Array(B.bv(this.c)),this.a,this.b)},
gfw(d){return this.c.buffer},
gcJ(){return C.jc},
gbP(){return 127},
eA(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=D.c.C(g)},
o3(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=D.d.C(e)
if(w>1){x[d+1]=D.d.C(f)
if(w>2)x[d+2]=D.d.C(g)}},
nX(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
m0(d){return this.c[d*this.b]},
lZ(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
lX(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
nk(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
t_(d,e){return this.eA(0,d,0,e)},
rY(d,e){return this.eA(0,d,1,e)},
rX(d,e){return this.eA(0,d,2,e)},
rW(d,e){return this.eA(0,d,3,e)}}
A.aof.prototype={
dg(d){return new A.aof(new Uint16Array(B.bv(this.c)),this.a,this.b)},
gfw(d){return this.c.buffer},
gcJ(){return C.bH},
gbP(){return 65535},
eA(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=D.c.C(g)},
o3(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=D.d.C(e)
if(w>1){x[d+1]=D.d.C(f)
if(w>2)x[d+2]=D.d.C(g)}},
nX(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
m0(d){return this.c[d*this.b]},
lZ(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
lX(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
nk(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
t_(d,e){return this.eA(0,d,0,e)},
rY(d,e){return this.eA(0,d,1,e)},
rX(d,e){return this.eA(0,d,2,e)},
rW(d,e){return this.eA(0,d,3,e)}}
A.Yp.prototype={
dg(d){return new A.Yp(new Uint32Array(B.bv(this.c)),this.a,this.b)},
gfw(d){return this.c.buffer},
gcJ(){return C.hR},
gbP(){return 4294967295},
eA(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=D.c.C(g)},
o3(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=D.d.C(e)
if(w>1){x[d+1]=D.d.C(f)
if(w>2)x[d+2]=D.d.C(g)}},
nX(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
m0(d){return this.c[d*this.b]},
lZ(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
lX(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
nk(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
t_(d,e){return this.eA(0,d,0,e)},
rY(d,e){return this.eA(0,d,1,e)},
rX(d,e){return this.eA(0,d,2,e)},
rW(d,e){return this.eA(0,d,3,e)}}
A.rj.prototype={
dg(d){return A.c9f(this)},
gfw(d){return this.c.buffer},
gcJ(){return C.V},
gbP(){return 255},
eA(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=D.c.C(g)},
o3(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=D.d.C(e)
if(w>1){x[d+1]=D.d.C(f)
if(w>2)x[d+2]=D.d.C(g)}},
OH(d,e,f,g,h){var x,w=this.b
d*=w
x=this.c
x[d]=D.c.C(e)
if(w>1){x[d+1]=D.c.C(f)
if(w>2){x[d+2]=D.c.C(g)
if(w>3)x[d+3]=D.c.C(h)}}},
nX(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
m0(d){var x
d*=this.b
x=this.c
if(d>=x.length)return 0
return x[d]},
lZ(d){var x=this.b
if(x<2)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+1]},
lX(d){var x=this.b
if(x<3)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+2]},
nk(d){var x=this.b
if(x<4)return 255
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+3]},
t_(d,e){return this.eA(0,d,0,e)},
rY(d,e){return this.eA(0,d,1,e)},
rX(d,e){return this.eA(0,d,2,e)},
rW(d,e){return this.eA(0,d,3,e)}}
A.Fk.prototype={
dg(d){var x=this
return new A.Fk(x.a,x.b,x.c,x.d)},
gcJ(){return C.fD},
gt(d){return this.d.c},
ged(){return null},
gbP(){return 1},
glW(d){return this.a},
gmF(d){return this.b},
fu(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gJ(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
i(d,e){var x,w=this.d
if(e<w.c){w=w.d[this.c+e]
x=$.fT
w=(x!=null?x:A.hz())[w]}else w=0
return w},
n(d,e,f){var x=this.d
if(e<x.c)x.d[this.c+e]=A.fe(f)},
gdu(d){return this.gav(0)},
sdu(d,e){this.sav(0,e)},
gav(d){var x,w=this.d
if(w.c>0){w=w.d[this.c]
x=$.fT
w=(x!=null?x:A.hz())[w]}else w=0
return w},
sav(d,e){var x=this.d
if(x.c>0)x.d[this.c]=A.fe(e)},
gaH(){var x,w=this.d
if(w.c>1){w=w.d[this.c+1]
x=$.fT
w=(x!=null?x:A.hz())[w]}else w=0
return w},
saH(d){var x=this.d
if(x.c>1)x.d[this.c+1]=A.fe(d)},
gaL(d){var x,w=this.d
if(w.c>2){w=w.d[this.c+2]
x=$.fT
w=(x!=null?x:A.hz())[w]}else w=0
return w},
saL(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=A.fe(e)},
gaO(d){var x,w=this.d
if(w.c>3){w=w.d[this.c+3]
x=$.fT
w=(x!=null?x:A.hz())[w]}else w=0
return w},
saO(d,e){var x,w=this.d
if(w.c>3){x=this.gaH()
w.d[this.c+3]=A.fe(x)}},
ghK(){return this.gav(0)/1},
shK(d){this.sav(0,d)},
ghv(){return this.gaH()/1},
shv(d){this.saH(d)},
ghC(){return this.gaL(0)/1},
shC(d){this.saL(0,d)},
ghO(){return this.gaO(0)/1},
shO(d){this.saO(0,d)},
giL(){return A.is(this)},
i2(d,e){var x=this
if(x.d.c>0){x.sav(0,e.gav(e))
x.saH(e.gaH())
x.saL(0,e.gaL(e))
x.saO(0,e.gaO(e))}},
ju(d,e,f){var x=this,w=x.d,v=w.c
if(v>0){w=w.d
w[x.c]=A.fe(d)
if(v>1){w[x.c+1]=A.fe(e)
if(v>2)w[x.c+2]=A.fe(f)}}},
hx(d,e,f,g){var x=this,w=x.d,v=w.c
if(v>0){w=w.d
w[x.c]=A.fe(d)
if(v>1){w[x.c+1]=A.fe(e)
if(v>2){w[x.c+2]=A.fe(f)
if(v>3)w[x.c+3]=A.fe(g)}}}},
gW(d){return new A.fQ(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Fk)return B.ax(B.F(u,!0,B.q(u).h("t.E")))===B.ax(B.F(e,!0,B.q(e).h("t.E")))
if(y.L.b(e)){x=J.a5(e)
w=u.d
v=w.c
if(x.gt(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
mY(d){return A.nW(this,null,d,null,null)},
$ib6:1,
$id8:1,
$ici:1,
ghf(d){return this.d}}
A.Fl.prototype={
dg(d){var x=this
return new A.Fl(x.a,x.b,x.c,x.d)},
gt(d){return this.d.c},
ged(){return null},
gbP(){return 1},
gcJ(){return C.hQ},
glW(d){return this.a},
gmF(d){return this.b},
fu(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gJ(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
i(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
n(d,e,f){var x=this.d
if(e<x.c)x.d[this.c+e]=f},
gdu(d){return this.gav(0)},
sdu(d,e){this.sav(0,e)},
gav(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sav(d,e){var x=this.d
if(x.c>0)x.d[this.c]=e},
gaH(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saH(d){var x=this.d
if(x.c>1)x.d[this.c+1]=d},
gaL(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saL(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=e},
gaO(d){var x=this.d
return x.c>3?x.d[this.c+3]:1},
saO(d,e){var x=this.d
if(x.c>3)x.d[this.c+3]=e},
ghK(){return this.gav(0)/1},
shK(d){this.sav(0,d)},
ghv(){return this.gaH()/1},
shv(d){this.saH(d)},
ghC(){return this.gaL(0)/1},
shC(d){this.saL(0,d)},
ghO(){return this.gaO(0)/1},
shO(d){this.saO(0,d)},
giL(){return A.is(this)},
i2(d,e){var x=this
x.sav(0,e.gav(e))
x.saH(e.gaH())
x.saL(0,e.gaL(e))
x.saO(0,e.gaO(e))},
ju(d,e,f){var x=this.d,w=x.d,v=this.c
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
hx(d,e,f,g){var x=this.d,w=x.d,v=this.c
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
gW(d){return new A.fQ(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Fl)return B.ax(B.F(u,!0,B.q(u).h("t.E")))===B.ax(B.F(e,!0,B.q(e).h("t.E")))
if(y.L.b(e)){x=J.a5(e)
w=u.d
v=w.c
if(x.gt(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
mY(d){return A.nW(this,null,d,null,null)},
$ib6:1,
$id8:1,
$ici:1,
ghf(d){return this.d}}
A.Fm.prototype={
dg(d){var x=this
return new A.Fm(x.a,x.b,x.c,x.d)},
gt(d){return this.d.c},
ged(){return null},
gbP(){return 1},
gcJ(){return C.jb},
glW(d){return this.a},
gmF(d){return this.b},
fu(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gJ(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
i(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
n(d,e,f){var x=this.d
if(e<x.c)x.d[this.c+e]=f},
gdu(d){return this.gav(0)},
sdu(d,e){this.sav(0,e)},
gav(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sav(d,e){var x=this.d
if(x.c>0)x.d[this.c]=e},
gaH(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saH(d){var x=this.d
if(x.c>1)x.d[this.c+1]=d},
gaL(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saL(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=e},
gaO(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saO(d,e){var x=this.d
if(x.c>3)x.d[this.c+3]=e},
ghK(){return this.gav(0)/1},
shK(d){this.sav(0,d)},
ghv(){return this.gaH()/1},
shv(d){this.saH(d)},
ghC(){return this.gaL(0)/1},
shC(d){this.saL(0,d)},
ghO(){return this.gaO(0)/1},
shO(d){this.saO(0,d)},
giL(){return A.is(this)},
i2(d,e){var x=this
x.sav(0,e.gav(e))
x.saH(e.gaH())
x.saL(0,e.gaL(e))
x.saO(0,e.gaO(e))},
ju(d,e,f){var x=this.d,w=x.d,v=this.c
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
hx(d,e,f,g){var x=this.d,w=x.d,v=this.c
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
gW(d){return new A.fQ(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Fm)return B.ax(B.F(u,!0,B.q(u).h("t.E")))===B.ax(B.F(e,!0,B.q(e).h("t.E")))
if(y.L.b(e)){x=J.a5(e)
w=u.d
v=w.c
if(x.gt(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
mY(d){return A.nW(this,null,d,null,null)},
$ib6:1,
$id8:1,
$ici:1,
ghf(d){return this.d}}
A.Fn.prototype={
dg(d){var x=this
return new A.Fn(x.a,x.b,x.c,x.d)},
gt(d){return this.d.c},
ged(){return null},
gbP(){return 32767},
gcJ(){return C.jd},
glW(d){return this.a},
gmF(d){return this.b},
fu(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gJ(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
i(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
n(d,e,f){var x=this.d
if(e<x.c)x.d[this.c+e]=D.d.C(f)},
gdu(d){return this.gav(0)},
sdu(d,e){this.sav(0,e)},
gav(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sav(d,e){var x=this.d
if(x.c>0)x.d[this.c]=D.d.C(e)},
gaH(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saH(d){var x=this.d
if(x.c>1)x.d[this.c+1]=D.d.C(d)},
gaL(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saL(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=D.d.C(e)},
gaO(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saO(d,e){var x=this.d
if(x.c>3)x.d[this.c+3]=D.d.C(e)},
ghK(){return this.gav(0)/32767},
shK(d){this.sav(0,d*32767)},
ghv(){return this.gaH()/32767},
shv(d){this.saH(d*32767)},
ghC(){return this.gaL(0)/32767},
shC(d){this.saL(0,d*32767)},
ghO(){return this.gaO(0)/32767},
shO(d){this.saO(0,d*32767)},
giL(){return A.is(this)},
i2(d,e){var x=this
x.sav(0,e.gav(e))
x.saH(e.gaH())
x.saL(0,e.gaL(e))
x.saO(0,e.gaO(e))},
ju(d,e,f){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.C(d)
if(v>1){w[x+1]=D.c.C(e)
if(v>2)w[x+2]=D.c.C(f)}}},
hx(d,e,f,g){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.C(d)
if(v>1){w[x+1]=D.c.C(e)
if(v>2){w[x+2]=D.c.C(f)
if(v>3)w[x+3]=D.c.C(g)}}}},
gW(d){return new A.fQ(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Fn)return B.ax(B.F(u,!0,B.q(u).h("t.E")))===B.ax(B.F(e,!0,B.q(e).h("t.E")))
if(y.L.b(e)){x=J.a5(e)
w=u.d
v=w.c
if(x.gt(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
mY(d){return A.nW(this,null,d,null,null)},
$ib6:1,
$id8:1,
$ici:1,
ghf(d){return this.d}}
A.Fo.prototype={
dg(d){var x=this
return new A.Fo(x.a,x.b,x.c,x.d)},
gt(d){return this.d.c},
ged(){return null},
gbP(){return 2147483647},
gcJ(){return C.je},
glW(d){return this.a},
gmF(d){return this.b},
fu(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gJ(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
i(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
n(d,e,f){var x=this.d
if(e<x.c)x.d[this.c+e]=D.d.C(f)},
gdu(d){return this.gav(0)},
sdu(d,e){this.sav(0,e)},
gav(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sav(d,e){var x=this.d
if(x.c>0)x.d[this.c]=D.d.C(e)},
gaH(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saH(d){var x=this.d
if(x.c>1)x.d[this.c+1]=D.d.C(d)},
gaL(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saL(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=D.d.C(e)},
gaO(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saO(d,e){var x=this.d
if(x.c>3)x.d[this.c+3]=D.d.C(e)},
ghK(){return this.gav(0)/2147483647},
shK(d){this.sav(0,d*2147483647)},
ghv(){return this.gaH()/2147483647},
shv(d){this.saH(d*2147483647)},
ghC(){return this.gaL(0)/2147483647},
shC(d){this.saL(0,d*2147483647)},
ghO(){return this.gaO(0)/2147483647},
shO(d){this.saO(0,d*2147483647)},
giL(){return A.is(this)},
i2(d,e){var x=this
x.sav(0,e.gav(e))
x.saH(e.gaH())
x.saL(0,e.gaL(e))
x.saO(0,e.gaO(e))},
ju(d,e,f){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.C(d)
if(v>1){w[x+1]=D.c.C(e)
if(v>2)w[x+2]=D.c.C(f)}}},
hx(d,e,f,g){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.C(d)
if(v>1){w[x+1]=D.c.C(e)
if(v>2){w[x+2]=D.c.C(f)
if(v>3)w[x+3]=D.c.C(g)}}}},
gW(d){return new A.fQ(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Fo)return B.ax(B.F(u,!0,B.q(u).h("t.E")))===B.ax(B.F(e,!0,B.q(e).h("t.E")))
if(y.L.b(e)){x=J.a5(e)
w=u.d
v=w.c
if(x.gt(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
mY(d){return A.nW(this,null,d,null,null)},
$ib6:1,
$id8:1,
$ici:1,
ghf(d){return this.d}}
A.Fp.prototype={
dg(d){var x=this
return new A.Fp(x.a,x.b,x.c,x.d)},
gt(d){return this.d.c},
ged(){return null},
gbP(){return 127},
gcJ(){return C.jc},
glW(d){return this.a},
gmF(d){return this.b},
fu(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gJ(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
i(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
n(d,e,f){var x=this.d
if(e<x.c)x.d[this.c+e]=D.d.C(f)},
gdu(d){return this.gav(0)},
sdu(d,e){this.sav(0,e)},
gav(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sav(d,e){var x=this.d
if(x.c>0)x.d[this.c]=D.d.C(e)},
gaH(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saH(d){var x=this.d
if(x.c>1)x.d[this.c+1]=D.d.C(d)},
gaL(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saL(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=D.d.C(e)},
gaO(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saO(d,e){var x=this.d
if(x.c>3)x.d[this.c+3]=D.d.C(e)},
ghK(){return this.gav(0)/127},
shK(d){this.sav(0,d*127)},
ghv(){return this.gaH()/127},
shv(d){this.saH(d*127)},
ghC(){return this.gaL(0)/127},
shC(d){this.saL(0,d*127)},
ghO(){return this.gaO(0)/127},
shO(d){this.saO(0,d*127)},
giL(){return A.is(this)},
i2(d,e){var x=this
x.sav(0,e.gav(e))
x.saH(e.gaH())
x.saL(0,e.gaL(e))
x.saO(0,e.gaO(e))},
ju(d,e,f){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.C(d)
if(v>1){w[x+1]=D.c.C(e)
if(v>2)w[x+2]=D.c.C(f)}}},
hx(d,e,f,g){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.C(d)
if(v>1){w[x+1]=D.c.C(e)
if(v>2){w[x+2]=D.c.C(f)
if(v>3)w[x+3]=D.c.C(g)}}}},
gW(d){return new A.fQ(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Fp)return B.ax(B.F(u,!0,B.q(u).h("t.E")))===B.ax(B.F(e,!0,B.q(e).h("t.E")))
if(y.L.b(e)){x=J.a5(e)
w=u.d
v=w.c
if(x.gt(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
mY(d){return A.nW(this,null,d,null,null)},
$ib6:1,
$id8:1,
$ici:1,
ghf(d){return this.d}}
A.aor.prototype={
q(){var x=this,w=x.a
if(w.glW(w)+1>x.d){w.fu(0,x.b,w.gmF(w)+1)
return w.gmF(w)<=x.e}return w.q()},
gJ(d){return this.a},
$ib6:1}
A.Fq.prototype={
dg(d){var x=this
return new A.Fq(x.a,x.b,x.c,x.d,x.e,x.f)},
gt(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
ged(){return this.f.f},
gbP(){return this.f.gbP()},
gcJ(){return C.eu},
glW(d){return this.a},
gmF(d){return this.b},
fu(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.f
w=f*x.e
v.e=w
x=e*x.c
v.c=w+D.c.M(x,3)
v.d=x&7},
gJ(d){return this},
q(){var x,w=this,v=++w.a,u=w.f
if(v===u.a){w.a=0
v=++w.b
w.d=0;++w.c
w.e=w.e+u.e
return v<u.b}x=u.c
if(u.f!=null||x===1){if(++w.d>7){w.d=0;++w.c}}else{v*=x
w.d=v&7
w.c=w.e+D.c.M(v,3)}v=w.c
u=u.d
u===$&&B.b()
return v<u.byteLength},
a1O(d,e){var x,w=this.c,v=7-(this.d+e)
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
if(w>=x.length)return 0
return D.c.f8(x[w],v)&1},
oe(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.a1O(0,d):0
else x=w.nX(0,this.a1O(0,0),d)
return x},
jB(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=7-(this.d+d)
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.bh(D.d.C(e),0,1)
s=C.ayy[w]
v=D.c.e8(t,w)
r.d[x]=(u&s|v)>>>0},
i(d,e){return this.oe(e)},
n(d,e,f){return this.jB(e,f)},
gdu(d){return this.a1O(0,0)},
sdu(d,e){this.jB(0,e)},
gav(d){return this.oe(0)},
sav(d,e){this.jB(0,e)},
gaH(){return this.oe(1)},
saH(d){this.jB(1,d)},
gaL(d){return this.oe(2)},
saL(d,e){this.jB(2,e)},
gaO(d){return this.oe(3)},
saO(d,e){this.jB(3,e)},
ghK(){return this.oe(0)/this.f.gbP()},
shK(d){this.jB(0,d*this.f.gbP())},
ghv(){return this.oe(1)/this.f.gbP()},
shv(d){this.jB(1,d*this.f.gbP())},
ghC(){return this.oe(2)/this.f.gbP()},
shC(d){this.jB(2,d*this.f.gbP())},
ghO(){return this.oe(3)/this.f.gbP()},
shO(d){this.jB(3,d*this.f.gbP())},
giL(){return A.is(this)},
i2(d,e){var x=this
x.jB(0,e.gav(e))
x.jB(1,e.gaH())
x.jB(2,e.gaL(e))
x.jB(3,e.gaO(e))},
ju(d,e,f){var x=this,w=x.f.c
if(w>0){x.jB(0,d)
if(w>1){x.jB(1,e)
if(w>2)x.jB(2,f)}}},
hx(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.jB(0,d)
if(w>1){x.jB(1,e)
if(w>2){x.jB(2,f)
if(w>3)x.jB(3,g)}}}},
gW(d){return new A.fQ(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Fq)return B.ax(B.F(u,!0,B.q(u).h("t.E")))===B.ax(B.F(e,!0,B.q(e).h("t.E")))
if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a5(e)
if(x.gt(e)!==v)return!1
if(u.oe(0)!==x.i(e,0))return!1
if(v>1){if(u.oe(1)!==x.i(e,1))return!1
if(v>2){if(u.oe(2)!==x.i(e,2))return!1
if(v>3)if(u.oe(3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
mY(d){return A.nW(this,null,d,null,null)},
$ib6:1,
$id8:1,
$ici:1,
ghf(d){return this.f}}
A.Fr.prototype={
dg(d){var x=this
return new A.Fr(x.a,x.b,x.c,x.d)},
gt(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
ged(){return this.d.e},
gbP(){return this.d.gbP()},
gcJ(){return C.bH},
glW(d){return this.a},
gmF(d){return this.b},
fu(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gJ(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c
x+=v.e==null?v.c:1
w.c=x
return x<v.d.length},
h6(d,e){var x=this.d,w=x.e
if(w!=null)x=w.nX(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
i(d,e){return this.h6(0,e)},
n(d,e,f){var x=this.d
if(e<x.c)x.d[this.c+e]=D.d.C(f)},
gdu(d){return this.gav(0)},
sdu(d,e){this.sav(0,e)},
gav(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.m0(x.d[this.c])
return x},
sav(d,e){var x=this.d
if(x.c>0)x.d[this.c]=D.d.C(e)},
gaH(){var x=this.d,w=x.e
if(w==null)x=x.c>1?x.d[this.c+1]:0
else x=w.lZ(x.d[this.c])
return x},
saH(d){var x=this.d
if(x.c>1)x.d[this.c+1]=D.d.C(d)},
gaL(d){var x=this.d,w=x.e
if(w==null)x=x.c>2?x.d[this.c+2]:0
else x=w.lX(x.d[this.c])
return x},
saL(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=D.d.C(e)},
gaO(d){var x=this.d,w=x.e
if(w==null)x=x.c>3?x.d[this.c+3]:0
else x=w.nk(x.d[this.c])
return x},
saO(d,e){var x=this.d
if(x.c>3)x.d[this.c+3]=D.d.C(e)},
ghK(){return this.gav(0)/this.d.gbP()},
shK(d){this.sav(0,d*this.d.gbP())},
ghv(){return this.gaH()/this.d.gbP()},
shv(d){this.saH(d*this.d.gbP())},
ghC(){return this.gaL(0)/this.d.gbP()},
shC(d){this.saL(0,d*this.d.gbP())},
ghO(){return this.gaO(0)/this.d.gbP()},
shO(d){this.saO(0,d*this.d.gbP())},
giL(){return A.is(this)},
i2(d,e){var x=this
x.sav(0,e.gav(e))
x.saH(e.gaH())
x.saL(0,e.gaL(e))
x.saO(0,e.gaO(e))},
ju(d,e,f){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.C(d)
if(v>1){w[x+1]=D.c.C(e)
if(v>2)w[x+2]=D.c.C(f)}}},
hx(d,e,f,g){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.C(d)
if(v>1){w[x+1]=D.c.C(e)
if(v>2){w[x+2]=D.c.C(f)
if(v>3)w[x+3]=D.c.C(g)}}}},
gW(d){return new A.fQ(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Fr)return B.ax(B.F(u,!0,B.q(u).h("t.E")))===B.ax(B.F(e,!0,B.q(e).h("t.E")))
if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a5(e)
if(x.gt(e)!==v)return!1
if(u.h6(0,0)!==x.i(e,0))return!1
if(v>1){if(u.h6(0,1)!==x.i(e,1))return!1
if(v>2){if(u.h6(0,2)!==x.i(e,2))return!1
if(v>3)if(u.h6(0,3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
mY(d){return A.nW(this,null,d,null,null)},
$ib6:1,
$id8:1,
$ici:1,
ghf(d){return this.d}}
A.Fs.prototype={
dg(d){var x=this
return new A.Fs(x.a,x.b,x.c,x.d,x.e,x.f)},
gt(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
ged(){return this.f.f},
gbP(){return this.f.gbP()},
gcJ(){return C.f6},
gaq8(){var x=this.f
return x.f!=null?2:x.c<<1>>>0},
glW(d){return this.a},
gmF(d){return this.b},
fu(d,e,f){var x,w,v,u=this
u.a=e
u.b=f
x=u.gaq8()
w=u.b*u.f.e
u.e=w
v=u.a*x
u.c=w+D.c.M(v,3)
u.d=v&7},
gJ(d){return this},
q(){var x,w,v=this,u=v.f
if(++v.a===u.a){v.a=0
x=++v.b
v.d=0;++v.c
v.e=v.e+u.e
return x<u.b}if(u.f!=null||u.c===1){x=v.d+=2
if(x>7){v.d=0;++v.c}}else{w=v.gaq8()
x=v.a*w
v.d=x&7
v.c=v.e+D.c.M(x,3)}x=v.c
u=u.d
u===$&&B.b()
return x<u.length},
a1P(d,e){var x,w=this.c,v=6-(this.d+(e<<1>>>0))
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
return D.c.f8(x[w],v)&3},
of(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.a1P(0,d):0
else x=w.nX(0,this.a1P(0,0),d)
return x},
jC(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=6-(this.d+(d<<1>>>0))
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.bh(D.d.C(e),0,3)
s=C.amj[D.c.M(w,1)]
v=D.c.e8(t,w)
r.d[x]=(u&s|v)>>>0},
i(d,e){return this.of(e)},
n(d,e,f){return this.jC(e,f)},
gdu(d){return this.a1P(0,0)},
sdu(d,e){this.jC(0,e)},
gav(d){return this.of(0)},
sav(d,e){this.jC(0,e)},
gaH(){return this.of(1)},
saH(d){this.jC(1,d)},
gaL(d){return this.of(2)},
saL(d,e){this.jC(2,e)},
gaO(d){return this.of(3)},
saO(d,e){this.jC(3,e)},
ghK(){return this.of(0)/this.f.gbP()},
shK(d){this.jC(0,d*this.f.gbP())},
ghv(){return this.of(1)/this.f.gbP()},
shv(d){this.jC(1,d*this.f.gbP())},
ghC(){return this.of(2)/this.f.gbP()},
shC(d){this.jC(2,d*this.f.gbP())},
ghO(){return this.of(3)/this.f.gbP()},
shO(d){this.jC(3,d*this.f.gbP())},
giL(){return A.is(this)},
i2(d,e){var x=this
x.jC(0,e.gav(e))
x.jC(1,e.gaH())
x.jC(2,e.gaL(e))
x.jC(3,e.gaO(e))},
ju(d,e,f){var x=this,w=x.f.c
if(w>0){x.jC(0,d)
if(w>1){x.jC(1,e)
if(w>2)x.jC(2,f)}}},
hx(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.jC(0,d)
if(w>1){x.jC(1,e)
if(w>2){x.jC(2,f)
if(w>3)x.jC(3,g)}}}},
gW(d){return new A.fQ(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Fs)return B.ax(B.F(u,!0,B.q(u).h("t.E")))===B.ax(B.F(e,!0,B.q(e).h("t.E")))
if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a5(e)
if(x.gt(e)!==v)return!1
if(u.of(0)!==x.i(e,0))return!1
if(v>1){if(u.of(1)!==x.i(e,1))return!1
if(v>2){if(u.of(2)!==x.i(e,2))return!1
if(v>3)if(u.of(3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
mY(d){return A.nW(this,null,d,null,null)},
$ib6:1,
$id8:1,
$ici:1,
ghf(d){return this.f}}
A.Ft.prototype={
dg(d){var x=this
return new A.Ft(x.a,x.b,x.c,x.d)},
gt(d){return this.d.c},
ged(){return null},
gbP(){return 4294967295},
gcJ(){return C.hR},
glW(d){return this.a},
gmF(d){return this.b},
fu(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gJ(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
i(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
n(d,e,f){var x=this.d
if(e<x.c)x.d[this.c+e]=D.d.C(f)},
gdu(d){return this.gav(0)},
sdu(d,e){this.sav(0,e)},
gav(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sav(d,e){var x=this.d
if(x.c>0)x.d[this.c]=D.d.C(e)},
gaH(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saH(d){var x=this.d
if(x.c>1)x.d[this.c+1]=D.d.C(d)},
gaL(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saL(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=D.d.C(e)},
gaO(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saO(d,e){var x=this.d
if(x.c>3)x.d[this.c+3]=D.d.C(e)},
ghK(){return this.gav(0)/4294967295},
shK(d){this.sav(0,d*4294967295)},
ghv(){return this.gaH()/4294967295},
shv(d){this.saH(d*4294967295)},
ghC(){return this.gaL(0)/4294967295},
shC(d){this.saL(0,d*4294967295)},
ghO(){return this.gaO(0)/4294967295},
shO(d){this.saO(0,d*4294967295)},
giL(){return A.is(this)},
i2(d,e){var x=this
x.sav(0,e.gav(e))
x.saH(e.gaH())
x.saL(0,e.gaL(e))
x.saO(0,e.gaO(e))},
ju(d,e,f){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.C(d)
if(v>1){w[x+1]=D.c.C(e)
if(v>2)w[x+2]=D.c.C(f)}}},
hx(d,e,f,g){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.C(d)
if(v>1){w[x+1]=D.c.C(e)
if(v>2){w[x+2]=D.c.C(f)
if(v>3)w[x+3]=D.c.C(g)}}}},
gW(d){return new A.fQ(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Ft)return B.ax(B.F(u,!0,B.q(u).h("t.E")))===B.ax(B.F(e,!0,B.q(e).h("t.E")))
if(y.L.b(e)){x=J.a5(e)
w=u.d
v=w.c
if(x.gt(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
mY(d){return A.nW(this,null,d,null,null)},
$ib6:1,
$id8:1,
$ici:1,
ghf(d){return this.d}}
A.Fu.prototype={
dg(d){var x=this
return new A.Fu(x.a,x.b,x.c,x.d,x.e)},
gt(d){var x=this.e,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
ged(){return this.e.f},
gbP(){return this.e.gbP()},
gcJ(){return C.f7},
glW(d){return this.a},
gmF(d){return this.b},
fu(d,e,f){var x,w,v,u=this
u.a=e
u.b=f
x=u.e
w=x.c*4
v=x.e
if(w===4)x=f*v+D.c.M(e,1)
else if(w===8)x=f*x.a+e
else{x=f*v
x=w===16?x+(e<<1>>>0):x+D.c.M(e*w,3)}u.c=x
x=e*w
u.d=w>7?x&4:x&7},
gJ(d){return this},
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
a1Q(d,e){var x,w=this.c,v=4-(this.d+(e<<2>>>0))
if(v<0){v+=8;++w}x=this.e.d
x===$&&B.b()
return D.c.f8(x[w],v)&15},
od(d){var x=this.e,w=x.f
if(w==null)x=x.c>d?this.a1Q(0,d):0
else x=w.nX(0,this.a1Q(0,0),d)
return x},
jE(d,e){var x,w,v,u,t,s,r=this.e
if(d>=r.c)return
x=this.c
w=4-(this.d+(d<<2>>>0))
if(w<0){w+=8;++x}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.bh(D.d.C(e),0,15)
s=w===4?15:240
v=D.c.e8(t,w)
r.d[x]=(u&s|v)>>>0},
i(d,e){return this.od(e)},
n(d,e,f){return this.jE(e,f)},
gdu(d){return this.a1Q(0,0)},
sdu(d,e){this.jE(0,e)},
gav(d){return this.od(0)},
sav(d,e){this.jE(0,e)},
gaH(){return this.od(1)},
saH(d){this.jE(1,d)},
gaL(d){return this.od(2)},
saL(d,e){this.jE(2,e)},
gaO(d){return this.od(3)},
saO(d,e){this.jE(3,e)},
ghK(){return this.od(0)/this.e.gbP()},
shK(d){this.jE(0,d*this.e.gbP())},
ghv(){return this.od(1)/this.e.gbP()},
shv(d){this.jE(1,d*this.e.gbP())},
ghC(){return this.od(2)/this.e.gbP()},
shC(d){this.jE(2,d*this.e.gbP())},
ghO(){return this.od(3)/this.e.gbP()},
shO(d){this.jE(3,d*this.e.gbP())},
giL(){return A.is(this)},
i2(d,e){var x=this
x.jE(0,e.gav(e))
x.jE(1,e.gaH())
x.jE(2,e.gaL(e))
x.jE(3,e.gaO(e))},
ju(d,e,f){var x=this,w=x.e.c
if(w>0){x.jE(0,d)
if(w>1){x.jE(1,e)
if(w>2)x.jE(2,f)}}},
hx(d,e,f,g){var x=this,w=x.e.c
if(w>0){x.jE(0,d)
if(w>1){x.jE(1,e)
if(w>2){x.jE(2,f)
if(w>3)x.jE(3,g)}}}},
gW(d){return new A.fQ(this)},
k(d,e){var x,w,v=this
if(e==null)return!1
if(e instanceof A.Fu)return B.ax(B.F(v,!0,B.q(v).h("t.E")))===B.ax(B.F(e,!0,B.q(e).h("t.E")))
if(y.L.b(e)){x=v.e.c
w=J.a5(e)
if(w.gt(e)!==x)return!1
if(v.od(0)!==w.i(e,0))return!1
if(x>1){if(v.od(1)!==w.i(e,1))return!1
if(x>2){if(v.od(2)!==w.i(e,2))return!1
if(x>3)if(v.od(3)!==w.i(e,3))return!1}}return!0}return!1},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
mY(d){return A.nW(this,null,d,null,null)},
$ib6:1,
$id8:1,
$ici:1,
ghf(d){return this.e}}
A.Fv.prototype={
dg(d){var x=this
return new A.Fv(x.a,x.b,x.c,x.d)},
gt(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
ged(){return this.d.e},
gbP(){return this.d.gbP()},
gcJ(){return C.V},
glW(d){return this.a},
gmF(d){return this.b},
fu(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gJ(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c
x+=v.e==null?v.c:1
w.c=x
return x<v.d.length},
h6(d,e){var x=this.d,w=x.e
if(w!=null)x=w.nX(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
i(d,e){return this.h6(0,e)},
n(d,e,f){var x=this.d
if(e<x.c)x.d[this.c+e]=D.d.C(D.d.bh(f,0,255))},
gdu(d){return this.d.d[this.c]},
sdu(d,e){this.d.d[this.c]=D.d.C(D.d.bh(e,0,255))},
gav(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.m0(x.d[this.c])
return x},
sav(d,e){var x=this.d
if(x.c>0)x.d[this.c]=D.d.C(D.d.bh(e,0,255))},
gaH(){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>1?w.d[x.c+1]:0}else w=v.lZ(w.d[x.c])
return w},
saH(d){var x=this.d,w=x.c
if(w===2)x.d[this.c]=D.d.C(D.d.bh(d,0,255))
else if(w>1)x.d[this.c+1]=D.d.C(D.d.bh(d,0,255))},
gaL(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>2?w.d[x.c+2]:0}else w=v.lX(w.d[x.c])
return w},
saL(d,e){var x=this.d,w=x.c
if(w===2)x.d[this.c]=D.d.C(D.d.bh(e,0,255))
else if(w>2)x.d[this.c+2]=D.d.C(D.d.bh(e,0,255))},
gaO(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c+1]
else w=v>3?w.d[x.c+3]:255}else w=v.nk(w.d[x.c])
return w},
saO(d,e){var x=this.d,w=x.c
if(w===2)x.d[this.c+1]=D.d.C(D.d.bh(e,0,255))
else if(w>3)x.d[this.c+3]=D.d.C(D.d.bh(e,0,255))},
ghK(){return this.gav(0)/this.d.gbP()},
shK(d){this.sav(0,d*this.d.gbP())},
ghv(){return this.gaH()/this.d.gbP()},
shv(d){this.saH(d*this.d.gbP())},
ghC(){return this.gaL(0)/this.d.gbP()},
shC(d){this.saL(0,d*this.d.gbP())},
ghO(){return this.gaO(0)/this.d.gbP()},
shO(d){this.saO(0,d*this.d.gbP())},
giL(){return this.d.c===2?this.gav(0):A.is(this)},
i2(d,e){var x=this
if(x.d.e!=null)x.sdu(0,e.gdu(e))
else{x.sav(0,e.gav(e))
x.saH(e.gaH())
x.saL(0,e.gaL(e))
x.saO(0,e.gaO(e))}},
ju(d,e,f){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.C(d)
if(v>1){w[x+1]=D.c.C(e)
if(v>2)w[x+2]=D.c.C(f)}}},
hx(d,e,f,g){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.C(d)
if(v>1){w[x+1]=D.c.C(e)
if(v>2){w[x+2]=D.c.C(f)
if(v>3)w[x+3]=D.c.C(g)}}}},
gW(d){return new A.fQ(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Fv)return B.ax(B.F(u,!0,B.q(u).h("t.E")))===B.ax(B.F(e,!0,B.q(e).h("t.E")))
if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a5(e)
if(x.gt(e)!==v)return!1
if(u.h6(0,0)!==x.i(e,0))return!1
if(v>1){if(u.h6(0,1)!==x.i(e,1))return!1
if(v>2){if(u.h6(0,2)!==x.i(e,2))return!1
if(v>3)if(u.h6(0,3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.ax(B.F(this,!0,B.q(this).h("t.E")))},
mY(d){return A.nW(this,null,d,null,null)},
$ib6:1,
$id8:1,
$ici:1,
ghf(d){return this.d}}
A.eI.prototype={
dg(d){return new A.eI()},
ghf(d){return $.ciq()},
glW(d){return 0},
gmF(d){return 0},
gt(d){return 0},
gbP(){return 0},
gcJ(){return C.V},
ged(){return null},
i(d,e){return 0},
n(d,e,f){},
gdu(d){return 0},
sdu(d,e){},
gav(d){return 0},
sav(d,e){},
gaH(){return 0},
saH(d){},
gaL(d){return 0},
saL(d,e){},
gaO(d){return 0},
saO(d,e){},
ghK(){return 0},
shK(d){},
ghv(){return 0},
shv(d){},
ghC(){return 0},
shC(d){},
ghO(){return 0},
shO(d){},
giL(){return 0},
i2(d,e){},
ju(d,e,f){},
hx(d,e,f,g){},
fu(d,e,f){},
gJ(d){return this},
q(){return!1},
k(d,e){if(e==null)return!1
return e instanceof A.eI},
gv(d){return 0},
gW(d){return new A.fQ(this)},
mY(d){return this},
$ib6:1,
$id8:1,
$ici:1}
A.b_n.prototype={
G(){return"FlipDirection."+this.b}}
A.ajq.prototype={
j(d){return"ImageException: "+this.a},
$iaS:1}
A.kI.prototype={
gt(d){return this.c-this.d},
i(d,e){return J.u(this.a,this.d+e)},
n(d,e,f){J.bX(this.a,this.d+e,f)
return f},
qc(d,e,f,g){var x=this.a,w=J.cG(x),v=this.d+d
if(f instanceof A.kI)w.d_(x,v,v+e,f.a,f.d+g)
else w.d_(x,v,v+e,y.L.a(f),g)},
yc(d,e,f){return this.qc(d,e,f,0)},
bsK(d,e,f){var x=this.a,w=this.d+d
J.qv(x,w,w+e,f)},
Z5(d,e,f){var x=this,w=f!=null?x.b+f:x.d
return A.cl(x.a,x.e,d,w+e)},
iS(d){return this.Z5(d,0,null)},
z7(d,e){return this.Z5(d,0,e)},
P6(d,e){return this.Z5(d,e,null)},
dc(d,e){var x=this,w=x.d,v=w+(x.c-w)
for(;w<v;++w)if(J.n(J.u(x.a,w),e))return w-x.b
return-1},
cw(){return J.u(this.a,this.d++)},
jV(d){var x=this.iS(d)
this.d=this.d+(x.c-x.d)
return x},
p7(d){var x,w,v,u,t=this
if(d==null){x=B.a([],y.t)
for(w=t.c;v=t.d,v<w;){u=t.a
t.d=v+1
v=J.u(u,v)
if(v===0)return B.dY(x,0,null)
x.push(v)}throw B.d(A.bC("EOF reached without finding string terminator (length: "+B.o(d)+")"))}return B.dY(t.jV(d).fX(),0,null)},
N8(){return this.p7(null)},
axp(d){var x,w,v,u=this,t=B.a([],y.t)
for(x=u.c;w=u.d,w<x;){v=u.a
u.d=w+1
w=J.u(v,w)
t.push(w)
if(w===10||t.length>=d)return B.dY(t,0,null)}return B.dY(t,0,null)},
bxa(){return this.axp(256)},
bxb(){var x,w,v,u=this,t=B.a([],y.t)
for(x=u.c;w=u.d,w<x;){v=u.a
u.d=w+1
w=J.u(v,w)
if(w===0)return new B.Cq(!0).D0(t,0,null,!0)
t.push(w)}return D.ah.At(0,t,!0)},
bz(){var x=this,w=J.u(x.a,x.d++)&255,v=J.u(x.a,x.d++)&255
if(x.e)return w<<8|v
return v<<8|w},
qh(){var x=this,w=J.u(x.a,x.d++)&255,v=J.u(x.a,x.d++)&255,u=J.u(x.a,x.d++)&255
if(x.e)return u|v<<8|w<<16
return w|v<<8|u<<16},
ae(){var x=this,w=J.u(x.a,x.d++)&255,v=J.u(x.a,x.d++)&255,u=J.u(x.a,x.d++)&255,t=J.u(x.a,x.d++)&255
if(x.e)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
WW(){return A.cLX(this.a8H())},
a8H(){var x=this,w=J.u(x.a,x.d++)&255,v=J.u(x.a,x.d++)&255,u=J.u(x.a,x.d++)&255,t=J.u(x.a,x.d++)&255,s=J.u(x.a,x.d++)&255,r=J.u(x.a,x.d++)&255,q=J.u(x.a,x.d++)&255,p=J.u(x.a,x.d++)&255
if(x.e)return(D.c.dU(w,56)|D.c.dU(v,48)|D.c.dU(u,40)|D.c.dU(t,32)|s<<24|r<<16|q<<8|p)>>>0
return(D.c.dU(p,56)|D.c.dU(q,48)|D.c.dU(r,40)|D.c.dU(s,32)|t<<24|u<<16|v<<8|w)>>>0},
No(d,e,f){var x,w=this,v=w.a
if(y.D.b(v))return w.ayu(e,f)
x=w.b+w.d+e
return J.aM9(v,x,f<=0?w.c:x+f)},
ayu(d,e){var x,w=this,v=e==null?w.c-w.d-d:e,u=w.a
if(y.D.b(u))return B.bS(u.buffer,u.byteOffset+w.d+d,v)
x=w.d+d
x=J.aM9(u,x,x+v)
return new Uint8Array(B.bv(x))},
fX(){return this.ayu(0,null)},
Nr(){var x=this.a
if(y.D.b(x))return B.no(x.buffer,x.byteOffset+this.d,null)
return B.no(this.fX().buffer,0,null)}}
A.bbY.prototype={
bfS(d){var x=this
x.ajd(d)
x.agu()
x.aiV()
x.af7()},
b35(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.c=Math.max(d,4)
n.f=m-n.d
n.r=m-1
x=D.d.aZ(m,8)
n.w=x
n.x=x*256
n.Q=new A.Yp(new Uint32Array(1024),256,4)
n.a=new A.rj(new Uint8Array(768),256,3)
n.d=3
n.e=2
x=D.d.M(m,3)
n.y=new Int32Array(x)
x=y.cb
n.z=B.bk(m*3,0,!1,x)
n.at=B.bk(n.c,0,!1,x)
x=n.ax=B.bk(n.c,0,!1,x)
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
af7(){var x,w,v,u,t,s
for(x=0;x<this.c;++x){w=this.a
w===$&&B.b()
v=this.Q
v===$&&B.b()
u=v.b
t=2<u?v.c[x*u+2]:0
s=1<u?v.c[x*u+1]:0
v=0<u?v.c[x*u]:0
w.o3(x,Math.abs(t),Math.abs(s),Math.abs(v))}},
b14(d,e,f){var x,w,v,u=this.as[e],t=u-1,s=this.c,r=this.Q,q=1000,p=-1
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
agu(){var x,w,v,u,t,s,r=this
for(x=0,w=0;x<r.c;++x){for(v=0;v<3;++v,++w){u=r.z
u===$&&B.b()
t=D.c.bh(D.d.C(0.5+u[w]),0,255)
u=r.Q
u===$&&B.b()
s=u.b
if(v<s)u.c[x*s+v]=D.c.C(t)}u=r.Q
u===$&&B.b()
s=u.b
if(3<s)u.c[x*s+3]=D.c.C(x)}},
aiV(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(x=j.c,w=j.Q,v=j.as,u=0,t=0,s=0;s<x;s=o){w===$&&B.b()
r=w.b
q=1<r
p=q?w.c[s*r+1]:0
for(o=s+1,n=o,m=s;n<x;++n)if((q?w.c[n*r+1]:0)<p){p=q?w.c[n*r+1]:0
m=n}if(s!==m){l=0<r
n=l?w.c[m*r]:0
k=l?w.c[s*r]:0
if(l)w.c[m*r]=D.c.C(k)
if(l)w.c[s*r]=D.c.C(n)
n=q?w.c[m*r+1]:0
l=q?w.c[s*r+1]:0
if(q)w.c[m*r+1]=D.c.C(l)
if(q)w.c[s*r+1]=D.c.C(n)
q=2<r
n=q?w.c[m*r+2]:0
l=q?w.c[s*r+2]:0
if(q)w.c[m*r+2]=D.c.C(l)
if(q)w.c[s*r+2]=D.c.C(n)
q=3<r
n=q?w.c[m*r+3]:0
l=q?w.c[s*r+3]:0
if(q)w.c[m*r+3]=D.c.C(l)
if(q)w.c[s*r+3]=D.c.C(n)}if(p!==u){v[u]=t+s>>>1
for(n=u+1;n<p;++n)v[n]=s
t=s
u=p}}x=j.r
x.toString
v[u]=D.c.M(t+x,1)
for(o=u+1;o<256;++o)v[o]=x},
aoy(d,e){var x,w,v
for(x=this.y,w=d*d,v=0;v<d;++v){x===$&&B.b()
x[v]=D.d.C(e*((w-v*v)*256/w))}},
ajd(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.x
a2===$&&B.b()
x=30+D.c.aZ(a1.b-1,3)
w=a3.gcm(0)*a3.gb0(0)
v=D.c.fg(w,a1.b)
u=Math.max(D.c.aZ(v,100),1)
if(u===0)u=1
t=D.c.M(a2,8)
if(t<=1)t=0
a1.aoy(t,1024)
if(w<1509)s=a1.b=1
else if(D.c.az(w,499)!==0)s=499
else if(D.c.az(w,491)!==0)s=491
else s=D.c.az(w,487)!==0?487:503
r=a3.gcm(0)
q=a3.gb0(0)
for(p=a2,o=1024,n=0,m=0,l=0,k=0;k<v;){a2=a3.a
j=a2==null?null:a2.dB(m,l,null)
if(j==null)j=new A.eI()
i=j.gav(j)
h=j.gaH()
g=j.gaL(j)
if(k===0){a2=a1.z
a2===$&&B.b()
f=a1.e
f===$&&B.b()
f*=3
a2[f]=g
a2[f+1]=h
a2[f+2]=i}e=a1.bca(g,h,i)
if(e<0)e=a1.aPK(g,h,i)
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
if(t>0)a1.aNe(d,t,e,g,h,i)}n+=s
m+=s
for(;m>r;){m-=r;++l}for(;n>=w;){n-=w
l-=q}++k
if(D.c.az(k,u)===0){o-=D.c.fg(o,x)
p-=D.c.aZ(p,30)
t=D.c.M(p,8)
if(t<=1)t=0
a1.aoy(t,o)}}},
aNe(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=f-e,j=l.d-1
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
aPK(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=1e30
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
bca(d,e,f){var x,w,v,u,t,s=this
for(x=0,w=0;x<s.d;++x){v=s.z
v===$&&B.b()
u=w+1
t=!1
if(J.n(v[w],d)){w=u+1
if(J.n(s.z[u],e)){u=w+1
v=J.n(s.z[w],f)
w=u}else v=t}else{v=t
w=u}if(v)return x}return-1}}
A.anW.prototype={
aQ(d){var x=this
if(x.a===x.c.length)x.aT9()
x.c[x.a++]=d&255},
XU(d,e){var x,w,v,u,t=this
e=J.aY(d)
for(;x=t.a,w=x+e,v=t.c,u=v.length,w>u;)t.agg(w-u)
D.a5.fG(v,x,w,d)
t.a+=e},
lq(d){return this.XU(d,null)},
jY(d){var x=this
if(x.b){x.aQ(D.c.M(d,8)&255)
x.aQ(d&255)
return}x.aQ(d&255)
x.aQ(D.c.M(d,8)&255)},
hu(d){var x=this
if(x.b){x.aQ(D.c.M(d,24)&255)
x.aQ(D.c.M(d,16)&255)
x.aQ(D.c.M(d,8)&255)
x.aQ(d&255)
return}x.aQ(d&255)
x.aQ(D.c.M(d,8)&255)
x.aQ(D.c.M(d,16)&255)
x.aQ(D.c.M(d,24)&255)},
bzX(d){var x,w=this,v=new Float32Array(1)
v[0]=d
x=B.bS(v.buffer,0,null)
if(w.b){w.aQ(x[3])
w.aQ(x[2])
w.aQ(x[1])
w.aQ(x[0])
return}w.aQ(x[0])
w.aQ(x[1])
w.aQ(x[2])
w.aQ(x[3])},
bzY(d){var x,w=this,v=new Float64Array(1)
v[0]=d
x=B.bS(v.buffer,0,null)
if(w.b){w.aQ(x[7])
w.aQ(x[6])
w.aQ(x[5])
w.aQ(x[4])
w.aQ(x[3])
w.aQ(x[2])
w.aQ(x[1])
w.aQ(x[0])
return}w.aQ(x[0])
w.aQ(x[1])
w.aQ(x[2])
w.aQ(x[3])
w.aQ(x[4])
w.aQ(x[5])
w.aQ(x[6])
w.aQ(x[7])},
agg(d){var x,w,v,u
if(d!=null)x=d
else{w=this.c.length
x=w===0?8192:w*2}w=this.c
v=w.length
u=new Uint8Array(v+x)
D.a5.fG(u,0,v,w)
this.c=u},
aT9(){return this.agg(null)},
gt(d){return this.a}}
A.bgk.prototype={
aAT(d){var x,w,v,u,t,s,r=d.gcm(0),q=d.gb0(0),p=this.a
p===$&&B.b()
x=A.fV(null,null,C.V,0,C.aW,q,null,0,1,p,C.V,r,!1)
r=x.a
w=r.gW(r)
w.q()
x.z=d.z
x.w=d.w
x.y=d.y
for(r=d.a,r=r.gW(r);r.q();){v=r.gJ(r)
u=w.gJ(w)
t=D.d.C(v.gav(v))
s=D.d.C(v.gaH())
u.n(0,0,this.b14(D.d.C(v.gaL(v)),s,t))
w.q()}return x}}
A.mi.prototype={
C(d){var x=this.b
return x===0?0:D.c.fg(this.a,x)},
BQ(d){var x=this.b
return x===0?0:this.a/x},
k(d,e){if(e==null)return!1
return e instanceof A.mi&&this.a===e.a&&this.b===e.b},
gv(d){return B.a3(this.a,this.b,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
j(d){return""+this.a+"/"+this.b}}
A.biB.prototype={
G(){return"ResizeMode."+this.b}}
A.biy.prototype={
G(){return"RequestImageFormat."+this.b}}
A.bsu.prototype={}
var z=a.updateTypes(["~(kI)","r(oX,r,r)","r([r])","~(zI,y<r>)","~(r,r,r,r,r,cq)","P<~>()","~(f,oh)","~(r)","~()","hO(Q)","~(r,iU)","zI(r)"])
A.bFv.prototype={
$1(d){var x=0,w=B.l(y.as),v,u=this,t,s
var $async$$1=B.h(function(e,f){if(e===1)return B.i(f,w)
while(true)switch(x){case 0:s=u.a
if(s.r)s.f=!0
if(s.f){x=1
break}t=s.e
x=3
return B.c(s.qz(t==null?"":t),$async$$1)
case 3:s.f=!0
case 1:return B.j(v,w)}})
return B.k($async$$1,w)},
$S:73}
A.bFs.prototype={
$0(){this.a.r=!0},
$S:0}
A.bFt.prototype={
$0(){this.a.r=!1},
$S:0}
A.bFu.prototype={
$0(){var x=0,w=B.l(y.H),v=this,u,t
var $async$$0=B.h(function(d,e){if(d===1)return B.i(e,w)
while(true)switch(x){case 0:u=v.a
t=u.e
x=2
return B.c(u.qz(t==null?"":t),$async$$0)
case 2:return B.j(null,w)}})
return B.k($async$$0,w)},
$S:2}
A.bFy.prototype={
$0(){var x=this.a
x.x=x.w=!0},
$S:0}
A.bFz.prototype={
$1(d){var x=null
return L.qx(B.a([B.ey(!1,H.bL(S.a1s,x),x,x,D.P,x,x,x,x,new A.bFx(d),x,x)],y.E),x,C.b_y,x,x,C.b_j)},
$S:z+9}
A.bFx.prototype={
$0(){return B.dG(this.a,!1).j7(!0)},
$S:0}
A.bFA.prototype={
$0(){this.a.y=0},
$S:0}
A.bFB.prototype={
$0(){var x=this.a
x.K(new A.bFw(x))},
$S:0}
A.bFw.prototype={
$0(){var x=this.a
x.y=++x.z/x.Q.length},
$S:0}
A.bFC.prototype={
$0(){this.a.w=!1},
$S:0}
A.b3Q.prototype={
$0(){return A.c7G(this.a,this.b,"jpg",this.c)},
$S:265}
A.b3S.prototype={
$0(){return A.c7G(this.a,this.b,"png",null)},
$S:265}
A.b3I.prototype={
$2(d,e){var x=A.c7v(e)
this.a.a.n(0,d,x)
return x},
$S:z+6}
A.b3J.prototype={
$2(d,e){var x=e.dg(0)
this.a.a.n(0,d,x)
return x},
$S:z+10}
A.b3K.prototype={
$2(d,e){var x=A.c7v(e)
this.a.b.a.n(0,d,x)
return x},
$S:z+6}
A.aP1.prototype={
$4(d,e,f,g){var x,w,v=this,u=v.a
if(u.a<v.c){x=v.b.c&&v.d.ch!=null
w=v.e
if(x){x=v.d
w.hx(x.ch.m0(d),x.ch.lZ(d),x.ch.lX(d),x.ch.nk(d))}else w.hx(d,e,f,g)
w.q();++u.a}},
$S:699}
A.aZd.prototype={
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
$S:700}
A.b5i.prototype={
$1(d){var x,w,v,u,t=this.b,s=t.cw(),r=t.cw()
t=this.a
if(!t.d.y.Y(0,s))throw B.d(A.bC("Invalid Component in SOS block"))
x=t.d.y.i(0,s)
x.toString
w=D.c.M(r,4)&15
v=r&15
u=t.z
if(w<u.length){u=u[w]
u.toString
x.w=u}t=t.y
if(v<t.length){t=t[v]
t.toString
x.x=t}return x},
$S:z+11}
A.bfj.prototype={
$1(d){return d!==""},
$S:18}
A.btE.prototype={
$2(d,e){return(d|e<<16)>>>0},
$S:173}
A.b47.prototype={
$4(d,e,f,g){var x=this.b
return d+this.a*(e-d+x*(d+g-f-e))+x*(f-d)},
$S:701}
A.b46.prototype={
$5(d,e,f,g,h){var x=-e,w=d*d
return f+0.5*(d*(x+g)+w*(2*e-5*f+4*g-h)+w*d*(x+3*f-3*g+h))},
$S:702};(function installTearOffs(){var x=a._instance_0u,w=a.installInstanceTearOff,v=a._instance_2u,u=a._static_1,t=a._instance_1u,s=a.installStaticTearOff
var r
x(r=A.a4V.prototype,"gaBH","w3",5)
x(r,"gaBI","Og",5)
x(r,"gbic","a4t",8)
w(A.iU.prototype,"gvS",1,0,function(){return[0]},["$1","$0"],["i8","C"],2,0,0)
w(A.r_.prototype,"gvS",1,0,function(){return[0]},["$1","$0"],["i8","C"],2,0,0)
w(A.we.prototype,"gvS",1,0,function(){return[0]},["$1","$0"],["i8","C"],2,0,0)
w(A.pr.prototype,"gvS",1,0,function(){return[0]},["$1","$0"],["i8","C"],2,0,0)
w(A.r1.prototype,"gvS",1,0,function(){return[0]},["$1","$0"],["i8","C"],2,0,0)
w(A.tX.prototype,"gvS",1,0,function(){return[0]},["$1","$0"],["i8","C"],2,0,0)
w(A.wd.prototype,"gvS",1,0,function(){return[0]},["$1","$0"],["i8","C"],2,0,0)
w(A.wc.prototype,"gvS",1,0,function(){return[0]},["$1","$0"],["i8","C"],2,0,0)
w(A.r2.prototype,"gvS",1,0,function(){return[0]},["$1","$0"],["i8","C"],2,0,0)
v(r=A.ak0.prototype,"gaQG","aQH",3)
v(r,"gaQJ","aQK",3)
v(r,"gaQL","aQM",3)
v(r,"gaQA","aQB",3)
v(r,"gaQC","aQD",3)
u(A,"cM8","cz6",0)
u(A,"cM1","cyZ",0)
u(A,"cM_","cyX",0)
u(A,"cM6","cz4",0)
u(A,"cM7","cz5",0)
u(A,"cM5","cz3",0)
u(A,"cM4","cz2",0)
u(A,"cM3","cz1",0)
u(A,"cMa","cz8",0)
u(A,"cM9","cz7",0)
u(A,"cM2","cz_",0)
u(A,"cM0","cyY",0)
u(A,"cMl","czj",0)
u(A,"cMj","czh",0)
u(A,"cMb","cz9",0)
u(A,"cMd","czb",0)
u(A,"cMc","cza",0)
u(A,"cMe","czc",0)
u(A,"cMm","czk",0)
u(A,"cMk","czi",0)
u(A,"cMf","czd",0)
u(A,"cMg","cze",0)
u(A,"cMh","czf",0)
u(A,"cMi","czg",0)
t(A.a2f.prototype,"gb7L","b7M",7)
t(A.ajO.prototype,"gbnG","bnH",7)
s(A,"c2C",3,null,["$3"],["czl"],1,0)
s(A,"cMn",3,null,["$3"],["czm"],1,0)
s(A,"cMs",3,null,["$3"],["czr"],1,0)
s(A,"cMt",3,null,["$3"],["czs"],1,0)
s(A,"cMu",3,null,["$3"],["czt"],1,0)
s(A,"cMv",3,null,["$3"],["czu"],1,0)
s(A,"cMw",3,null,["$3"],["czv"],1,0)
s(A,"cMx",3,null,["$3"],["czw"],1,0)
s(A,"cMy",3,null,["$3"],["czx"],1,0)
s(A,"cMz",3,null,["$3"],["czy"],1,0)
s(A,"cMo",3,null,["$3"],["czn"],1,0)
s(A,"cMp",3,null,["$3"],["czo"],1,0)
s(A,"cMq",3,null,["$3"],["czp"],1,0)
s(A,"cMr",3,null,["$3"],["czq"],1,0)
s(A,"cMC",6,null,["$6"],["czK"],4,0)
s(A,"cMD",6,null,["$6"],["czL"],4,0)
s(A,"cMB",6,null,["$6"],["czJ"],4,0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.abs,B.iR)
w(B.z,[A.b4I,A.bcA,A.bv7,A.aUR,A.qd,A.bFT,A.bOP,A.b3f,A.b4q,A.bv6,A.bv8,A.fQ,A.r0,A.aAD,A.ah0,A.oh,A.iU,A.aP2,A.CT,A.aUB,A.aUA,A.aY0,A.ah1,A.aZa,A.ah2,A.ah3,A.aZc,A.UR,A.aDk,A.Vk,A.Vl,A.ais,A.b3x,A.ajc,A.adi,A.Ee,A.b5f,A.zI,A.b5h,A.PN,A.ak_,A.b5l,A.ak0,A.Zs,A.bfh,A.ZL,A.bgc,A.apU,A.ZO,A.MV,A.apT,A.pP,A.atK,A.bqH,A.atN,A.bqJ,A.atO,A.bqK,A.b6L,A.btr,A.a2e,A.bts,A.btx,A.btB,A.btD,A.a2d,A.btC,A.btt,A.Hg,A.auw,A.auy,A.aux,A.auz,A.a2f,A.auu,A.bty,A.auv,A.bul,A.a2t,A.aja,A.Vq,A.auU,A.VK,A.bd_,A.aor,A.ajq,A.kI,A.bgk,A.anW,A.mi,A.bsu])
x(A.b4H,A.b4I)
x(A.bcz,A.bcA)
x(A.bT0,A.bv7)
x(A.zh,B.G)
x(A.a4V,B.L)
w(B.c1,[A.bFv,A.bFz,A.aP1,A.aZd,A.b5i,A.bfj,A.b47,A.b46])
w(B.cU,[A.bFs,A.bFt,A.bFu,A.bFy,A.bFx,A.bFA,A.bFB,A.bFw,A.bFC,A.b3Q,A.b3S])
w(B.dU,[A.aQh,A.m2,A.aci,A.ll,A.ky,A.KH,A.DK,A.qR,A.L2,A.b5g,A.ME,A.Zr,A.AA,A.apr,A.AB,A.rr,A.mx,A.H7,A.jr,A.q4,A.Hh,A.OP,A.b3u,A.aij,A.ajR,A.b_n,A.biB,A.biy])
w(B.t,[A.Jk,A.Jl,A.Jm,A.Jn,A.Jo,A.Jp,A.Js,A.Jt,A.Ju,A.Jv,A.Jw,A.vF,A.zp,A.kG,A.Fk,A.Fl,A.Fm,A.Fn,A.Fo,A.Fp,A.Fq,A.Fr,A.Fs,A.Ft,A.Fu,A.Fv,A.eI])
w(A.vF,[A.add,A.Jq])
x(A.KF,A.r0)
w(B.e3,[A.b3I,A.b3J,A.b3K,A.btE])
w(A.iU,[A.r_,A.zl,A.we,A.pr,A.r1,A.tX,A.wd,A.wc,A.r2,A.zn,A.zm,A.Ek])
w(A.aUB,[A.acl,A.aZb,A.b1j,A.b3w,A.ajZ,A.apq,A.bfi,A.bgb,A.bgd,A.bqw,A.bqI,A.bum])
x(A.aVN,A.acl)
x(A.b4N,A.aZa)
w(A.b4N,[A.ajJ,A.b4O,A.b4P,A.b4Q,A.ajL])
x(A.ajK,A.UR)
x(A.ajM,A.Vl)
x(A.b3v,A.CT)
w(A.Ee,[A.Ef,A.VI])
w(A.aY0,[A.b5j,A.bff])
x(A.ajN,A.Zs)
x(A.b4R,A.bfh)
x(A.FS,A.aUA)
w(A.apU,[A.wR,A.kR])
x(A.ajO,A.a2f)
x(A.ajP,A.a2t)
x(A.ajQ,A.auU)
w(A.kG,[A.Lb,A.Lc,A.VP,A.VQ,A.VR,A.VS,A.Ld,A.Le,A.Lf,A.Lg,A.Lh,A.Li])
w(A.bd_,[A.ao9,A.aoa,A.aob,A.aoc,A.aod,A.aoe,A.aof,A.Yp,A.rj])
x(A.bbY,A.bgk)})()
B.bQ(b.typeUniverse,JSON.parse('{"abs":{"iR":[],"aS":[]},"zh":{"G":[],"e":[]},"a4V":{"L":["zh"]},"fQ":{"b6":["aJ"]},"Jk":{"d8":[],"t":["aJ"],"t.E":"aJ"},"Jl":{"d8":[],"t":["aJ"],"t.E":"aJ"},"Jm":{"d8":[],"t":["aJ"],"t.E":"aJ"},"Jn":{"d8":[],"t":["aJ"],"t.E":"aJ"},"Jo":{"d8":[],"t":["aJ"],"t.E":"aJ"},"Jp":{"d8":[],"t":["aJ"],"t.E":"aJ"},"Js":{"d8":[],"t":["aJ"],"t.E":"aJ"},"Jt":{"d8":[],"t":["aJ"],"t.E":"aJ"},"Ju":{"d8":[],"t":["aJ"],"t.E":"aJ"},"Jv":{"d8":[],"t":["aJ"],"t.E":"aJ"},"Jw":{"d8":[],"t":["aJ"],"t.E":"aJ"},"vF":{"d8":[],"t":["aJ"],"t.E":"aJ"},"add":{"d8":[],"t":["aJ"],"t.E":"aJ"},"Jq":{"d8":[],"t":["aJ"],"t.E":"aJ"},"r_":{"iU":[]},"zl":{"iU":[]},"we":{"iU":[]},"pr":{"iU":[]},"r1":{"iU":[]},"tX":{"iU":[]},"wd":{"iU":[]},"wc":{"iU":[]},"r2":{"iU":[]},"zn":{"iU":[]},"zm":{"iU":[]},"Ek":{"iU":[]},"ajK":{"UR":[]},"ajM":{"Vl":[]},"Ef":{"Ee":[]},"VI":{"Ee":[]},"ajN":{"Zs":[]},"ajP":{"a2t":[]},"zp":{"t":["ci"],"t.E":"ci"},"kG":{"t":["ci"]},"Lb":{"kG":[],"t":["ci"],"t.E":"ci"},"Lc":{"kG":[],"t":["ci"],"t.E":"ci"},"VP":{"kG":[],"t":["ci"],"t.E":"ci"},"VQ":{"kG":[],"t":["ci"],"t.E":"ci"},"VR":{"kG":[],"t":["ci"],"t.E":"ci"},"VS":{"kG":[],"t":["ci"],"t.E":"ci"},"Ld":{"kG":[],"t":["ci"],"t.E":"ci"},"Le":{"kG":[],"t":["ci"],"t.E":"ci"},"Lf":{"kG":[],"t":["ci"],"t.E":"ci"},"Lg":{"kG":[],"t":["ci"],"t.E":"ci"},"Lh":{"kG":[],"t":["ci"],"t.E":"ci"},"Li":{"kG":[],"t":["ci"],"t.E":"ci"},"Fk":{"ci":[],"d8":[],"t":["aJ"],"b6":["ci"],"t.E":"aJ"},"Fl":{"ci":[],"d8":[],"t":["aJ"],"b6":["ci"],"t.E":"aJ"},"Fm":{"ci":[],"d8":[],"t":["aJ"],"b6":["ci"],"t.E":"aJ"},"Fn":{"ci":[],"d8":[],"t":["aJ"],"b6":["ci"],"t.E":"aJ"},"Fo":{"ci":[],"d8":[],"t":["aJ"],"b6":["ci"],"t.E":"aJ"},"Fp":{"ci":[],"d8":[],"t":["aJ"],"b6":["ci"],"t.E":"aJ"},"aor":{"b6":["ci"]},"Fq":{"ci":[],"d8":[],"t":["aJ"],"b6":["ci"],"t.E":"aJ"},"Fr":{"ci":[],"d8":[],"t":["aJ"],"b6":["ci"],"t.E":"aJ"},"Fs":{"ci":[],"d8":[],"t":["aJ"],"b6":["ci"],"t.E":"aJ"},"Ft":{"ci":[],"d8":[],"t":["aJ"],"b6":["ci"],"t.E":"aJ"},"Fu":{"ci":[],"d8":[],"t":["aJ"],"b6":["ci"],"t.E":"aJ"},"Fv":{"ci":[],"d8":[],"t":["aJ"],"b6":["ci"],"t.E":"aJ"},"eI":{"ci":[],"d8":[],"t":["aJ"],"b6":["ci"],"t.E":"aJ"},"ajq":{"aS":[]},"ci":{"d8":[],"b6":["ci"],"t":["aJ"]}}'))
B.mJ(b.typeUniverse,JSON.parse('{"apU":1}'))
var y=(function rtii(){var x=B.A
return{G:x("d8"),v:x("ah1"),W:x("ah3"),C:x("ahh"),_:x("P<@>"),O:x("Vq"),x:x("aja"),X:x("ajc"),P:x("oh"),r:x("iU"),I:x("kG"),h:x("Wi"),R:x("t<@>"),q:x("p<adi>"),Q:x("p<ah2>"),m:x("p<UR>"),b:x("p<Vl>"),A:x("p<Vq>"),g:x("p<zp>"),M:x("p<y<y<y<r>>>>"),o:x("p<y<y<r>>>"),S:x("p<y<r>>"),d:x("p<Zs>"),Y:x("p<ZL>"),j:x("p<mi>"),s:x("p<f>"),cp:x("p<atO>"),a:x("p<cq>"),cr:x("p<Hg>"),F:x("p<auv>"),J:x("p<a2t>"),E:x("p<e>"),bg:x("p<aAD>"),bd:x("p<PN>"),t:x("p<r>"),T:x("p<Ee?>"),cB:x("p<ak_?>"),cQ:x("p<y<r>?>"),w:x("p<oX?>"),e:x("p<cq?>"),y:x("p<~(kI)>"),c:x("zI"),bp:x("y<Wi>"),f:x("y<y<r>>"),k:x("y<mi>"),cm:x("y<a2d>"),K:x("y<Hg>"),n:x("y<H>"),L:x("y<r>"),as:x("aG"),c0:x("ci"),aG:x("ZL"),a2:x("cPZ"),ab:x("ZO"),aM:x("MV"),i:x("mi"),N:x("f"),aL:x("atN"),ah:x("hJ"),bk:x("oX"),D:x("cq"),V:x("a2d"),bQ:x("auw"),bl:x("aux"),bt:x("auz"),U:x("ak<f>"),bc:x("aDk"),cb:x("H"),z:x("@"),p:x("r"),a7:x("ajF?"),cl:x("y<r>?"),l:x("y<Ee?>?"),ac:x("cq?"),ak:x("a2e?"),B:x("Hg?"),Z:x("auy?"),u:x("r?"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.w5=new A.aci(0,"direct")
C.w6=new A.aci(1,"alpha")
C.CK=new A.ky(0,"none")
C.w8=new A.ky(3,"bitfields")
C.w9=new A.ky(6,"alphaBitfields")
C.b7f=new A.bv6()
C.Dl=new A.bv8()
C.hE=new A.bT0()
C.Dt=new A.aQh(4,"luminance")
C.agl=new A.DK(0,"red")
C.agm=new A.DK(1,"green")
C.agn=new A.DK(2,"blue")
C.ago=new A.DK(3,"alpha")
C.agp=new A.DK(4,"other")
C.Fq=new A.KH(0,"uint")
C.xC=new A.KH(1,"half")
C.xD=new A.KH(2,"float")
C.Fr=new A.qR(0,"none")
C.agP=new A.b_n(2,"both")
C.eu=new A.m2(0,"uint1")
C.f6=new A.m2(1,"uint2")
C.hQ=new A.m2(10,"float32")
C.jb=new A.m2(11,"float64")
C.f7=new A.m2(2,"uint4")
C.V=new A.m2(3,"uint8")
C.bH=new A.m2(4,"uint16")
C.hR=new A.m2(5,"uint32")
C.jc=new A.m2(6,"int8")
C.jd=new A.m2(7,"int16")
C.je=new A.m2(8,"int32")
C.fD=new A.m2(9,"float16")
C.ah0=new A.aij(1,"page")
C.aW=new A.aij(2,"sequence")
C.xP=new A.b3u(1,"deflate")
C.FS=new A.L2(2,"cur")
C.L=new A.ll(0,"none")
C.Gj=new A.ll(1,"byte")
C.Gk=new A.ll(10,"sRational")
C.Gl=new A.ll(11,"single")
C.Gm=new A.ll(12,"double")
C.b7=new A.ll(2,"ascii")
C.aR=new A.ll(3,"short")
C.c8=new A.ll(4,"long")
C.dq=new A.ll(5,"rational")
C.Gn=new A.ll(6,"sByte")
C.fF=new A.ll(7,"undefined")
C.Go=new A.ll(8,"sShort")
C.Gp=new A.ll(9,"sLong")
C.ajB=new A.ajR(0,"nearest")
C.b7v=new A.ajR(1,"linear")
C.GD=new A.b5g(0,"yuv444")
C.GP=B.a(x([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250]),y.t)
C.GY=B.a(x([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29]),y.t)
C.ya=B.a(x([0,2,8]),y.t)
C.alK=B.a(x([0,4,2,1]),y.t)
C.amj=B.a(x([252,243,207,63]),y.t)
C.Hb=B.a(x([292,260,226,226]),y.t)
C.Hg=B.a(x([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0]),y.t)
C.Hj=B.a(x([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119]),y.t)
C.Hi=B.a(x([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125]),y.t)
C.Hh=B.a(x([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0]),y.t)
C.Hk=B.a(x([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0]),y.t)
C.amD=B.a(x([2,3,7]),y.t)
C.agq=new A.qR(1,"rle")
C.agr=new A.qR(2,"zips")
C.ags=new A.qR(3,"zip")
C.agt=new A.qR(4,"piz")
C.agu=new A.qR(5,"pxr24")
C.agv=new A.qR(6,"b44")
C.agw=new A.qR(7,"b44a")
C.amM=B.a(x([C.Fr,C.agq,C.agr,C.ags,C.agt,C.agu,C.agv,C.agw]),B.A("p<qR>"))
C.Hr=B.a(x([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9]),y.t)
C.an_=B.a(x([3,3,11]),y.t)
C.anV=B.a(x([511,1023,2047,4095]),y.t)
C.ao9=B.a(x([63,207,243,252]),y.t)
C.I0=B.a(x([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5]),y.t)
C.oS=B.a(x([0,36,72,109,145,182,218,255]),y.t)
C.Io=B.a(x([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28]),y.t)
C.aoO=B.a(x([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112]),y.t)
C.ap0=B.a(x([8,8,4,2]),y.t)
C.aQD=new A.AA(0,"none")
C.aQE=new A.AA(1,"sub")
C.aQF=new A.AA(2,"up")
C.aQG=new A.AA(3,"average")
C.aQH=new A.AA(4,"paeth")
C.Iu=B.a(x([C.aQD,C.aQE,C.aQF,C.aQG,C.aQH]),B.A("p<AA>"))
C.apa=B.a(x([A.cMb(),A.cM5(),A.cMl(),A.cMj(),A.cMd(),A.cMc(),A.cMe()]),y.y)
C.p2=B.a(x([0,1,2,3,4,5,6,7,8,9,10,11]),y.t)
C.a26=new A.Hh(0,"predictor")
C.b2i=new A.Hh(1,"crossColor")
C.b2j=new A.Hh(2,"subtractGreen")
C.a27=new A.Hh(3,"colorIndexing")
C.apz=B.a(x([C.a26,C.b2i,C.b2j,C.a27]),B.A("p<Hh>"))
C.apC=B.a(x([280,256,256,256,40]),y.t)
C.J5=B.a(x([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127]),y.t)
C.J7=B.a(x([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68]),y.t)
C.a4U=new A.ky(1,"rle8")
C.a4Z=new A.ky(2,"rle4")
C.a5_=new A.ky(4,"jpeg")
C.a50=new A.ky(5,"png")
C.a51=new A.ky(7,"reserved7")
C.a52=new A.ky(8,"reserved8")
C.a53=new A.ky(9,"reserved9")
C.a4V=new A.ky(10,"reserved10")
C.a4W=new A.ky(11,"cmyk")
C.a4X=new A.ky(12,"cmykRle8")
C.a4Y=new A.ky(13,"cmykRle4")
C.Jr=B.a(x([C.CK,C.a4U,C.a4Z,C.w8,C.a5_,C.a50,C.w9,C.a51,C.a52,C.a53,C.a4V,C.a4W,C.a4X,C.a4Y]),B.A("p<ky>"))
C.dR=B.a(x([255,255,255,255,255,255,255,255,255,255,255]),y.t)
C.jk=B.a(x([C.dR,C.dR,C.dR]),y.S)
C.avu=B.a(x([176,246,255,255,255,255,255,255,255,255,255]),y.t)
C.amO=B.a(x([223,241,252,255,255,255,255,255,255,255,255]),y.t)
C.awb=B.a(x([249,253,253,255,255,255,255,255,255,255,255]),y.t)
C.awh=B.a(x([C.avu,C.amO,C.awb]),y.S)
C.anQ=B.a(x([255,244,252,255,255,255,255,255,255,255,255]),y.t)
C.ax8=B.a(x([234,254,254,255,255,255,255,255,255,255,255]),y.t)
C.MP=B.a(x([253,255,255,255,255,255,255,255,255,255,255]),y.t)
C.akn=B.a(x([C.anQ,C.ax8,C.MP]),y.S)
C.anR=B.a(x([255,246,254,255,255,255,255,255,255,255,255]),y.t)
C.aw6=B.a(x([239,253,254,255,255,255,255,255,255,255,255]),y.t)
C.Hs=B.a(x([254,255,254,255,255,255,255,255,255,255,255]),y.t)
C.amo=B.a(x([C.anR,C.aw6,C.Hs]),y.S)
C.HR=B.a(x([255,248,254,255,255,255,255,255,255,255,255]),y.t)
C.aw7=B.a(x([251,255,254,255,255,255,255,255,255,255,255]),y.t)
C.awt=B.a(x([C.HR,C.aw7,C.dR]),y.S)
C.yR=B.a(x([255,253,254,255,255,255,255,255,255,255,255]),y.t)
C.anS=B.a(x([251,254,254,255,255,255,255,255,255,255,255]),y.t)
C.avZ=B.a(x([C.yR,C.anS,C.Hs]),y.S)
C.ao8=B.a(x([255,254,253,255,254,255,255,255,255,255,255]),y.t)
C.auk=B.a(x([250,255,254,255,254,255,255,255,255,255,255]),y.t)
C.rF=B.a(x([254,255,255,255,255,255,255,255,255,255,255]),y.t)
C.ax7=B.a(x([C.ao8,C.auk,C.rF]),y.S)
C.axH=B.a(x([C.jk,C.awh,C.akn,C.amo,C.awt,C.avZ,C.ax7,C.jk]),y.o)
C.awl=B.a(x([217,255,255,255,255,255,255,255,255,255,255]),y.t)
C.ayg=B.a(x([225,252,241,253,255,255,254,255,255,255,255]),y.t)
C.awr=B.a(x([234,250,241,250,253,255,253,254,255,255,255]),y.t)
C.axC=B.a(x([C.awl,C.ayg,C.awr]),y.S)
C.yq=B.a(x([255,254,255,255,255,255,255,255,255,255,255]),y.t)
C.ax9=B.a(x([223,254,254,255,255,255,255,255,255,255,255]),y.t)
C.auB=B.a(x([238,253,254,254,255,255,255,255,255,255,255]),y.t)
C.aqn=B.a(x([C.yq,C.ax9,C.auB]),y.S)
C.ar_=B.a(x([249,254,255,255,255,255,255,255,255,255,255]),y.t)
C.awE=B.a(x([C.HR,C.ar_,C.dR]),y.S)
C.awc=B.a(x([255,253,255,255,255,255,255,255,255,255,255]),y.t)
C.ar0=B.a(x([247,254,255,255,255,255,255,255,255,255,255]),y.t)
C.ayv=B.a(x([C.awc,C.ar0,C.dR]),y.S)
C.awm=B.a(x([252,255,255,255,255,255,255,255,255,255,255]),y.t)
C.apn=B.a(x([C.yR,C.awm,C.dR]),y.S)
C.HS=B.a(x([255,254,254,255,255,255,255,255,255,255,255]),y.t)
C.auU=B.a(x([C.HS,C.MP,C.dR]),y.S)
C.ar1=B.a(x([255,254,253,255,255,255,255,255,255,255,255]),y.t)
C.MV=B.a(x([250,255,255,255,255,255,255,255,255,255,255]),y.t)
C.awU=B.a(x([C.ar1,C.MV,C.rF]),y.S)
C.ayw=B.a(x([C.axC,C.aqn,C.awE,C.ayv,C.apn,C.auU,C.awU,C.jk]),y.o)
C.amP=B.a(x([186,251,250,255,255,255,255,255,255,255,255]),y.t)
C.auC=B.a(x([234,251,244,254,255,255,255,255,255,255,255]),y.t)
C.au1=B.a(x([251,251,243,253,254,255,254,255,255,255,255]),y.t)
C.aqJ=B.a(x([C.amP,C.auC,C.au1]),y.S)
C.amQ=B.a(x([236,253,254,255,255,255,255,255,255,255,255]),y.t)
C.ayz=B.a(x([251,253,253,254,254,255,255,255,255,255,255]),y.t)
C.axg=B.a(x([C.yR,C.amQ,C.ayz]),y.S)
C.axa=B.a(x([254,254,254,255,255,255,255,255,255,255,255]),y.t)
C.ako=B.a(x([C.HS,C.axa,C.dR]),y.S)
C.avv=B.a(x([254,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aq6=B.a(x([C.yq,C.avv,C.rF]),y.S)
C.GS=B.a(x([C.dR,C.rF,C.dR]),y.S)
C.axj=B.a(x([C.aqJ,C.axg,C.ako,C.aq6,C.GS,C.jk,C.jk,C.jk]),y.o)
C.awn=B.a(x([248,255,255,255,255,255,255,255,255,255,255]),y.t)
C.ap3=B.a(x([250,254,252,254,255,255,255,255,255,255,255]),y.t)
C.avw=B.a(x([248,254,249,253,255,255,255,255,255,255,255]),y.t)
C.ayu=B.a(x([C.awn,C.ap3,C.avw]),y.S)
C.awd=B.a(x([255,253,253,255,255,255,255,255,255,255,255]),y.t)
C.awo=B.a(x([246,253,253,255,255,255,255,255,255,255,255]),y.t)
C.aoN=B.a(x([252,254,251,254,254,255,255,255,255,255,255]),y.t)
C.avr=B.a(x([C.awd,C.awo,C.aoN]),y.S)
C.anT=B.a(x([255,254,252,255,255,255,255,255,255,255,255]),y.t)
C.avx=B.a(x([248,254,253,255,255,255,255,255,255,255,255]),y.t)
C.aqv=B.a(x([253,255,254,254,255,255,255,255,255,255,255]),y.t)
C.alN=B.a(x([C.anT,C.avx,C.aqv]),y.S)
C.aw8=B.a(x([255,251,254,255,255,255,255,255,255,255,255]),y.t)
C.aw9=B.a(x([245,251,254,255,255,255,255,255,255,255,255]),y.t)
C.aw3=B.a(x([253,253,254,255,255,255,255,255,255,255,255]),y.t)
C.apw=B.a(x([C.aw8,C.aw9,C.aw3]),y.S)
C.awe=B.a(x([255,251,253,255,255,255,255,255,255,255,255]),y.t)
C.amR=B.a(x([252,253,254,255,255,255,255,255,255,255,255]),y.t)
C.awA=B.a(x([C.awe,C.amR,C.yq]),y.S)
C.ar2=B.a(x([255,252,255,255,255,255,255,255,255,255,255]),y.t)
C.aw4=B.a(x([249,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aw5=B.a(x([255,255,254,255,255,255,255,255,255,255,255]),y.t)
C.auH=B.a(x([C.ar2,C.aw4,C.aw5]),y.S)
C.awf=B.a(x([255,255,253,255,255,255,255,255,255,255,255]),y.t)
C.akT=B.a(x([C.awf,C.MV,C.dR]),y.S)
C.av3=B.a(x([C.ayu,C.avr,C.alN,C.apw,C.awA,C.auH,C.akT,C.GS]),y.o)
C.aqm=B.a(x([C.axH,C.ayw,C.axj,C.av3]),y.M)
C.JE=B.a(x([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250]),y.t)
C.aha=new A.L2(0,"invalid")
C.ahb=new A.L2(1,"ico")
C.aqp=B.a(x([C.aha,C.ahb,C.FS]),B.A("p<L2>"))
C.aqI=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),y.t)
C.yr=B.a(x([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284]),y.t)
C.ari=B.a(x([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),y.t)
C.ys=B.a(x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),y.t)
C.arj=B.a(x([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15]),y.t)
C.ju=B.a(x([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1]),y.t)
C.eE=B.a(x([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255]),y.t)
C.ZN=new A.Zr(0,"source")
C.ZO=new A.Zr(1,"over")
C.aru=B.a(x([C.ZN,C.ZO]),B.A("p<Zr>"))
C.lu=B.a(x([0,1,3,7,15,31,63,127,255]),y.t)
C.yx=B.a(x([0,128,192,224,240,248,252,254,255]),y.t)
C.Le=B.a(x([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232]),y.t)
C.qF=B.a(x([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),y.t)
C.auA=B.a(x([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),y.t)
C.fc=B.a(x([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]),y.t)
C.auP=B.a(x([null,A.cMC(),A.cMD(),A.cMB()]),B.A("p<~(r,r,r,r,r,cq)?>"))
C.yj=B.a(x([8,0,8,0]),y.t)
C.ao3=B.a(x([5,3,5,3]),y.t)
C.an0=B.a(x([3,5,3,5]),y.t)
C.H_=B.a(x([0,8,0,8]),y.t)
C.HK=B.a(x([4,4,4,4]),y.t)
C.anM=B.a(x([4,4,0,0]),y.t)
C.LW=B.a(x([C.yj,C.ao3,C.an0,C.H_,C.yj,C.HK,C.anM,C.H_]),y.S)
C.qY=B.a(x([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8]),y.t)
C.auX=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095]),y.t)
C.i0=B.a(x([0,1,1,2,4,8,1,1,2,4,8,4,8]),y.t)
C.Bt=new A.jr(0,"whiteIsZero")
C.b0f=new A.jr(1,"blackIsZero")
C.b0m=new A.jr(2,"rgb")
C.Bv=new A.jr(3,"palette")
C.b0n=new A.jr(4,"transparencyMask")
C.a1B=new A.jr(5,"cmyk")
C.b0o=new A.jr(6,"yCbCr")
C.b0p=new A.jr(7,"reserved7")
C.b0q=new A.jr(8,"cieLab")
C.b0r=new A.jr(9,"iccLab")
C.b0g=new A.jr(10,"ituLab")
C.b0h=new A.jr(11,"logL")
C.b0i=new A.jr(12,"logLuv")
C.b0j=new A.jr(13,"colorFilterArray")
C.b0k=new A.jr(14,"linearRaw")
C.b0l=new A.jr(15,"depth")
C.Bu=new A.jr(16,"unknown")
C.av8=B.a(x([C.Bt,C.b0f,C.b0m,C.Bv,C.b0n,C.a1B,C.b0o,C.b0p,C.b0q,C.b0r,C.b0g,C.b0h,C.b0i,C.b0j,C.b0k,C.b0l,C.Bu]),B.A("p<jr>"))
C.yK=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295]),y.t)
C.ayp=B.a(x([231,120,48,89,115,113,120,152,112]),y.t)
C.akp=B.a(x([152,179,64,126,170,118,46,70,95]),y.t)
C.akq=B.a(x([175,69,143,80,85,82,72,155,103]),y.t)
C.akr=B.a(x([56,58,10,171,218,189,17,13,152]),y.t)
C.aks=B.a(x([114,26,17,163,44,195,21,10,173]),y.t)
C.akt=B.a(x([121,24,80,195,26,62,44,64,85]),y.t)
C.aku=B.a(x([144,71,10,38,171,213,144,34,26]),y.t)
C.akv=B.a(x([170,46,55,19,136,160,33,206,71]),y.t)
C.akw=B.a(x([63,20,8,114,114,208,12,9,226]),y.t)
C.akx=B.a(x([81,40,11,96,182,84,29,16,36]),y.t)
C.ayh=B.a(x([C.ayp,C.akp,C.akq,C.akr,C.aks,C.akt,C.aku,C.akv,C.akw,C.akx]),y.S)
C.aky=B.a(x([134,183,89,137,98,101,106,165,148]),y.t)
C.akz=B.a(x([72,187,100,130,157,111,32,75,80]),y.t)
C.akA=B.a(x([66,102,167,99,74,62,40,234,128]),y.t)
C.arv=B.a(x([41,53,9,178,241,141,26,8,107]),y.t)
C.akB=B.a(x([74,43,26,146,73,166,49,23,157]),y.t)
C.akC=B.a(x([65,38,105,160,51,52,31,115,128]),y.t)
C.ar8=B.a(x([104,79,12,27,217,255,87,17,7]),y.t)
C.akD=B.a(x([87,68,71,44,114,51,15,186,23]),y.t)
C.akE=B.a(x([47,41,14,110,182,183,21,17,194]),y.t)
C.akF=B.a(x([66,45,25,102,197,189,23,18,22]),y.t)
C.awp=B.a(x([C.aky,C.akz,C.akA,C.arv,C.akB,C.akC,C.ar8,C.akD,C.akE,C.akF]),y.S)
C.akG=B.a(x([88,88,147,150,42,46,45,196,205]),y.t)
C.akH=B.a(x([43,97,183,117,85,38,35,179,61]),y.t)
C.akJ=B.a(x([39,53,200,87,26,21,43,232,171]),y.t)
C.akK=B.a(x([56,34,51,104,114,102,29,93,77]),y.t)
C.akL=B.a(x([39,28,85,171,58,165,90,98,64]),y.t)
C.akM=B.a(x([34,22,116,206,23,34,43,166,73]),y.t)
C.akN=B.a(x([107,54,32,26,51,1,81,43,31]),y.t)
C.akO=B.a(x([68,25,106,22,64,171,36,225,114]),y.t)
C.akP=B.a(x([34,19,21,102,132,188,16,76,124]),y.t)
C.akQ=B.a(x([62,18,78,95,85,57,50,48,51]),y.t)
C.awQ=B.a(x([C.akG,C.akH,C.akJ,C.akK,C.akL,C.akM,C.akN,C.akO,C.akP,C.akQ]),y.S)
C.akR=B.a(x([193,101,35,159,215,111,89,46,111]),y.t)
C.akS=B.a(x([60,148,31,172,219,228,21,18,111]),y.t)
C.ar9=B.a(x([112,113,77,85,179,255,38,120,114]),y.t)
C.arw=B.a(x([40,42,1,196,245,209,10,25,109]),y.t)
C.akU=B.a(x([88,43,29,140,166,213,37,43,154]),y.t)
C.akV=B.a(x([61,63,30,155,67,45,68,1,209]),y.t)
C.akW=B.a(x([100,80,8,43,154,1,51,26,71]),y.t)
C.arx=B.a(x([142,78,78,16,255,128,34,197,171]),y.t)
C.akX=B.a(x([41,40,5,102,211,183,4,1,221]),y.t)
C.akY=B.a(x([51,50,17,168,209,192,23,25,82]),y.t)
C.amS=B.a(x([C.akR,C.akS,C.ar9,C.arw,C.akU,C.akV,C.akW,C.arx,C.akX,C.akY]),y.S)
C.atY=B.a(x([138,31,36,171,27,166,38,44,229]),y.t)
C.akZ=B.a(x([67,87,58,169,82,115,26,59,179]),y.t)
C.al_=B.a(x([63,59,90,180,59,166,93,73,154]),y.t)
C.al0=B.a(x([40,40,21,116,143,209,34,39,175]),y.t)
C.al1=B.a(x([47,15,16,183,34,223,49,45,183]),y.t)
C.al2=B.a(x([46,17,33,183,6,98,15,32,183]),y.t)
C.al4=B.a(x([57,46,22,24,128,1,54,17,37]),y.t)
C.al5=B.a(x([65,32,73,115,28,128,23,128,205]),y.t)
C.al6=B.a(x([40,3,9,115,51,192,18,6,223]),y.t)
C.al7=B.a(x([87,37,9,115,59,77,64,21,47]),y.t)
C.arD=B.a(x([C.atY,C.akZ,C.al_,C.al0,C.al1,C.al2,C.al4,C.al5,C.al6,C.al7]),y.S)
C.al8=B.a(x([104,55,44,218,9,54,53,130,226]),y.t)
C.al9=B.a(x([64,90,70,205,40,41,23,26,57]),y.t)
C.ala=B.a(x([54,57,112,184,5,41,38,166,213]),y.t)
C.alb=B.a(x([30,34,26,133,152,116,10,32,134]),y.t)
C.atZ=B.a(x([39,19,53,221,26,114,32,73,255]),y.t)
C.alc=B.a(x([31,9,65,234,2,15,1,118,73]),y.t)
C.ara=B.a(x([75,32,12,51,192,255,160,43,51]),y.t)
C.ald=B.a(x([88,31,35,67,102,85,55,186,85]),y.t)
C.ale=B.a(x([56,21,23,111,59,205,45,37,192]),y.t)
C.alf=B.a(x([55,38,70,124,73,102,1,34,98]),y.t)
C.amT=B.a(x([C.al8,C.al9,C.ala,C.alb,C.atZ,C.alc,C.ara,C.ald,C.ale,C.alf]),y.S)
C.alg=B.a(x([125,98,42,88,104,85,117,175,82]),y.t)
C.alh=B.a(x([95,84,53,89,128,100,113,101,45]),y.t)
C.ali=B.a(x([75,79,123,47,51,128,81,171,1]),y.t)
C.alj=B.a(x([57,17,5,71,102,57,53,41,49]),y.t)
C.alk=B.a(x([38,33,13,121,57,73,26,1,85]),y.t)
C.all=B.a(x([41,10,67,138,77,110,90,47,114]),y.t)
C.arb=B.a(x([115,21,2,10,102,255,166,23,6]),y.t)
C.alm=B.a(x([101,29,16,10,85,128,101,196,26]),y.t)
C.aln=B.a(x([57,18,10,102,102,213,34,20,43]),y.t)
C.alo=B.a(x([117,20,15,36,163,128,68,1,26]),y.t)
C.ayq=B.a(x([C.alg,C.alh,C.ali,C.alj,C.alk,C.all,C.arb,C.alm,C.aln,C.alo]),y.S)
C.apf=B.a(x([102,61,71,37,34,53,31,243,192]),y.t)
C.alp=B.a(x([69,60,71,38,73,119,28,222,37]),y.t)
C.apg=B.a(x([68,45,128,34,1,47,11,245,171]),y.t)
C.alq=B.a(x([62,17,19,70,146,85,55,62,70]),y.t)
C.alr=B.a(x([37,43,37,154,100,163,85,160,1]),y.t)
C.als=B.a(x([63,9,92,136,28,64,32,201,85]),y.t)
C.arc=B.a(x([75,15,9,9,64,255,184,119,16]),y.t)
C.ard=B.a(x([86,6,28,5,64,255,25,248,1]),y.t)
C.are=B.a(x([56,8,17,132,137,255,55,116,128]),y.t)
C.alt=B.a(x([58,15,20,82,135,57,26,121,40]),y.t)
C.aqq=B.a(x([C.apf,C.alp,C.apg,C.alq,C.alr,C.als,C.arc,C.ard,C.are,C.alt]),y.S)
C.alu=B.a(x([164,50,31,137,154,133,25,35,218]),y.t)
C.alv=B.a(x([51,103,44,131,131,123,31,6,158]),y.t)
C.alw=B.a(x([86,40,64,135,148,224,45,183,128]),y.t)
C.alx=B.a(x([22,26,17,131,240,154,14,1,209]),y.t)
C.aly=B.a(x([45,16,21,91,64,222,7,1,197]),y.t)
C.alz=B.a(x([56,21,39,155,60,138,23,102,213]),y.t)
C.arf=B.a(x([83,12,13,54,192,255,68,47,28]),y.t)
C.alA=B.a(x([85,26,85,85,128,128,32,146,171]),y.t)
C.alB=B.a(x([18,11,7,63,144,171,4,4,246]),y.t)
C.alC=B.a(x([35,27,10,146,174,171,12,26,128]),y.t)
C.ayr=B.a(x([C.alu,C.alv,C.alw,C.alx,C.aly,C.alz,C.arf,C.alA,C.alB,C.alC]),y.S)
C.alD=B.a(x([190,80,35,99,180,80,126,54,45]),y.t)
C.alE=B.a(x([85,126,47,87,176,51,41,20,32]),y.t)
C.alF=B.a(x([101,75,128,139,118,146,116,128,85]),y.t)
C.alG=B.a(x([56,41,15,176,236,85,37,9,62]),y.t)
C.arg=B.a(x([71,30,17,119,118,255,17,18,138]),y.t)
C.alH=B.a(x([101,38,60,138,55,70,43,26,142]),y.t)
C.arh=B.a(x([146,36,19,30,171,255,97,27,20]),y.t)
C.akh=B.a(x([138,45,61,62,219,1,81,188,64]),y.t)
C.aki=B.a(x([32,41,20,117,151,142,20,21,163]),y.t)
C.akj=B.a(x([112,19,12,61,195,128,48,4,24]),y.t)
C.aqZ=B.a(x([C.alD,C.alE,C.alF,C.alG,C.arg,C.alH,C.arh,C.akh,C.aki,C.akj]),y.S)
C.aw_=B.a(x([C.ayh,C.awp,C.awQ,C.amS,C.arD,C.amT,C.ayq,C.aqq,C.ayr,C.aqZ]),y.o)
C.uW=new A.mx(0,"none")
C.hv=new A.mx(1,"palette")
C.a1x=new A.mx(2,"rgb")
C.b_Z=new A.mx(3,"gray")
C.b0_=new A.mx(4,"reserved4")
C.b00=new A.mx(5,"reserved5")
C.b01=new A.mx(6,"reserved6")
C.b02=new A.mx(7,"reserved7")
C.b03=new A.mx(8,"reserved8")
C.hw=new A.mx(9,"paletteRle")
C.a1w=new A.mx(10,"rgbRle")
C.b_Y=new A.mx(11,"grayRle")
C.aw0=B.a(x([C.uW,C.hv,C.a1x,C.b_Z,C.b0_,C.b00,C.b01,C.b02,C.b03,C.hw,C.a1w,C.b_Y]),B.A("p<mx>"))
C.rA=B.a(x([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567]),y.t)
C.Nj=B.a(x([A.cMf(),A.cM7(),A.cMm(),A.cMk(),A.cMh(),A.cMg(),A.cMi()]),y.y)
C.Nm=B.a(x([1,1.387039845,1.306562965,1.175875602,1,0.785694958,0.5411961,0.275899379]),B.A("p<H>"))
C.aQC=new A.ME(0,"none")
C.ZP=new A.ME(1,"background")
C.ZQ=new A.ME(2,"previous")
C.awL=B.a(x([C.aQC,C.ZP,C.ZQ]),B.A("p<ME>"))
C.rS=B.a(x([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845]),y.t)
C.b07=new A.H7(0,"invalid")
C.a1z=new A.H7(1,"uint")
C.aO=new A.H7(2,"int")
C.mv=new A.H7(3,"float")
C.awP=B.a(x([C.b07,C.a1z,C.aO,C.mv]),B.A("p<H7>"))
C.rW=B.a(x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),y.t)
C.awS=B.a(x([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576]),y.t)
C.awT=B.a(x([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),y.t)
C.Nv=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),y.t)
C.ax0=B.a(x([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0]),y.t)
C.ax1=B.a(x([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),y.t)
C.alT=B.a(x([173,148,140]),y.t)
C.alU=B.a(x([176,155,140,135]),y.t)
C.apD=B.a(x([180,157,141,134,130]),y.t)
C.aoR=B.a(x([254,254,243,230,196,177,153,140,133,130,129]),y.t)
C.axi=B.a(x([C.alT,C.alU,C.apD,C.aoR]),y.S)
C.axz=B.a(x([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),y.t)
C.z_=B.a(x([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157]),y.t)
C.O6=B.a(x([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]),y.t)
C.O5=B.a(x([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41]),y.t)
C.axD=B.a(x([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15]),y.t)
C.Oe=B.a(x([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396]),y.t)
C.Od=B.a(x([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),y.t)
C.axF=B.a(x([C.Fq,C.xC,C.xD]),B.A("p<KH>"))
C.tx=B.a(x([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63]),y.t)
C.axI=B.a(x([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99]),y.t)
C.axJ=B.a(x([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]),y.t)
C.amH=B.a(x([2,6,2,6]),y.t)
C.aou=B.a(x([6,2,6,2]),y.t)
C.amA=B.a(x([2,2,6,6]),y.t)
C.am8=B.a(x([1,3,3,9]),y.t)
C.anD=B.a(x([4,0,12,0]),y.t)
C.amZ=B.a(x([3,1,9,3]),y.t)
C.ap_=B.a(x([8,8,0,0]),y.t)
C.anF=B.a(x([4,12,0,0]),y.t)
C.alS=B.a(x([16,0,0,0]),y.t)
C.alR=B.a(x([12,4,0,0]),y.t)
C.aoE=B.a(x([6,6,2,2]),y.t)
C.an1=B.a(x([3,9,1,3]),y.t)
C.alQ=B.a(x([12,0,4,0]),y.t)
C.apc=B.a(x([9,3,3,1]),y.t)
C.cr=B.a(x([C.HK,C.amH,C.yj,C.aou,C.amA,C.am8,C.anD,C.amZ,C.ap_,C.anF,C.alS,C.alR,C.aoE,C.an1,C.alQ,C.apc]),y.S)
C.Ox=B.a(x([C.L,C.Gj,C.b7,C.aR,C.c8,C.dq,C.Gn,C.fF,C.Go,C.Gp,C.Gk,C.Gl,C.Gm]),B.A("p<ll>"))
C.aR_=new A.rr(0,"bitmap")
C.a_b=new A.rr(1,"grayscale")
C.aR0=new A.rr(2,"indexed")
C.a_c=new A.rr(3,"rgb")
C.a_d=new A.rr(4,"cmyk")
C.aR1=new A.rr(5,"multiChannel")
C.aR2=new A.rr(6,"duoTone")
C.a_e=new A.rr(7,"lab")
C.ayf=B.a(x([C.aR_,C.a_b,C.aR0,C.a_c,C.a_d,C.aR1,C.aR2,C.a_e]),B.A("p<rr>"))
C.dS=B.a(x([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255]),y.t)
C.ayy=B.a(x([254,253,251,247,239,223,191,127]),y.t)
C.P4=B.a(x([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390]),y.t)
C.ayH=B.a(x([A.cM_(),A.cM6(),A.cM8(),A.cM1(),A.cM4(),A.cMa(),A.cM3(),A.cM9(),A.cM0(),A.cM2()]),y.y)
C.yk=B.a(x([128,128,128,128,128,128,128,128,128,128,128]),y.t)
C.P7=B.a(x([C.yk,C.yk,C.yk]),y.S)
C.ayG=B.a(x([253,136,254,255,228,219,128,128,128,128,128]),y.t)
C.ava=B.a(x([189,129,242,255,227,213,255,219,128,128,128]),y.t)
C.axL=B.a(x([106,126,227,252,214,209,255,255,128,128,128]),y.t)
C.av4=B.a(x([C.ayG,C.ava,C.axL]),y.S)
C.aud=B.a(x([1,98,248,255,236,226,255,255,128,128,128]),y.t)
C.axO=B.a(x([181,133,238,254,221,234,255,154,128,128,128]),y.t)
C.avb=B.a(x([78,134,202,247,198,180,255,219,128,128,128]),y.t)
C.axB=B.a(x([C.aud,C.axO,C.avb]),y.S)
C.ap8=B.a(x([1,185,249,255,243,255,128,128,128,128,128]),y.t)
C.auv=B.a(x([184,150,247,255,236,224,128,128,128,128,128]),y.t)
C.amp=B.a(x([77,110,216,255,236,230,128,128,128,128,128]),y.t)
C.amN=B.a(x([C.ap8,C.auv,C.amp]),y.S)
C.ap9=B.a(x([1,101,251,255,241,255,128,128,128,128,128]),y.t)
C.aqw=B.a(x([170,139,241,252,236,209,255,255,128,128,128]),y.t)
C.ap5=B.a(x([37,116,196,243,228,255,255,255,128,128,128]),y.t)
C.apk=B.a(x([C.ap9,C.aqw,C.ap5]),y.S)
C.apl=B.a(x([1,204,254,255,245,255,128,128,128,128,128]),y.t)
C.amq=B.a(x([207,160,250,255,238,128,128,128,128,128,128]),y.t)
C.auw=B.a(x([102,103,231,255,211,171,128,128,128,128,128]),y.t)
C.amw=B.a(x([C.apl,C.amq,C.auw]),y.S)
C.ax3=B.a(x([1,152,252,255,240,255,128,128,128,128,128]),y.t)
C.aux=B.a(x([177,135,243,255,234,225,128,128,128,128,128]),y.t)
C.amr=B.a(x([80,129,211,255,194,224,128,128,128,128,128]),y.t)
C.ans=B.a(x([C.ax3,C.aux,C.amr]),y.S)
C.Ir=B.a(x([1,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aoS=B.a(x([246,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aqt=B.a(x([255,128,128,128,128,128,128,128,128,128,128]),y.t)
C.aqN=B.a(x([C.Ir,C.aoS,C.aqt]),y.S)
C.awa=B.a(x([C.P7,C.av4,C.axB,C.amN,C.apk,C.amw,C.ans,C.aqN]),y.o)
C.aoT=B.a(x([198,35,237,223,193,187,162,160,145,155,62]),y.t)
C.apY=B.a(x([131,45,198,221,172,176,220,157,252,221,1]),y.t)
C.aww=B.a(x([68,47,146,208,149,167,221,162,255,223,128]),y.t)
C.alZ=B.a(x([C.aoT,C.apY,C.aww]),y.S)
C.aqQ=B.a(x([1,149,241,255,221,224,255,255,128,128,128]),y.t)
C.avc=B.a(x([184,141,234,253,222,220,255,199,128,128,128]),y.t)
C.au5=B.a(x([81,99,181,242,176,190,249,202,255,255,128]),y.t)
C.axd=B.a(x([C.aqQ,C.avc,C.au5]),y.S)
C.auM=B.a(x([1,129,232,253,214,197,242,196,255,255,128]),y.t)
C.axP=B.a(x([99,121,210,250,201,198,255,202,128,128,128]),y.t)
C.au6=B.a(x([23,91,163,242,170,187,247,210,255,255,128]),y.t)
C.auK=B.a(x([C.auM,C.axP,C.au6]),y.S)
C.ax4=B.a(x([1,200,246,255,234,255,128,128,128,128,128]),y.t)
C.auY=B.a(x([109,178,241,255,231,245,255,255,128,128,128]),y.t)
C.aue=B.a(x([44,130,201,253,205,192,255,255,128,128,128]),y.t)
C.aro=B.a(x([C.ax4,C.auY,C.aue]),y.S)
C.aml=B.a(x([1,132,239,251,219,209,255,165,128,128,128]),y.t)
C.auf=B.a(x([94,136,225,251,218,190,255,255,128,128,128]),y.t)
C.avd=B.a(x([22,100,174,245,186,161,255,199,128,128,128]),y.t)
C.apX=B.a(x([C.aml,C.auf,C.avd]),y.S)
C.ao5=B.a(x([1,182,249,255,232,235,128,128,128,128,128]),y.t)
C.auy=B.a(x([124,143,241,255,227,234,128,128,128,128,128]),y.t)
C.ave=B.a(x([35,77,181,251,193,211,255,205,128,128,128]),y.t)
C.aqG=B.a(x([C.ao5,C.auy,C.ave]),y.S)
C.awJ=B.a(x([1,157,247,255,236,231,255,255,128,128,128]),y.t)
C.aqR=B.a(x([121,141,235,255,225,227,255,255,128,128,128]),y.t)
C.avf=B.a(x([45,99,188,251,195,217,255,224,128,128,128]),y.t)
C.auW=B.a(x([C.awJ,C.aqR,C.avf]),y.S)
C.ao6=B.a(x([1,1,251,255,213,255,128,128,128,128,128]),y.t)
C.aqS=B.a(x([203,1,248,255,255,128,128,128,128,128,128]),y.t)
C.ax5=B.a(x([137,1,177,255,224,255,128,128,128,128,128]),y.t)
C.aun=B.a(x([C.ao6,C.aqS,C.ax5]),y.S)
C.ap6=B.a(x([C.alZ,C.axd,C.auK,C.aro,C.apX,C.aqG,C.auW,C.aun]),y.o)
C.ao1=B.a(x([253,9,248,251,207,208,255,192,128,128,128]),y.t)
C.amf=B.a(x([175,13,224,243,193,185,249,198,255,255,128]),y.t)
C.awx=B.a(x([73,17,171,221,161,179,236,167,255,234,128]),y.t)
C.av1=B.a(x([C.ao1,C.amf,C.awx]),y.S)
C.aqT=B.a(x([1,95,247,253,212,183,255,255,128,128,128]),y.t)
C.ayM=B.a(x([239,90,244,250,211,209,255,255,128,128,128]),y.t)
C.axM=B.a(x([155,77,195,248,188,195,255,255,128,128,128]),y.t)
C.arE=B.a(x([C.aqT,C.ayM,C.axM]),y.S)
C.amm=B.a(x([1,24,239,251,218,219,255,205,128,128,128]),y.t)
C.ams=B.a(x([201,51,219,255,196,186,128,128,128,128,128]),y.t)
C.avg=B.a(x([69,46,190,239,201,218,255,228,128,128,128]),y.t)
C.awB=B.a(x([C.amm,C.ams,C.avg]),y.S)
C.aqx=B.a(x([1,191,251,255,255,128,128,128,128,128,128]),y.t)
C.ao7=B.a(x([223,165,249,255,213,255,128,128,128,128,128]),y.t)
C.aqU=B.a(x([141,124,248,255,255,128,128,128,128,128,128]),y.t)
C.ann=B.a(x([C.aqx,C.ao7,C.aqU]),y.S)
C.aqV=B.a(x([1,16,248,255,255,128,128,128,128,128,128]),y.t)
C.ax6=B.a(x([190,36,230,255,236,255,128,128,128,128,128]),y.t)
C.aoU=B.a(x([149,1,255,128,128,128,128,128,128,128,128]),y.t)
C.axb=B.a(x([C.aqV,C.ax6,C.aoU]),y.S)
C.aoV=B.a(x([1,226,255,128,128,128,128,128,128,128,128]),y.t)
C.arG=B.a(x([247,192,255,128,128,128,128,128,128,128,128]),y.t)
C.aoW=B.a(x([240,128,255,128,128,128,128,128,128,128,128]),y.t)
C.auQ=B.a(x([C.aoV,C.arG,C.aoW]),y.S)
C.aqW=B.a(x([1,134,252,255,255,128,128,128,128,128,128]),y.t)
C.aqX=B.a(x([213,62,250,255,255,128,128,128,128,128,128]),y.t)
C.aoX=B.a(x([55,93,255,128,128,128,128,128,128,128,128]),y.t)
C.axr=B.a(x([C.aqW,C.aqX,C.aoX]),y.S)
C.aum=B.a(x([C.av1,C.arE,C.awB,C.ann,C.axb,C.auQ,C.axr,C.P7]),y.o)
C.ayj=B.a(x([202,24,213,235,186,191,220,160,240,175,255]),y.t)
C.awy=B.a(x([126,38,182,232,169,184,228,174,255,187,128]),y.t)
C.awz=B.a(x([61,46,138,219,151,178,240,170,255,216,128]),y.t)
C.anA=B.a(x([C.ayj,C.awy,C.awz]),y.S)
C.au7=B.a(x([1,112,230,250,199,191,247,159,255,255,128]),y.t)
C.axQ=B.a(x([166,109,228,252,211,215,255,174,128,128,128]),y.t)
C.au8=B.a(x([39,77,162,232,172,180,245,178,255,255,128]),y.t)
C.ark=B.a(x([C.au7,C.axQ,C.au8]),y.S)
C.au9=B.a(x([1,52,220,246,198,199,249,220,255,255,128]),y.t)
C.auN=B.a(x([124,74,191,243,183,193,250,221,255,255,128]),y.t)
C.aua=B.a(x([24,71,130,219,154,170,243,182,255,255,128]),y.t)
C.akk=B.a(x([C.au9,C.auN,C.aua]),y.S)
C.avh=B.a(x([1,182,225,249,219,240,255,224,128,128,128]),y.t)
C.axR=B.a(x([149,150,226,252,216,205,255,171,128,128,128]),y.t)
C.auc=B.a(x([28,108,170,242,183,194,254,223,255,255,128]),y.t)
C.avt=B.a(x([C.avh,C.axR,C.auc]),y.S)
C.axS=B.a(x([1,81,230,252,204,203,255,192,128,128,128]),y.t)
C.aug=B.a(x([123,102,209,247,188,196,255,233,128,128,128]),y.t)
C.avi=B.a(x([20,95,153,243,164,173,255,203,128,128,128]),y.t)
C.aq4=B.a(x([C.axS,C.aug,C.avi]),y.S)
C.amt=B.a(x([1,222,248,255,216,213,128,128,128,128,128]),y.t)
C.aub=B.a(x([168,175,246,252,235,205,255,255,128,128,128]),y.t)
C.auh=B.a(x([47,116,215,255,211,212,255,255,128,128,128]),y.t)
C.apb=B.a(x([C.amt,C.aub,C.auh]),y.S)
C.aui=B.a(x([1,121,236,253,212,214,255,255,128,128,128]),y.t)
C.axT=B.a(x([141,84,213,252,201,202,255,219,128,128,128]),y.t)
C.axU=B.a(x([42,80,160,240,162,185,255,205,128,128,128]),y.t)
C.ano=B.a(x([C.aui,C.axT,C.axU]),y.S)
C.aoY=B.a(x([244,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aoZ=B.a(x([238,1,255,128,128,128,128,128,128,128,128]),y.t)
C.auS=B.a(x([C.Ir,C.aoY,C.aoZ]),y.S)
C.ay8=B.a(x([C.anA,C.ark,C.akk,C.avt,C.aq4,C.apb,C.ano,C.auS]),y.o)
C.ayI=B.a(x([C.awa,C.ap6,C.aum,C.ay8]),y.M)
C.Uv=new B.cz([C.eu,1,C.f6,3,C.f7,15,C.V,255,C.bH,65535,C.hR,4294967295,C.jc,127,C.jd,32767,C.je,2147483647,C.fD,1,C.hQ,1,C.jb,1],B.A("cz<m2,r>"))
C.zs=new B.cz([34665,"exif",40965,"interop",34853,"gps"],B.A("cz<r,f>"))
C.aJ0={ProcessingSoftware:0,SubfileType:1,OldSubfileType:2,ImageWidth:3,ImageLength:4,ImageHeight:5,BitsPerSample:6,Compression:7,PhotometricInterpretation:8,Thresholding:9,CellWidth:10,CellLength:11,FillOrder:12,DocumentName:13,ImageDescription:14,Make:15,Model:16,StripOffsets:17,Orientation:18,SamplesPerPixel:19,RowsPerStrip:20,StripByteCounts:21,MinSampleValue:22,MaxSampleValue:23,XResolution:24,YResolution:25,PlanarConfiguration:26,PageName:27,XPosition:28,YPosition:29,GrayResponseUnit:30,GrayResponseCurve:31,T4Options:32,T6Options:33,ResolutionUnit:34,PageNumber:35,ColorResponseUnit:36,TransferFunction:37,Software:38,DateTime:39,Artist:40,HostComputer:41,Predictor:42,WhitePoint:43,PrimaryChromaticities:44,ColorMap:45,HalftoneHints:46,TileWidth:47,TileLength:48,TileOffsets:49,TileByteCounts:50,BadFaxLines:51,CleanFaxData:52,ConsecutiveBadFaxLines:53,InkSet:54,InkNames:55,NumberofInks:56,DotRange:57,TargetPrinter:58,ExtraSamples:59,SampleFormat:60,SMinSampleValue:61,SMaxSampleValue:62,TransferRange:63,ClipPath:64,JPEGProc:65,JPEGInterchangeFormat:66,JPEGInterchangeFormatLength:67,YCbCrCoefficients:68,YCbCrSubSampling:69,YCbCrPositioning:70,ReferenceBlackWhite:71,ApplicationNotes:72,Rating:73,CFARepeatPatternDim:74,CFAPattern:75,BatteryLevel:76,Copyright:77,ExposureTime:78,FNumber:79,"IPTC-NAA":80,ExifOffset:81,InterColorProfile:82,ExposureProgram:83,SpectralSensitivity:84,GPSOffset:85,ISOSpeed:86,OECF:87,SensitivityType:88,RecommendedExposureIndex:89,ExifVersion:90,DateTimeOriginal:91,DateTimeDigitized:92,OffsetTime:93,OffsetTimeOriginal:94,OffsetTimeDigitized:95,ComponentsConfiguration:96,CompressedBitsPerPixel:97,ShutterSpeedValue:98,ApertureValue:99,BrightnessValue:100,ExposureBiasValue:101,MaxApertureValue:102,SubjectDistance:103,MeteringMode:104,LightSource:105,Flash:106,FocalLength:107,SubjectArea:108,MakerNote:109,UserComment:110,SubSecTime:111,SubSecTimeOriginal:112,SubSecTimeDigitized:113,XPTitle:114,XPComment:115,XPAuthor:116,XPKeywords:117,XPSubject:118,FlashPixVersion:119,ColorSpace:120,ExifImageWidth:121,ExifImageLength:122,RelatedSoundFile:123,InteroperabilityOffset:124,FlashEnergy:125,SpatialFrequencyResponse:126,FocalPlaneXResolution:127,FocalPlaneYResolution:128,FocalPlaneResolutionUnit:129,SubjectLocation:130,ExposureIndex:131,SensingMethod:132,FileSource:133,SceneType:134,CVAPattern:135,CustomRendered:136,ExposureMode:137,WhiteBalance:138,DigitalZoomRatio:139,FocalLengthIn35mmFilm:140,SceneCaptureType:141,GainControl:142,Contrast:143,Saturation:144,Sharpness:145,DeviceSettingDescription:146,SubjectDistanceRange:147,ImageUniqueID:148,CameraOwnerName:149,BodySerialNumber:150,LensSpecification:151,LensMake:152,LensModel:153,LensSerialNumber:154,Gamma:155,PrintIM:156,Padding:157,OffsetSchema:158,OwnerName:159,SerialNumber:160,InteropIndex:161,InteropVersion:162,RelatedImageFileFormat:163,RelatedImageWidth:164,RelatedImageLength:165,GPSVersionID:166,GPSLatitudeRef:167,GPSLatitude:168,GPSLongitudeRef:169,GPSLongitude:170,GPSAltitudeRef:171,GPSAltitude:172,GPSTimeStamp:173,GPSSatellites:174,GPSStatus:175,GPSMeasureMode:176,GPSDOP:177,GPSSpeedRef:178,GPSSpeed:179,GPSTrackRef:180,GPSTrack:181,GPSImgDirectionRef:182,GPSImgDirection:183,GPSMapDatum:184,GPSDestLatitudeRef:185,GPSDestLatitude:186,GPSDestLongitudeRef:187,GPSDestLongitude:188,GPSDestBearingRef:189,GPSDestBearing:190,GPSDestDistanceRef:191,GPSDestDistance:192,GPSProcessingMethod:193,GPSAreaInformation:194,GPSDate:195,GPSDifferential:196}
C.UC=new B.x(C.aJ0,[11,254,255,256,257,257,258,259,262,263,264,265,266,269,270,271,272,273,274,277,278,279,280,281,282,283,284,285,286,287,290,291,292,293,296,297,300,301,305,306,315,316,317,318,319,320,321,322,323,324,325,326,327,328,332,333,334,336,337,338,339,340,341,342,343,512,513,514,529,530,531,532,700,18246,33421,33422,33423,33432,33434,33437,33723,34665,34675,34850,34852,34853,34855,34856,34864,34866,36864,36867,36868,36880,36881,36882,37121,37122,37377,37378,37379,37380,37381,37382,37383,37384,37385,37386,37396,37500,37510,37520,37521,37522,40091,40092,40093,40094,40095,40960,40961,40962,40963,40964,40965,41483,41484,41486,41487,41488,41492,41493,41495,41728,41729,41730,41985,41986,41987,41988,41989,41990,41991,41992,41993,41994,41995,41996,42016,42032,42033,42034,42035,42036,42037,42240,50341,59932,59933,65e3,65001,1,2,4096,4097,4098,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],B.A("x<f,r>"))
C.aQI=new A.apr(0,"none")
C.aQJ=new A.apr(4,"paeth")
C.m5=new A.AB(0,"invalid")
C.ZR=new A.AB(1,"pbm")
C.ZS=new A.AB(2,"pgm2")
C.A_=new A.AB(3,"pgm5")
C.ZT=new A.AB(4,"ppm3")
C.A0=new A.AB(5,"ppm6")
C.aRz=new A.biy(0,"origin")
C.aRA=new A.biB(1,"contain")
C.a1h=new B.U(!0,D.x,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.b_b=new B.bN("Reducing Images Size...",null,C.a1h,null,null,null,null,null,null,null,null,null,null,null)
C.b_j=new B.bN("Large Images Detected",null,null,null,null,null,null,null,null,null,null,null,null,null)
C.b_y=new B.bN("Some images are large and may slow down the app. Press OK to convert them into optimal size.",null,null,null,null,null,null,null,null,null,null,null,null,null)
C.b_A=new B.bN("Processing content and detecting large images...",null,R.a1f,null,null,null,null,null,null,null,null,null,null,null)
C.Bs=new A.q4(0,"bilevel")
C.b08=new A.q4(1,"gray4bit")
C.b09=new A.q4(2,"gray")
C.b0a=new A.q4(3,"grayAlpha")
C.b0b=new A.q4(4,"palette")
C.a1A=new A.q4(5,"rgb")
C.b0c=new A.q4(6,"rgba")
C.b0d=new A.q4(7,"yCbCrSub")
C.uY=new A.q4(8,"generic")
C.b0e=new A.q4(9,"invalid")
C.mC=new A.OP(0,"undefined")
C.BL=new A.OP(1,"lossy")
C.v2=new A.OP(2,"lossless")
C.b2F=new A.OP(3,"animated")})();(function staticFields(){$.tE=B.bo("_config")
$.c4g=!0
$.c1i=null
$.cca=!1
$.ccb=B.a([A.c2C(),A.cMn(),A.cMs(),A.cMt(),A.cMu(),A.cMv(),A.cMw(),A.cMx(),A.cMy(),A.cMz(),A.cMo(),A.cMp(),A.cMq(),A.cMr(),A.c2C(),A.c2C()],B.A("p<r(oX,r,r)>"))
$.fT=null
$.c6P=B.bo("_eLut")})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazy
x($,"cRZ","cjE",()=>A.c0Z(C.qY,C.Nv,257,286,15))
x($,"cRY","cjD",()=>A.c0Z(C.I0,C.rW,0,30,15))
x($,"cRX","cjC",()=>A.c0Z(null,C.ari,0,19,7))
x($,"cV6","bXM",()=>{var v=null,u="ISOSpeed"
return B.I([11,A.at("ProcessingSoftware",C.b7,v),254,A.at("SubfileType",C.c8,1),255,A.at("OldSubfileType",C.c8,1),256,A.at("ImageWidth",C.c8,1),257,A.at("ImageLength",C.c8,1),258,A.at("BitsPerSample",C.aR,1),259,A.at("Compression",C.aR,1),262,A.at("PhotometricInterpretation",C.aR,1),263,A.at("Thresholding",C.aR,1),264,A.at("CellWidth",C.aR,1),265,A.at("CellLength",C.aR,1),266,A.at("FillOrder",C.aR,1),269,A.at("DocumentName",C.b7,v),270,A.at("ImageDescription",C.b7,v),271,A.at("Make",C.b7,v),272,A.at("Model",C.b7,v),273,A.at("StripOffsets",C.c8,v),274,A.at("Orientation",C.aR,1),277,A.at("SamplesPerPixel",C.aR,1),278,A.at("RowsPerStrip",C.c8,1),279,A.at("StripByteCounts",C.c8,1),280,A.at("MinSampleValue",C.aR,1),281,A.at("MaxSampleValue",C.aR,1),282,A.at("XResolution",C.dq,1),283,A.at("YResolution",C.dq,1),284,A.at("PlanarConfiguration",C.aR,1),285,A.at("PageName",C.b7,v),286,A.at("XPosition",C.dq,1),287,A.at("YPosition",C.dq,1),290,A.at("GrayResponseUnit",C.aR,1),291,A.at("GrayResponseCurve",C.L,v),292,A.at("T4Options",C.L,v),293,A.at("T6Options",C.L,v),296,A.at("ResolutionUnit",C.aR,1),297,A.at("PageNumber",C.aR,2),300,A.at("ColorResponseUnit",C.L,v),301,A.at("TransferFunction",C.aR,768),305,A.at("Software",C.b7,v),306,A.at("DateTime",C.b7,v),315,A.at("Artist",C.b7,v),316,A.at("HostComputer",C.b7,v),317,A.at("Predictor",C.aR,1),318,A.at("WhitePoint",C.dq,2),319,A.at("PrimaryChromaticities",C.dq,6),320,A.at("ColorMap",C.aR,v),321,A.at("HalftoneHints",C.aR,2),322,A.at("TileWidth",C.c8,1),323,A.at("TileLength",C.c8,1),324,A.at("TileOffsets",C.c8,v),325,A.at("TileByteCounts",C.L,v),326,A.at("BadFaxLines",C.L,v),327,A.at("CleanFaxData",C.L,v),328,A.at("ConsecutiveBadFaxLines",C.L,v),332,A.at("InkSet",C.L,v),333,A.at("InkNames",C.L,v),334,A.at("NumberofInks",C.L,v),336,A.at("DotRange",C.L,v),337,A.at("TargetPrinter",C.b7,v),338,A.at("ExtraSamples",C.L,v),339,A.at("SampleFormat",C.aR,1),340,A.at("SMinSampleValue",C.L,v),341,A.at("SMaxSampleValue",C.L,v),342,A.at("TransferRange",C.L,v),343,A.at("ClipPath",C.L,v),512,A.at("JPEGProc",C.L,v),513,A.at("JPEGInterchangeFormat",C.L,v),514,A.at("JPEGInterchangeFormatLength",C.L,v),529,A.at("YCbCrCoefficients",C.dq,3),530,A.at("YCbCrSubSampling",C.aR,1),531,A.at("YCbCrPositioning",C.aR,1),532,A.at("ReferenceBlackWhite",C.dq,6),700,A.at("ApplicationNotes",C.aR,1),18246,A.at("Rating",C.aR,1),33421,A.at("CFARepeatPatternDim",C.L,v),33422,A.at("CFAPattern",C.L,v),33423,A.at("BatteryLevel",C.L,v),33432,A.at("Copyright",C.b7,v),33434,A.at("ExposureTime",C.dq,1),33437,A.at("FNumber",C.dq,v),33723,A.at("IPTC-NAA",C.c8,1),34665,A.at("ExifOffset",C.L,v),34675,A.at("InterColorProfile",C.L,v),34850,A.at("ExposureProgram",C.aR,1),34852,A.at("SpectralSensitivity",C.b7,v),34853,A.at("GPSOffset",C.L,v),34855,A.at(u,C.c8,1),34856,A.at("OECF",C.L,v),34864,A.at("SensitivityType",C.aR,1),34866,A.at("RecommendedExposureIndex",C.c8,1),34867,A.at(u,C.c8,1),36864,A.at("ExifVersion",C.fF,v),36867,A.at("DateTimeOriginal",C.b7,v),36868,A.at("DateTimeDigitized",C.b7,v),36880,A.at("OffsetTime",C.b7,v),36881,A.at("OffsetTimeOriginal",C.b7,v),36882,A.at("OffsetTimeDigitized",C.b7,v),37121,A.at("ComponentsConfiguration",C.fF,v),37122,A.at("CompressedBitsPerPixel",C.L,v),37377,A.at("ShutterSpeedValue",C.L,v),37378,A.at("ApertureValue",C.L,v),37379,A.at("BrightnessValue",C.L,v),37380,A.at("ExposureBiasValue",C.L,v),37381,A.at("MaxApertureValue",C.L,v),37382,A.at("SubjectDistance",C.L,v),37383,A.at("MeteringMode",C.L,v),37384,A.at("LightSource",C.L,v),37385,A.at("Flash",C.L,v),37386,A.at("FocalLength",C.L,v),37396,A.at("SubjectArea",C.L,v),37500,A.at("MakerNote",C.fF,v),37510,A.at("UserComment",C.fF,v),37520,A.at("SubSecTime",C.L,v),37521,A.at("SubSecTimeOriginal",C.L,v),37522,A.at("SubSecTimeDigitized",C.L,v),40091,A.at("XPTitle",C.L,v),40092,A.at("XPComment",C.L,v),40093,A.at("XPAuthor",C.L,v),40094,A.at("XPKeywords",C.L,v),40095,A.at("XPSubject",C.L,v),40960,A.at("FlashPixVersion",C.L,v),40961,A.at("ColorSpace",C.aR,1),40962,A.at("ExifImageWidth",C.aR,1),40963,A.at("ExifImageLength",C.aR,1),40964,A.at("RelatedSoundFile",C.L,v),40965,A.at("InteroperabilityOffset",C.L,v),41483,A.at("FlashEnergy",C.L,v),41484,A.at("SpatialFrequencyResponse",C.L,v),41486,A.at("FocalPlaneXResolution",C.L,v),41487,A.at("FocalPlaneYResolution",C.L,v),41488,A.at("FocalPlaneResolutionUnit",C.L,v),41492,A.at("SubjectLocation",C.L,v),41493,A.at("ExposureIndex",C.L,v),41495,A.at("SensingMethod",C.L,v),41728,A.at("FileSource",C.L,v),41729,A.at("SceneType",C.L,v),41730,A.at("CVAPattern",C.L,v),41985,A.at("CustomRendered",C.L,v),41986,A.at("ExposureMode",C.L,v),41987,A.at("WhiteBalance",C.L,v),41988,A.at("DigitalZoomRatio",C.L,v),41989,A.at("FocalLengthIn35mmFilm",C.L,v),41990,A.at("SceneCaptureType",C.L,v),41991,A.at("GainControl",C.L,v),41992,A.at("Contrast",C.L,v),41993,A.at("Saturation",C.L,v),41994,A.at("Sharpness",C.L,v),41995,A.at("DeviceSettingDescription",C.L,v),41996,A.at("SubjectDistanceRange",C.L,v),42016,A.at("ImageUniqueID",C.L,v),42032,A.at("CameraOwnerName",C.b7,v),42033,A.at("BodySerialNumber",C.b7,v),42034,A.at("LensSpecification",C.L,v),42035,A.at("LensMake",C.b7,v),42036,A.at("LensModel",C.b7,v),42037,A.at("LensSerialNumber",C.b7,v),42240,A.at("Gamma",C.dq,1),50341,A.at("PrintIM",C.L,v),59932,A.at("Padding",C.L,v),59933,A.at("OffsetSchema",C.L,v),65e3,A.at("OwnerName",C.b7,v),65001,A.at("SerialNumber",C.b7,v)],y.p,B.A("ah0"))})
w($,"cR9","aLJ",()=>B.A3(511))
w($,"cRa","bXC",()=>B.A3(511))
w($,"cRc","bXD",()=>A.c8S(2041))
w($,"cRd","aLK",()=>A.c8S(225))
w($,"cRb","o1",()=>B.A3(766))
x($,"cPD","ciq",()=>A.c7H(0,0,0))
x($,"cSq","mM",()=>B.A3(1))
x($,"cSr","o2",()=>A.csF($.mM().buffer,0,null))
x($,"cSj","p4",()=>N.cu5(1))
x($,"cSk","qq",()=>{var v,u=$.p4().buffer
B.y3(u,0,null)
v=D.c.aZ(u.byteLength,2)
return new Int16Array(u,0,v)})
x($,"cSl","h5",()=>B.cu7(1))
x($,"cSn","kq",()=>B.bbE($.h5().buffer,0,null))
x($,"cSm","CE",()=>A.crd($.h5().buffer))
x($,"cSh","aLM",()=>B.bZZ(1))
x($,"cSi","bXF",()=>A.cbY($.aLM().buffer,0))
x($,"cSf","c3l",()=>B.bbC(1))
x($,"cSg","cjT",()=>A.cbY($.c3l().buffer,0))
x($,"cSo","c3m",()=>A.cyO(1))
x($,"cSp","cjU",()=>{var v=$.c3m()
return A.cre(v.gfw(v))})})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_210",e:"endPart",h:b})})($__dart_deferred_initializers__,"hNRZ5bK/eK132mfOu8OivgK4Ytk=");