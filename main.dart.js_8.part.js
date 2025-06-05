((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_8",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,G,H,I,F,K,L,M,N,O,B={
cHN(d){var x=A.z(["id",d],y.w,y.b)
return new B.anE("CheckRoute",new A.CL(d,null),x,C.c1,null,"",null)},
anE:function anE(d,e,f,g,h,i,j){var _=this
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
acw:function acw(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
c2v:function c2v(){},
c2w:function c2w(){},
c2x:function c2x(){},
c2y:function c2y(){},
c2C:function c2C(d,e){this.a=d
this.b=e},
c2z:function c2z(d,e){this.a=d
this.b=e},
c2A:function c2A(d,e){this.a=d
this.b=e},
c2B:function c2B(d,e){this.a=d
this.b=e},
c2D:function c2D(d){this.a=d},
cQq(d,e,f,g,h){var x=null,w=A.jp(A.bU(x,x,x,x,x,x,A.aW(C.Dw,h,x,x),x,x,x,new B.b53(e),x,x,x,x,x),d)
return A.a([w,A.jp(A.bU(x,x,x,x,x,x,A.aW(L.j2,g,x,x),x,x,x,new B.b54(f),x,x,x,x,x),!d)],y.p)},
b53:function b53(d){this.a=d},
b54:function b54(d){this.a=d},
bhM(){var x=A.po("companions",null)
if(x instanceof A.Pq)return x.e
return null},
b9P(d,e,f){return B.dcG(d,e,f)},
dcG(d,e,f){var x=0,w=A.l(y.v)
var $async$b9P=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)switch(x){case 0:x=2
return A.d(B.PR(d,e,A.bUG(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null)),$async$b9P)
case 2:return A.j(null,w)}})
return A.k($async$b9P,w)},
b9Q(d,e,f){return B.dcH(d,e,f)},
dcH(d,e,f){var x=0,w=A.l(y.v)
var $async$b9Q=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)switch(x){case 0:x=2
return A.d(A.D_(d,e,A.bUG(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null)),$async$b9Q)
case 2:return A.j(null,w)}})
return A.k($async$b9Q,w)},
b9N(d){return B.dcE(d)},
dcE(d){var x=0,w=A.l(y.v),v,u,t,s
var $async$b9N=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=$.cNX()
t=A.dd()
s=$.fM
s=(s==null?null:s.e).c
s.toString
v=y.b
x=2
return A.d(u.dn("create_companion_in_organization",A.z(["org",1,"oc",t,"usr",s,"c_name",d],y.w,v),v),$async$b9N)
case 2:return A.j(null,w)}})
return A.k($async$b9N,w)},
PR(d,e,f){return B.ddb(d,e,f)},
ddb(d,e,f){var x=0,w=A.l(y.v),v,u,t,s,r,q,p,o,n,m,l
var $async$PR=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)$async$outer:switch(x){case 0:m=f==null
l=m?null:f.a
if(l==null)l=$.dL().gdw().c.a
u=y.w
t=y.b
x=3
return A.d($.iQ().dn("sign_user_to_event",A.z(["ev",e,"usr",l],u,t),t),$async$PR)
case 3:s=h
t=J.a1(s)
switch(t.h(s,"code")){case 200:if(m)A.bJ(d,A.q(($.ob.e==="female"?"F":"M")+"You have been signed in.",null),C.ad)
else{r=f.e==="female"?"F":"M"
A.bJ(d,A.q(r+"{user} has been signed in.",A.z(["user",f.jI()],u,u)),C.ad)}x=1
break $async$outer
case 100:A.bJ(d,A.q("Cannot sign in!",null)+" "+A.q("Event is over.",null),C.bb)
x=1
break $async$outer
case 101:A.bJ(d,A.q("Cannot sign in!",null)+" "+A.q("Event is full.",null),C.bb)
x=1
break $async$outer
case 102:if(m){q=A.q(($.ob.e==="female"?"F":"M")+"You are already signed in at an event of this type.",null)
A.bJ(d,A.q("Cannot sign in!",null)+" "+q,C.bb)}else{r=f.e==="female"?"F":"M"
q=A.q(r+"{user} is already signed in at an event of this type.",A.z(["user",f.jI()],u,u))
A.bJ(d,A.q("Cannot sign in!",null)+" "+q,C.bb)}x=1
break $async$outer
case 103:if(m){q=A.q(($.ob.e==="female"?"F":"M")+"You are already signed in.",null)
A.bJ(d,A.q("Cannot sign in!",null)+" "+q,C.bb)}else{r=f.e==="female"?"F":"M"
q=A.q(r+"{user} is already signed in.",A.z(["user",f.jI()],u,u))
A.bJ(d,A.q("Cannot sign in!",null)+" "+q,C.bb)}x=1
break $async$outer
case 107:if(m){q=A.q(($.ob.e==="female"?"F":"M")+"You are already signed in at another event at the same time.",null)
A.bJ(d,A.q("Cannot sign in!",null)+" "+q,C.bb)}else{r=f.e==="female"?"F":"M"
A.bJ(d,A.q(r+"{user} is already signed in at another event at the same time.",A.z(["user",f.jI()],u,u)),C.ad)}x=1
break $async$outer
case 104:p=A.q("It's too soon!",null)
if(t.h(s,"events_registration_start")!=null){o=A.l0(A.es(t.h(s,"events_registration_start")),null)
m=y.r
t=d.af(m).r.a
t===$&&A.b()
n=B.dco(t.gf2(0)).da(o)
m=d.af(m).r.a
m===$&&A.b()
p=A.q("You can sign in from {time}.",A.z(["time",n+" "+A.wY(m.gf2(0)).da(o)],u,u))}q=y.q.a(A.po("workshops",null)).f
if(q!=null&&q.length!==0){A.bJ(d,q,C.bb)
x=1
break $async$outer}A.bJ(d,A.q("Cannot sign in!",null)+" "+p,C.bb)
x=1
break $async$outer
case 105:A.bJ(d,A.q("Cannot sign in!",null)+" "+A.q("There is already the maximum of men.",null),C.bb)
x=1
break $async$outer
case 106:A.bJ(d,A.q("Cannot sign in!",null)+" "+A.q("There is already the maximum of women.",null),C.bb)
x=1
break $async$outer
default:A.bJ(d,A.q("Cannot sign in!",null),C.bb)
x=1
break $async$outer}case 1:return A.j(v,w)}})
return A.k($async$PR,w)},
dco(d){var x=A.ng(d,A.p1(),null)
x.toString
x=new A.iV(new A.mb(),x)
x.mg("MMMMEEEEd")
return x}},D
J=c[1]
A=c[0]
C=c[2]
E=c[167]
G=c[156]
H=c[140]
I=c[97]
F=c[263]
K=c[284]
L=c[173]
M=c[262]
N=c[192]
O=c[286]
B=a.updateHolder(c[67],B)
D=c[197]
B.anE.prototype={}
B.qA.prototype={
M(){return new B.acw(new A.co(C.aw,$.a9()))}}
B.acw.prototype={
S(){this.ah()
this.e=this.a.f},
Ml(){var x=0,w=A.l(y.v),v=this,u
var $async$Ml=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.e
u===$&&A.b()
x=J.bz(u)<v.a.e&&v.d.a.a.length!==0?2:3
break
case 2:u=v.d
x=4
return A.d(B.b9N(u.a.a),$async$Ml)
case 4:u.iQ(0,C.h8)
x=5
return A.d(A.qE(),$async$Ml)
case 5:v.e=e
if(v.c!=null)v.A(new B.c2v())
case 3:return A.j(null,w)}})
return A.k($async$Ml,w)},
BV(d){return this.b5q(d)},
b5q(d){var x=0,w=A.l(y.v),v,u=this,t
var $async$BV=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=u.c
t.toString
x=3
return A.d(H.l1(t,A.q("Delete companion",null),A.q("By deleting your companion you will also sign him/her out of all signed in sessions.",null),"Ok"),$async$BV)
case 3:if(!f){x=1
break}x=4
return A.d(I.aqO(d),$async$BV)
case 4:t=u.a.r.$0()
x=5
return A.d(y.x.b(t)?t:A.ca(t,y.v),$async$BV)
case 5:x=6
return A.d(A.qE(),$async$BV)
case 6:u.e=f
if(u.c!=null)u.A(new B.c2w())
case 1:return A.j(v,w)}})
return A.k($async$BV,w)},
H2(d){return this.buu(d)},
buu(d){var x=0,w=A.l(y.v),v,u=this,t
var $async$H2=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=u.a.d.$0()
if(!(t==null?!1:t)){x=1
break}t=u.c
t.toString
x=3
return A.d(B.b9P(t,u.a.c,d),$async$H2)
case 3:t=u.a.r.$0()
x=4
return A.d(y.x.b(t)?t:A.ca(t,y.v),$async$H2)
case 4:x=5
return A.d(A.qE(),$async$H2)
case 5:u.e=f
if(u.c!=null)u.A(new B.c2x())
case 1:return A.j(v,w)}})
return A.k($async$H2,w)},
H3(d){return this.buv(d)},
buv(d){var x=0,w=A.l(y.v),v=this,u
var $async$H3=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(B.b9Q(u,v.a.c,d),$async$H3)
case 2:u=v.a.r.$0()
x=3
return A.d(y.x.b(u)?u:A.ca(u,y.v),$async$H3)
case 3:x=4
return A.d(A.qE(),$async$H3)
case 4:v.e=f
if(v.c!=null)v.A(new B.c2y())
return A.j(null,w)}})
return A.k($async$H3,w)},
B(d){var x,w,v,u,t,s=this,r=null,q=s.a.d.$0()
if(q==null)q=!1
x=E.bw(D.ae2,r)
w=y.w
w=E.bw(D.bJe,A.z(["max_companions",J.ar(B.bhM())],w,w))
v=s.e
v===$&&A.b()
v=J.bz(v)
u=s.a.e
t=y.u
u=A.dE(new A.cF(D.aiU,A.af(A.a([w,F.ed,A.jp(A.af(A.a([A.fF(!0,C.aR,!1,r,!0,C.v,r,A.fT(),s.d,r,r,r,r,r,2,A.c7(r,r,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.q("Companion Name",r),!0,!0,r,r,r,r,r,r,r,r,r,r,r,r,r),C.t,!0,r,!0,r,!1,r,C.aM,r,A.a([new A.JI(30,r)],y.y),r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.b2,r,r,C.aQ,C.aN,r,r,r,r,r,r,r,!0,C.F,r,C.b4,r,r,r,r),F.ed,A.dz(!1,E.bw(D.bJJ,r),r,r,r,r,r,r,s.gb41(),r,r)],t),C.j,C.f,C.i,0,r,C.l),v<u),F.ed,new A.ao(380,150,A.lG(!0,!0,!0,r,C.v,r,C.t,new B.c2C(s,q),J.bz(s.e),r,r,r,C.dv,r,r,!1,C.I,!1),r)],t),C.j,C.f,C.U,0,r,C.l),r),r,C.t,r,r,r,C.I)
return G.iD(A.a([A.dn(!1,E.bw(O.Ik,r),r,r,r,r,r,r,new B.c2D(d),r,r)],t),r,r,u,r,r,r,r,x,r,r)}}
var z=a.updateTypes(["X<~>()"])
B.c2v.prototype={
$0(){},
$S:0}
B.c2w.prototype={
$0(){},
$S:0}
B.c2x.prototype={
$0(){},
$S:0}
B.c2y.prototype={
$0(){},
$S:0}
B.c2C.prototype={
$2(d,e){var x,w,v=null,u=this.a,t=u.e
t===$&&A.b()
x=J.v(t,e)
t=A.a([],y.u)
if(x.afp(u.a.c))t.push(K.Ol)
t.push(M.fz)
t.push(A.bg(A.O(x.b,v,v,v,v,v,v,v,v,v,v,v,v,v),1,v))
if(!x.afp(u.a.c)){w=this.b?new B.c2z(u,x):v
t.push(A.dz(!1,E.bw(D.bJ6,v),v,v,v,v,v,v,w,v,v))}if(x.afp(u.a.c))t.push(A.dz(!1,E.bw(D.ae_,v),v,v,v,v,v,v,new B.c2A(u,x),v,v))
t.push(A.bU(v,v,v,v,v,v,N.j3,v,v,v,new B.c2B(u,x),v,v,v,v,v))
return new A.a0(C.au,A.at(t,C.j,C.f,C.i,0,v),v)},
$S:116}
B.c2z.prototype={
$0(){return this.a.H2(this.b)},
$S:0}
B.c2A.prototype={
$0(){return this.a.H3(this.b)},
$S:0}
B.c2B.prototype={
$0(){return this.a.BV(this.b)},
$S:0}
B.c2D.prototype={
$0(){return A.bO(this.a,!1).dN()},
$S:0}
B.b53.prototype={
$0(){var x=0,w=A.l(y.v),v=this
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2}
B.b54.prototype={
$0(){var x=0,w=A.l(y.v),v=this
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(B.acw.prototype,"gb41","Ml",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.anE,A.ji)
x(B.qA,A.J)
x(B.acw,A.P)
w(A.cU,[B.c2v,B.c2w,B.c2x,B.c2y,B.c2z,B.c2A,B.c2B,B.c2D,B.b53,B.b54])
x(B.c2C,A.er)})()
A.c8(b.typeUniverse,JSON.parse('{"anE":{"ji":["CL"]},"qA":{"J":[],"e":[]},"acw":{"P":["qA"]}}'))
var y={x:A.E("X<~>"),y:A.E("u<n2>"),p:A.E("u<Bi>"),u:A.E("u<e>"),w:A.E("m"),q:A.E("VI"),r:A.E("kn"),b:A.E("@"),v:A.E("~")};(function constants(){D.aiU=new A.aa(0,480,0,1/0)
D.O2=new A.aB(58615,"MaterialIcons",null,!1)
D.bJ6=new A.cx("Sign in someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJe=new A.cx("If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ae_=new A.cx("Sign out someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJJ=new A.cx("Create Companion",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ae2=new A.cx("Companions",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_8",e:"endPart",h:b})})($__dart_deferred_initializers__,"uVhrY68NDidDZ2l0Z/wjbxskwIk=");