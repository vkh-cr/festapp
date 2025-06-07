((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_236",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,G,M,N,I,O,B={
bc7(d,e){return B.df1(d,e)},
df1(d,e){var x=0,w=A.m(y.C),v,u,t,s,r
var $async$bc7=A.i(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.Oc().de("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bc7)
case 3:r=g
s=J.a1(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=H.cYD(y.P.a(s.h(r,"ticket")))
if(s.a4(r,"order")&&s.h(r,"order")!=null)u.Q=H.cW1(s.h(r,"order"))
if(s.a4(r,"products")&&s.h(r,"products")!=null){t=J.bl(y.j.a(s.h(r,"products")),new B.bc8(),y.K)
t=A.D(t,t.$ti.i("a4.E"))
u.z=t}if(s.a4(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cIq(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bc7,w)},
bcc(d,e){return B.df6(d,e)},
df6(d,e){var x=0,w=A.m(y.y),v,u,t,s
var $async$bcc=A.i(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.Oc().de("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bcc)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bcc,w)},
bc8:function bc8(){},
dnW(d,e){return new B.Fm(e,d)},
TT:function TT(d,e){this.a=d
this.b=e},
Fm:function Fm(d,e){this.c=d
this.a=e},
agS:function agS(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cqo:function cqo(){},
cqp:function cqp(d){this.a=d},
cqq:function cqq(d){this.a=d},
cqr:function cqr(){},
cqs:function cqs(){},
cqt:function cqt(){},
cqu:function cqu(){},
cqn:function cqn(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W,K
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
B.TT.prototype={
I(){return"ScanState."+this.b}}
B.Fm.prototype={
M(){return new B.agS(D.abD,new A.cn(C.ax,$.a9()),E.cVy(F.Ml,A.a([C.o4],y.k)))}}
B.agS.prototype={
l(){this.x.l()
var x=this.r
x.a7$=$.a9()
x.Y$=0
this.ai()},
b_(){var x=0,w=A.m(y.H),v=this,u
var $async$b_=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:v.c9()
if(v.a.c==null&&J.fW(v.c.hx(y.u).f.r)){u=v.a
u.toString
u.c=J.v(v.c.hx(y.u).f.r,0).a.wg(0,"scanCode")}$.yC().ajH("https://unpkg.com/@zxing/library@0.21.3")
A.cT(v.a.c)
v.P1()
return A.k(null,w)}})
return A.l($async$b_,w)},
P1(){var x=0,w=A.m(y.H),v=this,u,t
var $async$P1=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hf(A.bU(0,0,0,500,0,0),null,y.z),$async$P1)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.Q8(u,A.q("Enter Scan Code",null),null,A.q("Scan Code",null)),$async$P1)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.k(null,w)}})
return A.l($async$P1,w)},
ac2(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bG(new A.a0(F.MJ,G.bz(D.bJJ,q),q),q,q)
x=r.f
if(x===D.GV)w=V.j2
else if(x===D.abB)w=Q.Dx
else{if(x!==D.GW)return C.a3
w=R.td}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.U(u).i("K<1,a0>")
u=A.D(new A.K(u,new B.cqo(),t),t.i("a4.E"))
v.push(A.ae(u,C.J,C.f,C.i,0,q,C.m))}v.push(C.al)
u=r.e.Q.a2Q()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.L(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.adV,C.aZ,q,q,q,q))
x=A.a([A.bG(A.ae(v,C.j,C.f,C.i,0,q,C.m),q,q),C.al,A.aW(w,C.n,q,30),C.a1],x)
if(r.f===D.GV)x.push(A.dz(!1,G.bz(D.bJp,q),q,q,q,q,q,q,r.gb3H(),q,q))
return new A.a0(K.aT,A.ae(x,C.j,C.f,C.i,0,q,C.m),q)},
B(d){var x,w,v=this,u=null,t=v.e==null?A.bPi(d):v.a3J(v.f),s=A.bt(C.as)
s=A.bO(u,u,u,u,u,u,A.aW(C.j1,new A.bn(s.a,s.b,s.c,0.8).bl(),u,u),u,u,u,new B.cqp(d),u,u,u,u,u)
x=A.bt(C.as)
w=y.p
return W.f9(u,t,A.jA(!0,new A.ci(C.ad,u,C.ab,C.v,A.a([A.ae(A.a([new A.a0(K.aT,A.at(A.a([s,A.bg(A.L("",u,u,u,u,u,u,u,A.ai(u,u,new A.bn(x.a,x.b,x.c,0.8).bl(),u,u,u,u,u,u,u,u,20,u,u,C.V,u,u,!0,u,u,u,u,u,u,u,u),C.aZ,u,u,u,u),1,u)],w),C.j,C.f,C.i,0,u),u),v.ac2(),A.bg(E.cVx(v.x,C.Bk,new B.cqq(v)),1,u)],w),C.j,C.f,C.i,0,u,C.m)],w),u),!0,C.P,!0,!0),u,u,u,u,u)},
wn(d){return this.aRt(d)},
aRt(d){var x=0,w=A.m(y.H),v,u=this,t,s,r
var $async$wn=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bc7(d,t),$async$wn)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.GV
E.qO()
u.u(new B.cqr())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.abB
E.qO()
E.qO()
u.u(new B.cqs())
x=1
break}else if(s&&t.e==="used"){u.f=D.GW
E.qO()
E.qO()
u.u(new B.cqt())
x=1
break}}u.f=D.abD
u.u(new B.cqu())
case 1:return A.k(v,w)}})
return A.l($async$wn,w)},
V0(){var x=0,w=A.m(y.H),v,u=this,t,s
var $async$V0=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bcc(s,t),$async$V0)
case 3:if(e){u.u(new B.cqn(u))
E.qO()}else{E.qO()
E.qO()
u.c.ad(y.q).f.akv(M.cXK(null,null,null,null,null,C.v,null,G.bz(A.L("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.Mx,null,null,null,null,null,null,null,null,null))}case 1:return A.k(v,w)}})
return A.l($async$V0,w)},
a3J(d){var x
switch(d.a){case 0:return U.a5V
case 2:return F.a5W
case 1:return I.l8
case 3:x=this.c
x.toString
return A.C(x).ax.a===C.q?$.hR():$.p6()}return I.l8}}
var z=a.updateTypes(["X<~>()"])
B.bc8.prototype={
$1(d){return A.a6n(d)},
$S:119}
B.cqo.prototype={
$1(d){var x=null
return new A.a0(O.CF,A.L(d.lr(),x,x,x,x,x,x,x,S.Ih,x,x,x,x,x),x)},
$S:385}
B.cqp.prototype={
$0(){L.fc(this.a,!1).f.ef(null)},
$S:0}
B.cqq.prototype={
$1(d){return this.aN_(d)},
aN_(d){var x=0,w=A.m(y.H),v,u=this,t,s
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:s=T.RJ(d.a)
if(s==null){x=1
break}t=s.z
A.hC().$1(t)
x=3
return A.d(u.a.wn(J.ar(t)),$async$$1)
case 3:case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:445}
B.cqr.prototype={
$0(){},
$S:0}
B.cqs.prototype={
$0(){},
$S:0}
B.cqt.prototype={
$0(){},
$S:0}
B.cqu.prototype={
$0(){},
$S:0}
B.cqn.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.GW},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.agS.prototype,"gb3H","V0",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.ce,[B.bc8,B.cqo,B.cqq])
w(B.TT,A.fl)
w(B.Fm,A.J)
w(B.agS,A.P)
x(A.cV,[B.cqp,B.cqr,B.cqs,B.cqt,B.cqu,B.cqn])})()
A.c8(b.typeUniverse,JSON.parse('{"Fm":{"J":[],"e":[]},"agS":{"P":["Fm"]}}'))
var y=(function rtii(){var x=A.E
return{k:x("u<jM>"),p:x("u<e>"),j:x("B<@>"),P:x("A<h,@>"),K:x("f_"),u:x("rn"),N:x("h"),q:x("H_"),y:x("w"),z:x("@"),C:x("hz?"),H:x("~")}})();(function constants(){D.GV=new B.TT(0,"valid")
D.abB=new B.TT(1,"invalid")
D.GW=new B.TT(2,"used")
D.abD=new B.TT(3,"nothing")
D.bJp=new A.cx("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJJ=new A.cx("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_236",e:"endPart",h:b})})($__dart_deferred_initializers__,"Y2v8oecmREeq+ROhgMZ8QONiNOw=");