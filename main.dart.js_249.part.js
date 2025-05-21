((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_249",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,L,G,M,N,K,O,B={
bbe(d,e){return B.daP(d,e)},
daP(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$bbe=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.NY().ds("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bbe)
case 3:r=g
s=J.a1(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=H.cUw(y.P.a(s.h(r,"ticket")))
if(s.a5(r,"order")&&s.h(r,"order")!=null)u.Q=H.cRW(s.h(r,"order"))
if(s.a5(r,"products")&&s.h(r,"products")!=null){t=J.bJ(y.j.a(s.h(r,"products")),new B.bbf(),y.K)
t=A.E(t,t.$ti.i("a6.E"))
u.z=t}if(s.a5(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cEn(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbe,w)},
bbj(d,e){return B.daU(d,e)},
daU(d,e){var x=0,w=A.l(y.y),v,u,t,s
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
djF(d,e){return new B.EX(e,d)},
Tr:function Tr(d,e){this.a=d
this.b=e},
EX:function EX(d,e){this.c=d
this.a=e},
age:function age(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cn4:function cn4(){},
cn5:function cn5(d){this.a=d},
cn6:function cn6(d){this.a=d},
cn7:function cn7(){},
cn8:function cn8(){},
cn9:function cn9(){},
cna:function cna(){},
cn3:function cn3(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W
J=c[1]
A=c[0]
C=c[2]
I=c[184]
L=c[180]
G=c[179]
M=c[104]
N=c[255]
K=c[202]
O=c[256]
B=a.updateHolder(c[22],B)
D=c[254]
E=c[37]
F=c[198]
P=c[65]
Q=c[199]
R=c[252]
S=c[257]
T=c[106]
H=c[85]
U=c[201]
V=c[181]
W=c[186]
B.Tr.prototype={
I(){return"ScanState."+this.b}}
B.EX.prototype={
M(){return new B.age(D.abh,new A.cB(C.ax,$.aa()),E.cRs(F.M6,A.a([C.nU],y.k)))}}
B.age.prototype={
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
u.c=v.c.hs(y.u).f.f[0].a.w2(0,"scanCode")}$.yp().aiW("https://unpkg.com/@zxing/library@0.21.3")
A.dn(v.a.c)
v.Oy()
return A.j(null,w)}})
return A.k($async$aZ,w)},
Oy(){var x=0,w=A.l(y.H),v=this,u,t
var $async$Oy=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hE(A.ca(0,0,0,500,0,0),null,y.z),$async$Oy)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.PR(u,A.r("Enter Scan Code",null),null,A.r("Scan Code",null)),$async$Oy)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$Oy,w)},
abi(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bG(new A.a3(F.Mt,G.bv(D.bJ4,q),q),q,q)
x=r.f
if(x===D.GG)w=W.ky
else if(x===D.abf)w=Q.Di
else{if(x!==D.GH)return C.a7
w=R.t4}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.V(u).i("M<1,a3>")
u=A.E(new A.M(u,new B.cn4(),t),t.i("a6.E"))
v.push(A.ai(u,C.K,C.f,C.i,0,q,C.m))}v.push(C.am)
u=r.e.Q.a28()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.R(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.adz,C.b0,q,q,q,q))
x=A.a([A.bG(A.ai(v,C.j,C.f,C.i,0,q,C.m),q,q),C.am,A.b1(w,C.o,q,30),C.a5],x)
if(r.f===D.GG)x.push(A.dx(!1,G.bv(D.bIL,q),q,q,q,q,q,q,r.gb2z(),q,q))
return new A.a3(I.aY,A.ai(x,C.j,C.f,C.i,0,q,C.m),q)},
B(d){var x=this,w=null,v=x.e==null?A.bNN(d):x.a30(x.f),u=A.bZ(w,w,w,w,w,w,A.b1(C.iY,C.cQ,w,w),w,w,w,new B.cn5(d),w,w,w,w,w),t=y.p
return V.f7(w,v,A.jw(!0,new A.cj(C.ad,w,C.ab,C.v,A.a([A.ai(A.a([new A.a3(I.aY,A.at(A.a([u,A.bk(A.R("",w,w,w,w,w,w,w,A.an(w,w,C.cQ,w,w,w,w,w,w,w,w,20,w,w,C.Y,w,w,!0,w,w,w,w,w,w,w,w),C.b0,w,w,w,w),1,w)],t),C.j,C.f,C.i,0,w),w),x.abi(),A.bk(E.cRr(x.x,C.B9,new B.cn6(x)),1,w)],t),C.j,C.f,C.i,0,w,C.m)],t),w),!0,C.R,!0,!0),w,w,w,w,w)},
w9(d){return this.aQv(d)},
aQv(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
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
if(r){u.f=D.GG
E.qB()
u.A(new B.cn7())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.abf
E.qB()
E.qB()
u.A(new B.cn8())
x=1
break}else if(s&&t.e==="used"){u.f=D.GH
E.qB()
E.qB()
u.A(new B.cn9())
x=1
break}}u.f=D.abh
u.A(new B.cna())
case 1:return A.j(v,w)}})
return A.k($async$w9,w)},
Ur(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$Ur=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bbj(s,t),$async$Ur)
case 3:if(e){u.A(new B.cn3(u))
E.qB()}else{E.qB()
E.qB()
u.c.ag(y.q).f.ajJ(M.cTI(null,null,null,null,null,C.v,null,G.bv(A.R("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.Mi,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$Ur,w)},
a30(d){var x
switch(d.a){case 0:return U.a5z
case 2:return F.a5A
case 1:return K.l1
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.q?$.ii():$.qi()}return K.l1}}
var z=a.updateTypes(["Y<~>()"])
B.bbf.prototype={
$1(d){return A.a5O(d)},
$S:108}
B.cn4.prototype={
$1(d){var x=null
return new A.a3(O.Cq,A.R(d.lk(),x,x,x,x,x,x,x,S.I_,x,x,x,x,x),x)},
$S:366}
B.cn5.prototype={
$0(){L.fu(this.a,!1).f.ec(null)},
$S:0}
B.cn6.prototype={
$1(d){return this.aM2(d)},
aM2(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=T.Rk(d.a)
if(s==null){x=1
break}t=s.z
A.hO().$1(t)
x=3
return A.d(u.a.w9(J.ar(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:422}
B.cn7.prototype={
$0(){},
$S:0}
B.cn8.prototype={
$0(){},
$S:0}
B.cn9.prototype={
$0(){},
$S:0}
B.cna.prototype={
$0(){},
$S:0}
B.cn3.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.GH},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.age.prototype,"gb2z","Ur",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.c6,[B.bbf,B.cn4,B.cn6])
w(B.Tr,A.eX)
w(B.EX,A.J)
w(B.age,A.O)
x(A.cQ,[B.cn5,B.cn7,B.cn8,B.cn9,B.cna,B.cn3])})()
A.c5(b.typeUniverse,JSON.parse('{"EX":{"J":[],"e":[]},"age":{"O":["EX"]}}'))
var y=(function rtii(){var x=A.C
return{k:x("u<jI>"),p:x("u<e>"),j:x("B<@>"),P:x("A<m,@>"),K:x("eV"),u:x("rc"),N:x("m"),q:x("GB"),y:x("x"),z:x("@"),C:x("hv?"),H:x("~")}})();(function constants(){D.GG=new B.Tr(0,"valid")
D.abf=new B.Tr(1,"invalid")
D.GH=new B.Tr(2,"used")
D.abh=new B.Tr(3,"nothing")
D.bIL=new A.cm("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJ4=new A.cm("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_249",e:"endPart",h:b})})($__dart_deferred_initializers__,"UzDS3S3y0CPduwDCDwuwZMnA6yk=");