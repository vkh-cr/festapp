((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,M,E,N,F,O,P,Q,R,S,T,U,G,V,H,B={
dDP(d,e){return new B.G0(e,d)},
G0:function G0(d,e){this.c=d
this.a=e},
aVN:function aVN(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
cyx:function cyx(d){this.a=d},
cyq:function cyq(d,e){this.a=d
this.b=e},
cyy:function cyy(d,e){this.a=d
this.b=e},
cyz:function cyz(d,e){this.a=d
this.b=e},
cyv:function cyv(d){this.a=d},
cyu:function cyu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cyt:function cyt(d,e,f){this.a=d
this.b=e
this.c=f},
cyr:function cyr(d,e){this.a=d
this.b=e},
cys:function cys(){},
cyw:function cyw(d,e){this.a=d
this.b=e},
y7:function y7(d,e){this.a=d
this.b=e},
dDO(d){return A.dew(d)},
JY(d){var x=0,w=A.m(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$JY=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:n=$.DG()
m=n.cn("news").kK(0,"id")
l=d.d
m=A.n4(m.pR(m.qF("created_at","lt."+d.a.j(0))),m.$ti.c).aN9("id",l)
v=A.df()
v.toString
x=2
return A.d(m.dW("occasion",v).bZr(0,"created_at").aMp(1).a31(),$async$JY)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.cn("user_news").kK(0,"user").dW("news_id",l),$async$JY)
case 6:t=f
s=A.b([],y.t)
for(n=J.aI(t),m=y.N,v=y.z,r=J.a1(u);n.t();){q=J.v(n.gM(n),"user")
p=r.h(u,"id")
o=$.e0().a
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.w(["user",q,"news_id",p,"occasion",o],m,v))}n=$.DG()
x=7
return A.d(n.cn("user_news").al8(s),$async$JY)
case 7:x=4
break
case 5:x=8
return A.d(n.cn("user_news").jg(0).dW("news_id",l),$async$JY)
case 8:case 4:x=9
return A.d(n.cn("news").jg(0).dW("id",l),$async$JY)
case 9:return A.k(null,w)}})
return A.l($async$JY,w)},
biO(d){var x=0,w=A.m(y.H),v
var $async$biO=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.DG().cn("news").f2(0,A.w(["message",d.b],v,v)).dW("id",d.d),$async$biO)
case 2:return A.k(null,w)}})
return A.l($async$biO,w)},
av8(d,e,f,g,h,i,j){var x=0,w=A.m(y.z),v,u,t,s,r,q,p,o
var $async$av8=A.i(function(k,l){if(k===1)return A.j(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.DG().cn("news")
s=A.df()
s.toString
r=$.e6().ge_().c
x=5
return A.d(t.jk(0,A.w(["occasion",s,"message",u,"created_by",(r==null?null:r.r).a],y.N,y.K)).iQ(0),$async$av8)
case 5:case 4:x=i?6:7
break
case 6:for(t=I.Qv(A1.Qs(g),"p"),s=t.length,q="",p=0;p<t.length;t.length===s||(0,A.K)(t),++p){r=new A.du("")
new I.aQw(r).bt(t[p])
r=r.a
o=(r.charCodeAt(0)==0?r:r)+"\n"
if(C.d.bc(o).length===0)continue
q+=o}q=C.d.bc(q)
t=$.DG().cn("log_notifications")
s=A.df()
s.toString
x=8
return A.d(t.jk(0,A.w(["occasion",s,"to",j,"content",q,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$av8)
case 8:A.b4(d,A.h("Message has been sent.",null,null),C.Z)
x=1
break
case 7:if(h)A.b4(d,A.h("Message has been created.",null,null),C.Z)
case 1:return A.k(v,w)}})
return A.l($async$av8,w)},
av9(d){var x=0,w=A.m(y.H),v,u,t,s
var $async$av9=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:s=$.e6()
if(s.ge_().c==null)A.aa(A.cN("User must be logged in."))
v=$.DG()
u=v.cn("user_news").jg(0)
t=s.ge_().c
u=u.dW("user",(t==null?null:t.r).a)
t=A.df()
t.toString
x=2
return A.d(u.dW("occasion",t),$async$av9)
case 2:v=v.cn("user_news")
s=s.ge_().c
x=3
return A.d(v.jk(0,A.w(["user",(s==null?null:s.r).a,"news_id",d,"occasion",A.df()],y.N,y.X)).iQ(0),$async$av9)
case 3:return A.k(null,w)}})
return A.l($async$av9,w)}},D,W,X,Y,Z,I,A_,A0,A1,A2,A3
J=c[1]
A=c[0]
C=c[2]
K=c[168]
L=c[161]
M=c[164]
E=c[163]
N=c[228]
F=c[105]
O=c[232]
P=c[82]
Q=c[230]
R=c[128]
S=c[116]
T=c[171]
U=c[205]
G=c[229]
V=c[94]
H=c[113]
B=a.updateHolder(c[18],B)
D=c[231]
W=c[198]
X=c[165]
Y=c[150]
Z=c[160]
I=c[154]
A_=c[227]
A0=c[145]
A1=c[125]
A2=c[142]
A3=c[175]
B.G0.prototype={
K(){return new B.aVN(A.b([],y.o))}}
B.aVN.prototype={
S(){var x,w=this
w.a9()
x=w.c
x.toString
H.x5(x,!1).f.Z(0,new B.cyx(w))
w.aX()},
l(){this.ad()},
Nc(){var x=0,w=A.m(y.H),v=this,u
var $async$Nc=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.M0(u,null,y.X)
x=(u==null?null:u.gtB())===!0&&!v.e?2:3
break
case 2:x=$.e6().ge_().c!=null&&J.fq(v.d)&&!J.fY(v.d).f?4:5
break
case 4:x=6
return A.d(B.av9(J.fY(v.d).d),$async$Nc)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.k(null,w)}})
return A.l($async$Nc,w)},
bBD(d){L.hB(d,"newsForm",y.X).aN(new B.cyq(this,d),y.P)},
a2R(){var x=0,w=A.m(y.H),v=this,u
var $async$a2R=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a2S(),$async$a2R)
case 2:v.q(new u.cyy(v,e))
return A.k(null,w)}})
return A.l($async$a2R,w)},
a2S(){var x=0,w=A.m(y.H),v=this,u
var $async$a2S=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A0.lT("newsOffline",B.dYu(),y.x),$async$a2S)
case 2:v.q(new u.cyz(v,e))
return A.k(null,w)}})
return A.l($async$a2S,w)},
aX(){var x=0,w=A.m(y.H),v=this
var $async$aX=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a2S(),$async$aX)
case 2:x=3
return A.d(v.a2R(),$async$aX)
case 3:x=4
return A.d(A.oB("newsOffline",v.d,y.x),$async$aX)
case 4:v.Nc()
return A.k(null,w)}})
return A.l($async$aX,w)},
A(d){var x,w,v=null,u=A.z(d).ax.a===C.p?$.i2():$.of(),t=A.bQ(C.ar)
t=Z.iw(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new V.MR(v,v),v,!0,v,v,v,v,v,E.c0(A.C("News",v,v,v,v,v,v,v,A.ad(v,v,new A.bJ(t.a,t.b,t.c,0.8).bx(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eW(this.d)?new A.U(N.OT,A.a9(A.b([A.aD(G.Fw,A.z(d).ay,v,64),C.W,A.C(A.b5k("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.aW,v,v,v,v)],y.p),C.i,C.bg,C.h,0,v,C.l),v):new A2.Gm(new B.cyv(this),v)
w=A.hZ()
return X.eO(t,u,new A.cw(C.aQ,v,v,new A.cu(new A.ab(0,720,0,1/0),x,v),v),v,A.jC(S.a4o(Q.ho,T.t2,new B.cyw(this,d),v),!1,!1,!1,!1,w),v,v)}}
B.y7.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["W<~>(y7)","E<nN<y7>>(H)","wx(B<f,@>)"])
B.cyx.prototype={
$0(){var x=0,w=A.m(y.H),v=this,u,t
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(H.x5(t,!1).f.ga_C()===C.b.dq($.QG(),"news")){u.Nc()
u.aX()}return A.k(null,w)}})
return A.l($async$$0,w)},
$S:1}
B.cyq.prototype={
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
s=B.av8(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.c2(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aX(),$async$$1)
case 7:case 6:case 3:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:125}
B.cyy.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cyz.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cyv.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.b([],u)
for(x=this.a,w=0;w<J.bo(x.d);++w){v=A.b([],u)
if(w!==0)v.push(C.e0)
v.push(new A.dV(new B.cyu(x,w,d,e),null))
C.b.F(t,v)}return A.a9(t,C.bl,C.f,C.h,0,null,C.l)},
$S:240}
B.cyu.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.e9(x)===A.e9(w)&&A.f6(x)===A.f6(w)&&A.jc(x)===A.jc(w)}else v=!1
x=y.p
w=A.b([],x)
if(o===0||!v){o=d.af(y.g).r.a
o===$&&A.a()
o=A.he("EEEE d.M.y",o.gf_(0))
u=n.a
u.toString
u=o.cp(u)
if(n.f){o=p.c
o.toString
o=A.ad(q,q,A.z(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.N,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.ad(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.N,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.al(W.js,A.C(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,G.OJ,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.ad(q,q,A.z(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.N,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.ad(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.N,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.U(A_.eP,A.C(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.b2(10)
o=A.z(d)
t=n.b
t.toString
t=Y.hM(q,18,t,!0,r.d,r.c)
s=$.e6().ge_().c
w.push(new A.U(C.pD,A.al(q,A.a9(A.b([new A.U(A3.aT,t,q),A.jC(new A.U(C.aj,A.ae(A.b([A.aD(D.aAy,A.z(d).ay,q,16),K.jc,A.C(C.c.j(n.e),q,q,q,q,q,q,q,A.ad(q,q,A.z(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.N,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.hF],x),C.i,q,C.cj,C.h,0,q),q),!1,!1,!1,!1,s!=null)],x),C.i,C.f,C.h,0,q,C.l),C.k,q,q,new A.b5(o.ax.k2,q,q,u,q,q,q,C.M),q,q,q,q,q,q,q,q),q))
if(A.hZ())w.push(P.pG(q,q,q,D.aC1,new B.cys(),C.r,new B.cyt(p,n,d),C.aj,q,q,q,y.B))
return A.a9(w,C.bl,C.f,C.h,0,q,C.l)},
$S:1404}
B.cyt.prototype={
$1(d){return this.aS6(d)},
aS6(d){var x=0,w=A.m(y.H),v=this,u,t,s
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.NZ?2:4
break
case 2:x=5
return A.d(B.JY(t),$async$$1)
case 5:A.b4(s,A.h("Message has been removed.",null,null),C.Z)
x=3
break
case 4:u=R.po(A.w(["content",t.b],y.N,y.z),A.df())
x=6
return A.d(M.fl(s,!1).f.hZ(u,y.X).aN(new B.cyr(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aX(),$async$$1)
case 7:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:z+0}
B.cyr.prototype={
$1(d){var x=0,w=A.m(y.P),v=this,u
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bg(d)
x=4
return A.d(B.biO(u),$async$$1)
case 4:A.b4(v.b,A.h("Message has been changed.",null,null),C.Z)
case 3:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:125}
B.cys.prototype={
$1(d){var x=y.B
return A.b([F.kX(E.c0(U.Kg,null),!0,48,D.aux,x),F.kX(E.c0(D.bLZ,null),!0,48,D.NZ,x)],y.h)},
$S:z+1}
B.cyw.prototype={
$0(){return this.a.bBD(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dYu","dDO",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.G0,A.L)
x(B.aVN,A.N)
w(A.cY,[B.cyx,B.cyy,B.cyz,B.cyw])
w(A.cs,[B.cyq,B.cyu,B.cyt,B.cyr,B.cys])
x(B.cyv,A.em)
x(B.y7,A.fJ)})()
A.ce(b.typeUniverse,JSON.parse('{"G0":{"L":[],"e":[]},"aVN":{"N":["G0"]}}'))
var y=(function rtii(){var x=A.J
return{B:x("y7"),_:x("W<@>"),t:x("u<B<f,@>>"),o:x("u<wx>"),h:x("u<nN<y7>>"),p:x("u<e>"),a:x("B<f,@>"),x:x("wx"),P:x("aG"),K:x("G"),N:x("f"),g:x("lu"),z:x("@"),X:x("G?"),H:x("~")}})();(function constants(){D.NZ=new B.y7(0,"delete")
D.aux=new B.y7(1,"edit")
D.aAy=new A.at(58652,"MaterialIcons",null,!1)
D.aC1=new A.co(O.Q3,null,null,null,null)
D.bLZ=new A.cg("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["ad2TY4r8/VwLPu1JeH3frKQszX8="]=a.current})($__dart_deferred_initializers__);