((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_306",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,E,M,N,O,P,F,Q,R,S,T,U,V,G,B={
dqk(d,e){return new B.EG(e,d)},
EG:function EG(d,e){this.c=d
this.a=e},
aRF:function aRF(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
cn3:function cn3(d){this.a=d},
cmX:function cmX(d,e){this.a=d
this.b=e},
cn4:function cn4(d,e){this.a=d
this.b=e},
cn5:function cn5(d,e){this.a=d
this.b=e},
cn1:function cn1(d){this.a=d},
cn0:function cn0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cn_:function cn_(d,e,f){this.a=d
this.b=e
this.c=f},
cmY:function cmY(d,e){this.a=d
this.b=e},
cmZ:function cmZ(){},
cn2:function cn2(d,e){this.a=d
this.b=e},
x9:function x9(d,e){this.a=d
this.b=e},
dqj(d){return A.d_4(d)},
In(d){return B.dj6(d)},
dj6(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$In=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:n=$.Cq()
m=n.cb("news").jR(0,"id")
l=d.a
l.toString
v=d.d
m=A.mr(m.ps(m.qo("created_at","lt."+l.j(0))),m.$ti.c).aJ8("id",v)
l=A.d6()
l.toString
x=2
return A.d(m.dv("occasion",l).bSr(0,"created_at").aIo(1).a1f(),$async$In)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.cb("user_news").jR(0,"user").dv("news_id",v),$async$In)
case 6:t=f
s=A.a([],y.t)
for(n=J.aI(t),m=y.N,l=y.z,r=J.a1(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.fT
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.y(["user",q,"news_id",p,"occasion",o],m,l))}n=$.Cq()
x=7
return A.d(n.cb("user_news").aiH(s),$async$In)
case 7:x=4
break
case 5:x=8
return A.d(n.cb("user_news").j0(0).dv("news_id",v),$async$In)
case 8:case 4:x=9
return A.d(n.cb("news").j0(0).dv("id",v),$async$In)
case 9:return A.i(null,w)}})
return A.j($async$In,w)},
bcO(d){return B.dj9(d)},
dj9(d){var x=0,w=A.k(y.H),v
var $async$bcO=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.Cq().cb("news").eY(0,A.y(["message",d.b],v,v)).dv("id",d.d),$async$bcO)
case 2:return A.i(null,w)}})
return A.j($async$bcO,w)},
arM(d,e,f,g,h,i,j){return B.dj7(d,e,f,g,h,i,j)},
dj7(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$arM=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Cq().cb("news")
s=A.d6()
s.toString
r=$.dB().gdn().c
x=5
return A.d(t.jn(0,A.y(["occasion",s,"message",u,"created_by",(r==null?null:r.r).a],y.N,y.K)).iD(0),$async$arM)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.YC(A1.YA(g),"p"),s=t.length,q="",p=0;p<t.length;t.length===s||(0,A.M)(t),++p){r=new A.dd("")
new H.aMP(r).bp(t[p])
r=r.a
o=(r.charCodeAt(0)==0?r:r)+"\n"
if(C.d.bj(o).length===0)continue
q+=o}q=C.d.bj(q)
t=$.Cq().cb("log_notifications")
s=A.d6()
s.toString
x=8
return A.d(t.jn(0,A.y(["occasion",s,"to",j,"content",q,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$arM)
case 8:A.bl(d,A.p("Message has been sent.",null),C.a3)
x=1
break
case 7:if(h)A.bl(d,A.p("Message has been created.",null),C.a3)
case 1:return A.i(v,w)}})
return A.j($async$arM,w)},
arN(d){return B.dj8(d)},
dj8(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$arN=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.dB()
if(s.gdn().c==null)A.a7(A.cB("User must be logged in."))
v=$.Cq()
u=v.cb("user_news").j0(0)
t=s.gdn().c
u=u.dv("user",(t==null?null:t.r).a)
t=A.d6()
t.toString
x=2
return A.d(u.dv("occasion",t),$async$arN)
case 2:v=v.cb("user_news")
s=s.gdn().c
x=3
return A.d(v.jn(0,A.y(["user",(s==null?null:s.r).a,"news_id",d,"occasion",A.d6()],y.N,y.X)).iD(0),$async$arN)
case 3:return A.i(null,w)}})
return A.j($async$arN,w)}},D,W,X,Y,Z,A_,H,A0,A1,A2,A3
J=c[1]
A=c[0]
C=c[2]
I=c[175]
K=c[163]
L=c[167]
E=c[166]
M=c[228]
N=c[127]
O=c[82]
P=c[230]
F=c[106]
Q=c[232]
R=c[119]
S=c[178]
T=c[207]
U=c[229]
V=c[95]
G=c[114]
B=a.updateHolder(c[18],B)
D=c[231]
W=c[199]
X=c[168]
Y=c[150]
Z=c[164]
A_=c[146]
H=c[156]
A0=c[227]
A1=c[124]
A2=c[141]
A3=c[170]
B.EG.prototype={
M(){return new B.aRF(A.a([],y.o))}}
B.aRF.prototype={
T(){var x,w=this
w.ah()
x=w.c
x.toString
G.yd(x,!1).f.a1(0,new B.cn3(w))
w.aU()},
l(){this.ai()},
Mj(){var x=0,w=A.k(y.H),v=this,u
var $async$Mj=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Ez(u,null,y.X)
x=(u==null?null:u.gt5())===!0&&!v.e?2:3
break
case 2:x=$.dB().gdn().c!=null&&J.fF(v.d)&&!J.h3(v.d).f?4:5
break
case 4:x=6
return A.d(B.arN(J.h3(v.d).d),$async$Mj)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$Mj,w)},
bvO(d){K.i3(d,"newsForm",y.X).aJ(new B.cmX(this,d),y.P)},
a17(){var x=0,w=A.k(y.H),v=this,u
var $async$a17=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a0y(),$async$a17)
case 2:v.u(new u.cn4(v,e))
return A.i(null,w)}})
return A.j($async$a17,w)},
y0(){var x=0,w=A.k(y.H),v=this,u
var $async$y0=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A_.ld("newsOffline",B.dKj(),y.x),$async$y0)
case 2:v.u(new u.cn5(v,e))
return A.i(null,w)}})
return A.j($async$y0,w)},
aU(){var x=0,w=A.k(y.H),v=this
var $async$aU=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.y0(),$async$aU)
case 2:x=3
return A.d(v.a17(),$async$aU)
case 3:x=4
return A.d(A.nS("newsOffline",v.d,y.x),$async$aU)
case 4:v.Mj()
return A.i(null,w)}})
return A.j($async$aU,w)},
B(d){var x,w,v=null,u=A.C(d).ax.a===C.q?$.ia():$.pi(),t=A.bI(C.au)
t=Z.it(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new V.Lc(v,v),v,!0,v,v,v,v,v,E.bC(A.H("News",v,v,v,v,v,v,v,A.af(v,v,new A.bw(t.a,t.b,t.c,0.8).bq(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.ex(this.d)?new A.a0(M.Na,A.ae(A.a([A.aM(U.Os,A.C(d).ay,v,64),C.Z,A.H(A.YI("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.b_,v,v,v,v)],y.p),C.j,C.bm,C.i,0,v,C.m),v):new A2.F0(new B.cn1(this),v)
w=A.hE()
return X.eX(t,u,new A.cg(C.aT,v,v,new A.cF(new A.ab(0,720,0,1/0),x,v),v),v,v,A.jy(R.a22(P.hA,S.r0,new B.cn2(this,d),v),w),v,v)}}
B.x9.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["X<~>(x9)","D<n4<x9>>(G)","vI(A<l,@>)"])
B.cn3.prototype={
$0(){var x=0,w=A.k(y.H),v=this,u,t
var $async$$0=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.yd(t,!1).f.gZ8()===C.b.di($.OF(),"news")){u.Mj()
u.aU()}return A.i(null,w)}})
return A.j($async$$0,w)},
$S:2}
B.cmX.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:y.a.a(d)
u=J.a1(d)
t=u.h(d,"add_to_news")
if(t==null)t=!0
s=u.h(d,"with_notification")
s.toString
r=u.h(d,"to")
q=u.h(d,"content")
q.toString
p=u.h(d,"heading")
u=u.h(d,"heading_default")
u.toString
s=B.arM(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.c9(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aU(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:120}
B.cn4.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cn5.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cn1.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bj(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.fm)
v.push(new A.eK(new B.cn0(x,w,d,e),null))
C.b.H(t,v)}return A.ae(t,C.bi,C.f,C.i,0,null,C.m)},
$S:219}
B.cn0.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.dG(x)===A.dG(w)&&A.eC(x)===A.eC(w)&&A.iV(x)===A.iV(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.ac(y.g).r.a
o===$&&A.b()
o=A.h7("EEEE d.M.y",o.geW(0))
u=n.a
u.toString
u=o.cF(u)
if(n.f){o=p.c
o.toString
o=A.af(q,q,A.C(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.U,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.af(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.U,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ar(W.iV,A.H(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.avS,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.af(q,q,A.C(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.U,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.af(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.U,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a0(A0.fo,A.H(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bs(10)
o=A.C(d)
t=n.b
t.toString
t=Y.hP(q,18,t,!0,r.d,r.c)
s=$.dB().gdn().c
w.push(new A.a0(C.rU,A.ar(q,A.ae(A.a([new A.a0(A3.aQ,t,q),A.jy(new A.a0(C.aq,A.aq(A.a([A.aM(D.az2,A.C(d).ay,q,16),I.qb,A.H(C.c.j(n.e),q,q,q,q,q,q,q,A.af(q,q,A.C(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.U,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.hi],x),C.j,C.dd,C.i,0,q),q),s!=null)],x),C.j,C.f,C.i,0,q,C.m),C.k,q,q,new A.b3(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.hE())w.push(O.tU(q,q,q,D.aAb,new B.cmZ(),C.o,new B.cn_(p,n,d),C.aq,q,q,q,y.B))
return A.ae(w,C.bi,C.f,C.i,0,q,C.m)},
$S:1269}
B.cn_.prototype={
$1(d){return this.aNG(d)},
aNG(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.Mk?2:4
break
case 2:x=5
return A.d(B.In(t),$async$$1)
case 5:A.bl(s,A.p("Message has been removed.",null),C.a3)
x=3
break
case 4:u=N.pH(A.y(["content",t.b],y.N,y.z),A.d6())
x=6
return A.d(L.fj(s,!1).f.i7(u,y.X).aJ(new B.cmY(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aU(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.cmY.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.b9(d)
x=4
return A.d(B.bcO(u),$async$$1)
case 4:A.bl(v.b,A.p("Message has been changed.",null),C.a3)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:120}
B.cmZ.prototype={
$1(d){var x=y.B
return A.a([F.mp(E.bC(T.ID,null),!0,48,D.at3,x),F.mp(E.bC(D.bJO,null),!0,48,D.Mk,x)],y.h)},
$S:z+1}
B.cn2.prototype={
$0(){return this.a.bvO(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dKj","dqj",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.EG,A.L)
x(B.aRF,A.N)
w(A.d_,[B.cn3,B.cn4,B.cn5,B.cn2])
w(A.ch,[B.cmX,B.cn0,B.cn_,B.cmY,B.cmZ])
x(B.cn1,A.ey)
x(B.x9,A.fm)})()
A.ce(b.typeUniverse,JSON.parse('{"EG":{"L":[],"e":[]},"aRF":{"N":["EG"]}}'))
var y=(function rtii(){var x=A.E
return{B:x("x9"),_:x("X<@>"),t:x("u<A<l,@>>"),o:x("u<vI>"),h:x("u<n4<x9>>"),p:x("u<e>"),a:x("A<l,@>"),x:x("vI"),P:x("aD"),K:x("K"),N:x("l"),g:x("kv"),z:x("@"),X:x("K?"),H:x("~")}})();(function constants(){D.Mk=new B.x9(0,"delete")
D.at3=new B.x9(1,"edit")
D.avS=new A.aj(16,8,16,0)
D.az2=new A.az(58652,"MaterialIcons",null,!1)
D.aAb=new A.cV(Q.Oi,null,null,null,null)
D.bJO=new A.cx("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_306",e:"endPart",h:b})})($__dart_deferred_initializers__,"YALDwP2fTXrOgNtqQveYR540uAY=");