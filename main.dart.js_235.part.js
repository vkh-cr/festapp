((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_235",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,G,M,N,O,I,B={
bgV(d,e){return B.dtc(d,e)},
dtc(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$bgV=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.PB().c6("scan_ticket",A.w(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bgV)
case 3:r=g
s=J.a0(r)
if(!J.q(s.h(r,"code"),200)){v=null
x=1
break}u=H.bXD(y.P.a(s.h(r,"ticket")))
if(s.a4(r,"order")&&s.h(r,"order")!=null)u.Q=H.TX(s.h(r,"order"))
if(s.a4(r,"products")&&s.h(r,"products")!=null){t=J.aR(y.j.a(s.h(r,"products")),new B.bgW(),y.K)
t=A.A(t,t.$ti.i("a_.E"))
u.z=t}if(s.a4(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cVy(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bgV,w)},
bh_(d,e){return B.dth(d,e)},
dth(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$bh_=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.PB().c6("update_ticket_to_used",A.w(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bh_)
case 3:v=t.q(s.v(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bh_,w)},
bgW:function bgW(){},
dCH(d,e){return new B.Gd(e,d)},
Vc:function Vc(d,e){this.a=d
this.b=e},
Gd:function Gd(d,e){this.c=d
this.a=e},
aiR:function aiR(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cCk:function cCk(){},
cCl:function cCl(d){this.a=d},
cCm:function cCm(d){this.a=d},
cCn:function cCn(){},
cCo:function cCo(){},
cCp:function cCp(){},
cCq:function cCq(){},
cCj:function cCj(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W,K
J=c[1]
A=c[0]
C=c[2]
L=c[163]
G=c[162]
M=c[118]
N=c[236]
O=c[237]
I=c[183]
B=a.updateHolder(c[22],B)
D=c[235]
E=c[37]
F=c[179]
P=c[63]
Q=c[180]
R=c[233]
S=c[238]
T=c[97]
H=c[77]
U=c[182]
V=c[171]
W=c[164]
K=c[174]
B.Vc.prototype={
J(){return"ScanState."+this.b}}
B.Gd.prototype={
K(){return new B.aiR(D.acS,new A.bQ(C.ah,$.a8()),E.d8d(F.Nq,A.a([C.or],y.k)))}}
B.aiR.prototype={
l(){this.x.l()
var x=this.r
x.U$=$.a8()
x.S$=0
this.af()},
b_(){var x=0,w=A.l(y.H),v=this,u
var $async$b_=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.c3()
if(v.a.c==null&&J.fx(v.c.hG(y.u).f.r)){u=v.a
u.toString
u.c=J.v(v.c.hG(y.u).f.r,0).a.v1(0,"scanCode")}$.zr().alg("https://unpkg.com/@zxing/library@0.21.3")
A.cI(v.a.c)
v.PL()
return A.j(null,w)}})
return A.k($async$b_,w)},
PL(){var x=0,w=A.l(y.H),v=this,u,t
var $async$PL=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hf(A.c1(0,0,0,500,0,0),null,y.z),$async$PL)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.Rw(u,A.n("Enter Scan Code",null,null),null,A.n("Scan Code",null,null)),$async$PL)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$PL,w)},
adr(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bj(new A.W(F.NO,G.bR(D.bLl,q),q),q,q)
x=r.f
if(x===D.HV)w=V.iw
else if(x===D.acQ)w=Q.tI
else{if(x!==D.HW)return C.V
w=R.tO}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.O(u).i("F<1,W>")
u=A.A(new A.F(u,new B.cCk(),t),t.i("a_.E"))
v.push(A.a9(u,C.C,C.f,C.h,0,q,C.l))}v.push(C.ac)
u=r.e.Q.tB()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.E(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.Jf,C.aY,q,q,q,q))
x=A.a([A.bj(A.a9(v,C.i,C.f,C.h,0,q,C.l),q,q),C.ac,A.aB(w,C.p,q,30),C.X],x)
if(r.f===D.HV)x.push(A.dk(!1,G.bR(D.bL0,q),q,q,q,q,q,q,r.gb6I(),q,q))
return new A.W(K.aW,A.a9(x,C.i,C.f,C.h,0,q,C.l),q)},
B(d){var x,w,v=this,u=null,t=v.e==null?A.bWI(d):v.a4U(v.f),s=A.bN(C.as)
s=A.bJ(u,u,u,u,u,u,A.aB(C.jl,new A.bz(s.a,s.b,s.c,0.8).bu(),u,u),u,u,u,new B.cCl(d),u,u,u,u,u)
x=A.bN(C.as)
w=y.p
return W.eO(u,t,A.iH(!0,new A.cj(C.ae,u,C.ad,C.u,A.a([A.a9(A.a([new A.W(K.aW,A.ad(A.a([s,A.aX(A.E("",u,u,u,u,u,u,u,A.ab(u,u,new A.bz(x.a,x.b,x.c,0.8).bu(),u,u,u,u,u,u,u,u,20,u,u,C.O,u,u,!0,u,u,u,u,u,u,u,u),C.aY,u,u,u,u),1,u)],w),C.i,u,C.f,C.h,0,u),u),v.adr(),A.aX(E.d8c(v.x,C.Ca,new B.cCm(v)),1,u)],w),C.i,C.f,C.h,0,u,C.l)],w),u),!0,C.N,!0,!0),u,u,u,u)},
wI(d){return this.aU9(d)},
aU9(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$wI=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bgV(d,t),$async$wI)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.HV
E.rw()
u.t(new B.cCn())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.acQ
E.rw()
E.rw()
u.t(new B.cCo())
x=1
break}else if(s&&t.e==="used"){u.f=D.HW
E.rw()
E.rw()
u.t(new B.cCp())
x=1
break}}u.f=D.acS
u.t(new B.cCq())
case 1:return A.j(v,w)}})
return A.k($async$wI,w)},
VM(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$VM=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bh_(s,t),$async$VM)
case 3:if(e){u.t(new B.cCj(u))
E.rw()}else{E.rw()
E.rw()
u.c.a8(y.q).f.a5J(M.cYT(null,null,null,null,null,C.u,null,G.bR(A.E("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.Du,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$VM,w)},
a4U(d){var x
switch(d.a){case 0:return U.a7e
case 2:return F.a7f
case 1:return I.lo
case 3:x=this.c
x.toString
return A.B(x).ax.a===C.q?$.i2():$.nW()}return I.lo}}
var z=a.updateTypes(["V<~>()"])
B.bgW.prototype={
$1(d){return A.Bl(d)},
$S:91}
B.cCk.prototype={
$1(d){var x=null
return new A.W(O.Dz,A.E(d.iQ(),x,x,x,x,x,x,x,S.Jg,x,x,x,x,x),x)},
$S:285}
B.cCl.prototype={
$0(){L.fs(this.a,!1).f.dl(null)},
$S:0}
B.cCm.prototype={
$1(d){return this.aPE(d)},
aPE(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=T.T_(d.a)
if(s==null){x=1
break}t=s.z
A.h6().$1(t)
x=3
return A.d(u.a.wI(J.aq(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:510}
B.cCn.prototype={
$0(){},
$S:0}
B.cCo.prototype={
$0(){},
$S:0}
B.cCp.prototype={
$0(){},
$S:0}
B.cCq.prototype={
$0(){},
$S:0}
B.cCj.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.HW},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.aiR.prototype,"gb6I","VM",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.cl,[B.bgW,B.cCk,B.cCm])
w(B.Vc,A.fw)
w(B.Gd,A.M)
w(B.aiR,A.N)
x(A.cV,[B.cCl,B.cCn,B.cCo,B.cCp,B.cCq,B.cCj])})()
A.ch(b.typeUniverse,JSON.parse('{"Gd":{"M":[],"e":[]},"aiR":{"N":["Gd"]}}'))
var y=(function rtii(){var x=A.G
return{k:x("u<kc>"),p:x("u<e>"),j:x("D<@>"),P:x("z<f,@>"),K:x("dn"),u:x("qy"),N:x("f"),q:x("CF"),y:x("y"),z:x("@"),C:x("hu?"),H:x("~")}})();(function constants(){D.HV=new B.Vc(0,"valid")
D.acQ=new B.Vc(1,"invalid")
D.HW=new B.Vc(2,"used")
D.acS=new B.Vc(3,"nothing")
D.bL0=new A.cy("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLl=new A.cy("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_235",e:"endPart",h:b})})($__dart_deferred_initializers__,"e4qyM08HSC59EtCJciRd0eL82bM=");