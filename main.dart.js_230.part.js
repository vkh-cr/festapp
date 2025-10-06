((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,F,M,N,O,I,B={
bjp(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$bjp=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.J_().c6("scan_ticket",A.w(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bjp)
case 3:r=g
s=J.a1(r)
if(!J.q(s.h(r,"code"),200)){v=null
x=1
break}u=H.c_w(y.P.a(s.h(r,"ticket")))
if(s.a5(r,"order")&&s.h(r,"order")!=null)u.Q=H.UJ(s.h(r,"order"))
if(s.a5(r,"products")&&s.h(r,"products")!=null){t=J.aY(y.j.a(s.h(r,"products")),new B.bjq(),y.K)
t=A.A(t,t.$ti.i("a_.E"))
u.z=t}if(s.a5(r,"spot")&&s.h(r,"spot")!=null)u.y=H.d_o(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bjp,w)},
bju(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$bju=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.J_().c6("update_ticket_to_used",A.w(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bju)
case 3:v=t.q(s.v(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bju,w)},
bjq:function bjq(){},
dFm(d,e){return new B.GR(e,d)},
W1:function W1(d,e){this.a=d
this.b=e},
GR:function GR(d,e){this.c=d
this.a=e},
akg:function akg(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cGd:function cGd(){},
cGe:function cGe(d){this.a=d},
cGf:function cGf(d){this.a=d},
cGg:function cGg(){},
cGh:function cGh(){},
cGi:function cGi(){},
cGj:function cGj(){},
cGc:function cGc(d){this.a=d}},D,E,G,P,Q,R,S,T,U,H,V,W,X,K
J=c[1]
A=c[0]
C=c[2]
L=c[161]
F=c[160]
M=c[117]
N=c[235]
O=c[236]
I=c[182]
B=a.updateHolder(c[22],B)
D=c[234]
E=c[37]
G=c[177]
P=c[63]
Q=c[178]
R=c[232]
S=c[237]
T=c[95]
U=c[181]
H=c[75]
V=c[180]
W=c[169]
X=c[162]
K=c[172]
B.W1.prototype={
I(){return"ScanState."+this.b}}
B.GR.prototype={
K(){return new B.akg(D.adw,new A.bF(C.af,$.a7()),E.ddq(G.Oe,A.b([C.oJ],y.k)))}}
B.akg.prototype={
l(){this.x.l()
var x=this.r
x.T$=$.a7()
x.U$=0
this.ae()},
b0(){var x=0,w=A.l(y.H),v=this,u
var $async$b0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.c5()
if(v.a.c==null&&J.fA(v.c.hP(y.u).f.r)){u=v.a
u.toString
u.c=J.v(v.c.hP(y.u).f.r,0).a.vl(0,"scanCode")}$.A1().amv("https://unpkg.com/@zxing/library@0.21.3")
A.cR(v.a.c)
v.Qg()
return A.j(null,w)}})
return A.k($async$b0,w)},
Qg(){var x=0,w=A.l(y.H),v=this,u,t
var $async$Qg=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hm(A.c0(0,0,0,500,0,0),null,y.z),$async$Qg)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.Sk(u,A.n("Enter Scan Code",null,null),null,A.n("Scan Code",null,null)),$async$Qg)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$Qg,w)},
aet(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bl(new A.V(G.Ox,F.bU(D.bMq,q),q),q,q)
x=r.f
if(x===D.IO)w=W.iP
else if(x===D.adu)w=Q.uj
else{if(x!==D.IP)return C.U
w=R.up}x=y.p
v=A.b([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.O(u).i("F<1,V>")
u=A.A(new A.F(u,new B.cGd(),t),t.i("a_.E"))
v.push(A.a9(u,C.B,C.f,C.h,0,q,C.l))}v.push(C.ad)
u=r.e.Q.tW()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.D(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,G.K9,C.aX,q,q,q,q))
x=A.b([A.bl(A.a9(v,C.i,C.f,C.h,0,q,C.l),q,q),C.ad,A.aC(w,C.o,q,30),C.X],x)
if(r.f===D.IO)x.push(A.dk(!1,F.bU(D.bM3,q),q,q,q,q,q,q,r.gb8Q(),q,q))
return new A.V(K.aV,A.a9(x,C.i,C.f,C.h,0,q,C.l),q)},
A(d){var x,w,v=this,u=null,t=v.e==null?A.bZz(d):v.a5H(v.f),s=A.bP(C.ar)
s=A.bQ(u,u,u,u,u,u,A.aC(C.jC,new A.bJ(s.a,s.b,s.c,0.8).bx(),u,u),u,u,u,new B.cGe(d),u,u,u,u,u)
x=A.bP(C.ar)
w=y.p
return X.eN(u,t,A.iC(!0,new A.cd(C.aa,u,C.a9,C.t,A.b([A.a9(A.b([new A.V(K.aV,A.ae(A.b([s,A.aX(A.D("",u,u,u,u,u,u,u,A.ad(u,u,new A.bJ(x.a,x.b,x.c,0.8).bx(),u,u,u,u,u,u,u,u,20,u,u,C.N,u,u,!0,u,u,u,u,u,u,u,u),C.aX,u,u,u,u),1,u)],w),C.i,u,C.f,C.h,0,u),u),v.aet(),A.aX(E.ddp(v.x,C.CN,new B.cGf(v)),1,u)],w),C.i,C.f,C.h,0,u,C.l)],w),u),!0,C.I,!0,!0),u,u,u,u)},
x5(d){return this.aWd(d)},
aWd(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$x5=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bjp(d,t),$async$x5)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.IO
E.rQ()
u.q(new B.cGg())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.adu
E.rQ()
E.rQ()
u.q(new B.cGh())
x=1
break}else if(s&&t.e==="used"){u.f=D.IP
E.rQ()
E.rQ()
u.q(new B.cGi())
x=1
break}}u.f=D.adw
u.q(new B.cGj())
case 1:return A.j(v,w)}})
return A.k($async$x5,w)},
Wi(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$Wi=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bju(s,t),$async$Wi)
case 3:if(e){u.q(new B.cGc(u))
E.rQ()}else{E.rQ()
E.rQ()
u.c.af(y.q).f.a6A(M.d2E(null,null,null,null,null,C.t,null,F.bU(A.D("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.Eb,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$Wi,w)},
a5H(d){var x
switch(d.a){case 0:return V.a7X
case 2:return U.I5
case 1:return I.lI
case 3:x=this.c
x.toString
return A.z(x).ax.a===C.p?$.i0():$.ob()}return I.lI}}
var z=a.updateTypes(["W<~>()"])
B.bjq.prototype={
$1(d){return A.C0(d)},
$S:108}
B.cGd.prototype={
$1(d){var x=null
return new A.V(O.Ei,A.D(d.j1(),x,x,x,x,x,x,x,S.Ka,x,x,x,x,x),x)},
$S:258}
B.cGe.prototype={
$0(){L.ft(this.a,!1).f.dE(null)},
$S:0}
B.cGf.prototype={
$1(d){return this.aRJ(d)},
aRJ(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=T.TK(d.a)
if(s==null){x=1
break}t=s.z
A.hc().$1(t)
x=3
return A.d(u.a.x5(J.aq(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:327}
B.cGg.prototype={
$0(){},
$S:0}
B.cGh.prototype={
$0(){},
$S:0}
B.cGi.prototype={
$0(){},
$S:0}
B.cGj.prototype={
$0(){},
$S:0}
B.cGc.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.IP},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.akg.prototype,"gb8Q","Wi",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.cq,[B.bjq,B.cGd,B.cGf])
w(B.W1,A.fI)
w(B.GR,A.L)
w(B.akg,A.N)
x(A.d1,[B.cGe,B.cGg,B.cGh,B.cGi,B.cGj,B.cGc])})()
A.ch(b.typeUniverse,JSON.parse('{"GR":{"L":[],"e":[]},"akg":{"N":["GR"]}}'))
var y=(function rtii(){var x=A.J
return{k:x("u<ko>"),p:x("u<e>"),j:x("E<@>"),P:x("B<f,@>"),K:x("ds"),u:x("qQ"),N:x("f"),q:x("Dl"),y:x("x"),z:x("@"),C:x("hB?"),H:x("~")}})();(function constants(){D.IO=new B.W1(0,"valid")
D.adu=new B.W1(1,"invalid")
D.IP=new B.W1(2,"used")
D.adw=new B.W1(3,"nothing")
D.bM3=new A.ce("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMq=new A.ce("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["8+kF4J09KND5GSX7gEwrRSuEMwU="]=a.current})($__dart_deferred_initializers__);