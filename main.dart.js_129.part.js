((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_129",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={yi:function yi(d,e){this.a=d
this.b=e},
abi(d,e,f,g,h,i,j,k,l){var x,w
if(f==null)x=null
else x=f
if(l!=null||h!=null)w=B.hw(h,l)
else w=null
return new A.RA(d,k,x,w,j,e,g,null,i)},
CW:function CW(d,e){this.a=d
this.b=e},
EW:function EW(d,e){this.a=d
this.b=e},
RA:function RA(d,e,f,g,h,i,j,k,l){var _=this
_.r=d
_.x=e
_.y=f
_.Q=g
_.as=h
_.c=i
_.d=j
_.e=k
_.a=l},
axh:function axh(d,e){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.h0$=d
_.co$=e
_.c=_.a=null},
bwU:function bwU(){},
bwV:function bwV(){},
bwW:function bwW(){},
bwX:function bwX(){},
bwY:function bwY(){},
bwZ:function bwZ(){},
bx_:function bx_(){},
bx0:function bx0(){},
ca2(){var x=new Float64Array(4)
x[3]=1
return new A.AK(x)},
AK:function AK(d){this.a=d}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[71],A)
D=c[113]
A.yi.prototype={
hZ(d){return B.Rv(this.a,this.b,d)}}
A.CW.prototype={
hZ(d){var x=B.tv(this.a,this.b,d)
x.toString
return x}}
A.EW.prototype={
hZ(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.dI(new Float64Array(3)),a3=new B.dI(new Float64Array(3)),a4=A.ca2(),a5=A.ca2(),a6=new B.dI(new Float64Array(3)),a7=new B.dI(new Float64Array(3))
this.a.ast(a2,a4,a6)
this.b.ast(a3,a5,a7)
x=1-a8
w=a2.rU(x).a5(0,a3.rU(a8))
v=a4.rU(x).a5(0,a5.rU(a8))
u=new Float64Array(4)
t=new A.AK(u)
t.d8(v)
t.Mp(0)
s=a6.rU(x).a5(0,a7.rU(a8))
x=new Float64Array(16)
v=new B.bO(x)
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
v.dl(0,s)
return v}}
A.RA.prototype={
O(){return new A.axh(null,null)}}
A.axh.prototype={
vq(d){var x,w,v,u=this,t=null,s=u.CW
u.a.toString
x=y.b
u.CW=x.a(d.$3(s,t,new A.bwU()))
s=y.f
u.cx=s.a(d.$3(u.cx,u.a.x,new A.bwV()))
w=y.d
u.cy=w.a(d.$3(u.cy,u.a.y,new A.bwW()))
v=u.db
u.a.toString
u.db=w.a(d.$3(v,t,new A.bwX()))
u.dx=y.e.a(d.$3(u.dx,u.a.Q,new A.bwY()))
u.dy=s.a(d.$3(u.dy,u.a.as,new A.bwZ()))
s=u.fr
u.a.toString
u.fr=y.w.a(d.$3(s,t,new A.bx_()))
s=u.fx
u.a.toString
u.fx=x.a(d.$3(s,t,new A.bx0()))},
D(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.gk0(),n=q.CW
n=n==null?p:n.aC(0,o.gm(0))
x=q.cx
x=x==null?p:x.aC(0,o.gm(0))
w=q.cy
w=w==null?p:w.aC(0,o.gm(0))
v=q.db
v=v==null?p:v.aC(0,o.gm(0))
u=q.dx
u=u==null?p:u.aC(0,o.gm(0))
t=q.dy
t=t==null?p:t.aC(0,o.gm(0))
s=q.fr
s=s==null?p:s.aC(0,o.gm(0))
r=q.fx
r=r==null?p:r.aC(0,o.gm(0))
return B.aP(n,q.a.r,C.h,p,u,w,v,p,t,x,s,r,p)}}
A.AK.prototype={
d8(d){var x=d.a,w=this.a
w[0]=x[0]
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
aDf(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
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
Mp(d){var x,w,v=Math.sqrt(this.gMb())
if(v===0)return 0
x=1/v
w=this.a
w[0]=w[0]*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return v},
gMb(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gt(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
u(d,e){var x=e.a,w=this.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]},
rU(d){var x=new Float64Array(4),w=new A.AK(x)
w.d8(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
aB(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gbAo(),a1=a0.i(0,3),a2=a0.i(0,2),a3=a0.i(0,1),a4=a0.i(0,0)
h=C.d.aB(g,a4)
x=C.d.aB(d,a1)
w=C.d.aB(e,a2)
v=C.d.aB(f,a3)
u=C.d.aB(g,a3)
t=C.d.aB(e,a1)
s=C.d.aB(f,a4)
r=C.d.aB(d,a2)
q=C.d.aB(g,a2)
p=C.d.aB(f,a1)
o=C.d.aB(d,a3)
n=C.d.aB(e,a4)
m=C.d.aB(g,a1)
l=C.d.aB(d,a4)
k=C.d.aB(e,a3)
j=C.d.aB(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.AK(i)},
a5(d,e){var x=new A.AK(new Float64Array(4))
x.d8(this)
x.u(0,e)
return x},
aa(d,e){var x,w=new Float64Array(4),v=new A.AK(w)
v.d8(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
i(d,e){return this.a[e]},
n(d,e,f){this.a[e]=f},
j(d){var x=this.a
return B.o(x[0])+", "+B.o(x[1])+", "+B.o(x[2])+" @ "+B.o(x[3])}}
var z=a.updateTypes(["yi(@)","pj(@)","CW(@)","EW(@)"])
A.bwU.prototype={
$1(d){return new A.yi(y.k.a(d),null)},
$S:z+0}
A.bwV.prototype={
$1(d){return new D.pj(y.m.a(d),null)},
$S:z+1}
A.bwW.prototype={
$1(d){return new B.vR(y.r.a(d),null)},
$S:312}
A.bwX.prototype={
$1(d){return new B.vR(y.r.a(d),null)},
$S:312}
A.bwY.prototype={
$1(d){return new A.CW(y.a.a(d),null)},
$S:z+2}
A.bwZ.prototype={
$1(d){return new D.pj(y.m.a(d),null)},
$S:z+1}
A.bx_.prototype={
$1(d){return new A.EW(y.E.a(d),null)},
$S:z+3}
A.bx0.prototype={
$1(d){return new A.yi(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.aC,[A.yi,A.CW,A.EW])
w(A.RA,B.En)
w(A.axh,B.vq)
x(B.c1,[A.bwU,A.bwV,A.bwW,A.bwX,A.bwY,A.bwZ,A.bx_,A.bx0])
w(A.AK,B.z)})()
B.bQ(b.typeUniverse,JSON.parse('{"yi":{"aC":["lR?"],"aU":["lR?"],"aU.T":"lR?","aC.T":"lR?"},"CW":{"aC":["aa"],"aU":["aa"],"aU.T":"aa","aC.T":"aa"},"EW":{"aC":["bO"],"aU":["bO"],"aU.T":"bO","aC.T":"bO"},"RA":{"G":[],"e":[]},"axh":{"L":["RA"]}}'))
var y=(function rtii(){var x=B.A
return{k:x("lR"),a:x("aa"),r:x("lY"),m:x("eO"),E:x("bO"),b:x("yi?"),e:x("CW?"),d:x("vR?"),f:x("pj?"),w:x("EW?")}})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_129",e:"endPart",h:b})})($__dart_deferred_initializers__,"1QtuSp97Gufzs2OU78I5oWxe74I=");