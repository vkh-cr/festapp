((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_8",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,G,H,I,F,K,L,M,N,O,B={
cJB(d){var x=A.y(["id",d],y.w,y.b)
return new B.anR("CheckRoute",new A.CQ(d,null),x,C.c1,null,"",null)},
anR:function anR(d,e,f,g,h,i,j){var _=this
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
acH:function acH(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
c3P:function c3P(){},
c3Q:function c3Q(){},
c3R:function c3R(){},
c3S:function c3S(){},
c3W:function c3W(d,e){this.a=d
this.b=e},
c3T:function c3T(d,e){this.a=d
this.b=e},
c3U:function c3U(d,e){this.a=d
this.b=e},
c3V:function c3V(d,e){this.a=d
this.b=e},
c3X:function c3X(d){this.a=d},
cSa(d,e,f,g,h){var x=null,w=A.js(A.bM(x,x,x,x,x,x,A.aT(C.DA,h,x,x),x,x,x,new B.b5o(e),x,x,x,x,x),d)
return A.a([w,A.js(A.bM(x,x,x,x,x,x,A.aT(L.j2,g,x,x),x,x,x,new B.b5p(f),x,x,x,x,x),!d)],y.p)},
b5o:function b5o(d){this.a=d},
b5p:function b5p(d){this.a=d},
biy(){var x=A.pq("companions",null)
if(x instanceof A.Pz)return x.e
return null},
bab(d,e,f){return B.dew(d,e,f)},
dew(d,e,f){var x=0,w=A.m(y.v)
var $async$bab=A.h(function(g,h){if(g===1)return A.j(h,w)
while(true)switch(x){case 0:x=2
return A.d(B.Q_(d,e,A.bVs(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null)),$async$bab)
case 2:return A.k(null,w)}})
return A.l($async$bab,w)},
bac(d,e,f){return B.dex(d,e,f)},
dex(d,e,f){var x=0,w=A.m(y.v)
var $async$bac=A.h(function(g,h){if(g===1)return A.j(h,w)
while(true)switch(x){case 0:x=2
return A.d(A.D5(d,e,A.bVs(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null)),$async$bac)
case 2:return A.k(null,w)}})
return A.l($async$bac,w)},
ba9(d){return B.deu(d)},
deu(d){var x=0,w=A.m(y.v),v,u,t,s
var $async$ba9=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:u=$.cPM()
t=A.df()
s=$.fP
s=(s==null?null:s.e).c
s.toString
v=y.b
x=2
return A.d(u.dd("create_companion_in_organization",A.y(["org",1,"oc",t,"usr",s,"c_name",d],y.w,v),v),$async$ba9)
case 2:return A.k(null,w)}})
return A.l($async$ba9,w)},
Q_(d,e,f){return B.df1(d,e,f)},
df1(d,e,f){var x=0,w=A.m(y.v),v,u,t,s,r,q,p,o,n,m,l
var $async$Q_=A.h(function(g,h){if(g===1)return A.j(h,w)
while(true)$async$outer:switch(x){case 0:m=f==null
l=m?null:f.a
if(l==null)l=$.dM().gdw().c.a
u=y.w
t=y.b
x=3
return A.d($.iR().dd("sign_user_to_event",A.y(["ev",e,"usr",l],u,t),t),$async$Q_)
case 3:s=h
t=J.a1(s)
switch(t.h(s,"code")){case 200:if(m)A.bH(d,A.q(($.oh.e==="female"?"F":"M")+"You have been signed in.",null),C.ac)
else{r=f.e==="female"?"F":"M"
A.bH(d,A.q(r+"{user} has been signed in.",A.y(["user",f.iy()],u,u)),C.ac)}x=1
break $async$outer
case 100:A.bH(d,A.q("Cannot sign in!",null)+" "+A.q("Event is over.",null),C.b8)
x=1
break $async$outer
case 101:A.bH(d,A.q("Cannot sign in!",null)+" "+A.q("Event is full.",null),C.b8)
x=1
break $async$outer
case 102:if(m){q=A.q(($.oh.e==="female"?"F":"M")+"You are already signed in at an event of this type.",null)
A.bH(d,A.q("Cannot sign in!",null)+" "+q,C.b8)}else{r=f.e==="female"?"F":"M"
q=A.q(r+"{user} is already signed in at an event of this type.",A.y(["user",f.iy()],u,u))
A.bH(d,A.q("Cannot sign in!",null)+" "+q,C.b8)}x=1
break $async$outer
case 103:if(m){q=A.q(($.oh.e==="female"?"F":"M")+"You are already signed in.",null)
A.bH(d,A.q("Cannot sign in!",null)+" "+q,C.b8)}else{r=f.e==="female"?"F":"M"
q=A.q(r+"{user} is already signed in.",A.y(["user",f.iy()],u,u))
A.bH(d,A.q("Cannot sign in!",null)+" "+q,C.b8)}x=1
break $async$outer
case 107:if(m){q=A.q(($.oh.e==="female"?"F":"M")+"You are already signed in at another event at the same time.",null)
A.bH(d,A.q("Cannot sign in!",null)+" "+q,C.b8)}else{r=f.e==="female"?"F":"M"
A.bH(d,A.q(r+"{user} is already signed in at another event at the same time.",A.y(["user",f.iy()],u,u)),C.ac)}x=1
break $async$outer
case 104:p=A.q("It's too soon!",null)
if(t.h(s,"events_registration_start")!=null){o=A.l3(A.em(t.h(s,"events_registration_start")),null)
m=y.r
t=d.ac(m).r.a
t===$&&A.b()
n=B.de7(t.geV(0)).cF(o)
m=d.ac(m).r.a
m===$&&A.b()
p=A.q("You can sign in from {time}.",A.y(["time",n+" "+A.uW(m.geV(0)).cF(o)],u,u))}q=y.q.a(A.pq("workshops",null)).f
if(q!=null&&q.length!==0){A.bH(d,q,C.b8)
x=1
break $async$outer}A.bH(d,A.q("Cannot sign in!",null)+" "+p,C.b8)
x=1
break $async$outer
case 105:A.bH(d,A.q("Cannot sign in!",null)+" "+A.q("There is already the maximum of men.",null),C.b8)
x=1
break $async$outer
case 106:A.bH(d,A.q("Cannot sign in!",null)+" "+A.q("There is already the maximum of women.",null),C.b8)
x=1
break $async$outer
default:A.bH(d,A.q("Cannot sign in!",null),C.b8)
x=1
break $async$outer}case 1:return A.k(v,w)}})
return A.l($async$Q_,w)},
de7(d){var x=A.mA(d,A.oa(),null)
x.toString
x=new A.iG(new A.lA(),x)
x.lz("MMMMEEEEd")
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
B.anR.prototype={}
B.qB.prototype={
M(){return new B.acH(new A.cl(C.ay,$.a8()))}}
B.acH.prototype={
T(){this.ah()
this.e=this.a.f},
Mu(){var x=0,w=A.m(y.v),v=this,u
var $async$Mu=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=v.e
u===$&&A.b()
x=J.bv(u)<v.a.e&&v.d.a.a.length!==0?2:3
break
case 2:u=v.d
x=4
return A.d(B.ba9(u.a.a),$async$Mu)
case 4:u.iR(0,C.he)
x=5
return A.d(A.qF(),$async$Mu)
case 5:v.e=e
if(v.c!=null)v.u(new B.c3P())
case 3:return A.k(null,w)}})
return A.l($async$Mu,w)},
C1(d){return this.b5R(d)},
b5R(d){var x=0,w=A.m(y.v),v,u=this,t
var $async$C1=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:t=u.c
t.toString
x=3
return A.d(H.l4(t,A.q("Delete companion",null),A.q("By deleting your companion you will also sign him/her out of all signed in sessions.",null),"Ok"),$async$C1)
case 3:if(!f){x=1
break}x=4
return A.d(I.ar2(d),$async$C1)
case 4:t=u.a.r.$0()
x=5
return A.d(y.x.b(t)?t:A.ca(t,y.v),$async$C1)
case 5:x=6
return A.d(A.qF(),$async$C1)
case 6:u.e=f
if(u.c!=null)u.u(new B.c3Q())
case 1:return A.k(v,w)}})
return A.l($async$C1,w)},
H9(d){return this.bv7(d)},
bv7(d){var x=0,w=A.m(y.v),v,u=this,t
var $async$H9=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:t=u.a.d.$0()
if(!(t==null?!1:t)){x=1
break}t=u.c
t.toString
x=3
return A.d(B.bab(t,u.a.c,d),$async$H9)
case 3:t=u.a.r.$0()
x=4
return A.d(y.x.b(t)?t:A.ca(t,y.v),$async$H9)
case 4:x=5
return A.d(A.qF(),$async$H9)
case 5:u.e=f
if(u.c!=null)u.u(new B.c3R())
case 1:return A.k(v,w)}})
return A.l($async$H9,w)},
Ha(d){return this.bv8(d)},
bv8(d){var x=0,w=A.m(y.v),v=this,u
var $async$Ha=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(B.bac(u,v.a.c,d),$async$Ha)
case 2:u=v.a.r.$0()
x=3
return A.d(y.x.b(u)?u:A.ca(u,y.v),$async$Ha)
case 3:x=4
return A.d(A.qF(),$async$Ha)
case 4:v.e=f
if(v.c!=null)v.u(new B.c3S())
return A.k(null,w)}})
return A.l($async$Ha,w)},
B(d){var x,w,v,u,t,s=this,r=null,q=s.a.d.$0()
if(q==null)q=!1
x=E.by(D.ae9,r)
w=y.w
w=E.by(D.bJr,A.y(["max_companions",J.ar(B.biy())],w,w))
v=s.e
v===$&&A.b()
v=J.bv(v)
u=s.a.e
t=y.u
u=A.dE(new A.cH(D.aj0,A.ae(A.a([w,F.ed,A.js(A.ae(A.a([A.fy(!0,C.aR,!1,r,!0,C.v,r,A.fS(),s.d,r,r,r,r,r,2,A.c6(r,r,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.q("Companion Name",r),!0,!0,r,r,r,r,r,r,r,r,r,r,r,r,r),C.q,!0,r,!0,r,!1,r,C.aL,r,A.a([new A.JN(30,r)],y.y),r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.b_,r,r,C.aO,C.aM,r,r,r,r,r,r,r,!0,C.F,r,C.b2,r,r,r,r),F.ed,A.dz(!1,E.by(D.bJW,r),r,r,r,r,r,r,s.gb4q(),r,r)],t),C.j,C.f,C.i,0,r,C.l),v<u),F.ed,new A.ao(380,150,A.kh(!0,!0,!0,r,C.v,r,C.q,new B.c3W(s,q),J.bv(s.e),r,r,r,C.dv,r,r,!1,C.I,!1),r)],t),C.j,C.f,C.R,0,r,C.l),r),r,C.q,r,r,r,C.I)
return G.hE(A.a([A.d6(!1,E.by(O.Im,r),r,r,r,r,r,r,new B.c3X(d),r,r)],t),r,r,u,r,r,r,r,x,r,r)}}
var z=a.updateTypes(["X<~>()"])
B.c3P.prototype={
$0(){},
$S:0}
B.c3Q.prototype={
$0(){},
$S:0}
B.c3R.prototype={
$0(){},
$S:0}
B.c3S.prototype={
$0(){},
$S:0}
B.c3W.prototype={
$2(d,e){var x,w,v=null,u=this.a,t=u.e
t===$&&A.b()
x=J.v(t,e)
t=A.a([],y.u)
if(x.afE(u.a.c))t.push(K.Os)
t.push(M.fC)
t.push(A.bb(A.L(x.b,v,v,v,v,v,v,v,v,v,v,v,v,v),1,v))
if(!x.afE(u.a.c)){w=this.b?new B.c3T(u,x):v
t.push(A.dz(!1,E.by(D.bJj,v),v,v,v,v,v,v,w,v,v))}if(x.afE(u.a.c))t.push(A.dz(!1,E.by(D.ae6,v),v,v,v,v,v,v,new B.c3U(u,x),v,v))
t.push(A.bM(v,v,v,v,v,v,N.j3,v,v,v,new B.c3V(u,x),v,v,v,v,v))
return new A.a0(C.au,A.as(t,C.j,C.f,C.i,0,v),v)},
$S:120}
B.c3T.prototype={
$0(){return this.a.H9(this.b)},
$S:0}
B.c3U.prototype={
$0(){return this.a.Ha(this.b)},
$S:0}
B.c3V.prototype={
$0(){return this.a.C1(this.b)},
$S:0}
B.c3X.prototype={
$0(){return A.bI(this.a,!1).dC()},
$S:0}
B.b5o.prototype={
$0(){var x=0,w=A.m(y.v),v=this
var $async$$0=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.k(null,w)}})
return A.l($async$$0,w)},
$S:2}
B.b5p.prototype={
$0(){var x=0,w=A.m(y.v),v=this
var $async$$0=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.k(null,w)}})
return A.l($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(B.acH.prototype,"gb4q","Mu",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.anR,A.jl)
x(B.qB,A.J)
x(B.acH,A.P)
w(A.cV,[B.c3P,B.c3Q,B.c3R,B.c3S,B.c3T,B.c3U,B.c3V,B.c3X,B.b5o,B.b5p])
x(B.c3W,A.ev)})()
A.c8(b.typeUniverse,JSON.parse('{"anR":{"jl":["CQ"]},"qB":{"J":[],"e":[]},"acH":{"P":["qB"]}}'))
var y={x:A.E("X<~>"),y:A.E("u<n7>"),p:A.E("u<Bm>"),u:A.E("u<e>"),w:A.E("i"),q:A.E("VS"),r:A.E("kr"),b:A.E("@"),v:A.E("~")};(function constants(){D.aj0=new A.aa(0,480,0,1/0)
D.O7=new A.aB(58615,"MaterialIcons",null,!1)
D.bJj=new A.cx("Sign in someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJr=new A.cx("If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ae6=new A.cx("Sign out someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJW=new A.cx("Create Companion",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ae9=new A.cx("Companions",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_8",e:"endPart",h:b})})($__dart_deferred_initializers__,"SH9Tl4r8yDvfGY9XKGbFNiw/7ZE=");