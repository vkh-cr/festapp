((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_325",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,M,E,N,O,P,Q,R,F,S,T,U,V,W,X,Y,Z,G,A_,B={
djl(d,e){return new B.Ep(e,d)},
Ep:function Ep(d,e){this.c=d
this.a=e},
aQI:function aQI(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
chW:function chW(d){this.a=d},
chP:function chP(d,e){this.a=d
this.b=e},
chX:function chX(d,e){this.a=d
this.b=e},
chY:function chY(d,e){this.a=d
this.b=e},
chU:function chU(d){this.a=d},
chT:function chT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
chS:function chS(d,e,f){this.a=d
this.b=e
this.c=f},
chQ:function chQ(d,e){this.a=d
this.b=e},
chR:function chR(){},
chV:function chV(d,e){this.a=d
this.b=e},
wN:function wN(d,e){this.a=d
this.b=e},
djk(d){return A.cTH(d)},
I8(d){return B.dcn(d)},
dcn(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$I8=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:n=$.C3()
m=n.c_("news").ir(0,"id")
l=d.a
l.toString
v=d.d
m=A.mf(m.pn(m.qj("created_at","lt."+l.j(0))),m.$ti.c).aHV("id",v)
l=A.df()
l.toString
x=2
return A.d(m.d9("occasion",l).bPV(0,"created_at").aHb(1).QY(),$async$I8)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.c_("user_news").ir(0,"user").d9("news_id",v),$async$I8)
case 6:t=f
s=A.a([],y.t)
for(n=J.aH(t),m=y.N,l=y.z,r=J.a1(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.fQ
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],m,l))}n=$.C3()
x=7
return A.d(n.c_("user_news").ahJ(s),$async$I8)
case 7:x=4
break
case 5:x=8
return A.d(n.c_("user_news").iI(0).d9("news_id",v),$async$I8)
case 8:case 4:x=9
return A.d(n.c_("news").iI(0).d9("id",v),$async$I8)
case 9:return A.j(null,w)}})
return A.k($async$I8,w)},
bbg(d){return B.dcq(d)},
dcq(d){var x=0,w=A.l(y.H),v
var $async$bbg=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.C3().c_("news").eT(0,A.z(["message",d.b],v,v)).d9("id",d.d),$async$bbg)
case 2:return A.j(null,w)}})
return A.k($async$bbg,w)},
aqX(d,e,f,g,h,i,j){return B.dco(d,e,f,g,h,i,j)},
dco(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$aqX=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.C3().c_("news")
s=A.df()
s.toString
x=5
return A.d(t.j2(0,A.z(["occasion",s,"message",u,"created_by",$.dN().gdm().c.a],y.N,y.K)).iC(0),$async$aqX)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.Yc(A0.Ya(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.N)(t),++q){p=new A.dg("")
new H.aLS(p).bn(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.d.bu(o).length===0)continue
r+=o}r=C.d.bu(r)
t=$.C3().c_("log_notifications")
s=A.df()
s.toString
x=8
return A.d(t.j2(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$aqX)
case 8:A.bL(d,A.r("Message has been sent.",null),C.ac)
x=1
break
case 7:if(h)A.bL(d,A.r("Message has been created.",null),C.ac)
case 1:return A.j(v,w)}})
return A.k($async$aqX,w)},
aqY(d){return B.dcp(d)},
dcp(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$aqY=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dN()
if(s.gdm().d==null)A.a7(A.cP("User must be logged in."))
v=$.C3()
u=v.c_("user_news").iI(0).d9("user",s.gdm().c.a)
t=A.df()
t.toString
x=2
return A.d(u.d9("occasion",t),$async$aqY)
case 2:x=3
return A.d(v.c_("user_news").j2(0,A.z(["user",s.gdm().c.a,"news_id",d,"occasion",A.df()],y.N,y.X)).iC(0),$async$aqY)
case 3:return A.j(null,w)}})
return A.k($async$aqY,w)}},D,A0,H,A1,A2,A3
J=c[1]
A=c[0]
C=c[2]
I=c[172]
K=c[180]
L=c[176]
M=c[186]
E=c[175]
N=c[244]
O=c[187]
P=c[129]
Q=c[88]
R=c[246]
F=c[109]
S=c[247]
T=c[121]
U=c[190]
V=c[177]
W=c[222]
X=c[153]
Y=c[149]
Z=c[99]
G=c[77]
A_=c[173]
B=a.updateHolder(c[19],B)
D=c[245]
A0=c[124]
H=c[160]
A1=c[140]
A2=c[213]
A3=c[243]
B.Ep.prototype={
M(){return new B.aQI(A.a([],y.o))}}
B.aQI.prototype={
S(){var x,w=this
w.ah()
x=w.c
x.toString
G.aFk(x,!1).f.a3(0,new B.chW(w))
w.aY()},
l(){this.ai()},
M3(){var x=0,w=A.l(y.H),v=this,u
var $async$M3=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Ei(u,null,y.X)
x=(u==null?null:u.grZ())===!0&&!v.e?2:3
break
case 2:x=$.dN().gdm().d!=null&&J.fU(v.d)&&!J.ii(v.d).f?4:5
break
case 4:x=6
return A.d(B.aqY(J.ii(v.d).d),$async$M3)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$M3,w)},
btB(d){I.iw(d,"newsForm",y.X).aH(new B.chP(this,d),y.P)},
a0r(){var x=0,w=A.l(y.H),v=this,u
var $async$a0r=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a03(),$async$a0r)
case 2:v.A(new u.chX(v,e))
return A.j(null,w)}})
return A.k($async$a0r,w)},
oe(){var x=0,w=A.l(y.H),v=this,u
var $async$oe=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(Y.lz("newsOffline",B.dDg(),y.x),$async$oe)
case 2:v.A(new u.chY(v,e))
return A.j(null,w)}})
return A.k($async$oe,w)},
aY(){var x=0,w=A.l(y.H),v=this
var $async$aY=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.oe(),$async$aY)
case 2:x=3
return A.d(v.a0r(),$async$aY)
case 3:x=4
return A.d(A.nG("newsOffline",v.d,y.x),$async$aY)
case 4:v.M3()
return A.j(null,w)}})
return A.k($async$aY,w)},
B(d){var x,w,v=null,u=A.D(d).ax.a===C.t?$.ig():$.ql(),t=A.br(C.av)
t=A_.iD(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new Z.KO(v,v),v,!0,v,v,v,v,v,E.bw(A.P("News",v,v,v,v,v,v,v,A.an(v,v,new A.bl(t.a,t.b,t.c,0.8).bl(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.fe(this.d)?new A.a3(N.ML,A.ah(A.a([A.aY(D.ayO,A.D(d).ay,v,64),C.a2,A.P(A.Yh("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.b0,v,v,v,v)],y.p),C.j,C.bl,C.i,0,v,C.m),v):new A1.EJ(new B.chU(this),v)
w=A.j_()
return V.f9(t,u,new A.ct(C.aX,v,v,new A.cE(new A.ab(0,720,0,1/0),x,v),v),v,v,A.jk(T.a1A(R.hn,U.qP,new B.chV(this,d),v),w),v,v)}}
B.wN.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["Y<~>(wN)","B<mO<wN>>(H)","vm(A<m,@>)"])
B.chW.prototype={
$0(){var x=0,w=A.l(y.H),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.aFk(t,!1).f.gaA9()===C.b.ds($.ali(),"news")){u.M3()
u.aY()}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2}
B.chP.prototype={
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
s=B.aqX(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.c6(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aY(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:121}
B.chX.prototype={
$0(){this.a.d=this.b},
$S:0}
B.chY.prototype={
$0(){this.a.d=this.b},
$S:0}
B.chU.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bz(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.hh)
v.push(new A.eT(new B.chT(x,w,d,e),null))
C.b.H(t,v)}return A.ah(t,C.bh,C.f,C.i,0,null,C.m)},
$S:242}
B.chT.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.dI(x)===A.dI(w)&&A.ek(x)===A.ek(w)&&A.hG(x)===A.hG(w)}else v=!1
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
o=A.an(q,q,A.D(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.an(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ar(A2.i6,A.P(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.avm,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.an(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.an(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a3(A3.fN,A.P(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bG(10)
o=A.D(d)
t=n.b
t.toString
t=X.ip(q,18,t,!0,r.d,r.c)
s=$.dN().gdm().d
w.push(new A.a3(C.CD,A.ar(q,A.ah(A.a([new A.a3(K.aT,t,q),A.jk(new A.a3(C.as,A.at(A.a([A.aY(D.ayl,A.D(d).ay,q,16),M.Hv,A.P(C.c.j(n.e),q,q,q,q,q,q,q,A.an(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),O.iA],x),C.j,C.dt,C.i,0,q),q),s!=null)],x),C.j,C.f,C.i,0,q,C.m),C.k,q,q,new A.b3(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.j_())w.push(Q.xF(q,q,D.azr,new B.chR(),C.n,new B.chS(p,n,d),C.as,q,q,q,y.B))
return A.ah(w,C.bh,C.f,C.i,0,q,C.m)},
$S:1220}
B.chS.prototype={
$1(d){return this.aMu(d)},
aMu(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.LY?2:4
break
case 2:x=5
return A.d(B.I8(t),$async$$1)
case 5:A.bL(s,A.r("Message has been removed.",null),C.ac)
x=3
break
case 4:u=P.ps(A.z(["content",t.b],y.N,y.z),A.df())
x=6
return A.d(L.fm(s,!1).f.io(u,y.X).aH(new B.chQ(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aY(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+0}
B.chQ.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.b9(d)
x=4
return A.d(B.bbg(u),$async$$1)
case 4:A.bL(v.b,A.r("Message has been changed.",null),C.ac)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:121}
B.chR.prototype={
$1(d){var x=y.B
return A.a([F.nK(E.bw(W.Ig,null),!0,48,D.asB,x),F.nK(E.bw(D.bIV,null),!0,48,D.LY,x)],y.h)},
$S:z+1}
B.chV.prototype={
$0(){return this.a.btB(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dDg","djk",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ep,A.J)
x(B.aQI,A.O)
w(A.cL,[B.chW,B.chX,B.chY,B.chV])
w(A.c9,[B.chP,B.chT,B.chS,B.chQ,B.chR])
x(B.chU,A.ei)
x(B.wN,A.eR)})()
A.c7(b.typeUniverse,JSON.parse('{"Ep":{"J":[],"e":[]},"aQI":{"O":["Ep"]}}'))
var y=(function rtii(){var x=A.C
return{B:x("wN"),_:x("Y<@>"),t:x("u<A<m,@>>"),o:x("u<vm>"),h:x("u<mO<wN>>"),p:x("u<e>"),a:x("A<m,@>"),x:x("vm"),P:x("aF"),K:x("G"),N:x("m"),g:x("kG"),z:x("@"),X:x("G?"),H:x("~")}})();(function constants(){D.LY=new B.wN(0,"delete")
D.asB=new B.wN(1,"edit")
D.avm=new A.am(16,8,16,0)
D.ayl=new A.aB(58652,"MaterialIcons",null,!1)
D.ayO=new A.aB(61075,"MaterialIcons",null,!1)
D.azr=new A.d0(S.NX,null,null,null,null)
D.bIV=new A.cq("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_325",e:"endPart",h:b})})($__dart_deferred_initializers__,"e5MmGEPqz0Y3+4KDyRnusLDNUGQ=");