((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_269",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,I,N,O,P,Q,R,K,B={
b3Y(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$b3Y=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.c($.LG().e4("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b3Y)
case 3:r=g
s=J.a3(r)
if(!J.m(s.i(r,"code"),200)){v=null
x=1
break}u=G.cAl(y.P.a(s.i(r,"ticket")))
if(s.a3(r,"order")&&s.i(r,"order")!=null)u.Q=G.cxy(s.i(r,"order"))
if(s.a3(r,"products")&&s.i(r,"products")!=null){t=J.cc(y.j.a(s.i(r,"products")),new B.b3Z(),y.K)
u.z=A.I(t,!0,t.$ti.h("ab.E"))}if(s.a3(r,"spot")&&s.i(r,"spot")!=null)u.y=G.ckH(s.i(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b3Y,w)},
b42(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$b42=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.c($.LG().e4("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b42)
case 3:v=t.m(s.u(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b42,w)},
b3Z:function b3Z(){},
cWn(d,e){return new B.Dv(e,d)},
R7:function R7(d,e){this.a=d
this.b=e},
Dv:function Dv(d,e){this.c=d
this.a=e},
acA:function acA(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
c5U:function c5U(){},
c5V:function c5V(d){this.a=d},
c5W:function c5W(d){this.a=d},
c5X:function c5X(){},
c5Y:function c5Y(){},
c5Z:function c5Z(){},
c6_:function c6_(){},
c5T:function c5T(d){this.a=d}},D,E,F,S,T,U,V,G,W,X,Y,Z,L,H,A_,A0
J=c[1]
A=c[0]
C=c[2]
M=c[230]
I=c[209]
N=c[200]
O=c[229]
P=c[94]
Q=c[289]
R=c[99]
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
Y=c[210]
Z=c[226]
L=c[208]
H=c[192]
A_=c[197]
A0=c[204]
B.R7.prototype={
J(){return"ScanState."+this.b}}
B.Dv.prototype={
M(){return new B.acA(D.a2N,new X.dv(Z.aY,$.ae()),E.cx9(F.Ht,A.a([C.lU],y.k)))}}
B.acA.prototype={
l(){this.x.l()
var x=this.r
x.V$=$.ae()
x.W$=0
this.ai()},
aW(){var x=0,w=A.k(y.H),v=this,u
var $async$aW=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.ck()
if(v.a.c==null&&v.c.hy(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hy(y.u).f.f[0].a.vJ(0,"scanCode")}$.Ak().afu("https://unpkg.com/@zxing/library@0.21.3")
A.ep(v.a.c)
v.No()
return A.i(null,w)}})
return A.j($async$aW,w)},
No(){var x=0,w=A.k(y.H),v=this,u,t
var $async$No=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(A.ib(A.cs(0,0,0,500,0),null,y.z),$async$No)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.c(S.Nw(u,A.v("Enter Scan Code",null),null,A.v("Scan Code",null)),$async$No)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$No,w)},
a8r(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bY(new A.a4(F.HY,H.bb(D.b4L,q),q),q,q)
x=r.f
if(x===D.Cg)w=A0.j5
else if(x===D.a2L)w=F.IW
else{if(x!==D.Ch)return C.aa
w=U.ps}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.Y(u).h("P<1,a4>")
v.push(A.aw(A.I(new A.P(u,new B.c5U(),t),!0,t.h("ab.E")),C.T,C.f,C.h,q,C.p))}v.push(L.ax)
u=r.e.Q.a01()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.X(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.a4E,C.bk,q,q,q,q))
x=A.a([A.bY(A.aw(v,C.i,C.f,C.h,q,C.p),q,q),L.ax,A.bz(w,C.o,q,30),Y.ad],x)
if(r.f===D.Cg)x.push(A.ds(!1,H.bb(D.b4o,q),q,q,q,q,q,q,r.gaXO(),q,q))
return new A.a4(I.aP,A.aw(x,C.i,C.f,C.h,q,C.p),q)},
A(d){var x=this,w=null,v=x.e==null?R.bEq(d):x.a0V(x.f),u=A.cd(w,w,w,w,w,w,A.bz(O.hK,C.cs,w,w),w,w,w,new B.c5V(d),w,w,w,w,w),t=y.p
return N.eW(w,v,A.k3(!0,new A.cp(C.ae,w,C.ab,C.z,A.a([A.aw(A.a([new A.a4(I.aP,A.aE(A.a([u,A.bZ(A.X("",w,w,w,w,w,w,w,A.aK(w,w,C.cs,w,w,w,w,w,w,w,w,20,w,w,C.a4,w,w,!0,w,w,w,w,w,w,w,w),C.bk,w,w,w,w),1,w)],t),C.i,C.f,C.h,w),w),x.a8r(),A.bZ(E.cx8(x.x,M.Ft,new B.c5W(x)),1,w)],t),C.i,C.f,C.h,w,C.p)],t),w),!0,C.U,!0,!0),w,w,w,w,w)},
vR(d){return this.aLl(d)},
aLl(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$vR=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.c(B.b3Y(d,t),$async$vR)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.Cg
E.pS()
u.B(new B.c5X())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a2L
E.pS()
E.pS()
u.B(new B.c5Y())
x=1
break}else if(s&&t.e==="used"){u.f=D.Ch
E.pS()
E.pS()
u.B(new B.c5Z())
x=1
break}}u.f=D.a2N
u.B(new B.c6_())
case 1:return A.i(v,w)}})
return A.j($async$vR,w)},
SZ(){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$SZ=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.c(B.b42(s,t),$async$SZ)
case 3:if(e){u.B(new B.c5T(u))
E.pS()}else{E.pS()
E.pS()
u.c.ad(y.q).f.agf(P.czA(null,null,null,null,null,C.z,null,H.bb(A.X("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,Q.HK,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$SZ,w)},
a0V(d){var x
switch(d.a){case 0:return W.XY
case 2:return F.XZ
case 1:return K.lc
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.u?$.j4():$.qI()}return K.lc}}
var z=a.updateTypes(["S<~>()"])
B.b3Z.prototype={
$1(d){return A.cng(d)},
$S:188}
B.c5U.prototype={
$1(d){var x=null
return new A.a4(T.HZ,A.X(d.m_(),x,x,x,x,x,x,x,V.Dz,x,x,x,x,x),x)},
$S:279}
B.c5V.prototype={
$0(){A_.fs(this.a,!1).f.tZ(null)},
$S:0}
B.c5W.prototype={
$1(d){return this.aGZ(d)},
aGZ(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=E.cwj(d.a)
if(s==null){x=1
break}t=s.z
A.h_().$1(t)
x=3
return A.c(u.a.vR(J.av(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:310}
B.c5X.prototype={
$0(){},
$S:0}
B.c5Y.prototype={
$0(){},
$S:0}
B.c5Z.prototype={
$0(){},
$S:0}
B.c6_.prototype={
$0(){},
$S:0}
B.c5T.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.Ch},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.acA.prototype,"gaXO","SZ",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bC,[B.b3Z,B.c5U,B.c5W])
w(B.R7,A.e3)
w(B.Dv,A.G)
w(B.acA,A.K)
x(A.ci,[B.c5V,B.c5X,B.c5Y,B.c5Z,B.c6_,B.c5T])})()
A.bi(b.typeUniverse,JSON.parse('{"Dv":{"G":[],"d":[]},"acA":{"K":["Dv"]}}'))
var y=(function rtii(){var x=A.y
return{k:x("q<j5>"),p:x("q<d>"),j:x("B<@>"),P:x("ad<e,@>"),K:x("hi"),u:x("ql"),N:x("e"),q:x("ER"),y:x("x"),z:x("@"),C:x("hb?"),H:x("~")}})();(function constants(){D.Cg=new B.R7(0,"valid")
D.a2L=new B.R7(1,"invalid")
D.Ch=new B.R7(2,"used")
D.a2N=new B.R7(3,"nothing")
D.b4o=new A.c_("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4L=new A.c_("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_269",e:"endPart",h:b})})($__dart_deferred_initializers__,"zPWzQPkAH9E+tHC49LYW+F+IIo0=");