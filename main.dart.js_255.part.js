((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_255",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,L,G,M,N,K,O,B={
bbV(d,e){return B.dcS(d,e)},
dcS(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$bbV=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.O9().dt("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bbV)
case 3:r=g
s=J.a1(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=H.cWw(y.P.a(s.h(r,"ticket")))
if(s.a5(r,"order")&&s.h(r,"order")!=null)u.Q=H.cTV(s.h(r,"order"))
if(s.a5(r,"products")&&s.h(r,"products")!=null){t=J.bA(y.j.a(s.h(r,"products")),new B.bbW(),y.K)
t=A.E(t,t.$ti.i("a6.E"))
u.z=t}if(s.a5(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cGc(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbV,w)},
bc_(d,e){return B.dcX(d,e)},
dcX(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$bc_=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.O9().dt("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bc_)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bc_,w)},
bbW:function bbW(){},
dlL(d,e){return new B.Ff(e,d)},
TK:function TK(d,e){this.a=d
this.b=e},
Ff:function Ff(d,e){this.c=d
this.a=e},
agJ:function agJ(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
coR:function coR(){},
coS:function coS(d){this.a=d},
coT:function coT(d){this.a=d},
coU:function coU(){},
coV:function coV(){},
coW:function coW(){},
coX:function coX(){},
coQ:function coQ(d){this.a=d}},D,E,F,P,Q,R,S,T,U,H,V,W
J=c[1]
A=c[0]
C=c[2]
I=c[180]
L=c[176]
G=c[175]
M=c[100]
N=c[253]
K=c[199]
O=c[254]
B=a.updateHolder(c[22],B)
D=c[252]
E=c[37]
F=c[195]
P=c[64]
Q=c[196]
R=c[177]
S=c[250]
T=c[255]
U=c[102]
H=c[83]
V=c[198]
W=c[182]
B.TK.prototype={
I(){return"ScanState."+this.b}}
B.Ff.prototype={
M(){return new B.agJ(D.abv,new A.cr(C.aw,$.a9()),E.cTr(F.Mh,A.a([C.nY],y.k)))}}
B.agJ.prototype={
l(){this.x.l()
var x=this.r
x.a8$=$.a9()
x.Y$=0
this.ai()},
aZ(){var x=0,w=A.l(y.H),v=this,u
var $async$aZ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.c8()
if(v.a.c==null&&J.fU(v.c.hx(y.u).f.r)){u=v.a
u.toString
u.c=J.v(v.c.hx(y.u).f.r,0).a.wa(0,"scanCode")}$.yz().ajj("https://unpkg.com/@zxing/library@0.21.3")
A.cZ(v.a.c)
v.OR()
return A.j(null,w)}})
return A.k($async$aZ,w)},
OR(){var x=0,w=A.l(y.H),v=this,u,t
var $async$OR=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hB(A.c3(0,0,0,500,0,0),null,y.z),$async$OR)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.Q2(u,A.r("Enter Scan Code",null),null,A.r("Scan Code",null)),$async$OR)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$OR,w)},
abE(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bF(new A.a3(F.ME,G.bw(D.bJt,q),q),q,q)
x=r.f
if(x===D.GP)w=W.kD
else if(x===D.abt)w=Q.Ds
else{if(x!==D.GQ)return C.a6
w=S.ta}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.V(u).i("K<1,a3>")
u=A.E(new A.K(u,new B.coR(),t),t.i("a6.E"))
v.push(A.ah(u,C.K,C.f,C.i,0,q,C.m))}v.push(C.al)
u=r.e.Q.a2w()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.P(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.adN,C.b0,q,q,q,q))
x=A.a([A.bF(A.ah(v,C.j,C.f,C.i,0,q,C.m),q,q),C.al,A.aY(w,C.p,q,30),C.a2],x)
if(r.f===D.GP)x.push(A.dy(!1,G.bw(D.bJ9,q),q,q,q,q,q,q,r.gb3c(),q,q))
return new A.a3(I.aT,A.ah(x,C.j,C.f,C.i,0,q,C.m),q)},
B(d){var x=this,w=null,v=x.e==null?A.bOI(d):x.a3o(x.f),u=A.bW(w,w,w,w,w,w,A.aY(C.j0,C.cQ,w,w),w,w,w,new B.coS(d),w,w,w,w,w),t=y.p
return R.f9(w,v,A.jw(!0,new A.cj(C.ad,w,C.ab,C.v,A.a([A.ah(A.a([new A.a3(I.aT,A.at(A.a([u,A.bj(A.P("",w,w,w,w,w,w,w,A.an(w,w,C.cQ,w,w,w,w,w,w,w,w,20,w,w,C.X,w,w,!0,w,w,w,w,w,w,w,w),C.b0,w,w,w,w),1,w)],t),C.j,C.f,C.i,0,w),w),x.abE(),A.bj(E.cTq(x.x,C.Bj,new B.coT(x)),1,w)],t),C.j,C.f,C.i,0,w,C.m)],t),w),!0,C.Q,!0,!0),w,w,w,w,w)},
wh(d){return this.aR2(d)},
aR2(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$wh=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bbV(d,t),$async$wh)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.GP
E.qG()
u.A(new B.coU())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.abt
E.qG()
E.qG()
u.A(new B.coV())
x=1
break}else if(s&&t.e==="used"){u.f=D.GQ
E.qG()
E.qG()
u.A(new B.coW())
x=1
break}}u.f=D.abv
u.A(new B.coX())
case 1:return A.j(v,w)}})
return A.k($async$wh,w)},
UL(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$UL=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bc_(s,t),$async$UL)
case 3:if(e){u.A(new B.coQ(u))
E.qG()}else{E.qG()
E.qG()
u.c.af(y.q).f.ak8(M.cVE(null,null,null,null,null,C.v,null,G.bw(A.P("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.Mt,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$UL,w)},
a3o(d){var x
switch(d.a){case 0:return V.a5N
case 2:return F.a5O
case 1:return K.l5
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.t?$.ig():$.ql()}return K.l5}}
var z=a.updateTypes(["Y<~>()"])
B.bbW.prototype={
$1(d){return A.a6e(d)},
$S:115}
B.coR.prototype={
$1(d){var x=null
return new A.a3(O.CC,A.P(d.ls(),x,x,x,x,x,x,x,T.Ia,x,x,x,x,x),x)},
$S:321}
B.coS.prototype={
$0(){L.fm(this.a,!1).f.e0(null)},
$S:0}
B.coT.prototype={
$1(d){return this.aMy(d)},
aMy(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=U.Rz(d.a)
if(s==null){x=1
break}t=s.z
A.hM().$1(t)
x=3
return A.d(u.a.wh(J.aq(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:428}
B.coU.prototype={
$0(){},
$S:0}
B.coV.prototype={
$0(){},
$S:0}
B.coW.prototype={
$0(){},
$S:0}
B.coX.prototype={
$0(){},
$S:0}
B.coQ.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.GQ},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.agJ.prototype,"gb3c","UL",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.c9,[B.bbW,B.coR,B.coT])
w(B.TK,A.eR)
w(B.Ff,A.J)
w(B.agJ,A.O)
x(A.cL,[B.coS,B.coU,B.coV,B.coW,B.coX,B.coQ])})()
A.c7(b.typeUniverse,JSON.parse('{"Ff":{"J":[],"e":[]},"agJ":{"O":["Ff"]}}'))
var y=(function rtii(){var x=A.C
return{k:x("u<jG>"),p:x("u<e>"),j:x("B<@>"),P:x("A<m,@>"),K:x("eZ"),u:x("rf"),N:x("m"),q:x("GT"),y:x("y"),z:x("@"),C:x("hu?"),H:x("~")}})();(function constants(){D.GP=new B.TK(0,"valid")
D.abt=new B.TK(1,"invalid")
D.GQ=new B.TK(2,"used")
D.abv=new B.TK(3,"nothing")
D.bJ9=new A.cq("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJt=new A.cq("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_255",e:"endPart",h:b})})($__dart_deferred_initializers__,"8hRV/R41k4DL0AYV0y66AYTczag=");