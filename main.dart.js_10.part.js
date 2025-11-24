((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d3x(d){var x=A.w(["id",d],y.w,y.b)
return new B.asw("CheckRoute",new A.AG(d,null),x,C.bX,null,"",null)},
asw:function asw(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
rN:function rN(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ago:function ago(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
ch9:function ch9(){},
cha:function cha(){},
chb:function chb(){},
chc:function chc(){},
chg:function chg(d,e){this.a=d
this.b=e},
chd:function chd(d,e){this.a=d
this.b=e},
che:function che(d,e){this.a=d
this.b=e},
chf:function chf(d,e){this.a=d
this.b=e},
chh:function chh(d){this.a=d},
dcG(d,e,f,g,h){var x=null,w=A.jC(A.bN(x,x,x,x,x,x,A.aB(C.uo,h,x,x),x,x,x,new B.bdq(e),x,x,x,x,x),!1,!1,!1,!1,d)
return A.b([w,A.jC(A.bN(x,x,x,x,x,x,A.aB(I.jM,g,x,x),x,x,x,new B.bdr(f),x,x,x,x,x),!1,!1,!1,!1,!d)],y.p)},
bdq:function bdq(d){this.a=d},
bdr:function bdr(d){this.a=d},
brW(){var x=A.lV("companions",null)
if(x instanceof A.a2G)return x.e
return null},
biz(d,e,f){var x=0,w=A.n(y.v)
var $async$biz=A.i(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=2
return A.d(B.SS(d,e,A.c7r(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null,null,null)),$async$biz)
case 2:return A.l(null,w)}})
return A.m($async$biz,w)},
biA(d,e,f){var x=0,w=A.n(y.v)
var $async$biA=A.i(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=2
return A.d(A.EV(d,e,A.c7r(null,null,null,null,null,null,null,f.a,f.b,null,null,null,null,null,null,null)),$async$biA)
case 2:return A.l(null,w)}})
return A.m($async$biA,w)},
bix(d){var x=0,w=A.n(y.v),v,u,t,s
var $async$bix=A.i(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.da1()
t=A.da()
s=$.dY().a
s=(s==null?null:s.e).e
s.toString
v=y.b
x=2
return A.d(u.c3("create_companion_in_organization",A.w(["org",1,"oc",t,"usr",s,"c_name",d],y.w,v),v),$async$bix)
case 2:return A.l(null,w)}})
return A.m($async$bix,w)},
SS(d,e,f){var x=0,w=A.n(y.v),v,u,t,s,r,q,p,o,n,m,l
var $async$SS=A.i(function(g,h){if(g===1)return A.k(h,w)
for(;;)$async$outer:switch(x){case 0:m=f==null
l=m?null:f.a
if(l==null){u=$.e8().ge4().c
l=(u==null?null:u.r).a}u=y.w
t=y.b
x=3
return A.d($.jj().c3("sign_user_to_event",A.w(["ev",e,"usr",l],u,t),t),$async$SS)
case 3:s=h
t=J.a2(s)
switch(t.h(s,"code")){case 200:if(m){m=$.dY().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
A.b5(d,A.f(A.o(r)+"You have been signed in.",null,null),C.Z)}else{r=f.e==="female"?"F":"M"
A.b5(d,A.f(r+"{user} has been signed in.",null,A.w(["user",f.fu()],u,u)),C.Z)}x=1
break $async$outer
case 100:A.b5(d,A.f("Cannot sign in!",null,null)+" "+A.f("Event is over.",null,null),C.ay)
x=1
break $async$outer
case 101:A.b5(d,A.f("Cannot sign in!",null,null)+" "+A.f("Event is full.",null,null),C.ay)
x=1
break $async$outer
case 102:if(m){m=$.dY().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.f(A.o(r)+"You are already signed in at an event of this type.",null,null)
A.b5(d,A.f("Cannot sign in!",null,null)+" "+q,C.ay)}else{r=f.e==="female"?"F":"M"
q=A.f(r+"{user} is already signed in at an event of this type.",null,A.w(["user",f.fu()],u,u))
A.b5(d,A.f("Cannot sign in!",null,null)+" "+q,C.ay)}x=1
break $async$outer
case 103:if(m){m=$.dY().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.f(A.o(r)+"You are already signed in.",null,null)
A.b5(d,A.f("Cannot sign in!",null,null)+" "+q,C.ay)}else{r=f.e==="female"?"F":"M"
q=A.f(r+"{user} is already signed in.",null,A.w(["user",f.fu()],u,u))
A.b5(d,A.f("Cannot sign in!",null,null)+" "+q,C.ay)}x=1
break $async$outer
case 107:if(m){m=$.dY().a
m=m==null?null:m.d
if(m==null)r=null
else r=m.e==="female"?"F":"M"
q=A.f(A.o(r)+"You are already signed in at another event at the same time.",null,null)
A.b5(d,A.f("Cannot sign in!",null,null)+" "+q,C.ay)}else{r=f.e==="female"?"F":"M"
A.b5(d,A.f(r+"{user} is already signed in at another event at the same time.",null,A.w(["user",f.fu()],u,u)),C.Z)}x=1
break $async$outer
case 104:p=A.f("It's too soon!",null,null)
if(t.h(s,"events_registration_start")!=null){o=A.ky(A.ef(t.h(s,"events_registration_start")),null)
m=y.r
t=d.ag(m).r.a
t===$&&A.a()
n=B.dAD(t.gf7(0)).cj(o)
m=d.ag(m).r.a
m===$&&A.a()
p=A.f("You can sign in from {time}.",null,A.w(["time",n+" "+A.wd(m.gf7(0)).cj(o)],u,u))}q=y.q.a(A.lV("workshops",null)).f
if(q!=null&&q.length!==0){A.b5(d,q,C.ay)
x=1
break $async$outer}A.b5(d,A.f("Cannot sign in!",null,null)+" "+p,C.ay)
x=1
break $async$outer
case 105:A.b5(d,A.f("Cannot sign in!",null,null)+" "+A.f("There is already the maximum of men.",null,null),C.ay)
x=1
break $async$outer
case 106:A.b5(d,A.f("Cannot sign in!",null,null)+" "+A.f("There is already the maximum of women.",null,null),C.ay)
x=1
break $async$outer
default:A.b5(d,A.f("Cannot sign in!",null,null),C.ay)
x=1
break $async$outer}case 1:return A.l(v,w)}})
return A.m($async$SS,w)},
dAD(d){var x=A.mU(d,A.ph(),null)
x.toString
x=new A.ja(new A.ms(),x)
x.m_("MMMMEEEEd")
return x}},D,E,G,F,H,I,K,L,M
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[67],B)
D=c[199]
E=c[167]
G=c[94]
F=c[272]
H=c[293]
I=c[179]
K=c[284]
L=c[195]
M=c[295]
B.asw.prototype={}
B.rN.prototype={
K(){return new B.ago(new A.bz(C.af,$.a7()))}}
B.ago.prototype={
T(){this.a7()
this.e=this.a.f},
NZ(){var x=0,w=A.n(y.v),v=this,u
var $async$NZ=A.i(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.e
u===$&&A.a()
x=J.bo(u)<v.a.e&&v.d.a.a.length!==0?2:3
break
case 2:u=v.d
x=4
return A.d(B.bix(u.a.a),$async$NZ)
case 4:u.hL(0,C.db)
x=5
return A.d(A.rR(),$async$NZ)
case 5:v.e=e
if(v.c!=null)v.q(new B.ch9())
case 3:return A.l(null,w)}})
return A.m($async$NZ,w)},
Du(d){return this.bdq(d)},
bdq(d){var x=0,w=A.n(y.v),v,u=this,t
var $async$Du=A.i(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.d(A.hX(t,A.f("Delete companion",null,null),A.f("By deleting your companion you will also sign him/her out of all signed in sessions.",null,null),"Ok"),$async$Du)
case 3:if(!f){x=1
break}x=4
return A.d(G.avS(d),$async$Du)
case 4:t=u.a.r.$0()
x=5
return A.d(y.x.b(t)?t:A.bY(t,y.v),$async$Du)
case 5:x=6
return A.d(A.rR(),$async$Du)
case 6:u.e=f
if(u.c!=null)u.q(new B.cha())
case 1:return A.l(v,w)}})
return A.m($async$Du,w)},
IH(d){return this.bEi(d)},
bEi(d){var x=0,w=A.n(y.v),v,u=this,t
var $async$IH=A.i(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=u.a.d.$0()
if(!(t==null?!1:t)){x=1
break}t=u.c
t.toString
x=3
return A.d(B.biz(t,u.a.c,d),$async$IH)
case 3:t=u.a.r.$0()
x=4
return A.d(y.x.b(t)?t:A.bY(t,y.v),$async$IH)
case 4:x=5
return A.d(A.rR(),$async$IH)
case 5:u.e=f
if(u.c!=null)u.q(new B.chb())
case 1:return A.l(v,w)}})
return A.m($async$IH,w)},
II(d){return this.bEj(d)},
bEj(d){var x=0,w=A.n(y.v),v=this,u
var $async$II=A.i(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(B.biA(u,v.a.c,d),$async$II)
case 2:u=v.a.r.$0()
x=3
return A.d(y.x.b(u)?u:A.bY(u,y.v),$async$II)
case 3:x=4
return A.d(A.rR(),$async$II)
case 4:v.e=f
if(v.c!=null)v.q(new B.chc())
return A.l(null,w)}})
return A.m($async$II,w)},
A(d){var x,w,v,u,t,s=this,r=null,q=s.a.d.$0()
if(q==null)q=!1
x=E.ca(D.afH,r)
w=y.w
w=E.ca(D.bJx,A.w(["max_companions",J.aq(B.brW())],w,w))
v=s.e
v===$&&A.a()
v=J.bo(v)
u=s.a.e
t=y.u
u=A.d3(new A.ct(D.akG,A.a9(A.b([w,F.en,A.jC(A.a9(A.b([A.eC(r,C.aG,!1,r,!0,C.n,r,A.eO(),s.d,r,r,r,r,r,2,A.bt(r,r,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.f("Companion Name",r,r),!0,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r),C.p,!0,r,!0,r,!1,r,C.az,r,r,A.b([new A.BD(30,r)],y.y),r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.aH,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.z,r,C.aI,r,r,r,r),F.en,A.dc(!1,E.ca(D.bK4,r),r,r,r,r,r,r,s.gbc0(),r,r)],t),C.i,C.f,C.h,0,r,C.l),!1,!1,!1,!1,v<u),F.en,new A.ao(380,150,A.il(!0,!0,!0,r,C.n,r,C.p,r,C.F,new B.chg(s,q),J.bo(s.e),r,r,r,r,r,C.cG,r,r,r,!1,C.C,r,!1),r)],t),C.i,C.f,C.H,0,r,C.l),r),C.n,r,C.p,C.F,r,r,r,r,r,r,!1,C.C)
return A.ez(A.b([A.c4(!1,E.ca(M.Kp,r),r,r,!0,r,r,r,r,new B.chh(d),r,r)],t),r,r,u,r,r,r,r,x,r,r)}}
var z=a.updateTypes(["W<~>()"])
B.ch9.prototype={
$0(){},
$S:0}
B.cha.prototype={
$0(){},
$S:0}
B.chb.prototype={
$0(){},
$S:0}
B.chc.prototype={
$0(){},
$S:0}
B.chg.prototype={
$2(d,e){var x,w,v=null,u=this.a,t=u.e
t===$&&A.a()
x=J.v(t,e)
t=A.b([],y.u)
if(x.ajH(u.a.c))t.push(H.QH)
t.push(K.dn)
t.push(A.aV(A.C(x.b,v,v,v,v,v,v,v,v,v,v,v,v,v),1,v))
if(!x.ajH(u.a.c)){w=this.b?new B.chd(u,x):v
t.push(A.dc(!1,E.ca(D.bJo,v),v,v,v,v,v,v,w,v,v))}if(x.ajH(u.a.c))t.push(A.dc(!1,E.ca(D.afE,v),v,v,v,v,v,v,new B.che(u,x),v,v))
t.push(A.bN(v,v,v,v,v,v,L.jO,v,v,v,new B.chf(u,x),v,v,v,v,v))
return new A.U(C.ai,A.ae(t,C.i,v,C.f,C.h,0,v),v)},
$S:134}
B.chd.prototype={
$0(){return this.a.IH(this.b)},
$S:0}
B.che.prototype={
$0(){return this.a.II(this.b)},
$S:0}
B.chf.prototype={
$0(){return this.a.Du(this.b)},
$S:0}
B.chh.prototype={
$0(){return A.b9(this.a,!1).cz()},
$S:0}
B.bdq.prototype={
$0(){var x=0,w=A.n(y.v),v=this
var $async$$0=A.i(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
B.bdr.prototype={
$0(){var x=0,w=A.n(y.v),v=this
var $async$$0=A.i(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=2
return A.d(v.a.$0(),$async$$0)
case 2:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(B.ago.prototype,"gbc0","NZ",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.asw,A.jw)
x(B.rN,A.L)
x(B.ago,A.N)
w(A.d2,[B.ch9,B.cha,B.chb,B.chc,B.chd,B.che,B.chf,B.chh,B.bdq,B.bdr])
x(B.chg,A.ee)})()
A.cf(b.typeUniverse,JSON.parse('{"asw":{"jw":["AG"]},"rN":{"L":[],"e":[]},"ago":{"N":["rN"]}}'))
var y={x:A.J("W<~>"),y:A.J("u<ob>"),p:A.J("u<D3>"),u:A.J("u<e>"),w:A.J("h"),q:A.J("afv"),r:A.J("lE"),b:A.J("@"),v:A.J("~")};(function constants(){D.akG=new A.ac(0,480,0,1/0)
D.Qk=new A.at(58615,"MaterialIcons",null,!1)
D.bJo=new A.ch("Sign in someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJx=new A.ch("If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.afE=new A.ch("Sign out someone",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bK4=new A.ch("Create Companion",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.afH=new A.ch("Companions",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["Z4uSFG8SANgei7PmlVBeT9ThCkw="]=a.current})($__dart_deferred_initializers__);