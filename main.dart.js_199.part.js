((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_199",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,N,K,L,B={
b0h(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$b0h=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.c($.i5().fj("scan_ticket",A.y(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b0h)
case 3:r=g
s=J.a1(r)
if(!J.m(s.i(r,"code"),200)){v=null
x=1
break}u=H.csP(y.P.a(s.i(r,"ticket")))
if(s.a1(r,"order")&&s.i(r,"order")!=null)u.Q=H.cq7(s.i(r,"order"))
if(s.a1(r,"products")&&s.i(r,"products")!=null){t=J.cd(y.j.a(s.i(r,"products")),new B.b0i(),y.K)
u.z=A.H(t,!0,t.$ti.h("a9.E"))}if(s.a1(r,"spot")&&s.i(r,"spot")!=null)u.y=H.cdd(s.i(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$b0h,w)},
b0r(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$b0r=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.c($.i5().fj("update_ticket_to_used",A.y(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b0r)
case 3:v=t.m(s.t(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$b0r,w)},
b0i:function b0i(){},
cOA(d,e){return new B.CK(e,d)},
PL:function PL(d,e){this.a=d
this.b=e},
CK:function CK(d,e){this.c=d
this.a=e},
aaU:function aaU(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
c_d:function c_d(){},
c_e:function c_e(d){this.a=d},
c_f:function c_f(d){this.a=d},
c_g:function c_g(){},
c_h:function c_h(){},
c_i:function c_i(){},
c_j:function c_j(){},
c_c:function c_c(d){this.a=d}},D,E,F,O,H,P,Q,R,S,T,U,V,W,M,I,G,X,Y
J=c[1]
A=c[0]
C=c[2]
N=c[201]
K=c[190]
L=c[203]
B=a.updateHolder(c[22],B)
D=c[274]
E=c[33]
F=c[197]
O=c[58]
H=c[82]
P=c[273]
Q=c[246]
R=c[72]
S=c[275]
T=c[202]
U=c[165]
V=c[191]
W=c[196]
M=c[216]
I=c[174]
G=c[180]
X=c[198]
Y=c[200]
B.PL.prototype={
H(){return"ScanState."+this.b}}
B.CK.prototype={
M(){return new B.aaU(D.a1w,new U.eM(W.bg,$.ai()),E.cpL(F.GF,A.a([C.lD],y.k)))}}
B.aaU.prototype={
l(){this.x.l()
var x=this.r
x.Y$=$.ai()
x.X$=0
this.ah()},
aW(){var x=0,w=A.l(y.H),v=this,u
var $async$aW=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.cw()
if(v.a.c==null&&v.c.i1(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.i1(y.u).f.f[0].a.xh(0,"scanCode")}$.zA().aeg("https://unpkg.com/@zxing/library@0.21.3")
A.ed(v.a.c)
v.MC()
return A.j(null,w)}})
return A.k($async$aW,w)},
MC(){var x=0,w=A.l(y.H),v=this,u,t
var $async$MC=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.c(A.hS(A.cl(0,0,0,500,0),null,y.z),$async$MC)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.c(O.Mn(u,A.C("Enter Scan Code",null),null,A.C("Scan Code",null)),$async$MC)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$MC,w)},
a7t(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.cg(new A.ab(F.H2,I.bj(D.b38,q),q),q,q)
x=r.f
if(x===D.BC)w=X.k9
else if(x===D.a1u)w=F.HU
else{if(x!==D.BD)return C.a5
w=P.p7}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.V(u).h("O<1,ab>")
v.push(A.aR(A.H(new A.O(u,new B.c_d(),t),!0,t.h("a9.E")),C.ak,C.h,C.l,q,C.u))}v.push(M.e0)
u=r.e.Q.a_2()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.a4(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.a3p,C.bp,q,q,q,q))
x=A.a([A.cg(A.aR(v,C.j,C.h,C.l,q,C.u),q,q),M.e0,G.c3(w,C.r,q,30),V.aR],x)
if(r.f===D.BC)x.push(A.e0(!1,I.bj(D.b2P,q),q,q,C.E,q,q,q,q,r.gaVn(),q,q))
return new A.ab(K.bW,A.aR(x,C.j,C.h,C.l,q,C.u),q)},
A(d){var x=this,w=null,v=x.e==null?E.cgE(d):x.a0_(x.f),u=G.cH(w,w,w,w,w,G.c3(Y.hn,C.ch,w,w),w,w,w,new B.c_e(d),w,w,w,w,w),t=y.p
return G.fx(w,v,A.kd(!0,A.dd(C.af,A.a([A.aR(A.a([new A.ab(K.bW,A.b5(A.a([u,A.cy(A.a4("",w,w,w,w,w,w,w,A.b9(w,w,C.ch,w,w,w,w,w,w,w,w,20,w,w,C.aq,w,w,!0,w,w,w,w,w,w,w,w),C.bp,w,w,w,w),1,w)],t),C.j,C.h,C.l,w),w),x.a7t(),A.cy(E.cpK(x.x,N.EF,new B.c_f(x)),1,w)],t),C.j,C.h,C.l,w,C.u)],t),C.D,C.ac,w),!0,C.W,!0,!0),w,w,w,w)},
vB(d){return this.aJm(d)},
aJm(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$vB=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.c(B.b0h(d,t),$async$vB)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.BC
E.pp()
u.E(new B.c_g())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a1u
E.pp()
E.pp()
u.E(new B.c_h())
x=1
break}else if(s&&t.e==="used"){u.f=D.BD
E.pp()
E.pp()
u.E(new B.c_i())
x=1
break}}u.f=D.a1w
u.E(new B.c_j())
case 1:return A.j(v,w)}})
return A.k($async$vB,w)},
S6(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$S6=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.c(B.b0r(s,t),$async$S6)
case 3:if(e){u.E(new B.c_c(u))
E.pp()}else{E.pp()
E.pp()
u.c.ad(y.q).f.aJH(R.cs6(null,null,null,null,null,C.D,null,I.bj(A.a4("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,S.ahi,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$S6,w)},
a0_(d){var x
switch(d.a){case 0:return T.WM
case 2:return F.WL
case 1:return L.kN
case 3:x=this.c
x.toString
return A.J(x).ax.a===C.y?$.jw():$.uC()}return L.kN}}
var z=a.updateTypes(["iX(@)","Q<~>()","ab(iX)"])
B.b0i.prototype={
$1(d){return H.cfS(d)},
$S:z+0}
B.c_d.prototype={
$1(d){var x=null
return new A.ab(D.ahP,A.a4(d.lH(),x,x,x,x,x,x,x,Q.CT,x,x,x,x,x),x)},
$S:z+2}
B.c_e.prototype={
$0(){G.fH(this.a,!1).f.re(null)},
$S:0}
B.c_f.prototype={
$1(d){return this.aEZ(d)},
aEZ(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=E.coW(d.a)
if(s==null){x=1
break}t=s.z
A.fS().$1(t)
x=3
return A.c(u.a.vB(J.as(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:203}
B.c_g.prototype={
$0(){},
$S:0}
B.c_h.prototype={
$0(){},
$S:0}
B.c_i.prototype={
$0(){},
$S:0}
B.c_j.prototype={
$0(){},
$S:0}
B.c_c.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.BD},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.aaU.prototype,"gaVn","S6",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bH,[B.b0i,B.c_d,B.c_f])
w(B.PL,A.e5)
w(B.CK,A.G)
w(B.aaU,A.K)
x(A.cf,[B.c_e,B.c_g,B.c_h,B.c_i,B.c_j,B.c_c])})()
A.br(b.typeUniverse,JSON.parse('{"CK":{"G":[],"d":[]},"aaU":{"K":["CK"]}}'))
var y=(function rtii(){var x=A.w
return{k:x("p<iJ>"),p:x("p<d>"),j:x("A<@>"),P:x("a8<e,@>"),K:x("iX"),u:x("r2"),N:x("e"),q:x("K6"),y:x("u"),z:x("@"),C:x("ii?"),H:x("~")}})();(function constants(){D.ahP=new A.ap(0,2,0,2)
D.BC=new B.PL(0,"valid")
D.a1u=new B.PL(1,"invalid")
D.BD=new B.PL(2,"used")
D.a1w=new B.PL(3,"nothing")
D.b2P=new A.c6("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b38=new A.c6("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_199",e:"endPart",h:b})})($__dart_deferred_initializers__,"prjH6Kwhaxr99K8Ptn4rqlsNxIU=");