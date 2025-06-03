((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_260",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,I,G,M,N,K,O,B={
bbL(d,e){return B.dd6(d,e)},
dd6(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$bbL=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.O8().dm("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bbL)
case 3:r=g
s=J.a0(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=H.cWN(y.P.a(s.h(r,"ticket")))
if(s.a4(r,"order")&&s.h(r,"order")!=null)u.Q=H.cUc(s.h(r,"order"))
if(s.a4(r,"products")&&s.h(r,"products")!=null){t=J.bA(y.j.a(s.h(r,"products")),new B.bbM(),y.K)
t=A.E(t,t.$ti.i("a6.E"))
u.z=t}if(s.a4(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cGv(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbL,w)},
bbQ(d,e){return B.ddb(d,e)},
ddb(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$bbQ=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.O8().dm("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bbQ)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbQ,w)},
bbM:function bbM(){},
dm1(d,e){return new B.Ff(e,d)},
TM:function TM(d,e){this.a=d
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
coV:function coV(){},
coW:function coW(d){this.a=d},
coX:function coX(d){this.a=d},
coY:function coY(){},
coZ:function coZ(){},
cp_:function cp_(){},
cp0:function cp0(){},
coU:function coU(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W
J=c[1]
A=c[0]
C=c[2]
L=c[177]
I=c[181]
G=c[176]
M=c[101]
N=c[254]
K=c[199]
O=c[255]
B=a.updateHolder(c[22],B)
D=c[253]
E=c[36]
F=c[195]
P=c[62]
Q=c[196]
R=c[251]
S=c[256]
T=c[103]
H=c[81]
U=c[198]
V=c[183]
W=c[178]
B.TM.prototype={
I(){return"ScanState."+this.b}}
B.Ff.prototype={
M(){return new B.agJ(D.abz,new A.cp(C.aw,$.a9()),E.cTJ(F.Mk,A.a([C.nZ],y.k)))}}
B.agJ.prototype={
l(){this.x.l()
var x=this.r
x.a8$=$.a9()
x.Y$=0
this.ai()},
aZ(){var x=0,w=A.l(y.H),v=this,u
var $async$aZ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.c8()
if(v.a.c==null&&J.fV(v.c.hx(y.u).f.r)){u=v.a
u.toString
u.c=J.v(v.c.hx(y.u).f.r,0).a.wb(0,"scanCode")}$.yx().ajp("https://unpkg.com/@zxing/library@0.21.3")
A.d_(v.a.c)
v.OT()
return A.j(null,w)}})
return A.k($async$aZ,w)},
OT(){var x=0,w=A.l(y.H),v=this,u,t
var $async$OT=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hr(A.c3(0,0,0,500,0,0),null,y.z),$async$OT)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.Q2(u,A.r("Enter Scan Code",null),null,A.r("Scan Code",null)),$async$OT)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$OT,w)},
abK(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bG(new A.a2(F.MH,G.bv(D.bJx,q),q),q,q)
x=r.f
if(x===D.GT)w=V.j2
else if(x===D.abx)w=Q.Dw
else{if(x!==D.GU)return C.a5
w=R.ta}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.W(u).i("O<1,a2>")
u=A.E(new A.O(u,new B.coV(),t),t.i("a6.E"))
v.push(A.ah(u,C.J,C.f,C.i,0,q,C.m))}v.push(C.al)
u=r.e.Q.a2C()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.P(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.adS,C.b0,q,q,q,q))
x=A.a([A.bG(A.ah(v,C.j,C.f,C.i,0,q,C.m),q,q),C.al,A.aW(w,C.p,q,30),C.a2],x)
if(r.f===D.GT)x.push(A.dx(!1,G.bv(D.bJd,q),q,q,q,q,q,q,r.gb3i(),q,q))
return new A.a2(I.aT,A.ah(x,C.j,C.f,C.i,0,q,C.m),q)},
B(d){var x,w,v=this,u=null,t=v.e==null?A.bOy(d):v.a3u(v.f),s=A.bE(C.as)
s=A.bW(u,u,u,u,u,u,A.aW(C.j1,new A.br(s.a,s.b,s.c,0.8).bp(),u,u),u,u,u,new B.coW(d),u,u,u,u,u)
x=A.bE(C.as)
w=y.p
return W.fa(u,t,A.jx(!0,new A.cj(C.ad,u,C.ab,C.v,A.a([A.ah(A.a([new A.a2(I.aT,A.at(A.a([s,A.bh(A.P("",u,u,u,u,u,u,u,A.al(u,u,new A.br(x.a,x.b,x.c,0.8).bp(),u,u,u,u,u,u,u,u,20,u,u,C.X,u,u,!0,u,u,u,u,u,u,u,u),C.b0,u,u,u,u),1,u)],w),C.j,C.f,C.i,0,u),u),v.abK(),A.bh(E.cTI(v.x,C.Bj,new B.coX(v)),1,u)],w),C.j,C.f,C.i,0,u,C.m)],w),u),!0,C.Q,!0,!0),u,u,u,u,u)},
wj(d){return this.aR8(d)},
aR8(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$wj=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bbL(d,t),$async$wj)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.GT
E.qM()
u.A(new B.coY())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.abx
E.qM()
E.qM()
u.A(new B.coZ())
x=1
break}else if(s&&t.e==="used"){u.f=D.GU
E.qM()
E.qM()
u.A(new B.cp_())
x=1
break}}u.f=D.abz
u.A(new B.cp0())
case 1:return A.j(v,w)}})
return A.k($async$wj,w)},
UR(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$UR=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bbQ(s,t),$async$UR)
case 3:if(e){u.A(new B.coU(u))
E.qM()}else{E.qM()
E.qM()
u.c.af(y.q).f.akd(M.cVV(null,null,null,null,null,C.v,null,G.bv(A.P("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.Mw,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$UR,w)},
a3u(d){var x
switch(d.a){case 0:return U.a5R
case 2:return F.a5S
case 1:return K.l5
case 3:x=this.c
x.toString
return A.C(x).ax.a===C.t?$.ig():$.p1()}return K.l5}}
var z=a.updateTypes(["X<~>()"])
B.bbM.prototype={
$1(d){return A.a6h(d)},
$S:111}
B.coV.prototype={
$1(d){var x=null
return new A.a2(O.CE,A.P(d.ls(),x,x,x,x,x,x,x,S.Ie,x,x,x,x,x),x)},
$S:403}
B.coW.prototype={
$0(){L.fd(this.a,!1).f.ee(null)},
$S:0}
B.coX.prototype={
$1(d){return this.aMF(d)},
aMF(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=T.RB(d.a)
if(s==null){x=1
break}t=s.z
A.hO().$1(t)
x=3
return A.d(u.a.wj(J.aq(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:440}
B.coY.prototype={
$0(){},
$S:0}
B.coZ.prototype={
$0(){},
$S:0}
B.cp_.prototype={
$0(){},
$S:0}
B.cp0.prototype={
$0(){},
$S:0}
B.coU.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.GU},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.agJ.prototype,"gb3i","UR",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.c8,[B.bbM,B.coV,B.coX])
w(B.TM,A.eU)
w(B.Ff,A.J)
w(B.agJ,A.N)
x(A.cL,[B.coW,B.coY,B.coZ,B.cp_,B.cp0,B.coU])})()
A.c5(b.typeUniverse,JSON.parse('{"Ff":{"J":[],"e":[]},"agJ":{"N":["Ff"]}}'))
var y=(function rtii(){var x=A.D
return{k:x("u<jH>"),p:x("u<e>"),j:x("B<@>"),P:x("A<m,@>"),K:x("f_"),u:x("rk"),N:x("m"),q:x("GS"),y:x("w"),z:x("@"),C:x("hw?"),H:x("~")}})();(function constants(){D.GT=new B.TM(0,"valid")
D.abx=new B.TM(1,"invalid")
D.GU=new B.TM(2,"used")
D.abz=new B.TM(3,"nothing")
D.bJd=new A.cv("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJx=new A.cv("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_260",e:"endPart",h:b})})($__dart_deferred_initializers__,"r9GQnKZovpkuF14JEWJ/K+jYjUg=");