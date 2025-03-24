((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_279",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
cn2(d){var x=J.a2(d)
return new B.iB(x.i(d,"x"),x.i(d,"y"),x.i(d,"id"),x.i(d,"group"),x.i(d,"order_product_ticket"),x.i(d,"type"),x.i(d,"state"),x.i(d,"title"),null,x.i(d,"product"),null)},
iB:function iB(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aZr:function aZr(d){this.a=d},
aZs:function aZs(d){this.a=d},
aZt:function aZt(d){this.a=d},
aZu:function aZu(){},
aZv:function aZv(d){this.a=d},
aZw:function aZw(d){this.a=d},
aZq:function aZq(d){this.a=d},
aZx:function aZx(){},
aZy:function aZy(d){this.a=d},
bqi(d){var x=null
switch(d){case"ordered":case"expired":return A.t("Ordered",x)
case"paid":return A.t("Paid",x)
case"sent":return A.t("Sent",x)
case"used":return A.t("Used",x)
case"storno":return A.t("Storno",x)
default:return"???"}},
cX_(d){return d+";"+B.bqi(d)},
czZ(d,e,f,g,h,i,j,k,l,m){return new B.fU(g,d,m,k,l,f,i,j,e,h)},
cA_(d){var x="created_at",w="updated_at",v=J.a2(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.f9(v.i(d,x)):null,s=v.i(d,w)!=null?A.f9(v.i(d,w)):null,r=v.i(d,"price")!=null?A.nR(J.ap(v.i(d,"price"))):null,q=v.i(d,"state"),p=v.i(d,"data"),o=v.i(d,"occasion"),n=v.i(d,"payment_info")
return B.czZ(t,v.i(d,"currency_code"),p,u,v.i(d,"note_hidden"),o,n,r,q,s)},
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
bqj:function bqj(){},
cCM(d,e,f,g,h,i,j,k){return new B.hi(e,d,j,i,f,g)},
cCN(d){var x="created_at",w="updated_at",v=J.a2(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.f9(v.i(d,x)):null,s=v.i(d,w)!=null?A.f9(v.i(d,w)):null,r=v.i(d,"ticket_symbol"),q=v.i(d,"state"),p=v.i(d,"occasion")
return B.cCM(t,u,v.i(d,"note"),v.i(d,"note_hidden"),p,q,r,s)},
hi:function hi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bGD:function bGD(){},
b4A(d){var x=0,w=A.k(y.f),v,u
var $async$b4A=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.c($.An().e3("delete_order",A.y(["order_id",d.a],y.g,v),v),$async$b4A)
case 2:u=f
v=J.a2(u)
if(!J.m(v.i(u,"code"),200))throw A.l(A.cC("Deleting order failed: "+A.o(v.i(u,"code"))+": "+A.o(v.i(u,"message"))))
return A.i(null,w)}})
return A.j($async$b4A,w)},
b4Q(d,e){var x=0,w=A.k(y.f),v,u,t
var $async$b4Q=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.An().e3("update_order_note_hidden",A.y(["order_id",d,"new_note_hidden",e],y.g,v),v),$async$b4Q)
case 2:if(!u.m(t.v(g,"code"),200))throw A.l(A.cC("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b4Q,w)},
b55(d,e){var x=0,w=A.k(y.f),v,u,t
var $async$b55=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.M_().e3("update_ticket_note_hidden",A.y(["ticket_id",d,"new_note_hidden",e],y.g,v),v),$async$b55)
case 2:if(!u.m(t.v(g,"code"),200))throw A.l(A.cC("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b55,w)}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[78],B)
C=c[94]
B.iB.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
c0(){var x,w,v=this,u=A.I(y.g,y.b)
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
brI(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.ee(k,new B.aZr(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.ee(k,new B.aZs(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.X(k)
t=u.h("ds<1,r?>")
t=A.H(new A.ds(new A.ac(k,new B.aZt(w),u.h("ac<1>")),new B.aZu(),t),!0,t.h("w.E"))
v=t}}if(v==null)s=l
else{k=A.X(v)
u=k.h("ds<1,e>")
u=new A.ac(new A.ds(new A.ac(v,new B.aZv(m),k.h("ac<1>")),new B.aZw(m),u),new B.aZx(),u.h("ac<w.E>")).c2(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:D.b.lX(k,new B.aZy(x))}k=r==null
q=k?l:r.aF9()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a08()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+A.o(k):""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.o(k)+" "+u+"\n"+A.t("Ticket",l)+" "+A.o(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.t("Price",l)
n=m.x
n=n==null?l:n.r
return A.o(k)+" "+u+"\n"+t+": "+C.oc(d,n==null?0:n,l,0)},
gbo(d){return this.c},
gdq(d){return this.w},
sGw(d){return this.as=d}}
B.fU.prototype={
c0(){var x,w=this,v=w.b
v=v==null?null:v.hK()
x=w.c
x=x==null?null:x.hK()
return A.y(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.g,y.b)},
qm(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j="yyyy-MM-dd",i=l.a,h=i==null,g=A.aR(h?0:i)
i=A.aR(h?0:i)
h=l.d
h=A.aR(h!=null?C.oc(d,h,k,0):"")
x=l.e
if(x==null)x="ordered"
x=A.aR(x+";"+B.bqi(x))
w=l.ax
if((w==null?k:w.e)!=null){w=w.e
w.toString
w=C.oc(d,w,k,0)}else w=""
w=A.aR(w)
v=l.ax
if((v==null?k:v.f)!=null){v=v.f
v.toString
v=C.oc(d,v,k,0)}else v=""
v=A.aR(v)
u=l.ax
if((u==null?k:u.r)!=null){u=u.r
u.toString
u=C.oc(d,u,k,0)}else u=""
u=A.aR(u)
t=l.ax
s=t==null
r=s?k:t.d
r=A.aR(r==null?0:r)
if((s?k:t.w)!=null){t=A.ih(j,k)
s=l.ax.w
s.toString
s=t.dV(s)
t=s}else t=""
t=A.aR(t)
s=l.b
s=A.aR(s!=null?A.ih(j,k).dV(s):"")
q=A.aR(l.a08())
p=l.f
p=A.aR(p==null?k:J.v(p,"email"))
o=l.at
o=A.aR(o!=null?new A.O(o,new B.bqj(),A.X(o).h("O<1,e>")).c2(0," | "):"")
n=A.aR(l.aF9())
m=l.z
return A.lp(A.y(["id",g,"order_symbol",i,"price",h,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"created_at",s,"data",q,"email",p,"ticket_products",o,"note",n,"note_hidden",A.aR(m==null?"":m),"orders_history",A.aR(""),"transactions",A.aR("")],y.g,y.e),!1,y.b)},
eS(){var x=0,w=A.k(y.f),v=this
var $async$eS=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(B.b4A(v),$async$eS)
case 2:return A.i(null,w)}})
return A.j($async$eS,w)},
fk(){var x=0,w=A.k(y.f),v=this,u,t
var $async$fk=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.c(B.b4Q(t,u),$async$fk)
case 2:return A.i(null,w)}})
return A.j($async$fk,w)},
lH(){return"Order #"+A.o(this.a)},
a08(){var x=this.f,w=x==null,v=A.o(w?null:J.v(x,"name"))
return v+" "+A.o(w?null:J.v(x,"surname"))},
aF9(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.o(x==null?"":x)},
gbo(d){return this.a}}
B.hi.prototype={
c0(){return A.y(["state",this.e,"note_hidden",this.w],y.g,y.b)},
qm(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a
l=A.aR(l==null?0:l)
x=n.b
x=A.aR(x!=null?A.ih("yyyy-MM-dd",m).dV(x):"")
w=n.d
w=A.aR(w==null?"":w)
v=n.e
if(v==null)v="ordered"
v=A.aR(v+";"+B.bqi(v))
u=n.r
u=A.aR(u==null?"":u)
t=n.w
t=A.aR(t==null?"":t)
s=n.Q
r=s!=null
q=A.aR(r?"Order #"+A.o(s.a):"")
s=A.aR(r?s.a08():"")
r=n.z
r=A.aR(r!=null?new A.O(r,new B.bGD(),A.X(r).h("O<1,e>")).c2(0," | "):"")
p=n.y
if(p!=null){o=p.z
o=o==null?m:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aR(p)
o=n.x
return A.lp(A.y(["id",l,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"spot",p,"price",A.aR(o!=null?C.oc(d,o,m,0):"")],y.g,y.e),!1,y.b)},
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
return A.c(B.b55(t,u),$async$fk)
case 2:return A.i(null,w)}})
return A.j($async$fk,w)},
lH(){var x=this.d
return x==null?J.ap(this.a):x},
gbo(d){return this.a}}
var z=a.updateTypes(["x(mS)","x(hi)","r?(mS)","x(fU)","e(e)"])
B.aZr.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.aZs.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.aZt.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.aZu.prototype={
$1(d){return d.d},
$S:z+2}
B.aZv.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:290}
B.aZw.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:D.b.lX(w,new B.aZq(d))}w=x==null?null:x.d
return w==null?"":w},
$S:973}
B.aZq.prototype={
$1(d){return d.a==this.a},
$S:117}
B.aZx.prototype={
$1(d){return d.length!==0},
$S:15}
B.aZy.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bqj.prototype={
$1(d){return d.lH()},
$S:207}
B.bGD.prototype={
$1(d){return d.lH()},
$S:207};(function installTearOffs(){var x=a._static_1
x(B,"cA0","cX_",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.iB,A.E)
w(A.bB,[B.aZr,B.aZs,B.aZt,B.aZu,B.aZv,B.aZw,B.aZq,B.aZx,B.aZy,B.bqj,B.bGD])
w(A.i4,[B.fU,B.hi])})()
A.bl(b.typeUniverse,JSON.parse('{"fU":{"i4":[]},"hi":{"i4":[]}}'))
var y={e:A.z("hg"),g:A.z("e"),b:A.z("@"),f:A.z("~")};(function lazyInitializers(){var x=a.lazyFinal
x($,"dgB","M_",()=>$.hy().gmQ(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_279",e:"endPart",h:b})})($__dart_deferred_initializers__,"612ObuazqLQ1qlggGjwc5jTy4qc=");