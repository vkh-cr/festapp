((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_301",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,E,L,M,N,O,P,F,Q,R,S,T,U,V,B={
ddj(d,e){return new B.zG(e,d)},
zG:function zG(d,e){this.c=d
this.a=e},
aPi:function aPi(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
ceJ:function ceJ(d,e){this.a=d
this.b=e},
ceQ:function ceQ(d,e){this.a=d
this.b=e},
ceR:function ceR(d,e){this.a=d
this.b=e},
ceO:function ceO(d){this.a=d},
ceN:function ceN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ceM:function ceM(d,e,f){this.a=d
this.b=e
this.c=f},
ceK:function ceK(d,e){this.a=d
this.b=e},
ceL:function ceL(){},
ceP:function ceP(d,e){this.a=d
this.b=e},
wm:function wm(d,e){this.a=d
this.b=e},
ddi(d){return A.cPQ(d)},
Hz(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$Hz=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:n=$.Bw()
m=n.c4("news").i3(0,"id")
l=d.a
l.toString
v=d.d
m=A.m1(m.pf(m.qf("created_at","lt."+l.j(0))),m.$ti.c).aGV("id",v)
l=A.di()
l.toString
x=2
return A.d(m.cV("occasion",l).bO0(0,"created_at").aGb(1).QD(),$async$Hz)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.c4("user_news").i3(0,"user").cV("news_id",v),$async$Hz)
case 6:t=f
s=A.a([],y.t)
for(n=J.aI(t),m=y.N,l=y.z,r=J.a2(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.fZ
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],m,l))}n=$.Bw()
x=7
return A.d(n.c4("user_news").ahb(s),$async$Hz)
case 7:x=4
break
case 5:x=8
return A.d(n.c4("user_news").iX(0).cV("news_id",v),$async$Hz)
case 8:case 4:x=9
return A.d(n.c4("news").iX(0).cV("id",v),$async$Hz)
case 9:return A.j(null,w)}})
return A.k($async$Hz,w)},
b9m(d){var x=0,w=A.l(y.H),v
var $async$b9m=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.Bw().c4("news").eV(0,A.z(["message",d.b],v,v)).cV("id",d.d),$async$b9m)
case 2:return A.j(null,w)}})
return A.k($async$b9m,w)},
apO(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$apO=A.f(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Bw().c4("news")
s=A.di()
s.toString
x=5
return A.d(t.jh(0,A.z(["occasion",s,"message",u,"created_by",$.dI().gdv().c.a],y.N,y.K)).iA(0),$async$apO)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.Xo(Y.Xm(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.S)(t),++q){p=new A.dg("")
new G.aKs(p).bq(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.bX(o).length===0)continue
r+=o}r=C.e.bX(r)
t=$.Bw().c4("log_notifications")
s=A.di()
s.toString
x=8
return A.d(t.jh(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$apO)
case 8:A.bG(d,A.r("Message has been sent.",null),C.ac)
x=1
break
case 7:if(h)A.bG(d,A.r("Message has been created.",null),C.ac)
case 1:return A.j(v,w)}})
return A.k($async$apO,w)},
apP(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$apP=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dI()
if(s.gdv().d==null)A.a8(A.cK("User must be logged in."))
v=$.Bw()
u=v.c4("user_news").iX(0).cV("user",s.gdv().c.a)
t=A.di()
t.toString
x=2
return A.d(u.cV("occasion",t),$async$apP)
case 2:x=3
return A.d(v.c4("user_news").jh(0,A.z(["user",s.gdv().c.a,"news_id",d,"occasion",A.di()],y.N,y.X)).iA(0),$async$apP)
case 3:return A.j(null,w)}})
return A.k($async$apP,w)}},D,W,X,Y,G,Z,A_,A0
J=c[1]
A=c[0]
C=c[2]
H=c[175]
I=c[167]
K=c[171]
E=c[170]
L=c[286]
M=c[182]
N=c[140]
O=c[106]
P=c[295]
F=c[123]
Q=c[261]
R=c[214]
S=c[172]
T=c[115]
U=c[147]
V=c[150]
B=a.updateHolder(c[19],B)
D=c[311]
W=c[113]
X=c[168]
Y=c[126]
G=c[156]
Z=c[205]
A_=c[234]
A0=c[181]
B.zG.prototype={
M(){return new B.aPi(A.a([],y.o))}}
B.aPi.prototype={
U(){this.ag()
this.b2()},
l(){this.ah()},
b_(){this.c9()
this.LP()},
LP(){var x=0,w=A.l(y.H),v=this,u
var $async$LP=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.DI(u,null,y.X)
x=(u==null?null:u.gt2())===!0&&!v.e?2:3
break
case 2:x=$.dI().gdv().d!=null&&J.je(v.d)&&!J.hA(v.d).f?4:5
break
case 4:x=6
return A.d(B.apP(J.hA(v.d).d),$async$LP)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$LP,w)},
brG(d){I.iO(d,"newsForm",y.X).aM(new B.ceJ(this,d),y.P)},
a03(){var x=0,w=A.l(y.H),v=this,u
var $async$a03=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a_g(),$async$a03)
case 2:v.A(new u.ceQ(v,e))
return A.j(null,w)}})
return A.k($async$a03,w)},
o9(){var x=0,w=A.l(y.H),v=this,u
var $async$o9=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(U.m_("newsOffline",B.dwy(),y.x),$async$o9)
case 2:v.A(new u.ceR(v,e))
return A.j(null,w)}})
return A.k($async$o9,w)},
b2(){var x=0,w=A.l(y.H),v=this
var $async$b2=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.o9(),$async$b2)
case 2:x=3
return A.d(v.a03(),$async$b2)
case 3:x=4
return A.d(A.o8("newsOffline",v.d),$async$b2)
case 4:v.LP()
return A.j(null,w)}})
return A.k($async$b2,w)},
B(d){var x,w,v=null,u=A.C(d).ax.a===C.r?$.i4():$.q1(),t=A.bm(C.at)
t=X.ip(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new T.Ki(v,v),v,!0,v,v,v,v,v,E.br(A.Q("News",v,v,v,v,v,v,v,A.al(v,v,new A.bj(t.a,t.b,t.c,0.8).bk(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v)
x=J.fi(this.d)?new A.a3(L.Mb,A.ag(A.a([A.b1(D.axx,A.C(d).ay,v,64),C.a5,A.Q(A.Xs("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.aZ,v,v,v,v)],y.p),C.j,C.bk,C.i,v,C.l),v):new W.E7(new B.ceO(this),v)
w=A.iN()
return S.f_(t,u,new A.cA(C.aV,v,v,new A.cI(new A.ac(0,720,0,1/0),x,v),v),v,v,A.j9(A.a0K(v,P.hh,v,v,!1,new B.ceP(this,d),v),w),v,v)}}
B.wm.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["Y<~>(wm)","B<mA<wm>>(I)","uR(A<m,@>)"])
B.ceJ.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:y.a.a(d)
u=J.a2(d)
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
s=B.apO(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.c6(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.b2(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:110}
B.ceQ.prototype={
$0(){this.a.d=this.b},
$S:0}
B.ceR.prototype={
$0(){this.a.d=this.b},
$S:0}
B.ceO.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bw(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.hb)
v.push(new A.eU(new B.ceN(x,w,d,e),null))
C.b.H(t,v)}return A.ag(t,C.bi,C.f,C.i,null,C.l)},
$S:219}
B.ceN.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.bu(x)===A.bu(w)&&A.bB(x)===A.bB(w)&&A.cr(x)===A.cr(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.ac(y.g).r.a
o===$&&A.b()
o=A.hm("EEEE d.M.y",o.gf1(0))
u=n.a
u.toString
u=o.dm(u)
if(n.f){o=p.c
o.toString
o=A.al(q,q,A.C(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.al(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ar(Z.f2,A.Q(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.au5,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.al(q,q,A.C(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.al(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a3(A_.fG,A.Q(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bH(10)
o=A.C(d)
t=n.b
t.toString
t=V.ic(q,18,t,!0,r.d,r.c)
s=$.dI().gdv().d
w.push(new A.a3(C.Cr,A.ar(q,A.ag(A.a([new A.a3(H.aW,t,q),A.j9(new A.a3(C.ar,A.at(A.a([A.b1(D.ax4,A.C(d).ay,q,16),A0.GW,A.Q(C.c.j(n.e),q,q,q,q,q,q,q,A.al(q,q,A.C(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.X,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),M.io],x),C.j,C.dm,C.i,0,q),q),s!=null)],x),C.j,C.f,C.i,q,C.l),C.k,q,q,new A.b2(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.iN())w.push(O.zY(q,q,D.ay9,new B.ceL(),new B.ceM(p,n,d),C.ar,q,q,y.B))
return A.ag(w,C.bi,C.f,C.i,q,C.l)},
$S:1181}
B.ceM.prototype={
$1(d){return this.aLt(d)},
aLt(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.Ln?2:4
break
case 2:x=5
return A.d(B.Hz(t),$async$$1)
case 5:A.bG(s,A.r("Message has been removed.",null),C.ac)
x=3
break
case 4:u=N.qj(A.z(["content",t.b],y.N,y.z),A.di())
x=6
return A.d(K.fn(s,!1).f.iv(u,y.X).aM(new B.ceK(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.b2(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+0}
B.ceK.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bc(d)
x=4
return A.d(B.b9m(u),$async$$1)
case 4:A.bG(v.b,A.r("Message has been changed.",null),C.ac)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:110}
B.ceL.prototype={
$1(d){var x=y.B
return A.a([F.pq(E.br(R.HI,null),!0,48,D.aro,x),F.pq(E.br(D.bI6,null),!0,48,D.Ln,x)],y.h)},
$S:z+1}
B.ceP.prototype={
$0(){return this.a.brG(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dwy","ddi",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.zG,A.J)
x(B.aPi,A.O)
w(A.c8,[B.ceJ,B.ceN,B.ceM,B.ceK,B.ceL])
w(A.cZ,[B.ceQ,B.ceR,B.ceP])
x(B.ceO,A.ep)
x(B.wm,A.fe)})()
A.c4(b.typeUniverse,JSON.parse('{"zG":{"J":[],"e":[]},"aPi":{"O":["zG"]}}'))
var y=(function rtii(){var x=A.D
return{B:x("wm"),_:x("Y<@>"),t:x("u<A<m,@>>"),o:x("u<uR>"),h:x("u<mA<wm>>"),p:x("u<e>"),a:x("A<m,@>"),x:x("uR"),P:x("aE"),K:x("G"),N:x("m"),g:x("kr"),z:x("@"),X:x("G?"),H:x("~")}})();(function constants(){D.Ln=new B.wm(0,"delete")
D.aro=new B.wm(1,"edit")
D.au5=new A.ak(16,8,16,0)
D.ax4=new A.aB(58652,"MaterialIcons",null,!1)
D.axx=new A.aB(61075,"MaterialIcons",null,!1)
D.ay9=new A.d3(Q.Nn,null,null,null,null)
D.bI6=new A.ch("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_301",e:"endPart",h:b})})($__dart_deferred_initializers__,"ChpyNj2S8Y3/hyWMKQuhWFo9Q9M=");