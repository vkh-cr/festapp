((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_367",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,O,P,Q,R,S,F,T,U,V,W,X,Y,Z,B={
cWq(d,e){return new B.yE(e,d)},
yE:function yE(d,e){this.c=d
this.a=e},
aLv:function aLv(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
c2x:function c2x(d,e){this.a=d
this.b=e},
c2D:function c2D(d,e){this.a=d
this.b=e},
c2E:function c2E(d,e){this.a=d
this.b=e},
c2B:function c2B(d){this.a=d},
c2A:function c2A(d,e,f){this.a=d
this.b=e
this.c=f},
c2y:function c2y(d,e){this.a=d
this.b=e},
c2z:function c2z(){},
c2C:function c2C(d,e){this.a=d
this.b=e},
vw:function vw(d,e){this.a=d
this.b=e},
cWp(d){return A.czD(d)},
G4(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$G4=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:n=$.Ah()
m=n.bA("news").hh(0,"id")
l=d.a
l.toString
v=d.d
m=A.p1(m.um(m.ww("created_at","lt."+l.j(0))),m.$ti.c).aCz("id",v)
l=$.dU
l.toString
x=2
return A.c(m.co("occasion",l).bFB(0,"created_at").aBT(1).Pg(),$async$G4)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.c(n.bA("user_news").hh(0,"user").co("news_id",v),$async$G4)
case 6:t=f
s=A.a([],y.t)
for(n=J.aL(t),m=J.a2(u),l=y.N,r=y.z;n.q();){q=J.v(n.gL(n),"user")
p=m.i(u,"id")
o=$.dU
o.toString
s.push(A.y(["user",q,"news_id",p,"occasion",o],l,r))}n=$.Ah()
x=7
return A.c(n.bA("user_news").ae_(s),$async$G4)
case 7:x=4
break
case 5:x=8
return A.c(n.bA("user_news").jI(0).co("news_id",v),$async$G4)
case 8:case 4:x=9
return A.c(n.bA("news").jI(0).co("id",v),$async$G4)
case 9:return A.i(null,w)}})
return A.j($async$G4,w)},
b4q(d){var x=0,w=A.k(y.H),v
var $async$b4q=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.c($.Ah().bA("news").eK(0,A.y(["message",d.b],v,v)).co("id",d.d),$async$b4q)
case 2:return A.i(null,w)}})
return A.j($async$b4q,w)},
amz(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$amz=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Ah().bA("news")
s=$.dU
s.toString
x=5
return A.c(t.jR(0,A.y(["occasion",s,"message",u,"created_by",$.dY().gdD().c.a],y.N,y.K)).io(0),$async$amz)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.LQ(Y.agW(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.Q)(t),++q){p=new A.d7("")
new G.bPI(p).bj(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.cg(o).length===0)continue
r+=o}r=C.e.cg(r)
t=$.Ah().bA("log_notifications")
s=$.dU
s.toString
x=8
return A.c(t.jR(0,A.y(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$amz)
case 8:A.bG(d,A.r("Message has been sent.",null),C.a5)
x=1
break
case 7:if(h)A.bG(d,A.r("Message has been created.",null),C.a5)
case 1:return A.i(v,w)}})
return A.j($async$amz,w)},
amA(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$amA=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.dY()
if(s.gdD().d==null)A.a6(A.cT("User must be logged in."))
v=$.Ah()
u=v.bA("user_news").jI(0).co("user",s.gdD().c.a)
t=$.dU
t.toString
x=2
return A.c(u.co("occasion",t),$async$amA)
case 2:x=3
return A.c(v.bA("user_news").jR(0,A.y(["user",s.gdD().c.a,"news_id",d,"occasion",$.dU],y.N,y.X)).io(0),$async$amA)
case 3:return A.i(null,w)}})
return A.j($async$amA,w)}},D,A_,E,A0,A1,G
J=c[1]
A=c[0]
C=c[2]
H=c[190]
I=c[173]
K=c[285]
L=c[202]
M=c[211]
N=c[191]
O=c[212]
P=c[217]
Q=c[134]
R=c[99]
S=c[344]
F=c[117]
T=c[306]
U=c[148]
V=c[216]
W=c[238]
X=c[256]
Y=c[91]
Z=c[107]
B=a.updateHolder(c[19],B)
D=c[360]
A_=c[246]
E=c[193]
A0=c[199]
A1=c[151]
G=c[159]
B.yE.prototype={
M(){return new B.aLv(A.a([],y.o))}}
B.aLv.prototype={
X(){this.am()
this.ba()},
l(){this.ai()},
aT(){this.c7()
this.KJ()},
KJ(){var x=0,w=A.k(y.H),v=this,u
var $async$KJ=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Co(u,null,y.X)
x=(u==null?null:u.gro())===!0&&!v.e?2:3
break
case 2:x=$.dY().gdD().d!=null&&J.jc(v.d)&&!J.hq(v.d).f?4:5
break
case 4:x=6
return A.c(B.amA(J.hq(v.d).d),$async$KJ)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$KJ,w)},
bkV(d){H.k8(d,"newsForm",y.X).aU(0,new B.c2x(this,d),y.P)},
Z8(){var x=0,w=A.k(y.H),v=this,u
var $async$Z8=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(A.Ye(),$async$Z8)
case 2:v.B(new u.c2D(v,e))
return A.i(null,w)}})
return A.j($async$Z8,w)},
nJ(){var x=0,w=A.k(y.H),v=this,u
var $async$nJ=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(U.mR("newsOffline",B.cWo(),y.x),$async$nJ)
case 2:v.B(new u.c2E(v,e))
return A.i(null,w)}})
return A.j($async$nJ,w)},
ba(){var x=0,w=A.k(y.H),v=this
var $async$ba=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.nJ(),$async$ba)
case 2:x=3
return A.c(v.Z8(),$async$ba)
case 3:x=4
return A.c(A.rr("newsOffline",v.d),$async$ba)
case 4:v.KJ()
return A.i(null,w)}})
return A.j($async$ba,w)},
A(d){var x,w,v=null,u=A.C(d).ax.a===C.t?$.iO():$.qJ(),t=E.bc(D.b4H,v)
t=N.ia(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,Z.btl(),v,!0,v,v,v,v,v,t,v,v,v,1,v)
x=I.lo(!0,v,new B.c2B(this),J.bz(this.d),v,v,v,!1,C.G,!1)
w=A.j1()
return L.f2(t,u,new A.cw(C.aF,v,v,new A.cO(new A.aa(0,820,0,1/0),x,v),v),v,v,A.it(A.ZI(v,S.fj,v,v,!1,new B.c2C(this,d),v),w),v,v)}}
B.vw.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["T<~>(vw)","A<m0<vw>>(M)","ud(ae<e,@>)"])
B.c2x.prototype={
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
s=B.amz(v.b,p,u,q,t,s,r)
x=4
return A.c(y._.b(s)?s:A.cC(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.c(v.a.ba(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:96}
B.c2D.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c2E.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c2B.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.v(p.d,e),n=e>0?J.v(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bA(x)===A.bA(w)&&A.bL(x)===A.bL(w)&&A.cJ(x)===A.cJ(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(M.fd)
if(!u||!v){u=d.ae(y.g).r.a
u===$&&A.b()
u=A.ie("EEEE d.M.y",u.gfj(0))
t=o.a
t.toString
t=u.dT(t)
if(o.f){u=p.c
u.toString
u=A.aB(q,q,A.C(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aB(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aC(A_.hA,A.W(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.k,q,q,q,q,q,q,D.ajn,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.aB(q,q,A.C(t).cy,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.aB(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a3(K.h1,A.W(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.cl(10)
u=A.C(d)
s=o.b
s.toString
r=$.dY().gdD().d
w.push(new A.a3(W.I4,A.aC(q,A.am(A.a([new A.a3(O.aZ,new A1.hg(s,18,!0,q,q),q),A.it(new A.a3(C.ax,A.aw(A.a([A.bp(D.alY,A.C(d).ay,q,16),V.a3Z,A.W(C.c.j(o.e),q,q,q,q,q,q,q,A.aB(q,q,A.C(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),P.jO],x),C.i,C.cB,C.h,0,q),q),r!=null)],x),C.i,C.f,C.h,q,C.l),C.k,q,q,new A.bv(u.ax.k2,q,q,t,q,q,q,C.R),q,q,q,q,q,q,q),q))
t=A.j1()
w.push(A.it(R.IY(q,D.amT,new B.c2z(),new B.c2A(p,o,d),y.B),t))
return A.am(w,C.bj,C.f,C.h,q,C.l)},
$S:971}
B.c2A.prototype={
$1(d){return this.aGS(d)},
aGS(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.Hg?2:4
break
case 2:x=5
return A.c(B.G4(t),$async$$1)
case 5:A.bG(s,A.r("Message has been removed.",null),C.a5)
x=3
break
case 4:u=Q.pV(A.y(["content",t.b],y.N,y.z),null)
x=6
return A.c(A0.eX(s,!1).f.ii(u,y.X).aU(0,new B.c2y(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.c(v.a.ba(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.c2y.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bn(d)
x=4
return A.c(B.b4q(u),$async$$1)
case 4:A.bG(v.b,A.r("Message has been changed.",null),C.a5)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:96}
B.c2z.prototype={
$1(d){var x=y.B
return A.a([F.uo(E.bc(X.DS,null),!0,48,D.ah_,x),F.uo(E.bc(D.b4i,null),!0,48,D.Hg,x)],y.h)},
$S:z+1}
B.c2C.prototype={
$0(){return this.a.bkV(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"cWo","cWp",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.yE,A.F)
x(B.aLv,A.K)
w(A.bC,[B.c2x,B.c2A,B.c2y,B.c2z])
w(A.cj,[B.c2D,B.c2E,B.c2C])
x(B.c2B,A.dj)
x(B.vw,A.e3)})()
A.bl(b.typeUniverse,JSON.parse('{"yE":{"F":[],"d":[]},"aLv":{"K":["yE"]}}'))
var y=(function rtii(){var x=A.z
return{B:x("vw"),_:x("T<@>"),t:x("q<ae<e,@>>"),o:x("q<ud>"),h:x("q<m0<vw>>"),p:x("q<d>"),a:x("ae<e,@>"),x:x("ud"),P:x("aA"),K:x("E"),N:x("e"),g:x("l7"),z:x("@"),X:x("E?"),H:x("~")}})();(function constants(){D.Hg=new B.vw(0,"delete")
D.ah_=new B.vw(1,"edit")
D.ajn=new A.ao(16,8,16,0)
D.alY=new A.aE(58652,"MaterialIcons",null,!1)
D.amT=new A.dm(T.Jb,null,null,null,null)
D.b4i=new A.c0("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4H=new A.c0("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_367",e:"endPart",h:b})})($__dart_deferred_initializers__,"aKPVDvthx2xYaHapci5M2u4CEGY=");