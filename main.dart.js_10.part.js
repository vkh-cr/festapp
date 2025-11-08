((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d0t(d){var x=A.w(["id",d],y.w,y.b)
return new B.arF("CheckRoute",new A.As(d,null),x,C.bR,null,"",null)},
arF:function arF(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
rD:function rD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
afG:function afG(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
ceZ:function ceZ(){},
cf_:function cf_(){},
cf0:function cf0(){},
cf1:function cf1(){},
cf5:function cf5(d,e){this.a=d
this.b=e},
cf2:function cf2(d,e){this.a=d
this.b=e},
cf3:function cf3(d,e){this.a=d
this.b=e},
cf4:function cf4(d,e){this.a=d
this.b=e},
cf6:function cf6(d){this.a=d},
d9B(d,e,f,g,h){var x=null,w=A.jC(A.bP(x,x,x,x,x,x,A.aD(C.um,h,x,x),x,x,x,new B.bbS(e),x,x,x,x,x),!1,!1,!1,!1,d)
return A.b([w,A.jC(A.bP(x,x,x,x,x,x,A.aD(I.iP,g,x,x),x,x,x,new B.bbT(f),x,x,x,x,x),!1,!1,!1,!1,!d)],y.p)},
bbS:function bbS(d){this.a=d},
bbT:function bbT(d){this.a=d},
bqc(){var x=A.lO("companions",null)
if(x instanceof A.a1Y)return x.e
return null},
bgV(d,e,f){var x=0,w=A.m(y.v)
var $async$bgV=A.i(function(g,h){if(g===1)return A.j(h,w)
while(true)switch(x){case 0:x=2
return A.d(B.Sf(d,e,A.c5b(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null,null,null)),$async$bgV)
case 2:return A.k(null,w)}})
return A.l($async$bgV,w)},
bgW(d,e,f){var x=0,w=A.m(y.v)
var $async$bgW=A.i(function(g,h){if(g===1)return A.j(h,w)
while(true)switch(x){case 0:x=2
return A.d(A.EA(d,e,A.c5b(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null,null,null)),$async$bgW)
case 2:return A.k(null,w)}})
return A.l($async$bgW,w)},
bgT(d){var x=0,w=A.m(y.v),v,u,t,s
var $async$bgT=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:u=$.d7_()
t=A.df()
s=$.e0().a
s=(s==null?null:s.e).e
s.toString
v=y.b
x=2
return A.d(u.c3("create_companion_in_organization",A.w(["org",1,"oc",t,"usr",s,"c_name",d],y.w,v),v),$async$bgT)
case 2:return A.k(null,w)}})
return A.l($async$bgT,w)},
Sf(d,e,f){var x=0,w=A.m(y.v),v,u,t,s,r,q,p,o,n,m,l
var $async$Sf=A.i(function(g,h){if(g===1)return A.j(h,w)
while(true)$async$outer:switch(x){case 0:m=f==null
l=m?null:f.a
if(l==null){u=$.e6().ge_().c
l=(u==null?null:u.r).a}u=y.w
t=y.b
x=3
return A.d($.jk().c3("sign_user_to_event",A.w(["ev",e,"usr",l],u,t),t),$async$Sf)
case 3:s=h
t=J.a1(s)
switch(t.h(s,"code")){case 200:if(m){m=$.e0().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
A.b4(d,A.h(A.o(r)+"You have been signed in.",null,null),C.Z)}else{r=f.e==="female"?"F":"M"
A.b4(d,A.h(r+"{user} has been signed in.",null,A.w(["user",f.fV()],u,u)),C.Z)}x=1
break $async$outer
case 100:A.b4(d,A.h("Cannot sign in!",null,null)+" "+A.h("Event is over.",null,null),C.aC)
x=1
break $async$outer
case 101:A.b4(d,A.h("Cannot sign in!",null,null)+" "+A.h("Event is full.",null,null),C.aC)
x=1
break $async$outer
case 102:if(m){m=$.e0().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.h(A.o(r)+"You are already signed in at an event of this type.",null,null)
A.b4(d,A.h("Cannot sign in!",null,null)+" "+q,C.aC)}else{r=f.e==="female"?"F":"M"
q=A.h(r+"{user} is already signed in at an event of this type.",null,A.w(["user",f.fV()],u,u))
A.b4(d,A.h("Cannot sign in!",null,null)+" "+q,C.aC)}x=1
break $async$outer
case 103:if(m){m=$.e0().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.h(A.o(r)+"You are already signed in.",null,null)
A.b4(d,A.h("Cannot sign in!",null,null)+" "+q,C.aC)}else{r=f.e==="female"?"F":"M"
q=A.h(r+"{user} is already signed in.",null,A.w(["user",f.fV()],u,u))
A.b4(d,A.h("Cannot sign in!",null,null)+" "+q,C.aC)}x=1
break $async$outer
case 107:if(m){m=$.e0().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.h(A.o(r)+"You are already signed in at another event at the same time.",null,null)
A.b4(d,A.h("Cannot sign in!",null,null)+" "+q,C.aC)}else{r=f.e==="female"?"F":"M"
A.b4(d,A.h(r+"{user} is already signed in at another event at the same time.",null,A.w(["user",f.fV()],u,u)),C.Z)}x=1
break $async$outer
case 104:p=A.h("It's too soon!",null,null)
if(t.h(s,"events_registration_start")!=null){o=A.l8(A.eb(t.h(s,"events_registration_start")),null)
m=y.r
t=d.af(m).r.a
t===$&&A.a()
n=B.dxe(t.gf_(0)).cp(o)
m=d.af(m).r.a
m===$&&A.a()
p=A.h("You can sign in from {time}.",null,A.w(["time",n+" "+A.vZ(m.gf_(0)).cp(o)],u,u))}q=y.q.a(A.lO("workshops",null)).f
if(q!=null&&q.length!==0){A.b4(d,q,C.aC)
x=1
break $async$outer}A.b4(d,A.h("Cannot sign in!",null,null)+" "+p,C.aC)
x=1
break $async$outer
case 105:A.b4(d,A.h("Cannot sign in!",null,null)+" "+A.h("There is already the maximum of men.",null,null),C.aC)
x=1
break $async$outer
case 106:A.b4(d,A.h("Cannot sign in!",null,null)+" "+A.h("There is already the maximum of women.",null,null),C.aC)
x=1
break $async$outer
default:A.b4(d,A.h("Cannot sign in!",null,null),C.aC)
x=1
break $async$outer}case 1:return A.k(v,w)}})
return A.l($async$Sf,w)},
dxe(d){var x=A.mL(d,A.p0(),null)
x.toString
x=new A.j7(new A.mj(),x)
x.lT("MMMMEEEEd")
return x}},D,E,G,F,H,I,K,L,M
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[68],B)
D=c[194]
E=c[163]
G=c[92]
F=c[264]
H=c[285]
I=c[172]
K=c[275]
L=c[190]
M=c[287]
B.arF.prototype={}
B.rD.prototype={
K(){return new B.afG(new A.bC(C.af,$.a7()))}}
B.afG.prototype={
S(){this.a9()
this.e=this.a.f},
Nr(){var x=0,w=A.m(y.v),v=this,u
var $async$Nr=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=v.e
u===$&&A.a()
x=J.bo(u)<v.a.e&&v.d.a.a.length!==0?2:3
break
case 2:u=v.d
x=4
return A.d(B.bgT(u.a.a),$async$Nr)
case 4:u.hK(0,C.dj)
x=5
return A.d(A.rG(),$async$Nr)
case 5:v.e=e
if(v.c!=null)v.q(new B.ceZ())
case 3:return A.k(null,w)}})
return A.l($async$Nr,w)},
D_(d){return this.bbn(d)},
bbn(d){var x=0,w=A.m(y.v),v,u=this,t
var $async$D_=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:t=u.c
t.toString
x=3
return A.d(A.hU(t,A.h("Delete companion",null,null),A.h("By deleting your companion you will also sign him/her out of all signed in sessions.",null,null),"Ok"),$async$D_)
case 3:if(!f){x=1
break}x=4
return A.d(G.auV(d),$async$D_)
case 4:t=u.a.r.$0()
x=5
return A.d(y.x.b(t)?t:A.c2(t,y.v),$async$D_)
case 5:x=6
return A.d(A.rG(),$async$D_)
case 6:u.e=f
if(u.c!=null)u.q(new B.cf_())
case 1:return A.k(v,w)}})
return A.l($async$D_,w)},
I9(d){return this.bC0(d)},
bC0(d){var x=0,w=A.m(y.v),v,u=this,t
var $async$I9=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:t=u.a.d.$0()
if(!(t==null?!1:t)){x=1
break}t=u.c
t.toString
x=3
return A.d(B.bgV(t,u.a.c,d),$async$I9)
case 3:t=u.a.r.$0()
x=4
return A.d(y.x.b(t)?t:A.c2(t,y.v),$async$I9)
case 4:x=5
return A.d(A.rG(),$async$I9)
case 5:u.e=f
if(u.c!=null)u.q(new B.cf0())
case 1:return A.k(v,w)}})
return A.l($async$I9,w)},
Ia(d){return this.bC1(d)},
bC1(d){var x=0,w=A.m(y.v),v=this,u
var $async$Ia=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(B.bgW(u,v.a.c,d),$async$Ia)
case 2:u=v.a.r.$0()
x=3
return A.d(y.x.b(u)?u:A.c2(u,y.v),$async$Ia)
case 3:x=4
return A.d(A.rG(),$async$Ia)
case 4:v.e=f
if(v.c!=null)v.q(new B.cf1())
return A.k(null,w)}})
return A.l($async$Ia,w)},
A(d){var x,w,v,u,t,s=this,r=null,q=s.a.d.$0()
if(q==null)q=!1
x=E.c0(D.afM,r)
w=y.w
w=E.c0(D.bM8,A.w(["max_companions",J.aq(B.bqc())],w,w))
v=s.e
v===$&&A.a()
v=J.bo(v)
u=s.a.e
t=y.u
u=A.d_(new A.cu(D.akL,A.a9(A.b([w,F.ed,A.jC(A.a9(A.b([A.eK(r,C.aE,!1,r,!0,C.t,r,A.eV(),s.d,r,r,r,r,r,2,A.bx(r,r,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.h("Companion Name",r,r),!0,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r),C.n,!0,r,!0,r,!1,r,C.ay,r,r,A.b([new A.Bo(30,r)],y.y),r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.aI,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.B,r,C.aJ,r,r,r,r),F.ed,A.dj(!1,E.c0(D.bMH,r),r,r,r,r,r,r,s.gb9Z(),r,r)],t),C.i,C.f,C.h,0,r,C.l),!1,!1,!1,!1,v<u),F.ed,new A.ap(380,150,A.iB(!0,!0,!0,r,C.t,r,C.n,new B.cf5(s,q),J.bo(s.e),r,r,r,C.cH,r,r,!1,C.E,!1),r)],t),C.i,C.f,C.G,0,r,C.l),r),r,C.n,r,r,r,C.E)
return A.eZ(A.b([A.cc(!1,E.c0(M.Ke,r),r,r,!0,r,r,r,r,new B.cf6(d),r,r)],t),r,r,u,r,r,r,r,x,r,r)}}
var z=a.updateTypes(["W<~>()"])
B.ceZ.prototype={
$0(){},
$S:0}
B.cf_.prototype={
$0(){},
$S:0}
B.cf0.prototype={
$0(){},
$S:0}
B.cf1.prototype={
$0(){},
$S:0}
B.cf5.prototype={
$2(d,e){var x,w,v=null,u=this.a,t=u.e
t===$&&A.a()
x=J.v(t,e)
t=A.b([],y.u)
if(x.air(u.a.c))t.push(H.Qs)
t.push(K.dh)
t.push(A.aX(A.C(x.b,v,v,v,v,v,v,v,v,v,v,v,v,v),1,v))
if(!x.air(u.a.c)){w=this.b?new B.cf2(u,x):v
t.push(A.dj(!1,E.c0(D.bM_,v),v,v,v,v,v,v,w,v,v))}if(x.air(u.a.c))t.push(A.dj(!1,E.c0(D.afJ,v),v,v,v,v,v,v,new B.cf3(u,x),v,v))
t.push(A.bP(v,v,v,v,v,v,L.jH,v,v,v,new B.cf4(u,x),v,v,v,v,v))
return new A.U(C.aj,A.ae(t,C.i,v,C.f,C.h,0,v),v)},
$S:133}
B.cf2.prototype={
$0(){return this.a.I9(this.b)},
$S:0}
B.cf3.prototype={
$0(){return this.a.Ia(this.b)},
$S:0}
B.cf4.prototype={
$0(){return this.a.D_(this.b)},
$S:0}
B.cf6.prototype={
$0(){return A.bh(this.a,!1).d4()},
$S:0}
B.bbS.prototype={
$0(){var x=0,w=A.m(y.v),v=this
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.k(null,w)}})
return A.l($async$$0,w)},
$S:1}
B.bbT.prototype={
$0(){var x=0,w=A.m(y.v),v=this
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.k(null,w)}})
return A.l($async$$0,w)},
$S:1};(function installTearOffs(){var x=a._instance_0u
x(B.afG.prototype,"gb9Z","Nr",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.arF,A.jy)
x(B.rD,A.L)
x(B.afG,A.N)
w(A.cY,[B.ceZ,B.cf_,B.cf0,B.cf1,B.cf2,B.cf3,B.cf4,B.cf6,B.bbS,B.bbT])
x(B.cf5,A.em)})()
A.ce(b.typeUniverse,JSON.parse('{"arF":{"jy":["As"]},"rD":{"L":[],"e":[]},"afG":{"N":["rD"]}}'))
var y={x:A.J("W<~>"),y:A.J("u<o0>"),p:A.J("u<CR>"),u:A.J("u<e>"),w:A.J("f"),q:A.J("aeN"),r:A.J("lu"),b:A.J("@"),v:A.J("~")};(function constants(){D.akL=new A.ab(0,480,0,1/0)
D.Q6=new A.at(58615,"MaterialIcons",null,!1)
D.bM_=new A.cg("Sign in someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bM8=new A.cg("If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.afJ=new A.cg("Sign out someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMH=new A.cg("Create Companion",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.afM=new A.cg("Companions",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["sJ2+lxV4o8tpBwTRYYE4/QYD7F4="]=a.current})($__dart_deferred_initializers__);