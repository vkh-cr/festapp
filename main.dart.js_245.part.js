((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_245",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,C,B={
cIq(d){var x=J.a1(d)
return new B.j9(x.h(d,"x"),x.h(d,"y"),x.h(d,"id"),x.h(d,"group"),x.h(d,"order_product_ticket"),x.h(d,"type"),x.h(d,"state"),x.h(d,"title"),null,x.h(d,"product"),null)},
j9:function j9(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b4v:function b4v(d){this.a=d},
b4w:function b4w(d){this.a=d},
b4x:function b4x(d){this.a=d},
b4y:function b4y(){},
b4z:function b4z(d){this.a=d},
b4A:function b4A(d){this.a=d},
b4u:function b4u(d){this.a=d},
b4B:function b4B(){},
b4C:function b4C(d){this.a=d},
bAi(d){var x=null
switch(d){case"ordered":case"expired":return A.q("Ordered",x)
case"paid":return A.q("Paid",x)
case"sent":return A.q("Sent",x)
case"used":return A.q("Used",x)
case"storno":return A.q("Storno",x)
default:return"???"}},
dlV(d){return d+";"+B.bAi(d)},
cW0(d,e,f,g,h,i,j,k,l,m,n){return new B.hy(h,d,n,l,m,f,j,k,g,e,i)},
cW1(d){var x=null,w="created_at",v="updated_at",u="data",t=J.a1(d),s=t.h(d,"id"),r=t.h(d,w)!=null?A.eo(t.h(d,w)):x,q=t.h(d,v)!=null?A.eo(t.h(d,v)):x,p=t.h(d,"price")!=null?A.lO(J.ar(t.h(d,"price"))):x,o=t.h(d,"currency_code"),n=t.h(d,"state"),m=t.h(d,u)!=null?J.v(t.h(d,u),"form"):x,l=t.h(d,u),k=t.h(d,"occasion"),j=t.h(d,"payment_info")
return B.cW0(r,o,l,m,s,t.h(d,"note_hidden"),k,j,p,n,q)},
hy:function hy(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bAj:function bAj(){},
cYC(d,e,f,g,h,i,j,k){return new B.hz(e,d,j,i,f,g)},
cYD(d){var x="created_at",w="updated_at",v=J.a1(d),u=v.h(d,"id"),t=v.h(d,x)!=null?A.eo(v.h(d,x)):null,s=v.h(d,w)!=null?A.eo(v.h(d,w)):null,r=v.h(d,"ticket_symbol"),q=v.h(d,"state"),p=v.h(d,"occasion")
return B.cYC(t,u,v.h(d,"note"),v.h(d,"note_hidden"),p,q,r,s)},
hz:function hz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bQ5:function bQ5(){},
cSW(d){var x,w,v,u,t,s,r,q=y.w,p=A.I(q,y.q)
for(x=y.E,w=0;w<3;++w)p.m(0,D.mV[w],A.a([],x))
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.N)(d),++w){v=d[w]
u=v.Q
if(u==null)u=""
p.h(0,E.b.p(D.mV,u)?u:E.b.gZ(D.mV)).push(v)}t=A.I(q,y.d)
for(w=0;w<3;++w){s=D.mV[w]
if(p.h(0,s).length!==0){q=p.h(0,s)
q.toString
r=new A.K(q,new B.bhz(),A.U(q).i("K<1,h>")).bQ(0," | ")}else r=""
t.m(0,s,new A.h7(new A.hm(),r))}return t},
bhz:function bhz(){},
bbC(d){return B.deL(d)},
deL(d){var x=0,w=A.m(y.v),v,u
var $async$bbC=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.d($.C9().de("delete_order",A.z(["order_id",d.a],y.w,v),v),$async$bbC)
case 2:u=f
v=J.a1(u)
if(!J.p(v.h(u,"code"),200))throw A.n(A.cM("Deleting order failed: "+A.o(v.h(u,"code"))+": "+A.o(v.h(u,"message"))))
return A.k(null,w)}})
return A.l($async$bbC,w)},
bbU(d,e){return B.deT(d,e)},
deT(d,e){var x=0,w=A.m(y.v),v,u,t
var $async$bbU=A.i(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.C9().de("update_order_note_hidden",A.z(["order_id",d,"new_note_hidden",e],y.w,v),v),$async$bbU)
case 2:if(!u.p(t.v(g,"code"),200))throw A.n(A.cM("Saving of note has failed."))
return A.k(null,w)}})
return A.l($async$bbU,w)},
bcb(d,e){return B.df5(d,e)},
df5(d,e){var x=0,w=A.m(y.v),v,u,t
var $async$bcb=A.i(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.Oc().de("update_ticket_note_hidden",A.z(["ticket_id",d,"new_note_hidden",e],y.w,v),v),$async$bcb)
case 2:if(!u.p(t.v(g,"code"),200))throw A.n(A.cM("Saving of note has failed."))
return A.k(null,w)}})
return A.l($async$bcb,w)}},D,F
J=c[1]
A=c[0]
E=c[2]
C=c[102]
B=a.updateHolder(c[79],B)
D=c[296]
F=c[135]
B.j9.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
b0(){var x,w,v=this,u=A.I(y.w,y.b)
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
bBQ(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.d2(k,new B.b4v(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.d2(k,new B.b4w(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.U(k)
t=u.i("dc<1,f?>")
k=A.D(new A.dc(new A.ad(k,new B.b4x(w),u.i("ad<1>")),new B.b4y(),t),t.i("x.E"))
v=k}}if(v==null)s=l
else{k=A.U(v)
u=k.i("dc<1,h>")
u=new A.ad(new A.dc(new A.ad(v,new B.b4z(m),k.i("ad<1>")),new B.b4A(m),u),new B.b4B(),u.i("ad<x.E>")).bQ(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:E.b.fS(k,new B.b4C(x))}k=r==null
q=k?l:r.aKK()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a2Q()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+k:""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.o(k)+" "+u+"\n"+A.q("Ticket",l)+" "+A.o(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.q("Price",l)
n=m.x
n=n==null?l:n.r
return A.o(k)+" "+u+"\n"+t+": "+C.jr(d,n==null?0:n,l,0)},
gbi(d){return this.c},
gc0(d){return this.w},
sHC(d){return this.as=d}}
B.hy.prototype={
bMi(){var x,w
if(this.e==="ordered"){x=this.ay
x=x==null||x.w==null}else x=!0
if(x)return!1
w=A.cq(F.rw().gdr(),F.rw().gdi(),F.rw().ged(),0,0,0,0,0)
x=this.ay.w
x.toString
return w.f1(A.cq(A.dQ(x),A.ex(x),A.iM(x),0,0,0,0,0))},
b0(){var x,w=this,v=w.b
v=v==null?null:v.fI()
x=w.c
x=x==null?null:x.fI()
return A.z(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.w,y.b)},
pa(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="yyyy-MM-dd",f=i.a,e=f==null,d=A.aD(e?0:f)
f=A.aD(e?0:f)
e=i.d
e=A.aD(e!=null?C.jr(a0,e,i.y,0):"")
x=i.e
if(x==null)x="ordered"
x=A.aD(x+";"+B.bAi(x))
w=i.ay
if((w==null?h:w.e)!=null){v=w.e
v.toString
w=C.jr(a0,v,w.x,0)}else w=""
w=A.aD(w)
v=i.ay
if((v==null?h:v.f)!=null){u=v.f
u.toString
v=C.jr(a0,u,v.x,0)}else v=""
v=A.aD(v)
u=i.ay
if((u==null?h:u.r)!=null){t=u.r
t.toString
u=C.jr(a0,t,u.x,0)}else u=""
u=A.aD(u)
t=i.ay
s=t==null
r=s?h:t.d
r=A.aD(r==null?0:r)
if((s?h:t.w)!=null){t=A.hs(g,h)
s=i.ay.w
s.toString
s=t.d5(s)
t=s}else t=""
t=A.aD(t)
s=i.b
s=A.aD(s!=null?A.hs(g,h).d5(s):"")
q=A.aD(i.a2Q())
p=i.f
p=A.aD(p==null?h:J.v(p,"email"))
o=i.ax
o=A.aD(o!=null?new A.K(o,new B.bAj(),A.U(o).i("K<1,h>")).bQ(0," | "):"")
n=A.aD(i.aKK())
m=i.z
m=A.aD(m==null?"":m)
l=A.aD("")
k=A.aD("")
j=i.Q
j=j==null?h:j.ax
return A.lk(A.z(["id",d,"order_symbol",f,"price",e,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"created_at",s,"data",q,"email",p,"ticket_products",o,"note",n,"note_hidden",m,"orders_history",l,"transactions",k,"forms",A.aD(j==null?"":j)],y.w,y.d),!1,y.b)},
ev(){var x=0,w=A.m(y.v),v=this
var $async$ev=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(B.bbC(v),$async$ev)
case 2:return A.k(null,w)}})
return A.l($async$ev,w)},
eR(){var x=0,w=A.m(y.v),v=this,u,t
var $async$eR=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.d(B.bbU(t,u),$async$eR)
case 2:return A.k(null,w)}})
return A.l($async$eR,w)},
lr(){return"Order #"+A.o(this.a)},
a2Q(){var x=this.f,w=x==null,v=A.o(w?null:J.v(x,"name"))
return v+" "+A.o(w?null:J.v(x,"surname"))},
aKK(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.o(x==null?"":x)},
gbi(d){return this.a}}
B.hz.prototype={
b0(){return A.z(["state",this.e,"note_hidden",this.w],y.w,y.b)},
pa(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k=A.aD(k==null?0:k)
x=m.b
x=A.aD(x!=null?A.hs("yyyy-MM-dd",l).d5(x):"")
w=m.d
w=A.aD(w==null?"":w)
v=m.e
if(v==null)v="ordered"
v=A.aD(v+";"+B.bAi(v))
u=m.r
u=A.aD(u==null?"":u)
t=m.w
t=A.aD(t==null?"":t)
s=m.Q
r=s!=null
q=A.aD(r?"Order #"+A.o(s.a):"")
s=A.aD(r?s.a2Q():"")
r=m.z
r=A.aD(r!=null?new A.K(r,new B.bQ5(),A.U(r).i("K<1,h>")).bQ(0," | "):"")
p=m.y
if(p!=null){o=p.z
o=o==null?l:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aD(p)
o=m.x
n=A.z(["id",k,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"ticketSpot",p,"price",A.aD(o!=null?C.jr(d,o,l,0):""),"ticketProductsEdit",A.aD("")],y.w,y.d)
k=m.Q.ax
n.H(0,B.cSW(k==null?A.a([],y.E):k))
return A.lk(n,!1,y.b)},
ev(){var x=0,w=A.m(y.v)
var $async$ev=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:return A.k(null,w)}})
return A.l($async$ev,w)},
eR(){var x=0,w=A.m(y.v),v=this,u,t
var $async$eR=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.d(B.bcb(t,u),$async$eR)
case 2:return A.k(null,w)}})
return A.l($async$eR,w)},
lr(){var x=this.d
return x==null?J.ar(this.a):x},
gbi(d){return this.a}}
var z=a.updateTypes(["w(nK)","w(hz)","f?(nK)","w(hy)","h(h)"])
B.b4v.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.b4w.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.b4x.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.b4y.prototype={
$1(d){return d.d},
$S:z+2}
B.b4z.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:258}
B.b4A.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:E.b.fS(w,new B.b4u(d))}w=x==null?null:x.d
return w==null?"":w},
$S:1221}
B.b4u.prototype={
$1(d){return d.a==this.a},
$S:41}
B.b4B.prototype={
$1(d){return d.length!==0},
$S:17}
B.b4C.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bAj.prototype={
$1(d){return d.lr()},
$S:168}
B.bQ5.prototype={
$1(d){return d.lr()},
$S:168}
B.bhz.prototype={
$1(d){return d.lr()},
$S:168};(function installTearOffs(){var x=a._static_1
x(B,"d38","dlV",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.j9,A.H)
w(A.ce,[B.b4v,B.b4w,B.b4x,B.b4y,B.b4z,B.b4A,B.b4u,B.b4B,B.b4C,B.bAj,B.bQ5,B.bhz])
w(A.i7,[B.hy,B.hz])})()
A.c8(b.typeUniverse,JSON.parse('{"hy":{"i7":[]},"hz":{"i7":[]}}'))
var y={E:A.E("u<f_>"),q:A.E("B<f_>"),w:A.E("h"),d:A.E("h7"),b:A.E("@"),v:A.E("~")};(function constants(){var x=a.makeConstList
D.mV=A.a(x(["spot","food","others"]),A.E("u<h>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dJr","Oc",()=>$.hQ().gmO(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_245",e:"endPart",h:b})})($__dart_deferred_initializers__,"2vT1uLZFzsiJzlU3NB9L7aFQPGY=");