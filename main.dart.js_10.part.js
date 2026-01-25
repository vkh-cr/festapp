((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dFY(d){var x=A.d(["id",d],y.w,y.b)
return new B.aXL("CheckRoute",new A.a45(d,null),x,C.c7,null,"",null)},
aXL:function aXL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
WT:function WT(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aLw:function aLw(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
cQ1:function cQ1(){},
cQ2:function cQ2(){},
cQ3:function cQ3(){},
cQ4:function cQ4(){},
cQ8:function cQ8(d,e){this.a=d
this.b=e},
cQ5:function cQ5(d,e){this.a=d
this.b=e},
cQ6:function cQ6(d,e){this.a=d
this.b=e},
cQ7:function cQ7(d,e){this.a=d
this.b=e},
cQ9:function cQ9(d){this.a=d},
dPn(d,e,f,g,h){var x=null,w=A.OA(A.bu(x,x,x,x,x,x,A.aA(C.vd,h,x,x,x),x,x,x,new B.bJd(e),x,x,x,x,x),!1,!1,!1,!1,d)
return A.c([w,A.OA(A.bu(x,x,x,x,x,x,A.aA(I.kj,g,x,x,x),x,x,x,new B.bJe(f),x,x,x,x,x),!1,!1,!1,!1,!d)],y.p)},
bJd:function bJd(d){this.a=d},
bJe:function bJe(d){this.a=d},
bYD(){var x=A.Pu("companions",null)
if(x instanceof A.axr)return x.e
return null},
amv(d,e,f){var x=0,w=A.p(y.v),v,u,t,s,r,q,p,o,n,m,l
var $async$amv=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)$async$outer:switch(x){case 0:m=f==null
l=m?null:f.a
if(l==null){u=$.e3().gdL().c
l=(u==null?null:u.r).a}u=y.w
t=y.b
x=3
return A.f($.Oj().bo("sign_user_to_event",A.d(["ev",e,"usr",l],u,t),t),$async$amv)
case 3:s=h
t=J.a3(s)
switch(t.h(s,"code")){case 200:if(m){m=$.dI().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
A.aS(d,A.j(A.t(r)+"You have been signed in.",null,null),C.ac)}else{r=f.e==="female"?"F":"M"
A.aS(d,A.j(r+"{user} has been signed in.",null,A.d(["user",f.fA()],u,u)),C.ac)}x=1
break $async$outer
case 100:A.aS(d,A.j("Cannot sign in!",null,null)+" "+A.j("Event is over.",null,null),C.aD)
x=1
break $async$outer
case 101:A.aS(d,A.j("Cannot sign in!",null,null)+" "+A.j("Event is full.",null,null),C.aD)
x=1
break $async$outer
case 102:if(m){m=$.dI().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.j(A.t(r)+"You are already signed in at an event of this type.",null,null)
A.aS(d,A.j("Cannot sign in!",null,null)+" "+q,C.aD)}else{r=f.e==="female"?"F":"M"
q=A.j(r+"{user} is already signed in at an event of this type.",null,A.d(["user",f.fA()],u,u))
A.aS(d,A.j("Cannot sign in!",null,null)+" "+q,C.aD)}x=1
break $async$outer
case 103:if(m){m=$.dI().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.j(A.t(r)+"You are already signed in.",null,null)
A.aS(d,A.j("Cannot sign in!",null,null)+" "+q,C.aD)}else{r=f.e==="female"?"F":"M"
q=A.j(r+"{user} is already signed in.",null,A.d(["user",f.fA()],u,u))
A.aS(d,A.j("Cannot sign in!",null,null)+" "+q,C.aD)}x=1
break $async$outer
case 107:if(m){m=$.dI().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.j(A.t(r)+"You are already signed in at another event at the same time.",null,null)
A.aS(d,A.j("Cannot sign in!",null,null)+" "+q,C.aD)}else{r=f.e==="female"?"F":"M"
A.aS(d,A.j(r+"{user} is already signed in at another event at the same time.",null,A.d(["user",f.fA()],u,u)),C.ac)}x=1
break $async$outer
case 104:p=A.j("It's too soon!",null,null)
if(t.h(s,"events_registration_start")!=null){o=A.Oq(A.es(t.h(s,"events_registration_start")),null)
m=y.r
t=d.ad(m).r.a
t===$&&A.b()
n=B.eGj(t.gf8(0)).cd(o)
m=d.ad(m).r.a
m===$&&A.b()
p=A.j("You can sign in from {time}.",null,A.d(["time",n+" "+A.a_t(m.gf8(0)).cd(o)],u,u))}q=y.q.a(A.Pu("workshops",null)).f
if(q!=null&&q.length!==0){A.aS(d,q,C.aD)
x=1
break $async$outer}A.aS(d,A.j("Cannot sign in!",null,null)+" "+p,C.aD)
x=1
break $async$outer
case 105:A.aS(d,A.j("Cannot sign in!",null,null)+" "+A.j("There is already the maximum of men.",null,null),C.aD)
x=1
break $async$outer
case 106:A.aS(d,A.j("Cannot sign in!",null,null)+" "+A.j("There is already the maximum of women.",null,null),C.aD)
x=1
break $async$outer
default:A.aS(d,A.j("Cannot sign in!",null,null),C.aD)
x=1
break $async$outer}case 1:return A.n(v,w)}})
return A.o($async$amv,w)},
bOR(d,e,f){var x=0,w=A.p(y.v)
var $async$bOR=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:x=2
return A.f(B.amv(d,e,A.cEB(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null,null,null)),$async$bOR)
case 2:return A.n(null,w)}})
return A.o($async$bOR,w)},
bOS(d,e,f){var x=0,w=A.p(y.v)
var $async$bOS=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:x=2
return A.f(A.a8o(d,e,A.cEB(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null,null,null)),$async$bOS)
case 2:return A.n(null,w)}})
return A.o($async$bOS,w)},
bOP(d){var x=0,w=A.p(y.v),v,u,t,s
var $async$bOP=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:u=$.dMF()
t=A.dj()
s=$.dI().a
s=(s==null?null:s.e).e
s.toString
v=y.b
x=2
return A.f(u.bo("create_companion_in_organization",A.d(["org",1,"oc",t,"usr",s,"c_name",d],y.w,v),v),$async$bOP)
case 2:return A.n(null,w)}})
return A.o($async$bOP,w)},
eGj(d){var x=A.S0(d,A.Uq(),null)
x.toString
x=new A.Oa(new A.Ry(),x)
x.lK("MMMMEEEEd")
return x}},D,E,G,F,H,I,K,L
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[72],B)
D=c[270]
E=c[163]
G=c[96]
F=c[181]
H=c[303]
I=c[183]
K=c[291]
L=c[267]
B.aXL.prototype={}
B.WT.prototype={
L(){return new B.aLw(new A.bh(C.ao,$.a9()))}}
B.aLw.prototype={
S(){this.a_()
this.e=this.a.f},
Ow(){var x=0,w=A.p(y.v),v=this,u
var $async$Ow=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=v.e
u===$&&A.b()
x=J.bi(u)<v.a.e&&v.d.a.a.length!==0?2:3
break
case 2:u=v.d
x=4
return A.f(B.bOP(u.a.a),$async$Ow)
case 4:u.fY(0,C.cA)
x=5
return A.f(A.WW(),$async$Ow)
case 5:v.e=e
if(v.c!=null)v.q(new B.cQ1())
case 3:return A.n(null,w)}})
return A.o($async$Ow,w)},
DO(d){return this.bfG(d)},
bfG(d){var x=0,w=A.p(y.v),v,u=this,t
var $async$DO=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.f(A.MJ(t,A.j("Delete companion",null,null),A.j("By deleting your companion you will also sign him/her out of all signed in sessions.",null,null),"Ok"),$async$DO)
case 3:if(!f){x=1
break}x=4
return A.f(G.b09(d),$async$DO)
case 4:t=u.a.r.$0()
x=5
return A.f(y.x.b(t)?t:A.c3(t,y.v),$async$DO)
case 5:x=6
return A.f(A.WW(),$async$DO)
case 6:u.e=f
if(u.c!=null)u.q(new B.cQ2())
case 1:return A.n(v,w)}})
return A.o($async$DO,w)},
J7(d){return this.bGQ(d)},
bGQ(d){var x=0,w=A.p(y.v),v,u=this,t
var $async$J7=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:t=u.a.d.$0()
if(!(t==null?!1:t)){x=1
break}t=u.c
t.toString
x=3
return A.f(B.bOR(t,u.a.c,d),$async$J7)
case 3:t=u.a.r.$0()
x=4
return A.f(y.x.b(t)?t:A.c3(t,y.v),$async$J7)
case 4:x=5
return A.f(A.WW(),$async$J7)
case 5:u.e=f
if(u.c!=null)u.q(new B.cQ3())
case 1:return A.n(v,w)}})
return A.o($async$J7,w)},
J8(d){return this.bGR(d)},
bGR(d){var x=0,w=A.p(y.v),v=this,u
var $async$J8=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.f(B.bOS(u,v.a.c,d),$async$J8)
case 2:u=v.a.r.$0()
x=3
return A.f(y.x.b(u)?u:A.c3(u,y.v),$async$J8)
case 3:x=4
return A.f(A.WW(),$async$J8)
case 4:v.e=f
if(v.c!=null)v.q(new B.cQ4())
return A.n(null,w)}})
return A.o($async$J8,w)},
A(d){var x,w,v,u,t,s=this,r=null,q=s.a.d.$0()
if(q==null)q=!1
x=E.cZ(D.agU,r)
w=y.w
w=E.cZ(D.bLR,A.d(["max_companions",J.an(B.bYD())],w,w))
v=s.e
v===$&&A.b()
v=J.bi(v)
u=s.a.e
t=y.u
u=A.cV(new A.cn(D.alV,A.a6(A.c([w,F.dO,A.OA(A.a6(A.c([A.ea(r,C.aP,!1,r,!0,C.v,r,A.er(),s.d,r,r,r,r,r,2,A.ba(r,r,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.j("Companion Name",r,r),!0,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r),C.y,!0,r,!0,r,!1,r,C.aK,r,r,A.c([new A.a4Z(30,r)],y.y),r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.aU,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.H,r,C.b_,r,r,r,r),F.dO,A.cR(!1,E.cZ(D.bMq,r),r,r,r,r,r,r,s.gbeg(),r,r)],t),C.m,C.i,C.j,0,r,C.o),!1,!1,!1,!1,v<u),F.dO,new A.ap(380,150,A.MN(!0,!0,!0,r,C.v,r,C.y,r,C.T,new B.cQ8(s,q),J.bi(s.e),r,r,r,r,r,C.dr,r,r,r,!1,C.M,r,!1),r)],t),C.m,C.i,C.R,0,r,C.o),r),C.v,r,C.y,C.T,r,r,r,r,r,r,!1,C.M)
return A.dD(A.c([A.bU(!1,E.cZ(D.bLJ,r),r,r,!0,r,r,r,r,new B.cQ9(d),r,r)],t),r,r,u,r,r,r,r,x,r,r)}}
var z=a.updateTypes(["Z<~>()"])
B.cQ1.prototype={
$0(){},
$S:0}
B.cQ2.prototype={
$0(){},
$S:0}
B.cQ3.prototype={
$0(){},
$S:0}
B.cQ4.prototype={
$0(){},
$S:0}
B.cQ8.prototype={
$2(d,e){var x,w,v=null,u=this.a,t=u.e
t===$&&A.b()
x=J.y(t,e)
t=A.c([],y.u)
if(x.akM(u.a.c))t.push(H.RL)
t.push(K.ds)
t.push(A.aI(A.x(x.b,v,v,v,v,v,v,v,v,v,v,v,v,v),1,v))
if(!x.akM(u.a.c)){w=this.b?new B.cQ5(u,x):v
t.push(A.cR(!1,A.x(A.j("FeatureUser.signIn",v,v),v,v,v,v,v,v,v,v,v,v,v,v,v),v,v,v,v,v,v,w,v,v))}if(x.akM(u.a.c))t.push(A.cR(!1,A.x(A.j("FeatureUser.signOut",v,v),v,v,v,v,v,v,v,v,v,v,v,v,v),v,v,v,v,v,v,new B.cQ6(u,x),v,v))
t.push(A.bu(v,v,v,v,v,v,L.jo,v,v,v,new B.cQ7(u,x),v,v,v,v,v))
return new A.T(C.aB,A.ae(t,C.m,v,C.i,C.j,0,v),v)},
$S:141}
B.cQ5.prototype={
$0(){return this.a.J7(this.b)},
$S:0}
B.cQ6.prototype={
$0(){return this.a.J8(this.b)},
$S:0}
B.cQ7.prototype={
$0(){return this.a.DO(this.b)},
$S:0}
B.cQ9.prototype={
$0(){return A.aM(this.a,!1).ci()},
$S:0}
B.bJd.prototype={
$0(){var x=0,w=A.p(y.v),v=this
var $async$$0=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:x=2
return A.f(v.a.$0(),$async$$0)
case 2:return A.n(null,w)}})
return A.o($async$$0,w)},
$S:1}
B.bJe.prototype={
$0(){var x=0,w=A.p(y.v),v=this
var $async$$0=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:x=2
return A.f(v.a.$0(),$async$$0)
case 2:return A.n(null,w)}})
return A.o($async$$0,w)},
$S:1};(function installTearOffs(){var x=a._instance_0u
x(B.aLw.prototype,"gbeg","Ow",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.aXL,A.NZ)
x(B.WT,A.N)
x(B.aLw,A.Q)
w(A.d5,[B.cQ1,B.cQ2,B.cQ3,B.cQ4,B.cQ5,B.cQ6,B.cQ7,B.cQ9,B.bJd,B.bJe])
x(B.cQ8,A.ef)})()
A.cg(b.typeUniverse,JSON.parse('{"aXL":{"NZ":["a45"]},"WT":{"N":[],"k":[]},"aLw":{"Q":["WT"]}}'))
var y={x:A.L("Z<~>"),y:A.L("A<Su>"),p:A.L("A<a6r>"),u:A.L("A<k>"),w:A.L("q"),q:A.L("aKy"),r:A.L("Q9"),b:A.L("@"),v:A.L("~")};(function constants(){D.alV=new A.ah(0,480,0,1/0)
D.Rn=new A.av(58615,"MaterialIcons",null,!1)
D.bLJ=new A.cs("Ok",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLR=new A.cs("If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMq=new A.cs("Create Companion",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.agU=new A.cs("Companions",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["0krFBpKDeDQ8ItTieYUcVrbOItE="]=a.current})($__dart_deferred_initializers__);