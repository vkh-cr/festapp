((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_304",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,E,M,N,O,P,F,Q,R,S,T,U,G,V,B={
dlQ(d,e){return new B.Ex(e,d)},
Ex:function Ex(d,e){this.c=d
this.a=e},
aQU:function aQU(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
cjP:function cjP(d){this.a=d},
cjI:function cjI(d,e){this.a=d
this.b=e},
cjQ:function cjQ(d,e){this.a=d
this.b=e},
cjR:function cjR(d,e){this.a=d
this.b=e},
cjN:function cjN(d){this.a=d},
cjM:function cjM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cjL:function cjL(d,e,f){this.a=d
this.b=e
this.c=f},
cjJ:function cjJ(d,e){this.a=d
this.b=e},
cjK:function cjK(){},
cjO:function cjO(d,e){this.a=d
this.b=e},
wX:function wX(d,e){this.a=d
this.b=e},
dlP(d){return A.cW6(d)},
Ic(d){return B.deR(d)},
deR(d){var x=0,w=A.m(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$Ic=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:n=$.C8()
m=n.c8("news").j6(0,"id")
l=d.a
l.toString
v=d.d
m=A.mj(m.pq(m.qm("created_at","lt."+l.j(0))),m.$ti.c).aIo("id",v)
l=A.df()
l.toString
x=2
return A.d(m.dl("occasion",l).bR_(0,"created_at").aHF(1).Re(),$async$Ic)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.c8("user_news").j6(0,"user").dl("news_id",v),$async$Ic)
case 6:t=f
s=A.a([],y.t)
for(n=J.aF(t),m=y.N,l=y.z,r=J.a0(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.fO
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.y(["user",q,"news_id",p,"occasion",o],m,l))}n=$.C8()
x=7
return A.d(n.c8("user_news").aLy(s),$async$Ic)
case 7:x=4
break
case 5:x=8
return A.d(n.c8("user_news").iZ(0).dl("news_id",v),$async$Ic)
case 8:case 4:x=9
return A.d(n.c8("news").iZ(0).dl("id",v),$async$Ic)
case 9:return A.k(null,w)}})
return A.l($async$Ic,w)},
bbA(d){return B.deU(d)},
deU(d){var x=0,w=A.m(y.H),v
var $async$bbA=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.C8().c8("news").eV(0,A.y(["message",d.b],v,v)).dl("id",d.d),$async$bbA)
case 2:return A.k(null,w)}})
return A.l($async$bbA,w)},
ar4(d,e,f,g,h,i,j){return B.deS(d,e,f,g,h,i,j)},
deS(d,e,f,g,h,i,j){var x=0,w=A.m(y.z),v,u,t,s,r,q,p,o
var $async$ar4=A.h(function(k,l){if(k===1)return A.j(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.C8().c8("news")
s=A.df()
s.toString
x=5
return A.d(t.jh(0,A.y(["occasion",s,"message",u,"created_by",$.dM().gdw().c.a],y.N,y.K)).iB(0),$async$ar4)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.Yn(A0.Yl(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.N)(t),++q){p=new A.dk("")
new H.aM3(p).bn(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.d.bt(o).length===0)continue
r+=o}r=C.d.bt(r)
t=$.C8().c8("log_notifications")
s=A.df()
s.toString
x=8
return A.d(t.jh(0,A.y(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$ar4)
case 8:A.bH(d,A.q("Message has been sent.",null),C.ad)
x=1
break
case 7:if(h)A.bH(d,A.q("Message has been created.",null),C.ad)
case 1:return A.k(v,w)}})
return A.l($async$ar4,w)},
ar5(d){return B.deT(d)},
deT(d){var x=0,w=A.m(y.H),v,u,t,s
var $async$ar5=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:s=$.dM()
if(s.gdw().d==null)A.a7(A.cN("User must be logged in."))
v=$.C8()
u=v.c8("user_news").iZ(0).dl("user",s.gdw().c.a)
t=A.df()
t.toString
x=2
return A.d(u.dl("occasion",t),$async$ar5)
case 2:x=3
return A.d(v.c8("user_news").jh(0,A.y(["user",s.gdw().c.a,"news_id",d,"occasion",A.df()],y.N,y.X)).iB(0),$async$ar5)
case 3:return A.k(null,w)}})
return A.l($async$ar5,w)}},D,W,X,Y,Z,H,A_,A0,A1,A2
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
B.Ex.prototype={
M(){return new B.aQU(A.a([],y.o))}}
B.aQU.prototype={
S(){var x,w=this
w.ah()
x=w.c
x.toString
G.aFs(x,!1).f.a2(0,new B.cjP(w))
w.aZ()},
l(){this.ai()},
Mf(){var x=0,w=A.m(y.H),v=this,u
var $async$Mf=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Eq(u,null,y.X)
x=(u==null?null:u.gt3())===!0&&!v.e?2:3
break
case 2:x=$.dM().gdw().d!=null&&J.fX(v.d)&&!J.hD(v.d).f?4:5
break
case 4:x=6
return A.d(B.ar5(J.hD(v.d).d),$async$Mf)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.k(null,w)}})
return A.l($async$Mf,w)},
buA(d){I.iy(d,"newsForm",y.X).aI(new B.cjI(this,d),y.P)},
a0Q(){var x=0,w=A.m(y.H),v=this,u
var $async$a0Q=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a0h(),$async$a0Q)
case 2:v.u(new u.cjQ(v,e))
return A.k(null,w)}})
return A.l($async$a0Q,w)},
xW(){var x=0,w=A.m(y.H),v=this,u
var $async$xW=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(V.l8("newsOffline",B.dFM(),y.x),$async$xW)
case 2:v.u(new u.cjR(v,e))
return A.k(null,w)}})
return A.l($async$xW,w)},
aZ(){var x=0,w=A.m(y.H),v=this
var $async$aZ=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.xW(),$async$aZ)
case 2:x=3
return A.d(v.a0Q(),$async$aZ)
case 3:x=4
return A.d(A.oC("newsOffline",v.d,y.x),$async$aZ)
case 4:v.Mf()
return A.k(null,w)}})
return A.l($async$aZ,w)},
B(d){var x,w,v=null,u=A.D(d).ax.a===C.q?$.hR():$.p6(),t=A.bt(C.as)
t=Z.iE(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new U.KS(v,v),v,!0,v,v,v,v,v,E.bz(A.L("News",v,v,v,v,v,v,v,A.aj(v,v,new A.bn(t.a,t.b,t.c,0.8).bl(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eB(this.d)?new A.a1(M.MU,A.ae(A.a([A.aW(D.azc,A.D(d).ay,v,64),C.a1,A.L(A.Yt("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.aZ,v,v,v,v)],y.p),C.j,C.bm,C.i,0,v,C.m),v):new A1.ER(new B.cjN(this),v)
w=A.j1()
return X.f9(t,u,new A.cp(C.aX,v,v,new A.cF(new A.aa(0,720,0,1/0),x,v),v),v,v,A.jr(R.a1N(P.hs,S.qU,new B.cjO(this,d),v),w),v,v)}}
B.wX.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["X<~>(wX)","B<mW<wX>>(G)","vt(A<i,@>)"])
B.cjP.prototype={
$0(){var x=0,w=A.m(y.H),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.aFs(t,!1).f.gaAF()===C.b.dq($.alt(),"news")){u.Mf()
u.aZ()}return A.k(null,w)}})
return A.l($async$$0,w)},
$S:2}
B.cjI.prototype={
$1(d){var x=0,w=A.m(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.j(f,w)
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
s=B.ar4(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.ca(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aZ(),$async$$1)
case 7:case 6:case 3:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:122}
B.cjQ.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cjR.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cjN.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bv(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.ho)
v.push(new A.eQ(new B.cjM(x,w,d,e),null))
C.b.H(t,v)}return A.ae(t,C.bh,C.f,C.i,0,null,C.m)},
$S:254}
B.cjM.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.dR(x)===A.dR(w)&&A.ey(x)===A.ey(w)&&A.iN(x)===A.iN(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.ac(y.g).r.a
o===$&&A.b()
o=A.hs("EEEE d.M.y",o.gf2(0))
u=n.a
u.toString
u=o.cZ(u)
if(n.f){o=p.c
o.toString
o=A.aj(q,q,A.D(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.aj(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aq(W.iR,A.L(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.avC,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.aj(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aj(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a1(A_.fP,A.L(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bF(10)
o=A.D(d)
t=n.b
t.toString
t=Y.i7(q,18,t,!0,r.d,r.c)
s=$.dM().gdw().d
w.push(new A.a1(C.rN,A.aq(q,A.ae(A.a([new A.a1(A2.aT,t,q),A.jr(new A.a1(C.au,A.at(A.a([A.aW(D.ayJ,A.D(d).ay,q,16),K.HC,A.L(C.c.j(n.e),q,q,q,q,q,q,q,A.aj(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.h9],x),C.j,C.dt,C.i,0,q),q),s!=null)],x),C.j,C.f,C.i,0,q,C.m),C.k,q,q,new A.b4(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.j1())w.push(O.xL(q,q,D.azO,new B.cjK(),C.o,new B.cjL(p,n,d),C.au,q,q,q,y.B))
return A.ae(w,C.bh,C.f,C.i,0,q,C.m)},
$S:1246}
B.cjL.prototype={
$1(d){return this.aN1(d)},
aN1(d){var x=0,w=A.m(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.M5?2:4
break
case 2:x=5
return A.d(B.Ic(t),$async$$1)
case 5:A.bH(s,A.q("Message has been removed.",null),C.ad)
x=3
break
case 4:u=N.px(A.y(["content",t.b],y.N,y.z),A.df())
x=6
return A.d(L.fc(s,!1).f.i2(u,y.X).aI(new B.cjJ(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aZ(),$async$$1)
case 7:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:z+0}
B.cjJ.prototype={
$1(d){var x=0,w=A.m(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.b9(d)
x=4
return A.d(B.bbA(u),$async$$1)
case 4:A.bH(v.b,A.q("Message has been changed.",null),C.ad)
case 3:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:122}
B.cjK.prototype={
$1(d){var x=y.B
return A.a([F.nN(E.bz(T.In,null),!0,48,D.asP,x),F.nN(E.bz(D.bJb,null),!0,48,D.M5,x)],y.h)},
$S:z+1}
B.cjO.prototype={
$0(){return this.a.buA(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dFM","dlP",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ex,A.J)
x(B.aQU,A.P)
w(A.cV,[B.cjP,B.cjQ,B.cjR,B.cjO])
w(A.ce,[B.cjI,B.cjM,B.cjL,B.cjJ,B.cjK])
x(B.cjN,A.eu)
x(B.wX,A.fl)})()
A.c8(b.typeUniverse,JSON.parse('{"Ex":{"J":[],"e":[]},"aQU":{"P":["Ex"]}}'))
var y=(function rtii(){var x=A.E
return{B:x("wX"),_:x("X<@>"),t:x("u<A<i,@>>"),o:x("u<vt>"),h:x("u<mW<wX>>"),p:x("u<e>"),a:x("A<i,@>"),x:x("vt"),P:x("aG"),K:x("H"),N:x("i"),g:x("kp"),z:x("@"),X:x("H?"),H:x("~")}})();(function constants(){D.M5=new B.wX(0,"delete")
D.asP=new B.wX(1,"edit")
D.avC=new A.ak(16,8,16,0)
D.ayJ=new A.aB(58652,"MaterialIcons",null,!1)
D.azc=new A.aB(61075,"MaterialIcons",null,!1)
D.azO=new A.d1(Q.O1,null,null,null,null)
D.bJb=new A.cx("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_304",e:"endPart",h:b})})($__dart_deferred_initializers__,"UFz71ZIVFuWFwsua0U/mGWBCQnM=");