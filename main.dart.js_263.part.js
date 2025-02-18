((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_263",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,I,P,Q,R,S,K,B={
b3j(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$b3j=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.c($.Lu().ef("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b3j)
case 3:r=g
s=J.a3(r)
if(!J.m(s.i(r,"code"),200)){v=null
x=1
break}u=G.cyw(y.P.a(s.i(r,"ticket")))
if(s.a3(r,"order")&&s.i(r,"order")!=null)u.Q=G.cvL(s.i(r,"order"))
if(s.a3(r,"products")&&s.i(r,"products")!=null){t=J.ci(y.j.a(s.i(r,"products")),new B.b3k(),y.K)
u.z=A.J(t,!0,t.$ti.h("ac.E"))}if(s.a3(r,"spot")&&s.i(r,"spot")!=null)u.y=G.ciZ(s.i(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$b3j,w)},
b3o(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$b3o=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.c($.Lu().ef("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b3o)
case 3:v=t.m(s.u(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$b3o,w)},
b3k:function b3k(){},
cUn(d,e){return new B.Dj(e,d)},
QR:function QR(d,e){this.a=d
this.b=e},
Dj:function Dj(d,e){this.c=d
this.a=e},
acb:function acb(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
c4H:function c4H(){},
c4I:function c4I(d){this.a=d},
c4J:function c4J(d){this.a=d},
c4K:function c4K(){},
c4L:function c4L(){},
c4M:function c4M(){},
c4N:function c4N(){},
c4G:function c4G(d){this.a=d}},D,E,F,T,U,V,W,G,X,Y,Z,A_,L,H,A0
J=c[1]
A=c[0]
C=c[2]
M=c[203]
N=c[229]
O=c[199]
I=c[208]
P=c[228]
Q=c[95]
R=c[286]
S=c[100]
K=c[231]
B=a.updateHolder(c[22],B)
D=c[285]
E=c[36]
F=c[226]
T=c[62]
U=c[287]
V=c[284]
W=c[288]
G=c[78]
X=c[230]
Y=c[186]
Z=c[209]
A_=c[225]
L=c[207]
H=c[191]
A0=c[196]
B.QR.prototype={
J(){return"ScanState."+this.b}}
B.Dj.prototype={
N(){return new B.acb(D.a2x,new Y.dK(A_.aQ,$.ag()),E.cvm(F.Hj,A.a([C.lO],y.k)))}}
B.acb.prototype={
l(){this.x.l()
var x=this.r
x.V$=$.ag()
x.X$=0
this.ai()},
aW(){var x=0,w=A.l(y.H),v=this,u
var $async$aW=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.cm()
if(v.a.c==null&&v.c.hT(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hT(y.u).f.f[0].a.xL(0,"scanCode")}$.A9().afo("https://unpkg.com/@zxing/library@0.21.3")
A.en(v.a.c)
v.Nk()
return A.j(null,w)}})
return A.k($async$aW,w)},
Nk(){var x=0,w=A.l(y.H),v=this,u,t
var $async$Nk=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.c(A.i7(A.cq(0,0,0,500,0),null,y.z),$async$Nk)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.c(T.Nj(u,A.y("Enter Scan Code",null),null,A.y("Scan Code",null)),$async$Nk)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$Nk,w)},
a8n(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.ce(new A.a6(F.HL,H.bu(D.b4k,q),q),q,q)
x=r.f
if(x===D.C9)w=M.iZ
else if(x===D.a2v)w=F.IH
else{if(x!==D.Ca)return C.a9
w=V.pj}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.X(u).h("Q<1,a6>")
v.push(A.ax(A.J(new A.Q(u,new B.c4H(),t),!0,t.h("ac.E")),C.a_,C.f,C.i,q,C.p))}v.push(L.b3)
u=r.e.Q.a_W()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.a1(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.a4o,C.bi,q,q,q,q))
x=A.a([A.ce(A.ax(v,C.j,C.f,C.i,q,C.p),q,q),L.b3,A.bO(w,C.t,q,30),Z.al],x)
if(r.f===D.C9)x.push(A.dz(!1,H.bu(D.b3X,q),q,q,q,q,q,q,r.gaXo(),q,q))
return new A.a6(I.aW,A.ax(x,C.j,C.f,C.i,q,C.p),q)},
A(d){var x=this,w=null,v=x.e==null?S.bDC(d):x.a0P(x.f),u=A.cl(w,w,w,w,w,A.bO(P.hx,C.cn,w,w),w,w,w,new B.c4I(d),w,w,w,w,w),t=y.p
return O.f4(w,v,A.k0(!0,new A.ct(C.ag,w,C.ad,C.A,A.a([A.ax(A.a([new A.a6(I.aW,A.aK(A.a([u,A.c5(A.a1("",w,w,w,w,w,w,w,A.aU(w,w,C.cn,w,w,w,w,w,w,w,w,20,w,w,C.a4,w,w,!0,w,w,w,w,w,w,w,w),C.bi,w,w,w,w),1,w)],t),C.j,C.f,C.i,w),w),x.a8n(),A.c5(E.cvl(x.x,N.Fj,new B.c4J(x)),1,w)],t),C.j,C.f,C.i,w,C.p)],t),w),!0,C.U,!0,!0),w,w,w,w,w)},
vQ(d){return this.aL1(d)},
aL1(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$vQ=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.c(B.b3j(d,t),$async$vQ)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.C9
E.pM()
u.B(new B.c4K())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a2v
E.pM()
E.pM()
u.B(new B.c4L())
x=1
break}else if(s&&t.e==="used"){u.f=D.Ca
E.pM()
E.pM()
u.B(new B.c4M())
x=1
break}}u.f=D.a2x
u.B(new B.c4N())
case 1:return A.j(v,w)}})
return A.k($async$vQ,w)},
SV(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$SV=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.c(B.b3o(s,t),$async$SV)
case 3:if(e){u.B(new B.c4G(u))
E.pM()}else{E.pM()
E.pM()
u.c.ad(y.q).f.ag8(Q.cxM(null,null,null,null,null,C.A,null,H.bu(A.a1("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,R.HA,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$SV,w)},
a0P(d){var x
switch(d.a){case 0:return X.XI
case 2:return F.XJ
case 1:return K.l4
case 3:x=this.c
x.toString
return A.E(x).ax.a===C.w?$.j_():$.v2()}return K.l4}}
var z=a.updateTypes(["S<~>()"])
B.b3k.prototype={
$1(d){return A.clv(d)},
$S:169}
B.c4H.prototype={
$1(d){var x=null
return new A.a6(U.HM,A.a1(d.m_(),x,x,x,x,x,x,x,W.Ds,x,x,x,x,x),x)},
$S:324}
B.c4I.prototype={
$0(){A0.fI(this.a,!1).f.tX(null)},
$S:0}
B.c4J.prototype={
$1(d){return this.aGH(d)},
aGH(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=E.cux(d.a)
if(s==null){x=1
break}t=s.z
A.h_().$1(t)
x=3
return A.c(u.a.vQ(J.au(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:342}
B.c4K.prototype={
$0(){},
$S:0}
B.c4L.prototype={
$0(){},
$S:0}
B.c4M.prototype={
$0(){},
$S:0}
B.c4N.prototype={
$0(){},
$S:0}
B.c4G.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.Ca},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.acb.prototype,"gaXo","SV",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bC,[B.b3k,B.c4H,B.c4J])
w(B.QR,A.dP)
w(B.Dj,A.G)
w(B.acb,A.L)
x(A.ck,[B.c4I,B.c4K,B.c4L,B.c4M,B.c4N,B.c4G])})()
A.bl(b.typeUniverse,JSON.parse('{"Dj":{"G":[],"d":[]},"acb":{"L":["Dj"]}}'))
var y=(function rtii(){var x=A.x
return{k:x("q<j0>"),p:x("q<d>"),j:x("B<@>"),P:x("aa<e,@>"),K:x("hi"),u:x("qf"),N:x("e"),q:x("EH"),y:x("w"),z:x("@"),C:x("hb?"),H:x("~")}})();(function constants(){D.C9=new B.QR(0,"valid")
D.a2v=new B.QR(1,"invalid")
D.Ca=new B.QR(2,"used")
D.a2x=new B.QR(3,"nothing")
D.b3X=new A.bX("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4k=new A.bX("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_263",e:"endPart",h:b})})($__dart_deferred_initializers__,"/XzGjd+1DrzEnAsr+EhcJ6C6mQw=");