((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_256",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,L,G,M,N,K,O,B={
bbe(d,e){return B.daY(d,e)},
daY(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$bbe=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.NY().ds("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bbe)
case 3:r=g
s=J.a1(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=H.cUE(y.P.a(s.h(r,"ticket")))
if(s.a5(r,"order")&&s.h(r,"order")!=null)u.Q=H.cS3(s.h(r,"order"))
if(s.a5(r,"products")&&s.h(r,"products")!=null){t=J.bJ(y.j.a(s.h(r,"products")),new B.bbf(),y.K)
t=A.E(t,t.$ti.i("a6.E"))
u.z=t}if(s.a5(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cEu(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbe,w)},
bbj(d,e){return B.db2(d,e)},
db2(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$bbj=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.NY().ds("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bbj)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbj,w)},
bbf:function bbf(){},
djO(d,e){return new B.EY(e,d)},
Tr:function Tr(d,e){this.a=d
this.b=e},
EY:function EY(d,e){this.c=d
this.a=e},
agd:function agd(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cna:function cna(){},
cnb:function cnb(d){this.a=d},
cnc:function cnc(d){this.a=d},
cnd:function cnd(){},
cne:function cne(){},
cnf:function cnf(){},
cng:function cng(){},
cn9:function cn9(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W
J=c[1]
A=c[0]
C=c[2]
I=c[184]
L=c[180]
G=c[179]
M=c[102]
N=c[256]
K=c[202]
O=c[257]
B=a.updateHolder(c[22],B)
D=c[255]
E=c[37]
F=c[198]
P=c[65]
Q=c[199]
R=c[253]
S=c[258]
T=c[104]
H=c[85]
U=c[201]
V=c[181]
W=c[186]
B.Tr.prototype={
I(){return"ScanState."+this.b}}
B.EY.prototype={
M(){return new B.agd(D.abh,new A.cB(C.ax,$.aa()),E.cRA(F.M6,A.a([C.nU],y.k)))}}
B.agd.prototype={
l(){this.x.l()
var x=this.r
x.a9$=$.aa()
x.Y$=0
this.al()},
aZ(){var x=0,w=A.l(y.H),v=this,u
var $async$aZ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.c5()
if(v.a.c==null&&v.c.hs(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hs(y.u).f.f[0].a.w2(0,"scanCode")}$.yp().aiZ("https://unpkg.com/@zxing/library@0.21.3")
A.dn(v.a.c)
v.Oz()
return A.j(null,w)}})
return A.k($async$aZ,w)},
Oz(){var x=0,w=A.l(y.H),v=this,u,t
var $async$Oz=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hE(A.ca(0,0,0,500,0,0),null,y.z),$async$Oz)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.PR(u,A.r("Enter Scan Code",null),null,A.r("Scan Code",null)),$async$Oz)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$Oz,w)},
abj(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bG(new A.a3(F.Mt,G.bv(D.bJ5,q),q),q,q)
x=r.f
if(x===D.GI)w=W.ky
else if(x===D.abf)w=Q.Dk
else{if(x!==D.GJ)return C.a7
w=R.t6}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.V(u).i("N<1,a3>")
u=A.E(new A.N(u,new B.cna(),t),t.i("a6.E"))
v.push(A.ai(u,C.K,C.f,C.i,0,q,C.m))}v.push(C.am)
u=r.e.Q.a29()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.R(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.adA,C.b0,q,q,q,q))
x=A.a([A.bG(A.ai(v,C.j,C.f,C.i,0,q,C.m),q,q),C.am,A.b1(w,C.o,q,30),C.a5],x)
if(r.f===D.GI)x.push(A.dx(!1,G.bv(D.bIM,q),q,q,q,q,q,q,r.gb2C(),q,q))
return new A.a3(I.aY,A.ai(x,C.j,C.f,C.i,0,q,C.m),q)},
B(d){var x=this,w=null,v=x.e==null?A.bNN(d):x.a31(x.f),u=A.bZ(w,w,w,w,w,w,A.b1(C.iY,C.cQ,w,w),w,w,w,new B.cnb(d),w,w,w,w,w),t=y.p
return V.f8(w,v,A.jw(!0,new A.ci(C.ad,w,C.ab,C.v,A.a([A.ai(A.a([new A.a3(I.aY,A.at(A.a([u,A.bk(A.R("",w,w,w,w,w,w,w,A.an(w,w,C.cQ,w,w,w,w,w,w,w,w,20,w,w,C.Y,w,w,!0,w,w,w,w,w,w,w,w),C.b0,w,w,w,w),1,w)],t),C.j,C.f,C.i,0,w),w),x.abj(),A.bk(E.cRz(x.x,C.Ba,new B.cnc(x)),1,w)],t),C.j,C.f,C.i,0,w,C.m)],t),w),!0,C.R,!0,!0),w,w,w,w,w)},
w9(d){return this.aQy(d)},
aQy(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$w9=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bbe(d,t),$async$w9)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.GI
E.qB()
u.A(new B.cnd())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.abf
E.qB()
E.qB()
u.A(new B.cne())
x=1
break}else if(s&&t.e==="used"){u.f=D.GJ
E.qB()
E.qB()
u.A(new B.cnf())
x=1
break}}u.f=D.abh
u.A(new B.cng())
case 1:return A.j(v,w)}})
return A.k($async$w9,w)},
Us(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$Us=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bbj(s,t),$async$Us)
case 3:if(e){u.A(new B.cn9(u))
E.qB()}else{E.qB()
E.qB()
u.c.ag(y.q).f.ajM(M.cTQ(null,null,null,null,null,C.v,null,G.bv(A.R("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.Mi,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$Us,w)},
a31(d){var x
switch(d.a){case 0:return U.a5z
case 2:return F.a5A
case 1:return K.l1
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.q?$.ih():$.qi()}return K.l1}}
var z=a.updateTypes(["Y<~>()"])
B.bbf.prototype={
$1(d){return A.a5O(d)},
$S:114}
B.cna.prototype={
$1(d){var x=null
return new A.a3(O.Ct,A.R(d.lk(),x,x,x,x,x,x,x,S.I1,x,x,x,x,x),x)},
$S:367}
B.cnb.prototype={
$0(){L.fu(this.a,!1).f.ec(null)},
$S:0}
B.cnc.prototype={
$1(d){return this.aM5(d)},
aM5(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=T.Rk(d.a)
if(s==null){x=1
break}t=s.z
A.hO().$1(t)
x=3
return A.d(u.a.w9(J.as(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:422}
B.cnd.prototype={
$0(){},
$S:0}
B.cne.prototype={
$0(){},
$S:0}
B.cnf.prototype={
$0(){},
$S:0}
B.cng.prototype={
$0(){},
$S:0}
B.cn9.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.GJ},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.agd.prototype,"gb2C","Us",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.c6,[B.bbf,B.cna,B.cnc])
w(B.Tr,A.eX)
w(B.EY,A.J)
w(B.agd,A.O)
x(A.cM,[B.cnb,B.cnd,B.cne,B.cnf,B.cng,B.cn9])})()
A.c5(b.typeUniverse,JSON.parse('{"EY":{"J":[],"e":[]},"agd":{"O":["EY"]}}'))
var y=(function rtii(){var x=A.C
return{k:x("t<jH>"),p:x("t<e>"),j:x("B<@>"),P:x("A<m,@>"),K:x("eV"),u:x("rc"),N:x("m"),q:x("GB"),y:x("x"),z:x("@"),C:x("hv?"),H:x("~")}})();(function constants(){D.GI=new B.Tr(0,"valid")
D.abf=new B.Tr(1,"invalid")
D.GJ=new B.Tr(2,"used")
D.abh=new B.Tr(3,"nothing")
D.bIM=new A.cm("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJ5=new A.cm("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_256",e:"endPart",h:b})})($__dart_deferred_initializers__,"cgEuB7fC4oTd6e9naIiC0hVXMlI=");