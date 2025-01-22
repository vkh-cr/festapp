((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_301",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,N,O,P,H,Q,I,R,E,S,T,U,V,W,X,Y,Z,K,B={OO:function OO(d,e,f,g,h){var _=this
_.c=d
_.f=e
_.ch=f
_.a=g
_.$ti=h},OP:function OP(d){this.c=this.a=null
this.$ti=d},boy:function boy(d){this.a=d},
cKQ(d,e){return new B.xI(e,d)},
xI:function xI(d,e){this.c=d
this.a=e},
aI2:function aI2(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
bVj:function bVj(d,e){this.a=d
this.b=e},
bVp:function bVp(d,e){this.a=d
this.b=e},
bVq:function bVq(d,e){this.a=d
this.b=e},
bVn:function bVn(d){this.a=d},
bVm:function bVm(d,e,f){this.a=d
this.b=e
this.c=f},
bVk:function bVk(d,e){this.a=d
this.b=e},
bVl:function bVl(){},
bVo:function bVo(d,e){this.a=d
this.b=e},
rM:function rM(d,e){this.a=d
this.b=e},
cKP(d){return A.cop(d)},
Fa(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n
var $async$Fa=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:p=$.zp()
o=p.bX("news").h6(0,"id")
n=d.a
n.toString
o=A.pG(o.vK(o.w5("created_at","lt."+n.j(0))),o.$ti.c)
n=d.d
v=o.w5("id","neq."+n)
o=A.pG(o.vK(v),o.$ti.c)
u=$.dH
u.toString
x=2
return A.c(o.cl("occasion",u).aAF(0,"created_at").azz(1).HA(),$async$Fa)
case 2:t=f
x=t!=null?3:5
break
case 3:x=6
return A.c(p.bX("user_news").h6(0,"user").cl("news_id",n),$async$Fa)
case 6:s=f
r=A.a([],y.t)
for(p=J.al(s),o=J.a1(t),u=y.N,q=y.z;p.q();)r.push(A.x(["user",J.t(p.gK(p),"user"),"news_id",o.i(t,"id")],u,q))
p=$.zp()
x=7
return A.c(p.bX("user_news").a_8(r).hW(0),$async$Fa)
case 7:x=4
break
case 5:x=8
return A.c(p.bX("user_news").kr(0).cl("news_id",n),$async$Fa)
case 8:case 4:x=9
return A.c(p.bX("news").kr(0).cl("id",n),$async$Fa)
case 9:return A.j(null,w)}})
return A.k($async$Fa,w)},
b0z(d){var x=0,w=A.l(y.H),v
var $async$b0z=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.c($.zp().bX("news").eo(0,A.x(["message",d.b],v,v)).cl("id",d.d),$async$b0z)
case 2:return A.j(null,w)}})
return A.k($async$b0z,w)},
ajM(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$ajM=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.zp().bX("news")
s=$.dH
s.toString
x=5
return A.c(t.jH(0,A.x(["occasion",s,"message",u,"created_by",$.dQ().gds().c.a],y.N,y.K)).hW(0),$async$ajM)
case 5:case 4:x=i?6:7
break
case 6:for(t=I.aRa(W.car(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.O)(t),++q){p=new A.cQ("")
new I.bJd(p).bd(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.dh(o).length===0)continue
r+=o}r=C.e.dh(r)
t=$.zp().bX("log_notifications")
s=$.dH
s.toString
x=8
return A.c(t.jH(0,A.x(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$ajM)
case 8:A.c_(d,A.E("Message has been sent.",null),C.ah)
x=1
break
case 7:if(h)A.c_(d,A.E("Message has been created.",null),C.ah)
case 1:return A.j(v,w)}})
return A.k($async$ajM,w)},
ajN(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$ajN=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dQ()
if(s.gds().d==null)A.a0(A.cU("User must be logged in."))
v=$.zp()
u=v.bX("user_news").kr(0).cl("user",s.gds().c.a)
t=$.dH
t.toString
x=2
return A.c(u.cl("occasion",t),$async$ajN)
case 2:x=3
return A.c(v.bX("user_news").jH(0,A.x(["user",s.gds().c.a,"news_id",d,"occasion",$.dH],y.N,y.X)).hW(0),$async$ajN)
case 3:return A.j(null,w)}})
return A.k($async$ajN,w)}},D,A_,G,F
J=c[1]
A=c[0]
C=c[2]
L=c[165]
M=c[148]
N=c[166]
O=c[188]
P=c[209]
H=c[121]
Q=c[216]
I=c[126]
R=c[268]
E=c[89]
S=c[294]
T=c[208]
U=c[110]
V=c[233]
W=c[85]
X=c[122]
Y=c[96]
Z=c[284]
K=c[204]
B=a.updateHolder(c[19],B)
D=c[307]
A_=c[224]
G=c[173]
F=c[178]
B.OO.prototype={
M(){return new B.OP(this.$ti.h("OP<1>"))},
byp(d){return this.c.$1(d)}}
B.OP.prototype={
aJ9(){var x,w,v,u,t,s,r,q=this,p=null,o=q.c
o.toString
x=E.au7(o)
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
u=A.bC("offset")
switch(0){case 0:q.a.toString
u.b=C.h
break}w=u.aC()
w=A.d7(o.cR(0,v),w)
t=o.gB(0).FM(0,C.h).a8(0,u.aC())
t=A.tw(w,A.d7(o.cR(0,v),t))
v=v.gB(0)
s=H.cpH(t,new A.Z(0,0,0+v.a,0+v.b))
v=q.a
v.toString
t=q.c
t.toString
r=v.byp(t)
if(J.jt(r)){q.a.toString
o=q.c
o.toString
E.cwJ(C.j,x.a,p,o,x.d,p,r,x.c,p,s,p,p,x.e,x.b,x.f,!1,q.$ti.h("1?")).aP(0,new B.boy(q),y.H)}},
A(d){var x,w,v,u,t=this,s=null,r=A.N0(d),q=E.au7(d)
t.a.toString
E.au7(d)
x=t.a
x=x.ch
w=q.as
if(w==null)w=r.a
v=q.Q
if(v==null)v=r.f
u=A.cE(d,C.a6,y.y)
u.toString
u=u.gcF()
t.a.toString
return F.cV(v,s,s,!0,s,x,w,new A.co(K.a2F,y.e),s,t.gaJ8(),C.aE,s,s,s,u)}}
B.xI.prototype={
M(){return new B.aI2(A.a([],y.o))}}
B.aI2.prototype={
a_(){this.ap()
this.bh()},
l(){this.aj()},
aX(){this.cG()
this.JT()},
JT(){var x=0,w=A.l(y.H),v=this,u
var $async$JT=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Bu(u,null,y.X)
x=(u==null?null:u.gqX())===!0&&!v.e?2:3
break
case 2:x=$.dQ().gds().d!=null&&J.jt(v.d)&&!J.fP(v.d).f?4:5
break
case 4:x=6
return A.c(B.ajN(J.fP(v.d).d),$async$JT)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$JT,w)},
bhD(d){L.kW(d,"newsForm",y.X).aP(0,new B.bVj(this,d),y.P)},
XR(){var x=0,w=A.l(y.H),v=this,u
var $async$XR=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(A.Wa(),$async$XR)
case 2:v.E(new u.bVp(v,e))
return A.j(null,w)}})
return A.k($async$XR,w)},
nk(){var x=0,w=A.l(y.H),v=this,u
var $async$nk=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(X.nb("newsOffline",B.cKO(),y.x),$async$nk)
case 2:v.E(new u.bVq(v,e))
return A.j(null,w)}})
return A.k($async$nk,w)},
bh(){var x=0,w=A.l(y.H),v=this
var $async$bh=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.nk(),$async$bh)
case 2:x=3
return A.c(v.XR(),$async$bh)
case 3:x=4
return A.c(A.tj("newsOffline",v.d),$async$bh)
case 4:v.JT()
return A.j(null,w)}})
return A.k($async$bh,w)},
A(d){var x,w,v=null,u=A.I(d).ax.a===C.y?$.kg():$.zs(),t=G.bq(D.b27,v)
t=N.jU(v,!0,v,v,v,v,v,Y.bos(),v,t)
x=M.mc(!0,v,new B.bVn(this),J.b1(this.d),v,v,v,!1,C.K,!1)
w=A.ov()
return F.fu(t,u,new A.cN(C.aM,v,v,new A.d1(new A.aa(0,820,0,1/0),x,v),v),v,v,A.h7(A.cmf(S.mo,!1,new B.bVo(this,d)),w),v)}}
B.rM.prototype={
G(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["~()","Q<~>(rM)","z<tt<rM>>(N)","th(a7<e,@>)"])
B.boy.prototype={
$1(d){var x=this.a
if(x.c==null)return null
if(d==null){x.a.toString
return null}x.a.f.$1(d)},
$S(){return this.a.$ti.h("av(1?)")}}
B.bVj.prototype={
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
s=B.ajM(v.b,p,u,q,t,s,r)
x=4
return A.c(y._.b(s)?s:A.cs(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.c(v.a.bh(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:76}
B.bVp.prototype={
$0(){this.a.d=this.b},
$S:0}
B.bVq.prototype={
$0(){this.a.d=this.b},
$S:0}
B.bVn.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.t(p.d,e),n=e>0?J.t(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bB(x)===A.bB(w)&&A.bM(x)===A.bM(w)&&A.cF(x)===A.cF(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(Q.oG)
if(!u||!v){u=d.ae(y.g).r.a
u===$&&A.b()
u=A.jd("EEEE d.M.y",u.gfH(0))
t=o.a
t.toString
t=u.el(t)
if(o.f){u=p.c
u.toString
u=A.ba(q,q,A.I(u).db,q,q,q,q,q,q,q,q,q,q,q,C.aq,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.ba(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.aq,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aM(A_.h7,A.a5(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.j,q,q,q,q,q,q,D.ahJ,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.ba(q,q,A.I(t).db,q,q,q,q,q,q,q,q,q,q,q,C.aq,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.ba(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.aq,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.af(R.jT,A.a5(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.dE(10)
u=A.I(d)
s=o.b
s.toString
r=$.dQ().gds().d
w.push(new A.af(K.ahD,A.aM(q,A.aU(A.a([new A.af(O.bW,new H.n2(s,18,!0,q),q),A.h7(new A.af(C.aE,A.b8(A.a([F.c1(D.akc,A.I(d).ch,q,16),T.a2t,A.a5(C.c.j(o.e),q,q,q,q,q,q,q,A.ba(q,q,A.I(d).ch,q,q,q,q,q,q,q,q,q,q,q,C.aq,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),P.je],x),C.k,C.dR,C.l,q),q),r!=null)],x),C.k,C.i,C.l,q,C.u),C.j,q,q,new A.bG(u.ax.k2,q,q,t,q,q,q,C.T),q,q,q,q,q,q,q),q))
w.push(A.h7(new B.OO(new B.bVl(),new B.bVm(p,o,d),D.ali,q,y.I),A.ov()))
return A.aU(w,C.c_,C.i,C.l,q,C.u)},
$S:867}
B.bVm.prototype={
$1(d){return this.aEv(d)},
aEv(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.G6?2:4
break
case 2:x=5
return A.c(B.Fa(t),$async$$1)
case 5:A.c_(s,A.E("Message has been removed.",null),C.ah)
x=3
break
case 4:u=U.MV(A.x(["content",t.b],y.N,y.z))
x=6
return A.c(F.fD(s,!1).f.kE(u,y.X).aP(0,new B.bVk(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.c(v.a.bh(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+1}
B.bVk.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bs(d)
x=4
return A.c(B.b0z(u),$async$$1)
case 4:A.c_(v.b,A.E("Message has been changed.",null),C.ah)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:76}
B.bVl.prototype={
$1(d){var x=y.B
return A.a([E.cek(G.bq(V.CP,null),!0,48,D.afp,x),E.cek(G.bq(D.b2i,null),!0,48,D.G6,x)],y.h)},
$S:z+2}
B.bVo.prototype={
$0(){return this.a.bhD(this.b)},
$S:0};(function installTearOffs(){var x=a._instance_0u,w=a._static_1
x(B.OP.prototype,"gaJ8","aJ9",0)
w(B,"cKO","cKP",3)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.G,[B.OO,B.xI])
x(A.K,[B.OP,B.aI2])
x(A.bJ,[B.boy,B.bVj,B.bVm,B.bVk,B.bVl])
x(A.cg,[B.bVp,B.bVq,B.bVo])
w(B.bVn,A.de)
w(B.rM,A.e2)})()
A.br(b.typeUniverse,JSON.parse('{"OO":{"G":[],"d":[]},"OP":{"K":["OO<1>"]},"xI":{"G":[],"d":[]},"aI2":{"K":["xI"]}}'))
var y=(function rtii(){var x=A.y
return{B:x("rM"),_:x("Q<@>"),t:x("p<a7<e,@>>"),o:x("p<th>"),h:x("p<tt<rM>>"),p:x("p<d>"),a:x("a7<e,@>"),y:x("aH"),x:x("th"),P:x("av"),K:x("B"),I:x("OO<rM>"),q:x("R"),N:x("e"),e:x("co<vI>"),g:x("q_"),z:x("@"),X:x("B?"),H:x("~")}})();(function constants(){D.G6=new B.rM(0,"delete")
D.afp=new B.rM(1,"edit")
D.ahJ=new A.ap(16,8,16,0)
D.akc=new A.aP(58652,"MaterialIcons",null,!1)
D.ali=new A.el(Z.ak0,null,null,null,null)
D.b27=new A.c7("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b2i=new A.c7("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_301",e:"endPart",h:b})})($__dart_deferred_initializers__,"3DMgf35ytxtZXzntfdvuad9g/Yo=");