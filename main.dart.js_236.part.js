((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_236",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,G,M,N,I,O,B={
bbW(d,e){return B.dem(d,e)},
dem(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$bbW=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.O9().dn("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bbW)
case 3:r=g
s=J.a1(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=H.cY2(y.P.a(s.h(r,"ticket")))
if(s.a4(r,"order")&&s.h(r,"order")!=null)u.Q=H.cVr(s.h(r,"order"))
if(s.a4(r,"products")&&s.h(r,"products")!=null){t=J.bA(y.j.a(s.h(r,"products")),new B.bbX(),y.K)
t=A.D(t,t.$ti.i("a6.E"))
u.z=t}if(s.a4(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cHK(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbW,w)},
bc0(d,e){return B.der(d,e)},
der(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$bc0=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.O9().dn("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bc0)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bc0,w)},
bbX:function bbX(){},
dng(d,e){return new B.Fj(e,d)},
TP:function TP(d,e){this.a=d
this.b=e},
Fj:function Fj(d,e){this.c=d
this.a=e},
agM:function agM(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cpQ:function cpQ(){},
cpR:function cpR(d){this.a=d},
cpS:function cpS(d){this.a=d},
cpT:function cpT(){},
cpU:function cpU(){},
cpV:function cpV(){},
cpW:function cpW(){},
cpP:function cpP(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W,K
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
M(){return new B.agM(D.abA,new A.co(C.aw,$.a9()),E.cUY(F.Mk,A.a([C.o2],y.k)))}}
B.agM.prototype={
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
u.c=J.v(v.c.hw(y.u).f.r,0).a.wf(0,"scanCode")}$.yA().ajA("https://unpkg.com/@zxing/library@0.21.3")
A.d_(v.a.c)
v.OZ()
return A.j(null,w)}})
return A.k($async$b_,w)},
OZ(){var x=0,w=A.l(y.H),v=this,u,t
var $async$OZ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hd(A.bT(0,0,0,500,0,0),null,y.z),$async$OZ)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.Q5(u,A.q("Enter Scan Code",null),null,A.q("Scan Code",null)),$async$OZ)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$OZ,w)},
abV(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bG(new A.a0(F.MI,G.bw(D.bJD,q),q),q,q)
x=r.f
if(x===D.GV)w=V.j2
else if(x===D.aby)w=Q.Dx
else{if(x!==D.GW)return C.a3
w=R.td}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.U(u).i("M<1,a0>")
u=A.D(new A.M(u,new B.cpQ(),t),t.i("a6.E"))
v.push(A.af(u,C.J,C.f,C.i,0,q,C.l))}v.push(C.ak)
u=r.e.Q.a2K()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.O(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.adT,C.b0,q,q,q,q))
x=A.a([A.bG(A.af(v,C.j,C.f,C.i,0,q,C.l),q,q),C.ak,A.aW(w,C.o,q,30),C.a1],x)
if(r.f===D.GV)x.push(A.dz(!1,G.bw(D.bJj,q),q,q,q,q,q,q,r.gb3x(),q,q))
return new A.a0(K.aT,A.af(x,C.j,C.f,C.i,0,q,C.l),q)},
B(d){var x,w,v=this,u=null,t=v.e==null?A.bOS(d):v.a3D(v.f),s=A.bs(C.as)
s=A.bV(u,u,u,u,u,u,A.aW(C.j1,new A.bm(s.a,s.b,s.c,0.8).bl(),u,u),u,u,u,new B.cpR(d),u,u,u,u,u)
x=A.bs(C.as)
w=y.p
return W.f9(u,t,A.jA(!0,new A.ci(C.ac,u,C.ab,C.v,A.a([A.af(A.a([new A.a0(K.aT,A.at(A.a([s,A.bg(A.O("",u,u,u,u,u,u,u,A.al(u,u,new A.bm(x.a,x.b,x.c,0.8).bl(),u,u,u,u,u,u,u,u,20,u,u,C.X,u,u,!0,u,u,u,u,u,u,u,u),C.b0,u,u,u,u),1,u)],w),C.j,C.f,C.i,0,u),u),v.abV(),A.bg(E.cUX(v.x,C.Bk,new B.cpS(v)),1,u)],w),C.j,C.f,C.i,0,u,C.l)],w),u),!0,C.Q,!0,!0),u,u,u,u,u)},
wm(d){return this.aRk(d)},
aRk(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
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
if(r){u.f=D.GV
E.qO()
u.v(new B.cpT())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.aby
E.qO()
E.qO()
u.v(new B.cpU())
x=1
break}else if(s&&t.e==="used"){u.f=D.GW
E.qO()
E.qO()
u.v(new B.cpV())
x=1
break}}u.f=D.abA
u.v(new B.cpW())
case 1:return A.j(v,w)}})
return A.k($async$wm,w)},
UX(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$UX=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bc0(s,t),$async$UX)
case 3:if(e){u.v(new B.cpP(u))
E.qO()}else{E.qO()
E.qO()
u.c.ae(y.q).f.ako(M.cX9(null,null,null,null,null,C.v,null,G.bw(A.O("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.Mw,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$UX,w)},
a3D(d){var x
switch(d.a){case 0:return U.a5S
case 2:return F.a5T
case 1:return I.l7
case 3:x=this.c
x.toString
return A.C(x).ax.a===C.q?$.hQ():$.p3()}return I.l7}}
var z=a.updateTypes(["X<~>()"])
B.bbX.prototype={
$1(d){return A.a6h(d)},
$S:121}
B.cpQ.prototype={
$1(d){var x=null
return new A.a0(O.CF,A.O(d.lr(),x,x,x,x,x,x,x,S.Ig,x,x,x,x,x),x)},
$S:281}
B.cpR.prototype={
$0(){L.fc(this.a,!1).f.ef(null)},
$S:0}
B.cpS.prototype={
$1(d){return this.aMR(d)},
aMR(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=T.RF(d.a)
if(s==null){x=1
break}t=s.z
A.hz().$1(t)
x=3
return A.d(u.a.wm(J.ar(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:280}
B.cpT.prototype={
$0(){},
$S:0}
B.cpU.prototype={
$0(){},
$S:0}
B.cpV.prototype={
$0(){},
$S:0}
B.cpW.prototype={
$0(){},
$S:0}
B.cpP.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.GW},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.agM.prototype,"gb3x","UX",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.cd,[B.bbX,B.cpQ,B.cpS])
w(B.TP,A.fl)
w(B.Fj,A.J)
w(B.agM,A.P)
x(A.cU,[B.cpR,B.cpT,B.cpU,B.cpV,B.cpW,B.cpP])})()
A.c8(b.typeUniverse,JSON.parse('{"Fj":{"J":[],"e":[]},"agM":{"P":["Fj"]}}'))
var y=(function rtii(){var x=A.E
return{k:x("u<jL>"),p:x("u<e>"),j:x("B<@>"),P:x("A<m,@>"),K:x("f_"),u:x("rn"),N:x("m"),q:x("GX"),y:x("w"),z:x("@"),C:x("hx?"),H:x("~")}})();(function constants(){D.GV=new B.TP(0,"valid")
D.aby=new B.TP(1,"invalid")
D.GW=new B.TP(2,"used")
D.abA=new B.TP(3,"nothing")
D.bJj=new A.cx("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJD=new A.cx("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_236",e:"endPart",h:b})})($__dart_deferred_initializers__,"Kv7G6X33nfhOZL8f24gKM5OK34w=");