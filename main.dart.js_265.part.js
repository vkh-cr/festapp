((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_265",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={a1s:function a1s(d,e){this.a=d
this.b=e},
d9W(d){C.b.e4(d,new B.bah())
return d},
z6(d){return B.da_(d)},
da_(d){var w=0,v=A.l(x.l),u,t,s,r
var $async$z6=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:w=d!=null?3:5
break
case 3:t=$.wi().c0("information").ik(0,y.d)
s=A.dn()
s.toString
w=6
return A.d(t.da("occasion",s).adL(0,"type","eq",d),$async$z6)
case 6:r=f
w=4
break
case 5:t=$.wi().c0("information").ik(0,y.d)
s=A.dn()
s.toString
w=7
return A.d(t.da("occasion",s).aHD("type.eq.,type.is.null"),$async$z6)
case 7:r=f
case 4:u=B.d9W(A.b_(J.bJ(r,new B.baq(),x.b),!0,x.c))
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$z6,v)},
bah:function bah(){},
baq:function baq(){},
bTU(d,e){var w,v,u,t,s,r,q,p=A.bC("\\d+|\\D+",!0,!1,!1),o=p.v4(0,d),n=x.g
o=A.m9(o,new B.bTV(),A.u(o).i("y.E"),n)
w=A.E(o,A.u(o).i("y.E"))
o=p.v4(0,e)
n=A.m9(o,new B.bTW(),A.u(o).i("y.E"),n)
v=A.E(n,A.u(n).i("y.E"))
u=0
while(!0){o=w.length
if(!(u<o&&u<v.length))break
t=w[u]
s=v[u]
o=A.bC("^\\d+$",!0,!1,!1)
if(o.b.test(t)){o=A.bC("^\\d+$",!0,!1,!1)
o=o.b.test(s)}else o=!1
if(o){r=C.c.bo(A.du(t,null),A.du(s,null))
if(r!==0)return r}else{if(t===s)q=0
else q=t<s?-1:1
if(q!==0)return q}++u}return C.c.bo(o,v.length)},
bTV:function bTV(){},
bTW:function bTW(){},
aql(){var w=0,v=A.l(x.i),u,t,s,r,q,p
var $async$aql=A.h(function(d,e){if(d===1)return A.i(e,v)
while(true)switch(w){case 0:q=$.ua().c0("occasions").ik(0,"data")
p=A.dn()
p.toString
w=3
return A.d(q.da("id",p).Qz(),$async$aql)
case 3:t=e
if(t!=null){s=J.v(t,"data")
if(s!=null&&J.v(s,"game")!=null){q=J.v(s,"game")
p=J.a1(q)
r=p.h(q,"start")!=null?A.eA(p.h(q,"start")):null
u=new B.a1s(r,p.h(q,"end")!=null?A.eA(p.h(q,"end")):null)
w=1
break}}u=null
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$aql,v)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[59],B)
B.a1s.prototype={
bl(){var w,v=this.a
v=v==null?null:v.h8()
w=this.b
return A.z(["start",v,"end",w==null?null:w.h8()],x.g,x.b)}}
var z=a.updateTypes(["Y<B<eI>>([m?])"])
B.bah.prototype={
$2(d,e){var w,v,u=d.w
if(u==null)u=0
w=e.w
v=C.c.bo(u,w==null?0:w)
if(v!==0)return v
u=d.d
u=u==null?null:u.toLowerCase()
if(u==null)u=""
w=e.d
w=w==null?null:w.toLowerCase()
return B.bTU(u,w==null?"":w)},
$S:205}
B.baq.prototype={
$1(d){return A.auK(d)},
$S:137}
B.bTV.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:427}
B.bTW.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:427};(function installTearOffs(){var w=a.installStaticTearOff
w(B,"dyI",0,function(){return[null]},["$1","$0"],["z6",function(){return B.z6(null)}],0,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.a1s,A.G)
w(B.bah,A.el)
v(A.c8,[B.baq,B.bTV,B.bTW])})()
var y={d:"id,occasion,created_at,updated_at,is_hidden,title,description,order,type,data,information_hidden(*)"}
var x={c:A.C("eI"),l:A.C("B<eI>"),g:A.C("m"),b:A.C("@"),i:A.C("a1s?")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_265",e:"endPart",h:b})})($__dart_deferred_initializers__,"EViJyLjkpiJBEqlbAU3TyTKAlbM=");