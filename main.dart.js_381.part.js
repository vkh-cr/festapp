((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_381",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,F,L,M,N,O,P,Q,E,R,S,T,U,V,W,G,X,Y,B={
d8G(d,e){return new B.zu(e,d)},
zu:function zu(d,e){this.c=d
this.a=e},
aOB:function aOB(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
cb_:function cb_(d,e){this.a=d
this.b=e},
cb6:function cb6(d,e){this.a=d
this.b=e},
cb7:function cb7(d,e){this.a=d
this.b=e},
cb4:function cb4(d){this.a=d},
cb3:function cb3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cb2:function cb2(d,e,f){this.a=d
this.b=e
this.c=f},
cb0:function cb0(d,e){this.a=d
this.b=e},
cb1:function cb1(){},
cb5:function cb5(d,e){this.a=d
this.b=e},
wd:function wd(d,e){this.a=d
this.b=e},
d8F(d){return A.cLy(d)},
Hq(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$Hq=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:n=$.Bg()
m=n.bU("news").hA(0,"id")
l=d.a
l.toString
v=d.d
m=A.lZ(m.p5(m.q8("created_at","lt."+l.j(0))),m.$ti.c).aGe("id",v)
l=A.di()
l.toString
x=2
return A.d(m.cD("occasion",l).bMu(0,"created_at").aFw(1).Qm(),$async$Hq)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.bU("user_news").hA(0,"user").cD("news_id",v),$async$Hq)
case 6:t=f
s=A.a([],y.t)
for(n=J.aL(t),m=y.N,l=y.z,r=J.a2(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.fT
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.A(["user",q,"news_id",p,"occasion",o],m,l))}n=$.Bg()
x=7
return A.d(n.bU("user_news").agL(s),$async$Hq)
case 7:x=4
break
case 5:x=8
return A.d(n.bU("user_news").iP(0).cD("news_id",v),$async$Hq)
case 8:case 4:x=9
return A.d(n.bU("news").iP(0).cD("id",v),$async$Hq)
case 9:return A.i(null,w)}})
return A.j($async$Hq,w)},
b8u(d){var x=0,w=A.k(y.H),v
var $async$b8u=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.Bg().bU("news").eT(0,A.A(["message",d.b],v,v)).cD("id",d.d),$async$b8u)
case 2:return A.i(null,w)}})
return A.j($async$b8u,w)},
ap9(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$ap9=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Bg().bU("news")
s=A.di()
s.toString
x=5
return A.d(t.jp(0,A.A(["occasion",s,"message",u,"created_by",$.dO().gdu().c.a],y.N,y.K)).iv(0),$async$ap9)
case 5:case 4:x=i?6:7
break
case 6:for(t=F.Xj(K.Xh(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.S)(t),++q){p=new A.da("")
new F.aJO(p).bn(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.br(o).length===0)continue
r+=o}r=C.e.br(r)
t=$.Bg().bU("log_notifications")
s=A.di()
s.toString
x=8
return A.d(t.jp(0,A.A(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$ap9)
case 8:A.bI(d,A.u("Message has been sent.",null),C.a8)
x=1
break
case 7:if(h)A.bI(d,A.u("Message has been created.",null),C.a8)
case 1:return A.i(v,w)}})
return A.j($async$ap9,w)},
apa(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$apa=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.dO()
if(s.gdu().d==null)A.a7(A.cP("User must be logged in."))
v=$.Bg()
u=v.bU("user_news").iP(0).cD("user",s.gdu().c.a)
t=A.di()
t.toString
x=2
return A.d(u.cD("occasion",t),$async$apa)
case 2:x=3
return A.d(v.bU("user_news").jp(0,A.A(["user",s.gdu().c.a,"news_id",d,"occasion",A.di()],y.N,y.X)).iv(0),$async$apa)
case 3:return A.i(null,w)}})
return A.j($async$apa,w)}},D,Z,A_,A0,A1,A2,A3
J=c[1]
A=c[0]
C=c[2]
H=c[207]
I=c[214]
K=c[131]
F=c[178]
L=c[265]
M=c[301]
N=c[231]
O=c[274]
P=c[220]
Q=c[253]
E=c[210]
R=c[360]
S=c[232]
T=c[217]
U=c[148]
V=c[110]
W=c[368]
G=c[128]
X=c[335]
Y=c[120]
B=a.updateHolder(c[19],B)
D=c[382]
Z=c[118]
A_=c[164]
A0=c[228]
A1=c[229]
A2=c[169]
A3=c[208]
B.zu.prototype={
M(){return new B.aOB(A.a([],y.o))}}
B.aOB.prototype={
U(){this.af()
this.aZ()},
l(){this.ag()},
aV(){this.c6()
this.LG()},
LG(){var x=0,w=A.k(y.H),v=this,u
var $async$LG=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Du(u,null,y.X)
x=(u==null?null:u.grW())===!0&&!v.e?2:3
break
case 2:x=$.dO().gdu().d!=null&&J.jk(v.d)&&!J.hu(v.d).f?4:5
break
case 4:x=6
return A.d(B.apa(J.hu(v.d).d),$async$LG)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$LG,w)},
bqa(d){H.iQ(d,"newsForm",y.X).aI(new B.cb_(this,d),y.P)},
a_F(){var x=0,w=A.k(y.H),v=this,u
var $async$a_F=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a_5(),$async$a_F)
case 2:v.A(new u.cb6(v,e))
return A.i(null,w)}})
return A.j($async$a_F,w)},
o2(){var x=0,w=A.k(y.H),v=this,u
var $async$o2=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A_.lX("newsOffline",B.drT(),y.x),$async$o2)
case 2:v.A(new u.cb7(v,e))
return A.i(null,w)}})
return A.j($async$o2,w)},
aZ(){var x=0,w=A.k(y.H),v=this
var $async$aZ=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.o2(),$async$aZ)
case 2:x=3
return A.d(v.a_F(),$async$aZ)
case 3:x=4
return A.d(A.pt("newsOffline",v.d),$async$aZ)
case 4:v.LG()
return A.i(null,w)}})
return A.j($async$aZ,w)},
B(d){var x,w,v=null,u=A.D(d).ax.a===C.r?$.im():$.q7(),t=A.bm(C.as)
t=A3.io(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new Y.Ke(v,v),v,!0,v,v,v,v,v,E.bo(A.R("News",v,v,v,v,v,v,v,A.aA(v,v,new A.bc(t.a,t.b,t.c,0.8).bi(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v)
x=J.fe(this.d)?new A.a5(R.LA,A.aj(A.a([A.bp(D.auY,A.D(d).ay,v,64),A1.a2,A.R(A.Xn("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.b2,v,v,v,v)],y.p),C.i,C.bb,C.h,v,C.l),v):new Z.DU(new B.cb4(this),v)
w=A.iP()
return T.f_(t,u,new A.cC(C.aN,v,v,new A.cK(new A.ac(0,720,0,1/0),x,v),v),v,v,A.jd(A.a0y(v,W.h0,v,v,!1,new B.cb5(this,d),v),w),v,v)}}
B.wd.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["V<~>(wd)","C<mx<wd>>(K)","uV(B<m,@>)"])
B.cb_.prototype={
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
s=B.ap9(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.c6(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aZ(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:106}
B.cb6.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cb7.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cb4.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.by(x.d);++w){v=A.a([],u)
if(w!==0)v.push(A0.fW)
v.push(new A.eT(new B.cb3(x,w,d,e),null))
C.b.H(t,v)}return A.aj(t,C.bm,C.f,C.h,null,C.l)},
$S:185}
B.cb3.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.bE(x)===A.bE(w)&&A.bN(x)===A.bN(w)&&A.cG(x)===A.cG(w)}else v=!1
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
w.push(A.ax(L.ip,A.R(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.ary,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.aA(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aA(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a5(M.fY,A.R(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.c2(10)
o=A.D(d)
t=n.b
t.toString
t=A2.iu(q,18,t,!0,r.d,r.c)
s=$.dO().gdu().d
w.push(new A.a5(Q.oe,A.ax(q,A.aj(A.a([new A.a5(P.aW,t,q),A.jd(new A.a5(C.aC,A.at(A.a([A.bp(D.aux,A.D(d).ay,q,16),N.Gt,A.R(C.c.j(n.e),q,q,q,q,q,q,q,A.aA(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),S.jz],x),C.i,C.dd,C.h,0,q),q),s!=null)],x),C.i,C.f,C.h,q,C.l),C.k,q,q,new A.bi(o.ax.k2,q,q,u,q,q,q,C.P),q,q,q,q,q,q,q,q),q))
if(A.iP())w.push(V.Kg(q,D.avu,new B.cb1(),new B.cb2(p,n,d),y.B))
return A.aj(w,C.bm,C.f,C.h,q,C.l)},
$S:1053}
B.cb2.prototype={
$1(d){return this.aKO(d)},
aKO(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.KM?2:4
break
case 2:x=5
return A.d(B.Hq(t),$async$$1)
case 5:A.bI(s,A.u("Message has been removed.",null),C.a8)
x=3
break
case 4:u=U.qq(A.A(["content",t.b],y.N,y.z),A.di())
x=6
return A.d(I.fk(s,!1).f.iq(u,y.X).aI(new B.cb0(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aZ(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.cb0.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bf(d)
x=4
return A.d(B.b8u(u),$async$$1)
case 4:A.bI(v.b,A.u("Message has been changed.",null),C.a8)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:106}
B.cb1.prototype={
$1(d){var x=y.B
return A.a([G.v2(E.bo(O.zf,null),!0,48,D.aoW,x),G.v2(E.bo(D.bEY,null),!0,48,D.KM,x)],y.h)},
$S:z+1}
B.cb5.prototype={
$0(){return this.a.bqa(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"drT","d8F",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.zu,A.I)
x(B.aOB,A.M)
w(A.bG,[B.cb_,B.cb3,B.cb2,B.cb0,B.cb1])
w(A.cf,[B.cb6,B.cb7,B.cb5])
x(B.cb4,A.dw)
x(B.wd,A.dW)})()
A.bj(b.typeUniverse,JSON.parse('{"zu":{"I":[],"e":[]},"aOB":{"M":["zu"]}}'))
var y=(function rtii(){var x=A.y
return{B:x("wd"),_:x("V<@>"),t:x("r<B<m,@>>"),o:x("r<uV>"),h:x("r<mx<wd>>"),p:x("r<e>"),a:x("B<m,@>"),x:x("uV"),P:x("aB"),K:x("E"),N:x("m"),g:x("k9"),z:x("@"),X:x("E?"),H:x("~")}})();(function constants(){D.KM=new B.wd(0,"delete")
D.aoW=new B.wd(1,"edit")
D.ary=new A.ap(16,8,16,0)
D.aux=new A.aE(58652,"MaterialIcons",null,!1)
D.auY=new A.aE(61075,"MaterialIcons",null,!1)
D.avu=new A.dc(X.MK,null,null,null,null)
D.bEY=new A.cj("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_381",e:"endPart",h:b})})($__dart_deferred_initializers__,"ON8qYiX6HGCH546GV0ckqp89/fc=");