((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_354",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,B={
d3s(d,e){return new B.za(e,d)},
za:function za(d,e){this.c=d
this.a=e},
aN9:function aN9(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
c75:function c75(d,e){this.a=d
this.b=e},
c7b:function c7b(d,e){this.a=d
this.b=e},
c7c:function c7c(d,e){this.a=d
this.b=e},
c79:function c79(d){this.a=d},
c78:function c78(d,e,f){this.a=d
this.b=e
this.c=f},
c76:function c76(d,e){this.a=d
this.b=e},
c77:function c77(){},
c7a:function c7a(d,e){this.a=d
this.b=e},
w0:function w0(d,e){this.a=d
this.b=e},
d3r(d){return A.cGC(d)},
GV(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$GV=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:n=$.AP()
m=n.bF("news").hc(0,"id")
l=d.a
l.toString
v=d.d
m=A.pi(m.uE(m.wD("created_at","lt."+l.j(0))),m.$ti.c).aEu("id",v)
l=A.di()
l.toString
x=2
return A.d(m.co("occasion",l).bJs(0,"created_at").aDO(1).PD(),$async$GV)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.bF("user_news").hc(0,"user").co("news_id",v),$async$GV)
case 6:t=f
s=A.a([],y.t)
for(n=J.aO(t),m=y.N,l=y.z,r=J.a1(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.ha
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],m,l))}n=$.AP()
x=7
return A.d(n.bF("user_news").afy(s),$async$GV)
case 7:x=4
break
case 5:x=8
return A.d(n.bF("user_news").jZ(0).co("news_id",v),$async$GV)
case 8:case 4:x=9
return A.d(n.bF("news").jZ(0).co("id",v),$async$GV)
case 9:return A.i(null,w)}})
return A.j($async$GV,w)},
b6o(d){var x=0,w=A.k(y.H),v
var $async$b6o=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.AP().bF("news").eS(0,A.z(["message",d.b],v,v)).co("id",d.d),$async$b6o)
case 2:return A.i(null,w)}})
return A.j($async$b6o,w)},
anZ(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$anZ=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.AP().bF("news")
s=A.di()
s.toString
x=5
return A.d(t.jF(0,A.z(["occasion",s,"message",u,"created_by",$.e3().gdG().c.a],y.N,y.K)).im(0),$async$anZ)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.Wz(X.Wx(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.S)(t),++q){p=new A.d5("")
new G.aIw(p).bk(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.by(o).length===0)continue
r+=o}r=C.e.by(r)
t=$.AP().bF("log_notifications")
s=A.di()
s.toString
x=8
return A.d(t.jF(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$anZ)
case 8:A.bH(d,A.t("Message has been sent.",null),C.a8)
x=1
break
case 7:if(h)A.bH(d,A.t("Message has been created.",null),C.a8)
case 1:return A.i(v,w)}})
return A.j($async$anZ,w)},
ao_(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$ao_=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.e3()
if(s.gdG().d==null)A.a7(A.cP("User must be logged in."))
v=$.AP()
u=v.bF("user_news").jZ(0).co("user",s.gdG().c.a)
t=A.di()
t.toString
x=2
return A.d(u.co("occasion",t),$async$ao_)
case 2:x=3
return A.d(v.bF("user_news").jF(0,A.z(["user",s.gdG().c.a,"news_id",d,"occasion",A.di()],y.N,y.X)).im(0),$async$ao_)
case 3:return A.i(null,w)}})
return A.j($async$ao_,w)}},D,A_,F,A0,E,A1,G
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
B.za.prototype={
M(){return new B.aN9(A.a([],y.o))}}
B.aN9.prototype={
U(){this.ag()
this.bb()},
l(){this.af()},
aV(){this.c8()
this.L0()},
L0(){var x=0,w=A.k(y.H),v=this,u
var $async$L0=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.D0(u,null,y.X)
x=(u==null?null:u.grG())===!0&&!v.e?2:3
break
case 2:x=$.e3().gdG().d!=null&&J.j8(v.d)&&!J.hp(v.d).f?4:5
break
case 4:x=6
return A.d(B.ao_(J.hp(v.d).d),$async$L0)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$L0,w)},
bnm(d){H.kh(d,"newsForm",y.X).aS(new B.c75(this,d),y.P)},
ZQ(){var x=0,w=A.k(y.H),v=this,u
var $async$ZQ=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.Zl(),$async$ZQ)
case 2:v.A(new u.c7b(v,e))
return A.i(null,w)}})
return A.j($async$ZQ,w)},
nS(){var x=0,w=A.k(y.H),v=this,u
var $async$nS=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(T.mf("newsOffline",B.dms(),y.x),$async$nS)
case 2:v.A(new u.c7c(v,e))
return A.i(null,w)}})
return A.j($async$nS,w)},
bb(){var x=0,w=A.k(y.H),v=this
var $async$bb=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.nS(),$async$bb)
case 2:x=3
return A.d(v.ZQ(),$async$bb)
case 3:x=4
return A.d(A.qu("newsOffline",v.d),$async$bb)
case 4:v.L0()
return A.i(null,w)}})
return A.j($async$bb,w)},
B(d){var x,w,v=this,u=null,t=A.D(d).ax.a===C.t?$.is():$.pV(),s=F.bk(D.bEH,u)
s=M.ie(u,u,u,!0,u,u,1,u,u,u,!1,u,!1,u,u,Y.bv1(),u,!0,u,u,u,u,u,s,u,u,u,1,u)
x=J.fi(v.d)?new A.a5(P.Li,A.aj(A.a([A.bp(D.auk,A.D(d).ay,u,64),Z.a2,A.T(A.WE("No news messages yet",u,u,u,u),u,u,u,u,u,u,u,u,C.b1,u,u,u,u)],y.p),C.i,C.bs,C.h,u,C.m),u):I.lI(!0,u,new B.c79(v),J.bz(v.d),u,u,u,!1,C.I,!1)
w=A.j_()
return L.f4(s,t,new A.cB(C.aK,u,u,new A.cO(new A.ac(0,720,0,1/0),x,u),u),u,u,A.iG(A.a_N(u,S.fT,u,u,!1,new B.c7a(v,d),u),w),u,u)}}
B.w0.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["V<~>(w0)","C<mi<w0>>(L)","uI(B<m,@>)"])
B.c75.prototype={
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
s=B.anZ(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.ca(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.bb(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:110}
B.c7b.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c7c.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c79.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.v(p.d,e),n=e>0?J.v(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bA(x)===A.bA(w)&&A.bK(x)===A.bK(w)&&A.cJ(x)===A.cJ(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(N.fN)
if(!u||!v){u=d.ac(y.g).r.a
u===$&&A.b()
u=A.hW("EEEE d.M.y",u.gfe(0))
t=o.a
t.toString
t=u.dB(t)
if(o.f){u=p.c
u.toString
u=A.aD(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aD(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.az(A_.ij,A.T(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.k,q,q,q,q,q,q,D.aqW,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.aD(q,q,A.D(t).cy,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.aD(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a5(K.hI,A.T(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.c7(10)
u=A.D(d)
s=o.b
s.toString
r=$.e3().gdG().d
w.push(new A.a5(U.BR,A.az(q,A.aj(A.a([new A.a5(O.b_,new E.h6(s,18,!0,q,q),q),A.iG(new A.a5(C.aB,A.av(A.a([A.bp(D.atU,A.D(d).ay,q,16),V.aaQ,A.T(C.c.j(o.e),q,q,q,q,q,q,q,A.aD(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),Q.jv],x),C.i,C.db,C.h,0,q),q),r!=null)],x),C.i,C.f,C.h,q,C.m),C.k,q,q,new A.bg(u.ax.k2,q,q,t,q,q,q,C.P),q,q,q,q,q,q,q),q))
t=A.j_()
w.push(A.iG(E.JA(q,D.auQ,new B.c77(),new B.c78(p,o,d),q,y.B),t))
return A.aj(w,C.bp,C.f,C.h,q,C.m)},
$S:1034}
B.c78.prototype={
$1(d){return this.aIX(d)},
aIX(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.Kw?2:4
break
case 2:x=5
return A.d(B.GV(t),$async$$1)
case 5:A.bH(s,A.t("Message has been removed.",null),C.a8)
x=3
break
case 4:u=R.qb(A.z(["content",t.b],y.N,y.z),A.di())
x=6
return A.d(A0.ff(s,!1).f.ih(u,y.X).aS(new B.c76(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.bb(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.c76.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bl(d)
x=4
return A.d(B.b6o(u),$async$$1)
case 4:A.bH(v.b,A.t("Message has been changed.",null),C.a8)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:110}
B.c77.prototype={
$1(d){var x=null,w=y.B
return A.a([E.uP(F.bk(W.GY,x),!0,48,x,x,x,x,x,D.aok,w),E.uP(F.bk(D.bEi,x),!0,48,x,x,x,x,x,D.Kw,w)],y.h)},
$S:z+1}
B.c7a.prototype={
$0(){return this.a.bnm(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dms","d3r",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.za,A.I)
x(B.aN9,A.M)
w(A.bN,[B.c75,B.c78,B.c76,B.c77])
w(A.cp,[B.c7b,B.c7c,B.c7a])
x(B.c79,A.du)
x(B.w0,A.dW)})()
A.bt(b.typeUniverse,JSON.parse('{"za":{"I":[],"e":[]},"aN9":{"M":["za"]}}'))
var y=(function rtii(){var x=A.A
return{B:x("w0"),_:x("V<@>"),t:x("r<B<m,@>>"),o:x("r<uI>"),h:x("r<mi<w0>>"),p:x("r<e>"),a:x("B<m,@>"),x:x("uI"),P:x("aF"),K:x("F"),N:x("m"),g:x("kO"),z:x("@"),X:x("F?"),H:x("~")}})();(function constants(){D.Kw=new B.w0(0,"delete")
D.aok=new B.w0(1,"edit")
D.aqW=new A.ap(16,8,16,0)
D.atU=new A.aC(58652,"MaterialIcons",null,!1)
D.auk=new A.aC(61075,"MaterialIcons",null,!1)
D.auQ=new A.dd(A1.Mm,null,null,null,null)
D.bEi=new A.c9("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bEH=new A.c9("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_354",e:"endPart",h:b})})($__dart_deferred_initializers__,"w9hdrf0XbuejR1zJrbSa2JZSHSk=");