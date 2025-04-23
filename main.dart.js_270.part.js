((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_270",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,I,P,Q,R,K,S,B={
b6_(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$b6_=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.c($.Mp().dO("scan_ticket",A.x(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b6_)
case 3:r=g
s=J.a2(r)
if(!J.m(s.i(r,"code"),200)){v=null
x=1
break}u=G.cGS(y.P.a(s.i(r,"ticket")))
if(s.a7(r,"order")&&s.i(r,"order")!=null)u.Q=G.cEd(s.i(r,"order"))
if(s.a7(r,"products")&&s.i(r,"products")!=null){t=J.bZ(y.j.a(s.i(r,"products")),new B.b60(),y.K)
u.z=A.F(t,!0,t.$ti.h("a9.E"))}if(s.a7(r,"spot")&&s.i(r,"spot")!=null)u.y=G.cqU(s.i(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b6_,w)},
b64(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$b64=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.c($.Mp().dO("update_ticket_to_used",A.x(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b64)
case 3:v=t.m(s.v(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b64,w)},
b60:function b60(){},
d1N(d,e){return new B.Du(e,d)},
RN:function RN(d,e){this.a=d
this.b=e},
Du:function Du(d,e){this.c=d
this.a=e},
adx:function adx(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
caK:function caK(){},
caL:function caL(d){this.a=d},
caM:function caM(d){this.a=d},
caN:function caN(){},
caO:function caO(){},
caP:function caP(){},
caQ:function caQ(){},
caJ:function caJ(d){this.a=d}},D,E,F,T,U,V,W,G,X,Y,Z,A_,L,H,A0,A1
J=c[1]
A=c[0]
C=c[2]
M=c[201]
N=c[229]
O=c[208]
I=c[204]
P=c[94]
Q=c[288]
R=c[100]
K=c[232]
S=c[289]
B=a.updateHolder(c[22],B)
D=c[287]
E=c[36]
F=c[227]
T=c[64]
U=c[286]
V=c[290]
W=c[70]
G=c[79]
X=c[231]
Y=c[189]
Z=c[213]
A_=c[226]
L=c[211]
H=c[194]
A0=c[198]
A1=c[230]
B.RN.prototype={
J(){return"ScanState."+this.b}}
B.Du.prototype={
M(){return new B.adx(D.a2I,new Y.cn(A_.as,$.a8()),E.cDP(F.HL,A.a([C.m2],y.k)))}}
B.adx.prototype={
l(){this.x.l()
var x=this.r
x.P$=$.a8()
x.R$=0
this.ag()},
aS(){var x=0,w=A.k(y.H),v=this,u
var $async$aS=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.c8()
if(v.a.c==null&&v.c.ht(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.ht(y.u).f.f[0].a.xO(0,"scanCode")}$.Fx().ag4("https://unpkg.com/@zxing/library@0.21.3")
A.em(v.a.c)
v.Nq()
return A.i(null,w)}})
return A.j($async$aS,w)},
Nq(){var x=0,w=A.k(y.H),v=this,u,t
var $async$Nq=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(A.ia(A.co(0,0,0,500,0),null,y.z),$async$Nq)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.c(T.Of(u,A.p("Enter Scan Code",null),null,A.p("Scan Code",null)),$async$Nq)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$Nq,w)},
a8S(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bR(new A.a3(F.Ib,H.bg(D.b4z,q),q),q,q)
x=r.f
if(x===D.CA)w=O.je
else if(x===D.a2G)w=F.J6
else{if(x!==D.CB)return C.ab
w=U.pQ}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.X(u).h("O<1,a3>")
v.push(A.ak(A.F(new A.O(u,new B.caK(),t),!0,t.h("a9.E")),C.I,C.f,C.h,q,C.l))}v.push(L.ak)
u=r.e.Q.a0m()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.R(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.a4F,C.b1,q,q,q,q))
x=A.a([A.bR(A.ak(v,C.i,C.f,C.h,q,C.l),q,q),L.ak,A.bo(w,C.p,q,30),Z.a0],x)
if(r.f===D.CA)x.push(A.dk(!1,H.bg(D.b4c,q),q,q,q,q,q,q,r.gaYF(),q,q))
return new A.a3(I.aX,A.ak(x,C.i,C.f,C.h,q,C.l),q)},
B(d){var x=this,w=null,v=x.e==null?R.bFS(d):x.a1e(x.f),u=A.c1(w,w,w,w,w,w,A.bo(N.hP,C.cm,w,w),w,w,w,new B.caL(d),w,w,w,w,w),t=y.p
return M.eZ(w,v,A.jq(!0,new A.cr(C.af,w,C.ac,C.y,A.a([A.ak(A.a([new A.a3(I.aX,A.at(A.a([u,A.bB(A.R("",w,w,w,w,w,w,w,A.aB(w,w,C.cm,w,w,w,w,w,w,w,w,20,w,w,C.a3,w,w,!0,w,w,w,w,w,w,w,w),C.b1,w,w,w,w),1,w)],t),C.i,C.f,C.h,0,w),w),x.a8S(),A.bB(E.cDO(x.x,A1.FL,new B.caM(x)),1,w)],t),C.i,C.f,C.h,w,C.l)],t),w),!0,C.U,!0,!0),w,w,w,w,w)},
vR(d){return this.aMg(d)},
aMg(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$vR=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.c(B.b6_(d,t),$async$vR)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.CA
E.q2()
u.v(new B.caN())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a2G
E.q2()
E.q2()
u.v(new B.caO())
x=1
break}else if(s&&t.e==="used"){u.f=D.CB
E.q2()
E.q2()
u.v(new B.caP())
x=1
break}}u.f=D.a2I
u.v(new B.caQ())
case 1:return A.i(v,w)}})
return A.j($async$vR,w)},
Tb(){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$Tb=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.c(B.b64(s,t),$async$Tb)
case 3:if(e){u.v(new B.caJ(u))
E.q2()}else{E.q2()
E.q2()
u.c.ac(y.q).f.agQ(P.cG3(null,null,null,null,null,C.y,null,H.bg(A.R("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,Q.I0,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$Tb,w)},
a1e(d){var x
switch(d.a){case 0:return X.Y7
case 2:return F.Y8
case 1:return K.ln
case 3:x=this.c
x.toString
return A.B(x).ax.a===C.r?$.iE():$.pN()}return K.ln}}
var z=a.updateTypes(["T<~>()"])
B.b60.prototype={
$1(d){return A.axj(d)},
$S:125}
B.caK.prototype={
$1(d){var x=null
return new A.a3(S.zJ,A.R(d.lb(),x,x,x,x,x,x,x,V.DM,x,x,x,x,x),x)},
$S:342}
B.caL.prototype={
$0(){A0.f1(this.a,!1).f.ef(null)},
$S:0}
B.caM.prototype={
$1(d){return this.aHP(d)},
aHP(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=W.csF(d.a)
if(s==null){x=1
break}t=s.z
A.hh().$1(t)
x=3
return A.c(u.a.vR(J.an(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:357}
B.caN.prototype={
$0(){},
$S:0}
B.caO.prototype={
$0(){},
$S:0}
B.caP.prototype={
$0(){},
$S:0}
B.caQ.prototype={
$0(){},
$S:0}
B.caJ.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.CB},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.adx.prototype,"gaYF","Tb",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bH,[B.b60,B.caK,B.caM])
w(B.RN,A.e7)
w(B.Du,A.G)
w(B.adx,A.K)
x(A.cm,[B.caL,B.caN,B.caO,B.caP,B.caQ,B.caJ])})()
A.br(b.typeUniverse,JSON.parse('{"Du":{"G":[],"d":[]},"adx":{"K":["Du"]}}'))
var y=(function rtii(){var x=A.z
return{k:x("r<ji>"),p:x("r<d>"),j:x("A<@>"),P:x("ae<e,@>"),K:x("fu"),u:x("qw"),N:x("e"),q:x("F7"),y:x("y"),z:x("@"),C:x("hp?"),H:x("~")}})();(function constants(){D.CA=new B.RN(0,"valid")
D.a2G=new B.RN(1,"invalid")
D.CB=new B.RN(2,"used")
D.a2I=new B.RN(3,"nothing")
D.b4c=new A.c4("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4z=new A.c4("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_270",e:"endPart",h:b})})($__dart_deferred_initializers__,"EbF90g4zwCPoQsedszCPC5gLvUo=");