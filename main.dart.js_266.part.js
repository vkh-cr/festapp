((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_266",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={Zn:function Zn(d,e){this.a=d
this.b=e},
xy(d){return B.cMl(d)},
cMl(d){var w=0,v=A.l(x.l),u,t,s,r,q
var $async$xy=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:w=d!=null?3:5
break
case 3:t=$.uV().bZ("information").hm(0,y.a)
s=$.dW
s.toString
w=6
return A.c(t.cr("occasion",s).azt(0,"type","eq",d),$async$xy)
case 6:r=f
w=4
break
case 5:t=$.uV().bZ("information").hm(0,y.a)
s=$.dW
s.toString
s=t.cr("occasion",s)
w=7
return A.c(A.q4(s.w3(s.wu("or","(type.eq.,type.is.null)")),s.$ti.c),$async$xy)
case 7:r=f
case 4:q=A.b4(J.cj(r,new B.b2r(),x.b),!0,x.c)
C.b.eH(q,new B.b2s())
u=q
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$xy,v)},
b2r:function b2r(){},
b2s:function b2s(){},
bGQ(d,e){var w,v,u,t,s,r,q,p=A.bB("\\d+|\\D+",!0,!1,!1),o=p.uE(0,d),n=x.g
o=A.lL(o,new B.bGR(),A.p(o).h("v.E"),n)
w=A.J(o,!0,A.p(o).h("v.E"))
o=p.uE(0,e)
n=A.lL(o,new B.bGS(),A.p(o).h("v.E"),n)
v=A.J(n,!0,A.p(n).h("v.E"))
u=0
while(!0){o=w.length
if(!(u<o&&u<v.length))break
t=w[u]
s=v[u]
o=A.bB("^\\d+$",!0,!1,!1)
if(o.b.test(t)){o=A.bB("^\\d+$",!0,!1,!1)
o=o.b.test(s)}else o=!1
if(o){r=C.c.c_(A.dQ(t,null),A.dQ(s,null))
if(r!==0)return r}else{if(t===s)q=0
else q=t<s?-1:1
if(q!==0)return q}++u}return C.c.c_(o,v.length)},
bGR:function bGR(){},
bGS:function bGS(){},
alD(){var w=0,v=A.l(x.i),u,t,s,r,q,p
var $async$alD=A.h(function(d,e){if(d===1)return A.i(e,v)
while(true)switch(w){case 0:q=$.t_().bZ("occasions").hm(0,"data")
p=$.dW
p.toString
w=3
return A.c(q.cr("id",p).Ph(),$async$alD)
case 3:t=e
if(t!=null){s=J.u(t,"data")
if(s!=null&&J.u(s,"game")!=null){q=J.u(s,"game")
p=J.a3(q)
r=p.i(q,"start")!=null?A.fD(p.i(q,"start")):null
u=new B.Zn(r,p.i(q,"end")!=null?A.fD(p.i(q,"end")):null)
w=1
break}}u=null
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$alD,v)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[59],B)
B.Zn.prototype={
c9(){var w,v=this.a
v=v==null?null:v.i7()
w=this.b
return A.z(["start",v,"end",w==null?null:w.i7()],x.g,x.b)}}
var z=a.updateTypes(["S<B<fv>>([e?])"])
B.b2r.prototype={
$1(d){return A.apM(d)},
$S:119}
B.b2s.prototype={
$2(d,e){var w,v,u=d.w
if(u==null)u=0
w=e.w
v=C.c.c_(u,w==null?0:w)
if(v!==0)return v
u=d.d
u=u==null?null:u.toLowerCase()
if(u==null)u=""
w=e.d
w=w==null?null:w.toLowerCase()
return B.bGQ(u,w==null?"":w)},
$S:261}
B.bGR.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:349}
B.bGS.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:349};(function installTearOffs(){var w=a.installStaticTearOff
w(B,"cMk",0,function(){return[null]},["$1","$0"],["xy",function(){return B.xy(null)}],0,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.Zn,A.D)
v(A.bG,[B.b2r,B.bGR,B.bGS])
w(B.b2s,A.dg)})()
var y={a:"id,occasion,created_at,updated_at,is_hidden,title,order,type,data,information_hidden(*)"}
var x={c:A.x("fv"),l:A.x("B<fv>"),g:A.x("e"),b:A.x("@"),i:A.x("Zn?")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_266",e:"endPart",h:b})})($__dart_deferred_initializers__,"CslY5a1QDhqpWUtQOHZLCLTSJ3c=");