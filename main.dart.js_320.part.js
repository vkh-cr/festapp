((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_320",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,I,K,G,P,Q,R,S,T,L,U,V,B={
b98(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$b98=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.ND().dF("scan_ticket",A.A(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b98)
case 3:r=g
s=J.a2(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=H.cOo(y.P.a(s.h(r,"ticket")))
if(s.a0(r,"order")&&s.h(r,"order")!=null)u.Q=H.cLL(s.h(r,"order"))
if(s.a0(r,"products")&&s.h(r,"products")!=null){t=J.bY(y.j.a(s.h(r,"products")),new B.b99(),y.K)
u.z=A.G(t,!0,t.$ti.i("a8.E"))}if(s.a0(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cy3(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b98,w)},
b9d(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$b9d=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.ND().dF("update_ticket_to_used",A.A(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b9d)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b9d,w)},
b99:function b99(){},
daR(d,e){return new B.Et(e,d)},
T2:function T2(d,e){this.a=d
this.b=e},
Et:function Et(d,e){this.c=d
this.a=e},
afc:function afc(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
chb:function chb(){},
chc:function chc(d){this.a=d},
chd:function chd(d){this.a=d},
che:function che(){},
chf:function chf(){},
chg:function chg(){},
chh:function chh(){},
cha:function cha(d){this.a=d}},D,E,F,W,X,Y,H,Z,A_,A0,A1
J=c[1]
A=c[0]
C=c[2]
M=c[247]
N=c[214]
O=c[224]
I=c[227]
K=c[220]
G=c[210]
P=c[102]
Q=c[308]
R=c[217]
S=c[246]
T=c[108]
L=c[249]
U=c[309]
V=c[205]
B=a.updateHolder(c[22],B)
D=c[307]
E=c[37]
F=c[244]
W=c[69]
X=c[306]
Y=c[310]
H=c[86]
Z=c[243]
A_=c[248]
A0=c[229]
A1=c[98]
B.T2.prototype={
J(){return"ScanState."+this.b}}
B.Et.prototype={
M(){return new B.afc(D.a9Z,new V.cs(Z.ax,$.a9()),E.cLm(F.L5,A.a([C.nr],y.k)))}}
B.afc.prototype={
l(){this.x.l()
var x=this.r
x.P$=$.a9()
x.O$=0
this.ag()},
aV(){var x=0,w=A.k(y.H),v=this,u
var $async$aV=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.c6()
if(v.a.c==null&&v.c.hk(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hk(y.u).f.f[0].a.wb(0,"scanCode")}$.y3().aig("https://unpkg.com/@zxing/library@0.21.3")
A.dC(v.a.c)
v.Oq()
return A.i(null,w)}})
return A.j($async$aV,w)},
Oq(){var x=0,w=A.k(y.H),v=this,u,t
var $async$Oq=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(A.hA(A.ct(0,0,0,500,0),null,y.z),$async$Oq)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.d(W.Px(u,A.u("Enter Scan Code",null),null,A.u("Scan Code",null)),$async$Oq)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$Oq,w)},
aaL(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bS(new A.a5(F.Lt,G.bo(D.bFw,q),q),q,q)
x=r.f
if(x===D.FR)w=O.ka
else if(x===D.a9X)w=F.Mu
else{if(x!==D.FS)return C.aa
w=X.rI}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.W(u).i("P<1,a5>")
v.push(A.aj(A.G(new A.P(u,new B.chb(),t),!0,t.i("a8.E")),C.K,C.f,C.h,q,C.l))}v.push(I.ak)
u=r.e.Q.a1N()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.R(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.ac4,C.b2,q,q,q,q))
x=A.a([A.bS(A.aj(v,C.i,C.f,C.h,q,C.l),q,q),I.ak,A.bp(w,C.u,q,30),A0.a2],x)
if(r.f===D.FR)x.push(A.dx(!1,G.bo(D.bFc,q),q,q,q,q,q,q,r.gb11(),q,q))
return new A.a5(K.aW,A.aj(x,C.i,C.f,C.h,q,C.l),q)},
B(d){var x=this,w=null,v=x.e==null?T.bKL(d):x.a2H(x.f),u=A.c3(w,w,w,w,w,w,A.bp(S.iA,C.ci,w,w),w,w,w,new B.chc(d),w,w,w,w,w),t=y.p
return R.f_(w,v,A.js(!0,new A.cr(C.ag,w,C.ae,C.y,A.a([A.aj(A.a([new A.a5(K.aW,A.at(A.a([u,A.bD(A.R("",w,w,w,w,w,w,w,A.aA(w,w,C.ci,w,w,w,w,w,w,w,w,20,w,w,C.a5,w,w,!0,w,w,w,w,w,w,w,w),C.b2,w,w,w,w),1,w)],t),C.i,C.f,C.h,0,w),w),x.aaL(),A.bD(E.cLl(x.x,M.J6,new B.chd(x)),1,w)],t),C.i,C.f,C.h,w,C.l)],t),w),!0,C.U,!0,!0),w,w,w,w,w)},
wj(d){return this.aPq(d)},
aPq(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$wj=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.b98(d,t),$async$wj)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.FR
E.qp()
u.A(new B.che())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a9X
E.qp()
E.qp()
u.A(new B.chf())
x=1
break}else if(s&&t.e==="used"){u.f=D.FS
E.qp()
E.qp()
u.A(new B.chg())
x=1
break}}u.f=D.a9Z
u.A(new B.chh())
case 1:return A.i(v,w)}})
return A.j($async$wj,w)},
U9(){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$U9=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.b9d(s,t),$async$U9)
case 3:if(e){u.A(new B.cha(u))
E.qp()}else{E.qp()
E.qp()
u.c.ab(y.q).f.aj3(P.cNA(null,null,null,null,null,C.y,null,G.bo(A.R("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,Q.Lh,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$U9,w)},
a2H(d){var x
switch(d.a){case 0:return A_.a4l
case 2:return F.a4m
case 1:return L.mM
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.r?$.im():$.q7()}return L.mM}}
var z=a.updateTypes(["V<~>()"])
B.b99.prototype={
$1(d){return A.a52(d)},
$S:109}
B.chb.prototype={
$1(d){var x=null
return new A.a5(U.C2,A.R(d.lq(),x,x,x,x,x,x,x,Y.H8,x,x,x,x,x),x)},
$S:342}
B.chc.prototype={
$0(){N.fk(this.a,!1).f.em(null)},
$S:0}
B.chd.prototype={
$1(d){return this.aKS(d)},
aKS(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=A1.bnl(d.a)
if(s==null){x=1
break}t=s.z
A.ht().$1(t)
x=3
return A.d(u.a.wj(J.ao(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:370}
B.che.prototype={
$0(){},
$S:0}
B.chf.prototype={
$0(){},
$S:0}
B.chg.prototype={
$0(){},
$S:0}
B.chh.prototype={
$0(){},
$S:0}
B.cha.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.FS},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.afc.prototype,"gb11","U9",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bG,[B.b99,B.chb,B.chd])
w(B.T2,A.dW)
w(B.Et,A.I)
w(B.afc,A.M)
x(A.cf,[B.chc,B.che,B.chf,B.chg,B.chh,B.cha])})()
A.bj(b.typeUniverse,JSON.parse('{"Et":{"I":[],"e":[]},"afc":{"M":["Et"]}}'))
var y=(function rtii(){var x=A.y
return{k:x("r<jC>"),p:x("r<e>"),j:x("C<@>"),P:x("B<m,@>"),K:x("eP"),u:x("qZ"),N:x("m"),q:x("G8"),y:x("w"),z:x("@"),C:x("hj?"),H:x("~")}})();(function constants(){D.FR=new B.T2(0,"valid")
D.a9X=new B.T2(1,"invalid")
D.FS=new B.T2(2,"used")
D.a9Z=new B.T2(3,"nothing")
D.bFc=new A.cj("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bFw=new A.cj("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_320",e:"endPart",h:b})})($__dart_deferred_initializers__,"X1ilK/Nr7sLMZZqmmR/4ZIL8fm4=");