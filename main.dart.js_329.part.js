((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_329",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,M,N,E,O,P,Q,R,S,F,T,U,V,W,X,Y,G,B={
djq(d,e){return new B.Ep(e,d)},
Ep:function Ep(d,e){this.c=d
this.a=e},
aQJ:function aQJ(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
chY:function chY(d){this.a=d},
chR:function chR(d,e){this.a=d
this.b=e},
chZ:function chZ(d,e){this.a=d
this.b=e},
ci_:function ci_(d,e){this.a=d
this.b=e},
chW:function chW(d){this.a=d},
chV:function chV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
chU:function chU(d,e,f){this.a=d
this.b=e
this.c=f},
chS:function chS(d,e){this.a=d
this.b=e},
chT:function chT(){},
chX:function chX(d,e){this.a=d
this.b=e},
wP:function wP(d,e){this.a=d
this.b=e},
djp(d){return A.cTL(d)},
I6(d){return B.dcs(d)},
dcs(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$I6=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:n=$.C4()
m=n.c1("news").ir(0,"id")
l=d.a
l.toString
v=d.d
m=A.mf(m.pn(m.qj("created_at","lt."+l.j(0))),m.$ti.c).aHY("id",v)
l=A.df()
l.toString
x=2
return A.d(m.dc("occasion",l).bQa(0,"created_at").aHe(1).QX(),$async$I6)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.c1("user_news").ir(0,"user").dc("news_id",v),$async$I6)
case 6:t=f
s=A.a([],y.t)
for(n=J.aH(t),m=y.N,l=y.z,r=J.a1(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.fQ
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],m,l))}n=$.C4()
x=7
return A.d(n.c1("user_news").aL4(s),$async$I6)
case 7:x=4
break
case 5:x=8
return A.d(n.c1("user_news").j_(0).dc("news_id",v),$async$I6)
case 8:case 4:x=9
return A.d(n.c1("news").j_(0).dc("id",v),$async$I6)
case 9:return A.j(null,w)}})
return A.k($async$I6,w)},
bbh(d){return B.dcv(d)},
dcv(d){var x=0,w=A.l(y.H),v
var $async$bbh=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.C4().c1("news").eT(0,A.z(["message",d.b],v,v)).dc("id",d.d),$async$bbh)
case 2:return A.j(null,w)}})
return A.k($async$bbh,w)},
aqY(d,e,f,g,h,i,j){return B.dct(d,e,f,g,h,i,j)},
dct(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$aqY=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.C4().c1("news")
s=A.df()
s.toString
x=5
return A.d(t.jj(0,A.z(["occasion",s,"message",u,"created_by",$.dC().gdm().c.a],y.N,y.K)).iC(0),$async$aqY)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.Yc(A1.Ya(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.N)(t),++q){p=new A.dg("")
new H.aLT(p).bn(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.d.bu(o).length===0)continue
r+=o}r=C.d.bu(r)
t=$.C4().c1("log_notifications")
s=A.df()
s.toString
x=8
return A.d(t.jj(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$aqY)
case 8:A.bK(d,A.r("Message has been sent.",null),C.ac)
x=1
break
case 7:if(h)A.bK(d,A.r("Message has been created.",null),C.ac)
case 1:return A.j(v,w)}})
return A.k($async$aqY,w)},
aqZ(d){return B.dcu(d)},
dcu(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$aqZ=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dC()
if(s.gdm().d==null)A.a7(A.cP("User must be logged in."))
v=$.C4()
u=v.c1("user_news").j_(0).dc("user",s.gdm().c.a)
t=A.df()
t.toString
x=2
return A.d(u.dc("occasion",t),$async$aqZ)
case 2:x=3
return A.d(v.c1("user_news").jj(0,A.z(["user",s.gdm().c.a,"news_id",d,"occasion",A.df()],y.N,y.X)).iC(0),$async$aqZ)
case 3:return A.j(null,w)}})
return A.k($async$aqZ,w)}},D,Z,A_,A0,A1,H,A2,A3
J=c[1]
A=c[0]
C=c[2]
I=c[173]
K=c[243]
L=c[177]
M=c[181]
N=c[187]
E=c[176]
O=c[244]
P=c[188]
Q=c[130]
R=c[86]
S=c[246]
F=c[109]
T=c[247]
U=c[122]
V=c[191]
W=c[222]
X=c[150]
Y=c[99]
G=c[75]
B=a.updateHolder(c[19],B)
D=c[245]
Z=c[178]
A_=c[154]
A0=c[174]
A1=c[125]
H=c[161]
A2=c[140]
A3=c[213]
B.Ep.prototype={
M(){return new B.aQJ(A.a([],y.o))}}
B.aQJ.prototype={
T(){var x,w=this
w.ah()
x=w.c
x.toString
G.aFk(x,!1).f.a3(0,new B.chY(w))
w.aX()},
l(){this.ai()},
M2(){var x=0,w=A.l(y.H),v=this,u
var $async$M2=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Ei(u,null,y.X)
x=(u==null?null:u.grZ())===!0&&!v.e?2:3
break
case 2:x=$.dC().gdm().d!=null&&J.fU(v.d)&&!J.ii(v.d).f?4:5
break
case 4:x=6
return A.d(B.aqZ(J.ii(v.d).d),$async$M2)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$M2,w)},
btR(d){I.ix(d,"newsForm",y.X).aH(new B.chR(this,d),y.P)},
a0t(){var x=0,w=A.l(y.H),v=this,u
var $async$a0t=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a03(),$async$a0t)
case 2:v.A(new u.chZ(v,e))
return A.j(null,w)}})
return A.k($async$a0t,w)},
oe(){var x=0,w=A.l(y.H),v=this,u
var $async$oe=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(X.lA("newsOffline",B.dDl(),y.x),$async$oe)
case 2:v.A(new u.ci_(v,e))
return A.j(null,w)}})
return A.k($async$oe,w)},
aX(){var x=0,w=A.l(y.H),v=this
var $async$aX=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.oe(),$async$aX)
case 2:x=3
return A.d(v.a0t(),$async$aX)
case 3:x=4
return A.d(A.nG("newsOffline",v.d,y.x),$async$aX)
case 4:v.M2()
return A.j(null,w)}})
return A.k($async$aX,w)},
B(d){var x,w,v=null,u=A.C(d).ax.a===C.q?$.hO():$.qn(),t=A.bo(C.at)
t=A0.iE(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new Y.KN(v,v),v,!0,v,v,v,v,v,E.bw(A.P("News",v,v,v,v,v,v,v,A.al(v,v,new A.bj(t.a,t.b,t.c,0.8).bj(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.ff(this.d)?new A.a3(O.MM,A.ah(A.a([A.aX(D.ayT,A.C(d).ay,v,64),C.a2,A.P(A.Yh("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.b0,v,v,v,v)],y.p),C.j,C.bj,C.i,0,v,C.m),v):new A2.EJ(new B.chW(this),v)
w=A.j_()
return Z.f9(t,u,new A.cp(C.aX,v,v,new A.cE(new A.ab(0,720,0,1/0),x,v),v),v,v,A.jl(U.a1A(S.hn,V.qP,new B.chX(this,d),v),w),v,v)}}
B.wP.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["X<~>(wP)","B<mO<wP>>(G)","vm(A<m,@>)"])
B.chY.prototype={
$0(){var x=0,w=A.l(y.H),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.aFk(t,!1).f.gaAc()===C.b.dt($.alj(),"news")){u.M2()
u.aX()}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2}
B.chR.prototype={
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
s=B.aqY(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.c7(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aX(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:113}
B.chZ.prototype={
$0(){this.a.d=this.b},
$S:0}
B.ci_.prototype={
$0(){this.a.d=this.b},
$S:0}
B.chW.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bz(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.hh)
v.push(new A.eN(new B.chV(x,w,d,e),null))
C.b.H(t,v)}return A.ah(t,C.bh,C.f,C.i,0,null,C.m)},
$S:239}
B.chV.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.dJ(x)===A.dJ(w)&&A.ek(x)===A.ek(w)&&A.hG(x)===A.hG(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.af(y.g).r.a
o===$&&A.b()
o=A.hx("EEEE d.M.y",o.gf0(0))
u=n.a
u.toString
u=o.dd(u)
if(n.f){o=p.c
o.toString
o=A.al(q,q,A.C(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.al(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ar(A3.i6,A.P(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.avp,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.al(q,q,A.C(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.al(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a3(K.fN,A.P(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bE(10)
o=A.C(d)
t=n.b
t.toString
t=A_.ip(q,18,t,!0,r.d,r.c)
s=$.dC().gdm().d
w.push(new A.a3(C.CC,A.ar(q,A.ah(A.a([new A.a3(M.aT,t,q),A.jl(new A.a3(C.as,A.at(A.a([A.aX(D.ayq,A.C(d).ay,q,16),N.Hv,A.P(C.c.j(n.e),q,q,q,q,q,q,q,A.al(q,q,A.C(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),P.hT],x),C.j,C.dt,C.i,0,q),q),s!=null)],x),C.j,C.f,C.i,0,q,C.m),C.k,q,q,new A.b4(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.j_())w.push(R.xH(q,q,D.azv,new B.chT(),C.n,new B.chU(p,n,d),C.as,q,q,q,y.B))
return A.ah(w,C.bh,C.f,C.i,0,q,C.m)},
$S:1221}
B.chU.prototype={
$1(d){return this.aMy(d)},
aMy(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.LY?2:4
break
case 2:x=5
return A.d(B.I6(t),$async$$1)
case 5:A.bK(s,A.r("Message has been removed.",null),C.ac)
x=3
break
case 4:u=Q.ps(A.z(["content",t.b],y.N,y.z),A.df())
x=6
return A.d(L.fc(s,!1).f.i2(u,y.X).aH(new B.chS(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aX(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+0}
B.chS.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.b9(d)
x=4
return A.d(B.bbh(u),$async$$1)
case 4:A.bK(v.b,A.r("Message has been changed.",null),C.ac)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:113}
B.chT.prototype={
$1(d){var x=y.B
return A.a([F.nK(E.bw(W.Ig,null),!0,48,D.asG,x),F.nK(E.bw(D.bIW,null),!0,48,D.LY,x)],y.h)},
$S:z+1}
B.chX.prototype={
$0(){return this.a.btR(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dDl","djp",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ep,A.J)
x(B.aQJ,A.O)
w(A.cK,[B.chY,B.chZ,B.ci_,B.chX])
w(A.c9,[B.chR,B.chV,B.chU,B.chS,B.chT])
x(B.chW,A.ef)
x(B.wP,A.eS)})()
A.c5(b.typeUniverse,JSON.parse('{"Ep":{"J":[],"e":[]},"aQJ":{"O":["Ep"]}}'))
var y=(function rtii(){var x=A.D
return{B:x("wP"),_:x("X<@>"),t:x("u<A<m,@>>"),o:x("u<vm>"),h:x("u<mO<wP>>"),p:x("u<e>"),a:x("A<m,@>"),x:x("vm"),P:x("aF"),K:x("H"),N:x("m"),g:x("ki"),z:x("@"),X:x("H?"),H:x("~")}})();(function constants(){D.LY=new B.wP(0,"delete")
D.asG=new B.wP(1,"edit")
D.avp=new A.an(16,8,16,0)
D.ayq=new A.aB(58652,"MaterialIcons",null,!1)
D.ayT=new A.aB(61075,"MaterialIcons",null,!1)
D.azv=new A.d3(T.NW,null,null,null,null)
D.bIW=new A.cr("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_329",e:"endPart",h:b})})($__dart_deferred_initializers__,"LwlwXOPA9YStu8LDm8C+c1EgPIU=");