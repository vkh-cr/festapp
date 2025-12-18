((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dzD(d){var x=A.d(["id",d],y.w,y.b)
return new B.aUC("CheckRoute",new A.a1h(d,null),x,C.cl,null,"",null)},
aUC:function aUC(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Uc:function Uc(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIq:function aIq(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
cKM:function cKM(){},
cKN:function cKN(){},
cKO:function cKO(){},
cKP:function cKP(){},
cKT:function cKT(d,e){this.a=d
this.b=e},
cKQ:function cKQ(d,e){this.a=d
this.b=e},
cKR:function cKR(d,e){this.a=d
this.b=e},
cKS:function cKS(d,e){this.a=d
this.b=e},
cKU:function cKU(d){this.a=d},
dIX(d,e,f,g,h){var x=null,w=A.LT(A.bD(x,x,x,x,x,x,A.aC(C.v4,h,x,x,x),x,x,x,new B.bFP(e),x,x,x,x,x),!1,!1,!1,!1,d)
return A.c([w,A.LT(A.bD(x,x,x,x,x,x,A.aC(I.ke,g,x,x,x),x,x,x,new B.bFQ(f),x,x,x,x,x),!1,!1,!1,!1,!d)],y.p)},
bFP:function bFP(d){this.a=d},
bFQ:function bFQ(d){this.a=d},
bUH(){var x=A.Og("companions",null)
if(x instanceof A.aut)return x.e
return null},
ajB(d,e,f){var x=0,w=A.p(y.v),v,u,t,s,r,q,p,o,n,m,l
var $async$ajB=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)$async$outer:switch(x){case 0:m=f==null
l=m?null:f.a
if(l==null){u=$.ea().ge0().c
l=(u==null?null:u.r).a}u=y.w
t=y.b
x=3
return A.f($.LC().bv("sign_user_to_event",A.d(["ev",e,"usr",l],u,t),t),$async$ajB)
case 3:s=h
t=J.a4(s)
switch(t.h(s,"code")){case 200:if(m){m=$.dZ().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
A.aY(d,A.j(A.t(r)+"You have been signed in.",null,null),C.ad)}else{r=f.e==="female"?"F":"M"
A.aY(d,A.j(r+"{user} has been signed in.",null,A.d(["user",f.fz()],u,u)),C.ad)}x=1
break $async$outer
case 100:A.aY(d,A.j("Cannot sign in!",null,null)+" "+A.j("Event is over.",null,null),C.aH)
x=1
break $async$outer
case 101:A.aY(d,A.j("Cannot sign in!",null,null)+" "+A.j("Event is full.",null,null),C.aH)
x=1
break $async$outer
case 102:if(m){m=$.dZ().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.j(A.t(r)+"You are already signed in at an event of this type.",null,null)
A.aY(d,A.j("Cannot sign in!",null,null)+" "+q,C.aH)}else{r=f.e==="female"?"F":"M"
q=A.j(r+"{user} is already signed in at an event of this type.",null,A.d(["user",f.fz()],u,u))
A.aY(d,A.j("Cannot sign in!",null,null)+" "+q,C.aH)}x=1
break $async$outer
case 103:if(m){m=$.dZ().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.j(A.t(r)+"You are already signed in.",null,null)
A.aY(d,A.j("Cannot sign in!",null,null)+" "+q,C.aH)}else{r=f.e==="female"?"F":"M"
q=A.j(r+"{user} is already signed in.",null,A.d(["user",f.fz()],u,u))
A.aY(d,A.j("Cannot sign in!",null,null)+" "+q,C.aH)}x=1
break $async$outer
case 107:if(m){m=$.dZ().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.j(A.t(r)+"You are already signed in at another event at the same time.",null,null)
A.aY(d,A.j("Cannot sign in!",null,null)+" "+q,C.aH)}else{r=f.e==="female"?"F":"M"
A.aY(d,A.j(r+"{user} is already signed in at another event at the same time.",null,A.d(["user",f.fz()],u,u)),C.ad)}x=1
break $async$outer
case 104:p=A.j("It's too soon!",null,null)
if(t.h(s,"events_registration_start")!=null){o=A.LZ(A.ep(t.h(s,"events_registration_start")),null)
m=y.r
t=d.ah(m).r.a
t===$&&A.b()
n=B.exd(t.gf8(0)).ci(o)
m=d.ah(m).r.a
m===$&&A.b()
p=A.j("You can sign in from {time}.",null,A.d(["time",n+" "+A.XK(m.gf8(0)).ci(o)],u,u))}q=y.q.a(A.Og("workshops",null)).f
if(q!=null&&q.length!==0){A.aY(d,q,C.aH)
x=1
break $async$outer}A.aY(d,A.j("Cannot sign in!",null,null)+" "+p,C.aH)
x=1
break $async$outer
case 105:A.aY(d,A.j("Cannot sign in!",null,null)+" "+A.j("There is already the maximum of men.",null,null),C.aH)
x=1
break $async$outer
case 106:A.aY(d,A.j("Cannot sign in!",null,null)+" "+A.j("There is already the maximum of women.",null,null),C.aH)
x=1
break $async$outer
default:A.aY(d,A.j("Cannot sign in!",null,null),C.aH)
x=1
break $async$outer}case 1:return A.n(v,w)}})
return A.o($async$ajB,w)},
bL8(d,e,f){var x=0,w=A.p(y.v)
var $async$bL8=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:x=2
return A.f(B.ajB(d,e,A.cAq(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null,null,null)),$async$bL8)
case 2:return A.n(null,w)}})
return A.o($async$bL8,w)},
bL9(d,e,f){var x=0,w=A.p(y.v)
var $async$bL9=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:x=2
return A.f(A.a5z(d,e,A.cAq(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null,null,null)),$async$bL9)
case 2:return A.n(null,w)}})
return A.o($async$bL9,w)},
bL6(d){var x=0,w=A.p(y.v),v,u,t,s
var $async$bL6=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:u=$.dGf()
t=A.dj()
s=$.dZ().a
s=(s==null?null:s.e).e
s.toString
v=y.b
x=2
return A.f(u.bv("create_companion_in_organization",A.d(["org",1,"oc",t,"usr",s,"c_name",d],y.w,v),v),$async$bL6)
case 2:return A.n(null,w)}})
return A.o($async$bL6,w)},
exd(d){var x=A.Ph(d,A.RH(),null)
x.toString
x=new A.Lp(new A.OQ(),x)
x.m4("MMMMEEEEd")
return x}},D,E,G,F,H,I,K,L
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[70],B)
D=c[266]
E=c[168]
G=c[98]
F=c[180]
H=c[300]
I=c[182]
K=c[286]
L=c[263]
B.aUC.prototype={}
B.Uc.prototype={
L(){return new B.aIq(new A.bv(C.aw,$.aa()))}}
B.aIq.prototype={
T(){this.a3()
this.e=this.a.f},
Og(){var x=0,w=A.p(y.v),v=this,u
var $async$Og=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=v.e
u===$&&A.b()
x=J.bq(u)<v.a.e&&v.d.a.a.length!==0?2:3
break
case 2:u=v.d
x=4
return A.f(B.bL6(u.a.a),$async$Og)
case 4:u.h6(0,C.cN)
x=5
return A.f(A.Uf(),$async$Og)
case 5:v.e=e
if(v.c!=null)v.q(new B.cKM())
case 3:return A.n(null,w)}})
return A.o($async$Og,w)},
DG(d){return this.beR(d)},
beR(d){var x=0,w=A.p(y.v),v,u=this,t
var $async$DG=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.f(A.K3(t,A.j("Delete companion",null,null),A.j("By deleting your companion you will also sign him/her out of all signed in sessions.",null,null),"Ok"),$async$DG)
case 3:if(!f){x=1
break}x=4
return A.f(G.aXZ(d),$async$DG)
case 4:t=u.a.r.$0()
x=5
return A.f(y.x.b(t)?t:A.c1(t,y.v),$async$DG)
case 5:x=6
return A.f(A.Uf(),$async$DG)
case 6:u.e=f
if(u.c!=null)u.q(new B.cKN())
case 1:return A.n(v,w)}})
return A.o($async$DG,w)},
IW(d){return this.bFQ(d)},
bFQ(d){var x=0,w=A.p(y.v),v,u=this,t
var $async$IW=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:t=u.a.d.$0()
if(!(t==null?!1:t)){x=1
break}t=u.c
t.toString
x=3
return A.f(B.bL8(t,u.a.c,d),$async$IW)
case 3:t=u.a.r.$0()
x=4
return A.f(y.x.b(t)?t:A.c1(t,y.v),$async$IW)
case 4:x=5
return A.f(A.Uf(),$async$IW)
case 5:u.e=f
if(u.c!=null)u.q(new B.cKO())
case 1:return A.n(v,w)}})
return A.o($async$IW,w)},
IX(d){return this.bFR(d)},
bFR(d){var x=0,w=A.p(y.v),v=this,u
var $async$IX=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.f(B.bL9(u,v.a.c,d),$async$IX)
case 2:u=v.a.r.$0()
x=3
return A.f(y.x.b(u)?u:A.c1(u,y.v),$async$IX)
case 3:x=4
return A.f(A.Uf(),$async$IX)
case 4:v.e=f
if(v.c!=null)v.q(new B.cKP())
return A.n(null,w)}})
return A.o($async$IX,w)},
A(d){var x,w,v,u,t,s=this,r=null,q=s.a.d.$0()
if(q==null)q=!1
x=E.cz(D.agF,r)
w=y.w
w=E.cz(D.bLy,A.d(["max_companions",J.ap(B.bUH())],w,w))
v=s.e
v===$&&A.b()
v=J.bq(v)
u=s.a.e
t=y.u
u=A.cY(new A.cp(D.alD,A.a8(A.c([w,F.dN,A.LT(A.a8(A.c([A.et(r,C.b_,!1,r,!0,C.w,r,A.eH(),s.d,r,r,r,r,r,2,A.br(r,r,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.j("Companion Name",r,r),!0,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r),C.x,!0,r,!0,r,!1,r,C.aN,r,r,A.c([new A.a2c(30,r)],y.y),r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.aY,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.N,r,C.b1,r,r,r,r),F.dN,A.d8(!1,E.cz(D.bM5,r),r,r,r,r,r,r,s.gbdr(),r,r)],t),C.k,C.i,C.j,0,r,C.p),!1,!1,!1,!1,v<u),F.dN,new A.ao(380,150,A.Kh(!0,!0,!0,r,C.w,r,C.x,r,C.R,new B.cKT(s,q),J.bq(s.e),r,r,r,r,r,C.dc,r,r,r,!1,C.L,r,!1),r)],t),C.k,C.i,C.T,0,r,C.p),r),C.w,r,C.x,C.R,r,r,r,r,r,r,!1,C.L)
return A.eb(A.c([A.c3(!1,E.cz(D.bLq,r),r,r,!0,r,r,r,r,new B.cKU(d),r,r)],t),r,r,u,r,r,r,r,x,r,r)}}
var z=a.updateTypes(["Z<~>()"])
B.cKM.prototype={
$0(){},
$S:0}
B.cKN.prototype={
$0(){},
$S:0}
B.cKO.prototype={
$0(){},
$S:0}
B.cKP.prototype={
$0(){},
$S:0}
B.cKT.prototype={
$2(d,e){var x,w,v=null,u=this.a,t=u.e
t===$&&A.b()
x=J.y(t,e)
t=A.c([],y.u)
if(x.akj(u.a.c))t.push(H.Rx)
t.push(K.dB)
t.push(A.aJ(A.B(x.b,v,v,v,v,v,v,v,v,v,v,v,v,v),1,v))
if(!x.akj(u.a.c)){w=this.b?new B.cKQ(u,x):v
t.push(A.d8(!1,E.cz(D.bLp,v),v,v,v,v,v,v,w,v,v))}if(x.akj(u.a.c))t.push(A.d8(!1,E.cz(D.agA,v),v,v,v,v,v,v,new B.cKR(u,x),v,v))
t.push(A.bD(v,v,v,v,v,v,L.kg,v,v,v,new B.cKS(u,x),v,v,v,v,v))
return new A.U(C.aD,A.af(t,C.k,v,C.i,C.j,0,v),v)},
$S:136}
B.cKQ.prototype={
$0(){return this.a.IW(this.b)},
$S:0}
B.cKR.prototype={
$0(){return this.a.IX(this.b)},
$S:0}
B.cKS.prototype={
$0(){return this.a.DG(this.b)},
$S:0}
B.cKU.prototype={
$0(){return A.bc(this.a,!1).cf()},
$S:0}
B.bFP.prototype={
$0(){var x=0,w=A.p(y.v),v=this
var $async$$0=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:x=2
return A.f(v.a.$0(),$async$$0)
case 2:return A.n(null,w)}})
return A.o($async$$0,w)},
$S:1}
B.bFQ.prototype={
$0(){var x=0,w=A.p(y.v),v=this
var $async$$0=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:x=2
return A.f(v.a.$0(),$async$$0)
case 2:return A.n(null,w)}})
return A.o($async$$0,w)},
$S:1};(function installTearOffs(){var x=a._instance_0u
x(B.aIq.prototype,"gbdr","Og",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.aUC,A.LO)
x(B.Uc,A.N)
x(B.aIq,A.Q)
w(A.d7,[B.cKM,B.cKN,B.cKO,B.cKP,B.cKQ,B.cKR,B.cKS,B.cKU,B.bFP,B.bFQ])
x(B.cKT,A.eo)})()
A.ci(b.typeUniverse,JSON.parse('{"aUC":{"LO":["a1h"]},"Uc":{"N":[],"k":[]},"aIq":{"Q":["Uc"]}}'))
var y={x:A.M("Z<~>"),y:A.M("z<PK>"),p:A.M("z<a3F>"),u:A.M("z<k>"),w:A.M("q"),q:A.M("aHt"),r:A.M("NZ"),b:A.M("@"),v:A.M("~")};(function constants(){D.alD=new A.ah(0,480,0,1/0)
D.R9=new A.av(58615,"MaterialIcons",null,!1)
D.bLp=new A.ct("Sign in someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLq=new A.ct("Ok",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLy=new A.ct("If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.agA=new A.ct("Sign out someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bM5=new A.ct("Create Companion",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.agF=new A.ct("Companions",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["r5FGFCGdcwRykZLSelXNeizrI6Y="]=a.current})($__dart_deferred_initializers__);