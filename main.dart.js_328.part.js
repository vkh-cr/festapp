((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_328",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,M,N,E,O,P,Q,R,S,F,T,U,V,W,X,Y,G,B={
djC(d,e){return new B.Ep(e,d)},
Ep:function Ep(d,e){this.c=d
this.a=e},
aQF:function aQF(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
ci_:function ci_(d){this.a=d},
chT:function chT(d,e){this.a=d
this.b=e},
ci0:function ci0(d,e){this.a=d
this.b=e},
ci1:function ci1(d,e){this.a=d
this.b=e},
chY:function chY(d){this.a=d},
chX:function chX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
chW:function chW(d,e,f){this.a=d
this.b=e
this.c=f},
chU:function chU(d,e){this.a=d
this.b=e},
chV:function chV(){},
chZ:function chZ(d,e){this.a=d
this.b=e},
wS:function wS(d,e){this.a=d
this.b=e},
djB(d){return A.cTZ(d)},
I5(d){return B.dcC(d)},
dcC(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$I5=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:n=$.C2()
m=n.c7("news").j7(0,"id")
l=d.a
l.toString
v=d.d
m=A.me(m.pn(m.qj("created_at","lt."+l.j(0))),m.$ti.c).aI0("id",v)
l=A.dg()
l.toString
x=2
return A.d(m.di("occasion",l).bQg(0,"created_at").aHh(1).R0(),$async$I5)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.c7("user_news").j7(0,"user").di("news_id",v),$async$I5)
case 6:t=f
s=A.a([],y.t)
for(n=J.aH(t),m=y.N,l=y.z,r=J.a0(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.fR
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],m,l))}n=$.C2()
x=7
return A.d(n.c7("user_news").aL7(s),$async$I5)
case 7:x=4
break
case 5:x=8
return A.d(n.c7("user_news").iZ(0).di("news_id",v),$async$I5)
case 8:case 4:x=9
return A.d(n.c7("news").iZ(0).di("id",v),$async$I5)
case 9:return A.j(null,w)}})
return A.k($async$I5,w)},
bb6(d){return B.dcF(d)},
dcF(d){var x=0,w=A.l(y.H),v
var $async$bb6=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.C2().c7("news").eT(0,A.z(["message",d.b],v,v)).di("id",d.d),$async$bb6)
case 2:return A.j(null,w)}})
return A.k($async$bb6,w)},
aqR(d,e,f,g,h,i,j){return B.dcD(d,e,f,g,h,i,j)},
dcD(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$aqR=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.C2().c7("news")
s=A.dg()
s.toString
x=5
return A.d(t.ji(0,A.z(["occasion",s,"message",u,"created_by",$.dN().gdv().c.a],y.N,y.K)).iB(0),$async$aqR)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.Yh(A1.Yf(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.M)(t),++q){p=new A.dh("")
new H.aLP(p).bm(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.d.bu(o).length===0)continue
r+=o}r=C.d.bu(r)
t=$.C2().c7("log_notifications")
s=A.dg()
s.toString
x=8
return A.d(t.ji(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$aqR)
case 8:A.bJ(d,A.r("Message has been sent.",null),C.ac)
x=1
break
case 7:if(h)A.bJ(d,A.r("Message has been created.",null),C.ac)
case 1:return A.j(v,w)}})
return A.k($async$aqR,w)},
aqS(d){return B.dcE(d)},
dcE(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$aqS=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dN()
if(s.gdv().d==null)A.a7(A.cQ("User must be logged in."))
v=$.C2()
u=v.c7("user_news").iZ(0).di("user",s.gdv().c.a)
t=A.dg()
t.toString
x=2
return A.d(u.di("occasion",t),$async$aqS)
case 2:x=3
return A.d(v.c7("user_news").ji(0,A.z(["user",s.gdv().c.a,"news_id",d,"occasion",A.dg()],y.N,y.X)).iB(0),$async$aqS)
case 3:return A.j(null,w)}})
return A.k($async$aqS,w)}},D,Z,A_,A0,A1,H,A2,A3
J=c[1]
A=c[0]
C=c[2]
I=c[173]
K=c[243]
L=c[177]
M=c[181]
N=c[186]
E=c[176]
O=c[244]
P=c[187]
Q=c[131]
R=c[86]
S=c[246]
F=c[110]
T=c[247]
U=c[123]
V=c[190]
W=c[221]
X=c[150]
Y=c[100]
G=c[74]
B=a.updateHolder(c[19],B)
D=c[245]
Z=c[178]
A_=c[154]
A0=c[174]
A1=c[127]
H=c[161]
A2=c[140]
A3=c[212]
B.Ep.prototype={
M(){return new B.aQF(A.a([],y.o))}}
B.aQF.prototype={
S(){var x,w=this
w.ah()
x=w.c
x.toString
G.aFf(x,!1).f.a1(0,new B.ci_(w))
w.b0()},
l(){this.ai()},
M3(){var x=0,w=A.l(y.H),v=this,u
var $async$M3=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Ei(u,null,y.X)
x=(u==null?null:u.grZ())===!0&&!v.e?2:3
break
case 2:x=$.dN().gdv().d!=null&&J.fV(v.d)&&!J.hy(v.d).f?4:5
break
case 4:x=6
return A.d(B.aqS(J.hy(v.d).d),$async$M3)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$M3,w)},
btX(d){I.ix(d,"newsForm",y.X).aH(new B.chT(this,d),y.P)},
a0x(){var x=0,w=A.l(y.H),v=this,u
var $async$a0x=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a08(),$async$a0x)
case 2:v.A(new u.ci0(v,e))
return A.j(null,w)}})
return A.k($async$a0x,w)},
xP(){var x=0,w=A.l(y.H),v=this,u
var $async$xP=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(X.l1("newsOffline",B.dDA(),y.x),$async$xP)
case 2:v.A(new u.ci1(v,e))
return A.j(null,w)}})
return A.k($async$xP,w)},
b0(){var x=0,w=A.l(y.H),v=this
var $async$b0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.xP(),$async$b0)
case 2:x=3
return A.d(v.a0x(),$async$b0)
case 3:x=4
return A.d(A.ou("newsOffline",v.d,y.x),$async$b0)
case 4:v.M3()
return A.j(null,w)}})
return A.k($async$b0,w)},
B(d){var x,w,v=null,u=A.C(d).ax.a===C.t?$.ig():$.p1(),t=A.bE(C.as)
t=A0.iE(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new Y.KL(v,v),v,!0,v,v,v,v,v,E.bv(A.P("News",v,v,v,v,v,v,v,A.al(v,v,new A.br(t.a,t.b,t.c,0.8).bp(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eH(this.d)?new A.a2(O.MP,A.ah(A.a([A.aW(D.ayX,A.C(d).ay,v,64),C.a2,A.P(A.Yn("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.b0,v,v,v,v)],y.p),C.j,C.bl,C.i,0,v,C.m),v):new A2.EJ(new B.chY(this),v)
w=A.j_()
return Z.fa(t,u,new A.cq(C.aX,v,v,new A.cE(new A.ab(0,720,0,1/0),x,v),v),v,v,A.jm(U.a1E(S.hn,V.qQ,new B.chZ(this,d),v),w),v,v)}}
B.wS.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["X<~>(wS)","B<mO<wS>>(G)","vq(A<m,@>)"])
B.ci_.prototype={
$0(){var x=0,w=A.l(y.H),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.aFf(t,!1).f.gaAf()===C.b.ds($.ali(),"news")){u.M3()
u.b0()}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2}
B.chT.prototype={
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
s=B.aqR(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.ca(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.b0(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:116}
B.ci0.prototype={
$0(){this.a.d=this.b},
$S:0}
B.ci1.prototype={
$0(){this.a.d=this.b},
$S:0}
B.chY.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bz(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.hh)
v.push(new A.eO(new B.chX(x,w,d,e),null))
C.b.H(t,v)}return A.ah(t,C.bh,C.f,C.i,0,null,C.m)},
$S:251}
B.chX.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.dI(x)===A.dI(w)&&A.el(x)===A.el(w)&&A.hI(x)===A.hI(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.af(y.g).r.a
o===$&&A.b()
o=A.hA("EEEE d.M.y",o.gf0(0))
u=n.a
u.toString
u=o.dc(u)
if(n.f){o=p.c
o.toString
o=A.al(q,q,A.C(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.al(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ar(A3.i6,A.P(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.avs,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.al(q,q,A.C(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.al(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a2(K.fM,A.P(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bF(10)
o=A.C(d)
t=n.b
t.toString
t=A_.io(q,18,t,!0,r.d,r.c)
s=$.dN().gdv().d
w.push(new A.a2(C.CF,A.ar(q,A.ah(A.a([new A.a2(M.aT,t,q),A.jm(new A.a2(C.au,A.at(A.a([A.aW(D.ayu,A.C(d).ay,q,16),N.Hz,A.P(C.c.j(n.e),q,q,q,q,q,q,q,A.al(q,q,A.C(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),P.hT],x),C.j,C.dr,C.i,0,q),q),s!=null)],x),C.j,C.f,C.i,0,q,C.m),C.k,q,q,new A.b4(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.j_())w.push(R.xG(q,q,D.azz,new B.chV(),C.n,new B.chW(p,n,d),C.au,q,q,q,y.B))
return A.ah(w,C.bh,C.f,C.i,0,q,C.m)},
$S:1223}
B.chW.prototype={
$1(d){return this.aMB(d)},
aMB(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.M0?2:4
break
case 2:x=5
return A.d(B.I5(t),$async$$1)
case 5:A.bJ(s,A.r("Message has been removed.",null),C.ac)
x=3
break
case 4:u=Q.ps(A.z(["content",t.b],y.N,y.z),A.dg())
x=6
return A.d(L.fd(s,!1).f.i2(u,y.X).aH(new B.chU(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.b0(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+0}
B.chU.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.b9(d)
x=4
return A.d(B.bb6(u),$async$$1)
case 4:A.bJ(v.b,A.r("Message has been changed.",null),C.ac)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:116}
B.chV.prototype={
$1(d){var x=y.B
return A.a([F.nI(E.bv(W.Ij,null),!0,48,D.asJ,x),F.nI(E.bv(D.bIZ,null),!0,48,D.M0,x)],y.h)},
$S:z+1}
B.chZ.prototype={
$0(){return this.a.btX(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dDA","djB",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ep,A.J)
x(B.aQF,A.N)
w(A.cL,[B.ci_,B.ci0,B.ci1,B.chZ])
w(A.c8,[B.chT,B.chX,B.chW,B.chU,B.chV])
x(B.chY,A.ek)
x(B.wS,A.eU)})()
A.c5(b.typeUniverse,JSON.parse('{"Ep":{"J":[],"e":[]},"aQF":{"N":["Ep"]}}'))
var y=(function rtii(){var x=A.D
return{B:x("wS"),_:x("X<@>"),t:x("u<A<m,@>>"),o:x("u<vq>"),h:x("u<mO<wS>>"),p:x("u<e>"),a:x("A<m,@>"),x:x("vq"),P:x("aF"),K:x("H"),N:x("m"),g:x("kj"),z:x("@"),X:x("H?"),H:x("~")}})();(function constants(){D.M0=new B.wS(0,"delete")
D.asJ=new B.wS(1,"edit")
D.avs=new A.am(16,8,16,0)
D.ayu=new A.aB(58652,"MaterialIcons",null,!1)
D.ayX=new A.aB(61075,"MaterialIcons",null,!1)
D.azz=new A.d3(T.NY,null,null,null,null)
D.bIZ=new A.cv("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_328",e:"endPart",h:b})})($__dart_deferred_initializers__,"+WrVvrSDx0ebZbDVAGJs5PWwPNM=");