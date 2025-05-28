((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_262",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,I,G,M,N,K,O,B={
bbW(d,e){return B.dcX(d,e)},
dcX(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$bbW=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.Oa().dn("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bbW)
case 3:r=g
s=J.a1(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=H.cWA(y.P.a(s.h(r,"ticket")))
if(s.a4(r,"order")&&s.h(r,"order")!=null)u.Q=H.cTZ(s.h(r,"order"))
if(s.a4(r,"products")&&s.h(r,"products")!=null){t=J.bA(y.j.a(s.h(r,"products")),new B.bbX(),y.K)
t=A.E(t,t.$ti.i("a6.E"))
u.z=t}if(s.a4(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cGh(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbW,w)},
bc0(d,e){return B.dd1(d,e)},
dd1(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$bc0=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.Oa().dn("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bc0)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bc0,w)},
bbX:function bbX(){},
dlQ(d,e){return new B.Ff(e,d)},
TL:function TL(d,e){this.a=d
this.b=e},
Ff:function Ff(d,e){this.c=d
this.a=e},
agK:function agK(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
coT:function coT(){},
coU:function coU(d){this.a=d},
coV:function coV(d){this.a=d},
coW:function coW(){},
coX:function coX(){},
coY:function coY(){},
coZ:function coZ(){},
coS:function coS(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W
J=c[1]
A=c[0]
C=c[2]
L=c[177]
I=c[181]
G=c[176]
M=c[100]
N=c[254]
K=c[200]
O=c[255]
B=a.updateHolder(c[22],B)
D=c[253]
E=c[36]
F=c[196]
P=c[62]
Q=c[197]
R=c[251]
S=c[256]
T=c[102]
H=c[81]
U=c[199]
V=c[183]
W=c[178]
B.TL.prototype={
I(){return"ScanState."+this.b}}
B.Ff.prototype={
M(){return new B.agK(D.abx,new A.cs(C.aw,$.a9()),E.cTv(F.Mh,A.a([C.nZ],y.k)))}}
B.agK.prototype={
l(){this.x.l()
var x=this.r
x.a8$=$.a9()
x.Y$=0
this.ai()},
aZ(){var x=0,w=A.l(y.H),v=this,u
var $async$aZ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.c8()
if(v.a.c==null&&J.fU(v.c.hx(y.u).f.r)){u=v.a
u.toString
u.c=J.v(v.c.hx(y.u).f.r,0).a.wa(0,"scanCode")}$.yz().ajm("https://unpkg.com/@zxing/library@0.21.3")
A.cZ(v.a.c)
v.OQ()
return A.j(null,w)}})
return A.k($async$aZ,w)},
OQ(){var x=0,w=A.l(y.H),v=this,u,t
var $async$OQ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hB(A.c3(0,0,0,500,0,0),null,y.z),$async$OQ)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.Q3(u,A.r("Enter Scan Code",null),null,A.r("Scan Code",null)),$async$OQ)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$OQ,w)},
abI(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bG(new A.a3(F.ME,G.bw(D.bJu,q),q),q,q)
x=r.f
if(x===D.GP)w=V.kE
else if(x===D.abv)w=Q.Ds
else{if(x!==D.GQ)return C.a6
w=R.ta}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.W(u).i("M<1,a3>")
u=A.E(new A.M(u,new B.coT(),t),t.i("a6.E"))
v.push(A.ah(u,C.K,C.f,C.i,0,q,C.m))}v.push(C.al)
u=r.e.Q.a2y()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.P(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.adQ,C.b0,q,q,q,q))
x=A.a([A.bG(A.ah(v,C.j,C.f,C.i,0,q,C.m),q,q),C.al,A.aX(w,C.p,q,30),C.a2],x)
if(r.f===D.GP)x.push(A.dy(!1,G.bw(D.bJa,q),q,q,q,q,q,q,r.gb3f(),q,q))
return new A.a3(I.aT,A.ah(x,C.j,C.f,C.i,0,q,C.m),q)},
B(d){var x,w,v=this,u=null,t=v.e==null?A.bOK(d):v.a3q(v.f),s=A.bo(C.at)
s=A.bW(u,u,u,u,u,u,A.aX(C.j1,new A.bj(s.a,s.b,s.c,0.8).bj(),u,u),u,u,u,new B.coU(d),u,u,u,u,u)
x=A.bo(C.at)
w=y.p
return W.f9(u,t,A.jw(!0,new A.cj(C.ad,u,C.ab,C.v,A.a([A.ah(A.a([new A.a3(I.aT,A.at(A.a([s,A.bk(A.P("",u,u,u,u,u,u,u,A.al(u,u,new A.bj(x.a,x.b,x.c,0.8).bj(),u,u,u,u,u,u,u,u,20,u,u,C.X,u,u,!0,u,u,u,u,u,u,u,u),C.b0,u,u,u,u),1,u)],w),C.j,C.f,C.i,0,u),u),v.abI(),A.bk(E.cTu(v.x,C.Bh,new B.coV(v)),1,u)],w),C.j,C.f,C.i,0,u,C.m)],w),u),!0,C.Q,!0,!0),u,u,u,u,u)},
wh(d){return this.aR6(d)},
aR6(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$wh=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bbW(d,t),$async$wh)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.GP
E.qJ()
u.A(new B.coW())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.abv
E.qJ()
E.qJ()
u.A(new B.coX())
x=1
break}else if(s&&t.e==="used"){u.f=D.GQ
E.qJ()
E.qJ()
u.A(new B.coY())
x=1
break}}u.f=D.abx
u.A(new B.coZ())
case 1:return A.j(v,w)}})
return A.k($async$wh,w)},
UL(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$UL=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bc0(s,t),$async$UL)
case 3:if(e){u.A(new B.coS(u))
E.qJ()}else{E.qJ()
E.qJ()
u.c.af(y.q).f.akb(M.cVH(null,null,null,null,null,C.v,null,G.bw(A.P("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.Mt,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$UL,w)},
a3q(d){var x
switch(d.a){case 0:return U.a5P
case 2:return F.a5Q
case 1:return K.l6
case 3:x=this.c
x.toString
return A.C(x).ax.a===C.q?$.hO():$.qn()}return K.l6}}
var z=a.updateTypes(["X<~>()"])
B.bbX.prototype={
$1(d){return A.a6f(d)},
$S:110}
B.coT.prototype={
$1(d){var x=null
return new A.a3(O.CB,A.P(d.ls(),x,x,x,x,x,x,x,S.Ia,x,x,x,x,x),x)},
$S:430}
B.coU.prototype={
$0(){L.fc(this.a,!1).f.ee(null)},
$S:0}
B.coV.prototype={
$1(d){return this.aMC(d)},
aMC(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=T.RA(d.a)
if(s==null){x=1
break}t=s.z
A.hM().$1(t)
x=3
return A.d(u.a.wh(J.aq(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:368}
B.coW.prototype={
$0(){},
$S:0}
B.coX.prototype={
$0(){},
$S:0}
B.coY.prototype={
$0(){},
$S:0}
B.coZ.prototype={
$0(){},
$S:0}
B.coS.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.GQ},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.agK.prototype,"gb3f","UL",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.c9,[B.bbX,B.coT,B.coV])
w(B.TL,A.eS)
w(B.Ff,A.J)
w(B.agK,A.O)
x(A.cK,[B.coU,B.coW,B.coX,B.coY,B.coZ,B.coS])})()
A.c5(b.typeUniverse,JSON.parse('{"Ff":{"J":[],"e":[]},"agK":{"O":["Ff"]}}'))
var y=(function rtii(){var x=A.D
return{k:x("u<jG>"),p:x("u<e>"),j:x("B<@>"),P:x("A<m,@>"),K:x("eZ"),u:x("rh"),N:x("m"),q:x("GS"),y:x("x"),z:x("@"),C:x("hu?"),H:x("~")}})();(function constants(){D.GP=new B.TL(0,"valid")
D.abv=new B.TL(1,"invalid")
D.GQ=new B.TL(2,"used")
D.abx=new B.TL(3,"nothing")
D.bJa=new A.cr("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJu=new A.cr("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_262",e:"endPart",h:b})})($__dart_deferred_initializers__,"C3qWRtaL4kDhZqLSL5DC582xKD0=");