((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_339",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,M,N,O,P,G,Q,R,E,S,T,U,V,W,X,Y,Z,B={
cRM(d,e){return new B.yn(e,d)},
yn:function yn(d,e){this.c=d
this.a=e},
aK6:function aK6(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
c_x:function c_x(d,e){this.a=d
this.b=e},
c_D:function c_D(d,e){this.a=d
this.b=e},
c_E:function c_E(d,e){this.a=d
this.b=e},
c_B:function c_B(d){this.a=d},
c_A:function c_A(d,e,f){this.a=d
this.b=e
this.c=f},
c_y:function c_y(d,e){this.a=d
this.b=e},
c_z:function c_z(){},
c_C:function c_C(d,e){this.a=d
this.b=e},
vb:function vb(d,e){this.a=d
this.b=e},
cRL(d){return A.cv2(d)},
FS(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o
var $async$FS=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:q=$.A4()
p=q.bZ("news").hm(0,"id")
o=d.a
o.toString
v=d.d
p=A.q4(p.w3(p.wu("created_at","lt."+o.j(0))),p.$ti.c).aCg("id",v)
o=$.dW
o.toString
x=2
return A.c(p.cr("occasion",o).bFp(0,"created_at").aBz(1).Ph(),$async$FS)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.c(q.bZ("user_news").hm(0,"user").cr("news_id",v),$async$FS)
case 6:t=f
s=A.a([],y.t)
for(q=J.aH(t),p=J.a3(u),o=y.N,r=y.z;q.q();)s.push(A.y(["user",J.u(q.gL(q),"user"),"news_id",p.i(u,"id")],o,r))
q=$.A4()
x=7
return A.c(q.bZ("user_news").adQ(s).iB(0),$async$FS)
case 7:x=4
break
case 5:x=8
return A.c(q.bZ("user_news").k5(0).cr("news_id",v),$async$FS)
case 8:case 4:x=9
return A.c(q.bZ("news").k5(0).cr("id",v),$async$FS)
case 9:return A.j(null,w)}})
return A.k($async$FS,w)},
b2x(d){var x=0,w=A.l(y.H),v
var $async$b2x=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.c($.A4().bZ("news").eG(0,A.y(["message",d.b],v,v)).cr("id",d.d),$async$b2x)
case 2:return A.j(null,w)}})
return A.k($async$b2x,w)},
alA(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$alA=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.A4().bZ("news")
s=$.dW
s.toString
x=5
return A.c(t.jI(0,A.y(["occasion",s,"message",u,"created_by",$.e_().gdH().c.a],y.N,y.K)).iB(0),$async$alA)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.aTq(X.ch2(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.Q)(t),++q){p=new A.d3("")
new G.bMI(p).bj(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.dl(o).length===0)continue
r+=o}r=C.e.dl(r)
t=$.A4().bZ("log_notifications")
s=$.dW
s.toString
x=8
return A.c(t.jI(0,A.y(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$alA)
case 8:A.bE(d,A.z("Message has been sent.",null),C.a4)
x=1
break
case 7:if(h)A.bE(d,A.z("Message has been created.",null),C.a4)
case 1:return A.j(v,w)}})
return A.k($async$alA,w)},
alB(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$alB=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.e_()
if(s.gdH().d==null)A.a4(A.cA("User must be logged in."))
v=$.A4()
u=v.bZ("user_news").k5(0).cr("user",s.gdH().c.a)
t=$.dW
t.toString
x=2
return A.c(u.cr("occasion",t),$async$alB)
case 2:x=3
return A.c(v.bZ("user_news").jI(0,A.y(["user",s.gdH().c.a,"news_id",d,"occasion",$.dW],y.N,y.X)).iB(0),$async$alB)
case 3:return A.j(null,w)}})
return A.k($async$alB,w)}},D,A_,F,H
J=c[1]
A=c[0]
C=c[2]
I=c[184]
K=c[167]
L=c[185]
M=c[204]
N=c[211]
O=c[141]
P=c[206]
G=c[149]
Q=c[280]
R=c[130]
E=c[101]
S=c[326]
T=c[297]
U=c[210]
V=c[247]
W=c[230]
X=c[94]
Y=c[140]
Z=c[109]
B=a.updateHolder(c[18],B)
D=c[339]
A_=c[238]
F=c[190]
H=c[195]
B.yn.prototype={
N(){return new B.aK6(A.a([],y.o))}}
B.aK6.prototype={
Y(){this.aj()
this.bf()},
l(){this.ai()},
aW(){this.cm()
this.KH()},
KH(){var x=0,w=A.l(y.H),v=this,u
var $async$KH=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Cb(u,null,y.X)
x=(u==null?null:u.gro())===!0&&!v.e?2:3
break
case 2:x=$.e_().gdH().d!=null&&J.jI(v.d)&&!J.hj(v.d).f?4:5
break
case 4:x=6
return A.c(B.alB(J.hj(v.d).d),$async$KH)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$KH,w)},
bkO(d){I.lf(d,"newsForm",y.X).aQ(0,new B.c_x(this,d),y.P)},
Z4(){var x=0,w=A.l(y.H),v=this,u
var $async$Z4=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(A.XA(),$async$Z4)
case 2:v.B(new u.c_D(v,e))
return A.j(null,w)}})
return A.k($async$Z4,w)},
nE(){var x=0,w=A.l(y.H),v=this,u
var $async$nE=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(Y.nu("newsOffline",B.cRK(),y.x),$async$nE)
case 2:v.B(new u.c_E(v,e))
return A.j(null,w)}})
return A.k($async$nE,w)},
bf(){var x=0,w=A.l(y.H),v=this
var $async$bf=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.nE(),$async$bf)
case 2:x=3
return A.c(v.Z4(),$async$bf)
case 3:x=4
return A.c(A.tU("newsOffline",v.d),$async$bf)
case 4:v.KH()
return A.j(null,w)}})
return A.k($async$bf,w)},
A(d){var x,w,v=null,u=A.E(d).ax.a===C.w?$.iW():$.uX(),t=F.bt(D.b3T,v)
t=L.iE(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,Z.brm(),v,!0,v,v,v,v,v,t,v,v,v,1,v)
x=K.lb(!0,v,new B.c_B(this),J.bk(this.d),v,v,v,!1,C.G,!1)
w=A.iP()
return H.fc(t,u,new A.ct(C.aI,v,v,new A.cT(new A.ad(0,820,0,1/0),x,v),v),v,v,A.i9(A.Z0(v,S.fR,v,v,!1,new B.c_C(this,d),v),w),v,v)}}
B.vb.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["S<~>(vb)","B<oQ<vb>>(M)","tS(aa<e,@>)"])
B.c_x.prototype={
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
s=B.alA(v.b,p,u,q,t,s,r)
x=4
return A.c(y._.b(s)?s:A.cC(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.c(v.a.bf(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:92}
B.c_D.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c_E.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c_B.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.u(p.d,e),n=e>0?J.u(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bI(x)===A.bI(w)&&A.bS(x)===A.bS(w)&&A.cP(x)===A.cP(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(P.oO)
if(!u||!v){u=d.ad(y.g).r.a
u===$&&A.b()
u=A.iZ("EEEE d.M.y",u.gf8(0))
t=o.a
t.toString
t=u.e7(t)
if(o.f){u=p.c
u.toString
u=A.aU(q,q,A.E(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aU(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aK(A_.hi,A.a1(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.l,q,q,q,q,q,q,D.aiM,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.aU(q,q,A.E(t).cy,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.aU(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a6(Q.iT,A.a1(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.cW(10)
u=A.E(d)
s=o.b
s.toString
r=$.e_().gdH().d
w.push(new A.a6(W.aiF,A.aK(q,A.aA(A.a([new A.a6(M.aY,new O.jQ(s,18,!0,q),q),A.i9(new A.a6(C.aG,A.aM(A.a([A.bR(D.alo,A.E(d).ay,q,16),U.a3q,A.a1(C.c.j(o.e),q,q,q,q,q,q,q,A.aU(q,q,A.E(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),N.jz],x),C.j,C.d2,C.i,q),q),r!=null)],x),C.j,C.f,C.i,q,C.q),C.l,q,q,new A.bJ(u.ax.k2,q,q,t,q,q,q,C.R),q,q,q,q,q,q,q),q))
t=A.iP()
w.push(A.i9(E.cl_(q,D.amk,new B.c_z(),new B.c_A(p,o,d),y.B),t))
return A.aA(w,C.bZ,C.f,C.i,q,C.q)},
$S:960}
B.c_A.prototype={
$1(d){return this.aGz(d)},
aGz(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.GT?2:4
break
case 2:x=5
return A.c(B.FS(t),$async$$1)
case 5:A.bE(s,A.z("Message has been removed.",null),C.a4)
x=3
break
case 4:u=R.Bn(A.y(["content",t.b],y.N,y.z))
x=6
return A.c(H.fI(s,!1).f.jQ(u,y.X).aQ(0,new B.c_y(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.c(v.a.bf(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+0}
B.c_y.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.br(d)
x=4
return A.c(B.b2x(u),$async$$1)
case 4:A.bE(v.b,A.z("Message has been changed.",null),C.a4)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:92}
B.c_z.prototype={
$1(d){var x=y.B
return A.a([E.avV(F.bt(V.Dq,null),!0,48,D.agj,x),E.avV(F.bt(D.b3w,null),!0,48,D.GT,x)],y.h)},
$S:z+1}
B.c_C.prototype={
$0(){return this.a.bkO(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"cRK","cRL",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.yn,A.G)
x(B.aK6,A.L)
w(A.bG,[B.c_x,B.c_A,B.c_y,B.c_z])
w(A.ck,[B.c_D,B.c_E,B.c_C])
x(B.c_B,A.dg)
x(B.vb,A.dP)})()
A.bo(b.typeUniverse,JSON.parse('{"yn":{"G":[],"d":[]},"aK6":{"L":["yn"]}}'))
var y=(function rtii(){var x=A.x
return{B:x("vb"),_:x("S<@>"),t:x("q<aa<e,@>>"),o:x("q<tS>"),h:x("q<oQ<vb>>"),p:x("q<d>"),a:x("aa<e,@>"),x:x("tS"),P:x("ax"),K:x("D"),N:x("e"),g:x("nZ"),z:x("@"),X:x("D?"),H:x("~")}})();(function constants(){D.GT=new B.vb(0,"delete")
D.agj=new B.vb(1,"edit")
D.aiM=new A.an(16,8,16,0)
D.alo=new A.aG(58652,"MaterialIcons",null,!1)
D.amk=new A.dz(T.IJ,null,null,null,null)
D.b3w=new A.cf("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b3T=new A.cf("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_339",e:"endPart",h:b})})($__dart_deferred_initializers__,"3UDWeS8cXvdazg7LkufloNMBhQU=");