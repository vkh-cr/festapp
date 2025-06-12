((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_236",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,G,M,N,I,O,B={
bcj(d,e){return B.dg6(d,e)},
dg6(d,e){var x=0,w=A.m(y.C),v,u,t,s,r
var $async$bcj=A.h(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.Ot().dc("scan_ticket",A.y(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bcj)
case 3:r=g
s=J.a1(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=H.cZJ(y.P.a(s.h(r,"ticket")))
if(s.a4(r,"order")&&s.h(r,"order")!=null)u.Q=H.cX7(s.h(r,"order"))
if(s.a4(r,"products")&&s.h(r,"products")!=null){t=J.bh(y.j.a(s.h(r,"products")),new B.bck(),y.K)
t=A.C(t,t.$ti.i("a3.E"))
u.z=t}if(s.a4(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cJt(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bcj,w)},
bco(d,e){return B.dgb(d,e)},
dgb(d,e){var x=0,w=A.m(y.y),v,u,t,s
var $async$bco=A.h(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.Ot().dc("update_ticket_to_used",A.y(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bco)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bco,w)},
bck:function bck(){},
dp1(d,e){return new B.Fp(e,d)},
U2:function U2(d,e){this.a=d
this.b=e},
Fp:function Fp(d,e){this.c=d
this.a=e},
agY:function agY(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cr3:function cr3(){},
cr4:function cr4(d){this.a=d},
cr5:function cr5(d){this.a=d},
cr6:function cr6(){},
cr7:function cr7(){},
cr8:function cr8(){},
cr9:function cr9(){},
cr2:function cr2(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W,K
J=c[1]
A=c[0]
C=c[2]
L=c[167]
G=c[166]
M=c[98]
N=c[239]
I=c[186]
O=c[240]
B=a.updateHolder(c[22],B)
D=c[238]
E=c[36]
F=c[182]
P=c[59]
Q=c[183]
R=c[236]
S=c[241]
T=c[100]
H=c[77]
U=c[185]
V=c[172]
W=c[168]
K=c[170]
B.U2.prototype={
I(){return"ScanState."+this.b}}
B.Fp.prototype={
M(){return new B.agY(D.abM,new A.cl(C.ay,$.a8()),E.cWE(F.Mr,A.a([C.o6],y.k)))}}
B.agY.prototype={
l(){this.x.l()
var x=this.r
x.a7$=$.a8()
x.Y$=0
this.ai()},
b_(){var x=0,w=A.m(y.H),v=this,u
var $async$b_=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:v.ca()
if(v.a.c==null&&J.fZ(v.c.hz(y.u).f.r)){u=v.a
u.toString
u.c=J.v(v.c.hz(y.u).f.r,0).a.wi(0,"scanCode")}$.yE().ajS("https://unpkg.com/@zxing/library@0.21.3")
A.cN(v.a.c)
v.P6()
return A.k(null,w)}})
return A.l($async$b_,w)},
P6(){var x=0,w=A.m(y.H),v=this,u,t
var $async$P6=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hh(A.bU(0,0,0,500,0,0),null,y.z),$async$P6)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.Qp(u,A.q("Enter Scan Code",null),null,A.q("Scan Code",null)),$async$P6)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.k(null,w)}})
return A.l($async$P6,w)},
ac9(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bG(new A.a0(F.MQ,G.by(D.bJU,q),q),q,q)
x=r.f
if(x===D.GZ)w=V.j3
else if(x===D.abK)w=Q.DC
else{if(x!==D.H_)return C.a3
w=R.te}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.U(u).i("K<1,a0>")
u=A.C(new A.K(u,new B.cr3(),t),t.i("a3.E"))
v.push(A.ae(u,C.J,C.f,C.i,0,q,C.m))}v.push(C.ak)
u=r.e.Q.a2V()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.L(u+"   "+A.n(s)+"   "+t,q,q,q,q,q,q,q,F.Il,C.aZ,q,q,q,q))
x=A.a([A.bG(A.ae(v,C.j,C.f,C.i,0,q,C.m),q,q),C.ak,A.aS(w,C.n,q,30),C.a1],x)
if(r.f===D.GZ)x.push(A.dz(!1,G.by(D.bJA,q),q,q,q,q,q,q,r.gb3S(),q,q))
return new A.a0(K.aT,A.ae(x,C.j,C.f,C.i,0,q,C.m),q)},
B(d){var x,w,v=this,u=null,t=v.e==null?A.bPG(d):v.a3O(v.f),s=A.bt(C.as)
s=A.bM(u,u,u,u,u,u,A.aS(C.j2,new A.bn(s.a,s.b,s.c,0.8).bl(),u,u),u,u,u,new B.cr4(d),u,u,u,u,u)
x=A.bt(C.as)
w=y.p
return W.fa(u,t,A.jB(!0,new A.ch(C.ad,u,C.ab,C.v,A.a([A.ae(A.a([new A.a0(K.aT,A.ar(A.a([s,A.bb(A.L("",u,u,u,u,u,u,u,A.af(u,u,new A.bn(x.a,x.b,x.c,0.8).bl(),u,u,u,u,u,u,u,u,20,u,u,C.V,u,u,!0,u,u,u,u,u,u,u,u),C.aZ,u,u,u,u),1,u)],w),C.j,C.f,C.i,0,u),u),v.ac9(),A.bb(E.cWD(v.x,C.Bm,new B.cr5(v)),1,u)],w),C.j,C.f,C.i,0,u,C.m)],w),u),!0,C.P,!0,!0),u,u,u,u,u)},
wp(d){return this.aRC(d)},
aRC(d){var x=0,w=A.m(y.H),v,u=this,t,s,r
var $async$wp=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bcj(d,t),$async$wp)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.GZ
E.qP()
u.v(new B.cr6())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.abK
E.qP()
E.qP()
u.v(new B.cr7())
x=1
break}else if(s&&t.e==="used"){u.f=D.H_
E.qP()
E.qP()
u.v(new B.cr8())
x=1
break}}u.f=D.abM
u.v(new B.cr9())
case 1:return A.k(v,w)}})
return A.l($async$wp,w)},
V5(){var x=0,w=A.m(y.H),v,u=this,t,s
var $async$V5=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bco(s,t),$async$V5)
case 3:if(e){u.v(new B.cr2(u))
E.qP()}else{E.qP()
E.qP()
u.c.ac(y.q).f.akG(M.cYQ(null,null,null,null,null,C.v,null,G.by(A.L("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.MD,null,null,null,null,null,null,null,null,null))}case 1:return A.k(v,w)}})
return A.l($async$V5,w)},
a3O(d){var x
switch(d.a){case 0:return U.a63
case 2:return F.a64
case 1:return I.lb
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.q?$.hS():$.p7()}return I.lb}}
var z=a.updateTypes(["X<~>()"])
B.bck.prototype={
$1(d){return A.a6u(d)},
$S:111}
B.cr3.prototype={
$1(d){var x=null
return new A.a0(O.CI,A.L(d.ls(),x,x,x,x,x,x,x,S.Im,x,x,x,x,x),x)},
$S:389}
B.cr4.prototype={
$0(){L.fd(this.a,!1).f.e2(null)},
$S:0}
B.cr5.prototype={
$1(d){return this.aN8(d)},
aN8(d){var x=0,w=A.m(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:s=T.RU(d.a)
if(s==null){x=1
break}t=s.z
A.hC().$1(t)
x=3
return A.d(u.a.wp(J.as(t)),$async$$1)
case 3:case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:448}
B.cr6.prototype={
$0(){},
$S:0}
B.cr7.prototype={
$0(){},
$S:0}
B.cr8.prototype={
$0(){},
$S:0}
B.cr9.prototype={
$0(){},
$S:0}
B.cr2.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.H_},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.agY.prototype,"gb3S","V5",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.ce,[B.bck,B.cr3,B.cr5])
w(B.U2,A.fm)
w(B.Fp,A.J)
w(B.agY,A.P)
x(A.cW,[B.cr4,B.cr6,B.cr7,B.cr8,B.cr9,B.cr2])})()
A.c9(b.typeUniverse,JSON.parse('{"Fp":{"J":[],"e":[]},"agY":{"P":["Fp"]}}'))
var y=(function rtii(){var x=A.E
return{k:x("u<jM>"),p:x("u<e>"),j:x("B<@>"),P:x("A<i,@>"),K:x("f0"),u:x("ro"),N:x("i"),q:x("H0"),y:x("x"),z:x("@"),C:x("hz?"),H:x("~")}})();(function constants(){D.GZ=new B.U2(0,"valid")
D.abK=new B.U2(1,"invalid")
D.H_=new B.U2(2,"used")
D.abM=new B.U2(3,"nothing")
D.bJA=new A.cx("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJU=new A.cx("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_236",e:"endPart",h:b})})($__dart_deferred_initializers__,"G2KzbKRpSVpVhKBVMU+eXCkZpTQ=");