((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_239",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,N,I,O,K,B={
b3b(d,e){var x=0,w=A.l(y.C),v,u,t,s,r
var $async$b3b=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:s=y.z
x=3
return A.c($.Lq().ej("scan_ticket",A.y(["scanned_id",d,"scanned_code",e],y.N,s),s),$async$b3b)
case 3:r=g
s=J.a3(r)
if(!J.m(s.i(r,"code"),200)){v=null
x=1
break}u=G.cy1(y.P.a(s.i(r,"ticket")))
if(s.a4(r,"order")&&s.i(r,"order")!=null)u.Q=G.cvf(s.i(r,"order"))
if(s.a4(r,"products")&&s.i(r,"products")!=null){t=J.cj(y.j.a(s.i(r,"products")),new B.b3c(),y.K)
u.z=A.J(t,!0,t.$ti.h("ac.E"))}if(s.a4(r,"spot")&&s.i(r,"spot")!=null)u.y=G.ciw(s.i(r,"spot"))
v=u
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$b3b,w)},
b3g(d,e){var x=0,w=A.l(y.y),v,u,t,s
var $async$b3g=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.z
t=J
s=J
x=3
return A.c($.Lq().ej("update_ticket_to_used",A.y(["ticket_id",d,"scan_code",e],y.N,u),u),$async$b3g)
case 3:v=t.m(s.u(g,"code"),200)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$b3g,w)},
b3c:function b3c(){},
cTS(d,e){return new B.Dh(e,d)},
QM:function QM(d,e){this.a=d
this.b=e},
Dh:function Dh(d,e){this.c=d
this.a=e},
ac5:function ac5(d,e,f){var _=this
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.c=_.a=null},
c4g:function c4g(){},
c4h:function c4h(d){this.a=d},
c4i:function c4i(d){this.a=d},
c4j:function c4j(){},
c4k:function c4k(){},
c4l:function c4l(){},
c4m:function c4m(){},
c4f:function c4f(d){this.a=d}},D,E,F,P,Q,R,S,G,T,U,V,W,X,Y,L,H,M,Z,A_
J=c[1]
A=c[0]
C=c[2]
N=c[225]
I=c[204]
O=c[98]
K=c[227]
B=a.updateHolder(c[21],B)
D=c[284]
E=c[35]
F=c[222]
P=c[61]
Q=c[286]
R=c[283]
S=c[287]
G=c[78]
T=c[76]
U=c[285]
V=c[226]
W=c[182]
X=c[205]
Y=c[221]
L=c[203]
H=c[190]
M=c[195]
Z=c[199]
A_=c[224]
B.QM.prototype={
J(){return"ScanState."+this.b}}
B.Dh.prototype={
N(){return new B.ac5(D.a2h,new W.ei(Y.b_,$.ag()),E.cuS(F.Hd,A.a([C.lN],y.k)))}}
B.ac5.prototype={
l(){this.x.l()
var x=this.r
x.W$=$.ag()
x.Z$=0
this.ai()},
aW(){var x=0,w=A.l(y.H),v=this,u
var $async$aW=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.cm()
if(v.a.c==null&&v.c.hT(y.u).f.f.length!==0){u=v.a
u.toString
u.c=v.c.hT(y.u).f.f[0].a.xL(0,"scanCode")}$.A6().afk("https://unpkg.com/@zxing/library@0.21.3")
A.ek(v.a.c)
v.Nj()
return A.j(null,w)}})
return A.k($async$aW,w)},
Nj(){var x=0,w=A.l(y.H),v=this,u,t
var $async$Nj=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.c(A.i2(A.cp(0,0,0,500,0),null,y.z),$async$Nj)
case 2:x=v.a.c==null?3:4
break
case 3:u=v.c
u.toString
x=5
return A.c(P.Ne(u,A.z("Enter Scan Code",null),null,A.z("Scan Code",null)),$async$Nj)
case 5:t=e
if(t!=null&&t.length!==0)v.a.c=t
case 4:return A.j(null,w)}})
return A.k($async$Nj,w)},
a8l(){var x,w,v,u,t,s,r=this,q=null
if(r.e==null)return A.cd(new A.a6(F.HD,H.bt(D.b43,q),q),q,q)
x=r.f
if(x===D.C4)w=Z.ku
else if(x===D.a2f)w=F.Ix
else{if(x!==D.C5)return C.a9
w=R.ph}x=y.p
v=A.a([],x)
u=r.e.z
if(u!=null&&u.length!==0){u.toString
t=A.X(u).h("R<1,a6>")
v.push(A.aA(A.J(new A.R(u,new B.c4g(),t),!0,t.h("ac.E")),C.a0,C.f,C.i,q,C.q))}v.push(L.by)
u=r.e.Q.a_V()
t=r.e
s=t.d
t=t.e
t.toString
v.push(A.a1(u+"   "+A.o(s)+"   "+t,q,q,q,q,q,q,q,F.a49,C.bc,q,q,q,q))
x=A.a([A.cd(A.aA(v,C.j,C.f,C.i,q,C.q),q,q),L.by,A.bR(w,C.t,q,30),X.al],x)
if(r.f===D.C4)x.push(A.dE(!1,H.bt(D.b3L,q),q,q,q,q,q,q,r.gaXl(),q,q))
return new A.a6(I.aY,A.aA(x,C.j,C.f,C.i,q,C.q),q)},
A(d){var x=this,w=null,v=x.e==null?O.bDl(d):x.a0O(x.f),u=A.cl(w,w,w,w,w,A.bR(A_.hw,C.cn,w,w),w,w,w,new B.c4h(d),w,w,w,w,w),t=y.p
return M.fc(w,v,A.jX(!0,new A.cs(C.ag,w,C.ad,C.C,A.a([A.aA(A.a([new A.a6(I.aY,A.aM(A.a([u,A.c4(A.a1("",w,w,w,w,w,w,w,A.aU(w,w,C.cn,w,w,w,w,w,w,w,w,20,w,w,C.a5,w,w,!0,w,w,w,w,w,w,w,w),C.bc,w,w,w,w),1,w)],t),C.j,C.f,C.i,w),w),x.a8l(),A.c4(E.cuR(x.x,N.Fd,new B.c4i(x)),1,w)],t),C.j,C.f,C.i,w,C.q)],t),w),!0,C.T,!0,!0),w,w,w,w,w)},
vQ(d){return this.aKY(d)},
aKY(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$vQ=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:if(d===u.w){x=1
break}u.w=d
t=u.a.c
t.toString
x=3
return A.c(B.b3b(d,t),$async$vQ)
case 3:t=u.e=f
s=t!=null
if(s){r=t.e
r=r==="sent"||r==="paid"}else r=!1
if(r){u.f=D.C4
E.pG()
u.B(new B.c4j())
x=1
break}else{if(s){r=t.e
r=r==="storno"||r==="ordered"}else r=!1
if(r){u.f=D.a2f
E.pG()
E.pG()
u.B(new B.c4k())
x=1
break}else if(s&&t.e==="used"){u.f=D.C5
E.pG()
E.pG()
u.B(new B.c4l())
x=1
break}}u.f=D.a2h
u.B(new B.c4m())
case 1:return A.j(v,w)}})
return A.k($async$vQ,w)},
SU(){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$SU=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:s=u.e
if(s==null){x=1
break}s=s.a
s.toString
t=u.a.c
t.toString
x=3
return A.c(B.b3g(s,t),$async$SU)
case 3:if(e){u.B(new B.c4f(u))
E.pG()}else{E.pG()
E.pG()
u.c.ad(y.q).f.aLh(T.cxh(null,null,null,null,null,C.C,null,H.bt(A.a1("Failed to confirm ticket",null,null,null,null,null,null,null,null,null,null,null,null,null),null),null,U.ai_,null,null,null,null,null,null,null,null,null))}case 1:return A.j(v,w)}})
return A.k($async$SU,w)},
a0O(d){var x
switch(d.a){case 0:return V.Xs
case 2:return F.Xt
case 1:return K.l3
case 3:x=this.c
x.toString
return A.E(x).ax.a===C.w?$.iW():$.uX()}return K.l3}}
var z=a.updateTypes(["S<~>()"])
B.b3c.prototype={
$1(d){return A.cl3(d)},
$S:162}
B.c4g.prototype={
$1(d){var x=null
return new A.a6(Q.HE,A.a1(d.m_(),x,x,x,x,x,x,x,S.Dl,x,x,x,x,x),x)},
$S:332}
B.c4h.prototype={
$0(){M.fI(this.a,!1).f.tX(null)},
$S:0}
B.c4i.prototype={
$1(d){return this.aGD(d)},
aGD(d){var x=0,w=A.l(y.H),v,u=this,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=E.cu2(d.a)
if(s==null){x=1
break}t=s.z
A.fY().$1(t)
x=3
return A.c(u.a.vQ(J.av(t)),$async$$1)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:344}
B.c4j.prototype={
$0(){},
$S:0}
B.c4k.prototype={
$0(){},
$S:0}
B.c4l.prototype={
$0(){},
$S:0}
B.c4m.prototype={
$0(){},
$S:0}
B.c4f.prototype={
$0(){var x=this.a
x.e.e="used"
x.f=D.C5},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.ac5.prototype,"gaXl","SU",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bG,[B.b3c,B.c4g,B.c4i])
w(B.QM,A.dP)
w(B.Dh,A.G)
w(B.ac5,A.L)
x(A.ck,[B.c4h,B.c4j,B.c4k,B.c4l,B.c4m,B.c4f])})()
A.bo(b.typeUniverse,JSON.parse('{"Dh":{"G":[],"d":[]},"ac5":{"L":["Dh"]}}'))
var y=(function rtii(){var x=A.x
return{k:x("q<iX>"),p:x("q<d>"),j:x("B<@>"),P:x("aa<e,@>"),K:x("jy"),u:x("qa"),N:x("e"),q:x("KW"),y:x("w"),z:x("@"),C:x("ix?"),H:x("~")}})();(function constants(){D.C4=new B.QM(0,"valid")
D.a2f=new B.QM(1,"invalid")
D.C5=new B.QM(2,"used")
D.a2h=new B.QM(3,"nothing")
D.b3L=new A.cf("Confirm Ticket",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b43=new A.cf("Point the camera at the attendee's code for an entry verification.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_239",e:"endPart",h:b})})($__dart_deferred_initializers__,"nW0tea1sjEdLFy2xT+T86Ynsxow=");