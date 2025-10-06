((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d_D(d){var x=A.w(["id",d],y.w,y.b)
return new B.arC("CheckRoute",new A.As(d,null),x,C.bR,null,"",null)},
arC:function arC(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
rA:function rA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
afF:function afF(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
cen:function cen(){},
ceo:function ceo(){},
cep:function cep(){},
ceq:function ceq(){},
ceu:function ceu(d,e){this.a=d
this.b=e},
cer:function cer(d,e){this.a=d
this.b=e},
ces:function ces(d,e){this.a=d
this.b=e},
cet:function cet(d,e){this.a=d
this.b=e},
cev:function cev(d){this.a=d},
d8L(d,e,f,g,h){var x=null,w=A.jA(A.bQ(x,x,x,x,x,x,A.aC(C.uh,h,x,x),x,x,x,new B.bbH(e),x,x,x,x,x),!1,!1,!1,!1,d)
return A.b([w,A.jA(A.bQ(x,x,x,x,x,x,A.aC(I.iP,g,x,x),x,x,x,new B.bbI(f),x,x,x,x,x),!1,!1,!1,!1,!d)],y.p)},
bbH:function bbH(d){this.a=d},
bbI:function bbI(d){this.a=d},
bpW(){var x=A.lN("companions",null)
if(x instanceof A.a1Z)return x.e
return null},
bgJ(d,e,f){var x=0,w=A.l(y.v)
var $async$bgJ=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)switch(x){case 0:x=2
return A.d(B.S7(d,e,A.c4D(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null,null,null)),$async$bgJ)
case 2:return A.j(null,w)}})
return A.k($async$bgJ,w)},
bgK(d,e,f){var x=0,w=A.l(y.v)
var $async$bgK=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)switch(x){case 0:x=2
return A.d(A.Ez(d,e,A.c4D(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null,null,null)),$async$bgK)
case 2:return A.j(null,w)}})
return A.k($async$bgK,w)},
bgH(d){var x=0,w=A.l(y.v),v,u,t,s
var $async$bgH=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=$.d66()
t=A.de()
s=$.ep().a
s=(s==null?null:s.e).e
s.toString
v=y.b
x=2
return A.d(u.c6("create_companion_in_organization",A.w(["org",1,"oc",t,"usr",s,"c_name",d],y.w,v),v),$async$bgH)
case 2:return A.j(null,w)}})
return A.k($async$bgH,w)},
S7(d,e,f){var x=0,w=A.l(y.v),v,u,t,s,r,q,p,o,n,m,l
var $async$S7=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)$async$outer:switch(x){case 0:m=f==null
l=m?null:f.a
if(l==null){u=$.e5().ge_().c
l=(u==null?null:u.r).a}u=y.w
t=y.b
x=3
return A.d($.ji().c6("sign_user_to_event",A.w(["ev",e,"usr",l],u,t),t),$async$S7)
case 3:s=h
t=J.a1(s)
switch(t.h(s,"code")){case 200:if(m){m=$.ep().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
A.bg(d,A.n(A.o(r)+"You have been signed in.",null,null),C.a0)}else{r=f.e==="female"?"F":"M"
A.bg(d,A.n(r+"{user} has been signed in.",null,A.w(["user",f.fU()],u,u)),C.a0)}x=1
break $async$outer
case 100:A.bg(d,A.n("Cannot sign in!",null,null)+" "+A.n("Event is over.",null,null),C.aR)
x=1
break $async$outer
case 101:A.bg(d,A.n("Cannot sign in!",null,null)+" "+A.n("Event is full.",null,null),C.aR)
x=1
break $async$outer
case 102:if(m){m=$.ep().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.n(A.o(r)+"You are already signed in at an event of this type.",null,null)
A.bg(d,A.n("Cannot sign in!",null,null)+" "+q,C.aR)}else{r=f.e==="female"?"F":"M"
q=A.n(r+"{user} is already signed in at an event of this type.",null,A.w(["user",f.fU()],u,u))
A.bg(d,A.n("Cannot sign in!",null,null)+" "+q,C.aR)}x=1
break $async$outer
case 103:if(m){m=$.ep().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.n(A.o(r)+"You are already signed in.",null,null)
A.bg(d,A.n("Cannot sign in!",null,null)+" "+q,C.aR)}else{r=f.e==="female"?"F":"M"
q=A.n(r+"{user} is already signed in.",null,A.w(["user",f.fU()],u,u))
A.bg(d,A.n("Cannot sign in!",null,null)+" "+q,C.aR)}x=1
break $async$outer
case 107:if(m){m=$.ep().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.n(A.o(r)+"You are already signed in at another event at the same time.",null,null)
A.bg(d,A.n("Cannot sign in!",null,null)+" "+q,C.aR)}else{r=f.e==="female"?"F":"M"
A.bg(d,A.n(r+"{user} is already signed in at another event at the same time.",null,A.w(["user",f.fU()],u,u)),C.a0)}x=1
break $async$outer
case 104:p=A.n("It's too soon!",null,null)
if(t.h(s,"events_registration_start")!=null){o=A.l8(A.e9(t.h(s,"events_registration_start")),null)
m=y.r
t=d.af(m).r.a
t===$&&A.a()
n=B.dwi(t.gf_(0)).cp(o)
m=d.af(m).r.a
m===$&&A.a()
p=A.n("You can sign in from {time}.",null,A.w(["time",n+" "+A.vZ(m.gf_(0)).cp(o)],u,u))}q=y.q.a(A.lN("workshops",null)).f
if(q!=null&&q.length!==0){A.bg(d,q,C.aR)
x=1
break $async$outer}A.bg(d,A.n("Cannot sign in!",null,null)+" "+p,C.aR)
x=1
break $async$outer
case 105:A.bg(d,A.n("Cannot sign in!",null,null)+" "+A.n("There is already the maximum of men.",null,null),C.aR)
x=1
break $async$outer
case 106:A.bg(d,A.n("Cannot sign in!",null,null)+" "+A.n("There is already the maximum of women.",null,null),C.aR)
x=1
break $async$outer
default:A.bg(d,A.n("Cannot sign in!",null,null),C.aR)
x=1
break $async$outer}case 1:return A.j(v,w)}})
return A.k($async$S7,w)},
dwi(d){var x=A.mL(d,A.oY(),null)
x.toString
x=new A.j3(new A.mj(),x)
x.lT("MMMMEEEEd")
return x}},D,E,G,F,H,I,K,L,M
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[66],B)
D=c[190]
E=c[160]
G=c[91]
F=c[260]
H=c[281]
I=c[169]
K=c[271]
L=c[186]
M=c[283]
B.arC.prototype={}
B.rA.prototype={
K(){return new B.afF(new A.bF(C.af,$.a7()))}}
B.afF.prototype={
S(){this.aa()
this.e=this.a.f},
Nm(){var x=0,w=A.l(y.v),v=this,u
var $async$Nm=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.e
u===$&&A.a()
x=J.br(u)<v.a.e&&v.d.a.a.length!==0?2:3
break
case 2:u=v.d
x=4
return A.d(B.bgH(u.a.a),$async$Nm)
case 4:u.i2(0,C.dS)
x=5
return A.d(A.rE(),$async$Nm)
case 5:v.e=e
if(v.c!=null)v.q(new B.cen())
case 3:return A.j(null,w)}})
return A.k($async$Nm,w)},
D_(d){return this.baN(d)},
baN(d){var x=0,w=A.l(y.v),v,u=this,t
var $async$D_=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=u.c
t.toString
x=3
return A.d(A.hT(t,A.n("Delete companion",null,null),A.n("By deleting your companion you will also sign him/her out of all signed in sessions.",null,null),"Ok"),$async$D_)
case 3:if(!f){x=1
break}x=4
return A.d(G.auS(d),$async$D_)
case 4:t=u.a.r.$0()
x=5
return A.d(y.x.b(t)?t:A.c4(t,y.v),$async$D_)
case 5:x=6
return A.d(A.rE(),$async$D_)
case 6:u.e=f
if(u.c!=null)u.q(new B.ceo())
case 1:return A.j(v,w)}})
return A.k($async$D_,w)},
I7(d){return this.bBk(d)},
bBk(d){var x=0,w=A.l(y.v),v,u=this,t
var $async$I7=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=u.a.d.$0()
if(!(t==null?!1:t)){x=1
break}t=u.c
t.toString
x=3
return A.d(B.bgJ(t,u.a.c,d),$async$I7)
case 3:t=u.a.r.$0()
x=4
return A.d(y.x.b(t)?t:A.c4(t,y.v),$async$I7)
case 4:x=5
return A.d(A.rE(),$async$I7)
case 5:u.e=f
if(u.c!=null)u.q(new B.cep())
case 1:return A.j(v,w)}})
return A.k($async$I7,w)},
I8(d){return this.bBl(d)},
bBl(d){var x=0,w=A.l(y.v),v=this,u
var $async$I8=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(B.bgK(u,v.a.c,d),$async$I8)
case 2:u=v.a.r.$0()
x=3
return A.d(y.x.b(u)?u:A.c4(u,y.v),$async$I8)
case 3:x=4
return A.d(A.rE(),$async$I8)
case 4:v.e=f
if(v.c!=null)v.q(new B.ceq())
return A.j(null,w)}})
return A.k($async$I8,w)},
A(d){var x,w,v,u,t,s=this,r=null,q=s.a.d.$0()
if(q==null)q=!1
x=E.bU(D.afF,r)
w=y.w
w=E.bU(D.bLY,A.w(["max_companions",J.aq(B.bpW())],w,w))
v=s.e
v===$&&A.a()
v=J.br(v)
u=s.a.e
t=y.u
u=A.d5(new A.cs(D.akE,A.a9(A.b([w,F.ec,A.jA(A.a9(A.b([A.eO(r,C.aD,!1,r,!0,C.t,r,A.f0(),s.d,r,r,r,r,r,2,A.bB(r,r,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.n("Companion Name",r,r),!0,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r),C.n,!0,r,!0,r,!1,r,C.aB,r,r,A.b([new A.Bm(30,r)],y.y),r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.aH,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.C,r,C.aI,r,r,r,r),F.ec,A.dk(!1,E.bU(D.bMw,r),r,r,r,r,r,r,s.gb9o(),r,r)],t),C.i,C.f,C.h,0,r,C.l),!1,!1,!1,!1,v<u),F.ec,new A.ap(380,150,A.iA(!0,!0,!0,r,C.t,r,C.n,new B.ceu(s,q),J.br(s.e),r,r,r,C.cH,r,r,!1,C.E,!1),r)],t),C.i,C.f,C.H,0,r,C.l),r),r,C.n,r,r,r,C.E)
return A.f6(A.b([A.cf(!1,E.bU(M.Kd,r),r,r,!0,r,r,r,r,new B.cev(d),r,r)],t),r,r,u,r,r,r,r,x,r,r)}}
var z=a.updateTypes(["W<~>()"])
B.cen.prototype={
$0(){},
$S:0}
B.ceo.prototype={
$0(){},
$S:0}
B.cep.prototype={
$0(){},
$S:0}
B.ceq.prototype={
$0(){},
$S:0}
B.ceu.prototype={
$2(d,e){var x,w,v=null,u=this.a,t=u.e
t===$&&A.a()
x=J.v(t,e)
t=A.b([],y.u)
if(x.ai4(u.a.c))t.push(H.Qm)
t.push(K.dg)
t.push(A.aX(A.D(x.b,v,v,v,v,v,v,v,v,v,v,v,v,v),1,v))
if(!x.ai4(u.a.c)){w=this.b?new B.cer(u,x):v
t.push(A.dk(!1,E.bU(D.bLP,v),v,v,v,v,v,v,w,v,v))}if(x.ai4(u.a.c))t.push(A.dk(!1,E.bU(D.afC,v),v,v,v,v,v,v,new B.ces(u,x),v,v))
t.push(A.bQ(v,v,v,v,v,v,L.jF,v,v,v,new B.cet(u,x),v,v,v,v,v))
return new A.V(C.am,A.ae(t,C.i,v,C.f,C.h,0,v),v)},
$S:123}
B.cer.prototype={
$0(){return this.a.I7(this.b)},
$S:0}
B.ces.prototype={
$0(){return this.a.I8(this.b)},
$S:0}
B.cet.prototype={
$0(){return this.a.D_(this.b)},
$S:0}
B.cev.prototype={
$0(){return A.bh(this.a,!1).d4()},
$S:0}
B.bbH.prototype={
$0(){var x=0,w=A.l(y.v),v=this
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.j(null,w)}})
return A.k($async$$0,w)},
$S:1}
B.bbI.prototype={
$0(){var x=0,w=A.l(y.v),v=this
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.j(null,w)}})
return A.k($async$$0,w)},
$S:1};(function installTearOffs(){var x=a._instance_0u
x(B.afF.prototype,"gb9o","Nm",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.arC,A.jO)
x(B.rA,A.L)
x(B.afF,A.N)
w(A.d1,[B.cen,B.ceo,B.cep,B.ceq,B.cer,B.ces,B.cet,B.cev,B.bbH,B.bbI])
x(B.ceu,A.el)})()
A.ch(b.typeUniverse,JSON.parse('{"arC":{"jO":["As"]},"rA":{"L":[],"e":[]},"afF":{"N":["rA"]}}'))
var y={x:A.J("W<~>"),y:A.J("u<nY>"),p:A.J("u<CQ>"),u:A.J("u<e>"),w:A.J("f"),q:A.J("aeL"),r:A.J("kZ"),b:A.J("@"),v:A.J("~")};(function constants(){D.akE=new A.ab(0,480,0,1/0)
D.Q0=new A.at(58615,"MaterialIcons",null,!1)
D.bLP=new A.ce("Sign in someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLY=new A.ce("If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.afC=new A.ce("Sign out someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMw=new A.ce("Create Companion",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.afF=new A.ce("Companions",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["3wRlXhiZ6BDhRtS4K8ASrm1xgSc="]=a.current})($__dart_deferred_initializers__);