((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_245",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,L,G,M,N,K,O,B={
bb8(d,e){return B.daz(d,e)},
daz(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$bb8=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.NU().dq("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bb8)
case 3:r=g
s=J.a1(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=H.cUh(y.P.a(s.h(r,"ticket")))
if(s.a6(r,"order")&&s.h(r,"order")!=null)u.Q=H.cRH(s.h(r,"order"))
if(s.a6(r,"products")&&s.h(r,"products")!=null){t=J.bJ(y.j.a(s.h(r,"products")),new B.bb9(),y.K)
t=A.E(t,t.$ti.i("a6.E"))
u.z=t}if(s.a6(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cE7(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bb8,w)},
bbd(d,e){return B.daE(d,e)},
daE(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$bbd=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.NU().dq("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bbd)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbd,w)},
bb9:function bb9(){},
djr(d,e){return new B.EV(e,d)},
Tq:function Tq(d,e){this.a=d
this.b=e},
EV:function EV(d,e){this.c=d
this.a=e},
agb:function agb(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cmO:function cmO(){},
cmP:function cmP(d){this.a=d},
cmQ:function cmQ(d){this.a=d},
cmR:function cmR(){},
cmS:function cmS(){},
cmT:function cmT(){},
cmU:function cmU(){},
cmN:function cmN(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W
J=c[1]
A=c[0]
C=c[2]
I=c[179]
L=c[175]
G=c[174]
M=c[99]
N=c[245]
K=c[197]
O=c[246]
B=a.updateHolder(c[22],B)
D=c[244]
E=c[37]
F=c[193]
P=c[64]
Q=c[194]
R=c[243]
S=c[247]
T=c[101]
H=c[83]
U=c[196]
V=c[176]
W=c[181]
B.Tq.prototype={
I(){return"ScanState."+this.b}}
B.EV.prototype={
M(){return new B.agb(D.abh,new A.cB(C.ax,$.aa()),E.cRd(F.M6,A.a([C.nU],y.k)))}}
B.agb.prototype={
l(){this.x.l()
var x=this.r
x.a9$=$.aa()
x.Y$=0
this.al()},
b_(){var x=0,w=A.l(y.H),v=this,u
var $async$b_=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.c5()
if(v.a.c==null&&v.c.hs(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hs(y.u).f.f[0].a.w2(0,"scanCode")}$.yn().aiO("https://unpkg.com/@zxing/library@0.21.3")
A.dm(v.a.c)
v.Os()
return A.j(null,w)}})
return A.k($async$b_,w)},
Os(){var x=0,w=A.l(y.H),v=this,u,t
var $async$Os=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hT(A.cb(0,0,0,500,0,0),null,y.z),$async$Os)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.PP(u,A.r("Enter Scan Code",null),null,A.r("Scan Code",null)),$async$Os)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$Os,w)},
abb(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bG(new A.a3(F.Mt,G.bv(D.bJ3,q),q),q,q)
x=r.f
if(x===D.GG)w=W.ky
else if(x===D.abf)w=Q.Di
else{if(x!==D.GH)return C.a7
w=R.t4}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.V(u).i("N<1,a3>")
u=A.E(new A.N(u,new B.cmO(),t),t.i("a6.E"))
v.push(A.ah(u,C.K,C.f,C.i,0,q,C.m))}v.push(C.am)
u=r.e.Q.a21()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.R(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.adz,C.b0,q,q,q,q))
x=A.a([A.bG(A.ah(v,C.j,C.f,C.i,0,q,C.m),q,q),C.am,A.b1(w,C.o,q,30),C.a5],x)
if(r.f===D.GG)x.push(A.dx(!1,G.bv(D.bIK,q),q,q,q,q,q,q,r.gb2o(),q,q))
return new A.a3(I.aY,A.ah(x,C.j,C.f,C.i,0,q,C.m),q)},
B(d){var x=this,w=null,v=x.e==null?A.bNJ(d):x.a2U(x.f),u=A.bZ(w,w,w,w,w,w,A.b1(C.iY,C.cQ,w,w),w,w,w,new B.cmP(d),w,w,w,w,w),t=y.p
return V.f6(w,v,A.jw(!0,new A.cj(C.ad,w,C.ab,C.v,A.a([A.ah(A.a([new A.a3(I.aY,A.at(A.a([u,A.bk(A.R("",w,w,w,w,w,w,w,A.an(w,w,C.cQ,w,w,w,w,w,w,w,w,20,w,w,C.Y,w,w,!0,w,w,w,w,w,w,w,w),C.b0,w,w,w,w),1,w)],t),C.j,C.f,C.i,0,w),w),x.abb(),A.bk(E.cRc(x.x,C.B9,new B.cmQ(x)),1,w)],t),C.j,C.f,C.i,0,w,C.m)],t),w),!0,C.R,!0,!0),w,w,w,w,w)},
w9(d){return this.aQk(d)},
aQk(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$w9=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bb8(d,t),$async$w9)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.GG
E.qA()
u.A(new B.cmR())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.abf
E.qA()
E.qA()
u.A(new B.cmS())
x=1
break}else if(s&&t.e==="used"){u.f=D.GH
E.qA()
E.qA()
u.A(new B.cmT())
x=1
break}}u.f=D.abh
u.A(new B.cmU())
case 1:return A.j(v,w)}})
return A.k($async$w9,w)},
Ul(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$Ul=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bbd(s,t),$async$Ul)
case 3:if(e){u.A(new B.cmN(u))
E.qA()}else{E.qA()
E.qA()
u.c.ag(y.q).f.ajB(M.cTt(null,null,null,null,null,C.v,null,G.bv(A.R("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.Mi,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$Ul,w)},
a2U(d){var x
switch(d.a){case 0:return U.a5z
case 2:return F.a5A
case 1:return K.l1
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.q?$.ih():$.qh()}return K.l1}}
var z=a.updateTypes(["Y<~>()"])
B.bb9.prototype={
$1(d){return A.a5M(d)},
$S:119}
B.cmO.prototype={
$1(d){var x=null
return new A.a3(O.Cq,A.R(d.lk(),x,x,x,x,x,x,x,S.I_,x,x,x,x,x),x)},
$S:366}
B.cmP.prototype={
$0(){L.ft(this.a,!1).f.ec(null)},
$S:0}
B.cmQ.prototype={
$1(d){return this.aLS(d)},
aLS(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=T.Ri(d.a)
if(s==null){x=1
break}t=s.z
A.hN().$1(t)
x=3
return A.d(u.a.w9(J.ar(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:420}
B.cmR.prototype={
$0(){},
$S:0}
B.cmS.prototype={
$0(){},
$S:0}
B.cmT.prototype={
$0(){},
$S:0}
B.cmU.prototype={
$0(){},
$S:0}
B.cmN.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.GH},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.agb.prototype,"gb2o","Ul",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.c8,[B.bb9,B.cmO,B.cmQ])
w(B.Tq,A.fb)
w(B.EV,A.I)
w(B.agb,A.O)
x(A.cQ,[B.cmP,B.cmR,B.cmS,B.cmT,B.cmU,B.cmN])})()
A.c5(b.typeUniverse,JSON.parse('{"EV":{"I":[],"e":[]},"agb":{"O":["EV"]}}'))
var y=(function rtii(){var x=A.C
return{k:x("t<jI>"),p:x("t<e>"),j:x("B<@>"),P:x("A<m,@>"),K:x("eV"),u:x("rb"),N:x("m"),q:x("Gz"),y:x("x"),z:x("@"),C:x("hu?"),H:x("~")}})();(function constants(){D.GG=new B.Tq(0,"valid")
D.abf=new B.Tq(1,"invalid")
D.GH=new B.Tq(2,"used")
D.abh=new B.Tq(3,"nothing")
D.bIK=new A.cl("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJ3=new A.cl("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_245",e:"endPart",h:b})})($__dart_deferred_initializers__,"3nAM9bWLpnup1KrLovJO6tjpxgE=");