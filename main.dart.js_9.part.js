((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_9",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,G,H,I,K,L,F,M,N,O,P,B={
cGw(d){var x=A.z(["id",d],y.w,y.b)
return new B.anE("CheckRoute",new A.CH(d,null),x,C.c1,null,"",null)},
anE:function anE(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
qw:function qw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
acv:function acv(d){this.d=d
this.c=this.a=null},
c2i:function c2i(){},
c2j:function c2j(){},
c2k:function c2k(){},
c2l:function c2l(){},
c2p:function c2p(d){this.a=d},
c2m:function c2m(d,e){this.a=d
this.b=e},
c2n:function c2n(d,e){this.a=d
this.b=e},
c2o:function c2o(d,e){this.a=d
this.b=e},
c2q:function c2q(d){this.a=d},
bhO(){var x=A.zy("companions",null)
if(x instanceof A.Pq)return x.e
return null},
b9G(d,e,f){return B.dbn(d,e,f)},
dbn(d,e,f){var x=0,w=A.l(y.v),v
var $async$b9G=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)switch(x){case 0:v=B.PP(d,e,A.bUu(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null))
x=2
return A.d(y.i.b(v)?v:A.c7(v,y.b),$async$b9G)
case 2:return A.j(null,w)}})
return A.k($async$b9G,w)},
b9H(d,e,f){return B.dbo(d,e,f)},
dbo(d,e,f){var x=0,w=A.l(y.v)
var $async$b9H=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)switch(x){case 0:x=2
return A.d(A.CW(d,e,A.bUu(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null)),$async$b9H)
case 2:return A.j(null,w)}})
return A.k($async$b9H,w)},
b9E(d){return B.dbl(d)},
dbl(d){var x=0,w=A.l(y.v),v,u,t,s
var $async$b9E=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=$.cMG()
t=A.df()
s=$.fQ
s=(s==null?null:s.e).c
s.toString
v=y.b
x=2
return A.d(u.dn("create_companion_in_organization",A.z(["org",1,"oc",t,"usr",s,"c_name",d],y.w,v),v),$async$b9E)
case 2:return A.j(null,w)}})
return A.k($async$b9E,w)},
PP(d,e,f){return B.dbW(d,e,f)},
dbW(d,e,f){var x=0,w=A.l(y.b),v,u,t,s,r,q,p,o,n,m,l
var $async$PP=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)$async$outer:switch(x){case 0:m=f==null
l=m?null:f.a
if(l==null)l=$.dC().gdm().c.a
u=y.w
t=y.b
x=3
return A.d($.i0().dn("sign_user_to_event",A.z(["ev",e,"usr",l],u,t),t),$async$PP)
case 3:s=h
t=J.a1(s)
switch(t.h(s,"code")){case 200:if(m)A.bK(d,A.r(($.nh.e==="female"?"F":"M")+"You have been signed in.",null),C.ac)
else{r=f.e==="female"?"F":"M"
A.bK(d,A.r(r+"{user} has been signed in.",A.z(["user",f.jK()],u,u)),C.ac)}x=1
break $async$outer
case 100:A.bK(d,A.r("Cannot sign in!",null)+" "+A.r("Event is over.",null),C.bg)
x=1
break $async$outer
case 101:A.bK(d,A.r("Cannot sign in!",null)+" "+A.r("Event is full.",null),C.bg)
x=1
break $async$outer
case 102:if(m){q=A.r(($.nh.e==="female"?"F":"M")+"You are already signed in at an event of this type.",null)
A.bK(d,A.r("Cannot sign in!",null)+" "+q,C.bg)}else{r=f.e==="female"?"F":"M"
q=A.r(r+"{user} is already signed in at an event of this type.",A.z(["user",f.jK()],u,u))
A.bK(d,A.r("Cannot sign in!",null)+" "+q,C.bg)}x=1
break $async$outer
case 103:if(m){q=A.r(($.nh.e==="female"?"F":"M")+"You are already signed in.",null)
A.bK(d,A.r("Cannot sign in!",null)+" "+q,C.bg)}else{r=f.e==="female"?"F":"M"
q=A.r(r+"{user} is already signed in.",A.z(["user",f.jK()],u,u))
A.bK(d,A.r("Cannot sign in!",null)+" "+q,C.bg)}x=1
break $async$outer
case 107:if(m){q=A.r(($.nh.e==="female"?"F":"M")+"You are already signed in at another event at the same time.",null)
A.bK(d,A.r("Cannot sign in!",null)+" "+q,C.bg)}else{r=f.e==="female"?"F":"M"
A.bK(d,A.r(r+"{user} is already signed in at another event at the same time.",A.z(["user",f.jK()],u,u)),C.ac)}x=1
break $async$outer
case 104:p=A.r("It's too soon!",null)
if(t.h(s,"events_registration_start")!=null){o=A.no(A.et(t.h(s,"events_registration_start")),null)
m=y.q
t=d.af(m).r.a
t===$&&A.b()
n=B.db5(t.gf0(0)).dd(o)
m=d.af(m).r.a
m===$&&A.b()
p=A.r("You can sign in from {time}.",A.z(["time",n+" "+A.CU(m.gf0(0)).dd(o)],u,u))}A.bK(d,A.r("Cannot sign in!",null)+" "+p,C.bg)
x=1
break $async$outer
case 105:A.bK(d,A.r("Cannot sign in!",null)+" "+A.r("There is already the maximum of men.",null),C.bg)
x=1
break $async$outer
case 106:A.bK(d,A.r("Cannot sign in!",null)+" "+A.r("There is already the maximum of women.",null),C.bg)
x=1
break $async$outer
default:A.bK(d,A.r("Cannot sign in!",null),C.bg)
x=1
break $async$outer}case 1:return A.j(v,w)}})
return A.k($async$PP,w)},
db5(d){var x=A.nd(d,A.p0(),null)
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
I=c[98]
K=c[171]
L=c[179]
F=c[279]
M=c[301]
N=c[278]
O=c[205]
P=c[303]
B=a.updateHolder(c[70],B)
D=c[209]
B.anE.prototype={}
B.qw.prototype={
M(){return new B.acv(new A.cs(C.aw,$.a9()))}}
B.acv.prototype={
Mg(){var x=0,w=A.l(y.v),v=this,u,t
var $async$Mg=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=J.bz(v.a.f)<v.a.e&&v.d.a.a.length!==0?2:3
break
case 2:u=v.d
x=4
return A.d(B.b9E(u.a.a),$async$Mg)
case 4:u.iR(0,C.h5)
u=v.a
u.toString
t=u
x=5
return A.d(A.wU(),$async$Mg)
case 5:t.f=e
if(v.c!=null)v.A(new B.c2i())
case 3:return A.j(null,w)}})
return A.k($async$Mg,w)},
BR(d){return this.b59(d)},
b59(d){var x=0,w=A.l(y.v),v,u=this,t,s
var $async$BR=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=u.c
t.toString
x=3
return A.d(H.kX(t,A.r("Delete companion",null),A.r("By deleting your companion you will also sign him/her out of all signed in sessions.",null),"Ok"),$async$BR)
case 3:if(!f){x=1
break}x=4
return A.d(I.aqM(d),$async$BR)
case 4:t=u.a
t.toString
s=t
x=5
return A.d(A.wU(),$async$BR)
case 5:s.f=f
if(u.c!=null)u.A(new B.c2j())
t=u.a.r.$0()
x=6
return A.d(y.x.b(t)?t:A.c7(t,y.v),$async$BR)
case 6:case 1:return A.j(v,w)}})
return A.k($async$BR,w)},
H2(d){return this.bu7(d)},
bu7(d){var x=0,w=A.l(y.v),v,u=this,t,s,r
var $async$H2=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=u.a
if(s.d){x=1
break}t=u.c
t.toString
x=3
return A.d(B.b9G(t,s.c,d),$async$H2)
case 3:s=u.a
s.toString
r=s
x=4
return A.d(A.wU(),$async$H2)
case 4:r.f=f
if(u.c!=null)u.A(new B.c2k())
s=u.a.r.$0()
x=5
return A.d(y.x.b(s)?s:A.c7(s,y.v),$async$H2)
case 5:case 1:return A.j(v,w)}})
return A.k($async$H2,w)},
H3(d){return this.bu8(d)},
bu8(d){var x=0,w=A.l(y.v),v=this,u,t
var $async$H3=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(B.b9H(u,v.a.c,d),$async$H3)
case 2:u=v.a
u.toString
t=u
x=3
return A.d(A.wU(),$async$H3)
case 3:t.f=f
if(v.c!=null)v.A(new B.c2l())
u=v.a.r.$0()
x=4
return A.d(y.x.b(u)?u:A.c7(u,y.v),$async$H3)
case 4:return A.j(null,w)}})
return A.k($async$H3,w)},
B(d){var x,w,v,u=this,t=null,s=E.bw(D.bJI,t),r=y.w
r=E.bw(D.bJ4,A.z(["max_companions",J.aq(B.bhO())],r,r))
x=J.bz(u.a.f)
w=u.a.e
v=y.u
w=A.dD(new A.cE(D.aiP,A.ah(A.a([r,F.eb,A.jl(A.ah(A.a([A.fB(!0,C.aR,!1,t,!0,C.v,t,A.fS(),u.d,t,t,t,t,t,2,A.ci(t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,A.r("Companion Name",t),!0,!0,t,t,t,t,t,t,t,t,t,t,t,t,t),C.t,!0,t,!0,t,!1,t,C.aL,t,A.a([new A.JG(30,t)],y.y),t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,C.b2,t,t,C.aO,C.aM,t,t,t,t,t,t,t,!0,C.H,t,C.b4,t,t,t,t),F.eb,A.dy(!1,E.bw(D.bJz,t),t,t,t,t,t,t,u.gb3L(),t,t)],v),C.j,C.f,C.i,0,t,C.m),x<w),F.eb,new A.ao(380,150,K.mb(!0,!0,!0,C.v,t,C.t,new B.c2p(u),J.bz(u.a.f),t,t,t,L.dQ,t,t,!1,C.I,!1),t)],v),C.j,C.f,C.U,0,t,C.m),t),t,C.t,t,t,t,C.I)
return G.iD(A.a([A.dm(!1,E.bw(P.Ie,t),t,t,t,t,t,t,new B.c2q(d),t,t)],v),t,t,w,t,t,t,t,s,t,t)}}
var z=a.updateTypes(["X<~>()"])
B.c2i.prototype={
$0(){},
$S:0}
B.c2j.prototype={
$0(){},
$S:0}
B.c2k.prototype={
$0(){},
$S:0}
B.c2l.prototype={
$0(){},
$S:0}
B.c2p.prototype={
$2(d,e){var x,w=null,v=this.a,u=J.v(v.a.f,e),t=A.a([],y.u)
if(u.afc(v.a.c))t.push(M.Oh)
t.push(N.fz)
t.push(A.bk(A.P(u.b,w,w,w,w,w,w,w,w,w,w,w,w,w),1,w))
if(!u.afc(v.a.c)){x=E.bw(D.bIX,w)
t.push(A.dy(!1,x,w,w,w,w,w,w,v.a.d?w:new B.c2m(v,u),w,w))}if(u.afc(v.a.c))t.push(A.dy(!1,E.bw(D.adW,w),w,w,w,w,w,w,new B.c2n(v,u),w,w))
t.push(A.bW(w,w,w,w,w,w,O.j2,w,w,w,new B.c2o(v,u),w,w,w,w,w))
return new A.a3(C.as,A.at(t,C.j,C.f,C.i,0,w),w)},
$S:120}
B.c2m.prototype={
$0(){return this.a.H2(this.b)},
$S:0}
B.c2n.prototype={
$0(){return this.a.H3(this.b)},
$S:0}
B.c2o.prototype={
$0(){return this.a.BR(this.b)},
$S:0}
B.c2q.prototype={
$0(){return A.bO(this.a,!1).dM()},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.acv.prototype,"gb3L","Mg",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.anE,A.jf)
x(B.qw,A.J)
x(B.acv,A.O)
w(A.cK,[B.c2i,B.c2j,B.c2k,B.c2l,B.c2m,B.c2n,B.c2o,B.c2q])
x(B.c2p,A.ef)})()
A.c5(b.typeUniverse,JSON.parse('{"anE":{"jf":["CH"]},"qw":{"J":[],"e":[]},"acv":{"O":["qw"]}}'))
var y={i:A.D("X<@>"),x:A.D("X<~>"),y:A.D("u<n0>"),u:A.D("u<e>"),w:A.D("m"),q:A.D("ki"),b:A.D("@"),v:A.D("~")};(function constants(){D.aiP=new A.ab(0,480,0,1/0)
D.O_=new A.aB(58615,"MaterialIcons",null,!1)
D.bIX=new A.cr("Sign in someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJ4=new A.cr("If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adW=new A.cr("Sign out someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJz=new A.cr("Create Companion",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJI=new A.cr("Companions",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_9",e:"endPart",h:b})})($__dart_deferred_initializers__,"ixjjhvI7vLT7E/TVrBX4lZhf4QI=");