((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_1",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cYu(){return new B.Dr(null)},
Dr:function Dr(d){this.a=d},
aOo:function aOo(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.f=null},
c7b:function c7b(d){this.a=d},
c7c:function c7c(d,e){this.a=d
this.b=e},
c79:function c79(d,e){this.a=d
this.b=e},
c7a:function c7a(d){this.a=d},
aXU(d,e){var x=0,w=A.k(y.b),v,u
var $async$aXU=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.b
x=3
return A.c($.dX().e3("set_user_password_token",A.z(["token",d,"password",e],y.w,u),u),$async$aXU)
case 3:v=g
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$aXU,w)}},E,I,K,L,D,M,N,O,P,Q,R,F,S,T,U,V,G,H
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[21],B)
E=c[102]
I=c[57]
K=c[201]
L=c[190]
D=c[333]
M=c[168]
N=c[195]
O=c[154]
P=c[101]
Q=c[186]
R=c[334]
F=c[212]
S=c[246]
T=c[226]
U=c[335]
V=c[330]
G=c[192]
H=c[93]
B.Dr.prototype={
M(){return new B.aOo(new A.aK(null,y.o),new Q.d_(T.aT,$.ae()))}}
B.aOo.prototype={
l(){this.ag()},
aX(){var x=0,w=A.k(y.v),v=this,u,t,s,r,q
var $async$aX=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.cn()
s=A.rZ()
u=A.by("token=(?<token>[^&]+)",!0,!1,!1).rk(s.j(0))
if(u!=null)try{r=u.acg("token")
r.toString
v.f=r}catch(p){r=A.ag(p)
if(y.g.b(r)){t=r
r=v.c
r.toString
A.bG(r,J.ap(t),C.a4)}else throw p}return A.i(null,w)}})
return A.j($async$aX,w)},
A(d){var x,w,v,u,t=null,s=G.bc(D.b4t,t)
s=L.ic(t,t,t,!0,t,t,1,!0,t,t,!1,t,!1,t,t,M.tv(new B.c7b(d)),t,!0,t,t,t,t,t,s,t,t,t,1,t)
x=y.w
x=A.W(A.t("Welcome in {name}!",A.z(["name","Festapp"],x,x)),t,t,t,t,t,t,t,R.DL,t,t,t,t,t)
w=A.W(A.t("Create a new password to continue.",t),t,t,t,t,t,t,t,S.fI,t,t,t,t,t)
v=A.t("New Password",t)
u=A.cl(20)
return K.f2(s,t,new A.cr(C.J,t,t,new A.cN(new A.aa(0,820,0,1/0),N.dO(O.tX(t,t,new E.xA(A.am(A.a([x,F.a5,w,U.a3Z,new A.a3(V.zw,new P.Ie(v,this.e,"password",t),t),F.a5,A.aE(t,A.dh(!1,G.bc(D.b57,t),t,t,t,t,t,t,new B.c7c(this,d),t,t),C.k,t,t,new A.bv(C.cs,t,t,u,t,t,t,C.R),t,50,t,t,t,t,250)],y.u),C.i,C.f,C.h,t,C.l),t),this.d,t),t,C.r,t,t,t,C.F),t),t),t,t,t,t,t)}}
var z=a.updateTypes([])
B.c7b.prototype={
$0(){return H.ayQ(this.a)},
$S:0}
B.c7c.prototype={
$0(){var x=0,w=A.k(y.v),v=this,u,t,s,r
var $async$$0=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:r=v.a
x=r.d.gV().jv()?2:3
break
case 2:E.a6G(!0)
u=r.f
u.toString
t=v.b
s=y.F
x=4
return A.c(A.apq(B.aXU(u,r.e.a.a).aM(0,new B.c79(r,t),s),new B.c7a(t),s,y.E),$async$$0)
case 4:case 3:return A.i(null,w)}})
return A.j($async$$0,w)},
$S:1}
B.c79.prototype={
$1(d){var x=0,w=A.k(y.F),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:u=J.a2(d)
x=J.m(u.i(d,"code"),403)||J.m(u.i(d,"code"),404)?2:4
break
case 2:A.bG(v.b,A.t("Token is not valid.",null),C.b7)
x=3
break
case 4:x=J.m(u.i(d,"code"),200)?5:6
break
case 5:x=7
return A.c(I.Mh(u.i(d,"email"),v.a.e.a.a),$async$$1)
case 7:u=v.b
A.bG(u,A.t("Password has been changed.",null),C.a4)
H.ayQ(u)
case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:83}
B.c7a.prototype={
$2(d,e){A.bG(this.a,J.ap(d),C.a4)},
$S:353};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Dr,A.F)
x(B.aOo,A.K)
w(A.ci,[B.c7b,B.c7c])
x(B.c79,A.bB)
x(B.c7a,A.dn)})()
A.bl(b.typeUniverse,JSON.parse('{"Dr":{"F":[],"d":[]},"aOo":{"K":["Dr"]}}'))
var y={g:A.y("b8"),u:A.y("q<d>"),o:A.y("aK<nz>"),F:A.y("aA"),E:A.y("E"),w:A.y("e"),b:A.y("@"),v:A.y("~")};(function constants(){D.b4t=new A.c0("New Password",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b2y=new A.a_(!0,C.n,null,null,null,null,25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b57=new A.c0("Change Password",null,D.b2y,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_1",e:"endPart",h:b})})($__dart_deferred_initializers__,"KjKkXwvCui9RIHx4X3rZHn0xZZs=");