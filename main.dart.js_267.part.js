((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_267",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,I,O,P,Q,R,K,B={
b3Q(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$b3Q=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.c($.LB().e4("scan_ticket",A.y(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b3Q)
case 3:r=g
s=J.a2(r)
if(!J.m(s.i(r,"code"),200)){v=null
x=1
break}u=G.czw(y.P.a(s.i(r,"ticket")))
if(s.a3(r,"order")&&s.i(r,"order")!=null)u.Q=G.cwK(s.i(r,"order"))
if(s.a3(r,"products")&&s.i(r,"products")!=null){t=J.cg(y.j.a(s.i(r,"products")),new B.b3R(),y.K)
u.z=A.J(t,!0,t.$ti.h("ad.E"))}if(s.a3(r,"spot")&&s.i(r,"spot")!=null)u.y=G.cjY(s.i(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$b3Q,w)},
b3V(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$b3V=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.c($.LB().e4("update_ticket_to_used",A.y(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b3V)
case 3:v=t.m(s.u(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$b3V,w)},
b3R:function b3R(){},
cVv(d,e){return new B.Dr(e,d)},
QZ:function QZ(d,e){this.a=d
this.b=e},
Dr:function Dr(d,e){this.c=d
this.a=e},
acu:function acu(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
c5v:function c5v(){},
c5w:function c5w(d){this.a=d},
c5x:function c5x(d){this.a=d},
c5y:function c5y(){},
c5z:function c5z(){},
c5A:function c5A(){},
c5B:function c5B(){},
c5u:function c5u(d){this.a=d}},D,E,F,S,T,U,V,G,W,X,Y,Z,L,H,A_,A0
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
S=c[63]
T=c[287]
U=c[284]
V=c[288]
G=c[78]
W=c[230]
X=c[185]
Y=c[208]
Z=c[225]
L=c[206]
H=c[190]
A_=c[195]
A0=c[202]
B.QZ.prototype={
J(){return"ScanState."+this.b}}
B.Dr.prototype={
N(){return new B.acu(D.a2C,new X.dF(Z.aS,$.ae()),E.cwl(F.Hp,A.a([C.lR],y.k)))}}
B.acu.prototype={
l(){this.x.l()
var x=this.r
x.V$=$.ae()
x.W$=0
this.ai()},
aW(){var x=0,w=A.l(y.H),v=this,u
var $async$aW=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.ck()
if(v.a.c==null&&v.c.hy(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hy(y.u).f.f[0].a.vI(0,"scanCode")}$.Af().afv("https://unpkg.com/@zxing/library@0.21.3")
A.eo(v.a.c)
v.No()
return A.j(null,w)}})
return A.k($async$aW,w)},
No(){var x=0,w=A.l(y.H),v=this,u,t
var $async$No=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.c(A.ib(A.cp(0,0,0,500,0),null,y.z),$async$No)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.c(S.Nq(u,A.w("Enter Scan Code",null),null,A.w("Scan Code",null)),$async$No)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$No,w)},
a8s(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.c8(new A.a6(F.HR,H.bo(D.b4u,q),q),q,q)
x=r.f
if(x===D.Cd)w=A0.j0
else if(x===D.a2A)w=F.IO
else{if(x!==D.Ce)return C.aa
w=U.po}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.X(u).h("R<1,a6>")
v.push(A.ax(A.J(new A.R(u,new B.c5v(),t),!0,t.h("ad.E")),C.W,C.f,C.h,q,C.p))}v.push(L.aP)
u=r.e.Q.a01()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.Y(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.a4s,C.bj,q,q,q,q))
x=A.a([A.c8(A.ax(v,C.j,C.f,C.h,q,C.p),q,q),L.aP,A.bN(w,C.t,q,30),Y.ai],x)
if(r.f===D.Cd)x.push(A.ds(!1,H.bo(D.b47,q),q,q,q,q,q,q,r.gaXH(),q,q))
return new A.a6(I.aY,A.ax(x,C.j,C.f,C.h,q,C.p),q)},
A(d){var x=this,w=null,v=x.e==null?R.bEf(d):x.a0V(x.f),u=A.ch(w,w,w,w,w,A.bN(O.hE,C.cp,w,w),w,w,w,new B.c5w(d),w,w,w,w,w),t=y.p
return N.eW(w,v,A.k1(!0,new A.cr(C.ae,w,C.ab,C.z,A.a([A.ax(A.a([new A.a6(I.aY,A.aH(A.a([u,A.bX(A.Y("",w,w,w,w,w,w,w,A.aR(w,w,C.cp,w,w,w,w,w,w,w,w,20,w,w,C.a5,w,w,!0,w,w,w,w,w,w,w,w),C.bj,w,w,w,w),1,w)],t),C.j,C.f,C.h,w),w),x.a8s(),A.bX(E.cwk(x.x,M.Fp,new B.c5x(x)),1,w)],t),C.j,C.f,C.h,w,C.p)],t),w),!0,C.U,!0,!0),w,w,w,w,w)},
vQ(d){return this.aLe(d)},
aLe(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$vQ=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.c(B.b3Q(d,t),$async$vQ)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.Cd
E.pP()
u.B(new B.c5y())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a2A
E.pP()
E.pP()
u.B(new B.c5z())
x=1
break}else if(s&&t.e==="used"){u.f=D.Ce
E.pP()
E.pP()
u.B(new B.c5A())
x=1
break}}u.f=D.a2C
u.B(new B.c5B())
case 1:return A.j(v,w)}})
return A.k($async$vQ,w)},
SZ(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$SZ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.c(B.b3V(s,t),$async$SZ)
case 3:if(e){u.B(new B.c5u(u))
E.pP()}else{E.pP()
E.pP()
u.c.ab(y.q).f.agf(P.cyL(null,null,null,null,null,C.z,null,H.bo(A.Y("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,Q.HG,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$SZ,w)},
a0V(d){var x
switch(d.a){case 0:return W.XN
case 2:return F.XO
case 1:return K.l7
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.v?$.j2():$.v4()}return K.l7}}
var z=a.updateTypes(["S<~>()"])
B.b3R.prototype={
$1(d){return A.cmv(d)},
$S:201}
B.c5v.prototype={
$1(d){var x=null
return new A.a6(T.HS,A.Y(d.m_(),x,x,x,x,x,x,x,V.Dy,x,x,x,x,x),x)},
$S:326}
B.c5w.prototype={
$0(){A_.fD(this.a,!1).f.tZ(null)},
$S:0}
B.c5x.prototype={
$1(d){return this.aGS(d)},
aGS(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=E.cvv(d.a)
if(s==null){x=1
break}t=s.z
A.h0().$1(t)
x=3
return A.c(u.a.vQ(J.au(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:344}
B.c5y.prototype={
$0(){},
$S:0}
B.c5z.prototype={
$0(){},
$S:0}
B.c5A.prototype={
$0(){},
$S:0}
B.c5B.prototype={
$0(){},
$S:0}
B.c5u.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.Ce},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.acu.prototype,"gaXH","SZ",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bF,[B.b3R,B.c5v,B.c5x])
w(B.QZ,A.dT)
w(B.Dr,A.F)
w(B.acu,A.L)
x(A.ck,[B.c5w,B.c5y,B.c5z,B.c5A,B.c5B,B.c5u])})()
A.bk(b.typeUniverse,JSON.parse('{"Dr":{"F":[],"d":[]},"acu":{"L":["Dr"]}}'))
var y=(function rtii(){var x=A.z
return{k:x("q<j3>"),p:x("q<d>"),j:x("B<@>"),P:x("ab<e,@>"),K:x("hi"),u:x("qh"),N:x("e"),q:x("EN"),y:x("x"),z:x("@"),C:x("hb?"),H:x("~")}})();(function constants(){D.Cd=new B.QZ(0,"valid")
D.a2A=new B.QZ(1,"invalid")
D.Ce=new B.QZ(2,"used")
D.a2C=new B.QZ(3,"nothing")
D.b47=new A.bY("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4u=new A.bY("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_267",e:"endPart",h:b})})($__dart_deferred_initializers__,"xk7h8AeVkhFWvqcA9RkAahBAoNU=");