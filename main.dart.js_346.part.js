((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,M,F,E,N,O,P,Q,R,S,T,G,H,U,B={
ePV(d,e){return new B.aai(e,d)},
aai:function aai(d,e){this.c=d
this.a=e},
bsf:function bsf(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dcm:function dcm(d){this.a=d},
dcf:function dcf(d,e){this.a=d
this.b=e},
dcn:function dcn(d,e){this.a=d
this.b=e},
dco:function dco(d,e){this.a=d
this.b=e},
dck:function dck(d){this.a=d},
dcj:function dcj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dci:function dci(d,e,f){this.a=d
this.b=e
this.c=f},
dcg:function dcg(d,e){this.a=d
this.b=e},
dch:function dch(){},
dcl:function dcl(d,e){this.a=d
this.b=e},
a1Z:function a1Z(d,e){this.a=d
this.b=e},
aeh(d){var x=0,w=A.q(y.H),v,u,t,s,r,q,p,o,n,m,l,k
var $async$aeh=A.m(function(e,f){if(e===1)return A.n(f,w)
for(;;)switch(x){case 0:l=$.a7K()
k=l.d8("news").lz(0,"id")
k=A.S7(k.qh(k.rg("created_at","lt."+d.a.j(0))),k.$ti.c)
v=d.d
u=k.rg("id","neq."+v)
k=A.S7(k.qh(u),k.$ti.c)
t=A.dw()
t.toString
x=2
return A.f(k.e8("occasion",t).c4w(0,"created_at").aQk(1).LQ(),$async$aeh)
case 2:s=f
x=s!=null?3:5
break
case 3:x=6
return A.f(l.d8("user_news").lz(0,"user").e8("news_id",v),$async$aeh)
case 6:r=f
q=A.c([],y.t)
for(l=J.aK(r),k=y.N,t=y.z,p=J.a3(s);l.t();){o=J.y(l.gM(l),"user")
n=p.h(s,"id")
m=$.d6().a
if(m==null)m=null
else{m=m.b
m=m==null?null:m.a}m.toString
q.push(A.d(["user",o,"news_id",n,"occasion",m],k,t))}l=$.a7K()
x=7
return A.f(l.d8("user_news").anW(q),$async$aeh)
case 7:x=4
break
case 5:x=8
return A.f(l.d8("user_news").jA(0).e8("news_id",v),$async$aeh)
case 8:case 4:x=9
return A.f(l.d8("news").jA(0).e8("id",v),$async$aeh)
case 9:return A.o(null,w)}})
return A.p($async$aeh,w)},
bRL(d){var x=0,w=A.q(y.H),v
var $async$bRL=A.m(function(e,f){if(e===1)return A.n(f,w)
for(;;)switch(x){case 0:v=y.z
x=2
return A.f($.a7K().d8("news").f1(0,A.d(["message",d.b],v,v)).e8("id",d.d),$async$bRL)
case 2:return A.o(null,w)}})
return A.p($async$bRL,w)},
b1_(d,e,f,g,h,i,j){var x=0,w=A.q(y.H),v,u,t,s,r,q,p,o
var $async$b1_=A.m(function(k,l){if(k===1)return A.n(l,w)
for(;;)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.a7K().d8("news")
s=A.dw()
s.toString
r=$.e3().gdn().c
x=5
return A.f(t.iy(0,A.d(["occasion",s,"message",u,"created_by",(r==null?null:r.r).a],y.N,y.K)).jo(0),$async$b1_)
case 5:case 4:x=i?6:7
break
case 6:for(t=I.al5(Z.al3(g),"p"),s=t.length,q="",p=0;p<t.length;t.length===s||(0,A.O)(t),++p){r=new A.db("")
new I.bmZ(r).bw(t[p])
r=r.a
o=(r.charCodeAt(0)==0?r:r)+"\n"
if(C.e.b0(o).length===0)continue
q+=o}q=C.e.b0(q)
t=$.a7K().d8("log_notifications")
s=A.dw()
s.toString
x=8
return A.f(t.iy(0,A.d(["occasion",s,"to",j,"content",q,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$b1_)
case 8:A.aN(d,A.j("Message has been sent.",null,null),C.aa)
x=1
break
case 7:if(h)A.aN(d,A.j("Message has been created.",null,null),C.aa)
case 1:return A.o(v,w)}})
return A.p($async$b1_,w)},
b10(d){var x=0,w=A.q(y.H),v,u,t,s
var $async$b10=A.m(function(e,f){if(e===1)return A.n(f,w)
for(;;)switch(x){case 0:s=$.e3()
if(s.gdn().c==null)A.af(A.cv("User must be logged in."))
v=$.a7K()
u=v.d8("user_news").jA(0)
t=s.gdn().c
u=u.e8("user",(t==null?null:t.r).a)
t=A.dw()
t.toString
x=2
return A.f(u.e8("occasion",t),$async$b10)
case 2:v=v.d8("user_news")
s=s.gdn().c
x=3
return A.f(v.iy(0,A.d(["user",(s==null?null:s.r).a,"news_id",d,"occasion",A.dw()],y.N,y.X)).jo(0),$async$b10)
case 3:return A.o(null,w)}})
return A.p($async$b10,w)},
ePU(d){return A.dWC(d)}},D,V,W,X,Y,I,Z,A_,A0,A1,A2
J=c[1]
A=c[0]
C=c[2]
K=c[202]
L=c[175]
M=c[177]
F=c[136]
E=c[166]
N=c[141]
O=c[205]
P=c[180]
Q=c[223]
R=c[106]
S=c[242]
T=c[135]
G=c[116]
H=c[241]
U=c[94]
B=a.updateHolder(c[18],B)
D=c[244]
V=c[176]
W=c[162]
X=c[173]
Y=c[157]
I=c[167]
Z=c[130]
A_=c[243]
A0=c[240]
A1=c[152]
A2=c[185]
B.aai.prototype={
L(){return new B.bsf(A.c([],y.o))}}
B.bsf.prototype={
S(){var x,w=this
w.a_()
x=w.c
x.toString
G.a0Q(x,!1).f.W(0,new B.dcm(w))
w.aX()},
l(){this.a7()},
Or(){var x=0,w=A.q(y.H),v=this,u
var $async$Or=A.m(function(d,e){if(d===1)return A.n(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
u=A.aab(u,null,y.X)
x=(u==null?null:u.gpV())===!0&&!v.e?2:3
break
case 2:x=$.e3().gdn().c!=null&&J.fw(v.d)&&!J.h7(v.d).f?4:5
break
case 4:x=6
return A.f(B.b10(J.h7(v.d).d),$async$Or)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.o(null,w)}})
return A.p($async$Or,w)},
bGY(d){L.N8(d,"newsForm",y.X).aL(new B.dcf(this,d),y.P)},
a55(){var x=0,w=A.q(y.H),v=this,u
var $async$a55=A.m(function(d,e){if(d===1)return A.n(e,w)
for(;;)switch(x){case 0:u=B
x=2
return A.f(A.ayM(),$async$a55)
case 2:v.q(new u.dcn(v,e))
return A.o(null,w)}})
return A.p($async$a55,w)},
a56(){var x=0,w=A.q(y.H),v=this,u
var $async$a56=A.m(function(d,e){if(d===1)return A.n(e,w)
for(;;)switch(x){case 0:u=B
x=2
return A.f(Y.Rn("newsOffline",B.fa7(),y.x),$async$a56)
case 2:v.q(new u.dco(v,e))
return A.o(null,w)}})
return A.p($async$a56,w)},
aX(){var x=0,w=A.q(y.H),v=this
var $async$aX=A.m(function(d,e){if(d===1)return A.n(e,w)
for(;;)switch(x){case 0:x=2
return A.f(v.a56(),$async$aX)
case 2:x=3
return A.f(v.a55(),$async$aX)
case 3:x=4
return A.f(A.Ul("newsOffline",v.d,y.x),$async$aX)
case 4:v.Or()
return A.o(null,w)}})
return A.p($async$aX,w)},
A(d){var x,w,v=null,u=A.B(d).ax.a===C.B?$.ME():$.Sq(),t=A.bT(C.ag)
t=X.O8(v,v,v,!0,!0,v,v,1,v,v,v,!1,v,!1,v,v,new U.ahb(v,v),v,!0,v,v,v,v,v,E.cZ(A.x("News",v,v,v,v,v,v,v,A.ac(v,v,new A.bh(t.a,t.b,t.c,0.8).aq(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eR(this.d)?new A.S(P.Qn,A.a6(A.c([A.ax(H.GN,A.B(d).ay,v,v,64),C.a0,A.x(A.bDd("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.aS,v,v,v,v)],y.p),C.m,C.bj,C.j,0,v,C.o),v):new A1.aaF(new B.dck(this),v)
w=A.OV()
return V.eC(t,u,new A.cq(C.aX,v,v,new A.cr(new A.ah(0,720,0,1/0),x,v),v),v,A.OX(N.a9g(v,S.eY,v,v,O.pU,new B.dcl(this,d),v,v),!1,!1,!1,!1,w),v,v,v)}}
B.a1Z.prototype={
K(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["Z<~>(a1Z)","G<SH<a1Z>>(I)","a0i(F<l,@>)"])
B.dcm.prototype={
$0(){var x=0,w=A.q(y.H),v=this,u,t
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,w)
for(;;)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.a0Q(t,!1).f.ga1R()===C.c.dB($.alg(),"news")){u.Or()
u.aX()}return A.o(null,w)}})
return A.p($async$$0,w)},
$S:1}
B.dcf.prototype={
$1(d){var x=0,w=A.q(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,w)
for(;;)switch(x){case 0:x=d!=null?2:3
break
case 2:y.a.a(d)
u=J.a3(d)
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
x=4
return A.f(B.b1_(v.b,p,u,q,t,s,r),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.f(v.a.aX(),$async$$1)
case 7:case 6:case 3:return A.o(null,w)}})
return A.p($async$$1,w)},
$S:132}
B.dcn.prototype={
$0(){this.a.d=this.b},
$S:0}
B.dco.prototype={
$0(){this.a.d=this.b},
$S:0}
B.dck.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.c([],u)
for(x=this.a,w=0;w<J.bi(x.d);++w){v=A.c([],u)
if(w!==0)v.push(C.cQ)
v.push(new A.dR(new B.dcj(x,w,d,e),null))
C.c.G(t,v)}return A.a6(t,C.bv,C.i,C.j,0,null,C.o)},
$S:235}
B.dcj.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.y(p.d,o),m=o>0?J.y(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.es(x)===A.es(w)&&A.fm(x)===A.fm(w)&&A.Oy(x)===A.Oy(w)}else v=!1
x=y.p
w=A.c([],x)
if(o===0||!v){o=d.ac(y.g).r.a
o===$&&A.b()
o=A.fs("EEEE d.M.y",o.gf_(0))
u=n.a
u.toString
u=o.ce(u)
if(n.f){o=p.c
o.toString
o=A.ac(q,q,A.B(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.U,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.ac(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.U,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ak(A_.k3,A.x(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.p,q,q,q,q,q,q,q,H.Q9,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.ac(q,q,A.B(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.U,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.ac(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.U,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.S(A0.ee,A.x(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.aL(10)
o=A.B(d)
t=n.b
t.toString
t=W.ha(q,18,t,!0,r.d,r.c)
s=$.e3().gdn().c
w.push(new A.S(C.qw,A.ak(q,A.a6(A.c([new A.S(A2.aP,t,q),A.OX(new A.S(C.aA,A.ae(A.c([A.ax(D.aCg,A.B(d).ay,q,q,16),K.jS,A.x(C.d.j(n.e),q,q,q,q,q,q,q,A.ac(q,q,A.B(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.U,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.hM],x),C.m,q,C.cp,C.j,0,q),q),!1,!1,!1,!1,s!=null)],x),C.m,C.i,C.j,0,q,C.o),C.p,q,q,new A.aV(o.ax.k2,q,q,u,q,q,q,C.Z),q,q,q,q,q,q,q,q),q))
if(A.OV())w.push(R.Up(q,q,q,!0,D.aDT,new B.dch(),C.E,new B.dci(p,n,d),C.aA,q,q,q,y.B))
return A.a6(w,C.bv,C.i,C.j,0,q,C.o)},
$S:1452}
B.dci.prototype={
$1(d){return this.aWb(d)},
aWb(d){var x=0,w=A.q(y.H),v=this,u,t,s
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,w)
for(;;)switch(x){case 0:t=v.b
s=v.c
x=d===D.Pm?2:4
break
case 2:x=5
return A.f(B.aeh(t),$async$$1)
case 5:A.aN(s,A.j("Message has been removed.",null,null),C.aa)
x=3
break
case 4:u=T.V4(A.d(["content",t.b],y.N,y.z),A.dw())
x=6
return A.f(M.eP(s,!1).f.ij(u,y.X).aL(new B.dcg(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.f(v.a.aX(),$async$$1)
case 7:return A.o(null,w)}})
return A.p($async$$1,w)},
$S:z+0}
B.dcg.prototype={
$1(d){var x=0,w=A.q(y.P),v=this,u
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,w)
for(;;)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bo(d)
x=4
return A.f(B.bRL(u),$async$$1)
case 4:A.aN(v.b,A.j("Message has been changed.",null,null),C.aa)
case 3:return A.o(null,w)}})
return A.p($async$$1,w)},
$S:132}
B.dch.prototype={
$1(d){var x=null,w=y.B
return A.c([F.Qp(E.cZ(A.x(A.j("Common.edit",x,x),x,x,x,x,x,x,x,x,x,x,x,x,x),x),!0,48,x,x,x,x,x,D.avU,w),F.Qp(E.cZ(D.bM3,x),!0,48,x,x,x,x,x,D.Pm,w)],y.h)},
$S:z+1}
B.dcl.prototype={
$0(){return this.a.bGY(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"fa7","ePU",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.aai,A.N)
x(B.bsf,A.P)
w(A.d3,[B.dcm,B.dcn,B.dco,B.dcl])
w(A.ck,[B.dcf,B.dcj,B.dci,B.dcg,B.dch])
x(B.dck,A.e8)
x(B.a1Z,A.Mt)})()
A.ch(b.typeUniverse,JSON.parse('{"aai":{"N":[],"k":[]},"bsf":{"P":["aai"]}}'))
var y=(function rtii(){var x=A.L
return{B:x("a1Z"),t:x("A<F<l,@>>"),o:x("A<a0i>"),h:x("A<SH<a1Z>>"),p:x("A<k>"),a:x("F<l,@>"),x:x("a0i"),P:x("aM"),K:x("M"),N:x("l"),g:x("Qx"),z:x("@"),X:x("M?"),H:x("~")}})();(function constants(){D.Pm=new B.a1Z(0,"delete")
D.avU=new B.a1Z(1,"edit")
D.aCg=new A.av(58652,"MaterialIcons",null,!1)
D.aDT=new A.bZ(Q.RA,null,null,null,null)
D.bM3=new A.cd("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["M0np0lBfQ/f8QX754ceZ9sJeWZk="]=a.current})($__dart_deferred_initializers__);