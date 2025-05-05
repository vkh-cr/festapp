((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_354",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,B={
d6i(d,e){return new B.zo(e,d)},
zo:function zo(d,e){this.c=d
this.a=e},
aNU:function aNU(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
c9d:function c9d(d,e){this.a=d
this.b=e},
c9j:function c9j(d,e){this.a=d
this.b=e},
c9k:function c9k(d,e){this.a=d
this.b=e},
c9h:function c9h(d){this.a=d},
c9g:function c9g(d,e,f){this.a=d
this.b=e
this.c=f},
c9e:function c9e(d,e){this.a=d
this.b=e},
c9f:function c9f(){},
c9i:function c9i(d,e){this.a=d
this.b=e},
w7:function w7(d,e){this.a=d
this.b=e},
d6h(d){return A.cJg(d)},
H8(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$H8=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:n=$.B4()
m=n.bU("news").hx(0,"id")
l=d.a
l.toString
v=d.d
m=A.pn(m.uL(m.wL("created_at","lt."+l.j(0))),m.$ti.c).aFw("id",v)
l=A.dl()
l.toString
x=2
return A.d(m.ct("occasion",l).bLz(0,"created_at").aEQ(1).Q0(),$async$H8)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.bU("user_news").hx(0,"user").ct("news_id",v),$async$H8)
case 6:t=f
s=A.a([],y.t)
for(n=J.aP(t),m=y.N,l=y.z,r=J.a2(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.h1
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],m,l))}n=$.B4()
x=7
return A.d(n.bU("user_news").agg(s),$async$H8)
case 7:x=4
break
case 5:x=8
return A.d(n.bU("user_news").iL(0).ct("news_id",v),$async$H8)
case 8:case 4:x=9
return A.d(n.bU("news").iL(0).ct("id",v),$async$H8)
case 9:return A.i(null,w)}})
return A.j($async$H8,w)},
b7h(d){var x=0,w=A.k(y.H),v
var $async$b7h=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.B4().bU("news").eS(0,A.z(["message",d.b],v,v)).ct("id",d.d),$async$b7h)
case 2:return A.i(null,w)}})
return A.j($async$b7h,w)},
aox(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$aox=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.B4().bU("news")
s=A.dl()
s.toString
x=5
return A.d(t.jl(0,A.z(["occasion",s,"message",u,"created_by",$.e5().gdH().c.a],y.N,y.K)).im(0),$async$aox)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.WQ(X.WO(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.S)(t),++q){p=new A.d6("")
new G.aJb(p).bk(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.bq(o).length===0)continue
r+=o}r=C.e.bq(r)
t=$.B4().bU("log_notifications")
s=A.dl()
s.toString
x=8
return A.d(t.jl(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$aox)
case 8:A.bH(d,A.u("Message has been sent.",null),C.a8)
x=1
break
case 7:if(h)A.bH(d,A.u("Message has been created.",null),C.a8)
case 1:return A.i(v,w)}})
return A.j($async$aox,w)},
aoy(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$aoy=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.e5()
if(s.gdH().d==null)A.a7(A.cN("User must be logged in."))
v=$.B4()
u=v.bU("user_news").iL(0).ct("user",s.gdH().c.a)
t=A.dl()
t.toString
x=2
return A.d(u.ct("occasion",t),$async$aoy)
case 2:x=3
return A.d(v.bU("user_news").jl(0,A.z(["user",s.gdH().c.a,"news_id",d,"occasion",A.dl()],y.N,y.X)).im(0),$async$aoy)
case 3:return A.i(null,w)}})
return A.j($async$aoy,w)}},D,A_,F,A0,E,A1,G
J=c[1]
A=c[0]
C=c[2]
H=c[188]
I=c[174]
K=c[280]
L=c[198]
M=c[189]
N=c[209]
O=c[201]
P=c[333]
Q=c[213]
R=c[134]
S=c[341]
T=c[147]
U=c[234]
V=c[212]
W=c[254]
X=c[110]
Y=c[109]
Z=c[210]
B=a.updateHolder(c[19],B)
D=c[357]
A_=c[243]
F=c[191]
A0=c[195]
E=c[150]
A1=c[263]
G=c[159]
B.zo.prototype={
M(){return new B.aNU(A.a([],y.o))}}
B.aNU.prototype={
U(){this.ae()
this.bc()},
l(){this.ag()},
aV(){this.c8()
this.Lk()},
Lk(){var x=0,w=A.k(y.H),v=this,u
var $async$Lk=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Dd(u,null,y.X)
x=(u==null?null:u.grL())===!0&&!v.e?2:3
break
case 2:x=$.e5().gdH().d!=null&&J.jd(v.d)&&!J.hq(v.d).f?4:5
break
case 4:x=6
return A.d(B.aoy(J.hq(v.d).d),$async$Lk)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$Lk,w)},
bp8(d){H.kl(d,"newsForm",y.X).aO(new B.c9d(this,d),y.P)},
a_f(){var x=0,w=A.k(y.H),v=this,u
var $async$a_f=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.ZB(),$async$a_f)
case 2:v.B(new u.c9j(v,e))
return A.i(null,w)}})
return A.j($async$a_f,w)},
nV(){var x=0,w=A.k(y.H),v=this,u
var $async$nV=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(T.ml("newsOffline",B.dpq(),y.x),$async$nV)
case 2:v.B(new u.c9k(v,e))
return A.i(null,w)}})
return A.j($async$nV,w)},
bc(){var x=0,w=A.k(y.H),v=this
var $async$bc=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.nV(),$async$bc)
case 2:x=3
return A.d(v.a_f(),$async$bc)
case 3:x=4
return A.d(A.qB("newsOffline",v.d),$async$bc)
case 4:v.Lk()
return A.i(null,w)}})
return A.j($async$bc,w)},
A(d){var x,w,v=this,u=null,t=A.D(d).ax.a===C.t?$.iy():$.pZ(),s=F.bl(D.bF9,u)
s=M.ih(u,u,u,!0,u,u,1,u,u,u,!1,u,!1,u,u,Y.bwA(),u,!0,u,u,u,u,u,s,u,u,u,1,u)
x=J.fk(v.d)?new A.a6(P.Lr,A.aj(A.a([A.bp(D.auI,A.D(d).ay,u,64),Z.a2,A.U(A.WV("No news messages yet",u,u,u,u),u,u,u,u,u,u,u,u,C.b1,u,u,u,u)],y.p),C.i,C.bs,C.h,u,C.m),u):I.lM(!0,u,new B.c9h(v),J.bu(v.d),u,u,u,!1,C.J,!1)
w=A.j3()
return L.f4(s,t,new A.cC(C.aK,u,u,new A.cQ(new A.ac(0,720,0,1/0),x,u),u),u,u,A.iL(A.a04(u,S.fU,u,u,!1,new B.c9i(v,d),u),w),u,u)}}
B.w7.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["T<~>(w7)","C<mo<w7>>(L)","uP(B<m,@>)"])
B.c9d.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:y.a.a(d)
u=J.a2(d)
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
s=B.aox(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.c8(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.bc(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:104}
B.c9j.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c9k.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c9h.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.v(p.d,e),n=e>0?J.v(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bA(x)===A.bA(w)&&A.bL(x)===A.bL(w)&&A.cL(x)===A.cL(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(N.fQ)
if(!u||!v){u=d.ac(y.g).r.a
u===$&&A.b()
u=A.hZ("EEEE d.M.y",u.gff(0))
t=o.a
t.toString
t=u.dC(t)
if(o.f){u=p.c
u.toString
u=A.aE(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aE(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.az(A_.ij,A.U(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.k,q,q,q,q,q,q,D.are,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.aE(q,q,A.D(t).cy,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.aE(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a6(K.hI,A.U(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.c9(10)
u=A.D(d)
s=o.b
s.toString
r=$.e5().gdH().d
w.push(new A.a6(U.BX,A.az(q,A.aj(A.a([new A.a6(O.b_,new E.h9(s,18,!0,q,q),q),A.iL(new A.a6(C.aB,A.av(A.a([A.bp(D.auh,A.D(d).ay,q,16),V.ab3,A.U(C.c.j(o.e),q,q,q,q,q,q,q,A.aE(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),Q.jv],x),C.i,C.db,C.h,0,q),q),r!=null)],x),C.i,C.f,C.h,q,C.m),C.k,q,q,new A.bh(u.ax.k2,q,q,t,q,q,q,C.P),q,q,q,q,q,q,q),q))
t=A.j3()
w.push(A.iL(E.JP(q,D.avd,new B.c9f(),new B.c9g(p,o,d),q,y.B),t))
return A.aj(w,C.bp,C.f,C.h,q,C.m)},
$S:1039}
B.c9g.prototype={
$1(d){return this.aK4(d)},
aK4(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.KE?2:4
break
case 2:x=5
return A.d(B.H8(t),$async$$1)
case 5:A.bH(s,A.u("Message has been removed.",null),C.a8)
x=3
break
case 4:u=R.qh(A.z(["content",t.b],y.N,y.z),A.dl())
x=6
return A.d(A0.fh(s,!1).f.ih(u,y.X).aO(new B.c9e(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.bc(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.c9e.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bd(d)
x=4
return A.d(B.b7h(u),$async$$1)
case 4:A.bH(v.b,A.u("Message has been changed.",null),C.a8)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:104}
B.c9f.prototype={
$1(d){var x=null,w=y.B
return A.a([E.uW(F.bl(W.H4,x),!0,48,x,x,x,x,x,D.aoC,w),E.uW(F.bl(D.bEL,x),!0,48,x,x,x,x,x,D.KE,w)],y.h)},
$S:z+1}
B.c9i.prototype={
$0(){return this.a.bp8(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dpq","d6h",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.zo,A.I)
x(B.aNU,A.M)
w(A.bN,[B.c9d,B.c9g,B.c9e,B.c9f])
w(A.cp,[B.c9j,B.c9k,B.c9i])
x(B.c9h,A.dw)
x(B.w7,A.dY)})()
A.bt(b.typeUniverse,JSON.parse('{"zo":{"I":[],"e":[]},"aNU":{"M":["zo"]}}'))
var y=(function rtii(){var x=A.A
return{B:x("w7"),_:x("T<@>"),t:x("r<B<m,@>>"),o:x("r<uP>"),h:x("r<mo<w7>>"),p:x("r<e>"),a:x("B<m,@>"),x:x("uP"),P:x("aC"),K:x("E"),N:x("m"),g:x("kU"),z:x("@"),X:x("E?"),H:x("~")}})();(function constants(){D.KE=new B.w7(0,"delete")
D.aoC=new B.w7(1,"edit")
D.are=new A.ap(16,8,16,0)
D.auh=new A.aD(58652,"MaterialIcons",null,!1)
D.auI=new A.aD(61075,"MaterialIcons",null,!1)
D.avd=new A.dd(A1.My,null,null,null,null)
D.bEL=new A.cb("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bF9=new A.cb("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_354",e:"endPart",h:b})})($__dart_deferred_initializers__,"3WmQ5DyzRsnil0EYPqbHPczFw6s=");