((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={a4P:function a4P(d,e){this.a=d
this.b=e},
dwF(d){C.b.d8(d,new B.bil())
return d},
EC(d){return B.dwH(d)},
dwH(d){var w=0,v=A.l(x.l),u,t,s,r
var $async$EC=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:w=d!=null?3:5
break
case 3:t=$.xM().cn("information").kK(0,y.d)
s=A.de()
s.toString
w=6
return A.d(t.dW("occasion",s).aJr(0,"type","eq",d),$async$EC)
case 6:r=f
w=4
break
case 5:t=$.xM().cn("information").kK(0,y.d)
s=A.de()
s.toString
w=7
return A.d(t.dW("occasion",s).aNb("type.eq.,type.is.null"),$async$EC)
case 7:r=f
case 4:u=B.dwF(A.aR(J.aY(r,new B.biu(),x.b),!0,x.c))
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$EC,v)},
bil:function bil(){},
biu:function biu(){},
aM_(d,e){var w,v,u,t,s,r,q,p=A.bH("\\d+|\\D+",!0,!1,!1),o=p.vY(0,d),n=x.g
o=A.lQ(o,new B.c5q(),A.t(o).i("y.E"),n)
w=A.A(o,A.t(o).i("y.E"))
o=p.vY(0,e)
n=A.lQ(o,new B.c5r(),A.t(o).i("y.E"),n)
v=A.A(n,A.t(n).i("y.E"))
u=0
while(!0){o=w.length
if(!(u<o&&u<v.length))break
t=w[u]
s=v[u]
o=A.bH("^\\d+$",!0,!1,!1)
if(o.b.test(t)){o=A.bH("^\\d+$",!0,!1,!1)
o=o.b.test(s)}else o=!1
if(o){r=C.c.b5(A.d0(t,null),A.d0(s,null))
if(r!==0)return r}else{if(t===s)q=0
else q=t<s?-1:1
if(q!==0)return q}++u}return C.c.b5(o,v.length)},
c5q:function c5q(){},
c5r:function c5r(){},
av7(){var w=0,v=A.l(x.i),u,t,s,r,q,p
var $async$av7=A.h(function(d,e){if(d===1)return A.i(e,v)
while(true)switch(w){case 0:q=$.tV().cn("occasions").kK(0,"data")
p=A.de()
p.toString
w=3
return A.d(q.dW("id",p).a2M(),$async$av7)
case 3:t=e
if(t!=null){s=J.v(t,"data")
if(s!=null&&J.v(s,"game")!=null){q=J.v(s,"game")
p=J.a1(q)
r=p.h(q,"start")!=null?A.e9(p.h(q,"start")):null
u=new B.a4P(r,p.h(q,"end")!=null?A.e9(p.h(q,"end")):null)
w=1
break}}u=null
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$av7,v)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[59],B)
B.a4P.prototype={
b_(){var w,v=this.a
v=v==null?null:v.fV()
w=this.b
return A.w(["start",v,"end",w==null?null:w.fV()],x.g,x.b)}}
var z=a.updateTypes(["W<E<eZ>>([f?])"])
B.bil.prototype={
$2(d,e){var w,v,u=d.w
if(u==null)u=0
w=e.w
v=C.c.b5(u,w==null?0:w)
if(v!==0)return v
u=d.d
u=u==null?null:u.toLowerCase()
if(u==null)u=""
w=e.d
w=w==null?null:w.toLowerCase()
return B.aM_(u,w==null?"":w)},
$S:266}
B.biu.prototype={
$1(d){return A.azI(d)},
$S:141}
B.c5q.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:313}
B.c5r.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:313};(function installTearOffs(){var w=a.installStaticTearOff
w(B,"dVo",0,function(){return[null]},["$1","$0"],["EC",function(){return B.EC(null)}],0,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.a4P,A.G)
w(B.bil,A.el)
v(A.cq,[B.biu,B.c5q,B.c5r])})()
var y={d:"id,occasion,created_at,updated_at,is_hidden,title,description,order,type,data,information_hidden(*)"}
var x={c:A.J("eZ"),l:A.J("E<eZ>"),g:A.J("f"),b:A.J("@"),i:A.J("a4P?")}};
(a=>{a["KJAx/E/ZEkxKNUrLdN4QDVEB3Qs="]=a.current})($__dart_deferred_initializers__);