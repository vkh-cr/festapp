((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_304",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,M,E,N,F,O,P,Q,R,S,T,U,G,V,H,B={
dA2(d,e){return new B.Fi(e,d)},
Fi:function Fi(d,e){this.c=d
this.a=e},
aTq:function aTq(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
cuo:function cuo(d){this.a=d},
cuh:function cuh(d,e){this.a=d
this.b=e},
cup:function cup(d,e){this.a=d
this.b=e},
cuq:function cuq(d,e){this.a=d
this.b=e},
cum:function cum(d){this.a=d},
cul:function cul(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cuk:function cuk(d,e,f){this.a=d
this.b=e
this.c=f},
cui:function cui(d,e){this.a=d
this.b=e},
cuj:function cuj(){},
cun:function cun(d,e){this.a=d
this.b=e},
xI:function xI(d,e){this.a=d
this.b=e},
dA1(d){return A.d8u(d)},
J2(d){return B.dsE(d)},
dsE(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$J2=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:n=$.D1()
m=n.cg("news").kk(0,"id")
l=d.a
l.toString
v=d.d
m=A.mR(m.pD(m.qw("created_at","lt."+l.j(0))),m.$ti.c).aKU("id",v)
l=A.de()
l.toString
x=2
return A.d(m.dE("occasion",l).bVf(0,"created_at").aKa(1).a2_(),$async$J2)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.cg("user_news").kk(0,"user").dE("news_id",v),$async$J2)
case 6:t=f
s=A.a([],y.t)
for(n=J.aK(t),m=y.N,l=y.z,r=J.a0(u);n.t();){q=J.v(n.gM(n),"user")
p=r.h(u,"id")
o=$.er().a
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.w(["user",q,"news_id",p,"occasion",o],m,l))}n=$.D1()
x=7
return A.d(n.cg("user_news").ajE(s),$async$J2)
case 7:x=4
break
case 5:x=8
return A.d(n.cg("user_news").j4(0).dE("news_id",v),$async$J2)
case 8:case 4:x=9
return A.d(n.cg("news").j4(0).dE("id",v),$async$J2)
case 9:return A.j(null,w)}})
return A.k($async$J2,w)},
bg8(d){return B.dsH(d)},
dsH(d){var x=0,w=A.l(y.H),v
var $async$bg8=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.D1().cg("news").eX(0,A.w(["message",d.b],v,v)).dE("id",d.d),$async$bg8)
case 2:return A.j(null,w)}})
return A.k($async$bg8,w)},
atq(d,e,f,g,h,i,j){return B.dsF(d,e,f,g,h,i,j)},
dsF(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$atq=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.D1().cg("news")
s=A.de()
s.toString
r=$.e1().gdO().c
x=5
return A.d(t.iN(0,A.w(["occasion",s,"message",u,"created_by",(r==null?null:r.r).a],y.N,y.K)).iG(0),$async$atq)
case 5:case 4:x=i?6:7
break
case 6:for(t=I.ZN(A1.ZK(g),"p"),s=t.length,q="",p=0;p<t.length;t.length===s||(0,A.K)(t),++p){r=new A.dp("")
new I.aOy(r).bq(t[p])
r=r.a
o=(r.charCodeAt(0)==0?r:r)+"\n"
if(C.d.bi(o).length===0)continue
q+=o}q=C.d.bi(q)
t=$.D1().cg("log_notifications")
s=A.de()
s.toString
x=8
return A.d(t.iN(0,A.w(["occasion",s,"to",j,"content",q,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$atq)
case 8:A.bi(d,A.n("Message has been sent.",null,null),C.a4)
x=1
break
case 7:if(h)A.bi(d,A.n("Message has been created.",null,null),C.a4)
case 1:return A.j(v,w)}})
return A.k($async$atq,w)},
atr(d){return B.dsG(d)},
dsG(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$atr=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.e1()
if(s.gdO().c==null)A.aa(A.cJ("User must be logged in."))
v=$.D1()
u=v.cg("user_news").j4(0)
t=s.gdO().c
u=u.dE("user",(t==null?null:t.r).a)
t=A.de()
t.toString
x=2
return A.d(u.dE("occasion",t),$async$atr)
case 2:v=v.cg("user_news")
s=s.gdO().c
x=3
return A.d(v.iN(0,A.w(["user",(s==null?null:s.r).a,"news_id",d,"occasion",A.de()],y.N,y.X)).iG(0),$async$atr)
case 3:return A.j(null,w)}})
return A.k($async$atr,w)}},D,W,X,Y,Z,A_,I,A0,A1,A2,A3
J=c[1]
A=c[0]
C=c[2]
K=c[167]
L=c[160]
M=c[163]
E=c[162]
N=c[224]
F=c[106]
O=c[228]
P=c[82]
Q=c[226]
R=c[125]
S=c[116]
T=c[170]
U=c[202]
G=c[225]
V=c[95]
H=c[113]
B=a.updateHolder(c[18],B)
D=c[227]
W=c[195]
X=c[164]
Y=c[148]
Z=c[159]
A_=c[143]
I=c[153]
A0=c[223]
A1=c[123]
A2=c[140]
A3=c[174]
B.Fi.prototype={
K(){return new B.aTq(A.a([],y.o))}}
B.aTq.prototype={
T(){var x,w=this
w.a9()
x=w.c
x.toString
H.wG(x,!1).f.a_(0,new B.cuo(w))
w.aV()},
l(){this.af()},
ME(){var x=0,w=A.l(y.H),v=this,u
var $async$ME=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.L9(u,null,y.X)
x=(u==null?null:u.gtd())===!0&&!v.e?2:3
break
case 2:x=$.e1().gdO().c!=null&&J.fx(v.d)&&!J.fU(v.d).f?4:5
break
case 4:x=6
return A.d(B.atr(J.fU(v.d).d),$async$ME)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$ME,w)},
byc(d){L.ht(d,"newsForm",y.X).aK(new B.cuh(this,d),y.P)},
a1P(){var x=0,w=A.l(y.H),v=this,u
var $async$a1P=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a1L(),$async$a1P)
case 2:v.q(new u.cup(v,e))
return A.j(null,w)}})
return A.k($async$a1P,w)},
a1Q(){var x=0,w=A.l(y.H),v=this,u
var $async$a1Q=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A_.lE("newsOffline",B.dUM(),y.x),$async$a1Q)
case 2:v.q(new u.cuq(v,e))
return A.j(null,w)}})
return A.k($async$a1Q,w)},
aV(){var x=0,w=A.l(y.H),v=this
var $async$aV=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a1Q(),$async$aV)
case 2:x=3
return A.d(v.a1P(),$async$aV)
case 3:x=4
return A.d(A.ok("newsOffline",v.d,y.x),$async$aV)
case 4:v.ME()
return A.j(null,w)}})
return A.k($async$aV,w)},
B(d){var x,w,v=null,u=A.B(d).ax.a===C.q?$.i2():$.nW(),t=A.bN(C.as)
t=Z.iA(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new V.M_(v,v),v,!0,v,v,v,v,v,E.bR(A.E("News",v,v,v,v,v,v,v,A.ab(v,v,new A.bz(t.a,t.b,t.c,0.8).bu(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eH(this.d)?new A.W(N.O5,A.a9(A.a([A.aB(G.EF,A.B(d).ay,v,64),C.X,A.E(A.ZT("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.aY,v,v,v,v)],y.p),C.i,C.bg,C.h,0,v,C.l),v):new A2.FD(new B.cum(this),v)
w=A.hX()
return X.eO(t,u,new A.cs(C.aV,v,v,new A.cD(new A.ac(0,720,0,1/0),x,v),v),v,A.jS(S.a3f(Q.hh,T.rq,new B.cun(this,d),v),w),v,v)}}
B.xI.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["V<~>(xI)","D<nv<xI>>(J)","wc(z<f,@>)"])
B.cuo.prototype={
$0(){var x=0,w=A.l(y.H),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(H.wG(t,!1).f.gZK()===C.b.de($.PE(),"news")){u.ME()
u.aV()}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:1}
B.cuh.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
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
s=B.atq(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.c4(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aV(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:116}
B.cup.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cuq.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cum.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bl(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.fF)
v.push(new A.et(new B.cul(x,w,d,e),null))
C.b.E(t,v)}return A.a9(t,C.bp,C.f,C.h,0,null,C.l)},
$S:236}
B.cul.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.dK(x)===A.dK(w)&&A.eM(x)===A.eM(w)&&A.jc(x)===A.jc(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.a8(y.g).r.a
o===$&&A.b()
o=A.fW("EEEE d.M.y",o.geV(0))
u=n.a
u.toString
u=o.ck(u)
if(n.f){o=p.c
o.toString
o=A.ab(q,q,A.B(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.ab(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ap(W.j8,A.E(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,G.NY,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.ab(q,q,A.B(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.ab(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.W(A0.eA,A.E(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.b4(10)
o=A.B(d)
t=n.b
t.toString
t=Y.hG(q,18,t,!0,r.d,r.c)
s=$.e1().gdO().c
w.push(new A.W(C.pd,A.ap(q,A.a9(A.a([new A.W(A3.aW,t,q),A.jS(new A.W(C.aq,A.ad(A.a([A.aB(D.azW,A.B(d).ay,q,16),K.iU,A.E(C.c.j(n.e),q,q,q,q,q,q,q,A.ab(q,q,A.B(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.h0],x),C.i,q,C.cz,C.h,0,q),q),s!=null)],x),C.i,C.f,C.h,0,q,C.l),C.k,q,q,new A.b2(o.ax.k2,q,q,u,q,q,q,C.M),q,q,q,q,q,q,q,q),q))
if(A.hX())w.push(P.qs(q,q,q,D.aBk,new B.cuj(),C.r,new B.cuk(p,n,d),C.aq,q,q,q,y.B))
return A.a9(w,C.bp,C.f,C.h,0,q,C.l)},
$S:1383}
B.cuk.prototype={
$1(d){return this.aPz(d)},
aPz(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.N7?2:4
break
case 2:x=5
return A.d(B.J2(t),$async$$1)
case 5:A.bi(s,A.n("Message has been removed.",null,null),C.a4)
x=3
break
case 4:u=R.pa(A.w(["content",t.b],y.N,y.z),A.de())
x=6
return A.d(M.fs(s,!1).f.i1(u,y.X).aK(new B.cui(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aV(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+0}
B.cui.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bf(d)
x=4
return A.d(B.bg8(u),$async$$1)
case 4:A.bi(v.b,A.n("Message has been changed.",null,null),C.a4)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:116}
B.cuj.prototype={
$1(d){var x=y.B
return A.a([F.lG(E.bR(U.Jl,null),!0,48,D.atT,x),F.lG(E.bR(D.bKN,null),!0,48,D.N7,x)],y.h)},
$S:z+1}
B.cun.prototype={
$0(){return this.a.byc(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dUM","dA1",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Fi,A.M)
x(B.aTq,A.N)
w(A.cV,[B.cuo,B.cup,B.cuq,B.cun])
w(A.cl,[B.cuh,B.cul,B.cuk,B.cui,B.cuj])
x(B.cum,A.ev)
x(B.xI,A.fw)})()
A.ch(b.typeUniverse,JSON.parse('{"Fi":{"M":[],"e":[]},"aTq":{"N":["Fi"]}}'))
var y=(function rtii(){var x=A.G
return{B:x("xI"),_:x("V<@>"),t:x("u<z<f,@>>"),o:x("u<wc>"),h:x("u<nv<xI>>"),p:x("u<e>"),a:x("z<f,@>"),x:x("wc"),P:x("aF"),K:x("H"),N:x("f"),g:x("kQ"),z:x("@"),X:x("H?"),H:x("~")}})();(function constants(){D.N7=new B.xI(0,"delete")
D.atT=new B.xI(1,"edit")
D.azW=new A.at(58652,"MaterialIcons",null,!1)
D.aBk=new A.cz(O.Pe,null,null,null,null)
D.bKN=new A.cy("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_304",e:"endPart",h:b})})($__dart_deferred_initializers__,"VBS6qRdU5UNmXiEd2rB+th2VHpE=");