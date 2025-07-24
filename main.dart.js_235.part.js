((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_235",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,G,M,N,O,I,B={
bgQ(d,e){return B.dsn(d,e)},
dsn(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$bgQ=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.Py().c8("scan_ticket",A.w(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bgQ)
case 3:r=g
s=J.a_(r)
if(!J.q(s.h(r,"code"),200)){v=null
x=1
break}u=H.cYn(y.P.a(s.h(r,"ticket")))
if(s.a4(r,"order")&&s.h(r,"order")!=null)u.Q=H.a71(s.h(r,"order"))
if(s.a4(r,"products")&&s.h(r,"products")!=null){t=J.aU(y.j.a(s.h(r,"products")),new B.bgR(),y.K)
t=A.A(t,t.$ti.i("a0.E"))
u.z=t}if(s.a4(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cUD(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$bgQ,w)},
bgV(d,e){return B.dss(d,e)},
dss(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$bgV=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.Py().c8("update_ticket_to_used",A.w(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bgV)
case 3:v=t.q(s.v(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$bgV,w)},
bgR:function bgR(){},
dBS(d,e){return new B.Gb(e,d)},
V8:function V8(d,e){this.a=d
this.b=e},
Gb:function Gb(d,e){this.c=d
this.a=e},
aiM:function aiM(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cBq:function cBq(){},
cBr:function cBr(d){this.a=d},
cBs:function cBs(d){this.a=d},
cBt:function cBt(){},
cBu:function cBu(){},
cBv:function cBv(){},
cBw:function cBw(){},
cBp:function cBp(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W,K
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
V=c[173]
W=c[164]
K=c[166]
B.V8.prototype={
J(){return"ScanState."+this.b}}
B.Gb.prototype={
K(){return new B.aiM(D.acE,new A.bS(C.ah,$.a8()),E.d7l(F.Nf,A.a([C.on],y.k)))}}
B.aiM.prototype={
l(){this.x.l()
var x=this.r
x.V$=$.a8()
x.T$=0
this.af()},
b_(){var x=0,w=A.k(y.H),v=this,u
var $async$b_=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.c2()
if(v.a.c==null&&J.fN(v.c.hE(y.u).f.r)){u=v.a
u.toString
u.c=J.v(v.c.hE(y.u).f.r,0).a.v1(0,"scanCode")}$.zr().ald("https://unpkg.com/@zxing/library@0.21.3")
A.cJ(v.a.c)
v.PN()
return A.i(null,w)}})
return A.j($async$b_,w)},
PN(){var x=0,w=A.k(y.H),v=this,u,t
var $async$PN=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hC(A.c2(0,0,0,500,0,0),null,y.z),$async$PN)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.Rs(u,A.n("Enter Scan Code",null),null,A.n("Scan Code",null)),$async$PN)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$PN,w)},
adq(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bi(new A.X(F.ND,G.bM(D.bLa,q),q),q,q)
x=r.f
if(x===D.HM)w=V.iv
else if(x===D.acC)w=Q.tC
else{if(x!==D.HN)return C.V
w=R.tH}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.O(u).i("G<1,X>")
u=A.A(new A.G(u,new B.cBq(),t),t.i("a0.E"))
v.push(A.aa(u,C.D,C.f,C.h,0,q,C.l))}v.push(C.af)
u=r.e.Q.tD()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.E(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.J6,C.aZ,q,q,q,q))
x=A.a([A.bi(A.aa(v,C.i,C.f,C.h,0,q,C.l),q,q),C.af,A.aB(w,C.o,q,30),C.X],x)
if(r.f===D.HM)x.push(A.dq(!1,G.bM(D.bKQ,q),q,q,q,q,q,q,r.gb6v(),q,q))
return new A.X(K.aU,A.aa(x,C.i,C.f,C.h,0,q,C.l),q)},
B(d){var x,w,v=this,u=null,t=v.e==null?A.bWo(d):v.a4U(v.f),s=A.bN(C.ar)
s=A.bJ(u,u,u,u,u,u,A.aB(C.jk,new A.by(s.a,s.b,s.c,0.8).bu(),u,u),u,u,u,new B.cBr(d),u,u,u,u,u)
x=A.bN(C.ar)
w=y.p
return W.eL(u,t,A.iE(!0,new A.ci(C.ad,u,C.ac,C.u,A.a([A.aa(A.a([new A.X(K.aU,A.af(A.a([s,A.b1(A.E("",u,u,u,u,u,u,u,A.ac(u,u,new A.by(x.a,x.b,x.c,0.8).bu(),u,u,u,u,u,u,u,u,20,u,u,C.O,u,u,!0,u,u,u,u,u,u,u,u),C.aZ,u,u,u,u),1,u)],w),C.i,u,C.f,C.h,0,u),u),v.adq(),A.b1(E.d7k(v.x,C.C0,new B.cBs(v)),1,u)],w),C.i,C.f,C.h,0,u,C.l)],w),u),!0,C.N,!0,!0),u,u,u,u)},
wJ(d){return this.aTZ(d)},
aTZ(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$wJ=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bgQ(d,t),$async$wJ)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.HM
E.rw()
u.q(new B.cBt())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.acC
E.rw()
E.rw()
u.q(new B.cBu())
x=1
break}else if(s&&t.e==="used"){u.f=D.HN
E.rw()
E.rw()
u.q(new B.cBv())
x=1
break}}u.f=D.acE
u.q(new B.cBw())
case 1:return A.i(v,w)}})
return A.j($async$wJ,w)},
VP(){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$VP=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bgV(s,t),$async$VP)
case 3:if(e){u.q(new B.cBp(u))
E.rw()}else{E.rw()
E.rw()
u.c.a9(y.q).f.a5I(M.cXY(null,null,null,null,null,C.u,null,G.bM(A.E("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.Dh,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$VP,w)},
a4U(d){var x
switch(d.a){case 0:return U.a70
case 2:return F.a71
case 1:return I.lk
case 3:x=this.c
x.toString
return A.B(x).ax.a===C.q?$.i_():$.nT()}return I.lk}}
var z=a.updateTypes(["V<~>()"])
B.bgR.prototype={
$1(d){return A.Bj(d)},
$S:97}
B.cBq.prototype={
$1(d){var x=null
return new A.X(O.Dn,A.E(d.iQ(),x,x,x,x,x,x,x,S.J7,x,x,x,x,x),x)},
$S:286}
B.cBr.prototype={
$0(){L.ff(this.a,!1).f.dq(null)},
$S:0}
B.cBs.prototype={
$1(d){return this.aPt(d)},
aPt(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=T.SX(d.a)
if(s==null){x=1
break}t=s.z
A.fS().$1(t)
x=3
return A.d(u.a.wJ(J.ap(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:498}
B.cBt.prototype={
$0(){},
$S:0}
B.cBu.prototype={
$0(){},
$S:0}
B.cBv.prototype={
$0(){},
$S:0}
B.cBw.prototype={
$0(){},
$S:0}
B.cBp.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.HN},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.aiM.prototype,"gb6v","VP",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.cl,[B.bgR,B.cBq,B.cBs])
w(B.V8,A.fu)
w(B.Gb,A.M)
w(B.aiM,A.N)
x(A.cV,[B.cBr,B.cBt,B.cBu,B.cBv,B.cBw,B.cBp])})()
A.cf(b.typeUniverse,JSON.parse('{"Gb":{"M":[],"e":[]},"aiM":{"N":["Gb"]}}'))
var y=(function rtii(){var x=A.F
return{k:x("u<kb>"),p:x("u<e>"),j:x("D<@>"),P:x("z<l,@>"),K:x("dl"),u:x("qx"),N:x("l"),q:x("Cz"),y:x("x"),z:x("@"),C:x("hW?"),H:x("~")}})();(function constants(){D.HM=new B.V8(0,"valid")
D.acC=new B.V8(1,"invalid")
D.HN=new B.V8(2,"used")
D.acE=new B.V8(3,"nothing")
D.bKQ=new A.cw("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLa=new A.cw("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_235",e:"endPart",h:b})})($__dart_deferred_initializers__,"AxlEEaeIidDVKzpZuwHcREN1mjk=");