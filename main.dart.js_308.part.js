((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,M,F,N,O,E,P,Q,R,S,T,U,G,V,H,B={
dHB(d,e){return new B.Gp(e,d)},
Gp:function Gp(d,e){this.c=d
this.a=e},
aX5:function aX5(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
cBf:function cBf(d){this.a=d},
cB8:function cB8(d,e){this.a=d
this.b=e},
cBg:function cBg(d,e){this.a=d
this.b=e},
cBh:function cBh(d,e){this.a=d
this.b=e},
cBd:function cBd(d){this.a=d},
cBc:function cBc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cBb:function cBb(d,e,f){this.a=d
this.b=e
this.c=f},
cB9:function cB9(d,e){this.a=d
this.b=e},
cBa:function cBa(){},
cBe:function cBe(d,e){this.a=d
this.b=e},
yh:function yh(d,e){this.a=d
this.b=e},
dHA(d){return A.dhP(d)},
Kl(d){var x=0,w=A.n(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$Kl=A.i(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.DY()
m=n.cp("news").kQ(0,"id")
l=d.d
m=A.ng(m.q9(m.r4("created_at","lt."+d.a.j(0))),m.$ti.c).aP2("id",l)
v=A.dc()
v.toString
x=2
return A.d(m.dT("occasion",v).c1b(0,"created_at").aOi(1).a3V(),$async$Kl)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.cp("user_news").kQ(0,"user").dT("news_id",l),$async$Kl)
case 6:t=f
s=A.b([],y.t)
for(n=J.aF(t),m=y.N,v=y.z,r=J.a2(u);n.t();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.dZ().a
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.w(["user",q,"news_id",p,"occasion",o],m,v))}n=$.DY()
x=7
return A.d(n.cp("user_news").amA(s),$async$Kl)
case 7:x=4
break
case 5:x=8
return A.d(n.cp("user_news").jp(0).dT("news_id",l),$async$Kl)
case 8:case 4:x=9
return A.d(n.cp("news").jp(0).dT("id",l),$async$Kl)
case 9:return A.l(null,w)}})
return A.m($async$Kl,w)},
bkz(d){var x=0,w=A.n(y.H),v
var $async$bkz=A.i(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:v=y.z
x=2
return A.d($.DY().cp("news").f_(0,A.w(["message",d.b],v,v)).dT("id",d.d),$async$bkz)
case 2:return A.l(null,w)}})
return A.m($async$bkz,w)},
awd(d,e,f,g,h,i,j){var x=0,w=A.n(y.z),v,u,t,s,r,q,p,o
var $async$awd=A.i(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.DY().cp("news")
s=A.dc()
s.toString
r=$.e8().ge4().c
x=5
return A.d(t.ij(0,A.w(["occasion",s,"message",u,"created_by",(r==null?null:r.r).a],y.N,y.K)).j_(0),$async$awd)
case 5:case 4:x=i?6:7
break
case 6:for(t=I.R5(A1.R2(g),"p"),s=t.length,q="",p=0;p<t.length;t.length===s||(0,A.K)(t),++p){r=new A.dv("")
new I.aRO(r).bt(t[p])
r=r.a
o=(r.charCodeAt(0)==0?r:r)+"\n"
if(C.d.be(o).length===0)continue
q+=o}q=C.d.be(q)
t=$.DY().cp("log_notifications")
s=A.dc()
s.toString
x=8
return A.d(t.ij(0,A.w(["occasion",s,"to",j,"content",q,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$awd)
case 8:A.b5(d,A.f("Message has been sent.",null,null),C.Z)
x=1
break
case 7:if(h)A.b5(d,A.f("Message has been created.",null,null),C.Z)
case 1:return A.l(v,w)}})
return A.m($async$awd,w)},
awe(d){var x=0,w=A.n(y.H),v,u,t,s
var $async$awe=A.i(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=$.e8()
if(s.ge4().c==null)A.aa(A.cP("User must be logged in."))
v=$.DY()
u=v.cp("user_news").jp(0)
t=s.ge4().c
u=u.dT("user",(t==null?null:t.r).a)
t=A.dc()
t.toString
x=2
return A.d(u.dT("occasion",t),$async$awe)
case 2:v=v.cp("user_news")
s=s.ge4().c
x=3
return A.d(v.ij(0,A.w(["user",(s==null?null:s.r).a,"news_id",d,"occasion",A.dc()],y.N,y.X)).j_(0),$async$awe)
case 3:return A.l(null,w)}})
return A.m($async$awe,w)}},D,W,X,Y,Z,I,A_,A0,A1,A2,A3
J=c[1]
A=c[0]
C=c[2]
K=c[175]
L=c[165]
M=c[168]
F=c[118]
N=c[135]
O=c[178]
E=c[167]
P=c[233]
Q=c[237]
R=c[83]
S=c[235]
T=c[128]
U=c[210]
G=c[234]
V=c[95]
H=c[111]
B=a.updateHolder(c[18],B)
D=c[236]
W=c[203]
X=c[169]
Y=c[154]
Z=c[164]
I=c[158]
A_=c[232]
A0=c[150]
A1=c[126]
A2=c[143]
A3=c[171]
B.Gp.prototype={
K(){return new B.aX5(A.b([],y.o))}}
B.aX5.prototype={
T(){var x,w=this
w.a7()
x=w.c
x.toString
H.xe(x,!1).f.Y(0,new B.cBf(w))
w.aX()},
l(){this.ab()},
NN(){var x=0,w=A.n(y.H),v=this,u
var $async$NN=A.i(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
u=A.Gi(u,null,y.X)
x=(u==null?null:u.gpN())===!0&&!v.e?2:3
break
case 2:x=$.e8().ge4().c!=null&&J.fx(v.d)&&!J.h5(v.d).f?4:5
break
case 4:x=6
return A.d(B.awe(J.h5(v.d).d),$async$NN)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.l(null,w)}})
return A.m($async$NN,w)},
bE1(d){L.hP(d,"newsForm",y.X).aN(new B.cB8(this,d),y.P)},
a3K(){var x=0,w=A.n(y.H),v=this,u
var $async$a3K=A.i(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=B
x=2
return A.d(A.a3G(),$async$a3K)
case 2:v.q(new u.cBg(v,e))
return A.l(null,w)}})
return A.m($async$a3K,w)},
a3L(){var x=0,w=A.n(y.H),v=this,u
var $async$a3L=A.i(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=B
x=2
return A.d(A0.m_("newsOffline",B.e1m(),y.x),$async$a3L)
case 2:v.q(new u.cBh(v,e))
return A.l(null,w)}})
return A.m($async$a3L,w)},
aX(){var x=0,w=A.n(y.H),v=this
var $async$aX=A.i(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=2
return A.d(v.a3L(),$async$aX)
case 2:x=3
return A.d(v.a3K(),$async$aX)
case 3:x=4
return A.d(A.oR("newsOffline",v.d,y.x),$async$aX)
case 4:v.NN()
return A.l(null,w)}})
return A.m($async$aX,w)},
A(d){var x,w,v=null,u=A.y(d).ax.a===C.r?$.hy():$.mX(),t=A.bQ(C.aq)
t=Z.ix(v,v,v,!0,!0,v,v,1,v,v,v,!1,v,!1,v,v,new V.Ng(v,v),v,!0,v,v,v,v,v,E.ca(A.C("News",v,v,v,v,v,v,v,A.ad(v,v,new A.bJ(t.a,t.b,t.c,0.8).bu(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eZ(this.d)?new A.T(P.P9,A.a9(A.b([A.aB(G.FR,A.y(d).ay,v,v,64),C.X,A.C(A.b6S("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.aK,v,v,v,v)],y.p),C.i,C.bi,C.h,0,v,C.l),v):new A2.GL(new B.cBd(this),v)
w=A.ib()
return X.eR(t,u,new A.cy(C.aU,v,v,new A.ct(new A.ac(0,720,0,1/0),x,v),v),v,A.jC(N.TD(v,S.h2,v,v,O.t5,new B.cBe(this,d),v,v),!1,!1,!1,!1,w),v,v)}}
B.yh.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["W<~>(yh)","E<nY<yh>>(F)","wH(z<h,@>)"])
B.cBf.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.i(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.a
t=u.c
t.toString
if(H.xe(t,!1).f.ga0s()===C.b.du($.Rg(),"news")){u.NN()
u.aX()}return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
B.cB8.prototype={
$1(d){var x=0,w=A.n(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.i(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=d!=null?2:3
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
s=B.awd(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.bY(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aX(),$async$$1)
case 7:case 6:case 3:return A.l(null,w)}})
return A.m($async$$1,w)},
$S:126}
B.cBg.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cBh.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cBd.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.b([],u)
for(x=this.a,w=0;w<J.bo(x.d);++w){v=A.b([],u)
if(w!==0)v.push(C.dt)
v.push(new A.dS(new B.cBc(x,w,d,e),null))
C.b.F(t,v)}return A.a9(t,C.bm,C.f,C.h,0,null,C.l)},
$S:305}
B.cBc.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.ed(x)===A.ed(w)&&A.fe(x)===A.fe(w)&&A.je(x)===A.je(w)}else v=!1
x=y.p
w=A.b([],x)
if(o===0||!v){o=d.af(y.g).r.a
o===$&&A.a()
o=A.h1("EEEE d.M.y",o.gf7(0))
u=n.a
u.toString
u=o.cj(u)
if(n.f){o=p.c
o.toString
o=A.ad(q,q,A.y(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.P,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.ad(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.P,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.al(W.jv,A.C(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,G.OZ,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.ad(q,q,A.y(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.P,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.ad(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.P,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.T(A_.et,A.C(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.b0(10)
o=A.y(d)
t=n.b
t.toString
t=Y.hB(q,18,t,!0,r.d,r.c)
s=$.e8().ge4().c
w.push(new A.T(C.pK,A.al(q,A.a9(A.b([new A.T(A3.aV,t,q),A.jC(new A.T(C.ah,A.ae(A.b([A.aB(D.aAx,A.y(d).ay,q,q,16),K.jj,A.C(C.c.j(n.e),q,q,q,q,q,q,q,A.ad(q,q,A.y(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.P,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.hO],x),C.i,q,C.cj,C.h,0,q),q),!1,!1,!1,!1,s!=null)],x),C.i,C.f,C.h,0,q,C.l),C.k,q,q,new A.b7(o.ax.k2,q,q,u,q,q,q,C.N),q,q,q,q,q,q,q,q),q))
if(A.ib())w.push(R.pU(q,q,q,!0,D.aC0,new B.cBa(),C.t,new B.cBb(p,n,d),C.ah,q,q,q,y.B))
return A.a9(w,C.bm,C.f,C.h,0,q,C.l)},
$S:1423}
B.cBb.prototype={
$1(d){return this.aU3(d)},
aU3(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$$1=A.i(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=v.b
s=v.c
x=d===D.Oc?2:4
break
case 2:x=5
return A.d(B.Kl(t),$async$$1)
case 5:A.b5(s,A.f("Message has been removed.",null,null),C.Z)
x=3
break
case 4:u=T.pB(A.w(["content",t.b],y.N,y.z),A.dc())
x=6
return A.d(M.ft(s,!1).f.i9(u,y.X).aN(new B.cB9(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aX(),$async$$1)
case 7:return A.l(null,w)}})
return A.m($async$$1,w)},
$S:z+0}
B.cB9.prototype={
$1(d){var x=0,w=A.n(y.P),v=this,u
var $async$$1=A.i(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bf(d)
x=4
return A.d(B.bkz(u),$async$$1)
case 4:A.b5(v.b,A.f("Message has been changed.",null,null),C.Z)
case 3:return A.l(null,w)}})
return A.m($async$$1,w)},
$S:126}
B.cBa.prototype={
$1(d){var x=y.B
return A.b([F.l2(E.ca(U.Ku,null),!0,48,D.auv,x),F.l2(E.ca(D.bJu,null),!0,48,D.Oc,x)],y.h)},
$S:z+1}
B.cBe.prototype={
$0(){return this.a.bE1(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"e1m","dHA",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Gp,A.L)
x(B.aX5,A.N)
w(A.d3,[B.cBf,B.cBg,B.cBh,B.cBe])
w(A.cp,[B.cB8,B.cBc,B.cBb,B.cB9,B.cBa])
x(B.cBd,A.ef)
x(B.yh,A.fP)})()
A.cg(b.typeUniverse,JSON.parse('{"Gp":{"L":[],"e":[]},"aX5":{"N":["Gp"]}}'))
var y=(function rtii(){var x=A.J
return{B:x("yh"),_:x("W<@>"),t:x("u<z<h,@>>"),o:x("u<wH>"),h:x("u<nY<yh>>"),p:x("u<e>"),a:x("z<h,@>"),x:x("wH"),P:x("aI"),K:x("H"),N:x("h"),g:x("lE"),z:x("@"),X:x("H?"),H:x("~")}})();(function constants(){D.Oc=new B.yh(0,"delete")
D.auv=new B.yh(1,"edit")
D.aAx=new A.as(58652,"MaterialIcons",null,!1)
D.aC0=new A.cu(Q.Qn,null,null,null,null)
D.bJu=new A.ch("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["Fzih+9XYcBz6hkGTl2f3kFc/SW8="]=a.current})($__dart_deferred_initializers__);