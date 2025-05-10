((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_328",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,C,B={
cy3(d){var x=J.a2(d)
return new B.iW(x.h(d,"x"),x.h(d,"y"),x.h(d,"id"),x.h(d,"group"),x.h(d,"order_product_ticket"),x.h(d,"type"),x.h(d,"state"),x.h(d,"title"),null,x.h(d,"product"),null)},
iW:function iW(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b1H:function b1H(d){this.a=d},
b1I:function b1I(d){this.a=d},
b1J:function b1J(d){this.a=d},
b1K:function b1K(){},
b1L:function b1L(d){this.a=d},
b1M:function b1M(d){this.a=d},
b1G:function b1G(d){this.a=d},
b1N:function b1N(){},
b1O:function b1O(d){this.a=d},
bwd(d){var x=null
switch(d){case"ordered":case"expired":return A.u("Ordered",x)
case"paid":return A.u("Paid",x)
case"sent":return A.u("Sent",x)
case"used":return A.u("Used",x)
case"storno":return A.u("Storno",x)
default:return"???"}},
d8W(d){return d+";"+B.bwd(d)},
cLK(d,e,f,g,h,i,j,k,l,m,n){return new B.hg(h,d,n,l,m,f,j,k,g,e,i)},
cLL(d){var x=null,w="created_at",v="updated_at",u="data",t=J.a2(d),s=t.h(d,"id"),r=t.h(d,w)!=null?A.f4(t.h(d,w)):x,q=t.h(d,v)!=null?A.f4(t.h(d,v)):x,p=t.h(d,"price")!=null?A.lo(J.ao(t.h(d,"price"))):x,o=t.h(d,"currency_code"),n=t.h(d,"state"),m=t.h(d,u)!=null?J.v(t.h(d,u),"form"):x,l=t.h(d,u),k=t.h(d,"occasion"),j=t.h(d,"payment_info")
return B.cLK(r,o,l,m,s,t.h(d,"note_hidden"),k,j,p,n,q)},
hg:function hg(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bwe:function bwe(){},
cOn(d,e,f,g,h,i,j,k){return new B.hj(e,d,j,i,f,g)},
cOo(d){var x="created_at",w="updated_at",v=J.a2(d),u=v.h(d,"id"),t=v.h(d,x)!=null?A.f4(v.h(d,x)):null,s=v.h(d,w)!=null?A.f4(v.h(d,w)):null,r=v.h(d,"ticket_symbol"),q=v.h(d,"state"),p=v.h(d,"occasion")
return B.cOn(t,u,v.h(d,"note"),v.h(d,"note_hidden"),p,q,r,s)},
hj:function hj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bLo:function bLo(){},
cIK(d){var x,w,v,u,t,s,r,q=y.w,p=A.L(q,y.q)
for(x=y.E,w=0;w<3;++w)p.m(0,D.mi[w],A.a([],x))
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.S)(d),++w){v=d[w]
u=v.Q
if(u==null)u=""
p.h(0,E.b.n(D.mi,u)?u:E.b.gY(D.mi)).push(v)}t=A.L(q,y.d)
for(w=0;w<3;++w){s=D.mi[w]
if(p.h(0,s).length!==0){q=p.h(0,s)
q.toString
r=new A.P(q,new B.bei(),A.W(q).i("P<1,m>")).c5(0," | ")}else r=""
t.m(0,s,new A.h8(new A.hk(),r))}return t},
bei:function bei(){},
b8D(d){var x=0,w=A.k(y.v),v,u
var $async$b8D=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.d($.Bh().dF("delete_order",A.A(["order_id",d.a],y.w,v),v),$async$b8D)
case 2:u=f
v=J.a2(u)
if(!J.p(v.h(u,"code"),200))throw A.n(A.cP("Deleting order failed: "+A.o(v.h(u,"code"))+": "+A.o(v.h(u,"message"))))
return A.i(null,w)}})
return A.j($async$b8D,w)},
b8V(d,e){var x=0,w=A.k(y.v),v,u,t
var $async$b8V=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.Bh().dF("update_order_note_hidden",A.A(["order_id",d,"new_note_hidden",e],y.w,v),v),$async$b8V)
case 2:if(!u.p(t.v(g,"code"),200))throw A.n(A.cP("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b8V,w)},
b9c(d,e){var x=0,w=A.k(y.v),v,u,t
var $async$b9c=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.ND().dF("update_ticket_note_hidden",A.A(["ticket_id",d,"new_note_hidden",e],y.w,v),v),$async$b9c)
case 2:if(!u.p(t.v(g,"code"),200))throw A.n(A.cP("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b9c,w)}},D,F
J=c[1]
A=c[0]
E=c[2]
C=c[104]
B=a.updateHolder(c[86],B)
D=c[369]
F=c[135]
B.iW.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
bo(){var x,w,v=this,u=A.L(y.w,y.b)
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
bxv(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.dQ(k,new B.b1H(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.dQ(k,new B.b1I(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.W(k)
t=u.i("de<1,l?>")
t=A.G(new A.de(new A.ai(k,new B.b1J(w),u.i("ai<1>")),new B.b1K(),t),!0,t.i("z.E"))
v=t}}if(v==null)s=l
else{k=A.W(v)
u=k.i("de<1,m>")
u=new A.ai(new A.de(new A.ai(v,new B.b1L(m),k.i("ai<1>")),new B.b1M(m),u),new B.b1N(),u.i("ai<z.E>")).c5(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:E.b.fk(k,new B.b1O(x))}k=r==null
q=k?l:r.aIF()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a1N()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+A.o(k):""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.o(k)+" "+u+"\n"+A.u("Ticket",l)+" "+A.o(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.u("Price",l)
n=m.x
n=n==null?l:n.r
return A.o(k)+" "+u+"\n"+t+": "+C.jc(d,n==null?0:n,l,0)},
gbp(d){return this.c},
gdf(d){return this.w},
sHd(d){return this.as=d}}
B.hg.prototype={
bI_(){var x,w
if(this.e==="ordered"){x=this.ay
x=x==null||x.w==null}else x=!0
if(x)return!1
w=A.cE(A.bE(F.Ah()),A.bN(F.Ah()),A.cG(F.Ah()),0,0,0,0,0)
x=this.ay.w
x.toString
return w.jr(A.cE(A.bE(x),A.bN(x),A.cG(x),0,0,0,0,0))},
bo(){var x,w=this,v=w.b
v=v==null?null:v.hK()
x=w.c
x=x==null?null:x.hK()
return A.A(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.w,y.b)},
oS(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="yyyy-MM-dd",f=i.a,e=f==null,d=A.aC(e?0:f)
f=A.aC(e?0:f)
e=i.d
e=A.aC(e!=null?C.jc(a0,e,i.y,0):"")
x=i.e
if(x==null)x="ordered"
x=A.aC(x+";"+B.bwd(x))
w=i.ay
if((w==null?h:w.e)!=null){v=w.e
v.toString
w=C.jc(a0,v,w.x,0)}else w=""
w=A.aC(w)
v=i.ay
if((v==null?h:v.f)!=null){u=v.f
u.toString
v=C.jc(a0,u,v.x,0)}else v=""
v=A.aC(v)
u=i.ay
if((u==null?h:u.r)!=null){t=u.r
t.toString
u=C.jc(a0,t,u.x,0)}else u=""
u=A.aC(u)
t=i.ay
s=t==null
r=s?h:t.d
r=A.aC(r==null?0:r)
if((s?h:t.w)!=null){t=A.hO(g,h)
s=i.ay.w
s.toString
s=t.dr(s)
t=s}else t=""
t=A.aC(t)
s=i.b
s=A.aC(s!=null?A.hO(g,h).dr(s):"")
q=A.aC(i.a1N())
p=i.f
p=A.aC(p==null?h:J.v(p,"email"))
o=i.ax
o=A.aC(o!=null?new A.P(o,new B.bwe(),A.W(o).i("P<1,m>")).c5(0," | "):"")
n=A.aC(i.aIF())
m=i.z
m=A.aC(m==null?"":m)
l=A.aC("")
k=A.aC("")
j=i.Q
j=j==null?h:j.ax
return A.l_(A.A(["id",d,"order_symbol",f,"price",e,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"created_at",s,"data",q,"email",p,"ticket_products",o,"note",n,"note_hidden",m,"orders_history",l,"transactions",k,"forms",A.aC(j==null?"":j)],y.w,y.d),!1,y.b)},
er(){var x=0,w=A.k(y.v),v=this
var $async$er=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(B.b8D(v),$async$er)
case 2:return A.i(null,w)}})
return A.j($async$er,w)},
eO(){var x=0,w=A.k(y.v),v=this,u,t
var $async$eO=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.d(B.b8V(t,u),$async$eO)
case 2:return A.i(null,w)}})
return A.j($async$eO,w)},
lq(){return"Order #"+A.o(this.a)},
a1N(){var x=this.f,w=x==null,v=A.o(w?null:J.v(x,"name"))
return v+" "+A.o(w?null:J.v(x,"surname"))},
aIF(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.o(x==null?"":x)},
gbp(d){return this.a}}
B.hj.prototype={
bo(){return A.A(["state",this.e,"note_hidden",this.w],y.w,y.b)},
oS(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k=A.aC(k==null?0:k)
x=m.b
x=A.aC(x!=null?A.hO("yyyy-MM-dd",l).dr(x):"")
w=m.d
w=A.aC(w==null?"":w)
v=m.e
if(v==null)v="ordered"
v=A.aC(v+";"+B.bwd(v))
u=m.r
u=A.aC(u==null?"":u)
t=m.w
t=A.aC(t==null?"":t)
s=m.Q
r=s!=null
q=A.aC(r?"Order #"+A.o(s.a):"")
s=A.aC(r?s.a1N():"")
r=m.z
r=A.aC(r!=null?new A.P(r,new B.bLo(),A.W(r).i("P<1,m>")).c5(0," | "):"")
p=m.y
if(p!=null){o=p.z
o=o==null?l:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aC(p)
o=m.x
n=A.A(["id",k,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"ticketSpot",p,"price",A.aC(o!=null?C.jc(d,o,l,0):""),"ticketProductsEdit",A.aC("")],y.w,y.d)
k=m.Q.ax
n.H(0,B.cIK(k==null?A.a([],y.E):k))
return A.l_(n,!1,y.b)},
er(){var x=0,w=A.k(y.v)
var $async$er=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:return A.i(null,w)}})
return A.j($async$er,w)},
eO(){var x=0,w=A.k(y.v),v=this,u,t
var $async$eO=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.d(B.b9c(t,u),$async$eO)
case 2:return A.i(null,w)}})
return A.j($async$eO,w)},
lq(){var x=this.d
return x==null?J.ao(this.a):x},
gbp(d){return this.a}}
var z=a.updateTypes(["w(no)","w(hj)","l?(no)","w(hg)","m(m)"])
B.b1H.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.b1I.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.b1J.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.b1K.prototype={
$1(d){return d.d},
$S:z+2}
B.b1L.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:375}
B.b1M.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:E.b.fk(w,new B.b1G(d))}w=x==null?null:x.d
return w==null?"":w},
$S:1034}
B.b1G.prototype={
$1(d){return d.a==this.a},
$S:37}
B.b1N.prototype={
$1(d){return d.length!==0},
$S:19}
B.b1O.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bwe.prototype={
$1(d){return d.lq()},
$S:139}
B.bLo.prototype={
$1(d){return d.lq()},
$S:139}
B.bei.prototype={
$1(d){return d.lq()},
$S:139};(function installTearOffs(){var x=a._static_1
x(B,"cTK","d8W",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.iW,A.E)
w(A.bG,[B.b1H,B.b1I,B.b1J,B.b1K,B.b1L,B.b1M,B.b1G,B.b1N,B.b1O,B.bwe,B.bLo,B.bei])
w(A.hR,[B.hg,B.hj])})()
A.bj(b.typeUniverse,JSON.parse('{"hg":{"hR":[]},"hj":{"hR":[]}}'))
var y={E:A.y("r<eP>"),q:A.y("C<eP>"),w:A.y("m"),d:A.y("h8"),b:A.y("@"),v:A.y("~")};(function constants(){var x=a.makeConstList
D.mi=A.a(x(["spot","food","others"]),A.y("r<m>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dvJ","ND",()=>$.hI().gna(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_328",e:"endPart",h:b})})($__dart_deferred_initializers__,"xFzpBagXywBGQllp5BSgkw2pXIk=");