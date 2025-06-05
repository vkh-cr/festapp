((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_236",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,G,M,N,I,O,B={
bbT(d,e){return B.de0(d,e)},
de0(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$bbT=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.O9().dm("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bbT)
case 3:r=g
s=J.a1(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=H.cXG(y.P.a(s.h(r,"ticket")))
if(s.a4(r,"order")&&s.h(r,"order")!=null)u.Q=H.cV4(s.h(r,"order"))
if(s.a4(r,"products")&&s.h(r,"products")!=null){t=J.bA(y.j.a(s.h(r,"products")),new B.bbU(),y.K)
t=A.D(t,t.$ti.i("a6.E"))
u.z=t}if(s.a4(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cHo(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbT,w)},
bbY(d,e){return B.de5(d,e)},
de5(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$bbY=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.O9().dm("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bbY)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbY,w)},
bbU:function bbU(){},
dmV(d,e){return new B.Fi(e,d)},
TP:function TP(d,e){this.a=d
this.b=e},
Fi:function Fi(d,e){this.c=d
this.a=e},
agL:function agL(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cpw:function cpw(){},
cpx:function cpx(d){this.a=d},
cpy:function cpy(d){this.a=d},
cpz:function cpz(){},
cpA:function cpA(){},
cpB:function cpB(){},
cpC:function cpC(){},
cpv:function cpv(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W,K
J=c[1]
A=c[0]
C=c[2]
L=c[168]
G=c[167]
M=c[99]
N=c[240]
I=c[187]
O=c[241]
B=a.updateHolder(c[22],B)
D=c[239]
E=c[36]
F=c[183]
P=c[60]
Q=c[184]
R=c[237]
S=c[242]
T=c[101]
H=c[79]
U=c[186]
V=c[173]
W=c[169]
K=c[171]
B.TP.prototype={
I(){return"ScanState."+this.b}}
B.Fi.prototype={
M(){return new B.agL(D.abB,new A.cn(C.aw,$.a9()),E.cUB(F.Ml,A.a([C.o1],y.k)))}}
B.agL.prototype={
l(){this.x.l()
var x=this.r
x.a8$=$.a9()
x.Y$=0
this.ai()},
b_(){var x=0,w=A.l(y.H),v=this,u
var $async$b_=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.c9()
if(v.a.c==null&&J.fV(v.c.hw(y.u).f.r)){u=v.a
u.toString
u.c=J.v(v.c.hw(y.u).f.r,0).a.wf(0,"scanCode")}$.yA().ajy("https://unpkg.com/@zxing/library@0.21.3")
A.d_(v.a.c)
v.OY()
return A.j(null,w)}})
return A.k($async$b_,w)},
OY(){var x=0,w=A.l(y.H),v=this,u,t
var $async$OY=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hs(A.c0(0,0,0,500,0,0),null,y.z),$async$OY)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.Q4(u,A.q("Enter Scan Code",null),null,A.q("Scan Code",null)),$async$OY)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$OY,w)},
abS(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bG(new A.a0(F.MJ,G.bw(D.bJE,q),q),q,q)
x=r.f
if(x===D.GW)w=V.j2
else if(x===D.abz)w=Q.Dy
else{if(x!==D.GX)return C.a3
w=R.td}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.U(u).i("O<1,a0>")
u=A.D(new A.O(u,new B.cpw(),t),t.i("a6.E"))
v.push(A.af(u,C.J,C.f,C.i,0,q,C.l))}v.push(C.ak)
u=r.e.Q.a2H()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.N(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.adU,C.b0,q,q,q,q))
x=A.a([A.bG(A.af(v,C.j,C.f,C.i,0,q,C.l),q,q),C.ak,A.aW(w,C.o,q,30),C.a1],x)
if(r.f===D.GW)x.push(A.dz(!1,G.bw(D.bJk,q),q,q,q,q,q,q,r.gb3u(),q,q))
return new A.a0(K.aT,A.af(x,C.j,C.f,C.i,0,q,C.l),q)},
B(d){var x,w,v=this,u=null,t=v.e==null?A.bOL(d):v.a3A(v.f),s=A.bs(C.as)
s=A.bU(u,u,u,u,u,u,A.aW(C.j1,new A.bm(s.a,s.b,s.c,0.8).bl(),u,u),u,u,u,new B.cpx(d),u,u,u,u,u)
x=A.bs(C.as)
w=y.p
return W.f9(u,t,A.jA(!0,new A.ch(C.ac,u,C.ab,C.v,A.a([A.af(A.a([new A.a0(K.aT,A.at(A.a([s,A.bg(A.N("",u,u,u,u,u,u,u,A.al(u,u,new A.bm(x.a,x.b,x.c,0.8).bl(),u,u,u,u,u,u,u,u,20,u,u,C.X,u,u,!0,u,u,u,u,u,u,u,u),C.b0,u,u,u,u),1,u)],w),C.j,C.f,C.i,0,u),u),v.abS(),A.bg(E.cUA(v.x,C.Bl,new B.cpy(v)),1,u)],w),C.j,C.f,C.i,0,u,C.l)],w),u),!0,C.Q,!0,!0),u,u,u,u,u)},
wm(d){return this.aRh(d)},
aRh(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$wm=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bbT(d,t),$async$wm)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.GW
E.qO()
u.A(new B.cpz())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.abz
E.qO()
E.qO()
u.A(new B.cpA())
x=1
break}else if(s&&t.e==="used"){u.f=D.GX
E.qO()
E.qO()
u.A(new B.cpB())
x=1
break}}u.f=D.abB
u.A(new B.cpC())
case 1:return A.j(v,w)}})
return A.k($async$wm,w)},
UV(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$UV=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bbY(s,t),$async$UV)
case 3:if(e){u.A(new B.cpv(u))
E.qO()}else{E.qO()
E.qO()
u.c.af(y.q).f.akm(M.cWN(null,null,null,null,null,C.v,null,G.bw(A.N("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.Mx,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$UV,w)},
a3A(d){var x
switch(d.a){case 0:return U.a5T
case 2:return F.a5U
case 1:return I.l7
case 3:x=this.c
x.toString
return A.C(x).ax.a===C.q?$.hQ():$.p2()}return I.l7}}
var z=a.updateTypes(["X<~>()"])
B.bbU.prototype={
$1(d){return A.a6g(d)},
$S:109}
B.cpw.prototype={
$1(d){var x=null
return new A.a0(O.CG,A.N(d.lr(),x,x,x,x,x,x,x,S.Ih,x,x,x,x,x),x)},
$S:328}
B.cpx.prototype={
$0(){L.fc(this.a,!1).f.ef(null)},
$S:0}
B.cpy.prototype={
$1(d){return this.aMP(d)},
aMP(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=T.RE(d.a)
if(s==null){x=1
break}t=s.z
A.hz().$1(t)
x=3
return A.d(u.a.wm(J.ar(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:360}
B.cpz.prototype={
$0(){},
$S:0}
B.cpA.prototype={
$0(){},
$S:0}
B.cpB.prototype={
$0(){},
$S:0}
B.cpC.prototype={
$0(){},
$S:0}
B.cpv.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.GX},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.agL.prototype,"gb3u","UV",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.cc,[B.bbU,B.cpw,B.cpy])
w(B.TP,A.fl)
w(B.Fi,A.J)
w(B.agL,A.P)
x(A.cU,[B.cpx,B.cpz,B.cpA,B.cpB,B.cpC,B.cpv])})()
A.c8(b.typeUniverse,JSON.parse('{"Fi":{"J":[],"e":[]},"agL":{"P":["Fi"]}}'))
var y=(function rtii(){var x=A.E
return{k:x("u<jL>"),p:x("u<e>"),j:x("B<@>"),P:x("A<m,@>"),K:x("f_"),u:x("rn"),N:x("m"),q:x("GX"),y:x("w"),z:x("@"),C:x("hx?"),H:x("~")}})();(function constants(){D.GW=new B.TP(0,"valid")
D.abz=new B.TP(1,"invalid")
D.GX=new B.TP(2,"used")
D.abB=new B.TP(3,"nothing")
D.bJk=new A.cw("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJE=new A.cw("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_236",e:"endPart",h:b})})($__dart_deferred_initializers__,"qxvmbYnZCUYWZGX6ilX3TlXTqdA=");