((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_133",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={bCk:function bCk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},bCl:function bCl(){},Si:function Si(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},a5X:function a5X(){},Sh:function Sh(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.HG$=d
_.fu$=e
_.aQ$=f
_.a=null},ayv:function ayv(d,e,f,g,h,i,j){var _=this
_.el=d
_.aK=e
_.bb=f
_.ey$=g
_.al$=h
_.eD$=i
_.b=_.fx=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=j
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null},
K1(d,e){return new A.aAr(e,d,null)},
aAr:function aAr(d,e,f){this.f=d
this.d=e
this.a=f}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[154],A)
D=c[189]
A.bCk.prototype={
aIe(d){var x=this.c
return d.Gl(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.b.c7(B.a(["scrollOffset: "+B.q(x.a),"crossAxisOffset: "+B.q(x.b),"mainAxisExtent: "+B.q(x.c),"crossAxisExtent: "+B.q(x.d)],y.x),", ")+")"}}
A.bCl.prototype={}
A.Si.prototype={
aII(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.f8(d/x)-1)
return 0},
b3x(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
a13(d){var x=this,w=x.a,v=C.c.an(d,w)
return new A.bCk(C.c.hy(d,w)*x.b,x.b3x(v*x.c),x.d,x.e)},
ayw(d){var x
if(d===0)return 0
x=this.b
return x*(C.c.hy(d-1,this.a)+1)-(x-this.d)}}
A.a5X.prototype={}
A.Sh.prototype={
j(d){return"crossAxisOffset="+B.q(this.w)+"; "+this.aQi(0)}}
A.ayv.prototype={
j1(d){if(!(d.b instanceof A.Sh))d.b=new A.Sh(!1,null,null)},
saJh(d){var x=this
if(x.el===d)return
if(B.a_(d)!==B.a_(x.el)||d.lu(x.el))x.ab()
x.el=d},
GE(d){var x=d.b
x.toString
x=y.t.a(x).w
x.toString
return x},
d4(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=y.z.a(B.Y.prototype.gae.call(a6)),a9=a6.aK
a9.R8=!1
x=a8.d
w=x+a8.z
v=w+a8.Q
u=a6.el.JM(a8)
t=u.b
s=t>1e-10?u.a*C.d.hy(w,t):0
r=isFinite(v)?u.aII(v):a7
if(a6.al$!=null){q=a6.axC(s)
a6.Cc(q,r!=null?a6.axD(r):0)}else a6.Cc(0,0)
p=u.a13(s)
if(a6.al$==null)if(!a6.a85(s,p.a)){o=u.ayw(a9.gGD())
a6.fx=D.pl(a7,!1,a7,a7,o,0,0,0,o,a7)
a9.Cu()
return}n=p.a
m=n+p.c
t=a6.al$
t.toString
t=t.b
t.toString
l=y.c
t=l.a(t).b
t.toString
k=t-1
t=y.t
j=a7
for(;k>=s;--k){i=u.a13(k)
h=i.c
g=a6.aC1(a8.Gl(i.d,h,h))
f=g.b
f.toString
t.a(f)
e=i.a
f.a=e
f.w=i.b
if(j==null)j=g
m=Math.max(m,e+h)}if(j==null){h=a6.al$
h.toString
h.m4(p.aIe(a8))
j=a6.al$
h=j.b
h.toString
t.a(h)
h.a=n
h.w=p.b}h=j.b
h.toString
h=l.a(h).b
h.toString
k=h+1
h=B.t(a6).h("aE.1")
f=r!=null
while(!0){if(!(!f||k<=r)){d=!1
break}i=u.a13(k)
e=i.c
a0=a8.Gl(i.d,e,e)
a1=j.b
a1.toString
g=h.a(a1).aQ$
if(g!=null){a1=g.b
a1.toString
a1=l.a(a1).b
a1.toString
a1=a1!==k}else a1=!0
if(a1){g=a6.aC_(a0,j)
if(g==null){d=!0
break}}else g.m4(a0)
a1=g.b
a1.toString
t.a(a1)
a2=i.a
a1.a=a2
a1.w=i.b
m=Math.max(m,a2+e);++k
j=g}t=a6.eD$
t.toString
t=t.b
t.toString
t=l.a(t).b
t.toString
a3=d?m:a9.aaX(a8,s,t,n,m)
a4=a6.Gw(a8,Math.min(x,n),m)
a5=a6.Nn(a8,n,m)
a6.fx=D.pl(a5,a3>a4||x>0||a8.f!==0,a7,a7,a3,0,a4,0,a3,a7)
if(a3===m)a9.R8=!0
a9.Cu()}}
A.aAr.prototype={
ba(d){var x=new A.ayv(this.f,y.v.a(d),B.K(y.e,y.g),0,null,null,B.aG(y.d))
x.bc()
return x},
bj(d,e){e.saJh(this.f)},
aaW(d,e,f,g,h){var x
this.aQj(d,e,f,g,h)
x=this.f.JM(d).ayw(this.d.gHt())
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.G,[A.bCk,A.bCl,A.a5X])
w(A.Si,A.bCl)
w(A.Sh,D.jR)
w(A.ayv,D.uC)
w(A.aAr,D.rS)})()
B.br(b.typeUniverse,JSON.parse('{"Sh":{"jR":[],"zn":[],"hO":["X"],"uj":[],"fj":[]},"ayv":{"uC":[],"eZ":[],"aE":["X","jR"],"Y":[],"aP":[],"aE.1":"jR","aE.0":"X"},"aAr":{"rS":[],"aQ":[],"e":[]}}'))
var y={d:B.B("dV"),x:B.B("u<h>"),g:B.B("X"),z:B.B("o1"),t:B.B("Sh"),v:B.B("DN"),c:B.B("jR"),e:B.B("f")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_133",e:"endPart",h:b})})($__dart_deferred_initializers__,"CBJVwq+C6eA/i6CQcyyUtpC6Vdw=");