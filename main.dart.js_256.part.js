((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_256",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={a2e:function a2e(d,e){this.a=d
this.b=e},
dft(d){C.b.dT(d,new B.bbs())
return d},
zl(d){return B.dfx(d)},
dfx(d){var w=0,v=A.m(x.l),u,t,s,r
var $async$zl=A.h(function(e,f){if(e===1)return A.j(f,v)
while(true)switch(w){case 0:w=d!=null?3:5
break
case 3:t=$.wG().c8("information").j7(0,y.d)
s=A.df()
s.toString
w=6
return A.d(t.dl("occasion",s).aeG(0,"type","eq",d),$async$zl)
case 6:r=f
w=4
break
case 5:t=$.wG().c8("information").j7(0,y.d)
s=A.df()
s.toString
w=7
return A.d(t.dl("occasion",s).aIS("type.eq.,type.is.null"),$async$zl)
case 7:r=f
case 4:u=B.dft(A.aX(J.bh(r,new B.bbB(),x.b),!0,x.c))
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$zl,v)},
bbs:function bbs(){},
bbB:function bbB(){},
bW9(d,e){var w,v,u,t,s,r,q,p=A.bC("\\d+|\\D+",!0,!1,!1),o=p.vm(0,d),n=x.g
o=A.lK(o,new B.bWa(),A.t(o).i("w.E"),n)
w=A.C(o,A.t(o).i("w.E"))
o=p.vm(0,e)
n=A.lK(o,new B.bWb(),A.t(o).i("w.E"),n)
v=A.C(n,A.t(n).i("w.E"))
u=0
while(!0){o=w.length
if(!(u<o&&u<v.length))break
t=w[u]
s=v[u]
o=A.bC("^\\d+$",!0,!1,!1)
if(o.b.test(t)){o=A.bC("^\\d+$",!0,!1,!1)
o=o.b.test(s)}else o=!1
if(o){r=C.c.bo(A.dp(t,null),A.dp(s,null))
if(r!==0)return r}else{if(t===s)q=0
else q=t<s?-1:1
if(q!==0)return q}++u}return C.c.bo(o,v.length)},
bWa:function bWa(){},
bWb:function bWb(){},
arf(){var w=0,v=A.m(x.i),u,t,s,r,q,p
var $async$arf=A.h(function(d,e){if(d===1)return A.j(e,v)
while(true)switch(w){case 0:q=$.uu().c8("occasions").j7(0,"data")
p=A.df()
p.toString
w=3
return A.d(q.dl("id",p).Re(),$async$arf)
case 3:t=e
if(t!=null){s=J.v(t,"data")
if(s!=null&&J.v(s,"game")!=null){q=J.v(s,"game")
p=J.a1(q)
r=p.h(q,"start")!=null?A.em(p.h(q,"start")):null
u=new B.a2e(r,p.h(q,"end")!=null?A.em(p.h(q,"end")):null)
w=1
break}}u=null
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$arf,v)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[55],B)
B.a2e.prototype={
b7(){var w,v=this.a
v=v==null?null:v.fH()
w=this.b
return A.y(["start",v,"end",w==null?null:w.fH()],x.g,x.b)}}
var z=a.updateTypes(["X<B<eK>>([i?])"])
B.bbs.prototype={
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
return B.bW9(u,w==null?"":w)},
$S:222}
B.bbB.prototype={
$1(d){return A.avD(d)},
$S:131}
B.bWa.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:458}
B.bWb.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:458};(function installTearOffs(){var w=a.installStaticTearOff
w(B,"dEn",0,function(){return[null]},["$1","$0"],["zl",function(){return B.zl(null)}],0,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.a2e,A.H)
w(B.bbs,A.ev)
v(A.ce,[B.bbB,B.bWa,B.bWb])})()
var y={d:"id,occasion,created_at,updated_at,is_hidden,title,description,order,type,data,information_hidden(*)"}
var x={c:A.E("eK"),l:A.E("B<eK>"),g:A.E("i"),b:A.E("@"),i:A.E("a2e?")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_256",e:"endPart",h:b})})($__dart_deferred_initializers__,"n0db6EDp2qlVQDiYkNRFbBZA4jA=");