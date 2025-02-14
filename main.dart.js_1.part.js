((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_1",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cTD(){return new B.D9(null)},
D9:function D9(d){this.a=d},
aMY:function aMY(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.f=null},
c3t:function c3t(d){this.a=d},
c3u:function c3u(d,e){this.a=d
this.b=e},
c3r:function c3r(d,e){this.a=d
this.b=e},
c3s:function c3s(d){this.a=d},
aWu(d,e){var x=0,w=A.l(y.b),v,u
var $async$aWu=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.b
x=3
return A.c($.e_().ej("set_user_password_token",A.z(["token",d,"password",e],y.w,u),u),$async$aWu)
case 3:v=g
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$aWu,w)}},E,I,K,L,M,D,N,O,P,F,Q,R,S,T,G,H,U
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[20],B)
E=c[104]
I=c[56]
K=c[185]
L=c[165]
M=c[189]
D=c[321]
N=c[152]
O=c[103]
P=c[182]
F=c[205]
Q=c[239]
R=c[322]
S=c[317]
T=c[221]
G=c[190]
H=c[93]
U=c[195]
B.D9.prototype={
N(){return new B.aMY(new A.aJ(null,y.o),new P.ei(T.b_,$.ag()))}}
B.aMY.prototype={
l(){this.ai()},
aW(){var x=0,w=A.l(y.v),v=this,u,t,s,r,q
var $async$aW=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.cm()
s=A.rG()
u=A.bB("token=(?<token>[^&]+)",!0,!1,!1).rh(s.j(0))
if(u!=null)try{r=u.abZ("token")
r.toString
v.f=r}catch(p){r=A.af(p)
if(y.g.b(r)){t=r
r=v.c
r.toString
A.bE(r,J.av(t),C.a4)}else throw p}return A.j(null,w)}})
return A.k($async$aW,w)},
A(d){var x,w,v,u,t=null,s=G.bt(D.b3J,t)
s=K.iE(t,t,t,!0,t,t,1,!0,t,t,!1,t,!1,t,t,L.tb(new B.c3t(d)),t,!0,t,t,t,t,t,s,t,t,t,1,t)
x=y.w
x=A.a1(A.y("Welcome in {name}!",A.z(["name","Festapp"],x,x)),t,t,t,t,t,t,t,D.b2Y,t,t,t,t,t)
w=A.a1(A.y("Create a new password to continue.",t),t,t,t,t,t,t,t,Q.fy,t,t,t,t,t)
v=A.y("New Password",t)
u=A.cW(20)
return U.fc(s,t,new A.cu(C.J,t,t,new A.cT(new A.ad(0,820,0,1/0),M.eo(N.vw(t,t,new E.xc(A.aA(A.a([x,F.al,w,R.a3u,new A.a6(S.z8,new O.HQ(v,this.e,"password",t),t),F.al,A.aK(t,A.dj(!1,G.bt(D.b4g,t),t,t,t,t,t,t,new B.c3u(this,d),t,t),C.l,t,t,new A.bJ(C.cn,t,t,u,t,t,t,C.R),t,50,t,t,t,t,250)],y.u),C.j,C.f,C.i,t,C.q),t),this.d,t,t),t,C.u,t,t,t,C.G),t),t),t,t,t,t,t)}}
var z=a.updateTypes([])
B.c3t.prototype={
$0(){return H.axH(this.a)},
$S:0}
B.c3u.prototype={
$0(){var x=0,w=A.l(y.v),v=this,u,t,s,r
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:r=v.a
x=r.d.gX().n0()?2:3
break
case 2:E.a5T(!0)
u=r.f
u.toString
t=v.b
s=y.F
x=4
return A.c(A.aos(B.aWu(u,r.e.a.a).aQ(0,new B.c3r(r,t),s),new B.c3s(t),s,y.E),$async$$0)
case 4:case 3:return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2}
B.c3r.prototype={
$1(d){var x=0,w=A.l(y.F),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=J.a3(d)
x=J.m(u.i(d,"code"),403)||J.m(u.i(d,"code"),404)?2:4
break
case 2:A.bE(v.b,A.y("Token is not valid.",null),C.b0)
x=3
break
case 4:x=J.m(u.i(d,"code"),200)?5:6
break
case 5:x=7
return A.c(I.LI(u.i(d,"email"),v.a.e.a.a),$async$$1)
case 7:u=v.b
A.bE(u,A.y("Password has been changed.",null),C.a4)
H.axH(u)
case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:79}
B.c3s.prototype={
$2(d,e){A.bE(this.a,J.av(d),C.a4)},
$S:353};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.D9,A.G)
x(B.aMY,A.L)
w(A.ck,[B.c3t,B.c3u])
x(B.c3r,A.bG)
x(B.c3s,A.dg)})()
A.bo(b.typeUniverse,JSON.parse('{"D9":{"G":[],"d":[]},"aMY":{"L":["D9"]}}'))
var y={g:A.x("b6"),u:A.x("q<d>"),o:A.x("aJ<ou>"),F:A.x("ax"),E:A.x("D"),w:A.x("e"),b:A.x("@"),v:A.x("~")};(function constants(){D.b2Y=new A.a_(!0,null,null,null,null,null,20,C.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b3J=new A.cf("New Password",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b1M=new A.a_(!0,C.m,null,null,null,null,25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4g=new A.cf("Change Password",null,D.b1M,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_1",e:"endPart",h:b})})($__dart_deferred_initializers__,"lZDpUJybeZomlC49/IxCOY+n3Tk=");