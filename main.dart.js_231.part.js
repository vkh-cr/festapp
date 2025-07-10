((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_231",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,G,M,N,I,O,B={
bex(d,e){return B.dnV(d,e)},
dnV(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$bex=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.OV().cb("scan_ticket",A.w(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bex)
case 3:r=g
s=J.a_(r)
if(!J.q(s.h(r,"code"),200)){v=null
x=1
break}u=H.cU4(y.P.a(s.h(r,"ticket")))
if(s.a3(r,"order")&&s.h(r,"order")!=null)u.Q=H.aBn(s.h(r,"order"))
if(s.a3(r,"products")&&s.h(r,"products")!=null){t=J.b_(y.j.a(s.h(r,"products")),new B.bey(),y.K)
t=A.B(t,t.$ti.i("a1.E"))
u.z=t}if(s.a3(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cQo(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$bex,w)},
beC(d,e){return B.do_(d,e)},
do_(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$beC=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.OV().cb("update_ticket_to_used",A.w(["ticket_id",d,"scan_code",e],y.N,u),u),$async$beC)
case 3:v=t.q(s.u(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$beC,w)},
bey:function bey(){},
dxf(d,e){return new B.FO(e,d)},
Ux:function Ux(d,e){this.a=d
this.b=e},
FO:function FO(d,e){this.c=d
this.a=e},
ahY:function ahY(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cxA:function cxA(){},
cxB:function cxB(d){this.a=d},
cxC:function cxC(d){this.a=d},
cxD:function cxD(){},
cxE:function cxE(){},
cxF:function cxF(){},
cxG:function cxG(){},
cxz:function cxz(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W,K
J=c[1]
A=c[0]
C=c[2]
L=c[163]
G=c[162]
M=c[121]
N=c[235]
I=c[182]
O=c[236]
B=a.updateHolder(c[22],B)
D=c[234]
E=c[36]
F=c[178]
P=c[61]
Q=c[179]
R=c[232]
S=c[237]
T=c[97]
H=c[77]
U=c[181]
V=c[168]
W=c[164]
K=c[166]
B.Ux.prototype={
J(){return"ScanState."+this.b}}
B.FO.prototype={
L(){return new B.ahY(D.acl,new A.bX(C.am,$.a9()),E.d3_(F.N_,A.a([C.oi],y.k)))}}
B.ahY.prototype={
l(){this.x.l()
var x=this.r
x.V$=$.a9()
x.T$=0
this.ai()},
aY(){var x=0,w=A.k(y.H),v=this,u
var $async$aY=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.c4()
if(v.a.c==null&&J.fI(v.c.iq(y.u).f.r)){u=v.a
u.toString
u.c=J.u(v.c.iq(y.u).f.r,0).a.Bu(0,"scanCode")}$.z2().akw("https://unpkg.com/@zxing/library@0.21.3")
A.cG(v.a.c)
v.Ps()
return A.i(null,w)}})
return A.j($async$aY,w)},
Ps(){var x=0,w=A.k(y.H),v=this,u,t
var $async$Ps=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hq(A.c_(0,0,0,500,0,0),null,y.z),$async$Ps)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.QO(u,A.n("Enter Scan Code",null),null,A.n("Scan Code",null)),$async$Ps)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$Ps,w)},
acQ(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.br(new A.Z(F.Nn,G.bC(D.bKE,q),q),q,q)
x=r.f
if(x===D.Hx)w=V.ir
else if(x===D.acj)w=Q.tv
else{if(x!==D.Hy)return C.a_
w=R.tA}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.Q(u).i("G<1,Z>")
u=A.B(new A.G(u,new B.cxA(),t),t.i("a1.E"))
v.push(A.aa(u,C.G,C.f,C.h,0,q,C.l))}v.push(C.af)
u=r.e.Q.yr()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.E(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.IT,C.b1,q,q,q,q))
x=A.a([A.br(A.aa(v,C.j,C.f,C.h,0,q,C.l),q,q),C.af,A.aG(w,C.n,q,30),C.Y],x)
if(r.f===D.Hx)x.push(A.dn(!1,G.bC(D.bKj,q),q,q,q,q,q,q,r.gb5b(),q,q))
return new A.Z(K.aS,A.aa(x,C.j,C.f,C.h,0,q,C.l),q)},
B(d){var x,w,v=this,u=null,t=v.e==null?A.bTl(d):v.a4q(v.f),s=A.bH(C.av)
s=A.bI(u,u,u,u,u,u,A.aG(C.jd,new A.bw(s.a,s.b,s.c,0.8).br(),u,u),u,u,u,new B.cxB(d),u,u,u,u,u)
x=A.bH(C.av)
w=y.p
return W.eK(u,t,A.iK(!0,new A.ch(C.ae,u,C.ad,C.v,A.a([A.aa(A.a([new A.Z(K.aS,A.al(A.a([s,A.b5(A.E("",u,u,u,u,u,u,u,A.ad(u,u,new A.bw(x.a,x.b,x.c,0.8).br(),u,u,u,u,u,u,u,u,20,u,u,C.R,u,u,!0,u,u,u,u,u,u,u,u),C.b1,u,u,u,u),1,u)],w),C.j,C.f,C.h,0,u),u),v.acQ(),A.b5(E.d2Z(v.x,C.BR,new B.cxC(v)),1,u)],w),C.j,C.f,C.h,0,u,C.l)],w),u),!0,C.N,!0,!0),u,u,u,u,u)},
ww(d){return this.aSH(d)},
aSH(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$ww=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bex(d,t),$async$ww)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.Hx
E.r9()
u.t(new B.cxD())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.acj
E.r9()
E.r9()
u.t(new B.cxE())
x=1
break}else if(s&&t.e==="used"){u.f=D.Hy
E.r9()
E.r9()
u.t(new B.cxF())
x=1
break}}u.f=D.acl
u.t(new B.cxG())
case 1:return A.i(v,w)}})
return A.j($async$ww,w)},
Vx(){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$Vx=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.beC(s,t),$async$Vx)
case 3:if(e){u.t(new B.cxz(u))
E.r9()}else{E.r9()
E.r9()
u.c.a8(y.q).f.a5d(M.cTH(null,null,null,null,null,C.v,null,G.bC(A.E("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.D6,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$Vx,w)},
a4q(d){var x
switch(d.a){case 0:return U.a6I
case 2:return F.a6J
case 1:return I.lj
case 3:x=this.c
x.toString
return A.C(x).ax.a===C.r?$.i0():$.ot()}return I.lj}}
var z=a.updateTypes(["W<~>()"])
B.bey.prototype={
$1(d){return A.Ly(d)},
$S:90}
B.cxA.prototype={
$1(d){var x=null
return new A.Z(O.Dd,A.E(d.jO(),x,x,x,x,x,x,x,S.IU,x,x,x,x,x),x)},
$S:232}
B.cxB.prototype={
$0(){L.fn(this.a,!1).f.dt(null)},
$S:0}
B.cxC.prototype={
$1(d){return this.aOb(d)},
aOb(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=T.Sm(d.a)
if(s==null){x=1
break}t=s.z
A.h5().$1(t)
x=3
return A.d(u.a.ww(J.ap(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:466}
B.cxD.prototype={
$0(){},
$S:0}
B.cxE.prototype={
$0(){},
$S:0}
B.cxF.prototype={
$0(){},
$S:0}
B.cxG.prototype={
$0(){},
$S:0}
B.cxz.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.Hy},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.ahY.prototype,"gb5b","Vx",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.cj,[B.bey,B.cxA,B.cxC])
w(B.Ux,A.fr)
w(B.FO,A.K)
w(B.ahY,A.N)
x(A.d3,[B.cxB,B.cxD,B.cxE,B.cxF,B.cxG,B.cxz])})()
A.cl(b.typeUniverse,JSON.parse('{"FO":{"K":[],"e":[]},"ahY":{"N":["FO"]}}'))
var y=(function rtii(){var x=A.F
return{k:x("v<jT>"),p:x("v<e>"),j:x("D<@>"),P:x("z<l,@>"),K:x("dX"),u:x("rJ"),N:x("l"),q:x("Cc"),y:x("y"),z:x("@"),C:x("hK?"),H:x("~")}})();(function constants(){D.Hx=new B.Ux(0,"valid")
D.acj=new B.Ux(1,"invalid")
D.Hy=new B.Ux(2,"used")
D.acl=new B.Ux(3,"nothing")
D.bKj=new A.cA("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bKE=new A.cA("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_231",e:"endPart",h:b})})($__dart_deferred_initializers__,"6gNCUItMjTKWwn1iqUUtiwUWrQk=");