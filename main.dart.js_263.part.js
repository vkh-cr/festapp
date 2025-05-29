((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_263",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,I,G,M,N,K,O,B={
bbV(d,e){return B.dcR(d,e)},
dcR(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$bbV=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.O7().dn("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bbV)
case 3:r=g
s=J.a1(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=H.cWv(y.P.a(s.h(r,"ticket")))
if(s.a5(r,"order")&&s.h(r,"order")!=null)u.Q=H.cTV(s.h(r,"order"))
if(s.a5(r,"products")&&s.h(r,"products")!=null){t=J.bt(y.j.a(s.h(r,"products")),new B.bbW(),y.K)
t=A.E(t,t.$ti.i("a6.E"))
u.z=t}if(s.a5(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cGc(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbV,w)},
bc_(d,e){return B.dcW(d,e)},
dcW(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$bc_=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.O7().dn("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bc_)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bc_,w)},
bbW:function bbW(){},
dlL(d,e){return new B.Fe(e,d)},
TK:function TK(d,e){this.a=d
this.b=e},
Fe:function Fe(d,e){this.c=d
this.a=e},
agL:function agL(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
coU:function coU(){},
coV:function coV(d){this.a=d},
coW:function coW(d){this.a=d},
coX:function coX(){},
coY:function coY(){},
coZ:function coZ(){},
cp_:function cp_(){},
coT:function coT(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W
J=c[1]
A=c[0]
C=c[2]
L=c[178]
I=c[182]
G=c[177]
M=c[101]
N=c[256]
K=c[201]
O=c[257]
B=a.updateHolder(c[22],B)
D=c[255]
E=c[36]
F=c[197]
P=c[62]
Q=c[198]
R=c[253]
S=c[258]
T=c[103]
H=c[82]
U=c[200]
V=c[184]
W=c[179]
B.TK.prototype={
I(){return"ScanState."+this.b}}
B.Fe.prototype={
M(){return new B.agL(D.aby,new A.cp(C.aw,$.a9()),E.cTr(F.Mj,A.a([C.nY],y.k)))}}
B.agL.prototype={
l(){this.x.l()
var x=this.r
x.a8$=$.a9()
x.Y$=0
this.ai()},
b_(){var x=0,w=A.l(y.H),v=this,u
var $async$b_=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.c8()
if(v.a.c==null&&J.fU(v.c.hx(y.u).f.r)){u=v.a
u.toString
u.c=J.v(v.c.hx(y.u).f.r,0).a.wc(0,"scanCode")}$.yA().ajl("https://unpkg.com/@zxing/library@0.21.3")
A.cY(v.a.c)
v.OR()
return A.j(null,w)}})
return A.k($async$b_,w)},
OR(){var x=0,w=A.l(y.H),v=this,u,t
var $async$OR=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hq(A.c3(0,0,0,500,0,0),null,y.z),$async$OR)
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
abH(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bG(new A.a2(F.MG,G.bw(D.bJv,q),q),q,q)
x=r.f
if(x===D.GR)w=V.j1
else if(x===D.abw)w=Q.Du
else{if(x!==D.GS)return C.a5
w=R.t8}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.W(u).i("N<1,a2>")
u=A.E(new A.N(u,new B.coU(),t),t.i("a6.E"))
v.push(A.ah(u,C.K,C.f,C.i,0,q,C.m))}v.push(C.al)
u=r.e.Q.a2z()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.P(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.adR,C.b0,q,q,q,q))
x=A.a([A.bG(A.ah(v,C.j,C.f,C.i,0,q,C.m),q,q),C.al,A.aW(w,C.p,q,30),C.a2],x)
if(r.f===D.GR)x.push(A.dy(!1,G.bw(D.bJb,q),q,q,q,q,q,q,r.gb3e(),q,q))
return new A.a2(I.aT,A.ah(x,C.j,C.f,C.i,0,q,C.m),q)},
B(d){var x,w,v=this,u=null,t=v.e==null?A.bOI(d):v.a3r(v.f),s=A.bD(C.as)
s=A.bW(u,u,u,u,u,u,A.aW(C.j0,new A.br(s.a,s.b,s.c,0.8).bp(),u,u),u,u,u,new B.coV(d),u,u,u,u,u)
x=A.bD(C.as)
w=y.p
return W.fa(u,t,A.jx(!0,new A.cj(C.ad,u,C.ab,C.v,A.a([A.ah(A.a([new A.a2(I.aT,A.at(A.a([s,A.bh(A.P("",u,u,u,u,u,u,u,A.al(u,u,new A.br(x.a,x.b,x.c,0.8).bp(),u,u,u,u,u,u,u,u,20,u,u,C.X,u,u,!0,u,u,u,u,u,u,u,u),C.b0,u,u,u,u),1,u)],w),C.j,C.f,C.i,0,u),u),v.abH(),A.bh(E.cTq(v.x,C.Bh,new B.coW(v)),1,u)],w),C.j,C.f,C.i,0,u,C.m)],w),u),!0,C.Q,!0,!0),u,u,u,u,u)},
wk(d){return this.aR5(d)},
aR5(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$wk=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bbV(d,t),$async$wk)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.GR
E.qK()
u.A(new B.coX())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.abw
E.qK()
E.qK()
u.A(new B.coY())
x=1
break}else if(s&&t.e==="used"){u.f=D.GS
E.qK()
E.qK()
u.A(new B.coZ())
x=1
break}}u.f=D.aby
u.A(new B.cp_())
case 1:return A.j(v,w)}})
return A.k($async$wk,w)},
UO(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$UO=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bc_(s,t),$async$UO)
case 3:if(e){u.A(new B.coT(u))
E.qK()}else{E.qK()
E.qK()
u.c.af(y.q).f.ak9(M.cVD(null,null,null,null,null,C.v,null,G.bw(A.P("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.Mv,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$UO,w)},
a3r(d){var x
switch(d.a){case 0:return U.a5Q
case 2:return F.a5R
case 1:return K.l4
case 3:x=this.c
x.toString
return A.C(x).ax.a===C.t?$.ig():$.p1()}return K.l4}}
var z=a.updateTypes(["X<~>()"])
B.bbW.prototype={
$1(d){return A.a6j(d)},
$S:113}
B.coU.prototype={
$1(d){var x=null
return new A.a2(O.CC,A.P(d.ls(),x,x,x,x,x,x,x,S.Id,x,x,x,x,x),x)},
$S:263}
B.coV.prototype={
$0(){L.fd(this.a,!1).f.ee(null)},
$S:0}
B.coW.prototype={
$1(d){return this.aMD(d)},
aMD(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=T.Rz(d.a)
if(s==null){x=1
break}t=s.z
A.hM().$1(t)
x=3
return A.d(u.a.wk(J.aq(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:454}
B.coX.prototype={
$0(){},
$S:0}
B.coY.prototype={
$0(){},
$S:0}
B.coZ.prototype={
$0(){},
$S:0}
B.cp_.prototype={
$0(){},
$S:0}
B.coT.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.GS},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.agL.prototype,"gb3e","UO",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.c8,[B.bbW,B.coU,B.coW])
w(B.TK,A.eT)
w(B.Fe,A.J)
w(B.agL,A.O)
x(A.cL,[B.coV,B.coX,B.coY,B.coZ,B.cp_,B.coT])})()
A.c5(b.typeUniverse,JSON.parse('{"Fe":{"J":[],"e":[]},"agL":{"O":["Fe"]}}'))
var y=(function rtii(){var x=A.D
return{k:x("u<jG>"),p:x("u<e>"),j:x("B<@>"),P:x("A<m,@>"),K:x("eZ"),u:x("ri"),N:x("m"),q:x("GR"),y:x("x"),z:x("@"),C:x("hv?"),H:x("~")}})();(function constants(){D.GR=new B.TK(0,"valid")
D.abw=new B.TK(1,"invalid")
D.GS=new B.TK(2,"used")
D.aby=new B.TK(3,"nothing")
D.bJb=new A.cs("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJv=new A.cs("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_263",e:"endPart",h:b})})($__dart_deferred_initializers__,"scUraJs06cec/f1+PlUt/c2v3S0=");