((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_305",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,E,M,N,O,P,F,Q,R,S,T,U,G,B={
dor(d,e){return new B.EE(e,d)},
EE:function EE(d,e){this.c=d
this.a=e},
aRn:function aRn(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
clh:function clh(d){this.a=d},
cla:function cla(d,e){this.a=d
this.b=e},
cli:function cli(d,e){this.a=d
this.b=e},
clj:function clj(d,e){this.a=d
this.b=e},
clf:function clf(d){this.a=d},
cle:function cle(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cld:function cld(d,e,f){this.a=d
this.b=e
this.c=f},
clb:function clb(d,e){this.a=d
this.b=e},
clc:function clc(){},
clg:function clg(d,e){this.a=d
this.b=e},
x1:function x1(d,e){this.a=d
this.b=e},
doq(d){return A.cYm(d)},
Ij(d){return B.dhf(d)},
dhf(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$Ij=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:n=$.Cm()
m=n.ca("news").jN(0,"id")
l=d.a
l.toString
v=d.d
m=A.mo(m.pr(m.qn("created_at","lt."+l.j(0))),m.$ti.c).aIJ("id",v)
l=A.d3()
l.toString
x=2
return A.d(m.dt("occasion",l).bRH(0,"created_at").aI_(1).a13(),$async$Ij)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.ca("user_news").jN(0,"user").dt("news_id",v),$async$Ij)
case 6:t=f
s=A.a([],y.t)
for(n=J.aG(t),m=y.N,l=y.z,r=J.a0(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.fI
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.x(["user",q,"news_id",p,"occasion",o],m,l))}n=$.Cm()
x=7
return A.d(n.ca("user_news").air(s),$async$Ij)
case 7:x=4
break
case 5:x=8
return A.d(n.ca("user_news").j_(0).dt("news_id",v),$async$Ij)
case 8:case 4:x=9
return A.d(n.ca("news").j_(0).dt("id",v),$async$Ij)
case 9:return A.j(null,w)}})
return A.k($async$Ij,w)},
bc2(d){return B.dhi(d)},
dhi(d){var x=0,w=A.l(y.H),v
var $async$bc2=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.Cm().ca("news").eW(0,A.x(["message",d.b],v,v)).dt("id",d.d),$async$bc2)
case 2:return A.j(null,w)}})
return A.k($async$bc2,w)},
aro(d,e,f,g,h,i,j){return B.dhg(d,e,f,g,h,i,j)},
dhg(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$aro=A.f(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Cm().ca("news")
s=A.d3()
s.toString
r=$.dA().gdl().c
x=5
return A.d(t.ji(0,A.x(["occasion",s,"message",u,"created_by",(r==null?null:r.r).a],y.N,y.K)).iC(0),$async$aro)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.Ys(A0.Yq(g),"p"),s=t.length,q="",p=0;p<t.length;t.length===s||(0,A.M)(t),++p){r=new A.dd("")
new H.aMw(r).bp(t[p])
r=r.a
o=(r.charCodeAt(0)==0?r:r)+"\n"
if(C.d.bm(o).length===0)continue
q+=o}q=C.d.bm(q)
t=$.Cm().ca("log_notifications")
s=A.d3()
s.toString
x=8
return A.d(t.ji(0,A.x(["occasion",s,"to",j,"content",q,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$aro)
case 8:A.bx(d,A.q("Message has been sent.",null),C.a8)
x=1
break
case 7:if(h)A.bx(d,A.q("Message has been created.",null),C.a8)
case 1:return A.j(v,w)}})
return A.k($async$aro,w)},
arp(d){return B.dhh(d)},
dhh(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$arp=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dA()
if(s.gdl().c==null)A.a7(A.cO("User must be logged in."))
v=$.Cm()
u=v.ca("user_news").j_(0)
t=s.gdl().c
u=u.dt("user",(t==null?null:t.r).a)
t=A.d3()
t.toString
x=2
return A.d(u.dt("occasion",t),$async$arp)
case 2:v=v.ca("user_news")
s=s.gdl().c
x=3
return A.d(v.ji(0,A.x(["user",(s==null?null:s.r).a,"news_id",d,"occasion",A.d3()],y.N,y.X)).iC(0),$async$arp)
case 3:return A.j(null,w)}})
return A.k($async$arp,w)}},D,V,W,X,Y,Z,H,A_,A0,A1,A2
J=c[1]
A=c[0]
C=c[2]
I=c[175]
K=c[163]
L=c[167]
E=c[166]
M=c[228]
N=c[127]
O=c[82]
P=c[230]
F=c[105]
Q=c[231]
R=c[119]
S=c[178]
T=c[207]
U=c[96]
G=c[114]
B=a.updateHolder(c[19],B)
D=c[229]
V=c[199]
W=c[168]
X=c[150]
Y=c[164]
Z=c[146]
H=c[156]
A_=c[227]
A0=c[124]
A1=c[141]
A2=c[170]
B.EE.prototype={
N(){return new B.aRn(A.a([],y.o))}}
B.aRn.prototype={
T(){var x,w=this
w.ah()
x=w.c
x.toString
G.y6(x,!1).f.a1(0,new B.clh(w))
w.aW()},
l(){this.ai()},
Mf(){var x=0,w=A.l(y.H),v=this,u
var $async$Mf=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Ex(u,null,y.X)
x=(u==null?null:u.gt5())===!0&&!v.e?2:3
break
case 2:x=$.dA().gdl().c!=null&&J.h0(v.d)&&!J.hG(v.d).f?4:5
break
case 4:x=6
return A.d(B.arp(J.hG(v.d).d),$async$Mf)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$Mf,w)},
bv5(d){K.iD(d,"newsForm",y.X).aJ(new B.cla(this,d),y.P)},
a0W(){var x=0,w=A.l(y.H),v=this,u
var $async$a0W=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a0o(),$async$a0W)
case 2:v.v(new u.cli(v,e))
return A.j(null,w)}})
return A.k($async$a0W,w)},
xZ(){var x=0,w=A.l(y.H),v=this,u
var $async$xZ=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(Z.lb("newsOffline",B.dIt(),y.x),$async$xZ)
case 2:v.v(new u.clj(v,e))
return A.j(null,w)}})
return A.k($async$xZ,w)},
aW(){var x=0,w=A.l(y.H),v=this
var $async$aW=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.xZ(),$async$aW)
case 2:x=3
return A.d(v.a0W(),$async$aW)
case 3:x=4
return A.d(A.nL("newsOffline",v.d,y.x),$async$aW)
case 4:v.Mf()
return A.j(null,w)}})
return A.k($async$aW,w)},
B(d){var x,w,v=null,u=A.D(d).ax.a===C.r?$.i4():$.pb(),t=A.bu(C.as)
t=Y.iJ(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new U.L5(v,v),v,!0,v,v,v,v,v,E.bA(A.L("News",v,v,v,v,v,v,v,A.ag(v,v,new A.bn(t.a,t.b,t.c,0.8).bl(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eD(this.d)?new A.a1(M.N_,A.ae(A.a([A.aS(D.azk,A.D(d).ay,v,64),C.a1,A.L(A.Yx("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.aZ,v,v,v,v)],y.p),C.j,C.bm,C.i,0,v,C.m),v):new A1.EZ(new B.clf(this),v)
w=A.ii()
return W.fc(t,u,new A.cr(C.aX,v,v,new A.cH(new A.aa(0,720,0,1/0),x,v),v),v,v,A.jx(R.a1U(P.hv,S.qV,new B.clg(this,d),v),w),v,v)}}
B.x1.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["X<~>(x1)","C<n_<x1>>(G)","vB(A<h,@>)"])
B.clh.prototype={
$0(){var x=0,w=A.l(y.H),v=this,u,t
var $async$$0=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.y6(t,!1).f.gYV()===C.b.dj($.Ox(),"news")){u.Mf()
u.aW()}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2}
B.cla.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:y.a.a(d)
u=J.a0(d)
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
s=B.aro(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.c9(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aW(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:115}
B.cli.prototype={
$0(){this.a.d=this.b},
$S:0}
B.clj.prototype={
$0(){this.a.d=this.b},
$S:0}
B.clf.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bp(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.fT)
v.push(new A.eT(new B.cle(x,w,d,e),null))
C.b.H(t,v)}return A.ae(t,C.bi,C.f,C.i,0,null,C.m)},
$S:219}
B.cle.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.dS(x)===A.dS(w)&&A.eB(x)===A.eB(w)&&A.iS(x)===A.iS(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.ac(y.g).r.a
o===$&&A.b()
o=A.h4("EEEE d.M.y",o.geV(0))
u=n.a
u.toString
u=o.cF(u)
if(n.f){o=p.c
o.toString
o=A.ag(q,q,A.D(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.ag(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ap(V.iT,A.L(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.avH,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.ag(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.ag(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a1(A_.fW,A.L(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bD(10)
o=A.D(d)
t=n.b
t.toString
t=X.ib(q,18,t,!0,r.d,r.c)
s=$.dA().gdl().c
w.push(new A.a1(C.rO,A.ap(q,A.ae(A.a([new A.a1(A2.aT,t,q),A.jx(new A.a1(C.au,A.ar(A.a([A.aS(D.ayR,A.D(d).ay,q,16),I.HG,A.L(C.c.j(n.e),q,q,q,q,q,q,q,A.ag(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.hf],x),C.j,C.dt,C.i,0,q),q),s!=null)],x),C.j,C.f,C.i,0,q,C.m),C.k,q,q,new A.b2(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.ii())w.push(O.xQ(q,q,D.azZ,new B.clc(),C.o,new B.cld(p,n,d),C.au,q,q,q,y.B))
return A.ae(w,C.bi,C.f,C.i,0,q,C.m)},
$S:1259}
B.cld.prototype={
$1(d){return this.aNi(d)},
aNi(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.M9?2:4
break
case 2:x=5
return A.d(B.Ij(t),$async$$1)
case 5:A.bx(s,A.q("Message has been removed.",null),C.a8)
x=3
break
case 4:u=N.pB(A.x(["content",t.b],y.N,y.z),A.d3())
x=6
return A.d(L.ff(s,!1).f.i4(u,y.X).aJ(new B.clb(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aW(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+0}
B.clb.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.b6(d)
x=4
return A.d(B.bc2(u),$async$$1)
case 4:A.bx(v.b,A.q("Message has been changed.",null),C.a8)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:115}
B.clc.prototype={
$1(d){var x=y.B
return A.a([F.nP(E.bA(T.Ir,null),!0,48,D.asU,x),F.nP(E.bA(D.bJr,null),!0,48,D.M9,x)],y.h)},
$S:z+1}
B.clg.prototype={
$0(){return this.a.bv5(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dIt","doq",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.EE,A.K)
x(B.aRn,A.P)
w(A.cY,[B.clh,B.cli,B.clj,B.clg])
w(A.ce,[B.cla,B.cle,B.cld,B.clb,B.clc])
x(B.clf,A.ex)
x(B.x1,A.fm)})()
A.ca(b.typeUniverse,JSON.parse('{"EE":{"K":[],"e":[]},"aRn":{"P":["EE"]}}'))
var y=(function rtii(){var x=A.E
return{B:x("x1"),_:x("X<@>"),t:x("u<A<h,@>>"),o:x("u<vB>"),h:x("u<n_<x1>>"),p:x("u<e>"),a:x("A<h,@>"),x:x("vB"),P:x("aD"),K:x("I"),N:x("h"),g:x("kt"),z:x("@"),X:x("I?"),H:x("~")}})();(function constants(){D.M9=new B.x1(0,"delete")
D.asU=new B.x1(1,"edit")
D.avH=new A.ak(16,8,16,0)
D.ayR=new A.az(58652,"MaterialIcons",null,!1)
D.azk=new A.az(61075,"MaterialIcons",null,!1)
D.azZ=new A.d1(Q.O7,null,null,null,null)
D.bJr=new A.cx("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_305",e:"endPart",h:b})})($__dart_deferred_initializers__,"4l9dSiFaCtfE+/ouevFKhl2SJYs=");