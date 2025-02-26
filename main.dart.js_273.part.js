((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_273",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,I,O,P,Q,R,K,B={
b3X(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$b3X=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.c($.LC().e4("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b3X)
case 3:r=g
s=J.a2(r)
if(!J.m(s.i(r,"code"),200)){v=null
x=1
break}u=G.cA4(y.P.a(s.i(r,"ticket")))
if(s.a3(r,"order")&&s.i(r,"order")!=null)u.Q=G.cxh(s.i(r,"order"))
if(s.a3(r,"products")&&s.i(r,"products")!=null){t=J.ch(y.j.a(s.i(r,"products")),new B.b3Y(),y.K)
u.z=A.J(t,!0,t.$ti.h("ad.E"))}if(s.a3(r,"spot")&&s.i(r,"spot")!=null)u.y=G.ckt(s.i(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b3X,w)},
b41(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$b41=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.c($.LC().e4("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b41)
case 3:v=t.m(s.u(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b41,w)},
b3Y:function b3Y(){},
cW5(d,e){return new B.Ds(e,d)},
R3:function R3(d,e){this.a=d
this.b=e},
Ds:function Ds(d,e){this.c=d
this.a=e},
acz:function acz(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
c5G:function c5G(){},
c5H:function c5H(d){this.a=d},
c5I:function c5I(d){this.a=d},
c5J:function c5J(){},
c5K:function c5K(){},
c5L:function c5L(){},
c5M:function c5M(){},
c5F:function c5F(d){this.a=d}},D,E,F,S,T,U,V,G,W,X,Y,Z,L,H,A_,A0
J=c[1]
A=c[0]
C=c[2]
M=c[232]
N=c[201]
I=c[210]
O=c[231]
P=c[95]
Q=c[289]
R=c[100]
K=c[234]
B=a.updateHolder(c[22],B)
D=c[288]
E=c[36]
F=c[229]
S=c[65]
T=c[290]
U=c[287]
V=c[291]
G=c[80]
W=c[233]
X=c[187]
Y=c[211]
Z=c[228]
L=c[209]
H=c[193]
A_=c[198]
A0=c[205]
B.R3.prototype={
J(){return"ScanState."+this.b}}
B.Ds.prototype={
M(){return new B.acz(D.a2J,new X.dz(Z.aS,$.ae()),E.cwT(F.Hr,A.a([C.lU],y.k)))}}
B.acz.prototype={
l(){this.x.l()
var x=this.r
x.V$=$.ae()
x.W$=0
this.ai()},
aW(){var x=0,w=A.k(y.H),v=this,u
var $async$aW=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.ck()
if(v.a.c==null&&v.c.hy(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hy(y.u).f.f[0].a.vJ(0,"scanCode")}$.Ag().afv("https://unpkg.com/@zxing/library@0.21.3")
A.ep(v.a.c)
v.No()
return A.i(null,w)}})
return A.j($async$aW,w)},
No(){var x=0,w=A.k(y.H),v=this,u,t
var $async$No=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(A.ib(A.cr(0,0,0,500,0),null,y.z),$async$No)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.c(S.Ns(u,A.v("Enter Scan Code",null),null,A.v("Scan Code",null)),$async$No)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$No,w)},
a8s(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bY(new A.a4(F.HV,H.bb(D.b4y,q),q),q,q)
x=r.f
if(x===D.Ce)w=A0.j3
else if(x===D.a2H)w=F.IT
else{if(x!==D.Cf)return C.aa
w=U.ps}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.Y(u).h("R<1,a4>")
v.push(A.aw(A.J(new A.R(u,new B.c5G(),t),!0,t.h("ad.E")),C.T,C.f,C.h,q,C.p))}v.push(L.aH)
u=r.e.Q.a01()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.X(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.a4A,C.bj,q,q,q,q))
x=A.a([A.bY(A.aw(v,C.i,C.f,C.h,q,C.p),q,q),L.aH,A.bw(w,C.o,q,30),Y.ac],x)
if(r.f===D.Ce)x.push(A.ds(!1,H.bb(D.b4b,q),q,q,q,q,q,q,r.gaXP(),q,q))
return new A.a4(I.aW,A.aw(x,C.i,C.f,C.h,q,C.p),q)},
A(d){var x=this,w=null,v=x.e==null?R.bEl(d):x.a0V(x.f),u=A.c5(w,w,w,w,w,w,A.bw(O.hJ,C.cr,w,w),w,w,w,new B.c5H(d),w,w,w,w,w),t=y.p
return N.eW(w,v,A.k3(!0,new A.co(C.ae,w,C.ab,C.z,A.a([A.aw(A.a([new A.a4(I.aW,A.aA(A.a([u,A.bZ(A.X("",w,w,w,w,w,w,w,A.aK(w,w,C.cr,w,w,w,w,w,w,w,w,20,w,w,C.a4,w,w,!0,w,w,w,w,w,w,w,w),C.bj,w,w,w,w),1,w)],t),C.i,C.f,C.h,w),w),x.a8s(),A.bZ(E.cwS(x.x,M.Fr,new B.c5I(x)),1,w)],t),C.i,C.f,C.h,w,C.p)],t),w),!0,C.V,!0,!0),w,w,w,w,w)},
vR(d){return this.aLm(d)},
aLm(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$vR=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.c(B.b3X(d,t),$async$vR)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.Ce
E.pR()
u.B(new B.c5J())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a2H
E.pR()
E.pR()
u.B(new B.c5K())
x=1
break}else if(s&&t.e==="used"){u.f=D.Cf
E.pR()
E.pR()
u.B(new B.c5L())
x=1
break}}u.f=D.a2J
u.B(new B.c5M())
case 1:return A.i(v,w)}})
return A.j($async$vR,w)},
SZ(){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$SZ=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.c(B.b41(s,t),$async$SZ)
case 3:if(e){u.B(new B.c5F(u))
E.pR()}else{E.pR()
E.pR()
u.c.ad(y.q).f.agg(P.czj(null,null,null,null,null,C.z,null,H.bb(A.X("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,Q.HI,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$SZ,w)},
a0V(d){var x
switch(d.a){case 0:return W.XU
case 2:return F.XV
case 1:return K.lb
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.u?$.j2():$.v7()}return K.lb}}
var z=a.updateTypes(["S<~>()"])
B.b3Y.prototype={
$1(d){return A.cn0(d)},
$S:181}
B.c5G.prototype={
$1(d){var x=null
return new A.a4(T.HW,A.X(d.m_(),x,x,x,x,x,x,x,V.Dy,x,x,x,x,x),x)},
$S:328}
B.c5H.prototype={
$0(){A_.fC(this.a,!1).f.tZ(null)},
$S:0}
B.c5I.prototype={
$1(d){return this.aH_(d)},
aH_(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=E.cw2(d.a)
if(s==null){x=1
break}t=s.z
A.h0().$1(t)
x=3
return A.c(u.a.vR(J.au(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:346}
B.c5J.prototype={
$0(){},
$S:0}
B.c5K.prototype={
$0(){},
$S:0}
B.c5L.prototype={
$0(){},
$S:0}
B.c5M.prototype={
$0(){},
$S:0}
B.c5F.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.Cf},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.acz.prototype,"gaXP","SZ",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bF,[B.b3Y,B.c5G,B.c5I])
w(B.R3,A.e2)
w(B.Ds,A.F)
w(B.acz,A.K)
x(A.ck,[B.c5H,B.c5J,B.c5K,B.c5L,B.c5M,B.c5F])})()
A.bk(b.typeUniverse,JSON.parse('{"Ds":{"F":[],"d":[]},"acz":{"K":["Ds"]}}'))
var y=(function rtii(){var x=A.y
return{k:x("q<j3>"),p:x("q<d>"),j:x("B<@>"),P:x("ac<e,@>"),K:x("hi"),u:x("qj"),N:x("e"),q:x("EO"),y:x("x"),z:x("@"),C:x("hb?"),H:x("~")}})();(function constants(){D.Ce=new B.R3(0,"valid")
D.a2H=new B.R3(1,"invalid")
D.Cf=new B.R3(2,"used")
D.a2J=new B.R3(3,"nothing")
D.b4b=new A.c_("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4y=new A.c_("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_273",e:"endPart",h:b})})($__dart_deferred_initializers__,"w/kEqoPMc4qw2alAITzK3MeNS3A=");