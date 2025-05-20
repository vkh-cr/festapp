((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_307",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,E,L,M,N,O,P,F,Q,R,S,T,U,V,W,B={
dh3(d,e){return new B.zZ(e,d)},
zZ:function zZ(d,e){this.c=d
this.a=e},
aPZ:function aPZ(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
cgc:function cgc(d,e){this.a=d
this.b=e},
cgj:function cgj(d,e){this.a=d
this.b=e},
cgk:function cgk(d,e){this.a=d
this.b=e},
cgh:function cgh(d){this.a=d},
cgg:function cgg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cgf:function cgf(d,e,f){this.a=d
this.b=e
this.c=f},
cgd:function cgd(d,e){this.a=d
this.b=e},
cge:function cge(){},
cgi:function cgi(d,e){this.a=d
this.b=e},
wC:function wC(d,e){this.a=d
this.b=e},
dh2(d){return A.cRt(d)},
HO(d){return B.da4(d)},
da4(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$HO=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:n=$.BU()
m=n.c0("news").ik(0,"id")
l=d.a
l.toString
v=d.d
m=A.mc(m.pf(m.qb("created_at","lt."+l.j(0))),m.$ti.c).aHf("id",v)
l=A.dn()
l.toString
x=2
return A.d(m.da("occasion",l).bOq(0,"created_at").aGx(1).Qz(),$async$HO)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.c0("user_news").ik(0,"user").da("news_id",v),$async$HO)
case 6:t=f
s=A.a([],y.t)
for(n=J.aK(t),m=y.N,l=y.z,r=J.a1(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.h5
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],m,l))}n=$.BU()
x=7
return A.d(n.c0("user_news").ahf(s),$async$HO)
case 7:x=4
break
case 5:x=8
return A.d(n.c0("user_news").iU(0).da("news_id",v),$async$HO)
case 8:case 4:x=9
return A.d(n.c0("news").iU(0).da("id",v),$async$HO)
case 9:return A.j(null,w)}})
return A.k($async$HO,w)},
bau(d){return B.da7(d)},
da7(d){var x=0,w=A.l(y.H),v
var $async$bau=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.BU().c0("news").eO(0,A.z(["message",d.b],v,v)).da("id",d.d),$async$bau)
case 2:return A.j(null,w)}})
return A.k($async$bau,w)},
aqi(d,e,f,g,h,i,j){return B.da5(d,e,f,g,h,i,j)},
da5(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$aqi=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.BU().c0("news")
s=A.dn()
s.toString
x=5
return A.d(t.jb(0,A.z(["occasion",s,"message",u,"created_by",$.dU().gds().c.a],y.N,y.K)).ix(0),$async$aqi)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.XK(Z.XI(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.M)(t),++q){p=new A.di("")
new G.aL9(p).bn(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.d.bC(o).length===0)continue
r+=o}r=C.d.bC(r)
t=$.BU().c0("log_notifications")
s=A.dn()
s.toString
x=8
return A.d(t.jb(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$aqi)
case 8:A.bK(d,A.r("Message has been sent.",null),C.ac)
x=1
break
case 7:if(h)A.bK(d,A.r("Message has been created.",null),C.ac)
case 1:return A.j(v,w)}})
return A.k($async$aqi,w)},
aqj(d){return B.da6(d)},
da6(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$aqj=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dU()
if(s.gds().d==null)A.a7(A.cS("User must be logged in."))
v=$.BU()
u=v.c0("user_news").iU(0).da("user",s.gds().c.a)
t=A.dn()
t.toString
x=2
return A.d(u.da("occasion",t),$async$aqj)
case 2:x=3
return A.d(v.c0("user_news").jb(0,A.z(["user",s.gds().c.a,"news_id",d,"occasion",A.dn()],y.N,y.X)).ix(0),$async$aqj)
case 3:return A.j(null,w)}})
return A.k($async$aqj,w)}},D,X,Y,Z,G,A_,A0,A1
J=c[1]
A=c[0]
C=c[2]
H=c[179]
I=c[171]
K=c[175]
E=c[174]
L=c[290]
M=c[186]
N=c[141]
O=c[106]
P=c[299]
F=c[122]
Q=c[261]
R=c[128]
S=c[176]
T=c[219]
U=c[115]
V=c[150]
W=c[153]
B=a.updateHolder(c[19],B)
D=c[319]
X=c[113]
Y=c[172]
Z=c[134]
G=c[160]
A_=c[210]
A0=c[239]
A1=c[185]
B.zZ.prototype={
M(){return new B.aPZ(A.a([],y.o))}}
B.aPZ.prototype={
U(){this.ah()
this.b3()},
l(){this.al()},
b_(){this.c5()
this.LH()},
LH(){var x=0,w=A.l(y.H),v=this,u
var $async$LH=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.E_(u,null,y.X)
x=(u==null?null:u.grS())===!0&&!v.e?2:3
break
case 2:x=$.dU().gds().d!=null&&J.jm(v.d)&&!J.ij(v.d).f?4:5
break
case 4:x=6
return A.d(B.aqj(J.ij(v.d).d),$async$LH)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$LH,w)},
bsb(d){I.iZ(d,"newsForm",y.X).aJ(new B.cgc(this,d),y.P)},
a_Y(){var x=0,w=A.l(y.H),v=this,u
var $async$a_Y=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a_A(),$async$a_Y)
case 2:v.A(new u.cgj(v,e))
return A.j(null,w)}})
return A.k($async$a_Y,w)},
o6(){var x=0,w=A.l(y.H),v=this,u
var $async$o6=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(V.ma("newsOffline",B.dAQ(),y.x),$async$o6)
case 2:v.A(new u.cgk(v,e))
return A.j(null,w)}})
return A.k($async$o6,w)},
b3(){var x=0,w=A.l(y.H),v=this
var $async$b3=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.o6(),$async$b3)
case 2:x=3
return A.d(v.a_Y(),$async$b3)
case 3:x=4
return A.d(A.or("newsOffline",v.d),$async$b3)
case 4:v.LH()
return A.j(null,w)}})
return A.k($async$b3,w)},
B(d){var x,w,v=null,u=A.D(d).ax.a===C.q?$.ih():$.qh(),t=A.bq(C.av)
t=Y.iC(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new U.Kv(v,v),v,!0,v,v,v,v,v,E.bv(A.R("News",v,v,v,v,v,v,v,A.an(v,v,new A.bl(t.a,t.b,t.c,0.8).bk(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.fp(this.d)?new A.a3(L.MA,A.ah(A.a([A.b1(D.ays,A.D(d).ay,v,64),C.a5,A.R(A.XP("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.b0,v,v,v,v)],y.p),C.j,C.bl,C.i,0,v,C.m),v):new X.Ep(new B.cgh(this),v)
w=A.iY()
return S.f6(t,u,new A.cA(C.aW,v,v,new A.cI(new A.ab(0,720,0,1/0),x,v),v),v,v,A.ji(R.a15(P.hm,new B.cgi(this,d),v),w),v,v)}}
B.wC.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["Y<~>(wC)","B<mL<wC>>(J)","v9(A<m,@>)"])
B.cgc.prototype={
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
s=B.aqi(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.cd(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.b3(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:118}
B.cgj.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cgk.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cgh.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bE(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.hg)
v.push(new A.eY(new B.cgg(x,w,d,e),null))
C.b.H(t,v)}return A.ah(t,C.bj,C.f,C.i,0,null,C.m)},
$S:203}
B.cgg.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.v(p.d,o),m=o>0?J.v(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.br(x)===A.br(w)&&A.bB(x)===A.bB(w)&&A.cu(x)===A.cu(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.ag(y.g).r.a
o===$&&A.b()
o=A.hz("EEEE d.M.y",o.geX(0))
u=n.a
u.toString
u=o.dg(u)
if(n.f){o=p.c
o.toString
o=A.an(q,q,A.D(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.Y,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.an(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.Y,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.as(A_.i3,A.R(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.av0,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.an(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.Y,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.an(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.Y,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a3(A0.fN,A.R(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bM(10)
o=A.D(d)
t=n.b
t.toString
t=W.iq(q,18,t,!0,r.d,r.c)
s=$.dU().gds().d
w.push(new A.a3(C.Cs,A.as(q,A.ah(A.a([new A.a3(H.aY,t,q),A.ji(new A.a3(C.at,A.at(A.a([A.b1(D.ay_,A.D(d).ay,q,16),A1.Hk,A.R(C.c.j(n.e),q,q,q,q,q,q,q,A.an(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.Y,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),M.ix],x),C.j,C.dr,C.i,0,q),q),s!=null)],x),C.j,C.f,C.i,0,q,C.m),C.k,q,q,new A.b5(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.iY())w.push(O.Ah(q,q,D.az4,new B.cge(),new B.cgf(p,n,d),C.at,q,q,y.B))
return A.ah(w,C.bj,C.f,C.i,0,q,C.m)},
$S:1185}
B.cgf.prototype={
$1(d){return this.aLO(d)},
aLO(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.LN?2:4
break
case 2:x=5
return A.d(B.HO(t),$async$$1)
case 5:A.bK(s,A.r("Message has been removed.",null),C.ac)
x=3
break
case 4:u=N.qB(A.z(["content",t.b],y.N,y.z),A.dn())
x=6
return A.d(K.ft(s,!1).f.ir(u,y.X).aJ(new B.cgd(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.b3(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+0}
B.cgd.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.b9(d)
x=4
return A.d(B.bau(u),$async$$1)
case 4:A.bK(v.b,A.r("Message has been changed.",null),C.ac)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:118}
B.cge.prototype={
$1(d){var x=y.B
return A.a([F.pE(E.bv(T.I5,null),!0,48,D.asi,x),F.pE(E.bv(D.bIv,null),!0,48,D.LN,x)],y.h)},
$S:z+1}
B.cgi.prototype={
$0(){return this.a.bsb(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dAQ","dh2",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.zZ,A.I)
x(B.aPZ,A.O)
w(A.c8,[B.cgc,B.cgg,B.cgf,B.cgd,B.cge])
w(A.cQ,[B.cgj,B.cgk,B.cgi])
x(B.cgh,A.el)
x(B.wC,A.fb)})()
A.c5(b.typeUniverse,JSON.parse('{"zZ":{"I":[],"e":[]},"aPZ":{"O":["zZ"]}}'))
var y=(function rtii(){var x=A.C
return{B:x("wC"),_:x("Y<@>"),t:x("t<A<m,@>>"),o:x("t<v9>"),h:x("t<mL<wC>>"),p:x("t<e>"),a:x("A<m,@>"),x:x("v9"),P:x("aF"),K:x("G"),N:x("m"),g:x("kD"),z:x("@"),X:x("G?"),H:x("~")}})();(function constants(){D.LN=new B.wC(0,"delete")
D.asi=new B.wC(1,"edit")
D.av0=new A.am(16,8,16,0)
D.ay_=new A.aB(58652,"MaterialIcons",null,!1)
D.ays=new A.aB(61075,"MaterialIcons",null,!1)
D.az4=new A.d5(Q.NN,null,null,null,null)
D.bIv=new A.cl("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_307",e:"endPart",h:b})})($__dart_deferred_initializers__,"GQTJqiri93MUV36+7FyXTHCtqbI=");