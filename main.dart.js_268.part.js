((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_268",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,I,P,Q,R,K,S,B={
b72(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$b72=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.MZ().dI("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b72)
case 3:r=g
s=J.a1(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=G.cJs(y.P.a(s.h(r,"ticket")))
if(s.a3(r,"order")&&s.h(r,"order")!=null)u.Q=G.cGQ(s.h(r,"order"))
if(s.a3(r,"products")&&s.h(r,"products")!=null){t=J.bY(y.j.a(s.h(r,"products")),new B.b73(),y.K)
u.z=A.H(t,!0,t.$ti.i("a9.E"))}if(s.a3(r,"spot")&&s.h(r,"spot")!=null)u.y=G.ctj(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b72,w)},
b77(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$b77=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.MZ().dI("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b77)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b77,w)},
b73:function b73(){},
d5C(d,e){return new B.DY(e,d)},
Sl:function Sl(d,e){this.a=d
this.b=e},
DY:function DY(d,e){this.c=d
this.a=e},
aea:function aea(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cd1:function cd1(){},
cd2:function cd2(d){this.a=d},
cd3:function cd3(d){this.a=d},
cd4:function cd4(){},
cd5:function cd5(){},
cd6:function cd6(){},
cd7:function cd7(){},
cd0:function cd0(d){this.a=d}},D,E,F,T,U,V,W,G,X,Y,Z,A_,L,H,A0,A1
J=c[1]
A=c[0]
C=c[2]
M=c[198]
N=c[227]
O=c[205]
I=c[201]
P=c[95]
Q=c[287]
R=c[101]
K=c[230]
S=c[288]
B=a.updateHolder(c[22],B)
D=c[286]
E=c[36]
F=c[225]
T=c[65]
U=c[285]
V=c[289]
W=c[71]
G=c[80]
X=c[229]
Y=c[186]
Z=c[210]
A_=c[224]
L=c[208]
H=c[191]
A0=c[195]
A1=c[228]
B.Sl.prototype={
J(){return"ScanState."+this.b}}
B.DY.prototype={
M(){return new B.aea(D.a9w,new Y.cr(A_.aw,$.ab()),E.cGr(F.KR,A.a([C.nl],y.k)))}}
B.aea.prototype={
l(){this.x.l()
var x=this.r
x.R$=$.ab()
x.O$=0
this.af()},
aV(){var x=0,w=A.k(y.H),v=this,u
var $async$aV=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.c8()
if(v.a.c==null&&v.c.hh(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hh(y.u).f.f[0].a.vU(0,"scanCode")}$.xQ().ah4("https://unpkg.com/@zxing/library@0.21.3")
A.dO(v.a.c)
v.NE()
return A.i(null,w)}})
return A.j($async$aV,w)},
NE(){var x=0,w=A.k(y.H),v=this,u,t
var $async$NE=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.ik(A.cu(0,0,0,500,0),null,y.z),$async$NE)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(T.OS(u,A.t("Enter Scan Code",null),null,A.t("Scan Code",null)),$async$NE)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$NE,w)},
a9G(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bV(new A.a5(F.Ld,H.bk(D.bEV,q),q),q,q)
x=r.f
if(x===D.FD)w=O.k5
else if(x===D.a9u)w=F.M8
else{if(x!==D.FE)return C.ae
w=U.ru}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.Z(u).i("P<1,a5>")
v.push(A.aj(A.H(new A.P(u,new B.cd1(),t),!0,t.i("a9.E")),C.K,C.f,C.h,q,C.m))}v.push(L.an)
u=r.e.Q.a0U()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.T(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.abA,C.b1,q,q,q,q))
x=A.a([A.bV(A.aj(v,C.i,C.f,C.h,q,C.m),q,q),L.an,A.bp(w,C.r,q,30),Z.a2],x)
if(r.f===D.FD)x.push(A.dm(!1,H.bk(D.bEy,q),q,q,q,q,q,q,r.gb_1(),q,q))
return new A.a5(I.b_,A.aj(x,C.i,C.f,C.h,q,C.m),q)},
B(d){var x=this,w=null,v=x.e==null?R.bHL(d):x.a1O(x.f),u=A.c4(w,w,w,w,w,w,A.bp(N.iw,C.cp,w,w),w,w,w,new B.cd2(d),w,w,w,w,w),t=y.p
return M.f4(w,v,A.jx(!0,new A.cv(C.ai,w,C.af,C.A,A.a([A.aj(A.a([new A.a5(I.b_,A.av(A.a([u,A.bD(A.T("",w,w,w,w,w,w,w,A.aD(w,w,C.cp,w,w,w,w,w,w,w,w,20,w,w,C.a6,w,w,!0,w,w,w,w,w,w,w,w),C.b1,w,w,w,w),1,w)],t),C.i,C.f,C.h,0,w),w),x.a9G(),A.bD(E.cGq(x.x,A1.IQ,new B.cd3(x)),1,w)],t),C.i,C.f,C.h,w,C.m)],t),w),!0,C.X,!0,!0),w,w,w,w,w)},
w1(d){return this.aNz(d)},
aNz(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$w1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.b72(d,t),$async$w1)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.FD
E.qa()
u.A(new B.cd4())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a9u
E.qa()
E.qa()
u.A(new B.cd5())
x=1
break}else if(s&&t.e==="used"){u.f=D.FE
E.qa()
E.qa()
u.A(new B.cd6())
x=1
break}}u.f=D.a9w
u.A(new B.cd7())
case 1:return A.i(v,w)}})
return A.j($async$w1,w)},
Tp(){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$Tp=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.b77(s,t),$async$Tp)
case 3:if(e){u.A(new B.cd0(u))
E.qa()}else{E.qa()
E.qa()
u.c.ac(y.q).f.ahQ(P.cIE(null,null,null,null,null,C.A,null,H.bk(A.T("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,Q.L2,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$Tp,w)},
a1O(d){var x
switch(d.a){case 0:return X.a3T
case 2:return F.a3U
case 1:return K.mF
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.t?$.is():$.pV()}return K.mF}}
var z=a.updateTypes(["V<~>()"])
B.b73.prototype={
$1(d){return A.a47(d)},
$S:107}
B.cd1.prototype={
$1(d){var x=null
return new A.a5(S.BP,A.T(d.lj(),x,x,x,x,x,x,x,V.GS,x,x,x,x,x),x)},
$S:346}
B.cd2.prototype={
$0(){A0.ff(this.a,!1).f.el(null)},
$S:0}
B.cd3.prototype={
$1(d){return this.aJ0(d)},
aJ0(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=W.cv3(d.a)
if(s==null){x=1
break}t=s.z
A.hn().$1(t)
x=3
return A.d(u.a.w1(J.am(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:366}
B.cd4.prototype={
$0(){},
$S:0}
B.cd5.prototype={
$0(){},
$S:0}
B.cd6.prototype={
$0(){},
$S:0}
B.cd7.prototype={
$0(){},
$S:0}
B.cd0.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.FE},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.aea.prototype,"gb_1","Tp",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bN,[B.b73,B.cd1,B.cd3])
w(B.Sl,A.dW)
w(B.DY,A.I)
w(B.aea,A.M)
x(A.cp,[B.cd2,B.cd4,B.cd5,B.cd6,B.cd7,B.cd0])})()
A.bt(b.typeUniverse,JSON.parse('{"DY":{"I":[],"e":[]},"aea":{"M":["DY"]}}'))
var y=(function rtii(){var x=A.A
return{k:x("r<jq>"),p:x("r<e>"),j:x("C<@>"),P:x("B<m,@>"),K:x("eN"),u:x("qJ"),N:x("m"),q:x("FD"),y:x("x"),z:x("@"),C:x("hc?"),H:x("~")}})();(function constants(){D.FD=new B.Sl(0,"valid")
D.a9u=new B.Sl(1,"invalid")
D.FE=new B.Sl(2,"used")
D.a9w=new B.Sl(3,"nothing")
D.bEy=new A.c9("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bEV=new A.c9("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_268",e:"endPart",h:b})})($__dart_deferred_initializers__,"1P8wTp4fB/jROSL+vNCdAT97lr8=");