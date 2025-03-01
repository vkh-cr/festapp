((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_269",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,I,O,P,Q,R,S,K,B={
b43(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$b43=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.c($.LI().e4("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b43)
case 3:r=g
s=J.a2(r)
if(!J.m(s.i(r,"code"),200)){v=null
x=1
break}u=G.cAx(y.P.a(s.i(r,"ticket")))
if(s.a3(r,"order")&&s.i(r,"order")!=null)u.Q=G.cxL(s.i(r,"order"))
if(s.a3(r,"products")&&s.i(r,"products")!=null){t=J.c7(y.j.a(s.i(r,"products")),new B.b44(),y.K)
u.z=A.H(t,!0,t.$ti.h("a9.E"))}if(s.a3(r,"spot")&&s.i(r,"spot")!=null)u.y=G.ckU(s.i(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b43,w)},
b48(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$b48=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.c($.LI().e4("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b48)
case 3:v=t.m(s.v(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b48,w)},
b44:function b44(){},
cWA(d,e){return new B.Dw(e,d)},
Rb:function Rb(d,e){this.a=d
this.b=e},
Dw:function Dw(d,e){this.c=d
this.a=e},
acG:function acG(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
c5Y:function c5Y(){},
c5Z:function c5Z(d){this.a=d},
c6_:function c6_(d){this.a=d},
c60:function c60(){},
c61:function c61(){},
c62:function c62(){},
c63:function c63(){},
c5X:function c5X(d){this.a=d}},D,E,F,T,U,V,W,G,X,Y,Z,A_,L,H,A0
J=c[1]
A=c[0]
C=c[2]
M=c[204]
N=c[230]
I=c[209]
O=c[200]
P=c[229]
Q=c[92]
R=c[288]
S=c[97]
K=c[232]
B=a.updateHolder(c[22],B)
D=c[287]
E=c[36]
F=c[227]
T=c[62]
U=c[289]
V=c[286]
W=c[290]
G=c[78]
X=c[231]
Y=c[186]
Z=c[210]
A_=c[226]
L=c[208]
H=c[192]
A0=c[197]
B.Rb.prototype={
J(){return"ScanState."+this.b}}
B.Dw.prototype={
M(){return new B.acG(D.a2G,new Y.dd(A_.aU,$.ad()),E.cxm(F.Ht,A.a([C.lV],y.k)))}}
B.acG.prototype={
l(){this.x.l()
var x=this.r
x.V$=$.ad()
x.W$=0
this.ai()},
aW(){var x=0,w=A.k(y.H),v=this,u
var $async$aW=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.ck()
if(v.a.c==null&&v.c.hz(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hz(y.u).f.f[0].a.vJ(0,"scanCode")}$.Al().afw("https://unpkg.com/@zxing/library@0.21.3")
A.ep(v.a.c)
v.Np()
return A.i(null,w)}})
return A.j($async$aW,w)},
Np(){var x=0,w=A.k(y.H),v=this,u,t
var $async$Np=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(A.ie(A.cs(0,0,0,500,0),null,y.z),$async$Np)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.c(T.Ny(u,A.u("Enter Scan Code",null),null,A.u("Scan Code",null)),$async$Np)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$Np,w)},
a8t(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bZ(new A.a4(F.HW,H.bg(D.b4N,q),q),q,q)
x=r.f
if(x===D.Ci)w=M.j8
else if(x===D.a2E)w=F.IT
else{if(x!==D.Cj)return C.ab
w=V.ps}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.Y(u).h("P<1,a4>")
v.push(A.at(A.H(new A.P(u,new B.c5Y(),t),!0,t.h("a9.E")),C.Q,C.f,C.h,q,C.n))}v.push(L.aC)
u=r.e.Q.a02()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.X(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.a4x,C.bm,q,q,q,q))
x=A.a([A.bZ(A.at(v,C.i,C.f,C.h,q,C.n),q,q),L.aC,A.bz(w,C.p,q,30),Z.a8],x)
if(r.f===D.Ci)x.push(A.dt(!1,H.bg(D.b4q,q),q,q,q,q,q,q,r.gaXI(),q,q))
return new A.a4(I.b2,A.at(x,C.i,C.f,C.h,q,C.n),q)},
A(d){var x=this,w=null,v=x.e==null?S.bEN(d):x.a0W(x.f),u=A.c9(w,w,w,w,w,w,A.bz(P.hM,C.cs,w,w),w,w,w,new B.c5Z(d),w,w,w,w,w),t=y.p
return O.eY(w,v,A.jH(!0,new A.cq(C.af,w,C.ad,C.z,A.a([A.at(A.a([new A.a4(I.b2,A.ay(A.a([u,A.bW(A.X("",w,w,w,w,w,w,w,A.aG(w,w,C.cs,w,w,w,w,w,w,w,w,20,w,w,C.a3,w,w,!0,w,w,w,w,w,w,w,w),C.bm,w,w,w,w),1,w)],t),C.i,C.f,C.h,w),w),x.a8t(),A.bW(E.cxl(x.x,N.Ft,new B.c6_(x)),1,w)],t),C.i,C.f,C.h,w,C.n)],t),w),!0,C.U,!0,!0),w,w,w,w,w)},
vR(d){return this.aLn(d)},
aLn(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$vR=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.c(B.b43(d,t),$async$vR)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.Ci
E.pR()
u.B(new B.c60())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a2E
E.pR()
E.pR()
u.B(new B.c61())
x=1
break}else if(s&&t.e==="used"){u.f=D.Cj
E.pR()
E.pR()
u.B(new B.c62())
x=1
break}}u.f=D.a2G
u.B(new B.c63())
case 1:return A.i(v,w)}})
return A.j($async$vR,w)},
T_(){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$T_=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.c(B.b48(s,t),$async$T_)
case 3:if(e){u.B(new B.c5X(u))
E.pR()}else{E.pR()
E.pR()
u.c.ad(y.q).f.agh(Q.czN(null,null,null,null,null,C.z,null,H.bg(A.X("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,R.HK,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$T_,w)},
a0W(d){var x
switch(d.a){case 0:return X.XT
case 2:return F.XU
case 1:return K.le
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.v?$.iQ():$.qG()}return K.le}}
var z=a.updateTypes(["S<~>()"])
B.b44.prototype={
$1(d){return A.cnu(d)},
$S:163}
B.c5Y.prototype={
$1(d){var x=null
return new A.a4(U.HX,A.X(d.m0(),x,x,x,x,x,x,x,W.DA,x,x,x,x,x),x)},
$S:350}
B.c5Z.prototype={
$0(){A0.ft(this.a,!1).f.tZ(null)},
$S:0}
B.c6_.prototype={
$1(d){return this.aH0(d)},
aH0(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=E.cww(d.a)
if(s==null){x=1
break}t=s.z
A.h1().$1(t)
x=3
return A.c(u.a.vR(J.av(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:210}
B.c60.prototype={
$0(){},
$S:0}
B.c61.prototype={
$0(){},
$S:0}
B.c62.prototype={
$0(){},
$S:0}
B.c63.prototype={
$0(){},
$S:0}
B.c5X.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.Cj},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.acG.prototype,"gaXI","T_",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bC,[B.b44,B.c5Y,B.c6_])
w(B.Rb,A.e4)
w(B.Dw,A.G)
w(B.acG,A.K)
x(A.ci,[B.c5Z,B.c60,B.c61,B.c62,B.c63,B.c5X])})()
A.bi(b.typeUniverse,JSON.parse('{"Dw":{"G":[],"d":[]},"acG":{"K":["Dw"]}}'))
var y=(function rtii(){var x=A.y
return{k:x("q<j7>"),p:x("q<d>"),j:x("A<@>"),P:x("ae<e,@>"),K:x("hk"),u:x("qj"),N:x("e"),q:x("ES"),y:x("x"),z:x("@"),C:x("hd?"),H:x("~")}})();(function constants(){D.Ci=new B.Rb(0,"valid")
D.a2E=new B.Rb(1,"invalid")
D.Cj=new B.Rb(2,"used")
D.a2G=new B.Rb(3,"nothing")
D.b4q=new A.c_("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4N=new A.c_("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_269",e:"endPart",h:b})})($__dart_deferred_initializers__,"0w71Uz1eprZSXrysWH6SRuaXHoI=");