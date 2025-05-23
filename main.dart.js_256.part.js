((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_256",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,L,G,M,N,K,O,B={
bbO(d,e){return B.dco(d,e)},
dco(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$bbO=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.O9().dt("scan_ticket",A.z(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$bbO)
case 3:r=g
s=J.a1(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=H.cW0(y.P.a(s.h(r,"ticket")))
if(s.a5(r,"order")&&s.h(r,"order")!=null)u.Q=H.cTm(s.h(r,"order"))
if(s.a5(r,"products")&&s.h(r,"products")!=null){t=J.bA(y.j.a(s.h(r,"products")),new B.bbP(),y.K)
t=A.E(t,t.$ti.i("a6.E"))
u.z=t}if(s.a5(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cFF(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbO,w)},
bbT(d,e){return B.dct(d,e)},
dct(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$bbT=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.O9().dt("update_ticket_to_used",A.z(["ticket_id",d,"scan_code",e],y.N,u),u),$async$bbT)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bbT,w)},
bbP:function bbP(){},
dlg(d,e){return new B.Fb(e,d)},
TH:function TH(d,e){this.a=d
this.b=e},
Fb:function Fb(d,e){this.c=d
this.a=e},
agD:function agD(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
cok:function cok(){},
col:function col(d){this.a=d},
com:function com(d){this.a=d},
con:function con(){},
coo:function coo(){},
cop:function cop(){},
coq:function coq(){},
coj:function coj(d){this.a=d}},D,E,F,P,Q,R,S,T,U,H,V,W
J=c[1]
A=c[0]
C=c[2]
I=c[180]
L=c[176]
G=c[175]
M=c[100]
N=c[252]
K=c[198]
O=c[253]
B=a.updateHolder(c[22],B)
D=c[251]
E=c[37]
F=c[194]
P=c[64]
Q=c[177]
R=c[195]
S=c[249]
T=c[254]
U=c[102]
H=c[83]
V=c[197]
W=c[182]
B.TH.prototype={
I(){return"ScanState."+this.b}}
B.Fb.prototype={
M(){return new B.agD(D.abp,new A.cv(C.aw,$.a9()),E.cST(F.Me,A.a([C.nY],y.k)))}}
B.agD.prototype={
l(){this.x.l()
var x=this.r
x.a8$=$.a9()
x.Y$=0
this.al()},
aZ(){var x=0,w=A.l(y.H),v=this,u
var $async$aZ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.c8()
if(v.a.c==null&&v.c.hx(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hx(y.u).f.f[0].a.w9(0,"scanCode")}$.yv().ajk("https://unpkg.com/@zxing/library@0.21.3")
A.cZ(v.a.c)
v.OQ()
return A.j(null,w)}})
return A.k($async$aZ,w)},
OQ(){var x=0,w=A.l(y.H),v=this,u,t
var $async$OQ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hA(A.c2(0,0,0,500,0,0),null,y.z),$async$OQ)
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
abF(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bF(new A.a3(F.MB,G.bu(D.bJk,q),q),q,q)
x=r.f
if(x===D.GM)w=W.kA
else if(x===D.abn)w=R.Do
else{if(x!==D.GN)return C.a6
w=S.t8}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){t=A.W(u).i("N<1,a3>")
u=A.E(new A.N(u,new B.cok(),t),t.i("a6.E"))
v.push(A.aj(u,C.K,C.f,C.i,0,q,C.m))}v.push(C.am)
u=r.e.Q.a2w()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.R(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.adH,C.b0,q,q,q,q))
x=A.a([A.bF(A.aj(v,C.j,C.f,C.i,0,q,C.m),q,q),C.am,A.b1(w,C.o,q,30),C.a4],x)
if(r.f===D.GM)x.push(A.dv(!1,G.bu(D.bJ0,q),q,q,q,q,q,q,r.gb38(),q,q))
return new A.a3(I.aX,A.aj(x,C.j,C.f,C.i,0,q,C.m),q)},
B(d){var x=this,w=null,v=x.e==null?A.bOv(d):x.a3o(x.f),u=A.bW(w,w,w,w,w,w,A.b1(C.iZ,C.cQ,w,w),w,w,w,new B.col(d),w,w,w,w,w),t=y.p
return Q.f8(w,v,A.jv(!0,new A.ch(C.ad,w,C.ab,C.v,A.a([A.aj(A.a([new A.a3(I.aX,A.at(A.a([u,A.bk(A.R("",w,w,w,w,w,w,w,A.an(w,w,C.cQ,w,w,w,w,w,w,w,w,20,w,w,C.X,w,w,!0,w,w,w,w,w,w,w,w),C.b0,w,w,w,w),1,w)],t),C.j,C.f,C.i,0,w),w),x.abF(),A.bk(E.cSS(x.x,C.Bf,new B.com(x)),1,w)],t),C.j,C.f,C.i,0,w,C.m)],t),w),!0,C.Q,!0,!0),w,w,w,w,w)},
wg(d){return this.aR2(d)},
aR2(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$wg=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.bbO(d,t),$async$wg)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.GM
E.qD()
u.A(new B.con())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.abn
E.qD()
E.qD()
u.A(new B.coo())
x=1
break}else if(s&&t.e==="used"){u.f=D.GN
E.qD()
E.qD()
u.A(new B.cop())
x=1
break}}u.f=D.abp
u.A(new B.coq())
case 1:return A.j(v,w)}})
return A.k($async$wg,w)},
UL(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$UL=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.bbT(s,t),$async$UL)
case 3:if(e){u.A(new B.coj(u))
E.qD()}else{E.qD()
E.qD()
u.c.ag(y.q).f.ak8(M.cV8(null,null,null,null,null,C.v,null,G.bu(A.R("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,N.Mq,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$UL,w)},
a3o(d){var x
switch(d.a){case 0:return V.a5H
case 2:return F.a5I
case 1:return K.l3
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.t?$.ig():$.qj()}return K.l3}}
var z=a.updateTypes(["Y<~>()"])
B.bbP.prototype={
$1(d){return A.a6c(d)},
$S:111}
B.cok.prototype={
$1(d){var x=null
return new A.a3(O.Cy,A.R(d.ls(),x,x,x,x,x,x,x,T.I7,x,x,x,x,x),x)},
$S:269}
B.col.prototype={
$0(){L.fs(this.a,!1).f.ee(null)},
$S:0}
B.com.prototype={
$1(d){return this.aMz(d)},
aMz(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=U.Rx(d.a)
if(s==null){x=1
break}t=s.z
A.hK().$1(t)
x=3
return A.d(u.a.wg(J.aq(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:284}
B.con.prototype={
$0(){},
$S:0}
B.coo.prototype={
$0(){},
$S:0}
B.cop.prototype={
$0(){},
$S:0}
B.coq.prototype={
$0(){},
$S:0}
B.coj.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.GN},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.agD.prototype,"gb38","UL",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.c9,[B.bbP,B.cok,B.com])
w(B.TH,A.eQ)
w(B.Fb,A.J)
w(B.agD,A.O)
x(A.cK,[B.col,B.con,B.coo,B.cop,B.coq,B.coj])})()
A.c4(b.typeUniverse,JSON.parse('{"Fb":{"J":[],"e":[]},"agD":{"O":["Fb"]}}'))
var y=(function rtii(){var x=A.C
return{k:x("u<jG>"),p:x("u<e>"),j:x("B<@>"),P:x("A<m,@>"),K:x("eW"),u:x("rd"),N:x("m"),q:x("GQ"),y:x("x"),z:x("@"),C:x("hs?"),H:x("~")}})();(function constants(){D.GM=new B.TH(0,"valid")
D.abn=new B.TH(1,"invalid")
D.GN=new B.TH(2,"used")
D.abp=new B.TH(3,"nothing")
D.bJ0=new A.cn("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJk=new A.cn("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_256",e:"endPart",h:b})})($__dart_deferred_initializers__,"VTPGHjwfrrCmiWVM7hNLWjbv0mg=");