((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_267",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,I,P,Q,R,K,B={
b4s(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$b4s=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.c($.LS().e2("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b4s)
case 3:r=g
s=J.a2(r)
if(!J.m(s.i(r,"code"),200)){v=null
x=1
break}u=G.cBx(y.P.a(s.i(r,"ticket")))
if(s.a3(r,"order")&&s.i(r,"order")!=null)u.Q=G.cyJ(s.i(r,"order"))
if(s.a3(r,"products")&&s.i(r,"products")!=null){t=J.c8(y.j.a(s.i(r,"products")),new B.b4t(),y.K)
u.z=A.H(t,!0,t.$ti.h("a9.E"))}if(s.a3(r,"spot")&&s.i(r,"spot")!=null)u.y=G.clT(s.i(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b4s,w)},
b4x(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$b4x=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.c($.LS().e2("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b4x)
case 3:v=t.m(s.v(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b4x,w)},
b4t:function b4t(){},
cXG(d,e){return new B.Dz(e,d)},
Ri:function Ri(d,e){this.a=d
this.b=e},
Dz:function Dz(d,e){this.c=d
this.a=e},
acO:function acO(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
c6U:function c6U(){},
c6V:function c6V(d){this.a=d},
c6W:function c6W(d){this.a=d},
c6X:function c6X(){},
c6Y:function c6Y(){},
c6Z:function c6Z(){},
c7_:function c7_(){},
c6T:function c6T(d){this.a=d}},D,E,F,S,T,U,V,G,W,X,Y,Z,L,H,A_,A0
J=c[1]
A=c[0]
C=c[2]
M=c[199]
N=c[203]
O=c[228]
I=c[208]
P=c[92]
Q=c[287]
R=c[97]
K=c[231]
B=a.updateHolder(c[22],B)
D=c[286]
E=c[36]
F=c[226]
S=c[62]
T=c[288]
U=c[285]
V=c[289]
G=c[78]
W=c[230]
X=c[184]
Y=c[209]
Z=c[225]
L=c[207]
H=c[191]
A_=c[196]
A0=c[229]
B.Ri.prototype={
J(){return"ScanState."+this.b}}
B.Dz.prototype={
M(){return new B.acO(D.a2L,new X.da(Z.aW,$.ad()),E.cyj(F.Hx,A.a([C.lZ],y.k)))}}
B.acO.prototype={
l(){this.x.l()
var x=this.r
x.U$=$.ad()
x.W$=0
this.ai()},
aW(){var x=0,w=A.k(y.H),v=this,u
var $async$aW=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.cm()
if(v.a.c==null&&v.c.hz(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hz(y.u).f.f[0].a.vL(0,"scanCode")}$.An().afA("https://unpkg.com/@zxing/library@0.21.3")
A.eg(v.a.c)
v.Np()
return A.i(null,w)}})
return A.j($async$aW,w)},
Np(){var x=0,w=A.k(y.H),v=this,u,t
var $async$Np=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(A.ie(A.cr(0,0,0,500,0),null,y.z),$async$Np)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.c(S.NI(u,A.u("Enter Scan Code",null),null,A.u("Scan Code",null)),$async$Np)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$Np,w)},
a8v(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bY(new A.a4(F.I_,H.bf(D.b4Q,q),q),q,q)
x=r.f
if(x===D.Cm)w=N.j8
else if(x===D.a2J)w=F.IX
else{if(x!==D.Cn)return C.ab
w=U.py}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.X(u).h("O<1,a4>")
v.push(A.ao(A.H(new A.O(u,new B.c6U(),t),!0,t.h("a9.E")),C.O,C.f,C.h,q,C.m))}v.push(L.au)
u=r.e.Q.a01()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.W(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.a4C,C.ba,q,q,q,q))
x=A.a([A.bY(A.ao(v,C.i,C.f,C.h,q,C.m),q,q),L.au,A.bs(w,C.p,q,30),Y.a6],x)
if(r.f===D.Cm)x.push(A.di(!1,H.bf(D.b4t,q),q,q,q,q,q,q,r.gaXI(),q,q))
return new A.a4(I.b0,A.ao(x,C.i,C.f,C.h,q,C.m),q)},
A(d){var x=this,w=null,v=x.e==null?R.bFC(d):x.a0V(x.f),u=A.c5(w,w,w,w,w,w,A.bs(O.hM,C.cs,w,w),w,w,w,new B.c6V(d),w,w,w,w,w),t=y.p
return M.f_(w,v,A.jL(!0,new A.co(C.af,w,C.ac,C.z,A.a([A.ao(A.a([new A.a4(I.b0,A.ax(A.a([u,A.bR(A.W("",w,w,w,w,w,w,w,A.aE(w,w,C.cs,w,w,w,w,w,w,w,w,20,w,w,C.a3,w,w,!0,w,w,w,w,w,w,w,w),C.ba,w,w,w,w),1,w)],t),C.i,C.f,C.h,0,w),w),x.a8v(),A.bR(E.cyi(x.x,A0.Fy,new B.c6W(x)),1,w)],t),C.i,C.f,C.h,w,C.m)],t),w),!0,C.U,!0,!0),w,w,w,w,w)},
vV(d){return this.aLs(d)},
aLs(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$vV=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.c(B.b4s(d,t),$async$vV)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.Cm
E.pR()
u.B(new B.c6X())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a2J
E.pR()
E.pR()
u.B(new B.c6Y())
x=1
break}else if(s&&t.e==="used"){u.f=D.Cn
E.pR()
E.pR()
u.B(new B.c6Z())
x=1
break}}u.f=D.a2L
u.B(new B.c7_())
case 1:return A.i(v,w)}})
return A.j($async$vV,w)},
SZ(){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$SZ=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.c(B.b4x(s,t),$async$SZ)
case 3:if(e){u.B(new B.c6T(u))
E.pR()}else{E.pR()
E.pR()
u.c.ad(y.q).f.agl(P.cAM(null,null,null,null,null,C.z,null,H.bf(A.W("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,Q.HO,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$SZ,w)},
a0V(d){var x
switch(d.a){case 0:return W.XX
case 2:return F.XY
case 1:return K.lh
case 3:x=this.c
x.toString
return A.C(x).ax.a===C.v?$.iS():$.qH()}return K.lh}}
var z=a.updateTypes(["S<~>()"])
B.b4t.prototype={
$1(d){return A.cop(d)},
$S:196}
B.c6U.prototype={
$1(d){var x=null
return new A.a4(T.I0,A.W(d.m1(),x,x,x,x,x,x,x,V.DF,x,x,x,x,x),x)},
$S:215}
B.c6V.prototype={
$0(){A_.f3(this.a,!1).f.eE(null)},
$S:0}
B.c6W.prototype={
$1(d){return this.aH5(d)},
aH5(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=E.cxt(d.a)
if(s==null){x=1
break}t=s.z
A.h3().$1(t)
x=3
return A.c(u.a.vV(J.at(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:238}
B.c6X.prototype={
$0(){},
$S:0}
B.c6Y.prototype={
$0(){},
$S:0}
B.c6Z.prototype={
$0(){},
$S:0}
B.c7_.prototype={
$0(){},
$S:0}
B.c6T.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.Cn},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.acO.prototype,"gaXI","SZ",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bA,[B.b4t,B.c6U,B.c6W])
w(B.Ri,A.e5)
w(B.Dz,A.F)
w(B.acO,A.K)
x(A.ci,[B.c6V,B.c6X,B.c6Y,B.c6Z,B.c7_,B.c6T])})()
A.bi(b.typeUniverse,JSON.parse('{"Dz":{"F":[],"d":[]},"acO":{"K":["Dz"]}}'))
var y=(function rtii(){var x=A.y
return{k:x("p<jb>"),p:x("p<d>"),j:x("A<@>"),P:x("ae<e,@>"),K:x("ho"),u:x("qj"),N:x("e"),q:x("EU"),y:x("x"),z:x("@"),C:x("hg?"),H:x("~")}})();(function constants(){D.Cm=new B.Ri(0,"valid")
D.a2J=new B.Ri(1,"invalid")
D.Cn=new B.Ri(2,"used")
D.a2L=new B.Ri(3,"nothing")
D.b4t=new A.c_("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4Q=new A.c_("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_267",e:"endPart",h:b})})($__dart_deferred_initializers__,"pJ2y/0cjoSfVHWGOPQPiRWOMk4k=");