((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_141",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={yY:function yY(d,e){this.a=d
this.b=e},
SK(d,e,f,g,h,i,j,k,l){var x,w
if(f==null)x=null
else x=f
if(l!=null||h!=null)w=B.hP(h,l)
else w=null
return new A.SJ(d,k,x,w,j,e,g,null,i)},
DO:function DO(d,e){this.a=d
this.b=e},
FM:function FM(d,e){this.a=d
this.b=e},
SJ:function SJ(d,e,f,g,h,i,j,k,l){var _=this
_.r=d
_.x=e
_.y=f
_.Q=g
_.as=h
_.c=i
_.d=j
_.e=k
_.a=l},
aAx:function aAx(d,e){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.fG$=d
_.bS$=e
_.c=_.a=null},
bBD:function bBD(){},
bBE:function bBE(){},
bBF:function bBF(){},
bBG:function bBG(){},
bBH:function bBH(){},
bBI:function bBI(){},
bBJ:function bBJ(){},
bBK:function bBK(){},
cji(){var x=new Float64Array(4)
x[3]=1
return new A.BB(x)},
BB:function BB(d){this.a=d}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[106],A)
D=c[146]
A.yY.prototype={
is(d){return B.SE(this.a,this.b,d)}}
A.DO.prototype={
is(d){var x=B.u4(this.a,this.b,d)
x.toString
return x}}
A.FM.prototype={
is(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.e0(new Float64Array(3)),a3=new B.e0(new Float64Array(3)),a4=A.cji(),a5=A.cji(),a6=new B.e0(new Float64Array(3)),a7=new B.e0(new Float64Array(3))
this.a.auY(a2,a4,a6)
this.b.auY(a3,a5,a7)
x=1-a8
w=a2.tA(x).a5(0,a3.tA(a8))
v=a4.tA(x).a5(0,a5.tA(a8))
u=new Float64Array(4)
t=new A.BB(u)
t.dD(v)
t.NF(0)
s=a6.tA(x).a5(0,a7.tA(a8))
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
A.SJ.prototype={
M(){return new A.aAx(null,null)}}
A.aAx.prototype={
ut(d){var x,w,v,u=this,t=null,s=u.CW
u.a.toString
x=y.b
u.CW=x.a(d.$3(s,t,new A.bBD()))
s=y.f
u.cx=s.a(d.$3(u.cx,u.a.x,new A.bBE()))
w=y.d
u.cy=w.a(d.$3(u.cy,u.a.y,new A.bBF()))
v=u.db
u.a.toString
u.db=w.a(d.$3(v,t,new A.bBG()))
u.dx=y.e.a(d.$3(u.dx,u.a.Q,new A.bBH()))
u.dy=s.a(d.$3(u.dy,u.a.as,new A.bBI()))
s=u.fr
u.a.toString
u.fr=y.w.a(d.$3(s,t,new A.bBJ()))
s=u.fx
u.a.toString
u.fx=x.a(d.$3(s,t,new A.bBK()))},
A(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.gjX(),n=q.CW
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
A.BB.prototype={
dD(d){var x=d.a,w=this.a
w[0]=x[0]
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
aFU(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
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
NF(d){var x,w,v=Math.sqrt(this.gNo())
if(v===0)return 0
x=1/v
w=this.a
w[0]=w[0]*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return v},
gNo(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gt(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
u(d,e){var x=e.a,w=this.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]},
tA(d){var x=new Float64Array(4),w=new A.BB(x)
w.dD(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
aE(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gbET(),a1=a0.i(0,3),a2=a0.i(0,2),a3=a0.i(0,1),a4=a0.i(0,0)
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
return new A.BB(i)},
a5(d,e){var x=new A.BB(new Float64Array(4))
x.dD(this)
x.u(0,e)
return x},
a7(d,e){var x,w=new Float64Array(4),v=new A.BB(w)
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
var z=a.updateTypes(["yY(@)","pW(@)","DO(@)","FM(@)"])
A.bBD.prototype={
$1(d){return new A.yY(y.k.a(d),null)},
$S:z+0}
A.bBE.prototype={
$1(d){return new D.pW(y.m.a(d),null)},
$S:z+1}
A.bBF.prototype={
$1(d){return new B.wr(y.r.a(d),null)},
$S:320}
A.bBG.prototype={
$1(d){return new B.wr(y.r.a(d),null)},
$S:320}
A.bBH.prototype={
$1(d){return new A.DO(y.a.a(d),null)},
$S:z+2}
A.bBI.prototype={
$1(d){return new D.pW(y.m.a(d),null)},
$S:z+1}
A.bBJ.prototype={
$1(d){return new A.FM(y.E.a(d),null)},
$S:z+3}
A.bBK.prototype={
$1(d){return new A.yY(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.aw,[A.yY,A.DO,A.FM])
w(A.SJ,B.wT)
w(A.aAx,B.w1)
x(B.bG,[A.bBD,A.bBE,A.bBF,A.bBG,A.bBH,A.bBI,A.bBJ,A.bBK])
w(A.BB,B.z)})()
B.bz(b.typeUniverse,JSON.parse('{"yY":{"aw":["mu?"],"aY":["mu?"],"aY.T":"mu?","aw.T":"mu?"},"DO":{"aw":["a7"],"aY":["a7"],"aY.T":"a7","aw.T":"a7"},"FM":{"aw":["bU"],"aY":["bU"],"aY.T":"bU","aw.T":"bU"},"SJ":{"D":[],"d":[]},"aAx":{"K":["SJ"]}}'))
var y=(function rtii(){var x=B.x
return{k:x("mu"),a:x("a7"),r:x("mD"),m:x("f0"),E:x("bU"),b:x("yY?"),e:x("DO?"),d:x("wr?"),f:x("pW?"),w:x("FM?")}})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_141",e:"endPart",h:b})})($__dart_deferred_initializers__,"kdu4NHBc8EJxW07exNrju3e8AVw=");