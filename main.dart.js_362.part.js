((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_362",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,O,P,Q,R,S,F,T,U,V,W,X,Y,Z,A_,B={
d6u(d,e){return new B.zq(e,d)},
zq:function zq(d,e){this.c=d
this.a=e},
aNY:function aNY(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
c9m:function c9m(d,e){this.a=d
this.b=e},
c9t:function c9t(d,e){this.a=d
this.b=e},
c9u:function c9u(d,e){this.a=d
this.b=e},
c9r:function c9r(d){this.a=d},
c9q:function c9q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c9p:function c9p(d,e,f){this.a=d
this.b=e
this.c=f},
c9n:function c9n(d,e){this.a=d
this.b=e},
c9o:function c9o(){},
c9s:function c9s(d,e){this.a=d
this.b=e},
w8:function w8(d,e){this.a=d
this.b=e},
d6t(d){return A.cJv(d)},
Ha(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$Ha=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:n=$.B5()
m=n.bU("news").hx(0,"id")
l=d.a
l.toString
v=d.d
m=A.lQ(m.oV(m.pZ("created_at","lt."+l.j(0))),m.$ti.c).aFp("id",v)
l=A.dl()
l.toString
x=2
return A.d(m.cD("occasion",l).bLu(0,"created_at").aEJ(1).PZ(),$async$Ha)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.bU("user_news").hx(0,"user").cD("news_id",v),$async$Ha)
case 6:t=f
s=A.a([],y.t)
for(n=J.aP(t),m=y.N,l=y.z,r=J.a2(u);n.q();){q=J.x(n.gL(n),"user")
p=r.h(u,"id")
o=$.h2
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],m,l))}n=$.B5()
x=7
return A.d(n.bU("user_news").aga(s),$async$Ha)
case 7:x=4
break
case 5:x=8
return A.d(n.bU("user_news").iL(0).cD("news_id",v),$async$Ha)
case 8:case 4:x=9
return A.d(n.bU("news").iL(0).cD("id",v),$async$Ha)
case 9:return A.i(null,w)}})
return A.j($async$Ha,w)},
b7l(d){var x=0,w=A.k(y.H),v
var $async$b7l=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.B5().bU("news").eS(0,A.z(["message",d.b],v,v)).cD("id",d.d),$async$b7l)
case 2:return A.i(null,w)}})
return A.j($async$b7l,w)},
aoC(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$aoC=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.B5().bU("news")
s=A.dl()
s.toString
x=5
return A.d(t.jk(0,A.z(["occasion",s,"message",u,"created_by",$.e6().gdH().c.a],y.N,y.K)).im(0),$async$aoC)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.WU(Y.WS(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.S)(t),++q){p=new A.d6("")
new G.aJf(p).bk(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.bq(o).length===0)continue
r+=o}r=C.e.bq(r)
t=$.B5().bU("log_notifications")
s=A.dl()
s.toString
x=8
return A.d(t.jk(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$aoC)
case 8:A.bI(d,A.u("Message has been sent.",null),C.a8)
x=1
break
case 7:if(h)A.bI(d,A.u("Message has been created.",null),C.a8)
case 1:return A.i(v,w)}})
return A.j($async$aoC,w)},
aoD(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$aoD=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.e6()
if(s.gdH().d==null)A.a7(A.cN("User must be logged in."))
v=$.B5()
u=v.bU("user_news").iL(0).cD("user",s.gdH().c.a)
t=A.dl()
t.toString
x=2
return A.d(u.cD("occasion",t),$async$aoD)
case 2:x=3
return A.d(v.bU("user_news").jk(0,A.z(["user",s.gdH().c.a,"news_id",d,"occasion",A.dl()],y.N,y.X)).im(0),$async$aoD)
case 3:return A.i(null,w)}})
return A.j($async$aoD,w)}},D,A0,A1,E,A2,A3,G
J=c[1]
A=c[0]
C=c[2]
H=c[196]
I=c[289]
K=c[206]
L=c[197]
M=c[217]
N=c[209]
O=c[341]
P=c[221]
Q=c[140]
R=c[103]
S=c[349]
F=c[123]
T=c[311]
U=c[153]
V=c[242]
W=c[220]
X=c[263]
Y=c[112]
Z=c[218]
A_=c[111]
B=a.updateHolder(c[19],B)
D=c[365]
A0=c[107]
A1=c[254]
E=c[199]
A2=c[203]
A3=c[156]
G=c[166]
B.zq.prototype={
M(){return new B.aNY(A.a([],y.o))}}
B.aNY.prototype={
U(){this.ae()
this.bc()},
l(){this.ag()},
aV(){this.c7()
this.Lj()},
Lj(){var x=0,w=A.k(y.H),v=this,u
var $async$Lj=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Dd(u,null,y.X)
x=(u==null?null:u.grM())===!0&&!v.e?2:3
break
case 2:x=$.e6().gdH().d!=null&&J.je(v.d)&&!J.hq(v.d).f?4:5
break
case 4:x=6
return A.d(B.aoD(J.hq(v.d).d),$async$Lj)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$Lj,w)},
bp6(d){H.km(d,"newsForm",y.X).aN(new B.c9m(this,d),y.P)},
a_d(){var x=0,w=A.k(y.H),v=this,u
var $async$a_d=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.ZE(),$async$a_d)
case 2:v.B(new u.c9t(v,e))
return A.i(null,w)}})
return A.j($async$a_d,w)},
nX(){var x=0,w=A.k(y.H),v=this,u
var $async$nX=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(U.mn("newsOffline",B.dpB(),y.x),$async$nX)
case 2:v.B(new u.c9u(v,e))
return A.i(null,w)}})
return A.j($async$nX,w)},
bc(){var x=0,w=A.k(y.H),v=this
var $async$bc=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.nX(),$async$bc)
case 2:x=3
return A.d(v.a_d(),$async$bc)
case 3:x=4
return A.d(A.qD("newsOffline",v.d),$async$bc)
case 4:v.Lj()
return A.i(null,w)}})
return A.j($async$bc,w)},
A(d){var x,w,v=null,u=A.D(d).ax.a===C.u?$.iy():$.q1(),t=E.bn(D.bFb,v)
t=L.ij(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,A_.bwG(),v,!0,v,v,v,v,v,t,v,v,v,1,v)
x=J.fk(this.d)?new A.a6(O.Lr,A.aj(A.a([A.br(D.auL,A.D(d).ay,v,64),Z.a2,A.T(A.WZ("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.b1,v,v,v,v)],y.p),C.i,C.bt,C.h,v,C.l),v):new A0.DD(new B.c9r(this),v)
w=A.j3()
return K.f5(t,u,new A.cC(C.aK,v,v,new A.cQ(new A.ac(0,720,0,1/0),x,v),v),v,v,A.j7(A.a07(v,S.fW,v,v,!1,new B.c9s(this,d),v),w),v,v)}}
B.w8.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["U<~>(w8)","C<mq<w8>>(L)","uP(B<m,@>)"])
B.c9m.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:y.a.a(d)
u=J.a2(d)
t=u.h(d,"add_to_news")
if(t==null)t=!0
s=u.h(d,"with_notification")
s.toString
r=u.h(d,"to")
q=u.h(d,"content")
q.toString
p=u.h(d,"heading")
u=u.h(d,"heading_default")
u.toString
s=B.aoC(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.c7(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.bc(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:114}
B.c9t.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c9u.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c9r.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bv(x.d);++w){v=A.a([],u)
if(w!==0)v.push(M.fS)
v.push(new A.f_(new B.c9q(x,w,d,e),null))
C.b.H(t,v)}return A.aj(t,C.bj,C.f,C.h,null,C.l)},
$S:210}
B.c9q.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.x(p.d,o),m=o>0?J.x(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.bA(x)===A.bA(w)&&A.bM(x)===A.bM(w)&&A.cL(x)===A.cL(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.ab(y.g).r.a
o===$&&A.b()
o=A.i_("EEEE d.M.y",o.gff(0))
u=n.a
u.toString
u=o.dC(u)
if(n.f){o=p.c
o.toString
o=A.aE(q,q,A.D(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.aE(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ay(A1.ij,A.T(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.arh,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.aE(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aE(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a6(I.hJ,A.T(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.c8(10)
o=A.D(d)
t=n.b
t.toString
t=A3.iW(q,18,t,!0,r.d,r.c)
s=$.e6().gdH().d
w.push(new A.a6(V.BX,A.ay(q,A.aj(A.a([new A.a6(N.b_,t,q),A.j7(new A.a6(C.aB,A.av(A.a([A.br(D.auk,A.D(d).ay,q,16),W.ab4,A.T(C.c.j(n.e),q,q,q,q,q,q,q,A.aE(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),P.jv],x),C.i,C.dc,C.h,0,q),q),s!=null)],x),C.i,C.f,C.h,q,C.l),C.k,q,q,new A.bi(o.ax.k2,q,q,u,q,q,q,C.P),q,q,q,q,q,q,q,q),q))
if(A.j3())w.push(R.JT(q,D.avg,new B.c9o(),new B.c9p(p,n,d),y.B))
return A.aj(w,C.bj,C.f,C.h,q,C.l)},
$S:1045}
B.c9p.prototype={
$1(d){return this.aJY(d)},
aJY(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.KE?2:4
break
case 2:x=5
return A.d(B.Ha(t),$async$$1)
case 5:A.bI(s,A.u("Message has been removed.",null),C.a8)
x=3
break
case 4:u=Q.qj(A.z(["content",t.b],y.N,y.z),A.dl())
x=6
return A.d(A2.fh(s,!1).f.ih(u,y.X).aN(new B.c9n(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.bc(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.c9n.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bd(d)
x=4
return A.d(B.b7l(u),$async$$1)
case 4:A.bI(v.b,A.u("Message has been changed.",null),C.a8)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:114}
B.c9o.prototype={
$1(d){var x=y.B
return A.a([F.uX(E.bn(X.H4,null),!0,48,D.aoF,x),F.uX(E.bn(D.bEN,null),!0,48,D.KE,x)],y.h)},
$S:z+1}
B.c9s.prototype={
$0(){return this.a.bp6(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dpB","d6t",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.zq,A.I)
x(B.aNY,A.M)
w(A.bF,[B.c9m,B.c9q,B.c9p,B.c9n,B.c9o])
w(A.cp,[B.c9t,B.c9u,B.c9s])
x(B.c9r,A.dt)
x(B.w8,A.dY)})()
A.bk(b.typeUniverse,JSON.parse('{"zq":{"I":[],"e":[]},"aNY":{"M":["zq"]}}'))
var y=(function rtii(){var x=A.A
return{B:x("w8"),_:x("U<@>"),t:x("r<B<m,@>>"),o:x("r<uP>"),h:x("r<mq<w8>>"),p:x("r<e>"),a:x("B<m,@>"),x:x("uP"),P:x("aC"),K:x("E"),N:x("m"),g:x("kW"),z:x("@"),X:x("E?"),H:x("~")}})();(function constants(){D.KE=new B.w8(0,"delete")
D.aoF=new B.w8(1,"edit")
D.arh=new A.ap(16,8,16,0)
D.auk=new A.aD(58652,"MaterialIcons",null,!1)
D.auL=new A.aD(61075,"MaterialIcons",null,!1)
D.avg=new A.dd(T.My,null,null,null,null)
D.bEN=new A.ca("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bFb=new A.ca("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_362",e:"endPart",h:b})})($__dart_deferred_initializers__,"cGHk7E9G/g9eTCqhB09Ufa2TGNQ=");