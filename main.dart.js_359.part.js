((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_359",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,O,P,Q,R,S,F,T,U,V,W,X,Y,Z,B={
cWC(d,e){return new B.yJ(e,d)},
yJ:function yJ(d,e){this.c=d
this.a=e},
aLq:function aLq(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
c2F:function c2F(d,e){this.a=d
this.b=e},
c2L:function c2L(d,e){this.a=d
this.b=e},
c2M:function c2M(d,e){this.a=d
this.b=e},
c2J:function c2J(d){this.a=d},
c2I:function c2I(d,e,f){this.a=d
this.b=e
this.c=f},
c2G:function c2G(d,e){this.a=d
this.b=e},
c2H:function c2H(){},
c2K:function c2K(d,e){this.a=d
this.b=e},
vy:function vy(d,e){this.a=d
this.b=e},
cWB(d){return A.czF(d)},
G9(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$G9=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:n=$.Am()
m=n.bA("news").hh(0,"id")
l=d.a
l.toString
v=d.d
m=A.p0(m.us(m.wy("created_at","lt."+l.j(0))),m.$ti.c).aCL("id",v)
l=$.dU
l.toString
x=2
return A.c(m.cl("occasion",l).bFP(0,"created_at").aC4(1).Pm(),$async$G9)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.c(n.bA("user_news").hh(0,"user").cl("news_id",v),$async$G9)
case 6:t=f
s=A.a([],y.t)
for(n=J.aL(t),m=J.a2(u),l=y.N,r=y.z;n.q();){q=J.v(n.gL(n),"user")
p=m.i(u,"id")
o=$.dU
o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],l,r))}n=$.Am()
x=7
return A.c(n.bA("user_news").ae9(s),$async$G9)
case 7:x=4
break
case 5:x=8
return A.c(n.bA("user_news").jG(0).cl("news_id",v),$async$G9)
case 8:case 4:x=9
return A.c(n.bA("news").jG(0).cl("id",v),$async$G9)
case 9:return A.i(null,w)}})
return A.j($async$G9,w)},
b4m(d){var x=0,w=A.k(y.H),v
var $async$b4m=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.c($.Am().bA("news").eK(0,A.z(["message",d.b],v,v)).cl("id",d.d),$async$b4m)
case 2:return A.i(null,w)}})
return A.j($async$b4m,w)},
amw(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$amw=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Am().bA("news")
s=$.dU
s.toString
x=5
return A.c(t.jP(0,A.z(["occasion",s,"message",u,"created_by",$.dY().gdE().c.a],y.N,y.K)).im(0),$async$amw)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.LS(X.agS(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.Q)(t),++q){p=new A.d9("")
new G.bQ_(p).bi(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.cs(o).length===0)continue
r+=o}r=C.e.cs(r)
t=$.Am().bA("log_notifications")
s=$.dU
s.toString
x=8
return A.c(t.jP(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$amw)
case 8:A.bG(d,A.t("Message has been sent.",null),C.a4)
x=1
break
case 7:if(h)A.bG(d,A.t("Message has been created.",null),C.a4)
case 1:return A.i(v,w)}})
return A.j($async$amw,w)},
amx(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$amx=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.dY()
if(s.gdE().d==null)A.a6(A.cC("User must be logged in."))
v=$.Am()
u=v.bA("user_news").jG(0).cl("user",s.gdE().c.a)
t=$.dU
t.toString
x=2
return A.c(u.cl("occasion",t),$async$amx)
case 2:x=3
return A.c(v.bA("user_news").jP(0,A.z(["user",s.gdE().c.a,"news_id",d,"occasion",$.dU],y.N,y.X)).im(0),$async$amx)
case 3:return A.i(null,w)}})
return A.j($async$amx,w)}},D,A_,E,A0,A1,G
J=c[1]
A=c[0]
C=c[2]
H=c[189]
I=c[172]
K=c[284]
L=c[201]
M=c[210]
N=c[190]
O=c[211]
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
B.yJ.prototype={
M(){return new B.aLq(A.a([],y.o))}}
B.aLq.prototype={
Y(){this.aj()
this.b8()},
l(){this.ag()},
aX(){this.cn()
this.KM()},
KM(){var x=0,w=A.k(y.H),v=this,u
var $async$KM=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Cs(u,null,y.X)
x=(u==null?null:u.grr())===!0&&!v.e?2:3
break
case 2:x=$.dY().gdE().d!=null&&J.ja(v.d)&&!J.hm(v.d).f?4:5
break
case 4:x=6
return A.c(B.amx(J.hm(v.d).d),$async$KM)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$KM,w)},
bl6(d){H.k8(d,"newsForm",y.X).aM(0,new B.c2F(this,d),y.P)},
Zf(){var x=0,w=A.k(y.H),v=this,u
var $async$Zf=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(A.Ya(),$async$Zf)
case 2:v.B(new u.c2L(v,e))
return A.i(null,w)}})
return A.j($async$Zf,w)},
nK(){var x=0,w=A.k(y.H),v=this,u
var $async$nK=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(Y.nL("newsOffline",B.cWA(),y.x),$async$nK)
case 2:v.B(new u.c2M(v,e))
return A.i(null,w)}})
return A.j($async$nK,w)},
b8(){var x=0,w=A.k(y.H),v=this
var $async$b8=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.nK(),$async$b8)
case 2:x=3
return A.c(v.Zf(),$async$b8)
case 3:x=4
return A.c(A.ui("newsOffline",v.d),$async$b8)
case 4:v.KM()
return A.i(null,w)}})
return A.j($async$b8,w)},
A(d){var x,w,v=null,u=A.C(d).ax.a===C.u?$.iP():$.qJ(),t=E.bc(D.b4E,v)
t=N.ic(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,Z.bty(),v,!0,v,v,v,v,v,t,v,v,v,1,v)
x=I.ll(!0,v,new B.c2J(this),J.bs(this.d),v,v,v,!1,C.F,!1)
w=A.j2()
return L.f2(t,u,new A.cu(C.aD,v,v,new A.cN(new A.aa(0,820,0,1/0),x,v),v),v,v,A.iu(A.ZG(v,S.fi,v,v,!1,new B.c2K(this,d),v),w),v,v)}}
B.vy.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["R<~>(vy)","A<m2<vy>>(M)","ug(af<e,@>)"])
B.c2F.prototype={
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
s=B.amw(v.b,p,u,q,t,s,r)
x=4
return A.c(y._.b(s)?s:A.cA(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.c(v.a.b8(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:92}
B.c2L.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c2M.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c2J.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.v(p.d,e),n=e>0?J.v(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bD(x)===A.bD(w)&&A.bN(x)===A.bN(w)&&A.cM(x)===A.cM(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(M.fd)
if(!u||!v){u=d.ad(y.g).r.a
u===$&&A.b()
u=A.ih("EEEE d.M.y",u.gfj(0))
t=o.a
t.toString
t=u.dV(t)
if(o.f){u=p.c
u.toString
u=A.aB(q,q,A.C(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aB(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aE(A_.hB,A.W(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.k,q,q,q,q,q,q,D.ajj,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.aB(q,q,A.C(t).cy,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.aB(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a3(K.h1,A.W(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.cl(10)
u=A.C(d)
s=o.b
s.toString
r=$.dY().gdE().d
w.push(new A.a3(V.I1,A.aE(q,A.am(A.a([new A.a3(O.aZ,new A1.he(s,18,!0,q,q),q),A.iu(new A.a3(C.av,A.aw(A.a([A.br(D.alX,A.C(d).ay,q,16),U.a3W,A.W(C.c.j(o.e),q,q,q,q,q,q,q,A.aB(q,q,A.C(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),P.jN],x),C.i,C.cB,C.h,0,q),q),r!=null)],x),C.i,C.f,C.h,q,C.l),C.k,q,q,new A.bv(u.ax.k2,q,q,t,q,q,q,C.R),q,q,q,q,q,q,q),q))
t=A.j2()
w.push(A.iu(R.J_(q,D.amS,new B.c2H(),new B.c2I(p,o,d),y.B),t))
return A.am(w,C.bj,C.f,C.h,q,C.l)},
$S:982}
B.c2I.prototype={
$1(d){return this.aH4(d)},
aH4(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.Hd?2:4
break
case 2:x=5
return A.c(B.G9(t),$async$$1)
case 5:A.bG(s,A.t("Message has been removed.",null),C.a4)
x=3
break
case 4:u=Q.pV(A.z(["content",t.b],y.N,y.z),null)
x=6
return A.c(A0.eX(s,!1).f.ih(u,y.X).aM(0,new B.c2G(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.c(v.a.b8(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.c2G.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bm(d)
x=4
return A.c(B.b4m(u),$async$$1)
case 4:A.bG(v.b,A.t("Message has been changed.",null),C.a4)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:92}
B.c2H.prototype={
$1(d){var x=y.B
return A.a([F.us(E.bc(W.DO,null),!0,48,D.agW,x),F.us(E.bc(D.b4f,null),!0,48,D.Hd,x)],y.h)},
$S:z+1}
B.c2K.prototype={
$0(){return this.a.bl6(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"cWA","cWB",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.yJ,A.F)
x(B.aLq,A.K)
w(A.bB,[B.c2F,B.c2I,B.c2G,B.c2H])
w(A.ci,[B.c2L,B.c2M,B.c2K])
x(B.c2J,A.dn)
x(B.vy,A.e4)})()
A.bl(b.typeUniverse,JSON.parse('{"yJ":{"F":[],"d":[]},"aLq":{"K":["yJ"]}}'))
var y=(function rtii(){var x=A.y
return{B:x("vy"),_:x("R<@>"),t:x("q<af<e,@>>"),o:x("q<ug>"),h:x("q<m2<vy>>"),p:x("q<d>"),a:x("af<e,@>"),x:x("ug"),P:x("aA"),K:x("E"),N:x("e"),g:x("l5"),z:x("@"),X:x("E?"),H:x("~")}})();(function constants(){D.Hd=new B.vy(0,"delete")
D.agW=new B.vy(1,"edit")
D.ajj=new A.ao(16,8,16,0)
D.alX=new A.aH(58652,"MaterialIcons",null,!1)
D.amS=new A.dr(T.J8,null,null,null,null)
D.b4f=new A.c0("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4E=new A.c0("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_359",e:"endPart",h:b})})($__dart_deferred_initializers__,"BRW6uuEWPQXHj/3ygDBW7lPFLas=");