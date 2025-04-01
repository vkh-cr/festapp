((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_278",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,P,I,Q,R,S,K,T,B={
b55(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$b55=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.c($.M2().e1("scan_ticket",A.y(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b55)
case 3:r=g
s=J.a2(r)
if(!J.m(s.i(r,"code"),200)){v=null
x=1
break}u=G.cDn(y.P.a(s.i(r,"ticket")))
if(s.a5(r,"order")&&s.i(r,"order")!=null)u.Q=G.cAL(s.i(r,"order"))
if(s.a5(r,"products")&&s.i(r,"products")!=null){t=J.c5(y.j.a(s.i(r,"products")),new B.b56(),y.K)
u.z=A.H(t,!0,t.$ti.h("ab.E"))}if(s.a5(r,"spot")&&s.i(r,"spot")!=null)u.y=G.cnI(s.i(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b55,w)},
b5a(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$b5a=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.c($.M2().e1("update_ticket_to_used",A.y(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b5a)
case 3:v=t.m(s.v(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b5a,w)},
b56:function b56(){},
cZl(d,e){return new B.Dg(e,d)},
Rk:function Rk(d,e){this.a=d
this.b=e},
Dg:function Dg(d,e){this.c=d
this.a=e},
ad2:function ad2(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
c7X:function c7X(){},
c7Y:function c7Y(d){this.a=d},
c7Z:function c7Z(d){this.a=d},
c8_:function c8_(){},
c80:function c80(){},
c81:function c81(){},
c82:function c82(){},
c7W:function c7W(d){this.a=d}},D,E,F,U,V,W,G,X,Y,Z,A_,L,H,A0
J=c[1]
A=c[0]
C=c[2]
M=c[230]
N=c[201]
O=c[229]
P=c[208]
I=c[204]
Q=c[91]
R=c[290]
S=c[97]
K=c[232]
T=c[291]
B=a.updateHolder(c[22],B)
D=c[289]
E=c[36]
F=c[227]
U=c[62]
V=c[288]
W=c[292]
G=c[77]
X=c[231]
Y=c[187]
Z=c[213]
A_=c[226]
L=c[211]
H=c[192]
A0=c[198]
B.Rk.prototype={
J(){return"ScanState."+this.b}}
B.Dg.prototype={
M(){return new B.ad2(D.a2v,new Y.cm(A_.ar,$.a8()),E.cAm(F.HA,A.a([C.m_],y.k)))}}
B.ad2.prototype={
l(){this.x.l()
var x=this.r
x.P$=$.a8()
x.R$=0
this.ag()},
aT(){var x=0,w=A.k(y.H),v=this,u
var $async$aT=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.c6()
if(v.a.c==null&&v.c.hr(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hr(y.u).f.f[0].a.xN(0,"scanCode")}$.Ai().afA("https://unpkg.com/@zxing/library@0.21.3")
A.ek(v.a.c)
v.Ni()
return A.i(null,w)}})
return A.j($async$aT,w)},
Ni(){var x=0,w=A.k(y.H),v=this,u,t
var $async$Ni=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(A.ik(A.cn(0,0,0,500,0),null,y.z),$async$Ni)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.c(U.NS(u,A.r("Enter Scan Code",null),null,A.r("Scan Code",null)),$async$Ni)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$Ni,w)},
a8u(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bV(new A.a3(F.I1,H.bc(D.b49,q),q),q,q)
x=r.f
if(x===D.Cp)w=P.jb
else if(x===D.a2t)w=F.IY
else{if(x!==D.Cq)return C.ac
w=V.pF}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.X(u).h("O<1,a3>")
v.push(A.am(A.H(new A.O(u,new B.c7X(),t),!0,t.h("ab.E")),C.L,C.f,C.h,q,C.l))}v.push(L.ak)
u=r.e.Q.a01()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.W(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.a4s,C.b8,q,q,q,q))
x=A.a([A.bV(A.am(v,C.i,C.f,C.h,q,C.l),q,q),L.ak,A.bq(w,C.p,q,30),Z.a3],x)
if(r.f===D.Cp)x.push(A.dk(!1,H.bc(D.b3M,q),q,q,q,q,q,q,r.gaXN(),q,q))
return new A.a3(I.aZ,A.am(x,C.i,C.f,C.h,q,C.l),q)},
A(d){var x=this,w=null,v=x.e==null?S.bE7(d):x.a0T(x.f),u=A.c1(w,w,w,w,w,w,A.bq(O.hK,C.ck,w,w),w,w,w,new B.c7Y(d),w,w,w,w,w),t=y.p
return N.f2(w,v,A.jm(!0,new A.cp(C.af,w,C.ab,C.y,A.a([A.am(A.a([new A.a3(I.aZ,A.aw(A.a([u,A.bF(A.W("",w,w,w,w,w,w,w,A.aC(w,w,C.ck,w,w,w,w,w,w,w,w,20,w,w,C.a4,w,w,!0,w,w,w,w,w,w,w,w),C.b8,w,w,w,w),1,w)],t),C.i,C.f,C.h,0,w),w),x.a8u(),A.bF(E.cAl(x.x,M.FA,new B.c7Z(x)),1,w)],t),C.i,C.f,C.h,w,C.l)],t),w),!0,C.U,!0,!0),w,w,w,w,w)},
vU(d){return this.aLs(d)},
aLs(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$vU=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.c(B.b55(d,t),$async$vU)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.Cp
E.pU()
u.B(new B.c8_())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a2t
E.pU()
E.pU()
u.B(new B.c80())
x=1
break}else if(s&&t.e==="used"){u.f=D.Cq
E.pU()
E.pU()
u.B(new B.c81())
x=1
break}}u.f=D.a2v
u.B(new B.c82())
case 1:return A.i(v,w)}})
return A.j($async$vU,w)},
T1(){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$T1=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.c(B.b5a(s,t),$async$T1)
case 3:if(e){u.B(new B.c7W(u))
E.pU()}else{E.pU()
E.pU()
u.c.ac(y.q).f.agm(Q.cCz(null,null,null,null,null,C.y,null,H.bc(A.W("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,R.HQ,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$T1,w)},
a0T(d){var x
switch(d.a){case 0:return X.XW
case 2:return F.XX
case 1:return K.lh
case 3:x=this.c
x.toString
return A.C(x).ax.a===C.t?$.iP():$.qK()}return K.lh}}
var z=a.updateTypes(["U<~>()"])
B.b56.prototype={
$1(d){return A.cqa(d)},
$S:179}
B.c7X.prototype={
$1(d){var x=null
return new A.a3(T.zx,A.W(d.lH(),x,x,x,x,x,x,x,W.DD,x,x,x,x,x),x)},
$S:361}
B.c7Y.prototype={
$0(){A0.eX(this.a,!1).f.eF(null)},
$S:0}
B.c7Z.prototype={
$1(d){return this.aH8(d)},
aH8(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=E.czu(d.a)
if(s==null){x=1
break}t=s.z
A.ha().$1(t)
x=3
return A.c(u.a.vU(J.ap(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:232}
B.c8_.prototype={
$0(){},
$S:0}
B.c80.prototype={
$0(){},
$S:0}
B.c81.prototype={
$0(){},
$S:0}
B.c82.prototype={
$0(){},
$S:0}
B.c7W.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.Cq},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.ad2.prototype,"gaXN","T1",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bC,[B.b56,B.c7X,B.c7Z])
w(B.Rk,A.e4)
w(B.Dg,A.F)
w(B.ad2,A.K)
x(A.ck,[B.c7Y,B.c8_,B.c80,B.c81,B.c82,B.c7W])})()
A.bl(b.typeUniverse,JSON.parse('{"Dg":{"F":[],"d":[]},"ad2":{"K":["Dg"]}}'))
var y=(function rtii(){var x=A.z
return{k:x("q<jc>"),p:x("q<d>"),j:x("A<@>"),P:x("ae<e,@>"),K:x("hz"),u:x("ql"),N:x("e"),q:x("ES"),y:x("x"),z:x("@"),C:x("hl?"),H:x("~")}})();(function constants(){D.Cp=new B.Rk(0,"valid")
D.a2t=new B.Rk(1,"invalid")
D.Cq=new B.Rk(2,"used")
D.a2v=new B.Rk(3,"nothing")
D.b3M=new A.c0("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b49=new A.c0("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_278",e:"endPart",h:b})})($__dart_deferred_initializers__,"Gae/QP3frz1UnOM40mqM7tsKqP8=");