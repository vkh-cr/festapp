((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,B={
dFa(d,e,f,g){throw A.p(A.aQ("Process.runSync"))},
aJH:function aJH(){},
awH:function awH(){this.c=this.b=$},
bKQ:function bKQ(){},
bKR:function bKR(){},
bQF:function bQF(d,e){this.a=d
this.b=e},
Ux:function Ux(d,e,f,g){var _=this
_.c=d
_.d=e
_.a=f
_.b=g},
bKq:function bKq(d){this.a=d},
bKr:function bKr(d){this.a=d},
c6m:function c6m(){},
dXz(d){var w,v=null
try{v=C.aoa.c1S("xdg-user-dir",A.b([d],x.x),E.aG)}catch(w){throw w}return D.bma(v.gc4b().p8(0,"\n")[0])},
chC:function chC(){},
Tj(){var w=0,v=A.m(x.w),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h
var $async$Tj=A.i(function(d,e){if(d===1){s.push(e)
w=t}while(true)switch(w){case 0:j=null
t=4
w=$.dq1()||$.dq0()?7:9
break
case 7:h=J
w=10
return A.d(B.cYx(),$async$Tj)
case 10:j=h.d_Q(e)
w=8
break
case 9:w=$.dq3()?11:13
break
case 11:w=14
return A.d(B.cYB(),$async$Tj)
case 14:o=e
j=o==null?null:J.d_Q(o)
w=12
break
case 13:w=$.d7l()?15:17
break
case 15:o=$.d_c()
n=new B.bKr(new B.c6m())
$.QH().m(0,n,o)
r=n
w=18
return A.d(r.aSN(),$async$Tj)
case 18:j=e
w=16
break
case 17:w=$.dq2()?19:20
break
case 19:o=D.dNo()
m=$.d_c()
l=new B.bKq(o)
$.QH().m(0,l,m)
q=l
m=B.dXz("DOWNLOAD")
o=m==null?null:m.a
w=21
return A.d(A.eg(o,x.w),$async$Tj)
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
case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Tj,v)},
dAY(d){if(E.d.p(d,"."))return d
else{if(d.length!==0)return"."+d
return""}},
d1J(d,e,f,g,h){var w=0,v=A.m(x.o),u
var $async$d1J=A.i(function(i,j){if(i===1)return A.j(j,v)
while(true)switch(w){case 0:u=A.cN("Either filePath or link or file must be provided")
throw A.p(u)
return A.k(null,v)}})
return A.l($async$d1J,v)},
cYx(){var w=0,v=A.m(x.D),u,t
var $async$cYx=A.i(function(d,e){if(d===1)return A.j(e,v)
while(true)switch(w){case 0:$.d7j()
w=3
return A.d(F.a89.dZ("getApplicationDocumentsDirectory",null,!1,x.v),$async$cYx)
case 3:t=e
if(t==null)throw A.p(D.dDd("Unable to get application documents directory"))
u=D.bma(t)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$cYx,v)},
cYB(){var w=0,v=A.m(x.i),u,t
var $async$cYB=A.i(function(d,e){if(d===1)return A.j(e,v)
while(true)switch(w){case 0:$.d7j()
if(!F.an3.gbUZ())A.aa(A.aQ("Functionality only available on macOS"))
w=3
return A.d(F.a89.dZ("getDownloadsDirectory",null,!1,x.v),$async$cYB)
case 3:t=e
if(t==null){u=null
w=1
break}u=D.bma(t)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$cYB,v)}},C,D,F
J=c[1]
A=c[0]
E=c[2]
B=a.updateHolder(c[86],B)
C=c[265]
D=c[150]
F=c[192]
B.aJH.prototype={
gdk(d){return"system"},
kX(d){return this.gmk().cs(d)},
gmk(){$.QI()
return E.bX}}
B.awH.prototype={
C8(d,e,f,g){var w=null,v=null,u=null,t=!0
return this.aTQ(d,e,f,g)},
aTQ(d,e,a0,a1){var w=0,v=A.m(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$C8=A.i(function(a2,a3){if(a2===1){s.push(a3)
w=t}while(true)switch(w){case 0:j=null
i=null
h=null
g=!0
d=d
if(a0===C.bt8&&j==null)throw A.p(A.cN("customMimeType is required when mimeType is MimeType.custom"))
q=g?B.dAY(e):""
p=i!=null||h!=null
w=!p?3:4
break
case 3:o=d
w=o==null?5:7
break
case 5:w=8
return A.d(B.d1J(null,i,h,null,null),$async$C8)
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
n=D.d1p(n)}w=16
return A.d(r.Mg(n,q,a0,a1),$async$C8)
case 16:n=a3
m=r.b=n==null?y.a:n
w=14
break
case 15:n=d
n.toString
l=a0.d
if(l.length===0){l=j
l.toString}l=new B.bQF(new A.awG(a1,n,q,l,g),new B.bKR())
r.c=l
w=17
return A.d(l.jM(0),$async$C8)
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
return A.l($async$C8,v)},
Mg(d,e,f,g){return this.aTS(d,e,f,g)},
aTS(d,e,f,g){var w=0,v=A.m(x.w),u,t=2,s=[],r,q,p,o,n
var $async$Mg=A.i(function(h,i){if(h===1){s.push(i)
w=t}while(true)switch(w){case 0:t=4
w=7
return A.d(B.Tj(),$async$Mg)
case 7:r=i
n=J
w=8
return A.d(d.afw(A.o(r)+"/"+g+e),$async$Mg)
case 8:q=n.d_Q(i)
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
return A.l($async$Mg,v)}}
B.bKQ.prototype={}
B.bKR.prototype={
UC(d){return this.aTR(d)},
aTR(d){var w=0,v=A.m(x.w),u
var $async$UC=A.i(function(e,f){if(e===1)return A.j(f,v)
while(true)switch(w){case 0:w=3
return A.d(A.bqu(d),$async$UC)
case 3:if(f){u="Downloads"
w=1
break}u=null
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$UC,v)}}
B.bQF.prototype={
jM(d){var w=0,v=A.m(x.w),u,t=this
var $async$jM=A.i(function(e,f){if(e===1)return A.j(f,v)
while(true)switch(w){case 0:w=3
return A.d(t.b.UC(t.a),$async$jM)
case 3:u=f
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$jM,v)}}
B.Ux.prototype={
I(){return"MimeType."+this.b}}
B.bKq.prototype={}
B.bKr.prototype={}
B.c6m.prototype={}
B.chC.prototype={
c1S(d,e,f){return B.dFa(d,e,C.any,f)}}
var z=a.updateTypes([]);(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.aJH,A.qv)
v(A.G,[B.awH,B.bKQ,B.bQF,B.c6m,B.chC])
w(B.bKR,B.bKQ)
w(B.Ux,A.fJ)
v(D.aEN,[B.bKq,B.bKr])})()
A.ce(b.typeUniverse,JSON.parse('{"aJH":{"qv":[],"qm":["f","E<n>"]}}'))
var y={a:"Something went wrong, please report the issue https://www.github.com/incrediblezayed/file_saver/issues"}
var x={D:A.J("Ka"),g:A.J("bm"),x:A.J("u<f>"),v:A.J("f"),o:A.J("ed"),i:A.J("Ka?"),w:A.J("f?")};(function constants(){C.any=new B.aJH()
C.aoa=new B.chC()
C.fR=new A.ag(10,0,10,0)
C.bWz=new B.Ux("Other","application/octet-stream",28,"other")
C.bt8=new B.Ux("Custom","",41,"custom")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"e4G","dq2",()=>{$.QI()
return!1})
w($,"e4H","dq3",()=>{$.QI()
return!1})})()};
(a=>{a["SAee0DDX23ENhbY2pwuZpGS/0ts="]=a.current})($__dart_deferred_initializers__);