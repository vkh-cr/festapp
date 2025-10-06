((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,B={
dEe(d,e,f,g){throw A.p(A.aP("Process.runSync"))},
aJB:function aJB(){},
awE:function awE(){this.c=this.b=$},
bKx:function bKx(){},
bKy:function bKy(){},
bQm:function bQm(d,e){this.a=d
this.b=e},
Uo:function Uo(d,e,f,g){var _=this
_.c=d
_.d=e
_.a=f
_.b=g},
bK7:function bK7(d){this.a=d},
bK8:function bK8(d){this.a=d},
c5O:function c5O(){},
dWD(d){var w,v=null
try{v=C.ao2.c18("xdg-user-dir",A.b([d],x.x),E.aF)}catch(w){throw w}return D.blU(v.gc3s().p8(0,"\n")[0])},
ch0:function ch0(){},
Ta(){var w=0,v=A.l(x.w),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h
var $async$Ta=A.h(function(d,e){if(d===1){s.push(e)
w=t}while(true)switch(w){case 0:j=null
t=4
w=$.dp6()||$.dp5()?7:9
break
case 7:h=J
w=10
return A.d(B.cXJ(),$async$Ta)
case 10:j=h.d_0(e)
w=8
break
case 9:w=$.dp8()?11:13
break
case 11:w=14
return A.d(B.cXN(),$async$Ta)
case 14:o=e
j=o==null?null:J.d_0(o)
w=12
break
case 13:w=$.d6t()?15:17
break
case 15:o=$.cZn()
n=new B.bK8(new B.c5O())
$.Qy().m(0,n,o)
r=n
w=18
return A.d(r.aSl(),$async$Ta)
case 18:j=e
w=16
break
case 17:w=$.dp7()?19:20
break
case 19:o=D.dMq()
m=$.cZn()
l=new B.bK7(o)
$.Qy().m(0,l,m)
q=l
m=B.dWD("DOWNLOAD")
o=m==null?null:m.a
w=21
return A.d(A.ef(o,x.w),$async$Ta)
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
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$Ta,v)},
dA1(d){if(E.d.p(d,"."))return d
else{if(d.length!==0)return"."+d
return""}},
d0S(d,e,f,g,h){var w=0,v=A.l(x.o),u
var $async$d0S=A.h(function(i,j){if(i===1)return A.i(j,v)
while(true)switch(w){case 0:u=A.cN("Either filePath or link or file must be provided")
throw A.p(u)
return A.j(null,v)}})
return A.k($async$d0S,v)},
cXJ(){var w=0,v=A.l(x.D),u,t
var $async$cXJ=A.h(function(d,e){if(d===1)return A.i(e,v)
while(true)switch(w){case 0:$.d6r()
w=3
return A.d(F.a82.dZ("getApplicationDocumentsDirectory",null,!1,x.v),$async$cXJ)
case 3:t=e
if(t==null)throw A.p(D.dCh("Unable to get application documents directory"))
u=D.blU(t)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$cXJ,v)},
cXN(){var w=0,v=A.l(x.i),u,t
var $async$cXN=A.h(function(d,e){if(d===1)return A.i(e,v)
while(true)switch(w){case 0:$.d6r()
if(!F.amX.gbUf())A.aa(A.aP("Functionality only available on macOS"))
w=3
return A.d(F.a82.dZ("getDownloadsDirectory",null,!1,x.v),$async$cXN)
case 3:t=e
if(t==null){u=null
w=1
break}u=D.blU(t)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$cXN,v)}},C,D,F
J=c[1]
A=c[0]
E=c[2]
B=a.updateHolder(c[84],B)
C=c[261]
D=c[147]
F=c[188]
B.aJB.prototype={
gdk(d){return"system"},
le(d){return this.gmj().cs(d)},
gmj(){$.Qz()
return E.bV}}
B.awE.prototype={
C8(d,e,f,g){var w=null,v=null,u=null,t=!0
return this.aTj(d,e,f,g)},
aTj(d,e,a0,a1){var w=0,v=A.l(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$C8=A.h(function(a2,a3){if(a2===1){s.push(a3)
w=t}while(true)switch(w){case 0:j=null
i=null
h=null
g=!0
d=d
if(a0===C.bsY&&j==null)throw A.p(A.cN("customMimeType is required when mimeType is MimeType.custom"))
q=g?B.dA1(e):""
p=i!=null||h!=null
w=!p?3:4
break
case 3:o=d
w=o==null?5:7
break
case 5:w=8
return A.d(B.d0S(null,i,h,null,null),$async$C8)
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
n=D.d0z(n)}w=16
return A.d(r.Md(n,q,a0,a1),$async$C8)
case 16:n=a3
m=r.b=n==null?y.a:n
w=14
break
case 15:n=d
n.toString
l=a0.d
if(l.length===0){l=j
l.toString}l=new B.bQm(new A.awD(a1,n,q,l,g),new B.bKy())
r.c=l
w=17
return A.d(l.iP(0),$async$C8)
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
case 12:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$C8,v)},
Md(d,e,f,g){return this.aTl(d,e,f,g)},
aTl(d,e,f,g){var w=0,v=A.l(x.w),u,t=2,s=[],r,q,p,o,n
var $async$Md=A.h(function(h,i){if(h===1){s.push(i)
w=t}while(true)switch(w){case 0:t=4
w=7
return A.d(B.Ta(),$async$Md)
case 7:r=i
n=J
w=8
return A.d(d.afa(A.o(r)+"/"+g+e),$async$Md)
case 8:q=n.d_0(i)
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
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$Md,v)}}
B.bKx.prototype={}
B.bKy.prototype={
Ur(d){return this.aTk(d)},
aTk(d){var w=0,v=A.l(x.w),u
var $async$Ur=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:w=3
return A.d(A.bqd(d),$async$Ur)
case 3:if(f){u="Downloads"
w=1
break}u=null
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$Ur,v)}}
B.bQm.prototype={
iP(d){var w=0,v=A.l(x.w),u,t=this
var $async$iP=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:w=3
return A.d(t.b.Ur(t.a),$async$iP)
case 3:u=f
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$iP,v)}}
B.Uo.prototype={
I(){return"MimeType."+this.b}}
B.bK7.prototype={}
B.bK8.prototype={}
B.c5O.prototype={}
B.ch0.prototype={
c18(d,e,f){return B.dEe(d,e,C.anq,f)}}
var z=a.updateTypes([]);(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.aJB,A.qq)
v(A.G,[B.awE,B.bKx,B.bQm,B.c5O,B.ch0])
w(B.bKy,B.bKx)
w(B.Uo,A.fI)
v(D.aEG,[B.bK7,B.bK8])})()
A.ch(b.typeUniverse,JSON.parse('{"aJB":{"qq":[],"qj":["f","E<m>"]}}'))
var y={a:"Something went wrong, please report the issue https://www.github.com/incrediblezayed/file_saver/issues"}
var x={D:A.J("K5"),g:A.J("bm"),x:A.J("u<f>"),v:A.J("f"),o:A.J("eb"),i:A.J("K5?"),w:A.J("f?")};(function constants(){C.anq=new B.aJB()
C.ao2=new B.ch0()
C.fP=new A.ag(10,0,10,0)
C.bWn=new B.Uo("Other","application/octet-stream",28,"other")
C.bsY=new B.Uo("Custom","",41,"custom")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"e3K","dp7",()=>{$.Qz()
return!1})
w($,"e3L","dp8",()=>{$.Qz()
return!1})})()};
(a=>{a["fnKI0RUIZltrGH4V7Hl3tr7FZkM="]=a.current})($__dart_deferred_initializers__);