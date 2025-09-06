((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,G,M,N,O,I,B={
bip(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$bip=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.Iw().c4("scan_ticket",A.w(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bip)
case 3:r=g
s=J.a1(r)
if(!J.q(s.h(r,"code"),200)){v=null
x=1
break}u=H.bZq(y.P.a(s.h(r,"ticket")))
if(s.a4(r,"order")&&s.h(r,"order")!=null)u.Q=H.Uj(s.h(r,"order"))
if(s.a4(r,"products")&&s.h(r,"products")!=null){t=J.aT(y.j.a(s.h(r,"products")),new B.biq(),y.K)
t=A.A(t,t.$ti.i("a_.E"))
u.z=t}if(s.a4(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cXP(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bip,w)},
biu(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$biu=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.Iw().c4("update_ticket_to_used",A.w(["ticket_id",d,"scan_code",e],y.N,u),u),$async$biu)
case 3:v=t.q(s.v(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$biu,w)},
biq:function biq(){},
dCk(d,e){return new B.Gx(e,d)},
Vy:function Vy(d,e){this.a=d
this.b=e},
Gx:function Gx(d,e){this.c=d
this.a=e},
ajr:function ajr(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cEj:function cEj(){},
cEk:function cEk(d){this.a=d},
cEl:function cEl(d){this.a=d},
cEm:function cEm(){},
cEn:function cEn(){},
cEo:function cEo(){},
cEp:function cEp(){},
cEi:function cEi(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W,K
J=c[1]
A=c[0]
C=c[2]
L=c[163]
G=c[162]
M=c[118]
N=c[235]
O=c[236]
I=c[183]
B=a.updateHolder(c[22],B)
D=c[234]
E=c[37]
F=c[179]
P=c[63]
Q=c[180]
R=c[232]
S=c[237]
T=c[97]
H=c[77]
U=c[182]
V=c[171]
W=c[164]
K=c[174]
B.Vy.prototype={
J(){return"ScanState."+this.b}}
B.Gx.prototype={
K(){return new B.ajr(D.adn,new A.bR(C.af,$.a9()),E.daG(F.NW,A.b([C.oB],y.k)))}}
B.ajr.prototype={
l(){this.x.l()
var x=this.r
x.Y$=$.a9()
x.T$=0
this.af()},
b0(){var x=0,w=A.l(y.H),v=this,u
var $async$b0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.c5()
if(v.a.c==null&&J.fA(v.c.hE(y.u).f.r)){u=v.a
u.toString
u.c=J.v(v.c.hE(y.u).f.r,0).a.vb(0,"scanCode")}$.zM().am6("https://unpkg.com/@zxing/library@0.21.3")
A.cR(v.a.c)
v.Q1()
return A.j(null,w)}})
return A.k($async$b0,w)},
Q1(){var x=0,w=A.l(y.H),v=this,u,t
var $async$Q1=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hH(A.c4(0,0,0,500,0,0),null,y.z),$async$Q1)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.RX(u,A.n("Enter Scan Code",null,null),null,A.n("Scan Code",null,null)),$async$Q1)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$Q1,w)},
ae6(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bj(new A.W(F.Oj,G.bS(D.bLW,q),q),q,q)
x=r.f
if(x===D.Is)w=V.iD
else if(x===D.adl)w=Q.u4
else{if(x!==D.It)return C.U
w=R.ua}x=y.p
v=A.b([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.O(u).i("G<1,W>")
u=A.A(new A.G(u,new B.cEj(),t),t.i("a_.E"))
v.push(A.aa(u,C.C,C.f,C.h,0,q,C.l))}v.push(C.aa)
u=r.e.Q.tN()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.E(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.JN,C.aX,q,q,q,q))
x=A.b([A.bj(A.aa(v,C.i,C.f,C.h,0,q,C.l),q,q),C.aa,A.aA(w,C.p,q,30),C.X],x)
if(r.f===D.Is)x.push(A.dj(!1,G.bS(D.bLB,q),q,q,q,q,q,q,r.gb8_(),q,q))
return new A.W(K.aU,A.aa(x,C.i,C.f,C.h,0,q,C.l),q)},
B(d){var x,w,v=this,u=null,t=v.e==null?A.bYu(d):v.a5p(v.f),s=A.bO(C.ar)
s=A.bL(u,u,u,u,u,u,A.aA(C.ju,new A.bD(s.a,s.b,s.c,0.8).bx(),u,u),u,u,u,new B.cEk(d),u,u,u,u,u)
x=A.bO(C.ar)
w=y.p
return W.eP(u,t,A.iC(!0,new A.ch(C.ac,u,C.ab,C.u,A.b([A.aa(A.b([new A.W(K.aU,A.ad(A.b([s,A.aY(A.E("",u,u,u,u,u,u,u,A.ac(u,u,new A.bD(x.a,x.b,x.c,0.8).bx(),u,u,u,u,u,u,u,u,20,u,u,C.N,u,u,!0,u,u,u,u,u,u,u,u),C.aX,u,u,u,u),1,u)],w),C.i,u,C.f,C.h,0,u),u),v.ae6(),A.aY(E.daF(v.x,C.CA,new B.cEl(v)),1,u)],w),C.i,C.f,C.h,0,u,C.l)],w),u),!0,C.L,!0,!0),u,u,u,u)},
wV(d){return this.aVr(d)},
aVr(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$wV=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bip(d,t),$async$wV)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.Is
E.rD()
u.q(new B.cEm())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.adl
E.rD()
E.rD()
u.q(new B.cEn())
x=1
break}else if(s&&t.e==="used"){u.f=D.It
E.rD()
E.rD()
u.q(new B.cEo())
x=1
break}}u.f=D.adn
u.q(new B.cEp())
case 1:return A.j(v,w)}})
return A.k($async$wV,w)},
W2(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$W2=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.biu(s,t),$async$W2)
case 3:if(e){u.q(new B.cEi(u))
E.rD()}else{E.rD()
E.rD()
u.c.ag(y.q).f.a6g(M.d03(null,null,null,null,null,C.u,null,G.bS(A.E("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.DW,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$W2,w)},
a5p(d){var x
switch(d.a){case 0:return U.a7M
case 2:return F.a7N
case 1:return I.lB
case 3:x=this.c
x.toString
return A.B(x).ax.a===C.q?$.i_():$.nZ()}return I.lB}}
var z=a.updateTypes(["V<~>()"])
B.biq.prototype={
$1(d){return A.BH(d)},
$S:98}
B.cEj.prototype={
$1(d){var x=null
return new A.W(O.E_,A.E(d.iT(),x,x,x,x,x,x,x,S.JO,x,x,x,x,x),x)},
$S:255}
B.cEk.prototype={
$0(){L.fs(this.a,!1).f.dv(null)},
$S:0}
B.cEl.prototype={
$1(d){return this.aQW(d)},
aQW(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=T.Tl(d.a)
if(s==null){x=1
break}t=s.z
A.hb().$1(t)
x=3
return A.d(u.a.wV(J.aq(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:507}
B.cEm.prototype={
$0(){},
$S:0}
B.cEn.prototype={
$0(){},
$S:0}
B.cEo.prototype={
$0(){},
$S:0}
B.cEp.prototype={
$0(){},
$S:0}
B.cEi.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.It},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.ajr.prototype,"gb8_","W2",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.cj,[B.biq,B.cEj,B.cEl])
w(B.Vy,A.fy)
w(B.Gx,A.M)
w(B.ajr,A.N)
x(A.cX,[B.cEk,B.cEm,B.cEn,B.cEo,B.cEp,B.cEi])})()
A.cf(b.typeUniverse,JSON.parse('{"Gx":{"M":[],"e":[]},"ajr":{"N":["Gx"]}}'))
var y=(function rtii(){var x=A.I
return{k:x("u<ki>"),p:x("u<e>"),j:x("D<@>"),P:x("z<f,@>"),K:x("dq"),u:x("qE"),N:x("f"),q:x("D1"),y:x("y"),z:x("@"),C:x("hv?"),H:x("~")}})();(function constants(){D.Is=new B.Vy(0,"valid")
D.adl=new B.Vy(1,"invalid")
D.It=new B.Vy(2,"used")
D.adn=new B.Vy(3,"nothing")
D.bLB=new A.cA("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLW=new A.cA("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["oOHMDeQ2982Te7TE181G2oipE5o="]=a.current})($__dart_deferred_initializers__);