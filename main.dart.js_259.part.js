((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,A={
cZk(d){var x=new A.a4G()
x.a72(d)
return x},
a4G:function a4G(){this.a=$
this.b=0
this.c=2147483647},
c6u:function c6u(){},
cRV:function cRV(){},
c6v:function c6v(){},
cRW:function cRW(){},
dtZ(d,e,f,g){var x=A.d1f(),w=A.d1f(),v=A.d1f(),u=new Uint16Array(16),t=new Uint32Array(573),s=new Uint8Array(573)
x=new A.bjn(d,f,x,w,v,u,t,s)
x.b9S(e,g)
x.b9R(B.rm)
return x},
d79(d,e,f,g){var x=d[e*2],w=d[f*2]
if(x>=w)x=x===w&&g[e]<=g[f]
else x=!0
return x},
d1f(){return new A.cor()},
dIB(d,e,f){var x,w,v,u,t,s,r,q=new Uint16Array(16)
for(x=0,w=1;w<=15;++w){x=x+f[w-1]<<1>>>0
q[w]=x}for(v=d.$flags|0,u=0;u<=e;++u){t=u*2
s=d[t+1]
if(s===0)continue
r=q[s]
q[s]=r+1
r=A.dIC(r,s)
v&2&&C.L(d)
d[t]=r}},
dIC(d,e){var x,w=0
do{x=A.r6(d,1)
w=(w|d&1)<<1>>>0
if(--e,e>0){d=x
continue}else break}while(!0)
return A.r6(w,1)},
dfF(d){return d<256?B.Sh[d]:B.Sh[256+A.r6(d,7)]},
d1x(d,e,f,g,h){return new A.cJR(d,e,f,g,h)},
r6(d,e){if(d>=0)return D.c.oR(d,e)
else return D.c.oR(d,e)+D.c.eA(2,(~e>>>0)+65536&65535)},
XY:function XY(d,e){this.a=d
this.b=e},
bjn:function bjn(d,e,f,g,h,i,j,k){var _=this
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
_.am=_.ae=_.X=_.a2=_.C=_.bl=_.ba=_.y2=_.y1=_.xr=$},
vb:function vb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cor:function cor(){this.c=this.b=this.a=$},
cJR:function cJR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bxw:function bxw(d,e,f,g){var _=this
_.a=d
_.b=null
_.c=e
_.e=_.d=0
_.r=f
_.w=g},
c6t:function c6t(){},
aqp:function aqp(d,e){this.a=d
this.b=e},
bxP(d,e,f,g){var x,w,v=new A.bxO(e)
if(g==null)g=0
if(f==null)f=d.length-g
x=d.length
if(g+f>x)f=x-g
w=y.D.b(d)?d:new Uint8Array(C.ca(d))
x=J.dz(D.H.gar(w),w.byteOffset+g,f)
v.b=x
v.d=x.length
return v},
bxO:function bxO(d){var _=this
_.b=null
_.c=0
_.d=$
_.a=d},
bxQ:function bxQ(){},
dbh(d,e){var x=e==null?32768:e
return new A.aDt(new Uint8Array(x),d)},
aDt:function aDt(d,e){this.b=0
this.c=d
this.a=e},
bIp:function bIp(){},
a4Q(d,e,f){var x=0,w=C.l(y.D),v
var $async$a4Q=C.h(function(g,h){if(g===1)return C.i(h,w)
while(true)switch(x){case 0:x=3
return C.d(A.KM(d,e,"jpg",new A.bwp(d,e,f),f),$async$a4Q)
case 3:v=h
x=1
break
case 1:return C.j(v,w)}})
return C.k($async$a4Q,w)},
ayt(d,e){var x=0,w=C.l(y.D),v
var $async$ayt=C.h(function(f,g){if(f===1)return C.i(g,w)
while(true)switch(x){case 0:x=3
return C.d(A.KM(d,e,"png",new A.bwq(d,e),null),$async$ayt)
case 3:v=g
x=1
break
case 1:return C.j(v,w)}})
return C.k($async$ayt,w)},
bwr(d,e,f){var x=0,w=C.l(y.D),v
var $async$bwr=C.h(function(g,h){if(g===1)return C.i(h,w)
while(true)switch(x){case 0:x=3
return C.d(A.KM(d,e,"webp",new A.bws(d,e,f),f),$async$bwr)
case 3:v=h
x=1
break
case 1:return C.j(v,w)}})
return C.k($async$bwr,w)},
KM(d,e,f,g,h){return A.dxy(d,e,f,g,h)},
dxy(d,e,f,g,h){var x=0,w=C.l(y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j
var $async$KM=C.h(function(i,a0){if(i===1){t.push(a0)
x=u}while(true)switch(x){case 0:if(!$.d5p){v=g.$0()
x=1
break}m=$.hz().b
m===$&&C.a()
r=m
q="uploads/"+Date.now()+"."+f
u=4
m=r.as
m===$&&C.a()
x=7
return C.d(m.co("images-temp").Tw(q,d),$async$KM)
case 7:p=a0
if(J.bn(p)===0){m=g.$0()
v=m
x=1
break}u=9
m=r.as
m===$&&C.a()
x=12
return C.d(m.co("images-temp").a0H(0,q,new A.c0H(e,h,B.bBN)),$async$KM)
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
m=C.ag(k)
if(m instanceof C.Ny){n=m
if(n.c==="403")$.d5p=!1
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
m===$&&C.a()
x=13
return C.d(m.co("images-temp").I(0,C.b([q],y.T)),$async$KM)
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
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$KM,w)},
cZo(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n=null,m=A.diN(d)
if(m==null)throw C.p(C.cK("Failed to decode "+f+" image"))
x=A.dQr(m,e)
if(f==="jpg"){w=g==null?85:g
v=new Uint8Array(64)
u=new Uint8Array(64)
t=new Float32Array(64)
s=new Float32Array(64)
r=C.c5(65535,n,!1,y.cl)
q=y.s
p=C.c5(65535,n,!1,q)
o=C.c5(64,n,!1,q)
q=C.c5(64,n,!1,q)
v=new A.bz3(v,u,t,s,r,p,o,q,new Int32Array(2048))
v.e=v.W1(B.Z1,B.v4)
v.f=v.W1(B.U2,B.v4)
v.r=v.W1(B.R8,B.Ss)
v.w=v.W1(B.ST,B.Vm)
v.bmL()
v.bmX()
v.aUL(w)
return new Uint8Array(C.ca(v.bOl(x,B.QH)))}else if(f==="png")return new Uint8Array(C.ca(new A.bJQ(B.bzk,6).bOm(x,!1)))
else if(f==="webp")return d
else throw C.p(C.cK("Unsupported image format: "+f))},
dxx(d){var x=d.length
if(x>=2&&d[0]===255&&d[1]===216)return"jpg"
if(x>=8&&d[0]===137&&d[1]===80&&d[2]===78&&d[3]===71)return"png"
if(x>=12&&d[0]===82&&d[1]===73&&d[2]===70&&d[3]===70&&d[8]===87&&d[9]===69&&d[10]===66&&d[11]===80)return"webp"
return"jpg"},
EX(d,e,f){var x=0,w=C.l(y.D),v,u
var $async$EX=C.h(function(g,h){if(g===1)return C.i(h,w)
while(true)switch(x){case 0:u=A.dxx(d)
x=u==="jpg"?3:5
break
case 3:x=6
return C.d(A.a4Q(d,e,f),$async$EX)
case 6:v=h
x=1
break
x=4
break
case 5:x=u==="png"?7:9
break
case 7:x=10
return C.d(A.ayt(d,e),$async$EX)
case 10:v=h
x=1
break
x=8
break
case 9:x=u==="webp"?11:13
break
case 11:x=14
return C.d(A.bwr(d,e,f),$async$EX)
case 14:v=h
x=1
break
x=12
break
case 13:x=15
return C.d(A.a4Q(d,e,f),$async$EX)
case 15:v=h
x=1
break
case 12:case 8:case 4:case 1:return C.j(v,w)}})
return C.k($async$EX,w)},
bwp:function bwp(d,e,f){this.a=d
this.b=e
this.c=f},
bwq:function bwq(d,e){this.a=d
this.b=e},
bws:function bws(d,e,f){this.a=d
this.b=e
this.c=f},
bbw:function bbw(d,e){this.a=d
this.b=e},
ix:function ix(d){this.a=-1
this.b=d},
R5:function R5(d){this.a=d},
R6:function R6(d){this.a=d},
R7:function R7(d){this.a=d},
R8:function R8(d){this.a=d},
R9:function R9(d){this.a=d},
Ra:function Ra(d){this.a=d},
Rd:function Rd(d,e){this.a=d
this.b=e},
Re:function Re(d){this.a=d},
Rf:function Rf(d,e){this.a=d
this.b=e},
Rg:function Rg(d){this.a=d},
Rh:function Rh(d,e){this.a=d
this.b=e},
dsp(d,e,f,g){var x=new A.Rb(new Uint8Array(4))
x.b2b(d,e,f,g)
return x},
Aj:function Aj(d){this.a=d},
ark:function ark(d){this.a=d},
Rb:function Rb(d){this.a=d},
a1n:function a1n(d){this.a=d},
arx:function arx(d){this.a=d},
b3J(d,e,f){var x
if(e===f)return d
switch(e.a){case 0:if(d===0)x=0
else{x=B.a7p.h(0,f)
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
case 1:return D.c.W(C.bA(d),1)
case 2:return d
case 3:return d*17
case 4:return d*4369
case 5:return d*286331153
case 6:return d*8
case 7:return d*2184
case 8:return d*143165576
case 9:case 10:case 11:return d/3}break
case 3:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.W(C.bA(d),6)
case 2:return D.c.W(C.bA(d),4)
case 3:return d
case 4:return d*257
case 5:return d*16843009
case 6:return D.c.W(C.bA(d),1)
case 7:return d*128
case 8:return d*8421504
case 9:case 10:case 11:return d/255}break
case 4:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.W(C.bA(d),14)
case 2:return D.c.W(C.bA(d),12)
case 3:return D.c.W(C.bA(d),8)
case 4:return d
case 5:return C.bA(d)<<8>>>0
case 6:return D.c.W(C.bA(d),9)
case 7:return D.c.W(C.bA(d),1)
case 8:return d*524296
case 9:case 10:case 11:return d/65535}break
case 5:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.W(C.bA(d),30)
case 2:return D.c.W(C.bA(d),28)
case 3:return D.c.W(C.bA(d),24)
case 4:return D.c.W(C.bA(d),16)
case 5:return d
case 6:return D.c.W(C.bA(d),25)
case 7:return D.c.W(C.bA(d),17)
case 8:return D.c.W(C.bA(d),1)
case 9:case 10:case 11:return d/4294967295}break
case 6:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.W(C.bA(d),5)
case 2:return d<=0?0:D.c.W(C.bA(d),3)
case 3:return d<=0?0:C.bA(d)<<1>>>0
case 4:return d<=0?0:C.bA(d)*516
case 5:return d<=0?0:C.bA(d)*33818640
case 6:return d
case 7:return d*258
case 8:return d*16909320
case 9:case 10:case 11:return d/127}break
case 7:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.W(C.bA(d),15)
case 2:return d<=0?0:D.c.W(C.bA(d),11)
case 3:return d<=0?0:D.c.W(C.bA(d),7)
case 4:return d<=0?0:C.bA(d)<<1>>>0
case 5:return d<=0?0:C.bA(d)*131076
case 6:return D.c.W(C.bA(d),8)
case 7:return d
case 8:return C.bA(d)*65538
case 9:case 10:case 11:return d/32767}break
case 8:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.c.W(C.bA(d),29)
case 2:return d<=0?0:D.c.W(C.bA(d),27)
case 3:return d<=0?0:D.c.W(C.bA(d),23)
case 4:return d<=0?0:D.c.W(C.bA(d),16)
case 5:return d<=0?0:C.bA(d)<<1>>>0
case 6:return D.c.W(C.bA(d),24)
case 7:return D.c.W(C.bA(d),16)
case 8:return d
case 9:case 10:case 11:return d/2147483647}break
case 9:case 10:case 11:switch(f.a){case 0:return d===0?0:1
case 1:return D.e.L(D.e.aK(d,0,1)*3)
case 2:return D.e.L(D.e.aK(d,0,1)*15)
case 3:return D.e.L(D.e.aK(d,0,1)*255)
case 4:return D.e.L(D.e.aK(d,0,1)*65535)
case 5:return D.e.L(D.e.aK(d,0,1)*4294967295)
case 6:return D.e.L(d<0?D.e.aK(d,-1,1)*128:D.e.aK(d,-1,1)*127)
case 7:return D.e.L(d<0?D.e.aK(d,-1,1)*32768:D.e.aK(d,-1,1)*32767)
case 8:return D.e.L(d<0?D.e.aK(d,-1,1)*2147483648:D.e.aK(d,-1,1)*2147483647)
case 9:case 10:case 11:return d}break}},
p9:function p9(d,e){this.a=d
this.b=e},
aq9:function aq9(d,e){this.a=d
this.b=e},
a3o(d){var x=new A.Sm(C.H(y.N,y.P))
x.b2p(d)
return x},
d7V(d){var x=new A.Sm(C.H(y.N,y.P))
x.oH(0,d)
return x},
Sm:function Sm(d){this.a=d},
aRT:function aRT(d,e){this.a=d
this.b=e},
aW(d,e,f){return new A.avE(d,e)},
avE:function avE(d,e){this.a=d
this.b=e},
w7:function w7(d){this.a=d},
bwh:function bwh(d){this.a=d},
d92(d){var x=new A.rF(C.H(y.p,y.r),new A.w7(C.H(y.N,y.P)))
x.aeM(d)
return x},
rF:function rF(d,e){this.a=d
this.b=e},
bwi:function bwi(d){this.a=d},
bwj:function bwj(d){this.a=d},
dxw(d){var x=new Uint16Array(1)
x[0]=d
return new A.AW(x)},
d9a(d,e){var x=new A.AW(new Uint16Array(e))
x.b2u(d,e)
return x},
dxv(d){var x=new Uint32Array(1)
x[0]=d
return new A.u9(x)},
d95(d,e){var x=new A.u9(new Uint32Array(e))
x.b2r(d,e)
return x},
d96(d,e){var x,w=J.jt(e,y.i)
for(x=0;x<e;++x)w[x]=new A.pv(d.ai(),d.ai())
return new A.w8(w)},
d99(d,e){var x=new A.AV(new Int16Array(e))
x.b2t(d,e)
return x},
d97(d,e){var x=new A.AU(new Int32Array(e))
x.b2s(d,e)
return x},
d98(d,e){var x,w,v,u,t=J.jt(e,y.i)
for(x=0;x<e;++x){w=d.ai()
v=$.iu()
v.$flags&2&&C.L(v)
v[0]=w
w=$.m0()
u=w[0]
v[0]=d.ai()
t[x]=new A.pv(u,w[0])}return new A.w9(t)},
d9b(d){var x=new Float32Array(1)
x[0]=d
return new A.ET(x)},
d9c(d,e){var x=new A.ET(new Float32Array(e))
x.b2v(d,e)
return x},
d93(d){var x=new Float64Array(1)
x[0]=d
return new A.ES(x)},
d94(d,e){var x=new A.ES(new Float64Array(e))
x.b2q(d,e)
return x},
oj:function oj(d,e){this.a=d
this.b=e},
l9:function l9(){},
w6:function w6(d){this.a=d},
ER:function ER(d){this.a=d},
AW:function AW(d){this.a=d},
u9:function u9(d){this.a=d},
w8:function w8(d){this.a=d},
ys:function ys(d){this.a=d},
AV:function AV(d){this.a=d},
AU:function AU(d){this.a=d},
w9:function w9(d){this.a=d},
ET:function ET(d){this.a=d},
ES:function ES(d){this.a=d},
KK:function KK(d){this.a=d},
d5R(d){var x,w,v=new A.ba5()
if(!A.cXQ(d))C.a8(A.cp("Not a bitmap file."))
d.d+=2
x=d.ai()
w=$.iu()
w.$flags&2&&C.L(w)
w[0]=x
x=$.m0()
d.d+=4
w[0]=d.ai()
v.b=x[0]
return v},
cXQ(d){if(d.c-d.d<2)return!1
return A.cu(d,null,0).aw()===19778},
drG(d,e){var x,w,v,u,t=e==null?A.d5R(d):e,s=d.d,r=d.ai(),q=d.ai(),p=$.iu()
p.$flags&2&&C.L(p)
p[0]=q
q=$.m0()
x=q[0]
p[0]=d.ai()
q=q[0]
w=d.aw()
v=d.aw()
u=B.Xr[d.ai()]
d.ai()
p[0]=d.ai()
p[0]=d.ai()
p=d.ai()
d.ai()
s=new A.IP(t,x,q,r,w,v,u,p,s)
s.aoL(d,e)
return s},
ni:function ni(d,e){this.a=d
this.b=e},
ba5:function ba5(){this.b=$},
IP:function IP(d,e,f,g,h,i,j,k,l){var _=this
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
aqd:function aqd(d){this.a=$
this.b=null
this.c=d},
ba4:function ba4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bkn:function bkn(d){this.a=$
this.b=null
this.c=d},
bj5:function bj5(){},
bj6:function bj6(){},
bn9:function bn9(){},
avG:function avG(d,e,f){this.a=d
this.b=e
this.c=f},
az5:function az5(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
So:function So(d,e){this.a=d
this.b=e},
JY:function JY(d,e){this.a=d
this.b=e},
avH:function avH(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
d7X(d,e,f,g){var x,w
switch(d.a){case 1:return new A.by1(f,e)
case 2:return new A.az7(f,g==null?1:g,e)
case 3:return new A.az7(f,g==null?16:g,e)
case 4:x=g==null?32:g
w=new A.by_(f,x,e)
w.b2D(e,f,x)
return w
case 5:return new A.by0(f,g==null?16:g,e)
case 6:return new A.az5(f,g==null?32:g,!1,e)
case 7:return new A.az5(f,g==null?32:g,!0,e)
default:throw C.p(A.cp("Invalid compression type: "+d.j(0)))}},
vW:function vW(d,e){this.a=d
this.b=e},
boM:function boM(){},
bxZ:function bxZ(){},
dvv(d,e,f,g){var x,w,v,u,t,s,r,q
if(e===0){if(g!==0)throw C.p(A.cp("Incomplete huffman data"))
return}x=d.d
w=d.ai()
v=d.ai()
d.d+=4
u=d.ai()
t=!0
if(w<65537)t=v>=65537
if(t)throw C.p(A.cp("Invalid huffman table size"))
d.d+=4
s=C.c5(65537,0,!1,y.p)
r=J.jM(16384,y.W)
for(q=0;q<16384;++q)r[q]=new A.avI()
A.dvw(d,e-20,w,v,s)
if(u>8*(e-(d.d-x)))throw C.p(A.cp("Error in header for Huffman-encoded data (invalid number of bits)."))
A.dvs(s,w,v,r)
A.dvu(s,r,d,u,v,g,f)},
dvu(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p="Error in Huffman-encoded data (invalid code).",o=C.b([0,0],y.t),n=f.d+D.c.aL(g+7,8)
for(x=0;f.d<n;){A.cYQ(o,f)
for(;w=o[1],w>=14;){v=e[D.c.oR(o[0],w-14)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cYR(v.b,h,o,f,j,x,i)}else{if(v.c==null)throw C.p(A.cp(p))
for(t=0;t<v.b;++t){s=d[v.c[t]]&63
while(!0){w=o[1]
if(!(w<s&&f.d<n))break
A.cYQ(o,f)}if(w>=s){u=v.c
w-=s
if(d[u[t]]>>>6===(D.c.oR(o[0],w)&D.c.eA(1,s)-1)>>>0){o[1]=w
r=A.cYR(u[t],h,o,f,j,x,i)
x=r
break}}}if(t===v.b)throw C.p(A.cp(p))}}}q=8-g&7
o[0]=D.c.W(o[0],q)
o[1]=o[1]-q
for(;w=o[1],w>0;){v=e[D.c.f7(o[0],14-w)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cYR(v.b,h,o,f,j,x,i)}else throw C.p(A.cp(p))}if(x!==i)throw C.p(A.cp("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
cYR(d,e,f,g,h,i,j){var x,w,v,u,t,s="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)A.cYQ(f,g)
x=f[1]-8
f[1]=x
w=D.c.oR(f[0],x)&255
if(i+w>j)throw C.p(A.cp(s))
v=h[i-1]
for(x=h.$flags|0;u=w-1,w>0;w=u,i=t){t=i+1
x&2&&C.L(h)
h[i]=v}}else{if(i<j){h.toString
t=i+1
h.$flags&2&&C.L(h)
h[i]=d}else throw C.p(A.cp(s))
i=t}return i},
dvs(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n="Error in Huffman-encoded data (invalid code table entry)."
for(x=y.t,w=y.p;e<=f;++e){v=d[e]
u=v>>>6
t=v&63
if(D.c.i3(u,t)!==0)throw C.p(A.cp(n))
if(t>14){s=g[D.c.hv(u,t-14)]
if(s.a!==0)throw C.p(A.cp(n))
v=++s.b
r=s.c
if(r!=null){v=C.c5(v,0,!1,w)
s.c=v
for(q=s.b-1,p=0;p<q;++p)v[p]=r[p]}else s.c=C.b([0],x)
s.c[s.b-1]=e}else if(t!==0){v=14-t
o=D.c.f7(u,v)
for(p=D.c.f7(1,v);p>0;--p,++o){s=g[o]
if(s.a!==0||s.c!=null)throw C.p(A.cp(n))
s.a=t
s.b=e}}}},
dvw(d,e,f,g,h){var x,w,v,u,t,s="Error in Huffman-encoded data (unexpected end of code table data).",r="Error in Huffman-encoded data (code table is longer than expected).",q=d.d,p=C.b([0,0],y.t)
for(x=g+1;f<=g;++f){if(d.d-q>e)throw C.p(A.cp(s))
w=A.d7Y(6,p,d)
h[f]=w
if(w===63){if(d.d-q>e)throw C.p(A.cp(s))
v=A.d7Y(8,p,d)+6
if(f+v>x)throw C.p(A.cp(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}else if(w>=59){v=w-59+2
if(f+v>x)throw C.p(A.cp(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}}A.dvt(h)},
dvt(d){var x,w,v,u,t,s=C.c5(59,0,!1,y.p)
for(x=0;x<65537;++x){w=d[x]
s[w]=s[w]+1}for(v=0,x=58;x>0;--x,v=u){u=v+s[x]>>>1
s[x]=v}for(x=0;x<65537;++x){t=d[x]
if(t>0){w=s[t]
s[t]=w+1
d[x]=(t|w<<6)>>>0}}},
cYQ(d,e){d[0]=((d[0]<<8|e.cM())&-1)>>>0
d[1]=(d[1]+8&-1)>>>0},
d7Y(d,e,f){var x
for(;x=e[1],x<d;){e[0]=((e[0]<<8|J.v(f.a,f.d++))&-1)>>>0
e[1]=(e[1]+8&-1)>>>0}x-=d
e[1]=x
return(D.c.oR(e[0],x)&D.c.eA(1,d)-1)>>>0},
avI:function avI(){this.b=this.a=0
this.c=null},
dvx(d){var x=A.dl(d,!1,null,0)
if(x.ai()!==20000630)return!1
if(x.cM()!==2)return!1
if((x.tE()&4294967289)>>>0!==0)return!1
return!0},
boO:function boO(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
d9A(d,e,f){var x=new A.az6(d,C.b([],y.Q),C.H(y.N,y.n),B.OW,e)
x.b2h(d,e,f)
return x},
a3u:function a3u(){},
boP:function boP(d,e){this.a=d
this.b=e},
az6:function az6(d,e,f,g,h){var _=this
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
by_:function by_(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
aVr:function aVr(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
by0:function by0(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
by1:function by1(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
az7:function az7(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
boN:function boN(){this.a=null},
d8B(d){var x=new Uint8Array(d*3)
return new A.a4a(A.dwT(d),d,null,new A.ws(x,d,3))},
dwS(d){return new A.a4a(d.a,d.b,d.c,A.dbn(d.d))},
dwT(d){var x
for(x=1;x<=8;++x)if(D.c.eA(1,x)>=d)return x
return 0},
a4a:function a4a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4b:function a4b(){},
az8:function az8(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=$},
axf:function axf(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
btq:function btq(){var _=this
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
d9_(d){var x,w,v,u,t,s
if(d.aw()!==0)return null
x=d.aw()
if(x>=3)return null
w=B.aE2[x]
if(w===B.Ps)return null
v=d.aw()
u=J.jt(v,y.Y)
for(t=0;t<v;++t){J.v(d.a,d.d++)
s=J.v(d.a,d.d++)
J.v(d.a,d.d++);++d.d
d.aw()
d.aw()
u[t]=new A.ayg(s,d.ai(),d.ai())}return new A.bw0(w,v,u)},
ST:function ST(d,e){this.a=d
this.b=e},
bw0:function bw0(d,e,f){this.c=d
this.d=e
this.e=f},
ayg:function ayg(d,e,f){this.b=d
this.d=e
this.e=f},
bvZ:function bvZ(d,e,f,g,h,i,j,k,l){var _=this
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
bw_:function bw_(){this.b=this.a=null},
arp:function arp(d,e,f){this.e=d
this.f=e
this.r=f},
KC:function KC(){},
KD:function KD(d){this.a=d},
a4H:function a4H(d){this.a=d},
bz_:function bz_(){this.d=null},
Fd:function Fd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.y=_.x=_.w=_.r=_.f=_.e=$},
d9V(){var x=C.c5(4,null,!1,y.a7),w=C.b([],y.cB),v=y.bT,u=J.Fa(0,v)
v=J.Fa(0,v)
return new A.bz1(new A.Sm(C.H(y.N,y.P)),x,w,u,v,C.b([],y.E))},
bz1:function bz1(d,e,f,g,h,i){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i},
bz2:function bz2(d,e){this.a=d
this.b=e},
Yu:function Yu(d){this.a=d
this.b=0},
azp:function azp(d,e){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=d
_.z=e},
bz5:function bz5(){this.r=this.f=$},
azq:function azq(d,e,f,g,h,i,j,k){var _=this
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
azo:function azo(){},
bz0:function bz0(d,e){this.a=d
this.b=e},
bz3:function bz3(d,e,f,g,h,i,j,k,l){var _=this
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
UE:function UE(d,e){this.a=d
this.b=e},
a85:function a85(d,e){this.a=d
this.b=e},
a86:function a86(){},
az9:function az9(d,e,f,g,h,i,j,k,l){var _=this
_.y=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
d9C(){var x=y.N
return new A.by3(C.H(x,x),C.b([],y.d),C.b([],y.t))},
G1:function G1(d,e){this.a=d
this.b=e},
bJS:function bJS(){},
by3:function by3(d,e,f){var _=this
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
aEe:function aEe(d){var _=this
_.a=d
_.c=_.b=0
_.d=$
_.e=0},
aEf:function aEf(d,e){this.a=d
this.b=e},
bJQ:function bJQ(d,e){var _=this
_.a=null
_.b=d
_.c=0
_.d=e
_.e=$
_.f=0
_.r=!1
_.w=null},
G2:function G2(d,e){this.a=d
this.b=e},
Md:function Md(d){this.b=this.a=0
this.e=d},
bJT:function bJT(d){this.b=this.a=null
this.c=d},
bJU:function bJU(){},
aEI:function aEI(){this.b=this.a=null},
aEJ:function aEJ(){this.b=this.a=null},
yU:function yU(){},
aEL:function aEL(){this.b=this.a=null},
aEM:function aEM(){this.b=this.a=null},
aEP:function aEP(){this.b=this.a=null},
aEQ:function aEQ(){this.b=this.a=null},
a8u:function a8u(d){this.b=d},
aEO:function aEO(){this.b=$
this.c=null},
bKX:function bKX(){var _=this
_.w=_.r=_.f=_.e=$},
UV:function UV(d){this.a=d
this.c=null},
dbL(d){var x=new A.bKZ(C.H(y.p,y.a2))
x.b2Q(d)
return x},
d_B(d,e,f,g){var x=d/255,w=e/255,v=f/255,u=g/255,t=w*(1-v),s=x*(1-u)
return D.e.L(D.e.aK((2*x<v?2*w*x+t+s:u*v-2*(v-x)*(u-w)+t+s)*255,0,255))},
bL_(d,e){if(e===0)return 0
return D.c.L(D.c.aK(D.e.L(255*(1-(1-d/255)/(e/255))),0,255))},
bL1(d,e){return D.c.L(D.c.aK(d+e-255,0,255))},
d_D(d,e){return D.c.L(D.c.aK(255-(255-e)*(255-d),0,255))},
bL0(d,e){if(e===255)return 255
return D.e.L(D.e.aK(d/255/(1-e/255)*255,0,255))},
d_E(d,e){var x=d/255,w=e/255,v=1-w
return D.e.aE(255*(v*w*x+w*(1-v*(1-x))))},
d_z(d,e){var x=e/255,w=d/255
if(w<0.5)return D.e.aE(510*x*w)
else return D.e.aE(255*(1-2*(1-x)*(1-w)))},
d_F(d,e){if(e<128)return A.bL_(d,2*e)
else return A.bL0(d,2*(e-128))},
d_A(d,e){var x
if(e<128)return A.bL1(d,2*e)
else{x=2*(e-128)
return x+d>255?255:d+x}},
d_C(d,e){return e<128?Math.min(d,2*e):Math.max(d,2*(e-128))},
d_y(d,e){return D.e.aE(e+d-2*e*d/255)},
qA(d,e,f){var x
if(d==null)x=0
else x=f===1?d[e]:(d[e]<<8|d[e+1])>>>8
return x},
dbM(b5,b6,b7,b8,b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4=C.H(y.p,y.aG)
for(x=b9.length,w=0;v=b9.length,w<v;b9.length===x||(0,C.K)(b9),++w){u=b9[w]
b4.m(0,u.a,u)}if(b6===8)t=1
else t=b6===16?2:-1
s=A.iO(b3,b3,B.ai,0,B.bD,b8,b3,0,v,b3,B.ai,b7,!1)
if(t===-1)throw C.p(A.cp("PSD: unsupported bit depth: "+C.o(b6)))
r=b4.h(0,0)
q=b4.h(0,1)
p=b4.h(0,2)
o=b4.h(0,-1)
n=C.b([0,0,0],y.t)
m=-t
for(x=s.a,x=x.gad(x),l=v>=5,k=v===4,j=v>=2,v=v>=4;x.t();){i=x.gM(x)
m+=t
switch(b5){case B.acO:i.sau(0,A.qA(r.c,m,t))
i.saF(A.qA(q.c,m,t))
i.saH(0,A.qA(p.c,m,t))
i.saV(0,v?A.qA(o.c,m,t):255)
if(i.gaV(i)!==0){i.sau(0,(i.gau(i)+i.gaV(i)-255)*255/i.gaV(i))
i.saF((i.gaF()+i.gaV(i)-255)*255/i.gaV(i))
i.saH(0,(i.gaH(i)+i.gaV(i)-255)*255/i.gaV(i))}break
case B.acQ:h=A.qA(r.c,m,t)
g=A.qA(q.c,m,t)
f=A.qA(p.c,m,t)
e=v?A.qA(o.c,m,t):255
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
a8=[D.e.L(D.e.aK(a5*255,0,255)),D.e.L(D.e.aK(a6*255,0,255)),D.e.L(D.e.aK(a7*255,0,255))]
i.sau(0,a8[0])
i.saF(a8[1])
i.saH(0,a8[2])
i.saV(0,e)
break
case B.acN:a9=A.qA(r.c,m,t)
e=j?A.qA(o.c,m,t):255
i.sau(0,a9)
i.saF(a9)
i.saH(0,a9)
i.saV(0,e)
break
case B.acP:b0=A.qA(r.c,m,t)
b1=A.qA(q.c,m,t)
d=A.qA(p.c,m,t)
b2=A.qA(b4.h(0,k?-1:3).c,m,t)
e=l?A.qA(o.c,m,t):255
A.diu(255-b0,255-b1,255-d,255-b2,n)
i.sau(0,n[0])
i.saF(n[1])
i.saH(0,n[2])
i.saV(0,e)
break
default:throw C.p(A.cp("Unhandled color mode: "+C.o(b5)))}}return s},
wA:function wA(d,e){this.a=d
this.b=e},
bKZ:function bKZ(d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=_.w=$
_.y=null
_.z=d
_.as=$
_.ay=_.ax=_.at=null},
aEK:function aEK(d,e){this.a=d
this.b=e},
aEN:function aEN(d,e,f){var _=this
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
dBn(d,e){var x,w
switch(d){case"lsct":x=new A.aEO()
w=e.c-e.d
x.b=e.ai()
if(w>=12){if(e.jS(4)!=="8BIM")C.a8(A.cp("Invalid key in layer additional data"))
x.c=e.jS(4)}if(w>=16)e.ai()
return x
default:return new A.a8u(e)}},
UW:function UW(){},
bKY:function bKY(){this.a=null},
aET:function aET(){},
BI:function BI(d,e,f){this.a=d
this.b=e
this.c=f},
nA:function nA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a8x:function a8x(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
UZ:function UZ(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
aES:function aES(){this.y=this.b=this.a=0},
BJ(d,e){return(B.xt[d>>>8]<<17|B.xt[e>>>8]<<16|B.xt[d&255]<<1|B.xt[e&255])>>>0},
uz:function uz(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
bL2:function bL2(){this.b=this.a=null},
aJr:function aJr(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
pH:function pH(d,e){this.a=d
this.b=e},
bYq:function bYq(){this.a=null
this.b=$},
bZy:function bZy(d){this.a=d
this.c=this.b=0},
aJw:function aJw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
d0s(d,e,f){var x=new A.bZA(e,f,d),w=y.s
x.e=C.c5(e,null,!1,w)
x.f=C.c5(e,null,!1,w)
return x},
bZA:function bZA(d,e,f){var _=this
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
aJx:function aJx(d,e,f,g){var _=this
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
NW:function NW(d,e){this.a=d
this.b=e},
lS:function lS(d,e){this.a=d
this.b=e},
uV:function uV(d,e){this.a=d
this.b=e},
bZB:function bZB(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
dai(){return new A.bAL(new Uint8Array(4096))},
bAL:function bAL(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
bZz:function bZz(){this.a=null
this.c=$},
d0U(d,e){var x=new Int32Array(4),w=new Int32Array(4),v=new Int8Array(4),u=new Int8Array(4),t=C.c5(8,null,!1,y.ak),s=C.c5(4,null,!1,y.Z)
return new A.c4v(d,e,new A.c4B(),new A.c4F(),new A.c4x(x,w),new A.c4H(v,u),t,s,new Uint8Array(4))},
df1(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
c4v:function c4v(d,e,f,g,h,i,j,k,l){var _=this
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
_.ba=$
_.bl=null
_.a2=_.C=$
_.X=null
_.ae=$},
c4I:function c4I(){},
deZ(d){var x=new A.ads(d)
x.b=254
x.c=0
x.d=-8
return x},
ads:function ads(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
fi(d,e,f){return D.c.lA(D.c.W(d+2*e+f+2,2),32)},
dGq(d){var x,w=C.b([A.fi(J.v(d.a,d.d+-33),J.v(d.a,d.d+-32),J.v(d.a,d.d+-31)),A.fi(J.v(d.a,d.d+-32),J.v(d.a,d.d+-31),J.v(d.a,d.d+-30)),A.fi(J.v(d.a,d.d+-31),J.v(d.a,d.d+-30),J.v(d.a,d.d+-29)),A.fi(J.v(d.a,d.d+-30),J.v(d.a,d.d+-29),J.v(d.a,d.d+-28))],y.t)
for(x=0;x<4;++x)d.Bj(x*32,4,w)},
dGi(d){var x=J.v(d.a,d.d+-33),w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95),s=A.cu(d,null,0),r=s.Tg(),q=A.fi(x,w,v)
r.$flags&2&&C.L(r)
r[0]=16843009*q
s.d+=32
q=s.Tg()
r=A.fi(w,v,u)
q.$flags&2&&C.L(q)
q[0]=16843009*r
s.d+=32
r=s.Tg()
q=A.fi(v,u,t)
r.$flags&2&&C.L(r)
r[0]=16843009*q
s.d+=32
q=s.Tg()
r=A.fi(u,t,t)
q.$flags&2&&C.L(q)
q[0]=16843009*r},
dGg(d){var x,w,v,u
for(x=4,w=0;w<4;++w)x+=J.v(d.a,d.d+(w-32))+J.v(d.a,d.d+(-1+w*32))
x=D.c.W(x,3)
for(w=0;w<4;++w){v=d.a
u=d.d+w*32
J.vn(v,u,u+4,x)}},
d0V(d,e){var x,w,v,u,t,s=255-J.v(d.a,d.d+-33)
for(x=0,w=0;w<e;++w){v=s+J.v(d.a,d.d+(x-1))
for(u=0;u<e;++u){t=$.rc()[v+J.v(d.a,d.d+(-32+u))]
J.c_(d.a,d.d+(x+u),t)}x+=32}},
dGo(d){A.d0V(d,4)},
dGp(d){A.d0V(d,8)},
dGn(d){A.d0V(d,16)},
dGm(d){var x,w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95),s=J.v(d.a,d.d+-33),r=J.v(d.a,d.d+-32),q=J.v(d.a,d.d+-31),p=J.v(d.a,d.d+-30),o=J.v(d.a,d.d+-29)
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
dGl(d){var x,w=J.v(d.a,d.d+-32),v=J.v(d.a,d.d+-31),u=J.v(d.a,d.d+-30),t=J.v(d.a,d.d+-29),s=J.v(d.a,d.d+-28),r=J.v(d.a,d.d+-27),q=J.v(d.a,d.d+-26),p=J.v(d.a,d.d+-25)
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
dGs(d){var x=J.v(d.a,d.d+-1),w=J.v(d.a,d.d+31),v=J.v(d.a,d.d+63),u=J.v(d.a,d.d+-33),t=J.v(d.a,d.d+-32),s=J.v(d.a,d.d+-31),r=J.v(d.a,d.d+-30),q=J.v(d.a,d.d+-29),p=D.c.lA(D.c.W(u+t+1,1),32)
d.m(0,65,p)
d.m(0,0,p)
p=D.c.lA(D.c.W(t+s+1,1),32)
d.m(0,66,p)
d.m(0,1,p)
p=D.c.lA(D.c.W(s+r+1,1),32)
d.m(0,67,p)
d.m(0,2,p)
d.m(0,3,D.c.lA(D.c.W(r+q+1,1),32))
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
dGr(d){var x,w=J.v(d.a,d.d+-32),v=J.v(d.a,d.d+-31),u=J.v(d.a,d.d+-30),t=J.v(d.a,d.d+-29),s=J.v(d.a,d.d+-28),r=J.v(d.a,d.d+-27),q=J.v(d.a,d.d+-26),p=J.v(d.a,d.d+-25)
d.m(0,0,D.c.lA(D.c.W(w+v+1,1),32))
x=D.c.lA(D.c.W(v+u+1,1),32)
d.m(0,64,x)
d.m(0,1,x)
x=D.c.lA(D.c.W(u+t+1,1),32)
d.m(0,65,x)
d.m(0,2,x)
x=D.c.lA(D.c.W(t+s+1,1),32)
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
dGj(d){var x,w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95)
d.m(0,0,D.c.lA(D.c.W(w+v+1,1),32))
x=D.c.lA(D.c.W(v+u+1,1),32)
d.m(0,32,x)
d.m(0,2,x)
x=D.c.lA(D.c.W(u+t+1,1),32)
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
dGh(d){var x=J.v(d.a,d.d+-1),w=J.v(d.a,d.d+31),v=J.v(d.a,d.d+63),u=J.v(d.a,d.d+95),t=J.v(d.a,d.d+-33),s=J.v(d.a,d.d+-32),r=J.v(d.a,d.d+-31),q=J.v(d.a,d.d+-30),p=D.c.lA(D.c.W(x+t+1,1),32)
d.m(0,34,p)
d.m(0,0,p)
p=D.c.lA(D.c.W(w+x+1,1),32)
d.m(0,66,p)
d.m(0,32,p)
p=D.c.lA(D.c.W(v+w+1,1),32)
d.m(0,98,p)
d.m(0,64,p)
d.m(0,96,D.c.lA(D.c.W(u+v+1,1),32))
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
dGD(d){var x
for(x=0;x<16;++x)d.ts(x*32,16,d,-32)},
dGB(d){var x,w,v,u,t
for(x=0,w=16;w>0;--w){v=J.v(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.vn(u,t,t+16,v)
x+=32}},
c4z(d,e){var x,w,v
for(x=0;x<16;++x){w=e.a
v=e.d+x*32
J.vn(w,v,v+16,d)}},
dGt(d){var x,w
for(x=16,w=0;w<16;++w)x+=J.v(d.a,d.d+(-1+w*32))+J.v(d.a,d.d+(w-32))
A.c4z(D.c.W(x,5),d)},
dGv(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.v(d.a,d.d+(-1+w*32))
A.c4z(D.c.W(x,4),d)},
dGu(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.v(d.a,d.d+(w-32))
A.c4z(D.c.W(x,4),d)},
dGw(d){A.c4z(128,d)},
dGE(d){var x
for(x=0;x<8;++x)d.ts(x*32,8,d,-32)},
dGC(d){var x,w,v,u,t
for(x=0,w=0;w<8;++w){v=J.v(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.vn(u,t,t+8,v)
x+=32}},
c4A(d,e){var x,w,v
for(x=0;x<8;++x){w=e.a
v=e.d+x*32
J.vn(w,v,v+8,d)}},
dGx(d){var x,w
for(x=8,w=0;w<8;++w)x+=J.v(d.a,d.d+(w-32))+J.v(d.a,d.d+(-1+w*32))
A.c4A(D.c.W(x,4),d)},
dGy(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.v(d.a,d.d+(w-32))
A.c4A(D.c.W(x,3),d)},
dGz(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.v(d.a,d.d+(-1+w*32))
A.c4A(D.c.W(x,3),d)},
dGA(d){A.c4A(128,d)},
HA(d,e,f,g,h){var x=e+f+g*32,w=J.v(d.a,d.d+x)+D.c.W(h,3)
if(!((w&-256)>>>0===0))w=w<0?0:255
d.m(0,x,w)},
c4y(d,e,f,g,h){A.HA(d,0,0,e,f+g)
A.HA(d,0,1,e,f+h)
A.HA(d,0,2,e,f-h)
A.HA(d,0,3,e,f-g)},
dGk(){var x,w,v,u
if(!$.df_){for(x=-255;x<=255;++x){w=$.b4p()
v=255+x
u=x<0?-x:x
w.$flags&2&&C.L(w)
w[v]=u
u=$.cWW()
w=D.c.W(w[v],1)
u.$flags&2&&C.L(u)
u[v]=w}for(x=-1020;x<=1020;++x){w=$.cWX()
if(x<-128)v=-128
else v=x>127?127:x
w.$flags&2&&C.L(w)
w[1020+x]=v}for(x=-112;x<=112;++x){w=$.cWY()
if(x<-16)v=-16
else v=x>15?15:x
w.$flags&2&&C.L(w)
w[112+x]=v}for(x=-255;x<=510;++x){w=$.rc()
if(x<0)v=0
else v=x>255?255:x
w.$flags&2&&C.L(w)
w[255+x]=v}$.df_=!0}},
c4w:function c4w(){},
dGf(){var x,w=J.jM(3,y.D)
for(x=0;x<3;++x)w[x]=new Uint8Array(11)
return new A.adr(w)},
dGT(){var x,w,v,u,t=new Uint8Array(3),s=J.jM(4,y.cm)
for(x=y.V,w=0;w<4;++w){v=J.jM(8,x)
for(u=0;u<8;++u)v[u]=A.dGf()
s[w]=v}D.H.mC(t,0,3,255)
return new A.c4G(t,s)},
c4B:function c4B(){this.d=$},
c4F:function c4F(){this.b=null},
c4H:function c4H(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
adr:function adr(d){this.a=d},
c4G:function c4G(d,e){this.a=d
this.b=e},
c4x:function c4x(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
OD:function OD(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
aLi:function aLi(){this.b=this.a=0},
aLk:function aLk(d,e,f){this.a=d
this.b=e
this.c=f},
aLj:function aLj(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
aLl:function aLl(d,e,f){this.a=d
this.b=e
this.c=f},
d0W(d,e){var x,w=C.b([],y.A),v=C.b([],y.F),u=new Uint32Array(2),t=new A.aLg(d,u)
u=t.d=J.dz(D.bK.gar(u),0,null)
x=d.cM()
u.$flags&2&&C.L(u)
u[0]=x
x=d.cM()
u.$flags&2&&C.L(u)
u[1]=x
x=d.cM()
u.$flags&2&&C.L(u)
u[2]=x
x=d.cM()
u.$flags&2&&C.L(u)
u[3]=x
x=d.cM()
u.$flags&2&&C.L(u)
u[4]=x
x=d.cM()
u.$flags&2&&C.L(u)
u[5]=x
x=d.cM()
u.$flags&2&&C.L(u)
u[6]=x
x=d.cM()
u.$flags&2&&C.L(u)
u[7]=x
return new A.adt(t,e,w,v)},
HB(d,e){return D.c.W(d+D.c.eA(1,e)-1,e)},
adt:function adt(d,e,f,g){var _=this
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
aza:function aza(d,e,f,g){var _=this
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
aLg:function aLg(d,e){var _=this
_.a=0
_.b=d
_.c=e
_.d=$},
c4C:function c4C(d,e){this.a=d
this.b=e},
c4D(d,e,f){var x=d[e]
d.$flags&2&&C.L(d)
d[e]=(((x&4278255360)>>>0)+((f&4278255360)>>>0)&4278255360|(x&16711935)+(f&16711935)&16711935)>>>0},
Cr(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
OF(d){if(d<0)return 0
if(d>255)return 255
return d},
c4E(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
dGF(d,e,f){return 4278190080},
dGG(d,e,f){return e},
dGL(d,e,f){return d[f]},
dGM(d,e,f){return d[f+1]},
dGN(d,e,f){return d[f-1]},
dGO(d,e,f){var x=d[f]
return A.Cr(A.Cr(e,d[f+1]),x)},
dGP(d,e,f){return A.Cr(e,d[f-1])},
dGQ(d,e,f){return A.Cr(e,d[f])},
dGR(d,e,f){return A.Cr(d[f-1],d[f])},
dGS(d,e,f){return A.Cr(d[f],d[f+1])},
dGH(d,e,f){var x=d[f-1],w=d[f],v=d[f+1]
return A.Cr(A.Cr(e,x),A.Cr(w,v))},
dGI(d,e,f){var x=d[f],w=d[f-1]
return A.c4E(x>>>24,e>>>24,w>>>24)+A.c4E(x>>>16&255,e>>>16&255,w>>>16&255)+A.c4E(x>>>8&255,e>>>8&255,w>>>8&255)+A.c4E(x&255,e&255,w&255)<=0?x:e},
dGJ(d,e,f){var x=d[f],w=d[f-1]
return(A.OF((e>>>24)+(x>>>24)-(w>>>24))<<24|A.OF((e>>>16&255)+(x>>>16&255)-(w>>>16&255))<<16|A.OF((e>>>8&255)+(x>>>8&255)-(w>>>8&255))<<8|A.OF((e&255)+(x&255)-(w&255)))>>>0},
dGK(d,e,f){var x,w,v,u=d[f],t=d[f-1],s=A.Cr(e,u)
u=s>>>24
x=s>>>16&255
w=s>>>8&255
v=s>>>0&255
return(A.OF(u+D.c.aL(u-(t>>>24),2))<<24|A.OF(x+D.c.aL(x-(t>>>16&255),2))<<16|A.OF(w+D.c.aL(w-(t>>>8&255),2))<<8|A.OF(v+D.c.aL(v-(t&255),2)))>>>0},
OE:function OE(d,e){this.a=d
this.b=e},
aLh:function aLh(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
c5w:function c5w(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
adJ:function adJ(){},
azb:function azb(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=$
_.r=1
_.x=_.w=$},
d8W(){var x=new Uint8Array(128),w=new Int16Array(128)
x=new A.ay0(x,w,new Int16Array(128))
x.ad6(0)
return x},
dwX(){var x,w=J.jM(5,y.x)
for(x=0;x<5;++x)w[x]=A.d8W()
return new A.a4i(w)},
ay0:function ay0(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$
_.f=_.e=0},
a4i:function a4i(d){this.a=d},
Xl:function Xl(d,e){this.a=d
this.b=e},
aLL:function aLL(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
azc:function azc(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
c5x:function c5x(){this.b=this.a=null},
d8Z(d){return new A.a4J(d.a,d.b,D.H.lZ(d.c,0))},
bvY:function bvY(d,e){this.a=d
this.b=e},
a4J:function a4J(d,e,f){this.a=d
this.b=e
this.c=f},
iO(d,e,f,g,h,i,j,k,l,m,n,o,p){var x,w=new A.EW(null,null,null,d,k,h,g,0)
w.gls().push(w)
w.c=j
if(e!=null)w.e=A.a3o(e)
x=!1
if(m==null)if(p)x=w.gdK()===B.hJ||w.gdK()===B.iB||w.gdK()===B.iC||w.gdK()===B.ai||w.gdK()===B.cV
w.arn(o,i,f,l,x?w.b8E(f,n,l):m)
return w},
ayr(d,e,f,g){var x,w,v,u=null,t=d.e
t=t==null?u:A.a3o(t)
x=d.c
x=x==null?u:A.d8Z(x)
w=d.w
v=d.r
t=new A.EW(u,x,t,u,v,w,d.y,d.z)
t.b2x(d,e,f,g)
return t},
EV(d,e,f){var x,w,v,u,t=null,s=d.a
s=s==null?t:s.rS(0,f)
x=d.e
x=x==null?t:A.a3o(x)
w=d.c
w=w==null?t:A.d8Z(w)
v=d.w
u=d.r
s=new A.EW(s,w,x,t,u,v,d.y,d.z)
s.b2w(d,e,f)
return s},
ax4:function ax4(d,e){this.a=d
this.b=e},
EW:function EW(d,e,f,g,h,i,j,k){var _=this
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
bwS:function bwS(d,e){this.a=d
this.b=e},
bwR:function bwR(){},
nq:function nq(){},
dxz(d,e,f){return new A.SY(new Uint16Array(d*e*f),d,e,f)},
SY:function SY(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
dxA(d,e,f){return new A.SZ(new Float32Array(d*e*f),d,e,f)},
SZ:function SZ(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a4R:function a4R(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a4S:function a4S(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a4T:function a4T(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a4U:function a4U(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
T_:function T_(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
T0:function T0(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
T1:function T1(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
dxB(d,e,f){return new A.T2(new Uint32Array(d*e*f),d,e,f)},
T2:function T2(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
T3:function T3(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
d9e(d,e,f){return new A.T4(new Uint8Array(d*e*f),null,d,e,f)},
T4:function T4(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
azd:function azd(d,e){this.a=d
this.b=e},
bIT:function bIT(){},
aDG:function aDG(d,e,f){this.c=d
this.a=e
this.b=f},
aDH:function aDH(d,e,f){this.c=d
this.a=e
this.b=f},
aDI:function aDI(d,e,f){this.c=d
this.a=e
this.b=f},
aDJ:function aDJ(d,e,f){this.c=d
this.a=e
this.b=f},
aDK:function aDK(d,e,f){this.c=d
this.a=e
this.b=f},
aDL:function aDL(d,e,f){this.c=d
this.a=e
this.b=f},
aDM:function aDM(d,e,f){this.c=d
this.a=e
this.b=f},
a7F:function a7F(d,e,f){this.c=d
this.a=e
this.b=f},
dbn(d){return new A.ws(new Uint8Array(C.ca(d.c)),d.a,d.b)},
ws:function ws(d,e,f){this.c=d
this.a=e
this.b=f},
d_a(d){return new A.LZ(-1,0,-d.c,d)},
LZ:function LZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d_b(d){return new A.M_(-1,0,-d.c,d)},
M_:function M_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d_c(d){return new A.M0(-1,0,-d.c,d)},
M0:function M0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d_d(d){return new A.M1(-1,0,-d.c,d)},
M1:function M1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d_e(d){return new A.M2(-1,0,-d.c,d)},
M2:function M2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d_f(d){return new A.M3(-1,0,-d.c,d)},
M3:function M3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wv(d,e,f,g,h){d.hO(0,e-1,f)
return new A.aE0(d,e,e+g-1,f+h-1)},
aE0:function aE0(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g},
a7W(d){return new A.M4(-1,0,0,-1,0,d)},
M4:function M4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
d_g(d){return new A.M5(-1,0,-d.c,d)},
M5:function M5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7X(d){return new A.M6(-1,0,0,-2,0,d)},
M6:function M6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
d_h(d){return new A.M7(-1,0,-d.c,d)},
M7:function M7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7Y(d){return new A.M8(-1,0,0,-(d.c<<2>>>0),d)},
M8:function M8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bJi(d){return new A.M9(-1,0,-d.c,d)},
M9:function M9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h5:function h5(){},
dSx(d,e){switch(e.a){case 0:A.b3S(d)
break
case 1:A.dSB(d)
break
case 2:A.dSz(d)
break}return d},
dSB(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.gls().length
for(x=y.g,w=0;w<h;++w){v=d.x
u=(v===$?d.x=C.b([],x):v)[w]
t=u.a
s=t==null
r=s?i:t.a
if(r==null)r=0
q=s?i:t.b
if(q==null)q=0
p=D.c.aL(q,2)
t=d.a
if((t==null?i:t.gf5())!=null)for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.eu(m,n,i)
if(l==null)l=new A.h5()
t=u.a
k=t==null?i:t.eu(m,o,i)
if(k==null)k=new A.h5()
j=l.gdL(l)
l.sdL(0,k.gdL(k))
k.sdL(0,j)}else for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.eu(m,n,i)
if(l==null)l=new A.h5()
t=u.a
k=t==null?i:t.eu(m,o,i)
if(k==null)k=new A.h5()
j=l.gau(l)
l.sau(0,k.gau(k))
k.sau(0,j)
j=l.gaF()
l.saF(k.gaF())
k.saF(j)
j=l.gaH(l)
l.saH(0,k.gaH(k))
k.saH(0,j)
j=l.gaV(l)
l.saV(0,k.gaV(k))
k.saV(0,j)}}return d},
b3S(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=d.gls().length
for(x=y.g,w=0;w<g;++w){v=d.x
u=(v===$?d.x=C.b([],x):v)[w]
t=u.a
s=t==null
r=s?h:t.a
if(r==null)r=0
q=s?h:t.b
if(q==null)q=0
p=D.c.aL(r,2)
t=d.a
if((t==null?h:t.gf5())!=null)for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.eu(l,n,h)
if(k==null)k=new A.h5()
t=u.a
j=t==null?h:t.eu(m,n,h)
if(j==null)j=new A.h5()
i=k.gdL(k)
k.sdL(0,j.gdL(j))
j.sdL(0,i)}else for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.eu(l,n,h)
if(k==null)k=new A.h5()
t=u.a
j=t==null?h:t.eu(m,n,h)
if(j==null)j=new A.h5()
i=k.gau(k)
k.sau(0,j.gau(j))
j.sau(0,i)
i=k.gaF()
k.saF(j.gaF())
j.saF(i)
i=k.gaH(k)
k.saH(0,j.gaH(j))
j.saH(0,i)
i=k.gaV(k)
k.saV(0,j.gaV(j))
j.saV(0,i)}}return d},
dSz(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=d.gls().length
for(x=y.g,w=0;w<f;++w){v=d.x
u=(v===$?d.x=C.b([],x):v)[w]
t=u.a
s=t==null
r=s?g:t.a
if(r==null)r=0
q=s?g:t.b
if(q==null)q=0
p=D.c.aL(q,2)
if((s?g:t.gf5())!=null)for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.eu(k,m,g)
if(j==null)j=new A.h5()
t=u.a
i=t==null?g:t.eu(l,o,g)
if(i==null)i=new A.h5()
h=j.gdL(j)
j.sdL(0,i.gdL(i))
i.sdL(0,h)}else for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.eu(k,m,g)
if(j==null)j=new A.h5()
t=u.a
i=t==null?g:t.eu(l,o,g)
if(i==null)i=new A.h5()
h=j.gau(j)
j.sau(0,i.gau(i))
i.sau(0,h)
h=j.gaF()
j.saF(i.gaF())
i.saF(h)
h=j.gaH(j)
j.saH(0,i.gaH(i))
i.saH(0,h)
h=j.gaV(j)
j.saV(0,i.gaV(i))
i.saV(0,h)}}return d},
bq_:function bq_(d,e){this.a=d
this.b=e},
cp(d){return new A.ayx(d)},
ayx:function ayx(d){this.a=d},
dl(d,e,f,g){var x=J.a1(d),w=x.gA(d)
x=f==null?x.gA(d):g+f
return new A.ns(d,g,Math.min(w,x),g,e)},
cu(d,e,f){var x=d.a,w=d.d,v=J.bn(x),u=e==null?d.c:d.d+f+e
return new A.ns(x,d.b,Math.min(v,u),w+f,d.e)},
ns:function ns(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bGR:function bGR(d){var _=this
_.a=$
_.b=10
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=d
_.ax=_.at=$},
rY(d,e){return new A.aDr(d,new Uint8Array(e))},
aDr:function aDr(d,e){this.a=0
this.b=d
this.c=e},
bL7:function bL7(){},
pv:function pv(d,e){this.a=d
this.b=e},
bNW:function bNW(d,e){this.a=d
this.b=e},
c0H:function c0H(d,e,f){this.a=d
this.d=e
this.e=f},
daQ(d){return new Int8Array(d)},
dFU(d){throw C.p(C.aN("Uint64List not supported on the web."))},
dxU(d,e,f){return J.cXj(d,e,f)},
deD(d,e){return J.q2(d,e,null)},
dvV(d){return J.b4C(d,0,null)},
dvW(d){return d.adH(0,0,null)},
dST(d){var x,w,v,u,t=d.gA(0)
for(x=1,w=0;t>0;){v=3800>t?t:3800
t-=v
for(;--v,v>=0;){u=d.b
u.toString
x+=u[d.c++]
w+=x}x=D.c.av(x,65521)
w=D.c.av(w,65521)}return(w<<16|x)>>>0},
zH(d,e){var x,w,v=J.a1(d),u=v.gA(d)
e^=4294967295
for(x=0;u>=8;){w=x+1
e=B.iJ[(e^v.h(d,x))&255]^e>>>8
x=w+1
e=B.iJ[(e^v.h(d,w))&255]^e>>>8
w=x+1
e=B.iJ[(e^v.h(d,x))&255]^e>>>8
x=w+1
e=B.iJ[(e^v.h(d,w))&255]^e>>>8
w=x+1
e=B.iJ[(e^v.h(d,x))&255]^e>>>8
x=w+1
e=B.iJ[(e^v.h(d,w))&255]^e>>>8
w=x+1
e=B.iJ[(e^v.h(d,x))&255]^e>>>8
x=w+1
e=B.iJ[(e^v.h(d,w))&255]^e>>>8
u-=8}if(u>0)do{w=x+1
e=B.iJ[(e^v.h(d,x))&255]^e>>>8
if(--u,u>0){x=w
continue}else break}while(!0)
return(e^4294967295)>>>0},
d2u(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s,r,q
if(m==null)m=0
if(n==null)n=0
if(l==null)l=e.geb(0)
if(k==null)k=e.ge5(0)
if(h==null)h=d.geb(0)<e.geb(0)?d.geb(0):e.geb(0)
if(g==null)g=d.ge5(0)<e.ge5(0)?d.ge5(0):e.ge5(0)
x=f===B.Cq
if(!x&&d.gtk())d=d.aGz(d.gr6())
w=k/g
v=l/h
u=y.p
t=J.jM(g,u)
for(s=0;s<g;++s)t[s]=n+D.e.L(s*w)
r=J.jM(h,u)
for(q=0;q<h;++q)r[q]=m+D.e.L(q*v)
if(x)A.dLT(e,d,i,j,h,g,r,t,null,B.Mj)
else A.dLs(e,d,i,j,h,g,r,t,f,!1,null,B.Mj)
return d},
dLT(d,e,f,g,h,i,j,k,l,m){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.eu(t,s,x)
if(x==null)x=new A.h5()
e.Ca(f+u,v,x)}},
dLs(d,e,f,g,h,i,j,k,l,m,n,o){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.eu(t,s,x)
if(x==null)x=new A.h5()
A.dS7(e,f+u,v,x,l,!1,n,o)}},
dS7(a4,a5,a6,a7,a8,a9,b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
if(!a4.aKB(a5,a6))return a4
if(a8===B.Cq||a4.gtk())if(a4.aKB(a5,a6)){a4.oN(a5,a6).ji(0,a7)
return a4}x=a7.gjf()
w=a7.giX()
v=a7.gj5()
u=a7.gA(a7)<4?1:a7.gfW()
if(u===0)return a4
t=a4.oN(a5,a6)
s=t.gjf()
r=t.giX()
q=t.gj5()
p=t.gfW()
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
m=D.e.aK(u,0.01,1)
n=u<0
i=n?0:1
h=D.e.aK(x/m*i,0,0.99)
i=D.e.aK(u,0.01,1)
m=n?0:1
g=D.e.aK(w/i*m,0,0.99)
m=D.e.aK(u,0.01,1)
n=n?0:1
f=D.e.aK(v/m*n,0,0.99)
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
t.sjf(x*u+s*p*a3)
t.siX(w*u+r*p*a3)
t.sj5(v*u+q*p*a3)
t.sfW(u+p*a3)
return a4},
dSm(d,e,f,g,h,i,j){var x,w=D.e.aK(Math.min(g,h),0,d.geb(0)-1),v=D.e.aK(Math.min(i,j),0,d.ge5(0)-1),u=D.e.aK(Math.max(g,h),0,d.geb(0)-1),t=D.e.aK(Math.max(i,j),0,d.ge5(0)-1),s=d.a.rk(0,w,v,u-w+1,t-v+1)
for(x=s.a;s.t();)x.ji(0,f)
return d},
dvy(a4,a5,a6,a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=b0<16384,a3=a6>a8?a8:a6
for(x=1;x<=a3;)x=x<<1>>>0
x=x>>>1
w=x>>>1
v=C.b([0,0],y.t)
for(u=a4.$flags|0,t=x,x=w;x>=1;t=x,x=w){s=a5+a9*(a8-t)
r=a9*x
q=a9*t
p=a7*x
o=a7*t
for(n=(a6&x)>>>0!==0,m=a7*(a6-t),l=a5;l<=s;l+=q){k=l+m
for(j=l;j<=k;j+=o){i=j+p
h=j+r
g=h+p
if(a2){A.a3v(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.a3v(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.a3v(f,d,v)
a1=v[0]
u&2&&C.L(a4)
a4[j]=a1
a4[i]=v[1]
A.a3v(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}else{A.a3w(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.a3w(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.a3w(f,d,v)
a1=v[0]
u&2&&C.L(a4)
a4[j]=a1
a4[i]=v[1]
A.a3w(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}}if(n){h=j+r
if(a2){A.a3v(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&C.L(a4)
a4[h]=a1}else{A.a3w(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&C.L(a4)
a4[h]=a1}u&2&&C.L(a4)
a4[j]=f}}if((a8&x)>>>0!==0){k=l+m
for(j=l;j<=k;j+=o){i=j+p
if(a2){A.a3v(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&C.L(a4)
a4[i]=n}else{A.a3w(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&C.L(a4)
a4[i]=n}u&2&&C.L(a4)
a4[j]=f}}w=x>>>1}},
a3v(d,e,f){var x,w,v,u,t=$.oR()
t.$flags&2&&C.L(t)
t[0]=d
x=$.q0()
w=x[0]
t[0]=e
v=x[0]
u=w+(v&1)+D.c.W(v,1)
f[0]=u
f[1]=u-v},
a3w(d,e,f){var x=d-D.c.W(e,1)&65535
f[1]=x
f[0]=e+x-32768&65535},
cUS(d){var x,w,v,u,t,s,r,q,p,o,n=null
if(A.d9V().TA(d))return new A.azo()
x=new A.aEe(A.d9C())
if(x.Kh(d))return x
w=new A.btq()
w.f=A.dl(d,!1,n,0)
w.a=new A.axf(C.b([],y.b))
if(w.atQ())return w
v=new A.c5x()
if(v.Kh(d))return v
u=new A.bZz()
if(u.ayA(A.dl(d,!1,n,0))!=null)return u
if(A.dbL(d).c===943870035)return new A.bKY()
if(A.dvx(d))return new A.boN()
if(A.cXQ(A.dl(d,!1,n,0)))return new A.aqd(!1)
t=new A.bYq()
s=A.dl(d,!1,n,0)
r=t.a=new A.aJr(B.B2)
r.oH(0,s)
if(r.aL8())return t
q=new A.bw_()
r=A.dl(d,!1,n,0)
q.a=r
r=A.d9_(r)
q.b=r
if(r!=null)return q
p=new A.bL2()
if(p.pE(d)!=null)return p
o=new A.bJT(C.b([],y.T))
if(o.Kh(d))return o
return n},
diN(d){var x=A.cUS(d)
return x==null?null:x.nC(0,d,null)},
dUK(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if($.d1R==null){x=$.d1R=new Uint8Array(768)
for(w=-256;w<0;++w)x[256+w]=0
for(w=0;w<256;++w)x[256+w]=w
for(w=256;w<512;++w)x[256+w]=255}for(x=a6.$flags|0,w=0;w<64;++w){v=a4[w]
u=a3[w]
x&2&&C.L(a6)
a6[w]=v*u}for(t=0,w=0;w<8;++w,t+=8){v=1+t
u=a6[v]
if(u===0&&a6[2+t]===0&&a6[3+t]===0&&a6[4+t]===0&&a6[5+t]===0&&a6[6+t]===0&&a6[7+t]===0){v=D.c.W(5793*a6[t]+512,10)
s=(v&2147483647)-((v&2147483648)>>>0)
x&2&&C.L(a6)
a6[t]=s
a6[t+1]=s
a6[t+2]=s
a6[t+3]=s
a6[t+4]=s
a6[t+5]=s
a6[t+6]=s
a6[t+7]=s
continue}r=D.c.W(5793*a6[t]+128,8)
q=(r&2147483647)-((r&2147483648)>>>0)
r=4+t
p=D.c.W(5793*a6[r]+128,8)
o=(p&2147483647)-((p&2147483648)>>>0)
p=2+t
n=a6[p]
m=6+t
l=a6[m]
k=7+t
j=a6[k]
i=D.c.W(2896*(u-j)+128,8)
h=(i&2147483647)-((i&2147483648)>>>0)
j=D.c.W(2896*(u+j)+128,8)
g=(j&2147483647)-((j&2147483648)>>>0)
j=3+t
u=a6[j]<<4
f=(u&2147483647)-((u&2147483648)>>>0)
u=5+t
i=a6[u]<<4
e=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.W(q-o+1,1)
s=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.W(q+o+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.W(n*3784+l*1567+128,8)
i=(i&2147483647)-((i&2147483648)>>>0)
d=D.c.W(n*1567-l*3784+128,8)
n=(d&2147483647)-((d&2147483648)>>>0)
d=D.c.W(h-e+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.c.W(h+e+1,1)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.W(g+f+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.c.W(g-f+1,1)
f=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.c.W(q-i+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
i=D.c.W(q+i+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.W(s-n+1,1)
i=(i&2147483647)-((i&2147483648)>>>0)
a2=D.c.W(s+n+1,1)
o=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.c.W(h*2276+a0*3406+2048,12)
s=(a2&2147483647)-((a2&2147483648)>>>0)
a0=D.c.W(h*3406-a0*2276+2048,12)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.W(f*799+d*4017+2048,12)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
d=D.c.W(f*4017-d*799+2048,12)
f=(d&2147483647)-((d&2147483648)>>>0)
x&2&&C.L(a6)
a6[t]=q+s
a6[k]=q-s
a6[v]=o+a0
a6[m]=o-a0
a6[p]=i+f
a6[u]=i-f
a6[j]=a1+h
a6[r]=a1-h}for(w=0;w<8;++w){v=8+w
u=a6[v]
if(u===0&&a6[16+w]===0&&a6[24+w]===0&&a6[32+w]===0&&a6[40+w]===0&&a6[48+w]===0&&a6[56+w]===0){u=D.c.W(5793*a6[w]+8192,14)
s=(u&2147483647)-((u&2147483648)>>>0)
x&2&&C.L(a6)
a6[w]=s
a6[v]=s
a6[16+w]=s
a6[24+w]=s
a6[32+w]=s
a6[40+w]=s
a6[48+w]=s
a6[56+w]=s
continue}r=D.c.W(5793*a6[w]+2048,12)
q=(r&2147483647)-((r&2147483648)>>>0)
r=32+w
p=D.c.W(5793*a6[r]+2048,12)
o=(p&2147483647)-((p&2147483648)>>>0)
p=16+w
n=a6[p]
m=48+w
l=a6[m]
k=56+w
j=a6[k]
i=D.c.W(2896*(u-j)+2048,12)
h=(i&2147483647)-((i&2147483648)>>>0)
j=D.c.W(2896*(u+j)+2048,12)
g=(j&2147483647)-((j&2147483648)>>>0)
j=24+w
f=a6[j]
u=40+w
e=a6[u]
i=D.c.W(q-o+1,1)
s=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.W(q+o+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.W(n*3784+l*1567+2048,12)
i=(i&2147483647)-((i&2147483648)>>>0)
d=D.c.W(n*1567-l*3784+2048,12)
n=(d&2147483647)-((d&2147483648)>>>0)
d=D.c.W(h-e+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.c.W(h+e+1,1)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.W(g+f+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.c.W(g-f+1,1)
f=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.c.W(q-i+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
i=D.c.W(q+i+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.c.W(s-n+1,1)
i=(i&2147483647)-((i&2147483648)>>>0)
a2=D.c.W(s+n+1,1)
o=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.c.W(h*2276+a0*3406+2048,12)
s=(a2&2147483647)-((a2&2147483648)>>>0)
a0=D.c.W(h*3406-a0*2276+2048,12)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.c.W(f*799+d*4017+2048,12)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
d=D.c.W(f*4017-d*799+2048,12)
f=(d&2147483647)-((d&2147483648)>>>0)
x&2&&C.L(a6)
a6[w]=q+s
a6[k]=q-s
a6[v]=o+a0
a6[m]=o-a0
a6[p]=i+f
a6[u]=i-f
a6[j]=a1+h
a6[r]=a1-h}for(x=$.d1R,v=a5.$flags|0,w=0;w<64;++w){x.toString
u=D.c.W(a6[w]+8,4)
u=x[384+((u&2147483647)-((u&2147483648)>>>0))]
v&2&&C.L(a5)
a5[w]=u}},
dT_(d9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=null,d7="ifd0",d8=d9.r
if(d8.h(0,d7).a.a4(0,274)){x=d8.h(0,d7).gik(0)
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
r=A.iO(d6,d6,B.ai,0,B.bD,s,d6,0,3,d6,B.ai,t,!1)
r.e=A.a3o(d8)
r.gy8().h(0,d7).sik(0,d6)
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
e=n[D.c.i3(g,l)]
f=q-g
d=0
while(!0){a0=d9.d.e
a0.toString
if(!(d<a0))break
a1=e[D.c.i3(d,m)]
if(h){a0=r.a
if(a0!=null)a0.fJ(p-d,g,a1,a1,a1)}else if(i){a0=r.a
if(a0!=null)a0.fJ(p-d,f,a1,a1,a1)}else if(j){a0=r.a
if(a0!=null)a0.fJ(d,f,a1,a1,a1)}else if(k){a0=r.a
if(a0!=null)a0.fJ(g,d,a1,a1,a1)}else if(v){a0=r.a
if(a0!=null)a0.fJ(f,d,a1,a1,a1)}else if(x){a0=r.a
if(a0!=null)a0.fJ(f,p-d,a1,a1,a1)}else{a0=r.a
if(d8){if(a0!=null)a0.fJ(g,p-d,a1,a1,a1)}else if(a0!=null)a0.fJ(d,g,a1,a1,a1)}++d}++g}break
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
b1=D.c.i3(g,l)
b2=D.c.i3(g,a8)
b3=D.c.i3(g,b0)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
f=q-g
d=0
while(!0){a0=d9.d.e
a0.toString
if(!(d<a0))break
b6=D.c.i3(d,m)
b7=D.c.i3(d,a7)
b8=D.c.i3(d,a9)
a1=e[b6]<<8>>>0
b9=b4[b7]-128
c0=b5[b8]-128
a0=D.c.W(a1+359*c0+128,8)
c1=D.c.aK((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.c.W(a1-88*b9-183*c0+128,8)
c2=D.c.aK((a0&2147483647)-((a0&2147483648)>>>0),0,255)
a0=D.c.W(a1+454*b9+128,8)
c3=D.c.aK((a0&2147483647)-((a0&2147483648)>>>0),0,255)
if(h){a0=r.a
if(a0!=null)a0.fJ(p-d,g,c1,c2,c3)}else if(i){a0=r.a
if(a0!=null)a0.fJ(p-d,f,c1,c2,c3)}else if(j){a0=r.a
if(a0!=null)a0.fJ(d,f,c1,c2,c3)}else if(k){a0=r.a
if(a0!=null)a0.fJ(g,d,c1,c2,c3)}else if(v){a0=r.a
if(a0!=null)a0.fJ(f,d,c1,c2,c3)}else if(x){a0=r.a
if(a0!=null)a0.fJ(f,p-d,c1,c2,c3)}else{a0=r.a
if(d8){if(a0!=null)a0.fJ(g,p-d,c1,c2,c3)}else if(a0!=null)a0.fJ(d,g,c1,c2,c3)}++d}++g}break
case 4:x=d9.c
if(x==null)throw C.p(A.cp("Unsupported color mode (4 components)"))
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
b1=D.c.i3(g,l)
b2=D.c.i3(g,a8)
b3=D.c.i3(g,b0)
c8=D.c.i3(g,c7)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
c9=c5[c8]
a0=q-g
d=0
while(!0){d0=d9.d.e
d0.toString
if(!(d<d0))break
b6=D.c.i3(d,m)
b7=D.c.i3(d,a7)
b8=D.c.i3(d,a9)
d1=D.c.i3(d,c6)
if(x){d2=e[b6]
d3=b4[b7]
a1=b5[b8]
d4=c9[d1]}else{a1=e[b6]
b9=b4[b7]
c0=b5[b8]
d4=c9[d1]
d0=c0-128
d2=255-D.c.aK(D.e.L(a1+1.402*d0),0,255)
d5=b9-128
d3=255-D.e.L(D.e.aK(a1-0.3441363*d5-0.71413636*d0,0,255))
a1=255-D.c.aK(D.e.L(a1+1.772*d5),0,255)}d0=D.c.W(d2*d4,8)
c1=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.c.W(d3*d4,8)
c2=(d0&2147483647)-((d0&2147483648)>>>0)
d0=D.c.W(a1*d4,8)
c3=(d0&2147483647)-((d0&2147483648)>>>0)
if(f){d0=r.a
if(d0!=null)d0.fJ(p-d,g,c1,c2,c3)}else if(h){d0=r.a
if(d0!=null)d0.fJ(p-d,a0,c1,c2,c3)}else if(i){d0=r.a
if(d0!=null)d0.fJ(d,a0,c1,c2,c3)}else if(j){d0=r.a
if(d0!=null)d0.fJ(g,d,c1,c2,c3)}else if(k){d0=r.a
if(d0!=null)d0.fJ(a0,d,c1,c2,c3)}else if(v){d0=r.a
if(d0!=null)d0.fJ(a0,p-d,c1,c2,c3)}else{d0=r.a
if(d8){if(d0!=null)d0.fJ(g,p-d,c1,c2,c3)}else if(d0!=null)d0.fJ(d,g,c1,c2,c3)}++d}++g}break
default:throw C.p(A.cp("Unsupported color mode"))}return r},
dH6(d,e,f,g,h,i){A.dH3(i,d,e,f,g,h,!0,i)},
dH7(d,e,f,g,h,i){A.dH4(i,d,e,f,g,h,!0,i)},
dH5(d,e,f,g,h,i){A.dH2(i,d,e,f,g,h,!0,i)},
Xk(d,e,f,g,h){var x,w,v
for(x=0;x<g;++x){w=J.v(d.a,d.d+x)
v=J.v(e.a,e.d+x)
J.c_(f.a,f.d+x,w+v)}},
dH3(d,e,f,g,h,i,j,k){var x,w,v=null,u=h*g,t=h+i,s=A.dl(d,!1,v,u),r=A.dl(d,!1,v,u),q=A.cu(r,v,0)
if(h===0){r.m(0,0,J.v(s.a,s.d))
A.Xk(A.cu(s,v,1),q,A.cu(r,v,1),e-1,!0)
q.d+=g
s.d+=g
r.d+=g
h=1}for(x=-g,w=e-1;h<t;){A.Xk(s,A.cu(q,v,x),r,1,!0)
A.Xk(A.cu(s,v,1),q,A.cu(r,v,1),w,!0);++h
q.d+=g
s.d+=g
r.d+=g}},
dH4(d,e,f,g,h,i,j,k){var x=null,w=h*g,v=h+i,u=A.dl(d,!1,x,w),t=A.dl(k,!1,x,w),s=A.cu(t,x,0)
if(h===0){t.m(0,0,J.v(u.a,u.d))
A.Xk(A.cu(u,x,1),s,A.cu(t,x,1),e-1,!0)
u.d+=g
t.d+=g
h=1}else s.d-=g
for(;h<v;){A.Xk(u,s,t,e,!0);++h
s.d+=g
u.d+=g
t.d+=g}},
dH2(d,e,f,g,h,i,j,k){var x,w,v,u,t,s=null,r=h*g,q=h+i,p=A.dl(d,!1,s,r),o=A.dl(k,!1,s,r),n=A.cu(o,s,0)
if(h===0){o.m(0,0,J.v(p.a,p.d))
A.Xk(A.cu(p,s,1),n,A.cu(o,s,1),e-1,!0)
n.d+=g
p.d+=g
o.d+=g
h=1}for(x=-g;h<q;){A.Xk(p,A.cu(n,s,x),o,1,!0)
for(w=1;w<e;++w){v=w-g
u=J.v(n.a,n.d+(w-1))+J.v(n.a,n.d+v)-J.v(n.a,n.d+(v-1))
if((u&4294967040)>>>0===0)t=u
else t=u<0?0:255
v=J.v(p.a,p.d+w)
J.c_(o.a,o.d+w,v+t)}++h
n.d+=g
p.d+=g
o.d+=g}},
dPF(d){var x="ifd0",w=A.EV(d,!1,!1)
if(!d.gy8().h(0,x).a.a4(0,274)||d.gy8().h(0,x).gik(0)===1)return w
w.e=A.a3o(d.gy8())
w.gy8().h(0,x).sik(0,null)
switch(d.gy8().h(0,x).gik(0)){case 2:return A.b3S(w)
case 3:return A.dSx(w,B.ayI)
case 4:return A.b3S(A.b3K(w,180))
case 5:return A.b3S(A.b3K(w,90))
case 6:return A.b3K(w,90)
case 7:return A.b3S(A.b3K(w,-90))
case 8:return A.b3K(w,-90)}return w},
dQr(a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null
a2.gtk()
if(a2.gy8().h(0,"ifd0").a.a4(0,274)&&a2.gy8().h(0,"ifd0").gik(0)!==1)a2=A.dPF(a2)
x=D.e.aE(a3*(a2.ge5(0)/a2.geb(0)))
if(a3<=0)a3=D.e.aE(x*(a2.geb(0)/a2.ge5(0)))
w=x
if(a3===a2.geb(0)&&x===a2.ge5(0))return A.EV(a2,!1,!1)
v=new Int32Array(a3)
u=a2.geb(0)/a3
for(t=0;t<a3;++t)v[t]=D.e.L(t*u)
s=new Int32Array(w)
r=a2.ge5(0)/w
for(q=0;q<w;++q)s[q]=D.e.L(q*r)
p=a2.gls().length
for(o=y.g,n=a1,m=0;m<p;++m){l=a2.x
k=(l===$?a2.x=C.b([],o):l)[m]
j=A.ayr(k,x,!0,a3)
i=n==null
if(!i)n.oh(j)
if(i)n=j
i=k.a
h=i==null
g=h?a1:i.b
r=(g==null?0:g)/w
if((h?a1:i.gf5())!=null)for(q=0;q<w;++q){f=D.e.L(q*r)
for(t=0;t<a3;++t){i=v[t]
h=k.a
if(h==null)i=a1
else{i=h.oN(i,f)
i=D.e.L(i.gdL(i))}if(i==null)i=0
h=j.a
if(h!=null)h.nj(t,q,i)}}else{e=k.kW(0,0)
for(q=0;q<w;++q)for(t=0;t<a3;++t){i=v[t]
h=s[q]
g=k.a
if(g!=null)g.eu(i,h,e)
i=e.gau(e)
h=e.gaF()
g=e.gaH(e)
d=e.gaV(e)
a0=j.a
if(a0!=null)a0.kY(t,q,i,h,g,d)}}}n.toString
return n},
b3K(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=D.c.av(a8,360)
a7.gtk()
if(D.c.av(a6,90)===0)switch(D.c.aL(a6,90)){case 1:return A.dO9(a7)
case 2:return A.dO7(a7)
case 3:return A.dO8(a7)
default:return A.EV(a7,!1,!1)}x=a6*3.141592653589793/180
w=Math.cos(x)
v=Math.sin(x)
u=a7.geb(0)
t=a7.geb(0)
s=a7.ge5(0)
r=a7.ge5(0)
q=0.5*a7.geb(0)
p=0.5*a7.ge5(0)
s=Math.abs(u*w)+Math.abs(s*v)
o=0.5*s
r=Math.abs(t*v)+Math.abs(r*w)
n=0.5*r
m=a7.gls().length
for(u=y.g,l=a5,k=0;k<m;++k){j=a7.x
i=(j===$?a7.x=C.b([],u):j)[k]
t=l==null
h=t?a5:l.a_d()
if(h==null){g=D.e.L(s)
h=A.ayr(a7,D.e.L(r),!0,g)}if(t)l=h
for(t=h.a,t=t.gad(t);t.t();){f=t.gM(t)
e=f.gnY(f)
d=f.goL(f)
g=e-o
a0=d-n
a1=q+g*w+a0*v
a2=p-g*v+a0*w
g=!1
if(a1>=0)if(a2>=0){a0=i.a
a3=a0==null
a4=a3?a5:a0.a
if(a1<(a4==null?0:a4)){g=a3?a5:a0.b
g=a2<(g==null?0:g)}}if(g)h.Ca(e,d,i.aS5(a1,a2,B.aD1))}}l.toString
return l},
dO9(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gls(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,C.K)(x),++u){t=x[u]
s=v==null
r=s?k:v.a_d()
if(r==null){q=t.a
p=q==null
o=p?k:q.b
if(o==null)o=0
q=p?k:q.a
r=A.ayr(t,q==null?0:q,!0,o)}if(s)v=r
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
s=s==null?k:s.eu(m,n-l,k)
r.Ca(l,m,s==null?new A.h5():s);++l}++m}}v.toString
return v},
dO7(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gls(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,C.K)(x),++u){t=x[u]
s=t.a
r=s==null
q=r?k:s.a
p=(q==null?0:q)-1
s=r?k:s.b
o=(s==null?0:s)-1
s=v==null
n=s?k:v.a_d()
if(n==null)n=A.EV(t,!0,!0)
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
r=r==null?k:r.eu(p-l,s,k)
n.Ca(l,m,r==null?new A.h5():r);++l}++m}}v.toString
return v},
dO8(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gls(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,C.K)(x),++u){t=x[u]
s=d.a
s=s==null?k:s.a
r=(s==null?0:s)-1
s=v==null
q=s?k:v.a_d()
if(q==null){p=t.a
o=p==null
n=o?k:p.b
if(n==null)n=0
p=o?k:p.a
q=A.ayr(t,p==null?0:p,!0,n)}if(s)v=q
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
p=p==null?k:p.eu(s,l,k)
q.Ca(l,m,p==null?new A.h5():p);++l}++m}}v.toString
return v},
cUq(d){var x
d=(d&-d)>>>0
x=d!==0?31:32
if((d&65535)!==0)x-=16
if((d&16711935)!==0)x-=8
if((d&252645135)!==0)x-=4
if((d&858993459)!==0)x-=2
return(d&1431655765)!==0?x-1:x},
dVS(d){$.d4m().m(0,0,d)
return $.do6()[0]},
djL(d,e,f,g){return(D.c.aK(d,0,255)|D.c.aK(e,0,255)<<8|D.c.aK(f,0,255)<<16|D.c.aK(g,0,255)<<24)>>>0},
xx(d,e,f){var x,w,v,u,t,s=e.gA(e),r=e.gdK(),q=d.gf5(),p=q==null?null:q.gdK()
if(p==null)p=d.gdK()
x=d.gA(d)
if(s===1){w=d.gA(d)>2?d.gkh():d.h(0,0)
e.m(0,0,A.b3J(C.hm(d.h(0,0))?D.e.fN(w):w,p,r))}else if(s<=x)for(v=0;v<s;++v)e.m(0,v,A.b3J(d.h(0,v),p,r))
else if(x===2){u=A.b3J(d.h(0,0),p,r)
if(s===3){e.m(0,0,u)
e.m(0,1,u)
e.m(0,2,u)}else{f=A.b3J(d.h(0,1),p,r)
e.m(0,0,u)
e.m(0,1,u)
e.m(0,2,u)
e.m(0,3,f)}}else{for(v=0;v<x;++v)e.m(0,v,A.b3J(d.h(0,v),p,r))
t=x===1?e.h(0,0):0
for(v=x;v<s;++v)e.m(0,v,v===3?f:t)}return e},
r7(d,e,f,g,h){var x,w,v=d.gf5(),u=v==null?null:v.gdK()
if(u==null)u=d.gdK()
v=h==null
x=v?null:h.gdK()
f=x==null?f:x
if(f==null)f=d.gdK()
x=v?null:h.gA(h)
g=x==null?g:x
if(g==null)g=d.gA(d)
if(e==null)e=0
if(f===u&&g===d.gA(d)){if(v)return d.ew(0)
h.ji(0,d)
return h}switch(f.a){case 3:if(v)w=new A.Aj(new Uint8Array(g))
else w=h
return A.xx(d,w,e)
case 0:return A.xx(d,v?new A.Rd(g,0):h,e)
case 1:return A.xx(d,v?new A.Rf(g,0):h,e)
case 2:if(v){v=g<3?1:2
w=new A.Rh(g,new Uint8Array(v))}else w=h
return A.xx(d,w,e)
case 4:if(v)w=new A.Re(new Uint16Array(g))
else w=h
return A.xx(d,w,e)
case 5:if(v)w=new A.Rg(new Uint32Array(g))
else w=h
return A.xx(d,w,e)
case 6:if(v)w=new A.Ra(new Int8Array(g))
else w=h
return A.xx(d,w,e)
case 7:if(v)w=new A.R8(new Int16Array(g))
else w=h
return A.xx(d,w,e)
case 8:if(v)w=new A.R9(new Int32Array(g))
else w=h
return A.xx(d,w,e)
case 9:if(v)w=new A.R5(new Uint16Array(g))
else w=h
return A.xx(d,w,e)
case 10:if(v)w=new A.R6(new Float32Array(g))
else w=h
return A.xx(d,w,e)
case 11:if(v)w=new A.R7(new Float64Array(g))
else w=h
return A.xx(d,w,e)}},
kg(d){return 0.299*d.gau(d)+0.587*d.gaF()+0.114*d.gaH(d)},
diu(d,e,f,g,h){var x=1-g/255
h[0]=D.e.aE(255*(1-d/255)*x)
h[1]=D.e.aE(255*(1-e/255)*x)
h[2]=D.e.aE(255*(1-f/255)*x)},
hT(d){var x,w,v,u=$.d4l()
u.$flags&2&&C.L(u)
u[0]=d
x=$.do5()[0]
if(d===0)return x>>>16
if($.iN==null)A.jK()
w=$.d85.cc()[x>>>23&511]
if(w!==0){v=x&8388607
return w+(v+4095+(v>>>13&1)>>>13)}return A.dvT(x)},
dvT(d){var x,w,v=d>>>16&32768,u=(d>>>23&255)-112,t=d&8388607
if(u<=0){if(u<-10)return v
t|=8388608
x=14-u
return(v|D.c.oR(t+(D.c.f7(1,x-1)-1)+(D.c.hv(t,x)&1),x))>>>0}else if(u===143)if(t===0)return v|31744
else{t=t>>>13
w=t===0?1:0
return v|t|w|31744}else{t=t+4095+(t>>>13&1)
if((t&8388608)!==0){++u
t=0}if(u>30)return v|31744
return(v|u<<10|t>>>13)>>>0}},
jK(){var x,w,v,u,t=$.iN
if(t!=null)return t
x=new Uint32Array(65536)
$.iN=J.b4C(D.bK.gar(x),0,null)
t=new Uint16Array(512)
$.d85.b=t
for(w=0;w<256;++w){v=(w&255)-112
if(v<=0||v>=30){t[w]=0
t[(w|256)>>>0]=0}else{u=v<<10>>>0
t[w]=u
t[(w|256)>>>0]=(u|32768)>>>0}}for(w=0;w<65536;++w)x[w]=A.dvU(w)
t=$.iN
t.toString
return t},
dvU(d){var x,w=d>>>15&1,v=d>>>10&31,u=d&1023
if(v===0)if(u===0)return w<<31>>>0
else{for(;(u&1024)===0;){u=u<<1;--v}++v
u&=4294966271}else if(v===31){x=w<<31
if(u===0)return(x|2139095040)>>>0
else return(x|u<<13|2139095040)>>>0}return(w<<31|v+112<<23|u<<13)>>>0}},B,E
J=c[1]
C=c[0]
D=c[2]
A=a.updateHolder(c[66],A)
B=c[319]
E=c[152]
A.a4G.prototype={
a72(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.length
for(x=0;x<k;++x){w=d[x]
if(w>l.b)l.b=w
if(w<l.c)l.c=w}w=l.b
v=D.c.f7(1,w)
u=new Uint32Array(v)
l.a=u
for(t=1,s=0,r=2;t<=w;){for(q=t<<16,x=0;x<k;++x)if(d[x]===t){for(p=s,o=0,n=0;n<t;++n){o=(o<<1|p&1)>>>0
p=p>>>1}for(m=(q|x)>>>0,n=o;n<v;n+=r)u[n]=m;++s}++t
s=s<<1>>>0
r=r<<1>>>0}}}
A.c6u.prototype={}
A.cRV.prototype={
bMn(d,e,f,g){var x,w,v,u,t,s=null
while(!0){x=d.c
w=d.d
w===$&&C.a()
if(!(x<w))break
w=d.b
w.toString
v=d.c=x+1
u=w[x]
d.c=v+1
t=w[v]
if((u&8)!==8)return!1
if(D.c.av(u*256+t,31)!==0)return!1
if((t>>>5&1)!==0){d.ai()
return!1}if(s!=null)e.mI(s)
x=new A.a4G()
x.a72(B.aSr)
w=new A.a4G()
w.a72(B.aI5)
v=new A.aDt(new Uint8Array(32768),B.rI)
new A.bxw(d,v,x,w).bmG()
s=J.dz(D.H.gar(v.c),v.c.byteOffset,v.b)
d.ai()}if(s!=null)e.mI(s)
return!0}}
A.c6v.prototype={}
A.cRW.prototype={
aIh(d,e){var x=A.dbh(B.oG,32768)
this.bOo(A.bxP(d,B.rI,null,null),x,e,!1,null)
return x.al0()},
bOo(d,e,f,g,h){var x,w,v,u,t,s,r,q,p
e.a=B.oG
x=(D.c.aK(15,0,15)-8<<4|8)>>>0
e.bi(x)
w=x*256
for(v=0;u=(v|0)>>>0,D.c.av(w+u,31)!==0;)++v
e.bi(u)
t=d.c
s=A.dST(d)
d.c=t
u=f==null?6:f
A.dtZ(d,u,e,15)
u=s&255
r=s>>>24&255
q=s>>>16&255
p=s>>>8&255
if(e.a===B.oG){e.bi(r)
e.bi(q)
e.bi(p)
e.bi(u)}else{e.bi(u)
e.bi(p)
e.bi(q)
e.bi(r)}}}
A.XY.prototype={
J(){return"_DeflateFlushMode."+this.b}}
A.bjn.prototype={
b9S(d,e){var x,w,v,u,t=this,s=!0
if(e>=9)if(e<=15)s=d>9
if(s)return!1
x=t.bdB(d)
if(x==null)return!1
$.y4.b=x
s=new Uint16Array(1146)
t.p1=s
w=new Uint16Array(122)
t.p2=w
v=new Uint16Array(78)
t.p3=v
t.as=e
u=t.Q=D.c.eA(1,e)
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
t.ba=16384
t.xr=49152
t.k4=d
t.w=t.x=t.ok=0
t.c=113
t.d=0
u=t.p4
u.a=s
u.c=$.dnP()
u=t.R8
u.a=w
u.c=$.dnO()
u=t.RG
u.a=v
u.c=$.dnN()
t.am=t.ae=0
t.X=8
t.avE()
t.bo7()
return!0},
b9R(d){var x,w,v,u,t=this,s=t.x
s===$&&C.a()
if(s!==0)t.a8n()
s=t.a
x=s.c
s=s.d
s===$&&C.a()
w=!0
if(x>=s){s=t.k2
s===$&&C.a()
if(s===0)s=d!==B.Bk&&t.c!==666
else s=w}else s=w
if(s){switch($.y4.cc().e){case 0:v=t.b9V(d)
break
case 1:v=t.b9T(d)
break
case 2:v=t.b9U(d)
break
default:v=-1
break}s=v===2
if(s||v===3)t.c=666
if(v===0||s)return 0
if(v===1){if(d===B.bSG){t.m2(2,3)
t.HT(256,B.w7)
t.aET()
s=t.X
s===$&&C.a()
x=t.am
x===$&&C.a()
if(1+s+10-x<9){t.m2(2,3)
t.HT(256,B.w7)
t.aET()}t.X=7}else{t.aBL(0,0,!1)
if(d===B.bSH){s=t.cy
s===$&&C.a()
x=t.CW
u=0
for(;u<s;++u){x===$&&C.a()
x.$flags&2&&C.L(x)
x[u]=0}}}t.a8n()}}if(d!==B.rm)return 0
return 1},
bo7(){var x,w,v=this,u=v.Q
u===$&&C.a()
v.ay=2*u
u=v.CW
u===$&&C.a()
x=v.cy
x===$&&C.a();--x
u.$flags&2&&C.L(u)
u[x]=0
for(w=0;w<x;++w)u[w]=0
v.k2=v.fr=v.id=0
v.fx=v.k3=2
v.cx=v.go=0},
avE(){var x,w,v,u=this
for(x=u.p1,w=0;w<286;++w){x===$&&C.a()
x.$flags&2&&C.L(x)
x[w*2]=0}for(v=u.p2,w=0;w<30;++w){v===$&&C.a()
v.$flags&2&&C.L(v)
v[w*2]=0}for(v=u.p3,w=0;w<19;++w){v===$&&C.a()
v.$flags&2&&C.L(v)
v[w*2]=0}x===$&&C.a()
x.$flags&2&&C.L(x)
x[512]=1
u.y2=u.a2=u.bl=u.C=0},
ab3(d,e){var x,w,v=this.ry,u=v[e],t=e<<1>>>0,s=v.$flags|0,r=this.x2
while(!0){x=this.to
x===$&&C.a()
if(!(t<=x))break
if(t<x&&A.d79(d,v[t+1],v[t],r))++t
if(A.d79(d,u,v[t],r))break
x=v[t]
s&2&&C.L(v)
v[e]=x
w=t<<1>>>0
e=t
t=w}s&2&&C.L(v)
v[e]=u},
azx(d,e){var x,w,v,u,t,s,r,q,p,o,n=d[1]
if(n===0){x=138
w=3}else{x=7
w=4}d.$flags&2&&C.L(d)
d[(e+1)*2+1]=65535
for(v=this.p3,u=0,t=-1,s=0;u<=e;n=r){++u
r=d[u*2+1];++s
if(s<x&&n===r)continue
else{q=3
if(s<w){v===$&&C.a()
p=n*2
o=v[p]
v.$flags&2&&C.L(v)
v[p]=o+s}else if(n!==0){if(n!==t){v===$&&C.a()
p=n*2
o=v[p]
v.$flags&2&&C.L(v)
v[p]=o+1}v===$&&C.a()
p=v[32]
v.$flags&2&&C.L(v)
v[32]=p+1}else if(s<=10){v===$&&C.a()
p=v[34]
v.$flags&2&&C.L(v)
v[34]=p+1}else{v===$&&C.a()
p=v[36]
v.$flags&2&&C.L(v)
v[36]=p+1}}if(r===0){w=q
x=138}else if(n===r){w=q
x=6}else{x=7
w=4}t=n
s=0}},
b58(){var x,w,v=this,u=v.p1
u===$&&C.a()
x=v.p4.b
x===$&&C.a()
v.azx(u,x)
x=v.p2
x===$&&C.a()
u=v.R8.b
u===$&&C.a()
v.azx(x,u)
v.RG.a7D(v)
for(u=v.p3,w=18;w>=3;--w){u===$&&C.a()
if(u[B.Ge[w]*2+1]!==0)break}u=v.bl
u===$&&C.a()
v.bl=u+(3*(w+1)+5+5+4)
return w},
byP(d,e,f){var x,w,v,u=this
u.m2(d-257,5)
x=e-1
u.m2(x,5)
u.m2(f-4,4)
for(w=0;w<f;++w){v=u.p3
v===$&&C.a()
u.m2(v[B.Ge[w]*2+1],3)}v=u.p1
v===$&&C.a()
u.aA7(v,d-1)
v=u.p2
v===$&&C.a()
u.aA7(v,x)},
aA7(d,e){var x,w,v,u,t,s,r,q,p,o,n=this,m=d[1]
if(m===0){x=138
w=3}else{x=7
w=4}for(v=0,u=-1,t=0;v<=e;m=s){++v
s=d[v*2+1];++t
if(t<x&&m===s)continue
else{r=3
if(t<w){q=m*2
p=q+1
do{o=n.p3
o===$&&C.a()
n.m2(o[q]&65535,o[p]&65535)}while(--t,t!==0)}else if(m!==0){if(m!==u){q=n.p3
q===$&&C.a()
p=m*2
n.m2(q[p]&65535,q[p+1]&65535);--t}q=n.p3
q===$&&C.a()
n.m2(q[32]&65535,q[33]&65535)
n.m2(t-3,2)}else{q=n.p3
if(t<=10){q===$&&C.a()
n.m2(q[34]&65535,q[35]&65535)
n.m2(t-3,3)}else{q===$&&C.a()
n.m2(q[36]&65535,q[37]&65535)
n.m2(t-11,7)}}}if(s===0){w=r
x=138}else if(m===s){w=r
x=6}else{x=7
w=4}u=m
t=0}},
bvn(d,e,f){var x,w,v=this
if(f===0)return
x=v.f
x===$&&C.a()
w=v.x
w===$&&C.a()
D.H.el(x,w,w+f,d,e)
v.x=v.x+f},
rB(d){var x,w=this.f
w===$&&C.a()
x=this.x
x===$&&C.a()
this.x=x+1
w.$flags&2&&C.L(w)
w[x]=d},
HT(d,e){var x=d*2
this.m2(e[x]&65535,e[x+1]&65535)},
m2(d,e){var x,w=this,v=w.am
v===$&&C.a()
x=w.ae
if(v>16-e){x===$&&C.a()
v=w.ae=(x|D.c.f7(d,v)&65535)>>>0
w.rB(v)
w.rB(A.r6(v,8))
w.ae=A.r6(d,16-w.am)
w.am=w.am+(e-16)}else{x===$&&C.a()
w.ae=(x|D.c.f7(d,v)&65535)>>>0
w.am=v+e}},
Pf(d,e){var x,w,v,u,t,s=this,r=s.f
r===$&&C.a()
x=s.ba
x===$&&C.a()
w=s.y2
w===$&&C.a()
v=A.r6(d,8)
r.$flags&2&&C.L(r)
r[x+w*2]=v
v=s.f
w=s.ba
x=s.y2
v.$flags&2&&C.L(v)
v[w+x*2+1]=d
w=s.xr
w===$&&C.a()
v[w+x]=e
s.y2=x+1
if(d===0){r=s.p1
r===$&&C.a()
x=e*2
w=r[x]
r.$flags&2&&C.L(r)
r[x]=w+1}else{r=s.a2
r===$&&C.a()
s.a2=r+1
r=s.p1
r===$&&C.a()
x=(B.SV[e]+256+1)*2
w=r[x]
r.$flags&2&&C.L(r)
r[x]=w+1
w=s.p2
w===$&&C.a()
x=A.dfF(d-1)*2
r=w[x]
w.$flags&2&&C.L(w)
w[x]=r+1}r=s.y2
if((r&8191)===0){x=s.k4
x===$&&C.a()
x=x>2}else x=!1
if(x){u=r*8
r=s.id
r===$&&C.a()
x=s.fr
x===$&&C.a()
for(w=s.p2,t=0;t<30;++t){w===$&&C.a()
u+=w[t*2]*(5+B.vT[t])}u=A.r6(u,3)
w=s.a2
w===$&&C.a()
v=s.y2
if(w<v/2&&u<(r-x)/2)return!0
r=v}x=s.y1
x===$&&C.a()
return r===x-1},
ar5(d,e){var x,w,v,u,t,s,r=this,q=r.y2
q===$&&C.a()
if(q!==0){x=0
do{q=r.f
q===$&&C.a()
w=r.ba
w===$&&C.a()
w+=x*2
v=q[w]<<8&65280|q[w+1]&255
w=r.xr
w===$&&C.a()
u=q[w+x]&255;++x
if(v===0)r.HT(u,d)
else{t=B.SV[u]
r.HT(t+256+1,d)
s=B.R2[t]
if(s!==0)r.m2(u-B.aEQ[t],s);--v
t=A.dfF(v)
r.HT(t,e)
s=B.vT[t]
if(s!==0)r.m2(v-B.aHQ[t],s)}}while(x<r.y2)}r.HT(256,d)
r.X=d[513]},
aU3(){var x,w,v,u
for(x=this.p1,w=0,v=0;w<7;){x===$&&C.a()
v+=x[w*2];++w}for(u=0;w<128;){x===$&&C.a()
u+=x[w*2];++w}for(;w<256;){x===$&&C.a()
v+=x[w*2];++w}this.y=v>A.r6(u,2)?0:1},
aET(){var x=this,w=x.am
w===$&&C.a()
if(w===16){w=x.ae
w===$&&C.a()
x.rB(w)
x.rB(A.r6(w,8))
x.am=x.ae=0}else if(w>=8){w=x.ae
w===$&&C.a()
x.rB(w)
x.ae=A.r6(x.ae,8)
x.am=x.am-8}},
apE(){var x=this,w=x.am
w===$&&C.a()
if(w>8){w=x.ae
w===$&&C.a()
x.rB(w)
x.rB(A.r6(w,8))}else if(w>0){w=x.ae
w===$&&C.a()
x.rB(w)}x.am=x.ae=0},
zH(d){var x,w,v,u,t,s=this,r=s.fr
r===$&&C.a()
if(r>=0)x=r
else x=-1
w=s.id
w===$&&C.a()
r=w-r
w=s.k4
w===$&&C.a()
if(w>0){if(s.y===2)s.aU3()
s.p4.a7D(s)
s.R8.a7D(s)
v=s.b58()
w=s.bl
w===$&&C.a()
u=A.r6(w+3+7,3)
w=s.C
w===$&&C.a()
t=A.r6(w+3+7,3)
if(t<=u)u=t}else{t=r+5
u=t
v=0}if(r+4<=u&&x!==-1)s.aBL(x,r,d)
else if(t===u){s.m2(2+(d?1:0),3)
s.ar5(B.w7,B.TC)}else{s.m2(4+(d?1:0),3)
r=s.p4.b
r===$&&C.a()
x=s.R8.b
x===$&&C.a()
s.byP(r+1,x+1,v+1)
x=s.p1
x===$&&C.a()
r=s.p2
r===$&&C.a()
s.ar5(x,r)}s.avE()
if(d)s.apE()
s.fr=s.id
s.a8n()},
b9V(d){var x,w,v,u,t,s=this,r=s.r
r===$&&C.a()
x=r-5
x=65535>x?x:65535
for(r=d===B.Bk;!0;){w=s.k2
w===$&&C.a()
if(w<=1){s.a8L()
w=s.k2
v=w===0
if(v&&r)return 0
if(v)break}v=s.id
v===$&&C.a()
w=s.id=v+w
s.k2=0
v=s.fr
v===$&&C.a()
u=v+x
if(w>=u){s.k2=w-u
s.id=u
s.zH(!1)}w=s.id
v=s.fr
t=s.Q
t===$&&C.a()
if(w-v>=t-262)s.zH(!1)}r=d===B.rm
s.zH(r)
return r?3:1},
aBL(d,e,f){var x,w=this
w.m2(f?1:0,3)
w.apE()
w.X=8
w.rB(e)
w.rB(A.r6(e,8))
x=(~e>>>0)+65536&65535
w.rB(x)
w.rB(A.r6(x,8))
x=w.ax
x===$&&C.a()
w.bvn(x,d,e)},
a8L(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.a
do{x=n.ay
x===$&&C.a()
w=n.k2
w===$&&C.a()
v=n.id
v===$&&C.a()
u=x-w-v
if(u===0&&v===0&&w===0){x=n.Q
x===$&&C.a()
u=x}else{x=n.Q
x===$&&C.a()
if(v>=x+x-262){w=n.ax
w===$&&C.a()
D.H.el(w,0,x,w,x)
x=n.k1
t=n.Q
n.k1=x-t
n.id=n.id-t
x=n.fr
x===$&&C.a()
n.fr=x-t
x=n.cy
x===$&&C.a()
w=n.CW
w===$&&C.a()
v=w.$flags|0
s=x
r=s
do{--s
q=w[s]&65535
x=q>=t?q-t:0
v&2&&C.L(w)
w[s]=x}while(--r,r!==0)
x=n.ch
x===$&&C.a()
w=x.$flags|0
s=t
r=s
do{--s
q=x[s]&65535
v=q>=t?q-t:0
w&2&&C.L(x)
x[s]=v}while(--r,r!==0)
u+=t}}x=m.c
w=m.d
w===$&&C.a()
if(x>=w)return
x=n.ax
x===$&&C.a()
r=n.bvC(x,n.id+n.k2,u)
x=n.k2=n.k2+r
if(x>=3){w=n.ax
v=n.id
p=w[v]&255
n.cx=p
o=n.dy
o===$&&C.a()
o=D.c.f7(p,o)
v=w[v+1]
w=n.dx
w===$&&C.a()
n.cx=((o^v&255)&w)>>>0}}while(x<262&&!(m.c>=m.d))},
b9T(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
for(x=d===B.Bk,w=$.y4.a,v=0;!0;){u=m.k2
u===$&&C.a()
if(u<262){m.a8L()
u=m.k2
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=m.cx
u===$&&C.a()
t=m.dy
t===$&&C.a()
t=D.c.f7(u,t)
u=m.ax
u===$&&C.a()
s=m.id
s===$&&C.a()
u=u[s+2]
r=m.dx
r===$&&C.a()
r=m.cx=((t^u&255)&r)>>>0
u=m.CW
u===$&&C.a()
t=u[r]
v=t&65535
q=m.ch
q===$&&C.a()
p=m.at
p===$&&C.a()
q.$flags&2&&C.L(q)
q[(s&p)>>>0]=t
u.$flags&2&&C.L(u)
u[r]=s}if(v!==0){u=m.id
u===$&&C.a()
t=m.Q
t===$&&C.a()
t=(u-v&65535)<=t-262
u=t}else u=!1
if(u){u=m.ok
u===$&&C.a()
if(u!==2)m.fx=m.awq(v)}u=m.fx
u===$&&C.a()
t=m.id
if(u>=3){t===$&&C.a()
o=m.Pf(t-m.k1,u-3)
u=m.k2
t=m.fx
u-=t
m.k2=u
s=$.y4.b
if(s===$.y4)C.a8(C.wf(w))
if(t<=s.b&&u>=3){u=m.fx=t-1
do{t=m.id=m.id+1
s=m.cx
s===$&&C.a()
r=m.dy
r===$&&C.a()
r=D.c.f7(s,r)
s=m.ax
s===$&&C.a()
s=s[t+2]
q=m.dx
q===$&&C.a()
q=m.cx=((r^s&255)&q)>>>0
s=m.CW
s===$&&C.a()
r=s[q]
v=r&65535
p=m.ch
p===$&&C.a()
n=m.at
n===$&&C.a()
p.$flags&2&&C.L(p)
p[(t&n)>>>0]=r
s.$flags&2&&C.L(s)
s[q]=t}while(u=m.fx=u-1,u!==0)
m.id=t+1}else{u=m.id=m.id+t
m.fx=0
t=m.ax
t===$&&C.a()
s=t[u]&255
m.cx=s
r=m.dy
r===$&&C.a()
r=D.c.f7(s,r)
u=t[u+1]
t=m.dx
t===$&&C.a()
m.cx=((r^u&255)&t)>>>0}}else{u=m.ax
u===$&&C.a()
t===$&&C.a()
o=m.Pf(0,u[t]&255)
m.k2=m.k2-1
m.id=m.id+1}if(o)m.zH(!1)}x=d===B.rm
m.zH(x)
return x?3:1},
b9U(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
for(x=d===B.Bk,w=$.y4.a,v=0;!0;){u=l.k2
u===$&&C.a()
if(u<262){l.a8L()
u=l.k2
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=l.cx
u===$&&C.a()
t=l.dy
t===$&&C.a()
t=D.c.f7(u,t)
u=l.ax
u===$&&C.a()
s=l.id
s===$&&C.a()
u=u[s+2]
r=l.dx
r===$&&C.a()
r=l.cx=((t^u&255)&r)>>>0
u=l.CW
u===$&&C.a()
t=u[r]
v=t&65535
q=l.ch
q===$&&C.a()
p=l.at
p===$&&C.a()
q.$flags&2&&C.L(q)
q[(s&p)>>>0]=t
u.$flags&2&&C.L(u)
u[r]=s}u=l.fx
u===$&&C.a()
l.k3=u
l.fy=l.k1
l.fx=2
t=!1
if(v!==0){s=$.y4.b
if(s===$.y4)C.a8(C.wf(w))
if(u<s.b){u=l.id
u===$&&C.a()
t=l.Q
t===$&&C.a()
t=(u-v&65535)<=t-262
u=t}else u=t}else u=t
t=2
if(u){u=l.ok
u===$&&C.a()
if(u!==2){u=l.awq(v)
l.fx=u}else u=t
s=!1
if(u<=5)if(l.ok!==1){if(u===3){s=l.id
s===$&&C.a()
s=s-l.k1>4096}}else s=!0
if(s){l.fx=2
u=t}}else u=t
t=l.k3
if(t>=3&&u<=t){u=l.id
u===$&&C.a()
o=u+l.k2-3
n=l.Pf(u-1-l.fy,t-3)
t=l.k2
u=l.k3
l.k2=t-(u-1)
u=l.k3=u-2
do{t=l.id=l.id+1
if(t<=o){s=l.cx
s===$&&C.a()
r=l.dy
r===$&&C.a()
r=D.c.f7(s,r)
s=l.ax
s===$&&C.a()
s=s[t+2]
q=l.dx
q===$&&C.a()
q=l.cx=((r^s&255)&q)>>>0
s=l.CW
s===$&&C.a()
r=s[q]
v=r&65535
p=l.ch
p===$&&C.a()
m=l.at
m===$&&C.a()
p.$flags&2&&C.L(p)
p[(t&m)>>>0]=r
s.$flags&2&&C.L(s)
s[q]=t}}while(u=l.k3=u-1,u!==0)
l.go=0
l.fx=2
l.id=t+1
if(n)l.zH(!1)}else{u=l.go
u===$&&C.a()
if(u!==0){u=l.ax
u===$&&C.a()
t=l.id
t===$&&C.a()
if(l.Pf(0,u[t-1]&255))l.zH(!1)
l.id=l.id+1
l.k2=l.k2-1}else{l.go=1
u=l.id
u===$&&C.a()
l.id=u+1
l.k2=l.k2-1}}}x=l.go
x===$&&C.a()
if(x!==0){x=l.ax
x===$&&C.a()
w=l.id
w===$&&C.a()
l.Pf(0,x[w-1]&255)
l.go=0}x=d===B.rm
l.zH(x)
return x?3:1},
awq(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=$.y4.cc().d,h=j.id
h===$&&C.a()
x=j.k3
x===$&&C.a()
w=j.Q
w===$&&C.a()
w-=262
v=h>w?h-w:0
u=$.y4.cc().c
w=j.at
w===$&&C.a()
t=j.id+258
s=j.ax
s===$&&C.a()
r=h+x
q=s[r-1]
p=s[r]
if(j.k3>=$.y4.cc().a)i=i>>>2
s=j.k2
s===$&&C.a()
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
h===$&&C.a()
d=h[d&w]&65535
if(d>v){--i
h=i!==0}else h=!1}while(h)
h=j.k2
if(n<=h)return n
return h},
bvC(d,e,f){var x,w,v,u,t,s,r=this
if(f!==0){x=r.a
w=x.c
x=x.d
x===$&&C.a()
x=w>=x}else x=!0
if(x)return 0
v=r.a.jR(f)
u=v.gA(0)
if(u===0)return 0
t=v.im()
s=t.length
if(u>s)u=s
D.H.hP(d,e,e+u,t)
r.e+=u
r.d=A.zH(t,r.d)
return u},
a8n(){var x,w=this,v=w.x
v===$&&C.a()
x=w.f
x===$&&C.a()
w.b.aPX(x,v)
x=w.w
x===$&&C.a()
w.w=x+v
v=w.x-v
w.x=v
if(v===0)w.w=0},
bdB(d){switch(d){case 0:return new A.vb(0,0,0,0,0)
case 1:return new A.vb(4,4,8,4,1)
case 2:return new A.vb(4,5,16,8,1)
case 3:return new A.vb(4,6,32,32,1)
case 4:return new A.vb(4,4,16,16,2)
case 5:return new A.vb(8,16,32,32,2)
case 6:return new A.vb(8,16,128,128,2)
case 7:return new A.vb(8,32,128,256,2)
case 8:return new A.vb(32,128,258,1024,2)
case 9:return new A.vb(32,258,258,4096,2)}return null}}
A.vb.prototype={}
A.cor.prototype={
bdg(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a
d===$&&C.a()
x=e.c
x===$&&C.a()
w=x.a
v=x.b
u=x.c
t=x.e
for(x=a0.rx,s=x.$flags|0,r=0;r<=15;++r){s&2&&C.L(x)
x[r]=0}q=a0.ry
p=a0.x1
p===$&&C.a()
o=q[p]
d.$flags&2&&C.L(d)
d[o*2+1]=0
for(n=p+1,p=w!=null,m=0;n<573;++n){l=q[n]
o=l*2
k=o+1
r=d[d[k]*2+1]+1
if(r>t){++m
r=t}d[k]=r
j=e.b
j===$&&C.a()
if(l>j)continue
j=x[r]
s&2&&C.L(x)
x[r]=j+1
i=l>=u?v[l-u]:0
h=d[o]
o=a0.bl
o===$&&C.a()
a0.bl=o+h*(r+i)
if(p){o=a0.C
o===$&&C.a()
a0.C=o+h*(w[k]+i)}}if(m===0)return
r=t-1
do{for(g=r;p=x[g],p===0;)--g
s&2&&C.L(x)
x[g]=p-1
p=g+1
x[p]=x[p]+2
x[t]=x[t]-1
m-=2}while(m>0)
for(r=t;r!==0;--r){l=x[r]
for(;l!==0;){--n
f=q[n]
s=e.b
s===$&&C.a()
if(f>s)continue
s=f*2
p=s+1
o=d[p]
if(o!==r){k=a0.bl
k===$&&C.a()
a0.bl=k+(r-o)*d[s]
d[p]=r}--l}}},
a7D(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
g===$&&C.a()
x=h.c
x===$&&C.a()
w=x.a
v=x.d
d.to=0
d.x1=573
for(x=g.$flags|0,u=d.ry,t=u.$flags|0,s=d.x2,r=s.$flags|0,q=0,p=-1;q<v;++q){o=q*2
if(g[o]!==0){o=++d.to
t&2&&C.L(u)
u[o]=q
r&2&&C.L(s)
s[q]=0
p=q}else{x&2&&C.L(g)
g[o+1]=0}}for(o=w!=null;n=d.to,n<2;){++n
d.to=n
if(p<2){++p
m=p}else m=0
t&2&&C.L(u)
u[n]=m
n=m*2
x&2&&C.L(g)
g[n]=1
r&2&&C.L(s)
s[m]=0
l=d.bl
l===$&&C.a()
d.bl=l-1
if(o){l=d.C
l===$&&C.a()
d.C=l-w[n+1]}}h.b=p
for(q=D.c.aL(n,2);q>=1;--q)d.ab3(g,q)
m=v
do{q=u[1]
o=u[d.to--]
t&2&&C.L(u)
u[1]=o
d.ab3(g,1)
k=u[1]
o=--d.x1
u[o]=q;--o
d.x1=o
u[o]=k
o=q*2
n=g[o]
l=k*2
j=g[l]
x&2&&C.L(g)
g[m*2]=n+j
j=s[q]
n=s[k]
if(j>n)n=j
r&2&&C.L(s)
s[m]=n+1
g[l+1]=m
g[o+1]=m
i=m+1
u[1]=m
d.ab3(g,1)
if(d.to>=2){m=i
continue}else break}while(!0)
u[--d.x1]=u[1]
h.bdg(d)
A.dIB(g,p,d.rx)}}
A.cJR.prototype={}
A.bxw.prototype={
gvB(){var x=this.a
if(x==null)return x
x.d===$&&C.a()
return x},
bmG(){var x,w,v=this
v.e=v.d=0
if(v.gvB()==null)return
while(!0){x=v.gvB()
w=x.c
x=x.d
x===$&&C.a()
if(!(w<x))break
if(!v.btD())return}},
btD(){var x,w,v,u=this,t=u.gvB()
if(t!=null){x=t.c
w=t.d
w===$&&C.a()
w=x>=w
x=w}else x=!0
if(x)return!1
v=u.rC(3)
switch(D.c.W(v,1)){case 0:if(u.btX()===-1)return!1
break
case 1:if(u.arD(u.r,u.w)===-1)return!1
break
case 2:if(u.btH()===-1)return!1
break
default:return!1}return(v&1)===0},
rC(d){var x,w,v,u,t=this
if(d===0)return 0
for(;x=t.e,x<d;){x=t.gvB()
w=x.c
x=x.d
x===$&&C.a()
if(w>=x)return-1
x=t.gvB()
w=x.b
w.toString
v=w[x.c++]
x=t.d
w=t.e
t.d=(x|D.c.f7(v,w))>>>0
t.e=w+8}w=t.d
u=D.c.eA(1,d)
t.d=D.c.i3(w,d)
t.e=x-d
return(w&u-1)>>>0},
aba(d){var x,w,v,u,t,s,r=this,q=d.a
q===$&&C.a()
x=d.b
for(;w=r.e,w<x;){w=r.gvB()
v=w.c
w=w.d
w===$&&C.a()
if(v>=w)return-1
w=r.gvB()
v=w.b
v.toString
u=v[w.c++]
w=r.d
v=r.e
r.d=(w|D.c.f7(u,v))>>>0
r.e=v+8}v=r.d
t=q[(v&D.c.f7(1,x)-1)>>>0]
s=t>>>16
r.d=D.c.i3(v,s)
r.e=w-s
return t&65535},
btX(){var x,w,v=this
v.e=v.d=0
x=v.rC(16)
w=v.rC(16)
if(x!==0&&x!==(w^65535)>>>0)return-1
if(x>v.gvB().gA(0))return-1
v.c.c2a(v.gvB().jR(x))
return 0},
btH(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.rC(5)
if(m===-1)return-1
m+=257
if(m>288)return-1
x=n.rC(5)
if(x===-1)return-1;++x
if(x>32)return-1
w=n.rC(4)
if(w===-1)return-1
w+=4
if(w>19)return-1
v=new Uint8Array(19)
for(u=0;u<w;++u){t=n.rC(3)
if(t===-1)return-1
v[B.Ge[u]]=t}s=A.cZk(v)
r=m+x
q=new Uint8Array(r)
p=J.dz(D.H.gar(q),0,m)
o=J.dz(D.H.gar(q),m,x)
if(n.b8Z(r,s,q)===-1)return-1
return n.arD(A.cZk(p),A.cZk(o))},
arD(d,e){var x,w,v,u,t,s,r,q,p=this
for(x=p.c;!0;){w=p.aba(d)
if(w<0||w>285)return-1
if(w===256)break
if(w<256){x.bi(w&255)
continue}v=w-257
u=B.aR8[v]+p.rC(B.aSF[v])
t=p.aba(e)
if(t<0||t>29)return-1
s=B.aRe[t]+p.rC(B.vT[t])
for(r=-s;u>s;){x.mI(x.jY(r))
u-=s}if(u===s)x.mI(x.jY(r))
else x.mI(x.ank(r,u-s))}for(;x=p.e,x>=8;){p.e=x-8
x=p.gvB()
r=--x.c
q=x.d
q===$&&C.a()
x.c=D.c.aK(r,0,q)}return 0},
b8Z(d,e,f){var x,w,v,u,t,s,r,q,p=this
for(x=f.$flags|0,w=0,v=0;v<d;){u=p.aba(e)
if(u===-1)return-1
t=0
switch(u){case 16:s=p.rC(2)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&C.L(f)
f[v]=w}break
case 17:s=p.rC(3)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&C.L(f)
f[v]=0}w=t
break
case 18:s=p.rC(7)
if(s===-1)return-1
s+=11
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&C.L(f)
f[v]=0}w=t
break
default:if(u<0||u>15)return-1
q=v+1
x&2&&C.L(f)
f[v]=u
v=q
w=u
break}}return 0}}
A.c6t.prototype={
E9(d){var x=A.dbh(B.rI,32768)
B.aoc.bMn(A.bxP(d,B.oG,null,null),x,!1,!1)
return x.al0()}}
A.aqp.prototype={
J(){return"ByteOrder."+this.b}}
A.bxO.prototype={
gA(d){var x=this.b
return x==null?0:x.length-this.c},
h(d,e){return this.b[this.c+e]},
aWT(d,e){var x=this.b
if(x==null)return A.bxP(C.b([],y.t),B.rI,null,null)
return A.bxP(x,this.a,d,e)},
cM(){var x=this.b
x.toString
return x[this.c++]},
im(){var x,w,v,u=this,t=u.b
if(t==null)return new Uint8Array(0)
x=u.gA(0)
w=u.c
v=t.length
if(w+x>v)x=v-w
return J.dz(D.H.gar(t),u.b.byteOffset+u.c,x)}}
A.bxQ.prototype={
ai(){var x=this,w=x.cM(),v=x.cM(),u=x.cM(),t=x.cM()
if(x.a===B.oG)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
jR(d){var x=this,w=x.aWT(d,x.c)
x.c=x.c+w.gA(0)
return w}}
A.aDt.prototype={
al0(){return J.dz(D.H.gar(this.c),this.c.byteOffset,this.b)},
bi(d){var x,w,v=this
if(v.b===v.c.length)v.bta()
x=v.c
w=v.b++
x.$flags&2&&C.L(x)
x[w]=d},
aPX(d,e){var x,w,v,u,t=this
if(e==null)e=d.length
for(;x=t.b,w=x+e,v=t.c,u=v.length,w>u;)t.aaL(w-u)
D.H.hP(v,x,w,d)
t.b+=e},
mI(d){return this.aPX(d,null)},
c2a(d){var x,w,v,u,t,s,r=this
while(!0){x=r.b
w=d.b
v=w==null
u=v?0:w.length-d.c
t=r.c
s=t.length
if(!(x+u>s))break
r.aaL(x+(v?0:w.length-d.c)-s)}if(!v)D.H.el(t,x,x+d.gA(0),w,d.c)
r.b=r.b+d.gA(0)},
ank(d,e){var x=this
if(d<0)d=x.b+d
if(e==null)e=x.b
else if(e<0)e=x.b+e
return J.dz(D.H.gar(x.c),x.c.byteOffset+d,e-d)},
jY(d){return this.ank(d,null)},
aaL(d){var x=d!=null?d>32768?d:32768:32768,w=this.c,v=w.length,u=new Uint8Array((v+x)*2)
D.H.hP(u,0,v,w)
this.c=u},
bta(){return this.aaL(null)},
gA(d){return this.b}}
A.bIp.prototype={}
A.bbw.prototype={
J(){return"Channel."+this.b}}
A.ix.prototype={
t(){var x=this.b
return++this.a<x.gA(x)},
gM(d){return this.b.h(0,this.a)},
$ibP:1}
A.R5.prototype={
ew(d){return new A.R5(new Uint16Array(C.ca(this.a)))},
gdK(){return B.jt},
gA(d){return this.a.length},
gf5(){return null},
h(d,e){var x,w=this.a
if(e<w.length){w=w[e]
x=$.iN
w=(x!=null?x:A.jK())[w]}else w=0
return w},
m(d,e,f){var x,w=this.a
if(e<w.length){x=A.hT(f)
w.$flags&2&&C.L(w)
w[e]=x}},
gdL(d){return this.gau(0)},
gau(d){var x,w=this.a
if(!D.eY.gZ(w)){w=w[0]
x=$.iN
w=(x!=null?x:A.jK())[w]}else w=0
return w},
sau(d,e){var x,w=this.a
if(!D.eY.gZ(w)){x=A.hT(e)
w.$flags&2&&C.L(w)
w[0]=x}},
gaF(){var x,w=this.a
if(w.length>1){w=w[1]
x=$.iN
w=(x!=null?x:A.jK())[w]}else w=0
return w},
saF(d){var x,w=this.a
if(w.length>1){x=A.hT(d)
w.$flags&2&&C.L(w)
w[1]=x}},
gaH(d){var x,w=this.a
if(w.length>2){w=w[2]
x=$.iN
w=(x!=null?x:A.jK())[w]}else w=0
return w},
saH(d,e){var x,w=this.a
if(w.length>2){x=A.hT(e)
w.$flags&2&&C.L(w)
w[2]=x}},
gaV(d){var x,w=this.a
if(w.length>3){w=w[3]
x=$.iN
w=(x!=null?x:A.jK())[w]}else w=0
return w},
gfW(){return this.gaV(0)/1},
gkh(){return A.kg(this)},
ji(d,e){var x,w,v=this
v.sau(0,e.gau(e))
v.saF(e.gaF())
v.saH(0,e.gaH(e))
x=e.gaV(e)
w=v.a
if(w.length>3){x=A.hT(x)
w.$flags&2&&C.L(w)
w[3]=x}},
gad(d){return new A.ix(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=C.A(this,C.t(this).i("x.E"))
x=x===C.aP(w)}return x},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
$ie2:1}
A.R6.prototype={
ew(d){return new A.R6(new Float32Array(C.ca(this.a)))},
gdK(){return B.l7},
gA(d){return this.a.length},
gf5(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x=this.a
if(e<x.length){x.$flags&2&&C.L(x)
x[e]=f}},
gdL(d){var x=this.a
return!D.fY.gZ(x)?x[0]:0},
gau(d){var x=this.a
return!D.fY.gZ(x)?x[0]:0},
sau(d,e){var x=this.a
if(!D.fY.gZ(x)){x.$flags&2&&C.L(x)
x[0]=e}},
gaF(){var x=this.a
return x.length>1?x[1]:0},
saF(d){var x=this.a
if(x.length>1){x.$flags&2&&C.L(x)
x[1]=d}},
gaH(d){var x=this.a
return x.length>2?x[2]:0},
saH(d,e){var x=this.a
if(x.length>2){x.$flags&2&&C.L(x)
x[2]=e}},
gaV(d){var x=this.a
return x.length>3?x[3]:1},
gfW(){return this.gaV(0)/1},
gkh(){return A.kg(this)},
ji(d,e){var x,w,v=this
v.sau(0,e.gau(e))
v.saF(e.gaF())
v.saH(0,e.gaH(e))
x=e.gaV(e)
w=v.a
if(w.length>3){w.$flags&2&&C.L(w)
w[3]=x}},
gad(d){return new A.ix(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=C.A(this,C.t(this).i("x.E"))
x=x===C.aP(w)}return x},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
$ie2:1}
A.R7.prototype={
ew(d){return new A.R7(new Float64Array(C.ca(this.a)))},
gdK(){return B.mM},
gA(d){return this.a.length},
gf5(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x=this.a
if(e<x.length){x.$flags&2&&C.L(x)
x[e]=f}},
gdL(d){var x=this.a
return!D.fm.gZ(x)?x[0]:0},
gau(d){var x=this.a
return!D.fm.gZ(x)?x[0]:0},
sau(d,e){var x=this.a
if(!D.fm.gZ(x)){x.$flags&2&&C.L(x)
x[0]=e}},
gaF(){var x=this.a
return x.length>1?x[1]:0},
saF(d){var x=this.a
if(x.length>1){x.$flags&2&&C.L(x)
x[1]=d}},
gaH(d){var x=this.a
return x.length>2?x[2]:0},
saH(d,e){var x=this.a
if(x.length>2){x.$flags&2&&C.L(x)
x[2]=e}},
gaV(d){var x=this.a
return x.length>3?x[3]:1},
gfW(){return this.gaV(0)/1},
gkh(){return A.kg(this)},
ji(d,e){var x,w,v=this
v.sau(0,e.gau(e))
v.saF(e.gaF())
v.saH(0,e.gaH(e))
x=e.gaV(e)
w=v.a
if(w.length>3){w.$flags&2&&C.L(w)
w[3]=x}},
gad(d){return new A.ix(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=C.A(this,C.t(this).i("x.E"))
x=x===C.aP(w)}return x},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
$ie2:1}
A.R8.prototype={
ew(d){return new A.R8(new Int16Array(C.ca(this.a)))},
gdK(){return B.mO},
gA(d){return this.a.length},
gf5(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.e.L(f)
w.$flags&2&&C.L(w)
w[e]=x}},
gdL(d){var x=this.a
return!D.lD.gZ(x)?x[0]:0},
gau(d){var x=this.a
return!D.lD.gZ(x)?x[0]:0},
sau(d,e){var x,w=this.a
if(!D.lD.gZ(w)){x=D.e.L(e)
w.$flags&2&&C.L(w)
w[0]=x}},
gaF(){var x=this.a
return x.length>1?x[1]:0},
saF(d){var x,w=this.a
if(w.length>1){x=D.e.L(d)
w.$flags&2&&C.L(w)
w[1]=x}},
gaH(d){var x=this.a
return x.length>2?x[2]:0},
saH(d,e){var x,w=this.a
if(w.length>2){x=D.e.L(e)
w.$flags&2&&C.L(w)
w[2]=x}},
gaV(d){var x=this.a
return x.length>3?x[3]:0},
gfW(){return this.gaV(0)/32767},
gkh(){return A.kg(this)},
ji(d,e){var x,w,v=this
v.sau(0,e.gau(e))
v.saF(e.gaF())
v.saH(0,e.gaH(e))
x=e.gaV(e)
w=v.a
if(w.length>3){x=D.e.L(x)
w.$flags&2&&C.L(w)
w[3]=x}},
gad(d){return new A.ix(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=C.A(this,C.t(this).i("x.E"))
x=x===C.aP(w)}return x},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
$ie2:1}
A.R9.prototype={
ew(d){return new A.R9(new Int32Array(C.ca(this.a)))},
gdK(){return B.mP},
gA(d){return this.a.length},
gf5(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.e.L(f)
w.$flags&2&&C.L(w)
w[e]=x}},
gdL(d){var x=this.a
return!D.d8.gZ(x)?x[0]:0},
gau(d){var x=this.a
return!D.d8.gZ(x)?x[0]:0},
sau(d,e){var x=this.a
if(!D.d8.gZ(x)){C.bA(e)
x.$flags&2&&C.L(x)
x[0]=e}},
gaF(){var x=this.a
return x.length>1?x[1]:0},
saF(d){var x,w=this.a
if(w.length>1){x=D.e.L(d)
w.$flags&2&&C.L(w)
w[1]=x}},
gaH(d){var x=this.a
return x.length>2?x[2]:0},
saH(d,e){var x,w=this.a
if(w.length>2){x=D.e.L(e)
w.$flags&2&&C.L(w)
w[2]=x}},
gaV(d){var x=this.a
return x.length>3?x[3]:0},
gfW(){return this.gaV(0)/2147483647},
gkh(){return A.kg(this)},
ji(d,e){var x,w,v=this
v.sau(0,e.gau(e))
v.saF(e.gaF())
v.saH(0,e.gaH(e))
x=e.gaV(e)
w=v.a
if(w.length>3){x=D.e.L(x)
w.$flags&2&&C.L(w)
w[3]=x}},
gad(d){return new A.ix(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=C.A(this,C.t(this).i("x.E"))
x=x===C.aP(w)}return x},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
$ie2:1}
A.Ra.prototype={
ew(d){return new A.Ra(new Int8Array(C.ca(this.a)))},
gdK(){return B.mN},
gA(d){return this.a.length},
gf5(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.e.L(f)
w.$flags&2&&C.L(w)
w[e]=x}},
gdL(d){var x=this.a
return!D.lE.gZ(x)?x[0]:0},
gau(d){var x=this.a
return!D.lE.gZ(x)?x[0]:0},
sau(d,e){var x,w=this.a
if(!D.lE.gZ(w)){x=D.e.L(e)
w.$flags&2&&C.L(w)
w[0]=x}},
gaF(){var x=this.a
return x.length>1?x[1]:0},
saF(d){var x,w=this.a
if(w.length>1){x=D.e.L(d)
w.$flags&2&&C.L(w)
w[1]=x}},
gaH(d){var x=this.a
return x.length>2?x[2]:0},
saH(d,e){var x,w=this.a
if(w.length>2){x=D.e.L(e)
w.$flags&2&&C.L(w)
w[2]=x}},
gaV(d){var x=this.a
return x.length>3?x[3]:0},
gfW(){return this.gaV(0)/127},
gkh(){return A.kg(this)},
ji(d,e){var x,w,v=this
v.sau(0,e.gau(e))
v.saF(e.gaF())
v.saH(0,e.gaH(e))
x=e.gaV(e)
w=v.a
if(w.length>3){x=D.e.L(x)
w.$flags&2&&C.L(w)
w[3]=x}},
gad(d){return new A.ix(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=C.A(this,C.t(this).i("x.E"))
x=x===C.aP(w)}return x},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
$ie2:1}
A.Rd.prototype={
ew(d){var x=this.b
x===$&&C.a()
return new A.Rd(this.a,x)},
gdK(){return B.hJ},
gf5(){return null},
CK(d){var x
if(d<this.a){x=this.b
x===$&&C.a()
x=D.c.hv(x,7-d)&1}else x=0
return x},
zA(d,e){var x
if(d>=this.a)return
d=7-d
x=this.b
x===$&&C.a()
this.b=e!==0?(x|D.c.f7(1,d))>>>0:(x&~(D.c.f7(1,d)&255))>>>0},
h(d,e){return this.CK(e)},
m(d,e,f){return this.zA(e,f)},
gdL(d){return this.CK(0)},
gau(d){return this.CK(0)},
sau(d,e){this.zA(0,e)},
gaF(){return this.CK(1)},
saF(d){this.zA(1,d)},
gaH(d){return this.CK(2)},
saH(d,e){this.zA(2,e)},
gaV(d){return this.CK(3)},
gfW(){return this.CK(3)/1},
gkh(){return A.kg(this)},
ji(d,e){this.iZ(e.gau(e),e.gaF(),e.gaH(e),e.gaV(e))},
iZ(d,e,f,g){var x=this
x.zA(0,d)
x.zA(1,e)
x.zA(2,f)
x.zA(3,g)},
gad(d){return new A.ix(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a){x=e.gv(e)
w=C.A(this,C.t(this).i("x.E"))
x=x===C.aP(w)}return x},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
$ie2:1,
gA(d){return this.a}}
A.Re.prototype={
ew(d){return new A.Re(new Uint16Array(C.ca(this.a)))},
gdK(){return B.cV},
gA(d){return this.a.length},
gf5(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.e.L(f)
w.$flags&2&&C.L(w)
w[e]=x}},
gdL(d){var x=this.a
return!D.eY.gZ(x)?x[0]:0},
gau(d){var x=this.a
return!D.eY.gZ(x)?x[0]:0},
sau(d,e){var x,w=this.a
if(!D.eY.gZ(w)){x=D.e.L(e)
w.$flags&2&&C.L(w)
w[0]=x}},
gaF(){var x=this.a
return x.length>1?x[1]:0},
saF(d){var x,w=this.a
if(w.length>1){x=D.e.L(d)
w.$flags&2&&C.L(w)
w[1]=x}},
gaH(d){var x=this.a
return x.length>2?x[2]:0},
saH(d,e){var x,w=this.a
if(w.length>2){x=D.e.L(e)
w.$flags&2&&C.L(w)
w[2]=x}},
gaV(d){var x=this.a
return x.length>3?x[3]:0},
gfW(){return this.gaV(0)/65535},
gkh(){return A.kg(this)},
ji(d,e){var x,w,v=this
v.sau(0,e.gau(e))
v.saF(e.gaF())
v.saH(0,e.gaH(e))
x=e.gaV(e)
w=v.a
if(w.length>3){x=D.e.L(x)
w.$flags&2&&C.L(w)
w[3]=x}},
gad(d){return new A.ix(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=C.A(this,C.t(this).i("x.E"))
x=x===C.aP(w)}return x},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
$ie2:1}
A.Rf.prototype={
ew(d){var x=this.b
x===$&&C.a()
return new A.Rf(this.a,x)},
gdK(){return B.iB},
gf5(){return null},
CL(d){var x
if(d<this.a){x=this.b
x===$&&C.a()
x=D.c.hv(x,6-(d<<1>>>0))&3}else x=0
return x},
zB(d,e){var x,w,v
if(d>=this.a)return
x=B.aGI[d]
w=D.e.L(e)
v=this.b
v===$&&C.a()
this.b=(v&x|D.c.f7(w&3,6-(d<<1>>>0)))>>>0},
h(d,e){return this.CL(e)},
m(d,e,f){return this.zB(e,f)},
gdL(d){return this.CL(0)},
gau(d){return this.CL(0)},
sau(d,e){this.zB(0,e)},
gaF(){return this.CL(1)},
saF(d){this.zB(1,d)},
gaH(d){return this.CL(2)},
saH(d,e){this.zB(2,e)},
gaV(d){return this.CL(3)},
gfW(){return this.CL(3)/3},
gkh(){return A.kg(this)},
ji(d,e){this.iZ(e.gau(e),e.gaF(),e.gaH(e),e.gaV(e))},
iZ(d,e,f,g){var x=this
x.zB(0,d)
x.zB(1,e)
x.zB(2,f)
x.zB(3,g)},
gad(d){return new A.ix(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a){x=e.gv(e)
w=C.A(this,C.t(this).i("x.E"))
x=x===C.aP(w)}return x},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
$ie2:1,
gA(d){return this.a}}
A.Rg.prototype={
ew(d){return new A.Rg(new Uint32Array(C.ca(this.a)))},
gdK(){return B.l8},
gA(d){return this.a.length},
gf5(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.e.L(f)
w.$flags&2&&C.L(w)
w[e]=x}},
gdL(d){var x=this.a
return!D.bK.gZ(x)?x[0]:0},
gau(d){var x=this.a
return!D.bK.gZ(x)?x[0]:0},
sau(d,e){var x,w=this.a
if(!D.bK.gZ(w)){x=D.e.L(e)
w.$flags&2&&C.L(w)
w[0]=x}},
gaF(){var x=this.a
return x.length>1?x[1]:0},
saF(d){var x,w=this.a
if(w.length>1){x=D.e.L(d)
w.$flags&2&&C.L(w)
w[1]=x}},
gaH(d){var x=this.a
return x.length>2?x[2]:0},
saH(d,e){var x,w=this.a
if(w.length>2){x=D.e.L(e)
w.$flags&2&&C.L(w)
w[2]=x}},
gaV(d){var x=this.a
return x.length>3?x[3]:0},
gfW(){return this.gaV(0)/4294967295},
gkh(){return A.kg(this)},
ji(d,e){var x,w,v=this
v.sau(0,e.gau(e))
v.saF(e.gaF())
v.saH(0,e.gaH(e))
x=e.gaV(e)
w=v.a
if(w.length>3){x=D.e.L(x)
w.$flags&2&&C.L(w)
w[3]=x}},
gad(d){return new A.ix(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=C.A(this,C.t(this).i("x.E"))
x=x===C.aP(w)}return x},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
$ie2:1}
A.Rh.prototype={
ew(d){return new A.Rh(this.a,new Uint8Array(C.ca(this.b)))},
gdK(){return B.iC},
gf5(){return null},
CM(d){var x
if(d<0||d>=this.a)x=0
else{x=this.b
x=d<2?D.c.hv(x[0],4-(d<<2>>>0))&15:D.c.hv(x[1],4-((d&1)<<2))&15}return x},
zC(d,e){var x,w,v,u
if(d>=this.a)return
x=D.c.aK(D.e.L(e),0,15)
if(d>1){d&=1
w=1}else w=0
if(d===0){v=this.b
u=v[w]
v.$flags&2&&C.L(v)
v[w]=(u&15|x<<4)>>>0}else if(d===1){v=this.b
u=v[w]
v.$flags&2&&C.L(v)
v[w]=(u&240|x)>>>0}},
h(d,e){return this.CM(e)},
m(d,e,f){return this.zC(e,f)},
gdL(d){return this.CM(0)},
gau(d){return this.CM(0)},
sau(d,e){this.zC(0,e)},
gaF(){return this.CM(1)},
saF(d){this.zC(1,d)},
gaH(d){return this.CM(2)},
saH(d,e){this.zC(2,e)},
gaV(d){return this.CM(3)},
gfW(){return this.CM(3)/15},
gkh(){return A.kg(this)},
ji(d,e){this.iZ(e.gau(e),e.gaF(),e.gaH(e),e.gaV(e))},
iZ(d,e,f,g){var x=this
x.zC(0,d)
x.zC(1,e)
x.zC(2,f)
x.zC(3,g)},
gad(d){return new A.ix(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a){x=e.gv(e)
w=C.A(this,C.t(this).i("x.E"))
x=x===C.aP(w)}return x},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
$ie2:1,
gA(d){return this.a}}
A.Aj.prototype={
b2b(d,e,f,g){var x=this.a
x.$flags&2&&C.L(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g},
ew(d){return new A.Aj(new Uint8Array(C.ca(this.a)))},
gdK(){return B.ai},
gA(d){return this.a.length},
gf5(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.e.L(f)
w.$flags&2&&C.L(w)
w[e]=x}},
gdL(d){var x=this.a
return!D.H.gZ(x)?x[0]:0},
gau(d){var x=this.a
return!D.H.gZ(x)?x[0]:0},
sau(d,e){var x,w=this.a
if(!D.H.gZ(w)){x=D.e.L(e)
w.$flags&2&&C.L(w)
w[0]=x}},
gaF(){var x=this.a
return x.length>1?x[1]:0},
saF(d){var x,w=this.a
if(w.length>1){x=D.e.L(d)
w.$flags&2&&C.L(w)
w[1]=x}},
gaH(d){var x=this.a
return x.length>2?x[2]:0},
saH(d,e){var x,w=this.a
if(w.length>2){x=D.e.L(e)
w.$flags&2&&C.L(w)
w[2]=x}},
gaV(d){var x=this.a
return x.length>3?x[3]:255},
gfW(){return this.gaV(0)/255},
gkh(){return A.kg(this)},
ji(d,e){var x,w,v=this
v.sau(0,e.gau(e))
v.saF(e.gaF())
v.saH(0,e.gaH(e))
x=e.gaV(e)
w=v.a
if(w.length>3){x=D.e.L(x)
w.$flags&2&&C.L(w)
w[3]=x}},
gad(d){return new A.ix(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===this.a.length){x=e.gv(e)
w=C.A(this,C.t(this).i("x.E"))
x=x===C.aP(w)}return x},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
$ie2:1}
A.ark.prototype={}
A.Rb.prototype={}
A.a1n.prototype={
ew(d){return new A.a1n(this.a)},
gdK(){return B.ai},
gA(d){return 4},
gf5(){return null},
h(d,e){var x
if(e>=0&&e<4){x=e<<3>>>0
x=D.c.i3((this.a&D.c.eA(255,x))>>>0,x)}else x=0
return x},
m(d,e,f){},
ji(d,e){},
gdL(d){return this.h(0,0)},
gau(d){return this.h(0,0)},
sau(d,e){},
gaF(){return this.h(0,1)},
saF(d){},
gaH(d){return this.h(0,2)},
saH(d,e){},
gaV(d){return this.h(0,3)},
gfW(){return this.gaV(this)/255},
gkh(){return A.kg(this)},
gad(d){return new A.ix(this)},
k(d,e){var x,w,v=this
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gA(e)===v.gA(v)){x=e.gv(e)
w=C.A(v,C.t(v).i("x.E"))
x=x===C.aP(w)}return x},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
$ie2:1}
A.arx.prototype={
gaV(d){return 255},
gfW(){return 1},
gA(d){return 3}}
A.p9.prototype={
J(){return"Format."+this.b}}
A.aq9.prototype={
J(){return"BlendMode."+this.b}}
A.Sm.prototype={
U2(d){var x=$.cXb()
if(!x.a4(0,d))return"<unknown>"
return x.h(0,d).a},
j(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(x=j.a,w=new C.ci(x,x.r,x.e,C.t(x).i("ci<1>")),v=y.p,u=y.r,t=y.N,s=y.P,r="";w.t();){q=w.d
r+=q+"\n"
p=x.h(0,q)
for(q=p.a,q=new C.ci(q,q.r,q.e,C.t(q).i("ci<1>"));q.t();){o=q.d
n=p.h(0,o)
r=n==null?r+("\t"+j.U2(o)+"\n"):r+("\t"+j.U2(o)+": "+n.j(0)+"\n")}for(q=p.b.a,o=new C.ci(q,q.r,q.e,C.t(q).i("ci<1>"));o.t();){m=o.d
r+=m+"\n"
if(!q.a4(0,m))q.m(0,m,new A.rF(C.H(v,u),new A.w7(C.H(t,s))))
l=q.h(0,m)
for(m=l.a,m=new C.ci(m,m.r,m.e,C.t(m).i("ci<1>"));m.t();){k=m.d
n=l.h(0,k)
r=n==null?r+("\t"+j.U2(k)+"\n"):r+("\t"+j.U2(k)+": "+n.j(0)+"\n")}}}return r.charCodeAt(0)==0?r:r},
jB(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0="exif",a1="interop",a2=a4.b
a4.b=!0
a4.lB(19789)
a4.lB(42)
a4.jC(8)
x=d.a
if(x.h(0,"ifd0")==null)x.m(0,"ifd0",new A.rF(C.H(y.p,y.r),new A.w7(C.H(y.N,y.P))))
w=y.N
v=y.p
u=C.H(w,v)
for(t=C.t(x),s=new C.ci(x,x.r,x.e,t.i("ci<1>")),r=y.r,q=y.P,p=8;s.t();){o=s.d
n=x.h(0,o)
n.toString
u.m(0,o,p)
o=n.b.a
if(o.a4(0,a0)){m=new Uint32Array(1)
m[0]=0
n.m(0,34665,new A.u9(m))}else n.a.I(0,34665)
if(o.a4(0,a1)){m=new Uint32Array(1)
m[0]=0
n.m(0,40965,new A.u9(m))}else n.a.I(0,40965)
if(o.a4(0,"gps")){m=new Uint32Array(1)
m[0]=0
n.m(0,34853,new A.u9(m))}else n.a.I(0,34853)
n=n.a
p+=2+12*n.a+4
for(n=new C.bw(n,n.r,n.e,C.t(n).i("bw<2>"));n.t();){m=n.d
l=B.lk[m.gfQ(m).a]*m.gA(m)
if(l>4)p+=l}for(n=new C.ci(o,o.r,o.e,C.t(o).i("ci<1>"));n.t();){m=n.d
if(!o.a4(0,m))o.m(0,m,new A.rF(C.H(v,r),new A.w7(C.H(w,q))))
k=o.h(0,m)
k.toString
u.m(0,m,p)
k=k.a
j=2+12*k.a
for(m=new C.bw(k,k.r,k.e,C.t(k).i("bw<2>"));m.t();){k=m.d
l=B.lk[k.gfQ(k).a]*k.gA(k)
if(l>4)j+=l}p+=j}}i=x.a
for(s=t.i("bE<1>"),o=i-1,t=t.i("aE<2>"),h=0;h<i;++h){g=new C.bE(x,s).e_(0,h)
f=new C.aE(x,t).e_(0,h)
n=f.b.a
if(n.a4(0,a0)){m=f.h(0,34665)
m.toString
k=u.h(0,a0)
k.toString
m.wU(k)}if(n.a4(0,a1)){m=f.h(0,40965)
m.toString
k=u.h(0,a1)
k.toString
m.wU(k)}if(n.a4(0,"gps")){m=f.h(0,34853)
m.toString
k=u.h(0,"gps")
k.toString
m.wU(k)}m=u.h(0,g)
m.toString
d.aDH(a4,f,m+2+12*f.a.a+4)
if(h===o)a4.jC(0)
else{m=u.h(0,new C.bE(x,s).e_(0,h+1))
m.toString
a4.jC(m)}d.aDI(a4,f)
for(m=new C.ci(n,n.r,n.e,C.t(n).i("ci<1>"));m.t();){k=m.d
if(!n.a4(0,k))n.m(0,k,new A.rF(C.H(v,r),new A.w7(C.H(w,q))))
e=n.h(0,k)
e.toString
k=u.h(0,k)
k.toString
d.aDH(a4,e,k+2+12*e.a.a)
d.aDI(a4,e)}}a4.b=a2},
aDH(d,e,f){var x,w,v,u,t,s,r=e.a
d.lB(r.a)
for(r=new C.ci(r,r.r,r.e,C.t(r).i("ci<1>"));r.t();){x=r.d
w=e.h(0,x)
w.toString
v=x===273
u=v&&w.gfQ(w)===B.jx?B.dI:w.gfQ(w)
t=v&&w.gfQ(w)===B.jx?1:w.gA(w)
d.lB(x)
d.lB(u.a)
d.jC(t)
s=B.lk[w.gfQ(w).a]*w.gA(w)
if(s<=4){w.jB(0,d)
for(;s<4;){d.bi(0);++s}}else{d.jC(f)
f+=s}}return f},
aDI(d,e){var x,w
for(x=e.a,x=new C.bw(x,x.r,x.e,C.t(x).i("bw<2>"));x.t();){w=x.d
if(B.lk[w.gfQ(w).a]*w.gA(w)>4)w.jB(0,d)}},
oH(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a5.e
a5.e=!0
x=a5.d
w=a5.aw()
if(w===18761){a5.e=!1
if(a5.aw()!==42){a5.e=a3
return!1}}else if(w===19789){a5.e=!0
if(a5.aw()!==42){a5.e=a3
return!1}}else return!1
v=a5.ai()
for(u=this.a,t=y.v,s=y.p,r=y.r,q=y.N,p=y.P,o=a5.c,n=0;v>0;v=e){m=x+v
a5.d=m
if(o-m<2)break
l=new A.rF(C.H(s,r),new A.w7(C.H(q,p)))
k=a5.aw()
j=C.b(new Array(k),t)
for(i=0;i<k;++i)j[i]=this.ayz(a5,x)
for(m=j.length,h=0;h<j.length;j.length===m||(0,C.K)(j),++h){g=j[h]
f=g.b
if(f!=null)l.m(0,g.a,f)}u.m(0,"ifd"+n,l);++n
e=a5.ai()
if(e===v)break}for(u=new C.bw(u,u.r,u.e,C.t(u).i("bw<2>"));u.t();){o=u.d
for(m=J.aJ(B.H3.gex(B.H3)),f=o.a,d=o.b.a;m.t();){a0=m.gM(m)
if(f.a4(0,a0)){a5.d=x+o.h(0,a0).L(0)
l=new A.rF(C.H(s,r),new A.w7(C.H(q,p)))
k=a5.aw()
j=C.b(new Array(k),t)
for(i=0;i<k;++i)j[i]=this.ayz(a5,x)
for(a1=j.length,h=0;h<j.length;j.length===a1||(0,C.K)(j),++h){g=j[h]
a2=g.b
if(a2!=null)l.m(0,g.a,a2)}a0=B.H3.h(0,a0)
a0.toString
d.m(0,a0,l)}}}a5.e=a3
return!1},
ayz(d,e){var x,w,v,u,t=d.aw(),s=d.aw(),r=d.ai(),q=new A.aRT(t,null)
if(s>13)return q
x=B.TN[s]
w=r*B.lk[s]
v=d.d
if((w>4?d.d=d.ai()+e:v)+w>d.c)return q
u=d.jR(w)
switch(x.a){case 0:break
case 6:q.b=new A.ys(new Int8Array(C.ca(J.cXj(D.H.gar(u.im()),0,r))))
break
case 1:q.b=new A.w6(new Uint8Array(C.ca(u.jR(r).im())))
break
case 7:q.b=new A.KK(new Uint8Array(C.ca(u.jR(r).im())))
break
case 2:q.b=new A.ER(r===0?"":u.jS(r-1))
break
case 3:q.b=A.d9a(u,r)
break
case 4:q.b=A.d95(u,r)
break
case 5:q.b=A.d96(u,r)
break
case 10:q.b=A.d98(u,r)
break
case 8:q.b=A.d99(u,r)
break
case 9:q.b=A.d97(u,r)
break
case 11:q.b=A.d9c(u,r)
break
case 12:q.b=A.d94(u,r)
break}d.d=v+4
return q}}
A.aRT.prototype={
gn(d){return this.b}}
A.avE.prototype={}
A.w7.prototype={
b2p(d){d.a.aM(0,new A.bwh(this))},
gfC(d){var x=this.a
return new C.aE(x,C.t(x).i("aE<2>"))},
gZ(d){var x,w=this.a
if(w.a===0)return!0
for(w=new C.bw(w,w.r,w.e,C.t(w).i("bw<2>"));w.t();){x=w.d
if(!(x.a.a===0&&x.b.gZ(0)))return!1}return!0},
a4(d,e){return this.a.a4(0,e)},
h(d,e){var x=this.a
if(!x.a4(0,e))x.m(0,e,new A.rF(C.H(y.p,y.r),new A.w7(C.H(y.N,y.P))))
x=x.h(0,e)
x.toString
return x},
m(d,e,f){this.a.m(0,e,f)}}
A.rF.prototype={
gfC(d){var x=this.a
return new C.aE(x,C.t(x).i("aE<2>"))},
gZ(d){return this.a.a===0&&this.b.gZ(0)},
aeM(d){d.a.aM(0,new A.bwi(this))
d.b.a.aM(0,new A.bwj(this))},
a4(d,e){return this.a.a4(0,e)},
h(d,e){if(typeof e=="string")e=B.a3n.h(0,e)
if(C.hm(e))return this.a.h(0,e)
return null},
m(d,e,f){var x,w,v,u,t,s,r=this
if(typeof e=="string")e=B.a3n.h(0,e)
if(!C.hm(e))return
if(f==null)r.a.I(0,e)
else if(f instanceof A.l9)r.a.m(0,e,f)
else{x=$.cXb().h(0,e)
if(x!=null)switch(x.b.a){case 1:if(y.L.b(f))r.a.m(0,e,new A.w6(new Uint8Array(C.ca(new Uint8Array(C.ca(f))))))
else if(C.hm(f)){w=new Uint8Array(1)
w[0]=f
r.a.m(0,e,new A.w6(w))}break
case 2:if(typeof f=="string")r.a.m(0,e,new A.ER(f))
break
case 3:if(y.L.b(f))r.a.m(0,e,new A.AW(new Uint16Array(C.ca(new Uint16Array(C.ca(f))))))
else if(C.hm(f))r.a.m(0,e,A.dxw(f))
break
case 4:if(y.L.b(f))r.a.m(0,e,new A.u9(new Uint32Array(C.ca(new Uint32Array(C.ca(f))))))
else if(C.hm(f))r.a.m(0,e,A.dxv(f))
break
case 5:if(y.k.b(f))r.a.m(0,e,new A.w8(C.aO(f,!0,y.i)))
else if(y.L.b(f)&&J.bn(f)===2){w=J.a1(f)
r.a.m(0,e,new A.w8(C.b([new A.pv(w.h(f,0),w.h(f,1))],y.j)))}else if(f instanceof A.pv)r.a.m(0,e,new A.w8(C.b([new A.pv(f.a,f.b)],y.j)))
else if(y.f.b(f)){w=J.a1(f)
v=w.gA(f)
u=y.i
t=J.jt(v,u)
for(s=0;s<v;++s)t[s]=new A.pv(J.v(w.h(f,s),0),J.v(w.h(f,s),1))
r.a.m(0,e,new A.w8(C.aO(t,!0,u)))}break
case 6:if(y.L.b(f))r.a.m(0,e,new A.ys(new Int8Array(C.ca(new Int8Array(C.ca(f))))))
else if(C.hm(f)){w=new Int8Array(1)
w[0]=f
r.a.m(0,e,new A.ys(w))}break
case 7:if(y.L.b(f))r.a.m(0,e,new A.KK(new Uint8Array(C.ca(new Uint8Array(C.ca(f))))))
break
case 8:if(y.L.b(f))r.a.m(0,e,new A.AV(new Int16Array(C.ca(new Int16Array(C.ca(f))))))
else if(C.hm(f)){w=new Int16Array(1)
w[0]=f
r.a.m(0,e,new A.AV(w))}break
case 9:if(y.L.b(f))r.a.m(0,e,new A.AU(new Int32Array(C.ca(new Int32Array(C.ca(f))))))
else if(C.hm(f)){w=new Int32Array(1)
w[0]=f
r.a.m(0,e,new A.AU(w))}break
case 10:if(y.k.b(f))r.a.m(0,e,new A.w9(C.aO(f,!0,y.i)))
else if(y.L.b(f)&&J.bn(f)===2){w=J.a1(f)
r.a.m(0,e,new A.w9(C.b([new A.pv(w.h(f,0),w.h(f,1))],y.j)))}else if(f instanceof A.pv)r.a.m(0,e,new A.w9(C.b([f],y.j)))
else if(y.f.b(f)){w=J.a1(f)
v=w.gA(f)
u=y.i
t=J.jt(v,u)
for(s=0;s<v;++s)t[s]=new A.pv(J.v(w.h(f,s),0),J.v(w.h(f,s),1))
r.a.m(0,e,new A.w9(C.aO(t,!0,u)))}break
case 11:if(y.H.b(f))r.a.m(0,e,new A.ET(new Float32Array(C.ca(new Float32Array(C.ca(f))))))
else if(typeof f=="number")r.a.m(0,e,A.d9b(f))
else if(C.hm(f))r.a.m(0,e,A.d9b(f))
break
case 12:if(y.H.b(f))r.a.m(0,e,new A.ES(new Float64Array(C.ca(new Float64Array(C.ca(f))))))
else if(typeof f=="number")r.a.m(0,e,A.d93(f))
else if(C.hm(f))r.a.m(0,e,A.d93(f))
break
case 0:break}}},
gik(d){var x=this.a.h(0,274)
return x==null?null:x.L(0)},
sik(d,e){this.a.I(0,274)}}
A.oj.prototype={
J(){return"IfdValueType."+this.b}}
A.l9.prototype={
jU(d,e){return 0},
L(d){return this.jU(0,0)},
v1(d){return 0},
v0(){return new Uint8Array(0)},
j(d){return""},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.l9&&x.gfQ(x)===e.gfQ(e)&&x.gA(x)===e.gA(e)&&x.gv(x)===e.gv(e)},
gv(d){return 0},
wU(d){}}
A.w6.prototype={
ew(d){return new A.w6(new Uint8Array(C.ca(this.a)))},
gfQ(d){return B.Qg},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.w6){x=this.a
x=x.length===e.a.length&&C.aP(x)===C.aP(e.a)}else x=!1
return x},
gv(d){return C.aP(this.a)},
jU(d,e){return this.a[e]},
L(d){return this.jU(0,0)},
wU(d){var x=this.a
x.$flags&2&&C.L(x)
x[0]=d},
v0(){return this.a},
jB(d,e){e.mI(this.a)},
j(d){var x=this.a
return x.length===1?""+x[0]:C.o(x)},
gn(d){return this.a}}
A.ER.prototype={
ew(d){return new A.ER(this.a)},
gfQ(d){return B.bU},
gA(d){return this.a.length+1},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.ER){x=this.a
x=x.length+1===e.a.length+1&&D.d.gv(x)===D.d.gv(e.a)}else x=!1
return x},
gv(d){return D.d.gv(this.a)},
v0(){return new Uint8Array(C.ca(new C.f0(this.a)))},
jB(d,e){e.mI(new C.f0(this.a))
e.bi(0)},
j(d){return this.a},
gn(d){return this.a}}
A.AW.prototype={
b2u(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.aw()
w.$flags&2&&C.L(w)
w[x]=v}},
ew(d){return new A.AW(new Uint16Array(C.ca(this.a)))},
gfQ(d){return B.bA},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.AW){x=this.a
x=x.length===e.a.length&&C.aP(x)===C.aP(e.a)}else x=!1
return x},
gv(d){return C.aP(this.a)},
jU(d,e){return this.a[e]},
L(d){return this.jU(0,0)},
wU(d){var x=this.a
x.$flags&2&&C.L(x)
x[0]=d},
v0(){return J.kh(D.eY.gar(this.a))},
jB(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.lB(this.a[x])},
j(d){var x=this.a
return x.length===1?""+x[0]:C.o(x)},
gn(d){return this.a}}
A.u9.prototype={
b2r(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.ai()
w.$flags&2&&C.L(w)
w[x]=v}},
ew(d){return new A.u9(new Uint32Array(C.ca(this.a)))},
gfQ(d){return B.dI},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.u9){x=this.a
x=x.length===e.a.length&&C.aP(x)===C.aP(e.a)}else x=!1
return x},
gv(d){return C.aP(this.a)},
jU(d,e){return this.a[e]},
L(d){return this.jU(0,0)},
wU(d){var x=this.a
x.$flags&2&&C.L(x)
x[0]=d},
v0(){return J.kh(D.bK.gar(this.a))},
jB(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.jC(this.a[x])},
j(d){var x=this.a
return x.length===1?""+x[0]:C.o(x)},
gn(d){return this.a}}
A.w8.prototype={
ew(d){return new A.w8(C.aO(this.a,!0,y.i))},
gfQ(d){return B.fc},
gA(d){return this.a.length},
jU(d,e){return this.a[e].L(0)},
L(d){return this.jU(0,0)},
v1(d){return this.a[0].v1(0)},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.w8){x=this.a
x=x.length===e.a.length&&C.aP(x)===C.aP(e.a)}else x=!1
return x},
gv(d){return C.aP(this.a)},
jB(d,e){var x,w,v,u
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,C.K)(x),++v){u=x[v]
e.jC(u.a)
e.jC(u.b)}},
j(d){var x=this.a
return x.length===1?x[0].j(0):C.o(x)},
gn(d){return this.a}}
A.ys.prototype={
ew(d){return new A.ys(new Int8Array(C.ca(this.a)))},
gfQ(d){return B.Qk},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.ys){x=this.a
x=x.length===e.a.length&&C.aP(x)===C.aP(e.a)}else x=!1
return x},
gv(d){return C.aP(this.a)},
jU(d,e){return this.a[e]},
L(d){return this.jU(0,0)},
wU(d){var x=this.a
x.$flags&2&&C.L(x)
x[0]=d},
v0(){return J.kh(D.lE.gar(this.a))},
jB(d,e){e.mI(J.dz(D.lE.gar(this.a),0,null))},
j(d){var x=this.a
return x.length===1?""+x[0]:C.o(x)},
gn(d){return this.a}}
A.AV.prototype={
b2t(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.aw()
u=$.oR()
u.$flags&2&&C.L(u)
u[0]=v
v=$.q0()[0]
w.$flags&2&&C.L(w)
w[x]=v}},
ew(d){return new A.AV(new Int16Array(C.ca(this.a)))},
gfQ(d){return B.Ql},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.AV){x=this.a
x=x.length===e.a.length&&C.aP(x)===C.aP(e.a)}else x=!1
return x},
gv(d){return C.aP(this.a)},
jU(d,e){return this.a[e]},
L(d){return this.jU(0,0)},
wU(d){var x=this.a
x.$flags&2&&C.L(x)
x[0]=d},
v0(){return J.kh(D.lD.gar(this.a))},
jB(d,e){var x,w=new Int16Array(1),v=J.cXk(D.lD.gar(w),0,null),u=this.a.length
for(x=0;x<u;++x){w[0]=this.a[x]
e.lB(v[0])}},
j(d){var x=this.a
return x.length===1?""+x[0]:C.o(x)},
gn(d){return this.a}}
A.AU.prototype={
b2s(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.ai()
u=$.iu()
u.$flags&2&&C.L(u)
u[0]=v
v=$.m0()[0]
w.$flags&2&&C.L(w)
w[x]=v}},
ew(d){return new A.AU(new Int32Array(C.ca(this.a)))},
gfQ(d){return B.Qm},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.AU){x=this.a
x=x.length===e.a.length&&C.aP(x)===C.aP(e.a)}else x=!1
return x},
gv(d){return C.aP(this.a)},
jU(d,e){return this.a[e]},
L(d){return this.jU(0,0)},
wU(d){var x=this.a
x.$flags&2&&C.L(x)
x[0]=d},
v0(){return J.kh(D.d8.gar(this.a))},
jB(d,e){var x,w,v,u=this.a.length
for(x=0;x<u;++x){w=this.a[x]
v=$.b4r()
v.$flags&2&&C.L(v)
v[0]=w
e.jC($.cX_()[0])}},
j(d){var x=this.a
return x.length===1?""+x[0]:C.o(x)},
gn(d){return this.a}}
A.w9.prototype={
ew(d){return new A.w9(C.aO(this.a,!0,y.i))},
gfQ(d){return B.Qh},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.w9){x=this.a
x=x.length===e.a.length&&C.aP(x)===C.aP(e.a)}else x=!1
return x},
gv(d){return C.aP(this.a)},
jU(d,e){return this.a[e].L(0)},
L(d){return this.jU(0,0)},
v1(d){return this.a[0].v1(0)},
jB(d,e){var x,w,v,u,t,s
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,C.K)(x),++v){u=x[v]
t=$.b4r()
t.$flags&2&&C.L(t)
t[0]=u.a
s=$.cX_()
e.jC(s[0])
t[0]=u.b
e.jC(s[0])}},
j(d){var x=this.a
return x.length===1?x[0].j(0):C.o(x)},
gn(d){return this.a}}
A.ET.prototype={
b2v(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.ai()
u=$.iu()
u.$flags&2&&C.L(u)
u[0]=v
v=$.Ix()[0]
w.$flags&2&&C.L(w)
w[x]=v}},
ew(d){return new A.ET(new Float32Array(C.ca(this.a)))},
gfQ(d){return B.Qi},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.ET){x=this.a
x=x.length===e.a.length&&C.aP(x)===C.aP(e.a)}else x=!1
return x},
gv(d){return C.aP(this.a)},
v0(){return J.kh(D.fY.gar(this.a))},
v1(d){return this.a[0]},
jB(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.c27(this.a[x])},
j(d){var x=this.a
return x.length===1?C.o(x[0]):C.o(x)},
gn(d){return this.a}}
A.ES.prototype={
b2q(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.a42()
w.$flags&2&&C.L(w)
w[x]=v}},
ew(d){return new A.ES(new Float64Array(C.ca(this.a)))},
gfQ(d){return B.Qj},
gA(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.ES){x=this.a
x=x.length===e.a.length&&C.aP(x)===C.aP(e.a)}else x=!1
return x},
gv(d){return C.aP(this.a)},
v1(d){return this.a[0]},
v0(){return J.kh(D.fm.gar(this.a))},
jB(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.c28(this.a[x])},
j(d){var x=this.a
return x.length===1?C.o(x[0]):C.o(x)},
gn(d){return this.a}}
A.KK.prototype={
ew(d){return new A.KK(new Uint8Array(C.ca(this.a)))},
gfQ(d){return B.jx},
gA(d){return this.a.length},
v0(){return this.a},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.KK){x=this.a
x=x.length===e.a.length&&C.aP(x)===C.aP(e.a)}else x=!1
return x},
gv(d){return C.aP(this.a)},
jB(d,e){e.mI(this.a)},
j(d){return"<data>"},
gn(d){return this.a}}
A.ni.prototype={
J(){return"BmpCompression."+this.b}}
A.ba5.prototype={}
A.IP.prototype={
aoL(d,e){var x,w,v,u,t,s,r,q=this,p=q.d,o=p<=40
if(o){x=q.r
x=x===B.Cs||x===B.Ct}else x=!0
if(x){x=q.as=d.ai()
w=A.cUq(x)
q.CW=w
v=D.c.hv(x,w)
x=v>0
q.cx=x?255/v:0
w=q.at=d.ai()
u=A.cUq(w)
q.cy=u
t=D.c.hv(w,u)
q.db=x?255/t:0
w=q.ax=d.ai()
u=A.cUq(w)
q.dx=u
s=D.c.hv(w,u)
q.dy=x?255/s:0
if(!o||q.r===B.Ct){o=q.ay=d.ai()
x=A.cUq(o)
q.fr=x
r=D.c.hv(o,x)
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
if(q.f<=8)q.bZI(d)},
gRt(){var x=this.d
if(x!==40)if(x===124){x=this.ay
x===$&&C.a()
x=x===0}else x=!1
else x=!0
return x},
ge5(d){return Math.abs(this.c)},
bZI(d){var x,w,v,u,t,s=this,r=s.z
if(r===0)r=D.c.eA(1,s.f)
s.ch=new A.ws(new Uint8Array(r*3),r,3)
for(x=0;x<r;++x){w=J.v(d.a,d.d++)
v=J.v(d.a,d.d++)
u=J.v(d.a,d.d++)
t=J.v(d.a,d.d++)
s.ch.UJ(x,u,v,w,t)}},
bMm(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(o.ch!=null){x=o.f
if(x===1){w=d.cM()
for(v=7;v>=0;--v)e.$4(D.c.oR(w,v)&1,0,0,0)
return}else if(x===2){w=d.cM()
for(v=6;v>=0;v-=2)e.$4(D.c.oR(w,v)&2,0,0,0)}else if(x===4){w=d.cM()
e.$4(D.c.W(w,4)&15,0,0,0)
e.$4(w&15,0,0,0)
return}else if(x===8){e.$4(d.cM(),0,0,0)
return}}x=o.r
if(x===B.Cs&&o.f===32){u=d.ai()
x=o.as
x===$&&C.a()
t=o.CW
t===$&&C.a()
t=D.c.hv((u&x)>>>0,t)
x=o.cx
x===$&&C.a()
s=D.e.L(t*x)
x=o.at
x===$&&C.a()
t=o.cy
t===$&&C.a()
t=D.c.hv((u&x)>>>0,t)
x=o.db
x===$&&C.a()
r=D.e.L(t*x)
x=o.ax
x===$&&C.a()
t=o.dx
t===$&&C.a()
t=D.c.hv((u&x)>>>0,t)
x=o.dy
x===$&&C.a()
q=D.e.L(t*x)
if(o.gRt())p=255
else{x=o.ay
x===$&&C.a()
t=o.fr
t===$&&C.a()
t=D.c.hv((u&x)>>>0,t)
x=o.fx
x===$&&C.a()
p=D.e.L(t*x)}return e.$4(s,r,q,p)}else{t=o.f
if(t===32&&x===B.Ly){q=d.cM()
r=d.cM()
s=d.cM()
p=d.cM()
return e.$4(s,r,q,o.gRt()?255:p)}else if(t===24){q=d.cM()
r=d.cM()
return e.$4(d.cM(),r,q,255)}else if(t===16){u=d.aw()
x=o.as
x===$&&C.a()
t=o.CW
t===$&&C.a()
t=D.c.hv((u&x)>>>0,t)
x=o.cx
x===$&&C.a()
s=D.e.L(t*x)
x=o.at
x===$&&C.a()
t=o.cy
t===$&&C.a()
t=D.c.hv((u&x)>>>0,t)
x=o.db
x===$&&C.a()
r=D.e.L(t*x)
x=o.ax
x===$&&C.a()
t=o.dx
t===$&&C.a()
t=D.c.hv((u&x)>>>0,t)
x=o.dy
x===$&&C.a()
q=D.e.L(t*x)
if(o.gRt())p=255
else{x=o.ay
x===$&&C.a()
t=o.fr
t===$&&C.a()
t=D.c.hv((u&x)>>>0,t)
x=o.fx
x===$&&C.a()
p=D.e.L(t*x)}return e.$4(s,r,q,p)}else throw C.p(A.cp("Unsupported bitsPerPixel ("+t+") or compression ("+x.j(0)+")."))}}}
A.aqd.prototype={
pE(d){var x,w=null
if(!A.cXQ(A.dl(d,!1,w,0)))return w
x=A.dl(d,!1,w,0)
this.a=x
return this.b=A.drG(x,w)},
kJ(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b
if(e==null)return new A.EW(f,f,f,f,0,B.bD,0,0)
x=g.a
x===$&&C.a()
w=e.a.b
w===$&&C.a()
x.d=w
v=e.f
w=e.b
u=D.c.aL(w*v+31,32)*4
x=g.c
if(x)t=4
else if(v===1||v===4||v===8)t=1
else{s=v===32?4:3
t=s}if(x)r=B.ai
else if(v===1)r=B.hJ
else{if(v===2)s=B.iB
else if(v===4)s=B.iC
else s=B.ai
r=s}q=x?f:e.ch
p=A.iO(f,f,r,0,B.bD,e.ge5(e),f,0,t,q,B.ai,w,!1)
for(o=p.ge5(0)-1,x=e.c,w=1/x<0,s=x<0,x=x===0;o>=0;--o){n={}
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
h=j?f:l.eu(0,m,f)
if(h==null)h=new A.h5()
for(;n.a<i;)e.bMm(k,new A.ba4(n,g,i,e,h))}return p},
nC(d,e,f){if(this.pE(e)==null)return null
return this.kJ(0)}}
A.bkn.prototype={}
A.bj5.prototype={}
A.bj6.prototype={}
A.bn9.prototype={}
A.avG.prototype={}
A.az5.prototype={
Sj(){return this.w},
tP(d,e,f,g,h){throw C.p(A.cp("B44 compression not yet supported."))},
Lv(d,e,f){return this.tP(d,e,f,null,null)},
j(d){return C.o(this.r)+" "+this.x}}
A.So.prototype={
J(){return"ExrChannelType."+this.b}}
A.JY.prototype={
J(){return"ExrChannelName."+this.b}}
A.avH.prototype={
b2f(d){var x=this,w=d.SW()
x.a=w
if(w.length===0)return
x.c=B.aJK[d.ai()]
d.cM()
d.d+=3
x.f=d.ai()
x.r=d.ai()
w=x.a
if(w==="R"){x.w=!0
x.b=B.ayg}else if(w==="G"){x.w=!0
x.b=B.ayh}else if(w==="B"){x.w=!0
x.b=B.ayi}else if(w==="A"){x.w=!0
x.b=B.ayj}else{x.w=!1
x.b=B.ayk}switch(x.c.a){case 0:x.d=4
break
case 1:x.d=2
break
case 2:x.d=4
break}}}
A.vW.prototype={
J(){return"ExrCompressorType."+this.b}}
A.boM.prototype={
tP(d,e,f,g,h){throw C.p(A.cp("Unsupported compression type"))},
Lv(d,e,f){return this.tP(d,e,f,null,null)}}
A.bxZ.prototype={}
A.avI.prototype={}
A.boO.prototype={
b2g(d){var x,w,v,u,t=this,s=A.dl(d,!1,null,0)
if(s.ai()!==20000630)throw C.p(A.cp("File is not an OpenEXR image file."))
x=t.d=s.cM()
if(x!==2)throw C.p(A.cp("Cannot read version "+x+" image files."))
x=t.e=s.tE()
if((x&4294967289)>>>0!==0)throw C.p(A.cp("The file format version number's flag field contains unrecognized flags."))
if((x&16)===0){w=t.c
v=A.d9A(w.length,(x&2)!==0,s)
if(v.w>0)w.push(v)}else for(x=t.c;!0;){v=A.d9A(x.length,(t.e&2)!==0,s)
if(v.w<=0)break
x.push(v)}x=t.c
w=x.length
if(w===0)throw C.p(A.cp("Error reading image header"))
for(u=0;u<x.length;x.length===w||(0,C.K)(x),++u)x[u].bZH(s)
t.bvL(s)},
bvL(d){var x,w,v,u,t=this
for(x=t.c,w=x.length,v=0;v<x.length;x.length===w||(0,C.K)(x),++v){u=x[v]
t.a=Math.max(t.a,u.w)
t.b=Math.max(t.b,u.x)
if(u.db)t.bvV(u,d)
else t.bvT(u,d)}},
bvV(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.e
b3===$&&C.a()
x=(b3&16)!==0
b3=b4.b
b3.toString
w=b4.CW
v=b4.ay
u=A.cu(b5,b2,0)
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
if(x)if(u.ai()!==s)throw C.p(A.cp("Invalid Image Data"))
k=u.ai()
j=u.ai()
u.ai()
u.ai()
i=u.jY(u.ai())
u.d=u.d+(i.c-i.d)
h=b4.dy
h.toString
g=j*h
f=b4.dx
f.toString
h=w.tP(i,k*f,g,f,h)
f=h.length
f=Math.min(f,f)
e=new A.ns(h,0,f,0,!1)
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
h===$&&C.a()
switch(h.a){case 1:h=e.aw()
a8=$.iN
a9=(a8!=null?a8:A.jK())[h]
break
case 2:a9=e.aw()
break
case 0:a9=e.ai()
break
default:a9=b2}h=a5.d
h===$&&C.a()
a2+=h
h=a5.w
h===$&&C.a()
if(h){h=b3.a
b0=h==null?b2:h.eu(a6,g,b2)
if(b0==null)b0=new A.h5()
h=a5.b
h===$&&C.a()
b0.m(0,h.a,a9)}else{h=a5.a
h===$&&C.a()
a8=b3.b
b1=a8!=null?a8.h(0,h):b2
if(b1!=null)b1.fJ(a6,g,a9,0,0)}}}++a3;++g}}++o;++q}++r}},
bvT(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=this.e
a5===$&&C.a()
x=(a5&16)!==0
a5=a6.b
a5.toString
w=a6.CW
v=a6.ay[0]
u=a6.cx
t=A.cu(a7,a4,0)
for(s=v.length,r=a6.c,q=w!=null,p=0,o=0;o<s;++o){t.d=v[o]
if(x)if(t.ai()!==3.141592653589793)throw C.p(A.cp("Invalid Image Data"))
n=t.ai()
m=$.iu()
m.$flags&2&&C.L(m)
m[0]=n
n=$.m0()
m[0]=t.ai()
l=t.jY(n[0])
t.d=t.d+(l.c-l.d)
if(q){n=w.Lv(l,0,p)
m=n.length
k=new A.ns(n,0,Math.min(m,m),0,!1)}else k=l
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
n===$&&C.a()
switch(n.a){case 1:n=k.aw()
m=$.iN
a1=(m!=null?m:A.jK())[n]
break
case 2:a1=k.aw()
break
case 0:a1=k.ai()
break
default:a1=a4}n=e.d
n===$&&C.a()
g+=n
n=e.w
n===$&&C.a()
if(n){n=a5.a
a2=n==null?a4:n.eu(a0,p,a4)
if(a2==null)a2=new A.h5()
n=e.b
n===$&&C.a()
a2.m(0,n.a,a1)}else{n=e.a
n===$&&C.a()
m=a5.b
a3=m!=null?m.h(0,n):a4
if(a3!=null)a3.fJ(a0,p,a1,0,0)}}}++h;++p}}}}
A.a3u.prototype={
b2h(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=C.H(y.N,y.I)
for(x=a2.e,w=y.t,v=a2.c,u=B.jt;!0;){t=a7.SW()
if(t.length===0)break
s=a7.SW()
r=a7.ai()
q=a7.jY(r)
a7.d=a7.d+(q.c-q.d)
x.m(0,t,new A.avG(t,s,r))
switch(t){case"channels":for(;!0;){p=new A.avH()
p.b2f(q)
o=p.a
o===$&&C.a()
if(o.length===0)break
n=p.w
n===$&&C.a()
if(n){++a2.d
o=p.c
o===$&&C.a()
if(o===B.EG)u=B.jt
else u=o===B.EH?B.l7:B.l8}else{n=p.c
n===$&&C.a()
if(n===B.EG){n=a2.w
m=a2.x
a4.m(0,o,new A.SY(new Uint16Array(n*m),n,m,1))}else if(n===B.EH){n=a2.w
m=a2.x
a4.m(0,o,new A.SZ(new Float32Array(n*m),n,m,1))}else if(n===B.OV){n=a2.w
m=a2.x
a4.m(0,o,new A.T2(new Uint32Array(n*m),n,m,1))}}v.push(p)}break
case"chromaticities":o=new Float32Array(8)
a2.at=o
n=q.ai()
m=$.iu()
m.$flags&2&&C.L(m)
m[0]=n
n=$.Ix()
o[0]=n[0]
o=a2.at
m[0]=q.ai()
l=n[0]
o.$flags&2&&C.L(o)
o[1]=l
l=a2.at
m[0]=q.ai()
o=n[0]
l.$flags&2&&C.L(l)
l[2]=o
o=a2.at
m[0]=q.ai()
l=n[0]
o.$flags&2&&C.L(o)
o[3]=l
l=a2.at
m[0]=q.ai()
o=n[0]
l.$flags&2&&C.L(l)
l[4]=o
o=a2.at
m[0]=q.ai()
l=n[0]
o.$flags&2&&C.L(o)
o[5]=l
l=a2.at
m[0]=q.ai()
o=n[0]
l.$flags&2&&C.L(l)
l[6]=o
o=a2.at
m[0]=q.ai()
n=n[0]
o.$flags&2&&C.L(o)
o[7]=n
break
case"compression":a2.ax=B.aMd[J.v(q.a,q.d++)]
break
case"dataWindow":o=q.ai()
n=$.iu()
n.$flags&2&&C.L(n)
n[0]=o
o=$.m0()
m=o[0]
n[0]=q.ai()
l=o[0]
n[0]=q.ai()
k=o[0]
n[0]=q.ai()
o=a2.r=C.b([m,l,k,o[0]],w)
a2.w=o[2]-o[0]+1
a2.x=o[3]-o[1]+1
break
case"displayWindow":o=q.ai()
n=$.iu()
n.$flags&2&&C.L(n)
n[0]=o
$.m0()
n[0]=q.ai()
n[0]=q.ai()
n[0]=q.ai()
break
case"lineOrder":break
case"pixelAspectRatio":o=q.ai()
n=$.iu()
n.$flags&2&&C.L(n)
n[0]=o
$.Ix()
break
case"screenWindowCenter":o=q.ai()
n=$.iu()
n.$flags&2&&C.L(n)
n[0]=o
$.Ix()
n[0]=q.ai()
break
case"screenWindowWidth":o=q.ai()
n=$.iu()
n.$flags&2&&C.L(n)
n[0]=o
$.Ix()
break
case"tiles":a2.dx=q.ai()
a2.dy=q.ai()
j=J.v(q.a,q.d++)
a2.fr=j&15
a2.fx=D.c.W(j,4)&15
break
case"type":i=q.SW()
if(i!=="deepscanline")if(i!=="deeptile")throw C.p(A.cp("EXR Invalid type: "+i))
break
default:break}}x=a2.w
a2.b=A.iO(a3,a3,u,0,B.bD,a2.x,a3,0,a2.d,a3,B.ai,x,!1)
for(x=new C.ci(a4,a4.r,a4.e,a4.$ti.i("ci<1>"));x.t();){w=x.d
o=a2.b
o.toString
n=a4.h(0,w)
n.toString
o.aUb(w,n)}if(a2.db){x={}
w=a2.r
w===$&&C.a()
a2.id=a2.b6t(w[0],w[2],w[1],w[3])
w=a2.r
a2.k1=a2.b6u(w[0],w[2],w[1],w[3])
if(a2.fr!==2)a2.k1=1
w=a2.id
w.toString
v=a2.r
a2.fy=a2.aqn(w,v[0],v[2],a2.dx,a2.fx)
v=a2.k1
v.toString
w=a2.r
a2.go=a2.aqn(v,w[1],w[3],a2.dy,a2.fx)
w=a2.b6r()
a2.k2=w
v=a2.dx
v.toString
v=w*v
a2.k3=v
a2.CW=A.d7X(a2.ax,a2,v,a2.dy)
x.a=x.b=0
v=a2.id
v.toString
w=a2.k1
w.toString
a2.ay=C.qr(v*w,new A.boP(x,a2),!0,y.bk)}else{x=a2.x
w=a2.ch=new Uint32Array(x+1)
for(o=v.length,n=a2.r,m=a2.w,h=0;h<o;++h){g=v[h]
l=g.d
l===$&&C.a()
k=g.f
k===$&&C.a()
f=D.c.hR(l*m,k)
for(l=g.r,e=0;e<x;++e){n===$&&C.a()
k=n[1]
l===$&&C.a()
if(D.c.av(e+k,l)===0)w[e]=w[e]+f}}for(d=0,e=0;e<x;++e)d=Math.max(d,w[e])
x=A.d7X(a2.ax,a2,d,a3)
a2.CW=x
x=a2.cx=x.Sj()
w=a2.ch
v=w.length
o=new Uint32Array(v)
a2.cy=o
for(--v,a0=0,a1=0;a1<=v;++a1){if(D.c.av(a1,x)===0)a0=0
o[a1]=a0
a0+=w[a1]}x=D.c.hR(a2.x+x,x)
a2.ay=C.b([new Uint32Array(x-1)],y.w)}},
b6t(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.WG(w):u.VR(w))+1
break
case 2:v=e-d+1
x=(u.fx===0?u.WG(v):u.VR(v))+1
break
default:throw C.p(A.cp("Unknown LevelMode format."))}return x},
b6u(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.WG(w):u.VR(w))+1
break
case 2:v=g-f+1
x=(u.fx===0?u.WG(v):u.VR(v))+1
break
default:throw C.p(A.cp("Unknown LevelMode format."))}return x},
WG(d){var x
for(x=0;d>1;){++x
d=D.c.W(d,1)}return x},
VR(d){var x,w
for(x=0,w=0;d>1;){if((d&1)!==0)w=1;++x
d=D.c.W(d,1)}return x+w},
b6r(){var x,w,v,u,t
for(x=this.c,w=x.length,v=0,u=0;u<w;++u){t=x[u].d
t===$&&C.a()
v+=t}return v},
aqn(d,e,f,g,h){var x,w,v,u,t,s,r=J.jM(d,y.p)
for(x=h===1,w=f-e+1,v=0;v<d;++v){u=D.c.eA(1,v)
t=D.c.hR(w,u)
if(x&&t*u<w)++t
s=Math.max(t,1)
g.toString
r[v]=D.c.hR(s+g-1,g)}return r}}
A.az6.prototype={
bZH(d){var x,w,v,u,t,s=this
if(s.db)for(x=0;x<s.ay.length;++x)for(w=0;v=s.ay[x],w<v.length;++w){u=d.ajk()
v.$flags&2&&C.L(v)
v[w]=u}else{t=s.ay[0].length
for(x=0;x<t;++x){v=s.ay[0]
u=d.ajk()
v.$flags&2&&C.L(v)
v[x]=u}}}}
A.by_.prototype={
b2D(d,e,f){var x,w,v,u=this,t=d.c.length,s=J.jM(t,y.bc)
for(x=0;x<t;++x)s[x]=new A.aVr()
u.y=s
w=u.w
w.toString
v=D.c.aL(w*u.x,2)
u.z=new Uint16Array(v)},
Sj(){return this.x},
tP(a4,a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
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
v===$&&C.a()
o=v[q]
o.b=o.a=r
v=p.f
v===$&&C.a()
n=D.c.hR(a5,v)
m=D.c.hR(x,v)
v=n*v<a5?0:1
v=m-n+v
o.c=v
u=p.r
u===$&&C.a()
n=D.c.hR(a6,u)
m=D.c.hR(w,u)
l=n*u<a6?0:1
l=m-n+l
o.d=l
o.e=u
u=p.d
u===$&&C.a()
u=u/2|0
o.f=u
r+=v*l*u}k=a4.aw()
j=a4.aw()
if(j>=8192)throw C.p(A.cp("Error in header for PIZ-compressed data (invalid bitmap size)."))
i=new Uint8Array(8192)
if(k<=j){h=a4.jR(j-k+1)
g=h.c-h.d
for(f=k,q=0;q<g;++q,f=e){e=f+1
i[f]=J.v(h.a,h.d+q)}}d=new Uint16Array(65536)
a0=a3.bxo(i,d)
A.dvv(a4,a4.ai(),a3.z,r)
for(q=0;q<s;++q){v=a3.y
v===$&&C.a()
o=v[q]
f=0
while(!0){v=o.f
v===$&&C.a()
if(!(f<v))break
u=a3.z
u.toString
l=o.a
l===$&&C.a()
a1=o.c
a1===$&&C.a()
a2=o.d
a2===$&&C.a()
A.dvy(u,l+f,a1,v,a2,a1*v,a0);++f}}v=a3.z
v.toString
a3.b4A(d,v,r)
v=a3.r
if(v==null){v=a3.w
v.toString
v=a3.r=A.rY(!1,v*a3.x+73728)}v.a=0
for(;a6<=w;++a6)for(q=0;q<s;++q){v=a3.y
v===$&&C.a()
o=v[q]
v=o.e
v===$&&C.a()
if(D.c.av(a6,v)!==0)continue
v=o.c
v===$&&C.a()
u=o.f
u===$&&C.a()
a5=v*u
for(;a5>0;--a5){v=a3.r
v.toString
u=a3.z
u.toString
l=o.b
l===$&&C.a()
o.b=l+1
v.lB(u[l])}}v=a3.r
return J.dz(D.H.gar(v.c),0,v.a)},
Lv(d,e,f){return this.tP(d,e,f,null,null)},
b4A(d,e,f){var x,w,v
for(x=e.$flags|0,w=0;w<f;++w){v=d[e[w]]
x&2&&C.L(e)
e[w]=v}},
bxo(d,e){var x,w,v,u,t
for(x=e.$flags|0,w=0,v=0;v<65536;++v)if(v===0||(d[v>>>3]&1<<(v&7))>>>0!==0){u=w+1
x&2&&C.L(e)
e[w]=v
w=u}for(u=w;u<65536;u=t){t=u+1
x&2&&C.L(e)
e[u]=0}return w-1}}
A.aVr.prototype={}
A.by0.prototype={
Sj(){return this.x},
tP(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=B.kS.E9(a0.im()),d=f.y
if(d==null){d=f.w
d.toString
d=f.y=A.rY(!1,f.x*d)}d.a=0
x=C.b([0,0,0,0],y.t)
w=new Uint32Array(1)
v=J.dz(D.bK.gar(w),0,null)
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
s===$&&C.a()
if(D.c.av(a2,s)!==0)continue
s=n.f
s===$&&C.a()
m=D.c.hR(a1,s)
l=D.c.hR(u,s)
s=m*s<a1?0:1
k=l-m+s
w[0]=0
s=n.c
s===$&&C.a()
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
for(g=0;g<4;++g)f.y.bi(v[g])}break
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
for(g=0;g<2;++g)f.y.bi(v[g])}break
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
for(g=0;g<4;++g)f.y.bi(v[g])}break}}d=f.y
return J.dz(D.H.gar(d.c),0,d.a)},
Lv(d,e,f){return this.tP(d,e,f,null,null)}}
A.by1.prototype={
Sj(){return 1},
tP(d,e,f,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.c,g=A.rY(!1,(h-d.d)*2)
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
u=$.oS()
u.$flags&2&&C.L(u)
u[0]=v
t=$.q1()[0]
if(t<0){s=-t
for(;r=s-1,s>0;s=r)g.bi(J.v(d.a,d.d++))}else for(s=t;r=s-1,s>=0;s=r)g.bi(J.v(d.a,d.d++))}q=J.dz(D.H.gar(g.c),0,g.a)
p=q.length
for(h=q.$flags|0,o=1;o<p;++o){v=q[o-1]
u=q[o]
h&2&&C.L(q)
q[o]=v+u-128}h=i.r
if(h==null||h.length!==p)h=i.r=new Uint8Array(p)
v=D.c.aL(p+1,2)
for(n=0,m=0;!0;v=j,n=k){if(m<p){l=m+1
k=n+1
u=q[n]
h.$flags&2&&C.L(h)
h[m]=u}else break
if(l<p){m=l+1
j=v+1
h[l]=q[v]}else break}return h},
Lv(d,e,f){return this.tP(d,e,f,null,null)},
j(d){return C.o(this.w)}}
A.az7.prototype={
Sj(){return this.x},
tP(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=B.kS.E9(d.im())
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
v&2&&C.L(k)
k[s]=u+r-128}v=l.y
if(v==null||v.length!==t)v=l.y=new Uint8Array(t)
u=D.c.aL(t+1,2)
for(q=0,p=0;!0;u=m,q=n){if(p<t){o=p+1
n=q+1
r=k[q]
v.$flags&2&&C.L(v)
v[p]=r}else break
if(o<t){p=o+1
m=u+1
v[o]=k[u]}else break}return v},
Lv(d,e,f){return this.tP(d,e,f,null,null)},
j(d){return C.o(this.w)}}
A.boN.prototype={
kJ(d){var x=this.a
if(x==null)return null
return x.c[d].b},
nC(d,e,f){var x=new A.boO(C.b([],y.m))
x.b2g(e)
this.a=x
return this.kJ(0)}}
A.a4a.prototype={
bPn(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.b,w=this.d,v=-1,u=-1,t=0;t<x;++t){s=w.o2(t)
r=w.o0(t)
q=w.nZ(t)
p=w.pz(t)
if(s===d&&r===e&&q===f&&p===g)return t
o=d-s
n=e-r
m=f-q
l=g-p
k=o*o+n*n+m*m+l*l
if(u===-1){u=t
v=k}else if(k<v){u=t
v=k}}return u},
alv(){var x,w,v,u,t,s,r,q=this
if(q.c==null)return q.d
x=q.d
w=x.a
v=new A.ws(new Uint8Array(w*4),w,4)
for(u=0;u<w;++u){t=x.o2(u)
s=x.o0(u)
r=x.nZ(u)
v.UJ(u,t,s,r,u===q.c?0:255)}return v}}
A.a4b.prototype={
b2k(d){var x,w,v,u,t,s,r=this
r.a=d.aw()
r.b=d.aw()
r.c=d.aw()
r.d=d.aw()
x=d.cM()
r.e=(x&64)!==0
if((x&128)!==0){r.f=A.d8B(D.c.eA(1,(x&7)+1))
for(w=0;v=r.f,w<v.b;++w){u=J.v(d.a,d.d++)
t=J.v(d.a,d.d++)
s=J.v(d.a,d.d++)
v.d.qf(w,u,t,s)}}r.x=d.d-d.b}}
A.az8.prototype={}
A.axf.prototype={}
A.btq.prototype={
pE(d){var x,w,v,u,t,s,r,q,p,o,n=this
n.f=A.dl(d,!1,null,0)
n.a=new A.axf(C.b([],y.b))
if(!n.atQ())return null
try{for(;u=n.f,t=u.d,t<u.c;){s=u.a
u.d=t+1
x=J.v(s,t)
switch(x){case 44:w=n.aAD()
if(w==null){u=n.a
return u}u=w
u.r=n.e
u.w=n.c
if(n.b!==0){if(w.f==null&&n.a.e!=null){u=n.a.e
t=u.a
s=u.b
r=u.c
u=u.d
w.f=new A.a4a(t,s,r,new A.ws(new Uint8Array(C.ca(u.c)),u.a,u.b))}if(w.f!=null)w.f.c=n.d}n.a.r.push(w)
break
case 33:u=n.f
v=J.v(u.a,u.d++)
if(J.q(v,255)){u=n.f
if(u.jS(J.v(u.a,u.d++))==="NETSCAPE2.0"){q=J.v(u.a,u.d++)
p=J.v(u.a,u.d++)
if(q===3&&p===1)n.r=u.aw()}else n.Zd()}else if(J.q(v,249)){u=n.f
u.toString
n.bvH(u)}else n.Zd()
break
case 59:u=n.a
return u
default:break}}}catch(o){}return n.a},
bvH(d){var x,w,v,u=this
d.cM()
x=d.cM()
u.e=d.aw()
u.d=d.cM()
d.cM()
u.c=D.c.W(x,2)&7
u.b=x&1
w=d.Vb(1,0)
if(J.v(w.a,w.d)===44){++d.d
v=u.aAD()
if(v==null)return
v.r=u.e
v.w=u.c
if(u.b!==0){w=v.f
if(w==null&&u.a.e!=null){w=u.a.e
w.toString
w=v.f=A.dwS(w)}if(w!=null)w.c=u.d}u.a.r.push(v)}},
kJ(d){var x,w,v,u=this,t=u.f
if(t==null||u.a==null)return null
x=u.a.r
w=x.length
if(d>=w)return null
v=x[d]
x=v.x
x===$&&C.a()
t.d=x
return u.b9f(v)},
nC(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null
if(a5.pE(a8)==null)return a6
x=a5.a.r.length
if(x===1)return a5.kJ(0)
for(x=y.p,w=a6,v=w,u=0;t=a5.a.r,u<t.length;++u){a9=t[u]
s=a5.kJ(u)
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
t===$&&C.a()
if(t===0){t=a9.b
t===$&&C.a()
t=t===0&&a9.w===2}else t=m}else t=m}else t=m
if(t){v.oh(s)
w=s
continue}l=a9.f
if(!(l!=null)){t=a5.a.e
t.toString
l=t}t=o?a6:p.a
if(t==null)t=0
r=o?a6:p.b
if(r==null)r=0
k=A.iO(a6,a6,B.ai,0,B.bD,r,a6,0,1,l.alv(),B.ai,t,!1)
t=a9.w
if(t===2){t=a5.a.c.a
t=!D.H.gZ(t)?t[0]:0
r=l.d
j=r.o2(t)
i=r.o0(t)
h=r.nZ(t)
g=t===l.c?0:255
t=new Uint8Array(4)
t[0]=j
t[1]=i
t[2]=h
t[3]=g
r=k.a
if(r!=null)r.oo(0,new A.Aj(t))}else if(t!==3)if(a9.f!=null){t=w.a
t=t==null?a6:t.gf5()
t.toString
f=C.H(x,x)
for(r=l.b,e=0;e<r;++e)f.m(0,e,l.bPn(t.o2(e),t.o0(e),t.nZ(e),t.pz(e)))
t=k.a
d=t==null?a6:J.kh(t.gar(t))
if(d==null){t=k.a
t=t==null?a6:t.gar(t)
if(t==null)t=D.H.gar(new Uint8Array(0))
d=J.kh(t)}t=w.a
a0=t==null?a6:J.kh(t.gar(t))
if(a0==null){t=w.a
t=t==null?a6:t.gar(t)
if(t==null)t=D.H.gar(new Uint8Array(0))
a0=J.kh(t)}for(a1=d.length,t=d.$flags|0,a2=0;a2<a1;++a2){a3=f.h(0,a0[a2])
if(a3!==-1){a3.toString
t&2&&C.L(d)
d[a2]=a3}}}k.y=s.y
for(t=s.a,t=t.gad(t);t.t();){a4=t.gM(t)
if(a4.gaV(a4)!==0){r=a4.gnY(a4)
q=a9.a
q===$&&C.a()
p=a4.goL(a4)
o=a9.b
o===$&&C.a()
k.Ca(r+q,p+o,a4)}}v.oh(k)
w=k}return v},
aAD(){var x,w=this.f
if(w.d>=w.c)return null
x=new A.az8()
x.b2k(w);++this.f.d
this.Zd()
return x},
b9f(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.w==null){n.w=new Uint8Array(256)
n.x=new Uint8Array(4095)
n.y=new Uint8Array(4096)
n.z=new Uint32Array(4096)}x=n.Q=n.f.cM()
w=D.c.f7(1,x)
n.dy=w;++w
n.dx=w
n.db=w+1;++x
n.cy=x
n.cx=D.c.f7(1,x)
n.ay=0
n.CW=4098
n.at=n.ax=0
x=n.w
x.toString
x.$flags&2&&C.L(x)
x[0]=0
x=n.z
x.toString
D.bK.mC(x,0,4096,4098)
x=d.c
x===$&&C.a()
w=d.d
w===$&&C.a()
v=d.a
v===$&&C.a()
u=n.a
if(v+x<=u.a){v=d.b
v===$&&C.a()
v=v+w>u.b}else v=!0
if(v)return m
t=d.f
if(!(t!=null)){v=u.e
v.toString
t=v}n.as=x*w
s=A.iO(m,m,B.ai,0,B.bD,w,m,0,1,t.alv(),B.ai,x,!1)
r=new Uint8Array(x)
x=d.e
x===$&&C.a()
if(x){x=d.b
x===$&&C.a()
for(w=x+w,q=0,p=0;q<4;++q)for(o=x+B.aDY[q];o<w;o+=B.aHI[q],++p){if(!n.atS(r))return s
n.aCE(s,o,t,r)}}else for(o=0;o<w;++o){if(!n.atS(r))return s
n.aCE(s,o,t,r)}return s},
aCE(d,e,f,g){var x,w,v,u=g.length
for(x=0;x<u;++x){w=g[x]
v=d.a
if(v!=null)v.fJ(x,e,w,0,0)}},
atQ(){var x,w,v,u,t,s=this,r=s.f.jS(6)
if(r!=="GIF87a"&&r!=="GIF89a")return!1
x=s.a
x.toString
x.a=s.f.aw()
x=s.a
x.toString
x.b=s.f.aw()
w=s.f.cM()
x=s.a
x.toString
x.c=new A.Aj(new Uint8Array(C.ca(C.b([s.f.cM()],y.t))));++s.f.d
if((w&128)!==0){x=s.a
x.toString
x.e=A.d8B(D.c.eA(1,(w&7)+1))
for(v=0;v<s.a.e.b;++v){x=s.f
u=J.v(x.a,x.d++)
x=s.f
t=J.v(x.a,x.d++)
x=s.f
w=J.v(x.a,x.d++)
s.a.e.d.qf(v,u,t,w)}}s.a.toString
return!0},
atS(d){var x=this,w=x.as
w.toString
x.as=w-d.length
if(!x.b9t(d))return!1
if(x.as===0)x.Zd()
return!0},
Zd(){var x,w,v,u=this.f
if(u.d>=u.c)return!0
x=u.cM()
while(!0){if(x!==0){u=this.f
u=u.d<u.c}else u=!1
if(!u)break
u=this.f
w=u.d+=x
if(w>=u.c)return!0
v=u.a
u.d=w+1
x=J.v(v,w)}return!0},
b9t(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.ay
if(k>4095)return!1
x=d.length
w=0
if(k!==0){v=d.$flags|0
while(!0){if(!(k!==0&&w<x))break
u=w+1
t=l.x
t===$&&C.a()
k=l.ay=k-1
t=t[k]
v&2&&C.L(d)
d[w]=t
w=u}}for(k=d.$flags|0;w<x;){s=l.ch=l.b9s()
if(s==null)return!1
v=l.dx
if(s===v)return!1
t=l.dy
if(s===t){for(t=l.z,r=0;r<=4095;++r){t.toString
t.$flags&2&&C.L(t)
t[r]=4098}l.db=v+1
v=l.Q+1
l.cy=v
l.cx=D.c.f7(1,v)
l.CW=4098}else{if(s<t){u=w+1
k&2&&C.L(d)
d[w]=s
w=u}else{v=l.z
if(v[s]===4098){q=l.db-2
if(s===q){s=l.CW
p=l.y
p===$&&C.a()
o=l.x
o===$&&C.a()
n=l.ay++
t=l.a96(v,s,t)
o.$flags&2&&C.L(o)
o[n]=t
p.$flags&2&&C.L(p)
p[q]=t}else return!1}r=0
while(!0){m=r+1
if(!(r<=4095&&s>l.dy&&s<=4095))break
v=l.x
v===$&&C.a()
t=l.ay++
q=l.y
q===$&&C.a()
q=q[s]
v.$flags&2&&C.L(v)
v[t]=q
s=l.z[s]
r=m}if(m>=4095||s>4095)return!1
v=l.x
v===$&&C.a()
t=l.ay
q=l.ay=t+1
v.$flags&2&&C.L(v)
v[t]=s
t=q
while(!0){if(!(t!==0&&w<x))break
u=w+1
t=l.ay=t-1
q=v[t]
k&2&&C.L(d)
d[w]=q
w=u}}v=l.CW
if(v!==4098&&l.z[l.db-2]===4098){t=l.z
t.toString
q=l.db-2
t.$flags&2&&C.L(t)
t[q]=v
p=l.ch
o=l.y
n=l.dy
if(p===q){o===$&&C.a()
v=l.a96(t,v,n)
o.$flags&2&&C.L(o)
o[q]=v}else{o===$&&C.a()
p.toString
v=l.a96(t,p,n)
o.$flags&2&&C.L(o)
o[q]=v}}v=l.ch
v.toString
l.CW=v}}return!0},
b9s(){var x,w,v,u,t=this
if(t.cy>12)return null
for(;x=t.ax,w=t.cy,x<w;){x=t.b52()
x.toString
w=t.at
v=t.ax
t.at=(w|D.c.f7(x,v))>>>0
t.ax=v+8}v=t.at
u=B.aIo[w]
t.at=D.c.hv(v,w)
t.ax=x-w
x=t.db
if(x<4097){++x
t.db=x
x=x>t.cx&&w<12}else x=!1
if(x){t.cx=t.cx<<1>>>0
t.cy=w+1}return v&u},
a96(d,e,f){var x,w,v=0
while(!0){if(e>f){x=v+1
w=v<=4095
v=x}else w=!1
if(!w)break
if(e>4095)return 4098
e=d[e]}return e},
b52(){var x,w,v=this,u=v.w,t=u[0],s=u.$flags|0
if(t===0){t=v.f.cM()
s&2&&C.L(u)
u[0]=t
u=v.w
t=u[0]
if(t===0)return null
D.H.hP(u,1,1+t,v.f.jR(t).im())
u=v.w
x=u[1]
u.$flags&2&&C.L(u)
u[1]=2
u[0]=u[0]-1}else{w=u[1]
s&2&&C.L(u)
u[1]=w+1
x=u[w]
u[0]=t-1}return x}}
A.ST.prototype={
J(){return"IcoType."+this.b}}
A.bw0.prototype={}
A.ayg.prototype={}
A.bvZ.prototype={
ge5(d){return D.c.aL(A.IP.prototype.ge5.call(this,0),2)},
gRt(){return!(this.d===40&&this.f===32)&&A.IP.prototype.gRt.call(this)}}
A.bw_.prototype={
nC(d,e,f){var x,w,v,u=this,t=A.dl(e,!1,null,0)
u.a=t
x=u.b=A.d9_(t)
if(x==null)return null
t=x.e.length
if(t===1)return u.kJ(0)
for(w=null,v=0;v<u.b.e.length;++v){f=u.kJ(v)
if(f==null)continue
if(w==null){f.w=B.bD
w=f}else w.oh(f)}return w},
kJ(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=this.a
if(a7!=null){x=this.b
x=x==null||a8>=x.d}else x=!0
if(x)return a6
w=this.b.e[a8]
x=a7.a
a7=a7.b+w.e
v=w.d
u=J.cXv(x,a7,a7+v)
t=new A.aEe(A.d9C())
y.D.a(u)
if(t.Kh(u))return t.dn(0,u)
s=A.rY(!1,14)
s.lB(19778)
s.jC(v)
s.jC(0)
s.jC(0)
a7=A.dl(u,!1,a6,0)
x=A.d5R(A.dl(J.dz(D.H.gar(s.c),0,s.a),!1,a6,0))
v=a7.d
r=a7.ai()
q=a7.ai()
p=$.iu()
p.$flags&2&&C.L(p)
p[0]=q
q=$.m0()
o=q[0]
p[0]=a7.ai()
q=q[0]
n=a7.aw()
m=a7.aw()
l=B.Xr[a7.ai()]
a7.ai()
p[0]=a7.ai()
p[0]=a7.ai()
p=a7.ai()
a7.ai()
k=new A.bvZ(x,o,q,r,n,m,l,p,v)
k.aoL(a7,x)
if(r!==40&&n!==1)return a6
j=p===0&&m<=8?40+4*D.c.eA(1,m):40+4*p
x.b=j
s.a-=4
s.jC(j)
i=A.dl(u,!1,a6,0)
h=new A.bkn(!0)
h.a=i
h.b=k
g=h.kJ(0)
if(m>=32)return g
f=32-D.c.av(o,32)
e=D.c.aL(f===32?o:o+f,8)
for(a7=q<0,x=q===0,q=1/q<0,d=0;d<D.c.aL(A.IP.prototype.ge5.call(k,0),2);++d){if(!(x?q:a7))a0=d
else{v=g.a
v=v==null?a6:v.b
a0=(v==null?0:v)-1-d}a1=i.jY(e)
i.d=i.d+(a1.c-a1.d)
v=g.a
a2=v==null?a6:v.eu(0,a0,a6)
if(a2==null)a2=new A.h5()
for(a3=0;a3<o;){a4=J.v(a1.a,a1.d++)
a5=7
while(!0){if(!(a5>-1&&a3<o))break
if((a4&D.c.f7(1,a5))>>>0!==0)a2.saV(0,0)
a2.t();++a3;--a5}}}return g}}
A.arp.prototype={}
A.KC.prototype={}
A.KD.prototype={}
A.a4H.prototype={
gn(d){return this.a}}
A.bz_.prototype={}
A.Fd.prototype={}
A.bz1.prototype={
TA(d){var x,w,v,u,t,s=this,r=A.dl(d,!0,null,0)
s.a=r
x=r.Vb(2,0)
if(J.v(x.a,x.d)!==255||J.v(x.a,x.d+1)!==216)return!1
if(s.Hw()!==216)return!1
w=s.Hw()
v=!1
u=!1
while(!0){if(w!==217){r=s.a
r=r.d<r.c}else r=!1
if(!r)break
t=s.a.aw()
if(t<2)break
r=s.a
r.d=r.d+(t-2)
switch(w){case 192:case 193:case 194:v=!0
break
case 218:u=!0
break}w=s.Hw()}return v&&u},
oH(d,e){var x,w,v,u,t,s,r,q,p=this
p.a=A.dl(e,!0,null,0)
p.bvA()
if(p.x.length!==1)throw C.p(A.cp("Only single frame JPEGs supported"))
for(x=p.Q,w=0;v=p.d,u=v.z,w<u.length;++w){t=v.y.h(0,u[w])
v=t.a
u=p.d
s=u.f
r=t.b
q=u.r
u=p.b5g(u,t)
v=v===1&&s===2?1:0
x.push(new A.arp(u,v,r===1&&q===2?1:0))}},
bvA(){var x,w,v,u,t,s=this
if(s.Hw()!==216)throw C.p(A.cp("Start Of Image marker not found."))
x=s.Hw()
while(!0){if(x!==217){w=s.a
w===$&&C.a()
w=w.d<w.c}else w=!1
if(!w)break
w=s.a
w===$&&C.a()
v=w.aw()
if(v<2)C.a8(A.cp("Invalid Block"))
w=s.a
u=w.jY(v-2)
w.d=w.d+(u.c-u.d)
switch(x){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:s.bvB(x,u)
break
case 219:s.bvE(u)
break
case 192:case 193:case 194:s.bvG(x,u)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw C.p(A.cp("Unhandled frame type "+D.c.jV(x,16)))
case 196:s.bvD(u)
break
case 221:s.e=u.aw()
break
case 218:s.bvS(u)
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
break}if(x!==0)throw C.p(A.cp("Unknown JPEG marker "+D.c.jV(x,16)))
break}x=s.Hw()}},
Hw(){var x,w=this,v=w.a
v===$&&C.a()
if(v.d>=v.c)return 0
do{do{x=w.a.cM()
if(x!==255){v=w.a
v=v.d<v.c}else v=!1}while(v)
v=w.a
if(v.d>=v.c)return x
do{x=w.a.cM()
if(x===255){v=w.a
v=v.d<v.c}else v=!1}while(v)
if(x===0){v=w.a
v=v.d<v.c}else v=!1}while(v)
return x},
bvF(d){if(d.ai()!==1165519206)return
if(d.aw()!==0)return
this.r.oH(0,d)},
bvB(d,e){var x,w,v,u,t=this,s=e
if(d===224){x=s
w=!1
if(J.v(x.a,x.d)===74){x=s
if(J.v(x.a,x.d+1)===70){x=s
if(J.v(x.a,x.d+2)===73){x=s
if(J.v(x.a,x.d+3)===70){x=s
x=J.v(x.a,x.d+4)===0}else x=w}else x=w}else x=w}else x=w
if(x){x=new A.bz5()
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
s.Vb(14+3*w*v,14)}}else if(d===225)t.bvF(s)
else if(d===238){x=s
w=!1
if(J.v(x.a,x.d)===65){x=s
if(J.v(x.a,x.d+1)===100){x=s
if(J.v(x.a,x.d+2)===111){x=s
if(J.v(x.a,x.d+3)===98){x=s
if(J.v(x.a,x.d+4)===101){x=s
x=J.v(x.a,x.d+5)===0}else x=w}else x=w}else x=w}else x=w}else x=w
if(x){t.c=new A.bz_()
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
x.d=J.v(w.a,w.d+11)}}else if(d===254)try{s.bZL()}catch(u){C.bd(u)}},
bvE(d){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=this.w;v=d.d,u=v<x,u;){u=d.a
d.d=v+1
t=J.v(u,v)
s=D.c.W(t,4)
t&=15
if(t>=4)throw C.p(A.cp("Invalid number of quantization tables"))
v=w[t]
if(v==null){v=new Int16Array(64)
w[t]=v}for(u=s!==0,r=0;r<64;++r){q=u?d.aw():J.v(d.a,d.d++)
p=B.zc[r]
v.$flags&2&&C.L(v)
v[p]=q}}if(u)throw C.p(A.cp("Bad length for DQT block"))},
bvG(d,e){var x,w,v,u,t,s,r,q=this
if(q.d!=null)throw C.p(A.cp("Duplicate JPG frame data found."))
x=q.d=new A.azp(C.H(y.p,y.c),C.b([],y.t))
x.b=d===194
x.c=e.cM()
x=q.d
x.toString
x.d=e.aw()
x=q.d
x.toString
x.e=e.aw()
w=e.cM()
for(x=q.w,v=0;v<w;++v){u=J.v(e.a,e.d++)
t=J.v(e.a,e.d++)
s=D.c.W(t,4)
r=J.v(e.a,e.d++)
q.d.z.push(u)
q.d.y.m(0,u,new A.Fd(s&15,t&15,x,r))}q.d.aj1()
q.x.push(q.d)},
bvD(d){var x,w,v,u,t,s,r,q,p,o,n,m
for(x=d.c,w=this.z,v=this.y;u=d.d,u<x;){t=d.a
d.d=u+1
s=J.v(t,u)
r=new Uint8Array(16)
for(q=0,p=0;p<16;++p){r[p]=J.v(d.a,d.d++)
q+=r[p]}o=d.jY(q)
d.d=d.d+(o.c-o.d)
n=o.im()
if((s&16)!==0){s-=16
m=v}else m=w
if(m.length<=s)D.b.sA(m,s+1)
m[s]=this.b5E(r,n)}},
bvS(d){var x,w,v,u,t,s,r,q=this,p=d.cM()
if(p<1||p>4)throw C.p(A.cp("Invalid SOS block"))
x=C.qr(p,new A.bz2(q,d),!0,y.c)
w=d.cM()
v=d.cM()
u=d.cM()
t=D.c.W(u,4)
s=q.a
s===$&&C.a()
r=q.d
t=new A.azq(s,r,x,q.e,w,v,t&15,u&15)
s=r.w
s===$&&C.a()
t.f=s
t.r=r.b
t.p9(0)},
b5E(d,e){var x,w,v,u,t,s,r,q,p,o,n=C.b([],y.C),m=16
while(!0){if(!(m>0&&d[m-1]===0))break;--m}x=y.aH
n.push(new A.Yu(C.b([],x)))
w=n[0]
for(v=0,u=0;u<m;){for(t=0;t<d[u];++t){w=n.pop()
s=w.a
r=s.length
q=w.b
if(r<=q)D.b.sA(s,q+1)
s[w.b]=new A.a4H(e[v])
for(;s=w.b,s>0;)w=n.pop()
w.b=s+1
n.push(w)
for(;n.length<=u;w=p){s=C.b([],x)
p=new A.Yu(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.sA(r,o+1)
r[w.b]=new A.KD(s)}++v}++u
if(u<m){s=C.b([],x)
p=new A.Yu(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.sA(r,o+1)
r[w.b]=new A.KD(s)
w=p}}return n[0].a},
b5g(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.e
d===$&&C.a()
x=a1.f
x===$&&C.a()
w=d<<3>>>0
v=new Int32Array(64)
u=new Uint8Array(64)
t=C.c5(x*8,null,!1,y.ac)
for(s=a1.c,r=a1.d,q=0,p=0;p<x;++p){o=p<<3>>>0
for(n=0;n<8;++n,q=m){m=q+1
t[q]=new Uint8Array(w)}for(l=0;l<d;++l){k=s[r]
k.toString
j=a1.r
j===$&&C.a()
A.dUK(k,j[p][l],u,v)
i=l<<3>>>0
for(h=0,g=0;g<8;++g){f=t[o+g]
for(n=0;n<8;++n,h=e){f.toString
e=h+1
k=u[h]
f.$flags&2&&C.L(f)
f[i+n]=k}}}}return t}}
A.Yu.prototype={}
A.azp.prototype={
aj1(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.y,w=C.t(x).i("ci<1>"),v=new C.ci(x,x.r,x.e,w);v.t();){u=x.h(0,v.d)
g.f=Math.max(g.f,u.a)
g.r=Math.max(g.r,u.b)}v=g.e
v.toString
g.w=D.e.fK(v/8/g.f)
v=g.d
v.toString
g.x=D.e.fK(v/8/g.r)
for(w=new C.ci(x,x.r,x.e,w),v=y.h,t=y.bp;w.t();){s=x.h(0,w.d)
s.toString
r=g.e
r.toString
q=s.a
p=D.e.fK(D.e.fK(r/8)*q/g.f)
r=g.d
r.toString
o=s.b
n=D.e.fK(D.e.fK(r/8)*o/g.r)
m=g.w*q
l=g.x*o
k=J.jM(l,t)
for(j=0;j<l;++j){i=J.jM(m,v)
for(h=0;h<m;++h)i[h]=new Int32Array(64)
k[j]=i}s.e=p
s.f=n
s.r=k}}}
A.bz5.prototype={}
A.azq.prototype={
p9(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.y,f=g.length,e=h.r
e.toString
if(e)if(h.Q===0)x=h.at===0?h.gb98():h.gb9a()
else x=h.at===0?h.gb9_():h.gb91()
else x=h.gb95()
e=f===1
if(e){w=g[0]
v=w.e
v===$&&C.a()
w=w.f
w===$&&C.a()
u=v*w}else{w=h.f
w===$&&C.a()
v=h.b.x
v===$&&C.a()
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
v===$&&C.a()
p=D.c.hR(t,v)
o=D.c.av(t,v)
v=r.r
v===$&&C.a()
x.$2(r,v[p][o]);++t;++q}}else{q=0
while(!0){v=h.z
v.toString
if(!(q<v))break
for(s=0;s<f;++s){r=g[s]
n=r.a
m=r.b
for(l=0;l<m;++l)for(k=0;k<n;++k)h.b9g(r,x,t,l,k)}++t;++q}}h.ch=0
j=J.v(w.a,w.d)
i=J.v(w.a,w.d+1)
if(j===255)if(i>=208&&i<=215)w.d+=2
else break}},
Dk(){var x,w=this,v=w.ch
if(v>0){--v
w.ch=v
return D.c.oR(w.ay,v)&1}v=w.a
if(v.d>=v.c)return null
x=v.cM()
w.ay=x
if(x===255)if(v.cM()!==0)return null
w.ch=7
return D.c.W(w.ay,7)&1},
O7(d){var x,w=new A.KD(d)
for(;x=this.Dk(),x!=null;){if(w instanceof A.KD)w=w.a[x]
if(w instanceof A.a4H)return w.a}return null},
abc(d){var x,w
for(x=0;d>0;){w=this.Dk()
if(w==null)return null
x=(x<<1|w)>>>0;--d}return x},
OG(d){var x
if(d==null)return 0
if(d===1)return this.Dk()===1?1:-1
x=this.abc(d)
if(x==null)return 0
if(x>=D.c.f7(1,d-1))return x
return x+D.c.eA(-1,d)+1},
b96(d,e){var x,w,v,u,t,s,r=this,q=d.w
q===$&&C.a()
x=r.O7(q)
w=x===0?0:r.OG(x)
q=d.y
q===$&&C.a()
q+=w
d.y=q
e.$flags&2&&C.L(e)
e[0]=q
for(v=1;v<64;){q=d.x
q===$&&C.a()
u=r.O7(q)
if(u==null)break
t=u&15
s=u>>>4
if(t===0){if(s<15)break
v+=16
continue}v+=s
t=r.OG(t)
e[B.zc[v]]=t;++v}},
b99(d,e){var x,w,v=d.w
v===$&&C.a()
x=this.O7(v)
w=x===0?0:D.c.eA(this.OG(x),this.ax)
v=d.y
v===$&&C.a()
v+=w
d.y=v
e.$flags&2&&C.L(e)
e[0]=v},
b9b(d,e){var x=e[0],w=this.Dk()
w.toString
w=D.c.eA(w,this.ax)
e.$flags&2&&C.L(e)
e[0]=(x|w)>>>0},
b90(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.CW
if(o>0){p.CW=o-1
return}x=p.Q
w=p.as
for(o=p.ax,v=e.$flags|0;x<=w;){u=d.x
u===$&&C.a()
u=p.O7(u)
u.toString
t=u&15
s=u>>>4
if(t===0){if(s<15){o=p.abc(s)
o.toString
p.CW=o+D.c.eA(1,s)-1
break}x+=16
continue}x+=s
r=B.zc[x]
u=p.OG(t)
q=D.c.eA(1,o)
v&2&&C.L(e)
e[r]=u*q;++x}},
b92(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.Q,n=p.as
$label0$1:for(x=p.ax,w=e.$flags|0,v=0;o<=n;){u=B.zc[o]
t=p.cx
switch(t){case 0:t=d.x
t===$&&C.a()
s=p.O7(t)
if(s==null)throw C.p(A.cp("Invalid progressive encoding"))
r=s&15
v=s>>>4
if(r===0)if(v<15){t=p.abc(v)
t.toString
p.CW=t+D.c.eA(1,v)
p.cx=4}else{p.cx=1
v=16}else{if(r!==1)throw C.p(A.cp("invalid ACn encoding"))
p.cy=p.OG(r)
p.cx=v!==0?2:3}continue $label0$1
case 1:case 2:q=e[u]
if(q!==0){t=p.Dk()
t.toString
t=D.c.eA(t,x)
w&2&&C.L(e)
e[u]=q+t}else{--v
if(v===0)p.cx=t===2?3:0}break
case 3:t=e[u]
if(t!==0){q=p.Dk()
q.toString
q=D.c.eA(q,x)
w&2&&C.L(e)
e[u]=t+q}else{t=p.cy
t===$&&C.a()
t=D.c.eA(t,x)
w&2&&C.L(e)
e[u]=t
p.cx=0}break
case 4:t=e[u]
if(t!==0){q=p.Dk()
q.toString
q=D.c.eA(q,x)
w&2&&C.L(e)
e[u]=t+q}break}++o}if(p.cx===4)if(--p.CW===0)p.cx=0},
b9g(d,e,f,g,h){var x,w,v=this.f
v===$&&C.a()
x=D.c.hR(f,v)*d.b+g
w=D.c.av(f,v)*d.a+h
v=d.r
v===$&&C.a()
if(x>=v.length)return
v=v[x]
if(w>=v.length)return
e.$2(d,v[w])}}
A.azo.prototype={
nC(d,e,f){var x=A.d9V()
x.oH(0,e)
if(x.x.length!==1)throw C.p(A.cp("only single frame JPEGs supported"))
return A.dT_(x)},
dn(d,e){return this.nC(0,e,null)}}
A.bz0.prototype={
J(){return"JpegChroma."+this.b}}
A.bz3.prototype={
aUL(d){d=D.c.L(D.c.aK(d,1,100))
if(this.at===d)return
this.bmW(d<50?D.e.fN(5000/d):D.c.fN(200-d*2))
this.at=d},
bOl(b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=A.rY(!0,8192)
a8.Ah(a9,216)
a8.Ah(a9,224)
a9.lB(16)
a9.bi(74)
a9.bi(70)
a9.bi(73)
a9.bi(70)
a9.bi(0)
a9.bi(1)
a9.bi(1)
a9.bi(0)
a9.lB(1)
a9.lB(1)
a9.bi(0)
a9.bi(0)
a8.bFe(a9,b0.gy8())
a8.bFi(a9)
x=b0.geb(0)
w=b0.ge5(0)
a8.Ah(a9,192)
a9.lB(17)
a9.bi(8)
a9.lB(w)
a9.lB(x)
a9.bi(3)
a9.bi(1)
x=b1===B.QH
a9.bi(x?17:34)
a9.bi(0)
a9.bi(2)
a9.bi(17)
a9.bi(1)
a9.bi(3)
a9.bi(17)
a9.bi(1)
a8.bFh(a9)
a8.Ah(a9,218)
a9.lB(12)
a9.bi(3)
a9.bi(1)
a9.bi(0)
a9.bi(2)
a9.bi(17)
a9.bi(3)
a9.bi(17)
a9.bi(0)
a9.bi(63)
a9.bi(0)
a8.ax=0
a8.ay=7
v=b0.geb(0)
u=b0.ge5(0)
if(x){t=new Float32Array(64)
s=new Float32Array(64)
r=new Float32Array(64)
for(x=a8.c,w=a8.d,q=0,p=0,o=0,n=0;n<u;n+=8)for(m=0;m<v;m+=8){a8.MU(b0,m,n,v,u,t,s,r)
l=a8.e
k=a8.r
k===$&&C.a()
q=a8.xu(a9,t,x,q,l,k)
k=a8.f
l=a8.w
l===$&&C.a()
p=a8.xu(a9,s,w,p,k,l)
o=a8.xu(a9,r,w,o,a8.f,a8.w)}}else{x=y.z
t=J.jt(4,x)
for(j=0;j<4;++j)t[j]=new Float32Array(64)
s=J.jt(4,x)
for(j=0;j<4;++j)s[j]=new Float32Array(64)
r=J.jt(4,x)
for(j=0;j<4;++j)r[j]=new Float32Array(64)
i=new Float32Array(64)
h=new Float32Array(64)
for(x=a8.c,w=a8.d,q=0,p=0,o=0,n=0;n<u;n+=16)for(l=n+8,m=0;m<v;m+=16){k=t[0]
g=s[0]
f=r[0]
a8.MU(b0,m,n,v,u,k,g,f)
e=m+8
d=t[1]
a0=s[1]
a1=r[1]
a8.MU(b0,e,n,v,u,d,a0,a1)
a2=t[2]
a3=s[2]
a4=r[2]
a8.MU(b0,m,l,v,u,a2,a3,a4)
a5=t[3]
a6=s[3]
a7=r[3]
a8.MU(b0,e,l,v,u,a5,a6,a7)
a8.ash(i,g,a0,a3,a6)
a8.ash(h,f,a1,a4,a7)
a7=a8.e
a4=a8.r
a4===$&&C.a()
q=a8.xu(a9,a5,x,a8.xu(a9,a2,x,a8.xu(a9,d,x,a8.xu(a9,k,x,q,a7,a4),a8.e,a8.r),a8.e,a8.r),a8.e,a8.r)
a4=a8.f
a7=a8.w
a7===$&&C.a()
p=a8.xu(a9,i,w,p,a4,a7)
o=a8.xu(a9,h,w,o,a8.f,a8.w)}}x=a8.ay
if(x>=0){++x
a8.xG(a9,C.b([D.c.f7(1,x)-1,x],y.t))}a8.Ah(a9,217)
return J.dz(D.H.gar(a9.c),0,a9.a)},
MU(d,e,f,g,h,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(x=this.as,w=a0.$flags|0,v=a1.$flags|0,u=a2.$flags|0,t=f+1,s=0;s<64;++s){r=s>>>3
q=f+r
p=e+(s&7)
if(q>=h)q-=t+r-h
if(p>=g)p-=p-g+1
o=d.a
n=o==null?null:o.eu(p,q,null)
if(n==null)n=new A.h5()
if(n.gdK()!==B.ai)n=n.p8(B.ai)
if(n.gA(n)>3){m=n.gfW()
l=1-m
n.sau(0,D.e.aE(n.gau(n)*m+B.Dy.h(0,0)*l))
n.saF(D.e.aE(n.gaF()*m+B.Dy.h(0,0)*l))
n.saH(0,D.e.aE(n.gaH(n)*m+B.Dy.h(0,0)*l))}k=D.e.L(n.gau(n))
j=D.e.L(n.gaF())
i=D.e.L(n.gaH(n))
o=D.c.W(x[k]+x[j+256]+x[i+512],16)
w&2&&C.L(a0)
a0[s]=o-128
o=D.c.W(x[k+768]+x[j+1024]+x[i+1280],16)
v&2&&C.L(a1)
a1[s]=o-128
o=D.c.W(x[k+1280]+x[j+1536]+x[i+1792],16)
u&2&&C.L(a2)
a2[s]=o-128}},
ash(d,e,f,g,h){var x,w,v,u,t,s,r,q
for(x=d.$flags|0,w=0;w<64;++w){if(w<32)v=D.c.av(w,8)<4?e:f
else v=D.c.av(w,8)<4?g:h
u=(D.c.aL(D.c.av(w,32),8)<<4>>>0)+(D.c.av(w,4)<<1>>>0)
t=v[u]
s=v[u+1]
r=v[u+8]
q=v[u+9]
x&2&&C.L(d)
d[w]=(t+s+r+q)/4}},
Ah(d,e){d.bi(255)
d.bi(e&255)},
bmW(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.a,w=x.$flags|0,v=0;v<64;++v){u=D.e.fN((B.aO2[v]*d+50)/100)
if(u<1)u=1
else if(u>255)u=255
t=B.vB[v]
w&2&&C.L(x)
x[t]=u}for(w=g.b,t=w.$flags|0,s=0;s<64;++s){r=D.e.fN((B.aHe[s]*d+50)/100)
if(r<1)r=1
else if(r>255)r=255
q=B.vB[s]
t&2&&C.L(w)
w[q]=r}for(t=g.c,q=t.$flags|0,p=g.d,o=p.$flags|0,n=0,m=0;m<8;++m)for(l=0;l<8;++l){k=B.vB[n]
j=x[k]
i=B.S4[m]
h=B.S4[l]
q&2&&C.L(t)
t[n]=1/(j*i*h*8)
k=w[k]
o&2&&C.L(p)
p[n]=1/(k*i*h*8);++n}},
W1(d,e){var x,w,v,u,t,s=y.t,r=C.b([C.b([],s)],y.cQ)
for(x=0,w=0,v=1;v<=16;++v){for(u=1;u<=d[v];++u){t=e[w]
if(r.length<=t)D.b.sA(r,t+1)
r[t]=C.b([x,v],s);++w;++x}x*=2}return r},
bmL(){var x,w,v,u,t,s,r,q,p,o,n
for(x=this.y,w=this.x,v=y.t,u=1,t=2,s=1;s<=15;++s){for(r=u;r<t;++r){q=32767+r
x[q]=s
w[q]=C.b([r,s],v)}for(q=t-1,p=-q,o=-u;p<=o;++p){n=32767+p
x[n]=s
w[n]=C.b([q+p,s],v)}u=u<<1>>>0
t=t<<1>>>0}},
bmX(){var x,w,v
for(x=this.as,w=x.$flags|0,v=0;v<256;++v){w&2&&C.L(x)
x[v]=19595*v
x[v+256]=38470*v
x[v+512]=7471*v+32768
x[v+768]=-11059*v
x[v+1024]=-21709*v
x[v+1280]=32768*v+8421375
x[v+1536]=-27439*v
x[v+1792]=-5329*v}},
bcd(d4,d5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3
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
x&2&&C.L(d4)
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
x&2&&C.L(d4)
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
bFe(d,e){var x,w
if(e.gZ(0))return
x=A.rY(!1,8192)
e.jB(0,x)
w=J.dz(D.H.gar(x.c),0,x.a)
this.Ah(d,225)
d.lB(w.length+8)
d.jC(1165519206)
d.lB(0)
d.mI(w)},
bFi(d){var x,w,v
this.Ah(d,219)
d.lB(132)
d.bi(0)
for(x=this.a,w=0;w<64;++w)d.bi(x[w])
d.bi(1)
for(x=this.b,v=0;v<64;++v)d.bi(x[v])},
bFh(d){var x,w,v,u,t,s,r,q
this.Ah(d,196)
d.lB(418)
d.bi(0)
for(x=0;x<16;){++x
d.bi(B.Z1[x])}for(w=0;w<=11;++w)d.bi(B.v4[w])
d.bi(16)
for(v=0;v<16;){++v
d.bi(B.R8[v])}for(u=0;u<=161;++u)d.bi(B.Ss[u])
d.bi(1)
for(t=0;t<16;){++t
d.bi(B.U2[t])}for(s=0;s<=11;++s)d.bi(B.v4[s])
d.bi(17)
for(r=0;r<16;){++r
d.bi(B.ST[r])}for(q=0;q<=161;++q)d.bi(B.Vm[q])},
xu(d,e,f,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=a2[0],h=a2[240],g=j.bcd(e,f)
for(x=j.Q,w=0;w<64;++w)x[B.vB[w]]=g[w]
v=x[0]
v.toString
u=v-a0
if(u===0){t=a1[0]
t.toString
j.xG(d,t)}else{s=32767+u
a1.toString
t=j.y[s]
t.toString
t=a1[t]
t.toString
j.xG(d,t)
t=j.x[s]
t.toString
j.xG(d,t)}r=63
while(!0){if(!(r>0&&x[r]===0))break;--r}if(r===0){i.toString
j.xG(d,i)
return v}for(t=j.y,q=j.x,p=1;p<=r;){o=p
while(!0){if(!(x[o]===0&&o<=r))break;++o}n=o-p
if(n>=16){m=D.c.W(n,4)
for(l=1;l<=m;++l){h.toString
j.xG(d,h)}n&=15}k=x[o]
k.toString
s=32767+k
k=t[s]
k.toString
k=a2[(n<<4>>>0)+k]
k.toString
j.xG(d,k)
k=q[s]
k.toString
j.xG(d,k)
p=o+1}if(r!==63){i.toString
j.xG(d,i)}return v},
xG(d,e){var x,w=this,v=e[0],u=e[1]-1
for(;u>=0;){if((v&D.c.f7(1,u))>>>0!==0)w.ax=(w.ax|D.c.f7(1,w.ay))>>>0;--u
if(--w.ay<0){x=w.ax
if(x===255){d.bi(255)
d.bi(0)}else d.bi(x)
w.ay=7
w.ax=0}}}}
A.UE.prototype={
J(){return"PngDisposeMode."+this.b}}
A.a85.prototype={
J(){return"PngBlendMode."+this.b}}
A.a86.prototype={}
A.az9.prototype={}
A.G1.prototype={
J(){return"PngFilterType."+this.b}}
A.bJS.prototype={}
A.by3.prototype={}
A.aEe.prototype={
Kh(d){var x,w=A.dl(d,!0,null,0).jR(8)
for(x=0;x<8;++x)if(J.v(w.a,w.d+x)!==D.XD[x])return!1
return!0},
pE(b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=A.dl(b4,!0,b2,0)
b1.d=b3
x=b3.jR(8)
for(w=0;w<8;++w)if(J.v(x.a,x.d+w)!==D.XD[w])return b2
for(b3=b1.a,v=b3.cx,u=y.t,t=b3.cy,s=y.L,r=b3.ax;!0;){q=b1.d
p=q.d-q.b
o=q.ai()
n=b1.d.jS(4)
switch(n){case"tEXt":q=b1.d
m=q.jY(o)
q.d=q.d+(m.c-m.d)
l=m.im()
k=l.length
for(w=0;w<k;++w)if(l[w]===0){q=w+1
r.m(0,D.f5.dn(0,new Uint8Array(l.subarray(0,C.ty(0,w,k)))),D.f5.dn(0,new Uint8Array(l.subarray(q,C.ty(q,b2,k)))))
break}b1.d.d+=4
break
case"pHYs":q=b1.d
m=q.jY(o)
q.d=q.d+(m.c-m.d)
j=A.cu(m,b2,0)
j.ai()
j.ai()
J.v(j.a,j.d++)
b1.d.d+=4
break
case"IHDR":q=b1.d
m=q.jY(o)
q.d=q.d+(m.c-m.d)
i=A.cu(m,b2,0)
h=i.im()
b3.a=i.ai()
b3.b=i.ai()
b3.c=J.v(i.a,i.d++)
b3.d=J.v(i.a,i.d++)
J.v(i.a,i.d++)
b3.f=J.v(i.a,i.d++)
b3.r=J.v(i.a,i.d++)
q=b3.d
if(!(q===0||q===2||q===3||q===4||q===6))return b2
if(b3.f!==0)return b2
switch(q){case 0:if(!D.b.p(C.b([1,2,4,8,16],u),b3.c))return b2
break
case 2:if(!D.b.p(C.b([8,16],u),b3.c))return b2
break
case 3:if(!D.b.p(C.b([1,2,4,8],u),b3.c))return b2
break
case 4:if(!D.b.p(C.b([8,16],u),b3.c))return b2
break
case 6:if(!D.b.p(C.b([8,16],u),b3.c))return b2
break}if(b1.d.ai()!==A.zH(h,A.zH(new C.f0(n),0)))throw C.p(A.cp("Invalid "+n+" checksum"))
break
case"PLTE":q=b1.d
m=q.jY(o)
q.d=q.d+(m.c-m.d)
b3.w=m.im()
if(b1.d.ai()!==A.zH(s.a(b3.w),A.zH(new C.f0(n),0)))throw C.p(A.cp("Invalid "+n+" checksum"))
break
case"tRNS":q=b1.d
m=q.jY(o)
q.d=q.d+(m.c-m.d)
b3.x=m.im()
g=b1.d.ai()
q=b3.x
q.toString
if(g!==A.zH(q,A.zH(new C.f0(n),0)))throw C.p(A.cp("Invalid "+n+" checksum"))
break
case"IEND":b1.d.d+=4
break
case"gAMA":if(o!==4)throw C.p(A.cp("Invalid gAMA chunk"))
b1.d.ai()
b1.d.d+=4
break
case"IDAT":t.push(p)
q=b1.d
q.d=(q.d+=o)+4
break
case"acTL":b3.ch=b1.d.ai()
b1.d.ai()
b1.d.d+=4
break
case"fcTL":b1.d.ai()
f=b1.d.ai()
e=b1.d.ai()
d=b1.d.ai()
a0=b1.d.ai()
a1=b1.d.aw()
a2=b1.d.aw()
q=b1.d
a3=J.v(q.a,q.d++)
q=b1.d
a4=J.v(q.a,q.d++)
q=B.aEL[a3]
a5=B.aLo[a4]
v.push(new A.az9(C.b([],u),f,e,d,a0,a1,a2,q,a5))
b1.d.d+=4
break
case"fdAT":b1.d.ai()
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
b3.z=new A.Rb(a5)}else{q=new Uint8Array(3)
q[0]=a8
q[1]=a9
q[2]=b0
b3.z=new A.ark(q)}}else if(q===0||q===4){b1.d.aw()
o-=2}else if(q===2||q===6){q=b1.d
q.aw()
q.aw()
q.aw()
o-=24}if(o>0)b1.d.d+=o
b1.d.d+=4
break
case"iCCP":b3.Q=b1.d.SW()
q=b1.d
J.v(q.a,q.d++)
q=b3.Q
a5=b1.d
m=a5.jY(o-(q.length+2))
a5.d=a5.d+(m.c-m.d)
b3.at=m.im()
b1.d.d+=4
break
default:q=b1.d
q.d=(q.d+=o)+4
break}if(n==="IEND")break
q=b1.d
if(q.d>=q.c)return b2}return b3},
kJ(b7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=null,b2=a9.a,b3=b2.a,b4=b2.b,b5=b2.cx,b6=b5.length
if(b6===0||b7===0){w=C.b([],y.a)
b5=b2.cy
v=b5.length
for(u=0,t=0;t<v;++t){b6=a9.d
b6===$&&C.a()
b6.d=b5[t]
s=b6.ai()
r=a9.d.jS(4)
b6=a9.d
q=b6.jY(s)
b6.d=b6.d+(q.c-q.d)
p=q.im()
u+=p.length
w.push(p)
if(a9.d.ai()!==A.zH(p,A.zH(new C.f0(r),0)))throw C.p(A.cp("Invalid "+r+" checksum"))}b1=new Uint8Array(u)
for(b5=w.length,o=0,n=0;n<w.length;w.length===b5||(0,C.K)(w),++n){p=w[n]
J.cXu(b1,o,p)
o+=p.length}}else{if(b7>=b6)throw C.p(A.cp("Invalid Frame Number: "+b7))
m=b5[b7]
b3=m.b
b4=m.c
w=C.b([],y.a)
for(b5=m.y,u=0,t=0;t<b5.length;++t){b6=a9.d
b6===$&&C.a()
b6.d=b5[t]
s=b6.ai()
b6=a9.d
b6.jS(4)
b6.d+=4
b6=a9.d
q=b6.jY(s-4)
b6.d=b6.d+(q.c-q.d)
p=q.im()
u+=p.length
w.push(p)}b1=new Uint8Array(u)
for(b5=w.length,o=0,n=0;n<w.length;w.length===b5||(0,C.K)(w),++n){p=w[n]
J.cXu(b1,o,p)
o+=p.length}}b5=b2.d
l=1
if(!(b5===3))if(!(b5===0)){if(b5===4)b5=2
else b5=b5===6?4:3
l=b5}x=null
try{x=B.kS.E9(b1)}catch(k){return b0}j=A.dl(x,!0,b0,0)
a9.c=a9.b=0
i=b0
if(b2.d===3){b5=b2.w
if(b5!=null){h=b5.length/3|0
g=b2.x
b6=g!=null
f=b6?g.length:0
e=b6?4:3
i=new A.ws(new Uint8Array(h*e),h,e)
for(b6=e===4,t=0,d=0;t<h;++t,d+=3){a0=b6&&t<f?g[t]:255
i.UJ(t,b5[d],b5[d+1],b5[d+2],a0)}}}if(b2.d===0&&b2.x!=null&&i==null&&b2.c<=8){g=b2.x
a1=g.length
b5=b2.c
h=D.c.f7(1,b5)
b6=new Uint8Array(h*4)
i=new A.ws(b6,h,4)
if(b5===1)a2=255
else if(b5===2)a2=85
else{b5=b5===4?17:1
a2=b5}for(t=0;t<h;++t){a3=t*a2
i.UJ(t,a3,a3,a3,255)}for(t=0;t<a1;t+=2){a4=(g[t]&255)<<8|g[t+1]&255
if(a4<h)b6[a4*4+3]=0}}b5=b2.c
if(b5===1)a5=B.hJ
else if(b5===2)a5=B.iB
else{if(b5===4)b6=B.iC
else b6=b5===16?B.cV:B.ai
a5=b6}b6=b2.d
if(b6===0&&b2.x!=null&&b5>8)l=4
a6=A.iO(b0,b0,a5,0,B.bD,b4,b0,0,b6===2&&b2.x!=null?4:l,i,B.ai,b3,!1)
a7=b2.a
a8=b2.b
b2.a=b3
b2.b=b4
a9.e=0
if(b2.r!==0){b5=b4+7>>>3
a9.Dh(j,a6,0,0,8,8,b3+7>>>3,b5)
b6=b3+3
a9.Dh(j,a6,4,0,8,8,b6>>>3,b5)
b5=b4+3
a9.Dh(j,a6,0,4,4,8,b6>>>2,b5>>>3)
b6=b3+1
a9.Dh(j,a6,2,0,4,4,b6>>>2,b5>>>2)
b5=b4+1
a9.Dh(j,a6,0,2,2,4,b6>>>1,b5>>>2)
a9.Dh(j,a6,1,0,2,2,b3>>>1,b5>>>1)
a9.Dh(j,a6,0,1,1,2,b3,b4>>>1)}else a9.buA(j,a6)
b2.a=a7
b2.b=a8
b5=b2.at
if(b5!=null)a6.c=new A.a4J(b2.Q,B.ET,b5)
b2=b2.ax
if(b2.a!==0)a6.bG7(b2)
return a6},
nC(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(g.pE(e)==null)return f
x=g.a
w=x.cx
v=w.length
if(v===0){x=g.kJ(0)
x.toString
return x}for(v=y.g,u=f,t=u,s=0;s<x.ch;++s){a0=w[s]
r=g.kJ(s)
if(r==null)continue
if(t==null||u==null){t=r.aGz(r.gr6())
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
o=o===(n==null?0:n)&&a0.d===0&&a0.e===0&&a0.x===B.acu}else o=!1
if(o){q=a0.f
r.y=D.e.L((q===0||a0.r===0?0:q/a0.r)*1000)
t.oh(r)
u=r
continue}i=t.x
u=A.EV((i===$?t.x=C.b([],v):i)[q],!1,!1)
h=p.w
if(h===B.acw){q=p.d
o=p.e
n=x.z
if(n==null){n=new Uint8Array(4)
m=new A.Rb(n)
n[0]=0
n[1]=0
n[2]=0
n[3]=0
n=m}A.dSm(u,!1,n,q,q+p.b-1,o,o+p.c-1)}else if(h===B.acx&&s>1){i=t.x
if(i===$)i=t.x=C.b([],v)
q=p.d
o=p.e
n=p.b
m=p.c
u=A.d2u(u,i[s-2],B.Cr,m,n,q,o,m,n,q,o)}q=a0.f
u.y=D.e.L((q===0||a0.r===0?0:q/a0.r)*1000)
q=a0.x===B.acv?B.Cr:B.Cq
u=A.d2u(u,r,q,f,f,a0.d,a0.e,f,f,f,f)
t.oh(u)}return t},
dn(d,e){return this.nC(0,e,null)},
Dh(a0,a1,a2,a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=e.d
if(d===4)x=2
else if(d===2)x=3
else{d=d===6?4:1
x=d}w=x*e.c
v=D.c.W(w+7,3)
u=D.c.W(w*a6+7,3)
t=C.b([null,null],y.e)
s=C.b([0,0,0,0],y.t)
for(e=a4>1,r=a4-a2,q=a3,p=0,o=0;p<a7;++p,q+=a5,++f.e){n=B.WO[J.v(a0.a,a0.d++)]
m=a0.jY(u)
a0.d=a0.d+(m.c-m.d)
d=m.im()
t[o]=d
o=1-o
f.aC0(n,v,d,t[o])
f.c=f.b=0
l=d.length
k=new A.ns(d,0,Math.min(l,l),0,!0)
for(d=r<=1,j=a2,i=0;i<a6;++i,j+=a4){f.ayC(k,s)
l=a1.a
l=l==null?null:l.eu(j,q,null)
f.abO(l==null?new A.h5():l,s)
if(!d||e)for(h=0;h<a4;++h)for(l=q+h,g=0;g<r;++g)f.abO(a1.kW(j+g,l),s)}}},
buA(d,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a,e=f.d
if(e===4)x=2
else if(e===2)x=3
else{e=e===6?4:1
x=e}w=x*f.c
v=f.a
u=f.b
t=D.c.W(v*w+7,3)
s=D.c.W(w+7,3)
r=C.c5(t,0,!1,y.p)
q=C.b([r,r],y.S)
p=C.b([0,0,0,0],y.t)
f=a0.a
o=f.gad(f)
o.t()
for(n=0,m=0;n<u;++n,m=j){l=B.WO[J.v(d.a,d.d++)]
k=d.jY(t)
d.d=d.d+(k.c-k.d)
f=k.im()
q[m]=f
j=1-m
g.aC0(l,s,f,q[j])
g.c=g.b=0
f=q[m]
e=f.length
i=new A.ns(f,0,Math.min(e,e),0,!0)
for(h=0;h<v;++h){g.ayC(i,p)
g.abO(o.gM(o),p)
o.t()}}},
aC0(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=f.length
switch(d.a){case 0:break
case 1:for(x=e;x<l;++x)f[x]=f[x]+f[x-e]&255
break
case 2:for(w=g!=null,x=0;x<l;++x){v=w?g[x]:0
f[x]=f[x]+v&255}break
case 3:for(w=g!=null,x=0;x<l;++x){u=x<e?0:f[x-e]
v=w?g[x]:0
f[x]=f[x]+D.c.W(u+v,1)&255}break
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
ue(d,e){var x,w,v,u,t,s=this
if(e===0)return 0
if(e===8)return d.cM()
if(e===16)return d.aw()
for(x=d.c;w=s.c,w<e;){w=d.d
if(w>=x)throw C.p(A.cp("Invalid PNG data."))
v=d.a
d.d=w+1
u=J.v(v,w)
w=s.c
s.b=D.c.f7(u,w)
s.c=w+8}if(e===1)t=1
else if(e===2)t=3
else{if(e===4)x=15
else x=0
t=x}x=w-e
w=D.c.hv(s.b,x)
s.c=x
return w&t},
ayC(d,e){var x=this,w=x.a,v=w.d
switch(v){case 0:e[0]=x.ue(d,w.c)
return
case 2:e[0]=x.ue(d,w.c)
e[1]=x.ue(d,w.c)
e[2]=x.ue(d,w.c)
return
case 3:e[0]=x.ue(d,w.c)
return
case 4:e[0]=x.ue(d,w.c)
e[1]=x.ue(d,w.c)
return
case 6:e[0]=x.ue(d,w.c)
e[1]=x.ue(d,w.c)
e[2]=x.ue(d,w.c)
e[3]=x.ue(d,w.c)
return}throw C.p(A.cp("Invalid color type: "+v+"."))},
abO(d,e){var x,w,v,u,t,s,r,q=this.a,p=q.d
switch(p){case 0:p=q.x
if(p!=null&&q.c>8){q=p[0]
p=p[1]
x=e[0]
d.iZ(x,x,x,x!==((q&255)<<24|p&255)>>>0?d.gct():0)
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
if(w!==((p&255)<<8|u&255)||x!==((t&255)<<8|s&255)||v!==((r&255)<<8|q&255)){d.iZ(w,x,v,d.gct())
return}}d.le(w,x,v)
return
case 3:d.sdL(0,e[0])
return
case 4:d.le(e[0],e[1],0)
return
case 6:d.iZ(e[0],e[1],e[2],e[3])
return}throw C.p(A.cp("Invalid color type: "+p+"."))}}
A.aEf.prototype={
J(){return"PngFilter."+this.b}}
A.bJQ.prototype={
oh(d){var x,w,v,u,t,s,r,q,p=this,o=8192,n=d.a
n=n==null?null:n.gtp()
if(!(n===!0&&d.gdK()!==B.cV))n=d.gnx()<8&&!d.gtk()&&d.gr6()>1
else n=!0
if(n)d=d.p8(B.ai)
if(p.w==null){n=A.rY(!0,o)
p.w=n
n.mI(C.b([137,80,78,71,13,10,26,10],y.t))
x=A.rY(!0,o)
x.jC(d.geb(0))
x.jC(d.ge5(0))
x.bi(d.gnx())
if(d.gtk())n=3
else if(d.gr6()===1)n=0
else if(d.gr6()===2)n=4
else n=d.gr6()===3?2:6
x.bi(n)
x.bi(0)
x.bi(0)
x.bi(0)
n=p.w
n.toString
p.un(n,"IHDR",J.dz(D.H.gar(x.c),0,x.a))
n=d.c
if(n!=null){x=A.rY(!0,o)
x.mI(new C.f0(n.a))
x.bi(0)
x.bi(0)
x.mI(n.bJg())
n=p.w
n.toString
p.un(n,"iCCP",J.dz(D.H.gar(x.c),0,x.a))}if(d.gtk()){n=p.a
if(n!=null){n=n.a
n===$&&C.a()
p.aDL(n)}else{n=d.a
n=n==null?null:n.gf5()
n.toString
p.aDL(n)}}if(p.r){x=A.rY(!0,o)
n=p.e
n===$&&C.a()
x.jC(n)
x.jC(p.c)
n=p.w
n.toString
p.un(n,"acTL",J.dz(D.H.gar(x.c),0,x.a))}}w=d.gtk()?1:d.gr6()
v=d.gdK()===B.cV?2:1
n=d.geb(0)
u=d.ge5(0)
t=d.ge5(0)
s=new Uint8Array(n*u*w*v+t)
p.buB(0,d,s)
r=B.Md.aIh(s,p.d)
n=d.d
if(n!=null)for(n=new C.ci(n,n.r,n.e,C.t(n).i("ci<1>"));n.t();){u=n.d
t=d.d.h(0,u)
t.toString
x=new A.aDr(!0,new Uint8Array(8192))
x.mI(D.uq.cs(u))
x.bi(0)
x.mI(D.uq.cs(t))
u=p.w
u.toString
p.un(u,"tEXt",J.dz(D.H.gar(x.c),0,x.a))}if(p.r){x=A.rY(!0,o)
x.jC(p.f)
x.jC(d.geb(0))
x.jC(d.ge5(0))
x.jC(0)
x.jC(0)
x.lB(d.y)
x.lB(1000)
x.bi(1)
x.bi(0)
n=p.w
n.toString
p.un(n,"fcTL",J.dz(D.H.gar(x.c),0,x.a));++p.f}if(p.f<=1){n=p.w
n.toString
p.un(n,"IDAT",r)}else{q=A.rY(!0,o)
q.jC(p.f)
q.mI(r)
n=p.w
n.toString
p.un(n,"fdAT",J.dz(D.H.gar(q.c),0,q.a));++p.f}},
bPs(d){var x,w=this,v=w.w
if(v==null)return null
w.un(v,"IEND",C.b([],y.t))
w.f=0
v=w.w
x=J.dz(D.H.gar(v.c),0,v.a)
w.w=null
return x},
bOm(d,e){var x,w,v,u,t,s=this,r=d.gls().length
if(r<=1){s.e=1
s.r=!1
s.oh(d)}else{r=d.gls().length
s.e=r
s.r=r>1
s.c=d.r
if(d.gtk()){x=new A.bGR(new Int32Array(256))
x.bqc(256)
x.bFW(d)
s.a=x
for(r=d.gls(),w=r.length,v=0;v<r.length;r.length===w||(0,C.K)(r),++v){u=r[v]
if(u!==d){x.awa(u)
x.at6()
x.avR()
x.arl()}}}for(r=d.gls(),w=r.length,v=0;v<r.length;r.length===w||(0,C.K)(r),++v){u=r[v]
t=s.a
if(t!=null)s.oh(t.aRJ(u))
else s.oh(u)}}r=s.bPs(0)
r.toString
return r},
aDL(d){var x,w,v,u=this
if(d.gdK()===B.ai&&d.b===3&&d.a===256){x=u.w
x.toString
u.un(x,"PLTE",J.dz(d.gar(d),0,null))}else{x=d.a
w=A.rY(!0,x*3)
for(v=0;v<x;++v){w.bi(D.e.L(d.o2(v)))
w.bi(D.e.L(d.o0(v)))
w.bi(D.e.L(d.nZ(v)))}x=u.w
x.toString
u.un(x,"PLTE",J.dz(D.H.gar(w.c),0,w.a))}if(d.b===4){x=d.a
w=A.rY(!0,x)
for(v=0;v<x;++v)w.bi(D.e.L(d.pz(v)))
x=u.w
x.toString
u.un(x,"tRNS",J.dz(D.H.gar(w.c),0,w.a))}},
un(d,e,f){d.jC(f.length)
d.mI(new C.f0(e))
d.mI(f)
d.jC(A.zH(f,A.zH(new C.f0(e),0)))},
buB(d,e,f){var x,w,v=this,u=e.gtk()?B.bzj:v.b,t=e.gar(0),s=e.a.gtJ(),r=e.gtk()?1:e.gr6(),q=D.c.W(r*e.gnx()+7,3),p=e.gnx()+7>>>3,o=u.a,n=J.dI(t),m=0,l=0,k=null,j=0
while(!0){x=e.a
x=x==null?null:x.b
if(!(j<(x==null?0:x)))break
w=n.DI(t,l,s)
l+=s
switch(o){case 1:m=v.bct(w,p,q,f,m)
break
case 2:m=v.bcw(w,k,p,f,m)
break
case 3:m=v.bcl(w,k,p,q,f,m)
break
case 4:m=v.bcq(w,k,p,q,f,m)
break
default:m=v.bco(w,p,f,m)
break}++j
k=w}},
aDF(d,e,f,g,h){var x,w,v;--d
for(x=g.$flags|0;d>=0;h=w){w=h+1
v=e[f+d]
x&2&&C.L(g)
g[h]=v;--d}return h},
bco(d,e,f,g){var x,w,v=g+1
f.$flags&2&&C.L(f)
f[g]=0
x=d.length
if(e===1)for(g=v,w=0;w<x;++w,g=v){v=g+1
f[g]=d[w]}else for(g=v,w=0;w<x;w+=e)g=this.aDF(e,d,w,f,g)
return g},
bct(d,e,f,g,h){var x,w,v,u,t,s,r=h+1
g.$flags&2&&C.L(g)
g[h]=1
for(h=r,x=0;x<f;x+=e)h=this.aDF(e,d,x,g,h)
w=d.length
for(v=e-1,x=f;x<w;x+=e)for(u=v,t=0;t<e;++t,--u,h=r){r=h+1
s=x+u
g[h]=d[s]-d[s-f]&255}return h},
bcw(d,e,f,g,h){var x,w,v,u,t,s,r,q=h+1
g.$flags&2&&C.L(g)
g[h]=2
x=d.length
for(w=f-1,v=e!=null,h=q,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,h=q){r=v?e[u+t]:0
q=h+1
g[h]=d[u+t]-r&255}return h},
bcl(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o=i+1
h.$flags&2&&C.L(h)
h[i]=3
x=d.length
for(w=f-1,v=e==null,i=o,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=o){r=u+t
q=r<g?0:d[r-g]
p=v?0:e[r]
o=i+1
h[i]=d[r]-(q+p>>>1)}return i},
btf(d,e,f){var x=d+e-f,w=x>d?x-d:d-x,v=x>e?x-e:e-x,u=x>f?x-f:f-x
if(w<=v&&w<=u)return d
else if(v<=u)return e
return f},
bcq(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m=i+1
h.$flags&2&&C.L(h)
h[i]=4
x=d.length
for(w=f-1,v=e==null,i=m,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=m){r=u+t
q=r<g
p=q?0:d[r-g]
o=v?0:e[r]
n=q||v?0:e[r-g]
m=i+1
h[i]=d[r]-this.btf(p,o,n)&255}return i}}
A.G2.prototype={
J(){return"PnmFormat."+this.b}}
A.Md.prototype={}
A.bJT.prototype={
Kh(d){var x
this.b=A.dl(d,!1,null,0)
x=this.X_()
if(x==="P1"||x==="P2"||x==="P5"||x==="P3"||x==="P6")return!0
return!1},
nC(d,e,f){if(this.pE(e)==null)return null
return this.kJ(0)},
pE(d){var x,w,v=this
v.b=A.dl(d,!1,null,0)
x=v.X_()
if(x==="P1"){w=v.a=new A.Md(B.qF)
w.e=B.acy}else if(x==="P2"){w=v.a=new A.Md(B.qF)
w.e=B.acz}else if(x==="P5"){w=v.a=new A.Md(B.qF)
w.e=B.Ia}else if(x==="P3"){w=v.a=new A.Md(B.qF)
w.e=B.acA}else if(x==="P6"){w=v.a=new A.Md(B.qF)
w.e=B.Ib}else return v.b=null
w.a=v.Oz()
w=v.a
w.toString
w.b=v.Oz()
w=v.a
if(w.a===0||w.b===0)return v.a=v.b=null
return w},
kJ(d){var x,w,v,u,t,s=this,r=null,q=s.a
if(q==null)return r
x=q.e
if(x===B.acy){x=q.a
w=A.iO(r,r,B.hJ,0,B.bD,q.b,r,0,1,r,B.ai,x,!1)
for(q=w.a,q=q.gad(q);q.t();){v=q.gM(q)
if(s.X_()==="1")v.le(1,1,1)
else v.le(0,0,0)}return w}else if(x===B.acz||x===B.Ia){u=s.Oz()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.iO(r,r,s.aJ9(u),0,B.bD,q,r,0,1,r,B.ai,x,!1)
for(q=w.a,q=q.gad(q);q.t();){v=q.gM(q)
t=s.Yy(s.a.e,u)
v.le(t,t,t)}return w}else if(x===B.acA||x===B.Ib){u=s.Oz()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.iO(r,r,s.aJ9(u),0,B.bD,q,r,0,3,r,B.ai,x,!1)
for(q=w.a,q=q.gad(q);q.t();)q.gM(q).le(s.Yy(s.a.e,u),s.Yy(s.a.e,u),s.Yy(s.a.e,u))
return w}return r},
aJ9(d){if(d>255)return B.cV
if(d>15)return B.ai
if(d>3)return B.iC
if(d>1)return B.iB
return B.hJ},
Yy(d,e){if(d===B.Ia||d===B.Ib)return this.b.cM()
return this.Oz()},
Oz(){var x,w,v=this.X_()
if(J.bn(v)===0)return 0
try{x=C.d_(v,null)
return x}catch(w){return 0}},
X_(){var x,w,v,u,t=this.b
if(t==null)return""
x=this.c
if(x.length!==0)return D.b.fH(x,0)
w=D.d.bk(t.bZK())
if(w.length===0)return""
for(;D.d.bd(w,"#");)w=D.d.bk(this.b.aNB(70))
t=y.U
v=C.A(new C.a7(C.b(w.split(" "),y.T),new A.bJU(),t),t.i("x.E"))
for(t=v.length,u=0;u<t;++u)if(D.d.bd(v[u],"#")){D.b.sA(v,u)
break}D.b.F(x,v)
if(x.length===0)return""
return D.b.fH(x,0)}}
A.aEI.prototype={}
A.aEJ.prototype={}
A.yU.prototype={}
A.aEL.prototype={}
A.aEM.prototype={}
A.aEP.prototype={}
A.aEQ.prototype={}
A.a8u.prototype={}
A.aEO.prototype={
gcI(d){return this.c}}
A.bKX.prototype={
b2P(d){var x,w,v,u,t=this
d.aw()
d.aw()
d.aw()
d.aw()
x=D.c.aL(d.c-d.d,8)
if(x>0){t.e=new Uint16Array(x)
t.f=new Uint16Array(x)
t.r=new Uint16Array(x)
t.w=new Uint16Array(x)
for(w=0;w<x;++w){v=t.e
u=d.aw()
v.$flags&2&&C.L(v)
v[w]=u
u=t.f
v=d.aw()
u.$flags&2&&C.L(u)
u[w]=v
v=t.r
u=d.aw()
v.$flags&2&&C.L(v)
v[w]=u
u=t.w
v=d.aw()
u.$flags&2&&C.L(u)
u[w]=v}}}}
A.UV.prototype={
aNA(d,e,f,g,h,i,j){if(d.c-d.d<2)return
if(h==null)h=d.aw()
switch(h){case 0:g.toString
this.bvR(d,e,f,g)
break
case 1:if(i==null)i=this.bvO(d,f)
g.toString
this.bvQ(d,e,f,g,i,j)
break
default:throw C.p(A.cp("Unsupported compression: "+h))}},
bZJ(d,e,f,g){return this.aNA(d,e,f,g,null,null,0)},
bvO(d,e){var x,w=new Uint16Array(e)
for(x=0;x<e;++x)w[x]=d.aw()
return w},
bvR(d,e,f,g){var x,w=e*f
if(g===16)w*=2
if(w>d.c-d.d){x=new Uint8Array(w)
this.c=x
D.H.mC(x,0,w,255)
return}this.c=d.jR(w).im()},
bvQ(d,e,f,g,h,i){var x,w,v,u,t,s,r=e*f
if(g===16)r*=2
x=new Uint8Array(r)
this.c=x
w=i*f
if(w>=h.length){D.H.mC(x,0,r,255)
return}for(v=0,u=0;u<f;++u,w=t){t=w+1
s=d.jY(h[w])
d.d=d.d+(s.c-s.d)
x=this.c
x.toString
this.b9l(s,x,v)
v+=e}},
b9l(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=e.$flags|0,v=e.length;u=d.d,u<x;){t=d.a
d.d=u+1
u=J.v(t,u)
t=$.oS()
t.$flags&2&&C.L(t)
t[0]=u
s=$.q1()[0]
if(s<0){s=1-s
u=d.d
if(u>=x)break
t=d.a
d.d=u+1
r=J.v(t,u)
if(f+s>v)s=v-f
for(q=0;q<s;++q,f=p){p=f+1
w&2&&C.L(e)
e[f]=r}}else{++s
if(f+s>v)s=v-f
s=Math.min(s,x-d.d)
for(q=0;q<s;++q,f=p){p=f+1
u=J.v(d.a,d.d++)
w&2&&C.L(e)
e[f]=u}}}},
gbc(d){return this.a}}
A.wA.prototype={
J(){return"PsdColorMode."+this.b}}
A.bKZ.prototype={
b2Q(d){var x,w,v=this
v.as=A.dl(d,!0,null,0)
v.bve()
if(v.c!==943870035)return
x=v.as.ai()
v.as.jR(x)
x=v.as.ai()
v.at=v.as.jR(x)
x=v.as.ai()
v.ax=v.as.jR(x)
w=v.as
v.ay=w.jR(w.c-w.d)},
p9(d){var x,w=this
if(w.c===943870035){x=w.as
x===$&&C.a()
x=x==null}else x=!0
if(x)return!1
w.bvM()
w.bvN()
w.bvP()
w.ay=w.ax=w.at=w.as=null
return!0},
aHy(){if(!this.p9(0))return null
return this.c_k()},
c_k(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.y
if(d!=null)return d
d=f.a
d=A.iO(e,e,B.ai,0,B.bD,f.b,e,0,4,e,B.ai,d,!1)
f.y=d
d.V(0)
x=0
while(!0){d=f.w
d===$&&C.a()
if(!(x<d.length))break
c$0:{w=d[x]
d=w.y
d===$&&C.a()
if((d&2)!==0)break c$0
d=w.w
d===$&&C.a()
v=d/255
u=w.r
t=w.cx
d=w.a
d.toString
s=d
r=0
while(!0){d=w.f
d===$&&C.a()
if(!(r<d))break
d=w.a
d.toString
q=d+r
p=w.b
d=s>=0
o=0
while(!0){n=w.e
n===$&&C.a()
if(!(o<n))break
n=t.a
m=n==null?e:n.eu(o,r,e)
if(m==null)m=new A.h5()
l=D.e.L(m.gau(m))
k=D.e.L(m.gaF())
j=D.e.L(m.gaH(m))
i=D.e.L(m.gaV(m))
p.toString
if(p>=0&&p<f.a&&d&&s<f.b){n=w.b
n.toString
h=f.y.a
g=h==null?e:h.eu(n+o,q,e)
if(g==null)g=new A.h5()
f.b4O(D.e.L(g.gau(g)),D.e.L(g.gaF()),D.e.L(g.gaH(g)),D.e.L(g.gaV(g)),l,k,j,i,u,v,g)}++o;++p}++r;++s}}++x}d=f.y
d.toString
return d},
b4O(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s=k/255*m
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
case 1836411936:u=D.c.W(d*h,8)
v=D.c.W(e*i,8)
w=D.c.W(f*j,8)
x=k
break
case 1768188278:u=A.bL_(d,h)
v=A.bL_(e,i)
w=A.bL_(f,j)
x=k
break
case 1818391150:u=A.bL1(d,h)
v=A.bL1(e,i)
w=A.bL1(f,j)
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
case 1935897198:u=A.d_D(d,h)
v=A.d_D(e,i)
w=A.d_D(f,j)
x=k
break
case 1684633120:u=A.bL0(d,h)
v=A.bL0(e,i)
w=A.bL0(f,j)
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
case 1870030194:u=A.d_B(d,h,g,k)
v=A.d_B(e,i,g,k)
w=A.d_B(f,j,g,k)
x=k
break
case 1934387572:u=A.d_E(d,h)
v=A.d_E(e,i)
w=A.d_E(f,j)
x=k
break
case 1749838196:u=A.d_z(d,h)
v=A.d_z(e,i)
w=A.d_z(f,j)
x=k
break
case 1984719220:u=A.d_F(d,h)
v=A.d_F(e,i)
w=A.d_F(f,j)
x=k
break
case 1816947060:u=A.d_A(d,h)
v=A.d_A(e,i)
w=A.d_A(f,j)
x=k
break
case 1884055924:u=A.d_C(d,h)
v=A.d_C(e,i)
w=A.d_C(f,j)
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
case 1936553316:u=A.d_y(d,h)
v=A.d_y(e,i)
w=A.d_y(f,j)
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
n.sau(0,D.e.L(d*t+u*s))
n.saF(D.e.L(e*t+v*s))
n.saH(0,D.e.L(f*t+w*s))
n.saV(0,D.e.L(g*t+x*s))},
bve(){var x,w,v=this,u=v.as
u===$&&C.a()
v.c=u.ai()
u=v.as.aw()
v.d=u
if(u!==1){v.c=0
return}x=v.as.jR(6)
for(w=0;w<6;++w)if(J.v(x.a,x.d+w)!==0){v.c=0
return}v.e=v.as.aw()
v.b=v.as.ai()
v.a=v.as.ai()
v.f=v.as.aw()
v.r=B.aSt[v.as.aw()]},
bvM(){var x,w,v,u,t,s,r=this,q=r.at
q.d=q.b
for(q=r.z;x=r.at,x.d<x.c;){w=x.ai()
v=r.at.aw()
x=r.at
u=J.v(x.a,x.d++)
t=r.at.jS(u)
if((u&1)===0)++r.at.d
u=r.at.ai()
x=r.at
s=x.jY(u)
x.d=x.d+(s.c-s.d)
if((u&1)===1)++r.at.d
if(w===943868237)q.m(0,v,new A.aEK(v,t))}},
bvN(){var x,w,v,u,t,s,r,q,p,o=this,n=o.ax
n.d=n.b
x=n.ai()
if((x&1)!==0)++x
w=o.ax.jR(x)
n=y.l
o.w=C.b([],n)
if(x>0){v=w.aw()
u=$.oR()
u.$flags&2&&C.L(u)
u[0]=v
t=$.q0()[0]
if(t<0)t=-t
for(v=y.N,u=y.O,s=y.u,r=0;r<t;++r){q=new A.aEN(C.H(v,u),C.b([],n),C.b([],s))
q.b2R(w)
o.w.push(q)}}for(r=0;n=o.w,r<n.length;++r)n[r].bZC(w,o)
x=o.ax.ai()
p=o.ax.jR(x)
if(x>0){p.aw()
p.aw()
p.aw()
p.aw()
p.aw()
p.aw()
p.cM()}},
bvP(){var x,w,v,u,t,s,r=this,q=r.ay
q.d=q.b
x=q.aw()
if(x===1){q=r.b
w=r.e
w===$&&C.a()
v=q*w
u=new Uint16Array(v)
for(t=0;t<v;++t)u[t]=r.ay.aw()}else u=null
r.x=C.b([],y.X)
t=0
while(!0){q=r.e
q===$&&C.a()
if(!(t<q))break
q=r.x
w=r.ay
w.toString
s=t===3?-1:t
s=new A.UV(s)
s.aNA(w,r.a,r.b,r.f,x,u,t)
q.push(s);++t}r.y=A.dbM(r.r,r.f,r.a,r.b,r.x)}}
A.aEK.prototype={
gbc(d){return this.a}}
A.aEN.prototype={
b2R(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=a1.ai(),a0=$.iu()
a0.$flags&2&&C.L(a0)
a0[0]=d
d=$.m0()
e.a=d[0]
a0[0]=a1.ai()
e.b=d[0]
a0[0]=a1.ai()
e.c=d[0]
a0[0]=a1.ai()
d=d[0]
e.d=d
a0=e.b
a0.toString
e.e=d-a0
a0=e.c
d=e.a
d.toString
e.f=a0-d
e.as=C.b([],y.X)
x=a1.aw()
for(w=0;w<x;++w){d=a1.aw()
a0=$.oR()
a0.$flags&2&&C.L(a0)
a0[0]=d
v=$.q0()[0]
a1.ai()
e.as.push(new A.UV(v))}u=a1.ai()
if(u!==943868237)throw C.p(A.cp("Invalid PSD layer signature: "+D.c.jV(u,16)))
e.r=a1.ai()
e.w=a1.cM()
a1.cM()
e.y=a1.cM()
if(a1.cM()!==0)throw C.p(A.cp("Invalid PSD layer data"))
t=a1.ai()
s=a1.jR(t)
if(t>0){t=s.ai()
if(t>0){r=s.jR(t)
d=r.d
r.ai()
r.ai()
r.ai()
r.ai()
r.cM()
r.cM()
if(r.c-d===20)r.d+=2
else{r.cM()
r.cM()
r.ai()
r.ai()
r.ai()
r.ai()}}t=s.ai()
if(t>0)new A.bKX().b2P(s.jR(t))
t=s.cM()
e.Q=s.jS(t)
q=4-D.c.av(t,4)-1
if(q>0)s.d+=q
for(d=s.c,a0=e.ay,p=e.cy,o=y.cK;s.d<d;){u=s.ai()
if(u!==943868237)throw C.p(A.cp("PSD invalid signature for layer additional data: "+D.c.jV(u,16)))
n=s.jS(4)
t=s.ai()
m=s.jY(t)
l=s.d+(m.c-m.d)
s.d=l
if((t&1)===1)s.d=l+1
a0.m(0,n,A.dBn(n,m))
if(n==="lrFX"){k=A.cu(o.a(a0.h(0,"lrFX")).b,null,0)
k.aw()
j=k.aw()
for(i=0;i<j;++i){k.jS(4)
h=k.jS(4)
g=k.ai()
if(h==="dsdw"){f=new A.aEJ()
p.push(f)
f.a=k.ai()
k.ai()
k.ai()
k.ai()
k.ai()
k.aw()
k.aw()
k.aw()
k.aw()
k.aw()
k.jS(8)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
J.v(k.a,k.d++)
k.aw()
k.aw()
k.aw()
k.aw()
k.aw()}else if(h==="isdw"){f=new A.aEM()
p.push(f)
f.a=k.ai()
k.ai()
k.ai()
k.ai()
k.ai()
k.aw()
k.aw()
k.aw()
k.aw()
k.aw()
k.jS(8)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
J.v(k.a,k.d++)
k.aw()
k.aw()
k.aw()
k.aw()
k.aw()}else if(h==="oglw"){f=new A.aEP()
p.push(f)
f.a=k.ai()
k.ai()
k.ai()
k.aw()
k.aw()
k.aw()
k.aw()
k.aw()
k.jS(8)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
if(f.a===2){k.aw()
k.aw()
k.aw()
k.aw()
k.aw()}}else if(h==="iglw"){f=new A.aEL()
p.push(f)
f.a=k.ai()
k.ai()
k.ai()
k.aw()
k.aw()
k.aw()
k.aw()
k.aw()
k.jS(8)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
if(f.a===2){J.v(k.a,k.d++)
k.aw()
k.aw()
k.aw()
k.aw()
k.aw()}}else if(h==="bevl"){f=new A.aEI()
p.push(f)
f.a=k.ai()
k.ai()
k.ai()
k.ai()
k.jS(8)
k.jS(8)
k.aw()
k.aw()
k.aw()
k.aw()
k.aw()
k.aw()
k.aw()
k.aw()
k.aw()
k.aw()
J.v(k.a,k.d++)
J.v(k.a,k.d++)
J.v(k.a,k.d++)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
J.v(k.a,k.d++)
if(f.a===2){k.aw()
k.aw()
k.aw()
k.aw()
k.aw()
k.aw()
k.aw()
k.aw()
k.aw()
k.aw()}}else if(h==="sofi"){f=new A.aEQ()
p.push(f)
f.a=k.ai()
k.jS(4)
k.aw()
k.aw()
k.aw()
k.aw()
k.aw()
J.v(k.a,k.d++)
f.b=J.v(k.a,k.d++)!==0
k.aw()
k.aw()
k.aw()
k.aw()
k.aw()}else k.d+=g}}}}},
bZC(d,e){var x,w,v,u,t,s=this,r=0
while(!0){x=s.as
x===$&&C.a()
if(!(r<x.length))break
x=x[r]
w=s.e
w===$&&C.a()
v=s.f
v===$&&C.a()
x.bZJ(d,w,v,e.f);++r}w=e.r
v=e.f
u=s.e
u===$&&C.a()
t=s.f
t===$&&C.a()
s.cx=A.dbM(w,v,u,t,x)}}
A.UW.prototype={}
A.bKY.prototype={
nC(d,e,f){var x,w,v,u=null,t=A.dbL(e)
this.a=t
x=1
if(x===1){t=t.aHy()
return t}for(w=u,v=0;v<x;++v){t=this.a
f=t==null?u:t.aHy()
if(f==null)continue
if(w==null){f.w=B.ayY
w=f}else w.oh(f)}return w}}
A.aET.prototype={}
A.BI.prototype={
aS(d,e){return new A.BI(this.a*e,this.b*e,this.c*e)},
a8(d,e){return new A.BI(this.a+e.a,this.b+e.b,this.c+e.c)},
aa(d,e){return new A.BI(this.a-e.a,this.b-e.b,this.c-e.c)}}
A.nA.prototype={
aS(d,e){var x=this
return new A.nA(x.a*e,x.b*e,x.c*e,x.d*e)},
a8(d,e){var x=this
return new A.nA(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
aa(d,e){var x=this
return new A.nA(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)}}
A.a8x.prototype={
ge5(d){return this.b}}
A.UZ.prototype={
ge5(d){return this.f}}
A.aES.prototype={
ge5(d){return this.b}}
A.uz.prototype={
sQ4(d){var x=this.a,w=this.b
x.$flags&2&&C.L(x)
x[w+1]=d},
TI(){var x=this.e,w=this.d
if(x)return new A.BI(B.hX[w>>>9],B.hX[w>>>4&31],B.fR[w&15])
else return new A.BI(B.fR[w>>>7&15],B.fR[w>>>3&15],B.z1[w&7])},
TK(){var x=this.e,w=this.d
if(x)return new A.nA(B.hX[w>>>9],B.hX[w>>>4&31],B.fR[w&15],255)
else return new A.nA(B.fR[w>>>7&15],B.fR[w>>>3&15],B.z1[w&7],B.z1[w>>>11&7])},
TJ(){var x=this.r,w=this.f
if(x)return new A.BI(B.hX[w>>>10],B.hX[w>>>5&31],B.hX[w&31])
else return new A.BI(B.fR[w>>>8&15],B.fR[w>>>4&15],B.fR[w&15])},
TL(){var x=this.r,w=this.f
if(x)return new A.nA(B.hX[w>>>10],B.hX[w>>>5&31],B.hX[w&31],255)
else return new A.nA(B.fR[w>>>8&15],B.fR[w>>>4&15],B.fR[w&15],B.z1[w>>>12&7])},
NC(){var x=this,w=x.c?1:0,v=x.d,u=x.e?1:0,t=x.f,s=x.r?1:0
return(w|(v&16383)<<1|u<<15|(t&32767)<<16|s<<31)>>>0},
vE(d){var x=this,w=x.a[x.b+1]
x.c=(w&1)===1
x.sQ4(x.NC())
x.d=w>>>1&16383
x.sQ4(x.NC())
x.e=(w>>>15&1)===1
x.sQ4(x.NC())
x.f=w>>>16&32767
x.sQ4(x.NC())
x.r=(w>>>31&1)===1
x.sQ4(x.NC())}}
A.bL2.prototype={
pE(d){var x,w=this,v=d.length,u=v-(v>>>1&1431655765)>>>0
u=(u&858993459)+(u>>>2&858993459)
if((u+(u>>>4)>>>0&252645135)*16843009>>>0>>>24===1){x=w.b94(d)
if(x!=null){w.a=d
return w.b=x}}x=w.b9k(d)
if(x!=null){w.a=d
return w.b=x}x=w.b9i(d)
if(x!=null){w.a=d
return w.b=x}return null},
b9k(d){var x,w,v=A.dl(d,!1,null,0)
if(v.ai()!==52)return null
if(v.ai()!==55727696)return null
x=C.b([0,0,0,0],y.t)
w=new A.UZ(x)
v.ai()
w.b=v.ai()
x[0]=v.cM()
x[1]=v.cM()
x[2]=v.cM()
x[3]=v.cM()
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
b9i(d){var x,w,v=A.dl(d,!1,null,0)
if(v.ai()!==52)return null
x=new A.a8x()
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
b94(d){var x,w,v,u,t,s,r=null,q=d.length,p=A.dl(d,!1,r,0)
if(p.ai()!==0)return r
x=new A.aES()
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
if((D.c.eA(64,s)&q)>>>0!==0){u=D.c.eA(16,t)
v=1
break}if((D.c.eA(128,s)&q)>>>0!==0){u=D.c.eA(16,t)
break}++t}if(t===10)return r}if((v+1)*2===4)return r
x.b=x.a=u
return x},
kJ(d){var x,w,v=this,u=v.b
if(u==null||v.a==null)return null
if(u instanceof A.aES){u=u.a
x=v.b
x=x.ge5(x)
w=v.a
w.toString
return v.a8m(u,x,w)}else if(u instanceof A.a8x){u=v.a
u.toString
return v.b9h(u)}else if(u instanceof A.UZ){u=v.a
u.toString
return v.b9j(u)}return null},
nC(d,e,f){if(this.pE(e)==null)return null
return this.kJ(0)},
b9h(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.length
if(j<52||l.b==null)return k
x=l.b
x.toString
y.ab.a(x)
w=A.dl(d,!1,k,0)
w.d+=52
v=x.Q
if(v<1)v=(x.d&4096)!==0?6:1
if(v!==1)return k
u=x.a
t=x.b
if(u*t*x.f/8>j-52)return k
switch(x.d&255){case 16:s=A.iO(k,k,B.ai,0,B.bD,t,k,0,4,k,B.ai,u,!1)
for(x=s.a,x=x.gad(x);x.t();){r=x.gM(x)
q=J.v(w.a,w.d++)
p=J.v(w.a,w.d++)
r.sau(0,p&240)
r.saF((p&15)<<4)
r.saH(0,q&240)
r.saV(0,(q&15)<<4)}return s
case 17:s=A.iO(k,k,B.ai,0,B.bD,t,k,0,4,k,B.ai,u,!1)
for(x=s.a,x=x.gad(x);x.t();){r=x.gM(x)
o=w.aw()
n=(o&1)!==0?255:0
r.sau(0,o>>>8&248)
r.saF(o>>>3&248)
r.saH(0,(o&62)<<2)
r.saV(0,n)}return s
case 18:s=A.iO(k,k,B.ai,0,B.bD,t,k,0,4,k,B.ai,u,!1)
for(x=s.a,x=x.gad(x);x.t();){r=x.gM(x)
r.sau(0,J.v(w.a,w.d++))
r.saF(J.v(w.a,w.d++))
r.saH(0,J.v(w.a,w.d++))
r.saV(0,J.v(w.a,w.d++))}return s
case 19:s=A.iO(k,k,B.ai,0,B.bD,t,k,0,3,k,B.ai,u,!1)
for(x=s.a,x=x.gad(x);x.t();){r=x.gM(x)
o=w.aw()
r.sau(0,o>>>8&248)
r.saF(o>>>3&252)
r.saH(0,(o&31)<<3)}return s
case 20:s=A.iO(k,k,B.ai,0,B.bD,t,k,0,3,k,B.ai,u,!1)
for(x=s.a,x=x.gad(x);x.t();){r=x.gM(x)
o=w.aw()
r.sau(0,(o&31)<<3)
r.saF(o>>>2&248)
r.saH(0,o>>>7&248)}return s
case 21:s=A.iO(k,k,B.ai,0,B.bD,t,k,0,3,k,B.ai,u,!1)
for(x=s.a,x=x.gad(x);x.t();){r=x.gM(x)
r.sau(0,J.v(w.a,w.d++))
r.saF(J.v(w.a,w.d++))
r.saH(0,J.v(w.a,w.d++))}return s
case 22:s=A.iO(k,k,B.ai,0,B.bD,t,k,0,1,k,B.ai,u,!1)
for(x=s.a,x=x.gad(x);x.t();)x.gM(x).sau(0,J.v(w.a,w.d++))
return s
case 23:s=A.iO(k,k,B.ai,0,B.bD,t,k,0,4,k,B.ai,u,!1)
for(x=s.a,x=x.gad(x);x.t();){r=x.gM(x)
n=J.v(w.a,w.d++)
m=J.v(w.a,w.d++)
r.sau(0,m)
r.saF(m)
r.saH(0,m)
r.saV(0,n)}return s
case 24:return k
case 25:return x.y===0?l.arH(u,t,w.im()):l.a8m(u,t,w.im())}return k},
b9j(d){var x,w,v,u=this
if(!(u.b instanceof A.UZ))return null
x=A.dl(d,!1,null,0)
w=x.d+=52
v=y.aM.a(u.b)
x.d=w+v.Q
if(v.c[0]===0)switch(v.b){case 2:return u.arH(v.r,v.f,x.im())
case 3:return u.a8m(v.r,v.f,x.im())}return null},
arH(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=A.iO(b5,b5,B.ai,0,B.bD,c6,b5,0,3,b5,B.ai,c5,!1),b7=c5/4|0,b8=b7-1,b9=J.q2(D.H.gar(c7),0,null),c0=new A.uz(b9),c1=new A.uz(J.q2(D.H.gar(c7),0,null)),c2=new A.uz(J.q2(D.H.gar(c7),0,null)),c3=new A.uz(J.q2(D.H.gar(c7),0,null)),c4=new A.uz(J.q2(D.H.gar(c7),0,null))
for(x=0,w=0;x<b7;++x,w+=4)for(v=0,u=0;v<b7;++v,u+=4){c0.b=A.BJ(v,x)<<1>>>0
c0.vE(0)
t=b9[c0.b]
s=c0.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&b8)>>>0
o=(p+1&b8)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&b8)>>>0
k=(l+1&b8)>>>0
c1.b=A.BJ(l,p)<<1>>>0
c1.vE(0)
c2.b=A.BJ(k,p)<<1>>>0
c2.vE(0)
c3.b=A.BJ(l,o)<<1>>>0
c3.vE(0)
c4.b=A.BJ(k,o)<<1>>>0
c4.vE(0)
j=c1.TI()
i=B.e2[r][0]
h=c2.TI()
g=B.e2[r][1]
f=c3.TI()
e=B.e2[r][2]
d=c4.TI()
a0=B.e2[r][3]
a1=c1.TJ()
a2=B.e2[r][0]
a3=c2.TJ()
a4=B.e2[r][1]
a5=c3.TJ()
a6=B.e2[r][2]
a7=c4.TJ()
a8=B.e2[r][3]
a9=B.VD[s+t&3]
b0=a9[0]
b1=a9[1]
b2=D.c.W((j.a*i+h.a*g+f.a*e+d.a*a0)*b0+(a1.a*a2+a3.a*a4+a5.a*a6+a7.a*a8)*b1,7)
b3=D.c.W((j.b*i+h.b*g+f.b*e+d.b*a0)*b0+(a1.b*a2+a3.b*a4+a5.b*a6+a7.b*a8)*b1,7)
b4=D.c.W((j.c*i+h.c*g+f.c*e+d.c*a0)*b0+(a1.c*a2+a3.c*a4+a5.c*a6+a7.c*a8)*b1,7)
b1=b6.a
if(b1!=null)b1.fJ(m+u,n,b2,b3,b4)
t=t>>>2;++r}}}return b6},
a8m(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=A.iO(a4,a4,B.ai,0,B.bD,b5,a4,0,4,a4,B.ai,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.q2(D.H.gar(b6),0,null),a9=new A.uz(a8),b0=new A.uz(J.q2(D.H.gar(b6),0,null)),b1=new A.uz(J.q2(D.H.gar(b6),0,null)),b2=new A.uz(J.q2(D.H.gar(b6),0,null)),b3=new A.uz(J.q2(D.H.gar(b6),0,null))
for(x=0,w=0;x<a6;++x,w+=4)for(v=0,u=0;v<a6;++v,u+=4){a9.b=A.BJ(v,x)<<1>>>0
a9.vE(0)
t=a8[a9.b]
s=a9.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&a7)>>>0
o=(p+1&a7)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&a7)>>>0
k=(l+1&a7)>>>0
b0.b=A.BJ(l,p)<<1>>>0
b0.vE(0)
b1.b=A.BJ(k,p)<<1>>>0
b1.vE(0)
b2.b=A.BJ(l,o)<<1>>>0
b2.vE(0)
b3.b=A.BJ(k,o)<<1>>>0
b3.vE(0)
j=b0.TK()
i=B.e2[r][0]
h=b1.TK()
g=B.e2[r][1]
g=new A.nA(j.a*i,j.b*i,j.c*i,j.d*i).a8(0,new A.nA(h.a*g,h.b*g,h.c*g,h.d*g))
h=b2.TK()
i=B.e2[r][2]
i=g.a8(0,new A.nA(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.TK()
g=B.e2[r][3]
f=i.a8(0,new A.nA(h.a*g,h.b*g,h.c*g,h.d*g))
g=b0.TL()
h=B.e2[r][0]
i=b1.TL()
j=B.e2[r][1]
j=new A.nA(g.a*h,g.b*h,g.c*h,g.d*h).a8(0,new A.nA(i.a*j,i.b*j,i.c*j,i.d*j))
i=b2.TL()
h=B.e2[r][2]
h=j.a8(0,new A.nA(i.a*h,i.b*h,i.c*h,i.d*h))
i=b3.TL()
j=B.e2[r][3]
e=h.a8(0,new A.nA(i.a*j,i.b*j,i.c*j,i.d*j))
d=B.VD[s+t&3]
j=d[0]
i=d[1]
a0=D.c.W(f.a*j+e.a*i,7)
a1=D.c.W(f.b*j+e.b*i,7)
a2=D.c.W(f.c*j+e.c*i,7)
a3=D.c.W(f.d*d[2]+e.d*d[3],7)
i=a5.a
if(i!=null)i.kY(m+u,n,a0,a1,a2,a3)
t=t>>>2;++r}}}return a5}}
A.aJr.prototype={
oH(d,e){var x,w=this
if(e.c-e.d<18)return
w.a=e.cM()
w.b=e.cM()
x=e.cM()
w.c=x<12?B.aMw[x]:B.B2
e.aw()
w.e=e.aw()
w.f=e.cM()
e.aw()
e.aw()
w.x=e.aw()
w.y=e.aw()
w.z=e.cM()
w.Q=e.cM()},
aL8(){var x=this,w=x.z
if(w!==8&&w!==16&&w!==24&&w!==32)return!1
w=x.c
if(w===B.kw||w===B.kx){if(x.e>256||x.b!==1)return!1
w=x.f
if(w!==16&&w!==24&&w!==32)return!1}else if(x.b===1)return!1
return!0}}
A.pH.prototype={
J(){return"TgaImageType."+this.b}}
A.bYq.prototype={
nC(d,e,f){if(this.pE(e)==null)return null
return this.kJ(0)},
pE(d){var x,w,v,u,t=this
t.a=new A.aJr(B.B2)
x=A.dl(d,!1,null,0)
t.b=x
w=x.jR(18)
t.a.oH(0,w)
x=t.a
if(!x.aL8())return null
v=t.b
v.d+=x.a
u=x.c
if(u===B.kw||u===B.kx)x.as=v.jR(x.e*D.c.W(x.f,3)).im()
x=t.a
x.ax=t.b.d
return x},
kJ(d){var x=this,w=x.a
if(w==null)return null
w=w.c
if(w===B.afE)return x.arG()
else if(w===B.afD||w===B.kx)return x.b9n()
else if(w===B.kw)return x.arG()
return null},
arB(d,e){var x,w,v,u,t,s,r,q=this,p=A.dl(d,!1,null,0),o=q.a.f
if(o===16){o=q.b
o===$&&C.a()
x=o.aw()
w=x>>>7&248
v=x>>>2&248
u=(x&31)<<3
t=(x&32768)!==0?0:255
for(s=0;s<q.a.e;++s){e.vo(s,w)
e.vm(s,v)
e.vl(s,u)
e.vk(s,t)}}else{r=o===32
for(s=0;s<q.a.e;++s){u=J.v(p.a,p.d++)
v=J.v(p.a,p.d++)
w=J.v(p.a,p.d++)
t=r?J.v(p.a,p.d++):255
e.vo(s,w)
e.vm(s,v)
e.vl(s,u)
e.vk(s,t)}}},
b9n(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=h.z,f=g===16,e=f||g===32,d=h.x,a0=h.y,a1=e?4:3
h=h.c
x=A.iO(i,i,B.ai,0,B.bD,a0,i,0,a1,i,B.ai,d,h===B.kw||h===B.kx)
h=x.a
if((h==null?i:h.gf5())!=null){h=j.a.as
h.toString
d=x.a
d=d==null?i:d.gf5()
d.toString
j.arB(h,d)}w=x.geb(0)
v=x.ge5(0)-1
h=g===8
u=0
while(!0){d=j.b
d===$&&C.a()
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
if(d!=null)d.nj(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}else{d=j.b
if(f){n=d.aw()
q=n>>>7&248
m=n>>>2&248
l=(n&31)<<3
k=(n&32768)!==0?0:255
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.kY(u,v,q,m,l,k)
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
if(d!=null)d.kY(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}}else if(h)for(p=0;p<s;++p){d=j.b
q=J.v(d.a,d.d++)
o=u+1
d=x.a
if(d!=null)d.nj(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}else if(f)for(p=0;p<s;++p){n=j.b.aw()
k=(n&32768)!==0?0:255
o=u+1
d=x.a
if(d!=null)d.kY(u,v,n>>>7&248,n>>>2&248,(n&31)<<3,k)
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
if(d!=null)d.kY(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}if(u>=w){--v
if(v<0)break
u=0}}return x},
arG(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
g===$&&C.a()
x=i.a
g.d=x.ax
w=x.z
g=w===16
v=!0
if(!g)if(w!==32){u=x.c
if(u===B.kw||u===B.kx){u=x.f
u=u===16||u===32}else u=!1
v=u}u=x.x
t=x.y
s=v?4:3
x=x.c
r=A.iO(h,h,B.ai,0,B.bD,t,h,0,s,h,B.ai,u,x===B.kw||x===B.kx)
x=i.a
u=x.c
if(u===B.kw||u===B.kx){x=x.as
x.toString
u=r.a
u=u==null?h:u.gf5()
u.toString
i.arB(x,u)}if(w===8)for(q=r.ge5(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
g=i.b
o=J.v(g.a,g.d++)
g=r.a
if(g!=null)g.nj(p,q,o);++p}}else if(g)for(q=r.ge5(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
n=i.b.aw()
m=(n&32768)!==0?0:255
g=r.a
if(g!=null)g.kY(p,q,n>>>7&248,n>>>2&248,(n&31)<<3,m);++p}}else for(q=r.ge5(0)-1;q>=0;--q){p=0
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
if(g!=null)g.kY(p,q,j,k,l,m);++p}}return r}}
A.bZy.prototype={
jQ(d){var x,w,v,u,t=this
if(d===0)return 0
if(t.c===0){t.c=8
t.b=t.a.cM()}for(x=t.a,w=0;v=t.c,d>v;){w=D.c.f7(w,v)+(t.b&B.pW[v])
d-=v
t.c=8
t.b=J.v(x.a,x.d++)}if(d>0){if(v===0){t.c=8
t.b=x.cM()}x=D.c.f7(w,d)
v=t.b
u=t.c-d
w=x+(D.c.oR(v,u)&B.pW[d])
t.c=u}return w}}
A.aJw.prototype={
j(d){var x=this,w=x.a,v=$.cXb().h(0,w)
if(v!=null)return v.a+": "+x.b.j(0)+" "+x.c
return"<"+w+">: "+x.b.j(0)+" "+x.c},
q7(d){var x,w,v,u=this,t=u.e
if(t!=null)return t
t=u.f
t.d=u.d
x=u.c
w=u.b
v=t.jR(x*(w!==B.a8?B.lk[w.a]:0))
switch(w.a){case 1:return u.e=new A.w6(new Uint8Array(C.ca(v.jR(x).im())))
case 2:return u.e=new A.ER(x===0?"":v.jS(x-1))
case 7:return u.e=new A.w6(new Uint8Array(C.ca(v.jR(x).im())))
case 3:return u.e=A.d9a(v,x)
case 4:return u.e=A.d95(v,x)
case 5:return u.e=A.d96(v,x)
case 11:return u.e=A.d9c(v,x)
case 12:return u.e=A.d94(v,x)
case 6:return u.e=new A.ys(new Int8Array(C.ca(J.cXj(D.H.gar(v.im()),0,x))))
case 8:return u.e=A.d99(v,x)
case 9:return u.e=A.d97(v,x)
case 10:return u.e=A.d98(v,x)
case 0:return null}},
gn(d){return this.e}}
A.bZA.prototype={
bMh(d,e,f,g){var x,w,v,u=this
u.r=e
u.x=u.w=0
x=D.c.aL(u.a+7,8)
for(w=0,v=0;v<g;++v){u.a8k(d,w,f)
w+=x}},
a8k(d,e,f){var x,w,v,u,t,s,r,q,p=this
p.d=0
for(x=p.a,w=!0;f<x;){for(;w;){v=p.A_(10)
u=B.W5[v]
t=D.c.W(u,1)&15
if(t===12){u=B.xB[(v<<2&12|p.pL(2))>>>0]
s=D.c.W(u,1)
f+=D.c.W(u,4)&4095
p.m3(4-(s&7))}else if(t===0)throw C.p(A.cp("TIFFFaxDecoder0"))
else if(t===15)throw C.p(A.cp("TIFFFaxDecoder1"))
else{f+=D.c.W(u,5)&2047
p.m3(10-t)
if((u&1)===0){p.f[p.d++]=f
w=!1}}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}for(;!w;){u=B.Rb[p.pL(4)]
r=u>>>5&2047
q=!0
if(r===100){u=B.SI[p.A_(9)]
t=D.c.W(u,1)&15
r=D.c.W(u,5)&2047
if(t===12){p.m3(5)
u=B.xB[p.pL(4)]
s=D.c.W(u,1)
r=D.c.W(u,4)&4095
p.qx(d,e,f,r)
f+=r
p.m3(4-(s&7))}else if(t===15)throw C.p(A.cp("TIFFFaxDecoder2"))
else{p.qx(d,e,f,r)
f+=r
p.m3(9-t)
if((u&1)===0){p.f[p.d++]=f
w=q}}}else{if(r===200){u=B.R6[p.pL(2)]
r=u>>>5&2047
p.qx(d,e,f,r)
f+=r
p.m3(2-(u>>>1&15))
p.f[p.d++]=f}else{p.qx(d,e,f,r)
f+=r
p.m3(4-(u>>>1&15))
p.f[p.d++]=f}w=q}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}}p.f[p.d++]=f},
bMi(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.r=a0
e.z=3
e.x=e.w=0
x=e.a
w=D.c.aL(x+7,8)
v=C.c5(2,null,!1,y.s)
e.at=a3&1
e.as=a3>>>2&1
if(e.ayy()!==1)throw C.p(A.cp("TIFFFaxDecoder3"))
e.a8k(d,0,a1)
for(u=w,t=1;t<a2;++t){if(e.ayy()===0){s=e.e
e.e=e.f
e.f=s
e.y=0
r=a1
q=-1
p=!0
o=0
while(!0){r.toString
if(!(r<x))break
e.atY(q,p,v)
n=v[0]
m=v[1]
l=B.VM[e.pL(7)]&255
k=l>>>3&15
j=l&7
if(k===0){if(!p){m.toString
e.qx(d,u,r,m-r)}e.m3(7-j)
r=m
q=r}else if(k===1){e.m3(7-j)
i=o+1
h=i+1
if(p){r+=e.Wa()
e.f[o]=r
g=e.W9()
e.qx(d,u,r,g)
r+=g
e.f[i]=r}else{g=e.W9()
e.qx(d,u,r,g)
r+=g
e.f[o]=r
r+=e.Wa()
e.f[i]=r}o=h
q=r}else{if(k<=8){n.toString
f=n+(k-5)
i=o+1
e.f[o]=f
p=!p
if(p)e.qx(d,u,r,f-r)
e.m3(7-j)}else throw C.p(A.cp("TIFFFaxDecoder4"))
r=f
o=i
q=r}}e.f[o]=r
e.d=o+1}else e.a8k(d,u,a1)
u+=w}},
bMo(a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.r=a4
a2.z=4
a2.x=a2.w=0
x=a2.a
w=D.c.aL(x+7,8)
v=C.c5(2,null,!1,y.s)
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
a2.atY(p,o,v)
m=v[0]
l=v[1]
k=B.VM[a2.pL(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
a2.qx(a3,t,q,l-q)}a2.m3(7-i)
q=l
p=q}else if(j===1){a2.m3(7-i)
h=n+1
g=h+1
if(o){q+=a2.Wa()
r[n]=q
f=a2.W9()
a2.qx(a3,t,q,f)
q+=f
r[h]=q}else{f=a2.W9()
a2.qx(a3,t,q,f)
q+=f
r[n]=q
q+=a2.Wa()
r[h]=q}n=g
p=q}else if(j<=8){m.toString
e=m+(j-5)
h=n+1
r[n]=e
o=!o
if(o)a2.qx(a3,t,q,e-q)
a2.m3(7-i)
q=e
n=h
p=q}else if(j===11){if(a2.pL(3)!==7)throw C.p(A.cp("TIFFFaxDecoder5"))
for(d=0,a0=!1;!a0;o=a1){for(;a2.pL(1)!==1;)++d
if(d>5){d-=6
if(!o&&d>0){h=n+1
r[n]=q
n=h}q+=d
if(d>0)o=!0
a1=a2.pL(1)===0
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
a2.qx(a3,t,q,1);++q
n=h}}}else throw C.p(A.cp("TIFFFaxDecoder5 "+j))}r[n]=q
a2.d=n+1
t+=w}},
Wa(){var x,w,v,u,t,s,r=this
for(x=0,w=!0;w;){v=r.A_(10)
u=B.W5[v]
t=D.c.W(u,1)&15
if(t===12){u=B.xB[(v<<2&12|r.pL(2))>>>0]
s=D.c.W(u,1)
x+=D.c.W(u,4)&4095
r.m3(4-(s&7))}else if(t===0)throw C.p(A.cp("TIFFFaxDecoder0"))
else if(t===15)throw C.p(A.cp("TIFFFaxDecoder1"))
else{x+=D.c.W(u,5)&2047
r.m3(10-t)
if((u&1)===0)w=!1}}return x},
W9(){var x,w,v,u,t,s,r=this
for(x=0,w=!1;!w;){v=B.Rb[r.pL(4)]
u=v>>>5&2047
if(u===100){v=B.SI[r.A_(9)]
t=D.c.W(v,1)&15
s=D.c.W(v,5)
if(t===12){r.m3(5)
v=B.xB[r.pL(4)]
s=D.c.W(v,1)
x+=D.c.W(v,4)&4095
r.m3(4-(s&7))}else if(t===15)throw C.p(A.cp("TIFFFaxDecoder2"))
else{x+=s&2047
r.m3(9-t)
if((v&1)===0)w=!0}}else{if(u===200){v=B.R6[r.pL(2)]
x+=v>>>5&2047
r.m3(2-(v>>>1&15))}else{x+=u
r.m3(4-(v>>>1&15))}w=!0}}return x},
ayy(){var x,w,v=this,u="TIFFFaxDecoder8",t=v.as
if(t===0){if(v.A_(12)!==1)throw C.p(A.cp("TIFFFaxDecoder6"))}else if(t===1){t=v.w
t.toString
x=8-t
if(v.A_(x)!==0)throw C.p(A.cp(u))
if(x<4)if(v.A_(8)!==0)throw C.p(A.cp(u))
for(;w=v.A_(8),w!==1;)if(w!==0)throw C.p(A.cp(u))}if(v.at===0)return 1
else return v.pL(1)},
atY(d,e,f){var x,w=this,v=w.e,u=w.d,t=w.y,s=t>0?t-1:0
s=e?(s&4294967294)>>>0:(s|1)>>>0
for(x=s;x<u;x+=2){t=v[x]
t.toString
d.toString
if(t>d){w.y=x
f[0]=t
break}}t=x+1
if(t<u)f[1]=v[t]},
qx(d,e,f,g){var x,w,v,u,t,s=8*e+f,r=s+g,q=D.c.W(s,3),p=s&7
if(p>0){x=D.c.f7(1,7-p)
w=J.v(d.a,d.d+q)
while(!0){if(!(x>0&&s<r))break
w=(w|x)>>>0
x=x>>>1;++s}d.m(0,q,w)}q=D.c.W(s,3)
for(v=r-7;s<v;q=u){u=q+1
J.c_(d.a,d.d+q,255)
s+=8}for(;s<r;){q=D.c.W(s,3)
v=J.v(d.a,d.d+q)
t=D.c.f7(1,7-(s&7))
J.c_(d.a,d.d+q,(v|t)>>>0);++s}},
A_(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.r
j===$&&C.a()
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
r=B.np[J.v(j.a,x+v)&255]
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=B.np[J.v(u,x+j)&255]
else{t=B.np[J.v(u,x+j)&255]
j=k.r
s=B.np[J.v(j.a,j.d+(v+2))&255]}}}else throw C.p(A.cp("TIFFFaxDecoder7"))
j=k.w
j.toString
q=8-j
p=d-q
if(p>8){o=p-8
n=8}else{n=p
o=0}j=k.x
j.toString
j=k.x=j+1
m=D.c.f7(r&B.pW[q],p)
l=D.c.hv(t&B.Gg[n],8-n)
if(o!==0){l=D.c.f7(l,o)|D.c.hv(s&B.Gg[o],8-o)
k.x=j+1
k.w=o}else if(n===8){k.w=0
k.x=j+1}else k.w=n
return(m|l)>>>0},
pL(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.r
m===$&&C.a()
x=m.d
w=m.c-x-1
v=n.x
u=n.c
t=0
if(u===1){v.toString
s=J.v(m.a,x+v)
if(!(v===w)){m=n.r
t=J.v(m.a,m.d+(v+1))}}else if(u===2){v.toString
s=B.np[J.v(m.a,x+v)&255]
if(!(v===w)){m=n.r
t=B.np[J.v(m.a,m.d+(v+1))&255]}}else throw C.p(A.cp("TIFFFaxDecoder7"))
m=n.w
m.toString
r=8-m
q=d-r
p=r-d
if(p>=0){o=D.c.hv(s&B.pW[r],p)
m+=d
n.w=m
if(m===8){n.w=0
m=n.x
m.toString
n.x=m+1}}else{o=(D.c.f7(s&B.pW[r],-p)|D.c.hv(t&B.Gg[q],8-q))>>>0
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
A.aJx.prototype={
b34(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.cu(d,g,0),e=d.aw()
for(x=h.a,w=0;w<e;++w){v=d.aw()
u=d.aw()
t=B.TN[u]
s=B.lk[u]
r=d.ai()
if(r*s>4)q=d.ai()
else{q=d.d
d.d=q+4}p=new A.aJw(v,t,r,q,f)
x.m(0,v,p)
if(v===256){o=p.q7(0)
o=o==null?g:o.L(0)
h.b=o==null?0:o}else if(v===257){o=p.q7(0)
o=o==null?g:o.L(0)
h.c=o==null?0:o}else if(v===262){n=p.q7(0)
m=n==null?g:n.L(0)
if(m==null)m=17
if(m<17)h.d=B.aKU[m]
else h.d=B.JX}else if(v===259){o=p.q7(0)
o=o==null?g:o.L(0)
h.e=o==null?0:o}else if(v===258){o=p.q7(0)
o=o==null?g:o.L(0)
h.f=o==null?0:o}else if(v===277){o=p.q7(0)
o=o==null?g:o.L(0)
h.r=o==null?0:o}else if(v===317){o=p.q7(0)
o=o==null?g:o.L(0)
h.Q=o==null?0:o}else if(v===339){o=p.q7(0)
n=o==null?g:o.L(0)
h.x=B.aLr[n==null?0:n]}else if(v===320){n=p.q7(0)
if(n!=null){o=J.dqa(D.H.gar(n.v0()))
h.id=o
h.k1=0
o=o.length/3|0
h.k2=o
h.k3=o*2}}}o=h.id
l=o!=null
if(l&&h.d===B.JY)h.r=1
if(h.b===0||h.c===0)return
if(l&&h.f===8){k=o.length
for(l=o.$flags|0,w=0;w<k;++w){j=o[w]
l&2&&C.L(o)
o[w]=j>>>8}}if(h.d===B.JW)h.z=!0
h.w=h.r
if(x.a4(0,324)){h.ay=h.HE(322)
h.ch=h.HE(323)
h.CW=h.Yx(324)
h.cx=h.Yx(325)}else{h.ay=h.Yw(322,h.b)
if(!x.a4(0,278))h.ch=h.Yw(323,h.c)
else{i=h.HE(278)
if(i===-1)h.ch=h.c
else h.ch=i}h.CW=h.Yx(273)
h.cx=h.Yx(279)}o=h.b
l=h.ay
h.cy=D.c.hR(o+l-1,l)
o=h.c
j=h.ch
h.db=D.c.hR(o+j-1,j)
h.dx=l*j*h.r
h.dy=h.Yw(266,1)
h.fr=h.HE(292)
h.fx=h.HE(293)
h.HE(338)
switch(h.d.a){case 0:case 1:x=h.f
if(x===1&&h.r===1)h.y=B.JV
else if(x===4&&h.r===1)h.y=B.bMh
else if(D.c.av(x,8)===0){x=h.r
if(x===1)h.y=B.bMi
else if(x===2)h.y=B.bMj
else h.y=B.rb}break
case 2:if(D.c.av(h.f,8)===0){x=h.r
if(x===3)h.y=B.afG
else if(x===4)h.y=B.bMl
else h.y=B.rb}break
case 3:x=!1
if(h.r===1)if(h.id!=null){x=h.f
x=x===4||x===8||x===16}if(x)h.y=B.bMk
break
case 4:if(h.f===1&&h.r===1)h.y=B.JV
break
case 6:if(h.e===7&&h.f===8&&h.r===3)h.y=B.afG
else{if(x.a4(0,530)){n=x.h(0,530).q7(0)
h.as=n.L(0)
x=h.at=n.jU(0,1)}else x=h.at=h.as=2
o=h.as
o===$&&C.a()
if(o*x===1)h.y=B.rb
else if(h.f===8&&h.r===3)h.y=B.bMm}break
case 5:if(D.c.av(h.f,8)===0)h.y=B.rb
x=h.r
if(x===4)h.w=3
else if(x===5)h.w=4
break
default:if(D.c.av(h.f,8)===0)h.y=B.rb
break}},
dn(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.x,d=e===B.ra,a0=e===B.bq
e=g.f
if(e===1)x=B.hJ
else if(e===2)x=B.iB
else{if(e===4)e=B.iC
else if(d&&e===16)e=B.jt
else if(d&&e===32)e=B.l7
else if(d&&e===64)e=B.mM
else if(a0&&e===8)e=B.mN
else if(a0&&e===16)e=B.mO
else if(a0&&e===32)e=B.mP
else if(e===16)e=B.cV
else e=e===32?B.l8:B.ai
x=e}w=g.id!=null&&g.d===B.JY
v=w?3:g.w
e=g.b
u=A.iO(f,f,x,0,B.bD,g.c,f,0,v,f,x,e,w)
if(w){e=u.a
e=e==null?f:e.gf5()
e.toString
t=g.id
s=t.length
r=s/3|0
q=g.k1
q===$&&C.a()
p=g.k2
p===$&&C.a()
o=g.k3
o===$&&C.a()
for(n=o,m=p,l=q,k=0;k<r;++k,++l,++m,++n){if(n>=s)break
e.qf(k,t[l],t[m],t[n])}}j=0
i=0
while(!0){e=g.db
e===$&&C.a()
if(!(j<e))break
h=0
while(!0){e=g.cy
e===$&&C.a()
if(!(h<e))break
g.b9o(a2,u,h,j);++h;++i}++j}return u},
b9o(b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null
if(a8.y===B.JV){a8.b97(b0,b1,b2,b3)
return}u=a8.cy
u===$&&C.a()
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
else if(u===5){w=A.dl(new Uint8Array(p),!1,a9,0)
v=A.dai()
try{J.dqd(v,A.cu(b0,x,0),w.a)}catch(o){}if(a8.Q===2)for(n=0;n<a8.ch;++n){m=a8.r
u=a8.ay
l=m*(n*u+1)
k=u*m
for(;m<k;++m){u=w
r=J.v(u.a,u.d+l)
j=w
i=a8.r
i=J.v(j.a,j.d+(l-i))
J.c_(u.a,u.d+l,r+i);++l}}}else if(u===32773){w=A.dl(new Uint8Array(p),!1,a9,0)
a8.arF(b0,p,w.a)}else if(u===32946)w=A.dl(B.kS.E9(b0.Ln(0,0,x)),!1,a9,0)
else if(u===8)w=A.dl(B.kS.E9(b0.Ln(0,0,x)),!1,a9,0)
else if(u===6){a8.bnO(new A.azo().dn(0,y.D.a(b0.Ln(0,0,x))),b1,s,q,a8.ay,a8.ch)
return}else throw C.p(A.cp("Unsupported Compression Type: "+u))
h=C.b([0,0,0],y.t)
for(g=q,f=0;f<a8.ch;++f,++g)for(e=s,d=0;d<a8.ay;++d,++e){u=w
if(u.d>=u.c||e>=a8.b||g>=a8.c)break
u=a8.r
if(u===1){u=a8.x
if(u===B.ra){u=a8.f
if(u===32){u=w.ai()
r=$.iu()
r.$flags&2&&C.L(r)
r[0]=u
a0=$.Ix()[0]}else if(u===64)a0=w.a42()
else if(u===16){u=w.aw()
r=$.iN
a0=(r!=null?r:A.jK())[u]}else a0=0
if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.nj(e,g,a0)}}else{r=a8.f
if(r===8)if(u===B.bq){u=w
u=J.v(u.a,u.d++)
r=$.oS()
r.$flags&2&&C.L(r)
r[0]=u
a0=$.q1()[0]}else{u=w
a0=J.v(u.a,u.d++)}else if(r===16)if(u===B.bq){u=w.aw()
r=$.oR()
r.$flags&2&&C.L(r)
r[0]=u
a0=$.q0()[0]}else a0=w.aw()
else if(r===32)if(u===B.bq){u=w.ai()
r=$.iu()
r.$flags&2&&C.L(r)
r[0]=u
a0=$.m0()[0]}else a0=w.ai()
else a0=0
if(a8.d===B.JW){u=b1.a
a1=u==null?a9:u.gct()
a0=(a1==null?0:a1)-a0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.nj(e,g,a0)}}}else if(u===2){u=a8.f
if(u===8){if(a8.x===B.bq){u=w
u=J.v(u.a,u.d++)
r=$.oS()
r.$flags&2&&C.L(r)
r[0]=u
a2=$.q1()[0]}else{u=w
a2=J.v(u.a,u.d++)}if(a8.x===B.bq){u=w
u=J.v(u.a,u.d++)
r=$.oS()
r.$flags&2&&C.L(r)
r[0]=u
a3=$.q1()[0]}else{u=w
a3=J.v(u.a,u.d++)}}else if(u===16){if(a8.x===B.bq){u=w.aw()
r=$.oR()
r.$flags&2&&C.L(r)
r[0]=u
a2=$.q0()[0]}else a2=w.aw()
if(a8.x===B.bq){u=w.aw()
r=$.oR()
r.$flags&2&&C.L(r)
r[0]=u
a3=$.q0()[0]}else a3=w.aw()}else if(u===32){if(a8.x===B.bq){u=w.ai()
r=$.iu()
r.$flags&2&&C.L(r)
r[0]=u
a2=$.m0()[0]}else a2=w.ai()
if(a8.x===B.bq){u=w.ai()
r=$.iu()
r.$flags&2&&C.L(r)
r[0]=u
a3=$.m0()[0]}else a3=w.ai()}else{a2=0
a3=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.fJ(e,g,a2,a3,0)}}else if(u===3){u=a8.x
if(u===B.ra){u=a8.f
if(u===32){u=w.ai()
r=$.iu()
r.$flags&2&&C.L(r)
r[0]=u
u=$.Ix()
a4=u[0]
r[0]=w.ai()
a5=u[0]
r[0]=w.ai()
a6=u[0]}else{a5=0
a6=0
if(u===64)a4=w.a42()
else if(u===16){u=w.aw()
r=$.iN
a4=(r!=null?r:A.jK())[u]
u=w.aw()
r=$.iN
a5=(r!=null?r:A.jK())[u]
u=w.aw()
r=$.iN
a6=(r!=null?r:A.jK())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.fJ(e,g,a4,a5,a6)}}else{r=a8.f
if(r===8){if(u===B.bq){u=w
u=J.v(u.a,u.d++)
r=$.oS()
r.$flags&2&&C.L(r)
r[0]=u
a4=$.q1()[0]}else{u=w
a4=J.v(u.a,u.d++)}if(a8.x===B.bq){u=w
u=J.v(u.a,u.d++)
r=$.oS()
r.$flags&2&&C.L(r)
r[0]=u
a5=$.q1()[0]}else{u=w
a5=J.v(u.a,u.d++)}if(a8.x===B.bq){u=w
u=J.v(u.a,u.d++)
r=$.oS()
r.$flags&2&&C.L(r)
r[0]=u
a6=$.q1()[0]}else{u=w
a6=J.v(u.a,u.d++)}}else if(r===16){if(u===B.bq){u=w.aw()
r=$.oR()
r.$flags&2&&C.L(r)
r[0]=u
a4=$.q0()[0]}else a4=w.aw()
if(a8.x===B.bq){u=w.aw()
r=$.oR()
r.$flags&2&&C.L(r)
r[0]=u
a5=$.q0()[0]}else a5=w.aw()
if(a8.x===B.bq){u=w.aw()
r=$.oR()
r.$flags&2&&C.L(r)
r[0]=u
a6=$.q0()[0]}else a6=w.aw()}else if(r===32){if(u===B.bq){u=w.ai()
r=$.iu()
r.$flags&2&&C.L(r)
r[0]=u
a4=$.m0()[0]}else a4=w.ai()
if(a8.x===B.bq){u=w.ai()
r=$.iu()
r.$flags&2&&C.L(r)
r[0]=u
a5=$.m0()[0]}else a5=w.ai()
if(a8.x===B.bq){u=w.ai()
r=$.iu()
r.$flags&2&&C.L(r)
r[0]=u
a6=$.m0()[0]}else a6=w.ai()}else{a4=0
a5=0
a6=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.fJ(e,g,a4,a5,a6)}}}else if(u>=4)if(a8.x===B.ra){u=a8.f
if(u===32){u=w.ai()
r=$.iu()
r.$flags&2&&C.L(r)
r[0]=u
u=$.Ix()
a4=u[0]
r[0]=w.ai()
a5=u[0]
r[0]=w.ai()
a6=u[0]
r[0]=w.ai()
a7=u[0]}else{a5=0
a6=0
a7=0
if(u===64)a4=w.a42()
else if(u===16){u=w.aw()
r=$.iN
a4=(r!=null?r:A.jK())[u]
u=w.aw()
r=$.iN
a5=(r!=null?r:A.jK())[u]
u=w.aw()
r=$.iN
a6=(r!=null?r:A.jK())[u]
u=w.aw()
r=$.iN
a7=(r!=null?r:A.jK())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.kY(e,g,a4,a5,a6,a7)}}else{u=b1.a
a3=u==null?a9:u.gct()
if(a3==null)a3=0
u=a8.f
if(u===8){if(a8.x===B.bq){u=w
u=J.v(u.a,u.d++)
r=$.oS()
r.$flags&2&&C.L(r)
r[0]=u
a4=$.q1()[0]}else{u=w
a4=J.v(u.a,u.d++)}if(a8.x===B.bq){u=w
u=J.v(u.a,u.d++)
r=$.oS()
r.$flags&2&&C.L(r)
r[0]=u
a5=$.q1()[0]}else{u=w
a5=J.v(u.a,u.d++)}if(a8.x===B.bq){u=w
u=J.v(u.a,u.d++)
r=$.oS()
r.$flags&2&&C.L(r)
r[0]=u
a6=$.q1()[0]}else{u=w
a6=J.v(u.a,u.d++)}if(a8.x===B.bq){u=w
u=J.v(u.a,u.d++)
r=$.oS()
r.$flags&2&&C.L(r)
r[0]=u
a7=$.q1()[0]}else{u=w
a7=J.v(u.a,u.d++)}if(a8.r===5)if(a8.x===B.bq){u=w
u=J.v(u.a,u.d++)
r=$.oS()
r.$flags&2&&C.L(r)
r[0]=u
a3=$.q1()[0]}else{u=w
a3=J.v(u.a,u.d++)}}else if(u===16){if(a8.x===B.bq){u=w.aw()
r=$.oR()
r.$flags&2&&C.L(r)
r[0]=u
a4=$.q0()[0]}else a4=w.aw()
if(a8.x===B.bq){u=w.aw()
r=$.oR()
r.$flags&2&&C.L(r)
r[0]=u
a5=$.q0()[0]}else a5=w.aw()
if(a8.x===B.bq){u=w.aw()
r=$.oR()
r.$flags&2&&C.L(r)
r[0]=u
a6=$.q0()[0]}else a6=w.aw()
if(a8.x===B.bq){u=w.aw()
r=$.oR()
r.$flags&2&&C.L(r)
r[0]=u
a7=$.q0()[0]}else a7=w.aw()
if(a8.r===5)if(a8.x===B.bq){u=w.aw()
r=$.oR()
r.$flags&2&&C.L(r)
r[0]=u
a3=$.q0()[0]}else a3=w.aw()}else if(u===32){if(a8.x===B.bq){u=w.ai()
r=$.iu()
r.$flags&2&&C.L(r)
r[0]=u
a4=$.m0()[0]}else a4=w.ai()
if(a8.x===B.bq){u=w.ai()
r=$.iu()
r.$flags&2&&C.L(r)
r[0]=u
a5=$.m0()[0]}else a5=w.ai()
if(a8.x===B.bq){u=w.ai()
r=$.iu()
r.$flags&2&&C.L(r)
r[0]=u
a6=$.m0()[0]}else a6=w.ai()
if(a8.x===B.bq){u=w.ai()
r=$.iu()
r.$flags&2&&C.L(r)
r[0]=u
a7=$.m0()[0]}else a7=w.ai()
if(a8.r===5)if(a8.x===B.bq){u=w.ai()
r=$.iu()
r.$flags&2&&C.L(r)
r[0]=u
a3=$.m0()[0]}else a3=w.ai()}else{a4=0
a5=0
a6=0
a7=0}if(a8.d===B.afH){A.diu(a4,a5,a6,a7,h)
a4=h[0]
a5=h[1]
a6=h[2]
a7=a3}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.kY(e,g,a4,a5,a6,a7)}}}}else throw C.p(A.cp("Unsupported bitsPerSample: "+u))},
bnO(d,e,f,g,h,i){var x,w,v,u
for(x=0;x<i;++x)for(w=x+g,v=0;v<h;++v){u=d.a
u=u==null?null:u.eu(v,x,null)
if(u==null)u=new A.h5()
e.Ca(v+f,w,u)}},
b97(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.cy
a2===$&&C.a()
w=a6*a2+a5
a3.d=a0.CW[w]
a2=a0.ay
v=a5*a2
u=a0.ch
t=a6*u
s=a0.cx[w]
x=null
r=a0.e
if(r===32773){q=D.c.av(a2,8)===0?D.c.aL(a2,8)*u:(D.c.aL(a2,8)+1)*u
x=A.dl(new Uint8Array(a2*u),!1,a1,0)
a0.arF(a3,q,x.a)}else if(r===5){x=A.dl(new Uint8Array(a2*u),!1,a1,0)
A.dai().Ja(0,A.cu(a3,s,0),x.a)
if(a0.Q===2)for(p=0;p<a0.c;++p){o=a0.r
n=o*(p*a0.b+1)
for(;o<a0.b*a0.r;++o){a2=x
u=J.v(a2.a,a2.d+n)
r=x
m=a0.r
m=J.v(r.a,r.d+(n-m))
J.c_(a2.a,a2.d+n,u+m);++n}}}else if(r===2){x=A.dl(new Uint8Array(a2*u),!1,a1,0)
try{A.d0s(a0.dy,a0.ay,a0.ch).bMh(x,a3,0,a0.ch)}catch(l){}}else if(r===3){x=A.dl(new Uint8Array(a2*u),!1,a1,0)
try{A.d0s(a0.dy,a0.ay,a0.ch).bMi(x,a3,0,a0.ch,a0.fr)}catch(l){}}else if(r===4){x=A.dl(new Uint8Array(a2*u),!1,a1,0)
try{A.d0s(a0.dy,a0.ay,a0.ch).bMo(x,a3,0,a0.ch,a0.fx)}catch(l){}}else if(r===8)x=A.dl(B.kS.E9(a3.Ln(0,0,s)),!1,a1,0)
else if(r===32946)x=A.dl(B.kS.E9(a3.Ln(0,0,s)),!1,a1,0)
else if(r===1)x=a3
else throw C.p(A.cp("Unsupported Compression Type: "+r))
k=new A.bZy(x)
j=a4.gct()
a2=a0.z
i=a2?j:0
h=a2?0:j
for(g=t,f=0;f<a0.ch;++f,++g){for(e=v,d=0;d<a0.ay;++d,++e){a2=a4.a
u=a2==null
r=u?a1:a2.b
if(g<(r==null?0:r)){a2=u?a1:a2.a
a2=e>=(a2==null?0:a2)}else a2=!0
if(a2)break
a2=k.jQ(1)
u=a4.a
if(a2===0){if(u!=null)u.fJ(e,g,i,0,0)}else if(u!=null)u.fJ(e,g,h,0,0)}k.c=0}},
arF(d,e,f){var x,w,v,u,t,s,r,q,p,o
for(x=J.cQ(f),w=0,v=0;v<e;){u=w+1
t=J.v(d.a,d.d+w)
s=$.oS()
s.$flags&2&&C.L(s)
s[0]=t
r=$.q1()[0]
if(r>=0&&r<=127)for(t=r+1,w=u,q=0;q<t;++q,v=p,w=u){p=v+1
u=w+1
x.m(f,v,J.v(d.a,d.d+w))}else{t=r<=-1&&r>=-127
w=u+1
if(t){o=J.v(d.a,d.d+u)
for(t=-r+1,q=0;q<t;++q,v=p){p=v+1
x.m(f,v,o)}}}}},
Yw(d,e){var x=this.a
if(!x.a4(0,d))return e
x=x.h(0,d).q7(0)
x=x==null?null:x.L(0)
return x==null?0:x},
HE(d){return this.Yw(d,0)},
Yx(d){var x,w=this.a
if(!w.a4(0,d))return null
x=w.h(0,d)
w=x.q7(0)
w.toString
return C.qr(x.c,w.gyS(w),!0,y.p)}}
A.NW.prototype={
J(){return"TiffFormat."+this.b}}
A.lS.prototype={
J(){return"TiffPhotometricType."+this.b}}
A.uV.prototype={
J(){return"TiffImageType."+this.b}}
A.bZB.prototype={}
A.bAL.prototype={
Ja(d,e,f){var x,w,v,u,t,s,r=this
r.r=f
x=J.bn(f)
r.w=0
w=y.D.a(e.a)
r.e=w
r.f=w.length
r.b=e.d
if(w[0]===0&&w[1]===1)throw C.p(A.cp("Invalid LZW Data"))
r.avL()
r.d=r.c=0
v=r.a95()
w=r.x
u=0
while(!0){if(!(v!==257&&r.w<x))break
if(v===256){r.avL()
v=r.a95()
r.as=0
if(v===257)break
J.c_(r.r,r.w++,v)
u=v}else{t=r.Q
t.toString
if(v<t){r.aud(v)
t=r.as
t===$&&C.a()
s=t-1
for(;s>=0;--s)J.c_(r.r,r.w++,w[s])
r.ap8(u,w[r.as-1])}else{r.aud(u)
t=r.as
t===$&&C.a()
s=t-1
for(;s>=0;--s)J.c_(r.r,r.w++,w[s])
J.c_(r.r,r.w++,w[r.as-1])
r.ap8(u,w[r.as-1])}u=v}v=r.a95()}},
ap8(d,e){var x,w=this,v=w.y
v===$&&C.a()
x=w.Q
x.toString
v.$flags&2&&C.L(v)
v[x]=e
v=w.z
v===$&&C.a()
v.$flags&2&&C.L(v)
v[x]=d
x=w.Q=x+1
if(x===511)w.a=10
else if(x===1023)w.a=11
else if(x===2047)w.a=12},
aud(d){var x,w,v,u,t,s,r=this
r.as=0
x=r.x
r.as=1
w=r.y
w===$&&C.a()
v=w[d]
x.$flags&2&&C.L(x)
x[0]=v
v=r.z
v===$&&C.a()
u=v[d]
for(t=1;u!==4098;t=s){s=t+1
r.as=s
x[t]=w[u]
u=v[u]}},
a95(){var x,w,v,u,t=this,s=t.b,r=t.f
r===$&&C.a()
if(s>=r)return 257
for(;x=t.d,w=t.a,x<w;s=u){if(s>=r)return 257
w=t.c
v=t.e
v===$&&C.a()
u=s+1
t.b=u
t.c=(w<<8>>>0)+v[s]>>>0
t.d=x+8}s=x-w
t.d=s
return D.c.hv(t.c,s)&B.aGe[w-9]},
avL(){var x,w,v=this
v.y=new Uint8Array(4096)
x=new Uint32Array(4096)
v.z=x
D.bK.mC(x,0,4096,4098)
for(x=v.y,w=0;w<256;++w){x.$flags&2&&C.L(x)
x[w]=w}v.a=9
v.Q=258}}
A.bZz.prototype={
kJ(d){var x,w,v=this.a
if(v==null)return null
v=v.f[d]
x=this.c
x===$&&C.a()
w=v.dn(0,x)
return w},
nC(d,e,f){var x=this,w=A.dl(e,!1,null,0)
x.c=w
w=x.ayA(w)
x.a=w
if(w==null)return null
return x.kJ(0)},
ayA(d){var x,w,v,u,t,s,r,q,p,o=null,n=C.b([],y._),m=new A.bZB(n),l=d.aw()
if(l!==18761&&l!==19789)return o
if(l===19789)d.e=!0
else d.e=!1
v=d.aw()
m.d=v
if(v!==42)return o
u=d.ai()
t=A.cu(d,o,0)
t.d=u
x=t
for(v=y.p,s=y.aL;u!==0;){w=null
try{r=new A.aJx(C.H(v,s),B.JX,B.afF,B.bMn)
r.b34(x)
w=r
q=w
if(!(q.b!==0&&q.c!==0))break}catch(p){break}n.push(w)
if(n.length===1){q=n[0]
m.a=q.b
m.b=q.c}u=x.ai()
if(u!==0)x.d=u}return n.length!==0?m:o}}
A.c4v.prototype={
Qs(){var x,w=this.a,v=w.tE()
if((v&1)!==0)return!1
if((v>>>1&7)>3)return!1
if((v>>>4&1)===0)return!1
this.f.d=v>>>5
if(w.tE()!==2752925)return!1
x=this.b
x.a=w.aw()
x.b=w.aw()
return!0},
p9(d){var x,w,v,u=this,t=null
if(!u.be4())return t
x=u.b
w=x.a
u.d=A.iO(t,t,B.ai,0,B.bD,x.b,t,0,4,t,B.ai,w,!1)
u.bmQ()
if(!u.btL())return t
x=x.w
if(x.length!==0){v=A.dl(new C.f0(x),!1,t,0)
x=u.d
x.toString
x.e=A.d7V(v)}return u.d},
be4(){var x,w,v,u,t=this
if(!t.Qs())return!1
t.fr=A.dGT()
for(x=t.dy,w=0;w<4;++w){v=new Int32Array(2)
u=new Int32Array(2)
x[w]=new A.aLk(v,u,new Int32Array(2))}x=t.b
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
u===$&&C.a()
u=A.deZ(v.jY(u))
t.c=u
v.d+=x.d
u.dM(1)
t.c.dM(1)
t.btT(t.x,t.fr)
t.btK()
if(!t.btO(v))return!1
t.btQ()
t.c.dM(1)
t.btP()
return!0},
btT(d,e){var x,w,v,u=this,t=u.c
t===$&&C.a()
t=t.dM(1)!==0
d.a=t
if(t){d.b=u.c.dM(1)!==0
if(u.c.dM(1)!==0){d.c=u.c.dM(1)!==0
for(t=d.d,x=0;x<4;++x){if(u.c.dM(1)!==0){w=u.c
v=w.dM(7)
w=w.dM(1)===1?-v:v}else w=0
t.$flags&2&&C.L(t)
t[x]=w}for(t=d.e,x=0;x<4;++x){if(u.c.dM(1)!==0){w=u.c
v=w.dM(6)
w=w.dM(1)===1?-v:v}else w=0
t.$flags&2&&C.L(t)
t[x]=w}}if(d.b)for(x=0;x<3;++x){t=e.a
w=u.c.dM(1)!==0?u.c.dM(8):255
t.$flags&2&&C.L(t)
t[x]=w}}else d.b=!1
return!0},
btK(){var x,w,v,u=this,t=u.w,s=u.c
s===$&&C.a()
t.a=s.dM(1)!==0
t.b=u.c.dM(6)
t.c=u.c.dM(3)
s=u.c.dM(1)!==0
t.d=s
if(s)if(u.c.dM(1)!==0){for(s=t.e,x=0;x<4;++x)if(u.c.dM(1)!==0){w=u.c
v=w.dM(6)
w=w.dM(1)===1?-v:v
s.$flags&2&&C.L(s)
s[x]=w}for(s=t.f,x=0;x<4;++x)if(u.c.dM(1)!==0){w=u.c
v=w.dM(6)
w=w.dM(1)===1?-v:v
s.$flags&2&&C.L(s)
s[x]=w}}if(t.b===0)s=0
else s=t.a?1:2
u.bl=s
return!0},
btO(d){var x,w,v,u,t,s,r,q=d.c-d.d,p=this.c
p===$&&C.a()
p=D.c.eA(1,p.dM(2))
this.cy=p
x=p-1
w=x*3
if(q<w)return!1
for(p=this.db,v=0,u=0;u<x;++u,w=s){t=d.Vb(3,v)
s=w+((J.v(t.a,t.d)|J.v(t.a,t.d+1)<<8|J.v(t.a,t.d+2)<<16)>>>0)
if(s>q)s=q
r=new A.ads(d.Cp(s-w,w))
r.b=254
r.c=0
r.d=-8
p[u]=r
v+=3}p[x]=A.deZ(d.Cp(q-w,d.d-d.b+w))
return w<q},
btQ(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
h===$&&C.a()
x=h.dM(7)
w=i.c.dM(1)!==0?i.c.LV(4):0
v=i.c.dM(1)!==0?i.c.LV(4):0
u=i.c.dM(1)!==0?i.c.LV(4):0
t=i.c.dM(1)!==0?i.c.LV(4):0
s=i.c.dM(1)!==0?i.c.LV(4):0
r=i.x
for(h=i.dy,q=r.a,p=!r.c,o=r.d,n=0;n<4;++n){if(q){m=o[n]
if(p)m+=x}else{if(n>0){h[n]=h[0]
continue}m=x}l=h[n]
k=l.a
j=m+w
if(j<0)j=0
else if(j>127)j=127
j=B.FI[j]
k.$flags&2&&C.L(k)
k[0]=j
if(m<0)j=0
else j=m>127?127:m
k[1]=B.FJ[j]
j=l.b
k=m+v
if(k<0)k=0
else if(k>127)k=127
k=B.FI[k]
j.$flags&2&&C.L(j)
j[0]=k*2
k=m+u
if(k<0)k=0
else if(k>127)k=127
j[1]=B.FJ[k]*101581>>>16
if(j[1]<8)j[1]=8
k=l.c
j=m+t
if(j<0)j=0
else if(j>117)j=117
j=B.FI[j]
k.$flags&2&&C.L(k)
k[0]=j
j=m+s
if(j<0)j=0
else if(j>127)j=127
k[1]=B.FJ[j]}},
btP(){var x,w,v,u,t,s,r=this,q=r.fr
for(x=0;x<4;++x)for(w=0;w<8;++w)for(v=0;v<3;++v)for(u=0;u<11;++u){t=r.c
t===$&&C.a()
s=t.iY(B.aQI[x][w][v][u])!==0?r.c.dM(8):B.aGa[x][w][v][u]
t=q.b[x][w].a[v]
t.$flags&2&&C.L(t)
t[u]=s}t=r.c
t===$&&C.a()
t=t.dM(1)!==0
r.fx=t
if(t)r.fy=r.c.dM(8)},
buV(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.bl
k.toString
if(k>0){x=l.w
for(k=x.e,w=x.f,v=l.x,u=v.e,t=0;t<4;++t){if(v.a){s=u[t]
if(!v.c){r=x.b
r.toString
s+=r}}else s=x.b
for(q=0;q<=1;++q){r=l.C
r===$&&C.a()
p=r[t][q]
r=x.d
r===$&&C.a()
if(r){s.toString
o=s+k[0]
if(q!==0)o+=w[0]}else o=s
o.toString
if(o<0)o=0
else if(o>63)o=63
if(o>0){r=x.c
r===$&&C.a()
if(r>0){n=r>4?D.c.W(o,2):D.c.W(o,1)
m=9-r
if(n>m)n=m}else n=o
if(n<1)n=1
p.b=n
p.a=2*o+n
if(o>=40)r=2
else r=o>=15?1:0
p.d=r}else p.a=0
p.c=q!==0}}}},
bmQ(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k.at
if(j!=null)m.X=j
x=J.jM(4,y.K)
for(j=y.q,w=0;w<4;++w)x[w]=C.b([new A.OD(),new A.OD()],j)
m.C=x
j=m.at
j.toString
x=J.jM(j,y.bt)
for(v=0;v<j;++v){u=new Uint8Array(16)
t=new Uint8Array(8)
x[v]=new A.aLl(u,t,new Uint8Array(8))}m.k2=x
m.ok=new Uint8Array(832)
j=m.at
j.toString
m.go=new Uint8Array(4*j)
u=m.p4=16*j
j=8*j
m.R8=j
t=m.bl
t.toString
s=B.Fr[t]
r=s*u
q=(s/2|0)*j
m.p1=A.dl(new Uint8Array(16*u+r),!1,l,r)
j=m.R8
j.toString
m.p2=A.dl(new Uint8Array(8*j+q),!1,l,q)
j=m.R8
j.toString
m.p3=A.dl(new Uint8Array(8*j+q),!1,l,q)
j=k.a
m.RG=A.dl(new Uint8Array(j),!1,l,0)
p=k.a+1>>>1
m.rx=A.dl(new Uint8Array(p),!1,l,0)
m.ry=A.dl(new Uint8Array(p),!1,l,0)
k=m.bl
k.toString
o=B.Fr[k]
if(k===2)m.ch=m.ay=0
else{k=m.y
k===$&&C.a()
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
j===$&&C.a()
j=D.c.aL(j+15+o,16)
m.CW=j
u=m.at
u.toString
if(j>u)m.CW=u
j=m.ax
j.toString
if(k>j)m.cx=j
n=u+1
x=J.jM(n,y.bQ)
for(v=0;v<n;++v)x[v]=new A.aLi()
m.k3=x
k=m.at
k.toString
x=J.jM(k,y.bl)
for(v=0;v<k;++v){j=new Int16Array(384)
x[v]=new A.aLj(j,new Uint8Array(16))}m.ba=x
k=m.at
k.toString
m.k4=C.c5(k,l,!1,y.B)
m.buV()
A.dGk()
m.e=new A.c4w()
return!0},
btL(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.y2=0
x=j.id
w=j.x
v=j.db
u=0
while(!0){t=j.cx
t.toString
if(!(u<t))break
t=j.cy
t===$&&C.a()
s=v[(u&t-1)>>>0]
while(!0){u=j.y1
t=j.at
t.toString
if(!(u<t))break
t=j.k3
t===$&&C.a()
r=t[0]
q=t[1+u]
t=j.ba
t===$&&C.a()
p=t[u]
if(w.b){u=j.c
u===$&&C.a()
u=u.iY(j.fr.a[0])
t=j.c
o=j.fr
j.k1=u===0?t.iY(o.a[1]):2+t.iY(o.a[2])}u=j.fx
u===$&&C.a()
if(u){u=j.c
u===$&&C.a()
t=j.fy
t===$&&C.a()
n=u.iY(t)!==0}else n=!1
j.btM()
if(!n)n=j.btR(q,s)
else{r.a=q.a=0
u=p.b
u===$&&C.a()
if(!u)r.b=q.b=0
p.f=p.e=0}u=j.bl
u.toString
if(u>0){u=j.k4
u===$&&C.a()
t=j.y1
o=j.C
o===$&&C.a()
m=j.k1
m===$&&C.a()
m=o[m]
o=p.b
o===$&&C.a()
l=m[o?1:0]
u[t]=l
l.c=l.c||!n}++j.y1}u=j.k3
u===$&&C.a()
u=u[0]
u.b=u.a=0
D.H.mC(x,0,4,0)
j.y1=0
j.bw5()
u=j.bl
u.toString
k=!1
if(u>0){u=j.y2
t=j.ch
t===$&&C.a()
if(u>=t){t=j.cx
t.toString
t=u<=t
k=t}}if(!j.bcM(k))return!1
u=++j.y2}return!0},
bw5(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.y2,a5=a2.ok
a5===$&&C.a()
x=A.dl(a5,!1,a3,40)
w=A.dl(a2.ok,!1,a3,584)
v=A.dl(a2.ok,!1,a3,600)
a5=a4>0
u=0
while(!0){t=a2.at
t.toString
if(!(u<t))break
t=a2.ba
t===$&&C.a()
s=t[u]
if(u>0){for(r=-1;r<16;++r){t=r*32
x.ts(t-4,4,x,t+12)}for(r=-1;r<8;++r){t=r*32
q=t-4
t+=4
w.ts(q,4,w,t)
v.ts(q,4,v,t)}}else{for(r=0;r<16;++r)J.c_(x.a,x.d+(r*32-1),129)
for(r=0;r<8;++r){t=r*32-1
J.c_(w.a,w.d+t,129)
J.c_(v.a,v.d+t,129)}if(a5){J.c_(v.a,v.d+-33,129)
J.c_(w.a,w.d+-33,129)
J.c_(x.a,x.d+-33,129)}}t=a2.k2
t===$&&C.a()
p=t[u]
o=s.a
n=s.e
if(a5){x.Bj(-32,16,p.a)
w.Bj(-32,8,p.b)
v.Bj(-32,8,p.c)}else if(u===0){t=x.a
q=x.d+-33
J.vn(t,q,q+21,127)
q=w.a
t=w.d+-33
J.vn(q,t,t+9,127)
t=v.a
q=v.d+-33
J.vn(t,q,q+9,127)}t=s.b
t===$&&C.a()
if(t){m=A.cu(x,a3,-16)
l=m.Tg()
if(a5){t=a2.at
t.toString
if(u>=t-1){t=p.a[15]
q=m.a
k=m.d
J.vn(q,k,k+4,t)}else m.Bj(0,4,a2.k2[u+1].a)}j=l[0]
l.$flags&2&&C.L(l)
l[96]=j
l[64]=j
l[32]=j
for(t=s.c,i=0;i<16;++i,n=n<<2>>>0){h=A.cu(x,a3,B.Ym[i])
B.aNi[t[i]].$1(h)
n.toString
q=i*16
a2.asg(n,new A.ns(o,q,Math.min(384,384),q,!1),h)}}else{t=A.df1(u,a4,s.c[0])
t.toString
B.aS5[t].$1(x)
if(n!==0)for(i=0;i<16;++i,n=n<<2>>>0){h=A.cu(x,a3,B.Ym[i])
n.toString
t=i*16
a2.asg(n,new A.ns(o,t,Math.min(384,384),t,!1),h)}}t=s.f
t===$&&C.a()
q=A.df1(u,a4,s.d)
q.toString
B.TA[q].$1(w)
B.TA[q].$1(v)
q=Math.min(384,384)
g=new A.ns(o,256,q,256,!1)
if((t&255)!==0){k=a2.e
if((t&170)!==0){k===$&&C.a()
k.wG(g,w)
k.wG(A.cu(g,a3,16),A.cu(w,a3,4))
f=A.cu(g,a3,32)
e=A.cu(w,a3,128)
k.wG(f,e)
k.wG(A.cu(f,a3,16),A.cu(e,a3,4))}else{k===$&&C.a()
k.aOL(g,w)}}d=new A.ns(o,320,q,320,!1)
t=t>>>8
if((t&255)!==0){q=a2.e
if((t&170)!==0){q===$&&C.a()
q.wG(d,v)
q.wG(A.cu(d,a3,16),A.cu(v,a3,4))
t=A.cu(d,a3,32)
k=A.cu(v,a3,128)
q.wG(t,k)
q.wG(A.cu(t,a3,16),A.cu(k,a3,4))}else{q===$&&C.a()
q.aOL(d,v)}}t=a2.ax
t.toString
if(a4<t-1){D.H.el(p.a,0,16,x.im(),480)
D.H.el(p.b,0,8,w.im(),224)
D.H.el(p.c,0,8,v.im(),224)}a0=u*16
a1=u*8
for(r=0;r<16;++r){t=a2.p4
t.toString
q=a2.p1
q===$&&C.a()
q.ts(a0+r*t,16,x,r*32)}for(r=0;r<8;++r){t=a2.R8
t.toString
q=a2.p2
q===$&&C.a()
k=r*32
q.ts(a1+r*t,8,w,k)
t=a2.R8
t.toString
q=a2.p3
q===$&&C.a()
q.ts(a1+r*t,8,v,k)}++u}},
asg(d,e,f){var x,w,v,u,t,s
switch(d>>>30){case 3:x=this.e
x===$&&C.a()
x.Lt(0,e,f,!1)
break
case 2:this.e===$&&C.a()
w=J.v(e.a,e.d)+4
v=D.c.lA(D.c.W(J.v(e.a,e.d+4)*35468,16),32)
u=D.c.lA(D.c.W(J.v(e.a,e.d+4)*85627,16),32)
t=D.c.lA(D.c.W(J.v(e.a,e.d+1)*35468,16),32)
s=D.c.lA(D.c.W(J.v(e.a,e.d+1)*85627,16),32)
A.c4y(f,0,w+u,s,t)
A.c4y(f,1,w+v,s,t)
A.c4y(f,2,w-v,s,t)
A.c4y(f,3,w-u,s,t)
break
case 1:x=this.e
x===$&&C.a()
x.Th(e,f)
break
default:break}},
baO(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.p4,j=m.k4
j===$&&C.a()
j=j[d]
j.toString
x=m.p1
x===$&&C.a()
w=A.cu(x,l,d*16)
v=j.b
u=j.a
if(u===0)return
if(m.bl===1){if(d>0){x=m.e
x===$&&C.a()
k.toString
x.amY(w,k,u+4)}if(j.c){x=m.e
x===$&&C.a()
k.toString
x.aVZ(w,k,u)}if(e>0){x=m.e
x===$&&C.a()
k.toString
x.amZ(w,k,u+4)}if(j.c){j=m.e
j===$&&C.a()
k.toString
j.aW1(w,k,u)}}else{t=m.R8
x=m.p2
x===$&&C.a()
s=d*8
r=A.cu(x,l,s)
x=m.p3
x===$&&C.a()
q=A.cu(x,l,s)
p=j.d
if(d>0){x=m.e
x===$&&C.a()
k.toString
s=u+4
x.H6(w,1,k,16,s,v,p)
t.toString
x.H6(r,1,t,8,s,v,p)
x.H6(q,1,t,8,s,v,p)}if(j.c){x=m.e
x===$&&C.a()
k.toString
x.bPZ(w,k,u,v,p)
t.toString
o=A.cu(r,l,4)
n=A.cu(q,l,4)
x.H5(o,1,t,8,u,v,p)
x.H5(n,1,t,8,u,v,p)}if(e>0){x=m.e
x===$&&C.a()
k.toString
s=u+4
x.H6(w,k,1,16,s,v,p)
t.toString
x.H6(r,t,1,8,s,v,p)
x.H6(q,t,1,8,s,v,p)}if(j.c){j=m.e
j===$&&C.a()
k.toString
j.c1t(w,k,u,v,p)
t.toString
x=4*t
o=A.cu(r,l,x)
n=A.cu(q,l,x)
j.H5(o,t,1,8,u,v,p)
j.H5(n,t,1,8,u,v,p)}}},
bcs(){var x,w=this,v=w.ay
v===$&&C.a()
x=v
while(!0){v=w.CW
v.toString
if(!(x<v))break
w.baO(x,w.y2);++x}},
bcM(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.bl
e.toString
x=B.Fr[e]
e=g.p4
e.toString
w=x*e
e=g.R8
e.toString
v=(x/2|0)*e
e=g.p1
e===$&&C.a()
u=-w
t=A.cu(e,f,u)
e=g.p2
e===$&&C.a()
s=-v
r=A.cu(e,f,s)
e=g.p3
e===$&&C.a()
q=A.cu(e,f,s)
p=g.y2
e=g.cx
e.toString
o=p*16
n=(p+1)*16
if(d)g.bcs()
if(p!==0){o-=x
g.to=A.cu(t,f,0)
g.x1=A.cu(r,f,0)
g.x2=A.cu(q,f,0)}else{g.to=A.cu(g.p1,f,0)
g.x1=A.cu(g.p2,f,0)
g.x2=A.cu(g.p3,f,0)}e=p<e-1
if(e)n-=x
m=g.as
m.toString
if(n>m)n=m
g.xr=null
if(g.X!=null&&o<n){m=g.xr=g.b9r(o,n-o)
if(m==null)return!1}else m=f
l=g.Q
l.toString
if(o<l){k=l-o
j=g.to
j===$&&C.a()
i=j.d
h=g.p4
h.toString
j.d=i+h*k
h=g.x1
h===$&&C.a()
i=h.d
j=g.R8
j.toString
j*=D.c.W(k,1)
h.d=i+j
i=g.x2
i===$&&C.a()
i.d+=j
if(m!=null)m.d=m.d+g.b.a*k
o=l}if(o<n){j=g.to
j===$&&C.a()
i=j.d
h=g.y
h===$&&C.a()
j.d=i+h
i=g.x1
i===$&&C.a()
j=h>>>1
i.d=i.d+j
i=g.x2
i===$&&C.a()
i.d+=j
if(m!=null)m.d+=h
m=g.z
m===$&&C.a()
g.bvm(0,o-l,m-h,n-o)}if(e){e=g.p1
m=g.p4
m.toString
e.ts(u,w,t,16*m)
m=g.p2
u=g.R8
u.toString
m.ts(s,v,r,8*u)
u=g.p3
m=g.R8
m.toString
u.ts(s,v,q,8*m)}return!0},
bvm(d,e,f,g){if(f<=0||g<=0)return!1
this.bbC(e,f,g)
this.bbB(e,f,g)
return!0},
a7Y(d){var x
if((d&-4194304)>>>0===0)x=D.c.W(d,14)
else x=d<0?0:255
return x},
a_4(d,e,f,g){var x=19077*d
g.m(0,0,this.a7Y(x+26149*f+-3644112))
g.m(0,1,this.a7Y(x-6419*e-13320*f+2229552))
g.m(0,2,this.a7Y(x+33050*e+-4527440))},
ZN(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=new A.c4I(),a0=b3-1,a1=D.c.W(a0,1),a2=d.$2(J.v(a7.a,a7.d),J.v(a8.a,a8.d)),a3=d.$2(J.v(a9.a,a9.d),J.v(b0.a,b0.d)),a4=D.c.W(3*a2+a3+131074,2)
f.a_4(J.v(a5.a,a5.d),a4&255,a4>>>16,b1)
b1.m(0,3,255)
x=a6!=null
if(x){a4=D.c.W(3*a3+a2+131074,2)
w=J.v(a6.a,a6.d)
b2.toString
f.a_4(w,a4&255,a4>>>16,b2)
b2.m(0,3,255)}for(v=1;v<=a1;++v,a3=t,a2=u){u=d.$2(J.v(a7.a,a7.d+v),J.v(a8.a,a8.d+v))
t=d.$2(J.v(a9.a,a9.d+v),J.v(b0.a,b0.d+v))
s=a2+u+a3+t+524296
r=D.c.W(s+2*(u+a3),3)
q=D.c.W(s+2*(a2+t),3)
a4=D.c.W(r+a2,1)
p=D.c.W(q+u,1)
w=2*v
o=w-1
n=J.v(a5.a,a5.d+o)
m=a4&255
l=a4>>>16
k=o*4
j=A.cu(b1,e,k)
n=19077*n
i=n+26149*l+-3644112
if((i&-4194304)>>>0===0)h=D.c.W(i,14)
else h=i<0?0:255
J.c_(j.a,j.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.W(l,14)
else h=l<0?0:255
J.c_(j.a,j.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.W(n,14)
else h=n<0?0:255
J.c_(j.a,j.d+2,h)
J.c_(j.a,j.d+3,255)
n=J.v(a5.a,a5.d+w)
m=p&255
l=p>>>16
j=w*4
i=A.cu(b1,e,j)
n=19077*n
g=n+26149*l+-3644112
if((g&-4194304)>>>0===0)h=D.c.W(g,14)
else h=g<0?0:255
J.c_(i.a,i.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.W(l,14)
else h=l<0?0:255
J.c_(i.a,i.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.W(n,14)
else h=n<0?0:255
J.c_(i.a,i.d+2,h)
J.c_(i.a,i.d+3,255)
if(x){a4=D.c.W(q+a3,1)
p=D.c.W(r+t,1)
o=J.v(a6.a,a6.d+o)
n=a4&255
m=a4>>>16
b2.toString
k=A.cu(b2,e,k)
o=19077*o
l=o+26149*m+-3644112
if((l&-4194304)>>>0===0)h=D.c.W(l,14)
else h=l<0?0:255
J.c_(k.a,k.d,h)
m=o-6419*n-13320*m+2229552
if((m&-4194304)>>>0===0)h=D.c.W(m,14)
else h=m<0?0:255
J.c_(k.a,k.d+1,h)
o=o+33050*n+-4527440
if((o&-4194304)>>>0===0)h=D.c.W(o,14)
else h=o<0?0:255
J.c_(k.a,k.d+2,h)
J.c_(k.a,k.d+3,255)
w=J.v(a6.a,a6.d+w)
o=p&255
n=p>>>16
j=A.cu(b2,e,j)
w=19077*w
m=w+26149*n+-3644112
if((m&-4194304)>>>0===0)h=D.c.W(m,14)
else h=m<0?0:255
J.c_(j.a,j.d,h)
n=w-6419*o-13320*n+2229552
if((n&-4194304)>>>0===0)h=D.c.W(n,14)
else h=n<0?0:255
J.c_(j.a,j.d+1,h)
w=w+33050*o+-4527440
if((w&-4194304)>>>0===0)h=D.c.W(w,14)
else h=w<0?0:255
J.c_(j.a,j.d+2,h)
J.c_(j.a,j.d+3,255)}}if((b3&1)===0){a4=D.c.W(3*a2+a3+131074,2)
w=J.v(a5.a,a5.d+a0)
o=a0*4
n=A.cu(b1,e,o)
f.a_4(w,a4&255,a4>>>16,n)
n.m(0,3,255)
if(x){a4=D.c.W(3*a3+a2+131074,2)
a0=J.v(a6.a,a6.d+a0)
b2.toString
o=A.cu(b2,e,o)
f.a_4(a0,a4&255,a4>>>16,o)
o.m(0,3,255)}}},
bbB(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.xr
if(o==null)return
x=A.cu(o,null,0)
if(d===0){w=f-1
v=d}else{v=d-1
x.d=x.d-p.b.a
w=f}o=p.Q
o.toString
u=p.as
if(o+d+f===u){u.toString
w=u-o-v}for(o=p.b,t=0;t<w;++t){for(u=t+v,s=0;s<e;++s){r=J.v(x.a,x.d+s)
q=p.d.a
q=q==null?null:q.eu(s,u,null);(q==null?new A.h5():q).saV(0,r)}x.d=x.d+o.a}},
bbC(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=A.dl(J.dz(l.d.gar(0),0,null),!1,k,d*j.a*4),h=l.to
h===$&&C.a()
x=A.cu(h,k,0)
h=l.x1
h===$&&C.a()
w=A.cu(h,k,0)
h=l.x2
h===$&&C.a()
v=A.cu(h,k,0)
u=d+f
t=D.c.W(e+1,1)
s=j.a*4
j=l.rx
j===$&&C.a()
r=A.cu(j,k,0)
j=l.ry
j===$&&C.a()
q=A.cu(j,k,0)
if(d===0){l.ZN(x,k,w,v,w,v,i,k,e)
p=f}else{j=l.RG
j===$&&C.a()
l.ZN(j,x,r,q,w,v,A.cu(i,k,-s),i,e)
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
l.ZN(A.cu(x,k,-n),x,r,q,w,v,A.cu(i,k,h),i,e)}j=x.d
h=l.p4
h.toString
x.d=j+h
j=l.Q
j.toString
h=l.as
h.toString
if(j+u<h){j=l.RG
j===$&&C.a()
j.Bj(0,e,x)
l.rx.Bj(0,t,w)
l.ry.Bj(0,t,v);--p}else if((u&1)===0)l.ZN(x,k,w,v,w,v,A.cu(i,k,s),k,e)
return p},
b9r(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.b,m=n.a,l=n.b
if(d<0||e<=0||d+e>l)return null
if(d===0){n=m*l
o.ae=new Uint8Array(n)
x=o.X
w=new A.c5w(x,m,l)
v=x.cM()
u=w.d=v&3
w.e=D.c.W(v,2)&3
w.f=D.c.W(v,4)&3
w.r=D.c.W(v,6)&3
if(w.geC())if(u===0){if(x.c-x.d<n)w.r=1}else if(u===1){t=new A.aLL(B.rj,C.b([],y.J))
t.a=m
t.b=l
n=C.b([],y.A)
u=C.b([],y.F)
s=new Uint32Array(2)
r=new A.aLg(x,s)
s=r.d=J.dz(D.bK.gar(s),0,null)
q=x.cM()
s.$flags&2&&C.L(s)
s[0]=q
q=x.cM()
s.$flags&2&&C.L(s)
s[1]=q
q=x.cM()
s.$flags&2&&C.L(s)
s[2]=q
q=x.cM()
s.$flags&2&&C.L(s)
s[3]=q
q=x.cM()
s.$flags&2&&C.L(s)
s[4]=q
q=x.cM()
s.$flags&2&&C.L(s)
s[5]=q
q=x.cM()
s.$flags&2&&C.L(s)
s[6]=q
x=x.cM()
s.$flags&2&&C.L(s)
s[7]=x
u=new A.aza(r,t,n,u)
u.db=m
w.x=u
u.Nf(m,l,!0)
n=w.x
x=n.ax
if(x.length===1&&x[0].a===B.agB&&n.bnr()){w.y=!0
n=w.x
x=n.c
p=x.a*x.b
n.cx=0
x=D.c.av(p,4)
x=new Uint8Array(p+(4-x))
n.CW=x
n.ch=J.q2(D.H.gar(x),0,null)}else{w.y=!1
w.x.apj()}}else w.r=1
o.a2=w}n=o.a2
n===$&&C.a()
if(!n.w){x=o.ae
x===$&&C.a()
if(!n.Qr(0,d,e,x))return null}n=o.ae
n===$&&C.a()
return A.dl(n,!1,null,d*m)},
btR(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.fr.b,a3=a1.k1
a3===$&&C.a()
x=a1.dy[a3]
a3=a1.ba
a3===$&&C.a()
w=a3[a1.y1]
v=A.dl(w.a,!1,null,0)
a3=a1.k3
a3===$&&C.a()
u=a3[0]
v.bUR(0,v.c-v.d,0)
a3=w.b
a3===$&&C.a()
if(!a3){t=A.dl(new Int16Array(16),!1,null,0)
a3=a4.b
s=u.b
r=a1.a9_(a5,a2[1],a3+s,x.b,0,t)
a4.b=u.b=r>0?1:0
if(r>1)a1.bCD(t,v)
else{q=D.c.W(J.v(t.a,t.d)+3,3)
for(p=0;p<256;p+=16)J.c_(v.a,v.d+p,q)}o=a2[0]
n=1}else{o=a2[3]
n=0}m=a4.a&15
l=u.a&15
for(k=0,j=0;j<4;++j){i=l&1
for(h=0,g=0;g<4;++g){r=a1.a9_(a5,o,i+(m&1),x.a,n,v)
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
m=D.c.i3(a4.a,a3)
l=D.c.i3(u.a,a3)
for(h=0,j=0;j<2;++j){i=l&1
for(g=0;g<2;++g){r=a1.a9_(a5,a2[2],i+(m&1),x.c,0,v)
i=r>0?1:0
m=m>>>1|i<<3
a3=J.v(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=(h<<2|a3)>>>0
v.d+=16}m=m>>>2
l=l>>>1|i<<5}d=(d|D.c.eA(h,4*a0))>>>0
e=(e|D.c.eA(m<<4>>>0,a0))>>>0
f=(f|D.c.eA(l&240,a0))>>>0}a4.a=e
u.a=f
w.e=k
w.f=d
if((d&43690)===0)x.toString
return(k|d)>>>0===0},
bCD(d,e){var x,w,v,u,t,s,r,q,p,o,n=new Int32Array(16)
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
u=D.c.W(v+s,3)
J.c_(e.a,e.d+p,u)
u=D.c.W(q+r,3)
J.c_(e.a,e.d+(p+16),u)
u=D.c.W(v-s,3)
J.c_(e.a,e.d+(p+32),u)
u=D.c.W(q-r,3)
J.c_(e.a,e.d+(p+48),u)
p+=64}},
bec(d,e){var x,w,v,u,t,s
if(d.iY(e[3])===0)x=d.iY(e[4])===0?2:3+d.iY(e[5])
else if(d.iY(e[6])===0)x=d.iY(e[7])===0?5+d.iY(159):7+2*d.iY(165)+d.iY(145)
else{w=d.iY(e[8])
v=2*w+d.iY(e[9+w])
u=B.aHK[v]
t=u.length
for(x=0,s=0;s<t;++s)x+=x+d.iY(u[s])
x+=3+D.c.eA(8,v)}return x},
a9_(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=e[h].a[f]
for(;h<16;h=x){if(d.iY(p[0])===0)return h
for(;d.iY(p[1])===0;){++h
p=e[B.WN[h]].a[0]
if(h===16)return 16}x=h+1
w=e[B.WN[x]].a
if(d.iY(p[2])===0){p=w[1]
v=1}else{v=this.bec(d,p)
p=w[2]}u=B.aM9[h]
t=d.b
t===$&&C.a()
s=d.apF(D.c.W(t,1))
t=d.b
r=B.VT[t]
d.b=B.VR[t]
t=d.d
t===$&&C.a()
d.d=t-r
t=s!==0?-v:v
q=g[h>0?1:0]
J.c_(i.a,i.d+u,t*q)}return 16},
btM(){var x,w,v,u,t,s,r,q,p,o=this,n=o.y1,m=4*n,l=o.go,k=o.id,j=o.ba
j===$&&C.a()
x=j[n]
n=o.c
n===$&&C.a()
n=n.iY(145)===0
x.b=n
if(!n){if(o.c.iY(156)!==0)w=o.c.iY(128)!==0?1:3
else w=o.c.iY(163)!==0?2:0
n=x.c
n.$flags&2&&C.L(n)
n[0]=w
l.toString
D.H.mC(l,m,m+4,w)
D.H.mC(k,0,4,w)}else{v=x.c
for(n=k.$flags|0,u=0,t=0;t<4;++t,u=p){w=k[t]
for(s=0;s<4;++s){j=m+s
r=B.aMn[l[j]][w]
q=B.UE[o.c.iY(r[0])]
for(;q>0;)q=B.UE[2*q+o.c.iY(r[q])]
w=-q
l.$flags&2&&C.L(l)
l[j]=w}p=u+4
l.toString
D.H.el(v,u,p,l,m)
n&2&&C.L(k)
k[t]=w}}if(o.c.iY(142)===0)n=0
else if(o.c.iY(114)===0)n=2
else n=o.c.iY(183)!==0?1:3
x.d=n}}
A.ads.prototype={
dM(d){var x,w
for(x=0;w=d-1,d>0;d=w)x=(x|D.c.f7(this.iY(128),w))>>>0
return x},
LV(d){var x=this.dM(d)
return this.dM(1)===1?-x:x},
iY(d){var x,w=this,v=w.b
v===$&&C.a()
x=w.apF(D.c.W(v*d,8))
if(w.b<=126)w.bzs()
return x},
apF(d){var x,w,v,u,t,s=this,r=s.d
r===$&&C.a()
if(r<0){x=s.a
w=x.c
v=x.d
if(w-v>=1){u=x.cM()
r=s.c
r===$&&C.a()
s.c=(u|r<<8)>>>0
r=s.d+8
s.d=r
t=r}else{if(v<w){r=x.cM()
x=s.c
x===$&&C.a()
s.c=(r|x<<8)>>>0
x=s.d+8
s.d=x
r=x}else if(!s.e){x=s.c
x===$&&C.a()
s.c=x<<8>>>0
r+=8
s.d=r
s.e=!0}t=r}}else t=r
r=s.c
r===$&&C.a()
if(D.c.oR(r,t)>d){x=s.b
x===$&&C.a()
w=d+1
s.b=x-w
s.c=r-D.c.f7(w,t)
return 1}else{s.b=d
return 0}},
bzs(){var x,w=this,v=w.b
v===$&&C.a()
x=B.VT[v]
w.b=B.VR[v]
v=w.d
v===$&&C.a()
w.d=v-x}}
A.c4w.prototype={
amZ(d,e,f){var x,w=A.cu(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x
if(this.awX(w,e,f))this.Wj(w,e)}},
amY(d,e,f){var x,w=A.cu(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x*e
if(this.awX(w,1,f))this.Wj(w,1)}},
aW1(d,e,f){var x,w,v=A.cu(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.amZ(v,e,f)}},
aVZ(d,e,f){var x,w=A.cu(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.amY(w,e,f)}},
c1t(d,e,f,g,h){var x,w,v=A.cu(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.H5(v,e,1,16,f,g,h)}},
bPZ(d,e,f,g,h){var x,w=A.cu(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.H5(w,1,e,16,f,g,h)}},
H6(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=A.cu(d,null,0)
for(x=-3*e,w=-2*e,v=-e,u=2*e;t=g-1,g>0;g=t){if(this.awY(h,e,a0,a1))if(this.avq(h,e,a2))this.Wj(h,e)
else{s=J.v(h.a,h.d+x)
r=J.v(h.a,h.d+w)
q=J.v(h.a,h.d+v)
p=J.v(h.a,h.d)
o=J.v(h.a,h.d+e)
n=J.v(h.a,h.d+u)
m=$.cWX()
l=m[1020+3*(p-q)+m[1020+r-o]]
m=D.c.W(27*l+63,7)
k=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.W(18*l+63,7)
j=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.W(9*l+63,7)
i=(m&2147483647)-((m&2147483648)>>>0)
m=$.rc()[255+s+i]
J.c_(h.a,h.d+x,m)
m=$.rc()[255+r+j]
J.c_(h.a,h.d+w,m)
m=$.rc()[255+q+k]
J.c_(h.a,h.d+v,m)
m=$.rc()[255+p-k]
J.c_(h.a,h.d,m)
m=$.rc()[255+o-j]
J.c_(h.a,h.d+e,m)
m=$.rc()[255+n-i]
J.c_(h.a,h.d+u,m)}h.d+=f}},
H5(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=A.cu(d,null,0)
for(x=-2*e,w=-e;v=g-1,g>0;g=v){if(this.awY(k,e,h,i))if(this.avq(k,e,j))this.Wj(k,e)
else{u=J.v(k.a,k.d+x)
t=J.v(k.a,k.d+w)
s=J.v(k.a,k.d)
r=J.v(k.a,k.d+e)
q=3*(s-t)
p=$.cWY()
o=D.c.W(q+4,3)
n=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.W(q+3,3)
m=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.W(n+1,1)
l=(o&2147483647)-((o&2147483648)>>>0)
o=$.rc()[255+u+l]
J.c_(k.a,k.d+x,o)
o=$.rc()[255+t+m]
J.c_(k.a,k.d+w,o)
o=$.rc()[255+s-n]
J.c_(k.a,k.d,o)
o=$.rc()[255+r-l]
J.c_(k.a,k.d+e,o)}k.d+=f}},
Wj(d,e){var x=J.v(d.a,d.d+-2*e),w=-e,v=J.v(d.a,d.d+w),u=J.v(d.a,d.d),t=J.v(d.a,d.d+e),s=3*(u-v)+$.cWX()[1020+x-t],r=$.cWY(),q=r[112+D.c.lA(D.c.W(s+4,3),32)],p=r[112+D.c.lA(D.c.W(s+3,3),32)]
d.m(0,w,$.rc()[255+v+p])
d.m(0,0,$.rc()[255+u-q])},
avq(d,e,f){var x=J.v(d.a,d.d+-2*e),w=J.v(d.a,d.d+-e),v=J.v(d.a,d.d),u=J.v(d.a,d.d+e),t=$.b4p()
return t[255+x-w]>f||t[255+u-v]>f},
awX(d,e,f){var x=J.v(d.a,d.d+-2*e),w=J.v(d.a,d.d+-e),v=J.v(d.a,d.d),u=J.v(d.a,d.d+e)
return 2*$.b4p()[255+w-v]+$.cWW()[255+x-u]<=f},
awY(d,e,f,g){var x=J.v(d.a,d.d+-4*e),w=J.v(d.a,d.d+-3*e),v=J.v(d.a,d.d+-2*e),u=J.v(d.a,d.d+-e),t=J.v(d.a,d.d),s=J.v(d.a,d.d+e),r=J.v(d.a,d.d+2*e),q=J.v(d.a,d.d+3*e),p=$.b4p(),o=255+v
if(2*p[255+u-t]+$.cWW()[o-s]>f)return!1
return p[255+x-w]<=g&&p[255+w-v]<=g&&p[o-u]<=g&&p[255+q-r]<=g&&p[255+r-s]<=g&&p[255+s-t]<=g},
wG(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=new Int32Array(16)
for(x=0,w=0,v=0;v<4;++v){u=x+8
t=J.v(d.a,d.d+x)+J.v(d.a,d.d+u)
s=J.v(d.a,d.d+x)-J.v(d.a,d.d+u)
u=x+4
r=D.c.W(J.v(d.a,d.d+u)*35468,16)
q=x+12
p=D.c.W(J.v(d.a,d.d+q)*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.c.W(J.v(d.a,d.d+u)*85627,16)
q=D.c.W(J.v(d.a,d.d+q)*35468,16)
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
r=D.c.W(u*35468,16)
q=j[w+12]
p=D.c.W(q*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.c.W(u*85627,16)
q=D.c.W(q*35468,16)
n=(u&2147483647)-((u&2147483648)>>>0)+((q&2147483647)-((q&2147483648)>>>0))
A.HA(e,l,0,0,t+n)
A.HA(e,l,1,0,s+o)
A.HA(e,l,2,0,s-o)
A.HA(e,l,3,0,t-n);++w
l+=32}},
Lt(d,e,f,g){this.wG(e,f)
if(g)this.wG(A.cu(e,null,16),A.cu(f,null,4))},
Th(d,e){var x,w,v=J.v(d.a,d.d)+4
for(x=0;x<4;++x)for(w=0;w<4;++w)A.HA(e,0,w,x,v)},
aOL(d,e){var x=this,w=null
if(J.v(d.a,d.d)!==0)x.Th(d,e)
if(J.v(d.a,d.d+16)!==0)x.Th(A.cu(d,w,16),A.cu(e,w,4))
if(J.v(d.a,d.d+32)!==0)x.Th(A.cu(d,w,32),A.cu(e,w,128))
if(J.v(d.a,d.d+48)!==0)x.Th(A.cu(d,w,48),A.cu(e,w,132))}}
A.c4B.prototype={}
A.c4F.prototype={}
A.c4H.prototype={}
A.adr.prototype={}
A.c4G.prototype={}
A.c4x.prototype={}
A.OD.prototype={}
A.aLi.prototype={}
A.aLk.prototype={}
A.aLj.prototype={}
A.aLl.prototype={}
A.adt.prototype={
Qs(){var x,w=this.b
if(w.jQ(8)!==47)return!1
x=this.c
x.f=B.Be
x.a=w.jQ(14)+1
x.b=w.jQ(14)+1
x.d=w.jQ(1)!==0
if(w.jQ(3)!==0)return!1
return!0},
p9(d){var x,w,v,u,t,s=this,r=null
s.e=0
if(!s.Qs())return r
x=s.c
s.Nf(x.a,x.b,!0)
s.apj()
w=x.a
s.d=A.iO(r,r,B.ai,0,B.bD,x.b,r,0,4,r,B.ai,w,!1)
w=s.ch
w.toString
v=x.a
u=x.b
if(!s.a8j(w,v,u,u,s.gbv3()))return r
x=x.w
if(x.length!==0){t=A.dl(new C.f0(x),!1,r,0)
x=s.d
x.toString
x.e=A.d7V(t)}return s.d},
apj(){var x,w=this,v=w.c,u=v.a
v=u*v.b+u
x=new Uint32Array(v+u*16)
w.ch=x
w.CW=J.dz(D.bK.gar(x),0,null)
w.cx=v
return!0},
bvW(d){var x,w,v,u=this,t=u.b,s=t.jQ(2),r=u.ay,q=D.c.eA(1,s)
if((r&q)>>>0!==0)return!1
u.ay=(r|q)>>>0
x=new A.aLh(B.agA)
u.ax.push(x)
r=B.aRu[s]
x.a=r
x.b=d[0]
x.c=d[1]
switch(r.a){case 0:case 1:t=t.jQ(3)+2
x.e=t
x.d=u.Nf(A.HB(x.b,t),A.HB(x.c,x.e),!1)
break
case 3:w=t.jQ(8)+1
if(w>16)v=0
else if(w>4)v=1
else{t=w>2?2:3
v=t}d[0]=A.HB(x.b,v)
x.e=v
x.d=u.Nf(w,1,!1)
u.bc6(w,x)
break
case 2:break}return!0},
Nf(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(f)for(x=p.b,w=y.t,v=e,u=d;x.jQ(1)!==0;){t=C.b([u,v],w)
if(!p.bvW(t))throw C.p(A.cp("Invalid Transform"))
u=t[0]
v=t[1]}else{v=e
u=d}x=p.b
if(x.jQ(1)!==0){s=x.jQ(4)
if(!(s>=1&&s<=11))throw C.p(A.cp("Invalid Color Cache"))}else s=0
if(!p.bvK(u,v,s,f))throw C.p(A.cp("Invalid Huffman Codes"))
if(s>0){x=D.c.eA(1,s)
p.r=x
p.w=new A.c4C(new Uint32Array(x),32-s)}else p.r=0
x=p.c
x.a=u
x.b=v
r=p.y
p.z=A.HB(u,r)
p.x=r===0?4294967295:D.c.eA(1,r)-1
if(f){p.e=0
return null}q=new Uint32Array(u*v)
if(!p.a8j(q,u,v,v,null))throw C.p(A.cp("Failed to decode image data."))
p.e=0
return q},
a8j(a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=a0.e,a2=D.c.hR(a1,a9),a3=D.c.av(a1,a9),a4=a0.atP(a3,a2),a5=a0.e,a6=a9*b0,a7=a9*b1
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
if((a3&v)>>>0===0){p=a0.NF(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(u.a>=32)u.Dt()
r=a4.a
o=r[0].Bw(u)
n=0
if(o<256){m=r[1].Bw(u)
if(u.a>=32)u.Dt()
l=A.djL(r[2].Bw(u),o,m,r[3].Bw(u))
a1&2&&C.L(a8)
a8[a5]=l;++a5;++a3
if(a3>=a9){++a2
if(D.c.av(a2,16)===0&&t)b2.$1(a2)
if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.c.hv(j*506832829>>>0,r)
k&2&&C.L(q)
q[i]=j;++s}a3=n}}else if(o<280){h=a0.WS(o-256)
g=r[4].Bw(u)
if(u.a>=32)u.Dt()
f=a0.ay4(a9,a0.WS(g))
if(a5<f||a6-a5<h)return!1
else{e=a5-f
for(d=0;d<h;++d){r=a8[e+d]
a1&2&&C.L(a8)
a8[a5+d]=r}a5+=h}a3+=h
for(;a3>=a9;){a3-=a9;++a2
if(D.c.av(a2,16)===0&&t)b2.$1(a2)}if(a5<a7){if((a3&v)>>>0!==0){p=a0.NF(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.c.hv(j*506832829>>>0,r)
k&2&&C.L(q)
q[i]=j;++s}}}else if(o<x){for(;s<a5;){r=a8[s]
i=D.c.hv(r*506832829>>>0,w.b)
q=w.a
q.$flags&2&&C.L(q)
q[i]=r;++s}r=w.a
q=r[o-280]
a1&2&&C.L(a8)
a8[a5]=q;++a5;++a3
if(a3>=a9){++a2
if(D.c.av(a2,16)===0&&t)b2.$1(a2)
for(q=w.b,k=r.$flags|0;s<a5;){j=a8[s]
i=D.c.hv(j*506832829>>>0,q)
k&2&&C.L(r)
r[i]=j;++s}a3=n}}else return!1}if(t)b2.$1(a2)
if(r.d>=q&&u.a>=64&&a5<a6)return!1
a0.e=a5
return!0},
bnr(){var x,w,v,u
if(this.r>0)return!1
for(x=this.as,w=this.at,v=0;v<x;++v){u=w[v].a
if(u[1].f>1)return!1
if(u[2].f>1)return!1
if(u[3].f>1)return!1}return!0},
bcc(d){var x,w,v,u,t,s,r=this,q=r.f,p=d-q
if(p<=0)return
x=r.c
r.aps(p,x.a*q)
w=x.a
v=w*p
u=w*r.f
x=r.ch
x.toString
q=r.cx
q.toString
t=A.dl(x,!1,null,q)
for(s=0;s<v;++s){q=r.cy
q.toString
x=D.c.W(J.v(t.a,t.d+s),8)
q.$flags&2&&C.L(q)
q[u+s]=x&255}r.f=d},
b93(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=o.e,m=D.c.hR(n,d),l=D.c.av(n,d),k=o.atP(l,m),j=o.e,i=d*e,h=d*f,g=o.x
n=o.b
while(!0){x=n.b
if(!(!(x.d>=x.c&&n.a>=64)&&j<h))break
if((l&g)>>>0===0){w=o.NF(o.Q,o.z,o.y,l,m)
k=o.at[w]}if(n.a>=32)n.Dt()
x=k.a
v=x[0].Bw(n)
if(v<256){x=o.CW
x===$&&C.a()
x.$flags&2&&C.L(x)
x[j]=v;++j;++l
if(l>=d){++m
if(D.c.av(m,16)===0)o.a8J(m)
l=0}}else if(v<280){u=o.WS(v-256)
t=x[4].Bw(n)
if(n.a>=32)n.Dt()
s=o.ay4(d,o.WS(t))
if(j>=s&&i-j>=u)for(x=o.CW,r=0;r<u;++r){x===$&&C.a()
q=j+r
p=x[q-s]
x.$flags&2&&C.L(x)
x[q]=p}else{o.e=j
return!0}j+=u
l+=u
for(;l>=d;){l-=d;++m
if(D.c.av(m,16)===0)o.a8J(m)}if(j<h&&(l&g)>>>0!==0){w=o.NF(o.Q,o.z,o.y,l,m)
k=o.at[w]}}else return!1}o.a8J(m)
o.e=j
return!0},
a8J(d){var x,w,v,u=this,t=u.f,s=d-t,r=u.CW
r===$&&C.a()
x=A.dl(r,!1,null,u.c.a*t)
if(s>0){w=u.f
t=u.cy
t.toString
r=u.db
r.toString
v=A.dl(t,!1,null,r*w)
u.ax[0].bIV(w,w+s,x,v)}u.f=d},
bv4(d){var x,w,v,u,t,s=this,r=s.c,q=r.a,p=s.f,o=d-p
if(o<=0)return
s.aps(o,q*p)
q=s.cx
q.toString
x=s.f
w=q
v=0
for(;v<o;++v,++x)for(u=0;u<r.a;++u,++w){t=s.ch[w]
q=s.d.a
if(q!=null)q.kY(u,x,t>>>16&255,t>>>8&255,t&255,t>>>24&255)}s.f=d},
aps(d,e){var x,w,v,u=this,t=u.ax,s=t.length,r=u.c.a,q=u.f,p=q+d,o=u.cx
o.toString
x=u.ch
x.toString
D.bK.el(x,o,o+r*d,x,e)
for(w=e;v=s-1,s>0;w=o,s=v){r=t[v]
x=u.ch
x.toString
r.bSE(q,p,x,w,x,o)}},
bvK(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=1
if(g&&l.b.jQ(1)!==0){x=l.b.jQ(3)+2
w=A.HB(d,x)
v=A.HB(e,x)
u=w*v
t=l.Nf(w,v,!1)
l.y=x
for(s=0;s<u;++s){r=t[s]>>>8&65535
t.$flags&2&&C.L(t)
t[s]=r
if(r>=k)k=r+1}}else t=null
q=J.jM(k,y.R)
for(p=0;p<k;++p)q[p]=A.dwX()
for(o=f>0,s=0;s<k;++s)for(n=0;n<5;++n){m=B.aIY[n]
if(n===0&&o)m+=D.c.eA(1,f)
if(!l.bvI(m,q[s].a[n]))return!1}l.Q=t
l.as=k
l.at=q
return!0},
bvI(d,e){var x,w,v,u,t,s,r,q,p,o=this.b
if(o.jQ(1)!==0){x=y.t
w=C.b([0,0],x)
v=C.b([0,0],x)
u=C.b([0,0],x)
t=o.jQ(1)+1
w[0]=o.jQ(o.jQ(1)===0?1:8)
v[0]=0
x=t-1
u[0]=x
if(t===2){w[1]=o.jQ(8)
v[1]=1
u[1]=x}s=e.bHL(u,v,w,d,t)}else{r=new Int32Array(19)
q=o.jQ(4)+4
if(q>19)return!1
u=new Int32Array(d)
for(p=0;p<q;++p)r[B.aLy[p]]=o.jQ(3)
s=this.bvJ(r,d,u)
if(s)s=e.aFb(u,d)}return s},
bvJ(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.d8W()
if(!j.aFb(d,19))return!1
x=this.b
if(x.jQ(1)!==0){w=2+x.jQ(2+2*x.jQ(3))
if(w>e)return!1}else w=e
for(v=f.$flags|0,u=0,t=8;u<e;w=s){s=w-1
if(w===0)break
if(x.a>=32)x.Dt()
r=j.Bw(x)
if(r<16){q=u+1
v&2&&C.L(f)
f[u]=r
if(r!==0)t=r
u=q}else{p=r-16
o=B.aEX[p]
n=B.aFi[p]
m=x.jQ(o)+n
if(u+m>e)return!1
else{l=r===16?t:0
for(;k=m-1,m>0;m=k,u=q){q=u+1
v&2&&C.L(f)
f[u]=l}}}}return!0},
WS(d){var x
if(d<4)return d+1
x=D.c.W(d-2,1)
return D.c.eA(2+(d&1),x)+this.b.jQ(x)+1},
ay4(d,e){var x,w
if(e>120)return e-120
else{x=B.aJf[e-1]
w=(x>>>4)*d+(8-(x&15))
return w>=1?w:1}},
bc6(d,e){var x,w,v,u,t,s,r=D.c.eA(1,D.c.i3(8,e.e)),q=new Uint32Array(r),p=e.d
p.toString
x=J.dz(D.bK.gar(p),0,null)
w=J.dz(D.bK.gar(q),0,null)
q[0]=e.d[0]
v=4*d
for(p=w.$flags|0,u=4;u<v;++u){t=x[u]
s=w[u-4]
p&2&&C.L(w)
w[u]=t+s&255}for(v=4*r;u<v;++u){p&2&&C.L(w)
w[u]=0}e.d=q
return!0},
NF(d,e,f,g,h){if(f===0)return 0
d.toString
return d[e*D.c.W(h,f)+D.c.W(g,f)]},
atP(d,e){var x=this,w=x.NF(x.Q,x.z,x.y,d,e)
return x.at[w]}}
A.aza.prototype={
bP7(d){return this.bcc(d)}}
A.aLg.prototype={
aMW(){var x,w,v=this.a
if(v<32){x=this.c
w=D.c.hv(x[0],v)+((x[1]&B.Gh[v])>>>0)*(B.Gh[32-v]+1)}else{x=this.c
w=v===32?x[1]:D.c.hv(x[1],v-32)}return w},
jQ(d){var x,w=this,v=w.b
if(!(v.d>=v.c&&w.a>=64)&&d<25){v=w.aMW()
x=B.Gh[d]
w.a+=d
w.Dt()
return(v&x)>>>0}else throw C.p(A.cp("Not enough data in input."))},
Dt(){var x,w,v,u=this,t=u.b,s=u.c,r=s.$flags|0,q=t.c
while(!0){if(!(u.a>=8&&t.d<q))break
x=J.v(t.a,t.d++)
w=s[0]
v=s[1]
r&2&&C.L(s)
s[0]=(w>>>8)+(v&255)*16777216
s[1]=v>>>8
s[1]=(s[1]|x*16777216)>>>0
u.a-=8}}}
A.c4C.prototype={}
A.OE.prototype={
J(){return"VP8LImageTransformType."+this.b}}
A.aLh.prototype={
bSE(d,e,f,g,h,i){var x,w,v,u,t=this,s=t.b
switch(t.a.a){case 2:t.bFU(h,i,i+(e-d)*s)
break
case 0:t.bYF(d,e,h,i)
if(e!==t.c){x=i-s
D.bK.el(h,x,x+s,f,i+(e-d-1)*s)}break
case 1:t.bIW(d,e,h,i)
break
case 3:if(g===i&&t.e>0){w=e-d
v=w*A.HB(s,t.e)
u=i+w*s-v
D.bK.el(h,u,u+v,f,i)
t.aGh(d,e,f,u,h,i)}else t.aGh(d,e,f,g,h,i)
break}},
bIV(d,e,f,g){var x,w,v,u,t,s,r=this.e,q=D.c.i3(8,r),p=this.b,o=this.d
if(q<8){x=D.c.eA(1,r)-1
w=D.c.eA(1,q)-1
for(v=d;v<e;++v)for(u=0,t=0;t<p;++t){if((t&x)>>>0===0){u=J.v(f.a,f.d);++f.d}r=o[(u&w)>>>0]
J.c_(g.a,g.d,r>>>8&255);++g.d
u=D.c.W(u,q)}}else for(v=d;v<e;++v)for(t=0;t<p;++t){s=J.v(f.a,f.d);++f.d
r=o[s]
J.c_(g.a,g.d,r>>>8&255);++g.d}},
aGh(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=this.e,o=D.c.i3(8,p),n=this.b,m=this.d
if(o<8){x=D.c.eA(1,p)-1
w=D.c.eA(1,o)-1
for(p=h.$flags|0,v=d;v<e;++v)for(u=0,t=0;t<n;++t,i=r){if((t&x)>>>0===0){s=g+1
u=f[g]>>>8&255
g=s}r=i+1
q=m[u&w]
p&2&&C.L(h)
h[i]=q
u=D.c.i3(u,o)}}else for(p=h.$flags|0,v=d;v<e;++v)for(t=0;t<n;++t,i=r,g=s){r=i+1
s=g+1
q=m[f[g]>>>8&255]
p&2&&C.L(h)
h[i]=q}},
bIW(a2,a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.b,e=g.e,d=D.c.eA(1,e)-1,a0=A.HB(f,e),a1=D.c.W(a2,g.e)*a0
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
o=$.oS()
o.$flags&2&&C.L(o)
o[0]=p
p=$.q1()
n=p[0]
o[0]=q
m=p[0]
l=$.b4r()
l.$flags&2&&C.L(l)
l[0]=n*m
k=$.cX_()
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
e&2&&C.L(a4)
a4[s]=(r&4278255360|j<<16|((r&255)+(i>>>5)>>>0)+(h>>>5)>>>0&255)>>>0}a5+=f;++x
if((x&d)>>>0===0)a1+=a0}},
bYF(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=this,n=o.b
if(d===0){A.c4D(f,g,4278190080)
for(x=1;x<n;++x){w=g+x
A.c4D(f,w,f[w-1])}g+=n;++d}w=o.e
v=D.c.eA(1,w)-1
u=A.HB(n,w)
t=D.c.W(d,o.e)*u
for(s=d;s<e;){A.c4D(f,g,f[g-n])
r=t+1
q=$.df0[o.d[t]>>>8&15]
for(x=1;x<n;++x){if((x&v)>>>0===0){p=r+1
q=$.df0[o.d[r]>>>8&15]
r=p}w=g+x
A.c4D(f,w,q.$3(f,f[w-1],w-n))}g+=n;++s
if((s&v)>>>0===0)t+=u}},
bFU(d,e,f){var x,w,v,u
for(x=d.$flags|0;e<f;e=u){w=d[e]
v=w>>>8&255
u=e+1
x&2&&C.L(d)
d[e]=(w&4278255360|(w&16711935)+(v<<16|v)&16711935)>>>0}}}
A.c5w.prototype={
geC(){var x=this,w=x.d
if(w>1||x.e>=4||x.f>1||x.r!==0)return!1
return!0},
Qr(d,e,f,g){var x,w,v,u,t,s,r=this
if(!r.geC())return!1
x=B.aSe[r.e]
if(r.d===0){w=r.b
v=e*w
u=r.a
D.H.el(g,v,f*w,u.a,u.d-u.b+v)}else{w=e+f
u=r.x
u===$&&C.a()
u.cy=g
t=u.c
if(r.y)w=u.b93(t.a,t.b,w)
else{s=u.ch
s.toString
u=u.a8j(s,t.a,t.b,w,u.gbP6())
w=u}if(!w)return!1}if(x!=null){w=r.b
x.$6(w,r.c,w,e,f,g)}if(r.f===1)if(!r.ba4(g,r.b,r.c,e,f))return!1
if(e+f===r.c)r.w=!0
return!0},
ba4(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
A.adJ.prototype={
b39(d,e){var x=this,w=d.cM()
x.r=0
x.f=(w&1)!==0
x.w=d.d-d.b
x.x=e-16}}
A.azb.prototype={}
A.ay0.prototype={
ad6(d){var x,w=this
if(d===0)return!1
x=(d<<1>>>0)-1
w.e=x
x=new Int32Array(x<<1>>>0)
w.d=x
x[1]=-1
w.f=1
D.H.mC(w.a,0,128,255)
return!0},
aFb(d,e){var x,w,v,u,t,s=this
for(x=0,w=0,v=0;v<e;++v)if(d[v]>0){++x
w=v}if(!s.ad6(x))return!1
if(x===1){if(w<0||w>=e)return!1
return s.a7f(w,0,0)}u=new Int32Array(e)
if(!s.bmh(d,e,u))return!1
for(v=0;v<e;++v){t=d[v]
if(t>0)if(!s.a7f(v,u[v],t))return!1}return s.f===s.e},
bHL(d,e,f,g,h){var x,w,v,u=this
if(!u.ad6(h))return!1
for(x=0;x<h;++x){w=e[x]
if(w!==-1){v=f[x]
if(v>=g)return u.f===u.e
if(!u.a7f(v,w,d[x]))return u.f===u.e}}return u.f===u.e},
Bw(d){var x,w,v=this,u=d.aMW(),t=d.a,s=u&127,r=v.a[s]
if(r<=7){d.a=t+r
return v.b[s]}x=v.c[s]
t+=7
u=u>>>7
do{w=v.d
w===$&&C.a()
x=x+w[(x<<1>>>0)+1]+(u&1)
u=u>>>1;++t}while(v.ax2(x))
d.a=t
return v.d[x<<1>>>0]},
a7f(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
if(f<=7){x=l.azi(e,f)
for(w=D.c.f7(1,7-f),v=l.b,u=v.$flags|0,t=l.a,s=t.$flags|0,r=0;r<w;++r){q=(x|D.c.f7(r,f))>>>0
u&2&&C.L(v)
v[q]=d
s&2&&C.L(t)
t[q]=f}}else x=l.azi(D.c.oR(e,f-7),7)
for(w=l.c,v=w.$flags|0,p=7,o=0;n=f-1,f>0;f=n){u=l.e
if(o>=u)return!1
t=l.d
t===$&&C.a()
s=(o<<1>>>0)+1
m=t[s]
if(m<0){m=l.f
if(m===u)return!1
t.$flags&2&&C.L(t)
t[s]=m-o
l.f=m+2
t[(m<<1>>>0)+1]=-1
t[(m+1<<1>>>0)+1]=-1}else if(m===0)return!1
o+=t[s]+(D.c.oR(e,n)&1);--p
if(p===0){v&2&&C.L(w)
w[x]=o}}if(l.bql(o))l.bqm(o,0)
else if(l.ax2(o))return!1
w=l.d
w===$&&C.a()
w.$flags&2&&C.L(w)
w[o<<1>>>0]=d
return!0},
azi(d,e){return D.c.hv((B.Yw[d&15]<<4|B.Yw[D.c.W(d,4)])>>>0,8-e)},
bqm(d,e){var x=this.d
x===$&&C.a()
x.$flags&2&&C.L(x)
x[(d<<1>>>0)+1]=e},
ax2(d){var x=this.d
x===$&&C.a()
return x[(d<<1>>>0)+1]!==0},
bql(d){var x=this.d
x===$&&C.a()
return x[(d<<1>>>0)+1]<0},
bmh(d,e,f){var x,w,v,u,t,s,r,q,p=new Int32Array(16),o=new Int32Array(16)
for(x=0,w=0;x<e;++x){v=d[x]
if(v>w)w=v}if(w>15)return!1
for(x=0;x<e;++x){u=d[x]
p[u]=p[u]+1}p[0]=0
o[0]=-1
for(t=1,s=0;t<=w;++t){s=s+p[t-1]<<1>>>0
o[t]=s}for(u=f.$flags|0,x=0;x<e;++x){r=d[x]
if(r>0){q=o[r]
o[r]=q+1
u&2&&C.L(f)
f[x]=q}else{u&2&&C.L(f)
f[x]=-1}}return!0}}
A.a4i.prototype={
h(d,e){return this.a[e]}}
A.Xl.prototype={
J(){return"WebPFormat."+this.b}}
A.aLL.prototype={}
A.azc.prototype={}
A.c5x.prototype={
Kh(d){var x=A.dl(d,!1,null,0)
this.b=x
if(!this.atM(x))return!1
return!0},
pE(d){var x,w=this,v=null,u=A.dl(d,!1,v,0)
w.b=u
if(!w.atM(u))return v
u=new A.azc(B.rj,C.b([],y.J))
w.a=u
x=w.b
x.toString
if(!w.aDz(x,u))return v
u=w.a
switch(u.f.a){case 3:u.as=u.z.length
return u
case 2:x=w.b
x.toString
x.d=u.ay
if(!A.d0W(x,u).Qs())return v
u=w.a
u.as=u.z.length
return u
case 1:x=w.b
x.toString
x.d=u.ay
if(!A.d0U(x,u).Qs())return v
u=w.a
u.as=u.z.length
return u
case 0:throw C.p(A.cp("Unknown format for WebP"))}},
kJ(d){var x,w,v,u,t=this,s=t.b
if(s==null||t.a==null)return null
x=t.a
if(x.e){x=x.z
w=x.length
if(d>=w)return null
v=x[d]
x=v.x
x===$&&C.a()
w=v.w
w===$&&C.a()
return t.arC(s.Cp(x,w),d)}w=x.f
if(w===B.Be){u=s.Cp(x.ch,x.ay)
s=t.a
s.toString
return A.d0W(u,s).p9(0)}else if(w===B.Kv){u=s.Cp(x.ch,x.ay)
s=t.a
s.toString
return A.d0U(u,s).p9(0)}return null},
nC(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=null
if(p.pE(e)==null)return o
x=p.a.e
if(!x)return p.kJ(0)
for(w=o,v=w,u=0;x=p.a,u<x.as;++u){f=x.z[u]
t=p.kJ(u)
if(t==null)continue
t.y=f.e
if(v==null||w==null){x=p.a
s=x.a
x=x.b
r=t.gr6()
q=t.a
q=q==null?o:q.gdK()
if(q==null)q=B.ai
v=A.iO(o,o,q,t.y,B.bD,x,o,0,r,o,B.ai,s,!1)
w=v}else{w=A.EV(w,!1,!1)
x=f.f
x===$&&C.a()
if(x){x=w.a
if(x!=null)x.oo(0,o)}}A.d2u(w,t,B.Cr,o,o,f.a,f.b,o,o,o,o)
v.oh(w)}return v},
arC(d,e){var x,w,v,u=null,t=C.b([],y.J),s=new A.azc(B.rj,t)
if(!this.aDz(d,s))return u
if(s.f===B.rj)return u
s.as=this.a.as
if(s.e){x=t.length
if(e>=x)return u
w=t[e]
t=w.x
t===$&&C.a()
x=w.w
x===$&&C.a()
return this.arC(d.Cp(t,x),e)}else{v=d.Cp(s.ch,s.ay)
t=s.f
if(t===B.Be)return A.d0W(v,s).p9(0)
else if(t===B.Kv)return A.d0U(v,s).p9(0)}return u},
atM(d){if(d.jS(4)!=="RIFF")return!1
d.ai()
if(d.jS(4)!=="WEBP")return!1
return!0},
aDz(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
for(x=d.c,w=d.b;d.d<x;){v=d.jS(4)
u=d.ai()
t=u+1>>>1<<1>>>0
s=d.d
r=s-w
switch(v){case"VP8X":if(!this.beP(d,e))return!1
break
case"VP8 ":e.ay=r
e.ch=u
e.f=B.Kv
break
case"VP8L":e.ay=r
e.ch=u
e.f=B.Be
break
case"ALPH":e.toString
s=d.a
q=d.e
p=J.a1(s)
o=p.gA(s)
p=p.gA(s)
s=new A.ns(s,0,Math.min(o,p),0,q)
e.at=s
s.d=d.d
d.d+=t
break
case"ANIM":e.f=B.bQh
n=d.ai()
s=new Uint8Array(4)
s[0]=n>>>8&255
s[1]=n>>>16&255
s[2]=n>>>24&255
s[3]=n&255
d.aw()
break
case"ANMF":if(!this.bdq(d,e,u))return!1
break
case"ICCP":e.toString
m=d.jY(u)
d.d=d.d+(m.c-m.d)
m.im()
break
case"EXIF":e.toString
e.w=d.jS(u)
break
case"XMP ":e.toString
d.jS(u)
break
default:d.d=s+t
break}s=d.d
l=t-(s-w-r)
if(l>0)d.d=s+l}if(!e.d)e.d=e.at!=null
return e.f!==B.rj},
beP(d,e){var x,w,v,u,t=d.cM()
if((t&192)!==0)return!1
x=D.c.W(t,4)
w=D.c.W(t,1)
if((t&1)!==0)return!1
if(d.tE()!==0)return!1
v=d.tE()
u=d.tE()
e.a=v+1
e.b=u+1
e.e=(w&1)!==0
e.d=(x&1)!==0
return!0},
bdq(d,e,f){var x,w=d.tE(),v=d.tE()
d.tE()
x=new A.azb(w*2,v*2,d.tE()+1,d.tE())
x.b39(d,f)
if(x.r!==0)return!1
e.z.push(x)
return!0}}
A.bvY.prototype={
J(){return"IccProfileCompression."+this.b}}
A.a4J.prototype={
bJg(){var x,w=this
if(w.b===B.ET)return w.c
x=B.Md.aIh(w.c,null)
w.c=x
w.b=B.ET
return x}}
A.ax4.prototype={
J(){return"FrameType."+this.b}}
A.EW.prototype={
gls(){var x=this.x
return x===$?this.x=C.b([],y.g):x},
b2x(d,e,f,g){var x,w,v,u=this,t=d.gdK(),s=d.gr6(),r=d.a
u.arn(g,e,t,s,r==null?null:r.gf5())
t=d.b
if(t!=null)u.b=C.i5(t,y.N,y.I)
t=d.d
if(t!=null){s=y.N
u.d=C.i5(t,s,s)}u.gls().push(u)
if(!f){x=d.gls().length
for(t=y.g,w=1;w<x;++w){v=d.x
u.oh(A.ayr((v===$?d.x=C.b([],t):v)[w],e,!1,g))}}},
b2w(d,e,f){var x,w,v,u,t=this,s=d.b
if(s!=null)t.b=C.i5(s,y.N,y.I)
s=d.d
if(s!=null){x=y.N
t.d=C.i5(s,x,x)}t.gls().push(t)
if(!e&&d.gls().length>1){w=d.gls().length
for(s=y.g,v=1;v<w;++v){u=d.x
t.oh(A.EV((u===$?d.x=C.b([],s):u)[v],!1,!1))}}},
oh(d){var x=this
if(d==null)d=A.EV(x,!0,!0)
d.z=x.gls().length
if(D.b.ga1(x.gls())!==d)x.gls().push(d)
return d},
a_d(){return this.oh(null)},
arn(d,e,f,g,h){var x,w,v=this,u=null
switch(f.a){case 0:if(h==null){x=D.e.fK(d*g/8)
w=new A.T_($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.e.fK(d/8)
w=new A.T_($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 1:if(h==null){x=D.e.fK(d*(g<<1>>>0)/8)
w=new A.T1($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.e.fK(d/4)
w=new A.T1($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 2:if(h==null){if(g===2)x=d
else if(g===4)x=d*2
else x=g===3?D.e.fK(d*1.5):D.e.fK(d/2)
w=new A.T3($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.e.fK(d/2)
w=new A.T3($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 3:if(h==null)v.a=A.d9e(d,e,g)
else v.a=new A.T4(new Uint8Array(d*e),h,d,e,1)
break
case 4:x=d*e
if(h==null)v.a=new A.T0(new Uint16Array(x*g),u,d,e,g)
else v.a=new A.T0(new Uint16Array(x),h,d,e,1)
break
case 5:v.a=A.dxB(d,e,g)
break
case 6:v.a=new A.a4U(new Int8Array(d*e*g),d,e,g)
break
case 7:v.a=new A.a4S(new Int16Array(d*e*g),d,e,g)
break
case 8:v.a=new A.a4T(new Int32Array(d*e*g),d,e,g)
break
case 9:v.a=A.dxz(d,e,g)
break
case 10:v.a=A.dxA(d,e,g)
break
case 11:v.a=new A.a4R(new Float64Array(d*e*4*g),d,e,g)
break}},
j(d){var x=this
return"Image("+x.geb(0)+", "+x.ge5(0)+", "+x.gdK().b+", "+x.gr6()+")"},
geb(d){var x=this.a
x=x==null?null:x.a
return x==null?0:x},
ge5(d){var x=this.a
x=x==null?null:x.b
return x==null?0:x},
gdK(){var x=this.a
x=x==null?null:x.gdK()
return x==null?B.ai:x},
gy8(){var x=this.e
return x==null?this.e=new A.Sm(C.H(y.N,y.P)):x},
aUb(d,e){var x=this,w=x.b;(w==null?x.b=C.H(y.N,y.I):w).m(0,d,e)
if(x.b.a===0)x.b=null},
gad(d){var x=this.a
return x.gad(x)},
gar(d){var x=this.a
x=x==null?null:x.gar(x)
if(x==null)x=D.H.gar(new Uint8Array(0))
return x},
gr6(){var x=this.a
x=x==null?null:x.gf5()
x=x==null?null:x.b
if(x==null){x=this.a
x=x==null?null:x.c}return x==null?0:x},
gtk(){var x=this.a
return(x==null?null:x.gf5())!=null},
gnx(){var x=this.a
x=x==null?null:x.gnx()
return x==null?0:x},
aKB(d,e){return d>=0&&e>=0&&d<this.geb(0)&&e<this.ge5(0)},
oM(d,e,f,g){var x=this.a
x=x==null?null:x.oM(d,e,f,g)
if(x==null)x=new A.Aj(new Uint8Array(0))
return x},
eu(d,e,f){var x=this.a
x=x==null?null:x.eu(d,e,f)
return x==null?new A.h5():x},
oN(d,e){return this.eu(d,e,null)},
kW(d,e){if(d<0||d>=this.geb(0)||e<0||e>=this.ge5(0))return new A.h5()
return this.eu(d,e,null)},
aS5(d,e,f){switch(f.a){case 0:return this.kW(D.e.L(d),D.e.L(e))
case 1:case 3:return this.aS6(d,e)
case 2:return this.aS4(d,e)}},
aS6(d,e){var x,w,v,u,t,s,r=this,q=D.e.L(d),p=q-(d>=0?0:1),o=p+1
q=D.e.L(e)
x=q-(e>=0?0:1)
w=x+1
q=new A.bwS(d-p,e-x)
v=r.kW(p,x)
u=w>=r.ge5(0)?v:r.kW(p,w)
t=o>=r.geb(0)?v:r.kW(o,x)
s=o>=r.geb(0)||w>=r.ge5(0)?v:r.kW(o,w)
return r.oM(q.$4(v.gau(v),t.gau(t),u.gau(u),s.gau(s)),q.$4(v.gaF(),t.gaF(),u.gaF(),s.gaF()),q.$4(v.gaH(v),t.gaH(t),u.gaH(u),s.gaH(s)),q.$4(v.gaV(v),t.gaV(t),u.gaV(u),s.gaV(s)))},
aS4(d0,d1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=D.e.L(d0),c6=c5-(d0>=0?0:1),c7=c6-1,c8=c6+1,c9=c6+2
c5=D.e.L(d1)
x=c5-(d1>=0?0:1)
w=x-1
v=x+1
u=x+2
t=d0-c6
s=d1-x
c5=new A.bwR()
r=c4.kW(c6,x)
q=c7<0
p=!q
o=!p||w<0?r:c4.kW(c7,w)
n=q?r:c4.kW(c6,w)
m=w<0
l=m||c8>=c4.geb(0)?r:c4.kW(c8,w)
k=c9>=c4.geb(0)||m?r:c4.kW(c9,w)
j=c5.$5(t,o.gau(o),n.gau(n),l.gau(l),k.gau(k))
i=c5.$5(t,o.gaF(),n.gaF(),l.gaF(),k.gaF())
h=c5.$5(t,o.gaH(o),n.gaH(n),l.gaH(l),k.gaH(k))
g=c5.$5(t,o.gaV(o),n.gaV(n),l.gaV(l),k.gaV(k))
f=q?r:c4.kW(c7,x)
e=c8>=c4.geb(0)?r:c4.kW(c8,x)
d=c9>=c4.geb(0)?r:c4.kW(c9,x)
a0=c5.$5(t,f.gau(f),r.gau(r),e.gau(e),d.gau(d))
a1=c5.$5(t,f.gaF(),r.gaF(),e.gaF(),d.gaF())
a2=c5.$5(t,f.gaH(f),r.gaH(r),e.gaH(e),d.gaH(d))
a3=c5.$5(t,f.gaV(f),r.gaV(r),e.gaV(e),d.gaV(d))
a4=!p||v>=c4.ge5(0)?r:c4.kW(c7,v)
a5=v>=c4.ge5(0)?r:c4.kW(c6,v)
a6=c8>=c4.geb(0)||v>=c4.ge5(0)?r:c4.kW(c8,v)
a7=c9>=c4.geb(0)||v>=c4.ge5(0)?r:c4.kW(c9,v)
a8=c5.$5(t,a4.gau(a4),a5.gau(a5),a6.gau(a6),a7.gau(a7))
a9=c5.$5(t,a4.gaF(),a5.gaF(),a6.gaF(),a7.gaF())
b0=c5.$5(t,a4.gaH(a4),a5.gaH(a5),a6.gaH(a6),a7.gaH(a7))
b1=c5.$5(t,a4.gaV(a4),a5.gaV(a5),a6.gaV(a6),a7.gaV(a7))
b2=!p||u>=c4.ge5(0)?r:c4.kW(c7,u)
b3=u>=c4.ge5(0)?r:c4.kW(c6,u)
b4=c8>=c4.geb(0)||u>=c4.ge5(0)?r:c4.kW(c8,u)
b5=c9>=c4.geb(0)||u>=c4.ge5(0)?r:c4.kW(c9,u)
b6=c5.$5(t,b2.gau(b2),b3.gau(b3),b4.gau(b4),b5.gau(b5))
b7=c5.$5(t,b2.gaF(),b3.gaF(),b4.gaF(),b5.gaF())
b8=c5.$5(t,b2.gaH(b2),b3.gaH(b3),b4.gaH(b4),b5.gaH(b5))
b9=c5.$5(t,b2.gaV(b2),b3.gaV(b3),b4.gaV(b4),b5.gaV(b5))
c0=c5.$5(s,j,a0,a8,b6)
c1=c5.$5(s,i,a1,a9,b7)
c2=c5.$5(s,h,a2,b0,b8)
c3=c5.$5(s,g,a3,b1,b9)
return c4.oM(D.e.L(c0),D.e.L(c1),D.e.L(c2),D.e.L(c3))},
Ca(d,e,f){var x
if(y.c0.b(f))if(f.gfz(f).gf5()!=null)if(this.gtk()){x=this.a
if(x!=null)x.fJ(d,e,f.gdL(f),0,0)
return}x=this.a
if(x!=null)x.kY(d,e,f.gau(f),f.gaF(),f.gaH(f),f.gaV(f))},
gct(){var x=this.a
x=x==null?null:x.gct()
return x==null?0:x},
oo(d,e){var x=this.a
return x==null?null:x.oo(0,e)},
V(d){return this.oo(0,null)},
aGA(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
if(a5==null)a5=a3.gdK()
if(a6==null)a6=a3.gr6()
x=B.a7p.h(0,a5)
w=!1
if(a5===a3.gdK())if(a6===a3.gr6()){v=a3.a
w=(v==null?a4:v.gf5())==null}if(w)return A.EV(a3,!1,!1)
for(w=a3.gls(),v=w.length,u=y.N,t=y.p,s=a4,r=0;r<w.length;w.length===v||(0,C.K)(w),++r,s=i){q=w[r]
p=q.a
o=p==null
n=o?a4:p.a
if(n==null)n=0
p=o?a4:p.b
if(p==null)p=0
o=q.e
o=o==null?a4:A.a3o(o)
m=q.c
if(m==null)m=a4
else{l=m.a
k=m.b
m=m.c
m=new A.a4J(l,k,new Uint8Array(m.subarray(0,C.ty(0,a4,m.length))))}l=q.w
k=q.r
j=A.iO(a4,o,a5,q.y,l,p,m,k,a6,a4,B.ai,n,!1)
p=q.d
j.d=p!=null?C.i5(p,u,u):a4
if(s!=null){s.oh(j)
i=s}else i=j
p=j.a
h=p==null?a4:p.gf5()
p=j.a
p=p==null?a4:p.gf5()
g=p==null?a4:p.gdK()
if(g==null)g=a5
p=q.a
if(h!=null){f=C.H(t,t)
e=p==null?a4:p.eu(0,0,a4)
if(e==null)e=new A.h5()
for(p=j.a,p=p.gad(p),d=a4,a0=0;p.t();){a1=p.gM(p)
a2=A.djL(D.e.fN(e.gjf()*255),D.e.fN(e.giX()*255),D.e.fN(e.gj5()*255),0)
if(f.a4(0,a2)){o=f.h(0,a2)
o.toString
a1.sdL(0,o)}else{f.m(0,a2,a0)
a1.sdL(0,a0)
d=A.r7(e,x,g,a6,d)
h.qf(a0,d.gau(d),d.gaF(),d.gaH(d));++a0}e.t()}}else{e=p==null?a4:p.eu(0,0,a4)
if(e==null)e=new A.h5()
for(p=j.a,p=p.gad(p);p.t();){A.r7(e,x,a4,a4,p.gM(p))
e.t()}}}s.toString
return s},
p8(d){return this.aGA(d,null)},
aGz(d){return this.aGA(null,d)},
bG7(d){var x,w,v,u
if(this.d==null){x=y.N
this.d=C.H(x,x)}for(x=new C.ci(d,d.r,d.e,C.t(d).i("ci<1>"));x.t();){w=x.d
v=this.d
v.toString
u=d.h(0,w)
u.toString
v.m(0,w,u)}},
b8E(d,e,f){var x,w=65536
switch(e.a){case 0:return null
case 1:return null
case 2:return null
case 3:x=d===B.cV?w:256
return new A.ws(new Uint8Array(x*f),x,f)
case 4:x=d===B.cV?w:256
return new A.aDM(new Uint16Array(x*f),x,f)
case 5:x=d===B.cV?w:256
return new A.a7F(new Uint32Array(x*f),x,f)
case 6:x=d===B.cV?w:256
return new A.aDL(new Int8Array(x*f),x,f)
case 7:x=d===B.cV?w:256
return new A.aDJ(new Int16Array(x*f),x,f)
case 8:x=d===B.cV?w:256
return new A.aDK(new Int32Array(x*f),x,f)
case 9:x=d===B.cV?w:256
return new A.aDG(new Uint16Array(x*f),x,f)
case 10:x=d===B.cV?w:256
return new A.aDH(new Float32Array(x*f),x,f)
case 11:x=d===B.cV?w:256
return new A.aDI(new Float64Array(x*f),x,f)}}}
A.nq.prototype={
gf5(){return null}}
A.SY.prototype={
rS(d,e){var x=this,w=x.d
if(e)w=new Uint16Array(w.length)
else w=new Uint16Array(C.ca(w))
return new A.SY(w,x.a,x.b,x.c)},
gdK(){return B.jt},
gar(d){return D.eY.gar(this.d)},
gnx(){return 16},
gtJ(){return this.a*this.c*2},
gad(d){return A.d_a(this)},
rk(d,e,f,g,h){return A.wv(A.d_a(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gct(){return 1},
gtp(){return!0},
oM(d,e,f,g){var x=new Uint16Array(4),w=new A.R5(x)
x[0]=A.hT(d)
x[1]=A.hT(e)
x[2]=A.hT(f)
x[3]=A.hT(g)
x=w
return x},
eu(d,e,f){if(f==null||!(f instanceof A.LZ)||f.d!==this)f=A.d_a(this)
f.hO(0,d,e)
return f},
oN(d,e){return this.eu(d,e,null)},
nj(d,e,f){var x=this.c,w=this.d,v=A.hT(f)
w.$flags&2&&C.L(w)
w[e*this.a*x+d*x]=v},
fJ(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=A.hT(f)
v.$flags&2&&C.L(v)
v[w]=u
if(x>1){v[w+1]=A.hT(g)
if(x>2)v[w+2]=A.hT(h)}},
kY(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=A.hT(f)
v.$flags&2&&C.L(v)
v[w]=u
if(x>1){v[w+1]=A.hT(g)
if(x>2){v[w+2]=A.hT(h)
if(x>3)v[w+3]=A.hT(i)}}},
j(d){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
oo(d,e){}}
A.SZ.prototype={
rS(d,e){var x=this,w=x.d
if(e)w=new Float32Array(w.length)
else w=new Float32Array(C.ca(w))
return new A.SZ(w,x.a,x.b,x.c)},
gdK(){return B.l7},
gar(d){return D.fY.gar(this.d)},
gnx(){return 32},
gad(d){return A.d_b(this)},
rk(d,e,f,g,h){return A.wv(A.d_b(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gct(){return 1},
gtJ(){return this.a*this.c*4},
gtp(){return!0},
oM(d,e,f,g){var x=new Float32Array(4),w=new A.R6(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
eu(d,e,f){if(f==null||!(f instanceof A.M_)||f.d!==this)f=A.d_b(this)
f.hO(0,d,e)
return f},
oN(d,e){return this.eu(d,e,null)},
nj(d,e,f){var x=this.c,w=this.d
w.$flags&2&&C.L(w)
w[e*this.a*x+d*x]=f},
fJ(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&C.L(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
kY(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&C.L(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
oo(d,e){}}
A.a4R.prototype={
rS(d,e){var x=this,w=x.d
if(e)w=new Float64Array(w.length)
else w=new Float64Array(C.ca(w))
return new A.a4R(w,x.a,x.b,x.c)},
gdK(){return B.mM},
gar(d){return D.fm.gar(this.d)},
gA(d){return this.d.byteLength},
gnx(){return 64},
gad(d){return A.d_c(this)},
rk(d,e,f,g,h){return A.wv(A.d_c(this),e,f,g,h)},
gct(){return 1},
gtJ(){return this.a*this.c*8},
gtp(){return!0},
oM(d,e,f,g){var x=new Float64Array(4),w=new A.R7(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
eu(d,e,f){if(f==null||!(f instanceof A.M0)||f.d!==this)f=A.d_c(this)
f.hO(0,d,e)
return f},
oN(d,e){return this.eu(d,e,null)},
nj(d,e,f){var x=this.c,w=this.d
w.$flags&2&&C.L(w)
w[e*this.a*x+d*x]=f},
fJ(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&C.L(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
kY(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&C.L(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
oo(d,e){}}
A.a4S.prototype={
rS(d,e){var x=this,w=x.d
if(e)w=new Int16Array(w.length)
else w=new Int16Array(C.ca(w))
return new A.a4S(w,x.a,x.b,x.c)},
gdK(){return B.mO},
gar(d){return D.lD.gar(this.d)},
gad(d){return A.d_d(this)},
rk(d,e,f,g,h){return A.wv(A.d_d(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gct(){return 32767},
gtp(){return!0},
gnx(){return 16},
gtJ(){return this.a*this.c*2},
oM(d,e,f,g){var x=D.e.L(d),w=D.e.L(e),v=D.e.L(f),u=D.e.L(g),t=new Int16Array(4),s=new A.R8(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
eu(d,e,f){if(f==null||!(f instanceof A.M1)||f.d!==this)f=A.d_d(this)
f.hO(0,d,e)
return f},
oN(d,e){return this.eu(d,e,null)},
nj(d,e,f){var x=this.c,w=this.d,v=D.e.L(f)
w.$flags&2&&C.L(w)
w[e*this.a*x+d*x]=v},
fJ(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&C.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2)v[w+2]=D.e.L(h)}},
kY(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&C.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2){v[w+2]=D.e.L(h)
if(x>3)v[w+3]=D.e.L(i)}}},
j(d){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
oo(d,e){}}
A.a4T.prototype={
rS(d,e){var x=this,w=x.d
if(e)w=new Int32Array(w.length)
else w=new Int32Array(C.ca(w))
return new A.a4T(w,x.a,x.b,x.c)},
gdK(){return B.mP},
gar(d){return D.d8.gar(this.d)},
gnx(){return 32},
gtJ(){return this.a*this.c*4},
gad(d){return A.d_e(this)},
rk(d,e,f,g,h){return A.wv(A.d_e(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gct(){return 2147483647},
gtp(){return!0},
oM(d,e,f,g){var x=D.e.L(d),w=D.e.L(e),v=D.e.L(f),u=D.e.L(g),t=new Int32Array(4),s=new A.R9(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
eu(d,e,f){if(f==null||!(f instanceof A.M2)||f.d!==this)f=A.d_e(this)
f.hO(0,d,e)
return f},
oN(d,e){return this.eu(d,e,null)},
nj(d,e,f){var x=this.c,w=this.d,v=D.e.L(f)
w.$flags&2&&C.L(w)
w[e*this.a*x+d*x]=v},
fJ(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&C.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2)v[w+2]=D.e.L(h)}},
kY(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&C.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2){v[w+2]=D.e.L(h)
if(x>3)v[w+3]=D.e.L(i)}}},
j(d){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
oo(d,e){}}
A.a4U.prototype={
rS(d,e){var x=this,w=x.d
if(e)w=new Int8Array(w.length)
else w=new Int8Array(C.ca(w))
return new A.a4U(w,x.a,x.b,x.c)},
gdK(){return B.mN},
gar(d){return D.lE.gar(this.d)},
gtJ(){return this.a*this.c},
gad(d){return A.d_f(this)},
rk(d,e,f,g,h){return A.wv(A.d_f(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gct(){return 127},
gtp(){return!0},
gnx(){return 8},
oM(d,e,f,g){var x=D.e.L(d),w=D.e.L(e),v=D.e.L(f),u=D.e.L(g),t=new Int8Array(4),s=new A.Ra(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
eu(d,e,f){if(f==null||!(f instanceof A.M3)||f.d!==this)f=A.d_f(this)
f.hO(0,d,e)
return f},
oN(d,e){return this.eu(d,e,null)},
nj(d,e,f){var x=this.c,w=this.d,v=D.e.L(f)
w.$flags&2&&C.L(w)
w[e*(this.a*x)+d*x]=v},
fJ(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&C.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2)v[w+2]=D.e.L(h)}},
kY(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&C.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2){v[w+2]=D.e.L(h)
if(x>3)v[w+3]=D.e.L(i)}}},
j(d){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
oo(d,e){}}
A.T_.prototype={
c2k(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&C.bg()
this.d=x},
rS(d,e){var x,w=this,v=w.d
if(e){v===$&&C.a()
v=new Uint8Array(v.length)}else{v===$&&C.a()
v=new Uint8Array(C.ca(v))}x=w.f
x=x==null?null:x.ew(0)
return new A.T_(v,w.e,x,w.a,w.b,w.c)},
gdK(){return B.hJ},
gA(d){var x=this.d
x===$&&C.a()
return x.byteLength},
gct(){var x=this.f
x=x==null?null:x.gct()
return x==null?1:x},
gtp(){return!1},
gar(d){var x=this.d
x===$&&C.a()
return D.H.gar(x)},
gnx(){return 1},
gad(d){return A.a7W(this)},
rk(d,e,f,g,h){return A.wv(A.a7W(this),e,f,g,h)},
oM(d,e,f,g){var x=new A.Rd(4,0)
x.iZ(D.e.L(d),D.e.L(e),D.e.L(f),D.e.L(g))
return x},
eu(d,e,f){if(f==null||!(f instanceof A.M4)||f.f!==this)f=A.a7W(this)
f.hO(0,d,e)
return f},
oN(d,e){return this.eu(d,e,null)},
nj(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7W(w):x).hO(0,d,e)
w.r.lk(0,f)},
fJ(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7W(w):x).hO(0,d,e)
w.r.le(f,g,h)},
kY(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7W(w):x).hO(0,d,e)
w.r.iZ(f,g,h,i)},
j(d){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
oo(d,e){},
gtJ(){return this.e},
gf5(){return this.f}}
A.T0.prototype={
rS(d,e){var x,w=this,v=w.d
if(e)v=new Uint16Array(v.length)
else v=new Uint16Array(C.ca(v))
x=w.e
x=x==null?null:x.ew(0)
return new A.T0(v,x,w.a,w.b,w.c)},
gdK(){return B.cV},
gar(d){return D.eY.gar(this.d)},
gnx(){return 16},
gct(){var x=this.e
x=x==null?null:x.gct()
return x==null?65535:x},
gtJ(){return this.a*this.c*2},
gad(d){return A.d_g(this)},
rk(d,e,f,g,h){return A.wv(A.d_g(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gtp(){return!0},
oM(d,e,f,g){var x=D.e.L(d),w=D.e.L(e),v=D.e.L(f),u=D.e.L(g),t=new Uint16Array(4),s=new A.Re(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
eu(d,e,f){if(f==null||!(f instanceof A.M5)||f.d!==this)f=A.d_g(this)
f.hO(0,d,e)
return f},
oN(d,e){return this.eu(d,e,null)},
nj(d,e,f){var x=this.c,w=this.d,v=D.e.L(f)
w.$flags&2&&C.L(w)
w[e*this.a*x+d*x]=v},
fJ(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&C.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2)v[w+2]=D.e.L(h)}},
kY(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&C.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2){v[w+2]=D.e.L(h)
if(x>3)v[w+3]=D.e.L(i)}}},
j(d){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
oo(d,e){},
gf5(){return this.e}}
A.T1.prototype={
c2l(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&C.bg()
this.d=x},
rS(d,e){var x,w=this,v=w.d
if(e){v===$&&C.a()
v=new Uint8Array(v.length)}else{v===$&&C.a()
v=new Uint8Array(C.ca(v))}x=w.f
x=x==null?null:x.ew(0)
return new A.T1(v,w.e,x,w.a,w.b,w.c)},
gdK(){return B.iB},
gnx(){return 2},
gar(d){var x=this.d
x===$&&C.a()
return D.H.gar(x)},
gad(d){return A.a7X(this)},
rk(d,e,f,g,h){return A.wv(A.a7X(this),e,f,g,h)},
gA(d){var x=this.d
x===$&&C.a()
return x.byteLength},
gct(){var x=this.f
x=x==null?null:x.gct()
return x==null?3:x},
gtp(){return!1},
oM(d,e,f,g){var x=new A.Rf(4,0)
x.iZ(D.e.L(d),D.e.L(e),D.e.L(f),D.e.L(g))
return x},
eu(d,e,f){if(f==null||!(f instanceof A.M6)||f.f!==this)f=A.a7X(this)
f.hO(0,d,e)
return f},
oN(d,e){return this.eu(d,e,null)},
nj(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7X(w):x).hO(0,d,e)
w.r.ll(0,f)},
fJ(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7X(w):x).hO(0,d,e)
w.r.le(f,g,h)},
kY(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7X(w):x).hO(0,d,e)
w.r.iZ(f,g,h,i)},
j(d){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
oo(d,e){},
gtJ(){return this.e},
gf5(){return this.f}}
A.T2.prototype={
rS(d,e){var x=this,w=x.d
if(e)w=new Uint32Array(w.length)
else w=new Uint32Array(C.ca(w))
return new A.T2(w,x.a,x.b,x.c)},
gdK(){return B.l8},
gar(d){return D.bK.gar(this.d)},
gtJ(){return this.a*this.c*4},
gnx(){return 32},
gct(){return 4294967295},
gad(d){return A.d_h(this)},
rk(d,e,f,g,h){return A.wv(A.d_h(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gtp(){return!0},
oM(d,e,f,g){var x=D.e.L(d),w=D.e.L(e),v=D.e.L(f),u=D.e.L(g),t=new Uint32Array(4),s=new A.Rg(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
eu(d,e,f){if(f==null||!(f instanceof A.M7)||f.d!==this)f=A.d_h(this)
f.hO(0,d,e)
return f},
oN(d,e){return this.eu(d,e,null)},
nj(d,e,f){var x=this.c,w=this.d,v=D.e.L(f)
w.$flags&2&&C.L(w)
w[e*this.a*x+d*x]=v},
fJ(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&C.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2)v[w+2]=D.e.L(h)}},
kY(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&C.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2){v[w+2]=D.e.L(h)
if(x>3)v[w+3]=D.e.L(i)}}},
j(d){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
oo(d,e){}}
A.T3.prototype={
c2m(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&C.bg()
this.d=x},
rS(d,e){var x,w=this,v=w.d
if(e){v===$&&C.a()
v=new Uint8Array(v.length)}else{v===$&&C.a()
v=new Uint8Array(C.ca(v))}x=w.f
x=x==null?null:x.ew(0)
return new A.T3(v,w.e,x,w.a,w.b,w.c)},
gdK(){return B.iC},
gar(d){var x=this.d
x===$&&C.a()
return D.H.gar(x)},
gad(d){return A.a7Y(this)},
rk(d,e,f,g,h){return A.wv(A.a7Y(this),e,f,g,h)},
gA(d){var x=this.d
x===$&&C.a()
return x.byteLength},
gct(){var x=this.f
x=x==null?null:x.gct()
return x==null?15:x},
gtp(){return!1},
gnx(){return 4},
oM(d,e,f,g){var x=D.e.L(d),w=D.e.L(e),v=D.e.L(f),u=D.e.L(g),t=new A.Rh(4,new Uint8Array(2))
t.iZ(x,w,v,u)
x=t
return x},
eu(d,e,f){if(f==null||!(f instanceof A.M8)||f.e!==this)f=A.a7Y(this)
f.hO(0,d,e)
return f},
oN(d,e){return this.eu(d,e,null)},
nj(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7Y(w):x).hO(0,d,e)
w.r.lm(0,f)},
fJ(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7Y(w):x).hO(0,d,e)
w.r.le(f,g,h)},
kY(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a7Y(w):x).hO(0,d,e)
w.r.iZ(f,g,h,i)},
j(d){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
oo(d,e){},
gtJ(){return this.e},
gf5(){return this.f}}
A.T4.prototype={
rS(d,e){var x,w=this,v=w.d
if(e)v=new Uint8Array(v.length)
else v=new Uint8Array(C.ca(v))
x=w.e
x=x==null?null:x.ew(0)
return new A.T4(v,x,w.a,w.b,w.c)},
gdK(){return B.ai},
gar(d){return D.H.gar(this.d)},
gtJ(){return this.a*this.c},
gnx(){return 8},
gad(d){return A.bJi(this)},
rk(d,e,f,g,h){return A.wv(A.bJi(this),e,f,g,h)},
gA(d){return this.d.byteLength},
gct(){var x=this.e
x=x==null?null:x.gct()
return x==null?255:x},
gtp(){return!1},
oM(d,e,f,g){var x=A.dsp(D.e.L(D.e.aK(d,0,255)),D.e.L(D.e.aK(e,0,255)),D.e.L(D.e.aK(f,0,255)),D.e.L(D.e.aK(g,0,255)))
return x},
eu(d,e,f){if(f==null||!(f instanceof A.M9)||f.d!==this)f=A.bJi(this)
f.hO(0,d,e)
return f},
oN(d,e){return this.eu(d,e,null)},
nj(d,e,f){var x=this.c,w=this.d,v=D.e.L(f)
w.$flags&2&&C.L(w)
w[e*(this.a*x)+d*x]=v},
fJ(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&C.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2)v[w+2]=D.e.L(h)}},
kY(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.e.L(f)
v.$flags&2&&C.L(v)
v[w]=u
if(x>1){v[w+1]=D.e.L(g)
if(x>2){v[w+2]=D.e.L(h)
if(x>3)v[w+3]=D.e.L(i)}}},
j(d){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
oo(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=e==null?l:A.r7(e,l,B.ai,l,l),j=m.c
if(j===1){x=k==null?0:D.c.aK(C.bA(k.gau(k)),0,255)
j=m.d
D.H.mC(j,0,j.length,x)}else if(j===2){j=k==null
x=j?0:D.c.aK(C.bA(k.gau(k)),0,255)
w=j?0:D.c.aK(C.bA(k.gaF()),0,255)
v=J.cXk(D.H.gar(m.d),0,null)
D.eY.mC(v,0,v.length,(w<<8|x)>>>0)}else if(j===4){j=k==null
x=j?0:D.c.aK(C.bA(k.gau(k)),0,255)
w=j?0:D.c.aK(C.bA(k.gaF()),0,255)
u=j?0:D.c.aK(C.bA(k.gaH(k)),0,255)
t=j?0:D.c.aK(C.bA(k.gaV(k)),0,255)
s=J.q2(D.H.gar(m.d),0,null)
D.bK.mC(s,0,s.length,(t<<24|u<<16|w<<8|x)>>>0)}else{j=k==null
x=j?0:D.c.aK(C.bA(k.gau(k)),0,255)
w=j?0:D.c.aK(C.bA(k.gaF()),0,255)
u=j?0:D.c.aK(C.bA(k.gaH(k)),0,255)
for(r=A.bJi(m),j=r.d,q=j.c>0,j=j.d,p=j.$flags|0;r.t();){if(q){o=r.c
n=D.e.L(D.c.aK(x,0,255))
p&2&&C.L(j)
j[o]=n}r.saF(w)
r.saH(0,u)}}},
gf5(){return this.e}}
A.azd.prototype={
J(){return"Interpolation."+this.b}}
A.bIT.prototype={}
A.aDG.prototype={
ew(d){return new A.aDG(new Uint16Array(C.ca(this.c)),this.a,this.b)},
gar(d){return D.eY.gar(this.c)},
gdK(){return B.jt},
gct(){return 1},
fS(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=A.hT(g)
x.$flags&2&&C.L(x)
x[e*v+f]=w}},
qf(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=A.hT(e)
x.$flags&2&&C.L(x)
x[d]=w
if(v>1){x[d+1]=A.hT(f)
if(v>2)x[d+2]=A.hT(g)}},
ng(d,e,f){var x,w=this.b
if(f<w){w=this.c[e*w+f]
x=$.iN
w=(x!=null?x:A.jK())[w]}else w=0
return w},
o2(d){var x=this.c[d*this.b],w=$.iN
return(w!=null?w:A.jK())[x]},
o0(d){var x,w=this.b
if(w<2)return 0
w=this.c[d*w+1]
x=$.iN
return(x!=null?x:A.jK())[w]},
nZ(d){var x,w=this.b
if(w<3)return 0
w=this.c[d*w+2]
x=$.iN
return(x!=null?x:A.jK())[w]},
pz(d){var x,w=this.b
if(w<4)return 0
w=this.c[d*w+3]
x=$.iN
return(x!=null?x:A.jK())[w]},
vo(d,e){return this.fS(0,d,0,e)},
vm(d,e){return this.fS(0,d,1,e)},
vl(d,e){return this.fS(0,d,2,e)},
vk(d,e){return this.fS(0,d,3,e)}}
A.aDH.prototype={
ew(d){return new A.aDH(new Float32Array(C.ca(this.c)),this.a,this.b)},
gar(d){return D.fY.gar(this.c)},
gdK(){return B.l7},
gct(){return 1},
fS(d,e,f,g){var x,w=this.b
if(f<w){x=this.c
x.$flags&2&&C.L(x)
x[e*w+f]=g}},
qf(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x.$flags&2&&C.L(x)
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
ng(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
o2(d){return this.c[d*this.b]},
o0(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nZ(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
pz(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
vo(d,e){return this.fS(0,d,0,e)},
vm(d,e){return this.fS(0,d,1,e)},
vl(d,e){return this.fS(0,d,2,e)},
vk(d,e){return this.fS(0,d,3,e)}}
A.aDI.prototype={
ew(d){return new A.aDI(new Float64Array(C.ca(this.c)),this.a,this.b)},
gar(d){return D.fm.gar(this.c)},
gdK(){return B.mM},
gct(){return 1},
fS(d,e,f,g){var x,w=this.b
if(f<w){x=this.c
x.$flags&2&&C.L(x)
x[e*w+f]=g}},
qf(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x.$flags&2&&C.L(x)
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
ng(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
o2(d){return this.c[d*this.b]},
o0(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nZ(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
pz(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
vo(d,e){return this.fS(0,d,0,e)},
vm(d,e){return this.fS(0,d,1,e)},
vl(d,e){return this.fS(0,d,2,e)},
vk(d,e){return this.fS(0,d,3,e)}}
A.aDJ.prototype={
ew(d){return new A.aDJ(new Int16Array(C.ca(this.c)),this.a,this.b)},
gar(d){return D.lD.gar(this.c)},
gdK(){return B.mO},
gct(){return 32767},
fS(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.L(g)
x.$flags&2&&C.L(x)
x[e*v+f]=w}},
qf(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.e.L(e)
x.$flags&2&&C.L(x)
x[d]=w
if(v>1){x[d+1]=D.e.L(f)
if(v>2)x[d+2]=D.e.L(g)}},
ng(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
o2(d){return this.c[d*this.b]},
o0(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nZ(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
pz(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
vo(d,e){return this.fS(0,d,0,e)},
vm(d,e){return this.fS(0,d,1,e)},
vl(d,e){return this.fS(0,d,2,e)},
vk(d,e){return this.fS(0,d,3,e)}}
A.aDK.prototype={
ew(d){return new A.aDK(new Int32Array(C.ca(this.c)),this.a,this.b)},
gar(d){return D.d8.gar(this.c)},
gdK(){return B.mP},
gct(){return 2147483647},
fS(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.L(g)
x.$flags&2&&C.L(x)
x[e*v+f]=w}},
qf(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.e.L(e)
x.$flags&2&&C.L(x)
x[d]=w
if(v>1){x[d+1]=D.e.L(f)
if(v>2)x[d+2]=D.e.L(g)}},
ng(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
o2(d){return this.c[d*this.b]},
o0(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nZ(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
pz(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
vo(d,e){return this.fS(0,d,0,e)},
vm(d,e){return this.fS(0,d,1,e)},
vl(d,e){return this.fS(0,d,2,e)},
vk(d,e){return this.fS(0,d,3,e)}}
A.aDL.prototype={
ew(d){return new A.aDL(new Int8Array(C.ca(this.c)),this.a,this.b)},
gar(d){return D.lE.gar(this.c)},
gdK(){return B.mN},
gct(){return 127},
fS(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.L(g)
x.$flags&2&&C.L(x)
x[e*v+f]=w}},
qf(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.e.L(e)
x.$flags&2&&C.L(x)
x[d]=w
if(v>1){x[d+1]=D.e.L(f)
if(v>2)x[d+2]=D.e.L(g)}},
ng(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
o2(d){return this.c[d*this.b]},
o0(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nZ(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
pz(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
vo(d,e){return this.fS(0,d,0,e)},
vm(d,e){return this.fS(0,d,1,e)},
vl(d,e){return this.fS(0,d,2,e)},
vk(d,e){return this.fS(0,d,3,e)}}
A.aDM.prototype={
ew(d){return new A.aDM(new Uint16Array(C.ca(this.c)),this.a,this.b)},
gar(d){return D.eY.gar(this.c)},
gdK(){return B.cV},
gct(){return 65535},
fS(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.L(g)
x.$flags&2&&C.L(x)
x[e*v+f]=w}},
qf(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.e.L(e)
x.$flags&2&&C.L(x)
x[d]=w
if(v>1){x[d+1]=D.e.L(f)
if(v>2)x[d+2]=D.e.L(g)}},
ng(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
o2(d){return this.c[d*this.b]},
o0(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nZ(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
pz(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
vo(d,e){return this.fS(0,d,0,e)},
vm(d,e){return this.fS(0,d,1,e)},
vl(d,e){return this.fS(0,d,2,e)},
vk(d,e){return this.fS(0,d,3,e)}}
A.a7F.prototype={
ew(d){return new A.a7F(new Uint32Array(C.ca(this.c)),this.a,this.b)},
gar(d){return D.bK.gar(this.c)},
gdK(){return B.l8},
gct(){return 4294967295},
fS(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.L(g)
x.$flags&2&&C.L(x)
x[e*v+f]=w}},
qf(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.e.L(e)
x.$flags&2&&C.L(x)
x[d]=w
if(v>1){x[d+1]=D.e.L(f)
if(v>2)x[d+2]=D.e.L(g)}},
ng(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
o2(d){return this.c[d*this.b]},
o0(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nZ(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
pz(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
vo(d,e){return this.fS(0,d,0,e)},
vm(d,e){return this.fS(0,d,1,e)},
vl(d,e){return this.fS(0,d,2,e)},
vk(d,e){return this.fS(0,d,3,e)}}
A.ws.prototype={
ew(d){return A.dbn(this)},
gar(d){return D.H.gar(this.c)},
gdK(){return B.ai},
gct(){return 255},
fS(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.L(g)
x.$flags&2&&C.L(x)
x[e*v+f]=w}},
qf(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.e.L(e)
x.$flags&2&&C.L(x)
x[d]=w
if(v>1){x[d+1]=D.e.L(f)
if(v>2)x[d+2]=D.e.L(g)}},
UJ(d,e,f,g,h){var x,w,v=this.b
d*=v
x=this.c
w=D.c.L(e)
x.$flags&2&&C.L(x)
x[d]=w
if(v>1){x[d+1]=D.c.L(f)
if(v>2){x[d+2]=D.c.L(g)
if(v>3)x[d+3]=D.c.L(h)}}},
ng(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
o2(d){var x
d*=this.b
x=this.c
if(d>=x.length)return 0
return x[d]},
o0(d){var x=this.b
if(x<2)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+1]},
nZ(d){var x=this.b
if(x<3)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+2]},
pz(d){var x=this.b
if(x<4)return 255
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+3]},
vo(d,e){return this.fS(0,d,0,e)},
vm(d,e){return this.fS(0,d,1,e)},
vl(d,e){return this.fS(0,d,2,e)},
vk(d,e){return this.fS(0,d,3,e)}}
A.LZ.prototype={
ew(d){var x=this
return new A.LZ(x.a,x.b,x.c,x.d)},
gdK(){return B.jt},
gA(d){return this.d.c},
gf5(){return null},
gct(){return 1},
gnY(d){return this.a},
goL(d){return this.b},
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
x=$.iN
w=(x!=null?x:A.jK())[w]}else w=0
return w},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=A.hT(f)
v.$flags&2&&C.L(v)
v[x+e]=w}},
gdL(d){return this.gau(0)},
sdL(d,e){this.sau(0,e)},
gau(d){var x,w=this.d
if(w.c>0){w=w.d[this.c]
x=$.iN
w=(x!=null?x:A.jK())[w]}else w=0
return w},
sau(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=A.hT(e)
v.$flags&2&&C.L(v)
v[x]=w}},
gaF(){var x,w=this.d
if(w.c>1){w=w.d[this.c+1]
x=$.iN
w=(x!=null?x:A.jK())[w]}else w=0
return w},
saF(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=A.hT(d)
v.$flags&2&&C.L(v)
v[x+1]=w}},
gaH(d){var x,w=this.d
if(w.c>2){w=w.d[this.c+2]
x=$.iN
w=(x!=null?x:A.jK())[w]}else w=0
return w},
saH(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=A.hT(e)
v.$flags&2&&C.L(v)
v[x+2]=w}},
gaV(d){var x,w=this.d
if(w.c>3){w=w.d[this.c+3]
x=$.iN
w=(x!=null?x:A.jK())[w]}else w=0
return w},
saV(d,e){var x,w,v,u=this.d
if(u.c>3){x=this.gaF()
u=u.d
w=this.c
v=A.hT(x)
u.$flags&2&&C.L(u)
u[w+3]=v}},
gjf(){return this.gau(0)/1},
sjf(d){this.sau(0,d)},
giX(){return this.gaF()/1},
siX(d){this.saF(d)},
gj5(){return this.gaH(0)/1},
sj5(d){this.saH(0,d)},
gfW(){return this.gaV(0)/1},
sfW(d){this.saV(0,d)},
gkh(){return A.kg(this)},
ji(d,e){var x=this
if(x.d.c>0){x.sau(0,e.gau(e))
x.saF(e.gaF())
x.saH(0,e.gaH(e))
x.saV(0,e.gaV(e))}},
le(d,e,f){var x,w,v=this,u=v.d,t=u.c
if(t>0){u=u.d
x=v.c
w=A.hT(d)
u.$flags&2&&C.L(u)
u[x]=w
if(t>1){u[v.c+1]=A.hT(e)
if(t>2)u[v.c+2]=A.hT(f)}}},
iZ(d,e,f,g){var x,w,v=this,u=v.d,t=u.c
if(t>0){u=u.d
x=v.c
w=A.hT(d)
u.$flags&2&&C.L(u)
u[x]=w
if(t>1){u[v.c+1]=A.hT(e)
if(t>2){u[v.c+2]=A.hT(f)
if(t>3)u[v.c+3]=A.hT(g)}}}},
gad(d){return new A.ix(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.LZ){x=C.A(u,C.t(u).i("x.E"))
x=C.aP(x)
w=C.A(e,C.t(e).i("x.E"))
return x===C.aP(w)}if(y.L.b(e)){x=J.a1(e)
w=u.d
v=w.c
if(x.gA(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
p8(d){return A.r7(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idf:1,
gfz(d){return this.d}}
A.M_.prototype={
ew(d){var x=this
return new A.M_(x.a,x.b,x.c,x.d)},
gA(d){return this.d.c},
gf5(){return null},
gct(){return 1},
gdK(){return B.l7},
gnY(d){return this.a},
goL(d){return this.b},
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
w.$flags&2&&C.L(w)
w[x+e]=f}},
gdL(d){return this.gau(0)},
sdL(d,e){this.sau(0,e)},
gau(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sau(d,e){var x,w=this.d
if(w.c>0){w=w.d
x=this.c
w.$flags&2&&C.L(w)
w[x]=e}},
gaF(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saF(d){var x,w=this.d
if(w.c>1){w=w.d
x=this.c
w.$flags&2&&C.L(w)
w[x+1]=d}},
gaH(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saH(d,e){var x,w=this.d
if(w.c>2){w=w.d
x=this.c
w.$flags&2&&C.L(w)
w[x+2]=e}},
gaV(d){var x=this.d
return x.c>3?x.d[this.c+3]:1},
saV(d,e){var x,w=this.d
if(w.c>3){w=w.d
x=this.c
w.$flags&2&&C.L(w)
w[x+3]=e}},
gjf(){return this.gau(0)/1},
sjf(d){this.sau(0,d)},
giX(){return this.gaF()/1},
siX(d){this.saF(d)},
gj5(){return this.gaH(0)/1},
sj5(d){this.saH(0,d)},
gfW(){return this.gaV(0)/1},
sfW(d){this.saV(0,d)},
gkh(){return A.kg(this)},
ji(d,e){var x=this
x.sau(0,e.gau(e))
x.saF(e.gaF())
x.saH(0,e.gaH(e))
x.saV(0,e.gaV(e))},
le(d,e,f){var x=this.d,w=x.d,v=this.c
w.$flags&2&&C.L(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
iZ(d,e,f,g){var x=this.d,w=x.d,v=this.c
w.$flags&2&&C.L(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
gad(d){return new A.ix(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.M_){x=C.A(u,C.t(u).i("x.E"))
x=C.aP(x)
w=C.A(e,C.t(e).i("x.E"))
return x===C.aP(w)}if(y.L.b(e)){x=J.a1(e)
w=u.d
v=w.c
if(x.gA(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
p8(d){return A.r7(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idf:1,
gfz(d){return this.d}}
A.M0.prototype={
ew(d){var x=this
return new A.M0(x.a,x.b,x.c,x.d)},
gA(d){return this.d.c},
gf5(){return null},
gct(){return 1},
gdK(){return B.mM},
gnY(d){return this.a},
goL(d){return this.b},
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
w.$flags&2&&C.L(w)
w[x+e]=f}},
gdL(d){return this.gau(0)},
sdL(d,e){this.sau(0,e)},
gau(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sau(d,e){var x,w=this.d
if(w.c>0){w=w.d
x=this.c
w.$flags&2&&C.L(w)
w[x]=e}},
gaF(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saF(d){var x,w=this.d
if(w.c>1){w=w.d
x=this.c
w.$flags&2&&C.L(w)
w[x+1]=d}},
gaH(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saH(d,e){var x,w=this.d
if(w.c>2){w=w.d
x=this.c
w.$flags&2&&C.L(w)
w[x+2]=e}},
gaV(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saV(d,e){var x,w=this.d
if(w.c>3){w=w.d
x=this.c
w.$flags&2&&C.L(w)
w[x+3]=e}},
gjf(){return this.gau(0)/1},
sjf(d){this.sau(0,d)},
giX(){return this.gaF()/1},
siX(d){this.saF(d)},
gj5(){return this.gaH(0)/1},
sj5(d){this.saH(0,d)},
gfW(){return this.gaV(0)/1},
sfW(d){this.saV(0,d)},
gkh(){return A.kg(this)},
ji(d,e){var x=this
x.sau(0,e.gau(e))
x.saF(e.gaF())
x.saH(0,e.gaH(e))
x.saV(0,e.gaV(e))},
le(d,e,f){var x=this.d,w=x.d,v=this.c
w.$flags&2&&C.L(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
iZ(d,e,f,g){var x=this.d,w=x.d,v=this.c
w.$flags&2&&C.L(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
gad(d){return new A.ix(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.M0){x=C.A(u,C.t(u).i("x.E"))
x=C.aP(x)
w=C.A(e,C.t(e).i("x.E"))
return x===C.aP(w)}if(y.L.b(e)){x=J.a1(e)
w=u.d
v=w.c
if(x.gA(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
p8(d){return A.r7(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idf:1,
gfz(d){return this.d}}
A.M1.prototype={
ew(d){var x=this
return new A.M1(x.a,x.b,x.c,x.d)},
gA(d){return this.d.c},
gf5(){return null},
gct(){return 32767},
gdK(){return B.mO},
gnY(d){return this.a},
goL(d){return this.b},
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
v.$flags&2&&C.L(v)
v[x+e]=w}},
gdL(d){return this.gau(0)},
sdL(d,e){this.sau(0,e)},
gau(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sau(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&C.L(v)
v[x]=w}},
gaF(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saF(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.e.L(d)
v.$flags&2&&C.L(v)
v[x+1]=w}},
gaH(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saH(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&C.L(v)
v[x+2]=w}},
gaV(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saV(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&C.L(v)
v[x+3]=w}},
gjf(){return this.gau(0)/32767},
sjf(d){this.sau(0,d*32767)},
giX(){return this.gaF()/32767},
siX(d){this.saF(d*32767)},
gj5(){return this.gaH(0)/32767},
sj5(d){this.saH(0,d*32767)},
gfW(){return this.gaV(0)/32767},
sfW(d){this.saV(0,d*32767)},
gkh(){return A.kg(this)},
ji(d,e){var x=this
x.sau(0,e.gau(e))
x.saF(e.gaF())
x.saH(0,e.gaH(e))
x.saV(0,e.gaV(e))},
le(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&C.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2)v[x+2]=D.c.L(f)}}},
iZ(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&C.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2){v[x+2]=D.c.L(f)
if(u>3)v[x+3]=D.c.L(g)}}}},
gad(d){return new A.ix(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.M1){x=C.A(u,C.t(u).i("x.E"))
x=C.aP(x)
w=C.A(e,C.t(e).i("x.E"))
return x===C.aP(w)}if(y.L.b(e)){x=J.a1(e)
w=u.d
v=w.c
if(x.gA(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
p8(d){return A.r7(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idf:1,
gfz(d){return this.d}}
A.M2.prototype={
ew(d){var x=this
return new A.M2(x.a,x.b,x.c,x.d)},
gA(d){return this.d.c},
gf5(){return null},
gct(){return 2147483647},
gdK(){return B.mP},
gnY(d){return this.a},
goL(d){return this.b},
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
v.$flags&2&&C.L(v)
v[x+e]=w}},
gdL(d){return this.gau(0)},
sdL(d,e){this.sau(0,e)},
gau(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sau(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&C.L(v)
v[x]=w}},
gaF(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saF(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.e.L(d)
v.$flags&2&&C.L(v)
v[x+1]=w}},
gaH(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saH(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&C.L(v)
v[x+2]=w}},
gaV(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saV(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&C.L(v)
v[x+3]=w}},
gjf(){return this.gau(0)/2147483647},
sjf(d){this.sau(0,d*2147483647)},
giX(){return this.gaF()/2147483647},
siX(d){this.saF(d*2147483647)},
gj5(){return this.gaH(0)/2147483647},
sj5(d){this.saH(0,d*2147483647)},
gfW(){return this.gaV(0)/2147483647},
sfW(d){this.saV(0,d*2147483647)},
gkh(){return A.kg(this)},
ji(d,e){var x=this
x.sau(0,e.gau(e))
x.saF(e.gaF())
x.saH(0,e.gaH(e))
x.saV(0,e.gaV(e))},
le(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&C.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2)v[x+2]=D.c.L(f)}}},
iZ(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&C.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2){v[x+2]=D.c.L(f)
if(u>3)v[x+3]=D.c.L(g)}}}},
gad(d){return new A.ix(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.M2){x=C.A(u,C.t(u).i("x.E"))
x=C.aP(x)
w=C.A(e,C.t(e).i("x.E"))
return x===C.aP(w)}if(y.L.b(e)){x=J.a1(e)
w=u.d
v=w.c
if(x.gA(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
p8(d){return A.r7(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idf:1,
gfz(d){return this.d}}
A.M3.prototype={
ew(d){var x=this
return new A.M3(x.a,x.b,x.c,x.d)},
gA(d){return this.d.c},
gf5(){return null},
gct(){return 127},
gdK(){return B.mN},
gnY(d){return this.a},
goL(d){return this.b},
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
v.$flags&2&&C.L(v)
v[x+e]=w}},
gdL(d){return this.gau(0)},
sdL(d,e){this.sau(0,e)},
gau(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sau(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&C.L(v)
v[x]=w}},
gaF(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saF(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.e.L(d)
v.$flags&2&&C.L(v)
v[x+1]=w}},
gaH(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saH(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&C.L(v)
v[x+2]=w}},
gaV(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saV(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&C.L(v)
v[x+3]=w}},
gjf(){return this.gau(0)/127},
sjf(d){this.sau(0,d*127)},
giX(){return this.gaF()/127},
siX(d){this.saF(d*127)},
gj5(){return this.gaH(0)/127},
sj5(d){this.saH(0,d*127)},
gfW(){return this.gaV(0)/127},
sfW(d){this.saV(0,d*127)},
gkh(){return A.kg(this)},
ji(d,e){var x=this
x.sau(0,e.gau(e))
x.saF(e.gaF())
x.saH(0,e.gaH(e))
x.saV(0,e.gaV(e))},
le(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&C.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2)v[x+2]=D.c.L(f)}}},
iZ(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&C.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2){v[x+2]=D.c.L(f)
if(u>3)v[x+3]=D.c.L(g)}}}},
gad(d){return new A.ix(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.M3){x=C.A(u,C.t(u).i("x.E"))
x=C.aP(x)
w=C.A(e,C.t(e).i("x.E"))
return x===C.aP(w)}if(y.L.b(e)){x=J.a1(e)
w=u.d
v=w.c
if(x.gA(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
p8(d){return A.r7(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idf:1,
gfz(d){return this.d}}
A.aE0.prototype={
t(){var x=this,w=x.a
if(w.gnY(w)+1>x.d){w.hO(0,x.b,w.goL(w)+1)
return w.goL(w)<=x.e}return w.t()},
gM(d){return this.a},
$ibP:1}
A.M4.prototype={
ew(d){var x=this
return new A.M4(x.a,x.b,x.c,x.d,x.e,x.f)},
gA(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
gf5(){return this.f.f},
gct(){return this.f.gct()},
gdK(){return B.hJ},
gnY(d){return this.a},
goL(d){return this.b},
hO(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.f
w=f*x.e
v.e=w
x=e*x.c
v.c=w+D.c.W(x,3)
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
w.c=w.e+D.c.W(v,3)}v=w.c
u=u.d
u===$&&C.a()
return v<u.byteLength},
aaY(d,e){var x,w=this.c,v=7-(this.d+e)
if(v<0){v+=8;++w}x=this.f.d
x===$&&C.a()
if(w>=x.length)return 0
return D.c.hv(x[w],v)&1},
qs(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.aaY(0,d):0
else x=w.ng(0,this.aaY(0,0),d)
return x},
lk(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=7-(this.d+d)
if(w<0){++x
w+=8}v=r.d
v===$&&C.a()
u=v[x]
t=D.c.aK(D.e.L(e),0,1)
s=B.aKx[w]
v=D.c.f7(t,w)
r=r.d
r.$flags&2&&C.L(r)
r[x]=(u&s|v)>>>0},
h(d,e){return this.qs(e)},
m(d,e,f){return this.lk(e,f)},
gdL(d){return this.aaY(0,0)},
sdL(d,e){this.lk(0,e)},
gau(d){return this.qs(0)},
sau(d,e){this.lk(0,e)},
gaF(){return this.qs(1)},
saF(d){this.lk(1,d)},
gaH(d){return this.qs(2)},
saH(d,e){this.lk(2,e)},
gaV(d){return this.qs(3)},
saV(d,e){this.lk(3,e)},
gjf(){return this.qs(0)/this.f.gct()},
sjf(d){this.lk(0,d*this.f.gct())},
giX(){return this.qs(1)/this.f.gct()},
siX(d){this.lk(1,d*this.f.gct())},
gj5(){return this.qs(2)/this.f.gct()},
sj5(d){this.lk(2,d*this.f.gct())},
gfW(){return this.qs(3)/this.f.gct()},
sfW(d){this.lk(3,d*this.f.gct())},
gkh(){return A.kg(this)},
ji(d,e){var x=this
x.lk(0,e.gau(e))
x.lk(1,e.gaF())
x.lk(2,e.gaH(e))
x.lk(3,e.gaV(e))},
le(d,e,f){var x=this,w=x.f.c
if(w>0){x.lk(0,d)
if(w>1){x.lk(1,e)
if(w>2)x.lk(2,f)}}},
iZ(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.lk(0,d)
if(w>1){x.lk(1,e)
if(w>2){x.lk(2,f)
if(w>3)x.lk(3,g)}}}},
gad(d){return new A.ix(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.M4){x=C.A(u,C.t(u).i("x.E"))
x=C.aP(x)
w=C.A(e,C.t(e).i("x.E"))
return x===C.aP(w)}if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a1(e)
if(x.gA(e)!==v)return!1
if(u.qs(0)!==x.h(e,0))return!1
if(v>1){if(u.qs(1)!==x.h(e,1))return!1
if(v>2){if(u.qs(2)!==x.h(e,2))return!1
if(v>3)if(u.qs(3)!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
p8(d){return A.r7(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idf:1,
gfz(d){return this.f}}
A.M5.prototype={
ew(d){var x=this
return new A.M5(x.a,x.b,x.c,x.d)},
gA(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
gf5(){return this.d.e},
gct(){return this.d.gct()},
gdK(){return B.cV},
gnY(d){return this.a},
goL(d){return this.b},
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
hH(d,e){var x=this.d,w=x.e
if(w!=null)x=w.ng(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
h(d,e){return this.hH(0,e)},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.e.L(f)
v.$flags&2&&C.L(v)
v[x+e]=w}},
gdL(d){return this.gau(0)},
sdL(d,e){this.sau(0,e)},
gau(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.o2(x.d[this.c])
return x},
sau(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&C.L(v)
v[x]=w}},
gaF(){var x=this.d,w=x.e
if(w==null)x=x.c>1?x.d[this.c+1]:0
else x=w.o0(x.d[this.c])
return x},
saF(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.e.L(d)
v.$flags&2&&C.L(v)
v[x+1]=w}},
gaH(d){var x=this.d,w=x.e
if(w==null)x=x.c>2?x.d[this.c+2]:0
else x=w.nZ(x.d[this.c])
return x},
saH(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&C.L(v)
v[x+2]=w}},
gaV(d){var x=this.d,w=x.e
if(w==null)x=x.c>3?x.d[this.c+3]:0
else x=w.pz(x.d[this.c])
return x},
saV(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&C.L(v)
v[x+3]=w}},
gjf(){return this.gau(0)/this.d.gct()},
sjf(d){this.sau(0,d*this.d.gct())},
giX(){return this.gaF()/this.d.gct()},
siX(d){this.saF(d*this.d.gct())},
gj5(){return this.gaH(0)/this.d.gct()},
sj5(d){this.saH(0,d*this.d.gct())},
gfW(){return this.gaV(0)/this.d.gct()},
sfW(d){this.saV(0,d*this.d.gct())},
gkh(){return A.kg(this)},
ji(d,e){var x=this
x.sau(0,e.gau(e))
x.saF(e.gaF())
x.saH(0,e.gaH(e))
x.saV(0,e.gaV(e))},
le(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&C.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2)v[x+2]=D.c.L(f)}}},
iZ(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&C.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2){v[x+2]=D.c.L(f)
if(u>3)v[x+3]=D.c.L(g)}}}},
gad(d){return new A.ix(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.M5){x=C.A(u,C.t(u).i("x.E"))
x=C.aP(x)
w=C.A(e,C.t(e).i("x.E"))
return x===C.aP(w)}if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a1(e)
if(x.gA(e)!==v)return!1
if(u.hH(0,0)!==x.h(e,0))return!1
if(v>1){if(u.hH(0,1)!==x.h(e,1))return!1
if(v>2){if(u.hH(0,2)!==x.h(e,2))return!1
if(v>3)if(u.hH(0,3)!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
p8(d){return A.r7(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idf:1,
gfz(d){return this.d}}
A.M6.prototype={
ew(d){var x=this
return new A.M6(x.a,x.b,x.c,x.d,x.e,x.f)},
gA(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
gf5(){return this.f.f},
gct(){return this.f.gct()},
gdK(){return B.iB},
gaEV(){var x=this.f
return x.f!=null?2:x.c<<1>>>0},
gnY(d){return this.a},
goL(d){return this.b},
hO(d,e,f){var x,w,v,u=this
u.a=e
u.b=f
x=u.gaEV()
w=f*u.f.e
u.e=w
v=e*x
u.c=w+D.c.W(v,3)
u.d=v&7},
gM(d){return this},
t(){var x=this,w=++x.a,v=x.f
if(w===v.a){x.a=0
w=++x.b
x.d=0;++x.c
x.e=x.e+v.e
return w<v.b}if(v.f!=null||v.c===1){if((x.d+=2)>7){x.d=0;++x.c}}else{w*=x.gaEV()
x.d=w&7
x.c=x.e+D.c.W(w,3)}w=x.c
v=v.d
v===$&&C.a()
return w<v.length},
aaZ(d,e){var x,w=this.c,v=6-(this.d+(e<<1>>>0))
if(v<0){v+=8;++w}x=this.f.d
x===$&&C.a()
return D.c.hv(x[w],v)&3},
qt(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.aaZ(0,d):0
else x=w.ng(0,this.aaZ(0,0),d)
return x},
ll(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=6-(this.d+(d<<1>>>0))
if(w<0){++x
w+=8}v=r.d
v===$&&C.a()
u=v[x]
t=D.c.aK(D.e.L(e),0,3)
s=B.aEJ[D.c.W(w,1)]
v=D.c.f7(t,w)
r=r.d
r.$flags&2&&C.L(r)
r[x]=(u&s|v)>>>0},
h(d,e){return this.qt(e)},
m(d,e,f){return this.ll(e,f)},
gdL(d){return this.aaZ(0,0)},
sdL(d,e){this.ll(0,e)},
gau(d){return this.qt(0)},
sau(d,e){this.ll(0,e)},
gaF(){return this.qt(1)},
saF(d){this.ll(1,d)},
gaH(d){return this.qt(2)},
saH(d,e){this.ll(2,e)},
gaV(d){return this.qt(3)},
saV(d,e){this.ll(3,e)},
gjf(){return this.qt(0)/this.f.gct()},
sjf(d){this.ll(0,d*this.f.gct())},
giX(){return this.qt(1)/this.f.gct()},
siX(d){this.ll(1,d*this.f.gct())},
gj5(){return this.qt(2)/this.f.gct()},
sj5(d){this.ll(2,d*this.f.gct())},
gfW(){return this.qt(3)/this.f.gct()},
sfW(d){this.ll(3,d*this.f.gct())},
gkh(){return A.kg(this)},
ji(d,e){var x=this
x.ll(0,e.gau(e))
x.ll(1,e.gaF())
x.ll(2,e.gaH(e))
x.ll(3,e.gaV(e))},
le(d,e,f){var x=this,w=x.f.c
if(w>0){x.ll(0,d)
if(w>1){x.ll(1,e)
if(w>2)x.ll(2,f)}}},
iZ(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.ll(0,d)
if(w>1){x.ll(1,e)
if(w>2){x.ll(2,f)
if(w>3)x.ll(3,g)}}}},
gad(d){return new A.ix(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.M6){x=C.A(u,C.t(u).i("x.E"))
x=C.aP(x)
w=C.A(e,C.t(e).i("x.E"))
return x===C.aP(w)}if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a1(e)
if(x.gA(e)!==v)return!1
if(u.qt(0)!==x.h(e,0))return!1
if(v>1){if(u.qt(1)!==x.h(e,1))return!1
if(v>2){if(u.qt(2)!==x.h(e,2))return!1
if(v>3)if(u.qt(3)!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
p8(d){return A.r7(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idf:1,
gfz(d){return this.f}}
A.M7.prototype={
ew(d){var x=this
return new A.M7(x.a,x.b,x.c,x.d)},
gA(d){return this.d.c},
gf5(){return null},
gct(){return 4294967295},
gdK(){return B.l8},
gnY(d){return this.a},
goL(d){return this.b},
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
v.$flags&2&&C.L(v)
v[x+e]=w}},
gdL(d){return this.gau(0)},
sdL(d,e){this.sau(0,e)},
gau(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sau(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&C.L(v)
v[x]=w}},
gaF(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
saF(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.e.L(d)
v.$flags&2&&C.L(v)
v[x+1]=w}},
gaH(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
saH(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&C.L(v)
v[x+2]=w}},
gaV(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saV(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.e.L(e)
v.$flags&2&&C.L(v)
v[x+3]=w}},
gjf(){return this.gau(0)/4294967295},
sjf(d){this.sau(0,d*4294967295)},
giX(){return this.gaF()/4294967295},
siX(d){this.saF(d*4294967295)},
gj5(){return this.gaH(0)/4294967295},
sj5(d){this.saH(0,d*4294967295)},
gfW(){return this.gaV(0)/4294967295},
sfW(d){this.saV(0,d*4294967295)},
gkh(){return A.kg(this)},
ji(d,e){var x=this
x.sau(0,e.gau(e))
x.saF(e.gaF())
x.saH(0,e.gaH(e))
x.saV(0,e.gaV(e))},
le(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&C.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2)v[x+2]=D.c.L(f)}}},
iZ(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&C.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2){v[x+2]=D.c.L(f)
if(u>3)v[x+3]=D.c.L(g)}}}},
gad(d){return new A.ix(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.M7){x=C.A(u,C.t(u).i("x.E"))
x=C.aP(x)
w=C.A(e,C.t(e).i("x.E"))
return x===C.aP(w)}if(y.L.b(e)){x=J.a1(e)
w=u.d
v=w.c
if(x.gA(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
p8(d){return A.r7(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idf:1,
gfz(d){return this.d}}
A.M8.prototype={
ew(d){var x=this
return new A.M8(x.a,x.b,x.c,x.d,x.e)},
gA(d){var x=this.e,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
gf5(){return this.e.f},
gct(){return this.e.gct()},
gdK(){return B.iC},
gnY(d){return this.a},
goL(d){return this.b},
hO(d,e,f){var x,w,v,u=this
u.a=e
u.b=f
x=u.e
w=x.c*4
v=x.e
if(w===4)x=f*v+D.c.W(e,1)
else if(w===8)x=f*x.a+e
else{x=f*v
x=w===16?x+(e<<1>>>0):x+D.c.W(e*w,3)}u.c=x
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
t===$&&C.a()
return x<t.length},
ab_(d,e){var x,w=this.c,v=4-(this.d+(e<<2>>>0))
if(v<0){v+=8;++w}x=this.e.d
x===$&&C.a()
return D.c.hv(x[w],v)&15},
qq(d){var x=this.e,w=x.f
if(w==null)x=x.c>d?this.ab_(0,d):0
else x=w.ng(0,this.ab_(0,0),d)
return x},
lm(d,e){var x,w,v,u,t,s,r=this.e
if(d>=r.c)return
x=this.c
w=4-(this.d+(d<<2>>>0))
if(w<0){w+=8;++x}v=r.d
v===$&&C.a()
u=v[x]
t=D.c.aK(D.e.L(e),0,15)
s=w===4?15:240
v=D.c.f7(t,w)
r=r.d
r.$flags&2&&C.L(r)
r[x]=(u&s|v)>>>0},
h(d,e){return this.qq(e)},
m(d,e,f){return this.lm(e,f)},
gdL(d){return this.ab_(0,0)},
sdL(d,e){this.lm(0,e)},
gau(d){return this.qq(0)},
sau(d,e){this.lm(0,e)},
gaF(){return this.qq(1)},
saF(d){this.lm(1,d)},
gaH(d){return this.qq(2)},
saH(d,e){this.lm(2,e)},
gaV(d){return this.qq(3)},
saV(d,e){this.lm(3,e)},
gjf(){return this.qq(0)/this.e.gct()},
sjf(d){this.lm(0,d*this.e.gct())},
giX(){return this.qq(1)/this.e.gct()},
siX(d){this.lm(1,d*this.e.gct())},
gj5(){return this.qq(2)/this.e.gct()},
sj5(d){this.lm(2,d*this.e.gct())},
gfW(){return this.qq(3)/this.e.gct()},
sfW(d){this.lm(3,d*this.e.gct())},
gkh(){return A.kg(this)},
ji(d,e){var x=this
x.lm(0,e.gau(e))
x.lm(1,e.gaF())
x.lm(2,e.gaH(e))
x.lm(3,e.gaV(e))},
le(d,e,f){var x=this,w=x.e.c
if(w>0){x.lm(0,d)
if(w>1){x.lm(1,e)
if(w>2)x.lm(2,f)}}},
iZ(d,e,f,g){var x=this,w=x.e.c
if(w>0){x.lm(0,d)
if(w>1){x.lm(1,e)
if(w>2){x.lm(2,f)
if(w>3)x.lm(3,g)}}}},
gad(d){return new A.ix(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.M8){x=C.A(u,C.t(u).i("x.E"))
x=C.aP(x)
w=C.A(e,C.t(e).i("x.E"))
return x===C.aP(w)}if(y.L.b(e)){v=u.e.c
x=J.a1(e)
if(x.gA(e)!==v)return!1
if(u.qq(0)!==x.h(e,0))return!1
if(v>1){if(u.qq(1)!==x.h(e,1))return!1
if(v>2){if(u.qq(2)!==x.h(e,2))return!1
if(v>3)if(u.qq(3)!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
p8(d){return A.r7(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idf:1,
gfz(d){return this.e}}
A.M9.prototype={
ew(d){var x=this
return new A.M9(x.a,x.b,x.c,x.d)},
gA(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
gf5(){return this.d.e},
gct(){return this.d.gct()},
gdK(){return B.ai},
gnY(d){return this.a},
goL(d){return this.b},
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
hH(d,e){var x=this.d,w=x.e
if(w!=null)x=w.ng(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
h(d,e){return this.hH(0,e)},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.e.L(D.e.aK(f,0,255))
v.$flags&2&&C.L(v)
v[x+e]=w}},
gdL(d){return this.d.d[this.c]},
sdL(d,e){var x=this.d.d,w=this.c,v=D.e.L(D.e.aK(e,0,255))
x.$flags&2&&C.L(x)
x[w]=v},
gau(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.o2(x.d[this.c])
return x},
sau(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.e.L(D.e.aK(e,0,255))
v.$flags&2&&C.L(v)
v[x]=w}},
gaF(){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>1?w.d[x.c+1]:0}else w=v.o0(w.d[x.c])
return w},
saF(d){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.e.L(D.e.aK(d,0,255))
w.$flags&2&&C.L(w)
w[v]=x}else if(v>1){w=w.d
v=this.c
x=D.e.L(D.e.aK(d,0,255))
w.$flags&2&&C.L(w)
w[v+1]=x}},
gaH(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>2?w.d[x.c+2]:0}else w=v.nZ(w.d[x.c])
return w},
saH(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.e.L(D.e.aK(e,0,255))
w.$flags&2&&C.L(w)
w[v]=x}else if(v>2){w=w.d
v=this.c
x=D.e.L(D.e.aK(e,0,255))
w.$flags&2&&C.L(w)
w[v+2]=x}},
gaV(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c+1]
else w=v>3?w.d[x.c+3]:255}else w=v.pz(w.d[x.c])
return w},
saV(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.e.L(D.e.aK(e,0,255))
w.$flags&2&&C.L(w)
w[v+1]=x}else if(v>3){w=w.d
v=this.c
x=D.e.L(D.e.aK(e,0,255))
w.$flags&2&&C.L(w)
w[v+3]=x}},
gjf(){return this.gau(0)/this.d.gct()},
sjf(d){this.sau(0,d*this.d.gct())},
giX(){return this.gaF()/this.d.gct()},
siX(d){this.saF(d*this.d.gct())},
gj5(){return this.gaH(0)/this.d.gct()},
sj5(d){this.saH(0,d*this.d.gct())},
gfW(){return this.gaV(0)/this.d.gct()},
sfW(d){this.saV(0,d*this.d.gct())},
gkh(){return this.d.c===2?this.gau(0):A.kg(this)},
ji(d,e){var x=this
if(x.d.e!=null)x.sdL(0,e.gdL(e))
else{x.sau(0,e.gau(e))
x.saF(e.gaF())
x.saH(0,e.gaH(e))
x.saV(0,e.gaV(e))}},
le(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&C.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2)v[x+2]=D.c.L(f)}}},
iZ(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.L(d)
v.$flags&2&&C.L(v)
v[x]=w
if(u>1){v[x+1]=D.c.L(e)
if(u>2){v[x+2]=D.c.L(f)
if(u>3)v[x+3]=D.c.L(g)}}}},
gad(d){return new A.ix(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.M9){x=C.A(u,C.t(u).i("x.E"))
x=C.aP(x)
w=C.A(e,C.t(e).i("x.E"))
return x===C.aP(w)}if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a1(e)
if(x.gA(e)!==v)return!1
if(u.hH(0,0)!==x.h(e,0))return!1
if(v>1){if(u.hH(0,1)!==x.h(e,1))return!1
if(v>2){if(u.hH(0,2)!==x.h(e,2))return!1
if(v>3)if(u.hH(0,3)!==x.h(e,3))return!1}}return!0}return!1},
gv(d){var x=C.A(this,C.t(this).i("x.E"))
return C.aP(x)},
p8(d){return A.r7(this,null,d,null,null)},
$ibP:1,
$ie2:1,
$idf:1,
gfz(d){return this.d}}
A.h5.prototype={
ew(d){return new A.h5()},
gfz(d){return $.dm3()},
gnY(d){return 0},
goL(d){return 0},
gA(d){return 0},
gct(){return 0},
gdK(){return B.ai},
gf5(){return null},
h(d,e){return 0},
m(d,e,f){},
gdL(d){return 0},
sdL(d,e){},
gau(d){return 0},
sau(d,e){},
gaF(){return 0},
saF(d){},
gaH(d){return 0},
saH(d,e){},
gaV(d){return 0},
saV(d,e){},
gjf(){return 0},
sjf(d){},
giX(){return 0},
siX(d){},
gj5(){return 0},
sj5(d){},
gfW(){return 0},
sfW(d){},
gkh(){return 0},
ji(d,e){},
le(d,e,f){},
iZ(d,e,f,g){},
hO(d,e,f){},
gM(d){return this},
t(){return!1},
k(d,e){if(e==null)return!1
return e instanceof A.h5},
gv(d){return 0},
gad(d){return new A.ix(this)},
p8(d){return this},
$ibP:1,
$ie2:1,
$idf:1}
A.bq_.prototype={
J(){return"FlipDirection."+this.b}}
A.ayx.prototype={
j(d){return"ImageException: "+this.a},
$ibl:1}
A.ns.prototype={
gA(d){return this.c-this.d},
h(d,e){return J.v(this.a,this.d+e)},
m(d,e,f){J.c_(this.a,this.d+e,f)
return f},
ts(d,e,f,g){var x=this.a,w=J.cQ(x),v=this.d+d
if(f instanceof A.ns)w.el(x,v,v+e,f.a,f.d+g)
else w.el(x,v,v+e,y.L.a(f),g)},
Bj(d,e,f){return this.ts(d,e,f,0)},
bUR(d,e,f){var x=this.a,w=this.d+d
J.vn(x,w,w+e,f)},
a6w(d,e,f){var x=this,w=f!=null?x.b+f:x.d
return A.dl(x.a,x.e,d,w+e)},
jY(d){return this.a6w(d,0,null)},
Cp(d,e){return this.a6w(d,0,e)},
Vb(d,e){return this.a6w(d,e,null)},
dj(d,e){var x=this.d,w=x+(this.c-x)
for(;x<w;++x)J.v(this.a,x)
return-1},
cM(){return J.v(this.a,this.d++)},
jR(d){var x=this.jY(d)
this.d=this.d+(x.c-x.d)
return x},
jS(d){var x,w,v,u,t,s=this
if(d==null){x=C.b([],y.t)
for(w=s.c;v=s.d,v<w;){u=s.a
s.d=v+1
t=J.v(u,v)
if(t===0)return C.ft(x,0,null)
x.push(t)}throw C.p(A.cp("EOF reached without finding string terminator (length: "+C.o(d)+")"))}return C.ft(s.jR(d).im(),0,null)},
SW(){return this.jS(null)},
aNB(d){var x,w,v,u,t=this,s=C.b([],y.t)
for(x=t.c;w=t.d,w<x;){v=t.a
t.d=w+1
u=J.v(v,w)
s.push(u)
if(u===10||s.length>=d)return C.ft(s,0,null)}return C.ft(s,0,null)},
bZK(){return this.aNB(256)},
bZL(){var x,w,v,u,t=this,s=C.b([],y.t)
for(x=t.c;w=t.d,w<x;){v=t.a
t.d=w+1
u=J.v(v,w)
if(u===0)return new C.If(!0).GQ(s,0,null,!0)
s.push(u)}return D.aE.E8(0,s,!0)},
aw(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255
if(x.e)return w<<8|v
return v<<8|w},
tE(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255
if(x.e)return u|v<<8|w<<16
return w|v<<8|u<<16},
ai(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255,t=J.v(x.a,x.d++)&255
if(x.e)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
a42(){return A.dVS(this.ajk())},
ajk(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255,t=J.v(x.a,x.d++)&255,s=J.v(x.a,x.d++)&255,r=J.v(x.a,x.d++)&255,q=J.v(x.a,x.d++)&255,p=J.v(x.a,x.d++)&255
if(x.e)return(D.c.eA(w,56)|D.c.eA(v,48)|D.c.eA(u,40)|D.c.eA(t,32)|s<<24|r<<16|q<<8|p)>>>0
return(D.c.eA(p,56)|D.c.eA(q,48)|D.c.eA(r,40)|D.c.eA(s,32)|t<<24|u<<16|v<<8|w)>>>0},
Ln(d,e,f){var x,w=this,v=w.a
if(y.D.b(v))return w.aOE(e,f)
x=w.b+w.d+e
return J.cXv(v,x,f<=0?w.c:x+f)},
eF(d){return this.Ln(0,0,0)},
aOE(d,e){var x,w=this,v=e==null?w.c-w.d-d:e,u=w.a
if(y.D.b(u))return J.dz(D.H.gar(u),u.byteOffset+w.d+d,v)
x=w.d+d
x=J.cXv(u,x,x+v)
return new Uint8Array(C.ca(x))},
im(){return this.aOE(0,null)},
Tg(){var x=this.a
if(y.D.b(x))return J.q2(D.H.gar(x),x.byteOffset+this.d,null)
return J.q2(D.H.gar(this.im()),0,null)}}
A.bGR.prototype={
bFW(d){var x=this
x.awa(d)
x.at6()
x.avR()
x.arl()},
bqc(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.c=Math.max(d,4)
n.f=m-n.d
n.r=m-1
x=D.e.aL(m,8)
n.w=x
n.x=x*256
n.Q=new A.a7F(new Uint32Array(1024),256,4)
n.a=new A.ws(new Uint8Array(768),256,3)
n.d=3
n.e=2
x=D.e.W(m,3)
n.y=new Int32Array(x)
x=y.cb
n.z=C.c5(m*3,0,!1,x)
n.at=C.c5(n.c,0,!1,x)
x=n.ax=C.c5(n.c,0,!1,x)
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
arl(){var x,w,v,u,t,s
for(x=0;x<this.c;++x){w=this.a
w===$&&C.a()
v=this.Q
v===$&&C.a()
u=v.b
t=2<u?v.c[x*u+2]:0
s=1<u?v.c[x*u+1]:0
v=0<u?v.c[x*u]:0
w.qf(x,Math.abs(t),Math.abs(s),Math.abs(v))}},
bnq(d,e,f){var x,w,v,u=this.as[e],t=u-1,s=this.c,r=this.Q,q=1000,p=-1
while(!0){x=u<s
if(!(x||t>=0))break
if(x){r===$&&C.a()
x=r.b
w=(1<x?r.c[u*x+1]:0)-e
if(w>=q)u=s
else{if(w<0)w=-w
v=(0<x?r.c[u*x]:0)-d
w+=v<0?-v:v
if(w<q){v=(2<x?r.c[u*x+2]:0)-f
w+=v<0?-v:v
if(w<q){p=u
q=w}}++u}}if(t>=0){r===$&&C.a()
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
at6(){var x,w,v,u,t,s,r,q=this
for(x=0,w=0;x<q.c;++x){for(v=0;v<3;++v,++w){u=q.z
u===$&&C.a()
t=D.c.aK(D.e.L(0.5+u[w]),0,255)
u=q.Q
u===$&&C.a()
s=u.b
if(v<s){u=u.c
r=D.c.L(t)
u.$flags&2&&C.L(u)
u[x*s+v]=r}}u=q.Q
u===$&&C.a()
s=u.b
if(3<s){u=u.c
r=D.c.L(x)
u.$flags&2&&C.L(u)
u[x*s+3]=r}}},
avR(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
for(x=h.c,w=h.Q,v=h.as,u=v.$flags|0,t=0,s=0,r=0;r<x;r=n){w===$&&C.a()
q=w.b
p=1<q
o=p?w.c[r*q+1]:0
for(n=r+1,m=n,l=r;m<x;++m)if((p?w.c[m*q+1]:0)<o){o=p?w.c[m*q+1]:0
l=m}if(r!==l){k=0<q
m=k?w.c[l*q]:0
j=k?w.c[r*q]:0
if(k){i=w.c
j=D.c.L(j)
i.$flags&2&&C.L(i)
i[l*q]=j}if(k){k=w.c
j=D.c.L(m)
k.$flags&2&&C.L(k)
k[r*q]=j}m=p?w.c[l*q+1]:0
k=p?w.c[r*q+1]:0
if(p){j=w.c
k=D.c.L(k)
j.$flags&2&&C.L(j)
j[l*q+1]=k}if(p){p=w.c
k=D.c.L(m)
p.$flags&2&&C.L(p)
p[r*q+1]=k}p=2<q
m=p?w.c[l*q+2]:0
k=p?w.c[r*q+2]:0
if(p){j=w.c
k=D.c.L(k)
j.$flags&2&&C.L(j)
j[l*q+2]=k}if(p){p=w.c
k=D.c.L(m)
p.$flags&2&&C.L(p)
p[r*q+2]=k}p=3<q
m=p?w.c[l*q+3]:0
k=p?w.c[r*q+3]:0
if(p){j=w.c
k=D.c.L(k)
j.$flags&2&&C.L(j)
j[l*q+3]=k}if(p){p=w.c
k=D.c.L(m)
p.$flags&2&&C.L(p)
p[r*q+3]=k}}if(o!==t){u&2&&C.L(v)
v[t]=s+r>>>1
for(m=t+1;m<o;++m)v[m]=r
s=r
t=o}}x=h.r
x.toString
w=D.c.W(s+x,1)
u&2&&C.L(v)
v[t]=w
for(n=t+1;n<256;++n)v[n]=x},
aCN(d,e){var x,w,v,u
for(x=this.y,w=d*d,v=0;v<d;++v){x===$&&C.a()
u=D.e.L(e*((w-v*v)*256/w))
x.$flags&2&&C.L(x)
x[v]=u}},
awa(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.x
a2===$&&C.a()
x=a1.b
w=30+D.c.aL(x-1,3)
v=a3.geb(0)*a3.ge5(0)
u=D.c.hR(v,x)
t=Math.max(D.c.aL(u,100),1)
if(t===0)t=1
s=D.c.W(a2,8)
if(s<=1)s=0
a1.aCN(s,1024)
if(v<1509)r=a1.b=1
else if(D.c.av(v,499)!==0)r=499
else if(D.c.av(v,491)!==0)r=491
else r=D.c.av(v,487)!==0?487:503
q=a3.geb(0)
p=a3.ge5(0)
for(o=a2,n=1024,m=0,l=0,k=0,j=0;j<u;){a2=a3.a
i=a2==null?null:a2.eu(l,k,null)
if(i==null)i=new A.h5()
h=i.gau(i)
g=i.gaF()
f=i.gaH(i)
if(j===0){a2=a1.z
a2===$&&C.a()
x=a1.e
x===$&&C.a()
x*=3
a2[x]=f
a2[x+1]=g
a2[x+2]=h}e=a1.bAR(f,g,h)
if(e<0)e=a1.b83(f,g,h)
if(e>=a1.d){d=n/1024
i=e*3
a2=a1.z
a2===$&&C.a()
x=a2[i]
a2[i]=x-d*(x-f)
x=i+1
a0=a2[x]
a2[x]=a0-d*(a0-g)
a0=i+2
x=a2[a0]
a2[a0]=x-d*(x-h)
if(s>0)a1.b4n(d,s,e,f,g,h)}m+=r
l+=r
for(;l>q;){l-=q;++k}for(;m>=v;){m-=v
k-=p}++j
if(D.c.av(j,t)===0){n-=D.c.hR(n,w)
o-=D.c.aL(o,30)
s=D.c.W(o,8)
if(s<=1)s=0
a1.aCN(s,n)}}},
b4n(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=f-e,j=l.d-1
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
t===$&&C.a()
p=r+1
o=t[r]
if(q){n=v*3
s===$&&C.a()
q=s[n]
s[n]=q-o*(q-g)/262144
q=n+1
m=s[q]
s[q]=m-o*(m-h)/262144
m=n+2
q=s[m]
s[m]=q-o*(q-i)/262144;++v}if(u>k){n=u*3
s===$&&C.a()
q=s[n]
s[n]=q-o*(q-g)/262144
q=n+1
m=s[q]
s[q]=m-o*(m-h)/262144
m=n+2
q=s[m]
s[m]=q-o*(q-i)/262144;--u}r=p}},
b83(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=1e30
for(x=h.d,w=x*3,v=h.c,u=h.ax,t=h.at,s=h.z,r=g,q=r,p=-1,o=-1;x<v;++x,w=n){s===$&&C.a()
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
q=m}t===$&&C.a()
j=m-t[x]
if(j<r){o=x
r=j}u===$&&C.a()
i=u[x]
i-=0.0009765625*i
u[x]=i
t[x]=t[x]+i}u===$&&C.a()
u[p]=u[p]+0.0009765625
t===$&&C.a()
t[p]=t[p]-1
return o},
bAR(d,e,f){var x,w,v,u,t,s
for(x=this.d,w=this.z,v=0,u=0;v<x;++v){w===$&&C.a()
t=u+1
s=!1
if(w[u]===d){u=t+1
if(w[t]===e){t=u+1
s=w[u]===f
u=t}}else u=t
if(s)return v}return-1}}
A.aDr.prototype={
bi(d){var x,w,v=this
if(v.a===v.c.length)v.bc5()
x=v.c
w=v.a++
x.$flags&2&&C.L(x)
x[w]=d&255},
mI(d){var x,w,v,u,t=this,s=J.bn(d)
for(;x=t.a,w=x+s,v=t.c,u=v.length,w>u;)t.asJ(w-u)
D.H.hP(v,x,w,d)
t.a+=s},
lB(d){var x=this
if(x.b){x.bi(D.c.W(d,8)&255)
x.bi(d&255)
return}x.bi(d&255)
x.bi(D.c.W(d,8)&255)},
jC(d){var x=this
if(x.b){x.bi(D.c.W(d,24)&255)
x.bi(D.c.W(d,16)&255)
x.bi(D.c.W(d,8)&255)
x.bi(d&255)
return}x.bi(d&255)
x.bi(D.c.W(d,8)&255)
x.bi(D.c.W(d,16)&255)
x.bi(D.c.W(d,24)&255)},
c27(d){var x,w=this,v=new Float32Array(1)
v[0]=d
x=J.dz(D.fY.gar(v),0,null)
if(w.b){w.bi(x[3])
w.bi(x[2])
w.bi(x[1])
w.bi(x[0])
return}w.bi(x[0])
w.bi(x[1])
w.bi(x[2])
w.bi(x[3])},
c28(d){var x,w=this,v=new Float64Array(1)
v[0]=d
x=J.dz(D.fm.gar(v),0,null)
if(w.b){w.bi(x[7])
w.bi(x[6])
w.bi(x[5])
w.bi(x[4])
w.bi(x[3])
w.bi(x[2])
w.bi(x[1])
w.bi(x[0])
return}w.bi(x[0])
w.bi(x[1])
w.bi(x[2])
w.bi(x[3])
w.bi(x[4])
w.bi(x[5])
w.bi(x[6])
w.bi(x[7])},
asJ(d){var x,w,v,u
if(d!=null)x=d
else{w=this.c.length
x=w===0?8192:w*2}w=this.c
v=w.length
u=new Uint8Array(v+x)
D.H.hP(u,0,v,w)
this.c=u},
bc5(){return this.asJ(null)},
gA(d){return this.a}}
A.bL7.prototype={
aRJ(d){var x,w,v,u,t,s,r=d.geb(0),q=d.ge5(0),p=this.a
p===$&&C.a()
x=A.iO(null,null,B.ai,0,B.bD,q,null,0,1,p,B.ai,r,!1)
r=x.a
w=r.gad(r)
w.t()
x.z=d.z
x.w=d.w
x.y=d.y
for(r=d.a,r=r.gad(r);r.t();){v=r.gM(r)
u=w.gM(w)
t=D.e.L(v.gau(v))
s=D.e.L(v.gaF())
u.m(0,0,this.bnq(D.e.L(v.gaH(v)),s,t))
w.t()}return x}}
A.pv.prototype={
L(d){var x=this.b
return x===0?0:D.c.hR(this.a,x)},
v1(d){var x=this.b
return x===0?0:this.a/x},
k(d,e){if(e==null)return!1
return e instanceof A.pv&&this.a===e.a&&this.b===e.b},
gv(d){return C.aj(this.a,this.b,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
j(d){return""+this.a+"/"+this.b}}
A.bNW.prototype={
J(){return"RequestImageFormat."+this.b}}
A.c0H.prototype={}
var z=a.updateTypes(["~(ns)","m(tr,m,m)","m([m])","~(Fd,D<m>)","~(m,m,m,m,m,dZ)","~(f,rF)","~(m)","~(m,l9)","Fd(m)"])
A.bwp.prototype={
$0(){return A.cZo(this.a,this.b,"jpg",this.c)},
$S:241}
A.bwq.prototype={
$0(){return A.cZo(this.a,this.b,"png",null)},
$S:241}
A.bws.prototype={
$0(){return A.cZo(this.a,this.b,"webp",this.c)},
$S:241}
A.bwh.prototype={
$2(d,e){var x=A.d92(e)
this.a.a.m(0,d,x)
return x},
$S:z+5}
A.bwi.prototype={
$2(d,e){var x=e.ew(0)
this.a.a.m(0,d,x)
return x},
$S:z+7}
A.bwj.prototype={
$2(d,e){var x=A.d92(e)
this.a.b.a.m(0,d,x)
return x},
$S:z+5}
A.ba4.prototype={
$4(d,e,f,g){var x,w,v=this,u=v.a
if(u.a<v.c){x=v.b.c&&v.d.ch!=null
w=v.e
if(x){x=v.d
w.iZ(x.ch.o2(d),x.ch.o0(d),x.ch.nZ(d),x.ch.pz(d))}else w.iZ(d,e,f,g)
w.t();++u.a}},
$S:1177}
A.boP.prototype={
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
$S:1178}
A.bz2.prototype={
$1(d){var x,w,v,u,t=this.b,s=t.cM(),r=t.cM()
t=this.a
if(!t.d.y.a4(0,s))throw C.p(A.cp("Invalid Component in SOS block"))
x=t.d.y.h(0,s)
x.toString
w=D.c.W(r,4)&15
v=r&15
u=t.z
if(w<u.length){u=u[w]
u.toString
x.w=u}t=t.y
if(v<t.length){t=t[v]
t.toString
x.x=t}return x},
$S:z+8}
A.bJU.prototype={
$1(d){return d!==""},
$S:16}
A.c4I.prototype={
$2(d,e){return(d|e<<16)>>>0},
$S:186}
A.bwS.prototype={
$4(d,e,f,g){var x=this.b
return d+this.a*(e-d+x*(d+g-f-e))+x*(f-d)},
$S:1179}
A.bwR.prototype={
$5(d,e,f,g,h){var x=-e,w=d*d
return f+0.5*(d*(x+g)+w*(2*e-5*f+4*g-h)+w*d*(x+3*f-3*g+h))},
$S:1180};(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_2u,v=a._static_1,u=a._instance_1u,t=a.installStaticTearOff
x(A.l9.prototype,"gyS",1,0,function(){return[0]},["$1","$0"],["jU","L"],2,0,0)
x(A.w6.prototype,"gyS",1,0,function(){return[0]},["$1","$0"],["jU","L"],2,0,0)
x(A.AW.prototype,"gyS",1,0,function(){return[0]},["$1","$0"],["jU","L"],2,0,0)
x(A.u9.prototype,"gyS",1,0,function(){return[0]},["$1","$0"],["jU","L"],2,0,0)
x(A.w8.prototype,"gyS",1,0,function(){return[0]},["$1","$0"],["jU","L"],2,0,0)
x(A.ys.prototype,"gyS",1,0,function(){return[0]},["$1","$0"],["jU","L"],2,0,0)
x(A.AV.prototype,"gyS",1,0,function(){return[0]},["$1","$0"],["jU","L"],2,0,0)
x(A.AU.prototype,"gyS",1,0,function(){return[0]},["$1","$0"],["jU","L"],2,0,0)
x(A.w9.prototype,"gyS",1,0,function(){return[0]},["$1","$0"],["jU","L"],2,0,0)
var s
w(s=A.azq.prototype,"gb95","b96",3)
w(s,"gb98","b99",3)
w(s,"gb9a","b9b",3)
w(s,"gb9_","b90",3)
w(s,"gb91","b92",3)
v(A,"dWb","dGq",0)
v(A,"dW4","dGi",0)
v(A,"dW2","dGg",0)
v(A,"dW9","dGo",0)
v(A,"dWa","dGp",0)
v(A,"dW8","dGn",0)
v(A,"dW7","dGm",0)
v(A,"dW6","dGl",0)
v(A,"dWd","dGs",0)
v(A,"dWc","dGr",0)
v(A,"dW5","dGj",0)
v(A,"dW3","dGh",0)
v(A,"dWo","dGD",0)
v(A,"dWm","dGB",0)
v(A,"dWe","dGt",0)
v(A,"dWg","dGv",0)
v(A,"dWf","dGu",0)
v(A,"dWh","dGw",0)
v(A,"dWp","dGE",0)
v(A,"dWn","dGC",0)
v(A,"dWi","dGx",0)
v(A,"dWj","dGy",0)
v(A,"dWk","dGz",0)
v(A,"dWl","dGA",0)
u(A.adt.prototype,"gbv3","bv4",6)
u(A.aza.prototype,"gbP6","bP7",6)
t(A,"d3k",3,null,["$3"],["dGF"],1,0)
t(A,"dWq",3,null,["$3"],["dGG"],1,0)
t(A,"dWv",3,null,["$3"],["dGL"],1,0)
t(A,"dWw",3,null,["$3"],["dGM"],1,0)
t(A,"dWx",3,null,["$3"],["dGN"],1,0)
t(A,"dWy",3,null,["$3"],["dGO"],1,0)
t(A,"dWz",3,null,["$3"],["dGP"],1,0)
t(A,"dWA",3,null,["$3"],["dGQ"],1,0)
t(A,"dWB",3,null,["$3"],["dGR"],1,0)
t(A,"dWC",3,null,["$3"],["dGS"],1,0)
t(A,"dWr",3,null,["$3"],["dGH"],1,0)
t(A,"dWs",3,null,["$3"],["dGI"],1,0)
t(A,"dWt",3,null,["$3"],["dGJ"],1,0)
t(A,"dWu",3,null,["$3"],["dGK"],1,0)
t(A,"dWF",6,null,["$6"],["dH6"],4,0)
t(A,"dWG",6,null,["$6"],["dH7"],4,0)
t(A,"dWE",6,null,["$6"],["dH5"],4,0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(C.F,[A.a4G,A.c6u,A.c6v,A.bjn,A.vb,A.cor,A.cJR,A.bxw,A.c6t,A.bxQ,A.bIp,A.ix,A.w7,A.aRT,A.avE,A.rF,A.l9,A.ba5,A.IP,A.bj6,A.bj5,A.bn9,A.avG,A.boM,A.avH,A.avI,A.boO,A.a3u,A.aVr,A.a4a,A.a4b,A.axf,A.bw0,A.ayg,A.arp,A.KC,A.bz_,A.Fd,A.bz1,A.Yu,A.azp,A.bz5,A.azq,A.a86,A.bJS,A.yU,A.UW,A.bKX,A.UV,A.bKZ,A.aEK,A.aEN,A.aET,A.a8x,A.UZ,A.aES,A.uz,A.aJr,A.bZy,A.aJw,A.bZA,A.aJx,A.bZB,A.bAL,A.c4v,A.ads,A.c4w,A.c4B,A.c4F,A.c4H,A.adr,A.c4G,A.c4x,A.OD,A.aLi,A.aLk,A.aLj,A.aLl,A.adt,A.aLg,A.c4C,A.aLh,A.c5w,A.adJ,A.ay0,A.a4i,A.aLL,A.a4J,A.bIT,A.aE0,A.ayx,A.ns,A.bL7,A.aDr,A.pv,A.c0H])
w(A.cRV,A.c6u)
w(A.cRW,A.c6v)
x(C.fy,[A.XY,A.aqp,A.bbw,A.p9,A.aq9,A.oj,A.ni,A.So,A.JY,A.vW,A.ST,A.bz0,A.UE,A.a85,A.G1,A.aEf,A.G2,A.wA,A.pH,A.NW,A.lS,A.uV,A.OE,A.Xl,A.bvY,A.ax4,A.azd,A.bq_,A.bNW])
w(A.bxO,A.bxQ)
w(A.aDt,A.bIp)
x(C.cX,[A.bwp,A.bwq,A.bws])
x(C.x,[A.R5,A.R6,A.R7,A.R8,A.R9,A.Ra,A.Rd,A.Re,A.Rf,A.Rg,A.Rh,A.Aj,A.a1n,A.EW,A.nq,A.LZ,A.M_,A.M0,A.M1,A.M2,A.M3,A.M4,A.M5,A.M6,A.M7,A.M8,A.M9,A.h5])
x(A.Aj,[A.ark,A.Rb])
w(A.arx,A.a1n)
w(A.Sm,A.w7)
x(C.eg,[A.bwh,A.bwi,A.bwj,A.c4I])
x(A.l9,[A.w6,A.ER,A.AW,A.u9,A.w8,A.ys,A.AV,A.AU,A.w9,A.ET,A.ES,A.KK])
x(A.bj6,[A.aqd,A.boN,A.btq,A.bw_,A.azo,A.aEe,A.bJT,A.bKY,A.bL2,A.bYq,A.bZz,A.c5x])
x(C.cj,[A.ba4,A.boP,A.bz2,A.bJU,A.bwS,A.bwR])
w(A.bkn,A.aqd)
w(A.bxZ,A.boM)
x(A.bxZ,[A.az5,A.by_,A.by0,A.by1,A.az7])
w(A.az6,A.a3u)
w(A.az8,A.a4b)
w(A.bvZ,A.IP)
x(A.KC,[A.KD,A.a4H])
x(A.bn9,[A.bz3,A.bJQ])
w(A.az9,A.a86)
w(A.by3,A.bJS)
w(A.Md,A.bj5)
x(A.yU,[A.aEI,A.aEJ,A.aEL,A.aEM,A.aEP,A.aEQ])
x(A.UW,[A.a8u,A.aEO])
x(A.aET,[A.BI,A.nA])
w(A.aza,A.adt)
w(A.azb,A.adJ)
w(A.azc,A.aLL)
x(A.nq,[A.SY,A.SZ,A.a4R,A.a4S,A.a4T,A.a4U,A.T_,A.T0,A.T1,A.T2,A.T3,A.T4])
x(A.bIT,[A.aDG,A.aDH,A.aDI,A.aDJ,A.aDK,A.aDL,A.aDM,A.a7F,A.ws])
w(A.bGR,A.bL7)})()
C.cf(b.typeUniverse,JSON.parse('{"ix":{"bP":["be"]},"R5":{"e2":[],"x":["be"],"x.E":"be"},"R6":{"e2":[],"x":["be"],"x.E":"be"},"R7":{"e2":[],"x":["be"],"x.E":"be"},"R8":{"e2":[],"x":["be"],"x.E":"be"},"R9":{"e2":[],"x":["be"],"x.E":"be"},"Ra":{"e2":[],"x":["be"],"x.E":"be"},"Rd":{"e2":[],"x":["be"],"x.E":"be"},"Re":{"e2":[],"x":["be"],"x.E":"be"},"Rf":{"e2":[],"x":["be"],"x.E":"be"},"Rg":{"e2":[],"x":["be"],"x.E":"be"},"Rh":{"e2":[],"x":["be"],"x.E":"be"},"Aj":{"e2":[],"x":["be"],"x.E":"be"},"ark":{"e2":[],"x":["be"],"x.E":"be"},"Rb":{"e2":[],"x":["be"],"x.E":"be"},"a1n":{"e2":[],"x":["be"],"x.E":"be"},"arx":{"e2":[],"x":["be"],"x.E":"be"},"w6":{"l9":[]},"ER":{"l9":[]},"AW":{"l9":[]},"u9":{"l9":[]},"w8":{"l9":[]},"ys":{"l9":[]},"AV":{"l9":[]},"AU":{"l9":[]},"w9":{"l9":[]},"ET":{"l9":[]},"ES":{"l9":[]},"KK":{"l9":[]},"az6":{"a3u":[]},"az8":{"a4b":[]},"KD":{"KC":[]},"a4H":{"KC":[]},"az9":{"a86":[]},"aEI":{"yU":[]},"aEJ":{"yU":[]},"aEL":{"yU":[]},"aEM":{"yU":[]},"aEP":{"yU":[]},"aEQ":{"yU":[]},"a8u":{"UW":[]},"aEO":{"UW":[]},"azb":{"adJ":[]},"EW":{"x":["df"],"x.E":"df"},"nq":{"x":["df"]},"SY":{"nq":[],"x":["df"],"x.E":"df"},"SZ":{"nq":[],"x":["df"],"x.E":"df"},"a4R":{"nq":[],"x":["df"],"x.E":"df"},"a4S":{"nq":[],"x":["df"],"x.E":"df"},"a4T":{"nq":[],"x":["df"],"x.E":"df"},"a4U":{"nq":[],"x":["df"],"x.E":"df"},"T_":{"nq":[],"x":["df"],"x.E":"df"},"T0":{"nq":[],"x":["df"],"x.E":"df"},"T1":{"nq":[],"x":["df"],"x.E":"df"},"T2":{"nq":[],"x":["df"],"x.E":"df"},"T3":{"nq":[],"x":["df"],"x.E":"df"},"T4":{"nq":[],"x":["df"],"x.E":"df"},"LZ":{"df":[],"e2":[],"x":["be"],"bP":["df"],"x.E":"be"},"M_":{"df":[],"e2":[],"x":["be"],"bP":["df"],"x.E":"be"},"M0":{"df":[],"e2":[],"x":["be"],"bP":["df"],"x.E":"be"},"M1":{"df":[],"e2":[],"x":["be"],"bP":["df"],"x.E":"be"},"M2":{"df":[],"e2":[],"x":["be"],"bP":["df"],"x.E":"be"},"M3":{"df":[],"e2":[],"x":["be"],"bP":["df"],"x.E":"be"},"aE0":{"bP":["df"]},"M4":{"df":[],"e2":[],"x":["be"],"bP":["df"],"x.E":"be"},"M5":{"df":[],"e2":[],"x":["be"],"bP":["df"],"x.E":"be"},"M6":{"df":[],"e2":[],"x":["be"],"bP":["df"],"x.E":"be"},"M7":{"df":[],"e2":[],"x":["be"],"bP":["df"],"x.E":"be"},"M8":{"df":[],"e2":[],"x":["be"],"bP":["df"],"x.E":"be"},"M9":{"df":[],"e2":[],"x":["be"],"bP":["df"],"x.E":"be"},"h5":{"df":[],"e2":[],"x":["be"],"bP":["df"],"x.E":"be"},"ayx":{"bl":[]},"df":{"e2":[],"bP":["df"],"x":["be"]}}'))
C.xu(b.typeUniverse,JSON.parse('{"aET":1}'))
var y=(function rtii(){var x=C.I
return{G:x("e2"),n:x("avG"),W:x("avI"),z:x("avZ"),R:x("a4i"),x:x("ay0"),Y:x("ayg"),P:x("rF"),r:x("l9"),I:x("nq"),h:x("a5j"),E:x("u<arp>"),Q:x("u<avH>"),m:x("u<a3u>"),b:x("u<a4b>"),A:x("u<a4i>"),g:x("u<EW>"),M:x("u<D<D<D<m>>>>"),o:x("u<D<D<m>>>"),S:x("u<D<m>>"),d:x("u<a86>"),X:x("u<UV>"),u:x("u<yU>"),l:x("u<aEN>"),j:x("u<pv>"),T:x("u<f>"),_:x("u<aJx>"),a:x("u<dZ>"),q:x("u<OD>"),F:x("u<aLh>"),J:x("u<adJ>"),v:x("u<aRT>"),C:x("u<Yu>"),t:x("u<m>"),aH:x("u<KC?>"),cB:x("u<azp?>"),cQ:x("u<D<m>?>"),w:x("u<tr?>"),e:x("u<dZ?>"),y:x("u<~(ns)>"),c:x("Fd"),bp:x("D<a5j>"),f:x("D<D<m>>"),k:x("D<pv>"),cm:x("D<adr>"),K:x("D<OD>"),H:x("D<T>"),L:x("D<m>"),c0:x("df"),aG:x("UV"),a2:x("aEK"),cK:x("a8u"),O:x("UW"),ab:x("a8x"),aM:x("UZ"),i:x("pv"),N:x("f"),aL:x("aJw"),bk:x("tr"),D:x("dZ"),V:x("adr"),bQ:x("aLi"),bl:x("aLj"),bt:x("aLl"),U:x("a7<f>"),bc:x("aVr"),cb:x("T"),p:x("m"),a7:x("az1?"),cl:x("D<m>?"),bT:x("D<KC?>?"),ac:x("dZ?"),ak:x("ads?"),B:x("OD?"),Z:x("aLk?"),s:x("m?")}})();(function constants(){var x=a.makeConstList
B.Cq=new A.aq9(0,"direct")
B.Cr=new A.aq9(1,"alpha")
B.Ly=new A.ni(0,"none")
B.Cs=new A.ni(3,"bitfields")
B.Ct=new A.ni(6,"alphaBitfields")
B.rI=new A.aqp(0,"littleEndian")
B.oG=new A.aqp(1,"bigEndian")
B.kS=new A.c6t()
B.aoc=new A.cRV()
B.Md=new A.cRW()
B.Mj=new A.bbw(4,"luminance")
B.Dy=new A.arx(4294967295)
B.ayg=new A.JY(0,"red")
B.ayh=new A.JY(1,"green")
B.ayi=new A.JY(2,"blue")
B.ayj=new A.JY(3,"alpha")
B.ayk=new A.JY(4,"other")
B.OV=new A.So(0,"uint")
B.EG=new A.So(1,"half")
B.EH=new A.So(2,"float")
B.OW=new A.vW(0,"none")
B.ayI=new A.bq_(2,"both")
B.hJ=new A.p9(0,"uint1")
B.iB=new A.p9(1,"uint2")
B.l7=new A.p9(10,"float32")
B.mM=new A.p9(11,"float64")
B.iC=new A.p9(2,"uint4")
B.ai=new A.p9(3,"uint8")
B.cV=new A.p9(4,"uint16")
B.l8=new A.p9(5,"uint32")
B.mN=new A.p9(6,"int8")
B.mO=new A.p9(7,"int16")
B.mP=new A.p9(8,"int32")
B.jt=new A.p9(9,"float16")
B.ayY=new A.ax4(1,"page")
B.bD=new A.ax4(2,"sequence")
B.ET=new A.bvY(1,"deflate")
B.Ps=new A.ST(2,"cur")
B.a8=new A.oj(0,"none")
B.Qg=new A.oj(1,"byte")
B.Qh=new A.oj(10,"sRational")
B.Qi=new A.oj(11,"single")
B.Qj=new A.oj(12,"double")
B.bU=new A.oj(2,"ascii")
B.bA=new A.oj(3,"short")
B.dI=new A.oj(4,"long")
B.fc=new A.oj(5,"rational")
B.Qk=new A.oj(6,"sByte")
B.jx=new A.oj(7,"undefined")
B.Ql=new A.oj(8,"sShort")
B.Qm=new A.oj(9,"sLong")
B.aD1=new A.azd(0,"nearest")
B.bVA=new A.azd(1,"linear")
B.QH=new A.bz0(0,"yuv444")
B.Fr=x([0,2,8],y.t)
B.aDY=x([0,4,2,1],y.t)
B.azl=new A.ST(0,"invalid")
B.azm=new A.ST(1,"ico")
B.aE2=x([B.azl,B.azm,B.Ps],C.I("u<ST>"))
B.R2=x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],y.t)
B.aEJ=x([252,243,207,63],y.t)
B.bzd=new A.UE(0,"none")
B.acw=new A.UE(1,"background")
B.acx=new A.UE(2,"previous")
B.aEL=x([B.bzd,B.acw,B.acx],C.I("u<UE>"))
B.R6=x([292,260,226,226],y.t)
B.R8=x([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],y.t)
B.aEQ=x([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],y.t)
B.aEX=x([2,3,7],y.t)
B.Rb=x([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68],y.t)
B.aF4=x([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],y.t)
B.aFi=x([3,3,11],y.t)
B.Gd=x([128,128,128,128,128,128,128,128,128,128,128],y.t)
B.RW=x([B.Gd,B.Gd,B.Gd],y.S)
B.aHD=x([253,136,254,255,228,219,128,128,128,128,128],y.t)
B.aK6=x([189,129,242,255,227,213,255,219,128,128,128],y.t)
B.aKd=x([106,126,227,252,214,209,255,255,128,128,128],y.t)
B.aNP=x([B.aHD,B.aK6,B.aKd],y.S)
B.aOa=x([1,98,248,255,236,226,255,255,128,128,128],y.t)
B.aFI=x([181,133,238,254,221,234,255,154,128,128,128],y.t)
B.aFr=x([78,134,202,247,198,180,255,219,128,128,128],y.t)
B.aPy=x([B.aOa,B.aFI,B.aFr],y.S)
B.aHs=x([1,185,249,255,243,255,128,128,128,128,128],y.t)
B.aNX=x([184,150,247,255,236,224,128,128,128,128,128],y.t)
B.aRt=x([77,110,216,255,236,230,128,128,128,128,128],y.t)
B.aMN=x([B.aHs,B.aNX,B.aRt],y.S)
B.aN2=x([1,101,251,255,241,255,128,128,128,128,128],y.t)
B.aHB=x([170,139,241,252,236,209,255,255,128,128,128],y.t)
B.aNh=x([37,116,196,243,228,255,255,255,128,128,128],y.t)
B.aGL=x([B.aN2,B.aHB,B.aNh],y.S)
B.aKM=x([1,204,254,255,245,255,128,128,128,128,128],y.t)
B.aSg=x([207,160,250,255,238,128,128,128,128,128,128],y.t)
B.aSf=x([102,103,231,255,211,171,128,128,128,128,128],y.t)
B.aIx=x([B.aKM,B.aSg,B.aSf],y.S)
B.aGp=x([1,152,252,255,240,255,128,128,128,128,128],y.t)
B.aSq=x([177,135,243,255,234,225,128,128,128,128,128],y.t)
B.aMu=x([80,129,211,255,194,224,128,128,128,128,128],y.t)
B.aNO=x([B.aGp,B.aSq,B.aMu],y.S)
B.SB=x([1,1,255,128,128,128,128,128,128,128,128],y.t)
B.aOJ=x([246,1,255,128,128,128,128,128,128,128,128],y.t)
B.aLR=x([255,128,128,128,128,128,128,128,128,128,128],y.t)
B.aSH=x([B.SB,B.aOJ,B.aLR],y.S)
B.aIm=x([B.RW,B.aNP,B.aPy,B.aMN,B.aGL,B.aIx,B.aNO,B.aSH],y.o)
B.aRB=x([198,35,237,223,193,187,162,160,145,155,62],y.t)
B.aHC=x([131,45,198,221,172,176,220,157,252,221,1],y.t)
B.aRA=x([68,47,146,208,149,167,221,162,255,223,128],y.t)
B.aLg=x([B.aRB,B.aHC,B.aRA],y.S)
B.aPD=x([1,149,241,255,221,224,255,255,128,128,128],y.t)
B.aQh=x([184,141,234,253,222,220,255,199,128,128,128],y.t)
B.aLH=x([81,99,181,242,176,190,249,202,255,255,128],y.t)
B.aR4=x([B.aPD,B.aQh,B.aLH],y.S)
B.aQH=x([1,129,232,253,214,197,242,196,255,255,128],y.t)
B.aS4=x([99,121,210,250,201,198,255,202,128,128,128],y.t)
B.aNT=x([23,91,163,242,170,187,247,210,255,255,128],y.t)
B.aLX=x([B.aQH,B.aS4,B.aNT],y.S)
B.aJb=x([1,200,246,255,234,255,128,128,128,128,128],y.t)
B.aQE=x([109,178,241,255,231,245,255,255,128,128,128],y.t)
B.aEP=x([44,130,201,253,205,192,255,255,128,128,128],y.t)
B.aRd=x([B.aJb,B.aQE,B.aEP],y.S)
B.aG8=x([1,132,239,251,219,209,255,165,128,128,128],y.t)
B.aE4=x([94,136,225,251,218,190,255,255,128,128,128],y.t)
B.aQK=x([22,100,174,245,186,161,255,199,128,128,128],y.t)
B.aN_=x([B.aG8,B.aE4,B.aQK],y.S)
B.aQg=x([1,182,249,255,232,235,128,128,128,128,128],y.t)
B.aNB=x([124,143,241,255,227,234,128,128,128,128,128],y.t)
B.aK_=x([35,77,181,251,193,211,255,205,128,128,128],y.t)
B.aKl=x([B.aQg,B.aNB,B.aK_],y.S)
B.aSI=x([1,157,247,255,236,231,255,255,128,128,128],y.t)
B.aIi=x([121,141,235,255,225,227,255,255,128,128,128],y.t)
B.aQF=x([45,99,188,251,195,217,255,224,128,128,128],y.t)
B.aGE=x([B.aSI,B.aIi,B.aQF],y.S)
B.aE5=x([1,1,251,255,213,255,128,128,128,128,128],y.t)
B.aF6=x([203,1,248,255,255,128,128,128,128,128,128],y.t)
B.aQk=x([137,1,177,255,224,255,128,128,128,128,128],y.t)
B.aGr=x([B.aE5,B.aF6,B.aQk],y.S)
B.aQ0=x([B.aLg,B.aR4,B.aLX,B.aRd,B.aN_,B.aKl,B.aGE,B.aGr],y.o)
B.aIG=x([253,9,248,251,207,208,255,192,128,128,128],y.t)
B.aOK=x([175,13,224,243,193,185,249,198,255,255,128],y.t)
B.aSG=x([73,17,171,221,161,179,236,167,255,234,128],y.t)
B.aOs=x([B.aIG,B.aOK,B.aSG],y.S)
B.aPO=x([1,95,247,253,212,183,255,255,128,128,128],y.t)
B.aMc=x([239,90,244,250,211,209,255,255,128,128,128],y.t)
B.aRs=x([155,77,195,248,188,195,255,255,128,128,128],y.t)
B.aQf=x([B.aPO,B.aMc,B.aRs],y.S)
B.aKQ=x([1,24,239,251,218,219,255,205,128,128,128],y.t)
B.aPk=x([201,51,219,255,196,186,128,128,128,128,128],y.t)
B.aMb=x([69,46,190,239,201,218,255,228,128,128,128],y.t)
B.aPJ=x([B.aKQ,B.aPk,B.aMb],y.S)
B.aK9=x([1,191,251,255,255,128,128,128,128,128,128],y.t)
B.aNg=x([223,165,249,255,213,255,128,128,128,128,128],y.t)
B.aO4=x([141,124,248,255,255,128,128,128,128,128,128],y.t)
B.aQG=x([B.aK9,B.aNg,B.aO4],y.S)
B.aLl=x([1,16,248,255,255,128,128,128,128,128,128],y.t)
B.aIe=x([190,36,230,255,236,255,128,128,128,128,128],y.t)
B.aHF=x([149,1,255,128,128,128,128,128,128,128,128],y.t)
B.aG9=x([B.aLl,B.aIe,B.aHF],y.S)
B.aNW=x([1,226,255,128,128,128,128,128,128,128,128],y.t)
B.aOy=x([247,192,255,128,128,128,128,128,128,128,128],y.t)
B.aRq=x([240,128,255,128,128,128,128,128,128,128,128],y.t)
B.aFb=x([B.aNW,B.aOy,B.aRq],y.S)
B.aRc=x([1,134,252,255,255,128,128,128,128,128,128],y.t)
B.aNz=x([213,62,250,255,255,128,128,128,128,128,128],y.t)
B.aSm=x([55,93,255,128,128,128,128,128,128,128,128],y.t)
B.aNV=x([B.aRc,B.aNz,B.aSm],y.S)
B.aHl=x([B.aOs,B.aQf,B.aPJ,B.aQG,B.aG9,B.aFb,B.aNV,B.RW],y.o)
B.aNC=x([202,24,213,235,186,191,220,160,240,175,255],y.t)
B.aHA=x([126,38,182,232,169,184,228,174,255,187,128],y.t)
B.aGb=x([61,46,138,219,151,178,240,170,255,216,128],y.t)
B.aQ8=x([B.aNC,B.aHA,B.aGb],y.S)
B.aMt=x([1,112,230,250,199,191,247,159,255,255,128],y.t)
B.aGC=x([166,109,228,252,211,215,255,174,128,128,128],y.t)
B.aN8=x([39,77,162,232,172,180,245,178,255,255,128],y.t)
B.aQ2=x([B.aMt,B.aGC,B.aN8],y.S)
B.aMD=x([1,52,220,246,198,199,249,220,255,255,128],y.t)
B.aIu=x([124,74,191,243,183,193,250,221,255,255,128],y.t)
B.aJZ=x([24,71,130,219,154,170,243,182,255,255,128],y.t)
B.aQ1=x([B.aMD,B.aIu,B.aJZ],y.S)
B.aJV=x([1,182,225,249,219,240,255,224,128,128,128],y.t)
B.aSk=x([149,150,226,252,216,205,255,171,128,128,128],y.t)
B.aSX=x([28,108,170,242,183,194,254,223,255,255,128],y.t)
B.aRO=x([B.aJV,B.aSk,B.aSX],y.S)
B.aT_=x([1,81,230,252,204,203,255,192,128,128,128],y.t)
B.aQA=x([123,102,209,247,188,196,255,233,128,128,128],y.t)
B.aRk=x([20,95,153,243,164,173,255,203,128,128,128],y.t)
B.aQB=x([B.aT_,B.aQA,B.aRk],y.S)
B.aLA=x([1,222,248,255,216,213,128,128,128,128,128],y.t)
B.aNw=x([168,175,246,252,235,205,255,255,128,128,128],y.t)
B.aK3=x([47,116,215,255,211,212,255,255,128,128,128],y.t)
B.aI0=x([B.aLA,B.aNw,B.aK3],y.S)
B.aLs=x([1,121,236,253,212,214,255,255,128,128,128],y.t)
B.aMF=x([141,84,213,252,201,202,255,219,128,128,128],y.t)
B.aOm=x([42,80,160,240,162,185,255,205,128,128,128],y.t)
B.aKr=x([B.aLs,B.aMF,B.aOm],y.S)
B.aSz=x([244,1,255,128,128,128,128,128,128,128,128],y.t)
B.aE0=x([238,1,255,128,128,128,128,128,128,128,128],y.t)
B.aOB=x([B.SB,B.aSz,B.aE0],y.S)
B.aEF=x([B.aQ8,B.aQ2,B.aQ1,B.aRO,B.aQB,B.aI0,B.aKr,B.aOB],y.o)
B.aGa=x([B.aIm,B.aQ0,B.aHl,B.aEF],y.M)
B.aGe=x([511,1023,2047,4095],y.t)
B.aGI=x([63,207,243,252],y.t)
B.aHe=x([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],y.t)
B.v4=x([0,1,2,3,4,5,6,7,8,9,10,11],y.t)
B.aHI=x([8,8,4,2],y.t)
B.aEi=x([173,148,140],y.t)
B.aEj=x([176,155,140,135],y.t)
B.aEg=x([180,157,141,134,130],y.t)
B.aF5=x([254,254,243,230,196,177,153,140,133,130,129],y.t)
B.aHK=x([B.aEi,B.aEj,B.aEg,B.aF5],y.S)
B.aHQ=x([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],y.t)
B.S4=x([1,1.387039845,1.306562965,1.175875602,1,0.785694958,0.5411961,0.275899379],C.I("u<T>"))
B.aI5=x([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],y.t)
B.aIo=x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095],y.t)
B.Sh=x([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29],y.t)
B.Ss=x([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],y.t)
B.aIY=x([280,256,256,256,40],y.t)
B.vB=x([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],y.t)
B.SI=x([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390],y.t)
B.FI=x([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],y.t)
B.aJf=x([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],y.t)
B.FJ=x([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],y.t)
B.ST=x([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],y.t)
B.SV=x([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28],y.t)
B.aJK=x([B.OV,B.EG,B.EH],C.I("u<So>"))
B.vT=x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],y.t)
B.aKx=x([254,253,251,247,239,223,191,127],y.t)
B.w7=x([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8],y.t)
B.TA=x([A.dWi(),A.dWa(),A.dWp(),A.dWn(),A.dWk(),A.dWj(),A.dWl()],y.y)
B.TC=x([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5],y.t)
B.TN=x([B.a8,B.Qg,B.bU,B.bA,B.dI,B.fc,B.Qk,B.jx,B.Ql,B.Qm,B.Qh,B.Qi,B.Qj],C.I("u<oj>"))
B.JW=new A.lS(0,"whiteIsZero")
B.bMo=new A.lS(1,"blackIsZero")
B.bMv=new A.lS(2,"rgb")
B.JY=new A.lS(3,"palette")
B.bMw=new A.lS(4,"transparencyMask")
B.afH=new A.lS(5,"cmyk")
B.bMx=new A.lS(6,"yCbCr")
B.bMy=new A.lS(7,"reserved7")
B.bMz=new A.lS(8,"cieLab")
B.bMA=new A.lS(9,"iccLab")
B.bMp=new A.lS(10,"ituLab")
B.bMq=new A.lS(11,"logL")
B.bMr=new A.lS(12,"logLuv")
B.bMs=new A.lS(13,"colorFilterArray")
B.bMt=new A.lS(14,"linearRaw")
B.bMu=new A.lS(15,"depth")
B.JX=new A.lS(16,"unknown")
B.aKU=x([B.JW,B.bMo,B.bMv,B.JY,B.bMw,B.afH,B.bMx,B.bMy,B.bMz,B.bMA,B.bMp,B.bMq,B.bMr,B.bMs,B.bMt,B.bMu,B.JX],C.I("u<lS>"))
B.U2=x([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],y.t)
B.acu=new A.a85(0,"source")
B.acv=new A.a85(1,"over")
B.aLo=x([B.acu,B.acv],C.I("u<a85>"))
B.bMg=new A.NW(0,"invalid")
B.afF=new A.NW(1,"uint")
B.bq=new A.NW(2,"int")
B.ra=new A.NW(3,"float")
B.aLr=x([B.bMg,B.afF,B.bq,B.ra],C.I("u<NW>"))
B.aLy=x([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],y.t)
B.UE=x([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],y.t)
B.aM9=x([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],y.t)
B.ayl=new A.vW(1,"rle")
B.aym=new A.vW(2,"zips")
B.ayn=new A.vW(3,"zip")
B.ayo=new A.vW(4,"piz")
B.ayp=new A.vW(5,"pxr24")
B.ayq=new A.vW(6,"b44")
B.ayr=new A.vW(7,"b44a")
B.aMd=x([B.OW,B.ayl,B.aym,B.ayn,B.ayo,B.ayp,B.ayq,B.ayr],C.I("u<vW>"))
B.aOh=x([231,120,48,89,115,113,120,152,112],y.t)
B.aEG=x([152,179,64,126,170,118,46,70,95],y.t)
B.aM8=x([175,69,143,80,85,82,72,155,103],y.t)
B.aFS=x([56,58,10,171,218,189,17,13,152],y.t)
B.aN4=x([114,26,17,163,44,195,21,10,173],y.t)
B.aNv=x([121,24,80,195,26,62,44,64,85],y.t)
B.aMY=x([144,71,10,38,171,213,144,34,26],y.t)
B.aQO=x([170,46,55,19,136,160,33,206,71],y.t)
B.aJj=x([63,20,8,114,114,208,12,9,226],y.t)
B.aKN=x([81,40,11,96,182,84,29,16,36],y.t)
B.aE6=x([B.aOh,B.aEG,B.aM8,B.aFS,B.aN4,B.aNv,B.aMY,B.aQO,B.aJj,B.aKN],y.S)
B.aId=x([134,183,89,137,98,101,106,165,148],y.t)
B.aQq=x([72,187,100,130,157,111,32,75,80],y.t)
B.aNK=x([66,102,167,99,74,62,40,234,128],y.t)
B.aFa=x([41,53,9,178,241,141,26,8,107],y.t)
B.aKy=x([74,43,26,146,73,166,49,23,157],y.t)
B.aJF=x([65,38,105,160,51,52,31,115,128],y.t)
B.aJN=x([104,79,12,27,217,255,87,17,7],y.t)
B.aM6=x([87,68,71,44,114,51,15,186,23],y.t)
B.aQ6=x([47,41,14,110,182,183,21,17,194],y.t)
B.aOI=x([66,45,25,102,197,189,23,18,22],y.t)
B.aRl=x([B.aId,B.aQq,B.aNK,B.aFa,B.aKy,B.aJF,B.aJN,B.aM6,B.aQ6,B.aOI],y.S)
B.aOe=x([88,88,147,150,42,46,45,196,205],y.t)
B.aNa=x([43,97,183,117,85,38,35,179,61],y.t)
B.aK2=x([39,53,200,87,26,21,43,232,171],y.t)
B.aLN=x([56,34,51,104,114,102,29,93,77],y.t)
B.aMR=x([39,28,85,171,58,165,90,98,64],y.t)
B.aJy=x([34,22,116,206,23,34,43,166,73],y.t)
B.aE7=x([107,54,32,26,51,1,81,43,31],y.t)
B.aQW=x([68,25,106,22,64,171,36,225,114],y.t)
B.aIc=x([34,19,21,102,132,188,16,76,124],y.t)
B.aRI=x([62,18,78,95,85,57,50,48,51],y.t)
B.aIC=x([B.aOe,B.aNa,B.aK2,B.aLN,B.aMR,B.aJy,B.aE7,B.aQW,B.aIc,B.aRI],y.S)
B.aMK=x([193,101,35,159,215,111,89,46,111],y.t)
B.aHj=x([60,148,31,172,219,228,21,18,111],y.t)
B.aG6=x([112,113,77,85,179,255,38,120,114],y.t)
B.aRE=x([40,42,1,196,245,209,10,25,109],y.t)
B.aLp=x([88,43,29,140,166,213,37,43,154],y.t)
B.aJA=x([61,63,30,155,67,45,68,1,209],y.t)
B.aKc=x([100,80,8,43,154,1,51,26,71],y.t)
B.aFf=x([142,78,78,16,255,128,34,197,171],y.t)
B.aMp=x([41,40,5,102,211,183,4,1,221],y.t)
B.aIT=x([51,50,17,168,209,192,23,25,82],y.t)
B.aIy=x([B.aMK,B.aHj,B.aG6,B.aRE,B.aLp,B.aJA,B.aKc,B.aFf,B.aMp,B.aIT],y.S)
B.aJW=x([138,31,36,171,27,166,38,44,229],y.t)
B.aIv=x([67,87,58,169,82,115,26,59,179],y.t)
B.aPx=x([63,59,90,180,59,166,93,73,154],y.t)
B.aRh=x([40,40,21,116,143,209,34,39,175],y.t)
B.aFn=x([47,15,16,183,34,223,49,45,183],y.t)
B.aHy=x([46,17,33,183,6,98,15,32,183],y.t)
B.aT0=x([57,46,22,24,128,1,54,17,37],y.t)
B.aKg=x([65,32,73,115,28,128,23,128,205],y.t)
B.aNJ=x([40,3,9,115,51,192,18,6,223],y.t)
B.aKv=x([87,37,9,115,59,77,64,21,47],y.t)
B.aMo=x([B.aJW,B.aIv,B.aPx,B.aRh,B.aFn,B.aHy,B.aT0,B.aKg,B.aNJ,B.aKv],y.S)
B.aSx=x([104,55,44,218,9,54,53,130,226],y.t)
B.aGA=x([64,90,70,205,40,41,23,26,57],y.t)
B.aPw=x([54,57,112,184,5,41,38,166,213],y.t)
B.aJz=x([30,34,26,133,152,116,10,32,134],y.t)
B.aOt=x([39,19,53,221,26,114,32,73,255],y.t)
B.aIR=x([31,9,65,234,2,15,1,118,73],y.t)
B.aMm=x([75,32,12,51,192,255,160,43,51],y.t)
B.aJD=x([88,31,35,67,102,85,55,186,85],y.t)
B.aL_=x([56,21,23,111,59,205,45,37,192],y.t)
B.aLa=x([55,38,70,124,73,102,1,34,98],y.t)
B.aSE=x([B.aSx,B.aGA,B.aPw,B.aJz,B.aOt,B.aIR,B.aMm,B.aJD,B.aL_,B.aLa],y.S)
B.aKY=x([125,98,42,88,104,85,117,175,82],y.t)
B.aJJ=x([95,84,53,89,128,100,113,101,45],y.t)
B.aNj=x([75,79,123,47,51,128,81,171,1],y.t)
B.aGt=x([57,17,5,71,102,57,53,41,49],y.t)
B.aPh=x([38,33,13,121,57,73,26,1,85],y.t)
B.aSi=x([41,10,67,138,77,110,90,47,114],y.t)
B.aMf=x([115,21,2,10,102,255,166,23,6],y.t)
B.aIf=x([101,29,16,10,85,128,101,196,26],y.t)
B.aK8=x([57,18,10,102,102,213,34,20,43],y.t)
B.aLn=x([117,20,15,36,163,128,68,1,26],y.t)
B.aM3=x([B.aKY,B.aJJ,B.aNj,B.aGt,B.aPh,B.aSi,B.aMf,B.aIf,B.aK8,B.aLn],y.S)
B.aKt=x([102,61,71,37,34,53,31,243,192],y.t)
B.aSb=x([69,60,71,38,73,119,28,222,37],y.t)
B.aKw=x([68,45,128,34,1,47,11,245,171],y.t)
B.aEf=x([62,17,19,70,146,85,55,62,70],y.t)
B.aSU=x([37,43,37,154,100,163,85,160,1],y.t)
B.aRT=x([63,9,92,136,28,64,32,201,85],y.t)
B.aQv=x([75,15,9,9,64,255,184,119,16],y.t)
B.aIr=x([86,6,28,5,64,255,25,248,1],y.t)
B.aOC=x([56,8,17,132,137,255,55,116,128],y.t)
B.aGg=x([58,15,20,82,135,57,26,121,40],y.t)
B.aMW=x([B.aKt,B.aSb,B.aKw,B.aEf,B.aSU,B.aRT,B.aQv,B.aIr,B.aOC,B.aGg],y.S)
B.aNo=x([164,50,31,137,154,133,25,35,218],y.t)
B.aIp=x([51,103,44,131,131,123,31,6,158],y.t)
B.aRL=x([86,40,64,135,148,224,45,183,128],y.t)
B.aM7=x([22,26,17,131,240,154,14,1,209],y.t)
B.aHp=x([45,16,21,91,64,222,7,1,197],y.t)
B.aRi=x([56,21,39,155,60,138,23,102,213],y.t)
B.aSC=x([83,12,13,54,192,255,68,47,28],y.t)
B.aNL=x([85,26,85,85,128,128,32,146,171],y.t)
B.aLS=x([18,11,7,63,144,171,4,4,246],y.t)
B.aID=x([35,27,10,146,174,171,12,26,128],y.t)
B.aLC=x([B.aNo,B.aIp,B.aRL,B.aM7,B.aHp,B.aRi,B.aSC,B.aNL,B.aLS,B.aID],y.S)
B.aQ_=x([190,80,35,99,180,80,126,54,45],y.t)
B.aQN=x([85,126,47,87,176,51,41,20,32],y.t)
B.aPp=x([101,75,128,139,118,146,116,128,85],y.t)
B.aQm=x([56,41,15,176,236,85,37,9,62],y.t)
B.aGo=x([71,30,17,119,118,255,17,18,138],y.t)
B.aMV=x([101,38,60,138,55,70,43,26,142],y.t)
B.aLJ=x([146,36,19,30,171,255,97,27,20],y.t)
B.aOc=x([138,45,61,62,219,1,81,188,64],y.t)
B.aRF=x([32,41,20,117,151,142,20,21,163],y.t)
B.aQP=x([112,19,12,61,195,128,48,4,24],y.t)
B.aPI=x([B.aQ_,B.aQN,B.aPp,B.aQm,B.aGo,B.aMV,B.aLJ,B.aOc,B.aRF,B.aQP],y.S)
B.aMn=x([B.aE6,B.aRl,B.aIC,B.aIy,B.aMo,B.aSE,B.aM3,B.aMW,B.aLC,B.aPI],y.o)
B.B2=new A.pH(0,"none")
B.kw=new A.pH(1,"palette")
B.afE=new A.pH(2,"rgb")
B.bM7=new A.pH(3,"gray")
B.bM8=new A.pH(4,"reserved4")
B.bM9=new A.pH(5,"reserved5")
B.bMa=new A.pH(6,"reserved6")
B.bMb=new A.pH(7,"reserved7")
B.bMc=new A.pH(8,"reserved8")
B.kx=new A.pH(9,"paletteRle")
B.afD=new A.pH(10,"rgbRle")
B.bM6=new A.pH(11,"grayRle")
B.aMw=x([B.B2,B.kw,B.afE,B.bM7,B.bM8,B.bM9,B.bMa,B.bMb,B.bMc,B.kx,B.afD,B.bM6],C.I("u<pH>"))
B.Vm=x([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250],y.t)
B.aNi=x([A.dW2(),A.dW9(),A.dWb(),A.dW4(),A.dW7(),A.dWd(),A.dW6(),A.dWc(),A.dW3(),A.dW5()],y.y)
B.FC=x([8,0,8,0],y.t)
B.aGy=x([5,3,5,3],y.t)
B.aFj=x([3,5,3,5],y.t)
B.QT=x([0,8,0,8],y.t)
B.Rq=x([4,4,4,4],y.t)
B.aG4=x([4,4,0,0],y.t)
B.VD=x([B.FC,B.aGy,B.aFj,B.QT,B.FC,B.Rq,B.aG4,B.QT],y.S)
B.VM=x([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41],y.t)
B.aO2=x([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],y.t)
B.xt=x([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845],y.t)
B.VR=x([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127],y.t)
B.VT=x([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],y.t)
B.xB=x([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567],y.t)
B.W5=x([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232],y.t)
B.WN=x([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],y.t)
B.bze=new A.G1(0,"none")
B.bzf=new A.G1(1,"sub")
B.bzg=new A.G1(2,"up")
B.bzh=new A.G1(3,"average")
B.bzi=new A.G1(4,"paeth")
B.WO=x([B.bze,B.bzf,B.bzg,B.bzh,B.bzi],C.I("u<G1>"))
B.iJ=x([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],y.t)
B.pW=x([0,1,3,7,15,31,63,127,255],y.t)
B.Ge=x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],y.t)
B.fQ=x([255,255,255,255,255,255,255,255,255,255,255],y.t)
B.no=x([B.fQ,B.fQ,B.fQ],y.S)
B.aLM=x([176,246,255,255,255,255,255,255,255,255,255],y.t)
B.aSp=x([223,241,252,255,255,255,255,255,255,255,255],y.t)
B.aHV=x([249,253,253,255,255,255,255,255,255,255,255],y.t)
B.aMk=x([B.aLM,B.aSp,B.aHV],y.S)
B.aKS=x([255,244,252,255,255,255,255,255,255,255,255],y.t)
B.aKn=x([234,254,254,255,255,255,255,255,255,255,255],y.t)
B.XZ=x([253,255,255,255,255,255,255,255,255,255,255],y.t)
B.aIn=x([B.aKS,B.aKn,B.XZ],y.S)
B.aRK=x([255,246,254,255,255,255,255,255,255,255,255],y.t)
B.aOx=x([239,253,254,255,255,255,255,255,255,255,255],y.t)
B.Xo=x([254,255,254,255,255,255,255,255,255,255,255],y.t)
B.aQs=x([B.aRK,B.aOx,B.Xo],y.S)
B.TG=x([255,248,254,255,255,255,255,255,255,255,255],y.t)
B.aJ5=x([251,255,254,255,255,255,255,255,255,255,255],y.t)
B.aNu=x([B.TG,B.aJ5,B.fQ],y.S)
B.Fv=x([255,253,254,255,255,255,255,255,255,255,255],y.t)
B.aNl=x([251,254,254,255,255,255,255,255,255,255,255],y.t)
B.aJq=x([B.Fv,B.aNl,B.Xo],y.S)
B.aFP=x([255,254,253,255,254,255,255,255,255,255,255],y.t)
B.aKJ=x([250,255,254,255,254,255,255,255,255,255,255],y.t)
B.xN=x([254,255,255,255,255,255,255,255,255,255,255],y.t)
B.aLq=x([B.aFP,B.aKJ,B.xN],y.S)
B.aK7=x([B.no,B.aMk,B.aIn,B.aQs,B.aNu,B.aJq,B.aLq,B.no],y.o)
B.aEE=x([217,255,255,255,255,255,255,255,255,255,255],y.t)
B.aLG=x([225,252,241,253,255,255,254,255,255,255,255],y.t)
B.aPs=x([234,250,241,250,253,255,253,254,255,255,255],y.t)
B.aQQ=x([B.aEE,B.aLG,B.aPs],y.S)
B.Go=x([255,254,255,255,255,255,255,255,255,255,255],y.t)
B.aI1=x([223,254,254,255,255,255,255,255,255,255,255],y.t)
B.aHr=x([238,253,254,254,255,255,255,255,255,255,255],y.t)
B.aOr=x([B.Go,B.aI1,B.aHr],y.S)
B.aKu=x([249,254,255,255,255,255,255,255,255,255,255],y.t)
B.aRH=x([B.TG,B.aKu,B.fQ],y.S)
B.aQZ=x([255,253,255,255,255,255,255,255,255,255,255],y.t)
B.aNk=x([247,254,255,255,255,255,255,255,255,255,255],y.t)
B.aN0=x([B.aQZ,B.aNk,B.fQ],y.S)
B.aHf=x([252,255,255,255,255,255,255,255,255,255,255],y.t)
B.aFc=x([B.Fv,B.aHf,B.fQ],y.S)
B.Y9=x([255,254,254,255,255,255,255,255,255,255,255],y.t)
B.aHo=x([B.Y9,B.XZ,B.fQ],y.S)
B.aOl=x([255,254,253,255,255,255,255,255,255,255,255],y.t)
B.U0=x([250,255,255,255,255,255,255,255,255,255,255],y.t)
B.aHb=x([B.aOl,B.U0,B.xN],y.S)
B.aFU=x([B.aQQ,B.aOr,B.aRH,B.aN0,B.aFc,B.aHo,B.aHb,B.no],y.o)
B.aPL=x([186,251,250,255,255,255,255,255,255,255,255],y.t)
B.aIV=x([234,251,244,254,255,255,255,255,255,255,255],y.t)
B.aQu=x([251,251,243,253,254,255,254,255,255,255,255],y.t)
B.aJm=x([B.aPL,B.aIV,B.aQu],y.S)
B.aJ9=x([236,253,254,255,255,255,255,255,255,255,255],y.t)
B.aOj=x([251,253,253,254,254,255,255,255,255,255,255],y.t)
B.aLf=x([B.Fv,B.aJ9,B.aOj],y.S)
B.aPZ=x([254,254,254,255,255,255,255,255,255,255,255],y.t)
B.aJ2=x([B.Y9,B.aPZ,B.fQ],y.S)
B.aQD=x([254,254,255,255,255,255,255,255,255,255,255],y.t)
B.aJ6=x([B.Go,B.aQD,B.xN],y.S)
B.Yb=x([B.fQ,B.xN,B.fQ],y.S)
B.aFR=x([B.aJm,B.aLf,B.aJ2,B.aJ6,B.Yb,B.no,B.no,B.no],y.o)
B.aKE=x([248,255,255,255,255,255,255,255,255,255,255],y.t)
B.aJI=x([250,254,252,254,255,255,255,255,255,255,255],y.t)
B.aIS=x([248,254,249,253,255,255,255,255,255,255,255],y.t)
B.aLj=x([B.aKE,B.aJI,B.aIS],y.S)
B.aFs=x([255,253,253,255,255,255,255,255,255,255,255],y.t)
B.aRb=x([246,253,253,255,255,255,255,255,255,255,255],y.t)
B.aJo=x([252,254,251,254,254,255,255,255,255,255,255],y.t)
B.aRa=x([B.aFs,B.aRb,B.aJo],y.S)
B.aSJ=x([255,254,252,255,255,255,255,255,255,255,255],y.t)
B.aIK=x([248,254,253,255,255,255,255,255,255,255,255],y.t)
B.aHa=x([253,255,254,254,255,255,255,255,255,255,255],y.t)
B.aNE=x([B.aSJ,B.aIK,B.aHa],y.S)
B.aSA=x([255,251,254,255,255,255,255,255,255,255,255],y.t)
B.aMM=x([245,251,254,255,255,255,255,255,255,255,255],y.t)
B.aMU=x([253,253,254,255,255,255,255,255,255,255,255],y.t)
B.aHP=x([B.aSA,B.aMM,B.aMU],y.S)
B.aHT=x([255,251,253,255,255,255,255,255,255,255,255],y.t)
B.aKX=x([252,253,254,255,255,255,255,255,255,255,255],y.t)
B.aQa=x([B.aHT,B.aKX,B.Go],y.S)
B.aGN=x([255,252,255,255,255,255,255,255,255,255,255],y.t)
B.aSu=x([249,255,254,255,255,255,255,255,255,255,255],y.t)
B.aJS=x([255,255,254,255,255,255,255,255,255,255,255],y.t)
B.aEe=x([B.aGN,B.aSu,B.aJS],y.S)
B.aSW=x([255,255,253,255,255,255,255,255,255,255,255],y.t)
B.aJ4=x([B.aSW,B.U0,B.fQ],y.S)
B.aH9=x([B.aLj,B.aRa,B.aNE,B.aHP,B.aQa,B.aEe,B.aJ4,B.Yb],y.o)
B.aQI=x([B.aK7,B.aFU,B.aFR,B.aH9],y.M)
B.ajH=new A.ni(1,"rle8")
B.ajM=new A.ni(2,"rle4")
B.ajN=new A.ni(4,"jpeg")
B.ajO=new A.ni(5,"png")
B.ajP=new A.ni(7,"reserved7")
B.ajQ=new A.ni(8,"reserved8")
B.ajR=new A.ni(9,"reserved9")
B.ajI=new A.ni(10,"reserved10")
B.ajJ=new A.ni(11,"cmyk")
B.ajK=new A.ni(12,"cmykRle8")
B.ajL=new A.ni(13,"cmykRle4")
B.Xr=x([B.Ly,B.ajH,B.ajM,B.Cs,B.ajN,B.ajO,B.Ct,B.ajP,B.ajQ,B.ajR,B.ajI,B.ajJ,B.ajK,B.ajL],C.I("u<ni>"))
B.Gg=x([0,128,192,224,240,248,252,254,255],y.t)
B.Gh=x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295],y.t)
B.aR8=x([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],y.t)
B.aRe=x([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],y.t)
B.agA=new A.OE(0,"predictor")
B.bPS=new A.OE(1,"crossColor")
B.bPT=new A.OE(2,"subtractGreen")
B.agB=new A.OE(3,"colorIndexing")
B.aRu=x([B.agA,B.bPS,B.bPT,B.agB],C.I("u<OE>"))
B.fR=x([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255],y.t)
B.aS5=x([A.dWe(),A.dW8(),A.dWo(),A.dWm(),A.dWg(),A.dWf(),A.dWh()],y.y)
B.Ym=x([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],y.t)
B.aSe=x([null,A.dWF(),A.dWG(),A.dWE()],C.I("u<~(m,m,m,m,m,dZ)?>"))
B.Yw=x([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15],y.t)
B.z1=x([0,36,72,109,145,182,218,255],y.t)
B.hX=x([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255],y.t)
B.aSr=x([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8],y.t)
B.lk=x([0,1,1,2,4,8,1,1,2,4,8,4,8],y.t)
B.bzC=new A.wA(0,"bitmap")
B.acN=new A.wA(1,"grayscale")
B.bzD=new A.wA(2,"indexed")
B.acO=new A.wA(3,"rgb")
B.acP=new A.wA(4,"cmyk")
B.bzE=new A.wA(5,"multiChannel")
B.bzF=new A.wA(6,"duoTone")
B.acQ=new A.wA(7,"lab")
B.aSt=x([B.bzC,B.acN,B.bzD,B.acO,B.acP,B.bzE,B.bzF,B.acQ],C.I("u<wA>"))
B.aSF=x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],y.t)
B.zc=x([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63],y.t)
B.Z1=x([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],y.t)
B.aF0=x([2,6,2,6],y.t)
B.aGZ=x([6,2,6,2],y.t)
B.aEU=x([2,2,6,6],y.t)
B.aEx=x([1,3,3,9],y.t)
B.aFW=x([4,0,12,0],y.t)
B.aFh=x([3,1,9,3],y.t)
B.aHH=x([8,8,0,0],y.t)
B.aFY=x([4,12,0,0],y.t)
B.aEh=x([16,0,0,0],y.t)
B.aEc=x([12,4,0,0],y.t)
B.aH8=x([6,6,2,2],y.t)
B.aFk=x([3,9,1,3],y.t)
B.aEb=x([12,0,4,0],y.t)
B.aHU=x([9,3,3,1],y.t)
B.e2=x([B.Rq,B.aF0,B.FC,B.aGZ,B.aEU,B.aEx,B.aFW,B.aFh,B.aHH,B.aFY,B.aEh,B.aEc,B.aH8,B.aFk,B.aEb,B.aHU],y.S)
B.np=x([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1],y.t)
B.btz={ProcessingSoftware:0,SubfileType:1,OldSubfileType:2,ImageWidth:3,ImageLength:4,ImageHeight:5,BitsPerSample:6,Compression:7,PhotometricInterpretation:8,Thresholding:9,CellWidth:10,CellLength:11,FillOrder:12,DocumentName:13,ImageDescription:14,Make:15,Model:16,StripOffsets:17,Orientation:18,SamplesPerPixel:19,RowsPerStrip:20,StripByteCounts:21,MinSampleValue:22,MaxSampleValue:23,XResolution:24,YResolution:25,PlanarConfiguration:26,PageName:27,XPosition:28,YPosition:29,GrayResponseUnit:30,GrayResponseCurve:31,T4Options:32,T6Options:33,ResolutionUnit:34,PageNumber:35,ColorResponseUnit:36,TransferFunction:37,Software:38,DateTime:39,Artist:40,HostComputer:41,Predictor:42,WhitePoint:43,PrimaryChromaticities:44,ColorMap:45,HalftoneHints:46,TileWidth:47,TileLength:48,TileOffsets:49,TileByteCounts:50,BadFaxLines:51,CleanFaxData:52,ConsecutiveBadFaxLines:53,InkSet:54,InkNames:55,NumberofInks:56,DotRange:57,TargetPrinter:58,ExtraSamples:59,SampleFormat:60,SMinSampleValue:61,SMaxSampleValue:62,TransferRange:63,ClipPath:64,JPEGProc:65,JPEGInterchangeFormat:66,JPEGInterchangeFormatLength:67,YCbCrCoefficients:68,YCbCrSubSampling:69,YCbCrPositioning:70,ReferenceBlackWhite:71,ApplicationNotes:72,Rating:73,CFARepeatPatternDim:74,CFAPattern:75,BatteryLevel:76,Copyright:77,ExposureTime:78,FNumber:79,"IPTC-NAA":80,ExifOffset:81,InterColorProfile:82,ExposureProgram:83,SpectralSensitivity:84,GPSOffset:85,ISOSpeed:86,OECF:87,SensitivityType:88,RecommendedExposureIndex:89,ExifVersion:90,DateTimeOriginal:91,DateTimeDigitized:92,OffsetTime:93,OffsetTimeOriginal:94,OffsetTimeDigitized:95,ComponentsConfiguration:96,CompressedBitsPerPixel:97,ShutterSpeedValue:98,ApertureValue:99,BrightnessValue:100,ExposureBiasValue:101,MaxApertureValue:102,SubjectDistance:103,MeteringMode:104,LightSource:105,Flash:106,FocalLength:107,SubjectArea:108,MakerNote:109,UserComment:110,SubSecTime:111,SubSecTimeOriginal:112,SubSecTimeDigitized:113,XPTitle:114,XPComment:115,XPAuthor:116,XPKeywords:117,XPSubject:118,FlashPixVersion:119,ColorSpace:120,ExifImageWidth:121,ExifImageLength:122,RelatedSoundFile:123,InteroperabilityOffset:124,FlashEnergy:125,SpatialFrequencyResponse:126,FocalPlaneXResolution:127,FocalPlaneYResolution:128,FocalPlaneResolutionUnit:129,SubjectLocation:130,ExposureIndex:131,SensingMethod:132,FileSource:133,SceneType:134,CVAPattern:135,CustomRendered:136,ExposureMode:137,WhiteBalance:138,DigitalZoomRatio:139,FocalLengthIn35mmFilm:140,SceneCaptureType:141,GainControl:142,Contrast:143,Saturation:144,Sharpness:145,DeviceSettingDescription:146,SubjectDistanceRange:147,ImageUniqueID:148,CameraOwnerName:149,BodySerialNumber:150,LensSpecification:151,LensMake:152,LensModel:153,LensSerialNumber:154,Gamma:155,PrintIM:156,Padding:157,OffsetSchema:158,OwnerName:159,SerialNumber:160,InteropIndex:161,InteropVersion:162,RelatedImageFileFormat:163,RelatedImageWidth:164,RelatedImageLength:165,GPSVersionID:166,GPSLatitudeRef:167,GPSLatitude:168,GPSLongitudeRef:169,GPSLongitude:170,GPSAltitudeRef:171,GPSAltitude:172,GPSTimeStamp:173,GPSSatellites:174,GPSStatus:175,GPSMeasureMode:176,GPSDOP:177,GPSSpeedRef:178,GPSSpeed:179,GPSTrackRef:180,GPSTrack:181,GPSImgDirectionRef:182,GPSImgDirection:183,GPSMapDatum:184,GPSDestLatitudeRef:185,GPSDestLatitude:186,GPSDestLongitudeRef:187,GPSDestLongitude:188,GPSDestBearingRef:189,GPSDestBearing:190,GPSDestDistanceRef:191,GPSDestDistance:192,GPSProcessingMethod:193,GPSAreaInformation:194,GPSDate:195,GPSDifferential:196}
B.a3n=new C.U(B.btz,[11,254,255,256,257,257,258,259,262,263,264,265,266,269,270,271,272,273,274,277,278,279,280,281,282,283,284,285,286,287,290,291,292,293,296,297,300,301,305,306,315,316,317,318,319,320,321,322,323,324,325,326,327,328,332,333,334,336,337,338,339,340,341,342,343,512,513,514,529,530,531,532,700,18246,33421,33422,33423,33432,33434,33437,33723,34665,34675,34850,34852,34853,34855,34856,34864,34866,36864,36867,36868,36880,36881,36882,37121,37122,37377,37378,37379,37380,37381,37382,37383,37384,37385,37386,37396,37500,37510,37520,37521,37522,40091,40092,40093,40094,40095,40960,40961,40962,40963,40964,40965,41483,41484,41486,41487,41488,41492,41493,41495,41728,41729,41730,41985,41986,41987,41988,41989,41990,41991,41992,41993,41994,41995,41996,42016,42032,42033,42034,42035,42036,42037,42240,50341,59932,59933,65e3,65001,1,2,4096,4097,4098,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],C.I("U<f,m>"))
B.H3=new C.c([34665,"exif",40965,"interop",34853,"gps"],C.I("c<m,f>"))
B.a7p=new C.c([B.hJ,1,B.iB,3,B.iC,15,B.ai,255,B.cV,65535,B.l8,4294967295,B.mN,127,B.mO,32767,B.mP,2147483647,B.jt,1,B.l7,1,B.mM,1],C.I("c<p9,m>"))
B.bzj=new A.aEf(0,"none")
B.bzk=new A.aEf(4,"paeth")
B.qF=new A.G2(0,"invalid")
B.acy=new A.G2(1,"pbm")
B.acz=new A.G2(2,"pgm2")
B.Ia=new A.G2(3,"pgm5")
B.acA=new A.G2(4,"ppm3")
B.Ib=new A.G2(5,"ppm6")
B.bBN=new A.bNW(0,"origin")
B.JV=new A.uV(0,"bilevel")
B.bMh=new A.uV(1,"gray4bit")
B.bMi=new A.uV(2,"gray")
B.bMj=new A.uV(3,"grayAlpha")
B.bMk=new A.uV(4,"palette")
B.afG=new A.uV(5,"rgb")
B.bMl=new A.uV(6,"rgba")
B.bMm=new A.uV(7,"yCbCrSub")
B.rb=new A.uV(8,"generic")
B.bMn=new A.uV(9,"invalid")
B.rj=new A.Xl(0,"undefined")
B.Kv=new A.Xl(1,"lossy")
B.Be=new A.Xl(2,"lossless")
B.bQh=new A.Xl(3,"animated")
B.Bk=new A.XY(0,"none")
B.bSG=new A.XY(1,"partial")
B.bSH=new A.XY(2,"full")
B.rm=new A.XY(3,"finish")})();(function staticFields(){$.y4=C.cb()
$.d5p=!0
$.d1R=null
$.df_=!1
$.df0=C.b([A.d3k(),A.dWq(),A.dWv(),A.dWw(),A.dWx(),A.dWy(),A.dWz(),A.dWA(),A.dWB(),A.dWC(),A.dWr(),A.dWs(),A.dWt(),A.dWu(),A.d3k(),A.d3k()],C.I("u<m(tr,m,m)>"))
$.iN=null
$.d85=C.cb()})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazy
x($,"e2R","dnP",()=>A.d1x(B.w7,B.R2,257,286,15))
x($,"e2Q","dnO",()=>A.d1x(B.TC,B.vT,0,30,15))
x($,"e2P","dnN",()=>A.d1x(null,B.aF4,0,19,7))
x($,"e63","cXb",()=>{var v=null,u="ISOSpeed"
return C.w([11,A.aW("ProcessingSoftware",B.bU,v),254,A.aW("SubfileType",B.dI,1),255,A.aW("OldSubfileType",B.dI,1),256,A.aW("ImageWidth",B.dI,1),257,A.aW("ImageLength",B.dI,1),258,A.aW("BitsPerSample",B.bA,1),259,A.aW("Compression",B.bA,1),262,A.aW("PhotometricInterpretation",B.bA,1),263,A.aW("Thresholding",B.bA,1),264,A.aW("CellWidth",B.bA,1),265,A.aW("CellLength",B.bA,1),266,A.aW("FillOrder",B.bA,1),269,A.aW("DocumentName",B.bU,v),270,A.aW("ImageDescription",B.bU,v),271,A.aW("Make",B.bU,v),272,A.aW("Model",B.bU,v),273,A.aW("StripOffsets",B.dI,v),274,A.aW("Orientation",B.bA,1),277,A.aW("SamplesPerPixel",B.bA,1),278,A.aW("RowsPerStrip",B.dI,1),279,A.aW("StripByteCounts",B.dI,1),280,A.aW("MinSampleValue",B.bA,1),281,A.aW("MaxSampleValue",B.bA,1),282,A.aW("XResolution",B.fc,1),283,A.aW("YResolution",B.fc,1),284,A.aW("PlanarConfiguration",B.bA,1),285,A.aW("PageName",B.bU,v),286,A.aW("XPosition",B.fc,1),287,A.aW("YPosition",B.fc,1),290,A.aW("GrayResponseUnit",B.bA,1),291,A.aW("GrayResponseCurve",B.a8,v),292,A.aW("T4Options",B.a8,v),293,A.aW("T6Options",B.a8,v),296,A.aW("ResolutionUnit",B.bA,1),297,A.aW("PageNumber",B.bA,2),300,A.aW("ColorResponseUnit",B.a8,v),301,A.aW("TransferFunction",B.bA,768),305,A.aW("Software",B.bU,v),306,A.aW("DateTime",B.bU,v),315,A.aW("Artist",B.bU,v),316,A.aW("HostComputer",B.bU,v),317,A.aW("Predictor",B.bA,1),318,A.aW("WhitePoint",B.fc,2),319,A.aW("PrimaryChromaticities",B.fc,6),320,A.aW("ColorMap",B.bA,v),321,A.aW("HalftoneHints",B.bA,2),322,A.aW("TileWidth",B.dI,1),323,A.aW("TileLength",B.dI,1),324,A.aW("TileOffsets",B.dI,v),325,A.aW("TileByteCounts",B.a8,v),326,A.aW("BadFaxLines",B.a8,v),327,A.aW("CleanFaxData",B.a8,v),328,A.aW("ConsecutiveBadFaxLines",B.a8,v),332,A.aW("InkSet",B.a8,v),333,A.aW("InkNames",B.a8,v),334,A.aW("NumberofInks",B.a8,v),336,A.aW("DotRange",B.a8,v),337,A.aW("TargetPrinter",B.bU,v),338,A.aW("ExtraSamples",B.a8,v),339,A.aW("SampleFormat",B.bA,1),340,A.aW("SMinSampleValue",B.a8,v),341,A.aW("SMaxSampleValue",B.a8,v),342,A.aW("TransferRange",B.a8,v),343,A.aW("ClipPath",B.a8,v),512,A.aW("JPEGProc",B.a8,v),513,A.aW("JPEGInterchangeFormat",B.a8,v),514,A.aW("JPEGInterchangeFormatLength",B.a8,v),529,A.aW("YCbCrCoefficients",B.fc,3),530,A.aW("YCbCrSubSampling",B.bA,1),531,A.aW("YCbCrPositioning",B.bA,1),532,A.aW("ReferenceBlackWhite",B.fc,6),700,A.aW("ApplicationNotes",B.bA,1),18246,A.aW("Rating",B.bA,1),33421,A.aW("CFARepeatPatternDim",B.a8,v),33422,A.aW("CFAPattern",B.a8,v),33423,A.aW("BatteryLevel",B.a8,v),33432,A.aW("Copyright",B.bU,v),33434,A.aW("ExposureTime",B.fc,1),33437,A.aW("FNumber",B.fc,v),33723,A.aW("IPTC-NAA",B.dI,1),34665,A.aW("ExifOffset",B.a8,v),34675,A.aW("InterColorProfile",B.a8,v),34850,A.aW("ExposureProgram",B.bA,1),34852,A.aW("SpectralSensitivity",B.bU,v),34853,A.aW("GPSOffset",B.a8,v),34855,A.aW(u,B.dI,1),34856,A.aW("OECF",B.a8,v),34864,A.aW("SensitivityType",B.bA,1),34866,A.aW("RecommendedExposureIndex",B.dI,1),34867,A.aW(u,B.dI,1),36864,A.aW("ExifVersion",B.jx,v),36867,A.aW("DateTimeOriginal",B.bU,v),36868,A.aW("DateTimeDigitized",B.bU,v),36880,A.aW("OffsetTime",B.bU,v),36881,A.aW("OffsetTimeOriginal",B.bU,v),36882,A.aW("OffsetTimeDigitized",B.bU,v),37121,A.aW("ComponentsConfiguration",B.jx,v),37122,A.aW("CompressedBitsPerPixel",B.a8,v),37377,A.aW("ShutterSpeedValue",B.a8,v),37378,A.aW("ApertureValue",B.a8,v),37379,A.aW("BrightnessValue",B.a8,v),37380,A.aW("ExposureBiasValue",B.a8,v),37381,A.aW("MaxApertureValue",B.a8,v),37382,A.aW("SubjectDistance",B.a8,v),37383,A.aW("MeteringMode",B.a8,v),37384,A.aW("LightSource",B.a8,v),37385,A.aW("Flash",B.a8,v),37386,A.aW("FocalLength",B.a8,v),37396,A.aW("SubjectArea",B.a8,v),37500,A.aW("MakerNote",B.jx,v),37510,A.aW("UserComment",B.jx,v),37520,A.aW("SubSecTime",B.a8,v),37521,A.aW("SubSecTimeOriginal",B.a8,v),37522,A.aW("SubSecTimeDigitized",B.a8,v),40091,A.aW("XPTitle",B.a8,v),40092,A.aW("XPComment",B.a8,v),40093,A.aW("XPAuthor",B.a8,v),40094,A.aW("XPKeywords",B.a8,v),40095,A.aW("XPSubject",B.a8,v),40960,A.aW("FlashPixVersion",B.a8,v),40961,A.aW("ColorSpace",B.bA,1),40962,A.aW("ExifImageWidth",B.bA,1),40963,A.aW("ExifImageLength",B.bA,1),40964,A.aW("RelatedSoundFile",B.a8,v),40965,A.aW("InteroperabilityOffset",B.a8,v),41483,A.aW("FlashEnergy",B.a8,v),41484,A.aW("SpatialFrequencyResponse",B.a8,v),41486,A.aW("FocalPlaneXResolution",B.a8,v),41487,A.aW("FocalPlaneYResolution",B.a8,v),41488,A.aW("FocalPlaneResolutionUnit",B.a8,v),41492,A.aW("SubjectLocation",B.a8,v),41493,A.aW("ExposureIndex",B.a8,v),41495,A.aW("SensingMethod",B.a8,v),41728,A.aW("FileSource",B.a8,v),41729,A.aW("SceneType",B.a8,v),41730,A.aW("CVAPattern",B.a8,v),41985,A.aW("CustomRendered",B.a8,v),41986,A.aW("ExposureMode",B.a8,v),41987,A.aW("WhiteBalance",B.a8,v),41988,A.aW("DigitalZoomRatio",B.a8,v),41989,A.aW("FocalLengthIn35mmFilm",B.a8,v),41990,A.aW("SceneCaptureType",B.a8,v),41991,A.aW("GainControl",B.a8,v),41992,A.aW("Contrast",B.a8,v),41993,A.aW("Saturation",B.a8,v),41994,A.aW("Sharpness",B.a8,v),41995,A.aW("DeviceSettingDescription",B.a8,v),41996,A.aW("SubjectDistanceRange",B.a8,v),42016,A.aW("ImageUniqueID",B.a8,v),42032,A.aW("CameraOwnerName",B.bU,v),42033,A.aW("BodySerialNumber",B.bU,v),42034,A.aW("LensSpecification",B.a8,v),42035,A.aW("LensMake",B.bU,v),42036,A.aW("LensModel",B.bU,v),42037,A.aW("LensSerialNumber",B.bU,v),42240,A.aW("Gamma",B.fc,1),50341,A.aW("PrintIM",B.a8,v),59932,A.aW("Padding",B.a8,v),59933,A.aW("OffsetSchema",B.a8,v),65e3,A.aW("OwnerName",B.bU,v),65001,A.aW("SerialNumber",B.bU,v)],y.p,C.I("avE"))})
w($,"e1T","b4p",()=>C.FA(511))
w($,"e1U","cWW",()=>C.FA(511))
w($,"e1W","cWX",()=>A.daQ(2041))
w($,"e1X","cWY",()=>A.daQ(225))
w($,"e1V","rc",()=>C.FA(766))
x($,"e_K","dm3",()=>A.d9e(0,0,0))
x($,"e3l","oS",()=>C.FA(1))
x($,"e3m","q1",()=>A.dxU(D.H.gar($.oS()),0,null))
x($,"e3e","oR",()=>E.dzH(1))
x($,"e3f","q0",()=>J.dq9(D.eY.gar($.oR()),0,null))
x($,"e3g","iu",()=>C.dzK(1))
x($,"e3i","m0",()=>J.b4D(D.bK.gar($.iu()),0,null))
x($,"e3h","Ix",()=>A.dvV(D.bK.gar($.iu())))
x($,"e3c","b4r",()=>C.cZT(1))
x($,"e3d","cX_",()=>A.deD(D.d8.gar($.b4r()),0))
x($,"e3a","d4l",()=>C.bGt(1))
x($,"e3b","do5",()=>A.deD(D.fY.gar($.d4l()),0))
x($,"e3j","d4m",()=>A.dFU(1))
x($,"e3k","do6",()=>{var v=$.d4m()
return A.dvW(v.gar(v))})})()};
(a=>{a["twV40GogXtWkDFHq3QuBB+s1hlU="]=a.current})($__dart_deferred_initializers__);