((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_236",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,G,M,N,I,O,B={
bce(d,e){return B.dfl(d,e)},
dfl(d,e){var x=0,w=A.m(y.C),v,u,t,s,r
var $async$bce=A.h(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.Od().dd("scan_ticket",A.y(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bce)
case 3:r=g
s=J.a0(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=H.cYW(y.P.a(s.h(r,"ticket")))
if(s.a4(r,"order")&&s.h(r,"order")!=null)u.Q=H.cWk(s.h(r,"order"))
if(s.a4(r,"products")&&s.h(r,"products")!=null){t=J.bg(y.j.a(s.h(r,"products")),new B.bcf(),y.K)
t=A.C(t,t.$ti.i("a4.E"))
u.z=t}if(s.a4(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cIH(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bce,w)},
bcj(d,e){return B.dfq(d,e)},
dfq(d,e){var x=0,w=A.m(y.y),v,u,t,s
var $async$bcj=A.h(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.Od().dd("update_ticket_to_used",A.y(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bcj)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bcj,w)},
bcf:function bcf(){},
dof(d,e){return new B.Fn(e,d)},
TU:function TU(d,e){this.a=d
this.b=e},
Fn:function Fn(d,e){this.c=d
this.a=e},
agT:function agT(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cqK:function cqK(){},
cqL:function cqL(d){this.a=d},
cqM:function cqM(d){this.a=d},
cqN:function cqN(){},
cqO:function cqO(){},
cqP:function cqP(){},
cqQ:function cqQ(){},
cqJ:function cqJ(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W,K
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
B.TU.prototype={
I(){return"ScanState."+this.b}}
B.Fn.prototype={
M(){return new B.agT(D.abH,new A.cn(C.ax,$.a9()),E.cVR(F.Mo,A.a([C.o4],y.k)))}}
B.agT.prototype={
l(){this.x.l()
var x=this.r
x.a7$=$.a9()
x.Y$=0
this.ai()},
b_(){var x=0,w=A.m(y.H),v=this,u
var $async$b_=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:v.c9()
if(v.a.c==null&&J.fX(v.c.hx(y.u).f.r)){u=v.a
u.toString
u.c=J.v(v.c.hx(y.u).f.r,0).a.wh(0,"scanCode")}$.yB().ajM("https://unpkg.com/@zxing/library@0.21.3")
A.cM(v.a.c)
v.P6()
return A.k(null,w)}})
return A.l($async$b_,w)},
P6(){var x=0,w=A.m(y.H),v=this,u,t
var $async$P6=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hf(A.bU(0,0,0,500,0,0),null,y.z),$async$P6)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.Qa(u,A.q("Enter Scan Code",null),null,A.q("Scan Code",null)),$async$P6)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.k(null,w)}})
return A.l($async$P6,w)},
ac5(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bG(new A.a1(F.MM,G.bz(D.bJK,q),q),q,q)
x=r.f
if(x===D.GW)w=V.j2
else if(x===D.abF)w=Q.Dy
else{if(x!==D.GX)return C.a3
w=R.td}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.U(u).i("K<1,a1>")
u=A.C(new A.K(u,new B.cqK(),t),t.i("a4.E"))
v.push(A.ae(u,C.J,C.f,C.i,0,q,C.m))}v.push(C.al)
u=r.e.Q.a2T()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.L(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.adZ,C.aZ,q,q,q,q))
x=A.a([A.bG(A.ae(v,C.j,C.f,C.i,0,q,C.m),q,q),C.al,A.aW(w,C.n,q,30),C.a1],x)
if(r.f===D.GW)x.push(A.dz(!1,G.bz(D.bJq,q),q,q,q,q,q,q,r.gb3O(),q,q))
return new A.a1(K.aT,A.ae(x,C.j,C.f,C.i,0,q,C.m),q)},
B(d){var x,w,v=this,u=null,t=v.e==null?A.bPA(d):v.a3M(v.f),s=A.bt(C.as)
s=A.bO(u,u,u,u,u,u,A.aW(C.j1,new A.bn(s.a,s.b,s.c,0.8).bl(),u,u),u,u,u,new B.cqL(d),u,u,u,u,u)
x=A.bt(C.as)
w=y.p
return W.f9(u,t,A.jB(!0,new A.ci(C.ac,u,C.ab,C.v,A.a([A.ae(A.a([new A.a1(K.aT,A.at(A.a([s,A.bh(A.L("",u,u,u,u,u,u,u,A.aj(u,u,new A.bn(x.a,x.b,x.c,0.8).bl(),u,u,u,u,u,u,u,u,20,u,u,C.V,u,u,!0,u,u,u,u,u,u,u,u),C.aZ,u,u,u,u),1,u)],w),C.j,C.f,C.i,0,u),u),v.ac5(),A.bh(E.cVQ(v.x,C.Bk,new B.cqM(v)),1,u)],w),C.j,C.f,C.i,0,u,C.m)],w),u),!0,C.P,!0,!0),u,u,u,u,u)},
wo(d){return this.aRz(d)},
aRz(d){var x=0,w=A.m(y.H),v,u=this,t,s,r
var $async$wo=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bce(d,t),$async$wo)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.GW
E.qO()
u.u(new B.cqN())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.abF
E.qO()
E.qO()
u.u(new B.cqO())
x=1
break}else if(s&&t.e==="used"){u.f=D.GX
E.qO()
E.qO()
u.u(new B.cqP())
x=1
break}}u.f=D.abH
u.u(new B.cqQ())
case 1:return A.k(v,w)}})
return A.l($async$wo,w)},
V4(){var x=0,w=A.m(y.H),v,u=this,t,s
var $async$V4=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bcj(s,t),$async$V4)
case 3:if(e){u.u(new B.cqJ(u))
E.qO()}else{E.qO()
E.qO()
u.c.ac(y.q).f.akA(M.cY2(null,null,null,null,null,C.v,null,G.bz(A.L("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.MA,null,null,null,null,null,null,null,null,null))}case 1:return A.k(v,w)}})
return A.l($async$V4,w)},
a3M(d){var x
switch(d.a){case 0:return U.a5Z
case 2:return F.a6_
case 1:return I.l8
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.q?$.hR():$.p6()}return I.l8}}
var z=a.updateTypes(["X<~>()"])
B.bcf.prototype={
$1(d){return A.a6o(d)},
$S:115}
B.cqK.prototype={
$1(d){var x=null
return new A.a1(O.CG,A.L(d.ls(),x,x,x,x,x,x,x,S.Ii,x,x,x,x,x),x)},
$S:385}
B.cqL.prototype={
$0(){L.fc(this.a,!1).f.e7(null)},
$S:0}
B.cqM.prototype={
$1(d){return this.aN5(d)},
aN5(d){var x=0,w=A.m(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:s=T.RK(d.a)
if(s==null){x=1
break}t=s.z
A.hC().$1(t)
x=3
return A.d(u.a.wo(J.ar(t)),$async$$1)
case 3:case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:445}
B.cqN.prototype={
$0(){},
$S:0}
B.cqO.prototype={
$0(){},
$S:0}
B.cqP.prototype={
$0(){},
$S:0}
B.cqQ.prototype={
$0(){},
$S:0}
B.cqJ.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.GX},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.agT.prototype,"gb3O","V4",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.ce,[B.bcf,B.cqK,B.cqM])
w(B.TU,A.fl)
w(B.Fn,A.J)
w(B.agT,A.P)
x(A.cV,[B.cqL,B.cqN,B.cqO,B.cqP,B.cqQ,B.cqJ])})()
A.c8(b.typeUniverse,JSON.parse('{"Fn":{"J":[],"e":[]},"agT":{"P":["Fn"]}}'))
var y=(function rtii(){var x=A.E
return{k:x("u<jM>"),p:x("u<e>"),j:x("B<@>"),P:x("A<i,@>"),K:x("f_"),u:x("rn"),N:x("i"),q:x("H0"),y:x("x"),z:x("@"),C:x("hz?"),H:x("~")}})();(function constants(){D.GW=new B.TU(0,"valid")
D.abF=new B.TU(1,"invalid")
D.GX=new B.TU(2,"used")
D.abH=new B.TU(3,"nothing")
D.bJq=new A.cx("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJK=new A.cx("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_236",e:"endPart",h:b})})($__dart_deferred_initializers__,"Z0vJkkIsYg9AZY51IaqigYeLNEw=");