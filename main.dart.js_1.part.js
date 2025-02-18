((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_1",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cU8(){return new B.Dc(null)},
Dc:function Dc(d){this.a=d},
aN5:function aN5(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.f=null},
c3U:function c3U(d){this.a=d},
c3V:function c3V(d,e){this.a=d
this.b=e},
c3S:function c3S(d,e){this.a=d
this.b=e},
c3T:function c3T(d){this.a=d},
aWC(d,e){var x=0,w=A.l(y.b),v,u
var $async$aWC=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.b
x=3
return A.c($.e_().ef("set_user_password_token",A.z(["token",d,"password",e],y.w,u),u),$async$aWC)
case 3:v=g
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$aWC,w)}},E,I,K,L,M,N,D,O,P,Q,R,F,S,T,U,V,G,H
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[21],B)
E=c[105]
I=c[57]
K=c[199]
L=c[188]
M=c[168]
N=c[193]
D=c[327]
O=c[153]
P=c[104]
Q=c[186]
R=c[328]
F=c[209]
S=c[244]
T=c[225]
U=c[329]
V=c[323]
G=c[191]
H=c[96]
B.Dc.prototype={
N(){return new B.aN5(new A.aJ(null,y.o),new Q.dK(T.aQ,$.ag()))}}
B.aN5.prototype={
l(){this.ai()},
aW(){var x=0,w=A.l(y.v),v=this,u,t,s,r,q
var $async$aW=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.cm()
s=A.rL()
u=A.bD("token=(?<token>[^&]+)",!0,!1,!1).ri(s.j(0))
if(u!=null)try{r=u.ac1("token")
r.toString
v.f=r}catch(p){r=A.af(p)
if(y.g.b(r)){t=r
r=v.c
r.toString
A.bG(r,J.au(t),C.a5)}else throw p}return A.j(null,w)}})
return A.k($async$aW,w)},
A(d){var x,w,v,u,t=null,s=G.bu(D.b3V,t)
s=L.im(t,t,t,!0,t,t,1,!0,t,t,!1,t,!1,t,t,M.tg(new B.c3U(d)),t,!0,t,t,t,t,t,s,t,t,t,1,t)
x=y.w
x=A.a1(A.y("Welcome in {name}!",A.z(["name","Festapp"],x,x)),t,t,t,t,t,t,t,R.Du,t,t,t,t,t)
w=A.a1(A.y("Create a new password to continue.",t),t,t,t,t,t,t,t,S.fz,t,t,t,t,t)
v=A.y("New Password",t)
u=A.cW(20)
return K.f4(s,t,new A.cu(C.J,t,t,new A.cU(new A.ad(0,820,0,1/0),N.ek(O.vz(t,t,new E.xf(A.ax(A.a([x,F.al,w,U.a3K,new A.a6(V.za,new P.HV(v,this.e,"password",t),t),F.al,A.aL(t,A.dk(!1,G.bu(D.b4y,t),t,t,t,t,t,t,new B.c3V(this,d),t,t),C.l,t,t,new A.bJ(C.cn,t,t,u,t,t,t,C.S),t,50,t,t,t,t,250)],y.u),C.j,C.f,C.i,t,C.p),t),this.d,t,t),t,C.u,t,t,t,C.F),t),t),t,t,t,t,t)}}
var z=a.updateTypes([])
B.c3U.prototype={
$0(){return H.axP(this.a)},
$S:0}
B.c3V.prototype={
$0(){var x=0,w=A.l(y.v),v=this,u,t,s,r
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:r=v.a
x=r.d.gY().n0()?2:3
break
case 2:E.a5X(!0)
u=r.f
u.toString
t=v.b
s=y.F
x=4
return A.c(A.aoy(B.aWC(u,r.e.a.a).aQ(0,new B.c3S(r,t),s),new B.c3T(t),s,y.E),$async$$0)
case 4:case 3:return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2}
B.c3S.prototype={
$1(d){var x=0,w=A.l(y.F),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=J.a3(d)
x=J.m(u.i(d,"code"),403)||J.m(u.i(d,"code"),404)?2:4
break
case 2:A.bG(v.b,A.y("Token is not valid.",null),C.b5)
x=3
break
case 4:x=J.m(u.i(d,"code"),200)?5:6
break
case 5:x=7
return A.c(I.LM(u.i(d,"email"),v.a.e.a.a),$async$$1)
case 7:u=v.b
A.bG(u,A.y("Password has been changed.",null),C.a5)
H.axP(u)
case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:76}
B.c3T.prototype={
$2(d,e){A.bG(this.a,J.au(d),C.a5)},
$S:352};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Dc,A.G)
x(B.aN5,A.L)
w(A.ck,[B.c3U,B.c3V])
x(B.c3S,A.bC)
x(B.c3T,A.dg)})()
A.bl(b.typeUniverse,JSON.parse('{"Dc":{"G":[],"d":[]},"aN5":{"L":["Dc"]}}'))
var y={g:A.x("b6"),u:A.x("q<d>"),o:A.x("aJ<oz>"),F:A.x("ay"),E:A.x("D"),w:A.x("e"),b:A.x("@"),v:A.x("~")};(function constants(){D.b3V=new A.bX("New Password",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b1Y=new A.a_(!0,C.m,null,null,null,null,25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4y=new A.bX("Change Password",null,D.b1Y,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_1",e:"endPart",h:b})})($__dart_deferred_initializers__,"+xiURcHfecAf4kZLLhtjZrklUSU=");