((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_1",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cYE(){return new B.Ds(null)},
Ds:function Ds(d){this.a=d},
aOt:function aOt(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.f=null},
c7d:function c7d(d){this.a=d},
c7e:function c7e(d,e){this.a=d
this.b=e},
c7b:function c7b(d,e){this.a=d
this.b=e},
c7c:function c7c(d){this.a=d},
aY_(d,e){var x=0,w=A.k(y.b),v,u
var $async$aY_=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.b
x=3
return A.c($.dY().e3("set_user_password_token",A.y(["token",d,"password",e],y.w,u),u),$async$aY_)
case 3:v=g
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$aY_,w)}},E,I,K,L,D,M,N,O,P,Q,R,F,S,T,U,V,G,H
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[21],B)
E=c[102]
I=c[57]
K=c[202]
L=c[191]
D=c[334]
M=c[169]
N=c[196]
O=c[155]
P=c[101]
Q=c[187]
R=c[335]
F=c[213]
S=c[247]
T=c[227]
U=c[336]
V=c[331]
G=c[193]
H=c[93]
B.Ds.prototype={
M(){return new B.aOt(new A.aK(null,y.o),new Q.d_(T.aU,$.ad()))}}
B.aOt.prototype={
l(){this.ag()},
aT(){var x=0,w=A.k(y.v),v=this,u,t,s,r,q
var $async$aT=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.c8()
s=A.t_()
u=A.bx("token=(?<token>[^&]+)",!0,!1,!1).rk(s.j(0))
if(u!=null)try{r=u.acj("token")
r.toString
v.f=r}catch(p){r=A.ag(p)
if(y.g.b(r)){t=r
r=v.c
r.toString
A.bG(r,J.ap(t),C.a4)}else throw p}return A.i(null,w)}})
return A.j($async$aT,w)},
A(d){var x,w,v,u,t=null,s=G.bc(D.b4u,t)
s=L.ic(t,t,t,!0,t,t,1,!0,t,t,!1,t,!1,t,t,M.tw(new B.c7d(d)),t,!0,t,t,t,t,t,s,t,t,t,1,t)
x=y.w
x=A.W(A.t("Welcome in {name}!",A.y(["name","Festapp"],x,x)),t,t,t,t,t,t,t,R.DL,t,t,t,t,t)
w=A.W(A.t("Create a new password to continue.",t),t,t,t,t,t,t,t,S.fI,t,t,t,t,t)
v=A.t("New Password",t)
u=A.cl(20)
return K.f2(s,t,new A.cu(C.J,t,t,new A.cN(new A.aa(0,820,0,1/0),N.dO(O.tY(t,t,new E.xB(A.am(A.a([x,F.a5,w,U.a3Z,new A.a3(V.zw,new P.If(v,this.e,"password",t),t),F.a5,A.aC(t,A.dh(!1,G.bc(D.b58,t),t,t,t,t,t,t,new B.c7e(this,d),t,t),C.k,t,t,new A.bv(C.cr,t,t,u,t,t,t,C.R),t,50,t,t,t,t,250)],y.u),C.i,C.f,C.h,t,C.l),t),this.d,t),t,C.r,t,t,t,C.F),t),t),t,t,t,t,t)}}
var z=a.updateTypes([])
B.c7d.prototype={
$0(){return H.ayV(this.a)},
$S:0}
B.c7e.prototype={
$0(){var x=0,w=A.k(y.v),v=this,u,t,s,r
var $async$$0=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:r=v.a
x=r.d.gV().jv()?2:3
break
case 2:E.a6J(!0)
u=r.f
u.toString
t=v.b
s=y.F
x=4
return A.c(A.apw(B.aY_(u,r.e.a.a).aM(0,new B.c7b(r,t),s),new B.c7c(t),s,y.E),$async$$0)
case 4:case 3:return A.i(null,w)}})
return A.j($async$$0,w)},
$S:1}
B.c7b.prototype={
$1(d){var x=0,w=A.k(y.F),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:u=J.a2(d)
x=J.m(u.i(d,"code"),403)||J.m(u.i(d,"code"),404)?2:4
break
case 2:A.bG(v.b,A.t("Token is not valid.",null),C.b8)
x=3
break
case 4:x=J.m(u.i(d,"code"),200)?5:6
break
case 5:x=7
return A.c(I.Mi(u.i(d,"email"),v.a.e.a.a),$async$$1)
case 7:u=v.b
A.bG(u,A.t("Password has been changed.",null),C.a4)
H.ayV(u)
case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:83}
B.c7c.prototype={
$2(d,e){A.bG(this.a,J.ap(d),C.a4)},
$S:316};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ds,A.F)
x(B.aOt,A.K)
w(A.ci,[B.c7d,B.c7e])
x(B.c7b,A.bB)
x(B.c7c,A.dn)})()
A.bl(b.typeUniverse,JSON.parse('{"Ds":{"F":[],"d":[]},"aOt":{"K":["Ds"]}}'))
var y={g:A.z("b8"),u:A.z("q<d>"),o:A.z("aK<nA>"),F:A.z("aA"),E:A.z("E"),w:A.z("e"),b:A.z("@"),v:A.z("~")};(function constants(){D.b4u=new A.c0("New Password",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b2z=new A.a_(!0,C.n,null,null,null,null,25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b58=new A.c0("Change Password",null,D.b2z,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_1",e:"endPart",h:b})})($__dart_deferred_initializers__,"RNfQ9Wu3BiOm2gysU64Ji2b4bXs=");