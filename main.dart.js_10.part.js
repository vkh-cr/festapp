((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_10",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cVN(d){var x=A.w(["id",d],y.w,y.b)
return new B.apX("CheckRoute",new A.zU(d,null),x,C.bQ,null,"",null)},
apX:function apX(d,e,f,g,h,i,j){var _=this
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
aep:function aep(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
cbu:function cbu(){},
cbv:function cbv(){},
cbw:function cbw(){},
cbx:function cbx(){},
cbB:function cbB(d,e){this.a=d
this.b=e},
cby:function cby(d,e){this.a=d
this.b=e},
cbz:function cbz(d,e){this.a=d
this.b=e},
cbA:function cbA(d,e){this.a=d
this.b=e},
cbC:function cbC(d){this.a=d},
d3M(d,e,f,g,h){var x=null,w=A.jS(A.bJ(x,x,x,x,x,x,A.aB(C.tG,h,x,x),x,x,x,new B.b94(e),x,x,x,x,x),d)
return A.a([w,A.jS(A.bJ(x,x,x,x,x,x,A.aB(K.iw,g,x,x),x,x,x,new B.b95(f),x,x,x,x,x),!d)],y.p)},
b94:function b94(d){this.a=d},
b95:function b95(d){this.a=d},
bns(){var x=A.ly("companions",null)
if(x instanceof A.a0P)return x.e
return null},
bee(d,e,f){return B.drp(d,e,f)},
drp(d,e,f){var x=0,w=A.l(y.v)
var $async$bee=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)switch(x){case 0:x=2
return A.d(B.Rj(d,e,A.c1S(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null,null,null)),$async$bee)
case 2:return A.j(null,w)}})
return A.k($async$bee,w)},
bef(d,e,f){return B.drq(d,e,f)},
drq(d,e,f){var x=0,w=A.l(y.v)
var $async$bef=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)switch(x){case 0:x=2
return A.d(A.DU(d,e,A.c1S(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null,null,null)),$async$bef)
case 2:return A.j(null,w)}})
return A.k($async$bef,w)},
bec(d){return B.drn(d)},
drn(d){var x=0,w=A.l(y.v),v,u,t,s
var $async$bec=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=$.d1h()
t=A.de()
s=$.en().a
s=(s==null?null:s.e).e
s.toString
v=y.b
x=2
return A.d(u.c6("create_companion_in_organization",A.w(["org",1,"oc",t,"usr",s,"c_name",d],y.w,v),v),$async$bec)
case 2:return A.j(null,w)}})
return A.k($async$bec,w)},
Rj(d,e,f){return B.drX(d,e,f)},
drX(d,e,f){var x=0,w=A.l(y.v),v,u,t,s,r,q,p,o,n,m,l
var $async$Rj=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)$async$outer:switch(x){case 0:m=f==null
l=m?null:f.a
if(l==null){u=$.e1().gdO().c
l=(u==null?null:u.r).a}u=y.w
t=y.b
x=3
return A.d($.ji().c6("sign_user_to_event",A.w(["ev",e,"usr",l],u,t),t),$async$Rj)
case 3:s=h
t=J.a0(s)
switch(t.h(s,"code")){case 200:if(m){m=$.en().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
A.bi(d,A.n(A.o(r)+"You have been signed in.",null,null),C.a4)}else{r=f.e==="female"?"F":"M"
A.bi(d,A.n(r+"{user} has been signed in.",null,A.w(["user",f.fN()],u,u)),C.a4)}x=1
break $async$outer
case 100:A.bi(d,A.n("Cannot sign in!",null,null)+" "+A.n("Event is over.",null,null),C.aQ)
x=1
break $async$outer
case 101:A.bi(d,A.n("Cannot sign in!",null,null)+" "+A.n("Event is full.",null,null),C.aQ)
x=1
break $async$outer
case 102:if(m){m=$.en().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.n(A.o(r)+"You are already signed in at an event of this type.",null,null)
A.bi(d,A.n("Cannot sign in!",null,null)+" "+q,C.aQ)}else{r=f.e==="female"?"F":"M"
q=A.n(r+"{user} is already signed in at an event of this type.",null,A.w(["user",f.fN()],u,u))
A.bi(d,A.n("Cannot sign in!",null,null)+" "+q,C.aQ)}x=1
break $async$outer
case 103:if(m){m=$.en().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.n(A.o(r)+"You are already signed in.",null,null)
A.bi(d,A.n("Cannot sign in!",null,null)+" "+q,C.aQ)}else{r=f.e==="female"?"F":"M"
q=A.n(r+"{user} is already signed in.",null,A.w(["user",f.fN()],u,u))
A.bi(d,A.n("Cannot sign in!",null,null)+" "+q,C.aQ)}x=1
break $async$outer
case 107:if(m){m=$.en().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.n(A.o(r)+"You are already signed in at another event at the same time.",null,null)
A.bi(d,A.n("Cannot sign in!",null,null)+" "+q,C.aQ)}else{r=f.e==="female"?"F":"M"
A.bi(d,A.n(r+"{user} is already signed in at another event at the same time.",null,A.w(["user",f.fN()],u,u)),C.a4)}x=1
break $async$outer
case 104:p=A.n("It's too soon!",null,null)
if(t.h(s,"events_registration_start")!=null){o=A.kZ(A.e7(t.h(s,"events_registration_start")),null)
m=y.r
t=d.a8(m).r.a
t===$&&A.b()
n=B.dr0(t.geV(0)).ck(o)
m=d.a8(m).r.a
m===$&&A.b()
p=A.n("You can sign in from {time}.",null,A.w(["time",n+" "+A.vB(m.geV(0)).ck(o)],u,u))}q=y.q.a(A.ly("workshops",null)).f
if(q!=null&&q.length!==0){A.bi(d,q,C.aQ)
x=1
break $async$outer}A.bi(d,A.n("Cannot sign in!",null,null)+" "+p,C.aQ)
x=1
break $async$outer
case 105:A.bi(d,A.n("Cannot sign in!",null,null)+" "+A.n("There is already the maximum of men.",null,null),C.aQ)
x=1
break $async$outer
case 106:A.bi(d,A.n("Cannot sign in!",null,null)+" "+A.n("There is already the maximum of women.",null,null),C.aQ)
x=1
break $async$outer
default:A.bi(d,A.n("Cannot sign in!",null,null),C.aQ)
x=1
break $async$outer}case 1:return A.j(v,w)}})
return A.k($async$Rj,w)},
dr0(d){var x=A.n8(d,A.oM(),null)
x.toString
x=new A.j5(new A.m3(),x)
x.lD("MMMMEEEEd")
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
B.apX.prototype={}
B.ri.prototype={
K(){return new B.aep(new A.bQ(C.ah,$.a8()))}}
B.aep.prototype={
T(){this.a9()
this.e=this.a.f},
MS(){var x=0,w=A.l(y.v),v=this,u
var $async$MS=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.e
u===$&&A.b()
x=J.bl(u)<v.a.e&&v.d.a.a.length!==0?2:3
break
case 2:u=v.d
x=4
return A.d(B.bec(u.a.a),$async$MS)
case 4:u.i3(0,C.e9)
x=5
return A.d(A.rl(),$async$MS)
case 5:v.e=e
if(v.c!=null)v.t(new B.cbu())
case 3:return A.j(null,w)}})
return A.k($async$MS,w)},
Co(d){return this.b8H(d)},
b8H(d){var x=0,w=A.l(y.v),v,u=this,t
var $async$Co=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=u.c
t.toString
x=3
return A.d(G.ih(t,A.n("Delete companion",null,null),A.n("By deleting your companion you will also sign him/her out of all signed in sessions.",null,null),"Ok"),$async$Co)
case 3:if(!f){x=1
break}x=4
return A.d(H.atd(d),$async$Co)
case 4:t=u.a.r.$0()
x=5
return A.d(y.x.b(t)?t:A.c4(t,y.v),$async$Co)
case 5:x=6
return A.d(A.rl(),$async$Co)
case 6:u.e=f
if(u.c!=null)u.t(new B.cbv())
case 1:return A.j(v,w)}})
return A.k($async$Co,w)},
Hz(d){return this.byB(d)},
byB(d){var x=0,w=A.l(y.v),v,u=this,t
var $async$Hz=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=u.a.d.$0()
if(!(t==null?!1:t)){x=1
break}t=u.c
t.toString
x=3
return A.d(B.bee(t,u.a.c,d),$async$Hz)
case 3:t=u.a.r.$0()
x=4
return A.d(y.x.b(t)?t:A.c4(t,y.v),$async$Hz)
case 4:x=5
return A.d(A.rl(),$async$Hz)
case 5:u.e=f
if(u.c!=null)u.t(new B.cbw())
case 1:return A.j(v,w)}})
return A.k($async$Hz,w)},
HA(d){return this.byC(d)},
byC(d){var x=0,w=A.l(y.v),v=this,u
var $async$HA=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(B.bef(u,v.a.c,d),$async$HA)
case 2:u=v.a.r.$0()
x=3
return A.d(y.x.b(u)?u:A.c4(u,y.v),$async$HA)
case 3:x=4
return A.d(A.rl(),$async$HA)
case 4:v.e=f
if(v.c!=null)v.t(new B.cbx())
return A.j(null,w)}})
return A.k($async$HA,w)},
B(d){var x,w,v,u,t,s=this,r=null,q=s.a.d.$0()
if(q==null)q=!1
x=E.bR(D.afi,r)
w=y.w
w=E.bR(D.bKW,A.w(["max_companions",J.aq(B.bns())],w,w))
v=s.e
v===$&&A.b()
v=J.bl(v)
u=s.a.e
t=y.u
u=A.d0(new A.cD(D.ak8,A.a9(A.a([w,F.e5,A.jS(A.a9(A.a([A.f_(!0,C.aE,!1,r,!0,C.u,r,A.fb(),s.d,r,r,r,r,r,2,A.bL(r,r,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.n("Companion Name",r,r),!0,!0,r,r,r,r,r,r,r,r,r,r,r,r,r),C.o,!0,r,!0,r,!1,r,C.aB,r,A.a([new A.KM(30,r)],y.y),r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.aO,r,r,C.aD,C.aC,r,r,r,r,r,r,r,!0,C.E,r,C.aP,r,r,r,r),F.e5,A.dk(!1,E.bR(D.bLq,r),r,r,r,r,r,r,s.gb7g(),r,r)],t),C.i,C.f,C.h,0,r,C.l),v<u),F.e5,new A.ao(380,150,A.iV(!0,!0,!0,r,C.u,r,C.o,new B.cbB(s,q),J.bl(s.e),r,r,r,C.cD,r,r,!1,C.G,!1),r)],t),C.i,C.f,C.I,0,r,C.l),r),r,C.o,r,r,r,C.G)
return A.f4(A.a([A.cm(!1,E.bR(N.Jj,r),r,r,r,r,r,r,new B.cbC(d),r,r)],t),r,r,u,r,r,r,r,x,r,r)}}
var z=a.updateTypes(["V<~>()"])
B.cbu.prototype={
$0(){},
$S:0}
B.cbv.prototype={
$0(){},
$S:0}
B.cbw.prototype={
$0(){},
$S:0}
B.cbx.prototype={
$0(){},
$S:0}
B.cbB.prototype={
$2(d,e){var x,w,v=null,u=this.a,t=u.e
t===$&&A.b()
x=J.v(t,e)
t=A.a([],y.u)
if(x.agY(u.a.c))t.push(I.PG)
t.push(L.db)
t.push(A.aX(A.E(x.b,v,v,v,v,v,v,v,v,v,v,v,v,v),1,v))
if(!x.agY(u.a.c)){w=this.b?new B.cby(u,x):v
t.push(A.dk(!1,E.bR(D.bKO,v),v,v,v,v,v,v,w,v,v))}if(x.agY(u.a.c))t.push(A.dk(!1,E.bR(D.aff,v),v,v,v,v,v,v,new B.cbz(u,x),v,v))
t.push(A.bJ(v,v,v,v,v,v,M.jn,v,v,v,new B.cbA(u,x),v,v,v,v,v))
return new A.W(C.aq,A.ad(t,C.i,v,C.f,C.h,0,v),v)},
$S:121}
B.cby.prototype={
$0(){return this.a.Hz(this.b)},
$S:0}
B.cbz.prototype={
$0(){return this.a.HA(this.b)},
$S:0}
B.cbA.prototype={
$0(){return this.a.Co(this.b)},
$S:0}
B.cbC.prototype={
$0(){return A.bk(this.a,!1).d9()},
$S:0}
B.b94.prototype={
$0(){var x=0,w=A.l(y.v),v=this
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.j(null,w)}})
return A.k($async$$0,w)},
$S:1}
B.b95.prototype={
$0(){var x=0,w=A.l(y.v),v=this
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.j(null,w)}})
return A.k($async$$0,w)},
$S:1};(function installTearOffs(){var x=a._instance_0u
x(B.aep.prototype,"gb7g","MS",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.apX,A.jN)
x(B.ri,A.M)
x(B.aep,A.N)
w(A.cV,[B.cbu,B.cbv,B.cbw,B.cbx,B.cby,B.cbz,B.cbA,B.cbC,B.b94,B.b95])
x(B.cbB,A.ev)})()
A.ch(b.typeUniverse,JSON.parse('{"apX":{"jN":["zU"]},"ri":{"M":[],"e":[]},"aep":{"N":["ri"]}}'))
var y={x:A.G("V<~>"),y:A.G("u<nH>"),p:A.G("u<C9>"),u:A.G("u<e>"),w:A.G("f"),q:A.G("adv"),r:A.G("kQ"),b:A.G("@"),v:A.G("~")};(function constants(){D.ak8=new A.ac(0,480,0,1/0)
D.Pj=new A.at(58615,"MaterialIcons",null,!1)
D.bKO=new A.cy("Sign in someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bKW=new A.cy("If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aff=new A.cy("Sign out someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLq=new A.cy("Create Companion",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.afi=new A.cy("Companions",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_10",e:"endPart",h:b})})($__dart_deferred_initializers__,"2QX6yeNZM2zZNtaENjrJO/MbMC8=");