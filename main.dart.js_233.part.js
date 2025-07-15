((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_233",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,G,M,N,I,O,B={
bfa(d,e){return B.dqp(d,e)},
dqp(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$bfa=A.f(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.Pd().c7("scan_ticket",A.w(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bfa)
case 3:r=g
s=J.a_(r)
if(!J.q(s.h(r,"code"),200)){v=null
x=1
break}u=H.cWn(y.P.a(s.h(r,"ticket")))
if(s.a3(r,"order")&&s.h(r,"order")!=null)u.Q=H.a6F(s.h(r,"order"))
if(s.a3(r,"products")&&s.h(r,"products")!=null){t=J.aU(y.j.a(s.h(r,"products")),new B.bfb(),y.K)
t=A.A(t,t.$ti.i("a0.E"))
u.z=t}if(s.a3(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cSH(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bfa,w)},
bff(d,e){return B.dqu(d,e)},
dqu(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$bff=A.f(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.Pd().c7("update_ticket_to_used",A.w(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bff)
case 3:v=t.q(s.u(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bff,w)},
bfb:function bfb(){},
dzQ(d,e){return new B.G_(e,d)},
UQ:function UQ(d,e){this.a=d
this.b=e},
G_:function G_(d,e){this.c=d
this.a=e},
aik:function aik(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
czF:function czF(){},
czG:function czG(d){this.a=d},
czH:function czH(d){this.a=d},
czI:function czI(){},
czJ:function czJ(){},
czK:function czK(){},
czL:function czL(){},
czE:function czE(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W,K
J=c[1]
A=c[0]
C=c[2]
L=c[162]
G=c[161]
M=c[120]
N=c[234]
I=c[181]
O=c[235]
B=a.updateHolder(c[22],B)
D=c[233]
E=c[37]
F=c[177]
P=c[62]
Q=c[178]
R=c[231]
S=c[236]
T=c[97]
H=c[78]
U=c[180]
V=c[172]
W=c[163]
K=c[165]
B.UQ.prototype={
I(){return"ScanState."+this.b}}
B.G_.prototype={
L(){return new B.aik(D.acz,new A.bU(C.am,$.a9()),E.d5m(F.N9,A.a([C.oo],y.k)))}}
B.aik.prototype={
l(){this.x.l()
var x=this.r
x.V$=$.a9()
x.U$=0
this.ag()},
aY(){var x=0,w=A.l(y.H),v=this,u
var $async$aY=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.c2()
if(v.a.c==null&&J.fK(v.c.ii(y.u).f.r)){u=v.a
u.toString
u.c=J.u(v.c.ii(y.u).f.r,0).a.yE(0,"scanCode")}$.zc().akO("https://unpkg.com/@zxing/library@0.21.3")
A.cI(v.a.c)
v.PC()
return A.j(null,w)}})
return A.k($async$aY,w)},
PC(){var x=0,w=A.l(y.H),v=this,u,t
var $async$PC=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.ht(A.c0(0,0,0,500,0,0),null,y.z),$async$PC)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.R6(u,A.n("Enter Scan Code",null),null,A.n("Scan Code",null)),$async$PC)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$PC,w)},
ad2(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bn(new A.Z(F.Ny,G.bH(D.bL9,q),q),q,q)
x=r.f
if(x===D.HI)w=V.it
else if(x===D.acx)w=Q.tA
else{if(x!==D.HJ)return C.Y
w=R.tF}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.P(u).i("G<1,Z>")
u=A.A(new A.G(u,new B.czF(),t),t.i("a0.E"))
v.push(A.aa(u,C.D,C.f,C.h,0,q,C.l))}v.push(C.ad)
u=r.e.Q.tx()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.E(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.J3,C.aX,q,q,q,q))
x=A.a([A.bn(A.aa(v,C.i,C.f,C.h,0,q,C.l),q,q),C.ad,A.aD(w,C.o,q,30),C.Z],x)
if(r.f===D.HI)x.push(A.dh(!1,G.bH(D.bKP,q),q,q,q,q,q,q,r.gb5D(),q,q))
return new A.Z(K.aG,A.aa(x,C.i,C.f,C.h,0,q,C.l),q)},
B(d){var x,w,v=this,u=null,t=v.e==null?A.bUF(d):v.a4A(v.f),s=A.bK(C.as)
s=A.bE(u,u,u,u,u,u,A.aD(C.je,new A.by(s.a,s.b,s.c,0.8).bs(),u,u),u,u,u,new B.czG(d),u,u,u,u,u)
x=A.bK(C.as)
w=y.p
return W.eH(u,t,A.iQ(!0,new A.ck(C.af,u,C.ae,C.u,A.a([A.aa(A.a([new A.Z(K.aG,A.ah(A.a([s,A.b2(A.E("",u,u,u,u,u,u,u,A.ab(u,u,new A.by(x.a,x.b,x.c,0.8).bs(),u,u,u,u,u,u,u,u,20,u,u,C.O,u,u,!0,u,u,u,u,u,u,u,u),C.aX,u,u,u,u),1,u)],w),C.i,C.f,C.h,0,u),u),v.ad2(),A.b2(E.d5l(v.x,C.C_,new B.czH(v)),1,u)],w),C.i,C.f,C.h,0,u,C.l)],w),u),!0,C.N,!0,!0),u,u,u,u,u)},
wy(d){return this.aT4(d)},
aT4(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$wy=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bfa(d,t),$async$wy)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.HI
E.rg()
u.t(new B.czI())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.acx
E.rg()
E.rg()
u.t(new B.czJ())
x=1
break}else if(s&&t.e==="used"){u.f=D.HJ
E.rg()
E.rg()
u.t(new B.czK())
x=1
break}}u.f=D.acz
u.t(new B.czL())
case 1:return A.j(v,w)}})
return A.k($async$wy,w)},
VG(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$VG=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bff(s,t),$async$VG)
case 3:if(e){u.t(new B.czE(u))
E.rg()}else{E.rg()
E.rg()
u.c.a9(y.q).f.a5n(M.cVZ(null,null,null,null,null,C.u,null,G.bH(A.E("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.Dg,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$VG,w)},
a4A(d){var x
switch(d.a){case 0:return U.a6W
case 2:return F.a6X
case 1:return I.lp
case 3:x=this.c
x.toString
return A.B(x).ax.a===C.q?$.hS():$.nJ()}return I.lp}}
var z=a.updateTypes(["W<~>()"])
B.bfb.prototype={
$1(d){return A.B7(d)},
$S:95}
B.czF.prototype={
$1(d){var x=null
return new A.Z(O.Dm,A.E(d.iP(),x,x,x,x,x,x,x,S.J4,x,x,x,x,x),x)},
$S:243}
B.czG.prototype={
$0(){L.fa(this.a,!1).f.dl(null)},
$S:0}
B.czH.prototype={
$1(d){return this.aOx(d)},
aOx(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=T.SE(d.a)
if(s==null){x=1
break}t=s.z
A.fU().$1(t)
x=3
return A.d(u.a.wy(J.ap(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:488}
B.czI.prototype={
$0(){},
$S:0}
B.czJ.prototype={
$0(){},
$S:0}
B.czK.prototype={
$0(){},
$S:0}
B.czL.prototype={
$0(){},
$S:0}
B.czE.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.HJ},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.aik.prototype,"gb5D","VG",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.cj,[B.bfb,B.czF,B.czH])
w(B.UQ,A.fc)
w(B.G_,A.L)
w(B.aik,A.N)
x(A.d0,[B.czG,B.czI,B.czJ,B.czK,B.czL,B.czE])})()
A.cm(b.typeUniverse,JSON.parse('{"G_":{"L":[],"e":[]},"aik":{"N":["G_"]}}'))
var y=(function rtii(){var x=A.F
return{k:x("v<jY>"),p:x("v<e>"),j:x("D<@>"),P:x("z<h,@>"),K:x("dj"),u:x("rQ"),N:x("h"),q:x("Cm"),y:x("y"),z:x("@"),C:x("hO?"),H:x("~")}})();(function constants(){D.HI=new B.UQ(0,"valid")
D.acx=new B.UQ(1,"invalid")
D.HJ=new B.UQ(2,"used")
D.acz=new B.UQ(3,"nothing")
D.bKP=new A.cl("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bL9=new A.cl("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_233",e:"endPart",h:b})})($__dart_deferred_initializers__,"oXI0s6NQ6EqwFyiQNAXgrMwI9Gk=");