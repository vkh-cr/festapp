((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,B={
dBe(d,e,f,g){throw A.p(A.aN("Process.runSync"))},
aIP:function aIP(){},
avP:function avP(){this.c=this.b=$},
bJt:function bJt(){},
bJu:function bJu(){},
bPj:function bPj(d,e){this.a=d
this.b=e},
TZ:function TZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.a=f
_.b=g},
bJ3:function bJ3(d){this.a=d},
bJ4:function bJ4(d){this.a=d},
c4P:function c4P(){},
dT5(d){var w,v=null
try{v=C.anY.c_Z("xdg-user-dir",A.b([d],x.x),E.aE)}catch(w){throw w}return D.bkW(v.gc2h().oT(0,"\n")[0])},
cfR:function cfR(){},
SM(){var w=0,v=A.l(x.w),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h
var $async$SM=A.h(function(d,e){if(d===1){s.push(e)
w=t}while(true)switch(w){case 0:j=null
t=4
w=$.dm6()||$.dm5()?7:9
break
case 7:h=J
w=10
return A.d(B.cVb(),$async$SM)
case 10:j=h.cXr(e)
w=8
break
case 9:w=$.dm8()?11:13
break
case 11:w=14
return A.d(B.cVf(),$async$SM)
case 14:o=e
j=o==null?null:J.cXr(o)
w=12
break
case 13:w=$.d3R()?15:17
break
case 15:o=$.cWP()
n=new B.bJ4(new B.c4P())
$.Q8().m(0,n,o)
r=n
w=18
return A.d(r.aRz(),$async$SM)
case 18:j=e
w=16
break
case 17:w=$.dm7()?19:20
break
case 19:o=D.dJq()
m=$.cWP()
l=new B.bJ3(o)
$.Q8().m(0,l,m)
q=l
m=B.dT5("DOWNLOAD")
o=m==null?null:m.a
w=21
return A.d(A.eb(o,x.w),$async$SM)
case 21:j=e
case 20:case 16:case 12:case 8:t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.ag(i)
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
return A.k($async$SM,v)},
dx5(d){if(E.d.p(d,"."))return d
else{if(d.length!==0)return"."+d
return""}},
cZf(d,e,f,g,h){var w=0,v=A.l(x.o),u
var $async$cZf=A.h(function(i,j){if(i===1)return A.i(j,v)
while(true)switch(w){case 0:u=A.cK("Either filePath or link or file must be provided")
throw A.p(u)
return A.j(null,v)}})
return A.k($async$cZf,v)},
cVb(){var w=0,v=A.l(x.D),u,t
var $async$cVb=A.h(function(d,e){if(d===1)return A.i(e,v)
while(true)switch(w){case 0:$.d3O()
w=3
return A.d(F.a7T.dT("getApplicationDocumentsDirectory",null,!1,x.v),$async$cVb)
case 3:t=e
if(t==null)throw A.p(D.dzh("Unable to get application documents directory"))
u=D.bkW(t)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$cVb,v)},
cVf(){var w=0,v=A.l(x.i),u,t
var $async$cVf=A.h(function(d,e){if(d===1)return A.i(e,v)
while(true)switch(w){case 0:$.d3O()
if(!F.amS.gbT3())A.a8(A.aN("Functionality only available on macOS"))
w=3
return A.d(F.a7T.dT("getDownloadsDirectory",null,!1,x.v),$async$cVf)
case 3:t=e
if(t==null){u=null
w=1
break}u=D.bkW(t)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$cVf,v)}},C,D,F
J=c[1]
A=c[0]
E=c[2]
B=a.updateHolder(c[86],B)
C=c[261]
D=c[148]
F=c[189]
B.aIP.prototype={
gdd(d){return"system"},
l4(d){return this.gm9().cs(d)},
gm9(){$.Q9()
return E.bT}}
B.avP.prototype={
C3(d,e,f,g){var w=null,v=null,u=null,t=!0
return this.aSx(d,e,f,g)},
aSx(d,e,a0,a1){var w=0,v=A.l(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$C3=A.h(function(a2,a3){if(a2===1){s.push(a3)
w=t}while(true)switch(w){case 0:j=null
i=null
h=null
g=!0
d=d
if(a0===C.bsI&&j==null)throw A.p(A.cK("customMimeType is required when mimeType is MimeType.custom"))
q=g?B.dx5(e):""
p=i!=null||h!=null
w=!p?3:4
break
case 3:o=d
w=o==null?5:7
break
case 5:w=8
return A.d(B.cZf(null,i,h,null,null),$async$C3)
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
n=D.cYV(n)}w=16
return A.d(r.M2(n,q,a0,a1),$async$C3)
case 16:n=a3
m=r.b=n==null?y.a:n
w=14
break
case 15:n=d
n.toString
l=a0.d
if(l.length===0){l=j
l.toString}l=new B.bPj(new A.avO(a1,n,q,l,g),new B.bJu())
r.c=l
w=17
return A.d(l.iF(0),$async$C3)
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
return A.k($async$C3,v)},
M2(d,e,f,g){return this.aSz(d,e,f,g)},
aSz(d,e,f,g){var w=0,v=A.l(x.w),u,t=2,s=[],r,q,p,o,n
var $async$M2=A.h(function(h,i){if(h===1){s.push(i)
w=t}while(true)switch(w){case 0:t=4
w=7
return A.d(B.SM(),$async$M2)
case 7:r=i
n=J
w=8
return A.d(d.aeM(A.o(r)+"/"+g+e),$async$M2)
case 8:q=n.cXr(i)
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
return A.k($async$M2,v)}}
B.bJt.prototype={}
B.bJu.prototype={
Ud(d){return this.aSy(d)},
aSy(d){var w=0,v=A.l(x.w),u
var $async$Ud=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:w=3
return A.d(A.bpf(d),$async$Ud)
case 3:if(f){u="Downloads"
w=1
break}u=null
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$Ud,v)}}
B.bPj.prototype={
iF(d){var w=0,v=A.l(x.w),u,t=this
var $async$iF=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:w=3
return A.d(t.b.Ud(t.a),$async$iF)
case 3:u=f
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$iF,v)}}
B.TZ.prototype={
J(){return"MimeType."+this.b}}
B.bJ3.prototype={}
B.bJ4.prototype={}
B.c4P.prototype={}
B.cfR.prototype={
c_Z(d,e,f){return B.dBe(d,e,C.anl,f)}}
var z=a.updateTypes([]);(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.aIP,A.qf)
v(A.F,[B.avP,B.bJt,B.bPj,B.c4P,B.cfR])
w(B.bJu,B.bJt)
w(B.TZ,A.fy)
v(D.aDT,[B.bJ3,B.bJ4])})()
A.cf(b.typeUniverse,JSON.parse('{"aIP":{"qf":[],"q9":["f","D<m>"]}}'))
var y={a:"Something went wrong, please report the issue https://www.github.com/incrediblezayed/file_saver/issues"}
var x={D:A.I("JC"),g:A.I("bl"),x:A.I("u<f>"),v:A.I("f"),o:A.I("dZ"),i:A.I("JC?"),w:A.I("f?")};(function constants(){C.anl=new B.aIP()
C.anY=new B.cfR()
C.dU=new A.ah(10,0,10,0)
C.bVH=new B.TZ("Other","application/octet-stream",28,"other")
C.bsI=new B.TZ("Custom","",41,"custom")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"e_T","dm7",()=>{$.Q9()
return!1})
w($,"e_U","dm8",()=>{$.Q9()
return!1})})()};
(a=>{a["od9MHS0VVQmIDX0dU7qjxJxLCCw="]=a.current})($__dart_deferred_initializers__);