((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_1",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cZ4(){return new B.D9(null)},
D9:function D9(d){this.a=d},
aOa:function aOa(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.f=null},
c7a:function c7a(d){this.a=d},
c7b:function c7b(d,e){this.a=d
this.b=e},
c78:function c78(d,e){this.a=d
this.b=e},
c79:function c79(d){this.a=d},
aY2(d,e){var x=0,w=A.k(y.b),v,u
var $async$aY2=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.b
x=3
return A.c($.dZ().e1("set_user_password_token",A.y(["token",d,"password",e],y.w,u),u),$async$aY2)
case 3:v=g
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$aY2,w)}},E,I,K,L,D,M,N,O,P,Q,R,F,S,T,U,V,G,H
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[21],B)
E=c[100]
I=c[57]
K=c[201]
L=c[190]
D=c[335]
M=c[168]
N=c[195]
O=c[154]
P=c[99]
Q=c[187]
R=c[336]
F=c[213]
S=c[246]
T=c[226]
U=c[337]
V=c[332]
G=c[192]
H=c[92]
B.D9.prototype={
M(){return new B.aOa(new A.aJ(null,y.o),new Q.cm(T.ar,$.a8()))}}
B.aOa.prototype={
l(){this.ag()},
aT(){var x=0,w=A.k(y.v),v=this,u,t,s,r,q
var $async$aT=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.c6()
s=A.t_()
u=A.bw("token=(?<token>[^&]+)",!0,!1,!1).rj(s.j(0))
if(u!=null)try{r=u.acf("token")
r.toString
v.f=r}catch(p){r=A.ah(p)
if(y.g.b(r)){t=r
r=v.c
r.toString
A.bH(r,J.ap(t),C.a5)}else throw p}return A.i(null,w)}})
return A.j($async$aT,w)},
A(d){var x,w,v,u,t=null,s=G.bc(D.b3K,t)
s=L.ic(t,t,t,!0,t,t,1,!0,t,t,!1,t,!1,t,t,M.ts(new B.c7a(d)),t,!0,t,t,t,t,t,s,t,t,t,1,t)
x=y.w
x=A.W(A.r("Welcome in {name}!",A.y(["name","Festapp"],x,x)),t,t,t,t,t,t,t,R.DG,t,t,t,t,t)
w=A.W(A.r("Create a new password to continue.",t),t,t,t,t,t,t,t,S.fH,t,t,t,t,t)
v=A.r("New Password",t)
u=A.ch(20)
return K.f2(s,t,new A.cx(C.M,t,t,new A.cP(new A.a9(0,820,0,1/0),N.dO(O.tT(t,t,new E.xw(A.am(A.a([x,F.a3,w,U.a3K,new A.a3(V.zA,new P.Ig(v,this.e,"password",t),t),F.a3,A.az(t,A.dg(!1,G.bc(D.b4o,t),t,t,t,t,t,t,new B.c7b(this,d),t,t),C.k,t,t,new A.bn(C.ck,t,t,u,t,t,t,C.P),t,50,t,t,t,t,250)],y.u),C.i,C.f,C.h,t,C.l),t),this.d,t),t,C.r,t,t,t,C.G),t),t),t,t,t,t,t)}}
var z=a.updateTypes([])
B.c7a.prototype={
$0(){return H.ayh(this.a)},
$S:0}
B.c7b.prototype={
$0(){var x=0,w=A.k(y.v),v=this,u,t,s,r
var $async$$0=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:r=v.a
x=r.d.gW().jx()?2:3
break
case 2:E.a6a(!0)
u=r.f
u.toString
t=v.b
s=y.F
x=4
return A.c(A.apz(B.aY2(u,r.e.a.a).aX(0,new B.c78(r,t),s),new B.c79(t),s,y.E),$async$$0)
case 4:case 3:return A.i(null,w)}})
return A.j($async$$0,w)},
$S:1}
B.c78.prototype={
$1(d){var x=0,w=A.k(y.F),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:u=J.a2(d)
x=J.m(u.i(d,"code"),403)||J.m(u.i(d,"code"),404)?2:4
break
case 2:A.bH(v.b,A.r("Token is not valid.",null),C.ba)
x=3
break
case 4:x=J.m(u.i(d,"code"),200)?5:6
break
case 5:x=7
return A.c(I.Mk(u.i(d,"email"),v.a.e.a.a),$async$$1)
case 7:u=v.b
A.bH(u,A.r("Password has been changed.",null),C.a5)
H.ayh(u)
case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:76}
B.c79.prototype={
$2(d,e){A.bH(this.a,J.ap(d),C.a5)},
$S:290};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.D9,A.F)
x(B.aOa,A.K)
w(A.ck,[B.c7a,B.c7b])
x(B.c78,A.bC)
x(B.c79,A.dv)})()
A.bl(b.typeUniverse,JSON.parse('{"D9":{"F":[],"d":[]},"aOa":{"K":["D9"]}}'))
var y={g:A.z("bk"),u:A.z("q<d>"),o:A.z("aJ<nA>"),F:A.z("aB"),E:A.z("E"),w:A.z("e"),b:A.z("@"),v:A.z("~")};(function constants(){D.b3K=new A.c0("New Password",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b1P=new A.a_(!0,C.n,null,null,null,null,25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4o=new A.c0("Change Password",null,D.b1P,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_1",e:"endPart",h:b})})($__dart_deferred_initializers__,"05utJi9+0pGMnize2FmST+dWbpQ=");