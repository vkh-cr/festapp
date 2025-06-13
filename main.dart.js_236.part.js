((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_236",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,G,M,N,I,O,B={
bcA(d,e){return B.dhd(d,e)},
dhd(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$bcA=A.f(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.Ou().d7("scan_ticket",A.x(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bcA)
case 3:r=g
s=J.a0(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=H.d_Q(y.P.a(s.h(r,"ticket")))
if(s.a3(r,"order")&&s.h(r,"order")!=null)u.Q=H.cYe(s.h(r,"order"))
if(s.a3(r,"products")&&s.h(r,"products")!=null){t=J.bf(y.j.a(s.h(r,"products")),new B.bcB(),y.K)
t=A.B(t,t.$ti.i("a2.E"))
u.z=t}if(s.a3(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cKu(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bcA,w)},
bcF(d,e){return B.dhi(d,e)},
dhi(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$bcF=A.f(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.Ou().d7("update_ticket_to_used",A.x(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bcF)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bcF,w)},
bcB:function bcB(){},
dqf(d,e){return new B.Fs(e,d)},
U3:function U3(d,e){this.a=d
this.b=e},
Fs:function Fs(d,e){this.c=d
this.a=e},
ah5:function ah5(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cs3:function cs3(){},
cs4:function cs4(d){this.a=d},
cs5:function cs5(d){this.a=d},
cs6:function cs6(){},
cs7:function cs7(){},
cs8:function cs8(){},
cs9:function cs9(){},
cs2:function cs2(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W,K
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
B.U3.prototype={
I(){return"ScanState."+this.b}}
B.Fs.prototype={
M(){return new B.ah5(D.abO,new A.cl(C.ay,$.a8()),E.cXK(F.Ms,A.a([C.o7],y.k)))}}
B.ah5.prototype={
l(){this.x.l()
var x=this.r
x.a7$=$.a8()
x.Y$=0
this.ai()},
b_(){var x=0,w=A.l(y.H),v=this,u
var $async$b_=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.ca()
if(v.a.c==null&&J.h_(v.c.hz(y.u).f.r)){u=v.a
u.toString
u.c=J.v(v.c.hz(y.u).f.r,0).a.wj(0,"scanCode")}$.yG().ajX("https://unpkg.com/@zxing/library@0.21.3")
A.cN(v.a.c)
v.P7()
return A.j(null,w)}})
return A.k($async$b_,w)},
P7(){var x=0,w=A.l(y.H),v=this,u,t
var $async$P7=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hi(A.bU(0,0,0,500,0,0),null,y.z),$async$P7)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.Qp(u,A.q("Enter Scan Code",null),null,A.q("Scan Code",null)),$async$P7)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$P7,w)},
acd(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bI(new A.a1(F.MR,G.bA(D.bJY,q),q),q,q)
x=r.f
if(x===D.H_)w=V.j3
else if(x===D.abM)w=Q.DD
else{if(x!==D.H0)return C.a3
w=R.tf}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.U(u).i("J<1,a1>")
u=A.B(new A.J(u,new B.cs3(),t),t.i("a2.E"))
v.push(A.ae(u,C.J,C.f,C.i,0,q,C.m))}v.push(C.ak)
u=r.e.Q.a2X()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.L(u+"   "+A.n(s)+"   "+t,q,q,q,q,q,q,q,F.Im,C.aZ,q,q,q,q))
x=A.a([A.bI(A.ae(v,C.j,C.f,C.i,0,q,C.m),q,q),C.ak,A.aS(w,C.n,q,30),C.a1],x)
if(r.f===D.H_)x.push(A.du(!1,G.bA(D.bJE,q),q,q,q,q,q,q,r.gb40(),q,q))
return new A.a1(K.aT,A.ae(x,C.j,C.f,C.i,0,q,C.m),q)},
B(d){var x,w,v=this,u=null,t=v.e==null?A.bQf(d):v.a3R(v.f),s=A.bu(C.as)
s=A.bM(u,u,u,u,u,u,A.aS(C.j2,new A.bn(s.a,s.b,s.c,0.8).bl(),u,u),u,u,u,new B.cs4(d),u,u,u,u,u)
x=A.bu(C.as)
w=y.p
return W.fc(u,t,A.jD(!0,new A.ch(C.ad,u,C.ac,C.v,A.a([A.ae(A.a([new A.a1(K.aT,A.ar(A.a([s,A.bb(A.L("",u,u,u,u,u,u,u,A.af(u,u,new A.bn(x.a,x.b,x.c,0.8).bl(),u,u,u,u,u,u,u,u,20,u,u,C.V,u,u,!0,u,u,u,u,u,u,u,u),C.aZ,u,u,u,u),1,u)],w),C.j,C.f,C.i,0,u),u),v.acd(),A.bb(E.cXJ(v.x,C.Bn,new B.cs5(v)),1,u)],w),C.j,C.f,C.i,0,u,C.m)],w),u),!0,C.P,!0,!0),u,u,u,u,u)},
wq(d){return this.aRK(d)},
aRK(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$wq=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bcA(d,t),$async$wq)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.H_
E.qQ()
u.v(new B.cs6())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.abM
E.qQ()
E.qQ()
u.v(new B.cs7())
x=1
break}else if(s&&t.e==="used"){u.f=D.H0
E.qQ()
E.qQ()
u.v(new B.cs8())
x=1
break}}u.f=D.abO
u.v(new B.cs9())
case 1:return A.j(v,w)}})
return A.k($async$wq,w)},
V5(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$V5=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bcF(s,t),$async$V5)
case 3:if(e){u.v(new B.cs2(u))
E.qQ()}else{E.qQ()
E.qQ()
u.c.ac(y.q).f.akL(M.cZX(null,null,null,null,null,C.v,null,G.bA(A.L("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.ME,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$V5,w)},
a3R(d){var x
switch(d.a){case 0:return U.a64
case 2:return F.a65
case 1:return I.lb
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.r?$.hT():$.p9()}return I.lb}}
var z=a.updateTypes(["X<~>()"])
B.bcB.prototype={
$1(d){return A.a6z(d)},
$S:112}
B.cs3.prototype={
$1(d){var x=null
return new A.a1(O.CJ,A.L(d.kE(),x,x,x,x,x,x,x,S.In,x,x,x,x,x),x)},
$S:357}
B.cs4.prototype={
$0(){L.ff(this.a,!1).f.dO(null)},
$S:0}
B.cs5.prototype={
$1(d){return this.aNe(d)},
aNe(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=T.RT(d.a)
if(s==null){x=1
break}t=s.z
A.hE().$1(t)
x=3
return A.d(u.a.wq(J.as(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:385}
B.cs6.prototype={
$0(){},
$S:0}
B.cs7.prototype={
$0(){},
$S:0}
B.cs8.prototype={
$0(){},
$S:0}
B.cs9.prototype={
$0(){},
$S:0}
B.cs2.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.H0},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.ah5.prototype,"gb40","V5",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.ce,[B.bcB,B.cs3,B.cs5])
w(B.U3,A.fm)
w(B.Fs,A.K)
w(B.ah5,A.P)
x(A.cY,[B.cs4,B.cs6,B.cs7,B.cs8,B.cs9,B.cs2])})()
A.c9(b.typeUniverse,JSON.parse('{"Fs":{"K":[],"e":[]},"ah5":{"P":["Fs"]}}'))
var y=(function rtii(){var x=A.E
return{k:x("u<jN>"),p:x("u<e>"),j:x("C<@>"),P:x("A<h,@>"),K:x("f1"),u:x("ro"),N:x("h"),q:x("H3"),y:x("y"),z:x("@"),C:x("hB?"),H:x("~")}})();(function constants(){D.H_=new B.U3(0,"valid")
D.abM=new B.U3(1,"invalid")
D.H0=new B.U3(2,"used")
D.abO=new B.U3(3,"nothing")
D.bJE=new A.cx("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJY=new A.cx("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_236",e:"endPart",h:b})})($__dart_deferred_initializers__,"f788emMJdj6hhWPbNFWNKZFGL/Y=");