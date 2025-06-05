((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_304",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,E,M,N,O,P,F,Q,R,S,T,U,G,V,B={
dkG(d,e){return new B.Et(e,d)},
Et:function Et(d,e){this.c=d
this.a=e},
aQL:function aQL(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
ciM:function ciM(d){this.a=d},
ciF:function ciF(d,e){this.a=d
this.b=e},
ciN:function ciN(d,e){this.a=d
this.b=e},
ciO:function ciO(d,e){this.a=d
this.b=e},
ciK:function ciK(d){this.a=d},
ciJ:function ciJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ciI:function ciI(d,e,f){this.a=d
this.b=e
this.c=f},
ciG:function ciG(d,e){this.a=d
this.b=e},
ciH:function ciH(){},
ciL:function ciL(d,e){this.a=d
this.b=e},
wV:function wV(d,e){this.a=d
this.b=e},
dkF(d){return A.cV2(d)},
I9(d){return B.ddH(d)},
ddH(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$I9=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:n=$.C7()
m=n.c8("news").j6(0,"id")
l=d.a
l.toString
v=d.d
m=A.mi(m.pp(m.qk("created_at","lt."+l.j(0))),m.$ti.c).aIa("id",v)
l=A.dd()
l.toString
x=2
return A.d(m.dk("occasion",l).bQC(0,"created_at").aHr(1).R4(),$async$I9)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.c8("user_news").j6(0,"user").dk("news_id",v),$async$I9)
case 6:t=f
s=A.a([],y.t)
for(n=J.aG(t),m=y.N,l=y.z,r=J.a1(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.fM
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],m,l))}n=$.C7()
x=7
return A.d(n.c8("user_news").aLi(s),$async$I9)
case 7:x=4
break
case 5:x=8
return A.d(n.c8("user_news").iZ(0).dk("news_id",v),$async$I9)
case 8:case 4:x=9
return A.d(n.c8("news").iZ(0).dk("id",v),$async$I9)
case 9:return A.j(null,w)}})
return A.k($async$I9,w)},
bbh(d){return B.ddK(d)},
ddK(d){var x=0,w=A.l(y.H),v
var $async$bbh=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.C7().c8("news").eU(0,A.z(["message",d.b],v,v)).dk("id",d.d),$async$bbh)
case 2:return A.j(null,w)}})
return A.k($async$bbh,w)},
aqV(d,e,f,g,h,i,j){return B.ddI(d,e,f,g,h,i,j)},
ddI(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$aqV=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.C7().c8("news")
s=A.dd()
s.toString
x=5
return A.d(t.jh(0,A.z(["occasion",s,"message",u,"created_by",$.dL().gdw().c.a],y.N,y.K)).iB(0),$async$aqV)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.Yh(A0.Yf(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.K)(t),++q){p=new A.dj("")
new H.aLV(p).bn(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.d.bu(o).length===0)continue
r+=o}r=C.d.bu(r)
t=$.C7().c8("log_notifications")
s=A.dd()
s.toString
x=8
return A.d(t.jh(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$aqV)
case 8:A.bJ(d,A.q("Message has been sent.",null),C.ad)
x=1
break
case 7:if(h)A.bJ(d,A.q("Message has been created.",null),C.ad)
case 1:return A.j(v,w)}})
return A.k($async$aqV,w)},
aqW(d){return B.ddJ(d)},
ddJ(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$aqW=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dL()
if(s.gdw().d==null)A.a7(A.cP("User must be logged in."))
v=$.C7()
u=v.c8("user_news").iZ(0).dk("user",s.gdw().c.a)
t=A.dd()
t.toString
x=2
return A.d(u.dk("occasion",t),$async$aqW)
case 2:x=3
return A.d(v.c8("user_news").jh(0,A.z(["user",s.gdw().c.a,"news_id",d,"occasion",A.dd()],y.N,y.X)).iB(0),$async$aqW)
case 3:return A.j(null,w)}})
return A.k($async$aqW,w)}},D,W,X,Y,Z,H,A_,A0,A1,A2
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
B.Et.prototype={
M(){return new B.aQL(A.a([],y.o))}}
B.aQL.prototype={
S(){var x,w=this
w.ah()
x=w.c
x.toString
G.aFj(x,!1).f.a1(0,new B.ciM(w))
w.aZ()},
l(){this.ai()},
M7(){var x=0,w=A.l(y.H),v=this,u
var $async$M7=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Em(u,null,y.X)
x=(u==null?null:u.gt_())===!0&&!v.e?2:3
break
case 2:x=$.dL().gdw().d!=null&&J.fV(v.d)&&!J.hA(v.d).f?4:5
break
case 4:x=6
return A.d(B.aqW(J.hA(v.d).d),$async$M7)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$M7,w)},
bud(d){I.ix(d,"newsForm",y.X).aI(new B.ciF(this,d),y.P)},
a0G(){var x=0,w=A.l(y.H),v=this,u
var $async$a0G=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a09(),$async$a0G)
case 2:v.A(new u.ciN(v,e))
return A.j(null,w)}})
return A.k($async$a0G,w)},
xS(){var x=0,w=A.l(y.H),v=this,u
var $async$xS=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(V.l6("newsOffline",B.dEB(),y.x),$async$xS)
case 2:v.A(new u.ciO(v,e))
return A.j(null,w)}})
return A.k($async$xS,w)},
aZ(){var x=0,w=A.l(y.H),v=this
var $async$aZ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.xS(),$async$aZ)
case 2:x=3
return A.d(v.a0G(),$async$aZ)
case 3:x=4
return A.d(A.ox("newsOffline",v.d,y.x),$async$aZ)
case 4:v.M7()
return A.j(null,w)}})
return A.k($async$aZ,w)},
B(d){var x,w,v=null,u=A.C(d).ax.a===C.q?$.hQ():$.p3(),t=A.bs(C.as)
t=Z.iE(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new U.KP(v,v),v,!0,v,v,v,v,v,E.bw(A.O("News",v,v,v,v,v,v,v,A.al(v,v,new A.bm(t.a,t.b,t.c,0.8).bl(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eI(this.d)?new A.a0(M.MR,A.af(A.a([A.aW(D.az4,A.C(d).ay,v,64),C.a1,A.O(A.Yn("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.b0,v,v,v,v)],y.p),C.j,C.bm,C.i,0,v,C.l),v):new A1.EN(new B.ciK(this),v)
w=A.j1()
return X.f9(t,u,new A.cl(C.aX,v,v,new A.cF(new A.aa(0,720,0,1/0),x,v),v),v,v,A.jp(R.a1F(P.hr,S.qU,new B.ciL(this,d),v),w),v,v)}}
B.wV.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["X<~>(wV)","B<mS<wV>>(G)","vs(A<m,@>)"])
B.ciM.prototype={
$0(){var x=0,w=A.l(y.H),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.aFj(t,!1).f.gaAr()===C.b.du($.all(),"news")){u.M7()
u.aZ()}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2}
B.ciF.prototype={
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
s=B.aqV(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.ca(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aZ(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:117}
B.ciN.prototype={
$0(){this.a.d=this.b},
$S:0}
B.ciO.prototype={
$0(){this.a.d=this.b},
$S:0}
B.ciK.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bz(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.hl)
v.push(new A.eP(new B.ciJ(x,w,d,e),null))
C.b.H(t,v)}return A.af(t,C.bh,C.f,C.i,0,null,C.l)},
$S:206}
B.ciJ.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.dQ(x)===A.dQ(w)&&A.ew(x)===A.ew(w)&&A.iM(x)===A.iM(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.af(y.g).r.a
o===$&&A.b()
o=A.hC("EEEE d.M.y",o.gf2(0))
u=n.a
u.toString
u=o.da(u)
if(n.f){o=p.c
o.toString
o=A.al(q,q,A.C(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.al(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aq(W.i7,A.O(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.avz,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.al(q,q,A.C(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.al(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a0(A_.fN,A.O(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bF(10)
o=A.C(d)
t=n.b
t.toString
t=Y.i6(q,18,t,!0,r.d,r.c)
s=$.dL().gdw().d
w.push(new A.a0(C.CH,A.aq(q,A.af(A.a([new A.a0(A2.aT,t,q),A.jp(new A.a0(C.au,A.at(A.a([A.aW(D.ayC,A.C(d).ay,q,16),K.HC,A.O(C.c.j(n.e),q,q,q,q,q,q,q,A.al(q,q,A.C(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.h6],x),C.j,C.dt,C.i,0,q),q),s!=null)],x),C.j,C.f,C.i,0,q,C.l),C.k,q,q,new A.b3(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.j1())w.push(O.xK(q,q,D.azG,new B.ciH(),C.n,new B.ciI(p,n,d),C.au,q,q,q,y.B))
return A.af(w,C.bh,C.f,C.i,0,q,C.l)},
$S:1233}
B.ciI.prototype={
$1(d){return this.aMM(d)},
aMM(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.M2?2:4
break
case 2:x=5
return A.d(B.I9(t),$async$$1)
case 5:A.bJ(s,A.q("Message has been removed.",null),C.ad)
x=3
break
case 4:u=N.pw(A.z(["content",t.b],y.N,y.z),A.dd())
x=6
return A.d(L.fc(s,!1).f.i2(u,y.X).aI(new B.ciG(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aZ(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+0}
B.ciG.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.ba(d)
x=4
return A.d(B.bbh(u),$async$$1)
case 4:A.bJ(v.b,A.q("Message has been changed.",null),C.ad)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:117}
B.ciH.prototype={
$1(d){var x=y.B
return A.a([F.nJ(E.bw(T.Im,null),!0,48,D.asM,x),F.nJ(E.bw(D.bJ5,null),!0,48,D.M2,x)],y.h)},
$S:z+1}
B.ciL.prototype={
$0(){return this.a.bud(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dEB","dkF",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Et,A.J)
x(B.aQL,A.P)
w(A.cU,[B.ciM,B.ciN,B.ciO,B.ciL])
w(A.cd,[B.ciF,B.ciJ,B.ciI,B.ciG,B.ciH])
x(B.ciK,A.er)
x(B.wV,A.fl)})()
A.c8(b.typeUniverse,JSON.parse('{"Et":{"J":[],"e":[]},"aQL":{"P":["Et"]}}'))
var y=(function rtii(){var x=A.E
return{B:x("wV"),_:x("X<@>"),t:x("u<A<m,@>>"),o:x("u<vs>"),h:x("u<mS<wV>>"),p:x("u<e>"),a:x("A<m,@>"),x:x("vs"),P:x("aF"),K:x("H"),N:x("m"),g:x("kn"),z:x("@"),X:x("H?"),H:x("~")}})();(function constants(){D.M2=new B.wV(0,"delete")
D.asM=new B.wV(1,"edit")
D.avz=new A.aj(16,8,16,0)
D.ayC=new A.aB(58652,"MaterialIcons",null,!1)
D.az4=new A.aB(61075,"MaterialIcons",null,!1)
D.azG=new A.d4(Q.NZ,null,null,null,null)
D.bJ5=new A.cx("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_304",e:"endPart",h:b})})($__dart_deferred_initializers__,"0Jg35BmxPR15NbvH+lUpuqXJzeM=");