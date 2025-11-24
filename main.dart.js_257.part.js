((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={a5w:function a5w(d,e){this.a=d
this.b=e},
dB_(d){C.b.cK(d,new B.bk9())
return d},
EZ(d){return B.dB1(d)},
dB1(d){var w=0,v=A.n(x.l),u,t,s,r
var $async$EZ=A.i(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:w=d!=null?3:5
break
case 3:t=$.xW().cp("information").kQ(0,y.d)
s=A.da()
s.toString
w=6
return A.d(t.dT("occasion",s).aLz(0,"type","eq",d),$async$EZ)
case 6:r=f
w=4
break
case 5:t=$.xW().cp("information").kQ(0,y.d)
s=A.da()
s.toString
w=7
return A.d(t.dT("occasion",s).aPq("type.eq.,type.is.null"),$async$EZ)
case 7:r=f
case 4:u=B.dB_(A.aO(J.b_(r,new B.bki(),x.b),!0,x.c))
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$EZ,v)},
bk9:function bk9(){},
bki:function bki(){},
YC(d,e){var w,v,u,t,s,r,q,p=A.bG("\\d+|\\D+",!0,!1,!1),o=p.wk(0,d),n=x.g
o=A.lu(o,new B.c8e(),A.t(o).i("A.E"),n)
w=A.B(o,A.t(o).i("A.E"))
o=p.wk(0,e)
n=A.lu(o,new B.c8f(),A.t(o).i("A.E"),n)
v=A.B(n,A.t(n).i("A.E"))
u=0
for(;;){o=w.length
if(!(u<o&&u<v.length))break
t=w[u]
s=v[u]
o=A.bG("^\\d+$",!0,!1,!1)
if(o.b.test(t)){o=A.bG("^\\d+$",!0,!1,!1)
o=o.b.test(s)}else o=!1
if(o){r=C.c.b6(A.dj(t,null),A.dj(s,null))
if(r!==0)return r}else{if(t===s)q=0
else q=t<s?-1:1
if(q!==0)return q}++u}return C.c.b6(o,v.length)},
c8e:function c8e(){},
c8f:function c8f(){},
aw8(){var w=0,v=A.n(x.i),u,t,s,r,q,p
var $async$aw8=A.i(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:q=$.u4().cp("occasions").kQ(0,"data")
p=A.da()
p.toString
w=3
return A.d(q.dT("id",p).a3T(),$async$aw8)
case 3:t=e
if(t!=null){s=J.v(t,"data")
if(s!=null&&J.v(s,"game")!=null){q=J.v(s,"game")
p=J.a2(q)
r=p.h(q,"start")!=null?A.ef(p.h(q,"start")):null
u=new B.a5w(r,p.h(q,"end")!=null?A.ef(p.h(q,"end")):null)
w=1
break}}u=null
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$aw8,v)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[60],B)
B.a5w.prototype={
b_(){var w,v=this.a
v=v==null?null:v.fX()
w=this.b
return A.w(["start",v,"end",w==null?null:w.fX()],x.g,x.b)}}
var z=a.updateTypes(["W<E<f3>>([h?])"])
B.bk9.prototype={
$2(d,e){var w,v,u=d.w
if(u==null)u=0
w=e.w
v=C.c.b6(u,w==null?0:w)
if(v!==0)return v
u=d.d
u=u==null?null:u.toLowerCase()
if(u==null)u=""
w=e.d
w=w==null?null:w.toLowerCase()
return B.YC(u,w==null?"":w)},
$S:315}
B.bki.prototype={
$1(d){return A.aAK(d)},
$S:152}
B.c8e.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:399}
B.c8f.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:399};(function installTearOffs(){var w=a.installStaticTearOff
w(B,"dZV",0,function(){return[null]},["$1","$0"],["EZ",function(){return B.EZ(null)}],0,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.a5w,A.H)
w(B.bk9,A.ee)
v(A.cp,[B.bki,B.c8e,B.c8f])})()
var y={d:"id,occasion,created_at,updated_at,is_hidden,title,description,order,type,data,information_hidden(*)"}
var x={c:A.J("f3"),l:A.J("E<f3>"),g:A.J("h"),b:A.J("@"),i:A.J("a5w?")}};
(a=>{a["vC8kd20UQQzbBiMkwWyF29qX84Y="]=a.current})($__dart_deferred_initializers__);