((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_1",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cVg(){return new B.Dk(null)},
Dk:function Dk(d){this.a=d},
aNv:function aNv(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.f=null},
c4I:function c4I(d){this.a=d},
c4J:function c4J(d,e){this.a=d
this.b=e},
c4G:function c4G(d,e){this.a=d
this.b=e},
c4H:function c4H(d){this.a=d},
aX3(d,e){var x=0,w=A.l(y.b),v,u
var $async$aX3=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.b
x=3
return A.c($.e1().e4("set_user_password_token",A.y(["token",d,"password",e],y.w,u),u),$async$aX3)
case 3:v=g
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$aX3,w)}},E,I,K,L,M,N,D,O,P,Q,R,F,S,T,U,V,G,H
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[21],B)
E=c[103]
I=c[58]
K=c[198]
L=c[187]
M=c[167]
N=c[192]
D=c[329]
O=c[153]
P=c[102]
Q=c[185]
R=c[330]
F=c[208]
S=c[244]
T=c[225]
U=c[331]
V=c[325]
G=c[190]
H=c[94]
B.Dk.prototype={
N(){return new B.aNv(new A.aL(null,y.o),new Q.dF(T.aS,$.ae()))}}
B.aNv.prototype={
l(){this.ai()},
aW(){var x=0,w=A.l(y.v),v=this,u,t,s,r,q
var $async$aW=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.ck()
s=A.rM()
u=A.bE("token=(?<token>[^&]+)",!0,!1,!1).ri(s.j(0))
if(u!=null)try{r=u.ac7("token")
r.toString
v.f=r}catch(p){r=A.af(p)
if(y.g.b(r)){t=r
r=v.c
r.toString
A.bB(r,J.au(t),C.a3)}else throw p}return A.j(null,w)}})
return A.k($async$aW,w)},
A(d){var x,w,v,u,t=null,s=G.bo(D.b45,t)
s=L.i5(t,t,t,!0,t,t,1,!0,t,t,!1,t,!1,t,t,M.th(new B.c4I(d)),t,!0,t,t,t,t,t,s,t,t,t,1,t)
x=y.w
x=A.Y(A.w("Welcome in {name}!",A.y(["name","Festapp"],x,x)),t,t,t,t,t,t,t,R.DB,t,t,t,t,t)
w=A.Y(A.w("Create a new password to continue.",t),t,t,t,t,t,t,t,S.fA,t,t,t,t,t)
v=A.w("New Password",t)
u=A.cJ(20)
return K.eW(s,t,new A.cu(C.J,t,t,new A.cO(new A.a9(0,820,0,1/0),N.el(O.tI(t,t,new E.xj(A.ax(A.a([x,F.ai,w,U.a3O,new A.a6(V.ze,new P.I0(v,this.e,"password",t),t),F.ai,A.aJ(t,A.de(!1,G.bo(D.b4J,t),t,t,t,t,t,t,new B.c4J(this,d),t,t),C.k,t,t,new A.bD(C.cp,t,t,u,t,t,t,C.Q),t,50,t,t,t,t,250)],y.u),C.j,C.f,C.h,t,C.p),t),this.d,t,t),t,C.u,t,t,t,C.F),t),t),t,t,t,t,t)}}
var z=a.updateTypes([])
B.c4I.prototype={
$0(){return H.ay9(this.a)},
$S:0}
B.c4J.prototype={
$0(){var x=0,w=A.l(y.v),v=this,u,t,s,r
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:r=v.a
x=r.d.gY().mu()?2:3
break
case 2:E.a6e(!0)
u=r.f
u.toString
t=v.b
s=y.F
x=4
return A.c(A.aoS(B.aX3(u,r.e.a.a).aQ(0,new B.c4G(r,t),s),new B.c4H(t),s,y.E),$async$$0)
case 4:case 3:return A.j(null,w)}})
return A.k($async$$0,w)},
$S:1}
B.c4G.prototype={
$1(d){var x=0,w=A.l(y.F),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=J.a2(d)
x=J.m(u.i(d,"code"),403)||J.m(u.i(d,"code"),404)?2:4
break
case 2:A.bB(v.b,A.w("Token is not valid.",null),C.b6)
x=3
break
case 4:x=J.m(u.i(d,"code"),200)?5:6
break
case 5:x=7
return A.c(I.LT(u.i(d,"email"),v.a.e.a.a),$async$$1)
case 7:u=v.b
A.bB(u,A.w("Password has been changed.",null),C.a3)
H.ay9(u)
case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:74}
B.c4H.prototype={
$2(d,e){A.bB(this.a,J.au(d),C.a3)},
$S:354};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Dk,A.F)
x(B.aNv,A.L)
w(A.ck,[B.c4I,B.c4J])
x(B.c4G,A.bF)
x(B.c4H,A.dh)})()
A.bk(b.typeUniverse,JSON.parse('{"Dk":{"F":[],"d":[]},"aNv":{"L":["Dk"]}}'))
var y={g:A.z("b6"),u:A.z("q<d>"),o:A.z("aL<np>"),F:A.z("az"),E:A.z("E"),w:A.z("e"),b:A.z("@"),v:A.z("~")};(function constants(){D.b45=new A.bY("New Password",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b29=new A.a_(!0,C.m,null,null,null,null,25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4J=new A.bY("Change Password",null,D.b29,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_1",e:"endPart",h:b})})($__dart_deferred_initializers__,"BKZQZswmarFXWS3wYW0GoDTmHK4=");