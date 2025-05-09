((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_354",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,O,P,Q,R,F,S,T,U,V,W,X,Y,Z,B={
d82(d,e){return new B.zt(e,d)},
zt:function zt(d,e){this.c=d
this.a=e},
aOr:function aOr(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
caD:function caD(d,e){this.a=d
this.b=e},
caK:function caK(d,e){this.a=d
this.b=e},
caL:function caL(d,e){this.a=d
this.b=e},
caI:function caI(d){this.a=d},
caH:function caH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
caG:function caG(d,e,f){this.a=d
this.b=e
this.c=f},
caE:function caE(d,e){this.a=d
this.b=e},
caF:function caF(){},
caJ:function caJ(d,e){this.a=d
this.b=e},
wc:function wc(d,e){this.a=d
this.b=e},
d81(d){return A.cKZ(d)},
Hk(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$Hk=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:n=$.Bd()
m=n.bU("news").hA(0,"id")
l=d.a
l.toString
v=d.d
m=A.lV(m.p0(m.q7("created_at","lt."+l.j(0))),m.$ti.c).aGe("id",v)
l=A.dh()
l.toString
x=2
return A.d(m.cD("occasion",l).bMk(0,"created_at").aFw(1).Ql(),$async$Hk)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.bU("user_news").hA(0,"user").cD("news_id",v),$async$Hk)
case 6:t=f
s=A.a([],y.t)
for(n=J.aN(t),m=y.N,l=y.z,r=J.a2(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.hg
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],m,l))}n=$.Bd()
x=7
return A.d(n.bU("user_news").agL(s),$async$Hk)
case 7:x=4
break
case 5:x=8
return A.d(n.bU("user_news").iO(0).cD("news_id",v),$async$Hk)
case 8:case 4:x=9
return A.d(n.bU("news").iO(0).cD("id",v),$async$Hk)
case 9:return A.i(null,w)}})
return A.j($async$Hk,w)},
b8k(d){var x=0,w=A.k(y.H),v
var $async$b8k=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.Bd().bU("news").eT(0,A.z(["message",d.b],v,v)).cD("id",d.d),$async$b8k)
case 2:return A.i(null,w)}})
return A.j($async$b8k,w)},
ap1(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$ap1=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Bd().bU("news")
s=A.dh()
s.toString
x=5
return A.d(t.jp(0,A.z(["occasion",s,"message",u,"created_by",$.dT().gdw().c.a],y.N,y.K)).iv(0),$async$ap1)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.Xe(X.Xc(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.T)(t),++q){p=new A.d9("")
new G.aJE(p).bm(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.br(o).length===0)continue
r+=o}r=C.e.br(r)
t=$.Bd().bU("log_notifications")
s=A.dh()
s.toString
x=8
return A.d(t.jp(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$ap1)
case 8:A.bH(d,A.u("Message has been sent.",null),C.a8)
x=1
break
case 7:if(h)A.bH(d,A.u("Message has been created.",null),C.a8)
case 1:return A.i(v,w)}})
return A.j($async$ap1,w)},
ap2(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$ap2=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.dT()
if(s.gdw().d==null)A.a7(A.cP("User must be logged in."))
v=$.Bd()
u=v.bU("user_news").iO(0).cD("user",s.gdw().c.a)
t=A.dh()
t.toString
x=2
return A.d(u.cD("occasion",t),$async$ap2)
case 2:x=3
return A.d(v.bU("user_news").jp(0,A.z(["user",s.gdw().c.a,"news_id",d,"occasion",A.dh()],y.N,y.X)).iv(0),$async$ap2)
case 3:return A.i(null,w)}})
return A.j($async$ap2,w)}},D,A_,A0,E,A1,A2,A3,G
J=c[1]
A=c[0]
C=c[2]
H=c[194]
I=c[215]
K=c[204]
L=c[195]
M=c[207]
N=c[341]
O=c[219]
P=c[144]
Q=c[105]
R=c[349]
F=c[124]
S=c[315]
T=c[156]
U=c[240]
V=c[218]
W=c[260]
X=c[127]
Y=c[216]
Z=c[114]
B=a.updateHolder(c[19],B)
D=c[363]
A_=c[110]
A0=c[245]
E=c[196]
A1=c[287]
A2=c[201]
A3=c[162]
G=c[173]
B.zt.prototype={
M(){return new B.aOr(A.a([],y.o))}}
B.aOr.prototype={
U(){this.af()
this.ba()},
l(){this.ag()},
aV(){this.c6()
this.LG()},
LG(){var x=0,w=A.k(y.H),v=this,u
var $async$LG=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Do(u,null,y.X)
x=(u==null?null:u.grU())===!0&&!v.e?2:3
break
case 2:x=$.dT().gdw().d!=null&&J.jx(v.d)&&!J.hu(v.d).f?4:5
break
case 4:x=6
return A.d(B.ap2(J.hu(v.d).d),$async$LG)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$LG,w)},
bq2(d){H.jE(d,"newsForm",y.X).aN(new B.caD(this,d),y.P)},
a_D(){var x=0,w=A.k(y.H),v=this,u
var $async$a_D=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.ZZ(),$async$a_D)
case 2:v.A(new u.caK(v,e))
return A.i(null,w)}})
return A.j($async$a_D,w)},
xL(){var x=0,w=A.k(y.H),v=this,u
var $async$xL=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(T.mt("newsOffline",B.drc(),y.x),$async$xL)
case 2:v.A(new u.caL(v,e))
return A.i(null,w)}})
return A.j($async$xL,w)},
ba(){var x=0,w=A.k(y.H),v=this
var $async$ba=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.xL(),$async$ba)
case 2:x=3
return A.d(v.a_D(),$async$ba)
case 3:x=4
return A.d(A.qH("newsOffline",v.d),$async$ba)
case 4:v.LG()
return A.i(null,w)}})
return A.j($async$ba,w)},
B(d){var x,w,v=null,u=A.D(d).ax.a===C.t?$.iB():$.q5(),t=A.bB(C.av)
t=L.ik(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new Z.K7(v,v),v,!0,v,v,v,v,v,E.bl(A.S("News",v,v,v,v,v,v,v,A.aA(v,v,new A.bu(t.a,t.b,t.c,0.8).bq(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v)
x=J.fe(this.d)?new A.a5(N.Lw,A.aj(A.a([A.bq(D.auX,A.D(d).ay,v,64),Y.a2,A.S(A.Xj("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.b2,v,v,v,v)],y.p),C.i,C.bg,C.h,v,C.l),v):new A_.DO(new B.caI(this),v)
w=A.j6()
return K.f6(t,u,new A.cC(C.aM,v,v,new A.cK(new A.ac(0,720,0,1/0),x,v),v),v,v,A.ja(A.a0r(v,R.h0,v,v,!1,new B.caJ(this,d),v),w),v,v)}}
B.wc.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["V<~>(wc)","C<mw<wc>>(K)","uU(A<m,@>)"])
B.caD.prototype={
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
s=B.ap1(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.c6(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.ba(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:116}
B.caK.prototype={
$0(){this.a.d=this.b},
$S:0}
B.caL.prototype={
$0(){this.a.d=this.b},
$S:0}
B.caI.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bw(x.d);++w){v=A.a([],u)
if(w!==0)v.push(I.fX)
v.push(new A.eT(new B.caH(x,w,d,e),null))
C.b.H(t,v)}return A.aj(t,C.bm,C.f,C.h,null,C.l)},
$S:195}
B.caH.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.bC(x)===A.bC(w)&&A.bN(x)===A.bN(w)&&A.cG(x)===A.cG(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.ac(y.g).r.a
o===$&&A.b()
o=A.im("EEEE d.M.y",o.gfh(0))
u=n.a
u.toString
u=o.dt(u)
if(n.f){o=p.c
o.toString
o=A.aA(q,q,A.D(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.aA(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ay(A0.ip,A.S(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.arw,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.aA(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aA(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a5(A1.fZ,A.S(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.c5(10)
o=A.D(d)
t=n.b
t.toString
t=A3.is(q,18,t,!0,r.d,r.c)
s=$.dT().gdw().d
w.push(new A.a5(U.od,A.ay(q,A.aj(A.a([new A.a5(M.aW,t,q),A.ja(new A.a5(C.aC,A.av(A.a([A.bq(D.auw,A.D(d).ay,q,16),V.Gs,A.S(C.c.j(n.e),q,q,q,q,q,q,q,A.aA(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),O.jz],x),C.i,C.dd,C.h,0,q),q),s!=null)],x),C.i,C.f,C.h,q,C.l),C.k,q,q,new A.bh(o.ax.k2,q,q,u,q,q,q,C.P),q,q,q,q,q,q,q,q),q))
if(A.j6())w.push(Q.K9(q,D.avt,new B.caF(),new B.caG(p,n,d),y.B))
return A.aj(w,C.bm,C.f,C.h,q,C.l)},
$S:1053}
B.caG.prototype={
$1(d){return this.aKO(d)},
aKO(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.KI?2:4
break
case 2:x=5
return A.d(B.Hk(t),$async$$1)
case 5:A.bH(s,A.u("Message has been removed.",null),C.a8)
x=3
break
case 4:u=P.qp(A.z(["content",t.b],y.N,y.z),A.dh())
x=6
return A.d(A2.fk(s,!1).f.iq(u,y.X).aN(new B.caE(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.ba(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.caE.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.be(d)
x=4
return A.d(B.b8k(u),$async$$1)
case 4:A.bH(v.b,A.u("Message has been changed.",null),C.a8)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:116}
B.caF.prototype={
$1(d){var x=y.B
return A.a([F.v1(E.bl(W.zc,null),!0,48,D.aoV,x),F.v1(E.bl(D.bES,null),!0,48,D.KI,x)],y.h)},
$S:z+1}
B.caJ.prototype={
$0(){return this.a.bq2(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"drc","d81",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.zt,A.I)
x(B.aOr,A.M)
w(A.bM,[B.caD,B.caH,B.caG,B.caE,B.caF])
w(A.cp,[B.caK,B.caL,B.caJ])
x(B.caI,A.dI)
x(B.wc,A.e_)})()
A.bo(b.typeUniverse,JSON.parse('{"zt":{"I":[],"e":[]},"aOr":{"M":["zt"]}}'))
var y=(function rtii(){var x=A.B
return{B:x("wc"),_:x("V<@>"),t:x("r<A<m,@>>"),o:x("r<uU>"),h:x("r<mw<wc>>"),p:x("r<e>"),a:x("A<m,@>"),x:x("uU"),P:x("aB"),K:x("F"),N:x("m"),g:x("kt"),z:x("@"),X:x("F?"),H:x("~")}})();(function constants(){D.KI=new B.wc(0,"delete")
D.aoV=new B.wc(1,"edit")
D.arw=new A.ap(16,8,16,0)
D.auw=new A.aE(58652,"MaterialIcons",null,!1)
D.auX=new A.aE(61075,"MaterialIcons",null,!1)
D.avt=new A.db(S.MF,null,null,null,null)
D.bES=new A.cl("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_354",e:"endPart",h:b})})($__dart_deferred_initializers__,"famToIlgKX+v3TthhzKkUuso1RU=");