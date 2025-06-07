((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_8",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,G,H,I,F,K,L,M,N,O,B={
cIE(d){var x=A.z(["id",d],y.w,y.b)
return new B.anK("CheckRoute",new A.CM(d,null),x,C.c1,null,"",null)},
anK:function anK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
qB:function qB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
acD:function acD(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
c3c:function c3c(){},
c3d:function c3d(){},
c3e:function c3e(){},
c3f:function c3f(){},
c3j:function c3j(d,e){this.a=d
this.b=e},
c3g:function c3g(d,e){this.a=d
this.b=e},
c3h:function c3h(d,e){this.a=d
this.b=e},
c3i:function c3i(d,e){this.a=d
this.b=e},
c3k:function c3k(d){this.a=d},
cRb(d,e,f,g,h){var x=null,w=A.js(A.bO(x,x,x,x,x,x,A.aW(C.Dv,h,x,x),x,x,x,new B.b5e(e),x,x,x,x,x),d)
return A.a([w,A.js(A.bO(x,x,x,x,x,x,A.aW(L.j2,g,x,x),x,x,x,new B.b5f(f),x,x,x,x,x),!d)],y.p)},
b5e:function b5e(d){this.a=d},
b5f:function b5f(d){this.a=d},
bic(){var x=A.pp("companions",null)
if(x instanceof A.Pt)return x.e
return null},
ba0(d,e,f){return B.ddw(d,e,f)},
ddw(d,e,f){var x=0,w=A.m(y.v)
var $async$ba0=A.i(function(g,h){if(g===1)return A.j(h,w)
while(true)switch(x){case 0:x=2
return A.d(B.PU(d,e,A.bV6(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null)),$async$ba0)
case 2:return A.k(null,w)}})
return A.l($async$ba0,w)},
ba1(d,e,f){return B.ddx(d,e,f)},
ddx(d,e,f){var x=0,w=A.m(y.v)
var $async$ba1=A.i(function(g,h){if(g===1)return A.j(h,w)
while(true)switch(x){case 0:x=2
return A.d(A.D2(d,e,A.bV6(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null)),$async$ba1)
case 2:return A.k(null,w)}})
return A.l($async$ba1,w)},
b9Z(d){return B.ddu(d)},
ddu(d){var x=0,w=A.m(y.v),v,u,t,s
var $async$b9Z=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:u=$.cOO()
t=A.de()
s=$.fN
s=(s==null?null:s.e).c
s.toString
v=y.b
x=2
return A.d(u.de("create_companion_in_organization",A.z(["org",1,"oc",t,"usr",s,"c_name",d],y.w,v),v),$async$b9Z)
case 2:return A.k(null,w)}})
return A.l($async$b9Z,w)},
PU(d,e,f){return B.de1(d,e,f)},
de1(d,e,f){var x=0,w=A.m(y.v),v,u,t,s,r,q,p,o,n,m,l
var $async$PU=A.i(function(g,h){if(g===1)return A.j(h,w)
while(true)$async$outer:switch(x){case 0:m=f==null
l=m?null:f.a
if(l==null)l=$.dL().gdw().c.a
u=y.w
t=y.b
x=3
return A.d($.iQ().de("sign_user_to_event",A.z(["ev",e,"usr",l],u,t),t),$async$PU)
case 3:s=h
t=J.a1(s)
switch(t.h(s,"code")){case 200:if(m)A.bH(d,A.q(($.og.e==="female"?"F":"M")+"You have been signed in.",null),C.ac)
else{r=f.e==="female"?"F":"M"
A.bH(d,A.q(r+"{user} has been signed in.",A.z(["user",f.jI()],u,u)),C.ac)}x=1
break $async$outer
case 100:A.bH(d,A.q("Cannot sign in!",null)+" "+A.q("Event is over.",null),C.b9)
x=1
break $async$outer
case 101:A.bH(d,A.q("Cannot sign in!",null)+" "+A.q("Event is full.",null),C.b9)
x=1
break $async$outer
case 102:if(m){q=A.q(($.og.e==="female"?"F":"M")+"You are already signed in at an event of this type.",null)
A.bH(d,A.q("Cannot sign in!",null)+" "+q,C.b9)}else{r=f.e==="female"?"F":"M"
q=A.q(r+"{user} is already signed in at an event of this type.",A.z(["user",f.jI()],u,u))
A.bH(d,A.q("Cannot sign in!",null)+" "+q,C.b9)}x=1
break $async$outer
case 103:if(m){q=A.q(($.og.e==="female"?"F":"M")+"You are already signed in.",null)
A.bH(d,A.q("Cannot sign in!",null)+" "+q,C.b9)}else{r=f.e==="female"?"F":"M"
q=A.q(r+"{user} is already signed in.",A.z(["user",f.jI()],u,u))
A.bH(d,A.q("Cannot sign in!",null)+" "+q,C.b9)}x=1
break $async$outer
case 107:if(m){q=A.q(($.og.e==="female"?"F":"M")+"You are already signed in at another event at the same time.",null)
A.bH(d,A.q("Cannot sign in!",null)+" "+q,C.b9)}else{r=f.e==="female"?"F":"M"
A.bH(d,A.q(r+"{user} is already signed in at another event at the same time.",A.z(["user",f.jI()],u,u)),C.ac)}x=1
break $async$outer
case 104:p=A.q("It's too soon!",null)
if(t.h(s,"events_registration_start")!=null){o=A.l1(A.eo(t.h(s,"events_registration_start")),null)
m=y.r
t=d.ad(m).r.a
t===$&&A.b()
n=B.dd9(t.gf3(0)).d5(o)
m=d.ad(m).r.a
m===$&&A.b()
p=A.q("You can sign in from {time}.",A.z(["time",n+" "+A.x0(m.gf3(0)).d5(o)],u,u))}q=y.q.a(A.pp("workshops",null)).f
if(q!=null&&q.length!==0){A.bH(d,q,C.b9)
x=1
break $async$outer}A.bH(d,A.q("Cannot sign in!",null)+" "+p,C.b9)
x=1
break $async$outer
case 105:A.bH(d,A.q("Cannot sign in!",null)+" "+A.q("There is already the maximum of men.",null),C.b9)
x=1
break $async$outer
case 106:A.bH(d,A.q("Cannot sign in!",null)+" "+A.q("There is already the maximum of women.",null),C.b9)
x=1
break $async$outer
default:A.bH(d,A.q("Cannot sign in!",null),C.b9)
x=1
break $async$outer}case 1:return A.k(v,w)}})
return A.l($async$PU,w)},
dd9(d){var x=A.nh(d,A.p4(),null)
x.toString
x=new A.iW(new A.mc(),x)
x.lU("MMMMEEEEd")
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
B.anK.prototype={}
B.qB.prototype={
M(){return new B.acD(new A.cn(C.ax,$.a9()))}}
B.acD.prototype={
S(){this.ah()
this.e=this.a.f},
Mq(){var x=0,w=A.m(y.v),v=this,u
var $async$Mq=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=v.e
u===$&&A.b()
x=J.bv(u)<v.a.e&&v.d.a.a.length!==0?2:3
break
case 2:u=v.d
x=4
return A.d(B.b9Z(u.a.a),$async$Mq)
case 4:u.iQ(0,C.hb)
x=5
return A.d(A.qF(),$async$Mq)
case 5:v.e=e
if(v.c!=null)v.u(new B.c3c())
case 3:return A.k(null,w)}})
return A.l($async$Mq,w)},
BY(d){return this.b5B(d)},
b5B(d){var x=0,w=A.m(y.v),v,u=this,t
var $async$BY=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:t=u.c
t.toString
x=3
return A.d(H.l2(t,A.q("Delete companion",null),A.q("By deleting your companion you will also sign him/her out of all signed in sessions.",null),"Ok"),$async$BY)
case 3:if(!f){x=1
break}x=4
return A.d(I.aqX(d),$async$BY)
case 4:t=u.a.r.$0()
x=5
return A.d(y.x.b(t)?t:A.ca(t,y.v),$async$BY)
case 5:x=6
return A.d(A.qF(),$async$BY)
case 6:u.e=f
if(u.c!=null)u.u(new B.c3d())
case 1:return A.k(v,w)}})
return A.l($async$BY,w)},
H7(d){return this.buH(d)},
buH(d){var x=0,w=A.m(y.v),v,u=this,t
var $async$H7=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:t=u.a.d.$0()
if(!(t==null?!1:t)){x=1
break}t=u.c
t.toString
x=3
return A.d(B.ba0(t,u.a.c,d),$async$H7)
case 3:t=u.a.r.$0()
x=4
return A.d(y.x.b(t)?t:A.ca(t,y.v),$async$H7)
case 4:x=5
return A.d(A.qF(),$async$H7)
case 5:u.e=f
if(u.c!=null)u.u(new B.c3e())
case 1:return A.k(v,w)}})
return A.l($async$H7,w)},
H8(d){return this.buI(d)},
buI(d){var x=0,w=A.m(y.v),v=this,u
var $async$H8=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(B.ba1(u,v.a.c,d),$async$H8)
case 2:u=v.a.r.$0()
x=3
return A.d(y.x.b(u)?u:A.ca(u,y.v),$async$H8)
case 3:x=4
return A.d(A.qF(),$async$H8)
case 4:v.e=f
if(v.c!=null)v.u(new B.c3f())
return A.k(null,w)}})
return A.l($async$H8,w)},
B(d){var x,w,v,u,t,s=this,r=null,q=s.a.d.$0()
if(q==null)q=!1
x=E.bz(D.ae3,r)
w=y.w
w=E.bz(D.bJj,A.z(["max_companions",J.ar(B.bic())],w,w))
v=s.e
v===$&&A.b()
v=J.bv(v)
u=s.a.e
t=y.u
u=A.dE(new A.cF(D.aiW,A.ae(A.a([w,F.ec,A.js(A.ae(A.a([A.fG(!0,C.aR,!1,r,!0,C.v,r,A.fU(),s.d,r,r,r,r,r,2,A.c7(r,r,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.q("Companion Name",r),!0,!0,r,r,r,r,r,r,r,r,r,r,r,r,r),C.r,!0,r,!0,r,!1,r,C.aM,r,A.a([new A.JJ(30,r)],y.y),r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.b2,r,r,C.aQ,C.aN,r,r,r,r,r,r,r,!0,C.F,r,C.b4,r,r,r,r),F.ec,A.dz(!1,E.bz(D.bJO,r),r,r,r,r,r,r,s.gb4c(),r,r)],t),C.j,C.f,C.i,0,r,C.m),v<u),F.ec,new A.ao(380,150,A.l6(!0,!0,!0,r,C.v,r,C.r,new B.c3j(s,q),J.bv(s.e),r,r,r,C.dv,r,r,!1,C.I,!1),r)],t),C.j,C.f,C.T,0,r,C.m),r),r,C.r,r,r,r,C.I)
return G.ij(A.a([A.df(!1,E.bz(O.Ik,r),r,r,r,r,r,r,new B.c3k(d),r,r)],t),r,r,u,r,r,r,r,x,r,r)}}
var z=a.updateTypes(["X<~>()"])
B.c3c.prototype={
$0(){},
$S:0}
B.c3d.prototype={
$0(){},
$S:0}
B.c3e.prototype={
$0(){},
$S:0}
B.c3f.prototype={
$0(){},
$S:0}
B.c3j.prototype={
$2(d,e){var x,w,v=null,u=this.a,t=u.e
t===$&&A.b()
x=J.v(t,e)
t=A.a([],y.u)
if(x.afy(u.a.c))t.push(K.Om)
t.push(M.fD)
t.push(A.bg(A.L(x.b,v,v,v,v,v,v,v,v,v,v,v,v,v),1,v))
if(!x.afy(u.a.c)){w=this.b?new B.c3g(u,x):v
t.push(A.dz(!1,E.bz(D.bJb,v),v,v,v,v,v,v,w,v,v))}if(x.afy(u.a.c))t.push(A.dz(!1,E.bz(D.ae0,v),v,v,v,v,v,v,new B.c3h(u,x),v,v))
t.push(A.bO(v,v,v,v,v,v,N.j3,v,v,v,new B.c3i(u,x),v,v,v,v,v))
return new A.a0(C.au,A.at(t,C.j,C.f,C.i,0,v),v)},
$S:115}
B.c3g.prototype={
$0(){return this.a.H7(this.b)},
$S:0}
B.c3h.prototype={
$0(){return this.a.H8(this.b)},
$S:0}
B.c3i.prototype={
$0(){return this.a.BY(this.b)},
$S:0}
B.c3k.prototype={
$0(){return A.bL(this.a,!1).dG()},
$S:0}
B.b5e.prototype={
$0(){var x=0,w=A.m(y.v),v=this
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.k(null,w)}})
return A.l($async$$0,w)},
$S:2}
B.b5f.prototype={
$0(){var x=0,w=A.m(y.v),v=this
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.k(null,w)}})
return A.l($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(B.acD.prototype,"gb4c","Mq",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.anK,A.jl)
x(B.qB,A.J)
x(B.acD,A.P)
w(A.cV,[B.c3c,B.c3d,B.c3e,B.c3f,B.c3g,B.c3h,B.c3i,B.c3k,B.b5e,B.b5f])
x(B.c3j,A.et)})()
A.c8(b.typeUniverse,JSON.parse('{"anK":{"jl":["CM"]},"qB":{"J":[],"e":[]},"acD":{"P":["qB"]}}'))
var y={x:A.E("X<~>"),y:A.E("u<n3>"),p:A.E("u<Bi>"),u:A.E("u<e>"),w:A.E("h"),q:A.E("VN"),r:A.E("ko"),b:A.E("@"),v:A.E("~")};(function constants(){D.aiW=new A.aa(0,480,0,1/0)
D.O2=new A.aB(58615,"MaterialIcons",null,!1)
D.bJb=new A.cx("Sign in someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJj=new A.cx("If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ae0=new A.cx("Sign out someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJO=new A.cx("Create Companion",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ae3=new A.cx("Companions",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_8",e:"endPart",h:b})})($__dart_deferred_initializers__,"d6wZV4REI3l7VPw2AL2KYo1veCw=");