((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_206",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={Xk:function Xk(d,e){this.a=d
this.b=e},
wH(d){return B.cDC(d)},
cDC(d){var w=0,v=A.l(x.l),u,t,s,r,q
var $async$wH=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:w=d!=null?3:5
break
case 3:t=$.uc().bU("information").fZ(0,y.a)
s=$.dE
s.toString
w=6
return A.c(t.ci("occasion",s).awa(0,"type","eq",d),$async$wH)
case 6:r=f
w=4
break
case 5:t=$.uc().bU("information").fZ(0,y.a)
s=$.dE
s.toString
s=t.ci("occasion",s)
w=7
return A.c(A.pt(s.vl(s.vG("or","(type.eq.,type.is.null)")),s.$ti.c),$async$wH)
case 7:r=f
case 4:q=A.b5(J.cc(r,new B.b_u(),x.b),!0,x.c)
C.b.eV(q,new B.b_v())
u=q
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$wH,v)},
b_u:function b_u(){},
b_v:function b_v(){},
bC3(d,e){var w,v,u,t,s,r,q,p=A.bx("\\d+|\\D+",!0,!1,!1),o=p.u2(0,d),n=x.g
o=A.ma(o,new B.bC4(),A.r(o).h("u.E"),n)
w=A.H(o,!0,A.r(o).h("u.E"))
o=p.u2(0,e)
n=A.ma(o,new B.bC5(),A.r(o).h("u.E"),n)
v=A.H(n,!0,A.r(n).h("u.E"))
u=0
while(!0){o=w.length
if(!(u<o&&u<v.length))break
t=w[u]
s=v[u]
o=A.bx("^\\d+$",!0,!1,!1)
if(o.b.test(t)){o=A.bx("^\\d+$",!0,!1,!1)
o=o.b.test(s)}else o=!1
if(o){r=C.c.c7(A.dG(t,null),A.dG(s,null))
if(r!==0)return r}else{if(t===s)q=0
else q=t<s?-1:1
if(q!==0)return q}++u}return C.c.c7(o,v.length)},
bC4:function bC4(){},
bC5:function bC5(){},
aj5(){var w=0,v=A.l(x.i),u,t,s,r,q,p
var $async$aj5=A.h(function(d,e){if(d===1)return A.i(e,v)
while(true)switch(w){case 0:q=$.T_().bU("occasions").fZ(0,"data")
p=$.dE
p.toString
w=3
return A.c(q.ci("id",p).H0(),$async$aj5)
case 3:t=e
if(t!=null){s=J.t(t,"data")
if(s!=null&&J.t(s,"game")!=null){q=J.t(s,"game")
p=J.a1(q)
r=p.i(q,"start")!=null?A.fB(p.i(q,"start")):null
u=new B.Xk(r,p.i(q,"end")!=null?A.fB(p.i(q,"end")):null)
w=1
break}}u=null
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$aj5,v)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[55],B)
B.Xk.prototype={
c4(){var w,v=this.a
v=v==null?null:v.fY()
w=this.b
return A.y(["start",v,"end",w==null?null:w.fY()],x.g,x.b)}}
var z=a.updateTypes(["Q<x<fg>>([f?])"])
B.b_u.prototype={
$1(d){return A.an1(d)},
$S:104}
B.b_v.prototype={
$2(d,e){var w,v,u=d.w
if(u==null)u=0
w=e.w
v=C.c.c7(u,w==null?0:w)
if(v!==0)return v
u=d.d
u=u==null?null:u.toLowerCase()
if(u==null)u=""
w=e.d
w=w==null?null:w.toLowerCase()
return B.bC3(u,w==null?"":w)},
$S:204}
B.bC4.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:331}
B.bC5.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:331};(function installTearOffs(){var w=a.installStaticTearOff
w(B,"cDB",0,function(){return[null]},["$1","$0"],["wH",function(){return B.wH(null)}],0,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.Xk,A.A)
v(A.bM,[B.b_u,B.bC4,B.bC5])
w(B.b_v,A.dd)})()
var y={a:"id,occasion,created_at,updated_at,is_hidden,title,order,type,data,information_hidden(*)"}
var x={c:A.z("fg"),l:A.z("x<fg>"),g:A.z("f"),b:A.z("@"),i:A.z("Xk?")};(function lazyInitializers(){var w=a.lazyFinal
w($,"d1H","T_",()=>$.j0().gqf(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_206",e:"endPart",h:b})})($__dart_deferred_initializers__,"FE1A1cVmYNg5OTTfn9oQrcO+Xp0=");