((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_279",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
cmU(d){var x=J.a2(d)
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
aZm:function aZm(d){this.a=d},
aZn:function aZn(d){this.a=d},
aZo:function aZo(d){this.a=d},
aZp:function aZp(){},
aZq:function aZq(d){this.a=d},
aZr:function aZr(d){this.a=d},
aZl:function aZl(d){this.a=d},
aZs:function aZs(){},
aZt:function aZt(d){this.a=d},
bqh(d){var x=null
switch(d){case"ordered":return A.t("Ordered",x)
case"paid":return A.t("Paid",x)
case"sent":return A.t("Sent",x)
case"used":return A.t("Used",x)
case"storno":return A.t("Storno",x)
default:return"???"}},
cWS(d){return d+";"+B.bqh(d)},
czQ(d,e,f,g,h,i,j,k,l,m){return new B.fU(g,d,m,k,l,f,i,j,e,h)},
czR(d){var x="created_at",w="updated_at",v=J.a2(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.f9(v.i(d,x)):null,s=v.i(d,w)!=null?A.f9(v.i(d,w)):null,r=v.i(d,"price")!=null?A.nR(J.ap(v.i(d,"price"))):null,q=v.i(d,"state"),p=v.i(d,"data"),o=v.i(d,"occasion"),n=v.i(d,"payment_info")
return B.czQ(t,v.i(d,"currency_code"),p,u,v.i(d,"note_hidden"),o,n,r,q,s)},
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
bqi:function bqi(){},
cCD(d,e,f,g,h,i,j,k){return new B.hi(e,d,j,i,f,g)},
cCE(d){var x="created_at",w="updated_at",v=J.a2(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.f9(v.i(d,x)):null,s=v.i(d,w)!=null?A.f9(v.i(d,w)):null,r=v.i(d,"ticket_symbol"),q=v.i(d,"state"),p=v.i(d,"occasion")
return B.cCD(t,u,v.i(d,"note"),v.i(d,"note_hidden"),p,q,r,s)},
hi:function hi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bGH:function bGH(){},
b4v(d){var x=0,w=A.k(y.f),v,u
var $async$b4v=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.c($.An().e3("delete_order",A.z(["order_id",d.a],y.g,v),v),$async$b4v)
case 2:u=f
v=J.a2(u)
if(!J.m(v.i(u,"code"),200))throw A.l(A.cC("Deleting order failed: "+A.o(v.i(u,"code"))+": "+A.o(v.i(u,"message"))))
return A.i(null,w)}})
return A.j($async$b4v,w)},
b4L(d,e){var x=0,w=A.k(y.f),v,u,t
var $async$b4L=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.An().e3("update_order_note_hidden",A.z(["order_id",d,"new_note_hidden",e],y.g,v),v),$async$b4L)
case 2:if(!u.m(t.v(g,"code"),200))throw A.l(A.cC("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b4L,w)},
b50(d,e){var x=0,w=A.k(y.f),v,u,t
var $async$b50=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.LZ().e3("update_ticket_note_hidden",A.z(["ticket_id",d,"new_note_hidden",e],y.g,v),v),$async$b50)
case 2:if(!u.m(t.v(g,"code"),200))throw A.l(A.cC("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b50,w)}},C
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
brE(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.ee(k,new B.aZm(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.ee(k,new B.aZn(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.X(k)
t=u.h("ds<1,r?>")
t=A.H(new A.ds(new A.ac(k,new B.aZo(w),u.h("ac<1>")),new B.aZp(),t),!0,t.h("w.E"))
v=t}}if(v==null)s=l
else{k=A.X(v)
u=k.h("ds<1,e>")
u=new A.ac(new A.ds(new A.ac(v,new B.aZq(m),k.h("ac<1>")),new B.aZr(m),u),new B.aZs(),u.h("ac<w.E>")).c4(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:D.b.lW(k,new B.aZt(x))}k=r==null
q=k?l:r.aF6()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a06()+q:""
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
return A.z(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.g,y.b)},
qm(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j="yyyy-MM-dd",i=l.a,h=i==null,g=A.aT(h?0:i)
i=A.aT(h?0:i)
h=l.d
h=A.aT(h!=null?C.oc(d,h,k,0):"")
x=l.e
if(x==null)x="ordered"
x=A.aT(x+";"+B.bqh(x))
w=l.ax
if((w==null?k:w.e)!=null){w=w.e
w.toString
w=C.oc(d,w,k,0)}else w=""
w=A.aT(w)
v=l.ax
if((v==null?k:v.f)!=null){v=v.f
v.toString
v=C.oc(d,v,k,0)}else v=""
v=A.aT(v)
u=l.ax
if((u==null?k:u.r)!=null){u=u.r
u.toString
u=C.oc(d,u,k,0)}else u=""
u=A.aT(u)
t=l.ax
s=t==null
r=s?k:t.d
r=A.aT(r==null?0:r)
if((s?k:t.w)!=null){t=A.ih(j,k)
s=l.ax.w
s.toString
s=t.dV(s)
t=s}else t=""
t=A.aT(t)
s=l.b
s=A.aT(s!=null?A.ih(j,k).dV(s):"")
q=A.aT(l.a06())
p=l.f
p=A.aT(p==null?k:J.v(p,"email"))
o=l.at
o=A.aT(o!=null?new A.O(o,new B.bqi(),A.X(o).h("O<1,e>")).c4(0," | "):"")
n=A.aT(l.aF6())
m=l.z
return A.lp(A.z(["id",g,"order_symbol",i,"price",h,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"created_at",s,"data",q,"email",p,"ticket_products",o,"note",n,"note_hidden",A.aT(m==null?"":m),"orders_history",A.aT(""),"transactions",A.aT("")],y.g,y.e),!1,y.b)},
eS(){var x=0,w=A.k(y.f),v=this
var $async$eS=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(B.b4v(v),$async$eS)
case 2:return A.i(null,w)}})
return A.j($async$eS,w)},
fk(){var x=0,w=A.k(y.f),v=this,u,t
var $async$fk=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.c(B.b4L(t,u),$async$fk)
case 2:return A.i(null,w)}})
return A.j($async$fk,w)},
m2(){return"Order #"+A.o(this.a)},
a06(){var x=this.f,w=x==null,v=A.o(w?null:J.v(x,"name"))
return v+" "+A.o(w?null:J.v(x,"surname"))},
aF6(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.o(x==null?"":x)},
gbo(d){return this.a}}
B.hi.prototype={
c0(){return A.z(["state",this.e,"note_hidden",this.w],y.g,y.b)},
qm(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a
l=A.aT(l==null?0:l)
x=n.b
x=A.aT(x!=null?A.ih("yyyy-MM-dd",m).dV(x):"")
w=n.d
w=A.aT(w==null?"":w)
v=n.e
if(v==null)v="ordered"
v=A.aT(v+";"+B.bqh(v))
u=n.r
u=A.aT(u==null?"":u)
t=n.w
t=A.aT(t==null?"":t)
s=n.Q
r=s!=null
q=A.aT(r?"Order #"+A.o(s.a):"")
s=A.aT(r?s.a06():"")
r=n.z
r=A.aT(r!=null?new A.O(r,new B.bGH(),A.X(r).h("O<1,e>")).c4(0," | "):"")
p=n.y
if(p!=null){o=p.z
o=o==null?m:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aT(p)
o=n.x
return A.lp(A.z(["id",l,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"spot",p,"price",A.aT(o!=null?C.oc(d,o,m,0):"")],y.g,y.e),!1,y.b)},
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
return A.c(B.b50(t,u),$async$fk)
case 2:return A.i(null,w)}})
return A.j($async$fk,w)},
m2(){var x=this.d
return x==null?J.ap(this.a):x},
gbo(d){return this.a}}
var z=a.updateTypes(["x(mS)","x(hi)","r?(mS)","x(fU)","e(e)"])
B.aZm.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.aZn.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.aZo.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.aZp.prototype={
$1(d){return d.d},
$S:z+2}
B.aZq.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:301}
B.aZr.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:D.b.lW(w,new B.aZl(d))}w=x==null?null:x.d
return w==null?"":w},
$S:971}
B.aZl.prototype={
$1(d){return d.a==this.a},
$S:115}
B.aZs.prototype={
$1(d){return d.length!==0},
$S:15}
B.aZt.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bqi.prototype={
$1(d){return d.m2()},
$S:286}
B.bGH.prototype={
$1(d){return d.m2()},
$S:286};(function installTearOffs(){var x=a._static_1
x(B,"czS","cWS",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.iB,A.E)
w(A.bB,[B.aZm,B.aZn,B.aZo,B.aZp,B.aZq,B.aZr,B.aZl,B.aZs,B.aZt,B.bqi,B.bGH])
w(A.i4,[B.fU,B.hi])})()
A.bl(b.typeUniverse,JSON.parse('{"fU":{"i4":[]},"hi":{"i4":[]}}'))
var y={e:A.y("hg"),g:A.y("e"),b:A.y("@"),f:A.y("~")};(function lazyInitializers(){var x=a.lazyFinal
x($,"dgv","LZ",()=>$.hx().gmP(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_279",e:"endPart",h:b})})($__dart_deferred_initializers__,"mxbbVjWLa0uGHRsjdHdqZgEFBP4=");