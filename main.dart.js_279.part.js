((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_279",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,B={
cqU(d){var x=J.a2(d)
return new B.iF(x.i(d,"x"),x.i(d,"y"),x.i(d,"id"),x.i(d,"group"),x.i(d,"order_product_ticket"),x.i(d,"type"),x.i(d,"state"),x.i(d,"title"),null,x.i(d,"product"),null)},
iF:function iF(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b_g:function b_g(d){this.a=d},
b_h:function b_h(d){this.a=d},
b_i:function b_i(d){this.a=d},
b_j:function b_j(){},
b_k:function b_k(d){this.a=d},
b_l:function b_l(d){this.a=d},
b_f:function b_f(d){this.a=d},
b_m:function b_m(){},
b_n:function b_n(d){this.a=d},
brG(d){var x=null
switch(d){case"ordered":case"expired":return A.p("Ordered",x)
case"paid":return A.p("Paid",x)
case"sent":return A.p("Sent",x)
case"used":return A.p("Used",x)
case"storno":return A.p("Storno",x)
default:return"???"}},
d02(d){return d+";"+B.brG(d)},
cEc(d,e,f,g,h,i,j,k,l,m,n){return new B.h1(h,d,n,l,m,f,j,k,g,e,i)},
cEd(d){var x=null,w="created_at",v="updated_at",u="data",t=J.a2(d),s=t.i(d,"id"),r=t.i(d,w)!=null?A.eV(t.i(d,w)):x,q=t.i(d,v)!=null?A.eV(t.i(d,v)):x,p=t.i(d,"price")!=null?A.ly(J.an(t.i(d,"price"))):x,o=t.i(d,"currency_code"),n=t.i(d,"state"),m=t.i(d,u)!=null?J.v(t.i(d,u),"form"):x,l=t.i(d,u),k=t.i(d,"occasion"),j=t.i(d,"payment_info")
return B.cEc(r,o,l,m,s,t.i(d,"note_hidden"),k,j,p,n,q)},
h1:function h1(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
brH:function brH(){},
cGR(d,e,f,g,h,i,j,k){return new B.hp(e,d,j,i,f,g)},
cGS(d){var x="created_at",w="updated_at",v=J.a2(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.eV(v.i(d,x)):null,s=v.i(d,w)!=null?A.eV(v.i(d,w)):null,r=v.i(d,"ticket_symbol"),q=v.i(d,"state"),p=v.i(d,"occasion")
return B.cGR(t,u,v.i(d,"note"),v.i(d,"note_hidden"),p,q,r,s)},
hp:function hp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bGv:function bGv(){},
cBm(d){var x,w,v,u,t,s,r,q=y.w,p=A.I(q,y.q)
for(x=y.E,w=0;w<1;++w)p.m(0,D.lb[w],A.a([],x))
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.Q)(d),++w){v=d[w]
u=v.Q
if(u==null)u=""
p.i(0,E.b.n(D.lb,u)?u:E.b.gY(D.lb)).push(v)}t=A.I(q,y.d)
for(w=0;w<1;++w){s=D.lb[w]
if(p.i(0,s).length!==0){q=p.i(0,s)
q.toString
r=new A.O(q,new B.baV(),A.X(q).h("O<1,e>")).c6(0," | ")}else r=""
t.m(0,s,new A.fV(new A.h4(),r))}return t},
baV:function baV(){},
b5v(d){var x=0,w=A.k(y.v),v,u
var $async$b5v=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.c($.As().dO("delete_order",A.x(["order_id",d.a],y.w,v),v),$async$b5v)
case 2:u=f
v=J.a2(u)
if(!J.m(v.i(u,"code"),200))throw A.l(A.cK("Deleting order failed: "+A.o(v.i(u,"code"))+": "+A.o(v.i(u,"message"))))
return A.i(null,w)}})
return A.j($async$b5v,w)},
b5M(d,e){var x=0,w=A.k(y.v),v,u,t
var $async$b5M=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.As().dO("update_order_note_hidden",A.x(["order_id",d,"new_note_hidden",e],y.w,v),v),$async$b5M)
case 2:if(!u.m(t.v(g,"code"),200))throw A.l(A.cK("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b5M,w)},
b63(d,e){var x=0,w=A.k(y.v),v,u,t
var $async$b63=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.Mp().dO("update_ticket_note_hidden",A.x(["ticket_id",d,"new_note_hidden",e],y.w,v),v),$async$b63)
case 2:if(!u.m(t.v(g,"code"),200))throw A.l(A.cK("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b63,w)}},D,F,C
J=c[1]
A=c[0]
E=c[2]
B=a.updateHolder(c[79],B)
D=c[343]
F=c[113]
C=c[96]
B.iF.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
bt(){var x,w,v=this,u=A.I(y.w,y.b)
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
bt6(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.dR(k,new B.b_g(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.dR(k,new B.b_h(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.X(k)
t=u.h("ds<1,t?>")
t=A.F(new A.ds(new A.af(k,new B.b_i(w),u.h("af<1>")),new B.b_j(),t),!0,t.h("w.E"))
v=t}}if(v==null)s=l
else{k=A.X(v)
u=k.h("ds<1,e>")
u=new A.af(new A.ds(new A.af(v,new B.b_k(m),k.h("af<1>")),new B.b_l(m),u),new B.b_m(),u.h("af<w.E>")).c6(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:E.b.m1(k,new B.b_n(x))}k=r==null
q=k?l:r.aFN()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a0m()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+A.o(k):""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.o(k)+" "+u+"\n"+A.p("Ticket",l)+" "+A.o(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.p("Price",l)
n=m.x
n=n==null?l:n.r
return A.o(k)+" "+u+"\n"+t+": "+C.iT(d,n==null?0:n,l,0)},
gbn(d){return this.c},
gdm(d){return this.w},
sGt(d){return this.as=d}}
B.h1.prototype={
bDe(){var x,w
if(this.e==="ordered"){x=this.ay
x=x==null||x.w==null}else x=!0
if(x)return!1
w=A.cA(A.bv(F.Ku()),A.bI(F.Ku()),A.cB(F.Ku()),0,0,0,0,0)
x=this.ay.w
x.toString
return w.iW(A.cA(A.bv(x),A.bI(x),A.cB(x),0,0,0,0,0))},
bt(){var x,w=this,v=w.b
v=v==null?null:v.hx()
x=w.c
x=x==null?null:x.hx()
return A.x(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.w,y.b)},
pl(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="yyyy-MM-dd",f=i.a,e=f==null,d=A.aH(e?0:f)
f=A.aH(e?0:f)
e=i.d
e=A.aH(e!=null?C.iT(a0,e,i.y,0):"")
x=i.e
if(x==null)x="ordered"
x=A.aH(x+";"+B.brG(x))
w=i.ay
if((w==null?h:w.e)!=null){v=w.e
v.toString
w=C.iT(a0,v,w.x,0)}else w=""
w=A.aH(w)
v=i.ay
if((v==null?h:v.f)!=null){u=v.f
u.toString
v=C.iT(a0,u,v.x,0)}else v=""
v=A.aH(v)
u=i.ay
if((u==null?h:u.r)!=null){t=u.r
t.toString
u=C.iT(a0,t,u.x,0)}else u=""
u=A.aH(u)
t=i.ay
s=t==null
r=s?h:t.d
r=A.aH(r==null?0:r)
if((s?h:t.w)!=null){t=A.i7(g,h)
s=i.ay.w
s.toString
s=t.dI(s)
t=s}else t=""
t=A.aH(t)
s=i.b
s=A.aH(s!=null?A.i7(g,h).dI(s):"")
q=A.aH(i.a0m())
p=i.f
p=A.aH(p==null?h:J.v(p,"email"))
o=i.ax
o=A.aH(o!=null?new A.O(o,new B.brH(),A.X(o).h("O<1,e>")).c6(0," | "):"")
n=A.aH(i.aFN())
m=i.z
m=A.aH(m==null?"":m)
l=A.aH("")
k=A.aH("")
j=i.Q
j=j==null?h:j.ax
return A.lc(A.x(["id",d,"order_symbol",f,"price",e,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"created_at",s,"data",q,"email",p,"ticket_products",o,"note",n,"note_hidden",m,"orders_history",l,"transactions",k,"forms",A.aH(j==null?"":j)],y.w,y.d),!1,y.b)},
eA(){var x=0,w=A.k(y.v),v=this
var $async$eA=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(B.b5v(v),$async$eA)
case 2:return A.i(null,w)}})
return A.j($async$eA,w)},
eY(){var x=0,w=A.k(y.v),v=this,u,t
var $async$eY=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.c(B.b5M(t,u),$async$eY)
case 2:return A.i(null,w)}})
return A.j($async$eY,w)},
lb(){return"Order #"+A.o(this.a)},
a0m(){var x=this.f,w=x==null,v=A.o(w?null:J.v(x,"name"))
return v+" "+A.o(w?null:J.v(x,"surname"))},
aFN(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.o(x==null?"":x)},
gbn(d){return this.a}}
B.hp.prototype={
bt(){return A.x(["state",this.e,"note_hidden",this.w],y.w,y.b)},
pl(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k=A.aH(k==null?0:k)
x=m.b
x=A.aH(x!=null?A.i7("yyyy-MM-dd",l).dI(x):"")
w=m.d
w=A.aH(w==null?"":w)
v=m.e
if(v==null)v="ordered"
v=A.aH(v+";"+B.brG(v))
u=m.r
u=A.aH(u==null?"":u)
t=m.w
t=A.aH(t==null?"":t)
s=m.Q
r=s!=null
q=A.aH(r?"Order #"+A.o(s.a):"")
s=A.aH(r?s.a0m():"")
r=m.z
r=A.aH(r!=null?new A.O(r,new B.bGv(),A.X(r).h("O<1,e>")).c6(0," | "):"")
p=m.y
if(p!=null){o=p.z
o=o==null?l:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aH(p)
o=m.x
n=A.x(["id",k,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"ticketSpot",p,"price",A.aH(o!=null?C.iT(d,o,l,0):""),"ticketProductsEdit",A.aH("")],y.w,y.d)
k=m.Q.ax
n.I(0,B.cBm(k==null?A.a([],y.E):k))
return A.lc(n,!1,y.b)},
eA(){var x=0,w=A.k(y.v)
var $async$eA=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:return A.i(null,w)}})
return A.j($async$eA,w)},
eY(){var x=0,w=A.k(y.v),v=this,u,t
var $async$eY=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.c(B.b63(t,u),$async$eY)
case 2:return A.i(null,w)}})
return A.j($async$eY,w)},
lb(){var x=this.d
return x==null?J.an(this.a):x},
gbn(d){return this.a}}
var z=a.updateTypes(["y(mX)","y(hp)","t?(mX)","y(h1)","e(e)"])
B.b_g.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.b_h.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.b_i.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.b_j.prototype={
$1(d){return d.d},
$S:z+2}
B.b_k.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:362}
B.b_l.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:E.b.m1(w,new B.b_f(d))}w=x==null?null:x.d
return w==null?"":w},
$S:975}
B.b_f.prototype={
$1(d){return d.a==this.a},
$S:35}
B.b_m.prototype={
$1(d){return d.length!==0},
$S:20}
B.b_n.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.brH.prototype={
$1(d){return d.lb()},
$S:160}
B.bGv.prototype={
$1(d){return d.lb()},
$S:160}
B.baV.prototype={
$1(d){return d.lb()},
$S:160};(function installTearOffs(){var x=a._static_1
x(B,"cM8","d02",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.iF,A.E)
w(A.bH,[B.b_g,B.b_h,B.b_i,B.b_j,B.b_k,B.b_l,B.b_f,B.b_m,B.b_n,B.brH,B.bGv,B.baV])
w(A.hS,[B.h1,B.hp])})()
A.br(b.typeUniverse,JSON.parse('{"h1":{"hS":[]},"hp":{"hS":[]}}'))
var y={E:A.z("r<fu>"),q:A.z("A<fu>"),w:A.z("e"),d:A.z("fV"),b:A.z("@"),v:A.z("~")};(function constants(){var x=a.makeConstList
D.lb=A.a(x(["others"]),A.z("r<e>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dlY","Mp",()=>$.hw().gmV(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_279",e:"endPart",h:b})})($__dart_deferred_initializers__,"+dphzTEyXMbI/SciN/aJ0ZF1Ccw=");