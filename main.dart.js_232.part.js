((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,F,M,N,O,I,B={
bjC(d,e){var x=0,w=A.m(y.C),v,u,t,s,r
var $async$bjC=A.i(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.J3().c3("scan_ticket",A.w(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bjC)
case 3:r=g
s=J.a1(r)
if(!J.q(s.h(r,"code"),200)){v=null
x=1
break}u=H.c04(y.P.a(s.h(r,"ticket")))
if(s.a6(r,"order")&&s.h(r,"order")!=null)u.Q=H.US(s.h(r,"order"))
if(s.a6(r,"products")&&s.h(r,"products")!=null){t=J.b0(y.j.a(s.h(r,"products")),new B.bjD(),y.K)
t=A.A(t,t.$ti.i("a_.E"))
u.z=t}if(s.a6(r,"spot")&&s.h(r,"spot")!=null)u.y=H.d0e(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bjC,w)},
bjH(d,e){var x=0,w=A.m(y.y),v,u,t,s
var $async$bjH=A.i(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.J3().c3("update_ticket_to_used",A.w(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bjH)
case 3:v=t.q(s.v(g,"code"),200)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bjH,w)},
bjD:function bjD(){},
dGi(d,e){return new B.GU(e,d)},
Wa:function Wa(d,e){this.a=d
this.b=e},
GU:function GU(d,e){this.c=d
this.a=e},
akh:function akh(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cH4:function cH4(){},
cH5:function cH5(d){this.a=d},
cH6:function cH6(d){this.a=d},
cH7:function cH7(){},
cH8:function cH8(){},
cH9:function cH9(){},
cHa:function cHa(){},
cH3:function cH3(d){this.a=d}},D,E,G,P,Q,R,S,T,U,H,V,W,X,K
J=c[1]
A=c[0]
C=c[2]
L=c[164]
F=c[163]
M=c[120]
N=c[239]
O=c[240]
I=c[186]
B=a.updateHolder(c[22],B)
D=c[238]
E=c[38]
G=c[181]
P=c[64]
Q=c[182]
R=c[236]
S=c[241]
T=c[96]
U=c[185]
H=c[78]
V=c[184]
W=c[172]
X=c[165]
K=c[175]
B.Wa.prototype={
I(){return"ScanState."+this.b}}
B.GU.prototype={
K(){return new B.akh(D.adC,new A.bC(C.af,$.a7()),E.deh(G.Oh,A.b([C.oP],y.k)))}}
B.akh.prototype={
l(){this.x.l()
var x=this.r
x.T$=$.a7()
x.U$=0
this.ad()},
b0(){var x=0,w=A.m(y.H),v=this,u
var $async$b0=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:v.c6()
if(v.a.c==null&&J.fq(v.c.hR(y.u).f.r)){u=v.a
u.toString
u.c=J.v(v.c.hR(y.u).f.r,0).a.pI(0,"scanCode")}$.A1().amQ("https://unpkg.com/@zxing/library@0.21.3")
A.cS(v.a.c)
v.Qp()
return A.k(null,w)}})
return A.l($async$b0,w)},
Qp(){var x=0,w=A.m(y.H),v=this,u,t
var $async$Qp=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hl(A.c3(0,0,0,500,0,0),null,y.z),$async$Qp)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.Ss(u,A.h("Enter Scan Code",null,null),null,A.h("Scan Code",null,null)),$async$Qp)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.k(null,w)}})
return A.l($async$Qp,w)},
aeO(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bl(new A.U(G.OA,F.c0(D.bMB,q),q),q,q)
x=r.f
if(x===D.IR)w=W.iP
else if(x===D.adA)w=Q.uo
else{if(x!==D.IS)return C.T
w=R.uu}x=y.p
v=A.b([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.O(u).i("F<1,U>")
u=A.A(new A.F(u,new B.cH4(),t),t.i("a_.E"))
v.push(A.a9(u,C.A,C.f,C.h,0,q,C.l))}v.push(C.a8)
u=r.e.Q.rk()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.C(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,G.Ka,C.aW,q,q,q,q))
x=A.b([A.bl(A.a9(v,C.i,C.f,C.h,0,q,C.l),q,q),C.a8,A.aD(w,C.o,q,30),C.W],x)
if(r.f===D.IR)x.push(A.dj(!1,F.c0(D.bMe,q),q,q,q,q,q,q,r.gb9r(),q,q))
return new A.U(K.aT,A.a9(x,C.i,C.f,C.h,0,q,C.l),q)},
A(d){var x,w,v=this,u=null,t=v.e==null?A.c_6(d):v.a6_(v.f),s=A.bQ(C.ar)
s=A.bP(u,u,u,u,u,u,A.aD(C.jE,new A.bJ(s.a,s.b,s.c,0.8).bx(),u,u),u,u,u,new B.cH5(d),u,u,u,u,u)
x=A.bQ(C.ar)
w=y.p
return X.eO(u,t,A.i_(!0,new A.cf(C.ad,u,C.aa,C.t,A.b([A.a9(A.b([new A.U(K.aT,A.ae(A.b([s,A.aX(A.C("",u,u,u,u,u,u,u,A.ad(u,u,new A.bJ(x.a,x.b,x.c,0.8).bx(),u,u,u,u,u,u,u,u,20,u,u,C.N,u,u,!0,u,u,u,u,u,u,u,u),C.aW,u,u,u,u),1,u)],w),C.i,u,C.f,C.h,0,u),u),v.aeO(),A.aX(E.deg(v.x,C.CQ,new B.cH6(v)),1,u)],w),C.i,C.f,C.h,0,u,C.l)],w),u),!0,C.I,!0,!0),u,u,u,u)},
x4(d){return this.aWK(d)},
aWK(d){var x=0,w=A.m(y.H),v,u=this,t,s,r
var $async$x4=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bjC(d,t),$async$x4)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.IR
E.rS()
u.q(new B.cH7())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.adA
E.rS()
E.rS()
u.q(new B.cH8())
x=1
break}else if(s&&t.e==="used"){u.f=D.IS
E.rS()
E.rS()
u.q(new B.cH9())
x=1
break}}u.f=D.adC
u.q(new B.cHa())
case 1:return A.k(v,w)}})
return A.l($async$x4,w)},
Wt(){var x=0,w=A.m(y.H),v,u=this,t,s
var $async$Wt=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bjH(s,t),$async$Wt)
case 3:if(e){u.q(new B.cH3(u))
E.rS()}else{E.rS()
E.rS()
u.c.af(y.q).f.a6T(M.d3v(null,null,null,null,null,C.t,null,F.c0(A.C("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.Ee,null,null,null,null,null,null,null,null,null))}case 1:return A.k(v,w)}})
return A.l($async$Wt,w)},
a6_(d){var x
switch(d.a){case 0:return V.a83
case 2:return U.I9
case 1:return I.lM
case 3:x=this.c
x.toString
return A.z(x).ax.a===C.p?$.i2():$.of()}return I.lM}}
var z=a.updateTypes(["W<~>()"])
B.bjD.prototype={
$1(d){return A.C2(d)},
$S:107}
B.cH4.prototype={
$1(d){var x=null
return new A.U(O.El,A.C(d.j0(),x,x,x,x,x,x,x,S.Kb,x,x,x,x,x),x)},
$S:260}
B.cH5.prototype={
$0(){L.fl(this.a,!1).f.dv(null)},
$S:0}
B.cH6.prototype={
$1(d){return this.aSa(d)},
aSa(d){var x=0,w=A.m(y.H),v,u=this,t,s
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:s=T.TT(d.a)
if(s==null){x=1
break}t=s.z
A.hc().$1(t)
x=3
return A.d(u.a.x4(J.aq(t)),$async$$1)
case 3:case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:319}
B.cH7.prototype={
$0(){},
$S:0}
B.cH8.prototype={
$0(){},
$S:0}
B.cH9.prototype={
$0(){},
$S:0}
B.cHa.prototype={
$0(){},
$S:0}
B.cH3.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.IS},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.akh.prototype,"gb9r","Wt",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.cs,[B.bjD,B.cH4,B.cH6])
w(B.Wa,A.fJ)
w(B.GU,A.L)
w(B.akh,A.N)
x(A.cY,[B.cH5,B.cH7,B.cH8,B.cH9,B.cHa,B.cH3])})()
A.ce(b.typeUniverse,JSON.parse('{"GU":{"L":[],"e":[]},"akh":{"N":["GU"]}}'))
var y=(function rtii(){var x=A.J
return{k:x("u<kp>"),p:x("u<e>"),j:x("E<@>"),P:x("B<f,@>"),K:x("ds"),u:x("qU"),N:x("f"),q:x("Dm"),y:x("x"),z:x("@"),C:x("hC?"),H:x("~")}})();(function constants(){D.IR=new B.Wa(0,"valid")
D.adA=new B.Wa(1,"invalid")
D.IS=new B.Wa(2,"used")
D.adC=new B.Wa(3,"nothing")
D.bMe=new A.cg("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMB=new A.cg("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["Hmhuxiu2hunHw2vQ1c2+0je1y94="]=a.current})($__dart_deferred_initializers__);