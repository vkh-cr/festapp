((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dI1(d){var x=A.d(["id",d],y.w,y.b)
return new B.aYj("CheckRoute",new A.a4p(d,null),x,C.bW,null,"",null)},
aYj:function aYj(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Xd:function Xd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aM0:function aM0(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
cRR:function cRR(){},
cRS:function cRS(){},
cRT:function cRT(){},
cRU:function cRU(){},
cRY:function cRY(d,e){this.a=d
this.b=e},
cRV:function cRV(d,e){this.a=d
this.b=e},
cRW:function cRW(d,e){this.a=d
this.b=e},
cRX:function cRX(d,e){this.a=d
this.b=e},
cRZ:function cRZ(d){this.a=d},
dRE(d,e,f,g,h){var x=null,w=A.OX(A.bu(x,x,x,x,x,x,A.ax(C.qG,h,x,x,x),x,x,x,new B.bK2(e),x,x,x,x,x),!1,!1,!1,!1,d)
return A.c([w,A.OX(A.bu(x,x,x,x,x,x,A.ax(I.kn,g,x,x,x),x,x,x,new B.bK3(f),x,x,x,x,x),!1,!1,!1,!1,!d)],y.p)},
bK2:function bK2(d){this.a=d},
bK3:function bK3(d){this.a=d},
bZh(){var x=A.PO("companions",null)
if(x instanceof A.axQ)return x.e
return null},
amR(d,e,f){var x=0,w=A.q(y.v),v,u,t,s,r,q,p,o,n,m,l
var $async$amR=A.m(function(g,h){if(g===1)return A.n(h,w)
for(;;)$async$outer:switch(x){case 0:m=f==null
l=m?null:f.a
if(l==null){u=$.e3().gdn().c
l=(u==null?null:u.r).a}u=y.w
t=y.b
x=3
return A.f($.OE().bp("sign_user_to_event",A.d(["ev",e,"usr",l],u,t),t),$async$amR)
case 3:s=h
t=J.a3(s)
switch(t.h(s,"code")){case 200:if(m){m=$.d6().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
A.aN(d,A.j(A.t(r)+"You have been signed in.",null,null),C.aa)}else{r=f.e==="female"?"F":"M"
A.aN(d,A.j(r+"{user} has been signed in.",null,A.d(["user",f.fG()],u,u)),C.aa)}x=1
break $async$outer
case 100:A.aN(d,A.j("Cannot sign in!",null,null)+" "+A.j("Event is over.",null,null),C.aC)
x=1
break $async$outer
case 101:A.aN(d,A.j("Cannot sign in!",null,null)+" "+A.j("Event is full.",null,null),C.aC)
x=1
break $async$outer
case 102:if(m){m=$.d6().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.j(A.t(r)+"You are already signed in at an event of this type.",null,null)
A.aN(d,A.j("Cannot sign in!",null,null)+" "+q,C.aC)}else{r=f.e==="female"?"F":"M"
q=A.j(r+"{user} is already signed in at an event of this type.",null,A.d(["user",f.fG()],u,u))
A.aN(d,A.j("Cannot sign in!",null,null)+" "+q,C.aC)}x=1
break $async$outer
case 103:if(m){m=$.d6().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.j(A.t(r)+"You are already signed in.",null,null)
A.aN(d,A.j("Cannot sign in!",null,null)+" "+q,C.aC)}else{r=f.e==="female"?"F":"M"
q=A.j(r+"{user} is already signed in.",null,A.d(["user",f.fG()],u,u))
A.aN(d,A.j("Cannot sign in!",null,null)+" "+q,C.aC)}x=1
break $async$outer
case 107:if(m){m=$.d6().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.j(A.t(r)+"You are already signed in at another event at the same time.",null,null)
A.aN(d,A.j("Cannot sign in!",null,null)+" "+q,C.aC)}else{r=f.e==="female"?"F":"M"
A.aN(d,A.j(r+"{user} is already signed in at another event at the same time.",null,A.d(["user",f.fG()],u,u)),C.aa)}x=1
break $async$outer
case 104:p=A.j("It's too soon!",null,null)
if(t.h(s,"events_registration_start")!=null){o=A.P2(A.et(t.h(s,"events_registration_start")),null)
m=y.r
t=d.ac(m).r.a
t===$&&A.b()
n=B.eJb(t.gf_(0)).ce(o)
m=d.ac(m).r.a
m===$&&A.b()
p=A.j("You can sign in from {time}.",null,A.d(["time",n+" "+A.a_K(m.gf_(0)).ce(o)],u,u))}q=y.q.a(A.PO("workshops",null)).f
if(q!=null&&q.length!==0){A.aN(d,q,C.aC)
x=1
break $async$outer}A.aN(d,A.j("Cannot sign in!",null,null)+" "+p,C.aC)
x=1
break $async$outer
case 105:A.aN(d,A.j("Cannot sign in!",null,null)+" "+A.j("There is already the maximum of men.",null,null),C.aC)
x=1
break $async$outer
case 106:A.aN(d,A.j("Cannot sign in!",null,null)+" "+A.j("There is already the maximum of women.",null,null),C.aC)
x=1
break $async$outer
default:A.aN(d,A.j("Cannot sign in!",null,null),C.aC)
x=1
break $async$outer}case 1:return A.o(v,w)}})
return A.p($async$amR,w)},
bPU(d,e,f){var x=0,w=A.q(y.v)
var $async$bPU=A.m(function(g,h){if(g===1)return A.n(h,w)
for(;;)switch(x){case 0:x=2
return A.f(B.amR(d,e,A.cFZ(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null,null,null)),$async$bPU)
case 2:return A.o(null,w)}})
return A.p($async$bPU,w)},
bPV(d,e,f){var x=0,w=A.q(y.v)
var $async$bPV=A.m(function(g,h){if(g===1)return A.n(h,w)
for(;;)switch(x){case 0:x=2
return A.f(A.a8M(d,e,A.cFZ(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null,null,null)),$async$bPV)
case 2:return A.o(null,w)}})
return A.p($async$bPV,w)},
bPS(d){var x=0,w=A.q(y.v),v,u,t,s
var $async$bPS=A.m(function(e,f){if(e===1)return A.n(f,w)
for(;;)switch(x){case 0:u=$.dOU()
t=A.dw()
s=$.d6().a
s=(s==null?null:s.e).e
s.toString
v=y.b
x=2
return A.f(u.bp("create_companion_in_organization",A.d(["org",1,"oc",t,"usr",s,"c_name",d],y.w,v),v),$async$bPS)
case 2:return A.o(null,w)}})
return A.p($async$bPS,w)},
eJb(d){var x=A.Sn(d,A.UL(),null)
x.toString
x=new A.Ou(new A.RT(),x)
x.m8("MMMMEEEEd")
return x}},D,E,G,F,H,I,K,L
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[276]
E=c[166]
G=c[99]
F=c[184]
H=c[311]
I=c[186]
K=c[300]
L=c[273]
B.aYj.prototype={}
B.Xd.prototype={
L(){return new B.aM0(new A.be(C.aj,$.a9()))}}
B.aM0.prototype={
S(){this.a_()
this.e=this.a.f},
OD(){var x=0,w=A.q(y.v),v=this,u
var $async$OD=A.m(function(d,e){if(d===1)return A.n(e,w)
for(;;)switch(x){case 0:u=v.e
u===$&&A.b()
x=J.bi(u)<v.a.e&&v.d.a.a.length!==0?2:3
break
case 2:u=v.d
x=4
return A.f(B.bPS(u.a.a),$async$OD)
case 4:u.h2(0,C.cM)
x=5
return A.f(A.Xg(),$async$OD)
case 5:v.e=e
if(v.c!=null)v.q(new B.cRR())
case 3:return A.o(null,w)}})
return A.p($async$OD,w)},
DQ(d){return this.bg6(d)},
bg6(d){var x=0,w=A.q(y.v),v,u=this,t
var $async$DQ=A.m(function(e,f){if(e===1)return A.n(f,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.f(A.N2(t,A.j("Delete companion",null,null),A.j("By deleting your companion you will also sign him/her out of all signed in sessions.",null,null),"Storno","Ok"),$async$DQ)
case 3:if(!f){x=1
break}x=4
return A.f(G.b0K(d),$async$DQ)
case 4:t=u.a.r.$0()
x=5
return A.f(y.x.b(t)?t:A.c4(t,y.v),$async$DQ)
case 5:x=6
return A.f(A.Xg(),$async$DQ)
case 6:u.e=f
if(u.c!=null)u.q(new B.cRS())
case 1:return A.o(v,w)}})
return A.p($async$DQ,w)},
Jb(d){return this.bHk(d)},
bHk(d){var x=0,w=A.q(y.v),v,u=this,t
var $async$Jb=A.m(function(e,f){if(e===1)return A.n(f,w)
for(;;)switch(x){case 0:t=u.a.d.$0()
if(!(t==null?!1:t)){x=1
break}t=u.c
t.toString
x=3
return A.f(B.bPU(t,u.a.c,d),$async$Jb)
case 3:t=u.a.r.$0()
x=4
return A.f(y.x.b(t)?t:A.c4(t,y.v),$async$Jb)
case 4:x=5
return A.f(A.Xg(),$async$Jb)
case 5:u.e=f
if(u.c!=null)u.q(new B.cRT())
case 1:return A.o(v,w)}})
return A.p($async$Jb,w)},
Jc(d){return this.bHl(d)},
bHl(d){var x=0,w=A.q(y.v),v=this,u
var $async$Jc=A.m(function(e,f){if(e===1)return A.n(f,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.f(B.bPV(u,v.a.c,d),$async$Jc)
case 2:u=v.a.r.$0()
x=3
return A.f(y.x.b(u)?u:A.c4(u,y.v),$async$Jc)
case 3:x=4
return A.f(A.Xg(),$async$Jc)
case 4:v.e=f
if(v.c!=null)v.q(new B.cRU())
return A.o(null,w)}})
return A.p($async$Jc,w)},
A(d){var x,w,v,u,t,s=this,r=null,q=s.a.d.$0()
if(q==null)q=!1
x=E.cZ(D.ah9,r)
w=y.w
w=E.cZ(D.bMd,A.d(["max_companions",J.al(B.bZh())],w,w))
v=s.e
v===$&&A.b()
v=J.bi(v)
u=s.a.e
t=y.u
u=A.cR(new A.cr(D.amb,A.a6(A.c([w,F.dO,A.OX(A.a6(A.c([A.e6(r,C.aM,!1,r,!0,C.v,r,A.eo(),s.d,r,r,r,r,r,2,A.b8(r,r,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.j("Companion Name",r,r),!0,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r),C.y,!0,r,!0,r,!1,r,C.aK,r,r,A.c([new A.a5h(30,r)],y.y),r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.aT,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.J,r,C.b0,r,r,r,r),F.dO,A.cM(!1,E.cZ(D.bMR,r),r,r,r,r,r,r,s.gbeH(),r,r)],t),C.m,C.i,C.j,0,r,C.o),!1,!1,!1,!1,v<u),F.dO,new A.an(380,150,A.N7(!0,!0,!0,r,C.v,r,C.y,r,C.S,new B.cRY(s,q),J.bi(s.e),r,r,r,r,r,C.dq,r,r,r,!1,C.L,r,!1),r)],t),C.m,C.i,C.R,0,r,C.o),r),C.v,r,C.y,C.S,r,r,r,r,r,r,!1,C.L)
return A.dq(A.c([A.bL(!1,E.cZ(D.bM4,r),r,r,!0,r,r,r,r,new B.cRZ(d),r,r)],t),r,r,u,r,r,r,r,x,r,r)}}
var z=a.updateTypes(["Z<~>()"])
B.cRR.prototype={
$0(){},
$S:0}
B.cRS.prototype={
$0(){},
$S:0}
B.cRT.prototype={
$0(){},
$S:0}
B.cRU.prototype={
$0(){},
$S:0}
B.cRY.prototype={
$2(d,e){var x,w,v=null,u=this.a,t=u.e
t===$&&A.b()
x=J.y(t,e)
t=A.c([],y.u)
if(x.al4(u.a.c))t.push(H.S3)
t.push(K.ds)
t.push(A.aE(A.x(x.b,v,v,v,v,v,v,v,v,v,v,v,v,v),1,v))
if(!x.al4(u.a.c)){w=this.b?new B.cRV(u,x):v
t.push(A.cM(!1,A.x(A.j("FeatureUser.signIn",v,v),v,v,v,v,v,v,v,v,v,v,v,v,v),v,v,v,v,v,v,w,v,v))}if(x.al4(u.a.c))t.push(A.cM(!1,A.x(A.j("FeatureUser.signOut",v,v),v,v,v,v,v,v,v,v,v,v,v,v,v),v,v,v,v,v,v,new B.cRW(u,x),v,v))
t.push(A.bu(v,v,v,v,v,v,L.jr,v,v,v,new B.cRX(u,x),v,v,v,v,v))
return new A.S(C.aA,A.ae(t,C.m,v,C.i,C.j,0,v),v)},
$S:139}
B.cRV.prototype={
$0(){return this.a.Jb(this.b)},
$S:0}
B.cRW.prototype={
$0(){return this.a.Jc(this.b)},
$S:0}
B.cRX.prototype={
$0(){return this.a.DQ(this.b)},
$S:0}
B.cRZ.prototype={
$0(){return A.aI(this.a,!1).cf()},
$S:0}
B.bK2.prototype={
$0(){var x=0,w=A.q(y.v),v=this
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,w)
for(;;)switch(x){case 0:x=2
return A.f(v.a.$0(),$async$$0)
case 2:return A.o(null,w)}})
return A.p($async$$0,w)},
$S:1}
B.bK3.prototype={
$0(){var x=0,w=A.q(y.v),v=this
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,w)
for(;;)switch(x){case 0:x=2
return A.f(v.a.$0(),$async$$0)
case 2:return A.o(null,w)}})
return A.p($async$$0,w)},
$S:1};(function installTearOffs(){var x=a._instance_0u
x(B.aM0.prototype,"gbeH","OD",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.aYj,A.Nl)
x(B.Xd,A.N)
x(B.aM0,A.P)
w(A.d3,[B.cRR,B.cRS,B.cRT,B.cRU,B.cRV,B.cRW,B.cRX,B.cRZ,B.bK2,B.bK3])
x(B.cRY,A.e8)})()
A.ch(b.typeUniverse,JSON.parse('{"aYj":{"Nl":["a4p"]},"Xd":{"N":[],"k":[]},"aM0":{"P":["Xd"]}}'))
var y={x:A.L("Z<~>"),y:A.L("A<Sh>"),p:A.L("A<a6N>"),u:A.L("A<k>"),w:A.L("l"),q:A.L("aL_"),r:A.L("Qx"),b:A.L("@"),v:A.L("~")};(function constants(){D.amb=new A.ah(0,480,0,1/0)
D.RE=new A.av(58615,"MaterialIcons",null,!1)
D.bM4=new A.cd("Ok",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMd=new A.cd("If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMR=new A.cd("Create Companion",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ah9=new A.cd("Companions",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["xpjh2fXtgWsaz4mOJhbtkZvCkLY="]=a.current})($__dart_deferred_initializers__);