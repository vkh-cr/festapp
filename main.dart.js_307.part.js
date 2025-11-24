((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,F,M,E,N,O,P,Q,R,S,T,U,G,V,H,B={
dHl(d,e){return new B.Go(e,d)},
Go:function Go(d,e){this.c=d
this.a=e},
aX0:function aX0(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
cB_:function cB_(d){this.a=d},
cAT:function cAT(d,e){this.a=d
this.b=e},
cB0:function cB0(d,e){this.a=d
this.b=e},
cB1:function cB1(d,e){this.a=d
this.b=e},
cAY:function cAY(d){this.a=d},
cAX:function cAX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cAW:function cAW(d,e,f){this.a=d
this.b=e
this.c=f},
cAU:function cAU(d,e){this.a=d
this.b=e},
cAV:function cAV(){},
cAZ:function cAZ(d,e){this.a=d
this.b=e},
yh:function yh(d,e){this.a=d
this.b=e},
dHk(d){return A.dhz(d)},
Kl(d){var x=0,w=A.n(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$Kl=A.i(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.DW()
m=n.cp("news").kQ(0,"id")
l=d.d
m=A.nf(m.q9(m.r4("created_at","lt."+d.a.j(0))),m.$ti.c).aOY("id",l)
v=A.da()
v.toString
x=2
return A.d(m.dT("occasion",v).c13(0,"created_at").aOd(1).a3T(),$async$Kl)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.cp("user_news").kQ(0,"user").dT("news_id",l),$async$Kl)
case 6:t=f
s=A.b([],y.t)
for(n=J.aF(t),m=y.N,v=y.z,r=J.a2(u);n.t();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.dY().a
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.w(["user",q,"news_id",p,"occasion",o],m,v))}n=$.DW()
x=7
return A.d(n.cp("user_news").amx(s),$async$Kl)
case 7:x=4
break
case 5:x=8
return A.d(n.cp("user_news").jp(0).dT("news_id",l),$async$Kl)
case 8:case 4:x=9
return A.d(n.cp("news").jp(0).dT("id",l),$async$Kl)
case 9:return A.l(null,w)}})
return A.m($async$Kl,w)},
bkr(d){var x=0,w=A.n(y.H),v
var $async$bkr=A.i(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:v=y.z
x=2
return A.d($.DW().cp("news").f_(0,A.w(["message",d.b],v,v)).dT("id",d.d),$async$bkr)
case 2:return A.l(null,w)}})
return A.m($async$bkr,w)},
aw5(d,e,f,g,h,i,j){var x=0,w=A.n(y.z),v,u,t,s,r,q,p,o
var $async$aw5=A.i(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.DW().cp("news")
s=A.da()
s.toString
r=$.e8().ge4().c
x=5
return A.d(t.ij(0,A.w(["occasion",s,"message",u,"created_by",(r==null?null:r.r).a],y.N,y.K)).j_(0),$async$aw5)
case 5:case 4:x=i?6:7
break
case 6:for(t=I.R3(A1.R0(g),"p"),s=t.length,q="",p=0;p<t.length;t.length===s||(0,A.K)(t),++p){r=new A.dv("")
new I.aRJ(r).bt(t[p])
r=r.a
o=(r.charCodeAt(0)==0?r:r)+"\n"
if(C.d.be(o).length===0)continue
q+=o}q=C.d.be(q)
t=$.DW().cp("log_notifications")
s=A.da()
s.toString
x=8
return A.d(t.ij(0,A.w(["occasion",s,"to",j,"content",q,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$aw5)
case 8:A.b5(d,A.f("Message has been sent.",null,null),C.Z)
x=1
break
case 7:if(h)A.b5(d,A.f("Message has been created.",null,null),C.Z)
case 1:return A.l(v,w)}})
return A.m($async$aw5,w)},
aw6(d){var x=0,w=A.n(y.H),v,u,t,s
var $async$aw6=A.i(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=$.e8()
if(s.ge4().c==null)A.aa(A.cT("User must be logged in."))
v=$.DW()
u=v.cp("user_news").jp(0)
t=s.ge4().c
u=u.dT("user",(t==null?null:t.r).a)
t=A.da()
t.toString
x=2
return A.d(u.dT("occasion",t),$async$aw6)
case 2:v=v.cp("user_news")
s=s.ge4().c
x=3
return A.d(v.ij(0,A.w(["user",(s==null?null:s.r).a,"news_id",d,"occasion",A.da()],y.N,y.X)).j_(0),$async$aw6)
case 3:return A.l(null,w)}})
return A.m($async$aw6,w)}},D,W,X,Y,Z,I,A_,A0,A1,A2,A3
J=c[1]
A=c[0]
C=c[2]
K=c[175]
L=c[165]
F=c[120]
M=c[168]
E=c[167]
N=c[233]
O=c[237]
P=c[83]
Q=c[235]
R=c[130]
S=c[114]
T=c[178]
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
A0=c[151]
A1=c[128]
A2=c[145]
A3=c[171]
B.Go.prototype={
K(){return new B.aX0(A.b([],y.o))}}
B.aX0.prototype={
T(){var x,w=this
w.a7()
x=w.c
x.toString
H.xe(x,!1).f.Y(0,new B.cB_(w))
w.aX()},
l(){this.ab()},
NN(){var x=0,w=A.n(y.H),v=this,u
var $async$NN=A.i(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
u=A.Gh(u,null,y.X)
x=(u==null?null:u.gpN())===!0&&!v.e?2:3
break
case 2:x=$.e8().ge4().c!=null&&J.fw(v.d)&&!J.h5(v.d).f?4:5
break
case 4:x=6
return A.d(B.aw6(J.h5(v.d).d),$async$NN)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.l(null,w)}})
return A.m($async$NN,w)},
bDV(d){L.hP(d,"newsForm",y.X).aN(new B.cAT(this,d),y.P)},
a3I(){var x=0,w=A.n(y.H),v=this,u
var $async$a3I=A.i(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=B
x=2
return A.d(A.a3A(),$async$a3I)
case 2:v.q(new u.cB0(v,e))
return A.l(null,w)}})
return A.m($async$a3I,w)},
a3J(){var x=0,w=A.n(y.H),v=this,u
var $async$a3J=A.i(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=B
x=2
return A.d(A0.m_("newsOffline",B.e16(),y.x),$async$a3J)
case 2:v.q(new u.cB1(v,e))
return A.l(null,w)}})
return A.m($async$a3J,w)},
aX(){var x=0,w=A.n(y.H),v=this
var $async$aX=A.i(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=2
return A.d(v.a3J(),$async$aX)
case 2:x=3
return A.d(v.a3I(),$async$aX)
case 3:x=4
return A.d(A.oQ("newsOffline",v.d,y.x),$async$aX)
case 4:v.NN()
return A.l(null,w)}})
return A.m($async$aX,w)},
A(d){var x,w,v=null,u=A.z(d).ax.a===C.r?$.hy():$.mX(),t=A.bQ(C.aq)
t=Z.ix(v,v,v,!0,!0,v,v,1,v,v,v,!1,v,!1,v,v,new V.Ng(v,v),v,!0,v,v,v,v,v,E.ca(A.C("News",v,v,v,v,v,v,v,A.ad(v,v,new A.bJ(t.a,t.b,t.c,0.8).bu(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eY(this.d)?new A.U(N.P5,A.a9(A.b([A.aB(G.FO,A.z(d).ay,v,64),C.Y,A.C(A.b6K("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.aJ,v,v,v,v)],y.p),C.i,C.bh,C.h,0,v,C.l),v):new A2.GK(new B.cAY(this),v)
w=A.ib()
return X.eR(t,u,new A.cy(C.aU,v,v,new A.ct(new A.ac(0,720,0,1/0),x,v),v),v,A.jC(S.a54(v,Q.h0,v,T.t4,new B.cAZ(this,d),v),!1,!1,!1,!1,w),v,v)}}
B.yh.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["W<~>(yh)","E<nX<yh>>(F)","wH(y<h,@>)"])
B.cB_.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.i(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.a
t=u.c
t.toString
if(H.xe(t,!1).f.ga0q()===C.b.du($.Re(),"news")){u.NN()
u.aX()}return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
B.cAT.prototype={
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
s=B.aw5(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.bY(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aX(),$async$$1)
case 7:case 6:case 3:return A.l(null,w)}})
return A.m($async$$1,w)},
$S:124}
B.cB0.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cB1.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cAY.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.b([],u)
for(x=this.a,w=0;w<J.bo(x.d);++w){v=A.b([],u)
if(w!==0)v.push(C.dN)
v.push(new A.dS(new B.cAX(x,w,d,e),null))
C.b.F(t,v)}return A.a9(t,C.bo,C.f,C.h,0,null,C.l)},
$S:305}
B.cAX.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.ec(x)===A.ec(w)&&A.fd(x)===A.fd(w)&&A.je(x)===A.je(w)}else v=!1
x=y.p
w=A.b([],x)
if(o===0||!v){o=d.ag(y.g).r.a
o===$&&A.a()
o=A.h1("EEEE d.M.y",o.gf7(0))
u=n.a
u.toString
u=o.cj(u)
if(n.f){o=p.c
o.toString
o=A.ad(q,q,A.z(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.ad(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.an(W.jv,A.C(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,G.OV,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.ad(q,q,A.z(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.ad(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.U(A_.et,A.C(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.b3(10)
o=A.z(d)
t=n.b
t.toString
t=Y.hB(q,18,t,!0,r.d,r.c)
s=$.e8().ge4().c
w.push(new A.U(C.pJ,A.an(q,A.a9(A.b([new A.U(A3.aW,t,q),A.jC(new A.U(C.ai,A.ae(A.b([A.aB(D.aAp,A.z(d).ay,q,16),K.jj,A.C(C.c.j(n.e),q,q,q,q,q,q,q,A.ad(q,q,A.z(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.hN],x),C.i,q,C.cn,C.h,0,q),q),!1,!1,!1,!1,s!=null)],x),C.i,C.f,C.h,0,q,C.l),C.k,q,q,new A.b8(o.ax.k2,q,q,u,q,q,q,C.P),q,q,q,q,q,q,q,q),q))
if(A.ib())w.push(P.pU(q,q,q,!0,D.aBS,new B.cAV(),C.t,new B.cAW(p,n,d),C.ai,q,q,q,y.B))
return A.a9(w,C.bo,C.f,C.h,0,q,C.l)},
$S:1422}
B.cAW.prototype={
$1(d){return this.aU_(d)},
aU_(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$$1=A.i(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=v.b
s=v.c
x=d===D.O7?2:4
break
case 2:x=5
return A.d(B.Kl(t),$async$$1)
case 5:A.b5(s,A.f("Message has been removed.",null,null),C.Z)
x=3
break
case 4:u=R.pB(A.w(["content",t.b],y.N,y.z),A.da())
x=6
return A.d(M.fs(s,!1).f.i9(u,y.X).aN(new B.cAU(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aX(),$async$$1)
case 7:return A.l(null,w)}})
return A.m($async$$1,w)},
$S:z+0}
B.cAU.prototype={
$1(d){var x=0,w=A.n(y.P),v=this,u
var $async$$1=A.i(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bf(d)
x=4
return A.d(B.bkr(u),$async$$1)
case 4:A.b5(v.b,A.f("Message has been changed.",null,null),C.Z)
case 3:return A.l(null,w)}})
return A.m($async$$1,w)},
$S:124}
B.cAV.prototype={
$1(d){var x=y.B
return A.b([F.l1(E.ca(U.Kr,null),!0,48,D.aur,x),F.l1(E.ca(D.bJn,null),!0,48,D.O7,x)],y.h)},
$S:z+1}
B.cAZ.prototype={
$0(){return this.a.bDV(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"e16","dHk",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Go,A.L)
x(B.aX0,A.N)
w(A.d2,[B.cB_,B.cB0,B.cB1,B.cAZ])
w(A.cp,[B.cAT,B.cAX,B.cAW,B.cAU,B.cAV])
x(B.cAY,A.ee)
x(B.yh,A.fP)})()
A.cf(b.typeUniverse,JSON.parse('{"Go":{"L":[],"e":[]},"aX0":{"N":["Go"]}}'))
var y=(function rtii(){var x=A.J
return{B:x("yh"),_:x("W<@>"),t:x("u<y<h,@>>"),o:x("u<wH>"),h:x("u<nX<yh>>"),p:x("u<e>"),a:x("y<h,@>"),x:x("wH"),P:x("aI"),K:x("H"),N:x("h"),g:x("lE"),z:x("@"),X:x("H?"),H:x("~")}})();(function constants(){D.O7=new B.yh(0,"delete")
D.aur=new B.yh(1,"edit")
D.aAp=new A.at(58652,"MaterialIcons",null,!1)
D.aBS=new A.cu(O.Qh,null,null,null,null)
D.bJn=new A.ch("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["nMdAZ07SP7RoCHBbjdXihrRyK+A="]=a.current})($__dart_deferred_initializers__);