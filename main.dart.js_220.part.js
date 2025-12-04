((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,B={
dKz(d,e,f,g){throw A.p(A.aW("Process.runSync"))},
aL6:function aL6(){},
a5a:function a5a(){this.c=this.b=$},
bN8:function bN8(){},
bN9:function bN9(){},
bT2:function bT2(d,e){this.a=d
this.b=e},
Mv:function Mv(d,e,f,g){var _=this
_.c=d
_.d=e
_.a=f
_.b=g},
bMG:function bMG(d){this.a=d},
bMH:function bMH(d){this.a=d},
c9g:function c9g(){},
e24(d){var w,v=null
try{v=C.aol.c5c("xdg-user-dir",A.b([d],x.x),E.aI)}catch(w){throw w}return D.bon(v.gc7w().pm(0,"\n")[0])},
ckQ:function ckQ(){},
U1(){var w=0,v=A.m(x.w),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h
var $async$U1=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:j=null
t=4
w=$.dv8()||$.dv7()?7:9
break
case 7:h=J
w=10
return A.d(B.d2p(),$async$U1)
case 10:j=h.d4J(e)
w=8
break
case 9:w=$.dva()?11:13
break
case 11:w=14
return A.d(B.d2t(),$async$U1)
case 14:o=e
j=o==null?null:J.d4J(o)
w=12
break
case 13:w=$.dci()?15:17
break
case 15:o=$.d44()
n=new B.bMH(new B.c9g())
$.Rm().m(0,n,o)
r=n
w=18
return A.d(r.aV3(),$async$U1)
case 18:j=e
w=16
break
case 17:w=$.dv9()?19:20
break
case 19:o=D.dSM()
m=$.d44()
l=new B.bMG(o)
$.Rm().m(0,l,m)
q=l
m=B.e24("DOWNLOAD")
o=m==null?null:m.a
w=21
return A.d(A.ev(o,x.w),$async$U1)
case 21:j=e
case 20:case 16:case 12:case 8:t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.ag(i)
if(x.g.b(o)){p=o
J.am(p)
throw i}else throw i
w=6
break
case 3:w=2
break
case 6:u=j
w=1
break
case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$U1,v)},
dGn(d){if(E.d.p(d,"."))return d
else{if(d.length!==0)return"."+d
return""}},
d6z(d,e,f,g,h){var w=0,v=A.m(x.o),u
var $async$d6z=A.i(function(i,j){if(i===1)return A.j(j,v)
for(;;)switch(w){case 0:u=A.cN("Either filePath or link or file must be provided")
throw A.p(u)
return A.k(null,v)}})
return A.l($async$d6z,v)},
aIH(){var w=$.dX().a
if(w==null)w=null
else{w=w.f
w=w==null?null:w.z}return w===!0},
d2p(){var w=0,v=A.m(x.D),u,t
var $async$d2p=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:$.dcf()
w=3
return A.d(F.a8h.e3("getApplicationDocumentsDirectory",null,!1,x.v),$async$d2p)
case 3:t=e
if(t==null)throw A.p(D.dID("Unable to get application documents directory"))
u=D.bon(t)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$d2p,v)},
d2t(){var w=0,v=A.m(x.i),u,t
var $async$d2t=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:$.dcf()
if(!F.ang.gbY8())A.aa(A.aW("Functionality only available on macOS"))
w=3
return A.d(F.a8h.e3("getDownloadsDirectory",null,!1,x.v),$async$d2t)
case 3:t=e
if(t==null){u=null
w=1
break}u=D.bon(t)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$d2t,v)}},C,D,F
J=c[1]
A=c[0]
E=c[2]
B=a.updateHolder(c[88],B)
C=c[274]
D=c[154]
F=c[197]
B.aL6.prototype={
gdr(d){return"system"},
l2(d){return this.gmy().ct(d)},
gmy(){$.Rn()
return E.c0}}
B.a5a.prototype={
zE(d,e,f,g){var w=null,v=null,u=null,t=!0
return this.aW7(d,e,f,g)},
aW6(d,e,f){return this.zE(d,"",e,f)},
aW7(d,e,a0,a1){var w=0,v=A.m(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$zE=A.i(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:j=null
i=null
h=null
g=!0
d=d
if(a0===C.bqQ&&j==null)throw A.p(A.cN("customMimeType is required when mimeType is MimeType.custom"))
q=g?B.dGn(e):""
p=i!=null||h!=null
w=!p?3:4
break
case 3:o=d
w=o==null?5:7
break
case 5:w=8
return A.d(B.d6z(null,i,h,null,null),$async$zE)
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
n=D.d6g(n)}w=16
return A.d(r.MO(n,q,a0,a1),$async$zE)
case 16:n=a3
m=r.b=n==null?y.a:n
w=14
break
case 15:n=d
n.toString
l=a0.d
if(l.length===0){l=j
l.toString}l=new B.bT2(new A.ay1(a1,n,q,l,g),new B.bN9())
r.c=l
w=17
return A.d(l.iZ(0),$async$zE)
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
case 12:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$zE,v)},
MO(d,e,f,g){return this.aW9(d,e,f,g)},
aW9(d,e,f,g){var w=0,v=A.m(x.w),u,t=2,s=[],r,q,p,o,n
var $async$MO=A.i(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.d(B.U1(),$async$MO)
case 7:r=i
n=J
w=8
return A.d(d.agQ(A.o(r)+"/"+g+e),$async$MO)
case 8:q=n.d4J(i)
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
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$MO,v)}}
B.bN8.prototype={}
B.bN9.prototype={
Vi(d){return this.aW8(d)},
aW8(d){var w=0,v=A.m(x.w),u
var $async$Vi=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.d(A.bsM(d),$async$Vi)
case 3:if(f){u="Downloads"
w=1
break}u=null
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$Vi,v)}}
B.bT2.prototype={
iZ(d){var w=0,v=A.m(x.w),u,t=this
var $async$iZ=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.d(t.b.Vi(t.a),$async$iZ)
case 3:u=f
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$iZ,v)}}
B.Mv.prototype={
I(){return"MimeType."+this.b}}
B.bMG.prototype={}
B.bMH.prototype={}
B.c9g.prototype={}
B.ckQ.prototype={
c5c(d,e,f){return B.dKz(d,e,C.anM,f)}}
var z=a.updateTypes([]);(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.aL6,A.qK)
v(A.I,[B.a5a,B.bN8,B.bT2,B.c9g,B.ckQ])
w(B.bN9,B.bN8)
w(B.Mv,A.fP)
v(D.aGb,[B.bMG,B.bMH])})()
A.cf(b.typeUniverse,JSON.parse('{"aL6":{"qK":[],"qC":["h","D<n>"]}}'))
var y={a:"Something went wrong, please report the issue https://www.github.com/incrediblezayed/file_saver/issues"}
var x={D:A.J("KD"),g:A.J("bq"),x:A.J("v<h>"),v:A.J("h"),o:A.J("ef"),i:A.J("KD?"),w:A.J("h?")};(function constants(){C.anM=new B.aL6()
C.aol=new B.ckQ()
C.fZ=new A.af(10,0,10,0)
C.bUw=new B.Mv("Other","application/octet-stream",28,"other")
C.bqQ=new B.Mv("Custom","",41,"custom")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ean","dv9",()=>{$.Rn()
return!1})
w($,"eao","dva",()=>{$.Rn()
return!1})})()};
(a=>{a["9U1GSYhGBFDg/pYnl40mb8ZM9BA="]=a.current})($__dart_deferred_initializers__);