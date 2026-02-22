((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
eJB(d){C.c.cP(d,new B.bRt())
return d},
a8Q(d){return B.eJD(d)},
eJD(d){var w=0,v=A.q(x.l),u,t,s,r
var $async$a8Q=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:w=d!=null?3:5
break
case 3:t=$.a1A().d8("information").lz(0,y.d)
s=A.dw()
s.toString
w=6
return A.f(t.e8("occasion",s).aNG(0,"type","eq",d),$async$a8Q)
case 6:r=f
w=4
break
case 5:t=$.a1A().d8("information").lz(0,y.d)
s=A.dw()
s.toString
w=7
return A.f(t.e8("occasion",s).aRy("type.eq.,type.is.null"),$async$a8Q)
case 7:r=f
case 4:u=B.eJB(A.aW(J.aY(r,new B.bRC(),x.b),!0,x.c))
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$a8Q,v)},
bRt:function bRt(){},
bRC:function bRC(){},
aAP:function aAP(d,e){this.a=d
this.b=e},
asC(d,e){var w,v,u,t,s,r,q,p=A.bF("\\d+|\\D+",!0,!1,!1),o=p.ww(0,d),n=x.g
o=A.Qk(o,new B.cGO(),A.z(o).i("E.E"),n)
w=A.D(o,A.z(o).i("E.E"))
o=p.ww(0,e)
n=A.Qk(o,new B.cGP(),A.z(o).i("E.E"),n)
v=A.D(n,A.z(n).i("E.E"))
u=0
for(;;){o=w.length
if(!(u<o&&u<v.length))break
t=w[u]
s=v[u]
o=A.bF("^\\d+$",!0,!1,!1)
if(o.b.test(t)){o=A.bF("^\\d+$",!0,!1,!1)
o=o.b.test(s)}else o=!1
if(o){r=C.d.ba(A.dd(t,null),A.dd(s,null))
if(r!==0)return r}else{if(t===s)q=0
else q=t<s?-1:1
if(q!==0)return q}++u}return C.d.ba(o,v.length)},
cGO:function cGO(){},
cGP:function cGP(){},
b14(){var w=0,v=A.q(x.i),u,t,s,r,q,p
var $async$b14=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:q=$.Yu().d8("occasions").lz(0,"data")
p=A.dw()
p.toString
w=3
return A.f(q.e8("id",p).LQ(),$async$b14)
case 3:t=e
if(t!=null){s=J.y(t,"data")
if(s!=null&&J.y(s,"game")!=null){q=J.y(s,"game")
p=J.a3(q)
r=p.h(q,"start")!=null?A.et(p.h(q,"start")):null
u=new B.aAP(r,p.h(q,"end")!=null?A.et(p.h(q,"end")):null)
w=1
break}}u=null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$b14,v)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[63],B)
B.aAP.prototype={
b3(){var w,v=this.a
v=v==null?null:v.fp()
w=this.b
return A.d(["start",v,"end",w==null?null:w.fp()],x.g,x.b)}}
var z=a.updateTypes(["Z<G<fv>>([l?])"])
B.bRt.prototype={
$2(d,e){var w,v,u=d.w
if(u==null)u=0
w=e.w
v=C.d.ba(u,w==null?0:w)
if(v!==0)return v
u=d.d
u=u==null?null:u.toLowerCase()
if(u==null)u=""
w=e.d
w=w==null?null:w.toLowerCase()
return B.asC(u,w==null?"":w)},
$S:303}
B.bRC.prototype={
$1(d){return A.b5T(d)},
$S:172}
B.cGO.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:546}
B.cGP.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:546};(function installTearOffs(){var w=a.installStaticTearOff
w(B,"f7R",0,function(){return[null]},["$1","$0"],["a8Q",function(){return B.a8Q(null)}],0,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.bRt,A.e8)
v(A.ck,[B.bRC,B.cGO,B.cGP])
w(B.aAP,A.M)})()
var y={d:"id,occasion,created_at,updated_at,is_hidden,title,description,order,type,data,information_hidden(*)"}
var x={c:A.L("fv"),l:A.L("G<fv>"),g:A.L("l"),b:A.L("@"),i:A.L("aAP?")}};
(a=>{a["SZLx0Qj7E9aPB4+spUgabzgzoNU="]=a.current})($__dart_deferred_initializers__);