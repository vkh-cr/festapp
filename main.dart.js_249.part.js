((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_249",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,C,F,B={
cCl(d){var x=J.a2(d)
return new B.iU(x.h(d,"x"),x.h(d,"y"),x.h(d,"id"),x.h(d,"group"),x.h(d,"order_product_ticket"),x.h(d,"type"),x.h(d,"state"),x.h(d,"title"),null,x.h(d,"product"),null)},
iU:function iU(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b2r:function b2r(d){this.a=d},
b2s:function b2s(d){this.a=d},
b2t:function b2t(d){this.a=d},
b2u:function b2u(){},
b2v:function b2v(d){this.a=d},
b2w:function b2w(d){this.a=d},
b2q:function b2q(d){this.a=d},
b2x:function b2x(){},
b2y:function b2y(d){this.a=d},
bxN(d){var x=null
switch(d){case"ordered":case"expired":return A.r("Ordered",x)
case"paid":return A.r("Paid",x)
case"sent":return A.r("Sent",x)
case"used":return A.r("Used",x)
case"storno":return A.r("Storno",x)
default:return"???"}},
ddC(d){return d+";"+B.bxN(d)},
cQ4(d,e,f,g,h,i,j,k,l,m,n){return new B.hh(h,d,n,l,m,f,j,k,g,e,i)},
cQ5(d){var x=null,w="created_at",v="updated_at",u="data",t=J.a2(d),s=t.h(d,"id"),r=t.h(d,w)!=null?A.eD(t.h(d,w)):x,q=t.h(d,v)!=null?A.eD(t.h(d,v)):x,p=t.h(d,"price")!=null?A.lr(J.ap(t.h(d,"price"))):x,o=t.h(d,"currency_code"),n=t.h(d,"state"),m=t.h(d,u)!=null?J.v(t.h(d,u),"form"):x,l=t.h(d,u),k=t.h(d,"occasion"),j=t.h(d,"payment_info")
return B.cQ4(r,o,l,m,s,t.h(d,"note_hidden"),k,j,p,n,q)},
hh:function hh(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bxO:function bxO(){},
cSJ(d,e,f,g,h,i,j,k){return new B.hi(e,d,j,i,f,g)},
cSK(d){var x="created_at",w="updated_at",v=J.a2(d),u=v.h(d,"id"),t=v.h(d,x)!=null?A.eD(v.h(d,x)):null,s=v.h(d,w)!=null?A.eD(v.h(d,w)):null,r=v.h(d,"ticket_symbol"),q=v.h(d,"state"),p=v.h(d,"occasion")
return B.cSJ(t,u,v.h(d,"note"),v.h(d,"note_hidden"),p,q,r,s)},
hi:function hi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bNc:function bNc(){},
cN4(d){var x,w,v,u,t,s,r,q=y.w,p=A.K(q,y.q)
for(x=y.E,w=0;w<3;++w)p.m(0,D.mG[w],A.a([],x))
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.S)(d),++w){v=d[w]
u=v.Q
if(u==null)u=""
p.h(0,E.b.n(D.mG,u)?u:E.b.gY(D.mG)).push(v)}t=A.K(q,y.d)
for(w=0;w<3;++w){s=D.mG[w]
if(p.h(0,s).length!==0){q=p.h(0,s)
q.toString
r=new A.N(q,new B.bfn(),A.V(q).i("N<1,m>")).c5(0," | ")}else r=""
t.m(0,s,new A.h9(new A.hj(),r))}return t},
bfn:function bfn(){},
b9v(d){var x=0,w=A.l(y.v),v,u
var $async$b9v=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.d($.Bx().dC("delete_order",A.z(["order_id",d.a],y.w,v),v),$async$b9v)
case 2:u=f
v=J.a2(u)
if(!J.p(v.h(u,"code"),200))throw A.n(A.cK("Deleting order failed: "+A.o(v.h(u,"code"))+": "+A.o(v.h(u,"message"))))
return A.j(null,w)}})
return A.k($async$b9v,w)},
b9N(d,e){var x=0,w=A.l(y.v),v,u,t
var $async$b9N=A.f(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.Bx().dC("update_order_note_hidden",A.z(["order_id",d,"new_note_hidden",e],y.w,v),v),$async$b9N)
case 2:if(!u.p(t.v(g,"code"),200))throw A.n(A.cK("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$b9N,w)},
ba4(d,e){var x=0,w=A.l(y.v),v,u,t
var $async$ba4=A.f(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.NG().dC("update_ticket_note_hidden",A.z(["ticket_id",d,"new_note_hidden",e],y.w,v),v),$async$ba4)
case 2:if(!u.p(t.v(g,"code"),200))throw A.n(A.cK("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$ba4,w)}},D
J=c[1]
A=c[0]
E=c[2]
C=c[102]
F=c[128]
B=a.updateHolder(c[84],B)
D=c[296]
B.iU.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
bn(){var x,w,v=this,u=A.K(y.w,y.b)
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
bz3(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.dL(k,new B.b2r(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.dL(k,new B.b2s(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.V(k)
t=u.i("dk<1,h?>")
t=A.E(new A.dk(new A.ai(k,new B.b2t(w),u.i("ai<1>")),new B.b2u(),t),!0,t.i("y.E"))
v=t}}if(v==null)s=l
else{k=A.V(v)
u=k.i("dk<1,m>")
u=new A.ai(new A.dk(new A.ai(v,new B.b2v(m),k.i("ai<1>")),new B.b2w(m),u),new B.b2x(),u.i("ai<y.E>")).c5(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:E.b.fv(k,new B.b2y(x))}k=r==null
q=k?l:r.aJm()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a28()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+A.o(k):""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.o(k)+" "+u+"\n"+A.r("Ticket",l)+" "+A.o(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.r("Price",l)
n=m.x
n=n==null?l:n.r
return A.o(k)+" "+u+"\n"+t+": "+C.j8(d,n==null?0:n,l,0)},
gbo(d){return this.c},
gde(d){return this.w},
sHo(d){return this.as=d}}
B.hh.prototype={
bJv(){var x,w
if(this.e==="ordered"){x=this.ay
x=x==null||x.w==null}else x=!0
if(x)return!1
w=A.cv(A.bu(F.vq()),A.bB(F.vq()),A.cr(F.vq()),0,0,0,0,0)
x=this.ay.w
x.toString
return w.fH(A.cv(A.bu(x),A.bB(x),A.cr(x),0,0,0,0,0))},
bn(){var x,w=this,v=w.b
v=v==null?null:v.he()
x=w.c
x=x==null?null:x.he()
return A.z(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.w,y.b)},
p_(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="yyyy-MM-dd",f=i.a,e=f==null,d=A.aC(e?0:f)
f=A.aC(e?0:f)
e=i.d
e=A.aC(e!=null?C.j8(a0,e,i.y,0):"")
x=i.e
if(x==null)x="ordered"
x=A.aC(x+";"+B.bxN(x))
w=i.ay
if((w==null?h:w.e)!=null){v=w.e
v.toString
w=C.j8(a0,v,w.x,0)}else w=""
w=A.aC(w)
v=i.ay
if((v==null?h:v.f)!=null){u=v.f
u.toString
v=C.j8(a0,u,v.x,0)}else v=""
v=A.aC(v)
u=i.ay
if((u==null?h:u.r)!=null){t=u.r
t.toString
u=C.j8(a0,t,u.x,0)}else u=""
u=A.aC(u)
t=i.ay
s=t==null
r=s?h:t.d
r=A.aC(r==null?0:r)
if((s?h:t.w)!=null){t=A.hm(g,h)
s=i.ay.w
s.toString
s=t.dm(s)
t=s}else t=""
t=A.aC(t)
s=i.b
s=A.aC(s!=null?A.hm(g,h).dm(s):"")
q=A.aC(i.a28())
p=i.f
p=A.aC(p==null?h:J.v(p,"email"))
o=i.ax
o=A.aC(o!=null?new A.N(o,new B.bxO(),A.V(o).i("N<1,m>")).c5(0," | "):"")
n=A.aC(i.aJm())
m=i.z
m=A.aC(m==null?"":m)
l=A.aC("")
k=A.aC("")
j=i.Q
j=j==null?h:j.ax
return A.kX(A.z(["id",d,"order_symbol",f,"price",e,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"created_at",s,"data",q,"email",p,"ticket_products",o,"note",n,"note_hidden",m,"orders_history",l,"transactions",k,"forms",A.aC(j==null?"":j)],y.w,y.d),!1,y.b)},
ex(){var x=0,w=A.l(y.v),v=this
var $async$ex=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(B.b9v(v),$async$ex)
case 2:return A.j(null,w)}})
return A.k($async$ex,w)},
eP(){var x=0,w=A.l(y.v),v=this,u,t
var $async$eP=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.d(B.b9N(t,u),$async$eP)
case 2:return A.j(null,w)}})
return A.k($async$eP,w)},
lr(){return"Order #"+A.o(this.a)},
a28(){var x=this.f,w=x==null,v=A.o(w?null:J.v(x,"name"))
return v+" "+A.o(w?null:J.v(x,"surname"))},
aJm(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.o(x==null?"":x)},
gbo(d){return this.a}}
B.hi.prototype={
bn(){return A.z(["state",this.e,"note_hidden",this.w],y.w,y.b)},
p_(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k=A.aC(k==null?0:k)
x=m.b
x=A.aC(x!=null?A.hm("yyyy-MM-dd",l).dm(x):"")
w=m.d
w=A.aC(w==null?"":w)
v=m.e
if(v==null)v="ordered"
v=A.aC(v+";"+B.bxN(v))
u=m.r
u=A.aC(u==null?"":u)
t=m.w
t=A.aC(t==null?"":t)
s=m.Q
r=s!=null
q=A.aC(r?"Order #"+A.o(s.a):"")
s=A.aC(r?s.a28():"")
r=m.z
r=A.aC(r!=null?new A.N(r,new B.bNc(),A.V(r).i("N<1,m>")).c5(0," | "):"")
p=m.y
if(p!=null){o=p.z
o=o==null?l:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aC(p)
o=m.x
n=A.z(["id",k,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"ticketSpot",p,"price",A.aC(o!=null?C.j8(d,o,l,0):""),"ticketProductsEdit",A.aC("")],y.w,y.d)
k=m.Q.ax
n.H(0,B.cN4(k==null?A.a([],y.E):k))
return A.kX(n,!1,y.b)},
ex(){var x=0,w=A.l(y.v)
var $async$ex=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:return A.j(null,w)}})
return A.k($async$ex,w)},
eP(){var x=0,w=A.l(y.v),v=this,u,t
var $async$eP=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.d(B.ba4(t,u),$async$eP)
case 2:return A.j(null,w)}})
return A.k($async$eP,w)},
lr(){var x=this.d
return x==null?J.ap(this.a):x},
gbo(d){return this.a}}
var z=a.updateTypes(["x(nk)","x(hi)","h?(nk)","x(hh)","m(m)"])
B.b2r.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.b2s.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.b2t.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.b2u.prototype={
$1(d){return d.d},
$S:z+2}
B.b2v.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:419}
B.b2w.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:E.b.fv(w,new B.b2q(d))}w=x==null?null:x.d
return w==null?"":w},
$S:1161}
B.b2q.prototype={
$1(d){return d.a==this.a},
$S:41}
B.b2x.prototype={
$1(d){return d.length!==0},
$S:21}
B.b2y.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bxO.prototype={
$1(d){return d.lr()},
$S:176}
B.bNc.prototype={
$1(d){return d.lr()},
$S:176}
B.bfn.prototype={
$1(d){return d.lr()},
$S:176};(function installTearOffs(){var x=a._static_1
x(B,"cY8","ddC",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.iU,A.G)
w(A.c8,[B.b2r,B.b2s,B.b2t,B.b2u,B.b2v,B.b2w,B.b2q,B.b2x,B.b2y,B.bxO,B.bNc,B.bfn])
w(A.hV,[B.hh,B.hi])})()
A.c4(b.typeUniverse,JSON.parse('{"hh":{"hV":[]},"hi":{"hV":[]}}'))
var y={E:A.D("u<eQ>"),q:A.D("B<eQ>"),w:A.D("m"),d:A.D("h9"),b:A.D("@"),v:A.D("~")};(function constants(){var x=a.makeConstList
D.mG=A.a(x(["spot","food","others"]),A.D("u<m>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dAs","NG",()=>$.hA().gmO(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_249",e:"endPart",h:b})})($__dart_deferred_initializers__,"lfBdemC0+O0vNoduBSDXsYTZYSA=");