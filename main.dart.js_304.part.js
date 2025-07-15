((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_304",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,E,M,N,O,P,F,Q,R,S,T,U,V,G,B={
dxe(d,e){return new B.F2(e,d)},
F2:function F2(d,e){this.c=d
this.a=e},
aSU:function aSU(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
crS:function crS(d){this.a=d},
crL:function crL(d,e){this.a=d
this.b=e},
crT:function crT(d,e){this.a=d
this.b=e},
crU:function crU(d,e){this.a=d
this.b=e},
crQ:function crQ(d){this.a=d},
crP:function crP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
crO:function crO(d,e,f){this.a=d
this.b=e
this.c=f},
crM:function crM(d,e){this.a=d
this.b=e},
crN:function crN(){},
crR:function crR(d,e){this.a=d
this.b=e},
xs:function xs(d,e){this.a=d
this.b=e},
dxd(d){return A.d5C(d)},
IO(d){return B.dpR(d)},
dpR(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$IO=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:n=$.CJ()
m=n.cd("news").jS(0,"id")
l=d.a
l.toString
v=d.d
m=A.mF(m.pB(m.qv("created_at","lt."+l.j(0))),m.$ti.c).aJX("id",v)
l=A.d7()
l.toString
x=2
return A.d(m.dC("occasion",l).bUh(0,"created_at").aJe(1).a1J(),$async$IO)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.cd("user_news").jS(0,"user").dC("news_id",v),$async$IO)
case 6:t=f
s=A.a([],y.t)
for(n=J.aL(t),m=y.N,l=y.z,r=J.a_(u);n.q();){q=J.u(n.gM(n),"user")
p=r.h(u,"id")
o=$.h1
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.w(["user",q,"news_id",p,"occasion",o],m,l))}n=$.CJ()
x=7
return A.d(n.cd("user_news").ajd(s),$async$IO)
case 7:x=4
break
case 5:x=8
return A.d(n.cd("user_news").j4(0).dC("news_id",v),$async$IO)
case 8:case 4:x=9
return A.d(n.cd("news").j4(0).dC("id",v),$async$IO)
case 9:return A.j(null,w)}})
return A.k($async$IO,w)},
bep(d){return B.dpU(d)},
dpU(d){var x=0,w=A.l(y.H),v
var $async$bep=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.CJ().cd("news").eY(0,A.w(["message",d.b],v,v)).dC("id",d.d),$async$bep)
case 2:return A.j(null,w)}})
return A.k($async$bep,w)},
asP(d,e,f,g,h,i,j){return B.dpS(d,e,f,g,h,i,j)},
dpS(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$asP=A.f(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.CJ().cd("news")
s=A.d7()
s.toString
r=$.dH().gdv().c
x=5
return A.d(t.jq(0,A.w(["occasion",s,"message",u,"created_by",(r==null?null:r.r).a],y.N,y.K)).iG(0),$async$asP)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.Zn(A1.Zl(g),"p"),s=t.length,q="",p=0;p<t.length;t.length===s||(0,A.J)(t),++p){r=new A.dk("")
new H.aO1(r).bq(t[p])
r=r.a
o=(r.charCodeAt(0)==0?r:r)+"\n"
if(C.d.bg(o).length===0)continue
q+=o}q=C.d.bg(q)
t=$.CJ().cd("log_notifications")
s=A.d7()
s.toString
x=8
return A.d(t.jq(0,A.w(["occasion",s,"to",j,"content",q,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$asP)
case 8:A.bi(d,A.n("Message has been sent.",null),C.a2)
x=1
break
case 7:if(h)A.bi(d,A.n("Message has been created.",null),C.a2)
case 1:return A.j(v,w)}})
return A.k($async$asP,w)},
asQ(d){return B.dpT(d)},
dpT(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$asQ=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dH()
if(s.gdv().c==null)A.a8(A.cz("User must be logged in."))
v=$.CJ()
u=v.cd("user_news").j4(0)
t=s.gdv().c
u=u.dC("user",(t==null?null:t.r).a)
t=A.d7()
t.toString
x=2
return A.d(u.dC("occasion",t),$async$asQ)
case 2:v=v.cd("user_news")
s=s.gdv().c
x=3
return A.d(v.jq(0,A.w(["user",(s==null?null:s.r).a,"news_id",d,"occasion",A.d7()],y.N,y.X)).iG(0),$async$asQ)
case 3:return A.j(null,w)}})
return A.k($async$asQ,w)}},D,W,X,Y,Z,A_,H,A0,A1,A2,A3
J=c[1]
A=c[0]
C=c[2]
I=c[168]
K=c[158]
L=c[162]
E=c[161]
M=c[222]
N=c[126]
O=c[83]
P=c[224]
F=c[104]
Q=c[226]
R=c[117]
S=c[171]
T=c[200]
U=c[223]
V=c[95]
G=c[112]
B=a.updateHolder(c[18],B)
D=c[225]
W=c[193]
X=c[163]
Y=c[147]
Z=c[159]
A_=c[142]
H=c[152]
A0=c[221]
A1=c[123]
A2=c[140]
A3=c[165]
B.F2.prototype={
L(){return new B.aSU(A.a([],y.o))}}
B.aSU.prototype={
T(){var x,w=this
w.ab()
x=w.c
x.toString
G.wr(x,!1).f.a2(0,new B.crS(w))
w.aV()},
l(){this.ag()},
Mx(){var x=0,w=A.l(y.H),v=this,u
var $async$Mx=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.EW(u,null,y.X)
x=(u==null?null:u.gta())===!0&&!v.e?2:3
break
case 2:x=$.dH().gdv().c!=null&&J.fK(v.d)&&!J.hb(v.d).f?4:5
break
case 4:x=6
return A.d(B.asQ(J.hb(v.d).d),$async$Mx)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$Mx,w)},
bxf(d){K.i1(d,"newsForm",y.X).aJ(new B.crL(this,d),y.P)},
a1B(){var x=0,w=A.l(y.H),v=this,u
var $async$a1B=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a1i(),$async$a1B)
case 2:v.t(new u.crT(v,e))
return A.j(null,w)}})
return A.k($async$a1B,w)},
y7(){var x=0,w=A.l(y.H),v=this,u
var $async$y7=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A_.lr("newsOffline",B.dRy(),y.x),$async$y7)
case 2:v.t(new u.crU(v,e))
return A.j(null,w)}})
return A.k($async$y7,w)},
aV(){var x=0,w=A.l(y.H),v=this
var $async$aV=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.y7(),$async$aV)
case 2:x=3
return A.d(v.a1B(),$async$aV)
case 3:x=4
return A.d(A.o8("newsOffline",v.d,y.x),$async$aV)
case 4:v.Mx()
return A.j(null,w)}})
return A.k($async$aV,w)},
B(d){var x,w,v=null,u=A.B(d).ax.a===C.q?$.hS():$.nJ(),t=A.bK(C.as)
t=Z.i6(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new V.LI(v,v),v,!0,v,v,v,v,v,E.bH(A.E("News",v,v,v,v,v,v,v,A.ab(v,v,new A.by(t.a,t.b,t.c,0.8).bs(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eC(this.d)?new A.Z(M.NM,A.aa(A.a([A.aD(U.P7,A.B(d).ay,v,64),C.Z,A.E(A.Zs("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.aX,v,v,v,v)],y.p),C.i,C.be,C.h,0,v,C.l),v):new A2.Fo(new B.crQ(this),v)
w=A.hN()
return X.eH(t,u,new A.cf(C.aT,v,v,new A.cF(new A.ac(0,720,0,1/0),x,v),v),v,v,A.jG(R.a2N(P.hf,S.rh,new B.crR(this,d),v),w),v,v)}}
B.xs.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["W<~>(xs)","D<ni<xs>>(K)","w_(z<h,@>)"])
B.crS.prototype={
$0(){var x=0,w=A.l(y.H),v=this,u,t
var $async$$0=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.wr(t,!1).f.gZD()===C.b.cJ($.Pg(),"news")){u.Mx()
u.aV()}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2}
B.crL.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.f(function(e,f){if(e===1)return A.i(f,w)
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
s=B.asP(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.cd(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aV(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:124}
B.crT.prototype={
$0(){this.a.d=this.b},
$S:0}
B.crU.prototype={
$0(){this.a.d=this.b},
$S:0}
B.crQ.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bl(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.fz)
v.push(new A.eD(new B.crP(x,w,d,e),null))
C.b.E(t,v)}return A.aa(t,C.bl,C.f,C.h,0,null,C.l)},
$S:286}
B.crP.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.u(p.d,o),m=o>0?J.u(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.dL(x)===A.dL(w)&&A.eG(x)===A.eG(w)&&A.j2(x)===A.j2(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.a9(y.g).r.a
o===$&&A.b()
o=A.fZ("EEEE d.M.y",o.geW(0))
u=n.a
u.toString
u=o.cp(u)
if(n.f){o=p.c
o.toString
o=A.ab(q,q,A.B(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.ab(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aq(W.j0,A.E(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.awv,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.ab(q,q,A.B(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.ab(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.Z(A0.fB,A.E(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bf(10)
o=A.B(d)
t=n.b
t.toString
t=Y.hv(q,18,t,!0,r.d,r.c)
s=$.dH().gdv().c
w.push(new A.Z(C.td,A.aq(q,A.aa(A.a([new A.Z(A3.aG,t,q),A.jG(new A.Z(C.ao,A.ah(A.a([A.aD(D.azH,A.B(d).ay,q,16),I.kh,A.E(C.c.j(n.e),q,q,q,q,q,q,q,A.ab(q,q,A.B(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.fW],x),C.i,C.cw,C.h,0,q),q),s!=null)],x),C.i,C.f,C.h,0,q,C.l),C.k,q,q,new A.b1(o.ax.k2,q,q,u,q,q,q,C.K),q,q,q,q,q,q,q,q),q))
if(A.hN())w.push(O.rJ(q,q,q,D.aB2,new B.crN(),C.r,new B.crO(p,n,d),C.ao,q,q,q,y.B))
return A.aa(w,C.bl,C.f,C.h,0,q,C.l)},
$S:1336}
B.crO.prototype={
$1(d){return this.aOt(d)},
aOt(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.MR?2:4
break
case 2:x=5
return A.d(B.IO(t),$async$$1)
case 5:A.bi(s,A.n("Message has been removed.",null),C.a2)
x=3
break
case 4:u=N.oW(A.w(["content",t.b],y.N,y.z),A.d7())
x=6
return A.d(L.fa(s,!1).f.i_(u,y.X).aJ(new B.crM(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aV(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+0}
B.crM.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bd(d)
x=4
return A.d(B.bep(u),$async$$1)
case 4:A.bi(v.b,A.n("Message has been changed.",null),C.a2)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:124}
B.crN.prototype={
$1(d){var x=y.B
return A.a([F.m8(E.bH(T.J9,null),!0,48,D.atB,x),F.m8(E.bH(D.bKA,null),!0,48,D.MR,x)],y.h)},
$S:z+1}
B.crR.prototype={
$0(){return this.a.bxf(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dRy","dxd",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.F2,A.L)
x(B.aSU,A.N)
w(A.d0,[B.crS,B.crT,B.crU,B.crR])
w(A.cj,[B.crL,B.crP,B.crO,B.crM,B.crN])
x(B.crQ,A.eq)
x(B.xs,A.fc)})()
A.cm(b.typeUniverse,JSON.parse('{"F2":{"L":[],"e":[]},"aSU":{"N":["F2"]}}'))
var y=(function rtii(){var x=A.F
return{B:x("xs"),_:x("W<@>"),t:x("v<z<h,@>>"),o:x("v<w_>"),h:x("v<ni<xs>>"),p:x("v<e>"),a:x("z<h,@>"),x:x("w_"),P:x("aG"),K:x("M"),N:x("h"),g:x("kF"),z:x("@"),X:x("M?"),H:x("~")}})();(function constants(){D.MR=new B.xs(0,"delete")
D.atB=new B.xs(1,"edit")
D.awv=new A.ai(16,8,16,0)
D.azH=new A.at(58652,"MaterialIcons",null,!1)
D.aB2=new A.cC(Q.OW,null,null,null,null)
D.bKA=new A.cl("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_304",e:"endPart",h:b})})($__dart_deferred_initializers__,"0DXZRWhJL8hkxbfdQQ/TqmcAknQ=");