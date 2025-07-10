((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_299",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,E,M,N,O,P,F,Q,R,S,T,U,V,B={
duL(d,e){return new B.ES(e,d)},
ES:function ES(d,e){this.c=d
this.a=e},
aSt:function aSt(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
cqc:function cqc(d){this.a=d},
cq5:function cq5(d,e){this.a=d
this.b=e},
cqd:function cqd(d,e){this.a=d
this.b=e},
cqe:function cqe(d,e){this.a=d
this.b=e},
cqa:function cqa(d){this.a=d},
cq9:function cq9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cq8:function cq8(d,e,f){this.a=d
this.b=e
this.c=f},
cq6:function cq6(d,e){this.a=d
this.b=e},
cq7:function cq7(){},
cqb:function cqb(d,e){this.a=d
this.b=e},
xm:function xm(d,e){this.a=d
this.b=e},
duK(d){return A.d3f(d)},
IB(d){return B.dnn(d)},
dnn(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$IB=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:n=$.Cz()
m=n.cd("news").jS(0,"id")
l=d.a
l.toString
v=d.d
m=A.mz(m.pz(m.qt("created_at","lt."+l.j(0))),m.$ti.c).aJz("id",v)
l=A.d6()
l.toString
x=2
return A.d(m.dz("occasion",l).bTE(0,"created_at").aIR(1).a1y(),$async$IB)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.cd("user_news").jS(0,"user").dz("news_id",v),$async$IB)
case 6:t=f
s=A.a([],y.t)
for(n=J.aJ(t),m=y.N,l=y.z,r=J.a_(u);n.q();){q=J.u(n.gM(n),"user")
p=r.h(u,"id")
o=$.fW
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.w(["user",q,"news_id",p,"occasion",o],m,l))}n=$.Cz()
x=7
return A.d(n.cd("user_news").aiY(s),$async$IB)
case 7:x=4
break
case 5:x=8
return A.d(n.cd("user_news").j3(0).dz("news_id",v),$async$IB)
case 8:case 4:x=9
return A.d(n.cd("news").j3(0).dz("id",v),$async$IB)
case 9:return A.i(null,w)}})
return A.j($async$IB,w)},
bdQ(d){return B.dnq(d)},
dnq(d){var x=0,w=A.k(y.H),v
var $async$bdQ=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.Cz().cd("news").eY(0,A.w(["message",d.b],v,v)).dz("id",d.d),$async$bdQ)
case 2:return A.i(null,w)}})
return A.j($async$bdQ,w)},
asq(d,e,f,g,h,i,j){return B.dno(d,e,f,g,h,i,j)},
dno(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$asq=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Cz().cd("news")
s=A.d6()
s.toString
r=$.dE().gdr().c
x=5
return A.d(t.jo(0,A.w(["occasion",s,"message",u,"created_by",(r==null?null:r.r).a],y.N,y.K)).iF(0),$async$asq)
case 5:case 4:x=i?6:7
break
case 6:for(t=H.Z1(A1.Z_(g),"p"),s=t.length,q="",p=0;p<t.length;t.length===s||(0,A.M)(t),++p){r=new A.de("")
new H.aNA(r).bq(t[p])
r=r.a
o=(r.charCodeAt(0)==0?r:r)+"\n"
if(C.d.bh(o).length===0)continue
q+=o}q=C.d.bh(q)
t=$.Cz().cd("log_notifications")
s=A.d6()
s.toString
x=8
return A.d(t.jo(0,A.w(["occasion",s,"to",j,"content",q,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$asq)
case 8:A.bf(d,A.n("Message has been sent.",null),C.a1)
x=1
break
case 7:if(h)A.bf(d,A.n("Message has been created.",null),C.a1)
case 1:return A.i(v,w)}})
return A.j($async$asq,w)},
asr(d){return B.dnp(d)},
dnp(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$asr=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.dE()
if(s.gdr().c==null)A.a8(A.ct("User must be logged in."))
v=$.Cz()
u=v.cd("user_news").j3(0)
t=s.gdr().c
u=u.dz("user",(t==null?null:t.r).a)
t=A.d6()
t.toString
x=2
return A.d(u.dz("occasion",t),$async$asr)
case 2:v=v.cd("user_news")
s=s.gdr().c
x=3
return A.d(v.jo(0,A.w(["user",(s==null?null:s.r).a,"news_id",d,"occasion",A.d6()],y.N,y.X)).iF(0),$async$asr)
case 3:return A.i(null,w)}})
return A.j($async$asr,w)}},D,G,W,X,Y,Z,A_,H,A0,A1,A2,A3
J=c[1]
A=c[0]
C=c[2]
I=c[171]
K=c[159]
L=c[163]
E=c[162]
M=c[223]
N=c[127]
O=c[82]
P=c[225]
F=c[105]
Q=c[227]
R=c[118]
S=c[174]
T=c[202]
U=c[224]
V=c[95]
B=a.updateHolder(c[18],B)
D=c[226]
G=c[113]
W=c[194]
X=c[164]
Y=c[148]
Z=c[160]
A_=c[145]
H=c[153]
A0=c[222]
A1=c[124]
A2=c[141]
A3=c[166]
B.ES.prototype={
L(){return new B.aSt(A.a([],y.o))}}
B.aSt.prototype={
U(){var x,w=this
w.ac()
x=w.c
x.toString
G.yr(x,!1).f.a2(0,new B.cqc(w))
w.aM()},
l(){this.ai()},
Mp(){var x=0,w=A.k(y.H),v=this,u
var $async$Mp=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.EL(u,null,y.X)
x=(u==null?null:u.gt9())===!0&&!v.e?2:3
break
case 2:x=$.dE().gdr().c!=null&&J.fI(v.d)&&!J.h7(v.d).f?4:5
break
case 4:x=6
return A.d(B.asr(J.h7(v.d).d),$async$Mp)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$Mp,w)},
bwH(d){K.i6(d,"newsForm",y.X).aJ(new B.cq5(this,d),y.P)},
a1q(){var x=0,w=A.k(y.H),v=this,u
var $async$a1q=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.a0Y(),$async$a1q)
case 2:v.t(new u.cqd(v,e))
return A.i(null,w)}})
return A.j($async$a1q,w)},
y4(){var x=0,w=A.k(y.H),v=this,u
var $async$y4=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A_.lm("newsOffline",B.dOQ(),y.x),$async$y4)
case 2:v.t(new u.cqe(v,e))
return A.i(null,w)}})
return A.j($async$y4,w)},
aM(){var x=0,w=A.k(y.H),v=this
var $async$aM=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.y4(),$async$aM)
case 2:x=3
return A.d(v.a1q(),$async$aM)
case 3:x=4
return A.d(A.o0("newsOffline",v.d,y.x),$async$aM)
case 4:v.Mp()
return A.i(null,w)}})
return A.j($async$aM,w)},
B(d){var x,w,v=null,u=A.C(d).ax.a===C.r?$.i0():$.ot(),t=A.bH(C.av)
t=Z.ih(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,new V.Lq(v,v),v,!0,v,v,v,v,v,E.bC(A.E("News",v,v,v,v,v,v,v,A.ad(v,v,new A.bw(t.a,t.b,t.c,0.8).br(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.ez(this.d)?new A.Z(M.Nz,A.aa(A.a([A.aG(U.OS,A.C(d).ay,v,64),C.Y,A.E(A.Z6("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.b1,v,v,v,v)],y.p),C.j,C.bd,C.h,0,v,C.l),v):new A2.Fd(new B.cqa(this),v)
w=A.hJ()
return X.eK(t,u,new A.ci(C.aT,v,v,new A.cH(new A.ab(0,720,0,1/0),x,v),v),v,v,A.jC(R.a2t(P.hb,S.rc,new B.cqb(this,d),v),w),v,v)}}
B.xm.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["W<~>(xm)","D<nc<xm>>(J)","vU(z<l,@>)"])
B.cqc.prototype={
$0(){var x=0,w=A.k(y.H),v=this,u,t
var $async$$0=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.a
t=u.c
t.toString
if(G.yr(t,!1).f.gZs()===C.b.cH($.OY(),"news")){u.Mp()
u.aM()}return A.i(null,w)}})
return A.j($async$$0,w)},
$S:2}
B.cq5.prototype={
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
s=B.asq(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.cc(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aM(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:120}
B.cqd.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cqe.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cqa.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.a([],u)
for(x=this.a,w=0;w<J.bm(x.d);++w){v=A.a([],u)
if(w!==0)v.push(C.fw)
v.push(new A.eA(new B.cq9(x,w,d,e),null))
C.b.E(t,v)}return A.aa(t,C.bj,C.f,C.h,0,null,C.l)},
$S:265}
B.cq9.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.u(p.d,o),m=o>0?J.u(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.dK(x)===A.dK(w)&&A.eF(x)===A.eF(w)&&A.iY(x)===A.iY(w)}else v=!1
x=y.p
w=A.a([],x)
if(o===0||!v){o=d.a8(y.g).r.a
o===$&&A.b()
o=A.h0("EEEE d.M.y",o.geW(0))
u=n.a
u.toString
u=o.cq(u)
if(n.f){o=p.c
o.toString
o=A.ad(q,q,A.C(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.R,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.ad(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.R,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ao(W.iZ,A.E(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.k,q,q,q,q,q,q,q,D.awh,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.ad(q,q,A.C(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.R,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.ad(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.R,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.Z(A0.fy,A.E(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.bi(10)
o=A.C(d)
t=n.b
t.toString
t=Y.hS(q,18,t,!0,r.d,r.c)
s=$.dE().gdr().c
w.push(new A.Z(C.t8,A.ao(q,A.aa(A.a([new A.Z(A3.aS,t,q),A.jC(new A.Z(C.ap,A.al(A.a([A.aG(D.azv,A.C(d).ay,q,16),I.lA,A.E(C.c.j(n.e),q,q,q,q,q,q,q,A.ad(q,q,A.C(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.R,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.hp],x),C.j,C.cS,C.h,0,q),q),s!=null)],x),C.j,C.f,C.h,0,q,C.l),C.k,q,q,new A.b1(o.ax.k2,q,q,u,q,q,q,C.K),q,q,q,q,q,q,q,q),q))
if(A.hJ())w.push(O.rC(q,q,q,D.aAM,new B.cq7(),C.q,new B.cq8(p,n,d),C.ap,q,q,q,y.B))
return A.aa(w,C.bj,C.f,C.h,0,q,C.l)},
$S:1282}
B.cq8.prototype={
$1(d){return this.aO7(d)},
aO7(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.MH?2:4
break
case 2:x=5
return A.d(B.IB(t),$async$$1)
case 5:A.bf(s,A.n("Message has been removed.",null),C.a1)
x=3
break
case 4:u=N.pQ(A.w(["content",t.b],y.N,y.z),A.d6())
x=6
return A.d(L.fn(s,!1).f.i8(u,y.X).aJ(new B.cq6(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aM(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.cq6.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bd(d)
x=4
return A.d(B.bdQ(u),$async$$1)
case 4:A.bf(v.b,A.n("Message has been changed.",null),C.a1)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:120}
B.cq7.prototype={
$1(d){var x=y.B
return A.a([F.m4(E.bC(T.IZ,null),!0,48,D.atn,x),F.m4(E.bC(D.bK4,null),!0,48,D.MH,x)],y.h)},
$S:z+1}
B.cqb.prototype={
$0(){return this.a.bwH(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dOQ","duK",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.ES,A.K)
x(B.aSt,A.N)
w(A.d3,[B.cqc,B.cqd,B.cqe,B.cqb])
w(A.cj,[B.cq5,B.cq9,B.cq8,B.cq6,B.cq7])
x(B.cqa,A.eB)
x(B.xm,A.fr)})()
A.cl(b.typeUniverse,JSON.parse('{"ES":{"K":[],"e":[]},"aSt":{"N":["ES"]}}'))
var y=(function rtii(){var x=A.F
return{B:x("xm"),_:x("W<@>"),t:x("v<z<l,@>>"),o:x("v<vU>"),h:x("v<nc<xm>>"),p:x("v<e>"),a:x("z<l,@>"),x:x("vU"),P:x("aF"),K:x("L"),N:x("l"),g:x("kC"),z:x("@"),X:x("L?"),H:x("~")}})();(function constants(){D.MH=new B.xm(0,"delete")
D.atn=new B.xm(1,"edit")
D.awh=new A.ah(16,8,16,0)
D.azv=new A.av(58652,"MaterialIcons",null,!1)
D.aAM=new A.cK(Q.OI,null,null,null,null)
D.bK4=new A.cA("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_299",e:"endPart",h:b})})($__dart_deferred_initializers__,"gbeLvJguv336ncPvWeSkVHO9u8U=");