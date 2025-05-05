((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_284",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,B={
cvV(d){var x=J.a2(d)
return new B.iP(x.h(d,"x"),x.h(d,"y"),x.h(d,"id"),x.h(d,"group"),x.h(d,"order_product_ticket"),x.h(d,"type"),x.h(d,"state"),x.h(d,"title"),null,x.h(d,"product"),null)},
iP:function iP(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b0L:function b0L(d){this.a=d},
b0M:function b0M(d){this.a=d},
b0N:function b0N(d){this.a=d},
b0O:function b0O(){},
b0P:function b0P(d){this.a=d},
b0Q:function b0Q(d){this.a=d},
b0K:function b0K(d){this.a=d},
b0R:function b0R(){},
b0S:function b0S(d){this.a=d},
buZ(d){var x=null
switch(d){case"ordered":case"expired":return A.u("Ordered",x)
case"paid":return A.u("Paid",x)
case"sent":return A.u("Sent",x)
case"used":return A.u("Used",x)
case"storno":return A.u("Storno",x)
default:return"???"}},
d6H(d){return d+";"+B.buZ(d)},
cJE(d,e,f,g,h,i,j,k,l,m,n){return new B.hc(h,d,n,l,m,f,j,k,g,e,i)},
cJF(d){var x=null,w="created_at",v="updated_at",u="data",t=J.a2(d),s=t.h(d,"id"),r=t.h(d,w)!=null?A.f0(t.h(d,w)):x,q=t.h(d,v)!=null?A.f0(t.h(d,v)):x,p=t.h(d,"price")!=null?A.lj(J.ao(t.h(d,"price"))):x,o=t.h(d,"currency_code"),n=t.h(d,"state"),m=t.h(d,u)!=null?J.v(t.h(d,u),"form"):x,l=t.h(d,u),k=t.h(d,"occasion"),j=t.h(d,"payment_info")
return B.cJE(r,o,l,m,s,t.h(d,"note_hidden"),k,j,p,n,q)},
hc:function hc(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bv_:function bv_(){},
cMf(d,e,f,g,h,i,j,k){return new B.he(e,d,j,i,f,g)},
cMg(d){var x="created_at",w="updated_at",v=J.a2(d),u=v.h(d,"id"),t=v.h(d,x)!=null?A.f0(v.h(d,x)):null,s=v.h(d,w)!=null?A.f0(v.h(d,w)):null,r=v.h(d,"ticket_symbol"),q=v.h(d,"state"),p=v.h(d,"occasion")
return B.cMf(t,u,v.h(d,"note"),v.h(d,"note_hidden"),p,q,r,s)},
he:function he(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bK7:function bK7(){},
cGG(d){var x,w,v,u,t,s,r,q=y.w,p=A.K(q,y.q)
for(x=y.E,w=0;w<3;++w)p.m(0,D.mf[w],A.a([],x))
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.S)(d),++w){v=d[w]
u=v.Q
if(u==null)u=""
p.h(0,E.b.n(D.mf,u)?u:E.b.gY(D.mf)).push(v)}t=A.K(q,y.d)
for(w=0;w<3;++w){s=D.mf[w]
if(p.h(0,s).length!==0){q=p.h(0,s)
q.toString
r=new A.Q(q,new B.bd9(),A.Z(q).i("Q<1,m>")).c4(0," | ")}else r=""
t.m(0,s,new A.h2(new A.hf(),r))}return t},
bd9:function bd9(){},
b7u(d){var x=0,w=A.k(y.v),v,u
var $async$b7u=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.d($.B6().dJ("delete_order",A.z(["order_id",d.a],y.w,v),v),$async$b7u)
case 2:u=f
v=J.a2(u)
if(!J.p(v.h(u,"code"),200))throw A.n(A.cN("Deleting order failed: "+A.o(v.h(u,"code"))+": "+A.o(v.h(u,"message"))))
return A.i(null,w)}})
return A.j($async$b7u,w)},
b7M(d,e){var x=0,w=A.k(y.v),v,u,t
var $async$b7M=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.B6().dJ("update_order_note_hidden",A.z(["order_id",d,"new_note_hidden",e],y.w,v),v),$async$b7M)
case 2:if(!u.p(t.v(g,"code"),200))throw A.n(A.cN("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b7M,w)},
b83(d,e){var x=0,w=A.k(y.v),v,u,t
var $async$b83=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.Nd().dJ("update_ticket_note_hidden",A.z(["ticket_id",d,"new_note_hidden",e],y.w,v),v),$async$b83)
case 2:if(!u.p(t.v(g,"code"),200))throw A.n(A.cN("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b83,w)}},D,F,C
J=c[1]
A=c[0]
E=c[2]
B=a.updateHolder(c[80],B)
D=c[349]
F=c[116]
C=c[97]
B.iP.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
bp(){var x,w,v=this,u=A.K(y.w,y.b)
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
bwv(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.dL(k,new B.b0L(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.dL(k,new B.b0M(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.Z(k)
t=u.i("dz<1,l?>")
t=A.H(new A.dz(new A.ai(k,new B.b0N(w),u.i("ai<1>")),new B.b0O(),t),!0,t.i("y.E"))
v=t}}if(v==null)s=l
else{k=A.Z(v)
u=k.i("dz<1,m>")
u=new A.ai(new A.dz(new A.ai(v,new B.b0P(m),k.i("ai<1>")),new B.b0Q(m),u),new B.b0R(),u.i("ai<y.E>")).c4(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:E.b.fi(k,new B.b0S(x))}k=r==null
q=k?l:r.aHT()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a1j()+q:""
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
return A.o(k)+" "+u+"\n"+t+": "+C.j6(d,n==null?0:n,l,0)},
gbo(d){return this.c},
gdm(d){return this.w},
sGS(d){return this.as=d}}
B.hc.prototype={
bH_(){var x,w
if(this.e==="ordered"){x=this.ay
x=x==null||x.w==null}else x=!0
if(x)return!1
w=A.cF(A.bA(F.Lh()),A.bM(F.Lh()),A.cL(F.Lh()),0,0,0,0,0)
x=this.ay.w
x.toString
return w.jm(A.cF(A.bA(x),A.bM(x),A.cL(x),0,0,0,0,0))},
bp(){var x,w=this,v=w.b
v=v==null?null:v.hH()
x=w.c
x=x==null?null:x.hH()
return A.z(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.w,y.b)},
oL(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="yyyy-MM-dd",f=i.a,e=f==null,d=A.aA(e?0:f)
f=A.aA(e?0:f)
e=i.d
e=A.aA(e!=null?C.j6(a0,e,i.y,0):"")
x=i.e
if(x==null)x="ordered"
x=A.aA(x+";"+B.buZ(x))
w=i.ay
if((w==null?h:w.e)!=null){v=w.e
v.toString
w=C.j6(a0,v,w.x,0)}else w=""
w=A.aA(w)
v=i.ay
if((v==null?h:v.f)!=null){u=v.f
u.toString
v=C.j6(a0,u,v.x,0)}else v=""
v=A.aA(v)
u=i.ay
if((u==null?h:u.r)!=null){t=u.r
t.toString
u=C.j6(a0,t,u.x,0)}else u=""
u=A.aA(u)
t=i.ay
s=t==null
r=s?h:t.d
r=A.aA(r==null?0:r)
if((s?h:t.w)!=null){t=A.i_(g,h)
s=i.ay.w
s.toString
s=t.dC(s)
t=s}else t=""
t=A.aA(t)
s=i.b
s=A.aA(s!=null?A.i_(g,h).dC(s):"")
q=A.aA(i.a1j())
p=i.f
p=A.aA(p==null?h:J.v(p,"email"))
o=i.ax
o=A.aA(o!=null?new A.Q(o,new B.bv_(),A.Z(o).i("Q<1,m>")).c4(0," | "):"")
n=A.aA(i.aHT())
m=i.z
m=A.aA(m==null?"":m)
l=A.aA("")
k=A.aA("")
j=i.Q
j=j==null?h:j.ax
return A.kV(A.z(["id",d,"order_symbol",f,"price",e,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"created_at",s,"data",q,"email",p,"ticket_products",o,"note",n,"note_hidden",m,"orders_history",l,"transactions",k,"forms",A.aA(j==null?"":j)],y.w,y.d),!1,y.b)},
ep(){var x=0,w=A.k(y.v),v=this
var $async$ep=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(B.b7u(v),$async$ep)
case 2:return A.i(null,w)}})
return A.j($async$ep,w)},
eL(){var x=0,w=A.k(y.v),v=this,u,t
var $async$eL=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.d(B.b7M(t,u),$async$eL)
case 2:return A.i(null,w)}})
return A.j($async$eL,w)},
lk(){return"Order #"+A.o(this.a)},
a1j(){var x=this.f,w=x==null,v=A.o(w?null:J.v(x,"name"))
return v+" "+A.o(w?null:J.v(x,"surname"))},
aHT(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.o(x==null?"":x)},
gbo(d){return this.a}}
B.he.prototype={
bp(){return A.z(["state",this.e,"note_hidden",this.w],y.w,y.b)},
oL(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k=A.aA(k==null?0:k)
x=m.b
x=A.aA(x!=null?A.i_("yyyy-MM-dd",l).dC(x):"")
w=m.d
w=A.aA(w==null?"":w)
v=m.e
if(v==null)v="ordered"
v=A.aA(v+";"+B.buZ(v))
u=m.r
u=A.aA(u==null?"":u)
t=m.w
t=A.aA(t==null?"":t)
s=m.Q
r=s!=null
q=A.aA(r?"Order #"+A.o(s.a):"")
s=A.aA(r?s.a1j():"")
r=m.z
r=A.aA(r!=null?new A.Q(r,new B.bK7(),A.Z(r).i("Q<1,m>")).c4(0," | "):"")
p=m.y
if(p!=null){o=p.z
o=o==null?l:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aA(p)
o=m.x
n=A.z(["id",k,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"ticketSpot",p,"price",A.aA(o!=null?C.j6(d,o,l,0):""),"ticketProductsEdit",A.aA("")],y.w,y.d)
k=m.Q.ax
n.H(0,B.cGG(k==null?A.a([],y.E):k))
return A.kV(n,!1,y.b)},
ep(){var x=0,w=A.k(y.v)
var $async$ep=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:return A.i(null,w)}})
return A.j($async$ep,w)},
eL(){var x=0,w=A.k(y.v),v=this,u,t
var $async$eL=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.d(B.b83(t,u),$async$eL)
case 2:return A.i(null,w)}})
return A.j($async$eL,w)},
lk(){var x=this.d
return x==null?J.ao(this.a):x},
gbo(d){return this.a}}
var z=a.updateTypes(["x(ne)","x(he)","l?(ne)","x(hc)","m(m)"])
B.b0L.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.b0M.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.b0N.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.b0O.prototype={
$1(d){return d.d},
$S:z+2}
B.b0P.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:291}
B.b0Q.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:E.b.fi(w,new B.b0K(d))}w=x==null?null:x.d
return w==null?"":w},
$S:1026}
B.b0K.prototype={
$1(d){return d.a==this.a},
$S:38}
B.b0R.prototype={
$1(d){return d.length!==0},
$S:20}
B.b0S.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bv_.prototype={
$1(d){return d.lk()},
$S:133}
B.bK7.prototype={
$1(d){return d.lk()},
$S:133}
B.bd9.prototype={
$1(d){return d.lk()},
$S:133};(function installTearOffs(){var x=a._static_1
x(B,"cRB","d6H",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.iP,A.E)
w(A.bF,[B.b0L,B.b0M,B.b0N,B.b0O,B.b0P,B.b0Q,B.b0K,B.b0R,B.b0S,B.bv_,B.bK7,B.bd9])
w(A.hL,[B.hc,B.he])})()
A.bn(b.typeUniverse,JSON.parse('{"hc":{"hL":[]},"he":{"hL":[]}}'))
var y={E:A.A("r<eN>"),q:A.A("C<eN>"),w:A.A("m"),d:A.A("h2"),b:A.A("@"),v:A.A("~")};(function constants(){var x=a.makeConstList
D.mf=A.a(x(["spot","food","others"]),A.A("r<m>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dto","Nd",()=>$.hD().gn5(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_284",e:"endPart",h:b})})($__dart_deferred_initializers__,"q1udeZCYUiaC9Cf5kXAaoiwrPJg=");