((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_10",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cVd(d){var x=A.w(["id",d],y.w,y.b)
return new B.apW("CheckRoute",new A.zU(d,null),x,C.bP,null,"",null)},
apW:function apW(d,e,f,g,h,i,j){var _=this
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
aeq:function aeq(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
cbk:function cbk(){},
cbl:function cbl(){},
cbm:function cbm(){},
cbn:function cbn(){},
cbr:function cbr(d,e){this.a=d
this.b=e},
cbo:function cbo(d,e){this.a=d
this.b=e},
cbp:function cbp(d,e){this.a=d
this.b=e},
cbq:function cbq(d,e){this.a=d
this.b=e},
cbs:function cbs(d){this.a=d},
d3d(d,e,f,g,h){var x=null,w=A.jR(A.bK(x,x,x,x,x,x,A.aB(C.tB,h,x,x),x,x,x,new B.b97(e),x,x,x,x,x),d)
return A.a([w,A.jR(A.bK(x,x,x,x,x,x,A.aB(K.iv,g,x,x),x,x,x,new B.b98(f),x,x,x,x,x),!d)],y.p)},
b97:function b97(d){this.a=d},
b98:function b98(d){this.a=d},
bno(){var x=A.lw("companions",null)
if(x instanceof A.a0Q)return x.e
return null},
bek(d,e,f){return B.dqX(d,e,f)},
dqX(d,e,f){var x=0,w=A.k(y.v)
var $async$bek=A.f(function(g,h){if(g===1)return A.h(h,w)
while(true)switch(x){case 0:x=2
return A.d(B.Rk(d,e,A.c1I(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null,null)),$async$bek)
case 2:return A.i(null,w)}})
return A.j($async$bek,w)},
bel(d,e,f){return B.dqY(d,e,f)},
dqY(d,e,f){var x=0,w=A.k(y.v)
var $async$bel=A.f(function(g,h){if(g===1)return A.h(h,w)
while(true)switch(x){case 0:x=2
return A.d(A.DR(d,e,A.c1I(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null,null)),$async$bel)
case 2:return A.i(null,w)}})
return A.j($async$bel,w)},
bei(d){return B.dqV(d)},
dqV(d){var x=0,w=A.k(y.v),v,u,t,s
var $async$bei=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:u=$.d0I()
t=A.df()
s=$.eq().a
s=(s==null?null:s.e).e
s.toString
v=y.b
x=2
return A.d(u.c8("create_companion_in_organization",A.w(["org",1,"oc",t,"usr",s,"c_name",d],y.w,v),v),$async$bei)
case 2:return A.i(null,w)}})
return A.j($async$bei,w)},
Rk(d,e,f){return B.dru(d,e,f)},
dru(d,e,f){var x=0,w=A.k(y.v),v,u,t,s,r,q,p,o,n,m,l
var $async$Rk=A.f(function(g,h){if(g===1)return A.h(h,w)
while(true)$async$outer:switch(x){case 0:m=f==null
l=m?null:f.a
if(l==null){u=$.e2().gdO().c
l=(u==null?null:u.r).a}u=y.w
t=y.b
x=3
return A.d($.jf().c8("sign_user_to_event",A.w(["ev",e,"usr",l],u,t),t),$async$Rk)
case 3:s=h
t=J.a_(s)
switch(t.h(s,"code")){case 200:if(m){m=$.eq().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
A.bh(d,A.n(A.o(r)+"You have been signed in.",null,null),C.a4)}else{r=f.e==="female"?"F":"M"
A.bh(d,A.n(r+"{user} has been signed in.",null,A.w(["user",f.ij()],u,u)),C.a4)}x=1
break $async$outer
case 100:A.bh(d,A.n("Cannot sign in!",null,null)+" "+A.n("Event is over.",null,null),C.aO)
x=1
break $async$outer
case 101:A.bh(d,A.n("Cannot sign in!",null,null)+" "+A.n("Event is full.",null,null),C.aO)
x=1
break $async$outer
case 102:if(m){m=$.eq().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.n(A.o(r)+"You are already signed in at an event of this type.",null,null)
A.bh(d,A.n("Cannot sign in!",null,null)+" "+q,C.aO)}else{r=f.e==="female"?"F":"M"
q=A.n(r+"{user} is already signed in at an event of this type.",null,A.w(["user",f.ij()],u,u))
A.bh(d,A.n("Cannot sign in!",null,null)+" "+q,C.aO)}x=1
break $async$outer
case 103:if(m){m=$.eq().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.n(A.o(r)+"You are already signed in.",null,null)
A.bh(d,A.n("Cannot sign in!",null,null)+" "+q,C.aO)}else{r=f.e==="female"?"F":"M"
q=A.n(r+"{user} is already signed in.",null,A.w(["user",f.ij()],u,u))
A.bh(d,A.n("Cannot sign in!",null,null)+" "+q,C.aO)}x=1
break $async$outer
case 107:if(m){m=$.eq().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.n(A.o(r)+"You are already signed in at another event at the same time.",null,null)
A.bh(d,A.n("Cannot sign in!",null,null)+" "+q,C.aO)}else{r=f.e==="female"?"F":"M"
A.bh(d,A.n(r+"{user} is already signed in at another event at the same time.",null,A.w(["user",f.ij()],u,u)),C.a4)}x=1
break $async$outer
case 104:p=A.n("It's too soon!",null,null)
if(t.h(s,"events_registration_start")!=null){o=A.kY(A.dW(t.h(s,"events_registration_start")),null)
m=y.r
t=d.a8(m).r.a
t===$&&A.b()
n=B.dqy(t.geW(0)).cl(o)
m=d.a8(m).r.a
m===$&&A.b()
p=A.n("You can sign in from {time}.",null,A.w(["time",n+" "+A.vB(m.geW(0)).cl(o)],u,u))}q=y.q.a(A.lw("workshops",null)).f
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
break $async$outer}case 1:return A.i(v,w)}})
return A.j($async$Rk,w)},
dqy(d){var x=A.n5(d,A.oJ(),null)
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
K=c[171]
L=c[271]
M=c[187]
N=c[283]
B.apW.prototype={}
B.ri.prototype={
K(){return new B.aeq(new A.bS(C.ah,$.a8()))}}
B.aeq.prototype={
U(){this.aa()
this.e=this.a.f},
MU(){var x=0,w=A.k(y.v),v=this,u
var $async$MU=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.e
u===$&&A.b()
x=J.bi(u)<v.a.e&&v.d.a.a.length!==0?2:3
break
case 2:u=v.d
x=4
return A.d(B.bei(u.a.a),$async$MU)
case 4:u.hQ(0,C.dJ)
x=5
return A.d(A.rl(),$async$MU)
case 5:v.e=e
if(v.c!=null)v.q(new B.cbk())
case 3:return A.i(null,w)}})
return A.j($async$MU,w)},
Ct(d){return this.b8y(d)},
b8y(d){var x=0,w=A.k(y.v),v,u=this,t
var $async$Ct=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=u.c
t.toString
x=3
return A.d(G.id(t,A.n("Delete companion",null,null),A.n("By deleting your companion you will also sign him/her out of all signed in sessions.",null,null),"Ok"),$async$Ct)
case 3:if(!f){x=1
break}x=4
return A.d(H.atd(d),$async$Ct)
case 4:t=u.a.r.$0()
x=5
return A.d(y.x.b(t)?t:A.c1(t,y.v),$async$Ct)
case 5:x=6
return A.d(A.rl(),$async$Ct)
case 6:u.e=f
if(u.c!=null)u.q(new B.cbl())
case 1:return A.i(v,w)}})
return A.j($async$Ct,w)},
HB(d){return this.byo(d)},
byo(d){var x=0,w=A.k(y.v),v,u=this,t
var $async$HB=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=u.a.d.$0()
if(!(t==null?!1:t)){x=1
break}t=u.c
t.toString
x=3
return A.d(B.bek(t,u.a.c,d),$async$HB)
case 3:t=u.a.r.$0()
x=4
return A.d(y.x.b(t)?t:A.c1(t,y.v),$async$HB)
case 4:x=5
return A.d(A.rl(),$async$HB)
case 5:u.e=f
if(u.c!=null)u.q(new B.cbm())
case 1:return A.i(v,w)}})
return A.j($async$HB,w)},
HC(d){return this.byp(d)},
byp(d){var x=0,w=A.k(y.v),v=this,u
var $async$HC=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(B.bel(u,v.a.c,d),$async$HC)
case 2:u=v.a.r.$0()
x=3
return A.d(y.x.b(u)?u:A.c1(u,y.v),$async$HC)
case 3:x=4
return A.d(A.rl(),$async$HC)
case 4:v.e=f
if(v.c!=null)v.q(new B.cbn())
return A.i(null,w)}})
return A.j($async$HC,w)},
B(d){var x,w,v,u,t,s=this,r=null,q=s.a.d.$0()
if(q==null)q=!1
x=E.bN(D.af6,r)
w=y.w
w=E.bN(D.bKO,A.w(["max_companions",J.ap(B.bno())],w,w))
v=s.e
v===$&&A.b()
v=J.bi(v)
u=s.a.e
t=y.u
u=A.d7(new A.cC(D.ajY,A.aa(A.a([w,F.e3,A.jR(A.aa(A.a([A.f2(!0,C.aG,!1,r,!0,C.u,r,A.fj(),s.d,r,r,r,r,r,2,A.bL(r,r,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.n("Companion Name",r,r),!0,!0,r,r,r,r,r,r,r,r,r,r,r,r,r),C.o,!0,r,!0,r,!1,r,C.aB,r,A.a([new A.KO(30,r)],y.y),r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.aR,r,r,C.aF,C.aC,r,r,r,r,r,r,r,!0,C.E,r,C.aU,r,r,r,r),F.e3,A.dq(!1,E.bN(D.bLj,r),r,r,r,r,r,r,s.gb77(),r,r)],t),C.i,C.f,C.h,0,r,C.l),v<u),F.e3,new A.ao(380,150,A.j6(!0,!0,!0,r,C.u,r,C.o,new B.cbr(s,q),J.bi(s.e),r,r,r,C.cC,r,r,!1,C.G,!1),r)],t),C.i,C.f,C.I,0,r,C.l),r),r,C.o,r,r,r,C.G)
return A.fa(A.a([A.cm(!1,E.bN(N.Jd,r),r,r,r,r,r,r,new B.cbs(d),r,r)],t),r,r,u,r,r,r,r,x,r,r)}}
var z=a.updateTypes(["V<~>()"])
B.cbk.prototype={
$0(){},
$S:0}
B.cbl.prototype={
$0(){},
$S:0}
B.cbm.prototype={
$0(){},
$S:0}
B.cbn.prototype={
$0(){},
$S:0}
B.cbr.prototype={
$2(d,e){var x,w,v=null,u=this.a,t=u.e
t===$&&A.b()
x=J.v(t,e)
t=A.a([],y.u)
if(x.agZ(u.a.c))t.push(I.Pv)
t.push(L.d9)
t.push(A.b_(A.E(x.b,v,v,v,v,v,v,v,v,v,v,v,v,v),1,v))
if(!x.agZ(u.a.c)){w=this.b?new B.cbo(u,x):v
t.push(A.dq(!1,E.bN(D.bKG,v),v,v,v,v,v,v,w,v,v))}if(x.agZ(u.a.c))t.push(A.dq(!1,E.bN(D.af3,v),v,v,v,v,v,v,new B.cbp(u,x),v,v))
t.push(A.bK(v,v,v,v,v,v,M.jk,v,v,v,new B.cbq(u,x),v,v,v,v,v))
return new A.X(C.aq,A.ae(t,C.i,v,C.f,C.h,0,v),v)},
$S:122}
B.cbo.prototype={
$0(){return this.a.HB(this.b)},
$S:0}
B.cbp.prototype={
$0(){return this.a.HC(this.b)},
$S:0}
B.cbq.prototype={
$0(){return this.a.Ct(this.b)},
$S:0}
B.cbs.prototype={
$0(){return A.bl(this.a,!1).de()},
$S:0}
B.b97.prototype={
$0(){var x=0,w=A.k(y.v),v=this
var $async$$0=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.i(null,w)}})
return A.j($async$$0,w)},
$S:1}
B.b98.prototype={
$0(){var x=0,w=A.k(y.v),v=this
var $async$$0=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.i(null,w)}})
return A.j($async$$0,w)},
$S:1};(function installTearOffs(){var x=a._instance_0u
x(B.aeq.prototype,"gb77","MU",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.apW,A.jL)
x(B.ri,A.M)
x(B.aeq,A.N)
w(A.cV,[B.cbk,B.cbl,B.cbm,B.cbn,B.cbo,B.cbp,B.cbq,B.cbs,B.b97,B.b98])
x(B.cbr,A.eu)})()
A.cg(b.typeUniverse,JSON.parse('{"apW":{"jL":["zU"]},"ri":{"M":[],"e":[]},"aeq":{"N":["ri"]}}'))
var y={x:A.F("V<~>"),y:A.F("u<nE>"),p:A.F("u<C6>"),u:A.F("u<e>"),w:A.F("l"),q:A.F("adw"),r:A.F("kP"),b:A.F("@"),v:A.F("~")};(function constants(){D.ajY=new A.ab(0,480,0,1/0)
D.P9=new A.at(58615,"MaterialIcons",null,!1)
D.bKG=new A.cw("Sign in someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bKO=new A.cw("If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.af3=new A.cw("Sign out someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLj=new A.cw("Create Companion",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.af6=new A.cw("Companions",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_10",e:"endPart",h:b})})($__dart_deferred_initializers__,"h+z0KeGAVi7DaKFe/jlCrkf+IbM=");