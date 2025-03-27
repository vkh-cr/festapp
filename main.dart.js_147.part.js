((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_147",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,D,A={Am:function Am(d,e){this.a=d
this.b=e},
Ap(d,e,f,g,h,i,j,k,l,m,n){var x,w
if(g==null)x=null
else x=g
if(n!=null||j!=null){w=e==null?null:e.Qg(j,n)
if(w==null)w=B.ib(j,n)}else w=e
return new A.VM(d,m,x,i,w,l,f,h,null,k)},
Fw:function Fw(d,e){this.a=d
this.b=e},
HJ:function HJ(d,e){this.a=d
this.b=e},
VM:function VM(d,e,f,g,h,i,j,k,l,m){var _=this
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
aFe:function aFe(d,e){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.fM$=d
_.c_$=e
_.c=_.a=null},
bLB:function bLB(){},
bLC:function bLC(){},
bLD:function bLD(){},
bLE:function bLE(){},
bLF:function bLF(){},
bLG:function bLG(){},
bLH:function bLH(){},
bLI:function bLI(){},
cA8(){var x=new Float64Array(4)
x[3]=1
return new A.D9(x)},
D9:function D9(d){this.a=d}}
B=c[0]
C=c[2]
D=c[180]
A=a.updateHolder(c[146],A)
A.Am.prototype={
iU(d){return B.VI(this.a,this.b,d)}}
A.Fw.prototype={
iU(d){var x=B.tw(this.a,this.b,d)
x.toString
return x}}
A.HJ.prototype={
iU(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.ep(new Float64Array(3)),a3=new B.ep(new Float64Array(3)),a4=A.cA8(),a5=A.cA8(),a6=new B.ep(new Float64Array(3)),a7=new B.ep(new Float64Array(3))
this.a.ayJ(a2,a4,a6)
this.b.ayJ(a3,a5,a7)
x=1-a8
w=a2.u6(x).a5(0,a3.u6(a8))
v=a4.u6(x).a5(0,a5.u6(a8))
u=new Float64Array(4)
t=new A.D9(u)
t.dU(v)
t.Pj(0)
s=a6.u6(x).a5(0,a7.u6(a8))
x=new Float64Array(16)
v=new B.c9(x)
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
A.VM.prototype={
M(){return new A.aFe(null,null)}}
A.aFe.prototype={
v2(d){var x,w,v=this,u=v.CW
v.a.toString
x=y.b
v.CW=x.a(d.$3(u,null,new A.bLB()))
u=y.f
v.cx=u.a(d.$3(v.cx,v.a.x,new A.bLC()))
w=y.d
v.cy=w.a(d.$3(v.cy,v.a.y,new A.bLD()))
v.db=w.a(d.$3(v.db,v.a.z,new A.bLE()))
v.dx=y.e.a(d.$3(v.dx,v.a.Q,new A.bLF()))
v.dy=u.a(d.$3(v.dy,v.a.as,new A.bLG()))
u=v.fr
v.a.toString
v.fr=y.w.a(d.$3(u,null,new A.bLH()))
u=v.fx
v.a.toString
v.fx=x.a(d.$3(u,null,new A.bLI()))},
A(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.gkH(),n=q.CW
n=n==null?p:n.ap(0,o.gp(0))
x=q.cx
x=x==null?p:x.ap(0,o.gp(0))
w=q.cy
w=w==null?p:w.ap(0,o.gp(0))
v=q.db
v=v==null?p:v.ap(0,o.gp(0))
u=q.dx
u=u==null?p:u.ap(0,o.gp(0))
t=q.dy
t=t==null?p:t.ap(0,o.gp(0))
s=q.fr
s=s==null?p:s.ap(0,o.gp(0))
r=q.fx
r=r==null?p:r.ap(0,o.gp(0))
return B.aC(n,q.a.r,C.k,p,u,w,v,p,t,x,s,r,p)}}
A.D9.prototype={
dU(d){var x=d.a,w=this.a,v=x[0]
w.$flags&2&&B.B(w)
w[0]=v
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
aK_(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
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
u6(d){var x=new Float64Array(4),w=new A.D9(x)
w.dU(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
aK(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gbKP(),a1=a0.i(0,3),a2=a0.i(0,2),a3=a0.i(0,1),a4=a0.i(0,0)
h=C.d.aK(g,a4)
x=C.d.aK(d,a1)
w=C.d.aK(e,a2)
v=C.d.aK(f,a3)
u=C.d.aK(g,a3)
t=C.d.aK(e,a1)
s=C.d.aK(f,a4)
r=C.d.aK(d,a2)
q=C.d.aK(g,a2)
p=C.d.aK(f,a1)
o=C.d.aK(d,a3)
n=C.d.aK(e,a4)
m=C.d.aK(g,a1)
l=C.d.aK(d,a4)
k=C.d.aK(e,a3)
j=C.d.aK(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.D9(i)},
a5(d,e){var x=new A.D9(new Float64Array(4))
x.dU(this)
x.t(0,e)
return x},
a4(d,e){var x,w=new Float64Array(4),v=new A.D9(w)
v.dU(this)
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
var z=a.updateTypes(["Am(@)","qW(@)","Fw(@)","HJ(@)"])
A.bLB.prototype={
$1(d){return new A.Am(y.k.a(d),null)},
$S:z+0}
A.bLC.prototype={
$1(d){return new D.qW(y.m.a(d),null)},
$S:z+1}
A.bLD.prototype={
$1(d){return new B.xV(y.r.a(d),null)},
$S:232}
A.bLE.prototype={
$1(d){return new B.xV(y.r.a(d),null)},
$S:232}
A.bLF.prototype={
$1(d){return new A.Fw(y.a.a(d),null)},
$S:z+2}
A.bLG.prototype={
$1(d){return new D.qW(y.m.a(d),null)},
$S:z+1}
A.bLH.prototype={
$1(d){return new A.HJ(y.E.a(d),null)},
$S:z+3}
A.bLI.prototype={
$1(d){return new A.Am(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.aD,[A.Am,A.Fw,A.HJ])
w(A.VM,B.yi)
w(A.aFe,B.xq)
x(B.bA,[A.bLB,A.bLC,A.bLD,A.bLE,A.bLF,A.bLG,A.bLH,A.bLI])
w(A.D9,B.E)})()
B.bm(b.typeUniverse,JSON.parse('{"Am":{"aD":["nj?"],"aY":["nj?"],"aY.T":"nj?","aD.T":"nj?"},"Fw":{"aD":["aa"],"aY":["aa"],"aY.T":"aa","aD.T":"aa"},"HJ":{"aD":["c9"],"aY":["c9"],"aY.T":"c9","aD.T":"c9"},"VM":{"F":[],"d":[]},"aFe":{"K":["VM"]}}'))
var y=(function rtii(){var x=B.z
return{k:x("nj"),a:x("aa"),r:x("ns"),m:x("fb"),E:x("c9"),b:x("Am?"),e:x("Fw?"),d:x("xV?"),f:x("qW?"),w:x("HJ?")}})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_147",e:"endPart",h:b})})($__dart_deferred_initializers__,"nmCY7pGkeqXhlTvF+FVWcEEVEz4=");