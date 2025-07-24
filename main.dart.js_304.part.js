((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_304",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,E,M,F,N,O,P,Q,R,S,T,U,V,G,B={
dzc(d,e){return new B.Fe(e,d)},
Fe:function Fe(d,e){this.c=d
this.a=e},
aTn:function aTn(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
ctM:function ctM(d){this.a=d},
ctF:function ctF(d,e){this.a=d
this.b=e},
ctN:function ctN(d,e){this.a=d
this.b=e},
ctO:function ctO(d,e){this.a=d
this.b=e},
ctK:function ctK(d){this.a=d},
ctJ:function ctJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ctI:function ctI(d,e,f){this.a=d
this.b=e
this.c=f},
ctG:function ctG(d,e){this.a=d
this.b=e},
ctH:function ctH(){},
ctL:function ctL(d,e){this.a=d
this.b=e},
xF:function xF(d,e){this.a=d
this.b=e},
dzb(d){return A.d7B(d)},
J3(d){return B.drO(d)},
drO(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$J3=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:n=$.CW()
m=n.cg("news").kk(0,"id")
l=d.a
l.toString
v=d.d
m=A.mO(m.pG(m.qA("created_at","lt."+l.j(0))),m.$ti.c).aKK("id",v)
l=A.df()
l.toString
x=2
return A.d(m.dE("occasion",l).bV3(0,"created_at").aK1(1).a20(),$async$J3)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.cg("user_news").kk(0,"user").dE("news_id",v),$async$J3)
case 6:t=f
s=A.a([],y.t)
for(n=J.aN(t),m=y.N,l=y.z,r=J.a_(u);n.t();){q=J.v(n.gM(n),"user")
p=r.h(u,"id")
o=$.eA().a
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.w(["user",q,"news_id",p,"occasion",o],m,l))}n=$.CW()
x=7
return A.d(n.cg("user_news").ajB(s),$async$J3)
case 7:x=4
break
case 5:x=8
return A.d(n.cg("user_news").j4(0).dE("news_id",v),$async$J3)
case 8:case 4:x=9
return A.d(n.cg("news").j4(0).dE("id",v),$async$J3)
case 9:return A.i(null,w)}})
return A.j($async$J3,w)},
bg3(d){return B.drR(d)},
drR(d){var x=0,w=A.k(y.H),v
var $async$bg3=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.CW().cg("news").eX(0,A.w(["message",d.b],v,v)).dE("id",d.d),$async$bg3)
case 2:return A.i(null,w)}})
return A.j($async$bg3,w)},
atm(d,e,f,g,h,i,j){return B.drP(d,e,f,g,h,i,j)},
drP(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$atm=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.CW().cg("news")
s=A.df()
s.toString
r=$.e2().gdO().c
x=5
return A.d(t.iN(0,A.w(["occasion",s,"message",u,"created_by",(r==null?null:r.r).a],y.N,y.K)).iG(0),$async$atm)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.ZL(A1.ZI(g),"p"),s=t.length,q="",p=0;p<t.length;t.length===s||(0,A.L)(t),++p){r=new A.dm("")
new H.aOv(r).bq(t[p])
r=r.a
o=(r.charCodeAt(0)==0?r:r)+"\n"
if(C.d.bh(o).length===0)continue
q+=o}q=C.d.bh(q)
t=$.CW().cg("log_notifications")
s=A.df()
s.toString
x=8
return A.d(t.iN(0,A.w(["occasion",s,"to",j,"content",q,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$atm)
case 8:A.bh(d,A.n("Message has been sent.",null),C.a3)
x=1
break
case 7:if(h)A.bh(d,A.n("Message has been created.",null),C.a3)
case 1:return A.i(v,w)}})
return A.j($async$atm,w)},
atn(d){return B.drQ(d)},
drQ(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$atn=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.e2()
if(s.gdO().c==null)A.a9(A.cF("User must be logged in."))
v=$.CW()
u=v.cg("user_news").j4(0)
t=s.gdO().c
u=u.dE("user",(t==null?null:t.r).a)
t=A.df()
t.toString
x=2
return A.d(u.dE("occasion",t),$async$atn)
case 2:v=v.cg("user_news")
s=s.gdO().c
x=3
return A.d(v.iN(0,A.w(["user",(s==null?null:s.r).a,"news_id",d,"occasion",A.df()],y.N,y.X)).iG(0),$async$atn)
case 3:return A.i(null,w)}})
return A.j($async$atn,w)}},D,W,X,Y,Z,A_,H,A0,A1,A2,A3
J=c[1]
A=c[0]
C=c[2]
I=c[169]
K=c[160]
L=c[163]
E=c[162]
M=c[224]
F=c[106]
N=c[228]
O=c[82]
P=c[226]
Q=c[125]
R=c[116]
S=c[172]
T=c[202]
U=c[225]
V=c[95]
G=c[113]
B=a.updateHolder(c[18],B)
D=c[227]
W=c[195]
X=c[164]
Y=c[148]
Z=c[159]
A_=c[143]
H=c[153]
A0=c[223]
A1=c[123]
A2=c[140]
A3=c[166]
B.Fe.prototype={
K(){return new B.aTn(A.a([],y.o))}}
B.aTn.prototype={
U(){var x,w=this
w.aa()
x=w.c
x.toString
G.wF(x,!1).f.a0(0,new B.ctM(w))
w.aV()},
l(){this.af()},
ME(){var x=0,w=A.k(y.H),v=this,u
var $async$ME=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.La(u,null,y.X)
x=(u==null?null:u.gtf())===!0&&!v.e?2:3
break
case 2:x=$.e2().gdO().c!=null&&J.fN(v.d)&&!J.hk(v.d).f?4:5
break
case 4:x=6
return A.d(B.atn(J.hk(v.d).d),$async$ME)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$ME,w)},
bxX(d){K.hq(d,"newsForm",y.X).aJ(new B.ctF(this,d),y.P)},
a1Q(){var x=0,w=A.k(y.H),v=this,u
var $async$a1Q=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a1I(),$async$a1Q)
case 2:v.q(new u.ctN(v,e))
return A.i(null,w)}})
return A.j($async$a1Q,w)},
a1R(){var x=0,w=A.k(y.H),v=this,u
var $async$a1R=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A_.lC("newsOffline",B.dTV(),y.x),$async$a1R)
case 2:v.q(new u.ctO(v,e))
return A.i(null,w)}})
return A.j($async$a1R,w)},
aV(){var x=0,w=A.k(y.H),v=this
var $async$aV=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a1R(),$async$aV)
case 2:x=3
return A.d(v.a1Q(),$async$aV)
case 3:x=4
return A.d(A.oi("newsOffline",v.d,y.x),$async$aV)
case 4:v.ME()
return A.i(null,w)}})
return A.j($async$aV,w)},
B(d){var x,w,v=null,u=A.B(d).ax.a===C.q?$.i_():$.nT(),t=A.bN(C.ar)
t=Z.iz(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new V.M_(v,v),v,!0,v,v,v,v,v,E.bM(A.E("News",v,v,v,v,v,v,v,A.ac(v,v,new A.by(t.a,t.b,t.c,0.8).bu(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eG(this.d)?new A.X(M.NR,A.aa(A.a([A.aB(U.Pc,A.B(d).ay,v,64),C.X,A.E(A.ZQ("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.aZ,v,v,v,v)],y.p),C.i,C.bf,C.h,0,v,C.l),v):new A2.FA(new B.ctK(this),v)
w=A.hT()
return X.eL(t,u,new A.cm(C.aT,v,v,new A.cC(new A.ab(0,720,0,1/0),x,v),v),v,A.jQ(R.a3b(P.hg,S.rk,new B.ctL(this,d),v),w),v,v)}}
B.xF.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["V<~>(xF)","D<ns<xF>>(J)","wc(z<l,@>)"])
B.ctM.prototype={
$0(){var x=0,w=A.k(y.H),v=this,u,t
var $async$$0=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.wF(t,!1).f.gZM()===C.b.cA($.PB(),"news")){u.ME()
u.aV()}return A.i(null,w)}})
return A.j($async$$0,w)},
$S:1}
B.ctF.prototype={
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
s=B.atm(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.c1(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aV(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:130}
B.ctN.prototype={
$0(){this.a.d=this.b},
$S:0}
B.ctO.prototype={
$0(){this.a.d=this.b},
$S:0}
B.ctK.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bk(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.fB)
v.push(new A.er(new B.ctJ(x,w,d,e),null))
C.b.E(t,v)}return A.aa(t,C.bq,C.f,C.h,0,null,C.l)},
$S:244}
B.ctJ.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.dM(x)===A.dM(w)&&A.eK(x)===A.eK(w)&&A.j8(x)===A.j8(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.a9(y.g).r.a
o===$&&A.b()
o=A.fU("EEEE d.M.y",o.geV(0))
u=n.a
u.toString
u=o.cm(u)
if(n.f){o=p.c
o.toString
o=A.ac(q,q,A.B(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.ac(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aq(W.j7,A.E(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.awD,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.ac(q,q,A.B(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.ac(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.X(A0.fD,A.E(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.b5(10)
o=A.B(d)
t=n.b
t.toString
t=Y.hE(q,18,t,!0,r.d,r.c)
s=$.e2().gdO().c
w.push(new A.X(C.p7,A.aq(q,A.aa(A.a([new A.X(A3.aU,t,q),A.jQ(new A.X(C.aq,A.af(A.a([A.aB(D.azP,A.B(d).ay,q,16),I.iT,A.E(C.c.j(n.e),q,q,q,q,q,q,q,A.ac(q,q,A.B(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.fW],x),C.i,q,C.cy,C.h,0,q),q),s!=null)],x),C.i,C.f,C.h,0,q,C.l),C.k,q,q,new A.b2(o.ax.k2,q,q,u,q,q,q,C.M),q,q,q,q,q,q,q,q),q))
if(A.hT())w.push(O.qr(q,q,q,D.aBa,new B.ctH(),C.r,new B.ctI(p,n,d),C.aq,q,q,q,y.B))
return A.aa(w,C.bq,C.f,C.h,0,q,C.l)},
$S:1360}
B.ctI.prototype={
$1(d){return this.aPp(d)},
aPp(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.MX?2:4
break
case 2:x=5
return A.d(B.J3(t),$async$$1)
case 5:A.bh(s,A.n("Message has been removed.",null),C.a3)
x=3
break
case 4:u=Q.p9(A.w(["content",t.b],y.N,y.z),A.df())
x=6
return A.d(L.ff(s,!1).f.i0(u,y.X).aJ(new B.ctG(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aV(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.ctG.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bf(d)
x=4
return A.d(B.bg3(u),$async$$1)
case 4:A.bh(v.b,A.n("Message has been changed.",null),C.a3)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:130}
B.ctH.prototype={
$1(d){var x=y.B
return A.a([F.lE(E.bM(T.Jd,null),!0,48,D.atJ,x),F.lE(E.bM(D.bKB,null),!0,48,D.MX,x)],y.h)},
$S:z+1}
B.ctL.prototype={
$0(){return this.a.bxX(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dTV","dzb",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Fe,A.M)
x(B.aTn,A.N)
w(A.cV,[B.ctM,B.ctN,B.ctO,B.ctL])
w(A.cl,[B.ctF,B.ctJ,B.ctI,B.ctG,B.ctH])
x(B.ctK,A.et)
x(B.xF,A.fu)})()
A.cf(b.typeUniverse,JSON.parse('{"Fe":{"M":[],"e":[]},"aTn":{"N":["Fe"]}}'))
var y=(function rtii(){var x=A.F
return{B:x("xF"),_:x("V<@>"),t:x("u<z<l,@>>"),o:x("u<wc>"),h:x("u<ns<xF>>"),p:x("u<e>"),a:x("z<l,@>"),x:x("wc"),P:x("aE"),K:x("H"),N:x("l"),g:x("kO"),z:x("@"),X:x("H?"),H:x("~")}})();(function constants(){D.MX=new B.xF(0,"delete")
D.atJ=new B.xF(1,"edit")
D.awD=new A.ai(16,8,16,0)
D.azP=new A.at(58652,"MaterialIcons",null,!1)
D.aBa=new A.cH(N.P0,null,null,null,null)
D.bKB=new A.cw("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_304",e:"endPart",h:b})})($__dart_deferred_initializers__,"7caryI/4Jo26aBS5Mk7nQArn+dU=");