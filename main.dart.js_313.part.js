((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_313",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,E,M,N,O,P,Q,F,R,S,T,U,V,W,G,B={
dk9(d,e){return new B.Eq(e,d)},
Eq:function Eq(d,e){this.c=d
this.a=e},
aQG:function aQG(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
cit:function cit(d){this.a=d},
cim:function cim(d,e){this.a=d
this.b=e},
ciu:function ciu(d,e){this.a=d
this.b=e},
civ:function civ(d,e){this.a=d
this.b=e},
cir:function cir(d){this.a=d},
ciq:function ciq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cip:function cip(d,e,f){this.a=d
this.b=e
this.c=f},
cin:function cin(d,e){this.a=d
this.b=e},
cio:function cio(){},
cis:function cis(d,e){this.a=d
this.b=e},
wT:function wT(d,e){this.a=d
this.b=e},
dk8(d){return A.cUu(d)},
I6(d){return B.dd9(d)},
dd9(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$I6=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:n=$.C4()
m=n.c7("news").j6(0,"id")
l=d.a
l.toString
v=d.d
m=A.mh(m.pq(m.ql("created_at","lt."+l.j(0))),m.$ti.c).aI7("id",v)
l=A.dd()
l.toString
x=2
return A.d(m.dj("occasion",l).bQs(0,"created_at").aHo(1).R4(),$async$I6)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.c7("user_news").j6(0,"user").dj("news_id",v),$async$I6)
case 6:t=f
s=A.a([],y.t)
for(n=J.aG(t),m=y.N,l=y.z,r=J.a0(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.fM
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],m,l))}n=$.C4()
x=7
return A.d(n.c7("user_news").aLf(s),$async$I6)
case 7:x=4
break
case 5:x=8
return A.d(n.c7("user_news").iZ(0).dj("news_id",v),$async$I6)
case 8:case 4:x=9
return A.d(n.c7("news").iZ(0).dj("id",v),$async$I6)
case 9:return A.j(null,w)}})
return A.k($async$I6,w)},
bbc(d){return B.ddc(d)},
ddc(d){var x=0,w=A.l(y.H),v
var $async$bbc=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.C4().c7("news").eU(0,A.z(["message",d.b],v,v)).dj("id",d.d),$async$bbc)
case 2:return A.j(null,w)}})
return A.k($async$bbc,w)},
aqQ(d,e,f,g,h,i,j){return B.dda(d,e,f,g,h,i,j)},
dda(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$aqQ=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.C4().c7("news")
s=A.dd()
s.toString
x=5
return A.d(t.jh(0,A.z(["occasion",s,"message",u,"created_by",$.dL().gdv().c.a],y.N,y.K)).iB(0),$async$aqQ)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.Yf(A1.Yd(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.M)(t),++q){p=new A.dj("")
new H.aLQ(p).bm(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.d.bu(o).length===0)continue
r+=o}r=C.d.bu(r)
t=$.C4().c7("log_notifications")
s=A.dd()
s.toString
x=8
return A.d(t.jh(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$aqQ)
case 8:A.bJ(d,A.r("Message has been sent.",null),C.ad)
x=1
break
case 7:if(h)A.bJ(d,A.r("Message has been created.",null),C.ad)
case 1:return A.j(v,w)}})
return A.k($async$aqQ,w)},
aqR(d){return B.ddb(d)},
ddb(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$aqR=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dL()
if(s.gdv().d==null)A.a7(A.cP("User must be logged in."))
v=$.C4()
u=v.c7("user_news").iZ(0).dj("user",s.gdv().c.a)
t=A.dd()
t.toString
x=2
return A.d(u.dj("occasion",t),$async$aqR)
case 2:x=3
return A.d(v.c7("user_news").jh(0,A.z(["user",s.gdv().c.a,"news_id",d,"occasion",A.dd()],y.N,y.X)).iB(0),$async$aqR)
case 3:return A.j(null,w)}})
return A.k($async$aqR,w)}},D,X,Y,Z,A_,H,A0,A1,A2,A3
J=c[1]
A=c[0]
C=c[2]
I=c[167]
K=c[171]
L=c[180]
E=c[170]
M=c[238]
N=c[181]
O=c[127]
P=c[84]
Q=c[240]
F=c[107]
R=c[241]
S=c[120]
T=c[184]
U=c[215]
V=c[98]
W=c[147]
G=c[71]
B=a.updateHolder(c[19],B)
D=c[239]
X=c[206]
Y=c[172]
Z=c[153]
A_=c[168]
H=c[159]
A0=c[237]
A1=c[124]
A2=c[141]
A3=c[175]
B.Eq.prototype={
M(){return new B.aQG(A.a([],y.o))}}
B.aQG.prototype={
S(){var x,w=this
w.ah()
x=w.c
x.toString
G.aFe(x,!1).f.a1(0,new B.cit(w))
w.b0()},
l(){this.ai()},
M8(){var x=0,w=A.l(y.H),v=this,u
var $async$M8=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Ej(u,null,y.X)
x=(u==null?null:u.gt0())===!0&&!v.e?2:3
break
case 2:x=$.dL().gdv().d!=null&&J.fV(v.d)&&!J.hz(v.d).f?4:5
break
case 4:x=6
return A.d(B.aqR(J.hz(v.d).d),$async$M8)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$M8,w)},
bu4(d){I.iw(d,"newsForm",y.X).aI(new B.cim(this,d),y.P)},
a0C(){var x=0,w=A.l(y.H),v=this,u
var $async$a0C=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a06(),$async$a0C)
case 2:v.A(new u.ciu(v,e))
return A.j(null,w)}})
return A.k($async$a0C,w)},
xS(){var x=0,w=A.l(y.H),v=this,u
var $async$xS=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(W.l4("newsOffline",B.dE3(),y.x),$async$xS)
case 2:v.A(new u.civ(v,e))
return A.j(null,w)}})
return A.k($async$xS,w)},
b0(){var x=0,w=A.l(y.H),v=this
var $async$b0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.xS(),$async$b0)
case 2:x=3
return A.d(v.a0C(),$async$b0)
case 3:x=4
return A.d(A.ov("newsOffline",v.d,y.x),$async$b0)
case 4:v.M8()
return A.j(null,w)}})
return A.k($async$b0,w)},
B(d){var x,w,v=null,u=A.C(d).ax.a===C.r?$.hQ():$.p1(),t=A.bB(C.as)
t=A_.iD(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new V.KM(v,v),v,!0,v,v,v,v,v,E.bv(A.O("News",v,v,v,v,v,v,v,A.al(v,v,new A.bp(t.a,t.b,t.c,0.8).bo(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eI(this.d)?new A.a2(M.MQ,A.af(A.a([A.aW(D.ayZ,A.C(d).ay,v,64),C.a1,A.O(A.Yl("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.b0,v,v,v,v)],y.p),C.j,C.bl,C.i,0,v,C.m),v):new A2.EK(new B.cir(this),v)
w=A.j0()
return Y.fa(t,u,new A.cq(C.aX,v,v,new A.cF(new A.ab(0,720,0,1/0),x,v),v),v,v,A.jn(S.a1C(Q.hn,T.qT,new B.cis(this,d),v),w),v,v)}}
B.wT.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["X<~>(wT)","B<mQ<wT>>(G)","vq(A<m,@>)"])
B.cit.prototype={
$0(){var x=0,w=A.l(y.H),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.aFe(t,!1).f.gaAo()===C.b.dt($.alh(),"news")){u.M8()
u.b0()}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2}
B.cim.prototype={
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
s=B.aqQ(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.c9(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.b0(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:119}
B.ciu.prototype={
$0(){this.a.d=this.b},
$S:0}
B.civ.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cir.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bz(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.hh)
v.push(new A.eO(new B.ciq(x,w,d,e),null))
C.b.H(t,v)}return A.af(t,C.bh,C.f,C.i,0,null,C.m)},
$S:253}
B.ciq.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.dQ(x)===A.dQ(w)&&A.ew(x)===A.ew(w)&&A.iL(x)===A.iL(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.af(y.g).r.a
o===$&&A.b()
o=A.hB("EEEE d.M.y",o.gf2(0))
u=n.a
u.toString
u=o.da(u)
if(n.f){o=p.c
o.toString
o=A.al(q,q,A.C(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.al(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aq(X.i6,A.O(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.avu,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.al(q,q,A.C(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.al(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a2(A0.fN,A.O(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bF(10)
o=A.C(d)
t=n.b
t.toString
t=Z.i6(q,18,t,!0,r.d,r.c)
s=$.dL().gdv().d
w.push(new A.a2(C.CH,A.aq(q,A.af(A.a([new A.a2(A3.aT,t,q),A.jn(new A.a2(C.au,A.at(A.a([A.aW(D.ayw,A.C(d).ay,q,16),L.HB,A.O(C.c.j(n.e),q,q,q,q,q,q,q,A.al(q,q,A.C(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),N.hT],x),C.j,C.dr,C.i,0,q),q),s!=null)],x),C.j,C.f,C.i,0,q,C.m),C.k,q,q,new A.b3(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.j0())w.push(P.xI(q,q,D.azB,new B.cio(),C.n,new B.cip(p,n,d),C.au,q,q,q,y.B))
return A.af(w,C.bh,C.f,C.i,0,q,C.m)},
$S:1225}
B.cip.prototype={
$1(d){return this.aMJ(d)},
aMJ(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.M1?2:4
break
case 2:x=5
return A.d(B.I6(t),$async$$1)
case 5:A.bJ(s,A.r("Message has been removed.",null),C.ad)
x=3
break
case 4:u=O.ps(A.z(["content",t.b],y.N,y.z),A.dd())
x=6
return A.d(K.fd(s,!1).f.i2(u,y.X).aI(new B.cin(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.b0(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+0}
B.cin.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.ba(d)
x=4
return A.d(B.bbc(u),$async$$1)
case 4:A.bJ(v.b,A.r("Message has been changed.",null),C.ad)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:119}
B.cio.prototype={
$1(d){var x=y.B
return A.a([F.nH(E.bv(U.Il,null),!0,48,D.asK,x),F.nH(E.bv(D.bJ0,null),!0,48,D.M1,x)],y.h)},
$S:z+1}
B.cis.prototype={
$0(){return this.a.bu4(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dE3","dk8",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Eq,A.J)
x(B.aQG,A.N)
w(A.cU,[B.cit,B.ciu,B.civ,B.cis])
w(A.ce,[B.cim,B.ciq,B.cip,B.cin,B.cio])
x(B.cir,A.er)
x(B.wT,A.f1)})()
A.c7(b.typeUniverse,JSON.parse('{"Eq":{"J":[],"e":[]},"aQG":{"N":["Eq"]}}'))
var y=(function rtii(){var x=A.E
return{B:x("wT"),_:x("X<@>"),t:x("u<A<m,@>>"),o:x("u<vq>"),h:x("u<mQ<wT>>"),p:x("u<e>"),a:x("A<m,@>"),x:x("vq"),P:x("aF"),K:x("I"),N:x("m"),g:x("kl"),z:x("@"),X:x("I?"),H:x("~")}})();(function constants(){D.M1=new B.wT(0,"delete")
D.asK=new B.wT(1,"edit")
D.avu=new A.ak(16,8,16,0)
D.ayw=new A.aB(58652,"MaterialIcons",null,!1)
D.ayZ=new A.aB(61075,"MaterialIcons",null,!1)
D.azB=new A.d3(R.NZ,null,null,null,null)
D.bJ0=new A.cw("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_313",e:"endPart",h:b})})($__dart_deferred_initializers__,"27bltkvb6DG7847O7wuSnpHS4f8=");