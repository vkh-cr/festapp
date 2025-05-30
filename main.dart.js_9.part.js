((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_9",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,G,H,I,K,L,F,M,N,O,P,Q,R,B={
cGr(d){var x=A.z(["id",d],y.w,y.b)
return new B.anE("CheckRoute",new A.CF(d,null),x,C.c1,null,"",null)},
anE:function anE(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
qx:function qx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
acw:function acw(d){this.d=d
this.c=this.a=null},
c2k:function c2k(){},
c2l:function c2l(){},
c2m:function c2m(){},
c2n:function c2n(){},
c2r:function c2r(d){this.a=d},
c2o:function c2o(d,e){this.a=d
this.b=e},
c2p:function c2p(d,e){this.a=d
this.b=e},
c2q:function c2q(d,e){this.a=d
this.b=e},
c2s:function c2s(d){this.a=d},
cP4(d,e,f,g,h){var x=null,w=A.jm(A.bW(x,x,x,x,x,x,A.aW(R.Ds,h,x,x),x,x,x,new B.b4T(e),x,x,x,x,x),d)
return A.a([w,A.jm(A.bW(x,x,x,x,x,x,A.aW(N.j2,g,x,x),x,x,x,new B.b4U(f),x,x,x,x,x),!d)],y.p)},
b4T:function b4T(d){this.a=d},
b4U:function b4U(d){this.a=d},
bhO(){var x=A.x8("companions",null)
if(x instanceof A.Pn)return x.e
return null},
b9F(d,e,f){return B.dbi(d,e,f)},
dbi(d,e,f){var x=0,w=A.l(y.v)
var $async$b9F=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)switch(x){case 0:x=2
return A.d(B.PO(d,e,A.bUv(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null)),$async$b9F)
case 2:return A.j(null,w)}})
return A.k($async$b9F,w)},
b9G(d,e,f){return B.dbj(d,e,f)},
dbj(d,e,f){var x=0,w=A.l(y.v)
var $async$b9G=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)switch(x){case 0:x=2
return A.d(A.CU(d,e,A.bUv(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null)),$async$b9G)
case 2:return A.j(null,w)}})
return A.k($async$b9G,w)},
b9D(d){return B.dbg(d)},
dbg(d){var x=0,w=A.l(y.v),v,u,t,s
var $async$b9D=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=$.cMC()
t=A.da()
s=$.fQ
s=(s==null?null:s.e).c
s.toString
v=y.b
x=2
return A.d(u.dn("create_companion_in_organization",A.z(["org",1,"oc",t,"usr",s,"c_name",d],y.w,v),v),$async$b9D)
case 2:return A.j(null,w)}})
return A.k($async$b9D,w)},
PO(d,e,f){return B.dbR(d,e,f)},
dbR(d,e,f){var x=0,w=A.l(y.v),v,u,t,s,r,q,p,o,n,m,l
var $async$PO=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)$async$outer:switch(x){case 0:m=f==null
l=m?null:f.a
if(l==null)l=$.dC().gdm().c.a
u=y.w
t=y.b
x=3
return A.d($.i_().dn("sign_user_to_event",A.z(["ev",e,"usr",l],u,t),t),$async$PO)
case 3:s=h
t=J.a1(s)
switch(t.h(s,"code")){case 200:if(m)A.bJ(d,A.r(($.ni.e==="female"?"F":"M")+"You have been signed in.",null),C.ac)
else{r=f.e==="female"?"F":"M"
A.bJ(d,A.r(r+"{user} has been signed in.",A.z(["user",f.jK()],u,u)),C.ac)}x=1
break $async$outer
case 100:A.bJ(d,A.r("Cannot sign in!",null)+" "+A.r("Event is over.",null),C.bb)
x=1
break $async$outer
case 101:A.bJ(d,A.r("Cannot sign in!",null)+" "+A.r("Event is full.",null),C.bb)
x=1
break $async$outer
case 102:if(m){q=A.r(($.ni.e==="female"?"F":"M")+"You are already signed in at an event of this type.",null)
A.bJ(d,A.r("Cannot sign in!",null)+" "+q,C.bb)}else{r=f.e==="female"?"F":"M"
q=A.r(r+"{user} is already signed in at an event of this type.",A.z(["user",f.jK()],u,u))
A.bJ(d,A.r("Cannot sign in!",null)+" "+q,C.bb)}x=1
break $async$outer
case 103:if(m){q=A.r(($.ni.e==="female"?"F":"M")+"You are already signed in.",null)
A.bJ(d,A.r("Cannot sign in!",null)+" "+q,C.bb)}else{r=f.e==="female"?"F":"M"
q=A.r(r+"{user} is already signed in.",A.z(["user",f.jK()],u,u))
A.bJ(d,A.r("Cannot sign in!",null)+" "+q,C.bb)}x=1
break $async$outer
case 107:if(m){q=A.r(($.ni.e==="female"?"F":"M")+"You are already signed in at another event at the same time.",null)
A.bJ(d,A.r("Cannot sign in!",null)+" "+q,C.bb)}else{r=f.e==="female"?"F":"M"
A.bJ(d,A.r(r+"{user} is already signed in at another event at the same time.",A.z(["user",f.jK()],u,u)),C.ac)}x=1
break $async$outer
case 104:p=A.r("It's too soon!",null)
if(t.h(s,"events_registration_start")!=null){o=A.mC(A.et(t.h(s,"events_registration_start")),null)
m=y.r
t=d.af(m).r.a
t===$&&A.b()
n=B.db0(t.gf0(0)).dd(o)
m=d.af(m).r.a
m===$&&A.b()
p=A.r("You can sign in from {time}.",A.z(["time",n+" "+A.CS(m.gf0(0)).dd(o)],u,u))}q=y.q.a(A.x8("workshops",null)).f
if(q!=null&&q.length!==0){A.bJ(d,q,C.bb)
x=1
break $async$outer}A.bJ(d,A.r("Cannot sign in!",null)+" "+p,C.bb)
x=1
break $async$outer
case 105:A.bJ(d,A.r("Cannot sign in!",null)+" "+A.r("There is already the maximum of men.",null),C.bb)
x=1
break $async$outer
case 106:A.bJ(d,A.r("Cannot sign in!",null)+" "+A.r("There is already the maximum of women.",null),C.bb)
x=1
break $async$outer
default:A.bJ(d,A.r("Cannot sign in!",null),C.bb)
x=1
break $async$outer}case 1:return A.j(v,w)}})
return A.k($async$PO,w)},
db0(d){var x=A.ne(d,A.p_(),null)
x.toString
x=new A.iT(new A.m5(),x)
x.me("MMMMEEEEd")
return x}},D
J=c[1]
A=c[0]
C=c[2]
E=c[177]
G=c[167]
H=c[144]
I=c[99]
K=c[172]
L=c[180]
F=c[280]
M=c[302]
N=c[184]
O=c[279]
P=c[206]
Q=c[304]
R=c[321]
B=a.updateHolder(c[70],B)
D=c[210]
B.anE.prototype={}
B.qx.prototype={
M(){return new B.acw(new A.cp(C.aw,$.a9()))}}
B.acw.prototype={
Mg(){var x=0,w=A.l(y.v),v=this,u,t
var $async$Mg=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=J.bA(v.a.f)<v.a.e&&v.d.a.a.length!==0?2:3
break
case 2:u=v.d
x=4
return A.d(B.b9D(u.a.a),$async$Mg)
case 4:u.iR(0,C.h4)
u=v.a
u.toString
t=u
x=5
return A.d(A.wT(),$async$Mg)
case 5:t.f=e
if(v.c!=null)v.A(new B.c2k())
case 3:return A.j(null,w)}})
return A.k($async$Mg,w)},
BR(d){return this.b58(d)},
b58(d){var x=0,w=A.l(y.v),v,u=this,t,s
var $async$BR=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=u.c
t.toString
x=3
return A.d(H.kX(t,A.r("Delete companion",null),A.r("By deleting your companion you will also sign him/her out of all signed in sessions.",null),"Ok"),$async$BR)
case 3:if(!f){x=1
break}x=4
return A.d(I.aqM(d),$async$BR)
case 4:t=u.a
t.toString
s=t
x=5
return A.d(A.wT(),$async$BR)
case 5:s.f=f
if(u.c!=null)u.A(new B.c2l())
t=u.a.r.$0()
x=6
return A.d(y.x.b(t)?t:A.ca(t,y.v),$async$BR)
case 6:case 1:return A.j(v,w)}})
return A.k($async$BR,w)},
H1(d){return this.bu6(d)},
bu6(d){var x=0,w=A.l(y.v),v,u=this,t,s,r
var $async$H1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=u.a
if(s.d){x=1
break}t=u.c
t.toString
x=3
return A.d(B.b9F(t,s.c,d),$async$H1)
case 3:s=u.a
s.toString
r=s
x=4
return A.d(A.wT(),$async$H1)
case 4:r.f=f
if(u.c!=null)u.A(new B.c2m())
s=u.a.r.$0()
x=5
return A.d(y.x.b(s)?s:A.ca(s,y.v),$async$H1)
case 5:case 1:return A.j(v,w)}})
return A.k($async$H1,w)},
H2(d){return this.bu7(d)},
bu7(d){var x=0,w=A.l(y.v),v=this,u,t
var $async$H2=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(B.b9G(u,v.a.c,d),$async$H2)
case 2:u=v.a
u.toString
t=u
x=3
return A.d(A.wT(),$async$H2)
case 3:t.f=f
if(v.c!=null)v.A(new B.c2n())
u=v.a.r.$0()
x=4
return A.d(y.x.b(u)?u:A.ca(u,y.v),$async$H2)
case 4:return A.j(null,w)}})
return A.k($async$H2,w)},
B(d){var x,w,v,u=this,t=null,s=E.bw(D.bJK,t),r=y.w
r=E.bw(D.bJ6,A.z(["max_companions",J.aq(B.bhO())],r,r))
x=J.bA(u.a.f)
w=u.a.e
v=y.u
w=A.dD(new A.cE(D.aiQ,A.ah(A.a([r,F.eb,A.jm(A.ah(A.a([A.fB(!0,C.aR,!1,t,!0,C.v,t,A.fS(),u.d,t,t,t,t,t,2,A.ch(t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,A.r("Companion Name",t),!0,!0,t,t,t,t,t,t,t,t,t,t,t,t,t),C.r,!0,t,!0,t,!1,t,C.aL,t,A.a([new A.JD(30,t)],y.y),t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,C.b2,t,t,C.aO,C.aM,t,t,t,t,t,t,t,!0,C.H,t,C.b4,t,t,t,t),F.eb,A.dy(!1,E.bw(D.bJB,t),t,t,t,t,t,t,u.gb3K(),t,t)],v),C.j,C.f,C.i,0,t,C.m),x<w),F.eb,new A.ao(380,150,K.mb(!0,!0,!0,t,C.v,t,C.r,new B.c2r(u),J.bA(u.a.f),t,t,t,L.dQ,t,t,!1,C.I,!1),t)],v),C.j,C.f,C.U,0,t,C.m),t),t,C.r,t,t,t,C.I)
return G.iD(A.a([A.dl(!1,E.bw(Q.Ig,t),t,t,t,t,t,t,new B.c2s(d),t,t)],v),t,t,w,t,t,t,t,s,t,t)}}
var z=a.updateTypes(["X<~>()"])
B.c2k.prototype={
$0(){},
$S:0}
B.c2l.prototype={
$0(){},
$S:0}
B.c2m.prototype={
$0(){},
$S:0}
B.c2n.prototype={
$0(){},
$S:0}
B.c2r.prototype={
$2(d,e){var x,w=null,v=this.a,u=J.v(v.a.f,e),t=A.a([],y.u)
if(u.afb(v.a.c))t.push(M.Oi)
t.push(O.fy)
t.push(A.bh(A.P(u.b,w,w,w,w,w,w,w,w,w,w,w,w,w),1,w))
if(!u.afb(v.a.c)){x=E.bw(D.bIZ,w)
t.push(A.dy(!1,x,w,w,w,w,w,w,v.a.d?w:new B.c2o(v,u),w,w))}if(u.afb(v.a.c))t.push(A.dy(!1,E.bw(D.adX,w),w,w,w,w,w,w,new B.c2p(v,u),w,w))
t.push(A.bW(w,w,w,w,w,w,P.j3,w,w,w,new B.c2q(v,u),w,w,w,w,w))
return new A.a2(C.au,A.at(t,C.j,C.f,C.i,0,w),w)},
$S:119}
B.c2o.prototype={
$0(){return this.a.H1(this.b)},
$S:0}
B.c2p.prototype={
$0(){return this.a.H2(this.b)},
$S:0}
B.c2q.prototype={
$0(){return this.a.BR(this.b)},
$S:0}
B.c2s.prototype={
$0(){return A.bO(this.a,!1).dM()},
$S:0}
B.b4T.prototype={
$0(){var x=0,w=A.l(y.v),v=this
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2}
B.b4U.prototype={
$0(){var x=0,w=A.l(y.v),v=this
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.j(null,w)}})
return A.k($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(B.acw.prototype,"gb3K","Mg",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.anE,A.jg)
x(B.qx,A.J)
x(B.acw,A.O)
w(A.cL,[B.c2k,B.c2l,B.c2m,B.c2n,B.c2o,B.c2p,B.c2q,B.c2s,B.b4T,B.b4U])
x(B.c2r,A.eg)})()
A.c5(b.typeUniverse,JSON.parse('{"anE":{"jg":["CF"]},"qx":{"J":[],"e":[]},"acw":{"O":["qx"]}}'))
var y={x:A.D("X<~>"),y:A.D("u<n1>"),p:A.D("u<Bd>"),u:A.D("u<e>"),w:A.D("m"),q:A.D("VG"),r:A.D("ki"),b:A.D("@"),v:A.D("~")};(function constants(){D.aiQ=new A.ab(0,480,0,1/0)
D.O0=new A.aB(58615,"MaterialIcons",null,!1)
D.bIZ=new A.cs("Sign in someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJ6=new A.cs("If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adX=new A.cs("Sign out someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJB=new A.cs("Create Companion",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJK=new A.cs("Companions",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_9",e:"endPart",h:b})})($__dart_deferred_initializers__,"tF7Uz57xRr1SzUsz33UAgTqPMLo=");