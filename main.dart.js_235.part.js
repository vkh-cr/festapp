((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_235",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,G,M,N,O,I,B={
bgY(d,e){return B.dsK(d,e)},
dsK(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$bgY=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.PB().c8("scan_ticket",A.w(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bgY)
case 3:r=g
s=J.a_(r)
if(!J.q(s.h(r,"code"),200)){v=null
x=1
break}u=H.cYI(y.P.a(s.h(r,"ticket")))
if(s.a4(r,"order")&&s.h(r,"order")!=null)u.Q=H.a74(s.h(r,"order"))
if(s.a4(r,"products")&&s.h(r,"products")!=null){t=J.aT(y.j.a(s.h(r,"products")),new B.bgZ(),y.K)
t=A.A(t,t.$ti.i("a0.E"))
u.z=t}if(s.a4(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cUZ(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$bgY,w)},
bh2(d,e){return B.dsP(d,e)},
dsP(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$bh2=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.PB().c8("update_ticket_to_used",A.w(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bh2)
case 3:v=t.q(s.v(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$bh2,w)},
bgZ:function bgZ(){},
dCe(d,e){return new B.Gb(e,d)},
Va:function Va(d,e){this.a=d
this.b=e},
Gb:function Gb(d,e){this.c=d
this.a=e},
aiQ:function aiQ(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cBN:function cBN(){},
cBO:function cBO(d){this.a=d},
cBP:function cBP(d){this.a=d},
cBQ:function cBQ(){},
cBR:function cBR(){},
cBS:function cBS(){},
cBT:function cBT(){},
cBM:function cBM(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W,K
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
B.Va.prototype={
J(){return"ScanState."+this.b}}
B.Gb.prototype={
K(){return new B.aiQ(D.acG,new A.bS(C.ah,$.a8()),E.d7G(F.Nh,A.a([C.on],y.k)))}}
B.aiQ.prototype={
l(){this.x.l()
var x=this.r
x.V$=$.a8()
x.T$=0
this.af()},
b_(){var x=0,w=A.k(y.H),v=this,u
var $async$b_=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.c3()
if(v.a.c==null&&J.fD(v.c.hE(y.u).f.r)){u=v.a
u.toString
u.c=J.v(v.c.hE(y.u).f.r,0).a.v1(0,"scanCode")}$.zr().ale("https://unpkg.com/@zxing/library@0.21.3")
A.cI(v.a.c)
v.PO()
return A.i(null,w)}})
return A.j($async$b_,w)},
PO(){var x=0,w=A.k(y.H),v=this,u,t
var $async$PO=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hC(A.c2(0,0,0,500,0,0),null,y.z),$async$PO)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.Rv(u,A.n("Enter Scan Code",null,null),null,A.n("Scan Code",null,null)),$async$PO)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$PO,w)},
adq(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bj(new A.X(F.NF,G.bN(D.bLe,q),q),q,q)
x=r.f
if(x===D.HO)w=V.iv
else if(x===D.acE)w=Q.tD
else{if(x!==D.HP)return C.V
w=R.tI}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.O(u).i("G<1,X>")
u=A.A(new A.G(u,new B.cBN(),t),t.i("a0.E"))
v.push(A.aa(u,C.D,C.f,C.h,0,q,C.l))}v.push(C.af)
u=r.e.Q.tE()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.E(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.J8,C.aZ,q,q,q,q))
x=A.a([A.bj(A.aa(v,C.i,C.f,C.h,0,q,C.l),q,q),C.af,A.aB(w,C.p,q,30),C.X],x)
if(r.f===D.HO)x.push(A.dq(!1,G.bN(D.bKU,q),q,q,q,q,q,q,r.gb6z(),q,q))
return new A.X(K.aW,A.aa(x,C.i,C.f,C.h,0,q,C.l),q)},
B(d){var x,w,v=this,u=null,t=v.e==null?A.bWC(d):v.a4V(v.f),s=A.bO(C.as)
s=A.bK(u,u,u,u,u,u,A.aB(C.jj,new A.by(s.a,s.b,s.c,0.8).bu(),u,u),u,u,u,new B.cBO(d),u,u,u,u,u)
x=A.bO(C.as)
w=y.p
return W.eL(u,t,A.iE(!0,new A.cj(C.ad,u,C.ac,C.u,A.a([A.aa(A.a([new A.X(K.aW,A.ae(A.a([s,A.b_(A.E("",u,u,u,u,u,u,u,A.ac(u,u,new A.by(x.a,x.b,x.c,0.8).bu(),u,u,u,u,u,u,u,u,20,u,u,C.O,u,u,!0,u,u,u,u,u,u,u,u),C.aZ,u,u,u,u),1,u)],w),C.i,u,C.f,C.h,0,u),u),v.adq(),A.b_(E.d7F(v.x,C.C0,new B.cBP(v)),1,u)],w),C.i,C.f,C.h,0,u,C.l)],w),u),!0,C.N,!0,!0),u,u,u,u)},
wJ(d){return this.aU2(d)},
aU2(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$wJ=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bgY(d,t),$async$wJ)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.HO
E.rw()
u.q(new B.cBQ())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.acE
E.rw()
E.rw()
u.q(new B.cBR())
x=1
break}else if(s&&t.e==="used"){u.f=D.HP
E.rw()
E.rw()
u.q(new B.cBS())
x=1
break}}u.f=D.acG
u.q(new B.cBT())
case 1:return A.i(v,w)}})
return A.j($async$wJ,w)},
VQ(){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$VQ=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bh2(s,t),$async$VQ)
case 3:if(e){u.q(new B.cBM(u))
E.rw()}else{E.rw()
E.rw()
u.c.a8(y.q).f.a5J(M.cYi(null,null,null,null,null,C.u,null,G.bN(A.E("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.Dh,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$VQ,w)},
a4V(d){var x
switch(d.a){case 0:return U.a72
case 2:return F.a73
case 1:return I.lm
case 3:x=this.c
x.toString
return A.B(x).ax.a===C.q?$.i0():$.nT()}return I.lm}}
var z=a.updateTypes(["V<~>()"])
B.bgZ.prototype={
$1(d){return A.Bl(d)},
$S:92}
B.cBN.prototype={
$1(d){var x=null
return new A.X(O.Dn,A.E(d.iQ(),x,x,x,x,x,x,x,S.J9,x,x,x,x,x),x)},
$S:280}
B.cBO.prototype={
$0(){L.fg(this.a,!1).f.dm(null)},
$S:0}
B.cBP.prototype={
$1(d){return this.aPx(d)},
aPx(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=T.SZ(d.a)
if(s==null){x=1
break}t=s.z
A.fT().$1(t)
x=3
return A.d(u.a.wJ(J.ap(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:503}
B.cBQ.prototype={
$0(){},
$S:0}
B.cBR.prototype={
$0(){},
$S:0}
B.cBS.prototype={
$0(){},
$S:0}
B.cBT.prototype={
$0(){},
$S:0}
B.cBM.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.HP},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.aiQ.prototype,"gb6z","VQ",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.cl,[B.bgZ,B.cBN,B.cBP])
w(B.Va,A.fv)
w(B.Gb,A.M)
w(B.aiQ,A.N)
x(A.cV,[B.cBO,B.cBQ,B.cBR,B.cBS,B.cBT,B.cBM])})()
A.cg(b.typeUniverse,JSON.parse('{"Gb":{"M":[],"e":[]},"aiQ":{"N":["Gb"]}}'))
var y=(function rtii(){var x=A.F
return{k:x("u<kc>"),p:x("u<e>"),j:x("D<@>"),P:x("z<l,@>"),K:x("dl"),u:x("qx"),N:x("l"),q:x("CC"),y:x("y"),z:x("@"),C:x("hX?"),H:x("~")}})();(function constants(){D.HO=new B.Va(0,"valid")
D.acE=new B.Va(1,"invalid")
D.HP=new B.Va(2,"used")
D.acG=new B.Va(3,"nothing")
D.bKU=new A.cw("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLe=new A.cw("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_235",e:"endPart",h:b})})($__dart_deferred_initializers__,"Rq5zGrtWDr1yBe6/e6u1P+nEbyA=");