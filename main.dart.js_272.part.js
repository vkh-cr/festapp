((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_272",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,I,O,P,Q,R,S,K,B={
b3W(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$b3W=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.c($.LE().e4("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b3W)
case 3:r=g
s=J.a2(r)
if(!J.m(s.i(r,"code"),200)){v=null
x=1
break}u=G.cA4(y.P.a(s.i(r,"ticket")))
if(s.a3(r,"order")&&s.i(r,"order")!=null)u.Q=G.cxh(s.i(r,"order"))
if(s.a3(r,"products")&&s.i(r,"products")!=null){t=J.ch(y.j.a(s.i(r,"products")),new B.b3X(),y.K)
u.z=A.J(t,!0,t.$ti.h("ad.E"))}if(s.a3(r,"spot")&&s.i(r,"spot")!=null)u.y=G.ckt(s.i(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b3W,w)},
b40(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$b40=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.c($.LE().e4("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b40)
case 3:v=t.m(s.u(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b40,w)},
b3X:function b3X(){},
cW5(d,e){return new B.Dr(e,d)},
R5:function R5(d,e){this.a=d
this.b=e},
Dr:function Dr(d,e){this.c=d
this.a=e},
acz:function acz(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
c5G:function c5G(){},
c5H:function c5H(d){this.a=d},
c5I:function c5I(d){this.a=d},
c5J:function c5J(){},
c5K:function c5K(){},
c5L:function c5L(){},
c5M:function c5M(){},
c5F:function c5F(d){this.a=d}},D,E,F,T,U,V,W,G,X,Y,Z,A_,L,H,A0
J=c[1]
A=c[0]
C=c[2]
M=c[204]
N=c[230]
I=c[209]
O=c[200]
P=c[229]
Q=c[94]
R=c[287]
S=c[99]
K=c[232]
B=a.updateHolder(c[22],B)
D=c[286]
E=c[36]
F=c[227]
T=c[62]
U=c[288]
V=c[285]
W=c[289]
G=c[78]
X=c[231]
Y=c[186]
Z=c[210]
A_=c[226]
L=c[208]
H=c[192]
A0=c[197]
B.R5.prototype={
J(){return"ScanState."+this.b}}
B.Dr.prototype={
M(){return new B.acz(D.a2J,new Y.dy(A_.aS,$.ae()),E.cwT(F.Hs,A.a([C.lT],y.k)))}}
B.acz.prototype={
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
u.c=v.c.hy(y.u).f.f[0].a.vJ(0,"scanCode")}$.Ag().afu("https://unpkg.com/@zxing/library@0.21.3")
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
return A.c(T.Nu(u,A.v("Enter Scan Code",null),null,A.v("Scan Code",null)),$async$No)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$No,w)},
a8r(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bY(new A.a4(F.HW,H.bb(D.b4y,q),q),q,q)
x=r.f
if(x===D.Cf)w=M.j3
else if(x===D.a2H)w=F.IU
else{if(x!==D.Cg)return C.aa
w=V.pq}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.Y(u).h("R<1,a4>")
v.push(A.aw(A.J(new A.R(u,new B.c5G(),t),!0,t.h("ad.E")),C.T,C.f,C.h,q,C.p))}v.push(L.aH)
u=r.e.Q.a01()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.X(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.a4A,C.bj,q,q,q,q))
x=A.a([A.bY(A.aw(v,C.i,C.f,C.h,q,C.p),q,q),L.aH,A.bz(w,C.o,q,30),Z.ad],x)
if(r.f===D.Cf)x.push(A.ds(!1,H.bb(D.b4b,q),q,q,q,q,q,q,r.gaXO(),q,q))
return new A.a4(I.aW,A.aw(x,C.i,C.f,C.h,q,C.p),q)},
A(d){var x=this,w=null,v=x.e==null?S.bEl(d):x.a0V(x.f),u=A.cc(w,w,w,w,w,w,A.bz(P.hJ,C.cs,w,w),w,w,w,new B.c5H(d),w,w,w,w,w),t=y.p
return O.eW(w,v,A.k4(!0,new A.co(C.ae,w,C.ab,C.z,A.a([A.aw(A.a([new A.a4(I.aW,A.aE(A.a([u,A.bZ(A.X("",w,w,w,w,w,w,w,A.aK(w,w,C.cs,w,w,w,w,w,w,w,w,20,w,w,C.a4,w,w,!0,w,w,w,w,w,w,w,w),C.bj,w,w,w,w),1,w)],t),C.i,C.f,C.h,w),w),x.a8r(),A.bZ(E.cwS(x.x,N.Fs,new B.c5I(x)),1,w)],t),C.i,C.f,C.h,w,C.p)],t),w),!0,C.V,!0,!0),w,w,w,w,w)},
vR(d){return this.aLl(d)},
aLl(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$vR=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.c(B.b3W(d,t),$async$vR)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.Cf
E.pQ()
u.B(new B.c5J())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a2H
E.pQ()
E.pQ()
u.B(new B.c5K())
x=1
break}else if(s&&t.e==="used"){u.f=D.Cg
E.pQ()
E.pQ()
u.B(new B.c5L())
x=1
break}}u.f=D.a2J
u.B(new B.c5M())
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
return A.c(B.b40(s,t),$async$SZ)
case 3:if(e){u.B(new B.c5F(u))
E.pQ()}else{E.pQ()
E.pQ()
u.c.ad(y.q).f.agf(Q.czj(null,null,null,null,null,C.z,null,H.bb(A.X("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,R.HJ,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$SZ,w)},
a0V(d){var x
switch(d.a){case 0:return X.XU
case 2:return F.XV
case 1:return K.lb
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.u?$.j3():$.qF()}return K.lb}}
var z=a.updateTypes(["S<~>()"])
B.b3X.prototype={
$1(d){return A.cn0(d)},
$S:199}
B.c5G.prototype={
$1(d){var x=null
return new A.a4(U.HX,A.X(d.m_(),x,x,x,x,x,x,x,W.Dy,x,x,x,x,x),x)},
$S:205}
B.c5H.prototype={
$0(){A0.fs(this.a,!1).f.tZ(null)},
$S:0}
B.c5I.prototype={
$1(d){return this.aGZ(d)},
aGZ(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=E.cw2(d.a)
if(s==null){x=1
break}t=s.z
A.h0().$1(t)
x=3
return A.c(u.a.vR(J.au(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:221}
B.c5J.prototype={
$0(){},
$S:0}
B.c5K.prototype={
$0(){},
$S:0}
B.c5L.prototype={
$0(){},
$S:0}
B.c5M.prototype={
$0(){},
$S:0}
B.c5F.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.Cg},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.acz.prototype,"gaXO","SZ",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bE,[B.b3X,B.c5G,B.c5I])
w(B.R5,A.e2)
w(B.Dr,A.F)
w(B.acz,A.K)
x(A.ci,[B.c5H,B.c5J,B.c5K,B.c5L,B.c5M,B.c5F])})()
A.bi(b.typeUniverse,JSON.parse('{"Dr":{"F":[],"d":[]},"acz":{"K":["Dr"]}}'))
var y=(function rtii(){var x=A.y
return{k:x("q<j4>"),p:x("q<d>"),j:x("B<@>"),P:x("ac<e,@>"),K:x("hi"),u:x("qi"),N:x("e"),q:x("EO"),y:x("x"),z:x("@"),C:x("hb?"),H:x("~")}})();(function constants(){D.Cf=new B.R5(0,"valid")
D.a2H=new B.R5(1,"invalid")
D.Cg=new B.R5(2,"used")
D.a2J=new B.R5(3,"nothing")
D.b4b=new A.c_("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4y=new A.c_("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_272",e:"endPart",h:b})})($__dart_deferred_initializers__,"YlqHdP0jazYYqa5uP7YDNon9JyI=");