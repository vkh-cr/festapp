((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_280",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
cmh(d){var x=J.a2(d)
return new B.iA(x.i(d,"x"),x.i(d,"y"),x.i(d,"id"),x.i(d,"group"),x.i(d,"order_product_ticket"),x.i(d,"type"),x.i(d,"state"),x.i(d,"title"),null,x.i(d,"product"),null)},
iA:function iA(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aZa:function aZa(d){this.a=d},
aZb:function aZb(d){this.a=d},
aZc:function aZc(d){this.a=d},
aZd:function aZd(){},
aZe:function aZe(d){this.a=d},
aZf:function aZf(d){this.a=d},
aZ9:function aZ9(d){this.a=d},
aZg:function aZg(){},
aZh:function aZh(d){this.a=d},
bpO(d){var x=null
switch(d){case"ordered":case"expired":return A.r("Ordered",x)
case"paid":return A.r("Paid",x)
case"sent":return A.r("Sent",x)
case"used":return A.r("Used",x)
case"storno":return A.r("Storno",x)
default:return"???"}},
cVY(d){return d+";"+B.bpO(d)},
cz9(d,e,f,g,h,i,j,k,l,m){return new B.fU(g,d,m,k,l,f,i,j,e,h)},
cza(d){var x="created_at",w="updated_at",v=J.a2(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.f9(v.i(d,x)):null,s=v.i(d,w)!=null?A.f9(v.i(d,w)):null,r=v.i(d,"price")!=null?A.ls(J.ap(v.i(d,"price"))):null,q=v.i(d,"state"),p=v.i(d,"data"),o=v.i(d,"occasion"),n=v.i(d,"payment_info")
return B.cz9(t,v.i(d,"currency_code"),p,u,v.i(d,"note_hidden"),o,n,r,q,s)},
fU:function fU(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.y=l
_.z=m
_.ax=_.at=_.Q=null},
bpP:function bpP(){},
cC1(d,e,f,g,h,i,j,k){return new B.hi(e,d,j,i,f,g)},
cC2(d){var x="created_at",w="updated_at",v=J.a2(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.f9(v.i(d,x)):null,s=v.i(d,w)!=null?A.f9(v.i(d,w)):null,r=v.i(d,"ticket_symbol"),q=v.i(d,"state"),p=v.i(d,"occasion")
return B.cC1(t,u,v.i(d,"note"),v.i(d,"note_hidden"),p,q,r,s)},
hi:function hi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bG6:function bG6(){},
b4j(d){var x=0,w=A.k(y.f),v,u
var $async$b4j=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.c($.Af().e1("delete_order",A.y(["order_id",d.a],y.g,v),v),$async$b4j)
case 2:u=f
v=J.a2(u)
if(!J.m(v.i(u,"code"),200))throw A.l(A.cT("Deleting order failed: "+A.o(v.i(u,"code"))+": "+A.o(v.i(u,"message"))))
return A.i(null,w)}})
return A.j($async$b4j,w)},
b4z(d,e){var x=0,w=A.k(y.f),v,u,t
var $async$b4z=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.Af().e1("update_order_note_hidden",A.y(["order_id",d,"new_note_hidden",e],y.g,v),v),$async$b4z)
case 2:if(!u.m(t.v(g,"code"),200))throw A.l(A.cT("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b4z,w)},
b4P(d,e){var x=0,w=A.k(y.f),v,u,t
var $async$b4P=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.LU().e1("update_ticket_note_hidden",A.y(["ticket_id",d,"new_note_hidden",e],y.g,v),v),$async$b4P)
case 2:if(!u.m(t.v(g,"code"),200))throw A.l(A.cT("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b4P,w)}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[77],B)
C=c[93]
B.iA.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
by(){var x,w,v=this,u=A.I(y.g,y.b)
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
brg(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.ed(k,new B.aZa(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.ed(k,new B.aZb(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.X(k)
t=u.h("dL<1,t?>")
t=A.H(new A.dL(new A.af(k,new B.aZc(w),u.h("af<1>")),new B.aZd(),t),!0,t.h("w.E"))
v=t}}if(v==null)s=l
else{k=A.X(v)
u=k.h("dL<1,e>")
u=new A.af(new A.dL(new A.af(v,new B.aZe(m),k.h("af<1>")),new B.aZf(m),u),new B.aZg(),u.h("af<w.E>")).cb(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:D.b.lV(k,new B.aZh(x))}k=r==null
q=k?l:r.aES()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a_Z()+q:""
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
return A.o(k)+" "+u+"\n"+t+": "+C.oa(d,n==null?0:n,l,0)},
gbo(d){return this.c},
gdq(d){return this.w},
sGq(d){return this.as=d}}
B.fU.prototype={
by(){var x,w=this,v=w.b
v=v==null?null:v.hI()
x=w.c
x=x==null?null:x.hI()
return A.y(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.g,y.b)},
qk(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j="yyyy-MM-dd",i=l.a,h=i==null,g=A.aP(h?0:i)
i=A.aP(h?0:i)
h=l.d
h=A.aP(h!=null?C.oa(d,h,k,0):"")
x=l.e
if(x==null)x="ordered"
x=A.aP(x+";"+B.bpO(x))
w=l.ax
if((w==null?k:w.e)!=null){w=w.e
w.toString
w=C.oa(d,w,k,0)}else w=""
w=A.aP(w)
v=l.ax
if((v==null?k:v.f)!=null){v=v.f
v.toString
v=C.oa(d,v,k,0)}else v=""
v=A.aP(v)
u=l.ax
if((u==null?k:u.r)!=null){u=u.r
u.toString
u=C.oa(d,u,k,0)}else u=""
u=A.aP(u)
t=l.ax
s=t==null
r=s?k:t.d
r=A.aP(r==null?0:r)
if((s?k:t.w)!=null){t=A.ie(j,k)
s=l.ax.w
s.toString
s=t.dS(s)
t=s}else t=""
t=A.aP(t)
s=l.b
s=A.aP(s!=null?A.ie(j,k).dS(s):"")
q=A.aP(l.a_Z())
p=l.f
p=A.aP(p==null?k:J.v(p,"email"))
o=l.at
o=A.aP(o!=null?new A.O(o,new B.bpP(),A.X(o).h("O<1,e>")).cb(0," | "):"")
n=A.aP(l.aES())
m=l.z
return A.lq(A.y(["id",g,"order_symbol",i,"price",h,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"created_at",s,"data",q,"email",p,"ticket_products",o,"note",n,"note_hidden",A.aP(m==null?"":m),"orders_history",A.aP(""),"transactions",A.aP("")],y.g,y.e),!1,y.b)},
eS(){var x=0,w=A.k(y.f),v=this
var $async$eS=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(B.b4j(v),$async$eS)
case 2:return A.i(null,w)}})
return A.j($async$eS,w)},
fk(){var x=0,w=A.k(y.f),v=this,u,t
var $async$fk=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.c(B.b4z(t,u),$async$fk)
case 2:return A.i(null,w)}})
return A.j($async$fk,w)},
lE(){return"Order #"+A.o(this.a)},
a_Z(){var x=this.f,w=x==null,v=A.o(w?null:J.v(x,"name"))
return v+" "+A.o(w?null:J.v(x,"surname"))},
aES(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.o(x==null?"":x)},
gbo(d){return this.a}}
B.hi.prototype={
by(){return A.y(["state",this.e,"note_hidden",this.w],y.g,y.b)},
qk(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a
l=A.aP(l==null?0:l)
x=n.b
x=A.aP(x!=null?A.ie("yyyy-MM-dd",m).dS(x):"")
w=n.d
w=A.aP(w==null?"":w)
v=n.e
if(v==null)v="ordered"
v=A.aP(v+";"+B.bpO(v))
u=n.r
u=A.aP(u==null?"":u)
t=n.w
t=A.aP(t==null?"":t)
s=n.Q
r=s!=null
q=A.aP(r?"Order #"+A.o(s.a):"")
s=A.aP(r?s.a_Z():"")
r=n.z
r=A.aP(r!=null?new A.O(r,new B.bG6(),A.X(r).h("O<1,e>")).cb(0," | "):"")
p=n.y
if(p!=null){o=p.z
o=o==null?m:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aP(p)
o=n.x
return A.lq(A.y(["id",l,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"spot",p,"price",A.aP(o!=null?C.oa(d,o,m,0):"")],y.g,y.e),!1,y.b)},
eS(){var x=0,w=A.k(y.f)
var $async$eS=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:return A.i(null,w)}})
return A.j($async$eS,w)},
fk(){var x=0,w=A.k(y.f),v=this,u,t
var $async$fk=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.c(B.b4P(t,u),$async$fk)
case 2:return A.i(null,w)}})
return A.j($async$fk,w)},
lE(){var x=this.d
return x==null?J.ap(this.a):x},
gbo(d){return this.a}}
var z=a.updateTypes(["x(mS)","x(hi)","t?(mS)","x(fU)","e(e)"])
B.aZa.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.aZb.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.aZc.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.aZd.prototype={
$1(d){return d.d},
$S:z+2}
B.aZe.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:315}
B.aZf.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:D.b.lV(w,new B.aZ9(d))}w=x==null?null:x.d
return w==null?"":w},
$S:961}
B.aZ9.prototype={
$1(d){return d.a==this.a},
$S:112}
B.aZg.prototype={
$1(d){return d.length!==0},
$S:18}
B.aZh.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bpP.prototype={
$1(d){return d.lE()},
$S:181}
B.bG6.prototype={
$1(d){return d.lE()},
$S:181};(function installTearOffs(){var x=a._static_1
x(B,"czb","cVY",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.iA,A.E)
w(A.bA,[B.aZa,B.aZb,B.aZc,B.aZd,B.aZe,B.aZf,B.aZ9,B.aZg,B.aZh,B.bpP,B.bG6])
w(A.i1,[B.fU,B.hi])})()
A.bm(b.typeUniverse,JSON.parse('{"fU":{"i1":[]},"hi":{"i1":[]}}'))
var y={e:A.z("hg"),g:A.z("e"),b:A.z("@"),f:A.z("~")};(function lazyInitializers(){var x=a.lazyFinal
x($,"dfj","LU",()=>$.hy().gmQ(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_280",e:"endPart",h:b})})($__dart_deferred_initializers__,"G/gfwCYA/pGcEr4dAM+KLHocGvY=");