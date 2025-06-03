((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_9",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,G,H,I,K,L,F,M,N,O,P,Q,R,B={
cGJ(d){var x=A.z(["id",d],y.w,y.b)
return new B.anB("CheckRoute",new A.CF(d,null),x,C.c1,null,"",null)},
anB:function anB(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
qy:function qy(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
acu:function acu(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
c2d:function c2d(){},
c2e:function c2e(){},
c2f:function c2f(){},
c2g:function c2g(){},
c2k:function c2k(d,e){this.a=d
this.b=e},
c2h:function c2h(d,e){this.a=d
this.b=e},
c2i:function c2i(d,e){this.a=d
this.b=e},
c2j:function c2j(d,e){this.a=d
this.b=e},
c2l:function c2l(d){this.a=d},
cPl(d,e,f,g,h){var x=null,w=A.jm(A.bW(x,x,x,x,x,x,A.aW(R.Du,h,x,x),x,x,x,new B.b4S(e),x,x,x,x,x),d)
return A.a([w,A.jm(A.bW(x,x,x,x,x,x,A.aW(N.j2,g,x,x),x,x,x,new B.b4T(f),x,x,x,x,x),!d)],y.p)},
b4S:function b4S(d){this.a=d},
b4T:function b4T(d){this.a=d},
bhC(){var x=A.v_("companions",null)
if(x instanceof A.Po)return x.e
return null},
b9E(d,e,f){return B.dbB(d,e,f)},
dbB(d,e,f){var x=0,w=A.l(y.v)
var $async$b9E=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)switch(x){case 0:x=2
return A.d(B.PO(d,e,A.bUo(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null)),$async$b9E)
case 2:return A.j(null,w)}})
return A.k($async$b9E,w)},
b9F(d,e,f){return B.dbC(d,e,f)},
dbC(d,e,f){var x=0,w=A.l(y.v)
var $async$b9F=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)switch(x){case 0:x=2
return A.d(A.CU(d,e,A.bUo(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null)),$async$b9F)
case 2:return A.j(null,w)}})
return A.k($async$b9F,w)},
b9C(d){return B.dbz(d)},
dbz(d){var x=0,w=A.l(y.v),v,u,t,s
var $async$b9C=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=$.cMT()
t=A.dg()
s=$.fR
s=(s==null?null:s.e).c
s.toString
v=y.b
x=2
return A.d(u.dm("create_companion_in_organization",A.z(["org",1,"oc",t,"usr",s,"c_name",d],y.w,v),v),$async$b9C)
case 2:return A.j(null,w)}})
return A.k($async$b9C,w)},
PO(d,e,f){return B.dc6(d,e,f)},
dc6(d,e,f){var x=0,w=A.l(y.v),v,u,t,s,r,q,p,o,n,m,l
var $async$PO=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)$async$outer:switch(x){case 0:m=f==null
l=m?null:f.a
if(l==null)l=$.dN().gdv().c.a
u=y.w
t=y.b
x=3
return A.d($.iO().dm("sign_user_to_event",A.z(["ev",e,"usr",l],u,t),t),$async$PO)
case 3:s=h
t=J.a0(s)
switch(t.h(s,"code")){case 200:if(m)A.bJ(d,A.r(($.o9.e==="female"?"F":"M")+"You have been signed in.",null),C.ac)
else{r=f.e==="female"?"F":"M"
A.bJ(d,A.r(r+"{user} has been signed in.",A.z(["user",f.jK()],u,u)),C.ac)}x=1
break $async$outer
case 100:A.bJ(d,A.r("Cannot sign in!",null)+" "+A.r("Event is over.",null),C.bb)
x=1
break $async$outer
case 101:A.bJ(d,A.r("Cannot sign in!",null)+" "+A.r("Event is full.",null),C.bb)
x=1
break $async$outer
case 102:if(m){q=A.r(($.o9.e==="female"?"F":"M")+"You are already signed in at an event of this type.",null)
A.bJ(d,A.r("Cannot sign in!",null)+" "+q,C.bb)}else{r=f.e==="female"?"F":"M"
q=A.r(r+"{user} is already signed in at an event of this type.",A.z(["user",f.jK()],u,u))
A.bJ(d,A.r("Cannot sign in!",null)+" "+q,C.bb)}x=1
break $async$outer
case 103:if(m){q=A.r(($.o9.e==="female"?"F":"M")+"You are already signed in.",null)
A.bJ(d,A.r("Cannot sign in!",null)+" "+q,C.bb)}else{r=f.e==="female"?"F":"M"
q=A.r(r+"{user} is already signed in.",A.z(["user",f.jK()],u,u))
A.bJ(d,A.r("Cannot sign in!",null)+" "+q,C.bb)}x=1
break $async$outer
case 107:if(m){q=A.r(($.o9.e==="female"?"F":"M")+"You are already signed in at another event at the same time.",null)
A.bJ(d,A.r("Cannot sign in!",null)+" "+q,C.bb)}else{r=f.e==="female"?"F":"M"
A.bJ(d,A.r(r+"{user} is already signed in at another event at the same time.",A.z(["user",f.jK()],u,u)),C.ac)}x=1
break $async$outer
case 104:p=A.r("It's too soon!",null)
if(t.h(s,"events_registration_start")!=null){o=A.mB(A.et(t.h(s,"events_registration_start")),null)
m=y.r
t=d.af(m).r.a
t===$&&A.b()
n=B.dbj(t.gf0(0)).dc(o)
m=d.af(m).r.a
m===$&&A.b()
p=A.r("You can sign in from {time}.",A.z(["time",n+" "+A.CS(m.gf0(0)).dc(o)],u,u))}q=y.q.a(A.v_("workshops",null)).f
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
return A.k($async$PO,w)},
dbj(d){var x=A.ne(d,A.p_(),null)
x.toString
x=new A.iT(new A.m5(),x)
x.me("MMMMEEEEd")
return x}},D
J=c[1]
A=c[0]
C=c[2]
E=c[176]
G=c[166]
H=c[143]
I=c[99]
K=c[171]
L=c[179]
F=c[278]
M=c[300]
N=c[183]
O=c[277]
P=c[204]
Q=c[302]
R=c[319]
B=a.updateHolder(c[69],B)
D=c[208]
B.anB.prototype={}
B.qy.prototype={
M(){return new B.acu(new A.cp(C.aw,$.a9()))}}
B.acu.prototype={
S(){this.ah()
this.e=this.a.f},
Mh(){var x=0,w=A.l(y.v),v=this,u
var $async$Mh=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.e
u===$&&A.b()
x=J.bz(u)<v.a.e&&v.d.a.a.length!==0?2:3
break
case 2:u=v.d
x=4
return A.d(B.b9C(u.a.a),$async$Mh)
case 4:u.iQ(0,C.h4)
x=5
return A.d(A.qC(),$async$Mh)
case 5:v.e=e
if(v.c!=null)v.A(new B.c2d())
case 3:return A.j(null,w)}})
return A.k($async$Mh,w)},
BR(d){return this.b5c(d)},
b5c(d){var x=0,w=A.l(y.v),v,u=this,t
var $async$BR=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=u.c
t.toString
x=3
return A.d(H.kX(t,A.r("Delete companion",null),A.r("By deleting your companion you will also sign him/her out of all signed in sessions.",null),"Ok"),$async$BR)
case 3:if(!f){x=1
break}x=4
return A.d(I.aqK(d),$async$BR)
case 4:t=u.a.r.$0()
x=5
return A.d(y.x.b(t)?t:A.ca(t,y.v),$async$BR)
case 5:x=6
return A.d(A.qC(),$async$BR)
case 6:u.e=f
if(u.c!=null)u.A(new B.c2e())
case 1:return A.j(v,w)}})
return A.k($async$BR,w)},
H1(d){return this.bud(d)},
bud(d){var x=0,w=A.l(y.v),v,u=this,t
var $async$H1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=u.a.d.$0()
if(!(t==null?!1:t)){x=1
break}t=u.c
t.toString
x=3
return A.d(B.b9E(t,u.a.c,d),$async$H1)
case 3:t=u.a.r.$0()
x=4
return A.d(y.x.b(t)?t:A.ca(t,y.v),$async$H1)
case 4:x=5
return A.d(A.qC(),$async$H1)
case 5:u.e=f
if(u.c!=null)u.A(new B.c2f())
case 1:return A.j(v,w)}})
return A.k($async$H1,w)},
H2(d){return this.bue(d)},
bue(d){var x=0,w=A.l(y.v),v=this,u
var $async$H2=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(B.b9F(u,v.a.c,d),$async$H2)
case 2:u=v.a.r.$0()
x=3
return A.d(y.x.b(u)?u:A.ca(u,y.v),$async$H2)
case 3:x=4
return A.d(A.qC(),$async$H2)
case 4:v.e=f
if(v.c!=null)v.A(new B.c2g())
return A.j(null,w)}})
return A.k($async$H2,w)},
B(d){var x,w,v,u,t,s=this,r=null,q=s.a.d.$0()
if(q==null)q=!1
x=E.bv(D.ae0,r)
w=y.w
w=E.bv(D.bJ7,A.z(["max_companions",J.aq(B.bhC())],w,w))
v=s.e
v===$&&A.b()
v=J.bz(v)
u=s.a.e
t=y.u
u=A.dD(new A.cE(D.aiR,A.ah(A.a([w,F.ec,A.jm(A.ah(A.a([A.fD(!0,C.aR,!1,r,!0,C.v,r,A.fT(),s.d,r,r,r,r,r,2,A.cc(r,r,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.r("Companion Name",r),!0,!0,r,r,r,r,r,r,r,r,r,r,r,r,r),C.r,!0,r,!0,r,!1,r,C.aL,r,A.a([new A.JE(30,r)],y.y),r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.b2,r,r,C.aO,C.aM,r,r,r,r,r,r,r,!0,C.H,r,C.b4,r,r,r,r),F.ec,A.dx(!1,E.bv(D.bJC,r),r,r,r,r,r,r,s.gb3O(),r,r)],t),C.j,C.f,C.i,0,r,C.m),v<u),F.ec,new A.ao(380,150,K.mb(!0,!0,!0,r,C.v,r,C.r,new B.c2k(s,q),J.bz(s.e),r,r,r,L.dQ,r,r,!1,C.I,!1),r)],t),C.j,C.f,C.U,0,r,C.m),r),r,C.r,r,r,r,C.I)
return G.iD(A.a([A.dl(!1,E.bv(Q.Ih,r),r,r,r,r,r,r,new B.c2l(d),r,r)],t),r,r,u,r,r,r,r,x,r,r)}}
var z=a.updateTypes(["X<~>()"])
B.c2d.prototype={
$0(){},
$S:0}
B.c2e.prototype={
$0(){},
$S:0}
B.c2f.prototype={
$0(){},
$S:0}
B.c2g.prototype={
$0(){},
$S:0}
B.c2k.prototype={
$2(d,e){var x,w,v=null,u=this.a,t=u.e
t===$&&A.b()
x=J.v(t,e)
t=A.a([],y.u)
if(x.aff(u.a.c))t.push(M.Oj)
t.push(O.fz)
t.push(A.bh(A.P(x.b,v,v,v,v,v,v,v,v,v,v,v,v,v),1,v))
if(!x.aff(u.a.c)){w=this.b?new B.c2h(u,x):v
t.push(A.dx(!1,E.bv(D.bJ_,v),v,v,v,v,v,v,w,v,v))}if(x.aff(u.a.c))t.push(A.dx(!1,E.bv(D.adY,v),v,v,v,v,v,v,new B.c2i(u,x),v,v))
t.push(A.bW(v,v,v,v,v,v,P.j3,v,v,v,new B.c2j(u,x),v,v,v,v,v))
return new A.a2(C.au,A.at(t,C.j,C.f,C.i,0,v),v)},
$S:115}
B.c2h.prototype={
$0(){return this.a.H1(this.b)},
$S:0}
B.c2i.prototype={
$0(){return this.a.H2(this.b)},
$S:0}
B.c2j.prototype={
$0(){return this.a.BR(this.b)},
$S:0}
B.c2l.prototype={
$0(){return A.bO(this.a,!1).dM()},
$S:0}
B.b4S.prototype={
$0(){var x=0,w=A.l(y.v),v=this
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2}
B.b4T.prototype={
$0(){var x=0,w=A.l(y.v),v=this
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(B.acu.prototype,"gb3O","Mh",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.anB,A.jg)
x(B.qy,A.J)
x(B.acu,A.N)
w(A.cL,[B.c2d,B.c2e,B.c2f,B.c2g,B.c2h,B.c2i,B.c2j,B.c2l,B.b4S,B.b4T])
x(B.c2k,A.ek)})()
A.c5(b.typeUniverse,JSON.parse('{"anB":{"jg":["CF"]},"qy":{"J":[],"e":[]},"acu":{"N":["qy"]}}'))
var y={x:A.D("X<~>"),y:A.D("u<n0>"),p:A.D("u<Bd>"),u:A.D("u<e>"),w:A.D("m"),q:A.D("VI"),r:A.D("kj"),b:A.D("@"),v:A.D("~")};(function constants(){D.aiR=new A.ab(0,480,0,1/0)
D.O1=new A.aB(58615,"MaterialIcons",null,!1)
D.bJ_=new A.cv("Sign in someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJ7=new A.cv("If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adY=new A.cv("Sign out someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJC=new A.cv("Create Companion",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ae0=new A.cv("Companions",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_9",e:"endPart",h:b})})($__dart_deferred_initializers__,"oSmxdukD9nt7FbxxXmGCIyOr/qQ=");