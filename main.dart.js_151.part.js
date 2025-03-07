((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_151",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,D,A={As:function As(d,e){this.a=d
this.b=e},
Fq(d,e,f,g,h,i,j,k,l){var x,w
if(f==null)x=null
else x=f
if(l!=null||h!=null)w=B.id(h,l)
else w=null
return new A.VS(d,k,x,w,j,e,g,null,i)},
FD:function FD(d,e){this.a=d
this.b=e},
HO:function HO(d,e){this.a=d
this.b=e},
VS:function VS(d,e,f,g,h,i,j,k,l){var _=this
_.r=d
_.x=e
_.y=f
_.Q=g
_.as=h
_.c=i
_.d=j
_.e=k
_.a=l},
aFf:function aFf(d,e){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.fO$=d
_.bZ$=e
_.c=_.a=null},
bMb:function bMb(){},
bMc:function bMc(){},
bMd:function bMd(){},
bMe:function bMe(){},
bMf:function bMf(){},
bMg:function bMg(){},
bMh:function bMh(){},
bMi:function bMi(){},
cA8(){var x=new Float64Array(4)
x[3]=1
return new A.Dd(x)},
Dd:function Dd(d){this.a=d}}
B=c[0]
C=c[2]
D=c[177]
A=a.updateHolder(c[144],A)
A.As.prototype={
iS(d){return B.VO(this.a,this.b,d)}}
A.FD.prototype={
iS(d){var x=B.tx(this.a,this.b,d)
x.toString
return x}}
A.HO.prototype={
iS(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.er(new Float64Array(3)),a3=new B.er(new Float64Array(3)),a4=A.cA8(),a5=A.cA8(),a6=new B.er(new Float64Array(3)),a7=new B.er(new Float64Array(3))
this.a.ayX(a2,a4,a6)
this.b.ayX(a3,a5,a7)
x=1-a8
w=a2.ua(x).a5(0,a3.ua(a8))
v=a4.ua(x).a5(0,a5.ua(a8))
u=new Float64Array(4)
t=new A.Dd(u)
t.dX(v)
t.Pu(0)
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
A.VS.prototype={
M(){return new A.aFf(null,null)}}
A.aFf.prototype={
v5(d){var x,w,v,u=this,t=null,s=u.CW
u.a.toString
x=y.b
u.CW=x.a(d.$3(s,t,new A.bMb()))
s=y.f
u.cx=s.a(d.$3(u.cx,u.a.x,new A.bMc()))
w=y.d
u.cy=w.a(d.$3(u.cy,u.a.y,new A.bMd()))
v=u.db
u.a.toString
u.db=w.a(d.$3(v,t,new A.bMe()))
u.dx=y.e.a(d.$3(u.dx,u.a.Q,new A.bMf()))
u.dy=s.a(d.$3(u.dy,u.a.as,new A.bMg()))
s=u.fr
u.a.toString
u.fr=y.w.a(d.$3(s,t,new A.bMh()))
s=u.fx
u.a.toString
u.fx=x.a(d.$3(s,t,new A.bMi()))},
A(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.gkH(),n=q.CW
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
return B.aB(n,q.a.r,C.k,p,u,w,v,p,t,x,s,r,p)}}
A.Dd.prototype={
dX(d){var x=d.a,w=this.a,v=x[0]
w.$flags&2&&B.B(w)
w[0]=v
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
aKj(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
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
Pu(d){var x,w,v,u=Math.sqrt(this.gPd())
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
gPd(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gu(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
t(d,e){var x=e.a,w=this.a,v=w[0],u=x[0]
w.$flags&2&&B.B(w)
w[0]=v+u
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]},
ua(d){var x=new Float64Array(4),w=new A.Dd(x)
w.dX(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
aK(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gbLF(),a1=a0.i(0,3),a2=a0.i(0,2),a3=a0.i(0,1),a4=a0.i(0,0)
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
return new A.Dd(i)},
a5(d,e){var x=new A.Dd(new Float64Array(4))
x.dX(this)
x.t(0,e)
return x},
a4(d,e){var x,w=new Float64Array(4),v=new A.Dd(w)
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
var z=a.updateTypes(["As(@)","qZ(@)","FD(@)","HO(@)"])
A.bMb.prototype={
$1(d){return new A.As(y.k.a(d),null)},
$S:z+0}
A.bMc.prototype={
$1(d){return new D.qZ(y.m.a(d),null)},
$S:z+1}
A.bMd.prototype={
$1(d){return new B.xV(y.r.a(d),null)},
$S:232}
A.bMe.prototype={
$1(d){return new B.xV(y.r.a(d),null)},
$S:232}
A.bMf.prototype={
$1(d){return new A.FD(y.a.a(d),null)},
$S:z+2}
A.bMg.prototype={
$1(d){return new D.qZ(y.m.a(d),null)},
$S:z+1}
A.bMh.prototype={
$1(d){return new A.HO(y.E.a(d),null)},
$S:z+3}
A.bMi.prototype={
$1(d){return new A.As(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.aD,[A.As,A.FD,A.HO])
w(A.VS,B.ym)
w(A.aFf,B.xp)
x(B.bE,[A.bMb,A.bMc,A.bMd,A.bMe,A.bMf,A.bMg,A.bMh,A.bMi])
w(A.Dd,B.E)})()
B.bk(b.typeUniverse,JSON.parse('{"As":{"aD":["ng?"],"aY":["ng?"],"aY.T":"ng?","aD.T":"ng?"},"FD":{"aD":["aa"],"aY":["aa"],"aY.T":"aa","aD.T":"aa"},"HO":{"aD":["ca"],"aY":["ca"],"aY.T":"ca","aD.T":"ca"},"VS":{"F":[],"d":[]},"aFf":{"K":["VS"]}}'))
var y=(function rtii(){var x=B.z
return{k:x("ng"),a:x("aa"),r:x("nr"),m:x("fk"),E:x("ca"),b:x("As?"),e:x("FD?"),d:x("xV?"),f:x("qZ?"),w:x("HO?")}})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_151",e:"endPart",h:b})})($__dart_deferred_initializers__,"DnnXs58e3fyvICak8PXExOquobg=");