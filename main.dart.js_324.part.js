((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,M,F,E,N,O,P,Q,R,S,T,G,H,U,V,W,X,B={
eDY(d,e){return new B.a72(e,d)},
a72:function a72(d,e){this.c=d
this.a=e},
boi:function boi(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
d5c:function d5c(d){this.a=d},
d55:function d55(d,e){this.a=d
this.b=e},
d5d:function d5d(d,e){this.a=d
this.b=e},
d5e:function d5e(d,e){this.a=d
this.b=e},
d5a:function d5a(d){this.a=d},
d59:function d59(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d58:function d58(d,e,f){this.a=d
this.b=e
this.c=f},
d56:function d56(d,e){this.a=d
this.b=e},
d57:function d57(){},
d5b:function d5b(d,e){this.a=d
this.b=e},
ZM:function ZM(d,e){this.a=d
this.b=e},
aaW(d){var x=0,w=A.p(y.H),v,u,t,s,r,q,p,o,n,m,l,k
var $async$aaW=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:l=$.a4A()
k=l.cD("news").ly(0,"id")
k=A.PD(k.qd(k.ra("created_at","lt."+d.a.j(0))),k.$ti.c)
v=d.d
u=k.ra("id","neq."+v)
k=A.PD(k.qd(u),k.$ti.c)
t=A.dj()
t.toString
x=2
return A.f(k.eb("occasion",t).c2Q(0,"created_at").aPn(1).a4p(),$async$aaW)
case 2:s=f
x=s!=null?3:5
break
case 3:x=6
return A.f(l.cD("user_news").ly(0,"user").eb("news_id",v),$async$aaW)
case 6:r=f
q=A.c([],y.t)
for(l=J.aM(r),k=y.N,t=y.z,p=J.a4(s);l.t();){o=J.y(l.gM(l),"user")
n=p.h(s,"id")
m=$.dZ().a
if(m==null)m=null
else{m=m.b
m=m==null?null:m.a}m.toString
q.push(A.d(["user",o,"news_id",n,"occasion",m],k,t))}l=$.a4A()
x=7
return A.f(l.cD("user_news").anc(q),$async$aaW)
case 7:x=4
break
case 5:x=8
return A.f(l.cD("user_news").jz(0).eb("news_id",v),$async$aaW)
case 8:case 4:x=9
return A.f(l.cD("news").jz(0).eb("id",v),$async$aaW)
case 9:return A.n(null,w)}})
return A.o($async$aaW,w)},
bN_(d){var x=0,w=A.p(y.H),v
var $async$bN_=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:v=y.z
x=2
return A.f($.a4A().cD("news").f0(0,A.d(["message",d.b],v,v)).eb("id",d.d),$async$bN_)
case 2:return A.n(null,w)}})
return A.o($async$bN_,w)},
aYe(d,e,f,g,h,i,j){var x=0,w=A.p(y.z),v,u,t,s,r,q,p,o
var $async$aYe=A.l(function(k,l){if(k===1)return A.m(l,w)
for(;;)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.a4A().cD("news")
s=A.dj()
s.toString
r=$.ea().ge0().c
x=5
return A.f(t.ix(0,A.d(["occasion",s,"message",u,"created_by",(r==null?null:r.r).a],y.N,y.K)).jm(0),$async$aYe)
case 5:case 4:x=i?6:7
break
case 6:for(t=I.ahM(A1.ahJ(g),"p"),s=t.length,q="",p=0;p<t.length;t.length===s||(0,A.O)(t),++p){r=new A.dz("")
new I.bj0(r).bu(t[p])
r=r.a
o=(r.charCodeAt(0)==0?r:r)+"\n"
if(C.e.bb(o).length===0)continue
q+=o}q=C.e.bb(q)
t=$.a4A().cD("log_notifications")
s=A.dj()
s.toString
x=8
return A.f(t.ix(0,A.d(["occasion",s,"to",j,"content",q,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$aYe)
case 8:A.aY(d,A.j("Message has been sent.",null,null),C.ad)
x=1
break
case 7:if(h)A.aY(d,A.j("Message has been created.",null,null),C.ad)
case 1:return A.n(v,w)}})
return A.o($async$aYe,w)},
aYf(d){var x=0,w=A.p(y.H),v,u,t,s
var $async$aYf=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:s=$.ea()
if(s.ge0().c==null)A.ad(A.cA("User must be logged in."))
v=$.a4A()
u=v.cD("user_news").jz(0)
t=s.ge0().c
u=u.eb("user",(t==null?null:t.r).a)
t=A.dj()
t.toString
x=2
return A.f(u.eb("occasion",t),$async$aYf)
case 2:v=v.cD("user_news")
s=s.ge0().c
x=3
return A.f(v.ix(0,A.d(["user",(s==null?null:s.r).a,"news_id",d,"occasion",A.dj()],y.N,y.X)).jm(0),$async$aYf)
case 3:return A.n(null,w)}})
return A.o($async$aYf,w)},
eDX(d){return A.dNP(d)}},D,Y,Z,I,A_,A0,A1,A2,A3
J=c[1]
A=c[0]
C=c[2]
K=c[198]
L=c[170]
M=c[171]
F=c[121]
E=c[168]
N=c[139]
O=c[201]
P=c[175]
Q=c[220]
R=c[85]
S=c[239]
T=c[132]
G=c[238]
H=c[112]
U=c[93]
V=c[240]
W=c[172]
X=c[242]
B=a.updateHolder(c[18],B)
D=c[241]
Y=c[157]
Z=c[167]
I=c[161]
A_=c[154]
A0=c[237]
A1=c[127]
A2=c[147]
A3=c[181]
B.a72.prototype={
L(){return new B.boi(A.c([],y.o))}}
B.boi.prototype={
T(){var x,w=this
w.a3()
x=w.c
x.toString
H.YI(x,!1).f.Y(0,new B.d5c(w))
w.aX()},
l(){this.a8()},
O4(){var x=0,w=A.p(y.H),v=this,u
var $async$O4=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
u=A.a6W(u,null,y.X)
x=(u==null?null:u.gpR())===!0&&!v.e?2:3
break
case 2:x=$.ea().ge0().c!=null&&J.fF(v.d)&&!J.he(v.d).f?4:5
break
case 4:x=6
return A.f(B.aYf(J.he(v.d).d),$async$O4)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.n(null,w)}})
return A.o($async$O4,w)},
bFs(d){L.K8(d,"newsForm",y.X).aN(new B.d55(this,d),y.P)},
a4f(){var x=0,w=A.p(y.H),v=this,u
var $async$a4f=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=B
x=2
return A.f(A.avn(),$async$a4f)
case 2:v.q(new u.d5d(v,e))
return A.n(null,w)}})
return A.o($async$a4f,w)},
a4g(){var x=0,w=A.p(y.H),v=this,u
var $async$a4g=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=B
x=2
return A.f(A_.Om("newsOffline",B.eYP(),y.x),$async$a4g)
case 2:v.q(new u.d5e(v,e))
return A.n(null,w)}})
return A.o($async$a4g,w)},
aX(){var x=0,w=A.p(y.H),v=this
var $async$aX=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:x=2
return A.f(v.a4g(),$async$aX)
case 2:x=3
return A.f(v.a4f(),$async$aX)
case 3:x=4
return A.f(A.Rg("newsOffline",v.d,y.x),$async$aX)
case 4:v.O4()
return A.n(null,w)}})
return A.o($async$aX,w)},
A(d){var x,w,v=null,u=A.A(d).ax.a===C.A?$.JR():$.Pk(),t=A.bP(C.an)
t=Z.Lm(v,v,v,!0,!0,v,v,1,v,v,v,!1,v,!1,v,v,new U.adR(v,v),v,!0,v,v,v,v,v,E.cz(A.B("News",v,v,v,v,v,v,v,A.ae(v,v,new A.bd(t.a,t.b,t.c,0.8).ap(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.f1(this.d)?new A.U(P.PX,A.a8(A.c([A.aC(G.Gv,A.A(d).ay,v,v,64),C.a8,A.B(A.bz8("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.b4,v,v,v,v)],y.p),C.k,C.bu,C.j,0,v,C.p),v):new A2.a7o(new B.d5a(this),v)
w=A.Mc()
return W.eQ(t,u,new A.co(C.aR,v,v,new A.cp(new A.ah(0,720,0,1/0),x,v),v),v,A.LT(N.abF(v,S.hn,v,v,O.tK,new B.d5b(this,d),v,v),!1,!1,!1,!1,w),v,v,v)}}
B.ZM.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["Z<~>(ZM)","G<Qm<ZM>>(I)","Ye(D<q,@>)"])
B.d5c.prototype={
$0(){var x=0,w=A.p(y.H),v=this,u,t
var $async$$0=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=v.a
t=u.c
t.toString
if(H.YI(t,!1).f.ga10()===C.c.dq($.ahY(),"news")){u.O4()
u.aX()}return A.n(null,w)}})
return A.o($async$$0,w)},
$S:1}
B.d55.prototype={
$1(d){var x=0,w=A.p(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:x=d!=null?2:3
break
case 2:y.a.a(d)
u=J.a4(d)
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
s=B.aYe(v.b,p,u,q,t,s,r)
x=4
return A.f(y._.b(s)?s:A.c1(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.f(v.a.aX(),$async$$1)
case 7:case 6:case 3:return A.n(null,w)}})
return A.o($async$$1,w)},
$S:127}
B.d5d.prototype={
$0(){this.a.d=this.b},
$S:0}
B.d5e.prototype={
$0(){this.a.d=this.b},
$S:0}
B.d5a.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.c([],u)
for(x=this.a,w=0;w<J.bq(x.d);++w){v=A.c([],u)
if(w!==0)v.push(C.cI)
v.push(new A.dT(new B.d59(x,w,d,e),null))
C.c.G(t,v)}return A.a8(t,C.bt,C.i,C.j,0,null,C.p)},
$S:308}
B.d59.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.y(p.d,o),m=o>0?J.y(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.el(x)===A.el(w)&&A.fl(x)===A.fl(w)&&A.Lt(x)===A.Lt(w)}else v=!1
x=y.p
w=A.c([],x)
if(o===0||!v){o=d.ah(y.g).r.a
o===$&&A.b()
o=A.fG("EEEE d.M.y",o.gf8(0))
u=n.a
u.toString
u=o.ci(u)
if(n.f){o=p.c
o.toString
o=A.ae(q,q,A.A(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.U,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.ae(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.U,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.al(V.jZ,A.B(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.q,q,q,q,q,q,q,q,G.PL,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.ae(q,q,A.A(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.U,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.ae(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.U,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.U(A0.ev,A.B(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.aR(10)
o=A.A(d)
t=n.b
t.toString
t=Y.hs(q,18,t,!0,r.d,r.c)
s=$.ea().ge0().c
w.push(new A.U(C.qm,A.al(q,A.a8(A.c([new A.U(A3.aW,t,q),A.LT(new A.U(C.aD,A.af(A.c([A.aC(D.aBQ,A.A(d).ay,q,q,16),K.jO,A.B(C.d.j(n.e),q,q,q,q,q,q,q,A.ae(q,q,A.A(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.U,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.hG],x),C.k,q,C.cE,C.j,0,q),q),!1,!1,!1,!1,s!=null)],x),C.k,C.i,C.j,0,q,C.p),C.q,q,q,new A.b3(o.ax.k2,q,q,u,q,q,q,C.Z),q,q,q,q,q,q,q,q),q))
if(A.Mc())w.push(R.Si(q,q,q,!0,D.aDo,new B.d57(),C.D,new B.d58(p,n,d),C.aD,q,q,q,y.B))
return A.a8(w,C.bt,C.i,C.j,0,q,C.p)},
$S:1433}
B.d58.prototype={
$1(d){return this.aVb(d)},
aVb(d){var x=0,w=A.p(y.H),v=this,u,t,s
var $async$$1=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:t=v.b
s=v.c
x=d===D.P0?2:4
break
case 2:x=5
return A.f(B.aaW(t),$async$$1)
case 5:A.aY(s,A.j("Message has been removed.",null,null),C.ad)
x=3
break
case 4:u=T.S0(A.d(["content",t.b],y.N,y.z),A.dj())
x=6
return A.f(M.fA(s,!1).f.ip(u,y.X).aN(new B.d56(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.f(v.a.aX(),$async$$1)
case 7:return A.n(null,w)}})
return A.o($async$$1,w)},
$S:z+0}
B.d56.prototype={
$1(d){var x=0,w=A.p(y.P),v=this,u
var $async$$1=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bl(d)
x=4
return A.f(B.bN_(u),$async$$1)
case 4:A.aY(v.b,A.j("Message has been changed.",null,null),C.ad)
case 3:return A.n(null,w)}})
return A.o($async$$1,w)},
$S:127}
B.d57.prototype={
$1(d){var x=y.B
return A.c([F.Nk(E.cz(X.agC,null),!0,48,D.avq,x),F.Nk(E.cz(D.bLo,null),!0,48,D.P0,x)],y.h)},
$S:z+1}
B.d5b.prototype={
$0(){return this.a.bFs(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"eYP","eDX",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a72,A.N)
x(B.boi,A.Q)
w(A.d7,[B.d5c,B.d5d,B.d5e,B.d5b])
w(A.cj,[B.d55,B.d59,B.d58,B.d56,B.d57])
x(B.d5a,A.eo)
x(B.ZM,A.h5)})()
A.ci(b.typeUniverse,JSON.parse('{"a72":{"N":[],"k":[]},"boi":{"Q":["a72"]}}'))
var y=(function rtii(){var x=A.M
return{B:x("ZM"),_:x("Z<@>"),t:x("z<D<q,@>>"),o:x("z<Ye>"),h:x("z<Qm<ZM>>"),p:x("z<k>"),a:x("D<q,@>"),x:x("Ye"),P:x("aK"),K:x("L"),N:x("q"),g:x("NZ"),z:x("@"),X:x("L?"),H:x("~")}})();(function constants(){D.P0=new B.ZM(0,"delete")
D.avq=new B.ZM(1,"edit")
D.aBQ=new A.av(58652,"MaterialIcons",null,!1)
D.aDo=new A.c_(Q.R6,null,null,null,null)
D.bLo=new A.ct("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["qRyOcCQRmfYwIuahG1LlUXehpnw="]=a.current})($__dart_deferred_initializers__);