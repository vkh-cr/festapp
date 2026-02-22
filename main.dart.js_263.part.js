((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,B={
eRj(d,e,f,g){throw A.u(A.b2("Process.runSync"))},
bfW:function bfW(){},
anv:function anv(){this.c=this.b=$},
cjs:function cjs(){},
cjt:function cjt(){},
cpE:function cpE(d,e){this.a=d
this.b=e},
agk:function agk(d,e,f,g){var _=this
_.c=d
_.d=e
_.a=f
_.b=g},
ciZ:function ciZ(d){this.a=d},
cj_:function cj_(d){this.a=d},
cHb:function cHb(){},
f9b(d){var w,v=null
try{v=C.apz.c80("xdg-user-dir",A.c([d],x.x),E.b8)}catch(w){throw w}return D.bUS(v.gcaj().pp(0,"\n")[0])},
cUA:function cUA(){},
anV(){var w=0,v=A.q(x.w),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h
var $async$anV=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:j=null
t=4
w=$.eBE()||$.eBD()?7:9
break
case 7:h=J
w=10
return A.f(B.dF2(),$async$anV)
case 10:j=h.dHq(e)
w=8
break
case 9:w=$.eBG()?11:13
break
case 11:w=14
return A.f(B.dF6(),$async$anV)
case 14:o=e
j=o==null?null:J.dHq(o)
w=12
break
case 13:w=$.dPk()?15:17
break
case 15:o=$.dGN()
n=new B.cj_(new B.cHb())
$.alh().m(0,n,o)
r=n
w=18
return A.f(r.aWS(),$async$anV)
case 18:j=e
w=16
break
case 17:w=$.eBF()?19:20
break
case 19:o=D.eZH()
m=$.dGN()
l=new B.ciZ(o)
$.alh().m(0,l,m)
q=l
m=B.f9b("DOWNLOAD")
o=m==null?null:m.a
w=21
return A.f(A.e5(o,x.w),$async$anV)
case 21:j=e
case 20:case 16:case 12:case 8:t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.ai(i)
if(x.g.b(o)){p=o
J.al(p)
throw i}else throw i
w=6
break
case 3:w=2
break
case 6:u=j
w=1
break
case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$anV,v)},
eN4(d){if(E.e.p(d,"."))return d
else{if(d.length!==0)return"."+d
return""}},
dJi(d,e,f,g,h){var w=0,v=A.q(x.o),u
var $async$dJi=A.m(function(i,j){if(i===1)return A.n(j,v)
for(;;)switch(w){case 0:u=A.cv("Either filePath or link or file must be provided")
throw A.u(u)
return A.o(null,v)}})
return A.p($async$dJi,v)},
dF2(){var w=0,v=A.q(x.D),u,t
var $async$dF2=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:$.dPh()
w=3
return A.f(F.a9o.e2("getApplicationDocumentsDirectory",null,!1,x.v),$async$dF2)
case 3:t=e
if(t==null)throw A.u(D.ePj("Unable to get application documents directory"))
u=D.bUS(t)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$dF2,v)},
dF6(){var w=0,v=A.q(x.i),u,t
var $async$dF6=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:$.dPh()
if(!F.aou.gc_T())A.af(A.b2("Functionality only available on macOS"))
w=3
return A.f(F.a9o.e2("getDownloadsDirectory",null,!1,x.v),$async$dF6)
case 3:t=e
if(t==null){u=null
w=1
break}u=D.bUS(t)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$dF6,v)}},C,D,F
J=c[1]
A=c[0]
E=c[2]
B=a.updateHolder(c[93],B)
C=c[315]
D=c[162]
F=c[216]
B.bfW.prototype={
gdw(d){return"system"},
l7(d){return this.gmC().cq(d)},
gmC(){$.adj()
return E.cs},
gvf(){$.adj()
return E.jX}}
B.anv.prototype={
zU(d,e,f,g){var w=null,v=null,u=null,t=!0
return this.aXV(d,e,f,g)},
apg(d,e,f){return this.zU(d,"",e,f)},
aXV(d,e,a0,a1){var w=0,v=A.q(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$zU=A.m(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:j=null
i=null
h=null
g=!0
d=d
if(a0===C.bt0&&j==null)throw A.u(A.cv("customMimeType is required when mimeType is MimeType.custom"))
q=g?B.eN4(e):""
p=i!=null||h!=null
w=!p?3:4
break
case 3:o=d
w=o==null?5:7
break
case 5:w=8
return A.f(B.dJi(null,i,h,null,null),$async$zU)
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
n=D.dIZ(n)}w=16
return A.f(r.No(n,q,a0,a1),$async$zU)
case 16:n=a3
m=r.b=n==null?y.a:n
w=14
break
case 15:n=d
n.toString
l=a0.d
if(l.length===0){l=j
l.toString}l=new B.cpE(new A.b2I(a1,n,q,l,g),new B.cjt())
r.c=l
w=17
return A.f(l.iY(0),$async$zU)
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
case 12:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$zU,v)},
No(d,e,f,g){return this.aXX(d,e,f,g)},
aXX(d,e,f,g){var w=0,v=A.q(x.w),u,t=2,s=[],r,q,p,o,n
var $async$No=A.m(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.f(B.anV(),$async$No)
case 7:r=i
n=J
w=8
return A.f(d.ai_(A.t(r)+"/"+g+e),$async$No)
case 8:q=n.dHq(i)
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
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$No,v)}}
B.cjs.prototype={}
B.cjt.prototype={
Wh(d){return this.aXW(d)},
aXW(d){var w=0,v=A.q(x.w),u
var $async$Wh=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:w=3
return A.f(A.bZv(d),$async$Wh)
case 3:if(f){u="Downloads"
w=1
break}u=null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$Wh,v)}}
B.cpE.prototype={
iY(d){var w=0,v=A.q(x.w),u,t=this
var $async$iY=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:w=3
return A.f(t.b.Wh(t.a),$async$iY)
case 3:u=f
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$iY,v)}}
B.agk.prototype={
K(){return"MimeType."+this.b}}
B.ciZ.prototype={}
B.cj_.prototype={}
B.cHb.prototype={}
B.cUA.prototype={
c80(d,e,f){return B.eRj(d,e,C.ap_,f)}}
var z=a.updateTypes([]);(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.bfW,A.Wa)
v(A.M,[B.anv,B.cjs,B.cpE,B.cHb,B.cUA])
w(B.cjt,B.cjs)
w(B.agk,A.Mt)
v(D.bb2,[B.ciZ,B.cj_])})()
A.ch(b.typeUniverse,JSON.parse('{"bfW":{"Wa":[],"W1":["l","G<r>"]}}'))
var y={a:"Something went wrong, please report the issue https://www.github.com/incrediblezayed/file_saver/issues"}
var x={D:A.L("aeu"),g:A.L("bv"),x:A.L("A<l>"),v:A.L("l"),o:A.L("e7"),i:A.L("aeu?"),w:A.L("l?")};(function constants(){C.ap_=new B.bfW()
C.apz=new B.cUA()
C.hn=new A.aj(10,0,10,0)
C.bWR=new B.agk("Other","application/octet-stream",28,"other")
C.bt0=new B.agk("Custom","",41,"custom")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"heN","eBF",()=>{$.adj()
return!1})
w($,"heO","eBG",()=>{$.adj()
return!1})})()};
(a=>{a["O24rp6nOb/+aY2h7IULL+C7VVWI="]=a.current})($__dart_deferred_initializers__);