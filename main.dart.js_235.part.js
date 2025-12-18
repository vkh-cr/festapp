((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,B={
eFi(d,e,f,g){throw A.u(A.b_("Process.runSync"))},
bc0:function bc0(){},
awL:function awL(){this.c=this.b=$},
ces:function ces(){},
cet:function cet(){},
ckp:function ckp(d,e){this.a=d
this.b=e},
acZ:function acZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.a=f
_.b=g},
ce_:function ce_(d){this.a=d},
ce0:function ce0(d){this.a=d},
cBB:function cBB(){},
eXT(d){var w,v=null
try{v=C.ap1.c6n("xdg-user-dir",A.c([d],x.x),E.b6)}catch(w){throw w}return D.bQz(v.gc8H().po(0,"\n")[0])},
cNv:function cNv(){},
akI(){var w=0,v=A.p(x.w),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h
var $async$akI=A.l(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:j=null
t=4
w=$.epS()||$.epR()?7:9
break
case 7:h=J
w=10
return A.f(B.dwE(),$async$akI)
case 10:j=h.dz1(e)
w=8
break
case 9:w=$.epU()?11:13
break
case 11:w=14
return A.f(B.dwI(),$async$akI)
case 14:o=e
j=o==null?null:J.dz1(o)
w=12
break
case 13:w=$.dGG()?15:17
break
case 15:o=$.dyo()
n=new B.ce0(new B.cBB())
$.ahZ().m(0,n,o)
r=n
w=18
return A.f(r.aVT(),$async$akI)
case 18:j=e
w=16
break
case 17:w=$.epT()?19:20
break
case 19:o=D.eNx()
m=$.dyo()
l=new B.ce_(o)
$.ahZ().m(0,l,m)
q=l
m=B.eXT("DOWNLOAD")
o=m==null?null:m.a
w=21
return A.f(A.e4(o,x.w),$async$akI)
case 21:j=e
case 20:case 16:case 12:case 8:t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.aj(i)
if(x.g.b(o)){p=o
J.ap(p)
throw i}else throw i
w=6
break
case 3:w=2
break
case 6:u=j
w=1
break
case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$akI,v)},
eB6(d){if(E.e.p(d,"."))return d
else{if(d.length!==0)return"."+d
return""}},
dAT(d,e,f,g,h){var w=0,v=A.p(x.o),u
var $async$dAT=A.l(function(i,j){if(i===1)return A.m(j,v)
for(;;)switch(w){case 0:u=A.cA("Either filePath or link or file must be provided")
throw A.u(u)
return A.n(null,v)}})
return A.o($async$dAT,v)},
dwE(){var w=0,v=A.p(x.D),u,t
var $async$dwE=A.l(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:$.dGD()
w=3
return A.f(F.a8X.e2("getApplicationDocumentsDirectory",null,!1,x.v),$async$dwE)
case 3:t=e
if(t==null)throw A.u(D.eDm("Unable to get application documents directory"))
u=D.bQz(t)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$dwE,v)},
dwI(){var w=0,v=A.p(x.i),u,t
var $async$dwI=A.l(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:$.dGD()
if(!F.anX.gbZg())A.ad(A.b_("Functionality only available on macOS"))
w=3
return A.f(F.a8X.e2("getDownloadsDirectory",null,!1,x.v),$async$dwI)
case 3:t=e
if(t==null){u=null
w=1
break}u=D.bQz(t)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$dwI,v)}},C,D,F
J=c[1]
A=c[0]
E=c[2]
B=a.updateHolder(c[92],B)
C=c[304]
D=c[157]
F=c[213]
B.bc0.prototype={
gdr(d){return"system"},
l7(d){return this.gmz().cq(d)},
gmz(){$.ai_()
return E.co}}
B.awL.prototype={
zL(d,e,f,g){var w=null,v=null,u=null,t=!0
return this.aWX(d,e,f,g)},
aWW(d,e,f){return this.zL(d,"",e,f)},
aWX(d,e,a0,a1){var w=0,v=A.p(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$zL=A.l(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:j=null
i=null
h=null
g=!0
d=d
if(a0===C.bsl&&j==null)throw A.u(A.cA("customMimeType is required when mimeType is MimeType.custom"))
q=g?B.eB6(e):""
p=i!=null||h!=null
w=!p?3:4
break
case 3:o=d
w=o==null?5:7
break
case 5:w=8
return A.f(B.dAT(null,i,h,null,null),$async$zL)
case 8:w=6
break
case 7:a3=o
case 6:d=a3
case 4:t=10
w=p?13:15
break
case 13:n=i
if(n==null){n=h
n.toString
n=D.dAy(n)}w=16
return A.f(r.N4(n,q,a0,a1),$async$zL)
case 16:n=a3
m=r.b=n==null?y.a:n
w=14
break
case 15:n=d
n.toString
l=a0.d
if(l.length===0){l=j
l.toString}l=new B.ckp(new A.aZQ(a1,n,q,l,g),new B.cet())
r.c=l
w=17
return A.f(l.j9(0),$async$zL)
case 17:l=a3
m=r.b=l==null?y.a:l
case 14:u=m
w=1
break
t=2
w=12
break
case 10:t=9
f=s.pop()
throw f
w=12
break
case 9:w=2
break
case 12:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$zL,v)},
N4(d,e,f,g){return this.aWZ(d,e,f,g)},
aWZ(d,e,f,g){var w=0,v=A.p(x.w),u,t=2,s=[],r,q,p,o,n
var $async$N4=A.l(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.f(B.akI(),$async$N4)
case 7:r=i
n=J
w=8
return A.f(d.ahe(A.t(r)+"/"+g+e),$async$N4)
case 8:q=n.dz1(i)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
throw o
w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$N4,v)}}
B.ces.prototype={}
B.cet.prototype={
VH(d){return this.aWY(d)},
aWY(d){var w=0,v=A.p(x.w),u
var $async$VH=A.l(function(e,f){if(e===1)return A.m(f,v)
for(;;)switch(w){case 0:w=3
return A.f(A.bUY(d),$async$VH)
case 3:if(f){u="Downloads"
w=1
break}u=null
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$VH,v)}}
B.ckp.prototype={
j9(d){var w=0,v=A.p(x.w),u,t=this
var $async$j9=A.l(function(e,f){if(e===1)return A.m(f,v)
for(;;)switch(w){case 0:w=3
return A.f(t.b.VH(t.a),$async$j9)
case 3:u=f
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$j9,v)}}
B.acZ.prototype={
J(){return"MimeType."+this.b}}
B.ce_.prototype={}
B.ce0.prototype={}
B.cBB.prototype={}
B.cNv.prototype={
c6n(d,e,f){return B.eFi(d,e,C.aos,f)}}
var z=a.updateTypes([]);(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.bc0,A.T7)
v(A.L,[B.awL,B.ces,B.ckp,B.cBB,B.cNv])
w(B.cet,B.ces)
w(B.acZ,A.h5)
v(D.b76,[B.ce_,B.ce0])})()
A.ci(b.typeUniverse,JSON.parse('{"bc0":{"T7":[],"SZ":["q","G<r>"]}}'))
var y={a:"Something went wrong, please report the issue https://www.github.com/incrediblezayed/file_saver/issues"}
var x={D:A.M("ab8"),g:A.M("bw"),x:A.M("z<q>"),v:A.M("q"),o:A.M("e1"),i:A.M("ab8?"),w:A.M("q?")};(function constants(){C.aos=new B.bc0()
C.ap1=new B.cNv()
C.hj=new A.ai(10,0,10,0)
C.bW3=new B.acZ("Other","application/octet-stream",28,"other")
C.bsl=new B.acZ("Custom","",41,"custom")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"fXx","epT",()=>{$.ai_()
return!1})
w($,"fXy","epU",()=>{$.ai_()
return!1})})()};
(a=>{a["pjbfRNPhqX4vx6IMEFc0I0P1mGc="]=a.current})($__dart_deferred_initializers__);