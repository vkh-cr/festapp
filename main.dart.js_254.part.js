((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_254",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,C,F,B={
cE7(d){var x=J.a1(d)
return new B.j1(x.h(d,"x"),x.h(d,"y"),x.h(d,"id"),x.h(d,"group"),x.h(d,"order_product_ticket"),x.h(d,"type"),x.h(d,"state"),x.h(d,"title"),null,x.h(d,"product"),null)},
j1:function j1(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b3m:function b3m(d){this.a=d},
b3n:function b3n(d){this.a=d},
b3o:function b3o(d){this.a=d},
b3p:function b3p(){},
b3q:function b3q(d){this.a=d},
b3r:function b3r(d){this.a=d},
b3l:function b3l(d){this.a=d},
b3s:function b3s(){},
b3t:function b3t(d){this.a=d},
byQ(d){var x=null
switch(d){case"ordered":case"expired":return A.r("Ordered",x)
case"paid":return A.r("Paid",x)
case"sent":return A.r("Sent",x)
case"used":return A.r("Used",x)
case"storno":return A.r("Storno",x)
default:return"???"}},
dht(d){return d+";"+B.byQ(d)},
cRG(d,e,f,g,h,i,j,k,l,m,n){return new B.ht(h,d,n,l,m,f,j,k,g,e,i)},
cRH(d){var x=null,w="created_at",v="updated_at",u="data",t=J.a1(d),s=t.h(d,"id"),r=t.h(d,w)!=null?A.eA(t.h(d,w)):x,q=t.h(d,v)!=null?A.eA(t.h(d,v)):x,p=t.h(d,"price")!=null?A.lC(J.ar(t.h(d,"price"))):x,o=t.h(d,"currency_code"),n=t.h(d,"state"),m=t.h(d,u)!=null?J.v(t.h(d,u),"form"):x,l=t.h(d,u),k=t.h(d,"occasion"),j=t.h(d,"payment_info")
return B.cRG(r,o,l,m,s,t.h(d,"note_hidden"),k,j,p,n,q)},
ht:function ht(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
byR:function byR(){},
cUg(d,e,f,g,h,i,j,k){return new B.hu(e,d,j,i,f,g)},
cUh(d){var x="created_at",w="updated_at",v=J.a1(d),u=v.h(d,"id"),t=v.h(d,x)!=null?A.eA(v.h(d,x)):null,s=v.h(d,w)!=null?A.eA(v.h(d,w)):null,r=v.h(d,"ticket_symbol"),q=v.h(d,"state"),p=v.h(d,"occasion")
return B.cUg(t,u,v.h(d,"note"),v.h(d,"note_hidden"),p,q,r,s)},
hu:function hu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bOx:function bOx(){},
cOA(d){var x,w,v,u,t,s,r,q=y.w,p=A.H(q,y.q)
for(x=y.E,w=0;w<3;++w)p.m(0,D.mN[w],A.a([],x))
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.M)(d),++w){v=d[w]
u=v.Q
if(u==null)u=""
p.h(0,E.b.p(D.mN,u)?u:E.b.gZ(D.mN)).push(v)}t=A.H(q,y.d)
for(w=0;w<3;++w){s=D.mN[w]
if(p.h(0,s).length!==0){q=p.h(0,s)
q.toString
r=new A.N(q,new B.bgn(),A.V(q).i("N<1,m>")).bQ(0," | ")}else r=""
t.m(0,s,new A.hk(new A.hv(),r))}return t},
bgn:function bgn(){},
baD(d){return B.dai(d)},
dai(d){var x=0,w=A.l(y.v),v,u
var $async$baD=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.d($.BV().dq("delete_order",A.z(["order_id",d.a],y.w,v),v),$async$baD)
case 2:u=f
v=J.a1(u)
if(!J.p(v.h(u,"code"),200))throw A.n(A.cS("Deleting order failed: "+A.o(v.h(u,"code"))+": "+A.o(v.h(u,"message"))))
return A.j(null,w)}})
return A.k($async$baD,w)},
baV(d,e){return B.daq(d,e)},
daq(d,e){var x=0,w=A.l(y.v),v,u,t
var $async$baV=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.BV().dq("update_order_note_hidden",A.z(["order_id",d,"new_note_hidden",e],y.w,v),v),$async$baV)
case 2:if(!u.p(t.v(g,"code"),200))throw A.n(A.cS("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$baV,w)},
bbc(d,e){return B.daD(d,e)},
daD(d,e){var x=0,w=A.l(y.v),v,u,t
var $async$bbc=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.NU().dq("update_ticket_note_hidden",A.z(["ticket_id",d,"new_note_hidden",e],y.w,v),v),$async$bbc)
case 2:if(!u.p(t.v(g,"code"),200))throw A.n(A.cS("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$bbc,w)}},D
J=c[1]
A=c[0]
E=c[2]
C=c[102]
F=c[138]
B=a.updateHolder(c[83],B)
D=c[300]
B.j1.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
bl(){var x,w,v=this,u=A.H(y.w,y.b)
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
bzA(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.dI(k,new B.b3m(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.dI(k,new B.b3n(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.V(k)
t=u.i("dJ<1,f?>")
k=A.E(new A.dJ(new A.ai(k,new B.b3o(w),u.i("ai<1>")),new B.b3p(),t),t.i("y.E"))
v=k}}if(v==null)s=l
else{k=A.V(v)
u=k.i("dJ<1,m>")
u=new A.ai(new A.dJ(new A.ai(v,new B.b3q(m),k.i("ai<1>")),new B.b3r(m),u),new B.b3s(),u.i("ai<y.E>")).bQ(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:E.b.fq(k,new B.b3t(x))}k=r==null
q=k?l:r.aJF()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a21()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+k:""
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
return A.o(k)+" "+u+"\n"+t+": "+C.jh(d,n==null?0:n,l,0)},
gbj(d){return this.c},
gc4(d){return this.w},
sHd(d){return this.as=d}}
B.ht.prototype={
bJX(){var x,w
if(this.e==="ordered"){x=this.ay
x=x==null||x.w==null}else x=!0
if(x)return!1
w=A.cs(A.br(F.vG()),A.bB(F.vG()),A.cu(F.vG()),0,0,0,0,0)
x=this.ay.w
x.toString
return w.fD(A.cs(A.br(x),A.bB(x),A.cu(x),0,0,0,0,0))},
bl(){var x,w=this,v=w.b
v=v==null?null:v.h8()
x=w.c
x=x==null?null:x.h8()
return A.z(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.w,y.b)},
oW(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="yyyy-MM-dd",f=i.a,e=f==null,d=A.aD(e?0:f)
f=A.aD(e?0:f)
e=i.d
e=A.aD(e!=null?C.jh(a0,e,i.y,0):"")
x=i.e
if(x==null)x="ordered"
x=A.aD(x+";"+B.byQ(x))
w=i.ay
if((w==null?h:w.e)!=null){v=w.e
v.toString
w=C.jh(a0,v,w.x,0)}else w=""
w=A.aD(w)
v=i.ay
if((v==null?h:v.f)!=null){u=v.f
u.toString
v=C.jh(a0,u,v.x,0)}else v=""
v=A.aD(v)
u=i.ay
if((u==null?h:u.r)!=null){t=u.r
t.toString
u=C.jh(a0,t,u.x,0)}else u=""
u=A.aD(u)
t=i.ay
s=t==null
r=s?h:t.d
r=A.aD(r==null?0:r)
if((s?h:t.w)!=null){t=A.hz(g,h)
s=i.ay.w
s.toString
s=t.dg(s)
t=s}else t=""
t=A.aD(t)
s=i.b
s=A.aD(s!=null?A.hz(g,h).dg(s):"")
q=A.aD(i.a21())
p=i.f
p=A.aD(p==null?h:J.v(p,"email"))
o=i.ax
o=A.aD(o!=null?new A.N(o,new B.byR(),A.V(o).i("N<1,m>")).bQ(0," | "):"")
n=A.aD(i.aJF())
m=i.z
m=A.aD(m==null?"":m)
l=A.aD("")
k=A.aD("")
j=i.Q
j=j==null?h:j.ax
return A.l7(A.z(["id",d,"order_symbol",f,"price",e,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"created_at",s,"data",q,"email",p,"ticket_products",o,"note",n,"note_hidden",m,"orders_history",l,"transactions",k,"forms",A.aD(j==null?"":j)],y.w,y.d),!1,y.b)},
eq(){var x=0,w=A.l(y.v),v=this
var $async$eq=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(B.baD(v),$async$eq)
case 2:return A.j(null,w)}})
return A.k($async$eq,w)},
eJ(){var x=0,w=A.l(y.v),v=this,u,t
var $async$eJ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.d(B.baV(t,u),$async$eJ)
case 2:return A.j(null,w)}})
return A.k($async$eJ,w)},
lk(){return"Order #"+A.o(this.a)},
a21(){var x=this.f,w=x==null,v=A.o(w?null:J.v(x,"name"))
return v+" "+A.o(w?null:J.v(x,"surname"))},
aJF(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.o(x==null?"":x)},
gbj(d){return this.a}}
B.hu.prototype={
bl(){return A.z(["state",this.e,"note_hidden",this.w],y.w,y.b)},
oW(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k=A.aD(k==null?0:k)
x=m.b
x=A.aD(x!=null?A.hz("yyyy-MM-dd",l).dg(x):"")
w=m.d
w=A.aD(w==null?"":w)
v=m.e
if(v==null)v="ordered"
v=A.aD(v+";"+B.byQ(v))
u=m.r
u=A.aD(u==null?"":u)
t=m.w
t=A.aD(t==null?"":t)
s=m.Q
r=s!=null
q=A.aD(r?"Order #"+A.o(s.a):"")
s=A.aD(r?s.a21():"")
r=m.z
r=A.aD(r!=null?new A.N(r,new B.bOx(),A.V(r).i("N<1,m>")).bQ(0," | "):"")
p=m.y
if(p!=null){o=p.z
o=o==null?l:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aD(p)
o=m.x
n=A.z(["id",k,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"ticketSpot",p,"price",A.aD(o!=null?C.jh(d,o,l,0):""),"ticketProductsEdit",A.aD("")],y.w,y.d)
k=m.Q.ax
n.H(0,B.cOA(k==null?A.a([],y.E):k))
return A.l7(n,!1,y.b)},
eq(){var x=0,w=A.l(y.v)
var $async$eq=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:return A.j(null,w)}})
return A.k($async$eq,w)},
eJ(){var x=0,w=A.l(y.v),v=this,u,t
var $async$eJ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.d(B.bbc(t,u),$async$eJ)
case 2:return A.j(null,w)}})
return A.k($async$eJ,w)},
lk(){var x=this.d
return x==null?J.ar(this.a):x},
gbj(d){return this.a}}
var z=a.updateTypes(["x(nG)","x(hu)","f?(nG)","x(ht)","m(m)"])
B.b3m.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.b3n.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.b3o.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.b3p.prototype={
$1(d){return d.d},
$S:z+2}
B.b3q.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:424}
B.b3r.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:E.b.fq(w,new B.b3l(d))}w=x==null?null:x.d
return w==null?"":w},
$S:1163}
B.b3l.prototype={
$1(d){return d.a==this.a},
$S:41}
B.b3s.prototype={
$1(d){return d.length!==0},
$S:21}
B.b3t.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.byR.prototype={
$1(d){return d.lk()},
$S:173}
B.bOx.prototype={
$1(d){return d.lk()},
$S:173}
B.bgn.prototype={
$1(d){return d.lk()},
$S:173};(function installTearOffs(){var x=a._static_1
x(B,"cZJ","dht",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.j1,A.G)
w(A.c8,[B.b3m,B.b3n,B.b3o,B.b3p,B.b3q,B.b3r,B.b3l,B.b3s,B.b3t,B.byR,B.bOx,B.bgn])
w(A.i5,[B.ht,B.hu])})()
A.c5(b.typeUniverse,JSON.parse('{"ht":{"i5":[]},"hu":{"i5":[]}}'))
var y={E:A.C("t<eV>"),q:A.C("B<eV>"),w:A.C("m"),d:A.C("hk"),b:A.C("@"),v:A.C("~")};(function constants(){var x=a.makeConstList
D.mN=A.a(x(["spot","food","others"]),A.C("t<m>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dEM","NU",()=>$.hO().gmE(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_254",e:"endPart",h:b})})($__dart_deferred_initializers__,"ehW6WefyZDb366/elsRIt3OEDrQ=");