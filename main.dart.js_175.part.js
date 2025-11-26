((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,F,H,I,K,B={
dKY(){return new B.HB(null)},
HB:function HB(d){this.a=d},
b0t:function b0t(d,e){var _=this
_.e=_.d=!1
_.r=_.f=null
_.w=d
_.x=e
_.c=_.a=null},
cO9:function cO9(d){this.a=d},
cOa:function cOa(d,e){this.a=d
this.b=e},
cO6:function cO6(d){this.a=d},
cO7:function cO7(d){this.a=d},
cO8:function cO8(d){this.a=d},
bbq(d){var x=0,w=A.n(y.y),v,u
var $async$bbq=A.i(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:d.m(0,"organization",1)
u=$.e8().as
u===$&&A.a()
x=3
return A.d(u.n6("register",d),$async$bbq)
case 3:v=f.a
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$bbq,w)}},D,L,E,M,N,O,P
J=c[1]
A=c[0]
C=c[2]
G=c[167]
F=c[103]
H=c[132]
I=c[153]
K=c[149]
B=a.updateHolder(c[28],B)
D=c[292]
L=c[57]
E=c[35]
M=c[293]
N=c[169]
O=c[197]
P=c[164]
B.HB.prototype={
K(){var x=null
return new B.b0t(A.b([A.wq(x,x,x,x,1,x,!0,x,x,x,x,x,x,"name"),A.wq(x,x,x,x,2,x,!0,x,x,x,x,x,x,"surname"),A.wq(x,x,x,x,3,x,x,x,x,x,x,x,x,"sex"),A.wq(x,x,x,x,4,x,!0,x,x,x,x,x,x,"email"),A.wq(x,x,x,x,5,x,!0,x,x,x,x,x,x,"city"),A.wq(x,x,x,x,6,x,x,x,x,x,x,x,x,"birth_year")],y.a),new A.aK(x,y.c))}}
B.b0t.prototype={
l(){this.ab()},
A(d){var x,w,v,u,t,s=this,r=null,q=A.dfb(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
q.cx=s.w
x=E.df9(q)
s.r=x
w=s.x
x.a=new E.ayV(r,r,w,r,r,r,r)
x=G.ca(D.bJm,r)
x=P.ix(r,r,r,!0,!0,r,r,1,!0,r,r,!1,r,!1,r,r,I.ua(r,new B.cO9(d)),r,!0,r,r,r,r,r,x,r,r,r,1,r,!0)
if(s.e){w=A.ad(r,r,A.y(d).ax.a===C.r?$.dI():C.p,r,r,r,r,r,r,r,r,18,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
v=s.f
v=v==null?r:v.h(0,"email")
u=y.w
u=new A.T(D.axd,A.tB(r,r,r,C.bL,r,r,!0,r,A.c9(A.b([A.c9(r,r,r,r,w,A.f("Almost done! Your credentials for signing in to the app have been sent to your email {email}. Please check your inbox to complete the registration.",r,A.w(["email",v],u,u))),D.bOA],y.F),r,r,r,r,r),C.aK,r,r,C.at,C.aF),r)
w=u}else{v=s.r
v=A.B(E.df6(d,v.a.c,v),y.u)
v.push(C.X)
u=s.d?r:new B.cOa(s,d)
t=A.f("Sign up",r,r)
v.push(H.JR(C.es,d,50,!s.d,t,u,C.m,250))
w=L.btX(new F.Aw(A.a9(v,C.i,C.f,C.h,0,r,C.l),r),w,r)}return N.eR(x,r,new A.cy(C.aU,r,r,new A.ct(new A.ac(0,720,0,1/0),A.d0(new A.T(C.be,w,r),C.n,r,C.q,C.F,r,r,r,r,r,r,!1,C.C),r),r),r,r,r,r)}}
var z=a.updateTypes([])
B.cO9.prototype={
$0(){return K.zq(this.a)},
$S:0}
B.cOa.prototype={
$0(){var x=0,w=A.n(y.q),v=this,u,t,s,r,q,p
var $async$$0=A.i(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:F.ads(!0)
u=v.a
t=u.x.gZ()
t=t==null?null:t.anU()
x=t===!0?2:3
break
case 2:u.q(new B.cO6(u))
t=u.r
t.toString
s=y.w
t=A.i_(E.df7(t,!0).h(0,"fields"),s,y.b)
u.f=t
r=v.b
q=r.af(y.v)
if(q==null)q=null
else{q=q.r.a
q===$&&A.a()
q=q.ji("_")}t.m(0,"lang",q)
q=u.f
q.toString
x=4
return A.d(B.bbq(q),$async$$0)
case 4:p=e
t=J.a2(p)
if(J.q(t.h(p,"code"),200)){A.b5(r,A.f("Registration is almost complete!",null,null),C.Z)
u.q(new B.cO7(u))}else if(J.q(t.h(p,"code"),409))A.b5(r,A.f("Registration failed: Email {email} is already in use.",null,A.w(["email",t.h(p,"email")],s,s)),C.ay)
else A.b5(r,A.f("Registration has failed.",null,null),C.ay)
u.q(new B.cO8(u))
case 3:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
B.cO6.prototype={
$0(){this.a.d=!0},
$S:0}
B.cO7.prototype={
$0(){this.a.e=!0},
$S:0}
B.cO8.prototype={
$0(){this.a.d=!1},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.HB,A.L)
x(B.b0t,A.N)
w(A.d3,[B.cO9,B.cOa,B.cO6,B.cO7,B.cO8])})()
A.cg(b.typeUniverse,JSON.parse('{"HB":{"L":[],"e":[]},"b0t":{"N":["HB"]}}'))
var y={a:A.J("u<i8>"),F:A.J("u<ke>"),c:A.J("aK<wp>"),y:A.J("z<h,@>"),w:A.J("h"),u:A.J("e"),v:A.J("lE"),b:A.J("@"),q:A.J("~")};(function constants(){D.axd=new A.af(12,88,12,12)
D.bJm=new A.ch("Sign up",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bw6=new A.T(O.Pd,M.QO,null)
D.bOA=new A.md(D.bw6,C.ff,null,null)})()};
(a=>{a["n2YNxn/JXJIa3NHb77p6PJTqjIY="]=a.current})($__dart_deferred_initializers__);