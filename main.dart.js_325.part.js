((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_325",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,M,E,N,O,P,Q,R,F,S,T,U,V,W,X,Y,G,Z,B={
dhE(d,e){return new B.E7(e,d)},
E7:function E7(d,e){this.c=d
this.a=e},
aQ7:function aQ7(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
cgN:function cgN(d){this.a=d},
cgG:function cgG(d,e){this.a=d
this.b=e},
cgO:function cgO(d,e){this.a=d
this.b=e},
cgP:function cgP(d,e){this.a=d
this.b=e},
cgL:function cgL(d){this.a=d},
cgK:function cgK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cgJ:function cgJ(d,e,f){this.a=d
this.b=e
this.c=f},
cgH:function cgH(d,e){this.a=d
this.b=e},
cgI:function cgI(){},
cgM:function cgM(d,e){this.a=d
this.b=e},
wC:function wC(d,e){this.a=d
this.b=e},
dhD(d){return A.cS2(d)},
HS(d){return B.daG(d)},
daG(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$HS=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:n=$.BV()
m=n.c_("news").ik(0,"id")
l=d.a
l.toString
v=d.d
m=A.md(m.pf(m.qb("created_at","lt."+l.j(0))),m.$ti.c).aHs("id",v)
l=A.dh()
l.toString
x=2
return A.d(m.d8("occasion",l).bON(0,"created_at").aGK(1).QE(),$async$HS)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.c_("user_news").ik(0,"user").d8("news_id",v),$async$HS)
case 6:t=f
s=A.a([],y.t)
for(n=J.aH(t),m=y.N,l=y.z,r=J.a1(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.h3
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],m,l))}n=$.BV()
x=7
return A.d(n.c_("user_news").ahp(s),$async$HS)
case 7:x=4
break
case 5:x=8
return A.d(n.c_("user_news").iD(0).d8("news_id",v),$async$HS)
case 8:case 4:x=9
return A.d(n.c_("news").iD(0).d8("id",v),$async$HS)
case 9:return A.j(null,w)}})
return A.k($async$HS,w)},
baG(d){return B.daJ(d)},
daJ(d){var x=0,w=A.l(y.H),v
var $async$baG=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.BV().c_("news").eP(0,A.z(["message",d.b],v,v)).d8("id",d.d),$async$baG)
case 2:return A.j(null,w)}})
return A.k($async$baG,w)},
aqo(d,e,f,g,h,i,j){return B.daH(d,e,f,g,h,i,j)},
daH(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$aqo=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.BV().c_("news")
s=A.dh()
s.toString
x=5
return A.d(t.iX(0,A.z(["occasion",s,"message",u,"created_by",$.dO().gdl().c.a],y.N,y.K)).ix(0),$async$aqo)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.XM(A_.XK(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.M)(t),++q){p=new A.dj("")
new H.aLh(p).bn(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.d.bC(o).length===0)continue
r+=o}r=C.d.bC(r)
t=$.BV().c_("log_notifications")
s=A.dh()
s.toString
x=8
return A.d(t.iX(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$aqo)
case 8:A.bK(d,A.r("Message has been sent.",null),C.ac)
x=1
break
case 7:if(h)A.bK(d,A.r("Message has been created.",null),C.ac)
case 1:return A.j(v,w)}})
return A.k($async$aqo,w)},
aqp(d){return B.daI(d)},
daI(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$aqp=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dO()
if(s.gdl().d==null)A.a7(A.cS("User must be logged in."))
v=$.BV()
u=v.c_("user_news").iD(0).d8("user",s.gdl().c.a)
t=A.dh()
t.toString
x=2
return A.d(u.d8("occasion",t),$async$aqp)
case 2:x=3
return A.d(v.c_("user_news").iX(0,A.z(["user",s.gdl().c.a,"news_id",d,"occasion",A.dh()],y.N,y.X)).ix(0),$async$aqp)
case 3:return A.j(null,w)}})
return A.k($async$aqp,w)}},D,A_,H,A0,A1,A2
J=c[1]
A=c[0]
C=c[2]
I=c[172]
K=c[180]
L=c[176]
M=c[186]
E=c[175]
N=c[243]
O=c[187]
P=c[130]
Q=c[88]
R=c[245]
F=c[108]
S=c[246]
T=c[120]
U=c[177]
V=c[221]
W=c[153]
X=c[149]
Y=c[99]
G=c[77]
Z=c[173]
B=a.updateHolder(c[19],B)
D=c[244]
A_=c[125]
H=c[160]
A0=c[122]
A1=c[212]
A2=c[242]
B.E7.prototype={
M(){return new B.aQ7(A.a([],y.o))}}
B.aQ7.prototype={
T(){var x,w=this
w.ah()
x=w.c
x.toString
G.aEI(x,!1).f.a3(0,new B.cgN(w))
w.aY()},
l(){this.al()},
LJ(){var x=0,w=A.l(y.H),v=this,u
var $async$LJ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.E0(u,null,y.X)
x=(u==null?null:u.grS())===!0&&!v.e?2:3
break
case 2:x=$.dO().gdl().d!=null&&J.jm(v.d)&&!J.ij(v.d).f?4:5
break
case 4:x=6
return A.d(B.aqp(J.ij(v.d).d),$async$LJ)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$LJ,w)},
bsA(d){I.ix(d,"newsForm",y.X).aH(new B.cgG(this,d),y.P)},
a03(){var x=0,w=A.l(y.H),v=this,u
var $async$a03=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a_D(),$async$a03)
case 2:v.A(new u.cgO(v,e))
return A.j(null,w)}})
return A.k($async$a03,w)},
o7(){var x=0,w=A.l(y.H),v=this,u
var $async$o7=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(X.lz("newsOffline",B.dBp(),y.x),$async$o7)
case 2:v.A(new u.cgP(v,e))
return A.j(null,w)}})
return A.k($async$o7,w)},
aY(){var x=0,w=A.l(y.H),v=this
var $async$aY=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.o7(),$async$aY)
case 2:x=3
return A.d(v.a03(),$async$aY)
case 3:x=4
return A.d(A.nE("newsOffline",v.d,y.x),$async$aY)
case 4:v.LJ()
return A.j(null,w)}})
return A.k($async$aY,w)},
B(d){var x,w,v=null,u=A.D(d).ax.a===C.r?$.ih():$.qh(),t=A.bq(C.av)
t=Z.iE(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new Y.KA(v,v),v,!0,v,v,v,v,v,E.bv(A.R("News",v,v,v,v,v,v,v,A.an(v,v,new A.bl(t.a,t.b,t.c,0.8).bl(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.fk(this.d)?new A.a3(N.MA,A.ai(A.a([A.b1(D.ayv,A.D(d).ay,v,64),C.a5,A.R(A.XR("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.b0,v,v,v,v)],y.p),C.j,C.bl,C.i,0,v,C.m),v):new A0.Er(new B.cgL(this),v)
w=A.iZ()
return U.f8(t,u,new A.cA(C.aW,v,v,new A.cJ(new A.ac(0,720,0,1/0),x,v),v),v,v,A.ji(T.a19(R.hm,new B.cgM(this,d),v),w),v,v)}}
B.wC.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["Y<~>(wC)","B<mL<wC>>(I)","va(A<m,@>)"])
B.cgN.prototype={
$0(){var x=0,w=A.l(y.H),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.aEI(t,!1).f.gazK()===C.b.dr($.akN(),"news")){u.LJ()
u.aY()}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2}
B.cgG.prototype={
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
s=B.aqo(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.c7(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aY(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:117}
B.cgO.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cgP.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cgL.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bF(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.hg)
v.push(new A.eZ(new B.cgK(x,w,d,e),null))
C.b.H(t,v)}return A.ai(t,C.bj,C.f,C.i,0,null,C.m)},
$S:213}
B.cgK.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.br(x)===A.br(w)&&A.bC(x)===A.bC(w)&&A.cv(x)===A.cv(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.ag(y.g).r.a
o===$&&A.b()
o=A.hz("EEEE d.M.y",o.geX(0))
u=n.a
u.toString
u=o.dg(u)
if(n.f){o=p.c
o.toString
o=A.an(q,q,A.D(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.Y,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.an(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.Y,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aq(A1.i3,A.R(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.av3,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.an(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.Y,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.an(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.Y,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a3(A2.fN,A.R(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bL(10)
o=A.D(d)
t=n.b
t.toString
t=W.iq(q,18,t,!0,r.d,r.c)
s=$.dO().gdl().d
w.push(new A.a3(C.Cu,A.aq(q,A.ai(A.a([new A.a3(K.aY,t,q),A.ji(new A.a3(C.at,A.at(A.a([A.b1(D.ay2,A.D(d).ay,q,16),M.Hm,A.R(C.c.j(n.e),q,q,q,q,q,q,q,A.an(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.Y,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),O.ix],x),C.j,C.dr,C.i,0,q),q),s!=null)],x),C.j,C.f,C.i,0,q,C.m),C.k,q,q,new A.b3(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.iZ())w.push(Q.Ah(q,q,D.az7,new B.cgI(),new B.cgJ(p,n,d),C.at,q,q,y.B))
return A.ai(w,C.bj,C.f,C.i,0,q,C.m)},
$S:1215}
B.cgJ.prototype={
$1(d){return this.aM1(d)},
aM1(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.LN?2:4
break
case 2:x=5
return A.d(B.HS(t),$async$$1)
case 5:A.bK(s,A.r("Message has been removed.",null),C.ac)
x=3
break
case 4:u=P.qB(A.z(["content",t.b],y.N,y.z),A.dh())
x=6
return A.d(L.fu(s,!1).f.ir(u,y.X).aH(new B.cgH(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aY(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+0}
B.cgH.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.ba(d)
x=4
return A.d(B.baG(u),$async$$1)
case 4:A.bK(v.b,A.r("Message has been changed.",null),C.ac)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:117}
B.cgI.prototype={
$1(d){var x=y.B
return A.a([F.pE(E.bv(V.I7,null),!0,48,D.asl,x),F.pE(E.bv(D.bIx,null),!0,48,D.LN,x)],y.h)},
$S:z+1}
B.cgM.prototype={
$0(){return this.a.bsA(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dBp","dhD",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.E7,A.J)
x(B.aQ7,A.O)
w(A.cM,[B.cgN,B.cgO,B.cgP,B.cgM])
w(A.c9,[B.cgG,B.cgK,B.cgJ,B.cgH,B.cgI])
x(B.cgL,A.el)
x(B.wC,A.eX)})()
A.c5(b.typeUniverse,JSON.parse('{"E7":{"J":[],"e":[]},"aQ7":{"O":["E7"]}}'))
var y=(function rtii(){var x=A.C
return{B:x("wC"),_:x("Y<@>"),t:x("u<A<m,@>>"),o:x("u<va>"),h:x("u<mL<wC>>"),p:x("u<e>"),a:x("A<m,@>"),x:x("va"),P:x("aF"),K:x("G"),N:x("m"),g:x("kE"),z:x("@"),X:x("G?"),H:x("~")}})();(function constants(){D.LN=new B.wC(0,"delete")
D.asl=new B.wC(1,"edit")
D.av3=new A.am(16,8,16,0)
D.ay2=new A.aB(58652,"MaterialIcons",null,!1)
D.ayv=new A.aB(61075,"MaterialIcons",null,!1)
D.az7=new A.d5(S.NM,null,null,null,null)
D.bIx=new A.cm("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_325",e:"endPart",h:b})})($__dart_deferred_initializers__,"+SLQyN025NtH9knv1zuZJ2X8iTw=");