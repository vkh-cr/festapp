((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_300",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={a0s:function a0s(d,e){this.a=d
this.b=e},
d0w(d){C.b.es(d,new B.b78())
return d},
yF(d){return B.d0y(d)},
d0y(d){var w=0,v=A.k(x.l),u,t,s,r
var $async$yF=A.f(function(e,f){if(e===1)return A.h(f,v)
while(true)switch(w){case 0:w=d!=null?3:5
break
case 3:t=$.vS().bU("information").hx(0,y.d)
s=A.dl()
s.toString
w=6
return A.d(t.ct("occasion",s).acI(0,"type","eq",d),$async$yF)
case 6:r=f
w=4
break
case 5:t=$.vS().bU("information").hx(0,y.d)
s=A.dl()
s.toString
w=7
return A.d(t.ct("occasion",s).aFM("type.eq.,type.is.null"),$async$yF)
case 7:r=f
case 4:u=B.d0w(A.aY(J.c_(r,new B.b7h(),x.b),!0,x.c))
w=1
break
case 1:return A.i(u,v)}})
return A.j($async$yF,v)},
b78:function b78(){},
b7h:function b7h(){},
bPr(d,e){var w,v,u,t,s,r,q,p=A.bz("\\d+|\\D+",!0,!1,!1),o=p.uZ(0,d),n=x.g
o=A.lP(o,new B.bPs(),A.t(o).i("y.E"),n)
w=A.H(o,!0,A.t(o).i("y.E"))
o=p.uZ(0,e)
n=A.lP(o,new B.bPt(),A.t(o).i("y.E"),n)
v=A.H(n,!0,A.t(n).i("y.E"))
u=0
while(!0){o=w.length
if(!(u<o&&u<v.length))break
t=w[u]
s=v[u]
o=A.bz("^\\d+$",!0,!1,!1)
if(o.b.test(t)){o=A.bz("^\\d+$",!0,!1,!1)
o=o.b.test(s)}else o=!1
if(o){r=C.c.bx(A.dg(t,null),A.dg(s,null))
if(r!==0)return r}else{if(t===s)q=0
else q=t<s?-1:1
if(q!==0)return q}++u}return C.c.bx(o,v.length)},
bPs:function bPs(){},
bPt:function bPt(){},
aoF(){var w=0,v=A.k(x.i),u,t,s,r,q,p
var $async$aoF=A.f(function(d,e){if(d===1)return A.h(e,v)
while(true)switch(w){case 0:q=$.tR().bU("occasions").hx(0,"data")
p=A.dl()
p.toString
w=3
return A.d(q.ct("id",p).PZ(),$async$aoF)
case 3:t=e
if(t!=null){s=J.v(t,"data")
if(s!=null&&J.v(s,"game")!=null){q=J.v(s,"game")
p=J.a2(q)
r=p.h(q,"start")!=null?A.f0(p.h(q,"start")):null
u=new B.a0s(r,p.h(q,"end")!=null?A.f0(p.h(q,"end")):null)
w=1
break}}u=null
w=1
break
case 1:return A.i(u,v)}})
return A.j($async$aoF,v)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.a0s.prototype={
bp(){var w,v=this.a
v=v==null?null:v.hH()
w=this.b
return A.z(["start",v,"end",w==null?null:w.hH()],x.g,x.b)}}
var z=a.updateTypes(["T<C<eI>>([m?])"])
B.b78.prototype={
$2(d,e){var w,v,u=d.w
if(u==null)u=0
w=e.w
v=C.c.bx(u,w==null?0:w)
if(v!==0)return v
u=d.d
u=u==null?null:u.toLowerCase()
if(u==null)u=""
w=e.d
w=w==null?null:w.toLowerCase()
return B.bPr(u,w==null?"":w)},
$S:179}
B.b7h.prototype={
$1(d){return A.asZ(d)},
$S:117}
B.bPs.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:257}
B.bPt.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:257};(function installTearOffs(){var w=a.installStaticTearOff
w(B,"dno",0,function(){return[null]},["$1","$0"],["yF",function(){return B.yF(null)}],0,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.a0s,A.E)
w(B.b78,A.dt)
v(A.bF,[B.b7h,B.bPs,B.bPt])})()
var y={d:"id,occasion,created_at,updated_at,is_hidden,title,description,order,type,data,information_hidden(*)"}
var x={c:A.A("eI"),l:A.A("C<eI>"),g:A.A("m"),b:A.A("@"),i:A.A("a0s?")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_300",e:"endPart",h:b})})($__dart_deferred_initializers__,"qNI9o1F89VaNLZ4pX81TwkZ6/Ls=");