((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_326",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,M,E,N,O,P,Q,R,F,S,T,U,V,W,X,Y,G,Z,B={
diS(d,e){return new B.El(e,d)},
El:function El(d,e){this.c=d
this.a=e},
aQB:function aQB(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
chp:function chp(d){this.a=d},
chi:function chi(d,e){this.a=d
this.b=e},
chq:function chq(d,e){this.a=d
this.b=e},
chr:function chr(d,e){this.a=d
this.b=e},
chn:function chn(d){this.a=d},
chm:function chm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
chl:function chl(d,e,f){this.a=d
this.b=e
this.c=f},
chj:function chj(d,e){this.a=d
this.b=e},
chk:function chk(){},
cho:function cho(d,e){this.a=d
this.b=e},
wJ:function wJ(d,e){this.a=d
this.b=e},
diR(d){return A.cT8(d)},
I5(d){return B.dbU(d)},
dbU(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$I5=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:n=$.C1()
m=n.c_("news").iq(0,"id")
l=d.a
l.toString
v=d.d
m=A.mg(m.pm(m.qi("created_at","lt."+l.j(0))),m.$ti.c).aHV("id",v)
l=A.de()
l.toString
x=2
return A.d(m.da("occasion",l).bPJ(0,"created_at").aHc(1).QX(),$async$I5)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.c_("user_news").iq(0,"user").da("news_id",v),$async$I5)
case 6:t=f
s=A.a([],y.t)
for(n=J.aI(t),m=y.N,l=y.z,r=J.a1(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.fQ
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],m,l))}n=$.C1()
x=7
return A.d(n.c_("user_news").ahL(s),$async$I5)
case 7:x=4
break
case 5:x=8
return A.d(n.c_("user_news").iI(0).da("news_id",v),$async$I5)
case 8:case 4:x=9
return A.d(n.c_("news").iI(0).da("id",v),$async$I5)
case 9:return A.j(null,w)}})
return A.k($async$I5,w)},
bb9(d){return B.dbX(d)},
dbX(d){var x=0,w=A.l(y.H),v
var $async$bb9=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.C1().c_("news").eT(0,A.z(["message",d.b],v,v)).da("id",d.d),$async$bb9)
case 2:return A.j(null,w)}})
return A.k($async$bb9,w)},
aqQ(d,e,f,g,h,i,j){return B.dbV(d,e,f,g,h,i,j)},
dbV(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$aqQ=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.C1().c_("news")
s=A.de()
s.toString
x=5
return A.d(t.j2(0,A.z(["occasion",s,"message",u,"created_by",$.dM().gdm().c.a],y.N,y.K)).iC(0),$async$aqQ)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.Y9(A_.Y7(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.M)(t),++q){p=new A.dg("")
new H.aLL(p).bn(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.d.bC(o).length===0)continue
r+=o}r=C.d.bC(r)
t=$.C1().c_("log_notifications")
s=A.de()
s.toString
x=8
return A.d(t.j2(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$aqQ)
case 8:A.bK(d,A.r("Message has been sent.",null),C.ac)
x=1
break
case 7:if(h)A.bK(d,A.r("Message has been created.",null),C.ac)
case 1:return A.j(v,w)}})
return A.k($async$aqQ,w)},
aqR(d){return B.dbW(d)},
dbW(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$aqR=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dM()
if(s.gdm().d==null)A.a7(A.cP("User must be logged in."))
v=$.C1()
u=v.c_("user_news").iI(0).da("user",s.gdm().c.a)
t=A.de()
t.toString
x=2
return A.d(u.da("occasion",t),$async$aqR)
case 2:x=3
return A.d(v.c_("user_news").j2(0,A.z(["user",s.gdm().c.a,"news_id",d,"occasion",A.de()],y.N,y.X)).iC(0),$async$aqR)
case 3:return A.j(null,w)}})
return A.k($async$aqR,w)}},D,A_,H,A0,A1,A2
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
B.El.prototype={
M(){return new B.aQB(A.a([],y.o))}}
B.aQB.prototype={
U(){var x,w=this
w.ah()
x=w.c
x.toString
G.aFd(x,!1).f.a3(0,new B.chp(w))
w.aY()},
l(){this.al()},
M1(){var x=0,w=A.l(y.H),v=this,u
var $async$M1=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Ee(u,null,y.X)
x=(u==null?null:u.grZ())===!0&&!v.e?2:3
break
case 2:x=$.dM().gdm().d!=null&&J.j2(v.d)&&!J.ii(v.d).f?4:5
break
case 4:x=6
return A.d(B.aqR(J.ii(v.d).d),$async$M1)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$M1,w)},
btu(d){I.iw(d,"newsForm",y.X).aH(new B.chi(this,d),y.P)},
a0r(){var x=0,w=A.l(y.H),v=this,u
var $async$a0r=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a00(),$async$a0r)
case 2:v.A(new u.chq(v,e))
return A.j(null,w)}})
return A.k($async$a0r,w)},
oe(){var x=0,w=A.l(y.H),v=this,u
var $async$oe=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(X.ly("newsOffline",B.dCN(),y.x),$async$oe)
case 2:v.A(new u.chr(v,e))
return A.j(null,w)}})
return A.k($async$oe,w)},
aY(){var x=0,w=A.l(y.H),v=this
var $async$aY=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.oe(),$async$aY)
case 2:x=3
return A.d(v.a0r(),$async$aY)
case 3:x=4
return A.d(A.nF("newsOffline",v.d,y.x),$async$aY)
case 4:v.M1()
return A.j(null,w)}})
return A.k($async$aY,w)},
B(d){var x,w,v=null,u=A.D(d).ax.a===C.t?$.ig():$.qj(),t=A.br(C.av)
t=Z.iC(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new Y.KN(v,v),v,!0,v,v,v,v,v,E.bu(A.R("News",v,v,v,v,v,v,v,A.an(v,v,new A.bl(t.a,t.b,t.c,0.8).bl(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.fe(this.d)?new A.a3(N.MI,A.aj(A.a([A.b1(D.ayH,A.D(d).ay,v,64),C.a4,A.R(A.Ye("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.b0,v,v,v,v)],y.p),C.j,C.bl,C.i,0,v,C.m),v):new A0.EF(new B.chn(this),v)
w=A.j_()
return U.f8(t,u,new A.cr(C.aW,v,v,new A.cE(new A.ac(0,720,0,1/0),x,v),v),v,v,A.ji(T.a1x(R.hn,new B.cho(this,d),v),w),v,v)}}
B.wJ.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["Y<~>(wJ)","B<mM<wJ>>(H)","vg(A<m,@>)"])
B.chp.prototype={
$0(){var x=0,w=A.l(y.H),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.aFd(t,!1).f.gaA9()===C.b.ds($.alc(),"news")){u.M1()
u.aY()}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2}
B.chi.prototype={
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
s=B.aqQ(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.c6(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aY(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:117}
B.chq.prototype={
$0(){this.a.d=this.b},
$S:0}
B.chr.prototype={
$0(){this.a.d=this.b},
$S:0}
B.chn.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bz(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.hh)
v.push(new A.eS(new B.chm(x,w,d,e),null))
C.b.H(t,v)}return A.aj(t,C.bh,C.f,C.i,0,null,C.m)},
$S:225}
B.chm.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.dU(x)===A.dU(w)&&A.ev(x)===A.ev(w)&&A.i6(x)===A.i6(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.ag(y.g).r.a
o===$&&A.b()
o=A.hw("EEEE d.M.y",o.gf_(0))
u=n.a
u.toString
u=o.dg(u)
if(n.f){o=p.c
o.toString
o=A.an(q,q,A.D(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.an(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ar(A1.i4,A.R(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.avf,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.an(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.an(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a3(A2.fN,A.R(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bI(10)
o=A.D(d)
t=n.b
t.toString
t=W.ip(q,18,t,!0,r.d,r.c)
s=$.dM().gdm().d
w.push(new A.a3(C.Cz,A.ar(q,A.aj(A.a([new A.a3(K.aX,t,q),A.ji(new A.a3(C.as,A.at(A.a([A.b1(D.aye,A.D(d).ay,q,16),M.Hs,A.R(C.c.j(n.e),q,q,q,q,q,q,q,A.an(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),O.iy],x),C.j,C.ds,C.i,0,q),q),s!=null)],x),C.j,C.f,C.i,0,q,C.m),C.k,q,q,new A.b3(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.j_())w.push(Q.An(q,q,D.azj,new B.chk(),new B.chl(p,n,d),C.as,q,q,y.B))
return A.aj(w,C.bh,C.f,C.i,0,q,C.m)},
$S:1218}
B.chl.prototype={
$1(d){return this.aMv(d)},
aMv(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.LV?2:4
break
case 2:x=5
return A.d(B.I5(t),$async$$1)
case 5:A.bK(s,A.r("Message has been removed.",null),C.ac)
x=3
break
case 4:u=P.qE(A.z(["content",t.b],y.N,y.z),A.de())
x=6
return A.d(L.fs(s,!1).f.iw(u,y.X).aH(new B.chj(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aY(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+0}
B.chj.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.ba(d)
x=4
return A.d(B.bb9(u),$async$$1)
case 4:A.bK(v.b,A.r("Message has been changed.",null),C.ac)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:117}
B.chk.prototype={
$1(d){var x=y.B
return A.a([F.pG(E.bu(V.Id,null),!0,48,D.asw,x),F.pG(E.bu(D.bIM,null),!0,48,D.LV,x)],y.h)},
$S:z+1}
B.cho.prototype={
$0(){return this.a.btu(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dCN","diR",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.El,A.J)
x(B.aQB,A.O)
w(A.cK,[B.chp,B.chq,B.chr,B.cho])
w(A.c9,[B.chi,B.chm,B.chl,B.chj,B.chk])
x(B.chn,A.ei)
x(B.wJ,A.eQ)})()
A.c4(b.typeUniverse,JSON.parse('{"El":{"J":[],"e":[]},"aQB":{"O":["El"]}}'))
var y=(function rtii(){var x=A.C
return{B:x("wJ"),_:x("Y<@>"),t:x("u<A<m,@>>"),o:x("u<vg>"),h:x("u<mM<wJ>>"),p:x("u<e>"),a:x("A<m,@>"),x:x("vg"),P:x("aF"),K:x("G"),N:x("m"),g:x("kE"),z:x("@"),X:x("G?"),H:x("~")}})();(function constants(){D.LV=new B.wJ(0,"delete")
D.asw=new B.wJ(1,"edit")
D.avf=new A.am(16,8,16,0)
D.aye=new A.aB(58652,"MaterialIcons",null,!1)
D.ayH=new A.aB(61075,"MaterialIcons",null,!1)
D.azj=new A.d3(S.NU,null,null,null,null)
D.bIM=new A.cn("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_326",e:"endPart",h:b})})($__dart_deferred_initializers__,"D6x/L7Buf8pedno5sVRfqnRqU+w=");