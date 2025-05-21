((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_324",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,M,E,N,O,P,Q,R,F,S,T,U,V,W,X,Y,G,Z,B={
dhi(d,e){return new B.E7(e,d)},
E7:function E7(d,e){this.c=d
this.a=e},
aQ4:function aQ4(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
cgw:function cgw(d){this.a=d},
cgp:function cgp(d,e){this.a=d
this.b=e},
cgx:function cgx(d,e){this.a=d
this.b=e},
cgy:function cgy(d,e){this.a=d
this.b=e},
cgu:function cgu(d){this.a=d},
cgt:function cgt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cgs:function cgs(d,e,f){this.a=d
this.b=e
this.c=f},
cgq:function cgq(d,e){this.a=d
this.b=e},
cgr:function cgr(){},
cgv:function cgv(d,e){this.a=d
this.b=e},
wD:function wD(d,e){this.a=d
this.b=e},
dhh(d){return A.cRI(d)},
HS(d){return B.dak(d)},
dak(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$HS=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:n=$.BU()
m=n.c_("news").ik(0,"id")
l=d.a
l.toString
v=d.d
m=A.mc(m.pf(m.qb("created_at","lt."+l.j(0))),m.$ti.c).aHp("id",v)
l=A.dl()
l.toString
x=2
return A.d(m.d8("occasion",l).bOJ(0,"created_at").aGH(1).QF(),$async$HS)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.c_("user_news").ik(0,"user").d8("news_id",v),$async$HS)
case 6:t=f
s=A.a([],y.t)
for(n=J.aK(t),m=y.N,l=y.z,r=J.a1(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.h5
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],m,l))}n=$.BU()
x=7
return A.d(n.c_("user_news").ahn(s),$async$HS)
case 7:x=4
break
case 5:x=8
return A.d(n.c_("user_news").iD(0).d8("news_id",v),$async$HS)
case 8:case 4:x=9
return A.d(n.c_("news").iD(0).d8("id",v),$async$HS)
case 9:return A.j(null,w)}})
return A.k($async$HS,w)},
baA(d){return B.dan(d)},
dan(d){var x=0,w=A.l(y.H),v
var $async$baA=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.BU().c_("news").eO(0,A.z(["message",d.b],v,v)).d8("id",d.d),$async$baA)
case 2:return A.j(null,w)}})
return A.k($async$baA,w)},
aqo(d,e,f,g,h,i,j){return B.dal(d,e,f,g,h,i,j)},
dal(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$aqo=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.BU().c_("news")
s=A.dl()
s.toString
x=5
return A.d(t.iX(0,A.z(["occasion",s,"message",u,"created_by",$.dU().gdl().c.a],y.N,y.K)).ix(0),$async$aqo)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.XL(A0.XJ(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.N)(t),++q){p=new A.di("")
new H.aLf(p).bn(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.d.bC(o).length===0)continue
r+=o}r=C.d.bC(r)
t=$.BU().c_("log_notifications")
s=A.dl()
s.toString
x=8
return A.d(t.iX(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$aqo)
case 8:A.bK(d,A.r("Message has been sent.",null),C.ac)
x=1
break
case 7:if(h)A.bK(d,A.r("Message has been created.",null),C.ac)
case 1:return A.j(v,w)}})
return A.k($async$aqo,w)},
aqp(d){return B.dam(d)},
dam(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$aqp=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dU()
if(s.gdl().d==null)A.a7(A.cS("User must be logged in."))
v=$.BU()
u=v.c_("user_news").iD(0).d8("user",s.gdl().c.a)
t=A.dl()
t.toString
x=2
return A.d(u.d8("occasion",t),$async$aqp)
case 2:x=3
return A.d(v.c_("user_news").iX(0,A.z(["user",s.gdl().c.a,"news_id",d,"occasion",A.dl()],y.N,y.X)).ix(0),$async$aqp)
case 3:return A.j(null,w)}})
return A.k($async$aqp,w)}},D,A_,A0,H,A1,A2
J=c[1]
A=c[0]
C=c[2]
I=c[190]
K=c[184]
L=c[176]
M=c[180]
E=c[179]
N=c[246]
O=c[191]
P=c[133]
Q=c[91]
R=c[248]
F=c[112]
S=c[249]
T=c[124]
U=c[181]
V=c[224]
W=c[152]
X=c[156]
Y=c[103]
G=c[78]
Z=c[99]
B=a.updateHolder(c[19],B)
D=c[247]
A_=c[177]
A0=c[128]
H=c[163]
A1=c[215]
A2=c[245]
B.E7.prototype={
M(){return new B.aQ4(A.a([],y.o))}}
B.aQ4.prototype={
T(){var x,w=this
w.ah()
x=w.c
x.toString
G.aEH(x,!1).f.a3(0,new B.cgw(w))
w.aY()},
l(){this.al()},
LJ(){var x=0,w=A.l(y.H),v=this,u
var $async$LJ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.E0(u,null,y.X)
x=(u==null?null:u.grS())===!0&&!v.e?2:3
break
case 2:x=$.dU().gdl().d!=null&&J.jm(v.d)&&!J.ik(v.d).f?4:5
break
case 4:x=6
return A.d(B.aqp(J.ik(v.d).d),$async$LJ)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$LJ,w)},
bsw(d){L.iy(d,"newsForm",y.X).aH(new B.cgp(this,d),y.P)},
a04(){var x=0,w=A.l(y.H),v=this,u
var $async$a04=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a_B(),$async$a04)
case 2:v.A(new u.cgx(v,e))
return A.j(null,w)}})
return A.k($async$a04,w)},
o6(){var x=0,w=A.l(y.H),v=this,u
var $async$o6=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(W.ma("newsOffline",B.dB2(),y.x),$async$o6)
case 2:v.A(new u.cgy(v,e))
return A.j(null,w)}})
return A.k($async$o6,w)},
aY(){var x=0,w=A.l(y.H),v=this
var $async$aY=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.o6(),$async$aY)
case 2:x=3
return A.d(v.a04(),$async$aY)
case 3:x=4
return A.d(A.or("newsOffline",v.d),$async$aY)
case 4:v.LJ()
return A.j(null,w)}})
return A.k($async$aY,w)},
B(d){var x,w,v=null,u=A.D(d).ax.a===C.q?$.ii():$.qi(),t=A.bq(C.av)
t=A_.iE(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new Y.KA(v,v),v,!0,v,v,v,v,v,E.bv(A.R("News",v,v,v,v,v,v,v,A.an(v,v,new A.bl(t.a,t.b,t.c,0.8).bk(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.fp(this.d)?new A.a3(N.MA,A.ai(A.a([A.b1(D.ayt,A.D(d).ay,v,64),C.a5,A.R(A.XQ("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.b0,v,v,v,v)],y.p),C.j,C.bl,C.i,0,v,C.m),v):new Z.Er(new B.cgu(this),v)
w=A.iZ()
return U.f7(t,u,new A.cA(C.aW,v,v,new A.cJ(new A.ab(0,720,0,1/0),x,v),v),v,v,A.ji(T.a17(R.hm,new B.cgv(this,d),v),w),v,v)}}
B.wD.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["Y<~>(wD)","B<mL<wD>>(I)","va(A<m,@>)"])
B.cgw.prototype={
$0(){var x=0,w=A.l(y.H),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.aEH(t,!1).f.gazH()===C.b.dr($.akM(),"news")){u.LJ()
u.aY()}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2}
B.cgp.prototype={
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
return A.d(y._.b(s)?s:A.c8(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aY(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:117}
B.cgx.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cgy.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cgu.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bE(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.hg)
v.push(new A.eZ(new B.cgt(x,w,d,e),null))
C.b.H(t,v)}return A.ai(t,C.bj,C.f,C.i,0,null,C.m)},
$S:219}
B.cgt.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.br(x)===A.br(w)&&A.bB(x)===A.bB(w)&&A.cv(x)===A.cv(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.ag(y.g).r.a
o===$&&A.b()
o=A.hA("EEEE d.M.y",o.geX(0))
u=n.a
u.toString
u=o.dg(u)
if(n.f){o=p.c
o.toString
o=A.an(q,q,A.D(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.Y,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.an(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.Y,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.as(A1.i3,A.R(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.av1,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.an(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.Y,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.an(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.Y,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a3(A2.fN,A.R(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bM(10)
o=A.D(d)
t=n.b
t.toString
t=X.ir(q,18,t,!0,r.d,r.c)
s=$.dU().gdl().d
w.push(new A.a3(C.Cs,A.as(q,A.ai(A.a([new A.a3(K.aY,t,q),A.ji(new A.a3(C.at,A.at(A.a([A.b1(D.ay0,A.D(d).ay,q,16),I.Hk,A.R(C.c.j(n.e),q,q,q,q,q,q,q,A.an(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.Y,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),O.ix],x),C.j,C.dr,C.i,0,q),q),s!=null)],x),C.j,C.f,C.i,0,q,C.m),C.k,q,q,new A.b5(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.iZ())w.push(Q.Ah(q,q,D.az5,new B.cgr(),new B.cgs(p,n,d),C.at,q,q,y.B))
return A.ai(w,C.bj,C.f,C.i,0,q,C.m)},
$S:1186}
B.cgs.prototype={
$1(d){return this.aLZ(d)},
aLZ(d){var x=0,w=A.l(y.H),v=this,u,t,s
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
case 4:u=P.qC(A.z(["content",t.b],y.N,y.z),A.dl())
x=6
return A.d(M.fu(s,!1).f.ir(u,y.X).aH(new B.cgq(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aY(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+0}
B.cgq.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.ba(d)
x=4
return A.d(B.baA(u),$async$$1)
case 4:A.bK(v.b,A.r("Message has been changed.",null),C.ac)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:117}
B.cgr.prototype={
$1(d){var x=y.B
return A.a([F.pF(E.bv(V.I5,null),!0,48,D.asj,x),F.pF(E.bv(D.bIw,null),!0,48,D.LN,x)],y.h)},
$S:z+1}
B.cgv.prototype={
$0(){return this.a.bsw(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dB2","dhh",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.E7,A.J)
x(B.aQ4,A.O)
w(A.cQ,[B.cgw,B.cgx,B.cgy,B.cgv])
w(A.c6,[B.cgp,B.cgt,B.cgs,B.cgq,B.cgr])
x(B.cgu,A.el)
x(B.wD,A.eX)})()
A.c5(b.typeUniverse,JSON.parse('{"E7":{"J":[],"e":[]},"aQ4":{"O":["E7"]}}'))
var y=(function rtii(){var x=A.C
return{B:x("wD"),_:x("Y<@>"),t:x("u<A<m,@>>"),o:x("u<va>"),h:x("u<mL<wD>>"),p:x("u<e>"),a:x("A<m,@>"),x:x("va"),P:x("aF"),K:x("G"),N:x("m"),g:x("kD"),z:x("@"),X:x("G?"),H:x("~")}})();(function constants(){D.LN=new B.wD(0,"delete")
D.asj=new B.wD(1,"edit")
D.av1=new A.am(16,8,16,0)
D.ay0=new A.aB(58652,"MaterialIcons",null,!1)
D.ayt=new A.aB(61075,"MaterialIcons",null,!1)
D.az5=new A.d5(S.NN,null,null,null,null)
D.bIw=new A.cm("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_324",e:"endPart",h:b})})($__dart_deferred_initializers__,"wmW5HM0QlFiiGZ3wNHo3PtMg4m4=");