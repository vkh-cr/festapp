((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_150",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,D,A={Ao:function Ao(d,e){this.a=d
this.b=e},
Ar(d,e,f,g,h,i,j,k,l,m,n){var x,w
if(g==null)x=null
else x=g
if(n!=null||j!=null){w=e==null?null:e.Qg(j,n)
if(w==null)w=B.ib(j,n)}else w=e
return new A.VS(d,m,x,i,w,l,f,h,null,k)},
Fx:function Fx(d,e){this.a=d
this.b=e},
HK:function HK(d,e){this.a=d
this.b=e},
VS:function VS(d,e,f,g,h,i,j,k,l,m){var _=this
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.as=i
_.c=j
_.d=k
_.e=l
_.a=m},
aFu:function aFu(d,e){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.fN$=d
_.c0$=e
_.c=_.a=null},
bLU:function bLU(){},
bLV:function bLV(){},
bLW:function bLW(){},
bLX:function bLX(){},
bLY:function bLY(){},
bLZ:function bLZ(){},
bM_:function bM_(){},
bM0:function bM0(){},
cAL(){var x=new Float64Array(4)
x[3]=1
return new A.Da(x)},
Da:function Da(d){this.a=d}}
B=c[0]
C=c[2]
D=c[181]
A=a.updateHolder(c[147],A)
A.Ao.prototype={
iW(d){return B.VO(this.a,this.b,d)}}
A.Fx.prototype={
iW(d){var x=B.ty(this.a,this.b,d)
x.toString
return x}}
A.HK.prototype={
iW(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.ep(new Float64Array(3)),a3=new B.ep(new Float64Array(3)),a4=A.cAL(),a5=A.cAL(),a6=new B.ep(new Float64Array(3)),a7=new B.ep(new Float64Array(3))
this.a.ayM(a2,a4,a6)
this.b.ayM(a3,a5,a7)
x=1-a8
w=a2.u6(x).a6(0,a3.u6(a8))
v=a4.u6(x).a6(0,a5.u6(a8))
u=new Float64Array(4)
t=new A.Da(u)
t.dV(v)
t.Pj(0)
s=a6.u6(x).a6(0,a7.u6(a8))
x=new Float64Array(16)
v=new B.ca(x)
r=u[0]
q=u[1]
p=u[2]
o=u[3]
n=r+r
m=q+q
l=p+p
k=r*n
j=r*m
i=r*l
h=q*m
g=q*l
f=p*l
e=o*n
d=o*m
a0=o*l
a1=w.a
x[0]=1-(h+f)
x[1]=j+a0
x[2]=i-d
x[3]=0
x[4]=j-a0
x[5]=1-(k+f)
x[6]=g+e
x[7]=0
x[8]=i+d
x[9]=g-e
x[10]=1-(k+h)
x[11]=0
x[12]=a1[0]
x[13]=a1[1]
x[14]=a1[2]
x[15]=1
v.dN(0,s)
return v}}
A.VS.prototype={
M(){return new A.aFu(null,null)}}
A.aFu.prototype={
v3(d){var x,w,v=this,u=v.CW
v.a.toString
x=y.b
v.CW=x.a(d.$3(u,null,new A.bLU()))
u=y.f
v.cx=u.a(d.$3(v.cx,v.a.x,new A.bLV()))
w=y.d
v.cy=w.a(d.$3(v.cy,v.a.y,new A.bLW()))
v.db=w.a(d.$3(v.db,v.a.z,new A.bLX()))
v.dx=y.e.a(d.$3(v.dx,v.a.Q,new A.bLY()))
v.dy=u.a(d.$3(v.dy,v.a.as,new A.bLZ()))
u=v.fr
v.a.toString
v.fr=y.w.a(d.$3(u,null,new A.bM_()))
u=v.fx
v.a.toString
v.fx=x.a(d.$3(u,null,new A.bM0()))},
A(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.gkI(),n=q.CW
n=n==null?p:n.av(0,o.gp(0))
x=q.cx
x=x==null?p:x.av(0,o.gp(0))
w=q.cy
w=w==null?p:w.av(0,o.gp(0))
v=q.db
v=v==null?p:v.av(0,o.gp(0))
u=q.dx
u=u==null?p:u.av(0,o.gp(0))
t=q.dy
t=t==null?p:t.av(0,o.gp(0))
s=q.fr
s=s==null?p:s.av(0,o.gp(0))
r=q.fx
r=r==null?p:r.av(0,o.gp(0))
return B.aC(n,q.a.r,C.k,p,u,w,v,p,t,x,s,r,p)}}
A.Da.prototype={
dV(d){var x=d.a,w=this.a,v=x[0]
w.$flags&2&&B.B(w)
w[0]=v
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
aK3(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
if(o>0){x=Math.sqrt(o+1)
r=this.a
r.$flags&2&&B.B(r)
r[3]=x*0.5
x=0.5/x
r[0]=(s[5]-s[7])*x
r[1]=(s[6]-s[2])*x
r[2]=(s[1]-s[3])*x}else{if(r<q)w=q<p?2:1
else w=r<p?2:0
v=(w+1)%3
u=(w+2)%3
r=w*3
q=v*3
p=u*3
x=Math.sqrt(s[r+w]-s[q+v]-s[p+u]+1)
t=this.a
t.$flags&2&&B.B(t)
t[w]=x*0.5
x=0.5/x
t[3]=(s[q+u]-s[p+v])*x
t[v]=(s[r+v]+s[q+w])*x
t[u]=(s[r+u]+s[p+w])*x}},
Pj(d){var x,w,v,u=Math.sqrt(this.gP2())
if(u===0)return 0
x=1/u
w=this.a
v=w[0]
w.$flags&2&&B.B(w)
w[0]=v*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return u},
gP2(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gu(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
t(d,e){var x=e.a,w=this.a,v=w[0],u=x[0]
w.$flags&2&&B.B(w)
w[0]=v+u
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]},
u6(d){var x=new Float64Array(4),w=new A.Da(x)
w.dV(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
aO(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gbL3(),a1=a0.i(0,3),a2=a0.i(0,2),a3=a0.i(0,1),a4=a0.i(0,0)
h=C.d.aO(g,a4)
x=C.d.aO(d,a1)
w=C.d.aO(e,a2)
v=C.d.aO(f,a3)
u=C.d.aO(g,a3)
t=C.d.aO(e,a1)
s=C.d.aO(f,a4)
r=C.d.aO(d,a2)
q=C.d.aO(g,a2)
p=C.d.aO(f,a1)
o=C.d.aO(d,a3)
n=C.d.aO(e,a4)
m=C.d.aO(g,a1)
l=C.d.aO(d,a4)
k=C.d.aO(e,a3)
j=C.d.aO(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.Da(i)},
a6(d,e){var x=new A.Da(new Float64Array(4))
x.dV(this)
x.t(0,e)
return x},
a5(d,e){var x,w=new Float64Array(4),v=new A.Da(w)
v.dV(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
i(d,e){return this.a[e]},
m(d,e,f){var x=this.a
x.$flags&2&&B.B(x)
x[e]=f},
j(d){var x=this.a
return B.o(x[0])+", "+B.o(x[1])+", "+B.o(x[2])+" @ "+B.o(x[3])}}
var z=a.updateTypes(["Ao(@)","r_(@)","Fx(@)","HK(@)"])
A.bLU.prototype={
$1(d){return new A.Ao(y.k.a(d),null)},
$S:z+0}
A.bLV.prototype={
$1(d){return new D.r_(y.m.a(d),null)},
$S:z+1}
A.bLW.prototype={
$1(d){return new B.xX(y.r.a(d),null)},
$S:348}
A.bLX.prototype={
$1(d){return new B.xX(y.r.a(d),null)},
$S:348}
A.bLY.prototype={
$1(d){return new A.Fx(y.a.a(d),null)},
$S:z+2}
A.bLZ.prototype={
$1(d){return new D.r_(y.m.a(d),null)},
$S:z+1}
A.bM_.prototype={
$1(d){return new A.HK(y.E.a(d),null)},
$S:z+3}
A.bM0.prototype={
$1(d){return new A.Ao(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.aD,[A.Ao,A.Fx,A.HK])
w(A.VS,B.yk)
w(A.aFu,B.xs)
x(B.bC,[A.bLU,A.bLV,A.bLW,A.bLX,A.bLY,A.bLZ,A.bM_,A.bM0])
w(A.Da,B.E)})()
B.bl(b.typeUniverse,JSON.parse('{"Ao":{"aD":["nl?"],"aY":["nl?"],"aY.T":"nl?","aD.T":"nl?"},"Fx":{"aD":["aa"],"aY":["aa"],"aY.T":"aa","aD.T":"aa"},"HK":{"aD":["ca"],"aY":["ca"],"aY.T":"ca","aD.T":"ca"},"VS":{"F":[],"d":[]},"aFu":{"K":["VS"]}}'))
var y=(function rtii(){var x=B.z
return{k:x("nl"),a:x("aa"),r:x("nu"),m:x("fb"),E:x("ca"),b:x("Ao?"),e:x("Fx?"),d:x("xX?"),f:x("r_?"),w:x("HK?")}})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_150",e:"endPart",h:b})})($__dart_deferred_initializers__,"BGju24agFTLWflx2Fyntv4YrJ/4=");