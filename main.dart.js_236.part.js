((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_236",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,G,M,N,I,O,B={
bci(d,e){return B.dg1(d,e)},
dg1(d,e){var x=0,w=A.m(y.C),v,u,t,s,r
var $async$bci=A.h(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.Oh().dd("scan_ticket",A.y(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bci)
case 3:r=g
s=J.a1(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=H.cZD(y.P.a(s.h(r,"ticket")))
if(s.a4(r,"order")&&s.h(r,"order")!=null)u.Q=H.cX1(s.h(r,"order"))
if(s.a4(r,"products")&&s.h(r,"products")!=null){t=J.bh(y.j.a(s.h(r,"products")),new B.bcj(),y.K)
t=A.C(t,t.$ti.i("a4.E"))
u.z=t}if(s.a4(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cJn(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bci,w)},
bcn(d,e){return B.dg6(d,e)},
dg6(d,e){var x=0,w=A.m(y.y),v,u,t,s
var $async$bcn=A.h(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.Oh().dd("update_ticket_to_used",A.y(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bcn)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bcn,w)},
bcj:function bcj(){},
doW(d,e){return new B.Fo(e,d)},
TY:function TY(d,e){this.a=d
this.b=e},
Fo:function Fo(d,e){this.c=d
this.a=e},
agW:function agW(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cr0:function cr0(){},
cr1:function cr1(d){this.a=d},
cr2:function cr2(d){this.a=d},
cr3:function cr3(){},
cr4:function cr4(){},
cr5:function cr5(){},
cr6:function cr6(){},
cr_:function cr_(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W,K
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
B.TY.prototype={
I(){return"ScanState."+this.b}}
B.Fo.prototype={
M(){return new B.agW(D.abJ,new A.cl(C.ay,$.a8()),E.cWy(F.Mp,A.a([C.o4],y.k)))}}
B.agW.prototype={
l(){this.x.l()
var x=this.r
x.a7$=$.a8()
x.Y$=0
this.ai()},
b_(){var x=0,w=A.m(y.H),v=this,u
var $async$b_=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:v.c9()
if(v.a.c==null&&J.fY(v.c.hy(y.u).f.r)){u=v.a
u.toString
u.c=J.v(v.c.hy(y.u).f.r,0).a.wi(0,"scanCode")}$.yD().ajQ("https://unpkg.com/@zxing/library@0.21.3")
A.cM(v.a.c)
v.P7()
return A.k(null,w)}})
return A.l($async$b_,w)},
P7(){var x=0,w=A.m(y.H),v=this,u,t
var $async$P7=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hh(A.bU(0,0,0,500,0,0),null,y.z),$async$P7)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.Qe(u,A.q("Enter Scan Code",null),null,A.q("Scan Code",null)),$async$P7)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.k(null,w)}})
return A.l($async$P7,w)},
ac8(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bG(new A.a0(F.MN,G.by(D.bJR,q),q),q,q)
x=r.f
if(x===D.GZ)w=V.j2
else if(x===D.abH)w=Q.DC
else{if(x!==D.H_)return C.a3
w=R.te}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.U(u).i("K<1,a0>")
u=A.C(new A.K(u,new B.cr0(),t),t.i("a4.E"))
v.push(A.ae(u,C.J,C.f,C.i,0,q,C.l))}v.push(C.al)
u=r.e.Q.a2V()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.L(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.ae0,C.aZ,q,q,q,q))
x=A.a([A.bG(A.ae(v,C.j,C.f,C.i,0,q,C.l),q,q),C.al,A.aT(w,C.o,q,30),C.a1],x)
if(r.f===D.GZ)x.push(A.dz(!1,G.by(D.bJx,q),q,q,q,q,q,q,r.gb3T(),q,q))
return new A.a0(K.aT,A.ae(x,C.j,C.f,C.i,0,q,C.l),q)},
B(d){var x,w,v=this,u=null,t=v.e==null?A.bPE(d):v.a3O(v.f),s=A.bt(C.as)
s=A.bM(u,u,u,u,u,u,A.aT(C.j1,new A.bn(s.a,s.b,s.c,0.8).bl(),u,u),u,u,u,new B.cr1(d),u,u,u,u,u)
x=A.bt(C.as)
w=y.p
return W.fa(u,t,A.jB(!0,new A.ci(C.ad,u,C.ab,C.v,A.a([A.ae(A.a([new A.a0(K.aT,A.as(A.a([s,A.bb(A.L("",u,u,u,u,u,u,u,A.ag(u,u,new A.bn(x.a,x.b,x.c,0.8).bl(),u,u,u,u,u,u,u,u,20,u,u,C.V,u,u,!0,u,u,u,u,u,u,u,u),C.aZ,u,u,u,u),1,u)],w),C.j,C.f,C.i,0,u),u),v.ac8(),A.bb(E.cWx(v.x,C.Bo,new B.cr2(v)),1,u)],w),C.j,C.f,C.i,0,u,C.l)],w),u),!0,C.P,!0,!0),u,u,u,u,u)},
wp(d){return this.aRE(d)},
aRE(d){var x=0,w=A.m(y.H),v,u=this,t,s,r
var $async$wp=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bci(d,t),$async$wp)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.GZ
E.qO()
u.u(new B.cr3())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.abH
E.qO()
E.qO()
u.u(new B.cr4())
x=1
break}else if(s&&t.e==="used"){u.f=D.H_
E.qO()
E.qO()
u.u(new B.cr5())
x=1
break}}u.f=D.abJ
u.u(new B.cr6())
case 1:return A.k(v,w)}})
return A.l($async$wp,w)},
V5(){var x=0,w=A.m(y.H),v,u=this,t,s
var $async$V5=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bcn(s,t),$async$V5)
case 3:if(e){u.u(new B.cr_(u))
E.qO()}else{E.qO()
E.qO()
u.c.ac(y.q).f.akE(M.cYK(null,null,null,null,null,C.v,null,G.by(A.L("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.MB,null,null,null,null,null,null,null,null,null))}case 1:return A.k(v,w)}})
return A.l($async$V5,w)},
a3O(d){var x
switch(d.a){case 0:return U.a60
case 2:return F.a61
case 1:return I.la
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.r?$.hS():$.p7()}return I.la}}
var z=a.updateTypes(["X<~>()"])
B.bcj.prototype={
$1(d){return A.a6r(d)},
$S:113}
B.cr0.prototype={
$1(d){var x=null
return new A.a0(O.CK,A.L(d.ls(),x,x,x,x,x,x,x,S.Ik,x,x,x,x,x),x)},
$S:388}
B.cr1.prototype={
$0(){L.fd(this.a,!1).f.e2(null)},
$S:0}
B.cr2.prototype={
$1(d){return this.aNa(d)},
aNa(d){var x=0,w=A.m(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:s=T.RO(d.a)
if(s==null){x=1
break}t=s.z
A.hC().$1(t)
x=3
return A.d(u.a.wp(J.ar(t)),$async$$1)
case 3:case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:448}
B.cr3.prototype={
$0(){},
$S:0}
B.cr4.prototype={
$0(){},
$S:0}
B.cr5.prototype={
$0(){},
$S:0}
B.cr6.prototype={
$0(){},
$S:0}
B.cr_.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.H_},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.agW.prototype,"gb3T","V5",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.ce,[B.bcj,B.cr0,B.cr2])
w(B.TY,A.fm)
w(B.Fo,A.J)
w(B.agW,A.P)
x(A.cV,[B.cr1,B.cr3,B.cr4,B.cr5,B.cr6,B.cr_])})()
A.c8(b.typeUniverse,JSON.parse('{"Fo":{"J":[],"e":[]},"agW":{"P":["Fo"]}}'))
var y=(function rtii(){var x=A.E
return{k:x("u<jM>"),p:x("u<e>"),j:x("B<@>"),P:x("A<i,@>"),K:x("f0"),u:x("rn"),N:x("i"),q:x("H0"),y:x("x"),z:x("@"),C:x("hz?"),H:x("~")}})();(function constants(){D.GZ=new B.TY(0,"valid")
D.abH=new B.TY(1,"invalid")
D.H_=new B.TY(2,"used")
D.abJ=new B.TY(3,"nothing")
D.bJx=new A.cx("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJR=new A.cx("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_236",e:"endPart",h:b})})($__dart_deferred_initializers__,"XwT9iHul/lPb/Otr3xpXCsLr/Ag=");