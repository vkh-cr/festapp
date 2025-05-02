((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_357",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,O,P,Q,R,S,F,T,U,V,W,X,Y,Z,B={
d0b(d,e){return new B.yR(e,d)},
yR:function yR(d,e){this.c=d
this.a=e},
aMv:function aMv(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
c5b:function c5b(d,e){this.a=d
this.b=e},
c5h:function c5h(d,e){this.a=d
this.b=e},
c5i:function c5i(d,e){this.a=d
this.b=e},
c5f:function c5f(d){this.a=d},
c5e:function c5e(d,e,f){this.a=d
this.b=e
this.c=f},
c5c:function c5c(d,e){this.a=d
this.b=e},
c5d:function c5d(){},
c5g:function c5g(d,e){this.a=d
this.b=e},
vJ:function vJ(d,e){this.a=d
this.b=e},
d0a(d){return A.cEq(d)},
Gq(d){var x=0,w=A.m(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$Gq=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:n=$.As()
m=n.bC("news").h6(0,"id")
l=d.a
l.toString
v=d.d
m=A.pb(m.us(m.wt("created_at","lt."+l.j(0))),m.$ti.c).aDp("id",v)
l=$.d5
l.toString
x=2
return A.d(m.cm("occasion",l).bHD(0,"created_at").aCJ(1).Pt(),$async$Gq)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.bC("user_news").h6(0,"user").cm("news_id",v),$async$Gq)
case 6:t=f
s=A.a([],y.t)
for(n=J.aO(t),m=J.a3(u),l=y.N,r=y.z;n.q();){q=J.v(n.gL(n),"user")
p=m.i(u,"id")
o=$.d5
o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],l,r))}n=$.As()
x=7
return A.d(n.bC("user_news").aey(s),$async$Gq)
case 7:x=4
break
case 5:x=8
return A.d(n.bC("user_news").jO(0).cm("news_id",v),$async$Gq)
case 8:case 4:x=9
return A.d(n.bC("news").jO(0).cm("id",v),$async$Gq)
case 9:return A.k(null,w)}})
return A.l($async$Gq,w)},
b5u(d){var x=0,w=A.m(y.H),v
var $async$b5u=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.As().bC("news").eN(0,A.z(["message",d.b],v,v)).cm("id",d.d),$async$b5u)
case 2:return A.k(null,w)}})
return A.l($async$b5u,w)},
anp(d,e,f,g,h,i,j){var x=0,w=A.m(y.z),v,u,t,s,r,q,p,o
var $async$anp=A.i(function(k,l){if(k===1)return A.j(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.As().bC("news")
s=$.d5
s.toString
x=5
return A.d(t.jt(0,A.z(["occasion",s,"message",u,"created_by",$.e1().gdE().c.a],y.N,y.K)).ie(0),$async$anp)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.VY(Y.ahH(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.S)(t),++q){p=new A.d6("")
new G.bS_(p).bk(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.c8(o).length===0)continue
r+=o}r=C.e.c8(r)
t=$.As().bC("log_notifications")
s=$.d5
s.toString
x=8
return A.d(t.jt(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$anp)
case 8:A.bG(d,A.r("Message has been sent.",null),C.a8)
x=1
break
case 7:if(h)A.bG(d,A.r("Message has been created.",null),C.a8)
case 1:return A.k(v,w)}})
return A.l($async$anp,w)},
anq(d){var x=0,w=A.m(y.H),v,u,t,s
var $async$anq=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:s=$.e1()
if(s.gdE().d==null)A.a7(A.cM("User must be logged in."))
v=$.As()
u=v.bC("user_news").jO(0).cm("user",s.gdE().c.a)
t=$.d5
t.toString
x=2
return A.d(u.cm("occasion",t),$async$anq)
case 2:x=3
return A.d(v.bC("user_news").jt(0,A.z(["user",s.gdE().c.a,"news_id",d,"occasion",$.d5],y.N,y.X)).ie(0),$async$anq)
case 3:return A.k(null,w)}})
return A.l($async$anq,w)}},D,A_,E,A0,G,A1
J=c[1]
A=c[0]
C=c[2]
H=c[192]
I=c[179]
K=c[281]
L=c[213]
M=c[202]
N=c[193]
O=c[205]
P=c[217]
Q=c[137]
R=c[102]
S=c[342]
F=c[120]
T=c[303]
U=c[152]
V=c[237]
W=c[216]
X=c[256]
Y=c[94]
Z=c[109]
B=a.updateHolder(c[19],B)
D=c[357]
A_=c[246]
E=c[195]
A0=c[155]
G=c[164]
A1=c[199]
B.yR.prototype={
M(){return new B.aMv(A.a([],y.o))}}
B.aMv.prototype={
U(){this.ah()
this.b9()},
l(){this.ag()},
aS(){this.c5()
this.KQ()},
KQ(){var x=0,w=A.m(y.H),v=this,u
var $async$KQ=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Cz(u,null,y.X)
x=(u==null?null:u.grt())===!0&&!v.e?2:3
break
case 2:x=$.e1().gdE().d!=null&&J.j_(v.d)&&!J.hz(v.d).f?4:5
break
case 4:x=6
return A.d(B.anq(J.hz(v.d).d),$async$KQ)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.k(null,w)}})
return A.l($async$KQ,w)},
blY(d){H.kd(d,"newsForm",y.X).aX(0,new B.c5b(this,d),y.P)},
Zx(){var x=0,w=A.m(y.H),v=this,u
var $async$Zx=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.YL(),$async$Zx)
case 2:v.v(new u.c5h(v,e))
return A.k(null,w)}})
return A.l($async$Zx,w)},
nO(){var x=0,w=A.m(y.H),v=this,u
var $async$nO=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(U.m7("newsOffline",B.diR(),y.x),$async$nO)
case 2:v.v(new u.c5i(v,e))
return A.k(null,w)}})
return A.l($async$nO,w)},
b9(){var x=0,w=A.m(y.H),v=this
var $async$b9=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.nO(),$async$b9)
case 2:x=3
return A.d(v.Zx(),$async$b9)
case 3:x=4
return A.d(A.qn("newsOffline",v.d),$async$b9)
case 4:v.KQ()
return A.k(null,w)}})
return A.l($async$b9,w)},
B(d){var x,w,v=null,u=A.D(d).ax.a===C.r?$.ik():$.pO(),t=E.bi(D.bCT,v)
t=N.i9(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,Z.btx(),v,!0,v,v,v,v,v,t,v,v,v,1,v)
x=I.ly(!0,v,new B.c5f(this),J.bB(this.d),v,v,v,!1,C.I,!1)
w=A.j8()
return M.f0(t,u,new A.cz(C.aK,v,v,new A.cP(new A.ac(0,720,0,1/0),x,v),v),v,v,A.iB(A.a_c(v,S.fT,v,v,!1,new B.c5g(this,d),v),w),v,v)}}
B.vJ.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["V<~>(vJ)","C<ma<vJ>>(M)","up(A<h,@>)"])
B.c5b.prototype={
$1(d){var x=0,w=A.m(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:y.a.a(d)
u=J.a3(d)
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
s=B.anp(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.cD(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.b9(),$async$$1)
case 7:case 6:case 3:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:116}
B.c5h.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c5i.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c5f.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.v(p.d,e),n=e>0?J.v(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bw(x)===A.bw(w)&&A.bK(x)===A.bK(w)&&A.cC(x)===A.cC(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(L.fN)
if(!u||!v){u=d.ac(y.g).r.a
u===$&&A.b()
u=A.hS("EEEE d.M.y",u.gfa(0))
t=o.a
t.toString
t=u.dB(t)
if(o.f){u=p.c
u.toString
u=A.aC(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aC(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.az(A_.ij,A.T(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.k,q,q,q,q,q,q,D.aq7,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.aC(q,q,A.D(t).cy,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.aC(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a5(K.hH,A.T(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.c7(10)
u=A.D(d)
s=o.b
s.toString
r=$.e1().gdE().d
w.push(new A.a5(V.BI,A.az(q,A.ak(A.a([new A.a5(O.b0,new A0.hq(s,18,!0,q,q),q),A.iB(new A.a5(C.aB,A.av(A.a([A.bp(D.asO,A.D(d).ay,q,16),W.aay,A.T(C.c.j(o.e),q,q,q,q,q,q,q,A.aC(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),P.jv],x),C.i,C.da,C.h,0,q),q),r!=null)],x),C.i,C.f,C.h,q,C.m),C.k,q,q,new A.bf(u.ax.k2,q,q,t,q,q,q,C.P),q,q,q,q,q,q,q),q))
t=A.j8()
w.push(A.iB(R.J5(q,D.atJ,new B.c5d(),new B.c5e(p,o,d),y.B),t))
return A.ak(w,C.bo,C.f,C.h,q,C.m)},
$S:993}
B.c5e.prototype={
$1(d){return this.aHN(d)},
aHN(d){var x=0,w=A.m(y.H),v=this,u,t,s
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.Ki?2:4
break
case 2:x=5
return A.d(B.Gq(t),$async$$1)
case 5:A.bG(s,A.r("Message has been removed.",null),C.a8)
x=3
break
case 4:u=Q.q4(A.z(["content",t.b],y.N,y.z),$.d5)
x=6
return A.d(A1.f3(s,!1).f.i8(u,y.X).aX(0,new B.c5c(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.b9(),$async$$1)
case 7:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:z+0}
B.c5c.prototype={
$1(d){var x=0,w=A.m(y.P),v=this,u
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bj(d)
x=4
return A.d(B.b5u(u),$async$$1)
case 4:A.bG(v.b,A.r("Message has been changed.",null),C.a8)
case 3:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:116}
B.c5d.prototype={
$1(d){var x=y.B
return A.a([F.ux(E.bi(X.GM,null),!0,48,D.anI,x),F.ux(E.bi(D.bCu,null),!0,48,D.Ki,x)],y.h)},
$S:z+1}
B.c5g.prototype={
$0(){return this.a.blY(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"diR","d0a",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.yR,A.I)
x(B.aMv,A.L)
w(A.bJ,[B.c5b,B.c5e,B.c5c,B.c5d])
w(A.cn,[B.c5h,B.c5i,B.c5g])
x(B.c5f,A.ds)
x(B.vJ,A.e7)})()
A.br(b.typeUniverse,JSON.parse('{"yR":{"I":[],"e":[]},"aMv":{"L":["yR"]}}'))
var y=(function rtii(){var x=A.B
return{B:x("vJ"),_:x("V<@>"),t:x("u<A<h,@>>"),o:x("u<up>"),h:x("u<ma<vJ>>"),p:x("u<e>"),a:x("A<h,@>"),x:x("up"),P:x("aF"),K:x("G"),N:x("h"),g:x("kI"),z:x("@"),X:x("G?"),H:x("~")}})();(function constants(){D.Ki=new B.vJ(0,"delete")
D.anI=new B.vJ(1,"edit")
D.aq7=new A.ap(16,8,16,0)
D.asO=new A.aD(58652,"MaterialIcons",null,!1)
D.atJ=new A.db(T.Ma,null,null,null,null)
D.bCu=new A.c6("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bCT=new A.c6("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_357",e:"endPart",h:b})})($__dart_deferred_initializers__,"bzBxN48WZFZdbKMHQCDF88PbDq4=");