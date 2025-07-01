((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_257",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={a2u:function a2u(d,e){this.a=d
this.b=e},
diZ(d){C.b.dR(d,new B.bcB())
return d},
Dm(d){return B.dj2(d)},
dj2(d){var w=0,v=A.k(x.l),u,t,s,r
var $async$Dm=A.f(function(e,f){if(e===1)return A.h(f,v)
while(true)switch(w){case 0:w=d!=null?3:5
break
case 3:t=$.wR().cb("information").jR(0,y.d)
s=A.d6()
s.toString
w=6
return A.d(t.dv("occasion",s).aG4(0,"type","eq",d),$async$Dm)
case 6:r=f
w=4
break
case 5:t=$.wR().cb("information").jR(0,y.d)
s=A.d6()
s.toString
w=7
return A.d(t.dv("occasion",s).aJw("type.eq.,type.is.null"),$async$Dm)
case 7:r=f
case 4:u=B.diZ(A.aW(J.b7(r,new B.bcK(),x.b),!0,x.c))
w=1
break
case 1:return A.i(u,v)}})
return A.j($async$Dm,v)},
bcB:function bcB(){},
bcK:function bcK(){},
bYu(d,e){var w,v,u,t,s,r,q,p=A.bF("\\d+|\\D+",!0,!1,!1),o=p.vq(0,d),n=x.g
o=A.lc(o,new B.bYv(),A.t(o).i("x.E"),n)
w=A.B(o,A.t(o).i("x.E"))
o=p.vq(0,e)
n=A.lc(o,new B.bYw(),A.t(o).i("x.E"),n)
v=A.B(n,A.t(n).i("x.E"))
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
bYv:function bYv(){},
bYw:function bYw(){},
arQ(){var w=0,v=A.k(x.i),u,t,s,r,q,p
var $async$arQ=A.f(function(d,e){if(d===1)return A.h(e,v)
while(true)switch(w){case 0:q=$.uI().cb("occasions").jR(0,"data")
p=A.d6()
p.toString
w=3
return A.d(q.dv("id",p).a1f(),$async$arQ)
case 3:t=e
if(t!=null){s=J.v(t,"data")
if(s!=null&&J.v(s,"game")!=null){q=J.v(s,"game")
p=J.a0(q)
r=p.h(q,"start")!=null?A.ee(p.h(q,"start")):null
u=new B.a2u(r,p.h(q,"end")!=null?A.ee(p.h(q,"end")):null)
w=1
break}}u=null
w=1
break
case 1:return A.i(u,v)}})
return A.j($async$arQ,v)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[57],B)
B.a2u.prototype={
b6(){var w,v=this.a
v=v==null?null:v.fB()
w=this.b
return A.w(["start",v,"end",w==null?null:w.fB()],x.g,x.b)}}
var z=a.updateTypes(["X<D<eN>>([l?])"])
B.bcB.prototype={
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
return B.bYu(u,w==null?"":w)},
$S:257}
B.bcK.prototype={
$1(d){return A.awg(d)},
$S:147}
B.bYv.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:430}
B.bYw.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:430};(function installTearOffs(){var w=a.installStaticTearOff
w(B,"dIa",0,function(){return[null]},["$1","$0"],["Dm",function(){return B.Dm(null)}],0,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.a2u,A.K)
w(B.bcB,A.ey)
v(A.ch,[B.bcK,B.bYv,B.bYw])})()
var y={d:"id,occasion,created_at,updated_at,is_hidden,title,description,order,type,data,information_hidden(*)"}
var x={c:A.E("eN"),l:A.E("D<eN>"),g:A.E("l"),b:A.E("@"),i:A.E("a2u?")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_257",e:"endPart",h:b})})($__dart_deferred_initializers__,"10bBmuBEChhN2/2nqDhg1ztxKEo=");