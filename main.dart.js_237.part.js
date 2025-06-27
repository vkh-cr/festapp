((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_237",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,G,M,N,I,O,B={
bd2(d,e){return B.dhR(d,e)},
dhR(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$bd2=A.f(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.Ov().d4("scan_ticket",A.x(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bd2)
case 3:r=g
s=J.a0(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=H.d0f(y.P.a(s.h(r,"ticket")))
if(s.a3(r,"order")&&s.h(r,"order")!=null)u.Q=H.cYE(s.h(r,"order"))
if(s.a3(r,"products")&&s.h(r,"products")!=null){t=J.bf(y.j.a(s.h(r,"products")),new B.bd3(),y.K)
t=A.B(t,t.$ti.i("a2.E"))
u.z=t}if(s.a3(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cKO(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bd2,w)},
bd7(d,e){return B.dhW(d,e)},
dhW(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$bd7=A.f(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.Ov().d4("update_ticket_to_used",A.x(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bd7)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bd7,w)},
bd3:function bd3(){},
dqZ(d,e){return new B.Fu(e,d)},
U5:function U5(d,e){this.a=d
this.b=e},
Fu:function Fu(d,e){this.c=d
this.a=e},
ah7:function ah7(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
csc:function csc(){},
csd:function csd(d){this.a=d},
cse:function cse(d){this.a=d},
csf:function csf(){},
csg:function csg(){},
csh:function csh(){},
csi:function csi(){},
csb:function csb(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W,K
J=c[1]
A=c[0]
C=c[2]
L=c[166]
G=c[165]
M=c[96]
N=c[238]
I=c[185]
O=c[239]
B=a.updateHolder(c[22],B)
D=c[237]
E=c[36]
F=c[181]
P=c[59]
Q=c[182]
R=c[235]
S=c[240]
T=c[98]
H=c[77]
U=c[184]
V=c[171]
W=c[167]
K=c[169]
B.U5.prototype={
I(){return"ScanState."+this.b}}
B.Fu.prototype={
N(){return new B.ah7(D.abO,new A.cm(C.ay,$.a8()),E.cY9(F.Ms,A.a([C.o8],y.k)))}}
B.ah7.prototype={
l(){this.x.l()
var x=this.r
x.a7$=$.a8()
x.Y$=0
this.ai()},
aZ(){var x=0,w=A.l(y.H),v=this,u
var $async$aZ=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.c8()
if(v.a.c==null&&J.fK(v.c.hA(y.u).f.r)){u=v.a
u.toString
u.c=J.v(v.c.hA(y.u).f.r,0).a.wl(0,"scanCode")}$.yJ().ak0("https://unpkg.com/@zxing/library@0.21.3")
A.cL(v.a.c)
v.P8()
return A.j(null,w)}})
return A.k($async$aZ,w)},
P8(){var x=0,w=A.l(y.H),v=this,u,t
var $async$P8=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hk(A.bU(0,0,0,500,0,0),null,y.z),$async$P8)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.Qq(u,A.q("Enter Scan Code",null),null,A.q("Scan Code",null)),$async$P8)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$P8,w)},
acg(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bI(new A.a1(F.MR,G.bA(D.bK1,q),q),q,q)
x=r.f
if(x===D.H_)w=V.j4
else if(x===D.abM)w=Q.DE
else{if(x!==D.H0)return C.a3
w=R.tf}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.T(u).i("I<1,a1>")
u=A.B(new A.I(u,new B.csc(),t),t.i("a2.E"))
v.push(A.ae(u,C.I,C.f,C.i,0,q,C.m))}v.push(C.aj)
u=r.e.Q.a30()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.L(u+"   "+A.n(s)+"   "+t,q,q,q,q,q,q,q,F.Im,C.aZ,q,q,q,q))
x=A.a([A.bI(A.ae(v,C.j,C.f,C.i,0,q,C.m),q,q),C.aj,A.aS(w,C.n,q,30),C.a1],x)
if(r.f===D.H_)x.push(A.dA(!1,G.bA(D.bJI,q),q,q,q,q,q,q,r.gb47(),q,q))
return new A.a1(K.aT,A.ae(x,C.j,C.f,C.i,0,q,C.m),q)},
B(d){var x,w,v=this,u=null,t=v.e==null?A.bQB(d):v.a3V(v.f),s=A.bv(C.as)
s=A.bM(u,u,u,u,u,u,A.aS(C.j3,new A.bn(s.a,s.b,s.c,0.8).bl(),u,u),u,u,u,new B.csd(d),u,u,u,u,u)
x=A.bv(C.as)
w=y.p
return W.fc(u,t,A.j8(!0,new A.ch(C.ad,u,C.ac,C.v,A.a([A.ae(A.a([new A.a1(K.aT,A.as(A.a([s,A.bb(A.L("",u,u,u,u,u,u,u,A.ag(u,u,new A.bn(x.a,x.b,x.c,0.8).bl(),u,u,u,u,u,u,u,u,20,u,u,C.V,u,u,!0,u,u,u,u,u,u,u,u),C.aZ,u,u,u,u),1,u)],w),C.j,C.f,C.i,0,u),u),v.acg(),A.bb(E.cY8(v.x,C.Bo,new B.cse(v)),1,u)],w),C.j,C.f,C.i,0,u,C.m)],w),u),!0,C.N,!0,!0),u,u,u,u,u)},
ws(d){return this.aRR(d)},
aRR(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$ws=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bd2(d,t),$async$ws)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.H_
E.qS()
u.v(new B.csf())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.abM
E.qS()
E.qS()
u.v(new B.csg())
x=1
break}else if(s&&t.e==="used"){u.f=D.H0
E.qS()
E.qS()
u.v(new B.csh())
x=1
break}}u.f=D.abO
u.v(new B.csi())
case 1:return A.j(v,w)}})
return A.k($async$ws,w)},
V6(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$V6=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bd7(s,t),$async$V6)
case 3:if(e){u.v(new B.csb(u))
E.qS()}else{E.qS()
E.qS()
u.c.ac(y.q).f.akP(M.d_m(null,null,null,null,null,C.v,null,G.bA(A.L("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.ME,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$V6,w)},
a3V(d){var x
switch(d.a){case 0:return U.a64
case 2:return F.a65
case 1:return I.lb
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.r?$.i4():$.pa()}return I.lb}}
var z=a.updateTypes(["X<~>()"])
B.bd3.prototype={
$1(d){return A.a6B(d)},
$S:125}
B.csc.prototype={
$1(d){var x=null
return new A.a1(O.CK,A.L(d.kF(),x,x,x,x,x,x,x,S.In,x,x,x,x,x),x)},
$S:397}
B.csd.prototype={
$0(){L.fj(this.a,!1).f.dU(null)},
$S:0}
B.cse.prototype={
$1(d){return this.aNl(d)},
aNl(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=T.RW(d.a)
if(s==null){x=1
break}t=s.z
A.hG().$1(t)
x=3
return A.d(u.a.ws(J.ar(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:455}
B.csf.prototype={
$0(){},
$S:0}
B.csg.prototype={
$0(){},
$S:0}
B.csh.prototype={
$0(){},
$S:0}
B.csi.prototype={
$0(){},
$S:0}
B.csb.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.H0},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.ah7.prototype,"gb47","V6",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.ce,[B.bd3,B.csc,B.cse])
w(B.U5,A.fm)
w(B.Fu,A.K)
w(B.ah7,A.P)
x(A.cY,[B.csd,B.csf,B.csg,B.csh,B.csi,B.csb])})()
A.cc(b.typeUniverse,JSON.parse('{"Fu":{"K":[],"e":[]},"ah7":{"P":["Fu"]}}'))
var y=(function rtii(){var x=A.E
return{k:x("u<jO>"),p:x("u<e>"),j:x("C<@>"),P:x("A<h,@>"),K:x("f1"),u:x("rq"),N:x("h"),q:x("H4"),y:x("y"),z:x("@"),C:x("hD?"),H:x("~")}})();(function constants(){D.H_=new B.U5(0,"valid")
D.abM=new B.U5(1,"invalid")
D.H0=new B.U5(2,"used")
D.abO=new B.U5(3,"nothing")
D.bJI=new A.cx("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bK1=new A.cx("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_237",e:"endPart",h:b})})($__dart_deferred_initializers__,"wwYX4kw+7xhhMQcApGtscwYCzDc=");