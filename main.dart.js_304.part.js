((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,M,E,N,F,O,P,Q,R,S,T,U,G,V,H,B={
dzT(d,e){return new B.FE(e,d)},
FE:function FE(d,e){this.c=d
this.a=e},
aUK:function aUK(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
cwb:function cwb(d){this.a=d},
cw4:function cw4(d,e){this.a=d
this.b=e},
cwc:function cwc(d,e){this.a=d
this.b=e},
cwd:function cwd(d,e){this.a=d
this.b=e},
cw9:function cw9(d){this.a=d},
cw8:function cw8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cw7:function cw7(d,e,f){this.a=d
this.b=e
this.c=f},
cw5:function cw5(d,e){this.a=d
this.b=e},
cw6:function cw6(){},
cwa:function cwa(d,e){this.a=d
this.b=e},
xY:function xY(d,e){this.a=d
this.b=e},
dzS(d){return A.daV(d)},
Jp(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$Jp=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:n=$.Dj()
m=n.co("news").kB(0,"id")
l=d.d
m=A.mU(m.pJ(m.qC("created_at","lt."+d.a.j(0))),m.$ti.c).aM5("id",l)
v=A.dg()
v.toString
x=2
return A.d(m.dR("occasion",v).bXz(0,"created_at").aLm(1).a2v(),$async$Jp)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.co("user_news").kB(0,"user").dR("news_id",l),$async$Jp)
case 6:t=f
s=A.b([],y.t)
for(n=J.aJ(t),m=y.N,v=y.z,r=J.a1(u);n.t();){q=J.v(n.gM(n),"user")
p=r.h(u,"id")
o=$.eo().a
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.w(["user",q,"news_id",p,"occasion",o],m,v))}n=$.Dj()
x=7
return A.d(n.co("user_news").akr(s),$async$Jp)
case 7:x=4
break
case 5:x=8
return A.d(n.co("user_news").j9(0).dR("news_id",l),$async$Jp)
case 8:case 4:x=9
return A.d(n.co("news").j9(0).dR("id",l),$async$Jp)
case 9:return A.j(null,w)}})
return A.k($async$Jp,w)},
bhD(d){var x=0,w=A.l(y.H),v
var $async$bhD=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.Dj().co("news").eX(0,A.w(["message",d.b],v,v)).dR("id",d.d),$async$bhD)
case 2:return A.j(null,w)}})
return A.k($async$bhD,w)},
aue(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$aue=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Dj().co("news")
s=A.dg()
s.toString
r=$.e0().gdU().c
x=5
return A.d(t.jd(0,A.w(["occasion",s,"message",u,"created_by",(r==null?null:r.r).a],y.N,y.K)).iH(0),$async$aue)
case 5:case 4:x=i?6:7
break
case 6:for(t=I.a_b(A1.a_8(g),"p"),s=t.length,q="",p=0;p<t.length;t.length===s||(0,A.K)(t),++p){r=new A.dr("")
new I.aPC(r).bs(t[p])
r=r.a
o=(r.charCodeAt(0)==0?r:r)+"\n"
if(C.d.bk(o).length===0)continue
q+=o}q=C.d.bk(q)
t=$.Dj().co("log_notifications")
s=A.dg()
s.toString
x=8
return A.d(t.jd(0,A.w(["occasion",s,"to",j,"content",q,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$aue)
case 8:A.bh(d,A.n("Message has been sent.",null,null),C.a2)
x=1
break
case 7:if(h)A.bh(d,A.n("Message has been created.",null,null),C.a2)
case 1:return A.j(v,w)}})
return A.k($async$aue,w)},
auf(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$auf=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.e0()
if(s.gdU().c==null)A.a8(A.cK("User must be logged in."))
v=$.Dj()
u=v.co("user_news").j9(0)
t=s.gdU().c
u=u.dR("user",(t==null?null:t.r).a)
t=A.dg()
t.toString
x=2
return A.d(u.dR("occasion",t),$async$auf)
case 2:v=v.co("user_news")
s=s.gdU().c
x=3
return A.d(v.jd(0,A.w(["user",(s==null?null:s.r).a,"news_id",d,"occasion",A.dg()],y.N,y.X)).iH(0),$async$auf)
case 3:return A.j(null,w)}})
return A.k($async$auf,w)}},D,W,X,Y,Z,A_,I,A0,A1,A2,A3
J=c[1]
A=c[0]
C=c[2]
K=c[167]
L=c[160]
M=c[163]
E=c[162]
N=c[224]
F=c[106]
O=c[228]
P=c[82]
Q=c[226]
R=c[125]
S=c[116]
T=c[170]
U=c[202]
G=c[225]
V=c[95]
H=c[113]
B=a.updateHolder(c[18],B)
D=c[227]
W=c[195]
X=c[164]
Y=c[148]
Z=c[159]
A_=c[143]
I=c[153]
A0=c[223]
A1=c[123]
A2=c[140]
A3=c[174]
B.FE.prototype={
K(){return new B.aUK(A.b([],y.o))}}
B.aUK.prototype={
S(){var x,w=this
w.ac()
x=w.c
x.toString
H.wV(x,!1).f.a_(0,new B.cwb(w))
w.aX()},
l(){this.af()},
MY(){var x=0,w=A.l(y.H),v=this,u
var $async$MY=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Lv(u,null,y.X)
x=(u==null?null:u.gtn())===!0&&!v.e?2:3
break
case 2:x=$.e0().gdU().c!=null&&J.fA(v.d)&&!J.fY(v.d).f?4:5
break
case 4:x=6
return A.d(B.auf(J.fY(v.d).d),$async$MY)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$MY,w)},
bzR(d){L.hu(d,"newsForm",y.X).aN(new B.cw4(this,d),y.P)},
a2l(){var x=0,w=A.l(y.H),v=this,u
var $async$a2l=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a2b(),$async$a2l)
case 2:v.q(new u.cwc(v,e))
return A.j(null,w)}})
return A.k($async$a2l,w)},
a2m(){var x=0,w=A.l(y.H),v=this,u
var $async$a2m=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A_.lJ("newsOffline",B.dU_(),y.x),$async$a2m)
case 2:v.q(new u.cwd(v,e))
return A.j(null,w)}})
return A.k($async$a2m,w)},
aX(){var x=0,w=A.l(y.H),v=this
var $async$aX=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a2m(),$async$aX)
case 2:x=3
return A.d(v.a2l(),$async$aX)
case 3:x=4
return A.d(A.oo("newsOffline",v.d,y.x),$async$aX)
case 4:v.MY()
return A.j(null,w)}})
return A.k($async$aX,w)},
B(d){var x,w,v=null,u=A.B(d).ax.a===C.q?$.i_():$.nZ(),t=A.bO(C.ar)
t=Z.iw(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new V.Mn(v,v),v,!0,v,v,v,v,v,E.bS(A.E("News",v,v,v,v,v,v,v,A.ac(v,v,new A.bD(t.a,t.b,t.c,0.8).bx(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eU(this.d)?new A.W(N.OB,A.aa(A.b([A.aA(G.Fb,A.B(d).ay,v,64),C.X,A.E(A.a_h("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.aX,v,v,v,v)],y.p),C.i,C.bf,C.h,0,v,C.l),v):new A2.FY(new B.cw9(this),v)
w=A.hX()
return X.eP(t,u,new A.cs(C.aT,v,v,new A.cH(new A.ab(0,720,0,1/0),x,v),v),v,A.jV(S.a3G(Q.hi,T.rL,new B.cwa(this,d),v),!1,!1,!1,!1,w),v,v)}}
B.xY.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["V<~>(xY)","D<nx<xY>>(J)","wl(z<f,@>)"])
B.cwb.prototype={
$0(){var x=0,w=A.l(y.H),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(H.wV(t,!1).f.ga_6()===C.b.dj($.Q7(),"news")){u.MY()
u.aX()}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:1}
B.cw4.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
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
s=B.aue(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.c3(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aX(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:126}
B.cwc.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cwd.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cw9.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.b([],u)
for(x=this.a,w=0;w<J.bn(x.d);++w){v=A.b([],u)
if(w!==0)v.push(C.fH)
v.push(new A.ep(new B.cw8(x,w,d,e),null))
C.b.F(t,v)}return A.aa(t,C.bn,C.f,C.h,0,null,C.l)},
$S:269}
B.cw8.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.dM(x)===A.dM(w)&&A.eO(x)===A.eO(w)&&A.jb(x)===A.jb(w)}else v=!1
x=y.p
w=A.b([],x)
if(o===0||!v){o=d.ag(y.g).r.a
o===$&&A.a()
o=A.h0("EEEE d.M.y",o.geV(0))
u=n.a
u.toString
u=o.cn(u)
if(n.f){o=p.c
o.toString
o=A.ac(q,q,A.B(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.N,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.ac(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.N,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ao(W.jh,A.E(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,G.Ot,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.ac(q,q,A.B(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.N,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.ac(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.N,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.W(A0.eJ,A.E(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.b3(10)
o=A.B(d)
t=n.b
t.toString
t=Y.hJ(q,18,t,!0,r.d,r.c)
s=$.e0().gdU().c
w.push(new A.W(C.pp,A.ao(q,A.aa(A.b([new A.W(A3.aU,t,q),A.jV(new A.W(C.ao,A.ad(A.b([A.aA(D.aAg,A.B(d).ay,q,16),K.j0,A.E(C.c.j(n.e),q,q,q,q,q,q,q,A.ac(q,q,A.B(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.N,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.h2],x),C.i,q,C.cz,C.h,0,q),q),!1,!1,!1,!1,s!=null)],x),C.i,C.f,C.h,0,q,C.l),C.k,q,q,new A.b1(o.ax.k2,q,q,u,q,q,q,C.M),q,q,q,q,q,q,q,q),q))
if(A.hX())w.push(P.qy(q,q,q,D.aBH,new B.cw6(),C.t,new B.cw7(p,n,d),C.ao,q,q,q,y.B))
return A.aa(w,C.bn,C.f,C.h,0,q,C.l)},
$S:1391}
B.cw7.prototype={
$1(d){return this.aQS(d)},
aQS(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.ND?2:4
break
case 2:x=5
return A.d(B.Jp(t),$async$$1)
case 5:A.bh(s,A.n("Message has been removed.",null,null),C.a2)
x=3
break
case 4:u=R.pb(A.w(["content",t.b],y.N,y.z),A.dg())
x=6
return A.d(M.fs(s,!1).f.i0(u,y.X).aN(new B.cw5(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aX(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+0}
B.cw5.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bc(d)
x=4
return A.d(B.bhD(u),$async$$1)
case 4:A.bh(v.b,A.n("Message has been changed.",null,null),C.a2)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:126}
B.cw6.prototype={
$1(d){var x=y.B
return A.b([F.lL(E.bS(U.JT,null),!0,48,D.aui,x),F.lL(E.bS(D.bLn,null),!0,48,D.ND,x)],y.h)},
$S:z+1}
B.cwa.prototype={
$0(){return this.a.bzR(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dU_","dzS",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.FE,A.M)
x(B.aUK,A.N)
w(A.cX,[B.cwb,B.cwc,B.cwd,B.cwa])
w(A.cj,[B.cw4,B.cw8,B.cw7,B.cw5,B.cw6])
x(B.cw9,A.eg)
x(B.xY,A.fy)})()
A.cf(b.typeUniverse,JSON.parse('{"FE":{"M":[],"e":[]},"aUK":{"N":["FE"]}}'))
var y=(function rtii(){var x=A.I
return{B:x("xY"),_:x("V<@>"),t:x("u<z<f,@>>"),o:x("u<wl>"),h:x("u<nx<xY>>"),p:x("u<e>"),a:x("z<f,@>"),x:x("wl"),P:x("aD"),K:x("F"),N:x("f"),g:x("kV"),z:x("@"),X:x("F?"),H:x("~")}})();(function constants(){D.ND=new B.xY(0,"delete")
D.aui=new B.xY(1,"edit")
D.aAg=new A.as(58652,"MaterialIcons",null,!1)
D.aBH=new A.ct(O.PL,null,null,null,null)
D.bLn=new A.cA("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["aGXOWMgj5uX9LCYm/NMDGc5CmLo="]=a.current})($__dart_deferred_initializers__);