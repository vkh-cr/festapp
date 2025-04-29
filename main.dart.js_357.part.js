((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_357",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,O,P,Q,R,S,F,T,U,V,W,X,Y,Z,B={
d_T(d,e){return new B.yN(e,d)},
yN:function yN(d,e){this.c=d
this.a=e},
aMu:function aMu(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
c4X:function c4X(d,e){this.a=d
this.b=e},
c52:function c52(d,e){this.a=d
this.b=e},
c53:function c53(d,e){this.a=d
this.b=e},
c50:function c50(d){this.a=d},
c5_:function c5_(d,e,f){this.a=d
this.b=e
this.c=f},
c4Y:function c4Y(d,e){this.a=d
this.b=e},
c4Z:function c4Z(){},
c51:function c51(d,e){this.a=d
this.b=e},
vF:function vF(d,e){this.a=d
this.b=e},
d_S(d){return A.cE5(d)},
Gq(d){var x=0,w=A.m(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$Gq=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:n=$.Ar()
m=n.bB("news").h6(0,"id")
l=d.a
l.toString
v=d.d
m=A.pb(m.us(m.ws("created_at","lt."+l.j(0))),m.$ti.c).aDq("id",v)
l=$.db
l.toString
x=2
return A.d(m.cm("occasion",l).bHB(0,"created_at").aCK(1).Ps(),$async$Gq)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.bB("user_news").h6(0,"user").cm("news_id",v),$async$Gq)
case 6:t=f
s=A.a([],y.t)
for(n=J.aO(t),m=J.a4(u),l=y.N,r=y.z;n.q();){q=J.w(n.gL(n),"user")
p=m.i(u,"id")
o=$.db
o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],l,r))}n=$.Ar()
x=7
return A.d(n.bB("user_news").aez(s),$async$Gq)
case 7:x=4
break
case 5:x=8
return A.d(n.bB("user_news").jO(0).cm("news_id",v),$async$Gq)
case 8:case 4:x=9
return A.d(n.bB("news").jO(0).cm("id",v),$async$Gq)
case 9:return A.k(null,w)}})
return A.l($async$Gq,w)},
b5l(d){var x=0,w=A.m(y.H),v
var $async$b5l=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.Ar().bB("news").eM(0,A.z(["message",d.b],v,v)).cm("id",d.d),$async$b5l)
case 2:return A.k(null,w)}})
return A.l($async$b5l,w)},
ann(d,e,f,g,h,i,j){var x=0,w=A.m(y.z),v,u,t,s,r,q,p,o
var $async$ann=A.i(function(k,l){if(k===1)return A.j(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Ar().bB("news")
s=$.db
s.toString
x=5
return A.d(t.jt(0,A.z(["occasion",s,"message",u,"created_by",$.e1().gdD().c.a],y.N,y.K)).ie(0),$async$ann)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.VX(Y.ahD(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.S)(t),++q){p=new A.d5("")
new G.bRL(p).bk(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.c7(o).length===0)continue
r+=o}r=C.e.c7(r)
t=$.Ar().bB("log_notifications")
s=$.db
s.toString
x=8
return A.d(t.jt(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$ann)
case 8:A.bF(d,A.r("Message has been sent.",null),C.a8)
x=1
break
case 7:if(h)A.bF(d,A.r("Message has been created.",null),C.a8)
case 1:return A.k(v,w)}})
return A.l($async$ann,w)},
ano(d){var x=0,w=A.m(y.H),v,u,t,s
var $async$ano=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:s=$.e1()
if(s.gdD().d==null)A.a7(A.cM("User must be logged in."))
v=$.Ar()
u=v.bB("user_news").jO(0).cm("user",s.gdD().c.a)
t=$.db
t.toString
x=2
return A.d(u.cm("occasion",t),$async$ano)
case 2:x=3
return A.d(v.bB("user_news").jt(0,A.z(["user",s.gdD().c.a,"news_id",d,"occasion",$.db],y.N,y.X)).ie(0),$async$ano)
case 3:return A.k(null,w)}})
return A.l($async$ano,w)}},D,A_,E,A0,G,A1
J=c[1]
A=c[0]
C=c[2]
H=c[192]
I=c[179]
K=c[282]
L=c[213]
M=c[202]
N=c[193]
O=c[205]
P=c[217]
Q=c[137]
R=c[102]
S=c[343]
F=c[120]
T=c[304]
U=c[152]
V=c[237]
W=c[216]
X=c[257]
Y=c[94]
Z=c[109]
B=a.updateHolder(c[19],B)
D=c[358]
A_=c[247]
E=c[195]
A0=c[155]
G=c[164]
A1=c[199]
B.yN.prototype={
M(){return new B.aMu(A.a([],y.o))}}
B.aMu.prototype={
U(){this.ah()
this.b9()},
l(){this.ag()},
aS(){this.c8()
this.KP()},
KP(){var x=0,w=A.m(y.H),v=this,u
var $async$KP=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Cy(u,null,y.X)
x=(u==null?null:u.grt())===!0&&!v.e?2:3
break
case 2:x=$.e1().gdD().d!=null&&J.iY(v.d)&&!J.hz(v.d).f?4:5
break
case 4:x=6
return A.d(B.ano(J.hz(v.d).d),$async$KP)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.k(null,w)}})
return A.l($async$KP,w)},
blX(d){H.kc(d,"newsForm",y.X).aX(0,new B.c4X(this,d),y.P)},
Zx(){var x=0,w=A.m(y.H),v=this,u
var $async$Zx=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.YJ(),$async$Zx)
case 2:v.v(new u.c52(v,e))
return A.k(null,w)}})
return A.l($async$Zx,w)},
nO(){var x=0,w=A.m(y.H),v=this,u
var $async$nO=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(U.m5("newsOffline",B.diw(),y.x),$async$nO)
case 2:v.v(new u.c53(v,e))
return A.k(null,w)}})
return A.l($async$nO,w)},
b9(){var x=0,w=A.m(y.H),v=this
var $async$b9=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.nO(),$async$b9)
case 2:x=3
return A.d(v.Zx(),$async$b9)
case 3:x=4
return A.d(A.qm("newsOffline",v.d),$async$b9)
case 4:v.KP()
return A.k(null,w)}})
return A.l($async$b9,w)},
B(d){var x,w,v=null,u=A.D(d).ax.a===C.u?$.iF():$.pO(),t=E.bh(D.bCT,v)
t=N.i8(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,Z.bth(),v,!0,v,v,v,v,v,t,v,v,v,1,v)
x=I.lx(!0,v,new B.c50(this),J.bB(this.d),v,v,v,!1,C.I,!1)
w=A.j6()
return M.eZ(t,u,new A.cz(C.aK,v,v,new A.cT(new A.ac(0,720,0,1/0),x,v),v),v,v,A.iA(A.a_a(v,S.fT,v,v,!1,new B.c51(this,d),v),w),v,v)}}
B.vF.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["V<~>(vF)","C<m8<vF>>(L)","uo(A<h,@>)"])
B.c4X.prototype={
$1(d){var x=0,w=A.m(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:y.a.a(d)
u=J.a4(d)
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
s=B.ann(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.cD(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.b9(),$async$$1)
case 7:case 6:case 3:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:105}
B.c52.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c53.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c50.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.w(p.d,e),n=e>0?J.w(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bw(x)===A.bw(w)&&A.bJ(x)===A.bJ(w)&&A.cC(x)===A.cC(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(L.fN)
if(!u||!v){u=d.ac(y.g).r.a
u===$&&A.b()
u=A.ia("EEEE d.M.y",u.gfc(0))
t=o.a
t.toString
t=u.dI(t)
if(o.f){u=p.c
u.toString
u=A.aC(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aC(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.az(A_.ij,A.U(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.k,q,q,q,q,q,q,D.aq9,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.aC(q,q,A.D(t).cy,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.aC(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a5(K.hG,A.U(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.c6(10)
u=A.D(d)
s=o.b
s.toString
r=$.e1().gdD().d
w.push(new A.a5(V.BH,A.az(q,A.al(A.a([new A.a5(O.b0,new A0.hq(s,18,!0,q,q),q),A.iA(new A.a5(C.aB,A.au(A.a([A.bp(D.asQ,A.D(d).ay,q,16),W.aaz,A.U(C.c.j(o.e),q,q,q,q,q,q,q,A.aC(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),P.jv],x),C.i,C.cW,C.h,0,q),q),r!=null)],x),C.i,C.f,C.h,q,C.m),C.k,q,q,new A.be(u.ax.k2,q,q,t,q,q,q,C.Q),q,q,q,q,q,q,q),q))
t=A.j6()
w.push(A.iA(R.J5(q,D.atK,new B.c4Z(),new B.c5_(p,o,d),y.B),t))
return A.al(w,C.bn,C.f,C.h,q,C.m)},
$S:991}
B.c5_.prototype={
$1(d){return this.aHO(d)},
aHO(d){var x=0,w=A.m(y.H),v=this,u,t,s
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.Kh?2:4
break
case 2:x=5
return A.d(B.Gq(t),$async$$1)
case 5:A.bF(s,A.r("Message has been removed.",null),C.a8)
x=3
break
case 4:u=Q.q4(A.z(["content",t.b],y.N,y.z),$.db)
x=6
return A.d(A1.f1(s,!1).f.i8(u,y.X).aX(0,new B.c4Y(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.b9(),$async$$1)
case 7:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:z+0}
B.c4Y.prototype={
$1(d){var x=0,w=A.m(y.P),v=this,u
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bj(d)
x=4
return A.d(B.b5l(u),$async$$1)
case 4:A.bF(v.b,A.r("Message has been changed.",null),C.a8)
case 3:return A.k(null,w)}})
return A.l($async$$1,w)},
$S:105}
B.c4Z.prototype={
$1(d){var x=y.B
return A.a([F.uw(E.bh(X.GJ,null),!0,48,D.anK,x),F.uw(E.bh(D.bCu,null),!0,48,D.Kh,x)],y.h)},
$S:z+1}
B.c51.prototype={
$0(){return this.a.blX(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"diw","d_S",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.yN,A.I)
x(B.aMu,A.M)
w(A.bI,[B.c4X,B.c5_,B.c4Y,B.c4Z])
w(A.cn,[B.c52,B.c53,B.c51])
x(B.c50,A.dr)
x(B.vF,A.e7)})()
A.br(b.typeUniverse,JSON.parse('{"yN":{"I":[],"e":[]},"aMu":{"M":["yN"]}}'))
var y=(function rtii(){var x=A.B
return{B:x("vF"),_:x("V<@>"),t:x("u<A<h,@>>"),o:x("u<uo>"),h:x("u<m8<vF>>"),p:x("u<e>"),a:x("A<h,@>"),x:x("uo"),P:x("aE"),K:x("G"),N:x("h"),g:x("kH"),z:x("@"),X:x("G?"),H:x("~")}})();(function constants(){D.Kh=new B.vF(0,"delete")
D.anK=new B.vF(1,"edit")
D.aq9=new A.ap(16,8,16,0)
D.asQ=new A.aB(58652,"MaterialIcons",null,!1)
D.atK=new A.da(T.Ma,null,null,null,null)
D.bCu=new A.c5("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bCT=new A.c5("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_357",e:"endPart",h:b})})($__dart_deferred_initializers__,"4kX+NhHDJ4gS2FnK7DpxxLzrfvY=");