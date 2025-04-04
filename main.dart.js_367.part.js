((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_367",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,O,P,Q,R,S,F,T,U,V,W,X,Y,Z,B={
cWN(d,e){return new B.yE(e,d)},
yE:function yE(d,e){this.c=d
this.a=e},
aLA:function aLA(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
c2N:function c2N(d,e){this.a=d
this.b=e},
c2T:function c2T(d,e){this.a=d
this.b=e},
c2U:function c2U(d,e){this.a=d
this.b=e},
c2R:function c2R(d){this.a=d},
c2Q:function c2Q(d,e,f){this.a=d
this.b=e
this.c=f},
c2O:function c2O(d,e){this.a=d
this.b=e},
c2P:function c2P(){},
c2S:function c2S(d,e){this.a=d
this.b=e},
vu:function vu(d,e){this.a=d
this.b=e},
cWM(d){return A.cAC(d)},
G6(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$G6=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:n=$.Ah()
m=n.bB("news").hg(0,"id")
l=d.a
l.toString
v=d.d
m=A.p1(m.uq(m.wx("created_at","lt."+l.j(0))),m.$ti.c).aCN("id",v)
l=$.dg
l.toString
x=2
return A.c(m.co("occasion",l).bFZ(0,"created_at").aC6(1).Pi(),$async$G6)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.c(n.bB("user_news").hg(0,"user").co("news_id",v),$async$G6)
case 6:t=f
s=A.a([],y.t)
for(n=J.aL(t),m=J.a2(u),l=y.N,r=y.z;n.q();){q=J.v(n.gL(n),"user")
p=m.i(u,"id")
o=$.dg
o.toString
s.push(A.y(["user",q,"news_id",p,"occasion",o],l,r))}n=$.Ah()
x=7
return A.c(n.bB("user_news").ae4(s),$async$G6)
case 7:x=4
break
case 5:x=8
return A.c(n.bB("user_news").jI(0).co("news_id",v),$async$G6)
case 8:case 4:x=9
return A.c(n.bB("news").jI(0).co("id",v),$async$G6)
case 9:return A.i(null,w)}})
return A.j($async$G6,w)},
b4v(d){var x=0,w=A.k(y.H),v
var $async$b4v=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.c($.Ah().bB("news").eL(0,A.y(["message",d.b],v,v)).co("id",d.d),$async$b4v)
case 2:return A.i(null,w)}})
return A.j($async$b4v,w)},
amF(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$amF=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Ah().bB("news")
s=$.dg
s.toString
x=5
return A.c(t.jR(0,A.y(["occasion",s,"message",u,"created_by",$.dZ().gdD().c.a],y.N,y.K)).io(0),$async$amF)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.LW(Y.ah1(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.Q)(t),++q){p=new A.d7("")
new G.bPS(p).bj(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.cg(o).length===0)continue
r+=o}r=C.e.cg(r)
t=$.Ah().bB("log_notifications")
s=$.dg
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
v=$.Ah()
u=v.bB("user_news").jI(0).co("user",s.gdD().c.a)
t=$.dg
t.toString
x=2
return A.c(u.co("occasion",t),$async$amG)
case 2:x=3
return A.c(v.bB("user_news").jR(0,A.y(["user",s.gdD().c.a,"news_id",d,"occasion",$.dg],y.N,y.X)).io(0),$async$amG)
case 3:return A.i(null,w)}})
return A.j($async$amG,w)}},D,A_,E,A0,A1,G
J=c[1]
A=c[0]
C=c[2]
H=c[188]
I=c[171]
K=c[283]
L=c[200]
M=c[211]
N=c[189]
O=c[203]
P=c[215]
Q=c[132]
R=c[97]
S=c[344]
F=c[114]
T=c[305]
U=c[146]
V=c[214]
W=c[236]
X=c[256]
Y=c[89]
Z=c[104]
B=a.updateHolder(c[19],B)
D=c[359]
A_=c[246]
E=c[191]
A0=c[197]
A1=c[149]
G=c[157]
B.yE.prototype={
M(){return new B.aLA(A.a([],y.o))}}
B.aLA.prototype={
X(){this.al()
this.ba()},
l(){this.ag()},
aT(){this.c6()
this.KH()},
KH(){var x=0,w=A.k(y.H),v=this,u
var $async$KH=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Co(u,null,y.X)
x=(u==null?null:u.grq())===!0&&!v.e?2:3
break
case 2:x=$.dZ().gdD().d!=null&&J.ja(v.d)&&!J.hs(v.d).f?4:5
break
case 4:x=6
return A.c(B.amG(J.hs(v.d).d),$async$KH)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$KH,w)},
bkI(d){H.k8(d,"newsForm",y.X).aY(0,new B.c2N(this,d),y.P)},
Za(){var x=0,w=A.k(y.H),v=this,u
var $async$Za=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(A.Yj(),$async$Za)
case 2:v.B(new u.c2T(v,e))
return A.i(null,w)}})
return A.j($async$Za,w)},
nL(){var x=0,w=A.k(y.H),v=this,u
var $async$nL=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(U.mS("newsOffline",B.ddI(),y.x),$async$nL)
case 2:v.B(new u.c2U(v,e))
return A.i(null,w)}})
return A.j($async$nL,w)},
ba(){var x=0,w=A.k(y.H),v=this
var $async$ba=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.nL(),$async$ba)
case 2:x=3
return A.c(v.Za(),$async$ba)
case 3:x=4
return A.c(A.rq("newsOffline",v.d),$async$ba)
case 4:v.KH()
return A.i(null,w)}})
return A.j($async$ba,w)},
A(d){var x,w,v=null,u=A.C(d).ax.a===C.t?$.iP():$.qJ(),t=E.bc(D.b3W,v)
t=N.id(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,Z.brE(),v,!0,v,v,v,v,v,t,v,v,v,1,v)
x=I.lq(!0,v,new B.c2R(this),J.bz(this.d),v,v,v,!1,C.G,!1)
w=A.j0()
return L.f2(t,u,new A.cy(C.aF,v,v,new A.cP(new A.a9(0,720,0,1/0),x,v),v),v,v,A.iw(A.ZL(v,S.fj,v,v,!1,new B.c2S(this,d),v),w),v,v)}}
B.vu.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["U<~>(vu)","A<m2<vu>>(M)","uc(ae<e,@>)"])
B.c2N.prototype={
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
$S:104}
B.c2T.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c2U.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c2R.prototype={
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
u=A.ii("EEEE d.M.y",u.gfj(0))
t=o.a
t.toString
t=u.dK(t)
if(o.f){u=p.c
u.toString
u=A.aC(q,q,A.C(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aC(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.az(A_.hy,A.W(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.k,q,q,q,q,q,q,D.ajj,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.aC(q,q,A.C(t).cy,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.aC(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a3(K.hH,A.W(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.ch(10)
u=A.C(d)
s=o.b
s.toString
r=$.dZ().gdD().d
w.push(new A.a3(W.I3,A.az(q,A.am(A.a([new A.a3(O.aZ,new A1.hw(s,18,!0,q,q),q),A.iw(new A.a3(C.ax,A.aw(A.a([A.bq(D.alV,A.C(d).ay,q,16),V.a3H,A.W(C.c.j(o.e),q,q,q,q,q,q,q,A.aC(q,q,A.C(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),P.jO],x),C.i,C.cD,C.h,0,q),q),r!=null)],x),C.i,C.f,C.h,q,C.l),C.k,q,q,new A.bm(u.ax.k2,q,q,t,q,q,q,C.P),q,q,q,q,q,q,q),q))
t=A.j0()
w.push(A.iw(R.II(q,D.amP,new B.c2P(),new B.c2Q(p,o,d),y.B),t))
return A.am(w,C.bh,C.f,C.h,q,C.l)},
$S:976}
B.c2Q.prototype={
$1(d){return this.aH5(d)},
aH5(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.Hg?2:4
break
case 2:x=5
return A.c(B.G6(t),$async$$1)
case 5:A.bH(s,A.r("Message has been removed.",null),C.a5)
x=3
break
case 4:u=Q.pV(A.y(["content",t.b],y.N,y.z),$.dg)
x=6
return A.c(A0.eX(s,!1).f.ii(u,y.X).aY(0,new B.c2O(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.c(v.a.ba(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.c2O.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bl(d)
x=4
return A.c(B.b4v(u),$async$$1)
case 4:A.bH(v.b,A.r("Message has been changed.",null),C.a5)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:104}
B.c2P.prototype={
$1(d){var x=y.B
return A.a([F.ul(E.bc(X.DJ,null),!0,48,D.agV,x),F.ul(E.bc(D.b3x,null),!0,48,D.Hg,x)],y.h)},
$S:z+1}
B.c2S.prototype={
$0(){return this.a.bkI(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"ddI","cWM",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.yE,A.F)
x(B.aLA,A.K)
w(A.bC,[B.c2N,B.c2Q,B.c2O,B.c2P])
w(A.ck,[B.c2T,B.c2U,B.c2S])
x(B.c2R,A.dx)
x(B.vu,A.e4)})()
A.bo(b.typeUniverse,JSON.parse('{"yE":{"F":[],"d":[]},"aLA":{"K":["yE"]}}'))
var y=(function rtii(){var x=A.z
return{B:x("vu"),_:x("U<@>"),t:x("q<ae<e,@>>"),o:x("q<uc>"),h:x("q<m2<vu>>"),p:x("q<d>"),a:x("ae<e,@>"),x:x("uc"),P:x("aB"),K:x("E"),N:x("e"),g:x("kB"),z:x("@"),X:x("E?"),H:x("~")}})();(function constants(){D.Hg=new B.vu(0,"delete")
D.agV=new B.vu(1,"edit")
D.ajj=new A.ao(16,8,16,0)
D.alV=new A.aE(58652,"MaterialIcons",null,!1)
D.amP=new A.dn(T.Ja,null,null,null,null)
D.b3x=new A.c0("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b3W=new A.c0("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_367",e:"endPart",h:b})})($__dart_deferred_initializers__,"P4X4fEM+OEvmtt78O92sSt1AMKs=");