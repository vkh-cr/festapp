((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_8",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,G,H,I,F,K,L,M,N,O,B={
cJH(d){var x=A.y(["id",d],y.w,y.b)
return new B.anU("CheckRoute",new A.z4(d,null),x,C.bT,null,"",null)},
anU:function anU(d,e,f,g,h,i,j){var _=this
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
acJ:function acJ(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
c3S:function c3S(){},
c3T:function c3T(){},
c3U:function c3U(){},
c3V:function c3V(){},
c3Z:function c3Z(d,e){this.a=d
this.b=e},
c3W:function c3W(d,e){this.a=d
this.b=e},
c3X:function c3X(d,e){this.a=d
this.b=e},
c3Y:function c3Y(d,e){this.a=d
this.b=e},
c4_:function c4_(d){this.a=d},
cSg(d,e,f,g,h){var x=null,w=A.js(A.bM(x,x,x,x,x,x,A.aS(C.Dz,h,x,x),x,x,x,new B.b5p(e),x,x,x,x,x),d)
return A.a([w,A.js(A.bM(x,x,x,x,x,x,A.aS(L.j3,g,x,x),x,x,x,new B.b5q(f),x,x,x,x,x),!d)],y.p)},
b5p:function b5p(d){this.a=d},
b5q:function b5q(d){this.a=d},
biz(){var x=A.pq("companions",null)
if(x instanceof A.PL)return x.e
return null},
bac(d,e,f){return B.deB(d,e,f)},
deB(d,e,f){var x=0,w=A.m(y.v)
var $async$bac=A.h(function(g,h){if(g===1)return A.j(h,w)
while(true)switch(x){case 0:x=2
return A.d(B.Qa(d,e,A.bVv(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null)),$async$bac)
case 2:return A.k(null,w)}})
return A.l($async$bac,w)},
bad(d,e,f){return B.deC(d,e,f)},
deC(d,e,f){var x=0,w=A.m(y.v)
var $async$bad=A.h(function(g,h){if(g===1)return A.j(h,w)
while(true)switch(x){case 0:x=2
return A.d(A.D9(d,e,A.bVv(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null)),$async$bad)
case 2:return A.k(null,w)}})
return A.l($async$bad,w)},
baa(d){return B.dez(d)},
dez(d){var x=0,w=A.m(y.v),v,u,t,s
var $async$baa=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:u=$.cPR()
t=A.df()
s=$.fP
s=(s==null?null:s.e).c
s.toString
v=y.b
x=2
return A.d(u.dc("create_companion_in_organization",A.y(["org",1,"oc",t,"usr",s,"c_name",d],y.w,v),v),$async$baa)
case 2:return A.k(null,w)}})
return A.l($async$baa,w)},
Qa(d,e,f){return B.df6(d,e,f)},
df6(d,e,f){var x=0,w=A.m(y.v),v,u,t,s,r,q,p,o,n,m,l
var $async$Qa=A.h(function(g,h){if(g===1)return A.j(h,w)
while(true)$async$outer:switch(x){case 0:m=f==null
l=m?null:f.a
if(l==null){u=$.dD().gds().c
l=(u==null?null:u.r).a}u=y.w
t=y.b
x=3
return A.d($.iR().dc("sign_user_to_event",A.y(["ev",e,"usr",l],u,t),t),$async$Qa)
case 3:s=h
t=J.a1(s)
switch(t.h(s,"code")){case 200:if(m)A.bH(d,A.q(($.og.e==="female"?"F":"M")+"You have been signed in.",null),C.ac)
else{r=f.e==="female"?"F":"M"
A.bH(d,A.q(r+"{user} has been signed in.",A.y(["user",f.iy()],u,u)),C.ac)}x=1
break $async$outer
case 100:A.bH(d,A.q("Cannot sign in!",null)+" "+A.q("Event is over.",null),C.b8)
x=1
break $async$outer
case 101:A.bH(d,A.q("Cannot sign in!",null)+" "+A.q("Event is full.",null),C.b8)
x=1
break $async$outer
case 102:if(m){q=A.q(($.og.e==="female"?"F":"M")+"You are already signed in at an event of this type.",null)
A.bH(d,A.q("Cannot sign in!",null)+" "+q,C.b8)}else{r=f.e==="female"?"F":"M"
q=A.q(r+"{user} is already signed in at an event of this type.",A.y(["user",f.iy()],u,u))
A.bH(d,A.q("Cannot sign in!",null)+" "+q,C.b8)}x=1
break $async$outer
case 103:if(m){q=A.q(($.og.e==="female"?"F":"M")+"You are already signed in.",null)
A.bH(d,A.q("Cannot sign in!",null)+" "+q,C.b8)}else{r=f.e==="female"?"F":"M"
q=A.q(r+"{user} is already signed in.",A.y(["user",f.iy()],u,u))
A.bH(d,A.q("Cannot sign in!",null)+" "+q,C.b8)}x=1
break $async$outer
case 107:if(m){q=A.q(($.og.e==="female"?"F":"M")+"You are already signed in at another event at the same time.",null)
A.bH(d,A.q("Cannot sign in!",null)+" "+q,C.b8)}else{r=f.e==="female"?"F":"M"
A.bH(d,A.q(r+"{user} is already signed in at another event at the same time.",A.y(["user",f.iy()],u,u)),C.ac)}x=1
break $async$outer
case 104:p=A.q("It's too soon!",null)
if(t.h(s,"events_registration_start")!=null){o=A.l3(A.em(t.h(s,"events_registration_start")),null)
m=y.r
t=d.ac(m).r.a
t===$&&A.b()
n=B.dec(t.geV(0)).cF(o)
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
return A.l($async$Qa,w)},
dec(d){var x=A.mA(d,A.o9(),null)
x.toString
x=new A.iG(new A.lA(),x)
x.lz("MMMMEEEEd")
return x}},D
J=c[1]
A=c[0]
C=c[2]
E=c[166]
G=c[155]
H=c[139]
I=c[95]
F=c[262]
K=c[284]
L=c[172]
M=c[261]
N=c[190]
O=c[286]
B=a.updateHolder(c[66],B)
D=c[195]
B.anU.prototype={}
B.qB.prototype={
M(){return new B.acJ(new A.cl(C.ay,$.a8()))}}
B.acJ.prototype={
S(){this.ah()
this.e=this.a.f},
Mt(){var x=0,w=A.m(y.v),v=this,u
var $async$Mt=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=v.e
u===$&&A.b()
x=J.bv(u)<v.a.e&&v.d.a.a.length!==0?2:3
break
case 2:u=v.d
x=4
return A.d(B.baa(u.a.a),$async$Mt)
case 4:u.iR(0,C.hf)
x=5
return A.d(A.qF(),$async$Mt)
case 5:v.e=e
if(v.c!=null)v.v(new B.c3S())
case 3:return A.k(null,w)}})
return A.l($async$Mt,w)},
C1(d){return this.b5Q(d)},
b5Q(d){var x=0,w=A.m(y.v),v,u=this,t
var $async$C1=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:t=u.c
t.toString
x=3
return A.d(H.l4(t,A.q("Delete companion",null),A.q("By deleting your companion you will also sign him/her out of all signed in sessions.",null),"Ok"),$async$C1)
case 3:if(!f){x=1
break}x=4
return A.d(I.ar5(d),$async$C1)
case 4:t=u.a.r.$0()
x=5
return A.d(y.x.b(t)?t:A.cb(t,y.v),$async$C1)
case 5:x=6
return A.d(A.qF(),$async$C1)
case 6:u.e=f
if(u.c!=null)u.v(new B.c3T())
case 1:return A.k(v,w)}})
return A.l($async$C1,w)},
H8(d){return this.bv6(d)},
bv6(d){var x=0,w=A.m(y.v),v,u=this,t
var $async$H8=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:t=u.a.d.$0()
if(!(t==null?!1:t)){x=1
break}t=u.c
t.toString
x=3
return A.d(B.bac(t,u.a.c,d),$async$H8)
case 3:t=u.a.r.$0()
x=4
return A.d(y.x.b(t)?t:A.cb(t,y.v),$async$H8)
case 4:x=5
return A.d(A.qF(),$async$H8)
case 5:u.e=f
if(u.c!=null)u.v(new B.c3U())
case 1:return A.k(v,w)}})
return A.l($async$H8,w)},
H9(d){return this.bv7(d)},
bv7(d){var x=0,w=A.m(y.v),v=this,u
var $async$H9=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(B.bad(u,v.a.c,d),$async$H9)
case 2:u=v.a.r.$0()
x=3
return A.d(y.x.b(u)?u:A.cb(u,y.v),$async$H9)
case 3:x=4
return A.d(A.qF(),$async$H9)
case 4:v.e=f
if(v.c!=null)v.v(new B.c3V())
return A.k(null,w)}})
return A.l($async$H9,w)},
B(d){var x,w,v,u,t,s=this,r=null,q=s.a.d.$0()
if(q==null)q=!1
x=E.by(D.aeb,r)
w=y.w
w=E.by(D.bJu,A.y(["max_companions",J.as(B.biz())],w,w))
v=s.e
v===$&&A.b()
v=J.bv(v)
u=s.a.e
t=y.u
u=A.dF(new A.cH(D.aj2,A.ae(A.a([w,F.ee,A.js(A.ae(A.a([A.fz(!0,C.aR,!1,r,!0,C.v,r,A.fS(),s.d,r,r,r,r,r,2,A.c7(r,r,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.q("Companion Name",r),!0,!0,r,r,r,r,r,r,r,r,r,r,r,r,r),C.r,!0,r,!0,r,!1,r,C.aL,r,A.a([new A.JU(30,r)],y.y),r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.b_,r,r,C.aO,C.aM,r,r,r,r,r,r,r,!0,C.F,r,C.b2,r,r,r,r),F.ee,A.dz(!1,E.by(D.bJZ,r),r,r,r,r,r,r,s.gb4p(),r,r)],t),C.j,C.f,C.i,0,r,C.m),v<u),F.ee,new A.ao(380,150,A.kh(!0,!0,!0,r,C.v,r,C.r,new B.c3Z(s,q),J.bv(s.e),r,r,r,C.du,r,r,!1,C.I,!1),r)],t),C.j,C.f,C.R,0,r,C.m),r),r,C.r,r,r,r,C.I)
return G.hE(A.a([A.d6(!1,E.by(O.Io,r),r,r,r,r,r,r,new B.c4_(d),r,r)],t),r,r,u,r,r,r,r,x,r,r)}}
var z=a.updateTypes(["X<~>()"])
B.c3S.prototype={
$0(){},
$S:0}
B.c3T.prototype={
$0(){},
$S:0}
B.c3U.prototype={
$0(){},
$S:0}
B.c3V.prototype={
$0(){},
$S:0}
B.c3Z.prototype={
$2(d,e){var x,w,v=null,u=this.a,t=u.e
t===$&&A.b()
x=J.v(t,e)
t=A.a([],y.u)
if(x.afF(u.a.c))t.push(K.Ov)
t.push(M.fE)
t.push(A.bb(A.L(x.b,v,v,v,v,v,v,v,v,v,v,v,v,v),1,v))
if(!x.afF(u.a.c)){w=this.b?new B.c3W(u,x):v
t.push(A.dz(!1,E.by(D.bJm,v),v,v,v,v,v,v,w,v,v))}if(x.afF(u.a.c))t.push(A.dz(!1,E.by(D.ae8,v),v,v,v,v,v,v,new B.c3X(u,x),v,v))
t.push(A.bM(v,v,v,v,v,v,N.j4,v,v,v,new B.c3Y(u,x),v,v,v,v,v))
return new A.a0(C.au,A.ar(t,C.j,C.f,C.i,0,v),v)},
$S:117}
B.c3W.prototype={
$0(){return this.a.H8(this.b)},
$S:0}
B.c3X.prototype={
$0(){return this.a.H9(this.b)},
$S:0}
B.c3Y.prototype={
$0(){return this.a.C1(this.b)},
$S:0}
B.c4_.prototype={
$0(){return A.bI(this.a,!1).dC()},
$S:0}
B.b5p.prototype={
$0(){var x=0,w=A.m(y.v),v=this
var $async$$0=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.k(null,w)}})
return A.l($async$$0,w)},
$S:2}
B.b5q.prototype={
$0(){var x=0,w=A.m(y.v),v=this
var $async$$0=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.k(null,w)}})
return A.l($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(B.acJ.prototype,"gb4p","Mt",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.anU,A.j1)
x(B.qB,A.J)
x(B.acJ,A.P)
w(A.cW,[B.c3S,B.c3T,B.c3U,B.c3V,B.c3W,B.c3X,B.c3Y,B.c4_,B.b5p,B.b5q])
x(B.c3Z,A.ev)})()
A.c9(b.typeUniverse,JSON.parse('{"anU":{"j1":["z4"]},"qB":{"J":[],"e":[]},"acJ":{"P":["qB"]}}'))
var y={x:A.E("X<~>"),y:A.E("u<n7>"),p:A.E("u<Br>"),u:A.E("u<e>"),w:A.E("i"),q:A.E("VV"),r:A.E("kr"),b:A.E("@"),v:A.E("~")};(function constants(){D.aj2=new A.aa(0,480,0,1/0)
D.Oa=new A.az(58615,"MaterialIcons",null,!1)
D.bJm=new A.cx("Sign in someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJu=new A.cx("If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ae8=new A.cx("Sign out someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJZ=new A.cx("Create Companion",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aeb=new A.cx("Companions",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_8",e:"endPart",h:b})})($__dart_deferred_initializers__,"LUIf1rlfT2EgJMaXexMkiVRAGt0=");