((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_277",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cMe(d){var x=J.a1(d)
return new B.nh(A.b2(x.h(d,"assignment_id")),A.e_(x.h(d,"place_id")))},
cMd(d){var x=J.a1(d)
return new B.ng(A.b2(x.h(d,"assignment_id")),A.e_(x.h(d,"event_id")))},
b_I(d,e,f,g,h,i,j,k,l,m,n){var x=i==null?$.cLC().EM():i
return new B.fV(x,d,m,n,k,g,l,f,e,j,h)},
cLZ(d){var x=y.g.a(J.v(d,"activities"))
if(x==null)x=null
else{x=J.bJ(x,new B.b_O(),y.Q)
x=A.E(x,x.$ti.i("a6.E"))}return x==null?A.a([],y.e):x},
cM_(d){var x=y.g.a(J.v(d,"activity_assignments"))
if(x==null)x=null
else{x=J.bJ(x,new B.b_P(),y.W)
x=A.E(x,x.$ti.i("a6.E"))}return x==null?A.a([],y.c):x},
cM0(d){var x=y.g.a(J.v(d,"events"))
if(x==null)x=null
else{x=J.bJ(x,new B.b_S(),y.S)
x=A.E(x,x.$ti.i("a6.E"))}return x==null?A.a([],y.s):x},
cM1(d){var x=y.g.a(J.v(d,"places"))
if(x==null)x=null
else{x=J.bJ(x,new B.b_T(),y.H)
x=A.E(x,x.$ti.i("a6.E"))}return x==null?A.a([],y.n):x},
cM2(d){var x=y.g.a(J.v(d,"user_info"))
if(x==null)x=null
else{x=J.bJ(x,new B.b_U(),y.B)
x=A.E(x,x.$ti.i("a6.E"))}return x==null?A.a([],y.r):x},
hx:function hx(d,e){this.a=d
this.b=e},
ha:function ha(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
jH:function jH(d,e,f){this.a=d
this.b=e
this.c=f},
nd:function nd(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.d=e
_.e=f
_.f=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l},
nh:function nh(d,e){this.a=d
this.b=e},
ng:function ng(d,e){this.a=d
this.b=e},
fV:function fV(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b_O:function b_O(){},
b_P:function b_P(){},
b_S:function b_S(){},
b_T:function b_T(){},
b_U:function b_U(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
D=c[160]
B.hx.prototype={
gbj(d){return this.a},
gc4(d){return this.b}}
B.ha.prototype={
gbj(d){return this.a},
gc4(d){return this.b}}
B.jH.prototype={
jg(){var x,w=this.b
if(w==null)w=""
x=this.c
if(x==null)x=""
return C.d.bC(w+" "+x)},
k(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.jH&&A.a_(this)===A.a_(e)&&this.a==e.a
else x=!0
return x},
gv(d){return J.U(this.a)},
gbj(d){return this.a}}
B.nd.prototype={
gbj(d){return this.a},
gc4(d){return this.d}}
B.nh.prototype={}
B.ng.prototype={}
B.fV.prototype={
bl(){var x,w=this,v=w.e
v=v==null?null:v.h8()
x=w.f
x=x==null?null:x.h8()
return A.z(["id",w.a,"activity_id",w.b,"user",w.d,"start_time",v,"end_time",x,"title",w.r,"description",w.w,"data",w.x],y.N,y.z)},
k(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.fV&&A.a_(this)===A.a_(e)&&this.a===e.a
else x=!0
return x},
gv(d){return C.d.gv(this.a)},
gbj(d){return this.a},
gc4(d){return this.r}}
var z=a.updateTypes(["nd(@)","fV(@)","ha(@)","hx(@)","jH(@)"])
B.b_O.prototype={
$1(d){var x,w,v,u,t,s,r,q,p="created_at",o="updated_at"
y.P.a(d)
x=J.a1(d)
w=A.e_(x.h(d,"id"))
if(x.h(d,p)!=null)A.eA(A.b9(x.h(d,p)))
if(x.h(d,o)!=null)A.eA(A.b9(x.h(d,o)))
v=A.b2(x.h(d,"title"))
u=A.b2(x.h(d,"description"))
t=A.b2(x.h(d,"type"))
A.e_(x.h(d,"occasion"))
s=A.e_(x.h(d,"unit"))
r=A.lV(x.h(d,"is_hidden"))
q=A.e_(x.h(d,"order"))
x=y.Y.a(x.h(d,"data"))
x=x==null?null:J.fP(x,y.N,y.z)
return new B.nd(w,v,u,t,s,r,q,x,A.a([],y.c))},
$S:z+0}
B.b_P.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n=null,m="start_time",l="end_time"
y.P.a(d)
x=J.a1(d)
w=A.b2(x.h(d,"id"))
v=w==null?$.cLC().EM():w
u=A.e_(x.h(d,"activity_id"))
t=A.b2(x.h(d,"user"))
s=x.h(d,m)!=null?A.eA(A.b9(x.h(d,m))).oV():n
r=x.h(d,l)!=null?A.eA(A.b9(x.h(d,l))).oV():n
q=A.b2(x.h(d,"title"))
p=A.b2(x.h(d,"description"))
x=y.Y.a(x.h(d,"data"))
x=x==null?n:J.fP(x,y.N,y.z)
o=A.a([],y.n)
return B.b_I(u,x,p,r,A.a([],y.s),v,o,s,q,n,t)},
$S:z+1}
B.b_S.prototype={
$1(d){var x,w,v,u,t="start_time",s="end_time"
y.P.a(d)
x=J.a1(d)
w=A.e_(x.h(d,"id"))
v=A.b2(x.h(d,"title"))
u=x.h(d,t)!=null?A.eA(A.b9(x.h(d,t))).oV():A.z3(0,!1)
return new B.ha(w,v,u,x.h(d,s)!=null?A.eA(A.b9(x.h(d,s))).oV():A.z3(0,!1))},
$S:z+2}
B.b_T.prototype={
$1(d){var x
y.P.a(d)
x=J.a1(d)
return new B.hx(A.e_(x.h(d,"id")),A.b2(x.h(d,"title")))},
$S:z+3}
B.b_U.prototype={
$1(d){var x
y.P.a(d)
x=J.a1(d)
return new B.jH(A.b2(x.h(d,"id")),A.b2(x.h(d,"name")),A.b2(x.h(d,"surname")))},
$S:z+4};(function inheritance(){var x=a.inheritMany
x(A.G,[B.hx,B.ha,B.jH,B.nd,B.nh,B.ng,B.fV])
x(A.c8,[B.b_O,B.b_P,B.b_S,B.b_T,B.b_U])})()
var y=(function rtii(){var x=A.C
return{W:x("fV"),S:x("ha"),Q:x("nd"),H:x("hx"),B:x("jH"),c:x("t<fV>"),s:x("t<ha>"),e:x("t<nd>"),n:x("t<hx>"),r:x("t<jH>"),P:x("A<m,@>"),N:x("m"),z:x("@"),g:x("B<@>?"),Y:x("A<@,@>?")}})();(function lazyInitializers(){var x=a.lazy
x($,"dN_","cLC",()=>new D.aGP())})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_277",e:"endPart",h:b})})($__dart_deferred_initializers__,"TTtBPFyM3ac5sL9MNtJd7enaFKw=");