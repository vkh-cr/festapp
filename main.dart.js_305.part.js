((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_305",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,E,M,N,O,P,F,Q,R,S,T,G,U,V,B={
dnP(d,e){return new B.EC(e,d)},
EC:function EC(d,e){this.c=d
this.a=e},
aRh:function aRh(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
cl8:function cl8(d){this.a=d},
cl1:function cl1(d,e){this.a=d
this.b=e},
cl9:function cl9(d,e){this.a=d
this.b=e},
cla:function cla(d,e){this.a=d
this.b=e},
cl6:function cl6(d){this.a=d},
cl5:function cl5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cl4:function cl4(d,e,f){this.a=d
this.b=e
this.c=f},
cl2:function cl2(d,e){this.a=d
this.b=e},
cl3:function cl3(){},
cl7:function cl7(d,e){this.a=d
this.b=e},
x0:function x0(d,e){this.a=d
this.b=e},
dnO(d){return A.cY_(d)},
Ii(d){return B.dgJ(d)},
dgJ(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$Ii=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:n=$.Cl()
m=n.c7("news").j7(0,"id")
l=d.a
l.toString
v=d.d
m=A.mm(m.pr(m.qn("created_at","lt."+l.j(0))),m.$ti.c).aIB("id",v)
l=A.d4()
l.toString
x=2
return A.d(m.dm("occasion",l).bRy(0,"created_at").aHS(1).Re(),$async$Ii)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.c7("user_news").j7(0,"user").dm("news_id",v),$async$Ii)
case 6:t=f
s=A.a([],y.t)
for(n=J.aG(t),m=y.N,l=y.z,r=J.a0(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.fP
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.x(["user",q,"news_id",p,"occasion",o],m,l))}n=$.Cl()
x=7
return A.d(n.c7("user_news").aim(s),$async$Ii)
case 7:x=4
break
case 5:x=8
return A.d(n.c7("user_news").j_(0).dm("news_id",v),$async$Ii)
case 8:case 4:x=9
return A.d(n.c7("news").j_(0).dm("id",v),$async$Ii)
case 9:return A.j(null,w)}})
return A.k($async$Ii,w)},
bbW(d){return B.dgM(d)},
dgM(d){var x=0,w=A.l(y.H),v
var $async$bbW=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.Cl().c7("news").eW(0,A.x(["message",d.b],v,v)).dm("id",d.d),$async$bbW)
case 2:return A.j(null,w)}})
return A.k($async$bbW,w)},
arl(d,e,f,g,h,i,j){return B.dgK(d,e,f,g,h,i,j)},
dgK(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$arl=A.f(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Cl().c7("news")
s=A.d4()
s.toString
r=$.dE().gds().c
x=5
return A.d(t.ji(0,A.x(["occasion",s,"message",u,"created_by",(r==null?null:r.r).a],y.N,y.K)).iC(0),$async$arl)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.Yt(A0.Yr(g),"p"),s=t.length,q="",p=0;p<t.length;t.length===s||(0,A.M)(t),++p){r=new A.dd("")
new H.aMq(r).bp(t[p])
r=r.a
o=(r.charCodeAt(0)==0?r:r)+"\n"
if(C.d.bm(o).length===0)continue
q+=o}q=C.d.bm(q)
t=$.Cl().c7("log_notifications")
s=A.d4()
s.toString
x=8
return A.d(t.ji(0,A.x(["occasion",s,"to",j,"content",q,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$arl)
case 8:A.bw(d,A.q("Message has been sent.",null),C.a8)
x=1
break
case 7:if(h)A.bw(d,A.q("Message has been created.",null),C.a8)
case 1:return A.j(v,w)}})
return A.k($async$arl,w)},
arm(d){return B.dgL(d)},
dgL(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$arm=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dE()
if(s.gds().c==null)A.a7(A.cO("User must be logged in."))
v=$.Cl()
u=v.c7("user_news").j_(0)
t=s.gds().c
u=u.dm("user",(t==null?null:t.r).a)
t=A.d4()
t.toString
x=2
return A.d(u.dm("occasion",t),$async$arm)
case 2:v=v.c7("user_news")
s=s.gds().c
x=3
return A.d(v.ji(0,A.x(["user",(s==null?null:s.r).a,"news_id",d,"occasion",A.d4()],y.N,y.X)).iC(0),$async$arm)
case 3:return A.j(null,w)}})
return A.k($async$arm,w)}},D,W,X,Y,Z,H,A_,A0,A1,A2
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
B.EC.prototype={
M(){return new B.aRh(A.a([],y.o))}}
B.aRh.prototype={
S(){var x,w=this
w.ah()
x=w.c
x.toString
G.Mf(x,!1).f.a2(0,new B.cl8(w))
w.aX()},
l(){this.ai()},
Mg(){var x=0,w=A.l(y.H),v=this,u
var $async$Mg=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Ev(u,null,y.X)
x=(u==null?null:u.gt3())===!0&&!v.e?2:3
break
case 2:x=$.dE().gds().c!=null&&J.h_(v.d)&&!J.hF(v.d).f?4:5
break
case 4:x=6
return A.d(B.arm(J.hF(v.d).d),$async$Mg)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$Mg,w)},
buY(d){I.iz(d,"newsForm",y.X).aJ(new B.cl1(this,d),y.P)},
a0T(){var x=0,w=A.l(y.H),v=this,u
var $async$a0T=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a0o(),$async$a0T)
case 2:v.v(new u.cl9(v,e))
return A.j(null,w)}})
return A.k($async$a0T,w)},
xX(){var x=0,w=A.l(y.H),v=this,u
var $async$xX=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(V.la("newsOffline",B.dHU(),y.x),$async$xX)
case 2:v.v(new u.cla(v,e))
return A.j(null,w)}})
return A.k($async$xX,w)},
aX(){var x=0,w=A.l(y.H),v=this
var $async$aX=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.xX(),$async$aX)
case 2:x=3
return A.d(v.a0T(),$async$aX)
case 3:x=4
return A.d(A.oE("newsOffline",v.d,y.x),$async$aX)
case 4:v.Mg()
return A.j(null,w)}})
return A.k($async$aX,w)},
B(d){var x,w,v=null,u=A.D(d).ax.a===C.r?$.hT():$.p9(),t=A.bu(C.as)
t=Z.iG(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new U.L3(v,v),v,!0,v,v,v,v,v,E.bA(A.L("News",v,v,v,v,v,v,v,A.af(v,v,new A.bn(t.a,t.b,t.c,0.8).bl(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eC(this.d)?new A.a1(M.N_,A.ae(A.a([A.aS(D.azk,A.D(d).ay,v,64),C.a1,A.L(A.Yy("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.aZ,v,v,v,v)],y.p),C.j,C.bm,C.i,0,v,C.m),v):new A1.EW(new B.cl6(this),v)
w=A.j6()
return X.fc(t,u,new A.cq(C.aX,v,v,new A.cH(new A.aa(0,720,0,1/0),x,v),v),v,v,A.ju(R.a1V(P.hu,S.qV,new B.cl7(this,d),v),w),v,v)}}
B.x0.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["X<~>(x0)","C<mY<x0>>(G)","vz(A<h,@>)"])
B.cl8.prototype={
$0(){var x=0,w=A.l(y.H),v=this,u,t
var $async$$0=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.Mf(t,!1).f.gabi()===C.b.dj($.YD(),"news")){u.Mg()
u.aX()}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2}
B.cl1.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:y.a.a(d)
u=J.a0(d)
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
s=B.arl(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.cc(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aX(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:114}
B.cl9.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cla.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cl6.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bp(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.fR)
v.push(new A.eS(new B.cl5(x,w,d,e),null))
C.b.H(t,v)}return A.ae(t,C.bi,C.f,C.i,0,null,C.m)},
$S:212}
B.cl5.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.dS(x)===A.dS(w)&&A.eA(x)===A.eA(w)&&A.iP(x)===A.iP(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.ac(y.g).r.a
o===$&&A.b()
o=A.h3("EEEE d.M.y",o.geV(0))
u=n.a
u.toString
u=o.cF(u)
if(n.f){o=p.c
o.toString
o=A.af(q,q,A.D(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.af(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ap(W.iS,A.L(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.avH,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.af(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.af(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a1(A_.fU,A.L(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bx(10)
o=A.D(d)
t=n.b
t.toString
t=Y.i9(q,18,t,!0,r.d,r.c)
s=$.dE().gds().c
w.push(new A.a1(C.rO,A.ap(q,A.ae(A.a([new A.a1(A2.aT,t,q),A.ju(new A.a1(C.au,A.ar(A.a([A.aS(D.ayR,A.D(d).ay,q,16),K.HG,A.L(C.c.j(n.e),q,q,q,q,q,q,q,A.af(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.hd],x),C.j,C.dt,C.i,0,q),q),s!=null)],x),C.j,C.f,C.i,0,q,C.m),C.k,q,q,new A.b1(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.j6())w.push(O.xP(q,q,D.azZ,new B.cl3(),C.o,new B.cl4(p,n,d),C.au,q,q,q,y.B))
return A.ae(w,C.bi,C.f,C.i,0,q,C.m)},
$S:1255}
B.cl4.prototype={
$1(d){return this.aNa(d)},
aNa(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.M9?2:4
break
case 2:x=5
return A.d(B.Ii(t),$async$$1)
case 5:A.bw(s,A.q("Message has been removed.",null),C.a8)
x=3
break
case 4:u=N.pz(A.x(["content",t.b],y.N,y.z),A.d4())
x=6
return A.d(L.ff(s,!1).f.i4(u,y.X).aJ(new B.cl2(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aX(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+0}
B.cl2.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.b9(d)
x=4
return A.d(B.bbW(u),$async$$1)
case 4:A.bw(v.b,A.q("Message has been changed.",null),C.a8)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:114}
B.cl3.prototype={
$1(d){var x=y.B
return A.a([F.nN(E.bA(T.Ir,null),!0,48,D.asU,x),F.nN(E.bA(D.bJp,null),!0,48,D.M9,x)],y.h)},
$S:z+1}
B.cl7.prototype={
$0(){return this.a.buY(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dHU","dnO",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.EC,A.K)
x(B.aRh,A.P)
w(A.cY,[B.cl8,B.cl9,B.cla,B.cl7])
w(A.ce,[B.cl1,B.cl5,B.cl4,B.cl2,B.cl3])
x(B.cl6,A.ew)
x(B.x0,A.fm)})()
A.c9(b.typeUniverse,JSON.parse('{"EC":{"K":[],"e":[]},"aRh":{"P":["EC"]}}'))
var y=(function rtii(){var x=A.E
return{B:x("x0"),_:x("X<@>"),t:x("u<A<h,@>>"),o:x("u<vz>"),h:x("u<mY<x0>>"),p:x("u<e>"),a:x("A<h,@>"),x:x("vz"),P:x("aE"),K:x("I"),N:x("h"),g:x("ks"),z:x("@"),X:x("I?"),H:x("~")}})();(function constants(){D.M9=new B.x0(0,"delete")
D.asU=new B.x0(1,"edit")
D.avH=new A.ak(16,8,16,0)
D.ayR=new A.az(58652,"MaterialIcons",null,!1)
D.azk=new A.az(61075,"MaterialIcons",null,!1)
D.azZ=new A.d1(Q.O7,null,null,null,null)
D.bJp=new A.cx("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_305",e:"endPart",h:b})})($__dart_deferred_initializers__,"Qbl7t7CvKWQZZcYhOysutjGWFcc=");