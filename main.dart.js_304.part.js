((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_304",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,E,M,N,O,P,F,Q,R,S,T,U,G,V,B={
dlw(d,e){return new B.Ew(e,d)},
Ew:function Ew(d,e){this.c=d
this.a=e},
aQT:function aQT(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
cjt:function cjt(d){this.a=d},
cjm:function cjm(d,e){this.a=d
this.b=e},
cju:function cju(d,e){this.a=d
this.b=e},
cjv:function cjv(d,e){this.a=d
this.b=e},
cjr:function cjr(d){this.a=d},
cjq:function cjq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cjp:function cjp(d,e,f){this.a=d
this.b=e
this.c=f},
cjn:function cjn(d,e){this.a=d
this.b=e},
cjo:function cjo(){},
cjs:function cjs(d,e){this.a=d
this.b=e},
wY:function wY(d,e){this.a=d
this.b=e},
dlv(d){return A.cVO(d)},
Ia(d){return B.dex(d)},
dex(d){var x=0,w=A.m(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$Ia=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:n=$.C8()
m=n.c8("news").j6(0,"id")
l=d.a
l.toString
v=d.d
m=A.mj(m.pq(m.ql("created_at","lt."+l.j(0))),m.$ti.c).aIj("id",v)
l=A.de()
l.toString
x=2
return A.d(m.dl("occasion",l).bQQ(0,"created_at").aHA(1).R9(),$async$Ia)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.c8("user_news").j6(0,"user").dl("news_id",v),$async$Ia)
case 6:t=f
s=A.a([],y.t)
for(n=J.aF(t),m=y.N,l=y.z,r=J.a1(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.fN
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],m,l))}n=$.C8()
x=7
return A.d(n.c8("user_news").aLs(s),$async$Ia)
case 7:x=4
break
case 5:x=8
return A.d(n.c8("user_news").iZ(0).dl("news_id",v),$async$Ia)
case 8:case 4:x=9
return A.d(n.c8("news").iZ(0).dl("id",v),$async$Ia)
case 9:return A.k(null,w)}})
return A.l($async$Ia,w)},
bbt(d){return B.deA(d)},
deA(d){var x=0,w=A.m(y.H),v
var $async$bbt=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.C8().c8("news").eV(0,A.z(["message",d.b],v,v)).dl("id",d.d),$async$bbt)
case 2:return A.k(null,w)}})
return A.l($async$bbt,w)},
ar3(d,e,f,g,h,i,j){return B.dey(d,e,f,g,h,i,j)},
dey(d,e,f,g,h,i,j){var x=0,w=A.m(y.z),v,u,t,s,r,q,p,o
var $async$ar3=A.i(function(k,l){if(k===1)return A.j(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.C8().c8("news")
s=A.de()
s.toString
x=5
return A.d(t.jh(0,A.z(["occasion",s,"message",u,"created_by",$.dL().gdw().c.a],y.N,y.K)).iB(0),$async$ar3)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.Ym(A0.Yk(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.N)(t),++q){p=new A.dk("")
new H.aM2(p).bn(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.d.bt(o).length===0)continue
r+=o}r=C.d.bt(r)
t=$.C8().c8("log_notifications")
s=A.de()
s.toString
x=8
return A.d(t.jh(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$ar3)
case 8:A.bH(d,A.q("Message has been sent.",null),C.ac)
x=1
break
case 7:if(h)A.bH(d,A.q("Message has been created.",null),C.ac)
case 1:return A.k(v,w)}})
return A.l($async$ar3,w)},
ar4(d){return B.dez(d)},
dez(d){var x=0,w=A.m(y.H),v,u,t,s
var $async$ar4=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:s=$.dL()
if(s.gdw().d==null)A.a7(A.cM("User must be logged in."))
v=$.C8()
u=v.c8("user_news").iZ(0).dl("user",s.gdw().c.a)
t=A.de()
t.toString
x=2
return A.d(u.dl("occasion",t),$async$ar4)
case 2:x=3
return A.d(v.c8("user_news").jh(0,A.z(["user",s.gdw().c.a,"news_id",d,"occasion",A.de()],y.N,y.X)).iB(0),$async$ar4)
case 3:return A.k(null,w)}})
return A.l($async$ar4,w)}},D,W,X,Y,Z,H,A_,A0,A1,A2
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
B.Ew.prototype={
M(){return new B.aQT(A.a([],y.o))}}
B.aQT.prototype={
S(){var x,w=this
w.ah()
x=w.c
x.toString
G.aFr(x,!1).f.a2(0,new B.cjt(w))
w.aZ()},
l(){this.ai()},
Mc(){var x=0,w=A.m(y.H),v=this,u
var $async$Mc=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Ep(u,null,y.X)
x=(u==null?null:u.gt2())===!0&&!v.e?2:3
break
case 2:x=$.dL().gdw().d!=null&&J.fW(v.d)&&!J.hD(v.d).f?4:5
break
case 4:x=6
return A.d(B.ar4(J.hD(v.d).d),$async$Mc)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.k(null,w)}})
return A.l($async$Mc,w)},
buq(d){I.iy(d,"newsForm",y.X).aI(new B.cjm(this,d),y.P)},
a0N(){var x=0,w=A.m(y.H),v=this,u
var $async$a0N=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a0f(),$async$a0N)
case 2:v.u(new u.cju(v,e))
return A.k(null,w)}})
return A.l($async$a0N,w)},
xU(){var x=0,w=A.m(y.H),v=this,u
var $async$xU=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(V.l8("newsOffline",B.dFs(),y.x),$async$xU)
case 2:v.u(new u.cjv(v,e))
return A.k(null,w)}})
return A.l($async$xU,w)},
aZ(){var x=0,w=A.m(y.H),v=this
var $async$aZ=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.xU(),$async$aZ)
case 2:x=3
return A.d(v.a0N(),$async$aZ)
case 3:x=4
return A.d(A.oB("newsOffline",v.d,y.x),$async$aZ)
case 4:v.Mc()
return A.k(null,w)}})
return A.l($async$aZ,w)},
B(d){var x,w,v=null,u=A.C(d).ax.a===C.q?$.hR():$.p6(),t=A.bt(C.as)
t=Z.iE(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new U.KQ(v,v),v,!0,v,v,v,v,v,E.bz(A.L("News",v,v,v,v,v,v,v,A.ai(v,v,new A.bn(t.a,t.b,t.c,0.8).bl(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.ez(this.d)?new A.a0(M.MR,A.ae(A.a([A.aW(D.aza,A.C(d).ay,v,64),C.a1,A.L(A.Ys("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.aZ,v,v,v,v)],y.p),C.j,C.bm,C.i,0,v,C.m),v):new A1.EQ(new B.cjr(this),v)
w=A.j2()
return X.f9(t,u,new A.cp(C.aX,v,v,new A.cF(new A.aa(0,720,0,1/0),x,v),v),v,v,A.js(R.a1M(P.ht,S.qU,new B.cjs(this,d),v),w),v,v)}}
B.wY.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["X<~>(wY)","B<mT<wY>>(G)","vu(A<h,@>)"])
B.cjt.prototype={
$0(){var x=0,w=A.m(y.H),v=this,u,t
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.aFr(t,!1).f.gaAA()===C.b.dq($.als(),"news")){u.Mc()
u.aZ()}return A.k(null,w)}})
return A.l($async$$0,w)},
$S:2}
B.cjm.prototype={
$1(d){var x=0,w=A.m(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
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
s=B.ar3(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.ca(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aZ(),$async$$1)
case 7:case 6:case 3:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:123}
B.cju.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cjv.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cjr.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bv(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.hp)
v.push(new A.eQ(new B.cjq(x,w,d,e),null))
C.b.H(t,v)}return A.ae(t,C.bh,C.f,C.i,0,null,C.m)},
$S:259}
B.cjq.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.dQ(x)===A.dQ(w)&&A.ex(x)===A.ex(w)&&A.iM(x)===A.iM(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.ad(y.g).r.a
o===$&&A.b()
o=A.hs("EEEE d.M.y",o.gf3(0))
u=n.a
u.toString
u=o.d5(u)
if(n.f){o=p.c
o.toString
o=A.ai(q,q,A.C(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.ai(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aq(W.iR,A.L(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.avB,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.ai(q,q,A.C(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.ai(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a0(A_.fQ,A.L(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bF(10)
o=A.C(d)
t=n.b
t.toString
t=Y.i6(q,18,t,!0,r.d,r.c)
s=$.dL().gdw().d
w.push(new A.a0(C.rN,A.aq(q,A.ae(A.a([new A.a0(A2.aT,t,q),A.js(new A.a0(C.au,A.at(A.a([A.aW(D.ayH,A.C(d).ay,q,16),K.HB,A.L(C.c.j(n.e),q,q,q,q,q,q,q,A.ai(q,q,A.C(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.V,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.h9],x),C.j,C.dt,C.i,0,q),q),s!=null)],x),C.j,C.f,C.i,0,q,C.m),C.k,q,q,new A.b4(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.j2())w.push(O.xM(q,q,D.azN,new B.cjo(),C.o,new B.cjp(p,n,d),C.au,q,q,q,y.B))
return A.ae(w,C.bh,C.f,C.i,0,q,C.m)},
$S:1245}
B.cjp.prototype={
$1(d){return this.aMW(d)},
aMW(d){var x=0,w=A.m(y.H),v=this,u,t,s
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.M2?2:4
break
case 2:x=5
return A.d(B.Ia(t),$async$$1)
case 5:A.bH(s,A.q("Message has been removed.",null),C.ac)
x=3
break
case 4:u=N.px(A.z(["content",t.b],y.N,y.z),A.de())
x=6
return A.d(L.fc(s,!1).f.i2(u,y.X).aI(new B.cjn(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aZ(),$async$$1)
case 7:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:z+0}
B.cjn.prototype={
$1(d){var x=0,w=A.m(y.P),v=this,u
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.ba(d)
x=4
return A.d(B.bbt(u),$async$$1)
case 4:A.bH(v.b,A.q("Message has been changed.",null),C.ac)
case 3:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:123}
B.cjo.prototype={
$1(d){var x=y.B
return A.a([F.nN(E.bz(T.Im,null),!0,48,D.asO,x),F.nN(E.bz(D.bJa,null),!0,48,D.M2,x)],y.h)},
$S:z+1}
B.cjs.prototype={
$0(){return this.a.buq(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dFs","dlv",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ew,A.J)
x(B.aQT,A.P)
w(A.cV,[B.cjt,B.cju,B.cjv,B.cjs])
w(A.ce,[B.cjm,B.cjq,B.cjp,B.cjn,B.cjo])
x(B.cjr,A.et)
x(B.wY,A.fl)})()
A.c8(b.typeUniverse,JSON.parse('{"Ew":{"J":[],"e":[]},"aQT":{"P":["Ew"]}}'))
var y=(function rtii(){var x=A.E
return{B:x("wY"),_:x("X<@>"),t:x("u<A<h,@>>"),o:x("u<vu>"),h:x("u<mT<wY>>"),p:x("u<e>"),a:x("A<h,@>"),x:x("vu"),P:x("aG"),K:x("H"),N:x("h"),g:x("ko"),z:x("@"),X:x("H?"),H:x("~")}})();(function constants(){D.M2=new B.wY(0,"delete")
D.asO=new B.wY(1,"edit")
D.avB=new A.ak(16,8,16,0)
D.ayH=new A.aB(58652,"MaterialIcons",null,!1)
D.aza=new A.aB(61075,"MaterialIcons",null,!1)
D.azN=new A.d1(Q.NZ,null,null,null,null)
D.bJa=new A.cx("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_304",e:"endPart",h:b})})($__dart_deferred_initializers__,"1Wzld4YWUvPIu+jdZVOxnQvTvjk=");