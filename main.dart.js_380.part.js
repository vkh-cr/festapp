((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_380",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,F,L,M,N,O,P,Q,E,R,S,T,U,V,W,G,X,Y,B={
d8T(d,e){return new B.zw(e,d)},
zw:function zw(d,e){this.c=d
this.a=e},
aOC:function aOC(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
cb6:function cb6(d,e){this.a=d
this.b=e},
cbd:function cbd(d,e){this.a=d
this.b=e},
cbe:function cbe(d,e){this.a=d
this.b=e},
cbb:function cbb(d){this.a=d},
cba:function cba(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cb9:function cb9(d,e,f){this.a=d
this.b=e
this.c=f},
cb7:function cb7(d,e){this.a=d
this.b=e},
cb8:function cb8(){},
cbc:function cbc(d,e){this.a=d
this.b=e},
wg:function wg(d,e){this.a=d
this.b=e},
d8S(d){return A.cLL(d)},
Hy(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$Hy=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:n=$.Bj()
m=n.bU("news").hA(0,"id")
l=d.a
l.toString
v=d.d
m=A.lZ(m.p5(m.q9("created_at","lt."+l.j(0))),m.$ti.c).aGf("id",v)
l=A.dh()
l.toString
x=2
return A.d(m.cD("occasion",l).bMy(0,"created_at").aFx(1).Qm(),$async$Hy)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.bU("user_news").hA(0,"user").cD("news_id",v),$async$Hy)
case 6:t=f
s=A.a([],y.t)
for(n=J.aL(t),m=y.N,l=y.z,r=J.a2(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.fT
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.A(["user",q,"news_id",p,"occasion",o],m,l))}n=$.Bj()
x=7
return A.d(n.bU("user_news").agM(s),$async$Hy)
case 7:x=4
break
case 5:x=8
return A.d(n.bU("user_news").iP(0).cD("news_id",v),$async$Hy)
case 8:case 4:x=9
return A.d(n.bU("news").iP(0).cD("id",v),$async$Hy)
case 9:return A.i(null,w)}})
return A.j($async$Hy,w)},
b8v(d){var x=0,w=A.k(y.H),v
var $async$b8v=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.Bj().bU("news").eT(0,A.A(["message",d.b],v,v)).cD("id",d.d),$async$b8v)
case 2:return A.i(null,w)}})
return A.j($async$b8v,w)},
apa(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$apa=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Bj().bU("news")
s=A.dh()
s.toString
x=5
return A.d(t.jp(0,A.A(["occasion",s,"message",u,"created_by",$.dI().gdu().c.a],y.N,y.K)).iv(0),$async$apa)
case 5:case 4:x=i?6:7
break
case 6:for(t=F.Xl(K.Xj(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.S)(t),++q){p=new A.db("")
new F.aJP(p).bn(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.br(o).length===0)continue
r+=o}r=C.e.br(r)
t=$.Bj().bU("log_notifications")
s=A.dh()
s.toString
x=8
return A.d(t.jp(0,A.A(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$apa)
case 8:A.bH(d,A.t("Message has been sent.",null),C.a8)
x=1
break
case 7:if(h)A.bH(d,A.t("Message has been created.",null),C.a8)
case 1:return A.i(v,w)}})
return A.j($async$apa,w)},
apb(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$apb=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.dI()
if(s.gdu().d==null)A.a7(A.cP("User must be logged in."))
v=$.Bj()
u=v.bU("user_news").iP(0).cD("user",s.gdu().c.a)
t=A.dh()
t.toString
x=2
return A.d(u.cD("occasion",t),$async$apb)
case 2:x=3
return A.d(v.bU("user_news").jp(0,A.A(["user",s.gdu().c.a,"news_id",d,"occasion",A.dh()],y.N,y.X)).iv(0),$async$apb)
case 3:return A.i(null,w)}})
return A.j($async$apb,w)}},D,Z,A_,A0,A1,A2,A3
J=c[1]
A=c[0]
C=c[2]
H=c[206]
I=c[213]
K=c[130]
F=c[177]
L=c[264]
M=c[300]
N=c[230]
O=c[273]
P=c[219]
Q=c[252]
E=c[209]
R=c[359]
S=c[231]
T=c[216]
U=c[147]
V=c[109]
W=c[367]
G=c[127]
X=c[334]
Y=c[119]
B=a.updateHolder(c[19],B)
D=c[382]
Z=c[117]
A_=c[163]
A0=c[227]
A1=c[228]
A2=c[168]
A3=c[207]
B.zw.prototype={
M(){return new B.aOC(A.a([],y.o))}}
B.aOC.prototype={
U(){this.af()
this.aZ()},
l(){this.ag()},
aV(){this.c6()
this.LG()},
LG(){var x=0,w=A.k(y.H),v=this,u
var $async$LG=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Dz(u,null,y.X)
x=(u==null?null:u.grW())===!0&&!v.e?2:3
break
case 2:x=$.dI().gdu().d!=null&&J.jl(v.d)&&!J.hu(v.d).f?4:5
break
case 4:x=6
return A.d(B.apb(J.hu(v.d).d),$async$LG)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$LG,w)},
bqd(d){H.iQ(d,"newsForm",y.X).aI(new B.cb6(this,d),y.P)},
a_G(){var x=0,w=A.k(y.H),v=this,u
var $async$a_G=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a_5(),$async$a_G)
case 2:v.A(new u.cbd(v,e))
return A.i(null,w)}})
return A.j($async$a_G,w)},
o2(){var x=0,w=A.k(y.H),v=this,u
var $async$o2=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A_.lX("newsOffline",B.ds5(),y.x),$async$o2)
case 2:v.A(new u.cbe(v,e))
return A.i(null,w)}})
return A.j($async$o2,w)},
aZ(){var x=0,w=A.k(y.H),v=this
var $async$aZ=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.o2(),$async$aZ)
case 2:x=3
return A.d(v.a_G(),$async$aZ)
case 3:x=4
return A.d(A.pt("newsOffline",v.d),$async$aZ)
case 4:v.LG()
return A.i(null,w)}})
return A.j($async$aZ,w)},
B(d){var x,w,v=null,u=A.D(d).ax.a===C.p?$.i1():$.q8(),t=A.bm(C.as)
t=A3.ip(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new Y.Kj(v,v),v,!0,v,v,v,v,v,E.bp(A.R("News",v,v,v,v,v,v,v,A.aA(v,v,new A.be(t.a,t.b,t.c,0.8).bi(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v)
x=J.ff(this.d)?new A.a5(R.Lz,A.aj(A.a([A.bn(D.auY,A.D(d).ay,v,64),A1.a2,A.R(A.Xp("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.b2,v,v,v,v)],y.p),C.i,C.bg,C.h,v,C.l),v):new Z.DZ(new B.cbb(this),v)
w=A.iP()
return T.f_(t,u,new A.cC(C.aN,v,v,new A.cI(new A.ac(0,720,0,1/0),x,v),v),v,v,A.je(A.a0y(v,W.h1,v,v,!1,new B.cbc(this,d),v),w),v,v)}}
B.wg.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["V<~>(wg)","C<my<wg>>(K)","uY(B<m,@>)"])
B.cb6.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
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
s=B.apa(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.c7(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aZ(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:106}
B.cbd.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cbe.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cbb.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bz(x.d);++w){v=A.a([],u)
if(w!==0)v.push(A0.fX)
v.push(new A.eU(new B.cba(x,w,d,e),null))
C.b.H(t,v)}return A.aj(t,C.bm,C.f,C.h,null,C.l)},
$S:192}
B.cba.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.bC(x)===A.bC(w)&&A.bI(x)===A.bI(w)&&A.cG(x)===A.cG(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.ab(y.g).r.a
o===$&&A.b()
o=A.hO("EEEE d.M.y",o.gfa(0))
u=n.a
u.toString
u=o.dr(u)
if(n.f){o=p.c
o.toString
o=A.aA(q,q,A.D(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.aA(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ax(L.ir,A.R(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.arA,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.aA(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aA(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a5(M.fZ,A.R(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.c2(10)
o=A.D(d)
t=n.b
t.toString
t=A2.iu(q,18,t,!0,r.d,r.c)
s=$.dI().gdu().d
w.push(new A.a5(Q.C2,A.ax(q,A.aj(A.a([new A.a5(P.aW,t,q),A.je(new A.a5(C.aC,A.at(A.a([A.bn(D.aux,A.D(d).ay,q,16),N.Gs,A.R(C.c.j(n.e),q,q,q,q,q,q,q,A.aA(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),S.jz],x),C.i,C.dd,C.h,0,q),q),s!=null)],x),C.i,C.f,C.h,q,C.l),C.k,q,q,new A.bi(o.ax.k2,q,q,u,q,q,q,C.N),q,q,q,q,q,q,q,q),q))
if(A.iP())w.push(V.Kl(q,D.avu,new B.cb8(),new B.cb9(p,n,d),y.B))
return A.aj(w,C.bm,C.f,C.h,q,C.l)},
$S:1054}
B.cb9.prototype={
$1(d){return this.aKP(d)},
aKP(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.KL?2:4
break
case 2:x=5
return A.d(B.Hy(t),$async$$1)
case 5:A.bH(s,A.t("Message has been removed.",null),C.a8)
x=3
break
case 4:u=U.qr(A.A(["content",t.b],y.N,y.z),A.dh())
x=6
return A.d(I.fl(s,!1).f.iq(u,y.X).aI(new B.cb7(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aZ(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.cb7.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bg(d)
x=4
return A.d(B.b8v(u),$async$$1)
case 4:A.bH(v.b,A.t("Message has been changed.",null),C.a8)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:106}
B.cb8.prototype={
$1(d){var x=y.B
return A.a([G.v5(E.bp(O.zd,null),!0,48,D.aoY,x),G.v5(E.bp(D.bF_,null),!0,48,D.KL,x)],y.h)},
$S:z+1}
B.cbc.prototype={
$0(){return this.a.bqd(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"ds5","d8S",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.zw,A.I)
x(B.aOC,A.M)
w(A.bG,[B.cb6,B.cba,B.cb9,B.cb7,B.cb8])
w(A.ch,[B.cbd,B.cbe,B.cbc])
x(B.cbb,A.dA)
x(B.wg,A.dW)})()
A.bl(b.typeUniverse,JSON.parse('{"zw":{"I":[],"e":[]},"aOC":{"M":["zw"]}}'))
var y=(function rtii(){var x=A.y
return{B:x("wg"),_:x("V<@>"),t:x("r<B<m,@>>"),o:x("r<uY>"),h:x("r<my<wg>>"),p:x("r<e>"),a:x("B<m,@>"),x:x("uY"),P:x("aB"),K:x("E"),N:x("m"),g:x("ka"),z:x("@"),X:x("E?"),H:x("~")}})();(function constants(){D.KL=new B.wg(0,"delete")
D.aoY=new B.wg(1,"edit")
D.arA=new A.ap(16,8,16,0)
D.aux=new A.aE(58652,"MaterialIcons",null,!1)
D.auY=new A.aE(61075,"MaterialIcons",null,!1)
D.avu=new A.dd(X.ML,null,null,null,null)
D.bF_=new A.cj("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_380",e:"endPart",h:b})})($__dart_deferred_initializers__,"mS27uhxhPzYKuCfgqKOrCsbt9yM=");