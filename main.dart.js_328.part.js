((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_328",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,M,E,N,O,P,Q,R,F,S,T,U,V,W,X,Y,G,B={
dhv(d,e){return new B.E8(e,d)},
E8:function E8(d,e){this.c=d
this.a=e},
aQ7:function aQ7(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
cgJ:function cgJ(d){this.a=d},
cgC:function cgC(d,e){this.a=d
this.b=e},
cgK:function cgK(d,e){this.a=d
this.b=e},
cgL:function cgL(d,e){this.a=d
this.b=e},
cgH:function cgH(d){this.a=d},
cgG:function cgG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cgF:function cgF(d,e,f){this.a=d
this.b=e
this.c=f},
cgD:function cgD(d,e){this.a=d
this.b=e},
cgE:function cgE(){},
cgI:function cgI(d,e){this.a=d
this.b=e},
wD:function wD(d,e){this.a=d
this.b=e},
dhu(d){return A.cRU(d)},
HS(d){return B.dax(d)},
dax(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$HS=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:n=$.BW()
m=n.c_("news").ik(0,"id")
l=d.a
l.toString
v=d.d
m=A.mc(m.pf(m.qb("created_at","lt."+l.j(0))),m.$ti.c).aHs("id",v)
l=A.dl()
l.toString
x=2
return A.d(m.d8("occasion",l).bOL(0,"created_at").aGK(1).QF(),$async$HS)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.c_("user_news").ik(0,"user").d8("news_id",v),$async$HS)
case 6:t=f
s=A.a([],y.t)
for(n=J.aI(t),m=y.N,l=y.z,r=J.a1(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.h5
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],m,l))}n=$.BW()
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
baE(d){return B.daA(d)},
daA(d){var x=0,w=A.l(y.H),v
var $async$baE=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.BW().c_("news").eP(0,A.z(["message",d.b],v,v)).d8("id",d.d),$async$baE)
case 2:return A.j(null,w)}})
return A.k($async$baE,w)},
aqn(d,e,f,g,h,i,j){return B.day(d,e,f,g,h,i,j)},
day(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$aqn=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.BW().c_("news")
s=A.dl()
s.toString
x=5
return A.d(t.iX(0,A.z(["occasion",s,"message",u,"created_by",$.dO().gdl().c.a],y.N,y.K)).ix(0),$async$aqn)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.XL(A_.XJ(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.M)(t),++q){p=new A.di("")
new H.aLh(p).bn(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.d.bC(o).length===0)continue
r+=o}r=C.d.bC(r)
t=$.BW().c_("log_notifications")
s=A.dl()
s.toString
x=8
return A.d(t.iX(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$aqn)
case 8:A.bK(d,A.r("Message has been sent.",null),C.ac)
x=1
break
case 7:if(h)A.bK(d,A.r("Message has been created.",null),C.ac)
case 1:return A.j(v,w)}})
return A.k($async$aqn,w)},
aqo(d){return B.daz(d)},
daz(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$aqo=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dO()
if(s.gdl().d==null)A.a7(A.cS("User must be logged in."))
v=$.BW()
u=v.c_("user_news").iD(0).d8("user",s.gdl().c.a)
t=A.dl()
t.toString
x=2
return A.d(u.d8("occasion",t),$async$aqo)
case 2:x=3
return A.d(v.c_("user_news").iX(0,A.z(["user",s.gdl().c.a,"news_id",d,"occasion",A.dl()],y.N,y.X)).ix(0),$async$aqo)
case 3:return A.j(null,w)}})
return A.k($async$aqo,w)}},D,Z,A_,H,A0,A1,A2
J=c[1]
A=c[0]
C=c[2]
I=c[184]
K=c[176]
L=c[190]
M=c[180]
E=c[179]
N=c[247]
O=c[191]
P=c[133]
Q=c[90]
R=c[249]
F=c[110]
S=c[250]
T=c[122]
U=c[181]
V=c[225]
W=c[152]
X=c[156]
Y=c[101]
G=c[78]
B=a.updateHolder(c[19],B)
D=c[248]
Z=c[177]
A_=c[128]
H=c[163]
A0=c[125]
A1=c[216]
A2=c[246]
B.E8.prototype={
M(){return new B.aQ7(A.a([],y.o))}}
B.aQ7.prototype={
T(){var x,w=this
w.ah()
x=w.c
x.toString
G.aEI(x,!1).f.a3(0,new B.cgJ(w))
w.aY()},
l(){this.al()},
LJ(){var x=0,w=A.l(y.H),v=this,u
var $async$LJ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.E1(u,null,y.X)
x=(u==null?null:u.grS())===!0&&!v.e?2:3
break
case 2:x=$.dO().gdl().d!=null&&J.jn(v.d)&&!J.ij(v.d).f?4:5
break
case 4:x=6
return A.d(B.aqo(J.ij(v.d).d),$async$LJ)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$LJ,w)},
bsy(d){K.ix(d,"newsForm",y.X).aH(new B.cgC(this,d),y.P)},
a05(){var x=0,w=A.l(y.H),v=this,u
var $async$a05=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a_B(),$async$a05)
case 2:v.A(new u.cgK(v,e))
return A.j(null,w)}})
return A.k($async$a05,w)},
o6(){var x=0,w=A.l(y.H),v=this,u
var $async$o6=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(W.ma("newsOffline",B.dBf(),y.x),$async$o6)
case 2:v.A(new u.cgL(v,e))
return A.j(null,w)}})
return A.k($async$o6,w)},
aY(){var x=0,w=A.l(y.H),v=this
var $async$aY=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.o6(),$async$aY)
case 2:x=3
return A.d(v.a05(),$async$aY)
case 3:x=4
return A.d(A.os("newsOffline",v.d),$async$aY)
case 4:v.LJ()
return A.j(null,w)}})
return A.k($async$aY,w)},
B(d){var x,w,v=null,u=A.D(d).ax.a===C.r?$.ih():$.qi(),t=A.bq(C.av)
t=Z.iE(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new Y.KA(v,v),v,!0,v,v,v,v,v,E.bv(A.R("News",v,v,v,v,v,v,v,A.an(v,v,new A.bl(t.a,t.b,t.c,0.8).bk(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.fk(this.d)?new A.a3(N.MA,A.ai(A.a([A.b1(D.ayv,A.D(d).ay,v,64),C.a5,A.R(A.XQ("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.b0,v,v,v,v)],y.p),C.j,C.bl,C.i,0,v,C.m),v):new A0.Es(new B.cgH(this),v)
w=A.iZ()
return U.f8(t,u,new A.cA(C.aW,v,v,new A.cJ(new A.ac(0,720,0,1/0),x,v),v),v,v,A.jj(T.a17(R.hm,new B.cgI(this,d),v),w),v,v)}}
B.wD.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["Y<~>(wD)","B<mK<wD>>(I)","va(A<m,@>)"])
B.cgJ.prototype={
$0(){var x=0,w=A.l(y.H),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.aEI(t,!1).f.gazK()===C.b.dr($.akL(),"news")){u.LJ()
u.aY()}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2}
B.cgC.prototype={
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
s=B.aqn(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.c8(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aY(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:116}
B.cgK.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cgL.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cgH.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bE(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.hg)
v.push(new A.eZ(new B.cgG(x,w,d,e),null))
C.b.H(t,v)}return A.ai(t,C.bj,C.f,C.i,0,null,C.m)},
$S:237}
B.cgG.prototype={
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
t=X.iq(q,18,t,!0,r.d,r.c)
s=$.dO().gdl().d
w.push(new A.a3(C.Cu,A.aq(q,A.ai(A.a([new A.a3(I.aY,t,q),A.jj(new A.a3(C.at,A.at(A.a([A.b1(D.ay2,A.D(d).ay,q,16),L.Hm,A.R(C.c.j(n.e),q,q,q,q,q,q,q,A.an(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.Y,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),O.ix],x),C.j,C.dr,C.i,0,q),q),s!=null)],x),C.j,C.f,C.i,0,q,C.m),C.k,q,q,new A.b3(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.iZ())w.push(Q.Ai(q,q,D.az7,new B.cgE(),new B.cgF(p,n,d),C.at,q,q,y.B))
return A.ai(w,C.bj,C.f,C.i,0,q,C.m)},
$S:1187}
B.cgF.prototype={
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
case 4:u=P.qC(A.z(["content",t.b],y.N,y.z),A.dl())
x=6
return A.d(M.fu(s,!1).f.ir(u,y.X).aH(new B.cgD(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aY(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+0}
B.cgD.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.ba(d)
x=4
return A.d(B.baE(u),$async$$1)
case 4:A.bK(v.b,A.r("Message has been changed.",null),C.ac)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:116}
B.cgE.prototype={
$1(d){var x=y.B
return A.a([F.pF(E.bv(V.I7,null),!0,48,D.asl,x),F.pF(E.bv(D.bIx,null),!0,48,D.LN,x)],y.h)},
$S:z+1}
B.cgI.prototype={
$0(){return this.a.bsy(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dBf","dhu",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.E8,A.J)
x(B.aQ7,A.O)
w(A.cM,[B.cgJ,B.cgK,B.cgL,B.cgI])
w(A.c6,[B.cgC,B.cgG,B.cgF,B.cgD,B.cgE])
x(B.cgH,A.eh)
x(B.wD,A.eX)})()
A.c5(b.typeUniverse,JSON.parse('{"E8":{"J":[],"e":[]},"aQ7":{"O":["E8"]}}'))
var y=(function rtii(){var x=A.C
return{B:x("wD"),_:x("Y<@>"),t:x("t<A<m,@>>"),o:x("t<va>"),h:x("t<mK<wD>>"),p:x("t<e>"),a:x("A<m,@>"),x:x("va"),P:x("aF"),K:x("G"),N:x("m"),g:x("kD"),z:x("@"),X:x("G?"),H:x("~")}})();(function constants(){D.LN=new B.wD(0,"delete")
D.asl=new B.wD(1,"edit")
D.av3=new A.am(16,8,16,0)
D.ay2=new A.aB(58652,"MaterialIcons",null,!1)
D.ayv=new A.aB(61075,"MaterialIcons",null,!1)
D.az7=new A.d5(S.NM,null,null,null,null)
D.bIx=new A.cm("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_328",e:"endPart",h:b})})($__dart_deferred_initializers__,"yJ/OtAsVBubmj6ZQWHflGEWxP1M=");