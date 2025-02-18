((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_63",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,F,G,H,I,K,L,M,N,O,P,B={
cVK(){return new B.DB(null)},
DB:function DB(d){this.a=d},
aOr:function aOr(d,e){var _=this
_.e=_.d=!1
_.r=_.f=null
_.w=d
_.x=e
_.c=_.a=null},
c7h:function c7h(d){this.a=d},
c7i:function c7i(d,e){this.a=d
this.b=e},
c7e:function c7e(){},
c7f:function c7f(d){this.a=d},
c7g:function c7g(d){this.a=d},
aWX(d){var x=0,w=A.l(y.y),v,u
var $async$aWX=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:d.m(0,"organization",1)
u=$.e0().Q
u===$&&A.b()
x=3
return A.c(u.mU("register",d),$async$aWX)
case 3:v=f.a
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$aWX,w)}},D,Q,E,R,S,T
J=c[1]
A=c[0]
C=c[2]
F=c[103]
G=c[198]
H=c[187]
I=c[167]
K=c[192]
L=c[191]
M=c[208]
N=c[122]
O=c[154]
P=c[217]
B=a.updateHolder(c[26],B)
D=c[325]
Q=c[68]
E=c[33]
R=c[190]
S=c[326]
T=c[254]
B.DB.prototype={
N(){var x=null
return new B.aOr(A.a([A.vz(x,x,x,x,1,x,!0,x,x,x,x,x,x,"name"),A.vz(x,x,x,x,2,x,!0,x,x,x,x,x,x,"surname"),A.vz(x,x,x,x,3,x,x,x,x,x,x,x,x,"sex"),A.vz(x,x,x,x,4,x,!0,x,x,x,x,x,x,"email"),A.vz(x,x,x,x,5,x,!0,x,x,x,x,x,x,"city"),A.vz(x,x,x,x,6,x,x,x,x,x,x,x,x,"birth_year")],y.a),new A.aL(x,y.c))}}
B.aOr.prototype={
l(){this.ai()},
A(d){var x,w,v,u=this,t=null,s=E.cu5(u.w)
u.r=s
x=u.x
s.a=new E.aoC(t,t,x,t,t,t,t)
s=R.bs(D.b3I,t)
s=H.i3(t,t,t,!0,t,t,1,!0,t,t,!1,t,!1,t,t,I.th(new B.c7h(d)),t,!0,t,t,t,t,t,s,t,t,t,1,t)
if(u.e){x=A.aM(t,t,A.D(d).ax.a===C.v?$.f0():C.r,t,t,t,t,t,t,t,t,18,t,t,t,t,t,!0,t,t,t,t,t,t,t,t)
w=u.f
w=w==null?t:w.i(0,"email")
v=y.w
v=new A.a6(D.aj0,A.yX(t,t,t,C.c_,t,t,!0,t,A.dE(A.a([A.dE(t,t,t,x,A.x("Almost done! Your credentials for signing in to the app have been sent to your email {email}. Please check your inbox to complete the registration.",A.y(["email",w],v,v))),D.b7M],y.F),t,t,t,t),C.bj,t,t,C.Z,C.aC),t)
x=v}else{w=u.r
w=A.J(E.cu2(d,w.a.c,w),!0,y.u)
w.push(M.ai)
w.push(N.M9(C.cp,d,50,!0,A.x("Sign up",t),new B.c7i(u,d),C.m,250))
x=Q.anO(new F.xg(A.ax(w,C.j,C.f,C.h,t,C.p),t),x,t)}return G.eV(s,t,new A.cu(C.aI,t,t,new A.cO(new A.ad(0,820,0,1/0),K.ek(new A.a6(P.bp,x,t),t,C.u,t,t,t,C.F),t),t),t,t,t,t,t)}}
var z=a.updateTypes([])
B.c7h.prototype={
$0(){return O.wh(this.a)},
$S:0}
B.c7i.prototype={
$0(){var x=0,w=A.l(y.q),v=this,u,t,s,r,q,p
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:F.a68(!0)
u=v.a
t=u.x.gW()
t=t==null?null:t.af9()
x=t===!0?2:3
break
case 2:u.B(new B.c7e())
t=u.r
t.toString
s=y.w
t=A.j7(E.cu3(t,!0).i(0,"fields"),s,y.b)
u.f=t
r=v.b
q=r.ac(y.v)
if(q==null)q=null
else{q=q.r.a
q===$&&A.b()
q=q.td("_")}t.m(0,"lang",q)
q=u.f
q.toString
x=4
return A.c(B.aWX(q),$async$$0)
case 4:p=e
t=J.a2(p)
if(J.m(t.i(p,"code"),200)){A.bB(r,A.x("Registration is almost complete!",null),C.a2)
u.B(new B.c7f(u))}else if(J.m(t.i(p,"code"),409))A.bB(r,A.x("Registration failed: Email {email} is already in use.",A.y(["email",t.i(p,"email")],s,s)),C.b6)
else A.bB(r,A.x("Registration has failed.",null),C.b6)
u.B(new B.c7g(u))
case 3:return A.j(null,w)}})
return A.k($async$$0,w)},
$S:1}
B.c7e.prototype={
$0(){},
$S:0}
B.c7f.prototype={
$0(){this.a.e=!0},
$S:0}
B.c7g.prototype={
$0(){this.a.d=!1},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.DB,A.F)
x(B.aOr,A.L)
w(A.ck,[B.c7h,B.c7i,B.c7e,B.c7f,B.c7g])})()
A.bl(b.typeUniverse,JSON.parse('{"DB":{"F":[],"d":[]},"aOr":{"L":["DB"]}}'))
var y={a:A.z("q<iu>"),F:A.z("q<ix>"),c:A.z("aL<y0>"),y:A.z("aa<e,@>"),w:A.z("e"),u:A.z("d"),v:A.z("mX"),b:A.z("@"),q:A.z("~")};(function constants(){D.aj0=new A.an(12,88,12,12)
D.b3I=new A.bX("Sign up",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aS5=new A.a6(S.HZ,T.Ji,null)
D.b7M=new L.mf(D.aS5,C.ea,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_63",e:"endPart",h:b})})($__dart_deferred_initializers__,"n6Zn0stnNvSQeI4CHEOh9rVu+E4=");