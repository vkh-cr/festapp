((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_274",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,M,H,N,I,O,E,P,Q,R,S,T,U,B={NS:function NS(d,e,f,g,h){var _=this
_.c=d
_.f=e
_.ay=f
_.a=g
_.$ti=h},NT:function NT(d){this.c=this.a=null
this.$ti=d},blr:function blr(d){this.a=d},
cEE(d,e){return new B.xc(e,d)},
xc:function xc(d,e){this.c=d
this.a=e},
aGx:function aGx(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
bQM:function bQM(d,e){this.a=d
this.b=e},
bQS:function bQS(d,e){this.a=d
this.b=e},
bQQ:function bQQ(d){this.a=d},
bQP:function bQP(d,e,f){this.a=d
this.b=e
this.c=f},
bQN:function bQN(d,e){this.a=d
this.b=e},
bQO:function bQO(){},
bQR:function bQR(d,e){this.a=d
this.b=e},
ro:function ro(d,e){this.a=d
this.b=e},
Ep(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n
var $async$Ep=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:p=$.yR()
o=p.bZ("news").hf(0,"id")
n=d.a
n.toString
o=A.qu(o.xo(o.xZ("created_at","lt."+n.k(0))),o.$ti.c)
n=d.d
v=o.xZ("id","neq."+n)
o=A.qu(o.xo(v),o.$ti.c)
u=$.dM
u.toString
x=2
return A.c(o.cF("occasion",u).az0(0,"created_at").ay_(1).ND(),$async$Ep)
case 2:t=f
x=t!=null?3:5
break
case 3:x=6
return A.c(p.bZ("user_news").hf(0,"user").cF("news_id",n),$async$Ep)
case 6:s=f
r=A.a([],y.t)
for(p=J.ak(s),o=J.a3(t),u=y.N,q=y.z;p.q();)r.push(A.G(["user",J.t(p.gK(p),"user"),"news_id",o.i(t,"id")],u,q))
p=$.yR()
x=7
return A.c(p.bZ("user_news").Zr(r).hZ(0),$async$Ep)
case 7:x=4
break
case 5:x=8
return A.c(p.bZ("user_news").kd(0).cF("news_id",n),$async$Ep)
case 8:case 4:x=9
return A.c(p.bZ("news").kd(0).cF("id",n),$async$Ep)
case 9:return A.j(null,w)}})
return A.k($async$Ep,w)},
aZ3(d){var x=0,w=A.l(y.H),v
var $async$aZ3=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.c($.yR().bZ("news").er(0,A.G(["message",d.b],v,v)).cF("id",d.d),$async$aZ3)
case 2:return A.j(null,w)}})
return A.k($async$aZ3,w)},
ait(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$ait=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.yR().bZ("news")
s=$.dM
s.toString
x=5
return A.c(t.jL(0,A.G(["occasion",s,"message",u,"created_by",$.dN().gdv().c.a],y.N,y.K)).hZ(0),$async$ait)
case 5:case 4:x=i?6:7
break
case 6:for(t=I.aPy(Q.c5f(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.P)(t),++q){p=new A.cJ("")
new I.bF7(p).b6(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.dX(o).length===0)continue
r+=o}r=C.e.dX(r)
t=$.yR().bZ("log_notifications")
s=$.dM
s.toString
x=8
return A.c(t.jL(0,A.G(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$ait)
case 8:A.cd(d,A.O("Message has been sent.",null),C.ap)
x=1
break
case 7:if(h)A.cd(d,A.O("Message has been created.",null),C.ap)
case 1:return A.j(v,w)}})
return A.k($async$ait,w)},
aiu(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$aiu=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dN()
if(s.gdv().d==null)A.Y(A.d8("User must be logged in."))
v=$.yR()
u=v.bZ("user_news").kd(0).cF("user",s.gdv().c.a)
t=$.dM
t.toString
x=2
return A.c(u.cF("occasion",t),$async$aiu)
case 2:x=3
return A.c(v.bZ("user_news").jL(0,A.G(["user",s.gdv().c.a,"news_id",d,"occasion",$.dM],y.N,y.X)).hZ(0),$async$aiu)
case 3:return A.j(null,w)}})
return A.k($async$aiu,w)}},D,V,W,G,F,X
J=c[1]
A=c[0]
C=c[2]
K=c[162]
L=c[190]
M=c[155]
H=c[106]
N=c[283]
I=c[120]
O=c[248]
E=c[76]
P=c[271]
Q=c[86]
R=c[99]
S=c[194]
T=c[97]
U=c[264]
B=a.updateHolder(c[17],B)
D=c[282]
V=c[176]
W=c[211]
G=c[159]
F=c[166]
X=c[137]
B.NS.prototype={
M(){return new B.NT(this.$ti.h("NT<1>"))},
bvL(d){return this.c.$1(d)}}
B.NT.prototype={
aHj(){var x,w,v,u,t,s,r,q=this,p=null,o=q.c
o.toString
x=E.asD(o)
o=q.c.gaj()
o.toString
w=y.x
w.a(o)
v=q.c
v.toString
q.a.toString
v=A.cO(v,!1).d
v===$&&A.b()
v=v.ga_().c.gaj()
v.toString
w.a(v)
q.a.toString
u=A.bv("offset")
switch(0){case 0:q.a.toString
u.b=C.f
break}w=u.aA()
w=A.cZ(o.cN(0,v),w)
t=o.gB(0).Fi(0,C.f).a5(0,u.aA())
t=A.t6(w,A.cZ(o.cN(0,v),t))
v=v.gB(0)
s=H.cjV(t,new A.Z(0,0,0+v.a,0+v.b))
v=q.a
v.toString
t=q.c
t.toString
r=v.bvL(t)
if(J.jd(r)){q.a.toString
o=q.c
o.toString
E.cqQ(C.h,x.a,p,o,x.d,p,r,x.c,p,s,p,x.e,x.b,x.f,!1,q.$ti.h("1?")).aL(0,new B.blr(q),y.H)}},
A(d){var x,w,v,u,t=this,s=null,r=A.Mb(d),q=E.asD(d)
t.a.toString
E.asD(d)
x=t.a
x=x.ay
w=q.as
if(w==null)w=r.a
v=q.Q
if(v==null)v=r.f
u=A.cq(d,C.a2,y.y)
u.toString
u=u.gct()
t.a.toString
return F.dg(v,s,s,!0,s,x,w,s,t.gaHi(),C.aI,s,s,s,u)}}
B.xc.prototype={
M(){return new B.aGx(A.a([],y.o))}}
B.aGx.prototype={
W(){this.ap()
this.cv()},
m(){this.al()},
bc(){this.d0()
this.J7()},
J7(){var x=0,w=A.l(y.H),v=this,u
var $async$J7=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.FX(u,y.X)
x=(u==null?null:u.gqJ())===!0&&!v.e?2:3
break
case 2:x=$.dN().gdv().d!=null&&J.jd(v.d)&&!J.fM(v.d).f?4:5
break
case 4:x=6
return A.c(B.aiu(J.fM(v.d).d),$async$J7)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$J7,w)},
bfi(d){K.kE(d,"newsForm",y.X).aL(0,new B.bQM(this,d),y.P)},
Xd(){var x=0,w=A.l(y.H),v=this,u
var $async$Xd=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(A.V4(),$async$Xd)
case 2:v.G(new u.bQS(v,e))
return A.j(null,w)}})
return A.k($async$Xd,w)},
cv(){var x=0,w=A.l(y.H),v=this
var $async$cv=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.Xd(),$async$cv)
case 2:x=3
return A.c(A.rV("newsOffline",v.d),$async$cv)
case 3:v.J7()
return A.j(null,w)}})
return A.k($async$cv,w)},
A(d){var x,w,v=null,u=A.I(d).ax.a===C.z?$.nr():$.Dz(),t=G.bD(D.b0Y,v)
t=M.k0(v,!0,v,v,v,v,v,T.bll(),v,t)
x=X.mQ(!0,v,new B.bQQ(this),J.b_(this.d),v,v,v,!1,C.K,!1)
w=A.pl()
return F.hJ(t,u,new A.cV(C.aS,v,v,new A.dE(new A.a7(0,820,0,1/0),x,v),v),v,v,A.hg(A.cBx(P.yH,!1,new B.bQR(this,d)),w),v)}}
B.ro.prototype={
H(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["~()","Q<~>(ro)","y<t3<ro>>(M)"])
B.blr.prototype={
$1(d){var x=this.a
if(x.c==null)return null
if(d==null){x.a.toString
return null}x.a.f.$1(d)},
$S(){return this.a.$ti.h("aB(1?)")}}
B.bQM.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:y.a.a(d)
u=J.a3(d)
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
s=B.ait(v.b,p,u,q,t,s,r)
x=4
return A.c(y._.b(s)?s:A.cx(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.c(v.a.cv(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:72}
B.bQS.prototype={
$0(){this.a.d=this.b},
$S:0}
B.bQQ.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.t(p.d,e),n=e>0?J.t(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bC(x)===A.bC(w)&&A.bM(x)===A.bM(w)&&A.d2(x)===A.d2(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(N.y4)
if(!u||!v){u=d.af(y.g).r.a
u===$&&A.b()
u=A.kv("EEEE d.M.y",u.gfv(0))
t=o.a
t.toString
t=u.e9(t)
if(o.f){u=p.c
u.toString
u=A.bH(q,q,A.I(u).db,q,q,q,q,q,q,q,q,q,q,q,C.aJ,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.bH(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.aJ,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aM(W.fS,A.ad(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.h,q,q,q,q,q,q,D.agX,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.bH(q,q,A.I(t).db,q,q,q,q,q,q,q,q,q,q,q,C.aJ,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.bH(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.aJ,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.ah(O.lN,A.ad(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.eP(10)
u=A.I(d)
s=o.b
s.toString
r=$.dN().gdv().d
w.push(new A.ah(D.agQ,A.aM(q,A.bi(A.a([new A.ah(V.dA,new H.oT(s,18,!0,q),q),A.hg(new A.ah(C.aI,A.bo(A.a([F.cc(D.ajk,A.I(d).ch,q,16),D.aVE,A.ad(C.c.k(o.e),q,q,q,q,q,q,q,A.bH(q,q,A.I(d).ch,q,q,q,q,q,q,q,q,q,q,q,C.aJ,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),L.kJ],x),C.j,C.eb,C.n,q),q),r!=null)],x),C.j,C.l,C.n,q,C.y),C.h,q,q,new A.bR(u.ax.k2,q,q,t,q,q,q,C.W),q,q,q,q,q,q,q),q))
w.push(A.hg(new B.NS(new B.bQO(),new B.bQP(p,o,d),D.akl,q,y.I),A.pl()))
return A.bi(w,C.cc,C.l,C.n,q,C.y)},
$S:852}
B.bQP.prototype={
$1(d){return this.aCN(d)},
aCN(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.Fu?2:4
break
case 2:x=5
return A.c(B.Ep(t),$async$$1)
case 5:A.cd(s,A.O("Message has been removed.",null),C.ap)
x=3
break
case 4:u=R.Xb(A.G(["content",t.b],y.N,y.z))
x=6
return A.c(F.h2(s,!1).f.l5(u,y.X).aL(0,new B.bQN(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.c(v.a.cv(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+1}
B.bQN.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bm(d)
x=4
return A.c(B.aZ3(u),$async$$1)
case 4:A.cd(v.b,A.O("Message has been changed.",null),C.ap)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:72}
B.bQO.prototype={
$1(d){var x=y.B
return A.a([E.c95(G.bD(S.Cf,null),!0,48,D.aey,x),E.c95(G.bD(D.b1a,null),!0,48,D.Fu,x)],y.h)},
$S:z+2}
B.bQR.prototype={
$0(){return this.a.bfi(this.b)},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.NT.prototype,"gaHi","aHj",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.D,[B.NS,B.xc])
x(A.K,[B.NT,B.aGx])
x(A.bG,[B.blr,B.bQM,B.bQP,B.bQN,B.bQO])
x(A.cl,[B.bQS,B.bQR])
w(B.bQQ,A.dd)
w(B.ro,A.e0)})()
A.bz(b.typeUniverse,JSON.parse('{"NS":{"D":[],"d":[]},"NT":{"K":["NS<1>"]},"xc":{"D":[],"d":[]},"aGx":{"K":["xc"]}}'))
var y=(function rtii(){var x=A.x
return{B:x("ro"),_:x("Q<@>"),t:x("p<a9<f,@>>"),o:x("p<B0>"),h:x("p<t3<ro>>"),p:x("p<d>"),a:x("a9<f,@>"),y:x("aD"),P:x("aB"),K:x("z"),I:x("NS<ro>"),x:x("N"),N:x("f"),g:x("qY"),z:x("@"),X:x("z?"),H:x("~")}})();(function constants(){D.Fu=new B.ro(0,"delete")
D.aey=new B.ro(1,"edit")
D.agQ=new A.as(12,6,12,6)
D.agX=new A.as(16,8,16,0)
D.ajk=new A.aS(58652,"MaterialIcons",null,!1)
D.akl=new A.er(U.aj8,null,null,null,null)
D.aVE=new A.aG(6,null,null,null)
D.b0Y=new A.c2("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b1a=new A.c2("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_274",e:"endPart",h:b})})($__dart_deferred_initializers__,"DaO84erL249zts4+XZfw7YgcfDw=");