((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_306",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,N,O,P,H,Q,I,R,E,S,T,U,V,W,X,K,Y,Z,B={P2:function P2(d,e,f,g,h){var _=this
_.c=d
_.f=e
_.ch=f
_.a=g
_.$ti=h},P3:function P3(d){this.c=this.a=null
this.$ti=d},bps:function bps(d){this.a=d},
cMu(d,e){return new B.xS(e,d)},
xS:function xS(d,e){this.c=d
this.a=e},
aIK:function aIK(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
bWr:function bWr(d,e){this.a=d
this.b=e},
bWx:function bWx(d,e){this.a=d
this.b=e},
bWy:function bWy(d,e){this.a=d
this.b=e},
bWv:function bWv(d){this.a=d},
bWu:function bWu(d,e,f){this.a=d
this.b=e
this.c=f},
bWs:function bWs(d,e){this.a=d
this.b=e},
bWt:function bWt(){},
bWw:function bWw(d,e){this.a=d
this.b=e},
rU:function rU(d,e){this.a=d
this.b=e},
cMt(d){return A.cpX(d)},
Fi(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o
var $async$Fi=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:q=$.zz()
p=q.bW("news").h8(0,"id")
o=d.a
o.toString
v=d.d
p=A.pN(p.vP(p.wb("created_at","lt."+o.j(0))),p.$ti.c).aAE("id",v)
o=$.dA
o.toString
x=2
return A.c(p.cl("occasion",o).bCX(0,"created_at").aA_(1).HL(),$async$Fi)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.c(q.bW("user_news").h8(0,"user").cl("news_id",v),$async$Fi)
case 6:t=f
s=A.a([],y.t)
for(q=J.ak(t),p=J.a1(u),o=y.N,r=y.z;q.q();)s.push(A.y(["user",J.t(q.gK(q),"user"),"news_id",p.i(u,"id")],o,r))
q=$.zz()
x=7
return A.c(q.bW("user_news").a_u(s).hW(0),$async$Fi)
case 7:x=4
break
case 5:x=8
return A.c(q.bW("user_news").ks(0).cl("news_id",v),$async$Fi)
case 8:case 4:x=9
return A.c(q.bW("news").ks(0).cl("id",v),$async$Fi)
case 9:return A.j(null,w)}})
return A.k($async$Fi,w)},
b1g(d){var x=0,w=A.l(y.H),v
var $async$b1g=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.c($.zz().bW("news").ep(0,A.y(["message",d.b],v,v)).cl("id",d.d),$async$b1g)
case 2:return A.j(null,w)}})
return A.k($async$b1g,w)},
ako(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$ako=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.zz().bW("news")
s=$.dA
s.toString
x=5
return A.c(t.jH(0,A.y(["occasion",s,"message",u,"created_by",$.dT().gdu().c.a],y.N,y.K)).hW(0),$async$ako)
case 5:case 4:x=i?6:7
break
case 6:for(t=I.aRT(W.cbQ(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.P)(t),++q){p=new A.cR("")
new I.bKh(p).be(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.dg(o).length===0)continue
r+=o}r=C.e.dg(r)
t=$.zz().bW("log_notifications")
s=$.dA
s.toString
x=8
return A.c(t.jH(0,A.y(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$ako)
case 8:A.bS(d,A.C("Message has been sent.",null),C.af)
x=1
break
case 7:if(h)A.bS(d,A.C("Message has been created.",null),C.af)
case 1:return A.j(v,w)}})
return A.k($async$ako,w)},
akp(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$akp=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dT()
if(s.gdu().d==null)A.a0(A.cW("User must be logged in."))
v=$.zz()
u=v.bW("user_news").ks(0).cl("user",s.gdu().c.a)
t=$.dA
t.toString
x=2
return A.c(u.cl("occasion",t),$async$akp)
case 2:x=3
return A.c(v.bW("user_news").jH(0,A.y(["user",s.gdu().c.a,"news_id",d,"occasion",$.dA],y.N,y.X)).hW(0),$async$akp)
case 3:return A.j(null,w)}})
return A.k($async$akp,w)}},D,A_,G,F
J=c[1]
A=c[0]
C=c[2]
L=c[169]
M=c[151]
N=c[190]
O=c[170]
P=c[210]
H=c[126]
Q=c[217]
I=c[131]
R=c[270]
E=c[93]
S=c[297]
T=c[209]
U=c[114]
V=c[234]
W=c[88]
X=c[127]
K=c[206]
Y=c[101]
Z=c[287]
B=a.updateHolder(c[19],B)
D=c[311]
A_=c[225]
G=c[174]
F=c[180]
B.P2.prototype={
M(){return new B.P3(this.$ti.h("P3<1>"))},
bzf(d){return this.c.$1(d)}}
B.P3.prototype={
aJB(){var x,w,v,u,t,s,r,q=this,p=null,o=q.c
o.toString
x=E.auJ(o)
o=q.c.gaf()
o.toString
w=y.q
w.a(o)
v=q.c
v.toString
q.a.toString
v=A.cq(v,!1).d
v===$&&A.b()
v=v.gV().c.gaf()
v.toString
w.a(v)
q.a.toString
u=A.bz("offset")
switch(0){case 0:q.a.toString
u.b=C.i
break}w=u.aw()
w=A.d7(o.cR(0,v),w)
t=o.gB(0).FV(0,C.i).a8(0,u.aw())
t=A.tG(w,A.d7(o.cR(0,v),t))
v=v.gB(0)
s=H.crc(t,new A.Z(0,0,0+v.a,0+v.b))
v=q.a
v.toString
t=q.c
t.toString
r=v.bzf(t)
if(J.jW(r)){q.a.toString
o=q.c
o.toString
E.cye(C.k,x.a,p,o,x.d,p,r,x.c,p,s,p,p,x.e,x.b,x.f,!1,q.$ti.h("1?")).aP(0,new B.bps(q),y.H)}},
A(d){var x,w,v,u,t=this,s=null,r=A.Nf(d),q=E.auJ(d)
t.a.toString
E.auJ(d)
x=t.a
x=x.ch
w=q.as
if(w==null)w=r.a
v=q.Q
if(v==null)v=r.f
u=A.cI(d,C.a6,y.y)
u.toString
u=u.gcG()
t.a.toString
return F.cH(v,s,s,!0,s,x,w,new A.cj(K.a2W,y.e),s,t.gaJA(),C.aH,s,s,s,u)}}
B.xS.prototype={
M(){return new B.aIK(A.a([],y.o))}}
B.aIK.prototype={
Z(){this.ao()
this.bc()},
l(){this.ah()},
aW(){this.cw()
this.K3()},
K3(){var x=0,w=A.l(y.H),v=this,u
var $async$K3=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.BE(u,null,y.X)
x=(u==null?null:u.gr0())===!0&&!v.e?2:3
break
case 2:x=$.dT().gdu().d!=null&&J.jW(v.d)&&!J.fU(v.d).f?4:5
break
case 4:x=6
return A.c(B.akp(J.fU(v.d).d),$async$K3)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$K3,w)},
biq(d){L.l_(d,"newsForm",y.X).aP(0,new B.bWr(this,d),y.P)},
Yb(){var x=0,w=A.l(y.H),v=this,u
var $async$Yb=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(A.Wu(),$async$Yb)
case 2:v.E(new u.bWx(v,e))
return A.j(null,w)}})
return A.k($async$Yb,w)},
nl(){var x=0,w=A.l(y.H),v=this,u
var $async$nl=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(X.nf("newsOffline",B.cMs(),y.x),$async$nl)
case 2:v.E(new u.bWy(v,e))
return A.j(null,w)}})
return A.k($async$nl,w)},
bc(){var x=0,w=A.l(y.H),v=this
var $async$bc=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.nl(),$async$bc)
case 2:x=3
return A.c(v.Yb(),$async$bc)
case 3:x=4
return A.c(A.tt("newsOffline",v.d),$async$bc)
case 4:v.K3()
return A.j(null,w)}})
return A.k($async$bc,w)},
A(d){var x,w,v=null,u=A.J(d).ax.a===C.y?$.jw():$.uC(),t=G.bj(D.b2G,v)
t=O.k_(v,!0,v,v,v,v,v,Y.bpm(),v,t)
x=M.mj(!0,v,new B.bWv(this),J.b3(this.d),v,v,v,!1,C.J,!1)
w=A.oy()
return F.fx(t,u,new A.cx(C.aN,v,v,new A.d2(new A.aa(0,820,0,1/0),x,v),v),v,v,A.ha(A.cnK(S.mo,!1,new B.bWw(this,d)),w),v)}}
B.rU.prototype={
H(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["~()","Q<~>(rU)","A<tD<rU>>(M)","tr(a8<e,@>)"])
B.bps.prototype={
$1(d){var x=this.a
if(x.c==null)return null
if(d==null){x.a.toString
return null}x.a.f.$1(d)},
$S(){return this.a.$ti.h("av(1?)")}}
B.bWr.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:y.a.a(d)
u=J.a1(d)
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
s=B.ako(v.b,p,u,q,t,s,r)
x=4
return A.c(y._.b(s)?s:A.cu(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.c(v.a.bc(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:76}
B.bWx.prototype={
$0(){this.a.d=this.b},
$S:0}
B.bWy.prototype={
$0(){this.a.d=this.b},
$S:0}
B.bWv.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.t(p.d,e),n=e>0?J.t(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bC(x)===A.bC(w)&&A.bM(x)===A.bM(w)&&A.cJ(x)===A.cJ(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(Q.oG)
if(!u||!v){u=d.ad(y.g).r.a
u===$&&A.b()
u=A.jf("EEEE d.M.y",u.gfI(0))
t=o.a
t.toString
t=u.eu(t)
if(o.f){u=p.c
u.toString
u=A.ba(q,q,A.J(u).db,q,q,q,q,q,q,q,q,q,q,q,C.aq,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.ba(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.aq,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aM(A_.h8,A.a4(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.k,q,q,q,q,q,q,D.ai3,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.ba(q,q,A.J(t).db,q,q,q,q,q,q,q,q,q,q,q,C.aq,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.ba(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.aq,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.ab(R.jT,A.a4(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.dG(10)
u=A.J(d)
s=o.b
s.toString
r=$.dT().gdu().d
w.push(new A.ab(K.ahY,A.aM(q,A.aR(A.a([new A.ab(N.bW,new H.me(s,18,!0,q),q),A.ha(new A.ab(C.aH,A.b5(A.a([F.c3(D.akw,A.J(d).ch,q,16),T.a2J,A.a4(C.c.j(o.e),q,q,q,q,q,q,q,A.ba(q,q,A.J(d).ch,q,q,q,q,q,q,q,q,q,q,q,C.aq,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),P.jg],x),C.j,C.dy,C.l,q),q),r!=null)],x),C.j,C.h,C.l,q,C.u),C.k,q,q,new A.bG(u.ax.k2,q,q,t,q,q,q,C.T),q,q,q,q,q,q,q),q))
w.push(A.ha(new B.P2(new B.bWt(),new B.bWu(p,o,d),D.alD,q,y.I),A.oy()))
return A.aR(w,C.c_,C.h,C.l,q,C.u)},
$S:870}
B.bWu.prototype={
$1(d){return this.aEW(d)},
aEW(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.Gi?2:4
break
case 2:x=5
return A.c(B.Fi(t),$async$$1)
case 5:A.bS(s,A.C("Message has been removed.",null),C.af)
x=3
break
case 4:u=U.Na(A.y(["content",t.b],y.N,y.z))
x=6
return A.c(F.fH(s,!1).f.kG(u,y.X).aP(0,new B.bWs(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.c(v.a.bc(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+1}
B.bWs.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bk(d)
x=4
return A.c(B.b1g(u),$async$$1)
case 4:A.bS(v.b,A.C("Message has been changed.",null),C.af)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:76}
B.bWt.prototype={
$1(d){var x=y.B
return A.a([E.cfN(G.bj(V.CX,null),!0,48,D.afC,x),E.cfN(G.bj(D.b2S,null),!0,48,D.Gi,x)],y.h)},
$S:z+2}
B.bWw.prototype={
$0(){return this.a.biq(this.b)},
$S:0};(function installTearOffs(){var x=a._instance_0u,w=a._static_1
x(B.P3.prototype,"gaJA","aJB",0)
w(B,"cMs","cMt",3)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.G,[B.P2,B.xS])
x(A.K,[B.P3,B.aIK])
x(A.bH,[B.bps,B.bWr,B.bWu,B.bWs,B.bWt])
x(A.cf,[B.bWx,B.bWy,B.bWw])
w(B.bWv,A.dg)
w(B.rU,A.e5)})()
A.br(b.typeUniverse,JSON.parse('{"P2":{"G":[],"d":[]},"P3":{"K":["P2<1>"]},"xS":{"G":[],"d":[]},"aIK":{"K":["xS"]}}'))
var y=(function rtii(){var x=A.w
return{B:x("rU"),_:x("Q<@>"),t:x("p<a8<e,@>>"),o:x("p<tr>"),h:x("p<tD<rU>>"),p:x("p<d>"),a:x("a8<e,@>"),y:x("aI"),x:x("tr"),P:x("av"),K:x("B"),I:x("P2<rU>"),q:x("R"),N:x("e"),e:x("cj<vU>"),g:x("q7"),z:x("@"),X:x("B?"),H:x("~")}})();(function constants(){D.Gi=new B.rU(0,"delete")
D.afC=new B.rU(1,"edit")
D.ai3=new A.ap(16,8,16,0)
D.akw=new A.aP(58652,"MaterialIcons",null,!1)
D.alD=new A.em(Z.akk,null,null,null,null)
D.b2G=new A.c6("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b2S=new A.c6("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_306",e:"endPart",h:b})})($__dart_deferred_initializers__,"CzuVmQTq06GKXkyJaUeXrvHKYpE=");