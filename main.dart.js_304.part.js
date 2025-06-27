((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_304",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,E,M,N,O,P,F,Q,R,S,T,U,G,B={
doy(d,e){return new B.ED(e,d)},
ED:function ED(d,e){this.c=d
this.a=e},
aRp:function aRp(d){var _=this
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
x0:function x0(d,e){this.a=d
this.b=e},
dox(d){return A.cYp(d)},
Ii(d){return B.dhm(d)},
dhm(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$Ii=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:n=$.Cm()
m=n.ca("news").jN(0,"id")
l=d.a
l.toString
v=d.d
m=A.mo(m.pr(m.qn("created_at","lt."+l.j(0))),m.$ti.c).aIJ("id",v)
l=A.d5()
l.toString
x=2
return A.d(m.dt("occasion",l).bRG(0,"created_at").aI_(1).a13(),$async$Ii)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.ca("user_news").jN(0,"user").dt("news_id",v),$async$Ii)
case 6:t=f
s=A.a([],y.t)
for(n=J.aG(t),m=y.N,l=y.z,r=J.a0(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.fR
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.x(["user",q,"news_id",p,"occasion",o],m,l))}n=$.Cm()
x=7
return A.d(n.ca("user_news").air(s),$async$Ii)
case 7:x=4
break
case 5:x=8
return A.d(n.ca("user_news").j_(0).dt("news_id",v),$async$Ii)
case 8:case 4:x=9
return A.d(n.ca("news").j_(0).dt("id",v),$async$Ii)
case 9:return A.j(null,w)}})
return A.k($async$Ii,w)},
bco(d){return B.dhp(d)},
dhp(d){var x=0,w=A.l(y.H),v
var $async$bco=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.Cm().ca("news").eW(0,A.x(["message",d.b],v,v)).dt("id",d.d),$async$bco)
case 2:return A.j(null,w)}})
return A.k($async$bco,w)},
ars(d,e,f,g,h,i,j){return B.dhn(d,e,f,g,h,i,j)},
dhn(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$ars=A.f(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Cm().ca("news")
s=A.d5()
s.toString
r=$.dz().gdl().c
x=5
return A.d(t.ji(0,A.x(["occasion",s,"message",u,"created_by",(r==null?null:r.r).a],y.N,y.K)).iC(0),$async$ars)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.Yv(A0.Yt(g),"p"),s=t.length,q="",p=0;p<t.length;t.length===s||(0,A.M)(t),++p){r=new A.dc("")
new H.aMy(r).bp(t[p])
r=r.a
o=(r.charCodeAt(0)==0?r:r)+"\n"
if(C.d.bm(o).length===0)continue
q+=o}q=C.d.bm(q)
t=$.Cm().ca("log_notifications")
s=A.d5()
s.toString
x=8
return A.d(t.ji(0,A.x(["occasion",s,"to",j,"content",q,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$ars)
case 8:A.bu(d,A.q("Message has been sent.",null),C.a4)
x=1
break
case 7:if(h)A.bu(d,A.q("Message has been created.",null),C.a4)
case 1:return A.j(v,w)}})
return A.k($async$ars,w)},
art(d){return B.dho(d)},
dho(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$art=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dz()
if(s.gdl().c==null)A.a7(A.cO("User must be logged in."))
v=$.Cm()
u=v.ca("user_news").j_(0)
t=s.gdl().c
u=u.dt("user",(t==null?null:t.r).a)
t=A.d5()
t.toString
x=2
return A.d(u.dt("occasion",t),$async$art)
case 2:v=v.ca("user_news")
s=s.gdl().c
x=3
return A.d(v.ji(0,A.x(["user",(s==null?null:s.r).a,"news_id",d,"occasion",A.d5()],y.N,y.X)).iC(0),$async$art)
case 3:return A.j(null,w)}})
return A.k($async$art,w)}},D,V,W,X,Y,Z,H,A_,A0,A1,A2
J=c[1]
A=c[0]
C=c[2]
I=c[174]
K=c[162]
L=c[166]
E=c[165]
M=c[227]
N=c[126]
O=c[82]
P=c[229]
F=c[104]
Q=c[230]
R=c[118]
S=c[177]
T=c[206]
U=c[95]
G=c[113]
B=a.updateHolder(c[19],B)
D=c[228]
V=c[198]
W=c[167]
X=c[149]
Y=c[163]
Z=c[145]
H=c[155]
A_=c[226]
A0=c[123]
A1=c[140]
A2=c[169]
B.ED.prototype={
N(){return new B.aRp(A.a([],y.o))}}
B.aRp.prototype={
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
u=A.Ew(u,null,y.X)
x=(u==null?null:u.gt5())===!0&&!v.e?2:3
break
case 2:x=$.dz().gdl().c!=null&&J.fK(v.d)&&!J.he(v.d).f?4:5
break
case 4:x=6
return A.d(B.art(J.he(v.d).d),$async$Mf)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$Mf,w)},
bv4(d){K.iE(d,"newsForm",y.X).aH(new B.cla(this,d),y.P)},
a0W(){var x=0,w=A.l(y.H),v=this,u
var $async$a0W=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a0r(),$async$a0W)
case 2:v.v(new u.cli(v,e))
return A.j(null,w)}})
return A.k($async$a0W,w)},
xZ(){var x=0,w=A.l(y.H),v=this,u
var $async$xZ=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(Z.la("newsOffline",B.dIs(),y.x),$async$xZ)
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
B(d){var x,w,v=null,u=A.D(d).ax.a===C.r?$.i4():$.pa(),t=A.bv(C.as)
t=Y.iJ(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new U.L5(v,v),v,!0,v,v,v,v,v,E.bA(A.L("News",v,v,v,v,v,v,v,A.ag(v,v,new A.bn(t.a,t.b,t.c,0.8).bl(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eD(this.d)?new A.a1(M.N_,A.ae(A.a([A.aS(D.azk,A.D(d).ay,v,64),C.a1,A.L(A.YA("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.aZ,v,v,v,v)],y.p),C.j,C.bm,C.i,0,v,C.m),v):new A1.EY(new B.clf(this),v)
w=A.ii()
return W.fc(t,u,new A.cr(C.aX,v,v,new A.cH(new A.aa(0,720,0,1/0),x,v),v),v,v,A.jw(R.a1W(P.hv,S.qV,new B.clg(this,d),v),w),v,v)}}
B.x0.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["X<~>(x0)","C<n_<x0>>(G)","vA(A<h,@>)"])
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
s=B.ars(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.c9(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aW(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:116}
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
v.push(new A.eS(new B.cle(x,w,d,e),null))
C.b.H(t,v)}return A.ae(t,C.bi,C.f,C.i,0,null,C.m)},
$S:252}
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
s=$.dz().gdl().c
w.push(new A.a1(C.rO,A.ap(q,A.ae(A.a([new A.a1(A2.aT,t,q),A.jw(new A.a1(C.au,A.as(A.a([A.aS(D.ayR,A.D(d).ay,q,16),I.HG,A.L(C.c.j(n.e),q,q,q,q,q,q,q,A.ag(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.hf],x),C.j,C.dt,C.i,0,q),q),s!=null)],x),C.j,C.f,C.i,0,q,C.m),C.k,q,q,new A.b2(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.ii())w.push(O.xQ(q,q,D.azZ,new B.clc(),C.o,new B.cld(p,n,d),C.au,q,q,q,y.B))
return A.ae(w,C.bi,C.f,C.i,0,q,C.m)},
$S:1260}
B.cld.prototype={
$1(d){return this.aNh(d)},
aNh(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.M9?2:4
break
case 2:x=5
return A.d(B.Ii(t),$async$$1)
case 5:A.bu(s,A.q("Message has been removed.",null),C.a4)
x=3
break
case 4:u=N.pA(A.x(["content",t.b],y.N,y.z),A.d5())
x=6
return A.d(L.fj(s,!1).f.i4(u,y.X).aH(new B.clb(t,s),y.P),$async$$1)
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
return A.d(B.bco(u),$async$$1)
case 4:A.bu(v.b,A.q("Message has been changed.",null),C.a4)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:116}
B.clc.prototype={
$1(d){var x=y.B
return A.a([F.nP(E.bA(T.Ir,null),!0,48,D.asU,x),F.nP(E.bA(D.bJt,null),!0,48,D.M9,x)],y.h)},
$S:z+1}
B.clg.prototype={
$0(){return this.a.bv4(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dIs","dox",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.ED,A.K)
x(B.aRp,A.P)
w(A.cY,[B.clh,B.cli,B.clj,B.clg])
w(A.ce,[B.cla,B.cle,B.cld,B.clb,B.clc])
x(B.clf,A.ex)
x(B.x0,A.fm)})()
A.cc(b.typeUniverse,JSON.parse('{"ED":{"K":[],"e":[]},"aRp":{"P":["ED"]}}'))
var y=(function rtii(){var x=A.E
return{B:x("x0"),_:x("X<@>"),t:x("u<A<h,@>>"),o:x("u<vA>"),h:x("u<n_<x0>>"),p:x("u<e>"),a:x("A<h,@>"),x:x("vA"),P:x("aD"),K:x("J"),N:x("h"),g:x("kt"),z:x("@"),X:x("J?"),H:x("~")}})();(function constants(){D.M9=new B.x0(0,"delete")
D.asU=new B.x0(1,"edit")
D.avH=new A.ak(16,8,16,0)
D.ayR=new A.az(58652,"MaterialIcons",null,!1)
D.azk=new A.az(61075,"MaterialIcons",null,!1)
D.azZ=new A.d1(Q.O7,null,null,null,null)
D.bJt=new A.cx("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_304",e:"endPart",h:b})})($__dart_deferred_initializers__,"zEH+5a32SLfFK142pZMER1cdXy0=");