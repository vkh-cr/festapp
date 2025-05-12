((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_319",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,I,K,G,P,Q,R,S,T,L,U,B={
b99(d,e){var x=0,w=A.k(y.C),v,u,t,s,r
var $async$b99=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.d($.NH().dF("scan_ticket",A.A(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b99)
case 3:r=g
s=J.a2(r)
if(!J.p(s.h(r,"code"),200)){v=null
x=1
break}u=H.cOB(y.P.a(s.h(r,"ticket")))
if(s.a0(r,"order")&&s.h(r,"order")!=null)u.Q=H.cLY(s.h(r,"order"))
if(s.a0(r,"products")&&s.h(r,"products")!=null){t=J.bY(y.j.a(s.h(r,"products")),new B.b9a(),y.K)
u.z=A.G(t,!0,t.$ti.i("a8.E"))}if(s.a0(r,"spot")&&s.h(r,"spot")!=null)u.y=H.cyh(s.h(r,"spot"))
v=u
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b99,w)},
b9e(d,e){var x=0,w=A.k(y.y),v,u,t,s
var $async$b9e=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.d($.NH().dF("update_ticket_to_used",A.A(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b9e)
case 3:v=t.p(s.v(g,"code"),200)
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b9e,w)},
b9a:function b9a(){},
db3(d,e){return new B.Ey(e,d)},
T4:function T4(d,e){this.a=d
this.b=e},
Ey:function Ey(d,e){this.c=d
this.a=e},
afc:function afc(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
chi:function chi(){},
chj:function chj(d){this.a=d},
chk:function chk(d){this.a=d},
chl:function chl(){},
chm:function chm(){},
chn:function chn(){},
cho:function cho(){},
chh:function chh(d){this.a=d}},D,V,E,F,W,X,Y,H,Z,A_,A0,A1
J=c[1]
A=c[0]
C=c[2]
M=c[246]
N=c[213]
O=c[223]
I=c[226]
K=c[219]
G=c[209]
P=c[101]
Q=c[307]
R=c[216]
S=c[245]
T=c[107]
L=c[248]
U=c[308]
B=a.updateHolder(c[22],B)
D=c[306]
V=c[204]
E=c[37]
F=c[243]
W=c[68]
X=c[305]
Y=c[309]
H=c[85]
Z=c[242]
A_=c[247]
A0=c[228]
A1=c[97]
B.T4.prototype={
J(){return"ScanState."+this.b}}
B.Ey.prototype={
M(){return new B.afc(D.aa_,new V.cs(Z.ax,$.a9()),E.cLz(F.L4,A.a([C.ns],y.k)))}}
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
u.c=v.c.hk(y.u).f.f[0].a.wc(0,"scanCode")}$.y5().aih("https://unpkg.com/@zxing/library@0.21.3")
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
return A.d(W.Pz(u,A.t("Enter Scan Code",null),null,A.t("Scan Code",null)),$async$Oq)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.i(null,w)}})
return A.j($async$Oq,w)},
aaM(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.bQ(new A.a5(F.Ls,G.bp(D.bFy,q),q),q,q)
x=r.f
if(x===D.FQ)w=O.kb
else if(x===D.a9Y)w=F.Mu
else{if(x!==D.FR)return C.aa
w=X.rH}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.W(u).i("P<1,a5>")
v.push(A.aj(A.G(new A.P(u,new B.chi(),t),!0,t.i("a8.E")),C.K,C.f,C.h,q,C.l))}v.push(I.ak)
u=r.e.Q.a1O()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.R(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.ac6,C.b2,q,q,q,q))
x=A.a([A.bQ(A.aj(v,C.i,C.f,C.h,q,C.l),q,q),I.ak,A.bn(w,C.t,q,30),A0.a2],x)
if(r.f===D.FQ)x.push(A.dw(!1,G.bp(D.bFe,q),q,q,q,q,q,q,r.gb13(),q,q))
return new A.a5(K.aW,A.aj(x,C.i,C.f,C.h,q,C.l),q)},
B(d){var x=this,w=null,v=x.e==null?T.bKM(d):x.a2I(x.f),u=A.c3(w,w,w,w,w,w,A.bn(S.iA,C.cj,w,w),w,w,w,new B.chj(d),w,w,w,w,w),t=y.p
return R.f_(w,v,A.js(!0,new A.cr(C.ag,w,C.ae,C.y,A.a([A.aj(A.a([new A.a5(K.aW,A.at(A.a([u,A.bD(A.R("",w,w,w,w,w,w,w,A.aA(w,w,C.cj,w,w,w,w,w,w,w,w,20,w,w,C.a5,w,w,!0,w,w,w,w,w,w,w,w),C.b2,w,w,w,w),1,w)],t),C.i,C.f,C.h,0,w),w),x.aaM(),A.bD(E.cLy(x.x,M.J5,new B.chk(x)),1,w)],t),C.i,C.f,C.h,w,C.l)],t),w),!0,C.U,!0,!0),w,w,w,w,w)},
wk(d){return this.aPs(d)},
aPs(d){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$wk=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.d(B.b99(d,t),$async$wk)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.FQ
E.qq()
u.A(new B.chl())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a9Y
E.qq()
E.qq()
u.A(new B.chm())
x=1
break}else if(s&&t.e==="used"){u.f=D.FR
E.qq()
E.qq()
u.A(new B.chn())
x=1
break}}u.f=D.aa_
u.A(new B.cho())
case 1:return A.i(v,w)}})
return A.j($async$wk,w)},
U9(){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$U9=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.d(B.b9e(s,t),$async$U9)
case 3:if(e){u.A(new B.chh(u))
E.qq()}else{E.qq()
E.qq()
u.c.ab(y.q).f.aj4(P.cNN(null,null,null,null,null,C.y,null,G.bp(A.R("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,Q.Lg,null,null,null,null,null,null,null,null,null))}case 1:return A.i(v,w)}})
return A.j($async$U9,w)},
a2I(d){var x
switch(d.a){case 0:return A_.a4m
case 2:return F.a4n
case 1:return L.mO
case 3:x=this.c
x.toString
return A.D(x).ax.a===C.p?$.i1():$.q8()}return L.mO}}
var z=a.updateTypes(["V<~>()"])
B.b9a.prototype={
$1(d){return A.a52(d)},
$S:109}
B.chi.prototype={
$1(d){var x=null
return new A.a5(U.C0,A.R(d.lq(),x,x,x,x,x,x,x,Y.H7,x,x,x,x,x),x)},
$S:343}
B.chj.prototype={
$0(){N.fl(this.a,!1).f.em(null)},
$S:0}
B.chk.prototype={
$1(d){return this.aKT(d)},
aKT(d){var x=0,w=A.k(y.H),v,u=this,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=A1.bnm(d.a)
if(s==null){x=1
break}t=s.z
A.ht().$1(t)
x=3
return A.d(u.a.wk(J.ao(t)),$async$$1)
case 3:case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:370}
B.chl.prototype={
$0(){},
$S:0}
B.chm.prototype={
$0(){},
$S:0}
B.chn.prototype={
$0(){},
$S:0}
B.cho.prototype={
$0(){},
$S:0}
B.chh.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.FR},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.afc.prototype,"gb13","U9",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bG,[B.b9a,B.chi,B.chk])
w(B.T4,A.dW)
w(B.Ey,A.I)
w(B.afc,A.M)
x(A.ch,[B.chj,B.chl,B.chm,B.chn,B.cho,B.chh])})()
A.bl(b.typeUniverse,JSON.parse('{"Ey":{"I":[],"e":[]},"afc":{"M":["Ey"]}}'))
var y=(function rtii(){var x=A.y
return{k:x("r<jC>"),p:x("r<e>"),j:x("C<@>"),P:x("B<m,@>"),K:x("eQ"),u:x("r_"),N:x("m"),q:x("Ge"),y:x("w"),z:x("@"),C:x("hj?"),H:x("~")}})();(function constants(){D.FQ=new B.T4(0,"valid")
D.a9Y=new B.T4(1,"invalid")
D.FR=new B.T4(2,"used")
D.aa_=new B.T4(3,"nothing")
D.bFe=new A.cj("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bFy=new A.cj("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_319",e:"endPart",h:b})})($__dart_deferred_initializers__,"Wvpu8xd1lKt4fHtQbaz4G6GjpSM=");