((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_303",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,E,M,N,O,P,F,Q,R,S,T,U,V,G,B={
dr8(d,e){return new B.EI(e,d)},
EI:function EI(d,e){this.c=d
this.a=e},
aRM:function aRM(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
cnf:function cnf(d){this.a=d},
cn8:function cn8(d,e){this.a=d
this.b=e},
cng:function cng(d,e){this.a=d
this.b=e},
cnh:function cnh(d,e){this.a=d
this.b=e},
cnd:function cnd(d){this.a=d},
cnc:function cnc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cnb:function cnb(d,e,f){this.a=d
this.b=e
this.c=f},
cn9:function cn9(d,e){this.a=d
this.b=e},
cna:function cna(){},
cne:function cne(d,e){this.a=d
this.b=e},
xe:function xe(d,e){this.a=d
this.b=e},
dr7(d){return A.d_V(d)},
Ip(d){return B.djV(d)},
djV(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$Ip=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:n=$.Cq()
m=n.cc("news").jR(0,"id")
l=d.a
l.toString
v=d.d
m=A.ms(m.pt(m.qo("created_at","lt."+l.j(0))),m.$ti.c).aJd("id",v)
l=A.d6()
l.toString
x=2
return A.d(m.dv("occasion",l).bSC(0,"created_at").aIt(1).a1i(),$async$Ip)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.cc("user_news").jR(0,"user").dv("news_id",v),$async$Ip)
case 6:t=f
s=A.a([],y.t)
for(n=J.aI(t),m=y.N,l=y.z,r=J.a1(u);n.q();){q=J.u(n.gL(n),"user")
p=r.h(u,"id")
o=$.fU
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.w(["user",q,"news_id",p,"occasion",o],m,l))}n=$.Cq()
x=7
return A.d(n.cc("user_news").aiK(s),$async$Ip)
case 7:x=4
break
case 5:x=8
return A.d(n.cc("user_news").j1(0).dv("news_id",v),$async$Ip)
case 8:case 4:x=9
return A.d(n.cc("news").j1(0).dv("id",v),$async$Ip)
case 9:return A.i(null,w)}})
return A.j($async$Ip,w)},
bcW(d){return B.djY(d)},
djY(d){var x=0,w=A.k(y.H),v
var $async$bcW=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.Cq().cc("news").eY(0,A.w(["message",d.b],v,v)).dv("id",d.d),$async$bcW)
case 2:return A.i(null,w)}})
return A.j($async$bcW,w)},
arS(d,e,f,g,h,i,j){return B.djW(d,e,f,g,h,i,j)},
djW(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$arS=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Cq().cc("news")
s=A.d6()
s.toString
r=$.dC().gdq().c
x=5
return A.d(t.jn(0,A.w(["occasion",s,"message",u,"created_by",(r==null?null:r.r).a],y.N,y.K)).iE(0),$async$arS)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.YH(A1.YF(g),"p"),s=t.length,q="",p=0;p<t.length;t.length===s||(0,A.M)(t),++p){r=new A.dd("")
new H.aMV(r).bp(t[p])
r=r.a
o=(r.charCodeAt(0)==0?r:r)+"\n"
if(C.d.bg(o).length===0)continue
q+=o}q=C.d.bg(q)
t=$.Cq().cc("log_notifications")
s=A.d6()
s.toString
x=8
return A.d(t.jn(0,A.w(["occasion",s,"to",j,"content",q,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$arS)
case 8:A.bi(d,A.n("Message has been sent.",null),C.a3)
x=1
break
case 7:if(h)A.bi(d,A.n("Message has been created.",null),C.a3)
case 1:return A.i(v,w)}})
return A.j($async$arS,w)},
arT(d){return B.djX(d)},
djX(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$arT=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.dC()
if(s.gdq().c==null)A.a7(A.cy("User must be logged in."))
v=$.Cq()
u=v.cc("user_news").j1(0)
t=s.gdq().c
u=u.dv("user",(t==null?null:t.r).a)
t=A.d6()
t.toString
x=2
return A.d(u.dv("occasion",t),$async$arT)
case 2:v=v.cc("user_news")
s=s.gdq().c
x=3
return A.d(v.jn(0,A.w(["user",(s==null?null:s.r).a,"news_id",d,"occasion",A.d6()],y.N,y.X)).iE(0),$async$arT)
case 3:return A.i(null,w)}})
return A.j($async$arT,w)}},D,W,X,Y,Z,A_,H,A0,A1,A2,A3
J=c[1]
A=c[0]
C=c[2]
I=c[175]
K=c[163]
L=c[167]
E=c[166]
M=c[227]
N=c[127]
O=c[82]
P=c[229]
F=c[106]
Q=c[231]
R=c[119]
S=c[178]
T=c[206]
U=c[228]
V=c[95]
G=c[114]
B=a.updateHolder(c[18],B)
D=c[230]
W=c[198]
X=c[168]
Y=c[150]
Z=c[164]
A_=c[146]
H=c[156]
A0=c[226]
A1=c[124]
A2=c[141]
A3=c[170]
B.EI.prototype={
M(){return new B.aRM(A.a([],y.o))}}
B.aRM.prototype={
T(){var x,w=this
w.ae()
x=w.c
x.toString
G.yg(x,!1).f.a1(0,new B.cnf(w))
w.aU()},
l(){this.ai()},
Ml(){var x=0,w=A.k(y.H),v=this,u
var $async$Ml=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.EB(u,null,y.X)
x=(u==null?null:u.gt5())===!0&&!v.e?2:3
break
case 2:x=$.dC().gdq().c!=null&&J.fF(v.d)&&!J.h5(v.d).f?4:5
break
case 4:x=6
return A.d(B.arT(J.h5(v.d).d),$async$Ml)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$Ml,w)},
bvX(d){K.i4(d,"newsForm",y.X).aJ(new B.cn8(this,d),y.P)},
a1a(){var x=0,w=A.k(y.H),v=this,u
var $async$a1a=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a0D(),$async$a1a)
case 2:v.u(new u.cng(v,e))
return A.i(null,w)}})
return A.j($async$a1a,w)},
y3(){var x=0,w=A.k(y.H),v=this,u
var $async$y3=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A_.li("newsOffline",B.dL7(),y.x),$async$y3)
case 2:v.u(new u.cnh(v,e))
return A.i(null,w)}})
return A.j($async$y3,w)},
aU(){var x=0,w=A.k(y.H),v=this
var $async$aU=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.y3(),$async$aU)
case 2:x=3
return A.d(v.a1a(),$async$aU)
case 3:x=4
return A.d(A.nT("newsOffline",v.d,y.x),$async$aU)
case 4:v.Ml()
return A.i(null,w)}})
return A.j($async$aU,w)},
B(d){var x,w,v=null,u=A.C(d).ax.a===C.r?$.ic():$.pk(),t=A.bI(C.av)
t=Z.iw(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new V.Le(v,v),v,!0,v,v,v,v,v,E.bC(A.F("News",v,v,v,v,v,v,v,A.af(v,v,new A.bw(t.a,t.b,t.c,0.8).bq(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.ey(this.d)?new A.Z(M.Nk,A.ac(A.a([A.aK(U.OC,A.C(d).ay,v,64),C.a_,A.F(A.YN("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.b_,v,v,v,v)],y.p),C.j,C.bm,C.h,0,v,C.l),v):new A2.F2(new B.cnd(this),v)
w=A.hF()
return X.eZ(t,u,new A.ci(C.aU,v,v,new A.cE(new A.aa(0,720,0,1/0),x,v),v),v,v,A.jx(R.a27(P.hC,S.r2,new B.cne(this,d),v),w),v,v)}}
B.xe.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["X<~>(xe)","D<n4<xe>>(H)","vM(A<l,@>)"])
B.cnf.prototype={
$0(){var x=0,w=A.k(y.H),v=this,u,t
var $async$$0=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.yg(t,!1).f.gZb()===C.b.di($.OK(),"news")){u.Ml()
u.aU()}return A.i(null,w)}})
return A.j($async$$0,w)},
$S:2}
B.cn8.prototype={
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
s=B.arS(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.cb(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aU(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:115}
B.cng.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cnh.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cnd.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bk(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.fp)
v.push(new A.eL(new B.cnc(x,w,d,e),null))
C.b.H(t,v)}return A.ac(t,C.bi,C.f,C.h,0,null,C.l)},
$S:267}
B.cnc.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.u(p.d,o),m=o>0?J.u(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.dI(x)===A.dI(w)&&A.eD(x)===A.eD(w)&&A.iW(x)===A.iW(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.ab(y.g).r.a
o===$&&A.b()
o=A.hj("EEEE d.M.y",o.geW(0))
u=n.a
u.toString
u=o.cR(u)
if(n.f){o=p.c
o.toString
o=A.af(q,q,A.C(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.S,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.af(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.S,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ar(W.iY,A.F(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.aw0,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.af(q,q,A.C(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.S,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.af(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.S,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.Z(A0.fs,A.F(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bq(10)
o=A.C(d)
t=n.b
t.toString
t=Y.hQ(q,18,t,!0,r.d,r.c)
s=$.dC().gdq().c
w.push(new A.Z(C.rW,A.ar(q,A.ac(A.a([new A.Z(A3.aR,t,q),A.jx(new A.Z(C.aq,A.ao(A.a([A.aK(D.azd,A.C(d).ay,q,16),I.qd,A.F(C.c.j(n.e),q,q,q,q,q,q,q,A.af(q,q,A.C(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.S,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.hk],x),C.j,C.cX,C.h,0,q),q),s!=null)],x),C.j,C.f,C.h,0,q,C.l),C.k,q,q,new A.b2(o.ax.k2,q,q,u,q,q,q,C.L),q,q,q,q,q,q,q,q),q))
if(A.hF())w.push(O.tZ(q,q,q,D.aAq,new B.cna(),C.o,new B.cnb(p,n,d),C.aq,q,q,q,y.B))
return A.ac(w,C.bi,C.f,C.h,0,q,C.l)},
$S:1273}
B.cnb.prototype={
$1(d){return this.aNL(d)},
aNL(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.Ms?2:4
break
case 2:x=5
return A.d(B.Ip(t),$async$$1)
case 5:A.bi(s,A.n("Message has been removed.",null),C.a3)
x=3
break
case 4:u=N.pK(A.w(["content",t.b],y.N,y.z),A.d6())
x=6
return A.d(L.fj(s,!1).f.i8(u,y.X).aJ(new B.cn9(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aU(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.cn9.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bb(d)
x=4
return A.d(B.bcW(u),$async$$1)
case 4:A.bi(v.b,A.n("Message has been changed.",null),C.a3)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:115}
B.cna.prototype={
$1(d){var x=y.B
return A.a([F.mq(E.bC(T.II,null),!0,48,D.ata,x),F.mq(E.bC(D.bJN,null),!0,48,D.Ms,x)],y.h)},
$S:z+1}
B.cne.prototype={
$0(){return this.a.bvX(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dL7","dr7",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.EI,A.L)
x(B.aRM,A.N)
w(A.d0,[B.cnf,B.cng,B.cnh,B.cne])
w(A.cj,[B.cn8,B.cnc,B.cnb,B.cn9,B.cna])
x(B.cnd,A.ez)
x(B.xe,A.fm)})()
A.cf(b.typeUniverse,JSON.parse('{"EI":{"L":[],"e":[]},"aRM":{"N":["EI"]}}'))
var y=(function rtii(){var x=A.E
return{B:x("xe"),_:x("X<@>"),t:x("v<A<l,@>>"),o:x("v<vM>"),h:x("v<n4<xe>>"),p:x("v<e>"),a:x("A<l,@>"),x:x("vM"),P:x("aE"),K:x("K"),N:x("l"),g:x("kv"),z:x("@"),X:x("K?"),H:x("~")}})();(function constants(){D.Ms=new B.xe(0,"delete")
D.ata=new B.xe(1,"edit")
D.aw0=new A.ai(16,8,16,0)
D.azd=new A.ay(58652,"MaterialIcons",null,!1)
D.aAq=new A.cR(Q.Os,null,null,null,null)
D.bJN=new A.cx("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_303",e:"endPart",h:b})})($__dart_deferred_initializers__,"MfEAgke056pdluMd8lm+rDyJnCw=");