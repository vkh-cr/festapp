((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_1",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cOj(){return new B.CB(null)},
CB:function CB(d){this.a=d},
aLw:function aLw(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.f=null},
bZm:function bZm(d){this.a=d},
bZn:function bZn(d,e){this.a=d
this.b=e},
bZk:function bZk(d,e){this.a=d
this.b=e},
bZl:function bZl(d){this.a=d},
aUT(d,e){var x=0,w=A.l(y.b),v,u
var $async$aUT=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:u=y.b
x=3
return A.c($.dT().fE("set_user_password_token",A.y(["token",d,"password",e],y.w,u),u),$async$aUT)
case 3:v=g
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$aUT,w)}},E,I,K,L,M,D,N,O,P,F,Q,R,S,G,H,T
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[21],B)
E=c[96]
I=c[47]
K=c[170]
L=c[150]
M=c[175]
D=c[284]
N=c[138]
O=c[92]
P=c[165]
F=c[191]
Q=c[226]
R=c[241]
S=c[196]
G=c[174]
H=c[87]
T=c[180]
B.CB.prototype={
M(){return new B.aLw(new A.aF(null,y.o),new P.eM(S.bg,$.ai()))}}
B.aLw.prototype={
l(){this.ah()},
aW(){var x=0,w=A.l(y.v),v=this,u,t,s,r,q
var $async$aW=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:v.cw()
s=A.u4()
u=A.by("token=(?<token>[^&]+)",!0,!1,!1).qS(s.j(0))
if(u!=null)try{r=u.ab1("token")
r.toString
v.f=r}catch(p){r=A.ad(p)
if(y.g.b(r)){t=r
r=v.c
r.toString
A.bT(r,J.as(t),C.ah)}else throw p}return A.j(null,w)}})
return A.k($async$aW,w)},
A(d){var x,w,v,u,t=null,s=G.bj(D.b3c,t)
s=K.jZ(t,!0,t,t,!0,t,t,L.ql(new B.bZm(d)),t,s)
x=y.w
x=A.a4(A.C("Welcome in {name}!",A.y(["name","Festapp"],x,x)),t,t,t,t,t,t,t,D.b0w,t,t,t,t,t)
w=A.a4(A.C("Create a new password to continue.",t),t,t,t,t,t,t,t,Q.fs,t,t,t,t,t)
v=A.C("New Password",t)
u=A.dF(20)
return T.fx(s,t,new A.cx(C.I,t,t,new A.d2(new A.aa(0,820,0,1/0),M.eu(N.xm(t,t,new E.wJ(A.aR(A.a([x,F.aR,w,D.aXl,new A.ab(R.yP,new O.H9(v,this.e,"password",t),t),F.aR,A.aM(t,A.dC(!1,G.bj(D.b30,t),t,t,C.E,t,t,t,t,new B.bZn(this,d),t,t),C.k,t,t,new A.bG(C.ch,t,t,u,t,t,t,C.T),t,50,t,t,t,t,250)],y.u),C.j,C.h,C.l,t,C.u),t),this.d,t,t),t,C.w,t,t,t,C.J),t),t),t,t,t,t)}}
var z=a.updateTypes([])
B.bZm.prototype={
$0(){return H.awq(this.a)},
$S:0}
B.bZn.prototype={
$0(){var x=0,w=A.l(y.v),v=this,u,t,s,r
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:r=v.a
x=r.d.gV().o2()?2:3
break
case 2:E.a4P(!0)
u=r.f
u.toString
t=v.b
s=y.F
x=4
return A.c(A.and(B.aUT(u,r.e.a.a).aP(0,new B.bZk(r,t),s),new B.bZl(t),s,y.E),$async$$0)
case 4:case 3:return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2}
B.bZk.prototype={
$1(d){var x=0,w=A.l(y.F),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=J.a1(d)
x=J.m(u.i(d,"code"),403)||J.m(u.i(d,"code"),404)?2:4
break
case 2:A.bT(v.b,A.C("Token is not valid.",null),C.aY)
x=3
break
case 4:x=J.m(u.i(d,"code"),200)?5:6
break
case 5:x=7
return A.c(I.KU(u.i(d,"email"),v.a.e.a.a),$async$$1)
case 7:u=v.b
A.bT(u,A.C("Password has been changed.",null),C.ah)
H.awq(u)
case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:75}
B.bZl.prototype={
$2(d,e){A.bT(this.a,J.as(d),C.ah)},
$S:288};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.CB,A.G)
x(B.aLw,A.K)
w(A.cf,[B.bZm,B.bZn])
x(B.bZk,A.bH)
x(B.bZl,A.dg)})()
A.br(b.typeUniverse,JSON.parse('{"CB":{"G":[],"d":[]},"aLw":{"K":["CB"]}}'))
var y={g:A.w("b_"),u:A.w("p<d>"),o:A.w("aF<oc>"),F:A.w("av"),E:A.w("B"),w:A.w("e"),b:A.w("@"),v:A.w("~")};(function constants(){D.aXl=new A.aD(null,64,null,null)
D.b0w=new A.Y(!0,null,null,null,null,null,20,C.aq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b_K=new A.Y(!0,C.m,null,null,null,null,25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b30=new A.c6("Change Password",null,D.b_K,null,null,null,null,null,null,null,null,null,null,null,null)
D.b3c=new A.c6("New Password",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_1",e:"endPart",h:b})})($__dart_deferred_initializers__,"LbanvSPsV3egGrXfoKlxylCDCc4=");