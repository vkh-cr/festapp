((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_214",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,E,A={
W9(d){return new A.ahS(d,null,null)},
ahS:function ahS(d,e,f){this.a=d
this.b=e
this.c=f},
BV(d,e,f,g){var x,w
if(y.ah.b(d))x=J.d3(J.ahc(d),d.byteOffset,d.byteLength)
else x=y.L.b(d)?d:B.b_(y.R.a(d),!0,y.p)
w=new A.bh6(x,g,g,e)
w.e=f==null?x.length:f
return w},
bh7:function bh7(){},
bh6:function bh6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
cnX(d,e){var x=e==null?32768:e
return new A.bpV(d,new Uint8Array(x))},
bpW:function bpW(){},
bpV:function bpV(d,e){this.a=0
this.b=d
this.c=e},
cgr:function cgr(){},
cv8(d,e,f,g){var x=d[e*2],w=d[f*2]
if(x>=w)x=x===w&&g[e]<=g[f]
else x=!0
return x},
cpS(){return new A.bYt()},
d2b(d,e,f){var x,w,v,u,t,s,r,q=new Uint16Array(16)
for(x=0,w=1;w<=15;++w){x=x+f[w-1]<<1>>>0
q[w]=x}for(v=d.$flags|0,u=0;u<=e;++u){t=u*2
s=d[t+1]
if(s===0)continue
r=q[s]
q[s]=r+1
r=A.d2c(r,s)
v&2&&B.B(d)
d[t]=r}},
d2c(d,e){var x,w=0
do{x=A.pt(d,1)
w=(w|d&1)<<1>>>0
if(--e,e>0){d=x
continue}else break}while(!0)
return A.pt(w,1)},
cCQ(d){return d<256?C.Lt[d]:C.Lt[256+A.pt(d,7)]},
cq3(d,e,f,g,h){return new A.caj(d,e,f,g,h)},
pt(d,e){if(d>=0)return D.c.nZ(d,e)
else return D.c.nZ(d,e)+D.c.eq(2,(~e>>>0)+65536&65535)},
b5c:function b5c(d,e,f,g,h,i,j,k){var _=this
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
_.Z=_.E=_.cO=_.bW=_.aX=_.av=_.bY=_.bs=_.y2=_.y1=$},
t2:function t2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bYt:function bYt(){this.c=this.b=this.a=$},
caj:function caj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aq4(d){var x=new A.bfG()
x.aSY(d)
return x},
bfG:function bfG(){this.a=$
this.b=0
this.c=2147483647},
bgM:function bgM(d,e,f,g){var _=this
_.a=d
_.b=!1
_.c=e
_.e=_.d=0
_.r=f
_.w=g},
bLq:function bLq(){},
bLp:function bLp(){},
bLr:function bLr(){},
a_x(d,e,f){var x=0,w=B.k(y.D),v
var $async$a_x=B.f(function(g,h){if(g===1)return B.h(h,w)
while(true)switch(x){case 0:x=3
return B.c(A.Hh(d,e,"jpg",new A.bgg(d,e,f),f),$async$a_x)
case 3:v=h
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$a_x,w)},
aqj(d,e){var x=0,w=B.k(y.D),v
var $async$aqj=B.f(function(f,g){if(f===1)return B.h(g,w)
while(true)switch(x){case 0:x=3
return B.c(A.Hh(d,e,"png",new A.bgh(d,e),null),$async$aqj)
case 3:v=g
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$aqj,w)},
bgi(d,e,f){var x=0,w=B.k(y.D),v
var $async$bgi=B.f(function(g,h){if(g===1)return B.h(h,w)
while(true)switch(x){case 0:x=3
return B.c(A.Hh(d,e,"webp",new A.bgj(d,e,f),f),$async$bgi)
case 3:v=h
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$bgi,w)},
Hh(d,e,f,g,h){return A.cTn(d,e,f,g,h)},
cTn(d,e,f,g,h){var x=0,w=B.k(y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j
var $async$Hh=B.f(function(i,a0){if(i===1){t.push(a0)
x=u}while(true)switch(x){case 0:if(!$.ctv){v=g.$0()
x=1
break}m=$.hs().b
m===$&&B.b()
r=m
q="uploads/"+Date.now()+"."+f
u=4
m=r.as
m===$&&B.b()
x=7
return B.c(m.bz("images-temp").QJ(q,d),$async$Hh)
case 7:p=a0
if(J.bl(p)===0){m=g.$0()
v=m
x=1
break}u=9
m=r.as
m===$&&B.b()
x=12
return B.c(m.bz("images-temp").XO(0,q,new A.bIg(e,C.aWh,h,C.aWg)),$async$Hh)
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
m=B.af(k)
if(m instanceof B.S1){n=m
if(n.c==="403")$.ctv=!1
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
return B.c(m.bz("images-temp").K(0,B.a([q],y.T)),$async$Hh)
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
return B.j($async$Hh,w)},
cnm(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n=null,m=A.cFQ(d)
if(m==null)throw B.l(B.cC("Failed to decode "+f+" image"))
x=A.d8G(m,e)
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
v=new A.bhL(v,u,t,s,r,p,o,q,new Int32Array(2048))
v.e=v.SX(C.Sq,C.qq)
v.f=v.SX(C.Nh,C.qq)
v.r=v.SX(C.Kl,C.LF)
v.w=v.SX(C.M6,C.OA)
v.b9G()
v.b9S()
v.aKL(w)
return new Uint8Array(B.bU(v.bxF(x,C.JT)))}else if(f==="png")return new Uint8Array(B.bU(new A.bsJ(C.aUd,6).bxG(x,!1)))
else if(f==="webp")return d
else throw B.l(B.cC("Unsupported image format: "+f))},
cTm(d){var x=d.length
if(x>=2&&d[0]===255&&d[1]===216)return"jpg"
if(x>=8&&d[0]===137&&d[1]===80&&d[2]===78&&d[3]===71)return"png"
if(x>=12&&d[0]===82&&d[1]===73&&d[2]===70&&d[3]===70&&d[8]===87&&d[9]===69&&d[10]===66&&d[11]===80)return"webp"
return"jpg"},
Hg(d,e){var x=0,w=B.k(y.D),v,u
var $async$Hg=B.f(function(f,g){if(f===1)return B.h(g,w)
while(true)switch(x){case 0:u=A.cTm(d)
x=u==="jpg"?3:5
break
case 3:x=6
return B.c(A.a_x(d,e,85),$async$Hg)
case 6:v=g
x=1
break
x=4
break
case 5:x=u==="png"?7:9
break
case 7:x=10
return B.c(A.aqj(d,e),$async$Hg)
case 10:v=g
x=1
break
x=8
break
case 9:x=u==="webp"?11:13
break
case 11:x=14
return B.c(A.bgi(d,e,85),$async$Hg)
case 14:v=g
x=1
break
x=12
break
case 13:x=15
return B.c(A.a_x(d,e,85),$async$Hg)
case 15:v=g
x=1
break
case 12:case 8:case 4:case 1:return B.i(v,w)}})
return B.j($async$Hg,w)},
bgg:function bgg(d,e,f){this.a=d
this.b=e
this.c=f},
bgh:function bgh(d,e){this.a=d
this.b=e},
bgj:function bgj(d,e,f){this.a=d
this.b=e
this.c=f},
b_d:function b_d(d,e){this.a=d
this.b=e},
hx:function hx(d){this.a=-1
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
cOX(d,e,f,g){var x=new A.MU(new Uint8Array(4))
x.aSL(d,e,f,g)
return x},
xJ:function xJ(d){this.a=d},
ajC:function ajC(d){this.a=d},
MU:function MU(d){this.a=d},
aUb(d,e,f){var x
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
nw:function nw(d,e){this.a=d
this.b=e},
aiF:function aiF(d,e){this.a=d
this.b=e},
Zj(d){var x=new A.O8(B.I(y.N,y.P))
x.aSZ(d)
return x},
cw6(d){var x=new A.O8(B.I(y.N,y.P))
x.qi(0,d)
return x},
O8:function O8(d){this.a=d},
aIC:function aIC(d,e){this.a=d
this.b=e},
aJ(d,e,f){return new A.anK(d,e)},
anK:function anK(d,e){this.a=d
this.b=e},
tZ:function tZ(d){this.a=d},
bg9:function bg9(d){this.a=d},
cx_(d){var x=new A.pS(B.I(y.p,y.r),new A.tZ(B.I(y.N,y.P)))
x.btW(d)
return x},
pS:function pS(d,e){this.a=d
this.b=e},
bga:function bga(d){this.a=d},
bgb:function bgb(d){this.a=d},
cTk(d){var x=new Uint16Array(1)
x[0]=d
return new A.yi(x)},
cx7(d,e){var x=new A.yi(new Uint16Array(e))
x.aT3(d,e)
return x},
cTj(d){var x=new Uint32Array(1)
x[0]=d
return new A.r7(x)},
cx2(d,e){var x=new A.r7(new Uint32Array(e))
x.aT0(d,e)
return x},
cx3(d,e){var x,w=J.kp(e,y.i)
for(x=0;x<e;++x)w[x]=new A.nQ(d.an(),d.an())
return new A.u_(w)},
cx6(d,e){var x=new A.yh(new Int16Array(e))
x.aT2(d,e)
return x},
cx4(d,e){var x=new A.yg(new Int32Array(e))
x.aT1(d,e)
return x},
cx5(d,e){var x,w,v,u,t=J.kp(e,y.i)
for(x=0;x<e;++x){w=d.an()
v=$.hV()
v.$flags&2&&B.B(v)
v[0]=w
w=$.lA()
u=w[0]
v[0]=d.an()
t[x]=new A.nQ(u,w[0])}return new A.u0(t)},
cx8(d){var x=new Float32Array(1)
x[0]=d
return new A.BJ(x)},
cx9(d,e){var x=new A.BJ(new Float32Array(e))
x.aT4(d,e)
return x},
cx0(d){var x=new Float64Array(1)
x[0]=d
return new A.BI(x)},
cx1(d,e){var x=new A.BI(new Float64Array(e))
x.aT_(d,e)
return x},
mJ:function mJ(d,e){this.a=d
this.b=e},
k_:function k_(){},
tY:function tY(d){this.a=d},
BH:function BH(d){this.a=d},
yi:function yi(d){this.a=d},
r7:function r7(d){this.a=d},
u_:function u_(d){this.a=d},
vX:function vX(d){this.a=d},
yh:function yh(d){this.a=d},
yg:function yg(d){this.a=d},
u0:function u0(d){this.a=d},
BJ:function BJ(d){this.a=d},
BI:function BI(d){this.a=d},
He:function He(d){this.a=d},
ctW(d){var x,w,v=new A.aYZ()
if(!A.clU(d))B.a6(A.c6("Not a bitmap file."))
d.d+=2
x=d.an()
w=$.hV()
w.$flags&2&&B.B(w)
w[0]=x
x=$.lA()
d.d+=4
w[0]=d.an()
v.b=x[0]
return v},
clU(d){if(d.c-d.d<2)return!1
return A.cb(d,null,0).bO()===19778},
cOe(d,e){var x,w,v,u,t=e==null?A.ctW(d):e,s=d.d,r=d.an(),q=d.an(),p=$.hV()
p.$flags&2&&B.B(p)
p[0]=q
q=$.lA()
x=q[0]
p[0]=d.an()
q=q[0]
w=d.bO()
v=d.bO()
u=C.QK[d.an()]
d.an()
p[0]=d.an()
p[0]=d.an()
p=d.an()
d.an()
s=new A.FC(t,x,q,r,w,v,u,p,s)
s.ai3(d,e)
return s},
lH:function lH(d,e){this.a=d
this.b=e},
aYZ:function aYZ(){this.b=$},
FC:function FC(d,e,f,g,h,i,j,k,l){var _=this
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
aiJ:function aiJ(d){this.a=$
this.b=null
this.c=d},
aYY:function aYY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
b6c:function b6c(d){this.a=$
this.b=null
this.c=d},
b4W:function b4W(){},
b4X:function b4X(){},
b8y:function b8y(){},
anL:function anL(d,e,f){this.a=d
this.b=e
this.c=f},
aqH:function aqH(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
Oa:function Oa(d,e){this.a=d
this.b=e},
GA:function GA(d,e){this.a=d
this.b=e},
anM:function anM(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
cw7(d,e,f,g){var x,w
switch(d.a){case 1:return new A.bhi(f,e)
case 2:return new A.aqJ(f,g==null?1:g,e)
case 3:return new A.aqJ(f,g==null?16:g,e)
case 4:x=g==null?32:g
w=new A.bhg(f,x,e)
w.aTa(e,f,x)
return w
case 5:return new A.bhh(f,g==null?16:g,e)
case 6:return new A.aqH(f,g==null?32:g,!1,e)
case 7:return new A.aqH(f,g==null?32:g,!0,e)
default:throw B.l(A.c6("Invalid compression type: "+d.j(0)))}},
tM:function tM(d,e){this.a=d
this.b=e},
b9F:function b9F(){},
bhf:function bhf(){},
cRE(d,e,f,g){var x,w,v,u,t,s,r,q
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
r=J.iZ(16384,y.W)
for(q=0;q<16384;++q)r[q]=new A.anN()
A.cRF(d,e-20,w,v,s)
if(u>8*(e-(d.d-x)))throw B.l(A.c6("Error in header for Huffman-encoded data (invalid number of bits)."))
A.cRB(s,w,v,r)
A.cRD(s,r,d,u,v,g,f)},
cRD(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p="Error in Huffman-encoded data (invalid code).",o=B.a([0,0],y.t),n=f.d+D.c.b7(g+7,8)
for(x=0;f.d<n;){A.cmU(o,f)
for(;w=o[1],w>=14;){v=e[D.c.nZ(o[0],w-14)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cmV(v.b,h,o,f,j,x,i)}else{if(v.c==null)throw B.l(A.c6(p))
for(t=0;t<v.b;++t){s=d[v.c[t]]&63
while(!0){w=o[1]
if(!(w<s&&f.d<n))break
A.cmU(o,f)}if(w>=s){u=v.c
w-=s
if(d[u[t]]>>>6===(D.c.nZ(o[0],w)&D.c.eq(1,s)-1)>>>0){o[1]=w
r=A.cmV(u[t],h,o,f,j,x,i)
x=r
break}}}if(t===v.b)throw B.l(A.c6(p))}}}q=8-g&7
o[0]=D.c.R(o[0],q)
o[1]=o[1]-q
for(;w=o[1],w>0;){v=e[D.c.eS(o[0],14-w)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cmV(v.b,h,o,f,j,x,i)}else throw B.l(A.c6(p))}if(x!==i)throw B.l(A.c6("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
cmV(d,e,f,g,h,i,j){var x,w,v,u,t,s="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)A.cmU(f,g)
x=f[1]-8
f[1]=x
w=D.c.nZ(f[0],x)&255
if(i+w>j)throw B.l(A.c6(s))
v=h[i-1]
for(x=h.$flags|0;u=w-1,w>0;w=u,i=t){t=i+1
x&2&&B.B(h)
h[i]=v}}else{if(i<j){h.toString
t=i+1
h.$flags&2&&B.B(h)
h[i]=d}else throw B.l(A.c6(s))
i=t}return i},
cRB(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n="Error in Huffman-encoded data (invalid code table entry)."
for(x=y.t,w=y.p;e<=f;++e){v=d[e]
u=v>>>6
t=v&63
if(D.c.hB(u,t)!==0)throw B.l(A.c6(n))
if(t>14){s=g[D.c.fZ(u,t-14)]
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
cRF(d,e,f,g,h){var x,w,v,u,t,s="Error in Huffman-encoded data (unexpected end of code table data).",r="Error in Huffman-encoded data (code table is longer than expected).",q=d.d,p=B.a([0,0],y.t)
for(x=g+1;f<=g;++f){if(d.d-q>e)throw B.l(A.c6(s))
w=A.cw8(6,p,d)
h[f]=w
if(w===63){if(d.d-q>e)throw B.l(A.c6(s))
v=A.cw8(8,p,d)+6
if(f+v>x)throw B.l(A.c6(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}else if(w>=59){v=w-59+2
if(f+v>x)throw B.l(A.c6(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}}A.cRC(h)},
cRC(d){var x,w,v,u,t,s=B.bJ(59,0,!1,y.p)
for(x=0;x<65537;++x){w=d[x]
s[w]=s[w]+1}for(v=0,x=58;x>0;--x,v=u){u=v+s[x]>>>1
s[x]=v}for(x=0;x<65537;++x){t=d[x]
if(t>0){w=s[t]
s[t]=w+1
d[x]=(t|w<<6)>>>0}}},
cmU(d,e){d[0]=((d[0]<<8|e.dg())&-1)>>>0
d[1]=(d[1]+8&-1)>>>0},
cw8(d,e,f){var x
for(;x=e[1],x<d;){e[0]=((e[0]<<8|J.v(f.a,f.d++))&-1)>>>0
e[1]=(e[1]+8&-1)>>>0}x-=d
e[1]=x
return(D.c.nZ(e[0],x)&D.c.eq(1,d)-1)>>>0},
anN:function anN(){this.b=this.a=0
this.c=null},
cRG(d){var x=A.cQ(d,!1,null,0)
if(x.an()!==20000630)return!1
if(x.dg()!==2)return!1
if((x.rG()&4294967289)>>>0!==0)return!1
return!0},
b9H:function b9H(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
cxq(d,e,f){var x=new A.aqI(d,B.a([],y.Q),B.I(y.N,y.n),C.Is,e)
x.aSR(d,e,f)
return x},
Zq:function Zq(){},
b9I:function b9I(d,e){this.a=d
this.b=e},
aqI:function aqI(d,e,f,g,h){var _=this
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
bhg:function bhg(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
aLE:function aLE(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
bhh:function bhh(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
bhi:function bhi(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
aqJ:function aqJ(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
b9G:function b9G(){this.a=null},
cwD(d){var x=new Uint8Array(d*3)
return new A.a_1(A.cSN(d),d,null,new A.uh(x,d,3))},
cSM(d){return new A.a_1(d.a,d.b,d.c,A.cyX(d.d))},
cSN(d){var x
for(x=1;x<=8;++x)if(D.c.eq(1,x)>=d)return x
return 0},
a_1:function a_1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_2:function a_2(){},
aqK:function aqK(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=$},
apk:function apk(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
bdx:function bdx(){var _=this
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
cwX(d){var x,w,v,u,t,s
if(d.bO()!==0)return null
x=d.bO()
if(x>=3)return null
w=C.aoT[x]
if(w===C.IU)return null
v=d.bO()
u=J.kp(v,y.Y)
for(t=0;t<v;++t){J.v(d.a,d.d++)
s=J.v(d.a,d.d++)
J.v(d.a,d.d++);++d.d
d.bO()
d.bO()
u[t]=new A.aq7(s,d.an(),d.an())}return new A.bfY(w,v,u)},
OC:function OC(d,e){this.a=d
this.b=e},
bfY:function bfY(d,e,f){this.c=d
this.d=e
this.e=f},
aq7:function aq7(d,e,f){this.b=d
this.d=e
this.e=f},
bfW:function bfW(d,e,f,g,h,i,j,k,l){var _=this
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
bfX:function bfX(){this.b=this.a=null},
ajH:function ajH(d,e,f){this.e=d
this.f=e
this.r=f},
H5:function H5(){},
H6:function H6(d){this.a=d},
a_s:function a_s(d){this.a=d},
bhH:function bhH(){this.d=null},
C5:function C5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.y=_.x=_.w=_.r=_.f=_.e=$},
cxF(){var x=B.bJ(4,null,!1,y.a7),w=B.a([],y.cB),v=y.l,u=J.C2(0,v)
v=J.C2(0,v)
return new A.bhJ(new A.O8(B.I(y.N,y.P)),x,w,u,v,B.a([],y.E))},
bhJ:function bhJ(d,e,f,g,h,i){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i},
bhK:function bhK(d,e){this.a=d
this.b=e},
TT:function TT(d){this.a=d
this.b=0},
aqX:function aqX(d,e){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=d
_.z=e},
bhN:function bhN(){this.r=this.f=$},
aqY:function aqY(d,e,f,g,h,i,j,k){var _=this
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
aqW:function aqW(){},
bhI:function bhI(d,e){this.a=d
this.b=e},
bhL:function bhL(d,e,f,g,h,i,j,k,l){var _=this
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
Qt:function Qt(d,e){this.a=d
this.b=e},
a3b:function a3b(d,e){this.a=d
this.b=e},
a3c:function a3c(){},
aqL:function aqL(d,e,f,g,h,i,j,k,l){var _=this
_.y=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
cxr(){var x=y.N
return new A.bhj(B.I(x,x),B.a([],y.d),B.a([],y.t))},
D5:function D5(d,e){this.a=d
this.b=e},
bsL:function bsL(){},
bhj:function bhj(d,e,f){var _=this
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
awy:function awy(d){var _=this
_.a=d
_.c=_.b=0
_.d=$
_.e=0},
awz:function awz(d,e){this.a=d
this.b=e},
bsJ:function bsJ(d,e){var _=this
_.a=null
_.b=d
_.c=0
_.d=e
_.e=$
_.f=0
_.r=!1
_.w=null},
D6:function D6(d,e){this.a=d
this.b=e},
IP:function IP(d){this.b=this.a=0
this.e=d},
bsM:function bsM(d){this.b=this.a=null
this.c=d},
bsN:function bsN(){},
a3v:function a3v(d){this.a=d
this.c=$},
czD(d){var x=new A.btJ(B.I(y.p,y.a2))
x.aTl(d)
return x},
cWX(b6,b7,b8,b9,c0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=B.I(y.p,y.aG)
for(x=c0.length,w=0;v=c0.length,w<v;c0.length===x||(0,B.R)(c0),++w){u=c0[w]
b5.m(0,u.a,u)}if(b7===8)t=1
else t=b7===16?2:-1
s=A.hF(b4,b4,C.a7,0,C.bl,b9,b4,0,v,b4,C.a7,b8,!1)
if(t===-1)throw B.l(A.c6("PSD: unsupported bit depth: "+B.o(b7)))
r=b5.i(0,0)
q=b5.i(0,1)
p=b5.i(0,2)
o=b5.i(0,-1)
n=-t
for(x=s.a,x=x.ga1(x),m=v>=5,l=t===1,k=v===4,j=v>=2,v=v>=4;x.q();){i=x.gL(x)
n+=t
switch(b6){case C.a2b:h=r.c
h===$&&B.b()
i.saw(0,l?h[n]:(h[n]<<8|h[n+1])>>>8)
h=q.c
h===$&&B.b()
i.saK(l?h[n]:(h[n]<<8|h[n+1])>>>8)
h=p.c
h===$&&B.b()
i.saM(0,l?h[n]:(h[n]<<8|h[n+1])>>>8)
if(v){h=o.c
h===$&&B.b()
h=l?h[n]:(h[n]<<8|h[n+1])>>>8}else h=255
i.saN(0,h)
if(i.gaN(i)!==0){i.saw(0,(i.gaw(i)+i.gaN(i)-255)*255/i.gaN(i))
i.saK((i.gaK()+i.gaN(i)-255)*255/i.gaN(i))
i.saM(0,(i.gaM(i)+i.gaN(i)-255)*255/i.gaN(i))}break
case C.a2d:h=r.c
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
i.saM(0,a9[2])
i.saN(0,d)
break
case C.a2a:h=r.c
h===$&&B.b()
b0=l?h[n]:(h[n]<<8|h[n+1])>>>8
if(j){h=o.c
h===$&&B.b()
d=l?h[n]:(h[n]<<8|h[n+1])>>>8}else d=255
i.saw(0,b0)
i.saK(b0)
i.saM(0,b0)
i.saN(0,d)
break
case C.a2c:h=r.c
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
a9=A.cFw(255-b1,255-b2,255-a0,255-b3)
i.saw(0,a9[0])
i.saK(a9[1])
i.saM(0,a9[2])
i.saN(0,d)
break
default:throw B.l(A.c6("Unhandled color mode: "+B.o(b6)))}}return s},
uo:function uo(d,e){this.a=d
this.b=e},
btJ:function btJ(d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=$
_.y=null
_.z=d
_.at=_.as=$},
btI:function btI(){this.a=null},
ax3:function ax3(){},
yZ:function yZ(d,e,f){this.a=d
this.b=e
this.c=f},
m2:function m2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3y:function a3y(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
QL:function QL(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
ax2:function ax2(){this.y=this.b=this.a=0},
z_(d,e){return(C.tP[d>>>8]<<17|C.tP[e>>>8]<<16|C.tP[d&255]<<1|C.tP[e&255])>>>0},
rz:function rz(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
btK:function btK(){this.b=this.a=null},
aBm:function aBm(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
o6:function o6(d,e){this.a=d
this.b=e},
bFB:function bFB(){this.a=null
this.b=$},
bGm:function bGm(d){this.a=d
this.c=this.b=0},
aBr:function aBr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
cph(d,e,f){var x=new A.bGo(e,f,d),w=y.s
x.e=B.bJ(e,null,!1,w)
x.f=B.bJ(e,null,!1,w)
return x},
bGo:function bGo(d,e,f){var _=this
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
aBs:function aBs(d,e,f,g){var _=this
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
rR:function rR(d,e){this.a=d
this.b=e},
bGp:function bGp(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
cy_(){return new A.bje(new Uint8Array(4096))},
bje:function bje(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
bGn:function bGn(){this.a=null
this.c=$},
cpx(d,e){var x=new Int32Array(4),w=new Int32Array(4),v=new Int8Array(4),u=new Int8Array(4),t=B.bJ(8,null,!1,y.ak),s=B.bJ(4,null,!1,y.Z)
return new A.bJH(d,e,new A.bJN(),new A.bJR(),new A.bJJ(x,w),new A.bJT(v,u),t,s,new Uint8Array(4))},
cCb(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
bJH:function bJH(d,e,f,g,h,i,j,k,l){var _=this
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
_.bY=null
_.aX=_.av=$
_.bW=null
_.cO=$},
bJU:function bJU(){},
cC8(d){var x=new A.a7p(d)
x.b=254
x.c=0
x.d=-8
return x},
a7p:function a7p(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
eI(d,e,f){return D.c.l6(D.c.R(d+2*e+f+2,2),32)},
d07(d){var x,w=B.a([A.eI(J.v(d.a,d.d+-33),J.v(d.a,d.d+-32),J.v(d.a,d.d+-31)),A.eI(J.v(d.a,d.d+-32),J.v(d.a,d.d+-31),J.v(d.a,d.d+-30)),A.eI(J.v(d.a,d.d+-31),J.v(d.a,d.d+-30),J.v(d.a,d.d+-29)),A.eI(J.v(d.a,d.d+-30),J.v(d.a,d.d+-29),J.v(d.a,d.d+-28))],y.t)
for(x=0;x<4;++x)d.A5(x*32,4,w)},
d0_(d){var x=J.v(d.a,d.d+-33),w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95),s=A.cb(d,null,0),r=s.Qt(),q=A.eI(x,w,v)
r.$flags&2&&B.B(r)
r[0]=16843009*q
s.d+=32
q=s.Qt()
r=A.eI(w,v,u)
q.$flags&2&&B.B(q)
q[0]=16843009*r
s.d+=32
r=s.Qt()
q=A.eI(v,u,t)
r.$flags&2&&B.B(r)
r[0]=16843009*q
s.d+=32
q=s.Qt()
r=A.eI(u,t,t)
q.$flags&2&&B.B(q)
q[0]=16843009*r},
d_Y(d){var x,w,v,u
for(x=4,w=0;w<4;++w)x+=J.v(d.a,d.d+(w-32))+J.v(d.a,d.d+(-1+w*32))
x=D.c.R(x,3)
for(w=0;w<4;++w){v=d.a
u=d.d+w*32
J.tj(v,u,u+4,x)}},
cpy(d,e){var x,w,v,u,t,s=255-J.v(d.a,d.d+-33)
for(x=0,w=0;w<e;++w){v=s+J.v(d.a,d.d+(x-1))
for(u=0;u<e;++u){t=$.pz()[v+J.v(d.a,d.d+(-32+u))]
J.bZ(d.a,d.d+(x+u),t)}x+=32}},
d05(d){A.cpy(d,4)},
d06(d){A.cpy(d,8)},
d04(d){A.cpy(d,16)},
d03(d){var x,w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95),s=J.v(d.a,d.d+-33),r=J.v(d.a,d.d+-32),q=J.v(d.a,d.d+-31),p=J.v(d.a,d.d+-30),o=J.v(d.a,d.d+-29)
d.m(0,96,A.eI(v,u,t))
x=A.eI(w,v,u)
d.m(0,97,x)
d.m(0,64,x)
x=A.eI(s,w,v)
d.m(0,98,x)
d.m(0,65,x)
d.m(0,32,x)
x=A.eI(r,s,w)
d.m(0,99,x)
d.m(0,66,x)
d.m(0,33,x)
d.m(0,0,x)
x=A.eI(q,r,s)
d.m(0,67,x)
d.m(0,34,x)
d.m(0,1,x)
x=A.eI(p,q,r)
d.m(0,35,x)
d.m(0,2,x)
d.m(0,3,A.eI(o,p,q))},
d02(d){var x,w=J.v(d.a,d.d+-32),v=J.v(d.a,d.d+-31),u=J.v(d.a,d.d+-30),t=J.v(d.a,d.d+-29),s=J.v(d.a,d.d+-28),r=J.v(d.a,d.d+-27),q=J.v(d.a,d.d+-26),p=J.v(d.a,d.d+-25)
d.m(0,0,A.eI(w,v,u))
x=A.eI(v,u,t)
d.m(0,32,x)
d.m(0,1,x)
x=A.eI(u,t,s)
d.m(0,64,x)
d.m(0,33,x)
d.m(0,2,x)
x=A.eI(t,s,r)
d.m(0,96,x)
d.m(0,65,x)
d.m(0,34,x)
d.m(0,3,x)
x=A.eI(s,r,q)
d.m(0,97,x)
d.m(0,66,x)
d.m(0,35,x)
x=A.eI(r,q,p)
d.m(0,98,x)
d.m(0,67,x)
d.m(0,99,A.eI(q,p,p))},
d09(d){var x=J.v(d.a,d.d+-1),w=J.v(d.a,d.d+31),v=J.v(d.a,d.d+63),u=J.v(d.a,d.d+-33),t=J.v(d.a,d.d+-32),s=J.v(d.a,d.d+-31),r=J.v(d.a,d.d+-30),q=J.v(d.a,d.d+-29),p=D.c.l6(D.c.R(u+t+1,1),32)
d.m(0,65,p)
d.m(0,0,p)
p=D.c.l6(D.c.R(t+s+1,1),32)
d.m(0,66,p)
d.m(0,1,p)
p=D.c.l6(D.c.R(s+r+1,1),32)
d.m(0,67,p)
d.m(0,2,p)
d.m(0,3,D.c.l6(D.c.R(r+q+1,1),32))
d.m(0,96,A.eI(v,w,x))
d.m(0,64,A.eI(w,x,u))
p=A.eI(x,u,t)
d.m(0,97,p)
d.m(0,32,p)
p=A.eI(u,t,s)
d.m(0,98,p)
d.m(0,33,p)
p=A.eI(t,s,r)
d.m(0,99,p)
d.m(0,34,p)
d.m(0,35,A.eI(s,r,q))},
d08(d){var x,w=J.v(d.a,d.d+-32),v=J.v(d.a,d.d+-31),u=J.v(d.a,d.d+-30),t=J.v(d.a,d.d+-29),s=J.v(d.a,d.d+-28),r=J.v(d.a,d.d+-27),q=J.v(d.a,d.d+-26),p=J.v(d.a,d.d+-25)
d.m(0,0,D.c.l6(D.c.R(w+v+1,1),32))
x=D.c.l6(D.c.R(v+u+1,1),32)
d.m(0,64,x)
d.m(0,1,x)
x=D.c.l6(D.c.R(u+t+1,1),32)
d.m(0,65,x)
d.m(0,2,x)
x=D.c.l6(D.c.R(t+s+1,1),32)
d.m(0,66,x)
d.m(0,3,x)
d.m(0,32,A.eI(w,v,u))
x=A.eI(v,u,t)
d.m(0,96,x)
d.m(0,33,x)
x=A.eI(u,t,s)
d.m(0,97,x)
d.m(0,34,x)
x=A.eI(t,s,r)
d.m(0,98,x)
d.m(0,35,x)
d.m(0,67,A.eI(s,r,q))
d.m(0,99,A.eI(r,q,p))},
d00(d){var x,w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95)
d.m(0,0,D.c.l6(D.c.R(w+v+1,1),32))
x=D.c.l6(D.c.R(v+u+1,1),32)
d.m(0,32,x)
d.m(0,2,x)
x=D.c.l6(D.c.R(u+t+1,1),32)
d.m(0,64,x)
d.m(0,34,x)
d.m(0,1,A.eI(w,v,u))
x=A.eI(v,u,t)
d.m(0,33,x)
d.m(0,3,x)
x=A.eI(u,t,t)
d.m(0,65,x)
d.m(0,35,x)
d.m(0,99,t)
d.m(0,98,t)
d.m(0,97,t)
d.m(0,96,t)
d.m(0,66,t)
d.m(0,67,t)},
d_Z(d){var x=J.v(d.a,d.d+-1),w=J.v(d.a,d.d+31),v=J.v(d.a,d.d+63),u=J.v(d.a,d.d+95),t=J.v(d.a,d.d+-33),s=J.v(d.a,d.d+-32),r=J.v(d.a,d.d+-31),q=J.v(d.a,d.d+-30),p=D.c.l6(D.c.R(x+t+1,1),32)
d.m(0,34,p)
d.m(0,0,p)
p=D.c.l6(D.c.R(w+x+1,1),32)
d.m(0,66,p)
d.m(0,32,p)
p=D.c.l6(D.c.R(v+w+1,1),32)
d.m(0,98,p)
d.m(0,64,p)
d.m(0,96,D.c.l6(D.c.R(u+v+1,1),32))
d.m(0,3,A.eI(s,r,q))
d.m(0,2,A.eI(t,s,r))
p=A.eI(x,t,s)
d.m(0,35,p)
d.m(0,1,p)
p=A.eI(w,x,t)
d.m(0,67,p)
d.m(0,33,p)
p=A.eI(v,w,x)
d.m(0,99,p)
d.m(0,65,p)
d.m(0,97,A.eI(u,v,w))},
d0k(d){var x
for(x=0;x<16;++x)d.rB(x*32,16,d,-32)},
d0i(d){var x,w,v,u,t
for(x=0,w=16;w>0;--w){v=J.v(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.tj(u,t,t+16,v)
x+=32}},
bJL(d,e){var x,w,v
for(x=0;x<16;++x){w=e.a
v=e.d+x*32
J.tj(w,v,v+16,d)}},
d0a(d){var x,w
for(x=16,w=0;w<16;++w)x+=J.v(d.a,d.d+(-1+w*32))+J.v(d.a,d.d+(w-32))
A.bJL(D.c.R(x,5),d)},
d0c(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.v(d.a,d.d+(-1+w*32))
A.bJL(D.c.R(x,4),d)},
d0b(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.v(d.a,d.d+(w-32))
A.bJL(D.c.R(x,4),d)},
d0d(d){A.bJL(128,d)},
d0l(d){var x
for(x=0;x<8;++x)d.rB(x*32,8,d,-32)},
d0j(d){var x,w,v,u,t
for(x=0,w=0;w<8;++w){v=J.v(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.tj(u,t,t+8,v)
x+=32}},
bJM(d,e){var x,w,v
for(x=0;x<8;++x){w=e.a
v=e.d+x*32
J.tj(w,v,v+8,d)}},
d0e(d){var x,w
for(x=8,w=0;w<8;++w)x+=J.v(d.a,d.d+(w-32))+J.v(d.a,d.d+(-1+w*32))
A.bJM(D.c.R(x,4),d)},
d0f(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.v(d.a,d.d+(w-32))
A.bJM(D.c.R(x,3),d)},
d0g(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.v(d.a,d.d+(-1+w*32))
A.bJM(D.c.R(x,3),d)},
d0h(d){A.bJM(128,d)},
Em(d,e,f,g,h){var x=e+f+g*32,w=J.v(d.a,d.d+x)+D.c.R(h,3)
if(!((w&-256)>>>0===0))w=w<0?0:255
d.m(0,x,w)},
bJK(d,e,f,g,h){A.Em(d,0,0,e,f+g)
A.Em(d,0,1,e,f+h)
A.Em(d,0,2,e,f-h)
A.Em(d,0,3,e,f-g)},
d01(){var x,w,v,u
if(!$.cC9){for(x=-255;x<=255;++x){w=$.aUO()
v=255+x
u=x<0?-x:x
w.$flags&2&&B.B(w)
w[v]=u
u=$.cl7()
w=D.c.R(w[v],1)
u.$flags&2&&B.B(u)
u[v]=w}for(x=-1020;x<=1020;++x){w=$.cl8()
if(x<-128)v=-128
else v=x>127?127:x
w.$flags&2&&B.B(w)
w[1020+x]=v}for(x=-112;x<=112;++x){w=$.aUP()
if(x<-16)v=-16
else v=x>15?15:x
w.$flags&2&&B.B(w)
w[112+x]=v}for(x=-255;x<=510;++x){w=$.pz()
if(x<0)v=0
else v=x>255?255:x
w.$flags&2&&B.B(w)
w[255+x]=v}$.cC9=!0}},
bJI:function bJI(){},
d_X(){var x,w=J.iZ(3,y.D)
for(x=0;x<3;++x)w[x]=new Uint8Array(11)
return new A.a7o(w)},
d0A(){var x,w,v,u,t=new Uint8Array(3),s=J.iZ(4,y.cm)
for(x=y.V,w=0;w<4;++w){v=J.iZ(8,x)
for(u=0;u<8;++u)v[u]=A.d_X()
s[w]=v}D.A.kZ(t,0,3,255)
return new A.bJS(t,s)},
bJN:function bJN(){this.d=$},
bJR:function bJR(){this.b=null},
bJT:function bJT(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
a7o:function a7o(d){this.a=d},
bJS:function bJS(d,e){this.a=d
this.b=e},
bJJ:function bJJ(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
Ks:function Ks(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
aCj:function aCj(){this.b=this.a=0},
aCl:function aCl(d,e,f){this.a=d
this.b=e
this.c=f},
aCk:function aCk(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
aCm:function aCm(d,e,f){this.a=d
this.b=e
this.c=f},
cpz(d,e){var x,w=B.a([],y.A),v=B.a([],y.F),u=new Uint32Array(2),t=new A.aCh(d,u)
u=t.d=J.d3(D.bq.gag(u),0,null)
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
return new A.a7q(t,e,w,v)},
En(d,e){return D.c.R(d+D.c.eq(1,e)-1,e)},
a7q:function a7q(d,e,f,g){var _=this
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
aqM:function aqM(d,e,f,g){var _=this
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
aCh:function aCh(d,e){var _=this
_.a=0
_.b=d
_.c=e
_.d=$},
bJO:function bJO(d,e){this.a=d
this.b=e},
bJP(d,e,f){var x=d[e]
d.$flags&2&&B.B(d)
d[e]=(((x&4278255360)>>>0)+((f&4278255360)>>>0)&4278255360|(x&16711935)+(f&16711935)&16711935)>>>0},
zA(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
Ku(d){if(d<0)return 0
if(d>255)return 255
return d},
bJQ(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
d0m(d,e,f){return 4278190080},
d0n(d,e,f){return e},
d0s(d,e,f){return d[f]},
d0t(d,e,f){return d[f+1]},
d0u(d,e,f){return d[f-1]},
d0v(d,e,f){var x=d[f]
return A.zA(A.zA(e,d[f+1]),x)},
d0w(d,e,f){return A.zA(e,d[f-1])},
d0x(d,e,f){return A.zA(e,d[f])},
d0y(d,e,f){return A.zA(d[f-1],d[f])},
d0z(d,e,f){return A.zA(d[f],d[f+1])},
d0o(d,e,f){var x=d[f-1],w=d[f],v=d[f+1]
return A.zA(A.zA(e,x),A.zA(w,v))},
d0p(d,e,f){var x=d[f],w=d[f-1]
return A.bJQ(x>>>24,e>>>24,w>>>24)+A.bJQ(x>>>16&255,e>>>16&255,w>>>16&255)+A.bJQ(x>>>8&255,e>>>8&255,w>>>8&255)+A.bJQ(x&255,e&255,w&255)<=0?x:e},
d0q(d,e,f){var x=d[f],w=d[f-1]
return(A.Ku((e>>>24)+(x>>>24)-(w>>>24))<<24|A.Ku((e>>>16&255)+(x>>>16&255)-(w>>>16&255))<<16|A.Ku((e>>>8&255)+(x>>>8&255)-(w>>>8&255))<<8|A.Ku((e&255)+(x&255)-(w&255)))>>>0},
d0r(d,e,f){var x,w,v,u=d[f],t=d[f-1],s=A.zA(e,u)
u=s>>>24
x=s>>>16&255
w=s>>>8&255
v=s>>>0&255
return(A.Ku(u+D.c.b7(u-(t>>>24),2))<<24|A.Ku(x+D.c.b7(x-(t>>>16&255),2))<<16|A.Ku(w+D.c.b7(w-(t>>>8&255),2))<<8|A.Ku(v+D.c.b7(v-(t&255),2)))>>>0},
Kt:function Kt(d,e){this.a=d
this.b=e},
aCi:function aCi(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
bKE:function bKE(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
a7F:function a7F(){},
aqN:function aqN(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=$
_.r=1
_.x=_.w=$},
cwT(){var x=new Uint8Array(128),w=new Int16Array(128)
x=new A.aq5(x,w,new Int16Array(128))
x.a7A(0)
return x},
cSR(){var x,w=J.iZ(5,y.x)
for(x=0;x<5;++x)w[x]=A.cwT()
return new A.a_8(w)},
aq5:function aq5(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$
_.f=_.e=0},
a_8:function a_8(d){this.a=d},
SV:function SV(d,e){this.a=d
this.b=e},
aCK:function aCK(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
aqO:function aqO(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
bKF:function bKF(){this.b=this.a=null},
cwW(d){return new A.a_u(d.a,d.b,D.A.l9(d.c,0))},
bfV:function bfV(d,e){this.a=d
this.b=e},
a_u:function a_u(d,e,f){this.a=d
this.b=e
this.c=f},
hF(d,e,f,g,h,i,j,k,l,m,n,o,p){var x,w=new A.BM(null,null,null,d,k,h,g,0)
w.gl0().push(w)
w.c=j
if(e!=null)w.e=A.Zj(e)
x=!1
if(m==null)if(p)x=w.gdv()===C.ff||w.gdv()===C.h3||w.gdv()===C.h4||w.gdv()===C.a7||w.gdv()===C.cc
w.akp(o,i,f,l,x?w.aYj(f,n,l):m)
return w},
aqh(d,e,f,g){var x,w,v,u=null,t=d.e
t=t==null?u:A.Zj(t)
x=d.c
x=x==null?u:A.cwW(x)
w=d.w
v=d.r
t=new A.BM(u,x,t,u,v,w,d.y,d.z)
t.aT6(d,e,f,g)
return t},
BL(d,e,f){var x,w,v,u,t=null,s=d.a
s=s==null?t:s.qY(0,f)
x=d.e
x=x==null?t:A.Zj(x)
w=d.c
w=w==null?t:A.cwW(w)
v=d.w
u=d.r
s=new A.BM(s,w,x,t,u,v,d.y,d.z)
s.aT5(d,e,f)
return s},
ap9:function ap9(d,e){this.a=d
this.b=e},
BM:function BM(d,e,f,g,h,i,j,k){var _=this
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
bgy:function bgy(d,e){this.a=d
this.b=e},
bgx:function bgx(){},
lQ:function lQ(){},
cTo(d,e,f){return new A.OL(new Uint16Array(d*e*f),d,e,f)},
OL:function OL(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
cTp(d,e,f){return new A.OM(new Float32Array(d*e*f),d,e,f)},
OM:function OM(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a_y:function a_y(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a_z:function a_z(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a_A:function a_A(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a_B:function a_B(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
ON:function ON(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
OO:function OO(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
OP:function OP(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
cTq(d,e,f){return new A.OQ(new Uint32Array(d*e*f),d,e,f)},
OQ:function OQ(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
OR:function OR(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
cxa(d,e,f){return new A.OS(new Uint8Array(d*e*f),null,d,e,f)},
OS:function OS(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
aqP:function aqP(d,e){this.a=d
this.b=e},
bqn:function bqn(){},
avg:function avg(d,e,f){this.c=d
this.a=e
this.b=f},
avh:function avh(d,e,f){this.c=d
this.a=e
this.b=f},
avi:function avi(d,e,f){this.c=d
this.a=e
this.b=f},
avj:function avj(d,e,f){this.c=d
this.a=e
this.b=f},
avk:function avk(d,e,f){this.c=d
this.a=e
this.b=f},
avl:function avl(d,e,f){this.c=d
this.a=e
this.b=f},
avm:function avm(d,e,f){this.c=d
this.a=e
this.b=f},
a2b:function a2b(d,e,f){this.c=d
this.a=e
this.b=f},
cyX(d){return new A.uh(new Uint8Array(B.bU(d.c)),d.a,d.b)},
uh:function uh(d,e,f){this.c=d
this.a=e
this.b=f},
co2(d){return new A.Ih(-1,0,-d.c,d)},
Ih:function Ih(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
co3(d){return new A.Ii(-1,0,-d.c,d)},
Ii:function Ii(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
co4(d){return new A.Ij(-1,0,-d.c,d)},
Ij:function Ij(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
co5(d){return new A.Ik(-1,0,-d.c,d)},
Ik:function Ik(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
co6(d){return new A.Il(-1,0,-d.c,d)},
Il:function Il(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
co7(d){return new A.Im(-1,0,-d.c,d)},
Im:function Im(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ui(d,e,f,g,h){d.ho(0,e-1,f)
return new A.avz(d,e,e+g-1,f+h-1)},
avz:function avz(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g},
a2p(d){return new A.In(-1,0,0,-1,0,d)},
In:function In(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
co8(d){return new A.Io(-1,0,-d.c,d)},
Io:function Io(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2q(d){return new A.Ip(-1,0,0,-2,0,d)},
Ip:function Ip(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
co9(d){return new A.Iq(-1,0,-d.c,d)},
Iq:function Iq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2r(d){return new A.Ir(-1,0,0,-(d.c<<2>>>0),d)},
Ir:function Ir(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bqD(d){return new A.Is(-1,0,-d.c,d)},
Is:function Is(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fm:function fm(){},
daF(d,e){switch(e.a){case 0:A.aUk(d)
break
case 1:A.daJ(d)
break
case 2:A.daH(d)
break}return d},
daJ(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.gl0().length
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
if(l==null)l=new A.fm()
t=u.a
k=t==null?i:t.el(m,o,i)
if(k==null)k=new A.fm()
j=l.gef(l)
l.sef(0,k.gef(k))
k.sef(0,j)}else for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.el(m,n,i)
if(l==null)l=new A.fm()
t=u.a
k=t==null?i:t.el(m,o,i)
if(k==null)k=new A.fm()
j=l.gaw(l)
l.saw(0,k.gaw(k))
k.saw(0,j)
j=l.gaK()
l.saK(k.gaK())
k.saK(j)
j=l.gaM(l)
l.saM(0,k.gaM(k))
k.saM(0,j)
j=l.gaN(l)
l.saN(0,k.gaN(k))
k.saN(0,j)}}return d},
aUk(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=d.gl0().length
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
if(k==null)k=new A.fm()
t=u.a
j=t==null?h:t.el(m,n,h)
if(j==null)j=new A.fm()
i=k.gef(k)
k.sef(0,j.gef(j))
j.sef(0,i)}else for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.el(l,n,h)
if(k==null)k=new A.fm()
t=u.a
j=t==null?h:t.el(m,n,h)
if(j==null)j=new A.fm()
i=k.gaw(k)
k.saw(0,j.gaw(j))
j.saw(0,i)
i=k.gaK()
k.saK(j.gaK())
j.saK(i)
i=k.gaM(k)
k.saM(0,j.gaM(j))
j.saM(0,i)
i=k.gaN(k)
k.saN(0,j.gaN(j))
j.saN(0,i)}}return d},
daH(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=d.gl0().length
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
if(j==null)j=new A.fm()
t=u.a
i=t==null?g:t.el(l,o,g)
if(i==null)i=new A.fm()
h=j.gef(j)
j.sef(0,i.gef(i))
i.sef(0,h)}else for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.el(k,m,g)
if(j==null)j=new A.fm()
t=u.a
i=t==null?g:t.el(l,o,g)
if(i==null)i=new A.fm()
h=j.gaw(j)
j.saw(0,i.gaw(i))
i.saw(0,h)
h=j.gaK()
j.saK(i.gaK())
i.saK(h)
h=j.gaM(j)
j.saM(0,i.gaM(i))
i.saM(0,h)
h=j.gaN(j)
j.saN(0,i.gaN(i))
i.saN(0,h)}}return d},
baV:function baV(d,e){this.a=d
this.b=e},
c6(d){return new A.aqn(d)},
aqn:function aqn(d){this.a=d},
cQ(d,e,f,g){return new A.lS(d,g,f==null?J.bl(d):g+f,g,e)},
cb(d,e,f){var x=d.a,w=d.d+f,v=e==null?d.c:w+e
return new A.lS(x,d.b,v,w,d.e)},
lS:function lS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
boz:function boz(d){var _=this
_.a=$
_.b=10
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=d
_.ax=_.at=$},
q8(d,e){return new A.av2(d,new Uint8Array(e))},
av2:function av2(d,e){this.a=0
this.b=d
this.c=e},
btR:function btR(){},
nQ:function nQ(d,e){this.a=d
this.b=e},
bww:function bww(d,e){this.a=d
this.b=e},
bwt:function bwt(d,e){this.a=d
this.b=e},
bIg:function bIg(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
cyp(d){return new Int8Array(d)},
d_G(d){throw B.l(B.aF("Uint64List not supported on the web."))},
cTJ(d,e,f){return J.clq(d,e,f)},
cBU(d,e){return J.oo(d,e,null)},
cS3(d){return J.aV2(d,0,null)},
cS4(d){return d.a83(0,0,null)},
db1(d){var x,w,v,u,t,s=d.length
for(x=1,w=0,v=0;s>0;){u=3800>s?s:3800
s-=u
for(;--u,u>=0;v=t){t=v+1
x+=d[v]&255
w+=x}x=D.c.ap(x,65521)
w=D.c.ap(w,65521)}return(w<<16|x)>>>0},
xf(d,e){var x,w,v=J.a2(d),u=v.gu(d)
e^=4294967295
for(x=0;u>=8;){w=x+1
e=C.h8[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.h8[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.h8[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.h8[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.h8[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.h8[(e^v.i(d,w))&255]^e>>>8
w=x+1
e=C.h8[(e^v.i(d,x))&255]^e>>>8
x=w+1
e=C.h8[(e^v.i(d,w))&255]^e>>>8
u-=8}if(u>0)do{w=x+1
e=C.h8[(e^v.i(d,x))&255]^e>>>8
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
return B.c(r.bz("public-files").QJ(t,d),$async$Nx)
case 3:if(h.length===0)throw B.l(B.cC("Upload failed"))
u=r.bz("public-files").af4(t)
x=4
return B.c(s.bz("images").jL(0,B.z(["link",u,"occasion",e,"unit",f],y.N,y.X)),$async$Nx)
case 4:v=u
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$Nx,w)},
cr0(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s,r,q
if(m==null)m=0
if(n==null)n=0
if(l==null)l=e.gcZ(0)
if(k==null)k=e.gb5(0)
if(h==null)h=d.gcZ(0)<e.gcZ(0)?d.gcZ(0):e.gcZ(0)
if(g==null)g=d.gb5(0)<e.gb5(0)?d.gb5(0):e.gb5(0)
x=f===C.y3
if(!x&&d.grm())d=d.axY(d.gqb())
w=k/g
v=l/h
u=y.p
t=J.iZ(g,u)
for(s=0;s<g;++s)t[s]=n+D.d.D(s*w)
r=J.iZ(h,u)
for(q=0;q<h;++q)r[q]=m+D.d.D(q*v)
if(x)A.d53(e,d,i,j,h,g,r,t,null,C.G4)
else A.d4G(e,d,i,j,h,g,r,t,f,!1,null,C.G4)
return d},
d53(d,e,f,g,h,i,j,k,l,m){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.el(t,s,x)
if(x==null)x=new A.fm()
e.y3(f+u,v,x)}},
d4G(d,e,f,g,h,i,j,k,l,m,n,o){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.el(t,s,x)
if(x==null)x=new A.fm()
A.dai(e,f+u,v,x,l,!1,n,o)}},
dai(a4,a5,a6,a7,a8,a9,b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
if(!a4.aBw(a5,a6))return a4
if(a8===C.y3||a4.grm())if(a4.aBw(a5,a6)){a4.nW(a5,a6).iX(0,a7)
return a4}x=a7.gix()
w=a7.gii()
v=a7.gir()
u=a7.gu(a7)<4?1:a7.giH()
if(u===0)return a4
t=a4.nW(a5,a6)
s=t.gix()
r=t.gii()
q=t.gir()
p=t.giH()
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
t.six(x*u+s*p*a3)
t.sii(w*u+r*p*a3)
t.sir(v*u+q*p*a3)
t.siH(u+p*a3)
return a4},
dav(d,e,f,g,h,i,j){var x,w=D.d.bc(Math.min(g,h),0,d.gcZ(0)-1),v=D.d.bc(Math.min(i,j),0,d.gb5(0)-1),u=D.d.bc(Math.max(g,h),0,d.gcZ(0)-1),t=D.d.bc(Math.max(i,j),0,d.gb5(0)-1),s=d.a.qq(0,w,v,u-w+1,t-v+1)
for(x=s.a;s.q();)x.iX(0,f)
return d},
cRH(a4,a5,a6,a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=b0<16384,a3=a6>a8?a8:a6
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
if(a2){A.Zr(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.Zr(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.Zr(f,d,v)
a1=v[0]
u&2&&B.B(a4)
a4[j]=a1
a4[i]=v[1]
A.Zr(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}else{A.Zs(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.Zs(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.Zs(f,d,v)
a1=v[0]
u&2&&B.B(a4)
a4[j]=a1
a4[i]=v[1]
A.Zs(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}}if(n){h=j+r
if(a2){A.Zr(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&B.B(a4)
a4[h]=a1}else{A.Zs(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&B.B(a4)
a4[h]=a1}u&2&&B.B(a4)
a4[j]=f}}if((a8&x)>>>0!==0){k=l+m
for(j=l;j<=k;j+=o){i=j+p
if(a2){A.Zr(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&B.B(a4)
a4[i]=n}else{A.Zs(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&B.B(a4)
a4[i]=n}u&2&&B.B(a4)
a4[j]=f}}w=x>>>1}},
Zr(d,e,f){var x,w,v,u,t=$.qI()
t.$flags&2&&B.B(t)
t[0]=d
x=$.th()
w=x[0]
t[0]=e
v=x[0]
u=w+(v&1)+D.c.R(v,1)
f[0]=u
f[1]=u-v},
Zs(d,e,f){var x=d-D.c.R(e,1)&65535
f[1]=x
f[0]=e+x-32768&65535},
cr6(d){var x,w,v,u,t,s,r,q,p,o,n=null
if(A.cxF().QM(d))return new A.aqW()
x=new A.awy(A.cxr())
if(x.Id(d))return x
w=new A.bdx()
w.f=A.cQ(d,!1,n,0)
w.a=new A.apk(B.a([],y.b))
if(w.amA())return w
v=new A.bKF()
if(v.Id(d))return v
u=new A.bGn()
if(u.aqU(A.cQ(d,!1,n,0))!=null)return u
if(A.czD(d).c===943870035)return new A.btI()
if(A.cRG(d))return new A.b9G()
if(A.clU(A.cQ(d,!1,n,0)))return new A.aiJ(!1)
t=new A.bFB()
s=A.cQ(d,!1,n,0)
r=t.a=new A.aBm(C.wH)
r.qi(0,s)
if(r.aBP())return t
q=new A.bfX()
r=A.cQ(d,!1,n,0)
q.a=r
r=A.cwX(r)
q.b=r
if(r!=null)return q
p=new A.btK()
if(p.oz(d)!=null)return p
o=new A.bsM(B.a([],y.T))
if(o.Id(d))return o
return n},
cFQ(d){var x=A.cr6(d)
return x==null?null:x.ny(0,d,null)},
dcC(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if($.cqo==null){x=$.cqo=new Uint8Array(768)
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
a6[r]=a1-h}for(x=$.cqo,v=a5.$flags|0,w=0;w<64;++w){x.toString
u=D.c.R(a6[w]+8,4)
u=x[384+((u&2147483647)-((u&2147483648)>>>0))]
v&2&&B.B(a5)
a5[w]=u}},
db7(d9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=null,d7="ifd0",d8=d9.r
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
r=A.hF(d6,d6,C.a7,0,C.bl,s,d6,0,3,d6,C.a7,t,!1)
r.e=A.Zj(d8)
r.gwU().i(0,d7).sie(0,d6)
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
d0L(d,e,f,g,h,i){A.d0I(i,d,e,f,g,h,!0,i)},
d0M(d,e,f,g,h,i){A.d0J(i,d,e,f,g,h,!0,i)},
d0K(d,e,f,g,h,i){A.d0H(i,d,e,f,g,h,!0,i)},
SU(d,e,f,g,h){var x,w,v
for(x=0;x<g;++x){w=J.v(d.a,d.d+x)
v=J.v(e.a,e.d+x)
J.bZ(f.a,f.d+x,w+v)}},
d0I(d,e,f,g,h,i,j,k){var x,w,v=null,u=h*g,t=h+i,s=A.cQ(d,!1,v,u),r=A.cQ(d,!1,v,u),q=A.cb(r,v,0)
if(h===0){r.m(0,0,J.v(s.a,s.d))
A.SU(A.cb(s,v,1),q,A.cb(r,v,1),e-1,!0)
q.d+=g
s.d+=g
r.d+=g
h=1}for(x=-g,w=e-1;h<t;){A.SU(s,A.cb(q,v,x),r,1,!0)
A.SU(A.cb(s,v,1),q,A.cb(r,v,1),w,!0);++h
q.d+=g
s.d+=g
r.d+=g}},
d0J(d,e,f,g,h,i,j,k){var x=null,w=h*g,v=h+i,u=A.cQ(d,!1,x,w),t=A.cQ(k,!1,x,w),s=A.cb(t,x,0)
if(h===0){t.m(0,0,J.v(u.a,u.d))
A.SU(A.cb(u,x,1),s,A.cb(t,x,1),e-1,!0)
u.d+=g
t.d+=g
h=1}else s.d-=g
for(;h<v;){A.SU(u,s,t,e,!0);++h
s.d+=g
u.d+=g
t.d+=g}},
d0H(d,e,f,g,h,i,j,k){var x,w,v,u,t,s=null,r=h*g,q=h+i,p=A.cQ(d,!1,s,r),o=A.cQ(k,!1,s,r),n=A.cb(o,s,0)
if(h===0){o.m(0,0,J.v(p.a,p.d))
A.SU(A.cb(p,s,1),n,A.cb(o,s,1),e-1,!0)
n.d+=g
p.d+=g
o.d+=g
h=1}for(x=-g;h<q;){A.SU(p,A.cb(n,s,x),o,1,!0)
for(w=1;w<e;++w){v=w-g
u=J.v(n.a,n.d+(w-1))+J.v(n.a,n.d+v)-J.v(n.a,n.d+(v-1))
if((u&4294967040)>>>0===0)t=u
else t=u<0?0:255
v=J.v(p.a,p.d+w)
J.bZ(o.a,o.d+w,v+t)}++h
n.d+=g
p.d+=g
o.d+=g}},
d7X(d){var x="ifd0",w=A.BL(d,!1,!1)
if(!d.gwU().i(0,x).a.a3(0,274)||d.gwU().i(0,x).gie(0)===1)return w
w.e=A.Zj(d.gwU())
w.gwU().i(0,x).sie(0,null)
switch(d.gwU().i(0,x).gie(0)){case 2:return A.aUk(w)
case 3:return A.daF(w,C.akE)
case 4:return A.aUk(A.aUd(w,180))
case 5:return A.aUk(A.aUd(w,90))
case 6:return A.aUd(w,90)
case 7:return A.aUk(A.aUd(w,-90))
case 8:return A.aUd(w,-90)}return w},
d8G(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
d.grm()
if(d.gwU().i(0,"ifd0").a.a3(0,274)&&d.gwU().i(0,"ifd0").gie(0)!==1)d=A.d7X(d)
x=D.d.aZ(e*(d.gb5(0)/d.gcZ(0)))
if(e<=0)e=D.d.aZ(x*(d.gcZ(0)/d.gb5(0)))
if(e===d.gcZ(0)&&x===d.gb5(0))return A.BL(d,!1,!1)
w=new Int32Array(e)
v=d.gcZ(0)/e
for(u=0;u<e;++u)w[u]=D.d.D(u*v)
t=d.gl0().length
for(s=y.g,r=g,q=0;q<t;++q){p=d.x
o=(p===$?d.x=B.a([],s):p)[q]
n=A.aqh(o,x,!0,e)
m=r==null
if(!m)r.nq(n)
if(m)r=n
m=o.a
l=m==null
k=l?g:m.b
j=(k==null?0:k)/x
if((l?g:m.geW())!=null)for(i=0;i<x;++i){h=D.d.D(i*j)
for(u=0;u<e;++u){m=w[u]
l=o.a
if(l==null)m=g
else{m=l.nW(m,h)
m=D.d.D(m.gef(m))}if(m==null)m=0
l=n.a
if(l!=null)l.mz(u,i,m)}}else for(i=0;i<x;++i){h=D.d.D(i*j)
for(u=0;u<e;++u){m=w[u]
l=o.a
m=l==null?g:l.el(m,h,g)
n.y3(u,i,m==null?new A.fm():m)}}}r.toString
return r},
aUd(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=D.c.ap(a8,360)
a7.grm()
if(D.c.ap(a6,90)===0)switch(D.c.b7(a6,90)){case 1:return A.d7c(a7)
case 2:return A.d7a(a7)
case 3:return A.d7b(a7)
default:return A.BL(a7,!1,!1)}x=a6*3.141592653589793/180
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
m=a7.gl0().length
for(u=y.g,l=a5,k=0;k<m;++k){j=a7.x
i=(j===$?a7.x=B.a([],u):j)[k]
t=l==null
h=t?a5:l.WB()
if(h==null){g=D.d.D(s)
h=A.aqh(a7,D.d.D(r),!0,g)}if(t)l=h
for(t=h.a,t=t.ga1(t);t.q();){f=t.gL(t)
e=f.gn6(f)
d=f.gnU(f)
g=e-o
a0=d-n
a1=q+g*w+a0*v
a2=p-g*v+a0*w
g=!1
if(a1>=0)if(a2>=0){a0=i.a
a3=a0==null
a4=a3?a5:a0.a
if(a1<(a4==null?0:a4)){g=a3?a5:a0.b
g=a2<(g==null?0:g)}}if(g)h.y3(e,d,i.aI7(a1,a2,C.anV))}}l.toString
return l},
d7c(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gl0(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.R)(x),++u){t=x[u]
s=v==null
r=s?k:v.WB()
if(r==null){q=t.a
p=q==null
o=p?k:q.b
if(o==null)o=0
q=p?k:q.a
r=A.aqh(t,q==null?0:q,!0,o)}if(s)v=r
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
r.y3(l,m,s==null?new A.fm():s);++l}++m}}v.toString
return v},
d7a(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gl0(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.R)(x),++u){t=x[u]
s=t.a
r=s==null
q=r?k:s.a
p=(q==null?0:q)-1
s=r?k:s.b
o=(s==null?0:s)-1
s=v==null
n=s?k:v.WB()
if(n==null)n=A.BL(t,!0,!0)
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
n.y3(l,m,r==null?new A.fm():r);++l}++m}}v.toString
return v},
d7b(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gl0(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.R)(x),++u){t=x[u]
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
q=A.aqh(t,p==null?0:p,!0,n)}if(s)v=q
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
q.y3(l,m,p==null?new A.fm():p);++l}++m}}v.toString
return v},
ciN(d){var x
d=(d&-d)>>>0
x=d!==0?31:32
if((d&65535)!==0)x-=16
if((d&16711935)!==0)x-=8
if((d&252645135)!==0)x-=4
if((d&858993459)!==0)x-=2
return(d&1431655765)!==0?x-1:x},
ddB(d){$.csA().m(0,0,d)
return $.cKi().i(0,0)},
cGL(d,e,f,g){return(D.c.bc(d,0,255)|D.c.bc(e,0,255)<<8|D.c.bc(f,0,255)<<16|D.c.bc(g,0,255)<<24)>>>0},
v9(d,e,f){var x,w,v,u,t,s=e.gu(e),r=e.gdv(),q=d.geW(),p=q==null?null:q.gdv()
if(p==null)p=d.gdv()
x=d.gu(d)
if(s===1){w=d.gu(d)>2?d.gjQ():d.i(0,0)
e.m(0,0,A.aUb(B.hO(d.i(0,0))?D.d.h1(w):w,p,r))}else if(s<=x)for(v=0;v<s;++v)e.m(0,v,A.aUb(d.i(0,v),p,r))
else if(x===2){u=A.aUb(d.i(0,0),p,r)
if(s===3){e.m(0,0,u)
e.m(0,1,u)
e.m(0,2,u)}else{f=A.aUb(d.i(0,1),p,r)
e.m(0,0,u)
e.m(0,1,u)
e.m(0,2,u)
e.m(0,3,f)}}else{for(v=0;v<x;++v)e.m(0,v,A.aUb(d.i(0,v),p,r))
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
if(f===u&&g===d.gu(d)){if(v)return d.dZ(0)
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
jt(d){return 0.299*d.gaw(d)+0.587*d.gaK()+0.114*d.gaM(d)},
cFw(d,e,f,g){var x=1-g/255
return B.a([D.d.aZ(255*(1-d/255)*x),D.d.aZ(255*(1-e/255)*x),D.d.aZ(255*(1-f/255)*x)],y.t)},
fN(d){var x,w,v,u=$.csz()
u.$flags&2&&B.B(u)
u[0]=d
x=$.cKh()[0]
if(d===0)return x>>>16
if($.hE==null)A.iz()
w=$.cwf.cn()[x>>>23&511]
if(w!==0){v=x&8388607
return w+(v+4095+(v>>>13&1)>>>13)}return A.cS1(x)},
cS1(d){var x,w,v=d>>>16&32768,u=(d>>>23&255)-112,t=d&8388607
if(u<=0){if(u<-10)return v
t|=8388608
x=14-u
return(v|D.c.nZ(t+(D.c.eS(1,x-1)-1)+(D.c.fZ(t,x)&1),x))>>>0}else if(u===143)if(t===0)return v|31744
else{t=t>>>13
w=t===0?1:0
return v|t|w|31744}else{t=t+4095+(t>>>13&1)
if((t&8388608)!==0){++u
t=0}if(u>30)return v|31744
return(v|u<<10|t>>>13)>>>0}},
iz(){var x,w,v,u,t=$.hE
if(t!=null)return t
x=new Uint32Array(65536)
$.hE=J.aV2(D.bq.gag(x),0,null)
t=new Uint16Array(512)
$.cwf.b=t
for(w=0;w<256;++w){v=(w&255)-112
if(v<=0||v>=30){t[w]=0
t[(w|256)>>>0]=0}else{u=v<<10>>>0
t[w]=u
t[(w|256)>>>0]=(u|32768)>>>0}}for(w=0;w<65536;++w)x[w]=A.cS2(w)
t=$.hE
t.toString
return t},
cS2(d){var x,w=d>>>15&1,v=d>>>10&31,u=d&1023
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
C=c[359]
A.ahS.prototype={}
A.bh7.prototype={}
A.bh6.prototype={
gu(d){var x=this.e
x===$&&B.b()
return x-(this.b-this.c)},
gP_(){var x=this.b,w=this.e
w===$&&B.b()
return x>=this.c+w},
i(d,e){return this.a[this.b+e]},
dM(d,e){var x,w
for(x=this.b,w=x+this.gu(0);x<w;++x);return-1},
dg(){return this.a[this.b++]},
l5(d){var x,w,v,u=this,t=u.c,s=u.b-t+t
if(d<0){x=u.e
x===$&&B.b()
w=x-(s-t)}else w=d
v=A.BV(u.a,u.d,w,s)
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
return J.d3(D.A.gag(r),r.byteOffset+t.b,s)}x=t.b
v=x+s
u=r.length
return new Uint8Array(B.bU(J.aVd(r,x,v>u?u:v)))}}
A.bpW.prototype={}
A.bpV.prototype={
b_(d){var x,w,v=this
if(v.a===v.c.length)v.beN()
x=v.c
w=v.a++
x.$flags&2&&B.B(x)
x[w]=d&255},
a0B(d,e){var x,w,v,u,t,s,r=this
if(e==null)e=d.length
for(;x=r.a,w=x+e,v=r.c,u=v.length,w>u;)r.a5v(w-u)
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
mx(d){return this.a0B(d,null)},
bLh(d){var x,w,v,u,t=this,s=d.c
while(!0){x=t.a
w=d.e
w===$&&B.b()
w=x+(w-(d.b-s))
v=t.c
u=v.length
if(!(w>u))break
t.a5v(w-u)}D.A.dN(v,x,x+d.gu(0),d.a,d.b)
t.a=t.a+d.gu(0)},
ih(d){var x=this
if(x.b===1){x.b_(d>>>24&255)
x.b_(d>>>16&255)
x.b_(d>>>8&255)
x.b_(d&255)
return}x.b_(d&255)
x.b_(d>>>8&255)
x.b_(d>>>16&255)
x.b_(d>>>24&255)},
agK(d,e){var x=this
if(d<0)d=x.a+d
if(e==null)e=x.a
else if(e<0)e=x.a+e
return J.d3(D.A.gag(x.c),d,e-d)},
jY(d){return this.agK(d,null)},
a5v(d){var x=d!=null?d>32768?d:32768:32768,w=this.c,v=w.length,u=new Uint8Array((v+x)*2)
D.A.ht(u,0,v,w)
this.c=u},
beN(){return this.a5v(null)},
gu(d){return this.a}}
A.cgr.prototype={
Cu(d,e){var x,w,v,u,t=d.dg(),s=d.dg(),r=t&8
D.c.R(t,3)
if(r!==8)throw B.l(A.W9("Only DEFLATE compression supported: "+r))
if(D.c.ap((t<<8>>>0)+s,31)!==0)throw B.l(A.W9("Invalid FCHECK"))
if((s>>>5&1)!==0){d.an()
throw B.l(A.W9("FDICT Encoding not currently supported"))}x=A.aq4(C.aCJ)
w=A.aq4(C.asP)
v=A.cnX(0,null)
w=new A.bgM(d,v,x,w)
w.b=!0
w.b9B()
u=y.L.a(J.d3(D.A.gag(v.c),0,v.a))
d.an()
return u}}
A.b5c.prototype={
aZu(d){var x,w,v,u,t=this
if(d>4)throw B.l(A.W9("Invalid Deflate Parameter"))
x=t.x
x===$&&B.b()
if(x!==0)t.T7()
x=!0
if(t.c.gP_()){w=t.k3
w===$&&B.b()
if(w===0)x=d!==0&&t.e!==666}if(x){switch($.vx.cn().e){case 0:v=t.aZx(d)
break
case 1:v=t.aZv(d)
break
case 2:v=t.aZw(d)
break
default:v=-1
break}x=v===2
if(x||v===3)t.e=666
if(v===0||x)return 0
if(v===1){if(d===1){t.lq(2,3)
t.G3(256,C.rs)
t.awo()
x=t.cO
x===$&&B.b()
w=t.Z
w===$&&B.b()
if(1+x+10-w<9){t.lq(2,3)
t.G3(256,C.rs)
t.awo()}t.cO=7}else{t.atM(0,0,!1)
if(d===3){x=t.db
x===$&&B.b()
w=t.cx
u=0
for(;u<x;++u){w===$&&B.b()
w.$flags&2&&B.B(w)
w[u]=0}}}t.T7()}}if(d!==4)return 0
return 1},
baQ(){var x,w,v=this,u=v.as
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
aoi(){var x,w,v,u=this
for(x=u.p2,w=0;w<286;++w){x===$&&B.b()
x.$flags&2&&B.B(x)
x[w*2]=0}for(v=u.p3,w=0;w<30;++w){v===$&&B.b()
v.$flags&2&&B.B(v)
v[w*2]=0}for(v=u.p4,w=0;w<19;++w){v===$&&B.b()
v.$flags&2&&B.B(v)
v[w*2]=0}x===$&&B.b()
x.$flags&2&&B.B(x)
x[512]=1
u.bs=u.bW=u.av=u.aX=0},
a5M(d,e){var x,w,v=this.to,u=v[e],t=e<<1>>>0,s=v.$flags|0,r=this.xr
while(!0){x=this.x1
x===$&&B.b()
if(!(t<=x))break
if(t<x&&A.cv8(d,v[t+1],v[t],r))++t
if(A.cv8(d,u,v[t],r))break
x=v[t]
s&2&&B.B(v)
v[e]=x
w=t<<1>>>0
e=t
t=w}s&2&&B.B(v)
v[e]=u},
arI(d,e){var x,w,v,u,t,s,r,q,p,o,n=d[1]
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
aVu(){var x,w,v=this,u=v.p2
u===$&&B.b()
x=v.R8.b
x===$&&B.b()
v.arI(u,x)
x=v.p3
x===$&&B.b()
u=v.RG.b
u===$&&B.b()
v.arI(x,u)
v.rx.a2K(v)
for(u=v.p4,w=18;w>=3;--w){u===$&&B.b()
if(u[C.B7[w]*2+1]!==0)break}u=v.av
u===$&&B.b()
v.av=u+(3*(w+1)+5+5+4)
return w},
bko(d,e,f){var x,w,v,u=this
u.lq(d-257,5)
x=e-1
u.lq(x,5)
u.lq(f-4,4)
for(w=0;w<f;++w){v=u.p4
v===$&&B.b()
u.lq(v[C.B7[w]*2+1],3)}v=u.p2
v===$&&B.b()
u.asi(v,d-1)
v=u.p3
v===$&&B.b()
u.asi(v,x)},
asi(d,e){var x,w,v,u,t,s,r,q,p,o,n=this,m=d[1]
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
bhu(d,e,f){var x,w,v,u,t
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
G3(d,e){var x=d*2
this.lq(e[x]&65535,e[x+1]&65535)},
lq(d,e){var x,w=this,v=w.Z
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
ME(d,e){var x,w,v,u,t,s=this,r=s.f
r===$&&B.b()
x=s.bY
x===$&&B.b()
w=s.bs
w===$&&B.b()
v=A.pt(d,8)
r.$flags&2&&B.B(r)
r[x+w*2]=v
v=s.f
w=s.bY
x=s.bs
v.$flags&2&&B.B(v)
v[w+x*2+1]=d
w=s.y1
w===$&&B.b()
v[w+x]=e
s.bs=x+1
if(d===0){r=s.p2
r===$&&B.b()
x=e*2
w=r[x]
r.$flags&2&&B.B(r)
r[x]=w+1}else{r=s.bW
r===$&&B.b()
s.bW=r+1
r=s.p2
r===$&&B.b()
x=(C.M8[e]+256+1)*2
w=r[x]
r.$flags&2&&B.B(r)
r[x]=w+1
w=s.p3
w===$&&B.b()
x=A.cCQ(d-1)*2
r=w[x]
w.$flags&2&&B.B(w)
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
u+=w[t*2]*(5+C.rd[t])}u=A.pt(u,3)
w=s.bW
w===$&&B.b()
v=s.bs
if(w<v/2&&u<(r-x)/2)return!0
r=v}x=s.y2
x===$&&B.b()
return r===x-1},
ak5(d,e){var x,w,v,u,t,s,r=this,q=r.bs
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
if(v===0)r.G3(u,d)
else{t=C.M8[u]
r.G3(t+256+1,d)
s=C.Kg[t]
if(s!==0)r.lq(u-C.apE[t],s);--v
t=A.cCQ(v)
r.G3(t,e)
s=C.rd[t]
if(s!==0)r.lq(v-C.asy[t],s)}}while(x<r.bs)}r.G3(256,d)
r.cO=d[513]},
aK2(){var x,w,v,u
for(x=this.p2,w=0,v=0;w<7;){x===$&&B.b()
v+=x[w*2];++w}for(u=0;w<128;){x===$&&B.b()
u+=x[w*2];++w}for(;w<256;){x===$&&B.b()
v+=x[w*2];++w}this.y=v>A.pt(u,2)?0:1},
awo(){var x=this,w=x.Z
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
aiU(){var x=this,w=x.Z
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
if(w>0){if(s.y===2)s.aK2()
s.R8.a2K(s)
s.RG.a2K(s)
v=s.aVu()
w=s.av
w===$&&B.b()
u=A.pt(w+3+7,3)
w=s.aX
w===$&&B.b()
t=A.pt(w+3+7,3)
if(t<=u)u=t}else{t=r+5
u=t
v=0}if(r+4<=u&&x!==-1)s.atM(x,r,d)
else if(t===u){s.lq(2+(d?1:0),3)
s.ak5(C.rs,C.MR)}else{s.lq(4+(d?1:0),3)
r=s.R8.b
r===$&&B.b()
x=s.RG.b
x===$&&B.b()
s.bko(r+1,x+1,v+1)
x=s.p2
x===$&&B.b()
r=s.p3
r===$&&B.b()
s.ak5(x,r)}s.aoi()
if(d)s.aiU()
s.fx=s.k1
s.T7()},
aZx(d){var x,w,v,u,t,s=this,r=s.r
r===$&&B.b()
x=r-5
x=65535>x?x:65535
for(r=d===0;!0;){w=s.k3
w===$&&B.b()
if(w<=1){s.a3K()
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
atM(d,e,f){var x,w=this
w.lq(f?1:0,3)
w.aiU()
w.cO=8
w.qE(e)
w.qE(A.pt(e,8))
x=(~e>>>0)+65536&65535
w.qE(x)
w.qE(A.pt(x,8))
x=w.ay
x===$&&B.b()
w.bhu(x,d,e)},
a3K(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.c
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
u+=t}}if(m.gP_())return
x=n.ay
x===$&&B.b()
r=n.bhE(x,n.k1+n.k3,u)
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
n.cy=((o^v&255)&w)>>>0}}while(x<262&&!m.gP_())},
aZv(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
for(x=d===0,w=$.vx.a,v=0;!0;){u=m.k3
u===$&&B.b()
if(u<262){m.a3K()
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
if(u!==2)m.fy=m.ap3(v)}u=m.fy
u===$&&B.b()
t=m.k1
if(u>=3){t===$&&B.b()
o=m.ME(t-m.k2,u-3)
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
o=m.ME(0,u[t]&255)
m.k3=m.k3-1
m.k1=m.k1+1}if(o)m.yw(!1)}x=d===4
m.yw(x)
return x?3:1},
aZw(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
for(x=d===0,w=$.vx.a,v=0;!0;){u=l.k3
u===$&&B.b()
if(u<262){l.a3K()
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
if(u!==2){u=l.ap3(v)
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
n=l.ME(u-1-l.go,t-3)
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
if(l.ME(0,u[t-1]&255))l.yw(!1)
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
l.ME(0,x[w-1]&255)
l.id=0}x=d===4
l.yw(x)
return x?3:1},
ap3(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=$.vx.cn().d,h=j.k1
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
bhE(d,e,f){var x,w,v,u,t=this
if(f===0||t.c.gP_())return 0
x=t.c.l5(f)
w=x.gu(0)
if(w===0)return 0
v=x.hK()
u=v.length
if(w>u)w=u
D.A.ht(d,e,e+w,v)
t.b+=w
t.a=A.xf(v,t.a)
return w},
T7(){var x,w=this,v=w.x
v===$&&B.b()
x=w.f
x===$&&B.b()
w.d.a0B(x,v)
x=w.w
x===$&&B.b()
w.w=x+v
v=w.x-v
w.x=v
if(v===0)w.w=0},
b1Q(d){switch(d){case 0:return new A.t2(0,0,0,0,0)
case 1:return new A.t2(4,4,8,4,1)
case 2:return new A.t2(4,5,16,8,1)
case 3:return new A.t2(4,6,32,32,1)
case 4:return new A.t2(4,4,16,16,2)
case 5:return new A.t2(8,16,32,32,2)
case 6:return new A.t2(8,16,128,128,2)
case 7:return new A.t2(8,32,128,256,2)
case 8:return new A.t2(32,128,258,1024,2)
case 9:return new A.t2(32,258,258,4096,2)}throw B.l(A.W9("Invalid Deflate parameter"))}}
A.t2.prototype={}
A.bYt.prototype={
b1y(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a
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
o=a0.av
o===$&&B.b()
a0.av=o+h*(r+i)
if(p){o=a0.aX
o===$&&B.b()
a0.aX=o+h*(w[k]+i)}}if(m===0)return
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
if(o!==r){k=a0.av
k===$&&B.b()
a0.av=k+(r-o)*d[s]
d[p]=r}--l}}},
a2K(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
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
l=d.av
l===$&&B.b()
d.av=l-1
if(o){l=d.aX
l===$&&B.b()
d.aX=l-w[n+1]}}h.b=p
for(q=D.c.b7(n,2);q>=1;--q)d.a5M(g,q)
m=v
do{q=u[1]
o=u[d.x1--]
t&2&&B.B(u)
u[1]=o
d.a5M(g,1)
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
d.a5M(g,1)
if(d.x1>=2){m=i
continue}else break}while(!0)
u[--d.x2]=u[1]
h.b1y(d)
A.d2b(g,p,d.ry)}}
A.caj.prototype={}
A.bfG.prototype={
aSY(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.length
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
A.bgM.prototype={
b9B(){var x,w,v,u,t=this
t.e=t.d=0
if(!t.b)return
x=t.a
x===$&&B.b()
w=x.c
while(!0){v=x.b
u=x.e
u===$&&B.b()
if(!(v<w+u))break
if(!t.bfc())break}},
bfc(){var x,w=this,v=w.a
v===$&&B.b()
if(v.gP_())return!1
x=w.qF(3)
switch(D.c.R(x,1)){case 0:if(w.bfw()===-1)return!1
break
case 1:if(w.akB(w.r,w.w)===-1)return!1
break
case 2:if(w.bfg()===-1)return!1
break
default:return!1}return(x&1)===0},
qF(d){var x,w,v,u,t,s=this
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
v=D.c.eq(1,d)
s.d=D.c.hB(x,d)
s.e=w-d
return(x&v-1)>>>0},
a5S(d){var x,w,v,u,t,s,r,q,p=this,o=d.a
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
bfw(){var x,w,v=this
v.e=v.d=0
x=v.qF(16)
w=v.qF(16)
if(x!==0&&x!==(w^65535)>>>0)return-1
w=v.a
w===$&&B.b()
if(x>w.gu(0))return-1
v.c.bLh(w.l5(x))
return 0},
bfg(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.qF(5)
if(m===-1)return-1
m+=257
if(m>288)return-1
x=n.qF(5)
if(x===-1)return-1;++x
if(x>32)return-1
w=n.qF(4)
if(w===-1)return-1
w+=4
if(w>19)return-1
v=new Uint8Array(19)
for(u=0;u<w;++u){t=n.qF(3)
if(t===-1)return-1
v[C.B7[u]]=t}s=A.aq4(v)
r=m+x
q=new Uint8Array(r)
p=J.d3(D.A.gag(q),0,m)
o=J.d3(D.A.gag(q),m,x)
if(n.aYD(r,s,q)===-1)return-1
return n.akB(A.aq4(p),A.aq4(o))},
akB(d,e){var x,w,v,u,t,s,r,q=this
for(x=q.c;!0;){w=q.a5S(d)
if(w<0||w>285)return-1
if(w===256)break
if(w<256){x.b_(w&255)
continue}v=w-257
u=C.aBo[v]+q.qF(C.aCX[v])
t=q.a5S(e)
if(t<0||t>29)return-1
s=C.aBv[t]+q.qF(C.rd[t])
for(r=-s;u>s;){x.mx(x.jY(r))
u-=s}if(u===s)x.mx(x.jY(r))
else x.mx(x.agK(r,u-s))}for(x=q.a;r=q.e,r>=8;){q.e=r-8
x===$&&B.b()
if(--x.b<0)x.b=0}return 0},
aYD(d,e,f){var x,w,v,u,t,s,r,q,p=this
for(x=f.$flags|0,w=0,v=0;v<d;){u=p.a5S(e)
if(u===-1)return-1
t=0
switch(u){case 16:s=p.qF(2)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.B(f)
f[v]=w}break
case 17:s=p.qF(3)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.B(f)
f[v]=0}w=t
break
case 18:s=p.qF(7)
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
A.bLq.prototype={}
A.bLp.prototype={}
A.bLr.prototype={
azw(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=A.cnX(1,32768)
m.b_(120)
for(x=0;w=(x|0)>>>0,(30720+w)%31!==0;)++x
m.b_(w)
v=A.db1(d)
u=A.BV(d,1,null,0)
w=A.cpS()
t=A.cpS()
s=A.cpS()
r=new Uint16Array(16)
q=new Uint32Array(573)
p=new Uint8Array(573)
o=A.cnX(0,32768)
r=new A.b5c(u,o,w,t,s,r,q,p)
if(e==null||e===-1)e=6
q=!0
q=e>9
if(q)B.a6(A.W9("Invalid Deflate parameter"))
$.vx.b=r.b1Q(e)
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
w.c=$.cK0()
t.a=p
t.c=$.cK_()
s.a=n
s.c=$.cJZ()
r.Z=r.E=0
r.cO=8
r.aoi()
r.baQ()
r.aZu(4)
r.T7()
m.mx(y.L.a(J.d3(D.A.gag(o.c),0,o.a)))
m.ih(v)
w=J.d3(D.A.gag(m.c),0,m.a)
return w},
ka(d){return this.azw(d,null)}}
A.b_d.prototype={
J(){return"Channel."+this.b}}
A.hx.prototype={
q(){var x=this.b
return++this.a<x.gu(x)},
gL(d){return this.b.i(0,this.a)},
$ibo:1}
A.MO.prototype={
dZ(d){return new A.MO(new Uint16Array(B.bU(this.a)))},
gdv(){return C.hK},
gu(d){return this.a.length},
geW(){return null},
i(d,e){var x,w=this.a
if(e<w.length){w=w[e]
x=$.hE
w=(x!=null?x:A.iz())[w]}else w=0
return w},
m(d,e,f){var x,w=this.a
if(e<w.length){x=A.fN(f)
w.$flags&2&&B.B(w)
w[e]=x}},
gef(d){return this.gaw(0)},
gaw(d){var x,w=this.a
if(!D.dP.gT(w)){w=w[0]
x=$.hE
w=(x!=null?x:A.iz())[w]}else w=0
return w},
gaK(){var x,w=this.a
if(w.length>1){w=w[1]
x=$.hE
w=(x!=null?x:A.iz())[w]}else w=0
return w},
gaM(d){var x,w=this.a
if(w.length>2){w=w[2]
x=$.hE
w=(x!=null?x:A.iz())[w]}else w=0
return w},
gaN(d){var x,w=this.a
if(w.length>3){w=w[3]
x=$.hE
w=(x!=null?x:A.iz())[w]}else w=0
return w},
gjQ(){return A.jt(this)},
iX(d,e){var x,w=e.gaw(e),v=this.a
if(!D.dP.gT(v)){w=A.fN(w)
v.$flags&2&&B.B(v)
v[0]=w}w=e.gaK()
x=v.length
if(x>1){w=A.fN(w)
v.$flags&2&&B.B(v)
v[1]=w}w=e.gaM(e)
if(x>2){w=A.fN(w)
v.$flags&2&&B.B(v)
v[2]=w}w=e.gaN(e)
if(x>3){w=A.fN(w)
v.$flags&2&&B.B(v)
v[3]=w}},
ga1(d){return new A.hx(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aM(B.H(this,!0,B.q(this).h("w.E")))},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
$idS:1}
A.MP.prototype={
dZ(d){return new A.MP(new Float32Array(B.bU(this.a)))},
gdv(){return C.j6},
gu(d){return this.a.length},
geW(){return null},
i(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x=this.a
if(e<x.length){x.$flags&2&&B.B(x)
x[e]=f}},
gef(d){var x=this.a
return!D.eX.gT(x)?x[0]:0},
gaw(d){var x=this.a
return!D.eX.gT(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaN(d){var x=this.a
return x.length>3?x[3]:1},
gjQ(){return A.jt(this)},
iX(d,e){var x,w=e.gaw(e),v=this.a
if(!D.eX.gT(v)){v.$flags&2&&B.B(v)
v[0]=w}w=e.gaK()
x=v.length
if(x>1){v.$flags&2&&B.B(v)
v[1]=w}w=e.gaM(e)
if(x>2){v.$flags&2&&B.B(v)
v[2]=w}w=e.gaN(e)
if(x>3){v.$flags&2&&B.B(v)
v[3]=w}},
ga1(d){return new A.hx(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aM(B.H(this,!0,B.q(this).h("w.E")))},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
$idS:1}
A.MQ.prototype={
dZ(d){return new A.MQ(new Float64Array(B.bU(this.a)))},
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
gaw(d){var x=this.a
return!D.e7.gT(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaN(d){var x=this.a
return x.length>3?x[3]:1},
gjQ(){return A.jt(this)},
iX(d,e){var x,w=e.gaw(e),v=this.a
if(!D.e7.gT(v)){v.$flags&2&&B.B(v)
v[0]=w}w=e.gaK()
x=v.length
if(x>1){v.$flags&2&&B.B(v)
v[1]=w}w=e.gaM(e)
if(x>2){v.$flags&2&&B.B(v)
v[2]=w}w=e.gaN(e)
if(x>3){v.$flags&2&&B.B(v)
v[3]=w}},
ga1(d){return new A.hx(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aM(B.H(this,!0,B.q(this).h("w.E")))},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
$idS:1}
A.MR.prototype={
dZ(d){return new A.MR(new Int16Array(B.bU(this.a)))},
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
return!D.jv.gT(x)?x[0]:0},
gaw(d){var x=this.a
return!D.jv.gT(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaN(d){var x=this.a
return x.length>3?x[3]:0},
gjQ(){return A.jt(this)},
iX(d,e){var x,w=e.gaw(e),v=this.a
if(!D.jv.gT(v)){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[0]=w}w=e.gaK()
x=v.length
if(x>1){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[1]=w}w=e.gaM(e)
if(x>2){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[2]=w}w=e.gaN(e)
if(x>3){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[3]=w}},
ga1(d){return new A.hx(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aM(B.H(this,!0,B.q(this).h("w.E")))},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
$idS:1}
A.MS.prototype={
dZ(d){return new A.MS(new Int32Array(B.bU(this.a)))},
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
return!D.cj.gT(x)?x[0]:0},
gaw(d){var x=this.a
return!D.cj.gT(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaN(d){var x=this.a
return x.length>3?x[3]:0},
gjQ(){return A.jt(this)},
iX(d,e){var x,w=e.gaw(e),v=this.a
if(!D.cj.gT(v)){B.ba(w)
v.$flags&2&&B.B(v)
v[0]=w}w=e.gaK()
x=v.length
if(x>1){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[1]=w}w=e.gaM(e)
if(x>2){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[2]=w}w=e.gaN(e)
if(x>3){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[3]=w}},
ga1(d){return new A.hx(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aM(B.H(this,!0,B.q(this).h("w.E")))},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
$idS:1}
A.MT.prototype={
dZ(d){return new A.MT(new Int8Array(B.bU(this.a)))},
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
return!D.jw.gT(x)?x[0]:0},
gaw(d){var x=this.a
return!D.jw.gT(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaN(d){var x=this.a
return x.length>3?x[3]:0},
gjQ(){return A.jt(this)},
iX(d,e){var x,w=e.gaw(e),v=this.a
if(!D.jw.gT(v)){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[0]=w}w=e.gaK()
x=v.length
if(x>1){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[1]=w}w=e.gaM(e)
if(x>2){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[2]=w}w=e.gaN(e)
if(x>3){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[3]=w}},
ga1(d){return new A.hx(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aM(B.H(this,!0,B.q(this).h("w.E")))},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
$idS:1}
A.MW.prototype={
dZ(d){var x=this.b
x===$&&B.b()
return new A.MW(this.a,x)},
gdv(){return C.ff},
geW(){return null},
F2(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.fZ(x,7-d)&1}else x=0
return x},
KW(d,e){var x
if(d>=this.a)return
d=7-d
x=this.b
x===$&&B.b()
this.b=e!==0?(x|D.c.eS(1,d))>>>0:(x&~(D.c.eS(1,d)&255))>>>0},
i(d,e){return this.F2(e)},
m(d,e,f){return this.KW(e,f)},
gef(d){return this.F2(0)},
gaw(d){return this.F2(0)},
gaK(){return this.F2(1)},
gaM(d){return this.F2(2)},
gaN(d){return this.F2(3)},
gjQ(){return A.jt(this)},
iX(d,e){this.ik(e.gaw(e),e.gaK(),e.gaM(e),e.gaN(e))},
ik(d,e,f,g){var x=this
x.KW(0,d)
x.KW(1,e)
x.KW(2,f)
x.KW(3,g)},
ga1(d){return new A.hx(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a&&e.gv(e)===B.aM(B.H(this,!0,B.q(this).h("w.E")))},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
$idS:1,
gu(d){return this.a}}
A.MX.prototype={
dZ(d){return new A.MX(new Uint16Array(B.bU(this.a)))},
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
return!D.dP.gT(x)?x[0]:0},
gaw(d){var x=this.a
return!D.dP.gT(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaN(d){var x=this.a
return x.length>3?x[3]:0},
gjQ(){return A.jt(this)},
iX(d,e){var x,w=e.gaw(e),v=this.a
if(!D.dP.gT(v)){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[0]=w}w=e.gaK()
x=v.length
if(x>1){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[1]=w}w=e.gaM(e)
if(x>2){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[2]=w}w=e.gaN(e)
if(x>3){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[3]=w}},
ga1(d){return new A.hx(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aM(B.H(this,!0,B.q(this).h("w.E")))},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
$idS:1}
A.MY.prototype={
dZ(d){var x=this.b
x===$&&B.b()
return new A.MY(this.a,x)},
gdv(){return C.h3},
geW(){return null},
F3(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.fZ(x,6-(d<<1>>>0))&3}else x=0
return x},
KX(d,e){var x,w,v
if(d>=this.a)return
x=C.ars[d]
w=D.d.D(e)
v=this.b
v===$&&B.b()
this.b=(v&x|D.c.eS(w&3,6-(d<<1>>>0)))>>>0},
i(d,e){return this.F3(e)},
m(d,e,f){return this.KX(e,f)},
gef(d){return this.F3(0)},
gaw(d){return this.F3(0)},
gaK(){return this.F3(1)},
gaM(d){return this.F3(2)},
gaN(d){return this.F3(3)},
gjQ(){return A.jt(this)},
iX(d,e){this.ik(e.gaw(e),e.gaK(),e.gaM(e),e.gaN(e))},
ik(d,e,f,g){var x=this
x.KX(0,d)
x.KX(1,e)
x.KX(2,f)
x.KX(3,g)},
ga1(d){return new A.hx(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a&&e.gv(e)===B.aM(B.H(this,!0,B.q(this).h("w.E")))},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
$idS:1,
gu(d){return this.a}}
A.MZ.prototype={
dZ(d){return new A.MZ(new Uint32Array(B.bU(this.a)))},
gdv(){return C.j7},
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
gaw(d){var x=this.a
return!D.bq.gT(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaN(d){var x=this.a
return x.length>3?x[3]:0},
gjQ(){return A.jt(this)},
iX(d,e){var x,w=e.gaw(e),v=this.a
if(!D.bq.gT(v)){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[0]=w}w=e.gaK()
x=v.length
if(x>1){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[1]=w}w=e.gaM(e)
if(x>2){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[2]=w}w=e.gaN(e)
if(x>3){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[3]=w}},
ga1(d){return new A.hx(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aM(B.H(this,!0,B.q(this).h("w.E")))},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
$idS:1}
A.N_.prototype={
dZ(d){return new A.N_(this.a,new Uint8Array(B.bU(this.b)))},
gdv(){return C.h4},
geW(){return null},
F4(d){var x
if(d<0||d>=this.a)x=0
else{x=this.b
x=d<2?D.c.fZ(x[0],4-(d<<2>>>0))&15:D.c.fZ(x[1],4-((d&1)<<2))&15}return x},
KY(d,e){var x,w,v,u
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
i(d,e){return this.F4(e)},
m(d,e,f){return this.KY(e,f)},
gef(d){return this.F4(0)},
gaw(d){return this.F4(0)},
gaK(){return this.F4(1)},
gaM(d){return this.F4(2)},
gaN(d){return this.F4(3)},
gjQ(){return A.jt(this)},
iX(d,e){this.ik(e.gaw(e),e.gaK(),e.gaM(e),e.gaN(e))},
ik(d,e,f,g){var x=this
x.KY(0,d)
x.KY(1,e)
x.KY(2,f)
x.KY(3,g)},
ga1(d){return new A.hx(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a&&e.gv(e)===B.aM(B.H(this,!0,B.q(this).h("w.E")))},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
$idS:1,
gu(d){return this.a}}
A.xJ.prototype={
aSL(d,e,f,g){var x=this.a
x.$flags&2&&B.B(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g},
dZ(d){return new A.xJ(new Uint8Array(B.bU(this.a)))},
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
gaw(d){var x=this.a
return!D.A.gT(x)?x[0]:0},
gaK(){var x=this.a
return x.length>1?x[1]:0},
gaM(d){var x=this.a
return x.length>2?x[2]:0},
gaN(d){var x=this.a
return x.length>3?x[3]:255},
gjQ(){return A.jt(this)},
iX(d,e){var x,w=e.gaw(e),v=this.a
if(!D.A.gT(v)){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[0]=w}w=e.gaK()
x=v.length
if(x>1){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[1]=w}w=e.gaM(e)
if(x>2){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[2]=w}w=e.gaN(e)
if(x>3){w=D.d.D(w)
v.$flags&2&&B.B(v)
v[3]=w}},
ga1(d){return new A.hx(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aM(B.H(this,!0,B.q(this).h("w.E")))},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
$idS:1}
A.ajC.prototype={}
A.MU.prototype={}
A.nw.prototype={
J(){return"Format."+this.b}}
A.aiF.prototype={
J(){return"BlendMode."+this.b}}
A.O8.prototype={
Rb(d){var x=$.cli()
if(!x.a3(0,d))return"<unknown>"
return x.i(0,d).a},
j(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(x=j.a,w=new B.ce(x,x.r,x.e,B.q(x).h("ce<1>")),v=y.p,u=y.r,t=y.N,s=y.P,r="";w.q();){q=w.d
r+=q+"\n"
p=x.i(0,q)
for(q=p.a,q=new B.ce(q,q.r,q.e,B.q(q).h("ce<1>"));q.q();){o=q.d
n=p.i(0,o)
r=n==null?r+("\t"+j.Rb(o)+"\n"):r+("\t"+j.Rb(o)+": "+n.j(0)+"\n")}for(q=p.b.a,o=new B.ce(q,q.r,q.e,B.q(q).h("ce<1>"));o.q();){m=o.d
r+=m+"\n"
if(!q.a3(0,m))q.m(0,m,new A.pS(B.I(v,u),new A.tZ(B.I(t,s))))
l=q.i(0,m)
for(m=l.a,m=new B.ce(m,m.r,m.e,B.q(m).h("ce<1>"));m.q();){k=m.d
n=l.i(0,k)
r=n==null?r+("\t"+j.Rb(k)+"\n"):r+("\t"+j.Rb(k)+": "+n.j(0)+"\n")}}}return r.charCodeAt(0)==0?r:r},
js(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0="exif",a1="interop",a2=a4.b
a4.b=!0
a4.l7(19789)
a4.l7(42)
a4.ih(8)
x=d.a
if(x.i(0,"ifd0")==null)x.m(0,"ifd0",new A.pS(B.I(y.p,y.r),new A.tZ(B.I(y.N,y.P))))
w=y.N
v=y.p
u=B.I(w,v)
for(t=B.q(x),s=t.h("c0<1>"),r=new B.ce(x,x.r,x.e,t.h("ce<1>")),q=y.r,p=y.P,o=8;r.q();){n=r.d
m=x.i(0,n)
m.toString
u.m(0,n,o)
n=m.b.a
if(n.a3(0,a0)){l=new Uint32Array(1)
l[0]=0
m.m(0,34665,new A.r7(l))}else m.a.K(0,34665)
if(n.a3(0,a1)){l=new Uint32Array(1)
l[0]=0
m.m(0,40965,new A.r7(l))}else m.a.K(0,40965)
if(n.a3(0,"gps")){l=new Uint32Array(1)
l[0]=0
m.m(0,34853,new A.r7(l))}else m.a.K(0,34853)
m=m.a
o+=2+12*m.a+4
for(m=new B.bB(m,m.r,m.e,B.q(m).h("bB<2>"));m.q();){l=m.d
k=C.jk[l.ghL(l).a]*l.gu(l)
if(k>4)o+=k}for(m=new B.ce(n,n.r,n.e,B.q(n).h("ce<1>"));m.q();){l=m.d
if(!n.a3(0,l))n.m(0,l,new A.pS(B.I(v,q),new A.tZ(B.I(w,p))))
j=n.i(0,l)
j.toString
u.m(0,l,o)
j=j.a
i=2+12*j.a
for(l=new B.bB(j,j.r,j.e,B.q(j).h("bB<2>"));l.q();){j=l.d
k=C.jk[j.ghL(j).a]*j.gu(j)
if(k>4)i+=k}o+=i}}h=x.a
for(r=h-1,t=t.h("b4<2>"),g=0;g<h;++g){f=new B.c0(x,s).dL(0,g)
e=new B.b4(x,t).dL(0,g)
n=e.b.a
if(n.a3(0,a0)){m=e.i(0,34665)
m.toString
l=u.i(0,a0)
l.toString
m.vU(l)}if(n.a3(0,a1)){m=e.i(0,40965)
m.toString
l=u.i(0,a1)
l.toString
m.vU(l)}if(n.a3(0,"gps")){m=e.i(0,34853)
m.toString
l=u.i(0,"gps")
l.toString
m.vU(l)}m=u.i(0,f)
m.toString
d.avn(a4,e,m+2+12*e.a.a+4)
if(g===r)a4.ih(0)
else{m=u.i(0,new B.c0(x,s).dL(0,g+1))
m.toString
a4.ih(m)}d.avo(a4,e)
for(m=new B.ce(n,n.r,n.e,B.q(n).h("ce<1>"));m.q();){l=m.d
if(!n.a3(0,l))n.m(0,l,new A.pS(B.I(v,q),new A.tZ(B.I(w,p))))
j=n.i(0,l)
j.toString
l=u.i(0,l)
l.toString
d.avn(a4,j,l+2+12*j.a.a)
d.avo(a4,j)}}a4.b=a2},
avn(d,e,f){var x,w,v,u,t,s,r=e.a
d.l7(r.a)
for(r=new B.ce(r,r.r,r.e,B.q(r).h("ce<1>"));r.q();){x=r.d
w=e.i(0,x)
w.toString
v=x===273
u=v&&w.ghL(w)===C.hO?C.cM:w.ghL(w)
t=v&&w.ghL(w)===C.hO?1:w.gu(w)
d.l7(x)
d.l7(u.a)
d.ih(t)
s=C.jk[w.ghL(w).a]*w.gu(w)
if(s<=4){w.js(0,d)
for(;s<4;){d.b_(0);++s}}else{d.ih(f)
f+=s}}return f},
avo(d,e){var x,w
for(x=e.a,x=new B.bB(x,x.r,x.e,B.q(x).h("bB<2>"));x.q();){w=x.d
if(C.jk[w.ghL(w).a]*w.gu(w)>4)w.js(0,d)}},
qi(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a5.e
a5.e=!0
x=a5.d
w=a5.bO()
if(w===18761){a5.e=!1
if(a5.bO()!==42){a5.e=a3
return!1}}else if(w===19789){a5.e=!0
if(a5.bO()!==42){a5.e=a3
return!1}}else return!1
v=a5.an()
for(u=this.a,t=y.v,s=y.p,r=y.r,q=y.N,p=y.P,o=0;v>0;v=f){a5.d=x+v
n=new A.pS(B.I(s,r),new A.tZ(B.I(q,p)))
m=a5.bO()
l=B.a(new Array(m),t)
for(k=0;k<m;++k)l[k]=this.aqT(a5,x)
for(j=l.length,i=0;i<l.length;l.length===j||(0,B.R)(l),++i){h=l[i]
g=h.b
if(g!=null)n.m(0,h.a,g)}u.m(0,"ifd"+o,n);++o
f=a5.an()
if(f===v)break}for(u=new B.bB(u,u.r,u.e,B.q(u).h("bB<2>"));u.q();){j=u.d
for(g=J.aL(C.BA.gen(C.BA)),e=j.a,d=j.b.a;g.q();){a0=g.gL(g)
if(e.a3(0,a0)){a5.d=x+j.i(0,a0).D(0)
n=new A.pS(B.I(s,r),new A.tZ(B.I(q,p)))
m=a5.bO()
l=B.a(new Array(m),t)
for(k=0;k<m;++k)l[k]=this.aqT(a5,x)
for(a1=l.length,i=0;i<l.length;l.length===a1||(0,B.R)(l),++i){h=l[i]
a2=h.b
if(a2!=null)n.m(0,h.a,a2)}a0=C.BA.i(0,a0)
a0.toString
d.m(0,a0,n)}}}a5.e=a3
return!1},
aqT(d,e){var x,w,v,u,t=d.bO(),s=d.bO(),r=d.an(),q=new A.aIC(t,null)
if(s>13)return q
x=C.N1[s]
w=r*C.jk[s]
v=d.d
if((w>4?d.d=d.an()+e:v)+w>d.c)return q
u=d.l5(w)
switch(x.a){case 0:break
case 6:q.b=new A.vX(new Int8Array(B.bU(J.clq(D.A.gag(u.hK()),0,r))))
break
case 1:q.b=new A.tY(new Uint8Array(B.bU(u.l5(r).hK())))
break
case 7:q.b=new A.He(new Uint8Array(B.bU(u.l5(r).hK())))
break
case 2:q.b=new A.BH(r===0?"":u.qj(r-1))
break
case 3:q.b=A.cx7(u,r)
break
case 4:q.b=A.cx2(u,r)
break
case 5:q.b=A.cx3(u,r)
break
case 10:q.b=A.cx5(u,r)
break
case 8:q.b=A.cx6(u,r)
break
case 9:q.b=A.cx4(u,r)
break
case 11:q.b=A.cx9(u,r)
break
case 12:q.b=A.cx1(u,r)
break}d.d=v+4
return q}}
A.aIC.prototype={
gp(d){return this.b}}
A.anK.prototype={}
A.tZ.prototype={
aSZ(d){d.a.aQ(0,new A.bg9(this))},
gfd(d){var x=this.a
return new B.b4(x,B.q(x).h("b4<2>"))},
gT(d){var x,w=this.a
if(w.a===0)return!0
for(w=new B.bB(w,w.r,w.e,B.q(w).h("bB<2>"));w.q();){x=w.d
if(!(x.a.a===0&&x.b.gT(0)))return!1}return!0},
a3(d,e){return this.a.a3(0,e)},
i(d,e){var x=this.a
if(!x.a3(0,e))x.m(0,e,new A.pS(B.I(y.p,y.r),new A.tZ(B.I(y.N,y.P))))
x=x.i(0,e)
x.toString
return x},
m(d,e,f){this.a.m(0,e,f)}}
A.pS.prototype={
gfd(d){var x=this.a
return new B.b4(x,B.q(x).h("b4<2>"))},
gT(d){return this.a.a===0&&this.b.gT(0)},
btW(d){d.a.aQ(0,new A.bga(this))
d.b.a.aQ(0,new A.bgb(this))},
a3(d,e){return this.a.a3(0,e)},
i(d,e){if(typeof e=="string")e=C.Xt.i(0,e)
if(B.hO(e))return this.a.i(0,e)
return null},
m(d,e,f){var x,w,v,u,t,s,r=this
if(typeof e=="string")e=C.Xt.i(0,e)
if(!B.hO(e))return
if(f==null)r.a.K(0,e)
else if(f instanceof A.k_)r.a.m(0,e,f)
else{x=$.cli().i(0,e)
if(x!=null)switch(x.b.a){case 1:if(y.L.b(f))r.a.m(0,e,new A.tY(new Uint8Array(B.bU(new Uint8Array(B.bU(f))))))
else if(B.hO(f)){w=new Uint8Array(1)
w[0]=f
r.a.m(0,e,new A.tY(w))}break
case 2:if(typeof f=="string")r.a.m(0,e,new A.BH(f))
break
case 3:if(y.L.b(f))r.a.m(0,e,new A.yi(new Uint16Array(B.bU(new Uint16Array(B.bU(f))))))
else if(B.hO(f))r.a.m(0,e,A.cTk(f))
break
case 4:if(y.L.b(f))r.a.m(0,e,new A.r7(new Uint32Array(B.bU(new Uint32Array(B.bU(f))))))
else if(B.hO(f))r.a.m(0,e,A.cTj(f))
break
case 5:if(y.k.b(f))r.a.m(0,e,new A.u_(B.b_(f,!0,y.i)))
else if(y.L.b(f)&&J.bl(f)===2){w=J.a2(f)
r.a.m(0,e,new A.u_(B.a([new A.nQ(w.i(f,0),w.i(f,1))],y.j)))}else if(f instanceof A.nQ)r.a.m(0,e,new A.u_(B.a([new A.nQ(f.a,f.b)],y.j)))
else if(y.f.b(f)){w=J.a2(f)
v=w.gu(f)
u=y.i
t=J.kp(v,u)
for(s=0;s<v;++s)t[s]=new A.nQ(J.v(w.i(f,s),0),J.v(w.i(f,s),1))
r.a.m(0,e,new A.u_(B.b_(t,!0,u)))}break
case 6:if(y.L.b(f))r.a.m(0,e,new A.vX(new Int8Array(B.bU(new Int8Array(B.bU(f))))))
else if(B.hO(f)){w=new Int8Array(1)
w[0]=f
r.a.m(0,e,new A.vX(w))}break
case 7:if(y.L.b(f))r.a.m(0,e,new A.He(new Uint8Array(B.bU(new Uint8Array(B.bU(f))))))
break
case 8:if(y.L.b(f))r.a.m(0,e,new A.yh(new Int16Array(B.bU(new Int16Array(B.bU(f))))))
else if(B.hO(f)){w=new Int16Array(1)
w[0]=f
r.a.m(0,e,new A.yh(w))}break
case 9:if(y.L.b(f))r.a.m(0,e,new A.yg(new Int32Array(B.bU(new Int32Array(B.bU(f))))))
else if(B.hO(f)){w=new Int32Array(1)
w[0]=f
r.a.m(0,e,new A.yg(w))}break
case 10:if(y.k.b(f))r.a.m(0,e,new A.u0(B.b_(f,!0,y.i)))
else if(y.L.b(f)&&J.bl(f)===2){w=J.a2(f)
r.a.m(0,e,new A.u0(B.a([new A.nQ(w.i(f,0),w.i(f,1))],y.j)))}else if(f instanceof A.nQ)r.a.m(0,e,new A.u0(B.a([f],y.j)))
else if(y.f.b(f)){w=J.a2(f)
v=w.gu(f)
u=y.i
t=J.kp(v,u)
for(s=0;s<v;++s)t[s]=new A.nQ(J.v(w.i(f,s),0),J.v(w.i(f,s),1))
r.a.m(0,e,new A.u0(B.b_(t,!0,u)))}break
case 11:if(y.H.b(f))r.a.m(0,e,new A.BJ(new Float32Array(B.bU(new Float32Array(B.bU(f))))))
else if(typeof f=="number")r.a.m(0,e,A.cx8(f))
else if(B.hO(f))r.a.m(0,e,A.cx8(f))
break
case 12:if(y.H.b(f))r.a.m(0,e,new A.BI(new Float64Array(B.bU(new Float64Array(B.bU(f))))))
else if(typeof f=="number")r.a.m(0,e,A.cx0(f))
else if(B.hO(f))r.a.m(0,e,A.cx0(f))
break
case 0:break}}},
gie(d){var x=this.a.i(0,274)
return x==null?null:x.D(0)},
sie(d,e){this.a.K(0,274)}}
A.mJ.prototype={
J(){return"IfdValueType."+this.b}}
A.k_.prototype={
jb(d,e){return 0},
D(d){return this.jb(0,0)},
u1(d){return 0},
u0(){return new Uint8Array(0)},
j(d){return""},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.k_&&x.ghL(x)===e.ghL(e)&&x.gu(x)===e.gu(e)&&x.gv(x)===e.gv(e)},
gv(d){return 0},
vU(d){}}
A.tY.prototype={
dZ(d){return new A.tY(new Uint8Array(B.bU(this.a)))},
ghL(d){return C.Ju},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.tY){x=this.a
x=x.length===e.a.length&&B.aM(x)===B.aM(e.a)}else x=!1
return x},
gv(d){return B.aM(this.a)},
jb(d,e){return this.a[e]},
D(d){return this.jb(0,0)},
vU(d){var x=this.a
x.$flags&2&&B.B(x)
x[0]=d},
u0(){return this.a},
js(d,e){e.mx(this.a)},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.BH.prototype={
dZ(d){return new A.BH(this.a)},
ghL(d){return C.bC},
gu(d){return this.a.length+1},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.BH){x=this.a
x=x.length+1===e.a.length+1&&D.e.gv(x)===D.e.gv(e.a)}else x=!1
return x},
gv(d){return D.e.gv(this.a)},
u0(){return new Uint8Array(B.bU(new B.e8(this.a)))},
js(d,e){e.mx(new B.e8(this.a))
e.b_(0)},
j(d){return this.a},
gp(d){return this.a}}
A.yi.prototype={
aT3(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.bO()
w.$flags&2&&B.B(w)
w[x]=v}},
dZ(d){return new A.yi(new Uint16Array(B.bU(this.a)))},
ghL(d){return C.bi},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.yi){x=this.a
x=x.length===e.a.length&&B.aM(x)===B.aM(e.a)}else x=!1
return x},
gv(d){return B.aM(this.a)},
jb(d,e){return this.a[e]},
D(d){return this.jb(0,0)},
vU(d){var x=this.a
x.$flags&2&&B.B(x)
x[0]=d},
u0(){return J.ht(D.dP.gag(this.a))},
js(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.l7(this.a[x])},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.r7.prototype={
aT0(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.an()
w.$flags&2&&B.B(w)
w[x]=v}},
dZ(d){return new A.r7(new Uint32Array(B.bU(this.a)))},
ghL(d){return C.cM},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.r7){x=this.a
x=x.length===e.a.length&&B.aM(x)===B.aM(e.a)}else x=!1
return x},
gv(d){return B.aM(this.a)},
jb(d,e){return this.a[e]},
D(d){return this.jb(0,0)},
vU(d){var x=this.a
x.$flags&2&&B.B(x)
x[0]=d},
u0(){return J.ht(D.bq.gag(this.a))},
js(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.ih(this.a[x])},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.u_.prototype={
dZ(d){return new A.u_(B.b_(this.a,!0,y.i))},
ghL(d){return C.e4},
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
js(d,e){var x,w,v,u
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.R)(x),++v){u=x[v]
e.ih(u.a)
e.ih(u.b)}},
j(d){var x=this.a
return x.length===1?x[0].j(0):B.o(x)},
gp(d){return this.a}}
A.vX.prototype={
dZ(d){return new A.vX(new Int8Array(B.bU(this.a)))},
ghL(d){return C.Jy},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.vX){x=this.a
x=x.length===e.a.length&&B.aM(x)===B.aM(e.a)}else x=!1
return x},
gv(d){return B.aM(this.a)},
jb(d,e){return this.a[e]},
D(d){return this.jb(0,0)},
vU(d){var x=this.a
x.$flags&2&&B.B(x)
x[0]=d},
u0(){return J.ht(D.jw.gag(this.a))},
js(d,e){e.mx(J.d3(D.jw.gag(this.a),0,null))},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.yh.prototype={
aT2(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.bO()
u=$.qI()
u.$flags&2&&B.B(u)
u[0]=v
v=$.th()[0]
w.$flags&2&&B.B(w)
w[x]=v}},
dZ(d){return new A.yh(new Int16Array(B.bU(this.a)))},
ghL(d){return C.Jz},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.yh){x=this.a
x=x.length===e.a.length&&B.aM(x)===B.aM(e.a)}else x=!1
return x},
gv(d){return B.aM(this.a)},
jb(d,e){return this.a[e]},
D(d){return this.jb(0,0)},
vU(d){var x=this.a
x.$flags&2&&B.B(x)
x[0]=d},
u0(){return J.ht(D.jv.gag(this.a))},
js(d,e){var x,w=new Int16Array(1),v=J.clr(D.jv.gag(w),0,null),u=this.a.length
for(x=0;x<u;++x){w[0]=this.a[x]
e.l7(v[0])}},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.yg.prototype={
aT1(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.an()
u=$.hV()
u.$flags&2&&B.B(u)
u[0]=v
v=$.lA()[0]
w.$flags&2&&B.B(w)
w[x]=v}},
dZ(d){return new A.yg(new Int32Array(B.bU(this.a)))},
ghL(d){return C.JA},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.yg){x=this.a
x=x.length===e.a.length&&B.aM(x)===B.aM(e.a)}else x=!1
return x},
gv(d){return B.aM(this.a)},
jb(d,e){return this.a[e]},
D(d){return this.jb(0,0)},
vU(d){var x=this.a
x.$flags&2&&B.B(x)
x[0]=d},
u0(){return J.ht(D.cj.gag(this.a))},
js(d,e){var x,w,v,u=this.a.length
for(x=0;x<u;++x){w=this.a[x]
v=$.aUR()
v.$flags&2&&B.B(v)
v[0]=w
e.ih($.cla()[0])}},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.u0.prototype={
dZ(d){return new A.u0(B.b_(this.a,!0,y.i))},
ghL(d){return C.Jv},
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
js(d,e){var x,w,v,u,t,s
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.R)(x),++v){u=x[v]
t=$.aUR()
t.$flags&2&&B.B(t)
t[0]=u.a
s=$.cla()
e.ih(s[0])
t[0]=u.b
e.ih(s[0])}},
j(d){var x=this.a
return x.length===1?x[0].j(0):B.o(x)},
gp(d){return this.a}}
A.BJ.prototype={
aT4(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.an()
u=$.hV()
u.$flags&2&&B.B(u)
u[0]=v
v=$.Fj()[0]
w.$flags&2&&B.B(w)
w[x]=v}},
dZ(d){return new A.BJ(new Float32Array(B.bU(this.a)))},
ghL(d){return C.Jw},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.BJ){x=this.a
x=x.length===e.a.length&&B.aM(x)===B.aM(e.a)}else x=!1
return x},
gv(d){return B.aM(this.a)},
u0(){return J.ht(D.eX.gag(this.a))},
u1(d){return this.a[0]},
js(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.bLe(this.a[x])},
j(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gp(d){return this.a}}
A.BI.prototype={
aT_(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.a_x()
w.$flags&2&&B.B(w)
w[x]=v}},
dZ(d){return new A.BI(new Float64Array(B.bU(this.a)))},
ghL(d){return C.Jx},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.BI){x=this.a
x=x.length===e.a.length&&B.aM(x)===B.aM(e.a)}else x=!1
return x},
gv(d){return B.aM(this.a)},
u1(d){return this.a[0]},
u0(){return J.ht(D.e7.gag(this.a))},
js(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.bLf(this.a[x])},
j(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gp(d){return this.a}}
A.He.prototype={
dZ(d){return new A.He(new Uint8Array(B.bU(this.a)))},
ghL(d){return C.hO},
gu(d){return this.a.length},
u0(){return this.a},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.He){x=this.a
x=x.length===e.a.length&&B.aM(x)===B.aM(e.a)}else x=!1
return x},
gv(d){return B.aM(this.a)},
js(d,e){e.mx(this.a)},
j(d){return"<data>"},
gp(d){return this.a}}
A.lH.prototype={
J(){return"BmpCompression."+this.b}}
A.aYZ.prototype={}
A.FC.prototype={
ai3(d,e){var x,w,v,u,t,s,r,q=this,p=q.d,o=p<=40
if(o){x=q.r
x=x===C.y5||x===C.y6}else x=!0
if(x){x=q.as=d.an()
w=A.ciN(x)
q.CW=w
v=D.c.fZ(x,w)
x=v>0
q.cx=x?255/v:0
w=q.at=d.an()
u=A.ciN(w)
q.cy=u
t=D.c.fZ(w,u)
q.db=x?255/t:0
w=q.ax=d.an()
u=A.ciN(w)
q.dx=u
s=D.c.fZ(w,u)
q.dy=x?255/s:0
if(!o||q.r===C.y6){o=q.ay=d.an()
x=A.ciN(o)
q.fr=x
r=D.c.fZ(o,x)
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
if(q.f<=8)q.bIl(d)},
gON(){var x=this.d
if(x!==40)if(x===124){x=this.ay
x===$&&B.b()
x=x===0}else x=!1
else x=!0
return x},
gb5(d){return Math.abs(this.c)},
bIl(d){var x,w,v,u,t,s=this,r=s.z
if(r===0)r=D.c.eq(1,s.f)
s.ch=new A.uh(new Uint8Array(r*3),r,3)
for(x=0;x<r;++x){w=J.v(d.a,d.d++)
v=J.v(d.a,d.d++)
u=J.v(d.a,d.d++)
t=J.v(d.a,d.d++)
s.ch.RN(x,u,v,w,t)}},
bw8(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(o.ch!=null){x=o.f
if(x===1){w=d.dg()
for(v=7;v>=0;--v)e.$4(D.c.nZ(w,v)&1,0,0,0)
return}else if(x===2){w=d.dg()
for(v=6;v>=0;v-=2)e.$4(D.c.nZ(w,v)&2,0,0,0)}else if(x===4){w=d.dg()
e.$4(D.c.R(w,4)&15,0,0,0)
e.$4(w&15,0,0,0)
return}else if(x===8){e.$4(d.dg(),0,0,0)
return}}x=o.r
if(x===C.y5&&o.f===32){u=d.an()
x=o.as
x===$&&B.b()
t=o.CW
t===$&&B.b()
t=D.c.fZ((u&x)>>>0,t)
x=o.cx
x===$&&B.b()
s=D.d.D(t*x)
x=o.at
x===$&&B.b()
t=o.cy
t===$&&B.b()
t=D.c.fZ((u&x)>>>0,t)
x=o.db
x===$&&B.b()
r=D.d.D(t*x)
x=o.ax
x===$&&B.b()
t=o.dx
t===$&&B.b()
t=D.c.fZ((u&x)>>>0,t)
x=o.dy
x===$&&B.b()
q=D.d.D(t*x)
if(o.gON())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.fZ((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.d.D(t*x)}return e.$4(s,r,q,p)}else{t=o.f
if(t===32&&x===C.Fg){q=d.dg()
r=d.dg()
s=d.dg()
p=d.dg()
return e.$4(s,r,q,o.gON()?255:p)}else if(t===24){q=d.dg()
r=d.dg()
return e.$4(d.dg(),r,q,255)}else if(t===16){u=d.bO()
x=o.as
x===$&&B.b()
t=o.CW
t===$&&B.b()
t=D.c.fZ((u&x)>>>0,t)
x=o.cx
x===$&&B.b()
s=D.d.D(t*x)
x=o.at
x===$&&B.b()
t=o.cy
t===$&&B.b()
t=D.c.fZ((u&x)>>>0,t)
x=o.db
x===$&&B.b()
r=D.d.D(t*x)
x=o.ax
x===$&&B.b()
t=o.dx
t===$&&B.b()
t=D.c.fZ((u&x)>>>0,t)
x=o.dy
x===$&&B.b()
q=D.d.D(t*x)
if(o.gON())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.fZ((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.d.D(t*x)}return e.$4(s,r,q,p)}else throw B.l(A.c6("Unsupported bitsPerPixel ("+t+") or compression ("+x.j(0)+")."))}}}
A.aiJ.prototype={
oz(d){var x,w=null
if(!A.clU(A.cQ(d,!1,w,0)))return w
x=A.cQ(d,!1,w,0)
this.a=x
return this.b=A.cOe(x,w)},
k8(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b
if(e==null)return new A.BM(f,f,f,f,0,C.bl,0,0)
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
else if(v===1)r=C.ff
else{if(v===2)s=C.h3
else if(v===4)s=C.h4
else s=C.a7
r=s}q=x?f:e.ch
p=A.hF(f,f,r,0,C.bl,e.gb5(e),f,0,t,q,C.a7,w,!1)
for(o=p.gb5(0)-1,x=e.c,w=1/x<0,s=x<0,x=x===0;o>=0;--o){n={}
if(!(x?w:s))m=o
else{l=p.a
l=l==null?f:l.b
m=(l==null?0:l)-1-o}l=g.a
k=l.jY(u)
l.d=l.d+(k.c-k.d)
l=p.a
j=l==null
i=j?f:l.a
if(i==null)i=0
n.a=0
h=j?f:l.el(0,m,f)
if(h==null)h=new A.fm()
for(;n.a<i;)e.bw8(k,new A.aYY(n,g,i,e,h))}return p},
ny(d,e,f){if(this.oz(e)==null)return null
return this.k8(0)}}
A.b6c.prototype={}
A.b4W.prototype={}
A.b4X.prototype={}
A.b8y.prototype={}
A.anL.prototype={}
A.aqH.prototype={
Pu(){return this.w},
rN(d,e,f,g,h){throw B.l(A.c6("B44 compression not yet supported."))},
Js(d,e,f){return this.rN(d,e,f,null,null)},
j(d){return B.o(this.r)+" "+this.x}}
A.Oa.prototype={
J(){return"ExrChannelType."+this.b}}
A.GA.prototype={
J(){return"ExrChannelName."+this.b}}
A.anM.prototype={
gbvY(){var x=this.c
x===$&&B.b()
return x},
aSP(d){var x=this,w=d.Q9()
x.a=w
if(w.length===0)return
x.c=C.auk[d.an()]
d.dg()
d.d+=3
x.f=d.an()
x.r=d.an()
w=x.a
if(w==="R"){x.w=!0
x.b=C.aka}else if(w==="G"){x.w=!0
x.b=C.akb}else if(w==="B"){x.w=!0
x.b=C.akc}else if(w==="A"){x.w=!0
x.b=C.akd}else{x.w=!1
x.b=C.ake}switch(x.c.a){case 0:x.d=4
break
case 1:x.d=2
break
case 2:x.d=4
break
default:throw B.l(A.c6("EXR Invalid pixel type: "+x.gbvY().j(0)))}}}
A.tM.prototype={
J(){return"ExrCompressorType."+this.b}}
A.b9F.prototype={
rN(d,e,f,g,h){throw B.l(A.c6("Unsupported compression type"))},
Js(d,e,f){return this.rN(d,e,f,null,null)}}
A.bhf.prototype={}
A.anN.prototype={}
A.b9H.prototype={
aSQ(d){var x,w,v,u,t=this,s=A.cQ(d,!1,null,0)
if(s.an()!==20000630)throw B.l(A.c6("File is not an OpenEXR image file."))
x=t.d=s.dg()
if(x!==2)throw B.l(A.c6("Cannot read version "+x+" image files."))
x=t.e=s.rG()
if((x&4294967289)>>>0!==0)throw B.l(A.c6("The file format version number's flag field contains unrecognized flags."))
if((x&16)===0){w=t.c
v=A.cxq(w.length,(x&2)!==0,s)
if(v.w>0)w.push(v)}else for(x=t.c;!0;){v=A.cxq(x.length,(t.e&2)!==0,s)
if(v.w<=0)break
x.push(v)}x=t.c
w=x.length
if(w===0)throw B.l(A.c6("Error reading image header"))
for(u=0;u<x.length;x.length===w||(0,B.R)(x),++u)x[u].bIk(s)
t.bhN(s)},
bhN(d){var x,w,v,u,t=this
for(x=t.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.R)(x),++v){u=x[v]
t.a=Math.max(t.a,u.w)
t.b=Math.max(t.b,u.x)
if(u.db)t.bhV(u,d)
else t.bhT(u,d)}},
bhV(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.e
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
i=u.jY(u.an())
u.d=u.d+(i.c-i.d)
h=b4.dy
h.toString
g=j*h
f=b4.dx
f.toString
h=w.rN(i,k*f,g,f,h)
e=h.length
d=new A.lS(h,0,e,0,!1)
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
switch(h.a){case 1:h=d.bO()
f=$.hE
a9=(f!=null?f:A.iz())[h]
break
case 2:a9=d.bO()
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
if(b0==null)b0=new A.fm()
h=a6.b
h===$&&B.b()
b0.m(0,h.a,a9)}else{h=a6.a
h===$&&B.b()
f=b3.b
b1=f!=null?f.i(0,h):b2
if(b1!=null)b1.fe(a7,g,a9,0,0)}}}++a4;++g}}++o;++q}++r}},
bhT(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=this.e
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
m=$.hV()
m.$flags&2&&B.B(m)
m[0]=n
n=$.lA()
m[0]=t.an()
l=t.jY(n[0])
t.d=t.d+(l.c-l.d)
if(q){n=w.Js(l,0,p)
k=new A.lS(n,0,n.length,0,!1)}else k=l
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
switch(n.a){case 1:n=k.bO()
m=$.hE
a1=(m!=null?m:A.iz())[n]
break
case 2:a1=k.bO()
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
if(a2==null)a2=new A.fm()
n=e.b
n===$&&B.b()
a2.m(0,n.a,a1)}else{n=e.a
n===$&&B.b()
m=a5.b
a3=m!=null?m.i(0,n):a4
if(a3!=null)a3.fe(a0,p,a1,0,0)}}}++h;++p}}}}
A.Zq.prototype={
aSR(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=B.I(y.N,y.I)
for(x=a2.e,w=y.t,v=a2.c,u=C.hK;!0;){t=a7.Q9()
if(t.length===0)break
s=a7.Q9()
r=a7.an()
q=a7.jY(r)
a7.d=a7.d+(q.c-q.d)
x.m(0,t,new A.anL(t,s,r))
switch(t){case"channels":for(;!0;){p=new A.anM()
p.aSP(q)
o=p.a
o===$&&B.b()
if(o.length===0)break
n=p.w
n===$&&B.b()
if(n){++a2.d
o=p.c
o===$&&B.b()
if(o===C.zE)u=C.hK
else u=o===C.zF?C.j6:C.j7}else{n=p.c
n===$&&B.b()
if(n===C.zE){n=a2.w
m=a2.x
a4.m(0,o,new A.OL(new Uint16Array(n*m),n,m,1))}else if(n===C.zF){n=a2.w
m=a2.x
a4.m(0,o,new A.OM(new Float32Array(n*m),n,m,1))}else if(n===C.Ir){n=a2.w
m=a2.x
a4.m(0,o,new A.OQ(new Uint32Array(n*m),n,m,1))}}v.push(p)}break
case"chromaticities":o=new Float32Array(8)
a2.at=o
n=q.an()
m=$.hV()
m.$flags&2&&B.B(m)
m[0]=n
n=$.Fj()
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
case"compression":a2.ax=C.awL[J.v(q.a,q.d++)]
break
case"dataWindow":o=q.an()
n=$.hV()
n.$flags&2&&B.B(n)
n[0]=o
o=$.lA()
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
n=$.hV()
n.$flags&2&&B.B(n)
n[0]=o
$.lA()
n[0]=q.an()
n[0]=q.an()
n[0]=q.an()
break
case"lineOrder":break
case"pixelAspectRatio":o=q.an()
n=$.hV()
n.$flags&2&&B.B(n)
n[0]=o
$.Fj()
break
case"screenWindowCenter":o=q.an()
n=$.hV()
n.$flags&2&&B.B(n)
n[0]=o
$.Fj()
n[0]=q.an()
break
case"screenWindowWidth":o=q.an()
n=$.hV()
n.$flags&2&&B.B(n)
n[0]=o
$.Fj()
break
case"tiles":a2.dx=q.an()
a2.dy=q.an()
j=J.v(q.a,q.d++)
a2.fr=j&15
a2.fx=D.c.R(j,4)&15
break
case"type":i=q.Q9()
if(i!=="deepscanline")if(i!=="deeptile")throw B.l(A.c6("EXR Invalid type: "+i))
break
default:break}}x=a2.w
a2.b=A.hF(a3,a3,u,0,C.bl,a2.x,a3,0,a2.d,a3,C.a7,x,!1)
for(x=new B.ce(a4,a4.r,a4.e,a4.$ti.h("ce<1>"));x.q();){w=x.d
o=a2.b
o.toString
n=a4.i(0,w)
n.toString
o.aKa(w,n)}if(a2.db){x={}
w=a2.r
w===$&&B.b()
a2.id=a2.aWu(w[0],w[2],w[1],w[3])
w=a2.r
a2.k1=a2.aWv(w[0],w[2],w[1],w[3])
if(a2.fr!==2)a2.k1=1
w=a2.id
w.toString
v=a2.r
a2.fy=a2.ajq(w,v[0],v[2],a2.dx,a2.fx)
v=a2.k1
v.toString
w=a2.r
a2.go=a2.ajq(v,w[1],w[3],a2.dy,a2.fx)
w=a2.aWs()
a2.k2=w
v=a2.dx
v.toString
v=w*v
a2.k3=v
a2.CW=A.cw7(a2.ax,a2,v,a2.dy)
x.a=x.b=0
v=a2.id
v.toString
w=a2.k1
w.toString
a2.ay=B.w1(v*w,new A.b9I(x,a2),!0,y.bk)}else{x=a2.x
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
x=A.cw7(a2.ax,a2,d,a3)
a2.CW=x
x=a2.cx=x.Pu()
w=a2.ch
v=w.length
o=new Uint32Array(v)
a2.cy=o
for(--v,a0=0,a1=0;a1<=v;++a1){if(D.c.ap(a1,x)===0)a0=0
o[a1]=a0
a0+=w[a1]}x=D.c.hu(a2.x+x,x)
a2.ay=B.a([new Uint32Array(x-1)],y.w)}},
aWu(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.Tx(w):u.SP(w))+1
break
case 2:v=e-d+1
x=(u.fx===0?u.Tx(v):u.SP(v))+1
break
default:throw B.l(A.c6("Unknown LevelMode format."))}return x},
aWv(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.Tx(w):u.SP(w))+1
break
case 2:v=g-f+1
x=(u.fx===0?u.Tx(v):u.SP(v))+1
break
default:throw B.l(A.c6("Unknown LevelMode format."))}return x},
Tx(d){var x
for(x=0;d>1;){++x
d=D.c.R(d,1)}return x},
SP(d){var x,w
for(x=0,w=0;d>1;){if((d&1)!==0)w=1;++x
d=D.c.R(d,1)}return x+w},
aWs(){var x,w,v,u,t
for(x=this.c,w=x.length,v=0,u=0;u<w;++u){t=x[u].d
t===$&&B.b()
v+=t}return v},
ajq(d,e,f,g,h){var x,w,v,u,t,s,r=J.iZ(d,y.p)
for(x=h===1,w=f-e+1,v=0;v<d;++v){u=D.c.eq(1,v)
t=D.c.hu(w,u)
if(x&&t*u<w)++t
s=Math.max(t,1)
g.toString
r[v]=D.c.hu(s+g-1,g)}return r}}
A.aqI.prototype={
bIk(d){var x,w,v,u,t,s=this
if(s.db)for(x=0;x<s.ay.length;++x)for(w=0;v=s.ay[x],w<v.length;++w){u=d.ada()
v.$flags&2&&B.B(v)
v[w]=u}else{t=s.ay[0].length
for(x=0;x<t;++x){v=s.ay[0]
u=d.ada()
v.$flags&2&&B.B(v)
v[x]=u}}}}
A.bhg.prototype={
aTa(d,e,f){var x,w,v,u=this,t=d.c.length,s=J.iZ(t,y.bc)
for(x=0;x<t;++x)s[x]=new A.aLE()
u.y=s
w=u.w
w.toString
v=D.c.b7(w*u.x,2)
u.z=new Uint16Array(v)},
Pu(){return this.x},
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
r+=v*l*u}k=a4.bO()
j=a4.bO()
if(j>=8192)throw B.l(A.c6("Error in header for PIZ-compressed data (invalid bitmap size)."))
i=new Uint8Array(8192)
if(k<=j){h=a4.l5(j-k+1)
g=h.c-h.d
for(f=k,q=0;q<g;++q,f=e){e=f+1
i[f]=J.v(h.a,h.d+q)}}d=new Uint16Array(65536)
a0=a3.bj9(i,d)
A.cRE(a4,a4.an(),a3.z,r)
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
A.cRH(u,l+f,a1,v,a2,a1*v,a0);++f}}v=a3.z
v.toString
a3.aV1(d,v,r)
v=a3.r
if(v==null){v=a3.w
v.toString
v=a3.r=A.q8(!1,v*a3.x+73728)}v.a=0
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
v.l7(u[l])}}v=a3.r
return J.d3(D.A.gag(v.c),0,v.a)},
Js(d,e,f){return this.rN(d,e,f,null,null)},
aV1(d,e,f){var x,w,v
for(x=e.$flags|0,w=0;w<f;++w){v=d[e[w]]
x&2&&B.B(e)
e[w]=v}},
bj9(d,e){var x,w,v,u,t
for(x=e.$flags|0,w=0,v=0;v<65536;++v)if(v===0||(d[v>>>3]&1<<(v&7))>>>0!==0){u=w+1
x&2&&B.B(e)
e[w]=v
w=u}for(u=w;u<65536;u=t){t=u+1
x&2&&B.B(e)
e[u]=0}return w-1}}
A.aLE.prototype={}
A.bhh.prototype={
Pu(){return this.x},
rN(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=C.iW.Cu(A.BV(a0.hK(),1,null,0),!1),d=f.y
if(d==null){d=f.w
d.toString
d=f.y=A.q8(!1,f.x*d)}d.a=0
x=B.a([0,0,0,0],y.t)
w=new Uint32Array(1)
v=J.d3(D.bq.gag(w),0,null)
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
for(g=0;g<4;++g)f.y.b_(v[g])}break
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
for(g=0;g<2;++g)f.y.b_(v[g])}break
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
for(g=0;g<4;++g)f.y.b_(v[g])}break}}d=f.y
return J.d3(D.A.gag(d.c),0,d.a)},
Js(d,e,f){return this.rN(d,e,f,null,null)}}
A.bhi.prototype={
Pu(){return 1},
rN(d,e,f,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.c,g=A.q8(!1,(h-d.d)*2)
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
u=$.on()
u.$flags&2&&B.B(u)
u[0]=v
t=$.pA()[0]
if(t<0){s=-t
for(;r=s-1,s>0;s=r)g.b_(J.v(d.a,d.d++))}else for(s=t;r=s-1,s>=0;s=r)g.b_(J.v(d.a,d.d++))}q=J.d3(D.A.gag(g.c),0,g.a)
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
Js(d,e,f){return this.rN(d,e,f,null,null)},
j(d){return B.o(this.w)}}
A.aqJ.prototype={
Pu(){return this.x},
rN(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=C.iW.Cu(A.BV(d.hK(),1,null,0),!1)
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
Js(d,e,f){return this.rN(d,e,f,null,null)},
j(d){return B.o(this.w)}}
A.b9G.prototype={
k8(d){var x=this.a
if(x==null)return null
return x.c[d].b},
ny(d,e,f){var x=new A.b9H(B.a([],y.m))
x.aSQ(e)
this.a=x
return this.k8(0)}}
A.a_1.prototype={
byD(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.b,w=this.d,v=-1,u=-1,t=0;t<x;++t){s=w.na(t)
r=w.n8(t)
q=w.n7(t)
p=w.ou(t)
if(s===d&&r===e&&q===f&&p===g)return t
o=d-s
n=e-r
m=f-q
l=g-p
k=o*o+n*n+m*m+l*l
if(u===-1){u=t
v=k}else if(k<v){u=t
v=k}}return u},
af2(){var x,w,v,u,t,s,r,q=this
if(q.c==null)return q.d
x=q.d
w=x.a
v=new A.uh(new Uint8Array(w*4),w,4)
for(u=0;u<w;++u){t=x.na(u)
s=x.n8(u)
r=x.n7(u)
v.RN(u,t,s,r,u===q.c?0:255)}return v}}
A.a_2.prototype={
aSU(d){var x,w,v,u,t,s,r=this
r.a=d.bO()
r.b=d.bO()
r.c=d.bO()
r.d=d.bO()
x=d.dg()
r.e=(x&64)!==0
if((x&128)!==0){r.f=A.cwD(D.c.eq(1,(x&7)+1))
for(w=0;v=r.f,w<v.b;++w){u=J.v(d.a,d.d++)
t=J.v(d.a,d.d++)
s=J.v(d.a,d.d++)
v.d.pk(w,u,t,s)}}r.x=d.d-d.b}}
A.aqK.prototype={}
A.apk.prototype={}
A.bdx.prototype={
oz(d){var x,w,v,u,t,s,r,q,p,o,n=this
n.f=A.cQ(d,!1,null,0)
n.a=new A.apk(B.a([],y.b))
if(!n.amA())return null
try{for(;u=n.f,t=u.d,t<u.c;){s=u.a
u.d=t+1
x=J.v(s,t)
switch(x){case 44:w=n.asJ()
if(w==null){u=n.a
return u}u=w
u.r=n.e
u.w=n.c
if(n.b!==0){if(w.f==null&&n.a.e!=null){u=n.a.e
t=u.a
s=u.b
r=u.c
u=u.d
w.f=new A.a_1(t,s,r,new A.uh(new Uint8Array(B.bU(u.c)),u.a,u.b))}if(w.f!=null)w.f.c=n.d}n.a.r.push(w)
break
case 33:u=n.f
v=J.v(u.a,u.d++)
if(J.m(v,255)){u=n.f
if(u.qj(J.v(u.a,u.d++))==="NETSCAPE2.0"){q=J.v(u.a,u.d++)
p=J.v(u.a,u.d++)
if(q===3&&p===1)n.r=u.bO()}else n.VF()}else if(J.m(v,249)){u=n.f
u.toString
n.bhJ(u)}else n.VF()
break
case 59:u=n.a
return u
default:break}}}catch(o){}return n.a},
bhJ(d){var x,w,v,u=this
d.dg()
x=d.dg()
u.e=d.bO()
u.d=d.dg()
d.dg()
u.c=D.c.R(x,2)&7
u.b=x&1
w=d.Sd(1,0)
if(J.v(w.a,w.d)===44){++d.d
v=u.asJ()
if(v==null)return
v.r=u.e
v.w=u.c
if(u.b!==0){w=v.f
if(w==null&&u.a.e!=null){w=u.a.e
w.toString
w=v.f=A.cSM(w)}if(w!=null)w.c=u.d}u.a.r.push(v)}},
k8(d){var x,w,v,u=this,t=u.f
if(t==null||u.a==null)return null
x=u.a.r
w=x.length
if(d>=w)return null
v=x[d]
t.toString
x=v.x
x===$&&B.b()
t.d=x
return u.aYU(v)},
ny(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null
if(a5.oz(a8)==null)return a6
x=a5.a.r.length
if(x===1)return a5.k8(0)
for(x=y.p,w=a6,v=w,u=0;t=a5.a.r,u<t.length;++u){a9=t[u]
s=a5.k8(u)
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
if(t){v.nq(s)
w=s
continue}l=a9.f
if(!(l!=null)){t=a5.a.e
t.toString
l=t}t=o?a6:p.a
if(t==null)t=0
r=o?a6:p.b
if(r==null)r=0
k=A.hF(a6,a6,C.a7,0,C.bl,r,a6,0,1,l.af2(),C.a7,t,!1)
t=a9.w
if(t===2){t=a5.a.c.a
t=!D.A.gT(t)?t[0]:0
r=l.d
j=r.na(t)
i=r.n8(t)
h=r.n7(t)
g=t===l.c?0:255
t=new Uint8Array(4)
t[0]=j
t[1]=i
t[2]=h
t[3]=g
r=k.a
if(r!=null)r.nt(0,new A.xJ(t))}else if(t!==3){t=a9.a
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
f=B.I(x,x)
for(r=l.b,e=0;e<r;++e)f.m(0,e,l.byD(t.na(e),t.n8(e),t.n7(e),t.ou(e)))
t=k.a
d=t==null?a6:J.ht(t.gag(t))
if(d==null){t=k.a
t=t==null?a6:t.gag(t)
if(t==null)t=D.A.gag(new Uint8Array(0))
d=J.ht(t)}t=w.a
a0=t==null?a6:J.ht(t.gag(t))
if(a0==null){t=w.a
t=t==null?a6:t.gag(t)
if(t==null)t=D.A.gag(new Uint8Array(0))
a0=J.ht(t)}for(a1=d.length,t=d.$flags|0,a2=0;a2<a1;++a2){a3=f.i(0,a0[a2])
if(a3!==-1){a3.toString
t&2&&B.B(d)
d[a2]=a3}}}}k.y=s.y
for(t=s.a,t=t.ga1(t);t.q();){a4=t.gL(t)
if(a4.gaN(a4)!==0){r=a4.gn6(a4)
q=a9.a
q===$&&B.b()
p=a4.gnU(a4)
o=a9.b
o===$&&B.b()
k.y3(r+q,p+o,a4)}}v.nq(k)
w=k}return v},
asJ(){var x,w=this.f
if(w.d>=w.c)return null
x=new A.aqK()
x.aSU(w);++this.f.d
this.VF()
return x},
aYU(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null
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
D.bq.kZ(x,0,4096,4098)
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
s=A.hF(m,m,C.a7,0,C.bl,w,m,0,1,t.af2(),C.a7,x,!1)
r=new Uint8Array(x)
x=d.e
x===$&&B.b()
if(x){x=d.b
x===$&&B.b()
for(w=x+w,q=0,p=0;q<4;++q)for(o=x+C.aoO[q];o<w;o+=C.asr[q],++p){if(!n.amC(r))return s
n.aur(s,o,t,r)}}else for(o=0;o<w;++o){if(!n.amC(r))return s
n.aur(s,o,t,r)}return s},
aur(d,e,f,g){var x,w,v,u=g.length
for(x=0;x<u;++x){w=g[x]
v=d.a
if(v!=null)v.fe(x,e,w,0,0)}},
amA(){var x,w,v,u,t,s=this,r=s.f.qj(6)
if(r!=="GIF87a"&&r!=="GIF89a")return!1
x=s.a
x.toString
x.a=s.f.bO()
x=s.a
x.toString
x.b=s.f.bO()
w=s.f.dg()
x=s.a
x.toString
x.c=new A.xJ(new Uint8Array(B.bU(B.a([s.f.dg()],y.t))));++s.f.d
if((w&128)!==0){x=s.a
x.toString
x.e=A.cwD(D.c.eq(1,(w&7)+1))
for(v=0;v<s.a.e.b;++v){x=s.f
u=J.v(x.a,x.d++)
x=s.f
t=J.v(x.a,x.d++)
x=s.f
w=J.v(x.a,x.d++)
s.a.e.d.pk(v,u,t,w)}}s.a.toString
return!0},
amC(d){var x=this,w=x.as
w.toString
x.as=w-d.length
if(!x.aZ7(d))return!1
if(x.as===0)x.VF()
return!0},
VF(){var x,w,v,u=this.f
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
aZ7(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.ay
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
w=u}}for(k=d.$flags|0;w<x;){s=l.ch=l.aZ6()
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
t=l.a44(v,s,t)
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
v=l.a44(t,v,n)
o.$flags&2&&B.B(o)
o[q]=v}else{o===$&&B.b()
p.toString
v=l.a44(t,p,n)
o.$flags&2&&B.B(o)
o[q]=v}}v=l.ch
v.toString
l.CW=v}}return!0},
aZ6(){var x,w,v,u,t=this
if(t.cy>12)return null
for(;x=t.ax,w=t.cy,x<w;){x=t.aVr()
x.toString
w=t.at
v=t.ax
t.at=(w|D.c.eS(x,v))>>>0
t.ax=v+8}v=t.at
u=C.at6[w]
t.at=D.c.fZ(v,w)
t.ax=x-w
x=t.db
if(x<4097){++x
t.db=x
x=x>t.cx&&w<12}else x=!1
if(x){t.cx=t.cx<<1>>>0
t.cy=w+1}return v&u},
a44(d,e,f){var x,w,v=0
while(!0){if(e>f){x=v+1
w=v<=4095
v=x}else w=!1
if(!w)break
if(e>4095)return 4098
e=d[e]}return e},
aVr(){var x,w,v=this,u=v.w,t=u[0],s=u.$flags|0
if(t===0){t=v.f.dg()
s&2&&B.B(u)
u[0]=t
u=v.w
t=u[0]
if(t===0)return null
D.A.ht(u,1,1+t,v.f.l5(t).hK())
u=v.w
x=u[1]
u.$flags&2&&B.B(u)
u[1]=2
u[0]=u[0]-1}else{w=u[1]
s&2&&B.B(u)
u[1]=w+1
x=u[w]
u[0]=t-1}return x}}
A.OC.prototype={
J(){return"IcoType."+this.b}}
A.bfY.prototype={}
A.aq7.prototype={}
A.bfW.prototype={
gb5(d){return D.c.b7(A.FC.prototype.gb5.call(this,0),2)},
gON(){return!(this.d===40&&this.f===32)&&A.FC.prototype.gON.call(this)}}
A.bfX.prototype={
ny(d,e,f){var x,w,v,u=this,t=A.cQ(e,!1,null,0)
u.a=t
x=u.b=A.cwX(t)
if(x==null)return null
t=x.e.length
if(t===1)return u.k8(0)
for(w=null,v=0;v<u.b.e.length;++v){f=u.k8(v)
if(f==null)continue
if(w==null){f.w=C.bl
w=f}else w.nq(f)}return w},
k8(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=this.a
if(a7!=null){x=this.b
x=x==null||a8>=x.d}else x=!0
if(x)return a6
w=this.b.e[a8]
x=a7.a
a7=a7.b+w.e
v=w.d
u=J.aVd(x,a7,a7+v)
t=new A.awy(A.cxr())
y.D.a(u)
if(t.Id(u))return t.dk(0,u)
s=A.q8(!1,14)
s.l7(19778)
s.ih(v)
s.ih(0)
s.ih(0)
a7=A.cQ(u,!1,a6,0)
x=A.ctW(A.cQ(J.d3(D.A.gag(s.c),0,s.a),!1,a6,0))
v=a7.d
r=a7.an()
q=a7.an()
p=$.hV()
p.$flags&2&&B.B(p)
p[0]=q
q=$.lA()
o=q[0]
p[0]=a7.an()
q=q[0]
n=a7.bO()
m=a7.bO()
l=C.QK[a7.an()]
a7.an()
p[0]=a7.an()
p[0]=a7.an()
p=a7.an()
a7.an()
k=new A.bfW(x,o,q,r,n,m,l,p,v)
k.ai3(a7,x)
if(r!==40&&n!==1)return a6
j=p===0&&m<=8?40+4*D.c.eq(1,m):40+4*p
x.b=j
s.a-=4
s.ih(j)
i=A.cQ(u,!1,a6,0)
h=new A.b6c(!0)
h.a=i
h.b=k
g=h.k8(0)
if(m>=32)return g
f=32-D.c.ap(o,32)
e=D.c.b7(f===32?o:o+f,8)
for(a7=1/q<0,x=q<0,q=q===0,d=0;d<D.c.b7(A.FC.prototype.gb5.call(k,0),2);++d){if(!(q?a7:x))a0=d
else{v=g.a
v=v==null?a6:v.b
a0=(v==null?0:v)-1-d}a1=i.jY(e)
i.d=i.d+(a1.c-a1.d)
v=g.a
a2=v==null?a6:v.el(0,a0,a6)
if(a2==null)a2=new A.fm()
for(a3=0;a3<o;){a4=J.v(a1.a,a1.d++)
a5=7
while(!0){if(!(a5>-1&&a3<o))break
if((a4&D.c.eS(1,a5))>>>0!==0)a2.saN(0,0)
a2.q();++a3;--a5}}}return g}}
A.ajH.prototype={}
A.H5.prototype={}
A.H6.prototype={}
A.a_s.prototype={
gp(d){return this.a}}
A.bhH.prototype={}
A.C5.prototype={}
A.bhJ.prototype={
QM(d){var x,w,v,u,t,s=this,r=A.cQ(d,!0,null,0)
s.a=r
x=r.Sd(2,0)
if(J.v(x.a,x.d)!==255||J.v(x.a,x.d+1)!==216)return!1
if(s.FM()!==216)return!1
w=s.FM()
v=!1
u=!1
while(!0){if(w!==217){r=s.a
r=r.d<r.c}else r=!1
if(!r)break
t=s.a.bO()
if(t<2)break
r=s.a
r.d=r.d+(t-2)
switch(w){case 192:case 193:case 194:v=!0
break
case 218:u=!0
break}w=s.FM()}return v&&u},
qi(d,e){var x,w,v,u,t,s,r,q,p=this
p.a=A.cQ(e,!0,null,0)
p.bhB()
if(p.x.length!==1)throw B.l(A.c6("Only single frame JPEGs supported"))
for(x=p.Q,w=0;v=p.d,u=v.z,w<u.length;++w){t=v.y.i(0,u[w])
v=t.a
u=p.d
s=u.f
r=t.b
q=u.r
u=p.aVz(u,t)
v=v===1&&s===2?1:0
x.push(new A.ajH(u,v,r===1&&q===2?1:0))}},
bhB(){var x,w,v,u,t,s=this
if(s.FM()!==216)throw B.l(A.c6("Start Of Image marker not found."))
x=s.FM()
while(!0){if(x!==217){w=s.a
w===$&&B.b()
w=w.d<w.c}else w=!1
if(!w)break
w=s.a
w===$&&B.b()
v=w.bO()
if(v<2)B.a6(A.c6("Invalid Block"))
w=s.a
u=w.jY(v-2)
w.d=w.d+(u.c-u.d)
switch(x){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:s.bhC(x,u)
break
case 219:s.bhG(u)
break
case 192:case 193:case 194:s.bhI(x,u)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw B.l(A.c6("Unhandled frame type "+D.c.m2(x,16)))
case 196:s.bhF(u)
break
case 221:s.e=u.bO()
break
case 218:s.bhS(u)
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
break}x=s.FM()}},
FM(){var x,w=this,v=w.a
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
bhH(d){if(d.an()!==1165519206)return
if(d.bO()!==0)return
this.r.qi(0,d)},
bhC(d,e){var x,w,v,u,t=this,s=e
if(d===224){x=s
w=!1
if(J.v(x.a,x.d)===74){x=s
if(J.v(x.a,x.d+1)===70){x=s
if(J.v(x.a,x.d+2)===73){x=s
if(J.v(x.a,x.d+3)===70){x=s
x=J.v(x.a,x.d+4)===0}else x=w}else x=w}else x=w}else x=w
if(x){x=new A.bhN()
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
s.Sd(14+3*w*v,14)}}else if(d===225)t.bhH(s)
else if(d===238){x=s
w=!1
if(J.v(x.a,x.d)===65){x=s
if(J.v(x.a,x.d+1)===100){x=s
if(J.v(x.a,x.d+2)===111){x=s
if(J.v(x.a,x.d+3)===98){x=s
if(J.v(x.a,x.d+4)===101){x=s
x=J.v(x.a,x.d+5)===0}else x=w}else x=w}else x=w}else x=w}else x=w
if(x){t.c=new A.bhH()
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
x.d=J.v(w.a,w.d+11)}}else if(d===254)try{s.bIo()}catch(u){B.aZ(u)}},
bhG(d){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=this.w;v=d.d,u=v<x,u;){u=d.a
d.d=v+1
t=J.v(u,v)
s=D.c.R(t,4)
t&=15
if(t>=4)throw B.l(A.c6("Invalid number of quantization tables"))
v=w[t]
if(v==null){v=new Int16Array(64)
w[t]=v}for(u=s!==0,r=0;r<64;++r){q=u?d.bO():J.v(d.a,d.d++)
p=C.vw[r]
v.$flags&2&&B.B(v)
v[p]=q}}if(u)throw B.l(A.c6("Bad length for DQT block"))},
bhI(d,e){var x,w,v,u,t,s,r,q=this
if(q.d!=null)throw B.l(A.c6("Duplicate JPG frame data found."))
x=q.d=new A.aqX(B.I(y.p,y.c),B.a([],y.t))
x.b=d===194
x.c=e.dg()
x=q.d
x.toString
x.d=e.bO()
x=q.d
x.toString
x.e=e.bO()
w=e.dg()
for(x=q.w,v=0;v<w;++v){u=J.v(e.a,e.d++)
t=J.v(e.a,e.d++)
s=D.c.R(t,4)
r=J.v(e.a,e.d++)
q.d.z.push(u)
q.d.y.m(0,u,new A.C5(s&15,t&15,x,r))}q.d.bHd()
q.x.push(q.d)},
bhF(d){var x,w,v,u,t,s,r,q,p,o,n,m
for(x=d.c,w=this.z,v=this.y;u=d.d,u<x;){t=d.a
d.d=u+1
s=J.v(t,u)
r=new Uint8Array(16)
for(q=0,p=0;p<16;++p){r[p]=J.v(d.a,d.d++)
q+=r[p]}o=d.jY(q)
d.d=d.d+(o.c-o.d)
n=o.hK()
if((s&16)!==0){s-=16
m=v}else m=w
if(m.length<=s)D.b.su(m,s+1)
m[s]=this.aVL(r,n)}},
bhS(d){var x,w,v,u,t,s,r,q=this,p=d.dg()
if(p<1||p>4)throw B.l(A.c6("Invalid SOS block"))
x=B.w1(p,new A.bhK(q,d),!0,y.c)
w=d.dg()
v=d.dg()
u=d.dg()
t=D.c.R(u,4)
s=q.a
s===$&&B.b()
r=q.d
t=new A.aqY(s,r,x,q.e,w,v,t&15,u&15)
s=r.w
s===$&&B.b()
t.f=s
t.r=r.b
t.ob(0)},
aVL(d,e){var x,w,v,u,t,s,r,q,p,o,n=B.a([],y.C),m=16
while(!0){if(!(m>0&&d[m-1]===0))break;--m}x=y.aH
n.push(new A.TT(B.a([],x)))
w=n[0]
for(v=0,u=0;u<m;){for(t=0;t<d[u];++t){w=n.pop()
s=w.a
r=s.length
q=w.b
if(r<=q)D.b.su(s,q+1)
s[w.b]=new A.a_s(e[v])
for(;s=w.b,s>0;)w=n.pop()
w.b=s+1
n.push(w)
for(;n.length<=u;w=p){s=B.a([],x)
p=new A.TT(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.su(r,o+1)
r[w.b]=new A.H6(s)}++v}++u
if(u<m){s=B.a([],x)
p=new A.TT(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.su(r,o+1)
r[w.b]=new A.H6(s)
w=p}}return n[0].a},
aVz(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.e
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
A.dcC(k,j[p][l],u,v)
i=l<<3>>>0
for(h=0,g=0;g<8;++g){f=t[o+g]
for(n=0;n<8;++n,h=e){f.toString
e=h+1
k=u[h]
f.$flags&2&&B.B(f)
f[i+n]=k}}}}return t}}
A.TT.prototype={}
A.aqX.prototype={
bHd(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.y,w=B.q(x).h("ce<1>"),v=new B.ce(x,x.r,x.e,w);v.q();){u=x.i(0,v.d)
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
k=J.iZ(l,t)
for(j=0;j<l;++j){i=J.iZ(m,v)
for(h=0;h<m;++h)i[h]=new Int32Array(64)
k[j]=i}s.e=p
s.f=n
s.r=k}}}
A.bhN.prototype={}
A.aqY.prototype={
ob(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.y,f=g.length,e=h.r
e.toString
if(e)if(h.Q===0)x=h.at===0?h.gaYN():h.gaYP()
else x=h.at===0?h.gaYE():h.gaYG()
else x=h.gaYK()
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
for(l=0;l<m;++l)for(k=0;k<n;++k)h.aYV(r,x,t,l,k)}++t;++q}}h.ch=0
j=J.v(w.a,w.d)
i=J.v(w.a,w.d+1)
if(j===255)if(i>=208&&i<=215)w.d+=2
else break}},
BQ(){var x,w=this,v=w.ch
if(v>0){--v
w.ch=v
return D.c.nZ(w.ay,v)&1}v=w.a
if(v.d>=v.c)return null
x=v.dg()
w.ay=x
if(x===255)if(v.dg()!==0)return null
w.ch=7
return D.c.R(w.ay,7)&1},
LM(d){var x,w=new A.H6(d)
for(;x=this.BQ(),x!=null;){if(w instanceof A.H6)w=w.a[x]
if(w instanceof A.a_s)return w.a}return null},
a5U(d){var x,w
for(x=0;d>0;){w=this.BQ()
if(w==null)return null
x=(x<<1|w)>>>0;--d}return x},
Mb(d){var x
if(d==null)return 0
if(d===1)return this.BQ()===1?1:-1
x=this.a5U(d)
if(x==null)return 0
if(x>=D.c.eS(1,d-1))return x
return x+D.c.eq(-1,d)+1},
aYL(d,e){var x,w,v,u,t,s,r=this,q=d.w
q===$&&B.b()
x=r.LM(q)
w=x===0?0:r.Mb(x)
q=d.y
q===$&&B.b()
q+=w
d.y=q
e.$flags&2&&B.B(e)
e[0]=q
for(v=1;v<64;){q=d.x
q===$&&B.b()
u=r.LM(q)
if(u==null)break
t=u&15
s=u>>>4
if(t===0){if(s<15)break
v+=16
continue}v+=s
t=r.Mb(t)
e[C.vw[v]]=t;++v}},
aYO(d,e){var x,w,v=d.w
v===$&&B.b()
x=this.LM(v)
w=x===0?0:D.c.eq(this.Mb(x),this.ax)
v=d.y
v===$&&B.b()
v+=w
d.y=v
e.$flags&2&&B.B(e)
e[0]=v},
aYQ(d,e){var x=e[0],w=this.BQ()
w.toString
w=D.c.eq(w,this.ax)
e.$flags&2&&B.B(e)
e[0]=(x|w)>>>0},
aYF(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.CW
if(o>0){p.CW=o-1
return}x=p.Q
w=p.as
for(o=p.ax,v=e.$flags|0;x<=w;){u=d.x
u===$&&B.b()
u=p.LM(u)
u.toString
t=u&15
s=u>>>4
if(t===0){if(s<15){o=p.a5U(s)
o.toString
p.CW=o+D.c.eq(1,s)-1
break}x+=16
continue}x+=s
r=C.vw[x]
u=p.Mb(t)
q=D.c.eq(1,o)
v&2&&B.B(e)
e[r]=u*q;++x}},
aYH(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.Q,n=p.as
$label0$1:for(x=p.ax,w=e.$flags|0,v=0;o<=n;){u=C.vw[o]
t=p.cx
switch(t){case 0:t=d.x
t===$&&B.b()
s=p.LM(t)
if(s==null)throw B.l(A.c6("Invalid progressive encoding"))
r=s&15
v=s>>>4
if(r===0)if(v<15){t=p.a5U(v)
t.toString
p.CW=t+D.c.eq(1,v)
p.cx=4}else{p.cx=1
v=16}else{if(r!==1)throw B.l(A.c6("invalid ACn encoding"))
p.cy=p.Mb(r)
p.cx=v!==0?2:3}continue $label0$1
case 1:case 2:q=e[u]
if(q!==0){t=p.BQ()
t.toString
t=D.c.eq(t,x)
w&2&&B.B(e)
e[u]=q+t}else{--v
if(v===0)p.cx=t===2?3:0}break
case 3:t=e[u]
if(t!==0){q=p.BQ()
q.toString
q=D.c.eq(q,x)
w&2&&B.B(e)
e[u]=t+q}else{t=p.cy
t===$&&B.b()
t=D.c.eq(t,x)
w&2&&B.B(e)
e[u]=t
p.cx=0}break
case 4:t=e[u]
if(t!==0){q=p.BQ()
q.toString
q=D.c.eq(q,x)
w&2&&B.B(e)
e[u]=t+q}break}++o}if(p.cx===4)if(--p.CW===0)p.cx=0},
aYV(d,e,f,g,h){var x,w,v=this.f
v===$&&B.b()
x=D.c.hu(f,v)*d.b+g
w=D.c.ap(f,v)*d.a+h
v=d.r
v===$&&B.b()
if(x>=v.length)return
v=v[x]
if(w>=v.length)return
e.$2(d,v[w])}}
A.aqW.prototype={
ny(d,e,f){var x=A.cxF()
x.qi(0,e)
if(x.x.length!==1)throw B.l(A.c6("only single frame JPEGs supported"))
return A.db7(x)},
dk(d,e){return this.ny(0,e,null)}}
A.bhI.prototype={
J(){return"JpegChroma."+this.b}}
A.bhL.prototype={
aKL(d){d=D.d.D(D.c.bc(d,1,100))
if(this.at===d)return
this.b9R(d<50?D.d.h1(5000/d):D.c.h1(200-d*2))
this.at=d},
bxF(b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=A.q8(!0,8192)
a8.z_(a9,216)
a8.z_(a9,224)
a9.l7(16)
a9.b_(74)
a9.b_(70)
a9.b_(73)
a9.b_(70)
a9.b_(0)
a9.b_(1)
a9.b_(1)
a9.b_(0)
a9.l7(1)
a9.l7(1)
a9.b_(0)
a9.b_(0)
a8.bpD(a9,b0.gwU())
a8.bpH(a9)
x=b0.gcZ(0)
w=b0.gb5(0)
a8.z_(a9,192)
a9.l7(17)
a9.b_(8)
a9.l7(w)
a9.l7(x)
a9.b_(3)
a9.b_(1)
x=b1===C.JT
a9.b_(x?17:34)
a9.b_(0)
a9.b_(2)
a9.b_(17)
a9.b_(1)
a9.b_(3)
a9.b_(17)
a9.b_(1)
a8.bpG(a9)
a8.z_(a9,218)
a9.l7(12)
a9.b_(3)
a9.b_(1)
a9.b_(0)
a9.b_(2)
a9.b_(17)
a9.b_(3)
a9.b_(17)
a9.b_(0)
a9.b_(63)
a9.b_(0)
a8.ax=0
a8.ay=7
v=b0.gcZ(0)
u=b0.gb5(0)
if(x){t=new Float32Array(64)
s=new Float32Array(64)
r=new Float32Array(64)
for(x=a8.c,w=a8.d,q=0,p=0,o=0,n=0;n<u;n+=8)for(m=0;m<v;m+=8){a8.KL(b0,m,n,v,u,t,s,r)
l=a8.e
k=a8.r
k===$&&B.b()
q=a8.wk(a9,t,x,q,l,k)
k=a8.f
l=a8.w
l===$&&B.b()
p=a8.wk(a9,s,w,p,k,l)
o=a8.wk(a9,r,w,o,a8.f,a8.w)}}else{x=y.z
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
a8.ala(i,g,a0,a3,a6)
a8.ala(h,f,a1,a4,a7)
a7=a8.e
a4=a8.r
a4===$&&B.b()
q=a8.wk(a9,a5,x,a8.wk(a9,a2,x,a8.wk(a9,d,x,a8.wk(a9,k,x,q,a7,a4),a8.e,a8.r),a8.e,a8.r),a8.e,a8.r)
a4=a8.f
a7=a8.w
a7===$&&B.b()
p=a8.wk(a9,i,w,p,a4,a7)
o=a8.wk(a9,h,w,o,a8.f,a8.w)}}x=a8.ay
if(x>=0){++x
a8.wt(a9,B.a([D.c.eS(1,x)-1,x],y.t))}a8.z_(a9,217)
return J.d3(D.A.gag(a9.c),0,a9.a)},
KL(d,e,f,g,h,i,j,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.as,w=i.$flags|0,v=j.$flags|0,u=a0.$flags|0,t=f+1,s=0;s<64;++s){r=s>>>3
q=f+r
p=e+(s&7)
if(q>=h)q-=t+r-h
if(p>=g)p-=p-g+1
o=d.a
n=o==null?null:o.el(p,q,null)
if(n==null)n=new A.fm()
if(n.gdv()!==C.a7)n=n.oa(C.a7)
m=D.d.D(n.gaw(n))
l=D.d.D(n.gaK())
k=D.d.D(n.gaM(n))
o=D.c.R(x[m]+x[l+256]+x[k+512],16)
w&2&&B.B(i)
i[s]=o-128
o=D.c.R(x[m+768]+x[l+1024]+x[k+1280],16)
v&2&&B.B(j)
j[s]=o-128
o=D.c.R(x[m+1280]+x[l+1536]+x[k+1792],16)
u&2&&B.B(a0)
a0[s]=o-128}},
ala(d,e,f,g,h){var x,w,v,u,t,s,r,q
for(x=d.$flags|0,w=0;w<64;++w){if(w<32)v=D.c.ap(w,8)<4?e:f
else v=D.c.ap(w,8)<4?g:h
u=(D.c.b7(D.c.ap(w,32),8)<<4>>>0)+(D.c.ap(w,4)<<1>>>0)
t=v[u]
s=v[u+1]
r=v[u+8]
q=v[u+9]
x&2&&B.B(d)
d[w]=(t+s+r+q)/4}},
z_(d,e){d.b_(255)
d.b_(e&255)},
b9R(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.a,w=x.$flags|0,v=0;v<64;++v){u=D.d.h1((C.ayy[v]*d+50)/100)
if(u<1)u=1
else if(u>255)u=255
t=C.qX[v]
w&2&&B.B(x)
x[t]=u}for(w=g.b,t=w.$flags|0,s=0;s<64;++s){r=D.d.h1((C.arZ[s]*d+50)/100)
if(r<1)r=1
else if(r>255)r=255
q=C.qX[s]
t&2&&B.B(w)
w[q]=r}for(t=g.c,q=t.$flags|0,p=g.d,o=p.$flags|0,n=0,m=0;m<8;++m)for(l=0;l<8;++l){k=C.qX[n]
j=x[k]
i=C.Lg[m]
h=C.Lg[l]
q&2&&B.B(t)
t[n]=1/(j*i*h*8)
k=w[k]
o&2&&B.B(p)
p[n]=1/(k*i*h*8);++n}},
SX(d,e){var x,w,v,u,t,s=y.t,r=B.a([B.a([],s)],y.cQ)
for(x=0,w=0,v=1;v<=16;++v){for(u=1;u<=d[v];++u){t=e[w]
if(r.length<=t)D.b.su(r,t+1)
r[t]=B.a([x,v],s);++w;++x}x*=2}return r},
b9G(){var x,w,v,u,t,s,r,q,p,o,n
for(x=this.y,w=this.x,v=y.t,u=1,t=2,s=1;s<=15;++s){for(r=u;r<t;++r){q=32767+r
x[q]=s
w[q]=B.a([r,s],v)}for(q=t-1,p=-q,o=-u;p<=o;++p){n=32767+p
x[n]=s
w[n]=B.a([q+p,s],v)}u=u<<1>>>0
t=t<<1>>>0}},
b9S(){var x,w,v
for(x=this.as,w=x.$flags|0,v=0;v<256;++v){w&2&&B.B(x)
x[v]=19595*v
x[v+256]=38470*v
x[v+512]=7471*v+32768
x[v+768]=-11059*v
x[v+1024]=-21709*v
x[v+1280]=32768*v+8421375
x[v+1536]=-27439*v
x[v+1792]=-5329*v}},
b0D(d4,d5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3
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
bpD(d,e){var x,w
if(e.gT(0))return
x=A.q8(!1,8192)
e.js(0,x)
w=J.d3(D.A.gag(x.c),0,x.a)
this.z_(d,225)
d.l7(w.length+8)
d.ih(1165519206)
d.l7(0)
d.mx(w)},
bpH(d){var x,w,v
this.z_(d,219)
d.l7(132)
d.b_(0)
for(x=this.a,w=0;w<64;++w)d.b_(x[w])
d.b_(1)
for(x=this.b,v=0;v<64;++v)d.b_(x[v])},
bpG(d){var x,w,v,u,t,s,r,q
this.z_(d,196)
d.l7(418)
d.b_(0)
for(x=0;x<16;){++x
d.b_(C.Sq[x])}for(w=0;w<=11;++w)d.b_(C.qq[w])
d.b_(16)
for(v=0;v<16;){++v
d.b_(C.Kl[v])}for(u=0;u<=161;++u)d.b_(C.LF[u])
d.b_(1)
for(t=0;t<16;){++t
d.b_(C.Nh[t])}for(s=0;s<=11;++s)d.b_(C.qq[s])
d.b_(17)
for(r=0;r<16;){++r
d.b_(C.M6[r])}for(q=0;q<=161;++q)d.b_(C.OA[q])},
wk(d,e,f,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=a2[0],h=a2[240],g=j.b0D(e,f)
for(x=j.Q,w=0;w<64;++w)x[C.qX[w]]=g[w]
v=x[0]
v.toString
u=v-a0
if(u===0){t=a1[0]
t.toString
j.wt(d,t)}else{s=32767+u
a1.toString
t=j.y[s]
t.toString
t=a1[t]
t.toString
j.wt(d,t)
t=j.x[s]
t.toString
j.wt(d,t)}r=63
while(!0){if(!(r>0&&x[r]===0))break;--r}if(r===0){i.toString
j.wt(d,i)
return v}for(t=j.y,q=j.x,p=1;p<=r;){o=p
while(!0){if(!(x[o]===0&&o<=r))break;++o}n=o-p
if(n>=16){m=D.c.R(n,4)
for(l=1;l<=m;++l){h.toString
j.wt(d,h)}n&=15}k=x[o]
k.toString
s=32767+k
k=t[s]
k.toString
k=a2[(n<<4>>>0)+k]
k.toString
j.wt(d,k)
k=q[s]
k.toString
j.wt(d,k)
p=o+1}if(r!==63){i.toString
j.wt(d,i)}return v},
wt(d,e){var x,w=this,v=e[0],u=e[1]-1
for(;u>=0;){if((v&D.c.eS(1,u))>>>0!==0)w.ax=(w.ax|D.c.eS(1,w.ay))>>>0;--u
if(--w.ay<0){x=w.ax
if(x===255){d.b_(255)
d.b_(0)}else d.b_(x)
w.ay=7
w.ax=0}}}}
A.Qt.prototype={
J(){return"PngDisposeMode."+this.b}}
A.a3b.prototype={
J(){return"PngBlendMode."+this.b}}
A.a3c.prototype={}
A.aqL.prototype={}
A.D5.prototype={
J(){return"PngFilterType."+this.b}}
A.bsL.prototype={}
A.bhj.prototype={}
A.awy.prototype={
Id(d){var x,w=A.cQ(d,!0,null,0).l5(8)
for(x=0;x<8;++x)if(J.v(w.a,w.d+x)!==D.QZ[x])return!1
return!0},
oz(b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=A.cQ(b4,!0,b2,0)
b1.d=b3
x=b3.l5(8)
for(w=0;w<8;++w)if(J.v(x.a,x.d+w)!==D.QZ[w])return b2
for(b3=b1.a,v=b3.cx,u=y.t,t=b3.cy,s=y.L,r=b3.ax;!0;){q=b1.d
p=q.d-q.b
o=q.an()
n=b1.d.qj(4)
switch(n){case"tEXt":q=b1.d
m=q.jY(o)
q.d=q.d+(m.c-m.d)
l=m.hK()
k=l.length
for(w=0;w<k;++w)if(l[w]===0){q=w+1
r.m(0,D.e0.dk(0,new Uint8Array(l.subarray(0,B.qC(0,w,k)))),D.e0.dk(0,new Uint8Array(l.subarray(q,B.qC(q,b2,k)))))
break}b1.d.d+=4
break
case"pHYs":q=b1.d
m=q.jY(o)
q.d=q.d+(m.c-m.d)
j=A.cb(m,b2,0)
j.an()
j.an()
J.v(j.a,j.d++)
b1.d.d+=4
break
case"IHDR":q=b1.d
m=q.jY(o)
q.d=q.d+(m.c-m.d)
i=A.cb(m,b2,0)
h=i.hK()
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
m=q.jY(o)
q.d=q.d+(m.c-m.d)
b3.w=m.hK()
if(b1.d.an()!==A.xf(s.a(b3.w),A.xf(new B.e8(n),0)))throw B.l(A.c6("Invalid "+n+" checksum"))
break
case"tRNS":q=b1.d
m=q.jY(o)
q.d=q.d+(m.c-m.d)
b3.x=m.hK()
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
a2=b1.d.bO()
a3=b1.d.bO()
q=b1.d
a4=J.v(q.a,q.d++)
q=b1.d
a5=J.v(q.a,q.d++)
q=C.apz[a4]
f=C.avW[a5]
v.push(new A.aqL(B.a([],u),e,d,a0,a1,a2,a3,q,f))
b1.d.d+=4
break
case"fdAT":b1.d.an()
D.b.gV(v).y.push(p)
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
b3.z=new A.ajC(q)}}else if(q===0||q===4){b1.d.bO()
o-=2}else if(q===2||q===6){q=b1.d
q.bO()
q.bO()
q.bO()
o-=24}if(o>0)b1.d.d+=o
b1.d.d+=4
break
case"iCCP":b3.Q=b1.d.Q9()
q=b1.d
J.v(q.a,q.d++)
q=b3.Q
f=b1.d
m=f.jY(o-(q.length+2))
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
k8(b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=null,b4=b1.a,b5=b4.a,b6=b4.b,b7=b4.cx,b8=b7.length
if(b8===0||b9===0){w=B.a([],y.a)
b7=b4.cy
v=b7.length
for(u=0,t=0;t<v;++t){b8=b1.d
b8===$&&B.b()
b8.d=b7[t]
s=b8.an()
r=b1.d.qj(4)
b8=b1.d
q=b8.jY(s)
b8.d=b8.d+(q.c-q.d)
p=q.hK()
u+=p.length
w.push(p)
if(b1.d.an()!==A.xf(p,A.xf(new B.e8(r),0)))throw B.l(A.c6("Invalid "+r+" checksum"))}b3=new Uint8Array(u)
for(b7=w.length,o=0,n=0;n<w.length;w.length===b7||(0,B.R)(w),++n){p=w[n]
J.clB(b3,o,p)
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
q=b8.jY(s-4)
b8.d=b8.d+(q.c-q.d)
p=q.hK()
u+=p.length
w.push(p)}b3=new Uint8Array(u)
for(b7=w.length,o=0,n=0;n<w.length;w.length===b7||(0,B.R)(w),++n){p=w[n]
J.clB(b3,o,p)
o+=p.length}}b7=b4.d
l=1
if(!(b7===3))if(!(b7===0)){if(b7===4)b7=2
else b7=b7===6?4:3
l=b7}x=null
try{x=C.iW.Cu(A.BV(b3,1,b2,0),!1)}catch(k){return b2}j=A.cQ(x,!0,b2,0)
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
i.RN(t,b7[d],b7[d+1],b7[d+2],a0)}}}if(b4.d===0&&b4.x!=null&&i==null&&b4.c<=8){g=b4.x
a1=g.length
b7=b4.c
h=D.c.eS(1,b7)
i=new A.uh(new Uint8Array(h*4),h,4)
if(b7===1)a2=255
else if(b7===2)a2=85
else{b7=b7===4?17:1
a2=b7}for(t=0;t<h;++t){a3=t*a2
i.RN(t,a3,a3,a3,255)}for(b7=i.b,b8=3<b7,a4=i.c,a5=a4.$flags|0,t=0;t<a1;t+=2){a6=(g[t]&255)<<8|g[t+1]&255
if(a6<h)if(b8){a5&2&&B.B(a4)
a4[a6*b7+3]=0}}}b7=b4.c
if(b7===1)a7=C.ff
else if(b7===2)a7=C.h3
else{if(b7===4)b8=C.h4
else b8=b7===16?C.cc:C.a7
a7=b8}b8=b4.d
if(b8===0&&b4.x!=null&&b7>8)l=4
a8=A.hF(b2,b2,a7,0,C.bl,b6,b2,0,b8===2&&b4.x!=null?4:l,i,C.a7,b5,!1)
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
b1.BP(j,a8,0,1,1,2,b5,b6>>>1)}else b1.bgQ(j,a8)
b4.a=a9
b4.b=b0
b7=b4.at
if(b7!=null)a8.c=new A.a_u(b4.Q,C.zR,b7)
b4=b4.ax
if(b4.a!==0)a8.bqv(b4)
return a8},
ny(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(g.oz(e)==null)return f
x=g.a
w=x.cx
v=w.length
if(v===0){x=g.k8(0)
x.toString
return x}for(v=y.g,u=f,t=u,s=0;s<x.ch;++s){a0=w[s]
r=g.k8(s)
if(r==null)continue
if(t==null||u==null){t=r.axY(r.gqb())
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
o=o===(n==null?0:n)&&a0.d===0&&a0.e===0&&a0.x===C.a1Q}else o=!1
if(o){q=a0.f
r.y=D.d.D((q===0||a0.r===0?0:q/a0.r)*1000)
t.nq(r)
u=r
continue}i=t.x
u=A.BL((i===$?t.x=B.a([],v):i)[q],!1,!1)
h=p.w
if(h===C.a1S){q=p.d
o=p.e
n=x.z
if(n==null){n=new Uint8Array(4)
m=new A.MU(n)
n[0]=0
n[1]=0
n[2]=0
n[3]=0
n=m}A.dav(u,!1,n,q,q+p.b-1,o,o+p.c-1)}else if(h===C.a1T&&s>1){i=t.x
if(i===$)i=t.x=B.a([],v)
q=p.d
o=p.e
n=p.b
m=p.c
u=A.cr0(u,i[s-2],C.y4,m,n,q,o,m,n,q,o)}q=a0.f
u.y=D.d.D((q===0||a0.r===0?0:q/a0.r)*1000)
q=a0.x===C.a1R?C.y4:C.y3
u=A.cr0(u,r,q,f,f,a0.d,a0.e,f,f,f,f)
t.nq(u)}return t},
dk(d,e){return this.ny(0,e,null)},
BP(a0,a1,a2,a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=e.d
if(d===4)x=2
else if(d===2)x=3
else{d=d===6?4:1
x=d}w=x*e.c
v=D.c.R(w+7,3)
u=D.c.R(w*a6+7,3)
t=B.a([null,null],y.e)
s=B.a([0,0,0,0],y.t)
for(e=a4>1,r=a4-a2,q=a3,p=0,o=0;p<a7;++p,q+=a5,++f.e){n=C.Q1[J.v(a0.a,a0.d++)]
m=a0.jY(u)
a0.d=a0.d+(m.c-m.d)
d=m.hK()
t[o]=d
o=1-o
f.atV(n,v,d,t[o])
f.c=f.b=0
l=new A.lS(d,0,d.length,0,!0)
for(d=r<=1,k=a2,j=0;j<a6;++j,k+=a4){f.aqW(l,s)
i=a1.a
i=i==null?null:i.el(k,q,null)
f.a6p(i==null?new A.fm():i,s)
if(!d||e)for(h=0;h<a4;++h)for(i=q+h,g=0;g<r;++g)f.a6p(a1.kz(k+g,i),s)}}},
bgQ(d,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a,e=f.d
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
for(n=0,m=0;n<u;++n,m=j){l=C.Q1[J.v(d.a,d.d++)]
k=d.jY(t)
d.d=d.d+(k.c-k.d)
f=k.hK()
q[m]=f
j=1-m
g.atV(l,s,f,q[j])
g.c=g.b=0
f=q[m]
e=f.length
i=new A.lS(f,0,e,0,!0)
for(h=0;h<v;++h){g.aqW(i,p)
g.a6p(o.gL(o),p)
o.q()}}},
atV(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=f.length
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
tb(d,e){var x,w,v,u,t,s=this
if(e===0)return 0
if(e===8)return d.dg()
if(e===16)return d.bO()
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
w=D.c.fZ(s.b,x)
s.c=x
return w&t},
aqW(d,e){var x=this,w=x.a,v=w.d
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
a6p(d,e){var x,w,v,u,t,s,r,q,p=this.a,o=p.d
switch(o){case 0:x=p.x
if(x!=null&&p.c>8){p=x[0]
o=x[1]
w=e[0]
d.ik(w,w,w,w!==((p&255)<<24|o&255)>>>0?d.gcg():0)
return}d.kC(e[0],0,0)
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
return}}d.kC(v,w,u)
return
case 3:d.sef(0,e[0])
return
case 4:d.kC(e[0],e[1],0)
return
case 6:d.ik(e[0],e[1],e[2],e[3])
return}throw B.l(A.c6("Invalid color type: "+o+"."))}}
A.awz.prototype={
J(){return"PngFilter."+this.b}}
A.bsJ.prototype={
nq(d){var x,w,v,u,t,s,r,q,p=this,o=8192,n=d.a
n=n==null?null:n.grs()
if(!(n===!0&&d.gdv()!==C.cc))n=d.gmM()<8&&!d.grm()&&d.gqb()>1
else n=!0
if(n)d=d.oa(C.a7)
if(p.w==null){n=A.q8(!0,o)
p.w=n
n.mx(B.a([137,80,78,71,13,10,26,10],y.t))
x=A.q8(!0,o)
x.ih(d.gcZ(0))
x.ih(d.gb5(0))
x.b_(d.gmM())
if(d.grm())n=3
else if(d.gqb()===1)n=0
else if(d.gqb()===2)n=4
else n=d.gqb()===3?2:6
x.b_(n)
x.b_(0)
x.b_(0)
x.b_(0)
n=p.w
n.toString
p.tj(n,"IHDR",J.d3(D.A.gag(x.c),0,x.a))
n=d.c
if(n!=null){x=A.q8(!0,o)
x.mx(new B.e8(n.a))
x.b_(0)
x.b_(0)
x.mx(n.btB())
n=p.w
n.toString
p.tj(n,"iCCP",J.d3(D.A.gag(x.c),0,x.a))}if(d.grm()){n=p.a
if(n!=null){n=n.a
n===$&&B.b()
p.avr(n)}else{n=d.a
n=n==null?null:n.geW()
n.toString
p.avr(n)}}if(p.r){x=A.q8(!0,o)
n=p.e
n===$&&B.b()
x.ih(n)
x.ih(p.c)
n=p.w
n.toString
p.tj(n,"acTL",J.d3(D.A.gag(x.c),0,x.a))}}w=d.grm()?1:d.gqb()
v=d.gdv()===C.cc?2:1
n=d.gcZ(0)
u=d.gb5(0)
t=d.gb5(0)
s=new Uint8Array(n*u*w*v+t)
p.bgR(0,d,s)
r=C.FY.azw(s,p.d)
n=d.d
if(n!=null)for(n=new B.ce(n,n.r,n.e,B.q(n).h("ce<1>"));n.q();){u=n.d
t=d.d.i(0,u)
t.toString
x=new A.av2(!0,new Uint8Array(8192))
x.mx(D.pM.ct(u))
x.b_(0)
x.mx(D.pM.ct(t))
u=p.w
u.toString
p.tj(u,"tEXt",J.d3(D.A.gag(x.c),0,x.a))}if(p.r){x=A.q8(!0,o)
x.ih(p.f)
x.ih(d.gcZ(0))
x.ih(d.gb5(0))
x.ih(0)
x.ih(0)
x.l7(d.y)
x.l7(1000)
x.b_(1)
x.b_(0)
n=p.w
n.toString
p.tj(n,"fcTL",J.d3(D.A.gag(x.c),0,x.a));++p.f}if(p.f<=1){n=p.w
n.toString
p.tj(n,"IDAT",r)}else{q=A.q8(!0,o)
q.ih(p.f)
q.mx(r)
n=p.w
n.toString
p.tj(n,"fdAT",J.d3(D.A.gag(q.c),0,q.a));++p.f}},
byJ(d){var x,w=this,v=w.w
if(v==null)return null
w.tj(v,"IEND",B.a([],y.t))
w.f=0
v=w.w
x=J.d3(D.A.gag(v.c),0,v.a)
w.w=null
return x},
bxG(d,e){var x,w,v,u,t,s=this,r=d.gl0().length
if(r<=1){s.e=1
s.r=!1
s.nq(d)}else{r=d.gl0().length
s.e=r
s.r=r>1
s.c=d.r
if(d.grm()){x=new A.boz(new Int32Array(256))
x.bcl(256)
x.bqd(d)
s.a=x
for(r=d.gl0(),w=r.length,v=0;v<r.length;r.length===w||(0,B.R)(r),++v){u=r[v]
if(u!==d){x.aoP(u)
x.alU()
x.aou()
x.akm()}}}for(r=d.gl0(),w=r.length,v=0;v<r.length;r.length===w||(0,B.R)(r),++v){u=r[v]
t=s.a
if(t!=null)s.nq(t.aHL(u))
else s.nq(u)}}r=s.byJ(0)
r.toString
return r},
avr(d){var x,w,v,u=this
if(d.gdv()===C.a7&&d.b===3&&d.a===256){x=u.w
x.toString
u.tj(x,"PLTE",J.d3(d.gag(d),0,null))}else{x=d.a
w=A.q8(!0,x*3)
for(v=0;v<x;++v){w.b_(D.d.D(d.na(v)))
w.b_(D.d.D(d.n8(v)))
w.b_(D.d.D(d.n7(v)))}x=u.w
x.toString
u.tj(x,"PLTE",J.d3(D.A.gag(w.c),0,w.a))}if(d.b===4){x=d.a
w=A.q8(!0,x)
for(v=0;v<x;++v)w.b_(D.d.D(d.ou(v)))
x=u.w
x.toString
u.tj(x,"tRNS",J.d3(D.A.gag(w.c),0,w.a))}},
tj(d,e,f){d.ih(f.length)
d.mx(new B.e8(e))
d.mx(f)
d.ih(A.xf(f,A.xf(new B.e8(e),0)))},
bgR(d,e,f){var x,w,v=this,u=e.grm()?C.aUc:v.b,t=e.gag(0),s=e.a.grJ(),r=e.grm()?1:e.gqb(),q=D.c.R(r*e.gmM()+7,3),p=e.gmM()+7>>>3,o=u.a,n=J.db(t),m=0,l=0,k=null,j=0
while(!0){x=e.a
x=x==null?null:x.b
if(!(j<(x==null?0:x)))break
w=n.z2(t,l,s)
l+=s
switch(o){case 1:m=v.b0Q(w,p,q,f,m)
break
case 2:m=v.b0T(w,k,p,f,m)
break
case 3:m=v.b0K(w,k,p,q,f,m)
break
case 4:m=v.b0N(w,k,p,q,f,m)
break
default:m=v.b0M(w,p,f,m)
break}++j
k=w}},
avl(d,e,f,g,h){var x,w,v;--d
for(x=g.$flags|0;d>=0;h=w){w=h+1
v=e[f+d]
x&2&&B.B(g)
g[h]=v;--d}return h},
b0M(d,e,f,g){var x,w,v=g+1
f.$flags&2&&B.B(f)
f[g]=0
x=d.length
if(e===1)for(g=v,w=0;w<x;++w,g=v){v=g+1
f[g]=d[w]}else for(g=v,w=0;w<x;w+=e)g=this.avl(e,d,w,f,g)
return g},
b0Q(d,e,f,g,h){var x,w,v,u,t,s,r=h+1
g.$flags&2&&B.B(g)
g[h]=1
for(h=r,x=0;x<f;x+=e)h=this.avl(e,d,x,g,h)
w=d.length
for(v=e-1,x=f;x<w;x+=e)for(u=v,t=0;t<e;++t,--u,h=r){r=h+1
s=x+u
g[h]=d[s]-d[s-f]&255}return h},
b0T(d,e,f,g,h){var x,w,v,u,t,s,r,q=h+1
g.$flags&2&&B.B(g)
g[h]=2
x=d.length
for(w=f-1,v=e!=null,h=q,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,h=q){r=v?e[u+t]:0
q=h+1
g[h]=d[u+t]-r&255}return h},
b0K(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o=i+1
h.$flags&2&&B.B(h)
h[i]=3
x=d.length
for(w=f-1,v=e==null,i=o,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=o){r=u+t
q=r<g?0:d[r-g]
p=v?0:e[r]
o=i+1
h[i]=d[r]-(q+p>>>1)}return i},
beQ(d,e,f){var x=d+e-f,w=x>d?x-d:d-x,v=x>e?x-e:e-x,u=x>f?x-f:f-x
if(w<=v&&w<=u)return d
else if(v<=u)return e
return f},
b0N(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m=i+1
h.$flags&2&&B.B(h)
h[i]=4
x=d.length
for(w=f-1,v=e==null,i=m,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=m){r=u+t
q=r<g
p=q?0:d[r-g]
o=v?0:e[r]
n=q||v?0:e[r-g]
m=i+1
h[i]=d[r]-this.beQ(p,o,n)&255}return i}}
A.D6.prototype={
J(){return"PnmFormat."+this.b}}
A.IP.prototype={}
A.bsM.prototype={
Id(d){var x
this.b=A.cQ(d,!1,null,0)
x=this.TO()
if(x==="P1"||x==="P2"||x==="P5"||x==="P3"||x==="P6")return!0
return!1},
ny(d,e,f){if(this.oz(e)==null)return null
return this.k8(0)},
oz(d){var x,w,v=this
v.b=A.cQ(d,!1,null,0)
x=v.TO()
if(x==="P1"){w=v.a=new A.IP(C.ns)
w.e=C.a1U}else if(x==="P2"){w=v.a=new A.IP(C.ns)
w.e=C.a1V}else if(x==="P5"){w=v.a=new A.IP(C.ns)
w.e=C.C7}else if(x==="P3"){w=v.a=new A.IP(C.ns)
w.e=C.a1W}else if(x==="P6"){w=v.a=new A.IP(C.ns)
w.e=C.C8}else return v.b=null
w.a=v.M6()
w=v.a
w.toString
w.b=v.M6()
w=v.a
if(w.a===0||w.b===0)return v.a=v.b=null
return w},
k8(d){var x,w,v,u,t,s=this,r=null,q=s.a
if(q==null)return r
x=q.e
if(x===C.a1U){x=q.a
w=A.hF(r,r,C.ff,0,C.bl,q.b,r,0,1,r,C.a7,x,!1)
for(q=w.a,q=q.ga1(q);q.q();){v=q.gL(q)
if(s.TO()==="1")v.kC(1,1,1)
else v.kC(0,0,0)}return w}else if(x===C.a1V||x===C.C7){u=s.M6()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.hF(r,r,s.aAc(u),0,C.bl,q,r,0,1,r,C.a7,x,!1)
for(q=w.a,q=q.ga1(q);q.q();){v=q.gL(q)
t=s.V5(s.a.e,u)
v.kC(t,t,t)}return w}else if(x===C.a1W||x===C.C8){u=s.M6()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.hF(r,r,s.aAc(u),0,C.bl,q,r,0,3,r,C.a7,x,!1)
for(q=w.a,q=q.ga1(q);q.q();)q.gL(q).kC(s.V5(s.a.e,u),s.V5(s.a.e,u),s.V5(s.a.e,u))
return w}return r},
aAc(d){if(d>255)return C.cc
if(d>15)return C.a7
if(d>3)return C.h4
if(d>1)return C.h3
return C.ff},
V5(d,e){if(d===C.C7||d===C.C8)return this.b.dg()
return this.M6()},
M6(){var x,w,v=this.TO()
if(J.bl(v)===0)return 0
try{x=B.dY(v,null)
return x}catch(w){return 0}},
TO(){var x,w,v,u,t=this.b
if(t==null)return""
x=this.c
if(x.length!==0)return D.b.iy(x,0)
w=D.e.cl(t.bIn())
if(w.length===0)return""
for(;D.e.be(w,"#");)w=D.e.cl(this.b.aE4(70))
t=y.U
v=B.H(new B.ag(B.a(w.split(" "),y.T),new A.bsN(),t),!0,t.h("w.E"))
for(t=v.length,u=0;u<t;++u)if(D.e.be(v[u],"#")){D.b.su(v,u)
break}D.b.H(x,v)
if(x.length===0)return""
return D.b.iy(x,0)}}
A.a3v.prototype={
bIm(d,e,f,g,h,i,j){switch(h){case 0:g.toString
this.bhR(d,e,f,g)
break
case 1:if(i==null)i=this.bhO(d,f)
g.toString
this.bhQ(d,e,f,g,i,j)
break
default:throw B.l(A.c6("Unsupported compression: "+h))}},
bhO(d,e){var x,w=new Uint16Array(e)
for(x=0;x<e;++x)w[x]=d.bO()
return w},
bhR(d,e,f,g){var x,w=e*f
if(g===16)w*=2
if(w>d.c-d.d){x=new Uint8Array(w)
this.c=x
D.A.kZ(x,0,w,255)
return}this.c=d.l5(w).hK()},
bhQ(d,e,f,g,h,i){var x,w,v,u,t,s,r=e*f
if(g===16)r*=2
x=new Uint8Array(r)
this.c=x
w=i*f
if(w>=h.length){D.A.kZ(x,0,r,255)
return}for(v=0,u=0;u<f;++u,w=t){t=w+1
s=d.jY(h[w])
d.d=d.d+(s.c-s.d)
this.aZ_(s,this.c,v)
v+=e}},
aZ_(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=e.$flags|0,v=e.length;u=d.d,u<x;){t=d.a
d.d=u+1
u=J.v(t,u)
t=$.on()
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
A.btJ.prototype={
gaC_(){$===$&&B.b()
return $},
aTl(d){var x,w,v=this
v.as=A.cQ(d,!0,null,0)
v.bhm()
if(v.c!==943870035)return
x=v.as.an()
v.as.l5(x)
x=v.as.an()
v.as.l5(x)
x=v.as.an()
v.as.l5(x)
w=v.as
v.at=w.l5(w.c-w.d)},
ob(d){var x,w=this
if(w.c===943870035){x=w.as
x===$&&B.b()
x=x==null}else x=!0
if(x)return!1
w.bhP()
w.at=w.as=null
return!0},
ayQ(){if(!this.ob(0))return null
return this.bJ_()},
bJ_(){var x,w=this,v=null,u=w.y
if(u!=null)return u
u=w.a
u=A.hF(v,v,C.a7,0,C.bl,w.b,v,0,4,v,C.a7,u,!1)
w.y=u
u.S(0)
for(x=0;u=w.gaC_(),D.c.JY(x,u.gu(u));++x)w.gaC_().i(0,x)
u=w.y
u.toString
return u},
bhm(){var x,w,v=this,u=v.as
u===$&&B.b()
v.c=u.an()
u=v.as.bO()
v.d=u
if(u!==1){v.c=0
return}x=v.as.l5(6)
for(w=0;w<6;++w)if(J.v(x.a,x.d+w)!==0){v.c=0
return}v.e=v.as.bO()
v.b=v.as.an()
v.a=v.as.an()
v.f=v.as.bO()
v.r=C.aCL[v.as.bO()]},
bhP(){var x,w,v,u,t,s,r=this,q=r.at
q===$&&B.b()
q.d=q.b
x=q.bO()
if(x===1){q=r.b
w=r.e
w===$&&B.b()
v=q*w
u=new Uint16Array(v)
for(t=0;t<v;++t)u[t]=r.at.bO()}else u=null
r.x=B.a([],y._)
t=0
while(!0){q=r.e
q===$&&B.b()
if(!(t<q))break
q=r.x
w=r.at
w.toString
s=t===3?-1:t
s=new A.a3v(s)
s.bIm(w,r.a,r.b,r.f,x,u,t)
q.push(s);++t}r.y=A.cWX(r.r,r.f,r.a,r.b,r.x)}}
A.btI.prototype={
ny(d,e,f){var x,w,v,u=null,t=A.czD(e)
this.a=t
x=1
if(x===1){t=t.ayQ()
return t}for(w=u,v=0;v<x;++v){t=this.a
f=t==null?u:t.ayQ()
if(f==null)continue
if(w==null){f.w=C.akQ
w=f}else w.nq(f)}return w}}
A.ax3.prototype={}
A.yZ.prototype={
aJ(d,e){return new A.yZ(this.a*e,this.b*e,this.c*e)},
a5(d,e){return new A.yZ(this.a+e.a,this.b+e.b,this.c+e.c)},
a4(d,e){return new A.yZ(this.a-e.a,this.b-e.b,this.c-e.c)}}
A.m2.prototype={
aJ(d,e){var x=this
return new A.m2(x.a*e,x.b*e,x.c*e,x.d*e)},
a5(d,e){var x=this
return new A.m2(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
a4(d,e){var x=this
return new A.m2(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)}}
A.a3y.prototype={
gb5(d){return this.b}}
A.QL.prototype={
gb5(d){return this.f}}
A.ax2.prototype={
gb5(d){return this.b}}
A.rz.prototype={
sNt(d){var x=this.a,w=this.b
x.$flags&2&&B.B(x)
x[w+1]=d},
QU(){var x=this.e,w=this.d
if(x)return new A.yZ(C.fv[w>>>9],C.fv[w>>>4&31],C.ew[w&15])
else return new A.yZ(C.ew[w>>>7&15],C.ew[w>>>3&15],C.vm[w&7])},
QW(){var x=this.e,w=this.d
if(x)return new A.m2(C.fv[w>>>9],C.fv[w>>>4&31],C.ew[w&15],255)
else return new A.m2(C.ew[w>>>7&15],C.ew[w>>>3&15],C.vm[w&7],C.vm[w>>>11&7])},
QV(){var x=this.r,w=this.f
if(x)return new A.yZ(C.fv[w>>>10],C.fv[w>>>5&31],C.fv[w&31])
else return new A.yZ(C.ew[w>>>8&15],C.ew[w>>>4&15],C.ew[w&15])},
QX(){var x=this.r,w=this.f
if(x)return new A.m2(C.fv[w>>>10],C.fv[w>>>5&31],C.fv[w&31],255)
else return new A.m2(C.ew[w>>>8&15],C.ew[w>>>4&15],C.ew[w&15],C.vm[w>>>12&7])},
Lp(){var x=this,w=x.c?1:0,v=x.d,u=x.e?1:0,t=x.f,s=x.r?1:0
return(w|(v&16383)<<1|u<<15|(t&32767)<<16|s<<31)>>>0},
uw(d){var x=this,w=x.a[x.b+1]
x.c=(w&1)===1
x.sNt(x.Lp())
x.d=w>>>1&16383
x.sNt(x.Lp())
x.e=(w>>>15&1)===1
x.sNt(x.Lp())
x.f=w>>>16&32767
x.sNt(x.Lp())
x.r=(w>>>31&1)===1
x.sNt(x.Lp())}}
A.btK.prototype={
oz(d){var x,w=this,v=d.length,u=v-(v>>>1&1431655765)>>>0
u=(u&858993459)+(u>>>2&858993459)
if((u+(u>>>4)>>>0&252645135)*16843009>>>0>>>24===1){x=w.aYJ(d)
if(x!=null){w.a=d
return w.b=x}}x=w.aYZ(d)
if(x!=null){w.a=d
return w.b=x}x=w.aYX(d)
if(x!=null){w.a=d
return w.b=x}return null},
aYZ(d){var x,w,v=A.cQ(d,!1,null,0)
if(v.an()!==52)return null
if(v.an()!==55727696)return null
x=B.a([0,0,0,0],y.t)
w=new A.QL(x)
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
aYX(d){var x,w,v=A.cQ(d,!1,null,0)
if(v.an()!==52)return null
x=new A.a3y()
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
aYJ(d){var x,w,v,u,t,s,r=null,q=d.length,p=A.cQ(d,!1,r,0)
if(p.an()!==0)return r
x=new A.ax2()
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
k8(d){var x,w,v=this,u=v.b
if(u==null||v.a==null)return null
if(u instanceof A.ax2){u=u.a
x=v.b
x=x.gb5(x)
w=v.a
w.toString
return v.a3n(u,x,w)}else if(u instanceof A.a3y){u=v.a
u.toString
return v.aYW(u)}else if(u instanceof A.QL){u=v.a
u.toString
return v.aYY(u)}return null},
ny(d,e,f){if(this.oz(e)==null)return null
return this.k8(0)},
aYW(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.length
if(j<52||l.b==null)return k
x=l.b
x.toString
y.ab.a(x)
w=A.cQ(d,!1,k,0)
w.d+=52
v=x.Q
if(v<1)v=(x.d&4096)!==0?6:1
if(v!==1)return k
u=x.a
t=x.b
if(u*t*x.f/8>j-52)return k
switch(x.d&255){case 16:s=A.hF(k,k,C.a7,0,C.bl,t,k,0,4,k,C.a7,u,!1)
for(x=s.a,x=x.ga1(x);x.q();){r=x.gL(x)
q=J.v(w.a,w.d++)
p=J.v(w.a,w.d++)
r.saw(0,p&240)
r.saK((p&15)<<4)
r.saM(0,q&240)
r.saN(0,(q&15)<<4)}return s
case 17:s=A.hF(k,k,C.a7,0,C.bl,t,k,0,4,k,C.a7,u,!1)
for(x=s.a,x=x.ga1(x);x.q();){r=x.gL(x)
o=w.bO()
n=(o&1)!==0?255:0
r.saw(0,o>>>8&248)
r.saK(o>>>3&248)
r.saM(0,(o&62)<<2)
r.saN(0,n)}return s
case 18:s=A.hF(k,k,C.a7,0,C.bl,t,k,0,4,k,C.a7,u,!1)
for(x=s.a,x=x.ga1(x);x.q();){r=x.gL(x)
r.saw(0,J.v(w.a,w.d++))
r.saK(J.v(w.a,w.d++))
r.saM(0,J.v(w.a,w.d++))
r.saN(0,J.v(w.a,w.d++))}return s
case 19:s=A.hF(k,k,C.a7,0,C.bl,t,k,0,3,k,C.a7,u,!1)
for(x=s.a,x=x.ga1(x);x.q();){r=x.gL(x)
o=w.bO()
r.saw(0,o>>>8&248)
r.saK(o>>>3&252)
r.saM(0,(o&31)<<3)}return s
case 20:s=A.hF(k,k,C.a7,0,C.bl,t,k,0,3,k,C.a7,u,!1)
for(x=s.a,x=x.ga1(x);x.q();){r=x.gL(x)
o=w.bO()
r.saw(0,(o&31)<<3)
r.saK(o>>>2&248)
r.saM(0,o>>>7&248)}return s
case 21:s=A.hF(k,k,C.a7,0,C.bl,t,k,0,3,k,C.a7,u,!1)
for(x=s.a,x=x.ga1(x);x.q();){r=x.gL(x)
r.saw(0,J.v(w.a,w.d++))
r.saK(J.v(w.a,w.d++))
r.saM(0,J.v(w.a,w.d++))}return s
case 22:s=A.hF(k,k,C.a7,0,C.bl,t,k,0,1,k,C.a7,u,!1)
for(x=s.a,x=x.ga1(x);x.q();)x.gL(x).saw(0,J.v(w.a,w.d++))
return s
case 23:s=A.hF(k,k,C.a7,0,C.bl,t,k,0,4,k,C.a7,u,!1)
for(x=s.a,x=x.ga1(x);x.q();){r=x.gL(x)
n=J.v(w.a,w.d++)
m=J.v(w.a,w.d++)
r.saw(0,m)
r.saK(m)
r.saM(0,m)
r.saN(0,n)}return s
case 24:return k
case 25:return x.y===0?l.akF(u,t,w.hK()):l.a3n(u,t,w.hK())}return k},
aYY(d){var x,w,v,u=this
if(!(u.b instanceof A.QL))return null
x=A.cQ(d,!1,null,0)
w=x.d+=52
v=y.aM.a(u.b)
x.d=w+v.Q
if(v.c[0]===0)switch(v.b){case 2:return u.akF(v.r,v.f,x.hK())
case 3:return u.a3n(v.r,v.f,x.hK())}return null},
akF(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=A.hF(b5,b5,C.a7,0,C.bl,c6,b5,0,3,b5,C.a7,c5,!1),b7=c5/4|0,b8=b7-1,b9=J.oo(D.A.gag(c7),0,null),c0=new A.rz(b9),c1=new A.rz(J.oo(D.A.gag(c7),0,null)),c2=new A.rz(J.oo(D.A.gag(c7),0,null)),c3=new A.rz(J.oo(D.A.gag(c7),0,null)),c4=new A.rz(J.oo(D.A.gag(c7),0,null))
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
j=c1.QU()
i=C.d3[r][0]
h=c2.QU()
g=C.d3[r][1]
f=c3.QU()
e=C.d3[r][2]
d=c4.QU()
a0=C.d3[r][3]
a1=c1.QV()
a2=C.d3[r][0]
a3=c2.QV()
a4=C.d3[r][1]
a5=c3.QV()
a6=C.d3[r][2]
a7=c4.QV()
a8=C.d3[r][3]
a9=C.OR[s+t&3]
b0=a9[0]
b1=a9[1]
b2=D.c.R((j.a*i+h.a*g+f.a*e+d.a*a0)*b0+(a1.a*a2+a3.a*a4+a5.a*a6+a7.a*a8)*b1,7)
b3=D.c.R((j.b*i+h.b*g+f.b*e+d.b*a0)*b0+(a1.b*a2+a3.b*a4+a5.b*a6+a7.b*a8)*b1,7)
b4=D.c.R((j.c*i+h.c*g+f.c*e+d.c*a0)*b0+(a1.c*a2+a3.c*a4+a5.c*a6+a7.c*a8)*b1,7)
b1=b6.a
if(b1!=null)b1.fe(m+u,n,b2,b3,b4)
t=t>>>2;++r}}}return b6},
a3n(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=A.hF(a4,a4,C.a7,0,C.bl,b5,a4,0,4,a4,C.a7,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.oo(D.A.gag(b6),0,null),a9=new A.rz(a8),b0=new A.rz(J.oo(D.A.gag(b6),0,null)),b1=new A.rz(J.oo(D.A.gag(b6),0,null)),b2=new A.rz(J.oo(D.A.gag(b6),0,null)),b3=new A.rz(J.oo(D.A.gag(b6),0,null))
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
j=b0.QW()
i=C.d3[r][0]
h=b1.QW()
g=C.d3[r][1]
g=new A.m2(j.a*i,j.b*i,j.c*i,j.d*i).a5(0,new A.m2(h.a*g,h.b*g,h.c*g,h.d*g))
h=b2.QW()
i=C.d3[r][2]
i=g.a5(0,new A.m2(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.QW()
g=C.d3[r][3]
f=i.a5(0,new A.m2(h.a*g,h.b*g,h.c*g,h.d*g))
g=b0.QX()
h=C.d3[r][0]
i=b1.QX()
j=C.d3[r][1]
j=new A.m2(g.a*h,g.b*h,g.c*h,g.d*h).a5(0,new A.m2(i.a*j,i.b*j,i.c*j,i.d*j))
i=b2.QX()
h=C.d3[r][2]
h=j.a5(0,new A.m2(i.a*h,i.b*h,i.c*h,i.d*h))
i=b3.QX()
j=C.d3[r][3]
e=h.a5(0,new A.m2(i.a*j,i.b*j,i.c*j,i.d*j))
d=C.OR[s+t&3]
j=d[0]
i=d[1]
a0=D.c.R(f.a*j+e.a*i,7)
a1=D.c.R(f.b*j+e.b*i,7)
a2=D.c.R(f.c*j+e.c*i,7)
a3=D.c.R(f.d*d[2]+e.d*d[3],7)
i=a5.a
if(i!=null)i.kB(m+u,n,a0,a1,a2,a3)
t=t>>>2;++r}}}return a5}}
A.aBm.prototype={
qi(d,e){var x,w=this
if(e.c-e.d<18)return
w.a=e.dg()
w.b=e.dg()
x=e.dg()
w.c=x<12?C.ax3[x]:C.wH
e.bO()
w.e=e.bO()
w.f=e.dg()
e.bO()
e.bO()
w.x=e.bO()
w.y=e.bO()
w.z=e.dg()
w.Q=e.dg()},
aBP(){var x=this,w=x.z
if(w!==8&&w!==16&&w!==24&&w!==32)return!1
w=x.c
if(w===C.iH||w===C.iI){if(x.e>256||x.b!==1)return!1
w=x.f
if(w!==16&&w!==24&&w!==32)return!1}else if(x.b===1)return!1
return!0}}
A.o6.prototype={
J(){return"TgaImageType."+this.b}}
A.bFB.prototype={
ny(d,e,f){if(this.oz(e)==null)return null
return this.k8(0)},
oz(d){var x,w,v,u,t=this
t.a=new A.aBm(C.wH)
x=A.cQ(d,!1,null,0)
t.b=x
w=x.l5(18)
t.a.qi(0,w)
if(!t.a.aBP())return null
x=t.b
v=t.a
x.d+=v.a
u=v.c
if(u===C.iH||u===C.iI)v.as=x.l5(v.e*D.c.R(v.f,3)).hK()
x=t.a
x.ax=t.b.d
return x},
k8(d){var x=this,w=x.a
if(w==null)return null
w=w.c
if(w===C.a4L)return x.akE()
else if(w===C.a4K||w===C.iI)return x.aZ1()
else if(w===C.iH)return x.akE()
return null},
akz(d,e){var x,w,v,u,t,s,r,q=this,p=A.cQ(d,!1,null,0),o=q.a.f
if(o===16){o=q.b
o===$&&B.b()
x=o.bO()
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
aZ1(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=h.z,f=g===16,e=f||g===32,d=h.x,a0=h.y,a1=e?4:3
h=h.c
x=A.hF(i,i,C.a7,0,C.bl,a0,i,0,a1,i,C.a7,d,h===C.iH||h===C.iI)
h=x.a
if((h==null?i:h.geW())!=null){h=j.a.as
h.toString
d=x.a
d=d==null?i:d.geW()
d.toString
j.akz(h,d)}w=x.gcZ(0)
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
if(d!=null)d.mz(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}else{d=j.b
if(f){n=d.bO()
q=n>>>7&248
m=n>>>2&248
l=(n&31)<<3
k=(n&32768)!==0?0:255
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.kB(u,v,q,m,l,k)
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
if(d!=null)d.kB(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}}else if(h)for(p=0;p<s;++p){d=j.b
q=J.v(d.a,d.d++)
o=u+1
d=x.a
if(d!=null)d.mz(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}else if(f)for(p=0;p<s;++p){n=j.b.bO()
k=(n&32768)!==0?0:255
o=u+1
d=x.a
if(d!=null)d.kB(u,v,n>>>7&248,n>>>2&248,(n&31)<<3,k)
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
if(d!=null)d.kB(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}if(u>=w){--v
if(v<0)break
u=0}}return x},
akE(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
g===$&&B.b()
x=i.a
g.d=x.ax
w=x.z
g=w===16
v=!0
if(!g)if(w!==32){u=x.c
if(u===C.iH||u===C.iI){u=x.f
u=u===16||u===32}else u=!1
v=u}u=x.x
t=x.y
s=v?4:3
x=x.c
r=A.hF(h,h,C.a7,0,C.bl,t,h,0,s,h,C.a7,u,x===C.iH||x===C.iI)
x=i.a
u=x.c
if(u===C.iH||u===C.iI){x=x.as
x.toString
u=r.a
u=u==null?h:u.geW()
u.toString
i.akz(x,u)}if(w===8)for(q=r.gb5(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
g=i.b
o=J.v(g.a,g.d++)
g=r.a
if(g!=null)g.mz(p,q,o);++p}}else if(g)for(q=r.gb5(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
n=i.b.bO()
m=(n&32768)!==0?0:255
g=r.a
if(g!=null)g.kB(p,q,n>>>7&248,n>>>2&248,(n&31)<<3,m);++p}}else for(q=r.gb5(0)-1;q>=0;--q){p=0
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
if(g!=null)g.kB(p,q,j,k,l,m);++p}}return r}}
A.bGm.prototype={
j8(d){var x,w,v,u,t=this
if(d===0)return 0
if(t.c===0){t.c=8
t.b=t.a.dg()}for(x=t.a,w=0;v=t.c,d>v;){w=D.c.eS(w,v)+(t.b&C.n2[v])
d-=v
t.c=8
t.b=J.v(x.a,x.d++)}if(d>0){if(v===0){t.c=8
t.b=x.dg()}x=D.c.eS(w,d)
v=t.b
u=t.c-d
w=x+(D.c.nZ(v,u)&C.n2[d])
t.c=u}return w}}
A.aBr.prototype={
j(d){var x=this,w=x.a,v=$.cli().i(0,w)
if(v!=null)return v.a+": "+x.b.j(0)+" "+x.c
return"<"+w+">: "+x.b.j(0)+" "+x.c},
p9(d){var x,w,v,u=this,t=u.e
if(t!=null)return t
t=u.f
t.d=u.d
x=u.c
w=u.b
v=t.l5(x*(w!==C.Y?C.jk[w.a]:0))
switch(w.a){case 1:return u.e=new A.tY(new Uint8Array(B.bU(v.l5(x).hK())))
case 2:return u.e=new A.BH(x===0?"":v.qj(x-1))
case 7:return u.e=new A.tY(new Uint8Array(B.bU(v.l5(x).hK())))
case 3:return u.e=A.cx7(v,x)
case 4:return u.e=A.cx2(v,x)
case 5:return u.e=A.cx3(v,x)
case 11:return u.e=A.cx9(v,x)
case 12:return u.e=A.cx1(v,x)
case 6:return u.e=new A.vX(new Int8Array(B.bU(J.clq(D.A.gag(v.hK()),0,x))))
case 8:return u.e=A.cx6(v,x)
case 9:return u.e=A.cx4(v,x)
case 10:return u.e=A.cx5(v,x)
case 0:return null}},
gp(d){return this.e}}
A.bGo.prototype={
bw3(d,e,f,g){var x,w,v,u=this
u.r=e
u.x=u.w=0
x=D.c.b7(u.a+7,8)
for(w=0,v=0;v<g;++v){u.a3l(d,w,f)
w+=x}},
a3l(d,e,f){var x,w,v,u,t,s,r,q,p=this
p.d=0
for(x=p.a,w=!0;f<x;){for(;w;){v=p.yI(10)
u=C.Pi[v]
t=D.c.R(u,1)&15
if(t===12){u=C.tX[(v<<2&12|p.oD(2))>>>0]
s=D.c.R(u,1)
f+=D.c.R(u,4)&4095
p.lr(4-(s&7))}else if(t===0)throw B.l(A.c6("TIFFFaxDecoder0"))
else if(t===15)throw B.l(A.c6("TIFFFaxDecoder1"))
else{f+=D.c.R(u,5)&2047
p.lr(10-t)
if((u&1)===0){p.f[p.d++]=f
w=!1}}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}for(;!w;){u=C.Kp[p.oD(4)]
r=u>>>5&2047
q=!0
if(r===100){u=C.LW[p.yI(9)]
t=D.c.R(u,1)&15
r=D.c.R(u,5)&2047
if(t===12){p.lr(5)
u=C.tX[p.oD(4)]
s=D.c.R(u,1)
r=D.c.R(u,4)&4095
p.pD(d,e,f,r)
f+=r
p.lr(4-(s&7))}else if(t===15)throw B.l(A.c6("TIFFFaxDecoder2"))
else{p.pD(d,e,f,r)
f+=r
p.lr(9-t)
if((u&1)===0){p.f[p.d++]=f
w=q}}}else{if(r===200){u=C.Kj[p.oD(2)]
r=u>>>5&2047
p.pD(d,e,f,r)
f+=r
p.lr(2-(u>>>1&15))
p.f[p.d++]=f}else{p.pD(d,e,f,r)
f+=r
p.lr(4-(u>>>1&15))
p.f[p.d++]=f}w=q}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}}p.f[p.d++]=f},
bw4(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.r=a0
e.z=3
e.x=e.w=0
x=e.a
w=D.c.b7(x+7,8)
v=B.bJ(2,null,!1,y.s)
e.at=a3&1
e.as=a3>>>2&1
if(e.aqS()!==1)throw B.l(A.c6("TIFFFaxDecoder3"))
e.a3l(d,0,a1)
for(u=w,t=1;t<a2;++t){if(e.aqS()===0){s=e.e
e.e=e.f
e.f=s
e.y=0
r=a1
q=-1
p=!0
o=0
while(!0){r.toString
if(!(r<x))break
e.amH(q,p,v)
n=v[0]
m=v[1]
l=C.OZ[e.oD(7)]&255
k=l>>>3&15
j=l&7
if(k===0){if(!p){m.toString
e.pD(d,u,r,m-r)}e.lr(7-j)
r=m
q=r}else if(k===1){e.lr(7-j)
i=o+1
h=i+1
if(p){r+=e.T5()
e.f[o]=r
g=e.T4()
e.pD(d,u,r,g)
r+=g
e.f[i]=r}else{g=e.T4()
e.pD(d,u,r,g)
r+=g
e.f[o]=r
r+=e.T5()
e.f[i]=r}o=h
q=r}else{if(k<=8){n.toString
f=n+(k-5)
i=o+1
e.f[o]=f
p=!p
if(p)e.pD(d,u,r,f-r)
e.lr(7-j)}else throw B.l(A.c6("TIFFFaxDecoder4"))
r=f
o=i
q=r}}e.f[o]=r
e.d=o+1}else e.a3l(d,u,a1)
u+=w}},
bw9(a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
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
a2.amH(p,o,v)
m=v[0]
l=v[1]
k=C.OZ[a2.oD(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
a2.pD(a3,t,q,l-q)}a2.lr(7-i)
q=l
p=q}else if(j===1){a2.lr(7-i)
h=n+1
g=h+1
if(o){q+=a2.T5()
r[n]=q
f=a2.T4()
a2.pD(a3,t,q,f)
q+=f
r[h]=q}else{f=a2.T4()
a2.pD(a3,t,q,f)
q+=f
r[n]=q
q+=a2.T5()
r[h]=q}n=g
p=q}else if(j<=8){m.toString
e=m+(j-5)
h=n+1
r[n]=e
o=!o
if(o)a2.pD(a3,t,q,e-q)
a2.lr(7-i)
q=e
n=h
p=q}else if(j===11){if(a2.oD(3)!==7)throw B.l(A.c6("TIFFFaxDecoder5"))
for(d=0,a0=!1;!a0;o=a1){for(;a2.oD(1)!==1;)++d
if(d>5){d-=6
if(!o&&d>0){h=n+1
r[n]=q
n=h}q+=d
if(d>0)o=!0
a1=a2.oD(1)===0
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
T5(){var x,w,v,u,t,s,r=this
for(x=0,w=!0;w;){v=r.yI(10)
u=C.Pi[v]
t=D.c.R(u,1)&15
if(t===12){u=C.tX[(v<<2&12|r.oD(2))>>>0]
s=D.c.R(u,1)
x+=D.c.R(u,4)&4095
r.lr(4-(s&7))}else if(t===0)throw B.l(A.c6("TIFFFaxDecoder0"))
else if(t===15)throw B.l(A.c6("TIFFFaxDecoder1"))
else{x+=D.c.R(u,5)&2047
r.lr(10-t)
if((u&1)===0)w=!1}}return x},
T4(){var x,w,v,u,t,s,r=this
for(x=0,w=!1;!w;){v=C.Kp[r.oD(4)]
u=v>>>5&2047
if(u===100){v=C.LW[r.yI(9)]
t=D.c.R(v,1)&15
s=D.c.R(v,5)
if(t===12){r.lr(5)
v=C.tX[r.oD(4)]
s=D.c.R(v,1)
x+=D.c.R(v,4)&4095
r.lr(4-(s&7))}else if(t===15)throw B.l(A.c6("TIFFFaxDecoder2"))
else{x+=s&2047
r.lr(9-t)
if((v&1)===0)w=!0}}else{if(u===200){v=C.Kj[r.oD(2)]
x+=v>>>5&2047
r.lr(2-(v>>>1&15))}else{x+=u
r.lr(4-(v>>>1&15))}w=!0}}return x},
aqS(){var x,w,v=this,u="TIFFFaxDecoder8",t=v.as
if(t===0){if(v.yI(12)!==1)throw B.l(A.c6("TIFFFaxDecoder6"))}else if(t===1){t=v.w
t.toString
x=8-t
if(v.yI(x)!==0)throw B.l(A.c6(u))
if(x<4)if(v.yI(8)!==0)throw B.l(A.c6(u))
for(;w=v.yI(8),w!==1;)if(w!==0)throw B.l(A.c6(u))}if(v.at===0)return 1
else return v.oD(1)},
amH(d,e,f){var x,w=this,v=w.e,u=w.d,t=w.y,s=t>0?t-1:0
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
J.bZ(d.a,d.d+q,255)
s+=8}for(;s<r;){q=D.c.R(s,3)
v=J.v(d.a,d.d+q)
t=D.c.eS(1,7-(s&7))
J.bZ(d.a,d.d+q,(v|t)>>>0);++s}},
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
m=D.c.eS(r&C.n2[q],p)
l=D.c.fZ(t&C.B8[n],8-n)
if(o!==0){l=D.c.eS(l,o)|D.c.fZ(s&C.B8[o],8-o)
k.x=j+1
k.w=o}else if(n===8){k.w=0
k.x=j+1}else k.w=n
return(m|l)>>>0},
oD(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.r
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
if(p>=0){o=D.c.fZ(s&C.n2[r],p)
m+=d
n.w=m
if(m===8){n.w=0
m=n.x
m.toString
n.x=m+1}}else{o=(D.c.eS(s&C.n2[r],-p)|D.c.fZ(t&C.B8[q],8-q))>>>0
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
A.aBs.prototype={
aTz(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.cb(d,g,0),e=d.bO()
for(x=h.a,w=0;w<e;++w){v=d.bO()
u=d.bO()
t=C.N1[u]
s=C.jk[u]
r=d.an()
if(r*s>4)q=d.an()
else{q=d.d
d.d=q+4}p=new A.aBr(v,t,r,q,f)
x.m(0,v,p)
if(v===256){o=p.p9(0)
o=o==null?g:o.D(0)
h.b=o==null?0:o}else if(v===257){o=p.p9(0)
o=o==null?g:o.D(0)
h.c=o==null?0:o}else if(v===262){n=p.p9(0)
m=n==null?g:n.D(0)
if(m==null)m=17
if(m<17)h.d=C.avs[m]
else h.d=C.DP}else if(v===259){o=p.p9(0)
o=o==null?g:o.D(0)
h.e=o==null?0:o}else if(v===258){o=p.p9(0)
o=o==null?g:o.D(0)
h.f=o==null?0:o}else if(v===277){o=p.p9(0)
o=o==null?g:o.D(0)
h.r=o==null?0:o}else if(v===317){o=p.p9(0)
o=o==null?g:o.D(0)
h.z=o==null?0:o}else if(v===339){o=p.p9(0)
n=o==null?g:o.D(0)
h.w=C.avZ[n==null?0:n]}else if(v===320){n=p.p9(0)
if(n!=null){o=J.cMn(D.A.gag(n.u0()))
h.go=o
h.id=0
o=o.length/3|0
h.k1=o
h.k2=o*2}}}l=h.go
o=l!=null
if(o&&h.d===C.DQ)h.r=1
if(h.b===0||h.c===0)return
if(o&&h.f===8){k=l.length
for(o=l.$flags|0,w=0;w<k;++w){j=l[w]
o&2&&B.B(l)
l[w]=j>>>8}}if(h.d===C.DO)h.y=!0
if(x.a3(0,324)){h.ax=h.FS(322)
h.ay=h.FS(323)
h.ch=h.V4(324)
h.CW=h.V4(325)}else{h.ax=h.V3(322,h.b)
if(!x.a3(0,278))h.ay=h.V3(323,h.c)
else{i=h.FS(278)
if(i===-1)h.ay=h.c
else h.ay=i}h.ch=h.V4(273)
h.CW=h.V4(279)}o=h.b
j=h.ax
h.cx=D.c.hu(o+j-1,j)
j=h.c
o=h.ay
h.cy=D.c.hu(j+o-1,o)
h.dx=h.V3(266,1)
h.dy=h.FS(292)
h.fr=h.FS(293)
h.FS(338)
switch(h.d.a){case 0:case 1:x=h.f
if(x===1&&h.r===1)h.x=C.DN
else if(x===4&&h.r===1)h.x=C.b5j
else if(D.c.ap(x,8)===0){x=h.r
if(x===1)h.x=C.b5k
else if(x===2)h.x=C.b5l
else h.x=C.wK}break
case 2:if(D.c.ap(h.f,8)===0){x=h.r
if(x===3)h.x=C.a4N
else if(x===4)h.x=C.b5n
else h.x=C.wK}break
case 3:x=!1
if(h.r===1)if(h.go!=null){x=h.f
x=x===4||x===8||x===16}if(x)h.x=C.b5m
break
case 4:if(h.f===1&&h.r===1)h.x=C.DN
break
case 6:if(h.e===7&&h.f===8&&h.r===3)h.x=C.a4N
else{if(x.a3(0,530)){n=x.i(0,530).p9(0)
h.Q=n.D(0)
x=h.as=n.jb(0,1)}else x=h.as=h.Q=2
o=h.Q
o===$&&B.b()
if(o*x===1)h.x=C.wK
else if(h.f===8&&h.r===3)h.x=C.b5o}break
default:if(D.c.ap(h.f,8)===0)h.x=C.wK
break}},
dk(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.w,d=e===C.nV,a0=e===C.bd
e=g.f
if(e===1)x=C.ff
else if(e===2)x=C.h3
else{if(e===4)e=C.h4
else if(d&&e===16)e=C.hK
else if(d&&e===32)e=C.j6
else if(d&&e===64)e=C.kD
else if(a0&&e===8)e=C.kE
else if(a0&&e===16)e=C.kF
else if(a0&&e===32)e=C.kG
else if(e===16)e=C.cc
else e=e===32?C.j7:C.a7
x=e}w=g.go!=null&&g.d===C.DQ
v=w?3:g.r
e=g.b
u=A.hF(f,f,x,0,C.bl,g.c,f,0,v,f,x,e,w)
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
g.aZ2(a2,u,h,j);++h;++i}++j}return u},
aZ2(b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null
if(a8.x===C.DN){a8.aYM(b0,b1,b2,b3)
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
else if(u===5){w=A.cQ(new Uint8Array(p),!1,a9,0)
v=A.cy_()
try{J.cMs(v,A.cb(b0,x,0),w.a)}catch(o){}if(a8.z===2)for(n=0;n<a8.ay;++n){m=a8.r
u=a8.ax
l=m*(n*u+1)
k=u*m
for(;m<k;++m){u=w
r=J.v(u.a,u.d+l)
j=w
i=a8.r
i=J.v(j.a,j.d+(l-i))
J.bZ(u.a,u.d+l,r+i);++l}}}else if(u===32773){w=A.cQ(new Uint8Array(p),!1,a9,0)
a8.akD(b0,p,w.a)}else if(u===32946)w=A.cQ(C.iW.Cu(A.BV(b0.Jl(0,0,x),1,a9,0),!1),!1,a9,0)
else if(u===8)w=A.cQ(C.iW.Cu(A.BV(b0.Jl(0,0,x),1,a9,0),!1),!1,a9,0)
else if(u===6){a8.baz(new A.aqW().dk(0,y.D.a(b0.Jl(0,0,x))),b1,s,q,a8.ax,a8.ay)
return}else throw B.l(A.c6("Unsupported Compression Type: "+u))
for(h=q,g=0;g<a8.ay;++g,++h)for(f=s,e=0;e<a8.ax;++e,++f){u=w
if(u.d>=u.c)break
u=a8.r
if(u===1){u=a8.w
if(u===C.nV){u=a8.f
if(u===32){u=w.an()
r=$.hV()
r.$flags&2&&B.B(r)
r[0]=u
d=$.Fj()[0]}else if(u===64)d=w.a_x()
else if(u===16){u=w.bO()
r=$.hE
d=(r!=null?r:A.iz())[u]}else d=0
if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.mz(f,h,d)}}else{r=a8.f
if(r===8)if(u===C.bd){u=w
u=J.v(u.a,u.d++)
r=$.on()
r.$flags&2&&B.B(r)
r[0]=u
d=$.pA()[0]}else{u=w
d=J.v(u.a,u.d++)}else if(r===16)if(u===C.bd){u=w.bO()
r=$.qI()
r.$flags&2&&B.B(r)
r[0]=u
d=$.th()[0]}else d=w.bO()
else if(r===32)if(u===C.bd){u=w.an()
r=$.hV()
r.$flags&2&&B.B(r)
r[0]=u
d=$.lA()[0]}else d=w.an()
else d=0
if(a8.d===C.DO){u=b1.a
a0=u==null?a9:u.gcg()
d=(a0==null?0:a0)-d}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.mz(f,h,d)}}}else if(u===2){u=a8.f
if(u===8){if(a8.w===C.bd){u=w
u=J.v(u.a,u.d++)
r=$.on()
r.$flags&2&&B.B(r)
r[0]=u
a1=$.pA()[0]}else{u=w
a1=J.v(u.a,u.d++)}if(a8.w===C.bd){u=w
u=J.v(u.a,u.d++)
r=$.on()
r.$flags&2&&B.B(r)
r[0]=u
a2=$.pA()[0]}else{u=w
a2=J.v(u.a,u.d++)}}else if(u===16){if(a8.w===C.bd){u=w.bO()
r=$.qI()
r.$flags&2&&B.B(r)
r[0]=u
a1=$.th()[0]}else a1=w.bO()
if(a8.w===C.bd){u=w.bO()
r=$.qI()
r.$flags&2&&B.B(r)
r[0]=u
a2=$.th()[0]}else a2=w.bO()}else if(u===32){if(a8.w===C.bd){u=w.an()
r=$.hV()
r.$flags&2&&B.B(r)
r[0]=u
a1=$.lA()[0]}else a1=w.an()
if(a8.w===C.bd){u=w.an()
r=$.hV()
r.$flags&2&&B.B(r)
r[0]=u
a2=$.lA()[0]}else a2=w.an()}else{a1=0
a2=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.fe(f,h,a1,a2,0)}}else if(u===3){u=a8.w
if(u===C.nV){u=a8.f
if(u===32){u=w.an()
r=$.hV()
r.$flags&2&&B.B(r)
r[0]=u
u=$.Fj()
a3=u[0]
r[0]=w.an()
a4=u[0]
r[0]=w.an()
a5=u[0]}else{a4=0
a5=0
if(u===64)a3=w.a_x()
else if(u===16){u=w.bO()
r=$.hE
a3=(r!=null?r:A.iz())[u]
u=w.bO()
r=$.hE
a4=(r!=null?r:A.iz())[u]
u=w.bO()
r=$.hE
a5=(r!=null?r:A.iz())[u]}else a3=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.fe(f,h,a3,a4,a5)}}else{r=a8.f
if(r===8){if(u===C.bd){u=w
u=J.v(u.a,u.d++)
r=$.on()
r.$flags&2&&B.B(r)
r[0]=u
a3=$.pA()[0]}else{u=w
a3=J.v(u.a,u.d++)}if(a8.w===C.bd){u=w
u=J.v(u.a,u.d++)
r=$.on()
r.$flags&2&&B.B(r)
r[0]=u
a4=$.pA()[0]}else{u=w
a4=J.v(u.a,u.d++)}if(a8.w===C.bd){u=w
u=J.v(u.a,u.d++)
r=$.on()
r.$flags&2&&B.B(r)
r[0]=u
a5=$.pA()[0]}else{u=w
a5=J.v(u.a,u.d++)}}else if(r===16){if(u===C.bd){u=w.bO()
r=$.qI()
r.$flags&2&&B.B(r)
r[0]=u
a3=$.th()[0]}else a3=w.bO()
if(a8.w===C.bd){u=w.bO()
r=$.qI()
r.$flags&2&&B.B(r)
r[0]=u
a4=$.th()[0]}else a4=w.bO()
if(a8.w===C.bd){u=w.bO()
r=$.qI()
r.$flags&2&&B.B(r)
r[0]=u
a5=$.th()[0]}else a5=w.bO()}else if(r===32){if(u===C.bd){u=w.an()
r=$.hV()
r.$flags&2&&B.B(r)
r[0]=u
a3=$.lA()[0]}else a3=w.an()
if(a8.w===C.bd){u=w.an()
r=$.hV()
r.$flags&2&&B.B(r)
r[0]=u
a4=$.lA()[0]}else a4=w.an()
if(a8.w===C.bd){u=w.an()
r=$.hV()
r.$flags&2&&B.B(r)
r[0]=u
a5=$.lA()[0]}else a5=w.an()}else{a3=0
a4=0
a5=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.fe(f,h,a3,a4,a5)}}}else if(u>=4){u=a8.w
if(u===C.nV){u=a8.f
if(u===32){u=w.an()
r=$.hV()
r.$flags&2&&B.B(r)
r[0]=u
u=$.Fj()
a3=u[0]
r[0]=w.an()
a4=u[0]
r[0]=w.an()
a5=u[0]
r[0]=w.an()
a6=u[0]}else{a4=0
a5=0
a6=0
if(u===64)a3=w.a_x()
else if(u===16){u=w.bO()
r=$.hE
a3=(r!=null?r:A.iz())[u]
u=w.bO()
r=$.hE
a4=(r!=null?r:A.iz())[u]
u=w.bO()
r=$.hE
a5=(r!=null?r:A.iz())[u]
u=w.bO()
r=$.hE
a6=(r!=null?r:A.iz())[u]}else a3=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.kB(f,h,a3,a4,a5,a6)}}else{r=a8.f
if(r===8){if(u===C.bd){u=w
u=J.v(u.a,u.d++)
r=$.on()
r.$flags&2&&B.B(r)
r[0]=u
a3=$.pA()[0]}else{u=w
a3=J.v(u.a,u.d++)}if(a8.w===C.bd){u=w
u=J.v(u.a,u.d++)
r=$.on()
r.$flags&2&&B.B(r)
r[0]=u
a4=$.pA()[0]}else{u=w
a4=J.v(u.a,u.d++)}if(a8.w===C.bd){u=w
u=J.v(u.a,u.d++)
r=$.on()
r.$flags&2&&B.B(r)
r[0]=u
a5=$.pA()[0]}else{u=w
a5=J.v(u.a,u.d++)}if(a8.w===C.bd){u=w
u=J.v(u.a,u.d++)
r=$.on()
r.$flags&2&&B.B(r)
r[0]=u
a6=$.pA()[0]}else{u=w
a6=J.v(u.a,u.d++)}}else if(r===16){if(u===C.bd){u=w.bO()
r=$.qI()
r.$flags&2&&B.B(r)
r[0]=u
a3=$.th()[0]}else a3=w.bO()
if(a8.w===C.bd){u=w.bO()
r=$.qI()
r.$flags&2&&B.B(r)
r[0]=u
a4=$.th()[0]}else a4=w.bO()
if(a8.w===C.bd){u=w.bO()
r=$.qI()
r.$flags&2&&B.B(r)
r[0]=u
a5=$.th()[0]}else a5=w.bO()
if(a8.w===C.bd){u=w.bO()
r=$.qI()
r.$flags&2&&B.B(r)
r[0]=u
a6=$.th()[0]}else a6=w.bO()}else if(r===32){if(u===C.bd){u=w.an()
r=$.hV()
r.$flags&2&&B.B(r)
r[0]=u
a3=$.lA()[0]}else a3=w.an()
if(a8.w===C.bd){u=w.an()
r=$.hV()
r.$flags&2&&B.B(r)
r[0]=u
a4=$.lA()[0]}else a4=w.an()
if(a8.w===C.bd){u=w.an()
r=$.hV()
r.$flags&2&&B.B(r)
r[0]=u
a5=$.lA()[0]}else a5=w.an()
if(a8.w===C.bd){u=w.an()
r=$.hV()
r.$flags&2&&B.B(r)
r[0]=u
a6=$.lA()[0]}else a6=w.an()}else{a3=0
a4=0
a5=0
a6=0}if(a8.d===C.a4O){a7=A.cFw(a3,a4,a5,a6)
a3=a7[0]
a4=a7[1]
a5=a7[2]
u=b1.a
a6=u==null?a9:u.gcg()
if(a6==null)a6=0}if(f<a8.b&&h<a8.c){u=b1.a
if(u!=null)u.kB(f,h,a3,a4,a5,a6)}}}}}else throw B.l(A.c6("Unsupported bitsPerSample: "+u))},
baz(d,e,f,g,h,i){var x,w,v,u
for(x=0;x<i;++x)for(w=x+g,v=0;v<h;++v){u=d.a
u=u==null?null:u.el(v,x,null)
if(u==null)u=new A.fm()
e.y3(v+f,w,u)}},
aYM(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.cx
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
x=A.cQ(new Uint8Array(a2*u),!1,a1,0)
a0.akD(a3,q,x.a)}else if(r===5){x=A.cQ(new Uint8Array(a2*u),!1,a1,0)
A.cy_().Hi(0,A.cb(a3,s,0),x.a)
if(a0.z===2)for(p=0;p<a0.c;++p){o=a0.r
n=o*(p*a0.b+1)
for(;o<a0.b*a0.r;++o){a2=x
u=J.v(a2.a,a2.d+n)
r=x
m=a0.r
m=J.v(r.a,r.d+(n-m))
J.bZ(a2.a,a2.d+n,u+m);++n}}}else if(r===2){x=A.cQ(new Uint8Array(a2*u),!1,a1,0)
try{A.cph(a0.dx,a0.ax,a0.ay).bw3(x,a3,0,a0.ay)}catch(l){}}else if(r===3){x=A.cQ(new Uint8Array(a2*u),!1,a1,0)
try{A.cph(a0.dx,a0.ax,a0.ay).bw4(x,a3,0,a0.ay,a0.dy)}catch(l){}}else if(r===4){x=A.cQ(new Uint8Array(a2*u),!1,a1,0)
try{A.cph(a0.dx,a0.ax,a0.ay).bw9(x,a3,0,a0.ay,a0.fr)}catch(l){}}else if(r===8)x=A.cQ(C.iW.Cu(A.BV(a3.Jl(0,0,s),1,a1,0),!1),!1,a1,0)
else if(r===32946)x=A.cQ(C.iW.Cu(A.BV(a3.Jl(0,0,s),1,a1,0),!1),!1,a1,0)
else if(r===1)x=a3
else throw B.l(A.c6("Unsupported Compression Type: "+r))
k=new A.bGm(x)
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
akD(d,e,f){var x,w,v,u,t,s,r,q,p,o
for(x=J.cS(f),w=0,v=0;v<e;){u=w+1
t=J.v(d.a,d.d+w)
s=$.on()
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
V3(d,e){var x=this.a
if(!x.a3(0,d))return e
x=x.i(0,d).p9(0)
x=x==null?null:x.D(0)
return x==null?0:x},
FS(d){return this.V3(d,0)},
V4(d){var x,w=this.a
if(!w.a3(0,d))return null
x=w.i(0,d)
w=x.p9(0)
w.toString
return B.w1(x.c,w.gxF(w),!0,y.p)}}
A.Kg.prototype={
J(){return"TiffFormat."+this.b}}
A.kz.prototype={
J(){return"TiffPhotometricType."+this.b}}
A.rR.prototype={
J(){return"TiffImageType."+this.b}}
A.bGp.prototype={}
A.bje.prototype={
Hi(d,e,f){var x,w,v,u,t,s,r=this
r.r=f
x=J.bl(f)
r.w=0
w=y.D.a(e.a)
r.e=w
r.f=w.length
r.b=e.d
if(w[0]===0&&w[1]===1)throw B.l(A.c6("Invalid LZW Data"))
r.aop()
r.d=r.c=0
v=r.a43()
w=r.x
u=0
while(!0){if(!(v!==257&&r.w<x))break
if(v===256){r.aop()
v=r.a43()
r.as=0
if(v===257)break
J.bZ(r.r,r.w++,v)
u=v}else{t=r.Q
t.toString
if(v<t){r.amX(v)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bZ(r.r,r.w++,w[s])
r.aip(u,w[r.as-1])}else{r.amX(u)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bZ(r.r,r.w++,w[s])
J.bZ(r.r,r.w++,w[r.as-1])
r.aip(u,w[r.as-1])}u=v}v=r.a43()}},
aip(d,e){var x,w=this,v=w.y
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
amX(d){var x,w,v,u,t,s,r=this
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
a43(){var x,w,v,u,t=this,s=t.b,r=t.f
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
return D.c.fZ(t.c,s)&C.ar_[w-9]},
aop(){var x,w,v=this
v.y=new Uint8Array(4096)
x=new Uint32Array(4096)
v.z=x
D.bq.kZ(x,0,4096,4098)
for(x=v.y,w=0;w<256;++w){x.$flags&2&&B.B(x)
x[w]=w}v.a=9
v.Q=258}}
A.bGn.prototype={
k8(d){var x,w,v=this.a
if(v==null)return null
v=v.f[d]
x=this.c
x===$&&B.b()
w=v.dk(0,x)
return w},
ny(d,e,f){var x=this,w=A.cQ(e,!1,null,0)
x.c=w
w=x.aqU(w)
x.a=w
if(w==null)return null
return x.k8(0)},
aqU(d){var x,w,v,u,t,s,r,q,p,o=null,n=B.a([],y.q),m=new A.bGp(n),l=d.bO()
if(l!==18761&&l!==19789)return o
if(l===19789)d.e=!0
else d.e=!1
v=d.bO()
m.d=v
if(v!==42)return o
u=d.an()
t=A.cb(d,o,0)
t.d=u
x=t
for(v=y.p,s=y.aL;u!==0;){w=null
try{r=new A.aBs(B.I(v,s),C.DP,C.a4M,C.b5p)
r.aTz(x)
w=r
q=w
if(!(q.b!==0&&q.c!==0))break}catch(p){break}n.push(w)
if(n.length===1){q=n[0]
m.a=q.b
m.b=q.c}u=x.an()
if(u!==0)x.d=u}return n.length!==0?m:o}}
A.bJH.prototype={
NS(){var x,w=this.a,v=w.rG()
if((v&1)!==0)return!1
if((v>>>1&7)>3)return!1
if((v>>>4&1)===0)return!1
this.f.d=v>>>5
if(w.rG()!==2752925)return!1
x=this.b
x.a=w.bO()
x.b=w.bO()
return!0},
ob(d){var x,w,v,u=this,t=null
if(!u.b2g())return t
x=u.b
w=x.a
u.d=A.hF(t,t,C.a7,0,C.bl,x.b,t,0,4,t,C.a7,w,!1)
u.b9L()
if(!u.bfk())return t
x=x.w
if(x.length!==0){v=A.cQ(new B.e8(x),!1,t,0)
x=u.d
x.toString
x.e=A.cw6(v)}return u.d},
b2g(){var x,w,v,u,t=this
if(!t.NS())return!1
t.fr=A.d0A()
for(x=t.dy,w=0;w<4;++w){v=new Int32Array(2)
u=new Int32Array(2)
x[w]=new A.aCl(v,u,new Int32Array(2))}x=t.b
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
u=A.cC8(v.jY(u))
t.c=u
v.d+=x.d
u.dz(1)
t.c.dz(1)
t.bfs(t.x,t.fr)
t.bfj()
if(!t.bfn(v))return!1
t.bfp()
t.c.dz(1)
t.bfo()
return!0},
bfs(d,e){var x,w,v,u=this,t=u.c
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
bfj(){var x,w,v,u=this,t=u.w,s=u.c
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
bfn(d){var x,w,v,u,t,s,r,q=d.c-d.d,p=this.c
p===$&&B.b()
p=D.c.eq(1,p.dz(2))
this.cy=p
x=p-1
w=x*3
if(q<w)return!1
for(p=this.db,v=0,u=0;u<x;++u,w=s){t=d.Sd(3,v)
s=w+((J.v(t.a,t.d)|J.v(t.a,t.d+1)<<8|J.v(t.a,t.d+2)<<16)>>>0)
if(s>q)s=q
r=new A.a7p(d.B0(s-w,w))
r.b=254
r.c=0
r.d=-8
p[u]=r
v+=3}p[x]=A.cC8(d.B0(q-w,d.d-d.b+w))
return w<q},
bfp(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
h===$&&B.b()
x=h.dz(7)
w=i.c.dz(1)!==0?i.c.JS(4):0
v=i.c.dz(1)!==0?i.c.JS(4):0
u=i.c.dz(1)!==0?i.c.JS(4):0
t=i.c.dz(1)!==0?i.c.JS(4):0
s=i.c.dz(1)!==0?i.c.JS(4):0
r=i.x
for(h=i.dy,q=r.a,p=!r.c,o=r.d,n=0;n<4;++n){if(q){m=o[n]
if(p)m+=x}else{if(n>0){h[n]=h[0]
continue}m=x}l=h[n]
k=l.a
j=m+w
if(j<0)j=0
else if(j>127)j=127
j=C.AD[j]
k.$flags&2&&B.B(k)
k[0]=j
if(m<0)j=0
else j=m>127?127:m
k[1]=C.AE[j]
j=l.b
k=m+v
if(k<0)k=0
else if(k>127)k=127
k=C.AD[k]
j.$flags&2&&B.B(j)
j[0]=k*2
k=m+u
if(k<0)k=0
else if(k>127)k=127
j[1]=C.AE[k]*101581>>>16
if(j[1]<8)j[1]=8
k=l.c
j=m+t
if(j<0)j=0
else if(j>117)j=117
j=C.AD[j]
k.$flags&2&&B.B(k)
k[0]=j
j=m+s
if(j<0)j=0
else if(j>127)j=127
k[1]=C.AE[j]}},
bfo(){var x,w,v,u,t,s,r=this,q=r.fr
for(x=0;x<4;++x)for(w=0;w<8;++w)for(v=0;v<3;++v)for(u=0;u<11;++u){t=r.c
t===$&&B.b()
s=t.ij(C.aB0[x][w][v][u])!==0?r.c.dz(8):C.aqW[x][w][v][u]
t=q.b[x][w].a[v]
t.$flags&2&&B.B(t)
t[u]=s}t=r.c
t===$&&B.b()
t=t.dz(1)!==0
r.fx=t
if(t)r.fy=r.c.dz(8)},
bh8(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.bY
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
b9L(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k.at
if(j!=null)m.bW=j
x=J.iZ(4,y.K)
for(j=y.u,w=0;w<4;++w)x[w]=B.a([new A.Ks(),new A.Ks()],j)
m.av=x
j=m.at
j.toString
x=J.iZ(j,y.bt)
for(v=0;v<j;++v){u=new Uint8Array(16)
t=new Uint8Array(8)
x[v]=new A.aCm(u,t,new Uint8Array(8))}m.k2=x
m.ok=new Uint8Array(832)
j=m.at
j.toString
m.go=new Uint8Array(4*j)
u=m.p4=16*j
j=8*j
m.R8=j
t=m.bY
t.toString
s=C.Am[t]
r=s*u
q=(s/2|0)*j
m.p1=A.cQ(new Uint8Array(16*u+r),!1,l,r)
j=m.R8
j.toString
m.p2=A.cQ(new Uint8Array(8*j+q),!1,l,q)
j=m.R8
j.toString
m.p3=A.cQ(new Uint8Array(8*j+q),!1,l,q)
j=k.a
m.RG=A.cQ(new Uint8Array(j),!1,l,0)
p=k.a+1>>>1
m.rx=A.cQ(new Uint8Array(p),!1,l,0)
m.ry=A.cQ(new Uint8Array(p),!1,l,0)
k=m.bY
k.toString
o=C.Am[k]
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
x=J.iZ(n,y.bQ)
for(v=0;v<n;++v)x[v]=new A.aCj()
m.k3=x
k=m.at
k.toString
x=J.iZ(k,y.bl)
for(v=0;v<k;++v){j=new Int16Array(384)
x[v]=new A.aCk(j,new Uint8Array(16))}m.bs=x
k=m.at
k.toString
m.k4=B.bJ(k,l,!1,y.B)
m.bh8()
A.d01()
m.e=new A.bJI()
return!0},
bfk(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
j.bfl()
if(!n)n=j.bfq(q,s)
else{r.a=q.a=0
u=p.b
u===$&&B.b()
if(!u)r.b=q.b=0
p.f=p.e=0}u=j.bY
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
D.A.kZ(x,0,4,0)
j.y1=0
j.bi5()
u=j.bY
u.toString
k=!1
if(u>0){u=j.y2
t=j.ch
t===$&&B.b()
if(u>=t){t=j.cx
t.toString
t=u<=t
k=t}}if(!j.b14(k))return!1
u=++j.y2}return!0},
bi5(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.y2,a4=a1.ok
a4===$&&B.b()
x=A.cQ(a4,!1,a2,40)
w=A.cQ(a1.ok,!1,a2,584)
v=A.cQ(a1.ok,!1,a2,600)
a4=a3>0
u=0
while(!0){t=a1.at
t.toString
if(!(u<t))break
t=a1.bs
t===$&&B.b()
s=t[u]
if(u>0){for(r=-1;r<16;++r){t=r*32
x.rB(t-4,4,x,t+12)}for(r=-1;r<8;++r){t=r*32
q=t-4
t+=4
w.rB(q,4,w,t)
v.rB(q,4,v,t)}}else{for(r=0;r<16;++r)J.bZ(x.a,x.d+(r*32-1),129)
for(r=0;r<8;++r){t=r*32-1
J.bZ(w.a,w.d+t,129)
J.bZ(v.a,v.d+t,129)}if(a4){J.bZ(v.a,v.d+-33,129)
J.bZ(w.a,w.d+-33,129)
J.bZ(x.a,x.d+-33,129)}}t=a1.k2
t===$&&B.b()
p=t[u]
o=s.a
n=s.e
if(a4){x.A5(-32,16,p.a)
w.A5(-32,8,p.b)
v.A5(-32,8,p.c)}else if(u===0){t=x.a
q=x.d+-33
J.tj(t,q,q+21,127)
q=w.a
t=w.d+-33
J.tj(q,t,t+9,127)
t=v.a
q=v.d+-33
J.tj(t,q,q+9,127)}t=s.b
t===$&&B.b()
if(t){m=A.cb(x,a2,-16)
l=m.Qt()
if(a4){t=a1.at
t.toString
if(u>=t-1){t=p.a[15]
q=m.a
k=m.d
J.tj(q,k,k+4,t)}else m.A5(0,4,a1.k2[u+1].a)}j=l[0]
l.$flags&2&&B.B(l)
l[96]=j
l[64]=j
l[32]=j
for(t=s.c,i=0;i<16;++i,n=n<<2>>>0){h=A.cb(x,a2,C.RI[i])
C.axO[t[i]].$1(h)
n.toString
q=i*16
a1.al8(n,new A.lS(o,q,384,q,!1),h)}}else{t=A.cCb(u,a3,s.c[0])
t.toString
C.aCo[t].$1(x)
if(n!==0)for(i=0;i<16;++i,n=n<<2>>>0){h=A.cb(x,a2,C.RI[i])
n.toString
t=i*16
a1.al8(n,new A.lS(o,t,384,t,!1),h)}}t=s.f
t===$&&B.b()
q=A.cCb(u,a3,s.d)
q.toString
C.MP[q].$1(w)
C.MP[q].$1(v)
g=new A.lS(o,256,384,256,!1)
if((t&255)!==0){q=a1.e
if((t&170)!==0){q===$&&B.b()
q.vB(g,w)
q.vB(A.cb(g,a2,16),A.cb(w,a2,4))
k=A.cb(g,a2,32)
f=A.cb(w,a2,128)
q.vB(k,f)
q.vB(A.cb(k,a2,16),A.cb(f,a2,4))}else{q===$&&B.b()
q.aFm(g,w)}}e=new A.lS(o,320,384,320,!1)
t=t>>>8
if((t&255)!==0){q=a1.e
if((t&170)!==0){q===$&&B.b()
q.vB(e,v)
q.vB(A.cb(e,a2,16),A.cb(v,a2,4))
t=A.cb(e,a2,32)
k=A.cb(v,a2,128)
q.vB(t,k)
q.vB(A.cb(t,a2,16),A.cb(k,a2,4))}else{q===$&&B.b()
q.aFm(e,v)}}t=a1.ax
t.toString
if(a3<t-1){D.A.dN(p.a,0,16,x.hK(),480)
D.A.dN(p.b,0,8,w.hK(),224)
D.A.dN(p.c,0,8,v.hK(),224)}d=u*16
a0=u*8
for(r=0;r<16;++r){t=a1.p4
t.toString
q=a1.p1
q===$&&B.b()
q.rB(d+r*t,16,x,r*32)}for(r=0;r<8;++r){t=a1.R8
t.toString
q=a1.p2
q===$&&B.b()
k=r*32
q.rB(a0+r*t,8,w,k)
t=a1.R8
t.toString
q=a1.p3
q===$&&B.b()
q.rB(a0+r*t,8,v,k)}++u}},
al8(d,e,f){var x,w,v,u,t,s
switch(d>>>30){case 3:x=this.e
x===$&&B.b()
x.Qu(0,e,f,!1)
break
case 2:this.e===$&&B.b()
w=J.v(e.a,e.d)+4
v=D.c.l6(D.c.R(J.v(e.a,e.d+4)*35468,16),32)
u=D.c.l6(D.c.R(J.v(e.a,e.d+4)*85627,16),32)
t=D.c.l6(D.c.R(J.v(e.a,e.d+1)*35468,16),32)
s=D.c.l6(D.c.R(J.v(e.a,e.d+1)*85627,16),32)
A.bJK(f,0,w+u,s,t)
A.bJK(f,1,w+v,s,t)
A.bJK(f,2,w-v,s,t)
A.bJK(f,3,w-u,s,t)
break
case 1:x=this.e
x===$&&B.b()
x.Qv(e,f)
break
default:break}},
b_g(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.p4,j=m.k4
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
x.agn(w,k,u+4)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.aLW(w,k,u)}if(e>0){x=m.e
x===$&&B.b()
k.toString
x.ago(w,k,u+4)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.aLZ(w,k,u)}}else{t=m.R8
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
x.Fm(w,1,k,16,s,v,p)
t.toString
x.Fm(r,1,t,8,s,v,p)
x.Fm(q,1,t,8,s,v,p)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.bzc(w,k,u,v,p)
t.toString
o=A.cb(r,l,4)
n=A.cb(q,l,4)
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
j.bKF(w,k,u,v,p)
t.toString
x=4*t
o=A.cb(r,l,x)
n=A.cb(q,l,x)
j.Fl(o,t,1,8,u,v,p)
j.Fl(n,t,1,8,u,v,p)}}},
b0P(){var x,w=this,v=w.ay
v===$&&B.b()
x=v
while(!0){v=w.CW
v.toString
if(!(x<v))break
w.b_g(x,w.y2);++x}},
b14(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.bY
e.toString
x=C.Am[e]
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
if(d)g.b0P()
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
if(g.bW!=null&&o<n){m=g.xr=g.aZ5(o,n-o)
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
g.bht(0,o-l,m-h,n-o)}if(e){e=g.p1
m=g.p4
m.toString
e.rB(u,w,t,16*m)
m=g.p2
u=g.R8
u.toString
m.rB(s,v,r,8*u)
u=g.p3
m=g.R8
m.toString
u.rB(s,v,q,8*m)}return!0},
bht(d,e,f,g){if(f<=0||g<=0)return!1
this.b03(e,f,g)
this.b02(e,f,g)
return!0},
a2Z(d){var x
if((d&-4194304)>>>0===0)x=D.c.R(d,14)
else x=d<0?0:255
return x},
Wu(d,e,f,g){var x=19077*d
g.m(0,0,this.a2Z(x+26149*f+-3644112))
g.m(0,1,this.a2Z(x-6419*e-13320*f+2229552))
g.m(0,2,this.a2Z(x+33050*e+-4527440))},
Wd(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=new A.bJU(),a0=b3-1,a1=D.c.R(a0,1),a2=d.$2(J.v(a7.a,a7.d),J.v(a8.a,a8.d)),a3=d.$2(J.v(a9.a,a9.d),J.v(b0.a,b0.d)),a4=D.c.R(3*a2+a3+131074,2)
f.Wu(J.v(a5.a,a5.d),a4&255,a4>>>16,b1)
b1.m(0,3,255)
x=a6!=null
if(x){a4=D.c.R(3*a3+a2+131074,2)
w=J.v(a6.a,a6.d)
b2.toString
f.Wu(w,a4&255,a4>>>16,b2)
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
J.bZ(j.a,j.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.R(l,14)
else h=l<0?0:255
J.bZ(j.a,j.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.R(n,14)
else h=n<0?0:255
J.bZ(j.a,j.d+2,h)
J.bZ(j.a,j.d+3,255)
n=J.v(a5.a,a5.d+w)
m=p&255
l=p>>>16
j=w*4
i=A.cb(b1,e,j)
n=19077*n
g=n+26149*l+-3644112
if((g&-4194304)>>>0===0)h=D.c.R(g,14)
else h=g<0?0:255
J.bZ(i.a,i.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.R(l,14)
else h=l<0?0:255
J.bZ(i.a,i.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.R(n,14)
else h=n<0?0:255
J.bZ(i.a,i.d+2,h)
J.bZ(i.a,i.d+3,255)
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
J.bZ(k.a,k.d,h)
m=o-6419*n-13320*m+2229552
if((m&-4194304)>>>0===0)h=D.c.R(m,14)
else h=m<0?0:255
J.bZ(k.a,k.d+1,h)
o=o+33050*n+-4527440
if((o&-4194304)>>>0===0)h=D.c.R(o,14)
else h=o<0?0:255
J.bZ(k.a,k.d+2,h)
J.bZ(k.a,k.d+3,255)
w=J.v(a6.a,a6.d+w)
o=p&255
n=p>>>16
j=A.cb(b2,e,j)
w=19077*w
m=w+26149*n+-3644112
if((m&-4194304)>>>0===0)h=D.c.R(m,14)
else h=m<0?0:255
J.bZ(j.a,j.d,h)
n=w-6419*o-13320*n+2229552
if((n&-4194304)>>>0===0)h=D.c.R(n,14)
else h=n<0?0:255
J.bZ(j.a,j.d+1,h)
w=w+33050*o+-4527440
if((w&-4194304)>>>0===0)h=D.c.R(w,14)
else h=w<0?0:255
J.bZ(j.a,j.d+2,h)
J.bZ(j.a,j.d+3,255)}}if((b3&1)===0){a4=D.c.R(3*a2+a3+131074,2)
w=J.v(a5.a,a5.d+a0)
o=a0*4
n=A.cb(b1,e,o)
f.Wu(w,a4&255,a4>>>16,n)
n.m(0,3,255)
if(x){a4=D.c.R(3*a3+a2+131074,2)
a0=J.v(a6.a,a6.d+a0)
b2.toString
o=A.cb(b2,e,o)
f.Wu(a0,a4&255,a4>>>16,o)
o.m(0,3,255)}}},
b02(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.xr
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
q=q==null?null:q.el(s,u,null);(q==null?new A.fm():q).saN(0,r)}x.d=x.d+o.a}},
b03(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=A.cQ(J.d3(l.d.gag(0),0,null),!1,k,d*j.a*4),h=l.to
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
if(d===0){l.Wd(x,k,w,v,w,v,i,k,e)
p=f}else{j=l.RG
j===$&&B.b()
l.Wd(j,x,r,q,w,v,A.cb(i,k,-s),i,e)
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
l.Wd(A.cb(x,k,-n),x,r,q,w,v,A.cb(i,k,h),i,e)}j=x.d
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
l.ry.A5(0,t,v);--p}else if((u&1)===0)l.Wd(x,k,w,v,w,v,A.cb(i,k,s),k,e)
return p},
aZ5(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.b,m=n.a,l=n.b
if(d<0||e<=0||d+e>l)return null
if(d===0){n=m*l
o.cO=new Uint8Array(n)
x=o.bW
w=new A.bKE(x,m,l)
v=x.dg()
w.d=v&3
w.e=D.c.R(v,2)&3
w.f=D.c.R(v,4)&3
w.r=D.c.R(v,6)&3
if(w.gex()){u=w.d
if(u===0){if(x.c-x.d<n)w.r=1}else if(u===1){t=new A.aCK(C.o1,B.a([],y.J))
t.a=m
t.b=l
n=B.a([],y.A)
u=B.a([],y.F)
s=new Uint32Array(2)
r=new A.aCh(x,s)
s=r.d=J.d3(D.bq.gag(s),0,null)
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
u=new A.aqM(r,t,n,u)
u.db=m
w.x=u
u.L7(m,l,!0)
n=w.x
x=n.ax
if(x.length===1&&x[0].a===C.a5w&&n.bah()){w.y=!0
n=w.x
x=n.c
p=x.a*x.b
n.cx=0
x=D.c.ap(p,4)
x=new Uint8Array(p+(4-x))
n.CW=x
n.ch=J.oo(D.A.gag(x),0,null)}else{w.y=!1
w.x.aiz()}}else w.r=1}o.aX=w}n=o.aX
n===$&&B.b()
if(!n.w){x=o.cO
x===$&&B.b()
if(!n.NR(0,d,e,x))return null}n=o.cO
n===$&&B.b()
return A.cQ(n,!1,null,d*m)},
bfq(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.fr.b,a3=a1.k1
a3===$&&B.b()
x=a1.dy[a3]
a3=a1.bs
a3===$&&B.b()
w=a3[a1.y1]
v=A.cQ(w.a,!1,null,0)
a3=a1.k3
a3===$&&B.b()
u=a3[0]
v.bDL(0,v.c-v.d,0)
a3=w.b
a3===$&&B.b()
if(!a3){t=A.cQ(new Int16Array(16),!1,null,0)
a3=a4.b
s=u.b
r=a1.a3Y(a5,a2[1],a3+s,x.b,0,t)
a4.b=u.b=r>0?1:0
if(r>1)a1.bnP(t,v)
else{q=D.c.R(J.v(t.a,t.d)+3,3)
for(p=0;p<256;p+=16)J.bZ(v.a,v.d+p,q)}o=a2[0]
n=1}else{o=a2[3]
n=0}m=a4.a&15
l=u.a&15
for(k=0,j=0;j<4;++j){i=l&1
for(h=0,g=0;g<4;++g){r=a1.a3Y(a5,o,i+(m&1),x.a,n,v)
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
for(g=0;g<2;++g){r=a1.a3Y(a5,a2[2],i+(m&1),x.c,0,v)
i=r>0?1:0
m=m>>>1|i<<3
a3=J.v(v.a,v.d)!==0?1:0
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
bnP(d,e){var x,w,v,u,t,s,r,q,p,o,n=new Int32Array(16)
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
J.bZ(e.a,e.d+p,u)
u=D.c.R(q+r,3)
J.bZ(e.a,e.d+(p+16),u)
u=D.c.R(v-s,3)
J.bZ(e.a,e.d+(p+32),u)
u=D.c.R(q-r,3)
J.bZ(e.a,e.d+(p+48),u)
p+=64}},
b2o(d,e){var x,w,v,u,t,s
if(d.ij(e[3])===0)x=d.ij(e[4])===0?2:3+d.ij(e[5])
else if(d.ij(e[6])===0)x=d.ij(e[7])===0?5+d.ij(159):7+2*d.ij(165)+d.ij(145)
else{w=d.ij(e[8])
v=2*w+d.ij(e[9+w])
u=C.ast[v]
t=u.length
for(x=0,s=0;s<t;++s)x+=x+d.ij(u[s])
x+=3+D.c.eq(8,v)}return x},
a3Y(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=e[h].a[f]
for(;h<16;h=x){if(d.ij(p[0])===0)return h
for(;d.ij(p[1])===0;){++h
p=e[C.Q0[h]].a[0]
if(h===16)return 16}x=h+1
w=e[C.Q0[x]].a
if(d.ij(p[2])===0){p=w[1]
v=1}else{v=this.b2o(d,p)
p=w[2]}u=C.awH[h]
t=d.b
t===$&&B.b()
s=d.aiV(D.c.R(t,1))
t=d.b
r=C.P5[t]
d.b=C.P3[t]
t=d.d
t===$&&B.b()
d.d=t-r
t=s!==0?-v:v
q=g[h>0?1:0]
J.bZ(i.a,i.d+u,t*q)}return 16},
bfl(){var x,w,v,u,t,s,r,q,p,o=this,n=o.y1,m=4*n,l=o.go,k=o.id,j=o.bs
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
D.A.kZ(l,m,m+4,w)
D.A.kZ(k,0,4,w)}else{v=x.c
for(n=k.$flags|0,u=0,t=0;t<4;++t,u=p){w=k[t]
for(s=0;s<4;++s){j=m+s
r=C.awU[l[j]][w]
q=C.NR[o.c.ij(r[0])]
for(;q>0;)q=C.NR[2*q+o.c.ij(r[q])]
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
A.a7p.prototype={
dz(d){var x,w
for(x=0;w=d-1,d>0;d=w)x=(x|D.c.eS(this.ij(128),w))>>>0
return x},
JS(d){var x=this.dz(d)
return this.dz(1)===1?-x:x},
ij(d){var x,w=this,v=w.b
v===$&&B.b()
x=w.aiV(D.c.R(v*d,8))
if(w.b<=126)w.bl4()
return x},
aiV(d){var x,w,v,u,t,s=this,r=s.d
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
if(D.c.nZ(r,t)>d){x=s.b
x===$&&B.b()
w=d+1
s.b=x-w
s.c=r-D.c.eS(w,t)
return 1}else{s.b=d
return 0}},
bl4(){var x,w=this,v=w.b
v===$&&B.b()
x=C.P5[v]
w.b=C.P3[v]
v=w.d
v===$&&B.b()
w.d=v-x}}
A.bJI.prototype={
ago(d,e,f){var x,w=A.cb(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x
if(this.apB(w,e,f))this.Tc(w,e)}},
agn(d,e,f){var x,w=A.cb(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x*e
if(this.apB(w,1,f))this.Tc(w,1)}},
aLZ(d,e,f){var x,w,v=A.cb(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.ago(v,e,f)}},
aLW(d,e,f){var x,w=A.cb(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.agn(w,e,f)}},
bKF(d,e,f,g,h){var x,w,v=A.cb(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.Fl(v,e,1,16,f,g,h)}},
bzc(d,e,f,g,h){var x,w=A.cb(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.Fl(w,1,e,16,f,g,h)}},
Fm(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=A.cb(d,null,0)
for(x=-3*e,w=-2*e,v=-e,u=2*e;t=g-1,g>0;g=t){if(this.apC(h,e,a0,a1))if(this.ao0(h,e,a2))this.Tc(h,e)
else{s=J.v(h.a,h.d+x)
r=J.v(h.a,h.d+w)
q=J.v(h.a,h.d+v)
p=J.v(h.a,h.d)
o=J.v(h.a,h.d+e)
n=J.v(h.a,h.d+u)
m=$.cl8()
l=m[1020+3*(p-q)+m[1020+r-o]]
m=D.c.R(27*l+63,7)
k=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.R(18*l+63,7)
j=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.R(9*l+63,7)
i=(m&2147483647)-((m&2147483648)>>>0)
m=$.pz()[255+s+i]
J.bZ(h.a,h.d+x,m)
m=$.pz()[255+r+j]
J.bZ(h.a,h.d+w,m)
m=$.pz()[255+q+k]
J.bZ(h.a,h.d+v,m)
m=$.pz()[255+p-k]
J.bZ(h.a,h.d,m)
m=$.pz()[255+o-j]
J.bZ(h.a,h.d+e,m)
m=$.pz()[255+n-i]
J.bZ(h.a,h.d+u,m)}h.d+=f}},
Fl(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=A.cb(d,null,0)
for(x=-2*e,w=-e;v=g-1,g>0;g=v){if(this.apC(k,e,h,i))if(this.ao0(k,e,j))this.Tc(k,e)
else{u=J.v(k.a,k.d+x)
t=J.v(k.a,k.d+w)
s=J.v(k.a,k.d)
r=J.v(k.a,k.d+e)
q=3*(s-t)
p=$.aUP()
o=D.c.R(q+4,3)
n=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.R(q+3,3)
m=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.R(n+1,1)
l=(o&2147483647)-((o&2147483648)>>>0)
o=$.pz()[255+u+l]
J.bZ(k.a,k.d+x,o)
o=$.pz()[255+t+m]
J.bZ(k.a,k.d+w,o)
o=$.pz()[255+s-n]
J.bZ(k.a,k.d,o)
o=$.pz()[255+r-l]
J.bZ(k.a,k.d+e,o)}k.d+=f}},
Tc(d,e){var x=J.v(d.a,d.d+-2*e),w=-e,v=J.v(d.a,d.d+w),u=J.v(d.a,d.d),t=J.v(d.a,d.d+e),s=3*(u-v)+$.cl8()[1020+x-t],r=$.aUP()[112+D.c.l6(D.c.R(s+4,3),32)],q=$.aUP()[112+D.c.l6(D.c.R(s+3,3),32)]
d.m(0,w,$.pz()[255+v+q])
d.m(0,0,$.pz()[255+u-r])},
ao0(d,e,f){var x=J.v(d.a,d.d+-2*e),w=J.v(d.a,d.d+-e),v=J.v(d.a,d.d),u=J.v(d.a,d.d+e),t=$.aUO()
return t[255+x-w]>f||t[255+u-v]>f},
apB(d,e,f){var x=J.v(d.a,d.d+-2*e),w=J.v(d.a,d.d+-e),v=J.v(d.a,d.d),u=J.v(d.a,d.d+e)
return 2*$.aUO()[255+w-v]+$.cl7()[255+x-u]<=f},
apC(d,e,f,g){var x=J.v(d.a,d.d+-4*e),w=J.v(d.a,d.d+-3*e),v=J.v(d.a,d.d+-2*e),u=J.v(d.a,d.d+-e),t=J.v(d.a,d.d),s=J.v(d.a,d.d+e),r=J.v(d.a,d.d+2*e),q=J.v(d.a,d.d+3*e),p=$.aUO(),o=255+v
if(2*p[255+u-t]+$.cl7()[o-s]>f)return!1
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
A.Em(e,l,0,0,t+n)
A.Em(e,l,1,0,s+o)
A.Em(e,l,2,0,s-o)
A.Em(e,l,3,0,t-n);++w
l+=32}},
Qu(d,e,f,g){this.vB(e,f)
if(g)this.vB(A.cb(e,null,16),A.cb(f,null,4))},
Qv(d,e){var x,w,v=J.v(d.a,d.d)+4
for(x=0;x<4;++x)for(w=0;w<4;++w)A.Em(e,0,w,x,v)},
aFm(d,e){var x=this,w=null
if(J.v(d.a,d.d)!==0)x.Qv(d,e)
if(J.v(d.a,d.d+16)!==0)x.Qv(A.cb(d,w,16),A.cb(e,w,4))
if(J.v(d.a,d.d+32)!==0)x.Qv(A.cb(d,w,32),A.cb(e,w,128))
if(J.v(d.a,d.d+48)!==0)x.Qv(A.cb(d,w,48),A.cb(e,w,132))}}
A.bJN.prototype={}
A.bJR.prototype={}
A.bJT.prototype={}
A.a7o.prototype={}
A.bJS.prototype={}
A.bJJ.prototype={}
A.Ks.prototype={}
A.aCj.prototype={}
A.aCl.prototype={}
A.aCk.prototype={}
A.aCm.prototype={}
A.a7q.prototype={
NS(){var x,w=this.b
if(w.j8(8)!==47)return!1
x=this.c
x.f=C.wT
x.a=w.j8(14)+1
x.b=w.j8(14)+1
x.d=w.j8(1)!==0
if(w.j8(3)!==0)return!1
return!0},
ob(d){var x,w,v,u,t,s=this,r=null
s.e=0
if(!s.NS())return r
x=s.c
s.L7(x.a,x.b,!0)
s.aiz()
w=x.a
s.d=A.hF(r,r,C.a7,0,C.bl,x.b,r,0,4,r,C.a7,w,!1)
w=s.ch
w.toString
v=x.a
u=x.b
if(!s.a3k(w,v,u,u,s.gbhg()))return r
x=x.w
if(x.length!==0){t=A.cQ(new B.e8(x),!1,r,0)
x=s.d
x.toString
x.e=A.cw6(t)}return s.d},
aiz(){var x,w=this,v=w.c,u=v.a
v=u*v.b+u
x=new Uint32Array(v+u*16)
w.ch=x
w.CW=J.d3(D.bq.gag(x),0,null)
w.cx=v
return!0},
bhW(d){var x,w,v,u=this,t=u.b,s=t.j8(2),r=u.ay,q=D.c.eq(1,s)
if((r&q)>>>0!==0)return!1
u.ay=(r|q)>>>0
x=new A.aCi(C.a5v)
u.ax.push(x)
r=C.aBK[s]
x.a=r
x.b=d[0]
x.c=d[1]
switch(r.a){case 0:case 1:t=t.j8(3)+2
x.e=t
x.d=u.L7(A.En(x.b,t),A.En(x.c,x.e),!1)
break
case 3:w=t.j8(8)+1
if(w>16)v=0
else if(w>4)v=1
else{t=w>2?2:3
v=t}d[0]=A.En(x.b,v)
x.e=v
x.d=u.L7(w,1,!1)
u.b0u(w,x)
break
case 2:break
default:throw B.l(A.c6("Invalid WebP transform type: "+s))}return!0},
L7(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(f)for(x=p.b,w=y.t,v=e,u=d;x.j8(1)!==0;){t=B.a([u,v],w)
if(!p.bhW(t))throw B.l(A.c6("Invalid Transform"))
u=t[0]
v=t[1]}else{v=e
u=d}x=p.b
if(x.j8(1)!==0){s=x.j8(4)
if(!(s>=1&&s<=11))throw B.l(A.c6("Invalid Color Cache"))}else s=0
if(!p.bhM(u,v,s,f))throw B.l(A.c6("Invalid Huffman Codes"))
if(s>0){x=D.c.eq(1,s)
p.r=x
p.w=new A.bJO(new Uint32Array(x),32-s)}else p.r=0
x=p.c
x.a=u
x.b=v
r=p.y
p.z=A.En(u,r)
p.x=r===0?4294967295:D.c.eq(1,r)-1
if(f){p.e=0
return null}q=new Uint32Array(u*v)
if(!p.a3k(q,u,v,v,null))throw B.l(A.c6("Failed to decode image data."))
p.e=0
return q},
a3k(a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=a0.e,a2=D.c.hu(a1,a9),a3=D.c.ap(a1,a9),a4=a0.amz(a3,a2),a5=a0.e,a6=a9*b0,a7=a9*b1
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
if((a3&v)>>>0===0){p=a0.Ls(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(u.a>=32)u.BY()
r=a4.a
o=r[0].An(u)
n=0
if(o<256){m=r[1].An(u)
if(u.a>=32)u.BY()
l=A.cGL(r[2].An(u),o,m,r[3].An(u))
a1&2&&B.B(a8)
a8[a5]=l;++a5;++a3
if(a3>=a9){++a2
if(D.c.ap(a2,16)===0&&t)b2.$1(a2)
if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.c.fZ(j*506832829>>>0,r)
k&2&&B.B(q)
q[i]=j;++s}a3=n}}else if(o<280){h=a0.TG(o-256)
g=r[4].An(u)
if(u.a>=32)u.BY()
f=a0.aqs(a9,a0.TG(g))
if(a5<f||a6-a5<h)return!1
else{e=a5-f
for(d=0;d<h;++d){r=a8[e+d]
a1&2&&B.B(a8)
a8[a5+d]=r}a5+=h}a3+=h
for(;a3>=a9;){a3-=a9;++a2
if(D.c.ap(a2,16)===0&&t)b2.$1(a2)}if(a5<a7){if((a3&v)>>>0!==0){p=a0.Ls(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.c.fZ(j*506832829>>>0,r)
k&2&&B.B(q)
q[i]=j;++s}}}else if(o<x){for(;s<a5;){r=a8[s]
i=D.c.fZ(r*506832829>>>0,w.b)
q=w.a
q.$flags&2&&B.B(q)
q[i]=r;++s}r=w.a
q=r[o-280]
a1&2&&B.B(a8)
a8[a5]=q;++a5;++a3
if(a3>=a9){++a2
if(D.c.ap(a2,16)===0&&t)b2.$1(a2)
for(q=w.b,k=r.$flags|0;s<a5;){j=a8[s]
i=D.c.fZ(j*506832829>>>0,q)
k&2&&B.B(r)
r[i]=j;++s}a3=n}}else return!1}if(t)b2.$1(a2)
if(r.d>=q&&u.a>=64&&a5<a6)return!1
a0.e=a5
return!0},
bah(){var x,w,v,u
if(this.r>0)return!1
for(x=this.as,w=this.at,v=0;v<x;++v){u=w[v].a
if(u[1].f>1)return!1
if(u[2].f>1)return!1
if(u[3].f>1)return!1}return!0},
b0C(d){var x,w,v,u,t,s,r=this,q=r.f,p=d-q
if(p<=0)return
x=r.c
r.aiJ(p,x.a*q)
w=x.a
v=w*p
u=w*r.f
x=r.ch
x.toString
q=r.cx
q.toString
t=A.cQ(x,!1,null,q)
for(s=0;s<v;++s){q=r.cy
q.toString
x=D.c.R(J.v(t.a,t.d+s),8)
q.$flags&2&&B.B(q)
q[u+s]=x&255}r.f=d},
aYI(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=o.e,m=D.c.hu(n,d),l=D.c.ap(n,d),k=o.amz(l,m),j=o.e,i=d*e,h=d*f,g=o.x
n=o.b
while(!0){x=n.b
if(!(!(x.d>=x.c&&n.a>=64)&&j<h))break
if((l&g)>>>0===0){w=o.Ls(o.Q,o.z,o.y,l,m)
k=o.at[w]}if(n.a>=32)n.BY()
x=k.a
v=x[0].An(n)
if(v<256){x=o.CW
x===$&&B.b()
x.$flags&2&&B.B(x)
x[j]=v;++j;++l
if(l>=d){++m
if(D.c.ap(m,16)===0)o.a3I(m)
l=0}}else if(v<280){u=o.TG(v-256)
t=x[4].An(n)
if(n.a>=32)n.BY()
s=o.aqs(d,o.TG(t))
if(j>=s&&i-j>=u)for(x=o.CW,r=0;r<u;++r){x===$&&B.b()
q=j+r
p=x[q-s]
x.$flags&2&&B.B(x)
x[q]=p}else{o.e=j
return!0}j+=u
l+=u
for(;l>=d;){l-=d;++m
if(D.c.ap(m,16)===0)o.a3I(m)}if(j<h&&(l&g)>>>0!==0){w=o.Ls(o.Q,o.z,o.y,l,m)
k=o.at[w]}}else return!1}o.a3I(m)
o.e=j
return!0},
a3I(d){var x,w,v,u=this,t=u.f,s=d-t,r=u.CW
r===$&&B.b()
x=A.cQ(r,!1,null,u.c.a*t)
if(s>0){w=u.f
t=u.cy
t.toString
r=u.db
r.toString
v=A.cQ(t,!1,null,r*w)
u.ax[0].bti(w,w+s,x,v)}u.f=d},
bhh(d){var x,w,v,u,t,s=this,r=s.c,q=r.a,p=s.f,o=d-p
if(o<=0)return
s.aiJ(o,q*p)
q=s.cx
q.toString
x=s.f
w=q
v=0
for(;v<o;++v,++x)for(u=0;u<r.a;++u,++w){t=s.ch[w]
q=s.d.a
if(q!=null)q.kB(u,x,t>>>16&255,t>>>8&255,t&255,t>>>24&255)}s.f=d},
aiJ(d,e){var x,w,v,u=this,t=u.ax,s=t.length,r=u.c.a,q=u.f,p=q+d,o=u.cx
o.toString
x=u.ch
x.toString
D.bq.dN(x,o,o+r*d,x,e)
for(w=e;v=s-1,s>0;w=o,s=v){r=t[v]
x=u.ch
x.toString
r.bBE(q,p,x,w,x,o)}},
bhM(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=1
if(g&&l.b.j8(1)!==0){x=l.b.j8(3)+2
w=A.En(d,x)
v=A.En(e,x)
u=w*v
t=l.L7(w,v,!1)
l.y=x
for(s=0;s<u;++s){r=t[s]>>>8&65535
t.$flags&2&&B.B(t)
t[s]=r
if(r>=k)k=r+1}}else t=null
q=J.iZ(k,y.O)
for(p=0;p<k;++p)q[p]=A.cSR()
for(o=f>0,s=0;s<k;++s)for(n=0;n<5;++n){m=C.atA[n]
if(n===0&&o)m+=D.c.eq(1,f)
if(!l.bhK(m,q[s].a[n]))return!1}l.Q=t
l.as=k
l.at=q
return!0},
bhK(d,e){var x,w,v,u,t,s,r,q,p,o=this.b
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
u[1]=x}s=e.bsa(u,v,w,d,t)}else{r=new Int32Array(19)
q=o.j8(4)+4
if(q>19)return!1
u=new Int32Array(d)
for(p=0;p<q;++p)r[C.aw5[p]]=o.j8(3)
s=this.bhL(r,d,u)
if(s)s=e.awF(u,d)}return s},
bhL(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.cwT()
if(!j.awF(d,19))return!1
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
o=C.apL[p]
n=C.aq5[p]
m=x.j8(o)+n
if(u+m>e)return!1
else{l=r===16?t:0
for(;k=m-1,m>0;m=k,u=q){q=u+1
v&2&&B.B(f)
f[u]=l}}}}return!0},
TG(d){var x
if(d<4)return d+1
x=D.c.R(d-2,1)
return D.c.eq(2+(d&1),x)+this.b.j8(x)+1},
aqs(d,e){var x,w
if(e>120)return e-120
else{x=C.atR[e-1]
w=(x>>>4)*d+(8-(x&15))
return w>=1?w:1}},
b0u(d,e){var x,w,v,u,t,s,r=D.c.eq(1,D.c.hB(8,e.e)),q=new Uint32Array(r),p=e.d
p.toString
x=J.d3(D.bq.gag(p),0,null)
w=J.d3(D.bq.gag(q),0,null)
q[0]=e.d[0]
v=4*d
for(p=w.$flags|0,u=4;u<v;++u){t=x[u]
s=w[u-4]
p&2&&B.B(w)
w[u]=t+s&255}for(v=4*r;u<v;++u){p&2&&B.B(w)
w[u]=0}e.d=q
return!0},
Ls(d,e,f,g,h){if(f===0)return 0
d.toString
return d[e*D.c.R(h,f)+D.c.R(g,f)]},
amz(d,e){var x=this,w=x.Ls(x.Q,x.z,x.y,d,e)
return x.at[w]}}
A.aqM.prototype={
bym(d){return this.b0C(d)}}
A.aCh.prototype={
aDr(){var x,w,v=this.a
if(v<32){x=this.c
w=D.c.fZ(x[0],v)+((x[1]&C.B9[v])>>>0)*(C.B9[32-v]+1)}else{x=this.c
w=v===32?x[1]:D.c.fZ(x[1],v-32)}return w},
j8(d){var x,w=this,v=w.b
if(!(v.d>=v.c&&w.a>=64)&&d<25){v=w.aDr()
x=C.B9[d]
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
A.bJO.prototype={}
A.Kt.prototype={
J(){return"VP8LImageTransformType."+this.b}}
A.aCi.prototype={
bBE(d,e,f,g,h,i){var x,w,v,u,t=this,s=t.b
switch(t.a.a){case 2:t.bqb(h,i,i+(e-d)*s)
break
case 0:t.bHb(d,e,h,i)
if(e!==t.c){x=i-s
D.bq.dN(h,x,x+s,f,i+(e-d-1)*s)}break
case 1:t.btj(d,e,h,i)
break
case 3:if(g===i&&t.e>0){w=e-d
v=w*A.En(s,t.e)
u=i+w*s-v
D.bq.dN(h,u,u+v,f,i)
t.axF(d,e,f,u,h,i)}else t.axF(d,e,f,g,h,i)
break}},
bti(d,e,f,g){var x,w,v,u,t,s,r=this.e,q=D.c.hB(8,r),p=this.b,o=this.d
if(q<8){x=D.c.eq(1,r)-1
w=D.c.eq(1,q)-1
for(v=d;v<e;++v)for(u=0,t=0;t<p;++t){if((t&x)>>>0===0){u=J.v(f.a,f.d);++f.d}r=o[(u&w)>>>0]
J.bZ(g.a,g.d,r>>>8&255);++g.d
u=D.c.R(u,q)}}else for(v=d;v<e;++v)for(t=0;t<p;++t){s=J.v(f.a,f.d);++f.d
r=o[s]
J.bZ(g.a,g.d,r>>>8&255);++g.d}},
axF(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=this.e,o=D.c.hB(8,p),n=this.b,m=this.d
if(o<8){x=D.c.eq(1,p)-1
w=D.c.eq(1,o)-1
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
btj(a2,a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.b,e=g.e,d=D.c.eq(1,e)-1,a0=A.En(f,e),a1=D.c.R(a2,g.e)*a0
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
o=$.on()
o.$flags&2&&B.B(o)
o[0]=p
p=$.pA()
n=p[0]
o[0]=q
m=p[0]
l=$.aUR()
l.$flags&2&&B.B(l)
l[0]=n*m
k=$.cla()
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
bHb(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=this,n=o.b
if(d===0){A.bJP(f,g,4278190080)
for(x=1;x<n;++x){w=g+x
A.bJP(f,w,f[w-1])}g+=n;++d}w=o.e
v=D.c.eq(1,w)-1
u=A.En(n,w)
t=D.c.R(d,o.e)*u
for(s=d;s<e;){A.bJP(f,g,f[g-n])
r=t+1
q=$.cCa[o.d[t]>>>8&15]
for(x=1;x<n;++x){if((x&v)>>>0===0){p=r+1
q=$.cCa[o.d[r]>>>8&15]
r=p}w=g+x
A.bJP(f,w,q.$3(f,f[w-1],w-n))}g+=n;++s
if((s&v)>>>0===0)t+=u}},
bqb(d,e,f){var x,w,v,u
for(x=d.$flags|0;e<f;e=u){w=d[e]
v=w>>>8&255
u=e+1
x&2&&B.B(d)
d[e]=(w&4278255360|(w&16711935)+(v<<16|v)&16711935)>>>0}}}
A.bKE.prototype={
gex(){var x=this,w=x.d
if(w>1||x.e>=4||x.f>1||x.r!==0)return!1
return!0},
NR(d,e,f,g){var x,w,v,u,t,s,r=this
if(!r.gex())return!1
x=C.aCw[r.e]
if(r.d===0){w=r.b
v=e*w
u=r.a
D.A.dN(g,v,f*w,u.a,u.d-u.b+v)}else{w=e+f
u=r.x
u===$&&B.b()
u.cy=g
t=u.c
if(r.y)w=u.aYI(t.a,t.b,w)
else{s=u.ch
s.toString
u=u.a3k(s,t.a,t.b,w,u.gbyl())
w=u}if(!w)return!1}if(x!=null){w=r.b
x.$6(w,r.c,w,e,f,g)}if(r.f===1)if(!r.aZA(g,r.b,r.c,e,f))return!1
if(e+f===r.c)r.w=!0
return!0},
aZA(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
A.a7F.prototype={
aTB(d,e){var x=this,w=d.dg()
x.r=0
x.f=(w&1)!==0
x.w=d.d-d.b
x.x=e-16}}
A.aqN.prototype={}
A.aq5.prototype={
a7A(d){var x,w=this
if(d===0)return!1
x=(d<<1>>>0)-1
w.e=x
x=new Int32Array(x<<1>>>0)
w.d=x
x[1]=-1
w.f=1
D.A.kZ(w.a,0,128,255)
return!0},
awF(d,e){var x,w,v,u,t,s=this
for(x=0,w=0,v=0;v<e;++v)if(d[v]>0){++x
w=v}if(!s.a7A(x))return!1
if(x===1){if(w<0||w>=e)return!1
return s.a2t(w,0,0)}u=new Int32Array(e)
if(!s.b9f(d,e,u))return!1
for(v=0;v<e;++v){t=d[v]
if(t>0)if(!s.a2t(v,u[v],t))return!1}return s.f===s.e},
bsa(d,e,f,g,h){var x,w,v,u=this
if(!u.a7A(h))return!1
for(x=0;x<h;++x){w=e[x]
if(w!==-1){v=f[x]
if(v>=g)return u.f===u.e
if(!u.a2t(v,w,d[x]))return u.f===u.e}}return u.f===u.e},
An(d){var x,w,v=this,u=d.aDr(),t=d.a,s=u&127,r=v.a[s]
if(r<=7){d.a=t+r
return v.b[s]}x=v.c[s]
t+=7
u=u>>>7
do{w=v.d
w===$&&B.b()
x=x+w[(x<<1>>>0)+1]+(u&1)
u=u>>>1;++t}while(v.apI(x))
d.a=t
return v.d[x<<1>>>0]},
a2t(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
if(f<=7){x=l.arx(e,f)
for(w=D.c.eS(1,7-f),v=l.b,u=v.$flags|0,t=l.a,s=t.$flags|0,r=0;r<w;++r){q=(x|D.c.eS(r,f))>>>0
u&2&&B.B(v)
v[q]=d
s&2&&B.B(t)
t[q]=f}}else x=l.arx(D.c.nZ(e,f-7),7)
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
o+=t[s]+(D.c.nZ(e,n)&1);--p
if(p===0){v&2&&B.B(w)
w[x]=o}}if(l.bcs(o))l.bct(o,0)
else if(l.apI(o))return!1
w=l.d
w===$&&B.b()
w.$flags&2&&B.B(w)
w[o<<1>>>0]=d
return!0},
arx(d,e){return D.c.fZ((C.RS[d&15]<<4|C.RS[D.c.R(d,4)])>>>0,8-e)},
bct(d,e){var x=this.d
x===$&&B.b()
x.$flags&2&&B.B(x)
x[(d<<1>>>0)+1]=e},
apI(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]!==0},
bcs(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]<0},
b9f(d,e,f){var x,w,v,u,t,s,r,q,p=new Int32Array(16),o=new Int32Array(16)
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
A.a_8.prototype={
i(d,e){return this.a[e]}}
A.SV.prototype={
J(){return"WebPFormat."+this.b}}
A.aCK.prototype={}
A.aqO.prototype={}
A.bKF.prototype={
Id(d){var x=A.cQ(d,!1,null,0)
this.b=x
if(!this.amw(x))return!1
return!0},
oz(d){var x,w=this,v=null,u=A.cQ(d,!1,v,0)
w.b=u
if(!w.amw(u))return v
u=new A.aqO(C.o1,B.a([],y.J))
w.a=u
x=w.b
x.toString
if(!w.avg(x,u))return v
u=w.a
switch(u.f.a){case 3:u.as=u.z.length
return u
case 2:x=w.b
x.toString
x.d=u.ay
if(!A.cpz(x,u).NS())return v
u=w.a
u.as=u.z.length
return u
case 1:x=w.b
x.toString
x.d=u.ay
if(!A.cpx(x,u).NS())return v
u=w.a
u.as=u.z.length
return u
case 0:throw B.l(A.c6("Unknown format for WebP"))}},
k8(d){var x,w,v,u,t=this,s=t.b
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
return t.akA(s.B0(x,w),d)}w=x.f
if(w===C.wT){s.toString
u=s.B0(x.ch,x.ay)
s=t.a
s.toString
return A.cpz(u,s).ob(0)}else if(w===C.Ed){s.toString
u=s.B0(x.ch,x.ay)
s=t.a
s.toString
return A.cpx(u,s).ob(0)}return null},
ny(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=null
if(p.oz(e)==null)return o
x=p.a.e
if(!x)return p.k8(0)
for(w=o,v=w,u=0;x=p.a,u<x.as;++u){f=x.z[u]
t=p.k8(u)
if(t==null)continue
t.y=f.e
if(v==null||w==null){x=p.a
s=x.a
x=x.b
r=t.gqb()
q=t.a
q=q==null?o:q.gdv()
if(q==null)q=C.a7
v=A.hF(o,o,q,t.y,C.bl,x,o,0,r,o,C.a7,s,!1)
w=v}else{w=A.BL(w,!1,!1)
x=f.f
x===$&&B.b()
if(x){x=w.a
if(x!=null)x.nt(0,o)}}A.cr0(w,t,C.y4,o,o,f.a,f.b,o,o,o,o)
v.nq(w)}return v},
akA(d,e){var x,w,v,u=null,t=B.a([],y.J),s=new A.aqO(C.o1,t)
if(!this.avg(d,s))return u
if(s.f===C.o1)return u
s.as=this.a.as
if(s.e){x=t.length
if(e>=x)return u
w=t[e]
t=w.x
t===$&&B.b()
x=w.w
x===$&&B.b()
return this.akA(d.B0(t,x),e)}else{v=d.B0(s.ch,s.ay)
t=s.f
if(t===C.wT)return A.cpz(v,s).ob(0)
else if(t===C.Ed)return A.cpx(v,s).ob(0)}return u},
amw(d){if(d.qj(4)!=="RIFF")return!1
d.an()
if(d.qj(4)!=="WEBP")return!1
return!0},
avg(d,e){var x,w,v,u,t,s,r,q,p,o,n,m
for(x=d.c,w=d.b;d.d<x;){v=d.qj(4)
u=d.an()
t=u+1>>>1<<1>>>0
s=d.d
r=s-w
switch(v){case"VP8X":if(!this.b2V(d,e))return!1
break
case"VP8 ":e.ay=r
e.ch=u
e.f=C.Ed
break
case"VP8L":e.ay=r
e.ch=u
e.f=C.wT
break
case"ALPH":e.toString
s=d.a
q=d.e
p=J.bl(s)
s=new A.lS(s,0,p,0,q)
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
d.bO()
break
case"ANMF":if(!this.b1H(d,e,u))return!1
break
case"ICCP":e.toString
n=d.jY(u)
d.d=d.d+(n.c-n.d)
n.hK()
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
return e.f!==C.o1},
b2V(d,e){var x,w,v,u,t=d.dg()
if((t&192)!==0)return!1
x=D.c.R(t,4)
w=D.c.R(t,1)
if((t&1)!==0)return!1
if(d.rG()!==0)return!1
v=d.rG()
u=d.rG()
e.a=v+1
e.b=u+1
e.e=(w&1)!==0
e.d=(x&1)!==0
return!0},
b1H(d,e,f){var x,w=d.rG(),v=d.rG()
d.rG()
x=new A.aqN(w*2,v*2,d.rG()+1,d.rG())
x.aTB(d,f)
if(x.r!==0)return!1
e.z.push(x)
return!0}}
A.bfV.prototype={
J(){return"IccProfileCompression."+this.b}}
A.a_u.prototype={
btB(){var x,w=this
if(w.b===C.zR)return w.c
x=y.D.a(C.FY.ka(w.c))
w.c=x
w.b=C.zR
return x}}
A.ap9.prototype={
J(){return"FrameType."+this.b}}
A.BM.prototype={
gl0(){var x=this.x
return x===$?this.x=B.a([],y.g):x},
aT6(d,e,f,g){var x,w,v,u=this,t=d.gdv(),s=d.gqb(),r=d.a
u.akp(g,e,t,s,r==null?null:r.geW())
t=d.b
if(t!=null)u.b=B.jf(t,y.N,y.I)
t=d.d
if(t!=null){s=y.N
u.d=B.jf(t,s,s)}u.gl0().push(u)
if(!f){x=d.gl0().length
for(t=y.g,w=1;w<x;++w){v=d.x
u.nq(A.aqh((v===$?d.x=B.a([],t):v)[w],e,!1,g))}}},
aT5(d,e,f){var x,w,v,u,t=this,s=d.b
if(s!=null)t.b=B.jf(s,y.N,y.I)
s=d.d
if(s!=null){x=y.N
t.d=B.jf(s,x,x)}t.gl0().push(t)
if(!e&&d.gl0().length>1){w=d.gl0().length
for(s=y.g,v=1;v<w;++v){u=d.x
t.nq(A.BL((u===$?d.x=B.a([],s):u)[v],!1,!1))}}},
nq(d){var x=this
if(d==null)d=A.BL(x,!0,!0)
d.z=x.gl0().length
if(D.b.gV(x.gl0())!==d)x.gl0().push(d)
return d},
WB(){return this.nq(null)},
akp(d,e,f,g,h){var x,w,v=this,u=null
switch(f.a){case 0:if(h==null){x=D.d.f8(d*g/8)
w=new A.ON($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.f8(d/8)
w=new A.ON($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 1:if(h==null){x=D.d.f8(d*(g<<1>>>0)/8)
w=new A.OP($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.f8(d/4)
w=new A.OP($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 2:if(h==null){if(g===2)x=d
else if(g===4)x=d*2
else x=g===3?D.d.f8(d*1.5):D.d.f8(d/2)
w=new A.OR($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.f8(d/2)
w=new A.OR($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 3:if(h==null)v.a=A.cxa(d,e,g)
else v.a=new A.OS(new Uint8Array(d*e),h,d,e,1)
break
case 4:x=d*e
if(h==null)v.a=new A.OO(new Uint16Array(x*g),u,d,e,g)
else v.a=new A.OO(new Uint16Array(x),h,d,e,1)
break
case 5:v.a=A.cTq(d,e,g)
break
case 6:v.a=new A.a_B(new Int8Array(d*e*g),d,e,g)
break
case 7:v.a=new A.a_z(new Int16Array(d*e*g),d,e,g)
break
case 8:v.a=new A.a_A(new Int32Array(d*e*g),d,e,g)
break
case 9:v.a=A.cTo(d,e,g)
break
case 10:v.a=A.cTp(d,e,g)
break
case 11:v.a=new A.a_y(new Float64Array(d*e*4*g),d,e,g)
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
gwU(){var x=this.e
return x==null?this.e=new A.O8(B.I(y.N,y.P)):x},
aKa(d,e){var x=this,w=x.b;(w==null?x.b=B.I(y.N,y.I):w).m(0,d,e)
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
grm(){var x=this.a
return(x==null?null:x.geW())!=null},
gmM(){var x=this.a
x=x==null?null:x.gmM()
return x==null?0:x},
aBw(d,e){return d>=0&&e>=0&&d<this.gcZ(0)&&e<this.gb5(0)},
nV(d,e,f,g){var x=this.a
x=x==null?null:x.nV(d,e,f,g)
if(x==null)x=new A.xJ(new Uint8Array(0))
return x},
el(d,e,f){var x=this.a
x=x==null?null:x.el(d,e,f)
return x==null?new A.fm():x},
nW(d,e){return this.el(d,e,null)},
kz(d,e){if(d<0||d>=this.gcZ(0)||e<0||e>=this.gb5(0))return new A.fm()
return this.el(d,e,null)},
aI7(d,e,f){switch(f.a){case 0:return this.kz(D.d.D(d),D.d.D(e))
case 1:case 3:return this.aI8(d,e)
case 2:return this.aI6(d,e)}},
aI8(d,e){var x,w,v,u,t,s,r=this,q=D.d.D(d),p=q-(d>=0?0:1),o=p+1
q=D.d.D(e)
x=q-(e>=0?0:1)
w=x+1
q=new A.bgy(d-p,e-x)
v=r.kz(p,x)
u=w>=r.gb5(0)?v:r.kz(p,w)
t=o>=r.gcZ(0)?v:r.kz(o,x)
s=o>=r.gcZ(0)||w>=r.gb5(0)?v:r.kz(o,w)
return r.nV(q.$4(v.gaw(v),t.gaw(t),u.gaw(u),s.gaw(s)),q.$4(v.gaK(),t.gaK(),u.gaK(),s.gaK()),q.$4(v.gaM(v),t.gaM(t),u.gaM(u),s.gaM(s)),q.$4(v.gaN(v),t.gaN(t),u.gaN(u),s.gaN(s)))},
aI6(d0,d1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=D.d.D(d0),c6=c5-(d0>=0?0:1),c7=c6-1,c8=c6+1,c9=c6+2
c5=D.d.D(d1)
x=c5-(d1>=0?0:1)
w=x-1
v=x+1
u=x+2
t=d0-c6
s=d1-x
c5=new A.bgx()
r=c4.kz(c6,x)
q=c7<0
p=!q
o=!p||w<0?r:c4.kz(c7,w)
n=q?r:c4.kz(c6,w)
m=w<0
l=m||c8>=c4.gcZ(0)?r:c4.kz(c8,w)
k=c9>=c4.gcZ(0)||m?r:c4.kz(c9,w)
j=c5.$5(t,o.gaw(o),n.gaw(n),l.gaw(l),k.gaw(k))
i=c5.$5(t,o.gaK(),n.gaK(),l.gaK(),k.gaK())
h=c5.$5(t,o.gaM(o),n.gaM(n),l.gaM(l),k.gaM(k))
g=c5.$5(t,o.gaN(o),n.gaN(n),l.gaN(l),k.gaN(k))
f=q?r:c4.kz(c7,x)
e=c8>=c4.gcZ(0)?r:c4.kz(c8,x)
d=c9>=c4.gcZ(0)?r:c4.kz(c9,x)
a0=c5.$5(t,f.gaw(f),r.gaw(r),e.gaw(e),d.gaw(d))
a1=c5.$5(t,f.gaK(),r.gaK(),e.gaK(),d.gaK())
a2=c5.$5(t,f.gaM(f),r.gaM(r),e.gaM(e),d.gaM(d))
a3=c5.$5(t,f.gaN(f),r.gaN(r),e.gaN(e),d.gaN(d))
a4=!p||v>=c4.gb5(0)?r:c4.kz(c7,v)
a5=v>=c4.gb5(0)?r:c4.kz(c6,v)
a6=c8>=c4.gcZ(0)||v>=c4.gb5(0)?r:c4.kz(c8,v)
a7=c9>=c4.gcZ(0)||v>=c4.gb5(0)?r:c4.kz(c9,v)
a8=c5.$5(t,a4.gaw(a4),a5.gaw(a5),a6.gaw(a6),a7.gaw(a7))
a9=c5.$5(t,a4.gaK(),a5.gaK(),a6.gaK(),a7.gaK())
b0=c5.$5(t,a4.gaM(a4),a5.gaM(a5),a6.gaM(a6),a7.gaM(a7))
b1=c5.$5(t,a4.gaN(a4),a5.gaN(a5),a6.gaN(a6),a7.gaN(a7))
b2=!p||u>=c4.gb5(0)?r:c4.kz(c7,u)
b3=u>=c4.gb5(0)?r:c4.kz(c6,u)
b4=c8>=c4.gcZ(0)||u>=c4.gb5(0)?r:c4.kz(c8,u)
b5=c9>=c4.gcZ(0)||u>=c4.gb5(0)?r:c4.kz(c9,u)
b6=c5.$5(t,b2.gaw(b2),b3.gaw(b3),b4.gaw(b4),b5.gaw(b5))
b7=c5.$5(t,b2.gaK(),b3.gaK(),b4.gaK(),b5.gaK())
b8=c5.$5(t,b2.gaM(b2),b3.gaM(b3),b4.gaM(b4),b5.gaM(b5))
b9=c5.$5(t,b2.gaN(b2),b3.gaN(b3),b4.gaN(b4),b5.gaN(b5))
c0=c5.$5(s,j,a0,a8,b6)
c1=c5.$5(s,i,a1,a9,b7)
c2=c5.$5(s,h,a2,b0,b8)
c3=c5.$5(s,g,a3,b1,b9)
return c4.nV(D.d.D(c0),D.d.D(c1),D.d.D(c2),D.d.D(c3))},
y3(d,e,f){var x
if(y.c0.b(f))if(f.gfo(f).geW()!=null)if(this.grm()){x=this.a
if(x!=null)x.fe(d,e,f.gef(f),0,0)
return}x=this.a
if(x!=null)x.kB(d,e,f.gaw(f),f.gaK(),f.gaM(f),f.gaN(f))},
gcg(){var x=this.a
x=x==null?null:x.gcg()
return x==null?0:x},
nt(d,e){var x=this.a
return x==null?null:x.nt(0,e)},
S(d){return this.nt(0,null)},
axZ(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
if(a5==null)a5=a2.gdv()
if(a6==null)a6=a2.gqb()
a4=C.XW.i(0,a5)
if(a5.a<3)a2.gdv()
x=!1
if(a5===a2.gdv())if(a6===a2.gqb()){w=a2.a
x=(w==null?a3:w.geW())==null}if(x)return A.BL(a2,!1,!1)
for(x=a2.gl0(),w=x.length,v=y.N,u=y.p,t=a3,s=0;s<x.length;x.length===w||(0,B.R)(x),++s,t=j){r=x[s]
q=r.a
p=q==null
o=p?a3:q.a
if(o==null)o=0
q=p?a3:q.b
if(q==null)q=0
p=r.e
p=p==null?a3:A.Zj(p)
n=r.c
if(n==null)n=a3
else{m=n.a
l=n.b
n=n.c
n=new A.a_u(m,l,new Uint8Array(n.subarray(0,B.qC(0,a3,n.length))))}m=r.w
l=r.r
k=A.hF(a3,p,a5,r.y,m,q,n,l,a6,a3,C.a7,o,!1)
q=r.d
k.d=q!=null?B.jf(q,v,v):a3
if(t!=null){t.nq(k)
j=t}else j=k
q=k.a
i=q==null?a3:q.geW()
q=k.a
q=q==null?a3:q.geW()
h=q==null?a3:q.gdv()
if(h==null)h=a5
q=r.a
if(i!=null){g=B.I(u,u)
f=q==null?a3:q.el(0,0,a3)
if(f==null)f=new A.fm()
for(q=k.a,q=q.ga1(q),e=a3,d=0;q.q();){a0=q.gL(q)
a1=A.cGL(D.d.h1(f.gix()*255),D.d.h1(f.gii()*255),D.d.h1(f.gir()*255),0)
if(g.a3(0,a1)){p=g.i(0,a1)
p.toString
a0.sef(0,p)}else{g.m(0,a1,d)
a0.sef(0,d)
e=A.pu(f,a4,h,a6,e)
i.pk(d,e.gaw(e),e.gaK(),e.gaM(e));++d}f.q()}}else{f=q==null?a3:q.el(0,0,a3)
if(f==null)f=new A.fm()
for(q=k.a,q=q.ga1(q);q.q();){A.pu(f,a4,a3,a3,q.gL(q))
f.q()}}}t.toString
return t},
oa(d){return this.axZ(null,d,null)},
axY(d){return this.axZ(null,null,d)},
bqv(d){var x,w,v,u
if(this.d==null){x=y.N
this.d=B.I(x,x)}for(x=new B.ce(d,d.r,d.e,B.q(d).h("ce<1>"));x.q();){w=x.d
v=this.d
v.toString
u=d.i(0,w)
u.toString
v.m(0,w,u)}},
aYj(d,e,f){var x,w=65536
switch(e.a){case 0:return null
case 1:return null
case 2:return null
case 3:x=d===C.cc?w:256
return new A.uh(new Uint8Array(x*f),x,f)
case 4:x=d===C.cc?w:256
return new A.avm(new Uint16Array(x*f),x,f)
case 5:x=d===C.cc?w:256
return new A.a2b(new Uint32Array(x*f),x,f)
case 6:x=d===C.cc?w:256
return new A.avl(new Int8Array(x*f),x,f)
case 7:x=d===C.cc?w:256
return new A.avj(new Int16Array(x*f),x,f)
case 8:x=d===C.cc?w:256
return new A.avk(new Int32Array(x*f),x,f)
case 9:x=d===C.cc?w:256
return new A.avg(new Uint16Array(x*f),x,f)
case 10:x=d===C.cc?w:256
return new A.avh(new Float32Array(x*f),x,f)
case 11:x=d===C.cc?w:256
return new A.avi(new Float64Array(x*f),x,f)}}}
A.lQ.prototype={
geW(){return null}}
A.OL.prototype={
qY(d,e){var x=this,w=x.d
if(e)w=new Uint16Array(w.length)
else w=new Uint16Array(B.bU(w))
return new A.OL(w,x.a,x.b,x.c)},
gdv(){return C.hK},
gag(d){return D.dP.gag(this.d)},
gmM(){return 16},
grJ(){return this.a*this.c*2},
ga1(d){return A.co2(this)},
qq(d,e,f,g,h){return A.ui(A.co2(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcg(){return 1},
grs(){return!0},
nV(d,e,f,g){var x=new Uint16Array(4),w=new A.MO(x)
x[0]=A.fN(d)
x[1]=A.fN(e)
x[2]=A.fN(f)
x[3]=A.fN(g)
x=w
return x},
el(d,e,f){if(f==null||!(f instanceof A.Ih)||f.d!==this)f=A.co2(this)
f.ho(0,d,e)
return f},
nW(d,e){return this.el(d,e,null)},
mz(d,e,f){var x=this.c,w=this.d,v=A.fN(f)
w.$flags&2&&B.B(w)
w[e*this.a*x+d*x]=v},
fe(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=A.fN(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=A.fN(g)
if(x>2)v[w+2]=A.fN(h)}},
kB(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=A.fN(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=A.fN(g)
if(x>2){v[w+2]=A.fN(h)
if(x>3)v[w+3]=A.fN(i)}}},
j(d){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
nt(d,e){}}
A.OM.prototype={
qY(d,e){var x=this,w=x.d
if(e)w=new Float32Array(w.length)
else w=new Float32Array(B.bU(w))
return new A.OM(w,x.a,x.b,x.c)},
gdv(){return C.j6},
gag(d){return D.eX.gag(this.d)},
gmM(){return 32},
ga1(d){return A.co3(this)},
qq(d,e,f,g,h){return A.ui(A.co3(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcg(){return 1},
grJ(){return this.a*this.c*4},
grs(){return!0},
nV(d,e,f,g){var x=new Float32Array(4),w=new A.MP(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
el(d,e,f){if(f==null||!(f instanceof A.Ii)||f.d!==this)f=A.co3(this)
f.ho(0,d,e)
return f},
nW(d,e){return this.el(d,e,null)},
mz(d,e,f){var x=this.c,w=this.d
w.$flags&2&&B.B(w)
w[e*this.a*x+d*x]=f},
fe(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.B(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
kB(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.B(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
nt(d,e){}}
A.a_y.prototype={
qY(d,e){var x=this,w=x.d
if(e)w=new Float64Array(w.length)
else w=new Float64Array(B.bU(w))
return new A.a_y(w,x.a,x.b,x.c)},
gdv(){return C.kD},
gag(d){return D.e7.gag(this.d)},
gu(d){return this.d.byteLength},
gmM(){return 64},
ga1(d){return A.co4(this)},
qq(d,e,f,g,h){return A.ui(A.co4(this),e,f,g,h)},
gcg(){return 1},
grJ(){return this.a*this.c*8},
grs(){return!0},
nV(d,e,f,g){var x=new Float64Array(4),w=new A.MQ(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
el(d,e,f){if(f==null||!(f instanceof A.Ij)||f.d!==this)f=A.co4(this)
f.ho(0,d,e)
return f},
nW(d,e){return this.el(d,e,null)},
mz(d,e,f){var x=this.c,w=this.d
w.$flags&2&&B.B(w)
w[e*this.a*x+d*x]=f},
fe(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.B(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
kB(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.B(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
nt(d,e){}}
A.a_z.prototype={
qY(d,e){var x=this,w=x.d
if(e)w=new Int16Array(w.length)
else w=new Int16Array(B.bU(w))
return new A.a_z(w,x.a,x.b,x.c)},
gdv(){return C.kF},
gag(d){return D.jv.gag(this.d)},
ga1(d){return A.co5(this)},
qq(d,e,f,g,h){return A.ui(A.co5(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcg(){return 32767},
grs(){return!0},
gmM(){return 16},
grJ(){return this.a*this.c*2},
nV(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Int16Array(4),s=new A.MR(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
el(d,e,f){if(f==null||!(f instanceof A.Ik)||f.d!==this)f=A.co5(this)
f.ho(0,d,e)
return f},
nW(d,e){return this.el(d,e,null)},
mz(d,e,f){var x=this.c,w=this.d,v=D.d.D(f)
w.$flags&2&&B.B(w)
w[e*this.a*x+d*x]=v},
fe(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
kB(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
j(d){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
nt(d,e){}}
A.a_A.prototype={
qY(d,e){var x=this,w=x.d
if(e)w=new Int32Array(w.length)
else w=new Int32Array(B.bU(w))
return new A.a_A(w,x.a,x.b,x.c)},
gdv(){return C.kG},
gag(d){return D.cj.gag(this.d)},
gmM(){return 32},
grJ(){return this.a*this.c*4},
ga1(d){return A.co6(this)},
qq(d,e,f,g,h){return A.ui(A.co6(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcg(){return 2147483647},
grs(){return!0},
nV(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Int32Array(4),s=new A.MS(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
el(d,e,f){if(f==null||!(f instanceof A.Il)||f.d!==this)f=A.co6(this)
f.ho(0,d,e)
return f},
nW(d,e){return this.el(d,e,null)},
mz(d,e,f){var x=this.c,w=this.d,v=D.d.D(f)
w.$flags&2&&B.B(w)
w[e*this.a*x+d*x]=v},
fe(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
kB(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
j(d){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
nt(d,e){}}
A.a_B.prototype={
qY(d,e){var x=this,w=x.d
if(e)w=new Int8Array(w.length)
else w=new Int8Array(B.bU(w))
return new A.a_B(w,x.a,x.b,x.c)},
gdv(){return C.kE},
gag(d){return D.jw.gag(this.d)},
grJ(){return this.a*this.c},
ga1(d){return A.co7(this)},
qq(d,e,f,g,h){return A.ui(A.co7(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcg(){return 127},
grs(){return!0},
gmM(){return 8},
nV(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Int8Array(4),s=new A.MT(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
el(d,e,f){if(f==null||!(f instanceof A.Im)||f.d!==this)f=A.co7(this)
f.ho(0,d,e)
return f},
nW(d,e){return this.el(d,e,null)},
mz(d,e,f){var x=this.c,w=this.d,v=D.d.D(f)
w.$flags&2&&B.B(w)
w[e*(this.a*x)+d*x]=v},
fe(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
kB(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
j(d){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
nt(d,e){}}
A.ON.prototype={
bLr(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.bb()
this.d=x},
qY(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bU(v))}x=w.f
x=x==null?null:x.dZ(0)
return new A.ON(v,w.e,x,w.a,w.b,w.c)},
gdv(){return C.ff},
gu(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gcg(){var x=this.f
x=x==null?null:x.gcg()
return x==null?1:x},
grs(){return!1},
gag(d){var x=this.d
x===$&&B.b()
return D.A.gag(x)},
gmM(){return 1},
ga1(d){return A.a2p(this)},
qq(d,e,f,g,h){return A.ui(A.a2p(this),e,f,g,h)},
nV(d,e,f,g){var x=new A.MW(4,0)
x.ik(D.d.D(d),D.d.D(e),D.d.D(f),D.d.D(g))
return x},
el(d,e,f){if(f==null||!(f instanceof A.In)||f.f!==this)f=A.a2p(this)
f.ho(0,d,e)
return f},
nW(d,e){return this.el(d,e,null)},
mz(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2p(w):x).ho(0,d,e)
w.r.kK(0,f)},
fe(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2p(w):x).ho(0,d,e)
w.r.kC(f,g,h)},
kB(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2p(w):x).ho(0,d,e)
w.r.ik(f,g,h,i)},
j(d){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
nt(d,e){},
grJ(){return this.e},
geW(){return this.f}}
A.OO.prototype={
qY(d,e){var x,w=this,v=w.d
if(e)v=new Uint16Array(v.length)
else v=new Uint16Array(B.bU(v))
x=w.e
x=x==null?null:x.dZ(0)
return new A.OO(v,x,w.a,w.b,w.c)},
gdv(){return C.cc},
gag(d){return D.dP.gag(this.d)},
gmM(){return 16},
gcg(){var x=this.e
x=x==null?null:x.gcg()
return x==null?65535:x},
grJ(){return this.a*this.c*2},
ga1(d){return A.co8(this)},
qq(d,e,f,g,h){return A.ui(A.co8(this),e,f,g,h)},
gu(d){return this.d.byteLength},
grs(){return!0},
nV(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Uint16Array(4),s=new A.MX(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
el(d,e,f){if(f==null||!(f instanceof A.Io)||f.d!==this)f=A.co8(this)
f.ho(0,d,e)
return f},
nW(d,e){return this.el(d,e,null)},
mz(d,e,f){var x=this.c,w=this.d,v=D.d.D(f)
w.$flags&2&&B.B(w)
w[e*this.a*x+d*x]=v},
fe(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
kB(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
j(d){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
nt(d,e){},
geW(){return this.e}}
A.OP.prototype={
bLs(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.bb()
this.d=x},
qY(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bU(v))}x=w.f
x=x==null?null:x.dZ(0)
return new A.OP(v,w.e,x,w.a,w.b,w.c)},
gdv(){return C.h3},
gmM(){return 2},
gag(d){var x=this.d
x===$&&B.b()
return D.A.gag(x)},
ga1(d){return A.a2q(this)},
qq(d,e,f,g,h){return A.ui(A.a2q(this),e,f,g,h)},
gu(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gcg(){var x=this.f
x=x==null?null:x.gcg()
return x==null?3:x},
grs(){return!1},
nV(d,e,f,g){var x=new A.MY(4,0)
x.ik(D.d.D(d),D.d.D(e),D.d.D(f),D.d.D(g))
return x},
el(d,e,f){if(f==null||!(f instanceof A.Ip)||f.f!==this)f=A.a2q(this)
f.ho(0,d,e)
return f},
nW(d,e){return this.el(d,e,null)},
mz(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2q(w):x).ho(0,d,e)
w.r.kL(0,f)},
fe(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2q(w):x).ho(0,d,e)
w.r.kC(f,g,h)},
kB(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2q(w):x).ho(0,d,e)
w.r.ik(f,g,h,i)},
j(d){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
nt(d,e){},
grJ(){return this.e},
geW(){return this.f}}
A.OQ.prototype={
qY(d,e){var x=this,w=x.d
if(e)w=new Uint32Array(w.length)
else w=new Uint32Array(B.bU(w))
return new A.OQ(w,x.a,x.b,x.c)},
gdv(){return C.j7},
gag(d){return D.bq.gag(this.d)},
grJ(){return this.a*this.c*4},
gmM(){return 32},
gcg(){return 4294967295},
ga1(d){return A.co9(this)},
qq(d,e,f,g,h){return A.ui(A.co9(this),e,f,g,h)},
gu(d){return this.d.byteLength},
grs(){return!0},
nV(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new Uint32Array(4),s=new A.MZ(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
el(d,e,f){if(f==null||!(f instanceof A.Iq)||f.d!==this)f=A.co9(this)
f.ho(0,d,e)
return f},
nW(d,e){return this.el(d,e,null)},
mz(d,e,f){var x=this.c,w=this.d,v=D.d.D(f)
w.$flags&2&&B.B(w)
w[e*this.a*x+d*x]=v},
fe(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
kB(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
j(d){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
nt(d,e){}}
A.OR.prototype={
bLt(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.bb()
this.d=x},
qY(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bU(v))}x=w.f
x=x==null?null:x.dZ(0)
return new A.OR(v,w.e,x,w.a,w.b,w.c)},
gdv(){return C.h4},
gag(d){var x=this.d
x===$&&B.b()
return D.A.gag(x)},
ga1(d){return A.a2r(this)},
qq(d,e,f,g,h){return A.ui(A.a2r(this),e,f,g,h)},
gu(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gcg(){var x=this.f
x=x==null?null:x.gcg()
return x==null?15:x},
grs(){return!1},
gmM(){return 4},
nV(d,e,f,g){var x=D.d.D(d),w=D.d.D(e),v=D.d.D(f),u=D.d.D(g),t=new A.N_(4,new Uint8Array(2))
t.ik(x,w,v,u)
x=t
return x},
el(d,e,f){if(f==null||!(f instanceof A.Ir)||f.e!==this)f=A.a2r(this)
f.ho(0,d,e)
return f},
nW(d,e){return this.el(d,e,null)},
mz(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2r(w):x).ho(0,d,e)
w.r.kM(0,f)},
fe(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2r(w):x).ho(0,d,e)
w.r.kC(f,g,h)},
kB(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a2r(w):x).ho(0,d,e)
w.r.ik(f,g,h,i)},
j(d){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
nt(d,e){},
grJ(){return this.e},
geW(){return this.f}}
A.OS.prototype={
qY(d,e){var x,w=this,v=w.d
if(e)v=new Uint8Array(v.length)
else v=new Uint8Array(B.bU(v))
x=w.e
x=x==null?null:x.dZ(0)
return new A.OS(v,x,w.a,w.b,w.c)},
gdv(){return C.a7},
gag(d){return D.A.gag(this.d)},
grJ(){return this.a*this.c},
gmM(){return 8},
ga1(d){return A.bqD(this)},
qq(d,e,f,g,h){return A.ui(A.bqD(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcg(){var x=this.e
x=x==null?null:x.gcg()
return x==null?255:x},
grs(){return!1},
nV(d,e,f,g){var x=A.cOX(D.d.D(D.d.bc(d,0,255)),D.d.D(D.d.bc(e,0,255)),D.d.D(D.d.bc(f,0,255)),D.d.D(D.d.bc(g,0,255)))
return x},
el(d,e,f){if(f==null||!(f instanceof A.Is)||f.d!==this)f=A.bqD(this)
f.ho(0,d,e)
return f},
nW(d,e){return this.el(d,e,null)},
mz(d,e,f){var x=this.c,w=this.d,v=D.d.D(f)
w.$flags&2&&B.B(w)
w[e*(this.a*x)+d*x]=v},
fe(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2)v[w+2]=D.d.D(h)}},
kB(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.D(f)
v.$flags&2&&B.B(v)
v[w]=u
if(x>1){v[w+1]=D.d.D(g)
if(x>2){v[w+2]=D.d.D(h)
if(x>3)v[w+3]=D.d.D(i)}}},
j(d){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
nt(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=e==null?l:A.pu(e,l,C.a7,l,l),j=m.c
if(j===1){x=k==null?0:D.c.bc(B.ba(k.gaw(k)),0,255)
j=m.d
D.A.kZ(j,0,j.length,x)}else if(j===2){j=k==null
x=j?0:D.c.bc(B.ba(k.gaw(k)),0,255)
w=j?0:D.c.bc(B.ba(k.gaK()),0,255)
v=J.clr(D.A.gag(m.d),0,null)
D.dP.kZ(v,0,v.length,(w<<8|x)>>>0)}else if(j===4){j=k==null
x=j?0:D.c.bc(B.ba(k.gaw(k)),0,255)
w=j?0:D.c.bc(B.ba(k.gaK()),0,255)
u=j?0:D.c.bc(B.ba(k.gaM(k)),0,255)
t=j?0:D.c.bc(B.ba(k.gaN(k)),0,255)
s=J.oo(D.A.gag(m.d),0,null)
D.bq.kZ(s,0,s.length,(t<<24|u<<16|w<<8|x)>>>0)}else{j=k==null
x=j?0:D.c.bc(B.ba(k.gaw(k)),0,255)
w=j?0:D.c.bc(B.ba(k.gaK()),0,255)
u=j?0:D.c.bc(B.ba(k.gaM(k)),0,255)
for(r=A.bqD(m),j=r.d,q=j.c>0,j=j.d,p=j.$flags|0;r.q();){if(q){o=r.c
n=D.d.D(D.c.bc(x,0,255))
p&2&&B.B(j)
j[o]=n}r.saK(w)
r.saM(0,u)}}},
geW(){return this.e}}
A.aqP.prototype={
J(){return"Interpolation."+this.b}}
A.bqn.prototype={}
A.avg.prototype={
dZ(d){return new A.avg(new Uint16Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.dP.gag(this.c)},
gdv(){return C.hK},
gcg(){return 1},
fk(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=A.fN(g)
x.$flags&2&&B.B(x)
x[e*v+f]=w}},
pk(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=A.fN(e)
x.$flags&2&&B.B(x)
x[d]=w
if(v>1){x[d+1]=A.fN(f)
if(v>2)x[d+2]=A.fN(g)}},
pd(d,e,f){var x,w=this.b
if(f<w){w=this.c[e*w+f]
x=$.hE
w=(x!=null?x:A.iz())[w]}else w=0
return w},
na(d){var x=this.c[d*this.b],w=$.hE
return(w!=null?w:A.iz())[x]},
n8(d){var x,w=this.b
if(w<2)return 0
w=this.c[d*w+1]
x=$.hE
return(x!=null?x:A.iz())[w]},
n7(d){var x,w=this.b
if(w<3)return 0
w=this.c[d*w+2]
x=$.hE
return(x!=null?x:A.iz())[w]},
ou(d){var x,w=this.b
if(w<4)return 0
w=this.c[d*w+3]
x=$.hE
return(x!=null?x:A.iz())[w]},
uh(d,e){return this.fk(0,d,0,e)},
uf(d,e){return this.fk(0,d,1,e)},
ue(d,e){return this.fk(0,d,2,e)},
ud(d,e){return this.fk(0,d,3,e)}}
A.avh.prototype={
dZ(d){return new A.avh(new Float32Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.eX.gag(this.c)},
gdv(){return C.j6},
gcg(){return 1},
fk(d,e,f,g){var x,w=this.b
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
pd(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
na(d){return this.c[d*this.b]},
n8(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
n7(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
ou(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uh(d,e){return this.fk(0,d,0,e)},
uf(d,e){return this.fk(0,d,1,e)},
ue(d,e){return this.fk(0,d,2,e)},
ud(d,e){return this.fk(0,d,3,e)}}
A.avi.prototype={
dZ(d){return new A.avi(new Float64Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.e7.gag(this.c)},
gdv(){return C.kD},
gcg(){return 1},
fk(d,e,f,g){var x,w=this.b
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
pd(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
na(d){return this.c[d*this.b]},
n8(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
n7(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
ou(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uh(d,e){return this.fk(0,d,0,e)},
uf(d,e){return this.fk(0,d,1,e)},
ue(d,e){return this.fk(0,d,2,e)},
ud(d,e){return this.fk(0,d,3,e)}}
A.avj.prototype={
dZ(d){return new A.avj(new Int16Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.jv.gag(this.c)},
gdv(){return C.kF},
gcg(){return 32767},
fk(d,e,f,g){var x,w,v=this.b
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
pd(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
na(d){return this.c[d*this.b]},
n8(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
n7(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
ou(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uh(d,e){return this.fk(0,d,0,e)},
uf(d,e){return this.fk(0,d,1,e)},
ue(d,e){return this.fk(0,d,2,e)},
ud(d,e){return this.fk(0,d,3,e)}}
A.avk.prototype={
dZ(d){return new A.avk(new Int32Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.cj.gag(this.c)},
gdv(){return C.kG},
gcg(){return 2147483647},
fk(d,e,f,g){var x,w,v=this.b
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
pd(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
na(d){return this.c[d*this.b]},
n8(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
n7(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
ou(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uh(d,e){return this.fk(0,d,0,e)},
uf(d,e){return this.fk(0,d,1,e)},
ue(d,e){return this.fk(0,d,2,e)},
ud(d,e){return this.fk(0,d,3,e)}}
A.avl.prototype={
dZ(d){return new A.avl(new Int8Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.jw.gag(this.c)},
gdv(){return C.kE},
gcg(){return 127},
fk(d,e,f,g){var x,w,v=this.b
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
pd(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
na(d){return this.c[d*this.b]},
n8(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
n7(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
ou(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uh(d,e){return this.fk(0,d,0,e)},
uf(d,e){return this.fk(0,d,1,e)},
ue(d,e){return this.fk(0,d,2,e)},
ud(d,e){return this.fk(0,d,3,e)}}
A.avm.prototype={
dZ(d){return new A.avm(new Uint16Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.dP.gag(this.c)},
gdv(){return C.cc},
gcg(){return 65535},
fk(d,e,f,g){var x,w,v=this.b
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
pd(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
na(d){return this.c[d*this.b]},
n8(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
n7(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
ou(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uh(d,e){return this.fk(0,d,0,e)},
uf(d,e){return this.fk(0,d,1,e)},
ue(d,e){return this.fk(0,d,2,e)},
ud(d,e){return this.fk(0,d,3,e)}}
A.a2b.prototype={
dZ(d){return new A.a2b(new Uint32Array(B.bU(this.c)),this.a,this.b)},
gag(d){return D.bq.gag(this.c)},
gdv(){return C.j7},
gcg(){return 4294967295},
fk(d,e,f,g){var x,w,v=this.b
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
pd(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
na(d){return this.c[d*this.b]},
n8(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
n7(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
ou(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uh(d,e){return this.fk(0,d,0,e)},
uf(d,e){return this.fk(0,d,1,e)},
ue(d,e){return this.fk(0,d,2,e)},
ud(d,e){return this.fk(0,d,3,e)}}
A.uh.prototype={
dZ(d){return A.cyX(this)},
gag(d){return D.A.gag(this.c)},
gdv(){return C.a7},
gcg(){return 255},
fk(d,e,f,g){var x,w,v=this.b
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
RN(d,e,f,g,h){var x,w,v=this.b
d*=v
x=this.c
w=D.c.D(e)
x.$flags&2&&B.B(x)
x[d]=w
if(v>1){x[d+1]=D.c.D(f)
if(v>2){x[d+2]=D.c.D(g)
if(v>3)x[d+3]=D.c.D(h)}}},
pd(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
na(d){var x
d*=this.b
x=this.c
if(d>=x.length)return 0
return x[d]},
n8(d){var x=this.b
if(x<2)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+1]},
n7(d){var x=this.b
if(x<3)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+2]},
ou(d){var x=this.b
if(x<4)return 255
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+3]},
uh(d,e){return this.fk(0,d,0,e)},
uf(d,e){return this.fk(0,d,1,e)},
ue(d,e){return this.fk(0,d,2,e)},
ud(d,e){return this.fk(0,d,3,e)}}
A.Ih.prototype={
dZ(d){var x=this
return new A.Ih(x.a,x.b,x.c,x.d)},
gdv(){return C.hK},
gu(d){return this.d.c},
geW(){return null},
gcg(){return 1},
gn6(d){return this.a},
gnU(d){return this.b},
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
x=$.hE
w=(x!=null?x:A.iz())[w]}else w=0
return w},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=A.fN(f)
v.$flags&2&&B.B(v)
v[x+e]=w}},
gef(d){return this.gaw(0)},
sef(d,e){this.saw(0,e)},
gaw(d){var x,w=this.d
if(w.c>0){w=w.d[this.c]
x=$.hE
w=(x!=null?x:A.iz())[w]}else w=0
return w},
saw(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=A.fN(e)
v.$flags&2&&B.B(v)
v[x]=w}},
gaK(){var x,w=this.d
if(w.c>1){w=w.d[this.c+1]
x=$.hE
w=(x!=null?x:A.iz())[w]}else w=0
return w},
saK(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=A.fN(d)
v.$flags&2&&B.B(v)
v[x+1]=w}},
gaM(d){var x,w=this.d
if(w.c>2){w=w.d[this.c+2]
x=$.hE
w=(x!=null?x:A.iz())[w]}else w=0
return w},
saM(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=A.fN(e)
v.$flags&2&&B.B(v)
v[x+2]=w}},
gaN(d){var x,w=this.d
if(w.c>3){w=w.d[this.c+3]
x=$.hE
w=(x!=null?x:A.iz())[w]}else w=0
return w},
saN(d,e){var x,w,v,u=this.d
if(u.c>3){x=this.gaK()
u=u.d
w=this.c
v=A.fN(x)
u.$flags&2&&B.B(u)
u[w+3]=v}},
gix(){return this.gaw(0)/1},
six(d){this.saw(0,d)},
gii(){return this.gaK()/1},
sii(d){this.saK(d)},
gir(){return this.gaM(0)/1},
sir(d){this.saM(0,d)},
giH(){return this.gaN(0)/1},
siH(d){this.saN(0,d)},
gjQ(){return A.jt(this)},
iX(d,e){var x=this
if(x.d.c>0){x.saw(0,e.gaw(e))
x.saK(e.gaK())
x.saM(0,e.gaM(e))
x.saN(0,e.gaN(e))}},
kC(d,e,f){var x,w,v=this,u=v.d,t=u.c
if(t>0){u=u.d
x=v.c
w=A.fN(d)
u.$flags&2&&B.B(u)
u[x]=w
if(t>1){u[v.c+1]=A.fN(e)
if(t>2)u[v.c+2]=A.fN(f)}}},
ik(d,e,f,g){var x,w,v=this,u=v.d,t=u.c
if(t>0){u=u.d
x=v.c
w=A.fN(d)
u.$flags&2&&B.B(u)
u[x]=w
if(t>1){u[v.c+1]=A.fN(e)
if(t>2){u[v.c+2]=A.fN(f)
if(t>3)u[v.c+3]=A.fN(g)}}}},
ga1(d){return new A.hx(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Ih)return B.aM(B.H(u,!0,B.q(u).h("w.E")))===B.aM(B.H(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
oa(d){return A.pu(this,null,d,null,null)},
$ibo:1,
$idS:1,
$icM:1,
gfo(d){return this.d}}
A.Ii.prototype={
dZ(d){var x=this
return new A.Ii(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geW(){return null},
gcg(){return 1},
gdv(){return C.j6},
gn6(d){return this.a},
gnU(d){return this.b},
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
gef(d){return this.gaw(0)},
sef(d,e){this.saw(0,e)},
gaw(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saw(d,e){var x,w=this.d
if(w.c>0){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x]=e}},
gaK(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saK(d){var x,w=this.d
if(w.c>1){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x+1]=d}},
gaM(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saM(d,e){var x,w=this.d
if(w.c>2){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x+2]=e}},
gaN(d){var x=this.d
return x.c>3?x.d[this.c+3]:1},
saN(d,e){var x,w=this.d
if(w.c>3){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x+3]=e}},
gix(){return this.gaw(0)/1},
six(d){this.saw(0,d)},
gii(){return this.gaK()/1},
sii(d){this.saK(d)},
gir(){return this.gaM(0)/1},
sir(d){this.saM(0,d)},
giH(){return this.gaN(0)/1},
siH(d){this.saN(0,d)},
gjQ(){return A.jt(this)},
iX(d,e){var x=this
x.saw(0,e.gaw(e))
x.saK(e.gaK())
x.saM(0,e.gaM(e))
x.saN(0,e.gaN(e))},
kC(d,e,f){var x=this.d,w=x.d,v=this.c
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
ga1(d){return new A.hx(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Ii)return B.aM(B.H(u,!0,B.q(u).h("w.E")))===B.aM(B.H(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
oa(d){return A.pu(this,null,d,null,null)},
$ibo:1,
$idS:1,
$icM:1,
gfo(d){return this.d}}
A.Ij.prototype={
dZ(d){var x=this
return new A.Ij(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geW(){return null},
gcg(){return 1},
gdv(){return C.kD},
gn6(d){return this.a},
gnU(d){return this.b},
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
gef(d){return this.gaw(0)},
sef(d,e){this.saw(0,e)},
gaw(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saw(d,e){var x,w=this.d
if(w.c>0){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x]=e}},
gaK(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saK(d){var x,w=this.d
if(w.c>1){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x+1]=d}},
gaM(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saM(d,e){var x,w=this.d
if(w.c>2){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x+2]=e}},
gaN(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saN(d,e){var x,w=this.d
if(w.c>3){w=w.d
x=this.c
w.$flags&2&&B.B(w)
w[x+3]=e}},
gix(){return this.gaw(0)/1},
six(d){this.saw(0,d)},
gii(){return this.gaK()/1},
sii(d){this.saK(d)},
gir(){return this.gaM(0)/1},
sir(d){this.saM(0,d)},
giH(){return this.gaN(0)/1},
siH(d){this.saN(0,d)},
gjQ(){return A.jt(this)},
iX(d,e){var x=this
x.saw(0,e.gaw(e))
x.saK(e.gaK())
x.saM(0,e.gaM(e))
x.saN(0,e.gaN(e))},
kC(d,e,f){var x=this.d,w=x.d,v=this.c
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
ga1(d){return new A.hx(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Ij)return B.aM(B.H(u,!0,B.q(u).h("w.E")))===B.aM(B.H(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
oa(d){return A.pu(this,null,d,null,null)},
$ibo:1,
$idS:1,
$icM:1,
gfo(d){return this.d}}
A.Ik.prototype={
dZ(d){var x=this
return new A.Ik(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geW(){return null},
gcg(){return 32767},
gdv(){return C.kF},
gn6(d){return this.a},
gnU(d){return this.b},
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
gef(d){return this.gaw(0)},
sef(d,e){this.saw(0,e)},
gaw(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saw(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x]=w}},
gaK(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saK(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.D(d)
v.$flags&2&&B.B(v)
v[x+1]=w}},
gaM(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saM(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x+2]=w}},
gaN(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saN(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x+3]=w}},
gix(){return this.gaw(0)/32767},
six(d){this.saw(0,d*32767)},
gii(){return this.gaK()/32767},
sii(d){this.saK(d*32767)},
gir(){return this.gaM(0)/32767},
sir(d){this.saM(0,d*32767)},
giH(){return this.gaN(0)/32767},
siH(d){this.saN(0,d*32767)},
gjQ(){return A.jt(this)},
iX(d,e){var x=this
x.saw(0,e.gaw(e))
x.saK(e.gaK())
x.saM(0,e.gaM(e))
x.saN(0,e.gaN(e))},
kC(d,e,f){var x,w,v=this.d,u=v.c
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
ga1(d){return new A.hx(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Ik)return B.aM(B.H(u,!0,B.q(u).h("w.E")))===B.aM(B.H(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
oa(d){return A.pu(this,null,d,null,null)},
$ibo:1,
$idS:1,
$icM:1,
gfo(d){return this.d}}
A.Il.prototype={
dZ(d){var x=this
return new A.Il(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geW(){return null},
gcg(){return 2147483647},
gdv(){return C.kG},
gn6(d){return this.a},
gnU(d){return this.b},
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
gef(d){return this.gaw(0)},
sef(d,e){this.saw(0,e)},
gaw(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saw(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x]=w}},
gaK(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saK(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.D(d)
v.$flags&2&&B.B(v)
v[x+1]=w}},
gaM(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saM(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x+2]=w}},
gaN(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saN(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x+3]=w}},
gix(){return this.gaw(0)/2147483647},
six(d){this.saw(0,d*2147483647)},
gii(){return this.gaK()/2147483647},
sii(d){this.saK(d*2147483647)},
gir(){return this.gaM(0)/2147483647},
sir(d){this.saM(0,d*2147483647)},
giH(){return this.gaN(0)/2147483647},
siH(d){this.saN(0,d*2147483647)},
gjQ(){return A.jt(this)},
iX(d,e){var x=this
x.saw(0,e.gaw(e))
x.saK(e.gaK())
x.saM(0,e.gaM(e))
x.saN(0,e.gaN(e))},
kC(d,e,f){var x,w,v=this.d,u=v.c
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
ga1(d){return new A.hx(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Il)return B.aM(B.H(u,!0,B.q(u).h("w.E")))===B.aM(B.H(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
oa(d){return A.pu(this,null,d,null,null)},
$ibo:1,
$idS:1,
$icM:1,
gfo(d){return this.d}}
A.Im.prototype={
dZ(d){var x=this
return new A.Im(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geW(){return null},
gcg(){return 127},
gdv(){return C.kE},
gn6(d){return this.a},
gnU(d){return this.b},
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
gef(d){return this.gaw(0)},
sef(d,e){this.saw(0,e)},
gaw(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saw(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x]=w}},
gaK(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saK(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.D(d)
v.$flags&2&&B.B(v)
v[x+1]=w}},
gaM(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saM(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x+2]=w}},
gaN(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saN(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x+3]=w}},
gix(){return this.gaw(0)/127},
six(d){this.saw(0,d*127)},
gii(){return this.gaK()/127},
sii(d){this.saK(d*127)},
gir(){return this.gaM(0)/127},
sir(d){this.saM(0,d*127)},
giH(){return this.gaN(0)/127},
siH(d){this.saN(0,d*127)},
gjQ(){return A.jt(this)},
iX(d,e){var x=this
x.saw(0,e.gaw(e))
x.saK(e.gaK())
x.saM(0,e.gaM(e))
x.saN(0,e.gaN(e))},
kC(d,e,f){var x,w,v=this.d,u=v.c
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
ga1(d){return new A.hx(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Im)return B.aM(B.H(u,!0,B.q(u).h("w.E")))===B.aM(B.H(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
oa(d){return A.pu(this,null,d,null,null)},
$ibo:1,
$idS:1,
$icM:1,
gfo(d){return this.d}}
A.avz.prototype={
q(){var x=this,w=x.a
if(w.gn6(w)+1>x.d){w.ho(0,x.b,w.gnU(w)+1)
return w.gnU(w)<=x.e}return w.q()},
gL(d){return this.a},
$ibo:1}
A.In.prototype={
dZ(d){var x=this
return new A.In(x.a,x.b,x.c,x.d,x.e,x.f)},
gu(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geW(){return this.f.f},
gcg(){return this.f.gcg()},
gdv(){return C.ff},
gn6(d){return this.a},
gnU(d){return this.b},
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
a5G(d,e){var x,w=this.c,v=7-(this.d+e)
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
if(w>=x.length)return 0
return D.c.fZ(x[w],v)&1},
px(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.a5G(0,d):0
else x=w.pd(0,this.a5G(0,0),d)
return x},
kK(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=7-(this.d+d)
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.bc(D.d.D(e),0,1)
s=C.av4[w]
v=D.c.eS(t,w)
r=r.d
r.$flags&2&&B.B(r)
r[x]=(u&s|v)>>>0},
i(d,e){return this.px(e)},
m(d,e,f){return this.kK(e,f)},
gef(d){return this.a5G(0,0)},
sef(d,e){this.kK(0,e)},
gaw(d){return this.px(0)},
saw(d,e){this.kK(0,e)},
gaK(){return this.px(1)},
saK(d){this.kK(1,d)},
gaM(d){return this.px(2)},
saM(d,e){this.kK(2,e)},
gaN(d){return this.px(3)},
saN(d,e){this.kK(3,e)},
gix(){return this.px(0)/this.f.gcg()},
six(d){this.kK(0,d*this.f.gcg())},
gii(){return this.px(1)/this.f.gcg()},
sii(d){this.kK(1,d*this.f.gcg())},
gir(){return this.px(2)/this.f.gcg()},
sir(d){this.kK(2,d*this.f.gcg())},
giH(){return this.px(3)/this.f.gcg()},
siH(d){this.kK(3,d*this.f.gcg())},
gjQ(){return A.jt(this)},
iX(d,e){var x=this
x.kK(0,e.gaw(e))
x.kK(1,e.gaK())
x.kK(2,e.gaM(e))
x.kK(3,e.gaN(e))},
kC(d,e,f){var x=this,w=x.f.c
if(w>0){x.kK(0,d)
if(w>1){x.kK(1,e)
if(w>2)x.kK(2,f)}}},
ik(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.kK(0,d)
if(w>1){x.kK(1,e)
if(w>2){x.kK(2,f)
if(w>3)x.kK(3,g)}}}},
ga1(d){return new A.hx(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.In)return B.aM(B.H(u,!0,B.q(u).h("w.E")))===B.aM(B.H(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.px(0)!==x.i(e,0))return!1
if(v>1){if(u.px(1)!==x.i(e,1))return!1
if(v>2){if(u.px(2)!==x.i(e,2))return!1
if(v>3)if(u.px(3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
oa(d){return A.pu(this,null,d,null,null)},
$ibo:1,
$idS:1,
$icM:1,
gfo(d){return this.f}}
A.Io.prototype={
dZ(d){var x=this
return new A.Io(x.a,x.b,x.c,x.d)},
gu(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
geW(){return this.d.e},
gcg(){return this.d.gcg()},
gdv(){return C.cc},
gn6(d){return this.a},
gnU(d){return this.b},
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
if(w!=null)x=w.pd(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
i(d,e){return this.i0(0,e)},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.d.D(f)
v.$flags&2&&B.B(v)
v[x+e]=w}},
gef(d){return this.gaw(0)},
sef(d,e){this.saw(0,e)},
gaw(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.na(x.d[this.c])
return x},
saw(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x]=w}},
gaK(){var x=this.d,w=x.e
if(w==null)x=x.c>1?x.d[this.c+1]:0
else x=w.n8(x.d[this.c])
return x},
saK(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.D(d)
v.$flags&2&&B.B(v)
v[x+1]=w}},
gaM(d){var x=this.d,w=x.e
if(w==null)x=x.c>2?x.d[this.c+2]:0
else x=w.n7(x.d[this.c])
return x},
saM(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x+2]=w}},
gaN(d){var x=this.d,w=x.e
if(w==null)x=x.c>3?x.d[this.c+3]:0
else x=w.ou(x.d[this.c])
return x},
saN(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x+3]=w}},
gix(){return this.gaw(0)/this.d.gcg()},
six(d){this.saw(0,d*this.d.gcg())},
gii(){return this.gaK()/this.d.gcg()},
sii(d){this.saK(d*this.d.gcg())},
gir(){return this.gaM(0)/this.d.gcg()},
sir(d){this.saM(0,d*this.d.gcg())},
giH(){return this.gaN(0)/this.d.gcg()},
siH(d){this.saN(0,d*this.d.gcg())},
gjQ(){return A.jt(this)},
iX(d,e){var x=this
x.saw(0,e.gaw(e))
x.saK(e.gaK())
x.saM(0,e.gaM(e))
x.saN(0,e.gaN(e))},
kC(d,e,f){var x,w,v=this.d,u=v.c
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
ga1(d){return new A.hx(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Io)return B.aM(B.H(u,!0,B.q(u).h("w.E")))===B.aM(B.H(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.i0(0,0)!==x.i(e,0))return!1
if(v>1){if(u.i0(0,1)!==x.i(e,1))return!1
if(v>2){if(u.i0(0,2)!==x.i(e,2))return!1
if(v>3)if(u.i0(0,3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
oa(d){return A.pu(this,null,d,null,null)},
$ibo:1,
$idS:1,
$icM:1,
gfo(d){return this.d}}
A.Ip.prototype={
dZ(d){var x=this
return new A.Ip(x.a,x.b,x.c,x.d,x.e,x.f)},
gu(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geW(){return this.f.f},
gcg(){return this.f.gcg()},
gdv(){return C.h3},
gawp(){var x=this.f
return x.f!=null?2:x.c<<1>>>0},
gn6(d){return this.a},
gnU(d){return this.b},
ho(d,e,f){var x,w,v,u=this
u.a=e
u.b=f
x=u.gawp()
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
if(x>7){v.d=0;++v.c}}else{w=v.gawp()
x=v.a*w
v.d=x&7
v.c=v.e+D.c.R(x,3)}x=v.c
u=u.d
u===$&&B.b()
return x<u.length},
a5H(d,e){var x,w=this.c,v=6-(this.d+(e<<1>>>0))
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
return D.c.fZ(x[w],v)&3},
py(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.a5H(0,d):0
else x=w.pd(0,this.a5H(0,0),d)
return x},
kL(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=6-(this.d+(d<<1>>>0))
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.bc(D.d.D(e),0,3)
s=C.apx[D.c.R(w,1)]
v=D.c.eS(t,w)
r=r.d
r.$flags&2&&B.B(r)
r[x]=(u&s|v)>>>0},
i(d,e){return this.py(e)},
m(d,e,f){return this.kL(e,f)},
gef(d){return this.a5H(0,0)},
sef(d,e){this.kL(0,e)},
gaw(d){return this.py(0)},
saw(d,e){this.kL(0,e)},
gaK(){return this.py(1)},
saK(d){this.kL(1,d)},
gaM(d){return this.py(2)},
saM(d,e){this.kL(2,e)},
gaN(d){return this.py(3)},
saN(d,e){this.kL(3,e)},
gix(){return this.py(0)/this.f.gcg()},
six(d){this.kL(0,d*this.f.gcg())},
gii(){return this.py(1)/this.f.gcg()},
sii(d){this.kL(1,d*this.f.gcg())},
gir(){return this.py(2)/this.f.gcg()},
sir(d){this.kL(2,d*this.f.gcg())},
giH(){return this.py(3)/this.f.gcg()},
siH(d){this.kL(3,d*this.f.gcg())},
gjQ(){return A.jt(this)},
iX(d,e){var x=this
x.kL(0,e.gaw(e))
x.kL(1,e.gaK())
x.kL(2,e.gaM(e))
x.kL(3,e.gaN(e))},
kC(d,e,f){var x=this,w=x.f.c
if(w>0){x.kL(0,d)
if(w>1){x.kL(1,e)
if(w>2)x.kL(2,f)}}},
ik(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.kL(0,d)
if(w>1){x.kL(1,e)
if(w>2){x.kL(2,f)
if(w>3)x.kL(3,g)}}}},
ga1(d){return new A.hx(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Ip)return B.aM(B.H(u,!0,B.q(u).h("w.E")))===B.aM(B.H(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.py(0)!==x.i(e,0))return!1
if(v>1){if(u.py(1)!==x.i(e,1))return!1
if(v>2){if(u.py(2)!==x.i(e,2))return!1
if(v>3)if(u.py(3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
oa(d){return A.pu(this,null,d,null,null)},
$ibo:1,
$idS:1,
$icM:1,
gfo(d){return this.f}}
A.Iq.prototype={
dZ(d){var x=this
return new A.Iq(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geW(){return null},
gcg(){return 4294967295},
gdv(){return C.j7},
gn6(d){return this.a},
gnU(d){return this.b},
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
gef(d){return this.gaw(0)},
sef(d,e){this.saw(0,e)},
gaw(d){var x=this.d
return x.c>0?x.d[this.c]:0},
saw(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x]=w}},
gaK(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saK(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.D(d)
v.$flags&2&&B.B(v)
v[x+1]=w}},
gaM(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saM(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x+2]=w}},
gaN(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saN(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.D(e)
v.$flags&2&&B.B(v)
v[x+3]=w}},
gix(){return this.gaw(0)/4294967295},
six(d){this.saw(0,d*4294967295)},
gii(){return this.gaK()/4294967295},
sii(d){this.saK(d*4294967295)},
gir(){return this.gaM(0)/4294967295},
sir(d){this.saM(0,d*4294967295)},
giH(){return this.gaN(0)/4294967295},
siH(d){this.saN(0,d*4294967295)},
gjQ(){return A.jt(this)},
iX(d,e){var x=this
x.saw(0,e.gaw(e))
x.saK(e.gaK())
x.saM(0,e.gaM(e))
x.saN(0,e.gaN(e))},
kC(d,e,f){var x,w,v=this.d,u=v.c
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
ga1(d){return new A.hx(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Iq)return B.aM(B.H(u,!0,B.q(u).h("w.E")))===B.aM(B.H(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.i(e,0))return!1
if(v>1){if(w[u.c+1]!==x.i(e,1))return!1
if(v>2){if(w[u.c+2]!==x.i(e,2))return!1
if(v>3)if(w[u.c+3]!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
oa(d){return A.pu(this,null,d,null,null)},
$ibo:1,
$idS:1,
$icM:1,
gfo(d){return this.d}}
A.Ir.prototype={
dZ(d){var x=this
return new A.Ir(x.a,x.b,x.c,x.d,x.e)},
gu(d){var x=this.e,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geW(){return this.e.f},
gcg(){return this.e.gcg()},
gdv(){return C.h4},
gn6(d){return this.a},
gnU(d){return this.b},
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
a5I(d,e){var x,w=this.c,v=4-(this.d+(e<<2>>>0))
if(v<0){v+=8;++w}x=this.e.d
x===$&&B.b()
return D.c.fZ(x[w],v)&15},
pv(d){var x=this.e,w=x.f
if(w==null)x=x.c>d?this.a5I(0,d):0
else x=w.pd(0,this.a5I(0,0),d)
return x},
kM(d,e){var x,w,v,u,t,s,r=this.e
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
m(d,e,f){return this.kM(e,f)},
gef(d){return this.a5I(0,0)},
sef(d,e){this.kM(0,e)},
gaw(d){return this.pv(0)},
saw(d,e){this.kM(0,e)},
gaK(){return this.pv(1)},
saK(d){this.kM(1,d)},
gaM(d){return this.pv(2)},
saM(d,e){this.kM(2,e)},
gaN(d){return this.pv(3)},
saN(d,e){this.kM(3,e)},
gix(){return this.pv(0)/this.e.gcg()},
six(d){this.kM(0,d*this.e.gcg())},
gii(){return this.pv(1)/this.e.gcg()},
sii(d){this.kM(1,d*this.e.gcg())},
gir(){return this.pv(2)/this.e.gcg()},
sir(d){this.kM(2,d*this.e.gcg())},
giH(){return this.pv(3)/this.e.gcg()},
siH(d){this.kM(3,d*this.e.gcg())},
gjQ(){return A.jt(this)},
iX(d,e){var x=this
x.kM(0,e.gaw(e))
x.kM(1,e.gaK())
x.kM(2,e.gaM(e))
x.kM(3,e.gaN(e))},
kC(d,e,f){var x=this,w=x.e.c
if(w>0){x.kM(0,d)
if(w>1){x.kM(1,e)
if(w>2)x.kM(2,f)}}},
ik(d,e,f,g){var x=this,w=x.e.c
if(w>0){x.kM(0,d)
if(w>1){x.kM(1,e)
if(w>2){x.kM(2,f)
if(w>3)x.kM(3,g)}}}},
ga1(d){return new A.hx(this)},
k(d,e){var x,w,v=this
if(e==null)return!1
if(e instanceof A.Ir)return B.aM(B.H(v,!0,B.q(v).h("w.E")))===B.aM(B.H(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=v.e.c
w=J.a2(e)
if(w.gu(e)!==x)return!1
if(v.pv(0)!==w.i(e,0))return!1
if(x>1){if(v.pv(1)!==w.i(e,1))return!1
if(x>2){if(v.pv(2)!==w.i(e,2))return!1
if(x>3)if(v.pv(3)!==w.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
oa(d){return A.pu(this,null,d,null,null)},
$ibo:1,
$idS:1,
$icM:1,
gfo(d){return this.e}}
A.Is.prototype={
dZ(d){var x=this
return new A.Is(x.a,x.b,x.c,x.d)},
gu(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
geW(){return this.d.e},
gcg(){return this.d.gcg()},
gdv(){return C.a7},
gn6(d){return this.a},
gnU(d){return this.b},
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
if(w!=null)x=w.pd(0,x.d[this.c],e)
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
gaw(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.na(x.d[this.c])
return x},
saw(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.D(D.d.bc(e,0,255))
v.$flags&2&&B.B(v)
v[x]=w}},
gaK(){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>1?w.d[x.c+1]:0}else w=v.n8(w.d[x.c])
return w},
saK(d){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.d.D(D.d.bc(d,0,255))
w.$flags&2&&B.B(w)
w[v]=x}else if(v>1){w=w.d
v=this.c
x=D.d.D(D.d.bc(d,0,255))
w.$flags&2&&B.B(w)
w[v+1]=x}},
gaM(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>2?w.d[x.c+2]:0}else w=v.n7(w.d[x.c])
return w},
saM(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.d.D(D.d.bc(e,0,255))
w.$flags&2&&B.B(w)
w[v]=x}else if(v>2){w=w.d
v=this.c
x=D.d.D(D.d.bc(e,0,255))
w.$flags&2&&B.B(w)
w[v+2]=x}},
gaN(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c+1]
else w=v>3?w.d[x.c+3]:255}else w=v.ou(w.d[x.c])
return w},
saN(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.d.D(D.d.bc(e,0,255))
w.$flags&2&&B.B(w)
w[v+1]=x}else if(v>3){w=w.d
v=this.c
x=D.d.D(D.d.bc(e,0,255))
w.$flags&2&&B.B(w)
w[v+3]=x}},
gix(){return this.gaw(0)/this.d.gcg()},
six(d){this.saw(0,d*this.d.gcg())},
gii(){return this.gaK()/this.d.gcg()},
sii(d){this.saK(d*this.d.gcg())},
gir(){return this.gaM(0)/this.d.gcg()},
sir(d){this.saM(0,d*this.d.gcg())},
giH(){return this.gaN(0)/this.d.gcg()},
siH(d){this.saN(0,d*this.d.gcg())},
gjQ(){return this.d.c===2?this.gaw(0):A.jt(this)},
iX(d,e){var x=this
if(x.d.e!=null)x.sef(0,e.gef(e))
else{x.saw(0,e.gaw(e))
x.saK(e.gaK())
x.saM(0,e.gaM(e))
x.saN(0,e.gaN(e))}},
kC(d,e,f){var x,w,v=this.d,u=v.c
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
ga1(d){return new A.hx(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Is)return B.aM(B.H(u,!0,B.q(u).h("w.E")))===B.aM(B.H(e,!0,B.q(e).h("w.E")))
if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.i0(0,0)!==x.i(e,0))return!1
if(v>1){if(u.i0(0,1)!==x.i(e,1))return!1
if(v>2){if(u.i0(0,2)!==x.i(e,2))return!1
if(v>3)if(u.i0(0,3)!==x.i(e,3))return!1}}return!0}return!1},
gv(d){return B.aM(B.H(this,!0,B.q(this).h("w.E")))},
oa(d){return A.pu(this,null,d,null,null)},
$ibo:1,
$idS:1,
$icM:1,
gfo(d){return this.d}}
A.fm.prototype={
dZ(d){return new A.fm()},
gfo(d){return $.cIG()},
gn6(d){return 0},
gnU(d){return 0},
gu(d){return 0},
gcg(){return 0},
gdv(){return C.a7},
geW(){return null},
i(d,e){return 0},
m(d,e,f){},
gef(d){return 0},
sef(d,e){},
gaw(d){return 0},
saw(d,e){},
gaK(){return 0},
saK(d){},
gaM(d){return 0},
saM(d,e){},
gaN(d){return 0},
saN(d,e){},
gix(){return 0},
six(d){},
gii(){return 0},
sii(d){},
gir(){return 0},
sir(d){},
giH(){return 0},
siH(d){},
gjQ(){return 0},
iX(d,e){},
kC(d,e,f){},
ik(d,e,f,g){},
ho(d,e,f){},
gL(d){return this},
q(){return!1},
k(d,e){if(e==null)return!1
return e instanceof A.fm},
gv(d){return 0},
ga1(d){return new A.hx(this)},
oa(d){return this},
$ibo:1,
$idS:1,
$icM:1}
A.baV.prototype={
J(){return"FlipDirection."+this.b}}
A.aqn.prototype={
j(d){return"ImageException: "+this.a},
$ib6:1}
A.lS.prototype={
gu(d){return this.c-this.d},
i(d,e){return J.v(this.a,this.d+e)},
m(d,e,f){J.bZ(this.a,this.d+e,f)
return f},
rB(d,e,f,g){var x=this.a,w=J.cS(x),v=this.d+d
if(f instanceof A.lS)w.dN(x,v,v+e,f.a,f.d+g)
else w.dN(x,v,v+e,y.L.a(f),g)},
A5(d,e,f){return this.rB(d,e,f,0)},
bDL(d,e,f){var x=this.a,w=this.d+d
J.tj(x,w,w+e,f)},
a1P(d,e,f){var x=this,w=f!=null?x.b+f:x.d
return A.cQ(x.a,x.e,d,w+e)},
jY(d){return this.a1P(d,0,null)},
B0(d,e){return this.a1P(d,0,e)},
Sd(d,e){return this.a1P(d,e,null)},
dM(d,e){var x=this.d,w=x+(this.c-x)
for(;x<w;++x)J.v(this.a,x)
return-1},
dg(){return J.v(this.a,this.d++)},
l5(d){var x=this.jY(d)
this.d=this.d+(x.c-x.d)
return x},
qj(d){var x,w,v,u,t,s=this
if(d==null){x=B.a([],y.t)
for(w=s.c;v=s.d,v<w;){u=s.a
s.d=v+1
t=J.v(u,v)
if(t===0)return B.ep(x,0,null)
x.push(t)}throw B.l(A.c6("EOF reached without finding string terminator (length: "+B.o(d)+")"))}return B.ep(s.l5(d).hK(),0,null)},
Q9(){return this.qj(null)},
aE4(d){var x,w,v,u,t=this,s=B.a([],y.t)
for(x=t.c;w=t.d,w<x;){v=t.a
t.d=w+1
u=J.v(v,w)
s.push(u)
if(u===10||s.length>=d)return B.ep(s,0,null)}return B.ep(s,0,null)},
bIn(){return this.aE4(256)},
bIo(){var x,w,v,u,t=this,s=B.a([],y.t)
for(x=t.c;w=t.d,w<x;){v=t.a
t.d=w+1
u=J.v(v,w)
if(u===0)return new B.F3(!0).F6(s,0,null,!0)
s.push(u)}return D.aq.Ct(0,s,!0)},
bO(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255
if(x.e)return w<<8|v
return v<<8|w},
rG(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255
if(x.e)return u|v<<8|w<<16
return w|v<<8|u<<16},
an(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255,t=J.v(x.a,x.d++)&255
if(x.e)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
a_x(){return A.ddB(this.ada())},
ada(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255,t=J.v(x.a,x.d++)&255,s=J.v(x.a,x.d++)&255,r=J.v(x.a,x.d++)&255,q=J.v(x.a,x.d++)&255,p=J.v(x.a,x.d++)&255
if(x.e)return(D.c.eq(w,56)|D.c.eq(v,48)|D.c.eq(u,40)|D.c.eq(t,32)|s<<24|r<<16|q<<8|p)>>>0
return(D.c.eq(p,56)|D.c.eq(q,48)|D.c.eq(r,40)|D.c.eq(s,32)|t<<24|u<<16|v<<8|w)>>>0},
Jl(d,e,f){var x,w=this,v=w.a
if(y.D.b(v))return w.aFe(e,f)
x=w.b+w.d+e
return J.aVd(v,x,f<=0?w.c:x+f)},
fb(d){return this.Jl(0,0,0)},
aFe(d,e){var x,w=this,v=e==null?w.c-w.d-d:e,u=w.a
if(y.D.b(u))return J.d3(D.A.gag(u),u.byteOffset+w.d+d,v)
x=w.d+d
x=J.aVd(u,x,x+v)
return new Uint8Array(B.bU(x))},
hK(){return this.aFe(0,null)},
Qt(){var x=this.a
if(y.D.b(x))return J.oo(D.A.gag(x),x.byteOffset+this.d,null)
return J.oo(D.A.gag(this.hK()),0,null)}}
A.boz.prototype={
bqd(d){var x=this
x.aoP(d)
x.alU()
x.aou()
x.akm()},
bcl(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.c=Math.max(d,4)
n.f=m-n.d
n.r=m-1
x=D.d.b7(m,8)
n.w=x
n.x=x*256
n.Q=new A.a2b(new Uint32Array(1024),256,4)
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
akm(){var x,w,v,u,t,s
for(x=0;x<this.c;++x){w=this.a
w===$&&B.b()
v=this.Q
v===$&&B.b()
u=v.b
t=2<u?v.c[x*u+2]:0
s=1<u?v.c[x*u+1]:0
v=0<u?v.c[x*u]:0
w.pk(x,Math.abs(t),Math.abs(s),Math.abs(v))}},
bae(d,e,f){var x,w,v,u=this.as[e],t=u-1,s=this.c,r=this.Q,q=1000,p=-1
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
alU(){var x,w,v,u,t,s,r,q=this
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
aou(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
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
auz(d,e){var x,w,v,u
for(x=this.y,w=d*d,v=0;v<d;++v){x===$&&B.b()
u=D.d.D(e*((w-v*v)*256/w))
x.$flags&2&&B.B(x)
x[v]=u}},
aoP(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.x
a2===$&&B.b()
x=30+D.c.b7(a1.b-1,3)
w=a3.gcZ(0)*a3.gb5(0)
v=D.c.hu(w,a1.b)
u=Math.max(D.c.b7(v,100),1)
if(u===0)u=1
t=D.c.R(a2,8)
if(t<=1)t=0
a1.auz(t,1024)
if(w<1509)s=a1.b=1
else if(D.c.ap(w,499)!==0)s=499
else if(D.c.ap(w,491)!==0)s=491
else s=D.c.ap(w,487)!==0?487:503
r=a3.gcZ(0)
q=a3.gb5(0)
for(p=a2,o=1024,n=0,m=0,l=0,k=0;k<v;){a2=a3.a
j=a2==null?null:a2.el(m,l,null)
if(j==null)j=new A.fm()
i=j.gaw(j)
h=j.gaK()
g=j.gaM(j)
if(k===0){a2=a1.z
a2===$&&B.b()
f=a1.e
f===$&&B.b()
f*=3
a2[f]=g
a2[f+1]=h
a2[f+2]=i}e=a1.bma(g,h,i)
if(e<0)e=a1.aXM(g,h,i)
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
if(t>0)a1.aUL(d,t,e,g,h,i)}n+=s
m+=s
for(;m>r;){m-=r;++l}for(;n>=w;){n-=w
l-=q}++k
if(D.c.ap(k,u)===0){o-=D.c.hu(o,x)
p-=D.c.b7(p,30)
t=D.c.R(p,8)
if(t<=1)t=0
a1.auz(t,o)}}},
aUL(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=f-e,j=l.d-1
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
aXM(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=1e30
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
bma(d,e,f){var x,w,v,u,t,s
for(x=this.d,w=this.z,v=0,u=0;v<x;++v){w===$&&B.b()
t=u+1
s=!1
if(w[u]===d){u=t+1
if(w[t]===e){t=u+1
s=w[u]===f
u=t}}else u=t
if(s)return v}return-1}}
A.av2.prototype={
b_(d){var x,w,v=this
if(v.a===v.c.length)v.b0t()
x=v.c
w=v.a++
x.$flags&2&&B.B(x)
x[w]=d&255},
a0B(d,e){var x,w,v,u,t=this
e=J.bl(d)
for(;x=t.a,w=x+e,v=t.c,u=v.length,w>u;)t.alE(w-u)
D.A.ht(v,x,w,d)
t.a+=e},
mx(d){return this.a0B(d,null)},
l7(d){var x=this
if(x.b){x.b_(D.c.R(d,8)&255)
x.b_(d&255)
return}x.b_(d&255)
x.b_(D.c.R(d,8)&255)},
ih(d){var x=this
if(x.b){x.b_(D.c.R(d,24)&255)
x.b_(D.c.R(d,16)&255)
x.b_(D.c.R(d,8)&255)
x.b_(d&255)
return}x.b_(d&255)
x.b_(D.c.R(d,8)&255)
x.b_(D.c.R(d,16)&255)
x.b_(D.c.R(d,24)&255)},
bLe(d){var x,w=this,v=new Float32Array(1)
v[0]=d
x=J.d3(D.eX.gag(v),0,null)
if(w.b){w.b_(x[3])
w.b_(x[2])
w.b_(x[1])
w.b_(x[0])
return}w.b_(x[0])
w.b_(x[1])
w.b_(x[2])
w.b_(x[3])},
bLf(d){var x,w=this,v=new Float64Array(1)
v[0]=d
x=J.d3(D.e7.gag(v),0,null)
if(w.b){w.b_(x[7])
w.b_(x[6])
w.b_(x[5])
w.b_(x[4])
w.b_(x[3])
w.b_(x[2])
w.b_(x[1])
w.b_(x[0])
return}w.b_(x[0])
w.b_(x[1])
w.b_(x[2])
w.b_(x[3])
w.b_(x[4])
w.b_(x[5])
w.b_(x[6])
w.b_(x[7])},
alE(d){var x,w,v,u
if(d!=null)x=d
else{w=this.c.length
x=w===0?8192:w*2}w=this.c
v=w.length
u=new Uint8Array(v+x)
D.A.ht(u,0,v,w)
this.c=u},
b0t(){return this.alE(null)},
gu(d){return this.a}}
A.btR.prototype={
aHL(d){var x,w,v,u,t,s,r=d.gcZ(0),q=d.gb5(0),p=this.a
p===$&&B.b()
x=A.hF(null,null,C.a7,0,C.bl,q,null,0,1,p,C.a7,r,!1)
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
u.m(0,0,this.bae(D.d.D(v.gaM(v)),s,t))
w.q()}return x}}
A.nQ.prototype={
D(d){var x=this.b
return x===0?0:D.c.hu(this.a,x)},
u1(d){var x=this.b
return x===0?0:this.a/x},
k(d,e){if(e==null)return!1
return e instanceof A.nQ&&this.a===e.a&&this.b===e.b},
gv(d){return B.ac(this.a,this.b,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
j(d){return""+this.a+"/"+this.b}}
A.bww.prototype={
J(){return"ResizeMode."+this.b}}
A.bwt.prototype={
J(){return"RequestImageFormat."+this.b}}
A.bIg.prototype={}
var z=a.updateTypes(["~(lS)","r(qw,r,r)","r([r])","~(C5,A<r>)","~(r,r,r,r,r,d1)","~(e,pS)","~(r)","~(r,k_)","C5(r)"])
A.bgg.prototype={
$0(){return A.cnm(this.a,this.b,"jpg",this.c)},
$S:174}
A.bgh.prototype={
$0(){return A.cnm(this.a,this.b,"png",null)},
$S:174}
A.bgj.prototype={
$0(){return A.cnm(this.a,this.b,"webp",this.c)},
$S:174}
A.bg9.prototype={
$2(d,e){var x=A.cx_(e)
this.a.a.m(0,d,x)
return x},
$S:z+5}
A.bga.prototype={
$2(d,e){var x=e.dZ(0)
this.a.a.m(0,d,x)
return x},
$S:z+7}
A.bgb.prototype={
$2(d,e){var x=A.cx_(e)
this.a.b.a.m(0,d,x)
return x},
$S:z+5}
A.aYY.prototype={
$4(d,e,f,g){var x,w,v=this,u=v.a
if(u.a<v.c){x=v.b.c&&v.d.ch!=null
w=v.e
if(x){x=v.d
w.ik(x.ch.na(d),x.ch.n8(d),x.ch.n7(d),x.ch.ou(d))}else w.ik(d,e,f,g)
w.q();++u.a}},
$S:746}
A.b9I.prototype={
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
$S:747}
A.bhK.prototype={
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
A.bsN.prototype={
$1(d){return d!==""},
$S:14}
A.bJU.prototype={
$2(d,e){return(d|e<<16)>>>0},
$S:169}
A.bgy.prototype={
$4(d,e,f,g){var x=this.b
return d+this.a*(e-d+x*(d+g-f-e))+x*(f-d)},
$S:748}
A.bgx.prototype={
$5(d,e,f,g,h){var x=-e,w=d*d
return f+0.5*(d*(x+g)+w*(2*e-5*f+4*g-h)+w*d*(x+3*f-3*g+h))},
$S:749};(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_2u,v=a._static_1,u=a._instance_1u,t=a.installStaticTearOff
x(A.k_.prototype,"gxF",1,0,function(){return[0]},["$1","$0"],["jb","D"],2,0,0)
x(A.tY.prototype,"gxF",1,0,function(){return[0]},["$1","$0"],["jb","D"],2,0,0)
x(A.yi.prototype,"gxF",1,0,function(){return[0]},["$1","$0"],["jb","D"],2,0,0)
x(A.r7.prototype,"gxF",1,0,function(){return[0]},["$1","$0"],["jb","D"],2,0,0)
x(A.u_.prototype,"gxF",1,0,function(){return[0]},["$1","$0"],["jb","D"],2,0,0)
x(A.vX.prototype,"gxF",1,0,function(){return[0]},["$1","$0"],["jb","D"],2,0,0)
x(A.yh.prototype,"gxF",1,0,function(){return[0]},["$1","$0"],["jb","D"],2,0,0)
x(A.yg.prototype,"gxF",1,0,function(){return[0]},["$1","$0"],["jb","D"],2,0,0)
x(A.u0.prototype,"gxF",1,0,function(){return[0]},["$1","$0"],["jb","D"],2,0,0)
var s
w(s=A.aqY.prototype,"gaYK","aYL",3)
w(s,"gaYN","aYO",3)
w(s,"gaYP","aYQ",3)
w(s,"gaYE","aYF",3)
w(s,"gaYG","aYH",3)
v(A,"ddO","d07",0)
v(A,"ddH","d0_",0)
v(A,"ddF","d_Y",0)
v(A,"ddM","d05",0)
v(A,"ddN","d06",0)
v(A,"ddL","d04",0)
v(A,"ddK","d03",0)
v(A,"ddJ","d02",0)
v(A,"ddQ","d09",0)
v(A,"ddP","d08",0)
v(A,"ddI","d00",0)
v(A,"ddG","d_Z",0)
v(A,"de0","d0k",0)
v(A,"ddZ","d0i",0)
v(A,"ddR","d0a",0)
v(A,"ddT","d0c",0)
v(A,"ddS","d0b",0)
v(A,"ddU","d0d",0)
v(A,"de1","d0l",0)
v(A,"de_","d0j",0)
v(A,"ddV","d0e",0)
v(A,"ddW","d0f",0)
v(A,"ddX","d0g",0)
v(A,"ddY","d0h",0)
u(A.a7q.prototype,"gbhg","bhh",6)
u(A.aqM.prototype,"gbyl","bym",6)
t(A,"crL",3,null,["$3"],["d0m"],1,0)
t(A,"de2",3,null,["$3"],["d0n"],1,0)
t(A,"de7",3,null,["$3"],["d0s"],1,0)
t(A,"de8",3,null,["$3"],["d0t"],1,0)
t(A,"de9",3,null,["$3"],["d0u"],1,0)
t(A,"dea",3,null,["$3"],["d0v"],1,0)
t(A,"deb",3,null,["$3"],["d0w"],1,0)
t(A,"dec",3,null,["$3"],["d0x"],1,0)
t(A,"ded",3,null,["$3"],["d0y"],1,0)
t(A,"dee",3,null,["$3"],["d0z"],1,0)
t(A,"de3",3,null,["$3"],["d0o"],1,0)
t(A,"de4",3,null,["$3"],["d0p"],1,0)
t(A,"de5",3,null,["$3"],["d0q"],1,0)
t(A,"de6",3,null,["$3"],["d0r"],1,0)
t(A,"deh",6,null,["$6"],["d0L"],4,0)
t(A,"dei",6,null,["$6"],["d0M"],4,0)
t(A,"deg",6,null,["$6"],["d0K"],4,0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.ahS,B.jY)
w(B.E,[A.bh7,A.bpW,A.bLq,A.b5c,A.t2,A.bYt,A.caj,A.bfG,A.bgM,A.bLp,A.bLr,A.hx,A.tZ,A.aIC,A.anK,A.pS,A.k_,A.aYZ,A.FC,A.b4X,A.b4W,A.b8y,A.anL,A.b9F,A.anM,A.anN,A.b9H,A.Zq,A.aLE,A.a_1,A.a_2,A.apk,A.bfY,A.aq7,A.ajH,A.H5,A.bhH,A.C5,A.bhJ,A.TT,A.aqX,A.bhN,A.aqY,A.a3c,A.bsL,A.a3v,A.btJ,A.ax3,A.a3y,A.QL,A.ax2,A.rz,A.aBm,A.bGm,A.aBr,A.bGo,A.aBs,A.bGp,A.bje,A.bJH,A.a7p,A.bJI,A.bJN,A.bJR,A.bJT,A.a7o,A.bJS,A.bJJ,A.Ks,A.aCj,A.aCl,A.aCk,A.aCm,A.a7q,A.aCh,A.bJO,A.aCi,A.bKE,A.a7F,A.aq5,A.a_8,A.aCK,A.a_u,A.bqn,A.avz,A.aqn,A.lS,A.btR,A.av2,A.nQ,A.bIg])
x(A.bh6,A.bh7)
x(A.bpV,A.bpW)
x(A.cgr,A.bLq)
w(B.ci,[A.bgg,A.bgh,A.bgj])
w(B.e5,[A.b_d,A.nw,A.aiF,A.mJ,A.lH,A.Oa,A.GA,A.tM,A.OC,A.bhI,A.Qt,A.a3b,A.D5,A.awz,A.D6,A.uo,A.o6,A.Kg,A.kz,A.rR,A.Kt,A.SV,A.bfV,A.ap9,A.aqP,A.baV,A.bww,A.bwt])
w(B.w,[A.MO,A.MP,A.MQ,A.MR,A.MS,A.MT,A.MW,A.MX,A.MY,A.MZ,A.N_,A.xJ,A.BM,A.lQ,A.Ih,A.Ii,A.Ij,A.Ik,A.Il,A.Im,A.In,A.Io,A.Ip,A.Iq,A.Ir,A.Is,A.fm])
w(A.xJ,[A.ajC,A.MU])
x(A.O8,A.tZ)
w(B.dm,[A.bg9,A.bga,A.bgb,A.bJU])
w(A.k_,[A.tY,A.BH,A.yi,A.r7,A.u_,A.vX,A.yh,A.yg,A.u0,A.BJ,A.BI,A.He])
w(A.b4X,[A.aiJ,A.b9G,A.bdx,A.bfX,A.aqW,A.awy,A.bsM,A.btI,A.btK,A.bFB,A.bGn,A.bKF])
w(B.bA,[A.aYY,A.b9I,A.bhK,A.bsN,A.bgy,A.bgx])
x(A.b6c,A.aiJ)
x(A.bhf,A.b9F)
w(A.bhf,[A.aqH,A.bhg,A.bhh,A.bhi,A.aqJ])
x(A.aqI,A.Zq)
x(A.aqK,A.a_2)
x(A.bfW,A.FC)
w(A.H5,[A.H6,A.a_s])
w(A.b8y,[A.bhL,A.bsJ])
x(A.aqL,A.a3c)
x(A.bhj,A.bsL)
x(A.IP,A.b4W)
w(A.ax3,[A.yZ,A.m2])
x(A.aqM,A.a7q)
x(A.aqN,A.a7F)
x(A.aqO,A.aCK)
w(A.lQ,[A.OL,A.OM,A.a_y,A.a_z,A.a_A,A.a_B,A.ON,A.OO,A.OP,A.OQ,A.OR,A.OS])
w(A.bqn,[A.avg,A.avh,A.avi,A.avj,A.avk,A.avl,A.avm,A.a2b,A.uh])
x(A.boz,A.btR)})()
B.bi(b.typeUniverse,JSON.parse('{"ahS":{"jY":[],"b6":[]},"hx":{"bo":["aW"]},"MO":{"dS":[],"w":["aW"],"w.E":"aW"},"MP":{"dS":[],"w":["aW"],"w.E":"aW"},"MQ":{"dS":[],"w":["aW"],"w.E":"aW"},"MR":{"dS":[],"w":["aW"],"w.E":"aW"},"MS":{"dS":[],"w":["aW"],"w.E":"aW"},"MT":{"dS":[],"w":["aW"],"w.E":"aW"},"MW":{"dS":[],"w":["aW"],"w.E":"aW"},"MX":{"dS":[],"w":["aW"],"w.E":"aW"},"MY":{"dS":[],"w":["aW"],"w.E":"aW"},"MZ":{"dS":[],"w":["aW"],"w.E":"aW"},"N_":{"dS":[],"w":["aW"],"w.E":"aW"},"xJ":{"dS":[],"w":["aW"],"w.E":"aW"},"ajC":{"dS":[],"w":["aW"],"w.E":"aW"},"MU":{"dS":[],"w":["aW"],"w.E":"aW"},"tY":{"k_":[]},"BH":{"k_":[]},"yi":{"k_":[]},"r7":{"k_":[]},"u_":{"k_":[]},"vX":{"k_":[]},"yh":{"k_":[]},"yg":{"k_":[]},"u0":{"k_":[]},"BJ":{"k_":[]},"BI":{"k_":[]},"He":{"k_":[]},"aqI":{"Zq":[]},"aqK":{"a_2":[]},"H6":{"H5":[]},"a_s":{"H5":[]},"aqL":{"a3c":[]},"aqN":{"a7F":[]},"BM":{"w":["cM"],"w.E":"cM"},"lQ":{"w":["cM"]},"OL":{"lQ":[],"w":["cM"],"w.E":"cM"},"OM":{"lQ":[],"w":["cM"],"w.E":"cM"},"a_y":{"lQ":[],"w":["cM"],"w.E":"cM"},"a_z":{"lQ":[],"w":["cM"],"w.E":"cM"},"a_A":{"lQ":[],"w":["cM"],"w.E":"cM"},"a_B":{"lQ":[],"w":["cM"],"w.E":"cM"},"ON":{"lQ":[],"w":["cM"],"w.E":"cM"},"OO":{"lQ":[],"w":["cM"],"w.E":"cM"},"OP":{"lQ":[],"w":["cM"],"w.E":"cM"},"OQ":{"lQ":[],"w":["cM"],"w.E":"cM"},"OR":{"lQ":[],"w":["cM"],"w.E":"cM"},"OS":{"lQ":[],"w":["cM"],"w.E":"cM"},"Ih":{"cM":[],"dS":[],"w":["aW"],"bo":["cM"],"w.E":"aW"},"Ii":{"cM":[],"dS":[],"w":["aW"],"bo":["cM"],"w.E":"aW"},"Ij":{"cM":[],"dS":[],"w":["aW"],"bo":["cM"],"w.E":"aW"},"Ik":{"cM":[],"dS":[],"w":["aW"],"bo":["cM"],"w.E":"aW"},"Il":{"cM":[],"dS":[],"w":["aW"],"bo":["cM"],"w.E":"aW"},"Im":{"cM":[],"dS":[],"w":["aW"],"bo":["cM"],"w.E":"aW"},"avz":{"bo":["cM"]},"In":{"cM":[],"dS":[],"w":["aW"],"bo":["cM"],"w.E":"aW"},"Io":{"cM":[],"dS":[],"w":["aW"],"bo":["cM"],"w.E":"aW"},"Ip":{"cM":[],"dS":[],"w":["aW"],"bo":["cM"],"w.E":"aW"},"Iq":{"cM":[],"dS":[],"w":["aW"],"bo":["cM"],"w.E":"aW"},"Ir":{"cM":[],"dS":[],"w":["aW"],"bo":["cM"],"w.E":"aW"},"Is":{"cM":[],"dS":[],"w":["aW"],"bo":["cM"],"w.E":"aW"},"fm":{"cM":[],"dS":[],"w":["aW"],"bo":["cM"],"w.E":"aW"},"aqn":{"b6":[]},"cM":{"dS":[],"bo":["cM"],"w":["aW"]}}'))
B.l6(b.typeUniverse,JSON.parse('{"ax3":1}'))
var y=(function rtii(){var x=B.y
return{G:x("dS"),n:x("anL"),W:x("anN"),z:x("ao1"),O:x("a_8"),x:x("aq5"),Y:x("aq7"),P:x("pS"),r:x("k_"),I:x("lQ"),h:x("a03"),R:x("w<@>"),E:x("p<ajH>"),Q:x("p<anM>"),m:x("p<Zq>"),b:x("p<a_2>"),A:x("p<a_8>"),g:x("p<BM>"),M:x("p<A<A<A<r>>>>"),o:x("p<A<A<r>>>"),S:x("p<A<r>>"),d:x("p<a3c>"),_:x("p<a3v>"),j:x("p<nQ>"),T:x("p<e>"),q:x("p<aBs>"),a:x("p<d1>"),u:x("p<Ks>"),F:x("p<aCi>"),J:x("p<a7F>"),v:x("p<aIC>"),C:x("p<TT>"),t:x("p<r>"),aH:x("p<H5?>"),cB:x("p<aqX?>"),cQ:x("p<A<r>?>"),w:x("p<qw?>"),e:x("p<d1?>"),y:x("p<~(lS)>"),c:x("C5"),bp:x("A<a03>"),f:x("A<A<r>>"),k:x("A<nQ>"),cm:x("A<a7o>"),K:x("A<Ks>"),H:x("A<L>"),L:x("A<r>"),c0:x("cM"),aG:x("a3v"),a2:x("di8"),ab:x("a3y"),aM:x("QL"),i:x("nQ"),N:x("e"),aL:x("aBr"),ah:x("iN"),bk:x("qw"),D:x("d1"),V:x("a7o"),bQ:x("aCj"),bl:x("aCk"),bt:x("aCm"),U:x("ag<e>"),bc:x("aLE"),cb:x("L"),p:x("r"),a7:x("aqD?"),cl:x("A<r>?"),l:x("A<H5?>?"),X:x("E?"),ac:x("d1?"),ak:x("a7p?"),B:x("Ks?"),Z:x("aCl?"),s:x("r?")}})();(function constants(){var x=a.makeConstList
C.y3=new A.aiF(0,"direct")
C.y4=new A.aiF(1,"alpha")
C.Fg=new A.lH(0,"none")
C.y5=new A.lH(3,"bitfields")
C.y6=new A.lH(6,"alphaBitfields")
C.bcY=new A.bLp()
C.FY=new A.bLr()
C.iW=new A.cgr()
C.G4=new A.b_d(4,"luminance")
C.aka=new A.GA(0,"red")
C.akb=new A.GA(1,"green")
C.akc=new A.GA(2,"blue")
C.akd=new A.GA(3,"alpha")
C.ake=new A.GA(4,"other")
C.Ir=new A.Oa(0,"uint")
C.zE=new A.Oa(1,"half")
C.zF=new A.Oa(2,"float")
C.Is=new A.tM(0,"none")
C.akE=new A.baV(2,"both")
C.ff=new A.nw(0,"uint1")
C.h3=new A.nw(1,"uint2")
C.j6=new A.nw(10,"float32")
C.kD=new A.nw(11,"float64")
C.h4=new A.nw(2,"uint4")
C.a7=new A.nw(3,"uint8")
C.cc=new A.nw(4,"uint16")
C.j7=new A.nw(5,"uint32")
C.kE=new A.nw(6,"int8")
C.kF=new A.nw(7,"int16")
C.kG=new A.nw(8,"int32")
C.hK=new A.nw(9,"float16")
C.akQ=new A.ap9(1,"page")
C.bl=new A.ap9(2,"sequence")
C.zR=new A.bfV(1,"deflate")
C.IU=new A.OC(2,"cur")
C.Y=new A.mJ(0,"none")
C.Ju=new A.mJ(1,"byte")
C.Jv=new A.mJ(10,"sRational")
C.Jw=new A.mJ(11,"single")
C.Jx=new A.mJ(12,"double")
C.bC=new A.mJ(2,"ascii")
C.bi=new A.mJ(3,"short")
C.cM=new A.mJ(4,"long")
C.e4=new A.mJ(5,"rational")
C.Jy=new A.mJ(6,"sByte")
C.hO=new A.mJ(7,"undefined")
C.Jz=new A.mJ(8,"sShort")
C.JA=new A.mJ(9,"sLong")
C.anV=new A.aqP(0,"nearest")
C.bdd=new A.aqP(1,"linear")
C.JT=new A.bhI(0,"yuv444")
C.Am=B.a(x([0,2,8]),y.t)
C.aoO=B.a(x([0,4,2,1]),y.t)
C.al_=new A.OC(0,"invalid")
C.al0=new A.OC(1,"ico")
C.aoT=B.a(x([C.al_,C.al0,C.IU]),B.y("p<OC>"))
C.Kg=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),y.t)
C.apx=B.a(x([252,243,207,63]),y.t)
C.aU6=new A.Qt(0,"none")
C.a1S=new A.Qt(1,"background")
C.a1T=new A.Qt(2,"previous")
C.apz=B.a(x([C.aU6,C.a1S,C.a1T]),B.y("p<Qt>"))
C.Kj=B.a(x([292,260,226,226]),y.t)
C.Kl=B.a(x([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125]),y.t)
C.apE=B.a(x([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0]),y.t)
C.apL=B.a(x([2,3,7]),y.t)
C.Kp=B.a(x([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68]),y.t)
C.apS=B.a(x([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),y.t)
C.aq5=B.a(x([3,3,11]),y.t)
C.B6=B.a(x([128,128,128,128,128,128,128,128,128,128,128]),y.t)
C.L8=B.a(x([C.B6,C.B6,C.B6]),y.S)
C.asm=B.a(x([253,136,254,255,228,219,128,128,128,128,128]),y.t)
C.auH=B.a(x([189,129,242,255,227,213,255,219,128,128,128]),y.t)
C.auO=B.a(x([106,126,227,252,214,209,255,255,128,128,128]),y.t)
C.ayk=B.a(x([C.asm,C.auH,C.auO]),y.S)
C.ayE=B.a(x([1,98,248,255,236,226,255,255,128,128,128]),y.t)
C.aqs=B.a(x([181,133,238,254,221,234,255,154,128,128,128]),y.t)
C.aqb=B.a(x([78,134,202,247,198,180,255,219,128,128,128]),y.t)
C.azV=B.a(x([C.ayE,C.aqs,C.aqb]),y.S)
C.asc=B.a(x([1,185,249,255,243,255,128,128,128,128,128]),y.t)
C.ayt=B.a(x([184,150,247,255,236,224,128,128,128,128,128]),y.t)
C.aBJ=B.a(x([77,110,216,255,236,230,128,128,128,128,128]),y.t)
C.axk=B.a(x([C.asc,C.ayt,C.aBJ]),y.S)
C.axz=B.a(x([1,101,251,255,241,255,128,128,128,128,128]),y.t)
C.ask=B.a(x([170,139,241,252,236,209,255,255,128,128,128]),y.t)
C.axN=B.a(x([37,116,196,243,228,255,255,255,128,128,128]),y.t)
C.arv=B.a(x([C.axz,C.ask,C.axN]),y.S)
C.avj=B.a(x([1,204,254,255,245,255,128,128,128,128,128]),y.t)
C.aCy=B.a(x([207,160,250,255,238,128,128,128,128,128,128]),y.t)
C.aCx=B.a(x([102,103,231,255,211,171,128,128,128,128,128]),y.t)
C.ate=B.a(x([C.avj,C.aCy,C.aCx]),y.S)
C.ara=B.a(x([1,152,252,255,240,255,128,128,128,128,128]),y.t)
C.aCI=B.a(x([177,135,243,255,234,225,128,128,128,128,128]),y.t)
C.ax1=B.a(x([80,129,211,255,194,224,128,128,128,128,128]),y.t)
C.ayj=B.a(x([C.ara,C.aCI,C.ax1]),y.S)
C.LP=B.a(x([1,1,255,128,128,128,128,128,128,128,128]),y.t)
C.az8=B.a(x([246,1,255,128,128,128,128,128,128,128,128]),y.t)
C.awq=B.a(x([255,128,128,128,128,128,128,128,128,128,128]),y.t)
C.aCZ=B.a(x([C.LP,C.az8,C.awq]),y.S)
C.at4=B.a(x([C.L8,C.ayk,C.azV,C.axk,C.arv,C.ate,C.ayj,C.aCZ]),y.o)
C.aBR=B.a(x([198,35,237,223,193,187,162,160,145,155,62]),y.t)
C.asl=B.a(x([131,45,198,221,172,176,220,157,252,221,1]),y.t)
C.aBQ=B.a(x([68,47,146,208,149,167,221,162,255,223,128]),y.t)
C.avO=B.a(x([C.aBR,C.asl,C.aBQ]),y.S)
C.azZ=B.a(x([1,149,241,255,221,224,255,255,128,128,128]),y.t)
C.aAz=B.a(x([184,141,234,253,222,220,255,199,128,128,128]),y.t)
C.awf=B.a(x([81,99,181,242,176,190,249,202,255,255,128]),y.t)
C.aBk=B.a(x([C.azZ,C.aAz,C.awf]),y.S)
C.aB_=B.a(x([1,129,232,253,214,197,242,196,255,255,128]),y.t)
C.aCn=B.a(x([99,121,210,250,201,198,255,202,128,128,128]),y.t)
C.ayo=B.a(x([23,91,163,242,170,187,247,210,255,255,128]),y.t)
C.awv=B.a(x([C.aB_,C.aCn,C.ayo]),y.S)
C.atN=B.a(x([1,200,246,255,234,255,128,128,128,128,128]),y.t)
C.aAX=B.a(x([109,178,241,255,231,245,255,255,128,128,128]),y.t)
C.apD=B.a(x([44,130,201,253,205,192,255,255,128,128,128]),y.t)
C.aBu=B.a(x([C.atN,C.aAX,C.apD]),y.S)
C.aqU=B.a(x([1,132,239,251,219,209,255,165,128,128,128]),y.t)
C.aoV=B.a(x([94,136,225,251,218,190,255,255,128,128,128]),y.t)
C.aB2=B.a(x([22,100,174,245,186,161,255,199,128,128,128]),y.t)
C.axw=B.a(x([C.aqU,C.aoV,C.aB2]),y.S)
C.aAy=B.a(x([1,182,249,255,232,235,128,128,128,128,128]),y.t)
C.ay7=B.a(x([124,143,241,255,227,234,128,128,128,128,128]),y.t)
C.auA=B.a(x([35,77,181,251,193,211,255,205,128,128,128]),y.t)
C.auV=B.a(x([C.aAy,C.ay7,C.auA]),y.S)
C.aD_=B.a(x([1,157,247,255,236,231,255,255,128,128,128]),y.t)
C.at1=B.a(x([121,141,235,255,225,227,255,255,128,128,128]),y.t)
C.aAY=B.a(x([45,99,188,251,195,217,255,224,128,128,128]),y.t)
C.aro=B.a(x([C.aD_,C.at1,C.aAY]),y.S)
C.aoW=B.a(x([1,1,251,255,213,255,128,128,128,128,128]),y.t)
C.apU=B.a(x([203,1,248,255,255,128,128,128,128,128,128]),y.t)
C.aAC=B.a(x([137,1,177,255,224,255,128,128,128,128,128]),y.t)
C.arc=B.a(x([C.aoW,C.apU,C.aAC]),y.S)
C.aAk=B.a(x([C.avO,C.aBk,C.awv,C.aBu,C.axw,C.auV,C.aro,C.arc]),y.o)
C.atm=B.a(x([253,9,248,251,207,208,255,192,128,128,128]),y.t)
C.az9=B.a(x([175,13,224,243,193,185,249,198,255,255,128]),y.t)
C.aCY=B.a(x([73,17,171,221,161,179,236,167,255,234,128]),y.t)
C.ayU=B.a(x([C.atm,C.az9,C.aCY]),y.S)
C.aA8=B.a(x([1,95,247,253,212,183,255,255,128,128,128]),y.t)
C.awK=B.a(x([239,90,244,250,211,209,255,255,128,128,128]),y.t)
C.aBI=B.a(x([155,77,195,248,188,195,255,255,128,128,128]),y.t)
C.aAx=B.a(x([C.aA8,C.awK,C.aBI]),y.S)
C.avn=B.a(x([1,24,239,251,218,219,255,205,128,128,128]),y.t)
C.azH=B.a(x([201,51,219,255,196,186,128,128,128,128,128]),y.t)
C.awJ=B.a(x([69,46,190,239,201,218,255,228,128,128,128]),y.t)
C.aA4=B.a(x([C.avn,C.azH,C.awJ]),y.S)
C.auK=B.a(x([1,191,251,255,255,128,128,128,128,128,128]),y.t)
C.axM=B.a(x([223,165,249,255,213,255,128,128,128,128,128]),y.t)
C.ayA=B.a(x([141,124,248,255,255,128,128,128,128,128,128]),y.t)
C.aAZ=B.a(x([C.auK,C.axM,C.ayA]),y.S)
C.avT=B.a(x([1,16,248,255,255,128,128,128,128,128,128]),y.t)
C.asY=B.a(x([190,36,230,255,236,255,128,128,128,128,128]),y.t)
C.aso=B.a(x([149,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aqV=B.a(x([C.avT,C.asY,C.aso]),y.S)
C.ayr=B.a(x([1,226,255,128,128,128,128,128,128,128,128]),y.t)
C.az_=B.a(x([247,192,255,128,128,128,128,128,128,128,128]),y.t)
C.aBG=B.a(x([240,128,255,128,128,128,128,128,128,128,128]),y.t)
C.apZ=B.a(x([C.ayr,C.az_,C.aBG]),y.S)
C.aBt=B.a(x([1,134,252,255,255,128,128,128,128,128,128]),y.t)
C.ay5=B.a(x([213,62,250,255,255,128,128,128,128,128,128]),y.t)
C.aCE=B.a(x([55,93,255,128,128,128,128,128,128,128,128]),y.t)
C.ayq=B.a(x([C.aBt,C.ay5,C.aCE]),y.S)
C.as5=B.a(x([C.ayU,C.aAx,C.aA4,C.aAZ,C.aqV,C.apZ,C.ayq,C.L8]),y.o)
C.ay8=B.a(x([202,24,213,235,186,191,220,160,240,175,255]),y.t)
C.asj=B.a(x([126,38,182,232,169,184,228,174,255,187,128]),y.t)
C.aqX=B.a(x([61,46,138,219,151,178,240,170,255,216,128]),y.t)
C.aAq=B.a(x([C.ay8,C.asj,C.aqX]),y.S)
C.ax0=B.a(x([1,112,230,250,199,191,247,159,255,255,128]),y.t)
C.arn=B.a(x([166,109,228,252,211,215,255,174,128,128,128]),y.t)
C.axE=B.a(x([39,77,162,232,172,180,245,178,255,255,128]),y.t)
C.aAm=B.a(x([C.ax0,C.arn,C.axE]),y.S)
C.axa=B.a(x([1,52,220,246,198,199,249,220,255,255,128]),y.t)
C.atb=B.a(x([124,74,191,243,183,193,250,221,255,255,128]),y.t)
C.auz=B.a(x([24,71,130,219,154,170,243,182,255,255,128]),y.t)
C.aAl=B.a(x([C.axa,C.atb,C.auz]),y.S)
C.auv=B.a(x([1,182,225,249,219,240,255,224,128,128,128]),y.t)
C.aCC=B.a(x([149,150,226,252,216,205,255,171,128,128,128]),y.t)
C.aDc=B.a(x([28,108,170,242,183,194,254,223,255,255,128]),y.t)
C.aC3=B.a(x([C.auv,C.aCC,C.aDc]),y.S)
C.aDf=B.a(x([1,81,230,252,204,203,255,192,128,128,128]),y.t)
C.aAT=B.a(x([123,102,209,247,188,196,255,233,128,128,128]),y.t)
C.aBB=B.a(x([20,95,153,243,164,173,255,203,128,128,128]),y.t)
C.aAU=B.a(x([C.aDf,C.aAT,C.aBB]),y.S)
C.aw7=B.a(x([1,222,248,255,216,213,128,128,128,128,128]),y.t)
C.ay2=B.a(x([168,175,246,252,235,205,255,255,128,128,128]),y.t)
C.auE=B.a(x([47,116,215,255,211,212,255,255,128,128,128]),y.t)
C.asK=B.a(x([C.aw7,C.ay2,C.auE]),y.S)
C.aw_=B.a(x([1,121,236,253,212,214,255,255,128,128,128]),y.t)
C.axc=B.a(x([141,84,213,252,201,202,255,219,128,128,128]),y.t)
C.ayO=B.a(x([42,80,160,240,162,185,255,205,128,128,128]),y.t)
C.auZ=B.a(x([C.aw_,C.axc,C.ayO]),y.S)
C.aCR=B.a(x([244,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aoR=B.a(x([238,1,255,128,128,128,128,128,128,128,128]),y.t)
C.az2=B.a(x([C.LP,C.aCR,C.aoR]),y.S)
C.apu=B.a(x([C.aAq,C.aAm,C.aAl,C.aC3,C.aAU,C.asK,C.auZ,C.az2]),y.o)
C.aqW=B.a(x([C.at4,C.aAk,C.as5,C.apu]),y.M)
C.ar_=B.a(x([511,1023,2047,4095]),y.t)
C.ars=B.a(x([63,207,243,252]),y.t)
C.arZ=B.a(x([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]),y.t)
C.qq=B.a(x([0,1,2,3,4,5,6,7,8,9,10,11]),y.t)
C.asr=B.a(x([8,8,4,2]),y.t)
C.ap8=B.a(x([173,148,140]),y.t)
C.ap9=B.a(x([176,155,140,135]),y.t)
C.ap6=B.a(x([180,157,141,134,130]),y.t)
C.apT=B.a(x([254,254,243,230,196,177,153,140,133,130,129]),y.t)
C.ast=B.a(x([C.ap8,C.ap9,C.ap6,C.apT]),y.S)
C.asy=B.a(x([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576]),y.t)
C.Lg=B.a(x([1,1.387039845,1.306562965,1.175875602,1,0.785694958,0.5411961,0.275899379]),B.y("p<L>"))
C.asP=B.a(x([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),y.t)
C.at6=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095]),y.t)
C.Lt=B.a(x([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29]),y.t)
C.LF=B.a(x([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250]),y.t)
C.atA=B.a(x([280,256,256,256,40]),y.t)
C.qX=B.a(x([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63]),y.t)
C.LW=B.a(x([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390]),y.t)
C.AD=B.a(x([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157]),y.t)
C.atR=B.a(x([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112]),y.t)
C.AE=B.a(x([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284]),y.t)
C.M6=B.a(x([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119]),y.t)
C.M8=B.a(x([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28]),y.t)
C.auk=B.a(x([C.Ir,C.zE,C.zF]),B.y("p<Oa>"))
C.rd=B.a(x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),y.t)
C.av4=B.a(x([254,253,251,247,239,223,191,127]),y.t)
C.rs=B.a(x([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8]),y.t)
C.MP=B.a(x([A.ddV(),A.ddN(),A.de1(),A.de_(),A.ddX(),A.ddW(),A.ddY()]),y.y)
C.MR=B.a(x([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5]),y.t)
C.N1=B.a(x([C.Y,C.Ju,C.bC,C.bi,C.cM,C.e4,C.Jy,C.hO,C.Jz,C.JA,C.Jv,C.Jw,C.Jx]),B.y("p<mJ>"))
C.DO=new A.kz(0,"whiteIsZero")
C.b5q=new A.kz(1,"blackIsZero")
C.b5x=new A.kz(2,"rgb")
C.DQ=new A.kz(3,"palette")
C.b5y=new A.kz(4,"transparencyMask")
C.a4O=new A.kz(5,"cmyk")
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
C.DP=new A.kz(16,"unknown")
C.avs=B.a(x([C.DO,C.b5q,C.b5x,C.DQ,C.b5y,C.a4O,C.b5z,C.b5A,C.b5B,C.b5C,C.b5r,C.b5s,C.b5t,C.b5u,C.b5v,C.b5w,C.DP]),B.y("p<kz>"))
C.Nh=B.a(x([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0]),y.t)
C.a1Q=new A.a3b(0,"source")
C.a1R=new A.a3b(1,"over")
C.avW=B.a(x([C.a1Q,C.a1R]),B.y("p<a3b>"))
C.b5i=new A.Kg(0,"invalid")
C.a4M=new A.Kg(1,"uint")
C.bd=new A.Kg(2,"int")
C.nV=new A.Kg(3,"float")
C.avZ=B.a(x([C.b5i,C.a4M,C.bd,C.nV]),B.y("p<Kg>"))
C.aw5=B.a(x([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15]),y.t)
C.NR=B.a(x([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9]),y.t)
C.awH=B.a(x([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15]),y.t)
C.akf=new A.tM(1,"rle")
C.akg=new A.tM(2,"zips")
C.akh=new A.tM(3,"zip")
C.aki=new A.tM(4,"piz")
C.akj=new A.tM(5,"pxr24")
C.akk=new A.tM(6,"b44")
C.akl=new A.tM(7,"b44a")
C.awL=B.a(x([C.Is,C.akf,C.akg,C.akh,C.aki,C.akj,C.akk,C.akl]),B.y("p<tM>"))
C.ayJ=B.a(x([231,120,48,89,115,113,120,152,112]),y.t)
C.apv=B.a(x([152,179,64,126,170,118,46,70,95]),y.t)
C.awG=B.a(x([175,69,143,80,85,82,72,155,103]),y.t)
C.aqD=B.a(x([56,58,10,171,218,189,17,13,152]),y.t)
C.axB=B.a(x([114,26,17,163,44,195,21,10,173]),y.t)
C.ay0=B.a(x([121,24,80,195,26,62,44,64,85]),y.t)
C.axv=B.a(x([144,71,10,38,171,213,144,34,26]),y.t)
C.aB5=B.a(x([170,46,55,19,136,160,33,206,71]),y.t)
C.atV=B.a(x([63,20,8,114,114,208,12,9,226]),y.t)
C.avk=B.a(x([81,40,11,96,182,84,29,16,36]),y.t)
C.aoX=B.a(x([C.ayJ,C.apv,C.awG,C.aqD,C.axB,C.ay0,C.axv,C.aB5,C.atV,C.avk]),y.S)
C.asX=B.a(x([134,183,89,137,98,101,106,165,148]),y.t)
C.aAJ=B.a(x([72,187,100,130,157,111,32,75,80]),y.t)
C.ayf=B.a(x([66,102,167,99,74,62,40,234,128]),y.t)
C.apY=B.a(x([41,53,9,178,241,141,26,8,107]),y.t)
C.av5=B.a(x([74,43,26,146,73,166,49,23,157]),y.t)
C.auf=B.a(x([65,38,105,160,51,52,31,115,128]),y.t)
C.aun=B.a(x([104,79,12,27,217,255,87,17,7]),y.t)
C.awE=B.a(x([87,68,71,44,114,51,15,186,23]),y.t)
C.aAo=B.a(x([47,41,14,110,182,183,21,17,194]),y.t)
C.az7=B.a(x([66,45,25,102,197,189,23,18,22]),y.t)
C.aBC=B.a(x([C.asX,C.aAJ,C.ayf,C.apY,C.av5,C.auf,C.aun,C.awE,C.aAo,C.az7]),y.S)
C.ayI=B.a(x([88,88,147,150,42,46,45,196,205]),y.t)
C.axG=B.a(x([43,97,183,117,85,38,35,179,61]),y.t)
C.auD=B.a(x([39,53,200,87,26,21,43,232,171]),y.t)
C.awm=B.a(x([56,34,51,104,114,102,29,93,77]),y.t)
C.axo=B.a(x([39,28,85,171,58,165,90,98,64]),y.t)
C.au8=B.a(x([34,22,116,206,23,34,43,166,73]),y.t)
C.aoY=B.a(x([107,54,32,26,51,1,81,43,31]),y.t)
C.aBc=B.a(x([68,25,106,22,64,171,36,225,114]),y.t)
C.asW=B.a(x([34,19,21,102,132,188,16,76,124]),y.t)
C.aBY=B.a(x([62,18,78,95,85,57,50,48,51]),y.t)
C.ati=B.a(x([C.ayI,C.axG,C.auD,C.awm,C.axo,C.au8,C.aoY,C.aBc,C.asW,C.aBY]),y.S)
C.axg=B.a(x([193,101,35,159,215,111,89,46,111]),y.t)
C.as3=B.a(x([60,148,31,172,219,228,21,18,111]),y.t)
C.aqS=B.a(x([112,113,77,85,179,255,38,120,114]),y.t)
C.aBU=B.a(x([40,42,1,196,245,209,10,25,109]),y.t)
C.avX=B.a(x([88,43,29,140,166,213,37,43,154]),y.t)
C.aua=B.a(x([61,63,30,155,67,45,68,1,209]),y.t)
C.auN=B.a(x([100,80,8,43,154,1,51,26,71]),y.t)
C.aq2=B.a(x([142,78,78,16,255,128,34,197,171]),y.t)
C.awW=B.a(x([41,40,5,102,211,183,4,1,221]),y.t)
C.atw=B.a(x([51,50,17,168,209,192,23,25,82]),y.t)
C.atf=B.a(x([C.axg,C.as3,C.aqS,C.aBU,C.avX,C.aua,C.auN,C.aq2,C.awW,C.atw]),y.S)
C.auw=B.a(x([138,31,36,171,27,166,38,44,229]),y.t)
C.atc=B.a(x([67,87,58,169,82,115,26,59,179]),y.t)
C.azU=B.a(x([63,59,90,180,59,166,93,73,154]),y.t)
C.aBz=B.a(x([40,40,21,116,143,209,34,39,175]),y.t)
C.aq9=B.a(x([47,15,16,183,34,223,49,45,183]),y.t)
C.asi=B.a(x([46,17,33,183,6,98,15,32,183]),y.t)
C.aDg=B.a(x([57,46,22,24,128,1,54,17,37]),y.t)
C.auR=B.a(x([65,32,73,115,28,128,23,128,205]),y.t)
C.aye=B.a(x([40,3,9,115,51,192,18,6,223]),y.t)
C.av2=B.a(x([87,37,9,115,59,77,64,21,47]),y.t)
C.awV=B.a(x([C.auw,C.atc,C.azU,C.aBz,C.aq9,C.asi,C.aDg,C.auR,C.aye,C.av2]),y.S)
C.aCP=B.a(x([104,55,44,218,9,54,53,130,226]),y.t)
C.arl=B.a(x([64,90,70,205,40,41,23,26,57]),y.t)
C.azT=B.a(x([54,57,112,184,5,41,38,166,213]),y.t)
C.au9=B.a(x([30,34,26,133,152,116,10,32,134]),y.t)
C.ayV=B.a(x([39,19,53,221,26,114,32,73,255]),y.t)
C.atu=B.a(x([31,9,65,234,2,15,1,118,73]),y.t)
C.awT=B.a(x([75,32,12,51,192,255,160,43,51]),y.t)
C.aud=B.a(x([88,31,35,67,102,85,55,186,85]),y.t)
C.avx=B.a(x([56,21,23,111,59,205,45,37,192]),y.t)
C.avI=B.a(x([55,38,70,124,73,102,1,34,98]),y.t)
C.aCW=B.a(x([C.aCP,C.arl,C.azT,C.au9,C.ayV,C.atu,C.awT,C.aud,C.avx,C.avI]),y.S)
C.avv=B.a(x([125,98,42,88,104,85,117,175,82]),y.t)
C.auj=B.a(x([95,84,53,89,128,100,113,101,45]),y.t)
C.axP=B.a(x([75,79,123,47,51,128,81,171,1]),y.t)
C.are=B.a(x([57,17,5,71,102,57,53,41,49]),y.t)
C.azE=B.a(x([38,33,13,121,57,73,26,1,85]),y.t)
C.aCA=B.a(x([41,10,67,138,77,110,90,47,114]),y.t)
C.awN=B.a(x([115,21,2,10,102,255,166,23,6]),y.t)
C.asZ=B.a(x([101,29,16,10,85,128,101,196,26]),y.t)
C.auJ=B.a(x([57,18,10,102,102,213,34,20,43]),y.t)
C.avV=B.a(x([117,20,15,36,163,128,68,1,26]),y.t)
C.awB=B.a(x([C.avv,C.auj,C.axP,C.are,C.azE,C.aCA,C.awN,C.asZ,C.auJ,C.avV]),y.S)
C.av0=B.a(x([102,61,71,37,34,53,31,243,192]),y.t)
C.aCt=B.a(x([69,60,71,38,73,119,28,222,37]),y.t)
C.av3=B.a(x([68,45,128,34,1,47,11,245,171]),y.t)
C.ap5=B.a(x([62,17,19,70,146,85,55,62,70]),y.t)
C.aD9=B.a(x([37,43,37,154,100,163,85,160,1]),y.t)
C.aC8=B.a(x([63,9,92,136,28,64,32,201,85]),y.t)
C.aAO=B.a(x([75,15,9,9,64,255,184,119,16]),y.t)
C.at8=B.a(x([86,6,28,5,64,255,25,248,1]),y.t)
C.az3=B.a(x([56,8,17,132,137,255,55,116,128]),y.t)
C.ar1=B.a(x([58,15,20,82,135,57,26,121,40]),y.t)
C.axt=B.a(x([C.av0,C.aCt,C.av3,C.ap5,C.aD9,C.aC8,C.aAO,C.at8,C.az3,C.ar1]),y.S)
C.axU=B.a(x([164,50,31,137,154,133,25,35,218]),y.t)
C.at7=B.a(x([51,103,44,131,131,123,31,6,158]),y.t)
C.aC0=B.a(x([86,40,64,135,148,224,45,183,128]),y.t)
C.awF=B.a(x([22,26,17,131,240,154,14,1,209]),y.t)
C.as9=B.a(x([45,16,21,91,64,222,7,1,197]),y.t)
C.aBA=B.a(x([56,21,39,155,60,138,23,102,213]),y.t)
C.aCU=B.a(x([83,12,13,54,192,255,68,47,28]),y.t)
C.ayg=B.a(x([85,26,85,85,128,128,32,146,171]),y.t)
C.awr=B.a(x([18,11,7,63,144,171,4,4,246]),y.t)
C.atj=B.a(x([35,27,10,146,174,171,12,26,128]),y.t)
C.aw9=B.a(x([C.axU,C.at7,C.aC0,C.awF,C.as9,C.aBA,C.aCU,C.ayg,C.awr,C.atj]),y.S)
C.aAj=B.a(x([190,80,35,99,180,80,126,54,45]),y.t)
C.aB4=B.a(x([85,126,47,87,176,51,41,20,32]),y.t)
C.azM=B.a(x([101,75,128,139,118,146,116,128,85]),y.t)
C.aAE=B.a(x([56,41,15,176,236,85,37,9,62]),y.t)
C.ar9=B.a(x([71,30,17,119,118,255,17,18,138]),y.t)
C.axs=B.a(x([101,38,60,138,55,70,43,26,142]),y.t)
C.awh=B.a(x([146,36,19,30,171,255,97,27,20]),y.t)
C.ayG=B.a(x([138,45,61,62,219,1,81,188,64]),y.t)
C.aBV=B.a(x([32,41,20,117,151,142,20,21,163]),y.t)
C.aB6=B.a(x([112,19,12,61,195,128,48,4,24]),y.t)
C.aA3=B.a(x([C.aAj,C.aB4,C.azM,C.aAE,C.ar9,C.axs,C.awh,C.ayG,C.aBV,C.aB6]),y.S)
C.awU=B.a(x([C.aoX,C.aBC,C.ati,C.atf,C.awV,C.aCW,C.awB,C.axt,C.aw9,C.aA3]),y.o)
C.wH=new A.o6(0,"none")
C.iH=new A.o6(1,"palette")
C.a4L=new A.o6(2,"rgb")
C.b59=new A.o6(3,"gray")
C.b5a=new A.o6(4,"reserved4")
C.b5b=new A.o6(5,"reserved5")
C.b5c=new A.o6(6,"reserved6")
C.b5d=new A.o6(7,"reserved7")
C.b5e=new A.o6(8,"reserved8")
C.iI=new A.o6(9,"paletteRle")
C.a4K=new A.o6(10,"rgbRle")
C.b58=new A.o6(11,"grayRle")
C.ax3=B.a(x([C.wH,C.iH,C.a4L,C.b59,C.b5a,C.b5b,C.b5c,C.b5d,C.b5e,C.iI,C.a4K,C.b58]),B.y("p<o6>"))
C.OA=B.a(x([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250]),y.t)
C.axO=B.a(x([A.ddF(),A.ddM(),A.ddO(),A.ddH(),A.ddK(),A.ddQ(),A.ddJ(),A.ddP(),A.ddG(),A.ddI()]),y.y)
C.Av=B.a(x([8,0,8,0]),y.t)
C.arj=B.a(x([5,3,5,3]),y.t)
C.aq6=B.a(x([3,5,3,5]),y.t)
C.K6=B.a(x([0,8,0,8]),y.t)
C.KD=B.a(x([4,4,4,4]),y.t)
C.aqQ=B.a(x([4,4,0,0]),y.t)
C.OR=B.a(x([C.Av,C.arj,C.aq6,C.K6,C.Av,C.KD,C.aqQ,C.K6]),y.S)
C.OZ=B.a(x([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41]),y.t)
C.ayy=B.a(x([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99]),y.t)
C.tP=B.a(x([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845]),y.t)
C.P3=B.a(x([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127]),y.t)
C.P5=B.a(x([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]),y.t)
C.tX=B.a(x([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567]),y.t)
C.Pi=B.a(x([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232]),y.t)
C.Q0=B.a(x([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0]),y.t)
C.aU7=new A.D5(0,"none")
C.aU8=new A.D5(1,"sub")
C.aU9=new A.D5(2,"up")
C.aUa=new A.D5(3,"average")
C.aUb=new A.D5(4,"paeth")
C.Q1=B.a(x([C.aU7,C.aU8,C.aU9,C.aUa,C.aUb]),B.y("p<D5>"))
C.h8=B.a(x([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]),y.t)
C.n2=B.a(x([0,1,3,7,15,31,63,127,255]),y.t)
C.B7=B.a(x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),y.t)
C.ev=B.a(x([255,255,255,255,255,255,255,255,255,255,255]),y.t)
C.la=B.a(x([C.ev,C.ev,C.ev]),y.S)
C.awl=B.a(x([176,246,255,255,255,255,255,255,255,255,255]),y.t)
C.aCH=B.a(x([223,241,252,255,255,255,255,255,255,255,255]),y.t)
C.asE=B.a(x([249,253,253,255,255,255,255,255,255,255,255]),y.t)
C.awR=B.a(x([C.awl,C.aCH,C.asE]),y.S)
C.avp=B.a(x([255,244,252,255,255,255,255,255,255,255,255]),y.t)
C.auX=B.a(x([234,254,254,255,255,255,255,255,255,255,255]),y.t)
C.Rj=B.a(x([253,255,255,255,255,255,255,255,255,255,255]),y.t)
C.at5=B.a(x([C.avp,C.auX,C.Rj]),y.S)
C.aC_=B.a(x([255,246,254,255,255,255,255,255,255,255,255]),y.t)
C.ayZ=B.a(x([239,253,254,255,255,255,255,255,255,255,255]),y.t)
C.QH=B.a(x([254,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aAL=B.a(x([C.aC_,C.ayZ,C.QH]),y.S)
C.MV=B.a(x([255,248,254,255,255,255,255,255,255,255,255]),y.t)
C.atH=B.a(x([251,255,254,255,255,255,255,255,255,255,255]),y.t)
C.ay_=B.a(x([C.MV,C.atH,C.ev]),y.S)
C.Ap=B.a(x([255,253,254,255,255,255,255,255,255,255,255]),y.t)
C.axR=B.a(x([251,254,254,255,255,255,255,255,255,255,255]),y.t)
C.au1=B.a(x([C.Ap,C.axR,C.QH]),y.S)
C.aqz=B.a(x([255,254,253,255,254,255,255,255,255,255,255]),y.t)
C.avg=B.a(x([250,255,254,255,254,255,255,255,255,255,255]),y.t)
C.u8=B.a(x([254,255,255,255,255,255,255,255,255,255,255]),y.t)
C.avY=B.a(x([C.aqz,C.avg,C.u8]),y.S)
C.auI=B.a(x([C.la,C.awR,C.at5,C.aAL,C.ay_,C.au1,C.avY,C.la]),y.o)
C.apt=B.a(x([217,255,255,255,255,255,255,255,255,255,255]),y.t)
C.awd=B.a(x([225,252,241,253,255,255,254,255,255,255,255]),y.t)
C.azP=B.a(x([234,250,241,250,253,255,253,254,255,255,255]),y.t)
C.aB7=B.a(x([C.apt,C.awd,C.azP]),y.S)
C.Bg=B.a(x([255,254,255,255,255,255,255,255,255,255,255]),y.t)
C.asL=B.a(x([223,254,254,255,255,255,255,255,255,255,255]),y.t)
C.asb=B.a(x([238,253,254,254,255,255,255,255,255,255,255]),y.t)
C.ayT=B.a(x([C.Bg,C.asL,C.asb]),y.S)
C.av1=B.a(x([249,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aBX=B.a(x([C.MV,C.av1,C.ev]),y.S)
C.aBe=B.a(x([255,253,255,255,255,255,255,255,255,255,255]),y.t)
C.axQ=B.a(x([247,254,255,255,255,255,255,255,255,255,255]),y.t)
C.axx=B.a(x([C.aBe,C.axQ,C.ev]),y.S)
C.as_=B.a(x([252,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aq_=B.a(x([C.Ap,C.as_,C.ev]),y.S)
C.Rv=B.a(x([255,254,254,255,255,255,255,255,255,255,255]),y.t)
C.as8=B.a(x([C.Rv,C.Rj,C.ev]),y.S)
C.ayN=B.a(x([255,254,253,255,255,255,255,255,255,255,255]),y.t)
C.Nf=B.a(x([250,255,255,255,255,255,255,255,255,255,255]),y.t)
C.arW=B.a(x([C.ayN,C.Nf,C.u8]),y.S)
C.aqF=B.a(x([C.aB7,C.ayT,C.aBX,C.axx,C.aq_,C.as8,C.arW,C.la]),y.o)
C.aA6=B.a(x([186,251,250,255,255,255,255,255,255,255,255]),y.t)
C.atx=B.a(x([234,251,244,254,255,255,255,255,255,255,255]),y.t)
C.aAN=B.a(x([251,251,243,253,254,255,254,255,255,255,255]),y.t)
C.atY=B.a(x([C.aA6,C.atx,C.aAN]),y.S)
C.atL=B.a(x([236,253,254,255,255,255,255,255,255,255,255]),y.t)
C.ayL=B.a(x([251,253,253,254,254,255,255,255,255,255,255]),y.t)
C.avN=B.a(x([C.Ap,C.atL,C.ayL]),y.S)
C.aAi=B.a(x([254,254,254,255,255,255,255,255,255,255,255]),y.t)
C.atE=B.a(x([C.Rv,C.aAi,C.ev]),y.S)
C.aAW=B.a(x([254,254,255,255,255,255,255,255,255,255,255]),y.t)
C.atI=B.a(x([C.Bg,C.aAW,C.u8]),y.S)
C.Rx=B.a(x([C.ev,C.u8,C.ev]),y.S)
C.aqC=B.a(x([C.atY,C.avN,C.atE,C.atI,C.Rx,C.la,C.la,C.la]),y.o)
C.avb=B.a(x([248,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aui=B.a(x([250,254,252,254,255,255,255,255,255,255,255]),y.t)
C.atv=B.a(x([248,254,249,253,255,255,255,255,255,255,255]),y.t)
C.avS=B.a(x([C.avb,C.aui,C.atv]),y.S)
C.aqc=B.a(x([255,253,253,255,255,255,255,255,255,255,255]),y.t)
C.aBs=B.a(x([246,253,253,255,255,255,255,255,255,255,255]),y.t)
C.au_=B.a(x([252,254,251,254,254,255,255,255,255,255,255]),y.t)
C.aBr=B.a(x([C.aqc,C.aBs,C.au_]),y.S)
C.aD0=B.a(x([255,254,252,255,255,255,255,255,255,255,255]),y.t)
C.atp=B.a(x([248,254,253,255,255,255,255,255,255,255,255]),y.t)
C.arV=B.a(x([253,255,254,254,255,255,255,255,255,255,255]),y.t)
C.ay9=B.a(x([C.aD0,C.atp,C.arV]),y.S)
C.aCS=B.a(x([255,251,254,255,255,255,255,255,255,255,255]),y.t)
C.axi=B.a(x([245,251,254,255,255,255,255,255,255,255,255]),y.t)
C.axr=B.a(x([253,253,254,255,255,255,255,255,255,255,255]),y.t)
C.asx=B.a(x([C.aCS,C.axi,C.axr]),y.S)
C.asC=B.a(x([255,251,253,255,255,255,255,255,255,255,255]),y.t)
C.avu=B.a(x([252,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aAs=B.a(x([C.asC,C.avu,C.Bg]),y.S)
C.arx=B.a(x([255,252,255,255,255,255,255,255,255,255,255]),y.t)
C.aCM=B.a(x([249,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aus=B.a(x([255,255,254,255,255,255,255,255,255,255,255]),y.t)
C.ap4=B.a(x([C.arx,C.aCM,C.aus]),y.S)
C.aDb=B.a(x([255,255,253,255,255,255,255,255,255,255,255]),y.t)
C.atG=B.a(x([C.aDb,C.Nf,C.ev]),y.S)
C.arU=B.a(x([C.avS,C.aBr,C.ay9,C.asx,C.aAs,C.ap4,C.atG,C.Rx]),y.o)
C.aB0=B.a(x([C.auI,C.aqF,C.aqC,C.arU]),y.M)
C.a8r=new A.lH(1,"rle8")
C.a8w=new A.lH(2,"rle4")
C.a8x=new A.lH(4,"jpeg")
C.a8y=new A.lH(5,"png")
C.a8z=new A.lH(7,"reserved7")
C.a8A=new A.lH(8,"reserved8")
C.a8B=new A.lH(9,"reserved9")
C.a8s=new A.lH(10,"reserved10")
C.a8t=new A.lH(11,"cmyk")
C.a8u=new A.lH(12,"cmykRle8")
C.a8v=new A.lH(13,"cmykRle4")
C.QK=B.a(x([C.Fg,C.a8r,C.a8w,C.y5,C.a8x,C.a8y,C.y6,C.a8z,C.a8A,C.a8B,C.a8s,C.a8t,C.a8u,C.a8v]),B.y("p<lH>"))
C.B8=B.a(x([0,128,192,224,240,248,252,254,255]),y.t)
C.B9=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295]),y.t)
C.aBo=B.a(x([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),y.t)
C.aBv=B.a(x([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),y.t)
C.a5v=new A.Kt(0,"predictor")
C.b7L=new A.Kt(1,"crossColor")
C.b7M=new A.Kt(2,"subtractGreen")
C.a5w=new A.Kt(3,"colorIndexing")
C.aBK=B.a(x([C.a5v,C.b7L,C.b7M,C.a5w]),B.y("p<Kt>"))
C.ew=B.a(x([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255]),y.t)
C.aCo=B.a(x([A.ddR(),A.ddL(),A.de0(),A.ddZ(),A.ddT(),A.ddS(),A.ddU()]),y.y)
C.RI=B.a(x([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396]),y.t)
C.aCw=B.a(x([null,A.deh(),A.dei(),A.deg()]),B.y("p<~(r,r,r,r,r,d1)?>"))
C.RS=B.a(x([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),y.t)
C.vm=B.a(x([0,36,72,109,145,182,218,255]),y.t)
C.fv=B.a(x([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255]),y.t)
C.aCJ=B.a(x([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),y.t)
C.jk=B.a(x([0,1,1,2,4,8,1,1,2,4,8,4,8]),y.t)
C.aUv=new A.uo(0,"bitmap")
C.a2a=new A.uo(1,"grayscale")
C.aUw=new A.uo(2,"indexed")
C.a2b=new A.uo(3,"rgb")
C.a2c=new A.uo(4,"cmyk")
C.aUx=new A.uo(5,"multiChannel")
C.aUy=new A.uo(6,"duoTone")
C.a2d=new A.uo(7,"lab")
C.aCL=B.a(x([C.aUv,C.a2a,C.aUw,C.a2b,C.a2c,C.aUx,C.aUy,C.a2d]),B.y("p<uo>"))
C.aCX=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),y.t)
C.vw=B.a(x([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),y.t)
C.Sq=B.a(x([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0]),y.t)
C.apP=B.a(x([2,6,2,6]),y.t)
C.arJ=B.a(x([6,2,6,2]),y.t)
C.apI=B.a(x([2,2,6,6]),y.t)
C.apm=B.a(x([1,3,3,9]),y.t)
C.aqH=B.a(x([4,0,12,0]),y.t)
C.aq4=B.a(x([3,1,9,3]),y.t)
C.asq=B.a(x([8,8,0,0]),y.t)
C.aqJ=B.a(x([4,12,0,0]),y.t)
C.ap7=B.a(x([16,0,0,0]),y.t)
C.ap2=B.a(x([12,4,0,0]),y.t)
C.arT=B.a(x([6,6,2,2]),y.t)
C.aq7=B.a(x([3,9,1,3]),y.t)
C.ap1=B.a(x([12,0,4,0]),y.t)
C.asD=B.a(x([9,3,3,1]),y.t)
C.d3=B.a(x([C.KD,C.apP,C.Av,C.arJ,C.apI,C.apm,C.aqH,C.aq4,C.asq,C.aqJ,C.ap7,C.ap2,C.arT,C.aq7,C.ap1,C.asD]),y.S)
C.lb=B.a(x([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1]),y.t)
C.aNX={ProcessingSoftware:0,SubfileType:1,OldSubfileType:2,ImageWidth:3,ImageLength:4,ImageHeight:5,BitsPerSample:6,Compression:7,PhotometricInterpretation:8,Thresholding:9,CellWidth:10,CellLength:11,FillOrder:12,DocumentName:13,ImageDescription:14,Make:15,Model:16,StripOffsets:17,Orientation:18,SamplesPerPixel:19,RowsPerStrip:20,StripByteCounts:21,MinSampleValue:22,MaxSampleValue:23,XResolution:24,YResolution:25,PlanarConfiguration:26,PageName:27,XPosition:28,YPosition:29,GrayResponseUnit:30,GrayResponseCurve:31,T4Options:32,T6Options:33,ResolutionUnit:34,PageNumber:35,ColorResponseUnit:36,TransferFunction:37,Software:38,DateTime:39,Artist:40,HostComputer:41,Predictor:42,WhitePoint:43,PrimaryChromaticities:44,ColorMap:45,HalftoneHints:46,TileWidth:47,TileLength:48,TileOffsets:49,TileByteCounts:50,BadFaxLines:51,CleanFaxData:52,ConsecutiveBadFaxLines:53,InkSet:54,InkNames:55,NumberofInks:56,DotRange:57,TargetPrinter:58,ExtraSamples:59,SampleFormat:60,SMinSampleValue:61,SMaxSampleValue:62,TransferRange:63,ClipPath:64,JPEGProc:65,JPEGInterchangeFormat:66,JPEGInterchangeFormatLength:67,YCbCrCoefficients:68,YCbCrSubSampling:69,YCbCrPositioning:70,ReferenceBlackWhite:71,ApplicationNotes:72,Rating:73,CFARepeatPatternDim:74,CFAPattern:75,BatteryLevel:76,Copyright:77,ExposureTime:78,FNumber:79,"IPTC-NAA":80,ExifOffset:81,InterColorProfile:82,ExposureProgram:83,SpectralSensitivity:84,GPSOffset:85,ISOSpeed:86,OECF:87,SensitivityType:88,RecommendedExposureIndex:89,ExifVersion:90,DateTimeOriginal:91,DateTimeDigitized:92,OffsetTime:93,OffsetTimeOriginal:94,OffsetTimeDigitized:95,ComponentsConfiguration:96,CompressedBitsPerPixel:97,ShutterSpeedValue:98,ApertureValue:99,BrightnessValue:100,ExposureBiasValue:101,MaxApertureValue:102,SubjectDistance:103,MeteringMode:104,LightSource:105,Flash:106,FocalLength:107,SubjectArea:108,MakerNote:109,UserComment:110,SubSecTime:111,SubSecTimeOriginal:112,SubSecTimeDigitized:113,XPTitle:114,XPComment:115,XPAuthor:116,XPKeywords:117,XPSubject:118,FlashPixVersion:119,ColorSpace:120,ExifImageWidth:121,ExifImageLength:122,RelatedSoundFile:123,InteroperabilityOffset:124,FlashEnergy:125,SpatialFrequencyResponse:126,FocalPlaneXResolution:127,FocalPlaneYResolution:128,FocalPlaneResolutionUnit:129,SubjectLocation:130,ExposureIndex:131,SensingMethod:132,FileSource:133,SceneType:134,CVAPattern:135,CustomRendered:136,ExposureMode:137,WhiteBalance:138,DigitalZoomRatio:139,FocalLengthIn35mmFilm:140,SceneCaptureType:141,GainControl:142,Contrast:143,Saturation:144,Sharpness:145,DeviceSettingDescription:146,SubjectDistanceRange:147,ImageUniqueID:148,CameraOwnerName:149,BodySerialNumber:150,LensSpecification:151,LensMake:152,LensModel:153,LensSerialNumber:154,Gamma:155,PrintIM:156,Padding:157,OffsetSchema:158,OwnerName:159,SerialNumber:160,InteropIndex:161,InteropVersion:162,RelatedImageFileFormat:163,RelatedImageWidth:164,RelatedImageLength:165,GPSVersionID:166,GPSLatitudeRef:167,GPSLatitude:168,GPSLongitudeRef:169,GPSLongitude:170,GPSAltitudeRef:171,GPSAltitude:172,GPSTimeStamp:173,GPSSatellites:174,GPSStatus:175,GPSMeasureMode:176,GPSDOP:177,GPSSpeedRef:178,GPSSpeed:179,GPSTrackRef:180,GPSTrack:181,GPSImgDirectionRef:182,GPSImgDirection:183,GPSMapDatum:184,GPSDestLatitudeRef:185,GPSDestLatitude:186,GPSDestLongitudeRef:187,GPSDestLongitude:188,GPSDestBearingRef:189,GPSDestBearing:190,GPSDestDistanceRef:191,GPSDestDistance:192,GPSProcessingMethod:193,GPSAreaInformation:194,GPSDate:195,GPSDifferential:196}
C.Xt=new B.G(C.aNX,[11,254,255,256,257,257,258,259,262,263,264,265,266,269,270,271,272,273,274,277,278,279,280,281,282,283,284,285,286,287,290,291,292,293,296,297,300,301,305,306,315,316,317,318,319,320,321,322,323,324,325,326,327,328,332,333,334,336,337,338,339,340,341,342,343,512,513,514,529,530,531,532,700,18246,33421,33422,33423,33432,33434,33437,33723,34665,34675,34850,34852,34853,34855,34856,34864,34866,36864,36867,36868,36880,36881,36882,37121,37122,37377,37378,37379,37380,37381,37382,37383,37384,37385,37386,37396,37500,37510,37520,37521,37522,40091,40092,40093,40094,40095,40960,40961,40962,40963,40964,40965,41483,41484,41486,41487,41488,41492,41493,41495,41728,41729,41730,41985,41986,41987,41988,41989,41990,41991,41992,41993,41994,41995,41996,42016,42032,42033,42034,42035,42036,42037,42240,50341,59932,59933,65e3,65001,1,2,4096,4097,4098,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],B.y("G<e,r>"))
C.BA=new B.cT([34665,"exif",40965,"interop",34853,"gps"],B.y("cT<r,e>"))
C.XW=new B.cT([C.ff,1,C.h3,3,C.h4,15,C.a7,255,C.cc,65535,C.j7,4294967295,C.kE,127,C.kF,32767,C.kG,2147483647,C.hK,1,C.j6,1,C.kD,1],B.y("cT<nw,r>"))
C.aUc=new A.awz(0,"none")
C.aUd=new A.awz(4,"paeth")
C.ns=new A.D6(0,"invalid")
C.a1U=new A.D6(1,"pbm")
C.a1V=new A.D6(2,"pgm2")
C.C7=new A.D6(3,"pgm5")
C.a1W=new A.D6(4,"ppm3")
C.C8=new A.D6(5,"ppm6")
C.aWg=new A.bwt(0,"origin")
C.aWh=new A.bww(1,"contain")
C.DN=new A.rR(0,"bilevel")
C.b5j=new A.rR(1,"gray4bit")
C.b5k=new A.rR(2,"gray")
C.b5l=new A.rR(3,"grayAlpha")
C.b5m=new A.rR(4,"palette")
C.a4N=new A.rR(5,"rgb")
C.b5n=new A.rR(6,"rgba")
C.b5o=new A.rR(7,"yCbCrSub")
C.wK=new A.rR(8,"generic")
C.b5p=new A.rR(9,"invalid")
C.o1=new A.SV(0,"undefined")
C.Ed=new A.SV(1,"lossy")
C.wT=new A.SV(2,"lossless")
C.b8c=new A.SV(3,"animated")})();(function staticFields(){$.vx=B.bN("_config")
$.ctv=!0
$.cqo=null
$.cC9=!1
$.cCa=B.a([A.crL(),A.de2(),A.de7(),A.de8(),A.de9(),A.dea(),A.deb(),A.dec(),A.ded(),A.dee(),A.de3(),A.de4(),A.de5(),A.de6(),A.crL(),A.crL()],B.y("p<r(qw,r,r)>"))
$.hE=null
$.cwf=B.bN("_eLut")})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazy
x($,"dko","cK0",()=>A.cq3(C.rs,C.Kg,257,286,15))
x($,"dkn","cK_",()=>A.cq3(C.MR,C.rd,0,30,15))
x($,"dkm","cJZ",()=>A.cq3(null,C.apS,0,19,7))
x($,"dfj","LR",()=>$.hs().gmN(0))
x($,"dnz","cli",()=>{var v=null,u="ISOSpeed"
return B.z([11,A.aJ("ProcessingSoftware",C.bC,v),254,A.aJ("SubfileType",C.cM,1),255,A.aJ("OldSubfileType",C.cM,1),256,A.aJ("ImageWidth",C.cM,1),257,A.aJ("ImageLength",C.cM,1),258,A.aJ("BitsPerSample",C.bi,1),259,A.aJ("Compression",C.bi,1),262,A.aJ("PhotometricInterpretation",C.bi,1),263,A.aJ("Thresholding",C.bi,1),264,A.aJ("CellWidth",C.bi,1),265,A.aJ("CellLength",C.bi,1),266,A.aJ("FillOrder",C.bi,1),269,A.aJ("DocumentName",C.bC,v),270,A.aJ("ImageDescription",C.bC,v),271,A.aJ("Make",C.bC,v),272,A.aJ("Model",C.bC,v),273,A.aJ("StripOffsets",C.cM,v),274,A.aJ("Orientation",C.bi,1),277,A.aJ("SamplesPerPixel",C.bi,1),278,A.aJ("RowsPerStrip",C.cM,1),279,A.aJ("StripByteCounts",C.cM,1),280,A.aJ("MinSampleValue",C.bi,1),281,A.aJ("MaxSampleValue",C.bi,1),282,A.aJ("XResolution",C.e4,1),283,A.aJ("YResolution",C.e4,1),284,A.aJ("PlanarConfiguration",C.bi,1),285,A.aJ("PageName",C.bC,v),286,A.aJ("XPosition",C.e4,1),287,A.aJ("YPosition",C.e4,1),290,A.aJ("GrayResponseUnit",C.bi,1),291,A.aJ("GrayResponseCurve",C.Y,v),292,A.aJ("T4Options",C.Y,v),293,A.aJ("T6Options",C.Y,v),296,A.aJ("ResolutionUnit",C.bi,1),297,A.aJ("PageNumber",C.bi,2),300,A.aJ("ColorResponseUnit",C.Y,v),301,A.aJ("TransferFunction",C.bi,768),305,A.aJ("Software",C.bC,v),306,A.aJ("DateTime",C.bC,v),315,A.aJ("Artist",C.bC,v),316,A.aJ("HostComputer",C.bC,v),317,A.aJ("Predictor",C.bi,1),318,A.aJ("WhitePoint",C.e4,2),319,A.aJ("PrimaryChromaticities",C.e4,6),320,A.aJ("ColorMap",C.bi,v),321,A.aJ("HalftoneHints",C.bi,2),322,A.aJ("TileWidth",C.cM,1),323,A.aJ("TileLength",C.cM,1),324,A.aJ("TileOffsets",C.cM,v),325,A.aJ("TileByteCounts",C.Y,v),326,A.aJ("BadFaxLines",C.Y,v),327,A.aJ("CleanFaxData",C.Y,v),328,A.aJ("ConsecutiveBadFaxLines",C.Y,v),332,A.aJ("InkSet",C.Y,v),333,A.aJ("InkNames",C.Y,v),334,A.aJ("NumberofInks",C.Y,v),336,A.aJ("DotRange",C.Y,v),337,A.aJ("TargetPrinter",C.bC,v),338,A.aJ("ExtraSamples",C.Y,v),339,A.aJ("SampleFormat",C.bi,1),340,A.aJ("SMinSampleValue",C.Y,v),341,A.aJ("SMaxSampleValue",C.Y,v),342,A.aJ("TransferRange",C.Y,v),343,A.aJ("ClipPath",C.Y,v),512,A.aJ("JPEGProc",C.Y,v),513,A.aJ("JPEGInterchangeFormat",C.Y,v),514,A.aJ("JPEGInterchangeFormatLength",C.Y,v),529,A.aJ("YCbCrCoefficients",C.e4,3),530,A.aJ("YCbCrSubSampling",C.bi,1),531,A.aJ("YCbCrPositioning",C.bi,1),532,A.aJ("ReferenceBlackWhite",C.e4,6),700,A.aJ("ApplicationNotes",C.bi,1),18246,A.aJ("Rating",C.bi,1),33421,A.aJ("CFARepeatPatternDim",C.Y,v),33422,A.aJ("CFAPattern",C.Y,v),33423,A.aJ("BatteryLevel",C.Y,v),33432,A.aJ("Copyright",C.bC,v),33434,A.aJ("ExposureTime",C.e4,1),33437,A.aJ("FNumber",C.e4,v),33723,A.aJ("IPTC-NAA",C.cM,1),34665,A.aJ("ExifOffset",C.Y,v),34675,A.aJ("InterColorProfile",C.Y,v),34850,A.aJ("ExposureProgram",C.bi,1),34852,A.aJ("SpectralSensitivity",C.bC,v),34853,A.aJ("GPSOffset",C.Y,v),34855,A.aJ(u,C.cM,1),34856,A.aJ("OECF",C.Y,v),34864,A.aJ("SensitivityType",C.bi,1),34866,A.aJ("RecommendedExposureIndex",C.cM,1),34867,A.aJ(u,C.cM,1),36864,A.aJ("ExifVersion",C.hO,v),36867,A.aJ("DateTimeOriginal",C.bC,v),36868,A.aJ("DateTimeDigitized",C.bC,v),36880,A.aJ("OffsetTime",C.bC,v),36881,A.aJ("OffsetTimeOriginal",C.bC,v),36882,A.aJ("OffsetTimeDigitized",C.bC,v),37121,A.aJ("ComponentsConfiguration",C.hO,v),37122,A.aJ("CompressedBitsPerPixel",C.Y,v),37377,A.aJ("ShutterSpeedValue",C.Y,v),37378,A.aJ("ApertureValue",C.Y,v),37379,A.aJ("BrightnessValue",C.Y,v),37380,A.aJ("ExposureBiasValue",C.Y,v),37381,A.aJ("MaxApertureValue",C.Y,v),37382,A.aJ("SubjectDistance",C.Y,v),37383,A.aJ("MeteringMode",C.Y,v),37384,A.aJ("LightSource",C.Y,v),37385,A.aJ("Flash",C.Y,v),37386,A.aJ("FocalLength",C.Y,v),37396,A.aJ("SubjectArea",C.Y,v),37500,A.aJ("MakerNote",C.hO,v),37510,A.aJ("UserComment",C.hO,v),37520,A.aJ("SubSecTime",C.Y,v),37521,A.aJ("SubSecTimeOriginal",C.Y,v),37522,A.aJ("SubSecTimeDigitized",C.Y,v),40091,A.aJ("XPTitle",C.Y,v),40092,A.aJ("XPComment",C.Y,v),40093,A.aJ("XPAuthor",C.Y,v),40094,A.aJ("XPKeywords",C.Y,v),40095,A.aJ("XPSubject",C.Y,v),40960,A.aJ("FlashPixVersion",C.Y,v),40961,A.aJ("ColorSpace",C.bi,1),40962,A.aJ("ExifImageWidth",C.bi,1),40963,A.aJ("ExifImageLength",C.bi,1),40964,A.aJ("RelatedSoundFile",C.Y,v),40965,A.aJ("InteroperabilityOffset",C.Y,v),41483,A.aJ("FlashEnergy",C.Y,v),41484,A.aJ("SpatialFrequencyResponse",C.Y,v),41486,A.aJ("FocalPlaneXResolution",C.Y,v),41487,A.aJ("FocalPlaneYResolution",C.Y,v),41488,A.aJ("FocalPlaneResolutionUnit",C.Y,v),41492,A.aJ("SubjectLocation",C.Y,v),41493,A.aJ("ExposureIndex",C.Y,v),41495,A.aJ("SensingMethod",C.Y,v),41728,A.aJ("FileSource",C.Y,v),41729,A.aJ("SceneType",C.Y,v),41730,A.aJ("CVAPattern",C.Y,v),41985,A.aJ("CustomRendered",C.Y,v),41986,A.aJ("ExposureMode",C.Y,v),41987,A.aJ("WhiteBalance",C.Y,v),41988,A.aJ("DigitalZoomRatio",C.Y,v),41989,A.aJ("FocalLengthIn35mmFilm",C.Y,v),41990,A.aJ("SceneCaptureType",C.Y,v),41991,A.aJ("GainControl",C.Y,v),41992,A.aJ("Contrast",C.Y,v),41993,A.aJ("Saturation",C.Y,v),41994,A.aJ("Sharpness",C.Y,v),41995,A.aJ("DeviceSettingDescription",C.Y,v),41996,A.aJ("SubjectDistanceRange",C.Y,v),42016,A.aJ("ImageUniqueID",C.Y,v),42032,A.aJ("CameraOwnerName",C.bC,v),42033,A.aJ("BodySerialNumber",C.bC,v),42034,A.aJ("LensSpecification",C.Y,v),42035,A.aJ("LensMake",C.bC,v),42036,A.aJ("LensModel",C.bC,v),42037,A.aJ("LensSerialNumber",C.bC,v),42240,A.aJ("Gamma",C.e4,1),50341,A.aJ("PrintIM",C.Y,v),59932,A.aJ("Padding",C.Y,v),59933,A.aJ("OffsetSchema",C.Y,v),65e3,A.aJ("OwnerName",C.bC,v),65001,A.aJ("SerialNumber",C.bC,v)],y.p,B.y("anK"))})
w($,"dju","aUO",()=>B.Cv(511))
w($,"djv","cl7",()=>B.Cv(511))
w($,"djx","cl8",()=>A.cyp(2041))
w($,"djy","aUP",()=>A.cyp(225))
w($,"djw","pz",()=>B.Cv(766))
x($,"dhO","cIG",()=>A.cxa(0,0,0))
x($,"dkS","on",()=>B.Cv(1))
x($,"dkT","pA",()=>A.cTJ(D.A.gag($.on()),0,null))
x($,"dkL","qI",()=>E.cVi(1))
x($,"dkM","th",()=>J.cMm(D.dP.gag($.qI()),0,null))
x($,"dkN","hV",()=>B.cVl(1))
x($,"dkP","lA",()=>J.aV3(D.bq.gag($.hV()),0,null))
x($,"dkO","Fj",()=>A.cS3(D.bq.gag($.hV())))
x($,"dkJ","aUR",()=>B.cnP(1))
x($,"dkK","cla",()=>A.cBU(D.cj.gag($.aUR()),0))
x($,"dkH","csz",()=>B.bod(1))
x($,"dkI","cKh",()=>A.cBU(D.eX.gag($.csz()),0))
x($,"dkQ","csA",()=>A.d_G(1))
x($,"dkR","cKi",()=>{var v=$.csA()
return A.cS4(v.gag(v))})})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_214",e:"endPart",h:b})})($__dart_deferred_initializers__,"Mub23ca3Vno4ooQjVEMWORiAXWU=");