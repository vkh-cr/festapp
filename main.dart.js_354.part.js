((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_354",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,B={
d3e(d,e){return new B.z9(e,d)},
z9:function z9(d,e){this.c=d
this.a=e},
aN4:function aN4(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
c6R:function c6R(d,e){this.a=d
this.b=e},
c6X:function c6X(d,e){this.a=d
this.b=e},
c6Y:function c6Y(d,e){this.a=d
this.b=e},
c6V:function c6V(d){this.a=d},
c6U:function c6U(d,e,f){this.a=d
this.b=e
this.c=f},
c6S:function c6S(d,e){this.a=d
this.b=e},
c6T:function c6T(){},
c6W:function c6W(d,e){this.a=d
this.b=e},
w0:function w0(d,e){this.a=d
this.b=e},
d3d(d){return A.cGq(d)},
GR(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$GR=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:n=$.AO()
m=n.bT("news").hs(0,"id")
l=d.a
l.toString
v=d.d
m=A.ph(m.uD(m.wC("created_at","lt."+l.j(0))),m.$ti.c).aEu("id",v)
l=A.dl()
l.toString
x=2
return A.d(m.cr("occasion",l).bJr(0,"created_at").aDO(1).PB(),$async$GR)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.bT("user_news").hs(0,"user").cr("news_id",v),$async$GR)
case 6:t=f
s=A.a([],y.t)
for(n=J.aR(t),m=y.N,l=y.z,r=J.a2(u);n.q();){q=J.v(n.gL(n),"user")
p=r.h(u,"id")
o=$.h0
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],m,l))}n=$.AO()
x=7
return A.d(n.bT("user_news").afy(s),$async$GR)
case 7:x=4
break
case 5:x=8
return A.d(n.bT("user_news").jY(0).cr("news_id",v),$async$GR)
case 8:case 4:x=9
return A.d(n.bT("news").jY(0).cr("id",v),$async$GR)
case 9:return A.i(null,w)}})
return A.j($async$GR,w)},
b6c(d){var x=0,w=A.k(y.H),v
var $async$b6c=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.AO().bT("news").eS(0,A.z(["message",d.b],v,v)).cr("id",d.d),$async$b6c)
case 2:return A.i(null,w)}})
return A.j($async$b6c,w)},
anU(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$anU=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.AO().bT("news")
s=A.dl()
s.toString
x=5
return A.d(t.jE(0,A.z(["occasion",s,"message",u,"created_by",$.e3().gdG().c.a],y.N,y.K)).im(0),$async$anU)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.Wv(X.Wt(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.S)(t),++q){p=new A.d5("")
new G.aIr(p).bk(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.by(o).length===0)continue
r+=o}r=C.e.by(r)
t=$.AO().bT("log_notifications")
s=A.dl()
s.toString
x=8
return A.d(t.jE(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$anU)
case 8:A.bH(d,A.t("Message has been sent.",null),C.a8)
x=1
break
case 7:if(h)A.bH(d,A.t("Message has been created.",null),C.a8)
case 1:return A.i(v,w)}})
return A.j($async$anU,w)},
anV(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$anV=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.e3()
if(s.gdG().d==null)A.a7(A.cP("User must be logged in."))
v=$.AO()
u=v.bT("user_news").jY(0).cr("user",s.gdG().c.a)
t=A.dl()
t.toString
x=2
return A.d(u.cr("occasion",t),$async$anV)
case 2:x=3
return A.d(v.bT("user_news").jE(0,A.z(["user",s.gdG().c.a,"news_id",d,"occasion",A.dl()],y.N,y.X)).im(0),$async$anV)
case 3:return A.i(null,w)}})
return A.j($async$anV,w)}},D,A_,F,A0,E,A1,G
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
B.z9.prototype={
M(){return new B.aN4(A.a([],y.o))}}
B.aN4.prototype={
U(){this.ag()
this.bb()},
l(){this.af()},
aV(){this.c8()
this.L_()},
L_(){var x=0,w=A.k(y.H),v=this,u
var $async$L_=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.CY(u,null,y.X)
x=(u==null?null:u.grG())===!0&&!v.e?2:3
break
case 2:x=$.e3().gdG().d!=null&&J.j8(v.d)&&!J.hp(v.d).f?4:5
break
case 4:x=6
return A.d(B.anV(J.hp(v.d).d),$async$L_)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$L_,w)},
bnm(d){H.kh(d,"newsForm",y.X).aS(new B.c6R(this,d),y.P)},
ZQ(){var x=0,w=A.k(y.H),v=this,u
var $async$ZQ=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.Zg(),$async$ZQ)
case 2:v.A(new u.c6X(v,e))
return A.i(null,w)}})
return A.j($async$ZQ,w)},
nS(){var x=0,w=A.k(y.H),v=this,u
var $async$nS=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(T.mf("newsOffline",B.dmf(),y.x),$async$nS)
case 2:v.A(new u.c6Y(v,e))
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
case 4:v.L_()
return A.i(null,w)}})
return A.j($async$bb,w)},
B(d){var x,w,v=this,u=null,t=A.D(d).ax.a===C.t?$.is():$.pU(),s=F.bk(D.bEH,u)
s=M.ie(u,u,u,!0,u,u,1,u,u,u,!1,u,!1,u,u,Y.buQ(),u,!0,u,u,u,u,u,s,u,u,u,1,u)
x=J.fi(v.d)?new A.a5(P.Li,A.aj(A.a([A.bp(D.auk,A.D(d).ay,u,64),Z.a2,A.T(A.WA("No news messages yet",u,u,u,u),u,u,u,u,u,u,u,u,C.b1,u,u,u,u)],y.p),C.i,C.bs,C.h,u,C.m),u):I.lH(!0,u,new B.c6V(v),J.bz(v.d),u,u,u,!1,C.I,!1)
w=A.j_()
return L.f4(s,t,new A.cB(C.aK,u,u,new A.cO(new A.ac(0,720,0,1/0),x,u),u),u,u,A.iG(A.a_I(u,S.fT,u,u,!1,new B.c6W(v,d),u),w),u,u)}}
B.w0.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["V<~>(w0)","C<mi<w0>>(L)","uH(A<m,@>)"])
B.c6R.prototype={
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
s=B.anU(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.ca(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.bb(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:105}
B.c6X.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c6Y.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c6V.prototype={
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
w.push(new A.a5(U.BR,A.az(q,A.aj(A.a([new A.a5(O.b_,new E.h7(s,18,!0,q,q),q),A.iG(new A.a5(C.aB,A.av(A.a([A.bp(D.atU,A.D(d).ay,q,16),V.aaQ,A.T(C.c.j(o.e),q,q,q,q,q,q,q,A.aD(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),Q.jv],x),C.i,C.db,C.h,0,q),q),r!=null)],x),C.i,C.f,C.h,q,C.m),C.k,q,q,new A.bg(u.ax.k2,q,q,t,q,q,q,C.P),q,q,q,q,q,q,q),q))
t=A.j_()
w.push(A.iG(E.Jx(q,D.auQ,new B.c6T(),new B.c6U(p,o,d),q,y.B),t))
return A.aj(w,C.bp,C.f,C.h,q,C.m)},
$S:1033}
B.c6U.prototype={
$1(d){return this.aIX(d)},
aIX(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.Kw?2:4
break
case 2:x=5
return A.d(B.GR(t),$async$$1)
case 5:A.bH(s,A.t("Message has been removed.",null),C.a8)
x=3
break
case 4:u=R.qa(A.z(["content",t.b],y.N,y.z),A.dl())
x=6
return A.d(A0.ff(s,!1).f.ih(u,y.X).aS(new B.c6S(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.bb(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.c6S.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bo(d)
x=4
return A.d(B.b6c(u),$async$$1)
case 4:A.bH(v.b,A.t("Message has been changed.",null),C.a8)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:105}
B.c6T.prototype={
$1(d){var x=null,w=y.B
return A.a([E.uO(F.bk(W.GY,x),!0,48,x,x,x,x,x,D.aok,w),E.uO(F.bk(D.bEi,x),!0,48,x,x,x,x,x,D.Kw,w)],y.h)},
$S:z+1}
B.c6W.prototype={
$0(){return this.a.bnm(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dmf","d3d",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.z9,A.I)
x(B.aN4,A.M)
w(A.bN,[B.c6R,B.c6U,B.c6S,B.c6T])
w(A.cp,[B.c6X,B.c6Y,B.c6W])
x(B.c6V,A.du)
x(B.w0,A.dW)})()
A.bt(b.typeUniverse,JSON.parse('{"z9":{"I":[],"e":[]},"aN4":{"M":["z9"]}}'))
var y=(function rtii(){var x=A.B
return{B:x("w0"),_:x("V<@>"),t:x("r<A<m,@>>"),o:x("r<uH>"),h:x("r<mi<w0>>"),p:x("r<e>"),a:x("A<m,@>"),x:x("uH"),P:x("aF"),K:x("F"),N:x("m"),g:x("kO"),z:x("@"),X:x("F?"),H:x("~")}})();(function constants(){D.Kw=new B.w0(0,"delete")
D.aok=new B.w0(1,"edit")
D.aqW=new A.ap(16,8,16,0)
D.atU=new A.aC(58652,"MaterialIcons",null,!1)
D.auk=new A.aC(61075,"MaterialIcons",null,!1)
D.auQ=new A.dd(A1.Mm,null,null,null,null)
D.bEi=new A.c9("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bEH=new A.c9("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_354",e:"endPart",h:b})})($__dart_deferred_initializers__,"hkqvgPdfyA9cYe0r34MBAbpy6o0=");