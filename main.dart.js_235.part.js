((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_235",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,G,M,N,I,O,B={
bdC(d,e){return B.dkp(d,e)},
dkp(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$bdC=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.OH().cI("scan_ticket",A.w(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bdC)
case 3:r=g
s=J.a1(r)
if(!J.q(s.h(r,"code"),200)){v=null
x=1
break}u=H.cQP(y.P.a(s.h(r,"ticket")))
if(s.a4(r,"order")&&s.h(r,"order")!=null)u.Q=H.bCq(s.h(r,"order"))
if(s.a4(r,"products")&&s.h(r,"products")!=null){t=J.b9(y.j.a(s.h(r,"products")),new B.bdD(),y.K)
t=A.B(t,t.$ti.i("a2.E"))
u.z=t}if(s.a4(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cNc(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$bdC,w)},
bdH(d,e){return B.dku(d,e)},
dku(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$bdH=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.OH().cI("update_ticket_to_used",A.w(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bdH)
case 3:v=t.q(s.u(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$bdH,w)},
bdD:function bdD(){},
dtB(d,e){return new B.FB(e,d)},
Uf:function Uf(d,e){this.a=d
this.b=e},
FB:function FB(d,e){this.c=d
this.a=e},
aht:function aht(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cuz:function cuz(){},
cuA:function cuA(d){this.a=d},
cuB:function cuB(d){this.a=d},
cuC:function cuC(){},
cuD:function cuD(){},
cuE:function cuE(){},
cuF:function cuF(){},
cuy:function cuy(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W,K
J=c[1]
A=c[0]
C=c[2]
L=c[167]
G=c[166]
M=c[96]
N=c[239]
I=c[186]
O=c[240]
B=a.updateHolder(c[22],B)
D=c[238]
E=c[36]
F=c[182]
P=c[61]
Q=c[183]
R=c[236]
S=c[241]
T=c[98]
H=c[77]
U=c[185]
V=c[172]
W=c[168]
K=c[170]
B.Uf.prototype={
J(){return"ScanState."+this.b}}
B.FB.prototype={
M(){return new B.aht(D.ac8,new A.c6(C.ar,$.a9()),E.d_F(F.ML,A.a([C.od],y.k)))}}
B.aht.prototype={
l(){this.x.l()
var x=this.r
x.a3$=$.a9()
x.U$=0
this.ai()},
aY(){var x=0,w=A.k(y.H),v=this,u
var $async$aY=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.c3()
if(v.a.c==null&&J.fF(v.c.ir(y.u).f.r)){u=v.a
u.toString
u.c=J.u(v.c.ir(y.u).f.r,0).a.Br(0,"scanCode")}$.yT().akj("https://unpkg.com/@zxing/library@0.21.3")
A.cH(v.a.c)
v.Pn()
return A.i(null,w)}})
return A.j($async$aY,w)},
Pn(){var x=0,w=A.k(y.H),v=this,u,t
var $async$Pn=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hn(A.bY(0,0,0,500,0,0),null,y.z),$async$Pn)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.Qz(u,A.n("Enter Scan Code",null),null,A.n("Scan Code",null)),$async$Pn)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$Pn,w)},
acA(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bG(new A.Z(F.N9,G.bC(D.bKm,q),q),q,q)
x=r.f
if(x===D.Hg)w=V.ir
else if(x===D.ac6)w=Q.ti
else{if(x!==D.Hh)return C.a1
w=R.tp}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.R(u).i("I<1,Z>")
u=A.B(new A.I(u,new B.cuz(),t),t.i("a2.E"))
v.push(A.ac(u,C.G,C.f,C.h,0,q,C.l))}v.push(C.af)
u=r.e.Q.a3g()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.F(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.IC,C.b_,q,q,q,q))
x=A.a([A.bG(A.ac(v,C.j,C.f,C.h,0,q,C.l),q,q),C.af,A.aK(w,C.n,q,30),C.a_],x)
if(r.f===D.Hg)x.push(A.du(!1,G.bC(D.bK1,q),q,q,q,q,q,q,r.gb4K(),q,q))
return new A.Z(K.aR,A.ac(x,C.j,C.f,C.h,0,q,C.l),q)},
B(d){var x,w,v=this,u=null,t=v.e==null?A.bRG(d):v.a4a(v.f),s=A.bI(C.av)
s=A.bN(u,u,u,u,u,u,A.aK(C.j9,new A.bw(s.a,s.b,s.c,0.8).bq(),u,u),u,u,u,new B.cuA(d),u,u,u,u,u)
x=A.bI(C.av)
w=y.p
return W.eZ(u,t,A.iY(!0,new A.ck(C.ae,u,C.ad,C.v,A.a([A.ac(A.a([new A.Z(K.aR,A.ao(A.a([s,A.ba(A.F("",u,u,u,u,u,u,u,A.af(u,u,new A.bw(x.a,x.b,x.c,0.8).bq(),u,u,u,u,u,u,u,u,20,u,u,C.S,u,u,!0,u,u,u,u,u,u,u,u),C.b_,u,u,u,u),1,u)],w),C.j,C.f,C.h,0,u),u),v.acA(),A.ba(E.d_E(v.x,C.BB,new B.cuB(v)),1,u)],w),C.j,C.f,C.h,0,u,C.l)],w),u),!0,C.N,!0,!0),u,u,u,u,u)},
wu(d){return this.aSk(d)},
aSk(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$wu=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bdC(d,t),$async$wu)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.Hg
E.r0()
u.u(new B.cuC())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.ac6
E.r0()
E.r0()
u.u(new B.cuD())
x=1
break}else if(s&&t.e==="used"){u.f=D.Hh
E.r0()
E.r0()
u.u(new B.cuE())
x=1
break}}u.f=D.ac8
u.u(new B.cuF())
case 1:return A.i(v,w)}})
return A.j($async$wu,w)},
Vm(){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$Vm=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bdH(s,t),$async$Vm)
case 3:if(e){u.u(new B.cuy(u))
E.r0()}else{E.r0()
E.r0()
u.c.ab(y.q).f.al7(M.d1Q(null,null,null,null,null,C.v,null,G.bC(A.F("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.MX,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$Vm,w)},
a4a(d){var x
switch(d.a){case 0:return U.a6q
case 2:return F.a6r
case 1:return I.li
case 3:x=this.c
x.toString
return A.C(x).ax.a===C.r?$.ic():$.pk()}return I.li}}
var z=a.updateTypes(["X<~>()"])
B.bdD.prototype={
$1(d){return A.Ln(d)},
$S:89}
B.cuz.prototype={
$1(d){var x=null
return new A.Z(O.CY,A.F(d.kH(),x,x,x,x,x,x,x,S.ID,x,x,x,x,x),x)},
$S:204}
B.cuA.prototype={
$0(){L.fj(this.a,!1).f.dA(null)},
$S:0}
B.cuB.prototype={
$1(d){return this.aNP(d)},
aNP(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=T.S5(d.a)
if(s==null){x=1
break}t=s.z
A.hK().$1(t)
x=3
return A.d(u.a.wu(J.aq(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:461}
B.cuC.prototype={
$0(){},
$S:0}
B.cuD.prototype={
$0(){},
$S:0}
B.cuE.prototype={
$0(){},
$S:0}
B.cuF.prototype={
$0(){},
$S:0}
B.cuy.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.Hh},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.aht.prototype,"gb4K","Vm",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.cj,[B.bdD,B.cuz,B.cuB])
w(B.Uf,A.fm)
w(B.FB,A.L)
w(B.aht,A.N)
x(A.d0,[B.cuA,B.cuC,B.cuD,B.cuE,B.cuF,B.cuy])})()
A.cf(b.typeUniverse,JSON.parse('{"FB":{"L":[],"e":[]},"aht":{"N":["FB"]}}'))
var y=(function rtii(){var x=A.E
return{k:x("v<jP>"),p:x("v<e>"),j:x("D<@>"),P:x("A<l,@>"),K:x("dZ"),u:x("ry"),N:x("l"),q:x("Hc"),y:x("y"),z:x("@"),C:x("hG?"),H:x("~")}})();(function constants(){D.Hg=new B.Uf(0,"valid")
D.ac6=new B.Uf(1,"invalid")
D.Hh=new B.Uf(2,"used")
D.ac8=new B.Uf(3,"nothing")
D.bK1=new A.cx("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bKm=new A.cx("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_235",e:"endPart",h:b})})($__dart_deferred_initializers__,"J8vnUHQKJtKQ0syhqE0Orb2tTpM=");