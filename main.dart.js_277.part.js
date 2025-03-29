((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_277",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,P,I,Q,R,S,K,B={
b50(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$b50=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.c($.LX().e1("scan_ticket",A.y(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b50)
case 3:r=g
s=J.a2(r)
if(!J.m(s.i(r,"code"),200)){v=null
x=1
break}u=G.cCL(y.P.a(s.i(r,"ticket")))
if(s.a4(r,"order")&&s.i(r,"order")!=null)u.Q=G.czR(s.i(r,"order"))
if(s.a4(r,"products")&&s.i(r,"products")!=null){t=J.c5(y.j.a(s.i(r,"products")),new B.b51(),y.K)
u.z=A.H(t,!0,t.$ti.h("ab.E"))}if(s.a4(r,"spot")&&s.i(r,"spot")!=null)u.y=G.cmP(s.i(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b50,w)},
b55(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$b55=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.c($.LX().e1("update_ticket_to_used",A.y(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b55)
case 3:v=t.m(s.v(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b55,w)},
b51:function b51(){},
cYC(d,e){return new B.Du(e,d)},
Rp:function Rp(d,e){this.a=d
this.b=e},
Du:function Du(d,e){this.c=d
this.a=e},
ad2:function ad2(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
c7O:function c7O(){},
c7P:function c7P(d){this.a=d},
c7Q:function c7Q(d){this.a=d},
c7R:function c7R(){},
c7S:function c7S(){},
c7T:function c7T(){},
c7U:function c7U(){},
c7N:function c7N(d){this.a=d}},D,E,F,T,U,V,W,G,X,Y,Z,A_,L,H,A0
J=c[1]
A=c[0]
C=c[2]
M=c[231]
N=c[202]
O=c[230]
P=c[206]
I=c[212]
Q=c[92]
R=c[290]
S=c[98]
K=c[233]
B=a.updateHolder(c[22],B)
D=c[289]
E=c[36]
F=c[228]
T=c[63]
U=c[291]
V=c[288]
W=c[292]
G=c[78]
X=c[232]
Y=c[187]
Z=c[213]
A_=c[227]
L=c[210]
H=c[193]
A0=c[199]
B.Rp.prototype={
J(){return"ScanState."+this.b}}
B.Du.prototype={
M(){return new B.ad2(D.a2N,new Y.cn(A_.ar,$.a8()),E.czs(F.HA,A.a([C.m_],y.k)))}}
B.ad2.prototype={
l(){this.x.l()
var x=this.r
x.R$=$.a8()
x.T$=0
this.ai()},
aT(){var x=0,w=A.k(y.H),v=this,u
var $async$aT=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.c7()
if(v.a.c==null&&v.c.hr(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hr(y.u).f.f[0].a.xP(0,"scanCode")}$.Aj().afw("https://unpkg.com/@zxing/library@0.21.3")
A.eq(v.a.c)
v.Nh()
return A.i(null,w)}})
return A.j($async$aT,w)},
Nh(){var x=0,w=A.k(y.H),v=this,u,t
var $async$Nh=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(A.ii(A.cp(0,0,0,500,0),null,y.z),$async$Nh)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.c(T.NM(u,A.r("Enter Scan Code",null),null,A.r("Scan Code",null)),$async$Nh)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$Nh,w)},
a8r(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bU(new A.a3(F.I1,H.bc(D.b4W,q),q),q,q)
x=r.f
if(x===D.Cy)w=P.ja
else if(x===D.a2L)w=F.IZ
else{if(x!==D.Cz)return C.aa
w=V.pH}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.X(u).h("O<1,a3>")
v.push(A.am(A.H(new A.O(u,new B.c7O(),t),!0,t.h("ab.E")),C.M,C.f,C.h,q,C.l))}v.push(L.ak)
u=r.e.Q.a00()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.W(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.a4J,C.b7,q,q,q,q))
x=A.a([A.bU(A.am(v,C.i,C.f,C.h,q,C.l),q,q),L.ak,A.bp(w,C.p,q,30),Z.a3],x)
if(r.f===D.Cy)x.push(A.dk(!1,H.bc(D.b4y,q),q,q,q,q,q,q,r.gaXy(),q,q))
return new A.a3(I.aZ,A.am(x,C.i,C.f,C.h,q,C.l),q)},
A(d){var x=this,w=null,v=x.e==null?S.bFO(d):x.a0R(x.f),u=A.c1(w,w,w,w,w,w,A.bp(O.hK,C.cs,w,w),w,w,w,new B.c7P(d),w,w,w,w,w),t=y.p
return N.f2(w,v,A.jo(!0,new A.ct(C.af,w,C.ad,C.z,A.a([A.am(A.a([new A.a3(I.aZ,A.aw(A.a([u,A.bJ(A.W("",w,w,w,w,w,w,w,A.aB(w,w,C.cs,w,w,w,w,w,w,w,w,20,w,w,C.a4,w,w,!0,w,w,w,w,w,w,w,w),C.b7,w,w,w,w),1,w)],t),C.i,C.f,C.h,0,w),w),x.a8r(),A.bJ(E.czr(x.x,M.FC,new B.c7Q(x)),1,w)],t),C.i,C.f,C.h,w,C.l)],t),w),!0,C.U,!0,!0),w,w,w,w,w)},
vT(d){return this.aLg(d)},
aLg(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$vT=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.c(B.b50(d,t),$async$vT)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.Cy
E.pU()
u.B(new B.c7R())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a2L
E.pU()
E.pU()
u.B(new B.c7S())
x=1
break}else if(s&&t.e==="used"){u.f=D.Cz
E.pU()
E.pU()
u.B(new B.c7T())
x=1
break}}u.f=D.a2N
u.B(new B.c7U())
case 1:return A.i(v,w)}})
return A.j($async$vT,w)},
T_(){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$T_=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.c(B.b55(s,t),$async$T_)
case 3:if(e){u.B(new B.c7N(u))
E.pU()}else{E.pU()
E.pU()
u.c.ae(y.q).f.agh(Q.cBX(null,null,null,null,null,C.z,null,H.bc(A.W("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,R.HQ,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$T_,w)},
a0R(d){var x
switch(d.a){case 0:return X.XX
case 2:return F.XY
case 1:return K.lh
case 3:x=this.c
x.toString
return A.C(x).ax.a===C.t?$.iO():$.qJ()}return K.lh}}
var z=a.updateTypes(["T<~>()"])
B.b51.prototype={
$1(d){return A.cpo(d)},
$S:199}
B.c7O.prototype={
$1(d){var x=null
return new A.a3(U.I2,A.W(d.lF(),x,x,x,x,x,x,x,W.DM,x,x,x,x,x),x)},
$S:207}
B.c7P.prototype={
$0(){A0.eX(this.a,!1).f.eB(null)},
$S:0}
B.c7Q.prototype={
$1(d){return this.aGW(d)},
aGW(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=E.cyA(d.a)
if(s==null){x=1
break}t=s.z
A.h9().$1(t)
x=3
return A.c(u.a.vT(J.ap(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:347}
B.c7R.prototype={
$0(){},
$S:0}
B.c7S.prototype={
$0(){},
$S:0}
B.c7T.prototype={
$0(){},
$S:0}
B.c7U.prototype={
$0(){},
$S:0}
B.c7N.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.Cz},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.ad2.prototype,"gaXy","T_",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bC,[B.b51,B.c7O,B.c7Q])
w(B.Rp,A.e3)
w(B.Du,A.F)
w(B.ad2,A.K)
x(A.cj,[B.c7P,B.c7R,B.c7S,B.c7T,B.c7U,B.c7N])})()
A.bl(b.typeUniverse,JSON.parse('{"Du":{"F":[],"d":[]},"ad2":{"K":["Du"]}}'))
var y=(function rtii(){var x=A.z
return{k:x("q<jd>"),p:x("q<d>"),j:x("A<@>"),P:x("ae<e,@>"),K:x("hw"),u:x("qm"),N:x("e"),q:x("EP"),y:x("x"),z:x("@"),C:x("hk?"),H:x("~")}})();(function constants(){D.Cy=new B.Rp(0,"valid")
D.a2L=new B.Rp(1,"invalid")
D.Cz=new B.Rp(2,"used")
D.a2N=new B.Rp(3,"nothing")
D.b4y=new A.c0("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4W=new A.c0("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_277",e:"endPart",h:b})})($__dart_deferred_initializers__,"4lnXrG6j/thCZ7+KWXZSIBxxwZA=");