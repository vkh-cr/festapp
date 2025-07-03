((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_304",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,E,M,N,O,P,F,Q,R,S,T,U,V,G,B={
dqL(d,e){return new B.EH(e,d)},
EH:function EH(d,e){this.c=d
this.a=e},
aRL:function aRL(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
cne:function cne(d){this.a=d},
cn7:function cn7(d,e){this.a=d
this.b=e},
cnf:function cnf(d,e){this.a=d
this.b=e},
cng:function cng(d,e){this.a=d
this.b=e},
cnc:function cnc(d){this.a=d},
cnb:function cnb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cna:function cna(d,e,f){this.a=d
this.b=e
this.c=f},
cn8:function cn8(d,e){this.a=d
this.b=e},
cn9:function cn9(){},
cnd:function cnd(d,e){this.a=d
this.b=e},
xb:function xb(d,e){this.a=d
this.b=e},
dqK(d){return A.d_x(d)},
Io(d){return B.djw(d)},
djw(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$Io=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:n=$.Cq()
m=n.cb("news").jR(0,"id")
l=d.a
l.toString
v=d.d
m=A.mr(m.ps(m.qo("created_at","lt."+l.j(0))),m.$ti.c).aJc("id",v)
l=A.d6()
l.toString
x=2
return A.d(m.dv("occasion",l).bSx(0,"created_at").aIs(1).a1h(),$async$Io)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.cb("user_news").jR(0,"user").dv("news_id",v),$async$Io)
case 6:t=f
s=A.a([],y.t)
for(n=J.aI(t),m=y.N,l=y.z,r=J.a1(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.fT
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.w(["user",q,"news_id",p,"occasion",o],m,l))}n=$.Cq()
x=7
return A.d(n.cb("user_news").aiK(s),$async$Io)
case 7:x=4
break
case 5:x=8
return A.d(n.cb("user_news").j0(0).dv("news_id",v),$async$Io)
case 8:case 4:x=9
return A.d(n.cb("news").j0(0).dv("id",v),$async$Io)
case 9:return A.i(null,w)}})
return A.j($async$Io,w)},
bcT(d){return B.djz(d)},
djz(d){var x=0,w=A.k(y.H),v
var $async$bcT=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.Cq().cb("news").eY(0,A.w(["message",d.b],v,v)).dv("id",d.d),$async$bcT)
case 2:return A.i(null,w)}})
return A.j($async$bcT,w)},
arQ(d,e,f,g,h,i,j){return B.djx(d,e,f,g,h,i,j)},
djx(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$arQ=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Cq().cb("news")
s=A.d6()
s.toString
r=$.dB().gdn().c
x=5
return A.d(t.jn(0,A.w(["occasion",s,"message",u,"created_by",(r==null?null:r.r).a],y.N,y.K)).iE(0),$async$arQ)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.YF(A1.YD(g),"p"),s=t.length,q="",p=0;p<t.length;t.length===s||(0,A.M)(t),++p){r=new A.dd("")
new H.aMU(r).bp(t[p])
r=r.a
o=(r.charCodeAt(0)==0?r:r)+"\n"
if(C.d.bg(o).length===0)continue
q+=o}q=C.d.bg(q)
t=$.Cq().cb("log_notifications")
s=A.d6()
s.toString
x=8
return A.d(t.jn(0,A.w(["occasion",s,"to",j,"content",q,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$arQ)
case 8:A.bi(d,A.n("Message has been sent.",null),C.a3)
x=1
break
case 7:if(h)A.bi(d,A.n("Message has been created.",null),C.a3)
case 1:return A.i(v,w)}})
return A.j($async$arQ,w)},
arR(d){return B.djy(d)},
djy(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$arR=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.dB()
if(s.gdn().c==null)A.a7(A.cy("User must be logged in."))
v=$.Cq()
u=v.cb("user_news").j0(0)
t=s.gdn().c
u=u.dv("user",(t==null?null:t.r).a)
t=A.d6()
t.toString
x=2
return A.d(u.dv("occasion",t),$async$arR)
case 2:v=v.cb("user_news")
s=s.gdn().c
x=3
return A.d(v.jn(0,A.w(["user",(s==null?null:s.r).a,"news_id",d,"occasion",A.d6()],y.N,y.X)).iE(0),$async$arR)
case 3:return A.i(null,w)}})
return A.j($async$arR,w)}},D,W,X,Y,Z,A_,H,A0,A1,A2,A3
J=c[1]
A=c[0]
C=c[2]
I=c[175]
K=c[163]
L=c[167]
E=c[166]
M=c[227]
N=c[127]
O=c[82]
P=c[229]
F=c[106]
Q=c[231]
R=c[119]
S=c[178]
T=c[206]
U=c[228]
V=c[95]
G=c[114]
B=a.updateHolder(c[18],B)
D=c[230]
W=c[198]
X=c[168]
Y=c[150]
Z=c[164]
A_=c[146]
H=c[156]
A0=c[226]
A1=c[124]
A2=c[141]
A3=c[170]
B.EH.prototype={
M(){return new B.aRL(A.a([],y.o))}}
B.aRL.prototype={
T(){var x,w=this
w.ae()
x=w.c
x.toString
G.ye(x,!1).f.a1(0,new B.cne(w))
w.aU()},
l(){this.ai()},
Ml(){var x=0,w=A.k(y.H),v=this,u
var $async$Ml=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.EA(u,null,y.X)
x=(u==null?null:u.gt5())===!0&&!v.e?2:3
break
case 2:x=$.dB().gdn().c!=null&&J.fF(v.d)&&!J.h4(v.d).f?4:5
break
case 4:x=6
return A.d(B.arR(J.h4(v.d).d),$async$Ml)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$Ml,w)},
bvT(d){K.i3(d,"newsForm",y.X).aJ(new B.cn7(this,d),y.P)},
a19(){var x=0,w=A.k(y.H),v=this,u
var $async$a19=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a0B(),$async$a19)
case 2:v.u(new u.cnf(v,e))
return A.i(null,w)}})
return A.j($async$a19,w)},
y3(){var x=0,w=A.k(y.H),v=this,u
var $async$y3=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A_.lh("newsOffline",B.dKK(),y.x),$async$y3)
case 2:v.u(new u.cng(v,e))
return A.i(null,w)}})
return A.j($async$y3,w)},
aU(){var x=0,w=A.k(y.H),v=this
var $async$aU=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.y3(),$async$aU)
case 2:x=3
return A.d(v.a19(),$async$aU)
case 3:x=4
return A.d(A.nS("newsOffline",v.d,y.x),$async$aU)
case 4:v.Ml()
return A.i(null,w)}})
return A.j($async$aU,w)},
B(d){var x,w,v=null,u=A.C(d).ax.a===C.t?$.ib():$.pj(),t=A.bI(C.av)
t=Z.iu(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new V.Ld(v,v),v,!0,v,v,v,v,v,E.bC(A.G("News",v,v,v,v,v,v,v,A.af(v,v,new A.bw(t.a,t.b,t.c,0.8).bq(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.ex(this.d)?new A.a0(M.Nd,A.ad(A.a([A.aK(U.Ov,A.C(d).ay,v,64),C.a_,A.G(A.YL("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.b_,v,v,v,v)],y.p),C.j,C.bm,C.i,0,v,C.l),v):new A2.F1(new B.cnc(this),v)
w=A.hE()
return X.eY(t,u,new A.ch(C.aU,v,v,new A.cE(new A.ab(0,720,0,1/0),x,v),v),v,v,A.jx(R.a25(P.hC,S.r0,new B.cnd(this,d),v),w),v,v)}}
B.xb.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["X<~>(xb)","D<n4<xb>>(H)","vL(A<l,@>)"])
B.cne.prototype={
$0(){var x=0,w=A.k(y.H),v=this,u,t
var $async$$0=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.ye(t,!1).f.gZa()===C.b.di($.OH(),"news")){u.Ml()
u.aU()}return A.i(null,w)}})
return A.j($async$$0,w)},
$S:2}
B.cn7.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
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
s=B.arQ(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.cb(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aU(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:120}
B.cnf.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cng.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cnc.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bk(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.fn)
v.push(new A.eK(new B.cnb(x,w,d,e),null))
C.b.H(t,v)}return A.ad(t,C.bi,C.f,C.i,0,null,C.l)},
$S:219}
B.cnb.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.dH(x)===A.dH(w)&&A.eC(x)===A.eC(w)&&A.iV(x)===A.iV(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.ac(y.g).r.a
o===$&&A.b()
o=A.hi("EEEE d.M.y",o.geW(0))
u=n.a
u.toString
u=o.cR(u)
if(n.f){o=p.c
o.toString
o=A.af(q,q,A.C(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.T,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.af(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.T,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ar(W.iW,A.G(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.avT,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.af(q,q,A.C(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.T,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.af(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.T,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a0(A0.fq,A.G(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bs(10)
o=A.C(d)
t=n.b
t.toString
t=Y.hP(q,18,t,!0,r.d,r.c)
s=$.dB().gdn().c
w.push(new A.a0(C.rT,A.ar(q,A.ad(A.a([new A.a0(A3.aR,t,q),A.jx(new A.a0(C.aq,A.aq(A.a([A.aK(D.az5,A.C(d).ay,q,16),I.qb,A.G(C.c.j(n.e),q,q,q,q,q,q,q,A.af(q,q,A.C(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.T,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.hi],x),C.j,C.de,C.i,0,q),q),s!=null)],x),C.j,C.f,C.i,0,q,C.l),C.k,q,q,new A.b3(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.hE())w.push(O.tY(q,q,q,D.aAi,new B.cn9(),C.o,new B.cna(p,n,d),C.aq,q,q,q,y.B))
return A.ad(w,C.bi,C.f,C.i,0,q,C.l)},
$S:1269}
B.cna.prototype={
$1(d){return this.aNK(d)},
aNK(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.Mn?2:4
break
case 2:x=5
return A.d(B.Io(t),$async$$1)
case 5:A.bi(s,A.n("Message has been removed.",null),C.a3)
x=3
break
case 4:u=N.pJ(A.w(["content",t.b],y.N,y.z),A.d6())
x=6
return A.d(L.fj(s,!1).f.i8(u,y.X).aJ(new B.cn8(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aU(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.cn8.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.ba(d)
x=4
return A.d(B.bcT(u),$async$$1)
case 4:A.bi(v.b,A.n("Message has been changed.",null),C.a3)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:120}
B.cn9.prototype={
$1(d){var x=y.B
return A.a([F.mp(E.bC(T.IE,null),!0,48,D.at2,x),F.mp(E.bC(D.bJE,null),!0,48,D.Mn,x)],y.h)},
$S:z+1}
B.cnd.prototype={
$0(){return this.a.bvT(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dKK","dqK",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.EH,A.L)
x(B.aRL,A.N)
w(A.d_,[B.cne,B.cnf,B.cng,B.cnd])
w(A.ci,[B.cn7,B.cnb,B.cna,B.cn8,B.cn9])
x(B.cnc,A.ey)
x(B.xb,A.fm)})()
A.ce(b.typeUniverse,JSON.parse('{"EH":{"L":[],"e":[]},"aRL":{"N":["EH"]}}'))
var y=(function rtii(){var x=A.E
return{B:x("xb"),_:x("X<@>"),t:x("u<A<l,@>>"),o:x("u<vL>"),h:x("u<n4<xb>>"),p:x("u<e>"),a:x("A<l,@>"),x:x("vL"),P:x("aE"),K:x("K"),N:x("l"),g:x("kv"),z:x("@"),X:x("K?"),H:x("~")}})();(function constants(){D.Mn=new B.xb(0,"delete")
D.at2=new B.xb(1,"edit")
D.avT=new A.aj(16,8,16,0)
D.az5=new A.az(58652,"MaterialIcons",null,!1)
D.aAi=new A.cR(Q.Ol,null,null,null,null)
D.bJE=new A.cx("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_304",e:"endPart",h:b})})($__dart_deferred_initializers__,"YqPErP+fxFoXn6BCV724SdlGPVw=");