((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_268",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,I,P,Q,R,K,B={
b4O(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$b4O=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.c($.LS().e2("scan_ticket",A.y(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b4O)
case 3:r=g
s=J.a2(r)
if(!J.m(s.i(r,"code"),200)){v=null
x=1
break}u=G.cBZ(y.P.a(s.i(r,"ticket")))
if(s.a3(r,"order")&&s.i(r,"order")!=null)u.Q=G.cza(s.i(r,"order"))
if(s.a3(r,"products")&&s.i(r,"products")!=null){t=J.c8(y.j.a(s.i(r,"products")),new B.b4P(),y.K)
u.z=A.I(t,!0,t.$ti.h("a9.E"))}if(s.a3(r,"spot")&&s.i(r,"spot")!=null)u.y=G.cml(s.i(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b4O,w)},
b4T(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$b4T=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.c($.LS().e2("update_ticket_to_used",A.y(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b4T)
case 3:v=t.m(s.v(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b4T,w)},
b4P:function b4P(){},
cY8(d,e){return new B.Dx(e,d)},
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
c7m:function c7m(){},
c7n:function c7n(d){this.a=d},
c7o:function c7o(d){this.a=d},
c7p:function c7p(){},
c7q:function c7q(){},
c7r:function c7r(){},
c7s:function c7s(){},
c7l:function c7l(d){this.a=d}},D,E,F,S,T,U,V,G,W,X,Y,Z,L,H,A_,A0
J=c[1]
A=c[0]
C=c[2]
M=c[198]
N=c[227]
O=c[202]
I=c[207]
P=c[92]
Q=c[286]
R=c[97]
K=c[230]
B=a.updateHolder(c[22],B)
D=c[285]
E=c[36]
F=c[225]
S=c[62]
T=c[287]
U=c[284]
V=c[288]
G=c[78]
W=c[229]
X=c[183]
Y=c[208]
Z=c[224]
L=c[206]
H=c[189]
A_=c[195]
A0=c[228]
B.Rk.prototype={
J(){return"ScanState."+this.b}}
B.Dx.prototype={
M(){return new B.acU(D.a2N,new X.d_(Z.aV,$.ad()),E.cyL(F.Hy,A.a([C.lZ],y.k)))}}
B.acU.prototype={
l(){this.x.l()
var x=this.r
x.U$=$.ad()
x.V$=0
this.ai()},
aX(){var x=0,w=A.k(y.H),v=this,u
var $async$aX=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.cm()
if(v.a.c==null&&v.c.hr(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hr(y.u).f.f[0].a.xR(0,"scanCode")}$.An().afF("https://unpkg.com/@zxing/library@0.21.3")
A.eh(v.a.c)
v.Ns()
return A.i(null,w)}})
return A.j($async$aX,w)},
Ns(){var x=0,w=A.k(y.H),v=this,u,t
var $async$Ns=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(A.ii(A.ct(0,0,0,500,0),null,y.z),$async$Ns)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.c(S.NI(u,A.u("Enter Scan Code",null),null,A.u("Scan Code",null)),$async$Ns)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$Ns,w)},
a8B(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bY(new A.a4(F.I0,H.bf(D.b4Q,q),q),q,q)
x=r.f
if(x===D.Co)w=O.j9
else if(x===D.a2L)w=F.IY
else{if(x!==D.Cp)return C.ab
w=U.pz}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.X(u).h("O<1,a4>")
v.push(A.ao(A.I(new A.O(u,new B.c7m(),t),!0,t.h("a9.E")),C.N,C.f,C.h,q,C.m))}v.push(L.ar)
u=r.e.Q.a06()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.W(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.a4F,C.bb,q,q,q,q))
x=A.a([A.bY(A.ao(v,C.i,C.f,C.h,q,C.m),q,q),L.ar,A.br(w,C.p,q,30),Y.a6],x)
if(r.f===D.Co)x.push(A.dk(!1,H.bf(D.b4t,q),q,q,q,q,q,q,r.gaXN(),q,q))
return new A.a4(I.b0,A.ao(x,C.i,C.f,C.h,q,C.m),q)},
A(d){var x=this,w=null,v=x.e==null?R.bFY(d):x.a1_(x.f),u=A.c3(w,w,w,w,w,w,A.br(N.hN,C.cs,w,w),w,w,w,new B.c7n(d),w,w,w,w,w),t=y.p
return M.f0(w,v,A.jn(!0,new A.cp(C.af,w,C.ac,C.z,A.a([A.ao(A.a([new A.a4(I.b0,A.ax(A.a([u,A.bQ(A.W("",w,w,w,w,w,w,w,A.aF(w,w,C.cs,w,w,w,w,w,w,w,w,20,w,w,C.a3,w,w,!0,w,w,w,w,w,w,w,w),C.bb,w,w,w,w),1,w)],t),C.i,C.f,C.h,0,w),w),x.a8B(),A.bQ(E.cyK(x.x,A0.Fz,new B.c7o(x)),1,w)],t),C.i,C.f,C.h,w,C.m)],t),w),!0,C.U,!0,!0),w,w,w,w,w)},
vU(d){return this.aLx(d)},
aLx(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$vU=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.c(B.b4O(d,t),$async$vU)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.Co
E.pR()
u.B(new B.c7p())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a2L
E.pR()
E.pR()
u.B(new B.c7q())
x=1
break}else if(s&&t.e==="used"){u.f=D.Cp
E.pR()
E.pR()
u.B(new B.c7r())
x=1
break}}u.f=D.a2N
u.B(new B.c7s())
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
return A.c(B.b4T(s,t),$async$T2)
case 3:if(e){u.B(new B.c7l(u))
E.pR()}else{E.pR()
E.pR()
u.c.ad(y.q).f.agq(P.cBd(null,null,null,null,null,C.z,null,H.bf(A.W("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,Q.HP,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$T2,w)},
a1_(d){var x
switch(d.a){case 0:return W.XY
case 2:return F.XZ
case 1:return K.lh
case 3:x=this.c
x.toString
return A.C(x).ax.a===C.v?$.iT():$.qI()}return K.lh}}
var z=a.updateTypes(["S<~>()"])
B.b4P.prototype={
$1(d){return A.coS(d)},
$S:180}
B.c7m.prototype={
$1(d){var x=null
return new A.a4(T.I1,A.W(d.m1(),x,x,x,x,x,x,x,V.DH,x,x,x,x,x),x)},
$S:231}
B.c7n.prototype={
$0(){A_.f1(this.a,!1).f.eE(null)},
$S:0}
B.c7o.prototype={
$1(d){return this.aHa(d)},
aHa(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=E.cxV(d.a)
if(s==null){x=1
break}t=s.z
A.h7().$1(t)
x=3
return A.c(u.a.vU(J.as(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:237}
B.c7p.prototype={
$0(){},
$S:0}
B.c7q.prototype={
$0(){},
$S:0}
B.c7r.prototype={
$0(){},
$S:0}
B.c7s.prototype={
$0(){},
$S:0}
B.c7l.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.Cp},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.acU.prototype,"gaXN","T2",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bE,[B.b4P,B.c7m,B.c7o])
w(B.Rk,A.e5)
w(B.Dx,A.F)
w(B.acU,A.K)
x(A.ci,[B.c7n,B.c7p,B.c7q,B.c7r,B.c7s,B.c7l])})()
A.bk(b.typeUniverse,JSON.parse('{"Dx":{"F":[],"d":[]},"acU":{"K":["Dx"]}}'))
var y=(function rtii(){var x=A.z
return{k:x("q<jd>"),p:x("q<d>"),j:x("A<@>"),P:x("ae<e,@>"),K:x("hr"),u:x("qk"),N:x("e"),q:x("ES"),y:x("x"),z:x("@"),C:x("hj?"),H:x("~")}})();(function constants(){D.Co=new B.Rk(0,"valid")
D.a2L=new B.Rk(1,"invalid")
D.Cp=new B.Rk(2,"used")
D.a2N=new B.Rk(3,"nothing")
D.b4t=new A.c_("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4Q=new A.c_("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_268",e:"endPart",h:b})})($__dart_deferred_initializers__,"NDIfiXmBjrnDlThtoaHOA+dhW2E=");