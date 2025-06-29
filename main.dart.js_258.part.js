((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_258",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={a2r:function a2r(d,e){this.a=d
this.b=e},
diP(d){C.b.dR(d,new B.bcz())
return d},
Dm(d){return B.diT(d)},
diT(d){var w=0,v=A.k(x.l),u,t,s,r
var $async$Dm=A.f(function(e,f){if(e===1)return A.h(f,v)
while(true)switch(w){case 0:w=d!=null?3:5
break
case 3:t=$.wQ().cb("information").jR(0,y.d)
s=A.d6()
s.toString
w=6
return A.d(t.dv("occasion",s).aG1(0,"type","eq",d),$async$Dm)
case 6:r=f
w=4
break
case 5:t=$.wQ().cb("information").jR(0,y.d)
s=A.d6()
s.toString
w=7
return A.d(t.dv("occasion",s).aJt("type.eq.,type.is.null"),$async$Dm)
case 7:r=f
case 4:u=B.diP(A.aW(J.b7(r,new B.bcI(),x.b),!0,x.c))
w=1
break
case 1:return A.i(u,v)}})
return A.j($async$Dm,v)},
bcz:function bcz(){},
bcI:function bcI(){},
bYq(d,e){var w,v,u,t,s,r,q,p=A.bF("\\d+|\\D+",!0,!1,!1),o=p.vq(0,d),n=x.g
o=A.lR(o,new B.bYr(),A.t(o).i("w.E"),n)
w=A.B(o,A.t(o).i("w.E"))
o=p.vq(0,e)
n=A.lR(o,new B.bYs(),A.t(o).i("w.E"),n)
v=A.B(n,A.t(n).i("w.E"))
u=0
while(!0){o=w.length
if(!(u<o&&u<v.length))break
t=w[u]
s=v[u]
o=A.bF("^\\d+$",!0,!1,!1)
if(o.b.test(t)){o=A.bF("^\\d+$",!0,!1,!1)
o=o.b.test(s)}else o=!1
if(o){r=C.c.bn(A.dm(t,null),A.dm(s,null))
if(r!==0)return r}else{if(t===s)q=0
else q=t<s?-1:1
if(q!==0)return q}++u}return C.c.bn(o,v.length)},
bYr:function bYr(){},
bYs:function bYs(){},
arP(){var w=0,v=A.k(x.i),u,t,s,r,q,p
var $async$arP=A.f(function(d,e){if(d===1)return A.h(e,v)
while(true)switch(w){case 0:q=$.uG().cb("occasions").jR(0,"data")
p=A.d6()
p.toString
w=3
return A.d(q.dv("id",p).a1d(),$async$arP)
case 3:t=e
if(t!=null){s=J.v(t,"data")
if(s!=null&&J.v(s,"game")!=null){q=J.v(s,"game")
p=J.a1(q)
r=p.h(q,"start")!=null?A.ek(p.h(q,"start")):null
u=new B.a2r(r,p.h(q,"end")!=null?A.ek(p.h(q,"end")):null)
w=1
break}}u=null
w=1
break
case 1:return A.i(u,v)}})
return A.j($async$arP,v)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[57],B)
B.a2r.prototype={
b6(){var w,v=this.a
v=v==null?null:v.fB()
w=this.b
return A.y(["start",v,"end",w==null?null:w.fB()],x.g,x.b)}}
var z=a.updateTypes(["X<D<eN>>([l?])"])
B.bcz.prototype={
$2(d,e){var w,v,u=d.w
if(u==null)u=0
w=e.w
v=C.c.bn(u,w==null?0:w)
if(v!==0)return v
u=d.d
u=u==null?null:u.toLowerCase()
if(u==null)u=""
w=e.d
w=w==null?null:w.toLowerCase()
return B.bYq(u,w==null?"":w)},
$S:248}
B.bcI.prototype={
$1(d){return A.awf(d)},
$S:148}
B.bYr.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:362}
B.bYs.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:362};(function installTearOffs(){var w=a.installStaticTearOff
w(B,"dI_",0,function(){return[null]},["$1","$0"],["Dm",function(){return B.Dm(null)}],0,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.a2r,A.K)
w(B.bcz,A.ey)
v(A.ch,[B.bcI,B.bYr,B.bYs])})()
var y={d:"id,occasion,created_at,updated_at,is_hidden,title,description,order,type,data,information_hidden(*)"}
var x={c:A.E("eN"),l:A.E("D<eN>"),g:A.E("l"),b:A.E("@"),i:A.E("a2r?")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_258",e:"endPart",h:b})})($__dart_deferred_initializers__,"TCWa0p+BdeCezONRiKnDR9H7IV4=");