((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_304",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,E,M,N,O,P,F,Q,R,S,T,U,G,V,B={
dmw(d,e){return new B.Ey(e,d)},
Ey:function Ey(d,e){this.c=d
this.a=e},
aQZ:function aQZ(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
ck5:function ck5(d){this.a=d},
cjZ:function cjZ(d,e){this.a=d
this.b=e},
ck6:function ck6(d,e){this.a=d
this.b=e},
ck7:function ck7(d,e){this.a=d
this.b=e},
ck3:function ck3(d){this.a=d},
ck2:function ck2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ck1:function ck1(d,e,f){this.a=d
this.b=e
this.c=f},
ck_:function ck_(d,e){this.a=d
this.b=e},
ck0:function ck0(){},
ck4:function ck4(d,e){this.a=d
this.b=e},
wZ:function wZ(d,e){this.a=d
this.b=e},
dmv(d){return A.cWO(d)},
Ie(d){return B.dfx(d)},
dfx(d){var x=0,w=A.m(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$Ie=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:n=$.Cb()
m=n.c8("news").j7(0,"id")
l=d.a
l.toString
v=d.d
m=A.ml(m.pq(m.qm("created_at","lt."+l.j(0))),m.$ti.c).aIu("id",v)
l=A.df()
l.toString
x=2
return A.d(m.dl("occasion",l).bRk(0,"created_at").aHL(1).Rf(),$async$Ie)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.c8("user_news").j7(0,"user").dl("news_id",v),$async$Ie)
case 6:t=f
s=A.a([],y.t)
for(n=J.aF(t),m=y.N,l=y.z,r=J.a1(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.fP
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.y(["user",q,"news_id",p,"occasion",o],m,l))}n=$.Cb()
x=7
return A.d(n.c8("user_news").aLD(s),$async$Ie)
case 7:x=4
break
case 5:x=8
return A.d(n.c8("user_news").j_(0).dl("news_id",v),$async$Ie)
case 8:case 4:x=9
return A.d(n.c8("news").j_(0).dl("id",v),$async$Ie)
case 9:return A.k(null,w)}})
return A.l($async$Ie,w)},
bbE(d){return B.dfA(d)},
dfA(d){var x=0,w=A.m(y.H),v
var $async$bbE=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.Cb().c8("news").eW(0,A.y(["message",d.b],v,v)).dl("id",d.d),$async$bbE)
case 2:return A.k(null,w)}})
return A.l($async$bbE,w)},
ar9(d,e,f,g,h,i,j){return B.dfy(d,e,f,g,h,i,j)},
dfy(d,e,f,g,h,i,j){var x=0,w=A.m(y.z),v,u,t,s,r,q,p,o
var $async$ar9=A.h(function(k,l){if(k===1)return A.j(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Cb().c8("news")
s=A.df()
s.toString
x=5
return A.d(t.ji(0,A.y(["occasion",s,"message",u,"created_by",$.dM().gdw().c.a],y.N,y.K)).iC(0),$async$ar9)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.Yq(A0.Yo(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.M)(t),++q){p=new A.dk("")
new H.aM8(p).bn(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.d.bt(o).length===0)continue
r+=o}r=C.d.bt(r)
t=$.Cb().c8("log_notifications")
s=A.df()
s.toString
x=8
return A.d(t.ji(0,A.y(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$ar9)
case 8:A.bH(d,A.q("Message has been sent.",null),C.ac)
x=1
break
case 7:if(h)A.bH(d,A.q("Message has been created.",null),C.ac)
case 1:return A.k(v,w)}})
return A.l($async$ar9,w)},
ara(d){return B.dfz(d)},
dfz(d){var x=0,w=A.m(y.H),v,u,t,s
var $async$ara=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:s=$.dM()
if(s.gdw().d==null)A.a7(A.cN("User must be logged in."))
v=$.Cb()
u=v.c8("user_news").j_(0).dl("user",s.gdw().c.a)
t=A.df()
t.toString
x=2
return A.d(u.dl("occasion",t),$async$ara)
case 2:x=3
return A.d(v.c8("user_news").ji(0,A.y(["user",s.gdw().c.a,"news_id",d,"occasion",A.df()],y.N,y.X)).iC(0),$async$ara)
case 3:return A.k(null,w)}})
return A.l($async$ara,w)}},D,W,X,Y,Z,H,A_,A0,A1,A2
J=c[1]
A=c[0]
C=c[2]
I=c[164]
K=c[176]
L=c[168]
E=c[167]
M=c[230]
N=c[128]
O=c[84]
P=c[232]
F=c[107]
Q=c[233]
R=c[120]
S=c[179]
T=c[209]
U=c[98]
G=c[71]
V=c[147]
B=a.updateHolder(c[19],B)
D=c[231]
W=c[201]
X=c[169]
Y=c[151]
Z=c[165]
H=c[157]
A_=c[229]
A0=c[125]
A1=c[142]
A2=c[171]
B.Ey.prototype={
M(){return new B.aQZ(A.a([],y.o))}}
B.aQZ.prototype={
T(){var x,w=this
w.ah()
x=w.c
x.toString
G.aFx(x,!1).f.a2(0,new B.ck5(w))
w.aZ()},
l(){this.ai()},
Mg(){var x=0,w=A.m(y.H),v=this,u
var $async$Mg=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Er(u,null,y.X)
x=(u==null?null:u.gt3())===!0&&!v.e?2:3
break
case 2:x=$.dM().gdw().d!=null&&J.fY(v.d)&&!J.hD(v.d).f?4:5
break
case 4:x=6
return A.d(B.ara(J.hD(v.d).d),$async$Mg)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.k(null,w)}})
return A.l($async$Mg,w)},
buP(d){I.iy(d,"newsForm",y.X).aI(new B.cjZ(this,d),y.P)},
a0S(){var x=0,w=A.m(y.H),v=this,u
var $async$a0S=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a0k(),$async$a0S)
case 2:v.u(new u.ck6(v,e))
return A.k(null,w)}})
return A.l($async$a0S,w)},
xX(){var x=0,w=A.m(y.H),v=this,u
var $async$xX=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(V.l9("newsOffline",B.dGs(),y.x),$async$xX)
case 2:v.u(new u.ck7(v,e))
return A.k(null,w)}})
return A.l($async$xX,w)},
aZ(){var x=0,w=A.m(y.H),v=this
var $async$aZ=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.xX(),$async$aZ)
case 2:x=3
return A.d(v.a0S(),$async$aZ)
case 3:x=4
return A.d(A.oC("newsOffline",v.d,y.x),$async$aZ)
case 4:v.Mg()
return A.k(null,w)}})
return A.l($async$aZ,w)},
B(d){var x,w,v=null,u=A.D(d).ax.a===C.r?$.hS():$.p7(),t=A.bt(C.as)
t=Z.iE(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new U.KU(v,v),v,!0,v,v,v,v,v,E.by(A.L("News",v,v,v,v,v,v,v,A.ag(v,v,new A.bn(t.a,t.b,t.c,0.8).bl(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eC(this.d)?new A.a0(M.MW,A.ae(A.a([A.aT(D.azg,A.D(d).ay,v,64),C.a1,A.L(A.Yw("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.aZ,v,v,v,v)],y.p),C.j,C.bm,C.i,0,v,C.l),v):new A1.ES(new B.ck3(this),v)
w=A.j2()
return X.fa(t,u,new A.cq(C.aX,v,v,new A.cH(new A.aa(0,720,0,1/0),x,v),v),v,v,A.js(R.a1Q(P.ht,S.qU,new B.ck4(this,d),v),w),v,v)}}
B.wZ.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["X<~>(wZ)","B<mX<wZ>>(G)","vv(A<i,@>)"])
B.ck5.prototype={
$0(){var x=0,w=A.m(y.H),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.aFx(t,!1).f.gaAM()===C.b.dr($.aly(),"news")){u.Mg()
u.aZ()}return A.k(null,w)}})
return A.l($async$$0,w)},
$S:2}
B.cjZ.prototype={
$1(d){var x=0,w=A.m(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.j(f,w)
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
s=B.ar9(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.ca(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aZ(),$async$$1)
case 7:case 6:case 3:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:117}
B.ck6.prototype={
$0(){this.a.d=this.b},
$S:0}
B.ck7.prototype={
$0(){this.a.d=this.b},
$S:0}
B.ck3.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bv(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.fO)
v.push(new A.eR(new B.ck2(x,w,d,e),null))
C.b.H(t,v)}return A.ae(t,C.bi,C.f,C.i,0,null,C.l)},
$S:263}
B.ck2.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.dR(x)===A.dR(w)&&A.eA(x)===A.eA(w)&&A.iN(x)===A.iN(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.ac(y.g).r.a
o===$&&A.b()
o=A.hd("EEEE d.M.y",o.geV(0))
u=n.a
u.toString
u=o.cF(u)
if(n.f){o=p.c
o.toString
o=A.ag(q,q,A.D(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.ag(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ap(W.iR,A.L(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.avE,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.ag(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.ag(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a0(A_.fR,A.L(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bD(10)
o=A.D(d)
t=n.b
t.toString
t=Y.i7(q,18,t,!0,r.d,r.c)
s=$.dM().gdw().d
w.push(new A.a0(C.rN,A.ap(q,A.ae(A.a([new A.a0(A2.aT,t,q),A.js(new A.a0(C.au,A.as(A.a([A.aT(D.ayN,A.D(d).ay,q,16),K.HF,A.L(C.c.j(n.e),q,q,q,q,q,q,q,A.ag(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.hb],x),C.j,C.du,C.i,0,q),q),s!=null)],x),C.j,C.f,C.i,0,q,C.l),C.k,q,q,new A.b4(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.j2())w.push(O.xM(q,q,D.azT,new B.ck0(),C.n,new B.ck1(p,n,d),C.au,q,q,q,y.B))
return A.ae(w,C.bi,C.f,C.i,0,q,C.l)},
$S:1247}
B.ck1.prototype={
$1(d){return this.aN6(d)},
aN6(d){var x=0,w=A.m(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.M6?2:4
break
case 2:x=5
return A.d(B.Ie(t),$async$$1)
case 5:A.bH(s,A.q("Message has been removed.",null),C.ac)
x=3
break
case 4:u=N.py(A.y(["content",t.b],y.N,y.z),A.df())
x=6
return A.d(L.fd(s,!1).f.i3(u,y.X).aI(new B.ck_(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aZ(),$async$$1)
case 7:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:z+0}
B.ck_.prototype={
$1(d){var x=0,w=A.m(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.b9(d)
x=4
return A.d(B.bbE(u),$async$$1)
case 4:A.bH(v.b,A.q("Message has been changed.",null),C.ac)
case 3:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:117}
B.ck0.prototype={
$1(d){var x=y.B
return A.a([F.nN(E.by(T.Io,null),!0,48,D.asQ,x),F.nN(E.by(D.bJi,null),!0,48,D.M6,x)],y.h)},
$S:z+1}
B.ck4.prototype={
$0(){return this.a.buP(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dGs","dmv",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ey,A.J)
x(B.aQZ,A.P)
w(A.cV,[B.ck5,B.ck6,B.ck7,B.ck4])
w(A.ce,[B.cjZ,B.ck2,B.ck1,B.ck_,B.ck0])
x(B.ck3,A.ev)
x(B.wZ,A.fm)})()
A.c8(b.typeUniverse,JSON.parse('{"Ey":{"J":[],"e":[]},"aQZ":{"P":["Ey"]}}'))
var y=(function rtii(){var x=A.E
return{B:x("wZ"),_:x("X<@>"),t:x("u<A<i,@>>"),o:x("u<vv>"),h:x("u<mX<wZ>>"),p:x("u<e>"),a:x("A<i,@>"),x:x("vv"),P:x("aG"),K:x("H"),N:x("i"),g:x("kr"),z:x("@"),X:x("H?"),H:x("~")}})();(function constants(){D.M6=new B.wZ(0,"delete")
D.asQ=new B.wZ(1,"edit")
D.avE=new A.ak(16,8,16,0)
D.ayN=new A.aB(58652,"MaterialIcons",null,!1)
D.azg=new A.aB(61075,"MaterialIcons",null,!1)
D.azT=new A.cZ(Q.O3,null,null,null,null)
D.bJi=new A.cx("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_304",e:"endPart",h:b})})($__dart_deferred_initializers__,"cC/m1V60nQxyG9SUgbMfo0Lf5xQ=");