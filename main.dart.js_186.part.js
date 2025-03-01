((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_186",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,D,A={Aq:function Aq(d,e){this.a=d
this.b=e},
Fp(d,e,f,g,h,i,j,k,l){var x,w
if(f==null)x=null
else x=f
if(l!=null||h!=null)w=B.ia(h,l)
else w=null
return new A.VI(d,k,x,w,j,e,g,null,i)},
FC:function FC(d,e){this.a=d
this.b=e},
HJ:function HJ(d,e){this.a=d
this.b=e},
VI:function VI(d,e,f,g,h,i,j,k,l){var _=this
_.r=d
_.x=e
_.y=f
_.Q=g
_.as=h
_.c=i
_.d=j
_.e=k
_.a=l},
aEU:function aEU(d,e){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.fM$=d
_.bZ$=e
_.c=_.a=null},
bKZ:function bKZ(){},
bL_:function bL_(){},
bL0:function bL0(){},
bL1:function bL1(){},
bL2:function bL2(){},
bL3:function bL3(){},
bL4:function bL4(){},
bL5:function bL5(){},
cyJ(){var x=new Float64Array(4)
x[3]=1
return new A.Dc(x)},
Dc:function Dc(d){this.a=d}}
B=c[0]
C=c[2]
D=c[176]
A=a.updateHolder(c[140],A)
A.Aq.prototype={
iR(d){return B.VE(this.a,this.b,d)}}
A.FC.prototype={
iR(d){var x=B.ts(this.a,this.b,d)
x.toString
return x}}
A.HJ.prototype={
iR(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eo(new Float64Array(3)),a3=new B.eo(new Float64Array(3)),a4=A.cyJ(),a5=A.cyJ(),a6=new B.eo(new Float64Array(3)),a7=new B.eo(new Float64Array(3))
this.a.ayO(a2,a4,a6)
this.b.ayO(a3,a5,a7)
x=1-a8
w=a2.ua(x).a5(0,a3.ua(a8))
v=a4.ua(x).a5(0,a5.ua(a8))
u=new Float64Array(4)
t=new A.Dc(u)
t.dX(v)
t.Pr(0)
s=a6.ua(x).a5(0,a7.ua(a8))
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
v.dQ(0,s)
return v}}
A.VI.prototype={
M(){return new A.aEU(null,null)}}
A.aEU.prototype={
v4(d){var x,w,v,u=this,t=null,s=u.CW
u.a.toString
x=y.b
u.CW=x.a(d.$3(s,t,new A.bKZ()))
s=y.f
u.cx=s.a(d.$3(u.cx,u.a.x,new A.bL_()))
w=y.d
u.cy=w.a(d.$3(u.cy,u.a.y,new A.bL0()))
v=u.db
u.a.toString
u.db=w.a(d.$3(v,t,new A.bL1()))
u.dx=y.e.a(d.$3(u.dx,u.a.Q,new A.bL2()))
u.dy=s.a(d.$3(u.dy,u.a.as,new A.bL3()))
s=u.fr
u.a.toString
u.fr=y.w.a(d.$3(s,t,new A.bL4()))
s=u.fx
u.a.toString
u.fx=x.a(d.$3(s,t,new A.bL5()))},
A(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.gkG(),n=q.CW
n=n==null?p:n.ar(0,o.gp(0))
x=q.cx
x=x==null?p:x.ar(0,o.gp(0))
w=q.cy
w=w==null?p:w.ar(0,o.gp(0))
v=q.db
v=v==null?p:v.ar(0,o.gp(0))
u=q.dx
u=u==null?p:u.ar(0,o.gp(0))
t=q.dy
t=t==null?p:t.ar(0,o.gp(0))
s=q.fr
s=s==null?p:s.ar(0,o.gp(0))
r=q.fx
r=r==null?p:r.ar(0,o.gp(0))
return B.aF(n,q.a.r,C.k,p,u,w,v,p,t,x,s,r,p)}}
A.Dc.prototype={
dX(d){var x=d.a,w=this.a,v=x[0]
w.$flags&2&&B.B(w)
w[0]=v
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
aK9(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
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
Pr(d){var x,w,v,u=Math.sqrt(this.gPa())
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
gPa(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gu(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
t(d,e){var x=e.a,w=this.a,v=w[0],u=x[0]
w.$flags&2&&B.B(w)
w[0]=v+u
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]},
ua(d){var x=new Float64Array(4),w=new A.Dc(x)
w.dX(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
aJ(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gbLl(),a1=a0.i(0,3),a2=a0.i(0,2),a3=a0.i(0,1),a4=a0.i(0,0)
h=C.d.aJ(g,a4)
x=C.d.aJ(d,a1)
w=C.d.aJ(e,a2)
v=C.d.aJ(f,a3)
u=C.d.aJ(g,a3)
t=C.d.aJ(e,a1)
s=C.d.aJ(f,a4)
r=C.d.aJ(d,a2)
q=C.d.aJ(g,a2)
p=C.d.aJ(f,a1)
o=C.d.aJ(d,a3)
n=C.d.aJ(e,a4)
m=C.d.aJ(g,a1)
l=C.d.aJ(d,a4)
k=C.d.aJ(e,a3)
j=C.d.aJ(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.Dc(i)},
a5(d,e){var x=new A.Dc(new Float64Array(4))
x.dX(this)
x.t(0,e)
return x},
a4(d,e){var x,w=new Float64Array(4),v=new A.Dc(w)
v.dX(this)
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
var z=a.updateTypes(["Aq(@)","qX(@)","FC(@)","HJ(@)"])
A.bKZ.prototype={
$1(d){return new A.Aq(y.k.a(d),null)},
$S:z+0}
A.bL_.prototype={
$1(d){return new D.qX(y.m.a(d),null)},
$S:z+1}
A.bL0.prototype={
$1(d){return new B.xO(y.r.a(d),null)},
$S:209}
A.bL1.prototype={
$1(d){return new B.xO(y.r.a(d),null)},
$S:209}
A.bL2.prototype={
$1(d){return new A.FC(y.a.a(d),null)},
$S:z+2}
A.bL3.prototype={
$1(d){return new D.qX(y.m.a(d),null)},
$S:z+1}
A.bL4.prototype={
$1(d){return new A.HJ(y.E.a(d),null)},
$S:z+3}
A.bL5.prototype={
$1(d){return new A.Aq(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.aC,[A.Aq,A.FC,A.HJ])
w(A.VI,B.yk)
w(A.aEU,B.xj)
x(B.bC,[A.bKZ,A.bL_,A.bL0,A.bL1,A.bL2,A.bL3,A.bL4,A.bL5])
w(A.Dc,B.E)})()
B.bi(b.typeUniverse,JSON.parse('{"Aq":{"aC":["ng?"],"aX":["ng?"],"aX.T":"ng?","aC.T":"ng?"},"FC":{"aC":["aa"],"aX":["aa"],"aX.T":"aa","aC.T":"aa"},"HJ":{"aC":["ca"],"aX":["ca"],"aX.T":"ca","aC.T":"ca"},"VI":{"G":[],"d":[]},"aEU":{"K":["VI"]}}'))
var y=(function rtii(){var x=B.y
return{k:x("ng"),a:x("aa"),r:x("nr"),m:x("fh"),E:x("ca"),b:x("Aq?"),e:x("FC?"),d:x("xO?"),f:x("qX?"),w:x("HJ?")}})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_186",e:"endPart",h:b})})($__dart_deferred_initializers__,"V0cg0uMVA9oLYCRg9D6mAEiC0UU=");