((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_331",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,M,N,E,O,P,Q,R,S,F,T,U,V,W,X,Y,G,B={
djm(d,e){return new B.Eo(e,d)},
Eo:function Eo(d,e){this.c=d
this.a=e},
aQI:function aQI(d){var _=this
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
wO:function wO(d,e){this.a=d
this.b=e},
djl(d){return A.cTI(d)},
I4(d){return B.dcn(d)},
dcn(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$I4=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:n=$.C2()
m=n.c1("news").ir(0,"id")
l=d.a
l.toString
v=d.d
m=A.mf(m.po(m.qk("created_at","lt."+l.j(0))),m.$ti.c).aHZ("id",v)
l=A.da()
l.toString
x=2
return A.d(m.dc("occasion",l).bQ7(0,"created_at").aHf(1).QY(),$async$I4)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.c1("user_news").ir(0,"user").dc("news_id",v),$async$I4)
case 6:t=f
s=A.a([],y.t)
for(n=J.aH(t),m=y.N,l=y.z,r=J.a1(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.fQ
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],m,l))}n=$.C2()
x=7
return A.d(n.c1("user_news").aL5(s),$async$I4)
case 7:x=4
break
case 5:x=8
return A.d(n.c1("user_news").j_(0).dc("news_id",v),$async$I4)
case 8:case 4:x=9
return A.d(n.c1("news").j_(0).dc("id",v),$async$I4)
case 9:return A.j(null,w)}})
return A.k($async$I4,w)},
bbh(d){return B.dcq(d)},
dcq(d){var x=0,w=A.l(y.H),v
var $async$bbh=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.C2().c1("news").eT(0,A.z(["message",d.b],v,v)).dc("id",d.d),$async$bbh)
case 2:return A.j(null,w)}})
return A.k($async$bbh,w)},
aqX(d,e,f,g,h,i,j){return B.dco(d,e,f,g,h,i,j)},
dco(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$aqX=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.C2().c1("news")
s=A.da()
s.toString
x=5
return A.d(t.jj(0,A.z(["occasion",s,"message",u,"created_by",$.dC().gdm().c.a],y.N,y.K)).iC(0),$async$aqX)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.Yf(A1.Yd(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.M)(t),++q){p=new A.dg("")
new H.aLS(p).bm(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.d.bu(o).length===0)continue
r+=o}r=C.d.bu(r)
t=$.C2().c1("log_notifications")
s=A.da()
s.toString
x=8
return A.d(t.jj(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$aqX)
case 8:A.bJ(d,A.r("Message has been sent.",null),C.ac)
x=1
break
case 7:if(h)A.bJ(d,A.r("Message has been created.",null),C.ac)
case 1:return A.j(v,w)}})
return A.k($async$aqX,w)},
aqY(d){return B.dcp(d)},
dcp(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$aqY=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dC()
if(s.gdm().d==null)A.a7(A.cP("User must be logged in."))
v=$.C2()
u=v.c1("user_news").j_(0).dc("user",s.gdm().c.a)
t=A.da()
t.toString
x=2
return A.d(u.dc("occasion",t),$async$aqY)
case 2:x=3
return A.d(v.c1("user_news").jj(0,A.z(["user",s.gdm().c.a,"news_id",d,"occasion",A.da()],y.N,y.X)).iC(0),$async$aqY)
case 3:return A.j(null,w)}})
return A.k($async$aqY,w)}},D,Z,A_,A0,A1,H,A2,A3
J=c[1]
A=c[0]
C=c[2]
I=c[174]
K=c[245]
L=c[178]
M=c[182]
N=c[188]
E=c[177]
O=c[246]
P=c[189]
Q=c[132]
R=c[87]
S=c[248]
F=c[110]
T=c[249]
U=c[123]
V=c[192]
W=c[223]
X=c[151]
Y=c[100]
G=c[75]
B=a.updateHolder(c[19],B)
D=c[247]
Z=c[179]
A_=c[155]
A0=c[175]
A1=c[127]
H=c[162]
A2=c[141]
A3=c[214]
B.Eo.prototype={
M(){return new B.aQI(A.a([],y.o))}}
B.aQI.prototype={
T(){var x,w=this
w.ah()
x=w.c
x.toString
G.aFj(x,!1).f.a1(0,new B.ci_(w))
w.aZ()},
l(){this.ai()},
M2(){var x=0,w=A.l(y.H),v=this,u
var $async$M2=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Eh(u,null,y.X)
x=(u==null?null:u.gt_())===!0&&!v.e?2:3
break
case 2:x=$.dC().gdm().d!=null&&J.fU(v.d)&&!J.ii(v.d).f?4:5
break
case 4:x=6
return A.d(B.aqY(J.ii(v.d).d),$async$M2)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$M2,w)},
btQ(d){I.ix(d,"newsForm",y.X).aH(new B.chT(this,d),y.P)},
a0v(){var x=0,w=A.l(y.H),v=this,u
var $async$a0v=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a07(),$async$a0v)
case 2:v.A(new u.ci0(v,e))
return A.j(null,w)}})
return A.k($async$a0v,w)},
of(){var x=0,w=A.l(y.H),v=this,u
var $async$of=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(X.lA("newsOffline",B.dDi(),y.x),$async$of)
case 2:v.A(new u.ci1(v,e))
return A.j(null,w)}})
return A.k($async$of,w)},
aZ(){var x=0,w=A.l(y.H),v=this
var $async$aZ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.of(),$async$aZ)
case 2:x=3
return A.d(v.a0v(),$async$aZ)
case 3:x=4
return A.d(A.nG("newsOffline",v.d,y.x),$async$aZ)
case 4:v.M2()
return A.j(null,w)}})
return A.k($async$aZ,w)},
B(d){var x,w,v=null,u=A.C(d).ax.a===C.t?$.ig():$.p1(),t=A.bD(C.as)
t=A0.iE(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new Y.KK(v,v),v,!0,v,v,v,v,v,E.bw(A.P("News",v,v,v,v,v,v,v,A.al(v,v,new A.br(t.a,t.b,t.c,0.8).bp(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eM(this.d)?new A.a2(O.MO,A.ah(A.a([A.aW(D.ayW,A.C(d).ay,v,64),C.a2,A.P(A.Yk("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.b0,v,v,v,v)],y.p),C.j,C.bl,C.i,0,v,C.m),v):new A2.EI(new B.chY(this),v)
w=A.j_()
return Z.fa(t,u,new A.cq(C.aX,v,v,new A.cE(new A.ab(0,720,0,1/0),x,v),v),v,v,A.jm(U.a1E(S.hn,V.qO,new B.chZ(this,d),v),w),v,v)}}
B.wO.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["X<~>(wO)","B<mP<wO>>(H)","vn(A<m,@>)"])
B.ci_.prototype={
$0(){var x=0,w=A.l(y.H),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.aFj(t,!1).f.gaAc()===C.b.dt($.alk(),"news")){u.M2()
u.aZ()}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2}
B.chT.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:y.a.a(d)
u=J.a1(d)
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
s=B.aqX(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.ca(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aZ(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:111}
B.ci0.prototype={
$0(){this.a.d=this.b},
$S:0}
B.ci1.prototype={
$0(){this.a.d=this.b},
$S:0}
B.chY.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bA(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.hh)
v.push(new A.eO(new B.chX(x,w,d,e),null))
C.b.H(t,v)}return A.ah(t,C.bh,C.f,C.i,0,null,C.m)},
$S:194}
B.chX.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.dJ(x)===A.dJ(w)&&A.el(x)===A.el(w)&&A.hG(x)===A.hG(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.af(y.g).r.a
o===$&&A.b()
o=A.hy("EEEE d.M.y",o.gf0(0))
u=n.a
u.toString
u=o.dd(u)
if(n.f){o=p.c
o.toString
o=A.al(q,q,A.C(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.al(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ar(A3.i6,A.P(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.avr,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.al(q,q,A.C(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.al(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a2(K.fM,A.P(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bF(10)
o=A.C(d)
t=n.b
t.toString
t=A_.ip(q,18,t,!0,r.d,r.c)
s=$.dC().gdm().d
w.push(new A.a2(C.CD,A.ar(q,A.ah(A.a([new A.a2(M.aT,t,q),A.jm(new A.a2(C.au,A.at(A.a([A.aW(D.ayt,A.C(d).ay,q,16),N.Hx,A.P(C.c.j(n.e),q,q,q,q,q,q,q,A.al(q,q,A.C(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),P.hT],x),C.j,C.dr,C.i,0,q),q),s!=null)],x),C.j,C.f,C.i,0,q,C.m),C.k,q,q,new A.b4(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.j_())w.push(R.xH(q,q,D.azy,new B.chV(),C.n,new B.chW(p,n,d),C.au,q,q,q,y.B))
return A.ah(w,C.bh,C.f,C.i,0,q,C.m)},
$S:1220}
B.chW.prototype={
$1(d){return this.aMz(d)},
aMz(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.M_?2:4
break
case 2:x=5
return A.d(B.I4(t),$async$$1)
case 5:A.bJ(s,A.r("Message has been removed.",null),C.ac)
x=3
break
case 4:u=Q.ps(A.z(["content",t.b],y.N,y.z),A.da())
x=6
return A.d(L.fd(s,!1).f.i2(u,y.X).aH(new B.chU(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aZ(),$async$$1)
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
return A.d(B.bbh(u),$async$$1)
case 4:A.bJ(v.b,A.r("Message has been changed.",null),C.ac)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:111}
B.chV.prototype={
$1(d){var x=y.B
return A.a([F.nK(E.bw(W.Ii,null),!0,48,D.asI,x),F.nK(E.bw(D.bIY,null),!0,48,D.M_,x)],y.h)},
$S:z+1}
B.chZ.prototype={
$0(){return this.a.btQ(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dDi","djl",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Eo,A.J)
x(B.aQI,A.O)
w(A.cL,[B.ci_,B.ci0,B.ci1,B.chZ])
w(A.c8,[B.chT,B.chX,B.chW,B.chU,B.chV])
x(B.chY,A.eg)
x(B.wO,A.eT)})()
A.c5(b.typeUniverse,JSON.parse('{"Eo":{"J":[],"e":[]},"aQI":{"O":["Eo"]}}'))
var y=(function rtii(){var x=A.D
return{B:x("wO"),_:x("X<@>"),t:x("u<A<m,@>>"),o:x("u<vn>"),h:x("u<mP<wO>>"),p:x("u<e>"),a:x("A<m,@>"),x:x("vn"),P:x("aF"),K:x("G"),N:x("m"),g:x("ki"),z:x("@"),X:x("G?"),H:x("~")}})();(function constants(){D.M_=new B.wO(0,"delete")
D.asI=new B.wO(1,"edit")
D.avr=new A.am(16,8,16,0)
D.ayt=new A.aB(58652,"MaterialIcons",null,!1)
D.ayW=new A.aB(61075,"MaterialIcons",null,!1)
D.azy=new A.d2(T.NX,null,null,null,null)
D.bIY=new A.cs("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_331",e:"endPart",h:b})})($__dart_deferred_initializers__,"5X0Ouz+etmHtgTQ/Enrs8Gq7Nxw=");