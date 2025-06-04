((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_8",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,G,H,I,K,L,F,M,N,O,P,Q,R,B={
cGT(d){var x=A.z(["id",d],y.w,y.b)
return new B.anA("CheckRoute",new A.CE(d,null),x,C.c1,null,"",null)},
anA:function anA(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
qA:function qA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
act:function act(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
c2h:function c2h(){},
c2i:function c2i(){},
c2j:function c2j(){},
c2k:function c2k(){},
c2o:function c2o(d,e){this.a=d
this.b=e},
c2l:function c2l(d,e){this.a=d
this.b=e},
c2m:function c2m(d,e){this.a=d
this.b=e},
c2n:function c2n(d,e){this.a=d
this.b=e},
c2p:function c2p(d){this.a=d},
cPu(d,e,f,g,h){var x=null,w=A.jm(A.bW(x,x,x,x,x,x,A.aW(R.Du,h,x,x),x,x,x,new B.b4W(e),x,x,x,x,x),d)
return A.a([w,A.jm(A.bW(x,x,x,x,x,x,A.aW(N.j2,g,x,x),x,x,x,new B.b4X(f),x,x,x,x,x),!d)],y.p)},
b4W:function b4W(d){this.a=d},
b4X:function b4X(d){this.a=d},
bhG(){var x=A.uZ("companions",null)
if(x instanceof A.Pp)return x.e
return null},
b9I(d,e,f){return B.dbL(d,e,f)},
dbL(d,e,f){var x=0,w=A.l(y.v)
var $async$b9I=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)switch(x){case 0:x=2
return A.d(B.PP(d,e,A.bUs(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null)),$async$b9I)
case 2:return A.j(null,w)}})
return A.k($async$b9I,w)},
b9J(d,e,f){return B.dbM(d,e,f)},
dbM(d,e,f){var x=0,w=A.l(y.v)
var $async$b9J=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)switch(x){case 0:x=2
return A.d(A.CS(d,e,A.bUs(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null)),$async$b9J)
case 2:return A.j(null,w)}})
return A.k($async$b9J,w)},
b9G(d){return B.dbJ(d)},
dbJ(d){var x=0,w=A.l(y.v),v,u,t,s
var $async$b9G=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=$.cN1()
t=A.dg()
s=$.fM
s=(s==null?null:s.e).c
s.toString
v=y.b
x=2
return A.d(u.dm("create_companion_in_organization",A.z(["org",1,"oc",t,"usr",s,"c_name",d],y.w,v),v),$async$b9G)
case 2:return A.j(null,w)}})
return A.k($async$b9G,w)},
PP(d,e,f){return B.dcg(d,e,f)},
dcg(d,e,f){var x=0,w=A.l(y.v),v,u,t,s,r,q,p,o,n,m,l
var $async$PP=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)$async$outer:switch(x){case 0:m=f==null
l=m?null:f.a
if(l==null)l=$.dM().gdv().c.a
u=y.w
t=y.b
x=3
return A.d($.iO().dm("sign_user_to_event",A.z(["ev",e,"usr",l],u,t),t),$async$PP)
case 3:s=h
t=J.a0(s)
switch(t.h(s,"code")){case 200:if(m)A.bJ(d,A.r(($.oa.e==="female"?"F":"M")+"You have been signed in.",null),C.ac)
else{r=f.e==="female"?"F":"M"
A.bJ(d,A.r(r+"{user} has been signed in.",A.z(["user",f.jK()],u,u)),C.ac)}x=1
break $async$outer
case 100:A.bJ(d,A.r("Cannot sign in!",null)+" "+A.r("Event is over.",null),C.bb)
x=1
break $async$outer
case 101:A.bJ(d,A.r("Cannot sign in!",null)+" "+A.r("Event is full.",null),C.bb)
x=1
break $async$outer
case 102:if(m){q=A.r(($.oa.e==="female"?"F":"M")+"You are already signed in at an event of this type.",null)
A.bJ(d,A.r("Cannot sign in!",null)+" "+q,C.bb)}else{r=f.e==="female"?"F":"M"
q=A.r(r+"{user} is already signed in at an event of this type.",A.z(["user",f.jK()],u,u))
A.bJ(d,A.r("Cannot sign in!",null)+" "+q,C.bb)}x=1
break $async$outer
case 103:if(m){q=A.r(($.oa.e==="female"?"F":"M")+"You are already signed in.",null)
A.bJ(d,A.r("Cannot sign in!",null)+" "+q,C.bb)}else{r=f.e==="female"?"F":"M"
q=A.r(r+"{user} is already signed in.",A.z(["user",f.jK()],u,u))
A.bJ(d,A.r("Cannot sign in!",null)+" "+q,C.bb)}x=1
break $async$outer
case 107:if(m){q=A.r(($.oa.e==="female"?"F":"M")+"You are already signed in at another event at the same time.",null)
A.bJ(d,A.r("Cannot sign in!",null)+" "+q,C.bb)}else{r=f.e==="female"?"F":"M"
A.bJ(d,A.r(r+"{user} is already signed in at another event at the same time.",A.z(["user",f.jK()],u,u)),C.ac)}x=1
break $async$outer
case 104:p=A.r("It's too soon!",null)
if(t.h(s,"events_registration_start")!=null){o=A.mC(A.et(t.h(s,"events_registration_start")),null)
m=y.r
t=d.af(m).r.a
t===$&&A.b()
n=B.dbt(t.gf1(0)).da(o)
m=d.af(m).r.a
m===$&&A.b()
p=A.r("You can sign in from {time}.",A.z(["time",n+" "+A.wW(m.gf1(0)).da(o)],u,u))}q=y.q.a(A.uZ("workshops",null)).f
if(q!=null&&q.length!==0){A.bJ(d,q,C.bb)
x=1
break $async$outer}A.bJ(d,A.r("Cannot sign in!",null)+" "+p,C.bb)
x=1
break $async$outer
case 105:A.bJ(d,A.r("Cannot sign in!",null)+" "+A.r("There is already the maximum of men.",null),C.bb)
x=1
break $async$outer
case 106:A.bJ(d,A.r("Cannot sign in!",null)+" "+A.r("There is already the maximum of women.",null),C.bb)
x=1
break $async$outer
default:A.bJ(d,A.r("Cannot sign in!",null),C.bb)
x=1
break $async$outer}case 1:return A.j(v,w)}})
return A.k($async$PP,w)},
dbt(d){var x=A.nd(d,A.p_(),null)
x.toString
x=new A.iT(new A.m6(),x)
x.me("MMMMEEEEd")
return x}},D
J=c[1]
A=c[0]
C=c[2]
E=c[171]
G=c[159]
H=c[140]
I=c[98]
K=c[166]
L=c[174]
F=c[271]
M=c[293]
N=c[178]
O=c[270]
P=c[199]
Q=c[295]
R=c[311]
B=a.updateHolder(c[69],B)
D=c[203]
B.anA.prototype={}
B.qA.prototype={
M(){return new B.act(new A.cp(C.aw,$.a9()))}}
B.act.prototype={
S(){this.ah()
this.e=this.a.f},
Mi(){var x=0,w=A.l(y.v),v=this,u
var $async$Mi=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.e
u===$&&A.b()
x=J.bz(u)<v.a.e&&v.d.a.a.length!==0?2:3
break
case 2:u=v.d
x=4
return A.d(B.b9G(u.a.a),$async$Mi)
case 4:u.iR(0,C.h5)
x=5
return A.d(A.qE(),$async$Mi)
case 5:v.e=e
if(v.c!=null)v.A(new B.c2h())
case 3:return A.j(null,w)}})
return A.k($async$Mi,w)},
BS(d){return this.b5d(d)},
b5d(d){var x=0,w=A.l(y.v),v,u=this,t
var $async$BS=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=u.c
t.toString
x=3
return A.d(H.kX(t,A.r("Delete companion",null),A.r("By deleting your companion you will also sign him/her out of all signed in sessions.",null),"Ok"),$async$BS)
case 3:if(!f){x=1
break}x=4
return A.d(I.aqJ(d),$async$BS)
case 4:t=u.a.r.$0()
x=5
return A.d(y.x.b(t)?t:A.c9(t,y.v),$async$BS)
case 5:x=6
return A.d(A.qE(),$async$BS)
case 6:u.e=f
if(u.c!=null)u.A(new B.c2i())
case 1:return A.j(v,w)}})
return A.k($async$BS,w)},
H2(d){return this.bue(d)},
bue(d){var x=0,w=A.l(y.v),v,u=this,t
var $async$H2=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=u.a.d.$0()
if(!(t==null?!1:t)){x=1
break}t=u.c
t.toString
x=3
return A.d(B.b9I(t,u.a.c,d),$async$H2)
case 3:t=u.a.r.$0()
x=4
return A.d(y.x.b(t)?t:A.c9(t,y.v),$async$H2)
case 4:x=5
return A.d(A.qE(),$async$H2)
case 5:u.e=f
if(u.c!=null)u.A(new B.c2j())
case 1:return A.j(v,w)}})
return A.k($async$H2,w)},
H3(d){return this.buf(d)},
buf(d){var x=0,w=A.l(y.v),v=this,u
var $async$H3=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(B.b9J(u,v.a.c,d),$async$H3)
case 2:u=v.a.r.$0()
x=3
return A.d(y.x.b(u)?u:A.c9(u,y.v),$async$H3)
case 3:x=4
return A.d(A.qE(),$async$H3)
case 4:v.e=f
if(v.c!=null)v.A(new B.c2k())
return A.j(null,w)}})
return A.k($async$H3,w)},
B(d){var x,w,v,u,t,s=this,r=null,q=s.a.d.$0()
if(q==null)q=!1
x=E.bv(D.ae_,r)
w=y.w
w=E.bv(D.bJ6,A.z(["max_companions",J.aq(B.bhG())],w,w))
v=s.e
v===$&&A.b()
v=J.bz(v)
u=s.a.e
t=y.u
u=A.dE(new A.cE(D.aiQ,A.ah(A.a([w,F.ec,A.jm(A.ah(A.a([A.fE(!0,C.aR,!1,r,!0,C.v,r,A.fT(),s.d,r,r,r,r,r,2,A.cb(r,r,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.r("Companion Name",r),!0,!0,r,r,r,r,r,r,r,r,r,r,r,r,r),C.r,!0,r,!0,r,!1,r,C.aL,r,A.a([new A.JD(30,r)],y.y),r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.b2,r,r,C.aO,C.aM,r,r,r,r,r,r,r,!0,C.H,r,C.b4,r,r,r,r),F.ec,A.dy(!1,E.bv(D.bJB,r),r,r,r,r,r,r,s.gb3P(),r,r)],t),C.j,C.f,C.i,0,r,C.m),v<u),F.ec,new A.ao(380,150,K.mc(!0,!0,!0,r,C.v,r,C.r,new B.c2o(s,q),J.bz(s.e),r,r,r,L.dQ,r,r,!1,C.I,!1),r)],t),C.j,C.f,C.U,0,r,C.m),r),r,C.r,r,r,r,C.I)
return G.iC(A.a([A.dm(!1,E.bv(Q.Ih,r),r,r,r,r,r,r,new B.c2p(d),r,r)],t),r,r,u,r,r,r,r,x,r,r)}}
var z=a.updateTypes(["X<~>()"])
B.c2h.prototype={
$0(){},
$S:0}
B.c2i.prototype={
$0(){},
$S:0}
B.c2j.prototype={
$0(){},
$S:0}
B.c2k.prototype={
$0(){},
$S:0}
B.c2o.prototype={
$2(d,e){var x,w,v=null,u=this.a,t=u.e
t===$&&A.b()
x=J.v(t,e)
t=A.a([],y.u)
if(x.afh(u.a.c))t.push(M.Oi)
t.push(O.fz)
t.push(A.bh(A.O(x.b,v,v,v,v,v,v,v,v,v,v,v,v,v),1,v))
if(!x.afh(u.a.c)){w=this.b?new B.c2l(u,x):v
t.push(A.dy(!1,E.bv(D.bIZ,v),v,v,v,v,v,v,w,v,v))}if(x.afh(u.a.c))t.push(A.dy(!1,E.bv(D.adX,v),v,v,v,v,v,v,new B.c2m(u,x),v,v))
t.push(A.bW(v,v,v,v,v,v,P.j3,v,v,v,new B.c2n(u,x),v,v,v,v,v))
return new A.a2(C.au,A.at(t,C.j,C.f,C.i,0,v),v)},
$S:111}
B.c2l.prototype={
$0(){return this.a.H2(this.b)},
$S:0}
B.c2m.prototype={
$0(){return this.a.H3(this.b)},
$S:0}
B.c2n.prototype={
$0(){return this.a.BS(this.b)},
$S:0}
B.c2p.prototype={
$0(){return A.bO(this.a,!1).dM()},
$S:0}
B.b4W.prototype={
$0(){var x=0,w=A.l(y.v),v=this
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2}
B.b4X.prototype={
$0(){var x=0,w=A.l(y.v),v=this
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(B.act.prototype,"gb3P","Mi",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.anA,A.jg)
x(B.qA,A.J)
x(B.act,A.N)
w(A.cU,[B.c2h,B.c2i,B.c2j,B.c2k,B.c2l,B.c2m,B.c2n,B.c2p,B.b4W,B.b4X])
x(B.c2o,A.es)})()
A.c7(b.typeUniverse,JSON.parse('{"anA":{"jg":["CE"]},"qA":{"J":[],"e":[]},"act":{"N":["qA"]}}'))
var y={x:A.E("X<~>"),y:A.E("u<n_>"),p:A.E("u<Bc>"),u:A.E("u<e>"),w:A.E("m"),q:A.E("VH"),r:A.E("kj"),b:A.E("@"),v:A.E("~")};(function constants(){D.aiQ=new A.ab(0,480,0,1/0)
D.O0=new A.aB(58615,"MaterialIcons",null,!1)
D.bIZ=new A.cv("Sign in someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJ6=new A.cv("If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adX=new A.cv("Sign out someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJB=new A.cv("Create Companion",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ae_=new A.cv("Companions",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_8",e:"endPart",h:b})})($__dart_deferred_initializers__,"UqZSdRQiwTXTEvhke38tsfYP4no=");