((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_271",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,I,P,Q,R,K,B={
b4X(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$b4X=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.c($.LZ().e3("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b4X)
case 3:r=g
s=J.a2(r)
if(!J.m(s.i(r,"code"),200)){v=null
x=1
break}u=G.cCE(y.P.a(s.i(r,"ticket")))
if(s.a3(r,"order")&&s.i(r,"order")!=null)u.Q=G.czR(s.i(r,"order"))
if(s.a3(r,"products")&&s.i(r,"products")!=null){t=J.c7(y.j.a(s.i(r,"products")),new B.b4Y(),y.K)
u.z=A.H(t,!0,t.$ti.h("a9.E"))}if(s.a3(r,"spot")&&s.i(r,"spot")!=null)u.y=G.cmV(s.i(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b4X,w)},
b51(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$b51=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.c($.LZ().e3("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b51)
case 3:v=t.m(s.v(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b51,w)},
b4Y:function b4Y(){},
cYK(d,e){return new B.Dy(e,d)},
Rm:function Rm(d,e){this.a=d
this.b=e},
Dy:function Dy(d,e){this.c=d
this.a=e},
acY:function acY(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
c7Z:function c7Z(){},
c8_:function c8_(d){this.a=d},
c80:function c80(d){this.a=d},
c81:function c81(){},
c82:function c82(){},
c83:function c83(){},
c84:function c84(){},
c7Y:function c7Y(d){this.a=d}},D,E,F,S,T,U,V,G,W,X,Y,Z,L,H,A_,A0
J=c[1]
A=c[0]
C=c[2]
M=c[201]
N=c[229]
O=c[205]
I=c[211]
P=c[92]
Q=c[289]
R=c[98]
K=c[232]
B=a.updateHolder(c[22],B)
D=c[288]
E=c[36]
F=c[227]
S=c[62]
T=c[290]
U=c[287]
V=c[291]
G=c[78]
W=c[231]
X=c[186]
Y=c[212]
Z=c[226]
L=c[209]
H=c[192]
A_=c[198]
A0=c[230]
B.Rm.prototype={
J(){return"ScanState."+this.b}}
B.Dy.prototype={
M(){return new B.acY(D.a2K,new X.d_(Z.aT,$.ae()),E.czs(F.Hx,A.a([C.m0],y.k)))}}
B.acY.prototype={
l(){this.x.l()
var x=this.r
x.U$=$.ae()
x.W$=0
this.ag()},
aX(){var x=0,w=A.k(y.H),v=this,u
var $async$aX=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.co()
if(v.a.c==null&&v.c.hr(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hr(y.u).f.f[0].a.xR(0,"scanCode")}$.Ao().afF("https://unpkg.com/@zxing/library@0.21.3")
A.eh(v.a.c)
v.Nm()
return A.i(null,w)}})
return A.j($async$aX,w)},
Nm(){var x=0,w=A.k(y.H),v=this,u,t
var $async$Nm=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(A.ij(A.cn(0,0,0,500,0),null,y.z),$async$Nm)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.c(S.NP(u,A.t("Enter Scan Code",null),null,A.t("Scan Code",null)),$async$Nm)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$Nm,w)},
a8z(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bX(new A.a3(F.HZ,H.bc(D.b4S,q),q),q,q)
x=r.f
if(x===D.Cu)w=O.j9
else if(x===D.a2I)w=F.IW
else{if(x!==D.Cv)return C.ab
w=U.pD}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.X(u).h("O<1,a3>")
v.push(A.am(A.H(new A.O(u,new B.c7Z(),t),!0,t.h("a9.E")),C.L,C.f,C.h,q,C.l))}v.push(L.au)
u=r.e.Q.a06()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.W(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.a4F,C.ba,q,q,q,q))
x=A.a([A.bX(A.am(v,C.i,C.f,C.h,q,C.l),q,q),L.au,A.br(w,C.p,q,30),Y.a5],x)
if(r.f===D.Cu)x.push(A.dp(!1,H.bc(D.b4v,q),q,q,q,q,q,q,r.gaXI(),q,q))
return new A.a3(I.aZ,A.am(x,C.i,C.f,C.h,q,C.l),q)},
A(d){var x=this,w=null,v=x.e==null?R.bG3(d):x.a0Y(x.f),u=A.c1(w,w,w,w,w,w,A.br(N.hM,C.cs,w,w),w,w,w,new B.c8_(d),w,w,w,w,w),t=y.p
return M.f2(w,v,A.jn(!0,new A.cs(C.ae,w,C.ac,C.z,A.a([A.am(A.a([new A.a3(I.aZ,A.ax(A.a([u,A.bK(A.W("",w,w,w,w,w,w,w,A.aB(w,w,C.cs,w,w,w,w,w,w,w,w,20,w,w,C.a3,w,w,!0,w,w,w,w,w,w,w,w),C.ba,w,w,w,w),1,w)],t),C.i,C.f,C.h,0,w),w),x.a8z(),A.bK(E.czr(x.x,A0.Fy,new B.c80(x)),1,w)],t),C.i,C.f,C.h,w,C.l)],t),w),!0,C.U,!0,!0),w,w,w,w,w)},
vU(d){return this.aLu(d)},
aLu(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$vU=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.c(B.b4X(d,t),$async$vU)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.Cu
E.pT()
u.B(new B.c81())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a2I
E.pT()
E.pT()
u.B(new B.c82())
x=1
break}else if(s&&t.e==="used"){u.f=D.Cv
E.pT()
E.pT()
u.B(new B.c83())
x=1
break}}u.f=D.a2K
u.B(new B.c84())
case 1:return A.i(v,w)}})
return A.j($async$vU,w)},
T2(){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$T2=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.c(B.b51(s,t),$async$T2)
case 3:if(e){u.B(new B.c7Y(u))
E.pT()}else{E.pT()
E.pT()
u.c.ad(y.q).f.agq(P.cBT(null,null,null,null,null,C.z,null,H.bc(A.W("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,Q.HN,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$T2,w)},
a0Y(d){var x
switch(d.a){case 0:return W.XV
case 2:return F.XW
case 1:return K.li
case 3:x=this.c
x.toString
return A.C(x).ax.a===C.u?$.iP():$.qJ()}return K.li}}
var z=a.updateTypes(["R<~>()"])
B.b4Y.prototype={
$1(d){return A.cpv(d)},
$S:177}
B.c7Z.prototype={
$1(d){var x=null
return new A.a3(T.I_,A.W(d.m2(),x,x,x,x,x,x,x,V.DI,x,x,x,x,x),x)},
$S:321}
B.c8_.prototype={
$0(){A_.eX(this.a,!1).f.eC(null)},
$S:0}
B.c80.prototype={
$1(d){return this.aH7(d)},
aH7(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=E.cyC(d.a)
if(s==null){x=1
break}t=s.z
A.h8().$1(t)
x=3
return A.c(u.a.vU(J.ap(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:217}
B.c81.prototype={
$0(){},
$S:0}
B.c82.prototype={
$0(){},
$S:0}
B.c83.prototype={
$0(){},
$S:0}
B.c84.prototype={
$0(){},
$S:0}
B.c7Y.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.Cv},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.acY.prototype,"gaXI","T2",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bB,[B.b4Y,B.c7Z,B.c80])
w(B.Rm,A.e4)
w(B.Dy,A.F)
w(B.acY,A.K)
x(A.ci,[B.c8_,B.c81,B.c82,B.c83,B.c84,B.c7Y])})()
A.bl(b.typeUniverse,JSON.parse('{"Dy":{"F":[],"d":[]},"acY":{"K":["Dy"]}}'))
var y=(function rtii(){var x=A.y
return{k:x("q<jb>"),p:x("q<d>"),j:x("A<@>"),P:x("af<e,@>"),K:x("hs"),u:x("qn"),N:x("e"),q:x("ET"),y:x("x"),z:x("@"),C:x("hj?"),H:x("~")}})();(function constants(){D.Cu=new B.Rm(0,"valid")
D.a2I=new B.Rm(1,"invalid")
D.Cv=new B.Rm(2,"used")
D.a2K=new B.Rm(3,"nothing")
D.b4v=new A.c0("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4S=new A.c0("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_271",e:"endPart",h:b})})($__dart_deferred_initializers__,"+mCqYQOags0ICNcthJxSX5+W6fY=");