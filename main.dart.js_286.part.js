((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_286",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,M,N,H,O,I,P,E,Q,R,S,T,U,V,W,X,B={Om:function Om(d,e,f,g,h){var _=this
_.c=d
_.f=e
_.ay=f
_.a=g
_.$ti=h},On:function On(d){this.c=this.a=null
this.$ti=d},bnA:function bnA(d){this.a=d},
cIO(d,e){return new B.xw(e,d)},
xw:function xw(d,e){this.c=d
this.a=e},
aHa:function aHa(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
bTV:function bTV(d,e){this.a=d
this.b=e},
bU0:function bU0(d,e){this.a=d
this.b=e},
bU1:function bU1(d,e){this.a=d
this.b=e},
bTZ:function bTZ(d){this.a=d},
bTY:function bTY(d,e,f){this.a=d
this.b=e
this.c=f},
bTW:function bTW(d,e){this.a=d
this.b=e},
bTX:function bTX(){},
bU_:function bU_(d,e){this.a=d
this.b=e},
rB:function rB(d,e){this.a=d
this.b=e},
cIN(d){return A.cmE(d)},
EL(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n
var $async$EL=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:p=$.zc()
o=p.bU("news").fZ(0,"id")
n=d.a
n.toString
o=A.pt(o.vl(o.vG("created_at","lt."+n.k(0))),o.$ti.c)
n=d.d
v=o.vG("id","neq."+n)
o=A.pt(o.vl(v),o.$ti.c)
u=$.dE
u.toString
x=2
return A.c(o.ci("occasion",u).azf(0,"created_at").ayd(1).H0(),$async$EL)
case 2:t=f
x=t!=null?3:5
break
case 3:x=6
return A.c(p.bU("user_news").fZ(0,"user").ci("news_id",n),$async$EL)
case 6:s=f
r=A.a([],y.t)
for(p=J.al(s),o=J.a1(t),u=y.N,q=y.z;p.q();)r.push(A.y(["user",J.t(p.gK(p),"user"),"news_id",o.i(t,"id")],u,q))
p=$.zc()
x=7
return A.c(p.bU("user_news").Zv(r).hQ(0),$async$EL)
case 7:x=4
break
case 5:x=8
return A.c(p.bU("user_news").kg(0).ci("news_id",n),$async$EL)
case 8:case 4:x=9
return A.c(p.bU("news").kg(0).ci("id",n),$async$EL)
case 9:return A.j(null,w)}})
return A.k($async$EL,w)},
b_A(d){var x=0,w=A.l(y.H),v
var $async$b_A=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.c($.zc().bU("news").ej(0,A.y(["message",d.b],v,v)).ci("id",d.d),$async$b_A)
case 2:return A.j(null,w)}})
return A.k($async$b_A,w)},
aj2(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$aj2=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.zc().bU("news")
s=$.dE
s.toString
x=5
return A.c(t.jx(0,A.y(["occasion",s,"message",u,"created_by",$.dQ().gdw().c.a],y.N,y.K)).hQ(0),$async$aj2)
case 5:case 4:x=i?6:7
break
case 6:for(t=I.aQg(U.c8G(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.O)(t),++q){p=new A.cP("")
new I.bHX(p).b7(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.dq(o).length===0)continue
r+=o}r=C.e.dq(r)
t=$.zc().bU("log_notifications")
s=$.dE
s.toString
x=8
return A.c(t.jx(0,A.y(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$aj2)
case 8:A.c_(d,A.G("Message has been sent.",null),C.af)
x=1
break
case 7:if(h)A.c_(d,A.G("Message has been created.",null),C.af)
case 1:return A.j(v,w)}})
return A.k($async$aj2,w)},
aj3(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$aj3=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dQ()
if(s.gdw().d==null)A.Z(A.d7("User must be logged in."))
v=$.zc()
u=v.bU("user_news").kg(0).ci("user",s.gdw().c.a)
t=$.dE
t.toString
x=2
return A.c(u.ci("occasion",t),$async$aj3)
case 2:x=3
return A.c(v.bU("user_news").jx(0,A.y(["user",s.gdw().c.a,"news_id",d,"occasion",$.dE],y.N,y.X)).hQ(0),$async$aj3)
case 3:return A.j(null,w)}})
return A.k($async$aj3,w)}},D,Y,Z,G,F
J=c[1]
A=c[0]
C=c[2]
K=c[160]
L=c[145]
M=c[161]
N=c[199]
H=c[118]
O=c[205]
I=c[123]
P=c[256]
E=c[86]
Q=c[281]
R=c[198]
S=c[108]
T=c[222]
U=c[82]
V=c[119]
W=c[93]
X=c[271]
B=a.updateHolder(c[19],B)
D=c[294]
Y=c[181]
Z=c[213]
G=c[164]
F=c[171]
B.Om.prototype={
M(){return new B.On(this.$ti.h("On<1>"))},
bww(d){return this.c.$1(d)}}
B.On.prototype={
aHG(){var x,w,v,u,t,s,r,q=this,p=null,o=q.c
o.toString
x=E.atf(o)
o=q.c.gah()
o.toString
w=y.q
w.a(o)
v=q.c
v.toString
q.a.toString
v=A.cn(v,!1).d
v===$&&A.b()
v=v.gY().c.gah()
v.toString
w.a(v)
q.a.toString
u=A.bC("offset")
switch(0){case 0:q.a.toString
u.b=C.h
break}w=u.aD()
w=A.d2(o.cP(0,v),w)
t=o.gB(0).Fj(0,C.h).a6(0,u.aD())
t=A.tk(w,A.d2(o.cP(0,v),t))
v=v.gB(0)
s=H.cnS(t,new A.a_(0,0,0+v.a,0+v.b))
v=q.a
v.toString
t=q.c
t.toString
r=v.bww(t)
if(J.jk(r)){q.a.toString
o=q.c
o.toString
E.cuN(C.f,x.a,p,o,x.d,p,r,x.c,p,s,p,x.e,x.b,x.f,!1,q.$ti.h("1?")).aJ(0,new B.bnA(q),y.H)}},
A(d){var x,w,v,u,t=this,s=null,r=A.MC(d),q=E.atf(d)
t.a.toString
E.atf(d)
x=t.a
x=x.ay
w=q.as
if(w==null)w=r.a
v=q.Q
if(v==null)v=r.f
u=A.cD(d,C.a2,y.y)
u.toString
u=u.gcA()
t.a.toString
return F.cU(v,s,s,!0,s,x,w,s,t.gaHF(),C.aC,s,s,s,u)}}
B.xw.prototype={
M(){return new B.aHa(A.a([],y.o))}}
B.aHa.prototype={
W(){this.ao()
this.bt()},
m(){this.ak()},
b1(){this.cJ()
this.Jb()},
Jb(){var x=0,w=A.l(y.H),v=this,u
var $async$Jb=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Gm(u,y.X)
x=(u==null?null:u.gqM())===!0&&!v.e?2:3
break
case 2:x=$.dQ().gdw().d!=null&&J.jk(v.d)&&!J.fO(v.d).f?4:5
break
case 4:x=6
return A.c(B.aj3(J.fO(v.d).d),$async$Jb)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$Jb,w)},
bfO(d){K.kM(d,"newsForm",y.X).aJ(0,new B.bTV(this,d),y.P)},
Xf(){var x=0,w=A.l(y.H),v=this,u
var $async$Xf=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(A.VA(),$async$Xf)
case 2:v.E(new u.bU0(v,e))
return A.j(null,w)}})
return A.k($async$Xf,w)},
n7(){var x=0,w=A.l(y.H),v=this,u
var $async$n7=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(V.n6("newsOffline",B.cIM(),y.x),$async$n7)
case 2:v.E(new u.bU1(v,e))
return A.j(null,w)}})
return A.k($async$n7,w)},
bt(){var x=0,w=A.l(y.H),v=this
var $async$bt=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.n7(),$async$bt)
case 2:x=3
return A.c(v.Xf(),$async$bt)
case 3:x=4
return A.c(A.t7("newsOffline",v.d),$async$bt)
case 4:v.Jb()
return A.j(null,w)}})
return A.k($async$bt,w)},
A(d){var x,w,v=null,u=A.I(d).ax.a===C.x?$.kA():$.DT(),t=G.br(D.b1e,v)
t=M.jL(v,!0,v,v,v,v,v,W.bnu(),v,t)
x=L.m9(!0,v,new B.bTZ(this),J.b0(this.d),v,v,v,!1,C.H,!1)
w=A.om()
return F.fK(t,u,new A.cX(C.aN,v,v,new A.dj(new A.aa(0,820,0,1/0),x,v),v),v,v,A.h4(A.cku(Q.m8,!1,new B.bU_(this,d)),w),v)}}
B.rB.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["~()","Q<~>(rB)","x<th<rB>>(N)","t5(a7<f,@>)"])
B.bnA.prototype={
$1(d){var x=this.a
if(x.c==null)return null
if(d==null){x.a.toString
return null}x.a.f.$1(d)},
$S(){return this.a.$ti.h("aA(1?)")}}
B.bTV.prototype={
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
s=B.aj2(v.b,p,u,q,t,s,r)
x=4
return A.c(y._.b(s)?s:A.cv(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.c(v.a.bt(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:72}
B.bU0.prototype={
$0(){this.a.d=this.b},
$S:0}
B.bU1.prototype={
$0(){this.a.d=this.b},
$S:0}
B.bTZ.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.t(p.d,e),n=e>0?J.t(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bz(x)===A.bz(w)&&A.bI(x)===A.bI(w)&&A.cE(x)===A.cE(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(O.oj)
if(!u||!v){u=d.al(y.g).r.a
u===$&&A.b()
u=A.jP("EEEE d.M.y",u.gfz(0))
t=o.a
t.toString
t=u.ew(t)
if(o.f){u=p.c
u.toString
u=A.bd(q,q,A.I(u).db,q,q,q,q,q,q,q,q,q,q,q,C.ar,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.bd(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.ar,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aE(Z.fY,A.a6(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.f,q,q,q,q,q,q,D.ahb,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.bd(q,q,A.I(t).db,q,q,q,q,q,q,q,q,q,q,q,C.ar,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.bd(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.ar,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.ag(P.m_,A.a6(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.dR(10)
u=A.I(d)
s=o.b
s.toString
r=$.dQ().gdw().d
w.push(new A.ag(D.ah4,A.aE(q,A.aZ(A.a([new A.ag(Y.ca,new H.n_(s,18,!0,q),q),A.h4(new A.ag(C.aC,A.ba(A.a([F.c1(D.ajE,A.I(d).ch,q,16),R.a1S,A.a6(C.c.k(o.e),q,q,q,q,q,q,q,A.bd(q,q,A.I(d).ch,q,q,q,q,q,q,q,q,q,q,q,C.ar,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),N.j0],x),C.i,C.dK,C.k,q),q),r!=null)],x),C.i,C.j,C.k,q,C.u),C.f,q,q,new A.bF(u.ax.k2,q,q,t,q,q,q,C.S),q,q,q,q,q,q,q),q))
w.push(A.h4(new B.Om(new B.bTX(),new B.bTY(p,o,d),D.akI,q,y.I),A.om()))
return A.aZ(w,C.c9,C.j,C.k,q,C.u)},
$S:860}
B.bTY.prototype={
$1(d){return this.aD6(d)},
aD6(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.FC?2:4
break
case 2:x=5
return A.c(B.EL(t),$async$$1)
case 5:A.c_(s,A.G("Message has been removed.",null),C.af)
x=3
break
case 4:u=S.Mx(A.y(["content",t.b],y.N,y.z))
x=6
return A.c(F.fL(s,!1).f.kr(u,y.X).aJ(0,new B.bTW(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.c(v.a.bt(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+1}
B.bTW.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bn(d)
x=4
return A.c(B.b_A(u),$async$$1)
case 4:A.c_(v.b,A.G("Message has been changed.",null),C.af)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:72}
B.bTX.prototype={
$1(d){var x=y.B
return A.a([E.ccC(G.br(T.Ct,null),!0,48,D.aeT,x),E.ccC(G.br(D.b1q,null),!0,48,D.FC,x)],y.h)},
$S:z+2}
B.bU_.prototype={
$0(){return this.a.bfO(this.b)},
$S:0};(function installTearOffs(){var x=a._instance_0u,w=a._static_1
x(B.On.prototype,"gaHF","aHG",0)
w(B,"cIM","cIN",3)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.F,[B.Om,B.xw])
x(A.L,[B.On,B.aHa])
x(A.bM,[B.bnA,B.bTV,B.bTY,B.bTW,B.bTX])
x(A.cl,[B.bU0,B.bU1,B.bU_])
w(B.bTZ,A.dd)
w(B.rB,A.eb)})()
A.bD(b.typeUniverse,JSON.parse('{"Om":{"F":[],"d":[]},"On":{"L":["Om<1>"]},"xw":{"F":[],"d":[]},"aHa":{"L":["xw"]}}'))
var y=(function rtii(){var x=A.z
return{B:x("rB"),_:x("Q<@>"),t:x("p<a7<f,@>>"),o:x("p<t5>"),h:x("p<th<rB>>"),p:x("p<d>"),a:x("a7<f,@>"),y:x("aI"),x:x("t5"),P:x("aA"),K:x("A"),I:x("Om<rB>"),q:x("R"),N:x("f"),g:x("pQ"),z:x("@"),X:x("A?"),H:x("~")}})();(function constants(){D.FC=new B.rB(0,"delete")
D.aeT=new B.rB(1,"edit")
D.ah4=new A.as(12,6,12,6)
D.ahb=new A.as(16,8,16,0)
D.ajE=new A.aQ(58652,"MaterialIcons",null,!1)
D.akI=new A.em(X.ajs,null,null,null,null)
D.b1e=new A.c5("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b1q=new A.c5("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_286",e:"endPart",h:b})})($__dart_deferred_initializers__,"BAo1VHV3mFfEfjcdlh/7XbLbqTw=");