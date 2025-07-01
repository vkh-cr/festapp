((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_237",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,G,M,N,I,O,B={
bdu(d,e){return B.djC(d,e)},
djC(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$bdu=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.OE().cJ("scan_ticket",A.w(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bdu)
case 3:r=g
s=J.a0(r)
if(!J.q(s.h(r,"code"),200)){v=null
x=1
break}u=H.d1X(y.P.a(s.h(r,"ticket")))
if(s.a3(r,"order")&&s.h(r,"order")!=null)u.Q=H.d_k(s.h(r,"order"))
if(s.a3(r,"products")&&s.h(r,"products")!=null){t=J.b7(y.j.a(s.h(r,"products")),new B.bdv(),y.K)
t=A.B(t,t.$ti.i("a2.E"))
u.z=t}if(s.a3(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cMp(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$bdu,w)},
bdz(d,e){return B.djH(d,e)},
djH(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$bdz=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.OE().cJ("update_ticket_to_used",A.w(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bdz)
case 3:v=t.q(s.v(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$bdz,w)},
bdv:function bdv(){},
dsP(d,e){return new B.Fz(e,d)},
Ue:function Ue(d,e){this.a=d
this.b=e},
Fz:function Fz(d,e){this.c=d
this.a=e},
ahp:function ahp(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
ctM:function ctM(){},
ctN:function ctN(d){this.a=d},
ctO:function ctO(d){this.a=d},
ctP:function ctP(){},
ctQ:function ctQ(){},
ctR:function ctR(){},
ctS:function ctS(){},
ctL:function ctL(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W,K
J=c[1]
A=c[0]
C=c[2]
L=c[167]
G=c[166]
M=c[96]
N=c[240]
I=c[186]
O=c[241]
B=a.updateHolder(c[22],B)
D=c[239]
E=c[36]
F=c[182]
P=c[61]
Q=c[183]
R=c[237]
S=c[242]
T=c[98]
H=c[77]
U=c[185]
V=c[172]
W=c[168]
K=c[170]
B.Ue.prototype={
J(){return"ScanState."+this.b}}
B.Fz.prototype={
M(){return new B.ahp(D.abX,new A.cb(C.av,$.a8()),E.cZQ(F.MC,A.a([C.oa],y.k)))}}
B.ahp.prototype={
l(){this.x.l()
var x=this.r
x.a6$=$.a8()
x.V$=0
this.ai()},
aY(){var x=0,w=A.k(y.H),v=this,u
var $async$aY=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.c3()
if(v.a.c==null&&J.fF(v.c.ip(y.u).f.r)){u=v.a
u.toString
u.c=J.v(v.c.ip(y.u).f.r,0).a.Br(0,"scanCode")}$.yQ().akg("https://unpkg.com/@zxing/library@0.21.3")
A.cE(v.a.c)
v.Pk()
return A.i(null,w)}})
return A.j($async$aY,w)},
Pk(){var x=0,w=A.k(y.H),v=this,u,t
var $async$Pk=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hm(A.bV(0,0,0,500,0,0),null,y.z),$async$Pk)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.Qx(u,A.n("Enter Scan Code",null),null,A.n("Scan Code",null)),$async$Pk)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$Pk,w)},
acw(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bG(new A.a1(F.N0,G.bC(D.bK4,q),q),q,q)
x=r.f
if(x===D.Hb)w=V.io
else if(x===D.abV)w=Q.te
else{if(x!==D.Hc)return C.a2
w=R.tl}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.S(u).i("J<1,a1>")
u=A.B(new A.J(u,new B.ctM(),t),t.i("a2.E"))
v.push(A.ae(u,C.H,C.f,C.i,0,q,C.m))}v.push(C.ah)
u=r.e.Q.a3d()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.H(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.Ix,C.b_,q,q,q,q))
x=A.a([A.bG(A.ae(v,C.j,C.f,C.i,0,q,C.m),q,q),C.ah,A.aM(w,C.n,q,30),C.Z],x)
if(r.f===D.Hb)x.push(A.dv(!1,G.bC(D.bJK,q),q,q,q,q,q,q,r.gb4C(),q,q))
return new A.a1(K.aQ,A.ae(x,C.j,C.f,C.i,0,q,C.m),q)},
B(d){var x,w,v=this,u=null,t=v.e==null?A.bRK(d):v.a47(v.f),s=A.bI(C.au)
s=A.bN(u,u,u,u,u,u,A.aM(C.j4,new A.bw(s.a,s.b,s.c,0.8).bq(),u,u),u,u,u,new B.ctN(d),u,u,u,u,u)
x=A.bI(C.au)
w=y.p
return W.eX(u,t,A.iX(!0,new A.cj(C.ad,u,C.ac,C.v,A.a([A.ae(A.a([new A.a1(K.aQ,A.aq(A.a([s,A.bc(A.H("",u,u,u,u,u,u,u,A.af(u,u,new A.bw(x.a,x.b,x.c,0.8).bq(),u,u,u,u,u,u,u,u,20,u,u,C.U,u,u,!0,u,u,u,u,u,u,u,u),C.b_,u,u,u,u),1,u)],w),C.j,C.f,C.i,0,u),u),v.acw(),A.bc(E.cZP(v.x,C.Bx,new B.ctO(v)),1,u)],w),C.j,C.f,C.i,0,u,C.m)],w),u),!0,C.O,!0,!0),u,u,u,u,u)},
wu(d){return this.aSf(d)},
aSf(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$wu=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bdu(d,t),$async$wu)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.Hb
E.r_()
u.u(new B.ctP())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.abV
E.r_()
E.r_()
u.u(new B.ctQ())
x=1
break}else if(s&&t.e==="used"){u.f=D.Hc
E.r_()
E.r_()
u.u(new B.ctR())
x=1
break}}u.f=D.abX
u.u(new B.ctS())
case 1:return A.i(v,w)}})
return A.j($async$wu,w)},
Vi(){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$Vi=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bdz(s,t),$async$Vi)
case 3:if(e){u.u(new B.ctL(u))
E.r_()}else{E.r_()
E.r_()
u.c.ac(y.q).f.al4(M.d12(null,null,null,null,null,C.v,null,G.bC(A.H("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.MO,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$Vi,w)},
a47(d){var x
switch(d.a){case 0:return U.a6e
case 2:return F.a6f
case 1:return I.lf
case 3:x=this.c
x.toString
return A.C(x).ax.a===C.q?$.ib():$.pj()}return I.lf}}
var z=a.updateTypes(["X<~>()"])
B.bdv.prototype={
$1(d){return A.Ty(d)},
$S:109}
B.ctM.prototype={
$1(d){var x=null
return new A.a1(O.CU,A.H(d.kH(),x,x,x,x,x,x,x,S.Iy,x,x,x,x,x),x)},
$S:1263}
B.ctN.prototype={
$0(){L.fj(this.a,!1).f.dE(null)},
$S:0}
B.ctO.prototype={
$1(d){return this.aNK(d)},
aNK(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=T.S3(d.a)
if(s==null){x=1
break}t=s.z
A.hJ().$1(t)
x=3
return A.d(u.a.wu(J.ap(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:297}
B.ctP.prototype={
$0(){},
$S:0}
B.ctQ.prototype={
$0(){},
$S:0}
B.ctR.prototype={
$0(){},
$S:0}
B.ctS.prototype={
$0(){},
$S:0}
B.ctL.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.Hc},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.ahp.prototype,"gb4C","Vi",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.ch,[B.bdv,B.ctM,B.ctO])
w(B.Ue,A.fm)
w(B.Fz,A.L)
w(B.ahp,A.N)
x(A.d_,[B.ctN,B.ctP,B.ctQ,B.ctR,B.ctS,B.ctL])})()
A.ce(b.typeUniverse,JSON.parse('{"Fz":{"L":[],"e":[]},"ahp":{"N":["Fz"]}}'))
var y=(function rtii(){var x=A.E
return{k:x("u<jO>"),p:x("u<e>"),j:x("D<@>"),P:x("A<l,@>"),K:x("eS"),u:x("rx"),N:x("l"),q:x("Ha"),y:x("y"),z:x("@"),C:x("hF?"),H:x("~")}})();(function constants(){D.Hb=new B.Ue(0,"valid")
D.abV=new B.Ue(1,"invalid")
D.Hc=new B.Ue(2,"used")
D.abX=new B.Ue(3,"nothing")
D.bJK=new A.cx("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bK4=new A.cx("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_237",e:"endPart",h:b})})($__dart_deferred_initializers__,"QQ01aCrSe+hSKuIHUHPer2AKZgM=");