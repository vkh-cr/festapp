((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_223",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={XV:function XV(d,e){this.a=d
this.b=e},
wS(d){return B.cFu(d)},
cFu(d){var w=0,v=A.l(x.l),u,t,s,r,q
var $async$wS=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:w=d!=null?3:5
break
case 3:t=$.uo().bX("information").h6(0,y.a)
s=$.dH
s.toString
w=6
return A.c(t.cl("occasion",s).axs(0,"type","eq",d),$async$wS)
case 6:r=f
w=4
break
case 5:t=$.uo().bX("information").h6(0,y.a)
s=$.dH
s.toString
s=t.cl("occasion",s)
w=7
return A.c(A.pG(s.vK(s.w5("or","(type.eq.,type.is.null)")),s.$ti.c),$async$wS)
case 7:r=f
case 4:q=A.b4(J.cb(r,new B.b0t(),x.b),!0,x.c)
C.b.f0(q,new B.b0u())
u=q
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$wS,v)},
b0t:function b0t(){},
b0u:function b0u(){},
bDm(d,e){var w,v,u,t,s,r,q,p=A.by("\\d+|\\D+",!0,!1,!1),o=p.ui(0,d),n=x.g
o=A.md(o,new B.bDn(),A.q(o).h("u.E"),n)
w=A.H(o,!0,A.q(o).h("u.E"))
o=p.ui(0,e)
n=A.md(o,new B.bDo(),A.q(o).h("u.E"),n)
v=A.H(n,!0,A.q(n).h("u.E"))
u=0
while(!0){o=w.length
if(!(u<o&&u<v.length))break
t=w[u]
s=v[u]
o=A.by("^\\d+$",!0,!1,!1)
if(o.b.test(t)){o=A.by("^\\d+$",!0,!1,!1)
o=o.b.test(s)}else o=!1
if(o){r=C.c.c0(A.dK(t,null),A.dK(s,null))
if(r!==0)return r}else{if(t===s)q=0
else q=t<s?-1:1
if(q!==0)return q}++u}return C.c.c0(o,v.length)},
bDn:function bDn(){},
bDo:function bDo(){},
ajP(){var w=0,v=A.l(x.i),u,t,s,r,q,p
var $async$ajP=A.h(function(d,e){if(d===1)return A.i(e,v)
while(true)switch(w){case 0:q=$.Tr().bX("occasions").h6(0,"data")
p=$.dH
p.toString
w=3
return A.c(q.cl("id",p).HA(),$async$ajP)
case 3:t=e
if(t!=null){s=J.t(t,"data")
if(s!=null&&J.t(s,"game")!=null){q=J.t(s,"game")
p=J.a1(q)
r=p.i(q,"start")!=null?A.fq(p.i(q,"start")):null
u=new B.XV(r,p.i(q,"end")!=null?A.fq(p.i(q,"end")):null)
w=1
break}}u=null
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$ajP,v)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[56],B)
B.XV.prototype={
c1(){var w,v=this.a
v=v==null?null:v.h5()
w=this.b
return A.x(["start",v,"end",w==null?null:w.h5()],x.g,x.b)}}
var z=a.updateTypes(["Q<z<fk>>([e?])"])
B.b0t.prototype={
$1(d){return A.anU(d)},
$S:112}
B.b0u.prototype={
$2(d,e){var w,v,u=d.w
if(u==null)u=0
w=e.w
v=C.c.c0(u,w==null?0:w)
if(v!==0)return v
u=d.d
u=u==null?null:u.toLowerCase()
if(u==null)u=""
w=e.d
w=w==null?null:w.toLowerCase()
return B.bDm(u,w==null?"":w)},
$S:253}
B.bDn.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:336}
B.bDo.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:336};(function installTearOffs(){var w=a.installStaticTearOff
w(B,"cFt",0,function(){return[null]},["$1","$0"],["wS",function(){return B.wS(null)}],0,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.XV,A.B)
v(A.bJ,[B.b0t,B.bDn,B.bDo])
w(B.b0u,A.de)})()
var y={a:"id,occasion,created_at,updated_at,is_hidden,title,order,type,data,information_hidden(*)"}
var x={c:A.y("fk"),l:A.y("z<fk>"),g:A.y("e"),b:A.y("@"),i:A.y("XV?")};(function lazyInitializers(){var w=a.lazyFinal
w($,"d4_","Tr",()=>$.j7().gqr(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_223",e:"endPart",h:b})})($__dart_deferred_initializers__,"BaJLlf/Nr+X3IGDTDS7F7c/3cN0=");