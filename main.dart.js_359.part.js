((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_359",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,O,P,Q,R,S,F,T,U,V,W,X,Y,Z,B={
cWy(d,e){return new B.yI(e,d)},
yI:function yI(d,e){this.c=d
this.a=e},
aLn:function aLn(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
c2I:function c2I(d,e){this.a=d
this.b=e},
c2O:function c2O(d,e){this.a=d
this.b=e},
c2P:function c2P(d,e){this.a=d
this.b=e},
c2M:function c2M(d){this.a=d},
c2L:function c2L(d,e,f){this.a=d
this.b=e
this.c=f},
c2J:function c2J(d,e){this.a=d
this.b=e},
c2K:function c2K(){},
c2N:function c2N(d,e){this.a=d
this.b=e},
vw:function vw(d,e){this.a=d
this.b=e},
cWx(d){return A.czz(d)},
G8(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o
var $async$G8=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:q=$.Al()
p=q.bA("news").hh(0,"id")
o=d.a
o.toString
v=d.d
p=A.qg(p.w7(p.wy("created_at","lt."+o.j(0))),p.$ti.c).aCH("id",v)
o=$.e2
o.toString
x=2
return A.c(p.cg("occasion",o).bFN(0,"created_at").aC0(1).Pl(),$async$G8)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.c(q.bA("user_news").hh(0,"user").cg("news_id",v),$async$G8)
case 6:t=f
s=A.a([],y.t)
for(q=J.aL(t),p=J.a2(u),o=y.N,r=y.z;q.q();)s.push(A.z(["user",J.v(q.gL(q),"user"),"news_id",p.i(u,"id")],o,r))
q=$.Al()
x=7
return A.c(q.bA("user_news").ae8(s).ib(0),$async$G8)
case 7:x=4
break
case 5:x=8
return A.c(q.bA("user_news").jG(0).cg("news_id",v),$async$G8)
case 8:case 4:x=9
return A.c(q.bA("news").jG(0).cg("id",v),$async$G8)
case 9:return A.i(null,w)}})
return A.j($async$G8,w)},
b4j(d){var x=0,w=A.k(y.H),v
var $async$b4j=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.c($.Al().bA("news").eK(0,A.z(["message",d.b],v,v)).cg("id",d.d),$async$b4j)
case 2:return A.i(null,w)}})
return A.j($async$b4j,w)},
amr(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$amr=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Al().bA("news")
s=$.e2
s.toString
x=5
return A.c(t.jP(0,A.z(["occasion",s,"message",u,"created_by",$.dY().gdE().c.a],y.N,y.K)).ib(0),$async$amr)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.LO(X.agO(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.Q)(t),++q){p=new A.d9("")
new G.bQ1(p).bi(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.ck(o).length===0)continue
r+=o}r=C.e.ck(r)
t=$.Al().bA("log_notifications")
s=$.e2
s.toString
x=8
return A.c(t.jP(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$amr)
case 8:A.bG(d,A.u("Message has been sent.",null),C.a4)
x=1
break
case 7:if(h)A.bG(d,A.u("Message has been created.",null),C.a4)
case 1:return A.i(v,w)}})
return A.j($async$amr,w)},
ams(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$ams=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.dY()
if(s.gdE().d==null)A.a6(A.cC("User must be logged in."))
v=$.Al()
u=v.bA("user_news").jG(0).cg("user",s.gdE().c.a)
t=$.e2
t.toString
x=2
return A.c(u.cg("occasion",t),$async$ams)
case 2:x=3
return A.c(v.bA("user_news").jP(0,A.z(["user",s.gdE().c.a,"news_id",d,"occasion",$.e2],y.N,y.X)).ib(0),$async$ams)
case 3:return A.i(null,w)}})
return A.j($async$ams,w)}},D,A_,E,A0,A1,G
J=c[1]
A=c[0]
C=c[2]
H=c[189]
I=c[172]
K=c[284]
L=c[201]
M=c[212]
N=c[190]
O=c[210]
P=c[216]
Q=c[133]
R=c[100]
S=c[343]
F=c[116]
T=c[305]
U=c[215]
V=c[237]
W=c[255]
X=c[91]
Y=c[145]
Z=c[108]
B=a.updateHolder(c[19],B)
D=c[358]
A_=c[245]
E=c[192]
A0=c[198]
A1=c[150]
G=c[158]
B.yI.prototype={
M(){return new B.aLn(A.a([],y.o))}}
B.aLn.prototype={
Y(){this.aj()
this.b8()},
l(){this.ai()},
aX(){this.co()
this.KM()},
KM(){var x=0,w=A.k(y.H),v=this,u
var $async$KM=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Cs(u,null,y.X)
x=(u==null?null:u.grr())===!0&&!v.e?2:3
break
case 2:x=$.dY().gdE().d!=null&&J.j9(v.d)&&!J.hn(v.d).f?4:5
break
case 4:x=6
return A.c(B.ams(J.hn(v.d).d),$async$KM)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$KM,w)},
bl2(d){H.k8(d,"newsForm",y.X).aM(0,new B.c2I(this,d),y.P)},
Zf(){var x=0,w=A.k(y.H),v=this,u
var $async$Zf=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(A.Ya(),$async$Zf)
case 2:v.B(new u.c2O(v,e))
return A.i(null,w)}})
return A.j($async$Zf,w)},
nK(){var x=0,w=A.k(y.H),v=this,u
var $async$nK=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(Y.nL("newsOffline",B.cWw(),y.x),$async$nK)
case 2:v.B(new u.c2P(v,e))
return A.i(null,w)}})
return A.j($async$nK,w)},
b8(){var x=0,w=A.k(y.H),v=this
var $async$b8=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.nK(),$async$b8)
case 2:x=3
return A.c(v.Zf(),$async$b8)
case 3:x=4
return A.c(A.ug("newsOffline",v.d),$async$b8)
case 4:v.KM()
return A.i(null,w)}})
return A.j($async$b8,w)},
A(d){var x,w,v=null,u=A.C(d).ax.a===C.u?$.iP():$.qI(),t=E.bc(D.b4E,v)
t=N.ic(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,Z.btB(),v,!0,v,v,v,v,v,t,v,v,v,1,v)
x=I.ll(!0,v,new B.c2M(this),J.bs(this.d),v,v,v,!1,C.F,!1)
w=A.j1()
return L.f2(t,u,new A.cr(C.aD,v,v,new A.cN(new A.aa(0,820,0,1/0),x,v),v),v,v,A.it(A.ZG(v,S.fg,v,v,!1,new B.c2N(this,d),v),w),v,v)}}
B.vw.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["R<~>(vw)","A<m2<vw>>(M)","ue(af<e,@>)"])
B.c2I.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
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
s=B.amr(v.b,p,u,q,t,s,r)
x=4
return A.c(y._.b(s)?s:A.cA(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.c(v.a.b8(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:97}
B.c2O.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c2P.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c2M.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.v(p.d,e),n=e>0?J.v(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bD(x)===A.bD(w)&&A.bN(x)===A.bN(w)&&A.cM(x)===A.cM(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(M.fc)
if(!u||!v){u=d.ad(y.g).r.a
u===$&&A.b()
u=A.iC("EEEE d.M.y",u.gfj(0))
t=o.a
t.toString
t=u.dZ(t)
if(o.f){u=p.c
u.toString
u=A.aB(q,q,A.C(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aB(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aE(A_.hB,A.W(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.k,q,q,q,q,q,q,D.aji,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.aB(q,q,A.C(t).cy,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.aB(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a4(K.h1,A.W(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.cl(10)
u=A.C(d)
s=o.b
s.toString
r=$.dY().gdE().d
w.push(new A.a4(V.I1,A.aE(q,A.an(A.a([new A.a4(O.aZ,new A1.hf(s,18,!0,q,q),q),A.it(new A.a4(C.av,A.ax(A.a([A.br(D.alW,A.C(d).ay,q,16),U.a3W,A.W(C.c.j(o.e),q,q,q,q,q,q,q,A.aB(q,q,A.C(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),P.jN],x),C.i,C.cB,C.h,0,q),q),r!=null)],x),C.i,C.f,C.h,q,C.m),C.k,q,q,new A.bv(u.ax.k2,q,q,t,q,q,q,C.R),q,q,q,q,q,q,q),q))
t=A.j1()
w.push(A.it(R.IX(q,D.amR,new B.c2K(),new B.c2L(p,o,d),y.B),t))
return A.an(w,C.bj,C.f,C.h,q,C.m)},
$S:982}
B.c2L.prototype={
$1(d){return this.aH1(d)},
aH1(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.Hc?2:4
break
case 2:x=5
return A.c(B.G8(t),$async$$1)
case 5:A.bG(s,A.u("Message has been removed.",null),C.a4)
x=3
break
case 4:u=Q.pT(A.z(["content",t.b],y.N,y.z),null)
x=6
return A.c(A0.eX(s,!1).f.ii(u,y.X).aM(0,new B.c2J(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.c(v.a.b8(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.c2J.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bm(d)
x=4
return A.c(B.b4j(u),$async$$1)
case 4:A.bG(v.b,A.u("Message has been changed.",null),C.a4)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:97}
B.c2K.prototype={
$1(d){var x=y.B
return A.a([F.up(E.bc(W.DN,null),!0,48,D.agV,x),F.up(E.bc(D.b4f,null),!0,48,D.Hc,x)],y.h)},
$S:z+1}
B.c2N.prototype={
$0(){return this.a.bl2(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"cWw","cWx",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.yI,A.F)
x(B.aLn,A.K)
w(A.bB,[B.c2I,B.c2L,B.c2J,B.c2K])
w(A.ci,[B.c2O,B.c2P,B.c2N])
x(B.c2M,A.dp)
x(B.vw,A.e4)})()
A.bl(b.typeUniverse,JSON.parse('{"yI":{"F":[],"d":[]},"aLn":{"K":["yI"]}}'))
var y=(function rtii(){var x=A.y
return{B:x("vw"),_:x("R<@>"),t:x("q<af<e,@>>"),o:x("q<ue>"),h:x("q<m2<vw>>"),p:x("q<d>"),a:x("af<e,@>"),x:x("ue"),P:x("aA"),K:x("E"),N:x("e"),g:x("l5"),z:x("@"),X:x("E?"),H:x("~")}})();(function constants(){D.Hc=new B.vw(0,"delete")
D.agV=new B.vw(1,"edit")
D.aji=new A.ao(16,8,16,0)
D.alW=new A.aH(58652,"MaterialIcons",null,!1)
D.amR=new A.dr(T.J8,null,null,null,null)
D.b4f=new A.c0("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4E=new A.c0("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_359",e:"endPart",h:b})})($__dart_deferred_initializers__,"aef3q7guyRREWU57RO2IT3d46a0=");