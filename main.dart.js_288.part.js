((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_288",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,N,O,P,H,Q,I,R,E,S,T,U,V,W,X,Y,K,Z,B={OJ:function OJ(d,e,f,g,h){var _=this
_.c=d
_.f=e
_.ch=f
_.a=g
_.$ti=h},OK:function OK(d){this.c=this.a=null
this.$ti=d},boh:function boh(d){this.a=d},
cKh(d,e){return new B.xF(e,d)},
xF:function xF(d,e){this.c=d
this.a=e},
aHU:function aHU(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
bV1:function bV1(d,e){this.a=d
this.b=e},
bV7:function bV7(d,e){this.a=d
this.b=e},
bV8:function bV8(d,e){this.a=d
this.b=e},
bV5:function bV5(d){this.a=d},
bV4:function bV4(d,e,f){this.a=d
this.b=e
this.c=f},
bV2:function bV2(d,e){this.a=d
this.b=e},
bV3:function bV3(){},
bV6:function bV6(d,e){this.a=d
this.b=e},
rL:function rL(d,e){this.a=d
this.b=e},
cKg(d){return A.cnV(d)},
F6(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n
var $async$F6=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:p=$.zo()
o=p.bX("news").h5(0,"id")
n=d.a
n.toString
o=A.pE(o.vJ(o.w4("created_at","lt."+n.j(0))),o.$ti.c)
n=d.d
v=o.w4("id","neq."+n)
o=A.pE(o.vJ(v),o.$ti.c)
u=$.dy
u.toString
x=2
return A.c(o.cl("occasion",u).aAx(0,"created_at").azr(1).Hz(),$async$F6)
case 2:t=f
x=t!=null?3:5
break
case 3:x=6
return A.c(p.bX("user_news").h5(0,"user").cl("news_id",n),$async$F6)
case 6:s=f
r=A.a([],y.t)
for(p=J.al(s),o=J.a1(t),u=y.N,q=y.z;p.q();)r.push(A.x(["user",J.t(p.gK(p),"user"),"news_id",o.i(t,"id")],u,q))
p=$.zo()
x=7
return A.c(p.bX("user_news").a_7(r).hW(0),$async$F6)
case 7:x=4
break
case 5:x=8
return A.c(p.bX("user_news").kr(0).cl("news_id",n),$async$F6)
case 8:case 4:x=9
return A.c(p.bX("news").kr(0).cl("id",n),$async$F6)
case 9:return A.j(null,w)}})
return A.k($async$F6,w)},
b0m(d){var x=0,w=A.l(y.H),v
var $async$b0m=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.c($.zo().bX("news").en(0,A.x(["message",d.b],v,v)).cl("id",d.d),$async$b0m)
case 2:return A.j(null,w)}})
return A.k($async$b0m,w)},
ajF(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$ajF=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.zo().bX("news")
s=$.dy
s.toString
x=5
return A.c(t.jH(0,A.x(["occasion",s,"message",u,"created_by",$.dR().gds().c.a],y.N,y.K)).hW(0),$async$ajF)
case 5:case 4:x=i?6:7
break
case 6:for(t=I.aR_(W.ca3(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.O)(t),++q){p=new A.cS("")
new I.bIV(p).bd(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.dg(o).length===0)continue
r+=o}r=C.e.dg(r)
t=$.zo().bX("log_notifications")
s=$.dy
s.toString
x=8
return A.c(t.jH(0,A.x(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$ajF)
case 8:A.c_(d,A.E("Message has been sent.",null),C.ag)
x=1
break
case 7:if(h)A.c_(d,A.E("Message has been created.",null),C.ag)
case 1:return A.j(v,w)}})
return A.k($async$ajF,w)},
ajG(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$ajG=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dR()
if(s.gds().d==null)A.a0(A.cZ("User must be logged in."))
v=$.zo()
u=v.bX("user_news").kr(0).cl("user",s.gds().c.a)
t=$.dy
t.toString
x=2
return A.c(u.cl("occasion",t),$async$ajG)
case 2:x=3
return A.c(v.bX("user_news").jH(0,A.x(["user",s.gds().c.a,"news_id",d,"occasion",$.dy],y.N,y.X)).hW(0),$async$ajG)
case 3:return A.j(null,w)}})
return A.k($async$ajG,w)}},D,A_,G,F
J=c[1]
A=c[0]
C=c[2]
L=c[160]
M=c[144]
N=c[181]
O=c[161]
P=c[199]
H=c[117]
Q=c[205]
I=c[122]
R=c[257]
E=c[85]
S=c[282]
T=c[198]
U=c[106]
V=c[222]
W=c[81]
X=c[118]
Y=c[92]
K=c[194]
Z=c[272]
B=a.updateHolder(c[19],B)
D=c[295]
A_=c[213]
G=c[164]
F=c[171]
B.OJ.prototype={
M(){return new B.OK(this.$ti.h("OK<1>"))},
byi(d){return this.c.$1(d)}}
B.OK.prototype={
aJ1(){var x,w,v,u,t,s,r,q=this,p=null,o=q.c
o.toString
x=E.au_(o)
o=q.c.gae()
o.toString
w=y.q
w.a(o)
v=q.c
v.toString
q.a.toString
v=A.cp(v,!1).d
v===$&&A.b()
v=v.gV().c.gae()
v.toString
w.a(v)
q.a.toString
u=A.bA("offset")
switch(0){case 0:q.a.toString
u.b=C.h
break}w=u.aC()
w=A.d7(o.cR(0,v),w)
t=o.gB(0).FK(0,C.h).a8(0,u.aC())
t=A.tv(w,A.d7(o.cR(0,v),t))
v=v.gB(0)
s=H.cpb(t,new A.Z(0,0,0+v.a,0+v.b))
v=q.a
v.toString
t=q.c
t.toString
r=v.byi(t)
if(J.jp(r)){q.a.toString
o=q.c
o.toString
E.cwa(C.i,x.a,p,o,x.d,p,r,x.c,p,s,p,p,x.e,x.b,x.f,!1,q.$ti.h("1?")).aO(0,new B.boh(q),y.H)}},
A(d){var x,w,v,u,t=this,s=null,r=A.MW(d),q=E.au_(d)
t.a.toString
E.au_(d)
x=t.a
x=x.ch
w=q.as
if(w==null)w=r.a
v=q.Q
if(v==null)v=r.f
u=A.cE(d,C.a5,y.y)
u.toString
u=u.gcE()
t.a.toString
return F.cY(v,s,s,!0,s,x,w,new A.cl(K.a2w,y.e),s,t.gaJ0(),C.aE,s,s,s,u)}}
B.xF.prototype={
M(){return new B.aHU(A.a([],y.o))}}
B.aHU.prototype={
a_(){this.ap()
this.bh()},
l(){this.al()},
aZ(){this.cI()
this.JT()},
JT(){var x=0,w=A.l(y.H),v=this,u
var $async$JT=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Bs(u,null,y.X)
x=(u==null?null:u.gqW())===!0&&!v.e?2:3
break
case 2:x=$.dR().gds().d!=null&&J.jp(v.d)&&!J.fO(v.d).f?4:5
break
case 4:x=6
return A.c(B.ajG(J.fO(v.d).d),$async$JT)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$JT,w)},
bhv(d){L.kV(d,"newsForm",y.X).aO(0,new B.bV1(this,d),y.P)},
XQ(){var x=0,w=A.l(y.H),v=this,u
var $async$XQ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(A.W5(),$async$XQ)
case 2:v.E(new u.bV7(v,e))
return A.j(null,w)}})
return A.k($async$XQ,w)},
ni(){var x=0,w=A.l(y.H),v=this,u
var $async$ni=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(X.nb("newsOffline",B.cKf(),y.x),$async$ni)
case 2:v.E(new u.bV8(v,e))
return A.j(null,w)}})
return A.k($async$ni,w)},
bh(){var x=0,w=A.l(y.H),v=this
var $async$bh=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.ni(),$async$bh)
case 2:x=3
return A.c(v.XQ(),$async$bh)
case 3:x=4
return A.c(A.ti("newsOffline",v.d),$async$bh)
case 4:v.JT()
return A.j(null,w)}})
return A.k($async$bh,w)},
A(d){var x,w,v=null,u=A.I(d).ax.a===C.y?$.kf():$.zq(),t=G.bs(D.b23,v)
t=O.jR(v,!0,v,v,v,v,v,Y.bob(),v,t)
x=M.mc(!0,v,new B.bV5(this),J.b1(this.d),v,v,v,!1,C.K,!1)
w=A.ou()
return F.fB(t,u,new A.cN(C.aM,v,v,new A.d1(new A.aa(0,820,0,1/0),x,v),v),v,v,A.h4(A.clO(S.mn,!1,new B.bV6(this,d)),w),v)}}
B.rL.prototype={
G(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["~()","Q<~>(rL)","z<ts<rL>>(M)","tg(a7<f,@>)"])
B.boh.prototype={
$1(d){var x=this.a
if(x.c==null)return null
if(d==null){x.a.toString
return null}x.a.f.$1(d)},
$S(){return this.a.$ti.h("av(1?)")}}
B.bV1.prototype={
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
s=B.ajF(v.b,p,u,q,t,s,r)
x=4
return A.c(y._.b(s)?s:A.cw(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.c(v.a.bh(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:76}
B.bV7.prototype={
$0(){this.a.d=this.b},
$S:0}
B.bV8.prototype={
$0(){this.a.d=this.b},
$S:0}
B.bV5.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.t(p.d,e),n=e>0?J.t(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bz(x)===A.bz(w)&&A.bL(x)===A.bL(w)&&A.cF(x)===A.cF(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(Q.oE)
if(!u||!v){u=d.ag(y.g).r.a
u===$&&A.b()
u=A.jU("EEEE d.M.y",u.gfG(0))
t=o.a
t.toString
t=u.eA(t)
if(o.f){u=p.c
u.toString
u=A.bb(q,q,A.I(u).db,q,q,q,q,q,q,q,q,q,q,q,C.as,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.bb(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.as,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aO(A_.h6,A.a6(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.i,q,q,q,q,q,q,D.ahB,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.bb(q,q,A.I(t).db,q,q,q,q,q,q,q,q,q,q,q,C.as,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.bb(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.as,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.ag(R.jT,A.a6(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.dE(10)
u=A.I(d)
s=o.b
s.toString
r=$.dR().gds().d
w.push(new A.ag(K.ahv,A.aO(q,A.aY(A.a([new A.ag(N.c6,new H.n2(s,18,!0,q),q),A.h4(new A.ag(C.aE,A.b9(A.a([F.c3(D.ak4,A.I(d).ch,q,16),T.a2k,A.a6(C.c.j(o.e),q,q,q,q,q,q,q,A.bb(q,q,A.I(d).ch,q,q,q,q,q,q,q,q,q,q,q,C.as,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),P.jd],x),C.k,C.dR,C.m,q),q),r!=null)],x),C.k,C.j,C.m,q,C.v),C.i,q,q,new A.bF(u.ax.k2,q,q,t,q,q,q,C.T),q,q,q,q,q,q,q),q))
w.push(A.h4(new B.OJ(new B.bV3(),new B.bV4(p,o,d),D.al9,q,y.I),A.ou()))
return A.aY(w,C.bZ,C.j,C.m,q,C.v)},
$S:864}
B.bV4.prototype={
$1(d){return this.aEo(d)},
aEo(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.G5?2:4
break
case 2:x=5
return A.c(B.F6(t),$async$$1)
case 5:A.c_(s,A.E("Message has been removed.",null),C.ag)
x=3
break
case 4:u=U.MR(A.x(["content",t.b],y.N,y.z))
x=6
return A.c(F.fL(s,!1).f.kE(u,y.X).aO(0,new B.bV2(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.c(v.a.bh(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+1}
B.bV2.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bp(d)
x=4
return A.c(B.b0m(u),$async$$1)
case 4:A.c_(v.b,A.E("Message has been changed.",null),C.ag)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:76}
B.bV3.prototype={
$1(d){var x=y.B
return A.a([E.cdU(G.bs(V.CP,null),!0,48,D.aff,x),E.cdU(G.bs(D.b2e,null),!0,48,D.G5,x)],y.h)},
$S:z+2}
B.bV6.prototype={
$0(){return this.a.bhv(this.b)},
$S:0};(function installTearOffs(){var x=a._instance_0u,w=a._static_1
x(B.OK.prototype,"gaJ0","aJ1",0)
w(B,"cKf","cKg",3)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.H,[B.OJ,B.xF])
x(A.K,[B.OK,B.aHU])
x(A.bP,[B.boh,B.bV1,B.bV4,B.bV2,B.bV3])
x(A.co,[B.bV7,B.bV8,B.bV6])
w(B.bV5,A.di)
w(B.rL,A.eg)})()
A.bD(b.typeUniverse,JSON.parse('{"OJ":{"H":[],"d":[]},"OK":{"K":["OJ<1>"]},"xF":{"H":[],"d":[]},"aHU":{"K":["xF"]}}'))
var y=(function rtii(){var x=A.A
return{B:x("rL"),_:x("Q<@>"),t:x("p<a7<f,@>>"),o:x("p<tg>"),h:x("p<ts<rL>>"),p:x("p<d>"),a:x("a7<f,@>"),y:x("aH"),x:x("tg"),P:x("av"),K:x("B"),I:x("OJ<rL>"),q:x("R"),N:x("f"),e:x("cl<vH>"),g:x("pZ"),z:x("@"),X:x("B?"),H:x("~")}})();(function constants(){D.G5=new B.rL(0,"delete")
D.aff=new B.rL(1,"edit")
D.ahB=new A.ap(16,8,16,0)
D.ak4=new A.aP(58652,"MaterialIcons",null,!1)
D.al9=new A.ep(Z.ajT,null,null,null,null)
D.b23=new A.c6("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b2e=new A.c6("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_288",e:"endPart",h:b})})($__dart_deferred_initializers__,"eirxSQubNs0IoUQloCHWN5jWlig=");