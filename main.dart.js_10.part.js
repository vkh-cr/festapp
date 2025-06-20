((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_10",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cL_(d){var x=A.x(["id",d],y.w,y.b)
return new B.ao5("CheckRoute",new A.z9(d,null),x,C.bT,null,"",null)},
ao5:function ao5(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
qF:function qF(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
acR:function acR(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
c4W:function c4W(){},
c4X:function c4X(){},
c4Y:function c4Y(){},
c4Z:function c4Z(){},
c52:function c52(d,e){this.a=d
this.b=e},
c5_:function c5_(d,e){this.a=d
this.b=e},
c50:function c50(d,e){this.a=d
this.b=e},
c51:function c51(d,e){this.a=d
this.b=e},
c53:function c53(d){this.a=d},
cTF(d,e,f,g,h){var x=null,w=A.jx(A.bM(x,x,x,x,x,x,A.aS(C.DB,h,x,x),x,x,x,new B.b5K(e),x,x,x,x,x),d)
return A.a([w,A.jx(A.bM(x,x,x,x,x,x,A.aS(L.j4,g,x,x),x,x,x,new B.b5L(f),x,x,x,x,x),!d)],y.p)},
b5K:function b5K(d){this.a=d},
b5L:function b5L(d){this.a=d},
bj9(){var x=A.mj("companions",null)
if(x instanceof A.a_v)return x.e
return null},
baB(d,e,f){return B.dge(d,e,f)},
dge(d,e,f){var x=0,w=A.l(y.v)
var $async$baB=A.f(function(g,h){if(g===1)return A.i(h,w)
while(true)switch(x){case 0:x=2
return A.d(B.Qc(d,e,A.bWb(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null)),$async$baB)
case 2:return A.j(null,w)}})
return A.k($async$baB,w)},
baC(d,e,f){return B.dgf(d,e,f)},
dgf(d,e,f){var x=0,w=A.l(y.v)
var $async$baC=A.f(function(g,h){if(g===1)return A.i(h,w)
while(true)switch(x){case 0:x=2
return A.d(A.Df(d,e,A.bWb(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null)),$async$baC)
case 2:return A.j(null,w)}})
return A.k($async$baC,w)},
baz(d){return B.dgc(d)},
dgc(d){var x=0,w=A.l(y.v),v,u,t,s
var $async$baz=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=$.cRf()
t=A.d3()
s=$.fI
s=(s==null?null:s.e).d
s.toString
v=y.b
x=2
return A.d(u.d0("create_companion_in_organization",A.x(["org",1,"oc",t,"usr",s,"c_name",d],y.w,v),v),$async$baz)
case 2:return A.j(null,w)}})
return A.k($async$baz,w)},
Qc(d,e,f){return B.dgK(d,e,f)},
dgK(d,e,f){var x=0,w=A.l(y.v),v,u,t,s,r,q,p,o,n,m,l
var $async$Qc=A.f(function(g,h){if(g===1)return A.i(h,w)
while(true)$async$outer:switch(x){case 0:m=f==null
l=m?null:f.a
if(l==null){u=$.dA().gdl().c
l=(u==null?null:u.r).a}u=y.w
t=y.b
x=3
return A.d($.iW().d0("sign_user_to_event",A.x(["ev",e,"usr",l],u,t),t),$async$Qc)
case 3:s=h
t=J.a0(s)
switch(t.h(s,"code")){case 200:if(m)A.bx(d,A.q(($.ok.e==="female"?"F":"M")+"You have been signed in.",null),C.a8)
else{r=f.e==="female"?"F":"M"
A.bx(d,A.q(r+"{user} has been signed in.",A.x(["user",f.iy()],u,u)),C.a8)}x=1
break $async$outer
case 100:A.bx(d,A.q("Cannot sign in!",null)+" "+A.q("Event is over.",null),C.b8)
x=1
break $async$outer
case 101:A.bx(d,A.q("Cannot sign in!",null)+" "+A.q("Event is full.",null),C.b8)
x=1
break $async$outer
case 102:if(m){q=A.q(($.ok.e==="female"?"F":"M")+"You are already signed in at an event of this type.",null)
A.bx(d,A.q("Cannot sign in!",null)+" "+q,C.b8)}else{r=f.e==="female"?"F":"M"
q=A.q(r+"{user} is already signed in at an event of this type.",A.x(["user",f.iy()],u,u))
A.bx(d,A.q("Cannot sign in!",null)+" "+q,C.b8)}x=1
break $async$outer
case 103:if(m){q=A.q(($.ok.e==="female"?"F":"M")+"You are already signed in.",null)
A.bx(d,A.q("Cannot sign in!",null)+" "+q,C.b8)}else{r=f.e==="female"?"F":"M"
q=A.q(r+"{user} is already signed in.",A.x(["user",f.iy()],u,u))
A.bx(d,A.q("Cannot sign in!",null)+" "+q,C.b8)}x=1
break $async$outer
case 107:if(m){q=A.q(($.ok.e==="female"?"F":"M")+"You are already signed in at another event at the same time.",null)
A.bx(d,A.q("Cannot sign in!",null)+" "+q,C.b8)}else{r=f.e==="female"?"F":"M"
A.bx(d,A.q(r+"{user} is already signed in at another event at the same time.",A.x(["user",f.iy()],u,u)),C.a8)}x=1
break $async$outer
case 104:p=A.q("It's too soon!",null)
if(t.h(s,"events_registration_start")!=null){o=A.l6(A.ej(t.h(s,"events_registration_start")),null)
m=y.r
t=d.ac(m).r.a
t===$&&A.b()
n=B.dfQ(t.geV(0)).cF(o)
m=d.ac(m).r.a
m===$&&A.b()
p=A.q("You can sign in from {time}.",A.x(["time",n+" "+A.v0(m.geV(0)).cF(o)],u,u))}q=y.q.a(A.mj("workshops",null)).f
if(q!=null&&q.length!==0){A.bx(d,q,C.b8)
x=1
break $async$outer}A.bx(d,A.q("Cannot sign in!",null)+" "+p,C.b8)
x=1
break $async$outer
case 105:A.bx(d,A.q("Cannot sign in!",null)+" "+A.q("There is already the maximum of men.",null),C.b8)
x=1
break $async$outer
case 106:A.bx(d,A.q("Cannot sign in!",null)+" "+A.q("There is already the maximum of women.",null),C.b8)
x=1
break $async$outer
default:A.bx(d,A.q("Cannot sign in!",null),C.b8)
x=1
break $async$outer}case 1:return A.j(v,w)}})
return A.k($async$Qc,w)},
dfQ(d){var x=A.mD(d,A.oc(),null)
x.toString
x=new A.iL(new A.lD(),x)
x.lA("MMMMEEEEd")
return x}},D,E,G,H,I,F,K,L,M,N,O
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[66],B)
D=c[195]
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
B.ao5.prototype={}
B.qF.prototype={
N(){return new B.acR(new A.cm(C.ay,$.a8()))}}
B.acR.prototype={
T(){this.ah()
this.e=this.a.f},
Mt(){var x=0,w=A.l(y.v),v=this,u
var $async$Mt=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.e
u===$&&A.b()
x=J.bp(u)<v.a.e&&v.d.a.a.length!==0?2:3
break
case 2:u=v.d
x=4
return A.d(B.baz(u.a.a),$async$Mt)
case 4:u.iH(0,C.fH)
x=5
return A.d(A.qJ(),$async$Mt)
case 5:v.e=e
if(v.c!=null)v.v(new B.c4W())
case 3:return A.j(null,w)}})
return A.k($async$Mt,w)},
C3(d){return this.b66(d)},
b66(d){var x=0,w=A.l(y.v),v,u=this,t
var $async$C3=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=u.c
t.toString
x=3
return A.d(H.j1(t,A.q("Delete companion",null),A.q("By deleting your companion you will also sign him/her out of all signed in sessions.",null),"Ok"),$async$C3)
case 3:if(!f){x=1
break}x=4
return A.d(I.arh(d),$async$C3)
case 4:t=u.a.r.$0()
x=5
return A.d(y.x.b(t)?t:A.c9(t,y.v),$async$C3)
case 5:x=6
return A.d(A.qJ(),$async$C3)
case 6:u.e=f
if(u.c!=null)u.v(new B.c4X())
case 1:return A.j(v,w)}})
return A.k($async$C3,w)},
H9(d){return this.bvo(d)},
bvo(d){var x=0,w=A.l(y.v),v,u=this,t
var $async$H9=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=u.a.d.$0()
if(!(t==null?!1:t)){x=1
break}t=u.c
t.toString
x=3
return A.d(B.baB(t,u.a.c,d),$async$H9)
case 3:t=u.a.r.$0()
x=4
return A.d(y.x.b(t)?t:A.c9(t,y.v),$async$H9)
case 4:x=5
return A.d(A.qJ(),$async$H9)
case 5:u.e=f
if(u.c!=null)u.v(new B.c4Y())
case 1:return A.j(v,w)}})
return A.k($async$H9,w)},
Ha(d){return this.bvp(d)},
bvp(d){var x=0,w=A.l(y.v),v=this,u
var $async$Ha=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(B.baC(u,v.a.c,d),$async$Ha)
case 2:u=v.a.r.$0()
x=3
return A.d(y.x.b(u)?u:A.c9(u,y.v),$async$Ha)
case 3:x=4
return A.d(A.qJ(),$async$Ha)
case 4:v.e=f
if(v.c!=null)v.v(new B.c4Z())
return A.j(null,w)}})
return A.k($async$Ha,w)},
B(d){var x,w,v,u,t,s=this,r=null,q=s.a.d.$0()
if(q==null)q=!1
x=E.bA(D.aed,r)
w=y.w
w=E.bA(D.bJA,A.x(["max_companions",J.as(B.bj9())],w,w))
v=s.e
v===$&&A.b()
v=J.bp(v)
u=s.a.e
t=y.u
u=A.dB(new A.cH(D.aj4,A.ae(A.a([w,F.ee,A.jx(A.ae(A.a([A.fC(!0,C.aR,!1,r,!0,C.v,r,A.fU(),s.d,r,r,r,r,r,2,A.c7(r,r,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.q("Companion Name",r),!0,!0,r,r,r,r,r,r,r,r,r,r,r,r,r),C.q,!0,r,!0,r,!1,r,C.aL,r,A.a([new A.JZ(30,r)],y.y),r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.b_,r,r,C.aO,C.aM,r,r,r,r,r,r,r,!0,C.F,r,C.b2,r,r,r,r),F.ee,A.du(!1,E.bA(D.bK4,r),r,r,r,r,r,r,s.gb4G(),r,r)],t),C.j,C.f,C.i,0,r,C.m),v<u),F.ee,new A.ao(380,150,A.kk(!0,!0,!0,r,C.v,r,C.q,new B.c52(s,q),J.bp(s.e),r,r,r,C.du,r,r,!1,C.I,!1),r)],t),C.j,C.f,C.R,0,r,C.m),r),r,C.q,r,r,r,C.I)
return G.hs(A.a([A.d5(!1,E.bA(O.Ip,r),r,r,r,r,r,r,new B.c53(d),r,r)],t),r,r,u,r,r,r,r,x,r,r)}}
var z=a.updateTypes(["X<~>()"])
B.c4W.prototype={
$0(){},
$S:0}
B.c4X.prototype={
$0(){},
$S:0}
B.c4Y.prototype={
$0(){},
$S:0}
B.c4Z.prototype={
$0(){},
$S:0}
B.c52.prototype={
$2(d,e){var x,w,v=null,u=this.a,t=u.e
t===$&&A.b()
x=J.v(t,e)
t=A.a([],y.u)
if(x.afO(u.a.c))t.push(K.Ow)
t.push(M.fE)
t.push(A.bb(A.L(x.b,v,v,v,v,v,v,v,v,v,v,v,v,v),1,v))
if(!x.afO(u.a.c)){w=this.b?new B.c5_(u,x):v
t.push(A.du(!1,E.bA(D.bJs,v),v,v,v,v,v,v,w,v,v))}if(x.afO(u.a.c))t.push(A.du(!1,E.bA(D.aea,v),v,v,v,v,v,v,new B.c50(u,x),v,v))
t.push(A.bM(v,v,v,v,v,v,N.j5,v,v,v,new B.c51(u,x),v,v,v,v,v))
return new A.a1(C.au,A.ar(t,C.j,C.f,C.i,0,v),v)},
$S:112}
B.c5_.prototype={
$0(){return this.a.H9(this.b)},
$S:0}
B.c50.prototype={
$0(){return this.a.Ha(this.b)},
$S:0}
B.c51.prototype={
$0(){return this.a.C3(this.b)},
$S:0}
B.c53.prototype={
$0(){return A.bG(this.a,!1).dC()},
$S:0}
B.b5K.prototype={
$0(){var x=0,w=A.l(y.v),v=this
var $async$$0=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2}
B.b5L.prototype={
$0(){var x=0,w=A.l(y.v),v=this
var $async$$0=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(B.acR.prototype,"gb4G","Mt",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.ao5,A.j7)
x(B.qF,A.K)
x(B.acR,A.P)
w(A.cY,[B.c4W,B.c4X,B.c4Y,B.c4Z,B.c5_,B.c50,B.c51,B.c53,B.b5K,B.b5L])
x(B.c52,A.ex)})()
A.ca(b.typeUniverse,JSON.parse('{"ao5":{"j7":["z9"]},"qF":{"K":[],"e":[]},"acR":{"P":["qF"]}}'))
var y={x:A.E("X<~>"),y:A.E("u<na>"),p:A.E("u<Bw>"),u:A.E("u<e>"),w:A.E("h"),q:A.E("abZ"),r:A.E("kt"),b:A.E("@"),v:A.E("~")};(function constants(){D.aj4=new A.aa(0,480,0,1/0)
D.Ob=new A.az(58615,"MaterialIcons",null,!1)
D.bJs=new A.cx("Sign in someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJA=new A.cx("If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aea=new A.cx("Sign out someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bK4=new A.cx("Create Companion",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aed=new A.cx("Companions",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_10",e:"endPart",h:b})})($__dart_deferred_initializers__,"b/YBjr4pSQhMQ6sREEjmEw52m5o=");