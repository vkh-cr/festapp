((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_10",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cMx(d){var x=A.y(["id",d],y.w,y.b)
return new B.aon("CheckRoute",new A.zh(d,null),x,C.bW,null,"",null)},
aon:function aon(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
qK:function qK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ad5:function ad5(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
c68:function c68(){},
c69:function c69(){},
c6a:function c6a(){},
c6b:function c6b(){},
c6f:function c6f(d,e){this.a=d
this.b=e},
c6c:function c6c(d,e){this.a=d
this.b=e},
c6d:function c6d(d,e){this.a=d
this.b=e},
c6e:function c6e(d,e){this.a=d
this.b=e},
c6g:function c6g(d){this.a=d},
cVi(d,e,f,g,h){var x=null,w=A.jy(A.bN(x,x,x,x,x,x,A.aL(C.DL,h,x,x),x,x,x,new B.b62(e),x,x,x,x,x),d)
return A.a([w,A.jy(A.bN(x,x,x,x,x,x,A.aL(L.ip,g,x,x),x,x,x,new B.b63(f),x,x,x,x,x),!d)],y.p)},
b62:function b62(d){this.a=d},
b63:function b63(d){this.a=d},
bjK(){var x=A.ml("companions",null)
if(x instanceof A.a_F)return x.e
return null},
bbc(d,e,f){return B.dhU(d,e,f)},
dhU(d,e,f){var x=0,w=A.k(y.v)
var $async$bbc=A.f(function(g,h){if(g===1)return A.h(h,w)
while(true)switch(x){case 0:x=2
return A.d(B.Qj(d,e,A.bXM(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null)),$async$bbc)
case 2:return A.i(null,w)}})
return A.j($async$bbc,w)},
bbd(d,e,f){return B.dhV(d,e,f)},
dhV(d,e,f){var x=0,w=A.k(y.v)
var $async$bbd=A.f(function(g,h){if(g===1)return A.h(h,w)
while(true)switch(x){case 0:x=2
return A.d(A.Dj(d,e,A.bXM(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null)),$async$bbd)
case 2:return A.i(null,w)}})
return A.j($async$bbd,w)},
bba(d){return B.dhS(d)},
dhS(d){var x=0,w=A.k(y.v),v,u,t,s
var $async$bba=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:u=$.cSQ()
t=A.d6()
s=$.fT
s=(s==null?null:s.e).d
s.toString
v=y.b
x=2
return A.d(u.cU("create_companion_in_organization",A.y(["org",1,"oc",t,"usr",s,"c_name",d],y.w,v),v),$async$bba)
case 2:return A.i(null,w)}})
return A.j($async$bba,w)},
Qj(d,e,f){return B.dio(d,e,f)},
dio(d,e,f){var x=0,w=A.k(y.v),v,u,t,s,r,q,p,o,n,m,l
var $async$Qj=A.f(function(g,h){if(g===1)return A.h(h,w)
while(true)$async$outer:switch(x){case 0:m=f==null
l=m?null:f.a
if(l==null){u=$.dB().gdn().c
l=(u==null?null:u.r).a}u=y.w
t=y.b
x=3
return A.d($.iZ().cU("sign_user_to_event",A.y(["ev",e,"usr",l],u,t),t),$async$Qj)
case 3:s=h
t=J.a1(s)
switch(t.h(s,"code")){case 200:if(m)A.bn(d,A.p(($.or.e==="female"?"F":"M")+"You have been signed in.",null),C.a3)
else{r=f.e==="female"?"F":"M"
A.bn(d,A.p(r+"{user} has been signed in.",A.y(["user",f.iz()],u,u)),C.a3)}x=1
break $async$outer
case 100:A.bn(d,A.p("Cannot sign in!",null)+" "+A.p("Event is over.",null),C.aX)
x=1
break $async$outer
case 101:A.bn(d,A.p("Cannot sign in!",null)+" "+A.p("Event is full.",null),C.aX)
x=1
break $async$outer
case 102:if(m){q=A.p(($.or.e==="female"?"F":"M")+"You are already signed in at an event of this type.",null)
A.bn(d,A.p("Cannot sign in!",null)+" "+q,C.aX)}else{r=f.e==="female"?"F":"M"
q=A.p(r+"{user} is already signed in at an event of this type.",A.y(["user",f.iz()],u,u))
A.bn(d,A.p("Cannot sign in!",null)+" "+q,C.aX)}x=1
break $async$outer
case 103:if(m){q=A.p(($.or.e==="female"?"F":"M")+"You are already signed in.",null)
A.bn(d,A.p("Cannot sign in!",null)+" "+q,C.aX)}else{r=f.e==="female"?"F":"M"
q=A.p(r+"{user} is already signed in.",A.y(["user",f.iz()],u,u))
A.bn(d,A.p("Cannot sign in!",null)+" "+q,C.aX)}x=1
break $async$outer
case 107:if(m){q=A.p(($.or.e==="female"?"F":"M")+"You are already signed in at another event at the same time.",null)
A.bn(d,A.p("Cannot sign in!",null)+" "+q,C.aX)}else{r=f.e==="female"?"F":"M"
A.bn(d,A.p(r+"{user} is already signed in at another event at the same time.",A.y(["user",f.iz()],u,u)),C.a3)}x=1
break $async$outer
case 104:p=A.p("It's too soon!",null)
if(t.h(s,"events_registration_start")!=null){o=A.l6(A.ek(t.h(s,"events_registration_start")),null)
m=y.r
t=d.ac(m).r.a
t===$&&A.b()
n=B.dhv(t.geW(0)).cF(o)
m=d.ac(m).r.a
m===$&&A.b()
p=A.p("You can sign in from {time}.",A.y(["time",n+" "+A.v7(m.geW(0)).cF(o)],u,u))}q=y.q.a(A.ml("workshops",null)).f
if(q!=null&&q.length!==0){A.bn(d,q,C.aX)
x=1
break $async$outer}A.bn(d,A.p("Cannot sign in!",null)+" "+p,C.aX)
x=1
break $async$outer
case 105:A.bn(d,A.p("Cannot sign in!",null)+" "+A.p("There is already the maximum of men.",null),C.aX)
x=1
break $async$outer
case 106:A.bn(d,A.p("Cannot sign in!",null)+" "+A.p("There is already the maximum of women.",null),C.aX)
x=1
break $async$outer
default:A.bn(d,A.p("Cannot sign in!",null),C.aX)
x=1
break $async$outer}case 1:return A.i(v,w)}})
return A.j($async$Qj,w)},
dhv(d){var x=A.mI(d,A.oi(),null)
x.toString
x=new A.iN(new A.lG(),x)
x.lB("MMMMEEEEd")
return x}},D,E,G,H,I,F,K,L,M,N,O
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[66],B)
D=c[195]
E=c[166]
G=c[155]
H=c[138]
I=c[94]
F=c[263]
K=c[285]
L=c[172]
M=c[262]
N=c[190]
O=c[287]
B.aon.prototype={}
B.qK.prototype={
M(){return new B.ad5(new A.cb(C.av,$.a9()))}}
B.ad5.prototype={
T(){this.ah()
this.e=this.a.f},
Mx(){var x=0,w=A.k(y.v),v=this,u
var $async$Mx=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.e
u===$&&A.b()
x=J.bj(u)<v.a.e&&v.d.a.a.length!==0?2:3
break
case 2:u=v.d
x=4
return A.d(B.bba(u.a.a),$async$Mx)
case 4:u.iI(0,C.fL)
x=5
return A.d(A.qO(),$async$Mx)
case 5:v.e=e
if(v.c!=null)v.u(new B.c68())
case 3:return A.i(null,w)}})
return A.j($async$Mx,w)},
C8(d){return this.b6x(d)},
b6x(d){var x=0,w=A.k(y.v),v,u=this,t
var $async$C8=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=u.c
t.toString
x=3
return A.d(H.j4(t,A.p("Delete companion",null),A.p("By deleting your companion you will also sign him/her out of all signed in sessions.",null),"Ok"),$async$C8)
case 3:if(!f){x=1
break}x=4
return A.d(I.arD(d),$async$C8)
case 4:t=u.a.r.$0()
x=5
return A.d(y.x.b(t)?t:A.c9(t,y.v),$async$C8)
case 5:x=6
return A.d(A.qO(),$async$C8)
case 6:u.e=f
if(u.c!=null)u.u(new B.c69())
case 1:return A.i(v,w)}})
return A.j($async$C8,w)},
Hc(d){return this.bw3(d)},
bw3(d){var x=0,w=A.k(y.v),v,u=this,t
var $async$Hc=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=u.a.d.$0()
if(!(t==null?!1:t)){x=1
break}t=u.c
t.toString
x=3
return A.d(B.bbc(t,u.a.c,d),$async$Hc)
case 3:t=u.a.r.$0()
x=4
return A.d(y.x.b(t)?t:A.c9(t,y.v),$async$Hc)
case 4:x=5
return A.d(A.qO(),$async$Hc)
case 5:u.e=f
if(u.c!=null)u.u(new B.c6a())
case 1:return A.i(v,w)}})
return A.j($async$Hc,w)},
Hd(d){return this.bw4(d)},
bw4(d){var x=0,w=A.k(y.v),v=this,u
var $async$Hd=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(B.bbd(u,v.a.c,d),$async$Hd)
case 2:u=v.a.r.$0()
x=3
return A.d(y.x.b(u)?u:A.c9(u,y.v),$async$Hd)
case 3:x=4
return A.d(A.qO(),$async$Hd)
case 4:v.e=f
if(v.c!=null)v.u(new B.c6b())
return A.i(null,w)}})
return A.j($async$Hd,w)},
B(d){var x,w,v,u,t,s=this,r=null,q=s.a.d.$0()
if(q==null)q=!1
x=E.bC(D.ael,r)
w=y.w
w=E.bC(D.bJV,A.y(["max_companions",J.ap(B.bjK())],w,w))
v=s.e
v===$&&A.b()
v=J.bj(v)
u=s.a.e
t=y.u
u=A.dv(new A.cD(D.ajc,A.ae(A.a([w,F.ed,A.jy(A.ae(A.a([A.fC(!0,C.aS,!1,r,!0,C.v,r,A.fW(),s.d,r,r,r,r,r,2,A.c1(r,r,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.p("Companion Name",r),!0,!0,r,r,r,r,r,r,r,r,r,r,r,r,r),C.r,!0,r,!0,r,!1,r,C.aM,r,A.a([new A.K3(30,r)],y.y),r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.b0,r,r,C.aO,C.aN,r,r,r,r,r,r,r,!0,C.F,r,C.b3,r,r,r,r),F.ed,A.du(!1,E.bC(D.bKp,r),r,r,r,r,r,r,s.gb56(),r,r)],t),C.j,C.f,C.i,0,r,C.m),v<u),F.ed,new A.ao(380,150,A.kn(!0,!0,!0,r,C.v,r,C.r,new B.c6f(s,q),J.bj(s.e),r,r,r,C.dx,r,r,!1,C.G,!1),r)],t),C.j,C.f,C.P,0,r,C.m),r),r,C.r,r,r,r,C.G)
return G.h4(A.a([A.cL(!1,E.bC(O.IA,r),r,r,r,r,r,r,new B.c6g(d),r,r)],t),r,r,u,r,r,r,r,x,r,r)}}
var z=a.updateTypes(["X<~>()"])
B.c68.prototype={
$0(){},
$S:0}
B.c69.prototype={
$0(){},
$S:0}
B.c6a.prototype={
$0(){},
$S:0}
B.c6b.prototype={
$0(){},
$S:0}
B.c6f.prototype={
$2(d,e){var x,w,v=null,u=this.a,t=u.e
t===$&&A.b()
x=J.v(t,e)
t=A.a([],y.u)
if(x.ag2(u.a.c))t.push(K.OG)
t.push(M.eK)
t.push(A.bc(A.H(x.b,v,v,v,v,v,v,v,v,v,v,v,v,v),1,v))
if(!x.ag2(u.a.c)){w=this.b?new B.c6c(u,x):v
t.push(A.du(!1,E.bC(D.bJN,v),v,v,v,v,v,v,w,v,v))}if(x.ag2(u.a.c))t.push(A.du(!1,E.bC(D.aei,v),v,v,v,v,v,v,new B.c6d(u,x),v,v))
t.push(A.bN(v,v,v,v,v,v,N.j7,v,v,v,new B.c6e(u,x),v,v,v,v,v))
return new A.a0(C.aq,A.aq(t,C.j,C.f,C.i,0,v),v)},
$S:123}
B.c6c.prototype={
$0(){return this.a.Hc(this.b)},
$S:0}
B.c6d.prototype={
$0(){return this.a.Hd(this.b)},
$S:0}
B.c6e.prototype={
$0(){return this.a.C8(this.b)},
$S:0}
B.c6g.prototype={
$0(){return A.bt(this.a,!1).dr()},
$S:0}
B.b62.prototype={
$0(){var x=0,w=A.k(y.v),v=this
var $async$$0=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.i(null,w)}})
return A.j($async$$0,w)},
$S:2}
B.b63.prototype={
$0(){var x=0,w=A.k(y.v),v=this
var $async$$0=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.i(null,w)}})
return A.j($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(B.ad5.prototype,"gb56","Mx",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.aon,A.jq)
x(B.qK,A.L)
x(B.ad5,A.N)
w(A.d_,[B.c68,B.c69,B.c6a,B.c6b,B.c6c,B.c6d,B.c6e,B.c6g,B.b62,B.b63])
x(B.c6f,A.ey)})()
A.ce(b.typeUniverse,JSON.parse('{"aon":{"jq":["zh"]},"qK":{"L":[],"e":[]},"ad5":{"N":["qK"]}}'))
var y={x:A.E("X<~>"),y:A.E("u<nh>"),p:A.E("u<BA>"),u:A.E("u<e>"),w:A.E("l"),q:A.E("acc"),r:A.E("kv"),b:A.E("@"),v:A.E("~")};(function constants(){D.ajc=new A.ab(0,480,0,1/0)
D.Ol=new A.az(58615,"MaterialIcons",null,!1)
D.bJN=new A.cx("Sign in someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJV=new A.cx("If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aei=new A.cx("Sign out someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bKp=new A.cx("Create Companion",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ael=new A.cx("Companions",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_10",e:"endPart",h:b})})($__dart_deferred_initializers__,"zRAdP0ItrHgtQhp31zNkS0y5bUA=");