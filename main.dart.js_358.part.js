((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_358",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,O,P,G,Q,R,E,S,T,U,V,W,X,Y,Z,B={
cTp(d,e){return new B.yx(e,d)},
yx:function yx(d,e){this.c=d
this.a=e},
aKB:function aKB(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
c0H:function c0H(d,e){this.a=d
this.b=e},
c0N:function c0N(d,e){this.a=d
this.b=e},
c0O:function c0O(d,e){this.a=d
this.b=e},
c0L:function c0L(d){this.a=d},
c0K:function c0K(d,e,f){this.a=d
this.b=e
this.c=f},
c0I:function c0I(d,e){this.a=d
this.b=e},
c0J:function c0J(){},
c0M:function c0M(d,e){this.a=d
this.b=e},
vh:function vh(d,e){this.a=d
this.b=e},
cTo(d){return A.cww(d)},
G1(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o
var $async$G1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:q=$.Ad()
p=q.bY("news").he(0,"id")
o=d.a
o.toString
v=d.d
p=A.qb(p.w3(p.wt("created_at","lt."+o.j(0))),p.$ti.c).aCu("id",v)
o=$.dZ
o.toString
x=2
return A.c(p.cn("occasion",o).bFN(0,"created_at").aBO(1).Po(),$async$G1)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.c(q.bY("user_news").he(0,"user").cn("news_id",v),$async$G1)
case 6:t=f
s=A.a([],y.t)
for(q=J.aI(t),p=J.a2(u),o=y.N,r=y.z;q.q();)s.push(A.y(["user",J.u(q.gL(q),"user"),"news_id",p.i(u,"id")],o,r))
q=$.Ad()
x=7
return A.c(q.bY("user_news").ae_(s).iC(0),$async$G1)
case 7:x=4
break
case 5:x=8
return A.c(q.bY("user_news").k6(0).cn("news_id",v),$async$G1)
case 8:case 4:x=9
return A.c(q.bY("news").k6(0).cn("id",v),$async$G1)
case 9:return A.j(null,w)}})
return A.k($async$G1,w)},
b3f(d){var x=0,w=A.l(y.H),v
var $async$b3f=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.c($.Ad().bY("news").eG(0,A.y(["message",d.b],v,v)).cn("id",d.d),$async$b3f)
case 2:return A.j(null,w)}})
return A.k($async$b3f,w)},
alY(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$alY=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Ad().bY("news")
s=$.dZ
s.toString
x=5
return A.c(t.jJ(0,A.y(["occasion",s,"message",u,"created_by",$.e1().gdH().c.a],y.N,y.K)).iC(0),$async$alY)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.aTX(X.cir(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.Q)(t),++q){p=new A.d5("")
new G.bNE(p).bj(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.d2(o).length===0)continue
r+=o}r=C.e.d2(r)
t=$.Ad().bY("log_notifications")
s=$.dZ
s.toString
x=8
return A.c(t.jJ(0,A.y(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$alY)
case 8:A.bB(d,A.w("Message has been sent.",null),C.a3)
x=1
break
case 7:if(h)A.bB(d,A.w("Message has been created.",null),C.a3)
case 1:return A.j(v,w)}})
return A.k($async$alY,w)},
alZ(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$alZ=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.e1()
if(s.gdH().d==null)A.a5(A.cA("User must be logged in."))
v=$.Ad()
u=v.bY("user_news").k6(0).cn("user",s.gdH().c.a)
t=$.dZ
t.toString
x=2
return A.c(u.cn("occasion",t),$async$alZ)
case 2:x=3
return A.c(v.bY("user_news").jJ(0,A.y(["user",s.gdH().c.a,"news_id",d,"occasion",$.dZ],y.N,y.X)).iC(0),$async$alZ)
case 3:return A.j(null,w)}})
return A.k($async$alZ,w)}},D,A_,F,A0
J=c[1]
A=c[0]
C=c[2]
H=c[186]
I=c[168]
K=c[198]
L=c[207]
M=c[187]
N=c[214]
O=c[209]
P=c[144]
G=c[151]
Q=c[280]
R=c[130]
E=c[101]
S=c[340]
T=c[301]
U=c[213]
V=c[235]
W=c[253]
X=c[92]
Y=c[143]
Z=c[108]
B=a.updateHolder(c[19],B)
D=c[355]
A_=c[243]
F=c[190]
A0=c[195]
B.yx.prototype={
N(){return new B.aKB(A.a([],y.o))}}
B.aKB.prototype={
Z(){this.aj()
this.b8()},
l(){this.ai()},
aW(){this.ck()
this.KN()},
KN(){var x=0,w=A.l(y.H),v=this,u
var $async$KN=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Cl(u,null,y.X)
x=(u==null?null:u.grp())===!0&&!v.e?2:3
break
case 2:x=$.e1().gdH().d!=null&&J.jo(v.d)&&!J.hn(v.d).f?4:5
break
case 4:x=6
return A.c(B.alZ(J.hn(v.d).d),$async$KN)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$KN,w)},
blf(d){H.ko(d,"newsForm",y.X).aQ(0,new B.c0H(this,d),y.P)},
Zb(){var x=0,w=A.l(y.H),v=this,u
var $async$Zb=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(A.XN(),$async$Zb)
case 2:v.B(new u.c0N(v,e))
return A.j(null,w)}})
return A.k($async$Zb,w)},
nG(){var x=0,w=A.l(y.H),v=this,u
var $async$nG=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(Y.nB("newsOffline",B.cTn(),y.x),$async$nG)
case 2:v.B(new u.c0O(v,e))
return A.j(null,w)}})
return A.k($async$nG,w)},
b8(){var x=0,w=A.l(y.H),v=this
var $async$b8=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.nG(),$async$b8)
case 2:x=3
return A.c(v.Zb(),$async$b8)
case 3:x=4
return A.c(A.u2("newsOffline",v.d),$async$b8)
case 4:v.KN()
return A.j(null,w)}})
return A.k($async$b8,w)},
A(d){var x,w,v=null,u=A.D(d).ax.a===C.v?$.j2():$.v4(),t=F.bo(D.b4g,v)
t=M.i5(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,Z.bsb(),v,!0,v,v,v,v,v,t,v,v,v,1,v)
x=I.lf(!0,v,new B.c0L(this),J.bl(this.d),v,v,v,!1,C.F,!1)
w=A.iV()
return K.eW(t,u,new A.cu(C.aI,v,v,new A.cO(new A.a9(0,820,0,1/0),x,v),v),v,v,A.ij(A.Ze(v,S.fW,v,v,!1,new B.c0M(this,d),v),w),v,v)}}
B.vh.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["S<~>(vh)","B<oY<vh>>(M)","u0(ab<e,@>)"])
B.c0H.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:y.a.a(d)
u=J.a2(d)
t=u.i(d,"add_to_news")
if(t==null)t=!0
s=u.i(d,"with_notification")
s.toString
r=u.i(d,"to")
q=u.i(d,"content")
q.toString
p=u.i(d,"heading")
u=u.i(d,"heading_default")
u.toString
s=B.alY(v.b,p,u,q,t,s,r)
x=4
return A.c(y._.b(s)?s:A.cC(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.c(v.a.b8(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:93}
B.c0N.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c0O.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c0L.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.u(p.d,e),n=e>0?J.u(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bI(x)===A.bI(w)&&A.bR(x)===A.bR(w)&&A.cT(x)===A.cT(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(O.hx)
if(!u||!v){u=d.ab(y.g).r.a
u===$&&A.b()
u=A.is("EEEE d.M.y",u.gf_(0))
t=o.a
t.toString
t=u.e0(t)
if(o.f){u=p.c
u.toString
u=A.aR(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aR(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aJ(A_.hp,A.Y(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.k,q,q,q,q,q,q,D.aj6,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.aR(q,q,A.D(t).cy,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.aR(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a6(Q.iV,A.Y(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.cJ(10)
u=A.D(d)
s=o.b
s.toString
r=$.e1().gdH().d
w.push(new A.a6(V.aj_,A.aJ(q,A.ax(A.a([new A.a6(L.aY,new P.jz(s,18,!0,q),q),A.ij(new A.a6(C.ay,A.aH(A.a([A.bN(D.alD,A.D(d).ay,q,16),U.a3L,A.Y(C.c.j(o.e),q,q,q,q,q,q,q,A.aR(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),N.jD],x),C.j,C.cy,C.h,q),q),r!=null)],x),C.j,C.f,C.h,q,C.p),C.k,q,q,new A.bD(u.ax.k2,q,q,t,q,q,q,C.Q),q,q,q,q,q,q,q),q))
t=A.iV()
w.push(A.ij(E.cmr(q,D.amy,new B.c0J(),new B.c0K(p,o,d),y.B),t))
return A.ax(w,C.bx,C.f,C.h,q,C.p)},
$S:964}
B.c0K.prototype={
$1(d){return this.aGO(d)},
aGO(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.H4?2:4
break
case 2:x=5
return A.c(B.G1(t),$async$$1)
case 5:A.bB(s,A.w("Message has been removed.",null),C.a3)
x=3
break
case 4:u=R.y7(A.y(["content",t.b],y.N,y.z))
x=6
return A.c(A0.fD(s,!1).f.jr(u,y.X).aQ(0,new B.c0I(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.c(v.a.b8(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+0}
B.c0I.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bt(d)
x=4
return A.c(B.b3f(u),$async$$1)
case 4:A.bB(v.b,A.w("Message has been changed.",null),C.a3)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:93}
B.c0J.prototype={
$1(d){var x=y.B
return A.a([E.awk(F.bo(W.DD,null),!0,48,D.agG,x),E.awk(F.bo(D.b3S,null),!0,48,D.H4,x)],y.h)},
$S:z+1}
B.c0M.prototype={
$0(){return this.a.blf(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"cTn","cTo",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.yx,A.F)
x(B.aKB,A.L)
w(A.bF,[B.c0H,B.c0K,B.c0I,B.c0J])
w(A.ck,[B.c0N,B.c0O,B.c0M])
x(B.c0L,A.dh)
x(B.vh,A.dT)})()
A.bk(b.typeUniverse,JSON.parse('{"yx":{"F":[],"d":[]},"aKB":{"L":["yx"]}}'))
var y=(function rtii(){var x=A.z
return{B:x("vh"),_:x("S<@>"),t:x("q<ab<e,@>>"),o:x("q<u0>"),h:x("q<oY<vh>>"),p:x("q<d>"),a:x("ab<e,@>"),x:x("u0"),P:x("az"),K:x("E"),N:x("e"),g:x("mW"),z:x("@"),X:x("E?"),H:x("~")}})();(function constants(){D.H4=new B.vh(0,"delete")
D.agG=new B.vh(1,"edit")
D.aj6=new A.an(16,8,16,0)
D.alD=new A.aE(58652,"MaterialIcons",null,!1)
D.amy=new A.dx(T.J_,null,null,null,null)
D.b3S=new A.bY("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4g=new A.bY("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_358",e:"endPart",h:b})})($__dart_deferred_initializers__,"JR7a/Xv+mBD9pBHYB6m1u9a57Dw=");