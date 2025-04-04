((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_282",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
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
break}u=G.cDp(y.P.a(s.i(r,"ticket")))
if(s.a4(r,"order")&&s.i(r,"order")!=null)u.Q=G.cAP(s.i(r,"order"))
if(s.a4(r,"products")&&s.i(r,"products")!=null){t=J.c5(y.j.a(s.i(r,"products")),new B.b56(),y.K)
u.z=A.H(t,!0,t.$ti.h("ab.E"))}if(s.a4(r,"spot")&&s.i(r,"spot")!=null)u.y=G.cnN(s.i(r,"spot"))
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
cYG(d,e){return new B.Df(e,d)},
Rl:function Rl(d,e){this.a=d
this.b=e},
Df:function Df(d,e){this.c=d
this.a=e},
ad1:function ad1(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
c80:function c80(){},
c81:function c81(d){this.a=d},
c82:function c82(d){this.a=d},
c83:function c83(){},
c84:function c84(){},
c85:function c85(){},
c86:function c86(){},
c8_:function c8_(d){this.a=d}},D,E,F,U,V,W,G,X,Y,Z,A_,L,H,A0
J=c[1]
A=c[0]
C=c[2]
M=c[229]
N=c[200]
O=c[228]
P=c[207]
I=c[203]
Q=c[90]
R=c[289]
S=c[96]
K=c[231]
T=c[290]
B=a.updateHolder(c[22],B)
D=c[288]
E=c[36]
F=c[226]
U=c[62]
V=c[287]
W=c[291]
G=c[76]
X=c[230]
Y=c[186]
Z=c[212]
A_=c[225]
L=c[210]
H=c[191]
A0=c[197]
B.Rl.prototype={
J(){return"ScanState."+this.b}}
B.Df.prototype={
M(){return new B.ad1(D.a2v,new Y.cm(A_.ar,$.a8()),E.cAr(F.HA,A.a([C.m_],y.k)))}}
B.ad1.prototype={
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
u.c=v.c.hr(y.u).f.f[0].a.xN(0,"scanCode")}$.Aj().afB("https://unpkg.com/@zxing/library@0.21.3")
A.ek(v.a.c)
v.Ni()
return A.i(null,w)}})
return A.j($async$aT,w)},
Ni(){var x=0,w=A.k(y.H),v=this,u,t
var $async$Ni=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(A.i3(A.co(0,0,0,500,0),null,y.z),$async$Ni)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.c(U.NT(u,A.r("Enter Scan Code",null),null,A.r("Scan Code",null)),$async$Ni)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$Ni,w)},
a8v(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bS(new A.a3(F.I1,H.bc(D.b4a,q),q),q,q)
x=r.f
if(x===D.Cp)w=P.jb
else if(x===D.a2t)w=F.IY
else{if(x!==D.Cq)return C.ac
w=V.pF}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.X(u).h("O<1,a3>")
v.push(A.am(A.H(new A.O(u,new B.c80(),t),!0,t.h("ab.E")),C.K,C.f,C.h,q,C.l))}v.push(L.ak)
u=r.e.Q.a02()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.W(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.a4s,C.b8,q,q,q,q))
x=A.a([A.bS(A.am(v,C.i,C.f,C.h,q,C.l),q,q),L.ak,A.bq(w,C.p,q,30),Z.a3],x)
if(r.f===D.Cp)x.push(A.dl(!1,H.bc(D.b3N,q),q,q,q,q,q,q,r.gaXG(),q,q))
return new A.a3(I.aZ,A.am(x,C.i,C.f,C.h,q,C.l),q)},
A(d){var x=this,w=null,v=x.e==null?S.bE7(d):x.a0U(x.f),u=A.c1(w,w,w,w,w,w,A.bq(O.hK,C.ck,w,w),w,w,w,new B.c81(d),w,w,w,w,w),t=y.p
return N.f2(w,v,A.jl(!0,new A.cq(C.af,w,C.ab,C.y,A.a([A.am(A.a([new A.a3(I.aZ,A.aw(A.a([u,A.bF(A.W("",w,w,w,w,w,w,w,A.aC(w,w,C.ck,w,w,w,w,w,w,w,w,20,w,w,C.a4,w,w,!0,w,w,w,w,w,w,w,w),C.b8,w,w,w,w),1,w)],t),C.i,C.f,C.h,0,w),w),x.a8v(),A.bF(E.cAq(x.x,M.FA,new B.c82(x)),1,w)],t),C.i,C.f,C.h,w,C.l)],t),w),!0,C.U,!0,!0),w,w,w,w,w)},
vU(d){return this.aLt(d)},
aLt(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
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
u.B(new B.c83())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a2t
E.pU()
E.pU()
u.B(new B.c84())
x=1
break}else if(s&&t.e==="used"){u.f=D.Cq
E.pU()
E.pU()
u.B(new B.c85())
x=1
break}}u.f=D.a2v
u.B(new B.c86())
case 1:return A.i(v,w)}})
return A.j($async$vU,w)},
T0(){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$T0=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.c(B.b5a(s,t),$async$T0)
case 3:if(e){u.B(new B.c8_(u))
E.pU()}else{E.pU()
E.pU()
u.c.ac(y.q).f.agn(Q.cCB(null,null,null,null,null,C.y,null,H.bc(A.W("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,R.HQ,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$T0,w)},
a0U(d){var x
switch(d.a){case 0:return X.XW
case 2:return F.XX
case 1:return K.lh
case 3:x=this.c
x.toString
return A.C(x).ax.a===C.t?$.iP():$.qJ()}return K.lh}}
var z=a.updateTypes(["U<~>()"])
B.b56.prototype={
$1(d){return A.cqf(d)},
$S:184}
B.c80.prototype={
$1(d){var x=null
return new A.a3(T.zx,A.W(d.lH(),x,x,x,x,x,x,x,W.DD,x,x,x,x,x),x)},
$S:336}
B.c81.prototype={
$0(){A0.eX(this.a,!1).f.eF(null)},
$S:0}
B.c82.prototype={
$1(d){return this.aH9(d)},
aH9(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=E.czz(d.a)
if(s==null){x=1
break}t=s.z
A.hb().$1(t)
x=3
return A.c(u.a.vU(J.ap(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:349}
B.c83.prototype={
$0(){},
$S:0}
B.c84.prototype={
$0(){},
$S:0}
B.c85.prototype={
$0(){},
$S:0}
B.c86.prototype={
$0(){},
$S:0}
B.c8_.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.Cq},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.ad1.prototype,"gaXG","T0",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bC,[B.b56,B.c80,B.c82])
w(B.Rl,A.e4)
w(B.Df,A.F)
w(B.ad1,A.K)
x(A.ck,[B.c81,B.c83,B.c84,B.c85,B.c86,B.c8_])})()
A.bo(b.typeUniverse,JSON.parse('{"Df":{"F":[],"d":[]},"ad1":{"K":["Df"]}}'))
var y=(function rtii(){var x=A.z
return{k:x("q<jb>"),p:x("q<d>"),j:x("A<@>"),P:x("ae<e,@>"),K:x("hA"),u:x("ql"),N:x("e"),q:x("EQ"),y:x("x"),z:x("@"),C:x("hl?"),H:x("~")}})();(function constants(){D.Cp=new B.Rl(0,"valid")
D.a2t=new B.Rl(1,"invalid")
D.Cq=new B.Rl(2,"used")
D.a2v=new B.Rl(3,"nothing")
D.b3N=new A.c0("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4a=new A.c0("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_282",e:"endPart",h:b})})($__dart_deferred_initializers__,"AzyD4pAZmDAnujjmvv+M4ViOUx8=");