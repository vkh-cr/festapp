((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={TV:function TV(d,e){this.a=d
this.b=e},c6F:function c6F(){},bbi:function bbi(){},
dbj(d,e,f,g,h,i,j,k){var x,w
if(g==null){if(f.length!==2)A.aa(A.cr('"colors" must have length 2 if "colorStops" is omitted.',null))}else if(f.length!==g.length)A.aa(A.cr('"colors" and "colorStops" arguments must have equal length.',null))
x=i!=null?A.aoX(i):null
if(j!=null)w=j.k(0,d)&&k===0
else w=!0
if(w){$.ax()
w=new A.arL(d,e,f,g,h,x)
w.a7q()
return w}else{$.ax()
w=new A.arJ(j,k,d,e,f,g,h,x)
w.a7q()
return w}},
dTY(d){switch(d.a){case 0:return D.Iz
case 2:return D.acR
case 1:return D.acQ
case 3:return C.bzR
case 4:return D.acS}},
aoO(d,e,f){var x=0,w=A.l(y.a),v,u
var $async$aoO=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)switch(x){case 0:if(e===C.aDQ||e===C.aDR)u=!(d.giQ()==="https"||d.giQ()==="http")
else u=!1
if(u)throw A.p(A.ff(d,"url","To use an in-app web view, you must provide an http(s) URL."))
v=$.d6J().S4(d.j(0),new A.aAy(B.dTY(e),new A.azs(!0,!0,D.ic),f))
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$aoO,w)},
cWH(d){var x=0,w=A.l(y.a),v
var $async$cWH=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=$.d6J().aGi(d.j(0))
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$cWH,w)}},C
A=c[0]
D=c[2]
B=a.updateHolder(c[148],B)
C=c[214]
B.TV.prototype={
I(){return"LaunchMode."+this.b}}
B.c6F.prototype={}
B.bbi.prototype={}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.TV,A.fI)
w(A.G,[B.c6F,B.bbi])})()
var y={a:A.J("x")};(function constants(){C.kO=new A.jZ(1,1)
C.hQ=new A.ag(5,5,5,5)
C.bVK=new B.bbi()
C.bVX=new B.c6F()
C.FF=new B.TV(0,"platformDefault")
C.aDQ=new B.TV(1,"inAppWebView")
C.aDR=new B.TV(2,"inAppBrowserView")
C.aDS=new B.TV(3,"externalApplication")
C.bzR=new A.MS(3,"externalApplication")})()};
(a=>{a["4qfoLNVZDv6hcPtZb0I/eUoHhbg="]=a.current})($__dart_deferred_initializers__);