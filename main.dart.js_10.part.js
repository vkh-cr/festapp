((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d5l(d){var x=A.w(["id",d],y.w,y.b)
return new B.asR("CheckRoute",new A.AN(d,null),x,C.bX,null,"",null)},
asR:function asR(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
rR:function rR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
agE:function agE(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
ci9:function ci9(){},
cia:function cia(){},
cib:function cib(){},
cic:function cic(){},
cig:function cig(d,e){this.a=d
this.b=e},
cid:function cid(d,e){this.a=d
this.b=e},
cie:function cie(d,e){this.a=d
this.b=e},
cif:function cif(d,e){this.a=d
this.b=e},
cih:function cih(d){this.a=d},
dex(d,e,f,g,h){var x=null,w=A.jE(A.bI(x,x,x,x,x,x,A.ay(C.uD,h,x,x,x),x,x,x,new B.bdR(e),x,x,x,x,x),!1,!1,!1,!1,d)
return A.b([w,A.jE(A.bI(x,x,x,x,x,x,A.ay(I.jS,g,x,x,x),x,x,x,new B.bdS(f),x,x,x,x,x),!1,!1,!1,!1,!d)],y.p)},
bdR:function bdR(d){this.a=d},
bdS:function bdS(d){this.a=d},
bsv(){var x=A.lV("companions",null)
if(x instanceof A.a2Q)return x.e
return null},
bj_(d,e,f){var x=0,w=A.m(y.v)
var $async$bj_=A.i(function(g,h){if(g===1)return A.j(h,w)
for(;;)switch(x){case 0:x=2
return A.d(B.SZ(d,e,A.c85(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null,null,null)),$async$bj_)
case 2:return A.k(null,w)}})
return A.l($async$bj_,w)},
bj0(d,e,f){var x=0,w=A.m(y.v)
var $async$bj0=A.i(function(g,h){if(g===1)return A.j(h,w)
for(;;)switch(x){case 0:x=2
return A.d(A.EZ(d,e,A.c85(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null,null,null)),$async$bj0)
case 2:return A.k(null,w)}})
return A.l($async$bj0,w)},
biY(d){var x=0,w=A.m(y.v),v,u,t,s
var $async$biY=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:u=$.dbS()
t=A.dd()
s=$.dX().a
s=(s==null?null:s.e).e
s.toString
v=y.b
x=2
return A.d(u.bD("create_companion_in_organization",A.w(["org",1,"oc",t,"usr",s,"c_name",d],y.w,v),v),$async$biY)
case 2:return A.k(null,w)}})
return A.l($async$biY,w)},
SZ(d,e,f){var x=0,w=A.m(y.v),v,u,t,s,r,q,p,o,n,m,l
var $async$SZ=A.i(function(g,h){if(g===1)return A.j(h,w)
for(;;)$async$outer:switch(x){case 0:m=f==null
l=m?null:f.a
if(l==null){u=$.ea().ge4().c
l=(u==null?null:u.r).a}u=y.w
t=y.b
x=3
return A.d($.jm().bD("sign_user_to_event",A.w(["ev",e,"usr",l],u,t),t),$async$SZ)
case 3:s=h
t=J.a1(s)
switch(t.h(s,"code")){case 200:if(m){m=$.dX().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
A.aZ(d,A.f(A.o(r)+"You have been signed in.",null,null),C.X)}else{r=f.e==="female"?"F":"M"
A.aZ(d,A.f(r+"{user} has been signed in.",null,A.w(["user",f.fu()],u,u)),C.X)}x=1
break $async$outer
case 100:A.aZ(d,A.f("Cannot sign in!",null,null)+" "+A.f("Event is over.",null,null),C.au)
x=1
break $async$outer
case 101:A.aZ(d,A.f("Cannot sign in!",null,null)+" "+A.f("Event is full.",null,null),C.au)
x=1
break $async$outer
case 102:if(m){m=$.dX().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.f(A.o(r)+"You are already signed in at an event of this type.",null,null)
A.aZ(d,A.f("Cannot sign in!",null,null)+" "+q,C.au)}else{r=f.e==="female"?"F":"M"
q=A.f(r+"{user} is already signed in at an event of this type.",null,A.w(["user",f.fu()],u,u))
A.aZ(d,A.f("Cannot sign in!",null,null)+" "+q,C.au)}x=1
break $async$outer
case 103:if(m){m=$.dX().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.f(A.o(r)+"You are already signed in.",null,null)
A.aZ(d,A.f("Cannot sign in!",null,null)+" "+q,C.au)}else{r=f.e==="female"?"F":"M"
q=A.f(r+"{user} is already signed in.",null,A.w(["user",f.fu()],u,u))
A.aZ(d,A.f("Cannot sign in!",null,null)+" "+q,C.au)}x=1
break $async$outer
case 107:if(m){m=$.dX().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.f(A.o(r)+"You are already signed in at another event at the same time.",null,null)
A.aZ(d,A.f("Cannot sign in!",null,null)+" "+q,C.au)}else{r=f.e==="female"?"F":"M"
A.aZ(d,A.f(r+"{user} is already signed in at another event at the same time.",null,A.w(["user",f.fu()],u,u)),C.X)}x=1
break $async$outer
case 104:p=A.f("It's too soon!",null,null)
if(t.h(s,"events_registration_start")!=null){o=A.kz(A.ek(t.h(s,"events_registration_start")),null)
m=y.r
t=d.af(m).r.a
t===$&&A.a()
n=B.dCu(t.gf7(0)).cl(o)
m=d.af(m).r.a
m===$&&A.a()
p=A.f("You can sign in from {time}.",null,A.w(["time",n+" "+A.wg(m.gf7(0)).cl(o)],u,u))}q=y.q.a(A.lV("workshops",null)).f
if(q!=null&&q.length!==0){A.aZ(d,q,C.au)
x=1
break $async$outer}A.aZ(d,A.f("Cannot sign in!",null,null)+" "+p,C.au)
x=1
break $async$outer
case 105:A.aZ(d,A.f("Cannot sign in!",null,null)+" "+A.f("There is already the maximum of men.",null,null),C.au)
x=1
break $async$outer
case 106:A.aZ(d,A.f("Cannot sign in!",null,null)+" "+A.f("There is already the maximum of women.",null,null),C.au)
x=1
break $async$outer
default:A.aZ(d,A.f("Cannot sign in!",null,null),C.au)
x=1
break $async$outer}case 1:return A.k(v,w)}})
return A.l($async$SZ,w)},
dCu(d){var x=A.mX(d,A.pk(),null)
x.toString
x=new A.jb(new A.mt(),x)
x.m_("MMMMEEEEd")
return x}},D,E,G,F,H,I,K,L,M
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[67],B)
D=c[199]
E=c[167]
G=c[94]
F=c[273]
H=c[295]
I=c[179]
K=c[285]
L=c[195]
M=c[297]
B.asR.prototype={}
B.rR.prototype={
K(){return new B.agE(new A.bu(C.ae,$.a7()))}}
B.agE.prototype={
T(){this.a5()
this.e=this.a.f},
O_(){var x=0,w=A.m(y.v),v=this,u
var $async$O_=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:u=v.e
u===$&&A.a()
x=J.bp(u)<v.a.e&&v.d.a.a.length!==0?2:3
break
case 2:u=v.d
x=4
return A.d(B.biY(u.a.a),$async$O_)
case 4:u.hx(0,C.d0)
x=5
return A.d(A.rV(),$async$O_)
case 5:v.e=e
if(v.c!=null)v.q(new B.ci9())
case 3:return A.k(null,w)}})
return A.l($async$O_,w)},
Dw(d){return this.bdS(d)},
bdS(d){var x=0,w=A.m(y.v),v,u=this,t
var $async$Dw=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.d(A.hY(t,A.f("Delete companion",null,null),A.f("By deleting your companion you will also sign him/her out of all signed in sessions.",null,null),"Ok"),$async$Dw)
case 3:if(!f){x=1
break}x=4
return A.d(G.awc(d),$async$Dw)
case 4:t=u.a.r.$0()
x=5
return A.d(y.x.b(t)?t:A.bY(t,y.v),$async$Dw)
case 5:x=6
return A.d(A.rV(),$async$Dw)
case 6:u.e=f
if(u.c!=null)u.q(new B.cia())
case 1:return A.k(v,w)}})
return A.l($async$Dw,w)},
IJ(d){return this.bEQ(d)},
bEQ(d){var x=0,w=A.m(y.v),v,u=this,t
var $async$IJ=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:t=u.a.d.$0()
if(!(t==null?!1:t)){x=1
break}t=u.c
t.toString
x=3
return A.d(B.bj_(t,u.a.c,d),$async$IJ)
case 3:t=u.a.r.$0()
x=4
return A.d(y.x.b(t)?t:A.bY(t,y.v),$async$IJ)
case 4:x=5
return A.d(A.rV(),$async$IJ)
case 5:u.e=f
if(u.c!=null)u.q(new B.cib())
case 1:return A.k(v,w)}})
return A.l($async$IJ,w)},
IK(d){return this.bER(d)},
bER(d){var x=0,w=A.m(y.v),v=this,u
var $async$IK=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(B.bj0(u,v.a.c,d),$async$IK)
case 2:u=v.a.r.$0()
x=3
return A.d(y.x.b(u)?u:A.bY(u,y.v),$async$IK)
case 3:x=4
return A.d(A.rV(),$async$IK)
case 4:v.e=f
if(v.c!=null)v.q(new B.cic())
return A.k(null,w)}})
return A.l($async$IK,w)},
A(d){var x,w,v,u,t,s=this,r=null,q=s.a.d.$0()
if(q==null)q=!1
x=E.ca(D.afY,r)
w=y.w
w=E.ca(D.bK1,A.w(["max_companions",J.am(B.bsv())],w,w))
v=s.e
v===$&&A.a()
v=J.bp(v)
u=s.a.e
t=y.u
u=A.cY(new A.cp(D.akZ,A.a8(A.b([w,F.e0,A.jE(A.a8(A.b([A.eD(r,C.aG,!1,r,!0,C.n,r,A.eP(),s.d,r,r,r,r,r,2,A.bm(r,r,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.f("Companion Name",r,r),!0,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r),C.p,!0,r,!0,r,!1,r,C.az,r,r,A.b([new A.BJ(30,r)],y.y),r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.aK,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.A,r,C.aM,r,r,r,r),F.e0,A.da(!1,E.ca(D.bKz,r),r,r,r,r,r,r,s.gbcs(),r,r)],t),C.i,C.f,C.h,0,r,C.k),!1,!1,!1,!1,v<u),F.e0,new A.an(380,150,A.ic(!0,!0,!0,r,C.n,r,C.p,r,C.F,new B.cig(s,q),J.bp(s.e),r,r,r,r,r,C.cL,r,r,r,!1,C.C,r,!1),r)],t),C.i,C.f,C.G,0,r,C.k),r),C.n,r,C.p,C.F,r,r,r,r,r,r,!1,C.C)
return A.ei(A.b([A.c3(!1,E.ca(M.KC,r),r,r,!0,r,r,r,r,new B.cih(d),r,r)],t),r,r,u,r,r,r,r,x,r,r)}}
var z=a.updateTypes(["W<~>()"])
B.ci9.prototype={
$0(){},
$S:0}
B.cia.prototype={
$0(){},
$S:0}
B.cib.prototype={
$0(){},
$S:0}
B.cic.prototype={
$0(){},
$S:0}
B.cig.prototype={
$2(d,e){var x,w,v=null,u=this.a,t=u.e
t===$&&A.a()
x=J.u(t,e)
t=A.b([],y.u)
if(x.ajV(u.a.c))t.push(H.QX)
t.push(K.dd)
t.push(A.aP(A.z(x.b,v,v,v,v,v,v,v,v,v,v,v,v,v),1,v))
if(!x.ajV(u.a.c)){w=this.b?new B.cid(u,x):v
t.push(A.da(!1,E.ca(D.bJT,v),v,v,v,v,v,v,w,v,v))}if(x.ajV(u.a.c))t.push(A.da(!1,E.ca(D.afV,v),v,v,v,v,v,v,new B.cie(u,x),v,v))
t.push(A.bI(v,v,v,v,v,v,L.jU,v,v,v,new B.cif(u,x),v,v,v,v,v))
return new A.S(C.ai,A.ac(t,C.i,v,C.f,C.h,0,v),v)},
$S:139}
B.cid.prototype={
$0(){return this.a.IJ(this.b)},
$S:0}
B.cie.prototype={
$0(){return this.a.IK(this.b)},
$S:0}
B.cif.prototype={
$0(){return this.a.Dw(this.b)},
$S:0}
B.cih.prototype={
$0(){return A.b6(this.a,!1).cj()},
$S:0}
B.bdR.prototype={
$0(){var x=0,w=A.m(y.v),v=this
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.k(null,w)}})
return A.l($async$$0,w)},
$S:2}
B.bdS.prototype={
$0(){var x=0,w=A.m(y.v),v=this
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.k(null,w)}})
return A.l($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(B.agE.prototype,"gbcs","O_",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.asR,A.jy)
x(B.rR,A.K)
x(B.agE,A.N)
w(A.d5,[B.ci9,B.cia,B.cib,B.cic,B.cid,B.cie,B.cif,B.cih,B.bdR,B.bdS])
x(B.cig,A.ej)})()
A.cf(b.typeUniverse,JSON.parse('{"asR":{"jy":["AN"]},"rR":{"K":[],"e":[]},"agE":{"N":["rR"]}}'))
var y={x:A.J("W<~>"),y:A.J("v<no>"),p:A.J("v<Db>"),u:A.J("v<e>"),w:A.J("h"),q:A.J("afJ"),r:A.J("lE"),b:A.J("@"),v:A.J("~")};(function constants(){D.akZ=new A.ae(0,480,0,1/0)
D.QA=new A.as(58615,"MaterialIcons",null,!1)
D.bJT=new A.ch("Sign in someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bK1=new A.ch("If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.afV=new A.ch("Sign out someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bKz=new A.ch("Create Companion",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.afY=new A.ch("Companions",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["gxYrA/0cJu72/62Yomv6RnTVLc4="]=a.current})($__dart_deferred_initializers__);