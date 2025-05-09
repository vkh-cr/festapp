((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_1",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d9W(){return new B.Eg(null)},
Eg:function Eg(d){this.a=d},
aR9:function aR9(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.f=null},
cg1:function cg1(d){this.a=d},
cg2:function cg2(d,e){this.a=d
this.b=e},
cg_:function cg_(d,e){this.a=d
this.b=e},
cg0:function cg0(d){this.a=d},
b0g(d,e){var x=0,w=A.k(y.b),v,u
var $async$b0g=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:u=y.b
x=3
return A.d($.dT().dF("set_user_password_token",A.z(["token",d,"password",e],y.w,u),u),$async$b0g)
case 3:v=g
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$b0g,w)}},E,I,K,L,M,N,D,O,P,Q,R,F,S,T,U,V,G,H
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[21],B)
E=c[108]
I=c[59]
K=c[204]
L=c[195]
M=c[172]
N=c[200]
D=c[336]
O=c[160]
P=c[107]
Q=c[192]
R=c[337]
F=c[216]
S=c[252]
T=c[338]
U=c[333]
V=c[230]
G=c[196]
H=c[98]
B.Eg.prototype={
M(){return new B.aR9(new A.aK(null,y.o),new Q.cs(V.ax,$.a9()))}}
B.aR9.prototype={
l(){this.ag()},
aV(){var x=0,w=A.k(y.v),v=this,u,t,s,r,q
var $async$aV=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:v.c6()
s=A.re()
u=A.bA("token=(?<token>[^&]+)",!0,!1,!1).rN(s.j(0))
if(u!=null)try{r=u.aeS("token")
r.toString
v.f=r}catch(p){r=A.ag(p)
if(y.g.b(r)){t=r
r=v.c
r.toString
A.bH(r,J.ao(t),C.a8)}else throw p}return A.i(null,w)}})
return A.j($async$aV,w)},
B(d){var x,w,v,u,t=null,s=G.bl(D.bF4,t)
s=L.ik(t,t,t,!0,t,t,1,!0,t,t,!1,t,!1,t,t,M.u6(t,new B.cg1(d)),t,!0,t,t,t,t,t,s,t,t,t,1,t)
x=y.w
x=A.S(A.u("Welcome in {name}!",A.z(["name","Festapp"],x,x)),t,t,t,t,t,t,t,R.H7,t,t,t,t,t)
w=A.S(A.u("Create a new password to continue.",t),t,t,t,t,t,t,t,S.hw,t,t,t,t,t)
v=A.u("New Password",t)
u=A.c5(20)
return K.f6(s,t,new A.cC(C.L,t,t,new A.cK(new A.ac(0,720,0,1/0),N.dQ(O.uA(t,t,new E.yg(A.aj(A.a([x,F.a2,w,T.abg,new A.a5(U.C3,new P.JF(v,this.e,"password",t),t),F.a2,A.ay(t,A.di(!1,G.bl(D.bFD,t),t,t,t,t,t,t,new B.cg2(this,d),t,t),C.k,t,t,new A.bh(C.bR,t,t,u,t,t,t,C.P),t,50,t,t,t,t,t,250)],y.u),C.i,C.f,C.h,t,C.l),t),this.d,t),t,C.q,t,t,t,C.K),t),t),t,t,t,t,t)}}
var z=a.updateTypes([])
B.cg1.prototype={
$0(){return H.aAP(this.a)},
$S:0}
B.cg2.prototype={
$0(){var x=0,w=A.k(y.v),v=this,u,t,s,r
var $async$$0=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:r=v.a
x=r.d.gX().jX()?2:3
break
case 2:E.a86(!0)
u=r.f
u.toString
t=v.b
s=y.F
x=4
return A.d(A.arZ(B.b0g(u,r.e.a.a).aN(new B.cg_(r,t),s),new B.cg0(t),s,y.E),$async$$0)
case 4:case 3:return A.i(null,w)}})
return A.j($async$$0,w)},
$S:1}
B.cg_.prototype={
$1(d){var x=0,w=A.k(y.F),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:u=J.a2(d)
x=J.p(u.h(d,"code"),403)||J.p(u.h(d,"code"),404)?2:4
break
case 2:A.bH(v.b,A.u("Token is not valid.",null),C.bi)
x=3
break
case 4:x=J.p(u.h(d,"code"),200)?5:6
break
case 5:x=7
return A.d(I.NO(u.h(d,"email"),v.a.e.a.a),$async$$1)
case 7:u=v.b
A.bH(u,A.u("Password has been changed.",null),C.a8)
H.aAP(u)
case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:84}
B.cg0.prototype={
$2(d,e){A.bH(this.a,J.ao(d),C.a8)},
$S:337};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Eg,A.I)
x(B.aR9,A.M)
w(A.cp,[B.cg1,B.cg2])
x(B.cg_,A.bM)
x(B.cg0,A.dI)})()
A.bo(b.typeUniverse,JSON.parse('{"Eg":{"I":[],"e":[]},"aR9":{"M":["Eg"]}}'))
var y={g:A.B("b9"),u:A.B("r<e>"),o:A.B("aK<o7>"),F:A.B("aB"),E:A.B("F"),w:A.B("m"),b:A.B("@"),v:A.B("~")};(function constants(){D.bF4=new A.cl("New Password",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bD7=new A.a3(!0,C.p,null,null,null,null,25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bFD=new A.cl("Change Password",null,D.bD7,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_1",e:"endPart",h:b})})($__dart_deferred_initializers__,"H4PI14Mb4rK5xRFF1tseYKkvvhk=");