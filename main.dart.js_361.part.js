((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_361",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,O,P,Q,R,S,F,T,U,V,W,X,Y,Z,B={
cVE(d,e){return new B.yB(e,d)},
yB:function yB(d,e){this.c=d
this.a=e},
aLf:function aLf(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
c21:function c21(d,e){this.a=d
this.b=e},
c27:function c27(d,e){this.a=d
this.b=e},
c28:function c28(d,e){this.a=d
this.b=e},
c25:function c25(d){this.a=d},
c24:function c24(d,e,f){this.a=d
this.b=e
this.c=f},
c22:function c22(d,e){this.a=d
this.b=e},
c23:function c23(){},
c26:function c26(d,e){this.a=d
this.b=e},
vv:function vv(d,e){this.a=d
this.b=e},
cVD(d){return A.cyX(d)},
G2(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$G2=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:n=$.Ae()
m=n.bA("news").hg(0,"id")
l=d.a
l.toString
v=d.d
m=A.oZ(m.um(m.wv("created_at","lt."+l.j(0))),m.$ti.c).aCx("id",v)
l=$.dU
l.toString
x=2
return A.c(m.cn("occasion",l).bFn(0,"created_at").aBR(1).Pg(),$async$G2)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.c(n.bA("user_news").hg(0,"user").cn("news_id",v),$async$G2)
case 6:t=f
s=A.a([],y.t)
for(n=J.aL(t),m=J.a2(u),l=y.N,r=y.z;n.q();){q=J.v(n.gL(n),"user")
p=m.i(u,"id")
o=$.dU
o.toString
s.push(A.y(["user",q,"news_id",p,"occasion",o],l,r))}n=$.Ae()
x=7
return A.c(n.bA("user_news").adY(s),$async$G2)
case 7:x=4
break
case 5:x=8
return A.c(n.bA("user_news").jE(0).cn("news_id",v),$async$G2)
case 8:case 4:x=9
return A.c(n.bA("news").jE(0).cn("id",v),$async$G2)
case 9:return A.i(null,w)}})
return A.j($async$G2,w)},
b4a(d){var x=0,w=A.k(y.H),v
var $async$b4a=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.c($.Ae().bA("news").eK(0,A.y(["message",d.b],v,v)).cn("id",d.d),$async$b4a)
case 2:return A.i(null,w)}})
return A.j($async$b4a,w)},
amr(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$amr=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Ae().bA("news")
s=$.dU
s.toString
x=5
return A.c(t.jN(0,A.y(["occasion",s,"message",u,"created_by",$.dY().gdD().c.a],y.N,y.K)).ik(0),$async$amr)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.LN(Y.agP(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.Q)(t),++q){p=new A.d8("")
new G.bPo(p).bi(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.cZ(o).length===0)continue
r+=o}r=C.e.cZ(r)
t=$.Ae().bA("log_notifications")
s=$.dU
s.toString
x=8
return A.c(t.jN(0,A.y(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$amr)
case 8:A.bF(d,A.r("Message has been sent.",null),C.a5)
x=1
break
case 7:if(h)A.bF(d,A.r("Message has been created.",null),C.a5)
case 1:return A.i(v,w)}})
return A.j($async$amr,w)},
ams(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$ams=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.dY()
if(s.gdD().d==null)A.a6(A.cT("User must be logged in."))
v=$.Ae()
u=v.bA("user_news").jE(0).cn("user",s.gdD().c.a)
t=$.dU
t.toString
x=2
return A.c(u.cn("occasion",t),$async$ams)
case 2:x=3
return A.c(v.bA("user_news").jN(0,A.y(["user",s.gdD().c.a,"news_id",d,"occasion",$.dU],y.N,y.X)).ik(0),$async$ams)
case 3:return A.i(null,w)}})
return A.j($async$ams,w)}},D,A_,E,A0,A1,G
J=c[1]
A=c[0]
C=c[2]
H=c[189]
I=c[172]
K=c[284]
L=c[201]
M=c[210]
N=c[190]
O=c[211]
P=c[216]
Q=c[133]
R=c[98]
S=c[343]
F=c[116]
T=c[305]
U=c[147]
V=c[215]
W=c[237]
X=c[255]
Y=c[90]
Z=c[106]
B=a.updateHolder(c[19],B)
D=c[358]
A_=c[245]
E=c[192]
A0=c[198]
A1=c[150]
G=c[158]
B.yB.prototype={
M(){return new B.aLf(A.a([],y.o))}}
B.aLf.prototype={
X(){this.aj()
this.b8()},
l(){this.ag()},
aS(){this.c7()
this.KF()},
KF(){var x=0,w=A.k(y.H),v=this,u
var $async$KF=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Cm(u,null,y.X)
x=(u==null?null:u.gro())===!0&&!v.e?2:3
break
case 2:x=$.dY().gdD().d!=null&&J.j9(v.d)&&!J.hn(v.d).f?4:5
break
case 4:x=6
return A.c(B.ams(J.hn(v.d).d),$async$KF)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$KF,w)},
bkK(d){H.k9(d,"newsForm",y.X).aU(0,new B.c21(this,d),y.P)},
Z6(){var x=0,w=A.k(y.H),v=this,u
var $async$Z6=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(A.Y7(),$async$Z6)
case 2:v.B(new u.c27(v,e))
return A.i(null,w)}})
return A.j($async$Z6,w)},
nI(){var x=0,w=A.k(y.H),v=this,u
var $async$nI=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(U.mR("newsOffline",B.cVC(),y.x),$async$nI)
case 2:v.B(new u.c28(v,e))
return A.i(null,w)}})
return A.j($async$nI,w)},
b8(){var x=0,w=A.k(y.H),v=this
var $async$b8=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.nI(),$async$b8)
case 2:x=3
return A.c(v.Z6(),$async$b8)
case 3:x=4
return A.c(A.rn("newsOffline",v.d),$async$b8)
case 4:v.KF()
return A.i(null,w)}})
return A.j($async$b8,w)},
A(d){var x,w,v=null,u=A.C(d).ax.a===C.t?$.iO():$.qF(),t=E.bc(D.b4z,v)
t=N.ia(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,Z.bt4(),v,!0,v,v,v,v,v,t,v,v,v,1,v)
x=I.ln(!0,v,new B.c25(this),J.bv(this.d),v,v,v,!1,C.F,!1)
w=A.j1()
return L.f2(t,u,new A.cv(C.aF,v,v,new A.cO(new A.aa(0,820,0,1/0),x,v),v),v,v,A.it(A.ZB(v,S.fk,v,v,!1,new B.c26(this,d),v),w),v,v)}}
B.vv.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["T<~>(vv)","A<m0<vv>>(M)","uc(ae<e,@>)"])
B.c21.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:y.a.a(d)
u=J.a2(d)
t=u.i(d,"add_to_news")
if(t==null)t=!0
s=u.i(d,"with_notification")
s.toString
r=u.i(d,"to")
q=u.i(d,"content")
q.toString
p=u.i(d,"heading")
u=u.i(d,"heading_default")
u.toString
s=B.amr(v.b,p,u,q,t,s,r)
x=4
return A.c(y._.b(s)?s:A.cB(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.c(v.a.b8(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:94}
B.c27.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c28.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c25.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.v(p.d,e),n=e>0?J.v(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bC(x)===A.bC(w)&&A.bO(x)===A.bO(w)&&A.cN(x)===A.cN(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(M.fe)
if(!u||!v){u=d.ad(y.g).r.a
u===$&&A.b()
u=A.ie("EEEE d.M.y",u.gfj(0))
t=o.a
t.toString
t=u.dS(t)
if(o.f){u=p.c
u.toString
u=A.aB(q,q,A.C(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aB(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aC(A_.hA,A.W(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.k,q,q,q,q,q,q,D.ajg,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.aB(q,q,A.C(t).cy,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.aB(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a3(K.h2,A.W(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.cl(10)
u=A.C(d)
s=o.b
s.toString
r=$.dY().gdD().d
w.push(new A.a3(W.I0,A.aC(q,A.am(A.a([new A.a3(O.aZ,new A1.he(s,18,!0,q,q),q),A.it(new A.a3(C.aw,A.aw(A.a([A.bp(D.alR,A.C(d).ay,q,16),V.a3U,A.W(C.c.j(o.e),q,q,q,q,q,q,q,A.aB(q,q,A.C(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),P.jO],x),C.i,C.cB,C.h,0,q),q),r!=null)],x),C.i,C.f,C.h,q,C.l),C.k,q,q,new A.bu(u.ax.k2,q,q,t,q,q,q,C.R),q,q,q,q,q,q,q),q))
t=A.j1()
w.push(A.it(R.IV(q,D.amM,new B.c23(),new B.c24(p,o,d),y.B),t))
return A.am(w,C.bj,C.f,C.h,q,C.l)},
$S:970}
B.c24.prototype={
$1(d){return this.aGO(d)},
aGO(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.Hc?2:4
break
case 2:x=5
return A.c(B.G2(t),$async$$1)
case 5:A.bF(s,A.r("Message has been removed.",null),C.a5)
x=3
break
case 4:u=Q.pS(A.y(["content",t.b],y.N,y.z),null)
x=6
return A.c(A0.eX(s,!1).f.ig(u,y.X).aU(0,new B.c22(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.c(v.a.b8(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.c22.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bd(d)
x=4
return A.c(B.b4a(u),$async$$1)
case 4:A.bF(v.b,A.r("Message has been changed.",null),C.a5)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:94}
B.c23.prototype={
$1(d){var x=y.B
return A.a([F.un(E.bc(X.DN,null),!0,48,D.agT,x),F.un(E.bc(D.b4a,null),!0,48,D.Hc,x)],y.h)},
$S:z+1}
B.c26.prototype={
$0(){return this.a.bkK(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"cVC","cVD",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.yB,A.F)
x(B.aLf,A.K)
w(A.bA,[B.c21,B.c24,B.c22,B.c23])
w(A.ci,[B.c27,B.c28,B.c26])
x(B.c25,A.du)
x(B.vv,A.e3)})()
A.bm(b.typeUniverse,JSON.parse('{"yB":{"F":[],"d":[]},"aLf":{"K":["yB"]}}'))
var y=(function rtii(){var x=A.z
return{B:x("vv"),_:x("T<@>"),t:x("q<ae<e,@>>"),o:x("q<uc>"),h:x("q<m0<vv>>"),p:x("q<d>"),a:x("ae<e,@>"),x:x("uc"),P:x("aA"),K:x("E"),N:x("e"),g:x("l6"),z:x("@"),X:x("E?"),H:x("~")}})();(function constants(){D.Hc=new B.vv(0,"delete")
D.agT=new B.vv(1,"edit")
D.ajg=new A.ao(16,8,16,0)
D.alR=new A.aE(58652,"MaterialIcons",null,!1)
D.amM=new A.dl(T.J6,null,null,null,null)
D.b4a=new A.c0("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4z=new A.c0("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_361",e:"endPart",h:b})})($__dart_deferred_initializers__,"9cCv2/Cq9vjIamvFR4HkSmNUb+g=");