((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_275",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,I,P,Q,R,K,S,B={
b8_(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$b8_=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.Nf().dJ("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b8_)
case 3:r=g
s=J.a2(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=G.cMh(y.P.a(s.h(r,"ticket")))
if(s.a0(r,"order")&&s.h(r,"order")!=null)u.Q=G.cJG(s.h(r,"order"))
if(s.a0(r,"products")&&s.h(r,"products")!=null){t=J.c_(y.j.a(s.h(r,"products")),new B.b80(),y.K)
u.z=A.H(t,!0,t.$ti.i("a9.E"))}if(s.a0(r,"spot")&&s.h(r,"spot")!=null)u.y=G.cvW(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b8_,w)},
b84(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$b84=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.Nf().dJ("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b84)
case 3:v=t.p(s.x(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b84,w)},
b80:function b80(){},
d8B(d,e){return new B.Ee(e,d)},
SD:function SD(d,e){this.a=d
this.b=e},
Ee:function Ee(d,e){this.c=d
this.a=e},
aeF:function aeF(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cfv:function cfv(){},
cfw:function cfw(d){this.a=d},
cfx:function cfx(d){this.a=d},
cfy:function cfy(){},
cfz:function cfz(){},
cfA:function cfA(){},
cfB:function cfB(){},
cfu:function cfu(d){this.a=d}},D,E,F,T,U,V,W,G,X,Y,Z,A_,L,H,A0,A1
J=c[1]
A=c[0]
C=c[2]
M=c[206]
N=c[235]
O=c[213]
I=c[209]
P=c[95]
Q=c[295]
R=c[101]
K=c[238]
S=c[296]
B=a.updateHolder(c[22],B)
D=c[294]
E=c[36]
F=c[233]
T=c[65]
U=c[293]
V=c[297]
W=c[71]
G=c[80]
X=c[237]
Y=c[194]
Z=c[218]
A_=c[232]
L=c[216]
H=c[199]
A0=c[203]
A1=c[236]
B.SD.prototype={
J(){return"ScanState."+this.b}}
B.Ee.prototype={
M(){return new B.aeF(D.a9K,new Y.cs(A_.aw,$.ab()),E.cJh(F.KZ,A.a([C.nq],y.k)))}}
B.aeF.prototype={
l(){this.x.l()
var x=this.r
x.P$=$.ab()
x.O$=0
this.ag()},
aV(){var x=0,w=A.k(y.H),v=this,u
var $async$aV=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.c7()
if(v.a.c==null&&v.c.hi(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hi(y.u).f.f[0].a.vZ(0,"scanCode")}$.y_().ahI("https://unpkg.com/@zxing/library@0.21.3")
A.dw(v.a.c)
v.O1()
return A.i(null,w)}})
return A.j($async$aV,w)},
O1(){var x=0,w=A.k(y.H),v=this,u,t
var $async$O1=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hK(A.cw(0,0,0,500,0),null,y.z),$async$O1)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(T.P7(u,A.u("Enter Scan Code",null),null,A.u("Scan Code",null)),$async$O1)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$O1,w)},
aac(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bW(new A.a6(F.Lm,H.bn(D.bFo,q),q),q,q)
x=r.f
if(x===D.FJ)w=O.k8
else if(x===D.a9I)w=F.Mk
else{if(x!==D.FK)return C.ad
w=U.rA}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.Z(u).i("Q<1,a6>")
v.push(A.aj(A.H(new A.Q(u,new B.cfv(),t),!0,t.i("a9.E")),C.K,C.f,C.h,q,C.m))}v.push(L.an)
u=r.e.Q.a1j()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.U(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.abO,C.b1,q,q,q,q))
x=A.a([A.bW(A.aj(v,C.i,C.f,C.h,q,C.m),q,q),L.an,A.br(w,C.r,q,30),Z.a2],x)
if(r.f===D.FJ)x.push(A.dp(!1,H.bn(D.bF1,q),q,q,q,q,q,q,r.gb0d(),q,q))
return new A.a6(I.b_,A.aj(x,C.i,C.f,C.h,q,C.m),q)},
A(d){var x=this,w=null,v=x.e==null?R.bJu(d):x.a2d(x.f),u=A.c4(w,w,w,w,w,w,A.br(N.iw,C.cq,w,w),w,w,w,new B.cfw(d),w,w,w,w,w),t=y.p
return M.f4(w,v,A.jC(!0,new A.cr(C.ah,w,C.af,C.A,A.a([A.aj(A.a([new A.a6(I.b_,A.av(A.a([u,A.bD(A.U("",w,w,w,w,w,w,w,A.aE(w,w,C.cq,w,w,w,w,w,w,w,w,20,w,w,C.a6,w,w,!0,w,w,w,w,w,w,w,w),C.b1,w,w,w,w),1,w)],t),C.i,C.f,C.h,0,w),w),x.aac(),A.bD(E.cJg(x.x,A1.IY,new B.cfx(x)),1,w)],t),C.i,C.f,C.h,w,C.m)],t),w),!0,C.V,!0,!0),w,w,w,w,w)},
w6(d){return this.aOC(d)},
aOC(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$w6=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.b8_(d,t),$async$w6)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.FJ
E.qi()
u.B(new B.cfy())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a9I
E.qi()
E.qi()
u.B(new B.cfz())
x=1
break}else if(s&&t.e==="used"){u.f=D.FK
E.qi()
E.qi()
u.B(new B.cfA())
x=1
break}}u.f=D.a9K
u.B(new B.cfB())
case 1:return A.i(v,w)}})
return A.j($async$w6,w)},
TL(){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$TL=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.b84(s,t),$async$TL)
case 3:if(e){u.B(new B.cfu(u))
E.qi()}else{E.qi()
E.qi()
u.c.ab(y.q).f.aiu(P.cLt(null,null,null,null,null,C.A,null,H.bn(A.U("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,Q.La,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$TL,w)},
a2d(d){var x
switch(d.a){case 0:return X.a46
case 2:return F.a47
case 1:return K.mJ
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.t?$.ix():$.q0()}return K.mJ}}
var z=a.updateTypes(["T<~>()"])
B.b80.prototype={
$1(d){return A.a4A(d)},
$S:106}
B.cfv.prototype={
$1(d){var x=null
return new A.a6(S.BV,A.U(d.lk(),x,x,x,x,x,x,x,V.GZ,x,x,x,x,x),x)},
$S:357}
B.cfw.prototype={
$0(){A0.fh(this.a,!1).f.el(null)},
$S:0}
B.cfx.prototype={
$1(d){return this.aK1(d)},
aK1(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=W.cxJ(d.a)
if(s==null){x=1
break}t=s.z
A.ho().$1(t)
x=3
return A.d(u.a.w6(J.ao(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:286}
B.cfy.prototype={
$0(){},
$S:0}
B.cfz.prototype={
$0(){},
$S:0}
B.cfA.prototype={
$0(){},
$S:0}
B.cfB.prototype={
$0(){},
$S:0}
B.cfu.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.FK},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.aeF.prototype,"gb0d","TL",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bF,[B.b80,B.cfv,B.cfx])
w(B.SD,A.dY)
w(B.Ee,A.I)
w(B.aeF,A.M)
x(A.cp,[B.cfw,B.cfy,B.cfz,B.cfA,B.cfB,B.cfu])})()
A.bk(b.typeUniverse,JSON.parse('{"Ee":{"I":[],"e":[]},"aeF":{"M":["Ee"]}}'))
var y=(function rtii(){var x=A.A
return{k:x("r<jv>"),p:x("r<e>"),j:x("C<@>"),P:x("B<m,@>"),K:x("eN"),u:x("qT"),N:x("m"),q:x("FT"),y:x("w"),z:x("@"),C:x("he?"),H:x("~")}})();(function constants(){D.FJ=new B.SD(0,"valid")
D.a9I=new B.SD(1,"invalid")
D.FK=new B.SD(2,"used")
D.a9K=new B.SD(3,"nothing")
D.bF1=new A.ca("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bFo=new A.ca("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_275",e:"endPart",h:b})})($__dart_deferred_initializers__,"8Ne9gx5m6wgohEsywZBaZy6wWaQ=");