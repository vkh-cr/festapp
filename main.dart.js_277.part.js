((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
exA(d){C.c.cF(d,new B.bMI())
return d},
a5C(d){return B.exC(d)},
exC(d){var w=0,v=A.p(x.l),u,t,s,r
var $async$a5C=A.l(function(e,f){if(e===1)return A.m(f,v)
for(;;)switch(w){case 0:w=d!=null?3:5
break
case 3:t=$.Zo().cD("information").ly(0,y.d)
s=A.dj()
s.toString
w=6
return A.f(t.eb("occasion",s).aMH(0,"type","eq",d),$async$a5C)
case 6:r=f
w=4
break
case 5:t=$.Zo().cD("information").ly(0,y.d)
s=A.dj()
s.toString
w=7
return A.f(t.eb("occasion",s).aQz("type.eq.,type.is.null"),$async$a5C)
case 7:r=f
case 4:u=B.exA(A.aU(J.b5(r,new B.bMR(),x.b),!0,x.c))
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$a5C,v)},
bMI:function bMI(){},
bMR:function bMR(){},
axn:function axn(d,e){this.a=d
this.b=e},
agb(d,e){var w,v,u,t,s,r,q,p=A.bN("\\d+|\\D+",!0,!1,!1),o=p.wp(0,d),n=x.g
o=A.MV(o,new B.cBd(),A.x(o).i("E.E"),n)
w=A.F(o,A.x(o).i("E.E"))
o=p.wp(0,e)
n=A.MV(o,new B.cBe(),A.x(o).i("E.E"),n)
v=A.F(n,A.x(n).i("E.E"))
u=0
for(;;){o=w.length
if(!(u<o&&u<v.length))break
t=w[u]
s=v[u]
o=A.bN("^\\d+$",!0,!1,!1)
if(o.b.test(t)){o=A.bN("^\\d+$",!0,!1,!1)
o=o.b.test(s)}else o=!1
if(o){r=C.d.b8(A.dg(t,null),A.dg(s,null))
if(r!==0)return r}else{if(t===s)q=0
else q=t<s?-1:1
if(q!==0)return q}++u}return C.d.b8(o,v.length)},
cBd:function cBd(){},
cBe:function cBe(){},
aYh(){var w=0,v=A.p(x.i),u,t,s,r,q,p
var $async$aYh=A.l(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:q=$.Vs().cD("occasions").ly(0,"data")
p=A.dj()
p.toString
w=3
return A.f(q.eb("id",p).a4p(),$async$aYh)
case 3:t=e
if(t!=null){s=J.y(t,"data")
if(s!=null&&J.y(s,"game")!=null){q=J.y(s,"game")
p=J.a4(q)
r=p.h(q,"start")!=null?A.ep(p.h(q,"start")):null
u=new B.axn(r,p.h(q,"end")!=null?A.ep(p.h(q,"end")):null)
w=1
break}}u=null
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$aYh,v)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[58],B)
B.axn.prototype={
b1(){var w,v=this.a
v=v==null?null:v.fN()
w=this.b
return A.d(["start",v,"end",w==null?null:w.fN()],x.g,x.b)}}
var z=a.updateTypes(["Z<G<fd>>([q?])"])
B.bMI.prototype={
$2(d,e){var w,v,u=d.w
if(u==null)u=0
w=e.w
v=C.d.b8(u,w==null?0:w)
if(v!==0)return v
u=d.d
u=u==null?null:u.toLowerCase()
if(u==null)u=""
w=e.d
w=w==null?null:w.toLowerCase()
return B.agb(u,w==null?"":w)},
$S:258}
B.bMR.prototype={
$1(d){return A.b20(d)},
$S:172}
B.cBd.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:552}
B.cBe.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:552};(function installTearOffs(){var w=a.installStaticTearOff
w(B,"eWC",0,function(){return[null]},["$1","$0"],["a5C",function(){return B.a5C(null)}],0,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.bMI,A.eo)
v(A.cj,[B.bMR,B.cBd,B.cBe])
w(B.axn,A.L)})()
var y={d:"id,occasion,created_at,updated_at,is_hidden,title,description,order,type,data,information_hidden(*)"}
var x={c:A.M("fd"),l:A.M("G<fd>"),g:A.M("q"),b:A.M("@"),i:A.M("axn?")}};
(a=>{a["EM4TF1qiA2VjoTzouDCe2EZlHQk="]=a.current})($__dart_deferred_initializers__);