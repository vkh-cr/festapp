((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_142",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={yY:function yY(d,e){this.a=d
this.b=e},
SF(d,e,f,g,h,i,j,k,l){var x,w
if(f==null)x=null
else x=f
if(l!=null||h!=null)w=B.hP(h,l)
else w=null
return new A.SE(d,k,x,w,j,e,g,null,i)},
DL:function DL(d,e){this.a=d
this.b=e},
FL:function FL(d,e){this.a=d
this.b=e},
SE:function SE(d,e,f,g,h,i,j,k,l){var _=this
_.r=d
_.x=e
_.y=f
_.Q=g
_.as=h
_.c=i
_.d=j
_.e=k
_.a=l},
aAs:function aAs(d,e){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.fG$=d
_.bS$=e
_.c=_.a=null},
bBv:function bBv(){},
bBw:function bBw(){},
bBx:function bBx(){},
bBy:function bBy(){},
bBz:function bBz(){},
bBA:function bBA(){},
bBB:function bBB(){},
bBC:function bBC(){},
ciZ(){var x=new Float64Array(4)
x[3]=1
return new A.Bz(x)},
Bz:function Bz(d){this.a=d}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[98],A)
D=c[144]
A.yY.prototype={
is(d){return B.Sz(this.a,this.b,d)}}
A.DL.prototype={
is(d){var x=B.u4(this.a,this.b,d)
x.toString
return x}}
A.FL.prototype={
is(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.e_(new Float64Array(3)),a3=new B.e_(new Float64Array(3)),a4=A.ciZ(),a5=A.ciZ(),a6=new B.e_(new Float64Array(3)),a7=new B.e_(new Float64Array(3))
this.a.auT(a2,a4,a6)
this.b.auT(a3,a5,a7)
x=1-a8
w=a2.tz(x).a5(0,a3.tz(a8))
v=a4.tz(x).a5(0,a5.tz(a8))
u=new Float64Array(4)
t=new A.Bz(u)
t.dD(v)
t.NE(0)
s=a6.tz(x).a5(0,a7.tz(a8))
x=new Float64Array(16)
v=new B.bU(x)
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
A.SE.prototype={
M(){return new A.aAs(null,null)}}
A.aAs.prototype={
us(d){var x,w,v,u=this,t=null,s=u.CW
u.a.toString
x=y.b
u.CW=x.a(d.$3(s,t,new A.bBv()))
s=y.f
u.cx=s.a(d.$3(u.cx,u.a.x,new A.bBw()))
w=y.d
u.cy=w.a(d.$3(u.cy,u.a.y,new A.bBx()))
v=u.db
u.a.toString
u.db=w.a(d.$3(v,t,new A.bBy()))
u.dx=y.e.a(d.$3(u.dx,u.a.Q,new A.bBz()))
u.dy=s.a(d.$3(u.dy,u.a.as,new A.bBA()))
s=u.fr
u.a.toString
u.fr=y.w.a(d.$3(s,t,new A.bBB()))
s=u.fx
u.a.toString
u.fx=x.a(d.$3(s,t,new A.bBC()))},
A(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.gjW(),n=q.CW
n=n==null?p:n.aq(0,o.gj(0))
x=q.cx
x=x==null?p:x.aq(0,o.gj(0))
w=q.cy
w=w==null?p:w.aq(0,o.gj(0))
v=q.db
v=v==null?p:v.aq(0,o.gj(0))
u=q.dx
u=u==null?p:u.aq(0,o.gj(0))
t=q.dy
t=t==null?p:t.aq(0,o.gj(0))
s=q.fr
s=s==null?p:s.aq(0,o.gj(0))
r=q.fx
r=r==null?p:r.aq(0,o.gj(0))
return B.aL(n,q.a.r,C.h,p,u,w,v,p,t,x,s,r,p)}}
A.Bz.prototype={
dD(d){var x=d.a,w=this.a
w[0]=x[0]
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
aFP(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
if(o>0){x=Math.sqrt(o+1)
r=this.a
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
t[w]=x*0.5
x=0.5/x
t[3]=(s[q+u]-s[p+v])*x
t[v]=(s[r+v]+s[q+w])*x
t[u]=(s[r+u]+s[p+w])*x}},
NE(d){var x,w,v=Math.sqrt(this.gNn())
if(v===0)return 0
x=1/v
w=this.a
w[0]=w[0]*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return v},
gNn(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gt(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
u(d,e){var x=e.a,w=this.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]},
tz(d){var x=new Float64Array(4),w=new A.Bz(x)
w.dD(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
aE(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gbEI(),a1=a0.i(0,3),a2=a0.i(0,2),a3=a0.i(0,1),a4=a0.i(0,0)
h=C.d.aE(g,a4)
x=C.d.aE(d,a1)
w=C.d.aE(e,a2)
v=C.d.aE(f,a3)
u=C.d.aE(g,a3)
t=C.d.aE(e,a1)
s=C.d.aE(f,a4)
r=C.d.aE(d,a2)
q=C.d.aE(g,a2)
p=C.d.aE(f,a1)
o=C.d.aE(d,a3)
n=C.d.aE(e,a4)
m=C.d.aE(g,a1)
l=C.d.aE(d,a4)
k=C.d.aE(e,a3)
j=C.d.aE(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.Bz(i)},
a5(d,e){var x=new A.Bz(new Float64Array(4))
x.dD(this)
x.u(0,e)
return x},
a7(d,e){var x,w=new Float64Array(4),v=new A.Bz(w)
v.dD(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
i(d,e){return this.a[e]},
n(d,e,f){this.a[e]=f},
k(d){var x=this.a
return B.o(x[0])+", "+B.o(x[1])+", "+B.o(x[2])+" @ "+B.o(x[3])}}
var z=a.updateTypes(["yY(@)","pX(@)","DL(@)","FL(@)"])
A.bBv.prototype={
$1(d){return new A.yY(y.k.a(d),null)},
$S:z+0}
A.bBw.prototype={
$1(d){return new D.pX(y.m.a(d),null)},
$S:z+1}
A.bBx.prototype={
$1(d){return new B.wr(y.r.a(d),null)},
$S:323}
A.bBy.prototype={
$1(d){return new B.wr(y.r.a(d),null)},
$S:323}
A.bBz.prototype={
$1(d){return new A.DL(y.a.a(d),null)},
$S:z+2}
A.bBA.prototype={
$1(d){return new D.pX(y.m.a(d),null)},
$S:z+1}
A.bBB.prototype={
$1(d){return new A.FL(y.E.a(d),null)},
$S:z+3}
A.bBC.prototype={
$1(d){return new A.yY(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.aw,[A.yY,A.DL,A.FL])
w(A.SE,B.wT)
w(A.aAs,B.w1)
x(B.bH,[A.bBv,A.bBw,A.bBx,A.bBy,A.bBz,A.bBA,A.bBB,A.bBC])
w(A.Bz,B.z)})()
B.bz(b.typeUniverse,JSON.parse('{"yY":{"aw":["mt?"],"aY":["mt?"],"aY.T":"mt?","aw.T":"mt?"},"DL":{"aw":["a7"],"aY":["a7"],"aY.T":"a7","aw.T":"a7"},"FL":{"aw":["bU"],"aY":["bU"],"aY.T":"bU","aw.T":"bU"},"SE":{"E":[],"d":[]},"aAs":{"K":["SE"]}}'))
var y=(function rtii(){var x=B.x
return{k:x("mt"),a:x("a7"),r:x("mC"),m:x("f0"),E:x("bU"),b:x("yY?"),e:x("DL?"),d:x("wr?"),f:x("pX?"),w:x("FL?")}})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_142",e:"endPart",h:b})})($__dart_deferred_initializers__,"mD6atrt5jut8dXKRrT7MTu5WNvg=");