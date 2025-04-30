((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_279",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,B={
cqW(d){var x=J.a4(d)
return new B.iG(x.i(d,"x"),x.i(d,"y"),x.i(d,"id"),x.i(d,"group"),x.i(d,"order_product_ticket"),x.i(d,"type"),x.i(d,"state"),x.i(d,"title"),null,x.i(d,"product"),null)},
iG:function iG(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b_f:function b_f(d){this.a=d},
b_g:function b_g(d){this.a=d},
b_h:function b_h(d){this.a=d},
b_i:function b_i(){},
b_j:function b_j(d){this.a=d},
b_k:function b_k(d){this.a=d},
b_e:function b_e(d){this.a=d},
b_l:function b_l(){},
b_m:function b_m(d){this.a=d},
brE(d){var x=null
switch(d){case"ordered":case"expired":return A.r("Ordered",x)
case"paid":return A.r("Paid",x)
case"sent":return A.r("Sent",x)
case"used":return A.r("Used",x)
case"storno":return A.r("Storno",x)
default:return"???"}},
d08(d){return d+";"+B.brE(d)},
cEi(d,e,f,g,h,i,j,k,l,m,n){return new B.h3(h,d,n,l,m,f,j,k,g,e,i)},
cEj(d){var x=null,w="created_at",v="updated_at",u="data",t=J.a4(d),s=t.i(d,"id"),r=t.i(d,w)!=null?A.eV(t.i(d,w)):x,q=t.i(d,v)!=null?A.eV(t.i(d,v)):x,p=t.i(d,"price")!=null?A.lB(J.ao(t.i(d,"price"))):x,o=t.i(d,"currency_code"),n=t.i(d,"state"),m=t.i(d,u)!=null?J.w(t.i(d,u),"form"):x,l=t.i(d,u),k=t.i(d,"occasion"),j=t.i(d,"payment_info")
return B.cEi(r,o,l,m,s,t.i(d,"note_hidden"),k,j,p,n,q)},
h3:function h3(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
brF:function brF(){},
cGV(d,e,f,g,h,i,j,k){return new B.h6(e,d,j,i,f,g)},
cGW(d){var x="created_at",w="updated_at",v=J.a4(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.eV(v.i(d,x)):null,s=v.i(d,w)!=null?A.eV(v.i(d,w)):null,r=v.i(d,"ticket_symbol"),q=v.i(d,"state"),p=v.i(d,"occasion")
return B.cGV(t,u,v.i(d,"note"),v.i(d,"note_hidden"),p,q,r,s)},
h6:function h6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bGv:function bGv(){},
cBs(d){var x,w,v,u,t,s,r,q=y.w,p=A.K(q,y.q)
for(x=y.E,w=0;w<1;++w)p.m(0,D.m9[w],A.a([],x))
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.S)(d),++w){v=d[w]
u=v.Q
if(u==null)u=""
p.i(0,E.b.n(D.m9,u)?u:E.b.gY(D.m9)).push(v)}t=A.K(q,y.d)
for(w=0;w<1;++w){s=D.m9[w]
if(p.i(0,s).length!==0){q=p.i(0,s)
q.toString
r=new A.Q(q,new B.baV(),A.Z(q).h("Q<1,h>")).c6(0," | ")}else r=""
t.m(0,s,new A.fW(new A.h7(),r))}return t},
baV:function baV(){},
b5u(d){var x=0,w=A.m(y.v),v,u
var $async$b5u=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.d($.As().dP("delete_order",A.z(["order_id",d.a],y.w,v),v),$async$b5u)
case 2:u=f
v=J.a4(u)
if(!J.o(v.i(u,"code"),200))throw A.n(A.cM("Deleting order failed: "+A.q(v.i(u,"code"))+": "+A.q(v.i(u,"message"))))
return A.k(null,w)}})
return A.l($async$b5u,w)},
b5M(d,e){var x=0,w=A.m(y.v),v,u,t
var $async$b5M=A.i(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.As().dP("update_order_note_hidden",A.z(["order_id",d,"new_note_hidden",e],y.w,v),v),$async$b5M)
case 2:if(!u.o(t.w(g,"code"),200))throw A.n(A.cM("Saving of note has failed."))
return A.k(null,w)}})
return A.l($async$b5M,w)},
b63(d,e){var x=0,w=A.m(y.v),v,u,t
var $async$b63=A.i(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.Mp().dP("update_ticket_note_hidden",A.z(["ticket_id",d,"new_note_hidden",e],y.w,v),v),$async$b63)
case 2:if(!u.o(t.w(g,"code"),200))throw A.n(A.cM("Saving of note has failed."))
return A.k(null,w)}})
return A.l($async$b63,w)}},D,F,C
J=c[1]
A=c[0]
E=c[2]
B=a.updateHolder(c[80],B)
D=c[344]
F=c[114]
C=c[97]
B.iG.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.q(x)+", Sedadlo "+A.q(this.w)},
bt(){var x,w,v=this,u=A.K(y.w,y.b)
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
bta(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.dL(k,new B.b_f(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.dL(k,new B.b_g(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.Z(k)
t=u.h("dt<1,f?>")
t=A.H(new A.dt(new A.ag(k,new B.b_h(w),u.h("ag<1>")),new B.b_i(),t),!0,t.h("x.E"))
v=t}}if(v==null)s=l
else{k=A.Z(v)
u=k.h("dt<1,h>")
u=new A.ag(new A.dt(new A.ag(v,new B.b_j(m),k.h("ag<1>")),new B.b_k(m),u),new B.b_l(),u.h("ag<x.E>")).c6(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:E.b.m0(k,new B.b_m(x))}k=r==null
q=k?l:r.aFQ()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a0l()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+A.q(k):""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.q(k)+" "+u+"\n"+A.r("Ticket",l)+" "+A.q(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.r("Price",l)
n=m.x
n=n==null?l:n.r
return A.q(k)+" "+u+"\n"+t+": "+C.iU(d,n==null?0:n,l,0)},
gbn(d){return this.c},
gdj(d){return this.w},
sGr(d){return this.as=d}}
B.h3.prototype={
bDk(){var x,w
if(this.e==="ordered"){x=this.ay
x=x==null||x.w==null}else x=!0
if(x)return!1
w=A.cB(A.bw(F.Kv()),A.bJ(F.Kv()),A.cC(F.Kv()),0,0,0,0,0)
x=this.ay.w
x.toString
return w.iW(A.cB(A.bw(x),A.bJ(x),A.cC(x),0,0,0,0,0))},
bt(){var x,w=this,v=w.b
v=v==null?null:v.hx()
x=w.c
x=x==null?null:x.hx()
return A.z(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.w,y.b)},
pk(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="yyyy-MM-dd",f=i.a,e=f==null,d=A.aH(e?0:f)
f=A.aH(e?0:f)
e=i.d
e=A.aH(e!=null?C.iU(a0,e,i.y,0):"")
x=i.e
if(x==null)x="ordered"
x=A.aH(x+";"+B.brE(x))
w=i.ay
if((w==null?h:w.e)!=null){v=w.e
v.toString
w=C.iU(a0,v,w.x,0)}else w=""
w=A.aH(w)
v=i.ay
if((v==null?h:v.f)!=null){u=v.f
u.toString
v=C.iU(a0,u,v.x,0)}else v=""
v=A.aH(v)
u=i.ay
if((u==null?h:u.r)!=null){t=u.r
t.toString
u=C.iU(a0,t,u.x,0)}else u=""
u=A.aH(u)
t=i.ay
s=t==null
r=s?h:t.d
r=A.aH(r==null?0:r)
if((s?h:t.w)!=null){t=A.ia(g,h)
s=i.ay.w
s.toString
s=t.dI(s)
t=s}else t=""
t=A.aH(t)
s=i.b
s=A.aH(s!=null?A.ia(g,h).dI(s):"")
q=A.aH(i.a0l())
p=i.f
p=A.aH(p==null?h:J.w(p,"email"))
o=i.ax
o=A.aH(o!=null?new A.Q(o,new B.brF(),A.Z(o).h("Q<1,h>")).c6(0," | "):"")
n=A.aH(i.aFQ())
m=i.z
m=A.aH(m==null?"":m)
l=A.aH("")
k=A.aH("")
j=i.Q
j=j==null?h:j.ax
return A.ld(A.z(["id",d,"order_symbol",f,"price",e,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"created_at",s,"data",q,"email",p,"ticket_products",o,"note",n,"note_hidden",m,"orders_history",l,"transactions",k,"forms",A.aH(j==null?"":j)],y.w,y.d),!1,y.b)},
eB(){var x=0,w=A.m(y.v),v=this
var $async$eB=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(B.b5u(v),$async$eB)
case 2:return A.k(null,w)}})
return A.l($async$eB,w)},
eZ(){var x=0,w=A.m(y.v),v=this,u,t
var $async$eZ=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.d(B.b5M(t,u),$async$eZ)
case 2:return A.k(null,w)}})
return A.l($async$eZ,w)},
lc(){return"Order #"+A.q(this.a)},
a0l(){var x=this.f,w=x==null,v=A.q(w?null:J.w(x,"name"))
return v+" "+A.q(w?null:J.w(x,"surname"))},
aFQ(){var x=this.f
x=x==null?null:J.w(x,"note")
return A.q(x==null?"":x)},
gbn(d){return this.a}}
B.h6.prototype={
bt(){return A.z(["state",this.e,"note_hidden",this.w],y.w,y.b)},
pk(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k=A.aH(k==null?0:k)
x=m.b
x=A.aH(x!=null?A.ia("yyyy-MM-dd",l).dI(x):"")
w=m.d
w=A.aH(w==null?"":w)
v=m.e
if(v==null)v="ordered"
v=A.aH(v+";"+B.brE(v))
u=m.r
u=A.aH(u==null?"":u)
t=m.w
t=A.aH(t==null?"":t)
s=m.Q
r=s!=null
q=A.aH(r?"Order #"+A.q(s.a):"")
s=A.aH(r?s.a0l():"")
r=m.z
r=A.aH(r!=null?new A.Q(r,new B.bGv(),A.Z(r).h("Q<1,h>")).c6(0," | "):"")
p=m.y
if(p!=null){o=p.z
o=o==null?l:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aH(p)
o=m.x
n=A.z(["id",k,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"ticketSpot",p,"price",A.aH(o!=null?C.iU(d,o,l,0):""),"ticketProductsEdit",A.aH("")],y.w,y.d)
k=m.Q.ax
n.H(0,B.cBs(k==null?A.a([],y.E):k))
return A.ld(n,!1,y.b)},
eB(){var x=0,w=A.m(y.v)
var $async$eB=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:return A.k(null,w)}})
return A.l($async$eB,w)},
eZ(){var x=0,w=A.m(y.v),v=this,u,t
var $async$eZ=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.d(B.b63(t,u),$async$eZ)
case 2:return A.k(null,w)}})
return A.l($async$eZ,w)},
lc(){var x=this.d
return x==null?J.ao(this.a):x},
gbn(d){return this.a}}
var z=a.updateTypes(["y(mZ)","y(h6)","f?(mZ)","y(h3)","h(h)"])
B.b_f.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.b_g.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.b_h.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.b_i.prototype={
$1(d){return d.d},
$S:z+2}
B.b_j.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:266}
B.b_k.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:E.b.m0(w,new B.b_e(d))}w=x==null?null:x.d
return w==null?"":w},
$S:972}
B.b_e.prototype={
$1(d){return d.a==this.a},
$S:35}
B.b_l.prototype={
$1(d){return d.length!==0},
$S:21}
B.b_m.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.brF.prototype={
$1(d){return d.lc()},
$S:150}
B.bGv.prototype={
$1(d){return d.lc()},
$S:150}
B.baV.prototype={
$1(d){return d.lc()},
$S:150};(function installTearOffs(){var x=a._static_1
x(B,"cMb","d08",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.iG,A.G)
w(A.bI,[B.b_f,B.b_g,B.b_h,B.b_i,B.b_j,B.b_k,B.b_e,B.b_l,B.b_m,B.brF,B.bGv,B.baV])
w(A.hT,[B.h3,B.h6])})()
A.br(b.typeUniverse,JSON.parse('{"h3":{"hT":[]},"h6":{"hT":[]}}'))
var y={E:A.B("u<fw>"),q:A.B("C<fw>"),w:A.B("h"),d:A.B("fW"),b:A.B("@"),v:A.B("~")};(function constants(){var x=a.makeConstList
D.m9=A.a(x(["others"]),A.B("u<h>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dm7","Mp",()=>$.hx().gmV(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_279",e:"endPart",h:b})})($__dart_deferred_initializers__,"JD0BWD4aqzmXbqmn3W0Hf+a1aSQ=");