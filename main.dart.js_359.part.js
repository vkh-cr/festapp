((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_359",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,O,P,F,Q,R,S,T,G,U,V,W,X,Y,Z,A_,B={
cUg(d,e){return new B.yB(e,d)},
yB:function yB(d,e){this.c=d
this.a=e},
aKK:function aKK(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
c1_:function c1_(d,e){this.a=d
this.b=e},
c15:function c15(d,e){this.a=d
this.b=e},
c16:function c16(d,e){this.a=d
this.b=e},
c13:function c13(d){this.a=d},
c12:function c12(d,e,f){this.a=d
this.b=e
this.c=f},
c10:function c10(d,e){this.a=d
this.b=e},
c11:function c11(){},
c14:function c14(d,e){this.a=d
this.b=e},
vm:function vm(d,e){this.a=d
this.b=e},
cUf(d){return A.cxl(d)},
G7(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o
var $async$G7=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:q=$.Ai()
p=q.bY("news").hf(0,"id")
o=d.a
o.toString
v=d.d
p=A.qd(p.w4(p.wu("created_at","lt."+o.j(0))),p.$ti.c).aCA("id",v)
o=$.e1
o.toString
x=2
return A.c(p.cn("occasion",o).bFY(0,"created_at").aBU(1).Po(),$async$G7)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.c(q.bY("user_news").hf(0,"user").cn("news_id",v),$async$G7)
case 6:t=f
s=A.a([],y.t)
for(q=J.aL(t),p=J.a3(u),o=y.N,r=y.z;q.q();)s.push(A.z(["user",J.u(q.gL(q),"user"),"news_id",p.i(u,"id")],o,r))
q=$.Ai()
x=7
return A.c(q.bY("user_news").adZ(s).iC(0),$async$G7)
case 7:x=4
break
case 5:x=8
return A.c(q.bY("user_news").k7(0).cn("news_id",v),$async$G7)
case 8:case 4:x=9
return A.c(q.bY("news").k7(0).cn("id",v),$async$G7)
case 9:return A.i(null,w)}})
return A.j($async$G7,w)},
b3n(d){var x=0,w=A.k(y.H),v
var $async$b3n=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.c($.Ai().bY("news").eG(0,A.z(["message",d.b],v,v)).cn("id",d.d),$async$b3n)
case 2:return A.i(null,w)}})
return A.j($async$b3n,w)},
am3(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$am3=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Ai().bY("news")
s=$.e1
s.toString
x=5
return A.c(t.jJ(0,A.z(["occasion",s,"message",u,"created_by",$.dW().gdF().c.a],y.N,y.K)).iC(0),$async$am3)
case 5:case 4:x=i?6:7
break
case 6:for(t=F.aU7(Y.cj9(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.R)(t),++q){p=new A.d7("")
new F.bNW(p).bj(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.cZ(o).length===0)continue
r+=o}r=C.e.cZ(r)
t=$.Ai().bY("log_notifications")
s=$.e1
s.toString
x=8
return A.c(t.jJ(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$am3)
case 8:A.bE(d,A.v("Message has been sent.",null),C.a3)
x=1
break
case 7:if(h)A.bE(d,A.v("Message has been created.",null),C.a3)
case 1:return A.i(v,w)}})
return A.j($async$am3,w)},
am4(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$am4=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.dW()
if(s.gdF().d==null)A.a6(A.cB("User must be logged in."))
v=$.Ai()
u=v.bY("user_news").k7(0).cn("user",s.gdF().c.a)
t=$.e1
t.toString
x=2
return A.c(u.cn("occasion",t),$async$am4)
case 2:x=3
return A.c(v.bY("user_news").jJ(0,A.z(["user",s.gdF().c.a,"news_id",d,"occasion",$.e1],y.N,y.X)).iC(0),$async$am4)
case 3:return A.i(null,w)}})
return A.j($async$am4,w)}},D,A0,E,A1
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
S=c[102]
T=c[344]
G=c[116]
U=c[304]
V=c[215]
W=c[237]
X=c[255]
Y=c[93]
Z=c[146]
A_=c[109]
B=a.updateHolder(c[19],B)
D=c[360]
A0=c[245]
E=c[192]
A1=c[197]
B.yB.prototype={
M(){return new B.aKK(A.a([],y.o))}}
B.aKK.prototype={
Z(){this.aj()
this.b8()},
l(){this.ai()},
aW(){this.ck()
this.KN()},
KN(){var x=0,w=A.k(y.H),v=this,u
var $async$KN=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Cp(u,null,y.X)
x=(u==null?null:u.grp())===!0&&!v.e?2:3
break
case 2:x=$.dW().gdF().d!=null&&J.kd(v.d)&&!J.hn(v.d).f?4:5
break
case 4:x=6
return A.c(B.am4(J.hn(v.d).d),$async$KN)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$KN,w)},
blm(d){H.k2(d,"newsForm",y.X).aQ(0,new B.c1_(this,d),y.P)},
Zb(){var x=0,w=A.k(y.H),v=this,u
var $async$Zb=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(A.XW(),$async$Zb)
case 2:v.B(new u.c15(v,e))
return A.i(null,w)}})
return A.j($async$Zb,w)},
nG(){var x=0,w=A.k(y.H),v=this,u
var $async$nG=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(Z.nF("newsOffline",B.cUe(),y.x),$async$nG)
case 2:v.B(new u.c16(v,e))
return A.i(null,w)}})
return A.j($async$nG,w)},
b8(){var x=0,w=A.k(y.H),v=this
var $async$b8=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.nG(),$async$b8)
case 2:x=3
return A.c(v.Zb(),$async$b8)
case 3:x=4
return A.c(A.u6("newsOffline",v.d),$async$b8)
case 4:v.KN()
return A.i(null,w)}})
return A.j($async$b8,w)},
A(d){var x,w,v=null,u=A.D(d).ax.a===C.u?$.iP():$.qG(),t=E.bb(D.b4w,v)
t=M.i5(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,A_.bsl(),v,!0,v,v,v,v,v,t,v,v,v,1,v)
x=I.lg(!0,v,new B.c13(this),J.bm(this.d),v,v,v,!1,C.F,!1)
w=A.iZ()
return L.eW(t,u,new A.co(C.aI,v,v,new A.cO(new A.a9(0,820,0,1/0),x,v),v),v,v,A.ik(A.Zn(v,T.h0,v,v,!1,new B.c14(this,d),v),w),v,v)}}
B.vm.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["S<~>(vm)","B<oX<vm>>(M)","u4(ad<e,@>)"])
B.c1_.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:y.a.a(d)
u=J.a3(d)
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
s=B.am3(v.b,p,u,q,t,s,r)
x=4
return A.c(y._.b(s)?s:A.cD(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.c(v.a.b8(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:89}
B.c15.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c16.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c13.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.u(p.d,e),n=e>0?J.u(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bG(x)===A.bG(w)&&A.bP(x)===A.bP(w)&&A.cT(x)===A.cT(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(O.f8)
if(!u||!v){u=d.ad(y.g).r.a
u===$&&A.b()
u=A.iv("EEEE d.M.y",u.gfg(0))
t=o.a
t.toString
t=u.e2(t)
if(o.f){u=p.c
u.toString
u=A.aJ(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aJ(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aG(A0.hx,A.X(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.k,q,q,q,q,q,q,D.aje,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.aJ(q,q,A.D(t).cy,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.aJ(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a4(Q.fY,A.X(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.cp(10)
u=A.D(d)
s=o.b
s.toString
r=$.dW().gdF().d
w.push(new A.a4(W.HZ,A.aG(q,A.aw(A.a([new A.a4(K.b0,new P.jA(s,18,!0,q),q),A.ik(new A.a4(C.ay,A.aA(A.a([A.bz(D.alM,A.D(d).ay,q,16),V.a3V,A.X(C.c.j(o.e),q,q,q,q,q,q,q,A.aJ(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),N.jI],x),C.i,C.cA,C.h,q),q),r!=null)],x),C.i,C.f,C.h,q,C.p),C.k,q,q,new A.by(u.ax.k2,q,q,t,q,q,q,C.Q),q,q,q,q,q,q,q),q))
t=A.iZ()
w.push(A.ik(S.cnc(q,D.amF,new B.c11(),new B.c12(p,o,d),y.B),t))
return A.aw(w,C.br,C.f,C.h,q,C.p)},
$S:974}
B.c12.prototype={
$1(d){return this.aGV(d)},
aGV(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.H8?2:4
break
case 2:x=5
return A.c(B.G7(t),$async$$1)
case 5:A.bE(s,A.v("Message has been removed.",null),C.a3)
x=3
break
case 4:u=R.yb(A.z(["content",t.b],y.N,y.z))
x=6
return A.c(A1.fs(s,!1).f.jr(u,y.X).aQ(0,new B.c10(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.c(v.a.b8(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.c10.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bt(d)
x=4
return A.c(B.b3n(u),$async$$1)
case 4:A.bE(v.b,A.v("Message has been changed.",null),C.a3)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:89}
B.c11.prototype={
$1(d){var x=y.B
return A.a([G.Ql(E.bb(X.DF,null),!0,48,D.agR,x),G.Ql(E.bb(D.b47,null),!0,48,D.H8,x)],y.h)},
$S:z+1}
B.c14.prototype={
$0(){return this.a.blm(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"cUe","cUf",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.yB,A.G)
x(B.aKK,A.K)
w(A.bC,[B.c1_,B.c12,B.c10,B.c11])
w(A.ci,[B.c15,B.c16,B.c14])
x(B.c13,A.di)
x(B.vm,A.e3)})()
A.bi(b.typeUniverse,JSON.parse('{"yB":{"G":[],"d":[]},"aKK":{"K":["yB"]}}'))
var y=(function rtii(){var x=A.y
return{B:x("vm"),_:x("S<@>"),t:x("q<ad<e,@>>"),o:x("q<u4>"),h:x("q<oX<vm>>"),p:x("q<d>"),a:x("ad<e,@>"),x:x("u4"),P:x("az"),K:x("E"),N:x("e"),g:x("ls"),z:x("@"),X:x("E?"),H:x("~")}})();(function constants(){D.H8=new B.vm(0,"delete")
D.agR=new B.vm(1,"edit")
D.aje=new A.an(16,8,16,0)
D.alM=new A.aD(58652,"MaterialIcons",null,!1)
D.amF=new A.dD(U.J7,null,null,null,null)
D.b47=new A.c_("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4w=new A.c_("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_359",e:"endPart",h:b})})($__dart_deferred_initializers__,"l22mNBVf7WxF8bcrmSjpxxqGxuA=");