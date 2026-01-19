((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,M,F,E,N,O,P,Q,R,S,T,G,H,U,B={
eN5(d,e){return new B.a9T(e,d)},
a9T:function a9T(d,e){this.c=d
this.a=e},
bru:function bru(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
day:function day(d){this.a=d},
dar:function dar(d,e){this.a=d
this.b=e},
daz:function daz(d,e){this.a=d
this.b=e},
daA:function daA(d,e){this.a=d
this.b=e},
daw:function daw(d){this.a=d},
dav:function dav(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dau:function dau(d,e,f){this.a=d
this.b=e
this.c=f},
das:function das(d,e){this.a=d
this.b=e},
dat:function dat(){},
dax:function dax(d,e){this.a=d
this.b=e},
a1E:function a1E(d,e){this.a=d
this.b=e},
adN(d){var x=0,w=A.p(y.H),v,u,t,s,r,q,p,o,n,m,l,k
var $async$adN=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:l=$.a7n()
k=l.cF("news").ly(0,"id")
k=A.So(k.qf(k.rb("created_at","lt."+d.a.j(0))),k.$ti.c)
v=d.d
u=k.rb("id","neq."+v)
k=A.So(k.qf(u),k.$ti.c)
t=A.dj()
t.toString
x=2
return A.f(k.ed("occasion",t).c3V(0,"created_at").aQ0(1).LM(),$async$adN)
case 2:s=f
x=s!=null?3:5
break
case 3:x=6
return A.f(l.cF("user_news").ly(0,"user").ed("news_id",v),$async$adN)
case 6:r=f
q=A.c([],y.t)
for(l=J.aL(r),k=y.N,t=y.z,p=J.a3(s);l.t();){o=J.y(l.gM(l),"user")
n=p.h(s,"id")
m=$.dI().a
if(m==null)m=null
else{m=m.b
m=m==null?null:m.a}m.toString
q.push(A.d(["user",o,"news_id",n,"occasion",m],k,t))}l=$.a7n()
x=7
return A.f(l.cF("user_news").anD(q),$async$adN)
case 7:x=4
break
case 5:x=8
return A.f(l.cF("user_news").jz(0).ed("news_id",v),$async$adN)
case 8:case 4:x=9
return A.f(l.cF("news").jz(0).ed("id",v),$async$adN)
case 9:return A.n(null,w)}})
return A.o($async$adN,w)},
bQH(d){var x=0,w=A.p(y.H),v
var $async$bQH=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:v=y.z
x=2
return A.f($.a7n().cF("news").f0(0,A.d(["message",d.b],v,v)).ed("id",d.d),$async$bQH)
case 2:return A.n(null,w)}})
return A.o($async$bQH,w)},
b0p(d,e,f,g,h,i,j){var x=0,w=A.p(y.z),v,u,t,s,r,q,p,o
var $async$b0p=A.l(function(k,l){if(k===1)return A.m(l,w)
for(;;)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.a7n().cF("news")
s=A.dj()
s.toString
r=$.e3().gdL().c
x=5
return A.f(t.ix(0,A.d(["occasion",s,"message",u,"created_by",(r==null?null:r.r).a],y.N,y.K)).jn(0),$async$b0p)
case 5:case 4:x=i?6:7
break
case 6:for(t=I.akF(Z.akC(g),"p"),s=t.length,q="",p=0;p<t.length;t.length===s||(0,A.O)(t),++p){r=new A.dB("")
new I.bmc(r).bw(t[p])
r=r.a
o=(r.charCodeAt(0)==0?r:r)+"\n"
if(C.e.b5(o).length===0)continue
q+=o}q=C.e.b5(q)
t=$.a7n().cF("log_notifications")
s=A.dj()
s.toString
x=8
return A.f(t.ix(0,A.d(["occasion",s,"to",j,"content",q,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$b0p)
case 8:A.aS(d,A.j("Message has been sent.",null,null),C.ac)
x=1
break
case 7:if(h)A.aS(d,A.j("Message has been created.",null,null),C.ac)
case 1:return A.n(v,w)}})
return A.o($async$b0p,w)},
b0q(d){var x=0,w=A.p(y.H),v,u,t,s
var $async$b0q=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:s=$.e3()
if(s.gdL().c==null)A.af(A.ct("User must be logged in."))
v=$.a7n()
u=v.cF("user_news").jz(0)
t=s.gdL().c
u=u.ed("user",(t==null?null:t.r).a)
t=A.dj()
t.toString
x=2
return A.f(u.ed("occasion",t),$async$b0q)
case 2:v=v.cF("user_news")
s=s.gdL().c
x=3
return A.f(v.ix(0,A.d(["user",(s==null?null:s.r).a,"news_id",d,"occasion",A.dj()],y.N,y.X)).jn(0),$async$b0q)
case 3:return A.n(null,w)}})
return A.o($async$b0q,w)},
eN4(d){return A.dUh(d)}},D,V,W,X,Y,I,Z,A_,A0,A1,A2
J=c[1]
A=c[0]
C=c[2]
K=c[199]
L=c[172]
M=c[174]
F=c[133]
E=c[163]
N=c[138]
O=c[202]
P=c[177]
Q=c[220]
R=c[103]
S=c[239]
T=c[132]
G=c[113]
H=c[238]
U=c[91]
B=a.updateHolder(c[18],B)
D=c[241]
V=c[173]
W=c[159]
X=c[170]
Y=c[154]
I=c[164]
Z=c[127]
A_=c[240]
A0=c[237]
A1=c[149]
A2=c[182]
B.a9T.prototype={
L(){return new B.bru(A.c([],y.o))}}
B.bru.prototype={
S(){var x,w=this
w.a_()
x=w.c
x.toString
G.a0x(x,!1).f.Y(0,new B.day(w))
w.aX()},
l(){this.a8()},
Oj(){var x=0,w=A.p(y.H),v=this,u
var $async$Oj=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
u=A.a9M(u,null,y.X)
x=(u==null?null:u.gpT())===!0&&!v.e?2:3
break
case 2:x=$.e3().gdL().c!=null&&J.fH(v.d)&&!J.M1(v.d).f?4:5
break
case 4:x=6
return A.f(B.b0q(J.M1(v.d).d),$async$Oj)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.n(null,w)}})
return A.o($async$Oj,w)},
bGq(d){L.MQ(d,"newsForm",y.X).aN(new B.dar(this,d),y.P)},
a4I(){var x=0,w=A.p(y.H),v=this,u
var $async$a4I=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=B
x=2
return A.f(A.ayl(),$async$a4I)
case 2:v.q(new u.daz(v,e))
return A.n(null,w)}})
return A.o($async$a4I,w)},
a4J(){var x=0,w=A.p(y.H),v=this,u
var $async$a4J=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=B
x=2
return A.f(Y.R2("newsOffline",B.f74(),y.x),$async$a4J)
case 2:v.q(new u.daA(v,e))
return A.n(null,w)}})
return A.o($async$a4J,w)},
aX(){var x=0,w=A.p(y.H),v=this
var $async$aX=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:x=2
return A.f(v.a4J(),$async$aX)
case 2:x=3
return A.f(v.a4I(),$async$aX)
case 3:x=4
return A.f(A.U_("newsOffline",v.d,y.x),$async$aX)
case 4:v.Oj()
return A.n(null,w)}})
return A.o($async$aX,w)},
A(d){var x,w,v=null,u=A.B(d).ax.a===C.B?$.Mo():$.S3(),t=A.bR(C.ar)
t=X.NN(v,v,v,!0,!0,v,v,1,v,v,v,!1,v,!1,v,v,new U.agI(v,v),v,!0,v,v,v,v,v,E.cZ(A.x("News",v,v,v,v,v,v,v,A.ad(v,v,new A.bf(t.a,t.b,t.c,0.8).aq(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eS(this.d)?new A.T(P.Qa,A.a6(A.c([A.aA(H.GH,A.B(d).ay,v,v,64),C.a0,A.x(A.bCn("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.aZ,v,v,v,v)],y.p),C.m,C.bm,C.j,0,v,C.o),v):new A1.aaf(new B.daw(this),v)
w=A.OT()
return V.eC(t,u,new A.cq(C.aT,v,v,new A.cn(new A.ah(0,720,0,1/0),x,v),v),v,A.OA(N.a8R(v,S.eV,v,v,O.pP,new B.dax(this,d),v,v),!1,!1,!1,!1,w),v,v,v)}}
B.a1E.prototype={
K(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["Z<~>(a1E)","G<Sm<a1E>>(I)","a00(F<q,@>)"])
B.day.prototype={
$0(){var x=0,w=A.p(y.H),v=this,u,t
var $async$$0=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.a0x(t,!1).f.ga1t()===C.c.dk($.akR(),"news")){u.Oj()
u.aX()}return A.n(null,w)}})
return A.o($async$$0,w)},
$S:1}
B.dar.prototype={
$1(d){var x=0,w=A.p(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:x=d!=null?2:3
break
case 2:y.a.a(d)
u=J.a3(d)
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
s=B.b0p(v.b,p,u,q,t,s,r)
x=4
return A.f(y._.b(s)?s:A.c3(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.f(v.a.aX(),$async$$1)
case 7:case 6:case 3:return A.n(null,w)}})
return A.o($async$$1,w)},
$S:138}
B.daz.prototype={
$0(){this.a.d=this.b},
$S:0}
B.daA.prototype={
$0(){this.a.d=this.b},
$S:0}
B.daw.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.c([],u)
for(x=this.a,w=0;w<J.bi(x.d);++w){v=A.c([],u)
if(w!==0)v.push(C.cN)
v.push(new A.dS(new B.dav(x,w,d,e),null))
C.c.G(t,v)}return A.a6(t,C.bu,C.i,C.j,0,null,C.o)},
$S:311}
B.dav.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.y(p.d,o),m=o>0?J.y(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.ep(x)===A.ep(w)&&A.fm(x)===A.fm(w)&&A.Od(x)===A.Od(w)}else v=!1
x=y.p
w=A.c([],x)
if(o===0||!v){o=d.ad(y.g).r.a
o===$&&A.b()
o=A.ft("EEEE d.M.y",o.gf8(0))
u=n.a
u.toString
u=o.cd(u)
if(n.f){o=p.c
o.toString
o=A.ad(q,q,A.B(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.U,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.ad(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.U,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ak(A_.k_,A.x(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.q,q,q,q,q,q,q,q,H.PY,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.ad(q,q,A.B(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.U,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.ad(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.U,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.T(A0.ee,A.x(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.aP(10)
o=A.B(d)
t=n.b
t.toString
t=W.LX(q,18,t,!0,r.d,r.c)
s=$.e3().gdL().c
w.push(new A.T(C.qs,A.ak(q,A.a6(A.c([new A.T(A2.aO,t,q),A.OA(new A.T(C.aB,A.ae(A.c([A.aA(D.aC4,A.B(d).ay,q,q,16),K.jP,A.x(C.d.j(n.e),q,q,q,q,q,q,q,A.ad(q,q,A.B(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.U,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.hK],x),C.m,q,C.cn,C.j,0,q),q),!1,!1,!1,!1,s!=null)],x),C.m,C.i,C.j,0,q,C.o),C.q,q,q,new A.aZ(o.ax.k2,q,q,u,q,q,q,C.a_),q,q,q,q,q,q,q,q),q))
if(A.OT())w.push(R.U3(q,q,q,!0,D.aDI,new B.dat(),C.E,new B.dau(p,n,d),C.aB,q,q,q,y.B))
return A.a6(w,C.bu,C.i,C.j,0,q,C.o)},
$S:1444}
B.dau.prototype={
$1(d){return this.aVP(d)},
aVP(d){var x=0,w=A.p(y.H),v=this,u,t,s
var $async$$1=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:t=v.b
s=v.c
x=d===D.Pc?2:4
break
case 2:x=5
return A.f(B.adN(t),$async$$1)
case 5:A.aS(s,A.j("Message has been removed.",null,null),C.ac)
x=3
break
case 4:u=T.UL(A.d(["content",t.b],y.N,y.z),A.dj())
x=6
return A.f(M.f8(s,!1).f.ii(u,y.X).aN(new B.das(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.f(v.a.aX(),$async$$1)
case 7:return A.n(null,w)}})
return A.o($async$$1,w)},
$S:z+0}
B.das.prototype={
$1(d){var x=0,w=A.p(y.P),v=this,u
var $async$$1=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bn(d)
x=4
return A.f(B.bQH(u),$async$$1)
case 4:A.aS(v.b,A.j("Message has been changed.",null,null),C.ac)
case 3:return A.n(null,w)}})
return A.o($async$$1,w)},
$S:138}
B.dat.prototype={
$1(d){var x=null,w=y.B
return A.c([F.Q2(E.cZ(A.x(A.j("Common.edit",x,x),x,x,x,x,x,x,x,x,x,x,x,x,x),x),!0,48,x,x,x,x,x,D.avE,w),F.Q2(E.cZ(D.bLI,x),!0,48,x,x,x,x,x,D.Pc,w)],y.h)},
$S:z+1}
B.dax.prototype={
$0(){return this.a.bGq(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"f74","eN4",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a9T,A.N)
x(B.bru,A.Q)
w(A.d5,[B.day,B.daz,B.daA,B.dax])
w(A.ck,[B.dar,B.dav,B.dau,B.das,B.dat])
x(B.daw,A.ef)
x(B.a1E,A.Mm)})()
A.cg(b.typeUniverse,JSON.parse('{"a9T":{"N":[],"k":[]},"bru":{"Q":["a9T"]}}'))
var y=(function rtii(){var x=A.L
return{B:x("a1E"),_:x("Z<@>"),t:x("A<F<q,@>>"),o:x("A<a00>"),h:x("A<Sm<a1E>>"),p:x("A<k>"),a:x("F<q,@>"),x:x("a00"),P:x("aJ"),K:x("M"),N:x("q"),g:x("Q9"),z:x("@"),X:x("M?"),H:x("~")}})();(function constants(){D.Pc=new B.a1E(0,"delete")
D.avE=new B.a1E(1,"edit")
D.aC4=new A.av(58652,"MaterialIcons",null,!1)
D.aDI=new A.bY(Q.Rk,null,null,null,null)
D.bLI=new A.cs("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["OrT9XI85CktCjvX/GGXGzZ/vogA="]=a.current})($__dart_deferred_initializers__);