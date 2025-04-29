((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_270",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,I,P,Q,R,K,S,B={
b6_(d,e){var x=0,w=A.m(y.C),v,u,t,s,r
var $async$b6_=A.i(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.Mp().dP("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b6_)
case 3:r=g
s=J.a4(r)
if(!J.o(s.i(r,"code"),200)){v=null
x=1
break}u=G.cGW(y.P.a(s.i(r,"ticket")))
if(s.a7(r,"order")&&s.i(r,"order")!=null)u.Q=G.cEj(s.i(r,"order"))
if(s.a7(r,"products")&&s.i(r,"products")!=null){t=J.c_(y.j.a(s.i(r,"products")),new B.b60(),y.K)
u.z=A.H(t,!0,t.$ti.h("ab.E"))}if(s.a7(r,"spot")&&s.i(r,"spot")!=null)u.y=G.cqW(s.i(r,"spot"))
v=u
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$b6_,w)},
b64(d,e){var x=0,w=A.m(y.y),v,u,t,s
var $async$b64=A.i(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.Mp().dP("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b64)
case 3:v=t.o(s.w(g,"code"),200)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$b64,w)},
b60:function b60(){},
d1V(d,e){return new B.Dt(e,d)},
RL:function RL(d,e){this.a=d
this.b=e},
Dt:function Dt(d,e){this.c=d
this.a=e},
adw:function adw(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
caN:function caN(){},
caO:function caO(d){this.a=d},
caP:function caP(d){this.a=d},
caQ:function caQ(){},
caR:function caR(){},
caS:function caS(){},
caT:function caT(){},
caM:function caM(d){this.a=d}},D,E,F,T,U,V,W,G,X,Y,Z,A_,L,H,A0,A1
J=c[1]
A=c[0]
C=c[2]
M=c[202]
N=c[230]
O=c[209]
I=c[205]
P=c[95]
Q=c[289]
R=c[101]
K=c[233]
S=c[290]
B=a.updateHolder(c[22],B)
D=c[288]
E=c[36]
F=c[228]
T=c[65]
U=c[287]
V=c[291]
W=c[71]
G=c[80]
X=c[232]
Y=c[190]
Z=c[214]
A_=c[227]
L=c[212]
H=c[195]
A0=c[199]
A1=c[231]
B.RL.prototype={
J(){return"ScanState."+this.b}}
B.Dt.prototype={
M(){return new B.adw(D.a9j,new Y.co(A_.av,$.aa()),E.cDV(F.KB,A.a([C.nj],y.k)))}}
B.adw.prototype={
l(){this.x.l()
var x=this.r
x.P$=$.aa()
x.R$=0
this.ag()},
aS(){var x=0,w=A.m(y.H),v=this,u
var $async$aS=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:v.c8()
if(v.a.c==null&&v.c.ht(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.ht(y.u).f.f[0].a.xN(0,"scanCode")}$.Fw().ag5("https://unpkg.com/@zxing/library@0.21.3")
A.ek(v.a.c)
v.Nq()
return A.k(null,w)}})
return A.l($async$aS,w)},
Nq(){var x=0,w=A.m(y.H),v=this,u,t
var $async$Nq=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.id(A.cs(0,0,0,500,0),null,y.z),$async$Nq)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(T.Oe(u,A.r("Enter Scan Code",null),null,A.r("Scan Code",null)),$async$Nq)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.k(null,w)}})
return A.l($async$Nq,w)},
a8T(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bT(new A.a5(F.L1,H.bh(D.bD6,q),q),q,q)
x=r.f
if(x===D.Fo)w=O.k3
else if(x===D.a9h)w=F.LX
else{if(x!==D.Fp)return C.ae
w=U.ro}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.Z(u).h("Q<1,a5>")
v.push(A.al(A.H(new A.Q(u,new B.caN(),t),!0,t.h("ab.E")),C.K,C.f,C.h,q,C.m))}v.push(L.an)
u=r.e.Q.a0l()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.U(u+"   "+A.q(s)+"   "+t,q,q,q,q,q,q,q,F.abj,C.b6,q,q,q,q))
x=A.a([A.bT(A.al(v,C.i,C.f,C.h,q,C.m),q,q),L.an,A.bp(w,C.r,q,30),Z.a3],x)
if(r.f===D.Fo)x.push(A.dk(!1,H.bh(D.bCK,q),q,q,q,q,q,q,r.gaYI(),q,q))
return new A.a5(I.b0,A.al(x,C.i,C.f,C.h,q,C.m),q)},
B(d){var x=this,w=null,v=x.e==null?R.bFS(d):x.a1d(x.f),u=A.c2(w,w,w,w,w,w,A.bp(N.iw,C.cC,w,w),w,w,w,new B.caO(d),w,w,w,w,w),t=y.p
return M.eZ(w,v,A.jr(!0,new A.ct(C.ai,w,C.af,C.A,A.a([A.al(A.a([new A.a5(I.b0,A.au(A.a([u,A.bC(A.U("",w,w,w,w,w,w,w,A.aC(w,w,C.cC,w,w,w,w,w,w,w,w,20,w,w,C.a6,w,w,!0,w,w,w,w,w,w,w,w),C.b6,w,w,w,w),1,w)],t),C.i,C.f,C.h,0,w),w),x.a8T(),A.bC(E.cDU(x.x,A1.IC,new B.caP(x)),1,w)],t),C.i,C.f,C.h,w,C.m)],t),w),!0,C.X,!0,!0),w,w,w,w,w)},
vQ(d){return this.aMj(d)},
aMj(d){var x=0,w=A.m(y.H),v,u=this,t,s,r
var $async$vQ=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.b6_(d,t),$async$vQ)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.Fo
E.q3()
u.v(new B.caQ())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a9h
E.q3()
E.q3()
u.v(new B.caR())
x=1
break}else if(s&&t.e==="used"){u.f=D.Fp
E.q3()
E.q3()
u.v(new B.caS())
x=1
break}}u.f=D.a9j
u.v(new B.caT())
case 1:return A.k(v,w)}})
return A.l($async$vQ,w)},
Td(){var x=0,w=A.m(y.H),v,u=this,t,s
var $async$Td=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.b64(s,t),$async$Td)
case 3:if(e){u.v(new B.caM(u))
E.q3()}else{E.q3()
E.q3()
u.c.ac(y.q).f.agR(P.cG7(null,null,null,null,null,C.A,null,H.bh(A.U("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,Q.KR,null,null,null,null,null,null,null,null,null))}case 1:return A.k(v,w)}})
return A.l($async$Td,w)},
a1d(d){var x
switch(d.a){case 0:return X.a3J
case 2:return F.a3K
case 1:return K.mE
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.u?$.iF():$.pO()}return K.mE}}
var z=a.updateTypes(["V<~>()"])
B.b60.prototype={
$1(d){return A.axj(d)},
$S:130}
B.caN.prototype={
$1(d){var x=null
return new A.a5(S.BF,A.U(d.lb(),x,x,x,x,x,x,x,V.GD,x,x,x,x,x),x)},
$S:246}
B.caO.prototype={
$0(){A0.f1(this.a,!1).f.ef(null)},
$S:0}
B.caP.prototype={
$1(d){return this.aHS(d)},
aHS(d){var x=0,w=A.m(y.H),v,u=this,t,s
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:s=W.csH(d.a)
if(s==null){x=1
break}t=s.z
A.hj().$1(t)
x=3
return A.d(u.a.vQ(J.ao(t)),$async$$1)
case 3:case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:311}
B.caQ.prototype={
$0(){},
$S:0}
B.caR.prototype={
$0(){},
$S:0}
B.caS.prototype={
$0(){},
$S:0}
B.caT.prototype={
$0(){},
$S:0}
B.caM.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.Fp},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.adw.prototype,"gaYI","Td",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bI,[B.b60,B.caN,B.caP])
w(B.RL,A.e7)
w(B.Dt,A.I)
w(B.adw,A.M)
x(A.cn,[B.caO,B.caQ,B.caR,B.caS,B.caT,B.caM])})()
A.br(b.typeUniverse,JSON.parse('{"Dt":{"I":[],"e":[]},"adw":{"M":["Dt"]}}'))
var y=(function rtii(){var x=A.B
return{k:x("u<jj>"),p:x("u<e>"),j:x("C<@>"),P:x("A<h,@>"),K:x("fw"),u:x("qx"),N:x("h"),q:x("F6"),y:x("y"),z:x("@"),C:x("h6?"),H:x("~")}})();(function constants(){D.Fo=new B.RL(0,"valid")
D.a9h=new B.RL(1,"invalid")
D.Fp=new B.RL(2,"used")
D.a9j=new B.RL(3,"nothing")
D.bCK=new A.c5("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bD6=new A.c5("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_270",e:"endPart",h:b})})($__dart_deferred_initializers__,"uABxI0t8gJ3TGZbQgmcrbJyF+0g=");