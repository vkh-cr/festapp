((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_368",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,O,P,Q,R,S,F,T,U,V,W,X,Y,Z,B={
cXn(d,e){return new B.yD(e,d)},
yD:function yD(d,e){this.c=d
this.a=e},
aLB:function aLB(d){var _=this
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
vv:function vv(d,e){this.a=d
this.b=e},
cXm(d){return A.cAx(d)},
G7(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$G7=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:n=$.Ag()
m=n.bB("news").hg(0,"id")
l=d.a
l.toString
v=d.d
m=A.p1(m.uo(m.wx("created_at","lt."+l.j(0))),m.$ti.c).aCM("id",v)
l=$.dV
l.toString
x=2
return A.c(m.co("occasion",l).bFY(0,"created_at").aC5(1).Pi(),$async$G7)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.c(n.bB("user_news").hg(0,"user").co("news_id",v),$async$G7)
case 6:t=f
s=A.a([],y.t)
for(n=J.aL(t),m=J.a2(u),l=y.N,r=y.z;n.q();){q=J.v(n.gL(n),"user")
p=m.i(u,"id")
o=$.dV
o.toString
s.push(A.y(["user",q,"news_id",p,"occasion",o],l,r))}n=$.Ag()
x=7
return A.c(n.bB("user_news").ae3(s),$async$G7)
case 7:x=4
break
case 5:x=8
return A.c(n.bB("user_news").jI(0).co("news_id",v),$async$G7)
case 8:case 4:x=9
return A.c(n.bB("news").jI(0).co("id",v),$async$G7)
case 9:return A.i(null,w)}})
return A.j($async$G7,w)},
b4v(d){var x=0,w=A.k(y.H),v
var $async$b4v=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.c($.Ag().bB("news").eL(0,A.y(["message",d.b],v,v)).co("id",d.d),$async$b4v)
case 2:return A.i(null,w)}})
return A.j($async$b4v,w)},
amF(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$amF=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Ag().bB("news")
s=$.dV
s.toString
x=5
return A.c(t.jR(0,A.y(["occasion",s,"message",u,"created_by",$.dZ().gdD().c.a],y.N,y.K)).io(0),$async$amF)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.LW(Y.ah2(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.Q)(t),++q){p=new A.d7("")
new G.bPS(p).bj(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.cg(o).length===0)continue
r+=o}r=C.e.cg(r)
t=$.Ag().bB("log_notifications")
s=$.dV
s.toString
x=8
return A.c(t.jR(0,A.y(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$amF)
case 8:A.bH(d,A.r("Message has been sent.",null),C.a5)
x=1
break
case 7:if(h)A.bH(d,A.r("Message has been created.",null),C.a5)
case 1:return A.i(v,w)}})
return A.j($async$amF,w)},
amG(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$amG=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.dZ()
if(s.gdD().d==null)A.a6(A.cT("User must be logged in."))
v=$.Ag()
u=v.bB("user_news").jI(0).co("user",s.gdD().c.a)
t=$.dV
t.toString
x=2
return A.c(u.co("occasion",t),$async$amG)
case 2:x=3
return A.c(v.bB("user_news").jR(0,A.y(["user",s.gdD().c.a,"news_id",d,"occasion",$.dV],y.N,y.X)).io(0),$async$amG)
case 3:return A.i(null,w)}})
return A.j($async$amG,w)}},D,A_,E,A0,A1,G
J=c[1]
A=c[0]
C=c[2]
H=c[189]
I=c[172]
K=c[284]
L=c[201]
M=c[212]
N=c[190]
O=c[204]
P=c[216]
Q=c[133]
R=c[98]
S=c[345]
F=c[116]
T=c[306]
U=c[147]
V=c[215]
W=c[237]
X=c[255]
Y=c[90]
Z=c[106]
B=a.updateHolder(c[19],B)
D=c[360]
A_=c[245]
E=c[192]
A0=c[198]
A1=c[150]
G=c[158]
B.yD.prototype={
M(){return new B.aLB(A.a([],y.o))}}
B.aLB.prototype={
X(){this.al()
this.ba()},
l(){this.ag()},
aT(){this.c6()
this.KK()},
KK(){var x=0,w=A.k(y.H),v=this,u
var $async$KK=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Co(u,null,y.X)
x=(u==null?null:u.grq())===!0&&!v.e?2:3
break
case 2:x=$.dZ().gdD().d!=null&&J.jb(v.d)&&!J.hr(v.d).f?4:5
break
case 4:x=6
return A.c(B.amG(J.hr(v.d).d),$async$KK)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$KK,w)},
bkI(d){H.k8(d,"newsForm",y.X).aX(0,new B.c2I(this,d),y.P)},
Z9(){var x=0,w=A.k(y.H),v=this,u
var $async$Z9=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(A.Yi(),$async$Z9)
case 2:v.B(new u.c2O(v,e))
return A.i(null,w)}})
return A.j($async$Z9,w)},
nL(){var x=0,w=A.k(y.H),v=this,u
var $async$nL=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(U.mR("newsOffline",B.cXl(),y.x),$async$nL)
case 2:v.B(new u.c2P(v,e))
return A.i(null,w)}})
return A.j($async$nL,w)},
ba(){var x=0,w=A.k(y.H),v=this
var $async$ba=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.nL(),$async$ba)
case 2:x=3
return A.c(v.Z9(),$async$ba)
case 3:x=4
return A.c(A.rs("newsOffline",v.d),$async$ba)
case 4:v.KK()
return A.i(null,w)}})
return A.j($async$ba,w)},
A(d){var x,w,v=null,u=A.C(d).ax.a===C.t?$.iP():$.qK(),t=E.bc(D.b3V,v)
t=N.ic(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,Z.brE(),v,!0,v,v,v,v,v,t,v,v,v,1,v)
x=I.lo(!0,v,new B.c2M(this),J.bz(this.d),v,v,v,!1,C.G,!1)
w=A.j0()
return L.f2(t,u,new A.cx(C.aF,v,v,new A.cP(new A.a9(0,820,0,1/0),x,v),v),v,v,A.iw(A.ZL(v,S.fj,v,v,!1,new B.c2N(this,d),v),w),v,v)}}
B.vv.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["U<~>(vv)","A<m1<vv>>(M)","uc(ae<e,@>)"])
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
s=B.amF(v.b,p,u,q,t,s,r)
x=4
return A.c(y._.b(s)?s:A.cD(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.c(v.a.ba(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:95}
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
v=A.bA(x)===A.bA(w)&&A.bM(x)===A.bM(w)&&A.cH(x)===A.cH(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(M.fd)
if(!u||!v){u=d.ac(y.g).r.a
u===$&&A.b()
u=A.ih("EEEE d.M.y",u.gfj(0))
t=o.a
t.toString
t=u.dK(t)
if(o.f){u=p.c
u.toString
u=A.aC(q,q,A.C(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aC(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.az(A_.hz,A.W(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.k,q,q,q,q,q,q,D.aji,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.aC(q,q,A.C(t).cy,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.aC(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a3(K.h0,A.W(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.ch(10)
u=A.C(d)
s=o.b
s.toString
r=$.dZ().gdD().d
w.push(new A.a3(W.I3,A.az(q,A.am(A.a([new A.a3(O.aZ,new A1.hh(s,18,!0,q,q),q),A.iw(new A.a3(C.ax,A.aw(A.a([A.bq(D.alU,A.C(d).ay,q,16),V.a3H,A.W(C.c.j(o.e),q,q,q,q,q,q,q,A.aC(q,q,A.C(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),P.jO],x),C.i,C.cD,C.h,0,q),q),r!=null)],x),C.i,C.f,C.h,q,C.l),C.k,q,q,new A.bn(u.ax.k2,q,q,t,q,q,q,C.P),q,q,q,q,q,q,q),q))
t=A.j0()
w.push(A.iw(R.IJ(q,D.amO,new B.c2K(),new B.c2L(p,o,d),y.B),t))
return A.am(w,C.bh,C.f,C.h,q,C.l)},
$S:974}
B.c2L.prototype={
$1(d){return this.aH4(d)},
aH4(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.Hg?2:4
break
case 2:x=5
return A.c(B.G7(t),$async$$1)
case 5:A.bH(s,A.r("Message has been removed.",null),C.a5)
x=3
break
case 4:u=Q.pV(A.y(["content",t.b],y.N,y.z),null)
x=6
return A.c(A0.eX(s,!1).f.ii(u,y.X).aX(0,new B.c2J(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.c(v.a.ba(),$async$$1)
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
return A.c(B.b4v(u),$async$$1)
case 4:A.bH(v.b,A.r("Message has been changed.",null),C.a5)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:95}
B.c2K.prototype={
$1(d){var x=y.B
return A.a([F.ul(E.bc(X.DJ,null),!0,48,D.agV,x),F.ul(E.bc(D.b3w,null),!0,48,D.Hg,x)],y.h)},
$S:z+1}
B.c2N.prototype={
$0(){return this.a.bkI(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"cXl","cXm",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.yD,A.F)
x(B.aLB,A.K)
w(A.bC,[B.c2I,B.c2L,B.c2J,B.c2K])
w(A.ck,[B.c2O,B.c2P,B.c2N])
x(B.c2M,A.dv)
x(B.vv,A.e4)})()
A.bl(b.typeUniverse,JSON.parse('{"yD":{"F":[],"d":[]},"aLB":{"K":["yD"]}}'))
var y=(function rtii(){var x=A.z
return{B:x("vv"),_:x("U<@>"),t:x("q<ae<e,@>>"),o:x("q<uc>"),h:x("q<m1<vv>>"),p:x("q<d>"),a:x("ae<e,@>"),x:x("uc"),P:x("aB"),K:x("E"),N:x("e"),g:x("kA"),z:x("@"),X:x("E?"),H:x("~")}})();(function constants(){D.Hg=new B.vv(0,"delete")
D.agV=new B.vv(1,"edit")
D.aji=new A.ao(16,8,16,0)
D.alU=new A.aE(58652,"MaterialIcons",null,!1)
D.amO=new A.dm(T.Ja,null,null,null,null)
D.b3w=new A.c0("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b3V=new A.c0("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_368",e:"endPart",h:b})})($__dart_deferred_initializers__,"tqR+Ny1/ONp2aqcNWq2LN5+4GoE=");