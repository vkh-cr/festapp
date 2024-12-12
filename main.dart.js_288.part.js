((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_288",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,M,N,H,O,I,P,E,Q,R,S,T,U,V,W,B={Os:function Os(d,e,f,g,h){var _=this
_.c=d
_.f=e
_.ay=f
_.a=g
_.$ti=h},Ot:function Ot(d){this.c=this.a=null
this.$ti=d},bnI:function bnI(d){this.a=d},
cJ3(d,e){return new B.xw(e,d)},
xw:function xw(d,e){this.c=d
this.a=e},
aHk:function aHk(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
bU7:function bU7(d,e){this.a=d
this.b=e},
bUd:function bUd(d,e){this.a=d
this.b=e},
bUb:function bUb(d){this.a=d},
bUa:function bUa(d,e,f){this.a=d
this.b=e
this.c=f},
bU8:function bU8(d,e){this.a=d
this.b=e},
bU9:function bU9(){},
bUc:function bUc(d,e){this.a=d
this.b=e},
rB:function rB(d,e){this.a=d
this.b=e},
EO(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n
var $async$EO=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:p=$.zb()
o=p.bW("news").h9(0,"id")
n=d.a
n.toString
o=A.qI(o.xq(o.y0("created_at","lt."+n.k(0))),o.$ti.c)
n=d.d
v=o.y0("id","neq."+n)
o=A.qI(o.xq(v),o.$ti.c)
u=$.dM
u.toString
x=2
return A.c(o.cn("occasion",u).azv(0,"created_at").ayu(1).H7(),$async$EO)
case 2:t=f
x=t!=null?3:5
break
case 3:x=6
return A.c(p.bW("user_news").h9(0,"user").cn("news_id",n),$async$EO)
case 6:s=f
r=A.a([],y.t)
for(p=J.al(s),o=J.a1(t),u=y.N,q=y.z;p.q();)r.push(A.C(["user",J.t(p.gK(p),"user"),"news_id",o.i(t,"id")],u,q))
p=$.zb()
x=7
return A.c(p.bW("user_news").ZI(r).hR(0),$async$EO)
case 7:x=4
break
case 5:x=8
return A.c(p.bW("user_news").kh(0).cn("news_id",n),$async$EO)
case 8:case 4:x=9
return A.c(p.bW("news").kh(0).cn("id",n),$async$EO)
case 9:return A.j(null,w)}})
return A.k($async$EO,w)},
b_I(d){var x=0,w=A.l(y.H),v
var $async$b_I=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.c($.zb().bW("news").ek(0,A.C(["message",d.b],v,v)).cn("id",d.d),$async$b_I)
case 2:return A.j(null,w)}})
return A.k($async$b_I,w)},
ajd(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$ajd=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.zb().bW("news")
s=$.dM
s.toString
x=5
return A.c(t.jy(0,A.C(["occasion",s,"message",u,"created_by",$.dR().gdw().c.a],y.N,y.K)).hR(0),$async$ajd)
case 5:case 4:x=i?6:7
break
case 6:for(t=I.aQq(U.c8Z(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.O)(t),++q){p=new A.cP("")
new I.bI2(p).b7(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.dP(o).length===0)continue
r+=o}r=C.e.dP(r)
t=$.zb().bW("log_notifications")
s=$.dM
s.toString
x=8
return A.c(t.jy(0,A.C(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$ajd)
case 8:A.bZ(d,A.D("Message has been sent.",null),C.ag)
x=1
break
case 7:if(h)A.bZ(d,A.D("Message has been created.",null),C.ag)
case 1:return A.j(v,w)}})
return A.k($async$ajd,w)},
aje(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$aje=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dR()
if(s.gdw().d==null)A.Z(A.d9("User must be logged in."))
v=$.zb()
u=v.bW("user_news").kh(0).cn("user",s.gdw().c.a)
t=$.dM
t.toString
x=2
return A.c(u.cn("occasion",t),$async$aje)
case 2:x=3
return A.c(v.bW("user_news").jy(0,A.C(["user",s.gdw().c.a,"news_id",d,"occasion",$.dM],y.N,y.X)).hR(0),$async$aje)
case 3:return A.j(null,w)}})
return A.k($async$aje,w)}},D,X,Y,G,F
J=c[1]
A=c[0]
C=c[2]
K=c[161]
L=c[145]
M=c[162]
N=c[202]
H=c[120]
O=c[208]
I=c[124]
P=c[260]
E=c[85]
Q=c[284]
R=c[201]
S=c[109]
T=c[226]
U=c[81]
V=c[94]
W=c[275]
B=a.updateHolder(c[19],B)
D=c[297]
X=c[182]
Y=c[217]
G=c[165]
F=c[172]
B.Os.prototype={
M(){return new B.Ot(this.$ti.h("Ot<1>"))},
bwZ(d){return this.c.$1(d)}}
B.Ot.prototype={
aHV(){var x,w,v,u,t,s,r,q=this,p=null,o=q.c
o.toString
x=E.atp(o)
o=q.c.gai()
o.toString
w=y.x
w.a(o)
v=q.c
v.toString
q.a.toString
v=A.co(v,!1).d
v===$&&A.b()
v=v.ga_().c.gai()
v.toString
w.a(v)
q.a.toString
u=A.bA("offset")
switch(0){case 0:q.a.toString
u.b=C.h
break}w=u.aA()
w=A.d1(o.cR(0,v),w)
t=o.gB(0).Fp(0,C.h).a7(0,u.aA())
t=A.tk(w,A.d1(o.cR(0,v),t))
v=v.gB(0)
s=H.co5(t,new A.a_(0,0,0+v.a,0+v.b))
v=q.a
v.toString
t=q.c
t.toString
r=v.bwZ(t)
if(J.jm(r)){q.a.toString
o=q.c
o.toString
E.cv3(C.f,x.a,p,o,x.d,p,r,x.c,p,s,p,x.e,x.b,x.f,!1,q.$ti.h("1?")).aJ(0,new B.bnI(q),y.H)}},
A(d){var x,w,v,u,t=this,s=null,r=A.MI(d),q=E.atp(d)
t.a.toString
E.atp(d)
x=t.a
x=x.ay
w=q.as
if(w==null)w=r.a
v=q.Q
if(v==null)v=r.f
u=A.cu(d,C.a2,y.y)
u.toString
u=u.gcz()
t.a.toString
return F.cU(v,s,s,!0,s,x,w,s,t.gaHU(),C.aD,s,s,s,u)}}
B.xw.prototype={
M(){return new B.aHk(A.a([],y.o))}}
B.aHk.prototype={
W(){this.an()
this.bu()},
m(){this.aj()},
b2(){this.cI()
this.Jh()},
Jh(){var x=0,w=A.l(y.H),v=this,u
var $async$Jh=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Gp(u,y.X)
x=(u==null?null:u.gqO())===!0&&!v.e?2:3
break
case 2:x=$.dR().gdw().d!=null&&J.jm(v.d)&&!J.fQ(v.d).f?4:5
break
case 4:x=6
return A.c(B.aje(J.fQ(v.d).d),$async$Jh)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$Jh,w)},
bge(d){K.kQ(d,"newsForm",y.X).aJ(0,new B.bU7(this,d),y.P)},
Xr(){var x=0,w=A.l(y.H),v=this,u
var $async$Xr=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(A.VJ(),$async$Xr)
case 2:v.E(new u.bUd(v,e))
return A.j(null,w)}})
return A.k($async$Xr,w)},
bu(){var x=0,w=A.l(y.H),v=this
var $async$bu=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.Xr(),$async$bu)
case 2:x=3
return A.c(A.t7("newsOffline",v.d),$async$bu)
case 3:v.Jh()
return A.j(null,w)}})
return A.k($async$bu,w)},
A(d){var x,w,v=null,u=A.I(d).ax.a===C.x?$.kE():$.DW(),t=G.br(D.b1x,v)
t=M.jP(v,!0,v,v,v,v,v,V.bnC(),v,t)
x=L.mb(!0,v,new B.bUb(this),J.b0(this.d),v,v,v,!1,C.H,!1)
w=A.on()
return F.fM(t,u,new A.cH(C.aN,v,v,new A.dj(new A.aa(0,820,0,1/0),x,v),v),v,v,A.h7(A.ckI(Q.m8,!1,new B.bUc(this,d)),w),v)}}
B.rB.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["~()","Q<~>(rB)","x<th<rB>>(N)"])
B.bnI.prototype={
$1(d){var x=this.a
if(x.c==null)return null
if(d==null){x.a.toString
return null}x.a.f.$1(d)},
$S(){return this.a.$ti.h("aA(1?)")}}
B.bU7.prototype={
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
s=B.ajd(v.b,p,u,q,t,s,r)
x=4
return A.c(y._.b(s)?s:A.cB(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.c(v.a.bu(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:66}
B.bUd.prototype={
$0(){this.a.d=this.b},
$S:0}
B.bUb.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.t(p.d,e),n=e>0?J.t(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bH(x)===A.bH(w)&&A.bR(x)===A.bR(w)&&A.d5(x)===A.d5(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(O.ok)
if(!u||!v){u=d.af(y.g).r.a
u===$&&A.b()
u=A.jT("EEEE d.M.y",u.gfA(0))
t=o.a
t.toString
t=u.dW(t)
if(o.f){u=p.c
u.toString
u=A.bm(q,q,A.I(u).db,q,q,q,q,q,q,q,q,q,q,q,C.ar,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.bm(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.ar,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aD(Y.h_,A.a6(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.f,q,q,q,q,q,q,D.ahu,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.bm(q,q,A.I(t).db,q,q,q,q,q,q,q,q,q,q,q,C.ar,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.bm(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.ar,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.af(P.m_,A.a6(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.dS(10)
u=A.I(d)
s=o.b
s.toString
r=$.dR().gdw().d
w.push(new A.af(D.ahn,A.aD(q,A.aZ(A.a([new A.af(X.cd,new H.n0(s,18,!0,q),q),A.h7(new A.af(C.aD,A.b7(A.a([F.c1(D.ajX,A.I(d).ch,q,16),R.a22,A.a6(C.c.k(o.e),q,q,q,q,q,q,q,A.bm(q,q,A.I(d).ch,q,q,q,q,q,q,q,q,q,q,q,C.ar,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),N.j1],x),C.i,C.dr,C.k,q),q),r!=null)],x),C.i,C.j,C.k,q,C.v),C.f,q,q,new A.bE(u.ax.k2,q,q,t,q,q,q,C.S),q,q,q,q,q,q,q),q))
w.push(A.h7(new B.Os(new B.bU9(),new B.bUa(p,o,d),D.al0,q,y.I),A.on()))
return A.aZ(w,C.cc,C.j,C.k,q,C.v)},
$S:856}
B.bUa.prototype={
$1(d){return this.aDl(d)},
aDl(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.FL?2:4
break
case 2:x=5
return A.c(B.EO(t),$async$$1)
case 5:A.bZ(s,A.D("Message has been removed.",null),C.ag)
x=3
break
case 4:u=S.MD(A.C(["content",t.b],y.N,y.z))
x=6
return A.c(F.fN(s,!1).f.kt(u,y.X).aJ(0,new B.bU8(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.c(v.a.bu(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+1}
B.bU8.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bn(d)
x=4
return A.c(B.b_I(u),$async$$1)
case 4:A.bZ(v.b,A.D("Message has been changed.",null),C.ag)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:66}
B.bU9.prototype={
$1(d){var x=y.B
return A.a([E.ccS(G.br(T.Cw,null),!0,48,D.af4,x),E.ccS(G.br(D.b1J,null),!0,48,D.FL,x)],y.h)},
$S:z+2}
B.bUc.prototype={
$0(){return this.a.bge(this.b)},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.Ot.prototype,"gaHU","aHV",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.F,[B.Os,B.xw])
x(A.K,[B.Ot,B.aHk])
x(A.bJ,[B.bnI,B.bU7,B.bUa,B.bU8,B.bU9])
x(A.ci,[B.bUd,B.bUc])
w(B.bUb,A.d8)
w(B.rB,A.e3)})()
A.bx(b.typeUniverse,JSON.parse('{"Os":{"F":[],"d":[]},"Ot":{"K":["Os<1>"]},"xw":{"F":[],"d":[]},"aHk":{"K":["xw"]}}'))
var y=(function rtii(){var x=A.y
return{B:x("rB"),_:x("Q<@>"),t:x("p<a7<f,@>>"),o:x("p<Bl>"),h:x("p<th<rB>>"),p:x("p<d>"),a:x("a7<f,@>"),y:x("aG"),P:x("aA"),K:x("z"),I:x("Os<rB>"),x:x("R"),N:x("f"),g:x("rb"),z:x("@"),X:x("z?"),H:x("~")}})();(function constants(){D.FL=new B.rB(0,"delete")
D.af4=new B.rB(1,"edit")
D.ahn=new A.aq(12,6,12,6)
D.ahu=new A.aq(16,8,16,0)
D.ajX=new A.aQ(58652,"MaterialIcons",null,!1)
D.al0=new A.el(W.ajL,null,null,null,null)
D.b1x=new A.c5("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b1J=new A.c5("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_288",e:"endPart",h:b})})($__dart_deferred_initializers__,"9AXX5eh/I1lKJkKRuTUFxhGB0EM=");