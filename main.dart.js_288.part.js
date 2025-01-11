((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_288",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,N,O,P,H,Q,I,R,E,S,T,U,V,W,X,Y,K,Z,B={OI:function OI(d,e,f,g,h){var _=this
_.c=d
_.f=e
_.ch=f
_.a=g
_.$ti=h},OJ:function OJ(d){this.c=this.a=null
this.$ti=d},bo_:function bo_(d){this.a=d},
cJM(d,e){return new B.xF(e,d)},
xF:function xF(d,e){this.c=d
this.a=e},
aHP:function aHP(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
bUL:function bUL(d,e){this.a=d
this.b=e},
bUR:function bUR(d,e){this.a=d
this.b=e},
bUS:function bUS(d,e){this.a=d
this.b=e},
bUP:function bUP(d){this.a=d},
bUO:function bUO(d,e,f){this.a=d
this.b=e
this.c=f},
bUM:function bUM(d,e){this.a=d
this.b=e},
bUN:function bUN(){},
bUQ:function bUQ(d,e){this.a=d
this.b=e},
rK:function rK(d,e){this.a=d
this.b=e},
cJL(d){return A.cnr(d)},
F5(d){var x=0,w=A.l(y.H),v,u,t,s,r,q,p,o,n
var $async$F5=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:p=$.zm()
o=p.bW("news").h4(0,"id")
n=d.a
n.toString
o=A.pB(o.vF(o.w0("created_at","lt."+n.j(0))),o.$ti.c)
n=d.d
v=o.w0("id","neq."+n)
o=A.pB(o.vF(v),o.$ti.c)
u=$.dx
u.toString
x=2
return A.c(o.ck("occasion",u).aAg(0,"created_at").azd(1).Hw(),$async$F5)
case 2:t=f
x=t!=null?3:5
break
case 3:x=6
return A.c(p.bW("user_news").h4(0,"user").ck("news_id",n),$async$F5)
case 6:s=f
r=A.a([],y.t)
for(p=J.al(s),o=J.a2(t),u=y.N,q=y.z;p.q();)r.push(A.x(["user",J.t(p.gK(p),"user"),"news_id",o.i(t,"id")],u,q))
p=$.zm()
x=7
return A.c(p.bW("user_news").a_1(r).hT(0),$async$F5)
case 7:x=4
break
case 5:x=8
return A.c(p.bW("user_news").kq(0).ck("news_id",n),$async$F5)
case 8:case 4:x=9
return A.c(p.bW("news").kq(0).ck("id",n),$async$F5)
case 9:return A.j(null,w)}})
return A.k($async$F5,w)},
b06(d){var x=0,w=A.l(y.H),v
var $async$b06=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.c($.zm().bW("news").em(0,A.x(["message",d.b],v,v)).ck("id",d.d),$async$b06)
case 2:return A.j(null,w)}})
return A.k($async$b06,w)},
ajA(d,e,f,g,h,i,j){var x=0,w=A.l(y.z),v,u,t,s,r,q,p,o
var $async$ajA=A.h(function(k,l){if(k===1)return A.i(l,w)
while(true)switch(x){case 0:x=h?3:4
break
case 3:u=e!=null?"<strong>"+e+"</strong><br>"+g:g
t=$.zm().bW("news")
s=$.dx
s.toString
x=5
return A.c(t.jF(0,A.x(["occasion",s,"message",u,"created_by",$.dR().gdr().c.a],y.N,y.K)).hT(0),$async$ajA)
case 5:case 4:x=i?6:7
break
case 6:for(t=I.aQS(W.c9D(g),"p"),s=t.length,r="",q=0;q<t.length;t.length===s||(0,A.O)(t),++q){p=new A.cS("")
new I.bIE(p).bc(t[q])
p=p.a
o=(p.charCodeAt(0)==0?p:p)+"\n"
if(C.e.df(o).length===0)continue
r+=o}r=C.e.df(r)
t=$.zm().bW("log_notifications")
s=$.dx
s.toString
x=8
return A.c(t.jF(0,A.x(["occasion",s,"to",j,"content",r,"heading",e==null?f:e,"organization",1],y.N,y.X)),$async$ajA)
case 8:A.c_(d,A.F("Message has been sent.",null),C.ag)
x=1
break
case 7:if(h)A.c_(d,A.F("Message has been created.",null),C.ag)
case 1:return A.j(v,w)}})
return A.k($async$ajA,w)},
ajB(d){var x=0,w=A.l(y.H),v,u,t,s
var $async$ajB=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:s=$.dR()
if(s.gdr().d==null)A.a0(A.dc("User must be logged in."))
v=$.zm()
u=v.bW("user_news").kq(0).ck("user",s.gdr().c.a)
t=$.dx
t.toString
x=2
return A.c(u.ck("occasion",t),$async$ajB)
case 2:x=3
return A.c(v.bW("user_news").jF(0,A.x(["user",s.gdr().c.a,"news_id",d,"occasion",$.dx],y.N,y.X)).hT(0),$async$ajB)
case 3:return A.j(null,w)}})
return A.k($async$ajB,w)}},D,A_,G,F
J=c[1]
A=c[0]
C=c[2]
L=c[160]
M=c[144]
N=c[181]
O=c[161]
P=c[199]
H=c[117]
Q=c[205]
I=c[122]
R=c[257]
E=c[85]
S=c[282]
T=c[198]
U=c[106]
V=c[222]
W=c[81]
X=c[118]
Y=c[92]
K=c[194]
Z=c[272]
B=a.updateHolder(c[19],B)
D=c[295]
A_=c[213]
G=c[164]
F=c[171]
B.OI.prototype={
M(){return new B.OJ(this.$ti.h("OJ<1>"))},
bxV(d){return this.c.$1(d)}}
B.OJ.prototype={
aIM(){var x,w,v,u,t,s,r,q=this,p=null,o=q.c
o.toString
x=E.atU(o)
o=q.c.gaf()
o.toString
w=y.q
w.a(o)
v=q.c
v.toString
q.a.toString
v=A.co(v,!1).d
v===$&&A.b()
v=v.gV().c.gaf()
v.toString
w.a(v)
q.a.toString
u=A.bA("offset")
switch(0){case 0:q.a.toString
u.b=C.h
break}w=u.aC()
w=A.d5(o.cP(0,v),w)
t=o.gB(0).FH(0,C.h).a8(0,u.aC())
t=A.tr(w,A.d5(o.cP(0,v),t))
v=v.gB(0)
s=H.coF(t,new A.Z(0,0,0+v.a,0+v.b))
v=q.a
v.toString
t=q.c
t.toString
r=v.bxV(t)
if(J.jp(r)){q.a.toString
o=q.c
o.toString
E.cvE(C.i,x.a,p,o,x.d,p,r,x.c,p,s,p,p,x.e,x.b,x.f,!1,q.$ti.h("1?")).aO(0,new B.bo_(q),y.H)}},
A(d){var x,w,v,u,t=this,s=null,r=A.MV(d),q=E.atU(d)
t.a.toString
E.atU(d)
x=t.a
x=x.ch
w=q.as
if(w==null)w=r.a
v=q.Q
if(v==null)v=r.f
u=A.cD(d,C.a5,y.y)
u.toString
u=u.gcD()
t.a.toString
return F.cX(v,s,s,!0,s,x,w,new A.cl(K.a2q,y.e),s,t.gaIL(),C.aE,s,s,s,u)}}
B.xF.prototype={
M(){return new B.aHP(A.a([],y.o))}}
B.aHP.prototype={
a0(){this.ap()
this.bm()},
l(){this.am()},
b_(){this.cM()
this.JQ()},
JQ(){var x=0,w=A.l(y.H),v=this,u
var $async$JQ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=v.c
u.toString
u=A.Bq(u,null,y.X)
x=(u==null?null:u.gqU())===!0&&!v.e?2:3
break
case 2:x=$.dR().gdr().d!=null&&J.jp(v.d)&&!J.fO(v.d).f?4:5
break
case 4:x=6
return A.c(B.ajB(J.fO(v.d).d),$async$JQ)
case 6:u=v.a.c
if(u!=null)u.$0()
v.e=!0
case 5:case 3:return A.j(null,w)}})
return A.k($async$JQ,w)},
bh8(d){L.kQ(d,"newsForm",y.X).aO(0,new B.bUL(this,d),y.P)},
XL(){var x=0,w=A.l(y.H),v=this,u
var $async$XL=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(A.W3(),$async$XL)
case 2:v.E(new u.bUR(v,e))
return A.j(null,w)}})
return A.k($async$XL,w)},
nh(){var x=0,w=A.l(y.H),v=this,u
var $async$nh=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:u=B
x=2
return A.c(X.n9("newsOffline",B.cJK(),y.x),$async$nh)
case 2:v.E(new u.bUS(v,e))
return A.j(null,w)}})
return A.k($async$nh,w)},
bm(){var x=0,w=A.l(y.H),v=this
var $async$bm=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.nh(),$async$bm)
case 2:x=3
return A.c(v.XL(),$async$bm)
case 3:x=4
return A.c(A.te("newsOffline",v.d),$async$bm)
case 4:v.JQ()
return A.j(null,w)}})
return A.k($async$bm,w)},
A(d){var x,w,v=null,u=A.J(d).ax.a===C.y?$.kd():$.zo(),t=G.bs(D.b2_,v)
t=O.jQ(v,!0,v,v,v,v,v,Y.bnU(),v,t)
x=M.mb(!0,v,new B.bUP(this),J.b1(this.d),v,v,v,!1,C.K,!1)
w=A.or()
return F.fK(t,u,new A.cP(C.aO,v,v,new A.d4(new A.aa(0,820,0,1/0),x,v),v),v,v,A.h4(A.clk(S.mm,!1,new B.bUQ(this,d)),w),v)}}
B.rK.prototype={
G(){return"ContextMenuChoice."+this.b}}
var z=a.updateTypes(["~()","Q<~>(rK)","z<to<rK>>(N)","tc(a7<f,@>)"])
B.bo_.prototype={
$1(d){var x=this.a
if(x.c==null)return null
if(d==null){x.a.toString
return null}x.a.f.$1(d)},
$S(){return this.a.$ti.h("aw(1?)")}}
B.bUL.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u,t,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
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
s=B.ajA(v.b,p,u,q,t,s,r)
x=4
return A.c(y._.b(s)?s:A.cw(s,y.z),$async$$1)
case 4:x=t?5:6
break
case 5:x=7
return A.c(v.a.bm(),$async$$1)
case 7:case 6:case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:73}
B.bUR.prototype={
$0(){this.a.d=this.b},
$S:0}
B.bUS.prototype={
$0(){this.a.d=this.b},
$S:0}
B.bUP.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=J.t(p.d,e),n=e>0?J.t(p.d,e-1):q
if(n!=null){x=o.a
x.toString
w=n.a
w.toString
v=A.bz(x)===A.bz(w)&&A.bL(x)===A.bL(w)&&A.cE(x)===A.cE(w)}else v=!1
x=y.p
w=A.a([],x)
u=e!==0
if(u&&!v)w.push(Q.oD)
if(!u||!v){u=d.ai(y.g).r.a
u===$&&A.b()
u=A.jT("EEEE d.M.y",u.gfF(0))
t=o.a
t.toString
t=u.ez(t)
if(o.f){u=p.c
u.toString
u=A.bd(q,q,A.J(u).db,q,q,q,q,q,q,q,q,q,q,q,C.as,q,q,!0,q,q,q,q,q,q,q,q)}else u=A.bd(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.as,q,q,!0,q,q,q,q,q,q,q,q)
w.push(A.aO(A_.h6,A.a6(t,q,q,q,q,q,q,q,u,q,q,q,q,q),C.i,q,q,q,q,q,q,D.ahz,q,q,q))}u=o.c
if(u==null)u=""
if(o.f){t=p.c
t.toString
t=A.bd(q,q,A.J(t).db,q,q,q,q,q,q,q,q,q,q,q,C.as,q,q,!0,q,q,q,q,q,q,q,q)}else t=A.bd(q,q,q,q,q,q,q,q,q,q,q,q,q,q,C.as,q,q,!0,q,q,q,q,q,q,q,q)
w.push(new A.ag(R.jS,A.a6(u,q,q,q,q,q,q,q,t,q,q,q,q,q),q))
t=A.dE(10)
u=A.J(d)
s=o.b
s.toString
r=$.dR().gdr().d
w.push(new A.ag(K.aht,A.aO(q,A.aZ(A.a([new A.ag(N.cd,new H.n0(s,18,!0,q),q),A.h4(new A.ag(C.aE,A.b9(A.a([F.c3(D.ak2,A.J(d).ch,q,16),T.a2a,A.a6(C.c.j(o.e),q,q,q,q,q,q,q,A.bd(q,q,A.J(d).ch,q,q,q,q,q,q,q,q,q,q,q,C.as,q,q,!0,q,q,q,q,q,q,q,q),q,q,q,q,q),P.jd],x),C.k,C.dP,C.m,q),q),r!=null)],x),C.k,C.j,C.m,q,C.v),C.i,q,q,new A.bF(u.ax.k2,q,q,t,q,q,q,C.T),q,q,q,q,q,q,q),q))
w.push(A.h4(new B.OI(new B.bUN(),new B.bUO(p,o,d),D.al6,q,y.I),A.or()))
return A.aZ(w,C.bY,C.j,C.m,q,C.v)},
$S:864}
B.bUO.prototype={
$1(d){return this.aE8(d)},
aE8(d){var x=0,w=A.l(y.H),v=this,u,t,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.b
s=v.c
x=d===D.FX?2:4
break
case 2:x=5
return A.c(B.F5(t),$async$$1)
case 5:A.c_(s,A.F("Message has been removed.",null),C.ag)
x=3
break
case 4:u=U.MQ(A.x(["content",t.b],y.N,y.z))
x=6
return A.c(F.fL(s,!1).f.kC(u,y.X).aO(0,new B.bUM(t,s),y.P),$async$$1)
case 6:case 3:x=7
return A.c(v.a.bm(),$async$$1)
case 7:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:z+1}
B.bUM.prototype={
$1(d){var x=0,w=A.l(y.P),v=this,u
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=d!=null?2:3
break
case 2:u=v.a
u.b=A.bp(d)
x=4
return A.c(B.b06(u),$async$$1)
case 4:A.c_(v.b,A.F("Message has been changed.",null),C.ag)
case 3:return A.j(null,w)}})
return A.k($async$$1,w)},
$S:73}
B.bUN.prototype={
$1(d){var x=y.B
return A.a([E.cdt(G.bs(V.CK,null),!0,48,D.afd,x),E.cdt(G.bs(D.b2a,null),!0,48,D.FX,x)],y.h)},
$S:z+2}
B.bUQ.prototype={
$0(){return this.a.bh8(this.b)},
$S:0};(function installTearOffs(){var x=a._instance_0u,w=a._static_1
x(B.OJ.prototype,"gaIL","aIM",0)
w(B,"cJK","cJL",3)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.G,[B.OI,B.xF])
x(A.L,[B.OJ,B.aHP])
x(A.bO,[B.bo_,B.bUL,B.bUO,B.bUM,B.bUN])
x(A.cn,[B.bUR,B.bUS,B.bUQ])
w(B.bUP,A.di)
w(B.rK,A.ef)})()
A.bD(b.typeUniverse,JSON.parse('{"OI":{"G":[],"d":[]},"OJ":{"L":["OI<1>"]},"xF":{"G":[],"d":[]},"aHP":{"L":["xF"]}}'))
var y=(function rtii(){var x=A.A
return{B:x("rK"),_:x("Q<@>"),t:x("p<a7<f,@>>"),o:x("p<tc>"),h:x("p<to<rK>>"),p:x("p<d>"),a:x("a7<f,@>"),y:x("aH"),x:x("tc"),P:x("aw"),K:x("B"),I:x("OI<rK>"),q:x("R"),N:x("f"),e:x("cl<vG>"),g:x("pW"),z:x("@"),X:x("B?"),H:x("~")}})();(function constants(){D.FX=new B.rK(0,"delete")
D.afd=new B.rK(1,"edit")
D.ahz=new A.ap(16,8,16,0)
D.ak2=new A.aQ(58652,"MaterialIcons",null,!1)
D.al6=new A.eo(Z.ajR,null,null,null,null)
D.b2_=new A.c6("News",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b2a=new A.c6("Delete",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_288",e:"endPart",h:b})})($__dart_deferred_initializers__,"Xhw4IChtAMdOoPa/M+coUQX0umw=");