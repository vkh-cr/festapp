((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_356",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,O,P,Q,R,S,F,T,U,V,W,X,Y,Z,B={
cVY(d,e){return new B.yF(e,d)},
yF:function yF(d,e){this.c=d
this.a=e},
aLf:function aLf(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
c2n:function c2n(d,e){this.a=d
this.b=e},
c2t:function c2t(d,e){this.a=d
this.b=e},
c2u:function c2u(d,e){this.a=d
this.b=e},
c2r:function c2r(d){this.a=d},
c2q:function c2q(d,e,f){this.a=d
this.b=e
this.c=f},
c2o:function c2o(d,e){this.a=d
this.b=e},
c2p:function c2p(){},
c2s:function c2s(d,e){this.a=d
this.b=e},
vu:function vu(d,e){this.a=d
this.b=e},
cVX(d){return A.cyW(d)},
G8(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o
var $async$G8=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:q=$.Al()
p=q.bA("news").hg(0,"id")
o=d.a
o.toString
v=d.d
p=A.qe(p.w7(p.wy("created_at","lt."+o.j(0))),p.$ti.c).aCM("id",v)
o=$.e3
o.toString
x=2
return A.c(p.cf("occasion",o).bGa(0,"created_at").aC5(1).Pr(),$async$G8)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.c(q.bA("user_news").hg(0,"user").cf("news_id",v),$async$G8)
case 6:t=f
s=A.a([],y.t)
for(q=J.aK(t),p=J.a2(u),o=y.N,r=y.z;q.q();)s.push(A.y(["user",J.v(q.gL(q),"user"),"news_id",p.i(u,"id")],o,r))
q=$.Al()
x=7
return A.c(q.bA("user_news").ae9(s).ib(0),$async$G8)
case 7:x=4
break
case 5:x=8
return A.c(q.bA("user_news").jD(0).cf("news_id",v),$async$G8)
case 8:case 4:x=9
return A.c(q.bA("news").jD(0).cf("id",v),$async$G8)
case 9:return A.i(null,w)}})
return A.j($async$G8,w)},
b4d(d){var x=0,w=A.k(y.H),v
var $async$b4d=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.c($.Al().bA("news").eG(0,A.y(["message",d.b],v,v)).cf("id",d.d),$async$b4d)
case 2:return A.i(null,w)}})
return A.j($async$b4d,w)},
amp(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$amp=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Al().bA("news")
s=$.e3
s.toString
x=5
return A.c(t.jN(0,A.y(["occasion",s,"message",u,"created_by",$.e_().gdF().c.a],y.N,y.K)).ib(0),$async$amp)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.LL(X.agO(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.R)(t),++q){p=new A.da("")
new G.bPP(p).bj(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.cl(o).length===0)continue
r+=o}r=C.e.cl(r)
t=$.Al().bA("log_notifications")
s=$.e3
s.toString
x=8
return A.c(t.jN(0,A.y(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$amp)
case 8:A.bG(d,A.u("Message has been sent.",null),C.a4)
x=1
break
case 7:if(h)A.bG(d,A.u("Message has been created.",null),C.a4)
case 1:return A.i(v,w)}})
return A.j($async$amp,w)},
amq(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$amq=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.e_()
if(s.gdF().d==null)A.a6(A.cD("User must be logged in."))
v=$.Al()
u=v.bA("user_news").jD(0).cf("user",s.gdF().c.a)
t=$.e3
t.toString
x=2
return A.c(u.cf("occasion",t),$async$amq)
case 2:x=3
return A.c(v.bA("user_news").jN(0,A.y(["user",s.gdF().c.a,"news_id",d,"occasion",$.e3],y.N,y.X)).ib(0),$async$amq)
case 3:return A.i(null,w)}})
return A.j($async$amq,w)}},D,A_,E,A0,G,A1
J=c[1]
A=c[0]
C=c[2]
H=c[186]
I=c[169]
K=c[280]
L=c[198]
M=c[209]
N=c[187]
O=c[207]
P=c[214]
Q=c[130]
R=c[100]
S=c[340]
F=c[114]
T=c[302]
U=c[213]
V=c[235]
W=c[253]
X=c[91]
Y=c[142]
Z=c[108]
B=a.updateHolder(c[19],B)
D=c[355]
A_=c[243]
E=c[189]
A0=c[147]
G=c[155]
A1=c[195]
B.yF.prototype={
M(){return new B.aLf(A.a([],y.o))}}
B.aLf.prototype={
X(){this.aj()
this.b8()},
l(){this.ai()},
aX(){this.cm()
this.KR()},
KR(){var x=0,w=A.k(y.H),v=this,u
var $async$KR=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Cr(u,null,y.X)
x=(u==null?null:u.grr())===!0&&!v.e?2:3
break
case 2:x=$.e_().gdF().d!=null&&J.jc(v.d)&&!J.hn(v.d).f?4:5
break
case 4:x=6
return A.c(B.amq(J.hn(v.d).d),$async$KR)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$KR,w)},
blp(d){H.k7(d,"newsForm",y.X).aM(0,new B.c2n(this,d),y.P)},
Zf(){var x=0,w=A.k(y.H),v=this,u
var $async$Zf=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(A.Yc(),$async$Zf)
case 2:v.B(new u.c2t(v,e))
return A.i(null,w)}})
return A.j($async$Zf,w)},
nK(){var x=0,w=A.k(y.H),v=this,u
var $async$nK=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(Y.nJ("newsOffline",B.cVW(),y.x),$async$nK)
case 2:v.B(new u.c2u(v,e))
return A.i(null,w)}})
return A.j($async$nK,w)},
b8(){var x=0,w=A.k(y.H),v=this
var $async$b8=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.nK(),$async$b8)
case 2:x=3
return A.c(v.Zf(),$async$b8)
case 3:x=4
return A.c(A.ue("newsOffline",v.d),$async$b8)
case 4:v.KR()
return A.i(null,w)}})
return A.j($async$b8,w)},
A(d){var x,w,v=null,u=A.C(d).ax.a===C.v?$.iT():$.qI(),t=E.bf(D.b4C,v)
t=N.ic(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,Z.btp(),v,!0,v,v,v,v,v,t,v,v,v,1,v)
x=I.lk(!0,v,new B.c2r(this),J.bl(this.d),v,v,v,!1,C.F,!1)
w=A.j5()
return L.f0(t,u,new A.cr(C.aJ,v,v,new A.cN(new A.aa(0,820,0,1/0),x,v),v),v,v,A.ir(A.ZG(v,S.fj,v,v,!1,new B.c2s(this,d),v),w),v,v)}}
B.vu.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["S<~>(vu)","A<m0<vu>>(M)","uc(ae<e,@>)"])
B.c2n.prototype={
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
s=B.amp(v.b,p,u,q,t,s,r)
x=4
return A.c(y._.b(s)?s:A.cA(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.c(v.a.b8(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:93}
B.c2t.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c2u.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c2r.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.v(p.d,e),n=e>0?J.v(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bC(x)===A.bC(w)&&A.bM(x)===A.bM(w)&&A.cM(x)===A.cM(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(M.ff)
if(!u||!v){u=d.ad(y.g).r.a
u===$&&A.b()
u=A.iA("EEEE d.M.y",u.gfi(0))
t=o.a
t.toString
t=u.e0(t)
if(o.f){u=p.c
u.toString
u=A.aF(q,q,A.C(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aF(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aB(A_.hC,A.W(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.k,q,q,q,q,q,q,D.ajh,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.aF(q,q,A.C(t).cy,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.aF(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a4(K.h3,A.W(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.cl(10)
u=A.C(d)
s=o.b
s.toString
r=$.e_().gdF().d
w.push(new A.a4(V.I3,A.aB(q,A.ao(A.a([new A.a4(O.b0,new A0.hJ(s,18,!0,q,q),q),A.ir(new A.a4(C.av,A.ax(A.a([A.br(D.alU,A.C(d).ay,q,16),U.a3W,A.W(C.c.j(o.e),q,q,q,q,q,q,q,A.aF(q,q,A.C(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),P.jN],x),C.i,C.cB,C.h,0,q),q),r!=null)],x),C.i,C.f,C.h,q,C.m),C.k,q,q,new A.bv(u.ax.k2,q,q,t,q,q,q,C.R),q,q,q,q,q,q,q),q))
t=A.j5()
w.push(A.ir(R.a3n(q,D.amP,new B.c2p(),new B.c2q(p,o,d),y.B),t))
return A.ao(w,C.bk,C.f,C.h,q,C.m)},
$S:981}
B.c2q.prototype={
$1(d){return this.aH6(d)},
aH6(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.Hd?2:4
break
case 2:x=5
return A.c(B.G8(t),$async$$1)
case 5:A.bG(s,A.u("Message has been removed.",null),C.a4)
x=3
break
case 4:u=Q.r7(A.y(["content",t.b],y.N,y.z),null)
x=6
return A.c(A1.f1(s,!1).f.iy(u,y.X).aM(0,new B.c2o(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.c(v.a.b8(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.c2o.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bn(d)
x=4
return A.c(B.b4d(u),$async$$1)
case 4:A.bG(v.b,A.u("Message has been changed.",null),C.a4)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:93}
B.c2p.prototype={
$1(d){var x=y.B
return A.a([F.yW(E.bf(W.DN,null),!0,48,D.agV,x),F.yW(E.bf(D.b4d,null),!0,48,D.Hd,x)],y.h)},
$S:z+1}
B.c2s.prototype={
$0(){return this.a.blp(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"cVW","cVX",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.yF,A.F)
x(B.aLf,A.K)
w(A.bE,[B.c2n,B.c2q,B.c2o,B.c2p])
w(A.ci,[B.c2t,B.c2u,B.c2s])
x(B.c2r,A.dn)
x(B.vu,A.e5)})()
A.bk(b.typeUniverse,JSON.parse('{"yF":{"F":[],"d":[]},"aLf":{"K":["yF"]}}'))
var y=(function rtii(){var x=A.z
return{B:x("vu"),_:x("S<@>"),t:x("q<ae<e,@>>"),o:x("q<uc>"),h:x("q<m0<vu>>"),p:x("q<d>"),a:x("ae<e,@>"),x:x("uc"),P:x("aA"),K:x("E"),N:x("e"),g:x("l6"),z:x("@"),X:x("E?"),H:x("~")}})();(function constants(){D.Hd=new B.vu(0,"delete")
D.agV=new B.vu(1,"edit")
D.ajh=new A.an(16,8,16,0)
D.alU=new A.aH(58652,"MaterialIcons",null,!1)
D.amP=new A.dq(T.Ja,null,null,null,null)
D.b4d=new A.c_("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4C=new A.c_("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_356",e:"endPart",h:b})})($__dart_deferred_initializers__,"RQ44wWul5KrXAzEmgtuYYrO1K68=");