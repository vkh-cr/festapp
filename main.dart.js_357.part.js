((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_357",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,O,P,Q,R,S,F,T,U,V,W,X,Y,Z,B={
d_N(d,e){return new B.yN(e,d)},
yN:function yN(d,e){this.c=d
this.a=e},
aMv:function aMv(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
c4U:function c4U(d,e){this.a=d
this.b=e},
c5_:function c5_(d,e){this.a=d
this.b=e},
c50:function c50(d,e){this.a=d
this.b=e},
c4Y:function c4Y(d){this.a=d},
c4X:function c4X(d,e,f){this.a=d
this.b=e
this.c=f},
c4V:function c4V(d,e){this.a=d
this.b=e},
c4W:function c4W(){},
c4Z:function c4Z(d,e){this.a=d
this.b=e},
vE:function vE(d,e){this.a=d
this.b=e},
d_M(d){return A.cE_(d)},
Gr(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$Gr=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:n=$.Ar()
m=n.bB("news").h6(0,"id")
l=d.a
l.toString
v=d.d
m=A.pb(m.ut(m.wt("created_at","lt."+l.j(0))),m.$ti.c).aDo("id",v)
l=$.db
l.toString
x=2
return A.c(m.cm("occasion",l).bHv(0,"created_at").aCI(1).Ps(),$async$Gr)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.c(n.bB("user_news").h6(0,"user").cm("news_id",v),$async$Gr)
case 6:t=f
s=A.a([],y.t)
for(n=J.aN(t),m=J.a2(u),l=y.N,r=y.z;n.q();){q=J.v(n.gL(n),"user")
p=m.i(u,"id")
o=$.db
o.toString
s.push(A.x(["user",q,"news_id",p,"occasion",o],l,r))}n=$.Ar()
x=7
return A.c(n.bB("user_news").aey(s),$async$Gr)
case 7:x=4
break
case 5:x=8
return A.c(n.bB("user_news").jO(0).cm("news_id",v),$async$Gr)
case 8:case 4:x=9
return A.c(n.bB("news").jO(0).cm("id",v),$async$Gr)
case 9:return A.i(null,w)}})
return A.j($async$Gr,w)},
b5m(d){var x=0,w=A.k(y.H),v
var $async$b5m=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.c($.Ar().bB("news").eL(0,A.x(["message",d.b],v,v)).cm("id",d.d),$async$b5m)
case 2:return A.i(null,w)}})
return A.j($async$b5m,w)},
ano(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$ano=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.Ar().bB("news")
s=$.db
s.toString
x=5
return A.c(t.jt(0,A.x(["occasion",s,"message",u,"created_by",$.e1().gdD().c.a],y.N,y.K)).ie(0),$async$ano)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.VZ(Y.ahE(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.Q)(t),++q){p=new A.d5("")
new G.bRJ(p).bk(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.c7(o).length===0)continue
r+=o}r=C.e.c7(r)
t=$.Ar().bB("log_notifications")
s=$.db
s.toString
x=8
return A.c(t.jt(0,A.x(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$ano)
case 8:A.bE(d,A.p("Message has been sent.",null),C.a5)
x=1
break
case 7:if(h)A.bE(d,A.p("Message has been created.",null),C.a5)
case 1:return A.i(v,w)}})
return A.j($async$ano,w)},
anp(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$anp=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.e1()
if(s.gdD().d==null)A.a5(A.cK("User must be logged in."))
v=$.Ar()
u=v.bB("user_news").jO(0).cm("user",s.gdD().c.a)
t=$.db
t.toString
x=2
return A.c(u.cm("occasion",t),$async$anp)
case 2:x=3
return A.c(v.bB("user_news").jt(0,A.x(["user",s.gdD().c.a,"news_id",d,"occasion",$.db],y.N,y.X)).ie(0),$async$anp)
case 3:return A.i(null,w)}})
return A.j($async$anp,w)}},D,A_,E,A0,G,A1
J=c[1]
A=c[0]
C=c[2]
H=c[191]
I=c[178]
K=c[281]
L=c[212]
M=c[201]
N=c[192]
O=c[204]
P=c[216]
Q=c[136]
R=c[101]
S=c[342]
F=c[119]
T=c[303]
U=c[151]
V=c[236]
W=c[215]
X=c[256]
Y=c[93]
Z=c[108]
B=a.updateHolder(c[19],B)
D=c[357]
A_=c[246]
E=c[194]
A0=c[154]
G=c[163]
A1=c[198]
B.yN.prototype={
M(){return new B.aMv(A.a([],y.o))}}
B.aMv.prototype={
U(){this.ah()
this.b9()},
l(){this.ag()},
aS(){this.c8()
this.KP()},
KP(){var x=0,w=A.k(y.H),v=this,u
var $async$KP=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Cz(u,null,y.X)
x=(u==null?null:u.grt())===!0&&!v.e?2:3
break
case 2:x=$.e1().gdD().d!=null&&J.iX(v.d)&&!J.hy(v.d).f?4:5
break
case 4:x=6
return A.c(B.anp(J.hy(v.d).d),$async$KP)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$KP,w)},
blT(d){H.kb(d,"newsForm",y.X).aX(0,new B.c4U(this,d),y.P)},
Zv(){var x=0,w=A.k(y.H),v=this,u
var $async$Zv=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(A.YL(),$async$Zv)
case 2:v.v(new u.c5_(v,e))
return A.i(null,w)}})
return A.j($async$Zv,w)},
nN(){var x=0,w=A.k(y.H),v=this,u
var $async$nN=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(U.m2("newsOffline",B.dim(),y.x),$async$nN)
case 2:v.v(new u.c50(v,e))
return A.i(null,w)}})
return A.j($async$nN,w)},
b9(){var x=0,w=A.k(y.H),v=this
var $async$b9=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.nN(),$async$b9)
case 2:x=3
return A.c(v.Zv(),$async$b9)
case 3:x=4
return A.c(A.ql("newsOffline",v.d),$async$b9)
case 4:v.KP()
return A.i(null,w)}})
return A.j($async$b9,w)},
B(d){var x,w,v=null,u=A.B(d).ax.a===C.r?$.iE():$.pN(),t=E.bg(D.b4l,v)
t=N.i5(v,v,v,!0,v,v,1,v,v,v,!1,v,!1,v,v,Z.btj(),v,!0,v,v,v,v,v,t,v,v,v,1,v)
x=I.lu(!0,v,new B.c4Y(this),J.bA(this.d),v,v,v,!1,C.G,!1)
w=A.j6()
return M.eZ(t,u,new A.cy(C.aG,v,v,new A.cS(new A.aa(0,720,0,1/0),x,v),v),v,v,A.iz(A.a_c(v,S.fo,v,v,!1,new B.c4Z(this,d),v),w),v,v)}}
B.vE.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["T<~>(vE)","A<m5<vE>>(J)","un(ae<e,@>)"])
B.c4U.prototype={
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
s=B.ano(v.b,p,u,q,t,s,r)
x=4
return A.c(y._.b(s)?s:A.cC(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.c(v.a.b9(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:115}
B.c5_.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c50.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c4Y.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.v(p.d,e),n=e>0?J.v(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bv(x)===A.bv(w)&&A.bI(x)===A.bI(w)&&A.cB(x)===A.cB(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(L.fi)
if(!u||!v){u=d.ac(y.g).r.a
u===$&&A.b()
u=A.i7("EEEE d.M.y",u.gfc(0))
t=o.a
t.toString
t=u.dI(t)
if(o.f){u=p.c
u.toString
u=A.aB(q,q,A.B(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aB(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.ay(A_.hD,A.R(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.k,q,q,q,q,q,q,D.ajw,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.aB(q,q,A.B(t).cy,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.aB(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a3(K.h5,A.R(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.c5(10)
u=A.B(d)
s=o.b
s.toString
r=$.e1().gdD().d
w.push(new A.a3(V.zL,A.ay(q,A.ak(A.a([new A.a3(O.aX,new A0.hn(s,18,!0,q,q),q),A.iz(new A.a3(C.ay,A.at(A.a([A.bo(D.amc,A.B(d).ay,q,16),W.a3U,A.R(C.c.j(o.e),q,q,q,q,q,q,q,A.aB(q,q,A.B(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a3,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),P.iG],x),C.i,C.cE,C.h,0,q),q),r!=null)],x),C.i,C.f,C.h,q,C.l),C.k,q,q,new A.bd(u.ax.k2,q,q,t,q,q,q,C.O),q,q,q,q,q,q,q),q))
t=A.j6()
w.push(A.iz(R.J5(q,D.an6,new B.c4W(),new B.c4X(p,o,d),y.B),t))
return A.ak(w,C.bi,C.f,C.h,q,C.l)},
$S:994}
B.c4X.prototype={
$1(d){return this.aHL(d)},
aHL(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.Hr?2:4
break
case 2:x=5
return A.c(B.Gr(t),$async$$1)
case 5:A.bE(s,A.p("Message has been removed.",null),C.a5)
x=3
break
case 4:u=Q.q3(A.x(["content",t.b],y.N,y.z),$.db)
x=6
return A.c(A1.f1(s,!1).f.i8(u,y.X).aX(0,new B.c4V(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.c(v.a.b9(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.c4V.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bi(d)
x=4
return A.c(B.b5m(u),$async$$1)
case 4:A.bE(v.b,A.p("Message has been changed.",null),C.a5)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:115}
B.c4W.prototype={
$1(d){var x=y.B
return A.a([F.uv(E.bg(X.DS,null),!0,48,D.ah6,x),F.uv(E.bg(D.b3X,null),!0,48,D.Hr,x)],y.h)},
$S:z+1}
B.c4Z.prototype={
$0(){return this.a.blT(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dim","d_M",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.yN,A.G)
x(B.aMv,A.K)
w(A.bH,[B.c4U,B.c4X,B.c4V,B.c4W])
w(A.cm,[B.c5_,B.c50,B.c4Z])
x(B.c4Y,A.dq)
x(B.vE,A.e7)})()
A.br(b.typeUniverse,JSON.parse('{"yN":{"G":[],"d":[]},"aMv":{"K":["yN"]}}'))
var y=(function rtii(){var x=A.z
return{B:x("vE"),_:x("T<@>"),t:x("r<ae<e,@>>"),o:x("r<un>"),h:x("r<m5<vE>>"),p:x("r<d>"),a:x("ae<e,@>"),x:x("un"),P:x("aD"),K:x("E"),N:x("e"),g:x("kG"),z:x("@"),X:x("E?"),H:x("~")}})();(function constants(){D.Hr=new B.vE(0,"delete")
D.ah6=new B.vE(1,"edit")
D.ajw=new A.ao(16,8,16,0)
D.amc=new A.aA(58652,"MaterialIcons",null,!1)
D.an6=new A.da(T.Jk,null,null,null,null)
D.b3X=new A.c4("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4l=new A.c4("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_357",e:"endPart",h:b})})($__dart_deferred_initializers__,"Z7uKwpQYSX+aen8Gs0IQyyJjNNg=");