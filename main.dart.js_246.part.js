((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_246",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,I,G,M,N,K,O,B={
bbL(d,e){return B.ddg(d,e)},
ddg(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$bbL=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.O8().dm("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bbL)
case 3:r=g
s=J.a0(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=H.cWX(y.P.a(s.h(r,"ticket")))
if(s.a4(r,"order")&&s.h(r,"order")!=null)u.Q=H.cUl(s.h(r,"order"))
if(s.a4(r,"products")&&s.h(r,"products")!=null){t=J.bA(y.j.a(s.h(r,"products")),new B.bbM(),y.K)
t=A.D(t,t.$ti.i("a6.E"))
u.z=t}if(s.a4(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cGB(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbL,w)},
bbQ(d,e){return B.ddl(d,e)},
ddl(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$bbQ=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.O8().dm("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bbQ)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbQ,w)},
bbM:function bbM(){},
dmb(d,e){return new B.Fc(e,d)},
TM:function TM(d,e){this.a=d
this.b=e},
Fc:function Fc(d,e){this.c=d
this.a=e},
agG:function agG(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
coZ:function coZ(){},
cp_:function cp_(d){this.a=d},
cp0:function cp0(d){this.a=d},
cp1:function cp1(){},
cp2:function cp2(){},
cp3:function cp3(){},
cp4:function cp4(){},
coY:function coY(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W
J=c[1]
A=c[0]
C=c[2]
L=c[172]
I=c[176]
G=c[171]
M=c[100]
N=c[248]
K=c[194]
O=c[249]
B=a.updateHolder(c[22],B)
D=c[247]
E=c[36]
F=c[190]
P=c[62]
Q=c[191]
R=c[245]
S=c[250]
T=c[102]
H=c[81]
U=c[193]
V=c[178]
W=c[173]
B.TM.prototype={
I(){return"ScanState."+this.b}}
B.Fc.prototype={
M(){return new B.agG(D.abz,new A.cp(C.aw,$.a9()),E.cTS(F.Mk,A.a([C.o0],y.k)))}}
B.agG.prototype={
l(){this.x.l()
var x=this.r
x.a8$=$.a9()
x.Y$=0
this.ai()},
aZ(){var x=0,w=A.l(y.H),v=this,u
var $async$aZ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.c8()
if(v.a.c==null&&J.fV(v.c.hx(y.u).f.r)){u=v.a
u.toString
u.c=J.v(v.c.hx(y.u).f.r,0).a.we(0,"scanCode")}$.yw().ajr("https://unpkg.com/@zxing/library@0.21.3")
A.d_(v.a.c)
v.OU()
return A.j(null,w)}})
return A.k($async$aZ,w)},
OU(){var x=0,w=A.l(y.H),v=this,u,t
var $async$OU=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hr(A.c0(0,0,0,500,0,0),null,y.z),$async$OU)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.Q2(u,A.r("Enter Scan Code",null),null,A.r("Scan Code",null)),$async$OU)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$OU,w)},
abL(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bG(new A.a2(F.MH,G.bv(D.bJw,q),q),q,q)
x=r.f
if(x===D.GU)w=V.j2
else if(x===D.abx)w=Q.Dx
else{if(x!==D.GV)return C.a3
w=R.tc}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.W(u).i("P<1,a2>")
u=A.D(new A.P(u,new B.coZ(),t),t.i("a6.E"))
v.push(A.ah(u,C.J,C.f,C.i,0,q,C.m))}v.push(C.al)
u=r.e.Q.a2D()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.O(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.adS,C.b0,q,q,q,q))
x=A.a([A.bG(A.ah(v,C.j,C.f,C.i,0,q,C.m),q,q),C.al,A.aW(w,C.p,q,30),C.a1],x)
if(r.f===D.GU)x.push(A.dy(!1,G.bv(D.bJc,q),q,q,q,q,q,q,r.gb3j(),q,q))
return new A.a2(I.aT,A.ah(x,C.j,C.f,C.i,0,q,C.m),q)},
B(d){var x,w,v=this,u=null,t=v.e==null?A.bOz(d):v.a3v(v.f),s=A.bE(C.as)
s=A.bW(u,u,u,u,u,u,A.aW(C.j1,new A.br(s.a,s.b,s.c,0.8).bp(),u,u),u,u,u,new B.cp_(d),u,u,u,u,u)
x=A.bE(C.as)
w=y.p
return W.fa(u,t,A.jx(!0,new A.cj(C.ad,u,C.ab,C.v,A.a([A.ah(A.a([new A.a2(I.aT,A.at(A.a([s,A.bh(A.O("",u,u,u,u,u,u,u,A.al(u,u,new A.br(x.a,x.b,x.c,0.8).bp(),u,u,u,u,u,u,u,u,20,u,u,C.X,u,u,!0,u,u,u,u,u,u,u,u),C.b0,u,u,u,u),1,u)],w),C.j,C.f,C.i,0,u),u),v.abL(),A.bh(E.cTR(v.x,C.Bk,new B.cp0(v)),1,u)],w),C.j,C.f,C.i,0,u,C.m)],w),u),!0,C.Q,!0,!0),u,u,u,u,u)},
wm(d){return this.aR9(d)},
aR9(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$wm=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bbL(d,t),$async$wm)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.GU
E.qN()
u.A(new B.cp1())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.abx
E.qN()
E.qN()
u.A(new B.cp2())
x=1
break}else if(s&&t.e==="used"){u.f=D.GV
E.qN()
E.qN()
u.A(new B.cp3())
x=1
break}}u.f=D.abz
u.A(new B.cp4())
case 1:return A.j(v,w)}})
return A.k($async$wm,w)},
US(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$US=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bbQ(s,t),$async$US)
case 3:if(e){u.A(new B.coY(u))
E.qN()}else{E.qN()
E.qN()
u.c.af(y.q).f.akf(M.cW3(null,null,null,null,null,C.v,null,G.bv(A.O("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.Mw,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$US,w)},
a3v(d){var x
switch(d.a){case 0:return U.a5R
case 2:return F.a5S
case 1:return K.l6
case 3:x=this.c
x.toString
return A.C(x).ax.a===C.t?$.ih():$.p1()}return K.l6}}
var z=a.updateTypes(["X<~>()"])
B.bbM.prototype={
$1(d){return A.a6d(d)},
$S:112}
B.coZ.prototype={
$1(d){var x=null
return new A.a2(O.CF,A.O(d.ls(),x,x,x,x,x,x,x,S.If,x,x,x,x,x),x)},
$S:326}
B.cp_.prototype={
$0(){L.fd(this.a,!1).f.ee(null)},
$S:0}
B.cp0.prototype={
$1(d){return this.aMG(d)},
aMG(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=T.RB(d.a)
if(s==null){x=1
break}t=s.z
A.hN().$1(t)
x=3
return A.d(u.a.wm(J.aq(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:278}
B.cp1.prototype={
$0(){},
$S:0}
B.cp2.prototype={
$0(){},
$S:0}
B.cp3.prototype={
$0(){},
$S:0}
B.cp4.prototype={
$0(){},
$S:0}
B.coY.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.GV},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.agG.prototype,"gb3j","US",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.ce,[B.bbM,B.coZ,B.cp0])
w(B.TM,A.f0)
w(B.Fc,A.J)
w(B.agG,A.N)
x(A.cU,[B.cp_,B.cp1,B.cp2,B.cp3,B.cp4,B.coY])})()
A.c7(b.typeUniverse,JSON.parse('{"Fc":{"J":[],"e":[]},"agG":{"N":["Fc"]}}'))
var y=(function rtii(){var x=A.E
return{k:x("u<jH>"),p:x("u<e>"),j:x("B<@>"),P:x("A<m,@>"),K:x("eZ"),u:x("rm"),N:x("m"),q:x("GR"),y:x("x"),z:x("@"),C:x("hw?"),H:x("~")}})();(function constants(){D.GU=new B.TM(0,"valid")
D.abx=new B.TM(1,"invalid")
D.GV=new B.TM(2,"used")
D.abz=new B.TM(3,"nothing")
D.bJc=new A.cv("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJw=new A.cv("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_246",e:"endPart",h:b})})($__dart_deferred_initializers__,"fBIYD61ZeW8FdGvTkN3sAdVkeck=");