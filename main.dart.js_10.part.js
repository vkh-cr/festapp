((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cY3(d){var x=A.w(["id",d],y.w,y.b)
return new B.aqL("CheckRoute",new A.Ad(d,null),x,C.bP,null,"",null)},
aqL:function aqL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
rq:function rq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aeW:function aeW(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
cdf:function cdf(){},
cdg:function cdg(){},
cdh:function cdh(){},
cdi:function cdi(){},
cdm:function cdm(d,e){this.a=d
this.b=e},
cdj:function cdj(d,e){this.a=d
this.b=e},
cdk:function cdk(d,e){this.a=d
this.b=e},
cdl:function cdl(d,e){this.a=d
this.b=e},
cdn:function cdn(d){this.a=d},
d65(d,e,f,g,h){var x=null,w=A.jV(A.bL(x,x,x,x,x,x,A.aA(C.u2,h,x,x),x,x,x,new B.baE(e),x,x,x,x,x),!1,!1,!1,!1,d)
return A.b([w,A.jV(A.bL(x,x,x,x,x,x,A.aA(K.iD,g,x,x),x,x,x,new B.baF(f),x,x,x,x,x),!1,!1,!1,!1,!d)],y.p)},
baE:function baE(d){this.a=d},
baF:function baF(d){this.a=d},
boY(){var x=A.lD("companions",null)
if(x instanceof A.a1h)return x.e
return null},
bfJ(d,e,f){var x=0,w=A.l(y.v)
var $async$bfJ=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)switch(x){case 0:x=2
return A.d(B.RK(d,e,A.c3E(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null,null,null)),$async$bfJ)
case 2:return A.j(null,w)}})
return A.k($async$bfJ,w)},
bfK(d,e,f){var x=0,w=A.l(y.v)
var $async$bfK=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)switch(x){case 0:x=2
return A.d(A.Ec(d,e,A.c3E(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null,null,null)),$async$bfK)
case 2:return A.j(null,w)}})
return A.k($async$bfK,w)},
bfH(d){var x=0,w=A.l(y.v),v,u,t,s
var $async$bfH=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=$.d3t()
t=A.dg()
s=$.eo().a
s=(s==null?null:s.e).e
s.toString
v=y.b
x=2
return A.d(u.c4("create_companion_in_organization",A.w(["org",1,"oc",t,"usr",s,"c_name",d],y.w,v),v),$async$bfH)
case 2:return A.j(null,w)}})
return A.k($async$bfH,w)},
RK(d,e,f){var x=0,w=A.l(y.v),v,u,t,s,r,q,p,o,n,m,l
var $async$RK=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)$async$outer:switch(x){case 0:m=f==null
l=m?null:f.a
if(l==null){u=$.e0().gdU().c
l=(u==null?null:u.r).a}u=y.w
t=y.b
x=3
return A.d($.jj().c4("sign_user_to_event",A.w(["ev",e,"usr",l],u,t),t),$async$RK)
case 3:s=h
t=J.a1(s)
switch(t.h(s,"code")){case 200:if(m){m=$.eo().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
A.bh(d,A.n(A.o(r)+"You have been signed in.",null,null),C.a2)}else{r=f.e==="female"?"F":"M"
A.bh(d,A.n(r+"{user} has been signed in.",null,A.w(["user",f.fO()],u,u)),C.a2)}x=1
break $async$outer
case 100:A.bh(d,A.n("Cannot sign in!",null,null)+" "+A.n("Event is over.",null,null),C.aO)
x=1
break $async$outer
case 101:A.bh(d,A.n("Cannot sign in!",null,null)+" "+A.n("Event is full.",null,null),C.aO)
x=1
break $async$outer
case 102:if(m){m=$.eo().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.n(A.o(r)+"You are already signed in at an event of this type.",null,null)
A.bh(d,A.n("Cannot sign in!",null,null)+" "+q,C.aO)}else{r=f.e==="female"?"F":"M"
q=A.n(r+"{user} is already signed in at an event of this type.",null,A.w(["user",f.fO()],u,u))
A.bh(d,A.n("Cannot sign in!",null,null)+" "+q,C.aO)}x=1
break $async$outer
case 103:if(m){m=$.eo().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.n(A.o(r)+"You are already signed in.",null,null)
A.bh(d,A.n("Cannot sign in!",null,null)+" "+q,C.aO)}else{r=f.e==="female"?"F":"M"
q=A.n(r+"{user} is already signed in.",null,A.w(["user",f.fO()],u,u))
A.bh(d,A.n("Cannot sign in!",null,null)+" "+q,C.aO)}x=1
break $async$outer
case 107:if(m){m=$.eo().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.n(A.o(r)+"You are already signed in at another event at the same time.",null,null)
A.bh(d,A.n("Cannot sign in!",null,null)+" "+q,C.aO)}else{r=f.e==="female"?"F":"M"
A.bh(d,A.n(r+"{user} is already signed in at another event at the same time.",null,A.w(["user",f.fO()],u,u)),C.a2)}x=1
break $async$outer
case 104:p=A.n("It's too soon!",null,null)
if(t.h(s,"events_registration_start")!=null){o=A.l4(A.e6(t.h(s,"events_registration_start")),null)
m=y.r
t=d.ag(m).r.a
t===$&&A.a()
n=B.dtj(t.geV(0)).cn(o)
m=d.ag(m).r.a
m===$&&A.a()
p=A.n("You can sign in from {time}.",null,A.w(["time",n+" "+A.vL(m.geV(0)).cn(o)],u,u))}q=y.q.a(A.lD("workshops",null)).f
if(q!=null&&q.length!==0){A.bh(d,q,C.aO)
x=1
break $async$outer}A.bh(d,A.n("Cannot sign in!",null,null)+" "+p,C.aO)
x=1
break $async$outer
case 105:A.bh(d,A.n("Cannot sign in!",null,null)+" "+A.n("There is already the maximum of men.",null,null),C.aO)
x=1
break $async$outer
case 106:A.bh(d,A.n("Cannot sign in!",null,null)+" "+A.n("There is already the maximum of women.",null,null),C.aO)
x=1
break $async$outer
default:A.bh(d,A.n("Cannot sign in!",null,null),C.aO)
x=1
break $async$outer}case 1:return A.j(v,w)}})
return A.k($async$RK,w)},
dtj(d){var x=A.na(d,A.oN(),null)
x.toString
x=new A.j4(new A.m8(),x)
x.lH("MMMMEEEEd")
return x}},D,E,G,H,F,I,K,L,M,N
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[67],B)
D=c[191]
E=c[162]
G=c[137]
H=c[93]
F=c[260]
I=c[281]
K=c[171]
L=c[271]
M=c[187]
N=c[283]
B.aqL.prototype={}
B.rq.prototype={
K(){return new B.aeW(new A.bR(C.af,$.a9()))}}
B.aeW.prototype={
S(){this.ac()
this.e=this.a.f},
Nb(){var x=0,w=A.l(y.v),v=this,u
var $async$Nb=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.e
u===$&&A.a()
x=J.bn(u)<v.a.e&&v.d.a.a.length!==0?2:3
break
case 2:u=v.d
x=4
return A.d(B.bfH(u.a.a),$async$Nb)
case 4:u.i1(0,C.eb)
x=5
return A.d(A.rt(),$async$Nb)
case 5:v.e=e
if(v.c!=null)v.q(new B.cdf())
case 3:return A.j(null,w)}})
return A.k($async$Nb,w)},
CP(d){return this.b9Z(d)},
b9Z(d){var x=0,w=A.l(y.v),v,u=this,t
var $async$CP=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=u.c
t.toString
x=3
return A.d(G.i2(t,A.n("Delete companion",null,null),A.n("By deleting your companion you will also sign him/her out of all signed in sessions.",null,null),"Ok"),$async$CP)
case 3:if(!f){x=1
break}x=4
return A.d(H.au1(d),$async$CP)
case 4:t=u.a.r.$0()
x=5
return A.d(y.x.b(t)?t:A.c3(t,y.v),$async$CP)
case 5:x=6
return A.d(A.rt(),$async$CP)
case 6:u.e=f
if(u.c!=null)u.q(new B.cdg())
case 1:return A.j(v,w)}})
return A.k($async$CP,w)},
HY(d){return this.bAe(d)},
bAe(d){var x=0,w=A.l(y.v),v,u=this,t
var $async$HY=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=u.a.d.$0()
if(!(t==null?!1:t)){x=1
break}t=u.c
t.toString
x=3
return A.d(B.bfJ(t,u.a.c,d),$async$HY)
case 3:t=u.a.r.$0()
x=4
return A.d(y.x.b(t)?t:A.c3(t,y.v),$async$HY)
case 4:x=5
return A.d(A.rt(),$async$HY)
case 5:u.e=f
if(u.c!=null)u.q(new B.cdh())
case 1:return A.j(v,w)}})
return A.k($async$HY,w)},
HZ(d){return this.bAf(d)},
bAf(d){var x=0,w=A.l(y.v),v=this,u
var $async$HZ=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(B.bfK(u,v.a.c,d),$async$HZ)
case 2:u=v.a.r.$0()
x=3
return A.d(y.x.b(u)?u:A.c3(u,y.v),$async$HZ)
case 3:x=4
return A.d(A.rt(),$async$HZ)
case 4:v.e=f
if(v.c!=null)v.q(new B.cdi())
return A.j(null,w)}})
return A.k($async$HZ,w)},
B(d){var x,w,v,u,t,s=this,r=null,q=s.a.d.$0()
if(q==null)q=!1
x=E.bS(D.afC,r)
w=y.w
w=E.bS(D.bLw,A.w(["max_companions",J.aq(B.boY())],w,w))
v=s.e
v===$&&A.a()
v=J.bn(v)
u=s.a.e
t=y.u
u=A.d4(new A.cH(D.akw,A.aa(A.b([w,F.e7,A.jV(A.aa(A.b([A.eZ(r,C.aF,!1,r,!0,C.u,r,A.fa(),s.d,r,r,r,r,r,2,A.bM(r,r,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.n("Companion Name",r,r),!0,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r),C.o,!0,r,!0,r,!1,r,C.aC,r,r,A.b([new A.L7(30,r)],y.y),r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.aM,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.E,r,C.aN,r,r,r,r),F.e7,A.dj(!1,E.bS(D.bM0,r),r,r,r,r,r,r,s.gb8y(),r,r)],t),C.i,C.f,C.h,0,r,C.l),!1,!1,!1,!1,v<u),F.e7,new A.ap(380,150,A.iR(!0,!0,!0,r,C.u,r,C.o,new B.cdm(s,q),J.bn(s.e),r,r,r,C.cD,r,r,!1,C.G,!1),r)],t),C.i,C.f,C.I,0,r,C.l),r),r,C.o,r,r,r,C.G)
return A.f3(A.b([A.cn(!1,E.bS(N.JR,r),r,r,r,r,r,r,new B.cdn(d),r,r)],t),r,r,u,r,r,r,r,x,r,r)}}
var z=a.updateTypes(["V<~>()"])
B.cdf.prototype={
$0(){},
$S:0}
B.cdg.prototype={
$0(){},
$S:0}
B.cdh.prototype={
$0(){},
$S:0}
B.cdi.prototype={
$0(){},
$S:0}
B.cdm.prototype={
$2(d,e){var x,w,v=null,u=this.a,t=u.e
t===$&&A.a()
x=J.v(t,e)
t=A.b([],y.u)
if(x.ahI(u.a.c))t.push(I.Qc)
t.push(L.db)
t.push(A.aY(A.E(x.b,v,v,v,v,v,v,v,v,v,v,v,v,v),1,v))
if(!x.ahI(u.a.c)){w=this.b?new B.cdj(u,x):v
t.push(A.dj(!1,E.bS(D.bLo,v),v,v,v,v,v,v,w,v,v))}if(x.ahI(u.a.c))t.push(A.dj(!1,E.bS(D.afz,v),v,v,v,v,v,v,new B.cdk(u,x),v,v))
t.push(A.bL(v,v,v,v,v,v,M.jw,v,v,v,new B.cdl(u,x),v,v,v,v,v))
return new A.W(C.ao,A.ad(t,C.i,v,C.f,C.h,0,v),v)},
$S:131}
B.cdj.prototype={
$0(){return this.a.HY(this.b)},
$S:0}
B.cdk.prototype={
$0(){return this.a.HZ(this.b)},
$S:0}
B.cdl.prototype={
$0(){return this.a.CP(this.b)},
$S:0}
B.cdn.prototype={
$0(){return A.bk(this.a,!1).d9()},
$S:0}
B.baE.prototype={
$0(){var x=0,w=A.l(y.v),v=this
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.j(null,w)}})
return A.k($async$$0,w)},
$S:1}
B.baF.prototype={
$0(){var x=0,w=A.l(y.v),v=this
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.j(null,w)}})
return A.k($async$$0,w)},
$S:1};(function installTearOffs(){var x=a._instance_0u
x(B.aeW.prototype,"gb8y","Nb",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.aqL,A.jO)
x(B.rq,A.M)
x(B.aeW,A.N)
w(A.cX,[B.cdf,B.cdg,B.cdh,B.cdi,B.cdj,B.cdk,B.cdl,B.cdn,B.baE,B.baF])
x(B.cdm,A.eg)})()
A.cf(b.typeUniverse,JSON.parse('{"aqL":{"jO":["Ad"]},"rq":{"M":[],"e":[]},"aeW":{"N":["rq"]}}'))
var y={x:A.I("V<~>"),y:A.I("u<nK>"),p:A.I("u<Cv>"),u:A.I("u<e>"),w:A.I("f"),q:A.I("ae1"),r:A.I("kV"),b:A.I("@"),v:A.I("~")};(function constants(){D.akw=new A.ab(0,480,0,1/0)
D.PQ=new A.as(58615,"MaterialIcons",null,!1)
D.bLo=new A.cA("Sign in someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLw=new A.cA("If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.afz=new A.cA("Sign out someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bM0=new A.cA("Create Companion",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.afC=new A.cA("Companions",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["PUjifIGLA+A3ZVDNxXra6nRr0FI="]=a.current})($__dart_deferred_initializers__);