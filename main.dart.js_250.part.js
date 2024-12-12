((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_250",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,L,F,M,N,O,P,Q,E,I,A={
TF(d){return new A.aez(d,null,null)},
aez:function aez(d,e,f){this.a=d
this.b=e
this.c=f},
AI(d,e,f,g){var x,w
if(y.ah.b(d))x=B.c3(d.buffer,d.byteOffset,d.byteLength)
else x=y.L.b(d)?d:B.b5(y.R.a(d),!0,y.p)
w=new A.bcc(x,g,g,e)
w.e=f==null?x.length:f
return w},
bcd:function bcd(){},
bcc:function bcc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
ccb(d,e){var x=e==null?32768:e
return new A.bkq(d,new Uint8Array(x))},
bkr:function bkr(){},
bkq:function bkq(d,e){this.a=0
this.b=d
this.c=e},
c4G:function c4G(){},
cjo(d,e,f,g){var x=d[e*2],w=d[f*2]
if(x>=w)x=x===w&&g[e]<=g[f]
else x=!0
return x},
ce5(){return new A.bPC()},
cPZ(d,e,f){var x,w,v,u,t,s,r=new Uint16Array(16)
for(x=0,w=1;w<=15;++w){x=x+f[w-1]<<1>>>0
r[w]=x}for(v=0;v<=e;++v){u=v*2
t=d[u+1]
if(t===0)continue
s=r[t]
r[t]=s+1
d[u]=A.cQ_(s,t)}},
cQ_(d,e){var x,w=0
do{x=A.oI(d,1)
w=(w|d&1)<<1>>>0
if(--e,e>0){d=x
continue}else break}while(!0)
return A.oI(w,1)},
cqH(d){return d<256?C.Ib[d]:C.Ib[256+A.oI(d,7)]},
cej(d,e,f,g,h){return new A.c_4(d,e,f,g,h)},
oI(d,e){if(d>=0)return D.c.nk(d,e)
else return D.c.nk(d,e)+D.c.ee(2,(~e>>>0)+65536&65535)},
b0o:function b0o(d,e,f,g,h,i,j,k){var _=this
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
_.T=_.C=_.cY=_.c9=_.b9=_.ad=_.bf=_.bP=_.y2=_.y1=$},
ra:function ra(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bPC:function bPC(){this.c=this.b=this.a=$},
c_4:function c_4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
amy(d){var x=new A.baE()
x.aOK(d)
return x},
baE:function baE(){this.a=$
this.b=0
this.c=2147483647},
bbR:function bbR(d,e,f,g){var _=this
_.a=d
_.b=!1
_.c=e
_.e=_.d=0
_.r=f
_.w=g},
bDQ:function bDQ(){},
bDP:function bDP(){},
bDR:function bDR(){},
cGA(d,e){return new A.Ap(d,e)},
Ap:function Ap(d,e){this.c=d
this.a=e},
a7y:function a7y(d){var _=this
_.e=null
_.x=_.w=_.r=_.f=!1
_.y=null
_.z=0
_.Q=d
_.as=$
_.c=_.a=null},
bPe:function bPe(d){this.a=d},
bPb:function bPb(d){this.a=d},
bPc:function bPc(d){this.a=d},
bPd:function bPd(d){this.a=d},
bPh:function bPh(d){this.a=d},
bPi:function bPi(){},
bPg:function bPg(d){this.a=d},
bPj:function bPj(d){this.a=d},
bPk:function bPk(d){this.a=d},
bPf:function bPf(d){this.a=d},
bPl:function bPl(d){this.a=d},
bbd(d,e){var x=0,w=B.l(y.D),v
var $async$bbd=B.h(function(f,g){if(f===1)return B.i(g,w)
while(true)switch(x){case 0:x=3
return B.c(A.MI(d,e,"jpg",new A.bbe(d,e,85),85),$async$bbd)
case 3:v=g
x=1
break
case 1:return B.j(v,w)}})
return B.k($async$bbd,w)},
bbf(d,e){var x=0,w=B.l(y.D),v
var $async$bbf=B.h(function(f,g){if(f===1)return B.i(g,w)
while(true)switch(x){case 0:x=3
return B.c(A.MI(d,e,"png",new A.bbg(d,e),null),$async$bbf)
case 3:v=g
x=1
break
case 1:return B.j(v,w)}})
return B.k($async$bbf,w)},
MI(d,e,f,g,h){return A.cGR(d,e,f,g,h)},
cGR(d,e,f,g,h){var x=0,w=B.l(y.D),v,u=2,t,s=[],r,q,p,o,n,m,l,k,j
var $async$MI=B.h(function(i,a0){if(i===1){t=a0
x=u}while(true)switch(x){case 0:if(!$.chG){v=g.$0()
x=1
break}m=$.j0().b
m===$&&B.b()
r=m
q="uploads/"+Date.now()+"."+f
u=4
m=r.as
m===$&&B.b()
x=7
return B.c(m.bW("images-temp").Zs(q,d),$async$MI)
case 7:p=a0
if(J.b0(p)===0){m=g.$0()
v=m
x=1
break}u=9
m=r.as
m===$&&B.b()
x=12
return B.c(m.bW("images-temp").VK(0,q,new A.bAR(e,C.aTj,h,C.aTi)),$async$MI)
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
if(m instanceof B.PE){n=m
if(n.c==="403")$.chG=!1
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
return B.c(m.bW("images-temp").I(0,B.a([q],y.s)),$async$MI)
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
return B.k($async$MI,w)},
cln(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n=null,m=A.ctI(d)
if(m==null)throw B.e(B.d7("Failed to decode "+f+" image"))
x=A.cW9(m,e)
if(f==="jpg"){w=g==null?85:g
v=new Uint8Array(64)
u=new Uint8Array(64)
t=new Float32Array(64)
s=new Float32Array(64)
r=B.bv(65535,n,!1,y.cl)
q=y.u
p=B.bv(65535,n,!1,q)
o=B.bv(64,n,!1,q)
q=B.bv(64,n,!1,q)
v=new A.bcP(v,u,t,s,r,p,o,q,new Int32Array(2048))
v.e=v.R_(C.Iu,C.pN)
v.f=v.R_(C.Iv,C.pN)
v.r=v.R_(C.Iw,C.KT)
v.w=v.R_(C.Ix,C.I2)
v.b4v()
v.b4H()
v.aGG(w)
return new Uint8Array(B.bJ(v.brZ(x,C.HR)))}else if(f==="png")return new Uint8Array(B.bJ(new A.bnb(C.aRk,6).bs_(x,!1)))
else throw B.e(B.d7("Unsupported image format: "+f))},
bbe:function bbe(d,e,f){this.a=d
this.b=e
this.c=f},
bbg:function bbg(d,e){this.a=d
this.b=e},
aW0:function aW0(d,e){this.a=d
this.b=e},
h6:function h6(d){this.a=-1
this.b=d},
KV:function KV(d){this.a=d},
KW:function KW(d){this.a=d},
KX:function KX(d){this.a=d},
KY:function KY(d){this.a=d},
KZ:function KZ(d){this.a=d},
L_:function L_(d){this.a=d},
L2:function L2(d,e){this.a=d
this.b=e},
L3:function L3(d){this.a=d},
L4:function L4(d,e){this.a=d
this.b=e},
L5:function L5(d){this.a=d},
L6:function L6(d,e){this.a=d
this.b=e},
cCE(d,e,f,g){var x=new A.L0(new Uint8Array(4))
x.aOw(d,e,f,g)
return x},
wy:function wy(d){this.a=d},
agn:function agn(d){this.a=d},
L0:function L0(d){this.a=d},
aQ1(d,e,f){var x
if(e===f)return d
switch(e.a){case 0:if(d===0)x=0
else{x=C.VK.i(0,f)
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
case 1:return D.c.O(B.b8(d),1)
case 2:return d
case 3:return d*17
case 4:return d*4369
case 5:return d*286331153
case 6:return d*8
case 7:return d*2184
case 8:return d*143165576
case 9:case 10:case 11:return d/3}break
case 3:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.O(B.b8(d),6)
case 2:return D.c.O(B.b8(d),4)
case 3:return d
case 4:return d*257
case 5:return d*16843009
case 6:return D.c.O(B.b8(d),1)
case 7:return d*128
case 8:return d*8421504
case 9:case 10:case 11:return d/255}break
case 4:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.O(B.b8(d),14)
case 2:return D.c.O(B.b8(d),12)
case 3:return D.c.O(B.b8(d),8)
case 4:return d
case 5:return B.b8(d)<<8>>>0
case 6:return D.c.O(B.b8(d),9)
case 7:return D.c.O(B.b8(d),1)
case 8:return d*524296
case 9:case 10:case 11:return d/65535}break
case 5:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.O(B.b8(d),30)
case 2:return D.c.O(B.b8(d),28)
case 3:return D.c.O(B.b8(d),24)
case 4:return D.c.O(B.b8(d),16)
case 5:return d
case 6:return D.c.O(B.b8(d),25)
case 7:return D.c.O(B.b8(d),17)
case 8:return D.c.O(B.b8(d),1)
case 9:case 10:case 11:return d/4294967295}break
case 6:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.O(B.b8(d),5)
case 2:return d<=0?0:D.c.O(B.b8(d),3)
case 3:return d<=0?0:B.b8(d)<<1>>>0
case 4:return d<=0?0:B.b8(d)*516
case 5:return d<=0?0:B.b8(d)*33818640
case 6:return d
case 7:return d*258
case 8:return d*16909320
case 9:case 10:case 11:return d/127}break
case 7:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.O(B.b8(d),15)
case 2:return d<=0?0:D.c.O(B.b8(d),11)
case 3:return d<=0?0:D.c.O(B.b8(d),7)
case 4:return d<=0?0:B.b8(d)<<1>>>0
case 5:return d<=0?0:B.b8(d)*131076
case 6:return D.c.O(B.b8(d),8)
case 7:return d
case 8:return B.b8(d)*65538
case 9:case 10:case 11:return d/32767}break
case 8:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.O(B.b8(d),29)
case 2:return d<=0?0:D.c.O(B.b8(d),27)
case 3:return d<=0?0:D.c.O(B.b8(d),23)
case 4:return d<=0?0:D.c.O(B.b8(d),16)
case 5:return d<=0?0:B.b8(d)<<1>>>0
case 6:return D.c.O(B.b8(d),24)
case 7:return D.c.O(B.b8(d),16)
case 8:return d
case 9:case 10:case 11:return d/2147483647}break
case 9:case 10:case 11:switch(f.a){case 0:return d===0?0:1
case 1:return D.d.D(D.d.b8(d,0,1)*3)
case 2:return D.d.D(D.d.b8(d,0,1)*15)
case 3:return D.d.D(D.d.b8(d,0,1)*255)
case 4:return D.d.D(D.d.b8(d,0,1)*65535)
case 5:return D.d.D(D.d.b8(d,0,1)*4294967295)
case 6:return D.d.D(d<0?D.d.b8(d,-1,1)*128:D.d.b8(d,-1,1)*127)
case 7:return D.d.D(d<0?D.d.b8(d,-1,1)*32768:D.d.b8(d,-1,1)*32767)
case 8:return D.d.D(d<0?D.d.b8(d,-1,1)*2147483648:D.d.b8(d,-1,1)*2147483647)
case 9:case 10:case 11:return d}break}},
mW:function mW(d,e){this.a=d
this.b=e},
afp:function afp(d,e){this.a=d
this.b=e},
WI(d){var x=new A.M9(B.D(y.N,y.P))
x.aOL(d)
return x},
ckl(d){var x=new A.M9(B.D(y.N,y.P))
x.pH(0,d)
return x},
M9:function M9(d){this.a=d},
aEN:function aEN(d,e){this.a=d
this.b=e},
ax(d,e,f){return new A.akp(d,e)},
akp:function akp(d,e){this.a=d
this.b=e},
rS:function rS(d){this.a=d},
bb6:function bb6(d){this.a=d},
clc(d){var x=new A.p8(B.D(y.p,y.r),new A.rS(B.D(y.N,y.P)))
x.bon(d)
return x},
p8:function p8(d,e){this.a=d
this.b=e},
bb7:function bb7(d){this.a=d},
bb8:function bb8(d){this.a=d},
cGP(d){var x=new Uint16Array(1)
x[0]=d
return new A.x9(x)},
clk(d,e){var x=new A.x9(new Uint16Array(e))
x.aOQ(d,e)
return x},
cGO(d){var x=new Uint32Array(1)
x[0]=d
return new A.qk(x)},
clf(d,e){var x=new A.qk(new Uint32Array(e))
x.aON(d,e)
return x},
clg(d,e){var x,w=J.ju(e,y.i)
for(x=0;x<e;++x)w[x]=new A.nd(d.ai(),d.ai())
return new A.rT(w)},
clj(d,e){var x=new A.x8(new Int16Array(e))
x.aOP(d,e)
return x},
clh(d,e){var x=new A.x7(new Int32Array(e))
x.aOO(d,e)
return x},
cli(d,e){var x,w,v,u,t=J.ju(e,y.i)
for(x=0;x<e;++x){w=d.ai()
v=$.hq()
v[0]=w
w=$.kX()
u=w[0]
v[0]=d.ai()
t[x]=new A.nd(u,w[0])}return new A.rU(t)},
cll(d){var x=new Float32Array(1)
x[0]=d
return new A.Av(x)},
clm(d,e){var x=new A.Av(new Float32Array(e))
x.aOR(d,e)
return x},
cld(d){var x=new Float64Array(1)
x[0]=d
return new A.Au(x)},
cle(d,e){var x=new A.Au(new Float64Array(e))
x.aOM(d,e)
return x},
m6:function m6(d,e){this.a=d
this.b=e},
jt:function jt(){},
rR:function rR(d){this.a=d},
At:function At(d){this.a=d},
x9:function x9(d){this.a=d},
qk:function qk(d){this.a=d},
rT:function rT(d){this.a=d},
uR:function uR(d){this.a=d},
x8:function x8(d){this.a=d},
x7:function x7(d){this.a=d},
rU:function rU(d){this.a=d},
Av:function Av(d){this.a=d},
Au:function Au(d){this.a=d},
FG:function FG(d){this.a=d},
ci7(d){var x,w,v=new A.aUJ()
if(!A.ca5(d))B.Z(A.bR("Not a bitmap file."))
d.d+=2
x=d.ai()
w=$.hq()
w[0]=x
x=$.kX()
d.d+=4
w[0]=d.ai()
v.b=x[0]
return v},
ca5(d){if(d.c-d.d<2)return!1
return A.bY(d,null,0).bJ()===19778},
cC_(d,e){var x,w,v,u,t=e==null?A.ci7(d):e,s=d.d,r=d.ai(),q=d.ai(),p=$.hq()
p[0]=q
q=$.kX()
x=q[0]
p[0]=d.ai()
q=q[0]
w=d.bJ()
v=d.bJ()
u=C.KG[d.ai()]
d.ai()
p[0]=d.ai()
p[0]=d.ai()
p=d.ai()
d.ai()
s=new A.Ea(t,x,q,r,w,v,u,p,s)
s.afd(d,e)
return s},
l1:function l1(d,e){this.a=d
this.b=e},
aUJ:function aUJ(){this.b=$},
Ea:function Ea(d,e,f,g,h,i,j,k,l){var _=this
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
aft:function aft(d){this.a=$
this.b=null
this.c=d},
aUI:function aUI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
b1r:function b1r(d){this.a=$
this.b=null
this.c=d},
b06:function b06(){},
b07:function b07(){},
b3N:function b3N(){},
akr:function akr(d,e,f){this.a=d
this.b=e
this.c=f},
an9:function an9(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
Mb:function Mb(d,e){this.a=d
this.b=e},
F7:function F7(d,e){this.a=d
this.b=e},
aks:function aks(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
ckm(d,e,f,g){var x,w
switch(d.a){case 1:return new A.bcl(f,e)
case 2:return new A.anb(f,g==null?1:g,e)
case 3:return new A.anb(f,g==null?16:g,e)
case 4:x=g==null?32:g
w=new A.bcj(f,x,e)
w.aOZ(e,f,x)
return w
case 5:return new A.bck(f,g==null?16:g,e)
case 6:return new A.an9(f,g==null?32:g,!1,e)
case 7:return new A.an9(f,g==null?32:g,!0,e)
default:throw B.e(A.bR("Invalid compression type: "+d.k(0)))}},
rI:function rI(d,e){this.a=d
this.b=e},
b52:function b52(){},
bci:function bci(){},
cFd(d,e,f,g){var x,w,v,u,t,s,r,q
if(e===0){if(g!==0)throw B.e(A.bR("Incomplete huffman data"))
return}x=d.d
w=d.ai()
v=d.ai()
d.d+=4
u=d.ai()
t=!0
if(w<65537)t=v>=65537
if(t)throw B.e(A.bR("Invalid huffman table size"))
d.d+=4
s=B.bv(65537,0,!1,y.p)
r=J.ip(16384,y.W)
for(q=0;q<16384;++q)r[q]=new A.akt()
A.cFe(d,e-20,w,v,s)
if(u>8*(e-(d.d-x)))throw B.e(A.bR("Error in header for Huffman-encoded data (invalid number of bits)."))
A.cFa(s,w,v,r)
A.cFc(s,r,d,u,v,g,f)},
cFc(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p="Error in Huffman-encoded data (invalid code).",o=B.a([0,0],y.t),n=f.d+D.c.aW(g+7,8)
for(x=0;f.d<n;){A.cb5(o,f)
for(;w=o[1],w>=14;){v=e[D.c.nk(o[0],w-14)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cb6(v.b,h,o,f,j,x,i)}else{if(v.c==null)throw B.e(A.bR(p))
for(t=0;t<v.b;++t){s=d[v.c[t]]&63
while(!0){w=o[1]
if(!(w<s&&f.d<n))break
A.cb5(o,f)}if(w>=s){u=v.c
w-=s
if(d[u[t]]>>>6===(D.c.nk(o[0],w)&D.c.ee(1,s)-1)>>>0){o[1]=w
r=A.cb6(u[t],h,o,f,j,x,i)
x=r
break}}}if(t===v.b)throw B.e(A.bR(p))}}}q=8-g&7
o[0]=D.c.O(o[0],q)
o[1]=o[1]-q
for(;w=o[1],w>0;){v=e[D.c.ex(o[0],14-w)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cb6(v.b,h,o,f,j,x,i)}else throw B.e(A.bR(p))}if(x!==i)throw B.e(A.bR("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
cb6(d,e,f,g,h,i,j){var x,w,v,u,t,s="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)A.cb5(f,g)
x=f[1]-8
f[1]=x
w=D.c.nk(f[0],x)&255
if(i+w>j)throw B.e(A.bR(s))
v=h[i-1]
for(;u=w-1,w>0;w=u,i=t){t=i+1
h[i]=v}}else{if(i<j){t=i+1
h[i]=d}else throw B.e(A.bR(s))
i=t}return i},
cFa(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n="Error in Huffman-encoded data (invalid code table entry)."
for(x=y.t,w=y.p;e<=f;++e){v=d[e]
u=v>>>6
t=v&63
if(D.c.hj(u,t)!==0)throw B.e(A.bR(n))
if(t>14){s=g[D.c.fD(u,t-14)]
if(s.a!==0)throw B.e(A.bR(n))
v=++s.b
r=s.c
if(r!=null){v=B.bv(v,0,!1,w)
s.c=v
for(q=s.b-1,p=0;p<q;++p)v[p]=r[p]}else s.c=B.a([0],x)
s.c[s.b-1]=e}else if(t!==0){v=14-t
o=D.c.ex(u,v)
for(p=D.c.ex(1,v);p>0;--p,++o){s=g[o]
if(s.a!==0||s.c!=null)throw B.e(A.bR(n))
s.a=t
s.b=e}}}},
cFe(d,e,f,g,h){var x,w,v,u,t,s="Error in Huffman-encoded data (unexpected end of code table data).",r="Error in Huffman-encoded data (code table is longer than expected).",q=d.d,p=B.a([0,0],y.t)
for(x=g+1;f<=g;++f){if(d.d-q>e)throw B.e(A.bR(s))
w=A.ckn(6,p,d)
h[f]=w
if(w===63){if(d.d-q>e)throw B.e(A.bR(s))
v=A.ckn(8,p,d)+6
if(f+v>x)throw B.e(A.bR(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}else if(w>=59){v=w-59+2
if(f+v>x)throw B.e(A.bR(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}}A.cFb(h)},
cFb(d){var x,w,v,u,t,s=B.bv(59,0,!1,y.p)
for(x=0;x<65537;++x){w=d[x]
s[w]=s[w]+1}for(v=0,x=58;x>0;--x,v=u){u=v+s[x]>>>1
s[x]=v}for(x=0;x<65537;++x){t=d[x]
if(t>0){w=s[t]
s[t]=w+1
d[x]=(t|w<<6)>>>0}}},
cb5(d,e){d[0]=((d[0]<<8|e.cZ())&-1)>>>0
d[1]=(d[1]+8&-1)>>>0},
ckn(d,e,f){var x
for(;x=e[1],x<d;){e[0]=((e[0]<<8|J.t(f.a,f.d++))&-1)>>>0
e[1]=(e[1]+8&-1)>>>0}x-=d
e[1]=x
return(D.c.nk(e[0],x)&D.c.ee(1,d)-1)>>>0},
akt:function akt(){this.b=this.a=0
this.c=null},
cFf(d){var x=A.cB(d,!1,null,0)
if(x.ai()!==20000630)return!1
if(x.cZ()!==2)return!1
if((x.r_()&4294967289)>>>0!==0)return!1
return!0},
b54:function b54(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
clB(d,e,f){var x=new A.ana(d,B.a([],y.Q),B.D(y.N,y.v),C.GB,e)
x.aOD(d,e,f,{})
return x},
WO:function WO(){},
b55:function b55(d,e){this.a=d
this.b=e},
ana:function ana(d,e,f,g,h){var _=this
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
bcj:function bcj(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
aHH:function aHH(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
bck:function bck(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
bcl:function bcl(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
anb:function anb(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
b53:function b53(){this.a=null},
ckR(d){var x=new Uint8Array(d*3)
return new A.Xq(A.cGj(d),d,null,new A.tb(x,d,3))},
cGi(d){return new A.Xq(d.a,d.b,d.c,A.cmW(d.d))},
cGj(d){var x
for(x=1;x<=8;++x)if(D.c.ee(1,x)>=d)return x
return 0},
Xq:function Xq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xr:function Xr(){},
anc:function anc(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=$},
alU:function alU(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
b8I:function b8I(){var _=this
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
cl9(d){var x,w,v,u,t,s
if(d.bJ()!==0)return null
x=d.bJ()
if(x>=3)return null
w=C.as9[x]
if(w===C.H3)return null
v=d.bJ()
u=J.ju(v,y.X)
for(t=0;t<v;++t){J.t(d.a,d.d++)
s=J.t(d.a,d.d++)
J.t(d.a,d.d++);++d.d
d.bJ()
d.bJ()
u[t]=new A.amB(s,d.ai(),d.ai())}return new A.baW(w,v,u)},
MA:function MA(d,e){this.a=d
this.b=e},
baW:function baW(d,e,f){this.c=d
this.d=e
this.e=f},
amB:function amB(d,e,f){this.b=d
this.d=e
this.e=f},
baU:function baU(d,e,f,g,h,i,j,k,l){var _=this
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
baV:function baV(){this.b=this.a=null},
agr:function agr(d,e,f){this.e=d
this.f=e
this.r=f},
FA:function FA(){},
FB:function FB(d){this.a=d},
XR:function XR(d){this.a=d},
bcL:function bcL(){this.d=null},
AS:function AS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.y=_.x=_.w=_.r=_.f=_.e=$},
clP(){var x=B.bv(4,null,!1,y.a7),w=B.a([],y.cB),v=y.l,u=J.AP(0,v)
v=J.AP(0,v)
return new A.bcN(new A.M9(B.D(y.N,y.P)),x,w,u,v,B.a([],y.q))},
bcN:function bcN(d,e,f,g,h,i){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i},
bcO:function bcO(d,e){this.a=d
this.b=e},
Rs:function Rs(d){this.a=d
this.b=0},
anp:function anp(d,e){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=d
_.z=e},
bcR:function bcR(){this.r=this.f=$},
anq:function anq(d,e,f,g,h,i,j,k){var _=this
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
ano:function ano(){},
bcM:function bcM(d,e){this.a=d
this.b=e},
bcP:function bcP(d,e,f,g,h,i,j,k,l){var _=this
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
Oj:function Oj(d,e){this.a=d
this.b=e},
a0x:function a0x(d,e){this.a=d
this.b=e},
a0y:function a0y(){},
and:function and(d,e,f,g,h,i,j,k,l){var _=this
_.y=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
clC(){var x=y.N
return new A.bcm(B.D(x,x),B.a([],y.d),B.a([],y.t))},
BL:function BL(d,e){this.a=d
this.b=e},
bnd:function bnd(){},
bcm:function bcm(d,e,f){var _=this
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
at3:function at3(d){var _=this
_.a=d
_.c=_.b=0
_.d=$
_.e=0},
at4:function at4(d,e){this.a=d
this.b=e},
bnb:function bnb(d,e){var _=this
_.a=null
_.b=d
_.c=0
_.d=e
_.e=$
_.f=0
_.r=!1
_.w=null},
BM:function BM(d,e){this.a=d
this.b=e},
He:function He(d){this.b=this.a=0
this.e=d},
bne:function bne(d){this.b=this.a=null
this.c=d},
bnf:function bnf(){},
a0R:function a0R(d){this.a=d
this.c=$},
cnC(d){var x=new A.boa(B.D(y.p,y.a2))
x.aP9(d)
return x},
cKc(b6,b7,b8,b9,c0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=B.D(y.p,y.aG)
for(x=c0.length,w=0;v=c0.length,w<v;c0.length===x||(0,B.O)(c0),++w){u=c0[w]
b5.n(0,u.a,u)}if(b7===8)t=1
else t=b7===16?2:-1
s=A.hc(b4,b4,C.a_,0,C.b3,b9,b4,0,v,b4,C.a_,b8,!1)
if(t===-1)throw B.e(A.bR("PSD: unsupported bit depth: "+B.o(b7)))
r=b5.i(0,0)
q=b5.i(0,1)
p=b5.i(0,2)
o=b5.i(0,-1)
n=-t
for(x=s.a,x=x.gX(x),m=v>=5,l=t===1,k=v===4,j=v>=2,v=v>=4;x.q();){i=x.gK(x)
n+=t
switch(b6){case C.a0d:h=r.c
h===$&&B.b()
i.saC(0,l?h[n]:(h[n]<<8|h[n+1])>>>8)
h=q.c
h===$&&B.b()
i.saL(l?h[n]:(h[n]<<8|h[n+1])>>>8)
h=p.c
h===$&&B.b()
i.saM(0,l?h[n]:(h[n]<<8|h[n+1])>>>8)
if(v){h=o.c
h===$&&B.b()
h=l?h[n]:(h[n]<<8|h[n+1])>>>8}else h=255
i.saP(0,h)
if(i.gaP(i)!==0){i.saC(0,(i.gaC(i)+i.gaP(i)-255)*255/i.gaP(i))
i.saL((i.gaL()+i.gaP(i)-255)*255/i.gaP(i))
i.saM(0,(i.gaM(i)+i.gaP(i)-255)*255/i.gaP(i))}break
case C.a0f:h=r.c
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
a9=[D.d.D(D.d.b8(a6*255,0,255)),D.d.D(D.d.b8(a7*255,0,255)),D.d.D(D.d.b8(a8*255,0,255))]
i.saC(0,a9[0])
i.saL(a9[1])
i.saM(0,a9[2])
i.saP(0,d)
break
case C.a0c:h=r.c
h===$&&B.b()
b0=l?h[n]:(h[n]<<8|h[n+1])>>>8
if(j){h=o.c
h===$&&B.b()
d=l?h[n]:(h[n]<<8|h[n+1])>>>8}else d=255
i.saC(0,b0)
i.saL(b0)
i.saM(0,b0)
i.saP(0,d)
break
case C.a0e:h=r.c
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
a9=A.ctq(255-b1,255-b2,255-a0,255-b3)
i.saC(0,a9[0])
i.saL(a9[1])
i.saM(0,a9[2])
i.saP(0,d)
break
default:throw B.e(A.bR("Unhandled color mode: "+B.o(b6)))}}return s},
th:function th(d,e){this.a=d
this.b=e},
boa:function boa(d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=$
_.y=null
_.z=d
_.at=_.as=$},
bo9:function bo9(){this.a=null},
atB:function atB(){},
xO:function xO(d,e,f){this.a=d
this.b=e
this.c=f},
lp:function lp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0U:function a0U(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
Oz:function Oz(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
atA:function atA(){this.y=this.b=this.a=0},
xP(d,e){return(C.tD[d>>>8]<<17|C.tD[e>>>8]<<16|C.tD[d&255]<<1|C.tD[e&255])>>>0},
qJ:function qJ(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
bob:function bob(){this.b=this.a=null},
axA:function axA(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
nu:function nu(d,e){this.a=d
this.b=e},
byJ:function byJ(){this.a=null
this.b=$},
byX:function byX(d){this.a=d
this.c=this.b=0},
axF:function axF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
cdt(d,e,f){var x=new A.byZ(e,f,d),w=y.u
x.e=B.bv(e,null,!1,w)
x.f=B.bv(e,null,!1,w)
return x},
byZ:function byZ(d,e,f){var _=this
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
axG:function axG(d,e,f,g){var _=this
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
Iz:function Iz(d,e){this.a=d
this.b=e},
k4:function k4(d,e){this.a=d
this.b=e},
r_:function r_(d,e){this.a=d
this.b=e},
bz_:function bz_(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
cm9(){return new A.beg(new Uint8Array(4096))},
beg:function beg(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
byY:function byY(){this.a=null
this.c=$},
cdK(d,e){var x=new Int32Array(4),w=new Int32Array(4),v=new Int8Array(4),u=new Int8Array(4),t=B.bv(8,null,!1,y.ak),s=B.bv(4,null,!1,y.Z)
return new A.bC9(d,e,new A.bCf(),new A.bCj(),new A.bCb(x,w),new A.bCl(v,u),t,s,new Uint8Array(4))},
cq2(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
bC9:function bC9(d,e,f,g,h,i,j,k,l){var _=this
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
_.bP=$
_.bf=null
_.b9=_.ad=$
_.c9=null
_.cY=$},
bCm:function bCm(){},
cq_(d){var x=new A.a4F(d)
x.b=254
x.c=0
x.d=-8
return x},
a4F:function a4F(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
eq(d,e,f){return D.c.kt(D.c.O(d+2*e+f+2,2),32)},
cNY(d){var x,w=B.a([A.eq(J.t(d.a,d.d+-33),J.t(d.a,d.d+-32),J.t(d.a,d.d+-31)),A.eq(J.t(d.a,d.d+-32),J.t(d.a,d.d+-31),J.t(d.a,d.d+-30)),A.eq(J.t(d.a,d.d+-31),J.t(d.a,d.d+-30),J.t(d.a,d.d+-29)),A.eq(J.t(d.a,d.d+-30),J.t(d.a,d.d+-29),J.t(d.a,d.d+-28))],y.t)
for(x=0;x<4;++x)d.yY(x*32,4,w)},
cNQ(d){var x=J.t(d.a,d.d+-33),w=J.t(d.a,d.d+-1),v=J.t(d.a,d.d+31),u=J.t(d.a,d.d+63),t=J.t(d.a,d.d+95),s=A.bY(d,null,0)
s.OE()[0]=16843009*A.eq(x,w,v)
s.d+=32
s.OE()[0]=16843009*A.eq(w,v,u)
s.d+=32
s.OE()[0]=16843009*A.eq(v,u,t)
s.d+=32
s.OE()[0]=16843009*A.eq(u,t,t)},
cNO(d){var x,w,v,u
for(x=4,w=0;w<4;++w)x+=J.t(d.a,d.d+(w-32))+J.t(d.a,d.d+(-1+w*32))
x=D.c.O(x,3)
for(w=0;w<4;++w){v=d.a
u=d.d+w*32
J.rp(v,u,u+4,x)}},
cdL(d,e){var x,w,v,u,t,s=255-J.t(d.a,d.d+-33)
for(x=0,w=0;w<e;++w){v=s+J.t(d.a,d.d+(x-1))
for(u=0;u<e;++u){t=$.oP()[v+J.t(d.a,d.d+(-32+u))]
J.bX(d.a,d.d+(x+u),t)}x+=32}},
cNW(d){A.cdL(d,4)},
cNX(d){A.cdL(d,8)},
cNV(d){A.cdL(d,16)},
cNU(d){var x=J.t(d.a,d.d+-1),w=J.t(d.a,d.d+31),v=J.t(d.a,d.d+63),u=J.t(d.a,d.d+95),t=J.t(d.a,d.d+-33),s=J.t(d.a,d.d+-32),r=J.t(d.a,d.d+-31),q=J.t(d.a,d.d+-30),p=J.t(d.a,d.d+-29)
d.n(0,96,A.eq(w,v,u))
v=A.eq(x,w,v)
d.n(0,97,v)
d.n(0,64,v)
w=A.eq(t,x,w)
d.n(0,98,w)
d.n(0,65,w)
d.n(0,32,w)
x=A.eq(s,t,x)
d.n(0,99,x)
d.n(0,66,x)
d.n(0,33,x)
d.n(0,0,x)
t=A.eq(r,s,t)
d.n(0,67,t)
d.n(0,34,t)
d.n(0,1,t)
s=A.eq(q,r,s)
d.n(0,35,s)
d.n(0,2,s)
d.n(0,3,A.eq(p,q,r))},
cNT(d){var x=J.t(d.a,d.d+-32),w=J.t(d.a,d.d+-31),v=J.t(d.a,d.d+-30),u=J.t(d.a,d.d+-29),t=J.t(d.a,d.d+-28),s=J.t(d.a,d.d+-27),r=J.t(d.a,d.d+-26),q=J.t(d.a,d.d+-25)
d.n(0,0,A.eq(x,w,v))
w=A.eq(w,v,u)
d.n(0,32,w)
d.n(0,1,w)
v=A.eq(v,u,t)
d.n(0,64,v)
d.n(0,33,v)
d.n(0,2,v)
u=A.eq(u,t,s)
d.n(0,96,u)
d.n(0,65,u)
d.n(0,34,u)
d.n(0,3,u)
t=A.eq(t,s,r)
d.n(0,97,t)
d.n(0,66,t)
d.n(0,35,t)
s=A.eq(s,r,q)
d.n(0,98,s)
d.n(0,67,s)
d.n(0,99,A.eq(r,q,q))},
cO_(d){var x=J.t(d.a,d.d+-1),w=J.t(d.a,d.d+31),v=J.t(d.a,d.d+63),u=J.t(d.a,d.d+-33),t=J.t(d.a,d.d+-32),s=J.t(d.a,d.d+-31),r=J.t(d.a,d.d+-30),q=J.t(d.a,d.d+-29),p=D.c.kt(D.c.O(u+t+1,1),32)
d.n(0,65,p)
d.n(0,0,p)
p=D.c.kt(D.c.O(t+s+1,1),32)
d.n(0,66,p)
d.n(0,1,p)
p=D.c.kt(D.c.O(s+r+1,1),32)
d.n(0,67,p)
d.n(0,2,p)
d.n(0,3,D.c.kt(D.c.O(r+q+1,1),32))
d.n(0,96,A.eq(v,w,x))
d.n(0,64,A.eq(w,x,u))
x=A.eq(x,u,t)
d.n(0,97,x)
d.n(0,32,x)
u=A.eq(u,t,s)
d.n(0,98,u)
d.n(0,33,u)
t=A.eq(t,s,r)
d.n(0,99,t)
d.n(0,34,t)
d.n(0,35,A.eq(s,r,q))},
cNZ(d){var x,w=J.t(d.a,d.d+-32),v=J.t(d.a,d.d+-31),u=J.t(d.a,d.d+-30),t=J.t(d.a,d.d+-29),s=J.t(d.a,d.d+-28),r=J.t(d.a,d.d+-27),q=J.t(d.a,d.d+-26),p=J.t(d.a,d.d+-25)
d.n(0,0,D.c.kt(D.c.O(w+v+1,1),32))
x=D.c.kt(D.c.O(v+u+1,1),32)
d.n(0,64,x)
d.n(0,1,x)
x=D.c.kt(D.c.O(u+t+1,1),32)
d.n(0,65,x)
d.n(0,2,x)
x=D.c.kt(D.c.O(t+s+1,1),32)
d.n(0,66,x)
d.n(0,3,x)
d.n(0,32,A.eq(w,v,u))
v=A.eq(v,u,t)
d.n(0,96,v)
d.n(0,33,v)
u=A.eq(u,t,s)
d.n(0,97,u)
d.n(0,34,u)
t=A.eq(t,s,r)
d.n(0,98,t)
d.n(0,35,t)
d.n(0,67,A.eq(s,r,q))
d.n(0,99,A.eq(r,q,p))},
cNR(d){var x,w=J.t(d.a,d.d+-1),v=J.t(d.a,d.d+31),u=J.t(d.a,d.d+63),t=J.t(d.a,d.d+95)
d.n(0,0,D.c.kt(D.c.O(w+v+1,1),32))
x=D.c.kt(D.c.O(v+u+1,1),32)
d.n(0,32,x)
d.n(0,2,x)
x=D.c.kt(D.c.O(u+t+1,1),32)
d.n(0,64,x)
d.n(0,34,x)
d.n(0,1,A.eq(w,v,u))
v=A.eq(v,u,t)
d.n(0,33,v)
d.n(0,3,v)
u=A.eq(u,t,t)
d.n(0,65,u)
d.n(0,35,u)
d.n(0,99,t)
d.n(0,98,t)
d.n(0,97,t)
d.n(0,96,t)
d.n(0,66,t)
d.n(0,67,t)},
cNP(d){var x=J.t(d.a,d.d+-1),w=J.t(d.a,d.d+31),v=J.t(d.a,d.d+63),u=J.t(d.a,d.d+95),t=J.t(d.a,d.d+-33),s=J.t(d.a,d.d+-32),r=J.t(d.a,d.d+-31),q=J.t(d.a,d.d+-30),p=D.c.kt(D.c.O(x+t+1,1),32)
d.n(0,34,p)
d.n(0,0,p)
p=D.c.kt(D.c.O(w+x+1,1),32)
d.n(0,66,p)
d.n(0,32,p)
p=D.c.kt(D.c.O(v+w+1,1),32)
d.n(0,98,p)
d.n(0,64,p)
d.n(0,96,D.c.kt(D.c.O(u+v+1,1),32))
d.n(0,3,A.eq(s,r,q))
d.n(0,2,A.eq(t,s,r))
s=A.eq(x,t,s)
d.n(0,35,s)
d.n(0,1,s)
t=A.eq(w,x,t)
d.n(0,67,t)
d.n(0,33,t)
x=A.eq(v,w,x)
d.n(0,99,x)
d.n(0,65,x)
d.n(0,97,A.eq(u,v,w))},
cOa(d){var x
for(x=0;x<16;++x)d.qT(x*32,16,d,-32)},
cO8(d){var x,w,v,u,t
for(x=0,w=16;w>0;--w){v=J.t(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.rp(u,t,t+16,v)
x+=32}},
bCd(d,e){var x,w,v
for(x=0;x<16;++x){w=e.a
v=e.d+x*32
J.rp(w,v,v+16,d)}},
cO0(d){var x,w
for(x=16,w=0;w<16;++w)x+=J.t(d.a,d.d+(-1+w*32))+J.t(d.a,d.d+(w-32))
A.bCd(D.c.O(x,5),d)},
cO2(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.t(d.a,d.d+(-1+w*32))
A.bCd(D.c.O(x,4),d)},
cO1(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.t(d.a,d.d+(w-32))
A.bCd(D.c.O(x,4),d)},
cO3(d){A.bCd(128,d)},
cOb(d){var x
for(x=0;x<8;++x)d.qT(x*32,8,d,-32)},
cO9(d){var x,w,v,u,t
for(x=0,w=0;w<8;++w){v=J.t(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.rp(u,t,t+8,v)
x+=32}},
bCe(d,e){var x,w,v
for(x=0;x<8;++x){w=e.a
v=e.d+x*32
J.rp(w,v,v+8,d)}},
cO4(d){var x,w
for(x=8,w=0;w<8;++w)x+=J.t(d.a,d.d+(w-32))+J.t(d.a,d.d+(-1+w*32))
A.bCe(D.c.O(x,4),d)},
cO5(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.t(d.a,d.d+(w-32))
A.bCe(D.c.O(x,3),d)},
cO6(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.t(d.a,d.d+(-1+w*32))
A.bCe(D.c.O(x,3),d)},
cO7(d){A.bCe(128,d)},
D1(d,e,f,g,h){var x=e+f+g*32,w=J.t(d.a,d.d+x)+D.c.O(h,3)
if(!((w&-256)>>>0===0))w=w<0?0:255
d.n(0,x,w)},
bCc(d,e,f,g,h){A.D1(d,0,0,e,f+g)
A.D1(d,0,1,e,f+h)
A.D1(d,0,2,e,f-h)
A.D1(d,0,3,e,f-g)},
cNS(){var x,w,v
if(!$.cq0){for(x=-255;x<=255;++x){w=$.aQA()
v=255+x
w[v]=x<0?-x:x
$.c9o()[v]=D.c.O(w[v],1)}for(x=-1020;x<=1020;++x){w=$.c9p()
if(x<-128)v=-128
else v=x>127?127:x
w[1020+x]=v}for(x=-112;x<=112;++x){w=$.aQB()
if(x<-16)v=-16
else v=x>15?15:x
w[112+x]=v}for(x=-255;x<=510;++x){w=$.oP()
if(x<0)v=0
else v=x>255?255:x
w[255+x]=v}$.cq0=!0}},
bCa:function bCa(){},
cNN(){var x,w=J.ip(3,y.D)
for(x=0;x<3;++x)w[x]=new Uint8Array(11)
return new A.a4E(w)},
cOq(){var x,w,v,u,t=new Uint8Array(3),s=J.ip(4,y.cm)
for(x=y.V,w=0;w<4;++w){v=J.ip(8,x)
for(u=0;u<8;++u)v[u]=A.cNN()
s[w]=v}D.ac.jP(t,0,3,255)
return new A.bCk(t,s)},
bCf:function bCf(){this.d=$},
bCj:function bCj(){this.b=null},
bCl:function bCl(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
a4E:function a4E(d){this.a=d},
bCk:function bCk(d,e){this.a=d
this.b=e},
bCb:function bCb(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
II:function II(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
ayx:function ayx(){this.b=this.a=0},
ayz:function ayz(d,e,f){this.a=d
this.b=e
this.c=f},
ayy:function ayy(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
ayA:function ayA(d,e,f){this.a=d
this.b=e
this.c=f},
cdM(d,e){var x=B.a([],y.A),w=B.a([],y.F),v=new Uint32Array(2),u=new A.ayv(d,v)
v=u.d=B.c3(v.buffer,0,null)
v[0]=d.cZ()
v[1]=d.cZ()
v[2]=d.cZ()
v[3]=d.cZ()
v[4]=d.cZ()
v[5]=d.cZ()
v[6]=d.cZ()
v[7]=d.cZ()
return new A.a4G(u,e,x,w)},
D2(d,e){return D.c.O(d+D.c.ee(1,e)-1,e)},
a4G:function a4G(d,e,f,g){var _=this
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
ane:function ane(d,e,f,g){var _=this
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
ayv:function ayv(d,e){var _=this
_.a=0
_.b=d
_.c=e
_.d=$},
bCg:function bCg(d,e){this.a=d
this.b=e},
bCh(d,e,f){var x=d[e]
d[e]=(((x&4278255360)>>>0)+((f&4278255360)>>>0)&4278255360|(x&16711935)+(f&16711935)&16711935)>>>0},
yp(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
IK(d){if(d<0)return 0
if(d>255)return 255
return d},
bCi(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
cOc(d,e,f){return 4278190080},
cOd(d,e,f){return e},
cOi(d,e,f){return d[f]},
cOj(d,e,f){return d[f+1]},
cOk(d,e,f){return d[f-1]},
cOl(d,e,f){var x=d[f]
return A.yp(A.yp(e,d[f+1]),x)},
cOm(d,e,f){return A.yp(e,d[f-1])},
cOn(d,e,f){return A.yp(e,d[f])},
cOo(d,e,f){return A.yp(d[f-1],d[f])},
cOp(d,e,f){return A.yp(d[f],d[f+1])},
cOe(d,e,f){var x=d[f-1],w=d[f],v=d[f+1]
return A.yp(A.yp(e,x),A.yp(w,v))},
cOf(d,e,f){var x=d[f],w=d[f-1]
return A.bCi(x>>>24,e>>>24,w>>>24)+A.bCi(x>>>16&255,e>>>16&255,w>>>16&255)+A.bCi(x>>>8&255,e>>>8&255,w>>>8&255)+A.bCi(x&255,e&255,w&255)<=0?x:e},
cOg(d,e,f){var x=d[f],w=d[f-1]
return(A.IK((e>>>24)+(x>>>24)-(w>>>24))<<24|A.IK((e>>>16&255)+(x>>>16&255)-(w>>>16&255))<<16|A.IK((e>>>8&255)+(x>>>8&255)-(w>>>8&255))<<8|A.IK((e&255)+(x&255)-(w&255)))>>>0},
cOh(d,e,f){var x,w,v,u=d[f],t=d[f-1],s=A.yp(e,u)
u=s>>>24
x=s>>>16&255
w=s>>>8&255
v=s>>>0&255
return(A.IK(u+D.c.aW(u-(t>>>24),2))<<24|A.IK(x+D.c.aW(x-(t>>>16&255),2))<<16|A.IK(w+D.c.aW(w-(t>>>8&255),2))<<8|A.IK(v+D.c.aW(v-(t&255),2)))>>>0},
IJ:function IJ(d,e){this.a=d
this.b=e},
ayw:function ayw(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
bD3:function bD3(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
a4U:function a4U(){},
anf:function anf(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=$
_.r=1
_.x=_.w=$},
cl5(){var x=new Uint8Array(128),w=new Int16Array(128)
x=new A.amz(x,w,new Int16Array(128))
x.a5u(0)
return x},
cGm(){var x,w=J.ip(5,y.x)
for(x=0;x<5;++x)w[x]=A.cl5()
return new A.Xx(w)},
amz:function amz(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$
_.f=_.e=0},
Xx:function Xx(d){this.a=d},
Qu:function Qu(d,e){this.a=d
this.b=e},
ayX:function ayX(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
ang:function ang(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
bD4:function bD4(){this.b=this.a=null},
cl8(d){return new A.XT(d.a,d.b,D.ac.lz(d.c,0))},
baT:function baT(d,e){this.a=d
this.b=e},
XT:function XT(d,e,f){this.a=d
this.b=e
this.c=f},
hc(d,e,f,g,h,i,j,k,l,m,n,o,p){var x,w=new A.Ax(null,null,null,d,k,h,g,0)
w.gkl().push(w)
w.c=j
if(e!=null)w.e=A.WI(e)
x=!1
if(m==null)if(p)x=w.gda()===C.eU||w.gda()===C.fx||w.gda()===C.fy||w.gda()===C.a_||w.gda()===C.bW
w.ahq(o,i,f,l,x?w.aTK(f,n,l):m)
return w},
amL(d,e,f,g){var x,w,v,u=null,t=d.e
t=t==null?u:A.WI(t)
x=d.c
x=x==null?u:A.cl8(x)
w=d.w
v=d.r
t=new A.Ax(u,x,t,u,v,w,d.y,d.z)
t.aOT(d,e,f,g)
return t},
Aw(d,e,f){var x,w,v,u,t=null,s=d.a
s=s==null?t:s.qf(0,f)
x=d.e
x=x==null?t:A.WI(x)
w=d.c
w=w==null?t:A.cl8(w)
v=d.w
u=d.r
s=new A.Ax(s,w,x,t,u,v,d.y,d.z)
s.aOS(d,e,f)
return s},
alK:function alK(d,e){this.a=d
this.b=e},
Ax:function Ax(d,e,f,g,h,i,j,k){var _=this
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
bbw:function bbw(d,e){this.a=d
this.b=e},
bbv:function bbv(){},
lb:function lb(){},
cGS(d,e,f){return new A.MK(new Uint16Array(d*e*f),d,e,f)},
MK:function MK(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
cGT(d,e,f){return new A.ML(new Float32Array(d*e*f),d,e,f)},
ML:function ML(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
XW:function XW(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
XX:function XX(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
XY:function XY(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
XZ:function XZ(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
MM:function MM(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
MN:function MN(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
MO:function MO(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
cGU(d,e,f){return new A.MP(new Uint32Array(d*e*f),d,e,f)},
MP:function MP(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
MQ:function MQ(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
clo(d,e,f){return new A.MR(new Uint8Array(d*e*f),null,d,e,f)},
MR:function MR(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
anh:function anh(d,e){this.a=d
this.b=e},
bkT:function bkT(){},
arL:function arL(d,e,f){this.c=d
this.a=e
this.b=f},
arM:function arM(d,e,f){this.c=d
this.a=e
this.b=f},
arN:function arN(d,e,f){this.c=d
this.a=e
this.b=f},
arO:function arO(d,e,f){this.c=d
this.a=e
this.b=f},
arP:function arP(d,e,f){this.c=d
this.a=e
this.b=f},
arQ:function arQ(d,e,f){this.c=d
this.a=e
this.b=f},
arR:function arR(d,e,f){this.c=d
this.a=e
this.b=f},
a_w:function a_w(d,e,f){this.c=d
this.a=e
this.b=f},
cmW(d){return new A.tb(new Uint8Array(B.bJ(d.c)),d.a,d.b)},
tb:function tb(d,e,f){this.c=d
this.a=e
this.b=f},
ccg(d){return new A.GH(-1,0,-d.c,d)},
GH:function GH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cch(d){return new A.GI(-1,0,-d.c,d)},
GI:function GI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cci(d){return new A.GJ(-1,0,-d.c,d)},
GJ:function GJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ccj(d){return new A.GK(-1,0,-d.c,d)},
GK:function GK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cck(d){return new A.GL(-1,0,-d.c,d)},
GL:function GL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ccl(d){return new A.GM(-1,0,-d.c,d)},
GM:function GM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
tc(d,e,f,g,h){d.fZ(0,e-1,f)
return new A.as4(d,e,e+g-1,f+h-1)},
as4:function as4(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g},
a_L(d){return new A.GN(-1,0,0,-1,0,d)},
GN:function GN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ccm(d){return new A.GO(-1,0,-d.c,d)},
GO:function GO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_M(d){return new A.GP(-1,0,0,-2,0,d)},
GP:function GP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ccn(d){return new A.GQ(-1,0,-d.c,d)},
GQ:function GQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_N(d){return new A.GR(-1,0,0,-(d.c<<2>>>0),d)},
GR:function GR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bl7(d){return new A.GS(-1,0,-d.c,d)},
GS:function GS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f0:function f0(){},
cY7(d,e){switch(e.a){case 0:A.aQ8(d)
break
case 1:A.cYa(d)
break
case 2:A.cY8(d)
break}return d},
cYa(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.gkl().length
for(x=y.g,w=0;w<h;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?i:t.a
if(r==null)r=0
q=s?i:t.b
if(q==null)q=0
p=D.c.aW(q,2)
t=d.a
if((t==null?i:t.geA())!=null)for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.e2(m,n,i)
if(l==null)l=new A.f0()
t=u.a
k=t==null?i:t.e2(m,o,i)
if(k==null)k=new A.f0()
j=l.gdW(l)
l.sdW(0,k.gdW(k))
k.sdW(0,j)}else for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.e2(m,n,i)
if(l==null)l=new A.f0()
t=u.a
k=t==null?i:t.e2(m,o,i)
if(k==null)k=new A.f0()
j=l.gaC(l)
l.saC(0,k.gaC(k))
k.saC(0,j)
j=l.gaL()
l.saL(k.gaL())
k.saL(j)
j=l.gaM(l)
l.saM(0,k.gaM(k))
k.saM(0,j)
j=l.gaP(l)
l.saP(0,k.gaP(k))
k.saP(0,j)}}return d},
aQ8(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=d.gkl().length
for(x=y.g,w=0;w<g;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?h:t.a
if(r==null)r=0
q=s?h:t.b
if(q==null)q=0
p=D.c.aW(r,2)
t=d.a
if((t==null?h:t.geA())!=null)for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.e2(l,n,h)
if(k==null)k=new A.f0()
t=u.a
j=t==null?h:t.e2(m,n,h)
if(j==null)j=new A.f0()
i=k.gdW(k)
k.sdW(0,j.gdW(j))
j.sdW(0,i)}else for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.e2(l,n,h)
if(k==null)k=new A.f0()
t=u.a
j=t==null?h:t.e2(m,n,h)
if(j==null)j=new A.f0()
i=k.gaC(k)
k.saC(0,j.gaC(j))
j.saC(0,i)
i=k.gaL()
k.saL(j.gaL())
j.saL(i)
i=k.gaM(k)
k.saM(0,j.gaM(j))
j.saM(0,i)
i=k.gaP(k)
k.saP(0,j.gaP(j))
j.saP(0,i)}}return d},
cY8(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=d.gkl().length
for(x=y.g,w=0;w<f;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?g:t.a
if(r==null)r=0
q=s?g:t.b
if(q==null)q=0
p=D.c.aW(q,2)
if((s?g:t.geA())!=null)for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.e2(k,m,g)
if(j==null)j=new A.f0()
t=u.a
i=t==null?g:t.e2(l,o,g)
if(i==null)i=new A.f0()
h=j.gdW(j)
j.sdW(0,i.gdW(i))
i.sdW(0,h)}else for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.e2(k,m,g)
if(j==null)j=new A.f0()
t=u.a
i=t==null?g:t.e2(l,o,g)
if(i==null)i=new A.f0()
h=j.gaC(j)
j.saC(0,i.gaC(i))
i.saC(0,h)
h=j.gaL()
j.saL(i.gaL())
i.saL(h)
h=j.gaM(j)
j.saM(0,i.gaM(i))
i.saM(0,h)
h=j.gaP(j)
j.saP(0,i.gaP(i))
i.saP(0,h)}}return d},
b6f:function b6f(d,e){this.a=d
this.b=e},
bR(d){return new A.amP(d)},
amP:function amP(d){this.a=d},
cB(d,e,f,g){return new A.le(d,g,f==null?J.b0(d):g+f,g,e)},
bY(d,e,f){var x=d.a,w=d.d+f,v=e==null?d.c:w+e
return new A.le(x,d.b,v,w,d.e)},
le:function le(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bjy:function bjy(d){var _=this
_.a=$
_.b=10
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=d
_.ax=_.at=$},
pn(d,e){return new A.ary(d,new Uint8Array(e))},
ary:function ary(d,e){this.a=0
this.b=d
this.c=e},
boi:function boi(){},
nd:function nd(d,e){this.a=d
this.b=e},
bqy:function bqy(d,e){this.a=d
this.b=e},
bqv:function bqv(d,e){this.a=d
this.b=e},
bAR:function bAR(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
cmw(d){return new Int8Array(d)},
cNz(d){throw B.e(B.ao("Uint64List not supported on the web."))},
cHd(d,e,f){B.z_(d,e,f)
return f==null?new Int8Array(d,e):new Int8Array(d,e,f)},
cpM(d,e){return B.oe(d,e,null)},
cFD(d){return B.bjd(d,0,null)},
cFE(d){return d.bFO(0,0,null)},
cYs(d){var x,w,v,u,t,s=d.length
for(x=1,w=0,v=0;s>0;){u=3800>s?s:3800
s-=u
for(;--u,u>=0;v=t){t=v+1
x+=d[v]&255
w+=x}x=D.c.al(x,65521)
w=D.c.al(w,65521)}return(w<<16|x)>>>0},
w4(d,e){var x,w,v=J.a1(d),u=v.gt(d)
e^=4294967295
for(x=0;u>=8;){w=x+1
e=C.fD[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.fD[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.fD[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.fD[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.fD[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.fD[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.fD[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.fD[(e^v.i(d,w))&255]^e>>>8
u-=8}if(u>0)do{w=x+1
e=C.fD[(e^v.i(d,x))&255]^e>>>8
if(--u,u>0){x=w
continue}else break}while(!0)
return(e^4294967295)>>>0},
cGE(d){var x,w,v,u,t,s,r,q,p=null,o="data:image/jpeg;base64,",n="data:image/png;base64,",m=F.aQh(I.c8H(d),"img"),l=B.a([],y.s)
for(x=m.length,w=0;w<m.length;m.length===x||(0,B.O)(m),++w){v=m[w].b.i(0,"src")
if(v!=null)u=D.e.bl(v,o)||D.e.bl(v,n)
else u=!1
if(u){v.toString
if(B.JX(v,o,0))t=B.cfK(v,o,"",0)
else t=B.cfK(v,n,"",0)
if(D.c.aW(t.length*3,4)>524288){s=D.e2.cH(t)
if(D.e.bl(v,o)){r=A.cfh(s)
q=r==null?p:r.mY(0,s,p)
if(q!=null){u=q.a
u=u==null?p:u.a
u=(u==null?0:u)>1200}else u=!1
if(u)l.push(v)}else if(D.e.bl(v,n)){r=A.cfh(s)
q=r==null?p:r.mY(0,s,p)
if(q!=null){u=q.a
u=u==null?p:u.a
u=(u==null?0:u)>1000}else u=!1
if(u)l.push(v)}}}}return l},
amq(d,e,f){var x=0,w=B.l(y.N),v,u,t,s,r,q
var $async$amq=B.h(function(g,h){if(g===1)return B.i(h,w)
while(true)switch(x){case 0:r=I.c8H(d)
q=new F.HX().Ys(0,r,F.c6h('img[src="'+e+'"]'))
x=q!=null?3:4
break
case 3:u=D.e2.cH(D.e.p(e,"data:image/jpeg;base64,")?D.e.lt(e,"data:image/jpeg;base64,",""):D.e.lt(e,"data:image/png;base64,",""))
x=D.e.bl(e,"data:image/jpeg;base64,")?5:7
break
case 5:x=8
return B.c(A.bbd(u,1200),$async$amq)
case 8:t=h
s=D.fq.gl0().cH(t)
q.b.n(0,"src","data:image/jpeg;base64,"+s)
x=6
break
case 7:x=D.e.bl(e,"data:image/png;base64,")?9:10
break
case 9:x=A.ctI(u)!=null?11:12
break
case 11:x=13
return B.c(A.bbf(u,1000),$async$amq)
case 13:t=h
s=D.fq.gl0().cH(t)
q.b.n(0,"src","data:image/png;base64,"+s)
case 12:case 10:case 6:f.$0()
case 4:v=r.gamL()
x=1
break
case 1:return B.j(v,w)}})
return B.k($async$amq,w)},
cfa(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s,r,q
if(m==null)m=0
if(n==null)n=0
if(l==null)l=e.gcL(0)
if(k==null)k=e.gb_(0)
if(h==null)h=d.gcL(0)<e.gcL(0)?d.gcL(0):e.gcL(0)
if(g==null)g=d.gb_(0)<e.gb_(0)?d.gb_(0):e.gb_(0)
x=f===C.x1
if(!x&&d.gqF())d=d.auc(d.gpC())
w=k/g
v=l/h
u=y.p
t=J.ip(g,u)
for(s=0;s<g;++s)t[s]=n+D.d.D(s*w)
r=J.ip(h,u)
for(q=0;q<h;++q)r[q]=m+D.d.D(q*v)
if(x)A.cSO(e,d,i,j,h,g,r,t,null,C.EE)
else A.cSq(e,d,i,j,h,g,r,t,f,!1,null,C.EE)
return d},
cSO(d,e,f,g,h,i,j,k,l,m){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.e2(t,s,x)
if(x==null)x=new A.f0()
e.wS(f+u,v,x)}},
cSq(d,e,f,g,h,i,j,k,l,m,n,o){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.e2(t,s,x)
if(x==null)x=new A.f0()
A.cXL(e,f+u,v,x,l,!1,n,o)}},
cXL(a4,a5,a6,a7,a8,a9,b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
if(!a4.axL(a5,a6))return a4
if(a8===C.x1||a4.gqF())if(a4.axL(a5,a6)){a4.ng(a5,a6).iB(0,a7)
return a4}x=a7.gig()
w=a7.gi_()
v=a7.gi7()
u=a7.gt(a7)<4?1:a7.gim()
if(u===0)return a4
t=a4.ng(a5,a6)
s=t.gig()
r=t.gi_()
q=t.gi7()
p=t.gim()
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
m=D.d.b8(u,0.01,1)
n=u<0
i=n?0:1
h=D.d.b8(x/m*i,0,0.99)
i=D.d.b8(u,0.01,1)
m=n?0:1
g=D.d.b8(w/i*m,0,0.99)
m=D.d.b8(u,0.01,1)
n=n?0:1
f=D.d.b8(v/m*n,0,0.99)
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
t.sig(x*u+s*p*a3)
t.si_(w*u+r*p*a3)
t.si7(v*u+q*p*a3)
t.sim(u+p*a3)
return a4},
cXY(d,e,f,g,h,i,j){var x,w=D.d.b8(Math.min(g,h),0,d.gcL(0)-1),v=D.d.b8(Math.min(i,j),0,d.gb_(0)-1),u=D.d.b8(Math.max(g,h),0,d.gcL(0)-1),t=D.d.b8(Math.max(i,j),0,d.gb_(0)-1),s=d.a.pM(0,w,v,u-w+1,t-v+1)
for(x=s.a;s.q();)x.iB(0,f)
return d},
cFg(a2,a3,a4,a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a8<16384,a1=a4>a6?a6:a4
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
if(a0){A.WP(a2[k],a2[i],v)
g=v[0]
f=v[1]
A.WP(a2[j],a2[h],v)
e=v[0]
d=v[1]
A.WP(g,e,v)
a2[k]=v[0]
a2[j]=v[1]
A.WP(f,d,v)
a2[i]=v[0]
a2[h]=v[1]}else{A.WQ(a2[k],a2[i],v)
g=v[0]
f=v[1]
A.WQ(a2[j],a2[h],v)
e=v[0]
d=v[1]
A.WQ(g,e,v)
a2[k]=v[0]
a2[j]=v[1]
A.WQ(f,d,v)
a2[i]=v[0]
a2[h]=v[1]}}if(o){i=k+s
if(a0){A.WP(a2[k],a2[i],v)
g=v[0]
a2[i]=v[1]}else{A.WQ(a2[k],a2[i],v)
g=v[0]
a2[i]=v[1]}a2[k]=g}}if((a6&x)>>>0!==0){l=m+n
for(k=m;k<=l;k+=p){j=k+q
if(a0){A.WP(a2[k],a2[j],v)
g=v[0]
a2[j]=v[1]}else{A.WQ(a2[k],a2[j],v)
g=v[0]
a2[j]=v[1]}a2[k]=g}}w=x>>>1}},
WP(d,e,f){var x,w,v,u,t=$.pX()
t[0]=d
x=$.rl()
w=x[0]
t[0]=e
v=x[0]
u=w+(v&1)+D.c.O(v,1)
f[0]=u
f[1]=u-v},
WQ(d,e,f){var x=d-D.c.O(e,1)&65535
f[1]=x
f[0]=e+x-32768&65535},
cfh(d){var x,w,v,u,t,s,r,q,p,o,n=null
if(A.clP().OY(d))return new A.ano()
x=new A.at3(A.clC())
if(x.GK(d))return x
w=new A.b8I()
w.f=A.cB(d,!1,n,0)
w.a=new A.alU(B.a([],y.b))
if(w.aji())return w
v=new A.bD4()
if(v.GK(d))return v
u=new A.byY()
if(u.anv(A.cB(d,!1,n,0))!=null)return u
if(A.cnC(d).c===943870035)return new A.bo9()
if(A.cFf(d))return new A.b53()
if(A.ca5(A.cB(d,!1,n,0)))return new A.aft(!1)
t=new A.byJ()
s=A.cB(d,!1,n,0)
r=t.a=new A.axA(C.vO)
r.pH(0,s)
if(r.ay_())return t
q=new A.baV()
r=A.cB(d,!1,n,0)
q.a=r
r=A.cl9(r)
q.b=r
if(r!=null)return q
p=new A.bob()
if(p.nV(d)!=null)return p
o=new A.bne(B.a([],y.s))
if(o.GK(d))return o
return n},
ctI(d){var x=A.cfh(d)
return x==null?null:x.mY(0,d,null)},
d_2(a2,a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
if($.ceC==null){x=$.ceC=new Uint8Array(768)
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
a5[s]=a0-i}for(x=$.ceC,w=0;w<64;++w){x.toString
u=D.c.O(a5[w]+8,4)
a4[w]=x[384+((u&2147483647)-((u&2147483648)>>>0))]}},
cYy(d9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=null,d7="ifd0",d8=d9.r
if(d8.i(0,d7).a.a_(0,274)){x=d8.i(0,d7).gie(0)
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
r=A.hc(d6,d6,C.a_,0,C.b3,s,d6,0,3,d6,C.a_,t,!1)
r.e=A.WI(d8)
r.gvZ().i(0,d7).sie(0,d6)
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
e=n[D.c.hj(g,l)]
f=q-g
d=0
while(!0){a0=d9.d.e
a0.toString
if(!(d<a0))break
a1=e[D.c.hj(d,m)]
if(h){a0=r.a
if(a0!=null)a0.eQ(p-d,g,a1,a1,a1)}else if(i){a0=r.a
if(a0!=null)a0.eQ(p-d,f,a1,a1,a1)}else if(j){a0=r.a
if(a0!=null)a0.eQ(d,f,a1,a1,a1)}else if(k){a0=r.a
if(a0!=null)a0.eQ(g,d,a1,a1,a1)}else if(v){a0=r.a
if(a0!=null)a0.eQ(f,d,a1,a1,a1)}else if(x){a0=r.a
if(a0!=null)a0.eQ(f,p-d,a1,a1,a1)}else{a0=r.a
if(d8){if(a0!=null)a0.eQ(g,p-d,a1,a1,a1)}else if(a0!=null)a0.eQ(d,g,a1,a1,a1)}++d}++g}break
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
b1=D.c.hj(g,l)
b2=D.c.hj(g,a8)
b3=D.c.hj(g,b0)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
f=q-g
d=0
while(!0){a0=d9.d.e
a0.toString
if(!(d<a0))break
b6=D.c.hj(d,m)
b7=D.c.hj(d,a7)
b8=D.c.hj(d,a9)
a1=e[b6]<<8>>>0
b9=b4[b7]-128
c0=b5[b8]-128
a0=D.c.O(a1+359*c0+128,8)
c1=D.c.b8((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.c.O(a1-88*b9-183*c0+128,8)
c2=D.c.b8((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.c.O(a1+454*b9+128,8)
c3=D.c.b8((a0&2147483647)-((a0&2147483648)>>>0),0,255)
if(h){a0=r.a
if(a0!=null)a0.eQ(p-d,g,c1,c2,c3)}else if(i){a0=r.a
if(a0!=null)a0.eQ(p-d,f,c1,c2,c3)}else if(j){a0=r.a
if(a0!=null)a0.eQ(d,f,c1,c2,c3)}else if(k){a0=r.a
if(a0!=null)a0.eQ(g,d,c1,c2,c3)}else if(v){a0=r.a
if(a0!=null)a0.eQ(f,d,c1,c2,c3)}else if(x){a0=r.a
if(a0!=null)a0.eQ(f,p-d,c1,c2,c3)}else{a0=r.a
if(d8){if(a0!=null)a0.eQ(g,p-d,c1,c2,c3)}else if(a0!=null)a0.eQ(d,g,c1,c2,c3)}++d}++g}break
case 4:x=d9.c
if(x==null)throw B.e(A.bR("Unsupported color mode (4 components)"))
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
b1=D.c.hj(g,l)
b2=D.c.hj(g,a8)
b3=D.c.hj(g,b0)
c8=D.c.hj(g,c7)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
c9=c5[c8]
a0=q-g
d=0
while(!0){d0=d9.d.e
d0.toString
if(!(d<d0))break
b6=D.c.hj(d,m)
b7=D.c.hj(d,a7)
b8=D.c.hj(d,a9)
d1=D.c.hj(d,c6)
if(x){d2=e[b6]
d3=b4[b7]
a1=b5[b8]
d4=c9[d1]}else{a1=e[b6]
b9=b4[b7]
c0=b5[b8]
d4=c9[d1]
d0=c0-128
d2=255-D.c.b8(D.d.D(a1+1.402*d0),0,255)
d5=b9-128
d3=255-D.d.D(D.d.b8(a1-0.3441363*d5-0.71413636*d0,0,255))
a1=255-D.c.b8(D.d.D(a1+1.772*d5),0,255)}d0=D.c.O(d2*d4,8)
c1=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.c.O(d3*d4,8)
c2=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.c.O(a1*d4,8)
c3=(d0&2147483647)-((d0&2147483648)>>>0)
if(f){d0=r.a
if(d0!=null)d0.eQ(p-d,g,c1,c2,c3)}else if(h){d0=r.a
if(d0!=null)d0.eQ(p-d,a0,c1,c2,c3)}else if(i){d0=r.a
if(d0!=null)d0.eQ(d,a0,c1,c2,c3)}else if(j){d0=r.a
if(d0!=null)d0.eQ(g,d,c1,c2,c3)}else if(k){d0=r.a
if(d0!=null)d0.eQ(a0,d,c1,c2,c3)}else if(v){d0=r.a
if(d0!=null)d0.eQ(a0,p-d,c1,c2,c3)}else{d0=r.a
if(d8){if(d0!=null)d0.eQ(g,p-d,c1,c2,c3)}else if(d0!=null)d0.eQ(d,g,c1,c2,c3)}++d}++g}break
default:throw B.e(A.bR("Unsupported color mode"))}return r},
cOB(d,e,f,g,h,i){A.cOy(i,d,e,f,g,h,!0,i)},
cOC(d,e,f,g,h,i){A.cOz(i,d,e,f,g,h,!0,i)},
cOA(d,e,f,g,h,i){A.cOx(i,d,e,f,g,h,!0,i)},
Qt(d,e,f,g,h){var x,w,v
for(x=0;x<g;++x){w=J.t(d.a,d.d+x)
v=J.t(e.a,e.d+x)
J.bX(f.a,f.d+x,w+v)}},
cOy(d,e,f,g,h,i,j,k){var x,w,v=null,u=h*g,t=h+i,s=A.cB(d,!1,v,u),r=A.cB(d,!1,v,u),q=A.bY(r,v,0)
if(h===0){r.n(0,0,J.t(s.a,s.d))
A.Qt(A.bY(s,v,1),q,A.bY(r,v,1),e-1,!0)
q.d+=g
s.d+=g
r.d+=g
h=1}for(x=-g,w=e-1;h<t;){A.Qt(s,A.bY(q,v,x),r,1,!0)
A.Qt(A.bY(s,v,1),q,A.bY(r,v,1),w,!0);++h
q.d+=g
s.d+=g
r.d+=g}},
cOz(d,e,f,g,h,i,j,k){var x=null,w=h*g,v=h+i,u=A.cB(d,!1,x,w),t=A.cB(k,!1,x,w),s=A.bY(t,x,0)
if(h===0){t.n(0,0,J.t(u.a,u.d))
A.Qt(A.bY(u,x,1),s,A.bY(t,x,1),e-1,!0)
u.d+=g
t.d+=g
h=1}else s.d-=g
for(;h<v;){A.Qt(u,s,t,e,!0);++h
s.d+=g
u.d+=g
t.d+=g}},
cOx(d,e,f,g,h,i,j,k){var x,w,v,u,t,s=null,r=h*g,q=h+i,p=A.cB(d,!1,s,r),o=A.cB(k,!1,s,r),n=A.bY(o,s,0)
if(h===0){o.n(0,0,J.t(p.a,p.d))
A.Qt(A.bY(p,s,1),n,A.bY(o,s,1),e-1,!0)
n.d+=g
p.d+=g
o.d+=g
h=1}for(x=-g;h<q;){A.Qt(p,A.bY(n,s,x),o,1,!0)
for(w=1;w<e;++w){v=w-g
u=J.t(n.a,n.d+(w-1))+J.t(n.a,n.d+v)-J.t(n.a,n.d+(v-1))
if((u&4294967040)>>>0===0)t=u
else t=u<0?0:255
v=J.t(p.a,p.d+w)
J.bX(o.a,o.d+w,v+t)}++h
n.d+=g
p.d+=g
o.d+=g}},
cVt(d){var x="ifd0",w=A.Aw(d,!1,!1)
if(!d.gvZ().i(0,x).a.a_(0,274)||d.gvZ().i(0,x).gie(0)===1)return w
w.e=A.WI(d.gvZ())
w.gvZ().i(0,x).sie(0,null)
switch(d.gvZ().i(0,x).gie(0)){case 2:return A.aQ8(w)
case 3:return A.cY7(w,C.aiy)
case 4:return A.aQ8(A.aQ2(w,180))
case 5:return A.aQ8(A.aQ2(w,90))
case 6:return A.aQ2(w,90)
case 7:return A.aQ8(A.aQ2(w,-90))
case 8:return A.aQ2(w,-90)}return w},
cW9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
d.gqF()
if(d.gvZ().i(0,"ifd0").a.a_(0,274)&&d.gvZ().i(0,"ifd0").gie(0)!==1)d=A.cVt(d)
x=D.d.aa(e*(d.gb_(0)/d.gcL(0)))
if(e<=0)e=D.d.aa(x*(d.gcL(0)/d.gb_(0)))
if(e===d.gcL(0)&&x===d.gb_(0))return A.Aw(d,!1,!1)
w=new Int32Array(e)
v=d.gcL(0)/e
for(u=0;u<e;++u)w[u]=D.d.D(u*v)
t=d.gkl().length
for(s=y.g,r=g,q=0;q<t;++q){p=d.x
o=(p===$?d.x=B.a([],s):p)[q]
n=A.amL(o,x,!0,e)
m=r==null
if(!m)r.mO(n)
if(m)r=n
m=o.a
l=m==null
k=l?g:m.b
j=(k==null?0:k)/x
if((l?g:m.geA())!=null)for(i=0;i<x;++i){h=D.d.D(i*j)
for(u=0;u<e;++u){m=w[u]
l=o.a
if(l==null)m=g
else{m=l.ng(m,h)
m=D.d.D(m.gdW(m))}if(m==null)m=0
l=n.a
if(l!=null)l.m0(u,i,m)}}else for(i=0;i<x;++i){h=D.d.D(i*j)
for(u=0;u<e;++u){m=w[u]
l=o.a
m=l==null?g:l.e2(m,h,g)
n.wS(u,i,m==null?new A.f0():m)}}}r.toString
return r},
aQ2(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=D.c.al(a8,360)
a7.gqF()
if(D.c.al(a6,90)===0)switch(D.c.aW(a6,90)){case 1:return A.cUI(a7)
case 2:return A.cUG(a7)
case 3:return A.cUH(a7)
default:return A.Aw(a7,!1,!1)}x=a6*3.141592653589793/180
w=Math.cos(x)
v=Math.sin(x)
u=a7.gcL(0)
t=a7.gcL(0)
s=a7.gb_(0)
r=a7.gb_(0)
q=0.5*a7.gcL(0)
p=0.5*a7.gb_(0)
s=Math.abs(u*w)+Math.abs(s*v)
o=0.5*s
r=Math.abs(t*v)+Math.abs(r*w)
n=0.5*r
m=a7.gkl().length
for(u=y.g,l=a5,k=0;k<m;++k){j=a7.x
i=(j===$?a7.x=B.a([],u):j)[k]
t=l==null
h=t?a5:l.Uy()
if(h==null){g=D.d.D(s)
h=A.amL(a7,D.d.D(r),!0,g)}if(t)l=h
for(t=h.a,t=t.gX(t);t.q();){f=t.gK(t)
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
g=a2<(g==null?0:g)}}if(g)h.wS(e,d,i.aE6(a1,a2,C.ald))}}l.toString
return l},
cUI(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gkl(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.O)(x),++u){t=x[u]
s=v==null
r=s?k:v.Uy()
if(r==null){q=t.a
p=q==null
o=p?k:q.b
if(o==null)o=0
q=p?k:q.a
r=A.amL(t,q==null?0:q,!0,o)}if(s)v=r
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
s=s==null?k:s.e2(m,n-l,k)
r.wS(l,m,s==null?new A.f0():s);++l}++m}}v.toString
return v},
cUG(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gkl(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.O)(x),++u){t=x[u]
s=t.a
r=s==null
q=r?k:s.a
p=(q==null?0:q)-1
s=r?k:s.b
o=(s==null?0:s)-1
s=v==null
n=s?k:v.Uy()
if(n==null)n=A.Aw(t,!0,!0)
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
r=r==null?k:r.e2(p-l,s,k)
n.wS(l,m,r==null?new A.f0():r);++l}++m}}v.toString
return v},
cUH(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gkl(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.O)(x),++u){t=x[u]
s=d.a
s=s==null?k:s.a
r=(s==null?0:s)-1
s=v==null
q=s?k:v.Uy()
if(q==null){p=t.a
o=p==null
n=o?k:p.b
if(n==null)n=0
p=o?k:p.a
q=A.amL(t,p==null?0:p,!0,n)}if(s)v=q
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
p=p==null?k:p.e2(s,l,k)
q.wS(l,m,p==null?new A.f0():p);++l}++m}}v.toString
return v},
c74(d){var x
d=(d&-d)>>>0
x=d!==0?31:32
if((d&65535)!==0)x-=16
if((d&16711935)!==0)x-=8
if((d&252645135)!==0)x-=4
if((d&858993459)!==0)x-=2
return(d&1431655765)!==0?x-1:x},
d_Z(d){$.cgJ().n(0,0,d)
return $.cy0().i(0,0)},
cuG(d,e,f,g){return(D.c.b8(d,0,255)|D.c.b8(e,0,255)<<8|D.c.b8(f,0,255)<<16|D.c.b8(g,0,255)<<24)>>>0},
u2(d,e,f){var x,w,v,u,t,s=e.gt(e),r=e.gda(),q=d.geA(),p=q==null?null:q.gda()
if(p==null)p=d.gda()
x=d.gt(d)
if(s===1){w=d.gt(d)>2?d.gje():d.i(0,0)
e.n(0,0,A.aQ1(B.hn(d.i(0,0))?D.d.fw(w):w,p,r))}else if(s<=x)for(v=0;v<s;++v)e.n(0,v,A.aQ1(d.i(0,v),p,r))
else if(x===2){u=A.aQ1(d.i(0,0),p,r)
if(s===3){e.n(0,0,u)
e.n(0,1,u)
e.n(0,2,u)}else{f=A.aQ1(d.i(0,1),p,r)
e.n(0,0,u)
e.n(0,1,u)
e.n(0,2,u)
e.n(0,3,f)}}else{for(v=0;v<x;++v)e.n(0,v,A.aQ1(d.i(0,v),p,r))
t=x===1?e.i(0,0):0
for(v=x;v<s;++v)e.n(0,v,v===3?f:t)}return e},
oJ(d,e,f,g,h){var x,w,v=d.geA(),u=v==null?null:v.gda()
if(u==null)u=d.gda()
v=h==null
x=v?null:h.gda()
f=x==null?f:x
if(f==null)f=d.gda()
x=v?null:h.gt(h)
g=x==null?g:x
if(g==null)g=d.gt(d)
if(e==null)e=0
if(f===u&&g===d.gt(d)){if(v)return d.dL(0)
h.iB(0,d)
return h}switch(f.a){case 3:if(v)w=new A.wy(new Uint8Array(g))
else w=h
return A.u2(d,w,e)
case 0:return A.u2(d,v?new A.L2(g,0):h,e)
case 1:return A.u2(d,v?new A.L4(g,0):h,e)
case 2:if(v){v=g<3?1:2
w=new A.L6(g,new Uint8Array(v))}else w=h
return A.u2(d,w,e)
case 4:if(v)w=new A.L3(new Uint16Array(g))
else w=h
return A.u2(d,w,e)
case 5:if(v)w=new A.L5(new Uint32Array(g))
else w=h
return A.u2(d,w,e)
case 6:if(v)w=new A.L_(new Int8Array(g))
else w=h
return A.u2(d,w,e)
case 7:if(v)w=new A.KY(new Int16Array(g))
else w=h
return A.u2(d,w,e)
case 8:if(v)w=new A.KZ(new Int32Array(g))
else w=h
return A.u2(d,w,e)
case 9:if(v)w=new A.KV(new Uint16Array(g))
else w=h
return A.u2(d,w,e)
case 10:if(v)w=new A.KW(new Float32Array(g))
else w=h
return A.u2(d,w,e)
case 11:if(v)w=new A.KX(new Float64Array(g))
else w=h
return A.u2(d,w,e)}},
iZ(d){return 0.299*d.gaC(d)+0.587*d.gaL()+0.114*d.gaM(d)},
ctq(d,e,f,g){var x=1-g/255
return B.a([D.d.aa(255*(1-d/255)*x),D.d.aa(255*(1-e/255)*x),D.d.aa(255*(1-f/255)*x)],y.t)},
fu(d){var x,w,v
$.cgI()[0]=d
x=$.cy_()[0]
if(d===0)return x>>>16
if($.h9==null)A.hZ()
w=$.cks.cN()[x>>>23&511]
if(w!==0){v=x&8388607
return w+(v+4095+(v>>>13&1)>>>13)}return A.cFB(x)},
cFB(d){var x,w,v=d>>>16&32768,u=(d>>>23&255)-112,t=d&8388607
if(u<=0){if(u<-10)return v
t|=8388608
x=14-u
return(v|D.c.nk(t+(D.c.ex(1,x-1)-1)+(D.c.fD(t,x)&1),x))>>>0}else if(u===143)if(t===0)return v|31744
else{t=t>>>13
w=t===0?1:0
return v|t|w|31744}else{t=t+4095+(t>>>13&1)
if((t&8388608)!==0){++u
t=0}if(u>30)return v|31744
return(v|u<<10|t>>>13)>>>0}},
hZ(){var x,w,v,u,t=$.h9
if(t!=null)return t
x=new Uint32Array(65536)
$.h9=B.bjd(x.buffer,0,null)
t=new Uint16Array(512)
$.cks.b=t
for(w=0;w<256;++w){v=(w&255)-112
if(v<=0||v>=30){t[w]=0
t[(w|256)>>>0]=0}else{u=v<<10>>>0
t[w]=u
t[(w|256)>>>0]=(u|32768)>>>0}}for(w=0;w<65536;++w)x[w]=A.cFC(w)
t=$.h9
t.toString
return t},
cFC(d){var x,w=d>>>15&1,v=d>>>10&31,u=d&1023
if(v===0)if(u===0)return w<<31>>>0
else{for(;(u&1024)===0;){u=u<<1;--v}++v
u&=4294966271}else if(v===31){x=w<<31
if(u===0)return(x|2139095040)>>>0
else return(x|u<<13|2139095040)>>>0}return(w<<31|v+112<<23|u<<13)>>>0}},C,R,K,G,H,S,T,U
J=c[1]
B=c[0]
D=c[2]
L=c[233]
F=c[123]
M=c[132]
N=c[72]
O=c[165]
P=c[217]
Q=c[218]
E=c[43]
I=c[82]
A=a.updateHolder(c[12],A)
C=c[232]
R=c[230]
K=c[181]
G=c[164]
H=c[171]
S=c[134]
T=c[129]
U=c[151]
A.aez.prototype={}
A.bcd.prototype={}
A.bcc.prototype={
gt(d){var x=this.e
x===$&&B.b()
return x-(this.b-this.c)},
gNc(){var x=this.b,w=this.e
w===$&&B.b()
return x>=this.c+w},
i(d,e){return this.a[this.b+e]},
dI(d,e){var x,w,v,u=this
for(x=u.b,w=x+u.gt(0),v=u.a;x<w;++x)if(J.m(v[x],e))return x-u.c
return-1},
cZ(){return this.a[this.b++]},
ks(d){var x,w,v,u=this,t=u.c,s=u.b-t+t
if(d<0){x=u.e
x===$&&B.b()
w=x-(s-t)}else w=d
v=A.AI(u.a,u.d,w,s)
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
ht(){var x,w,v,u,t=this,s=t.gt(0),r=t.a
if(y.D.b(r)){x=t.b
w=r.length
if(x+s>w)s=w-x
return B.c3(r.buffer,r.byteOffset+x,s)}x=t.b
v=x+s
u=r.length
return new Uint8Array(B.bJ(J.aR_(r,x,v>u?u:v)))}}
A.bkr.prototype={}
A.bkq.prototype={
aS(d){var x=this
if(x.a===x.c.length)x.b9q()
x.c[x.a++]=d&255},
ZE(d,e){var x,w,v,u,t,s=this
if(e==null)e=d.length
for(;x=s.a,w=x+e,v=s.c,u=v.length,w>u;)s.a3v(w-u)
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
m_(d){return this.ZE(d,null)},
bFl(d){var x,w,v,u,t=this,s=d.c
while(!0){x=t.a
w=d.e
w===$&&B.b()
w=x+(w-(d.b-s))
v=t.c
u=v.length
if(!(w>u))break
t.a3v(w-u)}D.ac.dC(v,x,x+d.gt(0),d.a,d.b)
t.a=t.a+d.gt(0)},
hZ(d){var x=this
if(x.b===1){x.aS(d>>>24&255)
x.aS(d>>>16&255)
x.aS(d>>>8&255)
x.aS(d&255)
return}x.aS(d&255)
x.aS(d>>>8&255)
x.aS(d>>>16&255)
x.aS(d>>>24&255)},
ae1(d,e){var x=this
if(d<0)d=x.a+d
if(e==null)e=x.a
else if(e<0)e=x.a+e
return B.c3(x.c.buffer,d,e-d)},
jl(d){return this.ae1(d,null)},
a3v(d){var x=d!=null?d>32768?d:32768:32768,w=this.c,v=w.length,u=new Uint8Array((v+x)*2)
D.ac.h9(u,0,v,w)
this.c=u},
b9q(){return this.a3v(null)},
gt(d){return this.a}}
A.c4G.prototype={
Bj(d,e){var x,w,v,u,t=d.cZ(),s=d.cZ(),r=t&8
D.c.O(t,3)
if(r!==8)throw B.e(A.TF("Only DEFLATE compression supported: "+r))
if(D.c.al((t<<8>>>0)+s,31)!==0)throw B.e(A.TF("Invalid FCHECK"))
if((s>>>5&1)!==0){d.ai()
throw B.e(A.TF("FDICT Encoding not currently supported"))}x=A.amy(C.azs)
w=A.amy(C.ayM)
v=A.ccb(0,null)
w=new A.bbR(d,v,x,w)
w.b=!0
w.b4q()
u=y.L.a(B.c3(v.c.buffer,0,v.a))
d.ai()
return u}}
A.b0o.prototype={
aUV(d){var x,w,v,u,t=this
if(d>4)throw B.e(A.TF("Invalid Deflate Parameter"))
x=t.x
x===$&&B.b()
if(x!==0)t.Ra()
x=!0
if(t.c.gNc()){w=t.k3
w===$&&B.b()
if(w===0)x=d!==0&&t.e!==666}if(x){switch($.uu.cN().e){case 0:v=t.aUY(d)
break
case 1:v=t.aUW(d)
break
case 2:v=t.aUX(d)
break
default:v=-1
break}x=v===2
if(x||v===3)t.e=666
if(v===0||x)return 0
if(v===1){if(d===1){t.kY(2,3)
t.ES(256,C.rI)
t.asI()
x=t.cY
x===$&&B.b()
w=t.T
w===$&&B.b()
if(1+x+10-w<9){t.kY(2,3)
t.ES(256,C.rI)
t.asI()}t.cY=7}else{t.aqi(0,0,!1)
if(d===3){x=t.db
x===$&&B.b()
w=t.cx
u=0
for(;u<x;++u){w===$&&B.b()
w[u]=0}}}t.Ra()}}if(d!==4)return 0
return 1},
b5F(){var x,w,v=this,u=v.as
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
akY(){var x,w,v,u=this
for(x=u.p2,w=0;w<286;++w){x===$&&B.b()
x[w*2]=0}for(v=u.p3,w=0;w<30;++w){v===$&&B.b()
v[w*2]=0}for(v=u.p4,w=0;w<19;++w){v===$&&B.b()
v[w*2]=0}x===$&&B.b()
x[512]=1
u.bP=u.c9=u.ad=u.b9=0},
a3N(d,e){var x,w,v=this.to,u=v[e],t=e<<1>>>0,s=this.xr
while(!0){x=this.x1
x===$&&B.b()
if(!(t<=x))break
if(t<x&&A.cjo(d,v[t+1],v[t],s))++t
if(A.cjo(d,u,v[t],s))break
v[e]=v[t]
w=t<<1>>>0
e=t
t=w}v[e]=u},
aoi(d,e){var x,w,v,u,t,s,r,q,p,o=d[1]
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
aRc(){var x,w,v=this,u=v.p2
u===$&&B.b()
x=v.R8.b
x===$&&B.b()
v.aoi(u,x)
x=v.p3
x===$&&B.b()
u=v.RG.b
u===$&&B.b()
v.aoi(x,u)
v.rx.a0U(v)
for(u=v.p4,w=18;w>=3;--w){u===$&&B.b()
if(u[C.zv[w]*2+1]!==0)break}u=v.ad
u===$&&B.b()
v.ad=u+(3*(w+1)+5+5+4)
return w},
beL(d,e,f){var x,w,v,u=this
u.kY(d-257,5)
x=e-1
u.kY(x,5)
u.kY(f-4,4)
for(w=0;w<f;++w){v=u.p4
v===$&&B.b()
u.kY(v[C.zv[w]*2+1],3)}v=u.p2
v===$&&B.b()
u.aoR(v,d-1)
v=u.p3
v===$&&B.b()
u.aoR(v,x)},
aoR(d,e){var x,w,v,u,t,s,r,q,p,o,n=this,m=d[1]
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
n.kY(o[q]&65535,o[p]&65535)}while(--t,t!==0)}else if(m!==0){if(m!==u){q=n.p4
q===$&&B.b()
p=m*2
n.kY(q[p]&65535,q[p+1]&65535);--t}q=n.p4
q===$&&B.b()
n.kY(q[32]&65535,q[33]&65535)
n.kY(t-3,2)}else{q=n.p4
if(t<=10){q===$&&B.b()
n.kY(q[34]&65535,q[35]&65535)
n.kY(t-3,3)}else{q===$&&B.b()
n.kY(q[36]&65535,q[37]&65535)
n.kY(t-11,7)}}}if(s===0){w=r
x=138}else if(m===s){w=r
x=6}else{x=7
w=4}u=m
t=0}},
bc4(d,e,f){var x,w,v,u
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
ES(d,e){var x=d*2
this.kY(e[x]&65535,e[x+1]&65535)},
kY(d,e){var x,w=this,v=w.T
v===$&&B.b()
x=w.C
if(v>16-e){x===$&&B.b()
v=w.C=(x|D.c.ex(d,v)&65535)>>>0
w.pZ(v)
w.pZ(A.oI(v,8))
w.C=A.oI(d,16-w.T)
w.T=w.T+(e-16)}else{x===$&&B.b()
w.C=(x|D.c.ex(d,v)&65535)>>>0
w.T=v+e}},
KP(d,e){var x,w,v,u,t,s=this,r=s.f
r===$&&B.b()
x=s.bf
x===$&&B.b()
w=s.bP
w===$&&B.b()
r[x+w*2]=A.oI(d,8)
w=s.f
x=s.bf
r=s.bP
w[x+r*2+1]=d
x=s.y1
x===$&&B.b()
w[x+r]=e
s.bP=r+1
if(d===0){r=s.p2
r===$&&B.b()
x=e*2
r[x]=r[x]+1}else{r=s.c9
r===$&&B.b()
s.c9=r+1
r=s.p2
r===$&&B.b()
x=(C.JD[e]+256+1)*2
r[x]=r[x]+1
x=s.p3
x===$&&B.b()
r=A.cqH(d-1)*2
x[r]=x[r]+1}r=s.bP
if((r&8191)===0){x=s.ok
x===$&&B.b()
x=x>2}else x=!1
if(x){v=r*8
r=s.k1
r===$&&B.b()
x=s.fx
x===$&&B.b()
for(w=s.p3,u=0;u<30;++u){w===$&&B.b()
v+=w[u*2]*(5+C.tH[u])}v=A.oI(v,3)
w=s.c9
w===$&&B.b()
t=s.bP
if(w<t/2&&v<(r-x)/2)return!0
r=t}x=s.y2
x===$&&B.b()
return r===x-1},
ah7(d,e){var x,w,v,u,t,s,r=this,q=r.bP
q===$&&B.b()
if(q!==0){x=0
do{q=r.f
q===$&&B.b()
w=r.bf
w===$&&B.b()
w+=x*2
v=q[w]<<8&65280|q[w+1]&255
w=r.y1
w===$&&B.b()
u=q[w+x]&255;++x
if(v===0)r.ES(u,d)
else{t=C.JD[u]
r.ES(t+256+1,d)
s=C.OK[t]
if(s!==0)r.kY(u-C.ayV[t],s);--v
t=A.cqH(v)
r.ES(t,e)
s=C.tH[t]
if(s!==0)r.kY(v-C.ayL[t],s)}}while(x<r.bP)}r.ES(256,d)
r.cY=d[513]},
aFY(){var x,w,v,u
for(x=this.p2,w=0,v=0;w<7;){x===$&&B.b()
v+=x[w*2];++w}for(u=0;w<128;){x===$&&B.b()
u+=x[w*2];++w}for(;w<256;){x===$&&B.b()
v+=x[w*2];++w}this.y=v>A.oI(u,2)?0:1},
asI(){var x=this,w=x.T
w===$&&B.b()
if(w===16){w=x.C
w===$&&B.b()
x.pZ(w)
x.pZ(A.oI(w,8))
x.T=x.C=0}else if(w>=8){w=x.C
w===$&&B.b()
x.pZ(w)
x.C=A.oI(x.C,8)
x.T=x.T-8}},
afY(){var x=this,w=x.T
w===$&&B.b()
if(w>8){w=x.C
w===$&&B.b()
x.pZ(w)
x.pZ(A.oI(w,8))}else if(w>0){w=x.C
w===$&&B.b()
x.pZ(w)}x.T=x.C=0},
xl(d){var x,w,v,u,t,s=this,r=s.fx
r===$&&B.b()
if(r>=0)x=r
else x=-1
w=s.k1
w===$&&B.b()
r=w-r
w=s.ok
w===$&&B.b()
if(w>0){if(s.y===2)s.aFY()
s.R8.a0U(s)
s.RG.a0U(s)
v=s.aRc()
w=s.ad
w===$&&B.b()
u=A.oI(w+3+7,3)
w=s.b9
w===$&&B.b()
t=A.oI(w+3+7,3)
if(t<=u)u=t}else{t=r+5
u=t
v=0}if(r+4<=u&&x!==-1)s.aqi(x,r,d)
else if(t===u){s.kY(2+(d?1:0),3)
s.ah7(C.rI,C.Jf)}else{s.kY(4+(d?1:0),3)
r=s.R8.b
r===$&&B.b()
x=s.RG.b
x===$&&B.b()
s.beL(r+1,x+1,v+1)
x=s.p2
x===$&&B.b()
r=s.p3
r===$&&B.b()
s.ah7(x,r)}s.akY()
if(d)s.afY()
s.fx=s.k1
s.Ra()},
aUY(d){var x,w,v,u,t,s=this,r=s.r
r===$&&B.b()
x=r-5
x=65535>x?x:65535
for(r=d===0;!0;){w=s.k3
w===$&&B.b()
if(w<=1){s.a1R()
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
s.xl(!1)}w=s.k1
v=s.fx
t=s.as
t===$&&B.b()
if(w-v>=t-262)s.xl(!1)}r=d===4
s.xl(r)
return r?3:1},
aqi(d,e,f){var x,w=this
w.kY(f?1:0,3)
w.afY()
w.cY=8
w.pZ(e)
w.pZ(A.oI(e,8))
x=(~e>>>0)+65536&65535
w.pZ(x)
w.pZ(A.oI(x,8))
x=w.ay
x===$&&B.b()
w.bc4(x,d,e)},
a1R(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.c
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
D.ac.dC(w,0,x,w,x)
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
u+=t}}if(m.gNc())return
x=n.ay
x===$&&B.b()
r=n.bce(x,n.k1+n.k3,u)
x=n.k3=n.k3+r
if(x>=3){w=n.ay
v=n.k1
p=w[v]&255
n.cy=p
o=n.fr
o===$&&B.b()
o=D.c.ex(p,o)
v=w[v+1]
w=n.dy
w===$&&B.b()
n.cy=((o^v&255)&w)>>>0}}while(x<262&&!m.gNc())},
aUW(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
for(x=d===0,w=$.uu.a,v=0;!0;){u=m.k3
u===$&&B.b()
if(u<262){m.a1R()
u=m.k3
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=m.cy
u===$&&B.b()
t=m.fr
t===$&&B.b()
t=D.c.ex(u,t)
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
if(u!==2)m.fy=m.alN(v)}u=m.fy
u===$&&B.b()
t=m.k1
if(u>=3){t===$&&B.b()
o=m.KP(t-m.k2,u-3)
u=m.k3
t=m.fy
u-=t
m.k3=u
s=$.uu.b
if(s===$.uu)B.Z(B.uV(w))
if(t<=s.b&&u>=3){u=m.fy=t-1
do{t=m.k1=m.k1+1
s=m.cy
s===$&&B.b()
r=m.fr
r===$&&B.b()
r=D.c.ex(s,r)
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
r=D.c.ex(s,r)
u=t[u+1]
t=m.dy
t===$&&B.b()
m.cy=((r^u&255)&t)>>>0}}else{u=m.ay
u===$&&B.b()
t===$&&B.b()
o=m.KP(0,u[t]&255)
m.k3=m.k3-1
m.k1=m.k1+1}if(o)m.xl(!1)}x=d===4
m.xl(x)
return x?3:1},
aUX(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
for(x=d===0,w=$.uu.a,v=0;!0;){u=l.k3
u===$&&B.b()
if(u<262){l.a1R()
u=l.k3
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=l.cy
u===$&&B.b()
t=l.fr
t===$&&B.b()
t=D.c.ex(u,t)
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
if(v!==0){s=$.uu.b
if(s===$.uu)B.Z(B.uV(w))
if(u<s.b){u=l.k1
u===$&&B.b()
t=l.as
t===$&&B.b()
t=(u-v&65535)<=t-262
u=t}else u=t}else u=t
t=2
if(u){u=l.p1
u===$&&B.b()
if(u!==2){u=l.alN(v)
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
n=l.KP(u-1-l.go,t-3)
t=l.k3
u=l.k4
l.k3=t-(u-1)
u=l.k4=u-2
do{t=l.k1=l.k1+1
if(t<=o){s=l.cy
s===$&&B.b()
r=l.fr
r===$&&B.b()
r=D.c.ex(s,r)
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
if(n)l.xl(!1)}else{u=l.id
u===$&&B.b()
if(u!==0){u=l.ay
u===$&&B.b()
t=l.k1
t===$&&B.b()
if(l.KP(0,u[t-1]&255))l.xl(!1)
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
l.KP(0,x[w-1]&255)
l.id=0}x=d===4
l.xl(x)
return x?3:1},
alN(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=$.uu.cN().d,h=j.k1
h===$&&B.b()
x=j.k4
x===$&&B.b()
w=j.as
w===$&&B.b()
w-=262
v=h>w?h-w:0
u=$.uu.cN().c
w=j.ax
w===$&&B.b()
t=j.k1+258
s=j.ay
s===$&&B.b()
r=h+x
q=s[r-1]
p=s[r]
if(j.k4>=$.uu.cN().a)i=i>>>2
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
bce(d,e,f){var x,w,v,u,t=this
if(f===0||t.c.gNc())return 0
x=t.c.ks(f)
w=x.gt(0)
if(w===0)return 0
v=x.ht()
u=v.length
if(w>u)w=u
D.ac.h9(d,e,e+w,v)
t.b+=w
t.a=A.w4(v,t.a)
return w},
Ra(){var x,w=this,v=w.x
v===$&&B.b()
x=w.f
x===$&&B.b()
w.d.ZE(x,v)
x=w.w
x===$&&B.b()
w.w=x+v
v=w.x-v
w.x=v
if(v===0)w.w=0},
aY_(d){switch(d){case 0:return new A.ra(0,0,0,0,0)
case 1:return new A.ra(4,4,8,4,1)
case 2:return new A.ra(4,5,16,8,1)
case 3:return new A.ra(4,6,32,32,1)
case 4:return new A.ra(4,4,16,16,2)
case 5:return new A.ra(8,16,32,32,2)
case 6:return new A.ra(8,16,128,128,2)
case 7:return new A.ra(8,32,128,256,2)
case 8:return new A.ra(32,128,258,1024,2)
case 9:return new A.ra(32,258,258,4096,2)}throw B.e(A.TF("Invalid Deflate parameter"))}}
A.ra.prototype={}
A.bPC.prototype={
aXI(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a
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
if(q){m=d.b9
m===$&&B.b()
d.b9=m+i*(w[l]+j)}}if(o===0)return
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
a0U(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.a
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
if(r){o=d.b9
o===$&&B.b()
d.b9=o-w[q+1]}}k.b=s
for(t=D.c.aW(q,2);t>=1;--t)d.a3N(j,t)
p=v
do{t=x[1]
x[1]=x[d.x1--]
d.a3N(j,1)
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
d.a3N(j,1)
if(d.x1>=2){p=l
continue}else break}while(!0)
x[--d.x2]=x[1]
k.aXI(d)
A.cPZ(j,s,d.ry)}}
A.c_4.prototype={}
A.baE.prototype={
aOK(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=d.length
for(x=0;x<l;++x){w=d[x]
if(w>m.b)m.b=w
if(w<m.c)m.c=w}v=D.c.ex(1,m.b)
m.a=new Uint32Array(v)
for(u=1,t=0,s=2;u<=m.b;){for(w=u<<16,x=0;x<l;++x)if(J.m(d[x],u)){for(r=t,q=0,p=0;p<u;++p){q=(q<<1|r&1)>>>0
r=r>>>1}for(o=m.a,n=(w|x)>>>0,p=q;p<v;p+=s)o[p]=n;++t}++u
t=t<<1>>>0
s=s<<1>>>0}}}
A.bbR.prototype={
b4q(){var x,w,v,u,t=this
t.e=t.d=0
if(!t.b)return
x=t.a
x===$&&B.b()
w=x.c
while(!0){v=x.b
u=x.e
u===$&&B.b()
if(!(v<w+u))break
if(!t.b9Q())break}},
b9Q(){var x,w=this,v=w.a
v===$&&B.b()
if(v.gNc())return!1
x=w.q_(3)
switch(D.c.O(x,1)){case 0:if(w.ba9()===-1)return!1
break
case 1:if(w.ahC(w.r,w.w)===-1)return!1
break
case 2:if(w.b9U()===-1)return!1
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
t.d=(t.d|D.c.ex(v,w))>>>0
t.e=w+8}x=t.d
v=D.c.ee(1,d)
t.d=D.c.hj(x,d)
t.e=w-d
return(x&v-1)>>>0},
a3V(d){var x,w,v,u,t,s,r,q=this,p=d.a
p===$&&B.b()
x=d.b
for(w=q.a;v=q.e,v<x;){w===$&&B.b()
u=w.b
t=w.e
t===$&&B.b()
if(u>=w.c+t)return-1
w.b=u+1
u=w.a[u]
q.d=(q.d|D.c.ex(u,v))>>>0
q.e=v+8}w=q.d
s=p[(w&D.c.ex(1,x)-1)>>>0]
r=s>>>16
q.d=D.c.hj(w,r)
q.e=v-r
return s&65535},
ba9(){var x,w,v=this
v.e=v.d=0
x=v.q_(16)
w=v.q_(16)
if(x!==0&&x!==(w^65535)>>>0)return-1
w=v.a
w===$&&B.b()
if(x>w.gt(0))return-1
v.c.bFl(w.ks(x))
return 0},
b9U(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.q_(5)
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
v[C.zv[u]]=t}s=A.amy(v)
r=m+x
q=new Uint8Array(r)
p=B.c3(q.buffer,0,m)
o=B.c3(q.buffer,m,x)
if(n.aU3(r,s,q)===-1)return-1
return n.ahC(A.amy(p),A.amy(o))},
ahC(d,e){var x,w,v,u,t,s,r,q=this
for(x=q.c;!0;){w=q.a3V(d)
if(w<0||w>285)return-1
if(w===256)break
if(w<256){x.aS(w&255)
continue}v=w-257
u=C.ayW[v]+q.q_(C.ass[v])
t=q.a3V(e)
if(t<0||t>29)return-1
s=C.awo[t]+q.q_(C.tH[t])
for(r=-s;u>s;){x.m_(x.jl(r))
u-=s}if(u===s)x.m_(x.jl(r))
else x.m_(x.ae1(r,u-s))}for(x=q.a;r=q.e,r>=8;){q.e=r-8
x===$&&B.b()
if(--x.b<0)x.b=0}return 0},
aU3(d,e,f){var x,w,v,u,t,s,r,q=this
for(x=0,w=0;w<d;){v=q.a3V(e)
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
A.bDQ.prototype={}
A.bDP.prototype={}
A.bDR.prototype={
avI(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=A.ccb(1,32768)
m.aS(120)
for(x=0;w=(x|0)>>>0,(30720+w)%31!==0;)++x
m.aS(w)
v=A.cYs(d)
u=A.AI(d,1,null,0)
w=A.ce5()
t=A.ce5()
s=A.ce5()
r=new Uint16Array(16)
q=new Uint32Array(573)
p=new Uint8Array(573)
o=A.ccb(0,32768)
r=new A.b0o(u,o,w,t,s,r,q,p)
if(e==null||e===-1)e=6
q=!0
q=e>9
if(q)B.Z(A.TF("Invalid Deflate parameter"))
$.uu.b=r.aY_(e)
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
r.bf=16384
r.y1=49152
r.ok=e
r.w=r.x=r.p1=0
r.e=113
r.a=0
w.a=q
w.c=$.cxL()
t.a=p
t.c=$.cxK()
s.a=n
s.c=$.cxJ()
r.T=r.C=0
r.cY=8
r.akY()
r.b5F()
r.aUV(4)
r.Ra()
m.m_(y.L.a(B.c3(o.c.buffer,0,o.a)))
m.hZ(v)
w=B.c3(m.c.buffer,0,m.a)
return w},
jr(d){return this.avI(d,null)}}
A.Ap.prototype={
M(){return new A.a7y(B.a([],y.s))}}
A.a7y.prototype={
W(){var x,w=this
w.ao()
x=w.a.c
if(x!=null)w.e=x.i(0,"content")
x=new E.atI()
x.afg()
w.as=x
x.NK(new A.bPe(w))
if(w.e==null)w.K8()},
K8(){var x=0,w=B.l(y.H),v=1,u,t=this,s,r,q
var $async$K8=B.h(function(d,e){if(d===1){u=e
x=v}while(true)switch(x){case 0:t.E(new A.bPb(t))
v=3
s=t.a.c
s=s==null?null:s.i(0,"load").$0()
x=6
return B.c(y._.b(s)?s:B.cz(s,y.z),$async$K8)
case 6:s=t.e=e
x=s!=null?7:8
break
case 7:x=9
return B.c(t.rh(s),$async$K8)
case 9:case 8:v=1
x=5
break
case 3:v=2
q=u
x=5
break
case 2:x=1
break
case 5:t.E(new A.bPc(t))
return B.j(null,w)
case 1:return B.i(u,w)}})
return B.k($async$K8,w)},
m(){var x=this.as
x===$&&B.b()
x.m()
this.ak()},
A(d){var x,w,v,u=this,t=null,s=y.E,r=B.a([],s)
if(!u.w&&!u.x){x=u.as
x===$&&B.b()
r.push(new B.cX(D.aN,t,t,new B.dj(new B.aa(0,820,0,1/0),E.ckZ(x,""),t),t))}if(u.r)r.push(B.aE(t,D.dA,D.f,D.am,t,t,t,t,t,t,t,t,t))
if(u.x){x=B.a([],s)
if(u.y==null)D.b.H(x,B.a([G.br(C.b0W,t)],s))
else D.b.H(x,B.a([B.aE(t,B.aZ(B.a([G.br(C.b1j,t),P.eF,N.clY(t,t,u.y),L.j2,B.a6(""+u.z+" / "+u.Q.length,t,t,t,t,t,t,t,C.a2E,t,t,t,t,t)],s),D.i,D.j,D.a4,t,D.u),D.f,D.p,t,t,t,t,t,K.ca,t,t,t)],s))
r.push(B.aE(t,B.cp(new B.ag(K.ca,B.aZ(x,D.i,D.j,D.a4,t,D.u),t),t,t),D.f,D.am,t,t,t,t,t,t,t,t,t))}r=B.db(D.ag,r,D.B,D.aa,t)
if(!u.w&&!u.x){x=B.G("Reset",t)
x=E.Uc(u.w?t:new A.bPd(u),x)
w=B.G("Storno",t)
w=E.Uc(u.w?t:u.gbn2(),w)
v=B.G("Save",t)
s=B.aE(t,O.eB(U.xg(B.ba(B.a([x,w,E.Uc(u.w?t:u.gaEA(),v)],s),D.i,D.j,D.k,t),t),t,D.w,t,t,t,D.ab),D.f,D.ic,t,t,t,t,t,t,t,t,17976931348623157e292)}else s=t
return B.lu(!0,H.fK(t,D.p,r,s,t,t,!0),!0,D.Y,!0,!0)},
wJ(){var x=0,w=B.l(y.H),v=this,u,t,s,r,q,p
var $async$wJ=B.h(function(d,e){if(d===1)return B.i(e,w)
while(true)switch(x){case 0:r=v.as
r===$&&B.b()
q=E
p=E
x=2
return B.c(r.If(),$async$wJ)
case 2:u=q.cl_(p.cl0(e))
v.E(new A.bPh(v))
r=y.z
x=3
return B.c(B.i_(D.L,null,r),$async$wJ)
case 3:t=A.cGE(u)
v.Q=t
x=t.length!==0?4:5
break
case 4:t=v.c
t.toString
x=8
return B.c(S.iy(null,null,!1,null,new A.bPi(),t,null,!0,!0,r),$async$wJ)
case 8:x=e?6:7
break
case 6:v.E(new A.bPj(v))
x=9
return B.c(B.i_(D.L,null,r),$async$wJ)
case 9:r=v.Q,t=r.length,s=0
case 10:if(!(s<r.length)){x=12
break}x=13
return B.c(A.amq(u,r[s],new A.bPk(v)),$async$wJ)
case 13:u=e
case 11:r.length===t||(0,B.O)(r),++s
x=10
break
case 12:case 7:case 5:v.E(new A.bPl(v))
r=v.c
r.toString
H.fL(r,!1).f.tp(u)
return B.j(null,w)}})
return B.k($async$wJ,w)},
a6v(){var x=0,w=B.l(y.H),v=this,u
var $async$a6v=B.h(function(d,e){if(d===1)return B.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
H.fL(u,!1).f.tp(null)
return B.j(null,w)}})
return B.k($async$a6v,w)},
rh(d){return this.aGc(d)},
aGc(d){var x=0,w=B.l(y.H),v=this,u
var $async$rh=B.h(function(e,f){if(e===1)return B.i(f,w)
while(true)switch(x){case 0:u=v.as
u===$&&B.b()
x=2
return B.c(u.It(d),$async$rh)
case 2:return B.j(null,w)}})
return B.k($async$rh,w)}}
A.aW0.prototype={
J(){return"Channel."+this.b}}
A.h6.prototype={
q(){var x=this.b
return++this.a<x.gt(x)},
gK(d){return this.b.i(0,this.a)},
$ibi:1}
A.KV.prototype={
dL(d){return new A.KV(new Uint16Array(B.bJ(this.a)))},
gda(){return C.h7},
gt(d){return this.a.length},
geA(){return null},
i(d,e){var x,w=this.a
if(e<w.length){w=w[e]
x=$.h9
w=(x!=null?x:A.hZ())[w]}else w=0
return w},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=A.fu(f)},
gdW(d){return this.gaC(0)},
gaC(d){var x,w=this.a
if(!D.iM.gS(w)){w=w[0]
x=$.h9
w=(x!=null?x:A.hZ())[w]}else w=0
return w},
gaL(){var x,w=this.a
if(w.length>1){w=w[1]
x=$.h9
w=(x!=null?x:A.hZ())[w]}else w=0
return w},
gaM(d){var x,w=this.a
if(w.length>2){w=w[2]
x=$.h9
w=(x!=null?x:A.hZ())[w]}else w=0
return w},
gaP(d){var x,w=this.a
if(w.length>3){w=w[3]
x=$.h9
w=(x!=null?x:A.hZ())[w]}else w=0
return w},
gje(){return A.iZ(this)},
iB(d,e){var x,w=e.gaC(e),v=this.a
if(!D.iM.gS(v))v[0]=A.fu(w)
w=e.gaL()
x=v.length
if(x>1)v[1]=A.fu(w)
w=e.gaM(e)
if(x>2)v[2]=A.fu(w)
w=e.gaP(e)
if(x>3)v[3]=A.fu(w)},
gX(d){return new A.h6(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.aD(B.H(this,!0,B.r(this).h("u.E")))},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
$idB:1}
A.KW.prototype={
dL(d){return new A.KW(new Float32Array(B.bJ(this.a)))},
gda(){return C.im},
gt(d){return this.a.length},
geA(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=f},
gdW(d){var x=this.a
return!D.AI.gS(x)?x[0]:0},
gaC(d){var x=this.a
return!D.AI.gS(x)?x[0]:0},
gaL(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:1},
gje(){return A.iZ(this)},
iB(d,e){var x,w=e.gaC(e),v=this.a
if(!D.AI.gS(v))v[0]=w
w=e.gaL()
x=v.length
if(x>1)v[1]=w
w=e.gaM(e)
if(x>2)v[2]=w
w=e.gaP(e)
if(x>3)v[3]=w},
gX(d){return new A.h6(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.aD(B.H(this,!0,B.r(this).h("u.E")))},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
$idB:1}
A.KX.prototype={
dL(d){return new A.KX(new Float64Array(B.bJ(this.a)))},
gda(){return C.jQ},
gt(d){return this.a.length},
geA(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=f},
gdW(d){var x=this.a
return!D.AJ.gS(x)?x[0]:0},
gaC(d){var x=this.a
return!D.AJ.gS(x)?x[0]:0},
gaL(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:1},
gje(){return A.iZ(this)},
iB(d,e){var x,w=e.gaC(e),v=this.a
if(!D.AJ.gS(v))v[0]=w
w=e.gaL()
x=v.length
if(x>1)v[1]=w
w=e.gaM(e)
if(x>2)v[2]=w
w=e.gaP(e)
if(x>3)v[3]=w},
gX(d){return new A.h6(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.aD(B.H(this,!0,B.r(this).h("u.E")))},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
$idB:1}
A.KY.prototype={
dL(d){return new A.KY(new Int16Array(B.bJ(this.a)))},
gda(){return C.jS},
gt(d){return this.a.length},
geA(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=D.d.D(f)},
gdW(d){var x=this.a
return!D.AK.gS(x)?x[0]:0},
gaC(d){var x=this.a
return!D.AK.gS(x)?x[0]:0},
gaL(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:0},
gje(){return A.iZ(this)},
iB(d,e){var x,w=e.gaC(e),v=this.a
if(!D.AK.gS(v))v[0]=D.d.D(w)
w=e.gaL()
x=v.length
if(x>1)v[1]=D.d.D(w)
w=e.gaM(e)
if(x>2)v[2]=D.d.D(w)
w=e.gaP(e)
if(x>3)v[3]=D.d.D(w)},
gX(d){return new A.h6(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.aD(B.H(this,!0,B.r(this).h("u.E")))},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
$idB:1}
A.KZ.prototype={
dL(d){return new A.KZ(new Int32Array(B.bJ(this.a)))},
gda(){return C.jT},
gt(d){return this.a.length},
geA(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=D.d.D(f)},
gdW(d){var x=this.a
return!D.fa.gS(x)?x[0]:0},
gaC(d){var x=this.a
return!D.fa.gS(x)?x[0]:0},
gaL(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:0},
gje(){return A.iZ(this)},
iB(d,e){var x,w=e.gaC(e),v=this.a
if(!D.fa.gS(v))v[0]=B.b8(w)
w=e.gaL()
x=v.length
if(x>1)v[1]=D.d.D(w)
w=e.gaM(e)
if(x>2)v[2]=D.d.D(w)
w=e.gaP(e)
if(x>3)v[3]=D.d.D(w)},
gX(d){return new A.h6(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.aD(B.H(this,!0,B.r(this).h("u.E")))},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
$idB:1}
A.L_.prototype={
dL(d){return new A.L_(new Int8Array(B.bJ(this.a)))},
gda(){return C.jR},
gt(d){return this.a.length},
geA(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=D.d.D(f)},
gdW(d){var x=this.a
return!D.AL.gS(x)?x[0]:0},
gaC(d){var x=this.a
return!D.AL.gS(x)?x[0]:0},
gaL(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:0},
gje(){return A.iZ(this)},
iB(d,e){var x,w=e.gaC(e),v=this.a
if(!D.AL.gS(v))v[0]=D.d.D(w)
w=e.gaL()
x=v.length
if(x>1)v[1]=D.d.D(w)
w=e.gaM(e)
if(x>2)v[2]=D.d.D(w)
w=e.gaP(e)
if(x>3)v[3]=D.d.D(w)},
gX(d){return new A.h6(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.aD(B.H(this,!0,B.r(this).h("u.E")))},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
$idB:1}
A.L2.prototype={
dL(d){var x=this.b
x===$&&B.b()
return new A.L2(this.a,x)},
gda(){return C.eU},
geA(){return null},
DU(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.fD(x,7-d)&1}else x=0
return x},
Jf(d,e){var x
if(d>=this.a)return
d=7-d
x=this.b
x===$&&B.b()
this.b=e!==0?(x|D.c.ex(1,d))>>>0:(x&~(D.c.ex(1,d)&255))>>>0},
i(d,e){return this.DU(e)},
n(d,e,f){return this.Jf(e,f)},
gdW(d){return this.DU(0)},
gaC(d){return this.DU(0)},
gaL(){return this.DU(1)},
gaM(d){return this.DU(2)},
gaP(d){return this.DU(3)},
gje(){return A.iZ(this)},
iB(d,e){this.i1(e.gaC(e),e.gaL(),e.gaM(e),e.gaP(e))},
i1(d,e,f,g){var x=this
x.Jf(0,d)
x.Jf(1,e)
x.Jf(2,f)
x.Jf(3,g)},
gX(d){return new A.h6(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a&&e.gv(e)===B.aD(B.H(this,!0,B.r(this).h("u.E")))},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
$idB:1,
gt(d){return this.a}}
A.L3.prototype={
dL(d){return new A.L3(new Uint16Array(B.bJ(this.a)))},
gda(){return C.bW},
gt(d){return this.a.length},
geA(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=D.d.D(f)},
gdW(d){var x=this.a
return!D.iM.gS(x)?x[0]:0},
gaC(d){var x=this.a
return!D.iM.gS(x)?x[0]:0},
gaL(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:0},
gje(){return A.iZ(this)},
iB(d,e){var x,w=e.gaC(e),v=this.a
if(!D.iM.gS(v))v[0]=D.d.D(w)
w=e.gaL()
x=v.length
if(x>1)v[1]=D.d.D(w)
w=e.gaM(e)
if(x>2)v[2]=D.d.D(w)
w=e.gaP(e)
if(x>3)v[3]=D.d.D(w)},
gX(d){return new A.h6(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.aD(B.H(this,!0,B.r(this).h("u.E")))},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
$idB:1}
A.L4.prototype={
dL(d){var x=this.b
x===$&&B.b()
return new A.L4(this.a,x)},
gda(){return C.fx},
geA(){return null},
DV(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.fD(x,6-(d<<1>>>0))&3}else x=0
return x},
Jg(d,e){var x,w,v
if(d>=this.a)return
x=C.apS[d]
w=D.d.D(e)
v=this.b
v===$&&B.b()
this.b=(v&x|D.c.ex(w&3,6-(d<<1>>>0)))>>>0},
i(d,e){return this.DV(e)},
n(d,e,f){return this.Jg(e,f)},
gdW(d){return this.DV(0)},
gaC(d){return this.DV(0)},
gaL(){return this.DV(1)},
gaM(d){return this.DV(2)},
gaP(d){return this.DV(3)},
gje(){return A.iZ(this)},
iB(d,e){this.i1(e.gaC(e),e.gaL(),e.gaM(e),e.gaP(e))},
i1(d,e,f,g){var x=this
x.Jg(0,d)
x.Jg(1,e)
x.Jg(2,f)
x.Jg(3,g)},
gX(d){return new A.h6(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a&&e.gv(e)===B.aD(B.H(this,!0,B.r(this).h("u.E")))},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
$idB:1,
gt(d){return this.a}}
A.L5.prototype={
dL(d){return new A.L5(new Uint32Array(B.bJ(this.a)))},
gda(){return C.io},
gt(d){return this.a.length},
geA(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=D.d.D(f)},
gdW(d){var x=this.a
return!D.ct.gS(x)?x[0]:0},
gaC(d){var x=this.a
return!D.ct.gS(x)?x[0]:0},
gaL(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:0},
gje(){return A.iZ(this)},
iB(d,e){var x,w=e.gaC(e),v=this.a
if(!D.ct.gS(v))v[0]=D.d.D(w)
w=e.gaL()
x=v.length
if(x>1)v[1]=D.d.D(w)
w=e.gaM(e)
if(x>2)v[2]=D.d.D(w)
w=e.gaP(e)
if(x>3)v[3]=D.d.D(w)},
gX(d){return new A.h6(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.aD(B.H(this,!0,B.r(this).h("u.E")))},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
$idB:1}
A.L6.prototype={
dL(d){return new A.L6(this.a,new Uint8Array(B.bJ(this.b)))},
gda(){return C.fy},
geA(){return null},
DW(d){var x
if(d<0||d>=this.a)x=0
else{x=this.b
x=d<2?D.c.fD(x[0],4-(d<<2>>>0))&15:D.c.fD(x[1],4-((d&1)<<2))&15}return x},
Jh(d,e){var x,w,v
if(d>=this.a)return
x=D.c.b8(D.d.D(e),0,15)
if(d>1){d&=1
w=1}else w=0
if(d===0){v=this.b
v[w]=(v[w]&15|x<<4)>>>0}else if(d===1){v=this.b
v[w]=(v[w]&240|x)>>>0}},
i(d,e){return this.DW(e)},
n(d,e,f){return this.Jh(e,f)},
gdW(d){return this.DW(0)},
gaC(d){return this.DW(0)},
gaL(){return this.DW(1)},
gaM(d){return this.DW(2)},
gaP(d){return this.DW(3)},
gje(){return A.iZ(this)},
iB(d,e){this.i1(e.gaC(e),e.gaL(),e.gaM(e),e.gaP(e))},
i1(d,e,f,g){var x=this
x.Jh(0,d)
x.Jh(1,e)
x.Jh(2,f)
x.Jh(3,g)},
gX(d){return new A.h6(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a&&e.gv(e)===B.aD(B.H(this,!0,B.r(this).h("u.E")))},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
$idB:1,
gt(d){return this.a}}
A.wy.prototype={
aOw(d,e,f,g){var x=this.a
x[0]=d
x[1]=e
x[2]=f
x[3]=g},
dL(d){return new A.wy(new Uint8Array(B.bJ(this.a)))},
gda(){return C.a_},
gt(d){return this.a.length},
geA(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
n(d,e,f){var x=this.a
if(e<x.length)x[e]=D.d.D(f)},
gdW(d){var x=this.a
return!D.ac.gS(x)?x[0]:0},
gaC(d){var x=this.a
return!D.ac.gS(x)?x[0]:0},
gaL(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaP(d){var x=this.a
return x.length>3?x[3]:255},
gje(){return A.iZ(this)},
iB(d,e){var x,w=e.gaC(e),v=this.a
if(!D.ac.gS(v))v[0]=D.d.D(w)
w=e.gaL()
x=v.length
if(x>1)v[1]=D.d.D(w)
w=e.gaM(e)
if(x>2)v[2]=D.d.D(w)
w=e.gaP(e)
if(x>3)v[3]=D.d.D(w)},
gX(d){return new A.h6(this)},
l(d,e){if(e==null)return!1
return y.G.b(e)&&e.gt(e)===this.a.length&&e.gv(e)===B.aD(B.H(this,!0,B.r(this).h("u.E")))},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
$idB:1}
A.agn.prototype={}
A.L0.prototype={}
A.mW.prototype={
J(){return"Format."+this.b}}
A.afp.prototype={
J(){return"BlendMode."+this.b}}
A.M9.prototype={
Pn(d){var x=$.c9x()
if(!x.a_(0,d))return"<unknown>"
return x.i(0,d).a},
k(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(x=j.a,w=B.fH(x,x.r,B.r(x).c),v=y.p,u=y.r,t=y.N,s=y.P,r="";w.q();){q=w.d
r+=q+"\n"
p=x.i(0,q)
for(q=p.a,o=new B.iI(q,q.r,B.r(q).h("iI<1>")),o.c=q.e;o.q();){q=o.d
n=p.i(0,q)
r=n==null?r+("\t"+j.Pn(q)+"\n"):r+("\t"+j.Pn(q)+": "+n.k(0)+"\n")}for(q=p.b.a,o=new B.iI(q,q.r,B.r(q).h("iI<1>")),o.c=q.e;o.q();){m=o.d
r+=m+"\n"
if(!q.a_(0,m))q.n(0,m,new A.p8(B.D(v,u),new A.rS(B.D(t,s))))
l=q.i(0,m)
for(m=l.a,k=new B.iI(m,m.r,B.r(m).h("iI<1>")),k.c=m.e;k.q();){m=k.d
n=l.i(0,m)
r=n==null?r+("\t"+j.Pn(m)+"\n"):r+("\t"+j.Pn(m)+": "+n.k(0)+"\n")}}}return r.charCodeAt(0)==0?r:r},
j3(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0="exif",a1="interop",a2=a4.b
a4.b=!0
a4.kv(19789)
a4.kv(42)
a4.hZ(8)
x=d.a
if(x.i(0,"ifd0")==null)x.n(0,"ifd0",new A.p8(B.D(y.p,y.r),new A.rS(B.D(y.N,y.P))))
w=y.N
v=y.p
u=B.D(w,v)
for(t=B.r(x),s=t.h("bH<1>"),t=B.fH(x,x.r,t.c),r=y.r,q=y.P,p=8;t.q();){o=t.d
n=x.i(0,o)
n.toString
u.n(0,o,p)
o=n.b.a
if(o.a_(0,a0)){m=new Uint32Array(1)
m[0]=0
n.n(0,34665,new A.qk(m))}else n.a.I(0,34665)
if(o.a_(0,a1)){m=new Uint32Array(1)
m[0]=0
n.n(0,40965,new A.qk(m))}else n.a.I(0,40965)
if(o.a_(0,"gps")){m=new Uint32Array(1)
m[0]=0
n.n(0,34853,new A.qk(m))}else n.a.I(0,34853)
n=n.a
p+=2+12*J.b0(n.gaE(0).a)+4
for(n=n.gaE(0),m=B.r(n),n=new B.be(J.al(n.a),n.b,m.h("be<1,2>")),m=m.y[1];n.q();){l=n.a
if(l==null)l=m.a(l)
k=C.iz[l.ghu(l).a]*l.gt(l)
if(k>4)p+=k}for(n=new B.iI(o,o.r,B.r(o).h("iI<1>")),n.c=o.e;n.q();){m=n.d
if(!o.a_(0,m))o.n(0,m,new A.p8(B.D(v,r),new A.rS(B.D(w,q))))
l=o.i(0,m)
l.toString
u.n(0,m,p)
l=l.a
j=2+12*J.b0(l.gaE(0).a)
for(m=l.gaE(0),l=B.r(m),m=new B.be(J.al(m.a),m.b,l.h("be<1,2>")),l=l.y[1];m.q();){i=m.a
if(i==null)i=l.a(i)
k=C.iz[i.ghu(i).a]*i.gt(i)
if(k>4)j+=k}p+=j}}h=x.a
for(t=h-1,g=0;g<h;++g){f=new B.bH(x,s).dA(0,g)
o=x.gaE(0)
e=o.b.$1(J.ro(o.a,g))
o=e.b.a
if(o.a_(0,a0)){n=e.i(0,34665)
n.toString
m=u.i(0,a0)
m.toString
n.v9(m)}if(o.a_(0,a1)){n=e.i(0,40965)
n.toString
m=u.i(0,a1)
m.toString
n.v9(m)}if(o.a_(0,"gps")){n=e.i(0,34853)
n.toString
m=u.i(0,"gps")
m.toString
n.v9(m)}n=u.i(0,f)
n.toString
d.arP(a4,e,n+2+12*J.b0(e.a.gaE(0).a)+4)
if(g===t)a4.hZ(0)
else{n=u.i(0,new B.bH(x,s).dA(0,g+1))
n.toString
a4.hZ(n)}d.arQ(a4,e)
for(n=new B.iI(o,o.r,B.r(o).h("iI<1>")),n.c=o.e;n.q();){m=n.d
if(!o.a_(0,m))o.n(0,m,new A.p8(B.D(v,r),new A.rS(B.D(w,q))))
l=o.i(0,m)
l.toString
m=u.i(0,m)
m.toString
d.arP(a4,l,m+2+12*J.b0(l.a.gaE(0).a))
d.arQ(a4,l)}}a4.b=a2},
arP(d,e,f){var x,w,v,u,t,s,r=e.a
d.kv(r.a)
for(r=B.fH(r,r.r,B.r(r).c);r.q();){x=r.d
w=e.i(0,x)
w.toString
v=x===273
u=v&&w.ghu(w)===C.h9?C.cp:w.ghu(w)
t=v&&w.ghu(w)===C.h9?1:w.gt(w)
d.kv(x)
d.kv(u.a)
d.hZ(t)
s=C.iz[w.ghu(w).a]*w.gt(w)
if(s<=4){w.j3(0,d)
for(;s<4;){d.aS(0);++s}}else{d.hZ(f)
f+=s}}return f},
arQ(d,e){var x,w,v
for(x=e.a.gaE(0),w=B.r(x),x=new B.be(J.al(x.a),x.b,w.h("be<1,2>")),w=w.y[1];x.q();){v=x.a
if(v==null)v=w.a(v)
if(C.iz[v.ghu(v).a]*v.gt(v)>4)v.j3(0,d)}},
pH(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a6.e
a6.e=!0
x=a6.d
w=a6.bJ()
if(w===18761){a6.e=!1
if(a6.bJ()!==42){a6.e=a4
return!1}}else if(w===19789){a6.e=!0
if(a6.bJ()!==42){a6.e=a4
return!1}}else return!1
v=a6.ai()
for(u=this.a,t=y.bg,s=y.p,r=y.r,q=y.N,p=y.P,o=0;v>0;v=f){a6.d=x+v
n=new A.p8(B.D(s,r),new A.rS(B.D(q,p)))
m=a6.bJ()
l=B.a(new Array(m),t)
for(k=0;k<m;++k)l[k]=this.anu(a6,x)
for(j=l.length,i=0;i<l.length;l.length===j||(0,B.O)(l),++i){h=l[i]
g=h.b
if(g!=null)n.n(0,h.a,g)}u.n(0,"ifd"+o,n);++o
f=a6.ai()
if(f===v)break}for(u=u.gaE(0),j=B.r(u),u=new B.be(J.al(u.a),u.b,j.h("be<1,2>")),j=j.y[1];u.q();){g=u.a
if(g==null)g=j.a(g)
for(e=J.al(C.Aw.ge5(C.Aw)),d=g.a,a0=g.b.a;e.q();){a1=e.gK(e)
if(d.a_(0,a1)){a6.d=x+g.i(0,a1).D(0)
n=new A.p8(B.D(s,r),new A.rS(B.D(q,p)))
m=a6.bJ()
l=B.a(new Array(m),t)
for(k=0;k<m;++k)l[k]=this.anu(a6,x)
for(a2=l.length,i=0;i<l.length;l.length===a2||(0,B.O)(l),++i){h=l[i]
a3=h.b
if(a3!=null)n.n(0,h.a,a3)}a1=C.Aw.i(0,a1)
a1.toString
a0.n(0,a1,n)}}}a6.e=a4
return!1},
anu(d,e){var x,w,v,u,t=d.bJ(),s=d.bJ(),r=d.ai(),q=new A.aEN(t,null)
if(s>13)return q
x=C.PM[s]
w=r*C.iz[s]
v=d.d
if((w>4?d.d=d.ai()+e:v)+w>d.c)return q
u=d.ks(w)
switch(x.a){case 0:break
case 6:q.b=new A.uR(new Int8Array(B.bJ(B.cmx(u.ht().buffer,0,r))))
break
case 1:q.b=new A.rR(new Uint8Array(B.bJ(u.ks(r).ht())))
break
case 7:q.b=new A.FG(new Uint8Array(B.bJ(u.ks(r).ht())))
break
case 2:q.b=new A.At(r===0?"":u.pI(r-1))
break
case 3:q.b=A.clk(u,r)
break
case 4:q.b=A.clf(u,r)
break
case 5:q.b=A.clg(u,r)
break
case 10:q.b=A.cli(u,r)
break
case 8:q.b=A.clj(u,r)
break
case 9:q.b=A.clh(u,r)
break
case 11:q.b=A.clm(u,r)
break
case 12:q.b=A.cle(u,r)
break}d.d=v+4
return q}}
A.aEN.prototype={
gj(d){return this.b}}
A.akp.prototype={}
A.rS.prototype={
aOL(d){d.a.aI(0,new A.bb6(this))},
gaE(d){return this.a.gaE(0)},
gS(d){var x,w,v=this.a
if(v.a===0)return!0
for(v=v.gaE(0),x=B.r(v),v=new B.be(J.al(v.a),v.b,x.h("be<1,2>")),x=x.y[1];v.q();){w=v.a
if(w==null)w=x.a(w)
if(!(w.a.a===0&&w.b.gS(0)))return!1}return!0},
a_(d,e){return this.a.a_(0,e)},
i(d,e){var x=this.a
if(!x.a_(0,e))x.n(0,e,new A.p8(B.D(y.p,y.r),new A.rS(B.D(y.N,y.P))))
x=x.i(0,e)
x.toString
return x},
n(d,e,f){this.a.n(0,e,f)}}
A.p8.prototype={
gaE(d){return this.a.gaE(0)},
gS(d){return this.a.a===0&&this.b.gS(0)},
bon(d){d.a.aI(0,new A.bb7(this))
d.b.a.aI(0,new A.bb8(this))},
a_(d,e){return this.a.a_(0,e)},
i(d,e){if(typeof e=="string")e=C.VR.i(0,e)
if(B.hn(e))return this.a.i(0,e)
return null},
n(d,e,f){var x,w,v,u,t,s,r=this
if(typeof e=="string")e=C.VR.i(0,e)
if(!B.hn(e))return
if(f==null)r.a.I(0,e)
else if(f instanceof A.jt)r.a.n(0,e,f)
else{x=$.c9x().i(0,e)
if(x!=null)switch(x.b.a){case 1:if(y.L.b(f))r.a.n(0,e,new A.rR(new Uint8Array(B.bJ(new Uint8Array(B.bJ(f))))))
else if(B.hn(f)){w=new Uint8Array(1)
w[0]=f
r.a.n(0,e,new A.rR(w))}break
case 2:if(typeof f=="string")r.a.n(0,e,new A.At(f))
break
case 3:if(y.L.b(f))r.a.n(0,e,new A.x9(new Uint16Array(B.bJ(new Uint16Array(B.bJ(f))))))
else if(B.hn(f))r.a.n(0,e,A.cGP(f))
break
case 4:if(y.L.b(f))r.a.n(0,e,new A.qk(new Uint32Array(B.bJ(new Uint32Array(B.bJ(f))))))
else if(B.hn(f))r.a.n(0,e,A.cGO(f))
break
case 5:if(y.k.b(f))r.a.n(0,e,new A.rT(B.b5(f,!0,y.i)))
else if(y.L.b(f)&&J.b0(f)===2){w=J.a1(f)
r.a.n(0,e,new A.rT(B.a([new A.nd(w.i(f,0),w.i(f,1))],y.j)))}else if(f instanceof A.nd)r.a.n(0,e,new A.rT(B.a([new A.nd(f.a,f.b)],y.j)))
else if(y.f.b(f)){w=J.a1(f)
v=w.gt(f)
u=y.i
t=J.ju(v,u)
for(s=0;s<v;++s)t[s]=new A.nd(J.t(w.i(f,s),0),J.t(w.i(f,s),1))
r.a.n(0,e,new A.rT(B.b5(t,!0,u)))}break
case 6:if(y.L.b(f))r.a.n(0,e,new A.uR(new Int8Array(B.bJ(new Int8Array(B.bJ(f))))))
else if(B.hn(f)){w=new Int8Array(1)
w[0]=f
r.a.n(0,e,new A.uR(w))}break
case 7:if(y.L.b(f))r.a.n(0,e,new A.FG(new Uint8Array(B.bJ(new Uint8Array(B.bJ(f))))))
break
case 8:if(y.L.b(f))r.a.n(0,e,new A.x8(new Int16Array(B.bJ(new Int16Array(B.bJ(f))))))
else if(B.hn(f)){w=new Int16Array(1)
w[0]=f
r.a.n(0,e,new A.x8(w))}break
case 9:if(y.L.b(f))r.a.n(0,e,new A.x7(new Int32Array(B.bJ(new Int32Array(B.bJ(f))))))
else if(B.hn(f)){w=new Int32Array(1)
w[0]=f
r.a.n(0,e,new A.x7(w))}break
case 10:if(y.k.b(f))r.a.n(0,e,new A.rU(B.b5(f,!0,y.i)))
else if(y.L.b(f)&&J.b0(f)===2){w=J.a1(f)
r.a.n(0,e,new A.rU(B.a([new A.nd(w.i(f,0),w.i(f,1))],y.j)))}else if(f instanceof A.nd)r.a.n(0,e,new A.rU(B.a([f],y.j)))
else if(y.f.b(f)){w=J.a1(f)
v=w.gt(f)
u=y.i
t=J.ju(v,u)
for(s=0;s<v;++s)t[s]=new A.nd(J.t(w.i(f,s),0),J.t(w.i(f,s),1))
r.a.n(0,e,new A.rU(B.b5(t,!0,u)))}break
case 11:if(y.n.b(f))r.a.n(0,e,new A.Av(new Float32Array(B.bJ(new Float32Array(B.bJ(f))))))
else if(typeof f=="number")r.a.n(0,e,A.cll(f))
else if(B.hn(f))r.a.n(0,e,A.cll(f))
break
case 12:if(y.n.b(f))r.a.n(0,e,new A.Au(new Float64Array(B.bJ(new Float64Array(B.bJ(f))))))
else if(typeof f=="number")r.a.n(0,e,A.cld(f))
else if(B.hn(f))r.a.n(0,e,A.cld(f))
break
case 0:break}}},
gie(d){var x=this.a.i(0,274)
return x==null?null:J.adW(x)},
sie(d,e){this.a.I(0,274)}}
A.m6.prototype={
J(){return"IfdValueType."+this.b}}
A.jt.prototype={
iI(d,e){return 0},
D(d){return this.iI(0,0)},
CN(d){return 0},
ts(){return new Uint8Array(0)},
k(d){return""},
l(d,e){var x=this
if(e==null)return!1
return e instanceof A.jt&&x.ghu(x)===e.ghu(e)&&x.gt(x)===e.gt(e)&&x.gv(x)===e.gv(e)},
gv(d){return 0},
v9(d){}}
A.rR.prototype={
dL(d){return new A.rR(new Uint8Array(B.bJ(this.a)))},
ghu(d){return C.Hu},
gt(d){return this.a.length},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.rR){x=this.a
x=x.length===e.a.length&&B.aD(x)===B.aD(e.a)}else x=!1
return x},
gv(d){return B.aD(this.a)},
iI(d,e){return this.a[e]},
D(d){return this.iI(0,0)},
v9(d){this.a[0]=d},
ts(){return this.a},
j3(d,e){e.m_(this.a)},
k(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gj(d){return this.a}}
A.At.prototype={
dL(d){return new A.At(this.a)},
ghu(d){return C.bc},
gt(d){return this.a.length+1},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.At){x=this.a
x=x.length+1===e.a.length+1&&D.e.gv(x)===D.e.gv(e.a)}else x=!1
return x},
gv(d){return D.e.gv(this.a)},
ts(){return new Uint8Array(B.bJ(new B.dN(this.a)))},
j3(d,e){e.m_(new B.dN(this.a))
e.aS(0)},
k(d){return this.a},
gj(d){return this.a}}
A.x9.prototype={
aOQ(d,e){var x
for(x=0;x<e;++x)this.a[x]=d.bJ()},
dL(d){return new A.x9(new Uint16Array(B.bJ(this.a)))},
ghu(d){return C.b1},
gt(d){return this.a.length},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.x9){x=this.a
x=x.length===e.a.length&&B.aD(x)===B.aD(e.a)}else x=!1
return x},
gv(d){return B.aD(this.a)},
iI(d,e){return this.a[e]},
D(d){return this.iI(0,0)},
v9(d){this.a[0]=d},
ts(){return B.c3(this.a.buffer,0,null)},
j3(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.kv(this.a[x])},
k(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gj(d){return this.a}}
A.qk.prototype={
aON(d,e){var x
for(x=0;x<e;++x)this.a[x]=d.ai()},
dL(d){return new A.qk(new Uint32Array(B.bJ(this.a)))},
ghu(d){return C.cp},
gt(d){return this.a.length},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.qk){x=this.a
x=x.length===e.a.length&&B.aD(x)===B.aD(e.a)}else x=!1
return x},
gv(d){return B.aD(this.a)},
iI(d,e){return this.a[e]},
D(d){return this.iI(0,0)},
v9(d){this.a[0]=d},
ts(){return B.c3(this.a.buffer,0,null)},
j3(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.hZ(this.a[x])},
k(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gj(d){return this.a}}
A.rT.prototype={
dL(d){return new A.rT(B.b5(this.a,!0,y.i))},
ghu(d){return C.dE},
gt(d){return this.a.length},
iI(d,e){return J.adW(this.a[e])},
D(d){return this.iI(0,0)},
CN(d){return J.c9M(this.a[0])},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.rT){x=this.a
x=x.length===e.a.length&&B.aD(x)===B.aD(e.a)}else x=!1
return x},
gv(d){return B.aD(this.a)},
j3(d,e){var x,w,v,u
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.O)(x),++v){u=x[v]
e.hZ(u.a)
e.hZ(u.b)}},
k(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gj(d){return this.a}}
A.uR.prototype={
dL(d){return new A.uR(new Int8Array(B.bJ(this.a)))},
ghu(d){return C.Hy},
gt(d){return this.a.length},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.uR){x=this.a
x=x.length===e.a.length&&B.aD(x)===B.aD(e.a)}else x=!1
return x},
gv(d){return B.aD(this.a)},
iI(d,e){return this.a[e]},
D(d){return this.iI(0,0)},
v9(d){this.a[0]=d},
ts(){return B.c3(this.a.buffer,0,null)},
j3(d,e){e.m_(B.c3(this.a.buffer,0,null))},
k(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gj(d){return this.a}}
A.x8.prototype={
aOP(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.bJ()
$.pX()[0]=v
w[x]=$.rl()[0]}},
dL(d){return new A.x8(new Int16Array(B.bJ(this.a)))},
ghu(d){return C.Hz},
gt(d){return this.a.length},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.x8){x=this.a
x=x.length===e.a.length&&B.aD(x)===B.aD(e.a)}else x=!1
return x},
gv(d){return B.aD(this.a)},
iI(d,e){return this.a[e]},
D(d){return this.iI(0,0)},
v9(d){this.a[0]=d},
ts(){return B.c3(this.a.buffer,0,null)},
j3(d,e){var x,w=new Int16Array(1),v=B.cc0(w.buffer,0,null),u=this.a.length
for(x=0;x<u;++x){w[0]=this.a[x]
e.kv(v[0])}},
k(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gj(d){return this.a}}
A.x7.prototype={
aOO(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.ai()
$.hq()[0]=v
w[x]=$.kX()[0]}},
dL(d){return new A.x7(new Int32Array(B.bJ(this.a)))},
ghu(d){return C.HA},
gt(d){return this.a.length},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.x7){x=this.a
x=x.length===e.a.length&&B.aD(x)===B.aD(e.a)}else x=!1
return x},
gv(d){return B.aD(this.a)},
iI(d,e){return this.a[e]},
D(d){return this.iI(0,0)},
v9(d){this.a[0]=d},
ts(){return B.c3(this.a.buffer,0,null)},
j3(d,e){var x,w,v=this.a.length
for(x=0;x<v;++x){w=this.a[x]
$.aQD()[0]=w
e.hZ($.c9r()[0])}},
k(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gj(d){return this.a}}
A.rU.prototype={
dL(d){return new A.rU(B.b5(this.a,!0,y.i))},
ghu(d){return C.Hv},
gt(d){return this.a.length},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.rU){x=this.a
x=x.length===e.a.length&&B.aD(x)===B.aD(e.a)}else x=!1
return x},
gv(d){return B.aD(this.a)},
iI(d,e){return J.adW(this.a[e])},
D(d){return this.iI(0,0)},
CN(d){return J.c9M(this.a[0])},
j3(d,e){var x,w,v,u,t,s
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.O)(x),++v){u=x[v]
t=u.a
s=$.aQD()
s[0]=t
t=$.c9r()
e.hZ(t[0])
s[0]=u.b
e.hZ(t[0])}},
k(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gj(d){return this.a}}
A.Av.prototype={
aOR(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.ai()
$.hq()[0]=v
w[x]=$.DT()[0]}},
dL(d){return new A.Av(new Float32Array(B.bJ(this.a)))},
ghu(d){return C.Hw},
gt(d){return this.a.length},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.Av){x=this.a
x=x.length===e.a.length&&B.aD(x)===B.aD(e.a)}else x=!1
return x},
gv(d){return B.aD(this.a)},
ts(){return B.c3(this.a.buffer,0,null)},
CN(d){return this.a[0]},
j3(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.bFi(this.a[x])},
k(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gj(d){return this.a}}
A.Au.prototype={
aOM(d,e){var x
for(x=0;x<e;++x)this.a[x]=d.Yy()},
dL(d){return new A.Au(new Float64Array(B.bJ(this.a)))},
ghu(d){return C.Hx},
gt(d){return this.a.length},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.Au){x=this.a
x=x.length===e.a.length&&B.aD(x)===B.aD(e.a)}else x=!1
return x},
gv(d){return B.aD(this.a)},
CN(d){return this.a[0]},
ts(){return B.c3(this.a.buffer,0,null)},
j3(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.bFj(this.a[x])},
k(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gj(d){return this.a}}
A.FG.prototype={
dL(d){return new A.FG(new Uint8Array(B.bJ(this.a)))},
ghu(d){return C.h9},
gt(d){return this.a.length},
ts(){return this.a},
l(d,e){var x
if(e==null)return!1
if(e instanceof A.FG){x=this.a
x=x.length===e.a.length&&B.aD(x)===B.aD(e.a)}else x=!1
return x},
gv(d){return B.aD(this.a)},
j3(d,e){e.m_(this.a)},
k(d){return"<data>"},
gj(d){return this.a}}
A.l1.prototype={
J(){return"BmpCompression."+this.b}}
A.aUJ.prototype={}
A.Ea.prototype={
afd(d,e){var x,w,v,u,t,s,r,q=this,p=q.d,o=p<=40
if(o){x=q.r
x=x===C.x4||x===C.x5}else x=!0
if(x){x=q.as=d.ai()
w=A.c74(x)
q.CW=w
v=D.c.fD(x,w)
x=v>0
q.cx=x?255/v:0
w=q.at=d.ai()
u=A.c74(w)
q.cy=u
t=D.c.fD(w,u)
q.db=x?255/t:0
w=q.ax=d.ai()
u=A.c74(w)
q.dx=u
s=D.c.fD(w,u)
q.dy=x?255/s:0
if(!o||q.r===C.x5){o=q.ay=d.ai()
x=A.c74(o)
q.fr=x
r=D.c.fD(o,x)
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
if(q.f<=8)q.bCp(d)},
gN0(){var x=this.d
if(x!==40)if(x===124){x=this.ay
x===$&&B.b()
x=x===0}else x=!1
else x=!0
return x},
gb_(d){return Math.abs(this.c)},
bCp(d){var x,w,v,u,t,s=this,r=s.z
if(r===0)r=D.c.ee(1,s.f)
s.ch=new A.tb(new Uint8Array(r*3),r,3)
for(x=0;x<r;++x){w=J.t(d.a,d.d++)
v=J.t(d.a,d.d++)
u=J.t(d.a,d.d++)
t=J.t(d.a,d.d++)
s.ch.PW(x,u,v,w,t)}},
bqs(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(o.ch!=null){x=o.f
if(x===1){w=d.cZ()
for(v=7;v>=0;--v)e.$4(D.c.nk(w,v)&1,0,0,0)
return}else if(x===2){w=d.cZ()
for(v=6;v>=0;v-=2)e.$4(D.c.nk(w,v)&2,0,0,0)}else if(x===4){w=d.cZ()
e.$4(D.c.O(w,4)&15,0,0,0)
e.$4(w&15,0,0,0)
return}else if(x===8){e.$4(d.cZ(),0,0,0)
return}}x=o.r
if(x===C.x4&&o.f===32){u=d.ai()
x=o.as
x===$&&B.b()
t=o.CW
t===$&&B.b()
t=D.c.fD((u&x)>>>0,t)
x=o.cx
x===$&&B.b()
s=D.d.D(t*x)
x=o.at
x===$&&B.b()
t=o.cy
t===$&&B.b()
t=D.c.fD((u&x)>>>0,t)
x=o.db
x===$&&B.b()
r=D.d.D(t*x)
x=o.ax
x===$&&B.b()
t=o.dx
t===$&&B.b()
t=D.c.fD((u&x)>>>0,t)
x=o.dy
x===$&&B.b()
q=D.d.D(t*x)
if(o.gN0())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.fD((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.d.D(t*x)}return e.$4(s,r,q,p)}else{t=o.f
if(t===32&&x===C.DV){q=d.cZ()
r=d.cZ()
s=d.cZ()
p=d.cZ()
return e.$4(s,r,q,o.gN0()?255:p)}else if(t===24){q=d.cZ()
r=d.cZ()
return e.$4(d.cZ(),r,q,255)}else if(t===16){u=d.bJ()
x=o.as
x===$&&B.b()
t=o.CW
t===$&&B.b()
t=D.c.fD((u&x)>>>0,t)
x=o.cx
x===$&&B.b()
s=D.d.D(t*x)
x=o.at
x===$&&B.b()
t=o.cy
t===$&&B.b()
t=D.c.fD((u&x)>>>0,t)
x=o.db
x===$&&B.b()
r=D.d.D(t*x)
x=o.ax
x===$&&B.b()
t=o.dx
t===$&&B.b()
t=D.c.fD((u&x)>>>0,t)
x=o.dy
x===$&&B.b()
q=D.d.D(t*x)
if(o.gN0())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.fD((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.d.D(t*x)}return e.$4(s,r,q,p)}else throw B.e(A.bR("Unsupported bitsPerPixel ("+t+") or compression ("+x.k(0)+")."))}}}
A.aft.prototype={
nV(d){var x,w=null
if(!A.ca5(A.cB(d,!1,w,0)))return w
x=A.cB(d,!1,w,0)
this.a=x
return this.b=A.cC_(x,w)},
jq(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b
if(e==null)return new A.Ax(f,f,f,f,0,C.b3,0,0)
x=g.a
x===$&&B.b()
w=e.a.b
w===$&&B.b()
x.d=w
v=e.f
w=e.b
u=D.c.aW(w*v+31,32)*4
x=g.c
if(x)t=4
else if(v===1||v===4||v===8)t=1
else{s=v===32?4:3
t=s}if(x)r=C.a_
else if(v===1)r=C.eU
else{if(v===2)s=C.fx
else if(v===4)s=C.fy
else s=C.a_
r=s}q=x?f:e.ch
p=A.hc(f,f,r,0,C.b3,e.gb_(e),f,0,t,q,C.a_,w,!1)
for(o=p.gb_(0)-1,x=e.c,w=1/x<0,s=x<0,x=x===0;o>=0;--o){n={}
if(!(x?w:s))m=o
else{l=p.a
l=l==null?f:l.b
m=(l==null?0:l)-1-o}l=g.a
k=l.jl(u)
l.d=l.d+(k.c-k.d)
l=p.a
j=l==null
i=j?f:l.a
if(i==null)i=0
n.a=0
h=j?f:l.e2(0,m,f)
if(h==null)h=new A.f0()
for(;n.a<i;)e.bqs(k,new A.aUI(n,g,i,e,h))}return p},
mY(d,e,f){if(this.nV(e)==null)return null
return this.jq(0)}}
A.b1r.prototype={}
A.b06.prototype={}
A.b07.prototype={}
A.b3N.prototype={}
A.akr.prototype={}
A.an9.prototype={
NG(){return this.w},
r8(d,e,f,g,h){throw B.e(A.bR("B44 compression not yet supported."))},
HT(d,e,f){return this.r8(d,e,f,null,null)},
k(d){return B.o(this.r)+" "+this.x}}
A.Mb.prototype={
J(){return"ExrChannelType."+this.b}}
A.F7.prototype={
J(){return"ExrChannelName."+this.b}}
A.aks.prototype={
gbqh(){var x=this.c
x===$&&B.b()
return x},
aOB(d){var x=this,w=d.Ok()
x.a=w
if(w.length===0)return
x.c=C.azy[d.ai()]
d.cZ()
d.d+=3
x.f=d.ai()
x.r=d.ai()
w=x.a
if(w==="R"){x.w=!0
x.b=C.ai4}else if(w==="G"){x.w=!0
x.b=C.ai5}else if(w==="B"){x.w=!0
x.b=C.ai6}else if(w==="A"){x.w=!0
x.b=C.ai7}else{x.w=!1
x.b=C.ai8}switch(x.c.a){case 0:x.d=4
break
case 1:x.d=2
break
case 2:x.d=4
break
default:throw B.e(A.bR("EXR Invalid pixel type: "+x.gbqh().k(0)))}}}
A.rI.prototype={
J(){return"ExrCompressorType."+this.b}}
A.b52.prototype={
r8(d,e,f,g,h){throw B.e(A.bR("Unsupported compression type"))},
HT(d,e,f){return this.r8(d,e,f,null,null)}}
A.bci.prototype={}
A.akt.prototype={}
A.b54.prototype={
aOC(d){var x,w,v,u,t=this,s=A.cB(d,!1,null,0)
if(s.ai()!==20000630)throw B.e(A.bR("File is not an OpenEXR image file."))
x=t.d=s.cZ()
if(x!==2)throw B.e(A.bR("Cannot read version "+x+" image files."))
x=t.e=s.r_()
if((x&4294967289)>>>0!==0)throw B.e(A.bR("The file format version number's flag field contains unrecognized flags."))
if((x&16)===0){w=t.c
v=A.clB(w.length,(x&2)!==0,s)
if(v.w>0)w.push(v)}else for(x=t.c;!0;){v=A.clB(x.length,(t.e&2)!==0,s)
if(v.w<=0)break
x.push(v)}x=t.c
w=x.length
if(w===0)throw B.e(A.bR("Error reading image header"))
for(u=0;u<x.length;x.length===w||(0,B.O)(x),++u)x[u].bCo(s)
t.bcn(s)},
bcn(d){var x,w,v,u,t=this
for(x=t.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.O)(x),++v){u=x[v]
t.a=Math.max(t.a,u.w)
t.b=Math.max(t.b,u.x)
if(u.db)t.bcw(u,d)
else t.bcu(u,d)}},
bcw(b3,b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=this.e
b2===$&&B.b()
x=(b2&16)!==0
b2=b3.b
b2.toString
w=b3.CW
v=b3.ay
u=A.bY(b4,b1,0)
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
if(x)if(u.ai()!==s)throw B.e(A.bR("Invalid Image Data"))
k=u.ai()
j=u.ai()
u.ai()
u.ai()
i=u.jl(u.ai())
u.d=u.d+(i.c-i.d)
h=b3.dy
h.toString
g=j*h
f=b3.dx
f.toString
h=w.r8(i,k*f,g,f,h)
e=h.length
d=new A.le(h,0,e,0,!1)
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
switch(h.a){case 1:h=d.bJ()
f=$.h9
a9=(f!=null?f:A.hZ())[h]
break
case 2:a9=d.bJ()
break
case 0:a9=d.ai()
break
default:a9=b1}h=a6.d
h===$&&B.b()
a3+=h
h=a6.w
h===$&&B.b()
if(h){h=b2.a
b0=h==null?b1:h.e2(a7,g,b1)
if(b0==null)b0=new A.f0()
h=a6.b
h===$&&B.b()
b0.n(0,h.a,a9)}else{h=a6.a
h===$&&B.b()
f=b2.b
h=f!=null?f.i(0,h):b1
if(h!=null)h.eQ(a7,g,a9,0,0)}}}++a4;++g}}++o;++q}++r}},
bcu(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=this.e
a4===$&&B.b()
x=(a4&16)!==0
a4=a5.b
a4.toString
w=a5.CW
v=a5.ay[0]
u=a5.cx
t=A.bY(a6,a3,0)
for(s=v.length,r=a5.c,q=w!=null,p=0,o=0;o<s;++o){t.d=v[o]
if(x)if(t.ai()!==3.141592653589793)throw B.e(A.bR("Invalid Image Data"))
n=t.ai()
m=$.hq()
m[0]=n
n=$.kX()
m[0]=t.ai()
l=t.jl(n[0])
t.d=t.d+(l.c-l.d)
if(q){n=w.HT(l,0,p)
k=new A.le(n,0,n.length,0,!1)}else k=l
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
switch(n.a){case 1:n=k.bJ()
m=$.h9
a1=(m!=null?m:A.hZ())[n]
break
case 2:a1=k.bJ()
break
case 0:a1=k.ai()
break
default:a1=a3}n=e.d
n===$&&B.b()
g+=n
n=e.w
n===$&&B.b()
if(n){n=a4.a
a2=n==null?a3:n.e2(a0,p,a3)
if(a2==null)a2=new A.f0()
n=e.b
n===$&&B.b()
a2.n(0,n.a,a1)}else{n=e.a
n===$&&B.b()
m=a4.b
n=m!=null?m.i(0,n):a3
if(n!=null)n.eQ(a0,p,a1,0,0)}}}++h;++p}}}}
A.WO.prototype={
aOD(a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=B.D(y.N,y.I)
for(x=a1.e,w=y.t,v=a1.c,u=C.h7;!0;){t=a6.Ok()
if(t.length===0)break
s=a6.Ok()
r=a6.ai()
q=a6.jl(r)
a6.d=a6.d+(q.c-q.d)
x.n(0,t,new A.akr(t,s,r))
switch(t){case"channels":for(;!0;){p=new A.aks()
p.aOB(q)
o=p.a
o===$&&B.b()
if(o.length===0)break
n=p.w
n===$&&B.b()
if(n){++a1.d
o=p.c
o===$&&B.b()
if(o===C.yx)u=C.h7
else u=o===C.yy?C.im:C.io}else{n=p.c
n===$&&B.b()
if(n===C.yx){n=a1.w
m=a1.x
a3.n(0,o,new A.MK(new Uint16Array(n*m),n,m,1))}else if(n===C.yy){n=a1.w
m=a1.x
a3.n(0,o,new A.ML(new Float32Array(n*m),n,m,1))}else if(n===C.GA){n=a1.w
m=a1.x
a3.n(0,o,new A.MP(new Uint32Array(n*m),n,m,1))}}v.push(p)}break
case"chromaticities":o=new Float32Array(8)
a1.at=o
n=q.ai()
m=$.hq()
m[0]=n
n=$.DT()
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
case"compression":a1.ax=C.aov[J.t(q.a,q.d++)]
break
case"dataWindow":o=q.ai()
n=$.hq()
n[0]=o
o=$.kX()
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
n=$.hq()
n[0]=o
$.kX()
n[0]=q.ai()
n[0]=q.ai()
n[0]=q.ai()
break
case"lineOrder":break
case"pixelAspectRatio":o=q.ai()
$.hq()[0]=o
$.DT()
break
case"screenWindowCenter":o=q.ai()
n=$.hq()
n[0]=o
$.DT()
n[0]=q.ai()
break
case"screenWindowWidth":o=q.ai()
$.hq()[0]=o
$.DT()
break
case"tiles":a1.dx=q.ai()
a1.dy=q.ai()
o=J.t(q.a,q.d++)
a1.fr=o&15
a1.fx=D.c.O(o,4)&15
break
case"type":j=q.Ok()
if(j!=="deepscanline")if(j!=="deeptile")throw B.e(A.bR("EXR Invalid type: "+j))
break
default:break}}x=a1.w
a1.b=A.hc(a2,a2,u,0,C.b3,a1.x,a2,0,a1.d,a2,C.a_,x,!1)
for(x=B.fH(a3,a3.r,a3.$ti.c);x.q();){w=x.d
o=a1.b
o.toString
n=a3.i(0,w)
n.toString
o.aG5(w,n)}if(a1.db){x=a1.r
x===$&&B.b()
a1.id=a1.aS3(x[0],x[2],x[1],x[3])
x=a1.r
a1.k1=a1.aS4(x[0],x[2],x[1],x[3])
if(a1.fr!==2)a1.k1=1
x=a1.id
x.toString
w=a1.r
a1.fy=a1.agr(x,w[0],w[2],a1.dx,a1.fx)
w=a1.k1
w.toString
x=a1.r
a1.go=a1.agr(w,x[1],x[3],a1.dy,a1.fx)
x=a1.aS1()
a1.k2=x
w=a1.dx
w.toString
w=x*w
a1.k3=w
a1.CW=A.ckm(a1.ax,a1,w,a1.dy)
a7.a=a7.b=0
w=a1.id
w.toString
x=a1.k1
x.toString
a1.ay=B.xl(w*x,new A.b55(a7,a1),!0,y.bk)}else{x=a1.x
w=a1.ch=new Uint32Array(x+1)
for(o=v.length,n=a1.r,m=a1.w,i=0;i<o;++i){h=v[i]
l=h.d
l===$&&B.b()
k=h.f
k===$&&B.b()
g=D.c.fJ(l*m,k)
for(l=h.r,f=0;f<x;++f){n===$&&B.b()
k=n[1]
l===$&&B.b()
if(D.c.al(f+k,l)===0)w[f]=w[f]+g}}for(e=0,f=0;f<x;++f)e=Math.max(e,w[f])
x=A.ckm(a1.ax,a1,e,a2)
a1.CW=x
x=a1.cx=x.NG()
w=a1.ch
v=w.length
o=new Uint32Array(v)
a1.cy=o
for(--v,d=0,a0=0;a0<=v;++a0){if(D.c.al(a0,x)===0)d=0
o[a0]=d
d+=w[a0]}x=D.c.fJ(a1.x+x,x)
a1.ay=B.a([new Uint32Array(x-1)],y.w)}},
aS3(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.Rt(w):u.QU(w))+1
break
case 2:v=e-d+1
x=(u.fx===0?u.Rt(v):u.QU(v))+1
break
default:throw B.e(A.bR("Unknown LevelMode format."))}return x},
aS4(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.Rt(w):u.QU(w))+1
break
case 2:v=g-f+1
x=(u.fx===0?u.Rt(v):u.QU(v))+1
break
default:throw B.e(A.bR("Unknown LevelMode format."))}return x},
Rt(d){var x
for(x=0;d>1;){++x
d=D.c.O(d,1)}return x},
QU(d){var x,w
for(x=0,w=0;d>1;){if((d&1)!==0)w=1;++x
d=D.c.O(d,1)}return x+w},
aS1(){var x,w,v,u,t
for(x=this.c,w=x.length,v=0,u=0;u<w;++u){t=x[u].d
t===$&&B.b()
v+=t}return v},
agr(d,e,f,g,h){var x,w,v,u,t,s,r=J.ip(d,y.p)
for(x=h===1,w=f-e+1,v=0;v<d;++v){u=D.c.ee(1,v)
t=D.c.fJ(w,u)
if(x&&t*u<w)++t
s=Math.max(t,1)
g.toString
r[v]=D.c.fJ(s+g-1,g)}return r}}
A.ana.prototype={
bCo(d){var x,w,v,u,t=this
if(t.db)for(x=0;x<t.ay.length;++x)for(w=0;v=t.ay[x],w<v.length;++w)v[w]=d.aaO()
else{u=t.ay[0].length
for(x=0;x<u;++x)t.ay[0][x]=d.aaO()}}}
A.bcj.prototype={
aOZ(d,e,f){var x,w,v,u=this,t=d.c.length,s=J.ip(t,y.bc)
for(x=0;x<t;++x)s[x]=new A.aHH()
u.y=s
w=u.w
w.toString
v=D.c.aW(w*u.x,2)
u.z=new Uint16Array(v)},
NG(){return this.x},
r8(a4,a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
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
n=D.c.fJ(a5,v)
m=D.c.fJ(x,v)
v=n*v<a5?0:1
v=m-n+v
o.c=v
u=p.r
u===$&&B.b()
n=D.c.fJ(a6,u)
m=D.c.fJ(w,u)
l=n*u<a6?0:1
l=m-n+l
o.d=l
o.e=u
u=p.d
u===$&&B.b()
u=u/2|0
o.f=u
r+=v*l*u}k=a4.bJ()
j=a4.bJ()
if(j>=8192)throw B.e(A.bR("Error in header for PIZ-compressed data (invalid bitmap size)."))
i=new Uint8Array(8192)
if(k<=j){h=a4.ks(j-k+1)
g=h.c-h.d
for(f=k,q=0;q<g;++q,f=e){e=f+1
i[f]=J.t(h.a,h.d+q)}}d=new Uint16Array(65536)
a0=a3.bdF(i,d)
A.cFd(a4,a4.ai(),a3.z,r)
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
A.cFg(u,l+f,a1,v,a2,a1*v,a0);++f}}v=a3.z
v.toString
a3.aQJ(d,v,r)
v=a3.r
if(v==null){v=a3.w
v.toString
v=a3.r=A.pn(!1,v*a3.x+73728)}v.a=0
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
v.kv(u[l])}}v=a3.r
return B.c3(v.c.buffer,0,v.a)},
HT(d,e,f){return this.r8(d,e,f,null,null)},
aQJ(d,e,f){var x
for(x=0;x<f;++x)e[x]=d[e[x]]},
bdF(d,e){var x,w,v,u
for(x=0,w=0;w<65536;++w)if(w===0||(d[w>>>3]&1<<(w&7))>>>0!==0){v=x+1
e[x]=w
x=v}for(v=x;v<65536;v=u){u=v+1
e[v]=0}return x-1}}
A.aHH.prototype={}
A.bck.prototype={
NG(){return this.x},
r8(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=C.i9.Bj(A.AI(a0.ht(),1,null,0),!1),d=f.y
if(d==null){d=f.w
d.toString
d=f.y=A.pn(!1,f.x*d)}d.a=0
x=B.a([0,0,0,0],y.t)
w=new Uint32Array(1)
v=B.c3(w.buffer,0,null)
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
m=D.c.fJ(a1,s)
l=D.c.fJ(u,s)
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
return B.c3(d.c.buffer,0,d.a)},
HT(d,e,f){return this.r8(d,e,f,null,null)}}
A.bcl.prototype={
NG(){return 1},
r8(d,e,f,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.c,g=A.pn(!1,(h-d.d)*2)
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
$.nH()[0]=v
t=$.oQ()[0]
if(t<0){s=-t
for(;r=s-1,s>0;s=r)g.aS(J.t(d.a,d.d++))}else for(s=t;r=s-1,s>=0;s=r)g.aS(J.t(d.a,d.d++))}q=B.c3(g.c.buffer,0,g.a)
p=q.length
for(o=1;o<p;++o)q[o]=q[o-1]+q[o]-128
h=i.r
if(h==null||h.length!==p)h=i.r=new Uint8Array(p)
v=D.c.aW(p+1,2)
for(n=0,m=0;!0;v=j,n=k){if(m<p){l=m+1
k=n+1
h[m]=q[n]}else break
if(l<p){m=l+1
j=v+1
h[l]=q[v]}else break}h.toString
return h},
HT(d,e,f){return this.r8(d,e,f,null,null)},
k(d){return B.o(this.w)}}
A.anb.prototype={
NG(){return this.x},
r8(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=C.i9.Bj(A.AI(d.ht(),1,null,0),!1)
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
u=D.c.aW(t+1,2)
for(r=0,q=0;!0;u=n,r=o){if(q<t){p=q+1
o=r+1
v[q]=l[r]}else break
if(p<t){q=p+1
n=u+1
v[p]=l[u]}else break}v.toString
return v},
HT(d,e,f){return this.r8(d,e,f,null,null)},
k(d){return B.o(this.w)}}
A.b53.prototype={
jq(d){var x=this.a
if(x==null)return null
return x.c[d].b},
mY(d,e,f){var x=new A.b54(B.a([],y.m))
x.aOC(e)
this.a=x
return this.jq(0)}}
A.Xq.prototype={
bsW(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.b,w=this.d,v=-1,u=-1,t=0;t<x;++t){s=w.my(t)
r=w.mw(t)
q=w.mu(t)
p=w.nR(t)
if(s===d&&r===e&&q===f&&p===g)return t
o=d-s
n=e-r
m=f-q
l=g-p
k=o*o+n*n+m*m+l*l
if(u===-1){u=t
v=k}else if(k<v){u=t
v=k}}return u},
aco(){var x,w,v,u,t,s,r,q=this
if(q.c==null)return q.d
x=q.d
w=x.a
v=new A.tb(new Uint8Array(w*4),w,4)
for(u=0;u<w;++u){t=x.my(u)
s=x.mw(u)
r=x.mu(u)
v.PW(u,t,s,r,u===q.c?0:255)}return v}}
A.Xr.prototype={
aOG(d){var x,w,v,u,t,s,r=this
r.a=d.bJ()
r.b=d.bJ()
r.c=d.bJ()
r.d=d.bJ()
x=d.cZ()
r.e=(x&64)!==0
if((x&128)!==0){r.f=A.ckR(D.c.ee(1,(x&7)+1))
for(w=0;v=r.f,w<v.b;++w){u=J.t(d.a,d.d++)
t=J.t(d.a,d.d++)
s=J.t(d.a,d.d++)
v.d.oC(w,u,t,s)}}r.x=d.d-d.b}}
A.anc.prototype={}
A.alU.prototype={}
A.b8I.prototype={
nV(d){var x,w,v,u,t,s,r,q,p=this
p.f=A.cB(d,!1,null,0)
p.a=new A.alU(B.a([],y.b))
if(!p.aji())return null
try{for(;u=p.f,t=u.d,t<u.c;){s=u.a
u.d=t+1
x=J.t(s,t)
switch(x){case 44:w=p.api()
if(w==null){u=p.a
return u}u=w
u.r=p.e
u.w=p.c
if(p.b!==0){if(w.f==null&&p.a.e!=null){u=p.a.e
t=u.a
s=u.b
r=u.c
u=u.d
w.f=new A.Xq(t,s,r,new A.tb(new Uint8Array(B.bJ(u.c)),u.a,u.b))}if(w.f!=null)w.f.c=p.d}p.a.r.push(w)
break
case 33:u=p.f
v=J.t(u.a,u.d++)
if(J.m(v,255)){u=p.f
if(u.pI(J.t(u.a,u.d++))==="NETSCAPE2.0"){t=J.t(u.a,u.d++)
s=J.t(u.a,u.d++)
if(t===3&&s===1)p.r=u.bJ()}else p.TE()}else if(J.m(v,249)){u=p.f
u.toString
p.bcj(u)}else p.TE()
break
case 59:u=p.a
return u
default:break}}}catch(q){}return p.a},
bcj(d){var x,w,v,u=this
d.cZ()
x=d.cZ()
u.e=d.bJ()
u.d=d.cZ()
d.cZ()
u.c=D.c.O(x,2)&7
u.b=x&1
w=d.Ql(1,0)
if(J.t(w.a,w.d)===44){++d.d
v=u.api()
if(v==null)return
v.r=u.e
v.w=u.c
if(u.b!==0){w=v.f
if(w==null&&u.a.e!=null){w=u.a.e
w.toString
w=v.f=A.cGi(w)}if(w!=null)w.c=u.d}u.a.r.push(v)}},
jq(d){var x,w,v,u=this,t=u.f
if(t==null||u.a==null)return null
x=u.a.r
w=x.length
if(d>=w)return null
v=x[d]
t.toString
x=v.x
x===$&&B.b()
t.d=x
return u.aUk(v)},
mY(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null
if(a5.nV(a8)==null)return a6
x=a5.a.r.length
if(x===1)return a5.jq(0)
for(x=y.p,w=a6,v=w,u=0;t=a5.a.r,u<t.length;++u){a9=t[u]
s=a5.jq(u)
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
if(t){v.mO(s)
w=s
continue}l=a9.f
if(!(l!=null)){t=a5.a.e
t.toString
l=t}t=o?a6:p.a
if(t==null)t=0
r=o?a6:p.b
if(r==null)r=0
k=A.hc(a6,a6,C.a_,0,C.b3,r,a6,0,1,l.aco(),C.a_,t,!1)
t=a9.w
if(t===2){t=a5.a.c.a
t=!D.ac.gS(t)?t[0]:0
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
if(r!=null)r.mS(0,new A.wy(t))}else if(t!==3){t=a9.a
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
t=t==null?a6:t.geA()
t.toString
f=B.D(x,x)
for(r=l.b,e=0;e<r;++e)f.n(0,e,l.bsW(t.my(e),t.mw(e),t.mu(e),t.nR(e)))
t=k.a
if(t==null)d=a6
else{t=t.gh0(t)
t=new Uint8Array(t,0)
d=t}if(d==null){t=k.a
t=t==null?a6:t.gh0(t)
if(t==null)t=new Uint8Array(0).buffer
d=new Uint8Array(t,0)}t=w.a
if(t==null)a0=a6
else{t=t.gh0(t)
t=new Uint8Array(t,0)
a0=t}if(a0==null){t=w.a
t=t==null?a6:t.gh0(t)
if(t==null)t=new Uint8Array(0).buffer
a0=new Uint8Array(t,0)}for(a1=d.length,a2=0;a2<a1;++a2){a3=f.i(0,a0[a2])
if(a3!==-1){a3.toString
d[a2]=a3}}}}k.y=s.y
for(t=s.a,t=t.gX(t);t.q();){a4=t.gK(t)
if(a4.gaP(a4)!==0){r=a4.gmt(a4)
q=a9.a
q===$&&B.b()
p=a4.gne(a4)
o=a9.b
o===$&&B.b()
k.wS(r+q,p+o,a4)}}v.mO(k)
w=k}return v},
api(){var x,w=this.f
if(w.d>=w.c)return null
x=new A.anc()
x.aOG(w);++this.f.d
this.TE()
return x},
aUk(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.w==null){n.w=new Uint8Array(256)
n.x=new Uint8Array(4095)
n.y=new Uint8Array(4096)
n.z=new Uint32Array(4096)}x=n.Q=n.f.cZ()
w=D.c.ex(1,x)
n.dy=w;++w
n.dx=w
n.db=w+1;++x
n.cy=x
n.cx=D.c.ex(1,x)
n.ay=0
n.CW=4098
n.at=n.ax=0
n.w[0]=0
x=n.z
x.toString
D.ct.jP(x,0,4096,4098)
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
s=A.hc(m,m,C.a_,0,C.b3,w,m,0,1,t.aco(),C.a_,x,!1)
r=new Uint8Array(x)
x=d.e
x===$&&B.b()
if(x){x=d.b
x===$&&B.b()
for(w=x+w,q=0,p=0;q<4;++q)for(o=x+C.anr[q];o<w;o+=C.aqI[q],++p){if(!n.ajk(r))return s
n.aqX(s,o,t,r)}}else for(o=0;o<w;++o){if(!n.ajk(r))return s
n.aqX(s,o,t,r)}return s},
aqX(d,e,f,g){var x,w,v,u=g.length
for(x=0;x<u;++x){w=g[x]
v=d.a
if(v!=null)v.eQ(x,e,w,0,0)}},
aji(){var x,w,v,u,t,s=this,r=s.f.pI(6)
if(r!=="GIF87a"&&r!=="GIF89a")return!1
x=s.a
x.toString
x.a=s.f.bJ()
x=s.a
x.toString
x.b=s.f.bJ()
w=s.f.cZ()
x=s.a
x.toString
x.c=new A.wy(new Uint8Array(B.bJ(B.a([s.f.cZ()],y.t))));++s.f.d
if((w&128)!==0){x=s.a
x.toString
x.e=A.ckR(D.c.ee(1,(w&7)+1))
for(v=0;v<s.a.e.b;++v){x=s.f
x=J.t(x.a,x.d++)
u=s.f
u=J.t(u.a,u.d++)
t=s.f
t=J.t(t.a,t.d++)
s.a.e.d.oC(v,x,u,t)}}s.a.toString
return!0},
ajk(d){var x=this,w=x.as
w.toString
x.as=w-d.length
if(!x.aUy(d))return!1
if(x.as===0)x.TE()
return!0},
TE(){var x,w,v,u=this.f
if(u.d>=u.c)return!0
x=u.cZ()
while(!0){if(x!==0){u=this.f
u=u.d<u.c}else u=!1
if(!u)break
u=this.f
w=u.d+=x
if(w>=u.c)return!0
v=u.a
u.d=w+1
x=J.t(v,w)}return!0},
aUy(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=m.ay
if(l>4095)return!1
x=d.length
w=0
if(l!==0)while(!0){if(!(l!==0&&w<x))break
v=w+1
u=m.x
u===$&&B.b()
l=m.ay=l-1
d[w]=u[l]
w=v}for(;w<x;){t=m.ch=m.aUx()
if(t==null)return!1
l=m.dx
if(t===l)return!1
u=m.dy
if(t===u){for(u=m.z,s=0;s<=4095;++s)u[s]=4098
m.db=l+1
l=m.Q+1
m.cy=l
m.cx=D.c.ex(1,l)
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
u=m.a2a(l,t,u)
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
p[r]=m.a2a(u,l,o)}else{p===$&&B.b()
q.toString
p[r]=m.a2a(u,q,o)}}l=m.ch
l.toString
m.CW=l}}return!0},
aUx(){var x,w,v,u,t=this
if(t.cy>12)return null
for(;x=t.ax,w=t.cy,x<w;){x=t.aR9()
x.toString
w=t.at
v=t.ax
t.at=(w|D.c.ex(x,v))>>>0
t.ax=v+8}v=t.at
u=C.awP[w]
t.at=D.c.fD(v,w)
t.ax=x-w
x=t.db
if(x<4097){++x
t.db=x
x=x>t.cx&&w<12}else x=!1
if(x){t.cx=t.cx<<1>>>0
t.cy=w+1}return v&u},
a2a(d,e,f){var x,w,v=0
while(!0){if(e>f){x=v+1
w=v<=4095
v=x}else w=!1
if(!w)break
if(e>4095)return 4098
e=d[e]}return e},
aR9(){var x,w,v=this,u=v.w,t=u[0]
if(t===0){u[0]=v.f.cZ()
u=v.w
t=u[0]
if(t===0)return null
D.ac.h9(u,1,1+t,v.f.ks(t).ht())
u=v.w
x=u[1]
u[1]=2
u[0]=u[0]-1}else{w=u[1]
u[1]=w+1
x=u[w]
u[0]=t-1}return x}}
A.MA.prototype={
J(){return"IcoType."+this.b}}
A.baW.prototype={}
A.amB.prototype={}
A.baU.prototype={
gb_(d){return D.c.aW(A.Ea.prototype.gb_.call(this,0),2)},
gN0(){return!(this.d===40&&this.f===32)&&A.Ea.prototype.gN0.call(this)}}
A.baV.prototype={
mY(d,e,f){var x,w,v,u=this,t=A.cB(e,!1,null,0)
u.a=t
x=u.b=A.cl9(t)
if(x==null)return null
t=x.e.length
if(t===1)return u.jq(0)
for(w=null,v=0;v<u.b.e.length;++v){f=u.jq(v)
if(f==null)continue
if(w==null){f.w=C.b3
w=f}else w.mO(f)}return w},
jq(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=this.a
if(a6!=null){x=this.b
x=x==null||a7>=x.d}else x=!0
if(x)return a5
w=this.b.e[a7]
x=a6.a
a6=a6.b+w.e
v=w.d
u=J.aR_(x,a6,a6+v)
t=new A.at3(A.clC())
y.D.a(u)
if(t.GK(u))return t.d7(0,u)
s=A.pn(!1,14)
s.kv(19778)
s.hZ(v)
s.hZ(0)
s.hZ(0)
a6=A.cB(u,!1,a5,0)
x=A.ci7(A.cB(B.c3(s.c.buffer,0,s.a),!1,a5,0))
v=a6.d
r=a6.ai()
q=a6.ai()
p=$.hq()
p[0]=q
q=$.kX()
o=q[0]
p[0]=a6.ai()
q=q[0]
n=a6.bJ()
m=a6.bJ()
l=C.KG[a6.ai()]
a6.ai()
p[0]=a6.ai()
p[0]=a6.ai()
p=a6.ai()
a6.ai()
k=new A.baU(x,o,q,r,n,m,l,p,v)
k.afd(a6,x)
if(r!==40&&n!==1)return a5
j=p===0&&m<=8?40+4*D.c.ee(1,m):40+4*p
x.b=j
s.a-=4
s.hZ(j)
i=A.cB(u,!1,a5,0)
h=new A.b1r(!0)
h.a=i
h.b=k
g=h.jq(0)
if(m>=32)return g
f=32-D.c.al(o,32)
e=D.c.aW(f===32?o:o+f,8)
for(a6=1/q<0,x=q<0,q=q===0,d=0;d<D.c.aW(A.Ea.prototype.gb_.call(k,0),2);++d){if(!(q?a6:x))a0=d
else{v=g.a
v=v==null?a5:v.b
a0=(v==null?0:v)-1-d}a1=i.jl(e)
i.d=i.d+(a1.c-a1.d)
v=g.a
a2=v==null?a5:v.e2(0,a0,a5)
if(a2==null)a2=new A.f0()
for(a3=0;a3<o;){v=J.t(a1.a,a1.d++)
a4=7
while(!0){if(!(a4>-1&&a3<o))break
if((v&D.c.ex(1,a4))>>>0!==0)a2.saP(0,0)
a2.q();++a3;--a4}}}return g}}
A.agr.prototype={}
A.FA.prototype={}
A.FB.prototype={}
A.XR.prototype={
gj(d){return this.a}}
A.bcL.prototype={}
A.AS.prototype={}
A.bcN.prototype={
OY(d){var x,w,v,u,t,s=this,r=A.cB(d,!0,null,0)
s.a=r
x=r.Ql(2,0)
if(J.t(x.a,x.d)!==255||J.t(x.a,x.d+1)!==216)return!1
if(s.EB()!==216)return!1
w=s.EB()
v=!1
u=!1
while(!0){if(w!==217){r=s.a
r=r.d<r.c}else r=!1
if(!r)break
t=s.a.bJ()
if(t<2)break
r=s.a
r.d=r.d+(t-2)
switch(w){case 192:case 193:case 194:v=!0
break
case 218:u=!0
break}w=s.EB()}return v&&u},
pH(d,e){var x,w,v,u,t,s,r,q,p=this
p.a=A.cB(e,!0,null,0)
p.bcb()
if(p.x.length!==1)throw B.e(A.bR("Only single frame JPEGs supported"))
for(x=p.Q,w=0;v=p.d,u=v.z,w<u.length;++w){t=v.y.i(0,u[w])
v=t.a
u=p.d
s=u.f
r=t.b
q=u.r
u=p.aRh(u,t)
v=v===1&&s===2?1:0
x.push(new A.agr(u,v,r===1&&q===2?1:0))}},
bcb(){var x,w,v,u,t,s=this
if(s.EB()!==216)throw B.e(A.bR("Start Of Image marker not found."))
x=s.EB()
while(!0){if(x!==217){w=s.a
w===$&&B.b()
w=w.d<w.c}else w=!1
if(!w)break
w=s.a
w===$&&B.b()
v=w.bJ()
if(v<2)B.Z(A.bR("Invalid Block"))
w=s.a
u=w.jl(v-2)
w.d=w.d+(u.c-u.d)
switch(x){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:s.bcc(x,u)
break
case 219:s.bcg(u)
break
case 192:case 193:case 194:s.bci(x,u)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw B.e(A.bR("Unhandled frame type "+D.c.kQ(x,16)))
case 196:s.bcf(u)
break
case 221:s.e=u.bJ()
break
case 218:s.bct(u)
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
break}if(x!==0)throw B.e(A.bR("Unknown JPEG marker "+D.c.kQ(x,16)))
break}x=s.EB()}},
EB(){var x,w=this,v=w.a
v===$&&B.b()
if(v.d>=v.c)return 0
do{do{x=w.a.cZ()
if(x!==255){v=w.a
v=v.d<v.c}else v=!1}while(v)
v=w.a
if(v.d>=v.c)return x
do{x=w.a.cZ()
if(x===255){v=w.a
v=v.d<v.c}else v=!1}while(v)
if(x===0){v=w.a
v=v.d<v.c}else v=!1}while(v)
return x},
bch(d){if(d.ai()!==1165519206)return
if(d.bJ()!==0)return
this.r.pH(0,d)},
bcc(d,e){var x,w,v,u,t=this,s=e
if(d===224){x=s
w=!1
if(J.t(x.a,x.d)===74){x=s
if(J.t(x.a,x.d+1)===70){x=s
if(J.t(x.a,x.d+2)===73){x=s
if(J.t(x.a,x.d+3)===70){x=s
x=J.t(x.a,x.d+4)===0}else x=w}else x=w}else x=w}else x=w
if(x){x=new A.bcR()
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
s.Ql(14+3*w*v,14)}}else if(d===225)t.bch(s)
else if(d===238){x=s
w=!1
if(J.t(x.a,x.d)===65){x=s
if(J.t(x.a,x.d+1)===100){x=s
if(J.t(x.a,x.d+2)===111){x=s
if(J.t(x.a,x.d+3)===98){x=s
if(J.t(x.a,x.d+4)===101){x=s
x=J.t(x.a,x.d+5)===0}else x=w}else x=w}else x=w}else x=w}else x=w
if(x){t.c=new A.bcL()
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
x.d=J.t(w.a,w.d+11)}}else if(d===254)try{s.bCs()}catch(u){B.aX(u)}},
bcg(d){var x,w,v,u,t,s,r,q
for(x=d.c,w=this.w;v=d.d,u=v<x,u;){u=d.a
d.d=v+1
v=J.t(u,v)
t=D.c.O(v,4)
s=v&15
if(s>=4)throw B.e(A.bR("Invalid number of quantization tables"))
v=w[s]
if(v==null){v=new Int16Array(64)
w[s]=v}for(u=t!==0,r=0;r<64;++r){q=u?d.bJ():J.t(d.a,d.d++)
v[C.rp[r]]=q}}if(u)throw B.e(A.bR("Bad length for DQT block"))},
bci(d,e){var x,w,v,u,t,s,r,q=this
if(q.d!=null)throw B.e(A.bR("Duplicate JPG frame data found."))
x=q.d=new A.anp(B.D(y.p,y.c),B.a([],y.t))
x.b=d===194
x.c=e.cZ()
x=q.d
x.toString
x.d=e.bJ()
x=q.d
x.toString
x.e=e.bJ()
w=e.cZ()
for(x=q.w,v=0;v<w;++v){u=J.t(e.a,e.d++)
t=J.t(e.a,e.d++)
s=D.c.O(t,4)
r=J.t(e.a,e.d++)
q.d.z.push(u)
q.d.y.n(0,u,new A.AS(s&15,t&15,x,r))}q.d.bBi()
q.x.push(q.d)},
bcf(d){var x,w,v,u,t,s,r,q,p,o,n,m
for(x=d.c,w=this.z,v=this.y;u=d.d,u<x;){t=d.a
d.d=u+1
s=J.t(t,u)
r=new Uint8Array(16)
for(q=0,p=0;p<16;++p){r[p]=J.t(d.a,d.d++)
q+=r[p]}o=d.jl(q)
d.d=d.d+(o.c-o.d)
n=o.ht()
if((s&16)!==0){s-=16
m=v}else m=w
if(m.length<=s)D.b.st(m,s+1)
m[s]=this.aRm(r,n)}},
bct(d){var x,w,v,u,t,s,r,q=this,p=d.cZ()
if(p<1||p>4)throw B.e(A.bR("Invalid SOS block"))
x=B.xl(p,new A.bcO(q,d),!0,y.c)
w=d.cZ()
v=d.cZ()
u=d.cZ()
t=D.c.O(u,4)
s=q.a
s===$&&B.b()
r=q.d
t=new A.anq(s,r,x,q.e,w,v,t&15,u&15)
s=r.w
s===$&&B.b()
t.f=s
t.r=r.b
t.vS(0)},
aRm(d,e){var x,w,v,u,t,s,r,q,p,o,n=B.a([],y.bd),m=16
while(!0){if(!(m>0&&d[m-1]===0))break;--m}x=y.T
n.push(new A.Rs(B.a([],x)))
w=n[0]
for(v=0,u=0;u<m;){for(t=0;t<d[u];++t){w=n.pop()
s=w.a
r=s.length
q=w.b
if(r<=q)D.b.st(s,q+1)
s[w.b]=new A.XR(e[v])
for(;s=w.b,s>0;)w=n.pop()
w.b=s+1
n.push(w)
for(;n.length<=u;w=p){s=B.a([],x)
p=new A.Rs(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.st(r,o+1)
r[w.b]=new A.FB(s)}++v}++u
if(u<m){s=B.a([],x)
p=new A.Rs(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.st(r,o+1)
r[w.b]=new A.FB(s)
w=p}}return n[0].a},
aRh(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.e
d===$&&B.b()
x=a1.f
x===$&&B.b()
w=d<<3>>>0
v=new Int32Array(64)
u=new Uint8Array(64)
t=B.bv(x*8,null,!1,y.ac)
for(s=a1.c,r=a1.d,q=0,p=0;p<x;++p){o=p<<3>>>0
for(n=0;n<8;++n,q=m){m=q+1
t[q]=new Uint8Array(w)}for(l=0;l<d;++l){k=s[r]
k.toString
j=a1.r
j===$&&B.b()
A.d_2(k,j[p][l],u,v)
i=l<<3>>>0
for(h=0,g=0;g<8;++g){f=t[o+g]
for(n=0;n<8;++n,h=e){e=h+1
f[i+n]=u[h]}}}}return t}}
A.Rs.prototype={}
A.anp.prototype={
bBi(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.y,w=B.r(x).c,v=B.fH(x,x.r,w);v.q();){u=x.i(0,v.d)
g.f=Math.max(g.f,u.a)
g.r=Math.max(g.r,u.b)}v=g.e
v.toString
g.w=D.d.eR(v/8/g.f)
v=g.d
v.toString
g.x=D.d.eR(v/8/g.r)
for(w=B.fH(x,x.r,w),v=y.h,t=y.bp;w.q();){s=x.i(0,w.d)
s.toString
r=g.e
r.toString
q=s.a
p=D.d.eR(D.d.eR(r/8)*q/g.f)
r=g.d
r.toString
o=s.b
n=D.d.eR(D.d.eR(r/8)*o/g.r)
m=g.w*q
l=g.x*o
k=J.ip(l,t)
for(j=0;j<l;++j){i=J.ip(m,v)
for(h=0;h<m;++h)i[h]=new Int32Array(64)
k[j]=i}s.e=p
s.f=n
s.r=k}}}
A.bcR.prototype={}
A.anq.prototype={
vS(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.y,g=h.length,f=i.r
f.toString
if(f)if(i.Q===0)x=i.at===0?i.gaUd():i.gaUf()
else x=i.at===0?i.gaU4():i.gaU6()
else x=i.gaUa()
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
p=D.c.fJ(t,v)
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
for(l=0;l<m;++l)for(k=0;k<n;++k)i.aUl(r,x,t,l,k)}++t;++q}}i.ch=0
v=J.t(w.a,w.d)
j=J.t(w.a,w.d+1)
if(v===255)if(j>=208&&j<=215)w.d+=2
else break}},
AK(){var x,w=this,v=w.ch
if(v>0){--v
w.ch=v
return D.c.nk(w.ay,v)&1}v=w.a
if(v.d>=v.c)return null
x=v.cZ()
w.ay=x
if(x===255)if(v.cZ()!==0)return null
w.ch=7
return D.c.O(w.ay,7)&1},
K2(d){var x,w=new A.FB(d)
for(;x=this.AK(),x!=null;){if(w instanceof A.FB)w=w.a[x]
if(w instanceof A.XR)return w.a}return null},
a3W(d){var x,w
for(x=0;d>0;){w=this.AK()
if(w==null)return null
x=(x<<1|w)>>>0;--d}return x},
Kq(d){var x
if(d==null)return 0
if(d===1)return this.AK()===1?1:-1
x=this.a3W(d)
if(x==null)return 0
if(x>=D.c.ex(1,d-1))return x
return x+D.c.ee(-1,d)+1},
aUb(d,e){var x,w,v,u,t,s,r=this,q=d.w
q===$&&B.b()
x=r.K2(q)
w=x===0?0:r.Kq(x)
q=d.y
q===$&&B.b()
q+=w
d.y=q
e[0]=q
for(v=1;v<64;){q=d.x
q===$&&B.b()
u=r.K2(q)
if(u==null)break
t=u&15
s=u>>>4
if(t===0){if(s<15)break
v+=16
continue}v+=s
t=r.Kq(t)
e[C.rp[v]]=t;++v}},
aUe(d,e){var x,w,v=d.w
v===$&&B.b()
x=this.K2(v)
w=x===0?0:D.c.ee(this.Kq(x),this.ax)
v=d.y
v===$&&B.b()
v+=w
d.y=v
e[0]=v},
aUg(d,e){var x=e[0],w=this.AK()
w.toString
e[0]=(x|D.c.ee(w,this.ax))>>>0},
aU5(d,e){var x,w,v,u,t,s=this,r=s.CW
if(r>0){s.CW=r-1
return}x=s.Q
w=s.as
for(r=s.ax;x<=w;){v=d.x
v===$&&B.b()
v=s.K2(v)
v.toString
u=v&15
t=v>>>4
if(u===0){if(t<15){r=s.a3W(t)
r.toString
s.CW=r+D.c.ee(1,t)-1
break}x+=16
continue}x+=t
e[C.rp[x]]=s.Kq(u)*D.c.ee(1,r);++x}},
aU7(d,e){var x,w,v,u,t,s,r,q=this,p=q.Q,o=q.as
$label0$1:for(x=q.ax,w=0;p<=o;){v=C.rp[p]
u=q.cx
switch(u){case 0:u=d.x
u===$&&B.b()
t=q.K2(u)
if(t==null)throw B.e(A.bR("Invalid progressive encoding"))
s=t&15
w=t>>>4
if(s===0)if(w<15){u=q.a3W(w)
u.toString
q.CW=u+D.c.ee(1,w)
q.cx=4}else{q.cx=1
w=16}else{if(s!==1)throw B.e(A.bR("invalid ACn encoding"))
q.cy=q.Kq(s)
q.cx=w!==0?2:3}continue $label0$1
case 1:case 2:r=e[v]
if(r!==0){u=q.AK()
u.toString
e[v]=r+D.c.ee(u,x)}else{--w
if(w===0)q.cx=u===2?3:0}break
case 3:u=e[v]
if(u!==0){r=q.AK()
r.toString
e[v]=u+D.c.ee(r,x)}else{u=q.cy
u===$&&B.b()
e[v]=D.c.ee(u,x)
q.cx=0}break
case 4:u=e[v]
if(u!==0){r=q.AK()
r.toString
e[v]=u+D.c.ee(r,x)}break}++p}if(q.cx===4)if(--q.CW===0)q.cx=0},
aUl(d,e,f,g,h){var x,w,v=this.f
v===$&&B.b()
x=D.c.fJ(f,v)*d.b+g
w=D.c.al(f,v)*d.a+h
v=d.r
v===$&&B.b()
if(x>=v.length)return
v=v[x]
if(w>=v.length)return
e.$2(d,v[w])}}
A.ano.prototype={
mY(d,e,f){var x=A.clP()
x.pH(0,e)
if(x.x.length!==1)throw B.e(A.bR("only single frame JPEGs supported"))
return A.cYy(x)},
d7(d,e){return this.mY(0,e,null)}}
A.bcM.prototype={
J(){return"JpegChroma."+this.b}}
A.bcP.prototype={
aGG(d){d=D.d.D(D.c.b8(d,1,100))
if(this.at===d)return
this.b4G(d<50?D.d.fw(5000/d):D.c.fw(200-d*2))
this.at=d},
brZ(b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=A.pn(!0,8192)
a8.xQ(a9,216)
a8.xQ(a9,224)
a9.kv(16)
a9.aS(74)
a9.aS(70)
a9.aS(73)
a9.aS(70)
a9.aS(0)
a9.aS(1)
a9.aS(1)
a9.aS(0)
a9.kv(1)
a9.kv(1)
a9.aS(0)
a9.aS(0)
a8.bjX(a9,b0.gvZ())
a8.bk0(a9)
x=b0.gcL(0)
w=b0.gb_(0)
a8.xQ(a9,192)
a9.kv(17)
a9.aS(8)
a9.kv(w)
a9.kv(x)
a9.aS(3)
a9.aS(1)
x=b1===C.HR
a9.aS(x?17:34)
a9.aS(0)
a9.aS(2)
a9.aS(17)
a9.aS(1)
a9.aS(3)
a9.aS(17)
a9.aS(1)
a8.bk_(a9)
a8.xQ(a9,218)
a9.kv(12)
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
v=b0.gcL(0)
u=b0.gb_(0)
if(x){t=new Float32Array(64)
s=new Float32Array(64)
r=new Float32Array(64)
for(x=a8.c,w=a8.d,q=0,p=0,o=0,n=0;n<u;n+=8)for(m=0;m<v;m+=8){a8.J4(b0,m,n,v,u,t,s,r)
l=a8.e
k=a8.r
k===$&&B.b()
q=a8.vv(a9,t,x,q,l,k)
k=a8.f
l=a8.w
l===$&&B.b()
p=a8.vv(a9,s,w,p,k,l)
o=a8.vv(a9,r,w,o,a8.f,a8.w)}}else{x=y.C
t=J.ju(4,x)
for(j=0;j<4;++j)t[j]=new Float32Array(64)
s=J.ju(4,x)
for(j=0;j<4;++j)s[j]=new Float32Array(64)
r=J.ju(4,x)
for(j=0;j<4;++j)r[j]=new Float32Array(64)
i=new Float32Array(64)
h=new Float32Array(64)
for(x=a8.c,w=a8.d,q=0,p=0,o=0,n=0;n<u;n+=16)for(l=n+8,m=0;m<v;m+=16){k=t[0]
g=s[0]
f=r[0]
a8.J4(b0,m,n,v,u,k,g,f)
e=m+8
d=t[1]
a0=s[1]
a1=r[1]
a8.J4(b0,e,n,v,u,d,a0,a1)
a2=t[2]
a3=s[2]
a4=r[2]
a8.J4(b0,m,l,v,u,a2,a3,a4)
a5=t[3]
a6=s[3]
a7=r[3]
a8.J4(b0,e,l,v,u,a5,a6,a7)
a8.ai4(i,g,a0,a3,a6)
a8.ai4(h,f,a1,a4,a7)
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
a8.vA(a9,B.a([D.c.ex(1,x)-1,x],y.t))}a8.xQ(a9,217)
return B.c3(a9.c.buffer,0,a9.a)},
J4(d,e,f,g,h,i,j,k){var x,w,v,u,t,s,r,q,p,o,n
for(x=this.as,w=f+1,v=0;v<64;++v){u=v>>>3
t=f+u
s=e+(v&7)
if(t>=h)t-=w+u-h
if(s>=g)s-=s-g+1
r=d.a
q=r==null?null:r.e2(s,t,null)
if(q==null)q=new A.f0()
if(q.gda()!==C.a_)q=q.nx(C.a_)
p=D.d.D(q.gaC(q))
o=D.d.D(q.gaL())
n=D.d.D(q.gaM(q))
i[v]=D.c.O(x[p]+x[o+256]+x[n+512],16)-128
j[v]=D.c.O(x[p+768]+x[o+1024]+x[n+1280],16)-128
k[v]=D.c.O(x[p+1280]+x[o+1536]+x[n+1792],16)-128}},
ai4(d,e,f,g,h){var x,w,v
for(x=0;x<64;++x){if(x<32)w=D.c.al(x,8)<4?e:f
else w=D.c.al(x,8)<4?g:h
v=(D.c.aW(D.c.al(x,32),8)<<4>>>0)+(D.c.al(x,4)<<1>>>0)
d[x]=(w[v]+w[v+1]+w[v+8]+w[v+9])/4}},
xQ(d,e){d.aS(255)
d.aS(e&255)},
b4G(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(x=i.a,w=0;w<64;++w){v=D.d.fw((C.azB[w]*d+50)/100)
if(v<1)v=1
else if(v>255)v=255
x[C.ui[w]]=v}for(u=i.b,t=0;t<64;++t){s=D.d.fw((C.azC[t]*d+50)/100)
if(s<1)s=1
else if(s>255)s=255
u[C.ui[t]]=s}for(r=i.c,q=i.d,p=0,o=0;o<8;++o)for(n=0;n<8;++n){m=C.ui[p]
l=x[m]
k=C.OB[o]
j=C.OB[n]
r[p]=1/(l*k*j*8)
q[p]=1/(u[m]*k*j*8);++p}},
R_(d,e){var x,w,v,u,t,s=y.t,r=B.a([B.a([],s)],y.cQ)
for(x=0,w=0,v=1;v<=16;++v){for(u=1;u<=d[v];++u){t=e[w]
if(r.length<=t)D.b.st(r,t+1)
r[t]=B.a([x,v],s);++w;++x}x*=2}return r},
b4v(){var x,w,v,u,t,s,r,q,p,o,n
for(x=this.y,w=this.x,v=y.t,u=1,t=2,s=1;s<=15;++s){for(r=u;r<t;++r){q=32767+r
x[q]=s
w[q]=B.a([r,s],v)}for(q=t-1,p=-q,o=-u;p<=o;++p){n=32767+p
x[n]=s
w[n]=B.a([q+p,s],v)}u=u<<1>>>0
t=t<<1>>>0}},
b4H(){var x,w
for(x=this.as,w=0;w<256;++w){x[w]=19595*w
x[w+256]=38470*w
x[w+512]=7471*w+32768
x[w+768]=-11059*w
x[w+1024]=-21709*w
x[w+1280]=32768*w+8421375
x[w+1536]=-27439*w
x[w+1792]=-5329*w}},
aWP(d3,d4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2
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
bjX(d,e){var x,w
if(e.gS(0))return
x=A.pn(!1,8192)
e.j3(0,x)
w=B.c3(x.c.buffer,0,x.a)
this.xQ(d,225)
d.kv(w.length+8)
d.hZ(1165519206)
d.kv(0)
d.m_(w)},
bk0(d){var x,w,v
this.xQ(d,219)
d.kv(132)
d.aS(0)
for(x=this.a,w=0;w<64;++w)d.aS(x[w])
d.aS(1)
for(x=this.b,v=0;v<64;++v)d.aS(x[v])},
bk_(d){var x,w,v,u,t,s,r,q
this.xQ(d,196)
d.kv(418)
d.aS(0)
for(x=0;x<16;){++x
d.aS(C.Iu[x])}for(w=0;w<=11;++w)d.aS(C.pN[w])
d.aS(16)
for(v=0;v<16;){++v
d.aS(C.Iw[v])}for(u=0;u<=161;++u)d.aS(C.KT[u])
d.aS(1)
for(t=0;t<16;){++t
d.aS(C.Iv[t])}for(s=0;s<=11;++s)d.aS(C.pN[s])
d.aS(17)
for(r=0;r<16;){++r
d.aS(C.Ix[r])}for(q=0;q<=161;++q)d.aS(C.I2[q])},
vv(d,e,f,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=a2[0],h=a2[240],g=j.aWP(e,f)
for(x=j.Q,w=0;w<64;++w)x[C.ui[w]]=g[w]
v=x[0]
v.toString
u=v-a0
if(u===0){t=a1[0]
t.toString
j.vA(d,t)}else{s=32767+u
a1.toString
t=j.y[s]
t.toString
t=a1[t]
t.toString
j.vA(d,t)
t=j.x[s]
t.toString
j.vA(d,t)}r=63
while(!0){if(!(r>0&&x[r]===0))break;--r}if(r===0){i.toString
j.vA(d,i)
return v}for(t=j.y,q=j.x,p=1;p<=r;){o=p
while(!0){if(!(x[o]===0&&o<=r))break;++o}n=o-p
if(n>=16){m=D.c.O(n,4)
for(l=1;l<=m;++l){h.toString
j.vA(d,h)}n&=15}k=x[o]
k.toString
s=32767+k
k=t[s]
k.toString
k=a2[(n<<4>>>0)+k]
k.toString
j.vA(d,k)
k=q[s]
k.toString
j.vA(d,k)
p=o+1}if(r!==63){i.toString
j.vA(d,i)}return v},
vA(d,e){var x,w=this,v=e[0],u=e[1]-1
for(;u>=0;){if((v&D.c.ex(1,u))>>>0!==0)w.ax=(w.ax|D.c.ex(1,w.ay))>>>0;--u
if(--w.ay<0){x=w.ax
if(x===255){d.aS(255)
d.aS(0)}else d.aS(x)
w.ay=7
w.ax=0}}}}
A.Oj.prototype={
J(){return"PngDisposeMode."+this.b}}
A.a0x.prototype={
J(){return"PngBlendMode."+this.b}}
A.a0y.prototype={}
A.and.prototype={}
A.BL.prototype={
J(){return"PngFilterType."+this.b}}
A.bnd.prototype={}
A.bcm.prototype={}
A.at3.prototype={
GK(d){var x,w=A.cB(d,!0,null,0).ks(8)
for(x=0;x<8;++x)if(J.t(w.a,w.d+x)!==D.ME[x])return!1
return!0},
nV(b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0=A.cB(b1,!0,a9,0)
a8.d=b0
x=b0.ks(8)
for(w=0;w<8;++w)if(J.t(x.a,x.d+w)!==D.ME[w])return a9
for(b0=a8.a,v=b0.cx,u=y.t,t=b0.cy,s=y.L,r=b0.ax;!0;){q=a8.d
p=q.d-q.b
o=q.ai()
n=a8.d.pI(4)
switch(n){case"tEXt":q=a8.d
m=q.jl(o)
q.d=q.d+(m.c-m.d)
l=m.ht()
k=l.length
for(w=0;w<k;++w)if(l[w]===0){q=w+1
r.n(0,D.dz.d7(0,new Uint8Array(l.subarray(0,B.pT(0,w,k)))),D.dz.d7(0,new Uint8Array(l.subarray(q,B.pT(q,a9,k)))))
break}a8.d.d+=4
break
case"pHYs":q=a8.d
m=q.jl(o)
q.d=q.d+(m.c-m.d)
j=A.bY(m,a9,0)
j.ai()
j.ai()
J.t(j.a,j.d++)
a8.d.d+=4
break
case"IHDR":q=a8.d
m=q.jl(o)
q.d=q.d+(m.c-m.d)
i=A.bY(m,a9,0)
h=i.ht()
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
break}if(a8.d.ai()!==A.w4(h,A.w4(new B.dN(n),0)))throw B.e(A.bR("Invalid "+n+" checksum"))
break
case"PLTE":q=a8.d
m=q.jl(o)
q.d=q.d+(m.c-m.d)
b0.w=m.ht()
if(a8.d.ai()!==A.w4(s.a(b0.w),A.w4(new B.dN(n),0)))throw B.e(A.bR("Invalid "+n+" checksum"))
break
case"tRNS":q=a8.d
m=q.jl(o)
q.d=q.d+(m.c-m.d)
b0.x=m.ht()
g=a8.d.ai()
q=b0.x
q.toString
if(g!==A.w4(q,A.w4(new B.dN(n),0)))throw B.e(A.bR("Invalid "+n+" checksum"))
break
case"IEND":a8.d.d+=4
break
case"gAMA":if(o!==4)throw B.e(A.bR("Invalid gAMA chunk"))
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
a2=a8.d.bJ()
a3=a8.d.bJ()
q=a8.d
q=J.t(q.a,q.d++)
f=a8.d
f=J.t(f.a,f.d++)
q=C.ayF[q]
f=C.atg[f]
v.push(new A.and(B.a([],u),e,d,a0,a1,a2,a3,q,f))
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
if(f!=null){q=D.ac.p(f,q)?0:255
f=new Uint8Array(4)
f[0]=a5
f[1]=a6
f[2]=a7
f[3]=q
b0.z=new A.L0(f)}else{q=new Uint8Array(3)
q[0]=a5
q[1]=a6
q[2]=a7
b0.z=new A.agn(q)}}else if(q===0||q===4){a8.d.bJ()
o-=2}else if(q===2||q===6){q=a8.d
q.bJ()
q.bJ()
q.bJ()
o-=24}if(o>0)a8.d.d+=o
a8.d.d+=4
break
case"iCCP":b0.Q=a8.d.Ok()
q=a8.d
J.t(q.a,q.d++)
q=b0.Q
f=a8.d
m=f.jl(o-(q.length+2))
f.d=f.d+(m.c-m.d)
b0.at=m.ht()
a8.d.d+=4
break
default:q=a8.d
f=q.d+=o
q.d=f+4
break}if(n==="IEND")break
q=a8.d
if(q.d>=q.c)return a9}return b0},
jq(b8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2=null,b3=b0.a,b4=b3.a,b5=b3.b,b6=b3.cx,b7=b6.length
if(b7===0||b8===0){w=B.a([],y.a)
b6=b3.cy
v=b6.length
for(u=0,t=0;t<v;++t){b7=b0.d
b7===$&&B.b()
b7.d=b6[t]
s=b7.ai()
r=b0.d.pI(4)
b7=b0.d
q=b7.jl(s)
b7.d=b7.d+(q.c-q.d)
p=q.ht()
u+=p.length
w.push(p)
if(b0.d.ai()!==A.w4(p,A.w4(new B.dN(r),0)))throw B.e(A.bR("Invalid "+r+" checksum"))}b2=new Uint8Array(u)
for(b6=w.length,o=0,n=0;n<w.length;w.length===b6||(0,B.O)(w),++n){p=w[n]
J.c9K(b2,o,p)
o+=p.length}}else{if(b8>=b7)throw B.e(A.bR("Invalid Frame Number: "+b8))
m=b6[b8]
b4=m.b
b5=m.c
w=B.a([],y.a)
for(b6=m.y,u=0,t=0;t<b6.length;++t){b7=b0.d
b7===$&&B.b()
b7.d=b6[t]
s=b7.ai()
b7=b0.d
b7.pI(4)
b7.d+=4
b7=b0.d
q=b7.jl(s-4)
b7.d=b7.d+(q.c-q.d)
p=q.ht()
u+=p.length
w.push(p)}b2=new Uint8Array(u)
for(b6=w.length,o=0,n=0;n<w.length;w.length===b6||(0,B.O)(w),++n){p=w[n]
J.c9K(b2,o,p)
o+=p.length}}b6=b3.d
l=1
if(!(b6===3))if(!(b6===0)){if(b6===4)b6=2
else b6=b6===6?4:3
l=b6}x=null
try{x=C.i9.Bj(A.AI(b2,1,b1,0),!1)}catch(k){return b1}j=A.cB(x,!0,b1,0)
b0.c=b0.b=0
i=b1
if(b3.d===3){b6=b3.w
if(b6!=null){h=b6.length/3|0
g=b3.x
b7=g!=null
f=b7?g.length:0
e=b7?4:3
i=new A.tb(new Uint8Array(h*e),h,e)
for(b7=e===4,t=0,d=0;t<h;++t,d+=3){a0=b7&&t<f?g[t]:255
i.PW(t,b6[d],b6[d+1],b6[d+2],a0)}}}if(b3.d===0&&b3.x!=null&&i==null&&b3.c<=8){g=b3.x
a1=g.length
b6=b3.c
h=D.c.ex(1,b6)
i=new A.tb(new Uint8Array(h*4),h,4)
if(b6===1)a2=255
else if(b6===2)a2=85
else{b6=b6===4?17:1
a2=b6}for(t=0;t<h;++t){a3=t*a2
i.PW(t,a3,a3,a3,255)}for(b6=i.b,b7=3<b6,a4=i.c,t=0;t<a1;t+=2){a5=(g[t]&255)<<8|g[t+1]&255
if(a5<h)if(b7)a4[a5*b6+3]=0}}b6=b3.c
if(b6===1)a6=C.eU
else if(b6===2)a6=C.fx
else{if(b6===4)b7=C.fy
else b7=b6===16?C.bW:C.a_
a6=b7}b7=b3.d
if(b7===0&&b3.x!=null&&b6>8)l=4
a7=A.hc(b1,b1,a6,0,C.b3,b5,b1,0,b7===2&&b3.x!=null?4:l,i,C.a_,b4,!1)
a8=b3.a
a9=b3.b
b3.a=b4
b3.b=b5
b0.e=0
if(b3.r!==0){b6=b5+7>>>3
b0.AI(j,a7,0,0,8,8,b4+7>>>3,b6)
b7=b4+3
b0.AI(j,a7,4,0,8,8,b7>>>3,b6)
b6=b5+3
b0.AI(j,a7,0,4,4,8,b7>>>2,b6>>>3)
b7=b4+1
b0.AI(j,a7,2,0,4,4,b7>>>2,b6>>>2)
b6=b5+1
b0.AI(j,a7,0,2,2,4,b7>>>1,b6>>>2)
b0.AI(j,a7,1,0,2,2,b4>>>1,b6>>>1)
b0.AI(j,a7,0,1,1,2,b4,b5>>>1)}else b0.bbu(j,a7)
b3.a=a8
b3.b=a9
b6=b3.at
if(b6!=null)a7.c=new A.XT(b3.Q,C.yK,b6)
b3=b3.ax
if(b3.a!==0)a7.bkP(b3)
return a7},
mY(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(g.nV(e)==null)return f
x=g.a
w=x.cx
v=w.length
if(v===0){x=g.jq(0)
x.toString
return x}for(v=y.g,u=f,t=u,s=0;s<x.ch;++s){a0=w[s]
r=g.jq(s)
if(r==null)continue
if(t==null||u==null){t=r.auc(r.gpC())
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
o=o===(n==null?0:n)&&a0.d===0&&a0.e===0&&a0.x===C.a_O}else o=!1
if(o){q=a0.f
r.y=D.d.D((q===0||a0.r===0?0:q/a0.r)*1000)
t.mO(r)
u=r
continue}i=t.x
u=A.Aw((i===$?t.x=B.a([],v):i)[q],!1,!1)
h=p.w
if(h===C.a_Q){q=p.d
o=p.e
n=x.z
if(n==null){n=new Uint8Array(4)
m=new A.L0(n)
n[0]=0
n[1]=0
n[2]=0
n[3]=0
n=m}A.cXY(u,!1,n,q,q+p.b-1,o,o+p.c-1)}else if(h===C.a_R&&s>1){i=t.x
if(i===$)i=t.x=B.a([],v)
q=p.d
o=p.e
n=p.b
m=p.c
u=A.cfa(u,i[s-2],C.x2,m,n,q,o,m,n,q,o)}q=a0.f
u.y=D.d.D((q===0||a0.r===0?0:q/a0.r)*1000)
q=a0.x===C.a_P?C.x2:C.x1
u=A.cfa(u,r,q,f,f,a0.d,a0.e,f,f,f,f)
t.mO(u)}return t},
d7(d,e){return this.mY(0,e,null)},
AI(a0,a1,a2,a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=e.d
if(d===4)x=2
else if(d===2)x=3
else{d=d===6?4:1
x=d}w=x*e.c
v=D.c.O(w+7,3)
u=D.c.O(w*a6+7,3)
t=B.a([null,null],y.e)
s=B.a([0,0,0,0],y.t)
for(e=a4>1,r=a4-a2,q=a3,p=0,o=0;p<a7;++p,q+=a5,++f.e){n=C.JI[J.t(a0.a,a0.d++)]
m=a0.jl(u)
a0.d=a0.d+(m.c-m.d)
d=m.ht()
t[o]=d
o=1-o
f.aqr(n,v,d,t[o])
f.c=f.b=0
l=new A.le(d,0,d.length,0,!0)
for(d=r<=1,k=a2,j=0;j<a6;++j,k+=a4){f.anx(l,s)
i=a1.a
i=i==null?null:i.e2(k,q,null)
f.a4p(i==null?new A.f0():i,s)
if(!d||e)for(h=0;h<a4;++h)for(i=q+h,g=0;g<r;++g)f.a4p(a1.jV(k+g,i),s)}}},
bbu(d,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a,e=f.d
if(e===4)x=2
else if(e===2)x=3
else{e=e===6?4:1
x=e}w=x*f.c
v=f.a
u=f.b
t=D.c.O(v*w+7,3)
s=D.c.O(w+7,3)
r=B.bv(t,0,!1,y.p)
q=B.a([r,r],y.S)
p=B.a([0,0,0,0],y.t)
f=a0.a
o=f.gX(f)
o.q()
for(n=0,m=0;n<u;++n,m=j){l=C.JI[J.t(d.a,d.d++)]
k=d.jl(t)
d.d=d.d+(k.c-k.d)
f=k.ht()
q[m]=f
j=1-m
g.aqr(l,s,f,q[j])
g.c=g.b=0
f=q[m]
e=f.length
i=new A.le(f,0,e,0,!0)
for(h=0;h<v;++h){g.anx(i,p)
g.a4p(o.gK(o),p)
o.q()}}},
aqr(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=f.length
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
default:throw B.e(A.bR("Invalid filter value: "+d.k(0)))}},
rC(d,e){var x,w,v,u,t=this
if(e===0)return 0
if(e===8)return d.cZ()
if(e===16)return d.bJ()
for(x=d.c;w=t.c,w<e;){w=d.d
if(w>=x)throw B.e(A.bR("Invalid PNG data."))
v=d.a
d.d=w+1
w=J.t(v,w)
v=t.c
t.b=D.c.ex(w,v)
t.c=v+8}if(e===1)u=1
else if(e===2)u=3
else{if(e===4)x=15
else x=0
u=x}x=w-e
w=D.c.fD(t.b,x)
t.c=x
return w&u},
anx(d,e){var x=this,w=x.a,v=w.d
switch(v){case 0:e[0]=x.rC(d,w.c)
return
case 2:e[0]=x.rC(d,w.c)
e[1]=x.rC(d,w.c)
e[2]=x.rC(d,w.c)
return
case 3:e[0]=x.rC(d,w.c)
return
case 4:e[0]=x.rC(d,w.c)
e[1]=x.rC(d,w.c)
return
case 6:e[0]=x.rC(d,w.c)
e[1]=x.rC(d,w.c)
e[2]=x.rC(d,w.c)
e[3]=x.rC(d,w.c)
return}throw B.e(A.bR("Invalid color type: "+v+"."))},
a4p(d,e){var x,w,v,u,t,s,r,q,p=this.a,o=p.d
switch(o){case 0:x=p.x
if(x!=null&&p.c>8){p=x[0]
o=x[1]
w=e[0]
d.i1(w,w,w,w!==((p&255)<<24|o&255)>>>0?d.gc2():0)
return}d.jY(e[0],0,0)
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
if(v!==((o&255)<<8|t&255)||w!==((s&255)<<8|r&255)||u!==((q&255)<<8|p&255)){d.i1(v,w,u,d.gc2())
return}}d.jY(v,w,u)
return
case 3:d.sdW(0,e[0])
return
case 4:d.jY(e[0],e[1],0)
return
case 6:d.i1(e[0],e[1],e[2],e[3])
return}throw B.e(A.bR("Invalid color type: "+o+"."))}}
A.at4.prototype={
J(){return"PngFilter."+this.b}}
A.bnb.prototype={
mO(d){var x,w,v,u,t,s,r,q,p,o=this,n=8192,m=d.a
m=m==null?null:m.gqN()
if(!(m===!0&&d.gda()!==C.bW))m=d.gmg()<8&&!d.gqF()&&d.gpC()>1
else m=!0
if(m)d=d.nx(C.a_)
if(o.w==null){m=A.pn(!0,n)
o.w=m
m.m_(B.a([137,80,78,71,13,10,26,10],y.t))
x=A.pn(!0,n)
x.hZ(d.gcL(0))
x.hZ(d.gb_(0))
x.aS(d.gmg())
if(d.gqF())m=3
else if(d.gpC()===1)m=0
else if(d.gpC()===2)m=4
else m=d.gpC()===3?2:6
x.aS(m)
x.aS(0)
x.aS(0)
x.aS(0)
m=o.w
m.toString
o.rK(m,"IHDR",B.c3(x.c.buffer,0,x.a))
m=d.c
if(m!=null){x=A.pn(!0,n)
x.m_(new B.dN(m.a))
x.aS(0)
x.aS(0)
x.m_(m.bnZ())
m=o.w
m.toString
o.rK(m,"iCCP",B.c3(x.c.buffer,0,x.a))}if(d.gqF()){m=o.a
if(m!=null){m=m.a
m===$&&B.b()
o.arT(m)}else{m=d.a
m=m==null?null:m.geA()
m.toString
o.arT(m)}}if(o.r){x=A.pn(!0,n)
m=o.e
m===$&&B.b()
x.hZ(m)
x.hZ(o.c)
m=o.w
m.toString
o.rK(m,"acTL",B.c3(x.c.buffer,0,x.a))}}w=d.gqF()?1:d.gpC()
v=d.gda()===C.bW?2:1
m=d.gcL(0)
u=d.gb_(0)
t=d.gb_(0)
s=new Uint8Array(m*u*w*v+t)
o.bbv(0,d,s)
r=C.Ev.avI(s,o.d)
m=d.d
if(m!=null)for(m=B.fH(m,m.r,B.r(m).c);m.q();){u=m.d
t=d.d.i(0,u)
t.toString
x=new A.ary(!0,new Uint8Array(8192))
x.m_(D.oR.cH(u))
x.aS(0)
x.m_(D.oR.cH(t))
u=o.w
u.toString
t=x.c.buffer
q=x.a
t=new Uint8Array(t,0,q)
o.rK(u,"tEXt",t)}if(o.r){x=A.pn(!0,n)
x.hZ(o.f)
x.hZ(d.gcL(0))
x.hZ(d.gb_(0))
x.hZ(0)
x.hZ(0)
x.kv(d.y)
x.kv(1000)
x.aS(1)
x.aS(0)
m=o.w
m.toString
o.rK(m,"fcTL",B.c3(x.c.buffer,0,x.a));++o.f}if(o.f<=1){m=o.w
m.toString
o.rK(m,"IDAT",r)}else{p=A.pn(!0,n)
p.hZ(o.f)
p.m_(r)
m=o.w
m.toString
o.rK(m,"fdAT",B.c3(p.c.buffer,0,p.a));++o.f}},
bt1(d){var x,w=this,v=w.w
if(v==null)return null
w.rK(v,"IEND",B.a([],y.t))
w.f=0
v=w.w
x=B.c3(v.c.buffer,0,v.a)
w.w=null
return x},
bs_(d,e){var x,w,v,u,t,s=this,r=d.gkl().length
if(r<=1){s.e=1
s.r=!1
s.mO(d)}else{r=d.gkl().length
s.e=r
s.r=r>1
s.c=d.r
if(d.gqF()){x=new A.bjy(new Int32Array(256))
x.b76(256)
x.bkx(d)
s.a=x
for(r=d.gkl(),w=r.length,v=0;v<r.length;r.length===w||(0,B.O)(r),++v){u=r[v]
if(u!==d){x.aly(u)
x.aiJ()
x.alb()
x.ahm()}}}for(r=d.gkl(),w=r.length,v=0;v<r.length;r.length===w||(0,B.O)(r),++v){u=r[v]
t=s.a
if(t!=null)s.mO(t.aDJ(u))
else s.mO(u)}}r=s.bt1(0)
r.toString
return r},
arT(d){var x,w,v,u=this
if(d.gda()===C.a_&&d.b===3&&d.a===256){x=u.w
x.toString
u.rK(x,"PLTE",B.c3(d.gh0(d),0,null))}else{x=d.a
w=A.pn(!0,x*3)
for(v=0;v<x;++v){w.aS(D.d.D(d.my(v)))
w.aS(D.d.D(d.mw(v)))
w.aS(D.d.D(d.mu(v)))}x=u.w
x.toString
u.rK(x,"PLTE",B.c3(w.c.buffer,0,w.a))}if(d.b===4){x=d.a
w=A.pn(!0,x)
for(v=0;v<x;++v)w.aS(D.d.D(d.nR(v)))
x=u.w
x.toString
u.rK(x,"tRNS",B.c3(w.c.buffer,0,w.a))}},
rK(d,e,f){d.hZ(f.length)
d.m_(new B.dN(e))
d.m_(f)
d.hZ(A.w4(f,A.w4(new B.dN(e),0)))},
bbv(d,e,f){var x,w,v=this,u=e.gqF()?C.aRj:v.b,t=e.gh0(0),s=e.a.gr4(),r=e.gqF()?1:e.gpC(),q=D.c.O(r*e.gmg()+7,3),p=e.gmg()+7>>>3,o=u.a,n=0,m=0,l=null,k=0
while(!0){x=e.a
x=x==null?null:x.b
if(!(k<(x==null?0:x)))break
w=new Uint8Array(t,m,s)
m+=s
switch(o){case 1:n=v.aX2(w,p,q,f,n)
break
case 2:n=v.aX3(w,l,p,f,n)
break
case 3:n=v.aWX(w,l,p,q,f,n)
break
case 4:n=v.aX_(w,l,p,q,f,n)
break
default:n=v.aWZ(w,p,f,n)
break}++k
l=w}},
arN(d,e,f,g,h){var x;--d
for(;d>=0;h=x){x=h+1
g[h]=e[f+d];--d}return h},
aWZ(d,e,f,g){var x,w,v=g+1
f[g]=0
x=d.length
if(e===1)for(g=v,w=0;w<x;++w,g=v){v=g+1
f[g]=d[w]}else for(g=v,w=0;w<x;w+=e)g=this.arN(e,d,w,f,g)
return g},
aX2(d,e,f,g,h){var x,w,v,u,t,s,r=h+1
g[h]=1
for(h=r,x=0;x<f;x+=e)h=this.arN(e,d,x,g,h)
w=d.length
for(v=e-1,x=f;x<w;x+=e)for(u=v,t=0;t<e;++t,--u,h=r){r=h+1
s=x+u
g[h]=d[s]-d[s-f]&255}return h},
aX3(d,e,f,g,h){var x,w,v,u,t,s,r,q=h+1
g[h]=2
x=d.length
for(w=f-1,v=e!=null,h=q,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,h=q){r=v?e[u+t]:0
q=h+1
g[h]=d[u+t]-r&255}return h},
aWX(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o=i+1
h[i]=3
x=d.length
for(w=f-1,v=e==null,i=o,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=o){r=u+t
q=r<g?0:d[r-g]
p=v?0:e[r]
o=i+1
h[i]=d[r]-(q+p>>>1)}return i},
b9t(d,e,f){var x=d+e-f,w=x>d?x-d:d-x,v=x>e?x-e:e-x,u=x>f?x-f:f-x
if(w<=v&&w<=u)return d
else if(v<=u)return e
return f},
aX_(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m=i+1
h[i]=4
x=d.length
for(w=f-1,v=e==null,i=m,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=m){r=u+t
q=r<g
p=q?0:d[r-g]
o=v?0:e[r]
n=q||v?0:e[r-g]
m=i+1
h[i]=d[r]-this.b9t(p,o,n)&255}return i}}
A.BM.prototype={
J(){return"PnmFormat."+this.b}}
A.He.prototype={}
A.bne.prototype={
GK(d){var x
this.b=A.cB(d,!1,null,0)
x=this.RM()
if(x==="P1"||x==="P2"||x==="P5"||x==="P3"||x==="P6")return!0
return!1},
mY(d,e,f){if(this.nV(e)==null)return null
return this.jq(0)},
nV(d){var x,w,v=this
v.b=A.cB(d,!1,null,0)
x=v.RM()
if(x==="P1"){w=v.a=new A.He(C.mP)
w.e=C.a_S}else if(x==="P2"){w=v.a=new A.He(C.mP)
w.e=C.a_T}else if(x==="P5"){w=v.a=new A.He(C.mP)
w.e=C.B_}else if(x==="P3"){w=v.a=new A.He(C.mP)
w.e=C.a_U}else if(x==="P6"){w=v.a=new A.He(C.mP)
w.e=C.B0}else return v.b=null
w.a=v.Km()
w=v.a
w.toString
w.b=v.Km()
w=v.a
if(w.a===0||w.b===0)return v.a=v.b=null
return w},
jq(d){var x,w,v,u,t,s=this,r=null,q=s.a
if(q==null)return r
x=q.e
if(x===C.a_S){x=q.a
w=A.hc(r,r,C.eU,0,C.b3,q.b,r,0,1,r,C.a_,x,!1)
for(q=w.a,q=q.gX(q);q.q();){v=q.gK(q)
if(s.RM()==="1")v.jY(1,1,1)
else v.jY(0,0,0)}return w}else if(x===C.a_T||x===C.B_){u=s.Km()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.hc(r,r,s.aws(u),0,C.b3,q,r,0,1,r,C.a_,x,!1)
for(q=w.a,q=q.gX(q);q.q();){v=q.gK(q)
t=s.T3(s.a.e,u)
v.jY(t,t,t)}return w}else if(x===C.a_U||x===C.B0){u=s.Km()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.hc(r,r,s.aws(u),0,C.b3,q,r,0,3,r,C.a_,x,!1)
for(q=w.a,q=q.gX(q);q.q();)q.gK(q).jY(s.T3(s.a.e,u),s.T3(s.a.e,u),s.T3(s.a.e,u))
return w}return r},
aws(d){if(d>255)return C.bW
if(d>15)return C.a_
if(d>3)return C.fy
if(d>1)return C.fx
return C.eU},
T3(d,e){if(d===C.B_||d===C.B0)return this.b.cZ()
return this.Km()},
Km(){var x,w,v=this.RM()
if(J.b0(v)===0)return 0
try{x=B.dF(v,null)
return x}catch(w){return 0}},
RM(){var x,w,v,u,t=this.b
if(t==null)return""
x=this.c
if(x.length!==0)return D.b.ix(x,0)
w=D.e.dq(t.bCr())
if(w.length===0)return""
for(;D.e.bl(w,"#");)w=D.e.dq(this.b.aAc(70))
t=y.U
v=B.H(new B.ai(B.a(w.split(" "),y.s),new A.bnf(),t),!0,t.h("u.E"))
for(u=0;u<v.length;++u)if(J.aQZ(v[u],"#")){D.b.st(v,u)
break}D.b.H(x,v)
if(x.length===0)return""
return D.b.ix(x,0)}}
A.a0R.prototype={
bCq(d,e,f,g,h,i,j){switch(h){case 0:g.toString
this.bcs(d,e,f,g)
break
case 1:if(i==null)i=this.bco(d,f)
g.toString
this.bcr(d,e,f,g,i,j)
break
default:throw B.e(A.bR("Unsupported compression: "+h))}},
bco(d,e){var x,w=new Uint16Array(e)
for(x=0;x<e;++x)w[x]=d.bJ()
return w},
bcs(d,e,f,g){var x,w=e*f
if(g===16)w*=2
if(w>d.c-d.d){x=new Uint8Array(w)
this.c=x
D.ac.jP(x,0,w,255)
return}this.c=d.ks(w).ht()},
bcr(d,e,f,g,h,i){var x,w,v,u,t,s,r=e*f
if(g===16)r*=2
x=new Uint8Array(r)
this.c=x
w=i*f
if(w>=h.length){D.ac.jP(x,0,r,255)
return}for(v=0,u=0;u<f;++u,w=t){t=w+1
s=d.jl(h[w])
d.d=d.d+(s.c-s.d)
this.aUq(s,this.c,v)
v+=e}},
aUq(d,e,f){var x,w,v,u,t,s,r
for(x=d.c,w=e.length;v=d.d,v<x;){u=d.a
d.d=v+1
v=J.t(u,v)
$.nH()[0]=v
t=$.oQ()[0]
if(t<0){t=1-t
v=J.t(d.a,d.d++)
if(f+t>w)t=w-f
for(s=0;s<t;++s,f=r){r=f+1
e[f]=v}}else{++t
if(f+t>w)t=w-f
for(s=0;s<t;++s,f=r){r=f+1
e[f]=J.t(d.a,d.d++)}}}},
gbT(d){return this.a}}
A.th.prototype={
J(){return"PsdColorMode."+this.b}}
A.boa.prototype={
gaya(){$===$&&B.b()
return $},
aP9(d){var x,w,v=this
v.as=A.cB(d,!0,null,0)
v.bbX()
if(v.c!==943870035)return
x=v.as.ai()
v.as.ks(x)
x=v.as.ai()
v.as.ks(x)
x=v.as.ai()
v.as.ks(x)
w=v.as
v.at=w.ks(w.c-w.d)},
vS(d){var x,w=this
if(w.c===943870035){x=w.as
x===$&&B.b()
x=x==null}else x=!0
if(x)return!1
w.bcp()
w.at=w.as=null
return!0},
av5(){if(!this.vS(0))return null
return this.bD2()},
bD2(){var x,w=this,v=null,u=w.y
if(u!=null)return u
u=w.a
u=A.hc(v,v,C.a_,0,C.b3,w.b,v,0,4,v,C.a_,u,!1)
w.y=u
u.P(0)
for(x=0;u=w.gaya(),D.c.Ik(x,u.gt(u));++x)w.gaya().i(0,x)
u=w.y
u.toString
return u},
bbX(){var x,w,v=this,u=v.as
u===$&&B.b()
v.c=u.ai()
u=v.as.bJ()
v.d=u
if(u!==1){v.c=0
return}x=v.as.ks(6)
for(w=0;w<6;++w)if(J.t(x.a,x.d+w)!==0){v.c=0
return}v.e=v.as.bJ()
v.b=v.as.ai()
v.a=v.as.ai()
v.f=v.as.bJ()
v.r=C.aA8[v.as.bJ()]},
bcp(){var x,w,v,u,t,s,r=this,q=r.at
q===$&&B.b()
q.d=q.b
x=q.bJ()
if(x===1){q=r.b
w=r.e
w===$&&B.b()
v=q*w
u=new Uint16Array(v)
for(t=0;t<v;++t)u[t]=r.at.bJ()}else u=null
r.x=B.a([],y.Y)
t=0
while(!0){q=r.e
q===$&&B.b()
if(!(t<q))break
q=r.x
w=r.at
w.toString
s=t===3?-1:t
s=new A.a0R(s)
s.bCq(w,r.a,r.b,r.f,x,u,t)
q.push(s);++t}r.y=A.cKc(r.r,r.f,r.a,r.b,r.x)}}
A.bo9.prototype={
mY(d,e,f){var x,w,v,u=null,t=A.cnC(e)
this.a=t
x=1
if(x===1){t=t.av5()
return t}for(w=u,v=0;v<x;++v){t=this.a
f=t==null?u:t.av5()
if(f==null)continue
if(w==null){f.w=C.aiK
w=f}else w.mO(f)}return w}}
A.atB.prototype={}
A.xO.prototype={
aF(d,e){return new A.xO(this.a*e,this.b*e,this.c*e)},
a6(d,e){return new A.xO(this.a+e.a,this.b+e.b,this.c+e.c)},
a4(d,e){return new A.xO(this.a-e.a,this.b-e.b,this.c-e.c)}}
A.lp.prototype={
aF(d,e){var x=this
return new A.lp(x.a*e,x.b*e,x.c*e,x.d*e)},
a6(d,e){var x=this
return new A.lp(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
a4(d,e){var x=this
return new A.lp(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)}}
A.a0U.prototype={
gb_(d){return this.b}}
A.Oz.prototype={
gb_(d){return this.f}}
A.atA.prototype={
gb_(d){return this.b}}
A.qJ.prototype={
sLE(d){this.a[this.b+1]=d},
P5(){var x=this.e,w=this.d
if(x)return new A.xO(C.f2[w>>>9],C.f2[w>>>4&31],C.ed[w&15])
else return new A.xO(C.ed[w>>>7&15],C.ed[w>>>3&15],C.pC[w&7])},
P7(){var x=this.e,w=this.d
if(x)return new A.lp(C.f2[w>>>9],C.f2[w>>>4&31],C.ed[w&15],255)
else return new A.lp(C.ed[w>>>7&15],C.ed[w>>>3&15],C.pC[w&7],C.pC[w>>>11&7])},
P6(){var x=this.r,w=this.f
if(x)return new A.xO(C.f2[w>>>10],C.f2[w>>>5&31],C.f2[w&31])
else return new A.xO(C.ed[w>>>8&15],C.ed[w>>>4&15],C.ed[w&15])},
P8(){var x=this.r,w=this.f
if(x)return new A.lp(C.f2[w>>>10],C.f2[w>>>5&31],C.f2[w&31],255)
else return new A.lp(C.ed[w>>>8&15],C.ed[w>>>4&15],C.ed[w&15],C.pC[w>>>12&7])},
JG(){var x=this,w=x.c?1:0,v=x.d,u=x.e?1:0,t=x.f,s=x.r?1:0
return(w|(v&16383)<<1|u<<15|(t&32767)<<16|s<<31)>>>0},
tS(d){var x=this,w=x.a[x.b+1]
x.c=(w&1)===1
x.sLE(x.JG())
x.d=w>>>1&16383
x.sLE(x.JG())
x.e=(w>>>15&1)===1
x.sLE(x.JG())
x.f=w>>>16&32767
x.sLE(x.JG())
x.r=(w>>>31&1)===1
x.sLE(x.JG())}}
A.bob.prototype={
nV(d){var x,w=this,v=d.length,u=v-(v>>>1&1431655765)>>>0
u=(u&858993459)+(u>>>2&858993459)
if((u+(u>>>4)>>>0&252645135)*16843009>>>0>>>24===1){x=w.aU9(d)
if(x!=null){w.a=d
return w.b=x}}x=w.aUp(d)
if(x!=null){w.a=d
return w.b=x}x=w.aUn(d)
if(x!=null){w.a=d
return w.b=x}return null},
aUp(d){var x,w,v=A.cB(d,!1,null,0)
if(v.ai()!==52)return null
if(v.ai()!==55727696)return null
x=B.a([0,0,0,0],y.t)
w=new A.Oz(x)
v.ai()
w.b=v.ai()
x[0]=v.cZ()
x[1]=v.cZ()
x[2]=v.cZ()
x[3]=v.cZ()
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
aUn(d){var x,w,v=A.cB(d,!1,null,0)
if(v.ai()!==52)return null
x=new A.a0U()
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
aU9(d){var x,w,v,u,t,s,r=null,q=d.length,p=A.cB(d,!1,r,0)
if(p.ai()!==0)return r
x=new A.atA()
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
if((D.c.ee(64,s)&q)>>>0!==0){u=D.c.ee(16,t)
v=1
break}if((D.c.ee(128,s)&q)>>>0!==0){u=D.c.ee(16,t)
break}++t}if(t===10)return r}if((v+1)*2===4)return r
x.b=x.a=u
return x},
jq(d){var x,w,v=this,u=v.b
if(u==null||v.a==null)return null
if(u instanceof A.atA){u=u.a
x=v.b
x=x.gb_(x)
w=v.a
w.toString
return v.a1w(u,x,w)}else if(u instanceof A.a0U){u=v.a
u.toString
return v.aUm(u)}else if(u instanceof A.Oz){u=v.a
u.toString
return v.aUo(u)}return null},
mY(d,e,f){if(this.nV(e)==null)return null
return this.jq(0)},
aUm(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=d.length
if(m<52||o.b==null)return n
x=o.b
x.toString
y.ab.a(x)
w=A.cB(d,!1,n,0)
w.d+=52
v=x.Q
if(v<1)v=(x.d&4096)!==0?6:1
if(v!==1)return n
u=x.a
t=x.b
if(u*t*x.f/8>m-52)return n
switch(x.d&255){case 16:s=A.hc(n,n,C.a_,0,C.b3,t,n,0,4,n,C.a_,u,!1)
for(x=s.a,x=x.gX(x);x.q();){r=x.gK(x)
u=J.t(w.a,w.d++)
t=J.t(w.a,w.d++)
r.saC(0,t&240)
r.saL((t&15)<<4)
r.saM(0,u&240)
r.saP(0,(u&15)<<4)}return s
case 17:s=A.hc(n,n,C.a_,0,C.b3,t,n,0,4,n,C.a_,u,!1)
for(x=s.a,x=x.gX(x);x.q();){r=x.gK(x)
q=w.bJ()
p=(q&1)!==0?255:0
r.saC(0,q>>>8&248)
r.saL(q>>>3&248)
r.saM(0,(q&62)<<2)
r.saP(0,p)}return s
case 18:s=A.hc(n,n,C.a_,0,C.b3,t,n,0,4,n,C.a_,u,!1)
for(x=s.a,x=x.gX(x);x.q();){r=x.gK(x)
r.saC(0,J.t(w.a,w.d++))
r.saL(J.t(w.a,w.d++))
r.saM(0,J.t(w.a,w.d++))
r.saP(0,J.t(w.a,w.d++))}return s
case 19:s=A.hc(n,n,C.a_,0,C.b3,t,n,0,3,n,C.a_,u,!1)
for(x=s.a,x=x.gX(x);x.q();){r=x.gK(x)
q=w.bJ()
r.saC(0,q>>>8&248)
r.saL(q>>>3&252)
r.saM(0,(q&31)<<3)}return s
case 20:s=A.hc(n,n,C.a_,0,C.b3,t,n,0,3,n,C.a_,u,!1)
for(x=s.a,x=x.gX(x);x.q();){r=x.gK(x)
q=w.bJ()
r.saC(0,(q&31)<<3)
r.saL(q>>>2&248)
r.saM(0,q>>>7&248)}return s
case 21:s=A.hc(n,n,C.a_,0,C.b3,t,n,0,3,n,C.a_,u,!1)
for(x=s.a,x=x.gX(x);x.q();){r=x.gK(x)
r.saC(0,J.t(w.a,w.d++))
r.saL(J.t(w.a,w.d++))
r.saM(0,J.t(w.a,w.d++))}return s
case 22:s=A.hc(n,n,C.a_,0,C.b3,t,n,0,1,n,C.a_,u,!1)
for(x=s.a,x=x.gX(x);x.q();)x.gK(x).saC(0,J.t(w.a,w.d++))
return s
case 23:s=A.hc(n,n,C.a_,0,C.b3,t,n,0,4,n,C.a_,u,!1)
for(x=s.a,x=x.gX(x);x.q();){r=x.gK(x)
u=J.t(w.a,w.d++)
t=J.t(w.a,w.d++)
r.saC(0,t)
r.saL(t)
r.saM(0,t)
r.saP(0,u)}return s
case 24:return n
case 25:return x.y===0?o.ahG(u,t,w.ht()):o.a1w(u,t,w.ht())}return n},
aUo(d){var x,w,v,u=this
if(!(u.b instanceof A.Oz))return null
x=A.cB(d,!1,null,0)
w=x.d+=52
v=y.aM.a(u.b)
x.d=w+v.Q
if(v.c[0]===0)switch(v.b){case 2:return u.ahG(v.r,v.f,x.ht())
case 3:return u.a1w(v.r,v.f,x.ht())}return null},
ahG(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=A.hc(b5,b5,C.a_,0,C.b3,c6,b5,0,3,b5,C.a_,c5,!1),b7=c5/4|0,b8=b7-1,b9=B.oe(c7.buffer,0,b5),c0=new A.qJ(b9),c1=new A.qJ(B.oe(c7.buffer,0,b5)),c2=new A.qJ(B.oe(c7.buffer,0,b5)),c3=new A.qJ(B.oe(c7.buffer,0,b5)),c4=new A.qJ(B.oe(c7.buffer,0,b5))
for(x=0,w=0;x<b7;++x,w+=4)for(v=0,u=0;v<b7;++v,u+=4){c0.b=A.xP(v,x)<<1>>>0
c0.tS(0)
t=b9[c0.b]
s=c0.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&b8)>>>0
o=(p+1&b8)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&b8)>>>0
k=(l+1&b8)>>>0
c1.b=A.xP(l,p)<<1>>>0
c1.tS(0)
c2.b=A.xP(k,p)<<1>>>0
c2.tS(0)
c3.b=A.xP(l,o)<<1>>>0
c3.tS(0)
c4.b=A.xP(k,o)<<1>>>0
c4.tS(0)
j=c1.P5()
i=C.cH[r][0]
h=c2.P5()
g=C.cH[r][1]
f=c3.P5()
e=C.cH[r][2]
d=c4.P5()
a0=C.cH[r][3]
a1=c1.P6()
a2=C.cH[r][0]
a3=c2.P6()
a4=C.cH[r][1]
a5=c3.P6()
a6=C.cH[r][2]
a7=c4.P6()
a8=C.cH[r][3]
a9=C.Nb[s+t&3]
b0=a9[0]
b1=a9[1]
b2=D.c.O((j.a*i+h.a*g+f.a*e+d.a*a0)*b0+(a1.a*a2+a3.a*a4+a5.a*a6+a7.a*a8)*b1,7)
b3=D.c.O((j.b*i+h.b*g+f.b*e+d.b*a0)*b0+(a1.b*a2+a3.b*a4+a5.b*a6+a7.b*a8)*b1,7)
b4=D.c.O((j.c*i+h.c*g+f.c*e+d.c*a0)*b0+(a1.c*a2+a3.c*a4+a5.c*a6+a7.c*a8)*b1,7)
b1=b6.a
if(b1!=null)b1.eQ(m+u,n,b2,b3,b4)
t=t>>>2;++r}}}return b6},
a1w(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=A.hc(a4,a4,C.a_,0,C.b3,b5,a4,0,4,a4,C.a_,b4,!1),a6=b4/4|0,a7=a6-1,a8=B.oe(b6.buffer,0,a4),a9=new A.qJ(a8),b0=new A.qJ(B.oe(b6.buffer,0,a4)),b1=new A.qJ(B.oe(b6.buffer,0,a4)),b2=new A.qJ(B.oe(b6.buffer,0,a4)),b3=new A.qJ(B.oe(b6.buffer,0,a4))
for(x=0,w=0;x<a6;++x,w+=4)for(v=0,u=0;v<a6;++v,u+=4){a9.b=A.xP(v,x)<<1>>>0
a9.tS(0)
t=a8[a9.b]
s=a9.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&a7)>>>0
o=(p+1&a7)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&a7)>>>0
k=(l+1&a7)>>>0
b0.b=A.xP(l,p)<<1>>>0
b0.tS(0)
b1.b=A.xP(k,p)<<1>>>0
b1.tS(0)
b2.b=A.xP(l,o)<<1>>>0
b2.tS(0)
b3.b=A.xP(k,o)<<1>>>0
b3.tS(0)
j=b0.P7()
i=C.cH[r][0]
h=b1.P7()
g=C.cH[r][1]
g=new A.lp(j.a*i,j.b*i,j.c*i,j.d*i).a6(0,new A.lp(h.a*g,h.b*g,h.c*g,h.d*g))
h=b2.P7()
i=C.cH[r][2]
i=g.a6(0,new A.lp(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.P7()
g=C.cH[r][3]
f=i.a6(0,new A.lp(h.a*g,h.b*g,h.c*g,h.d*g))
g=b0.P8()
h=C.cH[r][0]
i=b1.P8()
j=C.cH[r][1]
j=new A.lp(g.a*h,g.b*h,g.c*h,g.d*h).a6(0,new A.lp(i.a*j,i.b*j,i.c*j,i.d*j))
i=b2.P8()
h=C.cH[r][2]
h=j.a6(0,new A.lp(i.a*h,i.b*h,i.c*h,i.d*h))
i=b3.P8()
j=C.cH[r][3]
e=h.a6(0,new A.lp(i.a*j,i.b*j,i.c*j,i.d*j))
d=C.Nb[s+t&3]
j=d[0]
i=d[1]
a0=D.c.O(f.a*j+e.a*i,7)
a1=D.c.O(f.b*j+e.b*i,7)
a2=D.c.O(f.c*j+e.c*i,7)
a3=D.c.O(f.d*d[2]+e.d*d[3],7)
i=a5.a
if(i!=null)i.jX(m+u,n,a0,a1,a2,a3)
t=t>>>2;++r}}}return a5}}
A.axA.prototype={
pH(d,e){var x,w=this
if(e.c-e.d<18)return
w.a=e.cZ()
w.b=e.cZ()
x=e.cZ()
w.c=x<12?C.axU[x]:C.vO
e.bJ()
w.e=e.bJ()
w.f=e.cZ()
e.bJ()
e.bJ()
w.x=e.bJ()
w.y=e.bJ()
w.z=e.cZ()
w.Q=e.cZ()},
ay_(){var x=this,w=x.z
if(w!==8&&w!==16&&w!==24&&w!==32)return!1
w=x.c
if(w===C.hY||w===C.hZ){if(x.e>256||x.b!==1)return!1
w=x.f
if(w!==16&&w!==24&&w!==32)return!1}else if(x.b===1)return!1
return!0}}
A.nu.prototype={
J(){return"TgaImageType."+this.b}}
A.byJ.prototype={
mY(d,e,f){if(this.nV(e)==null)return null
return this.jq(0)},
nV(d){var x,w,v,u,t=this
t.a=new A.axA(C.vO)
x=A.cB(d,!1,null,0)
t.b=x
w=x.ks(18)
t.a.pH(0,w)
if(!t.a.ay_())return null
x=t.b
v=t.a
x.d+=v.a
u=v.c
if(u===C.hY||u===C.hZ)v.as=x.ks(v.e*D.c.O(v.f,3)).ht()
x=t.a
x.ax=t.b.d
return x},
jq(d){var x=this,w=x.a
if(w==null)return null
w=w.c
if(w===C.a2Q)return x.ahF()
else if(w===C.a2P||w===C.hZ)return x.aUs()
else if(w===C.hY)return x.ahF()
return null},
ahA(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=A.cB(d,!1,null,0),m=o.a.f
if(m===16){m=o.b
m===$&&B.b()
x=m.bJ()
w=x>>>7&248
v=x>>>2&248
u=(x&31)<<3
t=(x&32768)!==0?0:255
for(s=0;s<o.a.e;++s){e.tH(s,w)
e.tF(s,v)
e.tE(s,u)
e.tD(s,t)}}else{r=m===32
for(s=0;s<o.a.e;++s){m=J.t(n.a,n.d++)
q=J.t(n.a,n.d++)
p=J.t(n.a,n.d++)
t=r?J.t(n.a,n.d++):255
e.tH(s,p)
e.tF(s,q)
e.tE(s,m)
e.tD(s,t)}}},
aUs(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=h.z,f=g===16,e=f||g===32,d=h.x,a0=h.y,a1=e?4:3
h=h.c
x=A.hc(i,i,C.a_,0,C.b3,a0,i,0,a1,i,C.a_,d,h===C.hY||h===C.hZ)
h=x.a
if((h==null?i:h.geA())!=null){h=j.a.as
h.toString
d=x.a
d=d==null?i:d.geA()
d.toString
j.ahA(h,d)}w=x.gcL(0)
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
if(f){p=d.bJ()
o=p>>>7&248
n=p>>>2&248
m=(p&31)<<3
l=(p&32768)!==0?0:255
for(r=0;r<t;++r){q=u+1
d=x.a
if(d!=null)d.jX(u,v,o,n,m,l)
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
if(k!=null)k.jX(u,v,a1,a0,d,l)
if(q>=w){--v
if(v<0){u=s
break}u=0}else u=q}}}else if(h)for(r=0;r<t;++r){d=j.b
d=J.t(d.a,d.d++)
q=u+1
a0=x.a
if(a0!=null)a0.m0(u,v,d)
if(q>=w){--v
if(v<0){u=s
break}u=0}else u=q}else if(f)for(r=0;r<t;++r){p=j.b.bJ()
l=(p&32768)!==0?0:255
q=u+1
d=x.a
if(d!=null)d.jX(u,v,p>>>7&248,p>>>2&248,(p&31)<<3,l)
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
if(k!=null)k.jX(u,v,a1,a0,d,l)
if(q>=w){--v
if(v<0){u=s
break}u=0}else u=q}if(u>=w){--v
if(v<0)break
u=0}}return x},
ahF(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b
k===$&&B.b()
x=m.a
k.d=x.ax
w=x.z
k=w===16
v=!0
if(!k)if(w!==32){u=x.c
if(u===C.hY||u===C.hZ){u=x.f
u=u===16||u===32}else u=!1
v=u}u=x.x
t=x.y
s=v?4:3
x=x.c
r=A.hc(l,l,C.a_,0,C.b3,t,l,0,s,l,C.a_,u,x===C.hY||x===C.hZ)
x=m.a
u=x.c
if(u===C.hY||u===C.hZ){x=x.as
x.toString
u=r.a
u=u==null?l:u.geA()
u.toString
m.ahA(x,u)}if(w===8)for(q=r.gb_(0)-1;q>=0;--q){p=0
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
o=m.b.bJ()
n=(o&32768)!==0?0:255
k=r.a
if(k!=null)k.jX(p,q,o>>>7&248,o>>>2&248,(o&31)<<3,n);++p}}else for(q=r.gb_(0)-1;q>=0;--q){p=0
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
if(t!=null)t.jX(p,q,u,x,k,n);++p}}return r}}
A.byX.prototype={
iG(d){var x,w,v,u,t=this
if(d===0)return 0
if(t.c===0){t.c=8
t.b=t.a.cZ()}for(x=t.a,w=0;v=t.c,d>v;){w=D.c.ex(w,v)+(t.b&C.mh[v])
d-=v
t.c=8
t.b=J.t(x.a,x.d++)}if(d>0){if(v===0){t.c=8
t.b=x.cZ()}x=D.c.ex(w,d)
v=t.b
u=t.c-d
w=x+(D.c.nk(v,u)&C.mh[d])
t.c=u}return w}}
A.axF.prototype={
k(d){var x=this,w=x.a,v=$.c9x().i(0,w)
if(v!=null)return v.a+": "+x.b.k(0)+" "+x.c
return"<"+w+">: "+x.b.k(0)+" "+x.c},
or(d){var x,w,v,u=this,t=u.e
if(t!=null)return t
t=u.f
t.d=u.d
x=u.c
w=u.b
v=t.ks(x*(w!==C.T?C.iz[w.a]:0))
switch(w.a){case 1:return u.e=new A.rR(new Uint8Array(B.bJ(v.ks(x).ht())))
case 2:return u.e=new A.At(x===0?"":v.pI(x-1))
case 7:return u.e=new A.rR(new Uint8Array(B.bJ(v.ks(x).ht())))
case 3:return u.e=A.clk(v,x)
case 4:return u.e=A.clf(v,x)
case 5:return u.e=A.clg(v,x)
case 11:return u.e=A.clm(v,x)
case 12:return u.e=A.cle(v,x)
case 6:return u.e=new A.uR(new Int8Array(B.bJ(B.cmx(v.ht().buffer,0,x))))
case 8:return u.e=A.clj(v,x)
case 9:return u.e=A.clh(v,x)
case 10:return u.e=A.cli(v,x)
case 0:return null}},
gj(d){return this.e}}
A.byZ.prototype={
bqn(d,e,f,g){var x,w,v,u=this
u.r=e
u.x=u.w=0
x=D.c.aW(u.a+7,8)
for(w=0,v=0;v<g;++v){u.a1u(d,w,f)
w+=x}},
a1u(d,e,f){var x,w,v,u,t,s,r,q,p=this
p.d=0
for(x=p.a,w=!0;f<x;){for(;w;){v=p.xy(10)
u=C.Mu[v]
t=D.c.O(u,1)&15
if(t===12){u=C.tl[(v<<2&12|p.o_(2))>>>0]
s=D.c.O(u,1)
f+=D.c.O(u,4)&4095
p.kZ(4-(s&7))}else if(t===0)throw B.e(A.bR("TIFFFaxDecoder0"))
else if(t===15)throw B.e(A.bR("TIFFFaxDecoder1"))
else{f+=D.c.O(u,5)&2047
p.kZ(10-t)
if((u&1)===0){p.f[p.d++]=f
w=!1}}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}for(;!w;){u=C.Km[p.o_(4)]
r=u>>>5&2047
q=!0
if(r===100){u=C.Qk[p.xy(9)]
t=D.c.O(u,1)&15
r=D.c.O(u,5)&2047
if(t===12){p.kZ(5)
u=C.tl[p.o_(4)]
s=D.c.O(u,1)
r=D.c.O(u,4)&4095
p.oV(d,e,f,r)
f+=r
p.kZ(4-(s&7))}else if(t===15)throw B.e(A.bR("TIFFFaxDecoder2"))
else{p.oV(d,e,f,r)
f+=r
p.kZ(9-t)
if((u&1)===0){p.f[p.d++]=f
w=q}}}else{if(r===200){u=C.Ip[p.o_(2)]
r=u>>>5&2047
p.oV(d,e,f,r)
f+=r
p.kZ(2-(u>>>1&15))
p.f[p.d++]=f}else{p.oV(d,e,f,r)
f+=r
p.kZ(4-(u>>>1&15))
p.f[p.d++]=f}w=q}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}}p.f[p.d++]=f},
bqo(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.r=a0
e.z=3
e.x=e.w=0
x=e.a
w=D.c.aW(x+7,8)
v=B.bv(2,null,!1,y.u)
e.at=a3&1
e.as=a3>>>2&1
if(e.ant()!==1)throw B.e(A.bR("TIFFFaxDecoder3"))
e.a1u(d,0,a1)
for(u=w,t=1;t<a2;++t){if(e.ant()===0){s=e.e
e.e=e.f
e.f=s
e.y=0
r=a1
q=-1
p=!0
o=0
while(!0){r.toString
if(!(r<x))break
e.ajp(q,p,v)
n=v[0]
m=v[1]
l=C.Pk[e.o_(7)]&255
k=l>>>3&15
j=l&7
if(k===0){if(!p){m.toString
e.oV(d,u,r,m-r)}e.kZ(7-j)
r=m
q=r}else if(k===1){e.kZ(7-j)
i=o+1
h=i+1
if(p){r+=e.R7()
e.f[o]=r
g=e.R6()
e.oV(d,u,r,g)
r+=g
e.f[i]=r}else{g=e.R6()
e.oV(d,u,r,g)
r+=g
e.f[o]=r
r+=e.R7()
e.f[i]=r}o=h
q=r}else{if(k<=8){n.toString
f=n+(k-5)
i=o+1
e.f[o]=f
p=!p
if(p)e.oV(d,u,r,f-r)
e.kZ(7-j)}else throw B.e(A.bR("TIFFFaxDecoder4"))
r=f
o=i
q=r}}e.f[o]=r
e.d=o+1}else e.a1u(d,u,a1)
u+=w}},
bqt(a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.r=a4
a2.z=4
a2.x=a2.w=0
x=a2.a
w=D.c.aW(x+7,8)
v=B.bv(2,null,!1,y.u)
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
a2.ajp(p,o,v)
m=v[0]
l=v[1]
k=C.Pk[a2.o_(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
a2.oV(a3,t,q,l-q)}a2.kZ(7-i)
q=l
p=q}else if(j===1){a2.kZ(7-i)
h=n+1
g=h+1
if(o){q+=a2.R7()
r[n]=q
f=a2.R6()
a2.oV(a3,t,q,f)
q+=f
r[h]=q}else{f=a2.R6()
a2.oV(a3,t,q,f)
q+=f
r[n]=q
q+=a2.R7()
r[h]=q}n=g
p=q}else if(j<=8){m.toString
e=m+(j-5)
h=n+1
r[n]=e
o=!o
if(o)a2.oV(a3,t,q,e-q)
a2.kZ(7-i)
q=e
n=h
p=q}else if(j===11){if(a2.o_(3)!==7)throw B.e(A.bR("TIFFFaxDecoder5"))
for(d=0,a0=!1;!a0;o=a1){for(;a2.o_(1)!==1;)++d
if(d>5){d-=6
if(!o&&d>0){h=n+1
r[n]=q
n=h}q+=d
if(d>0)o=!0
a1=a2.o_(1)===0
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
a2.oV(a3,t,q,1);++q
n=h}}}else throw B.e(A.bR("TIFFFaxDecoder5 "+j))}r[n]=q
a2.d=n+1
t+=w}},
R7(){var x,w,v,u,t,s,r=this
for(x=0,w=!0;w;){v=r.xy(10)
u=C.Mu[v]
t=D.c.O(u,1)&15
if(t===12){u=C.tl[(v<<2&12|r.o_(2))>>>0]
s=D.c.O(u,1)
x+=D.c.O(u,4)&4095
r.kZ(4-(s&7))}else if(t===0)throw B.e(A.bR("TIFFFaxDecoder0"))
else if(t===15)throw B.e(A.bR("TIFFFaxDecoder1"))
else{x+=D.c.O(u,5)&2047
r.kZ(10-t)
if((u&1)===0)w=!1}}return x},
R6(){var x,w,v,u,t,s,r=this
for(x=0,w=!1;!w;){v=C.Km[r.o_(4)]
u=v>>>5&2047
if(u===100){v=C.Qk[r.xy(9)]
t=D.c.O(v,1)&15
s=D.c.O(v,5)
if(t===12){r.kZ(5)
v=C.tl[r.o_(4)]
s=D.c.O(v,1)
x+=D.c.O(v,4)&4095
r.kZ(4-(s&7))}else if(t===15)throw B.e(A.bR("TIFFFaxDecoder2"))
else{x+=s&2047
r.kZ(9-t)
if((v&1)===0)w=!0}}else{if(u===200){v=C.Ip[r.o_(2)]
x+=v>>>5&2047
r.kZ(2-(v>>>1&15))}else{x+=u
r.kZ(4-(v>>>1&15))}w=!0}}return x},
ant(){var x,w,v=this,u="TIFFFaxDecoder8",t=v.as
if(t===0){if(v.xy(12)!==1)throw B.e(A.bR("TIFFFaxDecoder6"))}else if(t===1){t=v.w
t.toString
x=8-t
if(v.xy(x)!==0)throw B.e(A.bR(u))
if(x<4)if(v.xy(8)!==0)throw B.e(A.bR(u))
for(;w=v.xy(8),w!==1;)if(w!==0)throw B.e(A.bR(u))}if(v.at===0)return 1
else return v.o_(1)},
ajp(d,e,f){var x,w=this,v=w.e,u=w.d,t=w.y,s=t>0?t-1:0
s=e?(s&4294967294)>>>0:(s|1)>>>0
for(x=s;x<u;x+=2){t=v[x]
t.toString
d.toString
if(t>d){w.y=x
f[0]=t
break}}t=x+1
if(t<u)f[1]=v[t]},
oV(d,e,f,g){var x,w,v,u,t,s=8*e+f,r=s+g,q=D.c.O(s,3),p=s&7
if(p>0){x=D.c.ex(1,7-p)
w=J.t(d.a,d.d+q)
while(!0){if(!(x>0&&s<r))break
w=(w|x)>>>0
x=x>>>1;++s}d.n(0,q,w)}q=D.c.O(s,3)
for(v=r-7;s<v;q=u){u=q+1
J.bX(d.a,d.d+q,255)
s+=8}for(;s<r;){q=D.c.O(s,3)
v=J.t(d.a,d.d+q)
t=D.c.ex(1,7-(s&7))
J.bX(d.a,d.d+q,(v|t)>>>0);++s}},
xy(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.r
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
r=C.ka[J.t(j.a,x+v)&255]
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=C.ka[J.t(u,x+j)&255]
else{t=C.ka[J.t(u,x+j)&255]
j=k.r
s=C.ka[J.t(j.a,j.d+(v+2))&255]}}}else throw B.e(A.bR("TIFFFaxDecoder7"))
j=k.w
j.toString
q=8-j
p=d-q
if(p>8){o=p-8
n=8}else{n=p
o=0}j=k.x
j.toString
j=k.x=j+1
m=D.c.ex(r&C.mh[q],p)
l=D.c.fD(t&C.zA[n],8-n)
if(o!==0){l=D.c.ex(l,o)|D.c.fD(s&C.zA[o],8-o)
k.x=j+1
k.w=o}else if(n===8){k.w=0
k.x=j+1}else k.w=n
return(m|l)>>>0},
o_(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.r
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
s=C.ka[J.t(m.a,x+v)&255]
if(!(v===w)){m=n.r
t=C.ka[J.t(m.a,m.d+(v+1))&255]}}else throw B.e(A.bR("TIFFFaxDecoder7"))
m=n.w
m.toString
r=8-m
q=d-r
p=r-d
if(p>=0){o=D.c.fD(s&C.mh[r],p)
m+=d
n.w=m
if(m===8){n.w=0
m=n.x
m.toString
n.x=m+1}}else{o=(D.c.ex(s&C.mh[r],-p)|D.c.fD(t&C.zA[q],8-q))>>>0
m=n.x
m.toString
n.x=m+1
n.w=q}return o},
kZ(d){var x,w=this,v=w.w
v.toString
x=v-d
if(x<0){v=w.x
v.toString
w.x=v-1
w.w=8+x}else w.w=x}}
A.axG.prototype={
aPl(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=A.bY(a0,f,0),d=a0.bJ()
for(x=g.a,w=0;w<d;++w){v=a0.bJ()
u=a0.bJ()
t=C.PM[u]
s=C.iz[u]
r=a0.ai()
if(r*s>4)q=a0.ai()
else{q=a0.d
a0.d=q+4}p=new A.axF(v,t,r,q,e)
x.n(0,v,p)
if(v===256){o=p.or(0)
o=o==null?f:o.D(0)
g.b=o==null?0:o}else if(v===257){o=p.or(0)
o=o==null?f:o.D(0)
g.c=o==null?0:o}else if(v===262){n=p.or(0)
m=n==null?f:n.D(0)
if(m==null)m=17
if(m<17)g.d=C.ax0[m]
else g.d=C.Cx}else if(v===259){o=p.or(0)
o=o==null?f:o.D(0)
g.e=o==null?0:o}else if(v===258){o=p.or(0)
o=o==null?f:o.D(0)
g.f=o==null?0:o}else if(v===277){o=p.or(0)
o=o==null?f:o.D(0)
g.r=o==null?0:o}else if(v===317){o=p.or(0)
o=o==null?f:o.D(0)
g.z=o==null?0:o}else if(v===339){o=p.or(0)
n=o==null?f:o.D(0)
g.w=C.ayI[n==null?0:n]}else if(v===320){n=p.or(0)
if(n!=null){o=n.ts().buffer
l=D.c.aW(o.byteLength,2)
o=new Uint16Array(o,0,l)
g.go=o
g.id=0
o=o.length/3|0
g.k1=o
g.k2=o*2}}}k=g.go
o=k!=null
if(o&&g.d===C.Cy)g.r=1
if(g.b===0||g.c===0)return
if(o&&g.f===8){j=k.length
for(w=0;w<j;++w)k[w]=k[w]>>>8}if(g.d===C.Cw)g.y=!0
if(x.a_(0,324)){g.ax=g.EI(322)
g.ay=g.EI(323)
g.ch=g.T2(324)
g.CW=g.T2(325)}else{g.ax=g.T1(322,g.b)
if(!x.a_(0,278))g.ay=g.T1(323,g.c)
else{i=g.EI(278)
if(i===-1)g.ay=g.c
else g.ay=i}g.ch=g.T2(273)
g.CW=g.T2(279)}o=g.b
h=g.ax
g.cx=D.c.fJ(o+h-1,h)
h=g.c
o=g.ay
g.cy=D.c.fJ(h+o-1,o)
g.dx=g.T1(266,1)
g.dy=g.EI(292)
g.fr=g.EI(293)
g.EI(338)
switch(g.d.a){case 0:case 1:x=g.f
if(x===1&&g.r===1)g.x=C.Cv
else if(x===4&&g.r===1)g.x=C.b1S
else if(D.c.al(x,8)===0){x=g.r
if(x===1)g.x=C.b1T
else if(x===2)g.x=C.b1U
else g.x=C.vP}break
case 2:if(D.c.al(g.f,8)===0){x=g.r
if(x===3)g.x=C.a2U
else if(x===4)g.x=C.b1W
else g.x=C.vP}break
case 3:x=!1
if(g.r===1)if(g.go!=null){x=g.f
x=x===4||x===8||x===16}if(x)g.x=C.b1V
break
case 4:if(g.f===1&&g.r===1)g.x=C.Cv
break
case 6:if(g.e===7&&g.f===8&&g.r===3)g.x=C.a2U
else{if(x.a_(0,530)){n=x.i(0,530).or(0)
g.Q=n.D(0)
x=g.as=n.iI(0,1)}else x=g.as=g.Q=2
o=g.Q
o===$&&B.b()
if(o*x===1)g.x=C.vP
else if(g.f===8&&g.r===3)g.x=C.b1X}break
default:if(D.c.al(g.f,8)===0)g.x=C.vP
break}},
d7(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.w,d=e===C.ng,a0=e===C.aX
e=g.f
if(e===1)x=C.eU
else if(e===2)x=C.fx
else{if(e===4)e=C.fy
else if(d&&e===16)e=C.h7
else if(d&&e===32)e=C.im
else if(d&&e===64)e=C.jQ
else if(a0&&e===8)e=C.jR
else if(a0&&e===16)e=C.jS
else if(a0&&e===32)e=C.jT
else if(e===16)e=C.bW
else e=e===32?C.io:C.a_
x=e}w=g.go!=null&&g.d===C.Cy
v=w?3:g.r
e=g.b
u=A.hc(f,f,x,0,C.b3,g.c,f,0,v,f,x,e,w)
if(w){e=u.a
e=e==null?f:e.geA()
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
e.oC(k,t[l],t[m],t[n])}}j=0
i=0
while(!0){e=g.cy
e===$&&B.b()
if(!(j<e))break
h=0
while(!0){e=g.cx
e===$&&B.b()
if(!(h<e))break
g.aUt(a2,u,h,j);++h;++i}++j}return u},
aUt(b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null
if(a8.x===C.Cv){a8.aUc(b0,b1,b2,b3)
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
else if(u===5){w=A.cB(new Uint8Array(p),!1,a9,0)
v=A.cm9()
try{J.cAa(v,A.bY(b0,x,0),w.a)}catch(o){}if(a8.z===2)for(n=0;n<a8.ay;++n){m=a8.r
u=a8.ax
l=m*(n*u+1)
k=u*m
for(;m<k;++m){u=w
r=J.t(u.a,u.d+l)
j=w
i=a8.r
i=J.t(j.a,j.d+(l-i))
J.bX(u.a,u.d+l,r+i);++l}}}else if(u===32773){w=A.cB(new Uint8Array(p),!1,a9,0)
a8.ahE(b0,p,w.a)}else if(u===32946)w=A.cB(C.i9.Bj(A.AI(b0.HN(0,0,x),1,a9,0),!1),!1,a9,0)
else if(u===8)w=A.cB(C.i9.Bj(A.AI(b0.HN(0,0,x),1,a9,0),!1),!1,a9,0)
else if(u===6){a8.b5o(new A.ano().d7(0,y.D.a(b0.HN(0,0,x))),b1,s,q,a8.ax,a8.ay)
return}else throw B.e(A.bR("Unsupported Compression Type: "+u))
for(h=q,g=0;g<a8.ay;++g,++h)for(f=s,e=0;e<a8.ax;++e,++f){u=w
if(u.d>=u.c)break
u=a8.r
if(u===1){u=a8.w
if(u===C.ng){u=a8.f
if(u===32){u=w.ai()
$.hq()[0]=u
d=$.DT()[0]}else if(u===64)d=w.Yy()
else if(u===16){u=w.bJ()
r=$.h9
d=(r!=null?r:A.hZ())[u]}else d=0
if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.m0(f,h,d)}}else{r=a8.f
if(r===8)if(u===C.aX){u=w
u=J.t(u.a,u.d++)
$.nH()[0]=u
d=$.oQ()[0]}else{u=w
d=J.t(u.a,u.d++)}else if(r===16)if(u===C.aX){u=w.bJ()
$.pX()[0]=u
d=$.rl()[0]}else d=w.bJ()
else if(r===32)if(u===C.aX){u=w.ai()
$.hq()[0]=u
d=$.kX()[0]}else d=w.ai()
else d=0
if(a8.d===C.Cw){u=b1.a
a0=u==null?a9:u.gc2()
d=(a0==null?0:a0)-d}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.m0(f,h,d)}}}else if(u===2){u=a8.f
if(u===8){if(a8.w===C.aX){u=w
u=J.t(u.a,u.d++)
$.nH()[0]=u
a1=$.oQ()[0]}else{u=w
a1=J.t(u.a,u.d++)}if(a8.w===C.aX){u=w
u=J.t(u.a,u.d++)
$.nH()[0]=u
a2=$.oQ()[0]}else{u=w
a2=J.t(u.a,u.d++)}}else if(u===16){if(a8.w===C.aX){u=w.bJ()
$.pX()[0]=u
a1=$.rl()[0]}else a1=w.bJ()
if(a8.w===C.aX){u=w.bJ()
$.pX()[0]=u
a2=$.rl()[0]}else a2=w.bJ()}else if(u===32){if(a8.w===C.aX){u=w.ai()
$.hq()[0]=u
a1=$.kX()[0]}else a1=w.ai()
if(a8.w===C.aX){u=w.ai()
$.hq()[0]=u
a2=$.kX()[0]}else a2=w.ai()}else{a1=0
a2=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.eQ(f,h,a1,a2,0)}}else if(u===3){u=a8.w
if(u===C.ng){u=a8.f
if(u===32){u=w.ai()
r=$.hq()
r[0]=u
u=$.DT()
a3=u[0]
r[0]=w.ai()
a4=u[0]
r[0]=w.ai()
a5=u[0]}else{a4=0
a5=0
if(u===64)a3=w.Yy()
else if(u===16){u=w.bJ()
r=$.h9
a3=(r!=null?r:A.hZ())[u]
u=w.bJ()
r=$.h9
a4=(r!=null?r:A.hZ())[u]
u=w.bJ()
r=$.h9
a5=(r!=null?r:A.hZ())[u]}else a3=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.eQ(f,h,a3,a4,a5)}}else{r=a8.f
if(r===8){if(u===C.aX){u=w
u=J.t(u.a,u.d++)
$.nH()[0]=u
a3=$.oQ()[0]}else{u=w
a3=J.t(u.a,u.d++)}if(a8.w===C.aX){u=w
u=J.t(u.a,u.d++)
$.nH()[0]=u
a4=$.oQ()[0]}else{u=w
a4=J.t(u.a,u.d++)}if(a8.w===C.aX){u=w
u=J.t(u.a,u.d++)
$.nH()[0]=u
a5=$.oQ()[0]}else{u=w
a5=J.t(u.a,u.d++)}}else if(r===16){if(u===C.aX){u=w.bJ()
$.pX()[0]=u
a3=$.rl()[0]}else a3=w.bJ()
if(a8.w===C.aX){u=w.bJ()
$.pX()[0]=u
a4=$.rl()[0]}else a4=w.bJ()
if(a8.w===C.aX){u=w.bJ()
$.pX()[0]=u
a5=$.rl()[0]}else a5=w.bJ()}else if(r===32){if(u===C.aX){u=w.ai()
$.hq()[0]=u
a3=$.kX()[0]}else a3=w.ai()
if(a8.w===C.aX){u=w.ai()
$.hq()[0]=u
a4=$.kX()[0]}else a4=w.ai()
if(a8.w===C.aX){u=w.ai()
$.hq()[0]=u
a5=$.kX()[0]}else a5=w.ai()}else{a3=0
a4=0
a5=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.eQ(f,h,a3,a4,a5)}}}else if(u>=4){u=a8.w
if(u===C.ng){u=a8.f
if(u===32){u=w.ai()
r=$.hq()
r[0]=u
u=$.DT()
a3=u[0]
r[0]=w.ai()
a4=u[0]
r[0]=w.ai()
a5=u[0]
r[0]=w.ai()
a6=u[0]}else{a4=0
a5=0
a6=0
if(u===64)a3=w.Yy()
else if(u===16){u=w.bJ()
r=$.h9
a3=(r!=null?r:A.hZ())[u]
u=w.bJ()
r=$.h9
a4=(r!=null?r:A.hZ())[u]
u=w.bJ()
r=$.h9
a5=(r!=null?r:A.hZ())[u]
u=w.bJ()
r=$.h9
a6=(r!=null?r:A.hZ())[u]}else a3=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.jX(f,h,a3,a4,a5,a6)}}else{r=a8.f
if(r===8){if(u===C.aX){u=w
u=J.t(u.a,u.d++)
$.nH()[0]=u
a3=$.oQ()[0]}else{u=w
a3=J.t(u.a,u.d++)}if(a8.w===C.aX){u=w
u=J.t(u.a,u.d++)
$.nH()[0]=u
a4=$.oQ()[0]}else{u=w
a4=J.t(u.a,u.d++)}if(a8.w===C.aX){u=w
u=J.t(u.a,u.d++)
$.nH()[0]=u
a5=$.oQ()[0]}else{u=w
a5=J.t(u.a,u.d++)}if(a8.w===C.aX){u=w
u=J.t(u.a,u.d++)
$.nH()[0]=u
a6=$.oQ()[0]}else{u=w
a6=J.t(u.a,u.d++)}}else if(r===16){if(u===C.aX){u=w.bJ()
$.pX()[0]=u
a3=$.rl()[0]}else a3=w.bJ()
if(a8.w===C.aX){u=w.bJ()
$.pX()[0]=u
a4=$.rl()[0]}else a4=w.bJ()
if(a8.w===C.aX){u=w.bJ()
$.pX()[0]=u
a5=$.rl()[0]}else a5=w.bJ()
if(a8.w===C.aX){u=w.bJ()
$.pX()[0]=u
a6=$.rl()[0]}else a6=w.bJ()}else if(r===32){if(u===C.aX){u=w.ai()
$.hq()[0]=u
a3=$.kX()[0]}else a3=w.ai()
if(a8.w===C.aX){u=w.ai()
$.hq()[0]=u
a4=$.kX()[0]}else a4=w.ai()
if(a8.w===C.aX){u=w.ai()
$.hq()[0]=u
a5=$.kX()[0]}else a5=w.ai()
if(a8.w===C.aX){u=w.ai()
$.hq()[0]=u
a6=$.kX()[0]}else a6=w.ai()}else{a3=0
a4=0
a5=0
a6=0}if(a8.d===C.a2V){a7=A.ctq(a3,a4,a5,a6)
a3=a7[0]
a4=a7[1]
a5=a7[2]
u=b1.a
a6=u==null?a9:u.gc2()
if(a6==null)a6=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.jX(f,h,a3,a4,a5,a6)}}}}}else throw B.e(A.bR("Unsupported bitsPerSample: "+u))},
b5o(d,e,f,g,h,i){var x,w,v,u
for(x=0;x<i;++x)for(w=x+g,v=0;v<h;++v){u=d.a
u=u==null?null:u.e2(v,x,null)
if(u==null)u=new A.f0()
e.wS(v+f,w,u)}},
aUc(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.cx
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
if(r===32773){q=D.c.al(a2,8)===0?D.c.aW(a2,8)*u:(D.c.aW(a2,8)+1)*u
x=A.cB(new Uint8Array(a2*u),!1,a1,0)
a0.ahE(a3,q,x.a)}else if(r===5){x=A.cB(new Uint8Array(a2*u),!1,a1,0)
A.cm9().FS(0,A.bY(a3,s,0),x.a)
if(a0.z===2)for(p=0;p<a0.c;++p){o=a0.r
n=o*(p*a0.b+1)
for(;o<a0.b*a0.r;++o){a2=x
u=J.t(a2.a,a2.d+n)
r=x
m=a0.r
m=J.t(r.a,r.d+(n-m))
J.bX(a2.a,a2.d+n,u+m);++n}}}else if(r===2){x=A.cB(new Uint8Array(a2*u),!1,a1,0)
try{A.cdt(a0.dx,a0.ax,a0.ay).bqn(x,a3,0,a0.ay)}catch(l){}}else if(r===3){x=A.cB(new Uint8Array(a2*u),!1,a1,0)
try{A.cdt(a0.dx,a0.ax,a0.ay).bqo(x,a3,0,a0.ay,a0.dy)}catch(l){}}else if(r===4){x=A.cB(new Uint8Array(a2*u),!1,a1,0)
try{A.cdt(a0.dx,a0.ax,a0.ay).bqt(x,a3,0,a0.ay,a0.fr)}catch(l){}}else if(r===8)x=A.cB(C.i9.Bj(A.AI(a3.HN(0,0,s),1,a1,0),!1),!1,a1,0)
else if(r===32946)x=A.cB(C.i9.Bj(A.AI(a3.HN(0,0,s),1,a1,0),!1),!1,a1,0)
else if(r===1)x=a3
else throw B.e(A.bR("Unsupported Compression Type: "+r))
k=new A.byX(x)
j=a4.gc2()
a2=a0.y
i=a2?j:0
h=a2?0:j
for(g=t,f=0;f<a0.ay;++f,++g){for(e=v,d=0;d<a0.ax;++d,++e){a2=a4.a
u=a2==null
r=u?a1:a2.b
if(g<(r==null?0:r)){a2=u?a1:a2.a
a2=e>=(a2==null?0:a2)}else a2=!0
if(a2)break
a2=k.iG(1)
u=a4.a
if(a2===0){if(u!=null)u.eQ(e,g,i,0,0)}else if(u!=null)u.eQ(e,g,h,0,0)}k.c=0}},
ahE(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=J.cG(f),w=0,v=0;v<e;){u=w+1
t=J.t(d.a,d.d+w)
$.nH()[0]=t
s=$.oQ()[0]
if(s>=0&&s<=127)for(t=s+1,w=u,r=0;r<t;++r,v=q,w=u){q=v+1
u=w+1
x.n(f,v,J.t(d.a,d.d+w))}else{t=s<=-1&&s>=-127
w=u+1
if(t){t=J.t(d.a,d.d+u)
for(p=-s+1,r=0;r<p;++r,v=q){q=v+1
x.n(f,v,t)}}}}},
T1(d,e){var x=this.a
if(!x.a_(0,d))return e
x=x.i(0,d).or(0)
x=x==null?null:x.D(0)
return x==null?0:x},
EI(d){return this.T1(d,0)},
T2(d){var x,w=this.a
if(!w.a_(0,d))return null
x=w.i(0,d)
w=x.or(0)
w.toString
return B.xl(x.c,w.gwz(w),!0,y.p)}}
A.Iz.prototype={
J(){return"TiffFormat."+this.b}}
A.k4.prototype={
J(){return"TiffPhotometricType."+this.b}}
A.r_.prototype={
J(){return"TiffImageType."+this.b}}
A.bz_.prototype={}
A.beg.prototype={
FS(d,e,f){var x,w,v,u,t,s,r=this
r.r=f
x=J.b0(f)
r.w=0
w=y.D.a(e.a)
r.e=w
r.f=w.length
r.b=e.d
if(w[0]===0&&w[1]===1)throw B.e(A.bR("Invalid LZW Data"))
r.al6()
r.d=r.c=0
v=r.a29()
w=r.x
u=0
while(!0){if(!(v!==257&&r.w<x))break
if(v===256){r.al6()
v=r.a29()
r.as=0
if(v===257)break
J.bX(r.r,r.w++,v)
u=v}else{t=r.Q
t.toString
if(v<t){r.ajE(v)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bX(r.r,r.w++,w[s])
r.afu(u,w[r.as-1])}else{r.ajE(u)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bX(r.r,r.w++,w[s])
J.bX(r.r,r.w++,w[r.as-1])
r.afu(u,w[r.as-1])}u=v}v=r.a29()}},
afu(d,e){var x,w=this,v=w.y
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
ajE(d){var x,w,v,u,t,s,r=this
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
a29(){var x,w,v,u,t=this,s=t.b,r=t.f
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
return D.c.fD(t.c,s)&C.apD[w-9]},
al6(){var x,w,v=this
v.y=new Uint8Array(4096)
x=new Uint32Array(4096)
v.z=x
D.ct.jP(x,0,4096,4098)
for(x=v.y,w=0;w<256;++w)x[w]=w
v.a=9
v.Q=258}}
A.byY.prototype={
jq(d){var x,w,v=this.a
if(v==null)return null
v=v.f[d]
x=this.c
x===$&&B.b()
w=v.d7(0,x)
return w},
mY(d,e,f){var x=this,w=A.cB(e,!1,null,0)
x.c=w
w=x.anv(w)
x.a=w
if(w==null)return null
return x.jq(0)},
anv(d){var x,w,v,u,t,s,r,q,p,o=null,n=B.a([],y.cp),m=new A.bz_(n),l=d.bJ()
if(l!==18761&&l!==19789)return o
if(l===19789)d.e=!0
else d.e=!1
v=d.bJ()
m.d=v
if(v!==42)return o
u=d.ai()
t=A.bY(d,o,0)
t.d=u
x=t
for(v=y.p,s=y.aL;u!==0;){w=null
try{r=new A.axG(B.D(v,s),C.Cx,C.a2T,C.b1Y)
r.aPl(x)
w=r
q=w
if(!(q.b!==0&&q.c!==0))break}catch(p){break}n.push(w)
if(n.length===1){q=n[0]
m.a=q.b
m.b=q.c}u=x.ai()
if(u!==0)x.d=u}return n.length!==0?m:o}}
A.bC9.prototype={
Ma(){var x,w=this.a,v=w.r_()
if((v&1)!==0)return!1
if((v>>>1&7)>3)return!1
if((v>>>4&1)===0)return!1
this.f.d=v>>>5
if(w.r_()!==2752925)return!1
x=this.b
x.a=w.bJ()
x.b=w.bJ()
return!0},
vS(d){var x,w,v,u=this,t=null
if(!u.aYo())return t
x=u.b
w=x.a
u.d=A.hc(t,t,C.a_,0,C.b3,x.b,t,0,4,t,C.a_,w,!1)
u.b4A()
if(!u.b9Y())return t
x=x.w
if(x.length!==0){v=A.cB(new B.dN(x),!1,t,0)
x=u.d
x.toString
x.e=A.ckl(v)}return u.d},
aYo(){var x,w,v,u,t=this
if(!t.Ma())return!1
t.fr=A.cOq()
for(x=t.dy,w=0;w<4;++w){v=new Int32Array(2)
u=new Int32Array(2)
x[w]=new A.ayz(v,u,new Int32Array(2))}x=t.b
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
u=A.cq_(v.jl(u))
t.c=u
v.d+=x.d
u.dg(1)
t.c.dg(1)
t.ba5(t.x,t.fr)
t.b9X()
if(!t.ba0(v))return!1
t.ba2()
t.c.dg(1)
t.ba1()
return!0},
ba5(d,e){var x,w,v,u=this,t=u.c
t===$&&B.b()
t=t.dg(1)!==0
d.a=t
if(t){d.b=u.c.dg(1)!==0
if(u.c.dg(1)!==0){d.c=u.c.dg(1)!==0
for(t=d.d,x=0;x<4;++x){if(u.c.dg(1)!==0){w=u.c
v=w.dg(7)
w=w.dg(1)===1?-v:v}else w=0
t[x]=w}for(t=d.e,x=0;x<4;++x){if(u.c.dg(1)!==0){w=u.c
v=w.dg(6)
w=w.dg(1)===1?-v:v}else w=0
t[x]=w}}if(d.b)for(x=0;x<3;++x){t=e.a
t[x]=u.c.dg(1)!==0?u.c.dg(8):255}}else d.b=!1
return!0},
b9X(){var x,w,v,u=this,t=u.w,s=u.c
s===$&&B.b()
t.a=s.dg(1)!==0
t.b=u.c.dg(6)
t.c=u.c.dg(3)
s=u.c.dg(1)!==0
t.d=s
if(s)if(u.c.dg(1)!==0){for(s=t.e,x=0;x<4;++x)if(u.c.dg(1)!==0){w=u.c
v=w.dg(6)
s[x]=w.dg(1)===1?-v:v}for(s=t.f,x=0;x<4;++x)if(u.c.dg(1)!==0){w=u.c
v=w.dg(6)
s[x]=w.dg(1)===1?-v:v}}if(t.b===0)s=0
else s=t.a?1:2
u.bf=s
return!0},
ba0(d){var x,w,v,u,t,s,r,q=d.c-d.d,p=this.c
p===$&&B.b()
p=D.c.ee(1,p.dg(2))
this.cy=p
x=p-1
w=x*3
if(q<w)return!1
for(p=this.db,v=0,u=0;u<x;++u,w=s){t=d.Ql(3,v)
s=w+((J.t(t.a,t.d)|J.t(t.a,t.d+1)<<8|J.t(t.a,t.d+2)<<16)>>>0)
if(s>q)s=q
r=new A.a4F(d.zW(s-w,w))
r.b=254
r.c=0
r.d=-8
p[u]=r
v+=3}p[x]=A.cq_(d.zW(q-w,d.d-d.b+w))
return w<q},
ba2(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
h===$&&B.b()
x=h.dg(7)
w=i.c.dg(1)!==0?i.c.Id(4):0
v=i.c.dg(1)!==0?i.c.Id(4):0
u=i.c.dg(1)!==0?i.c.Id(4):0
t=i.c.dg(1)!==0?i.c.Id(4):0
s=i.c.dg(1)!==0?i.c.Id(4):0
r=i.x
for(h=i.dy,q=r.a,p=!r.c,o=r.d,n=0;n<4;++n){if(q){m=o[n]
if(p)m+=x}else{if(n>0){h[n]=h[0]
continue}m=x}l=h[n]
k=l.a
j=m+w
if(j<0)j=0
else if(j>127)j=127
k[0]=C.A1[j]
if(m<0)j=0
else j=m>127?127:m
k[1]=C.zu[j]
j=l.b
k=m+v
if(k<0)k=0
else if(k>127)k=127
j[0]=C.A1[k]*2
k=m+u
if(k<0)k=0
else if(k>127)k=127
j[1]=C.zu[k]*101581>>>16
if(j[1]<8)j[1]=8
k=l.c
j=m+t
if(j<0)j=0
else if(j>117)j=117
k[0]=C.A1[j]
j=m+s
if(j<0)j=0
else if(j>127)j=127
k[1]=C.zu[j]}},
ba1(){var x,w,v,u,t,s,r=this,q=r.fr
for(x=0;x<4;++x)for(w=0;w<8;++w)for(v=0;v<3;++v)for(u=0;u<11;++u){t=r.c
t===$&&B.b()
s=t.i0(C.as6[x][w][v][u])!==0?r.c.dg(8):C.aAB[x][w][v][u]
q.b[x][w].a[v][u]=s}t=r.c
t===$&&B.b()
t=t.dg(1)!==0
r.fx=t
if(t)r.fy=r.c.dg(8)},
bbK(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.bf
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
b4A(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k.at
if(j!=null)m.c9=j
x=J.ip(4,y.K)
for(j=y.cr,w=0;w<4;++w)x[w]=B.a([new A.II(),new A.II()],j)
m.ad=x
j=m.at
j.toString
x=J.ip(j,y.bt)
for(v=0;v<j;++v){u=new Uint8Array(16)
t=new Uint8Array(8)
x[v]=new A.ayA(u,t,new Uint8Array(8))}m.k2=x
m.ok=new Uint8Array(832)
j=m.at
j.toString
m.go=new Uint8Array(4*j)
u=m.p4=16*j
j=8*j
m.R8=j
t=m.bf
t.toString
s=C.ze[t]
r=s*u
q=(s/2|0)*j
m.p1=A.cB(new Uint8Array(16*u+r),!1,l,r)
j=m.R8
j.toString
m.p2=A.cB(new Uint8Array(8*j+q),!1,l,q)
j=m.R8
j.toString
m.p3=A.cB(new Uint8Array(8*j+q),!1,l,q)
j=k.a
m.RG=A.cB(new Uint8Array(j),!1,l,0)
p=k.a+1>>>1
m.rx=A.cB(new Uint8Array(p),!1,l,0)
m.ry=A.cB(new Uint8Array(p),!1,l,0)
k=m.bf
k.toString
o=C.ze[k]
if(k===2)m.ch=m.ay=0
else{k=m.y
k===$&&B.b()
k=D.c.aW(k-o,16)
m.ay=k
j=m.Q
j.toString
j=D.c.aW(j-o,16)
m.ch=j
if(k<0)m.ay=0
if(j<0)m.ch=0}k=m.as
k.toString
k=D.c.aW(k+15+o,16)
m.cx=k
j=m.z
j===$&&B.b()
j=D.c.aW(j+15+o,16)
m.CW=j
u=m.at
u.toString
if(j>u)m.CW=u
j=m.ax
j.toString
if(k>j)m.cx=j
n=u+1
x=J.ip(n,y.bQ)
for(v=0;v<n;++v)x[v]=new A.ayx()
m.k3=x
k=m.at
k.toString
x=J.ip(k,y.bl)
for(v=0;v<k;++v){j=new Int16Array(384)
x[v]=new A.ayy(j,new Uint8Array(16))}m.bP=x
k=m.at
k.toString
m.k4=B.bv(k,l,!1,y.B)
m.bbK()
A.cNS()
m.e=new A.bCa()
return!0},
b9Y(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
t=j.bP
t===$&&B.b()
p=t[u]
if(w.b){u=j.c
u===$&&B.b()
u=u.i0(j.fr.a[0])
t=j.c
o=j.fr
j.k1=u===0?t.i0(o.a[1]):2+t.i0(o.a[2])}u=j.fx
u===$&&B.b()
if(u){u=j.c
u===$&&B.b()
t=j.fy
t===$&&B.b()
n=u.i0(t)!==0}else n=!1
j.b9Z()
if(!n)n=j.ba3(q,s)
else{r.a=q.a=0
u=p.b
u===$&&B.b()
if(!u)r.b=q.b=0
p.f=p.e=0}u=j.bf
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
D.ac.jP(x,0,4,0)
j.y1=0
j.bcH()
u=j.bf
u.toString
k=!1
if(u>0){u=j.y2
t=j.ch
t===$&&B.b()
if(u>=t){t=j.cx
t.toString
t=u<=t
k=t}}if(!j.aXf(k))return!1
u=++j.y2}return!0},
bcH(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.y2,a4=a1.ok
a4===$&&B.b()
x=A.cB(a4,!1,a2,40)
w=A.cB(a1.ok,!1,a2,584)
v=A.cB(a1.ok,!1,a2,600)
a4=a3>0
u=0
while(!0){t=a1.at
t.toString
if(!(u<t))break
t=a1.bP
t===$&&B.b()
s=t[u]
if(u>0){for(r=-1;r<16;++r){t=r*32
x.qT(t-4,4,x,t+12)}for(r=-1;r<8;++r){t=r*32
q=t-4
t+=4
w.qT(q,4,w,t)
v.qT(q,4,v,t)}}else{for(r=0;r<16;++r)J.bX(x.a,x.d+(r*32-1),129)
for(r=0;r<8;++r){t=r*32-1
J.bX(w.a,w.d+t,129)
J.bX(v.a,v.d+t,129)}if(a4){J.bX(v.a,v.d+-33,129)
J.bX(w.a,w.d+-33,129)
J.bX(x.a,x.d+-33,129)}}t=a1.k2
t===$&&B.b()
p=t[u]
o=s.a
n=s.e
if(a4){x.yY(-32,16,p.a)
w.yY(-32,8,p.b)
v.yY(-32,8,p.c)}else if(u===0){t=x.a
q=x.d+-33
J.rp(t,q,q+21,127)
q=w.a
t=w.d+-33
J.rp(q,t,t+9,127)
t=v.a
q=v.d+-33
J.rp(t,q,q+9,127)}t=s.b
t===$&&B.b()
if(t){m=A.bY(x,a2,-16)
l=m.OE()
if(a4){t=a1.at
t.toString
if(u>=t-1){t=p.a[15]
q=m.a
k=m.d
J.rp(q,k,k+4,t)}else m.yY(0,4,a1.k2[u+1].a)}j=l[0]
l[96]=j
l[64]=j
l[32]=j
for(t=s.c,i=0;i<16;++i,n=n<<2>>>0){h=A.bY(x,a2,C.Pt[i])
C.aAA[t[i]].$1(h)
n.toString
q=i*16
a1.ai2(n,new A.le(o,q,384,q,!1),h)}}else{t=A.cq2(u,a3,s.c[0])
t.toString
C.aqS[t].$1(x)
if(n!==0)for(i=0;i<16;++i,n=n<<2>>>0){h=A.bY(x,a2,C.Pt[i])
n.toString
t=i*16
a1.ai2(n,new A.le(o,t,384,t,!1),h)}}t=s.f
t===$&&B.b()
q=A.cq2(u,a3,s.d)
q.toString
C.Oy[q].$1(w)
C.Oy[q].$1(v)
g=new A.le(o,256,384,256,!1)
if((t&255)!==0){q=a1.e
if((t&170)!==0){q===$&&B.b()
q.uW(g,w)
q.uW(A.bY(g,a2,16),A.bY(w,a2,4))
k=A.bY(g,a2,32)
f=A.bY(w,a2,128)
q.uW(k,f)
q.uW(A.bY(k,a2,16),A.bY(f,a2,4))}else{q===$&&B.b()
q.aBq(g,w)}}e=new A.le(o,320,384,320,!1)
t=t>>>8
if((t&255)!==0){q=a1.e
if((t&170)!==0){q===$&&B.b()
q.uW(e,v)
q.uW(A.bY(e,a2,16),A.bY(v,a2,4))
t=A.bY(e,a2,32)
k=A.bY(v,a2,128)
q.uW(t,k)
q.uW(A.bY(t,a2,16),A.bY(k,a2,4))}else{q===$&&B.b()
q.aBq(e,v)}}t=a1.ax
t.toString
if(a3<t-1){D.ac.dC(p.a,0,16,x.ht(),480)
D.ac.dC(p.b,0,8,w.ht(),224)
D.ac.dC(p.c,0,8,v.ht(),224)}d=u*16
a0=u*8
for(r=0;r<16;++r){t=a1.p4
t.toString
q=a1.p1
q===$&&B.b()
q.qT(d+r*t,16,x,r*32)}for(r=0;r<8;++r){t=a1.R8
t.toString
q=a1.p2
q===$&&B.b()
k=r*32
q.qT(a0+r*t,8,w,k)
t=a1.R8
t.toString
q=a1.p3
q===$&&B.b()
q.qT(a0+r*t,8,v,k)}++u}},
ai2(d,e,f){var x,w,v,u,t,s
switch(d>>>30){case 3:x=this.e
x===$&&B.b()
x.OH(0,e,f,!1)
break
case 2:this.e===$&&B.b()
w=J.t(e.a,e.d)+4
v=D.c.kt(D.c.O(J.t(e.a,e.d+4)*35468,16),32)
u=D.c.kt(D.c.O(J.t(e.a,e.d+4)*85627,16),32)
t=D.c.kt(D.c.O(J.t(e.a,e.d+1)*35468,16),32)
s=D.c.kt(D.c.O(J.t(e.a,e.d+1)*85627,16),32)
A.bCc(f,0,w+u,s,t)
A.bCc(f,1,w+v,s,t)
A.bCc(f,2,w-v,s,t)
A.bCc(f,3,w-u,s,t)
break
case 1:x=this.e
x===$&&B.b()
x.OI(e,f)
break
default:break}},
aVD(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.p4,j=m.k4
j===$&&B.b()
j=j[d]
j.toString
x=m.p1
x===$&&B.b()
w=A.bY(x,l,d*16)
v=j.b
u=j.a
if(u===0)return
if(m.bf===1){if(d>0){x=m.e
x===$&&B.b()
k.toString
x.adF(w,k,u+4)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.aHS(w,k,u)}if(e>0){x=m.e
x===$&&B.b()
k.toString
x.adG(w,k,u+4)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.aHV(w,k,u)}}else{t=m.R8
x=m.p2
x===$&&B.b()
s=d*8
r=A.bY(x,l,s)
x=m.p3
x===$&&B.b()
q=A.bY(x,l,s)
p=j.d
if(d>0){x=m.e
x===$&&B.b()
k.toString
s=u+4
x.Ef(w,1,k,16,s,v,p)
t.toString
x.Ef(r,1,t,8,s,v,p)
x.Ef(q,1,t,8,s,v,p)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.btv(w,k,u,v,p)
t.toString
o=A.bY(r,l,4)
n=A.bY(q,l,4)
x.Ee(o,1,t,8,u,v,p)
x.Ee(n,1,t,8,u,v,p)}if(e>0){x=m.e
x===$&&B.b()
k.toString
s=u+4
x.Ef(w,k,1,16,s,v,p)
t.toString
x.Ef(r,t,1,8,s,v,p)
x.Ef(q,t,1,8,s,v,p)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.bEL(w,k,u,v,p)
t.toString
x=4*t
o=A.bY(r,l,x)
n=A.bY(q,l,x)
j.Ee(o,t,1,8,u,v,p)
j.Ee(n,t,1,8,u,v,p)}}},
aX1(){var x,w=this,v=w.ay
v===$&&B.b()
x=v
while(!0){v=w.CW
v.toString
if(!(x<v))break
w.aVD(x,w.y2);++x}},
aXf(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.bf
e.toString
x=C.ze[e]
e=g.p4
e.toString
w=x*e
e=g.R8
e.toString
v=(x/2|0)*e
e=g.p1
e===$&&B.b()
u=-w
t=A.bY(e,f,u)
e=g.p2
e===$&&B.b()
s=-v
r=A.bY(e,f,s)
e=g.p3
e===$&&B.b()
q=A.bY(e,f,s)
p=g.y2
e=g.cx
e.toString
o=p*16
n=(p+1)*16
if(d)g.aX1()
if(p!==0){o-=x
g.to=A.bY(t,f,0)
g.x1=A.bY(r,f,0)
g.x2=A.bY(q,f,0)}else{g.to=A.bY(g.p1,f,0)
g.x1=A.bY(g.p2,f,0)
g.x2=A.bY(g.p3,f,0)}e=p<e-1
if(e)n-=x
m=g.as
m.toString
if(n>m)n=m
g.xr=null
if(g.c9!=null&&o<n){m=g.xr=g.aUw(o,n-o)
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
g.bc3(0,o-l,m-h,n-o)}if(e){e=g.p1
m=g.p4
m.toString
e.qT(u,w,t,16*m)
m=g.p2
u=g.R8
u.toString
m.qT(s,v,r,8*u)
u=g.p3
m=g.R8
m.toString
u.qT(s,v,q,8*m)}return!0},
bc3(d,e,f,g){if(f<=0||g<=0)return!1
this.aWf(e,f,g)
this.aWe(e,f,g)
return!0},
a18(d){var x
if((d&-4194304)>>>0===0)x=D.c.O(d,14)
else x=d<0?0:255
return x},
Ur(d,e,f,g){var x=19077*d
g.n(0,0,this.a18(x+26149*f+-3644112))
g.n(0,1,this.a18(x-6419*e-13320*f+2229552))
g.n(0,2,this.a18(x+33050*e+-4527440))},
Uc(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=new A.bCm(),a0=b3-1,a1=D.c.O(a0,1),a2=d.$2(J.t(a7.a,a7.d),J.t(a8.a,a8.d)),a3=d.$2(J.t(a9.a,a9.d),J.t(b0.a,b0.d)),a4=D.c.O(3*a2+a3+131074,2)
f.Ur(J.t(a5.a,a5.d),a4&255,a4>>>16,b1)
b1.n(0,3,255)
x=a6!=null
if(x){a4=D.c.O(3*a3+a2+131074,2)
w=J.t(a6.a,a6.d)
b2.toString
f.Ur(w,a4&255,a4>>>16,b2)
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
j=A.bY(b1,e,k)
n=19077*n
i=n+26149*l+-3644112
if((i&-4194304)>>>0===0)h=D.c.O(i,14)
else h=i<0?0:255
J.bX(j.a,j.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.O(l,14)
else h=l<0?0:255
J.bX(j.a,j.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.O(n,14)
else h=n<0?0:255
J.bX(j.a,j.d+2,h)
J.bX(j.a,j.d+3,255)
n=J.t(a5.a,a5.d+w)
m=p&255
l=p>>>16
j=w*4
i=A.bY(b1,e,j)
n=19077*n
g=n+26149*l+-3644112
if((g&-4194304)>>>0===0)h=D.c.O(g,14)
else h=g<0?0:255
J.bX(i.a,i.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.O(l,14)
else h=l<0?0:255
J.bX(i.a,i.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.O(n,14)
else h=n<0?0:255
J.bX(i.a,i.d+2,h)
J.bX(i.a,i.d+3,255)
if(x){a4=D.c.O(q+a3,1)
p=D.c.O(r+t,1)
o=J.t(a6.a,a6.d+o)
n=a4&255
m=a4>>>16
b2.toString
k=A.bY(b2,e,k)
o=19077*o
l=o+26149*m+-3644112
if((l&-4194304)>>>0===0)h=D.c.O(l,14)
else h=l<0?0:255
J.bX(k.a,k.d,h)
m=o-6419*n-13320*m+2229552
if((m&-4194304)>>>0===0)h=D.c.O(m,14)
else h=m<0?0:255
J.bX(k.a,k.d+1,h)
o=o+33050*n+-4527440
if((o&-4194304)>>>0===0)h=D.c.O(o,14)
else h=o<0?0:255
J.bX(k.a,k.d+2,h)
J.bX(k.a,k.d+3,255)
w=J.t(a6.a,a6.d+w)
o=p&255
n=p>>>16
j=A.bY(b2,e,j)
w=19077*w
m=w+26149*n+-3644112
if((m&-4194304)>>>0===0)h=D.c.O(m,14)
else h=m<0?0:255
J.bX(j.a,j.d,h)
n=w-6419*o-13320*n+2229552
if((n&-4194304)>>>0===0)h=D.c.O(n,14)
else h=n<0?0:255
J.bX(j.a,j.d+1,h)
w=w+33050*o+-4527440
if((w&-4194304)>>>0===0)h=D.c.O(w,14)
else h=w<0?0:255
J.bX(j.a,j.d+2,h)
J.bX(j.a,j.d+3,255)}}if((b3&1)===0){a4=D.c.O(3*a2+a3+131074,2)
w=J.t(a5.a,a5.d+a0)
o=a0*4
n=A.bY(b1,e,o)
f.Ur(w,a4&255,a4>>>16,n)
n.n(0,3,255)
if(x){a4=D.c.O(3*a3+a2+131074,2)
a0=J.t(a6.a,a6.d+a0)
b2.toString
o=A.bY(b2,e,o)
f.Ur(a0,a4&255,a4>>>16,o)
o.n(0,3,255)}}},
aWe(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.xr
if(o==null)return
x=A.bY(o,null,0)
if(d===0){w=f-1
v=d}else{v=d-1
x.d=x.d-p.b.a
w=f}o=p.Q
o.toString
u=p.as
if(o+d+f===u){u.toString
w=u-o-v}for(o=p.b,t=0;t<w;++t){for(u=t+v,s=0;s<e;++s){r=J.t(x.a,x.d+s)
q=p.d.a
q=q==null?null:q.e2(s,u,null);(q==null?new A.f0():q).saP(0,r)}x.d=x.d+o.a}},
aWf(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=A.cB(B.c3(l.d.gh0(0),0,k),!1,k,d*j.a*4),h=l.to
h===$&&B.b()
x=A.bY(h,k,0)
h=l.x1
h===$&&B.b()
w=A.bY(h,k,0)
h=l.x2
h===$&&B.b()
v=A.bY(h,k,0)
u=d+f
t=D.c.O(e+1,1)
s=j.a*4
j=l.rx
j===$&&B.b()
r=A.bY(j,k,0)
j=l.ry
j===$&&B.b()
q=A.bY(j,k,0)
if(d===0){l.Uc(x,k,w,v,w,v,i,k,e)
p=f}else{j=l.RG
j===$&&B.b()
l.Uc(j,x,r,q,w,v,A.bY(i,k,-s),i,e)
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
l.Uc(A.bY(x,k,-n),x,r,q,w,v,A.bY(i,k,h),i,e)}j=x.d
h=l.p4
h.toString
x.d=j+h
j=l.Q
j.toString
h=l.as
h.toString
if(j+u<h){j=l.RG
j===$&&B.b()
j.yY(0,e,x)
l.rx.yY(0,t,w)
l.ry.yY(0,t,v);--p}else if((u&1)===0)l.Uc(x,k,w,v,w,v,A.bY(i,k,s),k,e)
return p},
aUw(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.b,m=n.a,l=n.b
if(d<0||e<=0||d+e>l)return o
if(d===0){n=m*l
p.cY=new Uint8Array(n)
x=p.c9
w=new A.bD3(x,m,l)
v=x.cZ()
w.d=v&3
w.e=D.c.O(v,2)&3
w.f=D.c.O(v,4)&3
w.r=D.c.O(v,6)&3
if(w.geJ()){u=w.d
if(u===0){if(x.c-x.d<n)w.r=1}else if(u===1){t=new A.ayX(C.nn,B.a([],y.J))
t.a=m
t.b=l
n=B.a([],y.A)
u=B.a([],y.F)
s=new Uint32Array(2)
r=new A.ayv(x,s)
s=r.d=B.c3(s.buffer,0,o)
s[0]=x.cZ()
s[1]=x.cZ()
s[2]=x.cZ()
s[3]=x.cZ()
s[4]=x.cZ()
s[5]=x.cZ()
s[6]=x.cZ()
s[7]=x.cZ()
u=new A.ane(r,t,n,u)
u.db=m
w.x=u
u.Jp(m,l,!0)
n=w.x
x=n.ax
if(x.length===1&&x[0].a===C.a3E&&n.b58()){w.y=!0
n=w.x
x=n.c
q=x.a*x.b
n.cx=0
x=D.c.al(q,4)
x=new Uint8Array(q+(4-x))
n.CW=x
n.ch=B.oe(x.buffer,0,o)}else{w.y=!1
w.x.afD()}}else w.r=1}p.b9=w}n=p.b9
n===$&&B.b()
if(!n.w){x=p.cY
x===$&&B.b()
if(!n.M9(0,d,e,x))return o}n=p.cY
n===$&&B.b()
return A.cB(n,!1,o,d*m)},
ba3(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.fr.b,a3=a1.k1
a3===$&&B.b()
x=a1.dy[a3]
a3=a1.bP
a3===$&&B.b()
w=a3[a1.y1]
v=A.cB(w.a,!1,null,0)
a3=a1.k3
a3===$&&B.b()
u=a3[0]
v.bxV(0,v.c-v.d,0)
a3=w.b
a3===$&&B.b()
if(!a3){t=A.cB(new Int16Array(16),!1,null,0)
a3=a4.b
s=u.b
r=a1.a24(a5,a2[1],a3+s,x.b,0,t)
a4.b=u.b=r>0?1:0
if(r>1)a1.bi7(t,v)
else{q=D.c.O(J.t(t.a,t.d)+3,3)
for(p=0;p<256;p+=16)J.bX(v.a,v.d+p,q)}o=a2[0]
n=1}else{o=a2[3]
n=0}m=a4.a&15
l=u.a&15
for(k=0,j=0;j<4;++j){i=l&1
for(h=0,g=0;g<4;++g){r=a1.a24(a5,o,i+(m&1),x.a,n,v)
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
m=D.c.hj(a4.a,a3)
l=D.c.hj(u.a,a3)
for(h=0,j=0;j<2;++j){i=l&1
for(g=0;g<2;++g){r=a1.a24(a5,a2[2],i+(m&1),x.c,0,v)
i=r>0?1:0
m=m>>>1|i<<3
a3=J.t(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=(h<<2|a3)>>>0
v.d+=16}m=m>>>2
l=l>>>1|i<<5}d=(d|D.c.ee(h,4*a0))>>>0
e=(e|D.c.ee(m<<4>>>0,a0))>>>0
f=(f|D.c.ee(l&240,a0))>>>0}a4.a=e
u.a=f
w.e=k
w.f=d
if((d&43690)===0)x.toString
return(k|d)>>>0===0},
bi7(d,e){var x,w,v,u,t,s,r,q,p,o,n=new Int32Array(16)
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
J.bX(e.a,e.d+p,u)
u=D.c.O(q+r,3)
J.bX(e.a,e.d+(p+16),u)
u=D.c.O(v-s,3)
J.bX(e.a,e.d+(p+32),u)
u=D.c.O(q-r,3)
J.bX(e.a,e.d+(p+48),u)
p+=64}},
aYw(d,e){var x,w,v,u,t,s
if(d.i0(e[3])===0)x=d.i0(e[4])===0?2:3+d.i0(e[5])
else if(d.i0(e[6])===0)x=d.i0(e[7])===0?5+d.i0(159):7+2*d.i0(165)+d.i0(145)
else{w=d.i0(e[8])
v=2*w+d.i0(e[9+w])
u=C.azc[v]
t=u.length
for(x=0,s=0;s<t;++s)x+=x+d.i0(u[s])
x+=3+D.c.ee(8,v)}return x},
a24(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=e[h].a[f]
for(;h<16;h=x){if(d.i0(p[0])===0)return h
for(;d.i0(p[1])===0;){++h
p=e[C.Iy[h]].a[0]
if(h===16)return 16}x=h+1
w=e[C.Iy[x]].a
if(d.i0(p[2])===0){p=w[1]
v=1}else{v=this.aYw(d,p)
p=w[2]}u=C.azw[h]
t=d.b
t===$&&B.b()
s=d.afZ(D.c.O(t,1))
t=d.b
r=C.Pl[t]
d.b=C.Kk[t]
t=d.d
t===$&&B.b()
d.d=t-r
t=s!==0?-v:v
q=g[h>0?1:0]
J.bX(i.a,i.d+u,t*q)}return 16},
b9Z(){var x,w,v,u,t,s,r,q,p,o=this,n=o.y1,m=4*n,l=o.go,k=o.id,j=o.bP
j===$&&B.b()
x=j[n]
n=o.c
n===$&&B.b()
n=n.i0(145)===0
x.b=n
if(!n){if(o.c.i0(156)!==0)w=o.c.i0(128)!==0?1:3
else w=o.c.i0(163)!==0?2:0
x.c[0]=w
l.toString
D.ac.jP(l,m,m+4,w)
D.ac.jP(k,0,4,w)}else{v=x.c
for(u=0,t=0;t<4;++t,u=p){w=k[t]
for(s=0;s<4;++s){n=m+s
r=C.axT[l[n]][w]
q=C.IF[o.c.i0(r[0])]
for(;q>0;)q=C.IF[2*q+o.c.i0(r[q])]
w=-q
l[n]=w}p=u+4
l.toString
D.ac.dC(v,u,p,l,m)
k[t]=w}}if(o.c.i0(142)===0)n=0
else if(o.c.i0(114)===0)n=2
else n=o.c.i0(183)!==0?1:3
x.d=n}}
A.a4F.prototype={
dg(d){var x,w
for(x=0;w=d-1,d>0;d=w)x=(x|D.c.ex(this.i0(128),w))>>>0
return x},
Id(d){var x=this.dg(d)
return this.dg(1)===1?-x:x},
i0(d){var x,w=this,v=w.b
v===$&&B.b()
x=w.afZ(D.c.O(v*d,8))
if(w.b<=126)w.bfs()
return x},
afZ(d){var x,w,v,u,t,s=this,r=s.d
r===$&&B.b()
if(r<0){x=s.a
w=x.c
v=x.d
if(w-v>=1){u=x.cZ()
r=s.c
r===$&&B.b()
s.c=(u|r<<8)>>>0
r=s.d+8
s.d=r
t=r}else{if(v<w){r=x.cZ()
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
if(D.c.nk(r,t)>d){x=s.b
x===$&&B.b()
w=d+1
s.b=x-w
s.c=r-D.c.ex(w,t)
return 1}else{s.b=d
return 0}},
bfs(){var x,w=this,v=w.b
v===$&&B.b()
x=C.Pl[v]
w.b=C.Kk[v]
v=w.d
v===$&&B.b()
w.d=v-x}}
A.bCa.prototype={
adG(d,e,f){var x,w=A.bY(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x
if(this.ami(w,e,f))this.Re(w,e)}},
adF(d,e,f){var x,w=A.bY(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x*e
if(this.ami(w,1,f))this.Re(w,1)}},
aHV(d,e,f){var x,w,v=A.bY(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.adG(v,e,f)}},
aHS(d,e,f){var x,w=A.bY(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.adF(w,e,f)}},
bEL(d,e,f,g,h){var x,w,v=A.bY(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.Ee(v,e,1,16,f,g,h)}},
btv(d,e,f,g,h){var x,w=A.bY(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.Ee(w,1,e,16,f,g,h)}},
Ef(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=A.bY(d,null,0)
for(x=-3*e,w=-2*e,v=-e,u=2*e;t=g-1,g>0;g=t){if(this.amj(h,e,a0,a1))if(this.akF(h,e,a2))this.Re(h,e)
else{s=J.t(h.a,h.d+x)
r=J.t(h.a,h.d+w)
q=J.t(h.a,h.d+v)
p=J.t(h.a,h.d)
o=J.t(h.a,h.d+e)
n=J.t(h.a,h.d+u)
m=$.c9p()
l=m[1020+3*(p-q)+m[1020+r-o]]
m=D.c.O(27*l+63,7)
k=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.O(18*l+63,7)
j=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.O(9*l+63,7)
i=(m&2147483647)-((m&2147483648)>>>0)
s=$.oP()[255+s+i]
J.bX(h.a,h.d+x,s)
r=$.oP()[255+r+j]
J.bX(h.a,h.d+w,r)
q=$.oP()[255+q+k]
J.bX(h.a,h.d+v,q)
p=$.oP()[255+p-k]
J.bX(h.a,h.d,p)
o=$.oP()[255+o-j]
J.bX(h.a,h.d+e,o)
n=$.oP()[255+n-i]
J.bX(h.a,h.d+u,n)}h.d+=f}},
Ee(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=A.bY(d,null,0)
for(x=-2*e,w=-e;v=g-1,g>0;g=v){if(this.amj(k,e,h,i))if(this.akF(k,e,j))this.Re(k,e)
else{u=J.t(k.a,k.d+x)
t=J.t(k.a,k.d+w)
s=J.t(k.a,k.d)
r=J.t(k.a,k.d+e)
q=3*(s-t)
p=$.aQB()
o=D.c.O(q+4,3)
n=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.O(q+3,3)
m=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.O(n+1,1)
l=(o&2147483647)-((o&2147483648)>>>0)
u=$.oP()[255+u+l]
J.bX(k.a,k.d+x,u)
t=$.oP()[255+t+m]
J.bX(k.a,k.d+w,t)
s=$.oP()[255+s-n]
J.bX(k.a,k.d,s)
r=$.oP()[255+r-l]
J.bX(k.a,k.d+e,r)}k.d+=f}},
Re(d,e){var x=J.t(d.a,d.d+-2*e),w=-e,v=J.t(d.a,d.d+w),u=J.t(d.a,d.d),t=J.t(d.a,d.d+e),s=3*(u-v)+$.c9p()[1020+x-t],r=$.aQB()[112+D.c.kt(D.c.O(s+4,3),32)],q=$.aQB()[112+D.c.kt(D.c.O(s+3,3),32)]
d.n(0,w,$.oP()[255+v+q])
d.n(0,0,$.oP()[255+u-r])},
akF(d,e,f){var x=J.t(d.a,d.d+-2*e),w=J.t(d.a,d.d+-e),v=J.t(d.a,d.d),u=J.t(d.a,d.d+e),t=$.aQA()
return t[255+x-w]>f||t[255+u-v]>f},
ami(d,e,f){var x=J.t(d.a,d.d+-2*e),w=J.t(d.a,d.d+-e),v=J.t(d.a,d.d),u=J.t(d.a,d.d+e)
return 2*$.aQA()[255+w-v]+$.c9o()[255+x-u]<=f},
amj(d,e,f,g){var x=J.t(d.a,d.d+-4*e),w=J.t(d.a,d.d+-3*e),v=J.t(d.a,d.d+-2*e),u=J.t(d.a,d.d+-e),t=J.t(d.a,d.d),s=J.t(d.a,d.d+e),r=J.t(d.a,d.d+2*e),q=J.t(d.a,d.d+3*e),p=$.aQA(),o=255+v
if(2*p[255+u-t]+$.c9o()[o-s]>f)return!1
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
A.D1(e,l,0,0,t+n)
A.D1(e,l,1,0,s+o)
A.D1(e,l,2,0,s-o)
A.D1(e,l,3,0,t-n);++w
l+=32}},
OH(d,e,f,g){this.uW(e,f)
if(g)this.uW(A.bY(e,null,16),A.bY(f,null,4))},
OI(d,e){var x,w,v=J.t(d.a,d.d)+4
for(x=0;x<4;++x)for(w=0;w<4;++w)A.D1(e,0,w,x,v)},
aBq(d,e){var x=this,w=null
if(J.t(d.a,d.d)!==0)x.OI(d,e)
if(J.t(d.a,d.d+16)!==0)x.OI(A.bY(d,w,16),A.bY(e,w,4))
if(J.t(d.a,d.d+32)!==0)x.OI(A.bY(d,w,32),A.bY(e,w,128))
if(J.t(d.a,d.d+48)!==0)x.OI(A.bY(d,w,48),A.bY(e,w,132))}}
A.bCf.prototype={}
A.bCj.prototype={}
A.bCl.prototype={}
A.a4E.prototype={}
A.bCk.prototype={}
A.bCb.prototype={}
A.II.prototype={}
A.ayx.prototype={}
A.ayz.prototype={}
A.ayy.prototype={}
A.ayA.prototype={}
A.a4G.prototype={
Ma(){var x,w=this.b
if(w.iG(8)!==47)return!1
x=this.c
x.f=C.vU
x.a=w.iG(14)+1
x.b=w.iG(14)+1
x.d=w.iG(1)!==0
if(w.iG(3)!==0)return!1
return!0},
vS(d){var x,w,v,u,t,s=this,r=null
s.e=0
if(!s.Ma())return r
x=s.c
s.Jp(x.a,x.b,!0)
s.afD()
w=x.a
s.d=A.hc(r,r,C.a_,0,C.b3,x.b,r,0,4,r,C.a_,w,!1)
w=s.ch
w.toString
v=x.a
u=x.b
if(!s.a1t(w,v,u,u,s.gbbT()))return r
x=x.w
if(x.length!==0){t=A.cB(new B.dN(x),!1,r,0)
x=s.d
x.toString
x.e=A.ckl(t)}return s.d},
afD(){var x,w=this,v=w.c,u=v.a
v=u*v.b+u
x=new Uint32Array(v+u*16)
w.ch=x
w.CW=B.c3(x.buffer,0,null)
w.cx=v
return!0},
bcx(d){var x,w,v,u=this,t=u.b,s=t.iG(2),r=u.ay,q=D.c.ee(1,s)
if((r&q)>>>0!==0)return!1
u.ay=(r|q)>>>0
x=new A.ayw(C.a3D)
u.ax.push(x)
r=C.arg[s]
x.a=r
x.b=d[0]
x.c=d[1]
switch(r.a){case 0:case 1:t=t.iG(3)+2
x.e=t
x.d=u.Jp(A.D2(x.b,t),A.D2(x.c,x.e),!1)
break
case 3:w=t.iG(8)+1
if(w>16)v=0
else if(w>4)v=1
else{t=w>2?2:3
v=t}d[0]=A.D2(x.b,v)
x.e=v
x.d=u.Jp(w,1,!1)
u.aWF(w,x)
break
case 2:break
default:throw B.e(A.bR("Invalid WebP transform type: "+s))}return!0},
Jp(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(f)for(x=p.b,w=y.t,v=e,u=d;x.iG(1)!==0;){t=B.a([u,v],w)
if(!p.bcx(t))throw B.e(A.bR("Invalid Transform"))
u=t[0]
v=t[1]}else{v=e
u=d}x=p.b
if(x.iG(1)!==0){s=x.iG(4)
if(!(s>=1&&s<=11))throw B.e(A.bR("Invalid Color Cache"))}else s=0
if(!p.bcm(u,v,s,f))throw B.e(A.bR("Invalid Huffman Codes"))
if(s>0){x=D.c.ee(1,s)
p.r=x
p.w=new A.bCg(new Uint32Array(x),32-s)}else p.r=0
x=p.c
x.a=u
x.b=v
r=p.y
p.z=A.D2(u,r)
p.x=r===0?4294967295:D.c.ee(1,r)-1
if(f){p.e=0
return null}q=new Uint32Array(u*v)
if(!p.a1t(q,u,v,v,null))throw B.e(A.bR("Failed to decode image data."))
p.e=0
return q},
a1t(a5,a6,a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e,d=D.c.fJ(e,a6),a0=D.c.al(e,a6),a1=f.ajh(a0,d),a2=f.e,a3=a6*a7,a4=a6*a8
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
if((a0&v)>>>0===0){q=f.JK(f.Q,f.z,f.y,a0,d)
a1=f.at[q]}if(e.a>=32)e.AR()
s=a1.a
p=s[0].zd(e)
o=0
if(p<256){n=s[1].zd(e)
if(e.a>=32)e.AR()
a5[a2]=A.cuG(s[2].zd(e),p,n,s[3].zd(e));++a2;++a0
if(a0>=a6){++d
if(D.c.al(d,16)===0&&u)a9.$1(d)
if(w!=null)for(s=w.b,r=w.a;t<a2;){m=a5[t]
r[D.c.fD(m*506832829>>>0,s)]=m;++t}a0=o}}else if(p<280){l=f.RD(p-256)
k=s[4].zd(e)
if(e.a>=32)e.AR()
j=f.an6(a6,f.RD(k))
if(a2<j||a3-a2<l)return!1
else{i=a2-j
for(h=0;h<l;++h)a5[a2+h]=a5[i+h]
a2+=l}a0+=l
for(;a0>=a6;){a0-=a6;++d
if(D.c.al(d,16)===0&&u)a9.$1(d)}if(a2<a4){if((a0&v)>>>0!==0){q=f.JK(f.Q,f.z,f.y,a0,d)
a1=f.at[q]}if(w!=null)for(s=w.b,r=w.a;t<a2;){m=a5[t]
r[D.c.fD(m*506832829>>>0,s)]=m;++t}}}else if(p<x){for(;t<a2;){s=a5[t]
g=D.c.fD(s*506832829>>>0,w.b)
w.a[g]=s;++t}s=w.a
a5[a2]=s[p-280];++a2;++a0
if(a0>=a6){++d
if(D.c.al(d,16)===0&&u)a9.$1(d)
for(r=w.b;t<a2;){m=a5[t]
s[D.c.fD(m*506832829>>>0,r)]=m;++t}a0=o}}else return!1}if(u)a9.$1(d)
if(s.d>=r&&e.a>=64&&a2<a3)return!1
f.e=a2
return!0},
b58(){var x,w,v,u
if(this.r>0)return!1
for(x=this.as,w=this.at,v=0;v<x;++v){u=w[v].a
if(u[1].f>1)return!1
if(u[2].f>1)return!1
if(u[3].f>1)return!1}return!0},
aWO(d){var x,w,v,u,t,s,r=this,q=r.f,p=d-q
if(p<=0)return
x=r.c
r.afN(p,x.a*q)
w=x.a
v=w*p
u=w*r.f
x=r.ch
x.toString
q=r.cx
q.toString
t=A.cB(x,!1,null,q)
for(s=0;s<v;++s){q=r.cy
q.toString
q[u+s]=D.c.O(J.t(t.a,t.d+s),8)&255}r.f=d},
aU8(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.e,n=D.c.fJ(o,d),m=D.c.al(o,d),l=p.ajh(m,n),k=p.e,j=d*e,i=d*f,h=p.x
o=p.b
while(!0){x=o.b
if(!(!(x.d>=x.c&&o.a>=64)&&k<i))break
if((m&h)>>>0===0){w=p.JK(p.Q,p.z,p.y,m,n)
l=p.at[w]}if(o.a>=32)o.AR()
x=l.a
v=x[0].zd(o)
if(v<256){x=p.CW
x===$&&B.b()
x[k]=v;++k;++m
if(m>=d){++n
if(D.c.al(n,16)===0)p.a1P(n)
m=0}}else if(v<280){u=p.RD(v-256)
t=x[4].zd(o)
if(o.a>=32)o.AR()
s=p.an6(d,p.RD(t))
if(k>=s&&j-k>=u)for(x=p.CW,r=0;r<u;++r){x===$&&B.b()
q=k+r
x[q]=x[q-s]}else{p.e=k
return!0}k+=u
m+=u
for(;m>=d;){m-=d;++n
if(D.c.al(n,16)===0)p.a1P(n)}if(k<i&&(m&h)>>>0!==0){w=p.JK(p.Q,p.z,p.y,m,n)
l=p.at[w]}}else return!1}p.a1P(n)
p.e=k
return!0},
a1P(d){var x,w,v,u=this,t=u.f,s=d-t,r=u.CW
r===$&&B.b()
x=A.cB(r,!1,null,u.c.a*t)
if(s>0){w=u.f
t=u.cy
t.toString
r=u.db
r.toString
v=A.cB(t,!1,null,r*w)
u.ax[0].bnF(w,w+s,x,v)}u.f=d},
bbU(d){var x,w,v,u,t,s=this,r=s.c,q=r.a,p=s.f,o=d-p
if(o<=0)return
s.afN(o,q*p)
q=s.cx
q.toString
x=s.f
w=q
v=0
for(;v<o;++v,++x)for(u=0;u<r.a;++u,++w){t=s.ch[w]
q=s.d.a
if(q!=null)q.jX(u,x,t>>>16&255,t>>>8&255,t&255,t>>>24&255)}s.f=d},
afN(d,e){var x,w,v,u=this,t=u.ax,s=t.length,r=u.c.a,q=u.f,p=q+d,o=u.cx
o.toString
x=u.ch
x.toString
D.ct.dC(x,o,o+r*d,x,e)
for(w=e;v=s-1,s>0;w=o,s=v){r=t[v]
x=u.ch
x.toString
r.bvN(q,p,x,w,x,o)}},
bcm(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=1
if(g&&l.b.iG(1)!==0){x=l.b.iG(3)+2
w=A.D2(d,x)
v=A.D2(e,x)
u=w*v
t=l.Jp(w,v,!1)
l.y=x
for(s=0;s<u;++s){r=t[s]>>>8&65535
t[s]=r
if(r>=k)k=r+1}}else t=null
q=J.ip(k,y.O)
for(p=0;p<k;++p)q[p]=A.cGm()
for(o=f>0,s=0;s<k;++s)for(n=0;n<5;++n){m=C.ark[n]
if(n===0&&o)m+=D.c.ee(1,f)
if(!l.bck(m,q[s].a[n]))return!1}l.Q=t
l.as=k
l.at=q
return!0},
bck(d,e){var x,w,v,u,t,s,r,q,p,o=this.b
if(o.iG(1)!==0){x=y.t
w=B.a([0,0],x)
v=B.a([0,0],x)
u=B.a([0,0],x)
t=o.iG(1)+1
w[0]=o.iG(o.iG(1)===0?1:8)
v[0]=0
x=t-1
u[0]=x
if(t===2){w[1]=o.iG(8)
v[1]=1
u[1]=x}s=e.bmt(u,v,w,d,t)}else{r=new Int32Array(19)
q=o.iG(4)+4
if(q>19)return!1
u=new Int32Array(d)
for(p=0;p<q;++p)r[C.at4[p]]=o.iG(3)
s=this.bcl(r,d,u)
if(s)s=e.asW(u,d)}return s},
bcl(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=A.cl5()
if(!k.asW(d,19))return!1
x=this.b
if(x.iG(1)!==0){w=2+x.iG(2+2*x.iG(3))
if(w>e)return!1}else w=e
for(v=0,u=8;v<e;w=t){t=w-1
if(w===0)break
if(x.a>=32)x.AR()
s=k.zd(x)
if(s<16){r=v+1
f[v]=s
if(s!==0)u=s
v=r}else{q=s-16
p=C.aom[q]
o=C.aoJ[q]
n=x.iG(p)+o
if(v+n>e)return!1
else{m=s===16?u:0
for(;l=n-1,n>0;n=l,v=r){r=v+1
f[v]=m}}}}return!0},
RD(d){var x
if(d<4)return d+1
x=D.c.O(d-2,1)
return D.c.ee(2+(d&1),x)+this.b.iG(x)+1},
an6(d,e){var x,w
if(e>120)return e-120
else{x=C.aqv[e-1]
w=(x>>>4)*d+(8-(x&15))
return w>=1?w:1}},
aWF(d,e){var x,w,v=D.c.ee(1,D.c.hj(8,e.e)),u=new Uint32Array(v),t=B.c3(e.d.buffer,0,null),s=B.c3(u.buffer,0,null)
u[0]=e.d[0]
x=4*d
for(w=4;w<x;++w)s[w]=t[w]+s[w-4]&255
for(x=4*v;w<x;++w)s[w]=0
e.d=u
return!0},
JK(d,e,f,g,h){if(f===0)return 0
d.toString
return d[e*D.c.O(h,f)+D.c.O(g,f)]},
ajh(d,e){var x=this,w=x.JK(x.Q,x.z,x.y,d,e)
return x.at[w]}}
A.ane.prototype={
bsF(d){return this.aWO(d)}}
A.ayv.prototype={
azz(){var x,w,v=this.a
if(v<32){x=this.c
w=D.c.fD(x[0],v)+((x[1]&C.zN[v])>>>0)*(C.zN[32-v]+1)}else{x=this.c
w=v===32?x[1]:D.c.fD(x[1],v-32)}return w},
iG(d){var x,w=this,v=w.b
if(!(v.d>=v.c&&w.a>=64)&&d<25){v=w.azz()
x=C.zN[d]
w.a+=d
w.AR()
return(v&x)>>>0}else throw B.e(A.bR("Not enough data in input."))},
AR(){var x,w,v,u=this,t=u.b,s=u.c,r=t.c
while(!0){if(!(u.a>=8&&t.d<r))break
x=J.t(t.a,t.d++)
w=s[0]
v=s[1]
s[0]=(w>>>8)+(v&255)*16777216
s[1]=v>>>8
s[1]=(s[1]|x*16777216)>>>0
u.a-=8}}}
A.bCg.prototype={}
A.IJ.prototype={
J(){return"VP8LImageTransformType."+this.b}}
A.ayw.prototype={
bvN(d,e,f,g,h,i){var x,w,v,u,t=this,s=t.b
switch(t.a.a){case 2:t.bkv(h,i,i+(e-d)*s)
break
case 0:t.bBg(d,e,h,i)
if(e!==t.c){x=i-s
D.ct.dC(h,x,x+s,f,i+(e-d-1)*s)}break
case 1:t.bnG(d,e,h,i)
break
case 3:if(g===i&&t.e>0){w=e-d
v=w*A.D2(s,t.e)
u=i+w*s-v
D.ct.dC(h,u,u+v,f,i)
t.atT(d,e,f,u,h,i)}else t.atT(d,e,f,g,h,i)
break}},
bnF(d,e,f,g){var x,w,v,u,t,s=this.e,r=D.c.hj(8,s),q=this.b,p=this.d
if(r<8){x=D.c.ee(1,s)-1
w=D.c.ee(1,r)-1
for(v=d;v<e;++v)for(u=0,t=0;t<q;++t){if((t&x)>>>0===0){u=J.t(f.a,f.d);++f.d}s=p[(u&w)>>>0]
J.bX(g.a,g.d,s>>>8&255);++g.d
u=D.c.O(u,r)}}else for(v=d;v<e;++v)for(t=0;t<q;++t){s=J.t(f.a,f.d);++f.d
s=p[s]
J.bX(g.a,g.d,s>>>8&255);++g.d}},
atT(d,e,f,g,h,i){var x,w,v,u,t,s,r,q=this.e,p=D.c.hj(8,q),o=this.b,n=this.d
if(p<8){x=D.c.ee(1,q)-1
w=D.c.ee(1,p)-1
for(v=d;v<e;++v)for(u=0,t=0;t<o;++t,i=r){if((t&x)>>>0===0){s=g+1
u=f[g]>>>8&255
g=s}r=i+1
h[i]=n[u&w]
u=D.c.hj(u,p)}}else for(v=d;v<e;++v)for(t=0;t<o;++t,i=r,g=s){r=i+1
s=g+1
h[i]=n[f[g]>>>8&255]}},
bnG(a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.b,f=h.e,e=D.c.ee(1,f)-1,d=A.D2(g,f),a0=D.c.O(a1,h.e)*d
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
p=$.nH()
p[0]=q
q=$.oQ()
o=q[0]
p[0]=r
n=q[0]
m=$.aQD()
m[0]=o*n
l=$.c9r()
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
bBg(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=this,n=o.b
if(d===0){A.bCh(f,g,4278190080)
for(x=1;x<n;++x){w=g+x
A.bCh(f,w,f[w-1])}g+=n;++d}w=o.e
v=D.c.ee(1,w)-1
u=A.D2(n,w)
t=D.c.O(d,o.e)*u
for(s=d;s<e;){A.bCh(f,g,f[g-n])
r=t+1
q=$.cq1[o.d[t]>>>8&15]
for(x=1;x<n;++x){if((x&v)>>>0===0){p=r+1
q=$.cq1[o.d[r]>>>8&15]
r=p}w=g+x
A.bCh(f,w,q.$3(f,f[w-1],w-n))}g+=n;++s
if((s&v)>>>0===0)t+=u}},
bkv(d,e,f){var x,w,v
for(;e<f;e=v){x=d[e]
w=x>>>8&255
v=e+1
d[e]=(x&4278255360|(x&16711935)+(w<<16|w)&16711935)>>>0}}}
A.bD3.prototype={
geJ(){var x=this,w=x.d
if(w>1||x.e>=4||x.f>1||x.r!==0)return!1
return!0},
M9(d,e,f,g){var x,w,v,u,t,s,r=this
if(!r.geJ())return!1
x=C.awG[r.e]
if(r.d===0){w=r.b
v=e*w
u=r.a
D.ac.dC(g,v,f*w,u.a,u.d-u.b+v)}else{w=e+f
u=r.x
u===$&&B.b()
u.cy=g
t=u.c
if(r.y)w=u.aU8(t.a,t.b,w)
else{s=u.ch
s.toString
u=u.a1t(s,t.a,t.b,w,u.gbsE())
w=u}if(!w)return!1}if(x!=null){w=r.b
x.$6(w,r.c,w,e,f,g)}if(r.f===1)if(!r.aV0(g,r.b,r.c,e,f))return!1
if(e+f===r.c)r.w=!0
return!0},
aV0(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
A.a4U.prototype={
aPn(d,e){var x=this,w=d.cZ()
x.r=0
x.f=(w&1)!==0
x.w=d.d-d.b
x.x=e-16}}
A.anf.prototype={}
A.amz.prototype={
a5u(d){var x,w=this
if(d===0)return!1
x=(d<<1>>>0)-1
w.e=x
x=new Int32Array(x<<1>>>0)
w.d=x
x[1]=-1
w.f=1
D.ac.jP(w.a,0,128,255)
return!0},
asW(d,e){var x,w,v,u,t,s=this
for(x=0,w=0,v=0;v<e;++v)if(d[v]>0){++x
w=v}if(!s.a5u(x))return!1
if(x===1){if(w<0||w>=e)return!1
return s.a0D(w,0,0)}u=new Int32Array(e)
if(!s.b43(d,e,u))return!1
for(v=0;v<e;++v){t=d[v]
if(t>0)if(!s.a0D(v,u[v],t))return!1}return s.f===s.e},
bmt(d,e,f,g,h){var x,w,v,u=this
if(!u.a5u(h))return!1
for(x=0;x<h;++x){w=e[x]
if(w!==-1){v=f[x]
if(v>=g)return u.f===u.e
if(!u.a0D(v,w,d[x]))return u.f===u.e}}return u.f===u.e},
zd(d){var x,w,v=this,u=d.azz(),t=d.a,s=u&127,r=v.a[s]
if(r<=7){d.a=t+r
return v.b[s]}x=v.c[s]
t+=7
u=u>>>7
do{w=v.d
w===$&&B.b()
x=x+w[(x<<1>>>0)+1]+(u&1)
u=u>>>1;++t}while(v.amp(x))
d.a=t
return v.d[x<<1>>>0]},
a0D(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this
if(f<=7){x=m.ao8(e,f)
for(w=D.c.ex(1,7-f),v=m.b,u=m.a,t=0;t<w;++t){s=(x|D.c.ex(t,f))>>>0
v[s]=d
u[s]=f}}else x=m.ao8(D.c.nk(e,f-7),7)
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
q+=u[o]+(D.c.nk(e,p)&1);--r
if(r===0)w[x]=q}if(m.b7d(q))m.b7e(q,0)
else if(m.amp(q))return!1
w=m.d
w===$&&B.b()
w[q<<1>>>0]=d
return!0},
ao8(d,e){return D.c.fD((C.Ps[d&15]<<4|C.Ps[D.c.O(d,4)])>>>0,8-e)},
b7e(d,e){var x=this.d
x===$&&B.b()
x[(d<<1>>>0)+1]=e},
amp(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]!==0},
b7d(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]<0},
b43(d,e,f){var x,w,v,u,t,s,r,q=new Int32Array(16),p=new Int32Array(16)
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
A.Xx.prototype={
i(d,e){return this.a[e]}}
A.Qu.prototype={
J(){return"WebPFormat."+this.b}}
A.ayX.prototype={}
A.ang.prototype={}
A.bD4.prototype={
GK(d){var x=A.cB(d,!1,null,0)
this.b=x
if(!this.aje(x))return!1
return!0},
nV(d){var x,w=this,v=null,u=A.cB(d,!1,v,0)
w.b=u
if(!w.aje(u))return v
u=new A.ang(C.nn,B.a([],y.J))
w.a=u
x=w.b
x.toString
if(!w.arH(x,u))return v
u=w.a
switch(u.f.a){case 3:u.as=u.z.length
return u
case 2:x=w.b
x.toString
x.d=u.ay
if(!A.cdM(x,u).Ma())return v
u=w.a
u.as=u.z.length
return u
case 1:x=w.b
x.toString
x.d=u.ay
if(!A.cdK(x,u).Ma())return v
u=w.a
u.as=u.z.length
return u
case 0:throw B.e(A.bR("Unknown format for WebP"))}},
jq(d){var x,w,v,u,t=this,s=t.b
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
return t.ahB(s.zW(x,w),d)}w=x.f
if(w===C.vU){s.toString
u=s.zW(x.ch,x.ay)
s=t.a
s.toString
return A.cdM(u,s).vS(0)}else if(w===C.CV){s.toString
u=s.zW(x.ch,x.ay)
s=t.a
s.toString
return A.cdK(u,s).vS(0)}return null},
mY(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=null
if(p.nV(e)==null)return o
x=p.a.e
if(!x)return p.jq(0)
for(w=o,v=w,u=0;x=p.a,u<x.as;++u){f=x.z[u]
t=p.jq(u)
if(t==null)continue
t.y=f.e
if(v==null||w==null){x=p.a
s=x.a
x=x.b
r=t.gpC()
q=t.a
q=q==null?o:q.gda()
if(q==null)q=C.a_
v=A.hc(o,o,q,t.y,C.b3,x,o,0,r,o,C.a_,s,!1)
w=v}else{w=A.Aw(w,!1,!1)
x=f.f
x===$&&B.b()
if(x){x=w.a
if(x!=null)x.mS(0,o)}}A.cfa(w,t,C.x2,o,o,f.a,f.b,o,o,o,o)
v.mO(w)}return v},
ahB(d,e){var x,w,v,u=null,t=B.a([],y.J),s=new A.ang(C.nn,t)
if(!this.arH(d,s))return u
if(s.f===C.nn)return u
s.as=this.a.as
if(s.e){x=t.length
if(e>=x)return u
w=t[e]
t=w.x
t===$&&B.b()
x=w.w
x===$&&B.b()
return this.ahB(d.zW(t,x),e)}else{v=d.zW(s.ch,s.ay)
t=s.f
if(t===C.vU)return A.cdM(v,s).vS(0)
else if(t===C.CV)return A.cdK(v,s).vS(0)}return u},
aje(d){if(d.pI(4)!=="RIFF")return!1
d.ai()
if(d.pI(4)!=="WEBP")return!1
return!0},
arH(d,e){var x,w,v,u,t,s,r,q,p,o,n,m
for(x=d.c,w=d.b;d.d<x;){v=d.pI(4)
u=d.ai()
t=u+1>>>1<<1>>>0
s=d.d
r=s-w
switch(v){case"VP8X":if(!this.aZ2(d,e))return!1
break
case"VP8 ":e.ay=r
e.ch=u
e.f=C.CV
break
case"VP8L":e.ay=r
e.ch=u
e.f=C.vU
break
case"ALPH":e.toString
s=d.a
q=d.e
p=J.b0(s)
s=new A.le(s,0,p,0,q)
e.at=s
s.d=d.d
d.d+=t
break
case"ANIM":e.f=C.b4F
o=d.ai()
s=new Uint8Array(4)
s[0]=o>>>8&255
s[1]=o>>>16&255
s[2]=o>>>24&255
s[3]=o&255
d.bJ()
break
case"ANMF":if(!this.aXR(d,e,u))return!1
break
case"ICCP":e.toString
n=d.jl(u)
d.d=d.d+(n.c-n.d)
n.ht()
break
case"EXIF":e.toString
e.w=d.pI(u)
break
case"XMP ":e.toString
d.pI(u)
break
default:d.d=s+t
break}s=d.d
m=t-(s-w-r)
if(m>0)d.d=s+m}if(!e.d)e.d=e.at!=null
return e.f!==C.nn},
aZ2(d,e){var x,w,v,u,t=d.cZ()
if((t&192)!==0)return!1
x=D.c.O(t,4)
w=D.c.O(t,1)
if((t&1)!==0)return!1
if(d.r_()!==0)return!1
v=d.r_()
u=d.r_()
e.a=v+1
e.b=u+1
e.e=(w&1)!==0
e.d=(x&1)!==0
return!0},
aXR(d,e,f){var x,w=d.r_(),v=d.r_()
d.r_()
x=new A.anf(w*2,v*2,d.r_()+1,d.r_())
x.aPn(d,f)
if(x.r!==0)return!1
e.z.push(x)
return!0}}
A.baT.prototype={
J(){return"IccProfileCompression."+this.b}}
A.XT.prototype={
bnZ(){var x,w=this
if(w.b===C.yK)return w.c
x=y.D.a(C.Ev.jr(w.c))
w.c=x
w.b=C.yK
return x}}
A.alK.prototype={
J(){return"FrameType."+this.b}}
A.Ax.prototype={
gkl(){var x=this.x
return x===$?this.x=B.a([],y.g):x},
aOT(d,e,f,g){var x,w,v,u=this,t=d.gda(),s=d.gpC(),r=d.a
u.ahq(g,e,t,s,r==null?null:r.geA())
t=d.b
if(t!=null)u.b=B.jU(t,y.N,y.I)
t=d.d
if(t!=null){s=y.N
u.d=B.jU(t,s,s)}u.gkl().push(u)
if(!f){x=d.gkl().length
for(t=y.g,w=1;w<x;++w){v=d.x
u.mO(A.amL((v===$?d.x=B.a([],t):v)[w],e,!1,g))}}},
aOS(d,e,f){var x,w,v,u,t=this,s=d.b
if(s!=null)t.b=B.jU(s,y.N,y.I)
s=d.d
if(s!=null){x=y.N
t.d=B.jU(s,x,x)}t.gkl().push(t)
if(!e&&d.gkl().length>1){w=d.gkl().length
for(s=y.g,v=1;v<w;++v){u=d.x
t.mO(A.Aw((u===$?d.x=B.a([],s):u)[v],!1,!1))}}},
mO(d){var x=this
if(d==null)d=A.Aw(x,!0,!0)
d.z=x.gkl().length
if(D.b.gR(x.gkl())!==d)x.gkl().push(d)
return d},
Uy(){return this.mO(null)},
ahq(d,e,f,g,h){var x,w,v=this,u=null
switch(f.a){case 0:if(h==null){x=D.d.eR(d*g/8)
w=new A.MM($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.eR(d/8)
w=new A.MM($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 1:if(h==null){x=D.d.eR(d*(g<<1>>>0)/8)
w=new A.MO($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.eR(d/4)
w=new A.MO($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 2:if(h==null){if(g===2)x=d
else if(g===4)x=d*2
else x=g===3?D.d.eR(d*1.5):D.d.eR(d/2)
w=new A.MQ($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.eR(d/2)
w=new A.MQ($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 3:if(h==null)v.a=A.clo(d,e,g)
else v.a=new A.MR(new Uint8Array(d*e),h,d,e,1)
break
case 4:x=d*e
if(h==null)v.a=new A.MN(new Uint16Array(x*g),u,d,e,g)
else v.a=new A.MN(new Uint16Array(x),h,d,e,1)
break
case 5:v.a=A.cGU(d,e,g)
break
case 6:v.a=new A.XZ(new Int8Array(d*e*g),d,e,g)
break
case 7:v.a=new A.XX(new Int16Array(d*e*g),d,e,g)
break
case 8:v.a=new A.XY(new Int32Array(d*e*g),d,e,g)
break
case 9:v.a=A.cGS(d,e,g)
break
case 10:v.a=A.cGT(d,e,g)
break
case 11:v.a=new A.XW(new Float64Array(d*e*4*g),d,e,g)
break}},
k(d){var x=this
return"Image("+x.gcL(0)+", "+x.gb_(0)+", "+x.gda().b+", "+x.gpC()+")"},
gcL(d){var x=this.a
x=x==null?null:x.a
return x==null?0:x},
gb_(d){var x=this.a
x=x==null?null:x.b
return x==null?0:x},
gda(){var x=this.a
x=x==null?null:x.gda()
return x==null?C.a_:x},
gvZ(){var x=this.e
return x==null?this.e=new A.M9(B.D(y.N,y.P)):x},
aG5(d,e){var x=this,w=x.b;(w==null?x.b=B.D(y.N,y.I):w).n(0,d,e)
if(x.b.a===0)x.b=null},
gX(d){var x=this.a
return x.gX(x)},
gh0(d){var x=this.a
x=x==null?null:x.gh0(x)
if(x==null)x=new Uint8Array(0).buffer
return x},
gpC(){var x=this.a
x=x==null?null:x.geA()
x=x==null?null:x.b
if(x==null){x=this.a
x=x==null?null:x.c}return x==null?0:x},
gqF(){var x=this.a
return(x==null?null:x.geA())!=null},
gmg(){var x=this.a
x=x==null?null:x.gmg()
return x==null?0:x},
axL(d,e){return d>=0&&e>=0&&d<this.gcL(0)&&e<this.gb_(0)},
nf(d,e,f,g){var x=this.a
x=x==null?null:x.nf(d,e,f,g)
if(x==null)x=new A.wy(new Uint8Array(0))
return x},
e2(d,e,f){var x=this.a
x=x==null?null:x.e2(d,e,f)
return x==null?new A.f0():x},
ng(d,e){return this.e2(d,e,null)},
jV(d,e){if(d<0||d>=this.gcL(0)||e<0||e>=this.gb_(0))return new A.f0()
return this.e2(d,e,null)},
aE6(d,e,f){switch(f.a){case 0:return this.jV(D.d.D(d),D.d.D(e))
case 1:case 3:return this.aE7(d,e)
case 2:return this.aE5(d,e)}},
aE7(d,e){var x,w,v,u,t,s,r=this,q=D.d.D(d),p=q-(d>=0?0:1),o=p+1
q=D.d.D(e)
x=q-(e>=0?0:1)
w=x+1
q=new A.bbw(d-p,e-x)
v=r.jV(p,x)
u=w>=r.gb_(0)?v:r.jV(p,w)
t=o>=r.gcL(0)?v:r.jV(o,x)
s=o>=r.gcL(0)||w>=r.gb_(0)?v:r.jV(o,w)
return r.nf(q.$4(v.gaC(v),t.gaC(t),u.gaC(u),s.gaC(s)),q.$4(v.gaL(),t.gaL(),u.gaL(),s.gaL()),q.$4(v.gaM(v),t.gaM(t),u.gaM(u),s.gaM(s)),q.$4(v.gaP(v),t.gaP(t),u.gaP(u),s.gaP(s)))},
aE5(d0,d1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=D.d.D(d0),c6=c5-(d0>=0?0:1),c7=c6-1,c8=c6+1,c9=c6+2
c5=D.d.D(d1)
x=c5-(d1>=0?0:1)
w=x-1
v=x+1
u=x+2
t=d0-c6
s=d1-x
c5=new A.bbv()
r=c4.jV(c6,x)
q=c7<0
p=!q
o=!p||w<0?r:c4.jV(c7,w)
n=q?r:c4.jV(c6,w)
m=w<0
l=m||c8>=c4.gcL(0)?r:c4.jV(c8,w)
k=c9>=c4.gcL(0)||m?r:c4.jV(c9,w)
j=c5.$5(t,o.gaC(o),n.gaC(n),l.gaC(l),k.gaC(k))
i=c5.$5(t,o.gaL(),n.gaL(),l.gaL(),k.gaL())
h=c5.$5(t,o.gaM(o),n.gaM(n),l.gaM(l),k.gaM(k))
g=c5.$5(t,o.gaP(o),n.gaP(n),l.gaP(l),k.gaP(k))
f=q?r:c4.jV(c7,x)
e=c8>=c4.gcL(0)?r:c4.jV(c8,x)
d=c9>=c4.gcL(0)?r:c4.jV(c9,x)
a0=c5.$5(t,f.gaC(f),r.gaC(r),e.gaC(e),d.gaC(d))
a1=c5.$5(t,f.gaL(),r.gaL(),e.gaL(),d.gaL())
a2=c5.$5(t,f.gaM(f),r.gaM(r),e.gaM(e),d.gaM(d))
a3=c5.$5(t,f.gaP(f),r.gaP(r),e.gaP(e),d.gaP(d))
a4=!p||v>=c4.gb_(0)?r:c4.jV(c7,v)
a5=v>=c4.gb_(0)?r:c4.jV(c6,v)
a6=c8>=c4.gcL(0)||v>=c4.gb_(0)?r:c4.jV(c8,v)
a7=c9>=c4.gcL(0)||v>=c4.gb_(0)?r:c4.jV(c9,v)
a8=c5.$5(t,a4.gaC(a4),a5.gaC(a5),a6.gaC(a6),a7.gaC(a7))
a9=c5.$5(t,a4.gaL(),a5.gaL(),a6.gaL(),a7.gaL())
b0=c5.$5(t,a4.gaM(a4),a5.gaM(a5),a6.gaM(a6),a7.gaM(a7))
b1=c5.$5(t,a4.gaP(a4),a5.gaP(a5),a6.gaP(a6),a7.gaP(a7))
b2=!p||u>=c4.gb_(0)?r:c4.jV(c7,u)
b3=u>=c4.gb_(0)?r:c4.jV(c6,u)
b4=c8>=c4.gcL(0)||u>=c4.gb_(0)?r:c4.jV(c8,u)
b5=c9>=c4.gcL(0)||u>=c4.gb_(0)?r:c4.jV(c9,u)
b6=c5.$5(t,b2.gaC(b2),b3.gaC(b3),b4.gaC(b4),b5.gaC(b5))
b7=c5.$5(t,b2.gaL(),b3.gaL(),b4.gaL(),b5.gaL())
b8=c5.$5(t,b2.gaM(b2),b3.gaM(b3),b4.gaM(b4),b5.gaM(b5))
b9=c5.$5(t,b2.gaP(b2),b3.gaP(b3),b4.gaP(b4),b5.gaP(b5))
c0=c5.$5(s,j,a0,a8,b6)
c1=c5.$5(s,i,a1,a9,b7)
c2=c5.$5(s,h,a2,b0,b8)
c3=c5.$5(s,g,a3,b1,b9)
return c4.nf(D.d.D(c0),D.d.D(c1),D.d.D(c2),D.d.D(c3))},
wS(d,e,f){var x
if(y.c0.b(f))if(f.ghJ(f).geA()!=null)if(this.gqF()){x=this.a
if(x!=null)x.eQ(d,e,f.gdW(f),0,0)
return}x=this.a
if(x!=null)x.jX(d,e,f.gaC(f),f.gaL(),f.gaM(f),f.gaP(f))},
gc2(){var x=this.a
x=x==null?null:x.gc2()
return x==null?0:x},
mS(d,e){var x=this.a
return x==null?null:x.mS(0,e)},
P(d){return this.mS(0,null)},
aud(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
if(a5==null)a5=a2.gda()
if(a6==null)a6=a2.gpC()
a4=C.VK.i(0,a5)
if(a5.a<3)a2.gda()
x=!1
if(a5===a2.gda())if(a6===a2.gpC()){w=a2.a
x=(w==null?a3:w.geA())==null}if(x)return A.Aw(a2,!1,!1)
for(x=a2.gkl(),w=x.length,v=y.N,u=y.p,t=a3,s=0;s<x.length;x.length===w||(0,B.O)(x),++s,t=j){r=x[s]
q=r.a
p=q==null
o=p?a3:q.a
if(o==null)o=0
q=p?a3:q.b
if(q==null)q=0
p=r.e
p=p==null?a3:A.WI(p)
n=r.c
if(n==null)n=a3
else{m=n.a
l=n.b
n=n.c
n=new A.XT(m,l,new Uint8Array(n.subarray(0,B.pT(0,a3,n.length))))}m=r.w
l=r.r
k=A.hc(a3,p,a5,r.y,m,q,n,l,a6,a3,C.a_,o,!1)
q=r.d
k.d=q!=null?B.jU(q,v,v):a3
if(t!=null){t.mO(k)
j=t}else j=k
q=k.a
i=q==null?a3:q.geA()
q=k.a
q=q==null?a3:q.geA()
h=q==null?a3:q.gda()
if(h==null)h=a5
q=r.a
if(i!=null){g=B.D(u,u)
f=q==null?a3:q.e2(0,0,a3)
if(f==null)f=new A.f0()
for(q=k.a,q=q.gX(q),e=a3,d=0;q.q();){a0=q.gK(q)
a1=A.cuG(D.d.fw(f.gig()*255),D.d.fw(f.gi_()*255),D.d.fw(f.gi7()*255),0)
if(g.a_(0,a1)){p=g.i(0,a1)
p.toString
a0.sdW(0,p)}else{g.n(0,a1,d)
a0.sdW(0,d)
e=A.oJ(f,a4,h,a6,e)
i.oC(d,e.gaC(e),e.gaL(),e.gaM(e));++d}f.q()}}else{f=q==null?a3:q.e2(0,0,a3)
if(f==null)f=new A.f0()
for(q=k.a,q=q.gX(q);q.q();){A.oJ(f,a4,a3,a3,q.gK(q))
f.q()}}}t.toString
return t},
nx(d){return this.aud(null,d,null)},
auc(d){return this.aud(null,null,d)},
bkP(d){var x,w,v,u
if(this.d==null){x=y.N
this.d=B.D(x,x)}for(x=B.fH(d,d.r,B.r(d).c);x.q();){w=x.d
v=this.d
v.toString
u=d.i(0,w)
u.toString
v.n(0,w,u)}},
aTK(d,e,f){var x,w=65536
switch(e.a){case 0:return null
case 1:return null
case 2:return null
case 3:x=d===C.bW?w:256
return new A.tb(new Uint8Array(x*f),x,f)
case 4:x=d===C.bW?w:256
return new A.arR(new Uint16Array(x*f),x,f)
case 5:x=d===C.bW?w:256
return new A.a_w(new Uint32Array(x*f),x,f)
case 6:x=d===C.bW?w:256
return new A.arQ(new Int8Array(x*f),x,f)
case 7:x=d===C.bW?w:256
return new A.arO(new Int16Array(x*f),x,f)
case 8:x=d===C.bW?w:256
return new A.arP(new Int32Array(x*f),x,f)
case 9:x=d===C.bW?w:256
return new A.arL(new Uint16Array(x*f),x,f)
case 10:x=d===C.bW?w:256
return new A.arM(new Float32Array(x*f),x,f)
case 11:x=d===C.bW?w:256
return new A.arN(new Float64Array(x*f),x,f)}}}
A.lb.prototype={
geA(){return null}}
A.MK.prototype={
qf(d,e){var x=this,w=x.d
if(e)w=new Uint16Array(w.length)
else w=new Uint16Array(B.bJ(w))
return new A.MK(w,x.a,x.b,x.c)},
gda(){return C.h7},
gh0(d){return this.d.buffer},
gmg(){return 16},
gr4(){return this.a*this.c*2},
gX(d){return A.ccg(this)},
pM(d,e,f,g,h){return A.tc(A.ccg(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gc2(){return 1},
gqN(){return!0},
nf(d,e,f,g){var x=new Uint16Array(4),w=new A.KV(x)
x[0]=A.fu(d)
x[1]=A.fu(e)
x[2]=A.fu(f)
x[3]=A.fu(g)
x=w
return x},
e2(d,e,f){if(f==null||!(f instanceof A.GH)||f.d!==this)f=A.ccg(this)
f.fZ(0,d,e)
return f},
ng(d,e){return this.e2(d,e,null)},
m0(d,e,f){var x=this.c
this.d[e*this.a*x+d*x]=A.fu(f)},
eQ(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=A.fu(f)
if(x>1){v[w+1]=A.fu(g)
if(x>2)v[w+2]=A.fu(h)}},
jX(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=A.fu(f)
if(x>1){v[w+1]=A.fu(g)
if(x>2){v[w+2]=A.fu(h)
if(x>3)v[w+3]=A.fu(i)}}},
k(d){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){}}
A.ML.prototype={
qf(d,e){var x=this,w=x.d
if(e)w=new Float32Array(w.length)
else w=new Float32Array(B.bJ(w))
return new A.ML(w,x.a,x.b,x.c)},
gda(){return C.im},
gh0(d){return this.d.buffer},
gmg(){return 32},
gX(d){return A.cch(this)},
pM(d,e,f,g,h){return A.tc(A.cch(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gc2(){return 1},
gr4(){return this.a*this.c*4},
gqN(){return!0},
nf(d,e,f,g){var x=new Float32Array(4),w=new A.KW(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
e2(d,e,f){if(f==null||!(f instanceof A.GI)||f.d!==this)f=A.cch(this)
f.fZ(0,d,e)
return f},
ng(d,e){return this.e2(d,e,null)},
m0(d,e,f){var x=this.c
this.d[e*this.a*x+d*x]=f},
eQ(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
jX(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
k(d){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){}}
A.XW.prototype={
qf(d,e){var x=this,w=x.d
if(e)w=new Float64Array(w.length)
else w=new Float64Array(B.bJ(w))
return new A.XW(w,x.a,x.b,x.c)},
gda(){return C.jQ},
gh0(d){return this.d.buffer},
gt(d){return this.d.byteLength},
gmg(){return 64},
gX(d){return A.cci(this)},
pM(d,e,f,g,h){return A.tc(A.cci(this),e,f,g,h)},
gc2(){return 1},
gr4(){return this.a*this.c*8},
gqN(){return!0},
nf(d,e,f,g){var x=new Float64Array(4),w=new A.KX(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
e2(d,e,f){if(f==null||!(f instanceof A.GJ)||f.d!==this)f=A.cci(this)
f.fZ(0,d,e)
return f},
ng(d,e){return this.e2(d,e,null)},
m0(d,e,f){var x=this.c
this.d[e*this.a*x+d*x]=f},
eQ(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
jX(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
k(d){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){}}
A.XX.prototype={
qf(d,e){var x=this,w=x.d
if(e)w=new Int16Array(w.length)
else w=new Int16Array(B.bJ(w))
return new A.XX(w,x.a,x.b,x.c)},
gda(){return C.jS},
gh0(d){return this.d.buffer},
gX(d){return A.ccj(this)},
pM(d,e,f,g,h){return A.tc(A.ccj(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gc2(){return 32767},
gqN(){return!0},
gmg(){return 16},
gr4(){return this.a*this.c*2},
nf(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Int16Array(4),s=new A.KY(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
e2(d,e,f){if(f==null||!(f instanceof A.GK)||f.d!==this)f=A.ccj(this)
f.fZ(0,d,e)
return f},
ng(d,e){return this.e2(d,e,null)},
m0(d,e,f){var x=this.c
this.d[e*this.a*x+d*x]=D.d.D(f)},
eQ(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
jX(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
k(d){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){}}
A.XY.prototype={
qf(d,e){var x=this,w=x.d
if(e)w=new Int32Array(w.length)
else w=new Int32Array(B.bJ(w))
return new A.XY(w,x.a,x.b,x.c)},
gda(){return C.jT},
gh0(d){return this.d.buffer},
gmg(){return 32},
gr4(){return this.a*this.c*4},
gX(d){return A.cck(this)},
pM(d,e,f,g,h){return A.tc(A.cck(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gc2(){return 2147483647},
gqN(){return!0},
nf(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Int32Array(4),s=new A.KZ(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
e2(d,e,f){if(f==null||!(f instanceof A.GL)||f.d!==this)f=A.cck(this)
f.fZ(0,d,e)
return f},
ng(d,e){return this.e2(d,e,null)},
m0(d,e,f){var x=this.c
this.d[e*this.a*x+d*x]=D.d.D(f)},
eQ(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
jX(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
k(d){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){}}
A.XZ.prototype={
qf(d,e){var x=this,w=x.d
if(e)w=new Int8Array(w.length)
else w=new Int8Array(B.bJ(w))
return new A.XZ(w,x.a,x.b,x.c)},
gda(){return C.jR},
gh0(d){return this.d.buffer},
gr4(){return this.a*this.c},
gX(d){return A.ccl(this)},
pM(d,e,f,g,h){return A.tc(A.ccl(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gc2(){return 127},
gqN(){return!0},
gmg(){return 8},
nf(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Int8Array(4),s=new A.L_(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
e2(d,e,f){if(f==null||!(f instanceof A.GM)||f.d!==this)f=A.ccl(this)
f.fZ(0,d,e)
return f},
ng(d,e){return this.e2(d,e,null)},
m0(d,e,f){var x=this.c
this.d[e*(this.a*x)+d*x]=D.d.D(f)},
eQ(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
jX(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
k(d){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){}}
A.MM.prototype={
bFw(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.b3()
this.d=x},
qf(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bJ(v))}x=w.f
x=x==null?null:x.dL(0)
return new A.MM(v,w.e,x,w.a,w.b,w.c)},
gda(){return C.eU},
gt(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gc2(){var x=this.f
x=x==null?null:x.gc2()
return x==null?1:x},
gqN(){return!1},
gh0(d){var x=this.d
x===$&&B.b()
return x.buffer},
gmg(){return 1},
gX(d){return A.a_L(this)},
pM(d,e,f,g,h){return A.tc(A.a_L(this),e,f,g,h)},
nf(d,e,f,g){var x=new A.L2(4,0)
x.i1(D.d.D(d),D.d.D(e),D.d.D(f),D.d.D(g))
return x},
e2(d,e,f){if(f==null||!(f instanceof A.GN)||f.f!==this)f=A.a_L(this)
f.fZ(0,d,e)
return f},
ng(d,e){return this.e2(d,e,null)},
m0(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a_L(w):x).fZ(0,d,e)
w.r.k8(0,f)},
eQ(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a_L(w):x).fZ(0,d,e)
w.r.jY(f,g,h)},
jX(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a_L(w):x).fZ(0,d,e)
w.r.i1(f,g,h,i)},
k(d){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){},
gr4(){return this.e},
geA(){return this.f}}
A.MN.prototype={
qf(d,e){var x,w=this,v=w.d
if(e)v=new Uint16Array(v.length)
else v=new Uint16Array(B.bJ(v))
x=w.e
x=x==null?null:x.dL(0)
return new A.MN(v,x,w.a,w.b,w.c)},
gda(){return C.bW},
gh0(d){return this.d.buffer},
gmg(){return 16},
gc2(){var x=this.e
x=x==null?null:x.gc2()
return x==null?65535:x},
gr4(){return this.a*this.c*2},
gX(d){return A.ccm(this)},
pM(d,e,f,g,h){return A.tc(A.ccm(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gqN(){return!0},
nf(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Uint16Array(4),s=new A.L3(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
e2(d,e,f){if(f==null||!(f instanceof A.GO)||f.d!==this)f=A.ccm(this)
f.fZ(0,d,e)
return f},
ng(d,e){return this.e2(d,e,null)},
m0(d,e,f){var x=this.c
this.d[e*this.a*x+d*x]=D.d.D(f)},
eQ(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
jX(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
k(d){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){},
geA(){return this.e}}
A.MO.prototype={
bFx(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.b3()
this.d=x},
qf(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bJ(v))}x=w.f
x=x==null?null:x.dL(0)
return new A.MO(v,w.e,x,w.a,w.b,w.c)},
gda(){return C.fx},
gmg(){return 2},
gh0(d){var x=this.d
x===$&&B.b()
return x.buffer},
gX(d){return A.a_M(this)},
pM(d,e,f,g,h){return A.tc(A.a_M(this),e,f,g,h)},
gt(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gc2(){var x=this.f
x=x==null?null:x.gc2()
return x==null?3:x},
gqN(){return!1},
nf(d,e,f,g){var x=new A.L4(4,0)
x.i1(D.d.D(d),D.d.D(e),D.d.D(f),D.d.D(g))
return x},
e2(d,e,f){if(f==null||!(f instanceof A.GP)||f.f!==this)f=A.a_M(this)
f.fZ(0,d,e)
return f},
ng(d,e){return this.e2(d,e,null)},
m0(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a_M(w):x).fZ(0,d,e)
w.r.k9(0,f)},
eQ(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a_M(w):x).fZ(0,d,e)
w.r.jY(f,g,h)},
jX(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a_M(w):x).fZ(0,d,e)
w.r.i1(f,g,h,i)},
k(d){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){},
gr4(){return this.e},
geA(){return this.f}}
A.MP.prototype={
qf(d,e){var x=this,w=x.d
if(e)w=new Uint32Array(w.length)
else w=new Uint32Array(B.bJ(w))
return new A.MP(w,x.a,x.b,x.c)},
gda(){return C.io},
gh0(d){return this.d.buffer},
gr4(){return this.a*this.c*4},
gmg(){return 32},
gc2(){return 4294967295},
gX(d){return A.ccn(this)},
pM(d,e,f,g,h){return A.tc(A.ccn(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gqN(){return!0},
nf(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Uint32Array(4),s=new A.L5(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
e2(d,e,f){if(f==null||!(f instanceof A.GQ)||f.d!==this)f=A.ccn(this)
f.fZ(0,d,e)
return f},
ng(d,e){return this.e2(d,e,null)},
m0(d,e,f){var x=this.c
this.d[e*this.a*x+d*x]=D.d.D(f)},
eQ(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
jX(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
k(d){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){}}
A.MQ.prototype={
bFy(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.b3()
this.d=x},
qf(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bJ(v))}x=w.f
x=x==null?null:x.dL(0)
return new A.MQ(v,w.e,x,w.a,w.b,w.c)},
gda(){return C.fy},
gh0(d){var x=this.d
x===$&&B.b()
return x.buffer},
gX(d){return A.a_N(this)},
pM(d,e,f,g,h){return A.tc(A.a_N(this),e,f,g,h)},
gt(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gc2(){var x=this.f
x=x==null?null:x.gc2()
return x==null?15:x},
gqN(){return!1},
gmg(){return 4},
nf(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new A.L6(4,new Uint8Array(2))
t.i1(x,w,v,u)
x=t
return x},
e2(d,e,f){if(f==null||!(f instanceof A.GR)||f.e!==this)f=A.a_N(this)
f.fZ(0,d,e)
return f},
ng(d,e){return this.e2(d,e,null)},
m0(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a_N(w):x).fZ(0,d,e)
w.r.kb(0,f)},
eQ(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a_N(w):x).fZ(0,d,e)
w.r.jY(f,g,h)},
jX(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a_N(w):x).fZ(0,d,e)
w.r.i1(f,g,h,i)},
k(d){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){},
gr4(){return this.e},
geA(){return this.f}}
A.MR.prototype={
qf(d,e){var x,w=this,v=w.d
if(e)v=new Uint8Array(v.length)
else v=new Uint8Array(B.bJ(v))
x=w.e
x=x==null?null:x.dL(0)
return new A.MR(v,x,w.a,w.b,w.c)},
gda(){return C.a_},
gh0(d){return this.d.buffer},
gr4(){return this.a*this.c},
gmg(){return 8},
gX(d){return A.bl7(this)},
pM(d,e,f,g,h){return A.tc(A.bl7(this),e,f,g,h)},
gt(d){return this.d.byteLength},
gc2(){var x=this.e
x=x==null?null:x.gc2()
return x==null?255:x},
gqN(){return!1},
nf(d,e,f,g){var x=A.cCE(D.d.D(D.d.b8(d,0,255)),D.d.D(D.d.b8(e,0,255)),D.d.D(D.d.b8(f,0,255)),D.d.D(D.d.b8(g,0,255)))
return x},
e2(d,e,f){if(f==null||!(f instanceof A.GS)||f.d!==this)f=A.bl7(this)
f.fZ(0,d,e)
return f},
ng(d,e){return this.e2(d,e,null)},
m0(d,e,f){var x=this.c
this.d[e*(this.a*x)+d*x]=D.d.D(f)},
eQ(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
jX(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d
v[w]=D.d.D(f)
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
k(d){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
mS(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=e==null?o:A.oJ(e,o,C.a_,o,o),m=p.c
if(m===1){x=n==null?0:D.c.b8(B.b8(n.gaC(n)),0,255)
m=p.d
D.ac.jP(m,0,m.length,x)}else if(m===2){m=n==null
x=m?0:D.c.b8(B.b8(n.gaC(n)),0,255)
w=m?0:D.c.b8(B.b8(n.gaL()),0,255)
v=B.cc0(p.d.buffer,0,o)
D.iM.jP(v,0,v.length,(w<<8|x)>>>0)}else if(m===4){m=n==null
x=m?0:D.c.b8(B.b8(n.gaC(n)),0,255)
w=m?0:D.c.b8(B.b8(n.gaL()),0,255)
u=m?0:D.c.b8(B.b8(n.gaM(n)),0,255)
t=m?0:D.c.b8(B.b8(n.gaP(n)),0,255)
s=B.oe(p.d.buffer,0,o)
D.ct.jP(s,0,s.length,(t<<24|u<<16|w<<8|x)>>>0)}else{m=n==null
x=m?0:D.c.b8(B.b8(n.gaC(n)),0,255)
w=m?0:D.c.b8(B.b8(n.gaL()),0,255)
u=m?0:D.c.b8(B.b8(n.gaM(n)),0,255)
for(r=A.bl7(p),m=r.d,q=m.c>0,m=m.d;r.q();){if(q)m[r.c]=D.d.D(D.c.b8(x,0,255))
r.saL(w)
r.saM(0,u)}}},
geA(){return this.e}}
A.anh.prototype={
J(){return"Interpolation."+this.b}}
A.bkT.prototype={}
A.arL.prototype={
dL(d){return new A.arL(new Uint16Array(B.bJ(this.c)),this.a,this.b)},
gh0(d){return this.c.buffer},
gda(){return C.h7},
gc2(){return 1},
eU(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=A.fu(g)},
oC(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=A.fu(e)
if(w>1){x[d+1]=A.fu(f)
if(w>2)x[d+2]=A.fu(g)}},
ow(d,e,f){var x,w=this.b
if(f<w){w=this.c[e*w+f]
x=$.h9
w=(x!=null?x:A.hZ())[w]}else w=0
return w},
my(d){var x=this.c[d*this.b],w=$.h9
return(w!=null?w:A.hZ())[x]},
mw(d){var x,w=this.b
if(w<2)return 0
w=this.c[d*w+1]
x=$.h9
return(x!=null?x:A.hZ())[w]},
mu(d){var x,w=this.b
if(w<3)return 0
w=this.c[d*w+2]
x=$.h9
return(x!=null?x:A.hZ())[w]},
nR(d){var x,w=this.b
if(w<4)return 0
w=this.c[d*w+3]
x=$.h9
return(x!=null?x:A.hZ())[w]},
tH(d,e){return this.eU(0,d,0,e)},
tF(d,e){return this.eU(0,d,1,e)},
tE(d,e){return this.eU(0,d,2,e)},
tD(d,e){return this.eU(0,d,3,e)}}
A.arM.prototype={
dL(d){return new A.arM(new Float32Array(B.bJ(this.c)),this.a,this.b)},
gh0(d){return this.c.buffer},
gda(){return C.im},
gc2(){return 1},
eU(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=g},
oC(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
ow(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
my(d){return this.c[d*this.b]},
mw(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
mu(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
nR(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
tH(d,e){return this.eU(0,d,0,e)},
tF(d,e){return this.eU(0,d,1,e)},
tE(d,e){return this.eU(0,d,2,e)},
tD(d,e){return this.eU(0,d,3,e)}}
A.arN.prototype={
dL(d){return new A.arN(new Float64Array(B.bJ(this.c)),this.a,this.b)},
gh0(d){return this.c.buffer},
gda(){return C.jQ},
gc2(){return 1},
eU(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=g},
oC(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
ow(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
my(d){return this.c[d*this.b]},
mw(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
mu(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
nR(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
tH(d,e){return this.eU(0,d,0,e)},
tF(d,e){return this.eU(0,d,1,e)},
tE(d,e){return this.eU(0,d,2,e)},
tD(d,e){return this.eU(0,d,3,e)}}
A.arO.prototype={
dL(d){return new A.arO(new Int16Array(B.bJ(this.c)),this.a,this.b)},
gh0(d){return this.c.buffer},
gda(){return C.jS},
gc2(){return 32767},
eU(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=D.c.D(g)},
oC(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=D.d.D(e)
if(w>1){x[d+1]=D.d.D(f)
if(w>2)x[d+2]=D.d.D(g)}},
ow(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
my(d){return this.c[d*this.b]},
mw(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
mu(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
nR(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
tH(d,e){return this.eU(0,d,0,e)},
tF(d,e){return this.eU(0,d,1,e)},
tE(d,e){return this.eU(0,d,2,e)},
tD(d,e){return this.eU(0,d,3,e)}}
A.arP.prototype={
dL(d){return new A.arP(new Int32Array(B.bJ(this.c)),this.a,this.b)},
gh0(d){return this.c.buffer},
gda(){return C.jT},
gc2(){return 2147483647},
eU(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=D.c.D(g)},
oC(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=D.d.D(e)
if(w>1){x[d+1]=D.d.D(f)
if(w>2)x[d+2]=D.d.D(g)}},
ow(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
my(d){return this.c[d*this.b]},
mw(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
mu(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
nR(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
tH(d,e){return this.eU(0,d,0,e)},
tF(d,e){return this.eU(0,d,1,e)},
tE(d,e){return this.eU(0,d,2,e)},
tD(d,e){return this.eU(0,d,3,e)}}
A.arQ.prototype={
dL(d){return new A.arQ(new Int8Array(B.bJ(this.c)),this.a,this.b)},
gh0(d){return this.c.buffer},
gda(){return C.jR},
gc2(){return 127},
eU(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=D.c.D(g)},
oC(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=D.d.D(e)
if(w>1){x[d+1]=D.d.D(f)
if(w>2)x[d+2]=D.d.D(g)}},
ow(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
my(d){return this.c[d*this.b]},
mw(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
mu(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
nR(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
tH(d,e){return this.eU(0,d,0,e)},
tF(d,e){return this.eU(0,d,1,e)},
tE(d,e){return this.eU(0,d,2,e)},
tD(d,e){return this.eU(0,d,3,e)}}
A.arR.prototype={
dL(d){return new A.arR(new Uint16Array(B.bJ(this.c)),this.a,this.b)},
gh0(d){return this.c.buffer},
gda(){return C.bW},
gc2(){return 65535},
eU(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=D.c.D(g)},
oC(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=D.d.D(e)
if(w>1){x[d+1]=D.d.D(f)
if(w>2)x[d+2]=D.d.D(g)}},
ow(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
my(d){return this.c[d*this.b]},
mw(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
mu(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
nR(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
tH(d,e){return this.eU(0,d,0,e)},
tF(d,e){return this.eU(0,d,1,e)},
tE(d,e){return this.eU(0,d,2,e)},
tD(d,e){return this.eU(0,d,3,e)}}
A.a_w.prototype={
dL(d){return new A.a_w(new Uint32Array(B.bJ(this.c)),this.a,this.b)},
gh0(d){return this.c.buffer},
gda(){return C.io},
gc2(){return 4294967295},
eU(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=D.c.D(g)},
oC(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=D.d.D(e)
if(w>1){x[d+1]=D.d.D(f)
if(w>2)x[d+2]=D.d.D(g)}},
ow(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
my(d){return this.c[d*this.b]},
mw(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
mu(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
nR(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
tH(d,e){return this.eU(0,d,0,e)},
tF(d,e){return this.eU(0,d,1,e)},
tE(d,e){return this.eU(0,d,2,e)},
tD(d,e){return this.eU(0,d,3,e)}}
A.tb.prototype={
dL(d){return A.cmW(this)},
gh0(d){return this.c.buffer},
gda(){return C.a_},
gc2(){return 255},
eU(d,e,f,g){var x=this.b
if(f<x)this.c[e*x+f]=D.c.D(g)},
oC(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x[d]=D.d.D(e)
if(w>1){x[d+1]=D.d.D(f)
if(w>2)x[d+2]=D.d.D(g)}},
PW(d,e,f,g,h){var x,w=this.b
d*=w
x=this.c
x[d]=D.c.D(e)
if(w>1){x[d+1]=D.c.D(f)
if(w>2){x[d+2]=D.c.D(g)
if(w>3)x[d+3]=D.c.D(h)}}},
ow(d,e,f){var x=this.b
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
nR(d){var x=this.b
if(x<4)return 255
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+3]},
tH(d,e){return this.eU(0,d,0,e)},
tF(d,e){return this.eU(0,d,1,e)},
tE(d,e){return this.eU(0,d,2,e)},
tD(d,e){return this.eU(0,d,3,e)}}
A.GH.prototype={
dL(d){var x=this
return new A.GH(x.a,x.b,x.c,x.d)},
gda(){return C.h7},
gt(d){return this.d.c},
geA(){return null},
gc2(){return 1},
gmt(d){return this.a},
gne(d){return this.b},
fZ(d,e,f){var x,w,v=this
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
x=$.h9
w=(x!=null?x:A.hZ())[w]}else w=0
return w},
n(d,e,f){var x=this.d
if(e<x.c)x.d[this.c+e]=A.fu(f)},
gdW(d){return this.gaC(0)},
sdW(d,e){this.saC(0,e)},
gaC(d){var x,w=this.d
if(w.c>0){w=w.d[this.c]
x=$.h9
w=(x!=null?x:A.hZ())[w]}else w=0
return w},
saC(d,e){var x=this.d
if(x.c>0)x.d[this.c]=A.fu(e)},
gaL(){var x,w=this.d
if(w.c>1){w=w.d[this.c+1]
x=$.h9
w=(x!=null?x:A.hZ())[w]}else w=0
return w},
saL(d){var x=this.d
if(x.c>1)x.d[this.c+1]=A.fu(d)},
gaM(d){var x,w=this.d
if(w.c>2){w=w.d[this.c+2]
x=$.h9
w=(x!=null?x:A.hZ())[w]}else w=0
return w},
saM(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=A.fu(e)},
gaP(d){var x,w=this.d
if(w.c>3){w=w.d[this.c+3]
x=$.h9
w=(x!=null?x:A.hZ())[w]}else w=0
return w},
saP(d,e){var x,w=this.d
if(w.c>3){x=this.gaL()
w.d[this.c+3]=A.fu(x)}},
gig(){return this.gaC(0)/1},
sig(d){this.saC(0,d)},
gi_(){return this.gaL()/1},
si_(d){this.saL(d)},
gi7(){return this.gaM(0)/1},
si7(d){this.saM(0,d)},
gim(){return this.gaP(0)/1},
sim(d){this.saP(0,d)},
gje(){return A.iZ(this)},
iB(d,e){var x=this
if(x.d.c>0){x.saC(0,e.gaC(e))
x.saL(e.gaL())
x.saM(0,e.gaM(e))
x.saP(0,e.gaP(e))}},
jY(d,e,f){var x=this,w=x.d,v=w.c
if(v>0){w=w.d
w[x.c]=A.fu(d)
if(v>1){w[x.c+1]=A.fu(e)
if(v>2)w[x.c+2]=A.fu(f)}}},
i1(d,e,f,g){var x=this,w=x.d,v=w.c
if(v>0){w=w.d
w[x.c]=A.fu(d)
if(v>1){w[x.c+1]=A.fu(e)
if(v>2){w[x.c+2]=A.fu(f)
if(v>3)w[x.c+3]=A.fu(g)}}}},
gX(d){return new A.h6(this)},
l(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.GH)return B.aD(B.H(u,!0,B.r(u).h("u.E")))===B.aD(B.H(e,!0,B.r(e).h("u.E")))
if(y.L.b(e)){x=J.a1(e)
w=u.d
v=w.c
if(x.gt(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
nx(d){return A.oJ(this,null,d,null,null)},
$ibi:1,
$idB:1,
$icw:1,
ghJ(d){return this.d}}
A.GI.prototype={
dL(d){var x=this
return new A.GI(x.a,x.b,x.c,x.d)},
gt(d){return this.d.c},
geA(){return null},
gc2(){return 1},
gda(){return C.im},
gmt(d){return this.a},
gne(d){return this.b},
fZ(d,e,f){var x,w,v=this
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
gdW(d){return this.gaC(0)},
sdW(d,e){this.saC(0,e)},
gaC(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saC(d,e){var x=this.d
if(x.c>0)x.d[this.c]=e},
gaL(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saL(d){var x=this.d
if(x.c>1)x.d[this.c+1]=d},
gaM(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saM(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=e},
gaP(d){var x=this.d
return x.c>3?x.d[this.c+3]:1},
saP(d,e){var x=this.d
if(x.c>3)x.d[this.c+3]=e},
gig(){return this.gaC(0)/1},
sig(d){this.saC(0,d)},
gi_(){return this.gaL()/1},
si_(d){this.saL(d)},
gi7(){return this.gaM(0)/1},
si7(d){this.saM(0,d)},
gim(){return this.gaP(0)/1},
sim(d){this.saP(0,d)},
gje(){return A.iZ(this)},
iB(d,e){var x=this
x.saC(0,e.gaC(e))
x.saL(e.gaL())
x.saM(0,e.gaM(e))
x.saP(0,e.gaP(e))},
jY(d,e,f){var x=this.d,w=x.d,v=this.c
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
i1(d,e,f,g){var x=this.d,w=x.d,v=this.c
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
gX(d){return new A.h6(this)},
l(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.GI)return B.aD(B.H(u,!0,B.r(u).h("u.E")))===B.aD(B.H(e,!0,B.r(e).h("u.E")))
if(y.L.b(e)){x=J.a1(e)
w=u.d
v=w.c
if(x.gt(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
nx(d){return A.oJ(this,null,d,null,null)},
$ibi:1,
$idB:1,
$icw:1,
ghJ(d){return this.d}}
A.GJ.prototype={
dL(d){var x=this
return new A.GJ(x.a,x.b,x.c,x.d)},
gt(d){return this.d.c},
geA(){return null},
gc2(){return 1},
gda(){return C.jQ},
gmt(d){return this.a},
gne(d){return this.b},
fZ(d,e,f){var x,w,v=this
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
gdW(d){return this.gaC(0)},
sdW(d,e){this.saC(0,e)},
gaC(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saC(d,e){var x=this.d
if(x.c>0)x.d[this.c]=e},
gaL(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saL(d){var x=this.d
if(x.c>1)x.d[this.c+1]=d},
gaM(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saM(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=e},
gaP(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saP(d,e){var x=this.d
if(x.c>3)x.d[this.c+3]=e},
gig(){return this.gaC(0)/1},
sig(d){this.saC(0,d)},
gi_(){return this.gaL()/1},
si_(d){this.saL(d)},
gi7(){return this.gaM(0)/1},
si7(d){this.saM(0,d)},
gim(){return this.gaP(0)/1},
sim(d){this.saP(0,d)},
gje(){return A.iZ(this)},
iB(d,e){var x=this
x.saC(0,e.gaC(e))
x.saL(e.gaL())
x.saM(0,e.gaM(e))
x.saP(0,e.gaP(e))},
jY(d,e,f){var x=this.d,w=x.d,v=this.c
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
i1(d,e,f,g){var x=this.d,w=x.d,v=this.c
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
gX(d){return new A.h6(this)},
l(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.GJ)return B.aD(B.H(u,!0,B.r(u).h("u.E")))===B.aD(B.H(e,!0,B.r(e).h("u.E")))
if(y.L.b(e)){x=J.a1(e)
w=u.d
v=w.c
if(x.gt(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
nx(d){return A.oJ(this,null,d,null,null)},
$ibi:1,
$idB:1,
$icw:1,
ghJ(d){return this.d}}
A.GK.prototype={
dL(d){var x=this
return new A.GK(x.a,x.b,x.c,x.d)},
gt(d){return this.d.c},
geA(){return null},
gc2(){return 32767},
gda(){return C.jS},
gmt(d){return this.a},
gne(d){return this.b},
fZ(d,e,f){var x,w,v=this
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
gdW(d){return this.gaC(0)},
sdW(d,e){this.saC(0,e)},
gaC(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saC(d,e){var x=this.d
if(x.c>0)x.d[this.c]=D.d.D(e)},
gaL(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saL(d){var x=this.d
if(x.c>1)x.d[this.c+1]=D.d.D(d)},
gaM(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saM(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=D.d.D(e)},
gaP(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saP(d,e){var x=this.d
if(x.c>3)x.d[this.c+3]=D.d.D(e)},
gig(){return this.gaC(0)/32767},
sig(d){this.saC(0,d*32767)},
gi_(){return this.gaL()/32767},
si_(d){this.saL(d*32767)},
gi7(){return this.gaM(0)/32767},
si7(d){this.saM(0,d*32767)},
gim(){return this.gaP(0)/32767},
sim(d){this.saP(0,d*32767)},
gje(){return A.iZ(this)},
iB(d,e){var x=this
x.saC(0,e.gaC(e))
x.saL(e.gaL())
x.saM(0,e.gaM(e))
x.saP(0,e.gaP(e))},
jY(d,e,f){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2)w[x+2]=D.c.D(f)}}},
i1(d,e,f,g){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2){w[x+2]=D.c.D(f)
if(v>3)w[x+3]=D.c.D(g)}}}},
gX(d){return new A.h6(this)},
l(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.GK)return B.aD(B.H(u,!0,B.r(u).h("u.E")))===B.aD(B.H(e,!0,B.r(e).h("u.E")))
if(y.L.b(e)){x=J.a1(e)
w=u.d
v=w.c
if(x.gt(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
nx(d){return A.oJ(this,null,d,null,null)},
$ibi:1,
$idB:1,
$icw:1,
ghJ(d){return this.d}}
A.GL.prototype={
dL(d){var x=this
return new A.GL(x.a,x.b,x.c,x.d)},
gt(d){return this.d.c},
geA(){return null},
gc2(){return 2147483647},
gda(){return C.jT},
gmt(d){return this.a},
gne(d){return this.b},
fZ(d,e,f){var x,w,v=this
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
gdW(d){return this.gaC(0)},
sdW(d,e){this.saC(0,e)},
gaC(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saC(d,e){var x=this.d
if(x.c>0)x.d[this.c]=D.d.D(e)},
gaL(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saL(d){var x=this.d
if(x.c>1)x.d[this.c+1]=D.d.D(d)},
gaM(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saM(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=D.d.D(e)},
gaP(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saP(d,e){var x=this.d
if(x.c>3)x.d[this.c+3]=D.d.D(e)},
gig(){return this.gaC(0)/2147483647},
sig(d){this.saC(0,d*2147483647)},
gi_(){return this.gaL()/2147483647},
si_(d){this.saL(d*2147483647)},
gi7(){return this.gaM(0)/2147483647},
si7(d){this.saM(0,d*2147483647)},
gim(){return this.gaP(0)/2147483647},
sim(d){this.saP(0,d*2147483647)},
gje(){return A.iZ(this)},
iB(d,e){var x=this
x.saC(0,e.gaC(e))
x.saL(e.gaL())
x.saM(0,e.gaM(e))
x.saP(0,e.gaP(e))},
jY(d,e,f){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2)w[x+2]=D.c.D(f)}}},
i1(d,e,f,g){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2){w[x+2]=D.c.D(f)
if(v>3)w[x+3]=D.c.D(g)}}}},
gX(d){return new A.h6(this)},
l(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.GL)return B.aD(B.H(u,!0,B.r(u).h("u.E")))===B.aD(B.H(e,!0,B.r(e).h("u.E")))
if(y.L.b(e)){x=J.a1(e)
w=u.d
v=w.c
if(x.gt(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
nx(d){return A.oJ(this,null,d,null,null)},
$ibi:1,
$idB:1,
$icw:1,
ghJ(d){return this.d}}
A.GM.prototype={
dL(d){var x=this
return new A.GM(x.a,x.b,x.c,x.d)},
gt(d){return this.d.c},
geA(){return null},
gc2(){return 127},
gda(){return C.jR},
gmt(d){return this.a},
gne(d){return this.b},
fZ(d,e,f){var x,w,v=this
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
gdW(d){return this.gaC(0)},
sdW(d,e){this.saC(0,e)},
gaC(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saC(d,e){var x=this.d
if(x.c>0)x.d[this.c]=D.d.D(e)},
gaL(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saL(d){var x=this.d
if(x.c>1)x.d[this.c+1]=D.d.D(d)},
gaM(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saM(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=D.d.D(e)},
gaP(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saP(d,e){var x=this.d
if(x.c>3)x.d[this.c+3]=D.d.D(e)},
gig(){return this.gaC(0)/127},
sig(d){this.saC(0,d*127)},
gi_(){return this.gaL()/127},
si_(d){this.saL(d*127)},
gi7(){return this.gaM(0)/127},
si7(d){this.saM(0,d*127)},
gim(){return this.gaP(0)/127},
sim(d){this.saP(0,d*127)},
gje(){return A.iZ(this)},
iB(d,e){var x=this
x.saC(0,e.gaC(e))
x.saL(e.gaL())
x.saM(0,e.gaM(e))
x.saP(0,e.gaP(e))},
jY(d,e,f){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2)w[x+2]=D.c.D(f)}}},
i1(d,e,f,g){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2){w[x+2]=D.c.D(f)
if(v>3)w[x+3]=D.c.D(g)}}}},
gX(d){return new A.h6(this)},
l(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.GM)return B.aD(B.H(u,!0,B.r(u).h("u.E")))===B.aD(B.H(e,!0,B.r(e).h("u.E")))
if(y.L.b(e)){x=J.a1(e)
w=u.d
v=w.c
if(x.gt(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
nx(d){return A.oJ(this,null,d,null,null)},
$ibi:1,
$idB:1,
$icw:1,
ghJ(d){return this.d}}
A.as4.prototype={
q(){var x=this,w=x.a
if(w.gmt(w)+1>x.d){w.fZ(0,x.b,w.gne(w)+1)
return w.gne(w)<=x.e}return w.q()},
gK(d){return this.a},
$ibi:1}
A.GN.prototype={
dL(d){var x=this
return new A.GN(x.a,x.b,x.c,x.d,x.e,x.f)},
gt(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geA(){return this.f.f},
gc2(){return this.f.gc2()},
gda(){return C.eU},
gmt(d){return this.a},
gne(d){return this.b},
fZ(d,e,f){var x,w,v=this
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
a3H(d,e){var x,w=this.c,v=7-(this.d+e)
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
if(w>=x.length)return 0
return D.c.fD(x[w],v)&1},
oO(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.a3H(0,d):0
else x=w.ow(0,this.a3H(0,0),d)
return x},
k8(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=7-(this.d+d)
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.b8(D.d.D(e),0,1)
s=C.aAr[w]
v=D.c.ex(t,w)
r.d[x]=(u&s|v)>>>0},
i(d,e){return this.oO(e)},
n(d,e,f){return this.k8(e,f)},
gdW(d){return this.a3H(0,0)},
sdW(d,e){this.k8(0,e)},
gaC(d){return this.oO(0)},
saC(d,e){this.k8(0,e)},
gaL(){return this.oO(1)},
saL(d){this.k8(1,d)},
gaM(d){return this.oO(2)},
saM(d,e){this.k8(2,e)},
gaP(d){return this.oO(3)},
saP(d,e){this.k8(3,e)},
gig(){return this.oO(0)/this.f.gc2()},
sig(d){this.k8(0,d*this.f.gc2())},
gi_(){return this.oO(1)/this.f.gc2()},
si_(d){this.k8(1,d*this.f.gc2())},
gi7(){return this.oO(2)/this.f.gc2()},
si7(d){this.k8(2,d*this.f.gc2())},
gim(){return this.oO(3)/this.f.gc2()},
sim(d){this.k8(3,d*this.f.gc2())},
gje(){return A.iZ(this)},
iB(d,e){var x=this
x.k8(0,e.gaC(e))
x.k8(1,e.gaL())
x.k8(2,e.gaM(e))
x.k8(3,e.gaP(e))},
jY(d,e,f){var x=this,w=x.f.c
if(w>0){x.k8(0,d)
if(w>1){x.k8(1,e)
if(w>2)x.k8(2,f)}}},
i1(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.k8(0,d)
if(w>1){x.k8(1,e)
if(w>2){x.k8(2,f)
if(w>3)x.k8(3,g)}}}},
gX(d){return new A.h6(this)},
l(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.GN)return B.aD(B.H(u,!0,B.r(u).h("u.E")))===B.aD(B.H(e,!0,B.r(e).h("u.E")))
if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a1(e)
if(x.gt(e)!==v)return!1
if(u.oO(0)!==x.i(e,0))return!1
if(v>1){if(u.oO(1)!==x.i(e,1))return!1
if(v>2){if(u.oO(2)!==x.i(e,2))return!1
if(v>3)if(u.oO(3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
nx(d){return A.oJ(this,null,d,null,null)},
$ibi:1,
$idB:1,
$icw:1,
ghJ(d){return this.f}}
A.GO.prototype={
dL(d){var x=this
return new A.GO(x.a,x.b,x.c,x.d)},
gt(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
geA(){return this.d.e},
gc2(){return this.d.gc2()},
gda(){return C.bW},
gmt(d){return this.a},
gne(d){return this.b},
fZ(d,e,f){var x,w,v=this
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
hz(d,e){var x=this.d,w=x.e
if(w!=null)x=w.ow(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
i(d,e){return this.hz(0,e)},
n(d,e,f){var x=this.d
if(e<x.c)x.d[this.c+e]=D.d.D(f)},
gdW(d){return this.gaC(0)},
sdW(d,e){this.saC(0,e)},
gaC(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.my(x.d[this.c])
return x},
saC(d,e){var x=this.d
if(x.c>0)x.d[this.c]=D.d.D(e)},
gaL(){var x=this.d,w=x.e
if(w==null)x=x.c>1?x.d[this.c+1]:0
else x=w.mw(x.d[this.c])
return x},
saL(d){var x=this.d
if(x.c>1)x.d[this.c+1]=D.d.D(d)},
gaM(d){var x=this.d,w=x.e
if(w==null)x=x.c>2?x.d[this.c+2]:0
else x=w.mu(x.d[this.c])
return x},
saM(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=D.d.D(e)},
gaP(d){var x=this.d,w=x.e
if(w==null)x=x.c>3?x.d[this.c+3]:0
else x=w.nR(x.d[this.c])
return x},
saP(d,e){var x=this.d
if(x.c>3)x.d[this.c+3]=D.d.D(e)},
gig(){return this.gaC(0)/this.d.gc2()},
sig(d){this.saC(0,d*this.d.gc2())},
gi_(){return this.gaL()/this.d.gc2()},
si_(d){this.saL(d*this.d.gc2())},
gi7(){return this.gaM(0)/this.d.gc2()},
si7(d){this.saM(0,d*this.d.gc2())},
gim(){return this.gaP(0)/this.d.gc2()},
sim(d){this.saP(0,d*this.d.gc2())},
gje(){return A.iZ(this)},
iB(d,e){var x=this
x.saC(0,e.gaC(e))
x.saL(e.gaL())
x.saM(0,e.gaM(e))
x.saP(0,e.gaP(e))},
jY(d,e,f){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2)w[x+2]=D.c.D(f)}}},
i1(d,e,f,g){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2){w[x+2]=D.c.D(f)
if(v>3)w[x+3]=D.c.D(g)}}}},
gX(d){return new A.h6(this)},
l(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.GO)return B.aD(B.H(u,!0,B.r(u).h("u.E")))===B.aD(B.H(e,!0,B.r(e).h("u.E")))
if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a1(e)
if(x.gt(e)!==v)return!1
if(u.hz(0,0)!==x.i(e,0))return!1
if(v>1){if(u.hz(0,1)!==x.i(e,1))return!1
if(v>2){if(u.hz(0,2)!==x.i(e,2))return!1
if(v>3)if(u.hz(0,3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
nx(d){return A.oJ(this,null,d,null,null)},
$ibi:1,
$idB:1,
$icw:1,
ghJ(d){return this.d}}
A.GP.prototype={
dL(d){var x=this
return new A.GP(x.a,x.b,x.c,x.d,x.e,x.f)},
gt(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geA(){return this.f.f},
gc2(){return this.f.gc2()},
gda(){return C.fx},
gasJ(){var x=this.f
return x.f!=null?2:x.c<<1>>>0},
gmt(d){return this.a},
gne(d){return this.b},
fZ(d,e,f){var x,w,v,u=this
u.a=e
u.b=f
x=u.gasJ()
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
if(x>7){v.d=0;++v.c}}else{w=v.gasJ()
x=v.a*w
v.d=x&7
v.c=v.e+D.c.O(x,3)}x=v.c
u=u.d
u===$&&B.b()
return x<u.length},
a3I(d,e){var x,w=this.c,v=6-(this.d+(e<<1>>>0))
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
return D.c.fD(x[w],v)&3},
oP(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.a3I(0,d):0
else x=w.ow(0,this.a3I(0,0),d)
return x},
k9(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=6-(this.d+(d<<1>>>0))
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.b8(D.d.D(e),0,3)
s=C.ao1[D.c.O(w,1)]
v=D.c.ex(t,w)
r.d[x]=(u&s|v)>>>0},
i(d,e){return this.oP(e)},
n(d,e,f){return this.k9(e,f)},
gdW(d){return this.a3I(0,0)},
sdW(d,e){this.k9(0,e)},
gaC(d){return this.oP(0)},
saC(d,e){this.k9(0,e)},
gaL(){return this.oP(1)},
saL(d){this.k9(1,d)},
gaM(d){return this.oP(2)},
saM(d,e){this.k9(2,e)},
gaP(d){return this.oP(3)},
saP(d,e){this.k9(3,e)},
gig(){return this.oP(0)/this.f.gc2()},
sig(d){this.k9(0,d*this.f.gc2())},
gi_(){return this.oP(1)/this.f.gc2()},
si_(d){this.k9(1,d*this.f.gc2())},
gi7(){return this.oP(2)/this.f.gc2()},
si7(d){this.k9(2,d*this.f.gc2())},
gim(){return this.oP(3)/this.f.gc2()},
sim(d){this.k9(3,d*this.f.gc2())},
gje(){return A.iZ(this)},
iB(d,e){var x=this
x.k9(0,e.gaC(e))
x.k9(1,e.gaL())
x.k9(2,e.gaM(e))
x.k9(3,e.gaP(e))},
jY(d,e,f){var x=this,w=x.f.c
if(w>0){x.k9(0,d)
if(w>1){x.k9(1,e)
if(w>2)x.k9(2,f)}}},
i1(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.k9(0,d)
if(w>1){x.k9(1,e)
if(w>2){x.k9(2,f)
if(w>3)x.k9(3,g)}}}},
gX(d){return new A.h6(this)},
l(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.GP)return B.aD(B.H(u,!0,B.r(u).h("u.E")))===B.aD(B.H(e,!0,B.r(e).h("u.E")))
if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a1(e)
if(x.gt(e)!==v)return!1
if(u.oP(0)!==x.i(e,0))return!1
if(v>1){if(u.oP(1)!==x.i(e,1))return!1
if(v>2){if(u.oP(2)!==x.i(e,2))return!1
if(v>3)if(u.oP(3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
nx(d){return A.oJ(this,null,d,null,null)},
$ibi:1,
$idB:1,
$icw:1,
ghJ(d){return this.f}}
A.GQ.prototype={
dL(d){var x=this
return new A.GQ(x.a,x.b,x.c,x.d)},
gt(d){return this.d.c},
geA(){return null},
gc2(){return 4294967295},
gda(){return C.io},
gmt(d){return this.a},
gne(d){return this.b},
fZ(d,e,f){var x,w,v=this
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
gdW(d){return this.gaC(0)},
sdW(d,e){this.saC(0,e)},
gaC(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saC(d,e){var x=this.d
if(x.c>0)x.d[this.c]=D.d.D(e)},
gaL(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saL(d){var x=this.d
if(x.c>1)x.d[this.c+1]=D.d.D(d)},
gaM(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saM(d,e){var x=this.d
if(x.c>2)x.d[this.c+2]=D.d.D(e)},
gaP(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saP(d,e){var x=this.d
if(x.c>3)x.d[this.c+3]=D.d.D(e)},
gig(){return this.gaC(0)/4294967295},
sig(d){this.saC(0,d*4294967295)},
gi_(){return this.gaL()/4294967295},
si_(d){this.saL(d*4294967295)},
gi7(){return this.gaM(0)/4294967295},
si7(d){this.saM(0,d*4294967295)},
gim(){return this.gaP(0)/4294967295},
sim(d){this.saP(0,d*4294967295)},
gje(){return A.iZ(this)},
iB(d,e){var x=this
x.saC(0,e.gaC(e))
x.saL(e.gaL())
x.saM(0,e.gaM(e))
x.saP(0,e.gaP(e))},
jY(d,e,f){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2)w[x+2]=D.c.D(f)}}},
i1(d,e,f,g){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2){w[x+2]=D.c.D(f)
if(v>3)w[x+3]=D.c.D(g)}}}},
gX(d){return new A.h6(this)},
l(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.GQ)return B.aD(B.H(u,!0,B.r(u).h("u.E")))===B.aD(B.H(e,!0,B.r(e).h("u.E")))
if(y.L.b(e)){x=J.a1(e)
w=u.d
v=w.c
if(x.gt(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
nx(d){return A.oJ(this,null,d,null,null)},
$ibi:1,
$idB:1,
$icw:1,
ghJ(d){return this.d}}
A.GR.prototype={
dL(d){var x=this
return new A.GR(x.a,x.b,x.c,x.d,x.e)},
gt(d){var x=this.e,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geA(){return this.e.f},
gc2(){return this.e.gc2()},
gda(){return C.fy},
gmt(d){return this.a},
gne(d){return this.b},
fZ(d,e,f){var x,w,v,u=this
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
a3J(d,e){var x,w=this.c,v=4-(this.d+(e<<2>>>0))
if(v<0){v+=8;++w}x=this.e.d
x===$&&B.b()
return D.c.fD(x[w],v)&15},
oN(d){var x=this.e,w=x.f
if(w==null)x=x.c>d?this.a3J(0,d):0
else x=w.ow(0,this.a3J(0,0),d)
return x},
kb(d,e){var x,w,v,u,t,s,r=this.e
if(d>=r.c)return
x=this.c
w=4-(this.d+(d<<2>>>0))
if(w<0){w+=8;++x}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.b8(D.d.D(e),0,15)
s=w===4?15:240
v=D.c.ex(t,w)
r.d[x]=(u&s|v)>>>0},
i(d,e){return this.oN(e)},
n(d,e,f){return this.kb(e,f)},
gdW(d){return this.a3J(0,0)},
sdW(d,e){this.kb(0,e)},
gaC(d){return this.oN(0)},
saC(d,e){this.kb(0,e)},
gaL(){return this.oN(1)},
saL(d){this.kb(1,d)},
gaM(d){return this.oN(2)},
saM(d,e){this.kb(2,e)},
gaP(d){return this.oN(3)},
saP(d,e){this.kb(3,e)},
gig(){return this.oN(0)/this.e.gc2()},
sig(d){this.kb(0,d*this.e.gc2())},
gi_(){return this.oN(1)/this.e.gc2()},
si_(d){this.kb(1,d*this.e.gc2())},
gi7(){return this.oN(2)/this.e.gc2()},
si7(d){this.kb(2,d*this.e.gc2())},
gim(){return this.oN(3)/this.e.gc2()},
sim(d){this.kb(3,d*this.e.gc2())},
gje(){return A.iZ(this)},
iB(d,e){var x=this
x.kb(0,e.gaC(e))
x.kb(1,e.gaL())
x.kb(2,e.gaM(e))
x.kb(3,e.gaP(e))},
jY(d,e,f){var x=this,w=x.e.c
if(w>0){x.kb(0,d)
if(w>1){x.kb(1,e)
if(w>2)x.kb(2,f)}}},
i1(d,e,f,g){var x=this,w=x.e.c
if(w>0){x.kb(0,d)
if(w>1){x.kb(1,e)
if(w>2){x.kb(2,f)
if(w>3)x.kb(3,g)}}}},
gX(d){return new A.h6(this)},
l(d,e){var x,w,v=this
if(e==null)return!1
if(e instanceof A.GR)return B.aD(B.H(v,!0,B.r(v).h("u.E")))===B.aD(B.H(e,!0,B.r(e).h("u.E")))
if(y.L.b(e)){x=v.e.c
w=J.a1(e)
if(w.gt(e)!==x)return!1
if(v.oN(0)!==w.i(e,0))return!1
if(x>1){if(v.oN(1)!==w.i(e,1))return!1
if(x>2){if(v.oN(2)!==w.i(e,2))return!1
if(x>3)if(v.oN(3)!==w.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
nx(d){return A.oJ(this,null,d,null,null)},
$ibi:1,
$idB:1,
$icw:1,
ghJ(d){return this.e}}
A.GS.prototype={
dL(d){var x=this
return new A.GS(x.a,x.b,x.c,x.d)},
gt(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
geA(){return this.d.e},
gc2(){return this.d.gc2()},
gda(){return C.a_},
gmt(d){return this.a},
gne(d){return this.b},
fZ(d,e,f){var x,w,v=this
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
hz(d,e){var x=this.d,w=x.e
if(w!=null)x=w.ow(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
i(d,e){return this.hz(0,e)},
n(d,e,f){var x=this.d
if(e<x.c)x.d[this.c+e]=D.d.D(D.d.b8(f,0,255))},
gdW(d){return this.d.d[this.c]},
sdW(d,e){this.d.d[this.c]=D.d.D(D.d.b8(e,0,255))},
gaC(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.my(x.d[this.c])
return x},
saC(d,e){var x=this.d
if(x.c>0)x.d[this.c]=D.d.D(D.d.b8(e,0,255))},
gaL(){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>1?w.d[x.c+1]:0}else w=v.mw(w.d[x.c])
return w},
saL(d){var x=this.d,w=x.c
if(w===2)x.d[this.c]=D.d.D(D.d.b8(d,0,255))
else if(w>1)x.d[this.c+1]=D.d.D(D.d.b8(d,0,255))},
gaM(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>2?w.d[x.c+2]:0}else w=v.mu(w.d[x.c])
return w},
saM(d,e){var x=this.d,w=x.c
if(w===2)x.d[this.c]=D.d.D(D.d.b8(e,0,255))
else if(w>2)x.d[this.c+2]=D.d.D(D.d.b8(e,0,255))},
gaP(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c+1]
else w=v>3?w.d[x.c+3]:255}else w=v.nR(w.d[x.c])
return w},
saP(d,e){var x=this.d,w=x.c
if(w===2)x.d[this.c+1]=D.d.D(D.d.b8(e,0,255))
else if(w>3)x.d[this.c+3]=D.d.D(D.d.b8(e,0,255))},
gig(){return this.gaC(0)/this.d.gc2()},
sig(d){this.saC(0,d*this.d.gc2())},
gi_(){return this.gaL()/this.d.gc2()},
si_(d){this.saL(d*this.d.gc2())},
gi7(){return this.gaM(0)/this.d.gc2()},
si7(d){this.saM(0,d*this.d.gc2())},
gim(){return this.gaP(0)/this.d.gc2()},
sim(d){this.saP(0,d*this.d.gc2())},
gje(){return this.d.c===2?this.gaC(0):A.iZ(this)},
iB(d,e){var x=this
if(x.d.e!=null)x.sdW(0,e.gdW(e))
else{x.saC(0,e.gaC(e))
x.saL(e.gaL())
x.saM(0,e.gaM(e))
x.saP(0,e.gaP(e))}},
jY(d,e,f){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2)w[x+2]=D.c.D(f)}}},
i1(d,e,f,g){var x,w=this.d,v=w.c
if(v>0){w=w.d
x=this.c
w[x]=D.c.D(d)
if(v>1){w[x+1]=D.c.D(e)
if(v>2){w[x+2]=D.c.D(f)
if(v>3)w[x+3]=D.c.D(g)}}}},
gX(d){return new A.h6(this)},
l(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.GS)return B.aD(B.H(u,!0,B.r(u).h("u.E")))===B.aD(B.H(e,!0,B.r(e).h("u.E")))
if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a1(e)
if(x.gt(e)!==v)return!1
if(u.hz(0,0)!==x.i(e,0))return!1
if(v>1){if(u.hz(0,1)!==x.i(e,1))return!1
if(v>2){if(u.hz(0,2)!==x.i(e,2))return!1
if(v>3)if(u.hz(0,3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aD(B.H(this,!0,B.r(this).h("u.E")))},
nx(d){return A.oJ(this,null,d,null,null)},
$ibi:1,
$idB:1,
$icw:1,
ghJ(d){return this.d}}
A.f0.prototype={
dL(d){return new A.f0()},
ghJ(d){return $.cwv()},
gmt(d){return 0},
gne(d){return 0},
gt(d){return 0},
gc2(){return 0},
gda(){return C.a_},
geA(){return null},
i(d,e){return 0},
n(d,e,f){},
gdW(d){return 0},
sdW(d,e){},
gaC(d){return 0},
saC(d,e){},
gaL(){return 0},
saL(d){},
gaM(d){return 0},
saM(d,e){},
gaP(d){return 0},
saP(d,e){},
gig(){return 0},
sig(d){},
gi_(){return 0},
si_(d){},
gi7(){return 0},
si7(d){},
gim(){return 0},
sim(d){},
gje(){return 0},
iB(d,e){},
jY(d,e,f){},
i1(d,e,f,g){},
fZ(d,e,f){},
gK(d){return this},
q(){return!1},
l(d,e){if(e==null)return!1
return e instanceof A.f0},
gv(d){return 0},
gX(d){return new A.h6(this)},
nx(d){return this},
$ibi:1,
$idB:1,
$icw:1}
A.b6f.prototype={
J(){return"FlipDirection."+this.b}}
A.amP.prototype={
k(d){return"ImageException: "+this.a},
$ib_:1}
A.le.prototype={
gt(d){return this.c-this.d},
i(d,e){return J.t(this.a,this.d+e)},
n(d,e,f){J.bX(this.a,this.d+e,f)
return f},
qT(d,e,f,g){var x=this.a,w=J.cG(x),v=this.d+d
if(f instanceof A.le)w.dC(x,v,v+e,f.a,f.d+g)
else w.dC(x,v,v+e,y.L.a(f),g)},
yY(d,e,f){return this.qT(d,e,f,0)},
bxV(d,e,f){var x=this.a,w=this.d+d
J.rp(x,w,w+e,f)},
a_P(d,e,f){var x=this,w=f!=null?x.b+f:x.d
return A.cB(x.a,x.e,d,w+e)},
jl(d){return this.a_P(d,0,null)},
zW(d,e){return this.a_P(d,0,e)},
Ql(d,e){return this.a_P(d,e,null)},
dI(d,e){var x=this,w=x.d,v=w+(x.c-w)
for(;w<v;++w)if(J.m(J.t(x.a,w),e))return w-x.b
return-1},
cZ(){return J.t(this.a,this.d++)},
ks(d){var x=this.jl(d)
this.d=this.d+(x.c-x.d)
return x},
pI(d){var x,w,v,u,t=this
if(d==null){x=B.a([],y.t)
for(w=t.c;v=t.d,v<w;){u=t.a
t.d=v+1
v=J.t(u,v)
if(v===0)return B.eh(x,0,null)
x.push(v)}throw B.e(A.bR("EOF reached without finding string terminator (length: "+B.o(d)+")"))}return B.eh(t.ks(d).ht(),0,null)},
Ok(){return this.pI(null)},
aAc(d){var x,w,v,u=this,t=B.a([],y.t)
for(x=u.c;w=u.d,w<x;){v=u.a
u.d=w+1
w=J.t(v,w)
t.push(w)
if(w===10||t.length>=d)return B.eh(t,0,null)}return B.eh(t,0,null)},
bCr(){return this.aAc(256)},
bCs(){var x,w,v,u=this,t=B.a([],y.t)
for(x=u.c;w=u.d,w<x;){v=u.a
u.d=w+1
w=J.t(v,w)
if(w===0)return new B.DE(!0).E_(t,0,null,!0)
t.push(w)}return D.ao.Bi(0,t,!0)},
bJ(){var x=this,w=J.t(x.a,x.d++)&255,v=J.t(x.a,x.d++)&255
if(x.e)return w<<8|v
return v<<8|w},
r_(){var x=this,w=J.t(x.a,x.d++)&255,v=J.t(x.a,x.d++)&255,u=J.t(x.a,x.d++)&255
if(x.e)return u|v<<8|w<<16
return w|v<<8|u<<16},
ai(){var x=this,w=J.t(x.a,x.d++)&255,v=J.t(x.a,x.d++)&255,u=J.t(x.a,x.d++)&255,t=J.t(x.a,x.d++)&255
if(x.e)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
Yy(){return A.d_Z(this.aaO())},
aaO(){var x=this,w=J.t(x.a,x.d++)&255,v=J.t(x.a,x.d++)&255,u=J.t(x.a,x.d++)&255,t=J.t(x.a,x.d++)&255,s=J.t(x.a,x.d++)&255,r=J.t(x.a,x.d++)&255,q=J.t(x.a,x.d++)&255,p=J.t(x.a,x.d++)&255
if(x.e)return(D.c.ee(w,56)|D.c.ee(v,48)|D.c.ee(u,40)|D.c.ee(t,32)|s<<24|r<<16|q<<8|p)>>>0
return(D.c.ee(p,56)|D.c.ee(q,48)|D.c.ee(r,40)|D.c.ee(s,32)|t<<24|u<<16|v<<8|w)>>>0},
HN(d,e,f){var x,w=this,v=w.a
if(y.D.b(v))return w.aBh(e,f)
x=w.b+w.d+e
return J.aR_(v,x,f<=0?w.c:x+f)},
fq(d){return this.HN(0,0,0)},
aBh(d,e){var x,w=this,v=e==null?w.c-w.d-d:e,u=w.a
if(y.D.b(u))return B.c3(u.buffer,u.byteOffset+w.d+d,v)
x=w.d+d
x=J.aR_(u,x,x+v)
return new Uint8Array(B.bJ(x))},
ht(){return this.aBh(0,null)},
OE(){var x=this.a
if(y.D.b(x))return B.oe(x.buffer,x.byteOffset+this.d,null)
return B.oe(this.ht().buffer,0,null)}}
A.bjy.prototype={
bkx(d){var x=this
x.aly(d)
x.aiJ()
x.alb()
x.ahm()},
b76(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.c=Math.max(d,4)
n.f=m-n.d
n.r=m-1
x=D.d.aW(m,8)
n.w=x
n.x=x*256
n.Q=new A.a_w(new Uint32Array(1024),256,4)
n.a=new A.tb(new Uint8Array(768),256,3)
n.d=3
n.e=2
x=D.d.O(m,3)
n.y=new Int32Array(x)
x=y.cb
n.z=B.bv(m*3,0,!1,x)
n.at=B.bv(n.c,0,!1,x)
x=n.ax=B.bv(n.c,0,!1,x)
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
ahm(){var x,w,v,u,t,s
for(x=0;x<this.c;++x){w=this.a
w===$&&B.b()
v=this.Q
v===$&&B.b()
u=v.b
t=2<u?v.c[x*u+2]:0
s=1<u?v.c[x*u+1]:0
v=0<u?v.c[x*u]:0
w.oC(x,Math.abs(t),Math.abs(s),Math.abs(v))}},
b55(d,e,f){var x,w,v,u=this.as[e],t=u-1,s=this.c,r=this.Q,q=1000,p=-1
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
aiJ(){var x,w,v,u,t,s,r=this
for(x=0,w=0;x<r.c;++x){for(v=0;v<3;++v,++w){u=r.z
u===$&&B.b()
t=D.c.b8(D.d.D(0.5+u[w]),0,255)
u=r.Q
u===$&&B.b()
s=u.b
if(v<s)u.c[x*s+v]=D.c.D(t)}u=r.Q
u===$&&B.b()
s=u.b
if(3<s)u.c[x*s+3]=D.c.D(x)}},
alb(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
ar3(d,e){var x,w,v
for(x=this.y,w=d*d,v=0;v<d;++v){x===$&&B.b()
x[v]=D.d.D(e*((w-v*v)*256/w))}},
aly(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.x
a2===$&&B.b()
x=30+D.c.aW(a1.b-1,3)
w=a3.gcL(0)*a3.gb_(0)
v=D.c.fJ(w,a1.b)
u=Math.max(D.c.aW(v,100),1)
if(u===0)u=1
t=D.c.O(a2,8)
if(t<=1)t=0
a1.ar3(t,1024)
if(w<1509)s=a1.b=1
else if(D.c.al(w,499)!==0)s=499
else if(D.c.al(w,491)!==0)s=491
else s=D.c.al(w,487)!==0?487:503
r=a3.gcL(0)
q=a3.gb_(0)
for(p=a2,o=1024,n=0,m=0,l=0,k=0;k<v;){a2=a3.a
j=a2==null?null:a2.e2(m,l,null)
if(j==null)j=new A.f0()
i=j.gaC(j)
h=j.gaL()
g=j.gaM(j)
if(k===0){a2=a1.z
a2===$&&B.b()
f=a1.e
f===$&&B.b()
f*=3
a2[f]=g
a2[f+1]=h
a2[f+2]=i}e=a1.bgr(g,h,i)
if(e<0)e=a1.aTd(g,h,i)
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
if(t>0)a1.aQt(d,t,e,g,h,i)}n+=s
m+=s
for(;m>r;){m-=r;++l}for(;n>=w;){n-=w
l-=q}++k
if(D.c.al(k,u)===0){o-=D.c.fJ(o,x)
p-=D.c.aW(p,30)
t=D.c.O(p,8)
if(t<=1)t=0
a1.ar3(t,o)}}},
aQt(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=f-e,j=l.d-1
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
aTd(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=1e30
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
bgr(d,e,f){var x,w,v,u,t,s=this
for(x=0,w=0;x<s.d;++x){v=s.z
v===$&&B.b()
u=w+1
t=!1
if(J.m(v[w],d)){w=u+1
if(J.m(s.z[u],e)){u=w+1
v=J.m(s.z[w],f)
w=u}else v=t}else{v=t
w=u}if(v)return x}return-1}}
A.ary.prototype={
aS(d){var x=this
if(x.a===x.c.length)x.aWE()
x.c[x.a++]=d&255},
ZE(d,e){var x,w,v,u,t=this
e=J.b0(d)
for(;x=t.a,w=x+e,v=t.c,u=v.length,w>u;)t.ait(w-u)
D.ac.h9(v,x,w,d)
t.a+=e},
m_(d){return this.ZE(d,null)},
kv(d){var x=this
if(x.b){x.aS(D.c.O(d,8)&255)
x.aS(d&255)
return}x.aS(d&255)
x.aS(D.c.O(d,8)&255)},
hZ(d){var x=this
if(x.b){x.aS(D.c.O(d,24)&255)
x.aS(D.c.O(d,16)&255)
x.aS(D.c.O(d,8)&255)
x.aS(d&255)
return}x.aS(d&255)
x.aS(D.c.O(d,8)&255)
x.aS(D.c.O(d,16)&255)
x.aS(D.c.O(d,24)&255)},
bFi(d){var x,w=this,v=new Float32Array(1)
v[0]=d
x=B.c3(v.buffer,0,null)
if(w.b){w.aS(x[3])
w.aS(x[2])
w.aS(x[1])
w.aS(x[0])
return}w.aS(x[0])
w.aS(x[1])
w.aS(x[2])
w.aS(x[3])},
bFj(d){var x,w=this,v=new Float64Array(1)
v[0]=d
x=B.c3(v.buffer,0,null)
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
ait(d){var x,w,v,u
if(d!=null)x=d
else{w=this.c.length
x=w===0?8192:w*2}w=this.c
v=w.length
u=new Uint8Array(v+x)
D.ac.h9(u,0,v,w)
this.c=u},
aWE(){return this.ait(null)},
gt(d){return this.a}}
A.boi.prototype={
aDJ(d){var x,w,v,u,t,s,r=d.gcL(0),q=d.gb_(0),p=this.a
p===$&&B.b()
x=A.hc(null,null,C.a_,0,C.b3,q,null,0,1,p,C.a_,r,!1)
r=x.a
w=r.gX(r)
w.q()
x.z=d.z
x.w=d.w
x.y=d.y
for(r=d.a,r=r.gX(r);r.q();){v=r.gK(r)
u=w.gK(w)
t=D.d.D(v.gaC(v))
s=D.d.D(v.gaL())
u.n(0,0,this.b55(D.d.D(v.gaM(v)),s,t))
w.q()}return x}}
A.nd.prototype={
D(d){var x=this.b
return x===0?0:D.c.fJ(this.a,x)},
CN(d){var x=this.b
return x===0?0:this.a/x},
l(d,e){if(e==null)return!1
return e instanceof A.nd&&this.a===e.a&&this.b===e.b},
gv(d){return B.a8(this.a,this.b,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
k(d){return""+this.a+"/"+this.b}}
A.bqy.prototype={
J(){return"ResizeMode."+this.b}}
A.bqv.prototype={
J(){return"RequestImageFormat."+this.b}}
A.bAR.prototype={}
var z=a.updateTypes(["~(le)","q(pM,q,q)","q([q])","~(AS,y<q>)","~(q,q,q,q,q,cF)","~(f,p8)","~(q)","Q<~>()","~()","fP(N)","~(q,jt)","AS(q)"])
A.bPe.prototype={
$1(d){var x=0,w=B.l(y.as),v,u=this,t,s
var $async$$1=B.h(function(e,f){if(e===1)return B.i(f,w)
while(true)switch(x){case 0:s=u.a
if(s.r)s.f=!0
if(s.f){x=1
break}t=s.e
x=3
return B.c(s.rh(t==null?"":t),$async$$1)
case 3:s.f=!0
case 1:return B.j(v,w)}})
return B.k($async$$1,w)},
$S:71}
A.bPb.prototype={
$0(){this.a.r=!0},
$S:0}
A.bPc.prototype={
$0(){this.a.r=!1},
$S:0}
A.bPd.prototype={
$0(){var x=0,w=B.l(y.H),v=this,u,t
var $async$$0=B.h(function(d,e){if(d===1)return B.i(e,w)
while(true)switch(x){case 0:u=v.a
t=u.e
x=2
return B.c(u.rh(t==null?"":t),$async$$0)
case 2:return B.j(null,w)}})
return B.k($async$$0,w)},
$S:2}
A.bPh.prototype={
$0(){var x=this.a
x.x=x.w=!0},
$S:0}
A.bPi.prototype={
$1(d){var x=null
return T.kY(B.a([B.dw(!1,G.br(Q.Cu,x),x,x,D.C,x,x,x,x,new A.bPg(d),x,x)],y.E),x,C.b1C,x,x,C.b1E)},
$S:z+9}
A.bPg.prototype={
$0(){return B.cn(this.a,!1).hX(!0)},
$S:0}
A.bPj.prototype={
$0(){this.a.y=0},
$S:0}
A.bPk.prototype={
$0(){var x=this.a
x.E(new A.bPf(x))},
$S:0}
A.bPf.prototype={
$0(){var x=this.a
x.y=++x.z/x.Q.length},
$S:0}
A.bPl.prototype={
$0(){this.a.w=!1},
$S:0}
A.bbe.prototype={
$0(){return A.cln(this.a,this.b,"jpg",this.c)},
$S:269}
A.bbg.prototype={
$0(){return A.cln(this.a,this.b,"png",null)},
$S:269}
A.bb6.prototype={
$2(d,e){var x=A.clc(e)
this.a.a.n(0,d,x)
return x},
$S:z+5}
A.bb7.prototype={
$2(d,e){var x=e.dL(0)
this.a.a.n(0,d,x)
return x},
$S:z+10}
A.bb8.prototype={
$2(d,e){var x=A.clc(e)
this.a.b.a.n(0,d,x)
return x},
$S:z+5}
A.aUI.prototype={
$4(d,e,f,g){var x,w,v=this,u=v.a
if(u.a<v.c){x=v.b.c&&v.d.ch!=null
w=v.e
if(x){x=v.d
w.i1(x.ch.my(d),x.ch.mw(d),x.ch.mu(d),x.ch.nR(d))}else w.i1(d,e,f,g)
w.q();++u.a}},
$S:720}
A.b55.prototype={
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
$S:721}
A.bcO.prototype={
$1(d){var x,w,v,u,t=this.b,s=t.cZ(),r=t.cZ()
t=this.a
if(!t.d.y.a_(0,s))throw B.e(A.bR("Invalid Component in SOS block"))
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
A.bnf.prototype={
$1(d){return d!==""},
$S:16}
A.bCm.prototype={
$2(d,e){return(d|e<<16)>>>0},
$S:182}
A.bbw.prototype={
$4(d,e,f,g){var x=this.b
return d+this.a*(e-d+x*(d+g-f-e))+x*(f-d)},
$S:722}
A.bbv.prototype={
$5(d,e,f,g,h){var x=-e,w=d*d
return f+0.5*(d*(x+g)+w*(2*e-5*f+4*g-h)+w*d*(x+3*f-3*g+h))},
$S:723};(function installTearOffs(){var x=a._instance_0u,w=a.installInstanceTearOff,v=a._instance_2u,u=a._static_1,t=a._instance_1u,s=a.installStaticTearOff
var r
x(r=A.a7y.prototype,"gaEA","wJ",7)
x(r,"gbn2","a6v",8)
w(A.jt.prototype,"gwz",1,0,function(){return[0]},["$1","$0"],["iI","D"],2,0,0)
w(A.rR.prototype,"gwz",1,0,function(){return[0]},["$1","$0"],["iI","D"],2,0,0)
w(A.x9.prototype,"gwz",1,0,function(){return[0]},["$1","$0"],["iI","D"],2,0,0)
w(A.qk.prototype,"gwz",1,0,function(){return[0]},["$1","$0"],["iI","D"],2,0,0)
w(A.rT.prototype,"gwz",1,0,function(){return[0]},["$1","$0"],["iI","D"],2,0,0)
w(A.uR.prototype,"gwz",1,0,function(){return[0]},["$1","$0"],["iI","D"],2,0,0)
w(A.x8.prototype,"gwz",1,0,function(){return[0]},["$1","$0"],["iI","D"],2,0,0)
w(A.x7.prototype,"gwz",1,0,function(){return[0]},["$1","$0"],["iI","D"],2,0,0)
w(A.rU.prototype,"gwz",1,0,function(){return[0]},["$1","$0"],["iI","D"],2,0,0)
v(r=A.anq.prototype,"gaUa","aUb",3)
v(r,"gaUd","aUe",3)
v(r,"gaUf","aUg",3)
v(r,"gaU4","aU5",3)
v(r,"gaU6","aU7",3)
u(A,"d0b","cNY",0)
u(A,"d04","cNQ",0)
u(A,"d02","cNO",0)
u(A,"d09","cNW",0)
u(A,"d0a","cNX",0)
u(A,"d08","cNV",0)
u(A,"d07","cNU",0)
u(A,"d06","cNT",0)
u(A,"d0d","cO_",0)
u(A,"d0c","cNZ",0)
u(A,"d05","cNR",0)
u(A,"d03","cNP",0)
u(A,"d0o","cOa",0)
u(A,"d0m","cO8",0)
u(A,"d0e","cO0",0)
u(A,"d0g","cO2",0)
u(A,"d0f","cO1",0)
u(A,"d0h","cO3",0)
u(A,"d0p","cOb",0)
u(A,"d0n","cO9",0)
u(A,"d0i","cO4",0)
u(A,"d0j","cO5",0)
u(A,"d0k","cO6",0)
u(A,"d0l","cO7",0)
t(A.a4G.prototype,"gbbT","bbU",6)
t(A.ane.prototype,"gbsE","bsF",6)
s(A,"cfV",3,null,["$3"],["cOc"],1,0)
s(A,"d0q",3,null,["$3"],["cOd"],1,0)
s(A,"d0v",3,null,["$3"],["cOi"],1,0)
s(A,"d0w",3,null,["$3"],["cOj"],1,0)
s(A,"d0x",3,null,["$3"],["cOk"],1,0)
s(A,"d0y",3,null,["$3"],["cOl"],1,0)
s(A,"d0z",3,null,["$3"],["cOm"],1,0)
s(A,"d0A",3,null,["$3"],["cOn"],1,0)
s(A,"d0B",3,null,["$3"],["cOo"],1,0)
s(A,"d0C",3,null,["$3"],["cOp"],1,0)
s(A,"d0r",3,null,["$3"],["cOe"],1,0)
s(A,"d0s",3,null,["$3"],["cOf"],1,0)
s(A,"d0t",3,null,["$3"],["cOg"],1,0)
s(A,"d0u",3,null,["$3"],["cOh"],1,0)
s(A,"d0F",6,null,["$6"],["cOB"],4,0)
s(A,"d0G",6,null,["$6"],["cOC"],4,0)
s(A,"d0E",6,null,["$6"],["cOA"],4,0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.aez,B.jq)
w(B.A,[A.bcd,A.bkr,A.bDQ,A.b0o,A.ra,A.bPC,A.c_4,A.baE,A.bbR,A.bDP,A.bDR,A.h6,A.rS,A.aEN,A.akp,A.p8,A.jt,A.aUJ,A.Ea,A.b07,A.b06,A.b3N,A.akr,A.b52,A.aks,A.akt,A.b54,A.WO,A.aHH,A.Xq,A.Xr,A.alU,A.baW,A.amB,A.agr,A.FA,A.bcL,A.AS,A.bcN,A.Rs,A.anp,A.bcR,A.anq,A.a0y,A.bnd,A.a0R,A.boa,A.atB,A.a0U,A.Oz,A.atA,A.qJ,A.axA,A.byX,A.axF,A.byZ,A.axG,A.bz_,A.beg,A.bC9,A.a4F,A.bCa,A.bCf,A.bCj,A.bCl,A.a4E,A.bCk,A.bCb,A.II,A.ayx,A.ayz,A.ayy,A.ayA,A.a4G,A.ayv,A.bCg,A.ayw,A.bD3,A.a4U,A.amz,A.Xx,A.ayX,A.XT,A.bkT,A.as4,A.amP,A.le,A.boi,A.ary,A.nd,A.bAR])
x(A.bcc,A.bcd)
x(A.bkq,A.bkr)
x(A.c4G,A.bDQ)
x(A.Ap,B.F)
x(A.a7y,B.L)
w(B.bM,[A.bPe,A.bPi,A.aUI,A.b55,A.bcO,A.bnf,A.bbw,A.bbv])
w(B.cl,[A.bPb,A.bPc,A.bPd,A.bPh,A.bPg,A.bPj,A.bPk,A.bPf,A.bPl,A.bbe,A.bbg])
w(B.eb,[A.aW0,A.mW,A.afp,A.m6,A.l1,A.Mb,A.F7,A.rI,A.MA,A.bcM,A.Oj,A.a0x,A.BL,A.at4,A.BM,A.th,A.nu,A.Iz,A.k4,A.r_,A.IJ,A.Qu,A.baT,A.alK,A.anh,A.b6f,A.bqy,A.bqv])
w(B.u,[A.KV,A.KW,A.KX,A.KY,A.KZ,A.L_,A.L2,A.L3,A.L4,A.L5,A.L6,A.wy,A.Ax,A.lb,A.GH,A.GI,A.GJ,A.GK,A.GL,A.GM,A.GN,A.GO,A.GP,A.GQ,A.GR,A.GS,A.f0])
w(A.wy,[A.agn,A.L0])
x(A.M9,A.rS)
w(B.dd,[A.bb6,A.bb7,A.bb8,A.bCm])
w(A.jt,[A.rR,A.At,A.x9,A.qk,A.rT,A.uR,A.x8,A.x7,A.rU,A.Av,A.Au,A.FG])
w(A.b07,[A.aft,A.b53,A.b8I,A.baV,A.ano,A.at3,A.bne,A.bo9,A.bob,A.byJ,A.byY,A.bD4])
x(A.b1r,A.aft)
x(A.bci,A.b52)
w(A.bci,[A.an9,A.bcj,A.bck,A.bcl,A.anb])
x(A.ana,A.WO)
x(A.anc,A.Xr)
x(A.baU,A.Ea)
w(A.FA,[A.FB,A.XR])
w(A.b3N,[A.bcP,A.bnb])
x(A.and,A.a0y)
x(A.bcm,A.bnd)
x(A.He,A.b06)
w(A.atB,[A.xO,A.lp])
x(A.ane,A.a4G)
x(A.anf,A.a4U)
x(A.ang,A.ayX)
w(A.lb,[A.MK,A.ML,A.XW,A.XX,A.XY,A.XZ,A.MM,A.MN,A.MO,A.MP,A.MQ,A.MR])
w(A.bkT,[A.arL,A.arM,A.arN,A.arO,A.arP,A.arQ,A.arR,A.a_w,A.tb])
x(A.bjy,A.boi)})()
B.bD(b.typeUniverse,JSON.parse('{"aez":{"jq":[],"b_":[]},"Ap":{"F":[],"d":[]},"a7y":{"L":["Ap"]},"h6":{"bi":["aP"]},"KV":{"dB":[],"u":["aP"],"u.E":"aP"},"KW":{"dB":[],"u":["aP"],"u.E":"aP"},"KX":{"dB":[],"u":["aP"],"u.E":"aP"},"KY":{"dB":[],"u":["aP"],"u.E":"aP"},"KZ":{"dB":[],"u":["aP"],"u.E":"aP"},"L_":{"dB":[],"u":["aP"],"u.E":"aP"},"L2":{"dB":[],"u":["aP"],"u.E":"aP"},"L3":{"dB":[],"u":["aP"],"u.E":"aP"},"L4":{"dB":[],"u":["aP"],"u.E":"aP"},"L5":{"dB":[],"u":["aP"],"u.E":"aP"},"L6":{"dB":[],"u":["aP"],"u.E":"aP"},"wy":{"dB":[],"u":["aP"],"u.E":"aP"},"agn":{"dB":[],"u":["aP"],"u.E":"aP"},"L0":{"dB":[],"u":["aP"],"u.E":"aP"},"rR":{"jt":[]},"At":{"jt":[]},"x9":{"jt":[]},"qk":{"jt":[]},"rT":{"jt":[]},"uR":{"jt":[]},"x8":{"jt":[]},"x7":{"jt":[]},"rU":{"jt":[]},"Av":{"jt":[]},"Au":{"jt":[]},"FG":{"jt":[]},"ana":{"WO":[]},"anc":{"Xr":[]},"FB":{"FA":[]},"XR":{"FA":[]},"and":{"a0y":[]},"anf":{"a4U":[]},"Ax":{"u":["cw"],"u.E":"cw"},"lb":{"u":["cw"]},"MK":{"lb":[],"u":["cw"],"u.E":"cw"},"ML":{"lb":[],"u":["cw"],"u.E":"cw"},"XW":{"lb":[],"u":["cw"],"u.E":"cw"},"XX":{"lb":[],"u":["cw"],"u.E":"cw"},"XY":{"lb":[],"u":["cw"],"u.E":"cw"},"XZ":{"lb":[],"u":["cw"],"u.E":"cw"},"MM":{"lb":[],"u":["cw"],"u.E":"cw"},"MN":{"lb":[],"u":["cw"],"u.E":"cw"},"MO":{"lb":[],"u":["cw"],"u.E":"cw"},"MP":{"lb":[],"u":["cw"],"u.E":"cw"},"MQ":{"lb":[],"u":["cw"],"u.E":"cw"},"MR":{"lb":[],"u":["cw"],"u.E":"cw"},"GH":{"cw":[],"dB":[],"u":["aP"],"bi":["cw"],"u.E":"aP"},"GI":{"cw":[],"dB":[],"u":["aP"],"bi":["cw"],"u.E":"aP"},"GJ":{"cw":[],"dB":[],"u":["aP"],"bi":["cw"],"u.E":"aP"},"GK":{"cw":[],"dB":[],"u":["aP"],"bi":["cw"],"u.E":"aP"},"GL":{"cw":[],"dB":[],"u":["aP"],"bi":["cw"],"u.E":"aP"},"GM":{"cw":[],"dB":[],"u":["aP"],"bi":["cw"],"u.E":"aP"},"as4":{"bi":["cw"]},"GN":{"cw":[],"dB":[],"u":["aP"],"bi":["cw"],"u.E":"aP"},"GO":{"cw":[],"dB":[],"u":["aP"],"bi":["cw"],"u.E":"aP"},"GP":{"cw":[],"dB":[],"u":["aP"],"bi":["cw"],"u.E":"aP"},"GQ":{"cw":[],"dB":[],"u":["aP"],"bi":["cw"],"u.E":"aP"},"GR":{"cw":[],"dB":[],"u":["aP"],"bi":["cw"],"u.E":"aP"},"GS":{"cw":[],"dB":[],"u":["aP"],"bi":["cw"],"u.E":"aP"},"f0":{"cw":[],"dB":[],"u":["aP"],"bi":["cw"],"u.E":"aP"},"amP":{"b_":[]},"cw":{"dB":[],"bi":["cw"],"u":["aP"]}}'))
B.lR(b.typeUniverse,JSON.parse('{"atB":1}'))
var y=(function rtii(){var x=B.w
return{G:x("dB"),v:x("akr"),W:x("akt"),C:x("akH"),_:x("Q<@>"),O:x("Xx"),x:x("amz"),X:x("amB"),P:x("p8"),r:x("jt"),I:x("lb"),h:x("Yr"),R:x("u<@>"),q:x("p<agr>"),Q:x("p<aks>"),m:x("p<WO>"),b:x("p<Xr>"),A:x("p<Xx>"),g:x("p<Ax>"),M:x("p<y<y<y<q>>>>"),o:x("p<y<y<q>>>"),S:x("p<y<q>>"),d:x("p<a0y>"),Y:x("p<a0R>"),j:x("p<nd>"),s:x("p<f>"),cp:x("p<axG>"),a:x("p<cF>"),cr:x("p<II>"),F:x("p<ayw>"),J:x("p<a4U>"),E:x("p<d>"),bg:x("p<aEN>"),bd:x("p<Rs>"),t:x("p<q>"),T:x("p<FA?>"),cB:x("p<anp?>"),cQ:x("p<y<q>?>"),w:x("p<pM?>"),e:x("p<cF?>"),y:x("p<~(le)>"),c:x("AS"),bp:x("y<Yr>"),f:x("y<y<q>>"),k:x("y<nd>"),cm:x("y<a4E>"),K:x("y<II>"),n:x("y<J>"),L:x("y<q>"),as:x("aA"),c0:x("cw"),aG:x("a0R"),a2:x("d4d"),ab:x("a0U"),aM:x("Oz"),i:x("nd"),N:x("f"),aL:x("axF"),ah:x("ia"),bk:x("pM"),D:x("cF"),V:x("a4E"),bQ:x("ayx"),bl:x("ayy"),bt:x("ayA"),U:x("ai<f>"),bc:x("aHH"),cb:x("J"),z:x("@"),p:x("q"),a7:x("an5?"),cl:x("y<q>?"),l:x("y<FA?>?"),ac:x("cF?"),ak:x("a4F?"),B:x("II?"),Z:x("ayz?"),u:x("q?"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.x1=new A.afp(0,"direct")
C.x2=new A.afp(1,"alpha")
C.DV=new A.l1(0,"none")
C.x4=new A.l1(3,"bitfields")
C.x5=new A.l1(6,"alphaBitfields")
C.b9k=new A.bDP()
C.Ev=new A.bDR()
C.i9=new A.c4G()
C.EE=new A.aW0(4,"luminance")
C.ai4=new A.F7(0,"red")
C.ai5=new A.F7(1,"green")
C.ai6=new A.F7(2,"blue")
C.ai7=new A.F7(3,"alpha")
C.ai8=new A.F7(4,"other")
C.GA=new A.Mb(0,"uint")
C.yx=new A.Mb(1,"half")
C.yy=new A.Mb(2,"float")
C.GB=new A.rI(0,"none")
C.aiy=new A.b6f(2,"both")
C.eU=new A.mW(0,"uint1")
C.fx=new A.mW(1,"uint2")
C.im=new A.mW(10,"float32")
C.jQ=new A.mW(11,"float64")
C.fy=new A.mW(2,"uint4")
C.a_=new A.mW(3,"uint8")
C.bW=new A.mW(4,"uint16")
C.io=new A.mW(5,"uint32")
C.jR=new A.mW(6,"int8")
C.jS=new A.mW(7,"int16")
C.jT=new A.mW(8,"int32")
C.h7=new A.mW(9,"float16")
C.aiK=new A.alK(1,"page")
C.b3=new A.alK(2,"sequence")
C.yK=new A.baT(1,"deflate")
C.H3=new A.MA(2,"cur")
C.T=new A.m6(0,"none")
C.Hu=new A.m6(1,"byte")
C.Hv=new A.m6(10,"sRational")
C.Hw=new A.m6(11,"single")
C.Hx=new A.m6(12,"double")
C.bc=new A.m6(2,"ascii")
C.b1=new A.m6(3,"short")
C.cp=new A.m6(4,"long")
C.dE=new A.m6(5,"rational")
C.Hy=new A.m6(6,"sByte")
C.h9=new A.m6(7,"undefined")
C.Hz=new A.m6(8,"sShort")
C.HA=new A.m6(9,"sLong")
C.ald=new A.anh(0,"nearest")
C.b9y=new A.anh(1,"linear")
C.HR=new A.bcM(0,"yuv444")
C.I2=B.a(x([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250]),y.t)
C.Ib=B.a(x([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29]),y.t)
C.ze=B.a(x([0,2,8]),y.t)
C.anr=B.a(x([0,4,2,1]),y.t)
C.ao1=B.a(x([252,243,207,63]),y.t)
C.Ip=B.a(x([292,260,226,226]),y.t)
C.Iu=B.a(x([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0]),y.t)
C.Ix=B.a(x([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119]),y.t)
C.Iw=B.a(x([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125]),y.t)
C.Iv=B.a(x([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0]),y.t)
C.Iy=B.a(x([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0]),y.t)
C.aom=B.a(x([2,3,7]),y.t)
C.ai9=new A.rI(1,"rle")
C.aia=new A.rI(2,"zips")
C.aib=new A.rI(3,"zip")
C.aic=new A.rI(4,"piz")
C.aid=new A.rI(5,"pxr24")
C.aie=new A.rI(6,"b44")
C.aif=new A.rI(7,"b44a")
C.aov=B.a(x([C.GB,C.ai9,C.aia,C.aib,C.aic,C.aid,C.aie,C.aif]),B.w("p<rI>"))
C.IF=B.a(x([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9]),y.t)
C.aoJ=B.a(x([3,3,11]),y.t)
C.apD=B.a(x([511,1023,2047,4095]),y.t)
C.apS=B.a(x([63,207,243,252]),y.t)
C.Jf=B.a(x([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5]),y.t)
C.pC=B.a(x([0,36,72,109,145,182,218,255]),y.t)
C.JD=B.a(x([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28]),y.t)
C.aqv=B.a(x([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112]),y.t)
C.aqI=B.a(x([8,8,4,2]),y.t)
C.aRe=new A.BL(0,"none")
C.aRf=new A.BL(1,"sub")
C.aRg=new A.BL(2,"up")
C.aRh=new A.BL(3,"average")
C.aRi=new A.BL(4,"paeth")
C.JI=B.a(x([C.aRe,C.aRf,C.aRg,C.aRh,C.aRi]),B.w("p<BL>"))
C.aqS=B.a(x([A.d0e(),A.d08(),A.d0o(),A.d0m(),A.d0g(),A.d0f(),A.d0h()]),y.y)
C.pN=B.a(x([0,1,2,3,4,5,6,7,8,9,10,11]),y.t)
C.a3D=new A.IJ(0,"predictor")
C.b4i=new A.IJ(1,"crossColor")
C.b4j=new A.IJ(2,"subtractGreen")
C.a3E=new A.IJ(3,"colorIndexing")
C.arg=B.a(x([C.a3D,C.b4i,C.b4j,C.a3E]),B.w("p<IJ>"))
C.ark=B.a(x([280,256,256,256,40]),y.t)
C.Kk=B.a(x([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127]),y.t)
C.Km=B.a(x([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68]),y.t)
C.a6A=new A.l1(1,"rle8")
C.a6F=new A.l1(2,"rle4")
C.a6G=new A.l1(4,"jpeg")
C.a6H=new A.l1(5,"png")
C.a6I=new A.l1(7,"reserved7")
C.a6J=new A.l1(8,"reserved8")
C.a6K=new A.l1(9,"reserved9")
C.a6B=new A.l1(10,"reserved10")
C.a6C=new A.l1(11,"cmyk")
C.a6D=new A.l1(12,"cmykRle8")
C.a6E=new A.l1(13,"cmykRle4")
C.KG=B.a(x([C.DV,C.a6A,C.a6F,C.x4,C.a6G,C.a6H,C.x5,C.a6I,C.a6J,C.a6K,C.a6B,C.a6C,C.a6D,C.a6E]),B.w("p<l1>"))
C.ec=B.a(x([255,255,255,255,255,255,255,255,255,255,255]),y.t)
C.k0=B.a(x([C.ec,C.ec,C.ec]),y.S)
C.axm=B.a(x([176,246,255,255,255,255,255,255,255,255,255]),y.t)
C.aox=B.a(x([223,241,252,255,255,255,255,255,255,255,255]),y.t)
C.ay4=B.a(x([249,253,253,255,255,255,255,255,255,255,255]),y.t)
C.aya=B.a(x([C.axm,C.aox,C.ay4]),y.S)
C.apy=B.a(x([255,244,252,255,255,255,255,255,255,255,255]),y.t)
C.az2=B.a(x([234,254,254,255,255,255,255,255,255,255,255]),y.t)
C.O3=B.a(x([253,255,255,255,255,255,255,255,255,255,255]),y.t)
C.am4=B.a(x([C.apy,C.az2,C.O3]),y.S)
C.apz=B.a(x([255,246,254,255,255,255,255,255,255,255,255]),y.t)
C.ay_=B.a(x([239,253,254,255,255,255,255,255,255,255,255]),y.t)
C.IG=B.a(x([254,255,254,255,255,255,255,255,255,255,255]),y.t)
C.ao6=B.a(x([C.apz,C.ay_,C.IG]),y.S)
C.J5=B.a(x([255,248,254,255,255,255,255,255,255,255,255]),y.t)
C.ay0=B.a(x([251,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aym=B.a(x([C.J5,C.ay0,C.ec]),y.S)
C.zU=B.a(x([255,253,254,255,255,255,255,255,255,255,255]),y.t)
C.apA=B.a(x([251,254,254,255,255,255,255,255,255,255,255]),y.t)
C.axS=B.a(x([C.zU,C.apA,C.IG]),y.S)
C.apR=B.a(x([255,254,253,255,254,255,255,255,255,255,255]),y.t)
C.aw7=B.a(x([250,255,254,255,254,255,255,255,255,255,255]),y.t)
C.tq=B.a(x([254,255,255,255,255,255,255,255,255,255,255]),y.t)
C.az1=B.a(x([C.apR,C.aw7,C.tq]),y.S)
C.azA=B.a(x([C.k0,C.aya,C.am4,C.ao6,C.aym,C.axS,C.az1,C.k0]),y.o)
C.aye=B.a(x([217,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aA9=B.a(x([225,252,241,253,255,255,254,255,255,255,255]),y.t)
C.ayk=B.a(x([234,250,241,250,253,255,253,254,255,255,255]),y.t)
C.azv=B.a(x([C.aye,C.aA9,C.ayk]),y.S)
C.zt=B.a(x([255,254,255,255,255,255,255,255,255,255,255]),y.t)
C.az3=B.a(x([223,254,254,255,255,255,255,255,255,255,255]),y.t)
C.awp=B.a(x([238,253,254,254,255,255,255,255,255,255,255]),y.t)
C.as7=B.a(x([C.zt,C.az3,C.awp]),y.S)
C.asL=B.a(x([249,254,255,255,255,255,255,255,255,255,255]),y.t)
C.ayx=B.a(x([C.J5,C.asL,C.ec]),y.S)
C.ay5=B.a(x([255,253,255,255,255,255,255,255,255,255,255]),y.t)
C.asM=B.a(x([247,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aAo=B.a(x([C.ay5,C.asM,C.ec]),y.S)
C.ayf=B.a(x([252,255,255,255,255,255,255,255,255,255,255]),y.t)
C.ar4=B.a(x([C.zU,C.ayf,C.ec]),y.S)
C.J6=B.a(x([255,254,254,255,255,255,255,255,255,255,255]),y.t)
C.awM=B.a(x([C.J6,C.O3,C.ec]),y.S)
C.asN=B.a(x([255,254,253,255,255,255,255,255,255,255,255]),y.t)
C.O9=B.a(x([250,255,255,255,255,255,255,255,255,255,255]),y.t)
C.ayO=B.a(x([C.asN,C.O9,C.tq]),y.S)
C.aAp=B.a(x([C.azv,C.as7,C.ayx,C.aAo,C.ar4,C.awM,C.ayO,C.k0]),y.o)
C.aoy=B.a(x([186,251,250,255,255,255,255,255,255,255,255]),y.t)
C.awq=B.a(x([234,251,244,254,255,255,255,255,255,255,255]),y.t)
C.avP=B.a(x([251,251,243,253,254,255,254,255,255,255,255]),y.t)
C.ast=B.a(x([C.aoy,C.awq,C.avP]),y.S)
C.aoz=B.a(x([236,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aAs=B.a(x([251,253,253,254,254,255,255,255,255,255,255]),y.t)
C.aza=B.a(x([C.zU,C.aoz,C.aAs]),y.S)
C.az4=B.a(x([254,254,254,255,255,255,255,255,255,255,255]),y.t)
C.am5=B.a(x([C.J6,C.az4,C.ec]),y.S)
C.axn=B.a(x([254,254,255,255,255,255,255,255,255,255,255]),y.t)
C.arQ=B.a(x([C.zt,C.axn,C.tq]),y.S)
C.I5=B.a(x([C.ec,C.tq,C.ec]),y.S)
C.azd=B.a(x([C.ast,C.aza,C.am5,C.arQ,C.I5,C.k0,C.k0,C.k0]),y.o)
C.ayg=B.a(x([248,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aqL=B.a(x([250,254,252,254,255,255,255,255,255,255,255]),y.t)
C.axo=B.a(x([248,254,249,253,255,255,255,255,255,255,255]),y.t)
C.aAn=B.a(x([C.ayg,C.aqL,C.axo]),y.S)
C.ay6=B.a(x([255,253,253,255,255,255,255,255,255,255,255]),y.t)
C.ayh=B.a(x([246,253,253,255,255,255,255,255,255,255,255]),y.t)
C.aqu=B.a(x([252,254,251,254,254,255,255,255,255,255,255]),y.t)
C.axj=B.a(x([C.ay6,C.ayh,C.aqu]),y.S)
C.apB=B.a(x([255,254,252,255,255,255,255,255,255,255,255]),y.t)
C.axp=B.a(x([248,254,253,255,255,255,255,255,255,255,255]),y.t)
C.asf=B.a(x([253,255,254,254,255,255,255,255,255,255,255]),y.t)
C.anu=B.a(x([C.apB,C.axp,C.asf]),y.S)
C.ay1=B.a(x([255,251,254,255,255,255,255,255,255,255,255]),y.t)
C.ay2=B.a(x([245,251,254,255,255,255,255,255,255,255,255]),y.t)
C.axX=B.a(x([253,253,254,255,255,255,255,255,255,255,255]),y.t)
C.ard=B.a(x([C.ay1,C.ay2,C.axX]),y.S)
C.ay7=B.a(x([255,251,253,255,255,255,255,255,255,255,255]),y.t)
C.aoA=B.a(x([252,253,254,255,255,255,255,255,255,255,255]),y.t)
C.ayt=B.a(x([C.ay7,C.aoA,C.zt]),y.S)
C.asO=B.a(x([255,252,255,255,255,255,255,255,255,255,255]),y.t)
C.axY=B.a(x([249,255,254,255,255,255,255,255,255,255,255]),y.t)
C.axZ=B.a(x([255,255,254,255,255,255,255,255,255,255,255]),y.t)
C.awv=B.a(x([C.asO,C.axY,C.axZ]),y.S)
C.ay8=B.a(x([255,255,253,255,255,255,255,255,255,255,255]),y.t)
C.amA=B.a(x([C.ay8,C.O9,C.ec]),y.S)
C.awW=B.a(x([C.aAn,C.axj,C.anu,C.ard,C.ayt,C.awv,C.amA,C.I5]),y.o)
C.as6=B.a(x([C.azA,C.aAp,C.azd,C.awW]),y.M)
C.KT=B.a(x([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250]),y.t)
C.aiU=new A.MA(0,"invalid")
C.aiV=new A.MA(1,"ico")
C.as9=B.a(x([C.aiU,C.aiV,C.H3]),B.w("p<MA>"))
C.ass=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),y.t)
C.zu=B.a(x([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284]),y.t)
C.at3=B.a(x([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),y.t)
C.zv=B.a(x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),y.t)
C.at4=B.a(x([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15]),y.t)
C.ka=B.a(x([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1]),y.t)
C.f2=B.a(x([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255]),y.t)
C.a_O=new A.a0x(0,"source")
C.a_P=new A.a0x(1,"over")
C.atg=B.a(x([C.a_O,C.a_P]),B.w("p<a0x>"))
C.mh=B.a(x([0,1,3,7,15,31,63,127,255]),y.t)
C.zA=B.a(x([0,128,192,224,240,248,252,254,255]),y.t)
C.Mu=B.a(x([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232]),y.t)
C.rp=B.a(x([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),y.t)
C.awo=B.a(x([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),y.t)
C.fD=B.a(x([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]),y.t)
C.awG=B.a(x([null,A.d0F(),A.d0G(),A.d0E()]),B.w("p<~(q,q,q,q,q,cF)?>"))
C.zm=B.a(x([8,0,8,0]),y.t)
C.apM=B.a(x([5,3,5,3]),y.t)
C.aoK=B.a(x([3,5,3,5]),y.t)
C.Id=B.a(x([0,8,0,8]),y.t)
C.IZ=B.a(x([4,4,4,4]),y.t)
C.apu=B.a(x([4,4,0,0]),y.t)
C.Nb=B.a(x([C.zm,C.apM,C.aoK,C.Id,C.zm,C.IZ,C.apu,C.Id]),y.S)
C.rI=B.a(x([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8]),y.t)
C.awP=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095]),y.t)
C.iz=B.a(x([0,1,1,2,4,8,1,1,2,4,8,4,8]),y.t)
C.Cw=new A.k4(0,"whiteIsZero")
C.b1Z=new A.k4(1,"blackIsZero")
C.b25=new A.k4(2,"rgb")
C.Cy=new A.k4(3,"palette")
C.b26=new A.k4(4,"transparencyMask")
C.a2V=new A.k4(5,"cmyk")
C.b27=new A.k4(6,"yCbCr")
C.b28=new A.k4(7,"reserved7")
C.b29=new A.k4(8,"cieLab")
C.b2a=new A.k4(9,"iccLab")
C.b2_=new A.k4(10,"ituLab")
C.b20=new A.k4(11,"logL")
C.b21=new A.k4(12,"logLuv")
C.b22=new A.k4(13,"colorFilterArray")
C.b23=new A.k4(14,"linearRaw")
C.b24=new A.k4(15,"depth")
C.Cx=new A.k4(16,"unknown")
C.ax0=B.a(x([C.Cw,C.b1Z,C.b25,C.Cy,C.b26,C.a2V,C.b27,C.b28,C.b29,C.b2a,C.b2_,C.b20,C.b21,C.b22,C.b23,C.b24,C.Cx]),B.w("p<k4>"))
C.zN=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295]),y.t)
C.aAi=B.a(x([231,120,48,89,115,113,120,152,112]),y.t)
C.am6=B.a(x([152,179,64,126,170,118,46,70,95]),y.t)
C.am7=B.a(x([175,69,143,80,85,82,72,155,103]),y.t)
C.am8=B.a(x([56,58,10,171,218,189,17,13,152]),y.t)
C.am9=B.a(x([114,26,17,163,44,195,21,10,173]),y.t)
C.ama=B.a(x([121,24,80,195,26,62,44,64,85]),y.t)
C.amb=B.a(x([144,71,10,38,171,213,144,34,26]),y.t)
C.amc=B.a(x([170,46,55,19,136,160,33,206,71]),y.t)
C.amd=B.a(x([63,20,8,114,114,208,12,9,226]),y.t)
C.ame=B.a(x([81,40,11,96,182,84,29,16,36]),y.t)
C.aAa=B.a(x([C.aAi,C.am6,C.am7,C.am8,C.am9,C.ama,C.amb,C.amc,C.amd,C.ame]),y.S)
C.amf=B.a(x([134,183,89,137,98,101,106,165,148]),y.t)
C.amg=B.a(x([72,187,100,130,157,111,32,75,80]),y.t)
C.amh=B.a(x([66,102,167,99,74,62,40,234,128]),y.t)
C.ath=B.a(x([41,53,9,178,241,141,26,8,107]),y.t)
C.ami=B.a(x([74,43,26,146,73,166,49,23,157]),y.t)
C.amj=B.a(x([65,38,105,160,51,52,31,115,128]),y.t)
C.asU=B.a(x([104,79,12,27,217,255,87,17,7]),y.t)
C.amk=B.a(x([87,68,71,44,114,51,15,186,23]),y.t)
C.aml=B.a(x([47,41,14,110,182,183,21,17,194]),y.t)
C.amm=B.a(x([66,45,25,102,197,189,23,18,22]),y.t)
C.ayi=B.a(x([C.amf,C.amg,C.amh,C.ath,C.ami,C.amj,C.asU,C.amk,C.aml,C.amm]),y.S)
C.amn=B.a(x([88,88,147,150,42,46,45,196,205]),y.t)
C.amo=B.a(x([43,97,183,117,85,38,35,179,61]),y.t)
C.amq=B.a(x([39,53,200,87,26,21,43,232,171]),y.t)
C.amr=B.a(x([56,34,51,104,114,102,29,93,77]),y.t)
C.ams=B.a(x([39,28,85,171,58,165,90,98,64]),y.t)
C.amt=B.a(x([34,22,116,206,23,34,43,166,73]),y.t)
C.amu=B.a(x([107,54,32,26,51,1,81,43,31]),y.t)
C.amv=B.a(x([68,25,106,22,64,171,36,225,114]),y.t)
C.amw=B.a(x([34,19,21,102,132,188,16,76,124]),y.t)
C.amx=B.a(x([62,18,78,95,85,57,50,48,51]),y.t)
C.ayJ=B.a(x([C.amn,C.amo,C.amq,C.amr,C.ams,C.amt,C.amu,C.amv,C.amw,C.amx]),y.S)
C.amy=B.a(x([193,101,35,159,215,111,89,46,111]),y.t)
C.amz=B.a(x([60,148,31,172,219,228,21,18,111]),y.t)
C.asV=B.a(x([112,113,77,85,179,255,38,120,114]),y.t)
C.ati=B.a(x([40,42,1,196,245,209,10,25,109]),y.t)
C.amB=B.a(x([88,43,29,140,166,213,37,43,154]),y.t)
C.amC=B.a(x([61,63,30,155,67,45,68,1,209]),y.t)
C.amD=B.a(x([100,80,8,43,154,1,51,26,71]),y.t)
C.atj=B.a(x([142,78,78,16,255,128,34,197,171]),y.t)
C.amE=B.a(x([41,40,5,102,211,183,4,1,221]),y.t)
C.amF=B.a(x([51,50,17,168,209,192,23,25,82]),y.t)
C.aoB=B.a(x([C.amy,C.amz,C.asV,C.ati,C.amB,C.amC,C.amD,C.atj,C.amE,C.amF]),y.S)
C.avL=B.a(x([138,31,36,171,27,166,38,44,229]),y.t)
C.amG=B.a(x([67,87,58,169,82,115,26,59,179]),y.t)
C.amH=B.a(x([63,59,90,180,59,166,93,73,154]),y.t)
C.amI=B.a(x([40,40,21,116,143,209,34,39,175]),y.t)
C.amJ=B.a(x([47,15,16,183,34,223,49,45,183]),y.t)
C.amK=B.a(x([46,17,33,183,6,98,15,32,183]),y.t)
C.amM=B.a(x([57,46,22,24,128,1,54,17,37]),y.t)
C.amN=B.a(x([65,32,73,115,28,128,23,128,205]),y.t)
C.amO=B.a(x([40,3,9,115,51,192,18,6,223]),y.t)
C.amP=B.a(x([87,37,9,115,59,77,64,21,47]),y.t)
C.atp=B.a(x([C.avL,C.amG,C.amH,C.amI,C.amJ,C.amK,C.amM,C.amN,C.amO,C.amP]),y.S)
C.amQ=B.a(x([104,55,44,218,9,54,53,130,226]),y.t)
C.amR=B.a(x([64,90,70,205,40,41,23,26,57]),y.t)
C.amS=B.a(x([54,57,112,184,5,41,38,166,213]),y.t)
C.amT=B.a(x([30,34,26,133,152,116,10,32,134]),y.t)
C.avM=B.a(x([39,19,53,221,26,114,32,73,255]),y.t)
C.amU=B.a(x([31,9,65,234,2,15,1,118,73]),y.t)
C.asW=B.a(x([75,32,12,51,192,255,160,43,51]),y.t)
C.amV=B.a(x([88,31,35,67,102,85,55,186,85]),y.t)
C.amW=B.a(x([56,21,23,111,59,205,45,37,192]),y.t)
C.amX=B.a(x([55,38,70,124,73,102,1,34,98]),y.t)
C.aoC=B.a(x([C.amQ,C.amR,C.amS,C.amT,C.avM,C.amU,C.asW,C.amV,C.amW,C.amX]),y.S)
C.amY=B.a(x([125,98,42,88,104,85,117,175,82]),y.t)
C.amZ=B.a(x([95,84,53,89,128,100,113,101,45]),y.t)
C.an_=B.a(x([75,79,123,47,51,128,81,171,1]),y.t)
C.an0=B.a(x([57,17,5,71,102,57,53,41,49]),y.t)
C.an1=B.a(x([38,33,13,121,57,73,26,1,85]),y.t)
C.an2=B.a(x([41,10,67,138,77,110,90,47,114]),y.t)
C.asX=B.a(x([115,21,2,10,102,255,166,23,6]),y.t)
C.an3=B.a(x([101,29,16,10,85,128,101,196,26]),y.t)
C.an4=B.a(x([57,18,10,102,102,213,34,20,43]),y.t)
C.an5=B.a(x([117,20,15,36,163,128,68,1,26]),y.t)
C.aAj=B.a(x([C.amY,C.amZ,C.an_,C.an0,C.an1,C.an2,C.asX,C.an3,C.an4,C.an5]),y.S)
C.aqX=B.a(x([102,61,71,37,34,53,31,243,192]),y.t)
C.an6=B.a(x([69,60,71,38,73,119,28,222,37]),y.t)
C.aqY=B.a(x([68,45,128,34,1,47,11,245,171]),y.t)
C.an7=B.a(x([62,17,19,70,146,85,55,62,70]),y.t)
C.an8=B.a(x([37,43,37,154,100,163,85,160,1]),y.t)
C.an9=B.a(x([63,9,92,136,28,64,32,201,85]),y.t)
C.asY=B.a(x([75,15,9,9,64,255,184,119,16]),y.t)
C.asZ=B.a(x([86,6,28,5,64,255,25,248,1]),y.t)
C.at_=B.a(x([56,8,17,132,137,255,55,116,128]),y.t)
C.ana=B.a(x([58,15,20,82,135,57,26,121,40]),y.t)
C.asa=B.a(x([C.aqX,C.an6,C.aqY,C.an7,C.an8,C.an9,C.asY,C.asZ,C.at_,C.ana]),y.S)
C.anb=B.a(x([164,50,31,137,154,133,25,35,218]),y.t)
C.anc=B.a(x([51,103,44,131,131,123,31,6,158]),y.t)
C.and=B.a(x([86,40,64,135,148,224,45,183,128]),y.t)
C.ane=B.a(x([22,26,17,131,240,154,14,1,209]),y.t)
C.anf=B.a(x([45,16,21,91,64,222,7,1,197]),y.t)
C.ang=B.a(x([56,21,39,155,60,138,23,102,213]),y.t)
C.at0=B.a(x([83,12,13,54,192,255,68,47,28]),y.t)
C.anh=B.a(x([85,26,85,85,128,128,32,146,171]),y.t)
C.ani=B.a(x([18,11,7,63,144,171,4,4,246]),y.t)
C.anj=B.a(x([35,27,10,146,174,171,12,26,128]),y.t)
C.aAk=B.a(x([C.anb,C.anc,C.and,C.ane,C.anf,C.ang,C.at0,C.anh,C.ani,C.anj]),y.S)
C.ank=B.a(x([190,80,35,99,180,80,126,54,45]),y.t)
C.anl=B.a(x([85,126,47,87,176,51,41,20,32]),y.t)
C.anm=B.a(x([101,75,128,139,118,146,116,128,85]),y.t)
C.ann=B.a(x([56,41,15,176,236,85,37,9,62]),y.t)
C.at1=B.a(x([71,30,17,119,118,255,17,18,138]),y.t)
C.ano=B.a(x([101,38,60,138,55,70,43,26,142]),y.t)
C.at2=B.a(x([146,36,19,30,171,255,97,27,20]),y.t)
C.alZ=B.a(x([138,45,61,62,219,1,81,188,64]),y.t)
C.am_=B.a(x([32,41,20,117,151,142,20,21,163]),y.t)
C.am0=B.a(x([112,19,12,61,195,128,48,4,24]),y.t)
C.asK=B.a(x([C.ank,C.anl,C.anm,C.ann,C.at1,C.ano,C.at2,C.alZ,C.am_,C.am0]),y.S)
C.axT=B.a(x([C.aAa,C.ayi,C.ayJ,C.aoB,C.atp,C.aoC,C.aAj,C.asa,C.aAk,C.asK]),y.o)
C.vO=new A.nu(0,"none")
C.hY=new A.nu(1,"palette")
C.a2Q=new A.nu(2,"rgb")
C.b1I=new A.nu(3,"gray")
C.b1J=new A.nu(4,"reserved4")
C.b1K=new A.nu(5,"reserved5")
C.b1L=new A.nu(6,"reserved6")
C.b1M=new A.nu(7,"reserved7")
C.b1N=new A.nu(8,"reserved8")
C.hZ=new A.nu(9,"paletteRle")
C.a2P=new A.nu(10,"rgbRle")
C.b1H=new A.nu(11,"grayRle")
C.axU=B.a(x([C.vO,C.hY,C.a2Q,C.b1I,C.b1J,C.b1K,C.b1L,C.b1M,C.b1N,C.hZ,C.a2P,C.b1H]),B.w("p<nu>"))
C.tl=B.a(x([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567]),y.t)
C.Oy=B.a(x([A.d0i(),A.d0a(),A.d0p(),A.d0n(),A.d0k(),A.d0j(),A.d0l()]),y.y)
C.OB=B.a(x([1,1.387039845,1.306562965,1.175875602,1,0.785694958,0.5411961,0.275899379]),B.w("p<J>"))
C.aRd=new A.Oj(0,"none")
C.a_Q=new A.Oj(1,"background")
C.a_R=new A.Oj(2,"previous")
C.ayF=B.a(x([C.aRd,C.a_Q,C.a_R]),B.w("p<Oj>"))
C.tD=B.a(x([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845]),y.t)
C.b1R=new A.Iz(0,"invalid")
C.a2T=new A.Iz(1,"uint")
C.aX=new A.Iz(2,"int")
C.ng=new A.Iz(3,"float")
C.ayI=B.a(x([C.b1R,C.a2T,C.aX,C.ng]),B.w("p<Iz>"))
C.tH=B.a(x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),y.t)
C.ayL=B.a(x([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576]),y.t)
C.ayM=B.a(x([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),y.t)
C.OK=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),y.t)
C.ayV=B.a(x([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0]),y.t)
C.ayW=B.a(x([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),y.t)
C.anA=B.a(x([173,148,140]),y.t)
C.anB=B.a(x([176,155,140,135]),y.t)
C.arl=B.a(x([180,157,141,134,130]),y.t)
C.aqy=B.a(x([254,254,243,230,196,177,153,140,133,130,129]),y.t)
C.azc=B.a(x([C.anA,C.anB,C.arl,C.aqy]),y.S)
C.azs=B.a(x([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),y.t)
C.A1=B.a(x([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157]),y.t)
C.Pl=B.a(x([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]),y.t)
C.Pk=B.a(x([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41]),y.t)
C.azw=B.a(x([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15]),y.t)
C.Pt=B.a(x([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396]),y.t)
C.Ps=B.a(x([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),y.t)
C.azy=B.a(x([C.GA,C.yx,C.yy]),B.w("p<Mb>"))
C.ui=B.a(x([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63]),y.t)
C.azB=B.a(x([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99]),y.t)
C.azC=B.a(x([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]),y.t)
C.aoq=B.a(x([2,6,2,6]),y.t)
C.aqc=B.a(x([6,2,6,2]),y.t)
C.aoj=B.a(x([2,2,6,6]),y.t)
C.anQ=B.a(x([1,3,3,9]),y.t)
C.apl=B.a(x([4,0,12,0]),y.t)
C.aoI=B.a(x([3,1,9,3]),y.t)
C.aqH=B.a(x([8,8,0,0]),y.t)
C.apn=B.a(x([4,12,0,0]),y.t)
C.anz=B.a(x([16,0,0,0]),y.t)
C.any=B.a(x([12,4,0,0]),y.t)
C.aqm=B.a(x([6,6,2,2]),y.t)
C.aoL=B.a(x([3,9,1,3]),y.t)
C.anx=B.a(x([12,0,4,0]),y.t)
C.aqU=B.a(x([9,3,3,1]),y.t)
C.cH=B.a(x([C.IZ,C.aoq,C.zm,C.aqc,C.aoj,C.anQ,C.apl,C.aoI,C.aqH,C.apn,C.anz,C.any,C.aqm,C.aoL,C.anx,C.aqU]),y.S)
C.PM=B.a(x([C.T,C.Hu,C.bc,C.b1,C.cp,C.dE,C.Hy,C.h9,C.Hz,C.HA,C.Hv,C.Hw,C.Hx]),B.w("p<m6>"))
C.aRC=new A.th(0,"bitmap")
C.a0c=new A.th(1,"grayscale")
C.aRD=new A.th(2,"indexed")
C.a0d=new A.th(3,"rgb")
C.a0e=new A.th(4,"cmyk")
C.aRE=new A.th(5,"multiChannel")
C.aRF=new A.th(6,"duoTone")
C.a0f=new A.th(7,"lab")
C.aA8=B.a(x([C.aRC,C.a0c,C.aRD,C.a0d,C.a0e,C.aRE,C.aRF,C.a0f]),B.w("p<th>"))
C.ed=B.a(x([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255]),y.t)
C.aAr=B.a(x([254,253,251,247,239,223,191,127]),y.t)
C.Qk=B.a(x([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390]),y.t)
C.aAA=B.a(x([A.d02(),A.d09(),A.d0b(),A.d04(),A.d07(),A.d0d(),A.d06(),A.d0c(),A.d03(),A.d05()]),y.y)
C.zn=B.a(x([128,128,128,128,128,128,128,128,128,128,128]),y.t)
C.Qn=B.a(x([C.zn,C.zn,C.zn]),y.S)
C.aAz=B.a(x([253,136,254,255,228,219,128,128,128,128,128]),y.t)
C.ax2=B.a(x([189,129,242,255,227,213,255,219,128,128,128]),y.t)
C.azE=B.a(x([106,126,227,252,214,209,255,255,128,128,128]),y.t)
C.awX=B.a(x([C.aAz,C.ax2,C.azE]),y.S)
C.aw0=B.a(x([1,98,248,255,236,226,255,255,128,128,128]),y.t)
C.azH=B.a(x([181,133,238,254,221,234,255,154,128,128,128]),y.t)
C.ax3=B.a(x([78,134,202,247,198,180,255,219,128,128,128]),y.t)
C.azu=B.a(x([C.aw0,C.azH,C.ax3]),y.S)
C.aqQ=B.a(x([1,185,249,255,243,255,128,128,128,128,128]),y.t)
C.awj=B.a(x([184,150,247,255,236,224,128,128,128,128,128]),y.t)
C.ao8=B.a(x([77,110,216,255,236,230,128,128,128,128,128]),y.t)
C.aow=B.a(x([C.aqQ,C.awj,C.ao8]),y.S)
C.aqR=B.a(x([1,101,251,255,241,255,128,128,128,128,128]),y.t)
C.asg=B.a(x([170,139,241,252,236,209,255,255,128,128,128]),y.t)
C.aqN=B.a(x([37,116,196,243,228,255,255,255,128,128,128]),y.t)
C.ar1=B.a(x([C.aqR,C.asg,C.aqN]),y.S)
C.ar2=B.a(x([1,204,254,255,245,255,128,128,128,128,128]),y.t)
C.ao9=B.a(x([207,160,250,255,238,128,128,128,128,128,128]),y.t)
C.awk=B.a(x([102,103,231,255,211,171,128,128,128,128,128]),y.t)
C.aof=B.a(x([C.ar2,C.ao9,C.awk]),y.S)
C.ayY=B.a(x([1,152,252,255,240,255,128,128,128,128,128]),y.t)
C.awl=B.a(x([177,135,243,255,234,225,128,128,128,128,128]),y.t)
C.aoa=B.a(x([80,129,211,255,194,224,128,128,128,128,128]),y.t)
C.apa=B.a(x([C.ayY,C.awl,C.aoa]),y.S)
C.JG=B.a(x([1,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aqz=B.a(x([246,1,255,128,128,128,128,128,128,128,128]),y.t)
C.asd=B.a(x([255,128,128,128,128,128,128,128,128,128,128]),y.t)
C.asx=B.a(x([C.JG,C.aqz,C.asd]),y.S)
C.ay3=B.a(x([C.Qn,C.awX,C.azu,C.aow,C.ar1,C.aof,C.apa,C.asx]),y.o)
C.aqA=B.a(x([198,35,237,223,193,187,162,160,145,155,62]),y.t)
C.arH=B.a(x([131,45,198,221,172,176,220,157,252,221,1]),y.t)
C.ayp=B.a(x([68,47,146,208,149,167,221,162,255,223,128]),y.t)
C.anG=B.a(x([C.aqA,C.arH,C.ayp]),y.S)
C.asB=B.a(x([1,149,241,255,221,224,255,255,128,128,128]),y.t)
C.ax4=B.a(x([184,141,234,253,222,220,255,199,128,128,128]),y.t)
C.avT=B.a(x([81,99,181,242,176,190,249,202,255,255,128]),y.t)
C.az7=B.a(x([C.asB,C.ax4,C.avT]),y.S)
C.awA=B.a(x([1,129,232,253,214,197,242,196,255,255,128]),y.t)
C.azI=B.a(x([99,121,210,250,201,198,255,202,128,128,128]),y.t)
C.avU=B.a(x([23,91,163,242,170,187,247,210,255,255,128]),y.t)
C.awy=B.a(x([C.awA,C.azI,C.avU]),y.S)
C.ayZ=B.a(x([1,200,246,255,234,255,128,128,128,128,128]),y.t)
C.awQ=B.a(x([109,178,241,255,231,245,255,255,128,128,128]),y.t)
C.aw1=B.a(x([44,130,201,253,205,192,255,255,128,128,128]),y.t)
C.at9=B.a(x([C.ayZ,C.awQ,C.aw1]),y.S)
C.ao3=B.a(x([1,132,239,251,219,209,255,165,128,128,128]),y.t)
C.aw2=B.a(x([94,136,225,251,218,190,255,255,128,128,128]),y.t)
C.ax5=B.a(x([22,100,174,245,186,161,255,199,128,128,128]),y.t)
C.arG=B.a(x([C.ao3,C.aw2,C.ax5]),y.S)
C.apO=B.a(x([1,182,249,255,232,235,128,128,128,128,128]),y.t)
C.awm=B.a(x([124,143,241,255,227,234,128,128,128,128,128]),y.t)
C.ax6=B.a(x([35,77,181,251,193,211,255,205,128,128,128]),y.t)
C.asq=B.a(x([C.apO,C.awm,C.ax6]),y.S)
C.ayD=B.a(x([1,157,247,255,236,231,255,255,128,128,128]),y.t)
C.asC=B.a(x([121,141,235,255,225,227,255,255,128,128,128]),y.t)
C.ax7=B.a(x([45,99,188,251,195,217,255,224,128,128,128]),y.t)
C.awO=B.a(x([C.ayD,C.asC,C.ax7]),y.S)
C.apP=B.a(x([1,1,251,255,213,255,128,128,128,128,128]),y.t)
C.asD=B.a(x([203,1,248,255,255,128,128,128,128,128,128]),y.t)
C.az_=B.a(x([137,1,177,255,224,255,128,128,128,128,128]),y.t)
C.awb=B.a(x([C.apP,C.asD,C.az_]),y.S)
C.aqO=B.a(x([C.anG,C.az7,C.awy,C.at9,C.arG,C.asq,C.awO,C.awb]),y.o)
C.apK=B.a(x([253,9,248,251,207,208,255,192,128,128,128]),y.t)
C.anX=B.a(x([175,13,224,243,193,185,249,198,255,255,128]),y.t)
C.ayq=B.a(x([73,17,171,221,161,179,236,167,255,234,128]),y.t)
C.awU=B.a(x([C.apK,C.anX,C.ayq]),y.S)
C.asE=B.a(x([1,95,247,253,212,183,255,255,128,128,128]),y.t)
C.aAE=B.a(x([239,90,244,250,211,209,255,255,128,128,128]),y.t)
C.azF=B.a(x([155,77,195,248,188,195,255,255,128,128,128]),y.t)
C.atq=B.a(x([C.asE,C.aAE,C.azF]),y.S)
C.ao4=B.a(x([1,24,239,251,218,219,255,205,128,128,128]),y.t)
C.aob=B.a(x([201,51,219,255,196,186,128,128,128,128,128]),y.t)
C.ax8=B.a(x([69,46,190,239,201,218,255,228,128,128,128]),y.t)
C.ayu=B.a(x([C.ao4,C.aob,C.ax8]),y.S)
C.ash=B.a(x([1,191,251,255,255,128,128,128,128,128,128]),y.t)
C.apQ=B.a(x([223,165,249,255,213,255,128,128,128,128,128]),y.t)
C.asF=B.a(x([141,124,248,255,255,128,128,128,128,128,128]),y.t)
C.ap5=B.a(x([C.ash,C.apQ,C.asF]),y.S)
C.asG=B.a(x([1,16,248,255,255,128,128,128,128,128,128]),y.t)
C.az0=B.a(x([190,36,230,255,236,255,128,128,128,128,128]),y.t)
C.aqB=B.a(x([149,1,255,128,128,128,128,128,128,128,128]),y.t)
C.az5=B.a(x([C.asG,C.az0,C.aqB]),y.S)
C.aqC=B.a(x([1,226,255,128,128,128,128,128,128,128,128]),y.t)
C.att=B.a(x([247,192,255,128,128,128,128,128,128,128,128]),y.t)
C.aqD=B.a(x([240,128,255,128,128,128,128,128,128,128,128]),y.t)
C.awH=B.a(x([C.aqC,C.att,C.aqD]),y.S)
C.asH=B.a(x([1,134,252,255,255,128,128,128,128,128,128]),y.t)
C.asI=B.a(x([213,62,250,255,255,128,128,128,128,128,128]),y.t)
C.aqE=B.a(x([55,93,255,128,128,128,128,128,128,128,128]),y.t)
C.azk=B.a(x([C.asH,C.asI,C.aqE]),y.S)
C.awa=B.a(x([C.awU,C.atq,C.ayu,C.ap5,C.az5,C.awH,C.azk,C.Qn]),y.o)
C.aAc=B.a(x([202,24,213,235,186,191,220,160,240,175,255]),y.t)
C.ayr=B.a(x([126,38,182,232,169,184,228,174,255,187,128]),y.t)
C.ays=B.a(x([61,46,138,219,151,178,240,170,255,216,128]),y.t)
C.api=B.a(x([C.aAc,C.ayr,C.ays]),y.S)
C.avV=B.a(x([1,112,230,250,199,191,247,159,255,255,128]),y.t)
C.azJ=B.a(x([166,109,228,252,211,215,255,174,128,128,128]),y.t)
C.avW=B.a(x([39,77,162,232,172,180,245,178,255,255,128]),y.t)
C.at5=B.a(x([C.avV,C.azJ,C.avW]),y.S)
C.avX=B.a(x([1,52,220,246,198,199,249,220,255,255,128]),y.t)
C.awB=B.a(x([124,74,191,243,183,193,250,221,255,255,128]),y.t)
C.avY=B.a(x([24,71,130,219,154,170,243,182,255,255,128]),y.t)
C.am1=B.a(x([C.avX,C.awB,C.avY]),y.S)
C.ax9=B.a(x([1,182,225,249,219,240,255,224,128,128,128]),y.t)
C.azK=B.a(x([149,150,226,252,216,205,255,171,128,128,128]),y.t)
C.aw_=B.a(x([28,108,170,242,183,194,254,223,255,255,128]),y.t)
C.axl=B.a(x([C.ax9,C.azK,C.aw_]),y.S)
C.azL=B.a(x([1,81,230,252,204,203,255,192,128,128,128]),y.t)
C.aw3=B.a(x([123,102,209,247,188,196,255,233,128,128,128]),y.t)
C.axa=B.a(x([20,95,153,243,164,173,255,203,128,128,128]),y.t)
C.arO=B.a(x([C.azL,C.aw3,C.axa]),y.S)
C.aoc=B.a(x([1,222,248,255,216,213,128,128,128,128,128]),y.t)
C.avZ=B.a(x([168,175,246,252,235,205,255,255,128,128,128]),y.t)
C.aw4=B.a(x([47,116,215,255,211,212,255,255,128,128,128]),y.t)
C.aqT=B.a(x([C.aoc,C.avZ,C.aw4]),y.S)
C.aw5=B.a(x([1,121,236,253,212,214,255,255,128,128,128]),y.t)
C.azM=B.a(x([141,84,213,252,201,202,255,219,128,128,128]),y.t)
C.azN=B.a(x([42,80,160,240,162,185,255,205,128,128,128]),y.t)
C.ap6=B.a(x([C.aw5,C.azM,C.azN]),y.S)
C.aqF=B.a(x([244,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aqG=B.a(x([238,1,255,128,128,128,128,128,128,128,128]),y.t)
C.awK=B.a(x([C.JG,C.aqF,C.aqG]),y.S)
C.aA2=B.a(x([C.api,C.at5,C.am1,C.axl,C.arO,C.aqT,C.ap6,C.awK]),y.o)
C.aAB=B.a(x([C.ay3,C.aqO,C.awa,C.aA2]),y.M)
C.VK=new B.cR([C.eU,1,C.fx,3,C.fy,15,C.a_,255,C.bW,65535,C.io,4294967295,C.jR,127,C.jS,32767,C.jT,2147483647,C.h7,1,C.im,1,C.jQ,1],B.w("cR<mW,q>"))
C.Aw=new B.cR([34665,"exif",40965,"interop",34853,"gps"],B.w("cR<q,f>"))
C.aKQ={ProcessingSoftware:0,SubfileType:1,OldSubfileType:2,ImageWidth:3,ImageLength:4,ImageHeight:5,BitsPerSample:6,Compression:7,PhotometricInterpretation:8,Thresholding:9,CellWidth:10,CellLength:11,FillOrder:12,DocumentName:13,ImageDescription:14,Make:15,Model:16,StripOffsets:17,Orientation:18,SamplesPerPixel:19,RowsPerStrip:20,StripByteCounts:21,MinSampleValue:22,MaxSampleValue:23,XResolution:24,YResolution:25,PlanarConfiguration:26,PageName:27,XPosition:28,YPosition:29,GrayResponseUnit:30,GrayResponseCurve:31,T4Options:32,T6Options:33,ResolutionUnit:34,PageNumber:35,ColorResponseUnit:36,TransferFunction:37,Software:38,DateTime:39,Artist:40,HostComputer:41,Predictor:42,WhitePoint:43,PrimaryChromaticities:44,ColorMap:45,HalftoneHints:46,TileWidth:47,TileLength:48,TileOffsets:49,TileByteCounts:50,BadFaxLines:51,CleanFaxData:52,ConsecutiveBadFaxLines:53,InkSet:54,InkNames:55,NumberofInks:56,DotRange:57,TargetPrinter:58,ExtraSamples:59,SampleFormat:60,SMinSampleValue:61,SMaxSampleValue:62,TransferRange:63,ClipPath:64,JPEGProc:65,JPEGInterchangeFormat:66,JPEGInterchangeFormatLength:67,YCbCrCoefficients:68,YCbCrSubSampling:69,YCbCrPositioning:70,ReferenceBlackWhite:71,ApplicationNotes:72,Rating:73,CFARepeatPatternDim:74,CFAPattern:75,BatteryLevel:76,Copyright:77,ExposureTime:78,FNumber:79,"IPTC-NAA":80,ExifOffset:81,InterColorProfile:82,ExposureProgram:83,SpectralSensitivity:84,GPSOffset:85,ISOSpeed:86,OECF:87,SensitivityType:88,RecommendedExposureIndex:89,ExifVersion:90,DateTimeOriginal:91,DateTimeDigitized:92,OffsetTime:93,OffsetTimeOriginal:94,OffsetTimeDigitized:95,ComponentsConfiguration:96,CompressedBitsPerPixel:97,ShutterSpeedValue:98,ApertureValue:99,BrightnessValue:100,ExposureBiasValue:101,MaxApertureValue:102,SubjectDistance:103,MeteringMode:104,LightSource:105,Flash:106,FocalLength:107,SubjectArea:108,MakerNote:109,UserComment:110,SubSecTime:111,SubSecTimeOriginal:112,SubSecTimeDigitized:113,XPTitle:114,XPComment:115,XPAuthor:116,XPKeywords:117,XPSubject:118,FlashPixVersion:119,ColorSpace:120,ExifImageWidth:121,ExifImageLength:122,RelatedSoundFile:123,InteroperabilityOffset:124,FlashEnergy:125,SpatialFrequencyResponse:126,FocalPlaneXResolution:127,FocalPlaneYResolution:128,FocalPlaneResolutionUnit:129,SubjectLocation:130,ExposureIndex:131,SensingMethod:132,FileSource:133,SceneType:134,CVAPattern:135,CustomRendered:136,ExposureMode:137,WhiteBalance:138,DigitalZoomRatio:139,FocalLengthIn35mmFilm:140,SceneCaptureType:141,GainControl:142,Contrast:143,Saturation:144,Sharpness:145,DeviceSettingDescription:146,SubjectDistanceRange:147,ImageUniqueID:148,CameraOwnerName:149,BodySerialNumber:150,LensSpecification:151,LensMake:152,LensModel:153,LensSerialNumber:154,Gamma:155,PrintIM:156,Padding:157,OffsetSchema:158,OwnerName:159,SerialNumber:160,InteropIndex:161,InteropVersion:162,RelatedImageFileFormat:163,RelatedImageWidth:164,RelatedImageLength:165,GPSVersionID:166,GPSLatitudeRef:167,GPSLatitude:168,GPSLongitudeRef:169,GPSLongitude:170,GPSAltitudeRef:171,GPSAltitude:172,GPSTimeStamp:173,GPSSatellites:174,GPSStatus:175,GPSMeasureMode:176,GPSDOP:177,GPSSpeedRef:178,GPSSpeed:179,GPSTrackRef:180,GPSTrack:181,GPSImgDirectionRef:182,GPSImgDirection:183,GPSMapDatum:184,GPSDestLatitudeRef:185,GPSDestLatitude:186,GPSDestLongitudeRef:187,GPSDestLongitude:188,GPSDestBearingRef:189,GPSDestBearing:190,GPSDestDistanceRef:191,GPSDestDistance:192,GPSProcessingMethod:193,GPSAreaInformation:194,GPSDate:195,GPSDifferential:196}
C.VR=new B.B(C.aKQ,[11,254,255,256,257,257,258,259,262,263,264,265,266,269,270,271,272,273,274,277,278,279,280,281,282,283,284,285,286,287,290,291,292,293,296,297,300,301,305,306,315,316,317,318,319,320,321,322,323,324,325,326,327,328,332,333,334,336,337,338,339,340,341,342,343,512,513,514,529,530,531,532,700,18246,33421,33422,33423,33432,33434,33437,33723,34665,34675,34850,34852,34853,34855,34856,34864,34866,36864,36867,36868,36880,36881,36882,37121,37122,37377,37378,37379,37380,37381,37382,37383,37384,37385,37386,37396,37500,37510,37520,37521,37522,40091,40092,40093,40094,40095,40960,40961,40962,40963,40964,40965,41483,41484,41486,41487,41488,41492,41493,41495,41728,41729,41730,41985,41986,41987,41988,41989,41990,41991,41992,41993,41994,41995,41996,42016,42032,42033,42034,42035,42036,42037,42240,50341,59932,59933,65e3,65001,1,2,4096,4097,4098,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],B.w("B<f,q>"))
C.aRj=new A.at4(0,"none")
C.aRk=new A.at4(4,"paeth")
C.mP=new A.BM(0,"invalid")
C.a_S=new A.BM(1,"pbm")
C.a_T=new A.BM(2,"pgm2")
C.B_=new A.BM(3,"pgm5")
C.a_U=new A.BM(4,"ppm3")
C.B0=new A.BM(5,"ppm6")
C.aTi=new A.bqv(0,"origin")
C.aTj=new A.bqy(1,"contain")
C.a2E=new B.Y(!0,D.r,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.b0W=new B.c5("Processing content and detecting large images...",null,R.a2C,null,null,null,null,null,null,null,null,null,null,null,null)
C.b1j=new B.c5("Reducing Images Size...",null,C.a2E,null,null,null,null,null,null,null,null,null,null,null,null)
C.b1C=new B.c5("Some images are large and may slow down the app. Press OK to convert them into optimal size.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.b1E=new B.c5("Large Images Detected",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.Cv=new A.r_(0,"bilevel")
C.b1S=new A.r_(1,"gray4bit")
C.b1T=new A.r_(2,"gray")
C.b1U=new A.r_(3,"grayAlpha")
C.b1V=new A.r_(4,"palette")
C.a2U=new A.r_(5,"rgb")
C.b1W=new A.r_(6,"rgba")
C.b1X=new A.r_(7,"yCbCrSub")
C.vP=new A.r_(8,"generic")
C.b1Y=new A.r_(9,"invalid")
C.nn=new A.Qu(0,"undefined")
C.CV=new A.Qu(1,"lossy")
C.vU=new A.Qu(2,"lossless")
C.b4F=new A.Qu(3,"animated")})();(function staticFields(){$.uu=B.bC("_config")
$.chG=!0
$.ceC=null
$.cq0=!1
$.cq1=B.a([A.cfV(),A.d0q(),A.d0v(),A.d0w(),A.d0x(),A.d0y(),A.d0z(),A.d0A(),A.d0B(),A.d0C(),A.d0r(),A.d0s(),A.d0t(),A.d0u(),A.cfV(),A.cfV()],B.w("p<q(pM,q,q)>"))
$.h9=null
$.cks=B.bC("_eLut")})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazy
x($,"d6n","cxL",()=>A.cej(C.rI,C.OK,257,286,15))
x($,"d6m","cxK",()=>A.cej(C.Jf,C.tH,0,30,15))
x($,"d6l","cxJ",()=>A.cej(null,C.at3,0,19,7))
x($,"d9w","c9x",()=>{var v=null,u="ISOSpeed"
return B.z([11,A.ax("ProcessingSoftware",C.bc,v),254,A.ax("SubfileType",C.cp,1),255,A.ax("OldSubfileType",C.cp,1),256,A.ax("ImageWidth",C.cp,1),257,A.ax("ImageLength",C.cp,1),258,A.ax("BitsPerSample",C.b1,1),259,A.ax("Compression",C.b1,1),262,A.ax("PhotometricInterpretation",C.b1,1),263,A.ax("Thresholding",C.b1,1),264,A.ax("CellWidth",C.b1,1),265,A.ax("CellLength",C.b1,1),266,A.ax("FillOrder",C.b1,1),269,A.ax("DocumentName",C.bc,v),270,A.ax("ImageDescription",C.bc,v),271,A.ax("Make",C.bc,v),272,A.ax("Model",C.bc,v),273,A.ax("StripOffsets",C.cp,v),274,A.ax("Orientation",C.b1,1),277,A.ax("SamplesPerPixel",C.b1,1),278,A.ax("RowsPerStrip",C.cp,1),279,A.ax("StripByteCounts",C.cp,1),280,A.ax("MinSampleValue",C.b1,1),281,A.ax("MaxSampleValue",C.b1,1),282,A.ax("XResolution",C.dE,1),283,A.ax("YResolution",C.dE,1),284,A.ax("PlanarConfiguration",C.b1,1),285,A.ax("PageName",C.bc,v),286,A.ax("XPosition",C.dE,1),287,A.ax("YPosition",C.dE,1),290,A.ax("GrayResponseUnit",C.b1,1),291,A.ax("GrayResponseCurve",C.T,v),292,A.ax("T4Options",C.T,v),293,A.ax("T6Options",C.T,v),296,A.ax("ResolutionUnit",C.b1,1),297,A.ax("PageNumber",C.b1,2),300,A.ax("ColorResponseUnit",C.T,v),301,A.ax("TransferFunction",C.b1,768),305,A.ax("Software",C.bc,v),306,A.ax("DateTime",C.bc,v),315,A.ax("Artist",C.bc,v),316,A.ax("HostComputer",C.bc,v),317,A.ax("Predictor",C.b1,1),318,A.ax("WhitePoint",C.dE,2),319,A.ax("PrimaryChromaticities",C.dE,6),320,A.ax("ColorMap",C.b1,v),321,A.ax("HalftoneHints",C.b1,2),322,A.ax("TileWidth",C.cp,1),323,A.ax("TileLength",C.cp,1),324,A.ax("TileOffsets",C.cp,v),325,A.ax("TileByteCounts",C.T,v),326,A.ax("BadFaxLines",C.T,v),327,A.ax("CleanFaxData",C.T,v),328,A.ax("ConsecutiveBadFaxLines",C.T,v),332,A.ax("InkSet",C.T,v),333,A.ax("InkNames",C.T,v),334,A.ax("NumberofInks",C.T,v),336,A.ax("DotRange",C.T,v),337,A.ax("TargetPrinter",C.bc,v),338,A.ax("ExtraSamples",C.T,v),339,A.ax("SampleFormat",C.b1,1),340,A.ax("SMinSampleValue",C.T,v),341,A.ax("SMaxSampleValue",C.T,v),342,A.ax("TransferRange",C.T,v),343,A.ax("ClipPath",C.T,v),512,A.ax("JPEGProc",C.T,v),513,A.ax("JPEGInterchangeFormat",C.T,v),514,A.ax("JPEGInterchangeFormatLength",C.T,v),529,A.ax("YCbCrCoefficients",C.dE,3),530,A.ax("YCbCrSubSampling",C.b1,1),531,A.ax("YCbCrPositioning",C.b1,1),532,A.ax("ReferenceBlackWhite",C.dE,6),700,A.ax("ApplicationNotes",C.b1,1),18246,A.ax("Rating",C.b1,1),33421,A.ax("CFARepeatPatternDim",C.T,v),33422,A.ax("CFAPattern",C.T,v),33423,A.ax("BatteryLevel",C.T,v),33432,A.ax("Copyright",C.bc,v),33434,A.ax("ExposureTime",C.dE,1),33437,A.ax("FNumber",C.dE,v),33723,A.ax("IPTC-NAA",C.cp,1),34665,A.ax("ExifOffset",C.T,v),34675,A.ax("InterColorProfile",C.T,v),34850,A.ax("ExposureProgram",C.b1,1),34852,A.ax("SpectralSensitivity",C.bc,v),34853,A.ax("GPSOffset",C.T,v),34855,A.ax(u,C.cp,1),34856,A.ax("OECF",C.T,v),34864,A.ax("SensitivityType",C.b1,1),34866,A.ax("RecommendedExposureIndex",C.cp,1),34867,A.ax(u,C.cp,1),36864,A.ax("ExifVersion",C.h9,v),36867,A.ax("DateTimeOriginal",C.bc,v),36868,A.ax("DateTimeDigitized",C.bc,v),36880,A.ax("OffsetTime",C.bc,v),36881,A.ax("OffsetTimeOriginal",C.bc,v),36882,A.ax("OffsetTimeDigitized",C.bc,v),37121,A.ax("ComponentsConfiguration",C.h9,v),37122,A.ax("CompressedBitsPerPixel",C.T,v),37377,A.ax("ShutterSpeedValue",C.T,v),37378,A.ax("ApertureValue",C.T,v),37379,A.ax("BrightnessValue",C.T,v),37380,A.ax("ExposureBiasValue",C.T,v),37381,A.ax("MaxApertureValue",C.T,v),37382,A.ax("SubjectDistance",C.T,v),37383,A.ax("MeteringMode",C.T,v),37384,A.ax("LightSource",C.T,v),37385,A.ax("Flash",C.T,v),37386,A.ax("FocalLength",C.T,v),37396,A.ax("SubjectArea",C.T,v),37500,A.ax("MakerNote",C.h9,v),37510,A.ax("UserComment",C.h9,v),37520,A.ax("SubSecTime",C.T,v),37521,A.ax("SubSecTimeOriginal",C.T,v),37522,A.ax("SubSecTimeDigitized",C.T,v),40091,A.ax("XPTitle",C.T,v),40092,A.ax("XPComment",C.T,v),40093,A.ax("XPAuthor",C.T,v),40094,A.ax("XPKeywords",C.T,v),40095,A.ax("XPSubject",C.T,v),40960,A.ax("FlashPixVersion",C.T,v),40961,A.ax("ColorSpace",C.b1,1),40962,A.ax("ExifImageWidth",C.b1,1),40963,A.ax("ExifImageLength",C.b1,1),40964,A.ax("RelatedSoundFile",C.T,v),40965,A.ax("InteroperabilityOffset",C.T,v),41483,A.ax("FlashEnergy",C.T,v),41484,A.ax("SpatialFrequencyResponse",C.T,v),41486,A.ax("FocalPlaneXResolution",C.T,v),41487,A.ax("FocalPlaneYResolution",C.T,v),41488,A.ax("FocalPlaneResolutionUnit",C.T,v),41492,A.ax("SubjectLocation",C.T,v),41493,A.ax("ExposureIndex",C.T,v),41495,A.ax("SensingMethod",C.T,v),41728,A.ax("FileSource",C.T,v),41729,A.ax("SceneType",C.T,v),41730,A.ax("CVAPattern",C.T,v),41985,A.ax("CustomRendered",C.T,v),41986,A.ax("ExposureMode",C.T,v),41987,A.ax("WhiteBalance",C.T,v),41988,A.ax("DigitalZoomRatio",C.T,v),41989,A.ax("FocalLengthIn35mmFilm",C.T,v),41990,A.ax("SceneCaptureType",C.T,v),41991,A.ax("GainControl",C.T,v),41992,A.ax("Contrast",C.T,v),41993,A.ax("Saturation",C.T,v),41994,A.ax("Sharpness",C.T,v),41995,A.ax("DeviceSettingDescription",C.T,v),41996,A.ax("SubjectDistanceRange",C.T,v),42016,A.ax("ImageUniqueID",C.T,v),42032,A.ax("CameraOwnerName",C.bc,v),42033,A.ax("BodySerialNumber",C.bc,v),42034,A.ax("LensSpecification",C.T,v),42035,A.ax("LensMake",C.bc,v),42036,A.ax("LensModel",C.bc,v),42037,A.ax("LensSerialNumber",C.bc,v),42240,A.ax("Gamma",C.dE,1),50341,A.ax("PrintIM",C.T,v),59932,A.ax("Padding",C.T,v),59933,A.ax("OffsetSchema",C.T,v),65e3,A.ax("OwnerName",C.bc,v),65001,A.ax("SerialNumber",C.bc,v)],y.p,B.w("akp"))})
w($,"d5v","aQA",()=>B.Bd(511))
w($,"d5w","c9o",()=>B.Bd(511))
w($,"d5y","c9p",()=>A.cmw(2041))
w($,"d5z","aQB",()=>A.cmw(225))
w($,"d5x","oP",()=>B.Bd(766))
x($,"d3T","cwv",()=>A.clo(0,0,0))
x($,"d6P","nH",()=>B.Bd(1))
x($,"d6Q","oQ",()=>A.cHd($.nH().buffer,0,null))
x($,"d6I","pX",()=>M.cII(1))
x($,"d6J","rl",()=>{var v,u=$.pX().buffer
B.z_(u,0,null)
v=D.c.aW(u.byteLength,2)
return new Int16Array(u,0,v)})
x($,"d6K","hq",()=>B.cIK(1))
x($,"d6M","kX",()=>B.bje($.hq().buffer,0,null))
x($,"d6L","DT",()=>A.cFD($.hq().buffer))
x($,"d6G","aQD",()=>B.cc_(1))
x($,"d6H","c9r",()=>A.cpM($.aQD().buffer,0))
x($,"d6E","cgI",()=>B.bjc(1))
x($,"d6F","cy_",()=>A.cpM($.cgI().buffer,0))
x($,"d6N","cgJ",()=>A.cNz(1))
x($,"d6O","cy0",()=>{var v=$.cgJ()
return A.cFE(v.gh0(v))})})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_250",e:"endPart",h:b})})($__dart_deferred_initializers__,"sCNZS2g85JUuZ8MBlxWnyDB2XNo=");