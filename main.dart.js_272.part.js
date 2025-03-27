((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_272",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,I,P,Q,R,K,B={
b4L(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$b4L=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.c($.LU().e1("scan_ticket",A.y(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b4L)
case 3:r=g
s=J.a2(r)
if(!J.m(s.i(r,"code"),200)){v=null
x=1
break}u=G.cC2(y.P.a(s.i(r,"ticket")))
if(s.a3(r,"order")&&s.i(r,"order")!=null)u.Q=G.cza(s.i(r,"order"))
if(s.a3(r,"products")&&s.i(r,"products")!=null){t=J.c7(y.j.a(s.i(r,"products")),new B.b4M(),y.K)
u.z=A.H(t,!0,t.$ti.h("ab.E"))}if(s.a3(r,"spot")&&s.i(r,"spot")!=null)u.y=G.cmh(s.i(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b4L,w)},
b4Q(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$b4Q=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.c($.LU().e1("update_ticket_to_used",A.y(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b4Q)
case 3:v=t.m(s.v(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b4Q,w)},
b4M:function b4M(){},
cXN(d,e){return new B.Ds(e,d)},
Rl:function Rl(d,e){this.a=d
this.b=e},
Ds:function Ds(d,e){this.c=d
this.a=e},
acW:function acW(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
c7i:function c7i(){},
c7j:function c7j(d){this.a=d},
c7k:function c7k(d){this.a=d},
c7l:function c7l(){},
c7m:function c7m(){},
c7n:function c7n(){},
c7o:function c7o(){},
c7h:function c7h(d){this.a=d}},D,E,F,S,T,U,V,G,W,X,Y,Z,L,H,A_,A0
J=c[1]
A=c[0]
C=c[2]
M=c[201]
N=c[229]
O=c[205]
I=c[211]
P=c[91]
Q=c[289]
R=c[97]
K=c[232]
B=a.updateHolder(c[22],B)
D=c[288]
E=c[36]
F=c[227]
S=c[62]
T=c[290]
U=c[287]
V=c[291]
G=c[77]
W=c[231]
X=c[186]
Y=c[212]
Z=c[226]
L=c[209]
H=c[192]
A_=c[198]
A0=c[230]
B.Rl.prototype={
J(){return"ScanState."+this.b}}
B.Ds.prototype={
M(){return new B.acW(D.a2I,new X.cx(Z.aB,$.a8()),E.cyM(F.Hw,A.a([C.m0],y.k)))}}
B.acW.prototype={
l(){this.x.l()
var x=this.r
x.S$=$.a8()
x.T$=0
this.ag()},
aS(){var x=0,w=A.k(y.H),v=this,u
var $async$aS=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.c7()
if(v.a.c==null&&v.c.hq(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hq(y.u).f.f[0].a.xO(0,"scanCode")}$.Ag().aft("https://unpkg.com/@zxing/library@0.21.3")
A.eq(v.a.c)
v.Ng()
return A.i(null,w)}})
return A.j($async$aS,w)},
Ng(){var x=0,w=A.k(y.H),v=this,u,t
var $async$Ng=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(A.ii(A.co(0,0,0,500,0),null,y.z),$async$Ng)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.c(S.NJ(u,A.r("Enter Scan Code",null),null,A.r("Scan Code",null)),$async$Ng)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$Ng,w)},
a8o(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bU(new A.a3(F.HY,H.bc(D.b4O,q),q),q,q)
x=r.f
if(x===D.Ct)w=O.ja
else if(x===D.a2G)w=F.IU
else{if(x!==D.Cu)return C.a9
w=U.pD}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.X(u).h("O<1,a3>")
v.push(A.am(A.H(new A.O(u,new B.c7i(),t),!0,t.h("ab.E")),C.M,C.f,C.h,q,C.l))}v.push(L.am)
u=r.e.Q.a_Z()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.W(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.a4E,C.b6,q,q,q,q))
x=A.a([A.bU(A.am(v,C.i,C.f,C.h,q,C.l),q,q),L.am,A.bp(w,C.p,q,30),Y.a3],x)
if(r.f===D.Ct)x.push(A.dj(!1,H.bc(D.b4q,q),q,q,q,q,q,q,r.gaXq(),q,q))
return new A.a3(I.aZ,A.am(x,C.i,C.f,C.h,q,C.l),q)},
A(d){var x=this,w=null,v=x.e==null?R.bFt(d):x.a0Q(x.f),u=A.c1(w,w,w,w,w,w,A.bp(N.hK,C.cs,w,w),w,w,w,new B.c7j(d),w,w,w,w,w),t=y.p
return M.f2(w,v,A.jl(!0,new A.cs(C.af,w,C.ac,C.z,A.a([A.am(A.a([new A.a3(I.aZ,A.aw(A.a([u,A.bI(A.W("",w,w,w,w,w,w,w,A.aB(w,w,C.cs,w,w,w,w,w,w,w,w,20,w,w,C.a4,w,w,!0,w,w,w,w,w,w,w,w),C.b6,w,w,w,w),1,w)],t),C.i,C.f,C.h,0,w),w),x.a8o(),A.bI(E.cyL(x.x,A0.Fx,new B.c7k(x)),1,w)],t),C.i,C.f,C.h,w,C.l)],t),w),!0,C.U,!0,!0),w,w,w,w,w)},
vS(d){return this.aLc(d)},
aLc(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$vS=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.c(B.b4L(d,t),$async$vS)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.Ct
E.pR()
u.B(new B.c7l())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a2G
E.pR()
E.pR()
u.B(new B.c7m())
x=1
break}else if(s&&t.e==="used"){u.f=D.Cu
E.pR()
E.pR()
u.B(new B.c7n())
x=1
break}}u.f=D.a2I
u.B(new B.c7o())
case 1:return A.i(v,w)}})
return A.j($async$vS,w)},
SZ(){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$SZ=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.c(B.b4Q(s,t),$async$SZ)
case 3:if(e){u.B(new B.c7h(u))
E.pR()}else{E.pR()
E.pR()
u.c.ad(y.q).f.age(P.cBe(null,null,null,null,null,C.z,null,H.bc(A.W("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,Q.HM,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$SZ,w)},
a0Q(d){var x
switch(d.a){case 0:return W.XS
case 2:return F.XT
case 1:return K.li
case 3:x=this.c
x.toString
return A.C(x).ax.a===C.t?$.iO():$.qF()}return K.li}}
var z=a.updateTypes(["T<~>()"])
B.b4M.prototype={
$1(d){return A.coR(d)},
$S:203}
B.c7i.prototype={
$1(d){var x=null
return new A.a3(T.HZ,A.W(d.lE(),x,x,x,x,x,x,x,V.DH,x,x,x,x,x),x)},
$S:357}
B.c7j.prototype={
$0(){A_.eX(this.a,!1).f.eB(null)},
$S:0}
B.c7k.prototype={
$1(d){return this.aGS(d)},
aGS(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=E.cxV(d.a)
if(s==null){x=1
break}t=s.z
A.h7().$1(t)
x=3
return A.c(u.a.vS(J.ap(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:243}
B.c7l.prototype={
$0(){},
$S:0}
B.c7m.prototype={
$0(){},
$S:0}
B.c7n.prototype={
$0(){},
$S:0}
B.c7o.prototype={
$0(){},
$S:0}
B.c7h.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.Cu},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.acW.prototype,"gaXq","SZ",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bA,[B.b4M,B.c7i,B.c7k])
w(B.Rl,A.e3)
w(B.Ds,A.F)
w(B.acW,A.K)
x(A.ci,[B.c7j,B.c7l,B.c7m,B.c7n,B.c7o,B.c7h])})()
A.bm(b.typeUniverse,JSON.parse('{"Ds":{"F":[],"d":[]},"acW":{"K":["Ds"]}}'))
var y=(function rtii(){var x=A.z
return{k:x("q<ja>"),p:x("q<d>"),j:x("A<@>"),P:x("ae<e,@>"),K:x("hs"),u:x("qj"),N:x("e"),q:x("EN"),y:x("x"),z:x("@"),C:x("hi?"),H:x("~")}})();(function constants(){D.Ct=new B.Rl(0,"valid")
D.a2G=new B.Rl(1,"invalid")
D.Cu=new B.Rl(2,"used")
D.a2I=new B.Rl(3,"nothing")
D.b4q=new A.c0("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4O=new A.c0("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_272",e:"endPart",h:b})})($__dart_deferred_initializers__,"8phXCJb8KakQXk40MksJCkqEFG4=");