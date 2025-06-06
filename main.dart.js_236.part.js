((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_236",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,G,M,N,I,O,B={
bbW(d,e){return B.ded(d,e)},
ded(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$bbW=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.Oa().dn("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bbW)
case 3:r=g
s=J.a1(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=H.cXU(y.P.a(s.h(r,"ticket")))
if(s.a4(r,"order")&&s.h(r,"order")!=null)u.Q=H.cVi(s.h(r,"order"))
if(s.a4(r,"products")&&s.h(r,"products")!=null){t=J.bA(y.j.a(s.h(r,"products")),new B.bbX(),y.K)
t=A.D(t,t.$ti.i("a6.E"))
u.z=t}if(s.a4(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cHB(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbW,w)},
bc0(d,e){return B.dei(d,e)},
dei(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$bc0=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.Oa().dn("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bc0)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bc0,w)},
bbX:function bbX(){},
dn7(d,e){return new B.Fj(e,d)},
TP:function TP(d,e){this.a=d
this.b=e},
Fj:function Fj(d,e){this.c=d
this.a=e},
agL:function agL(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cpH:function cpH(){},
cpI:function cpI(d){this.a=d},
cpJ:function cpJ(d){this.a=d},
cpK:function cpK(){},
cpL:function cpL(){},
cpM:function cpM(){},
cpN:function cpN(){},
cpG:function cpG(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W,K
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
B.Fj.prototype={
M(){return new B.agL(D.abB,new A.co(C.aw,$.a9()),E.cUP(F.Ml,A.a([C.o1],y.k)))}}
B.agL.prototype={
l(){this.x.l()
var x=this.r
x.a7$=$.a9()
x.Y$=0
this.ai()},
b_(){var x=0,w=A.l(y.H),v=this,u
var $async$b_=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.c9()
if(v.a.c==null&&J.fV(v.c.hw(y.u).f.r)){u=v.a
u.toString
u.c=J.v(v.c.hw(y.u).f.r,0).a.wf(0,"scanCode")}$.yA().ajz("https://unpkg.com/@zxing/library@0.21.3")
A.d_(v.a.c)
v.OY()
return A.j(null,w)}})
return A.k($async$b_,w)},
OY(){var x=0,w=A.l(y.H),v=this,u,t
var $async$OY=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hd(A.c0(0,0,0,500,0,0),null,y.z),$async$OY)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.Q5(u,A.q("Enter Scan Code",null),null,A.q("Scan Code",null)),$async$OY)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$OY,w)},
abU(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bG(new A.a0(F.MJ,G.bw(D.bJE,q),q),q,q)
x=r.f
if(x===D.GW)w=V.j2
else if(x===D.abz)w=Q.Dy
else{if(x!==D.GX)return C.a3
w=R.te}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.U(u).i("M<1,a0>")
u=A.D(new A.M(u,new B.cpH(),t),t.i("a6.E"))
v.push(A.af(u,C.J,C.f,C.i,0,q,C.l))}v.push(C.ak)
u=r.e.Q.a2J()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.O(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.adU,C.b0,q,q,q,q))
x=A.a([A.bG(A.af(v,C.j,C.f,C.i,0,q,C.l),q,q),C.ak,A.aW(w,C.o,q,30),C.a1],x)
if(r.f===D.GW)x.push(A.dz(!1,G.bw(D.bJk,q),q,q,q,q,q,q,r.gb3w(),q,q))
return new A.a0(K.aT,A.af(x,C.j,C.f,C.i,0,q,C.l),q)},
B(d){var x,w,v=this,u=null,t=v.e==null?A.bOS(d):v.a3C(v.f),s=A.bs(C.as)
s=A.bU(u,u,u,u,u,u,A.aW(C.j1,new A.bm(s.a,s.b,s.c,0.8).bl(),u,u),u,u,u,new B.cpI(d),u,u,u,u,u)
x=A.bs(C.as)
w=y.p
return W.f9(u,t,A.jA(!0,new A.ci(C.ac,u,C.ab,C.v,A.a([A.af(A.a([new A.a0(K.aT,A.at(A.a([s,A.bg(A.O("",u,u,u,u,u,u,u,A.al(u,u,new A.bm(x.a,x.b,x.c,0.8).bl(),u,u,u,u,u,u,u,u,20,u,u,C.X,u,u,!0,u,u,u,u,u,u,u,u),C.b0,u,u,u,u),1,u)],w),C.j,C.f,C.i,0,u),u),v.abU(),A.bg(E.cUO(v.x,C.Bl,new B.cpJ(v)),1,u)],w),C.j,C.f,C.i,0,u,C.l)],w),u),!0,C.Q,!0,!0),u,u,u,u,u)},
wm(d){return this.aRj(d)},
aRj(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$wm=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bbW(d,t),$async$wm)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.GW
E.qO()
u.A(new B.cpK())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.abz
E.qO()
E.qO()
u.A(new B.cpL())
x=1
break}else if(s&&t.e==="used"){u.f=D.GX
E.qO()
E.qO()
u.A(new B.cpM())
x=1
break}}u.f=D.abB
u.A(new B.cpN())
case 1:return A.j(v,w)}})
return A.k($async$wm,w)},
UW(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$UW=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bc0(s,t),$async$UW)
case 3:if(e){u.A(new B.cpG(u))
E.qO()}else{E.qO()
E.qO()
u.c.ae(y.q).f.akn(M.cX0(null,null,null,null,null,C.v,null,G.bw(A.O("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.Mx,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$UW,w)},
a3C(d){var x
switch(d.a){case 0:return U.a5T
case 2:return F.a5U
case 1:return I.l7
case 3:x=this.c
x.toString
return A.C(x).ax.a===C.q?$.hQ():$.p3()}return I.l7}}
var z=a.updateTypes(["X<~>()"])
B.bbX.prototype={
$1(d){return A.a6g(d)},
$S:109}
B.cpH.prototype={
$1(d){var x=null
return new A.a0(O.CG,A.O(d.lr(),x,x,x,x,x,x,x,S.Ih,x,x,x,x,x),x)},
$S:408}
B.cpI.prototype={
$0(){L.fc(this.a,!1).f.ef(null)},
$S:0}
B.cpJ.prototype={
$1(d){return this.aMQ(d)},
aMQ(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=T.RF(d.a)
if(s==null){x=1
break}t=s.z
A.hz().$1(t)
x=3
return A.d(u.a.wm(J.ar(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:446}
B.cpK.prototype={
$0(){},
$S:0}
B.cpL.prototype={
$0(){},
$S:0}
B.cpM.prototype={
$0(){},
$S:0}
B.cpN.prototype={
$0(){},
$S:0}
B.cpG.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.GX},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.agL.prototype,"gb3w","UW",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.cd,[B.bbX,B.cpH,B.cpJ])
w(B.TP,A.fl)
w(B.Fj,A.J)
w(B.agL,A.P)
x(A.cU,[B.cpI,B.cpK,B.cpL,B.cpM,B.cpN,B.cpG])})()
A.c8(b.typeUniverse,JSON.parse('{"Fj":{"J":[],"e":[]},"agL":{"P":["Fj"]}}'))
var y=(function rtii(){var x=A.E
return{k:x("u<jL>"),p:x("u<e>"),j:x("B<@>"),P:x("A<m,@>"),K:x("f_"),u:x("rn"),N:x("m"),q:x("GY"),y:x("w"),z:x("@"),C:x("hx?"),H:x("~")}})();(function constants(){D.GW=new B.TP(0,"valid")
D.abz=new B.TP(1,"invalid")
D.GX=new B.TP(2,"used")
D.abB=new B.TP(3,"nothing")
D.bJk=new A.cx("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJE=new A.cx("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_236",e:"endPart",h:b})})($__dart_deferred_initializers__,"UA1gH+KB9oKkScGWuYcB/IjRy4k=");