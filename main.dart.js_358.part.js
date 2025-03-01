((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_358",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,O,P,F,Q,R,S,T,G,U,V,W,X,Y,Z,A_,B={
cUt(d,e){return new B.yC(e,d)},
yC:function yC(d,e){this.c=d
this.a=e},
aKQ:function aKQ(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
c13:function c13(d,e){this.a=d
this.b=e},
c19:function c19(d,e){this.a=d
this.b=e},
c1a:function c1a(d,e){this.a=d
this.b=e},
c17:function c17(d){this.a=d},
c16:function c16(d,e,f){this.a=d
this.b=e
this.c=f},
c14:function c14(d,e){this.a=d
this.b=e},
c15:function c15(){},
c18:function c18(d,e){this.a=d
this.b=e},
vo:function vo(d,e){this.a=d
this.b=e},
cUs(d){return A.cxx(d)},
G7(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o
var $async$G7=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:q=$.Aj()
p=q.bY("news").hg(0,"id")
o=d.a
o.toString
v=d.d
p=A.qd(p.w4(p.wu("created_at","lt."+o.j(0))),p.$ti.c).aCC("id",v)
o=$.e1
o.toString
x=2
return A.c(p.cn("occasion",o).bFQ(0,"created_at").aBW(1).Po(),$async$G7)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.c(q.bY("user_news").hg(0,"user").cn("news_id",v),$async$G7)
case 6:t=f
s=A.a([],y.t)
for(q=J.aL(t),p=J.a2(u),o=y.N,r=y.z;q.q();)s.push(A.z(["user",J.v(q.gL(q),"user"),"news_id",p.i(u,"id")],o,r))
q=$.Aj()
x=7
return A.c(q.bY("user_news").ae0(s).iC(0),$async$G7)
case 7:x=4
break
case 5:x=8
return A.c(q.bY("user_news").k8(0).cn("news_id",v),$async$G7)
case 8:case 4:x=9
return A.c(q.bY("news").k8(0).cn("id",v),$async$G7)
case 9:return A.i(null,w)}})
return A.j($async$G7,w)},
b3t(d){var x=0,w=A.k(y.H),v
var $async$b3t=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.c($.Aj().bY("news").eG(0,A.z(["message",d.b],v,v)).cn("id",d.d),$async$b3t)
case 2:return A.i(null,w)}})
return A.j($async$b3t,w)},
am9(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$am9=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Aj().bY("news")
s=$.e1
s.toString
x=5
return A.c(t.jJ(0,A.z(["occasion",s,"message",u,"created_by",$.dW().gdF().c.a],y.N,y.K)).iC(0),$async$am9)
case 5:case 4:x=i?6:7
break
case 6:for(t=F.aUd(Y.cjm(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.R)(t),++q){p=new A.d8("")
new F.bOx(p).bj(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.cZ(o).length===0)continue
r+=o}r=C.e.cZ(r)
t=$.Aj().bY("log_notifications")
s=$.e1
s.toString
x=8
return A.c(t.jJ(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$am9)
case 8:A.bE(d,A.u("Message has been sent.",null),C.a4)
x=1
break
case 7:if(h)A.bE(d,A.u("Message has been created.",null),C.a4)
case 1:return A.i(v,w)}})
return A.j($async$am9,w)},
ama(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$ama=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.dW()
if(s.gdF().d==null)A.a6(A.cC("User must be logged in."))
v=$.Aj()
u=v.bY("user_news").k8(0).cn("user",s.gdF().c.a)
t=$.e1
t.toString
x=2
return A.c(u.cn("occasion",t),$async$ama)
case 2:x=3
return A.c(v.bY("user_news").jJ(0,A.z(["user",s.gdF().c.a,"news_id",d,"occasion",$.e1],y.N,y.X)).iC(0),$async$ama)
case 3:return A.i(null,w)}})
return A.j($async$ama,w)}},D,A0,E,A1
J=c[1]
A=c[0]
C=c[2]
H=c[188]
I=c[171]
K=c[209]
L=c[200]
M=c[189]
N=c[216]
O=c[211]
P=c[147]
F=c[154]
Q=c[282]
R=c[132]
S=c[100]
T=c[344]
G=c[116]
U=c[304]
V=c[215]
W=c[237]
X=c[255]
Y=c[91]
Z=c[146]
A_=c[108]
B=a.updateHolder(c[19],B)
D=c[359]
A0=c[245]
E=c[192]
A1=c[197]
B.yC.prototype={
M(){return new B.aKQ(A.a([],y.o))}}
B.aKQ.prototype={
Z(){this.aj()
this.b8()},
l(){this.ai()},
aW(){this.ck()
this.KO()},
KO(){var x=0,w=A.k(y.H),v=this,u
var $async$KO=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Cq(u,null,y.X)
x=(u==null?null:u.grp())===!0&&!v.e?2:3
break
case 2:x=$.dW().gdF().d!=null&&J.ke(v.d)&&!J.hr(v.d).f?4:5
break
case 4:x=6
return A.c(B.ama(J.hr(v.d).d),$async$KO)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$KO,w)},
blg(d){H.k3(d,"newsForm",y.X).aQ(0,new B.c13(this,d),y.P)},
Zc(){var x=0,w=A.k(y.H),v=this,u
var $async$Zc=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(A.Y_(),$async$Zc)
case 2:v.B(new u.c19(v,e))
return A.i(null,w)}})
return A.j($async$Zc,w)},
nI(){var x=0,w=A.k(y.H),v=this,u
var $async$nI=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(Z.nJ("newsOffline",B.cUr(),y.x),$async$nI)
case 2:v.B(new u.c1a(v,e))
return A.i(null,w)}})
return A.j($async$nI,w)},
b8(){var x=0,w=A.k(y.H),v=this
var $async$b8=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.nI(),$async$b8)
case 2:x=3
return A.c(v.Zc(),$async$b8)
case 3:x=4
return A.c(A.u8("newsOffline",v.d),$async$b8)
case 4:v.KO()
return A.i(null,w)}})
return A.j($async$b8,w)},
A(d){var x,w,v=null,u=A.D(d).ax.a===C.v?$.iQ():$.qG(),t=E.bg(D.b4z,v)
t=M.i8(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,A_.bsw(),v,!0,v,v,v,v,v,t,v,v,v,1,v)
x=I.lf(!0,v,new B.c17(this),J.bl(this.d),v,v,v,!1,C.F,!1)
w=A.j0()
return L.eY(t,u,new A.co(C.aI,v,v,new A.cO(new A.aa(0,820,0,1/0),x,v),v),v,v,A.im(A.Zt(v,T.fe,v,v,!1,new B.c18(this,d),v),w),v,v)}}
B.vo.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["S<~>(vo)","A<oY<vo>>(M)","u6(ae<e,@>)"])
B.c13.prototype={
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
s=B.am9(v.b,p,u,q,t,s,r)
x=4
return A.c(y._.b(s)?s:A.cz(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.c(v.a.b8(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:87}
B.c19.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c1a.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c17.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.v(p.d,e),n=e>0?J.v(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bG(x)===A.bG(w)&&A.bP(x)===A.bP(w)&&A.cU(x)===A.cU(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(O.f9)
if(!u||!v){u=d.ad(y.g).r.a
u===$&&A.b()
u=A.iw("EEEE d.M.y",u.gfg(0))
t=o.a
t.toString
t=u.e2(t)
if(o.f){u=p.c
u.toString
u=A.aG(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aG(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aF(A0.hy,A.X(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.k,q,q,q,q,q,q,D.aj7,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.aG(q,q,A.D(t).cy,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.aG(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a4(Q.h0,A.X(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.cp(10)
u=A.D(d)
s=o.b
s.toString
r=$.dW().gdF().d
w.push(new A.a4(W.HY,A.aF(q,A.at(A.a([new A.a4(K.b2,new P.jB(s,18,!0,q),q),A.im(new A.a4(C.ay,A.ay(A.a([A.bz(D.alK,A.D(d).ay,q,16),V.a3P,A.X(C.c.j(o.e),q,q,q,q,q,q,q,A.aG(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),N.jL],x),C.i,C.cB,C.h,q),q),r!=null)],x),C.i,C.f,C.h,q,C.n),C.k,q,q,new A.by(u.ax.k2,q,q,t,q,q,q,C.R),q,q,q,q,q,q,q),q))
t=A.j0()
w.push(A.im(S.cnq(q,D.amG,new B.c15(),new B.c16(p,o,d),y.B),t))
return A.at(w,C.br,C.f,C.h,q,C.n)},
$S:975}
B.c16.prototype={
$1(d){return this.aGX(d)},
aGX(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.H8?2:4
break
case 2:x=5
return A.c(B.G7(t),$async$$1)
case 5:A.bE(s,A.u("Message has been removed.",null),C.a4)
x=3
break
case 4:u=R.yc(A.z(["content",t.b],y.N,y.z))
x=6
return A.c(A1.ft(s,!1).f.jq(u,y.X).aQ(0,new B.c14(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.c(v.a.b8(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.c14.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bt(d)
x=4
return A.c(B.b3t(u),$async$$1)
case 4:A.bE(v.b,A.u("Message has been changed.",null),C.a4)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:87}
B.c15.prototype={
$1(d){var x=y.B
return A.a([G.Qp(E.bg(X.DG,null),!0,48,D.agL,x),G.Qp(E.bg(D.b4a,null),!0,48,D.H8,x)],y.h)},
$S:z+1}
B.c18.prototype={
$0(){return this.a.blg(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"cUr","cUs",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.yC,A.G)
x(B.aKQ,A.K)
w(A.bC,[B.c13,B.c16,B.c14,B.c15])
w(A.ci,[B.c19,B.c1a,B.c18])
x(B.c17,A.dj)
x(B.vo,A.e4)})()
A.bi(b.typeUniverse,JSON.parse('{"yC":{"G":[],"d":[]},"aKQ":{"K":["yC"]}}'))
var y=(function rtii(){var x=A.y
return{B:x("vo"),_:x("S<@>"),t:x("q<ae<e,@>>"),o:x("q<u6>"),h:x("q<oY<vo>>"),p:x("q<d>"),a:x("ae<e,@>"),x:x("u6"),P:x("aA"),K:x("E"),N:x("e"),g:x("lu"),z:x("@"),X:x("E?"),H:x("~")}})();(function constants(){D.H8=new B.vo(0,"delete")
D.agL=new B.vo(1,"edit")
D.aj7=new A.an(16,8,16,0)
D.alK=new A.aJ(58652,"MaterialIcons",null,!1)
D.amG=new A.dE(U.J6,null,null,null,null)
D.b4a=new A.c_("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4z=new A.c_("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_358",e:"endPart",h:b})})($__dart_deferred_initializers__,"mmZN49b7PvGfLvP6cwKivpZh7v4=");