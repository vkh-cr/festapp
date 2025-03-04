((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_355",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,O,P,Q,R,S,F,T,U,V,W,X,Y,Z,B={
cVv(d,e){return new B.yF(e,d)},
yF:function yF(d,e){this.c=d
this.a=e},
aL5:function aL5(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
c1V:function c1V(d,e){this.a=d
this.b=e},
c20:function c20(d,e){this.a=d
this.b=e},
c21:function c21(d,e){this.a=d
this.b=e},
c1Z:function c1Z(d){this.a=d},
c1Y:function c1Y(d,e,f){this.a=d
this.b=e
this.c=f},
c1W:function c1W(d,e){this.a=d
this.b=e},
c1X:function c1X(){},
c2_:function c2_(d,e){this.a=d
this.b=e},
vu:function vu(d,e){this.a=d
this.b=e},
cVu(d){return A.cyu(d)},
Ga(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o
var $async$Ga=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:q=$.Al()
p=q.bz("news").hg(0,"id")
o=d.a
o.toString
v=d.d
p=A.qd(p.w8(p.wz("created_at","lt."+o.j(0))),p.$ti.c).aCH("id",v)
o=$.e3
o.toString
x=2
return A.c(p.cf("occasion",o).bG4(0,"created_at").aC0(1).Po(),$async$Ga)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.c(q.bz("user_news").hg(0,"user").cf("news_id",v),$async$Ga)
case 6:t=f
s=A.a([],y.t)
for(q=J.aL(t),p=J.a2(u),o=y.N,r=y.z;q.q();)s.push(A.z(["user",J.v(q.gL(q),"user"),"news_id",p.i(u,"id")],o,r))
q=$.Al()
x=7
return A.c(q.bz("user_news").ae4(s).ib(0),$async$Ga)
case 7:x=4
break
case 5:x=8
return A.c(q.bz("user_news").jC(0).cf("news_id",v),$async$Ga)
case 8:case 4:x=9
return A.c(q.bz("news").jC(0).cf("id",v),$async$Ga)
case 9:return A.i(null,w)}})
return A.j($async$Ga,w)},
b3S(d){var x=0,w=A.k(y.H),v
var $async$b3S=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.c($.Al().bz("news").eG(0,A.z(["message",d.b],v,v)).cf("id",d.d),$async$b3S)
case 2:return A.i(null,w)}})
return A.j($async$b3S,w)},
amj(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$amj=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Al().bz("news")
s=$.e3
s.toString
x=5
return A.c(t.jL(0,A.z(["occasion",s,"message",u,"created_by",$.dZ().gdF().c.a],y.N,y.K)).ib(0),$async$amj)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.LL(X.agI(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.R)(t),++q){p=new A.d8("")
new G.bPn(p).bj(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.cl(o).length===0)continue
r+=o}r=C.e.cl(r)
t=$.Al().bz("log_notifications")
s=$.e3
s.toString
x=8
return A.c(t.jL(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$amj)
case 8:A.bF(d,A.u("Message has been sent.",null),C.a4)
x=1
break
case 7:if(h)A.bF(d,A.u("Message has been created.",null),C.a4)
case 1:return A.i(v,w)}})
return A.j($async$amj,w)},
amk(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$amk=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.dZ()
if(s.gdF().d==null)A.a6(A.cC("User must be logged in."))
v=$.Al()
u=v.bz("user_news").jC(0).cf("user",s.gdF().c.a)
t=$.e3
t.toString
x=2
return A.c(u.cf("occasion",t),$async$amk)
case 2:x=3
return A.c(v.bz("user_news").jL(0,A.z(["user",s.gdF().c.a,"news_id",d,"occasion",$.e3],y.N,y.X)).ib(0),$async$amk)
case 3:return A.i(null,w)}})
return A.j($async$amk,w)}},D,A_,E,A0,G,A1
J=c[1]
A=c[0]
C=c[2]
H=c[187]
I=c[172]
K=c[281]
L=c[199]
M=c[188]
N=c[208]
O=c[215]
P=c[210]
Q=c[130]
R=c[100]
S=c[342]
F=c[115]
T=c[303]
U=c[214]
V=c[254]
W=c[236]
X=c[91]
Y=c[145]
Z=c[108]
B=a.updateHolder(c[19],B)
D=c[358]
A_=c[244]
E=c[191]
A0=c[146]
G=c[155]
A1=c[196]
B.yF.prototype={
M(){return new B.aL5(A.a([],y.o))}}
B.aL5.prototype={
X(){this.aj()
this.b8()},
l(){this.ai()},
aW(){this.cm()
this.KP()},
KP(){var x=0,w=A.k(y.H),v=this,u
var $async$KP=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Cs(u,null,y.X)
x=(u==null?null:u.grq())===!0&&!v.e?2:3
break
case 2:x=$.dZ().gdF().d!=null&&J.ja(v.d)&&!J.hk(v.d).f?4:5
break
case 4:x=6
return A.c(B.amk(J.hk(v.d).d),$async$KP)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$KP,w)},
blk(d){H.k7(d,"newsForm",y.X).aL(0,new B.c1V(this,d),y.P)},
Za(){var x=0,w=A.k(y.H),v=this,u
var $async$Za=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(A.Y7(),$async$Za)
case 2:v.B(new u.c20(v,e))
return A.i(null,w)}})
return A.j($async$Za,w)},
nJ(){var x=0,w=A.k(y.H),v=this,u
var $async$nJ=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(Y.nH("newsOffline",B.cVt(),y.x),$async$nJ)
case 2:v.B(new u.c21(v,e))
return A.i(null,w)}})
return A.j($async$nJ,w)},
b8(){var x=0,w=A.k(y.H),v=this
var $async$b8=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.nJ(),$async$b8)
case 2:x=3
return A.c(v.Za(),$async$b8)
case 3:x=4
return A.c(A.ue("newsOffline",v.d),$async$b8)
case 4:v.KP()
return A.i(null,w)}})
return A.j($async$b8,w)},
A(d){var x,w,v=null,u=A.C(d).ax.a===C.v?$.iS():$.qH(),t=E.bf(D.b4C,v)
t=M.i9(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,Z.bt2(),v,!0,v,v,v,v,v,t,v,v,v,1,v)
x=I.li(!0,v,new B.c1Z(this),J.bl(this.d),v,v,v,!1,C.F,!1)
w=A.j3()
return L.f_(t,u,new A.cp(C.aI,v,v,new A.cK(new A.aa(0,820,0,1/0),x,v),v),v,v,A.im(A.ZB(v,S.fh,v,v,!1,new B.c2_(this,d),v),w),v,v)}}
B.vu.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["S<~>(vu)","A<m_<vu>>(M)","uc(ae<e,@>)"])
B.c1V.prototype={
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
s=B.amj(v.b,p,u,q,t,s,r)
x=4
return A.c(y._.b(s)?s:A.cz(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.c(v.a.b8(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:93}
B.c20.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c21.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c1Z.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.v(p.d,e),n=e>0?J.v(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bH(x)===A.bH(w)&&A.bP(x)===A.bP(w)&&A.cU(x)===A.cU(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(P.fc)
if(!u||!v){u=d.ad(y.g).r.a
u===$&&A.b()
u=A.iw("EEEE d.M.y",u.gfh(0))
t=o.a
t.toString
t=u.e8(t)
if(o.f){u=p.c
u.toString
u=A.aE(q,q,A.C(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aE(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aG(A_.hA,A.W(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.k,q,q,q,q,q,q,D.aje,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.aE(q,q,A.C(t).cy,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.aE(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a4(K.h2,A.W(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.cl(10)
u=A.C(d)
s=o.b
s.toString
r=$.dZ().gdF().d
w.push(new A.a4(W.I2,A.aG(q,A.ao(A.a([new A.a4(N.b0,new A0.iC(s,18,!0,q,q),q),A.im(new A.a4(C.az,A.ax(A.a([A.bs(D.alS,A.C(d).ay,q,16),U.a3U,A.W(C.c.j(o.e),q,q,q,q,q,q,q,A.aE(q,q,A.C(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),O.jM],x),C.i,C.cB,C.h,0,q),q),r!=null)],x),C.i,C.f,C.h,q,C.m),C.k,q,q,new A.by(u.ax.k2,q,q,t,q,q,q,C.R),q,q,q,q,q,q,q),q))
t=A.j3()
w.push(A.im(R.a3i(q,D.amN,new B.c1X(),new B.c1Y(p,o,d),y.B),t))
return A.ao(w,C.bj,C.f,C.h,q,C.m)},
$S:980}
B.c1Y.prototype={
$1(d){return this.aH1(d)},
aH1(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.Hc?2:4
break
case 2:x=5
return A.c(B.Ga(t),$async$$1)
case 5:A.bF(s,A.u("Message has been removed.",null),C.a4)
x=3
break
case 4:u=Q.tW(A.z(["content",t.b],y.N,y.z),null)
x=6
return A.c(A1.f3(s,!1).f.iS(u,y.X).aL(0,new B.c1W(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.c(v.a.b8(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.c1W.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bq(d)
x=4
return A.c(B.b3S(u),$async$$1)
case 4:A.bF(v.b,A.u("Message has been changed.",null),C.a4)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:93}
B.c1X.prototype={
$1(d){var x=y.B
return A.a([F.yW(E.bf(V.DL,null),!0,48,D.agS,x),F.yW(E.bf(D.b4d,null),!0,48,D.Hc,x)],y.h)},
$S:z+1}
B.c2_.prototype={
$0(){return this.a.blk(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"cVt","cVu",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.yF,A.F)
x(B.aL5,A.K)
w(A.bA,[B.c1V,B.c1Y,B.c1W,B.c1X])
w(A.ci,[B.c20,B.c21,B.c2_])
x(B.c1Z,A.dm)
x(B.vu,A.e5)})()
A.bi(b.typeUniverse,JSON.parse('{"yF":{"F":[],"d":[]},"aL5":{"K":["yF"]}}'))
var y=(function rtii(){var x=A.y
return{B:x("vu"),_:x("S<@>"),t:x("p<ae<e,@>>"),o:x("p<uc>"),h:x("p<m_<vu>>"),p:x("p<d>"),a:x("ae<e,@>"),x:x("uc"),P:x("aA"),K:x("E"),N:x("e"),g:x("lv"),z:x("@"),X:x("E?"),H:x("~")}})();(function constants(){D.Hc=new B.vu(0,"delete")
D.agS=new B.vu(1,"edit")
D.aje=new A.an(16,8,16,0)
D.alS=new A.aH(58652,"MaterialIcons",null,!1)
D.amN=new A.dj(T.J9,null,null,null,null)
D.b4d=new A.c_("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4C=new A.c_("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_355",e:"endPart",h:b})})($__dart_deferred_initializers__,"ENQBtafqJdX64oevqNxRP0n4F7E=");