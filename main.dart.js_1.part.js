((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_1",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cXT(){return new B.Dq(null)},
Dq:function Dq(d){this.a=d},
aOb:function aOb(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.f=null},
c6z:function c6z(d){this.a=d},
c6A:function c6A(d,e){this.a=d
this.b=e},
c6x:function c6x(d,e){this.a=d
this.b=e},
c6y:function c6y(d){this.a=d},
aXI(d,e){var x=0,w=A.k(y.b),v,u
var $async$aXI=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.b
x=3
return A.c($.e_().e2("set_user_password_token",A.y(["token",d,"password",e],y.w,u),u),$async$aXI)
case 3:v=g
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$aXI,w)}},E,I,K,L,D,M,N,O,P,Q,R,F,S,T,U,V,G,H
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[21],B)
E=c[102]
I=c[57]
K=c[198]
L=c[187]
D=c[330]
M=c[165]
N=c[192]
O=c[151]
P=c[101]
Q=c[183]
R=c[331]
F=c[208]
S=c[244]
T=c[224]
U=c[332]
V=c[327]
G=c[189]
H=c[93]
B.Dq.prototype={
M(){return new B.aOb(new A.aL(null,y.o),new Q.d_(T.aV,$.ad()))}}
B.aOb.prototype={
l(){this.ai()},
aX(){var x=0,w=A.k(y.v),v=this,u,t,s,r,q
var $async$aX=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.cm()
s=A.rW()
u=A.bz("token=(?<token>[^&]+)",!0,!1,!1).rk(s.j(0))
if(u!=null)try{r=u.ach("token")
r.toString
v.f=r}catch(p){r=A.ag(p)
if(y.g.b(r)){t=r
r=v.c
r.toString
A.bG(r,J.as(t),C.a4)}else throw p}return A.i(null,w)}})
return A.j($async$aX,w)},
A(d){var x,w,v,u,t=null,s=G.bf(D.b4r,t)
s=L.ic(t,t,t,!0,t,t,1,!0,t,t,!1,t,!1,t,t,M.ts(new B.c6z(d)),t,!0,t,t,t,t,t,s,t,t,t,1,t)
x=y.w
x=A.W(A.u("Welcome in {name}!",A.y(["name","Festapp"],x,x)),t,t,t,t,t,t,t,R.DK,t,t,t,t,t)
w=A.W(A.u("Create a new password to continue.",t),t,t,t,t,t,t,t,S.fK,t,t,t,t,t)
v=A.u("New Password",t)
u=A.cl(20)
return K.f0(s,t,new A.cr(C.J,t,t,new A.cN(new A.aa(0,820,0,1/0),N.dQ(O.tU(t,t,new E.xu(A.ao(A.a([x,F.a6,w,U.a3Z,new A.a4(V.zr,new P.Ic(v,this.e,"password",t),t),F.a6,A.aB(t,A.di(!1,G.bf(D.b54,t),t,t,t,t,t,t,new B.c6A(this,d),t,t),C.k,t,t,new A.bv(C.cs,t,t,u,t,t,t,C.R),t,50,t,t,t,t,250)],y.u),C.i,C.f,C.h,t,C.m),t),this.d,t),t,C.r,t,t,t,C.F),t),t),t,t,t,t,t)}}
var z=a.updateTypes([])
B.c6z.prototype={
$0(){return H.ayI(this.a)},
$S:0}
B.c6A.prototype={
$0(){var x=0,w=A.k(y.v),v=this,u,t,s,r
var $async$$0=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:r=v.a
x=r.d.gY().mw()?2:3
break
case 2:E.a6C(!0)
u=r.f
u.toString
t=v.b
s=y.F
x=4
return A.c(A.apj(B.aXI(u,r.e.a.a).aM(0,new B.c6x(r,t),s),new B.c6y(t),s,y.E),$async$$0)
case 4:case 3:return A.i(null,w)}})
return A.j($async$$0,w)},
$S:1}
B.c6x.prototype={
$1(d){var x=0,w=A.k(y.F),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:u=J.a2(d)
x=J.m(u.i(d,"code"),403)||J.m(u.i(d,"code"),404)?2:4
break
case 2:A.bG(v.b,A.u("Token is not valid.",null),C.b9)
x=3
break
case 4:x=J.m(u.i(d,"code"),200)?5:6
break
case 5:x=7
return A.c(I.M9(u.i(d,"email"),v.a.e.a.a),$async$$1)
case 7:u=v.b
A.bG(u,A.u("Password has been changed.",null),C.a4)
H.ayI(u)
case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:86}
B.c6y.prototype={
$2(d,e){A.bG(this.a,J.as(d),C.a4)},
$S:244};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Dq,A.F)
x(B.aOb,A.K)
w(A.ci,[B.c6z,B.c6A])
x(B.c6x,A.bE)
x(B.c6y,A.dn)})()
A.bk(b.typeUniverse,JSON.parse('{"Dq":{"F":[],"d":[]},"aOb":{"K":["Dq"]}}'))
var y={g:A.z("b7"),u:A.z("q<d>"),o:A.z("aL<nx>"),F:A.z("aA"),E:A.z("E"),w:A.z("e"),b:A.z("@"),v:A.z("~")};(function constants(){D.b4r=new A.c_("New Password",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b2w=new A.a_(!0,C.n,null,null,null,null,25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b54=new A.c_("Change Password",null,D.b2w,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_1",e:"endPart",h:b})})($__dart_deferred_initializers__,"ZV6GIp6k2eaXfxD7hnMjh/3dbrA=");