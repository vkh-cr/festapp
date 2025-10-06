((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,M,E,N,F,O,P,Q,R,S,T,U,G,V,B={
dCT(d,e){return new B.FZ(e,d)},
FZ:function FZ(d,e){this.c=d
this.a=e},
aVG:function aVG(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
cxT:function cxT(d){this.a=d},
cxM:function cxM(d,e){this.a=d
this.b=e},
cxU:function cxU(d,e){this.a=d
this.b=e},
cxV:function cxV(d,e){this.a=d
this.b=e},
cxR:function cxR(d){this.a=d},
cxQ:function cxQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cxP:function cxP(d,e,f){this.a=d
this.b=e
this.c=f},
cxN:function cxN(d,e){this.a=d
this.b=e},
cxO:function cxO(){},
cxS:function cxS(d,e){this.a=d
this.b=e},
y6:function y6(d,e){this.a=d
this.b=e},
dCS(d){return A.ddF(d)},
JT(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$JT=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:n=$.DF()
m=n.cn("news").kK(0,"id")
l=d.d
m=A.n3(m.pQ(m.qE("created_at","lt."+d.a.j(0))),m.$ti.c).aML("id",l)
v=A.de()
v.toString
x=2
return A.d(m.dW("occasion",v).bYI(0,"created_at").aM1(1).a2M(),$async$JT)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.cn("user_news").kK(0,"user").dW("news_id",l),$async$JT)
case 6:t=f
s=A.b([],y.t)
for(n=J.aJ(t),m=y.N,v=y.z,r=J.a1(u);n.t();){q=J.v(n.gM(n),"user")
p=r.h(u,"id")
o=$.ep().a
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.w(["user",q,"news_id",p,"occasion",o],m,v))}n=$.DF()
x=7
return A.d(n.cn("user_news").akO(s),$async$JT)
case 7:x=4
break
case 5:x=8
return A.d(n.cn("user_news").jh(0).dW("news_id",l),$async$JT)
case 8:case 4:x=9
return A.d(n.cn("news").jh(0).dW("id",l),$async$JT)
case 9:return A.j(null,w)}})
return A.k($async$JT,w)},
biD(d){var x=0,w=A.l(y.H),v
var $async$biD=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.DF().cn("news").f2(0,A.w(["message",d.b],v,v)).dW("id",d.d),$async$biD)
case 2:return A.j(null,w)}})
return A.k($async$biD,w)},
av4(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$av4=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.DF().cn("news")
s=A.de()
s.toString
r=$.e5().ge_().c
x=5
return A.d(t.jl(0,A.w(["occasion",s,"message",u,"created_by",(r==null?null:r.r).a],y.N,y.K)).iR(0),$async$av4)
case 5:case 4:x=i?6:7
break
case 6:for(t=I.a_Q(A1.a_N(g),"p"),s=t.length,q="",p=0;p<t.length;t.length===s||(0,A.K)(t),++p){r=new A.dt("")
new I.aQp(r).bs(t[p])
r=r.a
o=(r.charCodeAt(0)==0?r:r)+"\n"
if(C.d.bh(o).length===0)continue
q+=o}q=C.d.bh(q)
t=$.DF().cn("log_notifications")
s=A.de()
s.toString
x=8
return A.d(t.jl(0,A.w(["occasion",s,"to",j,"content",q,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$av4)
case 8:A.bg(d,A.n("Message has been sent.",null,null),C.a0)
x=1
break
case 7:if(h)A.bg(d,A.n("Message has been created.",null,null),C.a0)
case 1:return A.j(v,w)}})
return A.k($async$av4,w)},
av5(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$av5=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.e5()
if(s.ge_().c==null)A.aa(A.cN("User must be logged in."))
v=$.DF()
u=v.cn("user_news").jh(0)
t=s.ge_().c
u=u.dW("user",(t==null?null:t.r).a)
t=A.de()
t.toString
x=2
return A.d(u.dW("occasion",t),$async$av5)
case 2:v=v.cn("user_news")
s=s.ge_().c
x=3
return A.d(v.jl(0,A.w(["user",(s==null?null:s.r).a,"news_id",d,"occasion",A.de()],y.N,y.X)).iR(0),$async$av5)
case 3:return A.j(null,w)}})
return A.k($async$av5,w)}},D,H,W,X,Y,Z,I,A_,A0,A1,A2,A3
J=c[1]
A=c[0]
C=c[2]
K=c[165]
L=c[158]
M=c[161]
E=c[160]
N=c[224]
F=c[104]
O=c[228]
P=c[80]
Q=c[226]
R=c[125]
S=c[114]
T=c[168]
U=c[201]
G=c[225]
V=c[93]
B=a.updateHolder(c[18],B)
D=c[227]
H=c[111]
W=c[194]
X=c[162]
Y=c[147]
Z=c[157]
I=c[151]
A_=c[223]
A0=c[142]
A1=c[122]
A2=c[139]
A3=c[172]
B.FZ.prototype={
K(){return new B.aVG(A.b([],y.o))}}
B.aVG.prototype={
S(){var x,w=this
w.aa()
x=w.c
x.toString
H.x6(x,!1).f.Z(0,new B.cxT(w))
w.aX()},
l(){this.ae()},
N8(){var x=0,w=A.l(y.H),v=this,u
var $async$N8=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.LY(u,null,y.X)
x=(u==null?null:u.gty())===!0&&!v.e?2:3
break
case 2:x=$.e5().ge_().c!=null&&J.fA(v.d)&&!J.fX(v.d).f?4:5
break
case 4:x=6
return A.d(B.av5(J.fX(v.d).d),$async$N8)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$N8,w)},
bAX(d){L.hA(d,"newsForm",y.X).aN(new B.cxM(this,d),y.P)},
a2B(){var x=0,w=A.l(y.H),v=this,u
var $async$a2B=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a2T(),$async$a2B)
case 2:v.q(new u.cxU(v,e))
return A.j(null,w)}})
return A.k($async$a2B,w)},
a2C(){var x=0,w=A.l(y.H),v=this,u
var $async$a2C=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A0.lS("newsOffline",B.dXy(),y.x),$async$a2C)
case 2:v.q(new u.cxV(v,e))
return A.j(null,w)}})
return A.k($async$a2C,w)},
aX(){var x=0,w=A.l(y.H),v=this
var $async$aX=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a2C(),$async$aX)
case 2:x=3
return A.d(v.a2B(),$async$aX)
case 3:x=4
return A.d(A.oy("newsOffline",v.d,y.x),$async$aX)
case 4:v.N8()
return A.j(null,w)}})
return A.k($async$aX,w)},
A(d){var x,w,v=null,u=A.z(d).ax.a===C.p?$.i0():$.ob(),t=A.bP(C.ar)
t=Z.iv(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new V.MP(v,v),v,!0,v,v,v,v,v,E.bU(A.D("News",v,v,v,v,v,v,v,A.ad(v,v,new A.bJ(t.a,t.b,t.c,0.8).bx(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eU(this.d)?new A.V(N.OO,A.a9(A.b([A.aC(G.Ft,A.z(d).ay,v,64),C.X,A.D(A.b5c("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.aX,v,v,v,v)],y.p),C.i,C.bg,C.h,0,v,C.l),v):new A2.Gj(new B.cxR(this),v)
w=A.hY()
return X.eN(t,u,new A.cB(C.aS,v,v,new A.cs(new A.ab(0,720,0,1/0),x,v),v),v,A.jA(S.a4o(Q.hl,T.rZ,new B.cxS(this,d),v),!1,!1,!1,!1,w),v,v)}}
B.y6.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["W<~>(y6)","E<nL<y6>>(H)","wx(B<f,@>)"])
B.cxT.prototype={
$0(){var x=0,w=A.l(y.H),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(H.x6(t,!1).f.ga_m()===C.b.dq($.Qx(),"news")){u.N8()
u.aX()}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:1}
B.cxM.prototype={
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
s=B.av4(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.c4(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aX(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:134}
B.cxU.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cxV.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cxR.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.b([],u)
for(x=this.a,w=0;w<J.br(x.d);++w){v=A.b([],u)
if(w!==0)v.push(C.eL)
v.push(new A.dU(new B.cxQ(x,w,d,e),null))
C.b.F(t,v)}return A.a9(t,C.bl,C.f,C.h,0,null,C.l)},
$S:298}
B.cxQ.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.e3(x)===A.e3(w)&&A.f5(x)===A.f5(w)&&A.j8(x)===A.j8(w)}else v=!1
x=y.p
w=A.b([],x)
if(o===0||!v){o=d.af(y.g).r.a
o===$&&A.a()
o=A.he("EEEE d.M.y",o.gf_(0))
u=n.a
u.toString
u=o.cp(u)
if(n.f){o=p.c
o.toString
o=A.ad(q,q,A.z(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.N,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.ad(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.N,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.al(W.jq,A.D(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,G.OG,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.ad(q,q,A.z(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.N,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.ad(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.N,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.V(A_.eN,A.D(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.b1(10)
o=A.z(d)
t=n.b
t.toString
t=Y.hL(q,18,t,!0,r.d,r.c)
s=$.e5().ge_().c
w.push(new A.V(C.pA,A.al(q,A.a9(A.b([new A.V(A3.aV,t,q),A.jA(new A.V(C.am,A.ae(A.b([A.aC(D.aAs,A.z(d).ay,q,16),K.ja,A.D(C.c.j(n.e),q,q,q,q,q,q,q,A.ad(q,q,A.z(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.N,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.hC],x),C.i,q,C.ch,C.h,0,q),q),!1,!1,!1,!1,s!=null)],x),C.i,C.f,C.h,0,q,C.l),C.k,q,q,new A.b4(o.ax.k2,q,q,u,q,q,q,C.M),q,q,q,q,q,q,q,q),q))
if(A.hY())w.push(P.qK(q,q,q,D.aBT,new B.cxO(),C.r,new B.cxP(p,n,d),C.am,q,q,q,y.B))
return A.a9(w,C.bl,C.f,C.h,0,q,C.l)},
$S:1404}
B.cxP.prototype={
$1(d){return this.aRF(d)},
aRF(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.NW?2:4
break
case 2:x=5
return A.d(B.JT(t),$async$$1)
case 5:A.bg(s,A.n("Message has been removed.",null,null),C.a0)
x=3
break
case 4:u=R.pm(A.w(["content",t.b],y.N,y.z),A.de())
x=6
return A.d(M.ft(s,!1).f.hY(u,y.X).aN(new B.cxN(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aX(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+0}
B.cxN.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bc(d)
x=4
return A.d(B.biD(u),$async$$1)
case 4:A.bg(v.b,A.n("Message has been changed.",null,null),C.a0)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:134}
B.cxO.prototype={
$1(d){var x=y.B
return A.b([F.lU(E.bU(U.Kf,null),!0,48,D.auo,x),F.lU(E.bU(D.bLO,null),!0,48,D.NW,x)],y.h)},
$S:z+1}
B.cxS.prototype={
$0(){return this.a.bAX(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dXy","dCS",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.FZ,A.L)
x(B.aVG,A.N)
w(A.d1,[B.cxT,B.cxU,B.cxV,B.cxS])
w(A.cq,[B.cxM,B.cxQ,B.cxP,B.cxN,B.cxO])
x(B.cxR,A.el)
x(B.y6,A.fI)})()
A.ch(b.typeUniverse,JSON.parse('{"FZ":{"L":[],"e":[]},"aVG":{"N":["FZ"]}}'))
var y=(function rtii(){var x=A.J
return{B:x("y6"),_:x("W<@>"),t:x("u<B<f,@>>"),o:x("u<wx>"),h:x("u<nL<y6>>"),p:x("u<e>"),a:x("B<f,@>"),x:x("wx"),P:x("aE"),K:x("G"),N:x("f"),g:x("kZ"),z:x("@"),X:x("G?"),H:x("~")}})();(function constants(){D.NW=new B.y6(0,"delete")
D.auo=new B.y6(1,"edit")
D.aAs=new A.at(58652,"MaterialIcons",null,!1)
D.aBT=new A.ct(O.PY,null,null,null,null)
D.bLO=new A.ce("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["wNUSAZI6eNlZi4HJ7K/VavYE8kQ="]=a.current})($__dart_deferred_initializers__);