((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={a5I:function a5I(d,e){this.a=d
this.b=e},
dCR(d){C.b.cE(d,new B.bkB())
return d},
F2(d){return B.dCT(d)},
dCT(d){var w=0,v=A.m(x.l),u,t,s,r
var $async$F2=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=d!=null?3:5
break
case 3:t=$.xY().cs("information").kR(0,y.d)
s=A.dd()
s.toString
w=6
return A.d(t.e0("occasion",s).aLY(0,"type","eq",d),$async$F2)
case 6:r=f
w=4
break
case 5:t=$.xY().cs("information").kR(0,y.d)
s=A.dd()
s.toString
w=7
return A.d(t.e0("occasion",s).aPP("type.eq.,type.is.null"),$async$F2)
case 7:r=f
case 4:u=B.dCR(A.aN(J.b2(r,new B.bkK(),x.b),!0,x.c))
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$F2,v)},
bkB:function bkB(){},
bkK:function bkK(){},
PD(d,e){var w,v,u,t,s,r,q,p=A.bH("\\d+|\\D+",!0,!1,!1),o=p.wk(0,d),n=x.g
o=A.kF(o,new B.c8T(),A.t(o).i("B.E"),n)
w=A.C(o,A.t(o).i("B.E"))
o=p.wk(0,e)
n=A.kF(o,new B.c8U(),A.t(o).i("B.E"),n)
v=A.C(n,A.t(n).i("B.E"))
u=0
for(;;){o=w.length
if(!(u<o&&u<v.length))break
t=w[u]
s=v[u]
o=A.bH("^\\d+$",!0,!1,!1)
if(o.b.test(t)){o=A.bH("^\\d+$",!0,!1,!1)
o=o.b.test(s)}else o=!1
if(o){r=C.c.b7(A.dk(t,null),A.dk(s,null))
if(r!==0)return r}else{if(t===s)q=0
else q=t<s?-1:1
if(q!==0)return q}++u}return C.c.b7(o,v.length)},
c8T:function c8T(){},
c8U:function c8U(){},
awu(){var w=0,v=A.m(x.i),u,t,s,r,q,p
var $async$awu=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:q=$.u6().cs("occasions").kR(0,"data")
p=A.dd()
p.toString
w=3
return A.d(q.e0("id",p).a43(),$async$awu)
case 3:t=e
if(t!=null){s=J.u(t,"data")
if(s!=null&&J.u(s,"game")!=null){q=J.u(s,"game")
p=J.a1(q)
r=p.h(q,"start")!=null?A.ek(p.h(q,"start")):null
u=new B.a5I(r,p.h(q,"end")!=null?A.ek(p.h(q,"end")):null)
w=1
break}}u=null
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$awu,v)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[60],B)
B.a5I.prototype={
b_(){var w,v=this.a
v=v==null?null:v.fX()
w=this.b
return A.w(["start",v,"end",w==null?null:w.fX()],x.g,x.b)}}
var z=a.updateTypes(["W<D<f6>>([h?])"])
B.bkB.prototype={
$2(d,e){var w,v,u=d.w
if(u==null)u=0
w=e.w
v=C.c.b7(u,w==null?0:w)
if(v!==0)return v
u=d.d
u=u==null?null:u.toLowerCase()
if(u==null)u=""
w=e.d
w=w==null?null:w.toLowerCase()
return B.PD(u,w==null?"":w)},
$S:302}
B.bkK.prototype={
$1(d){return A.aB5(d)},
$S:148}
B.c8T.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:492}
B.c8U.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:492};(function installTearOffs(){var w=a.installStaticTearOff
w(B,"e0O",0,function(){return[null]},["$1","$0"],["F2",function(){return B.F2(null)}],0,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.a5I,A.I)
w(B.bkB,A.ej)
v(A.co,[B.bkK,B.c8T,B.c8U])})()
var y={d:"id,occasion,created_at,updated_at,is_hidden,title,description,order,type,data,information_hidden(*)"}
var x={c:A.J("f6"),l:A.J("D<f6>"),g:A.J("h"),b:A.J("@"),i:A.J("a5I?")}};
(a=>{a["izCBl5bZ1LX/eWgcvTRwMsM8P7Q="]=a.current})($__dart_deferred_initializers__);