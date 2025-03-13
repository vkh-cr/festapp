((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_271",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,I,P,Q,R,K,B={
b4U(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$b4U=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.c($.LV().e3("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b4U)
case 3:r=g
s=J.a2(r)
if(!J.m(s.i(r,"code"),200)){v=null
x=1
break}u=G.cCA(y.P.a(s.i(r,"ticket")))
if(s.a3(r,"order")&&s.i(r,"order")!=null)u.Q=G.czO(s.i(r,"order"))
if(s.a3(r,"products")&&s.i(r,"products")!=null){t=J.c7(y.j.a(s.i(r,"products")),new B.b4V(),y.K)
u.z=A.H(t,!0,t.$ti.h("a8.E"))}if(s.a3(r,"spot")&&s.i(r,"spot")!=null)u.y=G.cmS(s.i(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b4U,w)},
b4Z(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$b4Z=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.c($.LV().e3("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b4Z)
case 3:v=t.m(s.v(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b4Z,w)},
b4V:function b4V(){},
cYI(d,e){return new B.Dx(e,d)},
Rk:function Rk(d,e){this.a=d
this.b=e},
Dx:function Dx(d,e){this.c=d
this.a=e},
acU:function acU(d,e,f){var _=this
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
c7W:function c7W(d){this.a=d}},D,E,F,S,T,U,V,G,W,X,Y,Z,L,H,A_,A0
J=c[1]
A=c[0]
C=c[2]
M=c[201]
N=c[229]
O=c[205]
I=c[210]
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
Y=c[211]
Z=c[226]
L=c[209]
H=c[192]
A_=c[198]
A0=c[230]
B.Rk.prototype={
J(){return"ScanState."+this.b}}
B.Dx.prototype={
M(){return new B.acU(D.a2K,new X.d_(Z.aT,$.ae()),E.czo(F.Hw,A.a([C.m0],y.k)))}}
B.acU.prototype={
l(){this.x.l()
var x=this.r
x.U$=$.ae()
x.W$=0
this.ai()},
aX(){var x=0,w=A.k(y.H),v=this,u
var $async$aX=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.co()
if(v.a.c==null&&v.c.hr(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hr(y.u).f.f[0].a.xR(0,"scanCode")}$.An().afF("https://unpkg.com/@zxing/library@0.21.3")
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
return A.c(S.NL(u,A.u("Enter Scan Code",null),null,A.u("Scan Code",null)),$async$Nm)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$Nm,w)},
a8A(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bX(new A.a4(F.HY,H.bc(D.b4S,q),q),q,q)
x=r.f
if(x===D.Ct)w=O.j9
else if(x===D.a2I)w=F.IW
else{if(x!==D.Cu)return C.ab
w=U.pD}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.X(u).h("O<1,a4>")
v.push(A.an(A.H(new A.O(u,new B.c7X(),t),!0,t.h("a8.E")),C.L,C.f,C.h,q,C.m))}v.push(L.ar)
u=r.e.Q.a06()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.W(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.a4F,C.ba,q,q,q,q))
x=A.a([A.bX(A.an(v,C.i,C.f,C.h,q,C.m),q,q),L.ar,A.br(w,C.p,q,30),Y.a5],x)
if(r.f===D.Ct)x.push(A.dk(!1,H.bc(D.b4v,q),q,q,q,q,q,q,r.gaXG(),q,q))
return new A.a4(I.aZ,A.an(x,C.i,C.f,C.h,q,C.m),q)},
A(d){var x=this,w=null,v=x.e==null?R.bG7(d):x.a0Y(x.f),u=A.c1(w,w,w,w,w,w,A.br(N.hL,C.cs,w,w),w,w,w,new B.c7Y(d),w,w,w,w,w),t=y.p
return M.f2(w,v,A.jn(!0,new A.cs(C.ae,w,C.ac,C.z,A.a([A.an(A.a([new A.a4(I.aZ,A.ax(A.a([u,A.bK(A.W("",w,w,w,w,w,w,w,A.aB(w,w,C.cs,w,w,w,w,w,w,w,w,20,w,w,C.a3,w,w,!0,w,w,w,w,w,w,w,w),C.ba,w,w,w,w),1,w)],t),C.i,C.f,C.h,0,w),w),x.a8A(),A.bK(E.czn(x.x,A0.Fx,new B.c7Z(x)),1,w)],t),C.i,C.f,C.h,w,C.m)],t),w),!0,C.U,!0,!0),w,w,w,w,w)},
vU(d){return this.aLs(d)},
aLs(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$vU=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.c(B.b4U(d,t),$async$vU)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.Ct
E.pS()
u.B(new B.c8_())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a2I
E.pS()
E.pS()
u.B(new B.c80())
x=1
break}else if(s&&t.e==="used"){u.f=D.Cu
E.pS()
E.pS()
u.B(new B.c81())
x=1
break}}u.f=D.a2K
u.B(new B.c82())
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
return A.c(B.b4Z(s,t),$async$T2)
case 3:if(e){u.B(new B.c7W(u))
E.pS()}else{E.pS()
E.pS()
u.c.ad(y.q).f.agq(P.cBQ(null,null,null,null,null,C.z,null,H.bc(A.W("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,Q.HM,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$T2,w)},
a0Y(d){var x
switch(d.a){case 0:return W.XV
case 2:return F.XW
case 1:return K.li
case 3:x=this.c
x.toString
return A.C(x).ax.a===C.u?$.iP():$.qI()}return K.li}}
var z=a.updateTypes(["R<~>()"])
B.b4V.prototype={
$1(d){return A.cps(d)},
$S:197}
B.c7X.prototype={
$1(d){var x=null
return new A.a4(T.HZ,A.W(d.m2(),x,x,x,x,x,x,x,V.DH,x,x,x,x,x),x)},
$S:363}
B.c7Y.prototype={
$0(){A_.eX(this.a,!1).f.eC(null)},
$S:0}
B.c7Z.prototype={
$1(d){return this.aH5(d)},
aH5(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=E.cyy(d.a)
if(s==null){x=1
break}t=s.z
A.h8().$1(t)
x=3
return A.c(u.a.vU(J.aq(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:207}
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
x.f=D.Cu},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.acU.prototype,"gaXG","T2",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bB,[B.b4V,B.c7X,B.c7Z])
w(B.Rk,A.e4)
w(B.Dx,A.F)
w(B.acU,A.K)
x(A.ci,[B.c7Y,B.c8_,B.c80,B.c81,B.c82,B.c7W])})()
A.bl(b.typeUniverse,JSON.parse('{"Dx":{"F":[],"d":[]},"acU":{"K":["Dx"]}}'))
var y=(function rtii(){var x=A.y
return{k:x("q<ja>"),p:x("q<d>"),j:x("A<@>"),P:x("af<e,@>"),K:x("hs"),u:x("qm"),N:x("e"),q:x("ES"),y:x("x"),z:x("@"),C:x("hj?"),H:x("~")}})();(function constants(){D.Ct=new B.Rk(0,"valid")
D.a2I=new B.Rk(1,"invalid")
D.Cu=new B.Rk(2,"used")
D.a2K=new B.Rk(3,"nothing")
D.b4v=new A.c0("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4S=new A.c0("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_271",e:"endPart",h:b})})($__dart_deferred_initializers__,"CxoSR1xu5oPfTkTBgHI0Oq9rE4w=");