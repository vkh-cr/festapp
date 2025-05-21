((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_289",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cMC(d){var x=J.a1(d)
return new B.ng(A.b2(x.h(d,"assignment_id")),A.e_(x.h(d,"place_id")))},
cMB(d){var x=J.a1(d)
return new B.nf(A.b2(x.h(d,"assignment_id")),A.e_(x.h(d,"event_id")))},
b_O(d,e,f,g,h,i,j,k,l,m,n){var x=i==null?$.cM_().EN():i
return new B.fR(x,d,m,n,k,g,l,f,e,j,h)},
cMm(d){var x=y.g.a(J.v(d,"activities"))
if(x==null)x=null
else{x=J.bJ(x,new B.b_U(),y.Q)
x=A.E(x,x.$ti.i("a6.E"))}return x==null?A.a([],y.e):x},
cMn(d){var x=y.g.a(J.v(d,"activity_assignments"))
if(x==null)x=null
else{x=J.bJ(x,new B.b_V(),y.W)
x=A.E(x,x.$ti.i("a6.E"))}return x==null?A.a([],y.c):x},
cMo(d){var x=y.g.a(J.v(d,"events"))
if(x==null)x=null
else{x=J.bJ(x,new B.b_Y(),y.T)
x=A.E(x,x.$ti.i("a6.E"))}return x==null?A.a([],y.s):x},
cMp(d){var x=y.g.a(J.v(d,"places"))
if(x==null)x=null
else{x=J.bJ(x,new B.b_Z(),y.H)
x=A.E(x,x.$ti.i("a6.E"))}return x==null?A.a([],y.n):x},
cMq(d){var x=y.g.a(J.v(d,"user_info"))
if(x==null)x=null
else{x=J.bJ(x,new B.b0_(),y.B)
x=A.E(x,x.$ti.i("a6.E"))}return x==null?A.a([],y.r):x},
hy:function hy(d,e){this.a=d
this.b=e},
ha:function ha(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
jG:function jG(d,e,f){this.a=d
this.b=e
this.c=f},
b00:function b00(){},
nc:function nc(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.d=e
_.e=f
_.f=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l},
ng:function ng(d,e){this.a=d
this.b=e},
nf:function nf(d,e){this.a=d
this.b=e},
fR:function fR(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n},
b_U:function b_U(){},
b_V:function b_V(){},
b_Y:function b_Y(){},
b_Z:function b_Z(){},
b0_:function b0_(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[62],B)
D=c[163]
B.hy.prototype={
gbj(d){return this.a},
gc3(d){return this.b}}
B.ha.prototype={
gbj(d){return this.a},
gc3(d){return this.b}}
B.jG.prototype={
jB(){var x,w=this.b
if(w==null)w=""
x=this.c
if(x==null)x=""
return C.d.bC(w+" "+x)},
aia(){var x,w=this.jB()
if(w.length===0)return""
x=y.C
return A.iz(new A.N(A.a(w.split(" "),y.U),new B.b00(),x),0,A.jV(2,"count",y.S),x.i("a6.E")).lW(0)},
k(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.jG&&A.a_(this)===A.a_(e)&&this.a==e.a
else x=!0
return x},
gv(d){return J.U(this.a)},
gbj(d){return this.a}}
B.nc.prototype={
gbj(d){return this.a},
gc3(d){return this.d}}
B.ng.prototype={}
B.nf.prototype={}
B.fR.prototype={
bl(){var x,w=this,v=w.e
v=v==null?null:v.h8()
x=w.f
x=x==null?null:x.h8()
return A.z(["id",w.a,"activity_id",w.b,"user",w.d,"start_time",v,"end_time",x,"title",w.r,"description",w.w,"data",w.x],y.N,y.z)},
k(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.fR&&A.a_(this)===A.a_(e)&&this.a===e.a
else x=!0
return x},
gv(d){return C.d.gv(this.a)},
gbj(d){return this.a},
gc3(d){return this.r}}
var z=a.updateTypes(["nc(@)","fR(@)","ha(@)","hy(@)","jG(@)"])
B.b00.prototype={
$1(d){return d.length!==0?d[0].toUpperCase():""},
$S:33}
B.b_U.prototype={
$1(d){var x,w,v,u,t,s,r,q,p="created_at",o="updated_at"
y.P.a(d)
x=J.a1(d)
w=A.e_(x.h(d,"id"))
if(x.h(d,p)!=null)A.eA(A.ba(x.h(d,p)))
if(x.h(d,o)!=null)A.eA(A.ba(x.h(d,o)))
v=A.b2(x.h(d,"title"))
u=A.b2(x.h(d,"description"))
t=A.b2(x.h(d,"type"))
A.e_(x.h(d,"occasion"))
s=A.e_(x.h(d,"unit"))
r=A.lV(x.h(d,"is_hidden"))
q=A.e_(x.h(d,"order"))
x=y.Y.a(x.h(d,"data"))
x=x==null?null:J.fP(x,y.N,y.z)
return new B.nc(w,v,u,t,s,r,q,x,A.a([],y.c))},
$S:z+0}
B.b_V.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n=null,m="start_time",l="end_time"
y.P.a(d)
x=J.a1(d)
w=A.b2(x.h(d,"id"))
v=w==null?$.cM_().EN():w
u=A.e_(x.h(d,"activity_id"))
t=A.b2(x.h(d,"user"))
s=x.h(d,m)!=null?A.eA(A.ba(x.h(d,m))).oV():n
r=x.h(d,l)!=null?A.eA(A.ba(x.h(d,l))).oV():n
q=A.b2(x.h(d,"title"))
p=A.b2(x.h(d,"description"))
x=y.Y.a(x.h(d,"data"))
x=x==null?n:J.fP(x,y.N,y.z)
o=A.a([],y.n)
return B.b_O(u,x,p,r,A.a([],y.s),v,o,s,q,n,t)},
$S:z+1}
B.b_Y.prototype={
$1(d){var x,w,v,u,t="start_time",s="end_time"
y.P.a(d)
x=J.a1(d)
w=A.e_(x.h(d,"id"))
v=A.b2(x.h(d,"title"))
u=x.h(d,t)!=null?A.eA(A.ba(x.h(d,t))).oV():A.z5(0,!1)
return new B.ha(w,v,u,x.h(d,s)!=null?A.eA(A.ba(x.h(d,s))).oV():A.z5(0,!1))},
$S:z+2}
B.b_Z.prototype={
$1(d){var x
y.P.a(d)
x=J.a1(d)
return new B.hy(A.e_(x.h(d,"id")),A.b2(x.h(d,"title")))},
$S:z+3}
B.b0_.prototype={
$1(d){var x
y.P.a(d)
x=J.a1(d)
return new B.jG(A.b2(x.h(d,"id")),A.b2(x.h(d,"name")),A.b2(x.h(d,"surname")))},
$S:z+4};(function inheritance(){var x=a.inheritMany
x(A.G,[B.hy,B.ha,B.jG,B.nc,B.ng,B.nf,B.fR])
x(A.c6,[B.b00,B.b_U,B.b_V,B.b_Y,B.b_Z,B.b0_])})()
var y=(function rtii(){var x=A.C
return{W:x("fR"),T:x("ha"),Q:x("nc"),H:x("hy"),B:x("jG"),c:x("t<fR>"),s:x("t<ha>"),e:x("t<nc>"),n:x("t<hy>"),r:x("t<jG>"),U:x("t<m>"),P:x("A<m,@>"),C:x("N<m,m>"),N:x("m"),z:x("@"),S:x("f"),g:x("B<@>?"),Y:x("A<@,@>?")}})();(function lazyInitializers(){var x=a.lazy
x($,"dNl","cM_",()=>new D.aGU())})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_289",e:"endPart",h:b})})($__dart_deferred_initializers__,"QnzysfoAjz7RVtM4+EVJAeXuf0Q=");