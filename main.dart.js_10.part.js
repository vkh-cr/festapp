((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_10",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cUS(d){var x=A.w(["id",d],y.w,y.b)
return new B.apS("CheckRoute",new A.zU(d,null),x,C.bP,null,"",null)},
apS:function apS(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ri:function ri(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aen:function aen(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
cb6:function cb6(){},
cb7:function cb7(){},
cb8:function cb8(){},
cb9:function cb9(){},
cbd:function cbd(d,e){this.a=d
this.b=e},
cba:function cba(d,e){this.a=d
this.b=e},
cbb:function cbb(d,e){this.a=d
this.b=e},
cbc:function cbc(d,e){this.a=d
this.b=e},
cbe:function cbe(d){this.a=d},
d2T(d,e,f,g,h){var x=null,w=A.jQ(A.bJ(x,x,x,x,x,x,A.aB(C.tA,h,x,x),x,x,x,new B.b91(e),x,x,x,x,x),d)
return A.a([w,A.jQ(A.bJ(x,x,x,x,x,x,A.aB(K.iv,g,x,x),x,x,x,new B.b92(f),x,x,x,x,x),!d)],y.p)},
b91:function b91(d){this.a=d},
b92:function b92(d){this.a=d},
bnf(){var x=A.lv("companions",null)
if(x instanceof A.a0N)return x.e
return null},
bee(d,e,f){return B.dqA(d,e,f)},
dqA(d,e,f){var x=0,w=A.k(y.v)
var $async$bee=A.f(function(g,h){if(g===1)return A.h(h,w)
while(true)switch(x){case 0:x=2
return A.d(B.Rh(d,e,A.c1u(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null,null)),$async$bee)
case 2:return A.i(null,w)}})
return A.j($async$bee,w)},
bef(d,e,f){return B.dqB(d,e,f)},
dqB(d,e,f){var x=0,w=A.k(y.v)
var $async$bef=A.f(function(g,h){if(g===1)return A.h(h,w)
while(true)switch(x){case 0:x=2
return A.d(A.DP(d,e,A.c1u(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null,null)),$async$bef)
case 2:return A.i(null,w)}})
return A.j($async$bef,w)},
bec(d){return B.dqy(d)},
dqy(d){var x=0,w=A.k(y.v),v,u,t,s
var $async$bec=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:u=$.d0n()
t=A.df()
s=$.eA().a
s=(s==null?null:s.e).e
s.toString
v=y.b
x=2
return A.d(u.c8("create_companion_in_organization",A.w(["org",1,"oc",t,"usr",s,"c_name",d],y.w,v),v),$async$bec)
case 2:return A.i(null,w)}})
return A.j($async$bec,w)},
Rh(d,e,f){return B.dr7(d,e,f)},
dr7(d,e,f){var x=0,w=A.k(y.v),v,u,t,s,r,q,p,o,n,m,l
var $async$Rh=A.f(function(g,h){if(g===1)return A.h(h,w)
while(true)$async$outer:switch(x){case 0:m=f==null
l=m?null:f.a
if(l==null){u=$.e2().gdO().c
l=(u==null?null:u.r).a}u=y.w
t=y.b
x=3
return A.d($.jd().c8("sign_user_to_event",A.w(["ev",e,"usr",l],u,t),t),$async$Rh)
case 3:s=h
t=J.a_(s)
switch(t.h(s,"code")){case 200:if(m){m=$.eA().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
A.bh(d,A.n(A.o(r)+"You have been signed in.",null),C.a3)}else{r=f.e==="female"?"F":"M"
A.bh(d,A.n(r+"{user} has been signed in.",A.w(["user",f.ij()],u,u)),C.a3)}x=1
break $async$outer
case 100:A.bh(d,A.n("Cannot sign in!",null)+" "+A.n("Event is over.",null),C.aO)
x=1
break $async$outer
case 101:A.bh(d,A.n("Cannot sign in!",null)+" "+A.n("Event is full.",null),C.aO)
x=1
break $async$outer
case 102:if(m){m=$.eA().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.n(A.o(r)+"You are already signed in at an event of this type.",null)
A.bh(d,A.n("Cannot sign in!",null)+" "+q,C.aO)}else{r=f.e==="female"?"F":"M"
q=A.n(r+"{user} is already signed in at an event of this type.",A.w(["user",f.ij()],u,u))
A.bh(d,A.n("Cannot sign in!",null)+" "+q,C.aO)}x=1
break $async$outer
case 103:if(m){m=$.eA().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.n(A.o(r)+"You are already signed in.",null)
A.bh(d,A.n("Cannot sign in!",null)+" "+q,C.aO)}else{r=f.e==="female"?"F":"M"
q=A.n(r+"{user} is already signed in.",A.w(["user",f.ij()],u,u))
A.bh(d,A.n("Cannot sign in!",null)+" "+q,C.aO)}x=1
break $async$outer
case 107:if(m){m=$.eA().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.n(A.o(r)+"You are already signed in at another event at the same time.",null)
A.bh(d,A.n("Cannot sign in!",null)+" "+q,C.aO)}else{r=f.e==="female"?"F":"M"
A.bh(d,A.n(r+"{user} is already signed in at another event at the same time.",A.w(["user",f.ij()],u,u)),C.a3)}x=1
break $async$outer
case 104:p=A.n("It's too soon!",null)
if(t.h(s,"events_registration_start")!=null){o=A.kX(A.dW(t.h(s,"events_registration_start")),null)
m=y.r
t=d.a9(m).r.a
t===$&&A.b()
n=B.dqb(t.geV(0)).cm(o)
m=d.a9(m).r.a
m===$&&A.b()
p=A.n("You can sign in from {time}.",A.w(["time",n+" "+A.vB(m.geV(0)).cm(o)],u,u))}q=y.q.a(A.lv("workshops",null)).f
if(q!=null&&q.length!==0){A.bh(d,q,C.aO)
x=1
break $async$outer}A.bh(d,A.n("Cannot sign in!",null)+" "+p,C.aO)
x=1
break $async$outer
case 105:A.bh(d,A.n("Cannot sign in!",null)+" "+A.n("There is already the maximum of men.",null),C.aO)
x=1
break $async$outer
case 106:A.bh(d,A.n("Cannot sign in!",null)+" "+A.n("There is already the maximum of women.",null),C.aO)
x=1
break $async$outer
default:A.bh(d,A.n("Cannot sign in!",null),C.aO)
x=1
break $async$outer}case 1:return A.i(v,w)}})
return A.j($async$Rh,w)},
dqb(d){var x=A.n5(d,A.oK(),null)
x.toString
x=new A.j0(new A.m3(),x)
x.lJ("MMMMEEEEd")
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
K=c[173]
L=c[271]
M=c[187]
N=c[283]
B.apS.prototype={}
B.ri.prototype={
K(){return new B.aen(new A.bS(C.ah,$.a8()))}}
B.aen.prototype={
U(){this.aa()
this.e=this.a.f},
MS(){var x=0,w=A.k(y.v),v=this,u
var $async$MS=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.e
u===$&&A.b()
x=J.bk(u)<v.a.e&&v.d.a.a.length!==0?2:3
break
case 2:u=v.d
x=4
return A.d(B.bec(u.a.a),$async$MS)
case 4:u.hQ(0,C.dJ)
x=5
return A.d(A.rl(),$async$MS)
case 5:v.e=e
if(v.c!=null)v.q(new B.cb6())
case 3:return A.i(null,w)}})
return A.j($async$MS,w)},
Ct(d){return this.b8u(d)},
b8u(d){var x=0,w=A.k(y.v),v,u=this,t
var $async$Ct=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=u.c
t.toString
x=3
return A.d(G.ic(t,A.n("Delete companion",null),A.n("By deleting your companion you will also sign him/her out of all signed in sessions.",null),"Ok"),$async$Ct)
case 3:if(!f){x=1
break}x=4
return A.d(H.at9(d),$async$Ct)
case 4:t=u.a.r.$0()
x=5
return A.d(y.x.b(t)?t:A.c1(t,y.v),$async$Ct)
case 5:x=6
return A.d(A.rl(),$async$Ct)
case 6:u.e=f
if(u.c!=null)u.q(new B.cb7())
case 1:return A.i(v,w)}})
return A.j($async$Ct,w)},
Hz(d){return this.byk(d)},
byk(d){var x=0,w=A.k(y.v),v,u=this,t
var $async$Hz=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=u.a.d.$0()
if(!(t==null?!1:t)){x=1
break}t=u.c
t.toString
x=3
return A.d(B.bee(t,u.a.c,d),$async$Hz)
case 3:t=u.a.r.$0()
x=4
return A.d(y.x.b(t)?t:A.c1(t,y.v),$async$Hz)
case 4:x=5
return A.d(A.rl(),$async$Hz)
case 5:u.e=f
if(u.c!=null)u.q(new B.cb8())
case 1:return A.i(v,w)}})
return A.j($async$Hz,w)},
HA(d){return this.byl(d)},
byl(d){var x=0,w=A.k(y.v),v=this,u
var $async$HA=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(B.bef(u,v.a.c,d),$async$HA)
case 2:u=v.a.r.$0()
x=3
return A.d(y.x.b(u)?u:A.c1(u,y.v),$async$HA)
case 3:x=4
return A.d(A.rl(),$async$HA)
case 4:v.e=f
if(v.c!=null)v.q(new B.cb9())
return A.i(null,w)}})
return A.j($async$HA,w)},
B(d){var x,w,v,u,t,s=this,r=null,q=s.a.d.$0()
if(q==null)q=!1
x=E.bM(D.af4,r)
w=y.w
w=E.bM(D.bKK,A.w(["max_companions",J.ap(B.bnf())],w,w))
v=s.e
v===$&&A.b()
v=J.bk(v)
u=s.a.e
t=y.u
u=A.d7(new A.cC(D.ajW,A.aa(A.a([w,F.e3,A.jQ(A.aa(A.a([A.f8(!0,C.aH,!1,r,!0,C.u,r,A.fv(),s.d,r,r,r,r,r,2,A.bK(r,r,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.n("Companion Name",r),!0,!0,r,r,r,r,r,r,r,r,r,r,r,r,r),C.p,!0,r,!0,r,!1,r,C.aC,r,A.a([new A.KN(30,r)],y.y),r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.aV,r,r,C.aF,C.aE,r,r,r,r,r,r,r,!0,C.E,r,C.aW,r,r,r,r),F.e3,A.dq(!1,E.bM(D.bLf,r),r,r,r,r,r,r,s.gb73(),r,r)],t),C.i,C.f,C.h,0,r,C.l),v<u),F.e3,new A.ao(380,150,A.jo(!0,!0,!0,r,C.u,r,C.p,new B.cbd(s,q),J.bk(s.e),r,r,r,C.cC,r,r,!1,C.G,!1),r)],t),C.i,C.f,C.J,0,r,C.l),r),r,C.p,r,r,r,C.G)
return A.fi(A.a([A.cq(!1,E.bM(N.Jb,r),r,r,r,r,r,r,new B.cbe(d),r,r)],t),r,r,u,r,r,r,r,x,r,r)}}
var z=a.updateTypes(["V<~>()"])
B.cb6.prototype={
$0(){},
$S:0}
B.cb7.prototype={
$0(){},
$S:0}
B.cb8.prototype={
$0(){},
$S:0}
B.cb9.prototype={
$0(){},
$S:0}
B.cbd.prototype={
$2(d,e){var x,w,v=null,u=this.a,t=u.e
t===$&&A.b()
x=J.v(t,e)
t=A.a([],y.u)
if(x.agZ(u.a.c))t.push(I.Pt)
t.push(L.dt)
t.push(A.b1(A.E(x.b,v,v,v,v,v,v,v,v,v,v,v,v,v),1,v))
if(!x.agZ(u.a.c)){w=this.b?new B.cba(u,x):v
t.push(A.dq(!1,E.bM(D.bKC,v),v,v,v,v,v,v,w,v,v))}if(x.agZ(u.a.c))t.push(A.dq(!1,E.bM(D.af1,v),v,v,v,v,v,v,new B.cbb(u,x),v,v))
t.push(A.bJ(v,v,v,v,v,v,M.jl,v,v,v,new B.cbc(u,x),v,v,v,v,v))
return new A.X(C.aq,A.af(t,C.i,v,C.f,C.h,0,v),v)},
$S:120}
B.cba.prototype={
$0(){return this.a.Hz(this.b)},
$S:0}
B.cbb.prototype={
$0(){return this.a.HA(this.b)},
$S:0}
B.cbc.prototype={
$0(){return this.a.Ct(this.b)},
$S:0}
B.cbe.prototype={
$0(){return A.bl(this.a,!1).df()},
$S:0}
B.b91.prototype={
$0(){var x=0,w=A.k(y.v),v=this
var $async$$0=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.i(null,w)}})
return A.j($async$$0,w)},
$S:1}
B.b92.prototype={
$0(){var x=0,w=A.k(y.v),v=this
var $async$$0=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.i(null,w)}})
return A.j($async$$0,w)},
$S:1};(function installTearOffs(){var x=a._instance_0u
x(B.aen.prototype,"gb73","MS",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.apS,A.jK)
x(B.ri,A.M)
x(B.aen,A.N)
w(A.cV,[B.cb6,B.cb7,B.cb8,B.cb9,B.cba,B.cbb,B.cbc,B.cbe,B.b91,B.b92])
x(B.cbd,A.et)})()
A.cf(b.typeUniverse,JSON.parse('{"apS":{"jK":["zU"]},"ri":{"M":[],"e":[]},"aen":{"N":["ri"]}}'))
var y={x:A.F("V<~>"),y:A.F("u<nE>"),p:A.F("u<C3>"),u:A.F("u<e>"),w:A.F("l"),q:A.F("adt"),r:A.F("kO"),b:A.F("@"),v:A.F("~")};(function constants(){D.ajW=new A.ab(0,480,0,1/0)
D.P5=new A.at(58615,"MaterialIcons",null,!1)
D.bKC=new A.cw("Sign in someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bKK=new A.cw("If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.af1=new A.cw("Sign out someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLf=new A.cw("Create Companion",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.af4=new A.cw("Companions",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_10",e:"endPart",h:b})})($__dart_deferred_initializers__,"kz4TsGnsrEGd0ZMZK3LyPtvHkOg=");