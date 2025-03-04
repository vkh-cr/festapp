((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_203",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,D,A={As:function As(d,e){this.a=d
this.b=e},
Fs(d,e,f,g,h,i,j,k,l){var x,w
if(f==null)x=null
else x=f
if(l!=null||h!=null)w=B.ia(h,l)
else w=null
return new A.VQ(d,k,x,w,j,e,g,null,i)},
FF:function FF(d,e){this.a=d
this.b=e},
HP:function HP(d,e){this.a=d
this.b=e},
VQ:function VQ(d,e,f,g,h,i,j,k,l){var _=this
_.r=d
_.x=e
_.y=f
_.Q=g
_.as=h
_.c=i
_.d=j
_.e=k
_.a=l},
aF6:function aF6(d,e){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.fO$=d
_.bZ$=e
_.c=_.a=null},
bLP:function bLP(){},
bLQ:function bLQ(){},
bLR:function bLR(){},
bLS:function bLS(){},
bLT:function bLT(){},
bLU:function bLU(){},
bLV:function bLV(){},
bLW:function bLW(){},
czH(){var x=new Float64Array(4)
x[3]=1
return new A.Df(x)},
Df:function Df(d){this.a=d}}
B=c[0]
C=c[2]
D=c[171]
A=a.updateHolder(c[139],A)
A.As.prototype={
iR(d){return B.VM(this.a,this.b,d)}}
A.FF.prototype={
iR(d){var x=B.tv(this.a,this.b,d)
x.toString
return x}}
A.HP.prototype={
iR(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eq(new Float64Array(3)),a3=new B.eq(new Float64Array(3)),a4=A.czH(),a5=A.czH(),a6=new B.eq(new Float64Array(3)),a7=new B.eq(new Float64Array(3))
this.a.ayR(a2,a4,a6)
this.b.ayR(a3,a5,a7)
x=1-a8
w=a2.ua(x).a5(0,a3.ua(a8))
v=a4.ua(x).a5(0,a5.ua(a8))
u=new Float64Array(4)
t=new A.Df(u)
t.dY(v)
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
A.VQ.prototype={
M(){return new A.aF6(null,null)}}
A.aF6.prototype={
v5(d){var x,w,v,u=this,t=null,s=u.CW
u.a.toString
x=y.b
u.CW=x.a(d.$3(s,t,new A.bLP()))
s=y.f
u.cx=s.a(d.$3(u.cx,u.a.x,new A.bLQ()))
w=y.d
u.cy=w.a(d.$3(u.cy,u.a.y,new A.bLR()))
v=u.db
u.a.toString
u.db=w.a(d.$3(v,t,new A.bLS()))
u.dx=y.e.a(d.$3(u.dx,u.a.Q,new A.bLT()))
u.dy=s.a(d.$3(u.dy,u.a.as,new A.bLU()))
s=u.fr
u.a.toString
u.fr=y.w.a(d.$3(s,t,new A.bLV()))
s=u.fx
u.a.toString
u.fx=x.a(d.$3(s,t,new A.bLW()))},
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
return B.aG(n,q.a.r,C.k,p,u,w,v,p,t,x,s,r,p)}}
A.Df.prototype={
dY(d){var x=d.a,w=this.a,v=x[0]
w.$flags&2&&B.B(w)
w[0]=v
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
aKe(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
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
ua(d){var x=new Float64Array(4),w=new A.Df(x)
w.dY(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
aJ(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gbLz(),a1=a0.i(0,3),a2=a0.i(0,2),a3=a0.i(0,1),a4=a0.i(0,0)
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
return new A.Df(i)},
a5(d,e){var x=new A.Df(new Float64Array(4))
x.dY(this)
x.t(0,e)
return x},
a4(d,e){var x,w=new Float64Array(4),v=new A.Df(w)
v.dY(this)
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
var z=a.updateTypes(["As(@)","qY(@)","FF(@)","HP(@)"])
A.bLP.prototype={
$1(d){return new A.As(y.k.a(d),null)},
$S:z+0}
A.bLQ.prototype={
$1(d){return new D.qY(y.m.a(d),null)},
$S:z+1}
A.bLR.prototype={
$1(d){return new B.xV(y.r.a(d),null)},
$S:237}
A.bLS.prototype={
$1(d){return new B.xV(y.r.a(d),null)},
$S:237}
A.bLT.prototype={
$1(d){return new A.FF(y.a.a(d),null)},
$S:z+2}
A.bLU.prototype={
$1(d){return new D.qY(y.m.a(d),null)},
$S:z+1}
A.bLV.prototype={
$1(d){return new A.HP(y.E.a(d),null)},
$S:z+3}
A.bLW.prototype={
$1(d){return new A.As(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.aC,[A.As,A.FF,A.HP])
w(A.VQ,B.ym)
w(A.aF6,B.xp)
x(B.bA,[A.bLP,A.bLQ,A.bLR,A.bLS,A.bLT,A.bLU,A.bLV,A.bLW])
w(A.Df,B.E)})()
B.bi(b.typeUniverse,JSON.parse('{"As":{"aC":["ne?"],"aX":["ne?"],"aX.T":"ne?","aC.T":"ne?"},"FF":{"aC":["aa"],"aX":["aa"],"aX.T":"aa","aC.T":"aa"},"HP":{"aC":["ca"],"aX":["ca"],"aX.T":"ca","aC.T":"ca"},"VQ":{"F":[],"d":[]},"aF6":{"K":["VQ"]}}'))
var y=(function rtii(){var x=B.y
return{k:x("ne"),a:x("aa"),r:x("np"),m:x("fk"),E:x("ca"),b:x("As?"),e:x("FF?"),d:x("xV?"),f:x("qY?"),w:x("HP?")}})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_203",e:"endPart",h:b})})($__dart_deferred_initializers__,"/1fuLzVsaD9oE5eUxJKZMCTZaAE=");