((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_279",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,B={
crf(d){var x=J.a3(d)
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
b_h:function b_h(d){this.a=d},
b_i:function b_i(d){this.a=d},
b_j:function b_j(d){this.a=d},
b_k:function b_k(){},
b_l:function b_l(d){this.a=d},
b_m:function b_m(d){this.a=d},
b_g:function b_g(d){this.a=d},
b_n:function b_n(){},
b_o:function b_o(d){this.a=d},
brU(d){var x=null
switch(d){case"ordered":case"expired":return A.r("Ordered",x)
case"paid":return A.r("Paid",x)
case"sent":return A.r("Sent",x)
case"used":return A.r("Used",x)
case"storno":return A.r("Storno",x)
default:return"???"}},
d0r(d){return d+";"+B.brU(d)},
cED(d,e,f,g,h,i,j,k,l,m,n){return new B.h4(h,d,n,l,m,f,j,k,g,e,i)},
cEE(d){var x=null,w="created_at",v="updated_at",u="data",t=J.a3(d),s=t.i(d,"id"),r=t.i(d,w)!=null?A.eX(t.i(d,w)):x,q=t.i(d,v)!=null?A.eX(t.i(d,v)):x,p=t.i(d,"price")!=null?A.l5(J.ao(t.i(d,"price"))):x,o=t.i(d,"currency_code"),n=t.i(d,"state"),m=t.i(d,u)!=null?J.v(t.i(d,u),"form"):x,l=t.i(d,u),k=t.i(d,"occasion"),j=t.i(d,"payment_info")
return B.cED(r,o,l,m,s,t.i(d,"note_hidden"),k,j,p,n,q)},
h4:function h4(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
brV:function brV(){},
cHd(d,e,f,g,h,i,j,k){return new B.h6(e,d,j,i,f,g)},
cHe(d){var x="created_at",w="updated_at",v=J.a3(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.eX(v.i(d,x)):null,s=v.i(d,w)!=null?A.eX(v.i(d,w)):null,r=v.i(d,"ticket_symbol"),q=v.i(d,"state"),p=v.i(d,"occasion")
return B.cHd(t,u,v.i(d,"note"),v.i(d,"note_hidden"),p,q,r,s)},
h6:function h6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bGL:function bGL(){},
cBN(d){var x,w,v,u,t,s,r,q=y.w,p=A.K(q,y.q)
for(x=y.E,w=0;w<3;++w)p.m(0,D.ma[w],A.a([],x))
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.S)(d),++w){v=d[w]
u=v.Q
if(u==null)u=""
p.i(0,E.b.n(D.ma,u)?u:E.b.gY(D.ma)).push(v)}t=A.K(q,y.d)
for(w=0;w<3;++w){s=D.ma[w]
if(p.i(0,s).length!==0){q=p.i(0,s)
q.toString
r=new A.Q(q,new B.bb9(),A.Z(q).h("Q<1,h>")).c7(0," | ")}else r=""
t.m(0,s,new A.fX(new A.h7(),r))}return t},
bb9:function bb9(){},
b5D(d){var x=0,w=A.m(y.v),v,u
var $async$b5D=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.d($.At().dG("delete_order",A.z(["order_id",d.a],y.w,v),v),$async$b5D)
case 2:u=f
v=J.a3(u)
if(!J.o(v.i(u,"code"),200))throw A.n(A.cM("Deleting order failed: "+A.q(v.i(u,"code"))+": "+A.q(v.i(u,"message"))))
return A.k(null,w)}})
return A.l($async$b5D,w)},
b5V(d,e){var x=0,w=A.m(y.v),v,u,t
var $async$b5V=A.i(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.At().dG("update_order_note_hidden",A.z(["order_id",d,"new_note_hidden",e],y.w,v),v),$async$b5V)
case 2:if(!u.o(t.v(g,"code"),200))throw A.n(A.cM("Saving of note has failed."))
return A.k(null,w)}})
return A.l($async$b5V,w)},
b6c(d,e){var x=0,w=A.m(y.v),v,u,t
var $async$b6c=A.i(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.Mq().dG("update_ticket_note_hidden",A.z(["ticket_id",d,"new_note_hidden",e],y.w,v),v),$async$b6c)
case 2:if(!u.o(t.v(g,"code"),200))throw A.n(A.cM("Saving of note has failed."))
return A.k(null,w)}})
return A.l($async$b6c,w)}},D,F,C
J=c[1]
A=c[0]
E=c[2]
B=a.updateHolder(c[80],B)
D=c[343]
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
btc(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.dF(k,new B.b_h(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.dF(k,new B.b_i(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.Z(k)
t=u.h("du<1,f?>")
t=A.H(new A.du(new A.ag(k,new B.b_j(w),u.h("ag<1>")),new B.b_k(),t),!0,t.h("x.E"))
v=t}}if(v==null)s=l
else{k=A.Z(v)
u=k.h("du<1,h>")
u=new A.ag(new A.du(new A.ag(v,new B.b_l(m),k.h("ag<1>")),new B.b_m(m),u),new B.b_n(),u.h("ag<x.E>")).c7(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:E.b.m0(k,new B.b_o(x))}k=r==null
q=k?l:r.aFP()
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
return A.q(k)+" "+u+"\n"+t+": "+C.iV(d,n==null?0:n,l,0)},
gbn(d){return this.c},
gdj(d){return this.w},
sGr(d){return this.as=d}}
B.h4.prototype={
bDm(){var x,w
if(this.e==="ordered"){x=this.ay
x=x==null||x.w==null}else x=!0
if(x)return!1
w=A.cB(A.bw(F.Kw()),A.bK(F.Kw()),A.cC(F.Kw()),0,0,0,0,0)
x=this.ay.w
x.toString
return w.j9(A.cB(A.bw(x),A.bK(x),A.cC(x),0,0,0,0,0))},
bt(){var x,w=this,v=w.b
v=v==null?null:v.hx()
x=w.c
x=x==null?null:x.hx()
return A.z(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.w,y.b)},
ox(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="yyyy-MM-dd",f=i.a,e=f==null,d=A.aA(e?0:f)
f=A.aA(e?0:f)
e=i.d
e=A.aA(e!=null?C.iV(a0,e,i.y,0):"")
x=i.e
if(x==null)x="ordered"
x=A.aA(x+";"+B.brU(x))
w=i.ay
if((w==null?h:w.e)!=null){v=w.e
v.toString
w=C.iV(a0,v,w.x,0)}else w=""
w=A.aA(w)
v=i.ay
if((v==null?h:v.f)!=null){u=v.f
u.toString
v=C.iV(a0,u,v.x,0)}else v=""
v=A.aA(v)
u=i.ay
if((u==null?h:u.r)!=null){t=u.r
t.toString
u=C.iV(a0,t,u.x,0)}else u=""
u=A.aA(u)
t=i.ay
s=t==null
r=s?h:t.d
r=A.aA(r==null?0:r)
if((s?h:t.w)!=null){t=A.hS(g,h)
s=i.ay.w
s.toString
s=t.dB(s)
t=s}else t=""
t=A.aA(t)
s=i.b
s=A.aA(s!=null?A.hS(g,h).dB(s):"")
q=A.aA(i.a0l())
p=i.f
p=A.aA(p==null?h:J.v(p,"email"))
o=i.ax
o=A.aA(o!=null?new A.Q(o,new B.brV(),A.Z(o).h("Q<1,h>")).c7(0," | "):"")
n=A.aA(i.aFP())
m=i.z
m=A.aA(m==null?"":m)
l=A.aA("")
k=A.aA("")
j=i.Q
j=j==null?h:j.ax
return A.kH(A.z(["id",d,"order_symbol",f,"price",e,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"created_at",s,"data",q,"email",p,"ticket_products",o,"note",n,"note_hidden",m,"orders_history",l,"transactions",k,"forms",A.aA(j==null?"":j)],y.w,y.d),!1,y.b)},
ej(){var x=0,w=A.m(y.v),v=this
var $async$ej=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(B.b5D(v),$async$ej)
case 2:return A.k(null,w)}})
return A.l($async$ej,w)},
eF(){var x=0,w=A.m(y.v),v=this,u,t
var $async$eF=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.d(B.b5V(t,u),$async$eF)
case 2:return A.k(null,w)}})
return A.l($async$eF,w)},
lc(){return"Order #"+A.q(this.a)},
a0l(){var x=this.f,w=x==null,v=A.q(w?null:J.v(x,"name"))
return v+" "+A.q(w?null:J.v(x,"surname"))},
aFP(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.q(x==null?"":x)},
gbn(d){return this.a}}
B.h6.prototype={
bt(){return A.z(["state",this.e,"note_hidden",this.w],y.w,y.b)},
ox(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k=A.aA(k==null?0:k)
x=m.b
x=A.aA(x!=null?A.hS("yyyy-MM-dd",l).dB(x):"")
w=m.d
w=A.aA(w==null?"":w)
v=m.e
if(v==null)v="ordered"
v=A.aA(v+";"+B.brU(v))
u=m.r
u=A.aA(u==null?"":u)
t=m.w
t=A.aA(t==null?"":t)
s=m.Q
r=s!=null
q=A.aA(r?"Order #"+A.q(s.a):"")
s=A.aA(r?s.a0l():"")
r=m.z
r=A.aA(r!=null?new A.Q(r,new B.bGL(),A.Z(r).h("Q<1,h>")).c7(0," | "):"")
p=m.y
if(p!=null){o=p.z
o=o==null?l:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aA(p)
o=m.x
n=A.z(["id",k,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"ticketSpot",p,"price",A.aA(o!=null?C.iV(d,o,l,0):""),"ticketProductsEdit",A.aA("")],y.w,y.d)
k=m.Q.ax
n.H(0,B.cBN(k==null?A.a([],y.E):k))
return A.kH(n,!1,y.b)},
ej(){var x=0,w=A.m(y.v)
var $async$ej=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:return A.k(null,w)}})
return A.l($async$ej,w)},
eF(){var x=0,w=A.m(y.v),v=this,u,t
var $async$eF=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.d(B.b6c(t,u),$async$eF)
case 2:return A.k(null,w)}})
return A.l($async$eF,w)},
lc(){var x=this.d
return x==null?J.ao(this.a):x},
gbn(d){return this.a}}
var z=a.updateTypes(["y(mZ)","y(h6)","f?(mZ)","y(h4)","h(h)"])
B.b_h.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.b_i.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.b_j.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.b_k.prototype={
$1(d){return d.d},
$S:z+2}
B.b_l.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:267}
B.b_m.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:E.b.m0(w,new B.b_g(d))}w=x==null?null:x.d
return w==null?"":w},
$S:974}
B.b_g.prototype={
$1(d){return d.a==this.a},
$S:35}
B.b_n.prototype={
$1(d){return d.length!==0},
$S:21}
B.b_o.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.brV.prototype={
$1(d){return d.lc()},
$S:160}
B.bGL.prototype={
$1(d){return d.lc()},
$S:160}
B.bb9.prototype={
$1(d){return d.lc()},
$S:160};(function installTearOffs(){var x=a._static_1
x(B,"cMu","d0r",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.iG,A.G)
w(A.bJ,[B.b_h,B.b_i,B.b_j,B.b_k,B.b_l,B.b_m,B.b_g,B.b_n,B.b_o,B.brV,B.bGL,B.bb9])
w(A.hF,[B.h4,B.h6])})()
A.br(b.typeUniverse,JSON.parse('{"h4":{"hF":[]},"h6":{"hF":[]}}'))
var y={E:A.B("u<eM>"),q:A.B("C<eM>"),w:A.B("h"),d:A.B("fX"),b:A.B("@"),v:A.B("~")};(function constants(){var x=a.makeConstList
D.ma=A.a(x(["spot","food","others"]),A.B("u<h>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dmt","Mq",()=>$.hx().gmV(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_279",e:"endPart",h:b})})($__dart_deferred_initializers__,"KZ6ZmDeHYNTAFYpX4UXhrsZUG+w=");