((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_1",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cVR(){return new B.Dk(null)},
Dk:function Dk(d){this.a=d},
aNE:function aNE(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.f=null},
c4T:function c4T(d){this.a=d},
c4U:function c4U(d,e){this.a=d
this.b=e},
c4R:function c4R(d,e){this.a=d
this.b=e},
c4S:function c4S(d){this.a=d},
aX9(d,e){var x=0,w=A.k(y.b),v,u
var $async$aX9=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.b
x=3
return A.c($.dV().e4("set_user_password_token",A.z(["token",d,"password",e],y.w,u),u),$async$aX9)
case 3:v=g
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$aX9,w)}},E,I,K,L,M,D,N,O,P,Q,R,F,S,T,U,V,G,H
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[21],B)
E=c[104]
I=c[57]
K=c[200]
L=c[189]
M=c[170]
D=c[331]
N=c[194]
O=c[156]
P=c[103]
Q=c[186]
R=c[332]
F=c[210]
S=c[245]
T=c[226]
U=c[333]
V=c[327]
G=c[192]
H=c[95]
B.Dk.prototype={
M(){return new B.aNE(new A.aJ(null,y.o),new Q.dy(T.aS,$.ae()))}}
B.aNE.prototype={
l(){this.ai()},
aW(){var x=0,w=A.k(y.v),v=this,u,t,s,r,q
var $async$aW=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.ck()
s=A.rQ()
u=A.bH("token=(?<token>[^&]+)",!0,!1,!1).ri(s.j(0))
if(u!=null)try{r=u.ac6("token")
r.toString
v.f=r}catch(p){r=A.af(p)
if(y.g.b(r)){t=r
r=v.c
r.toString
A.bD(r,J.au(t),C.a3)}else throw p}return A.i(null,w)}})
return A.j($async$aW,w)},
A(d){var x,w,v,u,t=null,s=G.bb(D.b49,t)
s=L.i5(t,t,t,!0,t,t,1,!0,t,t,!1,t,!1,t,t,M.tl(new B.c4T(d)),t,!0,t,t,t,t,t,s,t,t,t,1,t)
x=y.w
x=A.X(A.v("Welcome in {name}!",A.z(["name","Festapp"],x,x)),t,t,t,t,t,t,t,R.DB,t,t,t,t,t)
w=A.X(A.v("Create a new password to continue.",t),t,t,t,t,t,t,t,S.fC,t,t,t,t,t)
v=A.v("New Password",t)
u=A.cr(20)
return K.eW(s,t,new A.cq(C.J,t,t,new A.cO(new A.a9(0,820,0,1/0),N.em(O.tL(t,t,new E.xk(A.aw(A.a([x,F.ad,w,U.a3V,new A.a4(V.zh,new P.I3(v,this.e,"password",t),t),F.ad,A.aG(t,A.de(!1,G.bb(D.b4N,t),t,t,t,t,t,t,new B.c4U(this,d),t,t),C.k,t,t,new A.by(C.cs,t,t,u,t,t,t,C.Q),t,50,t,t,t,t,250)],y.u),C.i,C.f,C.h,t,C.p),t),this.d,t,t),t,C.v,t,t,t,C.F),t),t),t,t,t,t,t)}}
var z=a.updateTypes([])
B.c4T.prototype={
$0(){return H.ayg(this.a)},
$S:0}
B.c4U.prototype={
$0(){var x=0,w=A.k(y.v),v=this,u,t,s,r
var $async$$0=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:r=v.a
x=r.d.gX().mu()?2:3
break
case 2:E.a6j(!0)
u=r.f
u.toString
t=v.b
s=y.F
x=4
return A.c(A.aoZ(B.aX9(u,r.e.a.a).aQ(0,new B.c4R(r,t),s),new B.c4S(t),s,y.E),$async$$0)
case 4:case 3:return A.i(null,w)}})
return A.j($async$$0,w)},
$S:1}
B.c4R.prototype={
$1(d){var x=0,w=A.k(y.F),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:u=J.a2(d)
x=J.m(u.i(d,"code"),403)||J.m(u.i(d,"code"),404)?2:4
break
case 2:A.bD(v.b,A.v("Token is not valid.",null),C.b6)
x=3
break
case 4:x=J.m(u.i(d,"code"),200)?5:6
break
case 5:x=7
return A.c(I.LW(u.i(d,"email"),v.a.e.a.a),$async$$1)
case 7:u=v.b
A.bD(u,A.v("Password has been changed.",null),C.a3)
H.ayg(u)
case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:83}
B.c4S.prototype={
$2(d,e){A.bD(this.a,J.au(d),C.a3)},
$S:260};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Dk,A.F)
x(B.aNE,A.K)
w(A.ci,[B.c4T,B.c4U])
x(B.c4R,A.bE)
x(B.c4S,A.dh)})()
A.bi(b.typeUniverse,JSON.parse('{"Dk":{"F":[],"d":[]},"aNE":{"K":["Dk"]}}'))
var y={g:A.y("b6"),u:A.y("q<d>"),o:A.y("aJ<nr>"),F:A.y("az"),E:A.y("E"),w:A.y("e"),b:A.y("@"),v:A.y("~")};(function constants(){D.b49=new A.c_("New Password",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b2d=new A.a_(!0,C.m,null,null,null,null,25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4N=new A.c_("Change Password",null,D.b2d,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_1",e:"endPart",h:b})})($__dart_deferred_initializers__,"H4DFausO4AtppRO6frMrY2tKg8o=");