((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_314",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,E,M,N,O,P,Q,F,R,S,T,U,V,W,G,B={
djM(d,e){return new B.En(e,d)},
En:function En(d,e){this.c=d
this.a=e},
aQH:function aQH(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
ci7:function ci7(d){this.a=d},
ci0:function ci0(d,e){this.a=d
this.b=e},
ci8:function ci8(d,e){this.a=d
this.b=e},
ci9:function ci9(d,e){this.a=d
this.b=e},
ci5:function ci5(d){this.a=d},
ci4:function ci4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ci3:function ci3(d,e,f){this.a=d
this.b=e
this.c=f},
ci1:function ci1(d,e){this.a=d
this.b=e},
ci2:function ci2(){},
ci6:function ci6(d,e){this.a=d
this.b=e},
wT:function wT(d,e){this.a=d
this.b=e},
djL(d){return A.cU7(d)},
I4(d){return B.dcM(d)},
dcM(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$I4=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:n=$.C1()
m=n.c7("news").j7(0,"id")
l=d.a
l.toString
v=d.d
m=A.mf(m.pn(m.qj("created_at","lt."+l.j(0))),m.$ti.c).aI1("id",v)
l=A.dg()
l.toString
x=2
return A.d(m.di("occasion",l).bQj(0,"created_at").aHi(1).R1(),$async$I4)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.c7("user_news").j7(0,"user").di("news_id",v),$async$I4)
case 6:t=f
s=A.a([],y.t)
for(n=J.aG(t),m=y.N,l=y.z,r=J.a0(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.fM
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],m,l))}n=$.C1()
x=7
return A.d(n.c7("user_news").aL8(s),$async$I4)
case 7:x=4
break
case 5:x=8
return A.d(n.c7("user_news").j_(0).di("news_id",v),$async$I4)
case 8:case 4:x=9
return A.d(n.c7("news").j_(0).di("id",v),$async$I4)
case 9:return A.j(null,w)}})
return A.k($async$I4,w)},
bba(d){return B.dcP(d)},
dcP(d){var x=0,w=A.l(y.H),v
var $async$bba=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.C1().c7("news").eT(0,A.z(["message",d.b],v,v)).di("id",d.d),$async$bba)
case 2:return A.j(null,w)}})
return A.k($async$bba,w)},
aqQ(d,e,f,g,h,i,j){return B.dcN(d,e,f,g,h,i,j)},
dcN(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$aqQ=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.C1().c7("news")
s=A.dg()
s.toString
x=5
return A.d(t.ji(0,A.z(["occasion",s,"message",u,"created_by",$.dM().gdv().c.a],y.N,y.K)).iB(0),$async$aqQ)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.Yg(A1.Ye(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.M)(t),++q){p=new A.dh("")
new H.aLR(p).bm(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.d.bu(o).length===0)continue
r+=o}r=C.d.bu(r)
t=$.C1().c7("log_notifications")
s=A.dg()
s.toString
x=8
return A.d(t.ji(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$aqQ)
case 8:A.bJ(d,A.r("Message has been sent.",null),C.ac)
x=1
break
case 7:if(h)A.bJ(d,A.r("Message has been created.",null),C.ac)
case 1:return A.j(v,w)}})
return A.k($async$aqQ,w)},
aqR(d){return B.dcO(d)},
dcO(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$aqR=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dM()
if(s.gdv().d==null)A.a7(A.cP("User must be logged in."))
v=$.C1()
u=v.c7("user_news").j_(0).di("user",s.gdv().c.a)
t=A.dg()
t.toString
x=2
return A.d(u.di("occasion",t),$async$aqR)
case 2:x=3
return A.d(v.c7("user_news").ji(0,A.z(["user",s.gdv().c.a,"news_id",d,"occasion",A.dg()],y.N,y.X)).iB(0),$async$aqR)
case 3:return A.j(null,w)}})
return A.k($async$aqR,w)}},D,X,Y,Z,A_,H,A0,A1,A2,A3
J=c[1]
A=c[0]
C=c[2]
I=c[172]
K=c[176]
L=c[181]
E=c[171]
M=c[238]
N=c[182]
O=c[128]
P=c[86]
Q=c[240]
F=c[108]
R=c[241]
S=c[121]
T=c[185]
U=c[216]
V=c[99]
W=c[148]
G=c[74]
B=a.updateHolder(c[19],B)
D=c[239]
X=c[207]
Y=c[173]
Z=c[154]
A_=c[169]
H=c[160]
A0=c[237]
A1=c[125]
A2=c[168]
A3=c[143]
B.En.prototype={
M(){return new B.aQH(A.a([],y.o))}}
B.aQH.prototype={
S(){var x,w=this
w.ah()
x=w.c
x.toString
G.aFg(x,!1).f.a1(0,new B.ci7(w))
w.b0()},
l(){this.ai()},
M4(){var x=0,w=A.l(y.H),v=this,u
var $async$M4=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Eg(u,null,y.X)
x=(u==null?null:u.grZ())===!0&&!v.e?2:3
break
case 2:x=$.dM().gdv().d!=null&&J.fV(v.d)&&!J.hy(v.d).f?4:5
break
case 4:x=6
return A.d(B.aqR(J.hy(v.d).d),$async$M4)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$M4,w)},
btY(d){A2.iw(d,"newsForm",y.X).aH(new B.ci0(this,d),y.P)},
a0y(){var x=0,w=A.l(y.H),v=this,u
var $async$a0y=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a07(),$async$a0y)
case 2:v.A(new u.ci8(v,e))
return A.j(null,w)}})
return A.k($async$a0y,w)},
xP(){var x=0,w=A.l(y.H),v=this,u
var $async$xP=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(W.l1("newsOffline",B.dDJ(),y.x),$async$xP)
case 2:v.A(new u.ci9(v,e))
return A.j(null,w)}})
return A.k($async$xP,w)},
b0(){var x=0,w=A.l(y.H),v=this
var $async$b0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.xP(),$async$b0)
case 2:x=3
return A.d(v.a0y(),$async$b0)
case 3:x=4
return A.d(A.ov("newsOffline",v.d,y.x),$async$b0)
case 4:v.M4()
return A.j(null,w)}})
return A.k($async$b0,w)},
B(d){var x,w,v=null,u=A.C(d).ax.a===C.t?$.ih():$.p1(),t=A.bE(C.as)
t=A_.iD(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new V.KK(v,v),v,!0,v,v,v,v,v,E.bv(A.O("News",v,v,v,v,v,v,v,A.al(v,v,new A.br(t.a,t.b,t.c,0.8).bp(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eI(this.d)?new A.a2(M.MO,A.ah(A.a([A.aW(D.ayW,A.C(d).ay,v,64),C.a1,A.O(A.Ym("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.b0,v,v,v,v)],y.p),C.j,C.bl,C.i,0,v,C.m),v):new A3.EH(new B.ci5(this),v)
w=A.j_()
return Y.fa(t,u,new A.cq(C.aX,v,v,new A.cE(new A.ab(0,720,0,1/0),x,v),v),v,v,A.jm(S.a1D(Q.hn,T.qR,new B.ci6(this,d),v),w),v,v)}}
B.wT.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["X<~>(wT)","B<mP<wT>>(G)","vp(A<m,@>)"])
B.ci7.prototype={
$0(){var x=0,w=A.l(y.H),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.aFg(t,!1).f.gaAh()===C.b.ds($.alh(),"news")){u.M4()
u.b0()}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2}
B.ci0.prototype={
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
B.ci8.prototype={
$0(){this.a.d=this.b},
$S:0}
B.ci9.prototype={
$0(){this.a.d=this.b},
$S:0}
B.ci5.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bz(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.hh)
v.push(new A.eO(new B.ci4(x,w,d,e),null))
C.b.H(t,v)}return A.ah(t,C.bh,C.f,C.i,0,null,C.m)},
$S:252}
B.ci4.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.dI(x)===A.dI(w)&&A.ek(x)===A.ek(w)&&A.hI(x)===A.hI(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.af(y.g).r.a
o===$&&A.b()
o=A.hA("EEEE d.M.y",o.gf1(0))
u=n.a
u.toString
u=o.da(u)
if(n.f){o=p.c
o.toString
o=A.al(q,q,A.C(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.al(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ar(X.i6,A.O(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.avr,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.al(q,q,A.C(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.al(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a2(A0.fN,A.O(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bF(10)
o=A.C(d)
t=n.b
t.toString
t=Z.i5(q,18,t,!0,r.d,r.c)
s=$.dM().gdv().d
w.push(new A.a2(C.CF,A.ar(q,A.ah(A.a([new A.a2(K.aT,t,q),A.jm(new A.a2(C.au,A.at(A.a([A.aW(D.ayt,A.C(d).ay,q,16),L.Hz,A.O(C.c.j(n.e),q,q,q,q,q,q,q,A.al(q,q,A.C(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),N.hT],x),C.j,C.dr,C.i,0,q),q),s!=null)],x),C.j,C.f,C.i,0,q,C.m),C.k,q,q,new A.b4(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.j_())w.push(P.xI(q,q,D.azy,new B.ci2(),C.n,new B.ci3(p,n,d),C.au,q,q,q,y.B))
return A.ah(w,C.bh,C.f,C.i,0,q,C.m)},
$S:1223}
B.ci3.prototype={
$1(d){return this.aMC(d)},
aMC(d){var x=0,w=A.l(y.H),v=this,u,t,s
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
case 4:u=O.ps(A.z(["content",t.b],y.N,y.z),A.dg())
x=6
return A.d(I.fd(s,!1).f.i2(u,y.X).aH(new B.ci1(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.b0(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+0}
B.ci1.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.b9(d)
x=4
return A.d(B.bba(u),$async$$1)
case 4:A.bJ(v.b,A.r("Message has been changed.",null),C.ac)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:119}
B.ci2.prototype={
$1(d){var x=y.B
return A.a([F.nI(E.bv(U.Ij,null),!0,48,D.asI,x),F.nI(E.bv(D.bIY,null),!0,48,D.M_,x)],y.h)},
$S:z+1}
B.ci6.prototype={
$0(){return this.a.btY(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dDJ","djL",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.En,A.J)
x(B.aQH,A.N)
w(A.cU,[B.ci7,B.ci8,B.ci9,B.ci6])
w(A.ce,[B.ci0,B.ci4,B.ci3,B.ci1,B.ci2])
x(B.ci5,A.es)
x(B.wT,A.f0)})()
A.c7(b.typeUniverse,JSON.parse('{"En":{"J":[],"e":[]},"aQH":{"N":["En"]}}'))
var y=(function rtii(){var x=A.E
return{B:x("wT"),_:x("X<@>"),t:x("u<A<m,@>>"),o:x("u<vp>"),h:x("u<mP<wT>>"),p:x("u<e>"),a:x("A<m,@>"),x:x("vp"),P:x("aF"),K:x("H"),N:x("m"),g:x("kj"),z:x("@"),X:x("H?"),H:x("~")}})();(function constants(){D.M_=new B.wT(0,"delete")
D.asI=new B.wT(1,"edit")
D.avr=new A.am(16,8,16,0)
D.ayt=new A.aB(58652,"MaterialIcons",null,!1)
D.ayW=new A.aB(61075,"MaterialIcons",null,!1)
D.azy=new A.d3(R.NX,null,null,null,null)
D.bIY=new A.cv("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_314",e:"endPart",h:b})})($__dart_deferred_initializers__,"4aozw34SIg9iYMEUPQqy7rczctM=");