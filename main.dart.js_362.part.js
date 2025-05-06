((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_362",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,L,M,N,O,P,Q,R,S,T,F,U,V,W,X,Y,Z,A_,A0,B={
d6j(d,e){return new B.zq(e,d)},
zq:function zq(d,e){this.c=d
this.a=e},
aNV:function aNV(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
c9e:function c9e(d,e){this.a=d
this.b=e},
c9k:function c9k(d,e){this.a=d
this.b=e},
c9l:function c9l(d,e){this.a=d
this.b=e},
c9i:function c9i(d){this.a=d},
c9h:function c9h(d,e,f){this.a=d
this.b=e
this.c=f},
c9f:function c9f(d,e){this.a=d
this.b=e},
c9g:function c9g(){},
c9j:function c9j(d,e){this.a=d
this.b=e},
w9:function w9(d,e){this.a=d
this.b=e},
d6i(d){return A.cJk(d)},
Ha(d){var x=0,w=A.k(y.H),v,u,t,s,r,q,p,o,n,m,l
var $async$Ha=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:n=$.B5()
m=n.bU("news").hx(0,"id")
l=d.a
l.toString
v=d.d
m=A.po(m.uK(m.wK("created_at","lt."+l.j(0))),m.$ti.c).aFp("id",v)
l=A.dl()
l.toString
x=2
return A.d(m.ct("occasion",l).bLp(0,"created_at").aEJ(1).PZ(),$async$Ha)
case 2:u=f
x=u!=null?3:5
break
case 3:x=6
return A.d(n.bU("user_news").hx(0,"user").ct("news_id",v),$async$Ha)
case 6:t=f
s=A.a([],y.t)
for(n=J.aP(t),m=y.N,l=y.z,r=J.a2(u);n.q();){q=J.x(n.gL(n),"user")
p=r.h(u,"id")
o=$.h1
if(o==null)o=null
else{o=o.b
o=o==null?null:o.a}o.toString
s.push(A.z(["user",q,"news_id",p,"occasion",o],m,l))}n=$.B5()
x=7
return A.d(n.bU("user_news").aga(s),$async$Ha)
case 7:x=4
break
case 5:x=8
return A.d(n.bU("user_news").iL(0).ct("news_id",v),$async$Ha)
case 8:case 4:x=9
return A.d(n.bU("news").iL(0).ct("id",v),$async$Ha)
case 9:return A.i(null,w)}})
return A.j($async$Ha,w)},
b7i(d){var x=0,w=A.k(y.H),v
var $async$b7i=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.B5().bU("news").eS(0,A.z(["message",d.b],v,v)).ct("id",d.d),$async$b7i)
case 2:return A.i(null,w)}})
return A.j($async$b7i,w)},
aoz(d,e,f,g,h,i,j){var x=0,w=A.k(y.z),v,u,t,s,r,q,p,o
var $async$aoz=A.f(function(k,l){if(k===1)return A.h(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.B5().bU("news")
s=A.dl()
s.toString
x=5
return A.d(t.jk(0,A.z(["occasion",s,"message",u,"created_by",$.e6().gdH().c.a],y.N,y.K)).im(0),$async$aoz)
case 5:case 4:x=i?6:7
break
case 6:for(t=G.WR(Z.WP(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.S)(t),++q){p=new A.d6("")
new G.aJc(p).bk(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.bq(o).length===0)continue
r+=o}r=C.e.bq(r)
t=$.B5().bU("log_notifications")
s=A.dl()
s.toString
x=8
return A.d(t.jk(0,A.z(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$aoz)
case 8:A.bI(d,A.u("Message has been sent.",null),C.a8)
x=1
break
case 7:if(h)A.bI(d,A.u("Message has been created.",null),C.a8)
case 1:return A.i(v,w)}})
return A.j($async$aoz,w)},
aoA(d){var x=0,w=A.k(y.H),v,u,t,s
var $async$aoA=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:s=$.e6()
if(s.gdH().d==null)A.a7(A.cN("User must be logged in."))
v=$.B5()
u=v.bU("user_news").iL(0).ct("user",s.gdH().c.a)
t=A.dl()
t.toString
x=2
return A.d(u.ct("occasion",t),$async$aoA)
case 2:x=3
return A.d(v.bU("user_news").jk(0,A.z(["user",s.gdH().c.a,"news_id",d,"occasion",A.dl()],y.N,y.X)).im(0),$async$aoA)
case 3:return A.i(null,w)}})
return A.j($async$aoA,w)}},D,A1,E,A2,A3,G
J=c[1]
A=c[0]
C=c[2]
H=c[195]
I=c[180]
K=c[287]
L=c[205]
M=c[196]
N=c[216]
O=c[208]
P=c[340]
Q=c[220]
R=c[139]
S=c[103]
T=c[348]
F=c[122]
U=c[309]
V=c[153]
W=c[241]
X=c[219]
Y=c[261]
Z=c[111]
A_=c[217]
A0=c[110]
B=a.updateHolder(c[19],B)
D=c[364]
A1=c[250]
E=c[198]
A2=c[202]
A3=c[156]
G=c[165]
B.zq.prototype={
M(){return new B.aNV(A.a([],y.o))}}
B.aNV.prototype={
U(){this.ae()
this.bc()},
l(){this.ag()},
aV(){this.c7()
this.Lj()},
Lj(){var x=0,w=A.k(y.H),v=this,u
var $async$Lj=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.De(u,null,y.X)
x=(u==null?null:u.grK())===!0&&!v.e?2:3
break
case 2:x=$.e6().gdH().d!=null&&J.jd(v.d)&&!J.hq(v.d).f?4:5
break
case 4:x=6
return A.d(B.aoA(J.hq(v.d).d),$async$Lj)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.i(null,w)}})
return A.j($async$Lj,w)},
bp3(d){H.kl(d,"newsForm",y.X).aN(new B.c9e(this,d),y.P)},
a_d(){var x=0,w=A.k(y.H),v=this,u
var $async$a_d=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(A.ZC(),$async$a_d)
case 2:v.B(new u.c9k(v,e))
return A.i(null,w)}})
return A.j($async$a_d,w)},
nW(){var x=0,w=A.k(y.H),v=this,u
var $async$nW=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.d(V.mm("newsOffline",B.dpr(),y.x),$async$nW)
case 2:v.B(new u.c9l(v,e))
return A.i(null,w)}})
return A.j($async$nW,w)},
bc(){var x=0,w=A.k(y.H),v=this
var $async$bc=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.nW(),$async$bc)
case 2:x=3
return A.d(v.a_d(),$async$bc)
case 3:x=4
return A.d(A.qD("newsOffline",v.d),$async$bc)
case 4:v.Lj()
return A.i(null,w)}})
return A.j($async$bc,w)},
A(d){var x,w,v=this,u=null,t=A.D(d).ax.a===C.t?$.ix():$.q0(),s=E.bl(D.bF9,u)
s=M.ii(u,u,u,!0,u,u,1,u,u,u,!1,u,!1,u,u,A0.bwC(),u,!0,u,u,u,u,u,s,u,u,u,1,u)
x=J.fk(v.d)?new A.a6(P.Lr,A.aj(A.a([A.br(D.auI,A.D(d).ay,u,64),A_.a2,A.U(A.WW("No news messages yet",u,u,u,u),u,u,u,u,u,u,u,u,C.b1,u,u,u,u)],y.p),C.i,C.bs,C.h,u,C.m),u):I.lN(!0,u,new B.c9i(v),J.bv(v.d),u,u,u,!1,C.J,!1)
w=A.j3()
return L.f5(s,t,new A.cC(C.aK,u,u,new A.cQ(new A.ac(0,720,0,1/0),x,u),u),u,u,A.iK(A.a05(u,T.fV,u,u,!1,new B.c9j(v,d),u),w),u,u)}}
B.w9.prototype={
J(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["T<~>(w9)","C<mp<w9>>(L)","uP(B<m,@>)"])
B.c9e.prototype={
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
s=B.aoz(v.b,p,u,q,t,s,r)
x=4
return A.d(y._.b(s)?s:A.c7(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.d(v.a.bc(),$async$$1)
case 7:case 6:case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:105}
B.c9k.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c9l.prototype={
$0(){this.a.d=this.b},
$S:0}
B.c9i.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.x(p.d,e),n=e>0?J.x(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bA(x)===A.bA(w)&&A.bM(x)===A.bM(w)&&A.cL(x)===A.cL(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(N.fR)
if(!u||!v){u=d.ab(y.g).r.a
u===$&&A.b()
u=A.hZ("EEEE d.M.y",u.gff(0))
t=o.a
t.toString
t=u.dC(t)
if(o.f){u=p.c
u.toString
u=A.aE(q,q,A.D(u).cy,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.aE(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.az(A1.ij,A.U(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.k,q,q,q,q,q,q,D.are,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.aE(q,q,A.D(t).cy,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.aE(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.a6(K.hJ,A.U(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.c8(10)
u=A.D(d)
s=o.b
s.toString
s=A3.iW(q,18,s,!0)
r=$.e6().gdH().d
w.push(new A.a6(W.BX,A.az(q,A.aj(A.a([new A.a6(O.b_,s,q),A.iK(new A.a6(C.aB,A.av(A.a([A.br(D.auh,A.D(d).ay,q,16),X.ab3,A.U(C.c.j(o.e),q,q,q,q,q,q,q,A.aE(q,q,A.D(d).ay,q,q,q,q,q,q,q,q,q,q,q,C.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),Q.jv],x),C.i,C.db,C.h,0,q),q),r!=null)],x),C.i,C.f,C.h,q,C.m),C.k,q,q,new A.bi(u.ax.k2,q,q,t,q,q,q,C.P),q,q,q,q,q,q,q),q))
t=A.j3()
w.push(A.iK(S.JT(q,D.avd,new B.c9g(),new B.c9h(p,o,d),y.B),t))
return A.aj(w,C.bq,C.f,C.h,q,C.m)},
$S:1044}
B.c9h.prototype={
$1(d){return this.aJY(d)},
aJY(d){var x=0,w=A.k(y.H),v=this,u,t,s
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.KE?2:4
break
case 2:x=5
return A.d(B.Ha(t),$async$$1)
case 5:A.bI(s,A.u("Message has been removed.",null),C.a8)
x=3
break
case 4:u=R.qj(A.z(["content",t.b],y.N,y.z),A.dl())
x=6
return A.d(A2.fh(s,!1).f.ih(u,y.X).aN(new B.c9f(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.d(v.a.bc(),$async$$1)
case 7:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:z+0}
B.c9f.prototype={
$1(d){var x=0,w=A.k(y.P),v=this,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bd(d)
x=4
return A.d(B.b7i(u),$async$$1)
case 4:A.bI(v.b,A.u("Message has been changed.",null),C.a8)
case 3:return A.i(null,w)}})
return A.j($async$$1,w)},
$S:105}
B.c9g.prototype={
$1(d){var x=y.B
return A.a([F.uX(E.bl(Y.H4,null),!0,48,D.aoC,x),F.uX(E.bl(D.bEL,null),!0,48,D.KE,x)],y.h)},
$S:z+1}
B.c9j.prototype={
$0(){return this.a.bp3(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"dpr","d6i",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.zq,A.I)
x(B.aNV,A.M)
w(A.bF,[B.c9e,B.c9h,B.c9f,B.c9g])
w(A.cp,[B.c9k,B.c9l,B.c9j])
x(B.c9i,A.ds)
x(B.w9,A.dY)})()
A.bm(b.typeUniverse,JSON.parse('{"zq":{"I":[],"e":[]},"aNV":{"M":["zq"]}}'))
var y=(function rtii(){var x=A.A
return{B:x("w9"),_:x("T<@>"),t:x("r<B<m,@>>"),o:x("r<uP>"),h:x("r<mp<w9>>"),p:x("r<e>"),a:x("B<m,@>"),x:x("uP"),P:x("aC"),K:x("E"),N:x("m"),g:x("kV"),z:x("@"),X:x("E?"),H:x("~")}})();(function constants(){D.KE=new B.w9(0,"delete")
D.aoC=new B.w9(1,"edit")
D.are=new A.ap(16,8,16,0)
D.auh=new A.aD(58652,"MaterialIcons",null,!1)
D.auI=new A.aD(61075,"MaterialIcons",null,!1)
D.avd=new A.dd(U.My,null,null,null,null)
D.bEL=new A.ca("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bF9=new A.ca("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_362",e:"endPart",h:b})})($__dart_deferred_initializers__,"MLsr1E3b5yzDBNfMbOxRz3hEtSY=");