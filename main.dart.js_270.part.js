((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_270",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,I,P,Q,R,K,S,B={
b68(d,e){var x=0,w=A.m(y.C),v,u,t,s,r
var $async$b68=A.i(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.Mq().dG("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b68)
case 3:r=g
s=J.a3(r)
if(!J.o(s.i(r,"code"),200)){v=null
x=1
break}u=G.cHe(y.P.a(s.i(r,"ticket")))
if(s.a7(r,"order")&&s.i(r,"order")!=null)u.Q=G.cEE(s.i(r,"order"))
if(s.a7(r,"products")&&s.i(r,"products")!=null){t=J.bX(y.j.a(s.i(r,"products")),new B.b69(),y.K)
u.z=A.H(t,!0,t.$ti.h("ab.E"))}if(s.a7(r,"spot")&&s.i(r,"spot")!=null)u.y=G.crf(s.i(r,"spot"))
v=u
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$b68,w)},
b6d(d,e){var x=0,w=A.m(y.y),v,u,t,s
var $async$b6d=A.i(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.Mq().dG("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b6d)
case 3:v=t.o(s.v(g,"code"),200)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$b6d,w)},
b69:function b69(){},
d2e(d,e){return new B.Du(e,d)},
RM:function RM(d,e){this.a=d
this.b=e},
Du:function Du(d,e){this.c=d
this.a=e},
adA:function adA(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cb4:function cb4(){},
cb5:function cb5(d){this.a=d},
cb6:function cb6(d){this.a=d},
cb7:function cb7(){},
cb8:function cb8(){},
cb9:function cb9(){},
cba:function cba(){},
cb3:function cb3(d){this.a=d}},D,E,F,T,U,V,W,G,X,Y,Z,A_,L,H,A0,A1
J=c[1]
A=c[0]
C=c[2]
M=c[202]
N=c[230]
O=c[209]
I=c[205]
P=c[95]
Q=c[288]
R=c[101]
K=c[233]
S=c[289]
B=a.updateHolder(c[22],B)
D=c[287]
E=c[36]
F=c[228]
T=c[65]
U=c[286]
V=c[290]
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
B.RM.prototype={
J(){return"ScanState."+this.b}}
B.Du.prototype={
M(){return new B.adA(D.a9i,new Y.co(A_.av,$.aa()),E.cEf(F.KC,A.a([C.nk],y.k)))}}
B.adA.prototype={
l(){this.x.l()
var x=this.r
x.P$=$.aa()
x.R$=0
this.ag()},
aS(){var x=0,w=A.m(y.H),v=this,u
var $async$aS=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:v.c5()
if(v.a.c==null&&v.c.hc(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hc(y.u).f.f[0].a.vJ(0,"scanCode")}$.Fx().ag4("https://unpkg.com/@zxing/library@0.21.3")
A.ek(v.a.c)
v.Nr()
return A.k(null,w)}})
return A.l($async$aS,w)},
Nr(){var x=0,w=A.m(y.H),v=this,u,t
var $async$Nr=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.id(A.cp(0,0,0,500,0),null,y.z),$async$Nr)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(T.Og(u,A.r("Enter Scan Code",null),null,A.r("Scan Code",null)),$async$Nr)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.k(null,w)}})
return A.l($async$Nr,w)},
a8S(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bU(new A.a5(F.L2,H.bi(D.bD6,q),q),q,q)
x=r.f
if(x===D.Fr)w=O.k5
else if(x===D.a9g)w=F.LX
else{if(x!==D.Fs)return C.ae
w=U.ro}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.Z(u).h("Q<1,a5>")
v.push(A.ak(A.H(new A.Q(u,new B.cb4(),t),!0,t.h("ab.E")),C.K,C.f,C.h,q,C.m))}v.push(L.an)
u=r.e.Q.a0l()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.T(u+"   "+A.q(s)+"   "+t,q,q,q,q,q,q,q,F.abi,C.b1,q,q,q,q))
x=A.a([A.bU(A.ak(v,C.i,C.f,C.h,q,C.m),q,q),L.an,A.bp(w,C.t,q,30),Z.a3],x)
if(r.f===D.Fr)x.push(A.dk(!1,H.bi(D.bCK,q),q,q,q,q,q,q,r.gaYJ(),q,q))
return new A.a5(I.b0,A.ak(x,C.i,C.f,C.h,q,C.m),q)},
B(d){var x=this,w=null,v=x.e==null?R.bG7(d):x.a1d(x.f),u=A.c2(w,w,w,w,w,w,A.bp(N.iw,C.cp,w,w),w,w,w,new B.cb5(d),w,w,w,w,w),t=y.p
return M.f0(w,v,A.js(!0,new A.ct(C.ai,w,C.af,C.A,A.a([A.ak(A.a([new A.a5(I.b0,A.av(A.a([u,A.bC(A.T("",w,w,w,w,w,w,w,A.aC(w,w,C.cp,w,w,w,w,w,w,w,w,20,w,w,C.a6,w,w,!0,w,w,w,w,w,w,w,w),C.b1,w,w,w,w),1,w)],t),C.i,C.f,C.h,0,w),w),x.a8S(),A.bC(E.cEe(x.x,A1.IE,new B.cb6(x)),1,w)],t),C.i,C.f,C.h,w,C.m)],t),w),!0,C.X,!0,!0),w,w,w,w,w)},
vR(d){return this.aMk(d)},
aMk(d){var x=0,w=A.m(y.H),v,u=this,t,s,r
var $async$vR=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.b68(d,t),$async$vR)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.Fr
E.q3()
u.v(new B.cb7())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a9g
E.q3()
E.q3()
u.v(new B.cb8())
x=1
break}else if(s&&t.e==="used"){u.f=D.Fs
E.q3()
E.q3()
u.v(new B.cb9())
x=1
break}}u.f=D.a9i
u.v(new B.cba())
case 1:return A.k(v,w)}})
return A.l($async$vR,w)},
Td(){var x=0,w=A.m(y.H),v,u=this,t,s
var $async$Td=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.b6d(s,t),$async$Td)
case 3:if(e){u.v(new B.cb3(u))
E.q3()}else{E.q3()
E.q3()
u.c.ac(y.q).f.agQ(P.cGq(null,null,null,null,null,C.A,null,H.bi(A.T("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,Q.KS,null,null,null,null,null,null,null,null,null))}case 1:return A.k(v,w)}})
return A.l($async$Td,w)},
a1d(d){var x
switch(d.a){case 0:return X.a3I
case 2:return F.a3J
case 1:return K.mE
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.r?$.ik():$.pO()}return K.mE}}
var z=a.updateTypes(["V<~>()"])
B.b69.prototype={
$1(d){return A.a3x(d)},
$S:106}
B.cb4.prototype={
$1(d){var x=null
return new A.a5(S.BG,A.T(d.lc(),x,x,x,x,x,x,x,V.GG,x,x,x,x,x),x)},
$S:248}
B.cb5.prototype={
$0(){A0.f3(this.a,!1).f.ef(null)},
$S:0}
B.cb6.prototype={
$1(d){return this.aHR(d)},
aHR(d){var x=0,w=A.m(y.H),v,u=this,t,s
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:s=W.ct_(d.a)
if(s==null){x=1
break}t=s.z
A.hj().$1(t)
x=3
return A.d(u.a.vR(J.ao(t)),$async$$1)
case 3:case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:313}
B.cb7.prototype={
$0(){},
$S:0}
B.cb8.prototype={
$0(){},
$S:0}
B.cb9.prototype={
$0(){},
$S:0}
B.cba.prototype={
$0(){},
$S:0}
B.cb3.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.Fs},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.adA.prototype,"gaYJ","Td",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bJ,[B.b69,B.cb4,B.cb6])
w(B.RM,A.e7)
w(B.Du,A.I)
w(B.adA,A.L)
x(A.cn,[B.cb5,B.cb7,B.cb8,B.cb9,B.cba,B.cb3])})()
A.br(b.typeUniverse,JSON.parse('{"Du":{"I":[],"e":[]},"adA":{"L":["Du"]}}'))
var y=(function rtii(){var x=A.B
return{k:x("u<jk>"),p:x("u<e>"),j:x("C<@>"),P:x("A<h,@>"),K:x("eM"),u:x("qy"),N:x("h"),q:x("F7"),y:x("y"),z:x("@"),C:x("h6?"),H:x("~")}})();(function constants(){D.Fr=new B.RM(0,"valid")
D.a9g=new B.RM(1,"invalid")
D.Fs=new B.RM(2,"used")
D.a9i=new B.RM(3,"nothing")
D.bCK=new A.c6("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bD6=new A.c6("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_270",e:"endPart",h:b})})($__dart_deferred_initializers__,"mRLlJireF7Etu4JF33Zh9XIy1dA=");