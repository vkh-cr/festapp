((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,F,H,I,K,B={
dMB(){return new B.HD(null)},
HD:function HD(d){this.a=d},
b0K:function b0K(d,e){var _=this
_.e=_.d=!1
_.r=_.f=null
_.w=d
_.x=e
_.c=_.a=null},
cPk:function cPk(d){this.a=d},
cPl:function cPl(d,e){this.a=d
this.b=e},
cPh:function cPh(d){this.a=d},
cPi:function cPi(d){this.a=d},
cPj:function cPj(d){this.a=d},
bbI(d){var x=0,w=A.m(y.y),v,u
var $async$bbI=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:d.m(0,"organization",1)
u=$.ea().as
u===$&&A.a()
x=3
return A.d(u.ma("register",d),$async$bbI)
case 3:v=f.a
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bbI,w)}},D,L,E,M,N,O,P
J=c[1]
A=c[0]
C=c[2]
G=c[167]
F=c[102]
H=c[132]
I=c[153]
K=c[149]
B=a.updateHolder(c[28],B)
D=c[294]
L=c[57]
E=c[35]
M=c[295]
N=c[169]
O=c[197]
P=c[164]
B.HD.prototype={
K(){var x=null
return new B.b0K(A.b([A.wt(x,x,x,x,1,x,!0,x,x,x,x,x,x,"name"),A.wt(x,x,x,x,2,x,!0,x,x,x,x,x,x,"surname"),A.wt(x,x,x,x,3,x,x,x,x,x,x,x,x,"sex"),A.wt(x,x,x,x,4,x,!0,x,x,x,x,x,x,"email"),A.wt(x,x,x,x,5,x,!0,x,x,x,x,x,x,"city"),A.wt(x,x,x,x,6,x,x,x,x,x,x,x,x,"birth_year")],y.a),new A.aG(x,y.c))}}
B.b0K.prototype={
l(){this.a8()},
A(d){var x,w,v,u,t,s=this,r=null,q=A.dgN(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
q.cx=s.w
x=E.dgL(q)
s.r=x
w=s.x
x.a=new E.az9(r,r,w,r,r,r,r)
x=G.ca(D.bJK,r)
x=P.iM(r,r,r,!0,!0,r,r,1,!0,r,r,!1,r,!1,r,r,I.ud(r,new B.cPk(d)),r,!0,r,r,r,r,r,x,r,r,r,1,r,!0)
if(s.e){w=A.ab(r,r,A.y(d).ax.a===C.r?$.dI():C.q,r,r,r,r,r,r,r,r,18,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
v=s.f
v=v==null?r:v.h(0,"email")
u=y.w
u=new A.S(D.axq,A.tC(r,r,r,C.bM,r,r,!0,r,A.c9(A.b([A.c9(r,r,r,r,w,A.f("Almost done! Your credentials for signing in to the app have been sent to your email {email}. Please check your inbox to complete the registration.",r,A.w(["email",v],u,u))),D.bOZ],y.F),r,r,r,r,r),C.aL,r,r,C.at,C.aF),r)
w=u}else{v=s.r
v=A.C(E.dgI(d,v.a.c,v),y.u)
v.push(C.W)
u=s.d?r:new B.cPl(s,d)
t=A.f("Sign up",r,r)
v.push(H.JW(C.eu,d,50,!s.d,t,u,C.m,250))
w=L.bun(new F.AB(A.a8(v,C.i,C.f,C.h,0,r,C.k),r),w,r)}return N.eO(x,r,new A.cv(C.aQ,r,r,new A.cp(new A.ae(0,720,0,1/0),A.cY(new A.S(C.b9,w,r),C.n,r,C.p,C.F,r,r,r,r,r,r,!1,C.C),r),r),r,r,r,r)}}
var z=a.updateTypes([])
B.cPk.prototype={
$0(){return K.zs(this.a)},
$S:0}
B.cPl.prototype={
$0(){var x=0,w=A.m(y.q),v=this,u,t,s,r,q,p
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:F.adz(!0)
u=v.a
t=u.x.gZ()
t=t==null?null:t.ao4()
x=t===!0?2:3
break
case 2:u.q(new B.cPh(u))
t=u.r
t.toString
s=y.w
t=A.i0(E.dgJ(t,!0).h(0,"fields"),s,y.b)
u.f=t
r=v.b
q=r.af(y.v)
if(q==null)q=null
else{q=q.r.a
q===$&&A.a()
q=q.jk("_")}t.m(0,"lang",q)
q=u.f
q.toString
x=4
return A.d(B.bbI(q),$async$$0)
case 4:p=e
t=J.a1(p)
if(J.q(t.h(p,"code"),200)){A.aZ(r,A.f("Registration is almost complete!",null,null),C.X)
u.q(new B.cPi(u))}else if(J.q(t.h(p,"code"),409))A.aZ(r,A.f("Registration failed: Email {email} is already in use.",null,A.w(["email",t.h(p,"email")],s,s)),C.au)
else A.aZ(r,A.f("Registration has failed.",null,null),C.au)
u.q(new B.cPj(u))
case 3:return A.k(null,w)}})
return A.l($async$$0,w)},
$S:2}
B.cPh.prototype={
$0(){this.a.d=!0},
$S:0}
B.cPi.prototype={
$0(){this.a.e=!0},
$S:0}
B.cPj.prototype={
$0(){this.a.d=!1},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.HD,A.K)
x(B.b0K,A.N)
w(A.d5,[B.cPk,B.cPl,B.cPh,B.cPi,B.cPj])})()
A.cf(b.typeUniverse,JSON.parse('{"HD":{"K":[],"e":[]},"b0K":{"N":["HD"]}}'))
var y={a:A.J("v<ia>"),F:A.J("v<ke>"),c:A.J("aG<ws>"),y:A.J("A<h,@>"),w:A.J("h"),u:A.J("e"),v:A.J("lE"),b:A.J("@"),q:A.J("~")};(function constants(){D.axq=new A.af(12,88,12,12)
D.bJK=new A.ch("Sign up",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bwp=new A.S(O.Pm,M.QX,null)
D.bOZ=new A.md(D.bwp,C.fg,null,null)})()};
(a=>{a["rQEP8GknW8v5HTqDkxWuGc9rbjA="]=a.current})($__dart_deferred_initializers__);