((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_305",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,E,M,N,O,P,F,Q,R,S,T,G,U,V,B={
dmC(d,e){return new B.Ez(e,d)},
Ez:function Ez(d,e){this.c=d
this.a=e},
aR1:function aR1(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
ck8:function ck8(d){this.a=d},
ck1:function ck1(d,e){this.a=d
this.b=e},
ck9:function ck9(d,e){this.a=d
this.b=e},
cka:function cka(d,e){this.a=d
this.b=e},
ck6:function ck6(d){this.a=d},
ck5:function ck5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ck4:function ck4(d,e,f){this.a=d
this.b=e
this.c=f},
ck2:function ck2(d,e){this.a=d
this.b=e},
ck3:function ck3(){},
ck7:function ck7(d,e){this.a=d
this.b=e},
x_:function x_(d,e){this.a=d
this.b=e},
dmB(d){return A.cWU(d)},
Ig(d){return B.dfC(d)},
dfC(d){var x=0,w=A.m(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$Ig=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:n=$.Cg()
m=n.c8("news").j7(0,"id")
l=d.a
l.toString
v=d.d
m=A.ml(m.pr(m.qm("created_at","lt."+l.j(0))),m.$ti.c).aIu("id",v)
l=A.df()
l.toString
x=2
return A.d(m.dl("occasion",l).bRl(0,"created_at").aHL(1).Re(),$async$Ig)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.c8("user_news").j7(0,"user").dl("news_id",v),$async$Ig)
case 6:t=f
s=A.a([],y.t)
for(n=J.aG(t),m=y.N,l=y.z,r=J.a1(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.fP
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.y(["user",q,"news_id",p,"occasion",o],m,l))}n=$.Cg()
x=7
return A.d(n.c8("user_news").aLB(s),$async$Ig)
case 7:x=4
break
case 5:x=8
return A.d(n.c8("user_news").j_(0).dl("news_id",v),$async$Ig)
case 8:case 4:x=9
return A.d(n.c8("news").j_(0).dl("id",v),$async$Ig)
case 9:return A.k(null,w)}})
return A.l($async$Ig,w)},
bbF(d){return B.dfF(d)},
dfF(d){var x=0,w=A.m(y.H),v
var $async$bbF=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.Cg().c8("news").eW(0,A.y(["message",d.b],v,v)).dl("id",d.d),$async$bbF)
case 2:return A.k(null,w)}})
return A.l($async$bbF,w)},
arc(d,e,f,g,h,i,j){return B.dfD(d,e,f,g,h,i,j)},
dfD(d,e,f,g,h,i,j){var x=0,w=A.m(y.z),v,u,t,s,r,q,p,o
var $async$arc=A.h(function(k,l){if(k===1)return A.j(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Cg().c8("news")
s=A.df()
s.toString
r=$.dD().gds().c
x=5
return A.d(t.ji(0,A.y(["occasion",s,"message",u,"created_by",(r==null?null:r.r).a],y.N,y.K)).iC(0),$async$arc)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.Yu(A0.Ys(g),"p"),s=t.length,q="",p=0;p<t.length;t.length===s||(0,A.M)(t),++p){r=new A.dk("")
new H.aMb(r).bn(t[p])
r=r.a
o=(r.charCodeAt(0)==0?r:r)+"\n"
if(C.d.bq(o).length===0)continue
q+=o}q=C.d.bq(q)
t=$.Cg().c8("log_notifications")
s=A.df()
s.toString
x=8
return A.d(t.ji(0,A.y(["occasion",s,"to",j,"content",q,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$arc)
case 8:A.bH(d,A.q("Message has been sent.",null),C.ac)
x=1
break
case 7:if(h)A.bH(d,A.q("Message has been created.",null),C.ac)
case 1:return A.k(v,w)}})
return A.l($async$arc,w)},
ard(d){return B.dfE(d)},
dfE(d){var x=0,w=A.m(y.H),v,u,t,s
var $async$ard=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:s=$.dD()
if(s.gds().c==null)A.a7(A.cO("User must be logged in."))
v=$.Cg()
u=v.c8("user_news").j_(0)
t=s.gds().c
u=u.dl("user",(t==null?null:t.r).a)
t=A.df()
t.toString
x=2
return A.d(u.dl("occasion",t),$async$ard)
case 2:v=v.c8("user_news")
s=s.gds().c
x=3
return A.d(v.ji(0,A.y(["user",(s==null?null:s.r).a,"news_id",d,"occasion",A.df()],y.N,y.X)).iC(0),$async$ard)
case 3:return A.k(null,w)}})
return A.l($async$ard,w)}},D,W,X,Y,Z,H,A_,A0,A1,A2
J=c[1]
A=c[0]
C=c[2]
I=c[163]
K=c[175]
L=c[167]
E=c[166]
M=c[228]
N=c[127]
O=c[82]
P=c[230]
F=c[106]
Q=c[231]
R=c[119]
S=c[178]
T=c[207]
G=c[97]
U=c[96]
V=c[146]
B=a.updateHolder(c[19],B)
D=c[229]
W=c[199]
X=c[168]
Y=c[150]
Z=c[164]
H=c[156]
A_=c[227]
A0=c[124]
A1=c[141]
A2=c[170]
B.Ez.prototype={
M(){return new B.aR1(A.a([],y.o))}}
B.aR1.prototype={
S(){var x,w=this
w.ah()
x=w.c
x.toString
G.Me(x,!1).f.a2(0,new B.ck8(w))
w.aX()},
l(){this.ai()},
Mf(){var x=0,w=A.m(y.H),v=this,u
var $async$Mf=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Es(u,null,y.X)
x=(u==null?null:u.gt3())===!0&&!v.e?2:3
break
case 2:x=$.dD().gds().c!=null&&J.fZ(v.d)&&!J.hD(v.d).f?4:5
break
case 4:x=6
return A.d(B.ard(J.hD(v.d).d),$async$Mf)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.k(null,w)}})
return A.l($async$Mf,w)},
buO(d){I.iy(d,"newsForm",y.X).aJ(new B.ck1(this,d),y.P)},
a0S(){var x=0,w=A.m(y.H),v=this,u
var $async$a0S=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a0n(),$async$a0S)
case 2:v.v(new u.ck9(v,e))
return A.k(null,w)}})
return A.l($async$a0S,w)},
xX(){var x=0,w=A.m(y.H),v=this,u
var $async$xX=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(V.l9("newsOffline",B.dGy(),y.x),$async$xX)
case 2:v.v(new u.cka(v,e))
return A.k(null,w)}})
return A.l($async$xX,w)},
aX(){var x=0,w=A.m(y.H),v=this
var $async$aX=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.xX(),$async$aX)
case 2:x=3
return A.d(v.a0S(),$async$aX)
case 3:x=4
return A.d(A.oC("newsOffline",v.d,y.x),$async$aX)
case 4:v.Mf()
return A.k(null,w)}})
return A.l($async$aX,w)},
B(d){var x,w,v=null,u=A.D(d).ax.a===C.q?$.hS():$.p7(),t=A.bt(C.as)
t=Z.iE(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new U.L1(v,v),v,!0,v,v,v,v,v,E.by(A.L("News",v,v,v,v,v,v,v,A.af(v,v,new A.bn(t.a,t.b,t.c,0.8).bl(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eC(this.d)?new A.a0(M.MZ,A.ae(A.a([A.aS(D.azi,A.D(d).ay,v,64),C.a1,A.L(A.Yz("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.aZ,v,v,v,v)],y.p),C.j,C.bm,C.i,0,v,C.m),v):new A1.ET(new B.ck6(this),v)
w=A.j3()
return X.fa(t,u,new A.cq(C.aX,v,v,new A.cH(new A.aa(0,720,0,1/0),x,v),v),v,v,A.js(R.a1T(P.hu,S.qU,new B.ck7(this,d),v),w),v,v)}}
B.x_.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["X<~>(x_)","B<mX<x_>>(G)","vv(A<i,@>)"])
B.ck8.prototype={
$0(){var x=0,w=A.m(y.H),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.Me(t,!1).f.gabe()===C.b.dm($.YE(),"news")){u.Mf()
u.aX()}return A.k(null,w)}})
return A.l($async$$0,w)},
$S:2}
B.ck1.prototype={
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
s=B.arc(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.cb(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aX(),$async$$1)
case 7:case 6:case 3:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:119}
B.ck9.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cka.prototype={
$0(){this.a.d=this.b},
$S:0}
B.ck6.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bv(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.fR)
v.push(new A.eR(new B.ck5(x,w,d,e),null))
C.b.H(t,v)}return A.ae(t,C.bi,C.f,C.i,0,null,C.m)},
$S:246}
B.ck5.prototype={
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
o=A.af(q,q,A.D(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.af(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ap(W.iS,A.L(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.avF,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.af(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.af(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a0(A_.fU,A.L(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bB(10)
o=A.D(d)
t=n.b
t.toString
t=Y.i7(q,18,t,!0,r.d,r.c)
s=$.dD().gds().c
w.push(new A.a0(C.rN,A.ap(q,A.ae(A.a([new A.a0(A2.aT,t,q),A.js(new A.a0(C.au,A.ar(A.a([A.aS(D.ayP,A.D(d).ay,q,16),K.HF,A.L(C.c.j(n.e),q,q,q,q,q,q,q,A.af(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.hd],x),C.j,C.dt,C.i,0,q),q),s!=null)],x),C.j,C.f,C.i,0,q,C.m),C.k,q,q,new A.b1(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.j3())w.push(O.xO(q,q,D.azX,new B.ck3(),C.o,new B.ck4(p,n,d),C.au,q,q,q,y.B))
return A.ae(w,C.bi,C.f,C.i,0,q,C.m)},
$S:1248}
B.ck4.prototype={
$1(d){return this.aN4(d)},
aN4(d){var x=0,w=A.m(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.M8?2:4
break
case 2:x=5
return A.d(B.Ig(t),$async$$1)
case 5:A.bH(s,A.q("Message has been removed.",null),C.ac)
x=3
break
case 4:u=N.py(A.y(["content",t.b],y.N,y.z),A.df())
x=6
return A.d(L.fd(s,!1).f.i3(u,y.X).aJ(new B.ck2(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aX(),$async$$1)
case 7:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:z+0}
B.ck2.prototype={
$1(d){var x=0,w=A.m(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.b9(d)
x=4
return A.d(B.bbF(u),$async$$1)
case 4:A.bH(v.b,A.q("Message has been changed.",null),C.ac)
case 3:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:119}
B.ck3.prototype={
$1(d){var x=y.B
return A.a([F.nM(E.by(T.Iq,null),!0,48,D.asS,x),F.nM(E.by(D.bJl,null),!0,48,D.M8,x)],y.h)},
$S:z+1}
B.ck7.prototype={
$0(){return this.a.buO(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dGy","dmB",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ez,A.J)
x(B.aR1,A.P)
w(A.cW,[B.ck8,B.ck9,B.cka,B.ck7])
w(A.ce,[B.ck1,B.ck5,B.ck4,B.ck2,B.ck3])
x(B.ck6,A.ev)
x(B.x_,A.fm)})()
A.c9(b.typeUniverse,JSON.parse('{"Ez":{"J":[],"e":[]},"aR1":{"P":["Ez"]}}'))
var y=(function rtii(){var x=A.E
return{B:x("x_"),_:x("X<@>"),t:x("u<A<i,@>>"),o:x("u<vv>"),h:x("u<mX<x_>>"),p:x("u<e>"),a:x("A<i,@>"),x:x("vv"),P:x("aF"),K:x("H"),N:x("i"),g:x("kr"),z:x("@"),X:x("H?"),H:x("~")}})();(function constants(){D.M8=new B.x_(0,"delete")
D.asS=new B.x_(1,"edit")
D.avF=new A.ak(16,8,16,0)
D.ayP=new A.az(58652,"MaterialIcons",null,!1)
D.azi=new A.az(61075,"MaterialIcons",null,!1)
D.azX=new A.d_(Q.O6,null,null,null,null)
D.bJl=new A.cx("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_305",e:"endPart",h:b})})($__dart_deferred_initializers__,"0S05HrMyoDrhpr0FijReizzWsHQ=");