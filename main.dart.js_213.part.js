((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,B={
dIG(d,e,f,g){throw A.p(A.aT("Process.runSync"))},
aKN:function aKN(){},
axF:function axF(){this.c=this.b=$},
bMw:function bMw(){},
bMx:function bMx(){},
bSq:function bSq(d,e){this.a=d
this.b=e},
V7:function V7(d,e,f,g){var _=this
_.c=d
_.d=e
_.a=f
_.b=g},
bM4:function bM4(d){this.a=d},
bM5:function bM5(d){this.a=d},
c8C:function c8C(){},
e0b(d){var w,v=null
try{v=C.ao3.c4A("xdg-user-dir",A.b([d],x.x),E.aK)}catch(w){throw w}return D.bnS(v.gc6U().pm(0,"\n")[0])},
cjP:function cjP(){},
TV(){var w=0,v=A.n(x.w),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h
var $async$TV=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:j=null
t=4
w=$.dti()||$.dth()?7:9
break
case 7:h=J
w=10
return A.d(B.d0B(),$async$TV)
case 10:j=h.d2V(e)
w=8
break
case 9:w=$.dtk()?11:13
break
case 11:w=14
return A.d(B.d0F(),$async$TV)
case 14:o=e
j=o==null?null:J.d2V(o)
w=12
break
case 13:w=$.dar()?15:17
break
case 15:o=$.d2g()
n=new B.bM5(new B.c8C())
$.Rf().m(0,n,o)
r=n
w=18
return A.d(r.aUG(),$async$TV)
case 18:j=e
w=16
break
case 17:w=$.dtj()?19:20
break
case 19:o=D.dQT()
m=$.d2g()
l=new B.bM4(o)
$.Rf().m(0,l,m)
q=l
m=B.e0b("DOWNLOAD")
o=m==null?null:m.a
w=21
return A.d(A.eu(o,x.w),$async$TV)
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
return A.m($async$TV,v)},
dEu(d){if(E.d.p(d,"."))return d
else{if(d.length!==0)return"."+d
return""}},
d4M(d,e,f,g,h){var w=0,v=A.n(x.o),u
var $async$d4M=A.i(function(i,j){if(i===1)return A.k(j,v)
for(;;)switch(w){case 0:u=A.cT("Either filePath or link or file must be provided")
throw A.p(u)
return A.l(null,v)}})
return A.m($async$d4M,v)},
aIk(){var w=$.dY().a
if(w==null)w=null
else{w=w.f
w=w==null?null:w.z}return w===!0},
d0B(){var w=0,v=A.n(x.D),u,t
var $async$d0B=A.i(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:$.dao()
w=3
return A.d(F.a80.e3("getApplicationDocumentsDirectory",null,!1,x.v),$async$d0B)
case 3:t=e
if(t==null)throw A.p(D.dGK("Unable to get application documents directory"))
u=D.bnS(t)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$d0B,v)},
d0F(){var w=0,v=A.n(x.i),u,t
var $async$d0F=A.i(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:$.dao()
if(!F.amZ.gbXy())A.aa(A.aT("Functionality only available on macOS"))
w=3
return A.d(F.a80.e3("getDownloadsDirectory",null,!1,x.v),$async$d0F)
case 3:t=e
if(t==null){u=null
w=1
break}u=D.bnS(t)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$d0F,v)}},C,D,F
J=c[1]
A=c[0]
E=c[2]
B=a.updateHolder(c[88],B)
C=c[273]
D=c[154]
F=c[197]
B.aKN.prototype={
gdq(d){return"system"},
l2(d){return this.gmu().cu(d)},
gmu(){$.Rg()
return E.c0}}
B.axF.prototype={
CB(d,e,f,g){var w=null,v=null,u=null,t=!0
return this.aVK(d,e,f,g)},
aVK(d,e,a0,a1){var w=0,v=A.n(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$CB=A.i(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:j=null
i=null
h=null
g=!0
d=d
if(a0===C.bqp&&j==null)throw A.p(A.cT("customMimeType is required when mimeType is MimeType.custom"))
q=g?B.dEu(e):""
p=i!=null||h!=null
w=!p?3:4
break
case 3:o=d
w=o==null?5:7
break
case 5:w=8
return A.d(B.d4M(null,i,h,null,null),$async$CB)
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
n=D.d4s(n)}w=16
return A.d(r.MN(n,q,a0,a1),$async$CB)
case 16:n=a3
m=r.b=n==null?y.a:n
w=14
break
case 15:n=d
n.toString
l=a0.d
if(l.length===0){l=j
l.toString}l=new B.bSq(new A.axE(a1,n,q,l,g),new B.bMx())
r.c=l
w=17
return A.d(l.jw(0),$async$CB)
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
MN(d,e,f,g){return this.aVM(d,e,f,g)},
aVM(d,e,f,g){var w=0,v=A.n(x.w),u,t=2,s=[],r,q,p,o,n
var $async$MN=A.i(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.d(B.TV(),$async$MN)
case 7:r=i
n=J
w=8
return A.d(d.agD(A.o(r)+"/"+g+e),$async$MN)
case 8:q=n.d2V(i)
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
return A.m($async$MN,v)}}
B.bMw.prototype={}
B.bMx.prototype={
Vb(d){return this.aVL(d)},
aVL(d){var w=0,v=A.n(x.w),u
var $async$Vb=A.i(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:w=3
return A.d(A.bsd(d),$async$Vb)
case 3:if(f){u="Downloads"
w=1
break}u=null
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$Vb,v)}}
B.bSq.prototype={
jw(d){var w=0,v=A.n(x.w),u,t=this
var $async$jw=A.i(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:w=3
return A.d(t.b.Vb(t.a),$async$jw)
case 3:u=f
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$jw,v)}}
B.V7.prototype={
I(){return"MimeType."+this.b}}
B.bM4.prototype={}
B.bM5.prototype={}
B.c8C.prototype={}
B.cjP.prototype={
c4A(d,e,f){return B.dIG(d,e,C.anu,f)}}
var z=a.updateTypes([]);(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.aKN,A.qG)
v(A.H,[B.axF,B.bMw,B.bSq,B.c8C,B.cjP])
w(B.bMx,B.bMw)
w(B.V7,A.fP)
v(D.aFP,[B.bM4,B.bM5])})()
A.cf(b.typeUniverse,JSON.parse('{"aKN":{"qG":[],"qx":["h","E<j>"]}}'))
var y={a:"Something went wrong, please report the issue https://www.github.com/incrediblezayed/file_saver/issues"}
var x={D:A.J("Ky"),g:A.J("bp"),x:A.J("u<h>"),v:A.J("h"),o:A.J("eg"),i:A.J("Ky?"),w:A.J("h?")};(function constants(){C.anu=new B.aKN()
C.ao3=new B.cjP()
C.fY=new A.af(10,0,10,0)
C.bU0=new B.V7("Other","application/octet-stream",28,"other")
C.bqp=new B.V7("Custom","",41,"custom")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"e8s","dtj",()=>{$.Rg()
return!1})
w($,"e8t","dtk",()=>{$.Rg()
return!1})})()};
(a=>{a["plDrAoXivkRKFdOUc57MHitZ4vY="]=a.current})($__dart_deferred_initializers__);