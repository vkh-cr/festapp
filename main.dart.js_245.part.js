((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_245",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,C,B={
cKu(d){var x=J.a0(d)
return new B.jc(x.h(d,"x"),x.h(d,"y"),x.h(d,"id"),x.h(d,"group"),x.h(d,"order_product_ticket"),x.h(d,"type"),x.h(d,"state"),x.h(d,"title"),null,x.h(d,"product"),null)},
jc:function jc(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.z=null
_.Q=n
_.as=null},
b4V:function b4V(d){this.a=d},
b4W:function b4W(d){this.a=d},
b4X:function b4X(d){this.a=d},
b4Y:function b4Y(){},
b4Z:function b4Z(d){this.a=d},
b5_:function b5_(d){this.a=d},
b4U:function b4U(d){this.a=d},
b50:function b50(){},
b51:function b51(d){this.a=d},
bBf(d){var x=null
switch(d){case"ordered":case"expired":return A.q("Ordered",x)
case"paid":return A.q("Paid",x)
case"sent":return A.q("Sent",x)
case"used":return A.q("Used",x)
case"storno":return A.q("Storno",x)
default:return"???"}},
doe(d){return d+";"+B.bBf(d)},
cYd(d,e,f,g,h,i,j,k,l,m,n){return new B.hA(h,d,n,l,m,f,j,k,g,e,i)},
cYe(d){var x=null,w="created_at",v="updated_at",u="data",t=J.a0(d),s=t.h(d,"id"),r=t.h(d,w)!=null?A.ej(t.h(d,w)):x,q=t.h(d,v)!=null?A.ej(t.h(d,v)):x,p=t.h(d,"price")!=null?A.ld(J.as(t.h(d,"price"))):x,o=t.h(d,"currency_code"),n=t.h(d,"state"),m=t.h(d,u)!=null?J.v(t.h(d,u),"form"):x,l=t.h(d,u),k=t.h(d,"occasion"),j=t.h(d,"payment_info")
return B.cYd(r,o,l,m,s,t.h(d,"note_hidden"),k,j,p,n,q)},
hA:function hA(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.z=n
_.ay=_.ax=_.as=_.Q=null},
bBg:function bBg(){},
d_P(d,e,f,g,h,i,j,k){return new B.hB(e,d,j,i,f,g)},
d_Q(d){var x="created_at",w="updated_at",v=J.a0(d),u=v.h(d,"id"),t=v.h(d,x)!=null?A.ej(v.h(d,x)):null,s=v.h(d,w)!=null?A.ej(v.h(d,w)):null,r=v.h(d,"ticket_symbol"),q=v.h(d,"state"),p=v.h(d,"occasion")
return B.d_P(t,u,v.h(d,"note"),v.h(d,"note_hidden"),p,q,r,s)},
hB:function hB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bR2:function bR2(){},
cV4(d){var x,w,v,u,t,s,r,q=y.w,p=A.H(q,y.q)
for(x=y.E,w=0;w<3;++w)p.m(0,D.mY[w],A.a([],x))
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.M)(d),++w){v=d[w]
u=v.Q
if(u==null)u=""
p.h(0,E.b.p(D.mY,u)?u:E.b.gZ(D.mY)).push(v)}t=A.H(q,y.d)
for(w=0;w<3;++w){s=D.mY[w]
if(p.h(0,s).length!==0){q=p.h(0,s)
q.toString
r=new A.J(q,new B.bip(),A.U(q).i("J<1,h>")).bw(0," | ")}else r=""
t.m(0,s,new A.h9(new A.hp(),r))}return t},
bip:function bip(){},
bc4(d){return B.dgX(d)},
dgX(d){var x=0,w=A.l(y.v),v,u
var $async$bc4=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.d($.Cm().d7("delete_order",A.x(["order_id",d.a],y.w,v),v),$async$bc4)
case 2:u=f
v=J.a0(u)
if(!J.p(v.h(u,"code"),200))throw A.o(A.cO("Deleting order failed: "+A.n(v.h(u,"code"))+": "+A.n(v.h(u,"message"))))
return A.j(null,w)}})
return A.k($async$bc4,w)},
bcm(d,e){return B.dh4(d,e)},
dh4(d,e){var x=0,w=A.l(y.v),v,u,t
var $async$bcm=A.f(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.Cm().d7("update_order_note_hidden",A.x(["order_id",d,"new_note_hidden",e],y.w,v),v),$async$bcm)
case 2:if(!u.p(t.v(g,"code"),200))throw A.o(A.cO("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$bcm,w)},
bcE(d,e){return B.dhh(d,e)},
dhh(d,e){var x=0,w=A.l(y.v),v,u,t
var $async$bcE=A.f(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.Ou().d7("update_ticket_note_hidden",A.x(["ticket_id",d,"new_note_hidden",e],y.w,v),v),$async$bcE)
case 2:if(!u.p(t.v(g,"code"),200))throw A.o(A.cO("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$bcE,w)}},D,F
J=c[1]
A=c[0]
E=c[2]
C=c[101]
B=a.updateHolder(c[77],B)
D=c[296]
F=c[134]
B.jc.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.n(x)+", Sedadlo "+A.n(this.w)},
b6(){var x,w,v=this,u=A.H(y.w,y.b)
u.m(0,"x",v.a)
u.m(0,"y",v.b)
u.m(0,"type",v.f)
u.m(0,"title",v.w)
x=v.c
if(x!=null)u.m(0,"id",x)
x=v.z
w=x==null
if((w?null:x.a)!=null)u.m(0,"group",w?null:x.a)
x=v.y
w=x==null
if(!w||v.x!=null){if(w){x=v.x
x=x==null?null:x.a}u.m(0,"product",x)}return u},
bCr(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.cP(k,new B.b4V(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.cP(k,new B.b4W(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.U(k)
t=u.i("d7<1,m?>")
k=A.B(new A.d7(new A.ab(k,new B.b4X(w),u.i("ab<1>")),new B.b4Y(),t),t.i("w.E"))
v=k}}if(v==null)s=l
else{k=A.U(v)
u=k.i("d7<1,h>")
u=new A.ab(new A.d7(new A.ab(v,new B.b4Z(m),k.i("ab<1>")),new B.b5_(m),u),new B.b50(),u.i("ab<w.E>")).bw(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:E.b.fN(k,new B.b51(x))}k=r==null
q=k?l:r.aL_()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a2X()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+k:""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.n(k)+" "+u+"\n"+A.q("Ticket",l)+" "+A.n(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.q("Price",l)
n=m.x
n=n==null?l:n.r
return A.n(k)+" "+u+"\n"+t+": "+C.jt(d,n==null?0:n,l,0)},
gbh(d){return this.c},
gc0(d){return this.w},
sHE(d){return this.as=d}}
B.hA.prototype={
bMX(){var x,w
if(this.e==="ordered"){x=this.ay
x=x==null||x.w==null}else x=!0
if(x)return!1
w=A.cm(F.rx().gdq(),F.rx().gdh(),F.rx().geb(),0,0,0,0,0)
x=this.ay.w
x.toString
return w.fi(A.cm(A.dS(x),A.eA(x),A.iP(x),0,0,0,0,0))},
b6(){var x,w=this,v=w.b
v=v==null?null:v.fz()
x=w.c
x=x==null?null:x.fz()
return A.x(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.w,y.b)},
pb(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="yyyy-MM-dd",f=i.a,e=f==null,d=A.aD(e?0:f)
f=A.aD(e?0:f)
e=i.d
e=A.aD(e!=null?C.jt(a0,e,i.y,0):"")
x=i.e
if(x==null)x="ordered"
x=A.aD(x+";"+B.bBf(x))
w=i.ay
if((w==null?h:w.e)!=null){v=w.e
v.toString
w=C.jt(a0,v,w.x,0)}else w=""
w=A.aD(w)
v=i.ay
if((v==null?h:v.f)!=null){u=v.f
u.toString
v=C.jt(a0,u,v.x,0)}else v=""
v=A.aD(v)
u=i.ay
if((u==null?h:u.r)!=null){t=u.r
t.toString
u=C.jt(a0,t,u.x,0)}else u=""
u=A.aD(u)
t=i.ay
s=t==null
r=s?h:t.d
r=A.aD(r==null?0:r)
if((s?h:t.w)!=null){t=A.h3(g,h)
s=i.ay.w
s.toString
s=t.cF(s)
t=s}else t=""
t=A.aD(t)
s=i.b
s=A.aD(s!=null?A.h3(g,h).cF(s):"")
q=A.aD(i.a2X())
p=i.f
p=A.aD(p==null?h:J.v(p,"email"))
o=i.ax
o=A.aD(o!=null?new A.J(o,new B.bBg(),A.U(o).i("J<1,h>")).bw(0," | "):"")
n=A.aD(i.aL_())
m=i.z
m=A.aD(m==null?"":m)
l=A.aD("")
k=A.aD("")
j=i.Q
j=j==null?h:j.ax
return A.ln(A.x(["id",d,"order_symbol",f,"price",e,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"created_at",s,"data",q,"email",p,"ticket_products",o,"note",n,"note_hidden",m,"orders_history",l,"transactions",k,"forms",A.aD(j==null?"":j)],y.w,y.d),!1,y.b)},
ev(){var x=0,w=A.l(y.v),v=this
var $async$ev=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(B.bc4(v),$async$ev)
case 2:return A.j(null,w)}})
return A.k($async$ev,w)},
eQ(){var x=0,w=A.l(y.v),v=this,u,t
var $async$eQ=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.d(B.bcm(t,u),$async$eQ)
case 2:return A.j(null,w)}})
return A.k($async$eQ,w)},
kE(){return"Order #"+A.n(this.a)},
a2X(){var x=this.f,w=x==null,v=A.n(w?null:J.v(x,"name"))
return v+" "+A.n(w?null:J.v(x,"surname"))},
aL_(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.n(x==null?"":x)},
gbh(d){return this.a}}
B.hB.prototype={
b6(){return A.x(["state",this.e,"note_hidden",this.w],y.w,y.b)},
pb(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k=A.aD(k==null?0:k)
x=m.b
x=A.aD(x!=null?A.h3("yyyy-MM-dd",l).cF(x):"")
w=m.d
w=A.aD(w==null?"":w)
v=m.e
if(v==null)v="ordered"
v=A.aD(v+";"+B.bBf(v))
u=m.r
u=A.aD(u==null?"":u)
t=m.w
t=A.aD(t==null?"":t)
s=m.Q
r=s!=null
q=A.aD(r?"Order #"+A.n(s.a):"")
s=A.aD(r?s.a2X():"")
r=m.z
r=A.aD(r!=null?new A.J(r,new B.bR2(),A.U(r).i("J<1,h>")).bw(0," | "):"")
p=m.y
if(p!=null){o=p.z
o=o==null?l:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aD(p)
o=m.x
n=A.x(["id",k,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"ticketSpot",p,"price",A.aD(o!=null?C.jt(d,o,l,0):""),"ticketProductsEdit",A.aD("")],y.w,y.d)
k=m.Q.ax
n.H(0,B.cV4(k==null?A.a([],y.E):k))
return A.ln(n,!1,y.b)},
ev(){var x=0,w=A.l(y.v)
var $async$ev=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:return A.j(null,w)}})
return A.k($async$ev,w)},
eQ(){var x=0,w=A.l(y.v),v=this,u,t
var $async$eQ=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.d(B.bcE(t,u),$async$eQ)
case 2:return A.j(null,w)}})
return A.k($async$eQ,w)},
kE(){var x=this.d
return x==null?J.as(this.a):x},
gbh(d){return this.a}}
var z=a.updateTypes(["y(nK)","y(hB)","m?(nK)","y(hA)","h(h)"])
B.b4V.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.b4W.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.b4X.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.b4Y.prototype={
$1(d){return d.d},
$S:z+2}
B.b4Z.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:227}
B.b5_.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:E.b.fN(w,new B.b4U(d))}w=x==null?null:x.d
return w==null?"":w},
$S:1231}
B.b4U.prototype={
$1(d){return d.a==this.a},
$S:45}
B.b50.prototype={
$1(d){return d.length!==0},
$S:17}
B.b51.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bBg.prototype={
$1(d){return d.kE()},
$S:158}
B.bR2.prototype={
$1(d){return d.kE()},
$S:158}
B.bip.prototype={
$1(d){return d.kE()},
$S:158};(function installTearOffs(){var x=a._static_1
x(B,"d5k","doe",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.jc,A.I)
w(A.ce,[B.b4V,B.b4W,B.b4X,B.b4Y,B.b4Z,B.b5_,B.b4U,B.b50,B.b51,B.bBg,B.bR2,B.bip])
w(A.ia,[B.hA,B.hB])})()
A.c9(b.typeUniverse,JSON.parse('{"hA":{"ia":[]},"hB":{"ia":[]}}'))
var y={E:A.E("u<f1>"),q:A.E("C<f1>"),w:A.E("h"),d:A.E("h9"),b:A.E("@"),v:A.E("~")};(function constants(){var x=a.makeConstList
D.mY=A.a(x(["spot","food","others"]),A.E("u<h>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dLU","Ou",()=>$.hS().gmP(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_245",e:"endPart",h:b})})($__dart_deferred_initializers__,"kqOA2M3UhAasZIAezslmRyUdloY=");