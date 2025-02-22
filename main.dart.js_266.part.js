((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_266",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,I,O,P,Q,R,K,B={
b3H(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$b3H=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.c($.Lz().e3("scan_ticket",A.y(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b3H)
case 3:r=g
s=J.a2(r)
if(!J.m(s.i(r,"code"),200)){v=null
x=1
break}u=G.czh(y.P.a(s.i(r,"ticket")))
if(s.a3(r,"order")&&s.i(r,"order")!=null)u.Q=G.cwv(s.i(r,"order"))
if(s.a3(r,"products")&&s.i(r,"products")!=null){t=J.cg(y.j.a(s.i(r,"products")),new B.b3I(),y.K)
u.z=A.J(t,!0,t.$ti.h("ac.E"))}if(s.a3(r,"spot")&&s.i(r,"spot")!=null)u.y=G.cjJ(s.i(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$b3H,w)},
b3M(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$b3M=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.c($.Lz().e3("update_ticket_to_used",A.y(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b3M)
case 3:v=t.m(s.u(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$b3M,w)},
b3I:function b3I(){},
cVg(d,e){return new B.Dm(e,d)},
QX:function QX(d,e){this.a=d
this.b=e},
Dm:function Dm(d,e){this.c=d
this.a=e},
acr:function acr(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
c5o:function c5o(){},
c5p:function c5p(d){this.a=d},
c5q:function c5q(d){this.a=d},
c5r:function c5r(){},
c5s:function c5s(){},
c5t:function c5t(){},
c5u:function c5u(){},
c5n:function c5n(d){this.a=d}},D,E,F,S,T,U,V,G,W,X,Y,Z,L,H,A_,A0
J=c[1]
A=c[0]
C=c[2]
M=c[229]
N=c[198]
I=c[207]
O=c[228]
P=c[93]
Q=c[286]
R=c[98]
K=c[231]
B=a.updateHolder(c[22],B)
D=c[285]
E=c[36]
F=c[226]
S=c[62]
T=c[287]
U=c[284]
V=c[288]
G=c[77]
W=c[230]
X=c[185]
Y=c[208]
Z=c[225]
L=c[206]
H=c[190]
A_=c[195]
A0=c[202]
B.QX.prototype={
J(){return"ScanState."+this.b}}
B.Dm.prototype={
N(){return new B.acr(D.a2C,new X.dF(Z.aS,$.ae()),E.cw6(F.Hp,A.a([C.lR],y.k)))}}
B.acr.prototype={
l(){this.x.l()
var x=this.r
x.V$=$.ae()
x.Y$=0
this.ai()},
aW(){var x=0,w=A.l(y.H),v=this,u
var $async$aW=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.ck()
if(v.a.c==null&&v.c.hy(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hy(y.u).f.f[0].a.vK(0,"scanCode")}$.Ac().aft("https://unpkg.com/@zxing/library@0.21.3")
A.en(v.a.c)
v.Nq()
return A.j(null,w)}})
return A.k($async$aW,w)},
Nq(){var x=0,w=A.l(y.H),v=this,u,t
var $async$Nq=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.c(A.i8(A.cq(0,0,0,500,0),null,y.z),$async$Nq)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.c(S.No(u,A.w("Enter Scan Code",null),null,A.w("Scan Code",null)),$async$Nq)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$Nq,w)},
a8s(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.cb(new A.a6(F.HR,H.bp(D.b4t,q),q),q,q)
x=r.f
if(x===D.Ce)w=A0.j1
else if(x===D.a2A)w=F.IO
else{if(x!==D.Cf)return C.a9
w=U.po}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.X(u).h("Q<1,a6>")
v.push(A.ax(A.J(new A.Q(u,new B.c5o(),t),!0,t.h("ac.E")),C.Y,C.f,C.h,q,C.p))}v.push(L.aP)
u=r.e.Q.a01()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.Y(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.a4s,C.bj,q,q,q,q))
x=A.a([A.cb(A.ax(v,C.j,C.f,C.h,q,C.p),q,q),L.aP,A.bN(w,C.q,q,30),Y.ai],x)
if(r.f===D.Ce)x.push(A.ds(!1,H.bp(D.b46,q),q,q,q,q,q,q,r.gaXz(),q,q))
return new A.a6(I.b3,A.ax(x,C.j,C.f,C.h,q,C.p),q)},
A(d){var x=this,w=null,v=x.e==null?R.bE4(d):x.a0V(x.f),u=A.ch(w,w,w,w,w,A.bN(O.hD,C.cp,w,w),w,w,w,new B.c5p(d),w,w,w,w,w),t=y.p
return N.eW(w,v,A.k1(!0,new A.cr(C.ae,w,C.ac,C.z,A.a([A.ax(A.a([new A.a6(I.b3,A.aH(A.a([u,A.bX(A.Y("",w,w,w,w,w,w,w,A.aN(w,w,C.cp,w,w,w,w,w,w,w,w,20,w,w,C.a5,w,w,!0,w,w,w,w,w,w,w,w),C.bj,w,w,w,w),1,w)],t),C.j,C.f,C.h,w),w),x.a8s(),A.bX(E.cw5(x.x,M.Fp,new B.c5q(x)),1,w)],t),C.j,C.f,C.h,w,C.p)],t),w),!0,C.U,!0,!0),w,w,w,w,w)},
vS(d){return this.aL6(d)},
aL6(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$vS=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.c(B.b3H(d,t),$async$vS)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.Ce
E.pO()
u.B(new B.c5r())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a2A
E.pO()
E.pO()
u.B(new B.c5s())
x=1
break}else if(s&&t.e==="used"){u.f=D.Cf
E.pO()
E.pO()
u.B(new B.c5t())
x=1
break}}u.f=D.a2C
u.B(new B.c5u())
case 1:return A.j(v,w)}})
return A.k($async$vS,w)},
T0(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$T0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.c(B.b3M(s,t),$async$T0)
case 3:if(e){u.B(new B.c5n(u))
E.pO()}else{E.pO()
E.pO()
u.c.ab(y.q).f.agd(P.cyw(null,null,null,null,null,C.z,null,H.bp(A.Y("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,Q.HG,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$T0,w)},
a0V(d){var x
switch(d.a){case 0:return W.XN
case 2:return F.XO
case 1:return K.l6
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.v?$.j1():$.v3()}return K.l6}}
var z=a.updateTypes(["S<~>()"])
B.b3I.prototype={
$1(d){return A.cmg(d)},
$S:168}
B.c5o.prototype={
$1(d){var x=null
return new A.a6(T.HS,A.Y(d.m_(),x,x,x,x,x,x,x,V.Dy,x,x,x,x,x),x)},
$S:325}
B.c5p.prototype={
$0(){A_.fC(this.a,!1).f.tY(null)},
$S:0}
B.c5q.prototype={
$1(d){return this.aGM(d)},
aGM(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=E.cvh(d.a)
if(s==null){x=1
break}t=s.z
A.h1().$1(t)
x=3
return A.c(u.a.vS(J.au(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:343}
B.c5r.prototype={
$0(){},
$S:0}
B.c5s.prototype={
$0(){},
$S:0}
B.c5t.prototype={
$0(){},
$S:0}
B.c5u.prototype={
$0(){},
$S:0}
B.c5n.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.Cf},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.acr.prototype,"gaXz","T0",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bG,[B.b3I,B.c5o,B.c5q])
w(B.QX,A.dR)
w(B.Dm,A.F)
w(B.acr,A.L)
x(A.cl,[B.c5p,B.c5r,B.c5s,B.c5t,B.c5u,B.c5n])})()
A.bl(b.typeUniverse,JSON.parse('{"Dm":{"F":[],"d":[]},"acr":{"L":["Dm"]}}'))
var y=(function rtii(){var x=A.z
return{k:x("q<j2>"),p:x("q<d>"),j:x("B<@>"),P:x("aa<e,@>"),K:x("hi"),u:x("qh"),N:x("e"),q:x("EK"),y:x("x"),z:x("@"),C:x("hb?"),H:x("~")}})();(function constants(){D.Ce=new B.QX(0,"valid")
D.a2A=new B.QX(1,"invalid")
D.Cf=new B.QX(2,"used")
D.a2C=new B.QX(3,"nothing")
D.b46=new A.bY("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4t=new A.bY("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_266",e:"endPart",h:b})})($__dart_deferred_initializers__,"5K07GgKCxj9ARNx5sfqjAC2vYn4=");