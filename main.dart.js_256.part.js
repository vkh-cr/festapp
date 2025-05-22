((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_256",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,L,G,M,N,K,O,B={
bbl(d,e){return B.dbb(d,e)},
dbb(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$bbl=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.NY().ds("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bbl)
case 3:r=g
s=J.a1(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=H.cUS(y.P.a(s.h(r,"ticket")))
if(s.a5(r,"order")&&s.h(r,"order")!=null)u.Q=H.cSh(s.h(r,"order"))
if(s.a5(r,"products")&&s.h(r,"products")!=null){t=J.bz(y.j.a(s.h(r,"products")),new B.bbm(),y.K)
t=A.E(t,t.$ti.i("a6.E"))
u.z=t}if(s.a5(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cED(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbl,w)},
bbq(d,e){return B.dbg(d,e)},
dbg(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$bbq=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.NY().ds("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bbq)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbq,w)},
bbm:function bbm(){},
dk1(d,e){return new B.EY(e,d)},
Ts:function Ts(d,e){this.a=d
this.b=e},
EY:function EY(d,e){this.c=d
this.a=e},
agf:function agf(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cnj:function cnj(){},
cnk:function cnk(d){this.a=d},
cnl:function cnl(d){this.a=d},
cnm:function cnm(){},
cnn:function cnn(){},
cno:function cno(){},
cnp:function cnp(){},
cni:function cni(d){this.a=d}},D,E,F,P,Q,R,S,T,H,U,V,W
J=c[1]
A=c[0]
C=c[2]
I=c[181]
L=c[177]
G=c[176]
M=c[101]
N=c[253]
K=c[199]
O=c[254]
B=a.updateHolder(c[22],B)
D=c[252]
E=c[37]
F=c[195]
P=c[64]
Q=c[196]
R=c[250]
S=c[255]
T=c[103]
H=c[84]
U=c[198]
V=c[178]
W=c[183]
B.Ts.prototype={
I(){return"ScanState."+this.b}}
B.EY.prototype={
M(){return new B.agf(D.abh,new A.cB(C.ax,$.ab()),E.cRO(F.M6,A.a([C.nU],y.k)))}}
B.agf.prototype={
l(){this.x.l()
var x=this.r
x.a9$=$.ab()
x.Y$=0
this.al()},
aZ(){var x=0,w=A.l(y.H),v=this,u
var $async$aZ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.c5()
if(v.a.c==null&&v.c.hs(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hs(y.u).f.f[0].a.w2(0,"scanCode")}$.yo().aiZ("https://unpkg.com/@zxing/library@0.21.3")
A.dc(v.a.c)
v.Oy()
return A.j(null,w)}})
return A.k($async$aZ,w)},
Oy(){var x=0,w=A.l(y.H),v=this,u,t
var $async$Oy=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hD(A.ca(0,0,0,500,0,0),null,y.z),$async$Oy)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(P.PR(u,A.r("Enter Scan Code",null),null,A.r("Scan Code",null)),$async$Oy)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$Oy,w)},
abi(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bH(new A.a3(F.Mt,G.bv(D.bJ5,q),q),q,q)
x=r.f
if(x===D.GI)w=W.ky
else if(x===D.abf)w=Q.Dk
else{if(x!==D.GJ)return C.a7
w=R.t6}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.V(u).i("N<1,a3>")
u=A.E(new A.N(u,new B.cnj(),t),t.i("a6.E"))
v.push(A.ai(u,C.K,C.f,C.i,0,q,C.m))}v.push(C.am)
u=r.e.Q.a28()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.R(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.adA,C.b0,q,q,q,q))
x=A.a([A.bH(A.ai(v,C.j,C.f,C.i,0,q,C.m),q,q),C.am,A.b1(w,C.o,q,30),C.a5],x)
if(r.f===D.GI)x.push(A.dw(!1,G.bv(D.bIM,q),q,q,q,q,q,q,r.gb2z(),q,q))
return new A.a3(I.aY,A.ai(x,C.j,C.f,C.i,0,q,C.m),q)},
B(d){var x=this,w=null,v=x.e==null?A.bNZ(d):x.a30(x.f),u=A.bZ(w,w,w,w,w,w,A.b1(C.iY,C.cQ,w,w),w,w,w,new B.cnk(d),w,w,w,w,w),t=y.p
return V.f8(w,v,A.jx(!0,new A.ci(C.ad,w,C.ab,C.v,A.a([A.ai(A.a([new A.a3(I.aY,A.at(A.a([u,A.bk(A.R("",w,w,w,w,w,w,w,A.an(w,w,C.cQ,w,w,w,w,w,w,w,w,20,w,w,C.Y,w,w,!0,w,w,w,w,w,w,w,w),C.b0,w,w,w,w),1,w)],t),C.j,C.f,C.i,0,w),w),x.abi(),A.bk(E.cRN(x.x,C.Ba,new B.cnl(x)),1,w)],t),C.j,C.f,C.i,0,w,C.m)],t),w),!0,C.R,!0,!0),w,w,w,w,w)},
w9(d){return this.aQy(d)},
aQy(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$w9=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bbl(d,t),$async$w9)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.GI
E.qA()
u.A(new B.cnm())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.abf
E.qA()
E.qA()
u.A(new B.cnn())
x=1
break}else if(s&&t.e==="used"){u.f=D.GJ
E.qA()
E.qA()
u.A(new B.cno())
x=1
break}}u.f=D.abh
u.A(new B.cnp())
case 1:return A.j(v,w)}})
return A.k($async$w9,w)},
Up(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$Up=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bbq(s,t),$async$Up)
case 3:if(e){u.A(new B.cni(u))
E.qA()}else{E.qA()
E.qA()
u.c.ag(y.q).f.ajM(M.cU3(null,null,null,null,null,C.v,null,G.bv(A.R("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.Mi,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$Up,w)},
a30(d){var x
switch(d.a){case 0:return U.a5z
case 2:return F.a5A
case 1:return K.l1
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.r?$.ih():$.qh()}return K.l1}}
var z=a.updateTypes(["Y<~>()"])
B.bbm.prototype={
$1(d){return A.a5Q(d)},
$S:110}
B.cnj.prototype={
$1(d){var x=null
return new A.a3(O.Ct,A.R(d.lk(),x,x,x,x,x,x,x,S.I1,x,x,x,x,x),x)},
$S:379}
B.cnk.prototype={
$0(){L.fu(this.a,!1).f.ec(null)},
$S:0}
B.cnl.prototype={
$1(d){return this.aM5(d)},
aM5(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=T.Rk(d.a)
if(s==null){x=1
break}t=s.z
A.hN().$1(t)
x=3
return A.d(u.a.w9(J.as(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:434}
B.cnm.prototype={
$0(){},
$S:0}
B.cnn.prototype={
$0(){},
$S:0}
B.cno.prototype={
$0(){},
$S:0}
B.cnp.prototype={
$0(){},
$S:0}
B.cni.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.GJ},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.agf.prototype,"gb2z","Up",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.c9,[B.bbm,B.cnj,B.cnl])
w(B.Ts,A.eX)
w(B.EY,A.J)
w(B.agf,A.O)
x(A.cM,[B.cnk,B.cnm,B.cnn,B.cno,B.cnp,B.cni])})()
A.c5(b.typeUniverse,JSON.parse('{"EY":{"J":[],"e":[]},"agf":{"O":["EY"]}}'))
var y=(function rtii(){var x=A.C
return{k:x("u<jH>"),p:x("u<e>"),j:x("B<@>"),P:x("A<m,@>"),K:x("eV"),u:x("ra"),N:x("m"),q:x("GB"),y:x("x"),z:x("@"),C:x("hv?"),H:x("~")}})();(function constants(){D.GI=new B.Ts(0,"valid")
D.abf=new B.Ts(1,"invalid")
D.GJ=new B.Ts(2,"used")
D.abh=new B.Ts(3,"nothing")
D.bIM=new A.cm("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJ5=new A.cm("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_256",e:"endPart",h:b})})($__dart_deferred_initializers__,"Vf0KquIE0qjoYNWLxNwAl9ewW3w=");