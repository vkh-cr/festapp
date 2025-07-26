((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_304",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,M,E,N,F,O,P,Q,R,S,T,U,G,V,H,B={
dzz(d,e){return new B.Fg(e,d)},
Fg:function Fg(d,e){this.c=d
this.a=e},
aTr:function aTr(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
cu8:function cu8(d){this.a=d},
cu1:function cu1(d,e){this.a=d
this.b=e},
cu9:function cu9(d,e){this.a=d
this.b=e},
cua:function cua(d,e){this.a=d
this.b=e},
cu6:function cu6(d){this.a=d},
cu5:function cu5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cu4:function cu4(d,e,f){this.a=d
this.b=e
this.c=f},
cu2:function cu2(d,e){this.a=d
this.b=e},
cu3:function cu3(){},
cu7:function cu7(d,e){this.a=d
this.b=e},
xG:function xG(d,e){this.a=d
this.b=e},
dzy(d){return A.d7W(d)},
J3(d){return B.dsa(d)},
dsa(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$J3=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:n=$.CZ()
m=n.cg("news").kk(0,"id")
l=d.a
l.toString
v=d.d
m=A.mO(m.pG(m.qA("created_at","lt."+l.j(0))),m.$ti.c).aKP("id",v)
l=A.df()
l.toString
x=2
return A.d(m.dE("occasion",l).bV7(0,"created_at").aK6(1).a21(),$async$J3)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.cg("user_news").kk(0,"user").dE("news_id",v),$async$J3)
case 6:t=f
s=A.a([],y.t)
for(n=J.aM(t),m=y.N,l=y.z,r=J.a_(u);n.t();){q=J.v(n.gM(n),"user")
p=r.h(u,"id")
o=$.eq().a
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.w(["user",q,"news_id",p,"occasion",o],m,l))}n=$.CZ()
x=7
return A.d(n.cg("user_news").ajC(s),$async$J3)
case 7:x=4
break
case 5:x=8
return A.d(n.cg("user_news").j4(0).dE("news_id",v),$async$J3)
case 8:case 4:x=9
return A.d(n.cg("news").j4(0).dE("id",v),$async$J3)
case 9:return A.i(null,w)}})
return A.j($async$J3,w)},
bgb(d){return B.dsd(d)},
dsd(d){var x=0,w=A.k(y.H),v
var $async$bgb=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.CZ().cg("news").eY(0,A.w(["message",d.b],v,v)).dE("id",d.d),$async$bgb)
case 2:return A.i(null,w)}})
return A.j($async$bgb,w)},
atq(d,e,f,g,h,i,j){return B.dsb(d,e,f,g,h,i,j)},
dsb(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$atq=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.CZ().cg("news")
s=A.df()
s.toString
r=$.e2().gdO().c
x=5
return A.d(t.iN(0,A.w(["occasion",s,"message",u,"created_by",(r==null?null:r.r).a],y.N,y.K)).iG(0),$async$atq)
case 5:case 4:x=i?6:7
break
case 6:for(t=I.ZN(A1.ZK(g),"p"),s=t.length,q="",p=0;p<t.length;t.length===s||(0,A.L)(t),++p){r=new A.dm("")
new I.aOz(r).bq(t[p])
r=r.a
o=(r.charCodeAt(0)==0?r:r)+"\n"
if(C.d.bi(o).length===0)continue
q+=o}q=C.d.bi(q)
t=$.CZ().cg("log_notifications")
s=A.df()
s.toString
x=8
return A.d(t.iN(0,A.w(["occasion",s,"to",j,"content",q,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$atq)
case 8:A.bh(d,A.n("Message has been sent.",null,null),C.a4)
x=1
break
case 7:if(h)A.bh(d,A.n("Message has been created.",null,null),C.a4)
case 1:return A.i(v,w)}})
return A.j($async$atq,w)},
atr(d){return B.dsc(d)},
dsc(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$atr=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.e2()
if(s.gdO().c==null)A.a9(A.cJ("User must be logged in."))
v=$.CZ()
u=v.cg("user_news").j4(0)
t=s.gdO().c
u=u.dE("user",(t==null?null:t.r).a)
t=A.df()
t.toString
x=2
return A.d(u.dE("occasion",t),$async$atr)
case 2:v=v.cg("user_news")
s=s.gdO().c
x=3
return A.d(v.iN(0,A.w(["user",(s==null?null:s.r).a,"news_id",d,"occasion",A.df()],y.N,y.X)).iG(0),$async$atr)
case 3:return A.i(null,w)}})
return A.j($async$atr,w)}},D,W,X,Y,Z,A_,I,A0,A1,A2,A3
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
B.Fg.prototype={
K(){return new B.aTr(A.a([],y.o))}}
B.aTr.prototype={
U(){var x,w=this
w.aa()
x=w.c
x.toString
H.wG(x,!1).f.a0(0,new B.cu8(w))
w.aV()},
l(){this.af()},
MG(){var x=0,w=A.k(y.H),v=this,u
var $async$MG=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Lb(u,null,y.X)
x=(u==null?null:u.gtg())===!0&&!v.e?2:3
break
case 2:x=$.e2().gdO().c!=null&&J.fD(v.d)&&!J.hl(v.d).f?4:5
break
case 4:x=6
return A.d(B.atr(J.hl(v.d).d),$async$MG)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$MG,w)},
by0(d){L.hr(d,"newsForm",y.X).aJ(new B.cu1(this,d),y.P)},
a1R(){var x=0,w=A.k(y.H),v=this,u
var $async$a1R=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a1L(),$async$a1R)
case 2:v.q(new u.cu9(v,e))
return A.i(null,w)}})
return A.j($async$a1R,w)},
a1S(){var x=0,w=A.k(y.H),v=this,u
var $async$a1S=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A_.lC("newsOffline",B.dUh(),y.x),$async$a1S)
case 2:v.q(new u.cua(v,e))
return A.i(null,w)}})
return A.j($async$a1S,w)},
aV(){var x=0,w=A.k(y.H),v=this
var $async$aV=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a1S(),$async$aV)
case 2:x=3
return A.d(v.a1R(),$async$aV)
case 3:x=4
return A.d(A.oh("newsOffline",v.d,y.x),$async$aV)
case 4:v.MG()
return A.i(null,w)}})
return A.j($async$aV,w)},
B(d){var x,w,v=null,u=A.B(d).ax.a===C.q?$.i0():$.nT(),t=A.bO(C.as)
t=Z.iz(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new V.M0(v,v),v,!0,v,v,v,v,v,E.bN(A.E("News",v,v,v,v,v,v,v,A.ac(v,v,new A.by(t.a,t.b,t.c,0.8).bu(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eG(this.d)?new A.X(N.NV,A.aa(A.a([A.aB(G.Ew,A.B(d).ay,v,64),C.X,A.E(A.ZT("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.aZ,v,v,v,v)],y.p),C.i,C.bf,C.h,0,v,C.l),v):new A2.FB(new B.cu6(this),v)
w=A.hU()
return X.eL(t,u,new A.cs(C.aV,v,v,new A.cC(new A.ab(0,720,0,1/0),x,v),v),v,A.jR(S.a3e(Q.hg,T.rm,new B.cu7(this,d),v),w),v,v)}}
B.xG.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["V<~>(xG)","D<ns<xG>>(J)","wc(z<l,@>)"])
B.cu8.prototype={
$0(){var x=0,w=A.k(y.H),v=this,u,t
var $async$$0=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(H.wG(t,!1).f.gZN()===C.b.cA($.PE(),"news")){u.MG()
u.aV()}return A.i(null,w)}})
return A.j($async$$0,w)},
$S:1}
B.cu1.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:y.a.a(d)
u=J.a_(d)
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
s=B.atq(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.c1(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aV(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:123}
B.cu9.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cua.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cu6.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bi(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.fC)
v.push(new A.es(new B.cu5(x,w,d,e),null))
C.b.E(t,v)}return A.aa(t,C.bp,C.f,C.h,0,null,C.l)},
$S:268}
B.cu5.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.dM(x)===A.dM(w)&&A.eK(x)===A.eK(w)&&A.j9(x)===A.j9(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.a8(y.g).r.a
o===$&&A.b()
o=A.fV("EEEE d.M.y",o.geW(0))
u=n.a
u.toString
u=o.cl(u)
if(n.f){o=p.c
o.toString
o=A.ac(q,q,A.B(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.ac(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aq(W.j7,A.E(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,G.NN,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.ac(q,q,A.B(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.ac(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.X(A0.f2,A.E(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.b4(10)
o=A.B(d)
t=n.b
t.toString
t=Y.hE(q,18,t,!0,r.d,r.c)
s=$.e2().gdO().c
w.push(new A.X(C.p8,A.aq(q,A.aa(A.a([new A.X(A3.aW,t,q),A.jR(new A.X(C.aq,A.ae(A.a([A.aB(D.azR,A.B(d).ay,q,16),K.iT,A.E(C.c.j(n.e),q,q,q,q,q,q,q,A.ac(q,q,A.B(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.fX],x),C.i,q,C.cy,C.h,0,q),q),s!=null)],x),C.i,C.f,C.h,0,q,C.l),C.k,q,q,new A.b2(o.ax.k2,q,q,u,q,q,q,C.M),q,q,q,q,q,q,q,q),q))
if(A.hU())w.push(P.qr(q,q,q,D.aBd,new B.cu3(),C.r,new B.cu4(p,n,d),C.aq,q,q,q,y.B))
return A.aa(w,C.bp,C.f,C.h,0,q,C.l)},
$S:1361}
B.cu4.prototype={
$1(d){return this.aPt(d)},
aPt(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.MZ?2:4
break
case 2:x=5
return A.d(B.J3(t),$async$$1)
case 5:A.bh(s,A.n("Message has been removed.",null,null),C.a4)
x=3
break
case 4:u=R.p8(A.w(["content",t.b],y.N,y.z),A.df())
x=6
return A.d(M.fg(s,!1).f.i0(u,y.X).aJ(new B.cu2(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aV(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.cu2.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bf(d)
x=4
return A.d(B.bgb(u),$async$$1)
case 4:A.bh(v.b,A.n("Message has been changed.",null,null),C.a4)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:123}
B.cu3.prototype={
$1(d){var x=y.B
return A.a([F.lE(E.bN(U.Jf,null),!0,48,D.atL,x),F.lE(E.bN(D.bKF,null),!0,48,D.MZ,x)],y.h)},
$S:z+1}
B.cu7.prototype={
$0(){return this.a.by0(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dUh","dzy",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Fg,A.M)
x(B.aTr,A.N)
w(A.cV,[B.cu8,B.cu9,B.cua,B.cu7])
w(A.cl,[B.cu1,B.cu5,B.cu4,B.cu2,B.cu3])
x(B.cu6,A.eu)
x(B.xG,A.fv)})()
A.cg(b.typeUniverse,JSON.parse('{"Fg":{"M":[],"e":[]},"aTr":{"N":["Fg"]}}'))
var y=(function rtii(){var x=A.F
return{B:x("xG"),_:x("V<@>"),t:x("u<z<l,@>>"),o:x("u<wc>"),h:x("u<ns<xG>>"),p:x("u<e>"),a:x("z<l,@>"),x:x("wc"),P:x("aE"),K:x("H"),N:x("l"),g:x("kP"),z:x("@"),X:x("H?"),H:x("~")}})();(function constants(){D.MZ=new B.xG(0,"delete")
D.atL=new B.xG(1,"edit")
D.azR=new A.at(58652,"MaterialIcons",null,!1)
D.aBd=new A.cD(O.P4,null,null,null,null)
D.bKF=new A.cw("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_304",e:"endPart",h:b})})($__dart_deferred_initializers__,"QgmmQrgu9RWD7PawqERkk2Y+wgs=");