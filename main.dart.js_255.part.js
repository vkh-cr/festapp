((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={a44:function a44(d,e){this.a=d
this.b=e},
dtH(d){C.b.d4(d,new B.bhl())
return d},
Ef(d){return B.dtJ(d)},
dtJ(d){var w=0,v=A.l(x.l),u,t,s,r
var $async$Ef=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:w=d!=null?3:5
break
case 3:t=$.xD().co("information").kB(0,y.d)
s=A.dg()
s.toString
w=6
return A.d(t.dR("occasion",s).aIM(0,"type","eq",d),$async$Ef)
case 6:r=f
w=4
break
case 5:t=$.xD().co("information").kB(0,y.d)
s=A.dg()
s.toString
w=7
return A.d(t.dR("occasion",s).aMu("type.eq.,type.is.null"),$async$Ef)
case 7:r=f
case 4:u=B.dtH(A.aO(J.aT(r,new B.bhu(),x.b),!0,x.c))
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$Ef,v)},
bhl:function bhl(){},
bhu:function bhu(){},
aLe(d,e){var w,v,u,t,s,r,q,p=A.bG("\\d+|\\D+",!0,!1,!1),o=p.vN(0,d),n=x.g
o=A.lH(o,new B.c4r(),A.t(o).i("x.E"),n)
w=A.A(o,A.t(o).i("x.E"))
o=p.vN(0,e)
n=A.lH(o,new B.c4s(),A.t(o).i("x.E"),n)
v=A.A(n,A.t(n).i("x.E"))
u=0
while(!0){o=w.length
if(!(u<o&&u<v.length))break
t=w[u]
s=v[u]
o=A.bG("^\\d+$",!0,!1,!1)
if(o.b.test(t)){o=A.bG("^\\d+$",!0,!1,!1)
o=o.b.test(s)}else o=!1
if(o){r=C.c.bg(A.d_(t,null),A.d_(s,null))
if(r!==0)return r}else{if(t===s)q=0
else q=t<s?-1:1
if(q!==0)return q}++u}return C.c.bg(o,v.length)},
c4r:function c4r(){},
c4s:function c4s(){},
auh(){var w=0,v=A.l(x.i),u,t,s,r,q,p
var $async$auh=A.h(function(d,e){if(d===1)return A.i(e,v)
while(true)switch(w){case 0:q=$.tF().co("occasions").kB(0,"data")
p=A.dg()
p.toString
w=3
return A.d(q.dR("id",p).a2v(),$async$auh)
case 3:t=e
if(t!=null){s=J.v(t,"data")
if(s!=null&&J.v(s,"game")!=null){q=J.v(s,"game")
p=J.a1(q)
r=p.h(q,"start")!=null?A.e6(p.h(q,"start")):null
u=new B.a44(r,p.h(q,"end")!=null?A.e6(p.h(q,"end")):null)
w=1
break}}u=null
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$auh,v)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[59],B)
B.a44.prototype={
aZ(){var w,v=this.a
v=v==null?null:v.fP()
w=this.b
return A.w(["start",v,"end",w==null?null:w.fP()],x.g,x.b)}}
var z=a.updateTypes(["V<D<eY>>([f?])"])
B.bhl.prototype={
$2(d,e){var w,v,u=d.w
if(u==null)u=0
w=e.w
v=C.c.bg(u,w==null?0:w)
if(v!==0)return v
u=d.d
u=u==null?null:u.toLowerCase()
if(u==null)u=""
w=e.d
w=w==null?null:w.toLowerCase()
return B.aLe(u,w==null?"":w)},
$S:271}
B.bhu.prototype={
$1(d){return A.ayV(d)},
$S:163}
B.c4r.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:521}
B.c4s.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:521};(function installTearOffs(){var w=a.installStaticTearOff
w(B,"dRR",0,function(){return[null]},["$1","$0"],["Ef",function(){return B.Ef(null)}],0,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.a44,A.F)
w(B.bhl,A.eg)
v(A.cj,[B.bhu,B.c4r,B.c4s])})()
var y={d:"id,occasion,created_at,updated_at,is_hidden,title,description,order,type,data,information_hidden(*)"}
var x={c:A.I("eY"),l:A.I("D<eY>"),g:A.I("f"),b:A.I("@"),i:A.I("a44?")}};
(a=>{a["1wJ5yshHMP/rl02BsnDV2x9znzE="]=a.current})($__dart_deferred_initializers__);