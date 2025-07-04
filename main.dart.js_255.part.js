((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_255",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={a2v:function a2v(d,e){this.a=d
this.b=e},
djK(d){C.b.dS(d,new B.bcH())
return d},
Dn(d){return B.djO(d)},
djO(d){var w=0,v=A.k(x.l),u,t,s,r
var $async$Dn=A.f(function(e,f){if(e===1)return A.h(f,v)
while(true)switch(w){case 0:w=d!=null?3:5
break
case 3:t=$.wU().cc("information").jR(0,y.d)
s=A.d6()
s.toString
w=6
return A.d(t.dv("occasion",s).aG9(0,"type","eq",d),$async$Dn)
case 6:r=f
w=4
break
case 5:t=$.wU().cc("information").jR(0,y.d)
s=A.d6()
s.toString
w=7
return A.d(t.dv("occasion",s).aJB("type.eq.,type.is.null"),$async$Dn)
case 7:r=f
case 4:u=B.djK(A.aW(J.b9(r,new B.bcQ(),x.b),!0,x.c))
w=1
break
case 1:return A.i(u,v)}})
return A.j($async$Dn,v)},
bcH:function bcH(){},
bcQ:function bcQ(){},
bYo(d,e){var w,v,u,t,s,r,q,p=A.bF("\\d+|\\D+",!0,!1,!1),o=p.vq(0,d),n=x.g
o=A.lg(o,new B.bYp(),A.t(o).i("x.E"),n)
w=A.B(o,A.t(o).i("x.E"))
o=p.vq(0,e)
n=A.lg(o,new B.bYq(),A.t(o).i("x.E"),n)
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
bYp:function bYp(){},
bYq:function bYq(){},
arU(){var w=0,v=A.k(x.i),u,t,s,r,q,p
var $async$arU=A.f(function(d,e){if(d===1)return A.h(e,v)
while(true)switch(w){case 0:q=$.uL().cc("occasions").jR(0,"data")
p=A.d6()
p.toString
w=3
return A.d(q.dv("id",p).a1i(),$async$arU)
case 3:t=e
if(t!=null){s=J.u(t,"data")
if(s!=null&&J.u(s,"game")!=null){q=J.u(s,"game")
p=J.a1(q)
r=p.h(q,"start")!=null?A.ea(p.h(q,"start")):null
u=new B.a2v(r,p.h(q,"end")!=null?A.ea(p.h(q,"end")):null)
w=1
break}}u=null
w=1
break
case 1:return A.i(u,v)}})
return A.j($async$arU,v)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[57],B)
B.a2v.prototype={
b6(){var w,v=this.a
v=v==null?null:v.fP()
w=this.b
return A.w(["start",v,"end",w==null?null:w.fP()],x.g,x.b)}}
var z=a.updateTypes(["X<D<eO>>([l?])"])
B.bcH.prototype={
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
return B.bYo(u,w==null?"":w)},
$S:264}
B.bcQ.prototype={
$1(d){return A.awk(d)},
$S:147}
B.bYp.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:473}
B.bYq.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:473};(function installTearOffs(){var w=a.installStaticTearOff
w(B,"dIW",0,function(){return[null]},["$1","$0"],["Dn",function(){return B.Dn(null)}],0,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.a2v,A.K)
w(B.bcH,A.ez)
v(A.cj,[B.bcQ,B.bYp,B.bYq])})()
var y={d:"id,occasion,created_at,updated_at,is_hidden,title,description,order,type,data,information_hidden(*)"}
var x={c:A.E("eO"),l:A.E("D<eO>"),g:A.E("l"),b:A.E("@"),i:A.E("a2v?")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_255",e:"endPart",h:b})})($__dart_deferred_initializers__,"4HQWs7ByXRfcYuboRIg0Fcl18xA=");