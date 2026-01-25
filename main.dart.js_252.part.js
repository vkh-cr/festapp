((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,B={
eOs(d,e,f,g){throw A.u(A.b2("Process.runSync"))},
bfd:function bfd(){},
and:function and(){this.c=this.b=$},
cir:function cir(){},
cis:function cis(){},
coo:function coo(d,e){this.a=d
this.b=e},
afP:function afP(d,e,f,g){var _=this
_.c=d
_.d=e
_.a=f
_.b=g},
chZ:function chZ(d){this.a=d},
ci_:function ci_(d){this.a=d},
cFO:function cFO(){},
f6a(d){var w,v=null
try{v=C.apj.c7r("xdg-user-dir",A.c([d],x.x),E.b8)}catch(w){throw w}return D.bUj(v.gc9L().pp(0,"\n")[0])},
cSL:function cSL(){},
anD(){var w=0,v=A.p(x.w),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h
var $async$anD=A.l(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:j=null
t=4
w=$.eyT()||$.eyS()?7:9
break
case 7:h=J
w=10
return A.f(B.dD_(),$async$anD)
case 10:j=h.dFm(e)
w=8
break
case 9:w=$.eyV()?11:13
break
case 11:w=14
return A.f(B.dD3(),$async$anD)
case 14:o=e
j=o==null?null:J.dFm(o)
w=12
break
case 13:w=$.dN5()?15:17
break
case 15:o=$.dEJ()
n=new B.ci_(new B.cFO())
$.akS().m(0,n,o)
r=n
w=18
return A.f(r.aWy(),$async$anD)
case 18:j=e
w=16
break
case 17:w=$.eyU()?19:20
break
case 19:o=D.eWL()
m=$.dEJ()
l=new B.chZ(o)
$.akS().m(0,l,m)
q=l
m=B.f6a("DOWNLOAD")
o=m==null?null:m.a
w=21
return A.f(A.e7(o,x.w),$async$anD)
case 21:j=e
case 20:case 16:case 12:case 8:t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.ag(i)
if(x.g.b(o)){p=o
J.an(p)
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
return A.o($async$anD,v)},
eKh(d){if(E.e.p(d,"."))return d
else{if(d.length!==0)return"."+d
return""}},
dHb(d,e,f,g,h){var w=0,v=A.p(x.o),u
var $async$dHb=A.l(function(i,j){if(i===1)return A.m(j,v)
for(;;)switch(w){case 0:u=A.ct("Either filePath or link or file must be provided")
throw A.u(u)
return A.n(null,v)}})
return A.o($async$dHb,v)},
dD_(){var w=0,v=A.p(x.D),u,t
var $async$dD_=A.l(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:$.dN2()
w=3
return A.f(F.a9a.e2("getApplicationDocumentsDirectory",null,!1,x.v),$async$dD_)
case 3:t=e
if(t==null)throw A.u(D.eMw("Unable to get application documents directory"))
u=D.bUj(t)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$dD_,v)},
dD3(){var w=0,v=A.p(x.i),u,t
var $async$dD3=A.l(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:$.dN2()
if(!F.aoe.gc_n())A.af(A.b2("Functionality only available on macOS"))
w=3
return A.f(F.a9a.e2("getDownloadsDirectory",null,!1,x.v),$async$dD3)
case 3:t=e
if(t==null){u=null
w=1
break}u=D.bUj(t)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$dD3,v)}},C,D,F
J=c[1]
A=c[0]
E=c[2]
B=a.updateHolder(c[90],B)
C=c[307]
D=c[159]
F=c[213]
B.bfd.prototype={
gdq(d){return"system"},
l7(d){return this.gmB().cq(d)},
gmB(){$.akT()
return E.cq}}
B.and.prototype={
zR(d,e,f,g){var w=null,v=null,u=null,t=!0
return this.aXB(d,e,f,g)},
ap0(d,e,f){return this.zR(d,"",e,f)},
aXB(d,e,a0,a1){var w=0,v=A.p(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$zR=A.l(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:j=null
i=null
h=null
g=!0
d=d
if(a0===C.bsH&&j==null)throw A.u(A.ct("customMimeType is required when mimeType is MimeType.custom"))
q=g?B.eKh(e):""
p=i!=null||h!=null
w=!p?3:4
break
case 3:o=d
w=o==null?5:7
break
case 5:w=8
return A.f(B.dHb(null,i,h,null,null),$async$zR)
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
n=D.dGS(n)}w=16
return A.f(r.Nj(n,q,a0,a1),$async$zR)
case 16:n=a3
m=r.b=n==null?y.a:n
w=14
break
case 15:n=d
n.toString
l=a0.d
if(l.length===0){l=j
l.toString}l=new B.coo(new A.b22(a1,n,q,l,g),new B.cis())
r.c=l
w=17
return A.f(l.iW(0),$async$zR)
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
return A.o($async$zR,v)},
Nj(d,e,f,g){return this.aXD(d,e,f,g)},
aXD(d,e,f,g){var w=0,v=A.p(x.w),u,t=2,s=[],r,q,p,o,n
var $async$Nj=A.l(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.f(B.anD(),$async$Nj)
case 7:r=i
n=J
w=8
return A.f(d.ahJ(A.t(r)+"/"+g+e),$async$Nj)
case 8:q=n.dFm(i)
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
return A.o($async$Nj,v)}}
B.cir.prototype={}
B.cis.prototype={
VY(d){return this.aXC(d)},
aXC(d){var w=0,v=A.p(x.w),u
var $async$VY=A.l(function(e,f){if(e===1)return A.m(f,v)
for(;;)switch(w){case 0:w=3
return A.f(A.bYV(d),$async$VY)
case 3:if(f){u="Downloads"
w=1
break}u=null
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$VY,v)}}
B.coo.prototype={
iW(d){var w=0,v=A.p(x.w),u,t=this
var $async$iW=A.l(function(e,f){if(e===1)return A.m(f,v)
for(;;)switch(w){case 0:w=3
return A.f(t.b.VY(t.a),$async$iW)
case 3:u=f
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$iW,v)}}
B.afP.prototype={
K(){return"MimeType."+this.b}}
B.chZ.prototype={}
B.ci_.prototype={}
B.cFO.prototype={}
B.cSL.prototype={
c7r(d,e,f){return B.eOs(d,e,C.aoK,f)}}
var z=a.updateTypes([]);(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.bfd,A.VQ)
v(A.M,[B.and,B.cir,B.coo,B.cFO,B.cSL])
w(B.cis,B.cir)
w(B.afP,A.Mm)
v(D.bal,[B.chZ,B.ci_])})()
A.cg(b.typeUniverse,JSON.parse('{"bfd":{"VQ":[],"VH":["q","G<r>"]}}'))
var y={a:"Something went wrong, please report the issue https://www.github.com/incrediblezayed/file_saver/issues"}
var x={D:A.L("ae_"),g:A.L("bv"),x:A.L("A<q>"),v:A.L("q"),o:A.L("e2"),i:A.L("ae_?"),w:A.L("q?")};(function constants(){C.aoK=new B.bfd()
C.apj=new B.cSL()
C.hm=new A.aj(10,0,10,0)
C.bWq=new B.afP("Other","application/octet-stream",28,"other")
C.bsH=new B.afP("Custom","",41,"custom")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hb8","eyU",()=>{$.akT()
return!1})
w($,"hb9","eyV",()=>{$.akT()
return!1})})()};
(a=>{a["MAHcHfsbOhxUQ2amnP5ZCVu99PI="]=a.current})($__dart_deferred_initializers__);