((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_63",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,F,G,H,I,K,L,M,N,O,P,B={
cVT(){return new B.DB(null)},
DB:function DB(d){this.a=d},
aOu:function aOu(d,e){var _=this
_.e=_.d=!1
_.r=_.f=null
_.w=d
_.x=e
_.c=_.a=null},
c7o:function c7o(d){this.a=d},
c7p:function c7p(d,e){this.a=d
this.b=e},
c7l:function c7l(){},
c7m:function c7m(d){this.a=d},
c7n:function c7n(d){this.a=d},
aX_(d){var x=0,w=A.l(y.y),v,u
var $async$aX_=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:d.m(0,"organization",1)
u=$.e0().Q
u===$&&A.b()
x=3
return A.c(u.mU("register",d),$async$aX_)
case 3:v=f.a
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$aX_,w)}},D,Q,E,R,S,T
J=c[1]
A=c[0]
C=c[2]
F=c[102]
G=c[197]
H=c[186]
I=c[166]
K=c[191]
L=c[190]
M=c[207]
N=c[120]
O=c[154]
P=c[217]
B=a.updateHolder(c[26],B)
D=c[326]
Q=c[68]
E=c[33]
R=c[189]
S=c[327]
T=c[254]
B.DB.prototype={
N(){var x=null
return new B.aOu(A.a([A.vz(x,x,x,x,1,x,!0,x,x,x,x,x,x,"name"),A.vz(x,x,x,x,2,x,!0,x,x,x,x,x,x,"surname"),A.vz(x,x,x,x,3,x,x,x,x,x,x,x,x,"sex"),A.vz(x,x,x,x,4,x,!0,x,x,x,x,x,x,"email"),A.vz(x,x,x,x,5,x,!0,x,x,x,x,x,x,"city"),A.vz(x,x,x,x,6,x,x,x,x,x,x,x,x,"birth_year")],y.a),new A.aL(x,y.c))}}
B.aOu.prototype={
l(){this.ai()},
A(d){var x,w,v,u=this,t=null,s=E.cuc(u.w)
u.r=s
x=u.x
s.a=new E.aoD(t,t,x,t,t,t,t)
s=R.bp(D.b3K,t)
s=H.i3(t,t,t,!0,t,t,1,!0,t,t,!1,t,!1,t,t,I.th(new B.c7o(d)),t,!0,t,t,t,t,t,s,t,t,t,1,t)
if(u.e){x=A.aN(t,t,A.D(d).ax.a===C.v?$.et():C.q,t,t,t,t,t,t,t,t,18,t,t,t,t,t,!0,t,t,t,t,t,t,t,t)
w=u.f
w=w==null?t:w.i(0,"email")
v=y.w
v=new A.a6(D.aj1,A.yX(t,t,t,C.c_,t,t,!0,t,A.dF(A.a([A.dF(t,t,t,x,A.x("Almost done! Your credentials for signing in to the app have been sent to your email {email}. Please check your inbox to complete the registration.",A.y(["email",w],v,v))),D.b7O],y.F),t,t,t,t),C.bj,t,t,C.Z,C.aC),t)
x=v}else{w=u.r
w=A.J(E.cu9(d,w.a.c,w),!0,y.u)
w.push(M.ai)
w.push(N.M9(C.cp,d,50,!0,A.x("Sign up",t),new B.c7p(u,d),C.m,250))
x=Q.anP(new F.xg(A.ax(w,C.j,C.f,C.h,t,C.p),t),x,t)}return G.eW(s,t,new A.cu(C.aI,t,t,new A.cO(new A.ad(0,820,0,1/0),K.ek(new A.a6(P.bp,x,t),t,C.u,t,t,t,C.F),t),t),t,t,t,t,t)}}
var z=a.updateTypes([])
B.c7o.prototype={
$0(){return O.wh(this.a)},
$S:0}
B.c7p.prototype={
$0(){var x=0,w=A.l(y.q),v=this,u,t,s,r,q,p
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:F.a69(!0)
u=v.a
t=u.x.gW()
t=t==null?null:t.af9()
x=t===!0?2:3
break
case 2:u.B(new B.c7l())
t=u.r
t.toString
s=y.w
t=A.j6(E.cua(t,!0).i(0,"fields"),s,y.b)
u.f=t
r=v.b
q=r.ab(y.v)
if(q==null)q=null
else{q=q.r.a
q===$&&A.b()
q=q.td("_")}t.m(0,"lang",q)
q=u.f
q.toString
x=4
return A.c(B.aX_(q),$async$$0)
case 4:p=e
t=J.a2(p)
if(J.m(t.i(p,"code"),200)){A.bB(r,A.x("Registration is almost complete!",null),C.a2)
u.B(new B.c7m(u))}else if(J.m(t.i(p,"code"),409))A.bB(r,A.x("Registration failed: Email {email} is already in use.",A.y(["email",t.i(p,"email")],s,s)),C.b6)
else A.bB(r,A.x("Registration has failed.",null),C.b6)
u.B(new B.c7n(u))
case 3:return A.j(null,w)}})
return A.k($async$$0,w)},
$S:1}
B.c7l.prototype={
$0(){},
$S:0}
B.c7m.prototype={
$0(){this.a.e=!0},
$S:0}
B.c7n.prototype={
$0(){this.a.d=!1},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.DB,A.F)
x(B.aOu,A.L)
w(A.cl,[B.c7o,B.c7p,B.c7l,B.c7m,B.c7n])})()
A.bl(b.typeUniverse,JSON.parse('{"DB":{"F":[],"d":[]},"aOu":{"L":["DB"]}}'))
var y={a:A.z("q<iu>"),F:A.z("q<ix>"),c:A.z("aL<y0>"),y:A.z("aa<e,@>"),w:A.z("e"),u:A.z("d"),v:A.z("mX"),b:A.z("@"),q:A.z("~")};(function constants(){D.aj1=new A.an(12,88,12,12)
D.b3K=new A.bZ("Sign up",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aS7=new A.a6(S.I_,T.Jj,null)
D.b7O=new L.mf(D.aS7,C.ea,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_63",e:"endPart",h:b})})($__dart_deferred_initializers__,"la0M2i9de8H8td8hGgu/S5ptzyc=");