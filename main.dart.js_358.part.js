((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_358",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,O,P,G,Q,R,E,S,T,U,V,W,X,Y,Z,B={
cSh(d,e){return new B.yq(e,d)},
yq:function yq(d,e){this.c=d
this.a=e},
aKe:function aKe(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
c_T:function c_T(d,e){this.a=d
this.b=e},
c_Z:function c_Z(d,e){this.a=d
this.b=e},
c0_:function c0_(d,e){this.a=d
this.b=e},
c_X:function c_X(d){this.a=d},
c_W:function c_W(d,e,f){this.a=d
this.b=e
this.c=f},
c_U:function c_U(d,e){this.a=d
this.b=e},
c_V:function c_V(){},
c_Y:function c_Y(d,e){this.a=d
this.b=e},
vf:function vf(d,e){this.a=d
this.b=e},
cSg(d){return A.cvx(d)},
FX(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o
var $async$FX=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:q=$.A7()
p=q.bX("news").hd(0,"id")
o=d.a
o.toString
v=d.d
p=A.q9(p.w3(p.wu("created_at","lt."+o.j(0))),p.$ti.c).aCk("id",v)
o=$.dW
o.toString
x=2
return A.c(p.cn("occasion",o).bFu(0,"created_at").aBD(1).Pi(),$async$FX)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.c(q.bX("user_news").hd(0,"user").cn("news_id",v),$async$FX)
case 6:t=f
s=A.a([],y.t)
for(q=J.aH(t),p=J.a3(u),o=y.N,r=y.z;q.q();)s.push(A.z(["user",J.u(q.gL(q),"user"),"news_id",p.i(u,"id")],o,r))
q=$.A7()
x=7
return A.c(q.bX("user_news").adU(s).iB(0),$async$FX)
case 7:x=4
break
case 5:x=8
return A.c(q.bX("user_news").k5(0).cn("news_id",v),$async$FX)
case 8:case 4:x=9
return A.c(q.bX("news").k5(0).cn("id",v),$async$FX)
case 9:return A.j(null,w)}})
return A.k($async$FX,w)},
b2J(d){var x=0,w=A.l(y.H),v
var $async$b2J=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.c($.A7().bX("news").eG(0,A.z(["message",d.b],v,v)).cn("id",d.d),$async$b2J)
case 2:return A.j(null,w)}})
return A.k($async$b2J,w)},
alG(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$alG=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.A7().bX("news")
s=$.dW
s.toString
x=5
return A.c(t.jI(0,A.z(["occasion",s,"message",u,"created_by",$.e_().gdH().c.a],y.N,y.K)).iB(0),$async$alG)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.aTy(X.chv(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.P)(t),++q){p=new A.d3("")
new G.bN_(p).bj(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.d1(o).length===0)continue
r+=o}r=C.e.d1(r)
t=$.A7().bX("log_notifications")
s=$.dW
s.toString
x=8
return A.c(t.jI(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$alG)
case 8:A.bG(d,A.y("Message has been sent.",null),C.a5)
x=1
break
case 7:if(h)A.bG(d,A.y("Message has been created.",null),C.a5)
case 1:return A.j(v,w)}})
return A.k($async$alG,w)},
alH(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$alH=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.e_()
if(s.gdH().d==null)A.a4(A.cA("User must be logged in."))
v=$.A7()
u=v.bX("user_news").k5(0).cn("user",s.gdH().c.a)
t=$.dW
t.toString
x=2
return A.c(u.cn("occasion",t),$async$alH)
case 2:x=3
return A.c(v.bX("user_news").jI(0,A.z(["user",s.gdH().c.a,"news_id",d,"occasion",$.dW],y.N,y.X)).iB(0),$async$alH)
case 3:return A.j(null,w)}})
return A.k($async$alH,w)}},D,A_,F,A0
J=c[1]
A=c[0]
C=c[2]
H=c[187]
I=c[169]
K=c[199]
L=c[208]
M=c[188]
N=c[215]
O=c[210]
P=c[144]
G=c[151]
Q=c[280]
R=c[132]
E=c[103]
S=c[338]
T=c[301]
U=c[214]
V=c[253]
W=c[235]
X=c[94]
Y=c[143]
Z=c[110]
B=a.updateHolder(c[19],B)
D=c[352]
A_=c[243]
F=c[191]
A0=c[196]
B.yq.prototype={
N(){return new B.aKe(A.a([],y.o))}}
B.aKe.prototype={
Z(){this.aj()
this.bg()},
l(){this.ai()},
aW(){this.cm()
this.KI()},
KI(){var x=0,w=A.l(y.H),v=this,u
var $async$KI=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Ce(u,null,y.X)
x=(u==null?null:u.grp())===!0&&!v.e?2:3
break
case 2:x=$.e_().gdH().d!=null&&J.jM(v.d)&&!J.hl(v.d).f?4:5
break
case 4:x=6
return A.c(B.alH(J.hl(v.d).d),$async$KI)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$KI,w)},
bkS(d){H.kS(d,"newsForm",y.X).aQ(0,new B.c_T(this,d),y.P)},
Z5(){var x=0,w=A.l(y.H),v=this,u
var $async$Z5=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(A.XE(),$async$Z5)
case 2:v.B(new u.c_Z(v,e))
return A.j(null,w)}})
return A.k($async$Z5,w)},
nG(){var x=0,w=A.l(y.H),v=this,u
var $async$nG=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(Y.ny("newsOffline",B.cSf(),y.x),$async$nG)
case 2:v.B(new u.c0_(v,e))
return A.j(null,w)}})
return A.k($async$nG,w)},
bg(){var x=0,w=A.l(y.H),v=this
var $async$bg=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.nG(),$async$bg)
case 2:x=3
return A.c(v.Z5(),$async$bg)
case 3:x=4
return A.c(A.u_("newsOffline",v.d),$async$bg)
case 4:v.KI()
return A.j(null,w)}})
return A.k($async$bg,w)},
A(d){var x,w,v=null,u=A.E(d).ax.a===C.w?$.j_():$.v2(),t=F.bu(D.b45,v)
t=M.im(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,Z.brw(),v,!0,v,v,v,v,v,t,v,v,v,1,v)
x=I.le(!0,v,new B.c_X(this),J.bk(this.d),v,v,v,!1,C.F,!1)
w=A.iT()
return K.f4(t,u,new A.cu(C.aI,v,v,new A.cU(new A.ad(0,820,0,1/0),x,v),v),v,v,A.ig(A.Z4(v,S.fR,v,v,!1,new B.c_Y(this,d),v),w),v,v)}}
B.vf.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["S<~>(vf)","B<oW<vf>>(M)","tY(aa<e,@>)"])
B.c_T.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
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
s=B.alG(v.b,p,u,q,t,s,r)
x=4
return A.c(y._.b(s)?s:A.cC(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.c(v.a.bg(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:87}
B.c_Z.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c0_.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c_X.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.u(p.d,e),n=e>0?J.u(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bI(x)===A.bI(w)&&A.bR(x)===A.bR(w)&&A.cR(x)===A.cR(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(O.iR)
if(!u||!v){u=d.ad(y.g).r.a
u===$&&A.b()
u=A.j2("EEEE d.M.y",u.gf8(0))
t=o.a
t.toString
t=u.e7(t)
if(o.f){u=p.c
u.toString
u=A.aU(q,q,A.E(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aU(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aL(A_.hj,A.a1(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.l,q,q,q,q,q,q,D.aj_,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.aU(q,q,A.E(t).cy,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.aU(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a6(Q.iU,A.a1(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.cW(10)
u=A.E(d)
s=o.b
s.toString
r=$.e_().gdH().d
w.push(new A.a6(W.aiT,A.aL(q,A.ax(A.a([new A.a6(L.aW,new P.jU(s,18,!0,q),q),A.ig(new A.a6(C.aG,A.aK(A.a([A.bO(D.alv,A.E(d).ay,q,16),U.a3G,A.a1(C.c.j(o.e),q,q,q,q,q,q,q,A.aU(q,q,A.E(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),N.jB],x),C.j,C.d4,C.i,q),q),r!=null)],x),C.j,C.f,C.i,q,C.p),C.l,q,q,new A.bJ(u.ax.k2,q,q,t,q,q,q,C.S),q,q,q,q,q,q,q),q))
t=A.iT()
w.push(A.ig(E.clr(q,D.amp,new B.c_V(),new B.c_W(p,o,d),y.B),t))
return A.ax(w,C.bZ,C.f,C.i,q,C.p)},
$S:964}
B.c_W.prototype={
$1(d){return this.aGD(d)},
aGD(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.GZ?2:4
break
case 2:x=5
return A.c(B.FX(t),$async$$1)
case 5:A.bG(s,A.y("Message has been removed.",null),C.a5)
x=3
break
case 4:u=R.Bq(A.z(["content",t.b],y.N,y.z))
x=6
return A.c(A0.fI(s,!1).f.jQ(u,y.X).aQ(0,new B.c_U(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.c(v.a.bg(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+0}
B.c_U.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bs(d)
x=4
return A.c(B.b2J(u),$async$$1)
case 4:A.bG(v.b,A.y("Message has been changed.",null),C.a5)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:87}
B.c_V.prototype={
$1(d){var x=y.B
return A.a([E.aw1(F.bu(V.Dw,null),!0,48,D.agz,x),E.aw1(F.bu(D.b3H,null),!0,48,D.GZ,x)],y.h)},
$S:z+1}
B.c_Y.prototype={
$0(){return this.a.bkS(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"cSf","cSg",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.yq,A.G)
x(B.aKe,A.L)
w(A.bC,[B.c_T,B.c_W,B.c_U,B.c_V])
w(A.ck,[B.c_Z,B.c0_,B.c_Y])
x(B.c_X,A.dg)
x(B.vf,A.dP)})()
A.bl(b.typeUniverse,JSON.parse('{"yq":{"G":[],"d":[]},"aKe":{"L":["yq"]}}'))
var y=(function rtii(){var x=A.x
return{B:x("vf"),_:x("S<@>"),t:x("q<aa<e,@>>"),o:x("q<tY>"),h:x("q<oW<vf>>"),p:x("q<d>"),a:x("aa<e,@>"),x:x("tY"),P:x("ay"),K:x("D"),N:x("e"),g:x("o3"),z:x("@"),X:x("D?"),H:x("~")}})();(function constants(){D.GZ=new B.vf(0,"delete")
D.agz=new B.vf(1,"edit")
D.aj_=new A.an(16,8,16,0)
D.alv=new A.aG(58652,"MaterialIcons",null,!1)
D.amp=new A.dA(T.IV,null,null,null,null)
D.b3H=new A.bX("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b45=new A.bX("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_358",e:"endPart",h:b})})($__dart_deferred_initializers__,"7dsCWn6z+WswnCl6pjUnFByWTQs=");