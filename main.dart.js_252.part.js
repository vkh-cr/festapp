((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={a4O:function a4O(d,e){this.a=d
this.b=e},
dxB(d){C.b.d8(d,new B.biw())
return d},
EE(d){return B.dxD(d)},
dxD(d){var w=0,v=A.m(x.l),u,t,s,r
var $async$EE=A.i(function(e,f){if(e===1)return A.j(f,v)
while(true)switch(w){case 0:w=d!=null?3:5
break
case 3:t=$.xM().cn("information").kK(0,y.d)
s=A.df()
s.toString
w=6
return A.d(t.dW("occasion",s).aJQ(0,"type","eq",d),$async$EE)
case 6:r=f
w=4
break
case 5:t=$.xM().cn("information").kK(0,y.d)
s=A.df()
s.toString
w=7
return A.d(t.dW("occasion",s).aNB("type.eq.,type.is.null"),$async$EE)
case 7:r=f
case 4:u=B.dxB(A.aO(J.b0(r,new B.biF(),x.b),!0,x.c))
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$EE,v)},
biw:function biw(){},
biF:function biF(){},
aM5(d,e){var w,v,u,t,s,r,q,p=A.bH("\\d+|\\D+",!0,!1,!1),o=p.vZ(0,d),n=x.g
o=A.lR(o,new B.c5Z(),A.t(o).i("y.E"),n)
w=A.A(o,A.t(o).i("y.E"))
o=p.vZ(0,e)
n=A.lR(o,new B.c6_(),A.t(o).i("y.E"),n)
v=A.A(n,A.t(n).i("y.E"))
u=0
while(!0){o=w.length
if(!(u<o&&u<v.length))break
t=w[u]
s=v[u]
o=A.bH("^\\d+$",!0,!1,!1)
if(o.b.test(t)){o=A.bH("^\\d+$",!0,!1,!1)
o=o.b.test(s)}else o=!1
if(o){r=C.c.b5(A.d2(t,null),A.d2(s,null))
if(r!==0)return r}else{if(t===s)q=0
else q=t<s?-1:1
if(q!==0)return q}++u}return C.c.b5(o,v.length)},
c5Z:function c5Z(){},
c6_:function c6_(){},
avb(){var w=0,v=A.m(x.i),u,t,s,r,q,p
var $async$avb=A.i(function(d,e){if(d===1)return A.j(e,v)
while(true)switch(w){case 0:q=$.tX().cn("occasions").kK(0,"data")
p=A.df()
p.toString
w=3
return A.d(q.dW("id",p).a31(),$async$avb)
case 3:t=e
if(t!=null){s=J.v(t,"data")
if(s!=null&&J.v(s,"game")!=null){q=J.v(s,"game")
p=J.a1(q)
r=p.h(q,"start")!=null?A.eb(p.h(q,"start")):null
u=new B.a4O(r,p.h(q,"end")!=null?A.eb(p.h(q,"end")):null)
w=1
break}}u=null
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$avb,v)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[60],B)
B.a4O.prototype={
b_(){var w,v=this.a
v=v==null?null:v.fO()
w=this.b
return A.w(["start",v,"end",w==null?null:w.fO()],x.g,x.b)}}
var z=a.updateTypes(["W<E<f1>>([f?])"])
B.biw.prototype={
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
return B.aM5(u,w==null?"":w)},
$S:267}
B.biF.prototype={
$1(d){return A.azO(d)},
$S:142}
B.c5Z.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:313}
B.c6_.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:313};(function installTearOffs(){var w=a.installStaticTearOff
w(B,"dWl",0,function(){return[null]},["$1","$0"],["EE",function(){return B.EE(null)}],0,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.a4O,A.G)
w(B.biw,A.em)
v(A.cs,[B.biF,B.c5Z,B.c6_])})()
var y={d:"id,occasion,created_at,updated_at,is_hidden,title,description,order,type,data,information_hidden(*)"}
var x={c:A.J("f1"),l:A.J("E<f1>"),g:A.J("f"),b:A.J("@"),i:A.J("a4O?")}};
(a=>{a["rH6k/+MHej3iQqjJJVi2b71mAzw="]=a.current})($__dart_deferred_initializers__);