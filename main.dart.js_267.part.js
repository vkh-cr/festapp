((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_267",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,I,P,Q,R,K,S,B={
b9_(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$b9_=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.Nu().dF("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b9_)
case 3:r=g
s=J.a2(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=G.cNO(y.P.a(s.h(r,"ticket")))
if(s.a0(r,"order")&&s.h(r,"order")!=null)u.Q=G.cLc(s.h(r,"order"))
if(s.a0(r,"products")&&s.h(r,"products")!=null){t=J.bX(y.j.a(s.h(r,"products")),new B.b90(),y.K)
u.z=A.G(t,!0,t.$ti.i("a8.E"))}if(s.a0(r,"spot")&&s.h(r,"spot")!=null)u.y=G.cxt(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b9_,w)},
b94(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$b94=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.Nu().dF("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b94)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b94,w)},
b90:function b90(){},
daf(d,e){return new B.En(e,d)},
SZ:function SZ(d,e){this.a=d
this.b=e},
En:function En(d,e){this.c=d
this.a=e},
af7:function af7(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cgR:function cgR(){},
cgS:function cgS(d){this.a=d},
cgT:function cgT(d){this.a=d},
cgU:function cgU(){},
cgV:function cgV(){},
cgW:function cgW(){},
cgX:function cgX(){},
cgQ:function cgQ(d){this.a=d}},D,E,F,T,U,V,W,G,X,Y,Z,A_,L,H,A0,A1
J=c[1]
A=c[0]
C=c[2]
M=c[204]
N=c[233]
O=c[211]
I=c[207]
P=c[97]
Q=c[294]
R=c[103]
K=c[236]
S=c[295]
B=a.updateHolder(c[22],B)
D=c[293]
E=c[36]
F=c[231]
T=c[66]
U=c[292]
V=c[296]
W=c[72]
G=c[82]
X=c[235]
Y=c[192]
Z=c[216]
A_=c[230]
L=c[214]
H=c[196]
A0=c[201]
A1=c[234]
B.SZ.prototype={
J(){return"ScanState."+this.b}}
B.En.prototype={
M(){return new B.af7(D.a9T,new Y.cs(A_.ax,$.a9()),E.cKO(F.L1,A.a([C.nq],y.k)))}}
B.af7.prototype={
l(){this.x.l()
var x=this.r
x.P$=$.a9()
x.O$=0
this.ag()},
aV(){var x=0,w=A.k(y.H),v=this,u
var $async$aV=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.c6()
if(v.a.c==null&&v.c.hk(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hk(y.u).f.f[0].a.w9(0,"scanCode")}$.y2().aig("https://unpkg.com/@zxing/library@0.21.3")
A.dz(v.a.c)
v.Oq()
return A.i(null,w)}})
return A.j($async$aV,w)},
Oq(){var x=0,w=A.k(y.H),v=this,u,t
var $async$Oq=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hz(A.ct(0,0,0,500,0),null,y.z),$async$Oq)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(T.Po(u,A.u("Enter Scan Code",null),null,A.u("Scan Code",null)),$async$Oq)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$Oq,w)},
aaK(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bT(new A.a5(F.Lp,H.bl(D.bFq,q),q),q,q)
x=r.f
if(x===D.FQ)w=O.ka
else if(x===D.a9R)w=F.Mq
else{if(x!==D.FR)return C.a9
w=U.rG}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.W(u).i("P<1,a5>")
v.push(A.aj(A.G(new A.P(u,new B.cgR(),t),!0,t.i("a8.E")),C.J,C.f,C.h,q,C.l))}v.push(L.ak)
u=r.e.Q.a1L()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.S(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.ac2,C.b2,q,q,q,q))
x=A.a([A.bT(A.aj(v,C.i,C.f,C.h,q,C.l),q,q),L.ak,A.br(w,C.u,q,30),Z.a2],x)
if(r.f===D.FQ)x.push(A.dB(!1,H.bl(D.bF6,q),q,q,q,q,q,q,r.gb1_(),q,q))
return new A.a5(I.aW,A.aj(x,C.i,C.f,C.h,q,C.l),q)},
B(d){var x=this,w=null,v=x.e==null?R.bKB(d):x.a2F(x.f),u=A.c1(w,w,w,w,w,w,A.br(N.iA,C.ci,w,w),w,w,w,new B.cgS(d),w,w,w,w,w),t=y.p
return M.f6(w,v,A.jF(!0,new A.cr(C.ag,w,C.ae,C.y,A.a([A.aj(A.a([new A.a5(I.aW,A.av(A.a([u,A.bE(A.S("",w,w,w,w,w,w,w,A.aA(w,w,C.ci,w,w,w,w,w,w,w,w,20,w,w,C.a5,w,w,!0,w,w,w,w,w,w,w,w),C.b2,w,w,w,w),1,w)],t),C.i,C.f,C.h,0,w),w),x.aaK(),A.bE(E.cKN(x.x,A1.J2,new B.cgT(x)),1,w)],t),C.i,C.f,C.h,w,C.l)],t),w),C.Y,!0),w,w,w,w,w)},
wh(d){return this.aPp(d)},
aPp(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$wh=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.b9_(d,t),$async$wh)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.FQ
E.qo()
u.A(new B.cgU())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a9R
E.qo()
E.qo()
u.A(new B.cgV())
x=1
break}else if(s&&t.e==="used"){u.f=D.FR
E.qo()
E.qo()
u.A(new B.cgW())
x=1
break}}u.f=D.a9T
u.A(new B.cgX())
case 1:return A.i(v,w)}})
return A.j($async$wh,w)},
U7(){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$U7=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.b94(s,t),$async$U7)
case 3:if(e){u.A(new B.cgQ(u))
E.qo()}else{E.qo()
E.qo()
u.c.ac(y.q).f.aj3(P.cN0(null,null,null,null,null,C.y,null,H.bl(A.S("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,Q.Ld,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$U7,w)},
a2F(d){var x
switch(d.a){case 0:return X.a4g
case 2:return F.a4h
case 1:return K.mL
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.r?$.ik():$.q5()}return K.mL}}
var z=a.updateTypes(["V<~>()"])
B.b90.prototype={
$1(d){return A.a4X(d)},
$S:113}
B.cgR.prototype={
$1(d){var x=null
return new A.a5(S.C0,A.S(d.lq(),x,x,x,x,x,x,x,V.H4,x,x,x,x,x),x)},
$S:279}
B.cgS.prototype={
$0(){A0.fk(this.a,!1).f.em(null)},
$S:0}
B.cgT.prototype={
$1(d){return this.aKS(d)},
aKS(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=W.czg(d.a)
if(s==null){x=1
break}t=s.z
A.hu().$1(t)
x=3
return A.d(u.a.wh(J.ao(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:327}
B.cgU.prototype={
$0(){},
$S:0}
B.cgV.prototype={
$0(){},
$S:0}
B.cgW.prototype={
$0(){},
$S:0}
B.cgX.prototype={
$0(){},
$S:0}
B.cgQ.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.FR},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.af7.prototype,"gb1_","U7",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bM,[B.b90,B.cgR,B.cgT])
w(B.SZ,A.e_)
w(B.En,A.I)
w(B.af7,A.M)
x(A.cp,[B.cgS,B.cgU,B.cgV,B.cgW,B.cgX,B.cgQ])})()
A.bo(b.typeUniverse,JSON.parse('{"En":{"I":[],"e":[]},"af7":{"M":["En"]}}'))
var y=(function rtii(){var x=A.B
return{k:x("r<jy>"),p:x("r<e>"),j:x("C<@>"),P:x("A<m,@>"),K:x("eP"),u:x("qY"),N:x("m"),q:x("G2"),y:x("w"),z:x("@"),C:x("hj?"),H:x("~")}})();(function constants(){D.FQ=new B.SZ(0,"valid")
D.a9R=new B.SZ(1,"invalid")
D.FR=new B.SZ(2,"used")
D.a9T=new B.SZ(3,"nothing")
D.bF6=new A.cl("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bFq=new A.cl("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_267",e:"endPart",h:b})})($__dart_deferred_initializers__,"zviX321r+FOzY6OIoU+ZF8FPYY0=");