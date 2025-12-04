((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,M,F,N,O,E,P,Q,R,S,T,U,G,V,H,B={
dJe(d,e){return new B.Gs(e,d)},
Gs:function Gs(d,e){this.c=d
this.a=e},
aXm:function aXm(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
cCi:function cCi(d){this.a=d},
cCb:function cCb(d,e){this.a=d
this.b=e},
cCj:function cCj(d,e){this.a=d
this.b=e},
cCk:function cCk(d,e){this.a=d
this.b=e},
cCg:function cCg(d){this.a=d},
cCf:function cCf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cCe:function cCe(d,e,f){this.a=d
this.b=e
this.c=f},
cCc:function cCc(d,e){this.a=d
this.b=e},
cCd:function cCd(){},
cCh:function cCh(d,e){this.a=d
this.b=e},
yj:function yj(d,e){this.a=d
this.b=e},
dJd(d){return A.djp(d)},
Kq(d){var x=0,w=A.m(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$Kq=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:n=$.E2()
m=n.cs("news").kR(0,"id")
l=d.d
m=A.nh(m.q8(m.r4("created_at","lt."+d.a.j(0))),m.$ti.c).aPm("id",l)
v=A.dd()
v.toString
x=2
return A.d(m.e0("occasion",v).c1G(0,"created_at").aOC(1).a43(),$async$Kq)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.cs("user_news").kR(0,"user").e0("news_id",l),$async$Kq)
case 6:t=f
s=A.b([],y.t)
for(n=J.aF(t),m=y.N,v=y.z,r=J.a1(u);n.t();){q=J.u(n.gL(n),"user")
p=r.h(u,"id")
o=$.dX().a
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.w(["user",q,"news_id",p,"occasion",o],m,v))}n=$.E2()
x=7
return A.d(n.cs("user_news").amL(s),$async$Kq)
case 7:x=4
break
case 5:x=8
return A.d(n.cs("user_news").jr(0).e0("news_id",l),$async$Kq)
case 8:case 4:x=9
return A.d(n.cs("news").jr(0).e0("id",l),$async$Kq)
case 9:return A.k(null,w)}})
return A.l($async$Kq,w)},
bkT(d){var x=0,w=A.m(y.H),v
var $async$bkT=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:v=y.z
x=2
return A.d($.E2().cs("news").f_(0,A.w(["message",d.b],v,v)).e0("id",d.d),$async$bkT)
case 2:return A.k(null,w)}})
return A.l($async$bkT,w)},
awr(d,e,f,g,h,i,j){var x=0,w=A.m(y.z),v,u,t,s,r,q,p,o
var $async$awr=A.i(function(k,l){if(k===1)return A.j(l,w)
for(;;)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.E2().cs("news")
s=A.dd()
s.toString
r=$.ea().ge4().c
x=5
return A.d(t.il(0,A.w(["occasion",s,"message",u,"created_by",(r==null?null:r.r).a],y.N,y.K)).je(0),$async$awr)
case 5:case 4:x=i?6:7
break
case 6:for(t=I.Ra(A1.R7(g),"p"),s=t.length,q="",p=0;p<t.length;t.length===s||(0,A.L)(t),++p){r=new A.dw("")
new I.aS3(r).bt(t[p])
r=r.a
o=(r.charCodeAt(0)==0?r:r)+"\n"
if(C.d.b9(o).length===0)continue
q+=o}q=C.d.b9(q)
t=$.E2().cs("log_notifications")
s=A.dd()
s.toString
x=8
return A.d(t.il(0,A.w(["occasion",s,"to",j,"content",q,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$awr)
case 8:A.aZ(d,A.f("Message has been sent.",null,null),C.X)
x=1
break
case 7:if(h)A.aZ(d,A.f("Message has been created.",null,null),C.X)
case 1:return A.k(v,w)}})
return A.l($async$awr,w)},
aws(d){var x=0,w=A.m(y.H),v,u,t,s
var $async$aws=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:s=$.ea()
if(s.ge4().c==null)A.aa(A.cN("User must be logged in."))
v=$.E2()
u=v.cs("user_news").jr(0)
t=s.ge4().c
u=u.e0("user",(t==null?null:t.r).a)
t=A.dd()
t.toString
x=2
return A.d(u.e0("occasion",t),$async$aws)
case 2:v=v.cs("user_news")
s=s.ge4().c
x=3
return A.d(v.il(0,A.w(["user",(s==null?null:s.r).a,"news_id",d,"occasion",A.dd()],y.N,y.X)).je(0),$async$aws)
case 3:return A.k(null,w)}})
return A.l($async$aws,w)}},D,W,X,Y,Z,I,A_,A0,A1,A2,A3
J=c[1]
A=c[0]
C=c[2]
K=c[175]
L=c[165]
M=c[168]
F=c[118]
N=c[135]
O=c[178]
E=c[167]
P=c[233]
Q=c[237]
R=c[83]
S=c[235]
T=c[128]
U=c[210]
G=c[234]
V=c[95]
H=c[110]
B=a.updateHolder(c[18],B)
D=c[236]
W=c[203]
X=c[169]
Y=c[154]
Z=c[164]
I=c[158]
A_=c[232]
A0=c[150]
A1=c[126]
A2=c[143]
A3=c[171]
B.Gs.prototype={
K(){return new B.aXm(A.b([],y.o))}}
B.aXm.prototype={
T(){var x,w=this
w.a5()
x=w.c
x.toString
H.xh(x,!1).f.Y(0,new B.cCi(w))
w.aX()},
l(){this.a8()},
NO(){var x=0,w=A.m(y.H),v=this,u
var $async$NO=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
u=A.Gl(u,null,y.X)
x=(u==null?null:u.gpL())===!0&&!v.e?2:3
break
case 2:x=$.ea().ge4().c!=null&&J.fz(v.d)&&!J.h7(v.d).f?4:5
break
case 4:x=6
return A.d(B.aws(J.h7(v.d).d),$async$NO)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.k(null,w)}})
return A.l($async$NO,w)},
bEs(d){L.hQ(d,"newsForm",y.X).aN(new B.cCb(this,d),y.P)},
a3T(){var x=0,w=A.m(y.H),v=this,u
var $async$a3T=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:u=B
x=2
return A.d(A.a3K(),$async$a3T)
case 2:v.q(new u.cCj(v,e))
return A.k(null,w)}})
return A.l($async$a3T,w)},
a3U(){var x=0,w=A.m(y.H),v=this,u
var $async$a3U=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:u=B
x=2
return A.d(A0.m0("newsOffline",B.e3_(),y.x),$async$a3U)
case 2:v.q(new u.cCk(v,e))
return A.k(null,w)}})
return A.l($async$a3U,w)},
aX(){var x=0,w=A.m(y.H),v=this
var $async$aX=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.d(v.a3U(),$async$aX)
case 2:x=3
return A.d(v.a3T(),$async$aX)
case 3:x=4
return A.d(A.oU("newsOffline",v.d,y.x),$async$aX)
case 4:v.NO()
return A.k(null,w)}})
return A.l($async$aX,w)},
A(d){var x,w,v=null,u=A.y(d).ax.a===C.r?$.hy():$.n_(),t=A.bR(C.aq)
t=Z.iM(v,v,v,!0,!0,v,v,1,v,v,v,!1,v,!1,v,v,new V.Nn(v,v),v,!0,v,v,v,v,v,E.ca(A.z("News",v,v,v,v,v,v,v,A.ab(v,v,new A.bK(t.a,t.b,t.c,0.8).bu(),v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v,v,v),v),v,v,v,1,v,!0)
x=J.eZ(this.d)?new A.S(P.Pi,A.a8(A.b([A.ay(G.FX,A.y(d).ay,v,v,64),C.W,A.z(A.b78("No news messages yet",v,v,v,v),v,v,v,v,v,v,v,v,C.aL,v,v,v,v)],y.p),C.i,C.bi,C.h,0,v,C.k),v):new A2.GO(new B.cCg(this),v)
w=A.iq()
return X.eO(t,u,new A.cv(C.aQ,v,v,new A.cp(new A.ae(0,720,0,1/0),x,v),v),v,A.jE(N.TH(v,S.h2,v,v,O.tg,new B.cCh(this,d),v,v),!1,!1,!1,!1,w),v,v)}}
B.yj.prototype={
I(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["W<~>(yj)","D<o_<yj>>(F)","wK(A<h,@>)"])
B.cCi.prototype={
$0(){var x=0,w=A.m(y.H),v=this,u,t
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:u=v.a
t=u.c
t.toString
if(H.xh(t,!1).f.ga0D()===C.b.dq($.Rl(),"news")){u.NO()
u.aX()}return A.k(null,w)}})
return A.l($async$$0,w)},
$S:2}
B.cCb.prototype={
$1(d){var x=0,w=A.m(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=d!=null?2:3
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
s=B.awr(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.bY(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.aX(),$async$$1)
case 7:case 6:case 3:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:135}
B.cCj.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cCk.prototype={
$0(){this.a.d=this.b},
$S:0}
B.cCg.prototype={
$2(d,e){var x,w,v,u=y.p,t=A.b([],u)
for(x=this.a,w=0;w<J.bp(x.d);++w){v=A.b([],u)
if(w!==0)v.push(C.cU)
v.push(new A.dU(new B.cCf(x,w,d,e),null))
C.b.E(t,v)}return A.a8(t,C.bd,C.f,C.h,0,null,C.k)},
$S:255}
B.cCf.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a,o=r.b,n=J.u(p.d,o),m=o>0?J.u(p.d,o-1):q
if(m!=null){x=n.a
x.toString
w=m.a
w.toString
v=A.ee(x)===A.ee(w)&&A.fj(x)===A.fj(w)&&A.jf(x)===A.jf(w)}else v=!1
x=y.p
w=A.b([],x)
if(o===0||!v){o=d.af(y.g).r.a
o===$&&A.a()
o=A.h2("EEEE d.M.y",o.gf7(0))
u=n.a
u.toString
u=o.cl(u)
if(n.f){o=p.c
o.toString
o=A.ab(q,q,A.y(o).cy,q,q,q,q,q,q,q,q,q,q,q,C.K,q,q,!0,q,q,q,q,q,q,q,q)}else o=A.ab(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.K,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ak(W.jA,A.z(u,q,q,q,q,q,q,q,o,q,q,q,q,q),C.l,q,q,q,q,q,q,q,G.P7,q,q,q))}o=n.c
if(o==null)o=""
if(n.f){u=p.c
u.toString
u=A.ab(q,q,A.y(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.K,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.ab(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.K,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.S(A_.ev,A.z(o,q,q,q,q,q,q,q,u,q,q,q,q,q),q))
u=A.aU(10)
o=A.y(d)
t=n.b
t.toString
t=Y.hB(q,18,t,!0,r.d,r.c)
s=$.ea().ge4().c
w.push(new A.S(C.pR,A.ak(q,A.a8(A.b([new A.S(A3.aJ,t,q),A.jE(new A.S(C.ai,A.ac(A.b([A.ay(D.aAM,A.y(d).ay,q,q,16),K.jo,A.z(C.c.j(n.e),q,q,q,q,q,q,q,A.ab(q,q,A.y(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.K,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),C.hQ],x),C.i,q,C.cd,C.h,0,q),q),!1,!1,!1,!1,s!=null)],x),C.i,C.f,C.h,0,q,C.k),C.l,q,q,new A.b7(o.ax.k2,q,q,u,q,q,q,C.M),q,q,q,q,q,q,q,q),q))
if(A.iq())w.push(R.pX(q,q,q,!0,D.aCf,new B.cCd(),C.t,new B.cCe(p,n,d),C.ai,q,q,q,y.B))
return A.a8(w,C.bd,C.f,C.h,0,q,C.k)},
$S:1428}
B.cCe.prototype={
$1(d){return this.aUn(d)},
aUn(d){var x=0,w=A.m(y.H),v=this,u,t,s
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:t=v.b
s=v.c
x=d===D.Ol?2:4
break
case 2:x=5
return A.d(B.Kq(t),$async$$1)
case 5:A.aZ(s,A.f("Message has been removed.",null,null),C.X)
x=3
break
case 4:u=T.pE(A.w(["content",t.b],y.N,y.z),A.dd())
x=6
return A.d(M.fv(s,!1).f.ia(u,y.X).aN(new B.cCc(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.aX(),$async$$1)
case 7:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:z+0}
B.cCc.prototype={
$1(d){var x=0,w=A.m(y.P),v=this,u
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bf(d)
x=4
return A.d(B.bkT(u),$async$$1)
case 4:A.aZ(v.b,A.f("Message has been changed.",null,null),C.X)
case 3:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:135}
B.cCd.prototype={
$1(d){var x=y.B
return A.b([F.l3(E.ca(U.KE,null),!0,48,D.auH,x),F.l3(E.ca(D.bJS,null),!0,48,D.Ol,x)],y.h)},
$S:z+1}
B.cCh.prototype={
$0(){return this.a.bEs(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"e3_","dJd",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Gs,A.K)
x(B.aXm,A.N)
w(A.d5,[B.cCi,B.cCj,B.cCk,B.cCh])
w(A.co,[B.cCb,B.cCf,B.cCe,B.cCc,B.cCd])
x(B.cCg,A.ej)
x(B.yj,A.fP)})()
A.cf(b.typeUniverse,JSON.parse('{"Gs":{"K":[],"e":[]},"aXm":{"N":["Gs"]}}'))
var y=(function rtii(){var x=A.J
return{B:x("yj"),_:x("W<@>"),t:x("v<A<h,@>>"),o:x("v<wK>"),h:x("v<o_<yj>>"),p:x("v<e>"),a:x("A<h,@>"),x:x("wK"),P:x("aH"),K:x("I"),N:x("h"),g:x("lE"),z:x("@"),X:x("I?"),H:x("~")}})();(function constants(){D.Ol=new B.yj(0,"delete")
D.auH=new B.yj(1,"edit")
D.aAM=new A.as(58652,"MaterialIcons",null,!1)
D.aCf=new A.cr(Q.Qx,null,null,null,null)
D.bJS=new A.ch("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["fDivIVCAO9Qwi26BL2Pt8jHCv8E="]=a.current})($__dart_deferred_initializers__);