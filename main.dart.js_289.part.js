((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
eGF(d){C.c.cI(d,new B.bQp())
return d},
a8r(d){return B.eGH(d)},
eGH(d){var w=0,v=A.p(x.l),u,t,s,r
var $async$a8r=A.l(function(e,f){if(e===1)return A.m(f,v)
for(;;)switch(w){case 0:w=d!=null?3:5
break
case 3:t=$.a1f().cF("information").ly(0,y.d)
s=A.dj()
s.toString
w=6
return A.f(t.ed("occasion",s).aNk(0,"type","eq",d),$async$a8r)
case 6:r=f
w=4
break
case 5:t=$.a1f().cF("information").ly(0,y.d)
s=A.dj()
s.toString
w=7
return A.f(t.ed("occasion",s).aRc("type.eq.,type.is.null"),$async$a8r)
case 7:r=f
case 4:u=B.eGF(A.aX(J.aW(r,new B.bQy(),x.b),!0,x.c))
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$a8r,v)},
bQp:function bQp(){},
bQy:function bQy(){},
aAm:function aAm(d,e){this.a=d
this.b=e},
aj4(d,e){var w,v,u,t,s,r,q,p=A.bM("\\d+|\\D+",!0,!1,!1),o=p.wu(0,d),n=x.g
o=A.PB(o,new B.cFs(),A.z(o).i("E.E"),n)
w=A.D(o,A.z(o).i("E.E"))
o=p.wu(0,e)
n=A.PB(o,new B.cFt(),A.z(o).i("E.E"),n)
v=A.D(n,A.z(n).i("E.E"))
u=0
for(;;){o=w.length
if(!(u<o&&u<v.length))break
t=w[u]
s=v[u]
o=A.bM("^\\d+$",!0,!1,!1)
if(o.b.test(t)){o=A.bM("^\\d+$",!0,!1,!1)
o=o.b.test(s)}else o=!1
if(o){r=C.d.ba(A.dd(t,null),A.dd(s,null))
if(r!==0)return r}else{if(t===s)q=0
else q=t<s?-1:1
if(q!==0)return q}++u}return C.d.ba(o,v.length)},
cFs:function cFs(){},
cFt:function cFt(){},
b0s(){var w=0,v=A.p(x.i),u,t,s,r,q,p
var $async$b0s=A.l(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:q=$.Ya().cF("occasions").ly(0,"data")
p=A.dj()
p.toString
w=3
return A.f(q.ed("id",p).LM(),$async$b0s)
case 3:t=e
if(t!=null){s=J.y(t,"data")
if(s!=null&&J.y(s,"game")!=null){q=J.y(s,"game")
p=J.a3(q)
r=p.h(q,"start")!=null?A.es(p.h(q,"start")):null
u=new B.aAm(r,p.h(q,"end")!=null?A.es(p.h(q,"end")):null)
w=1
break}}u=null
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$b0s,v)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aAm.prototype={
b1(){var w,v=this.a
v=v==null?null:v.fB()
w=this.b
return A.d(["start",v,"end",w==null?null:w.fB()],x.g,x.b)}}
var z=a.updateTypes(["Z<G<ff>>([q?])"])
B.bQp.prototype={
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
return B.aj4(u,w==null?"":w)},
$S:305}
B.bQy.prototype={
$1(d){return A.b5d(d)},
$S:159}
B.cFs.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:425}
B.cFt.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:425};(function installTearOffs(){var w=a.installStaticTearOff
w(B,"f4S",0,function(){return[null]},["$1","$0"],["a8r",function(){return B.a8r(null)}],0,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.bQp,A.ef)
v(A.ck,[B.bQy,B.cFs,B.cFt])
w(B.aAm,A.M)})()
var y={d:"id,occasion,created_at,updated_at,is_hidden,title,description,order,type,data,information_hidden(*)"}
var x={c:A.L("ff"),l:A.L("G<ff>"),g:A.L("q"),b:A.L("@"),i:A.L("aAm?")}};
(a=>{a["rxI5LiHdMXONPAGs8ZNCbHFXAkg="]=a.current})($__dart_deferred_initializers__);