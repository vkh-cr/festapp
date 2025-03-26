((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_272",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,I,P,Q,R,K,B={
b52(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$b52=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.c($.M_().e3("scan_ticket",A.y(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b52)
case 3:r=g
s=J.a2(r)
if(!J.m(s.i(r,"code"),200)){v=null
x=1
break}u=G.cCP(y.P.a(s.i(r,"ticket")))
if(s.a3(r,"order")&&s.i(r,"order")!=null)u.Q=G.cA0(s.i(r,"order"))
if(s.a3(r,"products")&&s.i(r,"products")!=null){t=J.c7(y.j.a(s.i(r,"products")),new B.b53(),y.K)
u.z=A.H(t,!0,t.$ti.h("a9.E"))}if(s.a3(r,"spot")&&s.i(r,"spot")!=null)u.y=G.cn3(s.i(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b52,w)},
b57(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$b57=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.c($.M_().e3("update_ticket_to_used",A.y(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b57)
case 3:v=t.m(s.v(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b57,w)},
b53:function b53(){},
cYU(d,e){return new B.Dz(e,d)},
Rn:function Rn(d,e){this.a=d
this.b=e},
Dz:function Dz(d,e){this.c=d
this.a=e},
ad2:function ad2(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
c8_:function c8_(){},
c80:function c80(d){this.a=d},
c81:function c81(d){this.a=d},
c82:function c82(){},
c83:function c83(){},
c84:function c84(){},
c85:function c85(){},
c7Z:function c7Z(d){this.a=d}},D,E,F,S,T,U,V,G,W,X,Y,Z,L,H,A_,A0
J=c[1]
A=c[0]
C=c[2]
M=c[202]
N=c[230]
O=c[206]
I=c[212]
P=c[92]
Q=c[290]
R=c[98]
K=c[233]
B=a.updateHolder(c[22],B)
D=c[289]
E=c[36]
F=c[228]
S=c[62]
T=c[291]
U=c[288]
V=c[292]
G=c[78]
W=c[232]
X=c[187]
Y=c[213]
Z=c[227]
L=c[210]
H=c[193]
A_=c[199]
A0=c[231]
B.Rn.prototype={
J(){return"ScanState."+this.b}}
B.Dz.prototype={
M(){return new B.ad2(D.a2K,new X.d_(Z.aU,$.ad()),E.czC(F.Hx,A.a([C.m1],y.k)))}}
B.ad2.prototype={
l(){this.x.l()
var x=this.r
x.U$=$.ad()
x.W$=0
this.ag()},
aT(){var x=0,w=A.k(y.H),v=this,u
var $async$aT=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.c8()
if(v.a.c==null&&v.c.hr(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hr(y.u).f.f[0].a.xR(0,"scanCode")}$.Ao().afI("https://unpkg.com/@zxing/library@0.21.3")
A.eh(v.a.c)
v.Nm()
return A.i(null,w)}})
return A.j($async$aT,w)},
Nm(){var x=0,w=A.k(y.H),v=this,u,t
var $async$Nm=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(A.ik(A.cn(0,0,0,500,0),null,y.z),$async$Nm)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.c(S.NQ(u,A.t("Enter Scan Code",null),null,A.t("Scan Code",null)),$async$Nm)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$Nm,w)},
a8B(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bU(new A.a3(F.HZ,H.bc(D.b4U,q),q),q,q)
x=r.f
if(x===D.Cu)w=O.ja
else if(x===D.a2I)w=F.IW
else{if(x!==D.Cv)return C.ab
w=U.pD}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.X(u).h("O<1,a3>")
v.push(A.am(A.H(new A.O(u,new B.c8_(),t),!0,t.h("a9.E")),C.L,C.f,C.h,q,C.l))}v.push(L.ar)
u=r.e.Q.a08()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.W(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.a4G,C.b6,q,q,q,q))
x=A.a([A.bU(A.am(v,C.i,C.f,C.h,q,C.l),q,q),L.ar,A.bp(w,C.p,q,30),Y.a5],x)
if(r.f===D.Cu)x.push(A.dp(!1,H.bc(D.b4w,q),q,q,q,q,q,q,r.gaXK(),q,q))
return new A.a3(I.aZ,A.am(x,C.i,C.f,C.h,q,C.l),q)},
A(d){var x=this,w=null,v=x.e==null?R.bG_(d):x.a1_(x.f),u=A.c1(w,w,w,w,w,w,A.bp(N.hL,C.cr,w,w),w,w,w,new B.c80(d),w,w,w,w,w),t=y.p
return M.f2(w,v,A.jn(!0,new A.cr(C.ae,w,C.ac,C.z,A.a([A.am(A.a([new A.a3(I.aZ,A.aw(A.a([u,A.bJ(A.W("",w,w,w,w,w,w,w,A.aB(w,w,C.cr,w,w,w,w,w,w,w,w,20,w,w,C.a3,w,w,!0,w,w,w,w,w,w,w,w),C.b6,w,w,w,w),1,w)],t),C.i,C.f,C.h,0,w),w),x.a8B(),A.bJ(E.czB(x.x,A0.Fy,new B.c81(x)),1,w)],t),C.i,C.f,C.h,w,C.l)],t),w),!0,C.U,!0,!0),w,w,w,w,w)},
vV(d){return this.aLw(d)},
aLw(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$vV=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.c(B.b52(d,t),$async$vV)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.Cu
E.pU()
u.B(new B.c82())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a2I
E.pU()
E.pU()
u.B(new B.c83())
x=1
break}else if(s&&t.e==="used"){u.f=D.Cv
E.pU()
E.pU()
u.B(new B.c84())
x=1
break}}u.f=D.a2K
u.B(new B.c85())
case 1:return A.i(v,w)}})
return A.j($async$vV,w)},
T4(){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$T4=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.c(B.b57(s,t),$async$T4)
case 3:if(e){u.B(new B.c7Z(u))
E.pU()}else{E.pU()
E.pU()
u.c.ad(y.q).f.agt(P.cC3(null,null,null,null,null,C.z,null,H.bc(A.W("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,Q.HN,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$T4,w)},
a1_(d){var x
switch(d.a){case 0:return W.XV
case 2:return F.XW
case 1:return K.lj
case 3:x=this.c
x.toString
return A.C(x).ax.a===C.t?$.iP():$.qJ()}return K.lj}}
var z=a.updateTypes(["R<~>()"])
B.b53.prototype={
$1(d){return A.cpE(d)},
$S:181}
B.c8_.prototype={
$1(d){var x=null
return new A.a3(T.I_,A.W(d.lH(),x,x,x,x,x,x,x,V.DI,x,x,x,x,x),x)},
$S:358}
B.c80.prototype={
$0(){A_.eX(this.a,!1).f.eC(null)},
$S:0}
B.c81.prototype={
$1(d){return this.aH9(d)},
aH9(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=E.cyL(d.a)
if(s==null){x=1
break}t=s.z
A.h8().$1(t)
x=3
return A.c(u.a.vV(J.ap(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:223}
B.c82.prototype={
$0(){},
$S:0}
B.c83.prototype={
$0(){},
$S:0}
B.c84.prototype={
$0(){},
$S:0}
B.c85.prototype={
$0(){},
$S:0}
B.c7Z.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.Cv},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.ad2.prototype,"gaXK","T4",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bB,[B.b53,B.c8_,B.c81])
w(B.Rn,A.e4)
w(B.Dz,A.F)
w(B.ad2,A.K)
x(A.ci,[B.c80,B.c82,B.c83,B.c84,B.c85,B.c7Z])})()
A.bl(b.typeUniverse,JSON.parse('{"Dz":{"F":[],"d":[]},"ad2":{"K":["Dz"]}}'))
var y=(function rtii(){var x=A.z
return{k:x("q<jb>"),p:x("q<d>"),j:x("A<@>"),P:x("af<e,@>"),K:x("hs"),u:x("qn"),N:x("e"),q:x("EU"),y:x("x"),z:x("@"),C:x("hj?"),H:x("~")}})();(function constants(){D.Cu=new B.Rn(0,"valid")
D.a2I=new B.Rn(1,"invalid")
D.Cv=new B.Rn(2,"used")
D.a2K=new B.Rn(3,"nothing")
D.b4w=new A.c0("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4U=new A.c0("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_272",e:"endPart",h:b})})($__dart_deferred_initializers__,"xjuciJxK7CninpLwpkwpwVYMhLQ=");