((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_356",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,O,P,G,Q,R,E,S,T,U,V,W,X,Y,Z,B={
cSW(d,e){return new B.yt(e,d)},
yt:function yt(d,e){this.c=d
this.a=e},
aKs:function aKs(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
c0q:function c0q(d,e){this.a=d
this.b=e},
c0w:function c0w(d,e){this.a=d
this.b=e},
c0x:function c0x(d,e){this.a=d
this.b=e},
c0u:function c0u(d){this.a=d},
c0t:function c0t(d,e,f){this.a=d
this.b=e
this.c=f},
c0r:function c0r(d,e){this.a=d
this.b=e},
c0s:function c0s(){},
c0v:function c0v(d,e){this.a=d
this.b=e},
vg:function vg(d,e){this.a=d
this.b=e},
cSV(d){return A.cw4(d)},
G_(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o
var $async$G_=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:q=$.A9()
p=q.bX("news").hd(0,"id")
o=d.a
o.toString
v=d.d
p=A.qb(p.w5(p.wv("created_at","lt."+o.j(0))),p.$ti.c).aCo("id",v)
o=$.dY
o.toString
x=2
return A.c(p.cn("occasion",o).bFD(0,"created_at").aBH(1).Pm(),$async$G_)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.c(q.bX("user_news").hd(0,"user").cn("news_id",v),$async$G_)
case 6:t=f
s=A.a([],y.t)
for(q=J.aI(t),p=J.a2(u),o=y.N,r=y.z;q.q();)s.push(A.y(["user",J.u(q.gL(q),"user"),"news_id",p.i(u,"id")],o,r))
q=$.A9()
x=7
return A.c(q.bX("user_news").adY(s).iB(0),$async$G_)
case 7:x=4
break
case 5:x=8
return A.c(q.bX("user_news").k6(0).cn("news_id",v),$async$G_)
case 8:case 4:x=9
return A.c(q.bX("news").k6(0).cn("id",v),$async$G_)
case 9:return A.j(null,w)}})
return A.k($async$G_,w)},
b32(d){var x=0,w=A.l(y.H),v
var $async$b32=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.c($.A9().bX("news").eG(0,A.y(["message",d.b],v,v)).cn("id",d.d),$async$b32)
case 2:return A.j(null,w)}})
return A.k($async$b32,w)},
alT(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$alT=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.A9().bX("news")
s=$.dY
s.toString
x=5
return A.c(t.jJ(0,A.y(["occasion",s,"message",u,"created_by",$.e0().gdH().c.a],y.N,y.K)).iB(0),$async$alT)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.aTM(X.ci1(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.P)(t),++q){p=new A.d3("")
new G.bNm(p).bj(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.d1(o).length===0)continue
r+=o}r=C.e.d1(r)
t=$.A9().bX("log_notifications")
s=$.dY
s.toString
x=8
return A.c(t.jJ(0,A.y(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$alT)
case 8:A.bB(d,A.x("Message has been sent.",null),C.a2)
x=1
break
case 7:if(h)A.bB(d,A.x("Message has been created.",null),C.a2)
case 1:return A.j(v,w)}})
return A.k($async$alT,w)},
alU(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$alU=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.e0()
if(s.gdH().d==null)A.a4(A.cA("User must be logged in."))
v=$.A9()
u=v.bX("user_news").k6(0).cn("user",s.gdH().c.a)
t=$.dY
t.toString
x=2
return A.c(u.cn("occasion",t),$async$alU)
case 2:x=3
return A.c(v.bX("user_news").jJ(0,A.y(["user",s.gdH().c.a,"news_id",d,"occasion",$.dY],y.N,y.X)).iB(0),$async$alU)
case 3:return A.j(null,w)}})
return A.k($async$alU,w)}},D,A_,F,A0
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
P=c[143]
G=c[150]
Q=c[279]
R=c[131]
E=c[101]
S=c[338]
T=c[300]
U=c[213]
V=c[252]
W=c[234]
X=c[92]
Y=c[142]
Z=c[108]
B=a.updateHolder(c[19],B)
D=c[353]
A_=c[242]
F=c[190]
A0=c[195]
B.yt.prototype={
N(){return new B.aKs(A.a([],y.o))}}
B.aKs.prototype={
Z(){this.aj()
this.b8()},
l(){this.ai()},
aW(){this.ck()
this.KM()},
KM(){var x=0,w=A.l(y.H),v=this,u
var $async$KM=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Ch(u,null,y.X)
x=(u==null?null:u.grp())===!0&&!v.e?2:3
break
case 2:x=$.e0().gdH().d!=null&&J.jN(v.d)&&!J.hm(v.d).f?4:5
break
case 4:x=6
return A.c(B.alU(J.hm(v.d).d),$async$KM)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$KM,w)},
bl4(d){H.kp(d,"newsForm",y.X).aQ(0,new B.c0q(this,d),y.P)},
Za(){var x=0,w=A.l(y.H),v=this,u
var $async$Za=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(A.XL(),$async$Za)
case 2:v.B(new u.c0w(v,e))
return A.j(null,w)}})
return A.k($async$Za,w)},
nG(){var x=0,w=A.l(y.H),v=this,u
var $async$nG=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(Y.nB("newsOffline",B.cSU(),y.x),$async$nG)
case 2:v.B(new u.c0x(v,e))
return A.j(null,w)}})
return A.k($async$nG,w)},
b8(){var x=0,w=A.l(y.H),v=this
var $async$b8=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.nG(),$async$b8)
case 2:x=3
return A.c(v.Za(),$async$b8)
case 3:x=4
return A.c(A.u1("newsOffline",v.d),$async$b8)
case 4:v.KM()
return A.j(null,w)}})
return A.k($async$b8,w)},
A(d){var x,w,v=null,u=A.D(d).ax.a===C.v?$.j1():$.v3(),t=F.bs(D.b4d,v)
t=M.i3(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,Z.brT(),v,!0,v,v,v,v,v,t,v,v,v,1,v)
x=I.le(!0,v,new B.c0u(this),J.bk(this.d),v,v,v,!1,C.F,!1)
w=A.iT()
return K.eV(t,u,new A.cu(C.aI,v,v,new A.cO(new A.ad(0,820,0,1/0),x,v),v),v,v,A.ih(A.Zc(v,S.fS,v,v,!1,new B.c0v(this,d),v),w),v,v)}}
B.vg.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["S<~>(vg)","B<oY<vg>>(M)","u_(aa<e,@>)"])
B.c0q.prototype={
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
s=B.alT(v.b,p,u,q,t,s,r)
x=4
return A.c(y._.b(s)?s:A.cC(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.c(v.a.b8(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:93}
B.c0w.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c0x.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c0u.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.u(p.d,e),n=e>0?J.u(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bJ(x)===A.bJ(w)&&A.bR(x)===A.bR(w)&&A.cT(x)===A.cT(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(O.iS)
if(!u||!v){u=d.ac(y.g).r.a
u===$&&A.b()
u=A.j4("EEEE d.M.y",u.gf9(0))
t=o.a
t.toString
t=u.e9(t)
if(o.f){u=p.c
u.toString
u=A.aM(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aM(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aJ(A_.hl,A.Z(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.k,q,q,q,q,q,q,D.aj5,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.aM(q,q,A.D(t).cy,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.aM(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a6(Q.iV,A.Z(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.cM(10)
u=A.D(d)
s=o.b
s.toString
r=$.e0().gdH().d
w.push(new A.a6(W.aj_,A.aJ(q,A.ax(A.a([new A.a6(L.b1,new P.jx(s,18,!0,q),q),A.ih(new A.a6(C.ay,A.aH(A.a([A.bO(D.alB,A.D(d).ay,q,16),U.a3K,A.Z(C.c.j(o.e),q,q,q,q,q,q,q,A.aM(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),N.jE],x),C.j,C.cO,C.h,q),q),r!=null)],x),C.j,C.f,C.h,q,C.p),C.k,q,q,new A.bD(u.ax.k2,q,q,t,q,q,q,C.Q),q,q,q,q,q,q,q),q))
t=A.iT()
w.push(A.ih(E.cm_(q,D.amw,new B.c0s(),new B.c0t(p,o,d),y.B),t))
return A.ax(w,C.bS,C.f,C.h,q,C.p)},
$S:964}
B.c0t.prototype={
$1(d){return this.aGH(d)},
aGH(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.H3?2:4
break
case 2:x=5
return A.c(B.G_(t),$async$$1)
case 5:A.bB(s,A.x("Message has been removed.",null),C.a2)
x=3
break
case 4:u=R.y4(A.y(["content",t.b],y.N,y.z))
x=6
return A.c(A0.fB(s,!1).f.jr(u,y.X).aQ(0,new B.c0r(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.c(v.a.b8(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+0}
B.c0r.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bt(d)
x=4
return A.c(B.b32(u),$async$$1)
case 4:A.bB(v.b,A.x("Message has been changed.",null),C.a2)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:93}
B.c0s.prototype={
$1(d){var x=y.B
return A.a([E.awd(F.bs(V.DB,null),!0,48,D.agG,x),E.awd(F.bs(D.b3P,null),!0,48,D.H3,x)],y.h)},
$S:z+1}
B.c0v.prototype={
$0(){return this.a.bl4(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"cSU","cSV",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.yt,A.F)
x(B.aKs,A.L)
w(A.bE,[B.c0q,B.c0t,B.c0r,B.c0s])
w(A.ck,[B.c0w,B.c0x,B.c0v])
x(B.c0u,A.dh)
x(B.vg,A.dR)})()
A.bl(b.typeUniverse,JSON.parse('{"yt":{"F":[],"d":[]},"aKs":{"L":["yt"]}}'))
var y=(function rtii(){var x=A.z
return{B:x("vg"),_:x("S<@>"),t:x("q<aa<e,@>>"),o:x("q<u_>"),h:x("q<oY<vg>>"),p:x("q<d>"),a:x("aa<e,@>"),x:x("u_"),P:x("ay"),K:x("E"),N:x("e"),g:x("mX"),z:x("@"),X:x("E?"),H:x("~")}})();(function constants(){D.H3=new B.vg(0,"delete")
D.agG=new B.vg(1,"edit")
D.aj5=new A.an(16,8,16,0)
D.alB=new A.aE(58652,"MaterialIcons",null,!1)
D.amw=new A.dx(T.IZ,null,null,null,null)
D.b3P=new A.bX("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4d=new A.bX("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_356",e:"endPart",h:b})})($__dart_deferred_initializers__,"S0LkfxYlvG8RglwWJNmSHpNM82M=");