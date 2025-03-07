((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_214",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,E,A={
Wb(d){return new A.ahZ(d,null,null)},
ahZ:function ahZ(d,e,f){this.a=d
this.b=e
this.c=f},
BU(d,e,f,g){var x,w
if(y.ah.b(d))x=J.d5(J.ahj(d),d.byteOffset,d.byteLength)
else x=y.L.b(d)?d:B.b0(y.R.a(d),!0,y.p)
w=new A.bht(x,g,g,e)
w.e=f==null?x.length:f
return w},
bhu:function bhu(){},
bht:function bht(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
cop(d,e){var x=e==null?32768:e
return new A.bqh(d,new Uint8Array(x))},
bqi:function bqi(){},
bqh:function bqh(d,e){this.a=0
this.b=d
this.c=e},
cgV:function cgV(){},
cvz(d,e,f,g){var x=d[e*2],w=d[f*2]
if(x>=w)x=x===w&&g[e]<=g[f]
else x=!0
return x},
cqj(){return new A.bYW()},
d2E(d,e,f){var x,w,v,u,t,s,r,q=new Uint16Array(16)
for(x=0,w=1;w<=15;++w){x=x+f[w-1]<<1>>>0
q[w]=x}for(v=d.$flags|0,u=0;u<=e;++u){t=u*2
s=d[t+1]
if(s===0)continue
r=q[s]
q[s]=r+1
r=A.d2F(r,s)
v&2&&B.B(d)
d[t]=r}},
d2F(d,e){var x,w=0
do{x=A.pt(d,1)
w=(w|d&1)<<1>>>0
if(--e,e>0){d=x
continue}else break}while(!0)
return A.pt(w,1)},
cDh(d){return d<256?C.Lu[d]:C.Lu[256+A.pt(d,7)]},
cqv(d,e,f,g,h){return new A.caM(d,e,f,g,h)},
pt(d,e){if(d>=0)return D.c.o_(d,e)
else return D.c.o_(d,e)+D.c.er(2,(~e>>>0)+65536&65535)},
b5y:function b5y(d,e,f,g,h,i,j,k){var _=this
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
_.Z=_.E=_.co=_.bt=_.aY=_.aw=_.bY=_.br=_.y2=_.y1=$},
t4:function t4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bYW:function bYW(){this.c=this.b=this.a=$},
caM:function caM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aqa(d){var x=new A.bg2()
x.aT1(d)
return x},
bg2:function bg2(){this.a=$
this.b=0
this.c=2147483647},
bh8:function bh8(d,e,f,g){var _=this
_.a=d
_.b=!1
_.c=e
_.e=_.d=0
_.r=f
_.w=g},
bLN:function bLN(){},
bLM:function bLM(){},
bLO:function bLO(){},
a_C(d,e,f){var x=0,w=B.k(y.D),v
var $async$a_C=B.f(function(g,h){if(g===1)return B.h(h,w)
while(true)switch(x){case 0:x=3
return B.c(A.Hg(d,e,"jpg",new A.bgD(d,e,f),f),$async$a_C)
case 3:v=h
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$a_C,w)},
aqp(d,e){var x=0,w=B.k(y.D),v
var $async$aqp=B.f(function(f,g){if(f===1)return B.h(g,w)
while(true)switch(x){case 0:x=3
return B.c(A.Hg(d,e,"png",new A.bgE(d,e),null),$async$aqp)
case 3:v=g
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$aqp,w)},
bgF(d,e,f){var x=0,w=B.k(y.D),v
var $async$bgF=B.f(function(g,h){if(g===1)return B.h(h,w)
while(true)switch(x){case 0:x=3
return B.c(A.Hg(d,e,"webp",new A.bgG(d,e,f),f),$async$bgF)
case 3:v=h
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$bgF,w)},
Hg(d,e,f,g,h){return A.cTQ(d,e,f,g,h)},
cTQ(d,e,f,g,h){var x=0,w=B.k(y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j
var $async$Hg=B.f(function(i,a0){if(i===1){t.push(a0)
x=u}while(true)switch(x){case 0:if(!$.ctW){v=g.$0()
x=1
break}m=$.hv().b
m===$&&B.b()
r=m
q="uploads/"+Date.now()+"."+f
u=4
m=r.as
m===$&&B.b()
x=7
return B.c(m.bA("images-temp").QM(q,d),$async$Hg)
case 7:p=a0
if(J.bl(p)===0){m=g.$0()
v=m
x=1
break}u=9
m=r.as
m===$&&B.b()
x=12
return B.c(m.bA("images-temp").XS(0,q,new A.bID(e,C.aWi,h,C.aWh)),$async$Hg)
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
if(m instanceof B.S3){n=m
if(n.c==="403")$.ctW=!1
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
return B.c(m.bA("images-temp").K(0,B.a([q],y.T)),$async$Hg)
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
return B.j($async$Hg,w)},
cnP(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n=null,m=A.cGh(d)
if(m==null)throw B.l(B.cD("Failed to decode "+f+" image"))
x=A.d98(m,e)
if(f==="jpg"){w=g==null?85:g
v=new Uint8Array(64)
u=new Uint8Array(64)
t=new Float32Array(64)
s=new Float32Array(64)
r=B.bJ(65535,n,!1,y.cl)
q=y.s
p=B.bJ(65535,n,!1,q)
o=B.bJ(64,n,!1,q)
q=B.bJ(64,n,!1,q)
v=new A.bi7(v,u,t,s,r,p,o,q,new Int32Array(2048))
v.e=v.T0(C.Sr,C.qr)
v.f=v.T0(C.Ni,C.qr)
v.r=v.T0(C.Km,C.LG)
v.w=v.T0(C.M7,C.OB)
v.b9L()
v.b9X()
v.aKQ(w)
return new Uint8Array(B.bU(v.bxK(x,C.JU)))}else if(f==="png")return new Uint8Array(B.bU(new A.bt5(C.aUe,6).bxL(x,!1)))
else if(f==="webp")return d
else throw B.l(B.cD("Unsupported image format: "+f))},
cTP(d){var x=d.length
if(x>=2&&d[0]===255&&d[1]===216)return"jpg"
if(x>=8&&d[0]===137&&d[1]===80&&d[2]===78&&d[3]===71)return"png"
if(x>=12&&d[0]===82&&d[1]===73&&d[2]===70&&d[3]===70&&d[8]===87&&d[9]===69&&d[10]===66&&d[11]===80)return"webp"
return"jpg"},
Hf(d,e){var x=0,w=B.k(y.D),v,u
var $async$Hf=B.f(function(f,g){if(f===1)return B.h(g,w)
while(true)switch(x){case 0:u=A.cTP(d)
x=u==="jpg"?3:5
break
case 3:x=6
return B.c(A.a_C(d,e,85),$async$Hf)
case 6:v=g
x=1
break
x=4
break
case 5:x=u==="png"?7:9
break
case 7:x=10
return B.c(A.aqp(d,e),$async$Hf)
case 10:v=g
x=1
break
x=8
break
case 9:x=u==="webp"?11:13
break
case 11:x=14
return B.c(A.bgF(d,e,85),$async$Hf)
case 14:v=g
x=1
break
x=12
break
case 13:x=15
return B.c(A.a_C(d,e,85),$async$Hf)
case 15:v=g
x=1
break
case 12:case 8:case 4:case 1:return B.i(v,w)}})
return B.j($async$Hf,w)},
bgD:function bgD(d,e,f){this.a=d
this.b=e
this.c=f},
bgE:function bgE(d,e){this.a=d
this.b=e},
bgG:function bgG(d,e,f){this.a=d
this.b=e
this.c=f},
b_y:function b_y(d,e){this.a=d
this.b=e},
hA:function hA(d){this.a=-1
this.b=d},
MO:function MO(d){this.a=d},
MP:function MP(d){this.a=d},
MQ:function MQ(d){this.a=d},
MR:function MR(d){this.a=d},
MS:function MS(d){this.a=d},
MT:function MT(d){this.a=d},
MW:function MW(d,e){this.a=d
this.b=e},
MX:function MX(d){this.a=d},
MY:function MY(d,e){this.a=d
this.b=e},
MZ:function MZ(d){this.a=d},
N_:function N_(d,e){this.a=d
this.b=e},
cPp(d,e,f,g){var x=new A.MU(new Uint8Array(4))
x.aSP(d,e,f,g)
return x},
xJ:function xJ(d){this.a=d},
ajJ:function ajJ(d){this.a=d},
MU:function MU(d){this.a=d},
aUl(d,e,f){var x
if(e===f)return d
switch(e.a){case 0:if(d===0)x=0
else{x=C.XX.i(0,f)
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
case 1:return D.c.R(B.ba(d),1)
case 2:return d
case 3:return d*17
case 4:return d*4369
case 5:return d*286331153
case 6:return d*8
case 7:return d*2184
case 8:return d*143165576
case 9:case 10:case 11:return d/3}break
case 3:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.R(B.ba(d),6)
case 2:return D.c.R(B.ba(d),4)
case 3:return d
case 4:return d*257
case 5:return d*16843009
case 6:return D.c.R(B.ba(d),1)
case 7:return d*128
case 8:return d*8421504
case 9:case 10:case 11:return d/255}break
case 4:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.R(B.ba(d),14)
case 2:return D.c.R(B.ba(d),12)
case 3:return D.c.R(B.ba(d),8)
case 4:return d
case 5:return B.ba(d)<<8>>>0
case 6:return D.c.R(B.ba(d),9)
case 7:return D.c.R(B.ba(d),1)
case 8:return d*524296
case 9:case 10:case 11:return d/65535}break
case 5:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.R(B.ba(d),30)
case 2:return D.c.R(B.ba(d),28)
case 3:return D.c.R(B.ba(d),24)
case 4:return D.c.R(B.ba(d),16)
case 5:return d
case 6:return D.c.R(B.ba(d),25)
case 7:return D.c.R(B.ba(d),17)
case 8:return D.c.R(B.ba(d),1)
case 9:case 10:case 11:return d/4294967295}break
case 6:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.R(B.ba(d),5)
case 2:return d<=0?0:D.c.R(B.ba(d),3)
case 3:return d<=0?0:B.ba(d)<<1>>>0
case 4:return d<=0?0:B.ba(d)*516
case 5:return d<=0?0:B.ba(d)*33818640
case 6:return d
case 7:return d*258
case 8:return d*16909320
case 9:case 10:case 11:return d/127}break
case 7:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.R(B.ba(d),15)
case 2:return d<=0?0:D.c.R(B.ba(d),11)
case 3:return d<=0?0:D.c.R(B.ba(d),7)
case 4:return d<=0?0:B.ba(d)<<1>>>0
case 5:return d<=0?0:B.ba(d)*131076
case 6:return D.c.R(B.ba(d),8)
case 7:return d
case 8:return B.ba(d)*65538
case 9:case 10:case 11:return d/32767}break
case 8:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.R(B.ba(d),29)
case 2:return d<=0?0:D.c.R(B.ba(d),27)
case 3:return d<=0?0:D.c.R(B.ba(d),23)
case 4:return d<=0?0:D.c.R(B.ba(d),16)
case 5:return d<=0?0:B.ba(d)<<1>>>0
case 6:return D.c.R(B.ba(d),24)
case 7:return D.c.R(B.ba(d),16)
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
ny:function ny(d,e){this.a=d
this.b=e},
aiM:function aiM(d,e){this.a=d
this.b=e},
Zo(d){var x=new A.O8(B.H(y.N,y.P))
x.aT2(d)
return x},
cwy(d){var x=new A.O8(B.H(y.N,y.P))
x.qi(0,d)
return x},
O8:function O8(d){this.a=d},
aIM:function aIM(d,e){this.a=d
this.b=e},
aJ(d,e,f){return new A.anQ(d,e)},
anQ:function anQ(d,e){this.a=d
this.b=e},
tZ:function tZ(d){this.a=d},
bgw:function bgw(d){this.a=d},
cxr(d){var x=new A.pS(B.H(y.p,y.r),new A.tZ(B.H(y.N,y.P)))
x.bu1(d)
return x},
pS:function pS(d,e){this.a=d
this.b=e},
bgx:function bgx(d){this.a=d},
bgy:function bgy(d){this.a=d},
cTN(d){var x=new Uint16Array(1)
x[0]=d
return new A.yi(x)},
cxz(d,e){var x=new A.yi(new Uint16Array(e))
x.aT7(d,e)
return x},
cTM(d){var x=new Uint32Array(1)
x[0]=d
return new A.ra(x)},
cxu(d,e){var x=new A.ra(new Uint32Array(e))
x.aT4(d,e)
return x},
cxv(d,e){var x,w=J.kp(e,y.i)
for(x=0;x<e;++x)w[x]=new A.nS(d.an(),d.an())
return new A.u_(w)},
cxy(d,e){var x=new A.yh(new Int16Array(e))
x.aT6(d,e)
return x},
cxw(d,e){var x=new A.yg(new Int32Array(e))
x.aT5(d,e)
return x},
cxx(d,e){var x,w,v,u,t=J.kp(e,y.i)
for(x=0;x<e;++x){w=d.an()
v=$.hY()
v.$flags&2&&B.B(v)
v[0]=w
w=$.lD()
u=w[0]
v[0]=d.an()
t[x]=new A.nS(u,w[0])}return new A.u0(t)},
cxA(d){var x=new Float32Array(1)
x[0]=d
return new A.BI(x)},
cxB(d,e){var x=new A.BI(new Float32Array(e))
x.aT8(d,e)
return x},
cxs(d){var x=new Float64Array(1)
x[0]=d
return new A.BH(x)},
cxt(d,e){var x=new A.BH(new Float64Array(e))
x.aT3(d,e)
return x},
mK:function mK(d,e){this.a=d
this.b=e},
k_:function k_(){},
tY:function tY(d){this.a=d},
BG:function BG(d){this.a=d},
yi:function yi(d){this.a=d},
ra:function ra(d){this.a=d},
u_:function u_(d){this.a=d},
vX:function vX(d){this.a=d},
yh:function yh(d){this.a=d},
yg:function yg(d){this.a=d},
u0:function u0(d){this.a=d},
BI:function BI(d){this.a=d},
BH:function BH(d){this.a=d},
Hd:function Hd(d){this.a=d},
cum(d){var x,w,v=new A.aZj()
if(!A.cmm(d))B.a6(A.c6("Not a bitmap file."))
d.d+=2
x=d.an()
w=$.hY()
w.$flags&2&&B.B(w)
w[0]=x
x=$.lD()
d.d+=4
w[0]=d.an()
v.b=x[0]
return v},
cmm(d){if(d.c-d.d<2)return!1
return A.cb(d,null,0).bP()===19778},
cOH(d,e){var x,w,v,u,t=e==null?A.cum(d):e,s=d.d,r=d.an(),q=d.an(),p=$.hY()
p.$flags&2&&B.B(p)
p[0]=q
q=$.lD()
x=q[0]
p[0]=d.an()
q=q[0]
w=d.bP()
v=d.bP()
u=C.QL[d.an()]
d.an()
p[0]=d.an()
p[0]=d.an()
p=d.an()
d.an()
s=new A.FA(t,x,q,r,w,v,u,p,s)
s.ai7(d,e)
return s},
lK:function lK(d,e){this.a=d
this.b=e},
aZj:function aZj(){this.b=$},
FA:function FA(d,e,f,g,h,i,j,k,l){var _=this
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
aiQ:function aiQ(d){this.a=$
this.b=null
this.c=d},
aZi:function aZi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
b6y:function b6y(d){this.a=$
this.b=null
this.c=d},
b5h:function b5h(){},
b5i:function b5i(){},
b8U:function b8U(){},
anR:function anR(d,e,f){this.a=d
this.b=e
this.c=f},
aqO:function aqO(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
Oa:function Oa(d,e){this.a=d
this.b=e},
Gy:function Gy(d,e){this.a=d
this.b=e},
anS:function anS(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
cwz(d,e,f,g){var x,w
switch(d.a){case 1:return new A.bhF(f,e)
case 2:return new A.aqQ(f,g==null?1:g,e)
case 3:return new A.aqQ(f,g==null?16:g,e)
case 4:x=g==null?32:g
w=new A.bhD(f,x,e)
w.aTe(e,f,x)
return w
case 5:return new A.bhE(f,g==null?16:g,e)
case 6:return new A.aqO(f,g==null?32:g,!1,e)
case 7:return new A.aqO(f,g==null?32:g,!0,e)
default:throw B.l(A.c6("Invalid compression type: "+d.j(0)))}},
tO:function tO(d,e){this.a=d
this.b=e},
ba0:function ba0(){},
bhC:function bhC(){},
cS5(d,e,f,g){var x,w,v,u,t,s,r,q
if(e===0){if(g!==0)throw B.l(A.c6("Incomplete huffman data"))
return}x=d.d
w=d.an()
v=d.an()
d.d+=4
u=d.an()
t=!0
if(w<65537)t=v>=65537
if(t)throw B.l(A.c6("Invalid huffman table size"))
d.d+=4
s=B.bJ(65537,0,!1,y.p)
r=J.j_(16384,y.W)
for(q=0;q<16384;++q)r[q]=new A.anT()
A.cS6(d,e-20,w,v,s)
if(u>8*(e-(d.d-x)))throw B.l(A.c6("Error in header for Huffman-encoded data (invalid number of bits)."))
A.cS2(s,w,v,r)
A.cS4(s,r,d,u,v,g,f)},
cS4(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p="Error in Huffman-encoded data (invalid code).",o=B.a([0,0],y.t),n=f.d+D.c.b7(g+7,8)
for(x=0;f.d<n;){A.cnm(o,f)
for(;w=o[1],w>=14;){v=e[D.c.o_(o[0],w-14)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cnn(v.b,h,o,f,j,x,i)}else{if(v.c==null)throw B.l(A.c6(p))
for(t=0;t<v.b;++t){s=d[v.c[t]]&63
while(!0){w=o[1]
if(!(w<s&&f.d<n))break
A.cnm(o,f)}if(w>=s){u=v.c
w-=s
if(d[u[t]]>>>6===(D.c.o_(o[0],w)&D.c.er(1,s)-1)>>>0){o[1]=w
r=A.cnn(u[t],h,o,f,j,x,i)
x=r
break}}}if(t===v.b)throw B.l(A.c6(p))}}}q=8-g&7
o[0]=D.c.R(o[0],q)
o[1]=o[1]-q
for(;w=o[1],w>0;){v=e[D.c.eS(o[0],14-w)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cnn(v.b,h,o,f,j,x,i)}else throw B.l(A.c6(p))}if(x!==i)throw B.l(A.c6("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
cnn(d,e,f,g,h,i,j){var x,w,v,u,t,s="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)A.cnm(f,g)
x=f[1]-8
f[1]=x
w=D.c.o_(f[0],x)&255
if(i+w>j)throw B.l(A.c6(s))
v=h[i-1]
for(x=h.$flags|0;u=w-1,w>0;w=u,i=t){t=i+1
x&2&&B.B(h)
h[i]=v}}else{if(i<j){h.toString
t=i+1
h.$flags&2&&B.B(h)
h[i]=d}else throw B.l(A.c6(s))
i=t}return i},
cS2(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n="Error in Huffman-encoded data (invalid code table entry)."
for(x=y.t,w=y.p;e<=f;++e){v=d[e]
u=v>>>6
t=v&63
if(D.c.hB(u,t)!==0)throw B.l(A.c6(n))
if(t>14){s=g[D.c.h_(u,t-14)]
if(s.a!==0)throw B.l(A.c6(n))
v=++s.b
r=s.c
if(r!=null){v=B.bJ(v,0,!1,w)
s.c=v
for(q=s.b-1,p=0;p<q;++p)v[p]=r[p]}else s.c=B.a([0],x)
s.c[s.b-1]=e}else if(t!==0){v=14-t
o=D.c.eS(u,v)
for(p=D.c.eS(1,v);p>0;--p,++o){s=g[o]
if(s.a!==0||s.c!=null)throw B.l(A.c6(n))
s.a=t
s.b=e}}}},
cS6(d,e,f,g,h){var x,w,v,u,t,s="Error in Huffman-encoded data (unexpected end of code table data).",r="Error in Huffman-encoded data (code table is longer than expected).",q=d.d,p=B.a([0,0],y.t)
for(x=g+1;f<=g;++f){if(d.d-q>e)throw B.l(A.c6(s))
w=A.cwA(6,p,d)
h[f]=w
if(w===63){if(d.d-q>e)throw B.l(A.c6(s))
v=A.cwA(8,p,d)+6
if(f+v>x)throw B.l(A.c6(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}else if(w>=59){v=w-59+2
if(f+v>x)throw B.l(A.c6(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}}A.cS3(h)},
cS3(d){var x,w,v,u,t,s=B.bJ(59,0,!1,y.p)
for(x=0;x<65537;++x){w=d[x]
s[w]=s[w]+1}for(v=0,x=58;x>0;--x,v=u){u=v+s[x]>>>1
s[x]=v}for(x=0;x<65537;++x){t=d[x]
if(t>0){w=s[t]
s[t]=w+1
d[x]=(t|w<<6)>>>0}}},
cnm(d,e){d[0]=((d[0]<<8|e.dg())&-1)>>>0
d[1]=(d[1]+8&-1)>>>0},
cwA(d,e,f){var x
for(;x=e[1],x<d;){e[0]=((e[0]<<8|J.v(f.a,f.d++))&-1)>>>0
e[1]=(e[1]+8&-1)>>>0}x-=d
e[1]=x
return(D.c.o_(e[0],x)&D.c.er(1,d)-1)>>>0},
anT:function anT(){this.b=this.a=0
this.c=null},
cS7(d){var x=A.cT(d,!1,null,0)
if(x.an()!==20000630)return!1
if(x.dg()!==2)return!1
if((x.rH()&4294967289)>>>0!==0)return!1
return!0},
ba2:function ba2(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
cxS(d,e,f){var x=new A.aqP(d,B.a([],y.Q),B.H(y.N,y.n),C.Is,e)
x.aSV(d,e,f)
return x},
Zv:function Zv(){},
ba3:function ba3(d,e){this.a=d
this.b=e},
aqP:function aqP(d,e,f,g,h){var _=this
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
bhD:function bhD(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
aLO:function aLO(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
bhE:function bhE(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
bhF:function bhF(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
aqQ:function aqQ(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
ba1:function ba1(){this.a=null},
cx4(d){var x=new Uint8Array(d*3)
return new A.a_6(A.cTf(d),d,null,new A.uh(x,d,3))},
cTe(d){return new A.a_6(d.a,d.b,d.c,A.czo(d.d))},
cTf(d){var x
for(x=1;x<=8;++x)if(D.c.er(1,x)>=d)return x
return 0},
a_6:function a_6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_7:function a_7(){},
aqR:function aqR(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=$},
apq:function apq(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
bdU:function bdU(){var _=this
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
cxo(d){var x,w,v,u,t,s
if(d.bP()!==0)return null
x=d.bP()
if(x>=3)return null
w=C.aoV[x]
if(w===C.IU)return null
v=d.bP()
u=J.kp(v,y.Y)
for(t=0;t<v;++t){J.v(d.a,d.d++)
s=J.v(d.a,d.d++)
J.v(d.a,d.d++);++d.d
d.bP()
d.bP()
u[t]=new A.aqd(s,d.an(),d.an())}return new A.bgk(w,v,u)},
OE:function OE(d,e){this.a=d
this.b=e},
bgk:function bgk(d,e,f){this.c=d
this.d=e
this.e=f},
aqd:function aqd(d,e,f){this.b=d
this.d=e
this.e=f},
bgi:function bgi(d,e,f,g,h,i,j,k,l){var _=this
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
bgj:function bgj(){this.b=this.a=null},
ajO:function ajO(d,e,f){this.e=d
this.f=e
this.r=f},
H4:function H4(){},
H5:function H5(d){this.a=d},
a_x:function a_x(d){this.a=d},
bi3:function bi3(){this.d=null},
C4:function C4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.y=_.x=_.w=_.r=_.f=_.e=$},
cy6(){var x=B.bJ(4,null,!1,y.a7),w=B.a([],y.cB),v=y.l,u=J.C1(0,v)
v=J.C1(0,v)
return new A.bi5(new A.O8(B.H(y.N,y.P)),x,w,u,v,B.a([],y.E))},
bi5:function bi5(d,e,f,g,h,i){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i},
bi6:function bi6(d,e){this.a=d
this.b=e},
TV:function TV(d){this.a=d
this.b=0},
ar3:function ar3(d,e){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=d
_.z=e},
bi9:function bi9(){this.r=this.f=$},
ar4:function ar4(d,e,f,g,h,i,j,k){var _=this
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
ar2:function ar2(){},
bi4:function bi4(d,e){this.a=d
this.b=e},
bi7:function bi7(d,e,f,g,h,i,j,k,l){var _=this
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
Qv:function Qv(d,e){this.a=d
this.b=e},
a3g:function a3g(d,e){this.a=d
this.b=e},
a3h:function a3h(){},
aqS:function aqS(d,e,f,g,h,i,j,k,l){var _=this
_.y=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
cxT(){var x=y.N
return new A.bhG(B.H(x,x),B.a([],y.d),B.a([],y.t))},
D4:function D4(d,e){this.a=d
this.b=e},
bt7:function bt7(){},
bhG:function bhG(d,e,f){var _=this
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
awG:function awG(d){var _=this
_.a=d
_.c=_.b=0
_.d=$
_.e=0},
awH:function awH(d,e){this.a=d
this.b=e},
bt5:function bt5(d,e){var _=this
_.a=null
_.b=d
_.c=0
_.d=e
_.e=$
_.f=0
_.r=!1
_.w=null},
D5:function D5(d,e){this.a=d
this.b=e},
IO:function IO(d){this.b=this.a=0
this.e=d},
bt8:function bt8(d){this.b=this.a=null
this.c=d},
bt9:function bt9(){},
a3A:function a3A(d){this.a=d
this.c=$},
cA4(d){var x=new A.bu5(B.H(y.p,y.a2))
x.aTp(d)
return x},
cXp(b6,b7,b8,b9,c0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=B.H(y.p,y.aG)
for(x=c0.length,w=0;v=c0.length,w<v;c0.length===x||(0,B.R)(c0),++w){u=c0[w]
b5.m(0,u.a,u)}if(b7===8)t=1
else t=b7===16?2:-1
s=A.hK(b4,b4,C.a7,0,C.bm,b9,b4,0,v,b4,C.a7,b8,!1)
if(t===-1)throw B.l(A.c6("PSD: unsupported bit depth: "+B.o(b7)))
r=b5.i(0,0)
q=b5.i(0,1)
p=b5.i(0,2)
o=b5.i(0,-1)
n=-t
for(x=s.a,x=x.ga1(x),m=v>=5,l=t===1,k=v===4,j=v>=2,v=v>=4;x.q();){i=x.gL(x)
n+=t
switch(b6){case C.a2d:h=r.c
h===$&&B.b()
i.saz(0,l?h[n]:(h[n]<<8|h[n+1])>>>8)
h=q.c
h===$&&B.b()
i.saL(l?h[n]:(h[n]<<8|h[n+1])>>>8)
h=p.c
h===$&&B.b()
i.saN(0,l?h[n]:(h[n]<<8|h[n+1])>>>8)
if(v){h=o.c
h===$&&B.b()
h=l?h[n]:(h[n]<<8|h[n+1])>>>8}else h=255
i.saO(0,h)
if(i.gaO(i)!==0){i.saz(0,(i.gaz(i)+i.gaO(i)-255)*255/i.gaO(i))
i.saL((i.gaL()+i.gaO(i)-255)*255/i.gaO(i))
i.saN(0,(i.gaN(i)+i.gaO(i)-255)*255/i.gaO(i))}break
case C.a2f:h=r.c
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
i.saz(0,a9[0])
i.saL(a9[1])
i.saN(0,a9[2])
i.saO(0,d)
break
case C.a2c:h=r.c
h===$&&B.b()
b0=l?h[n]:(h[n]<<8|h[n+1])>>>8
if(j){h=o.c
h===$&&B.b()
d=l?h[n]:(h[n]<<8|h[n+1])>>>8}else d=255
i.saz(0,b0)
i.saL(b0)
i.saN(0,b0)
i.saO(0,d)
break
case C.a2e:h=r.c
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
a9=A.cFY(255-b1,255-b2,255-a0,255-b3)
i.saz(0,a9[0])
i.saL(a9[1])
i.saN(0,a9[2])
i.saO(0,d)
break
default:throw B.l(A.c6("Unhandled color mode: "+B.o(b6)))}}return s},
uo:function uo(d,e){this.a=d
this.b=e},
bu5:function bu5(d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=$
_.y=null
_.z=d
_.at=_.as=$},
bu4:function bu4(){this.a=null},
axb:function axb(){},
yZ:function yZ(d,e,f){this.a=d
this.b=e
this.c=f},
m3:function m3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3D:function a3D(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
QN:function QN(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
axa:function axa(){this.y=this.b=this.a=0},
z_(d,e){return(C.tQ[d>>>8]<<17|C.tQ[e>>>8]<<16|C.tQ[d&255]<<1|C.tQ[e&255])>>>0},
rB:function rB(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
bu6:function bu6(){this.b=this.a=null},
aBv:function aBv(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
o8:function o8(d,e){this.a=d
this.b=e},
bFX:function bFX(){this.a=null
this.b=$},
bGJ:function bGJ(d){this.a=d
this.c=this.b=0},
aBA:function aBA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
cpJ(d,e,f){var x=new A.bGL(e,f,d),w=y.s
x.e=B.bJ(e,null,!1,w)
x.f=B.bJ(e,null,!1,w)
return x},
bGL:function bGL(d,e,f){var _=this
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
aBB:function aBB(d,e,f,g){var _=this
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
Kg:function Kg(d,e){this.a=d
this.b=e},
kz:function kz(d,e){this.a=d
this.b=e},
rT:function rT(d,e){this.a=d
this.b=e},
bGM:function bGM(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
cyr(){return new A.bjC(new Uint8Array(4096))},
bjC:function bjC(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
bGK:function bGK(){this.a=null
this.c=$},
cpZ(d,e){var x=new Int32Array(4),w=new Int32Array(4),v=new Int8Array(4),u=new Int8Array(4),t=B.bJ(8,null,!1,y.ak),s=B.bJ(4,null,!1,y.Z)
return new A.bK3(d,e,new A.bK9(),new A.bKd(),new A.bK5(x,w),new A.bKf(v,u),t,s,new Uint8Array(4))},
cCD(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
bK3:function bK3(d,e,f,g,h,i,j,k,l){var _=this
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
_.br=$
_.bY=null
_.aY=_.aw=$
_.bt=null
_.co=$},
bKg:function bKg(){},
cCA(d){var x=new A.a7u(d)
x.b=254
x.c=0
x.d=-8
return x},
a7u:function a7u(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
eL(d,e,f){return D.c.l7(D.c.R(d+2*e+f+2,2),32)},
d0A(d){var x,w=B.a([A.eL(J.v(d.a,d.d+-33),J.v(d.a,d.d+-32),J.v(d.a,d.d+-31)),A.eL(J.v(d.a,d.d+-32),J.v(d.a,d.d+-31),J.v(d.a,d.d+-30)),A.eL(J.v(d.a,d.d+-31),J.v(d.a,d.d+-30),J.v(d.a,d.d+-29)),A.eL(J.v(d.a,d.d+-30),J.v(d.a,d.d+-29),J.v(d.a,d.d+-28))],y.t)
for(x=0;x<4;++x)d.A5(x*32,4,w)},
d0s(d){var x=J.v(d.a,d.d+-33),w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95),s=A.cb(d,null,0),r=s.Qw(),q=A.eL(x,w,v)
r.$flags&2&&B.B(r)
r[0]=16843009*q
s.d+=32
q=s.Qw()
r=A.eL(w,v,u)
q.$flags&2&&B.B(q)
q[0]=16843009*r
s.d+=32
r=s.Qw()
q=A.eL(v,u,t)
r.$flags&2&&B.B(r)
r[0]=16843009*q
s.d+=32
q=s.Qw()
r=A.eL(u,t,t)
q.$flags&2&&B.B(q)
q[0]=16843009*r},
d0q(d){var x,w,v,u
for(x=4,w=0;w<4;++w)x+=J.v(d.a,d.d+(w-32))+J.v(d.a,d.d+(-1+w*32))
x=D.c.R(x,3)
for(w=0;w<4;++w){v=d.a
u=d.d+w*32
J.tl(v,u,u+4,x)}},
cq_(d,e){var x,w,v,u,t,s=255-J.v(d.a,d.d+-33)
for(x=0,w=0;w<e;++w){v=s+J.v(d.a,d.d+(x-1))
for(u=0;u<e;++u){t=$.pz()[v+J.v(d.a,d.d+(-32+u))]
J.bV(d.a,d.d+(x+u),t)}x+=32}},
d0y(d){A.cq_(d,4)},
d0z(d){A.cq_(d,8)},
d0x(d){A.cq_(d,16)},
d0w(d){var x,w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95),s=J.v(d.a,d.d+-33),r=J.v(d.a,d.d+-32),q=J.v(d.a,d.d+-31),p=J.v(d.a,d.d+-30),o=J.v(d.a,d.d+-29)
d.m(0,96,A.eL(v,u,t))
x=A.eL(w,v,u)
d.m(0,97,x)
d.m(0,64,x)
x=A.eL(s,w,v)
d.m(0,98,x)
d.m(0,65,x)
d.m(0,32,x)
x=A.eL(r,s,w)
d.m(0,99,x)
d.m(0,66,x)
d.m(0,33,x)
d.m(0,0,x)
x=A.eL(q,r,s)
d.m(0,67,x)
d.m(0,34,x)
d.m(0,1,x)
x=A.eL(p,q,r)
d.m(0,35,x)
d.m(0,2,x)
d.m(0,3,A.eL(o,p,q))},
d0v(d){var x,w=J.v(d.a,d.d+-32),v=J.v(d.a,d.d+-31),u=J.v(d.a,d.d+-30),t=J.v(d.a,d.d+-29),s=J.v(d.a,d.d+-28),r=J.v(d.a,d.d+-27),q=J.v(d.a,d.d+-26),p=J.v(d.a,d.d+-25)
d.m(0,0,A.eL(w,v,u))
x=A.eL(v,u,t)
d.m(0,32,x)
d.m(0,1,x)
x=A.eL(u,t,s)
d.m(0,64,x)
d.m(0,33,x)
d.m(0,2,x)
x=A.eL(t,s,r)
d.m(0,96,x)
d.m(0,65,x)
d.m(0,34,x)
d.m(0,3,x)
x=A.eL(s,r,q)
d.m(0,97,x)
d.m(0,66,x)
d.m(0,35,x)
x=A.eL(r,q,p)
d.m(0,98,x)
d.m(0,67,x)
d.m(0,99,A.eL(q,p,p))},
d0C(d){var x=J.v(d.a,d.d+-1),w=J.v(d.a,d.d+31),v=J.v(d.a,d.d+63),u=J.v(d.a,d.d+-33),t=J.v(d.a,d.d+-32),s=J.v(d.a,d.d+-31),r=J.v(d.a,d.d+-30),q=J.v(d.a,d.d+-29),p=D.c.l7(D.c.R(u+t+1,1),32)
d.m(0,65,p)
d.m(0,0,p)
p=D.c.l7(D.c.R(t+s+1,1),32)
d.m(0,66,p)
d.m(0,1,p)
p=D.c.l7(D.c.R(s+r+1,1),32)
d.m(0,67,p)
d.m(0,2,p)
d.m(0,3,D.c.l7(D.c.R(r+q+1,1),32))
d.m(0,96,A.eL(v,w,x))
d.m(0,64,A.eL(w,x,u))
p=A.eL(x,u,t)
d.m(0,97,p)
d.m(0,32,p)
p=A.eL(u,t,s)
d.m(0,98,p)
d.m(0,33,p)
p=A.eL(t,s,r)
d.m(0,99,p)
d.m(0,34,p)
d.m(0,35,A.eL(s,r,q))},
d0B(d){var x,w=J.v(d.a,d.d+-32),v=J.v(d.a,d.d+-31),u=J.v(d.a,d.d+-30),t=J.v(d.a,d.d+-29),s=J.v(d.a,d.d+-28),r=J.v(d.a,d.d+-27),q=J.v(d.a,d.d+-26),p=J.v(d.a,d.d+-25)
d.m(0,0,D.c.l7(D.c.R(w+v+1,1),32))
x=D.c.l7(D.c.R(v+u+1,1),32)
d.m(0,64,x)
d.m(0,1,x)
x=D.c.l7(D.c.R(u+t+1,1),32)
d.m(0,65,x)
d.m(0,2,x)
x=D.c.l7(D.c.R(t+s+1,1),32)
d.m(0,66,x)
d.m(0,3,x)
d.m(0,32,A.eL(w,v,u))
x=A.eL(v,u,t)
d.m(0,96,x)
d.m(0,33,x)
x=A.eL(u,t,s)
d.m(0,97,x)
d.m(0,34,x)
x=A.eL(t,s,r)
d.m(0,98,x)
d.m(0,35,x)
d.m(0,67,A.eL(s,r,q))
d.m(0,99,A.eL(r,q,p))},
d0t(d){var x,w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95)
d.m(0,0,D.c.l7(D.c.R(w+v+1,1),32))
x=D.c.l7(D.c.R(v+u+1,1),32)
d.m(0,32,x)
d.m(0,2,x)
x=D.c.l7(D.c.R(u+t+1,1),32)
d.m(0,64,x)
d.m(0,34,x)
d.m(0,1,A.eL(w,v,u))
x=A.eL(v,u,t)
d.m(0,33,x)
d.m(0,3,x)
x=A.eL(u,t,t)
d.m(0,65,x)
d.m(0,35,x)
d.m(0,99,t)
d.m(0,98,t)
d.m(0,97,t)
d.m(0,96,t)
d.m(0,66,t)
d.m(0,67,t)},
d0r(d){var x=J.v(d.a,d.d+-1),w=J.v(d.a,d.d+31),v=J.v(d.a,d.d+63),u=J.v(d.a,d.d+95),t=J.v(d.a,d.d+-33),s=J.v(d.a,d.d+-32),r=J.v(d.a,d.d+-31),q=J.v(d.a,d.d+-30),p=D.c.l7(D.c.R(x+t+1,1),32)
d.m(0,34,p)
d.m(0,0,p)
p=D.c.l7(D.c.R(w+x+1,1),32)
d.m(0,66,p)
d.m(0,32,p)
p=D.c.l7(D.c.R(v+w+1,1),32)
d.m(0,98,p)
d.m(0,64,p)
d.m(0,96,D.c.l7(D.c.R(u+v+1,1),32))
d.m(0,3,A.eL(s,r,q))
d.m(0,2,A.eL(t,s,r))
p=A.eL(x,t,s)
d.m(0,35,p)
d.m(0,1,p)
p=A.eL(w,x,t)
d.m(0,67,p)
d.m(0,33,p)
p=A.eL(v,w,x)
d.m(0,99,p)
d.m(0,65,p)
d.m(0,97,A.eL(u,v,w))},
d0N(d){var x
for(x=0;x<16;++x)d.rC(x*32,16,d,-32)},
d0L(d){var x,w,v,u,t
for(x=0,w=16;w>0;--w){v=J.v(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.tl(u,t,t+16,v)
x+=32}},
bK7(d,e){var x,w,v
for(x=0;x<16;++x){w=e.a
v=e.d+x*32
J.tl(w,v,v+16,d)}},
d0D(d){var x,w
for(x=16,w=0;w<16;++w)x+=J.v(d.a,d.d+(-1+w*32))+J.v(d.a,d.d+(w-32))
A.bK7(D.c.R(x,5),d)},
d0F(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.v(d.a,d.d+(-1+w*32))
A.bK7(D.c.R(x,4),d)},
d0E(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.v(d.a,d.d+(w-32))
A.bK7(D.c.R(x,4),d)},
d0G(d){A.bK7(128,d)},
d0O(d){var x
for(x=0;x<8;++x)d.rC(x*32,8,d,-32)},
d0M(d){var x,w,v,u,t
for(x=0,w=0;w<8;++w){v=J.v(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.tl(u,t,t+8,v)
x+=32}},
bK8(d,e){var x,w,v
for(x=0;x<8;++x){w=e.a
v=e.d+x*32
J.tl(w,v,v+8,d)}},
d0H(d){var x,w
for(x=8,w=0;w<8;++w)x+=J.v(d.a,d.d+(w-32))+J.v(d.a,d.d+(-1+w*32))
A.bK8(D.c.R(x,4),d)},
d0I(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.v(d.a,d.d+(w-32))
A.bK8(D.c.R(x,3),d)},
d0J(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.v(d.a,d.d+(-1+w*32))
A.bK8(D.c.R(x,3),d)},
d0K(d){A.bK8(128,d)},
Ek(d,e,f,g,h){var x=e+f+g*32,w=J.v(d.a,d.d+x)+D.c.R(h,3)
if(!((w&-256)>>>0===0))w=w<0?0:255
d.m(0,x,w)},
bK6(d,e,f,g,h){A.Ek(d,0,0,e,f+g)
A.Ek(d,0,1,e,f+h)
A.Ek(d,0,2,e,f-h)
A.Ek(d,0,3,e,f-g)},
d0u(){var x,w,v,u
if(!$.cCB){for(x=-255;x<=255;++x){w=$.aUZ()
v=255+x
u=x<0?-x:x
w.$flags&2&&B.B(w)
w[v]=u
u=$.clA()
w=D.c.R(w[v],1)
u.$flags&2&&B.B(u)
u[v]=w}for(x=-1020;x<=1020;++x){w=$.clB()
if(x<-128)v=-128
else v=x>127?127:x
w.$flags&2&&B.B(w)
w[1020+x]=v}for(x=-112;x<=112;++x){w=$.aV_()
if(x<-16)v=-16
else v=x>15?15:x
w.$flags&2&&B.B(w)
w[112+x]=v}for(x=-255;x<=510;++x){w=$.pz()
if(x<0)v=0
else v=x>255?255:x
w.$flags&2&&B.B(w)
w[255+x]=v}$.cCB=!0}},
bK4:function bK4(){},
d0p(){var x,w=J.j_(3,y.D)
for(x=0;x<3;++x)w[x]=new Uint8Array(11)
return new A.a7t(w)},
d12(){var x,w,v,u,t=new Uint8Array(3),s=J.j_(4,y.cm)
for(x=y.V,w=0;w<4;++w){v=J.j_(8,x)
for(u=0;u<8;++u)v[u]=A.d0p()
s[w]=v}D.A.l_(t,0,3,255)
return new A.bKe(t,s)},
bK9:function bK9(){this.d=$},
bKd:function bKd(){this.b=null},
bKf:function bKf(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
a7t:function a7t(d){this.a=d},
bKe:function bKe(d,e){this.a=d
this.b=e},
bK5:function bK5(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
Ks:function Ks(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
aCs:function aCs(){this.b=this.a=0},
aCu:function aCu(d,e,f){this.a=d
this.b=e
this.c=f},
aCt:function aCt(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
aCv:function aCv(d,e,f){this.a=d
this.b=e
this.c=f},
cq0(d,e){var x,w=B.a([],y.A),v=B.a([],y.F),u=new Uint32Array(2),t=new A.aCq(d,u)
u=t.d=J.d5(D.bq.gag(u),0,null)
x=d.dg()
u.$flags&2&&B.B(u)
u[0]=x
x=d.dg()
u.$flags&2&&B.B(u)
u[1]=x
x=d.dg()
u.$flags&2&&B.B(u)
u[2]=x
x=d.dg()
u.$flags&2&&B.B(u)
u[3]=x
x=d.dg()
u.$flags&2&&B.B(u)
u[4]=x
x=d.dg()
u.$flags&2&&B.B(u)
u[5]=x
x=d.dg()
u.$flags&2&&B.B(u)
u[6]=x
x=d.dg()
u.$flags&2&&B.B(u)
u[7]=x
return new A.a7v(t,e,w,v)},
El(d,e){return D.c.R(d+D.c.er(1,e)-1,e)},
a7v:function a7v(d,e,f,g){var _=this
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
aqT:function aqT(d,e,f,g){var _=this
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
aCq:function aCq(d,e){var _=this
_.a=0
_.b=d
_.c=e
_.d=$},
bKa:function bKa(d,e){this.a=d
this.b=e},
bKb(d,e,f){var x=d[e]
d.$flags&2&&B.B(d)
d[e]=(((x&4278255360)>>>0)+((f&4278255360)>>>0)&4278255360|(x&16711935)+(f&16711935)&16711935)>>>0},
zA(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
Ku(d){if(d<0)return 0
if(d>255)return 255
return d},
bKc(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
d0P(d,e,f){return 4278190080},
d0Q(d,e,f){return e},
d0V(d,e,f){return d[f]},
d0W(d,e,f){return d[f+1]},
d0X(d,e,f){return d[f-1]},
d0Y(d,e,f){var x=d[f]
return A.zA(A.zA(e,d[f+1]),x)},
d0Z(d,e,f){return A.zA(e,d[f-1])},
d1_(d,e,f){return A.zA(e,d[f])},
d10(d,e,f){return A.zA(d[f-1],d[f])},
d11(d,e,f){return A.zA(d[f],d[f+1])},
d0R(d,e,f){var x=d[f-1],w=d[f],v=d[f+1]
return A.zA(A.zA(e,x),A.zA(w,v))},
d0S(d,e,f){var x=d[f],w=d[f-1]
return A.bKc(x>>>24,e>>>24,w>>>24)+A.bKc(x>>>16&255,e>>>16&255,w>>>16&255)+A.bKc(x>>>8&255,e>>>8&255,w>>>8&255)+A.bKc(x&255,e&255,w&255)<=0?x:e},
d0T(d,e,f){var x=d[f],w=d[f-1]
return(A.Ku((e>>>24)+(x>>>24)-(w>>>24))<<24|A.Ku((e>>>16&255)+(x>>>16&255)-(w>>>16&255))<<16|A.Ku((e>>>8&255)+(x>>>8&255)-(w>>>8&255))<<8|A.Ku((e&255)+(x&255)-(w&255)))>>>0},
d0U(d,e,f){var x,w,v,u=d[f],t=d[f-1],s=A.zA(e,u)
u=s>>>24
x=s>>>16&255
w=s>>>8&255
v=s>>>0&255
return(A.Ku(u+D.c.b7(u-(t>>>24),2))<<24|A.Ku(x+D.c.b7(x-(t>>>16&255),2))<<16|A.Ku(w+D.c.b7(w-(t>>>8&255),2))<<8|A.Ku(v+D.c.b7(v-(t&255),2)))>>>0},
Kt:function Kt(d,e){this.a=d
this.b=e},
aCr:function aCr(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
bL0:function bL0(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
a7K:function a7K(){},
aqU:function aqU(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=$
_.r=1
_.x=_.w=$},
cxk(){var x=new Uint8Array(128),w=new Int16Array(128)
x=new A.aqb(x,w,new Int16Array(128))
x.a7G(0)
return x},
cTj(){var x,w=J.j_(5,y.x)
for(x=0;x<5;++x)w[x]=A.cxk()
return new A.a_d(w)},
aqb:function aqb(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$
_.f=_.e=0},
a_d:function a_d(d){this.a=d},
SX:function SX(d,e){this.a=d
this.b=e},
aCT:function aCT(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
aqV:function aqV(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
bL1:function bL1(){this.b=this.a=null},
cxn(d){return new A.a_z(d.a,d.b,D.A.la(d.c,0))},
bgh:function bgh(d,e){this.a=d
this.b=e},
a_z:function a_z(d,e,f){this.a=d
this.b=e
this.c=f},
hK(d,e,f,g,h,i,j,k,l,m,n,o,p){var x,w=new A.BL(null,null,null,d,k,h,g,0)
w.gl1().push(w)
w.c=j
if(e!=null)w.e=A.Zo(e)
x=!1
if(m==null)if(p)x=w.gdv()===C.fi||w.gdv()===C.h4||w.gdv()===C.h5||w.gdv()===C.a7||w.gdv()===C.cc
w.akt(o,i,f,l,x?w.aYo(f,n,l):m)
return w},
aqn(d,e,f,g){var x,w,v,u=null,t=d.e
t=t==null?u:A.Zo(t)
x=d.c
x=x==null?u:A.cxn(x)
w=d.w
v=d.r
t=new A.BL(u,x,t,u,v,w,d.y,d.z)
t.aTa(d,e,f,g)
return t},
BK(d,e,f){var x,w,v,u,t=null,s=d.a
s=s==null?t:s.qZ(0,f)
x=d.e
x=x==null?t:A.Zo(x)
w=d.c
w=w==null?t:A.cxn(w)
v=d.w
u=d.r
s=new A.BL(s,w,x,t,u,v,d.y,d.z)
s.aT9(d,e,f)
return s},
apf:function apf(d,e){this.a=d
this.b=e},
BL:function BL(d,e,f,g,h,i,j,k){var _=this
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
bgV:function bgV(d,e){this.a=d
this.b=e},
bgU:function bgU(){},
lS:function lS(){},
cTR(d,e,f){return new A.ON(new Uint16Array(d*e*f),d,e,f)},
ON:function ON(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
cTS(d,e,f){return new A.OO(new Float32Array(d*e*f),d,e,f)},
OO:function OO(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a_D:function a_D(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a_E:function a_E(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a_F:function a_F(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a_G:function a_G(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
OP:function OP(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
OQ:function OQ(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
OR:function OR(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
cTT(d,e,f){return new A.OS(new Uint32Array(d*e*f),d,e,f)},
OS:function OS(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
OT:function OT(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
cxC(d,e,f){return new A.OU(new Uint8Array(d*e*f),null,d,e,f)},
OU:function OU(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
aqW:function aqW(d,e){this.a=d
this.b=e},
bqK:function bqK(){},
avo:function avo(d,e,f){this.c=d
this.a=e
this.b=f},
avp:function avp(d,e,f){this.c=d
this.a=e
this.b=f},
avq:function avq(d,e,f){this.c=d
this.a=e
this.b=f},
avr:function avr(d,e,f){this.c=d
this.a=e
this.b=f},
avs:function avs(d,e,f){this.c=d
this.a=e
this.b=f},
avt:function avt(d,e,f){this.c=d
this.a=e
this.b=f},
avu:function avu(d,e,f){this.c=d
this.a=e
this.b=f},
a2g:function a2g(d,e,f){this.c=d
this.a=e
this.b=f},
czo(d){return new A.uh(new Uint8Array(B.bU(d.c)),d.a,d.b)},
uh:function uh(d,e,f){this.c=d
this.a=e
this.b=f},
cov(d){return new A.Ig(-1,0,-d.c,d)},
Ig:function Ig(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cow(d){return new A.Ih(-1,0,-d.c,d)},
Ih:function Ih(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cox(d){return new A.Ii(-1,0,-d.c,d)},
Ii:function Ii(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
coy(d){return new A.Ij(-1,0,-d.c,d)},
Ij:function Ij(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
coz(d){return new A.Ik(-1,0,-d.c,d)},
Ik:function Ik(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
coA(d){return new A.Il(-1,0,-d.c,d)},
Il:function Il(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ui(d,e,f,g,h){d.ho(0,e-1,f)
return new A.avH(d,e,e+g-1,f+h-1)},
avH:function avH(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g},
a2u(d){return new A.Im(-1,0,0,-1,0,d)},
Im:function Im(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
coB(d){return new A.In(-1,0,-d.c,d)},
In:function In(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2v(d){return new A.Io(-1,0,0,-2,0,d)},
Io:function Io(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
coC(d){return new A.Ip(-1,0,-d.c,d)},
Ip:function Ip(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2w(d){return new A.Iq(-1,0,0,-(d.c<<2>>>0),d)},
Iq:function Iq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
br_(d){return new A.Ir(-1,0,-d.c,d)},
Ir:function Ir(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fn:function fn(){},
db7(d,e){switch(e.a){case 0:A.aUu(d)
break
case 1:A.dbb(d)
break
case 2:A.db9(d)
break}return d},
dbb(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.gl1().length
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
if((t==null?i:t.geW())!=null)for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.el(m,n,i)
if(l==null)l=new A.fn()
t=u.a
k=t==null?i:t.el(m,o,i)
if(k==null)k=new A.fn()
j=l.gef(l)
l.sef(0,k.gef(k))
k.sef(0,j)}else for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.el(m,n,i)
if(l==null)l=new A.fn()
t=u.a
k=t==null?i:t.el(m,o,i)
if(k==null)k=new A.fn()
j=l.gaz(l)
l.saz(0,k.gaz(k))
k.saz(0,j)
j=l.gaL()
l.saL(k.gaL())
k.saL(j)
j=l.gaN(l)
l.saN(0,k.gaN(k))
k.saN(0,j)
j=l.gaO(l)
l.saO(0,k.gaO(k))
k.saO(0,j)}}return d},
aUu(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=d.gl1().length
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
if((t==null?h:t.geW())!=null)for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.el(l,n,h)
if(k==null)k=new A.fn()
t=u.a
j=t==null?h:t.el(m,n,h)
if(j==null)j=new A.fn()
i=k.gef(k)
k.sef(0,j.gef(j))
j.sef(0,i)}else for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.el(l,n,h)
if(k==null)k=new A.fn()
t=u.a
j=t==null?h:t.el(m,n,h)
if(j==null)j=new A.fn()
i=k.gaz(k)
k.saz(0,j.gaz(j))
j.saz(0,i)
i=k.gaL()
k.saL(j.gaL())
j.saL(i)
i=k.gaN(k)
k.saN(0,j.gaN(j))
j.saN(0,i)
i=k.gaO(k)
k.saO(0,j.gaO(j))
j.saO(0,i)}}return d},
db9(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=d.gl1().length
for(x=y.g,w=0;w<f;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?g:t.a
if(r==null)r=0
q=s?g:t.b
if(q==null)q=0
p=D.c.b7(q,2)
if((s?g:t.geW())!=null)for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.el(k,m,g)
if(j==null)j=new A.fn()
t=u.a
i=t==null?g:t.el(l,o,g)
if(i==null)i=new A.fn()
h=j.gef(j)
j.sef(0,i.gef(i))
i.sef(0,h)}else for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.el(k,m,g)
if(j==null)j=new A.fn()
t=u.a
i=t==null?g:t.el(l,o,g)
if(i==null)i=new A.fn()
h=j.gaz(j)
j.saz(0,i.gaz(i))
i.saz(0,h)
h=j.gaL()
j.saL(i.gaL())
i.saL(h)
h=j.gaN(j)
j.saN(0,i.gaN(i))
i.saN(0,h)
h=j.gaO(j)
j.saO(0,i.gaO(i))
i.saO(0,h)}}return d},
bbg:function bbg(d,e){this.a=d
this.b=e},
c6(d){return new A.aqt(d)},
aqt:function aqt(d){this.a=d},
cT(d,e,f,g){return new A.lU(d,g,f==null?J.bl(d):g+f,g,e)},
cb(d,e,f){var x=d.a,w=d.d+f,v=e==null?d.c:w+e
return new A.lU(x,d.b,v,w,d.e)},
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
q9(d,e){return new A.ava(d,new Uint8Array(e))},
ava:function ava(d,e){this.a=0
this.b=d
this.c=e},
bud:function bud(){},
nS:function nS(d,e){this.a=d
this.b=e},
bwS:function bwS(d,e){this.a=d
this.b=e},
bwP:function bwP(d,e){this.a=d
this.b=e},
bID:function bID(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
cyR(d){return new Int8Array(d)},
d08(d){throw B.l(B.aG("Uint64List not supported on the web."))},
cUb(d,e,f){return J.clT(d,e,f)},
cCl(d,e){return J.oq(d,e,null)},
cSv(d){return J.aVd(d,0,null)},
cSw(d){return d.a89(0,0,null)},
dbu(d){var x,w,v,u,t,s=d.length
for(x=1,w=0,v=0;s>0;){u=3800>s?s:3800
s-=u
for(;--u,u>=0;v=t){t=v+1
x+=d[v]&255
w+=x}x=D.c.ap(x,65521)
w=D.c.ap(w,65521)}return(w<<16|x)>>>0},
xf(d,e){var x,w,v=J.a2(d),u=v.gu(d)
e^=4294967295
for(x=0;u>=8;){w=x+1
e=C.h9[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.h9[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.h9[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.h9[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.h9[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.h9[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.h9[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.h9[(e^v.i(d,w))&255]^e>>>8
u-=8}if(u>0)do{w=x+1
e=C.h9[(e^v.i(d,x))&255]^e>>>8
if(--u,u>0){x=w
continue}else break}while(!0)
return(e^4294967295)>>>0},
Nx(d,e,f){var x=0,w=B.k(y.N),v,u,t,s,r
var $async$Nx=B.f(function(g,h){if(g===1)return B.h(h,w)
while(true)switch(x){case 0:t="images/"+Date.now()+".jpg"
s=$.LR()
r=s.as
r===$&&B.b()
x=3
return B.c(r.bA("public-files").QM(t,d),$async$Nx)
case 3:if(h.length===0)throw B.l(B.cD("Upload failed"))
u=r.bA("public-files").af9(t)
x=4
return B.c(s.bA("images").jN(0,B.y(["link",u,"occasion",e,"unit",f],y.N,y.X)),$async$Nx)
case 4:v=u
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$Nx,w)},
crs(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s,r,q
if(m==null)m=0
if(n==null)n=0
if(l==null)l=e.gcZ(0)
if(k==null)k=e.gb5(0)
if(h==null)h=d.gcZ(0)<e.gcZ(0)?d.gcZ(0):e.gcZ(0)
if(g==null)g=d.gb5(0)<e.gb5(0)?d.gb5(0):e.gb5(0)
x=f===C.y6
if(!x&&d.grn())d=d.ay2(d.gqb())
w=k/g
v=l/h
u=y.p
t=J.j_(g,u)
for(s=0;s<g;++s)t[s]=n+D.d.D(s*w)
r=J.j_(h,u)
for(q=0;q<h;++q)r[q]=m+D.d.D(q*v)
if(x)A.d5w(e,d,i,j,h,g,r,t,null,C.G5)
else A.d58(e,d,i,j,h,g,r,t,f,!1,null,C.G5)
return d},
d5w(d,e,f,g,h,i,j,k,l,m){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.el(t,s,x)
if(x==null)x=new A.fn()
e.y3(f+u,v,x)}},
d58(d,e,f,g,h,i,j,k,l,m,n,o){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.el(t,s,x)
if(x==null)x=new A.fn()
A.daL(e,f+u,v,x,l,!1,n,o)}},
daL(a4,a5,a6,a7,a8,a9,b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
if(!a4.aBC(a5,a6))return a4
if(a8===C.y6||a4.grn())if(a4.aBC(a5,a6)){a4.nX(a5,a6).iX(0,a7)
return a4}x=a7.giz()
w=a7.gii()
v=a7.gir()
u=a7.gu(a7)<4?1:a7.giJ()
if(u===0)return a4
t=a4.nX(a5,a6)
s=t.giz()
r=t.gii()
q=t.gir()
p=t.giJ()
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
t.siz(x*u+s*p*a3)
t.sii(w*u+r*p*a3)
t.sir(v*u+q*p*a3)
t.siJ(u+p*a3)
return a4},
daY(d,e,f,g,h,i,j){var x,w=D.d.bc(Math.min(g,h),0,d.gcZ(0)-1),v=D.d.bc(Math.min(i,j),0,d.gb5(0)-1),u=D.d.bc(Math.max(g,h),0,d.gcZ(0)-1),t=D.d.bc(Math.max(i,j),0,d.gb5(0)-1),s=d.a.qq(0,w,v,u-w+1,t-v+1)
for(x=s.a;s.q();)x.iX(0,f)
return d},
cS8(a4,a5,a6,a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=b0<16384,a3=a6>a8?a8:a6
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
if(a2){A.Zw(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.Zw(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.Zw(f,d,v)
a1=v[0]
u&2&&B.B(a4)
a4[j]=a1
a4[i]=v[1]
A.Zw(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}else{A.Zx(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.Zx(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.Zx(f,d,v)
a1=v[0]
u&2&&B.B(a4)
a4[j]=a1
a4[i]=v[1]
A.Zx(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}}if(n){h=j+r
if(a2){A.Zw(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&B.B(a4)
a4[h]=a1}else{A.Zx(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&B.B(a4)
a4[h]=a1}u&2&&B.B(a4)
a4[j]=f}}if((a8&x)>>>0!==0){k=l+m
for(j=l;j<=k;j+=o){i=j+p
if(a2){A.Zw(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&B.B(a4)
a4[i]=n}else{A.Zx(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&B.B(a4)
a4[i]=n}u&2&&B.B(a4)
a4[j]=f}}w=x>>>1}},
Zw(d,e,f){var x,w,v,u,t=$.qJ()
t.$flags&2&&B.B(t)
t[0]=d
x=$.tj()
w=x[0]
t[0]=e
v=x[0]
u=w+(v&1)+D.c.R(v,1)
f[0]=u
f[1]=u-v},
Zx(d,e,f){var x=d-D.c.R(e,1)&65535
f[1]=x
f[0]=e+x-32768&65535},
cry(d){var x,w,v,u,t,s,r,q,p,o,n=null
if(A.cy6().QP(d))return new A.ar2()
x=new A.awG(A.cxT())
if(x.Ie(d))return x
w=new A.bdU()
w.f=A.cT(d,!1,n,0)
w.a=new A.apq(B.a([],y.b))
if(w.amE())return w
v=new A.bL1()
if(v.Ie(d))return v
u=new A.bGK()
if(u.aqY(A.cT(d,!1,n,0))!=null)return u
if(A.cA4(d).c===943870035)return new A.bu4()
if(A.cS7(d))return new A.ba1()
if(A.cmm(A.cT(d,!1,n,0)))return new A.aiQ(!1)
t=new A.bFX()
s=A.cT(d,!1,n,0)
r=t.a=new A.aBv(C.wJ)
r.qi(0,s)
if(r.aBU())return t
q=new A.bgj()
r=A.cT(d,!1,n,0)
q.a=r
r=A.cxo(r)
q.b=r
if(r!=null)return q
p=new A.bu6()
if(p.oA(d)!=null)return p
o=new A.bt8(B.a([],y.T))
if(o.Ie(d))return o
return n},
cGh(d){var x=A.cry(d)
return x==null?null:x.nA(0,d,null)},
dd4(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if($.cqQ==null){x=$.cqQ=new Uint8Array(768)
for(w=-256;w<0;++w)x[256+w]=0
for(w=0;w<256;++w)x[256+w]=w
for(w=256;w<512;++w)x[256+w]=255}for(x=a6.$flags|0,w=0;w<64;++w){v=a4[w]
u=a3[w]
x&2&&B.B(a6)
a6[w]=v*u}for(t=0,w=0;w<8;++w,t+=8){v=1+t
u=a6[v]
if(u===0&&a6[2+t]===0&&a6[3+t]===0&&a6[4+t]===0&&a6[5+t]===0&&a6[6+t]===0&&a6[7+t]===0){v=D.c.R(5793*a6[t]+512,10)
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
continue}r=D.c.R(5793*a6[t]+128,8)
q=(r&2147483647)-((r&2147483648)>>>0)
r=4+t
p=D.c.R(5793*a6[r]+128,8)
o=(p&2147483647)-((p&2147483648)>>>0)
p=2+t
n=a6[p]
m=6+t
l=a6[m]
k=7+t
j=a6[k]
i=D.c.R(2896*(u-j)+128,8)
h=(i&2147483647)-((i&2147483648)>>>0)
j=D.c.R(2896*(u+j)+128,8)
g=(j&2147483647)-((j&2147483648)>>>0)
j=3+t
u=a6[j]<<4
f=(u&2147483647)-((u&2147483648)>>>0)
u=5+t
i=a6[u]<<4
e=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.R(q-o+1,1)
s=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.R(q+o+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.R(n*3784+l*1567+128,8)
i=(i&2147483647)-((i&2147483648)>>>0)
d=D.c.R(n*1567-l*3784+128,8)
n=(d&2147483647)-((d&2147483648)>>>0)
d=D.c.R(h-e+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.c.R(h+e+1,1)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.R(g+f+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.c.R(g-f+1,1)
f=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.c.R(q-i+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
i=D.c.R(q+i+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.R(s-n+1,1)
i=(i&2147483647)-((i&2147483648)>>>0)
a2=D.c.R(s+n+1,1)
o=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.c.R(h*2276+a0*3406+2048,12)
s=(a2&2147483647)-((a2&2147483648)>>>0)
a0=D.c.R(h*3406-a0*2276+2048,12)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.R(f*799+d*4017+2048,12)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
d=D.c.R(f*4017-d*799+2048,12)
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
if(u===0&&a6[16+w]===0&&a6[24+w]===0&&a6[32+w]===0&&a6[40+w]===0&&a6[48+w]===0&&a6[56+w]===0){u=D.c.R(5793*a6[w]+8192,14)
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
continue}r=D.c.R(5793*a6[w]+2048,12)
q=(r&2147483647)-((r&2147483648)>>>0)
r=32+w
p=D.c.R(5793*a6[r]+2048,12)
o=(p&2147483647)-((p&2147483648)>>>0)
p=16+w
n=a6[p]
m=48+w
l=a6[m]
k=56+w
j=a6[k]
i=D.c.R(2896*(u-j)+2048,12)
h=(i&2147483647)-((i&2147483648)>>>0)
j=D.c.R(2896*(u+j)+2048,12)
g=(j&2147483647)-((j&2147483648)>>>0)
j=24+w
f=a6[j]
u=40+w
e=a6[u]
i=D.c.R(q-o+1,1)
s=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.R(q+o+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.R(n*3784+l*1567+2048,12)
i=(i&2147483647)-((i&2147483648)>>>0)
d=D.c.R(n*1567-l*3784+2048,12)
n=(d&2147483647)-((d&2147483648)>>>0)
d=D.c.R(h-e+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.c.R(h+e+1,1)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.R(g+f+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.c.R(g-f+1,1)
f=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.c.R(q-i+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
i=D.c.R(q+i+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.R(s-n+1,1)
i=(i&2147483647)-((i&2147483648)>>>0)
a2=D.c.R(s+n+1,1)
o=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.c.R(h*2276+a0*3406+2048,12)
s=(a2&2147483647)-((a2&2147483648)>>>0)
a0=D.c.R(h*3406-a0*2276+2048,12)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.R(f*799+d*4017+2048,12)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
d=D.c.R(f*4017-d*799+2048,12)
f=(d&2147483647)-((d&2147483648)>>>0)
x&2&&B.B(a6)
a6[w]=q+s
a6[k]=q-s
a6[v]=o+a0
a6[m]=o-a0
a6[p]=i+f
a6[u]=i-f
a6[j]=a1+h
a6[r]=a1-h}for(x=$.cqQ,v=a5.$flags|0,w=0;w<64;++w){x.toString
u=D.c.R(a6[w]+8,4)
u=x[384+((u&2147483647)-((u&2147483648)>>>0))]
v&2&&B.B(a5)
a5[w]=u}},
dbA(d9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=null,d7="ifd0",d8=d9.r
if(d8.i(0,d7).a.a3(0,274)){x=d8.i(0,d7).gie(0)
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
r=A.hK(d6,d6,C.a7,0,C.bm,s,d6,0,3,d6,C.a7,t,!1)
r.e=A.Zo(d8)
r.gwT().i(0,d7).sie(0,d6)
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
e=n[D.c.hB(g,l)]
f=q-g
d=0
while(!0){a0=d9.d.e
a0.toString
if(!(d<a0))break
a1=e[D.c.hB(d,m)]
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
b1=D.c.hB(g,l)
b2=D.c.hB(g,a8)
b3=D.c.hB(g,b0)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
f=q-g
d=0
while(!0){a0=d9.d.e
a0.toString
if(!(d<a0))break
b6=D.c.hB(d,m)
b7=D.c.hB(d,a7)
b8=D.c.hB(d,a9)
a1=e[b6]<<8>>>0
b9=b4[b7]-128
c0=b5[b8]-128
a0=D.c.R(a1+359*c0+128,8)
c1=D.c.bc((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.c.R(a1-88*b9-183*c0+128,8)
c2=D.c.bc((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.c.R(a1+454*b9+128,8)
c3=D.c.bc((a0&2147483647)-((a0&2147483648)>>>0),0,255)
if(h){a0=r.a
if(a0!=null)a0.fe(p-d,g,c1,c2,c3)}else if(i){a0=r.a
if(a0!=null)a0.fe(p-d,f,c1,c2,c3)}else if(j){a0=r.a
if(a0!=null)a0.fe(d,f,c1,c2,c3)}else if(k){a0=r.a
if(a0!=null)a0.fe(g,d,c1,c2,c3)}else if(v){a0=r.a
if(a0!=null)a0.fe(f,d,c1,c2,c3)}else if(x){a0=r.a
if(a0!=null)a0.fe(f,p-d,c1,c2,c3)}else{a0=r.a
if(d8){if(a0!=null)a0.fe(g,p-d,c1,c2,c3)}else if(a0!=null)a0.fe(d,g,c1,c2,c3)}++d}++g}break
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
b1=D.c.hB(g,l)
b2=D.c.hB(g,a8)
b3=D.c.hB(g,b0)
c8=D.c.hB(g,c7)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
c9=c5[c8]
a0=q-g
d=0
while(!0){d0=d9.d.e
d0.toString
if(!(d<d0))break
b6=D.c.hB(d,m)
b7=D.c.hB(d,a7)
b8=D.c.hB(d,a9)
d1=D.c.hB(d,c6)
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
a1=255-D.c.bc(D.d.D(a1+1.772*d5),0,255)}d0=D.c.R(d2*d4,8)
c1=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.c.R(d3*d4,8)
c2=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.c.R(a1*d4,8)
c3=(d0&2147483647)-((d0&2147483648)>>>0)
if(f){d0=r.a
if(d0!=null)d0.fe(p-d,g,c1,c2,c3)}else if(h){d0=r.a
if(d0!=null)d0.fe(p-d,a0,c1,c2,c3)}else if(i){d0=r.a
if(d0!=null)d0.fe(d,a0,c1,c2,c3)}else if(j){d0=r.a
if(d0!=null)d0.fe(g,d,c1,c2,c3)}else if(k){d0=r.a
if(d0!=null)d0.fe(a0,d,c1,c2,c3)}else if(v){d0=r.a
if(d0!=null)d0.fe(a0,p-d,c1,c2,c3)}else{d0=r.a
if(d8){if(d0!=null)d0.fe(g,p-d,c1,c2,c3)}else if(d0!=null)d0.fe(d,g,c1,c2,c3)}++d}++g}break
default:throw B.l(A.c6("Unsupported color mode"))}return r},
d1d(d,e,f,g,h,i){A.d1a(i,d,e,f,g,h,!0,i)},
d1e(d,e,f,g,h,i){A.d1b(i,d,e,f,g,h,!0,i)},
d1c(d,e,f,g,h,i){A.d19(i,d,e,f,g,h,!0,i)},
SW(d,e,f,g,h){var x,w,v
for(x=0;x<g;++x){w=J.v(d.a,d.d+x)
v=J.v(e.a,e.d+x)
J.bV(f.a,f.d+x,w+v)}},
d1a(d,e,f,g,h,i,j,k){var x,w,v=null,u=h*g,t=h+i,s=A.cT(d,!1,v,u),r=A.cT(d,!1,v,u),q=A.cb(r,v,0)
if(h===0){r.m(0,0,J.v(s.a,s.d))
A.SW(A.cb(s,v,1),q,A.cb(r,v,1),e-1,!0)
q.d+=g
s.d+=g
r.d+=g
h=1}for(x=-g,w=e-1;h<t;){A.SW(s,A.cb(q,v,x),r,1,!0)
A.SW(A.cb(s,v,1),q,A.cb(r,v,1),w,!0);++h
q.d+=g
s.d+=g
r.d+=g}},
d1b(d,e,f,g,h,i,j,k){var x=null,w=h*g,v=h+i,u=A.cT(d,!1,x,w),t=A.cT(k,!1,x,w),s=A.cb(t,x,0)
if(h===0){t.m(0,0,J.v(u.a,u.d))
A.SW(A.cb(u,x,1),s,A.cb(t,x,1),e-1,!0)
u.d+=g
t.d+=g
h=1}else s.d-=g
for(;h<v;){A.SW(u,s,t,e,!0);++h
s.d+=g
u.d+=g
t.d+=g}},
d19(d,e,f,g,h,i,j,k){var x,w,v,u,t,s=null,r=h*g,q=h+i,p=A.cT(d,!1,s,r),o=A.cT(k,!1,s,r),n=A.cb(o,s,0)
if(h===0){o.m(0,0,J.v(p.a,p.d))
A.SW(A.cb(p,s,1),n,A.cb(o,s,1),e-1,!0)
n.d+=g
p.d+=g
o.d+=g
h=1}for(x=-g;h<q;){A.SW(p,A.cb(n,s,x),o,1,!0)
for(w=1;w<e;++w){v=w-g
u=J.v(n.a,n.d+(w-1))+J.v(n.a,n.d+v)-J.v(n.a,n.d+(v-1))
if((u&4294967040)>>>0===0)t=u
else t=u<0?0:255
v=J.v(p.a,p.d+w)
J.bV(o.a,o.d+w,v+t)}++h
n.d+=g
p.d+=g
o.d+=g}},
d8p(d){var x="ifd0",w=A.BK(d,!1,!1)
if(!d.gwT().i(0,x).a.a3(0,274)||d.gwT().i(0,x).gie(0)===1)return w
w.e=A.Zo(d.gwT())
w.gwT().i(0,x).sie(0,null)
switch(d.gwT().i(0,x).gie(0)){case 2:return A.aUu(w)
case 3:return A.db7(w,C.akH)
case 4:return A.aUu(A.aUn(w,180))
case 5:return A.aUu(A.aUn(w,90))
case 6:return A.aUn(w,90)
case 7:return A.aUu(A.aUn(w,-90))
case 8:return A.aUn(w,-90)}return w},
d98(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
d.grn()
if(d.gwT().i(0,"ifd0").a.a3(0,274)&&d.gwT().i(0,"ifd0").gie(0)!==1)d=A.d8p(d)
x=D.d.b_(e*(d.gb5(0)/d.gcZ(0)))
if(e<=0)e=D.d.b_(x*(d.gcZ(0)/d.gb5(0)))
if(e===d.gcZ(0)&&x===d.gb5(0))return A.BK(d,!1,!1)
w=new Int32Array(e)
v=d.gcZ(0)/e
for(u=0;u<e;++u)w[u]=D.d.D(u*v)
t=d.gl1().length
for(s=y.g,r=g,q=0;q<t;++q){p=d.x
o=(p===$?d.x=B.a([],s):p)[q]
n=A.aqn(o,x,!0,e)
m=r==null
if(!m)r.ns(n)
if(m)r=n
m=o.a
l=m==null
k=l?g:m.b
j=(k==null?0:k)/x
if((l?g:m.geW())!=null)for(i=0;i<x;++i){h=D.d.D(i*j)
for(u=0;u<e;++u){m=w[u]
l=o.a
if(l==null)m=g
else{m=l.nX(m,h)
m=D.d.D(m.gef(m))}if(m==null)m=0
l=n.a
if(l!=null)l.mB(u,i,m)}}else for(i=0;i<x;++i){h=D.d.D(i*j)
for(u=0;u<e;++u){m=w[u]
l=o.a
m=l==null?g:l.el(m,h,g)
n.y3(u,i,m==null?new A.fn():m)}}}r.toString
return r},
aUn(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=D.c.ap(a8,360)
a7.grn()
if(D.c.ap(a6,90)===0)switch(D.c.b7(a6,90)){case 1:return A.d7F(a7)
case 2:return A.d7D(a7)
case 3:return A.d7E(a7)
default:return A.BK(a7,!1,!1)}x=a6*3.141592653589793/180
w=Math.cos(x)
v=Math.sin(x)
u=a7.gcZ(0)
t=a7.gcZ(0)
s=a7.gb5(0)
r=a7.gb5(0)
q=0.5*a7.gcZ(0)
p=0.5*a7.gb5(0)
s=Math.abs(u*w)+Math.abs(s*v)
o=0.5*s
r=Math.abs(t*v)+Math.abs(r*w)
n=0.5*r
m=a7.gl1().length
for(u=y.g,l=a5,k=0;k<m;++k){j=a7.x
i=(j===$?a7.x=B.a([],u):j)[k]
t=l==null
h=t?a5:l.WF()
if(h==null){g=D.d.D(s)
h=A.aqn(a7,D.d.D(r),!0,g)}if(t)l=h
for(t=h.a,t=t.ga1(t);t.q();){f=t.gL(t)
e=f.gn7(f)
d=f.gnV(f)
g=e-o
a0=d-n
a1=q+g*w+a0*v
a2=p-g*v+a0*w
g=!1
if(a1>=0)if(a2>=0){a0=i.a
a3=a0==null
a4=a3?a5:a0.a
if(a1<(a4==null?0:a4)){g=a3?a5:a0.b
g=a2<(g==null?0:g)}}if(g)h.y3(e,d,i.aIc(a1,a2,C.anX))}}l.toString
return l},
d7F(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gl1(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.R)(x),++u){t=x[u]
s=v==null
r=s?k:v.WF()
if(r==null){q=t.a
p=q==null
o=p?k:q.b
if(o==null)o=0
q=p?k:q.a
r=A.aqn(t,q==null?0:q,!0,o)}if(s)v=r
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
s=s==null?k:s.el(m,n-l,k)
r.y3(l,m,s==null?new A.fn():s);++l}++m}}v.toString
return v},
d7D(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gl1(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.R)(x),++u){t=x[u]
s=t.a
r=s==null
q=r?k:s.a
p=(q==null?0:q)-1
s=r?k:s.b
o=(s==null?0:s)-1
s=v==null
n=s?k:v.WF()
if(n==null)n=A.BK(t,!0,!0)
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
r=r==null?k:r.el(p-l,s,k)
n.y3(l,m,r==null?new A.fn():r);++l}++m}}v.toString
return v},
d7E(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gl1(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.R)(x),++u){t=x[u]
s=d.a
s=s==null?k:s.a
r=(s==null?0:s)-1
s=v==null
q=s?k:v.WF()
if(q==null){p=t.a
o=p==null
n=o?k:p.b
if(n==null)n=0
p=o?k:p.a
q=A.aqn(t,p==null?0:p,!0,n)}if(s)v=q
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
p=p==null?k:p.el(s,l,k)
q.y3(l,m,p==null?new A.fn():p);++l}++m}}v.toString
return v},
cjg(d){var x
d=(d&-d)>>>0
x=d!==0?31:32
if((d&65535)!==0)x-=16
if((d&16711935)!==0)x-=8
if((d&252645135)!==0)x-=4
if((d&858993459)!==0)x-=2
return(d&1431655765)!==0?x-1:x},
de3(d){$.ct0().m(0,0,d)
return $.cKK().i(0,0)},
cHc(d,e,f,g){return(D.c.bc(d,0,255)|D.c.bc(e,0,255)<<8|D.c.bc(f,0,255)<<16|D.c.bc(g,0,255)<<24)>>>0},
v9(d,e,f){var x,w,v,u,t,s=e.gu(e),r=e.gdv(),q=d.geW(),p=q==null?null:q.gdv()
if(p==null)p=d.gdv()
x=d.gu(d)
if(s===1){w=d.gu(d)>2?d.gjR():d.i(0,0)
e.m(0,0,A.aUl(B.hS(d.i(0,0))?D.d.h1(w):w,p,r))}else if(s<=x)for(v=0;v<s;++v)e.m(0,v,A.aUl(d.i(0,v),p,r))
else if(x===2){u=A.aUl(d.i(0,0),p,r)
if(s===3){e.m(0,0,u)
e.m(0,1,u)
e.m(0,2,u)}else{f=A.aUl(d.i(0,1),p,r)
e.m(0,0,u)
e.m(0,1,u)
e.m(0,2,u)
e.m(0,3,f)}}else{for(v=0;v<x;++v)e.m(0,v,A.aUl(d.i(0,v),p,r))
t=x===1?e.i(0,0):0
for(v=x;v<s;++v)e.m(0,v,v===3?f:t)}return e},
pu(d,e,f,g,h){var x,w,v=d.geW(),u=v==null?null:v.gdv()
if(u==null)u=d.gdv()
v=h==null
x=v?null:h.gdv()
f=x==null?f:x
if(f==null)f=d.gdv()
x=v?null:h.gu(h)
g=x==null?g:x
if(g==null)g=d.gu(d)
if(e==null)e=0
if(f===u&&g===d.gu(d)){if(v)return d.dY(0)
h.iX(0,d)
return h}switch(f.a){case 3:if(v)w=new A.xJ(new Uint8Array(g))
else w=h
return A.v9(d,w,e)
case 0:return A.v9(d,v?new A.MW(g,0):h,e)
case 1:return A.v9(d,v?new A.MY(g,0):h,e)
case 2:if(v){v=g<3?1:2
w=new A.N_(g,new Uint8Array(v))}else w=h
return A.v9(d,w,e)
case 4:if(v)w=new A.MX(new Uint16Array(g))
else w=h
return A.v9(d,w,e)
case 5:if(v)w=new A.MZ(new Uint32Array(g))
else w=h
return A.v9(d,w,e)
case 6:if(v)w=new A.MT(new Int8Array(g))
else w=h
return A.v9(d,w,e)
case 7:if(v)w=new A.MR(new Int16Array(g))
else w=h
return A.v9(d,w,e)
case 8:if(v)w=new A.MS(new Int32Array(g))
else w=h
return A.v9(d,w,e)
case 9:if(v)w=new A.MO(new Uint16Array(g))
else w=h
return A.v9(d,w,e)
case 10:if(v)w=new A.MP(new Float32Array(g))
else w=h
return A.v9(d,w,e)
case 11:if(v)w=new A.MQ(new Float64Array(g))
else w=h
return A.v9(d,w,e)}},
jw(d){return 0.299*d.gaz(d)+0.587*d.gaL()+0.114*d.gaN(d)},
cFY(d,e,f,g){var x=1-g/255
return B.a([D.d.b_(255*(1-d/255)*x),D.d.b_(255*(1-e/255)*x),D.d.b_(255*(1-f/255)*x)],y.t)},
fQ(d){var x,w,v,u=$.ct_()
u.$flags&2&&B.B(u)
u[0]=d
x=$.cKJ()[0]
if(d===0)return x>>>16
if($.hI==null)A.iC()
w=$.cwH.cn()[x>>>23&511]
if(w!==0){v=x&8388607
return w+(v+4095+(v>>>13&1)>>>13)}return A.cSt(x)},
cSt(d){var x,w,v=d>>>16&32768,u=(d>>>23&255)-112,t=d&8388607
if(u<=0){if(u<-10)return v
t|=8388608
x=14-u
return(v|D.c.o_(t+(D.c.eS(1,x-1)-1)+(D.c.h_(t,x)&1),x))>>>0}else if(u===143)if(t===0)return v|31744
else{t=t>>>13
w=t===0?1:0
return v|t|w|31744}else{t=t+4095+(t>>>13&1)
if((t&8388608)!==0){++u
t=0}if(u>30)return v|31744
return(v|u<<10|t>>>13)>>>0}},
iC(){var x,w,v,u,t=$.hI
if(t!=null)return t
x=new Uint32Array(65536)
$.hI=J.aVd(D.bq.gag(x),0,null)
t=new Uint16Array(512)
$.cwH.b=t
for(w=0;w<256;++w){v=(w&255)-112
if(v<=0||v>=30){t[w]=0
t[(w|256)>>>0]=0}else{u=v<<10>>>0
t[w]=u
t[(w|256)>>>0]=(u|32768)>>>0}}for(w=0;w<65536;++w)x[w]=A.cSu(w)
t=$.hI
t.toString
return t},
cSu(d){var x,w=d>>>15&1,v=d>>>10&31,u=d&1023
if(v===0)if(u===0)return w<<31>>>0
else{for(;(u&1024)===0;){u=u<<1;--v}++v
u&=4294966271}else if(v===31){x=w<<31
if(u===0)return(x|2139095040)>>>0
else return(x|u<<13|2139095040)>>>0}return(w<<31|v+112<<23|u<<13)>>>0}},C
J=c[1]
B=c[0]
D=c[2]
E=c[161]
A=a.updateHolder(c[55],A)
C=c[356]
A.ahZ.prototype={}
A.bhu.prototype={}
A.bht.prototype={
gu(d){var x=this.e
x===$&&B.b()
return x-(this.b-this.c)},
gP2(){var x=this.b,w=this.e
w===$&&B.b()
return x>=this.c+w},
i(d,e){return this.a[this.b+e]},
dM(d,e){var x,w
for(x=this.b,w=x+this.gu(0);x<w;++x);return-1},
dg(){return this.a[this.b++]},
l6(d){var x,w,v,u=this,t=u.c,s=u.b-t+t
if(d<0){x=u.e
x===$&&B.b()
w=x-(s-t)}else w=d
v=A.BU(u.a,u.d,w,s)
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
hL(){var x,w,v,u,t=this,s=t.gu(0),r=t.a
if(y.D.b(r)){x=t.b
w=r.length
if(x+s>w)s=w-x
return J.d5(D.A.gag(r),r.byteOffset+t.b,s)}x=t.b
v=x+s
u=r.length
return new Uint8Array(B.bU(J.aVo(r,x,v>u?u:v)))}}
A.bqi.prototype={}
A.bqh.prototype={
b0(d){var x,w,v=this
if(v.a===v.c.length)v.beS()
x=v.c
w=v.a++
x.$flags&2&&B.B(x)
x[w]=d&255},
a0G(d,e){var x,w,v,u,t,s,r=this
if(e==null)e=d.length
for(;x=r.a,w=x+e,v=r.c,u=v.length,w>u;)r.a5B(w-u)
if(e===1){u=d[0]
v.$flags&2&&B.B(v)
v[x]=u}else if(e===2){u=d[0]
v.$flags&2&&B.B(v)
v[x]=u
v[x+1]=d[1]}else if(e===3){u=d[0]
v.$flags&2&&B.B(v)
v[x]=u
v[x+1]=d[1]
v[x+2]=d[2]}else if(e===4){u=d[0]
v.$flags&2&&B.B(v)
v[x]=u
v[x+1]=d[1]
v[x+2]=d[2]
v[x+3]=d[3]}else if(e===5){u=d[0]
v.$flags&2&&B.B(v)
v[x]=u
v[x+1]=d[1]
v[x+2]=d[2]
v[x+3]=d[3]
v[x+4]=d[4]}else if(e===6){u=d[0]
v.$flags&2&&B.B(v)
v[x]=u
v[x+1]=d[1]
v[x+2]=d[2]
v[x+3]=d[3]
v[x+4]=d[4]
v[x+5]=d[5]}else if(e===7){u=d[0]
v.$flags&2&&B.B(v)
v[x]=u
v[x+1]=d[1]
v[x+2]=d[2]
v[x+3]=d[3]
v[x+4]=d[4]
v[x+5]=d[5]
v[x+6]=d[6]}else if(e===8){u=d[0]
v.$flags&2&&B.B(v)
v[x]=u
v[x+1]=d[1]
v[x+2]=d[2]
v[x+3]=d[3]
v[x+4]=d[4]
v[x+5]=d[5]
v[x+6]=d[6]
v[x+7]=d[7]}else if(e===9){u=d[0]
v.$flags&2&&B.B(v)
v[x]=u
v[x+1]=d[1]
v[x+2]=d[2]
v[x+3]=d[3]
v[x+4]=d[4]
v[x+5]=d[5]
v[x+6]=d[6]
v[x+7]=d[7]
v[x+8]=d[8]}else if(e===10){u=d[0]
v.$flags&2&&B.B(v)
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
u&2&&B.B(v)
v[x]=s}r.a=w},
mz(d){return this.a0G(d,null)},
bLn(d){var x,w,v,u,t=this,s=d.c
while(!0){x=t.a
w=d.e
w===$&&B.b()
w=x+(w-(d.b-s))
v=t.c
u=v.length
if(!(w>u))break
t.a5B(w-u)}D.A.dN(v,x,x+d.gu(0),d.a,d.b)
t.a=t.a+d.gu(0)},
ih(d){var x=this
if(x.b===1){x.b0(d>>>24&255)
x.b0(d>>>16&255)
x.b0(d>>>8&255)
x.b0(d&255)
return}x.b0(d&255)
x.b0(d>>>8&255)
x.b0(d>>>16&255)
x.b0(d>>>24&255)},
agP(d,e){var x=this
if(d<0)d=x.a+d
if(e==null)e=x.a
else if(e<0)e=x.a+e
return J.d5(D.A.gag(x.c),d,e-d)},
jZ(d){return this.agP(d,null)},
a5B(d){var x=d!=null?d>32768?d:32768:32768,w=this.c,v=w.length,u=new Uint8Array((v+x)*2)
D.A.hv(u,0,v,w)
this.c=u},
beS(){return this.a5B(null)},
gu(d){return this.a}}
A.cgV.prototype={
Cu(d,e){var x,w,v,u,t=d.dg(),s=d.dg(),r=t&8
D.c.R(t,3)
if(r!==8)throw B.l(A.Wb("Only DEFLATE compression supported: "+r))
if(D.c.ap((t<<8>>>0)+s,31)!==0)throw B.l(A.Wb("Invalid FCHECK"))
if((s>>>5&1)!==0){d.an()
throw B.l(A.Wb("FDICT Encoding not currently supported"))}x=A.aqa(C.aCL)
w=A.aqa(C.asR)
v=A.cop(0,null)
w=new A.bh8(d,v,x,w)
w.b=!0
w.b9G()
u=y.L.a(J.d5(D.A.gag(v.c),0,v.a))
d.an()
return u}}
A.b5y.prototype={
aZz(d){var x,w,v,u,t=this
if(d>4)throw B.l(A.Wb("Invalid Deflate Parameter"))
x=t.x
x===$&&B.b()
if(x!==0)t.Tb()
x=!0
if(t.c.gP2()){w=t.k3
w===$&&B.b()
if(w===0)x=d!==0&&t.e!==666}if(x){switch($.vx.cn().e){case 0:v=t.aZC(d)
break
case 1:v=t.aZA(d)
break
case 2:v=t.aZB(d)
break
default:v=-1
break}x=v===2
if(x||v===3)t.e=666
if(v===0||x)return 0
if(v===1){if(d===1){t.lr(2,3)
t.G4(256,C.rt)
t.awt()
x=t.co
x===$&&B.b()
w=t.Z
w===$&&B.b()
if(1+x+10-w<9){t.lr(2,3)
t.G4(256,C.rt)
t.awt()}t.co=7}else{t.atR(0,0,!1)
if(d===3){x=t.db
x===$&&B.b()
w=t.cx
u=0
for(;u<x;++u){w===$&&B.b()
w.$flags&2&&B.B(w)
w[u]=0}}}t.Tb()}}if(d!==4)return 0
return 1},
baV(){var x,w,v=this,u=v.as
u===$&&B.b()
v.ch=2*u
u=v.cx
u===$&&B.b()
x=v.db
x===$&&B.b();--x
u.$flags&2&&B.B(u)
u[x]=0
for(w=0;w<x;++w)u[w]=0
v.k3=v.fx=v.k1=0
v.fy=v.k4=2
v.cy=v.id=0},
aom(){var x,w,v,u=this
for(x=u.p2,w=0;w<286;++w){x===$&&B.b()
x.$flags&2&&B.B(x)
x[w*2]=0}for(v=u.p3,w=0;w<30;++w){v===$&&B.b()
v.$flags&2&&B.B(v)
v[w*2]=0}for(v=u.p4,w=0;w<19;++w){v===$&&B.b()
v.$flags&2&&B.B(v)
v[w*2]=0}x===$&&B.b()
x.$flags&2&&B.B(x)
x[512]=1
u.br=u.bt=u.aw=u.aY=0},
a5S(d,e){var x,w,v=this.to,u=v[e],t=e<<1>>>0,s=v.$flags|0,r=this.xr
while(!0){x=this.x1
x===$&&B.b()
if(!(t<=x))break
if(t<x&&A.cvz(d,v[t+1],v[t],r))++t
if(A.cvz(d,u,v[t],r))break
x=v[t]
s&2&&B.B(v)
v[e]=x
w=t<<1>>>0
e=t
t=w}s&2&&B.B(v)
v[e]=u},
arM(d,e){var x,w,v,u,t,s,r,q,p,o,n=d[1]
if(n===0){x=138
w=3}else{x=7
w=4}d.$flags&2&&B.B(d)
d[(e+1)*2+1]=65535
for(v=this.p4,u=0,t=-1,s=0;u<=e;n=r){++u
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
aVy(){var x,w,v=this,u=v.p2
u===$&&B.b()
x=v.R8.b
x===$&&B.b()
v.arM(u,x)
x=v.p3
x===$&&B.b()
u=v.RG.b
u===$&&B.b()
v.arM(x,u)
v.rx.a2Q(v)
for(u=v.p4,w=18;w>=3;--w){u===$&&B.b()
if(u[C.Ba[w]*2+1]!==0)break}u=v.aw
u===$&&B.b()
v.aw=u+(3*(w+1)+5+5+4)
return w},
bkt(d,e,f){var x,w,v,u=this
u.lr(d-257,5)
x=e-1
u.lr(x,5)
u.lr(f-4,4)
for(w=0;w<f;++w){v=u.p4
v===$&&B.b()
u.lr(v[C.Ba[w]*2+1],3)}v=u.p2
v===$&&B.b()
u.asm(v,d-1)
v=u.p3
v===$&&B.b()
u.asm(v,x)},
asm(d,e){var x,w,v,u,t,s,r,q,p,o,n=this,m=d[1]
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
n.lr(o[q]&65535,o[p]&65535)}while(--t,t!==0)}else if(m!==0){if(m!==u){q=n.p4
q===$&&B.b()
p=m*2
n.lr(q[p]&65535,q[p+1]&65535);--t}q=n.p4
q===$&&B.b()
n.lr(q[32]&65535,q[33]&65535)
n.lr(t-3,2)}else{q=n.p4
if(t<=10){q===$&&B.b()
n.lr(q[34]&65535,q[35]&65535)
n.lr(t-3,3)}else{q===$&&B.b()
n.lr(q[36]&65535,q[37]&65535)
n.lr(t-11,7)}}}if(s===0){w=r
x=138}else if(m===s){w=r
x=6}else{x=7
w=4}u=m
t=0}},
bhz(d,e,f){var x,w,v,u,t
if(f===0)return
x=this.x
x===$&&B.b()
w=this.f
v=x
u=0
for(;u<f;++u,++v){w===$&&B.b()
t=d[u+e]
w.$flags&2&&B.B(w)
w[v]=t}this.x=x+f},
qE(d){var x,w=this.f
w===$&&B.b()
x=this.x
x===$&&B.b()
this.x=x+1
w.$flags&2&&B.B(w)
w[x]=d},
G4(d,e){var x=d*2
this.lr(e[x]&65535,e[x+1]&65535)},
lr(d,e){var x,w=this,v=w.Z
v===$&&B.b()
x=w.E
if(v>16-e){x===$&&B.b()
v=w.E=(x|D.c.eS(d,v)&65535)>>>0
w.qE(v)
w.qE(A.pt(v,8))
w.E=A.pt(d,16-w.Z)
w.Z=w.Z+(e-16)}else{x===$&&B.b()
w.E=(x|D.c.eS(d,v)&65535)>>>0
w.Z=v+e}},
MH(d,e){var x,w,v,u,t,s=this,r=s.f
r===$&&B.b()
x=s.bY
x===$&&B.b()
w=s.br
w===$&&B.b()
v=A.pt(d,8)
r.$flags&2&&B.B(r)
r[x+w*2]=v
v=s.f
w=s.bY
x=s.br
v.$flags&2&&B.B(v)
v[w+x*2+1]=d
w=s.y1
w===$&&B.b()
v[w+x]=e
s.br=x+1
if(d===0){r=s.p2
r===$&&B.b()
x=e*2
w=r[x]
r.$flags&2&&B.B(r)
r[x]=w+1}else{r=s.bt
r===$&&B.b()
s.bt=r+1
r=s.p2
r===$&&B.b()
x=(C.M9[e]+256+1)*2
w=r[x]
r.$flags&2&&B.B(r)
r[x]=w+1
w=s.p3
w===$&&B.b()
x=A.cDh(d-1)*2
r=w[x]
w.$flags&2&&B.B(w)
w[x]=r+1}r=s.br
if((r&8191)===0){x=s.ok
x===$&&B.b()
x=x>2}else x=!1
if(x){u=r*8
r=s.k1
r===$&&B.b()
x=s.fx
x===$&&B.b()
for(w=s.p3,t=0;t<30;++t){w===$&&B.b()
u+=w[t*2]*(5+C.re[t])}u=A.pt(u,3)
w=s.bt
w===$&&B.b()
v=s.br
if(w<v/2&&u<(r-x)/2)return!0
r=v}x=s.y2
x===$&&B.b()
return r===x-1},
ak9(d,e){var x,w,v,u,t,s,r=this,q=r.br
q===$&&B.b()
if(q!==0){x=0
do{q=r.f
q===$&&B.b()
w=r.bY
w===$&&B.b()
w+=x*2
v=q[w]<<8&65280|q[w+1]&255
w=r.y1
w===$&&B.b()
u=q[w+x]&255;++x
if(v===0)r.G4(u,d)
else{t=C.M9[u]
r.G4(t+256+1,d)
s=C.Kh[t]
if(s!==0)r.lr(u-C.apG[t],s);--v
t=A.cDh(v)
r.G4(t,e)
s=C.re[t]
if(s!==0)r.lr(v-C.asA[t],s)}}while(x<r.br)}r.G4(256,d)
r.co=d[513]},
aK7(){var x,w,v,u
for(x=this.p2,w=0,v=0;w<7;){x===$&&B.b()
v+=x[w*2];++w}for(u=0;w<128;){x===$&&B.b()
u+=x[w*2];++w}for(;w<256;){x===$&&B.b()
v+=x[w*2];++w}this.y=v>A.pt(u,2)?0:1},
awt(){var x=this,w=x.Z
w===$&&B.b()
if(w===16){w=x.E
w===$&&B.b()
x.qE(w)
x.qE(A.pt(w,8))
x.Z=x.E=0}else if(w>=8){w=x.E
w===$&&B.b()
x.qE(w)
x.E=A.pt(x.E,8)
x.Z=x.Z-8}},
aiY(){var x=this,w=x.Z
w===$&&B.b()
if(w>8){w=x.E
w===$&&B.b()
x.qE(w)
x.qE(A.pt(w,8))}else if(w>0){w=x.E
w===$&&B.b()
x.qE(w)}x.Z=x.E=0},
yw(d){var x,w,v,u,t,s=this,r=s.fx
r===$&&B.b()
if(r>=0)x=r
else x=-1
w=s.k1
w===$&&B.b()
r=w-r
w=s.ok
w===$&&B.b()
if(w>0){if(s.y===2)s.aK7()
s.R8.a2Q(s)
s.RG.a2Q(s)
v=s.aVy()
w=s.aw
w===$&&B.b()
u=A.pt(w+3+7,3)
w=s.aY
w===$&&B.b()
t=A.pt(w+3+7,3)
if(t<=u)u=t}else{t=r+5
u=t
v=0}if(r+4<=u&&x!==-1)s.atR(x,r,d)
else if(t===u){s.lr(2+(d?1:0),3)
s.ak9(C.rt,C.MS)}else{s.lr(4+(d?1:0),3)
r=s.R8.b
r===$&&B.b()
x=s.RG.b
x===$&&B.b()
s.bkt(r+1,x+1,v+1)
x=s.p2
x===$&&B.b()
r=s.p3
r===$&&B.b()
s.ak9(x,r)}s.aom()
if(d)s.aiY()
s.fx=s.k1
s.Tb()},
aZC(d){var x,w,v,u,t,s=this,r=s.r
r===$&&B.b()
x=r-5
x=65535>x?x:65535
for(r=d===0;!0;){w=s.k3
w===$&&B.b()
if(w<=1){s.a3Q()
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
s.yw(!1)}w=s.k1
v=s.fx
t=s.as
t===$&&B.b()
if(w-v>=t-262)s.yw(!1)}r=d===4
s.yw(r)
return r?3:1},
atR(d,e,f){var x,w=this
w.lr(f?1:0,3)
w.aiY()
w.co=8
w.qE(e)
w.qE(A.pt(e,8))
x=(~e>>>0)+65536&65535
w.qE(x)
w.qE(A.pt(x,8))
x=w.ay
x===$&&B.b()
w.bhz(x,d,e)},
a3Q(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.c
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
D.A.dN(w,0,x,w,x)
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
v&2&&B.B(w)
w[s]=x}while(--r,r!==0)
x=n.CW
x===$&&B.b()
w=x.$flags|0
s=t
r=s
do{--s
q=x[s]&65535
v=q>=t?q-t:0
w&2&&B.B(x)
x[s]=v}while(--r,r!==0)
u+=t}}if(m.gP2())return
x=n.ay
x===$&&B.b()
r=n.bhJ(x,n.k1+n.k3,u)
x=n.k3=n.k3+r
if(x>=3){w=n.ay
v=n.k1
p=w[v]&255
n.cy=p
o=n.fr
o===$&&B.b()
o=D.c.eS(p,o)
v=w[v+1]
w=n.dy
w===$&&B.b()
n.cy=((o^v&255)&w)>>>0}}while(x<262&&!m.gP2())},
aZA(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
for(x=d===0,w=$.vx.a,v=0;!0;){u=m.k3
u===$&&B.b()
if(u<262){m.a3Q()
u=m.k3
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=m.cy
u===$&&B.b()
t=m.fr
t===$&&B.b()
t=D.c.eS(u,t)
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
q.$flags&2&&B.B(q)
q[(s&p)>>>0]=t
u.$flags&2&&B.B(u)
u[r]=s}if(v!==0){u=m.k1
u===$&&B.b()
t=m.as
t===$&&B.b()
t=(u-v&65535)<=t-262
u=t}else u=!1
if(u){u=m.p1
u===$&&B.b()
if(u!==2)m.fy=m.ap7(v)}u=m.fy
u===$&&B.b()
t=m.k1
if(u>=3){t===$&&B.b()
o=m.MH(t-m.k2,u-3)
u=m.k3
t=m.fy
u-=t
m.k3=u
s=$.vx.b
if(s===$.vx)B.a6(B.w0(w))
if(t<=s.b&&u>=3){u=m.fy=t-1
do{t=m.k1=m.k1+1
s=m.cy
s===$&&B.b()
r=m.fr
r===$&&B.b()
r=D.c.eS(s,r)
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
p.$flags&2&&B.B(p)
p[(t&n)>>>0]=r
s.$flags&2&&B.B(s)
s[q]=t}while(u=m.fy=u-1,u!==0)
m.k1=t+1}else{u=m.k1=m.k1+t
m.fy=0
t=m.ay
t===$&&B.b()
s=t[u]&255
m.cy=s
r=m.fr
r===$&&B.b()
r=D.c.eS(s,r)
u=t[u+1]
t=m.dy
t===$&&B.b()
m.cy=((r^u&255)&t)>>>0}}else{u=m.ay
u===$&&B.b()
t===$&&B.b()
o=m.MH(0,u[t]&255)
m.k3=m.k3-1
m.k1=m.k1+1}if(o)m.yw(!1)}x=d===4
m.yw(x)
return x?3:1},
aZB(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
for(x=d===0,w=$.vx.a,v=0;!0;){u=l.k3
u===$&&B.b()
if(u<262){l.a3Q()
u=l.k3
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=l.cy
u===$&&B.b()
t=l.fr
t===$&&B.b()
t=D.c.eS(u,t)
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
q.$flags&2&&B.B(q)
q[(s&p)>>>0]=t
u.$flags&2&&B.B(u)
u[r]=s}u=l.fy
u===$&&B.b()
l.k4=u
l.go=l.k2
l.fy=2
t=!1
if(v!==0){s=$.vx.b
if(s===$.vx)B.a6(B.w0(w))
if(u<s.b){u=l.k1
u===$&&B.b()
t=l.as
t===$&&B.b()
t=(u-v&65535)<=t-262
u=t}else u=t}else u=t
t=2
if(u){u=l.p1
u===$&&B.b()
if(u!==2){u=l.ap7(v)
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
n=l.MH(u-1-l.go,t-3)
t=l.k3
u=l.k4
l.k3=t-(u-1)
u=l.k4=u-2
do{t=l.k1=l.k1+1
if(t<=o){s=l.cy
s===$&&B.b()
r=l.fr
r===$&&B.b()
r=D.c.eS(s,r)
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
p.$flags&2&&B.B(p)
p[(t&m)>>>0]=r
s.$flags&2&&B.B(s)
s[q]=t}}while(u=l.k4=u-1,u!==0)
l.id=0
l.fy=2
l.k1=t+1
if(n)l.yw(!1)}else{u=l.id
u===$&&B.b()
if(u!==0){u=l.ay
u===$&&B.b()
t=l.k1
t===$&&B.b()
if(l.MH(0,u[t-1]&255))l.yw(!1)
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
l.MH(0,x[w-1]&255)
l.id=0}x=d===4
l.yw(x)
return x?3:1},
ap7(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=$.vx.cn().d,h=j.k1
h===$&&B.b()
x=j.k4
x===$&&B.b()
w=j.as
w===$&&B.b()
w-=262
v=h>w?h-w:0
u=$.vx.cn().c
w=j.ax
w===$&&B.b()
t=j.k1+258
s=j.ay
s===$&&B.b()
r=h+x
q=s[r-1]
p=s[r]
if(j.k4>=$.vx.cn().a)i=i>>>2
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
bhJ(d,e,f){var x,w,v,u,t=this
if(f===0||t.c.gP2())return 0
x=t.c.l6(f)
w=x.gu(0)
if(w===0)return 0
v=x.hL()
u=v.length
if(w>u)w=u
D.A.hv(d,e,e+w,v)
t.b+=w
t.a=A.xf(v,t.a)
return w},
Tb(){var x,w=this,v=w.x
v===$&&B.b()
x=w.f
x===$&&B.b()
w.d.a0G(x,v)
x=w.w
x===$&&B.b()
w.w=x+v
v=w.x-v
w.x=v
if(v===0)w.w=0},
b1V(d){switch(d){case 0:return new A.t4(0,0,0,0,0)
case 1:return new A.t4(4,4,8,4,1)
case 2:return new A.t4(4,5,16,8,1)
case 3:return new A.t4(4,6,32,32,1)
case 4:return new A.t4(4,4,16,16,2)
case 5:return new A.t4(8,16,32,32,2)
case 6:return new A.t4(8,16,128,128,2)
case 7:return new A.t4(8,32,128,256,2)
case 8:return new A.t4(32,128,258,1024,2)
case 9:return new A.t4(32,258,258,4096,2)}throw B.l(A.Wb("Invalid Deflate parameter"))}}
A.t4.prototype={}
A.bYW.prototype={
b1D(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a
d===$&&B.b()
x=e.c
x===$&&B.b()
w=x.a
v=x.b
u=x.c
t=x.e
for(x=a0.ry,s=x.$flags|0,r=0;r<=15;++r){s&2&&B.B(x)
x[r]=0}q=a0.to
p=a0.x2
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
o=a0.aw
o===$&&B.b()
a0.aw=o+h*(r+i)
if(p){o=a0.aY
o===$&&B.b()
a0.aY=o+h*(w[k]+i)}}if(m===0)return
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
if(o!==r){k=a0.aw
k===$&&B.b()
a0.aw=k+(r-o)*d[s]
d[p]=r}--l}}},
a2Q(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
g===$&&B.b()
x=h.c
x===$&&B.b()
w=x.a
v=x.d
d.x1=0
d.x2=573
for(x=g.$flags|0,u=d.to,t=u.$flags|0,s=d.xr,r=s.$flags|0,q=0,p=-1;q<v;++q){o=q*2
if(g[o]!==0){o=++d.x1
t&2&&B.B(u)
u[o]=q
r&2&&B.B(s)
s[q]=0
p=q}else{x&2&&B.B(g)
g[o+1]=0}}for(o=w!=null;n=d.x1,n<2;){++n
d.x1=n
if(p<2){++p
m=p}else m=0
t&2&&B.B(u)
u[n]=m
n=m*2
x&2&&B.B(g)
g[n]=1
r&2&&B.B(s)
s[m]=0
l=d.aw
l===$&&B.b()
d.aw=l-1
if(o){l=d.aY
l===$&&B.b()
d.aY=l-w[n+1]}}h.b=p
for(q=D.c.b7(n,2);q>=1;--q)d.a5S(g,q)
m=v
do{q=u[1]
o=u[d.x1--]
t&2&&B.B(u)
u[1]=o
d.a5S(g,1)
k=u[1]
o=--d.x2
u[o]=q;--o
d.x2=o
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
d.a5S(g,1)
if(d.x1>=2){m=i
continue}else break}while(!0)
u[--d.x2]=u[1]
h.b1D(d)
A.d2E(g,p,d.ry)}}
A.caM.prototype={}
A.bg2.prototype={
aT1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.length
for(x=0;x<k;++x){w=d[x]
if(w>l.b)l.b=w
if(w<l.c)l.c=w}w=l.b
v=D.c.eS(1,w)
u=new Uint32Array(v)
l.a=u
for(t=1,s=0,r=2;t<=w;){for(q=t<<16,x=0;x<k;++x)if(d[x]===t){for(p=s,o=0,n=0;n<t;++n){o=(o<<1|p&1)>>>0
p=p>>>1}for(m=(q|x)>>>0,n=o;n<v;n+=r)u[n]=m;++s}++t
s=s<<1>>>0
r=r<<1>>>0}}}
A.bh8.prototype={
b9G(){var x,w,v,u,t=this
t.e=t.d=0
if(!t.b)return
x=t.a
x===$&&B.b()
w=x.c
while(!0){v=x.b
u=x.e
u===$&&B.b()
if(!(v<w+u))break
if(!t.bfh())break}},
bfh(){var x,w=this,v=w.a
v===$&&B.b()
if(v.gP2())return!1
x=w.qG(3)
switch(D.c.R(x,1)){case 0:if(w.bfB()===-1)return!1
break
case 1:if(w.akF(w.r,w.w)===-1)return!1
break
case 2:if(w.bfl()===-1)return!1
break
default:return!1}return(x&1)===0},
qG(d){var x,w,v,u,t,s=this
if(d===0)return 0
for(x=s.a;w=s.e,w<d;){x===$&&B.b()
v=x.b
u=x.e
u===$&&B.b()
if(v>=x.c+u)return-1
x.b=v+1
t=x.a[v]
s.d=(s.d|D.c.eS(t,w))>>>0
s.e=w+8}x=s.d
v=D.c.er(1,d)
s.d=D.c.hB(x,d)
s.e=w-d
return(x&v-1)>>>0},
a5Y(d){var x,w,v,u,t,s,r,q,p=this,o=d.a
o===$&&B.b()
x=d.b
for(w=p.a;v=p.e,v<x;){w===$&&B.b()
u=w.b
t=w.e
t===$&&B.b()
if(u>=w.c+t)return-1
w.b=u+1
s=w.a[u]
p.d=(p.d|D.c.eS(s,v))>>>0
p.e=v+8}w=p.d
r=o[(w&D.c.eS(1,x)-1)>>>0]
q=r>>>16
p.d=D.c.hB(w,q)
p.e=v-q
return r&65535},
bfB(){var x,w,v=this
v.e=v.d=0
x=v.qG(16)
w=v.qG(16)
if(x!==0&&x!==(w^65535)>>>0)return-1
w=v.a
w===$&&B.b()
if(x>w.gu(0))return-1
v.c.bLn(w.l6(x))
return 0},
bfl(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.qG(5)
if(m===-1)return-1
m+=257
if(m>288)return-1
x=n.qG(5)
if(x===-1)return-1;++x
if(x>32)return-1
w=n.qG(4)
if(w===-1)return-1
w+=4
if(w>19)return-1
v=new Uint8Array(19)
for(u=0;u<w;++u){t=n.qG(3)
if(t===-1)return-1
v[C.Ba[u]]=t}s=A.aqa(v)
r=m+x
q=new Uint8Array(r)
p=J.d5(D.A.gag(q),0,m)
o=J.d5(D.A.gag(q),m,x)
if(n.aYI(r,s,q)===-1)return-1
return n.akF(A.aqa(p),A.aqa(o))},
akF(d,e){var x,w,v,u,t,s,r,q=this
for(x=q.c;!0;){w=q.a5Y(d)
if(w<0||w>285)return-1
if(w===256)break
if(w<256){x.b0(w&255)
continue}v=w-257
u=C.aBq[v]+q.qG(C.aCZ[v])
t=q.a5Y(e)
if(t<0||t>29)return-1
s=C.aBx[t]+q.qG(C.re[t])
for(r=-s;u>s;){x.mz(x.jZ(r))
u-=s}if(u===s)x.mz(x.jZ(r))
else x.mz(x.agP(r,u-s))}for(x=q.a;r=q.e,r>=8;){q.e=r-8
x===$&&B.b()
if(--x.b<0)x.b=0}return 0},
aYI(d,e,f){var x,w,v,u,t,s,r,q,p=this
for(x=f.$flags|0,w=0,v=0;v<d;){u=p.a5Y(e)
if(u===-1)return-1
t=0
switch(u){case 16:s=p.qG(2)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.B(f)
f[v]=w}break
case 17:s=p.qG(3)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.B(f)
f[v]=0}w=t
break
case 18:s=p.qG(7)
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
A.bLN.prototype={}
A.bLM.prototype={}
A.bLO.prototype={
azC(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=A.cop(1,32768)
m.b0(120)
for(x=0;w=(x|0)>>>0,(30720+w)%31!==0;)++x
m.b0(w)
v=A.dbu(d)
u=A.BU(d,1,null,0)
w=A.cqj()
t=A.cqj()
s=A.cqj()
r=new Uint16Array(16)
q=new Uint32Array(573)
p=new Uint8Array(573)
o=A.cop(0,32768)
r=new A.b5y(u,o,w,t,s,r,q,p)
if(e==null||e===-1)e=6
q=!0
q=e>9
if(q)B.a6(A.Wb("Invalid Deflate parameter"))
$.vx.b=r.b1V(e)
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
r.bY=16384
r.y1=49152
r.ok=e
r.w=r.x=r.p1=0
r.e=113
r.a=0
w.a=q
w.c=$.cKs()
t.a=p
t.c=$.cKr()
s.a=n
s.c=$.cKq()
r.Z=r.E=0
r.co=8
r.aom()
r.baV()
r.aZz(4)
r.Tb()
m.mz(y.L.a(J.d5(D.A.gag(o.c),0,o.a)))
m.ih(v)
w=J.d5(D.A.gag(m.c),0,m.a)
return w},
ka(d){return this.azC(d,null)}}
A.b_y.prototype={
J(){return"Channel."+this.b}}
A.hA.prototype={
q(){var x=this.b
return++this.a<x.gu(x)},
gL(d){return this.b.i(0,this.a)},
$ibp:1}
A.MO.prototype={
dY(d){return new A.MO(new Uint16Array(B.bU(this.a)))},
gdv(){return C.hL},
gu(d){return this.a.length},
geW(){return null},
i(d,e){var x,w=this.a
if(e<w.length){w=w[e]
x=$.hI
w=(x!=null?x:A.iC())[w]}else w=0
return w},
m(d,e,f){var x,w=this.a
if(e<w.length){x=A.fQ(f)
w.$flags&2&&B.B(w)
w[e]=x}},
gef(d){return this.gaz(0)},
gaz(d){var x,w=this.a
if(!D.dO.gT(w)){w=w[0]
x=$.hI
w=(x!=null?x:A.iC())[w]}else w=0
return w},
gaL(){var x,w=this.a
if(w.length>1){w=w[1]
x=$.hI
w=(x!=null?x:A.iC())[w]}else w=0
return w},
gaN(d){var x,w=this.a
if(w.length>2){w=w[2]
x=$.hI
w=(x!=null?x:A.iC())[w]}else w=0
return w},
gaO(d){var x,w=this.a
if(w.length>3){w=w[3]
x=$.hI
w=(x!=null?x:A.iC())[w]}else w=0
return w},
gjR(){return A.jw(this)},
iX(d,e){var x,w=e.gaz(e),v=this.a
if(!D.dO.gT(v)){w=A.fQ(w)
v.$flags&2&&B.B(v)
v[0]=w}w=e.gaL()
x=v.length
if(x>1){w=A.fQ(w)
v.$flags&2&&B.B(v)
v[1]=w}w=e.gaN(e)
if(x>2){w=A.fQ(w)
v.$flags&2&&B.B(v)
v[2]=w}w=e.gaO(e)
if(x>3){w=A.fQ(w)
v.$flags&2&&B.B(v)
v[3]=w}},
ga1(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aM(B.I(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
$idT:1}
A.MP.prototype={
dY(d){return new A.MP(new Float32Array(B.bU(this.a)))},
gdv(){return C.j7},
gu(d){return this.a.length},
geW(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x=this.a
if(e<x.length){x.$flags&2&&B.B(x)
x[e]=f}},
gef(d){var x=this.a
return!D.eZ.gT(x)?x[0]:0},
gaz(d){var x=this.a
return!D.eZ.gT(x)?x[0]:0},
gaL(){var x=this.a
return x.length>1?x[1]:0},
gaN(d){var x=this.a
return x.length>2?x[2]:0},
gaO(d){var x=this.a
return x.length>3?x[3]:1},
gjR(){return A.jw(this)},
iX(d,e){var x,w=e.gaz(e),v=this.a
if(!D.eZ.gT(v)){v.$flags&2&&B.B(v)
v[0]=w}w=e.gaL()
x=v.length
if(x>1){v.$flags&2&&B.B(v)
v[1]=w}w=e.gaN(e)
if(x>2){v.$flags&2&&B.B(v)
v[2]=w}w=e.gaO(e)
if(x>3){v.$flags&2&&B.B(v)
v[3]=w}},
ga1(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aM(B.I(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
$idT:1}
A.MQ.prototype={
dY(d){return new A.MQ(new Float64Array(B.bU(this.a)))},
gdv(){return C.kD},
gu(d){return this.a.length},
geW(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x=this.a
if(e<x.length){x.$flags&2&&B.B(x)
x[e]=f}},
gef(d){var x=this.a
return!D.e7.gT(x)?x[0]:0},
gaz(d){var x=this.a
return!D.e7.gT(x)?x[0]:0},
gaL(){var x=this.a
return x.length>1?x[1]:0},
gaN(d){var x=this.a
return x.length>2?x[2]:0},
gaO(d){var x=this.a
return x.length>3?x[3]:1},
gjR(){return A.jw(this)},
iX(d,e){var x,w=e.gaz(e),v=this.a
if(!D.e7.gT(v)){v.$flags&2&&B.B(v)
v[0]=w}w=e.gaL()
x=v.length
if(x>1){v.$flags&2&&B.B(v)
v[1]=w}w=e.gaN(e)
if(x>2){v.$flags&2&&B.B(v)
v[2]=w}w=e.gaO(e)
if(x>3){v.$flags&2&&B.B(v)
v[3]=w}},
ga1(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aM(B.I(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
$idT:1}
A.MR.prototype={
dY(d){return new A.MR(new Int16Array(B.bU(this.a)))},
gdv(){return C.kF},
gu(d){return this.a.length},
geW(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.D(f)
w.$flags&2&&B.B(w)
w[e]=x}},
gef(d){var x=this.a
return!D.jw.gT(x)?x[0]:0},
gaz(d){var x=this.a
return!D.jw.gT(x)?x[0]:0},
gaL(){var x=this.a
return x.length>1?x[1]:0},
gaN(d){var x=this.a
return x.length>2?x[2]:0},
gaO(d){var x=this.a
return x.length>3?x[3]:0},
gjR(){return A.jw(this)},
iX(d,e){var x,w=e.gaz(e),v=this.a
if(!D.jw.gT(v)){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[0]=w}w=e.gaL()
x=v.length
if(x>1){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[1]=w}w=e.gaN(e)
if(x>2){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[2]=w}w=e.gaO(e)
if(x>3){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[3]=w}},
ga1(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aM(B.I(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
$idT:1}
A.MS.prototype={
dY(d){return new A.MS(new Int32Array(B.bU(this.a)))},
gdv(){return C.kG},
gu(d){return this.a.length},
geW(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.D(f)
w.$flags&2&&B.B(w)
w[e]=x}},
gef(d){var x=this.a
return!D.ck.gT(x)?x[0]:0},
gaz(d){var x=this.a
return!D.ck.gT(x)?x[0]:0},
gaL(){var x=this.a
return x.length>1?x[1]:0},
gaN(d){var x=this.a
return x.length>2?x[2]:0},
gaO(d){var x=this.a
return x.length>3?x[3]:0},
gjR(){return A.jw(this)},
iX(d,e){var x,w=e.gaz(e),v=this.a
if(!D.ck.gT(v)){B.ba(w)
v.$flags&2&&B.B(v)
v[0]=w}w=e.gaL()
x=v.length
if(x>1){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[1]=w}w=e.gaN(e)
if(x>2){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[2]=w}w=e.gaO(e)
if(x>3){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[3]=w}},
ga1(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aM(B.I(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
$idT:1}
A.MT.prototype={
dY(d){return new A.MT(new Int8Array(B.bU(this.a)))},
gdv(){return C.kE},
gu(d){return this.a.length},
geW(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.D(f)
w.$flags&2&&B.B(w)
w[e]=x}},
gef(d){var x=this.a
return!D.jx.gT(x)?x[0]:0},
gaz(d){var x=this.a
return!D.jx.gT(x)?x[0]:0},
gaL(){var x=this.a
return x.length>1?x[1]:0},
gaN(d){var x=this.a
return x.length>2?x[2]:0},
gaO(d){var x=this.a
return x.length>3?x[3]:0},
gjR(){return A.jw(this)},
iX(d,e){var x,w=e.gaz(e),v=this.a
if(!D.jx.gT(v)){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[0]=w}w=e.gaL()
x=v.length
if(x>1){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[1]=w}w=e.gaN(e)
if(x>2){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[2]=w}w=e.gaO(e)
if(x>3){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[3]=w}},
ga1(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aM(B.I(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
$idT:1}
A.MW.prototype={
dY(d){var x=this.b
x===$&&B.b()
return new A.MW(this.a,x)},
gdv(){return C.fi},
geW(){return null},
F3(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.h_(x,7-d)&1}else x=0
return x},
KY(d,e){var x
if(d>=this.a)return
d=7-d
x=this.b
x===$&&B.b()
this.b=e!==0?(x|D.c.eS(1,d))>>>0:(x&~(D.c.eS(1,d)&255))>>>0},
i(d,e){return this.F3(e)},
m(d,e,f){return this.KY(e,f)},
gef(d){return this.F3(0)},
gaz(d){return this.F3(0)},
gaL(){return this.F3(1)},
gaN(d){return this.F3(2)},
gaO(d){return this.F3(3)},
gjR(){return A.jw(this)},
iX(d,e){this.ik(e.gaz(e),e.gaL(),e.gaN(e),e.gaO(e))},
ik(d,e,f,g){var x=this
x.KY(0,d)
x.KY(1,e)
x.KY(2,f)
x.KY(3,g)},
ga1(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a&&e.gv(e)===B.aM(B.I(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
$idT:1,
gu(d){return this.a}}
A.MX.prototype={
dY(d){return new A.MX(new Uint16Array(B.bU(this.a)))},
gdv(){return C.cc},
gu(d){return this.a.length},
geW(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.D(f)
w.$flags&2&&B.B(w)
w[e]=x}},
gef(d){var x=this.a
return!D.dO.gT(x)?x[0]:0},
gaz(d){var x=this.a
return!D.dO.gT(x)?x[0]:0},
gaL(){var x=this.a
return x.length>1?x[1]:0},
gaN(d){var x=this.a
return x.length>2?x[2]:0},
gaO(d){var x=this.a
return x.length>3?x[3]:0},
gjR(){return A.jw(this)},
iX(d,e){var x,w=e.gaz(e),v=this.a
if(!D.dO.gT(v)){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[0]=w}w=e.gaL()
x=v.length
if(x>1){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[1]=w}w=e.gaN(e)
if(x>2){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[2]=w}w=e.gaO(e)
if(x>3){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[3]=w}},
ga1(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aM(B.I(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
$idT:1}
A.MY.prototype={
dY(d){var x=this.b
x===$&&B.b()
return new A.MY(this.a,x)},
gdv(){return C.h4},
geW(){return null},
F4(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.h_(x,6-(d<<1>>>0))&3}else x=0
return x},
KZ(d,e){var x,w,v
if(d>=this.a)return
x=C.aru[d]
w=D.d.D(e)
v=this.b
v===$&&B.b()
this.b=(v&x|D.c.eS(w&3,6-(d<<1>>>0)))>>>0},
i(d,e){return this.F4(e)},
m(d,e,f){return this.KZ(e,f)},
gef(d){return this.F4(0)},
gaz(d){return this.F4(0)},
gaL(){return this.F4(1)},
gaN(d){return this.F4(2)},
gaO(d){return this.F4(3)},
gjR(){return A.jw(this)},
iX(d,e){this.ik(e.gaz(e),e.gaL(),e.gaN(e),e.gaO(e))},
ik(d,e,f,g){var x=this
x.KZ(0,d)
x.KZ(1,e)
x.KZ(2,f)
x.KZ(3,g)},
ga1(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a&&e.gv(e)===B.aM(B.I(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
$idT:1,
gu(d){return this.a}}
A.MZ.prototype={
dY(d){return new A.MZ(new Uint32Array(B.bU(this.a)))},
gdv(){return C.j8},
gu(d){return this.a.length},
geW(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.D(f)
w.$flags&2&&B.B(w)
w[e]=x}},
gef(d){var x=this.a
return!D.bq.gT(x)?x[0]:0},
gaz(d){var x=this.a
return!D.bq.gT(x)?x[0]:0},
gaL(){var x=this.a
return x.length>1?x[1]:0},
gaN(d){var x=this.a
return x.length>2?x[2]:0},
gaO(d){var x=this.a
return x.length>3?x[3]:0},
gjR(){return A.jw(this)},
iX(d,e){var x,w=e.gaz(e),v=this.a
if(!D.bq.gT(v)){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[0]=w}w=e.gaL()
x=v.length
if(x>1){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[1]=w}w=e.gaN(e)
if(x>2){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[2]=w}w=e.gaO(e)
if(x>3){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[3]=w}},
ga1(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aM(B.I(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
$idT:1}
A.N_.prototype={
dY(d){return new A.N_(this.a,new Uint8Array(B.bU(this.b)))},
gdv(){return C.h5},
geW(){return null},
F5(d){var x
if(d<0||d>=this.a)x=0
else{x=this.b
x=d<2?D.c.h_(x[0],4-(d<<2>>>0))&15:D.c.h_(x[1],4-((d&1)<<2))&15}return x},
L_(d,e){var x,w,v,u
if(d>=this.a)return
x=D.c.bc(D.d.D(e),0,15)
if(d>1){d&=1
w=1}else w=0
if(d===0){v=this.b
u=v[w]
v.$flags&2&&B.B(v)
v[w]=(u&15|x<<4)>>>0}else if(d===1){v=this.b
u=v[w]
v.$flags&2&&B.B(v)
v[w]=(u&240|x)>>>0}},
i(d,e){return this.F5(e)},
m(d,e,f){return this.L_(e,f)},
gef(d){return this.F5(0)},
gaz(d){return this.F5(0)},
gaL(){return this.F5(1)},
gaN(d){return this.F5(2)},
gaO(d){return this.F5(3)},
gjR(){return A.jw(this)},
iX(d,e){this.ik(e.gaz(e),e.gaL(),e.gaN(e),e.gaO(e))},
ik(d,e,f,g){var x=this
x.L_(0,d)
x.L_(1,e)
x.L_(2,f)
x.L_(3,g)},
ga1(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a&&e.gv(e)===B.aM(B.I(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
$idT:1,
gu(d){return this.a}}
A.xJ.prototype={
aSP(d,e,f,g){var x=this.a
x.$flags&2&&B.B(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g},
dY(d){return new A.xJ(new Uint8Array(B.bU(this.a)))},
gdv(){return C.a7},
gu(d){return this.a.length},
geW(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.D(f)
w.$flags&2&&B.B(w)
w[e]=x}},
gef(d){var x=this.a
return!D.A.gT(x)?x[0]:0},
gaz(d){var x=this.a
return!D.A.gT(x)?x[0]:0},
gaL(){var x=this.a
return x.length>1?x[1]:0},
gaN(d){var x=this.a
return x.length>2?x[2]:0},
gaO(d){var x=this.a
return x.length>3?x[3]:255},
gjR(){return A.jw(this)},
iX(d,e){var x,w=e.gaz(e),v=this.a
if(!D.A.gT(v)){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[0]=w}w=e.gaL()
x=v.length
if(x>1){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[1]=w}w=e.gaN(e)
if(x>2){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[2]=w}w=e.gaO(e)
if(x>3){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[3]=w}},
ga1(d){return new A.hA(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aM(B.I(this,!0,B.p(this).h("w.E")))},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
$idT:1}
A.ajJ.prototype={}
A.MU.prototype={}
A.ny.prototype={
J(){return"Format."+this.b}}
A.aiM.prototype={
J(){return"BlendMode."+this.b}}
A.O8.prototype={
Re(d){var x=$.clL()
if(!x.a3(0,d))return"<unknown>"
return x.i(0,d).a},
j(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(x=j.a,w=new B.ce(x,x.r,x.e,B.p(x).h("ce<1>")),v=y.p,u=y.r,t=y.N,s=y.P,r="";w.q();){q=w.d
r+=q+"\n"
p=x.i(0,q)
for(q=p.a,q=new B.ce(q,q.r,q.e,B.p(q).h("ce<1>"));q.q();){o=q.d
n=p.i(0,o)
r=n==null?r+("\t"+j.Re(o)+"\n"):r+("\t"+j.Re(o)+": "+n.j(0)+"\n")}for(q=p.b.a,o=new B.ce(q,q.r,q.e,B.p(q).h("ce<1>"));o.q();){m=o.d
r+=m+"\n"
if(!q.a3(0,m))q.m(0,m,new A.pS(B.H(v,u),new A.tZ(B.H(t,s))))
l=q.i(0,m)
for(m=l.a,m=new B.ce(m,m.r,m.e,B.p(m).h("ce<1>"));m.q();){k=m.d
n=l.i(0,k)
r=n==null?r+("\t"+j.Re(k)+"\n"):r+("\t"+j.Re(k)+": "+n.j(0)+"\n")}}}return r.charCodeAt(0)==0?r:r},
jt(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0="exif",a1="interop",a2=a4.b
a4.b=!0
a4.l8(19789)
a4.l8(42)
a4.ih(8)
x=d.a
if(x.i(0,"ifd0")==null)x.m(0,"ifd0",new A.pS(B.H(y.p,y.r),new A.tZ(B.H(y.N,y.P))))
w=y.N
v=y.p
u=B.H(w,v)
for(t=B.p(x),s=t.h("c0<1>"),r=new B.ce(x,x.r,x.e,t.h("ce<1>")),q=y.r,p=y.P,o=8;r.q();){n=r.d
m=x.i(0,n)
m.toString
u.m(0,n,o)
n=m.b.a
if(n.a3(0,a0)){l=new Uint32Array(1)
l[0]=0
m.m(0,34665,new A.ra(l))}else m.a.K(0,34665)
if(n.a3(0,a1)){l=new Uint32Array(1)
l[0]=0
m.m(0,40965,new A.ra(l))}else m.a.K(0,40965)
if(n.a3(0,"gps")){l=new Uint32Array(1)
l[0]=0
m.m(0,34853,new A.ra(l))}else m.a.K(0,34853)
m=m.a
o+=2+12*m.a+4
for(m=new B.bB(m,m.r,m.e,B.p(m).h("bB<2>"));m.q();){l=m.d
k=C.jl[l.ghM(l).a]*l.gu(l)
if(k>4)o+=k}for(m=new B.ce(n,n.r,n.e,B.p(n).h("ce<1>"));m.q();){l=m.d
if(!n.a3(0,l))n.m(0,l,new A.pS(B.H(v,q),new A.tZ(B.H(w,p))))
j=n.i(0,l)
j.toString
u.m(0,l,o)
j=j.a
i=2+12*j.a
for(l=new B.bB(j,j.r,j.e,B.p(j).h("bB<2>"));l.q();){j=l.d
k=C.jl[j.ghM(j).a]*j.gu(j)
if(k>4)i+=k}o+=i}}h=x.a
for(r=h-1,t=t.h("b5<2>"),g=0;g<h;++g){f=new B.c0(x,s).dL(0,g)
e=new B.b5(x,t).dL(0,g)
n=e.b.a
if(n.a3(0,a0)){m=e.i(0,34665)
m.toString
l=u.i(0,a0)
l.toString
m.vT(l)}if(n.a3(0,a1)){m=e.i(0,40965)
m.toString
l=u.i(0,a1)
l.toString
m.vT(l)}if(n.a3(0,"gps")){m=e.i(0,34853)
m.toString
l=u.i(0,"gps")
l.toString
m.vT(l)}m=u.i(0,f)
m.toString
d.avs(a4,e,m+2+12*e.a.a+4)
if(g===r)a4.ih(0)
else{m=u.i(0,new B.c0(x,s).dL(0,g+1))
m.toString
a4.ih(m)}d.avt(a4,e)
for(m=new B.ce(n,n.r,n.e,B.p(n).h("ce<1>"));m.q();){l=m.d
if(!n.a3(0,l))n.m(0,l,new A.pS(B.H(v,q),new A.tZ(B.H(w,p))))
j=n.i(0,l)
j.toString
l=u.i(0,l)
l.toString
d.avs(a4,j,l+2+12*j.a.a)
d.avt(a4,j)}}a4.b=a2},
avs(d,e,f){var x,w,v,u,t,s,r=e.a
d.l8(r.a)
for(r=new B.ce(r,r.r,r.e,B.p(r).h("ce<1>"));r.q();){x=r.d
w=e.i(0,x)
w.toString
v=x===273
u=v&&w.ghM(w)===C.hP?C.cM:w.ghM(w)
t=v&&w.ghM(w)===C.hP?1:w.gu(w)
d.l8(x)
d.l8(u.a)
d.ih(t)
s=C.jl[w.ghM(w).a]*w.gu(w)
if(s<=4){w.jt(0,d)
for(;s<4;){d.b0(0);++s}}else{d.ih(f)
f+=s}}return f},
avt(d,e){var x,w
for(x=e.a,x=new B.bB(x,x.r,x.e,B.p(x).h("bB<2>"));x.q();){w=x.d
if(C.jl[w.ghM(w).a]*w.gu(w)>4)w.jt(0,d)}},
qi(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a5.e
a5.e=!0
x=a5.d
w=a5.bP()
if(w===18761){a5.e=!1
if(a5.bP()!==42){a5.e=a3
return!1}}else if(w===19789){a5.e=!0
if(a5.bP()!==42){a5.e=a3
return!1}}else return!1
v=a5.an()
for(u=this.a,t=y.v,s=y.p,r=y.r,q=y.N,p=y.P,o=0;v>0;v=f){a5.d=x+v
n=new A.pS(B.H(s,r),new A.tZ(B.H(q,p)))
m=a5.bP()
l=B.a(new Array(m),t)
for(k=0;k<m;++k)l[k]=this.aqX(a5,x)
for(j=l.length,i=0;i<l.length;l.length===j||(0,B.R)(l),++i){h=l[i]
g=h.b
if(g!=null)n.m(0,h.a,g)}u.m(0,"ifd"+o,n);++o
f=a5.an()
if(f===v)break}for(u=new B.bB(u,u.r,u.e,B.p(u).h("bB<2>"));u.q();){j=u.d
for(g=J.aK(C.BC.gen(C.BC)),e=j.a,d=j.b.a;g.q();){a0=g.gL(g)
if(e.a3(0,a0)){a5.d=x+j.i(0,a0).D(0)
n=new A.pS(B.H(s,r),new A.tZ(B.H(q,p)))
m=a5.bP()
l=B.a(new Array(m),t)
for(k=0;k<m;++k)l[k]=this.aqX(a5,x)
for(a1=l.length,i=0;i<l.length;l.length===a1||(0,B.R)(l),++i){h=l[i]
a2=h.b
if(a2!=null)n.m(0,h.a,a2)}a0=C.BC.i(0,a0)
a0.toString
d.m(0,a0,n)}}}a5.e=a3
return!1},
aqX(d,e){var x,w,v,u,t=d.bP(),s=d.bP(),r=d.an(),q=new A.aIM(t,null)
if(s>13)return q
x=C.N2[s]
w=r*C.jl[s]
v=d.d
if((w>4?d.d=d.an()+e:v)+w>d.c)return q
u=d.l6(w)
switch(x.a){case 0:break
case 6:q.b=new A.vX(new Int8Array(B.bU(J.clT(D.A.gag(u.hL()),0,r))))
break
case 1:q.b=new A.tY(new Uint8Array(B.bU(u.l6(r).hL())))
break
case 7:q.b=new A.Hd(new Uint8Array(B.bU(u.l6(r).hL())))
break
case 2:q.b=new A.BG(r===0?"":u.qj(r-1))
break
case 3:q.b=A.cxz(u,r)
break
case 4:q.b=A.cxu(u,r)
break
case 5:q.b=A.cxv(u,r)
break
case 10:q.b=A.cxx(u,r)
break
case 8:q.b=A.cxy(u,r)
break
case 9:q.b=A.cxw(u,r)
break
case 11:q.b=A.cxB(u,r)
break
case 12:q.b=A.cxt(u,r)
break}d.d=v+4
return q}}
A.aIM.prototype={
gp(d){return this.b}}
A.anQ.prototype={}
A.tZ.prototype={
aT2(d){d.a.aR(0,new A.bgw(this))},
gfd(d){var x=this.a
return new B.b5(x,B.p(x).h("b5<2>"))},
gT(d){var x,w=this.a
if(w.a===0)return!0
for(w=new B.bB(w,w.r,w.e,B.p(w).h("bB<2>"));w.q();){x=w.d
if(!(x.a.a===0&&x.b.gT(0)))return!1}return!0},
a3(d,e){return this.a.a3(0,e)},
i(d,e){var x=this.a
if(!x.a3(0,e))x.m(0,e,new A.pS(B.H(y.p,y.r),new A.tZ(B.H(y.N,y.P))))
x=x.i(0,e)
x.toString
return x},
m(d,e,f){this.a.m(0,e,f)}}
A.pS.prototype={
gfd(d){var x=this.a
return new B.b5(x,B.p(x).h("b5<2>"))},
gT(d){return this.a.a===0&&this.b.gT(0)},
bu1(d){d.a.aR(0,new A.bgx(this))
d.b.a.aR(0,new A.bgy(this))},
a3(d,e){return this.a.a3(0,e)},
i(d,e){if(typeof e=="string")e=C.Xu.i(0,e)
if(B.hS(e))return this.a.i(0,e)
return null},
m(d,e,f){var x,w,v,u,t,s,r=this
if(typeof e=="string")e=C.Xu.i(0,e)
if(!B.hS(e))return
if(f==null)r.a.K(0,e)
else if(f instanceof A.k_)r.a.m(0,e,f)
else{x=$.clL().i(0,e)
if(x!=null)switch(x.b.a){case 1:if(y.L.b(f))r.a.m(0,e,new A.tY(new Uint8Array(B.bU(new Uint8Array(B.bU(f))))))
else if(B.hS(f)){w=new Uint8Array(1)
w[0]=f
r.a.m(0,e,new A.tY(w))}break
case 2:if(typeof f=="string")r.a.m(0,e,new A.BG(f))
break
case 3:if(y.L.b(f))r.a.m(0,e,new A.yi(new Uint16Array(B.bU(new Uint16Array(B.bU(f))))))
else if(B.hS(f))r.a.m(0,e,A.cTN(f))
break
case 4:if(y.L.b(f))r.a.m(0,e,new A.ra(new Uint32Array(B.bU(new Uint32Array(B.bU(f))))))
else if(B.hS(f))r.a.m(0,e,A.cTM(f))
break
case 5:if(y.k.b(f))r.a.m(0,e,new A.u_(B.b0(f,!0,y.i)))
else if(y.L.b(f)&&J.bl(f)===2){w=J.a2(f)
r.a.m(0,e,new A.u_(B.a([new A.nS(w.i(f,0),w.i(f,1))],y.j)))}else if(f instanceof A.nS)r.a.m(0,e,new A.u_(B.a([new A.nS(f.a,f.b)],y.j)))
else if(y.f.b(f)){w=J.a2(f)
v=w.gu(f)
u=y.i
t=J.kp(v,u)
for(s=0;s<v;++s)t[s]=new A.nS(J.v(w.i(f,s),0),J.v(w.i(f,s),1))
r.a.m(0,e,new A.u_(B.b0(t,!0,u)))}break
case 6:if(y.L.b(f))r.a.m(0,e,new A.vX(new Int8Array(B.bU(new Int8Array(B.bU(f))))))
else if(B.hS(f)){w=new Int8Array(1)
w[0]=f
r.a.m(0,e,new A.vX(w))}break
case 7:if(y.L.b(f))r.a.m(0,e,new A.Hd(new Uint8Array(B.bU(new Uint8Array(B.bU(f))))))
break
case 8:if(y.L.b(f))r.a.m(0,e,new A.yh(new Int16Array(B.bU(new Int16Array(B.bU(f))))))
else if(B.hS(f)){w=new Int16Array(1)
w[0]=f
r.a.m(0,e,new A.yh(w))}break
case 9:if(y.L.b(f))r.a.m(0,e,new A.yg(new Int32Array(B.bU(new Int32Array(B.bU(f))))))
else if(B.hS(f)){w=new Int32Array(1)
w[0]=f
r.a.m(0,e,new A.yg(w))}break
case 10:if(y.k.b(f))r.a.m(0,e,new A.u0(B.b0(f,!0,y.i)))
else if(y.L.b(f)&&J.bl(f)===2){w=J.a2(f)
r.a.m(0,e,new A.u0(B.a([new A.nS(w.i(f,0),w.i(f,1))],y.j)))}else if(f instanceof A.nS)r.a.m(0,e,new A.u0(B.a([f],y.j)))
else if(y.f.b(f)){w=J.a2(f)
v=w.gu(f)
u=y.i
t=J.kp(v,u)
for(s=0;s<v;++s)t[s]=new A.nS(J.v(w.i(f,s),0),J.v(w.i(f,s),1))
r.a.m(0,e,new A.u0(B.b0(t,!0,u)))}break
case 11:if(y.H.b(f))r.a.m(0,e,new A.BI(new Float32Array(B.bU(new Float32Array(B.bU(f))))))
else if(typeof f=="number")r.a.m(0,e,A.cxA(f))
else if(B.hS(f))r.a.m(0,e,A.cxA(f))
break
case 12:if(y.H.b(f))r.a.m(0,e,new A.BH(new Float64Array(B.bU(new Float64Array(B.bU(f))))))
else if(typeof f=="number")r.a.m(0,e,A.cxs(f))
else if(B.hS(f))r.a.m(0,e,A.cxs(f))
break
case 0:break}}},
gie(d){var x=this.a.i(0,274)
return x==null?null:x.D(0)},
sie(d,e){this.a.K(0,274)}}
A.mK.prototype={
J(){return"IfdValueType."+this.b}}
A.k_.prototype={
jb(d,e){return 0},
D(d){return this.jb(0,0)},
u1(d){return 0},
u0(){return new Uint8Array(0)},
j(d){return""},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.k_&&x.ghM(x)===e.ghM(e)&&x.gu(x)===e.gu(e)&&x.gv(x)===e.gv(e)},
gv(d){return 0},
vT(d){}}
A.tY.prototype={
dY(d){return new A.tY(new Uint8Array(B.bU(this.a)))},
ghM(d){return C.Jv},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.tY){x=this.a
x=x.length===e.a.length&&B.aM(x)===B.aM(e.a)}else x=!1
return x},
gv(d){return B.aM(this.a)},
jb(d,e){return this.a[e]},
D(d){return this.jb(0,0)},
vT(d){var x=this.a
x.$flags&2&&B.B(x)
x[0]=d},
u0(){return this.a},
jt(d,e){e.mz(this.a)},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.BG.prototype={
dY(d){return new A.BG(this.a)},
ghM(d){return C.bC},
gu(d){return this.a.length+1},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.BG){x=this.a
x=x.length+1===e.a.length+1&&D.e.gv(x)===D.e.gv(e.a)}else x=!1
return x},
gv(d){return D.e.gv(this.a)},
u0(){return new Uint8Array(B.bU(new B.e8(this.a)))},
jt(d,e){e.mz(new B.e8(this.a))
e.b0(0)},
j(d){return this.a},
gp(d){return this.a}}
A.yi.prototype={
aT7(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.bP()
w.$flags&2&&B.B(w)
w[x]=v}},
dY(d){return new A.yi(new Uint16Array(B.bU(this.a)))},
ghM(d){return C.bi},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.yi){x=this.a
x=x.length===e.a.length&&B.aM(x)===B.aM(e.a)}else x=!1
return x},
gv(d){return B.aM(this.a)},
jb(d,e){return this.a[e]},
D(d){return this.jb(0,0)},
vT(d){var x=this.a
x.$flags&2&&B.B(x)
x[0]=d},
u0(){return J.hw(D.dO.gag(this.a))},
jt(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.l8(this.a[x])},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.ra.prototype={
aT4(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.an()
w.$flags&2&&B.B(w)
w[x]=v}},
dY(d){return new A.ra(new Uint32Array(B.bU(this.a)))},
ghM(d){return C.cM},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.ra){x=this.a
x=x.length===e.a.length&&B.aM(x)===B.aM(e.a)}else x=!1
return x},
gv(d){return B.aM(this.a)},
jb(d,e){return this.a[e]},
D(d){return this.jb(0,0)},
vT(d){var x=this.a
x.$flags&2&&B.B(x)
x[0]=d},
u0(){return J.hw(D.bq.gag(this.a))},
jt(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.ih(this.a[x])},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.u_.prototype={
dY(d){return new A.u_(B.b0(this.a,!0,y.i))},
ghM(d){return C.e4},
gu(d){return this.a.length},
jb(d,e){return this.a[e].D(0)},
D(d){return this.jb(0,0)},
u1(d){return this.a[0].u1(0)},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.u_){x=this.a
x=x.length===e.a.length&&B.aM(x)===B.aM(e.a)}else x=!1
return x},
gv(d){return B.aM(this.a)},
jt(d,e){var x,w,v,u
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.R)(x),++v){u=x[v]
e.ih(u.a)
e.ih(u.b)}},
j(d){var x=this.a
return x.length===1?x[0].j(0):B.o(x)},
gp(d){return this.a}}
A.vX.prototype={
dY(d){return new A.vX(new Int8Array(B.bU(this.a)))},
ghM(d){return C.Jz},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.vX){x=this.a
x=x.length===e.a.length&&B.aM(x)===B.aM(e.a)}else x=!1
return x},
gv(d){return B.aM(this.a)},
jb(d,e){return this.a[e]},
D(d){return this.jb(0,0)},
vT(d){var x=this.a
x.$flags&2&&B.B(x)
x[0]=d},
u0(){return J.hw(D.jx.gag(this.a))},
jt(d,e){e.mz(J.d5(D.jx.gag(this.a),0,null))},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.yh.prototype={
aT6(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.bP()
u=$.qJ()
u.$flags&2&&B.B(u)
u[0]=v
v=$.tj()[0]
w.$flags&2&&B.B(w)
w[x]=v}},
dY(d){return new A.yh(new Int16Array(B.bU(this.a)))},
ghM(d){return C.JA},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.yh){x=this.a
x=x.length===e.a.length&&B.aM(x)===B.aM(e.a)}else x=!1
return x},
gv(d){return B.aM(this.a)},
jb(d,e){return this.a[e]},
D(d){return this.jb(0,0)},
vT(d){var x=this.a
x.$flags&2&&B.B(x)
x[0]=d},
u0(){return J.hw(D.jw.gag(this.a))},
jt(d,e){var x,w=new Int16Array(1),v=J.clU(D.jw.gag(w),0,null),u=this.a.length
for(x=0;x<u;++x){w[0]=this.a[x]
e.l8(v[0])}},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.yg.prototype={
aT5(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.an()
u=$.hY()
u.$flags&2&&B.B(u)
u[0]=v
v=$.lD()[0]
w.$flags&2&&B.B(w)
w[x]=v}},
dY(d){return new A.yg(new Int32Array(B.bU(this.a)))},
ghM(d){return C.JB},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.yg){x=this.a
x=x.length===e.a.length&&B.aM(x)===B.aM(e.a)}else x=!1
return x},
gv(d){return B.aM(this.a)},
jb(d,e){return this.a[e]},
D(d){return this.jb(0,0)},
vT(d){var x=this.a
x.$flags&2&&B.B(x)
x[0]=d},
u0(){return J.hw(D.ck.gag(this.a))},
jt(d,e){var x,w,v,u=this.a.length
for(x=0;x<u;++x){w=this.a[x]
v=$.aV1()
v.$flags&2&&B.B(v)
v[0]=w
e.ih($.clD()[0])}},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.u0.prototype={
dY(d){return new A.u0(B.b0(this.a,!0,y.i))},
ghM(d){return C.Jw},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.u0){x=this.a
x=x.length===e.a.length&&B.aM(x)===B.aM(e.a)}else x=!1
return x},
gv(d){return B.aM(this.a)},
jb(d,e){return this.a[e].D(0)},
D(d){return this.jb(0,0)},
u1(d){return this.a[0].u1(0)},
jt(d,e){var x,w,v,u,t,s
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.R)(x),++v){u=x[v]
t=$.aV1()
t.$flags&2&&B.B(t)
t[0]=u.a
s=$.clD()
e.ih(s[0])
t[0]=u.b
e.ih(s[0])}},
j(d){var x=this.a
return x.length===1?x[0].j(0):B.o(x)},
gp(d){return this.a}}
A.BI.prototype={
aT8(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.an()
u=$.hY()
u.$flags&2&&B.B(u)
u[0]=v
v=$.Fh()[0]
w.$flags&2&&B.B(w)
w[x]=v}},
dY(d){return new A.BI(new Float32Array(B.bU(this.a)))},
ghM(d){return C.Jx},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.BI){x=this.a
x=x.length===e.a.length&&B.aM(x)===B.aM(e.a)}else x=!1
return x},
gv(d){return B.aM(this.a)},
u0(){return J.hw(D.eZ.gag(this.a))},
u1(d){return this.a[0]},
jt(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.bLk(this.a[x])},
j(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gp(d){return this.a}}
A.BH.prototype={
aT3(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.a_C()
w.$flags&2&&B.B(w)
w[x]=v}},
dY(d){return new A.BH(new Float64Array(B.bU(this.a)))},
ghM(d){return C.Jy},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.BH){x=this.a
x=x.length===e.a.length&&B.aM(x)===B.aM(e.a)}else x=!1
return x},
gv(d){return B.aM(this.a)},
u1(d){return this.a[0]},
u0(){return J.hw(D.e7.gag(this.a))},
jt(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.bLl(this.a[x])},
j(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gp(d){return this.a}}
A.Hd.prototype={
dY(d){return new A.Hd(new Uint8Array(B.bU(this.a)))},
ghM(d){return C.hP},
gu(d){return this.a.length},
u0(){return this.a},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.Hd){x=this.a
x=x.length===e.a.length&&B.aM(x)===B.aM(e.a)}else x=!1
return x},
gv(d){return B.aM(this.a)},
jt(d,e){e.mz(this.a)},
j(d){return"<data>"},
gp(d){return this.a}}
A.lK.prototype={
J(){return"BmpCompression."+this.b}}
A.aZj.prototype={}
A.FA.prototype={
ai7(d,e){var x,w,v,u,t,s,r,q=this,p=q.d,o=p<=40
if(o){x=q.r
x=x===C.y8||x===C.y9}else x=!0
if(x){x=q.as=d.an()
w=A.cjg(x)
q.CW=w
v=D.c.h_(x,w)
x=v>0
q.cx=x?255/v:0
w=q.at=d.an()
u=A.cjg(w)
q.cy=u
t=D.c.h_(w,u)
q.db=x?255/t:0
w=q.ax=d.an()
u=A.cjg(w)
q.dx=u
s=D.c.h_(w,u)
q.dy=x?255/s:0
if(!o||q.r===C.y9){o=q.ay=d.an()
x=A.cjg(o)
q.fr=x
r=D.c.h_(o,x)
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
if(q.f<=8)q.bIr(d)},
gOQ(){var x=this.d
if(x!==40)if(x===124){x=this.ay
x===$&&B.b()
x=x===0}else x=!1
else x=!0
return x},
gb5(d){return Math.abs(this.c)},
bIr(d){var x,w,v,u,t,s=this,r=s.z
if(r===0)r=D.c.er(1,s.f)
s.ch=new A.uh(new Uint8Array(r*3),r,3)
for(x=0;x<r;++x){w=J.v(d.a,d.d++)
v=J.v(d.a,d.d++)
u=J.v(d.a,d.d++)
t=J.v(d.a,d.d++)
s.ch.RQ(x,u,v,w,t)}},
bwd(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(o.ch!=null){x=o.f
if(x===1){w=d.dg()
for(v=7;v>=0;--v)e.$4(D.c.o_(w,v)&1,0,0,0)
return}else if(x===2){w=d.dg()
for(v=6;v>=0;v-=2)e.$4(D.c.o_(w,v)&2,0,0,0)}else if(x===4){w=d.dg()
e.$4(D.c.R(w,4)&15,0,0,0)
e.$4(w&15,0,0,0)
return}else if(x===8){e.$4(d.dg(),0,0,0)
return}}x=o.r
if(x===C.y8&&o.f===32){u=d.an()
x=o.as
x===$&&B.b()
t=o.CW
t===$&&B.b()
t=D.c.h_((u&x)>>>0,t)
x=o.cx
x===$&&B.b()
s=D.d.D(t*x)
x=o.at
x===$&&B.b()
t=o.cy
t===$&&B.b()
t=D.c.h_((u&x)>>>0,t)
x=o.db
x===$&&B.b()
r=D.d.D(t*x)
x=o.ax
x===$&&B.b()
t=o.dx
t===$&&B.b()
t=D.c.h_((u&x)>>>0,t)
x=o.dy
x===$&&B.b()
q=D.d.D(t*x)
if(o.gOQ())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.h_((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.d.D(t*x)}return e.$4(s,r,q,p)}else{t=o.f
if(t===32&&x===C.Fh){q=d.dg()
r=d.dg()
s=d.dg()
p=d.dg()
return e.$4(s,r,q,o.gOQ()?255:p)}else if(t===24){q=d.dg()
r=d.dg()
return e.$4(d.dg(),r,q,255)}else if(t===16){u=d.bP()
x=o.as
x===$&&B.b()
t=o.CW
t===$&&B.b()
t=D.c.h_((u&x)>>>0,t)
x=o.cx
x===$&&B.b()
s=D.d.D(t*x)
x=o.at
x===$&&B.b()
t=o.cy
t===$&&B.b()
t=D.c.h_((u&x)>>>0,t)
x=o.db
x===$&&B.b()
r=D.d.D(t*x)
x=o.ax
x===$&&B.b()
t=o.dx
t===$&&B.b()
t=D.c.h_((u&x)>>>0,t)
x=o.dy
x===$&&B.b()
q=D.d.D(t*x)
if(o.gOQ())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.h_((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.d.D(t*x)}return e.$4(s,r,q,p)}else throw B.l(A.c6("Unsupported bitsPerPixel ("+t+") or compression ("+x.j(0)+")."))}}}
A.aiQ.prototype={
oA(d){var x,w=null
if(!A.cmm(A.cT(d,!1,w,0)))return w
x=A.cT(d,!1,w,0)
this.a=x
return this.b=A.cOH(x,w)},
k9(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b
if(e==null)return new A.BL(f,f,f,f,0,C.bm,0,0)
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
t=s}if(x)r=C.a7
else if(v===1)r=C.fi
else{if(v===2)s=C.h4
else if(v===4)s=C.h5
else s=C.a7
r=s}q=x?f:e.ch
p=A.hK(f,f,r,0,C.bm,e.gb5(e),f,0,t,q,C.a7,w,!1)
for(o=p.gb5(0)-1,x=e.c,w=1/x<0,s=x<0,x=x===0;o>=0;--o){n={}
if(!(x?w:s))m=o
else{l=p.a
l=l==null?f:l.b
m=(l==null?0:l)-1-o}l=g.a
k=l.jZ(u)
l.d=l.d+(k.c-k.d)
l=p.a
j=l==null
i=j?f:l.a
if(i==null)i=0
n.a=0
h=j?f:l.el(0,m,f)
if(h==null)h=new A.fn()
for(;n.a<i;)e.bwd(k,new A.aZi(n,g,i,e,h))}return p},
nA(d,e,f){if(this.oA(e)==null)return null
return this.k9(0)}}
A.b6y.prototype={}
A.b5h.prototype={}
A.b5i.prototype={}
A.b8U.prototype={}
A.anR.prototype={}
A.aqO.prototype={
Px(){return this.w},
rO(d,e,f,g,h){throw B.l(A.c6("B44 compression not yet supported."))},
Jt(d,e,f){return this.rO(d,e,f,null,null)},
j(d){return B.o(this.r)+" "+this.x}}
A.Oa.prototype={
J(){return"ExrChannelType."+this.b}}
A.Gy.prototype={
J(){return"ExrChannelName."+this.b}}
A.anS.prototype={
gbw2(){var x=this.c
x===$&&B.b()
return x},
aST(d){var x=this,w=d.Qc()
x.a=w
if(w.length===0)return
x.c=C.aum[d.an()]
d.dg()
d.d+=3
x.f=d.an()
x.r=d.an()
w=x.a
if(w==="R"){x.w=!0
x.b=C.akd}else if(w==="G"){x.w=!0
x.b=C.ake}else if(w==="B"){x.w=!0
x.b=C.akf}else if(w==="A"){x.w=!0
x.b=C.akg}else{x.w=!1
x.b=C.akh}switch(x.c.a){case 0:x.d=4
break
case 1:x.d=2
break
case 2:x.d=4
break
default:throw B.l(A.c6("EXR Invalid pixel type: "+x.gbw2().j(0)))}}}
A.tO.prototype={
J(){return"ExrCompressorType."+this.b}}
A.ba0.prototype={
rO(d,e,f,g,h){throw B.l(A.c6("Unsupported compression type"))},
Jt(d,e,f){return this.rO(d,e,f,null,null)}}
A.bhC.prototype={}
A.anT.prototype={}
A.ba2.prototype={
aSU(d){var x,w,v,u,t=this,s=A.cT(d,!1,null,0)
if(s.an()!==20000630)throw B.l(A.c6("File is not an OpenEXR image file."))
x=t.d=s.dg()
if(x!==2)throw B.l(A.c6("Cannot read version "+x+" image files."))
x=t.e=s.rH()
if((x&4294967289)>>>0!==0)throw B.l(A.c6("The file format version number's flag field contains unrecognized flags."))
if((x&16)===0){w=t.c
v=A.cxS(w.length,(x&2)!==0,s)
if(v.w>0)w.push(v)}else for(x=t.c;!0;){v=A.cxS(x.length,(t.e&2)!==0,s)
if(v.w<=0)break
x.push(v)}x=t.c
w=x.length
if(w===0)throw B.l(A.c6("Error reading image header"))
for(u=0;u<x.length;x.length===w||(0,B.R)(x),++u)x[u].bIq(s)
t.bhS(s)},
bhS(d){var x,w,v,u,t=this
for(x=t.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.R)(x),++v){u=x[v]
t.a=Math.max(t.a,u.w)
t.b=Math.max(t.b,u.x)
if(u.db)t.bi_(u,d)
else t.bhY(u,d)}},
bi_(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.e
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
if(x)if(u.an()!==s)throw B.l(A.c6("Invalid Image Data"))
k=u.an()
j=u.an()
u.an()
u.an()
i=u.jZ(u.an())
u.d=u.d+(i.c-i.d)
h=b4.dy
h.toString
g=j*h
f=b4.dx
f.toString
h=w.rO(i,k*f,g,f,h)
e=h.length
d=new A.lU(h,0,e,0,!1)
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
switch(h.a){case 1:h=d.bP()
f=$.hI
a9=(f!=null?f:A.iC())[h]
break
case 2:a9=d.bP()
break
case 0:a9=d.an()
break
default:a9=b2}h=a6.d
h===$&&B.b()
a3+=h
h=a6.w
h===$&&B.b()
if(h){h=b3.a
b0=h==null?b2:h.el(a7,g,b2)
if(b0==null)b0=new A.fn()
h=a6.b
h===$&&B.b()
b0.m(0,h.a,a9)}else{h=a6.a
h===$&&B.b()
f=b3.b
b1=f!=null?f.i(0,h):b2
if(b1!=null)b1.fe(a7,g,a9,0,0)}}}++a4;++g}}++o;++q}++r}},
bhY(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=this.e
a5===$&&B.b()
x=(a5&16)!==0
a5=a6.b
a5.toString
w=a6.CW
v=a6.ay[0]
u=a6.cx
t=A.cb(a7,a4,0)
for(s=v.length,r=a6.c,q=w!=null,p=0,o=0;o<s;++o){t.d=v[o]
if(x)if(t.an()!==3.141592653589793)throw B.l(A.c6("Invalid Image Data"))
n=t.an()
m=$.hY()
m.$flags&2&&B.B(m)
m[0]=n
n=$.lD()
m[0]=t.an()
l=t.jZ(n[0])
t.d=t.d+(l.c-l.d)
if(q){n=w.Jt(l,0,p)
k=new A.lU(n,0,n.length,0,!1)}else k=l
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
switch(n.a){case 1:n=k.bP()
m=$.hI
a1=(m!=null?m:A.iC())[n]
break
case 2:a1=k.bP()
break
case 0:a1=k.an()
break
default:a1=a4}n=e.d
n===$&&B.b()
g+=n
n=e.w
n===$&&B.b()
if(n){n=a5.a
a2=n==null?a4:n.el(a0,p,a4)
if(a2==null)a2=new A.fn()
n=e.b
n===$&&B.b()
a2.m(0,n.a,a1)}else{n=e.a
n===$&&B.b()
m=a5.b
a3=m!=null?m.i(0,n):a4
if(a3!=null)a3.fe(a0,p,a1,0,0)}}}++h;++p}}}}
A.Zv.prototype={
aSV(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=B.H(y.N,y.I)
for(x=a2.e,w=y.t,v=a2.c,u=C.hL;!0;){t=a7.Qc()
if(t.length===0)break
s=a7.Qc()
r=a7.an()
q=a7.jZ(r)
a7.d=a7.d+(q.c-q.d)
x.m(0,t,new A.anR(t,s,r))
switch(t){case"channels":for(;!0;){p=new A.anS()
p.aST(q)
o=p.a
o===$&&B.b()
if(o.length===0)break
n=p.w
n===$&&B.b()
if(n){++a2.d
o=p.c
o===$&&B.b()
if(o===C.zH)u=C.hL
else u=o===C.zI?C.j7:C.j8}else{n=p.c
n===$&&B.b()
if(n===C.zH){n=a2.w
m=a2.x
a4.m(0,o,new A.ON(new Uint16Array(n*m),n,m,1))}else if(n===C.zI){n=a2.w
m=a2.x
a4.m(0,o,new A.OO(new Float32Array(n*m),n,m,1))}else if(n===C.Ir){n=a2.w
m=a2.x
a4.m(0,o,new A.OS(new Uint32Array(n*m),n,m,1))}}v.push(p)}break
case"chromaticities":o=new Float32Array(8)
a2.at=o
n=q.an()
m=$.hY()
m.$flags&2&&B.B(m)
m[0]=n
n=$.Fh()
o[0]=n[0]
o=a2.at
m[0]=q.an()
l=n[0]
o.$flags&2&&B.B(o)
o[1]=l
l=a2.at
m[0]=q.an()
o=n[0]
l.$flags&2&&B.B(l)
l[2]=o
o=a2.at
m[0]=q.an()
l=n[0]
o.$flags&2&&B.B(o)
o[3]=l
l=a2.at
m[0]=q.an()
o=n[0]
l.$flags&2&&B.B(l)
l[4]=o
o=a2.at
m[0]=q.an()
l=n[0]
o.$flags&2&&B.B(o)
o[5]=l
l=a2.at
m[0]=q.an()
o=n[0]
l.$flags&2&&B.B(l)
l[6]=o
o=a2.at
m[0]=q.an()
n=n[0]
o.$flags&2&&B.B(o)
o[7]=n
break
case"compression":a2.ax=C.awN[J.v(q.a,q.d++)]
break
case"dataWindow":o=q.an()
n=$.hY()
n.$flags&2&&B.B(n)
n[0]=o
o=$.lD()
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
n=$.hY()
n.$flags&2&&B.B(n)
n[0]=o
$.lD()
n[0]=q.an()
n[0]=q.an()
n[0]=q.an()
break
case"lineOrder":break
case"pixelAspectRatio":o=q.an()
n=$.hY()
n.$flags&2&&B.B(n)
n[0]=o
$.Fh()
break
case"screenWindowCenter":o=q.an()
n=$.hY()
n.$flags&2&&B.B(n)
n[0]=o
$.Fh()
n[0]=q.an()
break
case"screenWindowWidth":o=q.an()
n=$.hY()
n.$flags&2&&B.B(n)
n[0]=o
$.Fh()
break
case"tiles":a2.dx=q.an()
a2.dy=q.an()
j=J.v(q.a,q.d++)
a2.fr=j&15
a2.fx=D.c.R(j,4)&15
break
case"type":i=q.Qc()
if(i!=="deepscanline")if(i!=="deeptile")throw B.l(A.c6("EXR Invalid type: "+i))
break
default:break}}x=a2.w
a2.b=A.hK(a3,a3,u,0,C.bm,a2.x,a3,0,a2.d,a3,C.a7,x,!1)
for(x=new B.ce(a4,a4.r,a4.e,a4.$ti.h("ce<1>"));x.q();){w=x.d
o=a2.b
o.toString
n=a4.i(0,w)
n.toString
o.aKf(w,n)}if(a2.db){x={}
w=a2.r
w===$&&B.b()
a2.id=a2.aWz(w[0],w[2],w[1],w[3])
w=a2.r
a2.k1=a2.aWA(w[0],w[2],w[1],w[3])
if(a2.fr!==2)a2.k1=1
w=a2.id
w.toString
v=a2.r
a2.fy=a2.aju(w,v[0],v[2],a2.dx,a2.fx)
v=a2.k1
v.toString
w=a2.r
a2.go=a2.aju(v,w[1],w[3],a2.dy,a2.fx)
w=a2.aWx()
a2.k2=w
v=a2.dx
v.toString
v=w*v
a2.k3=v
a2.CW=A.cwz(a2.ax,a2,v,a2.dy)
x.a=x.b=0
v=a2.id
v.toString
w=a2.k1
w.toString
a2.ay=B.w1(v*w,new A.ba3(x,a2),!0,y.bk)}else{x=a2.x
w=a2.ch=new Uint32Array(x+1)
for(o=v.length,n=a2.r,m=a2.w,h=0;h<o;++h){g=v[h]
l=g.d
l===$&&B.b()
k=g.f
k===$&&B.b()
f=D.c.hw(l*m,k)
for(l=g.r,e=0;e<x;++e){n===$&&B.b()
k=n[1]
l===$&&B.b()
if(D.c.ap(e+k,l)===0)w[e]=w[e]+f}}for(d=0,e=0;e<x;++e)d=Math.max(d,w[e])
x=A.cwz(a2.ax,a2,d,a3)
a2.CW=x
x=a2.cx=x.Px()
w=a2.ch
v=w.length
o=new Uint32Array(v)
a2.cy=o
for(--v,a0=0,a1=0;a1<=v;++a1){if(D.c.ap(a1,x)===0)a0=0
o[a1]=a0
a0+=w[a1]}x=D.c.hw(a2.x+x,x)
a2.ay=B.a([new Uint32Array(x-1)],y.w)}},
aWz(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.TB(w):u.ST(w))+1
break
case 2:v=e-d+1
x=(u.fx===0?u.TB(v):u.ST(v))+1
break
default:throw B.l(A.c6("Unknown LevelMode format."))}return x},
aWA(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.TB(w):u.ST(w))+1
break
case 2:v=g-f+1
x=(u.fx===0?u.TB(v):u.ST(v))+1
break
default:throw B.l(A.c6("Unknown LevelMode format."))}return x},
TB(d){var x
for(x=0;d>1;){++x
d=D.c.R(d,1)}return x},
ST(d){var x,w
for(x=0,w=0;d>1;){if((d&1)!==0)w=1;++x
d=D.c.R(d,1)}return x+w},
aWx(){var x,w,v,u,t
for(x=this.c,w=x.length,v=0,u=0;u<w;++u){t=x[u].d
t===$&&B.b()
v+=t}return v},
aju(d,e,f,g,h){var x,w,v,u,t,s,r=J.j_(d,y.p)
for(x=h===1,w=f-e+1,v=0;v<d;++v){u=D.c.er(1,v)
t=D.c.hw(w,u)
if(x&&t*u<w)++t
s=Math.max(t,1)
g.toString
r[v]=D.c.hw(s+g-1,g)}return r}}
A.aqP.prototype={
bIq(d){var x,w,v,u,t,s=this
if(s.db)for(x=0;x<s.ay.length;++x)for(w=0;v=s.ay[x],w<v.length;++w){u=d.adg()
v.$flags&2&&B.B(v)
v[w]=u}else{t=s.ay[0].length
for(x=0;x<t;++x){v=s.ay[0]
u=d.adg()
v.$flags&2&&B.B(v)
v[x]=u}}}}
A.bhD.prototype={
aTe(d,e,f){var x,w,v,u=this,t=d.c.length,s=J.j_(t,y.bc)
for(x=0;x<t;++x)s[x]=new A.aLO()
u.y=s
w=u.w
w.toString
v=D.c.b7(w*u.x,2)
u.z=new Uint16Array(v)},
Px(){return this.x},
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
n=D.c.hw(a5,v)
m=D.c.hw(x,v)
v=n*v<a5?0:1
v=m-n+v
o.c=v
u=p.r
u===$&&B.b()
n=D.c.hw(a6,u)
m=D.c.hw(w,u)
l=n*u<a6?0:1
l=m-n+l
o.d=l
o.e=u
u=p.d
u===$&&B.b()
u=u/2|0
o.f=u
r+=v*l*u}k=a4.bP()
j=a4.bP()
if(j>=8192)throw B.l(A.c6("Error in header for PIZ-compressed data (invalid bitmap size)."))
i=new Uint8Array(8192)
if(k<=j){h=a4.l6(j-k+1)
g=h.c-h.d
for(f=k,q=0;q<g;++q,f=e){e=f+1
i[f]=J.v(h.a,h.d+q)}}d=new Uint16Array(65536)
a0=a3.bje(i,d)
A.cS5(a4,a4.an(),a3.z,r)
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
A.cS8(u,l+f,a1,v,a2,a1*v,a0);++f}}v=a3.z
v.toString
a3.aV5(d,v,r)
v=a3.r
if(v==null){v=a3.w
v.toString
v=a3.r=A.q9(!1,v*a3.x+73728)}v.a=0
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
v.l8(u[l])}}v=a3.r
return J.d5(D.A.gag(v.c),0,v.a)},
Jt(d,e,f){return this.rO(d,e,f,null,null)},
aV5(d,e,f){var x,w,v
for(x=e.$flags|0,w=0;w<f;++w){v=d[e[w]]
x&2&&B.B(e)
e[w]=v}},
bje(d,e){var x,w,v,u,t
for(x=e.$flags|0,w=0,v=0;v<65536;++v)if(v===0||(d[v>>>3]&1<<(v&7))>>>0!==0){u=w+1
x&2&&B.B(e)
e[w]=v
w=u}for(u=w;u<65536;u=t){t=u+1
x&2&&B.B(e)
e[u]=0}return w-1}}
A.aLO.prototype={}
A.bhE.prototype={
Px(){return this.x},
rO(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=C.iX.Cu(A.BU(a0.hL(),1,null,0),!1),d=f.y
if(d==null){d=f.w
d.toString
d=f.y=A.q9(!1,f.x*d)}d.a=0
x=B.a([0,0,0,0],y.t)
w=new Uint32Array(1)
v=J.d5(D.bq.gag(w),0,null)
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
m=D.c.hw(a1,s)
l=D.c.hw(u,s)
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
return J.d5(D.A.gag(d.c),0,d.a)},
Jt(d,e,f){return this.rO(d,e,f,null,null)}}
A.bhF.prototype={
Px(){return 1},
rO(d,e,f,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.c,g=A.q9(!1,(h-d.d)*2)
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
u=$.op()
u.$flags&2&&B.B(u)
u[0]=v
t=$.pA()[0]
if(t<0){s=-t
for(;r=s-1,s>0;s=r)g.b0(J.v(d.a,d.d++))}else for(s=t;r=s-1,s>=0;s=r)g.b0(J.v(d.a,d.d++))}q=J.d5(D.A.gag(g.c),0,g.a)
p=q.length
for(h=q.$flags|0,o=1;o<p;++o){v=q[o-1]
u=q[o]
h&2&&B.B(q)
q[o]=v+u-128}h=i.r
if(h==null||h.length!==p)h=i.r=new Uint8Array(p)
v=D.c.b7(p+1,2)
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
Jt(d,e,f){return this.rO(d,e,f,null,null)},
j(d){return B.o(this.w)}}
A.aqQ.prototype={
Px(){return this.x},
rO(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=C.iX.Cu(A.BU(d.hL(),1,null,0),!1)
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
u=D.c.b7(t+1,2)
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
Jt(d,e,f){return this.rO(d,e,f,null,null)},
j(d){return B.o(this.w)}}
A.ba1.prototype={
k9(d){var x=this.a
if(x==null)return null
return x.c[d].b},
nA(d,e,f){var x=new A.ba2(B.a([],y.m))
x.aSU(e)
this.a=x
return this.k9(0)}}
A.a_6.prototype={
byI(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.b,w=this.d,v=-1,u=-1,t=0;t<x;++t){s=w.nc(t)
r=w.na(t)
q=w.n9(t)
p=w.ov(t)
if(s===d&&r===e&&q===f&&p===g)return t
o=d-s
n=e-r
m=f-q
l=g-p
k=o*o+n*n+m*m+l*l
if(u===-1){u=t
v=k}else if(k<v){u=t
v=k}}return u},
af7(){var x,w,v,u,t,s,r,q=this
if(q.c==null)return q.d
x=q.d
w=x.a
v=new A.uh(new Uint8Array(w*4),w,4)
for(u=0;u<w;++u){t=x.nc(u)
s=x.na(u)
r=x.n9(u)
v.RQ(u,t,s,r,u===q.c?0:255)}return v}}
A.a_7.prototype={
aSY(d){var x,w,v,u,t,s,r=this
r.a=d.bP()
r.b=d.bP()
r.c=d.bP()
r.d=d.bP()
x=d.dg()
r.e=(x&64)!==0
if((x&128)!==0){r.f=A.cx4(D.c.er(1,(x&7)+1))
for(w=0;v=r.f,w<v.b;++w){u=J.v(d.a,d.d++)
t=J.v(d.a,d.d++)
s=J.v(d.a,d.d++)
v.d.pk(w,u,t,s)}}r.x=d.d-d.b}}
A.aqR.prototype={}
A.apq.prototype={}
A.bdU.prototype={
oA(d){var x,w,v,u,t,s,r,q,p,o,n=this
n.f=A.cT(d,!1,null,0)
n.a=new A.apq(B.a([],y.b))
if(!n.amE())return null
try{for(;u=n.f,t=u.d,t<u.c;){s=u.a
u.d=t+1
x=J.v(s,t)
switch(x){case 44:w=n.asO()
if(w==null){u=n.a
return u}u=w
u.r=n.e
u.w=n.c
if(n.b!==0){if(w.f==null&&n.a.e!=null){u=n.a.e
t=u.a
s=u.b
r=u.c
u=u.d
w.f=new A.a_6(t,s,r,new A.uh(new Uint8Array(B.bU(u.c)),u.a,u.b))}if(w.f!=null)w.f.c=n.d}n.a.r.push(w)
break
case 33:u=n.f
v=J.v(u.a,u.d++)
if(J.m(v,255)){u=n.f
if(u.qj(J.v(u.a,u.d++))==="NETSCAPE2.0"){q=J.v(u.a,u.d++)
p=J.v(u.a,u.d++)
if(q===3&&p===1)n.r=u.bP()}else n.VJ()}else if(J.m(v,249)){u=n.f
u.toString
n.bhO(u)}else n.VJ()
break
case 59:u=n.a
return u
default:break}}}catch(o){}return n.a},
bhO(d){var x,w,v,u=this
d.dg()
x=d.dg()
u.e=d.bP()
u.d=d.dg()
d.dg()
u.c=D.c.R(x,2)&7
u.b=x&1
w=d.Sg(1,0)
if(J.v(w.a,w.d)===44){++d.d
v=u.asO()
if(v==null)return
v.r=u.e
v.w=u.c
if(u.b!==0){w=v.f
if(w==null&&u.a.e!=null){w=u.a.e
w.toString
w=v.f=A.cTe(w)}if(w!=null)w.c=u.d}u.a.r.push(v)}},
k9(d){var x,w,v,u=this,t=u.f
if(t==null||u.a==null)return null
x=u.a.r
w=x.length
if(d>=w)return null
v=x[d]
t.toString
x=v.x
x===$&&B.b()
t.d=x
return u.aYZ(v)},
nA(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null
if(a5.oA(a8)==null)return a6
x=a5.a.r.length
if(x===1)return a5.k9(0)
for(x=y.p,w=a6,v=w,u=0;t=a5.a.r,u<t.length;++u){a9=t[u]
s=a5.k9(u)
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
if(t){v.ns(s)
w=s
continue}l=a9.f
if(!(l!=null)){t=a5.a.e
t.toString
l=t}t=o?a6:p.a
if(t==null)t=0
r=o?a6:p.b
if(r==null)r=0
k=A.hK(a6,a6,C.a7,0,C.bm,r,a6,0,1,l.af7(),C.a7,t,!1)
t=a9.w
if(t===2){t=a5.a.c.a
t=!D.A.gT(t)?t[0]:0
r=l.d
j=r.nc(t)
i=r.na(t)
h=r.n9(t)
g=t===l.c?0:255
t=new Uint8Array(4)
t[0]=j
t[1]=i
t[2]=h
t[3]=g
r=k.a
if(r!=null)r.nv(0,new A.xJ(t))}else if(t!==3){t=a9.a
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
t=t==null?a6:t.geW()
t.toString
f=B.H(x,x)
for(r=l.b,e=0;e<r;++e)f.m(0,e,l.byI(t.nc(e),t.na(e),t.n9(e),t.ov(e)))
t=k.a
d=t==null?a6:J.hw(t.gag(t))
if(d==null){t=k.a
t=t==null?a6:t.gag(t)
if(t==null)t=D.A.gag(new Uint8Array(0))
d=J.hw(t)}t=w.a
a0=t==null?a6:J.hw(t.gag(t))
if(a0==null){t=w.a
t=t==null?a6:t.gag(t)
if(t==null)t=D.A.gag(new Uint8Array(0))
a0=J.hw(t)}for(a1=d.length,t=d.$flags|0,a2=0;a2<a1;++a2){a3=f.i(0,a0[a2])
if(a3!==-1){a3.toString
t&2&&B.B(d)
d[a2]=a3}}}}k.y=s.y
for(t=s.a,t=t.ga1(t);t.q();){a4=t.gL(t)
if(a4.gaO(a4)!==0){r=a4.gn7(a4)
q=a9.a
q===$&&B.b()
p=a4.gnV(a4)
o=a9.b
o===$&&B.b()
k.y3(r+q,p+o,a4)}}v.ns(k)
w=k}return v},
asO(){var x,w=this.f
if(w.d>=w.c)return null
x=new A.aqR()
x.aSY(w);++this.f.d
this.VJ()
return x},
aYZ(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.w==null){n.w=new Uint8Array(256)
n.x=new Uint8Array(4095)
n.y=new Uint8Array(4096)
n.z=new Uint32Array(4096)}x=n.Q=n.f.dg()
w=D.c.eS(1,x)
n.dy=w;++w
n.dx=w
n.db=w+1;++x
n.cy=x
n.cx=D.c.eS(1,x)
n.ay=0
n.CW=4098
n.at=n.ax=0
x=n.w
x.toString
x.$flags&2&&B.B(x)
x[0]=0
x=n.z
x.toString
D.bq.l_(x,0,4096,4098)
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
s=A.hK(m,m,C.a7,0,C.bm,w,m,0,1,t.af7(),C.a7,x,!1)
r=new Uint8Array(x)
x=d.e
x===$&&B.b()
if(x){x=d.b
x===$&&B.b()
for(w=x+w,q=0,p=0;q<4;++q)for(o=x+C.aoQ[q];o<w;o+=C.ast[q],++p){if(!n.amG(r))return s
n.auw(s,o,t,r)}}else for(o=0;o<w;++o){if(!n.amG(r))return s
n.auw(s,o,t,r)}return s},
auw(d,e,f,g){var x,w,v,u=g.length
for(x=0;x<u;++x){w=g[x]
v=d.a
if(v!=null)v.fe(x,e,w,0,0)}},
amE(){var x,w,v,u,t,s=this,r=s.f.qj(6)
if(r!=="GIF87a"&&r!=="GIF89a")return!1
x=s.a
x.toString
x.a=s.f.bP()
x=s.a
x.toString
x.b=s.f.bP()
w=s.f.dg()
x=s.a
x.toString
x.c=new A.xJ(new Uint8Array(B.bU(B.a([s.f.dg()],y.t))));++s.f.d
if((w&128)!==0){x=s.a
x.toString
x.e=A.cx4(D.c.er(1,(w&7)+1))
for(v=0;v<s.a.e.b;++v){x=s.f
u=J.v(x.a,x.d++)
x=s.f
t=J.v(x.a,x.d++)
x=s.f
w=J.v(x.a,x.d++)
s.a.e.d.pk(v,u,t,w)}}s.a.toString
return!0},
amG(d){var x=this,w=x.as
w.toString
x.as=w-d.length
if(!x.aZc(d))return!1
if(x.as===0)x.VJ()
return!0},
VJ(){var x,w,v,u=this.f
if(u.d>=u.c)return!0
x=u.dg()
while(!0){if(x!==0){u=this.f
u=u.d<u.c}else u=!1
if(!u)break
u=this.f
w=u.d+=x
if(w>=u.c)return!0
v=u.a
u.d=w+1
x=J.v(v,w)}return!0},
aZc(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.ay
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
w=u}}for(k=d.$flags|0;w<x;){s=l.ch=l.aZb()
if(s==null)return!1
v=l.dx
if(s===v)return!1
t=l.dy
if(s===t){for(t=l.z,r=0;r<=4095;++r){t.toString
t.$flags&2&&B.B(t)
t[r]=4098}l.db=v+1
v=l.Q+1
l.cy=v
l.cx=D.c.eS(1,v)
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
t=l.a4a(v,s,t)
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
v=l.a4a(t,v,n)
o.$flags&2&&B.B(o)
o[q]=v}else{o===$&&B.b()
p.toString
v=l.a4a(t,p,n)
o.$flags&2&&B.B(o)
o[q]=v}}v=l.ch
v.toString
l.CW=v}}return!0},
aZb(){var x,w,v,u,t=this
if(t.cy>12)return null
for(;x=t.ax,w=t.cy,x<w;){x=t.aVv()
x.toString
w=t.at
v=t.ax
t.at=(w|D.c.eS(x,v))>>>0
t.ax=v+8}v=t.at
u=C.at8[w]
t.at=D.c.h_(v,w)
t.ax=x-w
x=t.db
if(x<4097){++x
t.db=x
x=x>t.cx&&w<12}else x=!1
if(x){t.cx=t.cx<<1>>>0
t.cy=w+1}return v&u},
a4a(d,e,f){var x,w,v=0
while(!0){if(e>f){x=v+1
w=v<=4095
v=x}else w=!1
if(!w)break
if(e>4095)return 4098
e=d[e]}return e},
aVv(){var x,w,v=this,u=v.w,t=u[0],s=u.$flags|0
if(t===0){t=v.f.dg()
s&2&&B.B(u)
u[0]=t
u=v.w
t=u[0]
if(t===0)return null
D.A.hv(u,1,1+t,v.f.l6(t).hL())
u=v.w
x=u[1]
u.$flags&2&&B.B(u)
u[1]=2
u[0]=u[0]-1}else{w=u[1]
s&2&&B.B(u)
u[1]=w+1
x=u[w]
u[0]=t-1}return x}}
A.OE.prototype={
J(){return"IcoType."+this.b}}
A.bgk.prototype={}
A.aqd.prototype={}
A.bgi.prototype={
gb5(d){return D.c.b7(A.FA.prototype.gb5.call(this,0),2)},
gOQ(){return!(this.d===40&&this.f===32)&&A.FA.prototype.gOQ.call(this)}}
A.bgj.prototype={
nA(d,e,f){var x,w,v,u=this,t=A.cT(e,!1,null,0)
u.a=t
x=u.b=A.cxo(t)
if(x==null)return null
t=x.e.length
if(t===1)return u.k9(0)
for(w=null,v=0;v<u.b.e.length;++v){f=u.k9(v)
if(f==null)continue
if(w==null){f.w=C.bm
w=f}else w.ns(f)}return w},
k9(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=this.a
if(a7!=null){x=this.b
x=x==null||a8>=x.d}else x=!0
if(x)return a6
w=this.b.e[a8]
x=a7.a
a7=a7.b+w.e
v=w.d
u=J.aVo(x,a7,a7+v)
t=new A.awG(A.cxT())
y.D.a(u)
if(t.Ie(u))return t.dk(0,u)
s=A.q9(!1,14)
s.l8(19778)
s.ih(v)
s.ih(0)
s.ih(0)
a7=A.cT(u,!1,a6,0)
x=A.cum(A.cT(J.d5(D.A.gag(s.c),0,s.a),!1,a6,0))
v=a7.d
r=a7.an()
q=a7.an()
p=$.hY()
p.$flags&2&&B.B(p)
p[0]=q
q=$.lD()
o=q[0]
p[0]=a7.an()
q=q[0]
n=a7.bP()
m=a7.bP()
l=C.QL[a7.an()]
a7.an()
p[0]=a7.an()
p[0]=a7.an()
p=a7.an()
a7.an()
k=new A.bgi(x,o,q,r,n,m,l,p,v)
k.ai7(a7,x)
if(r!==40&&n!==1)return a6
j=p===0&&m<=8?40+4*D.c.er(1,m):40+4*p
x.b=j
s.a-=4
s.ih(j)
i=A.cT(u,!1,a6,0)
h=new A.b6y(!0)
h.a=i
h.b=k
g=h.k9(0)
if(m>=32)return g
f=32-D.c.ap(o,32)
e=D.c.b7(f===32?o:o+f,8)
for(a7=1/q<0,x=q<0,q=q===0,d=0;d<D.c.b7(A.FA.prototype.gb5.call(k,0),2);++d){if(!(q?a7:x))a0=d
else{v=g.a
v=v==null?a6:v.b
a0=(v==null?0:v)-1-d}a1=i.jZ(e)
i.d=i.d+(a1.c-a1.d)
v=g.a
a2=v==null?a6:v.el(0,a0,a6)
if(a2==null)a2=new A.fn()
for(a3=0;a3<o;){a4=J.v(a1.a,a1.d++)
a5=7
while(!0){if(!(a5>-1&&a3<o))break
if((a4&D.c.eS(1,a5))>>>0!==0)a2.saO(0,0)
a2.q();++a3;--a5}}}return g}}
A.ajO.prototype={}
A.H4.prototype={}
A.H5.prototype={}
A.a_x.prototype={
gp(d){return this.a}}
A.bi3.prototype={}
A.C4.prototype={}
A.bi5.prototype={
QP(d){var x,w,v,u,t,s=this,r=A.cT(d,!0,null,0)
s.a=r
x=r.Sg(2,0)
if(J.v(x.a,x.d)!==255||J.v(x.a,x.d+1)!==216)return!1
if(s.FN()!==216)return!1
w=s.FN()
v=!1
u=!1
while(!0){if(w!==217){r=s.a
r=r.d<r.c}else r=!1
if(!r)break
t=s.a.bP()
if(t<2)break
r=s.a
r.d=r.d+(t-2)
switch(w){case 192:case 193:case 194:v=!0
break
case 218:u=!0
break}w=s.FN()}return v&&u},
qi(d,e){var x,w,v,u,t,s,r,q,p=this
p.a=A.cT(e,!0,null,0)
p.bhG()
if(p.x.length!==1)throw B.l(A.c6("Only single frame JPEGs supported"))
for(x=p.Q,w=0;v=p.d,u=v.z,w<u.length;++w){t=v.y.i(0,u[w])
v=t.a
u=p.d
s=u.f
r=t.b
q=u.r
u=p.aVD(u,t)
v=v===1&&s===2?1:0
x.push(new A.ajO(u,v,r===1&&q===2?1:0))}},
bhG(){var x,w,v,u,t,s=this
if(s.FN()!==216)throw B.l(A.c6("Start Of Image marker not found."))
x=s.FN()
while(!0){if(x!==217){w=s.a
w===$&&B.b()
w=w.d<w.c}else w=!1
if(!w)break
w=s.a
w===$&&B.b()
v=w.bP()
if(v<2)B.a6(A.c6("Invalid Block"))
w=s.a
u=w.jZ(v-2)
w.d=w.d+(u.c-u.d)
switch(x){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:s.bhH(x,u)
break
case 219:s.bhL(u)
break
case 192:case 193:case 194:s.bhN(x,u)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw B.l(A.c6("Unhandled frame type "+D.c.m2(x,16)))
case 196:s.bhK(u)
break
case 221:s.e=u.bP()
break
case 218:s.bhX(u)
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
break}if(x!==0)throw B.l(A.c6("Unknown JPEG marker "+D.c.m2(x,16)))
break}x=s.FN()}},
FN(){var x,w=this,v=w.a
v===$&&B.b()
if(v.d>=v.c)return 0
do{do{x=w.a.dg()
if(x!==255){v=w.a
v=v.d<v.c}else v=!1}while(v)
v=w.a
if(v.d>=v.c)return x
do{x=w.a.dg()
if(x===255){v=w.a
v=v.d<v.c}else v=!1}while(v)
if(x===0){v=w.a
v=v.d<v.c}else v=!1}while(v)
return x},
bhM(d){if(d.an()!==1165519206)return
if(d.bP()!==0)return
this.r.qi(0,d)},
bhH(d,e){var x,w,v,u,t=this,s=e
if(d===224){x=s
w=!1
if(J.v(x.a,x.d)===74){x=s
if(J.v(x.a,x.d+1)===70){x=s
if(J.v(x.a,x.d+2)===73){x=s
if(J.v(x.a,x.d+3)===70){x=s
x=J.v(x.a,x.d+4)===0}else x=w}else x=w}else x=w}else x=w
if(x){x=new A.bi9()
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
s.Sg(14+3*w*v,14)}}else if(d===225)t.bhM(s)
else if(d===238){x=s
w=!1
if(J.v(x.a,x.d)===65){x=s
if(J.v(x.a,x.d+1)===100){x=s
if(J.v(x.a,x.d+2)===111){x=s
if(J.v(x.a,x.d+3)===98){x=s
if(J.v(x.a,x.d+4)===101){x=s
x=J.v(x.a,x.d+5)===0}else x=w}else x=w}else x=w}else x=w}else x=w
if(x){t.c=new A.bi3()
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
x.d=J.v(w.a,w.d+11)}}else if(d===254)try{s.bIu()}catch(u){B.b_(u)}},
bhL(d){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=this.w;v=d.d,u=v<x,u;){u=d.a
d.d=v+1
t=J.v(u,v)
s=D.c.R(t,4)
t&=15
if(t>=4)throw B.l(A.c6("Invalid number of quantization tables"))
v=w[t]
if(v==null){v=new Int16Array(64)
w[t]=v}for(u=s!==0,r=0;r<64;++r){q=u?d.bP():J.v(d.a,d.d++)
p=C.vx[r]
v.$flags&2&&B.B(v)
v[p]=q}}if(u)throw B.l(A.c6("Bad length for DQT block"))},
bhN(d,e){var x,w,v,u,t,s,r,q=this
if(q.d!=null)throw B.l(A.c6("Duplicate JPG frame data found."))
x=q.d=new A.ar3(B.H(y.p,y.c),B.a([],y.t))
x.b=d===194
x.c=e.dg()
x=q.d
x.toString
x.d=e.bP()
x=q.d
x.toString
x.e=e.bP()
w=e.dg()
for(x=q.w,v=0;v<w;++v){u=J.v(e.a,e.d++)
t=J.v(e.a,e.d++)
s=D.c.R(t,4)
r=J.v(e.a,e.d++)
q.d.z.push(u)
q.d.y.m(0,u,new A.C4(s&15,t&15,x,r))}q.d.bHj()
q.x.push(q.d)},
bhK(d){var x,w,v,u,t,s,r,q,p,o,n,m
for(x=d.c,w=this.z,v=this.y;u=d.d,u<x;){t=d.a
d.d=u+1
s=J.v(t,u)
r=new Uint8Array(16)
for(q=0,p=0;p<16;++p){r[p]=J.v(d.a,d.d++)
q+=r[p]}o=d.jZ(q)
d.d=d.d+(o.c-o.d)
n=o.hL()
if((s&16)!==0){s-=16
m=v}else m=w
if(m.length<=s)D.b.su(m,s+1)
m[s]=this.aVQ(r,n)}},
bhX(d){var x,w,v,u,t,s,r,q=this,p=d.dg()
if(p<1||p>4)throw B.l(A.c6("Invalid SOS block"))
x=B.w1(p,new A.bi6(q,d),!0,y.c)
w=d.dg()
v=d.dg()
u=d.dg()
t=D.c.R(u,4)
s=q.a
s===$&&B.b()
r=q.d
t=new A.ar4(s,r,x,q.e,w,v,t&15,u&15)
s=r.w
s===$&&B.b()
t.f=s
t.r=r.b
t.oc(0)},
aVQ(d,e){var x,w,v,u,t,s,r,q,p,o,n=B.a([],y.C),m=16
while(!0){if(!(m>0&&d[m-1]===0))break;--m}x=y.aH
n.push(new A.TV(B.a([],x)))
w=n[0]
for(v=0,u=0;u<m;){for(t=0;t<d[u];++t){w=n.pop()
s=w.a
r=s.length
q=w.b
if(r<=q)D.b.su(s,q+1)
s[w.b]=new A.a_x(e[v])
for(;s=w.b,s>0;)w=n.pop()
w.b=s+1
n.push(w)
for(;n.length<=u;w=p){s=B.a([],x)
p=new A.TV(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.su(r,o+1)
r[w.b]=new A.H5(s)}++v}++u
if(u<m){s=B.a([],x)
p=new A.TV(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.su(r,o+1)
r[w.b]=new A.H5(s)
w=p}}return n[0].a},
aVD(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.e
d===$&&B.b()
x=a1.f
x===$&&B.b()
w=d<<3>>>0
v=new Int32Array(64)
u=new Uint8Array(64)
t=B.bJ(x*8,null,!1,y.ac)
for(s=a1.c,r=a1.d,q=0,p=0;p<x;++p){o=p<<3>>>0
for(n=0;n<8;++n,q=m){m=q+1
t[q]=new Uint8Array(w)}for(l=0;l<d;++l){k=s[r]
k.toString
j=a1.r
j===$&&B.b()
A.dd4(k,j[p][l],u,v)
i=l<<3>>>0
for(h=0,g=0;g<8;++g){f=t[o+g]
for(n=0;n<8;++n,h=e){f.toString
e=h+1
k=u[h]
f.$flags&2&&B.B(f)
f[i+n]=k}}}}return t}}
A.TV.prototype={}
A.ar3.prototype={
bHj(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.y,w=B.p(x).h("ce<1>"),v=new B.ce(x,x.r,x.e,w);v.q();){u=x.i(0,v.d)
g.f=Math.max(g.f,u.a)
g.r=Math.max(g.r,u.b)}v=g.e
v.toString
g.w=D.d.f8(v/8/g.f)
v=g.d
v.toString
g.x=D.d.f8(v/8/g.r)
for(w=new B.ce(x,x.r,x.e,w),v=y.h,t=y.bp;w.q();){s=x.i(0,w.d)
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
k=J.j_(l,t)
for(j=0;j<l;++j){i=J.j_(m,v)
for(h=0;h<m;++h)i[h]=new Int32Array(64)
k[j]=i}s.e=p
s.f=n
s.r=k}}}
A.bi9.prototype={}
A.ar4.prototype={
oc(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.y,f=g.length,e=h.r
e.toString
if(e)if(h.Q===0)x=h.at===0?h.gaYS():h.gaYU()
else x=h.at===0?h.gaYJ():h.gaYL()
else x=h.gaYP()
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
p=D.c.hw(t,v)
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
for(l=0;l<m;++l)for(k=0;k<n;++k)h.aZ_(r,x,t,l,k)}++t;++q}}h.ch=0
j=J.v(w.a,w.d)
i=J.v(w.a,w.d+1)
if(j===255)if(i>=208&&i<=215)w.d+=2
else break}},
BQ(){var x,w=this,v=w.ch
if(v>0){--v
w.ch=v
return D.c.o_(w.ay,v)&1}v=w.a
if(v.d>=v.c)return null
x=v.dg()
w.ay=x
if(x===255)if(v.dg()!==0)return null
w.ch=7
return D.c.R(w.ay,7)&1},
LO(d){var x,w=new A.H5(d)
for(;x=this.BQ(),x!=null;){if(w instanceof A.H5)w=w.a[x]
if(w instanceof A.a_x)return w.a}return null},
a6_(d){var x,w
for(x=0;d>0;){w=this.BQ()
if(w==null)return null
x=(x<<1|w)>>>0;--d}return x},
Md(d){var x
if(d==null)return 0
if(d===1)return this.BQ()===1?1:-1
x=this.a6_(d)
if(x==null)return 0
if(x>=D.c.eS(1,d-1))return x
return x+D.c.er(-1,d)+1},
aYQ(d,e){var x,w,v,u,t,s,r=this,q=d.w
q===$&&B.b()
x=r.LO(q)
w=x===0?0:r.Md(x)
q=d.y
q===$&&B.b()
q+=w
d.y=q
e.$flags&2&&B.B(e)
e[0]=q
for(v=1;v<64;){q=d.x
q===$&&B.b()
u=r.LO(q)
if(u==null)break
t=u&15
s=u>>>4
if(t===0){if(s<15)break
v+=16
continue}v+=s
t=r.Md(t)
e[C.vx[v]]=t;++v}},
aYT(d,e){var x,w,v=d.w
v===$&&B.b()
x=this.LO(v)
w=x===0?0:D.c.er(this.Md(x),this.ax)
v=d.y
v===$&&B.b()
v+=w
d.y=v
e.$flags&2&&B.B(e)
e[0]=v},
aYV(d,e){var x=e[0],w=this.BQ()
w.toString
w=D.c.er(w,this.ax)
e.$flags&2&&B.B(e)
e[0]=(x|w)>>>0},
aYK(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.CW
if(o>0){p.CW=o-1
return}x=p.Q
w=p.as
for(o=p.ax,v=e.$flags|0;x<=w;){u=d.x
u===$&&B.b()
u=p.LO(u)
u.toString
t=u&15
s=u>>>4
if(t===0){if(s<15){o=p.a6_(s)
o.toString
p.CW=o+D.c.er(1,s)-1
break}x+=16
continue}x+=s
r=C.vx[x]
u=p.Md(t)
q=D.c.er(1,o)
v&2&&B.B(e)
e[r]=u*q;++x}},
aYM(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.Q,n=p.as
$label0$1:for(x=p.ax,w=e.$flags|0,v=0;o<=n;){u=C.vx[o]
t=p.cx
switch(t){case 0:t=d.x
t===$&&B.b()
s=p.LO(t)
if(s==null)throw B.l(A.c6("Invalid progressive encoding"))
r=s&15
v=s>>>4
if(r===0)if(v<15){t=p.a6_(v)
t.toString
p.CW=t+D.c.er(1,v)
p.cx=4}else{p.cx=1
v=16}else{if(r!==1)throw B.l(A.c6("invalid ACn encoding"))
p.cy=p.Md(r)
p.cx=v!==0?2:3}continue $label0$1
case 1:case 2:q=e[u]
if(q!==0){t=p.BQ()
t.toString
t=D.c.er(t,x)
w&2&&B.B(e)
e[u]=q+t}else{--v
if(v===0)p.cx=t===2?3:0}break
case 3:t=e[u]
if(t!==0){q=p.BQ()
q.toString
q=D.c.er(q,x)
w&2&&B.B(e)
e[u]=t+q}else{t=p.cy
t===$&&B.b()
t=D.c.er(t,x)
w&2&&B.B(e)
e[u]=t
p.cx=0}break
case 4:t=e[u]
if(t!==0){q=p.BQ()
q.toString
q=D.c.er(q,x)
w&2&&B.B(e)
e[u]=t+q}break}++o}if(p.cx===4)if(--p.CW===0)p.cx=0},
aZ_(d,e,f,g,h){var x,w,v=this.f
v===$&&B.b()
x=D.c.hw(f,v)*d.b+g
w=D.c.ap(f,v)*d.a+h
v=d.r
v===$&&B.b()
if(x>=v.length)return
v=v[x]
if(w>=v.length)return
e.$2(d,v[w])}}
A.ar2.prototype={
nA(d,e,f){var x=A.cy6()
x.qi(0,e)
if(x.x.length!==1)throw B.l(A.c6("only single frame JPEGs supported"))
return A.dbA(x)},
dk(d,e){return this.nA(0,e,null)}}
A.bi4.prototype={
J(){return"JpegChroma."+this.b}}
A.bi7.prototype={
aKQ(d){d=D.d.D(D.c.bc(d,1,100))
if(this.at===d)return
this.b9W(d<50?D.d.h1(5000/d):D.c.h1(200-d*2))
this.at=d},
bxK(b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=A.q9(!0,8192)
a8.z_(a9,216)
a8.z_(a9,224)
a9.l8(16)
a9.b0(74)
a9.b0(70)
a9.b0(73)
a9.b0(70)
a9.b0(0)
a9.b0(1)
a9.b0(1)
a9.b0(0)
a9.l8(1)
a9.l8(1)
a9.b0(0)
a9.b0(0)
a8.bpJ(a9,b0.gwT())
a8.bpN(a9)
x=b0.gcZ(0)
w=b0.gb5(0)
a8.z_(a9,192)
a9.l8(17)
a9.b0(8)
a9.l8(w)
a9.l8(x)
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
a8.bpM(a9)
a8.z_(a9,218)
a9.l8(12)
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
v=b0.gcZ(0)
u=b0.gb5(0)
if(x){t=new Float32Array(64)
s=new Float32Array(64)
r=new Float32Array(64)
for(x=a8.c,w=a8.d,q=0,p=0,o=0,n=0;n<u;n+=8)for(m=0;m<v;m+=8){a8.KN(b0,m,n,v,u,t,s,r)
l=a8.e
k=a8.r
k===$&&B.b()
q=a8.wj(a9,t,x,q,l,k)
k=a8.f
l=a8.w
l===$&&B.b()
p=a8.wj(a9,s,w,p,k,l)
o=a8.wj(a9,r,w,o,a8.f,a8.w)}}else{x=y.z
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
a8.KN(b0,m,n,v,u,k,g,f)
e=m+8
d=t[1]
a0=s[1]
a1=r[1]
a8.KN(b0,e,n,v,u,d,a0,a1)
a2=t[2]
a3=s[2]
a4=r[2]
a8.KN(b0,m,l,v,u,a2,a3,a4)
a5=t[3]
a6=s[3]
a7=r[3]
a8.KN(b0,e,l,v,u,a5,a6,a7)
a8.ale(i,g,a0,a3,a6)
a8.ale(h,f,a1,a4,a7)
a7=a8.e
a4=a8.r
a4===$&&B.b()
q=a8.wj(a9,a5,x,a8.wj(a9,a2,x,a8.wj(a9,d,x,a8.wj(a9,k,x,q,a7,a4),a8.e,a8.r),a8.e,a8.r),a8.e,a8.r)
a4=a8.f
a7=a8.w
a7===$&&B.b()
p=a8.wj(a9,i,w,p,a4,a7)
o=a8.wj(a9,h,w,o,a8.f,a8.w)}}x=a8.ay
if(x>=0){++x
a8.ws(a9,B.a([D.c.eS(1,x)-1,x],y.t))}a8.z_(a9,217)
return J.d5(D.A.gag(a9.c),0,a9.a)},
KN(d,e,f,g,h,i,j,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.as,w=i.$flags|0,v=j.$flags|0,u=a0.$flags|0,t=f+1,s=0;s<64;++s){r=s>>>3
q=f+r
p=e+(s&7)
if(q>=h)q-=t+r-h
if(p>=g)p-=p-g+1
o=d.a
n=o==null?null:o.el(p,q,null)
if(n==null)n=new A.fn()
if(n.gdv()!==C.a7)n=n.ob(C.a7)
m=D.d.D(n.gaz(n))
l=D.d.D(n.gaL())
k=D.d.D(n.gaN(n))
o=D.c.R(x[m]+x[l+256]+x[k+512],16)
w&2&&B.B(i)
i[s]=o-128
o=D.c.R(x[m+768]+x[l+1024]+x[k+1280],16)
v&2&&B.B(j)
j[s]=o-128
o=D.c.R(x[m+1280]+x[l+1536]+x[k+1792],16)
u&2&&B.B(a0)
a0[s]=o-128}},
ale(d,e,f,g,h){var x,w,v,u,t,s,r,q
for(x=d.$flags|0,w=0;w<64;++w){if(w<32)v=D.c.ap(w,8)<4?e:f
else v=D.c.ap(w,8)<4?g:h
u=(D.c.b7(D.c.ap(w,32),8)<<4>>>0)+(D.c.ap(w,4)<<1>>>0)
t=v[u]
s=v[u+1]
r=v[u+8]
q=v[u+9]
x&2&&B.B(d)
d[w]=(t+s+r+q)/4}},
z_(d,e){d.b0(255)
d.b0(e&255)},
b9W(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.a,w=x.$flags|0,v=0;v<64;++v){u=D.d.h1((C.ayA[v]*d+50)/100)
if(u<1)u=1
else if(u>255)u=255
t=C.qY[v]
w&2&&B.B(x)
x[t]=u}for(w=g.b,t=w.$flags|0,s=0;s<64;++s){r=D.d.h1((C.as0[s]*d+50)/100)
if(r<1)r=1
else if(r>255)r=255
q=C.qY[s]
t&2&&B.B(w)
w[q]=r}for(t=g.c,q=t.$flags|0,p=g.d,o=p.$flags|0,n=0,m=0;m<8;++m)for(l=0;l<8;++l){k=C.qY[n]
j=x[k]
i=C.Lh[m]
h=C.Lh[l]
q&2&&B.B(t)
t[n]=1/(j*i*h*8)
k=w[k]
o&2&&B.B(p)
p[n]=1/(k*i*h*8);++n}},
T0(d,e){var x,w,v,u,t,s=y.t,r=B.a([B.a([],s)],y.cQ)
for(x=0,w=0,v=1;v<=16;++v){for(u=1;u<=d[v];++u){t=e[w]
if(r.length<=t)D.b.su(r,t+1)
r[t]=B.a([x,v],s);++w;++x}x*=2}return r},
b9L(){var x,w,v,u,t,s,r,q,p,o,n
for(x=this.y,w=this.x,v=y.t,u=1,t=2,s=1;s<=15;++s){for(r=u;r<t;++r){q=32767+r
x[q]=s
w[q]=B.a([r,s],v)}for(q=t-1,p=-q,o=-u;p<=o;++p){n=32767+p
x[n]=s
w[n]=B.a([q+p,s],v)}u=u<<1>>>0
t=t<<1>>>0}},
b9X(){var x,w,v
for(x=this.as,w=x.$flags|0,v=0;v<256;++v){w&2&&B.B(x)
x[v]=19595*v
x[v+256]=38470*v
x[v+512]=7471*v+32768
x[v+768]=-11059*v
x[v+1024]=-21709*v
x[v+1280]=32768*v+8421375
x[v+1536]=-27439*v
x[v+1792]=-5329*v}},
b0I(d4,d5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3
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
x[v]=d3>0?D.d.D(d3+0.5):D.d.D(d3-0.5)}return x},
bpJ(d,e){var x,w
if(e.gT(0))return
x=A.q9(!1,8192)
e.jt(0,x)
w=J.d5(D.A.gag(x.c),0,x.a)
this.z_(d,225)
d.l8(w.length+8)
d.ih(1165519206)
d.l8(0)
d.mz(w)},
bpN(d){var x,w,v
this.z_(d,219)
d.l8(132)
d.b0(0)
for(x=this.a,w=0;w<64;++w)d.b0(x[w])
d.b0(1)
for(x=this.b,v=0;v<64;++v)d.b0(x[v])},
bpM(d){var x,w,v,u,t,s,r,q
this.z_(d,196)
d.l8(418)
d.b0(0)
for(x=0;x<16;){++x
d.b0(C.Sr[x])}for(w=0;w<=11;++w)d.b0(C.qr[w])
d.b0(16)
for(v=0;v<16;){++v
d.b0(C.Km[v])}for(u=0;u<=161;++u)d.b0(C.LG[u])
d.b0(1)
for(t=0;t<16;){++t
d.b0(C.Ni[t])}for(s=0;s<=11;++s)d.b0(C.qr[s])
d.b0(17)
for(r=0;r<16;){++r
d.b0(C.M7[r])}for(q=0;q<=161;++q)d.b0(C.OB[q])},
wj(d,e,f,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=a2[0],h=a2[240],g=j.b0I(e,f)
for(x=j.Q,w=0;w<64;++w)x[C.qY[w]]=g[w]
v=x[0]
v.toString
u=v-a0
if(u===0){t=a1[0]
t.toString
j.ws(d,t)}else{s=32767+u
a1.toString
t=j.y[s]
t.toString
t=a1[t]
t.toString
j.ws(d,t)
t=j.x[s]
t.toString
j.ws(d,t)}r=63
while(!0){if(!(r>0&&x[r]===0))break;--r}if(r===0){i.toString
j.ws(d,i)
return v}for(t=j.y,q=j.x,p=1;p<=r;){o=p
while(!0){if(!(x[o]===0&&o<=r))break;++o}n=o-p
if(n>=16){m=D.c.R(n,4)
for(l=1;l<=m;++l){h.toString
j.ws(d,h)}n&=15}k=x[o]
k.toString
s=32767+k
k=t[s]
k.toString
k=a2[(n<<4>>>0)+k]
k.toString
j.ws(d,k)
k=q[s]
k.toString
j.ws(d,k)
p=o+1}if(r!==63){i.toString
j.ws(d,i)}return v},
ws(d,e){var x,w=this,v=e[0],u=e[1]-1
for(;u>=0;){if((v&D.c.eS(1,u))>>>0!==0)w.ax=(w.ax|D.c.eS(1,w.ay))>>>0;--u
if(--w.ay<0){x=w.ax
if(x===255){d.b0(255)
d.b0(0)}else d.b0(x)
w.ay=7
w.ax=0}}}}
A.Qv.prototype={
J(){return"PngDisposeMode."+this.b}}
A.a3g.prototype={
J(){return"PngBlendMode."+this.b}}
A.a3h.prototype={}
A.aqS.prototype={}
A.D4.prototype={
J(){return"PngFilterType."+this.b}}
A.bt7.prototype={}
A.bhG.prototype={}
A.awG.prototype={
Ie(d){var x,w=A.cT(d,!0,null,0).l6(8)
for(x=0;x<8;++x)if(J.v(w.a,w.d+x)!==D.R_[x])return!1
return!0},
oA(b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=A.cT(b4,!0,b2,0)
b1.d=b3
x=b3.l6(8)
for(w=0;w<8;++w)if(J.v(x.a,x.d+w)!==D.R_[w])return b2
for(b3=b1.a,v=b3.cx,u=y.t,t=b3.cy,s=y.L,r=b3.ax;!0;){q=b1.d
p=q.d-q.b
o=q.an()
n=b1.d.qj(4)
switch(n){case"tEXt":q=b1.d
m=q.jZ(o)
q.d=q.d+(m.c-m.d)
l=m.hL()
k=l.length
for(w=0;w<k;++w)if(l[w]===0){q=w+1
r.m(0,D.e0.dk(0,new Uint8Array(l.subarray(0,B.qD(0,w,k)))),D.e0.dk(0,new Uint8Array(l.subarray(q,B.qD(q,b2,k)))))
break}b1.d.d+=4
break
case"pHYs":q=b1.d
m=q.jZ(o)
q.d=q.d+(m.c-m.d)
j=A.cb(m,b2,0)
j.an()
j.an()
J.v(j.a,j.d++)
b1.d.d+=4
break
case"IHDR":q=b1.d
m=q.jZ(o)
q.d=q.d+(m.c-m.d)
i=A.cb(m,b2,0)
h=i.hL()
b3.a=i.an()
b3.b=i.an()
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
break}if(b1.d.an()!==A.xf(h,A.xf(new B.e8(n),0)))throw B.l(A.c6("Invalid "+n+" checksum"))
break
case"PLTE":q=b1.d
m=q.jZ(o)
q.d=q.d+(m.c-m.d)
b3.w=m.hL()
if(b1.d.an()!==A.xf(s.a(b3.w),A.xf(new B.e8(n),0)))throw B.l(A.c6("Invalid "+n+" checksum"))
break
case"tRNS":q=b1.d
m=q.jZ(o)
q.d=q.d+(m.c-m.d)
b3.x=m.hL()
g=b1.d.an()
q=b3.x
q.toString
if(g!==A.xf(q,A.xf(new B.e8(n),0)))throw B.l(A.c6("Invalid "+n+" checksum"))
break
case"IEND":b1.d.d+=4
break
case"gAMA":if(o!==4)throw B.l(A.c6("Invalid gAMA chunk"))
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
a2=b1.d.bP()
a3=b1.d.bP()
q=b1.d
a4=J.v(q.a,q.d++)
q=b1.d
a5=J.v(q.a,q.d++)
q=C.apB[a4]
f=C.avY[a5]
v.push(new A.aqS(B.a([],u),e,d,a0,a1,a2,a3,q,f))
b1.d.d+=4
break
case"fdAT":b1.d.an()
D.b.gW(v).y.push(p)
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
b3.z=new A.MU(f)}else{q=new Uint8Array(3)
q[0]=a8
q[1]=a9
q[2]=b0
b3.z=new A.ajJ(q)}}else if(q===0||q===4){b1.d.bP()
o-=2}else if(q===2||q===6){q=b1.d
q.bP()
q.bP()
q.bP()
o-=24}if(o>0)b1.d.d+=o
b1.d.d+=4
break
case"iCCP":b3.Q=b1.d.Qc()
q=b1.d
J.v(q.a,q.d++)
q=b3.Q
f=b1.d
m=f.jZ(o-(q.length+2))
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
k9(b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=null,b4=b1.a,b5=b4.a,b6=b4.b,b7=b4.cx,b8=b7.length
if(b8===0||b9===0){w=B.a([],y.a)
b7=b4.cy
v=b7.length
for(u=0,t=0;t<v;++t){b8=b1.d
b8===$&&B.b()
b8.d=b7[t]
s=b8.an()
r=b1.d.qj(4)
b8=b1.d
q=b8.jZ(s)
b8.d=b8.d+(q.c-q.d)
p=q.hL()
u+=p.length
w.push(p)
if(b1.d.an()!==A.xf(p,A.xf(new B.e8(r),0)))throw B.l(A.c6("Invalid "+r+" checksum"))}b3=new Uint8Array(u)
for(b7=w.length,o=0,n=0;n<w.length;w.length===b7||(0,B.R)(w),++n){p=w[n]
J.cm3(b3,o,p)
o+=p.length}}else{if(b9>=b8)throw B.l(A.c6("Invalid Frame Number: "+b9))
m=b7[b9]
b5=m.b
b6=m.c
w=B.a([],y.a)
for(b7=m.y,u=0,t=0;t<b7.length;++t){b8=b1.d
b8===$&&B.b()
b8.d=b7[t]
s=b8.an()
b8=b1.d
b8.qj(4)
b8.d+=4
b8=b1.d
q=b8.jZ(s-4)
b8.d=b8.d+(q.c-q.d)
p=q.hL()
u+=p.length
w.push(p)}b3=new Uint8Array(u)
for(b7=w.length,o=0,n=0;n<w.length;w.length===b7||(0,B.R)(w),++n){p=w[n]
J.cm3(b3,o,p)
o+=p.length}}b7=b4.d
l=1
if(!(b7===3))if(!(b7===0)){if(b7===4)b7=2
else b7=b7===6?4:3
l=b7}x=null
try{x=C.iX.Cu(A.BU(b3,1,b2,0),!1)}catch(k){return b2}j=A.cT(x,!0,b2,0)
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
i.RQ(t,b7[d],b7[d+1],b7[d+2],a0)}}}if(b4.d===0&&b4.x!=null&&i==null&&b4.c<=8){g=b4.x
a1=g.length
b7=b4.c
h=D.c.eS(1,b7)
i=new A.uh(new Uint8Array(h*4),h,4)
if(b7===1)a2=255
else if(b7===2)a2=85
else{b7=b7===4?17:1
a2=b7}for(t=0;t<h;++t){a3=t*a2
i.RQ(t,a3,a3,a3,255)}for(b7=i.b,b8=3<b7,a4=i.c,a5=a4.$flags|0,t=0;t<a1;t+=2){a6=(g[t]&255)<<8|g[t+1]&255
if(a6<h)if(b8){a5&2&&B.B(a4)
a4[a6*b7+3]=0}}}b7=b4.c
if(b7===1)a7=C.fi
else if(b7===2)a7=C.h4
else{if(b7===4)b8=C.h5
else b8=b7===16?C.cc:C.a7
a7=b8}b8=b4.d
if(b8===0&&b4.x!=null&&b7>8)l=4
a8=A.hK(b2,b2,a7,0,C.bm,b6,b2,0,b8===2&&b4.x!=null?4:l,i,C.a7,b5,!1)
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
b1.BP(j,a8,0,1,1,2,b5,b6>>>1)}else b1.bgV(j,a8)
b4.a=a9
b4.b=b0
b7=b4.at
if(b7!=null)a8.c=new A.a_z(b4.Q,C.zU,b7)
b4=b4.ax
if(b4.a!==0)a8.bqB(b4)
return a8},
nA(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(g.oA(e)==null)return f
x=g.a
w=x.cx
v=w.length
if(v===0){x=g.k9(0)
x.toString
return x}for(v=y.g,u=f,t=u,s=0;s<x.ch;++s){a0=w[s]
r=g.k9(s)
if(r==null)continue
if(t==null||u==null){t=r.ay2(r.gqb())
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
o=o===(n==null?0:n)&&a0.d===0&&a0.e===0&&a0.x===C.a1S}else o=!1
if(o){q=a0.f
r.y=D.d.D((q===0||a0.r===0?0:q/a0.r)*1000)
t.ns(r)
u=r
continue}i=t.x
u=A.BK((i===$?t.x=B.a([],v):i)[q],!1,!1)
h=p.w
if(h===C.a1U){q=p.d
o=p.e
n=x.z
if(n==null){n=new Uint8Array(4)
m=new A.MU(n)
n[0]=0
n[1]=0
n[2]=0
n[3]=0
n=m}A.daY(u,!1,n,q,q+p.b-1,o,o+p.c-1)}else if(h===C.a1V&&s>1){i=t.x
if(i===$)i=t.x=B.a([],v)
q=p.d
o=p.e
n=p.b
m=p.c
u=A.crs(u,i[s-2],C.y7,m,n,q,o,m,n,q,o)}q=a0.f
u.y=D.d.D((q===0||a0.r===0?0:q/a0.r)*1000)
q=a0.x===C.a1T?C.y7:C.y6
u=A.crs(u,r,q,f,f,a0.d,a0.e,f,f,f,f)
t.ns(u)}return t},
dk(d,e){return this.nA(0,e,null)},
BP(a0,a1,a2,a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=e.d
if(d===4)x=2
else if(d===2)x=3
else{d=d===6?4:1
x=d}w=x*e.c
v=D.c.R(w+7,3)
u=D.c.R(w*a6+7,3)
t=B.a([null,null],y.e)
s=B.a([0,0,0,0],y.t)
for(e=a4>1,r=a4-a2,q=a3,p=0,o=0;p<a7;++p,q+=a5,++f.e){n=C.Q2[J.v(a0.a,a0.d++)]
m=a0.jZ(u)
a0.d=a0.d+(m.c-m.d)
d=m.hL()
t[o]=d
o=1-o
f.au_(n,v,d,t[o])
f.c=f.b=0
l=new A.lU(d,0,d.length,0,!0)
for(d=r<=1,k=a2,j=0;j<a6;++j,k+=a4){f.ar_(l,s)
i=a1.a
i=i==null?null:i.el(k,q,null)
f.a6v(i==null?new A.fn():i,s)
if(!d||e)for(h=0;h<a4;++h)for(i=q+h,g=0;g<r;++g)f.a6v(a1.kA(k+g,i),s)}}},
bgV(d,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a,e=f.d
if(e===4)x=2
else if(e===2)x=3
else{e=e===6?4:1
x=e}w=x*f.c
v=f.a
u=f.b
t=D.c.R(v*w+7,3)
s=D.c.R(w+7,3)
r=B.bJ(t,0,!1,y.p)
q=B.a([r,r],y.S)
p=B.a([0,0,0,0],y.t)
f=a0.a
o=f.ga1(f)
o.q()
for(n=0,m=0;n<u;++n,m=j){l=C.Q2[J.v(d.a,d.d++)]
k=d.jZ(t)
d.d=d.d+(k.c-k.d)
f=k.hL()
q[m]=f
j=1-m
g.au_(l,s,f,q[j])
g.c=g.b=0
f=q[m]
e=f.length
i=new A.lU(f,0,e,0,!0)
for(h=0;h<v;++h){g.ar_(i,p)
g.a6v(o.gL(o),p)
o.q()}}},
au_(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=f.length
switch(d.a){case 0:break
case 1:for(x=e;x<l;++x)f[x]=f[x]+f[x-e]&255
break
case 2:for(w=g!=null,x=0;x<l;++x){v=w?g[x]:0
f[x]=f[x]+v&255}break
case 3:for(w=g!=null,x=0;x<l;++x){u=x<e?0:f[x-e]
v=w?g[x]:0
f[x]=f[x]+D.c.R(u+v,1)&255}break
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
default:throw B.l(A.c6("Invalid filter value: "+d.j(0)))}},
tc(d,e){var x,w,v,u,t,s=this
if(e===0)return 0
if(e===8)return d.dg()
if(e===16)return d.bP()
for(x=d.c;w=s.c,w<e;){w=d.d
if(w>=x)throw B.l(A.c6("Invalid PNG data."))
v=d.a
d.d=w+1
u=J.v(v,w)
w=s.c
s.b=D.c.eS(u,w)
s.c=w+8}if(e===1)t=1
else if(e===2)t=3
else{if(e===4)x=15
else x=0
t=x}x=w-e
w=D.c.h_(s.b,x)
s.c=x
return w&t},
ar_(d,e){var x=this,w=x.a,v=w.d
switch(v){case 0:e[0]=x.tc(d,w.c)
return
case 2:e[0]=x.tc(d,w.c)
e[1]=x.tc(d,w.c)
e[2]=x.tc(d,w.c)
return
case 3:e[0]=x.tc(d,w.c)
return
case 4:e[0]=x.tc(d,w.c)
e[1]=x.tc(d,w.c)
return
case 6:e[0]=x.tc(d,w.c)
e[1]=x.tc(d,w.c)
e[2]=x.tc(d,w.c)
e[3]=x.tc(d,w.c)
return}throw B.l(A.c6("Invalid color type: "+v+"."))},
a6v(d,e){var x,w,v,u,t,s,r,q,p=this.a,o=p.d
switch(o){case 0:x=p.x
if(x!=null&&p.c>8){p=x[0]
o=x[1]
w=e[0]
d.ik(w,w,w,w!==((p&255)<<24|o&255)>>>0?d.gcg():0)
return}d.kD(e[0],0,0)
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
if(v!==((o&255)<<8|t&255)||w!==((s&255)<<8|r&255)||u!==((q&255)<<8|p&255)){d.ik(v,w,u,d.gcg())
return}}d.kD(v,w,u)
return
case 3:d.sef(0,e[0])
return
case 4:d.kD(e[0],e[1],0)
return
case 6:d.ik(e[0],e[1],e[2],e[3])
return}throw B.l(A.c6("Invalid color type: "+o+"."))}}
A.awH.prototype={
J(){return"PngFilter."+this.b}}
A.bt5.prototype={
ns(d){var x,w,v,u,t,s,r,q,p=this,o=8192,n=d.a
n=n==null?null:n.grt()
if(!(n===!0&&d.gdv()!==C.cc))n=d.gmO()<8&&!d.grn()&&d.gqb()>1
else n=!0
if(n)d=d.ob(C.a7)
if(p.w==null){n=A.q9(!0,o)
p.w=n
n.mz(B.a([137,80,78,71,13,10,26,10],y.t))
x=A.q9(!0,o)
x.ih(d.gcZ(0))
x.ih(d.gb5(0))
x.b0(d.gmO())
if(d.grn())n=3
else if(d.gqb()===1)n=0
else if(d.gqb()===2)n=4
else n=d.gqb()===3?2:6
x.b0(n)
x.b0(0)
x.b0(0)
x.b0(0)
n=p.w
n.toString
p.tj(n,"IHDR",J.d5(D.A.gag(x.c),0,x.a))
n=d.c
if(n!=null){x=A.q9(!0,o)
x.mz(new B.e8(n.a))
x.b0(0)
x.b0(0)
x.mz(n.btH())
n=p.w
n.toString
p.tj(n,"iCCP",J.d5(D.A.gag(x.c),0,x.a))}if(d.grn()){n=p.a
if(n!=null){n=n.a
n===$&&B.b()
p.avw(n)}else{n=d.a
n=n==null?null:n.geW()
n.toString
p.avw(n)}}if(p.r){x=A.q9(!0,o)
n=p.e
n===$&&B.b()
x.ih(n)
x.ih(p.c)
n=p.w
n.toString
p.tj(n,"acTL",J.d5(D.A.gag(x.c),0,x.a))}}w=d.grn()?1:d.gqb()
v=d.gdv()===C.cc?2:1
n=d.gcZ(0)
u=d.gb5(0)
t=d.gb5(0)
s=new Uint8Array(n*u*w*v+t)
p.bgW(0,d,s)
r=C.FZ.azC(s,p.d)
n=d.d
if(n!=null)for(n=new B.ce(n,n.r,n.e,B.p(n).h("ce<1>"));n.q();){u=n.d
t=d.d.i(0,u)
t.toString
x=new A.ava(!0,new Uint8Array(8192))
x.mz(D.pN.cv(u))
x.b0(0)
x.mz(D.pN.cv(t))
u=p.w
u.toString
p.tj(u,"tEXt",J.d5(D.A.gag(x.c),0,x.a))}if(p.r){x=A.q9(!0,o)
x.ih(p.f)
x.ih(d.gcZ(0))
x.ih(d.gb5(0))
x.ih(0)
x.ih(0)
x.l8(d.y)
x.l8(1000)
x.b0(1)
x.b0(0)
n=p.w
n.toString
p.tj(n,"fcTL",J.d5(D.A.gag(x.c),0,x.a));++p.f}if(p.f<=1){n=p.w
n.toString
p.tj(n,"IDAT",r)}else{q=A.q9(!0,o)
q.ih(p.f)
q.mz(r)
n=p.w
n.toString
p.tj(n,"fdAT",J.d5(D.A.gag(q.c),0,q.a));++p.f}},
byO(d){var x,w=this,v=w.w
if(v==null)return null
w.tj(v,"IEND",B.a([],y.t))
w.f=0
v=w.w
x=J.d5(D.A.gag(v.c),0,v.a)
w.w=null
return x},
bxL(d,e){var x,w,v,u,t,s=this,r=d.gl1().length
if(r<=1){s.e=1
s.r=!1
s.ns(d)}else{r=d.gl1().length
s.e=r
s.r=r>1
s.c=d.r
if(d.grn()){x=new A.boX(new Int32Array(256))
x.bcq(256)
x.bqj(d)
s.a=x
for(r=d.gl1(),w=r.length,v=0;v<r.length;r.length===w||(0,B.R)(r),++v){u=r[v]
if(u!==d){x.aoT(u)
x.alY()
x.aoy()
x.akq()}}}for(r=d.gl1(),w=r.length,v=0;v<r.length;r.length===w||(0,B.R)(r),++v){u=r[v]
t=s.a
if(t!=null)s.ns(t.aHQ(u))
else s.ns(u)}}r=s.byO(0)
r.toString
return r},
avw(d){var x,w,v,u=this
if(d.gdv()===C.a7&&d.b===3&&d.a===256){x=u.w
x.toString
u.tj(x,"PLTE",J.d5(d.gag(d),0,null))}else{x=d.a
w=A.q9(!0,x*3)
for(v=0;v<x;++v){w.b0(D.d.D(d.nc(v)))
w.b0(D.d.D(d.na(v)))
w.b0(D.d.D(d.n9(v)))}x=u.w
x.toString
u.tj(x,"PLTE",J.d5(D.A.gag(w.c),0,w.a))}if(d.b===4){x=d.a
w=A.q9(!0,x)
for(v=0;v<x;++v)w.b0(D.d.D(d.ov(v)))
x=u.w
x.toString
u.tj(x,"tRNS",J.d5(D.A.gag(w.c),0,w.a))}},
tj(d,e,f){d.ih(f.length)
d.mz(new B.e8(e))
d.mz(f)
d.ih(A.xf(f,A.xf(new B.e8(e),0)))},
bgW(d,e,f){var x,w,v=this,u=e.grn()?C.aUd:v.b,t=e.gag(0),s=e.a.grK(),r=e.grn()?1:e.gqb(),q=D.c.R(r*e.gmO()+7,3),p=e.gmO()+7>>>3,o=u.a,n=J.dc(t),m=0,l=0,k=null,j=0
while(!0){x=e.a
x=x==null?null:x.b
if(!(j<(x==null?0:x)))break
w=n.z2(t,l,s)
l+=s
switch(o){case 1:m=v.b0V(w,p,q,f,m)
break
case 2:m=v.b0Y(w,k,p,f,m)
break
case 3:m=v.b0P(w,k,p,q,f,m)
break
case 4:m=v.b0S(w,k,p,q,f,m)
break
default:m=v.b0R(w,p,f,m)
break}++j
k=w}},
avq(d,e,f,g,h){var x,w,v;--d
for(x=g.$flags|0;d>=0;h=w){w=h+1
v=e[f+d]
x&2&&B.B(g)
g[h]=v;--d}return h},
b0R(d,e,f,g){var x,w,v=g+1
f.$flags&2&&B.B(f)
f[g]=0
x=d.length
if(e===1)for(g=v,w=0;w<x;++w,g=v){v=g+1
f[g]=d[w]}else for(g=v,w=0;w<x;w+=e)g=this.avq(e,d,w,f,g)
return g},
b0V(d,e,f,g,h){var x,w,v,u,t,s,r=h+1
g.$flags&2&&B.B(g)
g[h]=1
for(h=r,x=0;x<f;x+=e)h=this.avq(e,d,x,g,h)
w=d.length
for(v=e-1,x=f;x<w;x+=e)for(u=v,t=0;t<e;++t,--u,h=r){r=h+1
s=x+u
g[h]=d[s]-d[s-f]&255}return h},
b0Y(d,e,f,g,h){var x,w,v,u,t,s,r,q=h+1
g.$flags&2&&B.B(g)
g[h]=2
x=d.length
for(w=f-1,v=e!=null,h=q,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,h=q){r=v?e[u+t]:0
q=h+1
g[h]=d[u+t]-r&255}return h},
b0P(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o=i+1
h.$flags&2&&B.B(h)
h[i]=3
x=d.length
for(w=f-1,v=e==null,i=o,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=o){r=u+t
q=r<g?0:d[r-g]
p=v?0:e[r]
o=i+1
h[i]=d[r]-(q+p>>>1)}return i},
beV(d,e,f){var x=d+e-f,w=x>d?x-d:d-x,v=x>e?x-e:e-x,u=x>f?x-f:f-x
if(w<=v&&w<=u)return d
else if(v<=u)return e
return f},
b0S(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m=i+1
h.$flags&2&&B.B(h)
h[i]=4
x=d.length
for(w=f-1,v=e==null,i=m,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=m){r=u+t
q=r<g
p=q?0:d[r-g]
o=v?0:e[r]
n=q||v?0:e[r-g]
m=i+1
h[i]=d[r]-this.beV(p,o,n)&255}return i}}
A.D5.prototype={
J(){return"PnmFormat."+this.b}}
A.IO.prototype={}
A.bt8.prototype={
Ie(d){var x
this.b=A.cT(d,!1,null,0)
x=this.TS()
if(x==="P1"||x==="P2"||x==="P5"||x==="P3"||x==="P6")return!0
return!1},
nA(d,e,f){if(this.oA(e)==null)return null
return this.k9(0)},
oA(d){var x,w,v=this
v.b=A.cT(d,!1,null,0)
x=v.TS()
if(x==="P1"){w=v.a=new A.IO(C.nu)
w.e=C.a1W}else if(x==="P2"){w=v.a=new A.IO(C.nu)
w.e=C.a1X}else if(x==="P5"){w=v.a=new A.IO(C.nu)
w.e=C.C9}else if(x==="P3"){w=v.a=new A.IO(C.nu)
w.e=C.a1Y}else if(x==="P6"){w=v.a=new A.IO(C.nu)
w.e=C.Ca}else return v.b=null
w.a=v.M8()
w=v.a
w.toString
w.b=v.M8()
w=v.a
if(w.a===0||w.b===0)return v.a=v.b=null
return w},
k9(d){var x,w,v,u,t,s=this,r=null,q=s.a
if(q==null)return r
x=q.e
if(x===C.a1W){x=q.a
w=A.hK(r,r,C.fi,0,C.bm,q.b,r,0,1,r,C.a7,x,!1)
for(q=w.a,q=q.ga1(q);q.q();){v=q.gL(q)
if(s.TS()==="1")v.kD(1,1,1)
else v.kD(0,0,0)}return w}else if(x===C.a1X||x===C.C9){u=s.M8()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.hK(r,r,s.aAi(u),0,C.bm,q,r,0,1,r,C.a7,x,!1)
for(q=w.a,q=q.ga1(q);q.q();){v=q.gL(q)
t=s.V9(s.a.e,u)
v.kD(t,t,t)}return w}else if(x===C.a1Y||x===C.Ca){u=s.M8()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.hK(r,r,s.aAi(u),0,C.bm,q,r,0,3,r,C.a7,x,!1)
for(q=w.a,q=q.ga1(q);q.q();)q.gL(q).kD(s.V9(s.a.e,u),s.V9(s.a.e,u),s.V9(s.a.e,u))
return w}return r},
aAi(d){if(d>255)return C.cc
if(d>15)return C.a7
if(d>3)return C.h5
if(d>1)return C.h4
return C.fi},
V9(d,e){if(d===C.C9||d===C.Ca)return this.b.dg()
return this.M8()},
M8(){var x,w,v=this.TS()
if(J.bl(v)===0)return 0
try{x=B.dZ(v,null)
return x}catch(w){return 0}},
TS(){var x,w,v,u,t=this.b
if(t==null)return""
x=this.c
if(x.length!==0)return D.b.iA(x,0)
w=D.e.cl(t.bIt())
if(w.length===0)return""
for(;D.e.be(w,"#");)w=D.e.cl(this.b.aE9(70))
t=y.U
v=B.I(new B.af(B.a(w.split(" "),y.T),new A.bt9(),t),!0,t.h("w.E"))
for(t=v.length,u=0;u<t;++u)if(D.e.be(v[u],"#")){D.b.su(v,u)
break}D.b.I(x,v)
if(x.length===0)return""
return D.b.iA(x,0)}}
A.a3A.prototype={
bIs(d,e,f,g,h,i,j){switch(h){case 0:g.toString
this.bhW(d,e,f,g)
break
case 1:if(i==null)i=this.bhT(d,f)
g.toString
this.bhV(d,e,f,g,i,j)
break
default:throw B.l(A.c6("Unsupported compression: "+h))}},
bhT(d,e){var x,w=new Uint16Array(e)
for(x=0;x<e;++x)w[x]=d.bP()
return w},
bhW(d,e,f,g){var x,w=e*f
if(g===16)w*=2
if(w>d.c-d.d){x=new Uint8Array(w)
this.c=x
D.A.l_(x,0,w,255)
return}this.c=d.l6(w).hL()},
bhV(d,e,f,g,h,i){var x,w,v,u,t,s,r=e*f
if(g===16)r*=2
x=new Uint8Array(r)
this.c=x
w=i*f
if(w>=h.length){D.A.l_(x,0,r,255)
return}for(v=0,u=0;u<f;++u,w=t){t=w+1
s=d.jZ(h[w])
d.d=d.d+(s.c-s.d)
this.aZ4(s,this.c,v)
v+=e}},
aZ4(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=e.$flags|0,v=e.length;u=d.d,u<x;){t=d.a
d.d=u+1
u=J.v(t,u)
t=$.op()
t.$flags&2&&B.B(t)
t[0]=u
s=$.pA()[0]
if(s<0){s=1-s
r=J.v(d.a,d.d++)
if(f+s>v)s=v-f
for(q=0;q<s;++q,f=p){p=f+1
w&2&&B.B(e)
e[f]=r}}else{++s
if(f+s>v)s=v-f
for(q=0;q<s;++q,f=p){p=f+1
u=J.v(d.a,d.d++)
w&2&&B.B(e)
e[f]=u}}}},
gbo(d){return this.a}}
A.uo.prototype={
J(){return"PsdColorMode."+this.b}}
A.bu5.prototype={
gaC4(){$===$&&B.b()
return $},
aTp(d){var x,w,v=this
v.as=A.cT(d,!0,null,0)
v.bhr()
if(v.c!==943870035)return
x=v.as.an()
v.as.l6(x)
x=v.as.an()
v.as.l6(x)
x=v.as.an()
v.as.l6(x)
w=v.as
v.at=w.l6(w.c-w.d)},
oc(d){var x,w=this
if(w.c===943870035){x=w.as
x===$&&B.b()
x=x==null}else x=!0
if(x)return!1
w.bhU()
w.at=w.as=null
return!0},
ayW(){if(!this.oc(0))return null
return this.bJ5()},
bJ5(){var x,w=this,v=null,u=w.y
if(u!=null)return u
u=w.a
u=A.hK(v,v,C.a7,0,C.bm,w.b,v,0,4,v,C.a7,u,!1)
w.y=u
u.S(0)
for(x=0;u=w.gaC4(),D.c.JZ(x,u.gu(u));++x)w.gaC4().i(0,x)
u=w.y
u.toString
return u},
bhr(){var x,w,v=this,u=v.as
u===$&&B.b()
v.c=u.an()
u=v.as.bP()
v.d=u
if(u!==1){v.c=0
return}x=v.as.l6(6)
for(w=0;w<6;++w)if(J.v(x.a,x.d+w)!==0){v.c=0
return}v.e=v.as.bP()
v.b=v.as.an()
v.a=v.as.an()
v.f=v.as.bP()
v.r=C.aCN[v.as.bP()]},
bhU(){var x,w,v,u,t,s,r=this,q=r.at
q===$&&B.b()
q.d=q.b
x=q.bP()
if(x===1){q=r.b
w=r.e
w===$&&B.b()
v=q*w
u=new Uint16Array(v)
for(t=0;t<v;++t)u[t]=r.at.bP()}else u=null
r.x=B.a([],y._)
t=0
while(!0){q=r.e
q===$&&B.b()
if(!(t<q))break
q=r.x
w=r.at
w.toString
s=t===3?-1:t
s=new A.a3A(s)
s.bIs(w,r.a,r.b,r.f,x,u,t)
q.push(s);++t}r.y=A.cXp(r.r,r.f,r.a,r.b,r.x)}}
A.bu4.prototype={
nA(d,e,f){var x,w,v,u=null,t=A.cA4(e)
this.a=t
x=1
if(x===1){t=t.ayW()
return t}for(w=u,v=0;v<x;++v){t=this.a
f=t==null?u:t.ayW()
if(f==null)continue
if(w==null){f.w=C.akT
w=f}else w.ns(f)}return w}}
A.axb.prototype={}
A.yZ.prototype={
aK(d,e){return new A.yZ(this.a*e,this.b*e,this.c*e)},
a5(d,e){return new A.yZ(this.a+e.a,this.b+e.b,this.c+e.c)},
a4(d,e){return new A.yZ(this.a-e.a,this.b-e.b,this.c-e.c)}}
A.m3.prototype={
aK(d,e){var x=this
return new A.m3(x.a*e,x.b*e,x.c*e,x.d*e)},
a5(d,e){var x=this
return new A.m3(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
a4(d,e){var x=this
return new A.m3(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)}}
A.a3D.prototype={
gb5(d){return this.b}}
A.QN.prototype={
gb5(d){return this.f}}
A.axa.prototype={
gb5(d){return this.b}}
A.rB.prototype={
sNw(d){var x=this.a,w=this.b
x.$flags&2&&B.B(x)
x[w+1]=d},
QX(){var x=this.e,w=this.d
if(x)return new A.yZ(C.fx[w>>>9],C.fx[w>>>4&31],C.ex[w&15])
else return new A.yZ(C.ex[w>>>7&15],C.ex[w>>>3&15],C.vn[w&7])},
QZ(){var x=this.e,w=this.d
if(x)return new A.m3(C.fx[w>>>9],C.fx[w>>>4&31],C.ex[w&15],255)
else return new A.m3(C.ex[w>>>7&15],C.ex[w>>>3&15],C.vn[w&7],C.vn[w>>>11&7])},
QY(){var x=this.r,w=this.f
if(x)return new A.yZ(C.fx[w>>>10],C.fx[w>>>5&31],C.fx[w&31])
else return new A.yZ(C.ex[w>>>8&15],C.ex[w>>>4&15],C.ex[w&15])},
R_(){var x=this.r,w=this.f
if(x)return new A.m3(C.fx[w>>>10],C.fx[w>>>5&31],C.fx[w&31],255)
else return new A.m3(C.ex[w>>>8&15],C.ex[w>>>4&15],C.ex[w&15],C.vn[w>>>12&7])},
Lr(){var x=this,w=x.c?1:0,v=x.d,u=x.e?1:0,t=x.f,s=x.r?1:0
return(w|(v&16383)<<1|u<<15|(t&32767)<<16|s<<31)>>>0},
uw(d){var x=this,w=x.a[x.b+1]
x.c=(w&1)===1
x.sNw(x.Lr())
x.d=w>>>1&16383
x.sNw(x.Lr())
x.e=(w>>>15&1)===1
x.sNw(x.Lr())
x.f=w>>>16&32767
x.sNw(x.Lr())
x.r=(w>>>31&1)===1
x.sNw(x.Lr())}}
A.bu6.prototype={
oA(d){var x,w=this,v=d.length,u=v-(v>>>1&1431655765)>>>0
u=(u&858993459)+(u>>>2&858993459)
if((u+(u>>>4)>>>0&252645135)*16843009>>>0>>>24===1){x=w.aYO(d)
if(x!=null){w.a=d
return w.b=x}}x=w.aZ3(d)
if(x!=null){w.a=d
return w.b=x}x=w.aZ1(d)
if(x!=null){w.a=d
return w.b=x}return null},
aZ3(d){var x,w,v=A.cT(d,!1,null,0)
if(v.an()!==52)return null
if(v.an()!==55727696)return null
x=B.a([0,0,0,0],y.t)
w=new A.QN(x)
v.an()
w.b=v.an()
x[0]=v.dg()
x[1]=v.dg()
x[2]=v.dg()
x[3]=v.dg()
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
aZ1(d){var x,w,v=A.cT(d,!1,null,0)
if(v.an()!==52)return null
x=new A.a3D()
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
aYO(d){var x,w,v,u,t,s,r=null,q=d.length,p=A.cT(d,!1,r,0)
if(p.an()!==0)return r
x=new A.axa()
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
if((D.c.er(64,s)&q)>>>0!==0){u=D.c.er(16,t)
v=1
break}if((D.c.er(128,s)&q)>>>0!==0){u=D.c.er(16,t)
break}++t}if(t===10)return r}if((v+1)*2===4)return r
x.b=x.a=u
return x},
k9(d){var x,w,v=this,u=v.b
if(u==null||v.a==null)return null
if(u instanceof A.axa){u=u.a
x=v.b
x=x.gb5(x)
w=v.a
w.toString
return v.a3t(u,x,w)}else if(u instanceof A.a3D){u=v.a
u.toString
return v.aZ0(u)}else if(u instanceof A.QN){u=v.a
u.toString
return v.aZ2(u)}return null},
nA(d,e,f){if(this.oA(e)==null)return null
return this.k9(0)},
aZ0(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.length
if(j<52||l.b==null)return k
x=l.b
x.toString
y.ab.a(x)
w=A.cT(d,!1,k,0)
w.d+=52
v=x.Q
if(v<1)v=(x.d&4096)!==0?6:1
if(v!==1)return k
u=x.a
t=x.b
if(u*t*x.f/8>j-52)return k
switch(x.d&255){case 16:s=A.hK(k,k,C.a7,0,C.bm,t,k,0,4,k,C.a7,u,!1)
for(x=s.a,x=x.ga1(x);x.q();){r=x.gL(x)
q=J.v(w.a,w.d++)
p=J.v(w.a,w.d++)
r.saz(0,p&240)
r.saL((p&15)<<4)
r.saN(0,q&240)
r.saO(0,(q&15)<<4)}return s
case 17:s=A.hK(k,k,C.a7,0,C.bm,t,k,0,4,k,C.a7,u,!1)
for(x=s.a,x=x.ga1(x);x.q();){r=x.gL(x)
o=w.bP()
n=(o&1)!==0?255:0
r.saz(0,o>>>8&248)
r.saL(o>>>3&248)
r.saN(0,(o&62)<<2)
r.saO(0,n)}return s
case 18:s=A.hK(k,k,C.a7,0,C.bm,t,k,0,4,k,C.a7,u,!1)
for(x=s.a,x=x.ga1(x);x.q();){r=x.gL(x)
r.saz(0,J.v(w.a,w.d++))
r.saL(J.v(w.a,w.d++))
r.saN(0,J.v(w.a,w.d++))
r.saO(0,J.v(w.a,w.d++))}return s
case 19:s=A.hK(k,k,C.a7,0,C.bm,t,k,0,3,k,C.a7,u,!1)
for(x=s.a,x=x.ga1(x);x.q();){r=x.gL(x)
o=w.bP()
r.saz(0,o>>>8&248)
r.saL(o>>>3&252)
r.saN(0,(o&31)<<3)}return s
case 20:s=A.hK(k,k,C.a7,0,C.bm,t,k,0,3,k,C.a7,u,!1)
for(x=s.a,x=x.ga1(x);x.q();){r=x.gL(x)
o=w.bP()
r.saz(0,(o&31)<<3)
r.saL(o>>>2&248)
r.saN(0,o>>>7&248)}return s
case 21:s=A.hK(k,k,C.a7,0,C.bm,t,k,0,3,k,C.a7,u,!1)
for(x=s.a,x=x.ga1(x);x.q();){r=x.gL(x)
r.saz(0,J.v(w.a,w.d++))
r.saL(J.v(w.a,w.d++))
r.saN(0,J.v(w.a,w.d++))}return s
case 22:s=A.hK(k,k,C.a7,0,C.bm,t,k,0,1,k,C.a7,u,!1)
for(x=s.a,x=x.ga1(x);x.q();)x.gL(x).saz(0,J.v(w.a,w.d++))
return s
case 23:s=A.hK(k,k,C.a7,0,C.bm,t,k,0,4,k,C.a7,u,!1)
for(x=s.a,x=x.ga1(x);x.q();){r=x.gL(x)
n=J.v(w.a,w.d++)
m=J.v(w.a,w.d++)
r.saz(0,m)
r.saL(m)
r.saN(0,m)
r.saO(0,n)}return s
case 24:return k
case 25:return x.y===0?l.akJ(u,t,w.hL()):l.a3t(u,t,w.hL())}return k},
aZ2(d){var x,w,v,u=this
if(!(u.b instanceof A.QN))return null
x=A.cT(d,!1,null,0)
w=x.d+=52
v=y.aM.a(u.b)
x.d=w+v.Q
if(v.c[0]===0)switch(v.b){case 2:return u.akJ(v.r,v.f,x.hL())
case 3:return u.a3t(v.r,v.f,x.hL())}return null},
akJ(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=A.hK(b5,b5,C.a7,0,C.bm,c6,b5,0,3,b5,C.a7,c5,!1),b7=c5/4|0,b8=b7-1,b9=J.oq(D.A.gag(c7),0,null),c0=new A.rB(b9),c1=new A.rB(J.oq(D.A.gag(c7),0,null)),c2=new A.rB(J.oq(D.A.gag(c7),0,null)),c3=new A.rB(J.oq(D.A.gag(c7),0,null)),c4=new A.rB(J.oq(D.A.gag(c7),0,null))
for(x=0,w=0;x<b7;++x,w+=4)for(v=0,u=0;v<b7;++v,u+=4){c0.b=A.z_(v,x)<<1>>>0
c0.uw(0)
t=b9[c0.b]
s=c0.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&b8)>>>0
o=(p+1&b8)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&b8)>>>0
k=(l+1&b8)>>>0
c1.b=A.z_(l,p)<<1>>>0
c1.uw(0)
c2.b=A.z_(k,p)<<1>>>0
c2.uw(0)
c3.b=A.z_(l,o)<<1>>>0
c3.uw(0)
c4.b=A.z_(k,o)<<1>>>0
c4.uw(0)
j=c1.QX()
i=C.d4[r][0]
h=c2.QX()
g=C.d4[r][1]
f=c3.QX()
e=C.d4[r][2]
d=c4.QX()
a0=C.d4[r][3]
a1=c1.QY()
a2=C.d4[r][0]
a3=c2.QY()
a4=C.d4[r][1]
a5=c3.QY()
a6=C.d4[r][2]
a7=c4.QY()
a8=C.d4[r][3]
a9=C.OS[s+t&3]
b0=a9[0]
b1=a9[1]
b2=D.c.R((j.a*i+h.a*g+f.a*e+d.a*a0)*b0+(a1.a*a2+a3.a*a4+a5.a*a6+a7.a*a8)*b1,7)
b3=D.c.R((j.b*i+h.b*g+f.b*e+d.b*a0)*b0+(a1.b*a2+a3.b*a4+a5.b*a6+a7.b*a8)*b1,7)
b4=D.c.R((j.c*i+h.c*g+f.c*e+d.c*a0)*b0+(a1.c*a2+a3.c*a4+a5.c*a6+a7.c*a8)*b1,7)
b1=b6.a
if(b1!=null)b1.fe(m+u,n,b2,b3,b4)
t=t>>>2;++r}}}return b6},
a3t(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=A.hK(a4,a4,C.a7,0,C.bm,b5,a4,0,4,a4,C.a7,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.oq(D.A.gag(b6),0,null),a9=new A.rB(a8),b0=new A.rB(J.oq(D.A.gag(b6),0,null)),b1=new A.rB(J.oq(D.A.gag(b6),0,null)),b2=new A.rB(J.oq(D.A.gag(b6),0,null)),b3=new A.rB(J.oq(D.A.gag(b6),0,null))
for(x=0,w=0;x<a6;++x,w+=4)for(v=0,u=0;v<a6;++v,u+=4){a9.b=A.z_(v,x)<<1>>>0
a9.uw(0)
t=a8[a9.b]
s=a9.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&a7)>>>0
o=(p+1&a7)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&a7)>>>0
k=(l+1&a7)>>>0
b0.b=A.z_(l,p)<<1>>>0
b0.uw(0)
b1.b=A.z_(k,p)<<1>>>0
b1.uw(0)
b2.b=A.z_(l,o)<<1>>>0
b2.uw(0)
b3.b=A.z_(k,o)<<1>>>0
b3.uw(0)
j=b0.QZ()
i=C.d4[r][0]
h=b1.QZ()
g=C.d4[r][1]
g=new A.m3(j.a*i,j.b*i,j.c*i,j.d*i).a5(0,new A.m3(h.a*g,h.b*g,h.c*g,h.d*g))
h=b2.QZ()
i=C.d4[r][2]
i=g.a5(0,new A.m3(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.QZ()
g=C.d4[r][3]
f=i.a5(0,new A.m3(h.a*g,h.b*g,h.c*g,h.d*g))
g=b0.R_()
h=C.d4[r][0]
i=b1.R_()
j=C.d4[r][1]
j=new A.m3(g.a*h,g.b*h,g.c*h,g.d*h).a5(0,new A.m3(i.a*j,i.b*j,i.c*j,i.d*j))
i=b2.R_()
h=C.d4[r][2]
h=j.a5(0,new A.m3(i.a*h,i.b*h,i.c*h,i.d*h))
i=b3.R_()
j=C.d4[r][3]
e=h.a5(0,new A.m3(i.a*j,i.b*j,i.c*j,i.d*j))
d=C.OS[s+t&3]
j=d[0]
i=d[1]
a0=D.c.R(f.a*j+e.a*i,7)
a1=D.c.R(f.b*j+e.b*i,7)
a2=D.c.R(f.c*j+e.c*i,7)
a3=D.c.R(f.d*d[2]+e.d*d[3],7)
i=a5.a
if(i!=null)i.kC(m+u,n,a0,a1,a2,a3)
t=t>>>2;++r}}}return a5}}
A.aBv.prototype={
qi(d,e){var x,w=this
if(e.c-e.d<18)return
w.a=e.dg()
w.b=e.dg()
x=e.dg()
w.c=x<12?C.ax5[x]:C.wJ
e.bP()
w.e=e.bP()
w.f=e.dg()
e.bP()
e.bP()
w.x=e.bP()
w.y=e.bP()
w.z=e.dg()
w.Q=e.dg()},
aBU(){var x=this,w=x.z
if(w!==8&&w!==16&&w!==24&&w!==32)return!1
w=x.c
if(w===C.iI||w===C.iJ){if(x.e>256||x.b!==1)return!1
w=x.f
if(w!==16&&w!==24&&w!==32)return!1}else if(x.b===1)return!1
return!0}}
A.o8.prototype={
J(){return"TgaImageType."+this.b}}
A.bFX.prototype={
nA(d,e,f){if(this.oA(e)==null)return null
return this.k9(0)},
oA(d){var x,w,v,u,t=this
t.a=new A.aBv(C.wJ)
x=A.cT(d,!1,null,0)
t.b=x
w=x.l6(18)
t.a.qi(0,w)
if(!t.a.aBU())return null
x=t.b
v=t.a
x.d+=v.a
u=v.c
if(u===C.iI||u===C.iJ)v.as=x.l6(v.e*D.c.R(v.f,3)).hL()
x=t.a
x.ax=t.b.d
return x},
k9(d){var x=this,w=x.a
if(w==null)return null
w=w.c
if(w===C.a4O)return x.akI()
else if(w===C.a4N||w===C.iJ)return x.aZ6()
else if(w===C.iI)return x.akI()
return null},
akD(d,e){var x,w,v,u,t,s,r,q=this,p=A.cT(d,!1,null,0),o=q.a.f
if(o===16){o=q.b
o===$&&B.b()
x=o.bP()
w=x>>>7&248
v=x>>>2&248
u=(x&31)<<3
t=(x&32768)!==0?0:255
for(s=0;s<q.a.e;++s){e.uh(s,w)
e.uf(s,v)
e.ue(s,u)
e.ud(s,t)}}else{r=o===32
for(s=0;s<q.a.e;++s){u=J.v(p.a,p.d++)
v=J.v(p.a,p.d++)
w=J.v(p.a,p.d++)
t=r?J.v(p.a,p.d++):255
e.uh(s,w)
e.uf(s,v)
e.ue(s,u)
e.ud(s,t)}}},
aZ6(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=h.z,f=g===16,e=f||g===32,d=h.x,a0=h.y,a1=e?4:3
h=h.c
x=A.hK(i,i,C.a7,0,C.bm,a0,i,0,a1,i,C.a7,d,h===C.iI||h===C.iJ)
h=x.a
if((h==null?i:h.geW())!=null){h=j.a.as
h.toString
d=x.a
d=d==null?i:d.geW()
d.toString
j.akD(h,d)}w=x.gcZ(0)
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
if(d!=null)d.mB(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}else{d=j.b
if(f){n=d.bP()
q=n>>>7&248
m=n>>>2&248
l=(n&31)<<3
k=(n&32768)!==0?0:255
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.kC(u,v,q,m,l,k)
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
if(d!=null)d.kC(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}}else if(h)for(p=0;p<s;++p){d=j.b
q=J.v(d.a,d.d++)
o=u+1
d=x.a
if(d!=null)d.mB(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}else if(f)for(p=0;p<s;++p){n=j.b.bP()
k=(n&32768)!==0?0:255
o=u+1
d=x.a
if(d!=null)d.kC(u,v,n>>>7&248,n>>>2&248,(n&31)<<3,k)
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
if(d!=null)d.kC(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}if(u>=w){--v
if(v<0)break
u=0}}return x},
akI(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
g===$&&B.b()
x=i.a
g.d=x.ax
w=x.z
g=w===16
v=!0
if(!g)if(w!==32){u=x.c
if(u===C.iI||u===C.iJ){u=x.f
u=u===16||u===32}else u=!1
v=u}u=x.x
t=x.y
s=v?4:3
x=x.c
r=A.hK(h,h,C.a7,0,C.bm,t,h,0,s,h,C.a7,u,x===C.iI||x===C.iJ)
x=i.a
u=x.c
if(u===C.iI||u===C.iJ){x=x.as
x.toString
u=r.a
u=u==null?h:u.geW()
u.toString
i.akD(x,u)}if(w===8)for(q=r.gb5(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
g=i.b
o=J.v(g.a,g.d++)
g=r.a
if(g!=null)g.mB(p,q,o);++p}}else if(g)for(q=r.gb5(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
n=i.b.bP()
m=(n&32768)!==0?0:255
g=r.a
if(g!=null)g.kC(p,q,n>>>7&248,n>>>2&248,(n&31)<<3,m);++p}}else for(q=r.gb5(0)-1;q>=0;--q){p=0
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
if(g!=null)g.kC(p,q,j,k,l,m);++p}}return r}}
A.bGJ.prototype={
j8(d){var x,w,v,u,t=this
if(d===0)return 0
if(t.c===0){t.c=8
t.b=t.a.dg()}for(x=t.a,w=0;v=t.c,d>v;){w=D.c.eS(w,v)+(t.b&C.n4[v])
d-=v
t.c=8
t.b=J.v(x.a,x.d++)}if(d>0){if(v===0){t.c=8
t.b=x.dg()}x=D.c.eS(w,d)
v=t.b
u=t.c-d
w=x+(D.c.o_(v,u)&C.n4[d])
t.c=u}return w}}
A.aBA.prototype={
j(d){var x=this,w=x.a,v=$.clL().i(0,w)
if(v!=null)return v.a+": "+x.b.j(0)+" "+x.c
return"<"+w+">: "+x.b.j(0)+" "+x.c},
pa(d){var x,w,v,u=this,t=u.e
if(t!=null)return t
t=u.f
t.d=u.d
x=u.c
w=u.b
v=t.l6(x*(w!==C.Y?C.jl[w.a]:0))
switch(w.a){case 1:return u.e=new A.tY(new Uint8Array(B.bU(v.l6(x).hL())))
case 2:return u.e=new A.BG(x===0?"":v.qj(x-1))
case 7:return u.e=new A.tY(new Uint8Array(B.bU(v.l6(x).hL())))
case 3:return u.e=A.cxz(v,x)
case 4:return u.e=A.cxu(v,x)
case 5:return u.e=A.cxv(v,x)
case 11:return u.e=A.cxB(v,x)
case 12:return u.e=A.cxt(v,x)
case 6:return u.e=new A.vX(new Int8Array(B.bU(J.clT(D.A.gag(v.hL()),0,x))))
case 8:return u.e=A.cxy(v,x)
case 9:return u.e=A.cxw(v,x)
case 10:return u.e=A.cxx(v,x)
case 0:return null}},
gp(d){return this.e}}
A.bGL.prototype={
bw8(d,e,f,g){var x,w,v,u=this
u.r=e
u.x=u.w=0
x=D.c.b7(u.a+7,8)
for(w=0,v=0;v<g;++v){u.a3r(d,w,f)
w+=x}},
a3r(d,e,f){var x,w,v,u,t,s,r,q,p=this
p.d=0
for(x=p.a,w=!0;f<x;){for(;w;){v=p.yI(10)
u=C.Pj[v]
t=D.c.R(u,1)&15
if(t===12){u=C.tY[(v<<2&12|p.oE(2))>>>0]
s=D.c.R(u,1)
f+=D.c.R(u,4)&4095
p.ls(4-(s&7))}else if(t===0)throw B.l(A.c6("TIFFFaxDecoder0"))
else if(t===15)throw B.l(A.c6("TIFFFaxDecoder1"))
else{f+=D.c.R(u,5)&2047
p.ls(10-t)
if((u&1)===0){p.f[p.d++]=f
w=!1}}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}for(;!w;){u=C.Kq[p.oE(4)]
r=u>>>5&2047
q=!0
if(r===100){u=C.LX[p.yI(9)]
t=D.c.R(u,1)&15
r=D.c.R(u,5)&2047
if(t===12){p.ls(5)
u=C.tY[p.oE(4)]
s=D.c.R(u,1)
r=D.c.R(u,4)&4095
p.pD(d,e,f,r)
f+=r
p.ls(4-(s&7))}else if(t===15)throw B.l(A.c6("TIFFFaxDecoder2"))
else{p.pD(d,e,f,r)
f+=r
p.ls(9-t)
if((u&1)===0){p.f[p.d++]=f
w=q}}}else{if(r===200){u=C.Kk[p.oE(2)]
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
bw9(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.r=a0
e.z=3
e.x=e.w=0
x=e.a
w=D.c.b7(x+7,8)
v=B.bJ(2,null,!1,y.s)
e.at=a3&1
e.as=a3>>>2&1
if(e.aqW()!==1)throw B.l(A.c6("TIFFFaxDecoder3"))
e.a3r(d,0,a1)
for(u=w,t=1;t<a2;++t){if(e.aqW()===0){s=e.e
e.e=e.f
e.f=s
e.y=0
r=a1
q=-1
p=!0
o=0
while(!0){r.toString
if(!(r<x))break
e.amL(q,p,v)
n=v[0]
m=v[1]
l=C.P_[e.oE(7)]&255
k=l>>>3&15
j=l&7
if(k===0){if(!p){m.toString
e.pD(d,u,r,m-r)}e.ls(7-j)
r=m
q=r}else if(k===1){e.ls(7-j)
i=o+1
h=i+1
if(p){r+=e.T9()
e.f[o]=r
g=e.T8()
e.pD(d,u,r,g)
r+=g
e.f[i]=r}else{g=e.T8()
e.pD(d,u,r,g)
r+=g
e.f[o]=r
r+=e.T9()
e.f[i]=r}o=h
q=r}else{if(k<=8){n.toString
f=n+(k-5)
i=o+1
e.f[o]=f
p=!p
if(p)e.pD(d,u,r,f-r)
e.ls(7-j)}else throw B.l(A.c6("TIFFFaxDecoder4"))
r=f
o=i
q=r}}e.f[o]=r
e.d=o+1}else e.a3r(d,u,a1)
u+=w}},
bwe(a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.r=a4
a2.z=4
a2.x=a2.w=0
x=a2.a
w=D.c.b7(x+7,8)
v=B.bJ(2,null,!1,y.s)
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
a2.amL(p,o,v)
m=v[0]
l=v[1]
k=C.P_[a2.oE(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
a2.pD(a3,t,q,l-q)}a2.ls(7-i)
q=l
p=q}else if(j===1){a2.ls(7-i)
h=n+1
g=h+1
if(o){q+=a2.T9()
r[n]=q
f=a2.T8()
a2.pD(a3,t,q,f)
q+=f
r[h]=q}else{f=a2.T8()
a2.pD(a3,t,q,f)
q+=f
r[n]=q
q+=a2.T9()
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
p=q}else if(j===11){if(a2.oE(3)!==7)throw B.l(A.c6("TIFFFaxDecoder5"))
for(d=0,a0=!1;!a0;o=a1){for(;a2.oE(1)!==1;)++d
if(d>5){d-=6
if(!o&&d>0){h=n+1
r[n]=q
n=h}q+=d
if(d>0)o=!0
a1=a2.oE(1)===0
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
n=h}}}else throw B.l(A.c6("TIFFFaxDecoder5 "+j))}r[n]=q
a2.d=n+1
t+=w}},
T9(){var x,w,v,u,t,s,r=this
for(x=0,w=!0;w;){v=r.yI(10)
u=C.Pj[v]
t=D.c.R(u,1)&15
if(t===12){u=C.tY[(v<<2&12|r.oE(2))>>>0]
s=D.c.R(u,1)
x+=D.c.R(u,4)&4095
r.ls(4-(s&7))}else if(t===0)throw B.l(A.c6("TIFFFaxDecoder0"))
else if(t===15)throw B.l(A.c6("TIFFFaxDecoder1"))
else{x+=D.c.R(u,5)&2047
r.ls(10-t)
if((u&1)===0)w=!1}}return x},
T8(){var x,w,v,u,t,s,r=this
for(x=0,w=!1;!w;){v=C.Kq[r.oE(4)]
u=v>>>5&2047
if(u===100){v=C.LX[r.yI(9)]
t=D.c.R(v,1)&15
s=D.c.R(v,5)
if(t===12){r.ls(5)
v=C.tY[r.oE(4)]
s=D.c.R(v,1)
x+=D.c.R(v,4)&4095
r.ls(4-(s&7))}else if(t===15)throw B.l(A.c6("TIFFFaxDecoder2"))
else{x+=s&2047
r.ls(9-t)
if((v&1)===0)w=!0}}else{if(u===200){v=C.Kk[r.oE(2)]
x+=v>>>5&2047
r.ls(2-(v>>>1&15))}else{x+=u
r.ls(4-(v>>>1&15))}w=!0}}return x},
aqW(){var x,w,v=this,u="TIFFFaxDecoder8",t=v.as
if(t===0){if(v.yI(12)!==1)throw B.l(A.c6("TIFFFaxDecoder6"))}else if(t===1){t=v.w
t.toString
x=8-t
if(v.yI(x)!==0)throw B.l(A.c6(u))
if(x<4)if(v.yI(8)!==0)throw B.l(A.c6(u))
for(;w=v.yI(8),w!==1;)if(w!==0)throw B.l(A.c6(u))}if(v.at===0)return 1
else return v.oE(1)},
amL(d,e,f){var x,w=this,v=w.e,u=w.d,t=w.y,s=t>0?t-1:0
s=e?(s&4294967294)>>>0:(s|1)>>>0
for(x=s;x<u;x+=2){t=v[x]
t.toString
d.toString
if(t>d){w.y=x
f[0]=t
break}}t=x+1
if(t<u)f[1]=v[t]},
pD(d,e,f,g){var x,w,v,u,t,s=8*e+f,r=s+g,q=D.c.R(s,3),p=s&7
if(p>0){x=D.c.eS(1,7-p)
w=J.v(d.a,d.d+q)
while(!0){if(!(x>0&&s<r))break
w=(w|x)>>>0
x=x>>>1;++s}d.m(0,q,w)}q=D.c.R(s,3)
for(v=r-7;s<v;q=u){u=q+1
J.bV(d.a,d.d+q,255)
s+=8}for(;s<r;){q=D.c.R(s,3)
v=J.v(d.a,d.d+q)
t=D.c.eS(1,7-(s&7))
J.bV(d.a,d.d+q,(v|t)>>>0);++s}},
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
s=C.lb[J.v(j.a,j.d+(v+2))&255]}}}else throw B.l(A.c6("TIFFFaxDecoder7"))
j=k.w
j.toString
q=8-j
p=d-q
if(p>8){o=p-8
n=8}else{n=p
o=0}j=k.x
j.toString
j=k.x=j+1
m=D.c.eS(r&C.n4[q],p)
l=D.c.h_(t&C.Bb[n],8-n)
if(o!==0){l=D.c.eS(l,o)|D.c.h_(s&C.Bb[o],8-o)
k.x=j+1
k.w=o}else if(n===8){k.w=0
k.x=j+1}else k.w=n
return(m|l)>>>0},
oE(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.r
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
t=C.lb[J.v(m.a,m.d+(v+1))&255]}}else throw B.l(A.c6("TIFFFaxDecoder7"))
m=n.w
m.toString
r=8-m
q=d-r
p=r-d
if(p>=0){o=D.c.h_(s&C.n4[r],p)
m+=d
n.w=m
if(m===8){n.w=0
m=n.x
m.toString
n.x=m+1}}else{o=(D.c.eS(s&C.n4[r],-p)|D.c.h_(t&C.Bb[q],8-q))>>>0
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
A.aBB.prototype={
aTD(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.cb(d,g,0),e=d.bP()
for(x=h.a,w=0;w<e;++w){v=d.bP()
u=d.bP()
t=C.N2[u]
s=C.jl[u]
r=d.an()
if(r*s>4)q=d.an()
else{q=d.d
d.d=q+4}p=new A.aBA(v,t,r,q,f)
x.m(0,v,p)
if(v===256){o=p.pa(0)
o=o==null?g:o.D(0)
h.b=o==null?0:o}else if(v===257){o=p.pa(0)
o=o==null?g:o.D(0)
h.c=o==null?0:o}else if(v===262){n=p.pa(0)
m=n==null?g:n.D(0)
if(m==null)m=17
if(m<17)h.d=C.avu[m]
else h.d=C.DR}else if(v===259){o=p.pa(0)
o=o==null?g:o.D(0)
h.e=o==null?0:o}else if(v===258){o=p.pa(0)
o=o==null?g:o.D(0)
h.f=o==null?0:o}else if(v===277){o=p.pa(0)
o=o==null?g:o.D(0)
h.r=o==null?0:o}else if(v===317){o=p.pa(0)
o=o==null?g:o.D(0)
h.z=o==null?0:o}else if(v===339){o=p.pa(0)
n=o==null?g:o.D(0)
h.w=C.aw0[n==null?0:n]}else if(v===320){n=p.pa(0)
if(n!=null){o=J.cMP(D.A.gag(n.u0()))
h.go=o
h.id=0
o=o.length/3|0
h.k1=o
h.k2=o*2}}}l=h.go
o=l!=null
if(o&&h.d===C.DS)h.r=1
if(h.b===0||h.c===0)return
if(o&&h.f===8){k=l.length
for(o=l.$flags|0,w=0;w<k;++w){j=l[w]
o&2&&B.B(l)
l[w]=j>>>8}}if(h.d===C.DQ)h.y=!0
if(x.a3(0,324)){h.ax=h.FT(322)
h.ay=h.FT(323)
h.ch=h.V8(324)
h.CW=h.V8(325)}else{h.ax=h.V7(322,h.b)
if(!x.a3(0,278))h.ay=h.V7(323,h.c)
else{i=h.FT(278)
if(i===-1)h.ay=h.c
else h.ay=i}h.ch=h.V8(273)
h.CW=h.V8(279)}o=h.b
j=h.ax
h.cx=D.c.hw(o+j-1,j)
j=h.c
o=h.ay
h.cy=D.c.hw(j+o-1,o)
h.dx=h.V7(266,1)
h.dy=h.FT(292)
h.fr=h.FT(293)
h.FT(338)
switch(h.d.a){case 0:case 1:x=h.f
if(x===1&&h.r===1)h.x=C.DP
else if(x===4&&h.r===1)h.x=C.b5j
else if(D.c.ap(x,8)===0){x=h.r
if(x===1)h.x=C.b5k
else if(x===2)h.x=C.b5l
else h.x=C.wM}break
case 2:if(D.c.ap(h.f,8)===0){x=h.r
if(x===3)h.x=C.a4Q
else if(x===4)h.x=C.b5n
else h.x=C.wM}break
case 3:x=!1
if(h.r===1)if(h.go!=null){x=h.f
x=x===4||x===8||x===16}if(x)h.x=C.b5m
break
case 4:if(h.f===1&&h.r===1)h.x=C.DP
break
case 6:if(h.e===7&&h.f===8&&h.r===3)h.x=C.a4Q
else{if(x.a3(0,530)){n=x.i(0,530).pa(0)
h.Q=n.D(0)
x=h.as=n.jb(0,1)}else x=h.as=h.Q=2
o=h.Q
o===$&&B.b()
if(o*x===1)h.x=C.wM
else if(h.f===8&&h.r===3)h.x=C.b5o}break
default:if(D.c.ap(h.f,8)===0)h.x=C.wM
break}},
dk(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.w,d=e===C.nX,a0=e===C.bd
e=g.f
if(e===1)x=C.fi
else if(e===2)x=C.h4
else{if(e===4)e=C.h5
else if(d&&e===16)e=C.hL
else if(d&&e===32)e=C.j7
else if(d&&e===64)e=C.kD
else if(a0&&e===8)e=C.kE
else if(a0&&e===16)e=C.kF
else if(a0&&e===32)e=C.kG
else if(e===16)e=C.cc
else e=e===32?C.j8:C.a7
x=e}w=g.go!=null&&g.d===C.DS
v=w?3:g.r
e=g.b
u=A.hK(f,f,x,0,C.bm,g.c,f,0,v,f,x,e,w)
if(w){e=u.a
e=e==null?f:e.geW()
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
e.pk(k,t[l],t[m],t[n])}}j=0
i=0
while(!0){e=g.cy
e===$&&B.b()
if(!(j<e))break
h=0
while(!0){e=g.cx
e===$&&B.b()
if(!(h<e))break
g.aZ7(a2,u,h,j);++h;++i}++j}return u},
aZ7(b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null
if(a8.x===C.DP){a8.aYR(b0,b1,b2,b3)
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
else if(u===5){w=A.cT(new Uint8Array(p),!1,a9,0)
v=A.cyr()
try{J.cMU(v,A.cb(b0,x,0),w.a)}catch(o){}if(a8.z===2)for(n=0;n<a8.ay;++n){m=a8.r
u=a8.ax
l=m*(n*u+1)
k=u*m
for(;m<k;++m){u=w
r=J.v(u.a,u.d+l)
j=w
i=a8.r
i=J.v(j.a,j.d+(l-i))
J.bV(u.a,u.d+l,r+i);++l}}}else if(u===32773){w=A.cT(new Uint8Array(p),!1,a9,0)
a8.akH(b0,p,w.a)}else if(u===32946)w=A.cT(C.iX.Cu(A.BU(b0.Jm(0,0,x),1,a9,0),!1),!1,a9,0)
else if(u===8)w=A.cT(C.iX.Cu(A.BU(b0.Jm(0,0,x),1,a9,0),!1),!1,a9,0)
else if(u===6){a8.baE(new A.ar2().dk(0,y.D.a(b0.Jm(0,0,x))),b1,s,q,a8.ax,a8.ay)
return}else throw B.l(A.c6("Unsupported Compression Type: "+u))
for(h=q,g=0;g<a8.ay;++g,++h)for(f=s,e=0;e<a8.ax;++e,++f){u=w
if(u.d>=u.c)break
u=a8.r
if(u===1){u=a8.w
if(u===C.nX){u=a8.f
if(u===32){u=w.an()
r=$.hY()
r.$flags&2&&B.B(r)
r[0]=u
d=$.Fh()[0]}else if(u===64)d=w.a_C()
else if(u===16){u=w.bP()
r=$.hI
d=(r!=null?r:A.iC())[u]}else d=0
if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.mB(f,h,d)}}else{r=a8.f
if(r===8)if(u===C.bd){u=w
u=J.v(u.a,u.d++)
r=$.op()
r.$flags&2&&B.B(r)
r[0]=u
d=$.pA()[0]}else{u=w
d=J.v(u.a,u.d++)}else if(r===16)if(u===C.bd){u=w.bP()
r=$.qJ()
r.$flags&2&&B.B(r)
r[0]=u
d=$.tj()[0]}else d=w.bP()
else if(r===32)if(u===C.bd){u=w.an()
r=$.hY()
r.$flags&2&&B.B(r)
r[0]=u
d=$.lD()[0]}else d=w.an()
else d=0
if(a8.d===C.DQ){u=b1.a
a0=u==null?a9:u.gcg()
d=(a0==null?0:a0)-d}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.mB(f,h,d)}}}else if(u===2){u=a8.f
if(u===8){if(a8.w===C.bd){u=w
u=J.v(u.a,u.d++)
r=$.op()
r.$flags&2&&B.B(r)
r[0]=u
a1=$.pA()[0]}else{u=w
a1=J.v(u.a,u.d++)}if(a8.w===C.bd){u=w
u=J.v(u.a,u.d++)
r=$.op()
r.$flags&2&&B.B(r)
r[0]=u
a2=$.pA()[0]}else{u=w
a2=J.v(u.a,u.d++)}}else if(u===16){if(a8.w===C.bd){u=w.bP()
r=$.qJ()
r.$flags&2&&B.B(r)
r[0]=u
a1=$.tj()[0]}else a1=w.bP()
if(a8.w===C.bd){u=w.bP()
r=$.qJ()
r.$flags&2&&B.B(r)
r[0]=u
a2=$.tj()[0]}else a2=w.bP()}else if(u===32){if(a8.w===C.bd){u=w.an()
r=$.hY()
r.$flags&2&&B.B(r)
r[0]=u
a1=$.lD()[0]}else a1=w.an()
if(a8.w===C.bd){u=w.an()
r=$.hY()
r.$flags&2&&B.B(r)
r[0]=u
a2=$.lD()[0]}else a2=w.an()}else{a1=0
a2=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.fe(f,h,a1,a2,0)}}else if(u===3){u=a8.w
if(u===C.nX){u=a8.f
if(u===32){u=w.an()
r=$.hY()
r.$flags&2&&B.B(r)
r[0]=u
u=$.Fh()
a3=u[0]
r[0]=w.an()
a4=u[0]
r[0]=w.an()
a5=u[0]}else{a4=0
a5=0
if(u===64)a3=w.a_C()
else if(u===16){u=w.bP()
r=$.hI
a3=(r!=null?r:A.iC())[u]
u=w.bP()
r=$.hI
a4=(r!=null?r:A.iC())[u]
u=w.bP()
r=$.hI
a5=(r!=null?r:A.iC())[u]}else a3=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.fe(f,h,a3,a4,a5)}}else{r=a8.f
if(r===8){if(u===C.bd){u=w
u=J.v(u.a,u.d++)
r=$.op()
r.$flags&2&&B.B(r)
r[0]=u
a3=$.pA()[0]}else{u=w
a3=J.v(u.a,u.d++)}if(a8.w===C.bd){u=w
u=J.v(u.a,u.d++)
r=$.op()
r.$flags&2&&B.B(r)
r[0]=u
a4=$.pA()[0]}else{u=w
a4=J.v(u.a,u.d++)}if(a8.w===C.bd){u=w
u=J.v(u.a,u.d++)
r=$.op()
r.$flags&2&&B.B(r)
r[0]=u
a5=$.pA()[0]}else{u=w
a5=J.v(u.a,u.d++)}}else if(r===16){if(u===C.bd){u=w.bP()
r=$.qJ()
r.$flags&2&&B.B(r)
r[0]=u
a3=$.tj()[0]}else a3=w.bP()
if(a8.w===C.bd){u=w.bP()
r=$.qJ()
r.$flags&2&&B.B(r)
r[0]=u
a4=$.tj()[0]}else a4=w.bP()
if(a8.w===C.bd){u=w.bP()
r=$.qJ()
r.$flags&2&&B.B(r)
r[0]=u
a5=$.tj()[0]}else a5=w.bP()}else if(r===32){if(u===C.bd){u=w.an()
r=$.hY()
r.$flags&2&&B.B(r)
r[0]=u
a3=$.lD()[0]}else a3=w.an()
if(a8.w===C.bd){u=w.an()
r=$.hY()
r.$flags&2&&B.B(r)
r[0]=u
a4=$.lD()[0]}else a4=w.an()
if(a8.w===C.bd){u=w.an()
r=$.hY()
r.$flags&2&&B.B(r)
r[0]=u
a5=$.lD()[0]}else a5=w.an()}else{a3=0
a4=0
a5=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.fe(f,h,a3,a4,a5)}}}else if(u>=4){u=a8.w
if(u===C.nX){u=a8.f
if(u===32){u=w.an()
r=$.hY()
r.$flags&2&&B.B(r)
r[0]=u
u=$.Fh()
a3=u[0]
r[0]=w.an()
a4=u[0]
r[0]=w.an()
a5=u[0]
r[0]=w.an()
a6=u[0]}else{a4=0
a5=0
a6=0
if(u===64)a3=w.a_C()
else if(u===16){u=w.bP()
r=$.hI
a3=(r!=null?r:A.iC())[u]
u=w.bP()
r=$.hI
a4=(r!=null?r:A.iC())[u]
u=w.bP()
r=$.hI
a5=(r!=null?r:A.iC())[u]
u=w.bP()
r=$.hI
a6=(r!=null?r:A.iC())[u]}else a3=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.kC(f,h,a3,a4,a5,a6)}}else{r=a8.f
if(r===8){if(u===C.bd){u=w
u=J.v(u.a,u.d++)
r=$.op()
r.$flags&2&&B.B(r)
r[0]=u
a3=$.pA()[0]}else{u=w
a3=J.v(u.a,u.d++)}if(a8.w===C.bd){u=w
u=J.v(u.a,u.d++)
r=$.op()
r.$flags&2&&B.B(r)
r[0]=u
a4=$.pA()[0]}else{u=w
a4=J.v(u.a,u.d++)}if(a8.w===C.bd){u=w
u=J.v(u.a,u.d++)
r=$.op()
r.$flags&2&&B.B(r)
r[0]=u
a5=$.pA()[0]}else{u=w
a5=J.v(u.a,u.d++)}if(a8.w===C.bd){u=w
u=J.v(u.a,u.d++)
r=$.op()
r.$flags&2&&B.B(r)
r[0]=u
a6=$.pA()[0]}else{u=w
a6=J.v(u.a,u.d++)}}else if(r===16){if(u===C.bd){u=w.bP()
r=$.qJ()
r.$flags&2&&B.B(r)
r[0]=u
a3=$.tj()[0]}else a3=w.bP()
if(a8.w===C.bd){u=w.bP()
r=$.qJ()
r.$flags&2&&B.B(r)
r[0]=u
a4=$.tj()[0]}else a4=w.bP()
if(a8.w===C.bd){u=w.bP()
r=$.qJ()
r.$flags&2&&B.B(r)
r[0]=u
a5=$.tj()[0]}else a5=w.bP()
if(a8.w===C.bd){u=w.bP()
r=$.qJ()
r.$flags&2&&B.B(r)
r[0]=u
a6=$.tj()[0]}else a6=w.bP()}else if(r===32){if(u===C.bd){u=w.an()
r=$.hY()
r.$flags&2&&B.B(r)
r[0]=u
a3=$.lD()[0]}else a3=w.an()
if(a8.w===C.bd){u=w.an()
r=$.hY()
r.$flags&2&&B.B(r)
r[0]=u
a4=$.lD()[0]}else a4=w.an()
if(a8.w===C.bd){u=w.an()
r=$.hY()
r.$flags&2&&B.B(r)
r[0]=u
a5=$.lD()[0]}else a5=w.an()
if(a8.w===C.bd){u=w.an()
r=$.hY()
r.$flags&2&&B.B(r)
r[0]=u
a6=$.lD()[0]}else a6=w.an()}else{a3=0
a4=0
a5=0
a6=0}if(a8.d===C.a4R){a7=A.cFY(a3,a4,a5,a6)
a3=a7[0]
a4=a7[1]
a5=a7[2]
u=b1.a
a6=u==null?a9:u.gcg()
if(a6==null)a6=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.kC(f,h,a3,a4,a5,a6)}}}}}else throw B.l(A.c6("Unsupported bitsPerSample: "+u))},
baE(d,e,f,g,h,i){var x,w,v,u
for(x=0;x<i;++x)for(w=x+g,v=0;v<h;++v){u=d.a
u=u==null?null:u.el(v,x,null)
if(u==null)u=new A.fn()
e.y3(v+f,w,u)}},
aYR(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.cx
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
x=A.cT(new Uint8Array(a2*u),!1,a1,0)
a0.akH(a3,q,x.a)}else if(r===5){x=A.cT(new Uint8Array(a2*u),!1,a1,0)
A.cyr().Hj(0,A.cb(a3,s,0),x.a)
if(a0.z===2)for(p=0;p<a0.c;++p){o=a0.r
n=o*(p*a0.b+1)
for(;o<a0.b*a0.r;++o){a2=x
u=J.v(a2.a,a2.d+n)
r=x
m=a0.r
m=J.v(r.a,r.d+(n-m))
J.bV(a2.a,a2.d+n,u+m);++n}}}else if(r===2){x=A.cT(new Uint8Array(a2*u),!1,a1,0)
try{A.cpJ(a0.dx,a0.ax,a0.ay).bw8(x,a3,0,a0.ay)}catch(l){}}else if(r===3){x=A.cT(new Uint8Array(a2*u),!1,a1,0)
try{A.cpJ(a0.dx,a0.ax,a0.ay).bw9(x,a3,0,a0.ay,a0.dy)}catch(l){}}else if(r===4){x=A.cT(new Uint8Array(a2*u),!1,a1,0)
try{A.cpJ(a0.dx,a0.ax,a0.ay).bwe(x,a3,0,a0.ay,a0.fr)}catch(l){}}else if(r===8)x=A.cT(C.iX.Cu(A.BU(a3.Jm(0,0,s),1,a1,0),!1),!1,a1,0)
else if(r===32946)x=A.cT(C.iX.Cu(A.BU(a3.Jm(0,0,s),1,a1,0),!1),!1,a1,0)
else if(r===1)x=a3
else throw B.l(A.c6("Unsupported Compression Type: "+r))
k=new A.bGJ(x)
j=a4.gcg()
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
if(a2===0){if(u!=null)u.fe(e,g,i,0,0)}else if(u!=null)u.fe(e,g,h,0,0)}k.c=0}},
akH(d,e,f){var x,w,v,u,t,s,r,q,p,o
for(x=J.cV(f),w=0,v=0;v<e;){u=w+1
t=J.v(d.a,d.d+w)
s=$.op()
s.$flags&2&&B.B(s)
s[0]=t
r=$.pA()[0]
if(r>=0&&r<=127)for(t=r+1,w=u,q=0;q<t;++q,v=p,w=u){p=v+1
u=w+1
x.m(f,v,J.v(d.a,d.d+w))}else{t=r<=-1&&r>=-127
w=u+1
if(t){o=J.v(d.a,d.d+u)
for(t=-r+1,q=0;q<t;++q,v=p){p=v+1
x.m(f,v,o)}}}}},
V7(d,e){var x=this.a
if(!x.a3(0,d))return e
x=x.i(0,d).pa(0)
x=x==null?null:x.D(0)
return x==null?0:x},
FT(d){return this.V7(d,0)},
V8(d){var x,w=this.a
if(!w.a3(0,d))return null
x=w.i(0,d)
w=x.pa(0)
w.toString
return B.w1(x.c,w.gxE(w),!0,y.p)}}
A.Kg.prototype={
J(){return"TiffFormat."+this.b}}
A.kz.prototype={
J(){return"TiffPhotometricType."+this.b}}
A.rT.prototype={
J(){return"TiffImageType."+this.b}}
A.bGM.prototype={}
A.bjC.prototype={
Hj(d,e,f){var x,w,v,u,t,s,r=this
r.r=f
x=J.bl(f)
r.w=0
w=y.D.a(e.a)
r.e=w
r.f=w.length
r.b=e.d
if(w[0]===0&&w[1]===1)throw B.l(A.c6("Invalid LZW Data"))
r.aot()
r.d=r.c=0
v=r.a49()
w=r.x
u=0
while(!0){if(!(v!==257&&r.w<x))break
if(v===256){r.aot()
v=r.a49()
r.as=0
if(v===257)break
J.bV(r.r,r.w++,v)
u=v}else{t=r.Q
t.toString
if(v<t){r.an0(v)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bV(r.r,r.w++,w[s])
r.ait(u,w[r.as-1])}else{r.an0(u)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bV(r.r,r.w++,w[s])
J.bV(r.r,r.w++,w[r.as-1])
r.ait(u,w[r.as-1])}u=v}v=r.a49()}},
ait(d,e){var x,w=this,v=w.y
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
an0(d){var x,w,v,u,t,s,r=this
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
a49(){var x,w,v,u,t=this,s=t.b,r=t.f
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
return D.c.h_(t.c,s)&C.ar1[w-9]},
aot(){var x,w,v=this
v.y=new Uint8Array(4096)
x=new Uint32Array(4096)
v.z=x
D.bq.l_(x,0,4096,4098)
for(x=v.y,w=0;w<256;++w){x.$flags&2&&B.B(x)
x[w]=w}v.a=9
v.Q=258}}
A.bGK.prototype={
k9(d){var x,w,v=this.a
if(v==null)return null
v=v.f[d]
x=this.c
x===$&&B.b()
w=v.dk(0,x)
return w},
nA(d,e,f){var x=this,w=A.cT(e,!1,null,0)
x.c=w
w=x.aqY(w)
x.a=w
if(w==null)return null
return x.k9(0)},
aqY(d){var x,w,v,u,t,s,r,q,p,o=null,n=B.a([],y.q),m=new A.bGM(n),l=d.bP()
if(l!==18761&&l!==19789)return o
if(l===19789)d.e=!0
else d.e=!1
v=d.bP()
m.d=v
if(v!==42)return o
u=d.an()
t=A.cb(d,o,0)
t.d=u
x=t
for(v=y.p,s=y.aL;u!==0;){w=null
try{r=new A.aBB(B.H(v,s),C.DR,C.a4P,C.b5p)
r.aTD(x)
w=r
q=w
if(!(q.b!==0&&q.c!==0))break}catch(p){break}n.push(w)
if(n.length===1){q=n[0]
m.a=q.b
m.b=q.c}u=x.an()
if(u!==0)x.d=u}return n.length!==0?m:o}}
A.bK3.prototype={
NV(){var x,w=this.a,v=w.rH()
if((v&1)!==0)return!1
if((v>>>1&7)>3)return!1
if((v>>>4&1)===0)return!1
this.f.d=v>>>5
if(w.rH()!==2752925)return!1
x=this.b
x.a=w.bP()
x.b=w.bP()
return!0},
oc(d){var x,w,v,u=this,t=null
if(!u.b2l())return t
x=u.b
w=x.a
u.d=A.hK(t,t,C.a7,0,C.bm,x.b,t,0,4,t,C.a7,w,!1)
u.b9Q()
if(!u.bfp())return t
x=x.w
if(x.length!==0){v=A.cT(new B.e8(x),!1,t,0)
x=u.d
x.toString
x.e=A.cwy(v)}return u.d},
b2l(){var x,w,v,u,t=this
if(!t.NV())return!1
t.fr=A.d12()
for(x=t.dy,w=0;w<4;++w){v=new Int32Array(2)
u=new Int32Array(2)
x[w]=new A.aCu(v,u,new Int32Array(2))}x=t.b
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
u=A.cCA(v.jZ(u))
t.c=u
v.d+=x.d
u.dz(1)
t.c.dz(1)
t.bfx(t.x,t.fr)
t.bfo()
if(!t.bfs(v))return!1
t.bfu()
t.c.dz(1)
t.bft()
return!0},
bfx(d,e){var x,w,v,u=this,t=u.c
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
bfo(){var x,w,v,u=this,t=u.w,s=u.c
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
u.bY=s
return!0},
bfs(d){var x,w,v,u,t,s,r,q=d.c-d.d,p=this.c
p===$&&B.b()
p=D.c.er(1,p.dz(2))
this.cy=p
x=p-1
w=x*3
if(q<w)return!1
for(p=this.db,v=0,u=0;u<x;++u,w=s){t=d.Sg(3,v)
s=w+((J.v(t.a,t.d)|J.v(t.a,t.d+1)<<8|J.v(t.a,t.d+2)<<16)>>>0)
if(s>q)s=q
r=new A.a7u(d.B0(s-w,w))
r.b=254
r.c=0
r.d=-8
p[u]=r
v+=3}p[x]=A.cCA(d.B0(q-w,d.d-d.b+w))
return w<q},
bfu(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
h===$&&B.b()
x=h.dz(7)
w=i.c.dz(1)!==0?i.c.JT(4):0
v=i.c.dz(1)!==0?i.c.JT(4):0
u=i.c.dz(1)!==0?i.c.JT(4):0
t=i.c.dz(1)!==0?i.c.JT(4):0
s=i.c.dz(1)!==0?i.c.JT(4):0
r=i.x
for(h=i.dy,q=r.a,p=!r.c,o=r.d,n=0;n<4;++n){if(q){m=o[n]
if(p)m+=x}else{if(n>0){h[n]=h[0]
continue}m=x}l=h[n]
k=l.a
j=m+w
if(j<0)j=0
else if(j>127)j=127
j=C.AG[j]
k.$flags&2&&B.B(k)
k[0]=j
if(m<0)j=0
else j=m>127?127:m
k[1]=C.AH[j]
j=l.b
k=m+v
if(k<0)k=0
else if(k>127)k=127
k=C.AG[k]
j.$flags&2&&B.B(j)
j[0]=k*2
k=m+u
if(k<0)k=0
else if(k>127)k=127
j[1]=C.AH[k]*101581>>>16
if(j[1]<8)j[1]=8
k=l.c
j=m+t
if(j<0)j=0
else if(j>117)j=117
j=C.AG[j]
k.$flags&2&&B.B(k)
k[0]=j
j=m+s
if(j<0)j=0
else if(j>127)j=127
k[1]=C.AH[j]}},
bft(){var x,w,v,u,t,s,r=this,q=r.fr
for(x=0;x<4;++x)for(w=0;w<8;++w)for(v=0;v<3;++v)for(u=0;u<11;++u){t=r.c
t===$&&B.b()
s=t.ij(C.aB2[x][w][v][u])!==0?r.c.dz(8):C.aqY[x][w][v][u]
t=q.b[x][w].a[v]
t.$flags&2&&B.B(t)
t[u]=s}t=r.c
t===$&&B.b()
t=t.dz(1)!==0
r.fx=t
if(t)r.fy=r.c.dz(8)},
bhd(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.bY
k.toString
if(k>0){x=l.w
for(k=x.e,w=x.f,v=l.x,u=v.e,t=0;t<4;++t){if(v.a){s=u[t]
if(!v.c){r=x.b
r.toString
s+=r}}else s=x.b
for(q=0;q<=1;++q){r=l.aw
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
if(r>0){n=r>4?D.c.R(o,2):D.c.R(o,1)
m=9-r
if(n>m)n=m}else n=o
if(n<1)n=1
p.b=n
p.a=2*o+n
if(o>=40)r=2
else r=o>=15?1:0
p.d=r}else p.a=0
p.c=q!==0}}}},
b9Q(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k.at
if(j!=null)m.bt=j
x=J.j_(4,y.K)
for(j=y.u,w=0;w<4;++w)x[w]=B.a([new A.Ks(),new A.Ks()],j)
m.aw=x
j=m.at
j.toString
x=J.j_(j,y.bt)
for(v=0;v<j;++v){u=new Uint8Array(16)
t=new Uint8Array(8)
x[v]=new A.aCv(u,t,new Uint8Array(8))}m.k2=x
m.ok=new Uint8Array(832)
j=m.at
j.toString
m.go=new Uint8Array(4*j)
u=m.p4=16*j
j=8*j
m.R8=j
t=m.bY
t.toString
s=C.Ap[t]
r=s*u
q=(s/2|0)*j
m.p1=A.cT(new Uint8Array(16*u+r),!1,l,r)
j=m.R8
j.toString
m.p2=A.cT(new Uint8Array(8*j+q),!1,l,q)
j=m.R8
j.toString
m.p3=A.cT(new Uint8Array(8*j+q),!1,l,q)
j=k.a
m.RG=A.cT(new Uint8Array(j),!1,l,0)
p=k.a+1>>>1
m.rx=A.cT(new Uint8Array(p),!1,l,0)
m.ry=A.cT(new Uint8Array(p),!1,l,0)
k=m.bY
k.toString
o=C.Ap[k]
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
x=J.j_(n,y.bQ)
for(v=0;v<n;++v)x[v]=new A.aCs()
m.k3=x
k=m.at
k.toString
x=J.j_(k,y.bl)
for(v=0;v<k;++v){j=new Int16Array(384)
x[v]=new A.aCt(j,new Uint8Array(16))}m.br=x
k=m.at
k.toString
m.k4=B.bJ(k,l,!1,y.B)
m.bhd()
A.d0u()
m.e=new A.bK4()
return!0},
bfp(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
t=j.br
t===$&&B.b()
p=t[u]
if(w.b){u=j.c
u===$&&B.b()
u=u.ij(j.fr.a[0])
t=j.c
o=j.fr
j.k1=u===0?t.ij(o.a[1]):2+t.ij(o.a[2])}u=j.fx
u===$&&B.b()
if(u){u=j.c
u===$&&B.b()
t=j.fy
t===$&&B.b()
n=u.ij(t)!==0}else n=!1
j.bfq()
if(!n)n=j.bfv(q,s)
else{r.a=q.a=0
u=p.b
u===$&&B.b()
if(!u)r.b=q.b=0
p.f=p.e=0}u=j.bY
u.toString
if(u>0){u=j.k4
u===$&&B.b()
t=j.y1
o=j.aw
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
D.A.l_(x,0,4,0)
j.y1=0
j.bia()
u=j.bY
u.toString
k=!1
if(u>0){u=j.y2
t=j.ch
t===$&&B.b()
if(u>=t){t=j.cx
t.toString
t=u<=t
k=t}}if(!j.b19(k))return!1
u=++j.y2}return!0},
bia(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.y2,a4=a1.ok
a4===$&&B.b()
x=A.cT(a4,!1,a2,40)
w=A.cT(a1.ok,!1,a2,584)
v=A.cT(a1.ok,!1,a2,600)
a4=a3>0
u=0
while(!0){t=a1.at
t.toString
if(!(u<t))break
t=a1.br
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
J.bV(v.a,v.d+t,129)}if(a4){J.bV(v.a,v.d+-33,129)
J.bV(w.a,w.d+-33,129)
J.bV(x.a,x.d+-33,129)}}t=a1.k2
t===$&&B.b()
p=t[u]
o=s.a
n=s.e
if(a4){x.A5(-32,16,p.a)
w.A5(-32,8,p.b)
v.A5(-32,8,p.c)}else if(u===0){t=x.a
q=x.d+-33
J.tl(t,q,q+21,127)
q=w.a
t=w.d+-33
J.tl(q,t,t+9,127)
t=v.a
q=v.d+-33
J.tl(t,q,q+9,127)}t=s.b
t===$&&B.b()
if(t){m=A.cb(x,a2,-16)
l=m.Qw()
if(a4){t=a1.at
t.toString
if(u>=t-1){t=p.a[15]
q=m.a
k=m.d
J.tl(q,k,k+4,t)}else m.A5(0,4,a1.k2[u+1].a)}j=l[0]
l.$flags&2&&B.B(l)
l[96]=j
l[64]=j
l[32]=j
for(t=s.c,i=0;i<16;++i,n=n<<2>>>0){h=A.cb(x,a2,C.RJ[i])
C.axQ[t[i]].$1(h)
n.toString
q=i*16
a1.alc(n,new A.lU(o,q,384,q,!1),h)}}else{t=A.cCD(u,a3,s.c[0])
t.toString
C.aCq[t].$1(x)
if(n!==0)for(i=0;i<16;++i,n=n<<2>>>0){h=A.cb(x,a2,C.RJ[i])
n.toString
t=i*16
a1.alc(n,new A.lU(o,t,384,t,!1),h)}}t=s.f
t===$&&B.b()
q=A.cCD(u,a3,s.d)
q.toString
C.MQ[q].$1(w)
C.MQ[q].$1(v)
g=new A.lU(o,256,384,256,!1)
if((t&255)!==0){q=a1.e
if((t&170)!==0){q===$&&B.b()
q.vB(g,w)
q.vB(A.cb(g,a2,16),A.cb(w,a2,4))
k=A.cb(g,a2,32)
f=A.cb(w,a2,128)
q.vB(k,f)
q.vB(A.cb(k,a2,16),A.cb(f,a2,4))}else{q===$&&B.b()
q.aFr(g,w)}}e=new A.lU(o,320,384,320,!1)
t=t>>>8
if((t&255)!==0){q=a1.e
if((t&170)!==0){q===$&&B.b()
q.vB(e,v)
q.vB(A.cb(e,a2,16),A.cb(v,a2,4))
t=A.cb(e,a2,32)
k=A.cb(v,a2,128)
q.vB(t,k)
q.vB(A.cb(t,a2,16),A.cb(k,a2,4))}else{q===$&&B.b()
q.aFr(e,v)}}t=a1.ax
t.toString
if(a3<t-1){D.A.dN(p.a,0,16,x.hL(),480)
D.A.dN(p.b,0,8,w.hL(),224)
D.A.dN(p.c,0,8,v.hL(),224)}d=u*16
a0=u*8
for(r=0;r<16;++r){t=a1.p4
t.toString
q=a1.p1
q===$&&B.b()
q.rC(d+r*t,16,x,r*32)}for(r=0;r<8;++r){t=a1.R8
t.toString
q=a1.p2
q===$&&B.b()
k=r*32
q.rC(a0+r*t,8,w,k)
t=a1.R8
t.toString
q=a1.p3
q===$&&B.b()
q.rC(a0+r*t,8,v,k)}++u}},
alc(d,e,f){var x,w,v,u,t,s
switch(d>>>30){case 3:x=this.e
x===$&&B.b()
x.Qx(0,e,f,!1)
break
case 2:this.e===$&&B.b()
w=J.v(e.a,e.d)+4
v=D.c.l7(D.c.R(J.v(e.a,e.d+4)*35468,16),32)
u=D.c.l7(D.c.R(J.v(e.a,e.d+4)*85627,16),32)
t=D.c.l7(D.c.R(J.v(e.a,e.d+1)*35468,16),32)
s=D.c.l7(D.c.R(J.v(e.a,e.d+1)*85627,16),32)
A.bK6(f,0,w+u,s,t)
A.bK6(f,1,w+v,s,t)
A.bK6(f,2,w-v,s,t)
A.bK6(f,3,w-u,s,t)
break
case 1:x=this.e
x===$&&B.b()
x.Qy(e,f)
break
default:break}},
b_l(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.p4,j=m.k4
j===$&&B.b()
j=j[d]
j.toString
x=m.p1
x===$&&B.b()
w=A.cb(x,l,d*16)
v=j.b
u=j.a
if(u===0)return
if(m.bY===1){if(d>0){x=m.e
x===$&&B.b()
k.toString
x.ags(w,k,u+4)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.aM0(w,k,u)}if(e>0){x=m.e
x===$&&B.b()
k.toString
x.agt(w,k,u+4)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.aM3(w,k,u)}}else{t=m.R8
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
x.Fn(w,1,k,16,s,v,p)
t.toString
x.Fn(r,1,t,8,s,v,p)
x.Fn(q,1,t,8,s,v,p)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.bzh(w,k,u,v,p)
t.toString
o=A.cb(r,l,4)
n=A.cb(q,l,4)
x.Fm(o,1,t,8,u,v,p)
x.Fm(n,1,t,8,u,v,p)}if(e>0){x=m.e
x===$&&B.b()
k.toString
s=u+4
x.Fn(w,k,1,16,s,v,p)
t.toString
x.Fn(r,t,1,8,s,v,p)
x.Fn(q,t,1,8,s,v,p)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.bKL(w,k,u,v,p)
t.toString
x=4*t
o=A.cb(r,l,x)
n=A.cb(q,l,x)
j.Fm(o,t,1,8,u,v,p)
j.Fm(n,t,1,8,u,v,p)}}},
b0U(){var x,w=this,v=w.ay
v===$&&B.b()
x=v
while(!0){v=w.CW
v.toString
if(!(x<v))break
w.b_l(x,w.y2);++x}},
b19(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.bY
e.toString
x=C.Ap[e]
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
if(d)g.b0U()
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
if(g.bt!=null&&o<n){m=g.xr=g.aZa(o,n-o)
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
j*=D.c.R(k,1)
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
g.bhy(0,o-l,m-h,n-o)}if(e){e=g.p1
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
bhy(d,e,f,g){if(f<=0||g<=0)return!1
this.b08(e,f,g)
this.b07(e,f,g)
return!0},
a34(d){var x
if((d&-4194304)>>>0===0)x=D.c.R(d,14)
else x=d<0?0:255
return x},
Wy(d,e,f,g){var x=19077*d
g.m(0,0,this.a34(x+26149*f+-3644112))
g.m(0,1,this.a34(x-6419*e-13320*f+2229552))
g.m(0,2,this.a34(x+33050*e+-4527440))},
Wh(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=new A.bKg(),a0=b3-1,a1=D.c.R(a0,1),a2=d.$2(J.v(a7.a,a7.d),J.v(a8.a,a8.d)),a3=d.$2(J.v(a9.a,a9.d),J.v(b0.a,b0.d)),a4=D.c.R(3*a2+a3+131074,2)
f.Wy(J.v(a5.a,a5.d),a4&255,a4>>>16,b1)
b1.m(0,3,255)
x=a6!=null
if(x){a4=D.c.R(3*a3+a2+131074,2)
w=J.v(a6.a,a6.d)
b2.toString
f.Wy(w,a4&255,a4>>>16,b2)
b2.m(0,3,255)}for(v=1;v<=a1;++v,a3=t,a2=u){u=d.$2(J.v(a7.a,a7.d+v),J.v(a8.a,a8.d+v))
t=d.$2(J.v(a9.a,a9.d+v),J.v(b0.a,b0.d+v))
s=a2+u+a3+t+524296
r=D.c.R(s+2*(u+a3),3)
q=D.c.R(s+2*(a2+t),3)
a4=D.c.R(r+a2,1)
p=D.c.R(q+u,1)
w=2*v
o=w-1
n=J.v(a5.a,a5.d+o)
m=a4&255
l=a4>>>16
k=o*4
j=A.cb(b1,e,k)
n=19077*n
i=n+26149*l+-3644112
if((i&-4194304)>>>0===0)h=D.c.R(i,14)
else h=i<0?0:255
J.bV(j.a,j.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.R(l,14)
else h=l<0?0:255
J.bV(j.a,j.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.R(n,14)
else h=n<0?0:255
J.bV(j.a,j.d+2,h)
J.bV(j.a,j.d+3,255)
n=J.v(a5.a,a5.d+w)
m=p&255
l=p>>>16
j=w*4
i=A.cb(b1,e,j)
n=19077*n
g=n+26149*l+-3644112
if((g&-4194304)>>>0===0)h=D.c.R(g,14)
else h=g<0?0:255
J.bV(i.a,i.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.R(l,14)
else h=l<0?0:255
J.bV(i.a,i.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.R(n,14)
else h=n<0?0:255
J.bV(i.a,i.d+2,h)
J.bV(i.a,i.d+3,255)
if(x){a4=D.c.R(q+a3,1)
p=D.c.R(r+t,1)
o=J.v(a6.a,a6.d+o)
n=a4&255
m=a4>>>16
b2.toString
k=A.cb(b2,e,k)
o=19077*o
l=o+26149*m+-3644112
if((l&-4194304)>>>0===0)h=D.c.R(l,14)
else h=l<0?0:255
J.bV(k.a,k.d,h)
m=o-6419*n-13320*m+2229552
if((m&-4194304)>>>0===0)h=D.c.R(m,14)
else h=m<0?0:255
J.bV(k.a,k.d+1,h)
o=o+33050*n+-4527440
if((o&-4194304)>>>0===0)h=D.c.R(o,14)
else h=o<0?0:255
J.bV(k.a,k.d+2,h)
J.bV(k.a,k.d+3,255)
w=J.v(a6.a,a6.d+w)
o=p&255
n=p>>>16
j=A.cb(b2,e,j)
w=19077*w
m=w+26149*n+-3644112
if((m&-4194304)>>>0===0)h=D.c.R(m,14)
else h=m<0?0:255
J.bV(j.a,j.d,h)
n=w-6419*o-13320*n+2229552
if((n&-4194304)>>>0===0)h=D.c.R(n,14)
else h=n<0?0:255
J.bV(j.a,j.d+1,h)
w=w+33050*o+-4527440
if((w&-4194304)>>>0===0)h=D.c.R(w,14)
else h=w<0?0:255
J.bV(j.a,j.d+2,h)
J.bV(j.a,j.d+3,255)}}if((b3&1)===0){a4=D.c.R(3*a2+a3+131074,2)
w=J.v(a5.a,a5.d+a0)
o=a0*4
n=A.cb(b1,e,o)
f.Wy(w,a4&255,a4>>>16,n)
n.m(0,3,255)
if(x){a4=D.c.R(3*a3+a2+131074,2)
a0=J.v(a6.a,a6.d+a0)
b2.toString
o=A.cb(b2,e,o)
f.Wy(a0,a4&255,a4>>>16,o)
o.m(0,3,255)}}},
b07(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.xr
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
q=q==null?null:q.el(s,u,null);(q==null?new A.fn():q).saO(0,r)}x.d=x.d+o.a}},
b08(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=A.cT(J.d5(l.d.gag(0),0,null),!1,k,d*j.a*4),h=l.to
h===$&&B.b()
x=A.cb(h,k,0)
h=l.x1
h===$&&B.b()
w=A.cb(h,k,0)
h=l.x2
h===$&&B.b()
v=A.cb(h,k,0)
u=d+f
t=D.c.R(e+1,1)
s=j.a*4
j=l.rx
j===$&&B.b()
r=A.cb(j,k,0)
j=l.ry
j===$&&B.b()
q=A.cb(j,k,0)
if(d===0){l.Wh(x,k,w,v,w,v,i,k,e)
p=f}else{j=l.RG
j===$&&B.b()
l.Wh(j,x,r,q,w,v,A.cb(i,k,-s),i,e)
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
l.Wh(A.cb(x,k,-n),x,r,q,w,v,A.cb(i,k,h),i,e)}j=x.d
h=l.p4
h.toString
x.d=j+h
j=l.Q
j.toString
h=l.as
h.toString
if(j+u<h){j=l.RG
j===$&&B.b()
j.A5(0,e,x)
l.rx.A5(0,t,w)
l.ry.A5(0,t,v);--p}else if((u&1)===0)l.Wh(x,k,w,v,w,v,A.cb(i,k,s),k,e)
return p},
aZa(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.b,m=n.a,l=n.b
if(d<0||e<=0||d+e>l)return null
if(d===0){n=m*l
o.co=new Uint8Array(n)
x=o.bt
w=new A.bL0(x,m,l)
v=x.dg()
w.d=v&3
w.e=D.c.R(v,2)&3
w.f=D.c.R(v,4)&3
w.r=D.c.R(v,6)&3
if(w.gex()){u=w.d
if(u===0){if(x.c-x.d<n)w.r=1}else if(u===1){t=new A.aCT(C.o3,B.a([],y.J))
t.a=m
t.b=l
n=B.a([],y.A)
u=B.a([],y.F)
s=new Uint32Array(2)
r=new A.aCq(x,s)
s=r.d=J.d5(D.bq.gag(s),0,null)
q=x.dg()
s.$flags&2&&B.B(s)
s[0]=q
s[1]=x.dg()
s[2]=x.dg()
s[3]=x.dg()
s[4]=x.dg()
s[5]=x.dg()
s[6]=x.dg()
s[7]=x.dg()
u=new A.aqT(r,t,n,u)
u.db=m
w.x=u
u.L9(m,l,!0)
n=w.x
x=n.ax
if(x.length===1&&x[0].a===C.a5z&&n.bam()){w.y=!0
n=w.x
x=n.c
p=x.a*x.b
n.cx=0
x=D.c.ap(p,4)
x=new Uint8Array(p+(4-x))
n.CW=x
n.ch=J.oq(D.A.gag(x),0,null)}else{w.y=!1
w.x.aiD()}}else w.r=1}o.aY=w}n=o.aY
n===$&&B.b()
if(!n.w){x=o.co
x===$&&B.b()
if(!n.NU(0,d,e,x))return null}n=o.co
n===$&&B.b()
return A.cT(n,!1,null,d*m)},
bfv(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.fr.b,a3=a1.k1
a3===$&&B.b()
x=a1.dy[a3]
a3=a1.br
a3===$&&B.b()
w=a3[a1.y1]
v=A.cT(w.a,!1,null,0)
a3=a1.k3
a3===$&&B.b()
u=a3[0]
v.bDQ(0,v.c-v.d,0)
a3=w.b
a3===$&&B.b()
if(!a3){t=A.cT(new Int16Array(16),!1,null,0)
a3=a4.b
s=u.b
r=a1.a43(a5,a2[1],a3+s,x.b,0,t)
a4.b=u.b=r>0?1:0
if(r>1)a1.bnV(t,v)
else{q=D.c.R(J.v(t.a,t.d)+3,3)
for(p=0;p<256;p+=16)J.bV(v.a,v.d+p,q)}o=a2[0]
n=1}else{o=a2[3]
n=0}m=a4.a&15
l=u.a&15
for(k=0,j=0;j<4;++j){i=l&1
for(h=0,g=0;g<4;++g){r=a1.a43(a5,o,i+(m&1),x.a,n,v)
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
m=D.c.hB(a4.a,a3)
l=D.c.hB(u.a,a3)
for(h=0,j=0;j<2;++j){i=l&1
for(g=0;g<2;++g){r=a1.a43(a5,a2[2],i+(m&1),x.c,0,v)
i=r>0?1:0
m=m>>>1|i<<3
a3=J.v(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=(h<<2|a3)>>>0
v.d+=16}m=m>>>2
l=l>>>1|i<<5}d=(d|D.c.er(h,4*a0))>>>0
e=(e|D.c.er(m<<4>>>0,a0))>>>0
f=(f|D.c.er(l&240,a0))>>>0}a4.a=e
u.a=f
w.e=k
w.f=d
if((d&43690)===0)x.toString
return(k|d)>>>0===0},
bnV(d,e){var x,w,v,u,t,s,r,q,p,o,n=new Int32Array(16)
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
u=D.c.R(v+s,3)
J.bV(e.a,e.d+p,u)
u=D.c.R(q+r,3)
J.bV(e.a,e.d+(p+16),u)
u=D.c.R(v-s,3)
J.bV(e.a,e.d+(p+32),u)
u=D.c.R(q-r,3)
J.bV(e.a,e.d+(p+48),u)
p+=64}},
b2t(d,e){var x,w,v,u,t,s
if(d.ij(e[3])===0)x=d.ij(e[4])===0?2:3+d.ij(e[5])
else if(d.ij(e[6])===0)x=d.ij(e[7])===0?5+d.ij(159):7+2*d.ij(165)+d.ij(145)
else{w=d.ij(e[8])
v=2*w+d.ij(e[9+w])
u=C.asv[v]
t=u.length
for(x=0,s=0;s<t;++s)x+=x+d.ij(u[s])
x+=3+D.c.er(8,v)}return x},
a43(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=e[h].a[f]
for(;h<16;h=x){if(d.ij(p[0])===0)return h
for(;d.ij(p[1])===0;){++h
p=e[C.Q1[h]].a[0]
if(h===16)return 16}x=h+1
w=e[C.Q1[x]].a
if(d.ij(p[2])===0){p=w[1]
v=1}else{v=this.b2t(d,p)
p=w[2]}u=C.awJ[h]
t=d.b
t===$&&B.b()
s=d.aiZ(D.c.R(t,1))
t=d.b
r=C.P6[t]
d.b=C.P4[t]
t=d.d
t===$&&B.b()
d.d=t-r
t=s!==0?-v:v
q=g[h>0?1:0]
J.bV(i.a,i.d+u,t*q)}return 16},
bfq(){var x,w,v,u,t,s,r,q,p,o=this,n=o.y1,m=4*n,l=o.go,k=o.id,j=o.br
j===$&&B.b()
x=j[n]
n=o.c
n===$&&B.b()
n=n.ij(145)===0
x.b=n
if(!n){if(o.c.ij(156)!==0)w=o.c.ij(128)!==0?1:3
else w=o.c.ij(163)!==0?2:0
n=x.c
n.$flags&2&&B.B(n)
n[0]=w
l.toString
D.A.l_(l,m,m+4,w)
D.A.l_(k,0,4,w)}else{v=x.c
for(n=k.$flags|0,u=0,t=0;t<4;++t,u=p){w=k[t]
for(s=0;s<4;++s){j=m+s
r=C.awW[l[j]][w]
q=C.NS[o.c.ij(r[0])]
for(;q>0;)q=C.NS[2*q+o.c.ij(r[q])]
w=-q
l.$flags&2&&B.B(l)
l[j]=w}p=u+4
l.toString
D.A.dN(v,u,p,l,m)
n&2&&B.B(k)
k[t]=w}}if(o.c.ij(142)===0)n=0
else if(o.c.ij(114)===0)n=2
else n=o.c.ij(183)!==0?1:3
x.d=n}}
A.a7u.prototype={
dz(d){var x,w
for(x=0;w=d-1,d>0;d=w)x=(x|D.c.eS(this.ij(128),w))>>>0
return x},
JT(d){var x=this.dz(d)
return this.dz(1)===1?-x:x},
ij(d){var x,w=this,v=w.b
v===$&&B.b()
x=w.aiZ(D.c.R(v*d,8))
if(w.b<=126)w.bl9()
return x},
aiZ(d){var x,w,v,u,t,s=this,r=s.d
r===$&&B.b()
if(r<0){x=s.a
w=x.c
v=x.d
if(w-v>=1){u=x.dg()
r=s.c
r===$&&B.b()
s.c=(u|r<<8)>>>0
r=s.d+8
s.d=r
t=r}else{if(v<w){r=x.dg()
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
if(D.c.o_(r,t)>d){x=s.b
x===$&&B.b()
w=d+1
s.b=x-w
s.c=r-D.c.eS(w,t)
return 1}else{s.b=d
return 0}},
bl9(){var x,w=this,v=w.b
v===$&&B.b()
x=C.P6[v]
w.b=C.P4[v]
v=w.d
v===$&&B.b()
w.d=v-x}}
A.bK4.prototype={
agt(d,e,f){var x,w=A.cb(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x
if(this.apF(w,e,f))this.Tg(w,e)}},
ags(d,e,f){var x,w=A.cb(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x*e
if(this.apF(w,1,f))this.Tg(w,1)}},
aM3(d,e,f){var x,w,v=A.cb(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.agt(v,e,f)}},
aM0(d,e,f){var x,w=A.cb(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.ags(w,e,f)}},
bKL(d,e,f,g,h){var x,w,v=A.cb(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.Fm(v,e,1,16,f,g,h)}},
bzh(d,e,f,g,h){var x,w=A.cb(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.Fm(w,1,e,16,f,g,h)}},
Fn(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=A.cb(d,null,0)
for(x=-3*e,w=-2*e,v=-e,u=2*e;t=g-1,g>0;g=t){if(this.apG(h,e,a0,a1))if(this.ao4(h,e,a2))this.Tg(h,e)
else{s=J.v(h.a,h.d+x)
r=J.v(h.a,h.d+w)
q=J.v(h.a,h.d+v)
p=J.v(h.a,h.d)
o=J.v(h.a,h.d+e)
n=J.v(h.a,h.d+u)
m=$.clB()
l=m[1020+3*(p-q)+m[1020+r-o]]
m=D.c.R(27*l+63,7)
k=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.R(18*l+63,7)
j=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.R(9*l+63,7)
i=(m&2147483647)-((m&2147483648)>>>0)
m=$.pz()[255+s+i]
J.bV(h.a,h.d+x,m)
m=$.pz()[255+r+j]
J.bV(h.a,h.d+w,m)
m=$.pz()[255+q+k]
J.bV(h.a,h.d+v,m)
m=$.pz()[255+p-k]
J.bV(h.a,h.d,m)
m=$.pz()[255+o-j]
J.bV(h.a,h.d+e,m)
m=$.pz()[255+n-i]
J.bV(h.a,h.d+u,m)}h.d+=f}},
Fm(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=A.cb(d,null,0)
for(x=-2*e,w=-e;v=g-1,g>0;g=v){if(this.apG(k,e,h,i))if(this.ao4(k,e,j))this.Tg(k,e)
else{u=J.v(k.a,k.d+x)
t=J.v(k.a,k.d+w)
s=J.v(k.a,k.d)
r=J.v(k.a,k.d+e)
q=3*(s-t)
p=$.aV_()
o=D.c.R(q+4,3)
n=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.R(q+3,3)
m=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.R(n+1,1)
l=(o&2147483647)-((o&2147483648)>>>0)
o=$.pz()[255+u+l]
J.bV(k.a,k.d+x,o)
o=$.pz()[255+t+m]
J.bV(k.a,k.d+w,o)
o=$.pz()[255+s-n]
J.bV(k.a,k.d,o)
o=$.pz()[255+r-l]
J.bV(k.a,k.d+e,o)}k.d+=f}},
Tg(d,e){var x=J.v(d.a,d.d+-2*e),w=-e,v=J.v(d.a,d.d+w),u=J.v(d.a,d.d),t=J.v(d.a,d.d+e),s=3*(u-v)+$.clB()[1020+x-t],r=$.aV_()[112+D.c.l7(D.c.R(s+4,3),32)],q=$.aV_()[112+D.c.l7(D.c.R(s+3,3),32)]
d.m(0,w,$.pz()[255+v+q])
d.m(0,0,$.pz()[255+u-r])},
ao4(d,e,f){var x=J.v(d.a,d.d+-2*e),w=J.v(d.a,d.d+-e),v=J.v(d.a,d.d),u=J.v(d.a,d.d+e),t=$.aUZ()
return t[255+x-w]>f||t[255+u-v]>f},
apF(d,e,f){var x=J.v(d.a,d.d+-2*e),w=J.v(d.a,d.d+-e),v=J.v(d.a,d.d),u=J.v(d.a,d.d+e)
return 2*$.aUZ()[255+w-v]+$.clA()[255+x-u]<=f},
apG(d,e,f,g){var x=J.v(d.a,d.d+-4*e),w=J.v(d.a,d.d+-3*e),v=J.v(d.a,d.d+-2*e),u=J.v(d.a,d.d+-e),t=J.v(d.a,d.d),s=J.v(d.a,d.d+e),r=J.v(d.a,d.d+2*e),q=J.v(d.a,d.d+3*e),p=$.aUZ(),o=255+v
if(2*p[255+u-t]+$.clA()[o-s]>f)return!1
return p[255+x-w]<=g&&p[255+w-v]<=g&&p[o-u]<=g&&p[255+q-r]<=g&&p[255+r-s]<=g&&p[255+s-t]<=g},
vB(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=new Int32Array(16)
for(x=0,w=0,v=0;v<4;++v){u=x+8
t=J.v(d.a,d.d+x)+J.v(d.a,d.d+u)
s=J.v(d.a,d.d+x)-J.v(d.a,d.d+u)
u=x+4
r=D.c.R(J.v(d.a,d.d+u)*35468,16)
q=x+12
p=D.c.R(J.v(d.a,d.d+q)*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.c.R(J.v(d.a,d.d+u)*85627,16)
q=D.c.R(J.v(d.a,d.d+q)*35468,16)
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
r=D.c.R(u*35468,16)
q=j[w+12]
p=D.c.R(q*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.c.R(u*85627,16)
q=D.c.R(q*35468,16)
n=(u&2147483647)-((u&2147483648)>>>0)+((q&2147483647)-((q&2147483648)>>>0))
A.Ek(e,l,0,0,t+n)
A.Ek(e,l,1,0,s+o)
A.Ek(e,l,2,0,s-o)
A.Ek(e,l,3,0,t-n);++w
l+=32}},
Qx(d,e,f,g){this.vB(e,f)
if(g)this.vB(A.cb(e,null,16),A.cb(f,null,4))},
Qy(d,e){var x,w,v=J.v(d.a,d.d)+4
for(x=0;x<4;++x)for(w=0;w<4;++w)A.Ek(e,0,w,x,v)},
aFr(d,e){var x=this,w=null
if(J.v(d.a,d.d)!==0)x.Qy(d,e)
if(J.v(d.a,d.d+16)!==0)x.Qy(A.cb(d,w,16),A.cb(e,w,4))
if(J.v(d.a,d.d+32)!==0)x.Qy(A.cb(d,w,32),A.cb(e,w,128))
if(J.v(d.a,d.d+48)!==0)x.Qy(A.cb(d,w,48),A.cb(e,w,132))}}
A.bK9.prototype={}
A.bKd.prototype={}
A.bKf.prototype={}
A.a7t.prototype={}
A.bKe.prototype={}
A.bK5.prototype={}
A.Ks.prototype={}
A.aCs.prototype={}
A.aCu.prototype={}
A.aCt.prototype={}
A.aCv.prototype={}
A.a7v.prototype={
NV(){var x,w=this.b
if(w.j8(8)!==47)return!1
x=this.c
x.f=C.wW
x.a=w.j8(14)+1
x.b=w.j8(14)+1
x.d=w.j8(1)!==0
if(w.j8(3)!==0)return!1
return!0},
oc(d){var x,w,v,u,t,s=this,r=null
s.e=0
if(!s.NV())return r
x=s.c
s.L9(x.a,x.b,!0)
s.aiD()
w=x.a
s.d=A.hK(r,r,C.a7,0,C.bm,x.b,r,0,4,r,C.a7,w,!1)
w=s.ch
w.toString
v=x.a
u=x.b
if(!s.a3q(w,v,u,u,s.gbhl()))return r
x=x.w
if(x.length!==0){t=A.cT(new B.e8(x),!1,r,0)
x=s.d
x.toString
x.e=A.cwy(t)}return s.d},
aiD(){var x,w=this,v=w.c,u=v.a
v=u*v.b+u
x=new Uint32Array(v+u*16)
w.ch=x
w.CW=J.d5(D.bq.gag(x),0,null)
w.cx=v
return!0},
bi0(d){var x,w,v,u=this,t=u.b,s=t.j8(2),r=u.ay,q=D.c.er(1,s)
if((r&q)>>>0!==0)return!1
u.ay=(r|q)>>>0
x=new A.aCr(C.a5y)
u.ax.push(x)
r=C.aBM[s]
x.a=r
x.b=d[0]
x.c=d[1]
switch(r.a){case 0:case 1:t=t.j8(3)+2
x.e=t
x.d=u.L9(A.El(x.b,t),A.El(x.c,x.e),!1)
break
case 3:w=t.j8(8)+1
if(w>16)v=0
else if(w>4)v=1
else{t=w>2?2:3
v=t}d[0]=A.El(x.b,v)
x.e=v
x.d=u.L9(w,1,!1)
u.b0z(w,x)
break
case 2:break
default:throw B.l(A.c6("Invalid WebP transform type: "+s))}return!0},
L9(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(f)for(x=p.b,w=y.t,v=e,u=d;x.j8(1)!==0;){t=B.a([u,v],w)
if(!p.bi0(t))throw B.l(A.c6("Invalid Transform"))
u=t[0]
v=t[1]}else{v=e
u=d}x=p.b
if(x.j8(1)!==0){s=x.j8(4)
if(!(s>=1&&s<=11))throw B.l(A.c6("Invalid Color Cache"))}else s=0
if(!p.bhR(u,v,s,f))throw B.l(A.c6("Invalid Huffman Codes"))
if(s>0){x=D.c.er(1,s)
p.r=x
p.w=new A.bKa(new Uint32Array(x),32-s)}else p.r=0
x=p.c
x.a=u
x.b=v
r=p.y
p.z=A.El(u,r)
p.x=r===0?4294967295:D.c.er(1,r)-1
if(f){p.e=0
return null}q=new Uint32Array(u*v)
if(!p.a3q(q,u,v,v,null))throw B.l(A.c6("Failed to decode image data."))
p.e=0
return q},
a3q(a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=a0.e,a2=D.c.hw(a1,a9),a3=D.c.ap(a1,a9),a4=a0.amD(a3,a2),a5=a0.e,a6=a9*b0,a7=a9*b1
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
if((a3&v)>>>0===0){p=a0.Lu(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(u.a>=32)u.BY()
r=a4.a
o=r[0].An(u)
n=0
if(o<256){m=r[1].An(u)
if(u.a>=32)u.BY()
l=A.cHc(r[2].An(u),o,m,r[3].An(u))
a1&2&&B.B(a8)
a8[a5]=l;++a5;++a3
if(a3>=a9){++a2
if(D.c.ap(a2,16)===0&&t)b2.$1(a2)
if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.c.h_(j*506832829>>>0,r)
k&2&&B.B(q)
q[i]=j;++s}a3=n}}else if(o<280){h=a0.TK(o-256)
g=r[4].An(u)
if(u.a>=32)u.BY()
f=a0.aqw(a9,a0.TK(g))
if(a5<f||a6-a5<h)return!1
else{e=a5-f
for(d=0;d<h;++d){r=a8[e+d]
a1&2&&B.B(a8)
a8[a5+d]=r}a5+=h}a3+=h
for(;a3>=a9;){a3-=a9;++a2
if(D.c.ap(a2,16)===0&&t)b2.$1(a2)}if(a5<a7){if((a3&v)>>>0!==0){p=a0.Lu(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.c.h_(j*506832829>>>0,r)
k&2&&B.B(q)
q[i]=j;++s}}}else if(o<x){for(;s<a5;){r=a8[s]
i=D.c.h_(r*506832829>>>0,w.b)
q=w.a
q.$flags&2&&B.B(q)
q[i]=r;++s}r=w.a
q=r[o-280]
a1&2&&B.B(a8)
a8[a5]=q;++a5;++a3
if(a3>=a9){++a2
if(D.c.ap(a2,16)===0&&t)b2.$1(a2)
for(q=w.b,k=r.$flags|0;s<a5;){j=a8[s]
i=D.c.h_(j*506832829>>>0,q)
k&2&&B.B(r)
r[i]=j;++s}a3=n}}else return!1}if(t)b2.$1(a2)
if(r.d>=q&&u.a>=64&&a5<a6)return!1
a0.e=a5
return!0},
bam(){var x,w,v,u
if(this.r>0)return!1
for(x=this.as,w=this.at,v=0;v<x;++v){u=w[v].a
if(u[1].f>1)return!1
if(u[2].f>1)return!1
if(u[3].f>1)return!1}return!0},
b0H(d){var x,w,v,u,t,s,r=this,q=r.f,p=d-q
if(p<=0)return
x=r.c
r.aiN(p,x.a*q)
w=x.a
v=w*p
u=w*r.f
x=r.ch
x.toString
q=r.cx
q.toString
t=A.cT(x,!1,null,q)
for(s=0;s<v;++s){q=r.cy
q.toString
x=D.c.R(J.v(t.a,t.d+s),8)
q.$flags&2&&B.B(q)
q[u+s]=x&255}r.f=d},
aYN(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=o.e,m=D.c.hw(n,d),l=D.c.ap(n,d),k=o.amD(l,m),j=o.e,i=d*e,h=d*f,g=o.x
n=o.b
while(!0){x=n.b
if(!(!(x.d>=x.c&&n.a>=64)&&j<h))break
if((l&g)>>>0===0){w=o.Lu(o.Q,o.z,o.y,l,m)
k=o.at[w]}if(n.a>=32)n.BY()
x=k.a
v=x[0].An(n)
if(v<256){x=o.CW
x===$&&B.b()
x.$flags&2&&B.B(x)
x[j]=v;++j;++l
if(l>=d){++m
if(D.c.ap(m,16)===0)o.a3O(m)
l=0}}else if(v<280){u=o.TK(v-256)
t=x[4].An(n)
if(n.a>=32)n.BY()
s=o.aqw(d,o.TK(t))
if(j>=s&&i-j>=u)for(x=o.CW,r=0;r<u;++r){x===$&&B.b()
q=j+r
p=x[q-s]
x.$flags&2&&B.B(x)
x[q]=p}else{o.e=j
return!0}j+=u
l+=u
for(;l>=d;){l-=d;++m
if(D.c.ap(m,16)===0)o.a3O(m)}if(j<h&&(l&g)>>>0!==0){w=o.Lu(o.Q,o.z,o.y,l,m)
k=o.at[w]}}else return!1}o.a3O(m)
o.e=j
return!0},
a3O(d){var x,w,v,u=this,t=u.f,s=d-t,r=u.CW
r===$&&B.b()
x=A.cT(r,!1,null,u.c.a*t)
if(s>0){w=u.f
t=u.cy
t.toString
r=u.db
r.toString
v=A.cT(t,!1,null,r*w)
u.ax[0].bto(w,w+s,x,v)}u.f=d},
bhm(d){var x,w,v,u,t,s=this,r=s.c,q=r.a,p=s.f,o=d-p
if(o<=0)return
s.aiN(o,q*p)
q=s.cx
q.toString
x=s.f
w=q
v=0
for(;v<o;++v,++x)for(u=0;u<r.a;++u,++w){t=s.ch[w]
q=s.d.a
if(q!=null)q.kC(u,x,t>>>16&255,t>>>8&255,t&255,t>>>24&255)}s.f=d},
aiN(d,e){var x,w,v,u=this,t=u.ax,s=t.length,r=u.c.a,q=u.f,p=q+d,o=u.cx
o.toString
x=u.ch
x.toString
D.bq.dN(x,o,o+r*d,x,e)
for(w=e;v=s-1,s>0;w=o,s=v){r=t[v]
x=u.ch
x.toString
r.bBJ(q,p,x,w,x,o)}},
bhR(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=1
if(g&&l.b.j8(1)!==0){x=l.b.j8(3)+2
w=A.El(d,x)
v=A.El(e,x)
u=w*v
t=l.L9(w,v,!1)
l.y=x
for(s=0;s<u;++s){r=t[s]>>>8&65535
t.$flags&2&&B.B(t)
t[s]=r
if(r>=k)k=r+1}}else t=null
q=J.j_(k,y.O)
for(p=0;p<k;++p)q[p]=A.cTj()
for(o=f>0,s=0;s<k;++s)for(n=0;n<5;++n){m=C.atC[n]
if(n===0&&o)m+=D.c.er(1,f)
if(!l.bhP(m,q[s].a[n]))return!1}l.Q=t
l.as=k
l.at=q
return!0},
bhP(d,e){var x,w,v,u,t,s,r,q,p,o=this.b
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
u[1]=x}s=e.bsg(u,v,w,d,t)}else{r=new Int32Array(19)
q=o.j8(4)+4
if(q>19)return!1
u=new Int32Array(d)
for(p=0;p<q;++p)r[C.aw7[p]]=o.j8(3)
s=this.bhQ(r,d,u)
if(s)s=e.awK(u,d)}return s},
bhQ(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.cxk()
if(!j.awK(d,19))return!1
x=this.b
if(x.j8(1)!==0){w=2+x.j8(2+2*x.j8(3))
if(w>e)return!1}else w=e
for(v=f.$flags|0,u=0,t=8;u<e;w=s){s=w-1
if(w===0)break
if(x.a>=32)x.BY()
r=j.An(x)
if(r<16){q=u+1
v&2&&B.B(f)
f[u]=r
if(r!==0)t=r
u=q}else{p=r-16
o=C.apN[p]
n=C.aq7[p]
m=x.j8(o)+n
if(u+m>e)return!1
else{l=r===16?t:0
for(;k=m-1,m>0;m=k,u=q){q=u+1
v&2&&B.B(f)
f[u]=l}}}}return!0},
TK(d){var x
if(d<4)return d+1
x=D.c.R(d-2,1)
return D.c.er(2+(d&1),x)+this.b.j8(x)+1},
aqw(d,e){var x,w
if(e>120)return e-120
else{x=C.atT[e-1]
w=(x>>>4)*d+(8-(x&15))
return w>=1?w:1}},
b0z(d,e){var x,w,v,u,t,s,r=D.c.er(1,D.c.hB(8,e.e)),q=new Uint32Array(r),p=e.d
p.toString
x=J.d5(D.bq.gag(p),0,null)
w=J.d5(D.bq.gag(q),0,null)
q[0]=e.d[0]
v=4*d
for(p=w.$flags|0,u=4;u<v;++u){t=x[u]
s=w[u-4]
p&2&&B.B(w)
w[u]=t+s&255}for(v=4*r;u<v;++u){p&2&&B.B(w)
w[u]=0}e.d=q
return!0},
Lu(d,e,f,g,h){if(f===0)return 0
d.toString
return d[e*D.c.R(h,f)+D.c.R(g,f)]},
amD(d,e){var x=this,w=x.Lu(x.Q,x.z,x.y,d,e)
return x.at[w]}}
A.aqT.prototype={
byr(d){return this.b0H(d)}}
A.aCq.prototype={
aDw(){var x,w,v=this.a
if(v<32){x=this.c
w=D.c.h_(x[0],v)+((x[1]&C.Bc[v])>>>0)*(C.Bc[32-v]+1)}else{x=this.c
w=v===32?x[1]:D.c.h_(x[1],v-32)}return w},
j8(d){var x,w=this,v=w.b
if(!(v.d>=v.c&&w.a>=64)&&d<25){v=w.aDw()
x=C.Bc[d]
w.a+=d
w.BY()
return(v&x)>>>0}else throw B.l(A.c6("Not enough data in input."))},
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
A.bKa.prototype={}
A.Kt.prototype={
J(){return"VP8LImageTransformType."+this.b}}
A.aCr.prototype={
bBJ(d,e,f,g,h,i){var x,w,v,u,t=this,s=t.b
switch(t.a.a){case 2:t.bqh(h,i,i+(e-d)*s)
break
case 0:t.bHh(d,e,h,i)
if(e!==t.c){x=i-s
D.bq.dN(h,x,x+s,f,i+(e-d-1)*s)}break
case 1:t.btp(d,e,h,i)
break
case 3:if(g===i&&t.e>0){w=e-d
v=w*A.El(s,t.e)
u=i+w*s-v
D.bq.dN(h,u,u+v,f,i)
t.axK(d,e,f,u,h,i)}else t.axK(d,e,f,g,h,i)
break}},
bto(d,e,f,g){var x,w,v,u,t,s,r=this.e,q=D.c.hB(8,r),p=this.b,o=this.d
if(q<8){x=D.c.er(1,r)-1
w=D.c.er(1,q)-1
for(v=d;v<e;++v)for(u=0,t=0;t<p;++t){if((t&x)>>>0===0){u=J.v(f.a,f.d);++f.d}r=o[(u&w)>>>0]
J.bV(g.a,g.d,r>>>8&255);++g.d
u=D.c.R(u,q)}}else for(v=d;v<e;++v)for(t=0;t<p;++t){s=J.v(f.a,f.d);++f.d
r=o[s]
J.bV(g.a,g.d,r>>>8&255);++g.d}},
axK(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=this.e,o=D.c.hB(8,p),n=this.b,m=this.d
if(o<8){x=D.c.er(1,p)-1
w=D.c.er(1,o)-1
for(p=h.$flags|0,v=d;v<e;++v)for(u=0,t=0;t<n;++t,i=r){if((t&x)>>>0===0){s=g+1
u=f[g]>>>8&255
g=s}r=i+1
q=m[u&w]
p&2&&B.B(h)
h[i]=q
u=D.c.hB(u,o)}}else for(p=h.$flags|0,v=d;v<e;++v)for(t=0;t<n;++t,i=r,g=s){r=i+1
s=g+1
q=m[f[g]>>>8&255]
p&2&&B.B(h)
h[i]=q}},
btp(a2,a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.b,e=g.e,d=D.c.er(1,e)-1,a0=A.El(f,e),a1=D.c.R(a2,g.e)*a0
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
o=$.op()
o.$flags&2&&B.B(o)
o[0]=p
p=$.pA()
n=p[0]
o[0]=q
m=p[0]
l=$.aV1()
l.$flags&2&&B.B(l)
l[0]=n*m
k=$.clD()
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
bHh(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=this,n=o.b
if(d===0){A.bKb(f,g,4278190080)
for(x=1;x<n;++x){w=g+x
A.bKb(f,w,f[w-1])}g+=n;++d}w=o.e
v=D.c.er(1,w)-1
u=A.El(n,w)
t=D.c.R(d,o.e)*u
for(s=d;s<e;){A.bKb(f,g,f[g-n])
r=t+1
q=$.cCC[o.d[t]>>>8&15]
for(x=1;x<n;++x){if((x&v)>>>0===0){p=r+1
q=$.cCC[o.d[r]>>>8&15]
r=p}w=g+x
A.bKb(f,w,q.$3(f,f[w-1],w-n))}g+=n;++s
if((s&v)>>>0===0)t+=u}},
bqh(d,e,f){var x,w,v,u
for(x=d.$flags|0;e<f;e=u){w=d[e]
v=w>>>8&255
u=e+1
x&2&&B.B(d)
d[e]=(w&4278255360|(w&16711935)+(v<<16|v)&16711935)>>>0}}}
A.bL0.prototype={
gex(){var x=this,w=x.d
if(w>1||x.e>=4||x.f>1||x.r!==0)return!1
return!0},
NU(d,e,f,g){var x,w,v,u,t,s,r=this
if(!r.gex())return!1
x=C.aCy[r.e]
if(r.d===0){w=r.b
v=e*w
u=r.a
D.A.dN(g,v,f*w,u.a,u.d-u.b+v)}else{w=e+f
u=r.x
u===$&&B.b()
u.cy=g
t=u.c
if(r.y)w=u.aYN(t.a,t.b,w)
else{s=u.ch
s.toString
u=u.a3q(s,t.a,t.b,w,u.gbyq())
w=u}if(!w)return!1}if(x!=null){w=r.b
x.$6(w,r.c,w,e,f,g)}if(r.f===1)if(!r.aZF(g,r.b,r.c,e,f))return!1
if(e+f===r.c)r.w=!0
return!0},
aZF(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
A.a7K.prototype={
aTF(d,e){var x=this,w=d.dg()
x.r=0
x.f=(w&1)!==0
x.w=d.d-d.b
x.x=e-16}}
A.aqU.prototype={}
A.aqb.prototype={
a7G(d){var x,w=this
if(d===0)return!1
x=(d<<1>>>0)-1
w.e=x
x=new Int32Array(x<<1>>>0)
w.d=x
x[1]=-1
w.f=1
D.A.l_(w.a,0,128,255)
return!0},
awK(d,e){var x,w,v,u,t,s=this
for(x=0,w=0,v=0;v<e;++v)if(d[v]>0){++x
w=v}if(!s.a7G(x))return!1
if(x===1){if(w<0||w>=e)return!1
return s.a2z(w,0,0)}u=new Int32Array(e)
if(!s.b9k(d,e,u))return!1
for(v=0;v<e;++v){t=d[v]
if(t>0)if(!s.a2z(v,u[v],t))return!1}return s.f===s.e},
bsg(d,e,f,g,h){var x,w,v,u=this
if(!u.a7G(h))return!1
for(x=0;x<h;++x){w=e[x]
if(w!==-1){v=f[x]
if(v>=g)return u.f===u.e
if(!u.a2z(v,w,d[x]))return u.f===u.e}}return u.f===u.e},
An(d){var x,w,v=this,u=d.aDw(),t=d.a,s=u&127,r=v.a[s]
if(r<=7){d.a=t+r
return v.b[s]}x=v.c[s]
t+=7
u=u>>>7
do{w=v.d
w===$&&B.b()
x=x+w[(x<<1>>>0)+1]+(u&1)
u=u>>>1;++t}while(v.apM(x))
d.a=t
return v.d[x<<1>>>0]},
a2z(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
if(f<=7){x=l.arB(e,f)
for(w=D.c.eS(1,7-f),v=l.b,u=v.$flags|0,t=l.a,s=t.$flags|0,r=0;r<w;++r){q=(x|D.c.eS(r,f))>>>0
u&2&&B.B(v)
v[q]=d
s&2&&B.B(t)
t[q]=f}}else x=l.arB(D.c.o_(e,f-7),7)
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
o+=t[s]+(D.c.o_(e,n)&1);--p
if(p===0){v&2&&B.B(w)
w[x]=o}}if(l.bcx(o))l.bcy(o,0)
else if(l.apM(o))return!1
w=l.d
w===$&&B.b()
w.$flags&2&&B.B(w)
w[o<<1>>>0]=d
return!0},
arB(d,e){return D.c.h_((C.RT[d&15]<<4|C.RT[D.c.R(d,4)])>>>0,8-e)},
bcy(d,e){var x=this.d
x===$&&B.b()
x.$flags&2&&B.B(x)
x[(d<<1>>>0)+1]=e},
apM(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]!==0},
bcx(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]<0},
b9k(d,e,f){var x,w,v,u,t,s,r,q,p=new Int32Array(16),o=new Int32Array(16)
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
A.a_d.prototype={
i(d,e){return this.a[e]}}
A.SX.prototype={
J(){return"WebPFormat."+this.b}}
A.aCT.prototype={}
A.aqV.prototype={}
A.bL1.prototype={
Ie(d){var x=A.cT(d,!1,null,0)
this.b=x
if(!this.amA(x))return!1
return!0},
oA(d){var x,w=this,v=null,u=A.cT(d,!1,v,0)
w.b=u
if(!w.amA(u))return v
u=new A.aqV(C.o3,B.a([],y.J))
w.a=u
x=w.b
x.toString
if(!w.avl(x,u))return v
u=w.a
switch(u.f.a){case 3:u.as=u.z.length
return u
case 2:x=w.b
x.toString
x.d=u.ay
if(!A.cq0(x,u).NV())return v
u=w.a
u.as=u.z.length
return u
case 1:x=w.b
x.toString
x.d=u.ay
if(!A.cpZ(x,u).NV())return v
u=w.a
u.as=u.z.length
return u
case 0:throw B.l(A.c6("Unknown format for WebP"))}},
k9(d){var x,w,v,u,t=this,s=t.b
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
return t.akE(s.B0(x,w),d)}w=x.f
if(w===C.wW){s.toString
u=s.B0(x.ch,x.ay)
s=t.a
s.toString
return A.cq0(u,s).oc(0)}else if(w===C.Ee){s.toString
u=s.B0(x.ch,x.ay)
s=t.a
s.toString
return A.cpZ(u,s).oc(0)}return null},
nA(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=null
if(p.oA(e)==null)return o
x=p.a.e
if(!x)return p.k9(0)
for(w=o,v=w,u=0;x=p.a,u<x.as;++u){f=x.z[u]
t=p.k9(u)
if(t==null)continue
t.y=f.e
if(v==null||w==null){x=p.a
s=x.a
x=x.b
r=t.gqb()
q=t.a
q=q==null?o:q.gdv()
if(q==null)q=C.a7
v=A.hK(o,o,q,t.y,C.bm,x,o,0,r,o,C.a7,s,!1)
w=v}else{w=A.BK(w,!1,!1)
x=f.f
x===$&&B.b()
if(x){x=w.a
if(x!=null)x.nv(0,o)}}A.crs(w,t,C.y7,o,o,f.a,f.b,o,o,o,o)
v.ns(w)}return v},
akE(d,e){var x,w,v,u=null,t=B.a([],y.J),s=new A.aqV(C.o3,t)
if(!this.avl(d,s))return u
if(s.f===C.o3)return u
s.as=this.a.as
if(s.e){x=t.length
if(e>=x)return u
w=t[e]
t=w.x
t===$&&B.b()
x=w.w
x===$&&B.b()
return this.akE(d.B0(t,x),e)}else{v=d.B0(s.ch,s.ay)
t=s.f
if(t===C.wW)return A.cq0(v,s).oc(0)
else if(t===C.Ee)return A.cpZ(v,s).oc(0)}return u},
amA(d){if(d.qj(4)!=="RIFF")return!1
d.an()
if(d.qj(4)!=="WEBP")return!1
return!0},
avl(d,e){var x,w,v,u,t,s,r,q,p,o,n,m
for(x=d.c,w=d.b;d.d<x;){v=d.qj(4)
u=d.an()
t=u+1>>>1<<1>>>0
s=d.d
r=s-w
switch(v){case"VP8X":if(!this.b3_(d,e))return!1
break
case"VP8 ":e.ay=r
e.ch=u
e.f=C.Ee
break
case"VP8L":e.ay=r
e.ch=u
e.f=C.wW
break
case"ALPH":e.toString
s=d.a
q=d.e
p=J.bl(s)
s=new A.lU(s,0,p,0,q)
e.at=s
s.d=d.d
d.d+=t
break
case"ANIM":e.f=C.b8c
o=d.an()
s=new Uint8Array(4)
s[0]=o>>>8&255
s[1]=o>>>16&255
s[2]=o>>>24&255
s[3]=o&255
d.bP()
break
case"ANMF":if(!this.b1M(d,e,u))return!1
break
case"ICCP":e.toString
n=d.jZ(u)
d.d=d.d+(n.c-n.d)
n.hL()
break
case"EXIF":e.toString
e.w=d.qj(u)
break
case"XMP ":e.toString
d.qj(u)
break
default:d.d=s+t
break}s=d.d
m=t-(s-w-r)
if(m>0)d.d=s+m}if(!e.d)e.d=e.at!=null
return e.f!==C.o3},
b3_(d,e){var x,w,v,u,t=d.dg()
if((t&192)!==0)return!1
x=D.c.R(t,4)
w=D.c.R(t,1)
if((t&1)!==0)return!1
if(d.rH()!==0)return!1
v=d.rH()
u=d.rH()
e.a=v+1
e.b=u+1
e.e=(w&1)!==0
e.d=(x&1)!==0
return!0},
b1M(d,e,f){var x,w=d.rH(),v=d.rH()
d.rH()
x=new A.aqU(w*2,v*2,d.rH()+1,d.rH())
x.aTF(d,f)
if(x.r!==0)return!1
e.z.push(x)
return!0}}
A.bgh.prototype={
J(){return"IccProfileCompression."+this.b}}
A.a_z.prototype={
btH(){var x,w=this
if(w.b===C.zU)return w.c
x=y.D.a(C.FZ.ka(w.c))
w.c=x
w.b=C.zU
return x}}
A.apf.prototype={
J(){return"FrameType."+this.b}}
A.BL.prototype={
gl1(){var x=this.x
return x===$?this.x=B.a([],y.g):x},
aTa(d,e,f,g){var x,w,v,u=this,t=d.gdv(),s=d.gqb(),r=d.a
u.akt(g,e,t,s,r==null?null:r.geW())
t=d.b
if(t!=null)u.b=B.ji(t,y.N,y.I)
t=d.d
if(t!=null){s=y.N
u.d=B.ji(t,s,s)}u.gl1().push(u)
if(!f){x=d.gl1().length
for(t=y.g,w=1;w<x;++w){v=d.x
u.ns(A.aqn((v===$?d.x=B.a([],t):v)[w],e,!1,g))}}},
aT9(d,e,f){var x,w,v,u,t=this,s=d.b
if(s!=null)t.b=B.ji(s,y.N,y.I)
s=d.d
if(s!=null){x=y.N
t.d=B.ji(s,x,x)}t.gl1().push(t)
if(!e&&d.gl1().length>1){w=d.gl1().length
for(s=y.g,v=1;v<w;++v){u=d.x
t.ns(A.BK((u===$?d.x=B.a([],s):u)[v],!1,!1))}}},
ns(d){var x=this
if(d==null)d=A.BK(x,!0,!0)
d.z=x.gl1().length
if(D.b.gW(x.gl1())!==d)x.gl1().push(d)
return d},
WF(){return this.ns(null)},
akt(d,e,f,g,h){var x,w,v=this,u=null
switch(f.a){case 0:if(h==null){x=D.d.f8(d*g/8)
w=new A.OP($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.f8(d/8)
w=new A.OP($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 1:if(h==null){x=D.d.f8(d*(g<<1>>>0)/8)
w=new A.OR($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.f8(d/4)
w=new A.OR($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 2:if(h==null){if(g===2)x=d
else if(g===4)x=d*2
else x=g===3?D.d.f8(d*1.5):D.d.f8(d/2)
w=new A.OT($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.f8(d/2)
w=new A.OT($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 3:if(h==null)v.a=A.cxC(d,e,g)
else v.a=new A.OU(new Uint8Array(d*e),h,d,e,1)
break
case 4:x=d*e
if(h==null)v.a=new A.OQ(new Uint16Array(x*g),u,d,e,g)
else v.a=new A.OQ(new Uint16Array(x),h,d,e,1)
break
case 5:v.a=A.cTT(d,e,g)
break
case 6:v.a=new A.a_G(new Int8Array(d*e*g),d,e,g)
break
case 7:v.a=new A.a_E(new Int16Array(d*e*g),d,e,g)
break
case 8:v.a=new A.a_F(new Int32Array(d*e*g),d,e,g)
break
case 9:v.a=A.cTR(d,e,g)
break
case 10:v.a=A.cTS(d,e,g)
break
case 11:v.a=new A.a_D(new Float64Array(d*e*4*g),d,e,g)
break}},
j(d){var x=this
return"Image("+x.gcZ(0)+", "+x.gb5(0)+", "+x.gdv().b+", "+x.gqb()+")"},
gcZ(d){var x=this.a
x=x==null?null:x.a
return x==null?0:x},
gb5(d){var x=this.a
x=x==null?null:x.b
return x==null?0:x},
gdv(){var x=this.a
x=x==null?null:x.gdv()
return x==null?C.a7:x},
gwT(){var x=this.e
return x==null?this.e=new A.O8(B.H(y.N,y.P)):x},
aKf(d,e){var x=this,w=x.b;(w==null?x.b=B.H(y.N,y.I):w).m(0,d,e)
if(x.b.a===0)x.b=null},
ga1(d){var x=this.a
return x.ga1(x)},
gag(d){var x=this.a
x=x==null?null:x.gag(x)
if(x==null)x=D.A.gag(new Uint8Array(0))
return x},
gqb(){var x=this.a
x=x==null?null:x.geW()
x=x==null?null:x.b
if(x==null){x=this.a
x=x==null?null:x.c}return x==null?0:x},
grn(){var x=this.a
return(x==null?null:x.geW())!=null},
gmO(){var x=this.a
x=x==null?null:x.gmO()
return x==null?0:x},
aBC(d,e){return d>=0&&e>=0&&d<this.gcZ(0)&&e<this.gb5(0)},
nW(d,e,f,g){var x=this.a
x=x==null?null:x.nW(d,e,f,g)
if(x==null)x=new A.xJ(new Uint8Array(0))
return x},
el(d,e,f){var x=this.a
x=x==null?null:x.el(d,e,f)
return x==null?new A.fn():x},
nX(d,e){return this.el(d,e,null)},
kA(d,e){if(d<0||d>=this.gcZ(0)||e<0||e>=this.gb5(0))return new A.fn()
return this.el(d,e,null)},
aIc(d,e,f){switch(f.a){case 0:return this.kA(D.d.D(d),D.d.D(e))
case 1:case 3:return this.aId(d,e)
case 2:return this.aIb(d,e)}},
aId(d,e){var x,w,v,u,t,s,r=this,q=D.d.D(d),p=q-(d>=0?0:1),o=p+1
q=D.d.D(e)
x=q-(e>=0?0:1)
w=x+1
q=new A.bgV(d-p,e-x)
v=r.kA(p,x)
u=w>=r.gb5(0)?v:r.kA(p,w)
t=o>=r.gcZ(0)?v:r.kA(o,x)
s=o>=r.gcZ(0)||w>=r.gb5(0)?v:r.kA(o,w)
return r.nW(q.$4(v.gaz(v),t.gaz(t),u.gaz(u),s.gaz(s)),q.$4(v.gaL(),t.gaL(),u.gaL(),s.gaL()),q.$4(v.gaN(v),t.gaN(t),u.gaN(u),s.gaN(s)),q.$4(v.gaO(v),t.gaO(t),u.gaO(u),s.gaO(s)))},
aIb(d0,d1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=D.d.D(d0),c6=c5-(d0>=0?0:1),c7=c6-1,c8=c6+1,c9=c6+2
c5=D.d.D(d1)
x=c5-(d1>=0?0:1)
w=x-1
v=x+1
u=x+2
t=d0-c6
s=d1-x
c5=new A.bgU()
r=c4.kA(c6,x)
q=c7<0
p=!q
o=!p||w<0?r:c4.kA(c7,w)
n=q?r:c4.kA(c6,w)
m=w<0
l=m||c8>=c4.gcZ(0)?r:c4.kA(c8,w)
k=c9>=c4.gcZ(0)||m?r:c4.kA(c9,w)
j=c5.$5(t,o.gaz(o),n.gaz(n),l.gaz(l),k.gaz(k))
i=c5.$5(t,o.gaL(),n.gaL(),l.gaL(),k.gaL())
h=c5.$5(t,o.gaN(o),n.gaN(n),l.gaN(l),k.gaN(k))
g=c5.$5(t,o.gaO(o),n.gaO(n),l.gaO(l),k.gaO(k))
f=q?r:c4.kA(c7,x)
e=c8>=c4.gcZ(0)?r:c4.kA(c8,x)
d=c9>=c4.gcZ(0)?r:c4.kA(c9,x)
a0=c5.$5(t,f.gaz(f),r.gaz(r),e.gaz(e),d.gaz(d))
a1=c5.$5(t,f.gaL(),r.gaL(),e.gaL(),d.gaL())
a2=c5.$5(t,f.gaN(f),r.gaN(r),e.gaN(e),d.gaN(d))
a3=c5.$5(t,f.gaO(f),r.gaO(r),e.gaO(e),d.gaO(d))
a4=!p||v>=c4.gb5(0)?r:c4.kA(c7,v)
a5=v>=c4.gb5(0)?r:c4.kA(c6,v)
a6=c8>=c4.gcZ(0)||v>=c4.gb5(0)?r:c4.kA(c8,v)
a7=c9>=c4.gcZ(0)||v>=c4.gb5(0)?r:c4.kA(c9,v)
a8=c5.$5(t,a4.gaz(a4),a5.gaz(a5),a6.gaz(a6),a7.gaz(a7))
a9=c5.$5(t,a4.gaL(),a5.gaL(),a6.gaL(),a7.gaL())
b0=c5.$5(t,a4.gaN(a4),a5.gaN(a5),a6.gaN(a6),a7.gaN(a7))
b1=c5.$5(t,a4.gaO(a4),a5.gaO(a5),a6.gaO(a6),a7.gaO(a7))
b2=!p||u>=c4.gb5(0)?r:c4.kA(c7,u)
b3=u>=c4.gb5(0)?r:c4.kA(c6,u)
b4=c8>=c4.gcZ(0)||u>=c4.gb5(0)?r:c4.kA(c8,u)
b5=c9>=c4.gcZ(0)||u>=c4.gb5(0)?r:c4.kA(c9,u)
b6=c5.$5(t,b2.gaz(b2),b3.gaz(b3),b4.gaz(b4),b5.gaz(b5))
b7=c5.$5(t,b2.gaL(),b3.gaL(),b4.gaL(),b5.gaL())
b8=c5.$5(t,b2.gaN(b2),b3.gaN(b3),b4.gaN(b4),b5.gaN(b5))
b9=c5.$5(t,b2.gaO(b2),b3.gaO(b3),b4.gaO(b4),b5.gaO(b5))
c0=c5.$5(s,j,a0,a8,b6)
c1=c5.$5(s,i,a1,a9,b7)
c2=c5.$5(s,h,a2,b0,b8)
c3=c5.$5(s,g,a3,b1,b9)
return c4.nW(D.d.D(c0),D.d.D(c1),D.d.D(c2),D.d.D(c3))},
y3(d,e,f){var x
if(y.c0.b(f))if(f.gfo(f).geW()!=null)if(this.grn()){x=this.a
if(x!=null)x.fe(d,e,f.gef(f),0,0)
return}x=this.a
if(x!=null)x.kC(d,e,f.gaz(f),f.gaL(),f.gaN(f),f.gaO(f))},
gcg(){var x=this.a
x=x==null?null:x.gcg()
return x==null?0:x},
nv(d,e){var x=this.a
return x==null?null:x.nv(0,e)},
S(d){return this.nv(0,null)},
ay3(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
if(a5==null)a5=a2.gdv()
if(a6==null)a6=a2.gqb()
a4=C.XX.i(0,a5)
if(a5.a<3)a2.gdv()
x=!1
if(a5===a2.gdv())if(a6===a2.gqb()){w=a2.a
x=(w==null?a3:w.geW())==null}if(x)return A.BK(a2,!1,!1)
for(x=a2.gl1(),w=x.length,v=y.N,u=y.p,t=a3,s=0;s<x.length;x.length===w||(0,B.R)(x),++s,t=j){r=x[s]
q=r.a
p=q==null
o=p?a3:q.a
if(o==null)o=0
q=p?a3:q.b
if(q==null)q=0
p=r.e
p=p==null?a3:A.Zo(p)
n=r.c
if(n==null)n=a3
else{m=n.a
l=n.b
n=n.c
n=new A.a_z(m,l,new Uint8Array(n.subarray(0,B.qD(0,a3,n.length))))}m=r.w
l=r.r
k=A.hK(a3,p,a5,r.y,m,q,n,l,a6,a3,C.a7,o,!1)
q=r.d
k.d=q!=null?B.ji(q,v,v):a3
if(t!=null){t.ns(k)
j=t}else j=k
q=k.a
i=q==null?a3:q.geW()
q=k.a
q=q==null?a3:q.geW()
h=q==null?a3:q.gdv()
if(h==null)h=a5
q=r.a
if(i!=null){g=B.H(u,u)
f=q==null?a3:q.el(0,0,a3)
if(f==null)f=new A.fn()
for(q=k.a,q=q.ga1(q),e=a3,d=0;q.q();){a0=q.gL(q)
a1=A.cHc(D.d.h1(f.giz()*255),D.d.h1(f.gii()*255),D.d.h1(f.gir()*255),0)
if(g.a3(0,a1)){p=g.i(0,a1)
p.toString
a0.sef(0,p)}else{g.m(0,a1,d)
a0.sef(0,d)
e=A.pu(f,a4,h,a6,e)
i.pk(d,e.gaz(e),e.gaL(),e.gaN(e));++d}f.q()}}else{f=q==null?a3:q.el(0,0,a3)
if(f==null)f=new A.fn()
for(q=k.a,q=q.ga1(q);q.q();){A.pu(f,a4,a3,a3,q.gL(q))
f.q()}}}t.toString
return t},
ob(d){return this.ay3(null,d,null)},
ay2(d){return this.ay3(null,null,d)},
bqB(d){var x,w,v,u
if(this.d==null){x=y.N
this.d=B.H(x,x)}for(x=new B.ce(d,d.r,d.e,B.p(d).h("ce<1>"));x.q();){w=x.d
v=this.d
v.toString
u=d.i(0,w)
u.toString
v.m(0,w,u)}},
aYo(d,e,f){var x,w=65536
switch(e.a){case 0:return null
case 1:return null
case 2:return null
case 3:x=d===C.cc?w:256
return new A.uh(new Uint8Array(x*f),x,f)
case 4:x=d===C.cc?w:256
return new A.avu(new Uint16Array(x*f),x,f)
case 5:x=d===C.cc?w:256
return new A.a2g(new Uint32Array(x*f),x,f)
case 6:x=d===C.cc?w:256
return new A.avt(new Int8Array(x*f),x,f)
case 7:x=d===C.cc?w:256
return new A.avr(new Int16Array(x*f),x,f)
case 8:x=d===C.cc?w:256
return new A.avs(new Int32Array(x*f),x,f)
case 9:x=d===C.cc?w:256
return new A.avo(new Uint16Array(x*f),x,f)
case 10:x=d===C.cc?w:256
return new A.avp(new Float32Array(x*f),x,f)
case 11:x=d===C.cc?w:256
return new A.avq(new Float64Array(x*f),x,f)}}}
A.lS.prototype={
geW(){return null}}
A.ON.prototype={
qZ(d,e){var x=this,w=x.d
if(e)w=new Uint16Array(w.length)
else w=new Uint16Array(B.bU(w))
return new A.ON(w,x.a,x.b,x.c)},
gdv(){return C.hL},
gag(d){return D.dO.gag(this.d)},
gmO(){return 16},
grK(){return this.a*this.c*2},
ga1(d){return A.cov(this)},
qq(d,e,f,g,h){return A.ui(A.cov(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcg(){return 1},
grt(){return!0},
nW(d,e,f,g){var x=new Uint16Array(4),w=new A.MO(x)
x[0]=A.fQ(d)
x[1]=A.fQ(e)
x[2]=A.fQ(f)
x[3]=A.fQ(g)
x=w
return x},
el(d,e,f){if(f==null||!(f instanceof A.Ig)||f.d!==this)f=A.cov(this)
f.ho(0,d,e)
return f},
nX(d,e){return this.el(d,e,null)},
mB(d,e,f){var x=this.c,w=this.d,v=A.fQ(f)
w.$flags&2&&B.B(w)
w[e*this.a*x+d*x]=v},
fe(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=A.fQ(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=A.fQ(g)
if(x>2)v[w+2]=A.fQ(h)}},
kC(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=A.fQ(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=A.fQ(g)
if(x>2){v[w+2]=A.fQ(h)
if(x>3)v[w+3]=A.fQ(i)}}},
j(d){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){}}
A.OO.prototype={
qZ(d,e){var x=this,w=x.d
if(e)w=new Float32Array(w.length)
else w=new Float32Array(B.bU(w))
return new A.OO(w,x.a,x.b,x.c)},
gdv(){return C.j7},
gag(d){return D.eZ.gag(this.d)},
gmO(){return 32},
ga1(d){return A.cow(this)},
qq(d,e,f,g,h){return A.ui(A.cow(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcg(){return 1},
grK(){return this.a*this.c*4},
grt(){return!0},
nW(d,e,f,g){var x=new Float32Array(4),w=new A.MP(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
el(d,e,f){if(f==null||!(f instanceof A.Ih)||f.d!==this)f=A.cow(this)
f.ho(0,d,e)
return f},
nX(d,e){return this.el(d,e,null)},
mB(d,e,f){var x=this.c,w=this.d
w.$flags&2&&B.B(w)
w[e*this.a*x+d*x]=f},
fe(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.B(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
kC(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.B(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){}}
A.a_D.prototype={
qZ(d,e){var x=this,w=x.d
if(e)w=new Float64Array(w.length)
else w=new Float64Array(B.bU(w))
return new A.a_D(w,x.a,x.b,x.c)},
gdv(){return C.kD},
gag(d){return D.e7.gag(this.d)},
gu(d){return this.d.byteLength},
gmO(){return 64},
ga1(d){return A.cox(this)},
qq(d,e,f,g,h){return A.ui(A.cox(this),e,f,g,h)},
gcg(){return 1},
grK(){return this.a*this.c*8},
grt(){return!0},
nW(d,e,f,g){var x=new Float64Array(4),w=new A.MQ(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
el(d,e,f){if(f==null||!(f instanceof A.Ii)||f.d!==this)f=A.cox(this)
f.ho(0,d,e)
return f},
nX(d,e){return this.el(d,e,null)},
mB(d,e,f){var x=this.c,w=this.d
w.$flags&2&&B.B(w)
w[e*this.a*x+d*x]=f},
fe(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.B(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
kC(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.B(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){}}
A.a_E.prototype={
qZ(d,e){var x=this,w=x.d
if(e)w=new Int16Array(w.length)
else w=new Int16Array(B.bU(w))
return new A.a_E(w,x.a,x.b,x.c)},
gdv(){return C.kF},
gag(d){return D.jw.gag(this.d)},
ga1(d){return A.coy(this)},
qq(d,e,f,g,h){return A.ui(A.coy(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcg(){return 32767},
grt(){return!0},
gmO(){return 16},
grK(){return this.a*this.c*2},
nW(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Int16Array(4),s=new A.MR(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
el(d,e,f){if(f==null||!(f instanceof A.Ij)||f.d!==this)f=A.coy(this)
f.ho(0,d,e)
return f},
nX(d,e){return this.el(d,e,null)},
mB(d,e,f){var x=this.c,w=this.d,v=D.d.D(f)
w.$flags&2&&B.B(w)
w[e*this.a*x+d*x]=v},
fe(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
kC(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
j(d){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){}}
A.a_F.prototype={
qZ(d,e){var x=this,w=x.d
if(e)w=new Int32Array(w.length)
else w=new Int32Array(B.bU(w))
return new A.a_F(w,x.a,x.b,x.c)},
gdv(){return C.kG},
gag(d){return D.ck.gag(this.d)},
gmO(){return 32},
grK(){return this.a*this.c*4},
ga1(d){return A.coz(this)},
qq(d,e,f,g,h){return A.ui(A.coz(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcg(){return 2147483647},
grt(){return!0},
nW(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Int32Array(4),s=new A.MS(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
el(d,e,f){if(f==null||!(f instanceof A.Ik)||f.d!==this)f=A.coz(this)
f.ho(0,d,e)
return f},
nX(d,e){return this.el(d,e,null)},
mB(d,e,f){var x=this.c,w=this.d,v=D.d.D(f)
w.$flags&2&&B.B(w)
w[e*this.a*x+d*x]=v},
fe(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
kC(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
j(d){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){}}
A.a_G.prototype={
qZ(d,e){var x=this,w=x.d
if(e)w=new Int8Array(w.length)
else w=new Int8Array(B.bU(w))
return new A.a_G(w,x.a,x.b,x.c)},
gdv(){return C.kE},
gag(d){return D.jx.gag(this.d)},
grK(){return this.a*this.c},
ga1(d){return A.coA(this)},
qq(d,e,f,g,h){return A.ui(A.coA(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcg(){return 127},
grt(){return!0},
gmO(){return 8},
nW(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Int8Array(4),s=new A.MT(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
el(d,e,f){if(f==null||!(f instanceof A.Il)||f.d!==this)f=A.coA(this)
f.ho(0,d,e)
return f},
nX(d,e){return this.el(d,e,null)},
mB(d,e,f){var x=this.c,w=this.d,v=D.d.D(f)
w.$flags&2&&B.B(w)
w[e*(this.a*x)+d*x]=v},
fe(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
kC(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
j(d){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){}}
A.OP.prototype={
bLx(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.bb()
this.d=x},
qZ(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bU(v))}x=w.f
x=x==null?null:x.dY(0)
return new A.OP(v,w.e,x,w.a,w.b,w.c)},
gdv(){return C.fi},
gu(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gcg(){var x=this.f
x=x==null?null:x.gcg()
return x==null?1:x},
grt(){return!1},
gag(d){var x=this.d
x===$&&B.b()
return D.A.gag(x)},
gmO(){return 1},
ga1(d){return A.a2u(this)},
qq(d,e,f,g,h){return A.ui(A.a2u(this),e,f,g,h)},
nW(d,e,f,g){var x=new A.MW(4,0)
x.ik(D.d.D(d),D.d.D(e),D.d.D(f),D.d.D(g))
return x},
el(d,e,f){if(f==null||!(f instanceof A.Im)||f.f!==this)f=A.a2u(this)
f.ho(0,d,e)
return f},
nX(d,e){return this.el(d,e,null)},
mB(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2u(w):x).ho(0,d,e)
w.r.kL(0,f)},
fe(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2u(w):x).ho(0,d,e)
w.r.kD(f,g,h)},
kC(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2u(w):x).ho(0,d,e)
w.r.ik(f,g,h,i)},
j(d){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){},
grK(){return this.e},
geW(){return this.f}}
A.OQ.prototype={
qZ(d,e){var x,w=this,v=w.d
if(e)v=new Uint16Array(v.length)
else v=new Uint16Array(B.bU(v))
x=w.e
x=x==null?null:x.dY(0)
return new A.OQ(v,x,w.a,w.b,w.c)},
gdv(){return C.cc},
gag(d){return D.dO.gag(this.d)},
gmO(){return 16},
gcg(){var x=this.e
x=x==null?null:x.gcg()
return x==null?65535:x},
grK(){return this.a*this.c*2},
ga1(d){return A.coB(this)},
qq(d,e,f,g,h){return A.ui(A.coB(this),e,f,g,h)},
gu(d){return this.d.byteLength},
grt(){return!0},
nW(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Uint16Array(4),s=new A.MX(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
el(d,e,f){if(f==null||!(f instanceof A.In)||f.d!==this)f=A.coB(this)
f.ho(0,d,e)
return f},
nX(d,e){return this.el(d,e,null)},
mB(d,e,f){var x=this.c,w=this.d,v=D.d.D(f)
w.$flags&2&&B.B(w)
w[e*this.a*x+d*x]=v},
fe(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
kC(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
j(d){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){},
geW(){return this.e}}
A.OR.prototype={
bLy(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.bb()
this.d=x},
qZ(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bU(v))}x=w.f
x=x==null?null:x.dY(0)
return new A.OR(v,w.e,x,w.a,w.b,w.c)},
gdv(){return C.h4},
gmO(){return 2},
gag(d){var x=this.d
x===$&&B.b()
return D.A.gag(x)},
ga1(d){return A.a2v(this)},
qq(d,e,f,g,h){return A.ui(A.a2v(this),e,f,g,h)},
gu(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gcg(){var x=this.f
x=x==null?null:x.gcg()
return x==null?3:x},
grt(){return!1},
nW(d,e,f,g){var x=new A.MY(4,0)
x.ik(D.d.D(d),D.d.D(e),D.d.D(f),D.d.D(g))
return x},
el(d,e,f){if(f==null||!(f instanceof A.Io)||f.f!==this)f=A.a2v(this)
f.ho(0,d,e)
return f},
nX(d,e){return this.el(d,e,null)},
mB(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2v(w):x).ho(0,d,e)
w.r.kM(0,f)},
fe(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2v(w):x).ho(0,d,e)
w.r.kD(f,g,h)},
kC(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2v(w):x).ho(0,d,e)
w.r.ik(f,g,h,i)},
j(d){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){},
grK(){return this.e},
geW(){return this.f}}
A.OS.prototype={
qZ(d,e){var x=this,w=x.d
if(e)w=new Uint32Array(w.length)
else w=new Uint32Array(B.bU(w))
return new A.OS(w,x.a,x.b,x.c)},
gdv(){return C.j8},
gag(d){return D.bq.gag(this.d)},
grK(){return this.a*this.c*4},
gmO(){return 32},
gcg(){return 4294967295},
ga1(d){return A.coC(this)},
qq(d,e,f,g,h){return A.ui(A.coC(this),e,f,g,h)},
gu(d){return this.d.byteLength},
grt(){return!0},
nW(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Uint32Array(4),s=new A.MZ(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
el(d,e,f){if(f==null||!(f instanceof A.Ip)||f.d!==this)f=A.coC(this)
f.ho(0,d,e)
return f},
nX(d,e){return this.el(d,e,null)},
mB(d,e,f){var x=this.c,w=this.d,v=D.d.D(f)
w.$flags&2&&B.B(w)
w[e*this.a*x+d*x]=v},
fe(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
kC(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
j(d){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){}}
A.OT.prototype={
bLz(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.bb()
this.d=x},
qZ(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bU(v))}x=w.f
x=x==null?null:x.dY(0)
return new A.OT(v,w.e,x,w.a,w.b,w.c)},
gdv(){return C.h5},
gag(d){var x=this.d
x===$&&B.b()
return D.A.gag(x)},
ga1(d){return A.a2w(this)},
qq(d,e,f,g,h){return A.ui(A.a2w(this),e,f,g,h)},
gu(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gcg(){var x=this.f
x=x==null?null:x.gcg()
return x==null?15:x},
grt(){return!1},
gmO(){return 4},
nW(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new A.N_(4,new Uint8Array(2))
t.ik(x,w,v,u)
x=t
return x},
el(d,e,f){if(f==null||!(f instanceof A.Iq)||f.e!==this)f=A.a2w(this)
f.ho(0,d,e)
return f},
nX(d,e){return this.el(d,e,null)},
mB(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2w(w):x).ho(0,d,e)
w.r.kN(0,f)},
fe(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2w(w):x).ho(0,d,e)
w.r.kD(f,g,h)},
kC(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2w(w):x).ho(0,d,e)
w.r.ik(f,g,h,i)},
j(d){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){},
grK(){return this.e},
geW(){return this.f}}
A.OU.prototype={
qZ(d,e){var x,w=this,v=w.d
if(e)v=new Uint8Array(v.length)
else v=new Uint8Array(B.bU(v))
x=w.e
x=x==null?null:x.dY(0)
return new A.OU(v,x,w.a,w.b,w.c)},
gdv(){return C.a7},
gag(d){return D.A.gag(this.d)},
grK(){return this.a*this.c},
gmO(){return 8},
ga1(d){return A.br_(this)},
qq(d,e,f,g,h){return A.ui(A.br_(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcg(){var x=this.e
x=x==null?null:x.gcg()
return x==null?255:x},
grt(){return!1},
nW(d,e,f,g){var x=A.cPp(D.d.D(D.d.bc(d,0,255)),D.d.D(D.d.bc(e,0,255)),D.d.D(D.d.bc(f,0,255)),D.d.D(D.d.bc(g,0,255)))
return x},
el(d,e,f){if(f==null||!(f instanceof A.Ir)||f.d!==this)f=A.br_(this)
f.ho(0,d,e)
return f},
nX(d,e){return this.el(d,e,null)},
mB(d,e,f){var x=this.c,w=this.d,v=D.d.D(f)
w.$flags&2&&B.B(w)
w[e*(this.a*x)+d*x]=v},
fe(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
kC(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
j(d){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
nv(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=e==null?l:A.pu(e,l,C.a7,l,l),j=m.c
if(j===1){x=k==null?0:D.c.bc(B.ba(k.gaz(k)),0,255)
j=m.d
D.A.l_(j,0,j.length,x)}else if(j===2){j=k==null
x=j?0:D.c.bc(B.ba(k.gaz(k)),0,255)
w=j?0:D.c.bc(B.ba(k.gaL()),0,255)
v=J.clU(D.A.gag(m.d),0,null)
D.dO.l_(v,0,v.length,(w<<8|x)>>>0)}else if(j===4){j=k==null
x=j?0:D.c.bc(B.ba(k.gaz(k)),0,255)
w=j?0:D.c.bc(B.ba(k.gaL()),0,255)
u=j?0:D.c.bc(B.ba(k.gaN(k)),0,255)
t=j?0:D.c.bc(B.ba(k.gaO(k)),0,255)
s=J.oq(D.A.gag(m.d),0,null)
D.bq.l_(s,0,s.length,(t<<24|u<<16|w<<8|x)>>>0)}else{j=k==null
x=j?0:D.c.bc(B.ba(k.gaz(k)),0,255)
w=j?0:D.c.bc(B.ba(k.gaL()),0,255)
u=j?0:D.c.bc(B.ba(k.gaN(k)),0,255)
for(r=A.br_(m),j=r.d,q=j.c>0,j=j.d,p=j.$flags|0;r.q();){if(q){o=r.c
n=D.d.D(D.c.bc(x,0,255))
p&2&&B.B(j)
j[o]=n}r.saL(w)
r.saN(0,u)}}},
geW(){return this.e}}
A.aqW.prototype={
J(){return"Interpolation."+this.b}}
A.bqK.prototype={}
A.avo.prototype={
dY(d){return new A.avo(new Uint16Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.dO.gag(this.c)},
gdv(){return C.hL},
gcg(){return 1},
fl(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=A.fQ(g)
x.$flags&2&&B.B(x)
x[e*v+f]=w}},
pk(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=A.fQ(e)
x.$flags&2&&B.B(x)
x[d]=w
if(v>1){x[d+1]=A.fQ(f)
if(v>2)x[d+2]=A.fQ(g)}},
n8(d,e,f){var x,w=this.b
if(f<w){w=this.c[e*w+f]
x=$.hI
w=(x!=null?x:A.iC())[w]}else w=0
return w},
nc(d){var x=this.c[d*this.b],w=$.hI
return(w!=null?w:A.iC())[x]},
na(d){var x,w=this.b
if(w<2)return 0
w=this.c[d*w+1]
x=$.hI
return(x!=null?x:A.iC())[w]},
n9(d){var x,w=this.b
if(w<3)return 0
w=this.c[d*w+2]
x=$.hI
return(x!=null?x:A.iC())[w]},
ov(d){var x,w=this.b
if(w<4)return 0
w=this.c[d*w+3]
x=$.hI
return(x!=null?x:A.iC())[w]},
uh(d,e){return this.fl(0,d,0,e)},
uf(d,e){return this.fl(0,d,1,e)},
ue(d,e){return this.fl(0,d,2,e)},
ud(d,e){return this.fl(0,d,3,e)}}
A.avp.prototype={
dY(d){return new A.avp(new Float32Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.eZ.gag(this.c)},
gdv(){return C.j7},
gcg(){return 1},
fl(d,e,f,g){var x,w=this.b
if(f<w){x=this.c
x.$flags&2&&B.B(x)
x[e*w+f]=g}},
pk(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x.$flags&2&&B.B(x)
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
n8(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nc(d){return this.c[d*this.b]},
na(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
n9(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
ov(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uh(d,e){return this.fl(0,d,0,e)},
uf(d,e){return this.fl(0,d,1,e)},
ue(d,e){return this.fl(0,d,2,e)},
ud(d,e){return this.fl(0,d,3,e)}}
A.avq.prototype={
dY(d){return new A.avq(new Float64Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.e7.gag(this.c)},
gdv(){return C.kD},
gcg(){return 1},
fl(d,e,f,g){var x,w=this.b
if(f<w){x=this.c
x.$flags&2&&B.B(x)
x[e*w+f]=g}},
pk(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x.$flags&2&&B.B(x)
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
n8(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nc(d){return this.c[d*this.b]},
na(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
n9(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
ov(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uh(d,e){return this.fl(0,d,0,e)},
uf(d,e){return this.fl(0,d,1,e)},
ue(d,e){return this.fl(0,d,2,e)},
ud(d,e){return this.fl(0,d,3,e)}}
A.avr.prototype={
dY(d){return new A.avr(new Int16Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.jw.gag(this.c)},
gdv(){return C.kF},
gcg(){return 32767},
fl(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.D(g)
x.$flags&2&&B.B(x)
x[e*v+f]=w}},
pk(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.D(e)
x.$flags&2&&B.B(x)
x[d]=w
if(v>1){x[d+1]=D.d.D(f)
if(v>2)x[d+2]=D.d.D(g)}},
n8(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nc(d){return this.c[d*this.b]},
na(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
n9(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
ov(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uh(d,e){return this.fl(0,d,0,e)},
uf(d,e){return this.fl(0,d,1,e)},
ue(d,e){return this.fl(0,d,2,e)},
ud(d,e){return this.fl(0,d,3,e)}}
A.avs.prototype={
dY(d){return new A.avs(new Int32Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.ck.gag(this.c)},
gdv(){return C.kG},
gcg(){return 2147483647},
fl(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.D(g)
x.$flags&2&&B.B(x)
x[e*v+f]=w}},
pk(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.D(e)
x.$flags&2&&B.B(x)
x[d]=w
if(v>1){x[d+1]=D.d.D(f)
if(v>2)x[d+2]=D.d.D(g)}},
n8(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nc(d){return this.c[d*this.b]},
na(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
n9(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
ov(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uh(d,e){return this.fl(0,d,0,e)},
uf(d,e){return this.fl(0,d,1,e)},
ue(d,e){return this.fl(0,d,2,e)},
ud(d,e){return this.fl(0,d,3,e)}}
A.avt.prototype={
dY(d){return new A.avt(new Int8Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.jx.gag(this.c)},
gdv(){return C.kE},
gcg(){return 127},
fl(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.D(g)
x.$flags&2&&B.B(x)
x[e*v+f]=w}},
pk(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.D(e)
x.$flags&2&&B.B(x)
x[d]=w
if(v>1){x[d+1]=D.d.D(f)
if(v>2)x[d+2]=D.d.D(g)}},
n8(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nc(d){return this.c[d*this.b]},
na(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
n9(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
ov(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uh(d,e){return this.fl(0,d,0,e)},
uf(d,e){return this.fl(0,d,1,e)},
ue(d,e){return this.fl(0,d,2,e)},
ud(d,e){return this.fl(0,d,3,e)}}
A.avu.prototype={
dY(d){return new A.avu(new Uint16Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.dO.gag(this.c)},
gdv(){return C.cc},
gcg(){return 65535},
fl(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.D(g)
x.$flags&2&&B.B(x)
x[e*v+f]=w}},
pk(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.D(e)
x.$flags&2&&B.B(x)
x[d]=w
if(v>1){x[d+1]=D.d.D(f)
if(v>2)x[d+2]=D.d.D(g)}},
n8(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nc(d){return this.c[d*this.b]},
na(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
n9(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
ov(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uh(d,e){return this.fl(0,d,0,e)},
uf(d,e){return this.fl(0,d,1,e)},
ue(d,e){return this.fl(0,d,2,e)},
ud(d,e){return this.fl(0,d,3,e)}}
A.a2g.prototype={
dY(d){return new A.a2g(new Uint32Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.bq.gag(this.c)},
gdv(){return C.j8},
gcg(){return 4294967295},
fl(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.D(g)
x.$flags&2&&B.B(x)
x[e*v+f]=w}},
pk(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.D(e)
x.$flags&2&&B.B(x)
x[d]=w
if(v>1){x[d+1]=D.d.D(f)
if(v>2)x[d+2]=D.d.D(g)}},
n8(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nc(d){return this.c[d*this.b]},
na(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
n9(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
ov(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uh(d,e){return this.fl(0,d,0,e)},
uf(d,e){return this.fl(0,d,1,e)},
ue(d,e){return this.fl(0,d,2,e)},
ud(d,e){return this.fl(0,d,3,e)}}
A.uh.prototype={
dY(d){return A.czo(this)},
gag(d){return D.A.gag(this.c)},
gdv(){return C.a7},
gcg(){return 255},
fl(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.D(g)
x.$flags&2&&B.B(x)
x[e*v+f]=w}},
pk(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.D(e)
x.$flags&2&&B.B(x)
x[d]=w
if(v>1){x[d+1]=D.d.D(f)
if(v>2)x[d+2]=D.d.D(g)}},
RQ(d,e,f,g,h){var x,w,v=this.b
d*=v
x=this.c
w=D.c.D(e)
x.$flags&2&&B.B(x)
x[d]=w
if(v>1){x[d+1]=D.c.D(f)
if(v>2){x[d+2]=D.c.D(g)
if(v>3)x[d+3]=D.c.D(h)}}},
n8(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nc(d){var x
d*=this.b
x=this.c
if(d>=x.length)return 0
return x[d]},
na(d){var x=this.b
if(x<2)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+1]},
n9(d){var x=this.b
if(x<3)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+2]},
ov(d){var x=this.b
if(x<4)return 255
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+3]},
uh(d,e){return this.fl(0,d,0,e)},
uf(d,e){return this.fl(0,d,1,e)},
ue(d,e){return this.fl(0,d,2,e)},
ud(d,e){return this.fl(0,d,3,e)}}
A.Ig.prototype={
dY(d){var x=this
return new A.Ig(x.a,x.b,x.c,x.d)},
gdv(){return C.hL},
gu(d){return this.d.c},
geW(){return null},
gcg(){return 1},
gn7(d){return this.a},
gnV(d){return this.b},
ho(d,e,f){var x,w,v=this
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
x=$.hI
w=(x!=null?x:A.iC())[w]}else w=0
return w},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=A.fQ(f)
v.$flags&2&&B.B(v)
v[x+e]=w}},
gef(d){return this.gaz(0)},
sef(d,e){this.saz(0,e)},
gaz(d){var x,w=this.d
if(w.c>0){w=w.d[this.c]
x=$.hI
w=(x!=null?x:A.iC())[w]}else w=0
return w},
saz(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=A.fQ(e)
v.$flags&2&&B.B(v)
v[x]=w}},
gaL(){var x,w=this.d
if(w.c>1){w=w.d[this.c+1]
x=$.hI
w=(x!=null?x:A.iC())[w]}else w=0
return w},
saL(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=A.fQ(d)
v.$flags&2&&B.B(v)
v[x+1]=w}},
gaN(d){var x,w=this.d
if(w.c>2){w=w.d[this.c+2]
x=$.hI
w=(x!=null?x:A.iC())[w]}else w=0
return w},
saN(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=A.fQ(e)
v.$flags&2&&B.B(v)
v[x+2]=w}},
gaO(d){var x,w=this.d
if(w.c>3){w=w.d[this.c+3]
x=$.hI
w=(x!=null?x:A.iC())[w]}else w=0
return w},
saO(d,e){var x,w,v,u=this.d
if(u.c>3){x=this.gaL()
u=u.d
w=this.c
v=A.fQ(x)
u.$flags&2&&B.B(u)
u[w+3]=v}},
giz(){return this.gaz(0)/1},
siz(d){this.saz(0,d)},
gii(){return this.gaL()/1},
sii(d){this.saL(d)},
gir(){return this.gaN(0)/1},
sir(d){this.saN(0,d)},
giJ(){return this.gaO(0)/1},
siJ(d){this.saO(0,d)},
gjR(){return A.jw(this)},
iX(d,e){var x=this
if(x.d.c>0){x.saz(0,e.gaz(e))
x.saL(e.gaL())
x.saN(0,e.gaN(e))
x.saO(0,e.gaO(e))}},
kD(d,e,f){var x,w,v=this,u=v.d,t=u.c
if(t>0){u=u.d
x=v.c
w=A.fQ(d)
u.$flags&2&&B.B(u)
u[x]=w
if(t>1){u[v.c+1]=A.fQ(e)
if(t>2)u[v.c+2]=A.fQ(f)}}},
ik(d,e,f,g){var x,w,v=this,u=v.d,t=u.c
if(t>0){u=u.d
x=v.c
w=A.fQ(d)
u.$flags&2&&B.B(u)
u[x]=w
if(t>1){u[v.c+1]=A.fQ(e)
if(t>2){u[v.c+2]=A.fQ(f)
if(t>3)u[v.c+3]=A.fQ(g)}}}},
ga1(d){return new A.hA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Ig)return B.aM(B.I(u,!0,B.p(u).h("w.E")))===B.aM(B.I(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
ob(d){return A.pu(this,null,d,null,null)},
$ibp:1,
$idT:1,
$icQ:1,
gfo(d){return this.d}}
A.Ih.prototype={
dY(d){var x=this
return new A.Ih(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geW(){return null},
gcg(){return 1},
gdv(){return C.j7},
gn7(d){return this.a},
gnV(d){return this.b},
ho(d,e,f){var x,w,v=this
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
gef(d){return this.gaz(0)},
sef(d,e){this.saz(0,e)},
gaz(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saz(d,e){var x,w=this.d
if(w.c>0){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x]=e}},
gaL(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saL(d){var x,w=this.d
if(w.c>1){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x+1]=d}},
gaN(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saN(d,e){var x,w=this.d
if(w.c>2){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x+2]=e}},
gaO(d){var x=this.d
return x.c>3?x.d[this.c+3]:1},
saO(d,e){var x,w=this.d
if(w.c>3){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x+3]=e}},
giz(){return this.gaz(0)/1},
siz(d){this.saz(0,d)},
gii(){return this.gaL()/1},
sii(d){this.saL(d)},
gir(){return this.gaN(0)/1},
sir(d){this.saN(0,d)},
giJ(){return this.gaO(0)/1},
siJ(d){this.saO(0,d)},
gjR(){return A.jw(this)},
iX(d,e){var x=this
x.saz(0,e.gaz(e))
x.saL(e.gaL())
x.saN(0,e.gaN(e))
x.saO(0,e.gaO(e))},
kD(d,e,f){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.B(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
ik(d,e,f,g){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.B(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
ga1(d){return new A.hA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Ih)return B.aM(B.I(u,!0,B.p(u).h("w.E")))===B.aM(B.I(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
ob(d){return A.pu(this,null,d,null,null)},
$ibp:1,
$idT:1,
$icQ:1,
gfo(d){return this.d}}
A.Ii.prototype={
dY(d){var x=this
return new A.Ii(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geW(){return null},
gcg(){return 1},
gdv(){return C.kD},
gn7(d){return this.a},
gnV(d){return this.b},
ho(d,e,f){var x,w,v=this
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
gef(d){return this.gaz(0)},
sef(d,e){this.saz(0,e)},
gaz(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saz(d,e){var x,w=this.d
if(w.c>0){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x]=e}},
gaL(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saL(d){var x,w=this.d
if(w.c>1){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x+1]=d}},
gaN(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saN(d,e){var x,w=this.d
if(w.c>2){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x+2]=e}},
gaO(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saO(d,e){var x,w=this.d
if(w.c>3){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x+3]=e}},
giz(){return this.gaz(0)/1},
siz(d){this.saz(0,d)},
gii(){return this.gaL()/1},
sii(d){this.saL(d)},
gir(){return this.gaN(0)/1},
sir(d){this.saN(0,d)},
giJ(){return this.gaO(0)/1},
siJ(d){this.saO(0,d)},
gjR(){return A.jw(this)},
iX(d,e){var x=this
x.saz(0,e.gaz(e))
x.saL(e.gaL())
x.saN(0,e.gaN(e))
x.saO(0,e.gaO(e))},
kD(d,e,f){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.B(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
ik(d,e,f,g){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.B(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
ga1(d){return new A.hA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Ii)return B.aM(B.I(u,!0,B.p(u).h("w.E")))===B.aM(B.I(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
ob(d){return A.pu(this,null,d,null,null)},
$ibp:1,
$idT:1,
$icQ:1,
gfo(d){return this.d}}
A.Ij.prototype={
dY(d){var x=this
return new A.Ij(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geW(){return null},
gcg(){return 32767},
gdv(){return C.kF},
gn7(d){return this.a},
gnV(d){return this.b},
ho(d,e,f){var x,w,v=this
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
v.$flags&2&&B.B(v)
v[x+e]=w}},
gef(d){return this.gaz(0)},
sef(d,e){this.saz(0,e)},
gaz(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saz(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x]=w}},
gaL(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saL(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.D(d)
v.$flags&2&&B.B(v)
v[x+1]=w}},
gaN(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saN(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x+2]=w}},
gaO(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saO(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x+3]=w}},
giz(){return this.gaz(0)/32767},
siz(d){this.saz(0,d*32767)},
gii(){return this.gaL()/32767},
sii(d){this.saL(d*32767)},
gir(){return this.gaN(0)/32767},
sir(d){this.saN(0,d*32767)},
giJ(){return this.gaO(0)/32767},
siJ(d){this.saO(0,d*32767)},
gjR(){return A.jw(this)},
iX(d,e){var x=this
x.saz(0,e.gaz(e))
x.saL(e.gaL())
x.saN(0,e.gaN(e))
x.saO(0,e.gaO(e))},
kD(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2)v[x+2]=D.c.D(f)}}},
ik(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2){v[x+2]=D.c.D(f)
if(u>3)v[x+3]=D.c.D(g)}}}},
ga1(d){return new A.hA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Ij)return B.aM(B.I(u,!0,B.p(u).h("w.E")))===B.aM(B.I(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
ob(d){return A.pu(this,null,d,null,null)},
$ibp:1,
$idT:1,
$icQ:1,
gfo(d){return this.d}}
A.Ik.prototype={
dY(d){var x=this
return new A.Ik(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geW(){return null},
gcg(){return 2147483647},
gdv(){return C.kG},
gn7(d){return this.a},
gnV(d){return this.b},
ho(d,e,f){var x,w,v=this
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
v.$flags&2&&B.B(v)
v[x+e]=w}},
gef(d){return this.gaz(0)},
sef(d,e){this.saz(0,e)},
gaz(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saz(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x]=w}},
gaL(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saL(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.D(d)
v.$flags&2&&B.B(v)
v[x+1]=w}},
gaN(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saN(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x+2]=w}},
gaO(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saO(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x+3]=w}},
giz(){return this.gaz(0)/2147483647},
siz(d){this.saz(0,d*2147483647)},
gii(){return this.gaL()/2147483647},
sii(d){this.saL(d*2147483647)},
gir(){return this.gaN(0)/2147483647},
sir(d){this.saN(0,d*2147483647)},
giJ(){return this.gaO(0)/2147483647},
siJ(d){this.saO(0,d*2147483647)},
gjR(){return A.jw(this)},
iX(d,e){var x=this
x.saz(0,e.gaz(e))
x.saL(e.gaL())
x.saN(0,e.gaN(e))
x.saO(0,e.gaO(e))},
kD(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2)v[x+2]=D.c.D(f)}}},
ik(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2){v[x+2]=D.c.D(f)
if(u>3)v[x+3]=D.c.D(g)}}}},
ga1(d){return new A.hA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Ik)return B.aM(B.I(u,!0,B.p(u).h("w.E")))===B.aM(B.I(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
ob(d){return A.pu(this,null,d,null,null)},
$ibp:1,
$idT:1,
$icQ:1,
gfo(d){return this.d}}
A.Il.prototype={
dY(d){var x=this
return new A.Il(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geW(){return null},
gcg(){return 127},
gdv(){return C.kE},
gn7(d){return this.a},
gnV(d){return this.b},
ho(d,e,f){var x,w,v=this
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
v.$flags&2&&B.B(v)
v[x+e]=w}},
gef(d){return this.gaz(0)},
sef(d,e){this.saz(0,e)},
gaz(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saz(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x]=w}},
gaL(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saL(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.D(d)
v.$flags&2&&B.B(v)
v[x+1]=w}},
gaN(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saN(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x+2]=w}},
gaO(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saO(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x+3]=w}},
giz(){return this.gaz(0)/127},
siz(d){this.saz(0,d*127)},
gii(){return this.gaL()/127},
sii(d){this.saL(d*127)},
gir(){return this.gaN(0)/127},
sir(d){this.saN(0,d*127)},
giJ(){return this.gaO(0)/127},
siJ(d){this.saO(0,d*127)},
gjR(){return A.jw(this)},
iX(d,e){var x=this
x.saz(0,e.gaz(e))
x.saL(e.gaL())
x.saN(0,e.gaN(e))
x.saO(0,e.gaO(e))},
kD(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2)v[x+2]=D.c.D(f)}}},
ik(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2){v[x+2]=D.c.D(f)
if(u>3)v[x+3]=D.c.D(g)}}}},
ga1(d){return new A.hA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Il)return B.aM(B.I(u,!0,B.p(u).h("w.E")))===B.aM(B.I(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
ob(d){return A.pu(this,null,d,null,null)},
$ibp:1,
$idT:1,
$icQ:1,
gfo(d){return this.d}}
A.avH.prototype={
q(){var x=this,w=x.a
if(w.gn7(w)+1>x.d){w.ho(0,x.b,w.gnV(w)+1)
return w.gnV(w)<=x.e}return w.q()},
gL(d){return this.a},
$ibp:1}
A.Im.prototype={
dY(d){var x=this
return new A.Im(x.a,x.b,x.c,x.d,x.e,x.f)},
gu(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geW(){return this.f.f},
gcg(){return this.f.gcg()},
gdv(){return C.fi},
gn7(d){return this.a},
gnV(d){return this.b},
ho(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.f
w=f*x.e
v.e=w
x=e*x.c
v.c=w+D.c.R(x,3)
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
w.c=w.e+D.c.R(v,3)}v=w.c
u=u.d
u===$&&B.b()
return v<u.byteLength},
a5M(d,e){var x,w=this.c,v=7-(this.d+e)
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
if(w>=x.length)return 0
return D.c.h_(x[w],v)&1},
px(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.a5M(0,d):0
else x=w.n8(0,this.a5M(0,0),d)
return x},
kL(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=7-(this.d+d)
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.bc(D.d.D(e),0,1)
s=C.av6[w]
v=D.c.eS(t,w)
r=r.d
r.$flags&2&&B.B(r)
r[x]=(u&s|v)>>>0},
i(d,e){return this.px(e)},
m(d,e,f){return this.kL(e,f)},
gef(d){return this.a5M(0,0)},
sef(d,e){this.kL(0,e)},
gaz(d){return this.px(0)},
saz(d,e){this.kL(0,e)},
gaL(){return this.px(1)},
saL(d){this.kL(1,d)},
gaN(d){return this.px(2)},
saN(d,e){this.kL(2,e)},
gaO(d){return this.px(3)},
saO(d,e){this.kL(3,e)},
giz(){return this.px(0)/this.f.gcg()},
siz(d){this.kL(0,d*this.f.gcg())},
gii(){return this.px(1)/this.f.gcg()},
sii(d){this.kL(1,d*this.f.gcg())},
gir(){return this.px(2)/this.f.gcg()},
sir(d){this.kL(2,d*this.f.gcg())},
giJ(){return this.px(3)/this.f.gcg()},
siJ(d){this.kL(3,d*this.f.gcg())},
gjR(){return A.jw(this)},
iX(d,e){var x=this
x.kL(0,e.gaz(e))
x.kL(1,e.gaL())
x.kL(2,e.gaN(e))
x.kL(3,e.gaO(e))},
kD(d,e,f){var x=this,w=x.f.c
if(w>0){x.kL(0,d)
if(w>1){x.kL(1,e)
if(w>2)x.kL(2,f)}}},
ik(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.kL(0,d)
if(w>1){x.kL(1,e)
if(w>2){x.kL(2,f)
if(w>3)x.kL(3,g)}}}},
ga1(d){return new A.hA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Im)return B.aM(B.I(u,!0,B.p(u).h("w.E")))===B.aM(B.I(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.px(0)!==x.i(e,0))return!1
if(v>1){if(u.px(1)!==x.i(e,1))return!1
if(v>2){if(u.px(2)!==x.i(e,2))return!1
if(v>3)if(u.px(3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
ob(d){return A.pu(this,null,d,null,null)},
$ibp:1,
$idT:1,
$icQ:1,
gfo(d){return this.f}}
A.In.prototype={
dY(d){var x=this
return new A.In(x.a,x.b,x.c,x.d)},
gu(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
geW(){return this.d.e},
gcg(){return this.d.gcg()},
gdv(){return C.cc},
gn7(d){return this.a},
gnV(d){return this.b},
ho(d,e,f){var x,w,v=this
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
i0(d,e){var x=this.d,w=x.e
if(w!=null)x=w.n8(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
i(d,e){return this.i0(0,e)},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.d.D(f)
v.$flags&2&&B.B(v)
v[x+e]=w}},
gef(d){return this.gaz(0)},
sef(d,e){this.saz(0,e)},
gaz(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.nc(x.d[this.c])
return x},
saz(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x]=w}},
gaL(){var x=this.d,w=x.e
if(w==null)x=x.c>1?x.d[this.c+1]:0
else x=w.na(x.d[this.c])
return x},
saL(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.D(d)
v.$flags&2&&B.B(v)
v[x+1]=w}},
gaN(d){var x=this.d,w=x.e
if(w==null)x=x.c>2?x.d[this.c+2]:0
else x=w.n9(x.d[this.c])
return x},
saN(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x+2]=w}},
gaO(d){var x=this.d,w=x.e
if(w==null)x=x.c>3?x.d[this.c+3]:0
else x=w.ov(x.d[this.c])
return x},
saO(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x+3]=w}},
giz(){return this.gaz(0)/this.d.gcg()},
siz(d){this.saz(0,d*this.d.gcg())},
gii(){return this.gaL()/this.d.gcg()},
sii(d){this.saL(d*this.d.gcg())},
gir(){return this.gaN(0)/this.d.gcg()},
sir(d){this.saN(0,d*this.d.gcg())},
giJ(){return this.gaO(0)/this.d.gcg()},
siJ(d){this.saO(0,d*this.d.gcg())},
gjR(){return A.jw(this)},
iX(d,e){var x=this
x.saz(0,e.gaz(e))
x.saL(e.gaL())
x.saN(0,e.gaN(e))
x.saO(0,e.gaO(e))},
kD(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2)v[x+2]=D.c.D(f)}}},
ik(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2){v[x+2]=D.c.D(f)
if(u>3)v[x+3]=D.c.D(g)}}}},
ga1(d){return new A.hA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.In)return B.aM(B.I(u,!0,B.p(u).h("w.E")))===B.aM(B.I(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.i0(0,0)!==x.i(e,0))return!1
if(v>1){if(u.i0(0,1)!==x.i(e,1))return!1
if(v>2){if(u.i0(0,2)!==x.i(e,2))return!1
if(v>3)if(u.i0(0,3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
ob(d){return A.pu(this,null,d,null,null)},
$ibp:1,
$idT:1,
$icQ:1,
gfo(d){return this.d}}
A.Io.prototype={
dY(d){var x=this
return new A.Io(x.a,x.b,x.c,x.d,x.e,x.f)},
gu(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geW(){return this.f.f},
gcg(){return this.f.gcg()},
gdv(){return C.h4},
gawu(){var x=this.f
return x.f!=null?2:x.c<<1>>>0},
gn7(d){return this.a},
gnV(d){return this.b},
ho(d,e,f){var x,w,v,u=this
u.a=e
u.b=f
x=u.gawu()
w=u.b*u.f.e
u.e=w
v=u.a*x
u.c=w+D.c.R(v,3)
u.d=v&7},
gL(d){return this},
q(){var x,w,v=this,u=v.f
if(++v.a===u.a){v.a=0
x=++v.b
v.d=0;++v.c
v.e=v.e+u.e
return x<u.b}if(u.f!=null||u.c===1){x=v.d+=2
if(x>7){v.d=0;++v.c}}else{w=v.gawu()
x=v.a*w
v.d=x&7
v.c=v.e+D.c.R(x,3)}x=v.c
u=u.d
u===$&&B.b()
return x<u.length},
a5N(d,e){var x,w=this.c,v=6-(this.d+(e<<1>>>0))
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
return D.c.h_(x[w],v)&3},
py(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.a5N(0,d):0
else x=w.n8(0,this.a5N(0,0),d)
return x},
kM(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=6-(this.d+(d<<1>>>0))
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.bc(D.d.D(e),0,3)
s=C.apz[D.c.R(w,1)]
v=D.c.eS(t,w)
r=r.d
r.$flags&2&&B.B(r)
r[x]=(u&s|v)>>>0},
i(d,e){return this.py(e)},
m(d,e,f){return this.kM(e,f)},
gef(d){return this.a5N(0,0)},
sef(d,e){this.kM(0,e)},
gaz(d){return this.py(0)},
saz(d,e){this.kM(0,e)},
gaL(){return this.py(1)},
saL(d){this.kM(1,d)},
gaN(d){return this.py(2)},
saN(d,e){this.kM(2,e)},
gaO(d){return this.py(3)},
saO(d,e){this.kM(3,e)},
giz(){return this.py(0)/this.f.gcg()},
siz(d){this.kM(0,d*this.f.gcg())},
gii(){return this.py(1)/this.f.gcg()},
sii(d){this.kM(1,d*this.f.gcg())},
gir(){return this.py(2)/this.f.gcg()},
sir(d){this.kM(2,d*this.f.gcg())},
giJ(){return this.py(3)/this.f.gcg()},
siJ(d){this.kM(3,d*this.f.gcg())},
gjR(){return A.jw(this)},
iX(d,e){var x=this
x.kM(0,e.gaz(e))
x.kM(1,e.gaL())
x.kM(2,e.gaN(e))
x.kM(3,e.gaO(e))},
kD(d,e,f){var x=this,w=x.f.c
if(w>0){x.kM(0,d)
if(w>1){x.kM(1,e)
if(w>2)x.kM(2,f)}}},
ik(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.kM(0,d)
if(w>1){x.kM(1,e)
if(w>2){x.kM(2,f)
if(w>3)x.kM(3,g)}}}},
ga1(d){return new A.hA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Io)return B.aM(B.I(u,!0,B.p(u).h("w.E")))===B.aM(B.I(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.py(0)!==x.i(e,0))return!1
if(v>1){if(u.py(1)!==x.i(e,1))return!1
if(v>2){if(u.py(2)!==x.i(e,2))return!1
if(v>3)if(u.py(3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
ob(d){return A.pu(this,null,d,null,null)},
$ibp:1,
$idT:1,
$icQ:1,
gfo(d){return this.f}}
A.Ip.prototype={
dY(d){var x=this
return new A.Ip(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geW(){return null},
gcg(){return 4294967295},
gdv(){return C.j8},
gn7(d){return this.a},
gnV(d){return this.b},
ho(d,e,f){var x,w,v=this
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
v.$flags&2&&B.B(v)
v[x+e]=w}},
gef(d){return this.gaz(0)},
sef(d,e){this.saz(0,e)},
gaz(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saz(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x]=w}},
gaL(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saL(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.D(d)
v.$flags&2&&B.B(v)
v[x+1]=w}},
gaN(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saN(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x+2]=w}},
gaO(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saO(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x+3]=w}},
giz(){return this.gaz(0)/4294967295},
siz(d){this.saz(0,d*4294967295)},
gii(){return this.gaL()/4294967295},
sii(d){this.saL(d*4294967295)},
gir(){return this.gaN(0)/4294967295},
sir(d){this.saN(0,d*4294967295)},
giJ(){return this.gaO(0)/4294967295},
siJ(d){this.saO(0,d*4294967295)},
gjR(){return A.jw(this)},
iX(d,e){var x=this
x.saz(0,e.gaz(e))
x.saL(e.gaL())
x.saN(0,e.gaN(e))
x.saO(0,e.gaO(e))},
kD(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2)v[x+2]=D.c.D(f)}}},
ik(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2){v[x+2]=D.c.D(f)
if(u>3)v[x+3]=D.c.D(g)}}}},
ga1(d){return new A.hA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Ip)return B.aM(B.I(u,!0,B.p(u).h("w.E")))===B.aM(B.I(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
ob(d){return A.pu(this,null,d,null,null)},
$ibp:1,
$idT:1,
$icQ:1,
gfo(d){return this.d}}
A.Iq.prototype={
dY(d){var x=this
return new A.Iq(x.a,x.b,x.c,x.d,x.e)},
gu(d){var x=this.e,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geW(){return this.e.f},
gcg(){return this.e.gcg()},
gdv(){return C.h5},
gn7(d){return this.a},
gnV(d){return this.b},
ho(d,e,f){var x,w,v,u=this
u.a=e
u.b=f
x=u.e
w=x.c*4
v=x.e
if(w===4)x=f*v+D.c.R(e,1)
else if(w===8)x=f*x.a+e
else{x=f*v
x=w===16?x+(e<<1>>>0):x+D.c.R(e*w,3)}u.c=x
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
a5O(d,e){var x,w=this.c,v=4-(this.d+(e<<2>>>0))
if(v<0){v+=8;++w}x=this.e.d
x===$&&B.b()
return D.c.h_(x[w],v)&15},
pv(d){var x=this.e,w=x.f
if(w==null)x=x.c>d?this.a5O(0,d):0
else x=w.n8(0,this.a5O(0,0),d)
return x},
kN(d,e){var x,w,v,u,t,s,r=this.e
if(d>=r.c)return
x=this.c
w=4-(this.d+(d<<2>>>0))
if(w<0){w+=8;++x}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.bc(D.d.D(e),0,15)
s=w===4?15:240
v=D.c.eS(t,w)
r=r.d
r.$flags&2&&B.B(r)
r[x]=(u&s|v)>>>0},
i(d,e){return this.pv(e)},
m(d,e,f){return this.kN(e,f)},
gef(d){return this.a5O(0,0)},
sef(d,e){this.kN(0,e)},
gaz(d){return this.pv(0)},
saz(d,e){this.kN(0,e)},
gaL(){return this.pv(1)},
saL(d){this.kN(1,d)},
gaN(d){return this.pv(2)},
saN(d,e){this.kN(2,e)},
gaO(d){return this.pv(3)},
saO(d,e){this.kN(3,e)},
giz(){return this.pv(0)/this.e.gcg()},
siz(d){this.kN(0,d*this.e.gcg())},
gii(){return this.pv(1)/this.e.gcg()},
sii(d){this.kN(1,d*this.e.gcg())},
gir(){return this.pv(2)/this.e.gcg()},
sir(d){this.kN(2,d*this.e.gcg())},
giJ(){return this.pv(3)/this.e.gcg()},
siJ(d){this.kN(3,d*this.e.gcg())},
gjR(){return A.jw(this)},
iX(d,e){var x=this
x.kN(0,e.gaz(e))
x.kN(1,e.gaL())
x.kN(2,e.gaN(e))
x.kN(3,e.gaO(e))},
kD(d,e,f){var x=this,w=x.e.c
if(w>0){x.kN(0,d)
if(w>1){x.kN(1,e)
if(w>2)x.kN(2,f)}}},
ik(d,e,f,g){var x=this,w=x.e.c
if(w>0){x.kN(0,d)
if(w>1){x.kN(1,e)
if(w>2){x.kN(2,f)
if(w>3)x.kN(3,g)}}}},
ga1(d){return new A.hA(this)},
k(d,e){var x,w,v=this
if(e==null)return!1
if(e instanceof A.Iq)return B.aM(B.I(v,!0,B.p(v).h("w.E")))===B.aM(B.I(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=v.e.c
w=J.a2(e)
if(w.gu(e)!==x)return!1
if(v.pv(0)!==w.i(e,0))return!1
if(x>1){if(v.pv(1)!==w.i(e,1))return!1
if(x>2){if(v.pv(2)!==w.i(e,2))return!1
if(x>3)if(v.pv(3)!==w.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
ob(d){return A.pu(this,null,d,null,null)},
$ibp:1,
$idT:1,
$icQ:1,
gfo(d){return this.e}}
A.Ir.prototype={
dY(d){var x=this
return new A.Ir(x.a,x.b,x.c,x.d)},
gu(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
geW(){return this.d.e},
gcg(){return this.d.gcg()},
gdv(){return C.a7},
gn7(d){return this.a},
gnV(d){return this.b},
ho(d,e,f){var x,w,v=this
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
i0(d,e){var x=this.d,w=x.e
if(w!=null)x=w.n8(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
i(d,e){return this.i0(0,e)},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.d.D(D.d.bc(f,0,255))
v.$flags&2&&B.B(v)
v[x+e]=w}},
gef(d){return this.d.d[this.c]},
sef(d,e){var x=this.d.d,w=this.c,v=D.d.D(D.d.bc(e,0,255))
x.$flags&2&&B.B(x)
x[w]=v},
gaz(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.nc(x.d[this.c])
return x},
saz(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.D(D.d.bc(e,0,255))
v.$flags&2&&B.B(v)
v[x]=w}},
gaL(){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>1?w.d[x.c+1]:0}else w=v.na(w.d[x.c])
return w},
saL(d){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.d.D(D.d.bc(d,0,255))
w.$flags&2&&B.B(w)
w[v]=x}else if(v>1){w=w.d
v=this.c
x=D.d.D(D.d.bc(d,0,255))
w.$flags&2&&B.B(w)
w[v+1]=x}},
gaN(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>2?w.d[x.c+2]:0}else w=v.n9(w.d[x.c])
return w},
saN(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.d.D(D.d.bc(e,0,255))
w.$flags&2&&B.B(w)
w[v]=x}else if(v>2){w=w.d
v=this.c
x=D.d.D(D.d.bc(e,0,255))
w.$flags&2&&B.B(w)
w[v+2]=x}},
gaO(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c+1]
else w=v>3?w.d[x.c+3]:255}else w=v.ov(w.d[x.c])
return w},
saO(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.d.D(D.d.bc(e,0,255))
w.$flags&2&&B.B(w)
w[v+1]=x}else if(v>3){w=w.d
v=this.c
x=D.d.D(D.d.bc(e,0,255))
w.$flags&2&&B.B(w)
w[v+3]=x}},
giz(){return this.gaz(0)/this.d.gcg()},
siz(d){this.saz(0,d*this.d.gcg())},
gii(){return this.gaL()/this.d.gcg()},
sii(d){this.saL(d*this.d.gcg())},
gir(){return this.gaN(0)/this.d.gcg()},
sir(d){this.saN(0,d*this.d.gcg())},
giJ(){return this.gaO(0)/this.d.gcg()},
siJ(d){this.saO(0,d*this.d.gcg())},
gjR(){return this.d.c===2?this.gaz(0):A.jw(this)},
iX(d,e){var x=this
if(x.d.e!=null)x.sef(0,e.gef(e))
else{x.saz(0,e.gaz(e))
x.saL(e.gaL())
x.saN(0,e.gaN(e))
x.saO(0,e.gaO(e))}},
kD(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2)v[x+2]=D.c.D(f)}}},
ik(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.D(d)
v.$flags&2&&B.B(v)
v[x]=w
if(u>1){v[x+1]=D.c.D(e)
if(u>2){v[x+2]=D.c.D(f)
if(u>3)v[x+3]=D.c.D(g)}}}},
ga1(d){return new A.hA(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Ir)return B.aM(B.I(u,!0,B.p(u).h("w.E")))===B.aM(B.I(e,!0,B.p(e).h("w.E")))
if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.i0(0,0)!==x.i(e,0))return!1
if(v>1){if(u.i0(0,1)!==x.i(e,1))return!1
if(v>2){if(u.i0(0,2)!==x.i(e,2))return!1
if(v>3)if(u.i0(0,3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.I(this,!0,B.p(this).h("w.E")))},
ob(d){return A.pu(this,null,d,null,null)},
$ibp:1,
$idT:1,
$icQ:1,
gfo(d){return this.d}}
A.fn.prototype={
dY(d){return new A.fn()},
gfo(d){return $.cJ7()},
gn7(d){return 0},
gnV(d){return 0},
gu(d){return 0},
gcg(){return 0},
gdv(){return C.a7},
geW(){return null},
i(d,e){return 0},
m(d,e,f){},
gef(d){return 0},
sef(d,e){},
gaz(d){return 0},
saz(d,e){},
gaL(){return 0},
saL(d){},
gaN(d){return 0},
saN(d,e){},
gaO(d){return 0},
saO(d,e){},
giz(){return 0},
siz(d){},
gii(){return 0},
sii(d){},
gir(){return 0},
sir(d){},
giJ(){return 0},
siJ(d){},
gjR(){return 0},
iX(d,e){},
kD(d,e,f){},
ik(d,e,f,g){},
ho(d,e,f){},
gL(d){return this},
q(){return!1},
k(d,e){if(e==null)return!1
return e instanceof A.fn},
gv(d){return 0},
ga1(d){return new A.hA(this)},
ob(d){return this},
$ibp:1,
$idT:1,
$icQ:1}
A.bbg.prototype={
J(){return"FlipDirection."+this.b}}
A.aqt.prototype={
j(d){return"ImageException: "+this.a},
$ib7:1}
A.lU.prototype={
gu(d){return this.c-this.d},
i(d,e){return J.v(this.a,this.d+e)},
m(d,e,f){J.bV(this.a,this.d+e,f)
return f},
rC(d,e,f,g){var x=this.a,w=J.cV(x),v=this.d+d
if(f instanceof A.lU)w.dN(x,v,v+e,f.a,f.d+g)
else w.dN(x,v,v+e,y.L.a(f),g)},
A5(d,e,f){return this.rC(d,e,f,0)},
bDQ(d,e,f){var x=this.a,w=this.d+d
J.tl(x,w,w+e,f)},
a1U(d,e,f){var x=this,w=f!=null?x.b+f:x.d
return A.cT(x.a,x.e,d,w+e)},
jZ(d){return this.a1U(d,0,null)},
B0(d,e){return this.a1U(d,0,e)},
Sg(d,e){return this.a1U(d,e,null)},
dM(d,e){var x=this.d,w=x+(this.c-x)
for(;x<w;++x)J.v(this.a,x)
return-1},
dg(){return J.v(this.a,this.d++)},
l6(d){var x=this.jZ(d)
this.d=this.d+(x.c-x.d)
return x},
qj(d){var x,w,v,u,t,s=this
if(d==null){x=B.a([],y.t)
for(w=s.c;v=s.d,v<w;){u=s.a
s.d=v+1
t=J.v(u,v)
if(t===0)return B.eq(x,0,null)
x.push(t)}throw B.l(A.c6("EOF reached without finding string terminator (length: "+B.o(d)+")"))}return B.eq(s.l6(d).hL(),0,null)},
Qc(){return this.qj(null)},
aE9(d){var x,w,v,u,t=this,s=B.a([],y.t)
for(x=t.c;w=t.d,w<x;){v=t.a
t.d=w+1
u=J.v(v,w)
s.push(u)
if(u===10||s.length>=d)return B.eq(s,0,null)}return B.eq(s,0,null)},
bIt(){return this.aE9(256)},
bIu(){var x,w,v,u,t=this,s=B.a([],y.t)
for(x=t.c;w=t.d,w<x;){v=t.a
t.d=w+1
u=J.v(v,w)
if(u===0)return new B.F1(!0).F7(s,0,null,!0)
s.push(u)}return D.aq.Ct(0,s,!0)},
bP(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255
if(x.e)return w<<8|v
return v<<8|w},
rH(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255
if(x.e)return u|v<<8|w<<16
return w|v<<8|u<<16},
an(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255,t=J.v(x.a,x.d++)&255
if(x.e)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
a_C(){return A.de3(this.adg())},
adg(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255,t=J.v(x.a,x.d++)&255,s=J.v(x.a,x.d++)&255,r=J.v(x.a,x.d++)&255,q=J.v(x.a,x.d++)&255,p=J.v(x.a,x.d++)&255
if(x.e)return(D.c.er(w,56)|D.c.er(v,48)|D.c.er(u,40)|D.c.er(t,32)|s<<24|r<<16|q<<8|p)>>>0
return(D.c.er(p,56)|D.c.er(q,48)|D.c.er(r,40)|D.c.er(s,32)|t<<24|u<<16|v<<8|w)>>>0},
Jm(d,e,f){var x,w=this,v=w.a
if(y.D.b(v))return w.aFj(e,f)
x=w.b+w.d+e
return J.aVo(v,x,f<=0?w.c:x+f)},
fb(d){return this.Jm(0,0,0)},
aFj(d,e){var x,w=this,v=e==null?w.c-w.d-d:e,u=w.a
if(y.D.b(u))return J.d5(D.A.gag(u),u.byteOffset+w.d+d,v)
x=w.d+d
x=J.aVo(u,x,x+v)
return new Uint8Array(B.bU(x))},
hL(){return this.aFj(0,null)},
Qw(){var x=this.a
if(y.D.b(x))return J.oq(D.A.gag(x),x.byteOffset+this.d,null)
return J.oq(D.A.gag(this.hL()),0,null)}}
A.boX.prototype={
bqj(d){var x=this
x.aoT(d)
x.alY()
x.aoy()
x.akq()},
bcq(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.c=Math.max(d,4)
n.f=m-n.d
n.r=m-1
x=D.d.b7(m,8)
n.w=x
n.x=x*256
n.Q=new A.a2g(new Uint32Array(1024),256,4)
n.a=new A.uh(new Uint8Array(768),256,3)
n.d=3
n.e=2
x=D.d.R(m,3)
n.y=new Int32Array(x)
x=y.cb
n.z=B.bJ(m*3,0,!1,x)
n.at=B.bJ(n.c,0,!1,x)
x=n.ax=B.bJ(n.c,0,!1,x)
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
akq(){var x,w,v,u,t,s
for(x=0;x<this.c;++x){w=this.a
w===$&&B.b()
v=this.Q
v===$&&B.b()
u=v.b
t=2<u?v.c[x*u+2]:0
s=1<u?v.c[x*u+1]:0
v=0<u?v.c[x*u]:0
w.pk(x,Math.abs(t),Math.abs(s),Math.abs(v))}},
baj(d,e,f){var x,w,v,u=this.as[e],t=u-1,s=this.c,r=this.Q,q=1000,p=-1
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
alY(){var x,w,v,u,t,s,r,q=this
for(x=0,w=0;x<q.c;++x){for(v=0;v<3;++v,++w){u=q.z
u===$&&B.b()
t=D.c.bc(D.d.D(0.5+u[w]),0,255)
u=q.Q
u===$&&B.b()
s=u.b
if(v<s){u=u.c
r=D.c.D(t)
u.$flags&2&&B.B(u)
u[x*s+v]=r}}u=q.Q
u===$&&B.b()
s=u.b
if(3<s){u=u.c
r=D.c.D(x)
u.$flags&2&&B.B(u)
u[x*s+3]=r}}},
aoy(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
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
i.$flags&2&&B.B(i)
i[l*q]=j}if(k){k=w.c
j=D.c.D(m)
k.$flags&2&&B.B(k)
k[r*q]=j}m=p?w.c[l*q+1]:0
k=p?w.c[r*q+1]:0
if(p){j=w.c
k=D.c.D(k)
j.$flags&2&&B.B(j)
j[l*q+1]=k}if(p){p=w.c
k=D.c.D(m)
p.$flags&2&&B.B(p)
p[r*q+1]=k}p=2<q
m=p?w.c[l*q+2]:0
k=p?w.c[r*q+2]:0
if(p){j=w.c
k=D.c.D(k)
j.$flags&2&&B.B(j)
j[l*q+2]=k}if(p){p=w.c
k=D.c.D(m)
p.$flags&2&&B.B(p)
p[r*q+2]=k}p=3<q
m=p?w.c[l*q+3]:0
k=p?w.c[r*q+3]:0
if(p){j=w.c
k=D.c.D(k)
j.$flags&2&&B.B(j)
j[l*q+3]=k}if(p){p=w.c
k=D.c.D(m)
p.$flags&2&&B.B(p)
p[r*q+3]=k}}if(o!==t){u&2&&B.B(v)
v[t]=s+r>>>1
for(m=t+1;m<o;++m)v[m]=r
s=r
t=o}}x=h.r
x.toString
w=D.c.R(s+x,1)
u&2&&B.B(v)
v[t]=w
for(n=t+1;n<256;++n)v[n]=x},
auE(d,e){var x,w,v,u
for(x=this.y,w=d*d,v=0;v<d;++v){x===$&&B.b()
u=D.d.D(e*((w-v*v)*256/w))
x.$flags&2&&B.B(x)
x[v]=u}},
aoT(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.x
a2===$&&B.b()
x=30+D.c.b7(a1.b-1,3)
w=a3.gcZ(0)*a3.gb5(0)
v=D.c.hw(w,a1.b)
u=Math.max(D.c.b7(v,100),1)
if(u===0)u=1
t=D.c.R(a2,8)
if(t<=1)t=0
a1.auE(t,1024)
if(w<1509)s=a1.b=1
else if(D.c.ap(w,499)!==0)s=499
else if(D.c.ap(w,491)!==0)s=491
else s=D.c.ap(w,487)!==0?487:503
r=a3.gcZ(0)
q=a3.gb5(0)
for(p=a2,o=1024,n=0,m=0,l=0,k=0;k<v;){a2=a3.a
j=a2==null?null:a2.el(m,l,null)
if(j==null)j=new A.fn()
i=j.gaz(j)
h=j.gaL()
g=j.gaN(j)
if(k===0){a2=a1.z
a2===$&&B.b()
f=a1.e
f===$&&B.b()
f*=3
a2[f]=g
a2[f+1]=h
a2[f+2]=i}e=a1.bmg(g,h,i)
if(e<0)e=a1.aXR(g,h,i)
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
if(t>0)a1.aUP(d,t,e,g,h,i)}n+=s
m+=s
for(;m>r;){m-=r;++l}for(;n>=w;){n-=w
l-=q}++k
if(D.c.ap(k,u)===0){o-=D.c.hw(o,x)
p-=D.c.b7(p,30)
t=D.c.R(p,8)
if(t<=1)t=0
a1.auE(t,o)}}},
aUP(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=f-e,j=l.d-1
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
aXR(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=1e30
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
bmg(d,e,f){var x,w,v,u,t,s
for(x=this.d,w=this.z,v=0,u=0;v<x;++v){w===$&&B.b()
t=u+1
s=!1
if(w[u]===d){u=t+1
if(w[t]===e){t=u+1
s=w[u]===f
u=t}}else u=t
if(s)return v}return-1}}
A.ava.prototype={
b0(d){var x,w,v=this
if(v.a===v.c.length)v.b0y()
x=v.c
w=v.a++
x.$flags&2&&B.B(x)
x[w]=d&255},
a0G(d,e){var x,w,v,u,t=this
e=J.bl(d)
for(;x=t.a,w=x+e,v=t.c,u=v.length,w>u;)t.alI(w-u)
D.A.hv(v,x,w,d)
t.a+=e},
mz(d){return this.a0G(d,null)},
l8(d){var x=this
if(x.b){x.b0(D.c.R(d,8)&255)
x.b0(d&255)
return}x.b0(d&255)
x.b0(D.c.R(d,8)&255)},
ih(d){var x=this
if(x.b){x.b0(D.c.R(d,24)&255)
x.b0(D.c.R(d,16)&255)
x.b0(D.c.R(d,8)&255)
x.b0(d&255)
return}x.b0(d&255)
x.b0(D.c.R(d,8)&255)
x.b0(D.c.R(d,16)&255)
x.b0(D.c.R(d,24)&255)},
bLk(d){var x,w=this,v=new Float32Array(1)
v[0]=d
x=J.d5(D.eZ.gag(v),0,null)
if(w.b){w.b0(x[3])
w.b0(x[2])
w.b0(x[1])
w.b0(x[0])
return}w.b0(x[0])
w.b0(x[1])
w.b0(x[2])
w.b0(x[3])},
bLl(d){var x,w=this,v=new Float64Array(1)
v[0]=d
x=J.d5(D.e7.gag(v),0,null)
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
alI(d){var x,w,v,u
if(d!=null)x=d
else{w=this.c.length
x=w===0?8192:w*2}w=this.c
v=w.length
u=new Uint8Array(v+x)
D.A.hv(u,0,v,w)
this.c=u},
b0y(){return this.alI(null)},
gu(d){return this.a}}
A.bud.prototype={
aHQ(d){var x,w,v,u,t,s,r=d.gcZ(0),q=d.gb5(0),p=this.a
p===$&&B.b()
x=A.hK(null,null,C.a7,0,C.bm,q,null,0,1,p,C.a7,r,!1)
r=x.a
w=r.ga1(r)
w.q()
x.z=d.z
x.w=d.w
x.y=d.y
for(r=d.a,r=r.ga1(r);r.q();){v=r.gL(r)
u=w.gL(w)
t=D.d.D(v.gaz(v))
s=D.d.D(v.gaL())
u.m(0,0,this.baj(D.d.D(v.gaN(v)),s,t))
w.q()}return x}}
A.nS.prototype={
D(d){var x=this.b
return x===0?0:D.c.hw(this.a,x)},
u1(d){var x=this.b
return x===0?0:this.a/x},
k(d,e){if(e==null)return!1
return e instanceof A.nS&&this.a===e.a&&this.b===e.b},
gv(d){return B.ac(this.a,this.b,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
j(d){return""+this.a+"/"+this.b}}
A.bwS.prototype={
J(){return"ResizeMode."+this.b}}
A.bwP.prototype={
J(){return"RequestImageFormat."+this.b}}
A.bID.prototype={}
var z=a.updateTypes(["~(lU)","r(qx,r,r)","r([r])","~(C4,A<r>)","~(r,r,r,r,r,d3)","~(e,pS)","~(r)","~(r,k_)","C4(r)"])
A.bgD.prototype={
$0(){return A.cnP(this.a,this.b,"jpg",this.c)},
$S:202}
A.bgE.prototype={
$0(){return A.cnP(this.a,this.b,"png",null)},
$S:202}
A.bgG.prototype={
$0(){return A.cnP(this.a,this.b,"webp",this.c)},
$S:202}
A.bgw.prototype={
$2(d,e){var x=A.cxr(e)
this.a.a.m(0,d,x)
return x},
$S:z+5}
A.bgx.prototype={
$2(d,e){var x=e.dY(0)
this.a.a.m(0,d,x)
return x},
$S:z+7}
A.bgy.prototype={
$2(d,e){var x=A.cxr(e)
this.a.b.a.m(0,d,x)
return x},
$S:z+5}
A.aZi.prototype={
$4(d,e,f,g){var x,w,v=this,u=v.a
if(u.a<v.c){x=v.b.c&&v.d.ch!=null
w=v.e
if(x){x=v.d
w.ik(x.ch.nc(d),x.ch.na(d),x.ch.n9(d),x.ch.ov(d))}else w.ik(d,e,f,g)
w.q();++u.a}},
$S:745}
A.ba3.prototype={
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
$S:746}
A.bi6.prototype={
$1(d){var x,w,v,u,t=this.b,s=t.dg(),r=t.dg()
t=this.a
if(!t.d.y.a3(0,s))throw B.l(A.c6("Invalid Component in SOS block"))
x=t.d.y.i(0,s)
x.toString
w=D.c.R(r,4)&15
v=r&15
u=t.z
if(w<u.length){u=u[w]
u.toString
x.w=u}t=t.y
if(v<t.length){t=t[v]
t.toString
x.x=t}return x},
$S:z+8}
A.bt9.prototype={
$1(d){return d!==""},
$S:13}
A.bKg.prototype={
$2(d,e){return(d|e<<16)>>>0},
$S:170}
A.bgV.prototype={
$4(d,e,f,g){var x=this.b
return d+this.a*(e-d+x*(d+g-f-e))+x*(f-d)},
$S:747}
A.bgU.prototype={
$5(d,e,f,g,h){var x=-e,w=d*d
return f+0.5*(d*(x+g)+w*(2*e-5*f+4*g-h)+w*d*(x+3*f-3*g+h))},
$S:748};(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_2u,v=a._static_1,u=a._instance_1u,t=a.installStaticTearOff
x(A.k_.prototype,"gxE",1,0,function(){return[0]},["$1","$0"],["jb","D"],2,0,0)
x(A.tY.prototype,"gxE",1,0,function(){return[0]},["$1","$0"],["jb","D"],2,0,0)
x(A.yi.prototype,"gxE",1,0,function(){return[0]},["$1","$0"],["jb","D"],2,0,0)
x(A.ra.prototype,"gxE",1,0,function(){return[0]},["$1","$0"],["jb","D"],2,0,0)
x(A.u_.prototype,"gxE",1,0,function(){return[0]},["$1","$0"],["jb","D"],2,0,0)
x(A.vX.prototype,"gxE",1,0,function(){return[0]},["$1","$0"],["jb","D"],2,0,0)
x(A.yh.prototype,"gxE",1,0,function(){return[0]},["$1","$0"],["jb","D"],2,0,0)
x(A.yg.prototype,"gxE",1,0,function(){return[0]},["$1","$0"],["jb","D"],2,0,0)
x(A.u0.prototype,"gxE",1,0,function(){return[0]},["$1","$0"],["jb","D"],2,0,0)
var s
w(s=A.ar4.prototype,"gaYP","aYQ",3)
w(s,"gaYS","aYT",3)
w(s,"gaYU","aYV",3)
w(s,"gaYJ","aYK",3)
w(s,"gaYL","aYM",3)
v(A,"deg","d0A",0)
v(A,"de9","d0s",0)
v(A,"de7","d0q",0)
v(A,"dee","d0y",0)
v(A,"def","d0z",0)
v(A,"ded","d0x",0)
v(A,"dec","d0w",0)
v(A,"deb","d0v",0)
v(A,"dei","d0C",0)
v(A,"deh","d0B",0)
v(A,"dea","d0t",0)
v(A,"de8","d0r",0)
v(A,"det","d0N",0)
v(A,"der","d0L",0)
v(A,"dej","d0D",0)
v(A,"del","d0F",0)
v(A,"dek","d0E",0)
v(A,"dem","d0G",0)
v(A,"deu","d0O",0)
v(A,"des","d0M",0)
v(A,"den","d0H",0)
v(A,"deo","d0I",0)
v(A,"dep","d0J",0)
v(A,"deq","d0K",0)
u(A.a7v.prototype,"gbhl","bhm",6)
u(A.aqT.prototype,"gbyq","byr",6)
t(A,"csc",3,null,["$3"],["d0P"],1,0)
t(A,"dev",3,null,["$3"],["d0Q"],1,0)
t(A,"deA",3,null,["$3"],["d0V"],1,0)
t(A,"deB",3,null,["$3"],["d0W"],1,0)
t(A,"deC",3,null,["$3"],["d0X"],1,0)
t(A,"deD",3,null,["$3"],["d0Y"],1,0)
t(A,"deE",3,null,["$3"],["d0Z"],1,0)
t(A,"deF",3,null,["$3"],["d1_"],1,0)
t(A,"deG",3,null,["$3"],["d10"],1,0)
t(A,"deH",3,null,["$3"],["d11"],1,0)
t(A,"dew",3,null,["$3"],["d0R"],1,0)
t(A,"dex",3,null,["$3"],["d0S"],1,0)
t(A,"dey",3,null,["$3"],["d0T"],1,0)
t(A,"dez",3,null,["$3"],["d0U"],1,0)
t(A,"deK",6,null,["$6"],["d1d"],4,0)
t(A,"deL",6,null,["$6"],["d1e"],4,0)
t(A,"deJ",6,null,["$6"],["d1c"],4,0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.ahZ,B.jY)
w(B.E,[A.bhu,A.bqi,A.bLN,A.b5y,A.t4,A.bYW,A.caM,A.bg2,A.bh8,A.bLM,A.bLO,A.hA,A.tZ,A.aIM,A.anQ,A.pS,A.k_,A.aZj,A.FA,A.b5i,A.b5h,A.b8U,A.anR,A.ba0,A.anS,A.anT,A.ba2,A.Zv,A.aLO,A.a_6,A.a_7,A.apq,A.bgk,A.aqd,A.ajO,A.H4,A.bi3,A.C4,A.bi5,A.TV,A.ar3,A.bi9,A.ar4,A.a3h,A.bt7,A.a3A,A.bu5,A.axb,A.a3D,A.QN,A.axa,A.rB,A.aBv,A.bGJ,A.aBA,A.bGL,A.aBB,A.bGM,A.bjC,A.bK3,A.a7u,A.bK4,A.bK9,A.bKd,A.bKf,A.a7t,A.bKe,A.bK5,A.Ks,A.aCs,A.aCu,A.aCt,A.aCv,A.a7v,A.aCq,A.bKa,A.aCr,A.bL0,A.a7K,A.aqb,A.a_d,A.aCT,A.a_z,A.bqK,A.avH,A.aqt,A.lU,A.bud,A.ava,A.nS,A.bID])
x(A.bht,A.bhu)
x(A.bqh,A.bqi)
x(A.cgV,A.bLN)
w(B.ci,[A.bgD,A.bgE,A.bgG])
w(B.e5,[A.b_y,A.ny,A.aiM,A.mK,A.lK,A.Oa,A.Gy,A.tO,A.OE,A.bi4,A.Qv,A.a3g,A.D4,A.awH,A.D5,A.uo,A.o8,A.Kg,A.kz,A.rT,A.Kt,A.SX,A.bgh,A.apf,A.aqW,A.bbg,A.bwS,A.bwP])
w(B.w,[A.MO,A.MP,A.MQ,A.MR,A.MS,A.MT,A.MW,A.MX,A.MY,A.MZ,A.N_,A.xJ,A.BL,A.lS,A.Ig,A.Ih,A.Ii,A.Ij,A.Ik,A.Il,A.Im,A.In,A.Io,A.Ip,A.Iq,A.Ir,A.fn])
w(A.xJ,[A.ajJ,A.MU])
x(A.O8,A.tZ)
w(B.dn,[A.bgw,A.bgx,A.bgy,A.bKg])
w(A.k_,[A.tY,A.BG,A.yi,A.ra,A.u_,A.vX,A.yh,A.yg,A.u0,A.BI,A.BH,A.Hd])
w(A.b5i,[A.aiQ,A.ba1,A.bdU,A.bgj,A.ar2,A.awG,A.bt8,A.bu4,A.bu6,A.bFX,A.bGK,A.bL1])
w(B.bE,[A.aZi,A.ba3,A.bi6,A.bt9,A.bgV,A.bgU])
x(A.b6y,A.aiQ)
x(A.bhC,A.ba0)
w(A.bhC,[A.aqO,A.bhD,A.bhE,A.bhF,A.aqQ])
x(A.aqP,A.Zv)
x(A.aqR,A.a_7)
x(A.bgi,A.FA)
w(A.H4,[A.H5,A.a_x])
w(A.b8U,[A.bi7,A.bt5])
x(A.aqS,A.a3h)
x(A.bhG,A.bt7)
x(A.IO,A.b5h)
w(A.axb,[A.yZ,A.m3])
x(A.aqT,A.a7v)
x(A.aqU,A.a7K)
x(A.aqV,A.aCT)
w(A.lS,[A.ON,A.OO,A.a_D,A.a_E,A.a_F,A.a_G,A.OP,A.OQ,A.OR,A.OS,A.OT,A.OU])
w(A.bqK,[A.avo,A.avp,A.avq,A.avr,A.avs,A.avt,A.avu,A.a2g,A.uh])
x(A.boX,A.bud)})()
B.bk(b.typeUniverse,JSON.parse('{"ahZ":{"jY":[],"b7":[]},"hA":{"bp":["aX"]},"MO":{"dT":[],"w":["aX"],"w.E":"aX"},"MP":{"dT":[],"w":["aX"],"w.E":"aX"},"MQ":{"dT":[],"w":["aX"],"w.E":"aX"},"MR":{"dT":[],"w":["aX"],"w.E":"aX"},"MS":{"dT":[],"w":["aX"],"w.E":"aX"},"MT":{"dT":[],"w":["aX"],"w.E":"aX"},"MW":{"dT":[],"w":["aX"],"w.E":"aX"},"MX":{"dT":[],"w":["aX"],"w.E":"aX"},"MY":{"dT":[],"w":["aX"],"w.E":"aX"},"MZ":{"dT":[],"w":["aX"],"w.E":"aX"},"N_":{"dT":[],"w":["aX"],"w.E":"aX"},"xJ":{"dT":[],"w":["aX"],"w.E":"aX"},"ajJ":{"dT":[],"w":["aX"],"w.E":"aX"},"MU":{"dT":[],"w":["aX"],"w.E":"aX"},"tY":{"k_":[]},"BG":{"k_":[]},"yi":{"k_":[]},"ra":{"k_":[]},"u_":{"k_":[]},"vX":{"k_":[]},"yh":{"k_":[]},"yg":{"k_":[]},"u0":{"k_":[]},"BI":{"k_":[]},"BH":{"k_":[]},"Hd":{"k_":[]},"aqP":{"Zv":[]},"aqR":{"a_7":[]},"H5":{"H4":[]},"a_x":{"H4":[]},"aqS":{"a3h":[]},"aqU":{"a7K":[]},"BL":{"w":["cQ"],"w.E":"cQ"},"lS":{"w":["cQ"]},"ON":{"lS":[],"w":["cQ"],"w.E":"cQ"},"OO":{"lS":[],"w":["cQ"],"w.E":"cQ"},"a_D":{"lS":[],"w":["cQ"],"w.E":"cQ"},"a_E":{"lS":[],"w":["cQ"],"w.E":"cQ"},"a_F":{"lS":[],"w":["cQ"],"w.E":"cQ"},"a_G":{"lS":[],"w":["cQ"],"w.E":"cQ"},"OP":{"lS":[],"w":["cQ"],"w.E":"cQ"},"OQ":{"lS":[],"w":["cQ"],"w.E":"cQ"},"OR":{"lS":[],"w":["cQ"],"w.E":"cQ"},"OS":{"lS":[],"w":["cQ"],"w.E":"cQ"},"OT":{"lS":[],"w":["cQ"],"w.E":"cQ"},"OU":{"lS":[],"w":["cQ"],"w.E":"cQ"},"Ig":{"cQ":[],"dT":[],"w":["aX"],"bp":["cQ"],"w.E":"aX"},"Ih":{"cQ":[],"dT":[],"w":["aX"],"bp":["cQ"],"w.E":"aX"},"Ii":{"cQ":[],"dT":[],"w":["aX"],"bp":["cQ"],"w.E":"aX"},"Ij":{"cQ":[],"dT":[],"w":["aX"],"bp":["cQ"],"w.E":"aX"},"Ik":{"cQ":[],"dT":[],"w":["aX"],"bp":["cQ"],"w.E":"aX"},"Il":{"cQ":[],"dT":[],"w":["aX"],"bp":["cQ"],"w.E":"aX"},"avH":{"bp":["cQ"]},"Im":{"cQ":[],"dT":[],"w":["aX"],"bp":["cQ"],"w.E":"aX"},"In":{"cQ":[],"dT":[],"w":["aX"],"bp":["cQ"],"w.E":"aX"},"Io":{"cQ":[],"dT":[],"w":["aX"],"bp":["cQ"],"w.E":"aX"},"Ip":{"cQ":[],"dT":[],"w":["aX"],"bp":["cQ"],"w.E":"aX"},"Iq":{"cQ":[],"dT":[],"w":["aX"],"bp":["cQ"],"w.E":"aX"},"Ir":{"cQ":[],"dT":[],"w":["aX"],"bp":["cQ"],"w.E":"aX"},"fn":{"cQ":[],"dT":[],"w":["aX"],"bp":["cQ"],"w.E":"aX"},"aqt":{"b7":[]},"cQ":{"dT":[],"bp":["cQ"],"w":["aX"]}}'))
B.l8(b.typeUniverse,JSON.parse('{"axb":1}'))
var y=(function rtii(){var x=B.z
return{G:x("dT"),n:x("anR"),W:x("anT"),z:x("ao7"),O:x("a_d"),x:x("aqb"),Y:x("aqd"),P:x("pS"),r:x("k_"),I:x("lS"),h:x("a08"),R:x("w<@>"),E:x("q<ajO>"),Q:x("q<anS>"),m:x("q<Zv>"),b:x("q<a_7>"),A:x("q<a_d>"),g:x("q<BL>"),M:x("q<A<A<A<r>>>>"),o:x("q<A<A<r>>>"),S:x("q<A<r>>"),d:x("q<a3h>"),_:x("q<a3A>"),j:x("q<nS>"),T:x("q<e>"),q:x("q<aBB>"),a:x("q<d3>"),u:x("q<Ks>"),F:x("q<aCr>"),J:x("q<a7K>"),v:x("q<aIM>"),C:x("q<TV>"),t:x("q<r>"),aH:x("q<H4?>"),cB:x("q<ar3?>"),cQ:x("q<A<r>?>"),w:x("q<qx?>"),e:x("q<d3?>"),y:x("q<~(lU)>"),c:x("C4"),bp:x("A<a08>"),f:x("A<A<r>>"),k:x("A<nS>"),cm:x("A<a7t>"),K:x("A<Ks>"),H:x("A<L>"),L:x("A<r>"),c0:x("cQ"),aG:x("a3A"),a2:x("diB"),ab:x("a3D"),aM:x("QN"),i:x("nS"),N:x("e"),aL:x("aBA"),ah:x("iO"),bk:x("qx"),D:x("d3"),V:x("a7t"),bQ:x("aCs"),bl:x("aCt"),bt:x("aCv"),U:x("af<e>"),bc:x("aLO"),cb:x("L"),p:x("r"),a7:x("aqK?"),cl:x("A<r>?"),l:x("A<H4?>?"),X:x("E?"),ac:x("d3?"),ak:x("a7u?"),B:x("Ks?"),Z:x("aCu?"),s:x("r?")}})();(function constants(){var x=a.makeConstList
C.y6=new A.aiM(0,"direct")
C.y7=new A.aiM(1,"alpha")
C.Fh=new A.lK(0,"none")
C.y8=new A.lK(3,"bitfields")
C.y9=new A.lK(6,"alphaBitfields")
C.bcY=new A.bLM()
C.FZ=new A.bLO()
C.iX=new A.cgV()
C.G5=new A.b_y(4,"luminance")
C.akd=new A.Gy(0,"red")
C.ake=new A.Gy(1,"green")
C.akf=new A.Gy(2,"blue")
C.akg=new A.Gy(3,"alpha")
C.akh=new A.Gy(4,"other")
C.Ir=new A.Oa(0,"uint")
C.zH=new A.Oa(1,"half")
C.zI=new A.Oa(2,"float")
C.Is=new A.tO(0,"none")
C.akH=new A.bbg(2,"both")
C.fi=new A.ny(0,"uint1")
C.h4=new A.ny(1,"uint2")
C.j7=new A.ny(10,"float32")
C.kD=new A.ny(11,"float64")
C.h5=new A.ny(2,"uint4")
C.a7=new A.ny(3,"uint8")
C.cc=new A.ny(4,"uint16")
C.j8=new A.ny(5,"uint32")
C.kE=new A.ny(6,"int8")
C.kF=new A.ny(7,"int16")
C.kG=new A.ny(8,"int32")
C.hL=new A.ny(9,"float16")
C.akT=new A.apf(1,"page")
C.bm=new A.apf(2,"sequence")
C.zU=new A.bgh(1,"deflate")
C.IU=new A.OE(2,"cur")
C.Y=new A.mK(0,"none")
C.Jv=new A.mK(1,"byte")
C.Jw=new A.mK(10,"sRational")
C.Jx=new A.mK(11,"single")
C.Jy=new A.mK(12,"double")
C.bC=new A.mK(2,"ascii")
C.bi=new A.mK(3,"short")
C.cM=new A.mK(4,"long")
C.e4=new A.mK(5,"rational")
C.Jz=new A.mK(6,"sByte")
C.hP=new A.mK(7,"undefined")
C.JA=new A.mK(8,"sShort")
C.JB=new A.mK(9,"sLong")
C.anX=new A.aqW(0,"nearest")
C.bde=new A.aqW(1,"linear")
C.JU=new A.bi4(0,"yuv444")
C.Ap=B.a(x([0,2,8]),y.t)
C.aoQ=B.a(x([0,4,2,1]),y.t)
C.al2=new A.OE(0,"invalid")
C.al3=new A.OE(1,"ico")
C.aoV=B.a(x([C.al2,C.al3,C.IU]),B.z("q<OE>"))
C.Kh=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),y.t)
C.apz=B.a(x([252,243,207,63]),y.t)
C.aU7=new A.Qv(0,"none")
C.a1U=new A.Qv(1,"background")
C.a1V=new A.Qv(2,"previous")
C.apB=B.a(x([C.aU7,C.a1U,C.a1V]),B.z("q<Qv>"))
C.Kk=B.a(x([292,260,226,226]),y.t)
C.Km=B.a(x([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125]),y.t)
C.apG=B.a(x([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0]),y.t)
C.apN=B.a(x([2,3,7]),y.t)
C.Kq=B.a(x([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68]),y.t)
C.apU=B.a(x([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),y.t)
C.aq7=B.a(x([3,3,11]),y.t)
C.B9=B.a(x([128,128,128,128,128,128,128,128,128,128,128]),y.t)
C.L9=B.a(x([C.B9,C.B9,C.B9]),y.S)
C.aso=B.a(x([253,136,254,255,228,219,128,128,128,128,128]),y.t)
C.auJ=B.a(x([189,129,242,255,227,213,255,219,128,128,128]),y.t)
C.auQ=B.a(x([106,126,227,252,214,209,255,255,128,128,128]),y.t)
C.aym=B.a(x([C.aso,C.auJ,C.auQ]),y.S)
C.ayG=B.a(x([1,98,248,255,236,226,255,255,128,128,128]),y.t)
C.aqu=B.a(x([181,133,238,254,221,234,255,154,128,128,128]),y.t)
C.aqd=B.a(x([78,134,202,247,198,180,255,219,128,128,128]),y.t)
C.azX=B.a(x([C.ayG,C.aqu,C.aqd]),y.S)
C.ase=B.a(x([1,185,249,255,243,255,128,128,128,128,128]),y.t)
C.ayv=B.a(x([184,150,247,255,236,224,128,128,128,128,128]),y.t)
C.aBL=B.a(x([77,110,216,255,236,230,128,128,128,128,128]),y.t)
C.axm=B.a(x([C.ase,C.ayv,C.aBL]),y.S)
C.axB=B.a(x([1,101,251,255,241,255,128,128,128,128,128]),y.t)
C.asm=B.a(x([170,139,241,252,236,209,255,255,128,128,128]),y.t)
C.axP=B.a(x([37,116,196,243,228,255,255,255,128,128,128]),y.t)
C.arx=B.a(x([C.axB,C.asm,C.axP]),y.S)
C.avl=B.a(x([1,204,254,255,245,255,128,128,128,128,128]),y.t)
C.aCA=B.a(x([207,160,250,255,238,128,128,128,128,128,128]),y.t)
C.aCz=B.a(x([102,103,231,255,211,171,128,128,128,128,128]),y.t)
C.atg=B.a(x([C.avl,C.aCA,C.aCz]),y.S)
C.arc=B.a(x([1,152,252,255,240,255,128,128,128,128,128]),y.t)
C.aCK=B.a(x([177,135,243,255,234,225,128,128,128,128,128]),y.t)
C.ax3=B.a(x([80,129,211,255,194,224,128,128,128,128,128]),y.t)
C.ayl=B.a(x([C.arc,C.aCK,C.ax3]),y.S)
C.LQ=B.a(x([1,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aza=B.a(x([246,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aws=B.a(x([255,128,128,128,128,128,128,128,128,128,128]),y.t)
C.aD0=B.a(x([C.LQ,C.aza,C.aws]),y.S)
C.at6=B.a(x([C.L9,C.aym,C.azX,C.axm,C.arx,C.atg,C.ayl,C.aD0]),y.o)
C.aBT=B.a(x([198,35,237,223,193,187,162,160,145,155,62]),y.t)
C.asn=B.a(x([131,45,198,221,172,176,220,157,252,221,1]),y.t)
C.aBS=B.a(x([68,47,146,208,149,167,221,162,255,223,128]),y.t)
C.avQ=B.a(x([C.aBT,C.asn,C.aBS]),y.S)
C.aA0=B.a(x([1,149,241,255,221,224,255,255,128,128,128]),y.t)
C.aAB=B.a(x([184,141,234,253,222,220,255,199,128,128,128]),y.t)
C.awh=B.a(x([81,99,181,242,176,190,249,202,255,255,128]),y.t)
C.aBm=B.a(x([C.aA0,C.aAB,C.awh]),y.S)
C.aB1=B.a(x([1,129,232,253,214,197,242,196,255,255,128]),y.t)
C.aCp=B.a(x([99,121,210,250,201,198,255,202,128,128,128]),y.t)
C.ayq=B.a(x([23,91,163,242,170,187,247,210,255,255,128]),y.t)
C.awx=B.a(x([C.aB1,C.aCp,C.ayq]),y.S)
C.atP=B.a(x([1,200,246,255,234,255,128,128,128,128,128]),y.t)
C.aAZ=B.a(x([109,178,241,255,231,245,255,255,128,128,128]),y.t)
C.apF=B.a(x([44,130,201,253,205,192,255,255,128,128,128]),y.t)
C.aBw=B.a(x([C.atP,C.aAZ,C.apF]),y.S)
C.aqW=B.a(x([1,132,239,251,219,209,255,165,128,128,128]),y.t)
C.aoX=B.a(x([94,136,225,251,218,190,255,255,128,128,128]),y.t)
C.aB4=B.a(x([22,100,174,245,186,161,255,199,128,128,128]),y.t)
C.axy=B.a(x([C.aqW,C.aoX,C.aB4]),y.S)
C.aAA=B.a(x([1,182,249,255,232,235,128,128,128,128,128]),y.t)
C.ay9=B.a(x([124,143,241,255,227,234,128,128,128,128,128]),y.t)
C.auC=B.a(x([35,77,181,251,193,211,255,205,128,128,128]),y.t)
C.auX=B.a(x([C.aAA,C.ay9,C.auC]),y.S)
C.aD1=B.a(x([1,157,247,255,236,231,255,255,128,128,128]),y.t)
C.at3=B.a(x([121,141,235,255,225,227,255,255,128,128,128]),y.t)
C.aB_=B.a(x([45,99,188,251,195,217,255,224,128,128,128]),y.t)
C.arq=B.a(x([C.aD1,C.at3,C.aB_]),y.S)
C.aoY=B.a(x([1,1,251,255,213,255,128,128,128,128,128]),y.t)
C.apW=B.a(x([203,1,248,255,255,128,128,128,128,128,128]),y.t)
C.aAE=B.a(x([137,1,177,255,224,255,128,128,128,128,128]),y.t)
C.are=B.a(x([C.aoY,C.apW,C.aAE]),y.S)
C.aAm=B.a(x([C.avQ,C.aBm,C.awx,C.aBw,C.axy,C.auX,C.arq,C.are]),y.o)
C.ato=B.a(x([253,9,248,251,207,208,255,192,128,128,128]),y.t)
C.azb=B.a(x([175,13,224,243,193,185,249,198,255,255,128]),y.t)
C.aD_=B.a(x([73,17,171,221,161,179,236,167,255,234,128]),y.t)
C.ayW=B.a(x([C.ato,C.azb,C.aD_]),y.S)
C.aAa=B.a(x([1,95,247,253,212,183,255,255,128,128,128]),y.t)
C.awM=B.a(x([239,90,244,250,211,209,255,255,128,128,128]),y.t)
C.aBK=B.a(x([155,77,195,248,188,195,255,255,128,128,128]),y.t)
C.aAz=B.a(x([C.aAa,C.awM,C.aBK]),y.S)
C.avp=B.a(x([1,24,239,251,218,219,255,205,128,128,128]),y.t)
C.azJ=B.a(x([201,51,219,255,196,186,128,128,128,128,128]),y.t)
C.awL=B.a(x([69,46,190,239,201,218,255,228,128,128,128]),y.t)
C.aA6=B.a(x([C.avp,C.azJ,C.awL]),y.S)
C.auM=B.a(x([1,191,251,255,255,128,128,128,128,128,128]),y.t)
C.axO=B.a(x([223,165,249,255,213,255,128,128,128,128,128]),y.t)
C.ayC=B.a(x([141,124,248,255,255,128,128,128,128,128,128]),y.t)
C.aB0=B.a(x([C.auM,C.axO,C.ayC]),y.S)
C.avV=B.a(x([1,16,248,255,255,128,128,128,128,128,128]),y.t)
C.at_=B.a(x([190,36,230,255,236,255,128,128,128,128,128]),y.t)
C.asq=B.a(x([149,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aqX=B.a(x([C.avV,C.at_,C.asq]),y.S)
C.ayt=B.a(x([1,226,255,128,128,128,128,128,128,128,128]),y.t)
C.az1=B.a(x([247,192,255,128,128,128,128,128,128,128,128]),y.t)
C.aBI=B.a(x([240,128,255,128,128,128,128,128,128,128,128]),y.t)
C.aq0=B.a(x([C.ayt,C.az1,C.aBI]),y.S)
C.aBv=B.a(x([1,134,252,255,255,128,128,128,128,128,128]),y.t)
C.ay7=B.a(x([213,62,250,255,255,128,128,128,128,128,128]),y.t)
C.aCG=B.a(x([55,93,255,128,128,128,128,128,128,128,128]),y.t)
C.ays=B.a(x([C.aBv,C.ay7,C.aCG]),y.S)
C.as7=B.a(x([C.ayW,C.aAz,C.aA6,C.aB0,C.aqX,C.aq0,C.ays,C.L9]),y.o)
C.aya=B.a(x([202,24,213,235,186,191,220,160,240,175,255]),y.t)
C.asl=B.a(x([126,38,182,232,169,184,228,174,255,187,128]),y.t)
C.aqZ=B.a(x([61,46,138,219,151,178,240,170,255,216,128]),y.t)
C.aAs=B.a(x([C.aya,C.asl,C.aqZ]),y.S)
C.ax2=B.a(x([1,112,230,250,199,191,247,159,255,255,128]),y.t)
C.arp=B.a(x([166,109,228,252,211,215,255,174,128,128,128]),y.t)
C.axG=B.a(x([39,77,162,232,172,180,245,178,255,255,128]),y.t)
C.aAo=B.a(x([C.ax2,C.arp,C.axG]),y.S)
C.axc=B.a(x([1,52,220,246,198,199,249,220,255,255,128]),y.t)
C.atd=B.a(x([124,74,191,243,183,193,250,221,255,255,128]),y.t)
C.auB=B.a(x([24,71,130,219,154,170,243,182,255,255,128]),y.t)
C.aAn=B.a(x([C.axc,C.atd,C.auB]),y.S)
C.aux=B.a(x([1,182,225,249,219,240,255,224,128,128,128]),y.t)
C.aCE=B.a(x([149,150,226,252,216,205,255,171,128,128,128]),y.t)
C.aDe=B.a(x([28,108,170,242,183,194,254,223,255,255,128]),y.t)
C.aC5=B.a(x([C.aux,C.aCE,C.aDe]),y.S)
C.aDh=B.a(x([1,81,230,252,204,203,255,192,128,128,128]),y.t)
C.aAV=B.a(x([123,102,209,247,188,196,255,233,128,128,128]),y.t)
C.aBD=B.a(x([20,95,153,243,164,173,255,203,128,128,128]),y.t)
C.aAW=B.a(x([C.aDh,C.aAV,C.aBD]),y.S)
C.aw9=B.a(x([1,222,248,255,216,213,128,128,128,128,128]),y.t)
C.ay4=B.a(x([168,175,246,252,235,205,255,255,128,128,128]),y.t)
C.auG=B.a(x([47,116,215,255,211,212,255,255,128,128,128]),y.t)
C.asM=B.a(x([C.aw9,C.ay4,C.auG]),y.S)
C.aw1=B.a(x([1,121,236,253,212,214,255,255,128,128,128]),y.t)
C.axe=B.a(x([141,84,213,252,201,202,255,219,128,128,128]),y.t)
C.ayQ=B.a(x([42,80,160,240,162,185,255,205,128,128,128]),y.t)
C.av0=B.a(x([C.aw1,C.axe,C.ayQ]),y.S)
C.aCT=B.a(x([244,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aoT=B.a(x([238,1,255,128,128,128,128,128,128,128,128]),y.t)
C.az4=B.a(x([C.LQ,C.aCT,C.aoT]),y.S)
C.apw=B.a(x([C.aAs,C.aAo,C.aAn,C.aC5,C.aAW,C.asM,C.av0,C.az4]),y.o)
C.aqY=B.a(x([C.at6,C.aAm,C.as7,C.apw]),y.M)
C.ar1=B.a(x([511,1023,2047,4095]),y.t)
C.aru=B.a(x([63,207,243,252]),y.t)
C.as0=B.a(x([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]),y.t)
C.qr=B.a(x([0,1,2,3,4,5,6,7,8,9,10,11]),y.t)
C.ast=B.a(x([8,8,4,2]),y.t)
C.apa=B.a(x([173,148,140]),y.t)
C.apb=B.a(x([176,155,140,135]),y.t)
C.ap8=B.a(x([180,157,141,134,130]),y.t)
C.apV=B.a(x([254,254,243,230,196,177,153,140,133,130,129]),y.t)
C.asv=B.a(x([C.apa,C.apb,C.ap8,C.apV]),y.S)
C.asA=B.a(x([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576]),y.t)
C.Lh=B.a(x([1,1.387039845,1.306562965,1.175875602,1,0.785694958,0.5411961,0.275899379]),B.z("q<L>"))
C.asR=B.a(x([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),y.t)
C.at8=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095]),y.t)
C.Lu=B.a(x([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29]),y.t)
C.LG=B.a(x([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250]),y.t)
C.atC=B.a(x([280,256,256,256,40]),y.t)
C.qY=B.a(x([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63]),y.t)
C.LX=B.a(x([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390]),y.t)
C.AG=B.a(x([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157]),y.t)
C.atT=B.a(x([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112]),y.t)
C.AH=B.a(x([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284]),y.t)
C.M7=B.a(x([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119]),y.t)
C.M9=B.a(x([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28]),y.t)
C.aum=B.a(x([C.Ir,C.zH,C.zI]),B.z("q<Oa>"))
C.re=B.a(x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),y.t)
C.av6=B.a(x([254,253,251,247,239,223,191,127]),y.t)
C.rt=B.a(x([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8]),y.t)
C.MQ=B.a(x([A.den(),A.def(),A.deu(),A.des(),A.dep(),A.deo(),A.deq()]),y.y)
C.MS=B.a(x([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5]),y.t)
C.N2=B.a(x([C.Y,C.Jv,C.bC,C.bi,C.cM,C.e4,C.Jz,C.hP,C.JA,C.JB,C.Jw,C.Jx,C.Jy]),B.z("q<mK>"))
C.DQ=new A.kz(0,"whiteIsZero")
C.b5q=new A.kz(1,"blackIsZero")
C.b5x=new A.kz(2,"rgb")
C.DS=new A.kz(3,"palette")
C.b5y=new A.kz(4,"transparencyMask")
C.a4R=new A.kz(5,"cmyk")
C.b5z=new A.kz(6,"yCbCr")
C.b5A=new A.kz(7,"reserved7")
C.b5B=new A.kz(8,"cieLab")
C.b5C=new A.kz(9,"iccLab")
C.b5r=new A.kz(10,"ituLab")
C.b5s=new A.kz(11,"logL")
C.b5t=new A.kz(12,"logLuv")
C.b5u=new A.kz(13,"colorFilterArray")
C.b5v=new A.kz(14,"linearRaw")
C.b5w=new A.kz(15,"depth")
C.DR=new A.kz(16,"unknown")
C.avu=B.a(x([C.DQ,C.b5q,C.b5x,C.DS,C.b5y,C.a4R,C.b5z,C.b5A,C.b5B,C.b5C,C.b5r,C.b5s,C.b5t,C.b5u,C.b5v,C.b5w,C.DR]),B.z("q<kz>"))
C.Ni=B.a(x([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0]),y.t)
C.a1S=new A.a3g(0,"source")
C.a1T=new A.a3g(1,"over")
C.avY=B.a(x([C.a1S,C.a1T]),B.z("q<a3g>"))
C.b5i=new A.Kg(0,"invalid")
C.a4P=new A.Kg(1,"uint")
C.bd=new A.Kg(2,"int")
C.nX=new A.Kg(3,"float")
C.aw0=B.a(x([C.b5i,C.a4P,C.bd,C.nX]),B.z("q<Kg>"))
C.aw7=B.a(x([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15]),y.t)
C.NS=B.a(x([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9]),y.t)
C.awJ=B.a(x([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15]),y.t)
C.aki=new A.tO(1,"rle")
C.akj=new A.tO(2,"zips")
C.akk=new A.tO(3,"zip")
C.akl=new A.tO(4,"piz")
C.akm=new A.tO(5,"pxr24")
C.akn=new A.tO(6,"b44")
C.ako=new A.tO(7,"b44a")
C.awN=B.a(x([C.Is,C.aki,C.akj,C.akk,C.akl,C.akm,C.akn,C.ako]),B.z("q<tO>"))
C.ayL=B.a(x([231,120,48,89,115,113,120,152,112]),y.t)
C.apx=B.a(x([152,179,64,126,170,118,46,70,95]),y.t)
C.awI=B.a(x([175,69,143,80,85,82,72,155,103]),y.t)
C.aqF=B.a(x([56,58,10,171,218,189,17,13,152]),y.t)
C.axD=B.a(x([114,26,17,163,44,195,21,10,173]),y.t)
C.ay2=B.a(x([121,24,80,195,26,62,44,64,85]),y.t)
C.axx=B.a(x([144,71,10,38,171,213,144,34,26]),y.t)
C.aB7=B.a(x([170,46,55,19,136,160,33,206,71]),y.t)
C.atX=B.a(x([63,20,8,114,114,208,12,9,226]),y.t)
C.avm=B.a(x([81,40,11,96,182,84,29,16,36]),y.t)
C.aoZ=B.a(x([C.ayL,C.apx,C.awI,C.aqF,C.axD,C.ay2,C.axx,C.aB7,C.atX,C.avm]),y.S)
C.asZ=B.a(x([134,183,89,137,98,101,106,165,148]),y.t)
C.aAL=B.a(x([72,187,100,130,157,111,32,75,80]),y.t)
C.ayh=B.a(x([66,102,167,99,74,62,40,234,128]),y.t)
C.aq_=B.a(x([41,53,9,178,241,141,26,8,107]),y.t)
C.av7=B.a(x([74,43,26,146,73,166,49,23,157]),y.t)
C.auh=B.a(x([65,38,105,160,51,52,31,115,128]),y.t)
C.aup=B.a(x([104,79,12,27,217,255,87,17,7]),y.t)
C.awG=B.a(x([87,68,71,44,114,51,15,186,23]),y.t)
C.aAq=B.a(x([47,41,14,110,182,183,21,17,194]),y.t)
C.az9=B.a(x([66,45,25,102,197,189,23,18,22]),y.t)
C.aBE=B.a(x([C.asZ,C.aAL,C.ayh,C.aq_,C.av7,C.auh,C.aup,C.awG,C.aAq,C.az9]),y.S)
C.ayK=B.a(x([88,88,147,150,42,46,45,196,205]),y.t)
C.axI=B.a(x([43,97,183,117,85,38,35,179,61]),y.t)
C.auF=B.a(x([39,53,200,87,26,21,43,232,171]),y.t)
C.awo=B.a(x([56,34,51,104,114,102,29,93,77]),y.t)
C.axq=B.a(x([39,28,85,171,58,165,90,98,64]),y.t)
C.aua=B.a(x([34,22,116,206,23,34,43,166,73]),y.t)
C.ap_=B.a(x([107,54,32,26,51,1,81,43,31]),y.t)
C.aBe=B.a(x([68,25,106,22,64,171,36,225,114]),y.t)
C.asY=B.a(x([34,19,21,102,132,188,16,76,124]),y.t)
C.aC_=B.a(x([62,18,78,95,85,57,50,48,51]),y.t)
C.atk=B.a(x([C.ayK,C.axI,C.auF,C.awo,C.axq,C.aua,C.ap_,C.aBe,C.asY,C.aC_]),y.S)
C.axi=B.a(x([193,101,35,159,215,111,89,46,111]),y.t)
C.as5=B.a(x([60,148,31,172,219,228,21,18,111]),y.t)
C.aqU=B.a(x([112,113,77,85,179,255,38,120,114]),y.t)
C.aBW=B.a(x([40,42,1,196,245,209,10,25,109]),y.t)
C.avZ=B.a(x([88,43,29,140,166,213,37,43,154]),y.t)
C.auc=B.a(x([61,63,30,155,67,45,68,1,209]),y.t)
C.auP=B.a(x([100,80,8,43,154,1,51,26,71]),y.t)
C.aq4=B.a(x([142,78,78,16,255,128,34,197,171]),y.t)
C.awY=B.a(x([41,40,5,102,211,183,4,1,221]),y.t)
C.aty=B.a(x([51,50,17,168,209,192,23,25,82]),y.t)
C.ath=B.a(x([C.axi,C.as5,C.aqU,C.aBW,C.avZ,C.auc,C.auP,C.aq4,C.awY,C.aty]),y.S)
C.auy=B.a(x([138,31,36,171,27,166,38,44,229]),y.t)
C.ate=B.a(x([67,87,58,169,82,115,26,59,179]),y.t)
C.azW=B.a(x([63,59,90,180,59,166,93,73,154]),y.t)
C.aBB=B.a(x([40,40,21,116,143,209,34,39,175]),y.t)
C.aqb=B.a(x([47,15,16,183,34,223,49,45,183]),y.t)
C.ask=B.a(x([46,17,33,183,6,98,15,32,183]),y.t)
C.aDi=B.a(x([57,46,22,24,128,1,54,17,37]),y.t)
C.auT=B.a(x([65,32,73,115,28,128,23,128,205]),y.t)
C.ayg=B.a(x([40,3,9,115,51,192,18,6,223]),y.t)
C.av4=B.a(x([87,37,9,115,59,77,64,21,47]),y.t)
C.awX=B.a(x([C.auy,C.ate,C.azW,C.aBB,C.aqb,C.ask,C.aDi,C.auT,C.ayg,C.av4]),y.S)
C.aCR=B.a(x([104,55,44,218,9,54,53,130,226]),y.t)
C.arn=B.a(x([64,90,70,205,40,41,23,26,57]),y.t)
C.azV=B.a(x([54,57,112,184,5,41,38,166,213]),y.t)
C.aub=B.a(x([30,34,26,133,152,116,10,32,134]),y.t)
C.ayX=B.a(x([39,19,53,221,26,114,32,73,255]),y.t)
C.atw=B.a(x([31,9,65,234,2,15,1,118,73]),y.t)
C.awV=B.a(x([75,32,12,51,192,255,160,43,51]),y.t)
C.auf=B.a(x([88,31,35,67,102,85,55,186,85]),y.t)
C.avz=B.a(x([56,21,23,111,59,205,45,37,192]),y.t)
C.avK=B.a(x([55,38,70,124,73,102,1,34,98]),y.t)
C.aCY=B.a(x([C.aCR,C.arn,C.azV,C.aub,C.ayX,C.atw,C.awV,C.auf,C.avz,C.avK]),y.S)
C.avx=B.a(x([125,98,42,88,104,85,117,175,82]),y.t)
C.aul=B.a(x([95,84,53,89,128,100,113,101,45]),y.t)
C.axR=B.a(x([75,79,123,47,51,128,81,171,1]),y.t)
C.arg=B.a(x([57,17,5,71,102,57,53,41,49]),y.t)
C.azG=B.a(x([38,33,13,121,57,73,26,1,85]),y.t)
C.aCC=B.a(x([41,10,67,138,77,110,90,47,114]),y.t)
C.awP=B.a(x([115,21,2,10,102,255,166,23,6]),y.t)
C.at0=B.a(x([101,29,16,10,85,128,101,196,26]),y.t)
C.auL=B.a(x([57,18,10,102,102,213,34,20,43]),y.t)
C.avX=B.a(x([117,20,15,36,163,128,68,1,26]),y.t)
C.awD=B.a(x([C.avx,C.aul,C.axR,C.arg,C.azG,C.aCC,C.awP,C.at0,C.auL,C.avX]),y.S)
C.av2=B.a(x([102,61,71,37,34,53,31,243,192]),y.t)
C.aCv=B.a(x([69,60,71,38,73,119,28,222,37]),y.t)
C.av5=B.a(x([68,45,128,34,1,47,11,245,171]),y.t)
C.ap7=B.a(x([62,17,19,70,146,85,55,62,70]),y.t)
C.aDb=B.a(x([37,43,37,154,100,163,85,160,1]),y.t)
C.aCa=B.a(x([63,9,92,136,28,64,32,201,85]),y.t)
C.aAQ=B.a(x([75,15,9,9,64,255,184,119,16]),y.t)
C.ata=B.a(x([86,6,28,5,64,255,25,248,1]),y.t)
C.az5=B.a(x([56,8,17,132,137,255,55,116,128]),y.t)
C.ar3=B.a(x([58,15,20,82,135,57,26,121,40]),y.t)
C.axv=B.a(x([C.av2,C.aCv,C.av5,C.ap7,C.aDb,C.aCa,C.aAQ,C.ata,C.az5,C.ar3]),y.S)
C.axW=B.a(x([164,50,31,137,154,133,25,35,218]),y.t)
C.at9=B.a(x([51,103,44,131,131,123,31,6,158]),y.t)
C.aC2=B.a(x([86,40,64,135,148,224,45,183,128]),y.t)
C.awH=B.a(x([22,26,17,131,240,154,14,1,209]),y.t)
C.asb=B.a(x([45,16,21,91,64,222,7,1,197]),y.t)
C.aBC=B.a(x([56,21,39,155,60,138,23,102,213]),y.t)
C.aCW=B.a(x([83,12,13,54,192,255,68,47,28]),y.t)
C.ayi=B.a(x([85,26,85,85,128,128,32,146,171]),y.t)
C.awt=B.a(x([18,11,7,63,144,171,4,4,246]),y.t)
C.atl=B.a(x([35,27,10,146,174,171,12,26,128]),y.t)
C.awb=B.a(x([C.axW,C.at9,C.aC2,C.awH,C.asb,C.aBC,C.aCW,C.ayi,C.awt,C.atl]),y.S)
C.aAl=B.a(x([190,80,35,99,180,80,126,54,45]),y.t)
C.aB6=B.a(x([85,126,47,87,176,51,41,20,32]),y.t)
C.azO=B.a(x([101,75,128,139,118,146,116,128,85]),y.t)
C.aAG=B.a(x([56,41,15,176,236,85,37,9,62]),y.t)
C.arb=B.a(x([71,30,17,119,118,255,17,18,138]),y.t)
C.axu=B.a(x([101,38,60,138,55,70,43,26,142]),y.t)
C.awj=B.a(x([146,36,19,30,171,255,97,27,20]),y.t)
C.ayI=B.a(x([138,45,61,62,219,1,81,188,64]),y.t)
C.aBX=B.a(x([32,41,20,117,151,142,20,21,163]),y.t)
C.aB8=B.a(x([112,19,12,61,195,128,48,4,24]),y.t)
C.aA5=B.a(x([C.aAl,C.aB6,C.azO,C.aAG,C.arb,C.axu,C.awj,C.ayI,C.aBX,C.aB8]),y.S)
C.awW=B.a(x([C.aoZ,C.aBE,C.atk,C.ath,C.awX,C.aCY,C.awD,C.axv,C.awb,C.aA5]),y.o)
C.wJ=new A.o8(0,"none")
C.iI=new A.o8(1,"palette")
C.a4O=new A.o8(2,"rgb")
C.b59=new A.o8(3,"gray")
C.b5a=new A.o8(4,"reserved4")
C.b5b=new A.o8(5,"reserved5")
C.b5c=new A.o8(6,"reserved6")
C.b5d=new A.o8(7,"reserved7")
C.b5e=new A.o8(8,"reserved8")
C.iJ=new A.o8(9,"paletteRle")
C.a4N=new A.o8(10,"rgbRle")
C.b58=new A.o8(11,"grayRle")
C.ax5=B.a(x([C.wJ,C.iI,C.a4O,C.b59,C.b5a,C.b5b,C.b5c,C.b5d,C.b5e,C.iJ,C.a4N,C.b58]),B.z("q<o8>"))
C.OB=B.a(x([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250]),y.t)
C.axQ=B.a(x([A.de7(),A.dee(),A.deg(),A.de9(),A.dec(),A.dei(),A.deb(),A.deh(),A.de8(),A.dea()]),y.y)
C.Ay=B.a(x([8,0,8,0]),y.t)
C.arl=B.a(x([5,3,5,3]),y.t)
C.aq8=B.a(x([3,5,3,5]),y.t)
C.K7=B.a(x([0,8,0,8]),y.t)
C.KE=B.a(x([4,4,4,4]),y.t)
C.aqS=B.a(x([4,4,0,0]),y.t)
C.OS=B.a(x([C.Ay,C.arl,C.aq8,C.K7,C.Ay,C.KE,C.aqS,C.K7]),y.S)
C.P_=B.a(x([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41]),y.t)
C.ayA=B.a(x([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99]),y.t)
C.tQ=B.a(x([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845]),y.t)
C.P4=B.a(x([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127]),y.t)
C.P6=B.a(x([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]),y.t)
C.tY=B.a(x([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567]),y.t)
C.Pj=B.a(x([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232]),y.t)
C.Q1=B.a(x([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0]),y.t)
C.aU8=new A.D4(0,"none")
C.aU9=new A.D4(1,"sub")
C.aUa=new A.D4(2,"up")
C.aUb=new A.D4(3,"average")
C.aUc=new A.D4(4,"paeth")
C.Q2=B.a(x([C.aU8,C.aU9,C.aUa,C.aUb,C.aUc]),B.z("q<D4>"))
C.h9=B.a(x([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]),y.t)
C.n4=B.a(x([0,1,3,7,15,31,63,127,255]),y.t)
C.Ba=B.a(x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),y.t)
C.ew=B.a(x([255,255,255,255,255,255,255,255,255,255,255]),y.t)
C.la=B.a(x([C.ew,C.ew,C.ew]),y.S)
C.awn=B.a(x([176,246,255,255,255,255,255,255,255,255,255]),y.t)
C.aCJ=B.a(x([223,241,252,255,255,255,255,255,255,255,255]),y.t)
C.asG=B.a(x([249,253,253,255,255,255,255,255,255,255,255]),y.t)
C.awT=B.a(x([C.awn,C.aCJ,C.asG]),y.S)
C.avr=B.a(x([255,244,252,255,255,255,255,255,255,255,255]),y.t)
C.auZ=B.a(x([234,254,254,255,255,255,255,255,255,255,255]),y.t)
C.Rk=B.a(x([253,255,255,255,255,255,255,255,255,255,255]),y.t)
C.at7=B.a(x([C.avr,C.auZ,C.Rk]),y.S)
C.aC1=B.a(x([255,246,254,255,255,255,255,255,255,255,255]),y.t)
C.az0=B.a(x([239,253,254,255,255,255,255,255,255,255,255]),y.t)
C.QI=B.a(x([254,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aAN=B.a(x([C.aC1,C.az0,C.QI]),y.S)
C.MW=B.a(x([255,248,254,255,255,255,255,255,255,255,255]),y.t)
C.atJ=B.a(x([251,255,254,255,255,255,255,255,255,255,255]),y.t)
C.ay1=B.a(x([C.MW,C.atJ,C.ew]),y.S)
C.As=B.a(x([255,253,254,255,255,255,255,255,255,255,255]),y.t)
C.axT=B.a(x([251,254,254,255,255,255,255,255,255,255,255]),y.t)
C.au3=B.a(x([C.As,C.axT,C.QI]),y.S)
C.aqB=B.a(x([255,254,253,255,254,255,255,255,255,255,255]),y.t)
C.avi=B.a(x([250,255,254,255,254,255,255,255,255,255,255]),y.t)
C.u9=B.a(x([254,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aw_=B.a(x([C.aqB,C.avi,C.u9]),y.S)
C.auK=B.a(x([C.la,C.awT,C.at7,C.aAN,C.ay1,C.au3,C.aw_,C.la]),y.o)
C.apv=B.a(x([217,255,255,255,255,255,255,255,255,255,255]),y.t)
C.awf=B.a(x([225,252,241,253,255,255,254,255,255,255,255]),y.t)
C.azR=B.a(x([234,250,241,250,253,255,253,254,255,255,255]),y.t)
C.aB9=B.a(x([C.apv,C.awf,C.azR]),y.S)
C.Bj=B.a(x([255,254,255,255,255,255,255,255,255,255,255]),y.t)
C.asN=B.a(x([223,254,254,255,255,255,255,255,255,255,255]),y.t)
C.asd=B.a(x([238,253,254,254,255,255,255,255,255,255,255]),y.t)
C.ayV=B.a(x([C.Bj,C.asN,C.asd]),y.S)
C.av3=B.a(x([249,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aBZ=B.a(x([C.MW,C.av3,C.ew]),y.S)
C.aBg=B.a(x([255,253,255,255,255,255,255,255,255,255,255]),y.t)
C.axS=B.a(x([247,254,255,255,255,255,255,255,255,255,255]),y.t)
C.axz=B.a(x([C.aBg,C.axS,C.ew]),y.S)
C.as1=B.a(x([252,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aq1=B.a(x([C.As,C.as1,C.ew]),y.S)
C.Rw=B.a(x([255,254,254,255,255,255,255,255,255,255,255]),y.t)
C.asa=B.a(x([C.Rw,C.Rk,C.ew]),y.S)
C.ayP=B.a(x([255,254,253,255,255,255,255,255,255,255,255]),y.t)
C.Ng=B.a(x([250,255,255,255,255,255,255,255,255,255,255]),y.t)
C.arY=B.a(x([C.ayP,C.Ng,C.u9]),y.S)
C.aqH=B.a(x([C.aB9,C.ayV,C.aBZ,C.axz,C.aq1,C.asa,C.arY,C.la]),y.o)
C.aA8=B.a(x([186,251,250,255,255,255,255,255,255,255,255]),y.t)
C.atz=B.a(x([234,251,244,254,255,255,255,255,255,255,255]),y.t)
C.aAP=B.a(x([251,251,243,253,254,255,254,255,255,255,255]),y.t)
C.au_=B.a(x([C.aA8,C.atz,C.aAP]),y.S)
C.atN=B.a(x([236,253,254,255,255,255,255,255,255,255,255]),y.t)
C.ayN=B.a(x([251,253,253,254,254,255,255,255,255,255,255]),y.t)
C.avP=B.a(x([C.As,C.atN,C.ayN]),y.S)
C.aAk=B.a(x([254,254,254,255,255,255,255,255,255,255,255]),y.t)
C.atG=B.a(x([C.Rw,C.aAk,C.ew]),y.S)
C.aAY=B.a(x([254,254,255,255,255,255,255,255,255,255,255]),y.t)
C.atK=B.a(x([C.Bj,C.aAY,C.u9]),y.S)
C.Ry=B.a(x([C.ew,C.u9,C.ew]),y.S)
C.aqE=B.a(x([C.au_,C.avP,C.atG,C.atK,C.Ry,C.la,C.la,C.la]),y.o)
C.avd=B.a(x([248,255,255,255,255,255,255,255,255,255,255]),y.t)
C.auk=B.a(x([250,254,252,254,255,255,255,255,255,255,255]),y.t)
C.atx=B.a(x([248,254,249,253,255,255,255,255,255,255,255]),y.t)
C.avU=B.a(x([C.avd,C.auk,C.atx]),y.S)
C.aqe=B.a(x([255,253,253,255,255,255,255,255,255,255,255]),y.t)
C.aBu=B.a(x([246,253,253,255,255,255,255,255,255,255,255]),y.t)
C.au1=B.a(x([252,254,251,254,254,255,255,255,255,255,255]),y.t)
C.aBt=B.a(x([C.aqe,C.aBu,C.au1]),y.S)
C.aD2=B.a(x([255,254,252,255,255,255,255,255,255,255,255]),y.t)
C.atr=B.a(x([248,254,253,255,255,255,255,255,255,255,255]),y.t)
C.arX=B.a(x([253,255,254,254,255,255,255,255,255,255,255]),y.t)
C.ayb=B.a(x([C.aD2,C.atr,C.arX]),y.S)
C.aCU=B.a(x([255,251,254,255,255,255,255,255,255,255,255]),y.t)
C.axk=B.a(x([245,251,254,255,255,255,255,255,255,255,255]),y.t)
C.axt=B.a(x([253,253,254,255,255,255,255,255,255,255,255]),y.t)
C.asz=B.a(x([C.aCU,C.axk,C.axt]),y.S)
C.asE=B.a(x([255,251,253,255,255,255,255,255,255,255,255]),y.t)
C.avw=B.a(x([252,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aAu=B.a(x([C.asE,C.avw,C.Bj]),y.S)
C.arz=B.a(x([255,252,255,255,255,255,255,255,255,255,255]),y.t)
C.aCO=B.a(x([249,255,254,255,255,255,255,255,255,255,255]),y.t)
C.auu=B.a(x([255,255,254,255,255,255,255,255,255,255,255]),y.t)
C.ap6=B.a(x([C.arz,C.aCO,C.auu]),y.S)
C.aDd=B.a(x([255,255,253,255,255,255,255,255,255,255,255]),y.t)
C.atI=B.a(x([C.aDd,C.Ng,C.ew]),y.S)
C.arW=B.a(x([C.avU,C.aBt,C.ayb,C.asz,C.aAu,C.ap6,C.atI,C.Ry]),y.o)
C.aB2=B.a(x([C.auK,C.aqH,C.aqE,C.arW]),y.M)
C.a8u=new A.lK(1,"rle8")
C.a8z=new A.lK(2,"rle4")
C.a8A=new A.lK(4,"jpeg")
C.a8B=new A.lK(5,"png")
C.a8C=new A.lK(7,"reserved7")
C.a8D=new A.lK(8,"reserved8")
C.a8E=new A.lK(9,"reserved9")
C.a8v=new A.lK(10,"reserved10")
C.a8w=new A.lK(11,"cmyk")
C.a8x=new A.lK(12,"cmykRle8")
C.a8y=new A.lK(13,"cmykRle4")
C.QL=B.a(x([C.Fh,C.a8u,C.a8z,C.y8,C.a8A,C.a8B,C.y9,C.a8C,C.a8D,C.a8E,C.a8v,C.a8w,C.a8x,C.a8y]),B.z("q<lK>"))
C.Bb=B.a(x([0,128,192,224,240,248,252,254,255]),y.t)
C.Bc=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295]),y.t)
C.aBq=B.a(x([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),y.t)
C.aBx=B.a(x([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),y.t)
C.a5y=new A.Kt(0,"predictor")
C.b7L=new A.Kt(1,"crossColor")
C.b7M=new A.Kt(2,"subtractGreen")
C.a5z=new A.Kt(3,"colorIndexing")
C.aBM=B.a(x([C.a5y,C.b7L,C.b7M,C.a5z]),B.z("q<Kt>"))
C.ex=B.a(x([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255]),y.t)
C.aCq=B.a(x([A.dej(),A.ded(),A.det(),A.der(),A.del(),A.dek(),A.dem()]),y.y)
C.RJ=B.a(x([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396]),y.t)
C.aCy=B.a(x([null,A.deK(),A.deL(),A.deJ()]),B.z("q<~(r,r,r,r,r,d3)?>"))
C.RT=B.a(x([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),y.t)
C.vn=B.a(x([0,36,72,109,145,182,218,255]),y.t)
C.fx=B.a(x([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255]),y.t)
C.aCL=B.a(x([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),y.t)
C.jl=B.a(x([0,1,1,2,4,8,1,1,2,4,8,4,8]),y.t)
C.aUw=new A.uo(0,"bitmap")
C.a2c=new A.uo(1,"grayscale")
C.aUx=new A.uo(2,"indexed")
C.a2d=new A.uo(3,"rgb")
C.a2e=new A.uo(4,"cmyk")
C.aUy=new A.uo(5,"multiChannel")
C.aUz=new A.uo(6,"duoTone")
C.a2f=new A.uo(7,"lab")
C.aCN=B.a(x([C.aUw,C.a2c,C.aUx,C.a2d,C.a2e,C.aUy,C.aUz,C.a2f]),B.z("q<uo>"))
C.aCZ=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),y.t)
C.vx=B.a(x([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),y.t)
C.Sr=B.a(x([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0]),y.t)
C.apR=B.a(x([2,6,2,6]),y.t)
C.arL=B.a(x([6,2,6,2]),y.t)
C.apK=B.a(x([2,2,6,6]),y.t)
C.apo=B.a(x([1,3,3,9]),y.t)
C.aqJ=B.a(x([4,0,12,0]),y.t)
C.aq6=B.a(x([3,1,9,3]),y.t)
C.ass=B.a(x([8,8,0,0]),y.t)
C.aqL=B.a(x([4,12,0,0]),y.t)
C.ap9=B.a(x([16,0,0,0]),y.t)
C.ap4=B.a(x([12,4,0,0]),y.t)
C.arV=B.a(x([6,6,2,2]),y.t)
C.aq9=B.a(x([3,9,1,3]),y.t)
C.ap3=B.a(x([12,0,4,0]),y.t)
C.asF=B.a(x([9,3,3,1]),y.t)
C.d4=B.a(x([C.KE,C.apR,C.Ay,C.arL,C.apK,C.apo,C.aqJ,C.aq6,C.ass,C.aqL,C.ap9,C.ap4,C.arV,C.aq9,C.ap3,C.asF]),y.S)
C.lb=B.a(x([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1]),y.t)
C.aNY={ProcessingSoftware:0,SubfileType:1,OldSubfileType:2,ImageWidth:3,ImageLength:4,ImageHeight:5,BitsPerSample:6,Compression:7,PhotometricInterpretation:8,Thresholding:9,CellWidth:10,CellLength:11,FillOrder:12,DocumentName:13,ImageDescription:14,Make:15,Model:16,StripOffsets:17,Orientation:18,SamplesPerPixel:19,RowsPerStrip:20,StripByteCounts:21,MinSampleValue:22,MaxSampleValue:23,XResolution:24,YResolution:25,PlanarConfiguration:26,PageName:27,XPosition:28,YPosition:29,GrayResponseUnit:30,GrayResponseCurve:31,T4Options:32,T6Options:33,ResolutionUnit:34,PageNumber:35,ColorResponseUnit:36,TransferFunction:37,Software:38,DateTime:39,Artist:40,HostComputer:41,Predictor:42,WhitePoint:43,PrimaryChromaticities:44,ColorMap:45,HalftoneHints:46,TileWidth:47,TileLength:48,TileOffsets:49,TileByteCounts:50,BadFaxLines:51,CleanFaxData:52,ConsecutiveBadFaxLines:53,InkSet:54,InkNames:55,NumberofInks:56,DotRange:57,TargetPrinter:58,ExtraSamples:59,SampleFormat:60,SMinSampleValue:61,SMaxSampleValue:62,TransferRange:63,ClipPath:64,JPEGProc:65,JPEGInterchangeFormat:66,JPEGInterchangeFormatLength:67,YCbCrCoefficients:68,YCbCrSubSampling:69,YCbCrPositioning:70,ReferenceBlackWhite:71,ApplicationNotes:72,Rating:73,CFARepeatPatternDim:74,CFAPattern:75,BatteryLevel:76,Copyright:77,ExposureTime:78,FNumber:79,"IPTC-NAA":80,ExifOffset:81,InterColorProfile:82,ExposureProgram:83,SpectralSensitivity:84,GPSOffset:85,ISOSpeed:86,OECF:87,SensitivityType:88,RecommendedExposureIndex:89,ExifVersion:90,DateTimeOriginal:91,DateTimeDigitized:92,OffsetTime:93,OffsetTimeOriginal:94,OffsetTimeDigitized:95,ComponentsConfiguration:96,CompressedBitsPerPixel:97,ShutterSpeedValue:98,ApertureValue:99,BrightnessValue:100,ExposureBiasValue:101,MaxApertureValue:102,SubjectDistance:103,MeteringMode:104,LightSource:105,Flash:106,FocalLength:107,SubjectArea:108,MakerNote:109,UserComment:110,SubSecTime:111,SubSecTimeOriginal:112,SubSecTimeDigitized:113,XPTitle:114,XPComment:115,XPAuthor:116,XPKeywords:117,XPSubject:118,FlashPixVersion:119,ColorSpace:120,ExifImageWidth:121,ExifImageLength:122,RelatedSoundFile:123,InteroperabilityOffset:124,FlashEnergy:125,SpatialFrequencyResponse:126,FocalPlaneXResolution:127,FocalPlaneYResolution:128,FocalPlaneResolutionUnit:129,SubjectLocation:130,ExposureIndex:131,SensingMethod:132,FileSource:133,SceneType:134,CVAPattern:135,CustomRendered:136,ExposureMode:137,WhiteBalance:138,DigitalZoomRatio:139,FocalLengthIn35mmFilm:140,SceneCaptureType:141,GainControl:142,Contrast:143,Saturation:144,Sharpness:145,DeviceSettingDescription:146,SubjectDistanceRange:147,ImageUniqueID:148,CameraOwnerName:149,BodySerialNumber:150,LensSpecification:151,LensMake:152,LensModel:153,LensSerialNumber:154,Gamma:155,PrintIM:156,Padding:157,OffsetSchema:158,OwnerName:159,SerialNumber:160,InteropIndex:161,InteropVersion:162,RelatedImageFileFormat:163,RelatedImageWidth:164,RelatedImageLength:165,GPSVersionID:166,GPSLatitudeRef:167,GPSLatitude:168,GPSLongitudeRef:169,GPSLongitude:170,GPSAltitudeRef:171,GPSAltitude:172,GPSTimeStamp:173,GPSSatellites:174,GPSStatus:175,GPSMeasureMode:176,GPSDOP:177,GPSSpeedRef:178,GPSSpeed:179,GPSTrackRef:180,GPSTrack:181,GPSImgDirectionRef:182,GPSImgDirection:183,GPSMapDatum:184,GPSDestLatitudeRef:185,GPSDestLatitude:186,GPSDestLongitudeRef:187,GPSDestLongitude:188,GPSDestBearingRef:189,GPSDestBearing:190,GPSDestDistanceRef:191,GPSDestDistance:192,GPSProcessingMethod:193,GPSAreaInformation:194,GPSDate:195,GPSDifferential:196}
C.Xu=new B.G(C.aNY,[11,254,255,256,257,257,258,259,262,263,264,265,266,269,270,271,272,273,274,277,278,279,280,281,282,283,284,285,286,287,290,291,292,293,296,297,300,301,305,306,315,316,317,318,319,320,321,322,323,324,325,326,327,328,332,333,334,336,337,338,339,340,341,342,343,512,513,514,529,530,531,532,700,18246,33421,33422,33423,33432,33434,33437,33723,34665,34675,34850,34852,34853,34855,34856,34864,34866,36864,36867,36868,36880,36881,36882,37121,37122,37377,37378,37379,37380,37381,37382,37383,37384,37385,37386,37396,37500,37510,37520,37521,37522,40091,40092,40093,40094,40095,40960,40961,40962,40963,40964,40965,41483,41484,41486,41487,41488,41492,41493,41495,41728,41729,41730,41985,41986,41987,41988,41989,41990,41991,41992,41993,41994,41995,41996,42016,42032,42033,42034,42035,42036,42037,42240,50341,59932,59933,65e3,65001,1,2,4096,4097,4098,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],B.z("G<e,r>"))
C.BC=new B.cW([34665,"exif",40965,"interop",34853,"gps"],B.z("cW<r,e>"))
C.XX=new B.cW([C.fi,1,C.h4,3,C.h5,15,C.a7,255,C.cc,65535,C.j8,4294967295,C.kE,127,C.kF,32767,C.kG,2147483647,C.hL,1,C.j7,1,C.kD,1],B.z("cW<ny,r>"))
C.aUd=new A.awH(0,"none")
C.aUe=new A.awH(4,"paeth")
C.nu=new A.D5(0,"invalid")
C.a1W=new A.D5(1,"pbm")
C.a1X=new A.D5(2,"pgm2")
C.C9=new A.D5(3,"pgm5")
C.a1Y=new A.D5(4,"ppm3")
C.Ca=new A.D5(5,"ppm6")
C.aWh=new A.bwP(0,"origin")
C.aWi=new A.bwS(1,"contain")
C.DP=new A.rT(0,"bilevel")
C.b5j=new A.rT(1,"gray4bit")
C.b5k=new A.rT(2,"gray")
C.b5l=new A.rT(3,"grayAlpha")
C.b5m=new A.rT(4,"palette")
C.a4Q=new A.rT(5,"rgb")
C.b5n=new A.rT(6,"rgba")
C.b5o=new A.rT(7,"yCbCrSub")
C.wM=new A.rT(8,"generic")
C.b5p=new A.rT(9,"invalid")
C.o3=new A.SX(0,"undefined")
C.Ee=new A.SX(1,"lossy")
C.wW=new A.SX(2,"lossless")
C.b8c=new A.SX(3,"animated")})();(function staticFields(){$.vx=B.bO("_config")
$.ctW=!0
$.cqQ=null
$.cCB=!1
$.cCC=B.a([A.csc(),A.dev(),A.deA(),A.deB(),A.deC(),A.deD(),A.deE(),A.deF(),A.deG(),A.deH(),A.dew(),A.dex(),A.dey(),A.dez(),A.csc(),A.csc()],B.z("q<r(qx,r,r)>"))
$.hI=null
$.cwH=B.bO("_eLut")})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazy
x($,"dkR","cKs",()=>A.cqv(C.rt,C.Kh,257,286,15))
x($,"dkQ","cKr",()=>A.cqv(C.MS,C.re,0,30,15))
x($,"dkP","cKq",()=>A.cqv(null,C.apU,0,19,7))
x($,"dfM","LR",()=>$.hv().gmP(0))
x($,"do1","clL",()=>{var v=null,u="ISOSpeed"
return B.y([11,A.aJ("ProcessingSoftware",C.bC,v),254,A.aJ("SubfileType",C.cM,1),255,A.aJ("OldSubfileType",C.cM,1),256,A.aJ("ImageWidth",C.cM,1),257,A.aJ("ImageLength",C.cM,1),258,A.aJ("BitsPerSample",C.bi,1),259,A.aJ("Compression",C.bi,1),262,A.aJ("PhotometricInterpretation",C.bi,1),263,A.aJ("Thresholding",C.bi,1),264,A.aJ("CellWidth",C.bi,1),265,A.aJ("CellLength",C.bi,1),266,A.aJ("FillOrder",C.bi,1),269,A.aJ("DocumentName",C.bC,v),270,A.aJ("ImageDescription",C.bC,v),271,A.aJ("Make",C.bC,v),272,A.aJ("Model",C.bC,v),273,A.aJ("StripOffsets",C.cM,v),274,A.aJ("Orientation",C.bi,1),277,A.aJ("SamplesPerPixel",C.bi,1),278,A.aJ("RowsPerStrip",C.cM,1),279,A.aJ("StripByteCounts",C.cM,1),280,A.aJ("MinSampleValue",C.bi,1),281,A.aJ("MaxSampleValue",C.bi,1),282,A.aJ("XResolution",C.e4,1),283,A.aJ("YResolution",C.e4,1),284,A.aJ("PlanarConfiguration",C.bi,1),285,A.aJ("PageName",C.bC,v),286,A.aJ("XPosition",C.e4,1),287,A.aJ("YPosition",C.e4,1),290,A.aJ("GrayResponseUnit",C.bi,1),291,A.aJ("GrayResponseCurve",C.Y,v),292,A.aJ("T4Options",C.Y,v),293,A.aJ("T6Options",C.Y,v),296,A.aJ("ResolutionUnit",C.bi,1),297,A.aJ("PageNumber",C.bi,2),300,A.aJ("ColorResponseUnit",C.Y,v),301,A.aJ("TransferFunction",C.bi,768),305,A.aJ("Software",C.bC,v),306,A.aJ("DateTime",C.bC,v),315,A.aJ("Artist",C.bC,v),316,A.aJ("HostComputer",C.bC,v),317,A.aJ("Predictor",C.bi,1),318,A.aJ("WhitePoint",C.e4,2),319,A.aJ("PrimaryChromaticities",C.e4,6),320,A.aJ("ColorMap",C.bi,v),321,A.aJ("HalftoneHints",C.bi,2),322,A.aJ("TileWidth",C.cM,1),323,A.aJ("TileLength",C.cM,1),324,A.aJ("TileOffsets",C.cM,v),325,A.aJ("TileByteCounts",C.Y,v),326,A.aJ("BadFaxLines",C.Y,v),327,A.aJ("CleanFaxData",C.Y,v),328,A.aJ("ConsecutiveBadFaxLines",C.Y,v),332,A.aJ("InkSet",C.Y,v),333,A.aJ("InkNames",C.Y,v),334,A.aJ("NumberofInks",C.Y,v),336,A.aJ("DotRange",C.Y,v),337,A.aJ("TargetPrinter",C.bC,v),338,A.aJ("ExtraSamples",C.Y,v),339,A.aJ("SampleFormat",C.bi,1),340,A.aJ("SMinSampleValue",C.Y,v),341,A.aJ("SMaxSampleValue",C.Y,v),342,A.aJ("TransferRange",C.Y,v),343,A.aJ("ClipPath",C.Y,v),512,A.aJ("JPEGProc",C.Y,v),513,A.aJ("JPEGInterchangeFormat",C.Y,v),514,A.aJ("JPEGInterchangeFormatLength",C.Y,v),529,A.aJ("YCbCrCoefficients",C.e4,3),530,A.aJ("YCbCrSubSampling",C.bi,1),531,A.aJ("YCbCrPositioning",C.bi,1),532,A.aJ("ReferenceBlackWhite",C.e4,6),700,A.aJ("ApplicationNotes",C.bi,1),18246,A.aJ("Rating",C.bi,1),33421,A.aJ("CFARepeatPatternDim",C.Y,v),33422,A.aJ("CFAPattern",C.Y,v),33423,A.aJ("BatteryLevel",C.Y,v),33432,A.aJ("Copyright",C.bC,v),33434,A.aJ("ExposureTime",C.e4,1),33437,A.aJ("FNumber",C.e4,v),33723,A.aJ("IPTC-NAA",C.cM,1),34665,A.aJ("ExifOffset",C.Y,v),34675,A.aJ("InterColorProfile",C.Y,v),34850,A.aJ("ExposureProgram",C.bi,1),34852,A.aJ("SpectralSensitivity",C.bC,v),34853,A.aJ("GPSOffset",C.Y,v),34855,A.aJ(u,C.cM,1),34856,A.aJ("OECF",C.Y,v),34864,A.aJ("SensitivityType",C.bi,1),34866,A.aJ("RecommendedExposureIndex",C.cM,1),34867,A.aJ(u,C.cM,1),36864,A.aJ("ExifVersion",C.hP,v),36867,A.aJ("DateTimeOriginal",C.bC,v),36868,A.aJ("DateTimeDigitized",C.bC,v),36880,A.aJ("OffsetTime",C.bC,v),36881,A.aJ("OffsetTimeOriginal",C.bC,v),36882,A.aJ("OffsetTimeDigitized",C.bC,v),37121,A.aJ("ComponentsConfiguration",C.hP,v),37122,A.aJ("CompressedBitsPerPixel",C.Y,v),37377,A.aJ("ShutterSpeedValue",C.Y,v),37378,A.aJ("ApertureValue",C.Y,v),37379,A.aJ("BrightnessValue",C.Y,v),37380,A.aJ("ExposureBiasValue",C.Y,v),37381,A.aJ("MaxApertureValue",C.Y,v),37382,A.aJ("SubjectDistance",C.Y,v),37383,A.aJ("MeteringMode",C.Y,v),37384,A.aJ("LightSource",C.Y,v),37385,A.aJ("Flash",C.Y,v),37386,A.aJ("FocalLength",C.Y,v),37396,A.aJ("SubjectArea",C.Y,v),37500,A.aJ("MakerNote",C.hP,v),37510,A.aJ("UserComment",C.hP,v),37520,A.aJ("SubSecTime",C.Y,v),37521,A.aJ("SubSecTimeOriginal",C.Y,v),37522,A.aJ("SubSecTimeDigitized",C.Y,v),40091,A.aJ("XPTitle",C.Y,v),40092,A.aJ("XPComment",C.Y,v),40093,A.aJ("XPAuthor",C.Y,v),40094,A.aJ("XPKeywords",C.Y,v),40095,A.aJ("XPSubject",C.Y,v),40960,A.aJ("FlashPixVersion",C.Y,v),40961,A.aJ("ColorSpace",C.bi,1),40962,A.aJ("ExifImageWidth",C.bi,1),40963,A.aJ("ExifImageLength",C.bi,1),40964,A.aJ("RelatedSoundFile",C.Y,v),40965,A.aJ("InteroperabilityOffset",C.Y,v),41483,A.aJ("FlashEnergy",C.Y,v),41484,A.aJ("SpatialFrequencyResponse",C.Y,v),41486,A.aJ("FocalPlaneXResolution",C.Y,v),41487,A.aJ("FocalPlaneYResolution",C.Y,v),41488,A.aJ("FocalPlaneResolutionUnit",C.Y,v),41492,A.aJ("SubjectLocation",C.Y,v),41493,A.aJ("ExposureIndex",C.Y,v),41495,A.aJ("SensingMethod",C.Y,v),41728,A.aJ("FileSource",C.Y,v),41729,A.aJ("SceneType",C.Y,v),41730,A.aJ("CVAPattern",C.Y,v),41985,A.aJ("CustomRendered",C.Y,v),41986,A.aJ("ExposureMode",C.Y,v),41987,A.aJ("WhiteBalance",C.Y,v),41988,A.aJ("DigitalZoomRatio",C.Y,v),41989,A.aJ("FocalLengthIn35mmFilm",C.Y,v),41990,A.aJ("SceneCaptureType",C.Y,v),41991,A.aJ("GainControl",C.Y,v),41992,A.aJ("Contrast",C.Y,v),41993,A.aJ("Saturation",C.Y,v),41994,A.aJ("Sharpness",C.Y,v),41995,A.aJ("DeviceSettingDescription",C.Y,v),41996,A.aJ("SubjectDistanceRange",C.Y,v),42016,A.aJ("ImageUniqueID",C.Y,v),42032,A.aJ("CameraOwnerName",C.bC,v),42033,A.aJ("BodySerialNumber",C.bC,v),42034,A.aJ("LensSpecification",C.Y,v),42035,A.aJ("LensMake",C.bC,v),42036,A.aJ("LensModel",C.bC,v),42037,A.aJ("LensSerialNumber",C.bC,v),42240,A.aJ("Gamma",C.e4,1),50341,A.aJ("PrintIM",C.Y,v),59932,A.aJ("Padding",C.Y,v),59933,A.aJ("OffsetSchema",C.Y,v),65e3,A.aJ("OwnerName",C.bC,v),65001,A.aJ("SerialNumber",C.bC,v)],y.p,B.z("anQ"))})
w($,"djX","aUZ",()=>B.Cu(511))
w($,"djY","clA",()=>B.Cu(511))
w($,"dk_","clB",()=>A.cyR(2041))
w($,"dk0","aV_",()=>A.cyR(225))
w($,"djZ","pz",()=>B.Cu(766))
x($,"dig","cJ7",()=>A.cxC(0,0,0))
x($,"dlk","op",()=>B.Cu(1))
x($,"dll","pA",()=>A.cUb(D.A.gag($.op()),0,null))
x($,"dld","qJ",()=>E.cVL(1))
x($,"dle","tj",()=>J.cMO(D.dO.gag($.qJ()),0,null))
x($,"dlf","hY",()=>B.cVO(1))
x($,"dlh","lD",()=>J.aVe(D.bq.gag($.hY()),0,null))
x($,"dlg","Fh",()=>A.cSv(D.bq.gag($.hY())))
x($,"dlb","aV1",()=>B.coh(1))
x($,"dlc","clD",()=>A.cCl(D.ck.gag($.aV1()),0))
x($,"dl9","ct_",()=>B.boB(1))
x($,"dla","cKJ",()=>A.cCl(D.eZ.gag($.ct_()),0))
x($,"dli","ct0",()=>A.d08(1))
x($,"dlj","cKK",()=>{var v=$.ct0()
return A.cSw(v.gag(v))})})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_214",e:"endPart",h:b})})($__dart_deferred_initializers__,"SGQ6xU/2vmECAkPSU0Gp972BAtY=");