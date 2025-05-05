((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_210",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,A={
cxe(d){var x=new A.a1_()
x.a3O(d)
return x},
a1_:function a1_(){this.a=$
this.b=0
this.c=2147483647},
bRk:function bRk(){},
cq_:function cq_(){},
bRl:function bRl(){},
cq0:function cq0(){},
d0E(d,e,f,g){var x=A.cA4(),w=A.cA4(),v=A.cA4(),u=new Uint16Array(16),t=new Uint32Array(573),s=new Uint8Array(573)
x=new A.b8H(d,f,x,w,v,u,t,s)
x.b25(e,g)
x.b24(C.pV)
return x},
cFv(d,e,f,g){var x=d[e*2],w=d[f*2]
if(x>=w)x=x===w&&g[e]<=g[f]
else x=!0
return x},
cA4(){return new A.c4s()},
deq(d,e,f){var x,w,v,u,t,s,r,q=new Uint16Array(16)
for(x=0,w=1;w<=15;++w){x=x+f[w-1]<<1>>>0
q[w]=x}for(v=d.$flags|0,u=0;u<=e;++u){t=u*2
s=d[t+1]
if(s===0)continue
r=q[s]
q[s]=r+1
r=A.der(r,s)
v&2&&B.F(d)
d[t]=r}},
der(d,e){var x,w=0
do{x=A.pS(d,1)
w=(w|d&1)<<1>>>0
if(--e,e>0){d=x
continue}else break}while(!0)
return A.pS(w,1)},
cNL(d){return d<256?C.OS[d]:C.OS[256+A.pS(d,7)]},
cAg(d,e,f,g,h){return new A.ciW(d,e,f,g,h)},
pS(d,e){if(d>=0)return D.c.o9(d,e)
else return D.c.o9(d,e)+D.c.eu(2,(~e>>>0)+65536&65535)},
UL:function UL(d,e){this.a=d
this.b=e},
b8H:function b8H(d,e,f,g,h,i,j,k){var _=this
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
_.E=_.bv=_.bn=_.b9=_.aF=_.bz=_.bH=_.y2=_.y1=_.xr=$},
tF:function tF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c4s:function c4s(){this.c=this.b=this.a=$},
ciW:function ciW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bly:function bly(d,e,f,g){var _=this
_.a=d
_.b=null
_.c=e
_.e=_.d=0
_.r=f
_.w=g},
bRj:function bRj(){},
al0:function al0(d,e){this.a=d
this.b=e},
blP(d,e,f,g){var x,w,v=new A.blO(e)
if(g==null)g=0
if(f==null)f=d.length-g
x=d.length
if(g+f>x)f=x-g
w=y.D.b(d)?d:new Uint8Array(B.bV(d))
x=J.dh(D.C.gak(w),w.byteOffset+g,f)
v.b=x
v.d=x.length
return v},
blO:function blO(d){var _=this
_.b=null
_.c=0
_.d=$
_.a=d},
blQ:function blQ(){},
cJy(d,e){var x=e==null?32768:e
return new A.axq(new Uint8Array(x),d)},
axq:function axq(d,e){this.b=0
this.c=d
this.a=e},
buZ:function buZ(){},
a16(d,e,f){var x=0,w=B.k(y.D),v
var $async$a16=B.f(function(g,h){if(g===1)return B.h(h,w)
while(true)switch(x){case 0:x=3
return B.d(A.Ip(d,e,"jpg",new A.bkz(d,e,f),f),$async$a16)
case 3:v=h
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$a16,w)},
asC(d,e){var x=0,w=B.k(y.D),v
var $async$asC=B.f(function(f,g){if(f===1)return B.h(g,w)
while(true)switch(x){case 0:x=3
return B.d(A.Ip(d,e,"png",new A.bkA(d,e),null),$async$asC)
case 3:v=g
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$asC,w)},
bkB(d,e,f){var x=0,w=B.k(y.D),v
var $async$bkB=B.f(function(g,h){if(g===1)return B.h(h,w)
while(true)switch(x){case 0:x=3
return B.d(A.Ip(d,e,"webp",new A.bkC(d,e,f),f),$async$bkB)
case 3:v=h
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$bkB,w)},
Ip(d,e,f,g,h){return A.d42(d,e,f,g,h)},
d42(d,e,f,g,h){var x=0,w=B.k(y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j
var $async$Ip=B.f(function(i,a0){if(i===1){t.push(a0)
x=u}while(true)switch(x){case 0:if(!$.cDR){v=g.$0()
x=1
break}m=$.hE().b
m===$&&B.b()
r=m
q="uploads/"+Date.now()+"."+f
u=4
m=r.as
m===$&&B.b()
x=7
return B.d(m.bU("images-temp").Rq(q,d),$async$Ip)
case 7:p=a0
if(J.bu(p)===0){m=g.$0()
v=m
x=1
break}u=9
m=r.as
m===$&&B.b()
x=12
return B.d(m.bU("images-temp").YL(0,q,new A.bLW(e,h,C.bvm)),$async$Ip)
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
if(m instanceof B.KS){n=m
if(n.c==="403")$.cDR=!1
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
return B.d(m.bU("images-temp").K(0,B.a([q],y.T)),$async$Ip)
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
return B.j($async$Ip,w)},
cxj(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n=null,m=A.cQK(d)
if(m==null)throw B.n(B.cN("Failed to decode "+f+" image"))
x=A.dlP(m,e)
if(f==="jpg"){w=g==null?85:g
v=new Uint8Array(64)
u=new Uint8Array(64)
t=new Float32Array(64)
s=new Float32Array(64)
r=B.bQ(65535,n,!1,y.cl)
q=y.s
p=B.bQ(65535,n,!1,q)
o=B.bQ(64,n,!1,q)
q=B.bQ(64,n,!1,q)
v=new A.bmv(v,u,t,s,r,p,o,q,new Int32Array(2048))
v.e=v.TL(C.VN,C.tr)
v.f=v.TL(C.QG,C.tr)
v.r=v.TL(C.NK,C.P3)
v.w=v.TL(C.Pv,C.RY)
v.bdD()
v.bdP()
v.aO1(w)
return new Uint8Array(B.bV(v.bCw(x,C.Ng)))}else if(f==="png")return new Uint8Array(B.bV(new A.bwi(C.bt8,6).bCx(x,!1)))
else if(f==="webp")return d
else throw B.n(B.cN("Unsupported image format: "+f))},
d41(d){var x=d.length
if(x>=2&&d[0]===255&&d[1]===216)return"jpg"
if(x>=8&&d[0]===137&&d[1]===80&&d[2]===78&&d[3]===71)return"png"
if(x>=12&&d[0]===82&&d[1]===73&&d[2]===70&&d[3]===70&&d[8]===87&&d[9]===69&&d[10]===66&&d[11]===80)return"webp"
return"jpg"},
Io(d,e,f){var x=0,w=B.k(y.D),v,u
var $async$Io=B.f(function(g,h){if(g===1)return B.h(h,w)
while(true)switch(x){case 0:u=A.d41(d)
x=u==="jpg"?3:5
break
case 3:x=6
return B.d(A.a16(d,e,f),$async$Io)
case 6:v=h
x=1
break
x=4
break
case 5:x=u==="png"?7:9
break
case 7:x=10
return B.d(A.asC(d,e),$async$Io)
case 10:v=h
x=1
break
x=8
break
case 9:x=u==="webp"?11:13
break
case 11:x=14
return B.d(A.bkB(d,e,f),$async$Io)
case 14:v=h
x=1
break
x=12
break
case 13:x=15
return B.d(A.a16(d,e,f),$async$Io)
case 15:v=h
x=1
break
case 12:case 8:case 4:case 1:return B.i(v,w)}})
return B.j($async$Io,w)},
bkz:function bkz(d,e,f){this.a=d
this.b=e
this.c=f},
bkA:function bkA(d,e){this.a=d
this.b=e},
bkC:function bkC(d,e,f){this.a=d
this.b=e
this.c=f},
b2g:function b2g(d,e){this.a=d
this.b=e},
hI:function hI(d){this.a=-1
this.b=d},
O9:function O9(d){this.a=d},
Oa:function Oa(d){this.a=d},
Ob:function Ob(d){this.a=d},
Oc:function Oc(d){this.a=d},
Od:function Od(d){this.a=d},
Oe:function Oe(d){this.a=d},
Oh:function Oh(d,e){this.a=d
this.b=e},
Oi:function Oi(d){this.a=d},
Oj:function Oj(d,e){this.a=d
this.b=e},
Ok:function Ok(d){this.a=d},
Ol:function Ol(d,e){this.a=d
this.b=e},
d_d(d,e,f,g){var x=new A.Of(new Uint8Array(4))
x.aWa(d,e,f,g)
return x},
ys:function ys(d){this.a=d},
alO:function alO(d){this.a=d},
Of:function Of(d){this.a=d},
YP:function YP(d){this.a=d},
alZ:function alZ(d){this.a=d},
aX4(d,e,f){var x
if(e===f)return d
switch(e.a){case 0:if(d===0)x=0
else{x=C.a3K.h(0,f)
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
case 1:return D.d.C(D.d.b3(d,0,1)*3)
case 2:return D.d.C(D.d.b3(d,0,1)*15)
case 3:return D.d.C(D.d.b3(d,0,1)*255)
case 4:return D.d.C(D.d.b3(d,0,1)*65535)
case 5:return D.d.C(D.d.b3(d,0,1)*4294967295)
case 6:return D.d.C(d<0?D.d.b3(d,-1,1)*128:D.d.b3(d,-1,1)*127)
case 7:return D.d.C(d<0?D.d.b3(d,-1,1)*32768:D.d.b3(d,-1,1)*32767)
case 8:return D.d.C(d<0?D.d.b3(d,-1,1)*2147483648:D.d.b3(d,-1,1)*2147483647)
case 9:case 10:case 11:return d}break}},
nZ:function nZ(d,e){this.a=d
this.b=e},
akM:function akM(d,e){this.a=d
this.b=e},
a_O(d){var x=new A.Pu(B.K(y.N,y.P))
x.aWo(d)
return x},
cGv(d){var x=new A.Pu(B.K(y.N,y.P))
x.vD(0,d)
return x},
Pu:function Pu(d){this.a=d},
aLm:function aLm(d,e){this.a=d
this.b=e},
aN(d,e,f){return new A.apZ(d,e)},
apZ:function apZ(d,e){this.a=d
this.b=e},
uC:function uC(d){this.a=d},
bkr:function bkr(d){this.a=d},
cHx(d){var x=new A.qj(B.K(y.p,y.r),new A.uC(B.K(y.N,y.P)))
x.ab_(d)
return x},
qj:function qj(d,e){this.a=d
this.b=e},
bks:function bks(d){this.a=d},
bkt:function bkt(d){this.a=d},
d40(d){var x=new Uint16Array(1)
x[0]=d
return new A.z_(x)},
cHF(d,e){var x=new A.z_(new Uint16Array(e))
x.aWt(d,e)
return x},
d4_(d){var x=new Uint32Array(1)
x[0]=d
return new A.rJ(x)},
cHA(d,e){var x=new A.rJ(new Uint32Array(e))
x.aWq(d,e)
return x},
cHB(d,e){var x,w=J.kI(e,y.i)
for(x=0;x<e;++x)w[x]=new A.oc(d.a5(),d.a5())
return new A.uD(w)},
cHE(d,e){var x=new A.yZ(new Int16Array(e))
x.aWs(d,e)
return x},
cHC(d,e){var x=new A.yY(new Int32Array(e))
x.aWr(d,e)
return x},
cHD(d,e){var x,w,v,u,t=J.kI(e,y.i)
for(x=0;x<e;++x){w=d.a5()
v=$.hF()
v.$flags&2&&B.F(v)
v[0]=w
w=$.kX()
u=w[0]
v[0]=d.a5()
t[x]=new A.oc(u,w[0])}return new A.uE(t)},
cHG(d){var x=new Float32Array(1)
x[0]=d
return new A.Cv(x)},
cHH(d,e){var x=new A.Cv(new Float32Array(e))
x.aWu(d,e)
return x},
cHy(d){var x=new Float64Array(1)
x[0]=d
return new A.Cu(x)},
cHz(d,e){var x=new A.Cu(new Float64Array(e))
x.aWp(d,e)
return x},
n4:function n4(d,e){this.a=d
this.b=e},
kd:function kd(){},
uB:function uB(d){this.a=d},
Ct:function Ct(d){this.a=d},
z_:function z_(d){this.a=d},
rJ:function rJ(d){this.a=d},
uD:function uD(d){this.a=d},
wA:function wA(d){this.a=d},
yZ:function yZ(d){this.a=d},
yY:function yY(d){this.a=d},
uE:function uE(d){this.a=d},
Cv:function Cv(d){this.a=d},
Cu:function Cu(d){this.a=d},
Im:function Im(d){this.a=d},
cEe(d){var x,w,v=new A.b0Q()
if(!A.cvI(d))B.a7(A.cc("Not a bitmap file."))
d.d+=2
x=d.a5()
w=$.hF()
w.$flags&2&&B.F(w)
w[0]=x
x=$.kX()
d.d+=4
w[0]=d.a5()
v.b=x[0]
return v},
cvI(d){if(d.c-d.d<2)return!1
return A.cf(d,null,0).am()===19778},
cZt(d,e){var x,w,v,u,t=e==null?A.cEe(d):e,s=d.d,r=d.a5(),q=d.a5(),p=$.hF()
p.$flags&2&&B.F(p)
p[0]=q
q=$.kX()
x=q[0]
p[0]=d.a5()
q=q[0]
w=d.am()
v=d.am()
u=C.U7[d.a5()]
d.a5()
p[0]=d.a5()
p[0]=d.a5()
p=d.a5()
d.a5()
s=new A.Gx(t,x,q,r,w,v,u,p,s)
s.akk(d,e)
return s},
m6:function m6(d,e){this.a=d
this.b=e},
b0Q:function b0Q(){this.b=$},
Gx:function Gx(d,e,f,g,h,i,j,k,l){var _=this
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
akQ:function akQ(d){this.a=$
this.b=null
this.c=d},
b0P:function b0P(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
b9I:function b9I(d){this.a=$
this.b=null
this.c=d},
b8p:function b8p(){},
b8q:function b8q(){},
bc5:function bc5(){},
aq_:function aq_(d,e,f){this.a=d
this.b=e
this.c=f},
at3:function at3(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
Pw:function Pw(d,e){this.a=d
this.b=e},
HC:function HC(d,e){this.a=d
this.b=e},
aq0:function aq0(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
cGw(d,e,f,g){var x,w
switch(d.a){case 1:return new A.bm1(f,e)
case 2:return new A.at5(f,g==null?1:g,e)
case 3:return new A.at5(f,g==null?16:g,e)
case 4:x=g==null?32:g
w=new A.bm_(f,x,e)
w.aWC(e,f,x)
return w
case 5:return new A.bm0(f,g==null?16:g,e)
case 6:return new A.at3(f,g==null?32:g,!1,e)
case 7:return new A.at3(f,g==null?32:g,!0,e)
default:throw B.n(A.cc("Invalid compression type: "+d.j(0)))}},
un:function un(d,e){this.a=d
this.b=e},
bdw:function bdw(){},
blZ:function blZ(){},
d23(d,e,f,g){var x,w,v,u,t,s,r,q
if(e===0){if(g!==0)throw B.n(A.cc("Incomplete huffman data"))
return}x=d.d
w=d.a5()
v=d.a5()
d.d+=4
u=d.a5()
t=!0
if(w<65537)t=v>=65537
if(t)throw B.n(A.cc("Invalid huffman table size"))
d.d+=4
s=B.bQ(65537,0,!1,y.p)
r=J.iY(16384,y.W)
for(q=0;q<16384;++q)r[q]=new A.aq1()
A.d24(d,e-20,w,v,s)
if(u>8*(e-(d.d-x)))throw B.n(A.cc("Error in header for Huffman-encoded data (invalid number of bits)."))
A.d20(s,w,v,r)
A.d22(s,r,d,u,v,g,f)},
d22(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p="Error in Huffman-encoded data (invalid code).",o=B.a([0,0],y.t),n=f.d+D.c.b0(g+7,8)
for(x=0;f.d<n;){A.cwL(o,f)
for(;w=o[1],w>=14;){v=e[D.c.o9(o[0],w-14)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cwM(v.b,h,o,f,j,x,i)}else{if(v.c==null)throw B.n(A.cc(p))
for(t=0;t<v.b;++t){s=d[v.c[t]]&63
while(!0){w=o[1]
if(!(w<s&&f.d<n))break
A.cwL(o,f)}if(w>=s){u=v.c
w-=s
if(d[u[t]]>>>6===(D.c.o9(o[0],w)&D.c.eu(1,s)-1)>>>0){o[1]=w
r=A.cwM(u[t],h,o,f,j,x,i)
x=r
break}}}if(t===v.b)throw B.n(A.cc(p))}}}q=8-g&7
o[0]=D.c.S(o[0],q)
o[1]=o[1]-q
for(;w=o[1],w>0;){v=e[D.c.f0(o[0],14-w)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cwM(v.b,h,o,f,j,x,i)}else throw B.n(A.cc(p))}if(x!==i)throw B.n(A.cc("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
cwM(d,e,f,g,h,i,j){var x,w,v,u,t,s="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)A.cwL(f,g)
x=f[1]-8
f[1]=x
w=D.c.o9(f[0],x)&255
if(i+w>j)throw B.n(A.cc(s))
v=h[i-1]
for(x=h.$flags|0;u=w-1,w>0;w=u,i=t){t=i+1
x&2&&B.F(h)
h[i]=v}}else{if(i<j){h.toString
t=i+1
h.$flags&2&&B.F(h)
h[i]=d}else throw B.n(A.cc(s))
i=t}return i},
d20(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n="Error in Huffman-encoded data (invalid code table entry)."
for(x=y.t,w=y.p;e<=f;++e){v=d[e]
u=v>>>6
t=v&63
if(D.c.hJ(u,t)!==0)throw B.n(A.cc(n))
if(t>14){s=g[D.c.h7(u,t-14)]
if(s.a!==0)throw B.n(A.cc(n))
v=++s.b
r=s.c
if(r!=null){v=B.bQ(v,0,!1,w)
s.c=v
for(q=s.b-1,p=0;p<q;++p)v[p]=r[p]}else s.c=B.a([0],x)
s.c[s.b-1]=e}else if(t!==0){v=14-t
o=D.c.f0(u,v)
for(p=D.c.f0(1,v);p>0;--p,++o){s=g[o]
if(s.a!==0||s.c!=null)throw B.n(A.cc(n))
s.a=t
s.b=e}}}},
d24(d,e,f,g,h){var x,w,v,u,t,s="Error in Huffman-encoded data (unexpected end of code table data).",r="Error in Huffman-encoded data (code table is longer than expected).",q=d.d,p=B.a([0,0],y.t)
for(x=g+1;f<=g;++f){if(d.d-q>e)throw B.n(A.cc(s))
w=A.cGx(6,p,d)
h[f]=w
if(w===63){if(d.d-q>e)throw B.n(A.cc(s))
v=A.cGx(8,p,d)+6
if(f+v>x)throw B.n(A.cc(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}else if(w>=59){v=w-59+2
if(f+v>x)throw B.n(A.cc(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}}A.d21(h)},
d21(d){var x,w,v,u,t,s=B.bQ(59,0,!1,y.p)
for(x=0;x<65537;++x){w=d[x]
s[w]=s[w]+1}for(v=0,x=58;x>0;--x,v=u){u=v+s[x]>>>1
s[x]=v}for(x=0;x<65537;++x){t=d[x]
if(t>0){w=s[t]
s[t]=w+1
d[x]=(t|w<<6)>>>0}}},
cwL(d,e){d[0]=((d[0]<<8|e.cu())&-1)>>>0
d[1]=(d[1]+8&-1)>>>0},
cGx(d,e,f){var x
for(;x=e[1],x<d;){e[0]=((e[0]<<8|J.v(f.a,f.d++))&-1)>>>0
e[1]=(e[1]+8&-1)>>>0}x-=d
e[1]=x
return(D.c.o9(e[0],x)&D.c.eu(1,d)-1)>>>0},
aq1:function aq1(){this.b=this.a=0
this.c=null},
d25(d){var x=A.d_(d,!1,null,0)
if(x.a5()!==20000630)return!1
if(x.cu()!==2)return!1
if((x.rY()&4294967289)>>>0!==0)return!1
return!0},
bdy:function bdy(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
cI3(d,e,f){var x=new A.at4(d,B.a([],y.Q),B.K(y.N,y.n),C.LM,e)
x.aWg(d,e,f)
return x},
a_U:function a_U(){},
bdz:function bdz(d,e){this.a=d
this.b=e},
at4:function at4(d,e,f,g,h){var _=this
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
bm_:function bm_(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
aOu:function aOu(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
bm0:function bm0(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
bm1:function bm1(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
at5:function at5(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
bdx:function bdx(){this.a=null},
cH8(d){var x=new Uint8Array(d*3)
return new A.a0w(A.d3n(d),d,null,new A.uS(x,d,3))},
d3m(d){return new A.a0w(d.a,d.b,d.c,A.cJF(d.d))},
d3n(d){var x
for(x=1;x<=8;++x)if(D.c.eu(1,x)>=d)return x
return 0},
a0w:function a0w(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0x:function a0x(){},
at6:function at6(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=$},
arC:function arC(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
bhF:function bhF(){var _=this
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
cHu(d){var x,w,v,u,t,s
if(d.am()!==0)return null
x=d.am()
if(x>=3)return null
w=C.axr[x]
if(w===C.Mg)return null
v=d.am()
u=J.kI(v,y.Y)
for(t=0;t<v;++t){J.v(d.a,d.d++)
s=J.v(d.a,d.d++)
J.v(d.a,d.d++);++d.d
d.am()
d.am()
u[t]=new A.asq(s,d.a5(),d.a5())}return new A.bkf(w,v,u)},
Q2:function Q2(d,e){this.a=d
this.b=e},
bkf:function bkf(d,e,f){this.c=d
this.d=e
this.e=f},
asq:function asq(d,e,f){this.b=d
this.d=e
this.e=f},
bkd:function bkd(d,e,f,g,h,i,j,k,l){var _=this
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
bke:function bke(){this.b=this.a=null},
alT:function alT(d,e,f){this.e=d
this.f=e
this.r=f},
Ic:function Ic(){},
Id:function Id(d){this.a=d},
a10:function a10(d){this.a=d},
bmr:function bmr(){this.d=null},
CR:function CR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.y=_.x=_.w=_.r=_.f=_.e=$},
cIj(){var x=B.bQ(4,null,!1,y.a7),w=B.a([],y.cB),v=y.bT,u=J.CO(0,v)
v=J.CO(0,v)
return new A.bmt(new A.Pu(B.K(y.N,y.P)),x,w,u,v,B.a([],y.E))},
bmt:function bmt(d,e,f,g,h,i){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i},
bmu:function bmu(d,e){this.a=d
this.b=e},
Vk:function Vk(d){this.a=d
this.b=0},
atj:function atj(d,e){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=d
_.z=e},
bmx:function bmx(){this.r=this.f=$},
atk:function atk(d,e,f,g,h,i,j,k){var _=this
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
ati:function ati(){},
bms:function bms(d,e){this.a=d
this.b=e},
bmv:function bmv(d,e,f,g,h,i,j,k,l){var _=this
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
RL:function RL(d,e){this.a=d
this.b=e},
a4f:function a4f(d,e){this.a=d
this.b=e},
a4g:function a4g(){},
at7:function at7(d,e,f,g,h,i,j,k,l){var _=this
_.y=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
cI5(){var x=y.N
return new A.bm3(B.K(x,x),B.a([],y.d),B.a([],y.t))},
DH:function DH(d,e){this.a=d
this.b=e},
bwk:function bwk(){},
bm3:function bm3(d,e,f){var _=this
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
ayc:function ayc(d){var _=this
_.a=d
_.c=_.b=0
_.d=$
_.e=0},
ayd:function ayd(d,e){this.a=d
this.b=e},
bwi:function bwi(d,e){var _=this
_.a=null
_.b=d
_.c=0
_.d=e
_.e=$
_.f=0
_.r=!1
_.w=null},
DI:function DI(d,e){this.a=d
this.b=e},
JG:function JG(d){this.b=this.a=0
this.e=d},
bwl:function bwl(d){this.b=this.a=null
this.c=d},
bwm:function bwm(){},
ayI:function ayI(){this.b=this.a=null},
ayJ:function ayJ(){this.b=this.a=null},
x2:function x2(){},
ayL:function ayL(){this.b=this.a=null},
ayM:function ayM(){this.b=this.a=null},
ayP:function ayP(){this.b=this.a=null},
ayQ:function ayQ(){this.b=this.a=null},
a4B:function a4B(d){this.b=d},
ayO:function ayO(){this.b=$
this.c=null},
bxg:function bxg(){var _=this
_.w=_.r=_.f=_.e=$},
RZ:function RZ(d){this.a=d
this.c=null},
cK4(d){var x=new A.bxi(B.K(y.p,y.a2))
x.aWN(d)
return x},
cyr(d,e,f,g){var x=d/255,w=e/255,v=f/255,u=g/255,t=w*(1-v),s=x*(1-u)
return D.d.C(D.d.b3((2*x<v?2*w*x+t+s:u*v-2*(v-x)*(u-w)+t+s)*255,0,255))},
bxj(d,e){if(e===0)return 0
return D.d.C(D.c.b3(D.d.C(255*(1-(1-d/255)/(e/255))),0,255))},
bxl(d,e){return D.d.C(D.c.b3(d+e-255,0,255))},
cyt(d,e){return D.d.C(D.c.b3(255-(255-e)*(255-d),0,255))},
bxk(d,e){if(e===255)return 255
return D.d.C(D.d.b3(d/255/(1-e/255)*255,0,255))},
cyu(d,e){var x=d/255,w=e/255,v=1-w
return D.d.aS(255*(v*w*x+w*(1-v*(1-x))))},
cyp(d,e){var x=e/255,w=d/255
if(w<0.5)return D.d.aS(510*x*w)
else return D.d.aS(255*(1-2*(1-x)*(1-w)))},
cyv(d,e){if(e<128)return A.bxj(d,2*e)
else return A.bxk(d,2*(e-128))},
cyq(d,e){var x
if(e<128)return A.bxl(d,2*e)
else{x=2*(e-128)
return x+d>255?255:d+x}},
cys(d,e){return e<128?Math.min(d,2*e):Math.max(d,2*(e-128))},
cyo(d,e){return D.d.aS(e+d-2*e*d/255)},
po(d,e,f){var x
if(d==null)x=0
else x=f===1?d[e]:(d[e]<<8|d[e+1])>>>8
return x},
cK5(b5,b6,b7,b8,b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4=B.K(y.p,y.aG)
for(x=b9.length,w=0;v=b9.length,w<v;b9.length===x||(0,B.S)(b9),++w){u=b9[w]
b4.m(0,u.a,u)}if(b6===8)t=1
else t=b6===16?2:-1
s=A.i1(b3,b3,C.ac,0,C.bv,b8,b3,0,v,b3,C.ac,b7,!1)
if(t===-1)throw B.n(A.cc("PSD: unsupported bit depth: "+B.o(b6)))
r=b4.h(0,0)
q=b4.h(0,1)
p=b4.h(0,2)
o=b4.h(0,-1)
n=B.a([0,0,0],y.t)
m=-t
for(x=s.a,x=x.ga6(x),l=v>=5,k=v===4,j=v>=2,v=v>=4;x.q();){i=x.gL(x)
m+=t
switch(b5){case C.a99:i.sah(0,A.po(r.c,m,t))
i.sar(A.po(q.c,m,t))
i.sav(0,A.po(p.c,m,t))
i.saG(0,v?A.po(o.c,m,t):255)
if(i.gaG(i)!==0){i.sah(0,(i.gah(i)+i.gaG(i)-255)*255/i.gaG(i))
i.sar((i.gar()+i.gaG(i)-255)*255/i.gaG(i))
i.sav(0,(i.gav(i)+i.gaG(i)-255)*255/i.gaG(i))}break
case C.a9b:h=A.po(r.c,m,t)
g=A.po(q.c,m,t)
f=A.po(p.c,m,t)
e=v?A.po(o.c,m,t):255
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
i.sah(0,a8[0])
i.sar(a8[1])
i.sav(0,a8[2])
i.saG(0,e)
break
case C.a98:a9=A.po(r.c,m,t)
e=j?A.po(o.c,m,t):255
i.sah(0,a9)
i.sar(a9)
i.sav(0,a9)
i.saG(0,e)
break
case C.a9a:b0=A.po(r.c,m,t)
b1=A.po(q.c,m,t)
d=A.po(p.c,m,t)
b2=A.po(b4.h(0,k?-1:3).c,m,t)
e=l?A.po(o.c,m,t):255
A.cQq(255-b0,255-b1,255-d,255-b2,n)
i.sah(0,n[0])
i.sar(n[1])
i.sav(0,n[2])
i.saG(0,e)
break
default:throw B.n(A.cc("Unhandled color mode: "+B.o(b5)))}}return s},
uZ:function uZ(d,e){this.a=d
this.b=e},
bxi:function bxi(d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=_.w=$
_.y=null
_.z=d
_.as=$
_.ay=_.ax=_.at=null},
ayK:function ayK(d,e){this.a=d
this.b=e},
ayN:function ayN(d,e,f){var _=this
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
d7E(d,e){var x,w
switch(d){case"lsct":x=new A.ayO()
w=e.c-e.d
x.b=e.a5()
if(w>=12){if(e.js(4)!=="8BIM")B.a7(A.cc("Invalid key in layer additional data"))
x.c=e.js(4)}if(w>=16)e.a5()
return x
default:return new A.a4B(e)}},
S_:function S_(){},
bxh:function bxh(){this.a=null},
ayT:function ayT(){},
zE:function zE(d,e,f){this.a=d
this.b=e
this.c=f},
mr:function mr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4E:function a4E(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
S3:function S3(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
ayS:function ayS(){this.y=this.b=this.a=0},
zF(d,e){return(C.vQ[d>>>8]<<17|C.vQ[e>>>8]<<16|C.vQ[d&255]<<1|C.vQ[e&255])>>>0},
t5:function t5(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
bxm:function bxm(){this.b=this.a=null},
aDe:function aDe(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
ot:function ot(d,e){this.a=d
this.b=e},
bJo:function bJo(){this.a=null
this.b=$},
bK3:function bK3(d){this.a=d
this.c=this.b=0},
aDh:function aDh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
czk(d,e,f){var x=new A.bK5(e,f,d),w=y.s
x.e=B.bQ(e,null,!1,w)
x.f=B.bQ(e,null,!1,w)
return x},
bK5:function bK5(d,e,f){var _=this
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
aDi:function aDi(d,e,f,g){var _=this
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
Ld:function Ld(d,e){this.a=d
this.b=e},
kR:function kR(d,e){this.a=d
this.b=e},
tp:function tp(d,e){this.a=d
this.b=e},
bK6:function bK6(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
cIE(){return new A.bo0(new Uint8Array(4096))},
bo0:function bo0(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
bK4:function bK4(){this.a=null
this.c=$},
czJ(d,e){var x=new Int32Array(4),w=new Int32Array(4),v=new Int8Array(4),u=new Int8Array(4),t=B.bQ(8,null,!1,y.ak),s=B.bQ(4,null,!1,y.Z)
return new A.bPs(d,e,new A.bPy(),new A.bPC(),new A.bPu(x,w),new A.bPE(v,u),t,s,new Uint8Array(4))},
cN8(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
bPs:function bPs(d,e,f,g,h,i,j,k,l){var _=this
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
_.bH=$
_.bz=null
_.b9=_.aF=$
_.bn=null
_.bv=$},
bPF:function bPF(){},
cN5(d){var x=new A.a96(d)
x.b=254
x.c=0
x.d=-8
return x},
a96:function a96(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
eP(d,e,f){return D.c.ll(D.c.S(d+2*e+f+2,2),32)},
dcj(d){var x,w=B.a([A.eP(J.v(d.a,d.d+-33),J.v(d.a,d.d+-32),J.v(d.a,d.d+-31)),A.eP(J.v(d.a,d.d+-32),J.v(d.a,d.d+-31),J.v(d.a,d.d+-30)),A.eP(J.v(d.a,d.d+-31),J.v(d.a,d.d+-30),J.v(d.a,d.d+-29)),A.eP(J.v(d.a,d.d+-30),J.v(d.a,d.d+-29),J.v(d.a,d.d+-28))],y.t)
for(x=0;x<4;++x)d.Ai(x*32,4,w)},
dcb(d){var x=J.v(d.a,d.d+-33),w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95),s=A.cf(d,null,0),r=s.Ra(),q=A.eP(x,w,v)
r.$flags&2&&B.F(r)
r[0]=16843009*q
s.d+=32
q=s.Ra()
r=A.eP(w,v,u)
q.$flags&2&&B.F(q)
q[0]=16843009*r
s.d+=32
r=s.Ra()
q=A.eP(v,u,t)
r.$flags&2&&B.F(r)
r[0]=16843009*q
s.d+=32
q=s.Ra()
r=A.eP(u,t,t)
q.$flags&2&&B.F(q)
q[0]=16843009*r},
dc9(d){var x,w,v,u
for(x=4,w=0;w<4;++w)x+=J.v(d.a,d.d+(w-32))+J.v(d.a,d.d+(-1+w*32))
x=D.c.S(x,3)
for(w=0;w<4;++w){v=d.a
u=d.d+w*32
J.tU(v,u,u+4,x)}},
czK(d,e){var x,w,v,u,t,s=255-J.v(d.a,d.d+-33)
for(x=0,w=0;w<e;++w){v=s+J.v(d.a,d.d+(x-1))
for(u=0;u<e;++u){t=$.q_()[v+J.v(d.a,d.d+(-32+u))]
J.bY(d.a,d.d+(x+u),t)}x+=32}},
dch(d){A.czK(d,4)},
dci(d){A.czK(d,8)},
dcg(d){A.czK(d,16)},
dcf(d){var x,w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95),s=J.v(d.a,d.d+-33),r=J.v(d.a,d.d+-32),q=J.v(d.a,d.d+-31),p=J.v(d.a,d.d+-30),o=J.v(d.a,d.d+-29)
d.m(0,96,A.eP(v,u,t))
x=A.eP(w,v,u)
d.m(0,97,x)
d.m(0,64,x)
x=A.eP(s,w,v)
d.m(0,98,x)
d.m(0,65,x)
d.m(0,32,x)
x=A.eP(r,s,w)
d.m(0,99,x)
d.m(0,66,x)
d.m(0,33,x)
d.m(0,0,x)
x=A.eP(q,r,s)
d.m(0,67,x)
d.m(0,34,x)
d.m(0,1,x)
x=A.eP(p,q,r)
d.m(0,35,x)
d.m(0,2,x)
d.m(0,3,A.eP(o,p,q))},
dce(d){var x,w=J.v(d.a,d.d+-32),v=J.v(d.a,d.d+-31),u=J.v(d.a,d.d+-30),t=J.v(d.a,d.d+-29),s=J.v(d.a,d.d+-28),r=J.v(d.a,d.d+-27),q=J.v(d.a,d.d+-26),p=J.v(d.a,d.d+-25)
d.m(0,0,A.eP(w,v,u))
x=A.eP(v,u,t)
d.m(0,32,x)
d.m(0,1,x)
x=A.eP(u,t,s)
d.m(0,64,x)
d.m(0,33,x)
d.m(0,2,x)
x=A.eP(t,s,r)
d.m(0,96,x)
d.m(0,65,x)
d.m(0,34,x)
d.m(0,3,x)
x=A.eP(s,r,q)
d.m(0,97,x)
d.m(0,66,x)
d.m(0,35,x)
x=A.eP(r,q,p)
d.m(0,98,x)
d.m(0,67,x)
d.m(0,99,A.eP(q,p,p))},
dcl(d){var x=J.v(d.a,d.d+-1),w=J.v(d.a,d.d+31),v=J.v(d.a,d.d+63),u=J.v(d.a,d.d+-33),t=J.v(d.a,d.d+-32),s=J.v(d.a,d.d+-31),r=J.v(d.a,d.d+-30),q=J.v(d.a,d.d+-29),p=D.c.ll(D.c.S(u+t+1,1),32)
d.m(0,65,p)
d.m(0,0,p)
p=D.c.ll(D.c.S(t+s+1,1),32)
d.m(0,66,p)
d.m(0,1,p)
p=D.c.ll(D.c.S(s+r+1,1),32)
d.m(0,67,p)
d.m(0,2,p)
d.m(0,3,D.c.ll(D.c.S(r+q+1,1),32))
d.m(0,96,A.eP(v,w,x))
d.m(0,64,A.eP(w,x,u))
p=A.eP(x,u,t)
d.m(0,97,p)
d.m(0,32,p)
p=A.eP(u,t,s)
d.m(0,98,p)
d.m(0,33,p)
p=A.eP(t,s,r)
d.m(0,99,p)
d.m(0,34,p)
d.m(0,35,A.eP(s,r,q))},
dck(d){var x,w=J.v(d.a,d.d+-32),v=J.v(d.a,d.d+-31),u=J.v(d.a,d.d+-30),t=J.v(d.a,d.d+-29),s=J.v(d.a,d.d+-28),r=J.v(d.a,d.d+-27),q=J.v(d.a,d.d+-26),p=J.v(d.a,d.d+-25)
d.m(0,0,D.c.ll(D.c.S(w+v+1,1),32))
x=D.c.ll(D.c.S(v+u+1,1),32)
d.m(0,64,x)
d.m(0,1,x)
x=D.c.ll(D.c.S(u+t+1,1),32)
d.m(0,65,x)
d.m(0,2,x)
x=D.c.ll(D.c.S(t+s+1,1),32)
d.m(0,66,x)
d.m(0,3,x)
d.m(0,32,A.eP(w,v,u))
x=A.eP(v,u,t)
d.m(0,96,x)
d.m(0,33,x)
x=A.eP(u,t,s)
d.m(0,97,x)
d.m(0,34,x)
x=A.eP(t,s,r)
d.m(0,98,x)
d.m(0,35,x)
d.m(0,67,A.eP(s,r,q))
d.m(0,99,A.eP(r,q,p))},
dcc(d){var x,w=J.v(d.a,d.d+-1),v=J.v(d.a,d.d+31),u=J.v(d.a,d.d+63),t=J.v(d.a,d.d+95)
d.m(0,0,D.c.ll(D.c.S(w+v+1,1),32))
x=D.c.ll(D.c.S(v+u+1,1),32)
d.m(0,32,x)
d.m(0,2,x)
x=D.c.ll(D.c.S(u+t+1,1),32)
d.m(0,64,x)
d.m(0,34,x)
d.m(0,1,A.eP(w,v,u))
x=A.eP(v,u,t)
d.m(0,33,x)
d.m(0,3,x)
x=A.eP(u,t,t)
d.m(0,65,x)
d.m(0,35,x)
d.m(0,99,t)
d.m(0,98,t)
d.m(0,97,t)
d.m(0,96,t)
d.m(0,66,t)
d.m(0,67,t)},
dca(d){var x=J.v(d.a,d.d+-1),w=J.v(d.a,d.d+31),v=J.v(d.a,d.d+63),u=J.v(d.a,d.d+95),t=J.v(d.a,d.d+-33),s=J.v(d.a,d.d+-32),r=J.v(d.a,d.d+-31),q=J.v(d.a,d.d+-30),p=D.c.ll(D.c.S(x+t+1,1),32)
d.m(0,34,p)
d.m(0,0,p)
p=D.c.ll(D.c.S(w+x+1,1),32)
d.m(0,66,p)
d.m(0,32,p)
p=D.c.ll(D.c.S(v+w+1,1),32)
d.m(0,98,p)
d.m(0,64,p)
d.m(0,96,D.c.ll(D.c.S(u+v+1,1),32))
d.m(0,3,A.eP(s,r,q))
d.m(0,2,A.eP(t,s,r))
p=A.eP(x,t,s)
d.m(0,35,p)
d.m(0,1,p)
p=A.eP(w,x,t)
d.m(0,67,p)
d.m(0,33,p)
p=A.eP(v,w,x)
d.m(0,99,p)
d.m(0,65,p)
d.m(0,97,A.eP(u,v,w))},
dcw(d){var x
for(x=0;x<16;++x)d.rS(x*32,16,d,-32)},
dcu(d){var x,w,v,u,t
for(x=0,w=16;w>0;--w){v=J.v(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.tU(u,t,t+16,v)
x+=32}},
bPw(d,e){var x,w,v
for(x=0;x<16;++x){w=e.a
v=e.d+x*32
J.tU(w,v,v+16,d)}},
dcm(d){var x,w
for(x=16,w=0;w<16;++w)x+=J.v(d.a,d.d+(-1+w*32))+J.v(d.a,d.d+(w-32))
A.bPw(D.c.S(x,5),d)},
dco(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.v(d.a,d.d+(-1+w*32))
A.bPw(D.c.S(x,4),d)},
dcn(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.v(d.a,d.d+(w-32))
A.bPw(D.c.S(x,4),d)},
dcp(d){A.bPw(128,d)},
dcx(d){var x
for(x=0;x<8;++x)d.rS(x*32,8,d,-32)},
dcv(d){var x,w,v,u,t
for(x=0,w=0;w<8;++w){v=J.v(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.tU(u,t,t+8,v)
x+=32}},
bPx(d,e){var x,w,v
for(x=0;x<8;++x){w=e.a
v=e.d+x*32
J.tU(w,v,v+8,d)}},
dcq(d){var x,w
for(x=8,w=0;w<8;++w)x+=J.v(d.a,d.d+(w-32))+J.v(d.a,d.d+(-1+w*32))
A.bPx(D.c.S(x,4),d)},
dcr(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.v(d.a,d.d+(w-32))
A.bPx(D.c.S(x,3),d)},
dcs(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.v(d.a,d.d+(-1+w*32))
A.bPx(D.c.S(x,3),d)},
dct(d){A.bPx(128,d)},
Fj(d,e,f,g,h){var x=e+f+g*32,w=J.v(d.a,d.d+x)+D.c.S(h,3)
if(!((w&-256)>>>0===0))w=w<0?0:255
d.m(0,x,w)},
bPv(d,e,f,g,h){A.Fj(d,0,0,e,f+g)
A.Fj(d,0,1,e,f+h)
A.Fj(d,0,2,e,f-h)
A.Fj(d,0,3,e,f-g)},
dcd(){var x,w,v,u
if(!$.cN6){for(x=-255;x<=255;++x){w=$.aXM()
v=255+x
u=x<0?-x:x
w.$flags&2&&B.F(w)
w[v]=u
u=$.cuU()
w=D.c.S(w[v],1)
u.$flags&2&&B.F(u)
u[v]=w}for(x=-1020;x<=1020;++x){w=$.cuV()
if(x<-128)v=-128
else v=x>127?127:x
w.$flags&2&&B.F(w)
w[1020+x]=v}for(x=-112;x<=112;++x){w=$.aXN()
if(x<-16)v=-16
else v=x>15?15:x
w.$flags&2&&B.F(w)
w[112+x]=v}for(x=-255;x<=510;++x){w=$.q_()
if(x<0)v=0
else v=x>255?255:x
w.$flags&2&&B.F(w)
w[255+x]=v}$.cN6=!0}},
bPt:function bPt(){},
dc8(){var x,w=J.iY(3,y.D)
for(x=0;x<3;++x)w[x]=new Uint8Array(11)
return new A.a95(w)},
dcM(){var x,w,v,u,t=new Uint8Array(3),s=J.iY(4,y.cm)
for(x=y.V,w=0;w<4;++w){v=J.iY(8,x)
for(u=0;u<8;++u)v[u]=A.dc8()
s[w]=v}D.C.ma(t,0,3,255)
return new A.bPD(t,s)},
bPy:function bPy(){this.d=$},
bPC:function bPC(){this.b=null},
bPE:function bPE(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
a95:function a95(d){this.a=d},
bPD:function bPD(d,e){this.a=d
this.b=e},
bPu:function bPu(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
LP:function LP(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
aEX:function aEX(){this.b=this.a=0},
aEZ:function aEZ(d,e,f){this.a=d
this.b=e
this.c=f},
aEY:function aEY(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
aF_:function aF_(d,e,f){this.a=d
this.b=e
this.c=f},
czL(d,e){var x,w=B.a([],y.A),v=B.a([],y.F),u=new Uint32Array(2),t=new A.aEV(d,u)
u=t.d=J.dh(D.bz.gak(u),0,null)
x=d.cu()
u.$flags&2&&B.F(u)
u[0]=x
x=d.cu()
u.$flags&2&&B.F(u)
u[1]=x
x=d.cu()
u.$flags&2&&B.F(u)
u[2]=x
x=d.cu()
u.$flags&2&&B.F(u)
u[3]=x
x=d.cu()
u.$flags&2&&B.F(u)
u[4]=x
x=d.cu()
u.$flags&2&&B.F(u)
u[5]=x
x=d.cu()
u.$flags&2&&B.F(u)
u[6]=x
x=d.cu()
u.$flags&2&&B.F(u)
u[7]=x
return new A.a97(t,e,w,v)},
Fk(d,e){return D.c.S(d+D.c.eu(1,e)-1,e)},
a97:function a97(d,e,f,g){var _=this
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
at8:function at8(d,e,f,g){var _=this
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
aEV:function aEV(d,e){var _=this
_.a=0
_.b=d
_.c=e
_.d=$},
bPz:function bPz(d,e){this.a=d
this.b=e},
bPA(d,e,f){var x=d[e]
d.$flags&2&&B.F(d)
d[e]=(((x&4278255360)>>>0)+((f&4278255360)>>>0)&4278255360|(x&16711935)+(f&16711935)&16711935)>>>0},
Ag(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
LR(d){if(d<0)return 0
if(d>255)return 255
return d},
bPB(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
dcy(d,e,f){return 4278190080},
dcz(d,e,f){return e},
dcE(d,e,f){return d[f]},
dcF(d,e,f){return d[f+1]},
dcG(d,e,f){return d[f-1]},
dcH(d,e,f){var x=d[f]
return A.Ag(A.Ag(e,d[f+1]),x)},
dcI(d,e,f){return A.Ag(e,d[f-1])},
dcJ(d,e,f){return A.Ag(e,d[f])},
dcK(d,e,f){return A.Ag(d[f-1],d[f])},
dcL(d,e,f){return A.Ag(d[f],d[f+1])},
dcA(d,e,f){var x=d[f-1],w=d[f],v=d[f+1]
return A.Ag(A.Ag(e,x),A.Ag(w,v))},
dcB(d,e,f){var x=d[f],w=d[f-1]
return A.bPB(x>>>24,e>>>24,w>>>24)+A.bPB(x>>>16&255,e>>>16&255,w>>>16&255)+A.bPB(x>>>8&255,e>>>8&255,w>>>8&255)+A.bPB(x&255,e&255,w&255)<=0?x:e},
dcC(d,e,f){var x=d[f],w=d[f-1]
return(A.LR((e>>>24)+(x>>>24)-(w>>>24))<<24|A.LR((e>>>16&255)+(x>>>16&255)-(w>>>16&255))<<16|A.LR((e>>>8&255)+(x>>>8&255)-(w>>>8&255))<<8|A.LR((e&255)+(x&255)-(w&255)))>>>0},
dcD(d,e,f){var x,w,v,u=d[f],t=d[f-1],s=A.Ag(e,u)
u=s>>>24
x=s>>>16&255
w=s>>>8&255
v=s>>>0&255
return(A.LR(u+D.c.b0(u-(t>>>24),2))<<24|A.LR(x+D.c.b0(x-(t>>>16&255),2))<<16|A.LR(w+D.c.b0(w-(t>>>8&255),2))<<8|A.LR(v+D.c.b0(v-(t&255),2)))>>>0},
LQ:function LQ(d,e){this.a=d
this.b=e},
aEW:function aEW(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
bQu:function bQu(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
a9l:function a9l(){},
at9:function at9(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=$
_.r=1
_.x=_.w=$},
cHq(){var x=new Uint8Array(128),w=new Int16Array(128)
x=new A.aso(x,w,new Int16Array(128))
x.a9j(0)
return x},
d3r(){var x,w=J.iY(5,y.x)
for(x=0;x<5;++x)w[x]=A.cHq()
return new A.a0D(w)},
aso:function aso(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$
_.f=_.e=0},
a0D:function a0D(d){this.a=d},
Ui:function Ui(d,e){this.a=d
this.b=e},
aFo:function aFo(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
ata:function ata(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.w=""
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
bQv:function bQv(){this.b=this.a=null},
cHt(d){return new A.a12(d.a,d.b,D.C.lH(d.c,0))},
bkc:function bkc(d,e){this.a=d
this.b=e},
a12:function a12(d,e,f){this.a=d
this.b=e
this.c=f},
i1(d,e,f,g,h,i,j,k,l,m,n,o,p){var x,w=new A.Cx(null,null,null,d,k,h,g,0)
w.gle().push(w)
w.c=j
if(e!=null)w.e=A.a_O(e)
x=!1
if(m==null)if(p)x=w.gdu()===C.fT||w.gdu()===C.hJ||w.gdu()===C.hK||w.gdu()===C.ac||w.gdu()===C.cC
w.amM(o,i,f,l,x?w.b0T(f,n,l):m)
return w},
asA(d,e,f,g){var x,w,v,u=null,t=d.e
t=t==null?u:A.a_O(t)
x=d.c
x=x==null?u:A.cHt(x)
w=d.w
v=d.r
t=new A.Cx(u,x,t,u,v,w,d.y,d.z)
t.aWw(d,e,f,g)
return t},
Cw(d,e,f){var x,w,v,u,t=null,s=d.a
s=s==null?t:s.r9(0,f)
x=d.e
x=x==null?t:A.a_O(x)
w=d.c
w=w==null?t:A.cHt(w)
v=d.w
u=d.r
s=new A.Cx(s,w,x,t,u,v,d.y,d.z)
s.aWv(d,e,f)
return s},
arr:function arr(d,e){this.a=d
this.b=e},
Cx:function Cx(d,e,f,g,h,i,j,k){var _=this
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
bl1:function bl1(d,e){this.a=d
this.b=e},
bl0:function bl0(){},
mg:function mg(){},
d43(d,e,f){return new A.Q8(new Uint16Array(d*e*f),d,e,f)},
Q8:function Q8(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
d44(d,e,f){return new A.Q9(new Float32Array(d*e*f),d,e,f)},
Q9:function Q9(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a17:function a17(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a18:function a18(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a19:function a19(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
a1a:function a1a(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
Qa:function Qa(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
Qb:function Qb(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
Qc:function Qc(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
d45(d,e,f){return new A.Qd(new Uint32Array(d*e*f),d,e,f)},
Qd:function Qd(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
Qe:function Qe(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
cHK(d,e,f){return new A.Qf(new Uint8Array(d*e*f),null,d,e,f)},
Qf:function Qf(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
atb:function atb(d,e){this.a=d
this.b=e},
bvr:function bvr(){},
axD:function axD(d,e,f){this.c=d
this.a=e
this.b=f},
axE:function axE(d,e,f){this.c=d
this.a=e
this.b=f},
axF:function axF(d,e,f){this.c=d
this.a=e
this.b=f},
axG:function axG(d,e,f){this.c=d
this.a=e
this.b=f},
axH:function axH(d,e,f){this.c=d
this.a=e
this.b=f},
axI:function axI(d,e,f){this.c=d
this.a=e
this.b=f},
axJ:function axJ(d,e,f){this.c=d
this.a=e
this.b=f},
a3S:function a3S(d,e,f){this.c=d
this.a=e
this.b=f},
cJF(d){return new A.uS(new Uint8Array(B.bV(d.c)),d.a,d.b)},
uS:function uS(d,e,f){this.c=d
this.a=e
this.b=f},
cy4(d){return new A.Jp(-1,0,-d.c,d)},
Jp:function Jp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cy5(d){return new A.Jq(-1,0,-d.c,d)},
Jq:function Jq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cy6(d){return new A.Jr(-1,0,-d.c,d)},
Jr:function Jr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cy7(d){return new A.Js(-1,0,-d.c,d)},
Js:function Js(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cy8(d){return new A.Jt(-1,0,-d.c,d)},
Jt:function Jt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cy9(d){return new A.Ju(-1,0,-d.c,d)},
Ju:function Ju(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uT(d,e,f,g,h){d.hy(0,e-1,f)
return new A.axY(d,e,e+g-1,f+h-1)},
axY:function axY(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g},
a45(d){return new A.Jv(-1,0,0,-1,0,d)},
Jv:function Jv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cya(d){return new A.Jw(-1,0,-d.c,d)},
Jw:function Jw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a46(d){return new A.Jx(-1,0,0,-2,0,d)},
Jx:function Jx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cyb(d){return new A.Jy(-1,0,-d.c,d)},
Jy:function Jy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a47(d){return new A.Jz(-1,0,0,-(d.c<<2>>>0),d)},
Jz:function Jz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bvQ(d){return new A.JA(-1,0,-d.c,d)},
JA:function JA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fq:function fq(){},
dnX(d,e){switch(e.a){case 0:A.aXc(d)
break
case 1:A.do0(d)
break
case 2:A.dnZ(d)
break}return d},
do0(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.gle().length
for(x=y.g,w=0;w<h;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?i:t.a
if(r==null)r=0
q=s?i:t.b
if(q==null)q=0
p=D.c.b0(q,2)
t=d.a
if((t==null?i:t.geZ())!=null)for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.ei(m,n,i)
if(l==null)l=new A.fq()
t=u.a
k=t==null?i:t.ei(m,o,i)
if(k==null)k=new A.fq()
j=l.geb(l)
l.seb(0,k.geb(k))
k.seb(0,j)}else for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.ei(m,n,i)
if(l==null)l=new A.fq()
t=u.a
k=t==null?i:t.ei(m,o,i)
if(k==null)k=new A.fq()
j=l.gah(l)
l.sah(0,k.gah(k))
k.sah(0,j)
j=l.gar()
l.sar(k.gar())
k.sar(j)
j=l.gav(l)
l.sav(0,k.gav(k))
k.sav(0,j)
j=l.gaG(l)
l.saG(0,k.gaG(k))
k.saG(0,j)}}return d},
aXc(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=d.gle().length
for(x=y.g,w=0;w<g;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?h:t.a
if(r==null)r=0
q=s?h:t.b
if(q==null)q=0
p=D.c.b0(r,2)
t=d.a
if((t==null?h:t.geZ())!=null)for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.ei(l,n,h)
if(k==null)k=new A.fq()
t=u.a
j=t==null?h:t.ei(m,n,h)
if(j==null)j=new A.fq()
i=k.geb(k)
k.seb(0,j.geb(j))
j.seb(0,i)}else for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.ei(l,n,h)
if(k==null)k=new A.fq()
t=u.a
j=t==null?h:t.ei(m,n,h)
if(j==null)j=new A.fq()
i=k.gah(k)
k.sah(0,j.gah(j))
j.sah(0,i)
i=k.gar()
k.sar(j.gar())
j.sar(i)
i=k.gav(k)
k.sav(0,j.gav(j))
j.sav(0,i)
i=k.gaG(k)
k.saG(0,j.gaG(j))
j.saG(0,i)}}return d},
dnZ(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=d.gle().length
for(x=y.g,w=0;w<f;++w){v=d.x
u=(v===$?d.x=B.a([],x):v)[w]
t=u.a
s=t==null
r=s?g:t.a
if(r==null)r=0
q=s?g:t.b
if(q==null)q=0
p=D.c.b0(q,2)
if((s?g:t.geZ())!=null)for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.ei(k,m,g)
if(j==null)j=new A.fq()
t=u.a
i=t==null?g:t.ei(l,o,g)
if(i==null)i=new A.fq()
h=j.geb(j)
j.seb(0,i.geb(i))
i.seb(0,h)}else for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.ei(k,m,g)
if(j==null)j=new A.fq()
t=u.a
i=t==null?g:t.ei(l,o,g)
if(i==null)i=new A.fq()
h=j.gah(j)
j.sah(0,i.gah(i))
i.sah(0,h)
h=j.gar()
j.sar(i.gar())
i.sar(h)
h=j.gav(j)
j.sav(0,i.gav(i))
i.sav(0,h)
h=j.gaG(j)
j.saG(0,i.gaG(i))
i.saG(0,h)}}return d},
beG:function beG(d,e){this.a=d
this.b=e},
cc(d){return new A.asG(d)},
asG:function asG(d){this.a=d},
d_(d,e,f,g){var x=J.a2(d),w=x.gu(d)
x=f==null?x.gu(d):g+f
return new A.mh(d,g,Math.min(w,x),g,e)},
cf(d,e,f){var x=d.a,w=d.d,v=J.bu(x),u=e==null?d.c:d.d+f+e
return new A.mh(x,d.b,Math.min(v,u),w+f,d.e)},
mh:function mh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
btL:function btL(d){var _=this
_.a=$
_.b=10
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=d
_.ax=_.at=$},
qF(d,e){return new A.axo(d,new Uint8Array(e))},
axo:function axo(d,e){this.a=0
this.b=d
this.c=e},
bxr:function bxr(){},
oc:function oc(d,e){this.a=d
this.b=e},
bA5:function bA5(d,e){this.a=d
this.b=e},
bLW:function bLW(d,e,f){this.a=d
this.d=e
this.e=f},
cJb(d){return new Int8Array(d)},
dbR(d){throw B.n(B.aG("Uint64List not supported on the web."))},
d4q(d,e,f){return J.cvc(d,e,f)},
cML(d,e){return J.oK(d,e,null)},
d2s(d){return J.aY_(d,0,null)},
d2t(d){return d.a9N(0,0,null)},
doj(d){var x,w,v,u,t=d.gu(0)
for(x=1,w=0;t>0;){v=3800>t?t:3800
t-=v
for(;--v,v>=0;){u=d.b
u.toString
x+=u[d.c++]
w+=x}x=D.c.ao(x,65521)
w=D.c.ao(w,65521)}return(w<<16|x)>>>0},
xV(d,e){var x,w,v=J.a2(d),u=v.gu(d)
e^=4294967295
for(x=0;u>=8;){w=x+1
e=C.hO[(e^v.h(d,x))&255]^e>>>8
x=w+1
e=C.hO[(e^v.h(d,w))&255]^e>>>8
w=x+1
e=C.hO[(e^v.h(d,x))&255]^e>>>8
x=w+1
e=C.hO[(e^v.h(d,w))&255]^e>>>8
w=x+1
e=C.hO[(e^v.h(d,x))&255]^e>>>8
x=w+1
e=C.hO[(e^v.h(d,w))&255]^e>>>8
w=x+1
e=C.hO[(e^v.h(d,x))&255]^e>>>8
x=w+1
e=C.hO[(e^v.h(d,w))&255]^e>>>8
u-=8}if(u>0)do{w=x+1
e=C.hO[(e^v.h(d,x))&255]^e>>>8
if(--u,u>0){x=w
continue}else break}while(!0)
return(e^4294967295)>>>0},
OT(d,e,f){var x=0,w=B.k(y.N),v,u,t,s,r
var $async$OT=B.f(function(g,h){if(g===1)return B.h(h,w)
while(true)switch(x){case 0:t="images/"+Date.now()+".jpg"
s=$.aXz()
r=s.as
r===$&&B.b()
x=3
return B.d(r.bU("public-files").Rq(t,d),$async$OT)
case 3:if(h.length===0)throw B.n(B.cN("Upload failed"))
u=r.bU("public-files").ahh(t)
x=4
return B.d(s.bU("images").jl(0,B.z(["link",u,"occasion",e,"unit",f],y.N,y.cM)),$async$OT)
case 4:v=u
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$OT,w)},
cBg(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s,r,q
if(m==null)m=0
if(n==null)n=0
if(l==null)l=e.gd2(0)
if(k==null)k=e.gb8(0)
if(h==null)h=d.gd2(0)<e.gd2(0)?d.gd2(0):e.gd2(0)
if(g==null)g=d.gb8(0)<e.gb8(0)?d.gb8(0):e.gb8(0)
x=f===C.Az
if(!x&&d.grI())d=d.aAy(d.gqq())
w=k/g
v=l/h
u=y.p
t=J.iY(g,u)
for(s=0;s<g;++s)t[s]=n+D.d.C(s*w)
r=J.iY(h,u)
for(q=0;q<h;++q)r[q]=m+D.d.C(q*v)
if(x)A.dhF(e,d,i,j,h,g,r,t,null,C.Jv)
else A.dhg(e,d,i,j,h,g,r,t,f,!1,null,C.Jv)
return d},
dhF(d,e,f,g,h,i,j,k,l,m){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.ei(t,s,x)
if(x==null)x=new A.fq()
e.B3(f+u,v,x)}},
dhg(d,e,f,g,h,i,j,k,l,m,n,o){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.ei(t,s,x)
if(x==null)x=new A.fq()
A.dnz(e,f+u,v,x,l,!1,n,o)}},
dnz(a4,a5,a6,a7,a8,a9,b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
if(!a4.aEm(a5,a6))return a4
if(a8===C.Az||a4.grI())if(a4.aEm(a5,a6)){a4.o6(a5,a6).iV(0,a7)
return a4}x=a7.giR()
w=a7.giA()
v=a7.giI()
u=a7.gu(a7)<4?1:a7.gfH()
if(u===0)return a4
t=a4.o6(a5,a6)
s=t.giR()
r=t.giA()
q=t.giI()
p=t.gfH()
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
t.siR(x*u+s*p*a3)
t.siA(w*u+r*p*a3)
t.siI(v*u+q*p*a3)
t.sfH(u+p*a3)
return a4},
dnN(d,e,f,g,h,i,j){var x,w=D.d.b3(Math.min(g,h),0,d.gd2(0)-1),v=D.d.b3(Math.min(i,j),0,d.gb8(0)-1),u=D.d.b3(Math.max(g,h),0,d.gd2(0)-1),t=D.d.b3(Math.max(i,j),0,d.gb8(0)-1),s=d.a.qB(0,w,v,u-w+1,t-v+1)
for(x=s.a;s.q();)x.iV(0,f)
return d},
d26(a4,a5,a6,a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=b0<16384,a3=a6>a8?a8:a6
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
if(a2){A.a_V(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.a_V(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.a_V(f,d,v)
a1=v[0]
u&2&&B.F(a4)
a4[j]=a1
a4[i]=v[1]
A.a_V(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}else{A.a_W(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.a_W(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.a_W(f,d,v)
a1=v[0]
u&2&&B.F(a4)
a4[j]=a1
a4[i]=v[1]
A.a_W(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}}if(n){h=j+r
if(a2){A.a_V(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&B.F(a4)
a4[h]=a1}else{A.a_W(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&B.F(a4)
a4[h]=a1}u&2&&B.F(a4)
a4[j]=f}}if((a8&x)>>>0!==0){k=l+m
for(j=l;j<=k;j+=o){i=j+p
if(a2){A.a_V(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&B.F(a4)
a4[i]=n}else{A.a_W(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&B.F(a4)
a4[i]=n}u&2&&B.F(a4)
a4[j]=f}}w=x>>>1}},
a_V(d,e,f){var x,w,v,u,t=$.nE()
t.$flags&2&&B.F(t)
t[0]=d
x=$.oI()
w=x[0]
t[0]=e
v=x[0]
u=w+(v&1)+D.c.S(v,1)
f[0]=u
f[1]=u-v},
a_W(d,e,f){var x=d-D.c.S(e,1)&65535
f[1]=x
f[0]=e+x-32768&65535},
csY(d){var x,w,v,u,t,s,r,q,p,o,n=null
if(A.cIj().Rv(d))return new A.ati()
x=new A.ayc(A.cI5())
if(x.IC(d))return x
w=new A.bhF()
w.f=A.d_(d,!1,n,0)
w.a=new A.arC(B.a([],y.b))
if(w.aoX())return w
v=new A.bQv()
if(v.IC(d))return v
u=new A.bK4()
if(u.atj(A.d_(d,!1,n,0))!=null)return u
if(A.cK4(d).c===943870035)return new A.bxh()
if(A.d25(d))return new A.bdx()
if(A.cvI(A.d_(d,!1,n,0)))return new A.akQ(!1)
t=new A.bJo()
s=A.d_(d,!1,n,0)
r=t.a=new A.aDe(C.z8)
r.vD(0,s)
if(r.aED())return t
q=new A.bke()
r=A.d_(d,!1,n,0)
q.a=r
r=A.cHu(r)
q.b=r
if(r!=null)return q
p=new A.bxm()
if(p.oQ(d)!=null)return p
o=new A.bwl(B.a([],y.T))
if(o.IC(d))return o
return n},
cQK(d){var x=A.csY(d)
return x==null?null:x.n8(0,d,null)},
dq9(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if($.cAC==null){x=$.cAC=new Uint8Array(768)
for(w=-256;w<0;++w)x[256+w]=0
for(w=0;w<256;++w)x[256+w]=w
for(w=256;w<512;++w)x[256+w]=255}for(x=a6.$flags|0,w=0;w<64;++w){v=a4[w]
u=a3[w]
x&2&&B.F(a6)
a6[w]=v*u}for(t=0,w=0;w<8;++w,t+=8){v=1+t
u=a6[v]
if(u===0&&a6[2+t]===0&&a6[3+t]===0&&a6[4+t]===0&&a6[5+t]===0&&a6[6+t]===0&&a6[7+t]===0){v=D.c.S(5793*a6[t]+512,10)
s=(v&2147483647)-((v&2147483648)>>>0)
x&2&&B.F(a6)
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
x&2&&B.F(a6)
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
x&2&&B.F(a6)
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
x&2&&B.F(a6)
a6[w]=q+s
a6[k]=q-s
a6[v]=o+a0
a6[m]=o-a0
a6[p]=i+f
a6[u]=i-f
a6[j]=a1+h
a6[r]=a1-h}for(x=$.cAC,v=a5.$flags|0,w=0;w<64;++w){x.toString
u=D.c.S(a6[w]+8,4)
u=x[384+((u&2147483647)-((u&2147483648)>>>0))]
v&2&&B.F(a5)
a5[w]=u}},
doq(d9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=null,d7="ifd0",d8=d9.r
if(d8.h(0,d7).a.a0(0,274)){x=d8.h(0,d7).giv(0)
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
r=A.i1(d6,d6,C.ac,0,C.bv,s,d6,0,3,d6,C.ac,t,!1)
r.e=A.a_O(d8)
r.gx8().h(0,d7).siv(0,d6)
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
e=n[D.c.hJ(g,l)]
f=q-g
d=0
while(!0){a0=d9.d.e
a0.toString
if(!(d<a0))break
a1=e[D.c.hJ(d,m)]
if(h){a0=r.a
if(a0!=null)a0.fn(p-d,g,a1,a1,a1)}else if(i){a0=r.a
if(a0!=null)a0.fn(p-d,f,a1,a1,a1)}else if(j){a0=r.a
if(a0!=null)a0.fn(d,f,a1,a1,a1)}else if(k){a0=r.a
if(a0!=null)a0.fn(g,d,a1,a1,a1)}else if(v){a0=r.a
if(a0!=null)a0.fn(f,d,a1,a1,a1)}else if(x){a0=r.a
if(a0!=null)a0.fn(f,p-d,a1,a1,a1)}else{a0=r.a
if(d8){if(a0!=null)a0.fn(g,p-d,a1,a1,a1)}else if(a0!=null)a0.fn(d,g,a1,a1,a1)}++d}++g}break
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
b1=D.c.hJ(g,l)
b2=D.c.hJ(g,a8)
b3=D.c.hJ(g,b0)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
f=q-g
d=0
while(!0){a0=d9.d.e
a0.toString
if(!(d<a0))break
b6=D.c.hJ(d,m)
b7=D.c.hJ(d,a7)
b8=D.c.hJ(d,a9)
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
if(a0!=null)a0.fn(p-d,g,c1,c2,c3)}else if(i){a0=r.a
if(a0!=null)a0.fn(p-d,f,c1,c2,c3)}else if(j){a0=r.a
if(a0!=null)a0.fn(d,f,c1,c2,c3)}else if(k){a0=r.a
if(a0!=null)a0.fn(g,d,c1,c2,c3)}else if(v){a0=r.a
if(a0!=null)a0.fn(f,d,c1,c2,c3)}else if(x){a0=r.a
if(a0!=null)a0.fn(f,p-d,c1,c2,c3)}else{a0=r.a
if(d8){if(a0!=null)a0.fn(g,p-d,c1,c2,c3)}else if(a0!=null)a0.fn(d,g,c1,c2,c3)}++d}++g}break
case 4:x=d9.c
if(x==null)throw B.n(A.cc("Unsupported color mode (4 components)"))
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
b1=D.c.hJ(g,l)
b2=D.c.hJ(g,a8)
b3=D.c.hJ(g,b0)
c8=D.c.hJ(g,c7)
e=a4[b1]
b4=a5[b2]
b5=a6[b3]
c9=c5[c8]
a0=q-g
d=0
while(!0){d0=d9.d.e
d0.toString
if(!(d<d0))break
b6=D.c.hJ(d,m)
b7=D.c.hJ(d,a7)
b8=D.c.hJ(d,a9)
d1=D.c.hJ(d,c6)
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
if(d0!=null)d0.fn(p-d,g,c1,c2,c3)}else if(h){d0=r.a
if(d0!=null)d0.fn(p-d,a0,c1,c2,c3)}else if(i){d0=r.a
if(d0!=null)d0.fn(d,a0,c1,c2,c3)}else if(j){d0=r.a
if(d0!=null)d0.fn(g,d,c1,c2,c3)}else if(k){d0=r.a
if(d0!=null)d0.fn(a0,d,c1,c2,c3)}else if(v){d0=r.a
if(d0!=null)d0.fn(a0,p-d,c1,c2,c3)}else{d0=r.a
if(d8){if(d0!=null)d0.fn(g,p-d,c1,c2,c3)}else if(d0!=null)d0.fn(d,g,c1,c2,c3)}++d}++g}break
default:throw B.n(A.cc("Unsupported color mode"))}return r},
dcZ(d,e,f,g,h,i){A.dcW(i,d,e,f,g,h,!0,i)},
dd_(d,e,f,g,h,i){A.dcX(i,d,e,f,g,h,!0,i)},
dcY(d,e,f,g,h,i){A.dcV(i,d,e,f,g,h,!0,i)},
Uh(d,e,f,g,h){var x,w,v
for(x=0;x<g;++x){w=J.v(d.a,d.d+x)
v=J.v(e.a,e.d+x)
J.bY(f.a,f.d+x,w+v)}},
dcW(d,e,f,g,h,i,j,k){var x,w,v=null,u=h*g,t=h+i,s=A.d_(d,!1,v,u),r=A.d_(d,!1,v,u),q=A.cf(r,v,0)
if(h===0){r.m(0,0,J.v(s.a,s.d))
A.Uh(A.cf(s,v,1),q,A.cf(r,v,1),e-1,!0)
q.d+=g
s.d+=g
r.d+=g
h=1}for(x=-g,w=e-1;h<t;){A.Uh(s,A.cf(q,v,x),r,1,!0)
A.Uh(A.cf(s,v,1),q,A.cf(r,v,1),w,!0);++h
q.d+=g
s.d+=g
r.d+=g}},
dcX(d,e,f,g,h,i,j,k){var x=null,w=h*g,v=h+i,u=A.d_(d,!1,x,w),t=A.d_(k,!1,x,w),s=A.cf(t,x,0)
if(h===0){t.m(0,0,J.v(u.a,u.d))
A.Uh(A.cf(u,x,1),s,A.cf(t,x,1),e-1,!0)
u.d+=g
t.d+=g
h=1}else s.d-=g
for(;h<v;){A.Uh(u,s,t,e,!0);++h
s.d+=g
u.d+=g
t.d+=g}},
dcV(d,e,f,g,h,i,j,k){var x,w,v,u,t,s=null,r=h*g,q=h+i,p=A.d_(d,!1,s,r),o=A.d_(k,!1,s,r),n=A.cf(o,s,0)
if(h===0){o.m(0,0,J.v(p.a,p.d))
A.Uh(A.cf(p,s,1),n,A.cf(o,s,1),e-1,!0)
n.d+=g
p.d+=g
o.d+=g
h=1}for(x=-g;h<q;){A.Uh(p,A.cf(n,s,x),o,1,!0)
for(w=1;w<e;++w){v=w-g
u=J.v(n.a,n.d+(w-1))+J.v(n.a,n.d+v)-J.v(n.a,n.d+(v-1))
if((u&4294967040)>>>0===0)t=u
else t=u<0?0:255
v=J.v(p.a,p.d+w)
J.bY(o.a,o.d+w,v+t)}++h
n.d+=g
p.d+=g
o.d+=g}},
dl2(d){var x="ifd0",w=A.Cw(d,!1,!1)
if(!d.gx8().h(0,x).a.a0(0,274)||d.gx8().h(0,x).giv(0)===1)return w
w.e=A.a_O(d.gx8())
w.gx8().h(0,x).siv(0,null)
switch(d.gx8().h(0,x).giv(0)){case 2:return A.aXc(w)
case 3:return A.dnX(w,C.asJ)
case 4:return A.aXc(A.aX6(w,180))
case 5:return A.aXc(A.aX6(w,90))
case 6:return A.aX6(w,90)
case 7:return A.aXc(A.aX6(w,-90))
case 8:return A.aX6(w,-90)}return w},
dlP(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null
a1.grI()
if(a1.gx8().h(0,"ifd0").a.a0(0,274)&&a1.gx8().h(0,"ifd0").giv(0)!==1)a1=A.dl2(a1)
x=D.d.aS(a2*(a1.gb8(0)/a1.gd2(0)))
if(a2<=0)a2=D.d.aS(x*(a1.gd2(0)/a1.gb8(0)))
if(a2===a1.gd2(0)&&x===a1.gb8(0))return A.Cw(a1,!1,!1)
w=new Int32Array(a2)
v=a1.gd2(0)/a2
for(u=0;u<a2;++u)w[u]=D.d.C(u*v)
t=new Int32Array(x)
s=a1.gb8(0)/x
for(r=0;r<x;++r)t[r]=D.d.C(r*s)
q=a1.gle().length
for(p=y.g,o=a0,n=0;n<q;++n){m=a1.x
l=(m===$?a1.x=B.a([],p):m)[n]
k=A.asA(l,x,!0,a2)
j=o==null
if(!j)o.nG(k)
if(j)o=k
j=l.a
i=j==null
h=i?a0:j.b
s=(h==null?0:h)/x
if((i?a0:j.geZ())!=null)for(r=0;r<x;++r){g=D.d.C(r*s)
for(u=0;u<a2;++u){j=w[u]
i=l.a
if(i==null)j=a0
else{j=i.o6(j,g)
j=D.d.C(j.geb(j))}if(j==null)j=0
i=k.a
if(i!=null)i.mR(u,r,j)}}else{f=l.ky(0,0)
for(r=0;r<x;++r)for(u=0;u<a2;++u){j=w[u]
i=t[r]
h=l.a
if(h!=null)h.ei(j,i,f)
j=f.gah(f)
i=f.gar()
h=f.gav(f)
e=f.gaG(f)
d=k.a
if(d!=null)d.kA(u,r,j,i,h,e)}}}o.toString
return o},
aX6(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=D.c.ao(a8,360)
a7.grI()
if(D.c.ao(a6,90)===0)switch(D.c.b0(a6,90)){case 1:return A.djP(a7)
case 2:return A.djN(a7)
case 3:return A.djO(a7)
default:return A.Cw(a7,!1,!1)}x=a6*3.141592653589793/180
w=Math.cos(x)
v=Math.sin(x)
u=a7.gd2(0)
t=a7.gd2(0)
s=a7.gb8(0)
r=a7.gb8(0)
q=0.5*a7.gd2(0)
p=0.5*a7.gb8(0)
s=Math.abs(u*w)+Math.abs(s*v)
o=0.5*s
r=Math.abs(t*v)+Math.abs(r*w)
n=0.5*r
m=a7.gle().length
for(u=y.g,l=a5,k=0;k<m;++k){j=a7.x
i=(j===$?a7.x=B.a([],u):j)[k]
t=l==null
h=t?a5:l.Xv()
if(h==null){g=D.d.C(s)
h=A.asA(a7,D.d.C(r),!0,g)}if(t)l=h
for(t=h.a,t=t.ga6(t);t.q();){f=t.gL(t)
e=f.gnl(f)
d=f.go4(f)
g=e-o
a0=d-n
a1=q+g*w+a0*v
a2=p-g*v+a0*w
g=!1
if(a1>=0)if(a2>=0){a0=i.a
a3=a0==null
a4=a3?a5:a0.a
if(a1<(a4==null?0:a4)){g=a3?a5:a0.b
g=a2<(g==null?0:g)}}if(g)h.B3(e,d,i.aLf(a1,a2,C.awp))}}l.toString
return l},
djP(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gle(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.S)(x),++u){t=x[u]
s=v==null
r=s?k:v.Xv()
if(r==null){q=t.a
p=q==null
o=p?k:q.b
if(o==null)o=0
q=p?k:q.a
r=A.asA(t,q==null?0:q,!0,o)}if(s)v=r
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
s=s==null?k:s.ei(m,n-l,k)
r.B3(l,m,s==null?new A.fq():s);++l}++m}}v.toString
return v},
djN(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gle(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.S)(x),++u){t=x[u]
s=t.a
r=s==null
q=r?k:s.a
p=(q==null?0:q)-1
s=r?k:s.b
o=(s==null?0:s)-1
s=v==null
n=s?k:v.Xv()
if(n==null)n=A.Cw(t,!0,!0)
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
r=r==null?k:r.ei(p-l,s,k)
n.B3(l,m,r==null?new A.fq():r);++l}++m}}v.toString
return v},
djO(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.gle(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,B.S)(x),++u){t=x[u]
s=d.a
s=s==null?k:s.a
r=(s==null?0:s)-1
s=v==null
q=s?k:v.Xv()
if(q==null){p=t.a
o=p==null
n=o?k:p.b
if(n==null)n=0
p=o?k:p.a
q=A.asA(t,p==null?0:p,!0,n)}if(s)v=q
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
p=p==null?k:p.ei(s,l,k)
q.B3(l,m,p==null?new A.fq():p);++l}++m}}v.toString
return v},
csx(d){var x
d=(d&-d)>>>0
x=d!==0?31:32
if((d&65535)!==0)x-=16
if((d&16711935)!==0)x-=8
if((d&252645135)!==0)x-=4
if((d&858993459)!==0)x-=2
return(d&1431655765)!==0?x-1:x},
drc(d){$.cCX().m(0,0,d)
return $.cVU().h(0,0)},
cRK(d,e,f,g){return(D.c.b3(d,0,255)|D.c.b3(e,0,255)<<8|D.c.b3(f,0,255)<<16|D.c.b3(g,0,255)<<24)>>>0},
vK(d,e,f){var x,w,v,u,t,s=e.gu(e),r=e.gdu(),q=d.geZ(),p=q==null?null:q.gdu()
if(p==null)p=d.gdu()
x=d.gu(d)
if(s===1){w=d.gu(d)>2?d.gjQ():d.h(0,0)
e.m(0,0,A.aX4(B.h3(d.h(0,0))?D.d.fD(w):w,p,r))}else if(s<=x)for(v=0;v<s;++v)e.m(0,v,A.aX4(d.h(0,v),p,r))
else if(x===2){u=A.aX4(d.h(0,0),p,r)
if(s===3){e.m(0,0,u)
e.m(0,1,u)
e.m(0,2,u)}else{f=A.aX4(d.h(0,1),p,r)
e.m(0,0,u)
e.m(0,1,u)
e.m(0,2,u)
e.m(0,3,f)}}else{for(v=0;v<x;++v)e.m(0,v,A.aX4(d.h(0,v),p,r))
t=x===1?e.h(0,0):0
for(v=x;v<s;++v)e.m(0,v,v===3?f:t)}return e},
pT(d,e,f,g,h){var x,w,v=d.geZ(),u=v==null?null:v.gdu()
if(u==null)u=d.gdu()
v=h==null
x=v?null:h.gdu()
f=x==null?f:x
if(f==null)f=d.gdu()
x=v?null:h.gu(h)
g=x==null?g:x
if(g==null)g=d.gu(d)
if(e==null)e=0
if(f===u&&g===d.gu(d)){if(v)return d.dY(0)
h.iV(0,d)
return h}switch(f.a){case 3:if(v)w=new A.ys(new Uint8Array(g))
else w=h
return A.vK(d,w,e)
case 0:return A.vK(d,v?new A.Oh(g,0):h,e)
case 1:return A.vK(d,v?new A.Oj(g,0):h,e)
case 2:if(v){v=g<3?1:2
w=new A.Ol(g,new Uint8Array(v))}else w=h
return A.vK(d,w,e)
case 4:if(v)w=new A.Oi(new Uint16Array(g))
else w=h
return A.vK(d,w,e)
case 5:if(v)w=new A.Ok(new Uint32Array(g))
else w=h
return A.vK(d,w,e)
case 6:if(v)w=new A.Oe(new Int8Array(g))
else w=h
return A.vK(d,w,e)
case 7:if(v)w=new A.Oc(new Int16Array(g))
else w=h
return A.vK(d,w,e)
case 8:if(v)w=new A.Od(new Int32Array(g))
else w=h
return A.vK(d,w,e)
case 9:if(v)w=new A.O9(new Uint16Array(g))
else w=h
return A.vK(d,w,e)
case 10:if(v)w=new A.Oa(new Float32Array(g))
else w=h
return A.vK(d,w,e)
case 11:if(v)w=new A.Ob(new Float64Array(g))
else w=h
return A.vK(d,w,e)}},
ju(d){return 0.299*d.gah(d)+0.587*d.gar()+0.114*d.gav(d)},
cQq(d,e,f,g,h){var x=1-g/255
h[0]=D.d.aS(255*(1-d/255)*x)
h[1]=D.d.aS(255*(1-e/255)*x)
h[2]=D.d.aS(255*(1-f/255)*x)},
h7(d){var x,w,v,u=$.cCW()
u.$flags&2&&B.F(u)
u[0]=d
x=$.cVT()[0]
if(d===0)return x>>>16
if($.i0==null)A.iU()
w=$.cGF.co()[x>>>23&511]
if(w!==0){v=x&8388607
return w+(v+4095+(v>>>13&1)>>>13)}return A.d2q(x)},
d2q(d){var x,w,v=d>>>16&32768,u=(d>>>23&255)-112,t=d&8388607
if(u<=0){if(u<-10)return v
t|=8388608
x=14-u
return(v|D.c.o9(t+(D.c.f0(1,x-1)-1)+(D.c.h7(t,x)&1),x))>>>0}else if(u===143)if(t===0)return v|31744
else{t=t>>>13
w=t===0?1:0
return v|t|w|31744}else{t=t+4095+(t>>>13&1)
if((t&8388608)!==0){++u
t=0}if(u>30)return v|31744
return(v|u<<10|t>>>13)>>>0}},
iU(){var x,w,v,u,t=$.i0
if(t!=null)return t
x=new Uint32Array(65536)
$.i0=J.aY_(D.bz.gak(x),0,null)
t=new Uint16Array(512)
$.cGF.b=t
for(w=0;w<256;++w){v=(w&255)-112
if(v<=0||v>=30){t[w]=0
t[(w|256)>>>0]=0}else{u=v<<10>>>0
t[w]=u
t[(w|256)>>>0]=(u|32768)>>>0}}for(w=0;w<65536;++w)x[w]=A.d2r(w)
t=$.i0
t.toString
return t},
d2r(d){var x,w=d>>>15&1,v=d>>>10&31,u=d&1023
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
E=c[160]
A.a1_.prototype={
a3O(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.length
for(x=0;x<k;++x){w=d[x]
if(w>l.b)l.b=w
if(w<l.c)l.c=w}w=l.b
v=D.c.f0(1,w)
u=new Uint32Array(v)
l.a=u
for(t=1,s=0,r=2;t<=w;){for(q=t<<16,x=0;x<k;++x)if(d[x]===t){for(p=s,o=0,n=0;n<t;++n){o=(o<<1|p&1)>>>0
p=p>>>1}for(m=(q|x)>>>0,n=o;n<v;n+=r)u[n]=m;++s}++t
s=s<<1>>>0
r=r<<1>>>0}}}
A.bRk.prototype={}
A.cq_.prototype={
bAT(d,e,f,g){var x,w,v,u,t,s=null
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
if(D.c.ao(u*256+t,31)!==0)return!1
if((t>>>5&1)!==0){d.a5()
return!1}if(s!=null)e.mj(s)
x=new A.a1_()
x.a3O(C.aLh)
w=new A.a1_()
w.a3O(C.aBn)
v=new A.axq(new Uint8Array(32768),C.qf)
new A.bly(d,v,x,w).bdy()
s=J.dh(D.C.gak(v.c),v.c.byteOffset,v.b)
d.a5()}if(s!=null)e.mj(s)
return!0}}
A.bRl.prototype={}
A.cq0.prototype={
aCe(d,e){var x=A.cJy(C.nt,32768)
this.bCz(A.blP(d,C.qf,null,null),x,e,!1,null)
return x.agN()},
bCz(d,e,f,g,h){var x,w,v,u,t,s,r,q,p
e.a=C.nt
x=(D.c.b3(15,0,15)-8<<4|8)>>>0
e.b2(x)
w=x*256
for(v=0;u=(v|0)>>>0,D.c.ao(w+u,31)!==0;)++v
e.b2(u)
t=d.c
s=A.doj(d)
d.c=t
u=f==null?6:f
A.d0E(d,u,e,15)
u=s&255
r=s>>>24&255
q=s>>>16&255
p=s>>>8&255
if(e.a===C.nt){e.b2(r)
e.b2(q)
e.b2(p)
e.b2(u)}else{e.b2(u)
e.b2(p)
e.b2(q)
e.b2(r)}}}
A.UL.prototype={
J(){return"_DeflateFlushMode."+this.b}}
A.b8H.prototype={
b25(d,e){var x,w,v,u,t=this,s=!0
if(e>=9)if(e<=15)s=d>9
if(s)return!1
x=t.b5x(d)
if(x==null)return!1
$.wb.b=x
s=new Uint16Array(1146)
t.p1=s
w=new Uint16Array(122)
t.p2=w
v=new Uint16Array(78)
t.p3=v
t.as=e
u=t.Q=D.c.eu(1,e)
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
t.bH=16384
t.xr=49152
t.k4=d
t.w=t.x=t.ok=0
t.c=113
t.d=0
u=t.p4
u.a=s
u.c=$.cVC()
u=t.R8
u.a=w
u.c=$.cVB()
u=t.RG
u.a=v
u.c=$.cVA()
t.E=t.bv=0
t.bn=8
t.aqH()
t.beL()
return!0},
b24(d){var x,w,v,u,t=this,s=t.x
s===$&&B.b()
if(s!==0)t.a4X()
s=t.a
x=s.c
s=s.d
s===$&&B.b()
w=!0
if(x>=s){s=t.k2
s===$&&B.b()
if(s===0)s=d!==C.zu&&t.c!==666
else s=w}else s=w
if(s){switch($.wb.co().e){case 0:v=t.b28(d)
break
case 1:v=t.b26(d)
break
case 2:v=t.b27(d)
break
default:v=-1
break}s=v===2
if(s||v===3)t.c=666
if(v===0||s)return 0
if(v===1){if(d===C.bM8){t.lK(2,3)
t.Go(256,C.ut)
t.ayY()
s=t.bn
s===$&&B.b()
x=t.E
x===$&&B.b()
if(1+s+10-x<9){t.lK(2,3)
t.Go(256,C.ut)
t.ayY()}t.bn=7}else{t.awc(0,0,!1)
if(d===C.bM9){s=t.cy
s===$&&B.b()
x=t.CW
u=0
for(;u<s;++u){x===$&&B.b()
x.$flags&2&&B.F(x)
x[u]=0}}}t.a4X()}}if(d!==C.pV)return 0
return 1},
beL(){var x,w,v=this,u=v.Q
u===$&&B.b()
v.ay=2*u
u=v.CW
u===$&&B.b()
x=v.cy
x===$&&B.b();--x
u.$flags&2&&B.F(u)
u[x]=0
for(w=0;w<x;++w)u[w]=0
v.k2=v.fr=v.id=0
v.fx=v.k3=2
v.cx=v.go=0},
aqH(){var x,w,v,u=this
for(x=u.p1,w=0;w<286;++w){x===$&&B.b()
x.$flags&2&&B.F(x)
x[w*2]=0}for(v=u.p2,w=0;w<30;++w){v===$&&B.b()
v.$flags&2&&B.F(v)
v[w*2]=0}for(v=u.p3,w=0;w<19;++w){v===$&&B.b()
v.$flags&2&&B.F(v)
v[w*2]=0}x===$&&B.b()
x.$flags&2&&B.F(x)
x[512]=1
u.y2=u.b9=u.bz=u.aF=0},
a7q(d,e){var x,w,v=this.ry,u=v[e],t=e<<1>>>0,s=v.$flags|0,r=this.x2
while(!0){x=this.to
x===$&&B.b()
if(!(t<=x))break
if(t<x&&A.cFv(d,v[t+1],v[t],r))++t
if(A.cFv(d,u,v[t],r))break
x=v[t]
s&2&&B.F(v)
v[e]=x
w=t<<1>>>0
e=t
t=w}s&2&&B.F(v)
v[e]=u},
au6(d,e){var x,w,v,u,t,s,r,q,p,o,n=d[1]
if(n===0){x=138
w=3}else{x=7
w=4}d.$flags&2&&B.F(d)
d[(e+1)*2+1]=65535
for(v=this.p3,u=0,t=-1,s=0;u<=e;n=r){++u
r=d[u*2+1];++s
if(s<x&&n===r)continue
else{q=3
if(s<w){v===$&&B.b()
p=n*2
o=v[p]
v.$flags&2&&B.F(v)
v[p]=o+s}else if(n!==0){if(n!==t){v===$&&B.b()
p=n*2
o=v[p]
v.$flags&2&&B.F(v)
v[p]=o+1}v===$&&B.b()
p=v[32]
v.$flags&2&&B.F(v)
v[32]=p+1}else if(s<=10){v===$&&B.b()
p=v[34]
v.$flags&2&&B.F(v)
v[34]=p+1}else{v===$&&B.b()
p=v[36]
v.$flags&2&&B.F(v)
v[36]=p+1}}if(r===0){w=q
x=138}else if(n===r){w=q
x=6}else{x=7
w=4}t=n
s=0}},
aZ_(){var x,w,v=this,u=v.p1
u===$&&B.b()
x=v.p4.b
x===$&&B.b()
v.au6(u,x)
x=v.p2
x===$&&B.b()
u=v.R8.b
u===$&&B.b()
v.au6(x,u)
v.RG.a4h(v)
for(u=v.p3,w=18;w>=3;--w){u===$&&B.b()
if(u[C.DI[w]*2+1]!==0)break}u=v.bz
u===$&&B.b()
v.bz=u+(3*(w+1)+5+5+4)
return w},
boc(d,e,f){var x,w,v,u=this
u.lK(d-257,5)
x=e-1
u.lK(x,5)
u.lK(f-4,4)
for(w=0;w<f;++w){v=u.p3
v===$&&B.b()
u.lK(v[C.DI[w]*2+1],3)}v=u.p1
v===$&&B.b()
u.auF(v,d-1)
v=u.p2
v===$&&B.b()
u.auF(v,x)},
auF(d,e){var x,w,v,u,t,s,r,q,p,o,n=this,m=d[1]
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
n.lK(o[q]&65535,o[p]&65535)}while(--t,t!==0)}else if(m!==0){if(m!==u){q=n.p3
q===$&&B.b()
p=m*2
n.lK(q[p]&65535,q[p+1]&65535);--t}q=n.p3
q===$&&B.b()
n.lK(q[32]&65535,q[33]&65535)
n.lK(t-3,2)}else{q=n.p3
if(t<=10){q===$&&B.b()
n.lK(q[34]&65535,q[35]&65535)
n.lK(t-3,3)}else{q===$&&B.b()
n.lK(q[36]&65535,q[37]&65535)
n.lK(t-11,7)}}}if(s===0){w=r
x=138}else if(m===s){w=r
x=6}else{x=7
w=4}u=m
t=0}},
ble(d,e,f){var x,w,v=this
if(f===0)return
x=v.f
x===$&&B.b()
w=v.x
w===$&&B.b()
D.C.e9(x,w,w+f,d,e)
v.x=v.x+f},
qR(d){var x,w=this.f
w===$&&B.b()
x=this.x
x===$&&B.b()
this.x=x+1
w.$flags&2&&B.F(w)
w[x]=d},
Go(d,e){var x=d*2
this.lK(e[x]&65535,e[x+1]&65535)},
lK(d,e){var x,w=this,v=w.E
v===$&&B.b()
x=w.bv
if(v>16-e){x===$&&B.b()
v=w.bv=(x|D.c.f0(d,v)&65535)>>>0
w.qR(v)
w.qR(A.pS(v,8))
w.bv=A.pS(d,16-w.E)
w.E=w.E+(e-16)}else{x===$&&B.b()
w.bv=(x|D.c.f0(d,v)&65535)>>>0
w.E=v+e}},
Nc(d,e){var x,w,v,u,t,s=this,r=s.f
r===$&&B.b()
x=s.bH
x===$&&B.b()
w=s.y2
w===$&&B.b()
v=A.pS(d,8)
r.$flags&2&&B.F(r)
r[x+w*2]=v
v=s.f
w=s.bH
x=s.y2
v.$flags&2&&B.F(v)
v[w+x*2+1]=d
w=s.xr
w===$&&B.b()
v[w+x]=e
s.y2=x+1
if(d===0){r=s.p1
r===$&&B.b()
x=e*2
w=r[x]
r.$flags&2&&B.F(r)
r[x]=w+1}else{r=s.b9
r===$&&B.b()
s.b9=r+1
r=s.p1
r===$&&B.b()
x=(C.Px[e]+256+1)*2
w=r[x]
r.$flags&2&&B.F(r)
r[x]=w+1
w=s.p2
w===$&&B.b()
x=A.cNL(d-1)*2
r=w[x]
w.$flags&2&&B.F(w)
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
u+=w[t*2]*(5+C.ue[t])}u=A.pS(u,3)
w=s.b9
w===$&&B.b()
v=s.y2
if(w<v/2&&u<(r-x)/2)return!0
r=v}x=s.y1
x===$&&B.b()
return r===x-1},
amt(d,e){var x,w,v,u,t,s,r=this,q=r.y2
q===$&&B.b()
if(q!==0){x=0
do{q=r.f
q===$&&B.b()
w=r.bH
w===$&&B.b()
w+=x*2
v=q[w]<<8&65280|q[w+1]&255
w=r.xr
w===$&&B.b()
u=q[w+x]&255;++x
if(v===0)r.Go(u,d)
else{t=C.Px[u]
r.Go(t+256+1,d)
s=C.NE[t]
if(s!==0)r.lK(u-C.ayc[t],s);--v
t=A.cNL(v)
r.Go(t,e)
s=C.ue[t]
if(s!==0)r.lK(v-C.aB6[t],s)}}while(x<r.y2)}r.Go(256,d)
r.bn=d[513]},
aNj(){var x,w,v,u
for(x=this.p1,w=0,v=0;w<7;){x===$&&B.b()
v+=x[w*2];++w}for(u=0;w<128;){x===$&&B.b()
u+=x[w*2];++w}for(;w<256;){x===$&&B.b()
v+=x[w*2];++w}this.y=v>A.pS(u,2)?0:1},
ayY(){var x=this,w=x.E
w===$&&B.b()
if(w===16){w=x.bv
w===$&&B.b()
x.qR(w)
x.qR(A.pS(w,8))
x.E=x.bv=0}else if(w>=8){w=x.bv
w===$&&B.b()
x.qR(w)
x.bv=A.pS(x.bv,8)
x.E=x.E-8}},
ala(){var x=this,w=x.E
w===$&&B.b()
if(w>8){w=x.bv
w===$&&B.b()
x.qR(w)
x.qR(A.pS(w,8))}else if(w>0){w=x.bv
w===$&&B.b()
x.qR(w)}x.E=x.bv=0},
yM(d){var x,w,v,u,t,s=this,r=s.fr
r===$&&B.b()
if(r>=0)x=r
else x=-1
w=s.id
w===$&&B.b()
r=w-r
w=s.k4
w===$&&B.b()
if(w>0){if(s.y===2)s.aNj()
s.p4.a4h(s)
s.R8.a4h(s)
v=s.aZ_()
w=s.bz
w===$&&B.b()
u=A.pS(w+3+7,3)
w=s.aF
w===$&&B.b()
t=A.pS(w+3+7,3)
if(t<=u)u=t}else{t=r+5
u=t
v=0}if(r+4<=u&&x!==-1)s.awc(x,r,d)
else if(t===u){s.lK(2+(d?1:0),3)
s.amt(C.ut,C.Qf)}else{s.lK(4+(d?1:0),3)
r=s.p4.b
r===$&&B.b()
x=s.R8.b
x===$&&B.b()
s.boc(r+1,x+1,v+1)
x=s.p1
x===$&&B.b()
r=s.p2
r===$&&B.b()
s.amt(x,r)}s.aqH()
if(d)s.ala()
s.fr=s.id
s.a4X()},
b28(d){var x,w,v,u,t,s=this,r=s.r
r===$&&B.b()
x=r-5
x=65535>x?x:65535
for(r=d===C.zu;!0;){w=s.k2
w===$&&B.b()
if(w<=1){s.a5j()
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
s.yM(!1)}w=s.id
v=s.fr
t=s.Q
t===$&&B.b()
if(w-v>=t-262)s.yM(!1)}r=d===C.pV
s.yM(r)
return r?3:1},
awc(d,e,f){var x,w=this
w.lK(f?1:0,3)
w.ala()
w.bn=8
w.qR(e)
w.qR(A.pS(e,8))
x=(~e>>>0)+65536&65535
w.qR(x)
w.qR(A.pS(x,8))
x=w.ax
x===$&&B.b()
w.ble(x,d,e)},
a5j(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.a
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
D.C.e9(w,0,x,w,x)
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
v&2&&B.F(w)
w[s]=x}while(--r,r!==0)
x=n.ch
x===$&&B.b()
w=x.$flags|0
s=t
r=s
do{--s
q=x[s]&65535
v=q>=t?q-t:0
w&2&&B.F(x)
x[s]=v}while(--r,r!==0)
u+=t}}x=m.c
w=m.d
w===$&&B.b()
if(x>=w)return
x=n.ax
x===$&&B.b()
r=n.bln(x,n.id+n.k2,u)
x=n.k2=n.k2+r
if(x>=3){w=n.ax
v=n.id
p=w[v]&255
n.cx=p
o=n.dy
o===$&&B.b()
o=D.c.f0(p,o)
v=w[v+1]
w=n.dx
w===$&&B.b()
n.cx=((o^v&255)&w)>>>0}}while(x<262&&!(m.c>=m.d))},
b26(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
for(x=d===C.zu,w=$.wb.a,v=0;!0;){u=m.k2
u===$&&B.b()
if(u<262){m.a5j()
u=m.k2
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=m.cx
u===$&&B.b()
t=m.dy
t===$&&B.b()
t=D.c.f0(u,t)
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
q.$flags&2&&B.F(q)
q[(s&p)>>>0]=t
u.$flags&2&&B.F(u)
u[r]=s}if(v!==0){u=m.id
u===$&&B.b()
t=m.Q
t===$&&B.b()
t=(u-v&65535)<=t-262
u=t}else u=!1
if(u){u=m.ok
u===$&&B.b()
if(u!==2)m.fx=m.arr(v)}u=m.fx
u===$&&B.b()
t=m.id
if(u>=3){t===$&&B.b()
o=m.Nc(t-m.k1,u-3)
u=m.k2
t=m.fx
u-=t
m.k2=u
s=$.wb.b
if(s===$.wb)B.a7(B.wG(w))
if(t<=s.b&&u>=3){u=m.fx=t-1
do{t=m.id=m.id+1
s=m.cx
s===$&&B.b()
r=m.dy
r===$&&B.b()
r=D.c.f0(s,r)
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
p.$flags&2&&B.F(p)
p[(t&n)>>>0]=r
s.$flags&2&&B.F(s)
s[q]=t}while(u=m.fx=u-1,u!==0)
m.id=t+1}else{u=m.id=m.id+t
m.fx=0
t=m.ax
t===$&&B.b()
s=t[u]&255
m.cx=s
r=m.dy
r===$&&B.b()
r=D.c.f0(s,r)
u=t[u+1]
t=m.dx
t===$&&B.b()
m.cx=((r^u&255)&t)>>>0}}else{u=m.ax
u===$&&B.b()
t===$&&B.b()
o=m.Nc(0,u[t]&255)
m.k2=m.k2-1
m.id=m.id+1}if(o)m.yM(!1)}x=d===C.pV
m.yM(x)
return x?3:1},
b27(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
for(x=d===C.zu,w=$.wb.a,v=0;!0;){u=l.k2
u===$&&B.b()
if(u<262){l.a5j()
u=l.k2
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=l.cx
u===$&&B.b()
t=l.dy
t===$&&B.b()
t=D.c.f0(u,t)
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
q.$flags&2&&B.F(q)
q[(s&p)>>>0]=t
u.$flags&2&&B.F(u)
u[r]=s}u=l.fx
u===$&&B.b()
l.k3=u
l.fy=l.k1
l.fx=2
t=!1
if(v!==0){s=$.wb.b
if(s===$.wb)B.a7(B.wG(w))
if(u<s.b){u=l.id
u===$&&B.b()
t=l.Q
t===$&&B.b()
t=(u-v&65535)<=t-262
u=t}else u=t}else u=t
t=2
if(u){u=l.ok
u===$&&B.b()
if(u!==2){u=l.arr(v)
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
n=l.Nc(u-1-l.fy,t-3)
t=l.k2
u=l.k3
l.k2=t-(u-1)
u=l.k3=u-2
do{t=l.id=l.id+1
if(t<=o){s=l.cx
s===$&&B.b()
r=l.dy
r===$&&B.b()
r=D.c.f0(s,r)
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
p.$flags&2&&B.F(p)
p[(t&m)>>>0]=r
s.$flags&2&&B.F(s)
s[q]=t}}while(u=l.k3=u-1,u!==0)
l.go=0
l.fx=2
l.id=t+1
if(n)l.yM(!1)}else{u=l.go
u===$&&B.b()
if(u!==0){u=l.ax
u===$&&B.b()
t=l.id
t===$&&B.b()
if(l.Nc(0,u[t-1]&255))l.yM(!1)
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
l.Nc(0,x[w-1]&255)
l.go=0}x=d===C.pV
l.yM(x)
return x?3:1},
arr(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=$.wb.co().d,h=j.id
h===$&&B.b()
x=j.k3
x===$&&B.b()
w=j.Q
w===$&&B.b()
w-=262
v=h>w?h-w:0
u=$.wb.co().c
w=j.at
w===$&&B.b()
t=j.id+258
s=j.ax
s===$&&B.b()
r=h+x
q=s[r-1]
p=s[r]
if(j.k3>=$.wb.co().a)i=i>>>2
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
bln(d,e,f){var x,w,v,u,t,s,r=this
if(f!==0){x=r.a
w=x.c
x=x.d
x===$&&B.b()
x=w>=x}else x=!0
if(x)return 0
v=r.a.jr(f)
u=v.gu(0)
if(u===0)return 0
t=v.hZ()
s=t.length
if(u>s)u=s
D.C.hO(d,e,e+u,t)
r.e+=u
r.d=A.xV(t,r.d)
return u},
a4X(){var x,w=this,v=w.x
v===$&&B.b()
x=w.f
x===$&&B.b()
w.b.aJk(x,v)
x=w.w
x===$&&B.b()
w.w=x+v
v=w.x-v
w.x=v
if(v===0)w.w=0},
b5x(d){switch(d){case 0:return new A.tF(0,0,0,0,0)
case 1:return new A.tF(4,4,8,4,1)
case 2:return new A.tF(4,5,16,8,1)
case 3:return new A.tF(4,6,32,32,1)
case 4:return new A.tF(4,4,16,16,2)
case 5:return new A.tF(8,16,32,32,2)
case 6:return new A.tF(8,16,128,128,2)
case 7:return new A.tF(8,32,128,256,2)
case 8:return new A.tF(32,128,258,1024,2)
case 9:return new A.tF(32,258,258,4096,2)}return null}}
A.tF.prototype={}
A.c4s.prototype={
b5f(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a
d===$&&B.b()
x=e.c
x===$&&B.b()
w=x.a
v=x.b
u=x.c
t=x.e
for(x=a0.rx,s=x.$flags|0,r=0;r<=15;++r){s&2&&B.F(x)
x[r]=0}q=a0.ry
p=a0.x1
p===$&&B.b()
o=q[p]
d.$flags&2&&B.F(d)
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
s&2&&B.F(x)
x[r]=j+1
i=l>=u?v[l-u]:0
h=d[o]
o=a0.bz
o===$&&B.b()
a0.bz=o+h*(r+i)
if(p){o=a0.aF
o===$&&B.b()
a0.aF=o+h*(w[k]+i)}}if(m===0)return
r=t-1
do{for(g=r;p=x[g],p===0;)--g
s&2&&B.F(x)
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
if(o!==r){k=a0.bz
k===$&&B.b()
a0.bz=k+(r-o)*d[s]
d[p]=r}--l}}},
a4h(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
g===$&&B.b()
x=h.c
x===$&&B.b()
w=x.a
v=x.d
d.to=0
d.x1=573
for(x=g.$flags|0,u=d.ry,t=u.$flags|0,s=d.x2,r=s.$flags|0,q=0,p=-1;q<v;++q){o=q*2
if(g[o]!==0){o=++d.to
t&2&&B.F(u)
u[o]=q
r&2&&B.F(s)
s[q]=0
p=q}else{x&2&&B.F(g)
g[o+1]=0}}for(o=w!=null;n=d.to,n<2;){++n
d.to=n
if(p<2){++p
m=p}else m=0
t&2&&B.F(u)
u[n]=m
n=m*2
x&2&&B.F(g)
g[n]=1
r&2&&B.F(s)
s[m]=0
l=d.bz
l===$&&B.b()
d.bz=l-1
if(o){l=d.aF
l===$&&B.b()
d.aF=l-w[n+1]}}h.b=p
for(q=D.c.b0(n,2);q>=1;--q)d.a7q(g,q)
m=v
do{q=u[1]
o=u[d.to--]
t&2&&B.F(u)
u[1]=o
d.a7q(g,1)
k=u[1]
o=--d.x1
u[o]=q;--o
d.x1=o
u[o]=k
o=q*2
n=g[o]
l=k*2
j=g[l]
x&2&&B.F(g)
g[m*2]=n+j
j=s[q]
n=s[k]
if(j>n)n=j
r&2&&B.F(s)
s[m]=n+1
g[l+1]=m
g[o+1]=m
i=m+1
u[1]=m
d.a7q(g,1)
if(d.to>=2){m=i
continue}else break}while(!0)
u[--d.x1]=u[1]
h.b5f(d)
A.deq(g,p,d.rx)}}
A.ciW.prototype={}
A.bly.prototype={
guO(){var x=this.a
if(x==null)return x
x.d===$&&B.b()
return x},
bdy(){var x,w,v=this
v.e=v.d=0
if(v.guO()==null)return
while(!0){x=v.guO()
w=x.c
x=x.d
x===$&&B.b()
if(!(w<x))break
if(!v.bjx())return}},
bjx(){var x,w,v,u=this,t=u.guO()
if(t!=null){x=t.c
w=t.d
w===$&&B.b()
w=x>=w
x=w}else x=!0
if(x)return!1
v=u.qS(3)
switch(D.c.S(v,1)){case 0:if(u.bjR()===-1)return!1
break
case 1:if(u.amY(u.r,u.w)===-1)return!1
break
case 2:if(u.bjB()===-1)return!1
break
default:return!1}return(v&1)===0},
qS(d){var x,w,v,u,t=this
if(d===0)return 0
for(;x=t.e,x<d;){x=t.guO()
w=x.c
x=x.d
x===$&&B.b()
if(w>=x)return-1
x=t.guO()
w=x.b
w.toString
v=w[x.c++]
x=t.d
w=t.e
t.d=(x|D.c.f0(v,w))>>>0
t.e=w+8}w=t.d
u=D.c.eu(1,d)
t.d=D.c.hJ(w,d)
t.e=x-d
return(w&u-1)>>>0},
a7w(d){var x,w,v,u,t,s,r=this,q=d.a
q===$&&B.b()
x=d.b
for(;w=r.e,w<x;){w=r.guO()
v=w.c
w=w.d
w===$&&B.b()
if(v>=w)return-1
w=r.guO()
v=w.b
v.toString
u=v[w.c++]
w=r.d
v=r.e
r.d=(w|D.c.f0(u,v))>>>0
r.e=v+8}v=r.d
t=q[(v&D.c.f0(1,x)-1)>>>0]
s=t>>>16
r.d=D.c.hJ(v,s)
r.e=w-s
return t&65535},
bjR(){var x,w,v=this
v.e=v.d=0
x=v.qS(16)
w=v.qS(16)
if(x!==0&&x!==(w^65535)>>>0)return-1
if(x>v.guO().gu(0))return-1
v.c.bR_(v.guO().jr(x))
return 0},
bjB(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.qS(5)
if(m===-1)return-1
m+=257
if(m>288)return-1
x=n.qS(5)
if(x===-1)return-1;++x
if(x>32)return-1
w=n.qS(4)
if(w===-1)return-1
w+=4
if(w>19)return-1
v=new Uint8Array(19)
for(u=0;u<w;++u){t=n.qS(3)
if(t===-1)return-1
v[C.DI[u]]=t}s=A.cxe(v)
r=m+x
q=new Uint8Array(r)
p=J.dh(D.C.gak(q),0,m)
o=J.dh(D.C.gak(q),m,x)
if(n.b1c(r,s,q)===-1)return-1
return n.amY(A.cxe(p),A.cxe(o))},
amY(d,e){var x,w,v,u,t,s,r,q,p=this
for(x=p.c;!0;){w=p.a7w(d)
if(w<0||w>285)return-1
if(w===256)break
if(w<256){x.b2(w&255)
continue}v=w-257
u=C.aJZ[v]+p.qS(C.aLu[v])
t=p.a7w(e)
if(t<0||t>29)return-1
s=C.aK5[t]+p.qS(C.ue[t])
for(r=-s;u>s;){x.mj(x.jy(r))
u-=s}if(u===s)x.mj(x.jy(r))
else x.mj(x.aj_(r,u-s))}for(;x=p.e,x>=8;){p.e=x-8
x=p.guO()
r=--x.c
q=x.d
q===$&&B.b()
x.c=D.c.b3(r,0,q)}return 0},
b1c(d,e,f){var x,w,v,u,t,s,r,q,p=this
for(x=f.$flags|0,w=0,v=0;v<d;){u=p.a7w(e)
if(u===-1)return-1
t=0
switch(u){case 16:s=p.qS(2)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.F(f)
f[v]=w}break
case 17:s=p.qS(3)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.F(f)
f[v]=0}w=t
break
case 18:s=p.qS(7)
if(s===-1)return-1
s+=11
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.F(f)
f[v]=0}w=t
break
default:if(u<0||u>15)return-1
q=v+1
x&2&&B.F(f)
f[v]=u
v=q
w=u
break}}return 0}}
A.bRj.prototype={
CK(d){var x=A.cJy(C.qf,32768)
C.ak3.bAT(A.blP(d,C.nt,null,null),x,!1,!1)
return x.agN()}}
A.al0.prototype={
J(){return"ByteOrder."+this.b}}
A.blO.prototype={
gu(d){var x=this.b
return x==null?0:x.length-this.c},
h(d,e){return this.b[this.c+e]},
aQ8(d,e){var x=this.b
if(x==null)return A.blP(B.a([],y.t),C.qf,null,null)
return A.blP(x,this.a,d,e)},
cu(){var x=this.b
x.toString
return x[this.c++]},
hZ(){var x,w,v,u,t=this
if(t.b==null)return new Uint8Array(0)
x=t.gu(0)
w=t.c
v=t.b
u=v.length
if(w+x>u)x=u-w
return J.dh(D.C.gak(v),t.b.byteOffset+t.c,x)}}
A.blQ.prototype={
a5(){var x=this,w=x.cu(),v=x.cu(),u=x.cu(),t=x.cu()
if(x.a===C.nt)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
jr(d){var x=this,w=x.aQ8(d,x.c)
x.c=x.c+w.gu(0)
return w}}
A.axq.prototype={
agN(){return J.dh(D.C.gak(this.c),this.c.byteOffset,this.b)},
b2(d){var x,w,v=this
if(v.b===v.c.length)v.bj6()
x=v.c
w=v.b++
x.$flags&2&&B.F(x)
x[w]=d},
aJk(d,e){var x,w,v,u,t=this
if(e==null)e=d.length
for(;x=t.b,w=x+e,v=t.c,u=v.length,w>u;)t.a79(w-u)
D.C.hO(v,x,w,d)
t.b+=e},
mj(d){return this.aJk(d,null)},
bR_(d){var x,w,v,u,t,s,r=this
while(!0){x=r.b
w=d.b
v=w==null
u=v?0:w.length-d.c
t=r.c
s=t.length
if(!(x+u>s))break
r.a79(x+(v?0:w.length-d.c)-s)}if(!v){w=d.gu(0)
v=d.b
v.toString
D.C.e9(t,x,x+w,v,d.c)}r.b=r.b+d.gu(0)},
aj_(d,e){var x=this
if(d<0)d=x.b+d
if(e==null)e=x.b
else if(e<0)e=x.b+e
return J.dh(D.C.gak(x.c),x.c.byteOffset+d,e-d)},
jy(d){return this.aj_(d,null)},
a79(d){var x=d!=null?d>32768?d:32768:32768,w=this.c,v=w.length,u=new Uint8Array((v+x)*2)
D.C.hO(u,0,v,w)
this.c=u},
bj6(){return this.a79(null)},
gu(d){return this.b}}
A.buZ.prototype={}
A.b2g.prototype={
J(){return"Channel."+this.b}}
A.hI.prototype={
q(){var x=this.b
return++this.a<x.gu(x)},
gL(d){return this.b.h(0,this.a)},
$ibv:1}
A.O9.prototype={
dY(d){return new A.O9(new Uint16Array(B.bV(this.a)))},
gdu(){return C.iv},
gu(d){return this.a.length},
geZ(){return null},
h(d,e){var x,w=this.a
if(e<w.length){w=w[e]
x=$.i0
w=(x!=null?x:A.iU())[w]}else w=0
return w},
m(d,e,f){var x,w=this.a
if(e<w.length){x=A.h7(f)
w.$flags&2&&B.F(w)
w[e]=x}},
geb(d){return this.gah(0)},
gah(d){var x,w=this.a
if(!D.ec.gW(w)){w=w[0]
x=$.i0
w=(x!=null?x:A.iU())[w]}else w=0
return w},
sah(d,e){var x,w=this.a
if(!D.ec.gW(w)){x=A.h7(e)
w.$flags&2&&B.F(w)
w[0]=x}},
gar(){var x,w=this.a
if(w.length>1){w=w[1]
x=$.i0
w=(x!=null?x:A.iU())[w]}else w=0
return w},
sar(d){var x,w=this.a
if(w.length>1){x=A.h7(d)
w.$flags&2&&B.F(w)
w[1]=x}},
gav(d){var x,w=this.a
if(w.length>2){w=w[2]
x=$.i0
w=(x!=null?x:A.iU())[w]}else w=0
return w},
sav(d,e){var x,w=this.a
if(w.length>2){x=A.h7(e)
w.$flags&2&&B.F(w)
w[2]=x}},
gaG(d){var x,w=this.a
if(w.length>3){w=w[3]
x=$.i0
w=(x!=null?x:A.iU())[w]}else w=0
return w},
gfH(){return this.gaG(0)/1},
gjQ(){return A.ju(this)},
iV(d,e){var x,w,v=this
v.sah(0,e.gah(e))
v.sar(e.gar())
v.sav(0,e.gav(e))
x=e.gaG(e)
w=v.a
if(w.length>3){x=A.h7(x)
w.$flags&2&&B.F(w)
w[3]=x}},
ga6(d){return new A.hI(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aL(B.H(this,!0,B.t(this).i("y.E")))},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
$idJ:1}
A.Oa.prototype={
dY(d){return new A.Oa(new Float32Array(B.bV(this.a)))},
gdu(){return C.k5},
gu(d){return this.a.length},
geZ(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x=this.a
if(e<x.length){x.$flags&2&&B.F(x)
x[e]=f}},
geb(d){var x=this.a
return!D.fB.gW(x)?x[0]:0},
gah(d){var x=this.a
return!D.fB.gW(x)?x[0]:0},
sah(d,e){var x=this.a
if(!D.fB.gW(x)){x.$flags&2&&B.F(x)
x[0]=e}},
gar(){var x=this.a
return x.length>1?x[1]:0},
sar(d){var x=this.a
if(x.length>1){x.$flags&2&&B.F(x)
x[1]=d}},
gav(d){var x=this.a
return x.length>2?x[2]:0},
sav(d,e){var x=this.a
if(x.length>2){x.$flags&2&&B.F(x)
x[2]=e}},
gaG(d){var x=this.a
return x.length>3?x[3]:1},
gfH(){return this.gaG(0)/1},
gjQ(){return A.ju(this)},
iV(d,e){var x,w,v=this
v.sah(0,e.gah(e))
v.sar(e.gar())
v.sav(0,e.gav(e))
x=e.gaG(e)
w=v.a
if(w.length>3){w.$flags&2&&B.F(w)
w[3]=x}},
ga6(d){return new A.hI(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aL(B.H(this,!0,B.t(this).i("y.E")))},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
$idJ:1}
A.Ob.prototype={
dY(d){return new A.Ob(new Float64Array(B.bV(this.a)))},
gdu(){return C.lK},
gu(d){return this.a.length},
geZ(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x=this.a
if(e<x.length){x.$flags&2&&B.F(x)
x[e]=f}},
geb(d){var x=this.a
return!D.eE.gW(x)?x[0]:0},
gah(d){var x=this.a
return!D.eE.gW(x)?x[0]:0},
sah(d,e){var x=this.a
if(!D.eE.gW(x)){x.$flags&2&&B.F(x)
x[0]=e}},
gar(){var x=this.a
return x.length>1?x[1]:0},
sar(d){var x=this.a
if(x.length>1){x.$flags&2&&B.F(x)
x[1]=d}},
gav(d){var x=this.a
return x.length>2?x[2]:0},
sav(d,e){var x=this.a
if(x.length>2){x.$flags&2&&B.F(x)
x[2]=e}},
gaG(d){var x=this.a
return x.length>3?x[3]:1},
gfH(){return this.gaG(0)/1},
gjQ(){return A.ju(this)},
iV(d,e){var x,w,v=this
v.sah(0,e.gah(e))
v.sar(e.gar())
v.sav(0,e.gav(e))
x=e.gaG(e)
w=v.a
if(w.length>3){w.$flags&2&&B.F(w)
w[3]=x}},
ga6(d){return new A.hI(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aL(B.H(this,!0,B.t(this).i("y.E")))},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
$idJ:1}
A.Oc.prototype={
dY(d){return new A.Oc(new Int16Array(B.bV(this.a)))},
gdu(){return C.lM},
gu(d){return this.a.length},
geZ(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.F(w)
w[e]=x}},
geb(d){var x=this.a
return!D.kE.gW(x)?x[0]:0},
gah(d){var x=this.a
return!D.kE.gW(x)?x[0]:0},
sah(d,e){var x,w=this.a
if(!D.kE.gW(w)){x=D.d.C(e)
w.$flags&2&&B.F(w)
w[0]=x}},
gar(){var x=this.a
return x.length>1?x[1]:0},
sar(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.F(w)
w[1]=x}},
gav(d){var x=this.a
return x.length>2?x[2]:0},
sav(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.F(w)
w[2]=x}},
gaG(d){var x=this.a
return x.length>3?x[3]:0},
gfH(){return this.gaG(0)/32767},
gjQ(){return A.ju(this)},
iV(d,e){var x,w,v=this
v.sah(0,e.gah(e))
v.sar(e.gar())
v.sav(0,e.gav(e))
x=e.gaG(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.F(w)
w[3]=x}},
ga6(d){return new A.hI(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aL(B.H(this,!0,B.t(this).i("y.E")))},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
$idJ:1}
A.Od.prototype={
dY(d){return new A.Od(new Int32Array(B.bV(this.a)))},
gdu(){return C.lN},
gu(d){return this.a.length},
geZ(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.F(w)
w[e]=x}},
geb(d){var x=this.a
return!D.cI.gW(x)?x[0]:0},
gah(d){var x=this.a
return!D.cI.gW(x)?x[0]:0},
sah(d,e){var x=this.a
if(!D.cI.gW(x)){B.bc(e)
x.$flags&2&&B.F(x)
x[0]=e}},
gar(){var x=this.a
return x.length>1?x[1]:0},
sar(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.F(w)
w[1]=x}},
gav(d){var x=this.a
return x.length>2?x[2]:0},
sav(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.F(w)
w[2]=x}},
gaG(d){var x=this.a
return x.length>3?x[3]:0},
gfH(){return this.gaG(0)/2147483647},
gjQ(){return A.ju(this)},
iV(d,e){var x,w,v=this
v.sah(0,e.gah(e))
v.sar(e.gar())
v.sav(0,e.gav(e))
x=e.gaG(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.F(w)
w[3]=x}},
ga6(d){return new A.hI(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aL(B.H(this,!0,B.t(this).i("y.E")))},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
$idJ:1}
A.Oe.prototype={
dY(d){return new A.Oe(new Int8Array(B.bV(this.a)))},
gdu(){return C.lL},
gu(d){return this.a.length},
geZ(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.F(w)
w[e]=x}},
geb(d){var x=this.a
return!D.kF.gW(x)?x[0]:0},
gah(d){var x=this.a
return!D.kF.gW(x)?x[0]:0},
sah(d,e){var x,w=this.a
if(!D.kF.gW(w)){x=D.d.C(e)
w.$flags&2&&B.F(w)
w[0]=x}},
gar(){var x=this.a
return x.length>1?x[1]:0},
sar(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.F(w)
w[1]=x}},
gav(d){var x=this.a
return x.length>2?x[2]:0},
sav(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.F(w)
w[2]=x}},
gaG(d){var x=this.a
return x.length>3?x[3]:0},
gfH(){return this.gaG(0)/127},
gjQ(){return A.ju(this)},
iV(d,e){var x,w,v=this
v.sah(0,e.gah(e))
v.sar(e.gar())
v.sav(0,e.gav(e))
x=e.gaG(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.F(w)
w[3]=x}},
ga6(d){return new A.hI(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aL(B.H(this,!0,B.t(this).i("y.E")))},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
$idJ:1}
A.Oh.prototype={
dY(d){var x=this.b
x===$&&B.b()
return new A.Oh(this.a,x)},
gdu(){return C.fT},
geZ(){return null},
Bu(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.h7(x,7-d)&1}else x=0
return x},
yF(d,e){var x
if(d>=this.a)return
d=7-d
x=this.b
x===$&&B.b()
this.b=e!==0?(x|D.c.f0(1,d))>>>0:(x&~(D.c.f0(1,d)&255))>>>0},
h(d,e){return this.Bu(e)},
m(d,e,f){return this.yF(e,f)},
geb(d){return this.Bu(0)},
gah(d){return this.Bu(0)},
sah(d,e){this.yF(0,e)},
gar(){return this.Bu(1)},
sar(d){this.yF(1,d)},
gav(d){return this.Bu(2)},
sav(d,e){this.yF(2,e)},
gaG(d){return this.Bu(3)},
gfH(){return this.Bu(3)/1},
gjQ(){return A.ju(this)},
iV(d,e){this.iC(e.gah(e),e.gar(),e.gav(e),e.gaG(e))},
iC(d,e,f,g){var x=this
x.yF(0,d)
x.yF(1,e)
x.yF(2,f)
x.yF(3,g)},
ga6(d){return new A.hI(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a&&e.gv(e)===B.aL(B.H(this,!0,B.t(this).i("y.E")))},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
$idJ:1,
gu(d){return this.a}}
A.Oi.prototype={
dY(d){return new A.Oi(new Uint16Array(B.bV(this.a)))},
gdu(){return C.cC},
gu(d){return this.a.length},
geZ(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.F(w)
w[e]=x}},
geb(d){var x=this.a
return!D.ec.gW(x)?x[0]:0},
gah(d){var x=this.a
return!D.ec.gW(x)?x[0]:0},
sah(d,e){var x,w=this.a
if(!D.ec.gW(w)){x=D.d.C(e)
w.$flags&2&&B.F(w)
w[0]=x}},
gar(){var x=this.a
return x.length>1?x[1]:0},
sar(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.F(w)
w[1]=x}},
gav(d){var x=this.a
return x.length>2?x[2]:0},
sav(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.F(w)
w[2]=x}},
gaG(d){var x=this.a
return x.length>3?x[3]:0},
gfH(){return this.gaG(0)/65535},
gjQ(){return A.ju(this)},
iV(d,e){var x,w,v=this
v.sah(0,e.gah(e))
v.sar(e.gar())
v.sav(0,e.gav(e))
x=e.gaG(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.F(w)
w[3]=x}},
ga6(d){return new A.hI(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aL(B.H(this,!0,B.t(this).i("y.E")))},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
$idJ:1}
A.Oj.prototype={
dY(d){var x=this.b
x===$&&B.b()
return new A.Oj(this.a,x)},
gdu(){return C.hJ},
geZ(){return null},
Bv(d){var x
if(d<this.a){x=this.b
x===$&&B.b()
x=D.c.h7(x,6-(d<<1>>>0))&3}else x=0
return x},
yG(d,e){var x,w,v
if(d>=this.a)return
x=C.aA0[d]
w=D.d.C(e)
v=this.b
v===$&&B.b()
this.b=(v&x|D.c.f0(w&3,6-(d<<1>>>0)))>>>0},
h(d,e){return this.Bv(e)},
m(d,e,f){return this.yG(e,f)},
geb(d){return this.Bv(0)},
gah(d){return this.Bv(0)},
sah(d,e){this.yG(0,e)},
gar(){return this.Bv(1)},
sar(d){this.yG(1,d)},
gav(d){return this.Bv(2)},
sav(d,e){this.yG(2,e)},
gaG(d){return this.Bv(3)},
gfH(){return this.Bv(3)/3},
gjQ(){return A.ju(this)},
iV(d,e){this.iC(e.gah(e),e.gar(),e.gav(e),e.gaG(e))},
iC(d,e,f,g){var x=this
x.yG(0,d)
x.yG(1,e)
x.yG(2,f)
x.yG(3,g)},
ga6(d){return new A.hI(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a&&e.gv(e)===B.aL(B.H(this,!0,B.t(this).i("y.E")))},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
$idJ:1,
gu(d){return this.a}}
A.Ok.prototype={
dY(d){return new A.Ok(new Uint32Array(B.bV(this.a)))},
gdu(){return C.k6},
gu(d){return this.a.length},
geZ(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.F(w)
w[e]=x}},
geb(d){var x=this.a
return!D.bz.gW(x)?x[0]:0},
gah(d){var x=this.a
return!D.bz.gW(x)?x[0]:0},
sah(d,e){var x,w=this.a
if(!D.bz.gW(w)){x=D.d.C(e)
w.$flags&2&&B.F(w)
w[0]=x}},
gar(){var x=this.a
return x.length>1?x[1]:0},
sar(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.F(w)
w[1]=x}},
gav(d){var x=this.a
return x.length>2?x[2]:0},
sav(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.F(w)
w[2]=x}},
gaG(d){var x=this.a
return x.length>3?x[3]:0},
gfH(){return this.gaG(0)/4294967295},
gjQ(){return A.ju(this)},
iV(d,e){var x,w,v=this
v.sah(0,e.gah(e))
v.sar(e.gar())
v.sav(0,e.gav(e))
x=e.gaG(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.F(w)
w[3]=x}},
ga6(d){return new A.hI(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aL(B.H(this,!0,B.t(this).i("y.E")))},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
$idJ:1}
A.Ol.prototype={
dY(d){return new A.Ol(this.a,new Uint8Array(B.bV(this.b)))},
gdu(){return C.hK},
geZ(){return null},
Bw(d){var x
if(d<0||d>=this.a)x=0
else{x=this.b
x=d<2?D.c.h7(x[0],4-(d<<2>>>0))&15:D.c.h7(x[1],4-((d&1)<<2))&15}return x},
yH(d,e){var x,w,v,u
if(d>=this.a)return
x=D.c.b3(D.d.C(e),0,15)
if(d>1){d&=1
w=1}else w=0
if(d===0){v=this.b
u=v[w]
v.$flags&2&&B.F(v)
v[w]=(u&15|x<<4)>>>0}else if(d===1){v=this.b
u=v[w]
v.$flags&2&&B.F(v)
v[w]=(u&240|x)>>>0}},
h(d,e){return this.Bw(e)},
m(d,e,f){return this.yH(e,f)},
geb(d){return this.Bw(0)},
gah(d){return this.Bw(0)},
sah(d,e){this.yH(0,e)},
gar(){return this.Bw(1)},
sar(d){this.yH(1,d)},
gav(d){return this.Bw(2)},
sav(d,e){this.yH(2,e)},
gaG(d){return this.Bw(3)},
gfH(){return this.Bw(3)/15},
gjQ(){return A.ju(this)},
iV(d,e){this.iC(e.gah(e),e.gar(),e.gav(e),e.gaG(e))},
iC(d,e,f,g){var x=this
x.yH(0,d)
x.yH(1,e)
x.yH(2,f)
x.yH(3,g)},
ga6(d){return new A.hI(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a&&e.gv(e)===B.aL(B.H(this,!0,B.t(this).i("y.E")))},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
$idJ:1,
gu(d){return this.a}}
A.ys.prototype={
aWa(d,e,f,g){var x=this.a
x.$flags&2&&B.F(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g},
dY(d){return new A.ys(new Uint8Array(B.bV(this.a)))},
gdu(){return C.ac},
gu(d){return this.a.length},
geZ(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
m(d,e,f){var x,w=this.a
if(e<w.length){x=D.d.C(f)
w.$flags&2&&B.F(w)
w[e]=x}},
geb(d){var x=this.a
return!D.C.gW(x)?x[0]:0},
gah(d){var x=this.a
return!D.C.gW(x)?x[0]:0},
sah(d,e){var x,w=this.a
if(!D.C.gW(w)){x=D.d.C(e)
w.$flags&2&&B.F(w)
w[0]=x}},
gar(){var x=this.a
return x.length>1?x[1]:0},
sar(d){var x,w=this.a
if(w.length>1){x=D.d.C(d)
w.$flags&2&&B.F(w)
w[1]=x}},
gav(d){var x=this.a
return x.length>2?x[2]:0},
sav(d,e){var x,w=this.a
if(w.length>2){x=D.d.C(e)
w.$flags&2&&B.F(w)
w[2]=x}},
gaG(d){var x=this.a
return x.length>3?x[3]:255},
gfH(){return this.gaG(0)/255},
gjQ(){return A.ju(this)},
iV(d,e){var x,w,v=this
v.sah(0,e.gah(e))
v.sar(e.gar())
v.sav(0,e.gav(e))
x=e.gaG(e)
w=v.a
if(w.length>3){x=D.d.C(x)
w.$flags&2&&B.F(w)
w[3]=x}},
ga6(d){return new A.hI(this)},
k(d,e){if(e==null)return!1
return y.G.b(e)&&e.gu(e)===this.a.length&&e.gv(e)===B.aL(B.H(this,!0,B.t(this).i("y.E")))},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
$idJ:1}
A.alO.prototype={}
A.Of.prototype={}
A.YP.prototype={
dY(d){return new A.YP(this.a)},
gdu(){return C.ac},
gu(d){return 4},
geZ(){return null},
h(d,e){var x
if(e>=0&&e<4){x=e<<3>>>0
x=D.c.hJ((this.a&D.c.eu(255,x))>>>0,x)}else x=0
return x},
m(d,e,f){},
iV(d,e){},
geb(d){return this.h(0,0)},
gah(d){return this.h(0,0)},
sah(d,e){},
gar(){return this.h(0,1)},
sar(d){},
gav(d){return this.h(0,2)},
sav(d,e){},
gaG(d){return this.h(0,3)},
gfH(){return this.gaG(this)/255},
gjQ(){return A.ju(this)},
ga6(d){return new A.hI(this)},
k(d,e){var x=this
if(e==null)return!1
return y.G.b(e)&&e.gu(e)===x.gu(x)&&e.gv(e)===B.aL(B.H(x,!0,B.t(x).i("y.E")))},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
$idJ:1}
A.alZ.prototype={
gaG(d){return 255},
gfH(){return 1},
gu(d){return 3}}
A.nZ.prototype={
J(){return"Format."+this.b}}
A.akM.prototype={
J(){return"BlendMode."+this.b}}
A.Pu.prototype={
RW(d){var x=$.cv5()
if(!x.a0(0,d))return"<unknown>"
return x.h(0,d).a},
j(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(x=j.a,w=new B.ck(x,x.r,x.e,B.t(x).i("ck<1>")),v=y.p,u=y.r,t=y.N,s=y.P,r="";w.q();){q=w.d
r+=q+"\n"
p=x.h(0,q)
for(q=p.a,q=new B.ck(q,q.r,q.e,B.t(q).i("ck<1>"));q.q();){o=q.d
n=p.h(0,o)
r=n==null?r+("\t"+j.RW(o)+"\n"):r+("\t"+j.RW(o)+": "+n.j(0)+"\n")}for(q=p.b.a,o=new B.ck(q,q.r,q.e,B.t(q).i("ck<1>"));o.q();){m=o.d
r+=m+"\n"
if(!q.a0(0,m))q.m(0,m,new A.qj(B.K(v,u),new A.uC(B.K(t,s))))
l=q.h(0,m)
for(m=l.a,m=new B.ck(m,m.r,m.e,B.t(m).i("ck<1>"));m.q();){k=m.d
n=l.h(0,k)
r=n==null?r+("\t"+j.RW(k)+"\n"):r+("\t"+j.RW(k)+": "+n.j(0)+"\n")}}}return r.charCodeAt(0)==0?r:r},
ja(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0="exif",a1="interop",a2=a4.b
a4.b=!0
a4.lm(19789)
a4.lm(42)
a4.jb(8)
x=d.a
if(x.h(0,"ifd0")==null)x.m(0,"ifd0",new A.qj(B.K(y.p,y.r),new A.uC(B.K(y.N,y.P))))
w=y.N
v=y.p
u=B.K(w,v)
for(t=B.t(x),s=t.i("c3<1>"),r=new B.ck(x,x.r,x.e,t.i("ck<1>")),q=y.r,p=y.P,o=8;r.q();){n=r.d
m=x.h(0,n)
m.toString
u.m(0,n,o)
n=m.b.a
if(n.a0(0,a0)){l=new Uint32Array(1)
l[0]=0
m.m(0,34665,new A.rJ(l))}else m.a.K(0,34665)
if(n.a0(0,a1)){l=new Uint32Array(1)
l[0]=0
m.m(0,40965,new A.rJ(l))}else m.a.K(0,40965)
if(n.a0(0,"gps")){l=new Uint32Array(1)
l[0]=0
m.m(0,34853,new A.rJ(l))}else m.a.K(0,34853)
m=m.a
o+=2+12*m.a+4
for(m=new B.bG(m,m.r,m.e,B.t(m).i("bG<2>"));m.q();){l=m.d
k=C.kk[l.gfg(l).a]*l.gu(l)
if(k>4)o+=k}for(m=new B.ck(n,n.r,n.e,B.t(n).i("ck<1>"));m.q();){l=m.d
if(!n.a0(0,l))n.m(0,l,new A.qj(B.K(v,q),new A.uC(B.K(w,p))))
j=n.h(0,l)
j.toString
u.m(0,l,o)
j=j.a
i=2+12*j.a
for(l=new B.bG(j,j.r,j.e,B.t(j).i("bG<2>"));l.q();){j=l.d
k=C.kk[j.gfg(j).a]*j.gu(j)
if(k>4)i+=k}o+=i}}h=x.a
for(r=h-1,t=t.i("ba<2>"),g=0;g<h;++g){f=new B.c3(x,s).dI(0,g)
e=new B.ba(x,t).dI(0,g)
n=e.b.a
if(n.a0(0,a0)){m=e.h(0,34665)
m.toString
l=u.h(0,a0)
l.toString
m.w6(l)}if(n.a0(0,a1)){m=e.h(0,40965)
m.toString
l=u.h(0,a1)
l.toString
m.w6(l)}if(n.a0(0,"gps")){m=e.h(0,34853)
m.toString
l=u.h(0,"gps")
l.toString
m.w6(l)}m=u.h(0,f)
m.toString
d.axU(a4,e,m+2+12*e.a.a+4)
if(g===r)a4.jb(0)
else{m=u.h(0,new B.c3(x,s).dI(0,g+1))
m.toString
a4.jb(m)}d.axV(a4,e)
for(m=new B.ck(n,n.r,n.e,B.t(n).i("ck<1>"));m.q();){l=m.d
if(!n.a0(0,l))n.m(0,l,new A.qj(B.K(v,q),new A.uC(B.K(w,p))))
j=n.h(0,l)
j.toString
l=u.h(0,l)
l.toString
d.axU(a4,j,l+2+12*j.a.a)
d.axV(a4,j)}}a4.b=a2},
axU(d,e,f){var x,w,v,u,t,s,r=e.a
d.lm(r.a)
for(r=new B.ck(r,r.r,r.e,B.t(r).i("ck<1>"));r.q();){x=r.d
w=e.h(0,x)
w.toString
v=x===273
u=v&&w.gfg(w)===C.iy?C.d5:w.gfg(w)
t=v&&w.gfg(w)===C.iy?1:w.gu(w)
d.lm(x)
d.lm(u.a)
d.jb(t)
s=C.kk[w.gfg(w).a]*w.gu(w)
if(s<=4){w.ja(0,d)
for(;s<4;){d.b2(0);++s}}else{d.jb(f)
f+=s}}return f},
axV(d,e){var x,w
for(x=e.a,x=new B.bG(x,x.r,x.e,B.t(x).i("bG<2>"));x.q();){w=x.d
if(C.kk[w.gfg(w).a]*w.gu(w)>4)w.ja(0,d)}},
vD(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a5.e
a5.e=!0
x=a5.d
w=a5.am()
if(w===18761){a5.e=!1
if(a5.am()!==42){a5.e=a3
return!1}}else if(w===19789){a5.e=!0
if(a5.am()!==42){a5.e=a3
return!1}}else return!1
v=a5.a5()
for(u=this.a,t=y.v,s=y.p,r=y.r,q=y.N,p=y.P,o=a5.c,n=0;v>0;v=e){m=x+v
a5.d=m
if(o-m<2)break
l=new A.qj(B.K(s,r),new A.uC(B.K(q,p)))
k=a5.am()
j=B.a(new Array(k),t)
for(i=0;i<k;++i)j[i]=this.ati(a5,x)
for(m=j.length,h=0;h<j.length;j.length===m||(0,B.S)(j),++h){g=j[h]
f=g.b
if(f!=null)l.m(0,g.a,f)}u.m(0,"ifd"+n,l);++n
e=a5.a5()
if(e===v)break}for(u=new B.bG(u,u.r,u.e,B.t(u).i("bG<2>"));u.q();){o=u.d
for(m=J.aP(C.Ew.geA(C.Ew)),f=o.a,d=o.b.a;m.q();){a0=m.gL(m)
if(f.a0(0,a0)){a5.d=x+o.h(0,a0).C(0)
l=new A.qj(B.K(s,r),new A.uC(B.K(q,p)))
k=a5.am()
j=B.a(new Array(k),t)
for(i=0;i<k;++i)j[i]=this.ati(a5,x)
for(a1=j.length,h=0;h<j.length;j.length===a1||(0,B.S)(j),++h){g=j[h]
a2=g.b
if(a2!=null)l.m(0,g.a,a2)}a0=C.Ew.h(0,a0)
a0.toString
d.m(0,a0,l)}}}a5.e=a3
return!1},
ati(d,e){var x,w,v,u,t=d.am(),s=d.am(),r=d.a5(),q=new A.aLm(t,null)
if(s>13)return q
x=C.Qq[s]
w=r*C.kk[s]
v=d.d
if((w>4?d.d=d.a5()+e:v)+w>d.c)return q
u=d.jr(w)
switch(x.a){case 0:break
case 6:q.b=new A.wA(new Int8Array(B.bV(J.cvc(D.C.gak(u.hZ()),0,r))))
break
case 1:q.b=new A.uB(new Uint8Array(B.bV(u.jr(r).hZ())))
break
case 7:q.b=new A.Im(new Uint8Array(B.bV(u.jr(r).hZ())))
break
case 2:q.b=new A.Ct(r===0?"":u.js(r-1))
break
case 3:q.b=A.cHF(u,r)
break
case 4:q.b=A.cHA(u,r)
break
case 5:q.b=A.cHB(u,r)
break
case 10:q.b=A.cHD(u,r)
break
case 8:q.b=A.cHE(u,r)
break
case 9:q.b=A.cHC(u,r)
break
case 11:q.b=A.cHH(u,r)
break
case 12:q.b=A.cHz(u,r)
break}d.d=v+4
return q}}
A.aLm.prototype={
gp(d){return this.b}}
A.apZ.prototype={}
A.uC.prototype={
aWo(d){d.a.aQ(0,new A.bkr(this))},
gfm(d){var x=this.a
return new B.ba(x,B.t(x).i("ba<2>"))},
gW(d){var x,w=this.a
if(w.a===0)return!0
for(w=new B.bG(w,w.r,w.e,B.t(w).i("bG<2>"));w.q();){x=w.d
if(!(x.a.a===0&&x.b.gW(0)))return!1}return!0},
a0(d,e){return this.a.a0(0,e)},
h(d,e){var x=this.a
if(!x.a0(0,e))x.m(0,e,new A.qj(B.K(y.p,y.r),new A.uC(B.K(y.N,y.P))))
x=x.h(0,e)
x.toString
return x},
m(d,e,f){this.a.m(0,e,f)}}
A.qj.prototype={
gfm(d){var x=this.a
return new B.ba(x,B.t(x).i("ba<2>"))},
gW(d){return this.a.a===0&&this.b.gW(0)},
ab_(d){d.a.aQ(0,new A.bks(this))
d.b.a.aQ(0,new A.bkt(this))},
a0(d,e){return this.a.a0(0,e)},
h(d,e){if(typeof e=="string")e=C.a06.h(0,e)
if(B.h3(e))return this.a.h(0,e)
return null},
m(d,e,f){var x,w,v,u,t,s,r=this
if(typeof e=="string")e=C.a06.h(0,e)
if(!B.h3(e))return
if(f==null)r.a.K(0,e)
else if(f instanceof A.kd)r.a.m(0,e,f)
else{x=$.cv5().h(0,e)
if(x!=null)switch(x.b.a){case 1:if(y.L.b(f))r.a.m(0,e,new A.uB(new Uint8Array(B.bV(new Uint8Array(B.bV(f))))))
else if(B.h3(f)){w=new Uint8Array(1)
w[0]=f
r.a.m(0,e,new A.uB(w))}break
case 2:if(typeof f=="string")r.a.m(0,e,new A.Ct(f))
break
case 3:if(y.L.b(f))r.a.m(0,e,new A.z_(new Uint16Array(B.bV(new Uint16Array(B.bV(f))))))
else if(B.h3(f))r.a.m(0,e,A.d40(f))
break
case 4:if(y.L.b(f))r.a.m(0,e,new A.rJ(new Uint32Array(B.bV(new Uint32Array(B.bV(f))))))
else if(B.h3(f))r.a.m(0,e,A.d4_(f))
break
case 5:if(y.k.b(f))r.a.m(0,e,new A.uD(B.aY(f,!0,y.i)))
else if(y.L.b(f)&&J.bu(f)===2){w=J.a2(f)
r.a.m(0,e,new A.uD(B.a([new A.oc(w.h(f,0),w.h(f,1))],y.j)))}else if(f instanceof A.oc)r.a.m(0,e,new A.uD(B.a([new A.oc(f.a,f.b)],y.j)))
else if(y.f.b(f)){w=J.a2(f)
v=w.gu(f)
u=y.i
t=J.kI(v,u)
for(s=0;s<v;++s)t[s]=new A.oc(J.v(w.h(f,s),0),J.v(w.h(f,s),1))
r.a.m(0,e,new A.uD(B.aY(t,!0,u)))}break
case 6:if(y.L.b(f))r.a.m(0,e,new A.wA(new Int8Array(B.bV(new Int8Array(B.bV(f))))))
else if(B.h3(f)){w=new Int8Array(1)
w[0]=f
r.a.m(0,e,new A.wA(w))}break
case 7:if(y.L.b(f))r.a.m(0,e,new A.Im(new Uint8Array(B.bV(new Uint8Array(B.bV(f))))))
break
case 8:if(y.L.b(f))r.a.m(0,e,new A.yZ(new Int16Array(B.bV(new Int16Array(B.bV(f))))))
else if(B.h3(f)){w=new Int16Array(1)
w[0]=f
r.a.m(0,e,new A.yZ(w))}break
case 9:if(y.L.b(f))r.a.m(0,e,new A.yY(new Int32Array(B.bV(new Int32Array(B.bV(f))))))
else if(B.h3(f)){w=new Int32Array(1)
w[0]=f
r.a.m(0,e,new A.yY(w))}break
case 10:if(y.k.b(f))r.a.m(0,e,new A.uE(B.aY(f,!0,y.i)))
else if(y.L.b(f)&&J.bu(f)===2){w=J.a2(f)
r.a.m(0,e,new A.uE(B.a([new A.oc(w.h(f,0),w.h(f,1))],y.j)))}else if(f instanceof A.oc)r.a.m(0,e,new A.uE(B.a([f],y.j)))
else if(y.f.b(f)){w=J.a2(f)
v=w.gu(f)
u=y.i
t=J.kI(v,u)
for(s=0;s<v;++s)t[s]=new A.oc(J.v(w.h(f,s),0),J.v(w.h(f,s),1))
r.a.m(0,e,new A.uE(B.aY(t,!0,u)))}break
case 11:if(y.H.b(f))r.a.m(0,e,new A.Cv(new Float32Array(B.bV(new Float32Array(B.bV(f))))))
else if(typeof f=="number")r.a.m(0,e,A.cHG(f))
else if(B.h3(f))r.a.m(0,e,A.cHG(f))
break
case 12:if(y.H.b(f))r.a.m(0,e,new A.Cu(new Float64Array(B.bV(new Float64Array(B.bV(f))))))
else if(typeof f=="number")r.a.m(0,e,A.cHy(f))
else if(B.h3(f))r.a.m(0,e,A.cHy(f))
break
case 0:break}}},
giv(d){var x=this.a.h(0,274)
return x==null?null:x.C(0)},
siv(d,e){this.a.K(0,274)}}
A.n4.prototype={
J(){return"IfdValueType."+this.b}}
A.kd.prototype={
ju(d,e){return 0},
C(d){return this.ju(0,0)},
uj(d){return 0},
ui(){return new Uint8Array(0)},
j(d){return""},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.kd&&x.gfg(x)===e.gfg(e)&&x.gu(x)===e.gu(e)&&x.gv(x)===e.gv(e)},
gv(d){return 0},
w6(d){}}
A.uB.prototype={
dY(d){return new A.uB(new Uint8Array(B.bV(this.a)))},
gfg(d){return C.MT},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.uB){x=this.a
x=x.length===e.a.length&&B.aL(x)===B.aL(e.a)}else x=!1
return x},
gv(d){return B.aL(this.a)},
ju(d,e){return this.a[e]},
C(d){return this.ju(0,0)},
w6(d){var x=this.a
x.$flags&2&&B.F(x)
x[0]=d},
ui(){return this.a},
ja(d,e){e.mj(this.a)},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.Ct.prototype={
dY(d){return new A.Ct(this.a)},
gfg(d){return C.bJ},
gu(d){return this.a.length+1},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.Ct){x=this.a
x=x.length+1===e.a.length+1&&D.e.gv(x)===D.e.gv(e.a)}else x=!1
return x},
gv(d){return D.e.gv(this.a)},
ui(){return new Uint8Array(B.bV(new B.eR(this.a)))},
ja(d,e){e.mj(new B.eR(this.a))
e.b2(0)},
j(d){return this.a},
gp(d){return this.a}}
A.z_.prototype={
aWt(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.am()
w.$flags&2&&B.F(w)
w[x]=v}},
dY(d){return new A.z_(new Uint16Array(B.bV(this.a)))},
gfg(d){return C.br},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.z_){x=this.a
x=x.length===e.a.length&&B.aL(x)===B.aL(e.a)}else x=!1
return x},
gv(d){return B.aL(this.a)},
ju(d,e){return this.a[e]},
C(d){return this.ju(0,0)},
w6(d){var x=this.a
x.$flags&2&&B.F(x)
x[0]=d},
ui(){return J.jc(D.ec.gak(this.a))},
ja(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.lm(this.a[x])},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.rJ.prototype={
aWq(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.a5()
w.$flags&2&&B.F(w)
w[x]=v}},
dY(d){return new A.rJ(new Uint32Array(B.bV(this.a)))},
gfg(d){return C.d5},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.rJ){x=this.a
x=x.length===e.a.length&&B.aL(x)===B.aL(e.a)}else x=!1
return x},
gv(d){return B.aL(this.a)},
ju(d,e){return this.a[e]},
C(d){return this.ju(0,0)},
w6(d){var x=this.a
x.$flags&2&&B.F(x)
x[0]=d},
ui(){return J.jc(D.bz.gak(this.a))},
ja(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.jb(this.a[x])},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.uD.prototype={
dY(d){return new A.uD(B.aY(this.a,!0,y.i))},
gfg(d){return C.ev},
gu(d){return this.a.length},
ju(d,e){return this.a[e].C(0)},
C(d){return this.ju(0,0)},
uj(d){return this.a[0].uj(0)},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.uD){x=this.a
x=x.length===e.a.length&&B.aL(x)===B.aL(e.a)}else x=!1
return x},
gv(d){return B.aL(this.a)},
ja(d,e){var x,w,v,u
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.S)(x),++v){u=x[v]
e.jb(u.a)
e.jb(u.b)}},
j(d){var x=this.a
return x.length===1?x[0].j(0):B.o(x)},
gp(d){return this.a}}
A.wA.prototype={
dY(d){return new A.wA(new Int8Array(B.bV(this.a)))},
gfg(d){return C.MX},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.wA){x=this.a
x=x.length===e.a.length&&B.aL(x)===B.aL(e.a)}else x=!1
return x},
gv(d){return B.aL(this.a)},
ju(d,e){return this.a[e]},
C(d){return this.ju(0,0)},
w6(d){var x=this.a
x.$flags&2&&B.F(x)
x[0]=d},
ui(){return J.jc(D.kF.gak(this.a))},
ja(d,e){e.mj(J.dh(D.kF.gak(this.a),0,null))},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.yZ.prototype={
aWs(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.am()
u=$.nE()
u.$flags&2&&B.F(u)
u[0]=v
v=$.oI()[0]
w.$flags&2&&B.F(w)
w[x]=v}},
dY(d){return new A.yZ(new Int16Array(B.bV(this.a)))},
gfg(d){return C.MY},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.yZ){x=this.a
x=x.length===e.a.length&&B.aL(x)===B.aL(e.a)}else x=!1
return x},
gv(d){return B.aL(this.a)},
ju(d,e){return this.a[e]},
C(d){return this.ju(0,0)},
w6(d){var x=this.a
x.$flags&2&&B.F(x)
x[0]=d},
ui(){return J.jc(D.kE.gak(this.a))},
ja(d,e){var x,w=new Int16Array(1),v=J.cvd(D.kE.gak(w),0,null),u=this.a.length
for(x=0;x<u;++x){w[0]=this.a[x]
e.lm(v[0])}},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.yY.prototype={
aWr(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.a5()
u=$.hF()
u.$flags&2&&B.F(u)
u[0]=v
v=$.kX()[0]
w.$flags&2&&B.F(w)
w[x]=v}},
dY(d){return new A.yY(new Int32Array(B.bV(this.a)))},
gfg(d){return C.MZ},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.yY){x=this.a
x=x.length===e.a.length&&B.aL(x)===B.aL(e.a)}else x=!1
return x},
gv(d){return B.aL(this.a)},
ju(d,e){return this.a[e]},
C(d){return this.ju(0,0)},
w6(d){var x=this.a
x.$flags&2&&B.F(x)
x[0]=d},
ui(){return J.jc(D.cI.gak(this.a))},
ja(d,e){var x,w,v,u=this.a.length
for(x=0;x<u;++x){w=this.a[x]
v=$.aXP()
v.$flags&2&&B.F(v)
v[0]=w
e.jb($.cuX()[0])}},
j(d){var x=this.a
return x.length===1?""+x[0]:B.o(x)},
gp(d){return this.a}}
A.uE.prototype={
dY(d){return new A.uE(B.aY(this.a,!0,y.i))},
gfg(d){return C.MU},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.uE){x=this.a
x=x.length===e.a.length&&B.aL(x)===B.aL(e.a)}else x=!1
return x},
gv(d){return B.aL(this.a)},
ju(d,e){return this.a[e].C(0)},
C(d){return this.ju(0,0)},
uj(d){return this.a[0].uj(0)},
ja(d,e){var x,w,v,u,t,s
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.S)(x),++v){u=x[v]
t=$.aXP()
t.$flags&2&&B.F(t)
t[0]=u.a
s=$.cuX()
e.jb(s[0])
t[0]=u.b
e.jb(s[0])}},
j(d){var x=this.a
return x.length===1?x[0].j(0):B.o(x)},
gp(d){return this.a}}
A.Cv.prototype={
aWu(d,e){var x,w,v,u
for(x=0;x<e;++x){w=this.a
v=d.a5()
u=$.hF()
u.$flags&2&&B.F(u)
u[0]=v
v=$.Gi()[0]
w.$flags&2&&B.F(w)
w[x]=v}},
dY(d){return new A.Cv(new Float32Array(B.bV(this.a)))},
gfg(d){return C.MV},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.Cv){x=this.a
x=x.length===e.a.length&&B.aL(x)===B.aL(e.a)}else x=!1
return x},
gv(d){return B.aL(this.a)},
ui(){return J.jc(D.fB.gak(this.a))},
uj(d){return this.a[0]},
ja(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.bQX(this.a[x])},
j(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gp(d){return this.a}}
A.Cu.prototype={
aWp(d,e){var x,w,v
for(x=0;x<e;++x){w=this.a
v=d.a0T()
w.$flags&2&&B.F(w)
w[x]=v}},
dY(d){return new A.Cu(new Float64Array(B.bV(this.a)))},
gfg(d){return C.MW},
gu(d){return this.a.length},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.Cu){x=this.a
x=x.length===e.a.length&&B.aL(x)===B.aL(e.a)}else x=!1
return x},
gv(d){return B.aL(this.a)},
uj(d){return this.a[0]},
ui(){return J.jc(D.eE.gak(this.a))},
ja(d,e){var x,w=this.a.length
for(x=0;x<w;++x)e.bQY(this.a[x])},
j(d){var x=this.a
return x.length===1?B.o(x[0]):B.o(x)},
gp(d){return this.a}}
A.Im.prototype={
dY(d){return new A.Im(new Uint8Array(B.bV(this.a)))},
gfg(d){return C.iy},
gu(d){return this.a.length},
ui(){return this.a},
k(d,e){var x
if(e==null)return!1
if(e instanceof A.Im){x=this.a
x=x.length===e.a.length&&B.aL(x)===B.aL(e.a)}else x=!1
return x},
gv(d){return B.aL(this.a)},
ja(d,e){e.mj(this.a)},
j(d){return"<data>"},
gp(d){return this.a}}
A.m6.prototype={
J(){return"BmpCompression."+this.b}}
A.b0Q.prototype={}
A.Gx.prototype={
akk(d,e){var x,w,v,u,t,s,r,q=this,p=q.d,o=p<=40
if(o){x=q.r
x=x===C.AB||x===C.AC}else x=!0
if(x){x=q.as=d.a5()
w=A.csx(x)
q.CW=w
v=D.c.h7(x,w)
x=v>0
q.cx=x?255/v:0
w=q.at=d.a5()
u=A.csx(w)
q.cy=u
t=D.c.h7(w,u)
q.db=x?255/t:0
w=q.ax=d.a5()
u=A.csx(w)
q.dx=u
s=D.c.h7(w,u)
q.dy=x?255/s:0
if(!o||q.r===C.AC){o=q.ay=d.a5()
x=A.csx(o)
q.fr=x
r=D.c.h7(o,x)
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
if(q.f<=8)q.bNP(d)},
gPn(){var x=this.d
if(x!==40)if(x===124){x=this.ay
x===$&&B.b()
x=x===0}else x=!1
else x=!0
return x},
gb8(d){return Math.abs(this.c)},
bNP(d){var x,w,v,u,t,s=this,r=s.z
if(r===0)r=D.c.eu(1,s.f)
s.ch=new A.uS(new Uint8Array(r*3),r,3)
for(x=0;x<r;++x){w=J.v(d.a,d.d++)
v=J.v(d.a,d.d++)
u=J.v(d.a,d.d++)
t=J.v(d.a,d.d++)
s.ch.Sz(x,u,v,w,t)}},
bAS(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(o.ch!=null){x=o.f
if(x===1){w=d.cu()
for(v=7;v>=0;--v)e.$4(D.c.o9(w,v)&1,0,0,0)
return}else if(x===2){w=d.cu()
for(v=6;v>=0;v-=2)e.$4(D.c.o9(w,v)&2,0,0,0)}else if(x===4){w=d.cu()
e.$4(D.c.S(w,4)&15,0,0,0)
e.$4(w&15,0,0,0)
return}else if(x===8){e.$4(d.cu(),0,0,0)
return}}x=o.r
if(x===C.AB&&o.f===32){u=d.a5()
x=o.as
x===$&&B.b()
t=o.CW
t===$&&B.b()
t=D.c.h7((u&x)>>>0,t)
x=o.cx
x===$&&B.b()
s=D.d.C(t*x)
x=o.at
x===$&&B.b()
t=o.cy
t===$&&B.b()
t=D.c.h7((u&x)>>>0,t)
x=o.db
x===$&&B.b()
r=D.d.C(t*x)
x=o.ax
x===$&&B.b()
t=o.dx
t===$&&B.b()
t=D.c.h7((u&x)>>>0,t)
x=o.dy
x===$&&B.b()
q=D.d.C(t*x)
if(o.gPn())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.h7((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.d.C(t*x)}return e.$4(s,r,q,p)}else{t=o.f
if(t===32&&x===C.IH){q=d.cu()
r=d.cu()
s=d.cu()
p=d.cu()
return e.$4(s,r,q,o.gPn()?255:p)}else if(t===24){q=d.cu()
r=d.cu()
return e.$4(d.cu(),r,q,255)}else if(t===16){u=d.am()
x=o.as
x===$&&B.b()
t=o.CW
t===$&&B.b()
t=D.c.h7((u&x)>>>0,t)
x=o.cx
x===$&&B.b()
s=D.d.C(t*x)
x=o.at
x===$&&B.b()
t=o.cy
t===$&&B.b()
t=D.c.h7((u&x)>>>0,t)
x=o.db
x===$&&B.b()
r=D.d.C(t*x)
x=o.ax
x===$&&B.b()
t=o.dx
t===$&&B.b()
t=D.c.h7((u&x)>>>0,t)
x=o.dy
x===$&&B.b()
q=D.d.C(t*x)
if(o.gPn())p=255
else{x=o.ay
x===$&&B.b()
t=o.fr
t===$&&B.b()
t=D.c.h7((u&x)>>>0,t)
x=o.fx
x===$&&B.b()
p=D.d.C(t*x)}return e.$4(s,r,q,p)}else throw B.n(A.cc("Unsupported bitsPerPixel ("+t+") or compression ("+x.j(0)+")."))}}}
A.akQ.prototype={
oQ(d){var x,w=null
if(!A.cvI(A.d_(d,!1,w,0)))return w
x=A.d_(d,!1,w,0)
this.a=x
return this.b=A.cZt(x,w)},
ko(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b
if(e==null)return new A.Cx(f,f,f,f,0,C.bv,0,0)
x=g.a
x===$&&B.b()
w=e.a.b
w===$&&B.b()
x.d=w
v=e.f
w=e.b
u=D.c.b0(w*v+31,32)*4
x=g.c
if(x)t=4
else if(v===1||v===4||v===8)t=1
else{s=v===32?4:3
t=s}if(x)r=C.ac
else if(v===1)r=C.fT
else{if(v===2)s=C.hJ
else if(v===4)s=C.hK
else s=C.ac
r=s}q=x?f:e.ch
p=A.i1(f,f,r,0,C.bv,e.gb8(e),f,0,t,q,C.ac,w,!1)
for(o=p.gb8(0)-1,x=e.c,w=1/x<0,s=x<0,x=x===0;o>=0;--o){n={}
if(!(x?w:s))m=o
else{l=p.a
l=l==null?f:l.b
m=(l==null?0:l)-1-o}l=g.a
k=l.jy(u)
l.d=l.d+(k.c-k.d)
l=p.a
j=l==null
i=j?f:l.a
if(i==null)i=0
n.a=0
h=j?f:l.ei(0,m,f)
if(h==null)h=new A.fq()
for(;n.a<i;)e.bAS(k,new A.b0P(n,g,i,e,h))}return p},
n8(d,e,f){if(this.oQ(e)==null)return null
return this.ko(0)}}
A.b9I.prototype={}
A.b8p.prototype={}
A.b8q.prototype={}
A.bc5.prototype={}
A.aq_.prototype={}
A.at3.prototype={
Q7(){return this.w},
t4(d,e,f,g,h){throw B.n(A.cc("B44 compression not yet supported."))},
JT(d,e,f){return this.t4(d,e,f,null,null)},
j(d){return B.o(this.r)+" "+this.x}}
A.Pw.prototype={
J(){return"ExrChannelType."+this.b}}
A.HC.prototype={
J(){return"ExrChannelName."+this.b}}
A.aq0.prototype={
aWe(d){var x=this,w=d.QM()
x.a=w
if(w.length===0)return
x.c=C.aCU[d.a5()]
d.cu()
d.d+=3
x.f=d.a5()
x.r=d.a5()
w=x.a
if(w==="R"){x.w=!0
x.b=C.ase}else if(w==="G"){x.w=!0
x.b=C.asf}else if(w==="B"){x.w=!0
x.b=C.asg}else if(w==="A"){x.w=!0
x.b=C.ash}else{x.w=!1
x.b=C.asi}switch(x.c.a){case 0:x.d=4
break
case 1:x.d=2
break
case 2:x.d=4
break}}}
A.un.prototype={
J(){return"ExrCompressorType."+this.b}}
A.bdw.prototype={
t4(d,e,f,g,h){throw B.n(A.cc("Unsupported compression type"))},
JT(d,e,f){return this.t4(d,e,f,null,null)}}
A.blZ.prototype={}
A.aq1.prototype={}
A.bdy.prototype={
aWf(d){var x,w,v,u,t=this,s=A.d_(d,!1,null,0)
if(s.a5()!==20000630)throw B.n(A.cc("File is not an OpenEXR image file."))
x=t.d=s.cu()
if(x!==2)throw B.n(A.cc("Cannot read version "+x+" image files."))
x=t.e=s.rY()
if((x&4294967289)>>>0!==0)throw B.n(A.cc("The file format version number's flag field contains unrecognized flags."))
if((x&16)===0){w=t.c
v=A.cI3(w.length,(x&2)!==0,s)
if(v.w>0)w.push(v)}else for(x=t.c;!0;){v=A.cI3(x.length,(t.e&2)!==0,s)
if(v.w<=0)break
x.push(v)}x=t.c
w=x.length
if(w===0)throw B.n(A.cc("Error reading image header"))
for(u=0;u<x.length;x.length===w||(0,B.S)(x),++u)x[u].bNO(s)
t.blw(s)},
blw(d){var x,w,v,u,t=this
for(x=t.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.S)(x),++v){u=x[v]
t.a=Math.max(t.a,u.w)
t.b=Math.max(t.b,u.x)
if(u.db)t.blG(u,d)
else t.blE(u,d)}},
blG(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.e
b3===$&&B.b()
x=(b3&16)!==0
b3=b4.b
b3.toString
w=b4.CW
v=b4.ay
u=A.cf(b5,b2,0)
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
if(x)if(u.a5()!==s)throw B.n(A.cc("Invalid Image Data"))
k=u.a5()
j=u.a5()
u.a5()
u.a5()
i=u.jy(u.a5())
u.d=u.d+(i.c-i.d)
h=b4.dy
h.toString
g=j*h
f=b4.dx
f.toString
h=w.t4(i,k*f,g,f,h)
f=h.length
f=Math.min(f,f)
e=new A.mh(h,0,f,0,!1)
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
a8=$.i0
a9=(a8!=null?a8:A.iU())[h]
break
case 2:a9=e.am()
break
case 0:a9=e.a5()
break
default:a9=b2}h=a5.d
h===$&&B.b()
a2+=h
h=a5.w
h===$&&B.b()
if(h){h=b3.a
b0=h==null?b2:h.ei(a6,g,b2)
if(b0==null)b0=new A.fq()
h=a5.b
h===$&&B.b()
b0.m(0,h.a,a9)}else{h=a5.a
h===$&&B.b()
a8=b3.b
b1=a8!=null?a8.h(0,h):b2
if(b1!=null)b1.fn(a6,g,a9,0,0)}}}++a3;++g}}++o;++q}++r}},
blE(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=this.e
a5===$&&B.b()
x=(a5&16)!==0
a5=a6.b
a5.toString
w=a6.CW
v=a6.ay[0]
u=a6.cx
t=A.cf(a7,a4,0)
for(s=v.length,r=a6.c,q=w!=null,p=0,o=0;o<s;++o){t.d=v[o]
if(x)if(t.a5()!==3.141592653589793)throw B.n(A.cc("Invalid Image Data"))
n=t.a5()
m=$.hF()
m.$flags&2&&B.F(m)
m[0]=n
n=$.kX()
m[0]=t.a5()
l=t.jy(n[0])
t.d=t.d+(l.c-l.d)
if(q){n=w.JT(l,0,p)
m=n.length
k=new A.mh(n,0,Math.min(m,m),0,!1)}else k=l
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
m=$.i0
a1=(m!=null?m:A.iU())[n]
break
case 2:a1=k.am()
break
case 0:a1=k.a5()
break
default:a1=a4}n=e.d
n===$&&B.b()
g+=n
n=e.w
n===$&&B.b()
if(n){n=a5.a
a2=n==null?a4:n.ei(a0,p,a4)
if(a2==null)a2=new A.fq()
n=e.b
n===$&&B.b()
a2.m(0,n.a,a1)}else{n=e.a
n===$&&B.b()
m=a5.b
a3=m!=null?m.h(0,n):a4
if(a3!=null)a3.fn(a0,p,a1,0,0)}}}++h;++p}}}}
A.a_U.prototype={
aWg(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=B.K(y.N,y.I)
for(x=a2.e,w=y.t,v=a2.c,u=C.iv;!0;){t=a7.QM()
if(t.length===0)break
s=a7.QM()
r=a7.a5()
q=a7.jy(r)
a7.d=a7.d+(q.c-q.d)
x.m(0,t,new A.aq_(t,s,r))
switch(t){case"channels":for(;!0;){p=new A.aq0()
p.aWe(q)
o=p.a
o===$&&B.b()
if(o.length===0)break
n=p.w
n===$&&B.b()
if(n){++a2.d
o=p.c
o===$&&B.b()
if(o===C.Cf)u=C.iv
else u=o===C.Cg?C.k5:C.k6}else{n=p.c
n===$&&B.b()
if(n===C.Cf){n=a2.w
m=a2.x
a4.m(0,o,new A.Q8(new Uint16Array(n*m),n,m,1))}else if(n===C.Cg){n=a2.w
m=a2.x
a4.m(0,o,new A.Q9(new Float32Array(n*m),n,m,1))}else if(n===C.LL){n=a2.w
m=a2.x
a4.m(0,o,new A.Qd(new Uint32Array(n*m),n,m,1))}}v.push(p)}break
case"chromaticities":o=new Float32Array(8)
a2.at=o
n=q.a5()
m=$.hF()
m.$flags&2&&B.F(m)
m[0]=n
n=$.Gi()
o[0]=n[0]
o=a2.at
m[0]=q.a5()
l=n[0]
o.$flags&2&&B.F(o)
o[1]=l
l=a2.at
m[0]=q.a5()
o=n[0]
l.$flags&2&&B.F(l)
l[2]=o
o=a2.at
m[0]=q.a5()
l=n[0]
o.$flags&2&&B.F(o)
o[3]=l
l=a2.at
m[0]=q.a5()
o=n[0]
l.$flags&2&&B.F(l)
l[4]=o
o=a2.at
m[0]=q.a5()
l=n[0]
o.$flags&2&&B.F(o)
o[5]=l
l=a2.at
m[0]=q.a5()
o=n[0]
l.$flags&2&&B.F(l)
l[6]=o
o=a2.at
m[0]=q.a5()
n=n[0]
o.$flags&2&&B.F(o)
o[7]=n
break
case"compression":a2.ax=C.aFi[J.v(q.a,q.d++)]
break
case"dataWindow":o=q.a5()
n=$.hF()
n.$flags&2&&B.F(n)
n[0]=o
o=$.kX()
m=o[0]
n[0]=q.a5()
l=o[0]
n[0]=q.a5()
k=o[0]
n[0]=q.a5()
o=a2.r=B.a([m,l,k,o[0]],w)
a2.w=o[2]-o[0]+1
a2.x=o[3]-o[1]+1
break
case"displayWindow":o=q.a5()
n=$.hF()
n.$flags&2&&B.F(n)
n[0]=o
$.kX()
n[0]=q.a5()
n[0]=q.a5()
n[0]=q.a5()
break
case"lineOrder":break
case"pixelAspectRatio":o=q.a5()
n=$.hF()
n.$flags&2&&B.F(n)
n[0]=o
$.Gi()
break
case"screenWindowCenter":o=q.a5()
n=$.hF()
n.$flags&2&&B.F(n)
n[0]=o
$.Gi()
n[0]=q.a5()
break
case"screenWindowWidth":o=q.a5()
n=$.hF()
n.$flags&2&&B.F(n)
n[0]=o
$.Gi()
break
case"tiles":a2.dx=q.a5()
a2.dy=q.a5()
j=J.v(q.a,q.d++)
a2.fr=j&15
a2.fx=D.c.S(j,4)&15
break
case"type":i=q.QM()
if(i!=="deepscanline")if(i!=="deeptile")throw B.n(A.cc("EXR Invalid type: "+i))
break
default:break}}x=a2.w
a2.b=A.i1(a3,a3,u,0,C.bv,a2.x,a3,0,a2.d,a3,C.ac,x,!1)
for(x=new B.ck(a4,a4.r,a4.e,a4.$ti.i("ck<1>"));x.q();){w=x.d
o=a2.b
o.toString
n=a4.h(0,w)
n.toString
o.aNr(w,n)}if(a2.db){x={}
w=a2.r
w===$&&B.b()
a2.id=a2.b_1(w[0],w[2],w[1],w[3])
w=a2.r
a2.k1=a2.b_2(w[0],w[2],w[1],w[3])
if(a2.fr!==2)a2.k1=1
w=a2.id
w.toString
v=a2.r
a2.fy=a2.alO(w,v[0],v[2],a2.dx,a2.fx)
v=a2.k1
v.toString
w=a2.r
a2.go=a2.alO(v,w[1],w[3],a2.dy,a2.fx)
w=a2.b__()
a2.k2=w
v=a2.dx
v.toString
v=w*v
a2.k3=v
a2.CW=A.cGw(a2.ax,a2,v,a2.dy)
x.a=x.b=0
v=a2.id
v.toString
w=a2.k1
w.toString
a2.ay=B.qp(v*w,new A.bdz(x,a2),!0,y.bk)}else{x=a2.x
w=a2.ch=new Uint32Array(x+1)
for(o=v.length,n=a2.r,m=a2.w,h=0;h<o;++h){g=v[h]
l=g.d
l===$&&B.b()
k=g.f
k===$&&B.b()
f=D.c.hz(l*m,k)
for(l=g.r,e=0;e<x;++e){n===$&&B.b()
k=n[1]
l===$&&B.b()
if(D.c.ao(e+k,l)===0)w[e]=w[e]+f}}for(d=0,e=0;e<x;++e)d=Math.max(d,w[e])
x=A.cGw(a2.ax,a2,d,a3)
a2.CW=x
x=a2.cx=x.Q7()
w=a2.ch
v=w.length
o=new Uint32Array(v)
a2.cy=o
for(--v,a0=0,a1=0;a1<=v;++a1){if(D.c.ao(a1,x)===0)a0=0
o[a1]=a0
a0+=w[a1]}x=D.c.hz(a2.x+x,x)
a2.ay=B.a([new Uint32Array(x-1)],y.w)}},
b_1(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.Uj(w):u.TD(w))+1
break
case 2:v=e-d+1
x=(u.fx===0?u.Uj(v):u.TD(v))+1
break
default:throw B.n(A.cc("Unknown LevelMode format."))}return x},
b_2(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.Uj(w):u.TD(w))+1
break
case 2:v=g-f+1
x=(u.fx===0?u.Uj(v):u.TD(v))+1
break
default:throw B.n(A.cc("Unknown LevelMode format."))}return x},
Uj(d){var x
for(x=0;d>1;){++x
d=D.c.S(d,1)}return x},
TD(d){var x,w
for(x=0,w=0;d>1;){if((d&1)!==0)w=1;++x
d=D.c.S(d,1)}return x+w},
b__(){var x,w,v,u,t
for(x=this.c,w=x.length,v=0,u=0;u<w;++u){t=x[u].d
t===$&&B.b()
v+=t}return v},
alO(d,e,f,g,h){var x,w,v,u,t,s,r=J.iY(d,y.p)
for(x=h===1,w=f-e+1,v=0;v<d;++v){u=D.c.eu(1,v)
t=D.c.hz(w,u)
if(x&&t*u<w)++t
s=Math.max(t,1)
g.toString
r[v]=D.c.hz(s+g-1,g)}return r}}
A.at4.prototype={
bNO(d){var x,w,v,u,t,s=this
if(s.db)for(x=0;x<s.ay.length;++x)for(w=0;v=s.ay[x],w<v.length;++w){u=d.afo()
v.$flags&2&&B.F(v)
v[w]=u}else{t=s.ay[0].length
for(x=0;x<t;++x){v=s.ay[0]
u=d.afo()
v.$flags&2&&B.F(v)
v[x]=u}}}}
A.bm_.prototype={
aWC(d,e,f){var x,w,v,u=this,t=d.c.length,s=J.iY(t,y.bc)
for(x=0;x<t;++x)s[x]=new A.aOu()
u.y=s
w=u.w
w.toString
v=D.c.b0(w*u.x,2)
u.z=new Uint16Array(v)},
Q7(){return this.x},
t4(a4,a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
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
n=D.c.hz(a5,v)
m=D.c.hz(x,v)
v=n*v<a5?0:1
v=m-n+v
o.c=v
u=p.r
u===$&&B.b()
n=D.c.hz(a6,u)
m=D.c.hz(w,u)
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
if(j>=8192)throw B.n(A.cc("Error in header for PIZ-compressed data (invalid bitmap size)."))
i=new Uint8Array(8192)
if(k<=j){h=a4.jr(j-k+1)
g=h.c-h.d
for(f=k,q=0;q<g;++q,f=e){e=f+1
i[f]=J.v(h.a,h.d+q)}}d=new Uint16Array(65536)
a0=a3.bmW(i,d)
A.d23(a4,a4.a5(),a3.z,r)
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
A.d26(u,l+f,a1,v,a2,a1*v,a0);++f}}v=a3.z
v.toString
a3.aYu(d,v,r)
v=a3.r
if(v==null){v=a3.w
v.toString
v=a3.r=A.qF(!1,v*a3.x+73728)}v.a=0
for(;a6<=w;++a6)for(q=0;q<s;++q){v=a3.y
v===$&&B.b()
o=v[q]
v=o.e
v===$&&B.b()
if(D.c.ao(a6,v)!==0)continue
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
v.lm(u[l])}}v=a3.r
return J.dh(D.C.gak(v.c),0,v.a)},
JT(d,e,f){return this.t4(d,e,f,null,null)},
aYu(d,e,f){var x,w,v
for(x=e.$flags|0,w=0;w<f;++w){v=d[e[w]]
x&2&&B.F(e)
e[w]=v}},
bmW(d,e){var x,w,v,u,t
for(x=e.$flags|0,w=0,v=0;v<65536;++v)if(v===0||(d[v>>>3]&1<<(v&7))>>>0!==0){u=w+1
x&2&&B.F(e)
e[w]=v
w=u}for(u=w;u<65536;u=t){t=u+1
x&2&&B.F(e)
e[u]=0}return w-1}}
A.aOu.prototype={}
A.bm0.prototype={
Q7(){return this.x},
t4(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=C.jP.CK(a0.hZ()),d=f.y
if(d==null){d=f.w
d.toString
d=f.y=A.qF(!1,f.x*d)}d.a=0
x=B.a([0,0,0,0],y.t)
w=new Uint32Array(1)
v=J.dh(D.bz.gak(w),0,null)
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
if(D.c.ao(a2,s)!==0)continue
s=n.f
s===$&&B.b()
m=D.c.hz(a1,s)
l=D.c.hz(u,s)
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
for(g=0;g<4;++g)f.y.b2(v[g])}break
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
for(g=0;g<2;++g)f.y.b2(v[g])}break
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
for(g=0;g<4;++g)f.y.b2(v[g])}break}}d=f.y
return J.dh(D.C.gak(d.c),0,d.a)},
JT(d,e,f){return this.t4(d,e,f,null,null)}}
A.bm1.prototype={
Q7(){return 1},
t4(d,e,f,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.c,g=A.qF(!1,(h-d.d)*2)
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
u=$.nF()
u.$flags&2&&B.F(u)
u[0]=v
t=$.oJ()[0]
if(t<0){s=-t
for(;r=s-1,s>0;s=r)g.b2(J.v(d.a,d.d++))}else for(s=t;r=s-1,s>=0;s=r)g.b2(J.v(d.a,d.d++))}q=J.dh(D.C.gak(g.c),0,g.a)
p=q.length
for(h=q.$flags|0,o=1;o<p;++o){v=q[o-1]
u=q[o]
h&2&&B.F(q)
q[o]=v+u-128}h=i.r
if(h==null||h.length!==p)h=i.r=new Uint8Array(p)
v=D.c.b0(p+1,2)
for(n=0,m=0;!0;v=j,n=k){if(m<p){h.toString
l=m+1
k=n+1
u=q[n]
h.$flags&2&&B.F(h)
h[m]=u}else break
if(l<p){m=l+1
j=v+1
h[l]=q[v]}else break}h.toString
return h},
JT(d,e,f){return this.t4(d,e,f,null,null)},
j(d){return B.o(this.w)}}
A.at5.prototype={
Q7(){return this.x},
t4(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=C.jP.CK(d.hZ())
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
v&2&&B.F(k)
k[s]=u+r-128}v=l.y
if(v==null||v.length!==t)v=l.y=new Uint8Array(t)
u=D.c.b0(t+1,2)
for(q=0,p=0;!0;u=m,q=n){if(p<t){v.toString
o=p+1
n=q+1
r=k[q]
v.$flags&2&&B.F(v)
v[p]=r}else break
if(o<t){p=o+1
m=u+1
v[o]=k[u]}else break}v.toString
return v},
JT(d,e,f){return this.t4(d,e,f,null,null)},
j(d){return B.o(this.w)}}
A.bdx.prototype={
ko(d){var x=this.a
if(x==null)return null
return x.c[d].b},
n8(d,e,f){var x=new A.bdy(B.a([],y.m))
x.aWf(e)
this.a=x
return this.ko(0)}}
A.a0w.prototype={
bDy(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.b,w=this.d,v=-1,u=-1,t=0;t<x;++t){s=w.nq(t)
r=w.no(t)
q=w.nn(t)
p=w.oL(t)
if(s===d&&r===e&&q===f&&p===g)return t
o=d-s
n=e-r
m=f-q
l=g-p
k=o*o+n*n+m*m+l*l
if(u===-1){u=t
v=k}else if(k<v){u=t
v=k}}return u},
ahe(){var x,w,v,u,t,s,r,q=this
if(q.c==null)return q.d
x=q.d
w=x.a
v=new A.uS(new Uint8Array(w*4),w,4)
for(u=0;u<w;++u){t=x.nq(u)
s=x.no(u)
r=x.nn(u)
v.Sz(u,t,s,r,u===q.c?0:255)}return v}}
A.a0x.prototype={
aWj(d){var x,w,v,u,t,s,r=this
r.a=d.am()
r.b=d.am()
r.c=d.am()
r.d=d.am()
x=d.cu()
r.e=(x&64)!==0
if((x&128)!==0){r.f=A.cH8(D.c.eu(1,(x&7)+1))
for(w=0;v=r.f,w<v.b;++w){u=J.v(d.a,d.d++)
t=J.v(d.a,d.d++)
s=J.v(d.a,d.d++)
v.d.pC(w,u,t,s)}}r.x=d.d-d.b}}
A.at6.prototype={}
A.arC.prototype={}
A.bhF.prototype={
oQ(d){var x,w,v,u,t,s,r,q,p,o,n=this
n.f=A.d_(d,!1,null,0)
n.a=new A.arC(B.a([],y.b))
if(!n.aoX())return null
try{for(;u=n.f,t=u.d,t<u.c;){s=u.a
u.d=t+1
x=J.v(s,t)
switch(x){case 44:w=n.av7()
if(w==null){u=n.a
return u}u=w
u.r=n.e
u.w=n.c
if(n.b!==0){if(w.f==null&&n.a.e!=null){u=n.a.e
t=u.a
s=u.b
r=u.c
u=u.d
w.f=new A.a0w(t,s,r,new A.uS(new Uint8Array(B.bV(u.c)),u.a,u.b))}if(w.f!=null)w.f.c=n.d}n.a.r.push(w)
break
case 33:u=n.f
v=J.v(u.a,u.d++)
if(J.p(v,255)){u=n.f
if(u.js(J.v(u.a,u.d++))==="NETSCAPE2.0"){q=J.v(u.a,u.d++)
p=J.v(u.a,u.d++)
if(q===3&&p===1)n.r=u.am()}else n.Wy()}else if(J.p(v,249)){u=n.f
u.toString
n.bls(u)}else n.Wy()
break
case 59:u=n.a
return u
default:break}}}catch(o){}return n.a},
bls(d){var x,w,v,u=this
d.cu()
x=d.cu()
u.e=d.am()
u.d=d.cu()
d.cu()
u.c=D.c.S(x,2)&7
u.b=x&1
w=d.T2(1,0)
if(J.v(w.a,w.d)===44){++d.d
v=u.av7()
if(v==null)return
v.r=u.e
v.w=u.c
if(u.b!==0){w=v.f
if(w==null&&u.a.e!=null){w=u.a.e
w.toString
w=v.f=A.d3m(w)}if(w!=null)w.c=u.d}u.a.r.push(v)}},
ko(d){var x,w,v,u=this,t=u.f
if(t==null||u.a==null)return null
x=u.a.r
w=x.length
if(d>=w)return null
v=x[d]
t.toString
x=v.x
x===$&&B.b()
t.d=x
return u.b1t(v)},
n8(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null
if(a5.oQ(a8)==null)return a6
x=a5.a.r.length
if(x===1)return a5.ko(0)
for(x=y.p,w=a6,v=w,u=0;t=a5.a.r,u<t.length;++u){a9=t[u]
s=a5.ko(u)
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
if(t){v.nG(s)
w=s
continue}l=a9.f
if(!(l!=null)){t=a5.a.e
t.toString
l=t}t=o?a6:p.a
if(t==null)t=0
r=o?a6:p.b
if(r==null)r=0
k=A.i1(a6,a6,C.ac,0,C.bv,r,a6,0,1,l.ahe(),C.ac,t,!1)
t=a9.w
if(t===2){t=a5.a.c.a
t=!D.C.gW(t)?t[0]:0
r=l.d
j=r.nq(t)
i=r.no(t)
h=r.nn(t)
g=t===l.c?0:255
t=new Uint8Array(4)
t[0]=j
t[1]=i
t[2]=h
t[3]=g
r=k.a
if(r!=null)r.nI(0,new A.ys(t))}else if(t!==3)if(a9.f!=null){t=w.a
t=t==null?a6:t.geZ()
t.toString
f=B.K(x,x)
for(r=l.b,e=0;e<r;++e)f.m(0,e,l.bDy(t.nq(e),t.no(e),t.nn(e),t.oL(e)))
t=k.a
d=t==null?a6:J.jc(t.gak(t))
if(d==null){t=k.a
t=t==null?a6:t.gak(t)
if(t==null)t=D.C.gak(new Uint8Array(0))
d=J.jc(t)}t=w.a
a0=t==null?a6:J.jc(t.gak(t))
if(a0==null){t=w.a
t=t==null?a6:t.gak(t)
if(t==null)t=D.C.gak(new Uint8Array(0))
a0=J.jc(t)}for(a1=d.length,t=d.$flags|0,a2=0;a2<a1;++a2){a3=f.h(0,a0[a2])
if(a3!==-1){a3.toString
t&2&&B.F(d)
d[a2]=a3}}}k.y=s.y
for(t=s.a,t=t.ga6(t);t.q();){a4=t.gL(t)
if(a4.gaG(a4)!==0){r=a4.gnl(a4)
q=a9.a
q===$&&B.b()
p=a4.go4(a4)
o=a9.b
o===$&&B.b()
k.B3(r+q,p+o,a4)}}v.nG(k)
w=k}return v},
av7(){var x,w=this.f
if(w.d>=w.c)return null
x=new A.at6()
x.aWj(w);++this.f.d
this.Wy()
return x},
b1t(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.w==null){n.w=new Uint8Array(256)
n.x=new Uint8Array(4095)
n.y=new Uint8Array(4096)
n.z=new Uint32Array(4096)}x=n.Q=n.f.cu()
w=D.c.f0(1,x)
n.dy=w;++w
n.dx=w
n.db=w+1;++x
n.cy=x
n.cx=D.c.f0(1,x)
n.ay=0
n.CW=4098
n.at=n.ax=0
x=n.w
x.toString
x.$flags&2&&B.F(x)
x[0]=0
x=n.z
x.toString
D.bz.ma(x,0,4096,4098)
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
s=A.i1(m,m,C.ac,0,C.bv,w,m,0,1,t.ahe(),C.ac,x,!1)
r=new Uint8Array(x)
x=d.e
x===$&&B.b()
if(x){x=d.b
x===$&&B.b()
for(w=x+w,q=0,p=0;q<4;++q)for(o=x+C.axm[q];o<w;o+=C.aB_[q],++p){if(!n.aoZ(r))return s
n.awY(s,o,t,r)}}else for(o=0;o<w;++o){if(!n.aoZ(r))return s
n.awY(s,o,t,r)}return s},
awY(d,e,f,g){var x,w,v,u=g.length
for(x=0;x<u;++x){w=g[x]
v=d.a
if(v!=null)v.fn(x,e,w,0,0)}},
aoX(){var x,w,v,u,t,s=this,r=s.f.js(6)
if(r!=="GIF87a"&&r!=="GIF89a")return!1
x=s.a
x.toString
x.a=s.f.am()
x=s.a
x.toString
x.b=s.f.am()
w=s.f.cu()
x=s.a
x.toString
x.c=new A.ys(new Uint8Array(B.bV(B.a([s.f.cu()],y.t))));++s.f.d
if((w&128)!==0){x=s.a
x.toString
x.e=A.cH8(D.c.eu(1,(w&7)+1))
for(v=0;v<s.a.e.b;++v){x=s.f
u=J.v(x.a,x.d++)
x=s.f
t=J.v(x.a,x.d++)
x=s.f
w=J.v(x.a,x.d++)
s.a.e.d.pC(v,u,t,w)}}s.a.toString
return!0},
aoZ(d){var x=this,w=x.as
w.toString
x.as=w-d.length
if(!x.b1H(d))return!1
if(x.as===0)x.Wy()
return!0},
Wy(){var x,w,v,u=this.f
if(u.d>=u.c)return!0
x=u.cu()
while(!0){if(x!==0){u=this.f
u=u.d<u.c}else u=!1
if(!u)break
u=this.f
w=u.d+=x
if(w>=u.c)return!0
v=u.a
u.d=w+1
x=J.v(v,w)}return!0},
b1H(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.ay
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
v&2&&B.F(d)
d[w]=t
w=u}}for(k=d.$flags|0;w<x;){s=l.ch=l.b1G()
if(s==null)return!1
v=l.dx
if(s===v)return!1
t=l.dy
if(s===t){for(t=l.z,r=0;r<=4095;++r){t.toString
t.$flags&2&&B.F(t)
t[r]=4098}l.db=v+1
v=l.Q+1
l.cy=v
l.cx=D.c.f0(1,v)
l.CW=4098}else{if(s<t){u=w+1
k&2&&B.F(d)
d[w]=s
w=u}else{v=l.z
if(v[s]===4098){q=l.db-2
if(s===q){s=l.CW
p=l.y
p===$&&B.b()
o=l.x
o===$&&B.b()
n=l.ay++
t=l.a5E(v,s,t)
o.$flags&2&&B.F(o)
o[n]=t
p.$flags&2&&B.F(p)
p[q]=t}else return!1}r=0
while(!0){m=r+1
if(!(r<=4095&&s>l.dy&&s<=4095))break
v=l.x
v===$&&B.b()
t=l.ay++
q=l.y
q===$&&B.b()
q=q[s]
v.$flags&2&&B.F(v)
v[t]=q
s=l.z[s]
r=m}if(m>=4095||s>4095)return!1
v=l.x
v===$&&B.b()
t=l.ay
q=l.ay=t+1
v.$flags&2&&B.F(v)
v[t]=s
t=q
while(!0){if(!(t!==0&&w<x))break
u=w+1
t=l.ay=t-1
q=v[t]
k&2&&B.F(d)
d[w]=q
w=u}}v=l.CW
if(v!==4098&&l.z[l.db-2]===4098){t=l.z
t.toString
q=l.db-2
t.$flags&2&&B.F(t)
t[q]=v
p=l.ch
o=l.y
n=l.dy
if(p===q){o===$&&B.b()
v=l.a5E(t,v,n)
o.$flags&2&&B.F(o)
o[q]=v}else{o===$&&B.b()
p.toString
v=l.a5E(t,p,n)
o.$flags&2&&B.F(o)
o[q]=v}}v=l.ch
v.toString
l.CW=v}}return!0},
b1G(){var x,w,v,u,t=this
if(t.cy>12)return null
for(;x=t.ax,w=t.cy,x<w;){x=t.aYX()
x.toString
w=t.at
v=t.ax
t.at=(w|D.c.f0(x,v))>>>0
t.ax=v+8}v=t.at
u=C.aBF[w]
t.at=D.c.h7(v,w)
t.ax=x-w
x=t.db
if(x<4097){++x
t.db=x
x=x>t.cx&&w<12}else x=!1
if(x){t.cx=t.cx<<1>>>0
t.cy=w+1}return v&u},
a5E(d,e,f){var x,w,v=0
while(!0){if(e>f){x=v+1
w=v<=4095
v=x}else w=!1
if(!w)break
if(e>4095)return 4098
e=d[e]}return e},
aYX(){var x,w,v=this,u=v.w,t=u[0],s=u.$flags|0
if(t===0){t=v.f.cu()
s&2&&B.F(u)
u[0]=t
u=v.w
t=u[0]
if(t===0)return null
D.C.hO(u,1,1+t,v.f.jr(t).hZ())
u=v.w
x=u[1]
u.$flags&2&&B.F(u)
u[1]=2
u[0]=u[0]-1}else{w=u[1]
s&2&&B.F(u)
u[1]=w+1
x=u[w]
u[0]=t-1}return x}}
A.Q2.prototype={
J(){return"IcoType."+this.b}}
A.bkf.prototype={}
A.asq.prototype={}
A.bkd.prototype={
gb8(d){return D.c.b0(A.Gx.prototype.gb8.call(this,0),2)},
gPn(){return!(this.d===40&&this.f===32)&&A.Gx.prototype.gPn.call(this)}}
A.bke.prototype={
n8(d,e,f){var x,w,v,u=this,t=A.d_(e,!1,null,0)
u.a=t
x=u.b=A.cHu(t)
if(x==null)return null
t=x.e.length
if(t===1)return u.ko(0)
for(w=null,v=0;v<u.b.e.length;++v){f=u.ko(v)
if(f==null)continue
if(w==null){f.w=C.bv
w=f}else w.nG(f)}return w},
ko(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=this.a
if(a7!=null){x=this.b
x=x==null||a8>=x.d}else x=!0
if(x)return a6
w=this.b.e[a8]
x=a7.a
a7=a7.b+w.e
v=w.d
u=J.cvq(x,a7,a7+v)
t=new A.ayc(A.cI5())
y.D.a(u)
if(t.IC(u))return t.de(0,u)
s=A.qF(!1,14)
s.lm(19778)
s.jb(v)
s.jb(0)
s.jb(0)
a7=A.d_(u,!1,a6,0)
x=A.cEe(A.d_(J.dh(D.C.gak(s.c),0,s.a),!1,a6,0))
v=a7.d
r=a7.a5()
q=a7.a5()
p=$.hF()
p.$flags&2&&B.F(p)
p[0]=q
q=$.kX()
o=q[0]
p[0]=a7.a5()
q=q[0]
n=a7.am()
m=a7.am()
l=C.U7[a7.a5()]
a7.a5()
p[0]=a7.a5()
p[0]=a7.a5()
p=a7.a5()
a7.a5()
k=new A.bkd(x,o,q,r,n,m,l,p,v)
k.akk(a7,x)
if(r!==40&&n!==1)return a6
j=p===0&&m<=8?40+4*D.c.eu(1,m):40+4*p
x.b=j
s.a-=4
s.jb(j)
i=A.d_(u,!1,a6,0)
h=new A.b9I(!0)
h.a=i
h.b=k
g=h.ko(0)
if(m>=32)return g
f=32-D.c.ao(o,32)
e=D.c.b0(f===32?o:o+f,8)
for(a7=1/q<0,x=q<0,q=q===0,d=0;d<D.c.b0(A.Gx.prototype.gb8.call(k,0),2);++d){if(!(q?a7:x))a0=d
else{v=g.a
v=v==null?a6:v.b
a0=(v==null?0:v)-1-d}a1=i.jy(e)
i.d=i.d+(a1.c-a1.d)
v=g.a
a2=v==null?a6:v.ei(0,a0,a6)
if(a2==null)a2=new A.fq()
for(a3=0;a3<o;){a4=J.v(a1.a,a1.d++)
a5=7
while(!0){if(!(a5>-1&&a3<o))break
if((a4&D.c.f0(1,a5))>>>0!==0)a2.saG(0,0)
a2.q();++a3;--a5}}}return g}}
A.alT.prototype={}
A.Ic.prototype={}
A.Id.prototype={}
A.a10.prototype={
gp(d){return this.a}}
A.bmr.prototype={}
A.CR.prototype={}
A.bmt.prototype={
Rv(d){var x,w,v,u,t,s=this,r=A.d_(d,!0,null,0)
s.a=r
x=r.T2(2,0)
if(J.v(x.a,x.d)!==255||J.v(x.a,x.d+1)!==216)return!1
if(s.G3()!==216)return!1
w=s.G3()
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
break}w=s.G3()}return v&&u},
vD(d,e){var x,w,v,u,t,s,r,q,p=this
p.a=A.d_(e,!0,null,0)
p.bll()
if(p.x.length!==1)throw B.n(A.cc("Only single frame JPEGs supported"))
for(x=p.Q,w=0;v=p.d,u=v.z,w<u.length;++w){t=v.y.h(0,u[w])
v=t.a
u=p.d
s=u.f
r=t.b
q=u.r
u=p.aZ5(u,t)
v=v===1&&s===2?1:0
x.push(new A.alT(u,v,r===1&&q===2?1:0))}},
bll(){var x,w,v,u,t,s=this
if(s.G3()!==216)throw B.n(A.cc("Start Of Image marker not found."))
x=s.G3()
while(!0){if(x!==217){w=s.a
w===$&&B.b()
w=w.d<w.c}else w=!1
if(!w)break
w=s.a
w===$&&B.b()
v=w.am()
if(v<2)B.a7(A.cc("Invalid Block"))
w=s.a
u=w.jy(v-2)
w.d=w.d+(u.c-u.d)
switch(x){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:s.blm(x,u)
break
case 219:s.blp(u)
break
case 192:case 193:case 194:s.blr(x,u)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw B.n(A.cc("Unhandled frame type "+D.c.jv(x,16)))
case 196:s.blo(u)
break
case 221:s.e=u.am()
break
case 218:s.blD(u)
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
break}if(x!==0)throw B.n(A.cc("Unknown JPEG marker "+D.c.jv(x,16)))
break}x=s.G3()}},
G3(){var x,w=this,v=w.a
v===$&&B.b()
if(v.d>=v.c)return 0
do{do{x=w.a.cu()
if(x!==255){v=w.a
v=v.d<v.c}else v=!1}while(v)
v=w.a
if(v.d>=v.c)return x
do{x=w.a.cu()
if(x===255){v=w.a
v=v.d<v.c}else v=!1}while(v)
if(x===0){v=w.a
v=v.d<v.c}else v=!1}while(v)
return x},
blq(d){if(d.a5()!==1165519206)return
if(d.am()!==0)return
this.r.vD(0,d)},
blm(d,e){var x,w,v,u,t=this,s=e
if(d===224){x=s
w=!1
if(J.v(x.a,x.d)===74){x=s
if(J.v(x.a,x.d+1)===70){x=s
if(J.v(x.a,x.d+2)===73){x=s
if(J.v(x.a,x.d+3)===70){x=s
x=J.v(x.a,x.d+4)===0}else x=w}else x=w}else x=w}else x=w
if(x){x=new A.bmx()
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
s.T2(14+3*w*v,14)}}else if(d===225)t.blq(s)
else if(d===238){x=s
w=!1
if(J.v(x.a,x.d)===65){x=s
if(J.v(x.a,x.d+1)===100){x=s
if(J.v(x.a,x.d+2)===111){x=s
if(J.v(x.a,x.d+3)===98){x=s
if(J.v(x.a,x.d+4)===101){x=s
x=J.v(x.a,x.d+5)===0}else x=w}else x=w}else x=w}else x=w}else x=w
if(x){t.c=new A.bmr()
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
x.d=J.v(w.a,w.d+11)}}else if(d===254)try{s.bNS()}catch(u){B.b_(u)}},
blp(d){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=this.w;v=d.d,u=v<x,u;){u=d.a
d.d=v+1
t=J.v(u,v)
s=D.c.S(t,4)
t&=15
if(t>=4)throw B.n(A.cc("Invalid number of quantization tables"))
v=w[t]
if(v==null){v=new Int16Array(64)
w[t]=v}for(u=s!==0,r=0;r<64;++r){q=u?d.am():J.v(d.a,d.d++)
p=C.xw[r]
v.$flags&2&&B.F(v)
v[p]=q}}if(u)throw B.n(A.cc("Bad length for DQT block"))},
blr(d,e){var x,w,v,u,t,s,r,q=this
if(q.d!=null)throw B.n(A.cc("Duplicate JPG frame data found."))
x=q.d=new A.atj(B.K(y.p,y.c),B.a([],y.t))
x.b=d===194
x.c=e.cu()
x=q.d
x.toString
x.d=e.am()
x=q.d
x.toString
x.e=e.am()
w=e.cu()
for(x=q.w,v=0;v<w;++v){u=J.v(e.a,e.d++)
t=J.v(e.a,e.d++)
s=D.c.S(t,4)
r=J.v(e.a,e.d++)
q.d.z.push(u)
q.d.y.m(0,u,new A.CR(s&15,t&15,x,r))}q.d.af4()
q.x.push(q.d)},
blo(d){var x,w,v,u,t,s,r,q,p,o,n,m
for(x=d.c,w=this.z,v=this.y;u=d.d,u<x;){t=d.a
d.d=u+1
s=J.v(t,u)
r=new Uint8Array(16)
for(q=0,p=0;p<16;++p){r[p]=J.v(d.a,d.d++)
q+=r[p]}o=d.jy(q)
d.d=d.d+(o.c-o.d)
n=o.hZ()
if((s&16)!==0){s-=16
m=v}else m=w
if(m.length<=s)D.b.su(m,s+1)
m[s]=this.aZi(r,n)}},
blD(d){var x,w,v,u,t,s,r,q=this,p=d.cu()
if(p<1||p>4)throw B.n(A.cc("Invalid SOS block"))
x=B.qp(p,new A.bmu(q,d),!0,y.c)
w=d.cu()
v=d.cu()
u=d.cu()
t=D.c.S(u,4)
s=q.a
s===$&&B.b()
r=q.d
t=new A.atk(s,r,x,q.e,w,v,t&15,u&15)
s=r.w
s===$&&B.b()
t.f=s
t.r=r.b
t.om(0)},
aZi(d,e){var x,w,v,u,t,s,r,q,p,o,n=B.a([],y.C),m=16
while(!0){if(!(m>0&&d[m-1]===0))break;--m}x=y.aH
n.push(new A.Vk(B.a([],x)))
w=n[0]
for(v=0,u=0;u<m;){for(t=0;t<d[u];++t){w=n.pop()
s=w.a
r=s.length
q=w.b
if(r<=q)D.b.su(s,q+1)
s[w.b]=new A.a10(e[v])
for(;s=w.b,s>0;)w=n.pop()
w.b=s+1
n.push(w)
for(;n.length<=u;w=p){s=B.a([],x)
p=new A.Vk(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.su(r,o+1)
r[w.b]=new A.Id(s)}++v}++u
if(u<m){s=B.a([],x)
p=new A.Vk(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.b.su(r,o+1)
r[w.b]=new A.Id(s)
w=p}}return n[0].a},
aZ5(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.e
d===$&&B.b()
x=a1.f
x===$&&B.b()
w=d<<3>>>0
v=new Int32Array(64)
u=new Uint8Array(64)
t=B.bQ(x*8,null,!1,y.ac)
for(s=a1.c,r=a1.d,q=0,p=0;p<x;++p){o=p<<3>>>0
for(n=0;n<8;++n,q=m){m=q+1
t[q]=new Uint8Array(w)}for(l=0;l<d;++l){k=s[r]
k.toString
j=a1.r
j===$&&B.b()
A.dq9(k,j[p][l],u,v)
i=l<<3>>>0
for(h=0,g=0;g<8;++g){f=t[o+g]
for(n=0;n<8;++n,h=e){f.toString
e=h+1
k=u[h]
f.$flags&2&&B.F(f)
f[i+n]=k}}}}return t}}
A.Vk.prototype={}
A.atj.prototype={
af4(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.y,w=B.t(x).i("ck<1>"),v=new B.ck(x,x.r,x.e,w);v.q();){u=x.h(0,v.d)
g.f=Math.max(g.f,u.a)
g.r=Math.max(g.r,u.b)}v=g.e
v.toString
g.w=D.d.fd(v/8/g.f)
v=g.d
v.toString
g.x=D.d.fd(v/8/g.r)
for(w=new B.ck(x,x.r,x.e,w),v=y.h,t=y.bp;w.q();){s=x.h(0,w.d)
s.toString
r=g.e
r.toString
q=s.a
p=D.d.fd(D.d.fd(r/8)*q/g.f)
r=g.d
r.toString
o=s.b
n=D.d.fd(D.d.fd(r/8)*o/g.r)
m=g.w*q
l=g.x*o
k=J.iY(l,t)
for(j=0;j<l;++j){i=J.iY(m,v)
for(h=0;h<m;++h)i[h]=new Int32Array(64)
k[j]=i}s.e=p
s.f=n
s.r=k}}}
A.bmx.prototype={}
A.atk.prototype={
om(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.y,f=g.length,e=h.r
e.toString
if(e)if(h.Q===0)x=h.at===0?h.gb1m():h.gb1o()
else x=h.at===0?h.gb1d():h.gb1f()
else x=h.gb1j()
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
p=D.c.hz(t,v)
o=D.c.ao(t,v)
v=r.r
v===$&&B.b()
x.$2(r,v[p][o]);++t;++q}}else{q=0
while(!0){v=h.z
v.toString
if(!(q<v))break
for(s=0;s<f;++s){r=g[s]
n=r.a
m=r.b
for(l=0;l<m;++l)for(k=0;k<n;++k)h.b1u(r,x,t,l,k)}++t;++q}}h.ch=0
j=J.v(w.a,w.d)
i=J.v(w.a,w.d+1)
if(j===255)if(i>=208&&i<=215)w.d+=2
else break}},
C5(){var x,w=this,v=w.ch
if(v>0){--v
w.ch=v
return D.c.o9(w.ay,v)&1}v=w.a
if(v.d>=v.c)return null
x=v.cu()
w.ay=x
if(x===255)if(v.cu()!==0)return null
w.ch=7
return D.c.S(w.ay,7)&1},
Mi(d){var x,w=new A.Id(d)
for(;x=this.C5(),x!=null;){if(w instanceof A.Id)w=w.a[x]
if(w instanceof A.a10)return w.a}return null},
a7y(d){var x,w
for(x=0;d>0;){w=this.C5()
if(w==null)return null
x=(x<<1|w)>>>0;--d}return x},
MJ(d){var x
if(d==null)return 0
if(d===1)return this.C5()===1?1:-1
x=this.a7y(d)
if(x==null)return 0
if(x>=D.c.f0(1,d-1))return x
return x+D.c.eu(-1,d)+1},
b1k(d,e){var x,w,v,u,t,s,r=this,q=d.w
q===$&&B.b()
x=r.Mi(q)
w=x===0?0:r.MJ(x)
q=d.y
q===$&&B.b()
q+=w
d.y=q
e.$flags&2&&B.F(e)
e[0]=q
for(v=1;v<64;){q=d.x
q===$&&B.b()
u=r.Mi(q)
if(u==null)break
t=u&15
s=u>>>4
if(t===0){if(s<15)break
v+=16
continue}v+=s
t=r.MJ(t)
e[C.xw[v]]=t;++v}},
b1n(d,e){var x,w,v=d.w
v===$&&B.b()
x=this.Mi(v)
w=x===0?0:D.c.eu(this.MJ(x),this.ax)
v=d.y
v===$&&B.b()
v+=w
d.y=v
e.$flags&2&&B.F(e)
e[0]=v},
b1p(d,e){var x=e[0],w=this.C5()
w.toString
w=D.c.eu(w,this.ax)
e.$flags&2&&B.F(e)
e[0]=(x|w)>>>0},
b1e(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.CW
if(o>0){p.CW=o-1
return}x=p.Q
w=p.as
for(o=p.ax,v=e.$flags|0;x<=w;){u=d.x
u===$&&B.b()
u=p.Mi(u)
u.toString
t=u&15
s=u>>>4
if(t===0){if(s<15){o=p.a7y(s)
o.toString
p.CW=o+D.c.eu(1,s)-1
break}x+=16
continue}x+=s
r=C.xw[x]
u=p.MJ(t)
q=D.c.eu(1,o)
v&2&&B.F(e)
e[r]=u*q;++x}},
b1g(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.Q,n=p.as
$label0$1:for(x=p.ax,w=e.$flags|0,v=0;o<=n;){u=C.xw[o]
t=p.cx
switch(t){case 0:t=d.x
t===$&&B.b()
s=p.Mi(t)
if(s==null)throw B.n(A.cc("Invalid progressive encoding"))
r=s&15
v=s>>>4
if(r===0)if(v<15){t=p.a7y(v)
t.toString
p.CW=t+D.c.eu(1,v)
p.cx=4}else{p.cx=1
v=16}else{if(r!==1)throw B.n(A.cc("invalid ACn encoding"))
p.cy=p.MJ(r)
p.cx=v!==0?2:3}continue $label0$1
case 1:case 2:q=e[u]
if(q!==0){t=p.C5()
t.toString
t=D.c.eu(t,x)
w&2&&B.F(e)
e[u]=q+t}else{--v
if(v===0)p.cx=t===2?3:0}break
case 3:t=e[u]
if(t!==0){q=p.C5()
q.toString
q=D.c.eu(q,x)
w&2&&B.F(e)
e[u]=t+q}else{t=p.cy
t===$&&B.b()
t=D.c.eu(t,x)
w&2&&B.F(e)
e[u]=t
p.cx=0}break
case 4:t=e[u]
if(t!==0){q=p.C5()
q.toString
q=D.c.eu(q,x)
w&2&&B.F(e)
e[u]=t+q}break}++o}if(p.cx===4)if(--p.CW===0)p.cx=0},
b1u(d,e,f,g,h){var x,w,v=this.f
v===$&&B.b()
x=D.c.hz(f,v)*d.b+g
w=D.c.ao(f,v)*d.a+h
v=d.r
v===$&&B.b()
if(x>=v.length)return
v=v[x]
if(w>=v.length)return
e.$2(d,v[w])}}
A.ati.prototype={
n8(d,e,f){var x=A.cIj()
x.vD(0,e)
if(x.x.length!==1)throw B.n(A.cc("only single frame JPEGs supported"))
return A.doq(x)},
de(d,e){return this.n8(0,e,null)}}
A.bms.prototype={
J(){return"JpegChroma."+this.b}}
A.bmv.prototype={
aO1(d){d=D.d.C(D.c.b3(d,1,100))
if(this.at===d)return
this.bdO(d<50?D.d.fD(5000/d):D.c.fD(200-d*2))
this.at=d},
bCw(b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=A.qF(!0,8192)
a8.zi(a9,216)
a8.zi(a9,224)
a9.lm(16)
a9.b2(74)
a9.b2(70)
a9.b2(73)
a9.b2(70)
a9.b2(0)
a9.b2(1)
a9.b2(1)
a9.b2(0)
a9.lm(1)
a9.lm(1)
a9.b2(0)
a9.b2(0)
a8.bu8(a9,b0.gx8())
a8.buc(a9)
x=b0.gd2(0)
w=b0.gb8(0)
a8.zi(a9,192)
a9.lm(17)
a9.b2(8)
a9.lm(w)
a9.lm(x)
a9.b2(3)
a9.b2(1)
x=b1===C.Ng
a9.b2(x?17:34)
a9.b2(0)
a9.b2(2)
a9.b2(17)
a9.b2(1)
a9.b2(3)
a9.b2(17)
a9.b2(1)
a8.bub(a9)
a8.zi(a9,218)
a9.lm(12)
a9.b2(3)
a9.b2(1)
a9.b2(0)
a9.b2(2)
a9.b2(17)
a9.b2(3)
a9.b2(17)
a9.b2(0)
a9.b2(63)
a9.b2(0)
a8.ax=0
a8.ay=7
v=b0.gd2(0)
u=b0.gb8(0)
if(x){t=new Float32Array(64)
s=new Float32Array(64)
r=new Float32Array(64)
for(x=a8.c,w=a8.d,q=0,p=0,o=0,n=0;n<u;n+=8)for(m=0;m<v;m+=8){a8.Lg(b0,m,n,v,u,t,s,r)
l=a8.e
k=a8.r
k===$&&B.b()
q=a8.ww(a9,t,x,q,l,k)
k=a8.f
l=a8.w
l===$&&B.b()
p=a8.ww(a9,s,w,p,k,l)
o=a8.ww(a9,r,w,o,a8.f,a8.w)}}else{x=y.z
t=J.kI(4,x)
for(j=0;j<4;++j)t[j]=new Float32Array(64)
s=J.kI(4,x)
for(j=0;j<4;++j)s[j]=new Float32Array(64)
r=J.kI(4,x)
for(j=0;j<4;++j)r[j]=new Float32Array(64)
i=new Float32Array(64)
h=new Float32Array(64)
for(x=a8.c,w=a8.d,q=0,p=0,o=0,n=0;n<u;n+=16)for(l=n+8,m=0;m<v;m+=16){k=t[0]
g=s[0]
f=r[0]
a8.Lg(b0,m,n,v,u,k,g,f)
e=m+8
d=t[1]
a0=s[1]
a1=r[1]
a8.Lg(b0,e,n,v,u,d,a0,a1)
a2=t[2]
a3=s[2]
a4=r[2]
a8.Lg(b0,m,l,v,u,a2,a3,a4)
a5=t[3]
a6=s[3]
a7=r[3]
a8.Lg(b0,e,l,v,u,a5,a6,a7)
a8.any(i,g,a0,a3,a6)
a8.any(h,f,a1,a4,a7)
a7=a8.e
a4=a8.r
a4===$&&B.b()
q=a8.ww(a9,a5,x,a8.ww(a9,a2,x,a8.ww(a9,d,x,a8.ww(a9,k,x,q,a7,a4),a8.e,a8.r),a8.e,a8.r),a8.e,a8.r)
a4=a8.f
a7=a8.w
a7===$&&B.b()
p=a8.ww(a9,i,w,p,a4,a7)
o=a8.ww(a9,h,w,o,a8.f,a8.w)}}x=a8.ay
if(x>=0){++x
a8.wF(a9,B.a([D.c.f0(1,x)-1,x],y.t))}a8.zi(a9,217)
return J.dh(D.C.gak(a9.c),0,a9.a)},
Lg(d,e,f,g,h,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(x=this.as,w=a0.$flags|0,v=a1.$flags|0,u=a2.$flags|0,t=f+1,s=0;s<64;++s){r=s>>>3
q=f+r
p=e+(s&7)
if(q>=h)q-=t+r-h
if(p>=g)p-=p-g+1
o=d.a
n=o==null?null:o.ei(p,q,null)
if(n==null)n=new A.fq()
if(n.gdu()!==C.ac)n=n.ol(C.ac)
if(n.gu(n)>3){m=n.gfH()
l=1-m
n.sah(0,D.d.aS(n.gah(n)*m+C.Bt.h(0,0)*l))
n.sar(D.d.aS(n.gar()*m+C.Bt.h(0,0)*l))
n.sav(0,D.d.aS(n.gav(n)*m+C.Bt.h(0,0)*l))}k=D.d.C(n.gah(n))
j=D.d.C(n.gar())
i=D.d.C(n.gav(n))
o=D.c.S(x[k]+x[j+256]+x[i+512],16)
w&2&&B.F(a0)
a0[s]=o-128
o=D.c.S(x[k+768]+x[j+1024]+x[i+1280],16)
v&2&&B.F(a1)
a1[s]=o-128
o=D.c.S(x[k+1280]+x[j+1536]+x[i+1792],16)
u&2&&B.F(a2)
a2[s]=o-128}},
any(d,e,f,g,h){var x,w,v,u,t,s,r,q
for(x=d.$flags|0,w=0;w<64;++w){if(w<32)v=D.c.ao(w,8)<4?e:f
else v=D.c.ao(w,8)<4?g:h
u=(D.c.b0(D.c.ao(w,32),8)<<4>>>0)+(D.c.ao(w,4)<<1>>>0)
t=v[u]
s=v[u+1]
r=v[u+8]
q=v[u+9]
x&2&&B.F(d)
d[w]=(t+s+r+q)/4}},
zi(d,e){d.b2(255)
d.b2(e&255)},
bdO(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.a,w=x.$flags|0,v=0;v<64;++v){u=D.d.fD((C.aH6[v]*d+50)/100)
if(u<1)u=1
else if(u>255)u=255
t=C.tY[v]
w&2&&B.F(x)
x[t]=u}for(w=g.b,t=w.$flags|0,s=0;s<64;++s){r=D.d.fD((C.aAx[s]*d+50)/100)
if(r<1)r=1
else if(r>255)r=255
q=C.tY[s]
t&2&&B.F(w)
w[q]=r}for(t=g.c,q=t.$flags|0,p=g.d,o=p.$flags|0,n=0,m=0;m<8;++m)for(l=0;l<8;++l){k=C.tY[n]
j=x[k]
i=C.OF[m]
h=C.OF[l]
q&2&&B.F(t)
t[n]=1/(j*i*h*8)
k=w[k]
o&2&&B.F(p)
p[n]=1/(k*i*h*8);++n}},
TL(d,e){var x,w,v,u,t,s=y.t,r=B.a([B.a([],s)],y.cQ)
for(x=0,w=0,v=1;v<=16;++v){for(u=1;u<=d[v];++u){t=e[w]
if(r.length<=t)D.b.su(r,t+1)
r[t]=B.a([x,v],s);++w;++x}x*=2}return r},
bdD(){var x,w,v,u,t,s,r,q,p,o,n
for(x=this.y,w=this.x,v=y.t,u=1,t=2,s=1;s<=15;++s){for(r=u;r<t;++r){q=32767+r
x[q]=s
w[q]=B.a([r,s],v)}for(q=t-1,p=-q,o=-u;p<=o;++p){n=32767+p
x[n]=s
w[n]=B.a([q+p,s],v)}u=u<<1>>>0
t=t<<1>>>0}},
bdP(){var x,w,v
for(x=this.as,w=x.$flags|0,v=0;v<256;++v){w&2&&B.F(x)
x[v]=19595*v
x[v+256]=38470*v
x[v+512]=7471*v+32768
x[v+768]=-11059*v
x[v+1024]=-21709*v
x[v+1280]=32768*v+8421375
x[v+1536]=-27439*v
x[v+1792]=-5329*v}},
b4j(d4,d5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3
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
x&2&&B.F(d4)
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
x&2&&B.F(d4)
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
bu8(d,e){var x,w
if(e.gW(0))return
x=A.qF(!1,8192)
e.ja(0,x)
w=J.dh(D.C.gak(x.c),0,x.a)
this.zi(d,225)
d.lm(w.length+8)
d.jb(1165519206)
d.lm(0)
d.mj(w)},
buc(d){var x,w,v
this.zi(d,219)
d.lm(132)
d.b2(0)
for(x=this.a,w=0;w<64;++w)d.b2(x[w])
d.b2(1)
for(x=this.b,v=0;v<64;++v)d.b2(x[v])},
bub(d){var x,w,v,u,t,s,r,q
this.zi(d,196)
d.lm(418)
d.b2(0)
for(x=0;x<16;){++x
d.b2(C.VN[x])}for(w=0;w<=11;++w)d.b2(C.tr[w])
d.b2(16)
for(v=0;v<16;){++v
d.b2(C.NK[v])}for(u=0;u<=161;++u)d.b2(C.P3[u])
d.b2(1)
for(t=0;t<16;){++t
d.b2(C.QG[t])}for(s=0;s<=11;++s)d.b2(C.tr[s])
d.b2(17)
for(r=0;r<16;){++r
d.b2(C.Pv[r])}for(q=0;q<=161;++q)d.b2(C.RY[q])},
ww(d,e,f,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=a2[0],h=a2[240],g=j.b4j(e,f)
for(x=j.Q,w=0;w<64;++w)x[C.tY[w]]=g[w]
v=x[0]
v.toString
u=v-a0
if(u===0){t=a1[0]
t.toString
j.wF(d,t)}else{s=32767+u
a1.toString
t=j.y[s]
t.toString
t=a1[t]
t.toString
j.wF(d,t)
t=j.x[s]
t.toString
j.wF(d,t)}r=63
while(!0){if(!(r>0&&x[r]===0))break;--r}if(r===0){i.toString
j.wF(d,i)
return v}for(t=j.y,q=j.x,p=1;p<=r;){o=p
while(!0){if(!(x[o]===0&&o<=r))break;++o}n=o-p
if(n>=16){m=D.c.S(n,4)
for(l=1;l<=m;++l){h.toString
j.wF(d,h)}n&=15}k=x[o]
k.toString
s=32767+k
k=t[s]
k.toString
k=a2[(n<<4>>>0)+k]
k.toString
j.wF(d,k)
k=q[s]
k.toString
j.wF(d,k)
p=o+1}if(r!==63){i.toString
j.wF(d,i)}return v},
wF(d,e){var x,w=this,v=e[0],u=e[1]-1
for(;u>=0;){if((v&D.c.f0(1,u))>>>0!==0)w.ax=(w.ax|D.c.f0(1,w.ay))>>>0;--u
if(--w.ay<0){x=w.ax
if(x===255){d.b2(255)
d.b2(0)}else d.b2(x)
w.ay=7
w.ax=0}}}}
A.RL.prototype={
J(){return"PngDisposeMode."+this.b}}
A.a4f.prototype={
J(){return"PngBlendMode."+this.b}}
A.a4g.prototype={}
A.at7.prototype={}
A.DH.prototype={
J(){return"PngFilterType."+this.b}}
A.bwk.prototype={}
A.bm3.prototype={}
A.ayc.prototype={
IC(d){var x,w=A.d_(d,!0,null,0).jr(8)
for(x=0;x<8;++x)if(J.v(w.a,w.d+x)!==D.Um[x])return!1
return!0},
oQ(b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=A.d_(b4,!0,b2,0)
b1.d=b3
x=b3.jr(8)
for(w=0;w<8;++w)if(J.v(x.a,x.d+w)!==D.Um[w])return b2
for(b3=b1.a,v=b3.cx,u=y.t,t=b3.cy,s=y.L,r=b3.ax;!0;){q=b1.d
p=q.d-q.b
o=q.a5()
n=b1.d.js(4)
switch(n){case"tEXt":q=b1.d
m=q.jy(o)
q.d=q.d+(m.c-m.d)
l=m.hZ()
k=l.length
for(w=0;w<k;++w)if(l[w]===0){q=w+1
r.m(0,D.eo.de(0,new Uint8Array(l.subarray(0,B.rc(0,w,k)))),D.eo.de(0,new Uint8Array(l.subarray(q,B.rc(q,b2,k)))))
break}b1.d.d+=4
break
case"pHYs":q=b1.d
m=q.jy(o)
q.d=q.d+(m.c-m.d)
j=A.cf(m,b2,0)
j.a5()
j.a5()
J.v(j.a,j.d++)
b1.d.d+=4
break
case"IHDR":q=b1.d
m=q.jy(o)
q.d=q.d+(m.c-m.d)
i=A.cf(m,b2,0)
h=i.hZ()
b3.a=i.a5()
b3.b=i.a5()
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
break}if(b1.d.a5()!==A.xV(h,A.xV(new B.eR(n),0)))throw B.n(A.cc("Invalid "+n+" checksum"))
break
case"PLTE":q=b1.d
m=q.jy(o)
q.d=q.d+(m.c-m.d)
b3.w=m.hZ()
if(b1.d.a5()!==A.xV(s.a(b3.w),A.xV(new B.eR(n),0)))throw B.n(A.cc("Invalid "+n+" checksum"))
break
case"tRNS":q=b1.d
m=q.jy(o)
q.d=q.d+(m.c-m.d)
b3.x=m.hZ()
g=b1.d.a5()
q=b3.x
q.toString
if(g!==A.xV(q,A.xV(new B.eR(n),0)))throw B.n(A.cc("Invalid "+n+" checksum"))
break
case"IEND":b1.d.d+=4
break
case"gAMA":if(o!==4)throw B.n(A.cc("Invalid gAMA chunk"))
b1.d.a5()
b1.d.d+=4
break
case"IDAT":t.push(p)
q=b1.d
f=q.d+=o
q.d=f+4
break
case"acTL":b3.ch=b1.d.a5()
b1.d.a5()
b1.d.d+=4
break
case"fcTL":b1.d.a5()
e=b1.d.a5()
d=b1.d.a5()
a0=b1.d.a5()
a1=b1.d.a5()
a2=b1.d.am()
a3=b1.d.am()
q=b1.d
a4=J.v(q.a,q.d++)
q=b1.d
a5=J.v(q.a,q.d++)
q=C.ay7[a4]
f=C.aEt[a5]
v.push(new A.at7(B.a([],u),e,d,a0,a1,a2,a3,q,f))
b1.d.d+=4
break
case"fdAT":b1.d.a5()
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
if(q!=null){q=D.C.n(q,a6)?0:255
f=new Uint8Array(4)
f[0]=a8
f[1]=a9
f[2]=b0
f[3]=q
b3.z=new A.Of(f)}else{q=new Uint8Array(3)
q[0]=a8
q[1]=a9
q[2]=b0
b3.z=new A.alO(q)}}else if(q===0||q===4){b1.d.am()
o-=2}else if(q===2||q===6){q=b1.d
q.am()
q.am()
q.am()
o-=24}if(o>0)b1.d.d+=o
b1.d.d+=4
break
case"iCCP":b3.Q=b1.d.QM()
q=b1.d
J.v(q.a,q.d++)
q=b3.Q
f=b1.d
m=f.jy(o-(q.length+2))
f.d=f.d+(m.c-m.d)
b3.at=m.hZ()
b1.d.d+=4
break
default:q=b1.d
f=q.d+=o
q.d=f+4
break}if(n==="IEND")break
q=b1.d
if(q.d>=q.c)return b2}return b3},
ko(b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=null,b4=b1.a,b5=b4.a,b6=b4.b,b7=b4.cx,b8=b7.length
if(b8===0||b9===0){w=B.a([],y.a)
b7=b4.cy
v=b7.length
for(u=0,t=0;t<v;++t){b8=b1.d
b8===$&&B.b()
b8.d=b7[t]
s=b8.a5()
r=b1.d.js(4)
b8=b1.d
q=b8.jy(s)
b8.d=b8.d+(q.c-q.d)
p=q.hZ()
u+=p.length
w.push(p)
if(b1.d.a5()!==A.xV(p,A.xV(new B.eR(r),0)))throw B.n(A.cc("Invalid "+r+" checksum"))}b3=new Uint8Array(u)
for(b7=w.length,o=0,n=0;n<w.length;w.length===b7||(0,B.S)(w),++n){p=w[n]
J.cvp(b3,o,p)
o+=p.length}}else{if(b9>=b8)throw B.n(A.cc("Invalid Frame Number: "+b9))
m=b7[b9]
b5=m.b
b6=m.c
w=B.a([],y.a)
for(b7=m.y,u=0,t=0;t<b7.length;++t){b8=b1.d
b8===$&&B.b()
b8.d=b7[t]
s=b8.a5()
b8=b1.d
b8.js(4)
b8.d+=4
b8=b1.d
q=b8.jy(s-4)
b8.d=b8.d+(q.c-q.d)
p=q.hZ()
u+=p.length
w.push(p)}b3=new Uint8Array(u)
for(b7=w.length,o=0,n=0;n<w.length;w.length===b7||(0,B.S)(w),++n){p=w[n]
J.cvp(b3,o,p)
o+=p.length}}b7=b4.d
l=1
if(!(b7===3))if(!(b7===0)){if(b7===4)b7=2
else b7=b7===6?4:3
l=b7}x=null
try{x=C.jP.CK(b3)}catch(k){return b2}j=A.d_(x,!0,b2,0)
b1.c=b1.b=0
i=b2
if(b4.d===3){b7=b4.w
if(b7!=null){h=b7.length/3|0
g=b4.x
b8=g!=null
f=b8?g.length:0
e=b8?4:3
i=new A.uS(new Uint8Array(h*e),h,e)
for(b8=e===4,t=0,d=0;t<h;++t,d+=3){a0=b8&&t<f?g[t]:255
i.Sz(t,b7[d],b7[d+1],b7[d+2],a0)}}}if(b4.d===0&&b4.x!=null&&i==null&&b4.c<=8){g=b4.x
a1=g.length
b7=b4.c
h=D.c.f0(1,b7)
i=new A.uS(new Uint8Array(h*4),h,4)
if(b7===1)a2=255
else if(b7===2)a2=85
else{b7=b7===4?17:1
a2=b7}for(t=0;t<h;++t){a3=t*a2
i.Sz(t,a3,a3,a3,255)}for(b7=i.b,b8=3<b7,a4=i.c,a5=a4.$flags|0,t=0;t<a1;t+=2){a6=(g[t]&255)<<8|g[t+1]&255
if(a6<h)if(b8){a5&2&&B.F(a4)
a4[a6*b7+3]=0}}}b7=b4.c
if(b7===1)a7=C.fT
else if(b7===2)a7=C.hJ
else{if(b7===4)b8=C.hK
else b8=b7===16?C.cC:C.ac
a7=b8}b8=b4.d
if(b8===0&&b4.x!=null&&b7>8)l=4
a8=A.i1(b2,b2,a7,0,C.bv,b6,b2,0,b8===2&&b4.x!=null?4:l,i,C.ac,b5,!1)
a9=b4.a
b0=b4.b
b4.a=b5
b4.b=b6
b1.e=0
if(b4.r!==0){b7=b6+7>>>3
b1.C3(j,a8,0,0,8,8,b5+7>>>3,b7)
b8=b5+3
b1.C3(j,a8,4,0,8,8,b8>>>3,b7)
b7=b6+3
b1.C3(j,a8,0,4,4,8,b8>>>2,b7>>>3)
b8=b5+1
b1.C3(j,a8,2,0,4,4,b8>>>2,b7>>>2)
b7=b6+1
b1.C3(j,a8,0,2,2,4,b8>>>1,b7>>>2)
b1.C3(j,a8,1,0,2,2,b5>>>1,b7>>>1)
b1.C3(j,a8,0,1,1,2,b5,b6>>>1)}else b1.bku(j,a8)
b4.a=a9
b4.b=b0
b7=b4.at
if(b7!=null)a8.c=new A.a12(b4.Q,C.Cs,b7)
b4=b4.ax
if(b4.a!==0)a8.bv5(b4)
return a8},
n8(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(g.oQ(e)==null)return f
x=g.a
w=x.cx
v=w.length
if(v===0){x=g.ko(0)
x.toString
return x}for(v=y.g,u=f,t=u,s=0;s<x.ch;++s){a0=w[s]
r=g.ko(s)
if(r==null)continue
if(t==null||u==null){t=r.aAy(r.gqq())
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
o=o===(n==null?0:n)&&a0.d===0&&a0.e===0&&a0.x===C.a8O}else o=!1
if(o){q=a0.f
r.y=D.d.C((q===0||a0.r===0?0:q/a0.r)*1000)
t.nG(r)
u=r
continue}i=t.x
u=A.Cw((i===$?t.x=B.a([],v):i)[q],!1,!1)
h=p.w
if(h===C.a8Q){q=p.d
o=p.e
n=x.z
if(n==null){n=new Uint8Array(4)
m=new A.Of(n)
n[0]=0
n[1]=0
n[2]=0
n[3]=0
n=m}A.dnN(u,!1,n,q,q+p.b-1,o,o+p.c-1)}else if(h===C.a8R&&s>1){i=t.x
if(i===$)i=t.x=B.a([],v)
q=p.d
o=p.e
n=p.b
m=p.c
u=A.cBg(u,i[s-2],C.AA,m,n,q,o,m,n,q,o)}q=a0.f
u.y=D.d.C((q===0||a0.r===0?0:q/a0.r)*1000)
q=a0.x===C.a8P?C.AA:C.Az
u=A.cBg(u,r,q,f,f,a0.d,a0.e,f,f,f,f)
t.nG(u)}return t},
de(d,e){return this.n8(0,e,null)},
C3(a0,a1,a2,a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=e.d
if(d===4)x=2
else if(d===2)x=3
else{d=d===6?4:1
x=d}w=x*e.c
v=D.c.S(w+7,3)
u=D.c.S(w*a6+7,3)
t=B.a([null,null],y.e)
s=B.a([0,0,0,0],y.t)
for(e=a4>1,r=a4-a2,q=a3,p=0,o=0;p<a7;++p,q+=a5,++f.e){n=C.Tq[J.v(a0.a,a0.d++)]
m=a0.jy(u)
a0.d=a0.d+(m.c-m.d)
d=m.hZ()
t[o]=d
o=1-o
f.awq(n,v,d,t[o])
f.c=f.b=0
l=d.length
k=new A.mh(d,0,Math.min(l,l),0,!0)
for(d=r<=1,j=a2,i=0;i<a6;++i,j+=a4){f.atl(k,s)
l=a1.a
l=l==null?null:l.ei(j,q,null)
f.a83(l==null?new A.fq():l,s)
if(!d||e)for(h=0;h<a4;++h)for(l=q+h,g=0;g<r;++g)f.a83(a1.ky(j+g,l),s)}}},
bku(d,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a,e=f.d
if(e===4)x=2
else if(e===2)x=3
else{e=e===6?4:1
x=e}w=x*f.c
v=f.a
u=f.b
t=D.c.S(v*w+7,3)
s=D.c.S(w+7,3)
r=B.bQ(t,0,!1,y.p)
q=B.a([r,r],y.S)
p=B.a([0,0,0,0],y.t)
f=a0.a
o=f.ga6(f)
o.q()
for(n=0,m=0;n<u;++n,m=j){l=C.Tq[J.v(d.a,d.d++)]
k=d.jy(t)
d.d=d.d+(k.c-k.d)
f=k.hZ()
q[m]=f
j=1-m
g.awq(l,s,f,q[j])
g.c=g.b=0
f=q[m]
e=f.length
i=new A.mh(f,0,Math.min(e,e),0,!0)
for(h=0;h<v;++h){g.atl(i,p)
g.a83(o.gL(o),p)
o.q()}}},
awq(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=f.length
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
tt(d,e){var x,w,v,u,t,s=this
if(e===0)return 0
if(e===8)return d.cu()
if(e===16)return d.am()
for(x=d.c;w=s.c,w<e;){w=d.d
if(w>=x)throw B.n(A.cc("Invalid PNG data."))
v=d.a
d.d=w+1
u=J.v(v,w)
w=s.c
s.b=D.c.f0(u,w)
s.c=w+8}if(e===1)t=1
else if(e===2)t=3
else{if(e===4)x=15
else x=0
t=x}x=w-e
w=D.c.h7(s.b,x)
s.c=x
return w&t},
atl(d,e){var x=this,w=x.a,v=w.d
switch(v){case 0:e[0]=x.tt(d,w.c)
return
case 2:e[0]=x.tt(d,w.c)
e[1]=x.tt(d,w.c)
e[2]=x.tt(d,w.c)
return
case 3:e[0]=x.tt(d,w.c)
return
case 4:e[0]=x.tt(d,w.c)
e[1]=x.tt(d,w.c)
return
case 6:e[0]=x.tt(d,w.c)
e[1]=x.tt(d,w.c)
e[2]=x.tt(d,w.c)
e[3]=x.tt(d,w.c)
return}throw B.n(A.cc("Invalid color type: "+v+"."))},
a83(d,e){var x,w,v,u,t,s,r,q,p=this.a,o=p.d
switch(o){case 0:x=p.x
if(x!=null&&p.c>8){p=x[0]
o=x[1]
w=e[0]
d.iC(w,w,w,w!==((p&255)<<24|o&255)>>>0?d.gcl():0)
return}d.kR(e[0],0,0)
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
if(v!==((o&255)<<8|t&255)||w!==((s&255)<<8|r&255)||u!==((q&255)<<8|p&255)){d.iC(v,w,u,d.gcl())
return}}d.kR(v,w,u)
return
case 3:d.seb(0,e[0])
return
case 4:d.kR(e[0],e[1],0)
return
case 6:d.iC(e[0],e[1],e[2],e[3])
return}throw B.n(A.cc("Invalid color type: "+o+"."))}}
A.ayd.prototype={
J(){return"PngFilter."+this.b}}
A.bwi.prototype={
nG(d){var x,w,v,u,t,s,r,q,p=this,o=8192,n=d.a
n=n==null?null:n.grN()
if(!(n===!0&&d.gdu()!==C.cC))n=d.gn4()<8&&!d.grI()&&d.gqq()>1
else n=!0
if(n)d=d.ol(C.ac)
if(p.w==null){n=A.qF(!0,o)
p.w=n
n.mj(B.a([137,80,78,71,13,10,26,10],y.t))
x=A.qF(!0,o)
x.jb(d.gd2(0))
x.jb(d.gb8(0))
x.b2(d.gn4())
if(d.grI())n=3
else if(d.gqq()===1)n=0
else if(d.gqq()===2)n=4
else n=d.gqq()===3?2:6
x.b2(n)
x.b2(0)
x.b2(0)
x.b2(0)
n=p.w
n.toString
p.tB(n,"IHDR",J.dh(D.C.gak(x.c),0,x.a))
n=d.c
if(n!=null){x=A.qF(!0,o)
x.mj(new B.eR(n.a))
x.b2(0)
x.b2(0)
x.mj(n.bye())
n=p.w
n.toString
p.tB(n,"iCCP",J.dh(D.C.gak(x.c),0,x.a))}if(d.grI()){n=p.a
if(n!=null){n=n.a
n===$&&B.b()
p.axY(n)}else{n=d.a
n=n==null?null:n.geZ()
n.toString
p.axY(n)}}if(p.r){x=A.qF(!0,o)
n=p.e
n===$&&B.b()
x.jb(n)
x.jb(p.c)
n=p.w
n.toString
p.tB(n,"acTL",J.dh(D.C.gak(x.c),0,x.a))}}w=d.grI()?1:d.gqq()
v=d.gdu()===C.cC?2:1
n=d.gd2(0)
u=d.gb8(0)
t=d.gb8(0)
s=new Uint8Array(n*u*w*v+t)
p.bkv(0,d,s)
r=C.Jo.aCe(s,p.d)
n=d.d
if(n!=null)for(n=new B.ck(n,n.r,n.e,B.t(n).i("ck<1>"));n.q();){u=n.d
t=d.d.h(0,u)
t.toString
x=new A.axo(!0,new Uint8Array(8192))
x.mj(D.rM.cf(u))
x.b2(0)
x.mj(D.rM.cf(t))
u=p.w
u.toString
p.tB(u,"tEXt",J.dh(D.C.gak(x.c),0,x.a))}if(p.r){x=A.qF(!0,o)
x.jb(p.f)
x.jb(d.gd2(0))
x.jb(d.gb8(0))
x.jb(0)
x.jb(0)
x.lm(d.y)
x.lm(1000)
x.b2(1)
x.b2(0)
n=p.w
n.toString
p.tB(n,"fcTL",J.dh(D.C.gak(x.c),0,x.a));++p.f}if(p.f<=1){n=p.w
n.toString
p.tB(n,"IDAT",r)}else{q=A.qF(!0,o)
q.jb(p.f)
q.mj(r)
n=p.w
n.toString
p.tB(n,"fdAT",J.dh(D.C.gak(q.c),0,q.a));++p.f}},
bDE(d){var x,w=this,v=w.w
if(v==null)return null
w.tB(v,"IEND",B.a([],y.t))
w.f=0
v=w.w
x=J.dh(D.C.gak(v.c),0,v.a)
w.w=null
return x},
bCx(d,e){var x,w,v,u,t,s=this,r=d.gle().length
if(r<=1){s.e=1
s.r=!1
s.nG(d)}else{r=d.gle().length
s.e=r
s.r=r>1
s.c=d.r
if(d.grI()){x=new A.btL(new Int32Array(256))
x.bgz(256)
x.buO(d)
s.a=x
for(r=d.gle(),w=r.length,v=0;v<r.length;r.length===w||(0,B.S)(r),++v){u=r[v]
if(u!==d){x.arb(u)
x.aog()
x.aqT()
x.amK()}}}for(r=d.gle(),w=r.length,v=0;v<r.length;r.length===w||(0,B.S)(r),++v){u=r[v]
t=s.a
if(t!=null)s.nG(t.aKT(u))
else s.nG(u)}}r=s.bDE(0)
r.toString
return r},
axY(d){var x,w,v,u=this
if(d.gdu()===C.ac&&d.b===3&&d.a===256){x=u.w
x.toString
u.tB(x,"PLTE",J.dh(d.gak(d),0,null))}else{x=d.a
w=A.qF(!0,x*3)
for(v=0;v<x;++v){w.b2(D.d.C(d.nq(v)))
w.b2(D.d.C(d.no(v)))
w.b2(D.d.C(d.nn(v)))}x=u.w
x.toString
u.tB(x,"PLTE",J.dh(D.C.gak(w.c),0,w.a))}if(d.b===4){x=d.a
w=A.qF(!0,x)
for(v=0;v<x;++v)w.b2(D.d.C(d.oL(v)))
x=u.w
x.toString
u.tB(x,"tRNS",J.dh(D.C.gak(w.c),0,w.a))}},
tB(d,e,f){d.jb(f.length)
d.mj(new B.eR(e))
d.mj(f)
d.jb(A.xV(f,A.xV(new B.eR(e),0)))},
bkv(d,e,f){var x,w,v=this,u=e.grI()?C.bt7:v.b,t=e.gak(0),s=e.a.gt0(),r=e.grI()?1:e.gqq(),q=D.c.S(r*e.gn4()+7,3),p=e.gn4()+7>>>3,o=u.a,n=J.dP(t),m=0,l=0,k=null,j=0
while(!0){x=e.a
x=x==null?null:x.b
if(!(j<(x==null?0:x)))break
w=n.Cp(t,l,s)
l+=s
switch(o){case 1:m=v.b4x(w,p,q,f,m)
break
case 2:m=v.b4A(w,k,p,f,m)
break
case 3:m=v.b4r(w,k,p,q,f,m)
break
case 4:m=v.b4u(w,k,p,q,f,m)
break
default:m=v.b4t(w,p,f,m)
break}++j
k=w}},
axS(d,e,f,g,h){var x,w,v;--d
for(x=g.$flags|0;d>=0;h=w){w=h+1
v=e[f+d]
x&2&&B.F(g)
g[h]=v;--d}return h},
b4t(d,e,f,g){var x,w,v=g+1
f.$flags&2&&B.F(f)
f[g]=0
x=d.length
if(e===1)for(g=v,w=0;w<x;++w,g=v){v=g+1
f[g]=d[w]}else for(g=v,w=0;w<x;w+=e)g=this.axS(e,d,w,f,g)
return g},
b4x(d,e,f,g,h){var x,w,v,u,t,s,r=h+1
g.$flags&2&&B.F(g)
g[h]=1
for(h=r,x=0;x<f;x+=e)h=this.axS(e,d,x,g,h)
w=d.length
for(v=e-1,x=f;x<w;x+=e)for(u=v,t=0;t<e;++t,--u,h=r){r=h+1
s=x+u
g[h]=d[s]-d[s-f]&255}return h},
b4A(d,e,f,g,h){var x,w,v,u,t,s,r,q=h+1
g.$flags&2&&B.F(g)
g[h]=2
x=d.length
for(w=f-1,v=e!=null,h=q,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,h=q){r=v?e[u+t]:0
q=h+1
g[h]=d[u+t]-r&255}return h},
b4r(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o=i+1
h.$flags&2&&B.F(h)
h[i]=3
x=d.length
for(w=f-1,v=e==null,i=o,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=o){r=u+t
q=r<g?0:d[r-g]
p=v?0:e[r]
o=i+1
h[i]=d[r]-(q+p>>>1)}return i},
bj9(d,e,f){var x=d+e-f,w=x>d?x-d:d-x,v=x>e?x-e:e-x,u=x>f?x-f:f-x
if(w<=v&&w<=u)return d
else if(v<=u)return e
return f},
b4u(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m=i+1
h.$flags&2&&B.F(h)
h[i]=4
x=d.length
for(w=f-1,v=e==null,i=m,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=m){r=u+t
q=r<g
p=q?0:d[r-g]
o=v?0:e[r]
n=q||v?0:e[r-g]
m=i+1
h[i]=d[r]-this.bj9(p,o,n)&255}return i}}
A.DI.prototype={
J(){return"PnmFormat."+this.b}}
A.JG.prototype={}
A.bwl.prototype={
IC(d){var x
this.b=A.d_(d,!1,null,0)
x=this.UC()
if(x==="P1"||x==="P2"||x==="P5"||x==="P3"||x==="P6")return!0
return!1},
n8(d,e,f){if(this.oQ(e)==null)return null
return this.ko(0)},
oQ(d){var x,w,v=this
v.b=A.d_(d,!1,null,0)
x=v.UC()
if(x==="P1"){w=v.a=new A.JG(C.pe)
w.e=C.a8S}else if(x==="P2"){w=v.a=new A.JG(C.pe)
w.e=C.a8T}else if(x==="P5"){w=v.a=new A.JG(C.pe)
w.e=C.Fu}else if(x==="P3"){w=v.a=new A.JG(C.pe)
w.e=C.a8U}else if(x==="P6"){w=v.a=new A.JG(C.pe)
w.e=C.Fv}else return v.b=null
w.a=v.ME()
w=v.a
w.toString
w.b=v.ME()
w=v.a
if(w.a===0||w.b===0)return v.a=v.b=null
return w},
ko(d){var x,w,v,u,t,s=this,r=null,q=s.a
if(q==null)return r
x=q.e
if(x===C.a8S){x=q.a
w=A.i1(r,r,C.fT,0,C.bv,q.b,r,0,1,r,C.ac,x,!1)
for(q=w.a,q=q.ga6(q);q.q();){v=q.gL(q)
if(s.UC()==="1")v.kR(1,1,1)
else v.kR(0,0,0)}return w}else if(x===C.a8T||x===C.Fu){u=s.ME()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.i1(r,r,s.aD0(u),0,C.bv,q,r,0,1,r,C.ac,x,!1)
for(q=w.a,q=q.ga6(q);q.q();){v=q.gL(q)
t=s.VV(s.a.e,u)
v.kR(t,t,t)}return w}else if(x===C.a8U||x===C.Fv){u=s.ME()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.i1(r,r,s.aD0(u),0,C.bv,q,r,0,3,r,C.ac,x,!1)
for(q=w.a,q=q.ga6(q);q.q();)q.gL(q).kR(s.VV(s.a.e,u),s.VV(s.a.e,u),s.VV(s.a.e,u))
return w}return r},
aD0(d){if(d>255)return C.cC
if(d>15)return C.ac
if(d>3)return C.hK
if(d>1)return C.hJ
return C.fT},
VV(d,e){if(d===C.Fu||d===C.Fv)return this.b.cu()
return this.ME()},
ME(){var x,w,v=this.UC()
if(J.bu(v)===0)return 0
try{x=B.dg(v,null)
return x}catch(w){return 0}},
UC(){var x,w,v,u,t=this.b
if(t==null)return""
x=this.c
if(x.length!==0)return D.b.iw(x,0)
w=D.e.bq(t.bNR())
if(w.length===0)return""
for(;D.e.ba(w,"#");)w=D.e.bq(this.b.aGX(70))
t=y.U
v=B.H(new B.ai(B.a(w.split(" "),y.T),new A.bwm(),t),!0,t.i("y.E"))
for(t=v.length,u=0;u<t;++u)if(D.e.ba(v[u],"#")){D.b.su(v,u)
break}D.b.H(x,v)
if(x.length===0)return""
return D.b.iw(x,0)}}
A.ayI.prototype={}
A.ayJ.prototype={}
A.x2.prototype={}
A.ayL.prototype={}
A.ayM.prototype={}
A.ayP.prototype={}
A.ayQ.prototype={}
A.a4B.prototype={}
A.ayO.prototype={
gcp(d){return this.c}}
A.bxg.prototype={
aWM(d){var x,w,v,u,t=this
d.am()
d.am()
d.am()
d.am()
x=D.c.b0(d.c-d.d,8)
if(x>0){t.e=new Uint16Array(x)
t.f=new Uint16Array(x)
t.r=new Uint16Array(x)
t.w=new Uint16Array(x)
for(w=0;w<x;++w){v=t.e
u=d.am()
v.$flags&2&&B.F(v)
v[w]=u
u=t.f
v=d.am()
u.$flags&2&&B.F(u)
u[w]=v
v=t.r
u=d.am()
v.$flags&2&&B.F(v)
v[w]=u
u=t.w
v=d.am()
u.$flags&2&&B.F(u)
u[w]=v}}}}
A.RZ.prototype={
aGW(d,e,f,g,h,i,j){if(d.c-d.d<2)return
if(h==null)h=d.am()
switch(h){case 0:g.toString
this.blC(d,e,f,g)
break
case 1:if(i==null)i=this.blz(d,f)
g.toString
this.blB(d,e,f,g,i,j)
break
default:throw B.n(A.cc("Unsupported compression: "+h))}},
bNQ(d,e,f,g){return this.aGW(d,e,f,g,null,null,0)},
blz(d,e){var x,w=new Uint16Array(e)
for(x=0;x<e;++x)w[x]=d.am()
return w},
blC(d,e,f,g){var x,w=e*f
if(g===16)w*=2
if(w>d.c-d.d){x=new Uint8Array(w)
this.c=x
D.C.ma(x,0,w,255)
return}this.c=d.jr(w).hZ()},
blB(d,e,f,g,h,i){var x,w,v,u,t,s,r=e*f
if(g===16)r*=2
x=new Uint8Array(r)
this.c=x
w=i*f
if(w>=h.length){D.C.ma(x,0,r,255)
return}for(v=0,u=0;u<f;++u,w=t){t=w+1
s=d.jy(h[w])
d.d=d.d+(s.c-s.d)
x=this.c
x.toString
this.b1z(s,x,v)
v+=e}},
b1z(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=e.$flags|0,v=e.length;u=d.d,u<x;){t=d.a
d.d=u+1
u=J.v(t,u)
t=$.nF()
t.$flags&2&&B.F(t)
t[0]=u
s=$.oJ()[0]
if(s<0){s=1-s
u=d.d
if(u>=x)break
t=d.a
d.d=u+1
r=J.v(t,u)
if(f+s>v)s=v-f
for(q=0;q<s;++q,f=p){p=f+1
w&2&&B.F(e)
e[f]=r}}else{++s
if(f+s>v)s=v-f
s=Math.min(s,x-d.d)
for(q=0;q<s;++q,f=p){p=f+1
u=J.v(d.a,d.d++)
w&2&&B.F(e)
e[f]=u}}}},
gbo(d){return this.a}}
A.uZ.prototype={
J(){return"PsdColorMode."+this.b}}
A.bxi.prototype={
aWN(d){var x,w,v=this
v.as=A.d_(d,!0,null,0)
v.bl5()
if(v.c!==943870035)return
x=v.as.a5()
v.as.jr(x)
x=v.as.a5()
v.at=v.as.jr(x)
x=v.as.a5()
v.ax=v.as.jr(x)
w=v.as
v.ay=w.jr(w.c-w.d)},
om(d){var x,w=this
if(w.c===943870035){x=w.as
x===$&&B.b()
x=x==null}else x=!0
if(x)return!1
w.blx()
w.bly()
w.blA()
w.ay=w.ax=w.at=w.as=null
return!0},
aBu(){if(!this.om(0))return null
return this.bOt()},
bOt(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.y
if(d!=null)return d
d=f.a
d=A.i1(e,e,C.ac,0,C.bv,f.b,e,0,4,e,C.ac,d,!1)
f.y=d
d.V(0)
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
m=n==null?e:n.ei(o,r,e)
if(m==null)m=new A.fq()
l=D.d.C(m.gah(m))
k=D.d.C(m.gar())
j=D.d.C(m.gav(m))
i=D.d.C(m.gaG(m))
p.toString
if(p>=0&&p<f.a&&d&&s<f.b){n=w.b
n.toString
h=f.y.a
g=h==null?e:h.ei(n+o,q,e)
if(g==null)g=new A.fq()
f.aYG(D.d.C(g.gah(g)),D.d.C(g.gar()),D.d.C(g.gav(g)),D.d.C(g.gaG(g)),l,k,j,i,u,v,g)}++o;++p}++r;++s}}++x}d=f.y
d.toString
return d},
aYG(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s=k/255*m
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
case 1768188278:u=A.bxj(d,h)
v=A.bxj(e,i)
w=A.bxj(f,j)
x=k
break
case 1818391150:u=A.bxl(d,h)
v=A.bxl(e,i)
w=A.bxl(f,j)
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
case 1935897198:u=A.cyt(d,h)
v=A.cyt(e,i)
w=A.cyt(f,j)
x=k
break
case 1684633120:u=A.bxk(d,h)
v=A.bxk(e,i)
w=A.bxk(f,j)
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
case 1870030194:u=A.cyr(d,h,g,k)
v=A.cyr(e,i,g,k)
w=A.cyr(f,j,g,k)
x=k
break
case 1934387572:u=A.cyu(d,h)
v=A.cyu(e,i)
w=A.cyu(f,j)
x=k
break
case 1749838196:u=A.cyp(d,h)
v=A.cyp(e,i)
w=A.cyp(f,j)
x=k
break
case 1984719220:u=A.cyv(d,h)
v=A.cyv(e,i)
w=A.cyv(f,j)
x=k
break
case 1816947060:u=A.cyq(d,h)
v=A.cyq(e,i)
w=A.cyq(f,j)
x=k
break
case 1884055924:u=A.cys(d,h)
v=A.cys(e,i)
w=A.cys(f,j)
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
case 1936553316:u=A.cyo(d,h)
v=A.cyo(e,i)
w=A.cyo(f,j)
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
n.sah(0,D.d.C(d*t+u*s))
n.sar(D.d.C(e*t+v*s))
n.sav(0,D.d.C(f*t+w*s))
n.saG(0,D.d.C(g*t+x*s))},
bl5(){var x,w,v=this,u=v.as
u===$&&B.b()
v.c=u.a5()
u=v.as.am()
v.d=u
if(u!==1){v.c=0
return}x=v.as.jr(6)
for(w=0;w<6;++w)if(J.v(x.a,x.d+w)!==0){v.c=0
return}v.e=v.as.am()
v.b=v.as.a5()
v.a=v.as.a5()
v.f=v.as.am()
v.r=C.aLi[v.as.am()]},
blx(){var x,w,v,u,t,s,r=this,q=r.at
q.d=q.b
for(q=r.z;x=r.at,x.d<x.c;){w=x.a5()
v=r.at.am()
x=r.at
u=J.v(x.a,x.d++)
t=r.at.js(u)
if((u&1)===0)++r.at.d
u=r.at.a5()
x=r.at
s=x.jy(u)
x.d=x.d+(s.c-s.d)
if((u&1)===1)++r.at.d
if(w===943868237)q.m(0,v,new A.ayK(v,t))}},
bly(){var x,w,v,u,t,s,r,q,p,o=this,n=o.ax
n.d=n.b
x=n.a5()
if((x&1)!==0)++x
w=o.ax.jr(x)
n=y.l
o.w=B.a([],n)
if(x>0){v=w.am()
u=$.nE()
u.$flags&2&&B.F(u)
u[0]=v
t=$.oI()[0]
if(t<0)t=-t
for(v=y.N,u=y.O,s=y.u,r=0;r<t;++r){q=new A.ayN(B.K(v,u),B.a([],n),B.a([],s))
q.aWO(w)
o.w.push(q)}}for(r=0;n=o.w,r<n.length;++r)n[r].bNJ(w,o)
x=o.ax.a5()
p=o.ax.jr(x)
if(x>0){p.am()
p.am()
p.am()
p.am()
p.am()
p.am()
p.cu()}},
blA(){var x,w,v,u,t,s,r=this,q=r.ay
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
s=new A.RZ(s)
s.aGW(w,r.a,r.b,r.f,x,u,t)
q.push(s);++t}r.y=A.cK5(r.r,r.f,r.a,r.b,r.x)}}
A.ayK.prototype={
gbo(d){return this.a}}
A.ayN.prototype={
aWO(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=a1.a5(),a0=$.hF()
a0.$flags&2&&B.F(a0)
a0[0]=d
d=$.kX()
e.a=d[0]
a0[0]=a1.a5()
e.b=d[0]
a0[0]=a1.a5()
e.c=d[0]
a0[0]=a1.a5()
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
a0=$.nE()
a0.$flags&2&&B.F(a0)
a0[0]=d
v=$.oI()[0]
a1.a5()
e.as.push(new A.RZ(v))}u=a1.a5()
if(u!==943868237)throw B.n(A.cc("Invalid PSD layer signature: "+D.c.jv(u,16)))
e.r=a1.a5()
e.w=a1.cu()
a1.cu()
e.y=a1.cu()
if(a1.cu()!==0)throw B.n(A.cc("Invalid PSD layer data"))
t=a1.a5()
s=a1.jr(t)
if(t>0){t=s.a5()
if(t>0){r=s.jr(t)
d=r.d
r.a5()
r.a5()
r.a5()
r.a5()
r.cu()
r.cu()
if(r.c-d===20)r.d+=2
else{r.cu()
r.cu()
r.a5()
r.a5()
r.a5()
r.a5()}}t=s.a5()
if(t>0)new A.bxg().aWM(s.jr(t))
t=s.cu()
e.Q=s.js(t)
q=4-D.c.ao(t,4)-1
if(q>0)s.d+=q
for(d=s.c,a0=e.ay,p=e.cy,o=y.cK;s.d<d;){u=s.a5()
if(u!==943868237)throw B.n(A.cc("PSD invalid signature for layer additional data: "+D.c.jv(u,16)))
n=s.js(4)
t=s.a5()
m=s.jy(t)
l=s.d+(m.c-m.d)
s.d=l
if((t&1)===1)s.d=l+1
a0.m(0,n,A.d7E(n,m))
if(n==="lrFX"){k=A.cf(o.a(a0.h(0,"lrFX")).b,null,0)
k.am()
j=k.am()
for(i=0;i<j;++i){k.js(4)
h=k.js(4)
g=k.a5()
if(h==="dsdw"){f=new A.ayJ()
p.push(f)
f.a=k.a5()
k.a5()
k.a5()
k.a5()
k.a5()
k.am()
k.am()
k.am()
k.am()
k.am()
k.js(8)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
J.v(k.a,k.d++)
k.am()
k.am()
k.am()
k.am()
k.am()}else if(h==="isdw"){f=new A.ayM()
p.push(f)
f.a=k.a5()
k.a5()
k.a5()
k.a5()
k.a5()
k.am()
k.am()
k.am()
k.am()
k.am()
k.js(8)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
J.v(k.a,k.d++)
k.am()
k.am()
k.am()
k.am()
k.am()}else if(h==="oglw"){f=new A.ayP()
p.push(f)
f.a=k.a5()
k.a5()
k.a5()
k.am()
k.am()
k.am()
k.am()
k.am()
k.js(8)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
if(f.a===2){k.am()
k.am()
k.am()
k.am()
k.am()}}else if(h==="iglw"){f=new A.ayL()
p.push(f)
f.a=k.a5()
k.a5()
k.a5()
k.am()
k.am()
k.am()
k.am()
k.am()
k.js(8)
f.b=J.v(k.a,k.d++)!==0
J.v(k.a,k.d++)
if(f.a===2){J.v(k.a,k.d++)
k.am()
k.am()
k.am()
k.am()
k.am()}}else if(h==="bevl"){f=new A.ayI()
p.push(f)
f.a=k.a5()
k.a5()
k.a5()
k.a5()
k.js(8)
k.js(8)
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
k.am()}}else if(h==="sofi"){f=new A.ayQ()
p.push(f)
f.a=k.a5()
k.js(4)
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
bNJ(d,e){var x,w,v,u,t,s=this,r=0
while(!0){x=s.as
x===$&&B.b()
if(!(r<x.length))break
x=x[r]
w=s.e
w===$&&B.b()
v=s.f
v===$&&B.b()
x.bNQ(d,w,v,e.f);++r}w=e.r
v=e.f
u=s.e
u===$&&B.b()
t=s.f
t===$&&B.b()
s.cx=A.cK5(w,v,u,t,x)}}
A.S_.prototype={}
A.bxh.prototype={
n8(d,e,f){var x,w,v,u=null,t=A.cK4(e)
this.a=t
x=1
if(x===1){t=t.aBu()
return t}for(w=u,v=0;v<x;++v){t=this.a
f=t==null?u:t.aBu()
if(f==null)continue
if(w==null){f.w=C.asZ
w=f}else w.nG(f)}return w}}
A.ayT.prototype={}
A.zE.prototype={
aN(d,e){return new A.zE(this.a*e,this.b*e,this.c*e)},
a7(d,e){return new A.zE(this.a+e.a,this.b+e.b,this.c+e.c)},
a3(d,e){return new A.zE(this.a-e.a,this.b-e.b,this.c-e.c)}}
A.mr.prototype={
aN(d,e){var x=this
return new A.mr(x.a*e,x.b*e,x.c*e,x.d*e)},
a7(d,e){var x=this
return new A.mr(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
a3(d,e){var x=this
return new A.mr(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)}}
A.a4E.prototype={
gb8(d){return this.b}}
A.S3.prototype={
gb8(d){return this.f}}
A.ayS.prototype={
gb8(d){return this.b}}
A.t5.prototype={
sO6(d){var x=this.a,w=this.b
x.$flags&2&&B.F(x)
x[w+1]=d},
RE(){var x=this.e,w=this.d
if(x)return new A.zE(C.h7[w>>>9],C.h7[w>>>4&31],C.f5[w&15])
else return new A.zE(C.f5[w>>>7&15],C.f5[w>>>3&15],C.xm[w&7])},
RH(){var x=this.e,w=this.d
if(x)return new A.mr(C.h7[w>>>9],C.h7[w>>>4&31],C.f5[w&15],255)
else return new A.mr(C.f5[w>>>7&15],C.f5[w>>>3&15],C.xm[w&7],C.xm[w>>>11&7])},
RF(){var x=this.r,w=this.f
if(x)return new A.zE(C.h7[w>>>10],C.h7[w>>>5&31],C.h7[w&31])
else return new A.zE(C.f5[w>>>8&15],C.f5[w>>>4&15],C.f5[w&15])},
RI(){var x=this.r,w=this.f
if(x)return new A.mr(C.h7[w>>>10],C.h7[w>>>5&31],C.h7[w&31],255)
else return new A.mr(C.f5[w>>>8&15],C.f5[w>>>4&15],C.f5[w&15],C.xm[w>>>12&7])},
LU(){var x=this,w=x.c?1:0,v=x.d,u=x.e?1:0,t=x.f,s=x.r?1:0
return(w|(v&16383)<<1|u<<15|(t&32767)<<16|s<<31)>>>0},
uR(d){var x=this,w=x.a[x.b+1]
x.c=(w&1)===1
x.sO6(x.LU())
x.d=w>>>1&16383
x.sO6(x.LU())
x.e=(w>>>15&1)===1
x.sO6(x.LU())
x.f=w>>>16&32767
x.sO6(x.LU())
x.r=(w>>>31&1)===1
x.sO6(x.LU())}}
A.bxm.prototype={
oQ(d){var x,w=this,v=d.length,u=v-(v>>>1&1431655765)>>>0
u=(u&858993459)+(u>>>2&858993459)
if((u+(u>>>4)>>>0&252645135)*16843009>>>0>>>24===1){x=w.b1i(d)
if(x!=null){w.a=d
return w.b=x}}x=w.b1y(d)
if(x!=null){w.a=d
return w.b=x}x=w.b1w(d)
if(x!=null){w.a=d
return w.b=x}return null},
b1y(d){var x,w,v=A.d_(d,!1,null,0)
if(v.a5()!==52)return null
if(v.a5()!==55727696)return null
x=B.a([0,0,0,0],y.t)
w=new A.S3(x)
v.a5()
w.b=v.a5()
x[0]=v.cu()
x[1]=v.cu()
x[2]=v.cu()
x[3]=v.cu()
v.a5()
v.a5()
w.f=v.a5()
w.r=v.a5()
v.a5()
v.a5()
v.a5()
v.a5()
w.Q=v.a5()
return w},
b1w(d){var x,w,v=A.d_(d,!1,null,0)
if(v.a5()!==52)return null
x=new A.a4E()
x.b=v.a5()
x.a=v.a5()
v.a5()
x.d=v.a5()
v.a5()
x.f=v.a5()
v.a5()
v.a5()
v.a5()
x.y=v.a5()
w=v.a5()
x.z=w
x.Q=v.a5()
if(w!==559044176)return null
return x},
b1i(d){var x,w,v,u,t,s,r=null,q=d.length,p=A.d_(d,!1,r,0)
if(p.a5()!==0)return r
x=new A.ayS()
x.b=p.a5()
x.a=p.a5()
p.a5()
p.a5()
p.a5()
p.a5()
p.a5()
p.a5()
p.a5()
w=p.a5()
x.y=w
if(w===559044176)return r
v=0
u=8
if(!(q===32)){t=0
while(!0){if(!(t<10)){v=1
break}s=t<<1>>>0
if((D.c.eu(64,s)&q)>>>0!==0){u=D.c.eu(16,t)
v=1
break}if((D.c.eu(128,s)&q)>>>0!==0){u=D.c.eu(16,t)
break}++t}if(t===10)return r}if((v+1)*2===4)return r
x.b=x.a=u
return x},
ko(d){var x,w,v=this,u=v.b
if(u==null||v.a==null)return null
if(u instanceof A.ayS){u=u.a
x=v.b
x=x.gb8(x)
w=v.a
w.toString
return v.a4W(u,x,w)}else if(u instanceof A.a4E){u=v.a
u.toString
return v.b1v(u)}else if(u instanceof A.S3){u=v.a
u.toString
return v.b1x(u)}return null},
n8(d,e,f){if(this.oQ(e)==null)return null
return this.ko(0)},
b1v(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.length
if(j<52||l.b==null)return k
x=l.b
x.toString
y.ab.a(x)
w=A.d_(d,!1,k,0)
w.d+=52
v=x.Q
if(v<1)v=(x.d&4096)!==0?6:1
if(v!==1)return k
u=x.a
t=x.b
if(u*t*x.f/8>j-52)return k
switch(x.d&255){case 16:s=A.i1(k,k,C.ac,0,C.bv,t,k,0,4,k,C.ac,u,!1)
for(x=s.a,x=x.ga6(x);x.q();){r=x.gL(x)
q=J.v(w.a,w.d++)
p=J.v(w.a,w.d++)
r.sah(0,p&240)
r.sar((p&15)<<4)
r.sav(0,q&240)
r.saG(0,(q&15)<<4)}return s
case 17:s=A.i1(k,k,C.ac,0,C.bv,t,k,0,4,k,C.ac,u,!1)
for(x=s.a,x=x.ga6(x);x.q();){r=x.gL(x)
o=w.am()
n=(o&1)!==0?255:0
r.sah(0,o>>>8&248)
r.sar(o>>>3&248)
r.sav(0,(o&62)<<2)
r.saG(0,n)}return s
case 18:s=A.i1(k,k,C.ac,0,C.bv,t,k,0,4,k,C.ac,u,!1)
for(x=s.a,x=x.ga6(x);x.q();){r=x.gL(x)
r.sah(0,J.v(w.a,w.d++))
r.sar(J.v(w.a,w.d++))
r.sav(0,J.v(w.a,w.d++))
r.saG(0,J.v(w.a,w.d++))}return s
case 19:s=A.i1(k,k,C.ac,0,C.bv,t,k,0,3,k,C.ac,u,!1)
for(x=s.a,x=x.ga6(x);x.q();){r=x.gL(x)
o=w.am()
r.sah(0,o>>>8&248)
r.sar(o>>>3&252)
r.sav(0,(o&31)<<3)}return s
case 20:s=A.i1(k,k,C.ac,0,C.bv,t,k,0,3,k,C.ac,u,!1)
for(x=s.a,x=x.ga6(x);x.q();){r=x.gL(x)
o=w.am()
r.sah(0,(o&31)<<3)
r.sar(o>>>2&248)
r.sav(0,o>>>7&248)}return s
case 21:s=A.i1(k,k,C.ac,0,C.bv,t,k,0,3,k,C.ac,u,!1)
for(x=s.a,x=x.ga6(x);x.q();){r=x.gL(x)
r.sah(0,J.v(w.a,w.d++))
r.sar(J.v(w.a,w.d++))
r.sav(0,J.v(w.a,w.d++))}return s
case 22:s=A.i1(k,k,C.ac,0,C.bv,t,k,0,1,k,C.ac,u,!1)
for(x=s.a,x=x.ga6(x);x.q();)x.gL(x).sah(0,J.v(w.a,w.d++))
return s
case 23:s=A.i1(k,k,C.ac,0,C.bv,t,k,0,4,k,C.ac,u,!1)
for(x=s.a,x=x.ga6(x);x.q();){r=x.gL(x)
n=J.v(w.a,w.d++)
m=J.v(w.a,w.d++)
r.sah(0,m)
r.sar(m)
r.sav(0,m)
r.saG(0,n)}return s
case 24:return k
case 25:return x.y===0?l.an1(u,t,w.hZ()):l.a4W(u,t,w.hZ())}return k},
b1x(d){var x,w,v,u=this
if(!(u.b instanceof A.S3))return null
x=A.d_(d,!1,null,0)
w=x.d+=52
v=y.aM.a(u.b)
x.d=w+v.Q
if(v.c[0]===0)switch(v.b){case 2:return u.an1(v.r,v.f,x.hZ())
case 3:return u.a4W(v.r,v.f,x.hZ())}return null},
an1(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=A.i1(b5,b5,C.ac,0,C.bv,c6,b5,0,3,b5,C.ac,c5,!1),b7=c5/4|0,b8=b7-1,b9=J.oK(D.C.gak(c7),0,null),c0=new A.t5(b9),c1=new A.t5(J.oK(D.C.gak(c7),0,null)),c2=new A.t5(J.oK(D.C.gak(c7),0,null)),c3=new A.t5(J.oK(D.C.gak(c7),0,null)),c4=new A.t5(J.oK(D.C.gak(c7),0,null))
for(x=0,w=0;x<b7;++x,w+=4)for(v=0,u=0;v<b7;++v,u+=4){c0.b=A.zF(v,x)<<1>>>0
c0.uR(0)
t=b9[c0.b]
s=c0.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&b8)>>>0
o=(p+1&b8)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&b8)>>>0
k=(l+1&b8)>>>0
c1.b=A.zF(l,p)<<1>>>0
c1.uR(0)
c2.b=A.zF(k,p)<<1>>>0
c2.uR(0)
c3.b=A.zF(l,o)<<1>>>0
c3.uR(0)
c4.b=A.zF(k,o)<<1>>>0
c4.uR(0)
j=c1.RE()
i=C.dr[r][0]
h=c2.RE()
g=C.dr[r][1]
f=c3.RE()
e=C.dr[r][2]
d=c4.RE()
a0=C.dr[r][3]
a1=c1.RF()
a2=C.dr[r][0]
a3=c2.RF()
a4=C.dr[r][1]
a5=c3.RF()
a6=C.dr[r][2]
a7=c4.RF()
a8=C.dr[r][3]
a9=C.Se[s+t&3]
b0=a9[0]
b1=a9[1]
b2=D.c.S((j.a*i+h.a*g+f.a*e+d.a*a0)*b0+(a1.a*a2+a3.a*a4+a5.a*a6+a7.a*a8)*b1,7)
b3=D.c.S((j.b*i+h.b*g+f.b*e+d.b*a0)*b0+(a1.b*a2+a3.b*a4+a5.b*a6+a7.b*a8)*b1,7)
b4=D.c.S((j.c*i+h.c*g+f.c*e+d.c*a0)*b0+(a1.c*a2+a3.c*a4+a5.c*a6+a7.c*a8)*b1,7)
b1=b6.a
if(b1!=null)b1.fn(m+u,n,b2,b3,b4)
t=t>>>2;++r}}}return b6},
a4W(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=A.i1(a4,a4,C.ac,0,C.bv,b5,a4,0,4,a4,C.ac,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.oK(D.C.gak(b6),0,null),a9=new A.t5(a8),b0=new A.t5(J.oK(D.C.gak(b6),0,null)),b1=new A.t5(J.oK(D.C.gak(b6),0,null)),b2=new A.t5(J.oK(D.C.gak(b6),0,null)),b3=new A.t5(J.oK(D.C.gak(b6),0,null))
for(x=0,w=0;x<a6;++x,w+=4)for(v=0,u=0;v<a6;++v,u+=4){a9.b=A.zF(v,x)<<1>>>0
a9.uR(0)
t=a8[a9.b]
s=a9.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&a7)>>>0
o=(p+1&a7)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&a7)>>>0
k=(l+1&a7)>>>0
b0.b=A.zF(l,p)<<1>>>0
b0.uR(0)
b1.b=A.zF(k,p)<<1>>>0
b1.uR(0)
b2.b=A.zF(l,o)<<1>>>0
b2.uR(0)
b3.b=A.zF(k,o)<<1>>>0
b3.uR(0)
j=b0.RH()
i=C.dr[r][0]
h=b1.RH()
g=C.dr[r][1]
g=new A.mr(j.a*i,j.b*i,j.c*i,j.d*i).a7(0,new A.mr(h.a*g,h.b*g,h.c*g,h.d*g))
h=b2.RH()
i=C.dr[r][2]
i=g.a7(0,new A.mr(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.RH()
g=C.dr[r][3]
f=i.a7(0,new A.mr(h.a*g,h.b*g,h.c*g,h.d*g))
g=b0.RI()
h=C.dr[r][0]
i=b1.RI()
j=C.dr[r][1]
j=new A.mr(g.a*h,g.b*h,g.c*h,g.d*h).a7(0,new A.mr(i.a*j,i.b*j,i.c*j,i.d*j))
i=b2.RI()
h=C.dr[r][2]
h=j.a7(0,new A.mr(i.a*h,i.b*h,i.c*h,i.d*h))
i=b3.RI()
j=C.dr[r][3]
e=h.a7(0,new A.mr(i.a*j,i.b*j,i.c*j,i.d*j))
d=C.Se[s+t&3]
j=d[0]
i=d[1]
a0=D.c.S(f.a*j+e.a*i,7)
a1=D.c.S(f.b*j+e.b*i,7)
a2=D.c.S(f.c*j+e.c*i,7)
a3=D.c.S(f.d*d[2]+e.d*d[3],7)
i=a5.a
if(i!=null)i.kA(m+u,n,a0,a1,a2,a3)
t=t>>>2;++r}}}return a5}}
A.aDe.prototype={
vD(d,e){var x,w=this
if(e.c-e.d<18)return
w.a=e.cu()
w.b=e.cu()
x=e.cu()
w.c=x<12?C.aFB[x]:C.z8
e.am()
w.e=e.am()
w.f=e.cu()
e.am()
e.am()
w.x=e.am()
w.y=e.am()
w.z=e.cu()
w.Q=e.cu()},
aED(){var x=this,w=x.z
if(w!==8&&w!==16&&w!==24&&w!==32)return!1
w=x.c
if(w===C.jz||w===C.jA){if(x.e>256||x.b!==1)return!1
w=x.f
if(w!==16&&w!==24&&w!==32)return!1}else if(x.b===1)return!1
return!0}}
A.ot.prototype={
J(){return"TgaImageType."+this.b}}
A.bJo.prototype={
n8(d,e,f){if(this.oQ(e)==null)return null
return this.ko(0)},
oQ(d){var x,w,v,u,t=this
t.a=new A.aDe(C.z8)
x=A.d_(d,!1,null,0)
t.b=x
w=x.jr(18)
t.a.vD(0,w)
if(!t.a.aED())return null
x=t.b
v=t.a
x.d+=v.a
u=v.c
if(u===C.jz||u===C.jA)v.as=x.jr(v.e*D.c.S(v.f,3)).hZ()
x=t.a
x.ax=t.b.d
return x},
ko(d){var x=this,w=x.a
if(w==null)return null
w=w.c
if(w===C.abW)return x.an0()
else if(w===C.abV||w===C.jA)return x.b1B()
else if(w===C.jz)return x.an0()
return null},
amW(d,e){var x,w,v,u,t,s,r,q=this,p=A.d_(d,!1,null,0),o=q.a.f
if(o===16){o=q.b
o===$&&B.b()
x=o.am()
w=x>>>7&248
v=x>>>2&248
u=(x&31)<<3
t=(x&32768)!==0?0:255
for(s=0;s<q.a.e;++s){e.uD(s,w)
e.uB(s,v)
e.uA(s,u)
e.uz(s,t)}}else{r=o===32
for(s=0;s<q.a.e;++s){u=J.v(p.a,p.d++)
v=J.v(p.a,p.d++)
w=J.v(p.a,p.d++)
t=r?J.v(p.a,p.d++):255
e.uD(s,w)
e.uB(s,v)
e.uA(s,u)
e.uz(s,t)}}},
b1B(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=h.z,f=g===16,e=f||g===32,d=h.x,a0=h.y,a1=e?4:3
h=h.c
x=A.i1(i,i,C.ac,0,C.bv,a0,i,0,a1,i,C.ac,d,h===C.jz||h===C.jA)
h=x.a
if((h==null?i:h.geZ())!=null){h=j.a.as
h.toString
d=x.a
d=d==null?i:d.geZ()
d.toString
j.amW(h,d)}w=x.gd2(0)
v=x.gb8(0)-1
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
if(d!=null)d.mR(u,v,q)
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
if(d!=null)d.kA(u,v,q,m,l,k)
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
if(d!=null)d.kA(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}}else if(h)for(p=0;p<s;++p){d=j.b
q=J.v(d.a,d.d++)
o=u+1
d=x.a
if(d!=null)d.mR(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}else if(f)for(p=0;p<s;++p){n=j.b.am()
k=(n&32768)!==0?0:255
o=u+1
d=x.a
if(d!=null)d.kA(u,v,n>>>7&248,n>>>2&248,(n&31)<<3,k)
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
if(d!=null)d.kA(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}if(u>=w){--v
if(v<0)break
u=0}}return x},
an0(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
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
r=A.i1(h,h,C.ac,0,C.bv,t,h,0,s,h,C.ac,u,x===C.jz||x===C.jA)
x=i.a
u=x.c
if(u===C.jz||u===C.jA){x=x.as
x.toString
u=r.a
u=u==null?h:u.geZ()
u.toString
i.amW(x,u)}if(w===8)for(q=r.gb8(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
g=i.b
o=J.v(g.a,g.d++)
g=r.a
if(g!=null)g.mR(p,q,o);++p}}else if(g)for(q=r.gb8(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
n=i.b.am()
m=(n&32768)!==0?0:255
g=r.a
if(g!=null)g.kA(p,q,n>>>7&248,n>>>2&248,(n&31)<<3,m);++p}}else for(q=r.gb8(0)-1;q>=0;--q){p=0
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
if(g!=null)g.kA(p,q,j,k,l,m);++p}}return r}}
A.bK3.prototype={
jq(d){var x,w,v,u,t=this
if(d===0)return 0
if(t.c===0){t.c=8
t.b=t.a.cu()}for(x=t.a,w=0;v=t.c,d>v;){w=D.c.f0(w,v)+(t.b&C.oz[v])
d-=v
t.c=8
t.b=J.v(x.a,x.d++)}if(d>0){if(v===0){t.c=8
t.b=x.cu()}x=D.c.f0(w,d)
v=t.b
u=t.c-d
w=x+(D.c.o9(v,u)&C.oz[d])
t.c=u}return w}}
A.aDh.prototype={
j(d){var x=this,w=x.a,v=$.cv5().h(0,w)
if(v!=null)return v.a+": "+x.b.j(0)+" "+x.c
return"<"+w+">: "+x.b.j(0)+" "+x.c},
pt(d){var x,w,v,u=this,t=u.e
if(t!=null)return t
t=u.f
t.d=u.d
x=u.c
w=u.b
v=t.jr(x*(w!==C.a0?C.kk[w.a]:0))
switch(w.a){case 1:return u.e=new A.uB(new Uint8Array(B.bV(v.jr(x).hZ())))
case 2:return u.e=new A.Ct(x===0?"":v.js(x-1))
case 7:return u.e=new A.uB(new Uint8Array(B.bV(v.jr(x).hZ())))
case 3:return u.e=A.cHF(v,x)
case 4:return u.e=A.cHA(v,x)
case 5:return u.e=A.cHB(v,x)
case 11:return u.e=A.cHH(v,x)
case 12:return u.e=A.cHz(v,x)
case 6:return u.e=new A.wA(new Int8Array(B.bV(J.cvc(D.C.gak(v.hZ()),0,x))))
case 8:return u.e=A.cHE(v,x)
case 9:return u.e=A.cHC(v,x)
case 10:return u.e=A.cHD(v,x)
case 0:return null}},
gp(d){return this.e}}
A.bK5.prototype={
bAN(d,e,f,g){var x,w,v,u=this
u.r=e
u.x=u.w=0
x=D.c.b0(u.a+7,8)
for(w=0,v=0;v<g;++v){u.a4U(d,w,f)
w+=x}},
a4U(d,e,f){var x,w,v,u,t,s,r,q,p=this
p.d=0
for(x=p.a,w=!0;f<x;){for(;w;){v=p.z0(10)
u=C.SG[v]
t=D.c.S(u,1)&15
if(t===12){u=C.vY[(v<<2&12|p.oV(2))>>>0]
s=D.c.S(u,1)
f+=D.c.S(u,4)&4095
p.lL(4-(s&7))}else if(t===0)throw B.n(A.cc("TIFFFaxDecoder0"))
else if(t===15)throw B.n(A.cc("TIFFFaxDecoder1"))
else{f+=D.c.S(u,5)&2047
p.lL(10-t)
if((u&1)===0){p.f[p.d++]=f
w=!1}}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}for(;!w;){u=C.NN[p.oV(4)]
r=u>>>5&2047
q=!0
if(r===100){u=C.Pk[p.z0(9)]
t=D.c.S(u,1)&15
r=D.c.S(u,5)&2047
if(t===12){p.lL(5)
u=C.vY[p.oV(4)]
s=D.c.S(u,1)
r=D.c.S(u,4)&4095
p.pT(d,e,f,r)
f+=r
p.lL(4-(s&7))}else if(t===15)throw B.n(A.cc("TIFFFaxDecoder2"))
else{p.pT(d,e,f,r)
f+=r
p.lL(9-t)
if((u&1)===0){p.f[p.d++]=f
w=q}}}else{if(r===200){u=C.NI[p.oV(2)]
r=u>>>5&2047
p.pT(d,e,f,r)
f+=r
p.lL(2-(u>>>1&15))
p.f[p.d++]=f}else{p.pT(d,e,f,r)
f+=r
p.lL(4-(u>>>1&15))
p.f[p.d++]=f}w=q}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}}p.f[p.d++]=f},
bAO(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.r=a0
e.z=3
e.x=e.w=0
x=e.a
w=D.c.b0(x+7,8)
v=B.bQ(2,null,!1,y.s)
e.at=a3&1
e.as=a3>>>2&1
if(e.ath()!==1)throw B.n(A.cc("TIFFFaxDecoder3"))
e.a4U(d,0,a1)
for(u=w,t=1;t<a2;++t){if(e.ath()===0){s=e.e
e.e=e.f
e.f=s
e.y=0
r=a1
q=-1
p=!0
o=0
while(!0){r.toString
if(!(r<x))break
e.ap3(q,p,v)
n=v[0]
m=v[1]
l=C.Sm[e.oV(7)]&255
k=l>>>3&15
j=l&7
if(k===0){if(!p){m.toString
e.pT(d,u,r,m-r)}e.lL(7-j)
r=m
q=r}else if(k===1){e.lL(7-j)
i=o+1
h=i+1
if(p){r+=e.TU()
e.f[o]=r
g=e.TT()
e.pT(d,u,r,g)
r+=g
e.f[i]=r}else{g=e.TT()
e.pT(d,u,r,g)
r+=g
e.f[o]=r
r+=e.TU()
e.f[i]=r}o=h
q=r}else{if(k<=8){n.toString
f=n+(k-5)
i=o+1
e.f[o]=f
p=!p
if(p)e.pT(d,u,r,f-r)
e.lL(7-j)}else throw B.n(A.cc("TIFFFaxDecoder4"))
r=f
o=i
q=r}}e.f[o]=r
e.d=o+1}else e.a4U(d,u,a1)
u+=w}},
bAU(a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.r=a4
a2.z=4
a2.x=a2.w=0
x=a2.a
w=D.c.b0(x+7,8)
v=B.bQ(2,null,!1,y.s)
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
a2.ap3(p,o,v)
m=v[0]
l=v[1]
k=C.Sm[a2.oV(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
a2.pT(a3,t,q,l-q)}a2.lL(7-i)
q=l
p=q}else if(j===1){a2.lL(7-i)
h=n+1
g=h+1
if(o){q+=a2.TU()
r[n]=q
f=a2.TT()
a2.pT(a3,t,q,f)
q+=f
r[h]=q}else{f=a2.TT()
a2.pT(a3,t,q,f)
q+=f
r[n]=q
q+=a2.TU()
r[h]=q}n=g
p=q}else if(j<=8){m.toString
e=m+(j-5)
h=n+1
r[n]=e
o=!o
if(o)a2.pT(a3,t,q,e-q)
a2.lL(7-i)
q=e
n=h
p=q}else if(j===11){if(a2.oV(3)!==7)throw B.n(A.cc("TIFFFaxDecoder5"))
for(d=0,a0=!1;!a0;o=a1){for(;a2.oV(1)!==1;)++d
if(d>5){d-=6
if(!o&&d>0){h=n+1
r[n]=q
n=h}q+=d
if(d>0)o=!0
a1=a2.oV(1)===0
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
a2.pT(a3,t,q,1);++q
n=h}}}else throw B.n(A.cc("TIFFFaxDecoder5 "+j))}r[n]=q
a2.d=n+1
t+=w}},
TU(){var x,w,v,u,t,s,r=this
for(x=0,w=!0;w;){v=r.z0(10)
u=C.SG[v]
t=D.c.S(u,1)&15
if(t===12){u=C.vY[(v<<2&12|r.oV(2))>>>0]
s=D.c.S(u,1)
x+=D.c.S(u,4)&4095
r.lL(4-(s&7))}else if(t===0)throw B.n(A.cc("TIFFFaxDecoder0"))
else if(t===15)throw B.n(A.cc("TIFFFaxDecoder1"))
else{x+=D.c.S(u,5)&2047
r.lL(10-t)
if((u&1)===0)w=!1}}return x},
TT(){var x,w,v,u,t,s,r=this
for(x=0,w=!1;!w;){v=C.NN[r.oV(4)]
u=v>>>5&2047
if(u===100){v=C.Pk[r.z0(9)]
t=D.c.S(v,1)&15
s=D.c.S(v,5)
if(t===12){r.lL(5)
v=C.vY[r.oV(4)]
s=D.c.S(v,1)
x+=D.c.S(v,4)&4095
r.lL(4-(s&7))}else if(t===15)throw B.n(A.cc("TIFFFaxDecoder2"))
else{x+=s&2047
r.lL(9-t)
if((v&1)===0)w=!0}}else{if(u===200){v=C.NI[r.oV(2)]
x+=v>>>5&2047
r.lL(2-(v>>>1&15))}else{x+=u
r.lL(4-(v>>>1&15))}w=!0}}return x},
ath(){var x,w,v=this,u="TIFFFaxDecoder8",t=v.as
if(t===0){if(v.z0(12)!==1)throw B.n(A.cc("TIFFFaxDecoder6"))}else if(t===1){t=v.w
t.toString
x=8-t
if(v.z0(x)!==0)throw B.n(A.cc(u))
if(x<4)if(v.z0(8)!==0)throw B.n(A.cc(u))
for(;w=v.z0(8),w!==1;)if(w!==0)throw B.n(A.cc(u))}if(v.at===0)return 1
else return v.oV(1)},
ap3(d,e,f){var x,w=this,v=w.e,u=w.d,t=w.y,s=t>0?t-1:0
s=e?(s&4294967294)>>>0:(s|1)>>>0
for(x=s;x<u;x+=2){t=v[x]
t.toString
d.toString
if(t>d){w.y=x
f[0]=t
break}}t=x+1
if(t<u)f[1]=v[t]},
pT(d,e,f,g){var x,w,v,u,t,s=8*e+f,r=s+g,q=D.c.S(s,3),p=s&7
if(p>0){x=D.c.f0(1,7-p)
w=J.v(d.a,d.d+q)
while(!0){if(!(x>0&&s<r))break
w=(w|x)>>>0
x=x>>>1;++s}d.m(0,q,w)}q=D.c.S(s,3)
for(v=r-7;s<v;q=u){u=q+1
J.bY(d.a,d.d+q,255)
s+=8}for(;s<r;){q=D.c.S(s,3)
v=J.v(d.a,d.d+q)
t=D.c.f0(1,7-(s&7))
J.bY(d.a,d.d+q,(v|t)>>>0);++s}},
z0(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.r
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
r=C.mk[J.v(j.a,x+v)&255]
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=C.mk[J.v(u,x+j)&255]
else{t=C.mk[J.v(u,x+j)&255]
j=k.r
s=C.mk[J.v(j.a,j.d+(v+2))&255]}}}else throw B.n(A.cc("TIFFFaxDecoder7"))
j=k.w
j.toString
q=8-j
p=d-q
if(p>8){o=p-8
n=8}else{n=p
o=0}j=k.x
j.toString
j=k.x=j+1
m=D.c.f0(r&C.oz[q],p)
l=D.c.h7(t&C.DJ[n],8-n)
if(o!==0){l=D.c.f0(l,o)|D.c.h7(s&C.DJ[o],8-o)
k.x=j+1
k.w=o}else if(n===8){k.w=0
k.x=j+1}else k.w=n
return(m|l)>>>0},
oV(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.r
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
s=C.mk[J.v(m.a,x+v)&255]
if(!(v===w)){m=n.r
t=C.mk[J.v(m.a,m.d+(v+1))&255]}}else throw B.n(A.cc("TIFFFaxDecoder7"))
m=n.w
m.toString
r=8-m
q=d-r
p=r-d
if(p>=0){o=D.c.h7(s&C.oz[r],p)
m+=d
n.w=m
if(m===8){n.w=0
m=n.x
m.toString
n.x=m+1}}else{o=(D.c.f0(s&C.oz[r],-p)|D.c.h7(t&C.DJ[q],8-q))>>>0
m=n.x
m.toString
n.x=m+1
n.w=q}return o},
lL(d){var x,w=this,v=w.w
v.toString
x=v-d
if(x<0){v=w.x
v.toString
w.x=v-1
w.w=8+x}else w.w=x}}
A.aDi.prototype={
aX2(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=A.cf(a0,f,0),d=a0.am()
for(x=g.a,w=0;w<d;++w){v=a0.am()
u=a0.am()
t=C.Qq[u]
s=C.kk[u]
r=a0.a5()
if(r*s>4)q=a0.a5()
else{q=a0.d
a0.d=q+4}p=new A.aDh(v,t,r,q,e)
x.m(0,v,p)
if(v===256){o=p.pt(0)
o=o==null?f:o.C(0)
g.b=o==null?0:o}else if(v===257){o=p.pt(0)
o=o==null?f:o.C(0)
g.c=o==null?0:o}else if(v===262){n=p.pt(0)
m=n==null?f:n.C(0)
if(m==null)m=17
if(m<17)g.d=C.aE_[m]
else g.d=C.H8}else if(v===259){o=p.pt(0)
o=o==null?f:o.C(0)
g.e=o==null?0:o}else if(v===258){o=p.pt(0)
o=o==null?f:o.C(0)
g.f=o==null?0:o}else if(v===277){o=p.pt(0)
o=o==null?f:o.C(0)
g.r=o==null?0:o}else if(v===317){o=p.pt(0)
o=o==null?f:o.C(0)
g.Q=o==null?0:o}else if(v===339){o=p.pt(0)
n=o==null?f:o.C(0)
g.x=C.aEw[n==null?0:n]}else if(v===320){n=p.pt(0)
if(n!=null){o=J.cY0(D.C.gak(n.ui()))
g.id=o
g.k1=0
o=o.length/3|0
g.k2=o
g.k3=o*2}}}l=g.id
o=l!=null
if(o&&g.d===C.H9)g.r=1
if(g.b===0||g.c===0)return
if(o&&g.f===8){k=l.length
for(o=l.$flags|0,w=0;w<k;++w){j=l[w]
o&2&&B.F(l)
l[w]=j>>>8}}if(g.d===C.H7)g.z=!0
g.w=g.r
if(x.a0(0,324)){g.ay=g.G9(322)
g.ch=g.G9(323)
g.CW=g.VU(324)
g.cx=g.VU(325)}else{g.ay=g.VT(322,g.b)
if(!x.a0(0,278))g.ch=g.VT(323,g.c)
else{i=g.G9(278)
if(i===-1)g.ch=g.c
else g.ch=i}g.CW=g.VU(273)
g.cx=g.VU(279)}o=g.b
j=g.ay
g.cy=D.c.hz(o+j-1,j)
o=g.c
h=g.ch
g.db=D.c.hz(o+h-1,h)
g.dx=j*h*g.r
g.dy=g.VT(266,1)
g.fr=g.G9(292)
g.fx=g.G9(293)
g.G9(338)
switch(g.d.a){case 0:case 1:x=g.f
if(x===1&&g.r===1)g.y=C.H6
else if(x===4&&g.r===1)g.y=C.bFQ
else if(D.c.ao(x,8)===0){x=g.r
if(x===1)g.y=C.bFR
else if(x===2)g.y=C.bFS
else g.y=C.pK}break
case 2:if(D.c.ao(g.f,8)===0){x=g.r
if(x===3)g.y=C.abY
else if(x===4)g.y=C.bFU
else g.y=C.pK}break
case 3:x=!1
if(g.r===1)if(g.id!=null){x=g.f
x=x===4||x===8||x===16}if(x)g.y=C.bFT
break
case 4:if(g.f===1&&g.r===1)g.y=C.H6
break
case 6:if(g.e===7&&g.f===8&&g.r===3)g.y=C.abY
else{if(x.a0(0,530)){n=x.h(0,530).pt(0)
g.as=n.C(0)
x=g.at=n.ju(0,1)}else x=g.at=g.as=2
o=g.as
o===$&&B.b()
if(o*x===1)g.y=C.pK
else if(g.f===8&&g.r===3)g.y=C.bFV}break
case 5:if(D.c.ao(g.f,8)===0)g.y=C.pK
x=g.r
if(x===4)g.w=3
else if(x===5)g.w=4
break
default:if(D.c.ao(g.f,8)===0)g.y=C.pK
break}},
de(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.x,d=e===C.pJ,a0=e===C.b6
e=g.f
if(e===1)x=C.fT
else if(e===2)x=C.hJ
else{if(e===4)e=C.hK
else if(d&&e===16)e=C.iv
else if(d&&e===32)e=C.k5
else if(d&&e===64)e=C.lK
else if(a0&&e===8)e=C.lL
else if(a0&&e===16)e=C.lM
else if(a0&&e===32)e=C.lN
else if(e===16)e=C.cC
else e=e===32?C.k6:C.ac
x=e}w=g.id!=null&&g.d===C.H9
v=w?3:g.w
e=g.b
u=A.i1(f,f,x,0,C.bv,g.c,f,0,v,f,x,e,w)
if(w){e=u.a
e=e==null?f:e.geZ()
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
e.pC(k,t[l],t[m],t[n])}}j=0
i=0
while(!0){e=g.db
e===$&&B.b()
if(!(j<e))break
h=0
while(!0){e=g.cy
e===$&&B.b()
if(!(h<e))break
g.b1C(a2,u,h,j);++h;++i}++j}return u},
b1C(b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null
if(a8.y===C.H6){a8.b1l(b0,b1,b2,b3)
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
else if(u===5){w=A.d_(new Uint8Array(p),!1,a9,0)
v=A.cIE()
try{J.cY5(v,A.cf(b0,x,0),w.a)}catch(o){}if(a8.Q===2)for(n=0;n<a8.ch;++n){m=a8.r
u=a8.ay
l=m*(n*u+1)
k=u*m
for(;m<k;++m){u=w
r=J.v(u.a,u.d+l)
j=w
i=a8.r
i=J.v(j.a,j.d+(l-i))
J.bY(u.a,u.d+l,r+i);++l}}}else if(u===32773){w=A.d_(new Uint8Array(p),!1,a9,0)
a8.an_(b0,p,w.a)}else if(u===32946)w=A.d_(C.jP.CK(b0.JK(0,0,x)),!1,a9,0)
else if(u===8)w=A.d_(C.jP.CK(b0.JK(0,0,x)),!1,a9,0)
else if(u===6){a8.beu(new A.ati().de(0,y.D.a(b0.JK(0,0,x))),b1,s,q,a8.ay,a8.ch)
return}else throw B.n(A.cc("Unsupported Compression Type: "+u))
h=B.a([0,0,0],y.t)
for(g=q,f=0;f<a8.ch;++f,++g)for(e=s,d=0;d<a8.ay;++d,++e){u=w
if(u.d>=u.c||e>=a8.b||g>=a8.c)break
u=a8.r
if(u===1){u=a8.x
if(u===C.pJ){u=a8.f
if(u===32){u=w.a5()
r=$.hF()
r.$flags&2&&B.F(r)
r[0]=u
a0=$.Gi()[0]}else if(u===64)a0=w.a0T()
else if(u===16){u=w.am()
r=$.i0
a0=(r!=null?r:A.iU())[u]}else a0=0
if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.mR(e,g,a0)}}else{r=a8.f
if(r===8)if(u===C.b6){u=w
u=J.v(u.a,u.d++)
r=$.nF()
r.$flags&2&&B.F(r)
r[0]=u
a0=$.oJ()[0]}else{u=w
a0=J.v(u.a,u.d++)}else if(r===16)if(u===C.b6){u=w.am()
r=$.nE()
r.$flags&2&&B.F(r)
r[0]=u
a0=$.oI()[0]}else a0=w.am()
else if(r===32)if(u===C.b6){u=w.a5()
r=$.hF()
r.$flags&2&&B.F(r)
r[0]=u
a0=$.kX()[0]}else a0=w.a5()
else a0=0
if(a8.d===C.H7){u=b1.a
a1=u==null?a9:u.gcl()
a0=(a1==null?0:a1)-a0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.mR(e,g,a0)}}}else if(u===2){u=a8.f
if(u===8){if(a8.x===C.b6){u=w
u=J.v(u.a,u.d++)
r=$.nF()
r.$flags&2&&B.F(r)
r[0]=u
a2=$.oJ()[0]}else{u=w
a2=J.v(u.a,u.d++)}if(a8.x===C.b6){u=w
u=J.v(u.a,u.d++)
r=$.nF()
r.$flags&2&&B.F(r)
r[0]=u
a3=$.oJ()[0]}else{u=w
a3=J.v(u.a,u.d++)}}else if(u===16){if(a8.x===C.b6){u=w.am()
r=$.nE()
r.$flags&2&&B.F(r)
r[0]=u
a2=$.oI()[0]}else a2=w.am()
if(a8.x===C.b6){u=w.am()
r=$.nE()
r.$flags&2&&B.F(r)
r[0]=u
a3=$.oI()[0]}else a3=w.am()}else if(u===32){if(a8.x===C.b6){u=w.a5()
r=$.hF()
r.$flags&2&&B.F(r)
r[0]=u
a2=$.kX()[0]}else a2=w.a5()
if(a8.x===C.b6){u=w.a5()
r=$.hF()
r.$flags&2&&B.F(r)
r[0]=u
a3=$.kX()[0]}else a3=w.a5()}else{a2=0
a3=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.fn(e,g,a2,a3,0)}}else if(u===3){u=a8.x
if(u===C.pJ){u=a8.f
if(u===32){u=w.a5()
r=$.hF()
r.$flags&2&&B.F(r)
r[0]=u
u=$.Gi()
a4=u[0]
r[0]=w.a5()
a5=u[0]
r[0]=w.a5()
a6=u[0]}else{a5=0
a6=0
if(u===64)a4=w.a0T()
else if(u===16){u=w.am()
r=$.i0
a4=(r!=null?r:A.iU())[u]
u=w.am()
r=$.i0
a5=(r!=null?r:A.iU())[u]
u=w.am()
r=$.i0
a6=(r!=null?r:A.iU())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.fn(e,g,a4,a5,a6)}}else{r=a8.f
if(r===8){if(u===C.b6){u=w
u=J.v(u.a,u.d++)
r=$.nF()
r.$flags&2&&B.F(r)
r[0]=u
a4=$.oJ()[0]}else{u=w
a4=J.v(u.a,u.d++)}if(a8.x===C.b6){u=w
u=J.v(u.a,u.d++)
r=$.nF()
r.$flags&2&&B.F(r)
r[0]=u
a5=$.oJ()[0]}else{u=w
a5=J.v(u.a,u.d++)}if(a8.x===C.b6){u=w
u=J.v(u.a,u.d++)
r=$.nF()
r.$flags&2&&B.F(r)
r[0]=u
a6=$.oJ()[0]}else{u=w
a6=J.v(u.a,u.d++)}}else if(r===16){if(u===C.b6){u=w.am()
r=$.nE()
r.$flags&2&&B.F(r)
r[0]=u
a4=$.oI()[0]}else a4=w.am()
if(a8.x===C.b6){u=w.am()
r=$.nE()
r.$flags&2&&B.F(r)
r[0]=u
a5=$.oI()[0]}else a5=w.am()
if(a8.x===C.b6){u=w.am()
r=$.nE()
r.$flags&2&&B.F(r)
r[0]=u
a6=$.oI()[0]}else a6=w.am()}else if(r===32){if(u===C.b6){u=w.a5()
r=$.hF()
r.$flags&2&&B.F(r)
r[0]=u
a4=$.kX()[0]}else a4=w.a5()
if(a8.x===C.b6){u=w.a5()
r=$.hF()
r.$flags&2&&B.F(r)
r[0]=u
a5=$.kX()[0]}else a5=w.a5()
if(a8.x===C.b6){u=w.a5()
r=$.hF()
r.$flags&2&&B.F(r)
r[0]=u
a6=$.kX()[0]}else a6=w.a5()}else{a4=0
a5=0
a6=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.fn(e,g,a4,a5,a6)}}}else if(u>=4)if(a8.x===C.pJ){u=a8.f
if(u===32){u=w.a5()
r=$.hF()
r.$flags&2&&B.F(r)
r[0]=u
u=$.Gi()
a4=u[0]
r[0]=w.a5()
a5=u[0]
r[0]=w.a5()
a6=u[0]
r[0]=w.a5()
a7=u[0]}else{a5=0
a6=0
a7=0
if(u===64)a4=w.a0T()
else if(u===16){u=w.am()
r=$.i0
a4=(r!=null?r:A.iU())[u]
u=w.am()
r=$.i0
a5=(r!=null?r:A.iU())[u]
u=w.am()
r=$.i0
a6=(r!=null?r:A.iU())[u]
u=w.am()
r=$.i0
a7=(r!=null?r:A.iU())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.kA(e,g,a4,a5,a6,a7)}}else{u=b1.a
a3=u==null?a9:u.gcl()
if(a3==null)a3=0
u=a8.f
if(u===8){if(a8.x===C.b6){u=w
u=J.v(u.a,u.d++)
r=$.nF()
r.$flags&2&&B.F(r)
r[0]=u
a4=$.oJ()[0]}else{u=w
a4=J.v(u.a,u.d++)}if(a8.x===C.b6){u=w
u=J.v(u.a,u.d++)
r=$.nF()
r.$flags&2&&B.F(r)
r[0]=u
a5=$.oJ()[0]}else{u=w
a5=J.v(u.a,u.d++)}if(a8.x===C.b6){u=w
u=J.v(u.a,u.d++)
r=$.nF()
r.$flags&2&&B.F(r)
r[0]=u
a6=$.oJ()[0]}else{u=w
a6=J.v(u.a,u.d++)}if(a8.x===C.b6){u=w
u=J.v(u.a,u.d++)
r=$.nF()
r.$flags&2&&B.F(r)
r[0]=u
a7=$.oJ()[0]}else{u=w
a7=J.v(u.a,u.d++)}if(a8.r===5)if(a8.x===C.b6){u=w
u=J.v(u.a,u.d++)
r=$.nF()
r.$flags&2&&B.F(r)
r[0]=u
a3=$.oJ()[0]}else{u=w
a3=J.v(u.a,u.d++)}}else if(u===16){if(a8.x===C.b6){u=w.am()
r=$.nE()
r.$flags&2&&B.F(r)
r[0]=u
a4=$.oI()[0]}else a4=w.am()
if(a8.x===C.b6){u=w.am()
r=$.nE()
r.$flags&2&&B.F(r)
r[0]=u
a5=$.oI()[0]}else a5=w.am()
if(a8.x===C.b6){u=w.am()
r=$.nE()
r.$flags&2&&B.F(r)
r[0]=u
a6=$.oI()[0]}else a6=w.am()
if(a8.x===C.b6){u=w.am()
r=$.nE()
r.$flags&2&&B.F(r)
r[0]=u
a7=$.oI()[0]}else a7=w.am()
if(a8.r===5)if(a8.x===C.b6){u=w.am()
r=$.nE()
r.$flags&2&&B.F(r)
r[0]=u
a3=$.oI()[0]}else a3=w.am()}else if(u===32){if(a8.x===C.b6){u=w.a5()
r=$.hF()
r.$flags&2&&B.F(r)
r[0]=u
a4=$.kX()[0]}else a4=w.a5()
if(a8.x===C.b6){u=w.a5()
r=$.hF()
r.$flags&2&&B.F(r)
r[0]=u
a5=$.kX()[0]}else a5=w.a5()
if(a8.x===C.b6){u=w.a5()
r=$.hF()
r.$flags&2&&B.F(r)
r[0]=u
a6=$.kX()[0]}else a6=w.a5()
if(a8.x===C.b6){u=w.a5()
r=$.hF()
r.$flags&2&&B.F(r)
r[0]=u
a7=$.kX()[0]}else a7=w.a5()
if(a8.r===5)if(a8.x===C.b6){u=w.a5()
r=$.hF()
r.$flags&2&&B.F(r)
r[0]=u
a3=$.kX()[0]}else a3=w.a5()}else{a4=0
a5=0
a6=0
a7=0}if(a8.d===C.abZ){A.cQq(a4,a5,a6,a7,h)
a4=h[0]
a5=h[1]
a6=h[2]
a7=a3}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.kA(e,g,a4,a5,a6,a7)}}}}else throw B.n(A.cc("Unsupported bitsPerSample: "+u))},
beu(d,e,f,g,h,i){var x,w,v,u
for(x=0;x<i;++x)for(w=x+g,v=0;v<h;++v){u=d.a
u=u==null?null:u.ei(v,x,null)
if(u==null)u=new A.fq()
e.B3(v+f,w,u)}},
b1l(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.cy
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
if(r===32773){q=D.c.ao(a2,8)===0?D.c.b0(a2,8)*u:(D.c.b0(a2,8)+1)*u
x=A.d_(new Uint8Array(a2*u),!1,a1,0)
a0.an_(a3,q,x.a)}else if(r===5){x=A.d_(new Uint8Array(a2*u),!1,a1,0)
A.cIE().HE(0,A.cf(a3,s,0),x.a)
if(a0.Q===2)for(p=0;p<a0.c;++p){o=a0.r
n=o*(p*a0.b+1)
for(;o<a0.b*a0.r;++o){a2=x
u=J.v(a2.a,a2.d+n)
r=x
m=a0.r
m=J.v(r.a,r.d+(n-m))
J.bY(a2.a,a2.d+n,u+m);++n}}}else if(r===2){x=A.d_(new Uint8Array(a2*u),!1,a1,0)
try{A.czk(a0.dy,a0.ay,a0.ch).bAN(x,a3,0,a0.ch)}catch(l){}}else if(r===3){x=A.d_(new Uint8Array(a2*u),!1,a1,0)
try{A.czk(a0.dy,a0.ay,a0.ch).bAO(x,a3,0,a0.ch,a0.fr)}catch(l){}}else if(r===4){x=A.d_(new Uint8Array(a2*u),!1,a1,0)
try{A.czk(a0.dy,a0.ay,a0.ch).bAU(x,a3,0,a0.ch,a0.fx)}catch(l){}}else if(r===8)x=A.d_(C.jP.CK(a3.JK(0,0,s)),!1,a1,0)
else if(r===32946)x=A.d_(C.jP.CK(a3.JK(0,0,s)),!1,a1,0)
else if(r===1)x=a3
else throw B.n(A.cc("Unsupported Compression Type: "+r))
k=new A.bK3(x)
j=a4.gcl()
a2=a0.z
i=a2?j:0
h=a2?0:j
for(g=t,f=0;f<a0.ch;++f,++g){for(e=v,d=0;d<a0.ay;++d,++e){a2=a4.a
u=a2==null
r=u?a1:a2.b
if(g<(r==null?0:r)){a2=u?a1:a2.a
a2=e>=(a2==null?0:a2)}else a2=!0
if(a2)break
a2=k.jq(1)
u=a4.a
if(a2===0){if(u!=null)u.fn(e,g,i,0,0)}else if(u!=null)u.fn(e,g,h,0,0)}k.c=0}},
an_(d,e,f){var x,w,v,u,t,s,r,q,p,o
for(x=J.d0(f),w=0,v=0;v<e;){u=w+1
t=J.v(d.a,d.d+w)
s=$.nF()
s.$flags&2&&B.F(s)
s[0]=t
r=$.oJ()[0]
if(r>=0&&r<=127)for(t=r+1,w=u,q=0;q<t;++q,v=p,w=u){p=v+1
u=w+1
x.m(f,v,J.v(d.a,d.d+w))}else{t=r<=-1&&r>=-127
w=u+1
if(t){o=J.v(d.a,d.d+u)
for(t=-r+1,q=0;q<t;++q,v=p){p=v+1
x.m(f,v,o)}}}}},
VT(d,e){var x=this.a
if(!x.a0(0,d))return e
x=x.h(0,d).pt(0)
x=x==null?null:x.C(0)
return x==null?0:x},
G9(d){return this.VT(d,0)},
VU(d){var x,w=this.a
if(!w.a0(0,d))return null
x=w.h(0,d)
w=x.pt(0)
w.toString
return B.qp(x.c,w.gxT(w),!0,y.p)}}
A.Ld.prototype={
J(){return"TiffFormat."+this.b}}
A.kR.prototype={
J(){return"TiffPhotometricType."+this.b}}
A.tp.prototype={
J(){return"TiffImageType."+this.b}}
A.bK6.prototype={}
A.bo0.prototype={
HE(d,e,f){var x,w,v,u,t,s,r=this
r.r=f
x=J.bu(f)
r.w=0
w=y.D.a(e.a)
r.e=w
r.f=w.length
r.b=e.d
if(w[0]===0&&w[1]===1)throw B.n(A.cc("Invalid LZW Data"))
r.aqO()
r.d=r.c=0
v=r.a5D()
w=r.x
u=0
while(!0){if(!(v!==257&&r.w<x))break
if(v===256){r.aqO()
v=r.a5D()
r.as=0
if(v===257)break
J.bY(r.r,r.w++,v)
u=v}else{t=r.Q
t.toString
if(v<t){r.apj(v)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bY(r.r,r.w++,w[s])
r.akH(u,w[r.as-1])}else{r.apj(u)
t=r.as
t===$&&B.b()
s=t-1
for(;s>=0;--s)J.bY(r.r,r.w++,w[s])
J.bY(r.r,r.w++,w[r.as-1])
r.akH(u,w[r.as-1])}u=v}v=r.a5D()}},
akH(d,e){var x,w=this,v=w.y
v===$&&B.b()
x=w.Q
x.toString
v.$flags&2&&B.F(v)
v[x]=e
v=w.z
v===$&&B.b()
v.$flags&2&&B.F(v)
v[x]=d
x=w.Q=x+1
if(x===511)w.a=10
else if(x===1023)w.a=11
else if(x===2047)w.a=12},
apj(d){var x,w,v,u,t,s,r=this
r.as=0
x=r.x
r.as=1
w=r.y
w===$&&B.b()
v=w[d]
x.$flags&2&&B.F(x)
x[0]=v
v=r.z
v===$&&B.b()
u=v[d]
for(t=1;u!==4098;t=s){s=t+1
r.as=s
x[t]=w[u]
u=v[u]}},
a5D(){var x,w,v,u,t=this,s=t.b,r=t.f
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
return D.c.h7(t.c,s)&C.azy[w-9]},
aqO(){var x,w,v=this
v.y=new Uint8Array(4096)
x=new Uint32Array(4096)
v.z=x
D.bz.ma(x,0,4096,4098)
for(x=v.y,w=0;w<256;++w){x.$flags&2&&B.F(x)
x[w]=w}v.a=9
v.Q=258}}
A.bK4.prototype={
ko(d){var x,w,v=this.a
if(v==null)return null
v=v.f[d]
x=this.c
x===$&&B.b()
w=v.de(0,x)
return w},
n8(d,e,f){var x=this,w=A.d_(e,!1,null,0)
x.c=w
w=x.atj(w)
x.a=w
if(w==null)return null
return x.ko(0)},
atj(d){var x,w,v,u,t,s,r,q,p,o=null,n=B.a([],y._),m=new A.bK6(n),l=d.am()
if(l!==18761&&l!==19789)return o
if(l===19789)d.e=!0
else d.e=!1
v=d.am()
m.d=v
if(v!==42)return o
u=d.a5()
t=A.cf(d,o,0)
t.d=u
x=t
for(v=y.p,s=y.aL;u!==0;){w=null
try{r=new A.aDi(B.K(v,s),C.H8,C.abX,C.bFW)
r.aX2(x)
w=r
q=w
if(!(q.b!==0&&q.c!==0))break}catch(p){break}n.push(w)
if(n.length===1){q=n[0]
m.a=q.b
m.b=q.c}u=x.a5()
if(u!==0)x.d=u}return n.length!==0?m:o}}
A.bPs.prototype={
Ot(){var x,w=this.a,v=w.rY()
if((v&1)!==0)return!1
if((v>>>1&7)>3)return!1
if((v>>>4&1)===0)return!1
this.f.d=v>>>5
if(w.rY()!==2752925)return!1
x=this.b
x.a=w.am()
x.b=w.am()
return!0},
om(d){var x,w,v,u=this,t=null
if(!u.b5Y())return t
x=u.b
w=x.a
u.d=A.i1(t,t,C.ac,0,C.bv,x.b,t,0,4,t,C.ac,w,!1)
u.bdI()
if(!u.bjF())return t
x=x.w
if(x.length!==0){v=A.d_(new B.eR(x),!1,t,0)
x=u.d
x.toString
x.e=A.cGv(v)}return u.d},
b5Y(){var x,w,v,u,t=this
if(!t.Ot())return!1
t.fr=A.dcM()
for(x=t.dy,w=0;w<4;++w){v=new Int32Array(2)
u=new Int32Array(2)
x[w]=new A.aEZ(v,u,new Int32Array(2))}x=t.b
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
u=A.cN5(v.jy(u))
t.c=u
v.d+=x.d
u.dz(1)
t.c.dz(1)
t.bjN(t.x,t.fr)
t.bjE()
if(!t.bjI(v))return!1
t.bjK()
t.c.dz(1)
t.bjJ()
return!0},
bjN(d,e){var x,w,v,u=this,t=u.c
t===$&&B.b()
t=t.dz(1)!==0
d.a=t
if(t){d.b=u.c.dz(1)!==0
if(u.c.dz(1)!==0){d.c=u.c.dz(1)!==0
for(t=d.d,x=0;x<4;++x){if(u.c.dz(1)!==0){w=u.c
v=w.dz(7)
w=w.dz(1)===1?-v:v}else w=0
t.$flags&2&&B.F(t)
t[x]=w}for(t=d.e,x=0;x<4;++x){if(u.c.dz(1)!==0){w=u.c
v=w.dz(6)
w=w.dz(1)===1?-v:v}else w=0
t.$flags&2&&B.F(t)
t[x]=w}}if(d.b)for(x=0;x<3;++x){t=e.a
w=u.c.dz(1)!==0?u.c.dz(8):255
t.$flags&2&&B.F(t)
t[x]=w}}else d.b=!1
return!0},
bjE(){var x,w,v,u=this,t=u.w,s=u.c
s===$&&B.b()
t.a=s.dz(1)!==0
t.b=u.c.dz(6)
t.c=u.c.dz(3)
s=u.c.dz(1)!==0
t.d=s
if(s)if(u.c.dz(1)!==0){for(s=t.e,x=0;x<4;++x)if(u.c.dz(1)!==0){w=u.c
v=w.dz(6)
w=w.dz(1)===1?-v:v
s.$flags&2&&B.F(s)
s[x]=w}for(s=t.f,x=0;x<4;++x)if(u.c.dz(1)!==0){w=u.c
v=w.dz(6)
w=w.dz(1)===1?-v:v
s.$flags&2&&B.F(s)
s[x]=w}}if(t.b===0)s=0
else s=t.a?1:2
u.bz=s
return!0},
bjI(d){var x,w,v,u,t,s,r,q=d.c-d.d,p=this.c
p===$&&B.b()
p=D.c.eu(1,p.dz(2))
this.cy=p
x=p-1
w=x*3
if(q<w)return!1
for(p=this.db,v=0,u=0;u<x;++u,w=s){t=d.T2(3,v)
s=w+((J.v(t.a,t.d)|J.v(t.a,t.d+1)<<8|J.v(t.a,t.d+2)<<16)>>>0)
if(s>q)s=q
r=new A.a96(d.Bc(s-w,w))
r.b=254
r.c=0
r.d=-8
p[u]=r
v+=3}p[x]=A.cN5(d.Bc(q-w,d.d-d.b+w))
return w<q},
bjK(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
h===$&&B.b()
x=h.dz(7)
w=i.c.dz(1)!==0?i.c.Kk(4):0
v=i.c.dz(1)!==0?i.c.Kk(4):0
u=i.c.dz(1)!==0?i.c.Kk(4):0
t=i.c.dz(1)!==0?i.c.Kk(4):0
s=i.c.dz(1)!==0?i.c.Kk(4):0
r=i.x
for(h=i.dy,q=r.a,p=!r.c,o=r.d,n=0;n<4;++n){if(q){m=o[n]
if(p)m+=x}else{if(n>0){h[n]=h[0]
continue}m=x}l=h[n]
k=l.a
j=m+w
if(j<0)j=0
else if(j>127)j=127
j=C.De[j]
k.$flags&2&&B.F(k)
k[0]=j
if(m<0)j=0
else j=m>127?127:m
k[1]=C.Df[j]
j=l.b
k=m+v
if(k<0)k=0
else if(k>127)k=127
k=C.De[k]
j.$flags&2&&B.F(j)
j[0]=k*2
k=m+u
if(k<0)k=0
else if(k>127)k=127
j[1]=C.Df[k]*101581>>>16
if(j[1]<8)j[1]=8
k=l.c
j=m+t
if(j<0)j=0
else if(j>117)j=117
j=C.De[j]
k.$flags&2&&B.F(k)
k[0]=j
j=m+s
if(j<0)j=0
else if(j>127)j=127
k[1]=C.Df[j]}},
bjJ(){var x,w,v,u,t,s,r=this,q=r.fr
for(x=0;x<4;++x)for(w=0;w<8;++w)for(v=0;v<3;++v)for(u=0;u<11;++u){t=r.c
t===$&&B.b()
s=t.iB(C.aJC[x][w][v][u])!==0?r.c.dz(8):C.azu[x][w][v][u]
t=q.b[x][w].a[v]
t.$flags&2&&B.F(t)
t[u]=s}t=r.c
t===$&&B.b()
t=t.dz(1)!==0
r.fx=t
if(t)r.fy=r.c.dz(8)},
bkO(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.bz
k.toString
if(k>0){x=l.w
for(k=x.e,w=x.f,v=l.x,u=v.e,t=0;t<4;++t){if(v.a){s=u[t]
if(!v.c){r=x.b
r.toString
s+=r}}else s=x.b
for(q=0;q<=1;++q){r=l.aF
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
bdI(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k.at
if(j!=null)m.bn=j
x=J.iY(4,y.K)
for(j=y.q,w=0;w<4;++w)x[w]=B.a([new A.LP(),new A.LP()],j)
m.aF=x
j=m.at
j.toString
x=J.iY(j,y.bt)
for(v=0;v<j;++v){u=new Uint8Array(16)
t=new Uint8Array(8)
x[v]=new A.aF_(u,t,new Uint8Array(8))}m.k2=x
m.ok=new Uint8Array(832)
j=m.at
j.toString
m.go=new Uint8Array(4*j)
u=m.p4=16*j
j=8*j
m.R8=j
t=m.bz
t.toString
s=C.CY[t]
r=s*u
q=(s/2|0)*j
m.p1=A.d_(new Uint8Array(16*u+r),!1,l,r)
j=m.R8
j.toString
m.p2=A.d_(new Uint8Array(8*j+q),!1,l,q)
j=m.R8
j.toString
m.p3=A.d_(new Uint8Array(8*j+q),!1,l,q)
j=k.a
m.RG=A.d_(new Uint8Array(j),!1,l,0)
p=k.a+1>>>1
m.rx=A.d_(new Uint8Array(p),!1,l,0)
m.ry=A.d_(new Uint8Array(p),!1,l,0)
k=m.bz
k.toString
o=C.CY[k]
if(k===2)m.ch=m.ay=0
else{k=m.y
k===$&&B.b()
k=D.c.b0(k-o,16)
m.ay=k
j=m.Q
j.toString
j=D.c.b0(j-o,16)
m.ch=j
if(k<0)m.ay=0
if(j<0)m.ch=0}k=m.as
k.toString
k=D.c.b0(k+15+o,16)
m.cx=k
j=m.z
j===$&&B.b()
j=D.c.b0(j+15+o,16)
m.CW=j
u=m.at
u.toString
if(j>u)m.CW=u
j=m.ax
j.toString
if(k>j)m.cx=j
n=u+1
x=J.iY(n,y.bQ)
for(v=0;v<n;++v)x[v]=new A.aEX()
m.k3=x
k=m.at
k.toString
x=J.iY(k,y.bl)
for(v=0;v<k;++v){j=new Int16Array(384)
x[v]=new A.aEY(j,new Uint8Array(16))}m.bH=x
k=m.at
k.toString
m.k4=B.bQ(k,l,!1,y.B)
m.bkO()
A.dcd()
m.e=new A.bPt()
return!0},
bjF(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
t=j.bH
t===$&&B.b()
p=t[u]
if(w.b){u=j.c
u===$&&B.b()
u=u.iB(j.fr.a[0])
t=j.c
o=j.fr
j.k1=u===0?t.iB(o.a[1]):2+t.iB(o.a[2])}u=j.fx
u===$&&B.b()
if(u){u=j.c
u===$&&B.b()
t=j.fy
t===$&&B.b()
n=u.iB(t)!==0}else n=!1
j.bjG()
if(!n)n=j.bjL(q,s)
else{r.a=q.a=0
u=p.b
u===$&&B.b()
if(!u)r.b=q.b=0
p.f=p.e=0}u=j.bz
u.toString
if(u>0){u=j.k4
u===$&&B.b()
t=j.y1
o=j.aF
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
D.C.ma(x,0,4,0)
j.y1=0
j.blR()
u=j.bz
u.toString
k=!1
if(u>0){u=j.y2
t=j.ch
t===$&&B.b()
if(u>=t){t=j.cx
t.toString
t=u<=t
k=t}}if(!j.b4M(k))return!1
u=++j.y2}return!0},
blR(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.y2,a5=a2.ok
a5===$&&B.b()
x=A.d_(a5,!1,a3,40)
w=A.d_(a2.ok,!1,a3,584)
v=A.d_(a2.ok,!1,a3,600)
a5=a4>0
u=0
while(!0){t=a2.at
t.toString
if(!(u<t))break
t=a2.bH
t===$&&B.b()
s=t[u]
if(u>0){for(r=-1;r<16;++r){t=r*32
x.rS(t-4,4,x,t+12)}for(r=-1;r<8;++r){t=r*32
q=t-4
t+=4
w.rS(q,4,w,t)
v.rS(q,4,v,t)}}else{for(r=0;r<16;++r)J.bY(x.a,x.d+(r*32-1),129)
for(r=0;r<8;++r){t=r*32-1
J.bY(w.a,w.d+t,129)
J.bY(v.a,v.d+t,129)}if(a5){J.bY(v.a,v.d+-33,129)
J.bY(w.a,w.d+-33,129)
J.bY(x.a,x.d+-33,129)}}t=a2.k2
t===$&&B.b()
p=t[u]
o=s.a
n=s.e
if(a5){x.Ai(-32,16,p.a)
w.Ai(-32,8,p.b)
v.Ai(-32,8,p.c)}else if(u===0){t=x.a
q=x.d+-33
J.tU(t,q,q+21,127)
q=w.a
t=w.d+-33
J.tU(q,t,t+9,127)
t=v.a
q=v.d+-33
J.tU(t,q,q+9,127)}t=s.b
t===$&&B.b()
if(t){m=A.cf(x,a3,-16)
l=m.Ra()
if(a5){t=a2.at
t.toString
if(u>=t-1){t=p.a[15]
q=m.a
k=m.d
J.tU(q,k,k+4,t)}else m.Ai(0,4,a2.k2[u+1].a)}j=l[0]
l.$flags&2&&B.F(l)
l[96]=j
l[64]=j
l[32]=j
for(t=s.c,i=0;i<16;++i,n=n<<2>>>0){h=A.cf(x,a3,C.V4[i])
C.aGm[t[i]].$1(h)
n.toString
q=i*16
a2.anw(n,new A.mh(o,q,Math.min(384,384),q,!1),h)}}else{t=A.cN8(u,a4,s.c[0])
t.toString
C.aKX[t].$1(x)
if(n!==0)for(i=0;i<16;++i,n=n<<2>>>0){h=A.cf(x,a3,C.V4[i])
n.toString
t=i*16
a2.anw(n,new A.mh(o,t,Math.min(384,384),t,!1),h)}}t=s.f
t===$&&B.b()
q=A.cN8(u,a4,s.d)
q.toString
C.Qd[q].$1(w)
C.Qd[q].$1(v)
q=Math.min(384,384)
g=new A.mh(o,256,q,256,!1)
if((t&255)!==0){k=a2.e
if((t&170)!==0){k===$&&B.b()
k.vS(g,w)
k.vS(A.cf(g,a3,16),A.cf(w,a3,4))
f=A.cf(g,a3,32)
e=A.cf(w,a3,128)
k.vS(f,e)
k.vS(A.cf(f,a3,16),A.cf(e,a3,4))}else{k===$&&B.b()
k.aIe(g,w)}}d=new A.mh(o,320,q,320,!1)
t=t>>>8
if((t&255)!==0){q=a2.e
if((t&170)!==0){q===$&&B.b()
q.vS(d,v)
q.vS(A.cf(d,a3,16),A.cf(v,a3,4))
t=A.cf(d,a3,32)
k=A.cf(v,a3,128)
q.vS(t,k)
q.vS(A.cf(t,a3,16),A.cf(k,a3,4))}else{q===$&&B.b()
q.aIe(d,v)}}t=a2.ax
t.toString
if(a4<t-1){D.C.e9(p.a,0,16,x.hZ(),480)
D.C.e9(p.b,0,8,w.hZ(),224)
D.C.e9(p.c,0,8,v.hZ(),224)}a0=u*16
a1=u*8
for(r=0;r<16;++r){t=a2.p4
t.toString
q=a2.p1
q===$&&B.b()
q.rS(a0+r*t,16,x,r*32)}for(r=0;r<8;++r){t=a2.R8
t.toString
q=a2.p2
q===$&&B.b()
k=r*32
q.rS(a1+r*t,8,w,k)
t=a2.R8
t.toString
q=a2.p3
q===$&&B.b()
q.rS(a1+r*t,8,v,k)}++u}},
anw(d,e,f){var x,w,v,u,t,s
switch(d>>>30){case 3:x=this.e
x===$&&B.b()
x.JR(0,e,f,!1)
break
case 2:this.e===$&&B.b()
w=J.v(e.a,e.d)+4
v=D.c.ll(D.c.S(J.v(e.a,e.d+4)*35468,16),32)
u=D.c.ll(D.c.S(J.v(e.a,e.d+4)*85627,16),32)
t=D.c.ll(D.c.S(J.v(e.a,e.d+1)*35468,16),32)
s=D.c.ll(D.c.S(J.v(e.a,e.d+1)*85627,16),32)
A.bPv(f,0,w+u,s,t)
A.bPv(f,1,w+v,s,t)
A.bPv(f,2,w-v,s,t)
A.bPv(f,3,w-u,s,t)
break
case 1:x=this.e
x===$&&B.b()
x.Rb(e,f)
break
default:break}},
b2T(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.p4,j=m.k4
j===$&&B.b()
j=j[d]
j.toString
x=m.p1
x===$&&B.b()
w=A.cf(x,l,d*16)
v=j.b
u=j.a
if(u===0)return
if(m.bz===1){if(d>0){x=m.e
x===$&&B.b()
k.toString
x.aiC(w,k,u+4)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.aPc(w,k,u)}if(e>0){x=m.e
x===$&&B.b()
k.toString
x.aiD(w,k,u+4)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.aPf(w,k,u)}}else{t=m.R8
x=m.p2
x===$&&B.b()
s=d*8
r=A.cf(x,l,s)
x=m.p3
x===$&&B.b()
q=A.cf(x,l,s)
p=j.d
if(d>0){x=m.e
x===$&&B.b()
k.toString
s=u+4
x.FG(w,1,k,16,s,v,p)
t.toString
x.FG(r,1,t,8,s,v,p)
x.FG(q,1,t,8,s,v,p)}if(j.c){x=m.e
x===$&&B.b()
k.toString
x.bE8(w,k,u,v,p)
t.toString
o=A.cf(r,l,4)
n=A.cf(q,l,4)
x.FF(o,1,t,8,u,v,p)
x.FF(n,1,t,8,u,v,p)}if(e>0){x=m.e
x===$&&B.b()
k.toString
s=u+4
x.FG(w,k,1,16,s,v,p)
t.toString
x.FG(r,t,1,8,s,v,p)
x.FG(q,t,1,8,s,v,p)}if(j.c){j=m.e
j===$&&B.b()
k.toString
j.bQj(w,k,u,v,p)
t.toString
x=4*t
o=A.cf(r,l,x)
n=A.cf(q,l,x)
j.FF(o,t,1,8,u,v,p)
j.FF(n,t,1,8,u,v,p)}}},
b4w(){var x,w=this,v=w.ay
v===$&&B.b()
x=v
while(!0){v=w.CW
v.toString
if(!(x<v))break
w.b2T(x,w.y2);++x}},
b4M(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.bz
e.toString
x=C.CY[e]
e=g.p4
e.toString
w=x*e
e=g.R8
e.toString
v=(x/2|0)*e
e=g.p1
e===$&&B.b()
u=-w
t=A.cf(e,f,u)
e=g.p2
e===$&&B.b()
s=-v
r=A.cf(e,f,s)
e=g.p3
e===$&&B.b()
q=A.cf(e,f,s)
p=g.y2
e=g.cx
e.toString
o=p*16
n=(p+1)*16
if(d)g.b4w()
if(p!==0){o-=x
g.to=A.cf(t,f,0)
g.x1=A.cf(r,f,0)
g.x2=A.cf(q,f,0)}else{g.to=A.cf(g.p1,f,0)
g.x1=A.cf(g.p2,f,0)
g.x2=A.cf(g.p3,f,0)}e=p<e-1
if(e)n-=x
m=g.as
m.toString
if(n>m)n=m
g.xr=null
if(g.bn!=null&&o<n){m=g.xr=g.b1F(o,n-o)
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
g.bld(0,o-l,m-h,n-o)}if(e){e=g.p1
m=g.p4
m.toString
e.rS(u,w,t,16*m)
m=g.p2
u=g.R8
u.toString
m.rS(s,v,r,8*u)
u=g.p3
m=g.R8
m.toString
u.rS(s,v,q,8*m)}return!0},
bld(d,e,f,g){if(f<=0||g<=0)return!1
this.b3H(e,f,g)
this.b3G(e,f,g)
return!0},
a4w(d){var x
if((d&-4194304)>>>0===0)x=D.c.S(d,14)
else x=d<0?0:255
return x},
Xo(d,e,f,g){var x=19077*d
g.m(0,0,this.a4w(x+26149*f+-3644112))
g.m(0,1,this.a4w(x-6419*e-13320*f+2229552))
g.m(0,2,this.a4w(x+33050*e+-4527440))},
X7(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=new A.bPF(),a0=b3-1,a1=D.c.S(a0,1),a2=d.$2(J.v(a7.a,a7.d),J.v(a8.a,a8.d)),a3=d.$2(J.v(a9.a,a9.d),J.v(b0.a,b0.d)),a4=D.c.S(3*a2+a3+131074,2)
f.Xo(J.v(a5.a,a5.d),a4&255,a4>>>16,b1)
b1.m(0,3,255)
x=a6!=null
if(x){a4=D.c.S(3*a3+a2+131074,2)
w=J.v(a6.a,a6.d)
b2.toString
f.Xo(w,a4&255,a4>>>16,b2)
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
j=A.cf(b1,e,k)
n=19077*n
i=n+26149*l+-3644112
if((i&-4194304)>>>0===0)h=D.c.S(i,14)
else h=i<0?0:255
J.bY(j.a,j.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.S(l,14)
else h=l<0?0:255
J.bY(j.a,j.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.S(n,14)
else h=n<0?0:255
J.bY(j.a,j.d+2,h)
J.bY(j.a,j.d+3,255)
n=J.v(a5.a,a5.d+w)
m=p&255
l=p>>>16
j=w*4
i=A.cf(b1,e,j)
n=19077*n
g=n+26149*l+-3644112
if((g&-4194304)>>>0===0)h=D.c.S(g,14)
else h=g<0?0:255
J.bY(i.a,i.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.c.S(l,14)
else h=l<0?0:255
J.bY(i.a,i.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.c.S(n,14)
else h=n<0?0:255
J.bY(i.a,i.d+2,h)
J.bY(i.a,i.d+3,255)
if(x){a4=D.c.S(q+a3,1)
p=D.c.S(r+t,1)
o=J.v(a6.a,a6.d+o)
n=a4&255
m=a4>>>16
b2.toString
k=A.cf(b2,e,k)
o=19077*o
l=o+26149*m+-3644112
if((l&-4194304)>>>0===0)h=D.c.S(l,14)
else h=l<0?0:255
J.bY(k.a,k.d,h)
m=o-6419*n-13320*m+2229552
if((m&-4194304)>>>0===0)h=D.c.S(m,14)
else h=m<0?0:255
J.bY(k.a,k.d+1,h)
o=o+33050*n+-4527440
if((o&-4194304)>>>0===0)h=D.c.S(o,14)
else h=o<0?0:255
J.bY(k.a,k.d+2,h)
J.bY(k.a,k.d+3,255)
w=J.v(a6.a,a6.d+w)
o=p&255
n=p>>>16
j=A.cf(b2,e,j)
w=19077*w
m=w+26149*n+-3644112
if((m&-4194304)>>>0===0)h=D.c.S(m,14)
else h=m<0?0:255
J.bY(j.a,j.d,h)
n=w-6419*o-13320*n+2229552
if((n&-4194304)>>>0===0)h=D.c.S(n,14)
else h=n<0?0:255
J.bY(j.a,j.d+1,h)
w=w+33050*o+-4527440
if((w&-4194304)>>>0===0)h=D.c.S(w,14)
else h=w<0?0:255
J.bY(j.a,j.d+2,h)
J.bY(j.a,j.d+3,255)}}if((b3&1)===0){a4=D.c.S(3*a2+a3+131074,2)
w=J.v(a5.a,a5.d+a0)
o=a0*4
n=A.cf(b1,e,o)
f.Xo(w,a4&255,a4>>>16,n)
n.m(0,3,255)
if(x){a4=D.c.S(3*a3+a2+131074,2)
a0=J.v(a6.a,a6.d+a0)
b2.toString
o=A.cf(b2,e,o)
f.Xo(a0,a4&255,a4>>>16,o)
o.m(0,3,255)}}},
b3G(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.xr
if(o==null)return
x=A.cf(o,null,0)
if(d===0){w=f-1
v=d}else{v=d-1
x.d=x.d-p.b.a
w=f}o=p.Q
o.toString
u=p.as
if(o+d+f===u){u.toString
w=u-o-v}for(o=p.b,t=0;t<w;++t){for(u=t+v,s=0;s<e;++s){r=J.v(x.a,x.d+s)
q=p.d.a
q=q==null?null:q.ei(s,u,null);(q==null?new A.fq():q).saG(0,r)}x.d=x.d+o.a}},
b3H(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=A.d_(J.dh(l.d.gak(0),0,null),!1,k,d*j.a*4),h=l.to
h===$&&B.b()
x=A.cf(h,k,0)
h=l.x1
h===$&&B.b()
w=A.cf(h,k,0)
h=l.x2
h===$&&B.b()
v=A.cf(h,k,0)
u=d+f
t=D.c.S(e+1,1)
s=j.a*4
j=l.rx
j===$&&B.b()
r=A.cf(j,k,0)
j=l.ry
j===$&&B.b()
q=A.cf(j,k,0)
if(d===0){l.X7(x,k,w,v,w,v,i,k,e)
p=f}else{j=l.RG
j===$&&B.b()
l.X7(j,x,r,q,w,v,A.cf(i,k,-s),i,e)
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
l.X7(A.cf(x,k,-n),x,r,q,w,v,A.cf(i,k,h),i,e)}j=x.d
h=l.p4
h.toString
x.d=j+h
j=l.Q
j.toString
h=l.as
h.toString
if(j+u<h){j=l.RG
j===$&&B.b()
j.Ai(0,e,x)
l.rx.Ai(0,t,w)
l.ry.Ai(0,t,v);--p}else if((u&1)===0)l.X7(x,k,w,v,w,v,A.cf(i,k,s),k,e)
return p},
b1F(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.b,m=n.a,l=n.b
if(d<0||e<=0||d+e>l)return null
if(d===0){n=m*l
o.bv=new Uint8Array(n)
x=o.bn
w=new A.bQu(x,m,l)
v=x.cu()
w.d=v&3
w.e=D.c.S(v,2)&3
w.f=D.c.S(v,4)&3
w.r=D.c.S(v,6)&3
if(w.geK()){u=w.d
if(u===0){if(x.c-x.d<n)w.r=1}else if(u===1){t=new A.aFo(C.pT,B.a([],y.J))
t.a=m
t.b=l
n=B.a([],y.A)
u=B.a([],y.F)
s=new Uint32Array(2)
r=new A.aEV(x,s)
s=r.d=J.dh(D.bz.gak(s),0,null)
q=x.cu()
s.$flags&2&&B.F(s)
s[0]=q
s[1]=x.cu()
s[2]=x.cu()
s[3]=x.cu()
s[4]=x.cu()
s[5]=x.cu()
s[6]=x.cu()
s[7]=x.cu()
u=new A.at8(r,t,n,u)
u.db=m
w.x=u
u.LA(m,l,!0)
n=w.x
x=n.ax
if(x.length===1&&x[0].a===C.acT&&n.bec()){w.y=!0
n=w.x
x=n.c
p=x.a*x.b
n.cx=0
x=D.c.ao(p,4)
x=new Uint8Array(p+(4-x))
n.CW=x
n.ch=J.oK(D.C.gak(x),0,null)}else{w.y=!1
w.x.akS()}}else w.r=1}o.b9=w}n=o.b9
n===$&&B.b()
if(!n.w){x=o.bv
x===$&&B.b()
if(!n.Os(0,d,e,x))return null}n=o.bv
n===$&&B.b()
return A.d_(n,!1,null,d*m)},
bjL(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.fr.b,a3=a1.k1
a3===$&&B.b()
x=a1.dy[a3]
a3=a1.bH
a3===$&&B.b()
w=a3[a1.y1]
v=A.d_(w.a,!1,null,0)
a3=a1.k3
a3===$&&B.b()
u=a3[0]
v.bIX(0,v.c-v.d,0)
a3=w.b
a3===$&&B.b()
if(!a3){t=A.d_(new Int16Array(16),!1,null,0)
a3=a4.b
s=u.b
r=a1.a5x(a5,a2[1],a3+s,x.b,0,t)
a4.b=u.b=r>0?1:0
if(r>1)a1.brG(t,v)
else{q=D.c.S(J.v(t.a,t.d)+3,3)
for(p=0;p<256;p+=16)J.bY(v.a,v.d+p,q)}o=a2[0]
n=1}else{o=a2[3]
n=0}m=a4.a&15
l=u.a&15
for(k=0,j=0;j<4;++j){i=l&1
for(h=0,g=0;g<4;++g){r=a1.a5x(a5,o,i+(m&1),x.a,n,v)
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
m=D.c.hJ(a4.a,a3)
l=D.c.hJ(u.a,a3)
for(h=0,j=0;j<2;++j){i=l&1
for(g=0;g<2;++g){r=a1.a5x(a5,a2[2],i+(m&1),x.c,0,v)
i=r>0?1:0
m=m>>>1|i<<3
a3=J.v(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=(h<<2|a3)>>>0
v.d+=16}m=m>>>2
l=l>>>1|i<<5}d=(d|D.c.eu(h,4*a0))>>>0
e=(e|D.c.eu(m<<4>>>0,a0))>>>0
f=(f|D.c.eu(l&240,a0))>>>0}a4.a=e
u.a=f
w.e=k
w.f=d
if((d&43690)===0)x.toString
return(k|d)>>>0===0},
brG(d,e){var x,w,v,u,t,s,r,q,p,o,n=new Int32Array(16)
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
J.bY(e.a,e.d+p,u)
u=D.c.S(q+r,3)
J.bY(e.a,e.d+(p+16),u)
u=D.c.S(v-s,3)
J.bY(e.a,e.d+(p+32),u)
u=D.c.S(q-r,3)
J.bY(e.a,e.d+(p+48),u)
p+=64}},
b64(d,e){var x,w,v,u,t,s
if(d.iB(e[3])===0)x=d.iB(e[4])===0?2:3+d.iB(e[5])
else if(d.iB(e[6])===0)x=d.iB(e[7])===0?5+d.iB(159):7+2*d.iB(165)+d.iB(145)
else{w=d.iB(e[8])
v=2*w+d.iB(e[9+w])
u=C.aB1[v]
t=u.length
for(x=0,s=0;s<t;++s)x+=x+d.iB(u[s])
x+=3+D.c.eu(8,v)}return x},
a5x(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=e[h].a[f]
for(;h<16;h=x){if(d.iB(p[0])===0)return h
for(;d.iB(p[1])===0;){++h
p=e[C.Tp[h]].a[0]
if(h===16)return 16}x=h+1
w=e[C.Tp[x]].a
if(d.iB(p[2])===0){p=w[1]
v=1}else{v=this.b64(d,p)
p=w[2]}u=C.aFe[h]
t=d.b
t===$&&B.b()
s=d.alb(D.c.S(t,1))
t=d.b
r=C.St[t]
d.b=C.Sr[t]
t=d.d
t===$&&B.b()
d.d=t-r
t=s!==0?-v:v
q=g[h>0?1:0]
J.bY(i.a,i.d+u,t*q)}return 16},
bjG(){var x,w,v,u,t,s,r,q,p,o=this,n=o.y1,m=4*n,l=o.go,k=o.id,j=o.bH
j===$&&B.b()
x=j[n]
n=o.c
n===$&&B.b()
n=n.iB(145)===0
x.b=n
if(!n){if(o.c.iB(156)!==0)w=o.c.iB(128)!==0?1:3
else w=o.c.iB(163)!==0?2:0
n=x.c
n.$flags&2&&B.F(n)
n[0]=w
l.toString
D.C.ma(l,m,m+4,w)
D.C.ma(k,0,4,w)}else{v=x.c
for(n=k.$flags|0,u=0,t=0;t<4;++t,u=p){w=k[t]
for(s=0;s<4;++s){j=m+s
r=C.aFr[l[j]][w]
q=C.Rf[o.c.iB(r[0])]
for(;q>0;)q=C.Rf[2*q+o.c.iB(r[q])]
w=-q
l.$flags&2&&B.F(l)
l[j]=w}p=u+4
l.toString
D.C.e9(v,u,p,l,m)
n&2&&B.F(k)
k[t]=w}}if(o.c.iB(142)===0)n=0
else if(o.c.iB(114)===0)n=2
else n=o.c.iB(183)!==0?1:3
x.d=n}}
A.a96.prototype={
dz(d){var x,w
for(x=0;w=d-1,d>0;d=w)x=(x|D.c.f0(this.iB(128),w))>>>0
return x},
Kk(d){var x=this.dz(d)
return this.dz(1)===1?-x:x},
iB(d){var x,w=this,v=w.b
v===$&&B.b()
x=w.alb(D.c.S(v*d,8))
if(w.b<=126)w.boT()
return x},
alb(d){var x,w,v,u,t,s=this,r=s.d
r===$&&B.b()
if(r<0){x=s.a
w=x.c
v=x.d
if(w-v>=1){u=x.cu()
r=s.c
r===$&&B.b()
s.c=(u|r<<8)>>>0
r=s.d+8
s.d=r
t=r}else{if(v<w){r=x.cu()
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
if(D.c.o9(r,t)>d){x=s.b
x===$&&B.b()
w=d+1
s.b=x-w
s.c=r-D.c.f0(w,t)
return 1}else{s.b=d
return 0}},
boT(){var x,w=this,v=w.b
v===$&&B.b()
x=C.St[v]
w.b=C.Sr[v]
v=w.d
v===$&&B.b()
w.d=v-x}}
A.bPt.prototype={
aiD(d,e,f){var x,w=A.cf(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x
if(this.arZ(w,e,f))this.U_(w,e)}},
aiC(d,e,f){var x,w=A.cf(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x*e
if(this.arZ(w,1,f))this.U_(w,1)}},
aPf(d,e,f){var x,w,v=A.cf(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.aiD(v,e,f)}},
aPc(d,e,f){var x,w=A.cf(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.aiC(w,e,f)}},
bQj(d,e,f,g,h){var x,w,v=A.cf(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.FF(v,e,1,16,f,g,h)}},
bE8(d,e,f,g,h){var x,w=A.cf(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.FF(w,1,e,16,f,g,h)}},
FG(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=A.cf(d,null,0)
for(x=-3*e,w=-2*e,v=-e,u=2*e;t=g-1,g>0;g=t){if(this.as_(h,e,a0,a1))if(this.aqp(h,e,a2))this.U_(h,e)
else{s=J.v(h.a,h.d+x)
r=J.v(h.a,h.d+w)
q=J.v(h.a,h.d+v)
p=J.v(h.a,h.d)
o=J.v(h.a,h.d+e)
n=J.v(h.a,h.d+u)
m=$.cuV()
l=m[1020+3*(p-q)+m[1020+r-o]]
m=D.c.S(27*l+63,7)
k=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.S(18*l+63,7)
j=(m&2147483647)-((m&2147483648)>>>0)
m=D.c.S(9*l+63,7)
i=(m&2147483647)-((m&2147483648)>>>0)
m=$.q_()[255+s+i]
J.bY(h.a,h.d+x,m)
m=$.q_()[255+r+j]
J.bY(h.a,h.d+w,m)
m=$.q_()[255+q+k]
J.bY(h.a,h.d+v,m)
m=$.q_()[255+p-k]
J.bY(h.a,h.d,m)
m=$.q_()[255+o-j]
J.bY(h.a,h.d+e,m)
m=$.q_()[255+n-i]
J.bY(h.a,h.d+u,m)}h.d+=f}},
FF(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=A.cf(d,null,0)
for(x=-2*e,w=-e;v=g-1,g>0;g=v){if(this.as_(k,e,h,i))if(this.aqp(k,e,j))this.U_(k,e)
else{u=J.v(k.a,k.d+x)
t=J.v(k.a,k.d+w)
s=J.v(k.a,k.d)
r=J.v(k.a,k.d+e)
q=3*(s-t)
p=$.aXN()
o=D.c.S(q+4,3)
n=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.S(q+3,3)
m=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.c.S(n+1,1)
l=(o&2147483647)-((o&2147483648)>>>0)
o=$.q_()[255+u+l]
J.bY(k.a,k.d+x,o)
o=$.q_()[255+t+m]
J.bY(k.a,k.d+w,o)
o=$.q_()[255+s-n]
J.bY(k.a,k.d,o)
o=$.q_()[255+r-l]
J.bY(k.a,k.d+e,o)}k.d+=f}},
U_(d,e){var x=J.v(d.a,d.d+-2*e),w=-e,v=J.v(d.a,d.d+w),u=J.v(d.a,d.d),t=J.v(d.a,d.d+e),s=3*(u-v)+$.cuV()[1020+x-t],r=$.aXN()[112+D.c.ll(D.c.S(s+4,3),32)],q=$.aXN()[112+D.c.ll(D.c.S(s+3,3),32)]
d.m(0,w,$.q_()[255+v+q])
d.m(0,0,$.q_()[255+u-r])},
aqp(d,e,f){var x=J.v(d.a,d.d+-2*e),w=J.v(d.a,d.d+-e),v=J.v(d.a,d.d),u=J.v(d.a,d.d+e),t=$.aXM()
return t[255+x-w]>f||t[255+u-v]>f},
arZ(d,e,f){var x=J.v(d.a,d.d+-2*e),w=J.v(d.a,d.d+-e),v=J.v(d.a,d.d),u=J.v(d.a,d.d+e)
return 2*$.aXM()[255+w-v]+$.cuU()[255+x-u]<=f},
as_(d,e,f,g){var x=J.v(d.a,d.d+-4*e),w=J.v(d.a,d.d+-3*e),v=J.v(d.a,d.d+-2*e),u=J.v(d.a,d.d+-e),t=J.v(d.a,d.d),s=J.v(d.a,d.d+e),r=J.v(d.a,d.d+2*e),q=J.v(d.a,d.d+3*e),p=$.aXM(),o=255+v
if(2*p[255+u-t]+$.cuU()[o-s]>f)return!1
return p[255+x-w]<=g&&p[255+w-v]<=g&&p[o-u]<=g&&p[255+q-r]<=g&&p[255+r-s]<=g&&p[255+s-t]<=g},
vS(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=new Int32Array(16)
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
A.Fj(e,l,0,0,t+n)
A.Fj(e,l,1,0,s+o)
A.Fj(e,l,2,0,s-o)
A.Fj(e,l,3,0,t-n);++w
l+=32}},
JR(d,e,f,g){this.vS(e,f)
if(g)this.vS(A.cf(e,null,16),A.cf(f,null,4))},
Rb(d,e){var x,w,v=J.v(d.a,d.d)+4
for(x=0;x<4;++x)for(w=0;w<4;++w)A.Fj(e,0,w,x,v)},
aIe(d,e){var x=this,w=null
if(J.v(d.a,d.d)!==0)x.Rb(d,e)
if(J.v(d.a,d.d+16)!==0)x.Rb(A.cf(d,w,16),A.cf(e,w,4))
if(J.v(d.a,d.d+32)!==0)x.Rb(A.cf(d,w,32),A.cf(e,w,128))
if(J.v(d.a,d.d+48)!==0)x.Rb(A.cf(d,w,48),A.cf(e,w,132))}}
A.bPy.prototype={}
A.bPC.prototype={}
A.bPE.prototype={}
A.a95.prototype={}
A.bPD.prototype={}
A.bPu.prototype={}
A.LP.prototype={}
A.aEX.prototype={}
A.aEZ.prototype={}
A.aEY.prototype={}
A.aF_.prototype={}
A.a97.prototype={
Ot(){var x,w=this.b
if(w.jq(8)!==47)return!1
x=this.c
x.f=C.zm
x.a=w.jq(14)+1
x.b=w.jq(14)+1
x.d=w.jq(1)!==0
if(w.jq(3)!==0)return!1
return!0},
om(d){var x,w,v,u,t,s=this,r=null
s.e=0
if(!s.Ot())return r
x=s.c
s.LA(x.a,x.b,!0)
s.akS()
w=x.a
s.d=A.i1(r,r,C.ac,0,C.bv,x.b,r,0,4,r,C.ac,w,!1)
w=s.ch
w.toString
v=x.a
u=x.b
if(!s.a4T(w,v,u,u,s.gbkW()))return r
x=x.w
if(x.length!==0){t=A.d_(new B.eR(x),!1,r,0)
x=s.d
x.toString
x.e=A.cGv(t)}return s.d},
akS(){var x,w=this,v=w.c,u=v.a
v=u*v.b+u
x=new Uint32Array(v+u*16)
w.ch=x
w.CW=J.dh(D.bz.gak(x),0,null)
w.cx=v
return!0},
blH(d){var x,w,v,u=this,t=u.b,s=t.jq(2),r=u.ay,q=D.c.eu(1,s)
if((r&q)>>>0!==0)return!1
u.ay=(r|q)>>>0
x=new A.aEW(C.acS)
u.ax.push(x)
r=C.aKk[s]
x.a=r
x.b=d[0]
x.c=d[1]
switch(r.a){case 0:case 1:t=t.jq(3)+2
x.e=t
x.d=u.LA(A.Fk(x.b,t),A.Fk(x.c,x.e),!1)
break
case 3:w=t.jq(8)+1
if(w>16)v=0
else if(w>4)v=1
else{t=w>2?2:3
v=t}d[0]=A.Fk(x.b,v)
x.e=v
x.d=u.LA(w,1,!1)
u.b4a(w,x)
break
case 2:break}return!0},
LA(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(f)for(x=p.b,w=y.t,v=e,u=d;x.jq(1)!==0;){t=B.a([u,v],w)
if(!p.blH(t))throw B.n(A.cc("Invalid Transform"))
u=t[0]
v=t[1]}else{v=e
u=d}x=p.b
if(x.jq(1)!==0){s=x.jq(4)
if(!(s>=1&&s<=11))throw B.n(A.cc("Invalid Color Cache"))}else s=0
if(!p.blv(u,v,s,f))throw B.n(A.cc("Invalid Huffman Codes"))
if(s>0){x=D.c.eu(1,s)
p.r=x
p.w=new A.bPz(new Uint32Array(x),32-s)}else p.r=0
x=p.c
x.a=u
x.b=v
r=p.y
p.z=A.Fk(u,r)
p.x=r===0?4294967295:D.c.eu(1,r)-1
if(f){p.e=0
return null}q=new Uint32Array(u*v)
if(!p.a4T(q,u,v,v,null))throw B.n(A.cc("Failed to decode image data."))
p.e=0
return q},
a4T(a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=a0.e,a2=D.c.hz(a1,a9),a3=D.c.ao(a1,a9),a4=a0.aoW(a3,a2),a5=a0.e,a6=a9*b0,a7=a9*b1
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
if((a3&v)>>>0===0){p=a0.LX(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(u.a>=32)u.Cd()
r=a4.a
o=r[0].Ay(u)
n=0
if(o<256){m=r[1].Ay(u)
if(u.a>=32)u.Cd()
l=A.cRK(r[2].Ay(u),o,m,r[3].Ay(u))
a1&2&&B.F(a8)
a8[a5]=l;++a5;++a3
if(a3>=a9){++a2
if(D.c.ao(a2,16)===0&&t)b2.$1(a2)
if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.c.h7(j*506832829>>>0,r)
k&2&&B.F(q)
q[i]=j;++s}a3=n}}else if(o<280){h=a0.Uu(o-256)
g=r[4].Ay(u)
if(u.a>=32)u.Cd()
f=a0.asS(a9,a0.Uu(g))
if(a5<f||a6-a5<h)return!1
else{e=a5-f
for(d=0;d<h;++d){r=a8[e+d]
a1&2&&B.F(a8)
a8[a5+d]=r}a5+=h}a3+=h
for(;a3>=a9;){a3-=a9;++a2
if(D.c.ao(a2,16)===0&&t)b2.$1(a2)}if(a5<a7){if((a3&v)>>>0!==0){p=a0.LX(a0.Q,a0.z,a0.y,a3,a2)
a4=a0.at[p]}if(w!=null)for(r=w.b,q=w.a,k=q.$flags|0;s<a5;){j=a8[s]
i=D.c.h7(j*506832829>>>0,r)
k&2&&B.F(q)
q[i]=j;++s}}}else if(o<x){for(;s<a5;){r=a8[s]
i=D.c.h7(r*506832829>>>0,w.b)
q=w.a
q.$flags&2&&B.F(q)
q[i]=r;++s}r=w.a
q=r[o-280]
a1&2&&B.F(a8)
a8[a5]=q;++a5;++a3
if(a3>=a9){++a2
if(D.c.ao(a2,16)===0&&t)b2.$1(a2)
for(q=w.b,k=r.$flags|0;s<a5;){j=a8[s]
i=D.c.h7(j*506832829>>>0,q)
k&2&&B.F(r)
r[i]=j;++s}a3=n}}else return!1}if(t)b2.$1(a2)
if(r.d>=q&&u.a>=64&&a5<a6)return!1
a0.e=a5
return!0},
bec(){var x,w,v,u
if(this.r>0)return!1
for(x=this.as,w=this.at,v=0;v<x;++v){u=w[v].a
if(u[1].f>1)return!1
if(u[2].f>1)return!1
if(u[3].f>1)return!1}return!0},
b4i(d){var x,w,v,u,t,s,r=this,q=r.f,p=d-q
if(p<=0)return
x=r.c
r.al0(p,x.a*q)
w=x.a
v=w*p
u=w*r.f
x=r.ch
x.toString
q=r.cx
q.toString
t=A.d_(x,!1,null,q)
for(s=0;s<v;++s){q=r.cy
q.toString
x=D.c.S(J.v(t.a,t.d+s),8)
q.$flags&2&&B.F(q)
q[u+s]=x&255}r.f=d},
b1h(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=o.e,m=D.c.hz(n,d),l=D.c.ao(n,d),k=o.aoW(l,m),j=o.e,i=d*e,h=d*f,g=o.x
n=o.b
while(!0){x=n.b
if(!(!(x.d>=x.c&&n.a>=64)&&j<h))break
if((l&g)>>>0===0){w=o.LX(o.Q,o.z,o.y,l,m)
k=o.at[w]}if(n.a>=32)n.Cd()
x=k.a
v=x[0].Ay(n)
if(v<256){x=o.CW
x===$&&B.b()
x.$flags&2&&B.F(x)
x[j]=v;++j;++l
if(l>=d){++m
if(D.c.ao(m,16)===0)o.a5h(m)
l=0}}else if(v<280){u=o.Uu(v-256)
t=x[4].Ay(n)
if(n.a>=32)n.Cd()
s=o.asS(d,o.Uu(t))
if(j>=s&&i-j>=u)for(x=o.CW,r=0;r<u;++r){x===$&&B.b()
q=j+r
p=x[q-s]
x.$flags&2&&B.F(x)
x[q]=p}else{o.e=j
return!0}j+=u
l+=u
for(;l>=d;){l-=d;++m
if(D.c.ao(m,16)===0)o.a5h(m)}if(j<h&&(l&g)>>>0!==0){w=o.LX(o.Q,o.z,o.y,l,m)
k=o.at[w]}}else return!1}o.a5h(m)
o.e=j
return!0},
a5h(d){var x,w,v,u=this,t=u.f,s=d-t,r=u.CW
r===$&&B.b()
x=A.d_(r,!1,null,u.c.a*t)
if(s>0){w=u.f
t=u.cy
t.toString
r=u.db
r.toString
v=A.d_(t,!1,null,r*w)
u.ax[0].bxV(w,w+s,x,v)}u.f=d},
bkX(d){var x,w,v,u,t,s=this,r=s.c,q=r.a,p=s.f,o=d-p
if(o<=0)return
s.al0(o,q*p)
q=s.cx
q.toString
x=s.f
w=q
v=0
for(;v<o;++v,++x)for(u=0;u<r.a;++u,++w){t=s.ch[w]
q=s.d.a
if(q!=null)q.kA(u,x,t>>>16&255,t>>>8&255,t&255,t>>>24&255)}s.f=d},
al0(d,e){var x,w,v,u=this,t=u.ax,s=t.length,r=u.c.a,q=u.f,p=q+d,o=u.cx
o.toString
x=u.ch
x.toString
D.bz.e9(x,o,o+r*d,x,e)
for(w=e;v=s-1,s>0;w=o,s=v){r=t[v]
x=u.ch
x.toString
r.bGJ(q,p,x,w,x,o)}},
blv(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=1
if(g&&l.b.jq(1)!==0){x=l.b.jq(3)+2
w=A.Fk(d,x)
v=A.Fk(e,x)
u=w*v
t=l.LA(w,v,!1)
l.y=x
for(s=0;s<u;++s){r=t[s]>>>8&65535
t.$flags&2&&B.F(t)
t[s]=r
if(r>=k)k=r+1}}else t=null
q=J.iY(k,y.R)
for(p=0;p<k;++p)q[p]=A.d3r()
for(o=f>0,s=0;s<k;++s)for(n=0;n<5;++n){m=C.aC9[n]
if(n===0&&o)m+=D.c.eu(1,f)
if(!l.blt(m,q[s].a[n]))return!1}l.Q=t
l.as=k
l.at=q
return!0},
blt(d,e){var x,w,v,u,t,s,r,q,p,o=this.b
if(o.jq(1)!==0){x=y.t
w=B.a([0,0],x)
v=B.a([0,0],x)
u=B.a([0,0],x)
t=o.jq(1)+1
w[0]=o.jq(o.jq(1)===0?1:8)
v[0]=0
x=t-1
u[0]=x
if(t===2){w[1]=o.jq(8)
v[1]=1
u[1]=x}s=e.bwN(u,v,w,d,t)}else{r=new Int32Array(19)
q=o.jq(4)+4
if(q>19)return!1
u=new Int32Array(d)
for(p=0;p<q;++p)r[C.aED[p]]=o.jq(3)
s=this.blu(r,d,u)
if(s)s=e.aze(u,d)}return s},
blu(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.cHq()
if(!j.aze(d,19))return!1
x=this.b
if(x.jq(1)!==0){w=2+x.jq(2+2*x.jq(3))
if(w>e)return!1}else w=e
for(v=f.$flags|0,u=0,t=8;u<e;w=s){s=w-1
if(w===0)break
if(x.a>=32)x.Cd()
r=j.Ay(x)
if(r<16){q=u+1
v&2&&B.F(f)
f[u]=r
if(r!==0)t=r
u=q}else{p=r-16
o=C.ayj[p]
n=C.ayE[p]
m=x.jq(o)+n
if(u+m>e)return!1
else{l=r===16?t:0
for(;k=m-1,m>0;m=k,u=q){q=u+1
v&2&&B.F(f)
f[u]=l}}}}return!0},
Uu(d){var x
if(d<4)return d+1
x=D.c.S(d-2,1)
return D.c.eu(2+(d&1),x)+this.b.jq(x)+1},
asS(d,e){var x,w
if(e>120)return e-120
else{x=C.aCq[e-1]
w=(x>>>4)*d+(8-(x&15))
return w>=1?w:1}},
b4a(d,e){var x,w,v,u,t,s,r=D.c.eu(1,D.c.hJ(8,e.e)),q=new Uint32Array(r),p=e.d
p.toString
x=J.dh(D.bz.gak(p),0,null)
w=J.dh(D.bz.gak(q),0,null)
q[0]=e.d[0]
v=4*d
for(p=w.$flags|0,u=4;u<v;++u){t=x[u]
s=w[u-4]
p&2&&B.F(w)
w[u]=t+s&255}for(v=4*r;u<v;++u){p&2&&B.F(w)
w[u]=0}e.d=q
return!0},
LX(d,e,f,g,h){if(f===0)return 0
d.toString
return d[e*D.c.S(h,f)+D.c.S(g,f)]},
aoW(d,e){var x=this,w=x.LX(x.Q,x.z,x.y,d,e)
return x.at[w]}}
A.at8.prototype={
bDh(d){return this.b4i(d)}}
A.aEV.prototype={
aGg(){var x,w,v=this.a
if(v<32){x=this.c
w=D.c.h7(x[0],v)+((x[1]&C.DK[v])>>>0)*(C.DK[32-v]+1)}else{x=this.c
w=v===32?x[1]:D.c.h7(x[1],v-32)}return w},
jq(d){var x,w=this,v=w.b
if(!(v.d>=v.c&&w.a>=64)&&d<25){v=w.aGg()
x=C.DK[d]
w.a+=d
w.Cd()
return(v&x)>>>0}else throw B.n(A.cc("Not enough data in input."))},
Cd(){var x,w,v,u=this,t=u.b,s=u.c,r=s.$flags|0,q=t.c
while(!0){if(!(u.a>=8&&t.d<q))break
x=J.v(t.a,t.d++)
w=s[0]
v=s[1]
r&2&&B.F(s)
s[0]=(w>>>8)+(v&255)*16777216
s[1]=v>>>8
s[1]=(s[1]|x*16777216)>>>0
u.a-=8}}}
A.bPz.prototype={}
A.LQ.prototype={
J(){return"VP8LImageTransformType."+this.b}}
A.aEW.prototype={
bGJ(d,e,f,g,h,i){var x,w,v,u,t=this,s=t.b
switch(t.a.a){case 2:t.buM(h,i,i+(e-d)*s)
break
case 0:t.bMF(d,e,h,i)
if(e!==t.c){x=i-s
D.bz.e9(h,x,x+s,f,i+(e-d-1)*s)}break
case 1:t.bxW(d,e,h,i)
break
case 3:if(g===i&&t.e>0){w=e-d
v=w*A.Fk(s,t.e)
u=i+w*s-v
D.bz.e9(h,u,u+v,f,i)
t.aAh(d,e,f,u,h,i)}else t.aAh(d,e,f,g,h,i)
break}},
bxV(d,e,f,g){var x,w,v,u,t,s,r=this.e,q=D.c.hJ(8,r),p=this.b,o=this.d
if(q<8){x=D.c.eu(1,r)-1
w=D.c.eu(1,q)-1
for(v=d;v<e;++v)for(u=0,t=0;t<p;++t){if((t&x)>>>0===0){u=J.v(f.a,f.d);++f.d}r=o[(u&w)>>>0]
J.bY(g.a,g.d,r>>>8&255);++g.d
u=D.c.S(u,q)}}else for(v=d;v<e;++v)for(t=0;t<p;++t){s=J.v(f.a,f.d);++f.d
r=o[s]
J.bY(g.a,g.d,r>>>8&255);++g.d}},
aAh(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=this.e,o=D.c.hJ(8,p),n=this.b,m=this.d
if(o<8){x=D.c.eu(1,p)-1
w=D.c.eu(1,o)-1
for(p=h.$flags|0,v=d;v<e;++v)for(u=0,t=0;t<n;++t,i=r){if((t&x)>>>0===0){s=g+1
u=f[g]>>>8&255
g=s}r=i+1
q=m[u&w]
p&2&&B.F(h)
h[i]=q
u=D.c.hJ(u,o)}}else for(p=h.$flags|0,v=d;v<e;++v)for(t=0;t<n;++t,i=r,g=s){r=i+1
s=g+1
q=m[f[g]>>>8&255]
p&2&&B.F(h)
h[i]=q}},
bxW(a2,a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.b,e=g.e,d=D.c.eu(1,e)-1,a0=A.Fk(f,e),a1=D.c.S(a2,g.e)*a0
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
o=$.nF()
o.$flags&2&&B.F(o)
o[0]=p
p=$.oJ()
n=p[0]
o[0]=q
m=p[0]
l=$.aXP()
l.$flags&2&&B.F(l)
l[0]=n*m
k=$.cuX()
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
e&2&&B.F(a4)
a4[s]=(r&4278255360|j<<16|((r&255)+(i>>>5)>>>0)+(h>>>5)>>>0&255)>>>0}a5+=f;++x
if((x&d)>>>0===0)a1+=a0}},
bMF(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=this,n=o.b
if(d===0){A.bPA(f,g,4278190080)
for(x=1;x<n;++x){w=g+x
A.bPA(f,w,f[w-1])}g+=n;++d}w=o.e
v=D.c.eu(1,w)-1
u=A.Fk(n,w)
t=D.c.S(d,o.e)*u
for(s=d;s<e;){A.bPA(f,g,f[g-n])
r=t+1
q=$.cN7[o.d[t]>>>8&15]
for(x=1;x<n;++x){if((x&v)>>>0===0){p=r+1
q=$.cN7[o.d[r]>>>8&15]
r=p}w=g+x
A.bPA(f,w,q.$3(f,f[w-1],w-n))}g+=n;++s
if((s&v)>>>0===0)t+=u}},
buM(d,e,f){var x,w,v,u
for(x=d.$flags|0;e<f;e=u){w=d[e]
v=w>>>8&255
u=e+1
x&2&&B.F(d)
d[e]=(w&4278255360|(w&16711935)+(v<<16|v)&16711935)>>>0}}}
A.bQu.prototype={
geK(){var x=this,w=x.d
if(w>1||x.e>=4||x.f>1||x.r!==0)return!1
return!0},
Os(d,e,f,g){var x,w,v,u,t,s,r=this
if(!r.geK())return!1
x=C.aL4[r.e]
if(r.d===0){w=r.b
v=e*w
u=r.a
D.C.e9(g,v,f*w,u.a,u.d-u.b+v)}else{w=e+f
u=r.x
u===$&&B.b()
u.cy=g
t=u.c
if(r.y)w=u.b1h(t.a,t.b,w)
else{s=u.ch
s.toString
u=u.a4T(s,t.a,t.b,w,u.gbDg())
w=u}if(!w)return!1}if(x!=null){w=r.b
x.$6(w,r.c,w,e,f,g)}if(r.f===1)if(!r.b2b(g,r.b,r.c,e,f))return!1
if(e+f===r.c)r.w=!0
return!0},
b2b(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
A.a9l.prototype={
aX7(d,e){var x=this,w=d.cu()
x.r=0
x.f=(w&1)!==0
x.w=d.d-d.b
x.x=e-16}}
A.at9.prototype={}
A.aso.prototype={
a9j(d){var x,w=this
if(d===0)return!1
x=(d<<1>>>0)-1
w.e=x
x=new Int32Array(x<<1>>>0)
w.d=x
x[1]=-1
w.f=1
D.C.ma(w.a,0,128,255)
return!0},
aze(d,e){var x,w,v,u,t,s=this
for(x=0,w=0,v=0;v<e;++v)if(d[v]>0){++x
w=v}if(!s.a9j(x))return!1
if(x===1){if(w<0||w>=e)return!1
return s.a4_(w,0,0)}u=new Int32Array(e)
if(!s.bd6(d,e,u))return!1
for(v=0;v<e;++v){t=d[v]
if(t>0)if(!s.a4_(v,u[v],t))return!1}return s.f===s.e},
bwN(d,e,f,g,h){var x,w,v,u=this
if(!u.a9j(h))return!1
for(x=0;x<h;++x){w=e[x]
if(w!==-1){v=f[x]
if(v>=g)return u.f===u.e
if(!u.a4_(v,w,d[x]))return u.f===u.e}}return u.f===u.e},
Ay(d){var x,w,v=this,u=d.aGg(),t=d.a,s=u&127,r=v.a[s]
if(r<=7){d.a=t+r
return v.b[s]}x=v.c[s]
t+=7
u=u>>>7
do{w=v.d
w===$&&B.b()
x=x+w[(x<<1>>>0)+1]+(u&1)
u=u>>>1;++t}while(v.as5(x))
d.a=t
return v.d[x<<1>>>0]},
a4_(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
if(f<=7){x=l.atW(e,f)
for(w=D.c.f0(1,7-f),v=l.b,u=v.$flags|0,t=l.a,s=t.$flags|0,r=0;r<w;++r){q=(x|D.c.f0(r,f))>>>0
u&2&&B.F(v)
v[q]=d
s&2&&B.F(t)
t[q]=f}}else x=l.atW(D.c.o9(e,f-7),7)
for(w=l.c,v=w.$flags|0,p=7,o=0;n=f-1,f>0;f=n){u=l.e
if(o>=u)return!1
t=l.d
t===$&&B.b()
s=(o<<1>>>0)+1
m=t[s]
if(m<0){m=l.f
if(m===u)return!1
t.$flags&2&&B.F(t)
t[s]=m-o
l.f=m+2
t[(m<<1>>>0)+1]=-1
t[(m+1<<1>>>0)+1]=-1}else if(m===0)return!1
o+=t[s]+(D.c.o9(e,n)&1);--p
if(p===0){v&2&&B.F(w)
w[x]=o}}if(l.bgG(o))l.bgH(o,0)
else if(l.as5(o))return!1
w=l.d
w===$&&B.b()
w.$flags&2&&B.F(w)
w[o<<1>>>0]=d
return!0},
atW(d,e){return D.c.h7((C.Ve[d&15]<<4|C.Ve[D.c.S(d,4)])>>>0,8-e)},
bgH(d,e){var x=this.d
x===$&&B.b()
x.$flags&2&&B.F(x)
x[(d<<1>>>0)+1]=e},
as5(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]!==0},
bgG(d){var x=this.d
x===$&&B.b()
return x[(d<<1>>>0)+1]<0},
bd6(d,e,f){var x,w,v,u,t,s,r,q,p=new Int32Array(16),o=new Int32Array(16)
for(x=0,w=0;x<e;++x){v=d[x]
if(v>w)w=v}if(w>15)return!1
for(x=0;x<e;++x){u=d[x]
p[u]=p[u]+1}p[0]=0
o[0]=-1
for(t=1,s=0;t<=w;++t){s=s+p[t-1]<<1>>>0
o[t]=s}for(u=f.$flags|0,x=0;x<e;++x){r=d[x]
if(r>0){q=o[r]
o[r]=q+1
u&2&&B.F(f)
f[x]=q}else{u&2&&B.F(f)
f[x]=-1}}return!0}}
A.a0D.prototype={
h(d,e){return this.a[e]}}
A.Ui.prototype={
J(){return"WebPFormat."+this.b}}
A.aFo.prototype={}
A.ata.prototype={}
A.bQv.prototype={
IC(d){var x=A.d_(d,!1,null,0)
this.b=x
if(!this.aoT(x))return!1
return!0},
oQ(d){var x,w=this,v=null,u=A.d_(d,!1,v,0)
w.b=u
if(!w.aoT(u))return v
u=new A.ata(C.pT,B.a([],y.J))
w.a=u
x=w.b
x.toString
if(!w.axN(x,u))return v
u=w.a
switch(u.f.a){case 3:u.as=u.z.length
return u
case 2:x=w.b
x.toString
x.d=u.ay
if(!A.czL(x,u).Ot())return v
u=w.a
u.as=u.z.length
return u
case 1:x=w.b
x.toString
x.d=u.ay
if(!A.czJ(x,u).Ot())return v
u=w.a
u.as=u.z.length
return u
case 0:throw B.n(A.cc("Unknown format for WebP"))}},
ko(d){var x,w,v,u,t=this,s=t.b
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
return t.amX(s.Bc(x,w),d)}w=x.f
if(w===C.zm){s.toString
u=s.Bc(x.ch,x.ay)
s=t.a
s.toString
return A.czL(u,s).om(0)}else if(w===C.HE){s.toString
u=s.Bc(x.ch,x.ay)
s=t.a
s.toString
return A.czJ(u,s).om(0)}return null},
n8(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=null
if(p.oQ(e)==null)return o
x=p.a.e
if(!x)return p.ko(0)
for(w=o,v=w,u=0;x=p.a,u<x.as;++u){f=x.z[u]
t=p.ko(u)
if(t==null)continue
t.y=f.e
if(v==null||w==null){x=p.a
s=x.a
x=x.b
r=t.gqq()
q=t.a
q=q==null?o:q.gdu()
if(q==null)q=C.ac
v=A.i1(o,o,q,t.y,C.bv,x,o,0,r,o,C.ac,s,!1)
w=v}else{w=A.Cw(w,!1,!1)
x=f.f
x===$&&B.b()
if(x){x=w.a
if(x!=null)x.nI(0,o)}}A.cBg(w,t,C.AA,o,o,f.a,f.b,o,o,o,o)
v.nG(w)}return v},
amX(d,e){var x,w,v,u=null,t=B.a([],y.J),s=new A.ata(C.pT,t)
if(!this.axN(d,s))return u
if(s.f===C.pT)return u
s.as=this.a.as
if(s.e){x=t.length
if(e>=x)return u
w=t[e]
t=w.x
t===$&&B.b()
x=w.w
x===$&&B.b()
return this.amX(d.Bc(t,x),e)}else{v=d.Bc(s.ch,s.ay)
t=s.f
if(t===C.zm)return A.czL(v,s).om(0)
else if(t===C.HE)return A.czJ(v,s).om(0)}return u},
aoT(d){if(d.js(4)!=="RIFF")return!1
d.a5()
if(d.js(4)!=="WEBP")return!1
return!0},
axN(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
for(x=d.c,w=d.b;d.d<x;){v=d.js(4)
u=d.a5()
t=u+1>>>1<<1>>>0
s=d.d
r=s-w
switch(v){case"VP8X":if(!this.b6C(d,e))return!1
break
case"VP8 ":e.ay=r
e.ch=u
e.f=C.HE
break
case"VP8L":e.ay=r
e.ch=u
e.f=C.zm
break
case"ALPH":e.toString
s=d.a
q=d.e
p=J.a2(s)
o=p.gu(s)
p=p.gu(s)
s=new A.mh(s,0,Math.min(o,p),0,q)
e.at=s
s.d=d.d
d.d+=t
break
case"ANIM":e.f=C.bJJ
n=d.a5()
s=new Uint8Array(4)
s[0]=n>>>8&255
s[1]=n>>>16&255
s[2]=n>>>24&255
s[3]=n&255
d.am()
break
case"ANMF":if(!this.b5o(d,e,u))return!1
break
case"ICCP":e.toString
m=d.jy(u)
d.d=d.d+(m.c-m.d)
m.hZ()
break
case"EXIF":e.toString
e.w=d.js(u)
break
case"XMP ":e.toString
d.js(u)
break
default:d.d=s+t
break}s=d.d
l=t-(s-w-r)
if(l>0)d.d=s+l}if(!e.d)e.d=e.at!=null
return e.f!==C.pT},
b6C(d,e){var x,w,v,u,t=d.cu()
if((t&192)!==0)return!1
x=D.c.S(t,4)
w=D.c.S(t,1)
if((t&1)!==0)return!1
if(d.rY()!==0)return!1
v=d.rY()
u=d.rY()
e.a=v+1
e.b=u+1
e.e=(w&1)!==0
e.d=(x&1)!==0
return!0},
b5o(d,e,f){var x,w=d.rY(),v=d.rY()
d.rY()
x=new A.at9(w*2,v*2,d.rY()+1,d.rY())
x.aX7(d,f)
if(x.r!==0)return!1
e.z.push(x)
return!0}}
A.bkc.prototype={
J(){return"IccProfileCompression."+this.b}}
A.a12.prototype={
bye(){var x,w=this
if(w.b===C.Cs)return w.c
x=C.Jo.aCe(w.c,null)
w.c=x
w.b=C.Cs
return x}}
A.arr.prototype={
J(){return"FrameType."+this.b}}
A.Cx.prototype={
gle(){var x=this.x
return x===$?this.x=B.a([],y.g):x},
aWw(d,e,f,g){var x,w,v,u=this,t=d.gdu(),s=d.gqq(),r=d.a
u.amM(g,e,t,s,r==null?null:r.geZ())
t=d.b
if(t!=null)u.b=B.is(t,y.N,y.I)
t=d.d
if(t!=null){s=y.N
u.d=B.is(t,s,s)}u.gle().push(u)
if(!f){x=d.gle().length
for(t=y.g,w=1;w<x;++w){v=d.x
u.nG(A.asA((v===$?d.x=B.a([],t):v)[w],e,!1,g))}}},
aWv(d,e,f){var x,w,v,u,t=this,s=d.b
if(s!=null)t.b=B.is(s,y.N,y.I)
s=d.d
if(s!=null){x=y.N
t.d=B.is(s,x,x)}t.gle().push(t)
if(!e&&d.gle().length>1){w=d.gle().length
for(s=y.g,v=1;v<w;++v){u=d.x
t.nG(A.Cw((u===$?d.x=B.a([],s):u)[v],!1,!1))}}},
nG(d){var x=this
if(d==null)d=A.Cw(x,!0,!0)
d.z=x.gle().length
if(D.b.gY(x.gle())!==d)x.gle().push(d)
return d},
Xv(){return this.nG(null)},
amM(d,e,f,g,h){var x,w,v=this,u=null
switch(f.a){case 0:if(h==null){x=D.d.fd(d*g/8)
w=new A.Qa($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.fd(d/8)
w=new A.Qa($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 1:if(h==null){x=D.d.fd(d*(g<<1>>>0)/8)
w=new A.Qc($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.fd(d/4)
w=new A.Qc($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 2:if(h==null){if(g===2)x=d
else if(g===4)x=d*2
else x=g===3?D.d.fd(d*1.5):D.d.fd(d/2)
w=new A.Qe($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.d.fd(d/2)
w=new A.Qe($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 3:if(h==null)v.a=A.cHK(d,e,g)
else v.a=new A.Qf(new Uint8Array(d*e),h,d,e,1)
break
case 4:x=d*e
if(h==null)v.a=new A.Qb(new Uint16Array(x*g),u,d,e,g)
else v.a=new A.Qb(new Uint16Array(x),h,d,e,1)
break
case 5:v.a=A.d45(d,e,g)
break
case 6:v.a=new A.a1a(new Int8Array(d*e*g),d,e,g)
break
case 7:v.a=new A.a18(new Int16Array(d*e*g),d,e,g)
break
case 8:v.a=new A.a19(new Int32Array(d*e*g),d,e,g)
break
case 9:v.a=A.d43(d,e,g)
break
case 10:v.a=A.d44(d,e,g)
break
case 11:v.a=new A.a17(new Float64Array(d*e*4*g),d,e,g)
break}},
j(d){var x=this
return"Image("+x.gd2(0)+", "+x.gb8(0)+", "+x.gdu().b+", "+x.gqq()+")"},
gd2(d){var x=this.a
x=x==null?null:x.a
return x==null?0:x},
gb8(d){var x=this.a
x=x==null?null:x.b
return x==null?0:x},
gdu(){var x=this.a
x=x==null?null:x.gdu()
return x==null?C.ac:x},
gx8(){var x=this.e
return x==null?this.e=new A.Pu(B.K(y.N,y.P)):x},
aNr(d,e){var x=this,w=x.b;(w==null?x.b=B.K(y.N,y.I):w).m(0,d,e)
if(x.b.a===0)x.b=null},
ga6(d){var x=this.a
return x.ga6(x)},
gak(d){var x=this.a
x=x==null?null:x.gak(x)
if(x==null)x=D.C.gak(new Uint8Array(0))
return x},
gqq(){var x=this.a
x=x==null?null:x.geZ()
x=x==null?null:x.b
if(x==null){x=this.a
x=x==null?null:x.c}return x==null?0:x},
grI(){var x=this.a
return(x==null?null:x.geZ())!=null},
gn4(){var x=this.a
x=x==null?null:x.gn4()
return x==null?0:x},
aEm(d,e){return d>=0&&e>=0&&d<this.gd2(0)&&e<this.gb8(0)},
o5(d,e,f,g){var x=this.a
x=x==null?null:x.o5(d,e,f,g)
if(x==null)x=new A.ys(new Uint8Array(0))
return x},
ei(d,e,f){var x=this.a
x=x==null?null:x.ei(d,e,f)
return x==null?new A.fq():x},
o6(d,e){return this.ei(d,e,null)},
ky(d,e){if(d<0||d>=this.gd2(0)||e<0||e>=this.gb8(0))return new A.fq()
return this.ei(d,e,null)},
aLf(d,e,f){switch(f.a){case 0:return this.ky(D.d.C(d),D.d.C(e))
case 1:case 3:return this.aLg(d,e)
case 2:return this.aLe(d,e)}},
aLg(d,e){var x,w,v,u,t,s,r=this,q=D.d.C(d),p=q-(d>=0?0:1),o=p+1
q=D.d.C(e)
x=q-(e>=0?0:1)
w=x+1
q=new A.bl1(d-p,e-x)
v=r.ky(p,x)
u=w>=r.gb8(0)?v:r.ky(p,w)
t=o>=r.gd2(0)?v:r.ky(o,x)
s=o>=r.gd2(0)||w>=r.gb8(0)?v:r.ky(o,w)
return r.o5(q.$4(v.gah(v),t.gah(t),u.gah(u),s.gah(s)),q.$4(v.gar(),t.gar(),u.gar(),s.gar()),q.$4(v.gav(v),t.gav(t),u.gav(u),s.gav(s)),q.$4(v.gaG(v),t.gaG(t),u.gaG(u),s.gaG(s)))},
aLe(d0,d1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=D.d.C(d0),c6=c5-(d0>=0?0:1),c7=c6-1,c8=c6+1,c9=c6+2
c5=D.d.C(d1)
x=c5-(d1>=0?0:1)
w=x-1
v=x+1
u=x+2
t=d0-c6
s=d1-x
c5=new A.bl0()
r=c4.ky(c6,x)
q=c7<0
p=!q
o=!p||w<0?r:c4.ky(c7,w)
n=q?r:c4.ky(c6,w)
m=w<0
l=m||c8>=c4.gd2(0)?r:c4.ky(c8,w)
k=c9>=c4.gd2(0)||m?r:c4.ky(c9,w)
j=c5.$5(t,o.gah(o),n.gah(n),l.gah(l),k.gah(k))
i=c5.$5(t,o.gar(),n.gar(),l.gar(),k.gar())
h=c5.$5(t,o.gav(o),n.gav(n),l.gav(l),k.gav(k))
g=c5.$5(t,o.gaG(o),n.gaG(n),l.gaG(l),k.gaG(k))
f=q?r:c4.ky(c7,x)
e=c8>=c4.gd2(0)?r:c4.ky(c8,x)
d=c9>=c4.gd2(0)?r:c4.ky(c9,x)
a0=c5.$5(t,f.gah(f),r.gah(r),e.gah(e),d.gah(d))
a1=c5.$5(t,f.gar(),r.gar(),e.gar(),d.gar())
a2=c5.$5(t,f.gav(f),r.gav(r),e.gav(e),d.gav(d))
a3=c5.$5(t,f.gaG(f),r.gaG(r),e.gaG(e),d.gaG(d))
a4=!p||v>=c4.gb8(0)?r:c4.ky(c7,v)
a5=v>=c4.gb8(0)?r:c4.ky(c6,v)
a6=c8>=c4.gd2(0)||v>=c4.gb8(0)?r:c4.ky(c8,v)
a7=c9>=c4.gd2(0)||v>=c4.gb8(0)?r:c4.ky(c9,v)
a8=c5.$5(t,a4.gah(a4),a5.gah(a5),a6.gah(a6),a7.gah(a7))
a9=c5.$5(t,a4.gar(),a5.gar(),a6.gar(),a7.gar())
b0=c5.$5(t,a4.gav(a4),a5.gav(a5),a6.gav(a6),a7.gav(a7))
b1=c5.$5(t,a4.gaG(a4),a5.gaG(a5),a6.gaG(a6),a7.gaG(a7))
b2=!p||u>=c4.gb8(0)?r:c4.ky(c7,u)
b3=u>=c4.gb8(0)?r:c4.ky(c6,u)
b4=c8>=c4.gd2(0)||u>=c4.gb8(0)?r:c4.ky(c8,u)
b5=c9>=c4.gd2(0)||u>=c4.gb8(0)?r:c4.ky(c9,u)
b6=c5.$5(t,b2.gah(b2),b3.gah(b3),b4.gah(b4),b5.gah(b5))
b7=c5.$5(t,b2.gar(),b3.gar(),b4.gar(),b5.gar())
b8=c5.$5(t,b2.gav(b2),b3.gav(b3),b4.gav(b4),b5.gav(b5))
b9=c5.$5(t,b2.gaG(b2),b3.gaG(b3),b4.gaG(b4),b5.gaG(b5))
c0=c5.$5(s,j,a0,a8,b6)
c1=c5.$5(s,i,a1,a9,b7)
c2=c5.$5(s,h,a2,b0,b8)
c3=c5.$5(s,g,a3,b1,b9)
return c4.o5(D.d.C(c0),D.d.C(c1),D.d.C(c2),D.d.C(c3))},
B3(d,e,f){var x
if(y.c0.b(f))if(f.gfu(f).geZ()!=null)if(this.grI()){x=this.a
if(x!=null)x.fn(d,e,f.geb(f),0,0)
return}x=this.a
if(x!=null)x.kA(d,e,f.gah(f),f.gar(),f.gav(f),f.gaG(f))},
gcl(){var x=this.a
x=x==null?null:x.gcl()
return x==null?0:x},
nI(d,e){var x=this.a
return x==null?null:x.nI(0,e)},
V(d){return this.nI(0,null)},
aAz(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
if(a5==null)a5=a3.gdu()
if(a6==null)a6=a3.gqq()
x=C.a3K.h(0,a5)
w=!1
if(a5===a3.gdu())if(a6===a3.gqq()){v=a3.a
w=(v==null?a4:v.geZ())==null}if(w)return A.Cw(a3,!1,!1)
for(w=a3.gle(),v=w.length,u=y.N,t=y.p,s=a4,r=0;r<w.length;w.length===v||(0,B.S)(w),++r,s=i){q=w[r]
p=q.a
o=p==null
n=o?a4:p.a
if(n==null)n=0
p=o?a4:p.b
if(p==null)p=0
o=q.e
o=o==null?a4:A.a_O(o)
m=q.c
if(m==null)m=a4
else{l=m.a
k=m.b
m=m.c
m=new A.a12(l,k,new Uint8Array(m.subarray(0,B.rc(0,a4,m.length))))}l=q.w
k=q.r
j=A.i1(a4,o,a5,q.y,l,p,m,k,a6,a4,C.ac,n,!1)
p=q.d
j.d=p!=null?B.is(p,u,u):a4
if(s!=null){s.nG(j)
i=s}else i=j
p=j.a
h=p==null?a4:p.geZ()
p=j.a
p=p==null?a4:p.geZ()
g=p==null?a4:p.gdu()
if(g==null)g=a5
p=q.a
if(h!=null){f=B.K(t,t)
e=p==null?a4:p.ei(0,0,a4)
if(e==null)e=new A.fq()
for(p=j.a,p=p.ga6(p),d=a4,a0=0;p.q();){a1=p.gL(p)
a2=A.cRK(D.d.fD(e.giR()*255),D.d.fD(e.giA()*255),D.d.fD(e.giI()*255),0)
if(f.a0(0,a2)){o=f.h(0,a2)
o.toString
a1.seb(0,o)}else{f.m(0,a2,a0)
a1.seb(0,a0)
d=A.pT(e,x,g,a6,d)
h.pC(a0,d.gah(d),d.gar(),d.gav(d));++a0}e.q()}}else{e=p==null?a4:p.ei(0,0,a4)
if(e==null)e=new A.fq()
for(p=j.a,p=p.ga6(p);p.q();){A.pT(e,x,a4,a4,p.gL(p))
e.q()}}}s.toString
return s},
ol(d){return this.aAz(d,null)},
aAy(d){return this.aAz(null,d)},
bv5(d){var x,w,v,u
if(this.d==null){x=y.N
this.d=B.K(x,x)}for(x=new B.ck(d,d.r,d.e,B.t(d).i("ck<1>"));x.q();){w=x.d
v=this.d
v.toString
u=d.h(0,w)
u.toString
v.m(0,w,u)}},
b0T(d,e,f){var x,w=65536
switch(e.a){case 0:return null
case 1:return null
case 2:return null
case 3:x=d===C.cC?w:256
return new A.uS(new Uint8Array(x*f),x,f)
case 4:x=d===C.cC?w:256
return new A.axJ(new Uint16Array(x*f),x,f)
case 5:x=d===C.cC?w:256
return new A.a3S(new Uint32Array(x*f),x,f)
case 6:x=d===C.cC?w:256
return new A.axI(new Int8Array(x*f),x,f)
case 7:x=d===C.cC?w:256
return new A.axG(new Int16Array(x*f),x,f)
case 8:x=d===C.cC?w:256
return new A.axH(new Int32Array(x*f),x,f)
case 9:x=d===C.cC?w:256
return new A.axD(new Uint16Array(x*f),x,f)
case 10:x=d===C.cC?w:256
return new A.axE(new Float32Array(x*f),x,f)
case 11:x=d===C.cC?w:256
return new A.axF(new Float64Array(x*f),x,f)}}}
A.mg.prototype={
geZ(){return null}}
A.Q8.prototype={
r9(d,e){var x=this,w=x.d
if(e)w=new Uint16Array(w.length)
else w=new Uint16Array(B.bV(w))
return new A.Q8(w,x.a,x.b,x.c)},
gdu(){return C.iv},
gak(d){return D.ec.gak(this.d)},
gn4(){return 16},
gt0(){return this.a*this.c*2},
ga6(d){return A.cy4(this)},
qB(d,e,f,g,h){return A.uT(A.cy4(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcl(){return 1},
grN(){return!0},
o5(d,e,f,g){var x=new Uint16Array(4),w=new A.O9(x)
x[0]=A.h7(d)
x[1]=A.h7(e)
x[2]=A.h7(f)
x[3]=A.h7(g)
x=w
return x},
ei(d,e,f){if(f==null||!(f instanceof A.Jp)||f.d!==this)f=A.cy4(this)
f.hy(0,d,e)
return f},
o6(d,e){return this.ei(d,e,null)},
mR(d,e,f){var x=this.c,w=this.d,v=A.h7(f)
w.$flags&2&&B.F(w)
w[e*this.a*x+d*x]=v},
fn(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=A.h7(f)
v.$flags&2&&B.F(v)
v[w]=u
if(x>1){v[w+1]=A.h7(g)
if(x>2)v[w+2]=A.h7(h)}},
kA(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=A.h7(f)
v.$flags&2&&B.F(v)
v[w]=u
if(x>1){v[w+1]=A.h7(g)
if(x>2){v[w+2]=A.h7(h)
if(x>3)v[w+3]=A.h7(i)}}},
j(d){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
nI(d,e){}}
A.Q9.prototype={
r9(d,e){var x=this,w=x.d
if(e)w=new Float32Array(w.length)
else w=new Float32Array(B.bV(w))
return new A.Q9(w,x.a,x.b,x.c)},
gdu(){return C.k5},
gak(d){return D.fB.gak(this.d)},
gn4(){return 32},
ga6(d){return A.cy5(this)},
qB(d,e,f,g,h){return A.uT(A.cy5(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcl(){return 1},
gt0(){return this.a*this.c*4},
grN(){return!0},
o5(d,e,f,g){var x=new Float32Array(4),w=new A.Oa(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
ei(d,e,f){if(f==null||!(f instanceof A.Jq)||f.d!==this)f=A.cy5(this)
f.hy(0,d,e)
return f},
o6(d,e){return this.ei(d,e,null)},
mR(d,e,f){var x=this.c,w=this.d
w.$flags&2&&B.F(w)
w[e*this.a*x+d*x]=f},
fn(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.F(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
kA(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.F(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
nI(d,e){}}
A.a17.prototype={
r9(d,e){var x=this,w=x.d
if(e)w=new Float64Array(w.length)
else w=new Float64Array(B.bV(w))
return new A.a17(w,x.a,x.b,x.c)},
gdu(){return C.lK},
gak(d){return D.eE.gak(this.d)},
gu(d){return this.d.byteLength},
gn4(){return 64},
ga6(d){return A.cy6(this)},
qB(d,e,f,g,h){return A.uT(A.cy6(this),e,f,g,h)},
gcl(){return 1},
gt0(){return this.a*this.c*8},
grN(){return!0},
o5(d,e,f,g){var x=new Float64Array(4),w=new A.Ob(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
ei(d,e,f){if(f==null||!(f instanceof A.Jr)||f.d!==this)f=A.cy6(this)
f.hy(0,d,e)
return f},
o6(d,e){return this.ei(d,e,null)},
mR(d,e,f){var x=this.c,w=this.d
w.$flags&2&&B.F(w)
w[e*this.a*x+d*x]=f},
fn(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.F(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
kA(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&B.F(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
nI(d,e){}}
A.a18.prototype={
r9(d,e){var x=this,w=x.d
if(e)w=new Int16Array(w.length)
else w=new Int16Array(B.bV(w))
return new A.a18(w,x.a,x.b,x.c)},
gdu(){return C.lM},
gak(d){return D.kE.gak(this.d)},
ga6(d){return A.cy7(this)},
qB(d,e,f,g,h){return A.uT(A.cy7(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcl(){return 32767},
grN(){return!0},
gn4(){return 16},
gt0(){return this.a*this.c*2},
o5(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Int16Array(4),s=new A.Oc(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ei(d,e,f){if(f==null||!(f instanceof A.Js)||f.d!==this)f=A.cy7(this)
f.hy(0,d,e)
return f},
o6(d,e){return this.ei(d,e,null)},
mR(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.F(w)
w[e*this.a*x+d*x]=v},
fn(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.F(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
kA(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.F(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
nI(d,e){}}
A.a19.prototype={
r9(d,e){var x=this,w=x.d
if(e)w=new Int32Array(w.length)
else w=new Int32Array(B.bV(w))
return new A.a19(w,x.a,x.b,x.c)},
gdu(){return C.lN},
gak(d){return D.cI.gak(this.d)},
gn4(){return 32},
gt0(){return this.a*this.c*4},
ga6(d){return A.cy8(this)},
qB(d,e,f,g,h){return A.uT(A.cy8(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcl(){return 2147483647},
grN(){return!0},
o5(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Int32Array(4),s=new A.Od(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ei(d,e,f){if(f==null||!(f instanceof A.Jt)||f.d!==this)f=A.cy8(this)
f.hy(0,d,e)
return f},
o6(d,e){return this.ei(d,e,null)},
mR(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.F(w)
w[e*this.a*x+d*x]=v},
fn(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.F(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
kA(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.F(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
nI(d,e){}}
A.a1a.prototype={
r9(d,e){var x=this,w=x.d
if(e)w=new Int8Array(w.length)
else w=new Int8Array(B.bV(w))
return new A.a1a(w,x.a,x.b,x.c)},
gdu(){return C.lL},
gak(d){return D.kF.gak(this.d)},
gt0(){return this.a*this.c},
ga6(d){return A.cy9(this)},
qB(d,e,f,g,h){return A.uT(A.cy9(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcl(){return 127},
grN(){return!0},
gn4(){return 8},
o5(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Int8Array(4),s=new A.Oe(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ei(d,e,f){if(f==null||!(f instanceof A.Ju)||f.d!==this)f=A.cy9(this)
f.hy(0,d,e)
return f},
o6(d,e){return this.ei(d,e,null)},
mR(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.F(w)
w[e*(this.a*x)+d*x]=v},
fn(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.F(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
kA(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.F(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
nI(d,e){}}
A.Qa.prototype={
bRa(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.be()
this.d=x},
r9(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bV(v))}x=w.f
x=x==null?null:x.dY(0)
return new A.Qa(v,w.e,x,w.a,w.b,w.c)},
gdu(){return C.fT},
gu(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gcl(){var x=this.f
x=x==null?null:x.gcl()
return x==null?1:x},
grN(){return!1},
gak(d){var x=this.d
x===$&&B.b()
return D.C.gak(x)},
gn4(){return 1},
ga6(d){return A.a45(this)},
qB(d,e,f,g,h){return A.uT(A.a45(this),e,f,g,h)},
o5(d,e,f,g){var x=new A.Oh(4,0)
x.iC(D.d.C(d),D.d.C(e),D.d.C(f),D.d.C(g))
return x},
ei(d,e,f){if(f==null||!(f instanceof A.Jv)||f.f!==this)f=A.a45(this)
f.hy(0,d,e)
return f},
o6(d,e){return this.ei(d,e,null)},
mR(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a45(w):x).hy(0,d,e)
w.r.kZ(0,f)},
fn(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a45(w):x).hy(0,d,e)
w.r.kR(f,g,h)},
kA(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a45(w):x).hy(0,d,e)
w.r.iC(f,g,h,i)},
j(d){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
nI(d,e){},
gt0(){return this.e},
geZ(){return this.f}}
A.Qb.prototype={
r9(d,e){var x,w=this,v=w.d
if(e)v=new Uint16Array(v.length)
else v=new Uint16Array(B.bV(v))
x=w.e
x=x==null?null:x.dY(0)
return new A.Qb(v,x,w.a,w.b,w.c)},
gdu(){return C.cC},
gak(d){return D.ec.gak(this.d)},
gn4(){return 16},
gcl(){var x=this.e
x=x==null?null:x.gcl()
return x==null?65535:x},
gt0(){return this.a*this.c*2},
ga6(d){return A.cya(this)},
qB(d,e,f,g,h){return A.uT(A.cya(this),e,f,g,h)},
gu(d){return this.d.byteLength},
grN(){return!0},
o5(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Uint16Array(4),s=new A.Oi(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ei(d,e,f){if(f==null||!(f instanceof A.Jw)||f.d!==this)f=A.cya(this)
f.hy(0,d,e)
return f},
o6(d,e){return this.ei(d,e,null)},
mR(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.F(w)
w[e*this.a*x+d*x]=v},
fn(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.F(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
kA(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.F(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
nI(d,e){},
geZ(){return this.e}}
A.Qc.prototype={
bRb(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.be()
this.d=x},
r9(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bV(v))}x=w.f
x=x==null?null:x.dY(0)
return new A.Qc(v,w.e,x,w.a,w.b,w.c)},
gdu(){return C.hJ},
gn4(){return 2},
gak(d){var x=this.d
x===$&&B.b()
return D.C.gak(x)},
ga6(d){return A.a46(this)},
qB(d,e,f,g,h){return A.uT(A.a46(this),e,f,g,h)},
gu(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gcl(){var x=this.f
x=x==null?null:x.gcl()
return x==null?3:x},
grN(){return!1},
o5(d,e,f,g){var x=new A.Oj(4,0)
x.iC(D.d.C(d),D.d.C(e),D.d.C(f),D.d.C(g))
return x},
ei(d,e,f){if(f==null||!(f instanceof A.Jx)||f.f!==this)f=A.a46(this)
f.hy(0,d,e)
return f},
o6(d,e){return this.ei(d,e,null)},
mR(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a46(w):x).hy(0,d,e)
w.r.l_(0,f)},
fn(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a46(w):x).hy(0,d,e)
w.r.kR(f,g,h)},
kA(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a46(w):x).hy(0,d,e)
w.r.iC(f,g,h,i)},
j(d){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
nI(d,e){},
gt0(){return this.e},
geZ(){return this.f}}
A.Qd.prototype={
r9(d,e){var x=this,w=x.d
if(e)w=new Uint32Array(w.length)
else w=new Uint32Array(B.bV(w))
return new A.Qd(w,x.a,x.b,x.c)},
gdu(){return C.k6},
gak(d){return D.bz.gak(this.d)},
gt0(){return this.a*this.c*4},
gn4(){return 32},
gcl(){return 4294967295},
ga6(d){return A.cyb(this)},
qB(d,e,f,g,h){return A.uT(A.cyb(this),e,f,g,h)},
gu(d){return this.d.byteLength},
grN(){return!0},
o5(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new Uint32Array(4),s=new A.Ok(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
ei(d,e,f){if(f==null||!(f instanceof A.Jy)||f.d!==this)f=A.cyb(this)
f.hy(0,d,e)
return f},
o6(d,e){return this.ei(d,e,null)},
mR(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.F(w)
w[e*this.a*x+d*x]=v},
fn(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.F(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
kA(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.F(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
nI(d,e){}}
A.Qe.prototype={
bRc(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&B.be()
this.d=x},
r9(d,e){var x,w=this,v=w.d
if(e){v===$&&B.b()
v=new Uint8Array(v.length)}else{v===$&&B.b()
v=new Uint8Array(B.bV(v))}x=w.f
x=x==null?null:x.dY(0)
return new A.Qe(v,w.e,x,w.a,w.b,w.c)},
gdu(){return C.hK},
gak(d){var x=this.d
x===$&&B.b()
return D.C.gak(x)},
ga6(d){return A.a47(this)},
qB(d,e,f,g,h){return A.uT(A.a47(this),e,f,g,h)},
gu(d){var x=this.d
x===$&&B.b()
return x.byteLength},
gcl(){var x=this.f
x=x==null?null:x.gcl()
return x==null?15:x},
grN(){return!1},
gn4(){return 4},
o5(d,e,f,g){var x=D.d.C(d),w=D.d.C(e),v=D.d.C(f),u=D.d.C(g),t=new A.Ol(4,new Uint8Array(2))
t.iC(x,w,v,u)
x=t
return x},
ei(d,e,f){if(f==null||!(f instanceof A.Jz)||f.e!==this)f=A.a47(this)
f.hy(0,d,e)
return f},
o6(d,e){return this.ei(d,e,null)},
mR(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a47(w):x).hy(0,d,e)
w.r.l0(0,f)},
fn(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a47(w):x).hy(0,d,e)
w.r.kR(f,g,h)},
kA(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.a47(w):x).hy(0,d,e)
w.r.iC(f,g,h,i)},
j(d){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
nI(d,e){},
gt0(){return this.e},
geZ(){return this.f}}
A.Qf.prototype={
r9(d,e){var x,w=this,v=w.d
if(e)v=new Uint8Array(v.length)
else v=new Uint8Array(B.bV(v))
x=w.e
x=x==null?null:x.dY(0)
return new A.Qf(v,x,w.a,w.b,w.c)},
gdu(){return C.ac},
gak(d){return D.C.gak(this.d)},
gt0(){return this.a*this.c},
gn4(){return 8},
ga6(d){return A.bvQ(this)},
qB(d,e,f,g,h){return A.uT(A.bvQ(this),e,f,g,h)},
gu(d){return this.d.byteLength},
gcl(){var x=this.e
x=x==null?null:x.gcl()
return x==null?255:x},
grN(){return!1},
o5(d,e,f,g){var x=A.d_d(D.d.C(D.d.b3(d,0,255)),D.d.C(D.d.b3(e,0,255)),D.d.C(D.d.b3(f,0,255)),D.d.C(D.d.b3(g,0,255)))
return x},
ei(d,e,f){if(f==null||!(f instanceof A.JA)||f.d!==this)f=A.bvQ(this)
f.hy(0,d,e)
return f},
o6(d,e){return this.ei(d,e,null)},
mR(d,e,f){var x=this.c,w=this.d,v=D.d.C(f)
w.$flags&2&&B.F(w)
w[e*(this.a*x)+d*x]=v},
fn(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.F(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2)v[w+2]=D.d.C(h)}},
kA(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.d.C(f)
v.$flags&2&&B.F(v)
v[w]=u
if(x>1){v[w+1]=D.d.C(g)
if(x>2){v[w+2]=D.d.C(h)
if(x>3)v[w+3]=D.d.C(i)}}},
j(d){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
nI(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=e==null?l:A.pT(e,l,C.ac,l,l),j=m.c
if(j===1){x=k==null?0:D.c.b3(B.bc(k.gah(k)),0,255)
j=m.d
D.C.ma(j,0,j.length,x)}else if(j===2){j=k==null
x=j?0:D.c.b3(B.bc(k.gah(k)),0,255)
w=j?0:D.c.b3(B.bc(k.gar()),0,255)
v=J.cvd(D.C.gak(m.d),0,null)
D.ec.ma(v,0,v.length,(w<<8|x)>>>0)}else if(j===4){j=k==null
x=j?0:D.c.b3(B.bc(k.gah(k)),0,255)
w=j?0:D.c.b3(B.bc(k.gar()),0,255)
u=j?0:D.c.b3(B.bc(k.gav(k)),0,255)
t=j?0:D.c.b3(B.bc(k.gaG(k)),0,255)
s=J.oK(D.C.gak(m.d),0,null)
D.bz.ma(s,0,s.length,(t<<24|u<<16|w<<8|x)>>>0)}else{j=k==null
x=j?0:D.c.b3(B.bc(k.gah(k)),0,255)
w=j?0:D.c.b3(B.bc(k.gar()),0,255)
u=j?0:D.c.b3(B.bc(k.gav(k)),0,255)
for(r=A.bvQ(m),j=r.d,q=j.c>0,j=j.d,p=j.$flags|0;r.q();){if(q){o=r.c
n=D.d.C(D.c.b3(x,0,255))
p&2&&B.F(j)
j[o]=n}r.sar(w)
r.sav(0,u)}}},
geZ(){return this.e}}
A.atb.prototype={
J(){return"Interpolation."+this.b}}
A.bvr.prototype={}
A.axD.prototype={
dY(d){return new A.axD(new Uint16Array(B.bV(this.c)),this.a,this.b)},
gak(d){return D.ec.gak(this.c)},
gdu(){return C.iv},
gcl(){return 1},
fw(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=A.h7(g)
x.$flags&2&&B.F(x)
x[e*v+f]=w}},
pC(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=A.h7(e)
x.$flags&2&&B.F(x)
x[d]=w
if(v>1){x[d+1]=A.h7(f)
if(v>2)x[d+2]=A.h7(g)}},
nm(d,e,f){var x,w=this.b
if(f<w){w=this.c[e*w+f]
x=$.i0
w=(x!=null?x:A.iU())[w]}else w=0
return w},
nq(d){var x=this.c[d*this.b],w=$.i0
return(w!=null?w:A.iU())[x]},
no(d){var x,w=this.b
if(w<2)return 0
w=this.c[d*w+1]
x=$.i0
return(x!=null?x:A.iU())[w]},
nn(d){var x,w=this.b
if(w<3)return 0
w=this.c[d*w+2]
x=$.i0
return(x!=null?x:A.iU())[w]},
oL(d){var x,w=this.b
if(w<4)return 0
w=this.c[d*w+3]
x=$.i0
return(x!=null?x:A.iU())[w]},
uD(d,e){return this.fw(0,d,0,e)},
uB(d,e){return this.fw(0,d,1,e)},
uA(d,e){return this.fw(0,d,2,e)},
uz(d,e){return this.fw(0,d,3,e)}}
A.axE.prototype={
dY(d){return new A.axE(new Float32Array(B.bV(this.c)),this.a,this.b)},
gak(d){return D.fB.gak(this.c)},
gdu(){return C.k5},
gcl(){return 1},
fw(d,e,f,g){var x,w=this.b
if(f<w){x=this.c
x.$flags&2&&B.F(x)
x[e*w+f]=g}},
pC(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x.$flags&2&&B.F(x)
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
nm(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nq(d){return this.c[d*this.b]},
no(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nn(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
oL(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uD(d,e){return this.fw(0,d,0,e)},
uB(d,e){return this.fw(0,d,1,e)},
uA(d,e){return this.fw(0,d,2,e)},
uz(d,e){return this.fw(0,d,3,e)}}
A.axF.prototype={
dY(d){return new A.axF(new Float64Array(B.bV(this.c)),this.a,this.b)},
gak(d){return D.eE.gak(this.c)},
gdu(){return C.lK},
gcl(){return 1},
fw(d,e,f,g){var x,w=this.b
if(f<w){x=this.c
x.$flags&2&&B.F(x)
x[e*w+f]=g}},
pC(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x.$flags&2&&B.F(x)
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
nm(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nq(d){return this.c[d*this.b]},
no(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nn(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
oL(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uD(d,e){return this.fw(0,d,0,e)},
uB(d,e){return this.fw(0,d,1,e)},
uA(d,e){return this.fw(0,d,2,e)},
uz(d,e){return this.fw(0,d,3,e)}}
A.axG.prototype={
dY(d){return new A.axG(new Int16Array(B.bV(this.c)),this.a,this.b)},
gak(d){return D.kE.gak(this.c)},
gdu(){return C.lM},
gcl(){return 32767},
fw(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.F(x)
x[e*v+f]=w}},
pC(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.F(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
nm(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nq(d){return this.c[d*this.b]},
no(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nn(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
oL(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uD(d,e){return this.fw(0,d,0,e)},
uB(d,e){return this.fw(0,d,1,e)},
uA(d,e){return this.fw(0,d,2,e)},
uz(d,e){return this.fw(0,d,3,e)}}
A.axH.prototype={
dY(d){return new A.axH(new Int32Array(B.bV(this.c)),this.a,this.b)},
gak(d){return D.cI.gak(this.c)},
gdu(){return C.lN},
gcl(){return 2147483647},
fw(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.F(x)
x[e*v+f]=w}},
pC(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.F(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
nm(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nq(d){return this.c[d*this.b]},
no(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nn(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
oL(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uD(d,e){return this.fw(0,d,0,e)},
uB(d,e){return this.fw(0,d,1,e)},
uA(d,e){return this.fw(0,d,2,e)},
uz(d,e){return this.fw(0,d,3,e)}}
A.axI.prototype={
dY(d){return new A.axI(new Int8Array(B.bV(this.c)),this.a,this.b)},
gak(d){return D.kF.gak(this.c)},
gdu(){return C.lL},
gcl(){return 127},
fw(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.F(x)
x[e*v+f]=w}},
pC(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.F(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
nm(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nq(d){return this.c[d*this.b]},
no(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nn(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
oL(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uD(d,e){return this.fw(0,d,0,e)},
uB(d,e){return this.fw(0,d,1,e)},
uA(d,e){return this.fw(0,d,2,e)},
uz(d,e){return this.fw(0,d,3,e)}}
A.axJ.prototype={
dY(d){return new A.axJ(new Uint16Array(B.bV(this.c)),this.a,this.b)},
gak(d){return D.ec.gak(this.c)},
gdu(){return C.cC},
gcl(){return 65535},
fw(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.F(x)
x[e*v+f]=w}},
pC(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.F(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
nm(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nq(d){return this.c[d*this.b]},
no(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nn(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
oL(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uD(d,e){return this.fw(0,d,0,e)},
uB(d,e){return this.fw(0,d,1,e)},
uA(d,e){return this.fw(0,d,2,e)},
uz(d,e){return this.fw(0,d,3,e)}}
A.a3S.prototype={
dY(d){return new A.a3S(new Uint32Array(B.bV(this.c)),this.a,this.b)},
gak(d){return D.bz.gak(this.c)},
gdu(){return C.k6},
gcl(){return 4294967295},
fw(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.F(x)
x[e*v+f]=w}},
pC(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.F(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
nm(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nq(d){return this.c[d*this.b]},
no(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
nn(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
oL(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
uD(d,e){return this.fw(0,d,0,e)},
uB(d,e){return this.fw(0,d,1,e)},
uA(d,e){return this.fw(0,d,2,e)},
uz(d,e){return this.fw(0,d,3,e)}}
A.uS.prototype={
dY(d){return A.cJF(this)},
gak(d){return D.C.gak(this.c)},
gdu(){return C.ac},
gcl(){return 255},
fw(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.c.C(g)
x.$flags&2&&B.F(x)
x[e*v+f]=w}},
pC(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.d.C(e)
x.$flags&2&&B.F(x)
x[d]=w
if(v>1){x[d+1]=D.d.C(f)
if(v>2)x[d+2]=D.d.C(g)}},
Sz(d,e,f,g,h){var x,w,v=this.b
d*=v
x=this.c
w=D.c.C(e)
x.$flags&2&&B.F(x)
x[d]=w
if(v>1){x[d+1]=D.c.C(f)
if(v>2){x[d+2]=D.c.C(g)
if(v>3)x[d+3]=D.c.C(h)}}},
nm(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
nq(d){var x
d*=this.b
x=this.c
if(d>=x.length)return 0
return x[d]},
no(d){var x=this.b
if(x<2)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+1]},
nn(d){var x=this.b
if(x<3)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+2]},
oL(d){var x=this.b
if(x<4)return 255
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+3]},
uD(d,e){return this.fw(0,d,0,e)},
uB(d,e){return this.fw(0,d,1,e)},
uA(d,e){return this.fw(0,d,2,e)},
uz(d,e){return this.fw(0,d,3,e)}}
A.Jp.prototype={
dY(d){var x=this
return new A.Jp(x.a,x.b,x.c,x.d)},
gdu(){return C.iv},
gu(d){return this.d.c},
geZ(){return null},
gcl(){return 1},
gnl(d){return this.a},
go4(d){return this.b},
hy(d,e,f){var x,w,v=this
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
h(d,e){var x,w=this.d
if(e<w.c){w=w.d[this.c+e]
x=$.i0
w=(x!=null?x:A.iU())[w]}else w=0
return w},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=A.h7(f)
v.$flags&2&&B.F(v)
v[x+e]=w}},
geb(d){return this.gah(0)},
seb(d,e){this.sah(0,e)},
gah(d){var x,w=this.d
if(w.c>0){w=w.d[this.c]
x=$.i0
w=(x!=null?x:A.iU())[w]}else w=0
return w},
sah(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=A.h7(e)
v.$flags&2&&B.F(v)
v[x]=w}},
gar(){var x,w=this.d
if(w.c>1){w=w.d[this.c+1]
x=$.i0
w=(x!=null?x:A.iU())[w]}else w=0
return w},
sar(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=A.h7(d)
v.$flags&2&&B.F(v)
v[x+1]=w}},
gav(d){var x,w=this.d
if(w.c>2){w=w.d[this.c+2]
x=$.i0
w=(x!=null?x:A.iU())[w]}else w=0
return w},
sav(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=A.h7(e)
v.$flags&2&&B.F(v)
v[x+2]=w}},
gaG(d){var x,w=this.d
if(w.c>3){w=w.d[this.c+3]
x=$.i0
w=(x!=null?x:A.iU())[w]}else w=0
return w},
saG(d,e){var x,w,v,u=this.d
if(u.c>3){x=this.gar()
u=u.d
w=this.c
v=A.h7(x)
u.$flags&2&&B.F(u)
u[w+3]=v}},
giR(){return this.gah(0)/1},
siR(d){this.sah(0,d)},
giA(){return this.gar()/1},
siA(d){this.sar(d)},
giI(){return this.gav(0)/1},
siI(d){this.sav(0,d)},
gfH(){return this.gaG(0)/1},
sfH(d){this.saG(0,d)},
gjQ(){return A.ju(this)},
iV(d,e){var x=this
if(x.d.c>0){x.sah(0,e.gah(e))
x.sar(e.gar())
x.sav(0,e.gav(e))
x.saG(0,e.gaG(e))}},
kR(d,e,f){var x,w,v=this,u=v.d,t=u.c
if(t>0){u=u.d
x=v.c
w=A.h7(d)
u.$flags&2&&B.F(u)
u[x]=w
if(t>1){u[v.c+1]=A.h7(e)
if(t>2)u[v.c+2]=A.h7(f)}}},
iC(d,e,f,g){var x,w,v=this,u=v.d,t=u.c
if(t>0){u=u.d
x=v.c
w=A.h7(d)
u.$flags&2&&B.F(u)
u[x]=w
if(t>1){u[v.c+1]=A.h7(e)
if(t>2){u[v.c+2]=A.h7(f)
if(t>3)u[v.c+3]=A.h7(g)}}}},
ga6(d){return new A.hI(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Jp)return B.aL(B.H(u,!0,B.t(u).i("y.E")))===B.aL(B.H(e,!0,B.t(e).i("y.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
ol(d){return A.pT(this,null,d,null,null)},
$ibv:1,
$idJ:1,
$icX:1,
gfu(d){return this.d}}
A.Jq.prototype={
dY(d){var x=this
return new A.Jq(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geZ(){return null},
gcl(){return 1},
gdu(){return C.k5},
gnl(d){return this.a},
go4(d){return this.b},
hy(d,e,f){var x,w,v=this
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
h(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
m(d,e,f){var x,w=this.d
if(e<w.c){w=w.d
x=this.c
w.$flags&2&&B.F(w)
w[x+e]=f}},
geb(d){return this.gah(0)},
seb(d,e){this.sah(0,e)},
gah(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sah(d,e){var x,w=this.d
if(w.c>0){w=w.d
x=this.c
w.$flags&2&&B.F(w)
w[x]=e}},
gar(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sar(d){var x,w=this.d
if(w.c>1){w=w.d
x=this.c
w.$flags&2&&B.F(w)
w[x+1]=d}},
gav(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sav(d,e){var x,w=this.d
if(w.c>2){w=w.d
x=this.c
w.$flags&2&&B.F(w)
w[x+2]=e}},
gaG(d){var x=this.d
return x.c>3?x.d[this.c+3]:1},
saG(d,e){var x,w=this.d
if(w.c>3){w=w.d
x=this.c
w.$flags&2&&B.F(w)
w[x+3]=e}},
giR(){return this.gah(0)/1},
siR(d){this.sah(0,d)},
giA(){return this.gar()/1},
siA(d){this.sar(d)},
giI(){return this.gav(0)/1},
siI(d){this.sav(0,d)},
gfH(){return this.gaG(0)/1},
sfH(d){this.saG(0,d)},
gjQ(){return A.ju(this)},
iV(d,e){var x=this
x.sah(0,e.gah(e))
x.sar(e.gar())
x.sav(0,e.gav(e))
x.saG(0,e.gaG(e))},
kR(d,e,f){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.F(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
iC(d,e,f,g){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.F(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
ga6(d){return new A.hI(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Jq)return B.aL(B.H(u,!0,B.t(u).i("y.E")))===B.aL(B.H(e,!0,B.t(e).i("y.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
ol(d){return A.pT(this,null,d,null,null)},
$ibv:1,
$idJ:1,
$icX:1,
gfu(d){return this.d}}
A.Jr.prototype={
dY(d){var x=this
return new A.Jr(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geZ(){return null},
gcl(){return 1},
gdu(){return C.lK},
gnl(d){return this.a},
go4(d){return this.b},
hy(d,e,f){var x,w,v=this
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
h(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
m(d,e,f){var x,w=this.d
if(e<w.c){w=w.d
x=this.c
w.$flags&2&&B.F(w)
w[x+e]=f}},
geb(d){return this.gah(0)},
seb(d,e){this.sah(0,e)},
gah(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sah(d,e){var x,w=this.d
if(w.c>0){w=w.d
x=this.c
w.$flags&2&&B.F(w)
w[x]=e}},
gar(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sar(d){var x,w=this.d
if(w.c>1){w=w.d
x=this.c
w.$flags&2&&B.F(w)
w[x+1]=d}},
gav(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sav(d,e){var x,w=this.d
if(w.c>2){w=w.d
x=this.c
w.$flags&2&&B.F(w)
w[x+2]=e}},
gaG(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saG(d,e){var x,w=this.d
if(w.c>3){w=w.d
x=this.c
w.$flags&2&&B.F(w)
w[x+3]=e}},
giR(){return this.gah(0)/1},
siR(d){this.sah(0,d)},
giA(){return this.gar()/1},
siA(d){this.sar(d)},
giI(){return this.gav(0)/1},
siI(d){this.sav(0,d)},
gfH(){return this.gaG(0)/1},
sfH(d){this.saG(0,d)},
gjQ(){return A.ju(this)},
iV(d,e){var x=this
x.sah(0,e.gah(e))
x.sar(e.gar())
x.sav(0,e.gav(e))
x.saG(0,e.gaG(e))},
kR(d,e,f){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.F(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
iC(d,e,f,g){var x=this.d,w=x.d,v=this.c
w.$flags&2&&B.F(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
ga6(d){return new A.hI(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Jr)return B.aL(B.H(u,!0,B.t(u).i("y.E")))===B.aL(B.H(e,!0,B.t(e).i("y.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
ol(d){return A.pT(this,null,d,null,null)},
$ibv:1,
$idJ:1,
$icX:1,
gfu(d){return this.d}}
A.Js.prototype={
dY(d){var x=this
return new A.Js(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geZ(){return null},
gcl(){return 32767},
gdu(){return C.lM},
gnl(d){return this.a},
go4(d){return this.b},
hy(d,e,f){var x,w,v=this
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
h(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.d.C(f)
v.$flags&2&&B.F(v)
v[x+e]=w}},
geb(d){return this.gah(0)},
seb(d,e){this.sah(0,e)},
gah(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sah(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.F(v)
v[x]=w}},
gar(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sar(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.C(d)
v.$flags&2&&B.F(v)
v[x+1]=w}},
gav(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sav(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.F(v)
v[x+2]=w}},
gaG(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saG(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.F(v)
v[x+3]=w}},
giR(){return this.gah(0)/32767},
siR(d){this.sah(0,d*32767)},
giA(){return this.gar()/32767},
siA(d){this.sar(d*32767)},
giI(){return this.gav(0)/32767},
siI(d){this.sav(0,d*32767)},
gfH(){return this.gaG(0)/32767},
sfH(d){this.saG(0,d*32767)},
gjQ(){return A.ju(this)},
iV(d,e){var x=this
x.sah(0,e.gah(e))
x.sar(e.gar())
x.sav(0,e.gav(e))
x.saG(0,e.gaG(e))},
kR(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.F(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
iC(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.F(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga6(d){return new A.hI(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Js)return B.aL(B.H(u,!0,B.t(u).i("y.E")))===B.aL(B.H(e,!0,B.t(e).i("y.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
ol(d){return A.pT(this,null,d,null,null)},
$ibv:1,
$idJ:1,
$icX:1,
gfu(d){return this.d}}
A.Jt.prototype={
dY(d){var x=this
return new A.Jt(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geZ(){return null},
gcl(){return 2147483647},
gdu(){return C.lN},
gnl(d){return this.a},
go4(d){return this.b},
hy(d,e,f){var x,w,v=this
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
h(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.d.C(f)
v.$flags&2&&B.F(v)
v[x+e]=w}},
geb(d){return this.gah(0)},
seb(d,e){this.sah(0,e)},
gah(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sah(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.F(v)
v[x]=w}},
gar(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sar(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.C(d)
v.$flags&2&&B.F(v)
v[x+1]=w}},
gav(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sav(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.F(v)
v[x+2]=w}},
gaG(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saG(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.F(v)
v[x+3]=w}},
giR(){return this.gah(0)/2147483647},
siR(d){this.sah(0,d*2147483647)},
giA(){return this.gar()/2147483647},
siA(d){this.sar(d*2147483647)},
giI(){return this.gav(0)/2147483647},
siI(d){this.sav(0,d*2147483647)},
gfH(){return this.gaG(0)/2147483647},
sfH(d){this.saG(0,d*2147483647)},
gjQ(){return A.ju(this)},
iV(d,e){var x=this
x.sah(0,e.gah(e))
x.sar(e.gar())
x.sav(0,e.gav(e))
x.saG(0,e.gaG(e))},
kR(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.F(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
iC(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.F(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga6(d){return new A.hI(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Jt)return B.aL(B.H(u,!0,B.t(u).i("y.E")))===B.aL(B.H(e,!0,B.t(e).i("y.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
ol(d){return A.pT(this,null,d,null,null)},
$ibv:1,
$idJ:1,
$icX:1,
gfu(d){return this.d}}
A.Ju.prototype={
dY(d){var x=this
return new A.Ju(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geZ(){return null},
gcl(){return 127},
gdu(){return C.lL},
gnl(d){return this.a},
go4(d){return this.b},
hy(d,e,f){var x,w,v=this
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
h(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.d.C(f)
v.$flags&2&&B.F(v)
v[x+e]=w}},
geb(d){return this.gah(0)},
seb(d,e){this.sah(0,e)},
gah(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sah(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.F(v)
v[x]=w}},
gar(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sar(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.C(d)
v.$flags&2&&B.F(v)
v[x+1]=w}},
gav(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sav(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.F(v)
v[x+2]=w}},
gaG(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saG(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.F(v)
v[x+3]=w}},
giR(){return this.gah(0)/127},
siR(d){this.sah(0,d*127)},
giA(){return this.gar()/127},
siA(d){this.sar(d*127)},
giI(){return this.gav(0)/127},
siI(d){this.sav(0,d*127)},
gfH(){return this.gaG(0)/127},
sfH(d){this.saG(0,d*127)},
gjQ(){return A.ju(this)},
iV(d,e){var x=this
x.sah(0,e.gah(e))
x.sar(e.gar())
x.sav(0,e.gav(e))
x.saG(0,e.gaG(e))},
kR(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.F(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
iC(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.F(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga6(d){return new A.hI(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Ju)return B.aL(B.H(u,!0,B.t(u).i("y.E")))===B.aL(B.H(e,!0,B.t(e).i("y.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
ol(d){return A.pT(this,null,d,null,null)},
$ibv:1,
$idJ:1,
$icX:1,
gfu(d){return this.d}}
A.axY.prototype={
q(){var x=this,w=x.a
if(w.gnl(w)+1>x.d){w.hy(0,x.b,w.go4(w)+1)
return w.go4(w)<=x.e}return w.q()},
gL(d){return this.a},
$ibv:1}
A.Jv.prototype={
dY(d){var x=this
return new A.Jv(x.a,x.b,x.c,x.d,x.e,x.f)},
gu(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geZ(){return this.f.f},
gcl(){return this.f.gcl()},
gdu(){return C.fT},
gnl(d){return this.a},
go4(d){return this.b},
hy(d,e,f){var x,w,v=this
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
a7k(d,e){var x,w=this.c,v=7-(this.d+e)
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
if(w>=x.length)return 0
return D.c.h7(x[w],v)&1},
pN(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.a7k(0,d):0
else x=w.nm(0,this.a7k(0,0),d)
return x},
kZ(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=7-(this.d+d)
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.b3(D.d.C(e),0,1)
s=C.aDD[w]
v=D.c.f0(t,w)
r=r.d
r.$flags&2&&B.F(r)
r[x]=(u&s|v)>>>0},
h(d,e){return this.pN(e)},
m(d,e,f){return this.kZ(e,f)},
geb(d){return this.a7k(0,0)},
seb(d,e){this.kZ(0,e)},
gah(d){return this.pN(0)},
sah(d,e){this.kZ(0,e)},
gar(){return this.pN(1)},
sar(d){this.kZ(1,d)},
gav(d){return this.pN(2)},
sav(d,e){this.kZ(2,e)},
gaG(d){return this.pN(3)},
saG(d,e){this.kZ(3,e)},
giR(){return this.pN(0)/this.f.gcl()},
siR(d){this.kZ(0,d*this.f.gcl())},
giA(){return this.pN(1)/this.f.gcl()},
siA(d){this.kZ(1,d*this.f.gcl())},
giI(){return this.pN(2)/this.f.gcl()},
siI(d){this.kZ(2,d*this.f.gcl())},
gfH(){return this.pN(3)/this.f.gcl()},
sfH(d){this.kZ(3,d*this.f.gcl())},
gjQ(){return A.ju(this)},
iV(d,e){var x=this
x.kZ(0,e.gah(e))
x.kZ(1,e.gar())
x.kZ(2,e.gav(e))
x.kZ(3,e.gaG(e))},
kR(d,e,f){var x=this,w=x.f.c
if(w>0){x.kZ(0,d)
if(w>1){x.kZ(1,e)
if(w>2)x.kZ(2,f)}}},
iC(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.kZ(0,d)
if(w>1){x.kZ(1,e)
if(w>2){x.kZ(2,f)
if(w>3)x.kZ(3,g)}}}},
ga6(d){return new A.hI(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Jv)return B.aL(B.H(u,!0,B.t(u).i("y.E")))===B.aL(B.H(e,!0,B.t(e).i("y.E")))
if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.pN(0)!==x.h(e,0))return!1
if(v>1){if(u.pN(1)!==x.h(e,1))return!1
if(v>2){if(u.pN(2)!==x.h(e,2))return!1
if(v>3)if(u.pN(3)!==x.h(e,3))return!1}}return!0}return!1},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
ol(d){return A.pT(this,null,d,null,null)},
$ibv:1,
$idJ:1,
$icX:1,
gfu(d){return this.f}}
A.Jw.prototype={
dY(d){var x=this
return new A.Jw(x.a,x.b,x.c,x.d)},
gu(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
geZ(){return this.d.e},
gcl(){return this.d.gcl()},
gdu(){return C.cC},
gnl(d){return this.a},
go4(d){return this.b},
hy(d,e,f){var x,w,v=this
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
i5(d,e){var x=this.d,w=x.e
if(w!=null)x=w.nm(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
h(d,e){return this.i5(0,e)},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.d.C(f)
v.$flags&2&&B.F(v)
v[x+e]=w}},
geb(d){return this.gah(0)},
seb(d,e){this.sah(0,e)},
gah(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.nq(x.d[this.c])
return x},
sah(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.F(v)
v[x]=w}},
gar(){var x=this.d,w=x.e
if(w==null)x=x.c>1?x.d[this.c+1]:0
else x=w.no(x.d[this.c])
return x},
sar(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.C(d)
v.$flags&2&&B.F(v)
v[x+1]=w}},
gav(d){var x=this.d,w=x.e
if(w==null)x=x.c>2?x.d[this.c+2]:0
else x=w.nn(x.d[this.c])
return x},
sav(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.F(v)
v[x+2]=w}},
gaG(d){var x=this.d,w=x.e
if(w==null)x=x.c>3?x.d[this.c+3]:0
else x=w.oL(x.d[this.c])
return x},
saG(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.F(v)
v[x+3]=w}},
giR(){return this.gah(0)/this.d.gcl()},
siR(d){this.sah(0,d*this.d.gcl())},
giA(){return this.gar()/this.d.gcl()},
siA(d){this.sar(d*this.d.gcl())},
giI(){return this.gav(0)/this.d.gcl()},
siI(d){this.sav(0,d*this.d.gcl())},
gfH(){return this.gaG(0)/this.d.gcl()},
sfH(d){this.saG(0,d*this.d.gcl())},
gjQ(){return A.ju(this)},
iV(d,e){var x=this
x.sah(0,e.gah(e))
x.sar(e.gar())
x.sav(0,e.gav(e))
x.saG(0,e.gaG(e))},
kR(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.F(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
iC(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.F(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga6(d){return new A.hI(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Jw)return B.aL(B.H(u,!0,B.t(u).i("y.E")))===B.aL(B.H(e,!0,B.t(e).i("y.E")))
if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.i5(0,0)!==x.h(e,0))return!1
if(v>1){if(u.i5(0,1)!==x.h(e,1))return!1
if(v>2){if(u.i5(0,2)!==x.h(e,2))return!1
if(v>3)if(u.i5(0,3)!==x.h(e,3))return!1}}return!0}return!1},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
ol(d){return A.pT(this,null,d,null,null)},
$ibv:1,
$idJ:1,
$icX:1,
gfu(d){return this.d}}
A.Jx.prototype={
dY(d){var x=this
return new A.Jx(x.a,x.b,x.c,x.d,x.e,x.f)},
gu(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geZ(){return this.f.f},
gcl(){return this.f.gcl()},
gdu(){return C.hJ},
gayZ(){var x=this.f
return x.f!=null?2:x.c<<1>>>0},
gnl(d){return this.a},
go4(d){return this.b},
hy(d,e,f){var x,w,v,u=this
u.a=e
u.b=f
x=u.gayZ()
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
if(x>7){v.d=0;++v.c}}else{w=v.gayZ()
x=v.a*w
v.d=x&7
v.c=v.e+D.c.S(x,3)}x=v.c
u=u.d
u===$&&B.b()
return x<u.length},
a7l(d,e){var x,w=this.c,v=6-(this.d+(e<<1>>>0))
if(v<0){v+=8;++w}x=this.f.d
x===$&&B.b()
return D.c.h7(x[w],v)&3},
pO(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.a7l(0,d):0
else x=w.nm(0,this.a7l(0,0),d)
return x},
l_(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=6-(this.d+(d<<1>>>0))
if(w<0){++x
w+=8}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.b3(D.d.C(e),0,3)
s=C.ay5[D.c.S(w,1)]
v=D.c.f0(t,w)
r=r.d
r.$flags&2&&B.F(r)
r[x]=(u&s|v)>>>0},
h(d,e){return this.pO(e)},
m(d,e,f){return this.l_(e,f)},
geb(d){return this.a7l(0,0)},
seb(d,e){this.l_(0,e)},
gah(d){return this.pO(0)},
sah(d,e){this.l_(0,e)},
gar(){return this.pO(1)},
sar(d){this.l_(1,d)},
gav(d){return this.pO(2)},
sav(d,e){this.l_(2,e)},
gaG(d){return this.pO(3)},
saG(d,e){this.l_(3,e)},
giR(){return this.pO(0)/this.f.gcl()},
siR(d){this.l_(0,d*this.f.gcl())},
giA(){return this.pO(1)/this.f.gcl()},
siA(d){this.l_(1,d*this.f.gcl())},
giI(){return this.pO(2)/this.f.gcl()},
siI(d){this.l_(2,d*this.f.gcl())},
gfH(){return this.pO(3)/this.f.gcl()},
sfH(d){this.l_(3,d*this.f.gcl())},
gjQ(){return A.ju(this)},
iV(d,e){var x=this
x.l_(0,e.gah(e))
x.l_(1,e.gar())
x.l_(2,e.gav(e))
x.l_(3,e.gaG(e))},
kR(d,e,f){var x=this,w=x.f.c
if(w>0){x.l_(0,d)
if(w>1){x.l_(1,e)
if(w>2)x.l_(2,f)}}},
iC(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.l_(0,d)
if(w>1){x.l_(1,e)
if(w>2){x.l_(2,f)
if(w>3)x.l_(3,g)}}}},
ga6(d){return new A.hI(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Jx)return B.aL(B.H(u,!0,B.t(u).i("y.E")))===B.aL(B.H(e,!0,B.t(e).i("y.E")))
if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.pO(0)!==x.h(e,0))return!1
if(v>1){if(u.pO(1)!==x.h(e,1))return!1
if(v>2){if(u.pO(2)!==x.h(e,2))return!1
if(v>3)if(u.pO(3)!==x.h(e,3))return!1}}return!0}return!1},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
ol(d){return A.pT(this,null,d,null,null)},
$ibv:1,
$idJ:1,
$icX:1,
gfu(d){return this.f}}
A.Jy.prototype={
dY(d){var x=this
return new A.Jy(x.a,x.b,x.c,x.d)},
gu(d){return this.d.c},
geZ(){return null},
gcl(){return 4294967295},
gdu(){return C.k6},
gnl(d){return this.a},
go4(d){return this.b},
hy(d,e,f){var x,w,v=this
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
h(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.d.C(f)
v.$flags&2&&B.F(v)
v[x+e]=w}},
geb(d){return this.gah(0)},
seb(d,e){this.sah(0,e)},
gah(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sah(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.F(v)
v[x]=w}},
gar(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sar(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.d.C(d)
v.$flags&2&&B.F(v)
v[x+1]=w}},
gav(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sav(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.F(v)
v[x+2]=w}},
gaG(d){var x=this.d
return x.c>3?x.d[this.c+3]:0},
saG(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.d.C(e)
v.$flags&2&&B.F(v)
v[x+3]=w}},
giR(){return this.gah(0)/4294967295},
siR(d){this.sah(0,d*4294967295)},
giA(){return this.gar()/4294967295},
siA(d){this.sar(d*4294967295)},
giI(){return this.gav(0)/4294967295},
siI(d){this.sav(0,d*4294967295)},
gfH(){return this.gaG(0)/4294967295},
sfH(d){this.saG(0,d*4294967295)},
gjQ(){return A.ju(this)},
iV(d,e){var x=this
x.sah(0,e.gah(e))
x.sar(e.gar())
x.sav(0,e.gav(e))
x.saG(0,e.gaG(e))},
kR(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.F(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
iC(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.F(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga6(d){return new A.hI(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.Jy)return B.aL(B.H(u,!0,B.t(u).i("y.E")))===B.aL(B.H(e,!0,B.t(e).i("y.E")))
if(y.L.b(e)){x=J.a2(e)
w=u.d
v=w.c
if(x.gu(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
ol(d){return A.pT(this,null,d,null,null)},
$ibv:1,
$idJ:1,
$icX:1,
gfu(d){return this.d}}
A.Jz.prototype={
dY(d){var x=this
return new A.Jz(x.a,x.b,x.c,x.d,x.e)},
gu(d){var x=this.e,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
geZ(){return this.e.f},
gcl(){return this.e.gcl()},
gdu(){return C.hK},
gnl(d){return this.a},
go4(d){return this.b},
hy(d,e,f){var x,w,v,u=this
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
a7m(d,e){var x,w=this.c,v=4-(this.d+(e<<2>>>0))
if(v<0){v+=8;++w}x=this.e.d
x===$&&B.b()
return D.c.h7(x[w],v)&15},
pL(d){var x=this.e,w=x.f
if(w==null)x=x.c>d?this.a7m(0,d):0
else x=w.nm(0,this.a7m(0,0),d)
return x},
l0(d,e){var x,w,v,u,t,s,r=this.e
if(d>=r.c)return
x=this.c
w=4-(this.d+(d<<2>>>0))
if(w<0){w+=8;++x}v=r.d
v===$&&B.b()
u=v[x]
t=D.c.b3(D.d.C(e),0,15)
s=w===4?15:240
v=D.c.f0(t,w)
r=r.d
r.$flags&2&&B.F(r)
r[x]=(u&s|v)>>>0},
h(d,e){return this.pL(e)},
m(d,e,f){return this.l0(e,f)},
geb(d){return this.a7m(0,0)},
seb(d,e){this.l0(0,e)},
gah(d){return this.pL(0)},
sah(d,e){this.l0(0,e)},
gar(){return this.pL(1)},
sar(d){this.l0(1,d)},
gav(d){return this.pL(2)},
sav(d,e){this.l0(2,e)},
gaG(d){return this.pL(3)},
saG(d,e){this.l0(3,e)},
giR(){return this.pL(0)/this.e.gcl()},
siR(d){this.l0(0,d*this.e.gcl())},
giA(){return this.pL(1)/this.e.gcl()},
siA(d){this.l0(1,d*this.e.gcl())},
giI(){return this.pL(2)/this.e.gcl()},
siI(d){this.l0(2,d*this.e.gcl())},
gfH(){return this.pL(3)/this.e.gcl()},
sfH(d){this.l0(3,d*this.e.gcl())},
gjQ(){return A.ju(this)},
iV(d,e){var x=this
x.l0(0,e.gah(e))
x.l0(1,e.gar())
x.l0(2,e.gav(e))
x.l0(3,e.gaG(e))},
kR(d,e,f){var x=this,w=x.e.c
if(w>0){x.l0(0,d)
if(w>1){x.l0(1,e)
if(w>2)x.l0(2,f)}}},
iC(d,e,f,g){var x=this,w=x.e.c
if(w>0){x.l0(0,d)
if(w>1){x.l0(1,e)
if(w>2){x.l0(2,f)
if(w>3)x.l0(3,g)}}}},
ga6(d){return new A.hI(this)},
k(d,e){var x,w,v=this
if(e==null)return!1
if(e instanceof A.Jz)return B.aL(B.H(v,!0,B.t(v).i("y.E")))===B.aL(B.H(e,!0,B.t(e).i("y.E")))
if(y.L.b(e)){x=v.e.c
w=J.a2(e)
if(w.gu(e)!==x)return!1
if(v.pL(0)!==w.h(e,0))return!1
if(x>1){if(v.pL(1)!==w.h(e,1))return!1
if(x>2){if(v.pL(2)!==w.h(e,2))return!1
if(x>3)if(v.pL(3)!==w.h(e,3))return!1}}return!0}return!1},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
ol(d){return A.pT(this,null,d,null,null)},
$ibv:1,
$idJ:1,
$icX:1,
gfu(d){return this.e}}
A.JA.prototype={
dY(d){var x=this
return new A.JA(x.a,x.b,x.c,x.d)},
gu(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
geZ(){return this.d.e},
gcl(){return this.d.gcl()},
gdu(){return C.ac},
gnl(d){return this.a},
go4(d){return this.b},
hy(d,e,f){var x,w,v=this
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
i5(d,e){var x=this.d,w=x.e
if(w!=null)x=w.nm(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
h(d,e){return this.i5(0,e)},
m(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.d.C(D.d.b3(f,0,255))
v.$flags&2&&B.F(v)
v[x+e]=w}},
geb(d){return this.d.d[this.c]},
seb(d,e){var x=this.d.d,w=this.c,v=D.d.C(D.d.b3(e,0,255))
x.$flags&2&&B.F(x)
x[w]=v},
gah(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.nq(x.d[this.c])
return x},
sah(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.d.C(D.d.b3(e,0,255))
v.$flags&2&&B.F(v)
v[x]=w}},
gar(){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>1?w.d[x.c+1]:0}else w=v.no(w.d[x.c])
return w},
sar(d){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.d.C(D.d.b3(d,0,255))
w.$flags&2&&B.F(w)
w[v]=x}else if(v>1){w=w.d
v=this.c
x=D.d.C(D.d.b3(d,0,255))
w.$flags&2&&B.F(w)
w[v+1]=x}},
gav(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>2?w.d[x.c+2]:0}else w=v.nn(w.d[x.c])
return w},
sav(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.d.C(D.d.b3(e,0,255))
w.$flags&2&&B.F(w)
w[v]=x}else if(v>2){w=w.d
v=this.c
x=D.d.C(D.d.b3(e,0,255))
w.$flags&2&&B.F(w)
w[v+2]=x}},
gaG(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c+1]
else w=v>3?w.d[x.c+3]:255}else w=v.oL(w.d[x.c])
return w},
saG(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.d.C(D.d.b3(e,0,255))
w.$flags&2&&B.F(w)
w[v+1]=x}else if(v>3){w=w.d
v=this.c
x=D.d.C(D.d.b3(e,0,255))
w.$flags&2&&B.F(w)
w[v+3]=x}},
giR(){return this.gah(0)/this.d.gcl()},
siR(d){this.sah(0,d*this.d.gcl())},
giA(){return this.gar()/this.d.gcl()},
siA(d){this.sar(d*this.d.gcl())},
giI(){return this.gav(0)/this.d.gcl()},
siI(d){this.sav(0,d*this.d.gcl())},
gfH(){return this.gaG(0)/this.d.gcl()},
sfH(d){this.saG(0,d*this.d.gcl())},
gjQ(){return this.d.c===2?this.gah(0):A.ju(this)},
iV(d,e){var x=this
if(x.d.e!=null)x.seb(0,e.geb(e))
else{x.sah(0,e.gah(e))
x.sar(e.gar())
x.sav(0,e.gav(e))
x.saG(0,e.gaG(e))}},
kR(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.F(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2)v[x+2]=D.c.C(f)}}},
iC(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&B.F(v)
v[x]=w
if(u>1){v[x+1]=D.c.C(e)
if(u>2){v[x+2]=D.c.C(f)
if(u>3)v[x+3]=D.c.C(g)}}}},
ga6(d){return new A.hI(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.JA)return B.aL(B.H(u,!0,B.t(u).i("y.E")))===B.aL(B.H(e,!0,B.t(e).i("y.E")))
if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.a2(e)
if(x.gu(e)!==v)return!1
if(u.i5(0,0)!==x.h(e,0))return!1
if(v>1){if(u.i5(0,1)!==x.h(e,1))return!1
if(v>2){if(u.i5(0,2)!==x.h(e,2))return!1
if(v>3)if(u.i5(0,3)!==x.h(e,3))return!1}}return!0}return!1},
gv(d){return B.aL(B.H(this,!0,B.t(this).i("y.E")))},
ol(d){return A.pT(this,null,d,null,null)},
$ibv:1,
$idJ:1,
$icX:1,
gfu(d){return this.d}}
A.fq.prototype={
dY(d){return new A.fq()},
gfu(d){return $.cTX()},
gnl(d){return 0},
go4(d){return 0},
gu(d){return 0},
gcl(){return 0},
gdu(){return C.ac},
geZ(){return null},
h(d,e){return 0},
m(d,e,f){},
geb(d){return 0},
seb(d,e){},
gah(d){return 0},
sah(d,e){},
gar(){return 0},
sar(d){},
gav(d){return 0},
sav(d,e){},
gaG(d){return 0},
saG(d,e){},
giR(){return 0},
siR(d){},
giA(){return 0},
siA(d){},
giI(){return 0},
siI(d){},
gfH(){return 0},
sfH(d){},
gjQ(){return 0},
iV(d,e){},
kR(d,e,f){},
iC(d,e,f,g){},
hy(d,e,f){},
gL(d){return this},
q(){return!1},
k(d,e){if(e==null)return!1
return e instanceof A.fq},
gv(d){return 0},
ga6(d){return new A.hI(this)},
ol(d){return this},
$ibv:1,
$idJ:1,
$icX:1}
A.beG.prototype={
J(){return"FlipDirection."+this.b}}
A.asG.prototype={
j(d){return"ImageException: "+this.a},
$ib7:1}
A.mh.prototype={
gu(d){return this.c-this.d},
h(d,e){return J.v(this.a,this.d+e)},
m(d,e,f){J.bY(this.a,this.d+e,f)
return f},
rS(d,e,f,g){var x=this.a,w=J.d0(x),v=this.d+d
if(f instanceof A.mh)w.e9(x,v,v+e,f.a,f.d+g)
else w.e9(x,v,v+e,y.L.a(f),g)},
Ai(d,e,f){return this.rS(d,e,f,0)},
bIX(d,e,f){var x=this.a,w=this.d+d
J.tU(x,w,w+e,f)},
a3h(d,e,f){var x=this,w=f!=null?x.b+f:x.d
return A.d_(x.a,x.e,d,w+e)},
jy(d){return this.a3h(d,0,null)},
Bc(d,e){return this.a3h(d,0,e)},
T2(d,e){return this.a3h(d,e,null)},
dQ(d,e){var x=this.d,w=x+(this.c-x)
for(;x<w;++x)J.v(this.a,x)
return-1},
cu(){return J.v(this.a,this.d++)},
jr(d){var x=this.jy(d)
this.d=this.d+(x.c-x.d)
return x},
js(d){var x,w,v,u,t,s=this
if(d==null){x=B.a([],y.t)
for(w=s.c;v=s.d,v<w;){u=s.a
s.d=v+1
t=J.v(u,v)
if(t===0)return B.eY(x,0,null)
x.push(t)}throw B.n(A.cc("EOF reached without finding string terminator (length: "+B.o(d)+")"))}return B.eY(s.jr(d).hZ(),0,null)},
QM(){return this.js(null)},
aGX(d){var x,w,v,u,t=this,s=B.a([],y.t)
for(x=t.c;w=t.d,w<x;){v=t.a
t.d=w+1
u=J.v(v,w)
s.push(u)
if(u===10||s.length>=d)return B.eY(s,0,null)}return B.eY(s,0,null)},
bNR(){return this.aGX(256)},
bNS(){var x,w,v,u,t=this,s=B.a([],y.t)
for(x=t.c;w=t.d,w<x;){v=t.a
t.d=w+1
u=J.v(v,w)
if(u===0)return new B.G1(!0).Fq(s,0,null,!0)
s.push(u)}return D.as.CJ(0,s,!0)},
am(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255
if(x.e)return w<<8|v
return v<<8|w},
rY(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255
if(x.e)return u|v<<8|w<<16
return w|v<<8|u<<16},
a5(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255,t=J.v(x.a,x.d++)&255
if(x.e)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
a0T(){return A.drc(this.afo())},
afo(){var x=this,w=J.v(x.a,x.d++)&255,v=J.v(x.a,x.d++)&255,u=J.v(x.a,x.d++)&255,t=J.v(x.a,x.d++)&255,s=J.v(x.a,x.d++)&255,r=J.v(x.a,x.d++)&255,q=J.v(x.a,x.d++)&255,p=J.v(x.a,x.d++)&255
if(x.e)return(D.c.eu(w,56)|D.c.eu(v,48)|D.c.eu(u,40)|D.c.eu(t,32)|s<<24|r<<16|q<<8|p)>>>0
return(D.c.eu(p,56)|D.c.eu(q,48)|D.c.eu(r,40)|D.c.eu(s,32)|t<<24|u<<16|v<<8|w)>>>0},
JK(d,e,f){var x,w=this,v=w.a
if(y.D.b(v))return w.aI7(e,f)
x=w.b+w.d+e
return J.cvq(v,x,f<=0?w.c:x+f)},
eQ(d){return this.JK(0,0,0)},
aI7(d,e){var x,w=this,v=e==null?w.c-w.d-d:e,u=w.a
if(y.D.b(u))return J.dh(D.C.gak(u),u.byteOffset+w.d+d,v)
x=w.d+d
x=J.cvq(u,x,x+v)
return new Uint8Array(B.bV(x))},
hZ(){return this.aI7(0,null)},
Ra(){var x=this.a
if(y.D.b(x))return J.oK(D.C.gak(x),x.byteOffset+this.d,null)
return J.oK(D.C.gak(this.hZ()),0,null)}}
A.btL.prototype={
buO(d){var x=this
x.arb(d)
x.aog()
x.aqT()
x.amK()},
bgz(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.c=Math.max(d,4)
n.f=m-n.d
n.r=m-1
x=D.d.b0(m,8)
n.w=x
n.x=x*256
n.Q=new A.a3S(new Uint32Array(1024),256,4)
n.a=new A.uS(new Uint8Array(768),256,3)
n.d=3
n.e=2
x=D.d.S(m,3)
n.y=new Int32Array(x)
x=y.cb
n.z=B.bQ(m*3,0,!1,x)
n.at=B.bQ(n.c,0,!1,x)
x=n.ax=B.bQ(n.c,0,!1,x)
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
amK(){var x,w,v,u,t,s
for(x=0;x<this.c;++x){w=this.a
w===$&&B.b()
v=this.Q
v===$&&B.b()
u=v.b
t=2<u?v.c[x*u+2]:0
s=1<u?v.c[x*u+1]:0
v=0<u?v.c[x*u]:0
w.pC(x,Math.abs(t),Math.abs(s),Math.abs(v))}},
beb(d,e,f){var x,w,v,u=this.as[e],t=u-1,s=this.c,r=this.Q,q=1000,p=-1
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
aog(){var x,w,v,u,t,s,r,q=this
for(x=0,w=0;x<q.c;++x){for(v=0;v<3;++v,++w){u=q.z
u===$&&B.b()
t=D.c.b3(D.d.C(0.5+u[w]),0,255)
u=q.Q
u===$&&B.b()
s=u.b
if(v<s){u=u.c
r=D.c.C(t)
u.$flags&2&&B.F(u)
u[x*s+v]=r}}u=q.Q
u===$&&B.b()
s=u.b
if(3<s){u=u.c
r=D.c.C(x)
u.$flags&2&&B.F(u)
u[x*s+3]=r}}},
aqT(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
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
i.$flags&2&&B.F(i)
i[l*q]=j}if(k){k=w.c
j=D.c.C(m)
k.$flags&2&&B.F(k)
k[r*q]=j}m=p?w.c[l*q+1]:0
k=p?w.c[r*q+1]:0
if(p){j=w.c
k=D.c.C(k)
j.$flags&2&&B.F(j)
j[l*q+1]=k}if(p){p=w.c
k=D.c.C(m)
p.$flags&2&&B.F(p)
p[r*q+1]=k}p=2<q
m=p?w.c[l*q+2]:0
k=p?w.c[r*q+2]:0
if(p){j=w.c
k=D.c.C(k)
j.$flags&2&&B.F(j)
j[l*q+2]=k}if(p){p=w.c
k=D.c.C(m)
p.$flags&2&&B.F(p)
p[r*q+2]=k}p=3<q
m=p?w.c[l*q+3]:0
k=p?w.c[r*q+3]:0
if(p){j=w.c
k=D.c.C(k)
j.$flags&2&&B.F(j)
j[l*q+3]=k}if(p){p=w.c
k=D.c.C(m)
p.$flags&2&&B.F(p)
p[r*q+3]=k}}if(o!==t){u&2&&B.F(v)
v[t]=s+r>>>1
for(m=t+1;m<o;++m)v[m]=r
s=r
t=o}}x=h.r
x.toString
w=D.c.S(s+x,1)
u&2&&B.F(v)
v[t]=w
for(n=t+1;n<256;++n)v[n]=x},
ax5(d,e){var x,w,v,u
for(x=this.y,w=d*d,v=0;v<d;++v){x===$&&B.b()
u=D.d.C(e*((w-v*v)*256/w))
x.$flags&2&&B.F(x)
x[v]=u}},
arb(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.x
a2===$&&B.b()
x=30+D.c.b0(a1.b-1,3)
w=a3.gd2(0)*a3.gb8(0)
v=D.c.hz(w,a1.b)
u=Math.max(D.c.b0(v,100),1)
if(u===0)u=1
t=D.c.S(a2,8)
if(t<=1)t=0
a1.ax5(t,1024)
if(w<1509)s=a1.b=1
else if(D.c.ao(w,499)!==0)s=499
else if(D.c.ao(w,491)!==0)s=491
else s=D.c.ao(w,487)!==0?487:503
r=a3.gd2(0)
q=a3.gb8(0)
for(p=a2,o=1024,n=0,m=0,l=0,k=0;k<v;){a2=a3.a
j=a2==null?null:a2.ei(m,l,null)
if(j==null)j=new A.fq()
i=j.gah(j)
h=j.gar()
g=j.gav(j)
if(k===0){a2=a1.z
a2===$&&B.b()
f=a1.e
f===$&&B.b()
f*=3
a2[f]=g
a2[f+1]=h
a2[f+2]=i}e=a1.bq0(g,h,i)
if(e<0)e=a1.b0l(g,h,i)
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
if(t>0)a1.aYd(d,t,e,g,h,i)}n+=s
m+=s
for(;m>r;){m-=r;++l}for(;n>=w;){n-=w
l-=q}++k
if(D.c.ao(k,u)===0){o-=D.c.hz(o,x)
p-=D.c.b0(p,30)
t=D.c.S(p,8)
if(t<=1)t=0
a1.ax5(t,o)}}},
aYd(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=f-e,j=l.d-1
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
b0l(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=1e30
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
bq0(d,e,f){var x,w,v,u,t,s
for(x=this.d,w=this.z,v=0,u=0;v<x;++v){w===$&&B.b()
t=u+1
s=!1
if(w[u]===d){u=t+1
if(w[t]===e){t=u+1
s=w[u]===f
u=t}}else u=t
if(s)return v}return-1}}
A.axo.prototype={
b2(d){var x,w,v=this
if(v.a===v.c.length)v.b49()
x=v.c
w=v.a++
x.$flags&2&&B.F(x)
x[w]=d&255},
mj(d){var x,w,v,u,t=this,s=J.bu(d)
for(;x=t.a,w=x+s,v=t.c,u=v.length,w>u;)t.ao0(w-u)
D.C.hO(v,x,w,d)
t.a+=s},
lm(d){var x=this
if(x.b){x.b2(D.c.S(d,8)&255)
x.b2(d&255)
return}x.b2(d&255)
x.b2(D.c.S(d,8)&255)},
jb(d){var x=this
if(x.b){x.b2(D.c.S(d,24)&255)
x.b2(D.c.S(d,16)&255)
x.b2(D.c.S(d,8)&255)
x.b2(d&255)
return}x.b2(d&255)
x.b2(D.c.S(d,8)&255)
x.b2(D.c.S(d,16)&255)
x.b2(D.c.S(d,24)&255)},
bQX(d){var x,w=this,v=new Float32Array(1)
v[0]=d
x=J.dh(D.fB.gak(v),0,null)
if(w.b){w.b2(x[3])
w.b2(x[2])
w.b2(x[1])
w.b2(x[0])
return}w.b2(x[0])
w.b2(x[1])
w.b2(x[2])
w.b2(x[3])},
bQY(d){var x,w=this,v=new Float64Array(1)
v[0]=d
x=J.dh(D.eE.gak(v),0,null)
if(w.b){w.b2(x[7])
w.b2(x[6])
w.b2(x[5])
w.b2(x[4])
w.b2(x[3])
w.b2(x[2])
w.b2(x[1])
w.b2(x[0])
return}w.b2(x[0])
w.b2(x[1])
w.b2(x[2])
w.b2(x[3])
w.b2(x[4])
w.b2(x[5])
w.b2(x[6])
w.b2(x[7])},
ao0(d){var x,w,v,u
if(d!=null)x=d
else{w=this.c.length
x=w===0?8192:w*2}w=this.c
v=w.length
u=new Uint8Array(v+x)
D.C.hO(u,0,v,w)
this.c=u},
b49(){return this.ao0(null)},
gu(d){return this.a}}
A.bxr.prototype={
aKT(d){var x,w,v,u,t,s,r=d.gd2(0),q=d.gb8(0),p=this.a
p===$&&B.b()
x=A.i1(null,null,C.ac,0,C.bv,q,null,0,1,p,C.ac,r,!1)
r=x.a
w=r.ga6(r)
w.q()
x.z=d.z
x.w=d.w
x.y=d.y
for(r=d.a,r=r.ga6(r);r.q();){v=r.gL(r)
u=w.gL(w)
t=D.d.C(v.gah(v))
s=D.d.C(v.gar())
u.m(0,0,this.beb(D.d.C(v.gav(v)),s,t))
w.q()}return x}}
A.oc.prototype={
C(d){var x=this.b
return x===0?0:D.c.hz(this.a,x)},
uj(d){var x=this.b
return x===0?0:this.a/x},
k(d,e){if(e==null)return!1
return e instanceof A.oc&&this.a===e.a&&this.b===e.b},
gv(d){return B.ae(this.a,this.b,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
j(d){return""+this.a+"/"+this.b}}
A.bA5.prototype={
J(){return"RequestImageFormat."+this.b}}
A.bLW.prototype={}
var z=a.updateTypes(["~(mh)","l(r4,l,l)","l([l])","~(CR,C<l>)","~(l,l,l,l,l,du)","~(m,qj)","~(l)","~(l,kd)","CR(l)"])
A.bkz.prototype={
$0(){return A.cxj(this.a,this.b,"jpg",this.c)},
$S:209}
A.bkA.prototype={
$0(){return A.cxj(this.a,this.b,"png",null)},
$S:209}
A.bkC.prototype={
$0(){return A.cxj(this.a,this.b,"webp",this.c)},
$S:209}
A.bkr.prototype={
$2(d,e){var x=A.cHx(e)
this.a.a.m(0,d,x)
return x},
$S:z+5}
A.bks.prototype={
$2(d,e){var x=e.dY(0)
this.a.a.m(0,d,x)
return x},
$S:z+7}
A.bkt.prototype={
$2(d,e){var x=A.cHx(e)
this.a.b.a.m(0,d,x)
return x},
$S:z+5}
A.b0P.prototype={
$4(d,e,f,g){var x,w,v=this,u=v.a
if(u.a<v.c){x=v.b.c&&v.d.ch!=null
w=v.e
if(x){x=v.d
w.iC(x.ch.nq(d),x.ch.no(d),x.ch.nn(d),x.ch.oL(d))}else w.iC(d,e,f,g)
w.q();++u.a}},
$S:779}
A.bdz.prototype={
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
$S:780}
A.bmu.prototype={
$1(d){var x,w,v,u,t=this.b,s=t.cu(),r=t.cu()
t=this.a
if(!t.d.y.a0(0,s))throw B.n(A.cc("Invalid Component in SOS block"))
x=t.d.y.h(0,s)
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
A.bwm.prototype={
$1(d){return d!==""},
$S:19}
A.bPF.prototype={
$2(d,e){return(d|e<<16)>>>0},
$S:211}
A.bl1.prototype={
$4(d,e,f,g){var x=this.b
return d+this.a*(e-d+x*(d+g-f-e))+x*(f-d)},
$S:781}
A.bl0.prototype={
$5(d,e,f,g,h){var x=-e,w=d*d
return f+0.5*(d*(x+g)+w*(2*e-5*f+4*g-h)+w*d*(x+3*f-3*g+h))},
$S:782};(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_2u,v=a._static_1,u=a._instance_1u,t=a.installStaticTearOff
x(A.kd.prototype,"gxT",1,0,function(){return[0]},["$1","$0"],["ju","C"],2,0,0)
x(A.uB.prototype,"gxT",1,0,function(){return[0]},["$1","$0"],["ju","C"],2,0,0)
x(A.z_.prototype,"gxT",1,0,function(){return[0]},["$1","$0"],["ju","C"],2,0,0)
x(A.rJ.prototype,"gxT",1,0,function(){return[0]},["$1","$0"],["ju","C"],2,0,0)
x(A.uD.prototype,"gxT",1,0,function(){return[0]},["$1","$0"],["ju","C"],2,0,0)
x(A.wA.prototype,"gxT",1,0,function(){return[0]},["$1","$0"],["ju","C"],2,0,0)
x(A.yZ.prototype,"gxT",1,0,function(){return[0]},["$1","$0"],["ju","C"],2,0,0)
x(A.yY.prototype,"gxT",1,0,function(){return[0]},["$1","$0"],["ju","C"],2,0,0)
x(A.uE.prototype,"gxT",1,0,function(){return[0]},["$1","$0"],["ju","C"],2,0,0)
var s
w(s=A.atk.prototype,"gb1j","b1k",3)
w(s,"gb1m","b1n",3)
w(s,"gb1o","b1p",3)
w(s,"gb1d","b1e",3)
w(s,"gb1f","b1g",3)
v(A,"dru","dcj",0)
v(A,"drn","dcb",0)
v(A,"drl","dc9",0)
v(A,"drs","dch",0)
v(A,"drt","dci",0)
v(A,"drr","dcg",0)
v(A,"drq","dcf",0)
v(A,"drp","dce",0)
v(A,"drw","dcl",0)
v(A,"drv","dck",0)
v(A,"dro","dcc",0)
v(A,"drm","dca",0)
v(A,"drH","dcw",0)
v(A,"drF","dcu",0)
v(A,"drx","dcm",0)
v(A,"drz","dco",0)
v(A,"dry","dcn",0)
v(A,"drA","dcp",0)
v(A,"drI","dcx",0)
v(A,"drG","dcv",0)
v(A,"drB","dcq",0)
v(A,"drC","dcr",0)
v(A,"drD","dcs",0)
v(A,"drE","dct",0)
u(A.a97.prototype,"gbkW","bkX",6)
u(A.at8.prototype,"gbDg","bDh",6)
t(A,"cC3",3,null,["$3"],["dcy"],1,0)
t(A,"drJ",3,null,["$3"],["dcz"],1,0)
t(A,"drO",3,null,["$3"],["dcE"],1,0)
t(A,"drP",3,null,["$3"],["dcF"],1,0)
t(A,"drQ",3,null,["$3"],["dcG"],1,0)
t(A,"drR",3,null,["$3"],["dcH"],1,0)
t(A,"drS",3,null,["$3"],["dcI"],1,0)
t(A,"drT",3,null,["$3"],["dcJ"],1,0)
t(A,"drU",3,null,["$3"],["dcK"],1,0)
t(A,"drV",3,null,["$3"],["dcL"],1,0)
t(A,"drK",3,null,["$3"],["dcA"],1,0)
t(A,"drL",3,null,["$3"],["dcB"],1,0)
t(A,"drM",3,null,["$3"],["dcC"],1,0)
t(A,"drN",3,null,["$3"],["dcD"],1,0)
t(A,"drY",6,null,["$6"],["dcZ"],4,0)
t(A,"drZ",6,null,["$6"],["dd_"],4,0)
t(A,"drX",6,null,["$6"],["dcY"],4,0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.E,[A.a1_,A.bRk,A.bRl,A.b8H,A.tF,A.c4s,A.ciW,A.bly,A.bRj,A.blQ,A.buZ,A.hI,A.uC,A.aLm,A.apZ,A.qj,A.kd,A.b0Q,A.Gx,A.b8q,A.b8p,A.bc5,A.aq_,A.bdw,A.aq0,A.aq1,A.bdy,A.a_U,A.aOu,A.a0w,A.a0x,A.arC,A.bkf,A.asq,A.alT,A.Ic,A.bmr,A.CR,A.bmt,A.Vk,A.atj,A.bmx,A.atk,A.a4g,A.bwk,A.x2,A.S_,A.bxg,A.RZ,A.bxi,A.ayK,A.ayN,A.ayT,A.a4E,A.S3,A.ayS,A.t5,A.aDe,A.bK3,A.aDh,A.bK5,A.aDi,A.bK6,A.bo0,A.bPs,A.a96,A.bPt,A.bPy,A.bPC,A.bPE,A.a95,A.bPD,A.bPu,A.LP,A.aEX,A.aEZ,A.aEY,A.aF_,A.a97,A.aEV,A.bPz,A.aEW,A.bQu,A.a9l,A.aso,A.a0D,A.aFo,A.a12,A.bvr,A.axY,A.asG,A.mh,A.bxr,A.axo,A.oc,A.bLW])
w(A.cq_,A.bRk)
w(A.cq0,A.bRl)
x(B.dY,[A.UL,A.al0,A.b2g,A.nZ,A.akM,A.n4,A.m6,A.Pw,A.HC,A.un,A.Q2,A.bms,A.RL,A.a4f,A.DH,A.ayd,A.DI,A.uZ,A.ot,A.Ld,A.kR,A.tp,A.LQ,A.Ui,A.bkc,A.arr,A.atb,A.beG,A.bA5])
w(A.blO,A.blQ)
w(A.axq,A.buZ)
x(B.cp,[A.bkz,A.bkA,A.bkC])
x(B.y,[A.O9,A.Oa,A.Ob,A.Oc,A.Od,A.Oe,A.Oh,A.Oi,A.Oj,A.Ok,A.Ol,A.ys,A.YP,A.Cx,A.mg,A.Jp,A.Jq,A.Jr,A.Js,A.Jt,A.Ju,A.Jv,A.Jw,A.Jx,A.Jy,A.Jz,A.JA,A.fq])
x(A.ys,[A.alO,A.Of])
w(A.alZ,A.YP)
w(A.Pu,A.uC)
x(B.dw,[A.bkr,A.bks,A.bkt,A.bPF])
x(A.kd,[A.uB,A.Ct,A.z_,A.rJ,A.uD,A.wA,A.yZ,A.yY,A.uE,A.Cv,A.Cu,A.Im])
x(A.b8q,[A.akQ,A.bdx,A.bhF,A.bke,A.ati,A.ayc,A.bwl,A.bxh,A.bxm,A.bJo,A.bK4,A.bQv])
x(B.bN,[A.b0P,A.bdz,A.bmu,A.bwm,A.bl1,A.bl0])
w(A.b9I,A.akQ)
w(A.blZ,A.bdw)
x(A.blZ,[A.at3,A.bm_,A.bm0,A.bm1,A.at5])
w(A.at4,A.a_U)
w(A.at6,A.a0x)
w(A.bkd,A.Gx)
x(A.Ic,[A.Id,A.a10])
x(A.bc5,[A.bmv,A.bwi])
w(A.at7,A.a4g)
w(A.bm3,A.bwk)
w(A.JG,A.b8p)
x(A.x2,[A.ayI,A.ayJ,A.ayL,A.ayM,A.ayP,A.ayQ])
x(A.S_,[A.a4B,A.ayO])
x(A.ayT,[A.zE,A.mr])
w(A.at8,A.a97)
w(A.at9,A.a9l)
w(A.ata,A.aFo)
x(A.mg,[A.Q8,A.Q9,A.a17,A.a18,A.a19,A.a1a,A.Qa,A.Qb,A.Qc,A.Qd,A.Qe,A.Qf])
x(A.bvr,[A.axD,A.axE,A.axF,A.axG,A.axH,A.axI,A.axJ,A.a3S,A.uS])
w(A.btL,A.bxr)})()
B.bt(b.typeUniverse,JSON.parse('{"hI":{"bv":["b0"]},"O9":{"dJ":[],"y":["b0"],"y.E":"b0"},"Oa":{"dJ":[],"y":["b0"],"y.E":"b0"},"Ob":{"dJ":[],"y":["b0"],"y.E":"b0"},"Oc":{"dJ":[],"y":["b0"],"y.E":"b0"},"Od":{"dJ":[],"y":["b0"],"y.E":"b0"},"Oe":{"dJ":[],"y":["b0"],"y.E":"b0"},"Oh":{"dJ":[],"y":["b0"],"y.E":"b0"},"Oi":{"dJ":[],"y":["b0"],"y.E":"b0"},"Oj":{"dJ":[],"y":["b0"],"y.E":"b0"},"Ok":{"dJ":[],"y":["b0"],"y.E":"b0"},"Ol":{"dJ":[],"y":["b0"],"y.E":"b0"},"ys":{"dJ":[],"y":["b0"],"y.E":"b0"},"alO":{"dJ":[],"y":["b0"],"y.E":"b0"},"Of":{"dJ":[],"y":["b0"],"y.E":"b0"},"YP":{"dJ":[],"y":["b0"],"y.E":"b0"},"alZ":{"dJ":[],"y":["b0"],"y.E":"b0"},"uB":{"kd":[]},"Ct":{"kd":[]},"z_":{"kd":[]},"rJ":{"kd":[]},"uD":{"kd":[]},"wA":{"kd":[]},"yZ":{"kd":[]},"yY":{"kd":[]},"uE":{"kd":[]},"Cv":{"kd":[]},"Cu":{"kd":[]},"Im":{"kd":[]},"at4":{"a_U":[]},"at6":{"a0x":[]},"Id":{"Ic":[]},"a10":{"Ic":[]},"at7":{"a4g":[]},"ayI":{"x2":[]},"ayJ":{"x2":[]},"ayL":{"x2":[]},"ayM":{"x2":[]},"ayP":{"x2":[]},"ayQ":{"x2":[]},"a4B":{"S_":[]},"ayO":{"S_":[]},"at9":{"a9l":[]},"Cx":{"y":["cX"],"y.E":"cX"},"mg":{"y":["cX"]},"Q8":{"mg":[],"y":["cX"],"y.E":"cX"},"Q9":{"mg":[],"y":["cX"],"y.E":"cX"},"a17":{"mg":[],"y":["cX"],"y.E":"cX"},"a18":{"mg":[],"y":["cX"],"y.E":"cX"},"a19":{"mg":[],"y":["cX"],"y.E":"cX"},"a1a":{"mg":[],"y":["cX"],"y.E":"cX"},"Qa":{"mg":[],"y":["cX"],"y.E":"cX"},"Qb":{"mg":[],"y":["cX"],"y.E":"cX"},"Qc":{"mg":[],"y":["cX"],"y.E":"cX"},"Qd":{"mg":[],"y":["cX"],"y.E":"cX"},"Qe":{"mg":[],"y":["cX"],"y.E":"cX"},"Qf":{"mg":[],"y":["cX"],"y.E":"cX"},"Jp":{"cX":[],"dJ":[],"y":["b0"],"bv":["cX"],"y.E":"b0"},"Jq":{"cX":[],"dJ":[],"y":["b0"],"bv":["cX"],"y.E":"b0"},"Jr":{"cX":[],"dJ":[],"y":["b0"],"bv":["cX"],"y.E":"b0"},"Js":{"cX":[],"dJ":[],"y":["b0"],"bv":["cX"],"y.E":"b0"},"Jt":{"cX":[],"dJ":[],"y":["b0"],"bv":["cX"],"y.E":"b0"},"Ju":{"cX":[],"dJ":[],"y":["b0"],"bv":["cX"],"y.E":"b0"},"axY":{"bv":["cX"]},"Jv":{"cX":[],"dJ":[],"y":["b0"],"bv":["cX"],"y.E":"b0"},"Jw":{"cX":[],"dJ":[],"y":["b0"],"bv":["cX"],"y.E":"b0"},"Jx":{"cX":[],"dJ":[],"y":["b0"],"bv":["cX"],"y.E":"b0"},"Jy":{"cX":[],"dJ":[],"y":["b0"],"bv":["cX"],"y.E":"b0"},"Jz":{"cX":[],"dJ":[],"y":["b0"],"bv":["cX"],"y.E":"b0"},"JA":{"cX":[],"dJ":[],"y":["b0"],"bv":["cX"],"y.E":"b0"},"fq":{"cX":[],"dJ":[],"y":["b0"],"bv":["cX"],"y.E":"b0"},"asG":{"b7":[]},"cX":{"dJ":[],"bv":["cX"],"y":["b0"]}}'))
B.lv(b.typeUniverse,JSON.parse('{"ayT":1}'))
var y=(function rtii(){var x=B.A
return{G:x("dJ"),n:x("aq_"),W:x("aq1"),z:x("aqk"),R:x("a0D"),x:x("aso"),Y:x("asq"),P:x("qj"),r:x("kd"),I:x("mg"),h:x("a1E"),E:x("r<alT>"),Q:x("r<aq0>"),m:x("r<a_U>"),b:x("r<a0x>"),A:x("r<a0D>"),g:x("r<Cx>"),M:x("r<C<C<C<l>>>>"),o:x("r<C<C<l>>>"),S:x("r<C<l>>"),d:x("r<a4g>"),X:x("r<RZ>"),u:x("r<x2>"),l:x("r<ayN>"),j:x("r<oc>"),T:x("r<m>"),_:x("r<aDi>"),a:x("r<du>"),q:x("r<LP>"),F:x("r<aEW>"),J:x("r<a9l>"),v:x("r<aLm>"),C:x("r<Vk>"),t:x("r<l>"),aH:x("r<Ic?>"),cB:x("r<atj?>"),cQ:x("r<C<l>?>"),w:x("r<r4?>"),e:x("r<du?>"),y:x("r<~(mh)>"),c:x("CR"),bp:x("C<a1E>"),f:x("C<C<l>>"),k:x("C<oc>"),cm:x("C<a95>"),K:x("C<LP>"),H:x("C<O>"),L:x("C<l>"),c0:x("cX"),aG:x("RZ"),a2:x("ayK"),cK:x("a4B"),O:x("S_"),ab:x("a4E"),aM:x("S3"),i:x("oc"),N:x("m"),aL:x("aDh"),bk:x("r4"),D:x("du"),V:x("a95"),bQ:x("aEX"),bl:x("aEY"),bt:x("aF_"),U:x("ai<m>"),bc:x("aOu"),cb:x("O"),p:x("l"),a7:x("at_?"),cl:x("C<l>?"),bT:x("C<Ic?>?"),cM:x("E?"),ac:x("du?"),ak:x("a96?"),B:x("LP?"),Z:x("aEZ?"),s:x("l?")}})();(function constants(){var x=a.makeConstList
C.Az=new A.akM(0,"direct")
C.AA=new A.akM(1,"alpha")
C.IH=new A.m6(0,"none")
C.AB=new A.m6(3,"bitfields")
C.AC=new A.m6(6,"alphaBitfields")
C.qf=new A.al0(0,"littleEndian")
C.nt=new A.al0(1,"bigEndian")
C.jP=new A.bRj()
C.ak3=new A.cq_()
C.Jo=new A.cq0()
C.Jv=new A.b2g(4,"luminance")
C.Bt=new A.alZ(4294967295)
C.ase=new A.HC(0,"red")
C.asf=new A.HC(1,"green")
C.asg=new A.HC(2,"blue")
C.ash=new A.HC(3,"alpha")
C.asi=new A.HC(4,"other")
C.LL=new A.Pw(0,"uint")
C.Cf=new A.Pw(1,"half")
C.Cg=new A.Pw(2,"float")
C.LM=new A.un(0,"none")
C.asJ=new A.beG(2,"both")
C.fT=new A.nZ(0,"uint1")
C.hJ=new A.nZ(1,"uint2")
C.k5=new A.nZ(10,"float32")
C.lK=new A.nZ(11,"float64")
C.hK=new A.nZ(2,"uint4")
C.ac=new A.nZ(3,"uint8")
C.cC=new A.nZ(4,"uint16")
C.k6=new A.nZ(5,"uint32")
C.lL=new A.nZ(6,"int8")
C.lM=new A.nZ(7,"int16")
C.lN=new A.nZ(8,"int32")
C.iv=new A.nZ(9,"float16")
C.asZ=new A.arr(1,"page")
C.bv=new A.arr(2,"sequence")
C.Cs=new A.bkc(1,"deflate")
C.Mg=new A.Q2(2,"cur")
C.a0=new A.n4(0,"none")
C.MT=new A.n4(1,"byte")
C.MU=new A.n4(10,"sRational")
C.MV=new A.n4(11,"single")
C.MW=new A.n4(12,"double")
C.bJ=new A.n4(2,"ascii")
C.br=new A.n4(3,"short")
C.d5=new A.n4(4,"long")
C.ev=new A.n4(5,"rational")
C.MX=new A.n4(6,"sByte")
C.iy=new A.n4(7,"undefined")
C.MY=new A.n4(8,"sShort")
C.MZ=new A.n4(9,"sLong")
C.awp=new A.atb(0,"nearest")
C.bOM=new A.atb(1,"linear")
C.Ng=new A.bms(0,"yuv444")
C.CY=B.a(x([0,2,8]),y.t)
C.axm=B.a(x([0,4,2,1]),y.t)
C.atm=new A.Q2(0,"invalid")
C.atn=new A.Q2(1,"ico")
C.axr=B.a(x([C.atm,C.atn,C.Mg]),B.A("r<Q2>"))
C.NE=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),y.t)
C.ay5=B.a(x([252,243,207,63]),y.t)
C.bt1=new A.RL(0,"none")
C.a8Q=new A.RL(1,"background")
C.a8R=new A.RL(2,"previous")
C.ay7=B.a(x([C.bt1,C.a8Q,C.a8R]),B.A("r<RL>"))
C.NI=B.a(x([292,260,226,226]),y.t)
C.NK=B.a(x([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125]),y.t)
C.ayc=B.a(x([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0]),y.t)
C.ayj=B.a(x([2,3,7]),y.t)
C.NN=B.a(x([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68]),y.t)
C.ayq=B.a(x([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),y.t)
C.ayE=B.a(x([3,3,11]),y.t)
C.DH=B.a(x([128,128,128,128,128,128,128,128,128,128,128]),y.t)
C.Ox=B.a(x([C.DH,C.DH,C.DH]),y.S)
C.aAV=B.a(x([253,136,254,255,228,219,128,128,128,128,128]),y.t)
C.aDg=B.a(x([189,129,242,255,227,213,255,219,128,128,128]),y.t)
C.aDn=B.a(x([106,126,227,252,214,209,255,255,128,128,128]),y.t)
C.aGT=B.a(x([C.aAV,C.aDg,C.aDn]),y.S)
C.aHd=B.a(x([1,98,248,255,236,226,255,255,128,128,128]),y.t)
C.az0=B.a(x([181,133,238,254,221,234,255,154,128,128,128]),y.t)
C.ayK=B.a(x([78,134,202,247,198,180,255,219,128,128,128]),y.t)
C.aIw=B.a(x([C.aHd,C.az0,C.ayK]),y.S)
C.aAL=B.a(x([1,185,249,255,243,255,128,128,128,128,128]),y.t)
C.aH1=B.a(x([184,150,247,255,236,224,128,128,128,128,128]),y.t)
C.aKj=B.a(x([77,110,216,255,236,230,128,128,128,128,128]),y.t)
C.aFT=B.a(x([C.aAL,C.aH1,C.aKj]),y.S)
C.aG7=B.a(x([1,101,251,255,241,255,128,128,128,128,128]),y.t)
C.aAT=B.a(x([170,139,241,252,236,209,255,255,128,128,128]),y.t)
C.aGl=B.a(x([37,116,196,243,228,255,255,255,128,128,128]),y.t)
C.aA3=B.a(x([C.aG7,C.aAT,C.aGl]),y.S)
C.aDS=B.a(x([1,204,254,255,245,255,128,128,128,128,128]),y.t)
C.aL6=B.a(x([207,160,250,255,238,128,128,128,128,128,128]),y.t)
C.aL5=B.a(x([102,103,231,255,211,171,128,128,128,128,128]),y.t)
C.aBN=B.a(x([C.aDS,C.aL6,C.aL5]),y.S)
C.azJ=B.a(x([1,152,252,255,240,255,128,128,128,128,128]),y.t)
C.aLg=B.a(x([177,135,243,255,234,225,128,128,128,128,128]),y.t)
C.aFz=B.a(x([80,129,211,255,194,224,128,128,128,128,128]),y.t)
C.aGS=B.a(x([C.azJ,C.aLg,C.aFz]),y.S)
C.Pd=B.a(x([1,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aHJ=B.a(x([246,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aEY=B.a(x([255,128,128,128,128,128,128,128,128,128,128]),y.t)
C.aLw=B.a(x([C.Pd,C.aHJ,C.aEY]),y.S)
C.aBD=B.a(x([C.Ox,C.aGT,C.aIw,C.aFT,C.aA3,C.aBN,C.aGS,C.aLw]),y.o)
C.aKr=B.a(x([198,35,237,223,193,187,162,160,145,155,62]),y.t)
C.aAU=B.a(x([131,45,198,221,172,176,220,157,252,221,1]),y.t)
C.aKq=B.a(x([68,47,146,208,149,167,221,162,255,223,128]),y.t)
C.aEl=B.a(x([C.aKr,C.aAU,C.aKq]),y.S)
C.aIA=B.a(x([1,149,241,255,221,224,255,255,128,128,128]),y.t)
C.aJb=B.a(x([184,141,234,253,222,220,255,199,128,128,128]),y.t)
C.aEN=B.a(x([81,99,181,242,176,190,249,202,255,255,128]),y.t)
C.aJV=B.a(x([C.aIA,C.aJb,C.aEN]),y.S)
C.aJB=B.a(x([1,129,232,253,214,197,242,196,255,255,128]),y.t)
C.aKW=B.a(x([99,121,210,250,201,198,255,202,128,128,128]),y.t)
C.aGX=B.a(x([23,91,163,242,170,187,247,210,255,255,128]),y.t)
C.aF2=B.a(x([C.aJB,C.aKW,C.aGX]),y.S)
C.aCm=B.a(x([1,200,246,255,234,255,128,128,128,128,128]),y.t)
C.aJy=B.a(x([109,178,241,255,231,245,255,255,128,128,128]),y.t)
C.ayb=B.a(x([44,130,201,253,205,192,255,255,128,128,128]),y.t)
C.aK4=B.a(x([C.aCm,C.aJy,C.ayb]),y.S)
C.azs=B.a(x([1,132,239,251,219,209,255,165,128,128,128]),y.t)
C.axt=B.a(x([94,136,225,251,218,190,255,255,128,128,128]),y.t)
C.aJE=B.a(x([22,100,174,245,186,161,255,199,128,128,128]),y.t)
C.aG4=B.a(x([C.azs,C.axt,C.aJE]),y.S)
C.aJa=B.a(x([1,182,249,255,232,235,128,128,128,128,128]),y.t)
C.aGG=B.a(x([124,143,241,255,227,234,128,128,128,128,128]),y.t)
C.aD9=B.a(x([35,77,181,251,193,211,255,205,128,128,128]),y.t)
C.aDu=B.a(x([C.aJa,C.aGG,C.aD9]),y.S)
C.aLx=B.a(x([1,157,247,255,236,231,255,255,128,128,128]),y.t)
C.aBA=B.a(x([121,141,235,255,225,227,255,255,128,128,128]),y.t)
C.aJz=B.a(x([45,99,188,251,195,217,255,224,128,128,128]),y.t)
C.azX=B.a(x([C.aLx,C.aBA,C.aJz]),y.S)
C.axu=B.a(x([1,1,251,255,213,255,128,128,128,128,128]),y.t)
C.ays=B.a(x([203,1,248,255,255,128,128,128,128,128,128]),y.t)
C.aJe=B.a(x([137,1,177,255,224,255,128,128,128,128,128]),y.t)
C.azL=B.a(x([C.axu,C.ays,C.aJe]),y.S)
C.aIX=B.a(x([C.aEl,C.aJV,C.aF2,C.aK4,C.aG4,C.aDu,C.azX,C.azL]),y.o)
C.aBV=B.a(x([253,9,248,251,207,208,255,192,128,128,128]),y.t)
C.aHK=B.a(x([175,13,224,243,193,185,249,198,255,255,128]),y.t)
C.aLv=B.a(x([73,17,171,221,161,179,236,167,255,234,128]),y.t)
C.aHu=B.a(x([C.aBV,C.aHK,C.aLv]),y.S)
C.aIK=B.a(x([1,95,247,253,212,183,255,255,128,128,128]),y.t)
C.aFh=B.a(x([239,90,244,250,211,209,255,255,128,128,128]),y.t)
C.aKi=B.a(x([155,77,195,248,188,195,255,255,128,128,128]),y.t)
C.aJ9=B.a(x([C.aIK,C.aFh,C.aKi]),y.S)
C.aDW=B.a(x([1,24,239,251,218,219,255,205,128,128,128]),y.t)
C.aIi=B.a(x([201,51,219,255,196,186,128,128,128,128,128]),y.t)
C.aFg=B.a(x([69,46,190,239,201,218,255,228,128,128,128]),y.t)
C.aIG=B.a(x([C.aDW,C.aIi,C.aFg]),y.S)
C.aDj=B.a(x([1,191,251,255,255,128,128,128,128,128,128]),y.t)
C.aGk=B.a(x([223,165,249,255,213,255,128,128,128,128,128]),y.t)
C.aH8=B.a(x([141,124,248,255,255,128,128,128,128,128,128]),y.t)
C.aJA=B.a(x([C.aDj,C.aGk,C.aH8]),y.S)
C.aEq=B.a(x([1,16,248,255,255,128,128,128,128,128,128]),y.t)
C.aBw=B.a(x([190,36,230,255,236,255,128,128,128,128,128]),y.t)
C.aAX=B.a(x([149,1,255,128,128,128,128,128,128,128,128]),y.t)
C.azt=B.a(x([C.aEq,C.aBw,C.aAX]),y.S)
C.aH_=B.a(x([1,226,255,128,128,128,128,128,128,128,128]),y.t)
C.aHA=B.a(x([247,192,255,128,128,128,128,128,128,128,128]),y.t)
C.aKg=B.a(x([240,128,255,128,128,128,128,128,128,128,128]),y.t)
C.ayx=B.a(x([C.aH_,C.aHA,C.aKg]),y.S)
C.aK3=B.a(x([1,134,252,255,255,128,128,128,128,128,128]),y.t)
C.aGE=B.a(x([213,62,250,255,255,128,128,128,128,128,128]),y.t)
C.aLc=B.a(x([55,93,255,128,128,128,128,128,128,128,128]),y.t)
C.aGZ=B.a(x([C.aK3,C.aGE,C.aLc]),y.S)
C.aAE=B.a(x([C.aHu,C.aJ9,C.aIG,C.aJA,C.azt,C.ayx,C.aGZ,C.Ox]),y.o)
C.aGH=B.a(x([202,24,213,235,186,191,220,160,240,175,255]),y.t)
C.aAS=B.a(x([126,38,182,232,169,184,228,174,255,187,128]),y.t)
C.azv=B.a(x([61,46,138,219,151,178,240,170,255,216,128]),y.t)
C.aJ2=B.a(x([C.aGH,C.aAS,C.azv]),y.S)
C.aFy=B.a(x([1,112,230,250,199,191,247,159,255,255,128]),y.t)
C.azW=B.a(x([166,109,228,252,211,215,255,174,128,128,128]),y.t)
C.aGc=B.a(x([39,77,162,232,172,180,245,178,255,255,128]),y.t)
C.aIZ=B.a(x([C.aFy,C.azW,C.aGc]),y.S)
C.aFI=B.a(x([1,52,220,246,198,199,249,220,255,255,128]),y.t)
C.aBK=B.a(x([124,74,191,243,183,193,250,221,255,255,128]),y.t)
C.aD8=B.a(x([24,71,130,219,154,170,243,182,255,255,128]),y.t)
C.aIY=B.a(x([C.aFI,C.aBK,C.aD8]),y.S)
C.aD4=B.a(x([1,182,225,249,219,240,255,224,128,128,128]),y.t)
C.aLa=B.a(x([149,150,226,252,216,205,255,171,128,128,128]),y.t)
C.aLK=B.a(x([28,108,170,242,183,194,254,223,255,255,128]),y.t)
C.aKE=B.a(x([C.aD4,C.aLa,C.aLK]),y.S)
C.aLN=B.a(x([1,81,230,252,204,203,255,192,128,128,128]),y.t)
C.aJu=B.a(x([123,102,209,247,188,196,255,233,128,128,128]),y.t)
C.aKb=B.a(x([20,95,153,243,164,173,255,203,128,128,128]),y.t)
C.aJv=B.a(x([C.aLN,C.aJu,C.aKb]),y.S)
C.aEF=B.a(x([1,222,248,255,216,213,128,128,128,128,128]),y.t)
C.aGB=B.a(x([168,175,246,252,235,205,255,255,128,128,128]),y.t)
C.aDd=B.a(x([47,116,215,255,211,212,255,255,128,128,128]),y.t)
C.aBi=B.a(x([C.aEF,C.aGB,C.aDd]),y.S)
C.aEx=B.a(x([1,121,236,253,212,214,255,255,128,128,128]),y.t)
C.aFK=B.a(x([141,84,213,252,201,202,255,219,128,128,128]),y.t)
C.aHo=B.a(x([42,80,160,240,162,185,255,205,128,128,128]),y.t)
C.aDx=B.a(x([C.aEx,C.aFK,C.aHo]),y.S)
C.aLo=B.a(x([244,1,255,128,128,128,128,128,128,128,128]),y.t)
C.axp=B.a(x([238,1,255,128,128,128,128,128,128,128,128]),y.t)
C.aHD=B.a(x([C.Pd,C.aLo,C.axp]),y.S)
C.ay2=B.a(x([C.aJ2,C.aIZ,C.aIY,C.aKE,C.aJv,C.aBi,C.aDx,C.aHD]),y.o)
C.azu=B.a(x([C.aBD,C.aIX,C.aAE,C.ay2]),y.M)
C.azy=B.a(x([511,1023,2047,4095]),y.t)
C.aA0=B.a(x([63,207,243,252]),y.t)
C.aAx=B.a(x([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]),y.t)
C.tr=B.a(x([0,1,2,3,4,5,6,7,8,9,10,11]),y.t)
C.aB_=B.a(x([8,8,4,2]),y.t)
C.axH=B.a(x([173,148,140]),y.t)
C.axI=B.a(x([176,155,140,135]),y.t)
C.axF=B.a(x([180,157,141,134,130]),y.t)
C.ayr=B.a(x([254,254,243,230,196,177,153,140,133,130,129]),y.t)
C.aB1=B.a(x([C.axH,C.axI,C.axF,C.ayr]),y.S)
C.aB6=B.a(x([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576]),y.t)
C.OF=B.a(x([1,1.387039845,1.306562965,1.175875602,1,0.785694958,0.5411961,0.275899379]),B.A("r<O>"))
C.aBn=B.a(x([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),y.t)
C.aBF=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095]),y.t)
C.OS=B.a(x([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29]),y.t)
C.P3=B.a(x([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250]),y.t)
C.aC9=B.a(x([280,256,256,256,40]),y.t)
C.tY=B.a(x([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63]),y.t)
C.Pk=B.a(x([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390]),y.t)
C.De=B.a(x([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157]),y.t)
C.aCq=B.a(x([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112]),y.t)
C.Df=B.a(x([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284]),y.t)
C.Pv=B.a(x([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119]),y.t)
C.Px=B.a(x([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28]),y.t)
C.aCU=B.a(x([C.LL,C.Cf,C.Cg]),B.A("r<Pw>"))
C.ue=B.a(x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),y.t)
C.aDD=B.a(x([254,253,251,247,239,223,191,127]),y.t)
C.ut=B.a(x([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8]),y.t)
C.Qd=B.a(x([A.drB(),A.drt(),A.drI(),A.drG(),A.drD(),A.drC(),A.drE()]),y.y)
C.Qf=B.a(x([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5]),y.t)
C.Qq=B.a(x([C.a0,C.MT,C.bJ,C.br,C.d5,C.ev,C.MX,C.iy,C.MY,C.MZ,C.MU,C.MV,C.MW]),B.A("r<n4>"))
C.H7=new A.kR(0,"whiteIsZero")
C.bFX=new A.kR(1,"blackIsZero")
C.bG3=new A.kR(2,"rgb")
C.H9=new A.kR(3,"palette")
C.bG4=new A.kR(4,"transparencyMask")
C.abZ=new A.kR(5,"cmyk")
C.bG5=new A.kR(6,"yCbCr")
C.bG6=new A.kR(7,"reserved7")
C.bG7=new A.kR(8,"cieLab")
C.bG8=new A.kR(9,"iccLab")
C.bFY=new A.kR(10,"ituLab")
C.bFZ=new A.kR(11,"logL")
C.bG_=new A.kR(12,"logLuv")
C.bG0=new A.kR(13,"colorFilterArray")
C.bG1=new A.kR(14,"linearRaw")
C.bG2=new A.kR(15,"depth")
C.H8=new A.kR(16,"unknown")
C.aE_=B.a(x([C.H7,C.bFX,C.bG3,C.H9,C.bG4,C.abZ,C.bG5,C.bG6,C.bG7,C.bG8,C.bFY,C.bFZ,C.bG_,C.bG0,C.bG1,C.bG2,C.H8]),B.A("r<kR>"))
C.QG=B.a(x([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0]),y.t)
C.a8O=new A.a4f(0,"source")
C.a8P=new A.a4f(1,"over")
C.aEt=B.a(x([C.a8O,C.a8P]),B.A("r<a4f>"))
C.bFP=new A.Ld(0,"invalid")
C.abX=new A.Ld(1,"uint")
C.b6=new A.Ld(2,"int")
C.pJ=new A.Ld(3,"float")
C.aEw=B.a(x([C.bFP,C.abX,C.b6,C.pJ]),B.A("r<Ld>"))
C.aED=B.a(x([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15]),y.t)
C.Rf=B.a(x([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9]),y.t)
C.aFe=B.a(x([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15]),y.t)
C.asj=new A.un(1,"rle")
C.ask=new A.un(2,"zips")
C.asl=new A.un(3,"zip")
C.asm=new A.un(4,"piz")
C.asn=new A.un(5,"pxr24")
C.aso=new A.un(6,"b44")
C.asp=new A.un(7,"b44a")
C.aFi=B.a(x([C.LM,C.asj,C.ask,C.asl,C.asm,C.asn,C.aso,C.asp]),B.A("r<un>"))
C.aHj=B.a(x([231,120,48,89,115,113,120,152,112]),y.t)
C.ay3=B.a(x([152,179,64,126,170,118,46,70,95]),y.t)
C.aFd=B.a(x([175,69,143,80,85,82,72,155,103]),y.t)
C.azb=B.a(x([56,58,10,171,218,189,17,13,152]),y.t)
C.aG9=B.a(x([114,26,17,163,44,195,21,10,173]),y.t)
C.aGz=B.a(x([121,24,80,195,26,62,44,64,85]),y.t)
C.aG3=B.a(x([144,71,10,38,171,213,144,34,26]),y.t)
C.aJH=B.a(x([170,46,55,19,136,160,33,206,71]),y.t)
C.aCu=B.a(x([63,20,8,114,114,208,12,9,226]),y.t)
C.aDT=B.a(x([81,40,11,96,182,84,29,16,36]),y.t)
C.axv=B.a(x([C.aHj,C.ay3,C.aFd,C.azb,C.aG9,C.aGz,C.aG3,C.aJH,C.aCu,C.aDT]),y.S)
C.aBv=B.a(x([134,183,89,137,98,101,106,165,148]),y.t)
C.aJk=B.a(x([72,187,100,130,157,111,32,75,80]),y.t)
C.aGO=B.a(x([66,102,167,99,74,62,40,234,128]),y.t)
C.ayw=B.a(x([41,53,9,178,241,141,26,8,107]),y.t)
C.aDE=B.a(x([74,43,26,146,73,166,49,23,157]),y.t)
C.aCP=B.a(x([65,38,105,160,51,52,31,115,128]),y.t)
C.aCX=B.a(x([104,79,12,27,217,255,87,17,7]),y.t)
C.aFb=B.a(x([87,68,71,44,114,51,15,186,23]),y.t)
C.aJ0=B.a(x([47,41,14,110,182,183,21,17,194]),y.t)
C.aHI=B.a(x([66,45,25,102,197,189,23,18,22]),y.t)
C.aKc=B.a(x([C.aBv,C.aJk,C.aGO,C.ayw,C.aDE,C.aCP,C.aCX,C.aFb,C.aJ0,C.aHI]),y.S)
C.aHh=B.a(x([88,88,147,150,42,46,45,196,205]),y.t)
C.aGe=B.a(x([43,97,183,117,85,38,35,179,61]),y.t)
C.aDc=B.a(x([39,53,200,87,26,21,43,232,171]),y.t)
C.aEU=B.a(x([56,34,51,104,114,102,29,93,77]),y.t)
C.aFX=B.a(x([39,28,85,171,58,165,90,98,64]),y.t)
C.aCI=B.a(x([34,22,116,206,23,34,43,166,73]),y.t)
C.axw=B.a(x([107,54,32,26,51,1,81,43,31]),y.t)
C.aJO=B.a(x([68,25,106,22,64,171,36,225,114]),y.t)
C.aBu=B.a(x([34,19,21,102,132,188,16,76,124]),y.t)
C.aKy=B.a(x([62,18,78,95,85,57,50,48,51]),y.t)
C.aBR=B.a(x([C.aHh,C.aGe,C.aDc,C.aEU,C.aFX,C.aCI,C.axw,C.aJO,C.aBu,C.aKy]),y.S)
C.aFP=B.a(x([193,101,35,159,215,111,89,46,111]),y.t)
C.aAC=B.a(x([60,148,31,172,219,228,21,18,111]),y.t)
C.azq=B.a(x([112,113,77,85,179,255,38,120,114]),y.t)
C.aKu=B.a(x([40,42,1,196,245,209,10,25,109]),y.t)
C.aEu=B.a(x([88,43,29,140,166,213,37,43,154]),y.t)
C.aCK=B.a(x([61,63,30,155,67,45,68,1,209]),y.t)
C.aDm=B.a(x([100,80,8,43,154,1,51,26,71]),y.t)
C.ayB=B.a(x([142,78,78,16,255,128,34,197,171]),y.t)
C.aFt=B.a(x([41,40,5,102,211,183,4,1,221]),y.t)
C.aC5=B.a(x([51,50,17,168,209,192,23,25,82]),y.t)
C.aBO=B.a(x([C.aFP,C.aAC,C.azq,C.aKu,C.aEu,C.aCK,C.aDm,C.ayB,C.aFt,C.aC5]),y.S)
C.aD5=B.a(x([138,31,36,171,27,166,38,44,229]),y.t)
C.aBL=B.a(x([67,87,58,169,82,115,26,59,179]),y.t)
C.aIv=B.a(x([63,59,90,180,59,166,93,73,154]),y.t)
C.aK9=B.a(x([40,40,21,116,143,209,34,39,175]),y.t)
C.ayI=B.a(x([47,15,16,183,34,223,49,45,183]),y.t)
C.aAR=B.a(x([46,17,33,183,6,98,15,32,183]),y.t)
C.aLP=B.a(x([57,46,22,24,128,1,54,17,37]),y.t)
C.aDq=B.a(x([65,32,73,115,28,128,23,128,205]),y.t)
C.aGN=B.a(x([40,3,9,115,51,192,18,6,223]),y.t)
C.aDB=B.a(x([87,37,9,115,59,77,64,21,47]),y.t)
C.aFs=B.a(x([C.aD5,C.aBL,C.aIv,C.aK9,C.ayI,C.aAR,C.aLP,C.aDq,C.aGN,C.aDB]),y.S)
C.aLm=B.a(x([104,55,44,218,9,54,53,130,226]),y.t)
C.azU=B.a(x([64,90,70,205,40,41,23,26,57]),y.t)
C.aIu=B.a(x([54,57,112,184,5,41,38,166,213]),y.t)
C.aCJ=B.a(x([30,34,26,133,152,116,10,32,134]),y.t)
C.aHv=B.a(x([39,19,53,221,26,114,32,73,255]),y.t)
C.aC3=B.a(x([31,9,65,234,2,15,1,118,73]),y.t)
C.aFq=B.a(x([75,32,12,51,192,255,160,43,51]),y.t)
C.aCN=B.a(x([88,31,35,67,102,85,55,186,85]),y.t)
C.aE4=B.a(x([56,21,23,111,59,205,45,37,192]),y.t)
C.aEf=B.a(x([55,38,70,124,73,102,1,34,98]),y.t)
C.aLt=B.a(x([C.aLm,C.azU,C.aIu,C.aCJ,C.aHv,C.aC3,C.aFq,C.aCN,C.aE4,C.aEf]),y.S)
C.aE2=B.a(x([125,98,42,88,104,85,117,175,82]),y.t)
C.aCT=B.a(x([95,84,53,89,128,100,113,101,45]),y.t)
C.aGn=B.a(x([75,79,123,47,51,128,81,171,1]),y.t)
C.azN=B.a(x([57,17,5,71,102,57,53,41,49]),y.t)
C.aIf=B.a(x([38,33,13,121,57,73,26,1,85]),y.t)
C.aL8=B.a(x([41,10,67,138,77,110,90,47,114]),y.t)
C.aFk=B.a(x([115,21,2,10,102,255,166,23,6]),y.t)
C.aBx=B.a(x([101,29,16,10,85,128,101,196,26]),y.t)
C.aDi=B.a(x([57,18,10,102,102,213,34,20,43]),y.t)
C.aEs=B.a(x([117,20,15,36,163,128,68,1,26]),y.t)
C.aF8=B.a(x([C.aE2,C.aCT,C.aGn,C.azN,C.aIf,C.aL8,C.aFk,C.aBx,C.aDi,C.aEs]),y.S)
C.aDz=B.a(x([102,61,71,37,34,53,31,243,192]),y.t)
C.aL1=B.a(x([69,60,71,38,73,119,28,222,37]),y.t)
C.aDC=B.a(x([68,45,128,34,1,47,11,245,171]),y.t)
C.axE=B.a(x([62,17,19,70,146,85,55,62,70]),y.t)
C.aLH=B.a(x([37,43,37,154,100,163,85,160,1]),y.t)
C.aKJ=B.a(x([63,9,92,136,28,64,32,201,85]),y.t)
C.aJp=B.a(x([75,15,9,9,64,255,184,119,16]),y.t)
C.aBH=B.a(x([86,6,28,5,64,255,25,248,1]),y.t)
C.aHE=B.a(x([56,8,17,132,137,255,55,116,128]),y.t)
C.azA=B.a(x([58,15,20,82,135,57,26,121,40]),y.t)
C.aG1=B.a(x([C.aDz,C.aL1,C.aDC,C.axE,C.aLH,C.aKJ,C.aJp,C.aBH,C.aHE,C.azA]),y.S)
C.aGs=B.a(x([164,50,31,137,154,133,25,35,218]),y.t)
C.aBG=B.a(x([51,103,44,131,131,123,31,6,158]),y.t)
C.aKB=B.a(x([86,40,64,135,148,224,45,183,128]),y.t)
C.aFc=B.a(x([22,26,17,131,240,154,14,1,209]),y.t)
C.aAI=B.a(x([45,16,21,91,64,222,7,1,197]),y.t)
C.aKa=B.a(x([56,21,39,155,60,138,23,102,213]),y.t)
C.aLr=B.a(x([83,12,13,54,192,255,68,47,28]),y.t)
C.aGP=B.a(x([85,26,85,85,128,128,32,146,171]),y.t)
C.aEZ=B.a(x([18,11,7,63,144,171,4,4,246]),y.t)
C.aBS=B.a(x([35,27,10,146,174,171,12,26,128]),y.t)
C.aEH=B.a(x([C.aGs,C.aBG,C.aKB,C.aFc,C.aAI,C.aKa,C.aLr,C.aGP,C.aEZ,C.aBS]),y.S)
C.aIV=B.a(x([190,80,35,99,180,80,126,54,45]),y.t)
C.aJG=B.a(x([85,126,47,87,176,51,41,20,32]),y.t)
C.aIn=B.a(x([101,75,128,139,118,146,116,128,85]),y.t)
C.aJg=B.a(x([56,41,15,176,236,85,37,9,62]),y.t)
C.azI=B.a(x([71,30,17,119,118,255,17,18,138]),y.t)
C.aG0=B.a(x([101,38,60,138,55,70,43,26,142]),y.t)
C.aEP=B.a(x([146,36,19,30,171,255,97,27,20]),y.t)
C.aHf=B.a(x([138,45,61,62,219,1,81,188,64]),y.t)
C.aKv=B.a(x([32,41,20,117,151,142,20,21,163]),y.t)
C.aJI=B.a(x([112,19,12,61,195,128,48,4,24]),y.t)
C.aIF=B.a(x([C.aIV,C.aJG,C.aIn,C.aJg,C.azI,C.aG0,C.aEP,C.aHf,C.aKv,C.aJI]),y.S)
C.aFr=B.a(x([C.axv,C.aKc,C.aBR,C.aBO,C.aFs,C.aLt,C.aF8,C.aG1,C.aEH,C.aIF]),y.o)
C.z8=new A.ot(0,"none")
C.jz=new A.ot(1,"palette")
C.abW=new A.ot(2,"rgb")
C.bFG=new A.ot(3,"gray")
C.bFH=new A.ot(4,"reserved4")
C.bFI=new A.ot(5,"reserved5")
C.bFJ=new A.ot(6,"reserved6")
C.bFK=new A.ot(7,"reserved7")
C.bFL=new A.ot(8,"reserved8")
C.jA=new A.ot(9,"paletteRle")
C.abV=new A.ot(10,"rgbRle")
C.bFF=new A.ot(11,"grayRle")
C.aFB=B.a(x([C.z8,C.jz,C.abW,C.bFG,C.bFH,C.bFI,C.bFJ,C.bFK,C.bFL,C.jA,C.abV,C.bFF]),B.A("r<ot>"))
C.RY=B.a(x([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250]),y.t)
C.aGm=B.a(x([A.drl(),A.drs(),A.dru(),A.drn(),A.drq(),A.drw(),A.drp(),A.drv(),A.drm(),A.dro()]),y.y)
C.D6=B.a(x([8,0,8,0]),y.t)
C.azS=B.a(x([5,3,5,3]),y.t)
C.ayF=B.a(x([3,5,3,5]),y.t)
C.Nu=B.a(x([0,8,0,8]),y.t)
C.O1=B.a(x([4,4,4,4]),y.t)
C.azo=B.a(x([4,4,0,0]),y.t)
C.Se=B.a(x([C.D6,C.azS,C.ayF,C.Nu,C.D6,C.O1,C.azo,C.Nu]),y.S)
C.Sm=B.a(x([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41]),y.t)
C.aH6=B.a(x([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99]),y.t)
C.vQ=B.a(x([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845]),y.t)
C.Sr=B.a(x([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127]),y.t)
C.St=B.a(x([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]),y.t)
C.vY=B.a(x([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567]),y.t)
C.SG=B.a(x([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232]),y.t)
C.Tp=B.a(x([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0]),y.t)
C.bt2=new A.DH(0,"none")
C.bt3=new A.DH(1,"sub")
C.bt4=new A.DH(2,"up")
C.bt5=new A.DH(3,"average")
C.bt6=new A.DH(4,"paeth")
C.Tq=B.a(x([C.bt2,C.bt3,C.bt4,C.bt5,C.bt6]),B.A("r<DH>"))
C.hO=B.a(x([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]),y.t)
C.oz=B.a(x([0,1,3,7,15,31,63,127,255]),y.t)
C.DI=B.a(x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),y.t)
C.f4=B.a(x([255,255,255,255,255,255,255,255,255,255,255]),y.t)
C.mj=B.a(x([C.f4,C.f4,C.f4]),y.S)
C.aET=B.a(x([176,246,255,255,255,255,255,255,255,255,255]),y.t)
C.aLf=B.a(x([223,241,252,255,255,255,255,255,255,255,255]),y.t)
C.aBc=B.a(x([249,253,253,255,255,255,255,255,255,255,255]),y.t)
C.aFo=B.a(x([C.aET,C.aLf,C.aBc]),y.S)
C.aDY=B.a(x([255,244,252,255,255,255,255,255,255,255,255]),y.t)
C.aDv=B.a(x([234,254,254,255,255,255,255,255,255,255,255]),y.t)
C.UH=B.a(x([253,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aBE=B.a(x([C.aDY,C.aDv,C.UH]),y.S)
C.aKA=B.a(x([255,246,254,255,255,255,255,255,255,255,255]),y.t)
C.aHz=B.a(x([239,253,254,255,255,255,255,255,255,255,255]),y.t)
C.U4=B.a(x([254,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aJm=B.a(x([C.aKA,C.aHz,C.U4]),y.S)
C.Qj=B.a(x([255,248,254,255,255,255,255,255,255,255,255]),y.t)
C.aCg=B.a(x([251,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aGy=B.a(x([C.Qj,C.aCg,C.f4]),y.S)
C.D0=B.a(x([255,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aGp=B.a(x([251,254,254,255,255,255,255,255,255,255,255]),y.t)
C.aCB=B.a(x([C.D0,C.aGp,C.U4]),y.S)
C.az7=B.a(x([255,254,253,255,254,255,255,255,255,255,255]),y.t)
C.aDP=B.a(x([250,255,254,255,254,255,255,255,255,255,255]),y.t)
C.w8=B.a(x([254,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aEv=B.a(x([C.az7,C.aDP,C.w8]),y.S)
C.aDh=B.a(x([C.mj,C.aFo,C.aBE,C.aJm,C.aGy,C.aCB,C.aEv,C.mj]),y.o)
C.ay1=B.a(x([217,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aEL=B.a(x([225,252,241,253,255,255,254,255,255,255,255]),y.t)
C.aIq=B.a(x([234,250,241,250,253,255,253,254,255,255,255]),y.t)
C.aJJ=B.a(x([C.ay1,C.aEL,C.aIq]),y.S)
C.DR=B.a(x([255,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aBj=B.a(x([223,254,254,255,255,255,255,255,255,255,255]),y.t)
C.aAK=B.a(x([238,253,254,254,255,255,255,255,255,255,255]),y.t)
C.aHt=B.a(x([C.DR,C.aBj,C.aAK]),y.S)
C.aDA=B.a(x([249,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aKx=B.a(x([C.Qj,C.aDA,C.f4]),y.S)
C.aJQ=B.a(x([255,253,255,255,255,255,255,255,255,255,255]),y.t)
C.aGo=B.a(x([247,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aG5=B.a(x([C.aJQ,C.aGo,C.f4]),y.S)
C.aAy=B.a(x([252,255,255,255,255,255,255,255,255,255,255]),y.t)
C.ayy=B.a(x([C.D0,C.aAy,C.f4]),y.S)
C.US=B.a(x([255,254,254,255,255,255,255,255,255,255,255]),y.t)
C.aAH=B.a(x([C.US,C.UH,C.f4]),y.S)
C.aHn=B.a(x([255,254,253,255,255,255,255,255,255,255,255]),y.t)
C.QE=B.a(x([250,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aAu=B.a(x([C.aHn,C.QE,C.w8]),y.S)
C.azd=B.a(x([C.aJJ,C.aHt,C.aKx,C.aG5,C.ayy,C.aAH,C.aAu,C.mj]),y.o)
C.aII=B.a(x([186,251,250,255,255,255,255,255,255,255,255]),y.t)
C.aC6=B.a(x([234,251,244,254,255,255,255,255,255,255,255]),y.t)
C.aJo=B.a(x([251,251,243,253,254,255,254,255,255,255,255]),y.t)
C.aCx=B.a(x([C.aII,C.aC6,C.aJo]),y.S)
C.aCk=B.a(x([236,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aHl=B.a(x([251,253,253,254,254,255,255,255,255,255,255]),y.t)
C.aEk=B.a(x([C.D0,C.aCk,C.aHl]),y.S)
C.aIU=B.a(x([254,254,254,255,255,255,255,255,255,255,255]),y.t)
C.aCd=B.a(x([C.US,C.aIU,C.f4]),y.S)
C.aJx=B.a(x([254,254,255,255,255,255,255,255,255,255,255]),y.t)
C.aCh=B.a(x([C.DR,C.aJx,C.w8]),y.S)
C.UU=B.a(x([C.f4,C.w8,C.f4]),y.S)
C.aza=B.a(x([C.aCx,C.aEk,C.aCd,C.aCh,C.UU,C.mj,C.mj,C.mj]),y.o)
C.aDK=B.a(x([248,255,255,255,255,255,255,255,255,255,255]),y.t)
C.aCS=B.a(x([250,254,252,254,255,255,255,255,255,255,255]),y.t)
C.aC4=B.a(x([248,254,249,253,255,255,255,255,255,255,255]),y.t)
C.aEp=B.a(x([C.aDK,C.aCS,C.aC4]),y.S)
C.ayL=B.a(x([255,253,253,255,255,255,255,255,255,255,255]),y.t)
C.aK2=B.a(x([246,253,253,255,255,255,255,255,255,255,255]),y.t)
C.aCz=B.a(x([252,254,251,254,254,255,255,255,255,255,255]),y.t)
C.aK1=B.a(x([C.ayL,C.aK2,C.aCz]),y.S)
C.aLy=B.a(x([255,254,252,255,255,255,255,255,255,255,255]),y.t)
C.aBY=B.a(x([248,254,253,255,255,255,255,255,255,255,255]),y.t)
C.aAt=B.a(x([253,255,254,254,255,255,255,255,255,255,255]),y.t)
C.aGI=B.a(x([C.aLy,C.aBY,C.aAt]),y.S)
C.aLp=B.a(x([255,251,254,255,255,255,255,255,255,255,255]),y.t)
C.aFR=B.a(x([245,251,254,255,255,255,255,255,255,255,255]),y.t)
C.aG_=B.a(x([253,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aB5=B.a(x([C.aLp,C.aFR,C.aG_]),y.S)
C.aBa=B.a(x([255,251,253,255,255,255,255,255,255,255,255]),y.t)
C.aE1=B.a(x([252,253,254,255,255,255,255,255,255,255,255]),y.t)
C.aJ4=B.a(x([C.aBa,C.aE1,C.DR]),y.S)
C.aA5=B.a(x([255,252,255,255,255,255,255,255,255,255,255]),y.t)
C.aLj=B.a(x([249,255,254,255,255,255,255,255,255,255,255]),y.t)
C.aD1=B.a(x([255,255,254,255,255,255,255,255,255,255,255]),y.t)
C.axD=B.a(x([C.aA5,C.aLj,C.aD1]),y.S)
C.aLJ=B.a(x([255,255,253,255,255,255,255,255,255,255,255]),y.t)
C.aCf=B.a(x([C.aLJ,C.QE,C.f4]),y.S)
C.aAs=B.a(x([C.aEp,C.aK1,C.aGI,C.aB5,C.aJ4,C.axD,C.aCf,C.UU]),y.o)
C.aJC=B.a(x([C.aDh,C.azd,C.aza,C.aAs]),y.M)
C.afU=new A.m6(1,"rle8")
C.afZ=new A.m6(2,"rle4")
C.ag_=new A.m6(4,"jpeg")
C.ag0=new A.m6(5,"png")
C.ag1=new A.m6(7,"reserved7")
C.ag2=new A.m6(8,"reserved8")
C.ag3=new A.m6(9,"reserved9")
C.afV=new A.m6(10,"reserved10")
C.afW=new A.m6(11,"cmyk")
C.afX=new A.m6(12,"cmykRle8")
C.afY=new A.m6(13,"cmykRle4")
C.U7=B.a(x([C.IH,C.afU,C.afZ,C.AB,C.ag_,C.ag0,C.AC,C.ag1,C.ag2,C.ag3,C.afV,C.afW,C.afX,C.afY]),B.A("r<m6>"))
C.DJ=B.a(x([0,128,192,224,240,248,252,254,255]),y.t)
C.DK=B.a(x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295]),y.t)
C.aJZ=B.a(x([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),y.t)
C.aK5=B.a(x([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),y.t)
C.acS=new A.LQ(0,"predictor")
C.bJg=new A.LQ(1,"crossColor")
C.bJh=new A.LQ(2,"subtractGreen")
C.acT=new A.LQ(3,"colorIndexing")
C.aKk=B.a(x([C.acS,C.bJg,C.bJh,C.acT]),B.A("r<LQ>"))
C.f5=B.a(x([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255]),y.t)
C.aKX=B.a(x([A.drx(),A.drr(),A.drH(),A.drF(),A.drz(),A.dry(),A.drA()]),y.y)
C.V4=B.a(x([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396]),y.t)
C.aL4=B.a(x([null,A.drY(),A.drZ(),A.drX()]),B.A("r<~(l,l,l,l,l,du)?>"))
C.Ve=B.a(x([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),y.t)
C.xm=B.a(x([0,36,72,109,145,182,218,255]),y.t)
C.h7=B.a(x([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255]),y.t)
C.aLh=B.a(x([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),y.t)
C.kk=B.a(x([0,1,1,2,4,8,1,1,2,4,8,4,8]),y.t)
C.btq=new A.uZ(0,"bitmap")
C.a98=new A.uZ(1,"grayscale")
C.btr=new A.uZ(2,"indexed")
C.a99=new A.uZ(3,"rgb")
C.a9a=new A.uZ(4,"cmyk")
C.bts=new A.uZ(5,"multiChannel")
C.btt=new A.uZ(6,"duoTone")
C.a9b=new A.uZ(7,"lab")
C.aLi=B.a(x([C.btq,C.a98,C.btr,C.a99,C.a9a,C.bts,C.btt,C.a9b]),B.A("r<uZ>"))
C.aLu=B.a(x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),y.t)
C.xw=B.a(x([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),y.t)
C.VN=B.a(x([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0]),y.t)
C.ayn=B.a(x([2,6,2,6]),y.t)
C.aAh=B.a(x([6,2,6,2]),y.t)
C.ayg=B.a(x([2,2,6,6]),y.t)
C.axV=B.a(x([1,3,3,9]),y.t)
C.azf=B.a(x([4,0,12,0]),y.t)
C.ayD=B.a(x([3,1,9,3]),y.t)
C.aAZ=B.a(x([8,8,0,0]),y.t)
C.azh=B.a(x([4,12,0,0]),y.t)
C.axG=B.a(x([16,0,0,0]),y.t)
C.axB=B.a(x([12,4,0,0]),y.t)
C.aAr=B.a(x([6,6,2,2]),y.t)
C.ayG=B.a(x([3,9,1,3]),y.t)
C.axA=B.a(x([12,0,4,0]),y.t)
C.aBb=B.a(x([9,3,3,1]),y.t)
C.dr=B.a(x([C.O1,C.ayn,C.D6,C.aAh,C.ayg,C.axV,C.azf,C.ayD,C.aAZ,C.azh,C.axG,C.axB,C.aAr,C.ayG,C.axA,C.aBb]),y.S)
C.mk=B.a(x([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1]),y.t)
C.bnt={ProcessingSoftware:0,SubfileType:1,OldSubfileType:2,ImageWidth:3,ImageLength:4,ImageHeight:5,BitsPerSample:6,Compression:7,PhotometricInterpretation:8,Thresholding:9,CellWidth:10,CellLength:11,FillOrder:12,DocumentName:13,ImageDescription:14,Make:15,Model:16,StripOffsets:17,Orientation:18,SamplesPerPixel:19,RowsPerStrip:20,StripByteCounts:21,MinSampleValue:22,MaxSampleValue:23,XResolution:24,YResolution:25,PlanarConfiguration:26,PageName:27,XPosition:28,YPosition:29,GrayResponseUnit:30,GrayResponseCurve:31,T4Options:32,T6Options:33,ResolutionUnit:34,PageNumber:35,ColorResponseUnit:36,TransferFunction:37,Software:38,DateTime:39,Artist:40,HostComputer:41,Predictor:42,WhitePoint:43,PrimaryChromaticities:44,ColorMap:45,HalftoneHints:46,TileWidth:47,TileLength:48,TileOffsets:49,TileByteCounts:50,BadFaxLines:51,CleanFaxData:52,ConsecutiveBadFaxLines:53,InkSet:54,InkNames:55,NumberofInks:56,DotRange:57,TargetPrinter:58,ExtraSamples:59,SampleFormat:60,SMinSampleValue:61,SMaxSampleValue:62,TransferRange:63,ClipPath:64,JPEGProc:65,JPEGInterchangeFormat:66,JPEGInterchangeFormatLength:67,YCbCrCoefficients:68,YCbCrSubSampling:69,YCbCrPositioning:70,ReferenceBlackWhite:71,ApplicationNotes:72,Rating:73,CFARepeatPatternDim:74,CFAPattern:75,BatteryLevel:76,Copyright:77,ExposureTime:78,FNumber:79,"IPTC-NAA":80,ExifOffset:81,InterColorProfile:82,ExposureProgram:83,SpectralSensitivity:84,GPSOffset:85,ISOSpeed:86,OECF:87,SensitivityType:88,RecommendedExposureIndex:89,ExifVersion:90,DateTimeOriginal:91,DateTimeDigitized:92,OffsetTime:93,OffsetTimeOriginal:94,OffsetTimeDigitized:95,ComponentsConfiguration:96,CompressedBitsPerPixel:97,ShutterSpeedValue:98,ApertureValue:99,BrightnessValue:100,ExposureBiasValue:101,MaxApertureValue:102,SubjectDistance:103,MeteringMode:104,LightSource:105,Flash:106,FocalLength:107,SubjectArea:108,MakerNote:109,UserComment:110,SubSecTime:111,SubSecTimeOriginal:112,SubSecTimeDigitized:113,XPTitle:114,XPComment:115,XPAuthor:116,XPKeywords:117,XPSubject:118,FlashPixVersion:119,ColorSpace:120,ExifImageWidth:121,ExifImageLength:122,RelatedSoundFile:123,InteroperabilityOffset:124,FlashEnergy:125,SpatialFrequencyResponse:126,FocalPlaneXResolution:127,FocalPlaneYResolution:128,FocalPlaneResolutionUnit:129,SubjectLocation:130,ExposureIndex:131,SensingMethod:132,FileSource:133,SceneType:134,CVAPattern:135,CustomRendered:136,ExposureMode:137,WhiteBalance:138,DigitalZoomRatio:139,FocalLengthIn35mmFilm:140,SceneCaptureType:141,GainControl:142,Contrast:143,Saturation:144,Sharpness:145,DeviceSettingDescription:146,SubjectDistanceRange:147,ImageUniqueID:148,CameraOwnerName:149,BodySerialNumber:150,LensSpecification:151,LensMake:152,LensModel:153,LensSerialNumber:154,Gamma:155,PrintIM:156,Padding:157,OffsetSchema:158,OwnerName:159,SerialNumber:160,InteropIndex:161,InteropVersion:162,RelatedImageFileFormat:163,RelatedImageWidth:164,RelatedImageLength:165,GPSVersionID:166,GPSLatitudeRef:167,GPSLatitude:168,GPSLongitudeRef:169,GPSLongitude:170,GPSAltitudeRef:171,GPSAltitude:172,GPSTimeStamp:173,GPSSatellites:174,GPSStatus:175,GPSMeasureMode:176,GPSDOP:177,GPSSpeedRef:178,GPSSpeed:179,GPSTrackRef:180,GPSTrack:181,GPSImgDirectionRef:182,GPSImgDirection:183,GPSMapDatum:184,GPSDestLatitudeRef:185,GPSDestLatitude:186,GPSDestLongitudeRef:187,GPSDestLongitude:188,GPSDestBearingRef:189,GPSDestBearing:190,GPSDestDistanceRef:191,GPSDestDistance:192,GPSProcessingMethod:193,GPSAreaInformation:194,GPSDate:195,GPSDifferential:196}
C.a06=new B.J(C.bnt,[11,254,255,256,257,257,258,259,262,263,264,265,266,269,270,271,272,273,274,277,278,279,280,281,282,283,284,285,286,287,290,291,292,293,296,297,300,301,305,306,315,316,317,318,319,320,321,322,323,324,325,326,327,328,332,333,334,336,337,338,339,340,341,342,343,512,513,514,529,530,531,532,700,18246,33421,33422,33423,33432,33434,33437,33723,34665,34675,34850,34852,34853,34855,34856,34864,34866,36864,36867,36868,36880,36881,36882,37121,37122,37377,37378,37379,37380,37381,37382,37383,37384,37385,37386,37396,37500,37510,37520,37521,37522,40091,40092,40093,40094,40095,40960,40961,40962,40963,40964,40965,41483,41484,41486,41487,41488,41492,41493,41495,41728,41729,41730,41985,41986,41987,41988,41989,41990,41991,41992,41993,41994,41995,41996,42016,42032,42033,42034,42035,42036,42037,42240,50341,59932,59933,65e3,65001,1,2,4096,4097,4098,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],B.A("J<m,l>"))
C.Ew=new B.c([34665,"exif",40965,"interop",34853,"gps"],B.A("c<l,m>"))
C.a3K=new B.c([C.fT,1,C.hJ,3,C.hK,15,C.ac,255,C.cC,65535,C.k6,4294967295,C.lL,127,C.lM,32767,C.lN,2147483647,C.iv,1,C.k5,1,C.lK,1],B.A("c<nZ,l>"))
C.bt7=new A.ayd(0,"none")
C.bt8=new A.ayd(4,"paeth")
C.pe=new A.DI(0,"invalid")
C.a8S=new A.DI(1,"pbm")
C.a8T=new A.DI(2,"pgm2")
C.Fu=new A.DI(3,"pgm5")
C.a8U=new A.DI(4,"ppm3")
C.Fv=new A.DI(5,"ppm6")
C.bvm=new A.bA5(0,"origin")
C.H6=new A.tp(0,"bilevel")
C.bFQ=new A.tp(1,"gray4bit")
C.bFR=new A.tp(2,"gray")
C.bFS=new A.tp(3,"grayAlpha")
C.bFT=new A.tp(4,"palette")
C.abY=new A.tp(5,"rgb")
C.bFU=new A.tp(6,"rgba")
C.bFV=new A.tp(7,"yCbCrSub")
C.pK=new A.tp(8,"generic")
C.bFW=new A.tp(9,"invalid")
C.pT=new A.Ui(0,"undefined")
C.HE=new A.Ui(1,"lossy")
C.zm=new A.Ui(2,"lossless")
C.bJJ=new A.Ui(3,"animated")
C.zu=new A.UL(0,"none")
C.bM8=new A.UL(1,"partial")
C.bM9=new A.UL(2,"full")
C.pV=new A.UL(3,"finish")})();(function staticFields(){$.wb=B.bI("_config")
$.cDR=!0
$.cAC=null
$.cN6=!1
$.cN7=B.a([A.cC3(),A.drJ(),A.drO(),A.drP(),A.drQ(),A.drR(),A.drS(),A.drT(),A.drU(),A.drV(),A.drK(),A.drL(),A.drM(),A.drN(),A.cC3(),A.cC3()],B.A("r<l(r4,l,l)>"))
$.i0=null
$.cGF=B.bI("_eLut")})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazy
x($,"dyH","cVC",()=>A.cAg(C.ut,C.NE,257,286,15))
x($,"dyG","cVB",()=>A.cAg(C.Qf,C.ue,0,30,15))
x($,"dyF","cVA",()=>A.cAg(null,C.ayq,0,19,7))
x($,"dta","aXz",()=>$.hE().gn5(0))
x($,"dBV","cv5",()=>{var v=null,u="ISOSpeed"
return B.z([11,A.aN("ProcessingSoftware",C.bJ,v),254,A.aN("SubfileType",C.d5,1),255,A.aN("OldSubfileType",C.d5,1),256,A.aN("ImageWidth",C.d5,1),257,A.aN("ImageLength",C.d5,1),258,A.aN("BitsPerSample",C.br,1),259,A.aN("Compression",C.br,1),262,A.aN("PhotometricInterpretation",C.br,1),263,A.aN("Thresholding",C.br,1),264,A.aN("CellWidth",C.br,1),265,A.aN("CellLength",C.br,1),266,A.aN("FillOrder",C.br,1),269,A.aN("DocumentName",C.bJ,v),270,A.aN("ImageDescription",C.bJ,v),271,A.aN("Make",C.bJ,v),272,A.aN("Model",C.bJ,v),273,A.aN("StripOffsets",C.d5,v),274,A.aN("Orientation",C.br,1),277,A.aN("SamplesPerPixel",C.br,1),278,A.aN("RowsPerStrip",C.d5,1),279,A.aN("StripByteCounts",C.d5,1),280,A.aN("MinSampleValue",C.br,1),281,A.aN("MaxSampleValue",C.br,1),282,A.aN("XResolution",C.ev,1),283,A.aN("YResolution",C.ev,1),284,A.aN("PlanarConfiguration",C.br,1),285,A.aN("PageName",C.bJ,v),286,A.aN("XPosition",C.ev,1),287,A.aN("YPosition",C.ev,1),290,A.aN("GrayResponseUnit",C.br,1),291,A.aN("GrayResponseCurve",C.a0,v),292,A.aN("T4Options",C.a0,v),293,A.aN("T6Options",C.a0,v),296,A.aN("ResolutionUnit",C.br,1),297,A.aN("PageNumber",C.br,2),300,A.aN("ColorResponseUnit",C.a0,v),301,A.aN("TransferFunction",C.br,768),305,A.aN("Software",C.bJ,v),306,A.aN("DateTime",C.bJ,v),315,A.aN("Artist",C.bJ,v),316,A.aN("HostComputer",C.bJ,v),317,A.aN("Predictor",C.br,1),318,A.aN("WhitePoint",C.ev,2),319,A.aN("PrimaryChromaticities",C.ev,6),320,A.aN("ColorMap",C.br,v),321,A.aN("HalftoneHints",C.br,2),322,A.aN("TileWidth",C.d5,1),323,A.aN("TileLength",C.d5,1),324,A.aN("TileOffsets",C.d5,v),325,A.aN("TileByteCounts",C.a0,v),326,A.aN("BadFaxLines",C.a0,v),327,A.aN("CleanFaxData",C.a0,v),328,A.aN("ConsecutiveBadFaxLines",C.a0,v),332,A.aN("InkSet",C.a0,v),333,A.aN("InkNames",C.a0,v),334,A.aN("NumberofInks",C.a0,v),336,A.aN("DotRange",C.a0,v),337,A.aN("TargetPrinter",C.bJ,v),338,A.aN("ExtraSamples",C.a0,v),339,A.aN("SampleFormat",C.br,1),340,A.aN("SMinSampleValue",C.a0,v),341,A.aN("SMaxSampleValue",C.a0,v),342,A.aN("TransferRange",C.a0,v),343,A.aN("ClipPath",C.a0,v),512,A.aN("JPEGProc",C.a0,v),513,A.aN("JPEGInterchangeFormat",C.a0,v),514,A.aN("JPEGInterchangeFormatLength",C.a0,v),529,A.aN("YCbCrCoefficients",C.ev,3),530,A.aN("YCbCrSubSampling",C.br,1),531,A.aN("YCbCrPositioning",C.br,1),532,A.aN("ReferenceBlackWhite",C.ev,6),700,A.aN("ApplicationNotes",C.br,1),18246,A.aN("Rating",C.br,1),33421,A.aN("CFARepeatPatternDim",C.a0,v),33422,A.aN("CFAPattern",C.a0,v),33423,A.aN("BatteryLevel",C.a0,v),33432,A.aN("Copyright",C.bJ,v),33434,A.aN("ExposureTime",C.ev,1),33437,A.aN("FNumber",C.ev,v),33723,A.aN("IPTC-NAA",C.d5,1),34665,A.aN("ExifOffset",C.a0,v),34675,A.aN("InterColorProfile",C.a0,v),34850,A.aN("ExposureProgram",C.br,1),34852,A.aN("SpectralSensitivity",C.bJ,v),34853,A.aN("GPSOffset",C.a0,v),34855,A.aN(u,C.d5,1),34856,A.aN("OECF",C.a0,v),34864,A.aN("SensitivityType",C.br,1),34866,A.aN("RecommendedExposureIndex",C.d5,1),34867,A.aN(u,C.d5,1),36864,A.aN("ExifVersion",C.iy,v),36867,A.aN("DateTimeOriginal",C.bJ,v),36868,A.aN("DateTimeDigitized",C.bJ,v),36880,A.aN("OffsetTime",C.bJ,v),36881,A.aN("OffsetTimeOriginal",C.bJ,v),36882,A.aN("OffsetTimeDigitized",C.bJ,v),37121,A.aN("ComponentsConfiguration",C.iy,v),37122,A.aN("CompressedBitsPerPixel",C.a0,v),37377,A.aN("ShutterSpeedValue",C.a0,v),37378,A.aN("ApertureValue",C.a0,v),37379,A.aN("BrightnessValue",C.a0,v),37380,A.aN("ExposureBiasValue",C.a0,v),37381,A.aN("MaxApertureValue",C.a0,v),37382,A.aN("SubjectDistance",C.a0,v),37383,A.aN("MeteringMode",C.a0,v),37384,A.aN("LightSource",C.a0,v),37385,A.aN("Flash",C.a0,v),37386,A.aN("FocalLength",C.a0,v),37396,A.aN("SubjectArea",C.a0,v),37500,A.aN("MakerNote",C.iy,v),37510,A.aN("UserComment",C.iy,v),37520,A.aN("SubSecTime",C.a0,v),37521,A.aN("SubSecTimeOriginal",C.a0,v),37522,A.aN("SubSecTimeDigitized",C.a0,v),40091,A.aN("XPTitle",C.a0,v),40092,A.aN("XPComment",C.a0,v),40093,A.aN("XPAuthor",C.a0,v),40094,A.aN("XPKeywords",C.a0,v),40095,A.aN("XPSubject",C.a0,v),40960,A.aN("FlashPixVersion",C.a0,v),40961,A.aN("ColorSpace",C.br,1),40962,A.aN("ExifImageWidth",C.br,1),40963,A.aN("ExifImageLength",C.br,1),40964,A.aN("RelatedSoundFile",C.a0,v),40965,A.aN("InteroperabilityOffset",C.a0,v),41483,A.aN("FlashEnergy",C.a0,v),41484,A.aN("SpatialFrequencyResponse",C.a0,v),41486,A.aN("FocalPlaneXResolution",C.a0,v),41487,A.aN("FocalPlaneYResolution",C.a0,v),41488,A.aN("FocalPlaneResolutionUnit",C.a0,v),41492,A.aN("SubjectLocation",C.a0,v),41493,A.aN("ExposureIndex",C.a0,v),41495,A.aN("SensingMethod",C.a0,v),41728,A.aN("FileSource",C.a0,v),41729,A.aN("SceneType",C.a0,v),41730,A.aN("CVAPattern",C.a0,v),41985,A.aN("CustomRendered",C.a0,v),41986,A.aN("ExposureMode",C.a0,v),41987,A.aN("WhiteBalance",C.a0,v),41988,A.aN("DigitalZoomRatio",C.a0,v),41989,A.aN("FocalLengthIn35mmFilm",C.a0,v),41990,A.aN("SceneCaptureType",C.a0,v),41991,A.aN("GainControl",C.a0,v),41992,A.aN("Contrast",C.a0,v),41993,A.aN("Saturation",C.a0,v),41994,A.aN("Sharpness",C.a0,v),41995,A.aN("DeviceSettingDescription",C.a0,v),41996,A.aN("SubjectDistanceRange",C.a0,v),42016,A.aN("ImageUniqueID",C.a0,v),42032,A.aN("CameraOwnerName",C.bJ,v),42033,A.aN("BodySerialNumber",C.bJ,v),42034,A.aN("LensSpecification",C.a0,v),42035,A.aN("LensMake",C.bJ,v),42036,A.aN("LensModel",C.bJ,v),42037,A.aN("LensSerialNumber",C.bJ,v),42240,A.aN("Gamma",C.ev,1),50341,A.aN("PrintIM",C.a0,v),59932,A.aN("Padding",C.a0,v),59933,A.aN("OffsetSchema",C.a0,v),65e3,A.aN("OwnerName",C.bJ,v),65001,A.aN("SerialNumber",C.bJ,v)],y.p,B.A("apZ"))})
w($,"dxN","aXM",()=>B.Dg(511))
w($,"dxO","cuU",()=>B.Dg(511))
w($,"dxQ","cuV",()=>A.cJb(2041))
w($,"dxR","aXN",()=>A.cJb(225))
w($,"dxP","q_",()=>B.Dg(766))
x($,"dvQ","cTX",()=>A.cHK(0,0,0))
x($,"dza","nF",()=>B.Dg(1))
x($,"dzb","oJ",()=>A.d4q(D.C.gak($.nF()),0,null))
x($,"dz3","nE",()=>E.d66(1))
x($,"dz4","oI",()=>J.cY_(D.ec.gak($.nE()),0,null))
x($,"dz5","hF",()=>B.d69(1))
x($,"dz7","kX",()=>J.aY0(D.bz.gak($.hF()),0,null))
x($,"dz6","Gi",()=>A.d2s(D.bz.gak($.hF())))
x($,"dz1","aXP",()=>B.cxP(1))
x($,"dz2","cuX",()=>A.cML(D.cI.gak($.aXP()),0))
x($,"dz_","cCW",()=>B.btp(1))
x($,"dz0","cVT",()=>A.cML(D.fB.gak($.cCW()),0))
x($,"dz8","cCX",()=>A.dbR(1))
x($,"dz9","cVU",()=>{var v=$.cCX()
return A.d2t(v.gak(v))})})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_210",e:"endPart",h:b})})($__dart_deferred_initializers__,"WkqI5JM4lsj9J9W/Vk6gr84+NMA=");