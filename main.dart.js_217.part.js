((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,B={
dIW(d,e,f,g){throw A.p(A.aU("Process.runSync"))},
aKS:function aKS(){},
axN:function axN(){this.c=this.b=$},
bMF:function bMF(){},
bMG:function bMG(){},
bSz:function bSz(d,e){this.a=d
this.b=e},
Va:function Va(d,e,f,g){var _=this
_.c=d
_.d=e
_.a=f
_.b=g},
bMc:function bMc(d){this.a=d},
bMd:function bMd(d){this.a=d},
c8L:function c8L(){},
e0r(d){var w,v=null
try{v=C.ao9.c4I("xdg-user-dir",A.b([d],x.x),E.aH)}catch(w){throw w}return D.bo_(v.gc71().pm(0,"\n")[0])},
cjZ:function cjZ(){},
TY(){var w=0,v=A.n(x.w),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h
var $async$TY=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:j=null
t=4
w=$.dty()||$.dtx()?7:9
break
case 7:h=J
w=10
return A.d(B.d0R(),$async$TY)
case 10:j=h.d3a(e)
w=8
break
case 9:w=$.dtA()?11:13
break
case 11:w=14
return A.d(B.d0V(),$async$TY)
case 14:o=e
j=o==null?null:J.d3a(o)
w=12
break
case 13:w=$.daH()?15:17
break
case 15:o=$.d2w()
n=new B.bMd(new B.c8L())
$.Rh().m(0,n,o)
r=n
w=18
return A.d(r.aUK(),$async$TY)
case 18:j=e
w=16
break
case 17:w=$.dtz()?19:20
break
case 19:o=D.dR8()
m=$.d2w()
l=new B.bMc(o)
$.Rh().m(0,l,m)
q=l
m=B.e0r("DOWNLOAD")
o=m==null?null:m.a
w=21
return A.d(A.eu(o,x.w),$async$TY)
case 21:j=e
case 20:case 16:case 12:case 8:t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.ah(i)
if(x.g.b(o)){p=o
J.aq(p)
throw i}else throw i
w=6
break
case 3:w=2
break
case 6:u=j
w=1
break
case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$TY,v)},
dEK(d){if(E.d.p(d,"."))return d
else{if(d.length!==0)return"."+d
return""}},
d51(d,e,f,g,h){var w=0,v=A.n(x.o),u
var $async$d51=A.i(function(i,j){if(i===1)return A.k(j,v)
for(;;)switch(w){case 0:u=A.cP("Either filePath or link or file must be provided")
throw A.p(u)
return A.l(null,v)}})
return A.m($async$d51,v)},
aIr(){var w=$.dZ().a
if(w==null)w=null
else{w=w.f
w=w==null?null:w.z}return w===!0},
d0R(){var w=0,v=A.n(x.D),u,t
var $async$d0R=A.i(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:$.daE()
w=3
return A.d(F.a87.e3("getApplicationDocumentsDirectory",null,!1,x.v),$async$d0R)
case 3:t=e
if(t==null)throw A.p(D.dH_("Unable to get application documents directory"))
u=D.bo_(t)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$d0R,v)},
d0V(){var w=0,v=A.n(x.i),u,t
var $async$d0V=A.i(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:$.daE()
if(!F.an4.gbXG())A.aa(A.aU("Functionality only available on macOS"))
w=3
return A.d(F.a87.e3("getDownloadsDirectory",null,!1,x.v),$async$d0V)
case 3:t=e
if(t==null){u=null
w=1
break}u=D.bo_(t)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$d0V,v)}},C,D,F
J=c[1]
A=c[0]
E=c[2]
B=a.updateHolder(c[88],B)
C=c[273]
D=c[154]
F=c[197]
B.aKS.prototype={
gdq(d){return"system"},
l2(d){return this.gmu().cv(d)},
gmu(){$.Ri()
return E.c0}}
B.axN.prototype={
CB(d,e,f,g){var w=null,v=null,u=null,t=!0
return this.aVN(d,e,f,g)},
aVN(d,e,a0,a1){var w=0,v=A.n(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$CB=A.i(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:j=null
i=null
h=null
g=!0
d=d
if(a0===C.bqx&&j==null)throw A.p(A.cP("customMimeType is required when mimeType is MimeType.custom"))
q=g?B.dEK(e):""
p=i!=null||h!=null
w=!p?3:4
break
case 3:o=d
w=o==null?5:7
break
case 5:w=8
return A.d(B.d51(null,i,h,null,null),$async$CB)
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
n=D.d4I(n)}w=16
return A.d(r.MO(n,q,a0,a1),$async$CB)
case 16:n=a3
m=r.b=n==null?y.a:n
w=14
break
case 15:n=d
n.toString
l=a0.d
if(l.length===0){l=j
l.toString}l=new B.bSz(new A.axM(a1,n,q,l,g),new B.bMG())
r.c=l
w=17
return A.d(l.jx(0),$async$CB)
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
case 12:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$CB,v)},
MO(d,e,f,g){return this.aVP(d,e,f,g)},
aVP(d,e,f,g){var w=0,v=A.n(x.w),u,t=2,s=[],r,q,p,o,n
var $async$MO=A.i(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.d(B.TY(),$async$MO)
case 7:r=i
n=J
w=8
return A.d(d.agF(A.o(r)+"/"+g+e),$async$MO)
case 8:q=n.d3a(i)
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
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$MO,v)}}
B.bMF.prototype={}
B.bMG.prototype={
Vc(d){return this.aVO(d)},
aVO(d){var w=0,v=A.n(x.w),u
var $async$Vc=A.i(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:w=3
return A.d(A.bsl(d),$async$Vc)
case 3:if(f){u="Downloads"
w=1
break}u=null
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$Vc,v)}}
B.bSz.prototype={
jx(d){var w=0,v=A.n(x.w),u,t=this
var $async$jx=A.i(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:w=3
return A.d(t.b.Vc(t.a),$async$jx)
case 3:u=f
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$jx,v)}}
B.Va.prototype={
I(){return"MimeType."+this.b}}
B.bMc.prototype={}
B.bMd.prototype={}
B.c8L.prototype={}
B.cjZ.prototype={
c4I(d,e,f){return B.dIW(d,e,C.anA,f)}}
var z=a.updateTypes([]);(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.aKS,A.qH)
v(A.H,[B.axN,B.bMF,B.bSz,B.c8L,B.cjZ])
w(B.bMG,B.bMF)
w(B.Va,A.fP)
v(D.aFW,[B.bMc,B.bMd])})()
A.cg(b.typeUniverse,JSON.parse('{"aKS":{"qH":[],"qy":["h","E<j>"]}}'))
var y={a:"Something went wrong, please report the issue https://www.github.com/incrediblezayed/file_saver/issues"}
var x={D:A.J("Ky"),g:A.J("bp"),x:A.J("u<h>"),v:A.J("h"),o:A.J("eh"),i:A.J("Ky?"),w:A.J("h?")};(function constants(){C.anA=new B.aKS()
C.ao9=new B.cjZ()
C.fZ=new A.af(10,0,10,0)
C.bU7=new B.Va("Other","application/octet-stream",28,"other")
C.bqx=new B.Va("Custom","",41,"custom")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"e8J","dtz",()=>{$.Ri()
return!1})
w($,"e8K","dtA",()=>{$.Ri()
return!1})})()};
(a=>{a["I7tNj4bod4h/BUjcTdPG4GKrnjY="]=a.current})($__dart_deferred_initializers__);