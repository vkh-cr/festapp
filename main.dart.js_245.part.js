((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_245",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,G,M,N,I,O,B={
bbR(d,e){return B.ddD(d,e)},
ddD(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$bbR=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.O8().dm("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bbR)
case 3:r=g
s=J.a0(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=H.cXi(y.P.a(s.h(r,"ticket")))
if(s.a4(r,"order")&&s.h(r,"order")!=null)u.Q=H.cUH(s.h(r,"order"))
if(s.a4(r,"products")&&s.h(r,"products")!=null){t=J.bD(y.j.a(s.h(r,"products")),new B.bbS(),y.K)
t=A.D(t,t.$ti.i("a6.E"))
u.z=t}if(s.a4(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cH_(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbR,w)},
bbW(d,e){return B.ddI(d,e)},
ddI(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$bbW=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.O8().dm("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bbW)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbW,w)},
bbS:function bbS(){},
dmx(d,e){return new B.Ff(e,d)},
TM:function TM(d,e){this.a=d
this.b=e},
Ff:function Ff(d,e){this.c=d
this.a=e},
agI:function agI(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cpn:function cpn(){},
cpo:function cpo(d){this.a=d},
cpp:function cpp(d){this.a=d},
cpq:function cpq(){},
cpr:function cpr(){},
cps:function cps(){},
cpt:function cpt(){},
cpm:function cpm(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W,K
J=c[1]
A=c[0]
C=c[2]
L=c[171]
G=c[170]
M=c[99]
N=c[248]
I=c[193]
O=c[249]
B=a.updateHolder(c[22],B)
D=c[247]
E=c[36]
F=c[189]
P=c[60]
Q=c[190]
R=c[245]
S=c[250]
T=c[101]
H=c[79]
U=c[192]
V=c[177]
W=c[172]
K=c[175]
B.TM.prototype={
I(){return"ScanState."+this.b}}
B.Ff.prototype={
M(){return new B.agI(D.abA,new A.cp(C.aw,$.a9()),E.cUd(F.Mk,A.a([C.o1],y.k)))}}
B.agI.prototype={
l(){this.x.l()
var x=this.r
x.a8$=$.a9()
x.Y$=0
this.ai()},
aZ(){var x=0,w=A.l(y.H),v=this,u
var $async$aZ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.c8()
if(v.a.c==null&&J.fV(v.c.hw(y.u).f.r)){u=v.a
u.toString
u.c=J.v(v.c.hw(y.u).f.r,0).a.we(0,"scanCode")}$.yy().ajv("https://unpkg.com/@zxing/library@0.21.3")
A.d_(v.a.c)
v.OY()
return A.j(null,w)}})
return A.k($async$aZ,w)},
OY(){var x=0,w=A.l(y.H),v=this,u,t
var $async$OY=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hr(A.c0(0,0,0,500,0,0),null,y.z),$async$OY)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.Q2(u,A.r("Enter Scan Code",null),null,A.r("Scan Code",null)),$async$OY)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$OY,w)},
abO(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bG(new A.a2(F.MI,G.bv(D.bJy,q),q),q,q)
x=r.f
if(x===D.GV)w=V.j2
else if(x===D.aby)w=Q.Dy
else{if(x!==D.GW)return C.a3
w=R.td}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.W(u).i("P<1,a2>")
u=A.D(new A.P(u,new B.cpn(),t),t.i("a6.E"))
v.push(A.af(u,C.J,C.f,C.i,0,q,C.m))}v.push(C.al)
u=r.e.Q.a2F()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.O(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.adT,C.b0,q,q,q,q))
x=A.a([A.bG(A.af(v,C.j,C.f,C.i,0,q,C.m),q,q),C.al,A.aW(w,C.p,q,30),C.a1],x)
if(r.f===D.GV)x.push(A.dz(!1,G.bv(D.bJe,q),q,q,q,q,q,q,r.gb3o(),q,q))
return new A.a2(K.aT,A.af(x,C.j,C.f,C.i,0,q,C.m),q)},
B(d){var x,w,v=this,u=null,t=v.e==null?A.bOF(d):v.a3x(v.f),s=A.bA(C.as)
s=A.bX(u,u,u,u,u,u,A.aW(C.j1,new A.bp(s.a,s.b,s.c,0.8).bo(),u,u),u,u,u,new B.cpo(d),u,u,u,u,u)
x=A.bA(C.as)
w=y.p
return W.fa(u,t,A.jy(!0,new A.cg(C.ac,u,C.ab,C.v,A.a([A.af(A.a([new A.a2(K.aT,A.at(A.a([s,A.bh(A.O("",u,u,u,u,u,u,u,A.ak(u,u,new A.bp(x.a,x.b,x.c,0.8).bo(),u,u,u,u,u,u,u,u,20,u,u,C.X,u,u,!0,u,u,u,u,u,u,u,u),C.b0,u,u,u,u),1,u)],w),C.j,C.f,C.i,0,u),u),v.abO(),A.bh(E.cUc(v.x,C.Bl,new B.cpp(v)),1,u)],w),C.j,C.f,C.i,0,u,C.m)],w),u),!0,C.Q,!0,!0),u,u,u,u,u)},
wm(d){return this.aRe(d)},
aRe(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$wm=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bbR(d,t),$async$wm)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.GV
E.qM()
u.A(new B.cpq())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.aby
E.qM()
E.qM()
u.A(new B.cpr())
x=1
break}else if(s&&t.e==="used"){u.f=D.GW
E.qM()
E.qM()
u.A(new B.cps())
x=1
break}}u.f=D.abA
u.A(new B.cpt())
case 1:return A.j(v,w)}})
return A.k($async$wm,w)},
UW(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$UW=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bbW(s,t),$async$UW)
case 3:if(e){u.A(new B.cpm(u))
E.qM()}else{E.qM()
E.qM()
u.c.af(y.q).f.aki(M.cWp(null,null,null,null,null,C.v,null,G.bv(A.O("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.Mw,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$UW,w)},
a3x(d){var x
switch(d.a){case 0:return U.a5S
case 2:return F.a5T
case 1:return I.l6
case 3:x=this.c
x.toString
return A.C(x).ax.a===C.r?$.hQ():$.p1()}return I.l6}}
var z=a.updateTypes(["X<~>()"])
B.bbS.prototype={
$1(d){return A.a6e(d)},
$S:117}
B.cpn.prototype={
$1(d){var x=null
return new A.a2(O.CG,A.O(d.lr(),x,x,x,x,x,x,x,S.Ig,x,x,x,x,x),x)},
$S:380}
B.cpo.prototype={
$0(){L.fd(this.a,!1).f.ef(null)},
$S:0}
B.cpp.prototype={
$1(d){return this.aML(d)},
aML(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=T.RB(d.a)
if(s==null){x=1
break}t=s.z
A.hO().$1(t)
x=3
return A.d(u.a.wm(J.ar(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:438}
B.cpq.prototype={
$0(){},
$S:0}
B.cpr.prototype={
$0(){},
$S:0}
B.cps.prototype={
$0(){},
$S:0}
B.cpt.prototype={
$0(){},
$S:0}
B.cpm.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.GW},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.agI.prototype,"gb3o","UW",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.ce,[B.bbS,B.cpn,B.cpp])
w(B.TM,A.f1)
w(B.Ff,A.J)
w(B.agI,A.N)
x(A.cU,[B.cpo,B.cpq,B.cpr,B.cps,B.cpt,B.cpm])})()
A.c7(b.typeUniverse,JSON.parse('{"Ff":{"J":[],"e":[]},"agI":{"N":["Ff"]}}'))
var y=(function rtii(){var x=A.E
return{k:x("u<jJ>"),p:x("u<e>"),j:x("B<@>"),P:x("A<m,@>"),K:x("f_"),u:x("rl"),N:x("m"),q:x("GT"),y:x("w"),z:x("@"),C:x("hw?"),H:x("~")}})();(function constants(){D.GV=new B.TM(0,"valid")
D.aby=new B.TM(1,"invalid")
D.GW=new B.TM(2,"used")
D.abA=new B.TM(3,"nothing")
D.bJe=new A.cw("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJy=new A.cw("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_245",e:"endPart",h:b})})($__dart_deferred_initializers__,"tsiSJm9TFH3666hwc9dhl2vgZZA=");