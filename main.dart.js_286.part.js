((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,M,N,K,E,B={
dGu(d,e,f){return new B.FD(d,f,e)},
FD:function FD(d,e,f){this.c=d
this.d=e
this.a=f},
aip:function aip(d){var _=this
_.e=null
_.x=_.w=_.r=_.f=!1
_.y=null
_.z=0
_.Q=d
_.as=$
_.c=_.a=null},
ctK:function ctK(d){this.a=d},
ctH:function ctH(d){this.a=d},
ctI:function ctI(d){this.a=d},
ctJ:function ctJ(d){this.a=d},
ctN:function ctN(d){this.a=d},
ctO:function ctO(d){this.a=d},
ctP:function ctP(){},
ctM:function ctM(d){this.a=d},
ctQ:function ctQ(d){this.a=d},
ctR:function ctR(d){this.a=d},
ctL:function ctL(d){this.a=d},
ctS:function ctS(d){this.a=d},
dGy(d){var x,w,v,u,t,s,r,q,p=null,o="data:image/jpeg;base64,",n="data:image/png;base64,",m=F.Ra(G.R7(d),"img"),l=A.b([],y.x)
for(x=m.length,w=0;w<m.length;m.length===x||(0,A.L)(m),++w){v=m[w].b.h(0,"src")
if(v!=null)u=C.d.b2(v,o)||C.d.b2(v,n)
else u=!1
if(u){if(A.vM(v,o,0))t=A.a0N(v,o,"",0)
else t=A.a0N(v,n,"",0)
if(C.c.aM(t.length*3,4)>524288){s=C.dP.ct(t)
if(C.d.b2(v,o)){r=A.d25(s)
q=r==null?p:r.o6(0,s,p)
if(q!=null){u=q.a
u=u==null?p:u.a
u=(u==null?0:u)>1200}else u=!1
if(u)l.push(v)}else if(C.d.b2(v,n)){r=A.d25(s)
q=r==null?p:r.o6(0,s,p)
if(q!=null){u=q.a
u=u==null?p:u.a
u=(u==null?0:u)>1000}else u=!1
if(u)l.push(v)}}}}return l},
dhd(d){var x,w,v=G.R7(d),u=F.Ra(v,"img")
for(x=u.length,w=0;w<u.length;u.length===x||(0,A.L)(u),++w)u[w].b.m(0,"style","width: 100%; height: auto;")
return v.gZI()},
aA0(d,e,f){var x=0,w=A.m(y.w),v,u,t,s,r,q
var $async$aA0=A.i(function(g,h){if(g===1)return A.j(h,w)
for(;;)switch(x){case 0:r=G.R7(d)
q=new F.Oe().a5s(0,r,F.d0Q('img[src="'+e+'"]'))
x=q!=null?3:4
break
case 3:u=C.dP.ct(C.d.p(e,"data:image/jpeg;base64,")?C.d.j8(e,"data:image/jpeg;base64,",""):C.d.j8(e,"data:image/png;base64,",""))
x=C.d.b2(e,"data:image/jpeg;base64,")?5:7
break
case 5:x=8
return A.d(A.a6p(u,1200,85),$async$aA0)
case 8:t=h
s=C.iJ.gmy().ct(t)
q.b.m(0,"src","data:image/jpeg;base64,"+s)
x=6
break
case 7:x=C.d.b2(e,"data:image/png;base64,")?9:10
break
case 9:x=A.drF(u)!=null?11:12
break
case 11:x=13
return A.d(A.aAE(u,1000),$async$aA0)
case 13:t=h
s=C.iJ.gmy().ct(t)
q.b.m(0,"src","data:image/png;base64,"+s)
case 12:case 10:case 6:f.$0()
case 4:v=r.gZI()
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$aA0,w)},
U6(a3,a4,a5){var x=0,w=A.m(y.w),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$U6=A.i(function(a6,a7){if(a6===1)return A.j(a7,w)
for(;;)switch(x){case 0:a0=G.R7(a3)
a1=G.R7(a4)
a2=F.Ra(a0,"img")
a2=new A.G(a2,new B.byK(),A.O(a2).i("G<1,h>")).xE(0,new B.byL())
A.C(a2,a2.$ti.i("B.E"))
u=F.Ra(a1,"img")
a2=u.length,t=0
case 3:if(!(t<u.length)){x=5
break}s=u[t]
r=s.b.h(0,"src")
if(r==null||r.length===0){x=4
break}q=C.d.b2(r,"data:image/jpeg;base64,")||C.d.b2(r,"data:image/png;base64,")
x=!q?6:7
break
case 6:x=8
return A.d(B.bkA(r,a5),$async$U6)
case 8:if(a7){x=4
break}case 7:x=q?9:11
break
case 9:if(A.vM(r,"data:image/jpeg;base64,",0))p=A.a0N(r,"data:image/jpeg;base64,","",0)
else p=A.a0N(r,"data:image/png;base64,","",0)
o=C.dP.ct(p)
x=10
break
case 11:x=12
return A.d(B.byJ(r),$async$U6)
case 12:n=a7
if(n==null){x=4
break}o=n
case 10:x=o.byteLength>8e5?13:15
break
case 13:m=A.d25(o)
l=m==null?null:m.o6(0,o,null)
x=l!=null?16:18
break
case 16:k=l.a
j=k==null?null:k.a
i=j==null?0:j
j=k==null
h=j?null:k.a
g=i/(h==null?0:h)
k=j?null:J.dzw(k.gav(k))
f=C.e.fN((k==null?0:k)*g*g)
x=19
return A.d(A.yT(o,i,f>8e5?C.c.aG(C.e.fN(Math.pow(8e5/f,2)*100),1,100):100),$async$U6)
case 19:e=a7
x=17
break
case 18:e=o
case 17:x=14
break
case 15:e=o
case 14:x=20
return A.d(A.F1(e,a5,null),$async$U6)
case 20:d=a7
s.b.m(0,"src",d)
case 4:u.length===a2||(0,A.L)(u),++t
x=3
break
case 5:v=a1.gZI()
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$U6,w)},
byJ(d){return B.dGz(d)},
dGz(d){var x=0,w=A.m(y.n),v,u,t,s
var $async$byJ=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:s=$.hG().b
s===$&&A.a()
s=s.as
s===$&&A.a()
u=y.w
x=3
return A.d(s.ma("fetch-http-data",A.w(["targetUrl",d],u,u)),$async$byJ)
case 3:s=f.a
if(s!=null&&y.B.b(s)){t=J.u(y.B.a(s),"data")
if(typeof t=="string"){v=C.dP.ct(t)
x=1
break}else{A.cQ("Error: Data is not a string.")
v=null
x=1
break}}else{A.cQ("Error: No data returned from supabase function.")
v=null
x=1
break}case 1:return A.k(v,w)}})
return A.l($async$byJ,w)},
byK:function byK(){},
byL:function byL(){},
bkA(d,e){var x=0,w=A.m(y.e),v,u
var $async$bkA=A.i(function(f,g){if(f===1)return A.j(g,w)
for(;;)switch(x){case 0:u=J
x=3
return A.d($.b7c().cs("images").je(0).e0("link",d).e0("occasion",e),$async$bkA)
case 3:v=u.fz(g)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bkA,w)}},D,O,P,Q,F,G,L
J=c[1]
A=c[0]
C=c[2]
H=c[168]
I=c[167]
M=c[273]
N=c[90]
K=c[243]
E=c[45]
B=a.updateHolder(c[10],B)
D=c[296]
O=c[214]
P=c[297]
Q=c[169]
F=c[158]
G=c[126]
L=c[171]
B.FD.prototype={
K(){return new B.aip(A.b([],y.x))}}
B.aip.prototype={
T(){var x,w=this
w.a5()
x=w.a.c
if(x!=null)w.e=x.h(0,"content")
x=new E.aHl()
x.ara()
w.as=x
x.Ts(new B.ctK(w))
if(w.e==null)w.P7()},
P7(){var x=0,w=A.m(y.v),v=1,u=[],t=this,s,r,q
var $async$P7=A.i(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:t.q(new B.ctH(t))
v=3
s=t.a.c
s=s==null?null:s.h(0,"load").$0()
x=6
return A.d(y.i.b(s)?s:A.bY(s,y.b),$async$P7)
case 6:s=t.e=e
x=s!=null?7:8
break
case 7:x=9
return A.d(t.uz(s),$async$P7)
case 9:case 8:v=1
x=5
break
case 3:v=2
q=u.pop()
x=5
break
case 2:x=1
break
case 5:t.q(new B.ctI(t))
return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$P7,w)},
l(){var x=this.as
x===$&&A.a()
x.l()
this.a8()},
A(d){var x,w,v,u=this,t=null,s=y.u,r=A.b([],s)
if(!u.w&&!u.x){x=u.as
x===$&&A.a()
r.push(new A.cv(C.aQ,t,t,new A.cp(new A.ae(0,720,0,1/0),E.dhc(x,""),t),t))}if(u.r)r.push(A.ak(t,C.b_,C.l,C.ap,t,t,t,t,t,t,t,t,t,t))
if(u.x){x=A.b([],s)
if(u.y==null)C.b.E(x,A.b([I.ca(D.bJZ,t)],s))
else C.b.E(x,A.b([A.ak(t,A.a8(A.b([I.ca(D.bKb,t),M.e0,N.d71(t,t,t,u.y),C.fK,A.z(""+u.z+" / "+u.Q.length,t,t,t,t,t,t,t,K.Kx,t,t,t,t,t)],s),C.i,C.f,C.G,0,t,C.k),C.l,C.m,t,t,t,t,t,t,L.aJ,t,t,t)],s))
r.push(A.ak(t,A.bk(new A.S(L.aJ,A.a8(x,C.i,C.f,C.G,0,t,C.k),t),t,t),C.l,C.ap,t,t,t,t,t,t,t,t,t,t))}if(!u.w&&!u.x){x=A.f("Reset",t,t)
x=E.a29(u.w?t:new B.ctJ(u),x)
w=A.f("Storno",t,t)
w=E.a29(u.w?t:u.gbNh(),w)
v=A.f("Save",t,t)
s=A.ak(t,A.cY(A.t9(A.ac(A.b([x,w,E.a29(u.w?t:u.gaWb(),v)],s),C.i,t,C.f,C.h,0,t),t),C.n,t,C.p,C.F,t,t,t,t,t,t,!1,C.Z),C.l,C.fu,t,t,t,t,t,t,t,t,t,17976931348623157e292)}else s=t
return A.hR(!0,Q.eO(t,C.m,new A.ci(C.af,t,C.ac,C.n,r,t),s,t,t,!0),!0,C.J,!0,!0)},
vM(){var x=0,w=A.m(y.v),v,u=this,t,s,r,q,p,o,n
var $async$vM=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:p=u.as
p===$&&A.a()
o=E
n=E
x=3
return A.d(p.MH(),$async$vM)
case 3:t=o.dhe(n.dhf(e))
p=A.bH("^(?:\\s*(?:<p\\b[^>]*>|\\s*<br\\s*/?>))*",!1,!1,!1)
s=A.dp(t,p,"")
p=A.bH("(?:<\\/?p\\b[^>]*>|\\s*<br\\s*\\/?>\\s*)*$",!1,!1,!1)
s=A.dp(s,p,"")
x=u.a.d!=null?4:5
break
case 4:u.q(new B.ctN(u))
x=6
return A.d(A.hb(C.fz,null,y.b),$async$vM)
case 6:p=u.e
if(p==null)p=""
r=u.a.d
r.toString
o=B
x=7
return A.d(B.U6(p,s,r),$async$vM)
case 7:t=o.dhd(e)
r=u.c
r.toString
H.fv(r,!1).f.d9(t)
x=1
break
case 5:u.q(new B.ctO(u))
p=y.b
x=8
return A.d(A.hb(C.fz,null,p),$async$vM)
case 8:r=B.dGy(s)
u.Q=r
x=r.length!==0?9:11
break
case 9:r=u.c
r.toString
x=15
return A.d(A.d2(null,null,!1,null,new B.ctP(),r,null,!0,!0,p),$async$vM)
case 15:x=e?12:14
break
case 12:u.q(new B.ctQ(u))
x=16
return A.d(A.hb(C.N,null,p),$async$vM)
case 16:p=u.Q,r=p.length,t=s,q=0
case 17:if(!(q<p.length)){x=19
break}x=20
return A.d(B.aA0(t,p[q],new B.ctR(u)),$async$vM)
case 20:t=e
case 18:p.length===r||(0,A.L)(p),++q
x=17
break
case 19:x=13
break
case 14:t=s
case 13:x=10
break
case 11:t=s
case 10:t=B.dhd(t)
u.q(new B.ctS(u))
p=u.c
p.toString
H.fv(p,!1).f.d9(t)
case 1:return A.k(v,w)}})
return A.l($async$vM,w)},
agf(){var x=0,w=A.m(y.v),v=this,u
var $async$agf=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
H.fv(u,!1).f.d9(null)
return A.k(null,w)}})
return A.l($async$agf,w)},
uz(d){return this.aXP(d)},
aXP(d){var x=0,w=A.m(y.v),v=this,u
var $async$uz=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:u=v.as
u===$&&A.a()
x=2
return A.d(u.MZ(d),$async$uz)
case 2:return A.k(null,w)}})
return A.l($async$uz,w)}}
var z=a.updateTypes(["W<~>()","~()","h(f4)"])
B.ctK.prototype={
$1(d){var x=0,w=A.m(y.F),v,u=this,t,s
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.r)s.f=!0
if(s.f){x=1
break}t=s.e
x=3
return A.d(s.uz(t==null?"":t),$async$$1)
case 3:s.f=!0
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:86}
B.ctH.prototype={
$0(){this.a.r=!0},
$S:0}
B.ctI.prototype={
$0(){this.a.r=!1},
$S:0}
B.ctJ.prototype={
$0(){var x=0,w=A.m(y.v),v=this,u,t
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:u=v.a
t=u.e
x=2
return A.d(u.uz(t==null?"":t),$async$$0)
case 2:return A.k(null,w)}})
return A.l($async$$0,w)},
$S:2}
B.ctN.prototype={
$0(){var x=this.a
x.x=x.w=!0},
$S:0}
B.ctO.prototype={
$0(){var x=this.a
x.x=x.w=!0},
$S:0}
B.ctP.prototype={
$1(d){var x=null
return A.ei(A.b([A.c3(!1,I.ca(P.KC,x),x,x,!0,x,x,x,x,new B.ctM(d),x,x)],y.u),x,x,D.bKB,x,x,x,x,D.bK_,x,x)},
$S:25}
B.ctM.prototype={
$0(){return A.b6(this.a,!1).d9(!0)},
$S:0}
B.ctQ.prototype={
$0(){this.a.y=0},
$S:0}
B.ctR.prototype={
$0(){var x=this.a
x.q(new B.ctL(x))},
$S:0}
B.ctL.prototype={
$0(){var x=this.a
x.y=++x.z/x.Q.length},
$S:0}
B.ctS.prototype={
$0(){this.a.w=!1},
$S:0}
B.byK.prototype={
$1(d){var x=d.b.h(0,"src")
return x==null?"":x},
$S:z+2}
B.byL.prototype={
$1(d){var x
if(d.length!==0)x=!(C.d.b2(d,"data:image/jpeg;base64,")||C.d.b2(d,"data:image/png;base64,"))
else x=!1
return x},
$S:12};(function installTearOffs(){var x=a._instance_0u
var w
x(w=B.aip.prototype,"gaWb","vM",0)
x(w,"gbNh","agf",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.FD,A.K)
x(B.aip,A.N)
w(A.co,[B.ctK,B.ctP,B.byK,B.byL])
w(A.d5,[B.ctH,B.ctI,B.ctJ,B.ctN,B.ctO,B.ctM,B.ctQ,B.ctR,B.ctL,B.ctS])})()
A.cf(b.typeUniverse,JSON.parse('{"FD":{"K":[],"e":[]},"aip":{"N":["FD"]}}'))
var y=(function rtii(){var x=A.J
return{i:x("W<@>"),x:x("v<h>"),u:x("v<e>"),B:x("A<@,@>"),F:x("aH"),w:x("h"),e:x("x"),b:x("@"),n:x("ef?"),v:x("~")}})();(function constants(){D.bJZ=new A.ch("Processing content and detecting large images...",null,O.afS,null,null,null,null,null,null,null,null,null,null,null,null)
D.bK_=new A.ch("Large Images Detected",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bKb=new A.ch("Reducing Images Size...",null,K.Kx,null,null,null,null,null,null,null,null,null,null,null,null)
D.bKB=new A.ch("Some images are large and may slow down the app. Press OK to convert them into optimal size.",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["zcjgLjr8hEt5XPbZG4Z7TufWync="]=a.current})($__dart_deferred_initializers__);