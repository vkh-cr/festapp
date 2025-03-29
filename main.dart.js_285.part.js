((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_285",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
cmK(d){var x=J.a2(d)
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
aZq:function aZq(d){this.a=d},
aZr:function aZr(d){this.a=d},
aZs:function aZs(d){this.a=d},
aZt:function aZt(){},
aZu:function aZu(d){this.a=d},
aZv:function aZv(d){this.a=d},
aZp:function aZp(d){this.a=d},
aZw:function aZw(){},
aZx:function aZx(d){this.a=d},
bq4(d){var x=null
switch(d){case"ordered":case"expired":return A.r("Ordered",x)
case"paid":return A.r("Paid",x)
case"sent":return A.r("Sent",x)
case"used":return A.r("Used",x)
case"storno":return A.r("Storno",x)
default:return"???"}},
cWE(d){return d+";"+B.bq4(d)},
czK(d,e,f,g,h,i,j,k,l,m){return new B.fU(g,d,m,k,l,f,i,j,e,h)},
czL(d){var x="created_at",w="updated_at",v=J.a2(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.f9(v.i(d,x)):null,s=v.i(d,w)!=null?A.f9(v.i(d,w)):null,r=v.i(d,"price")!=null?A.lt(J.ap(v.i(d,"price"))):null,q=v.i(d,"state"),p=v.i(d,"data"),o=v.i(d,"occasion"),n=v.i(d,"payment_info")
return B.czK(t,v.i(d,"currency_code"),p,u,v.i(d,"note_hidden"),o,n,r,q,s)},
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
bq5:function bq5(){},
cCE(d,e,f,g,h,i,j,k){return new B.hk(e,d,j,i,f,g)},
cCF(d){var x="created_at",w="updated_at",v=J.a2(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.f9(v.i(d,x)):null,s=v.i(d,w)!=null?A.f9(v.i(d,w)):null,r=v.i(d,"ticket_symbol"),q=v.i(d,"state"),p=v.i(d,"occasion")
return B.cCE(t,u,v.i(d,"note"),v.i(d,"note_hidden"),p,q,r,s)},
hk:function hk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bGq:function bGq(){},
b4z(d){var x=0,w=A.k(y.f),v,u
var $async$b4z=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.c($.Ah().e1("delete_order",A.y(["order_id",d.a],y.g,v),v),$async$b4z)
case 2:u=f
v=J.a2(u)
if(!J.m(v.i(u,"code"),200))throw A.l(A.cT("Deleting order failed: "+A.o(v.i(u,"code"))+": "+A.o(v.i(u,"message"))))
return A.i(null,w)}})
return A.j($async$b4z,w)},
b4P(d,e){var x=0,w=A.k(y.f),v,u,t
var $async$b4P=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.Ah().e1("update_order_note_hidden",A.y(["order_id",d,"new_note_hidden",e],y.g,v),v),$async$b4P)
case 2:if(!u.m(t.v(g,"code"),200))throw A.l(A.cT("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b4P,w)},
b54(d,e){var x=0,w=A.k(y.f),v,u,t
var $async$b54=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.LV().e1("update_ticket_note_hidden",A.y(["ticket_id",d,"new_note_hidden",e],y.g,v),v),$async$b54)
case 2:if(!u.m(t.v(g,"code"),200))throw A.l(A.cT("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b54,w)}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[78],B)
C=c[94]
B.iA.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
bz(){var x,w,v=this,u=A.I(y.g,y.b)
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
brr(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.ed(k,new B.aZq(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.ed(k,new B.aZr(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.X(k)
t=u.h("dM<1,t?>")
t=A.H(new A.dM(new A.af(k,new B.aZs(w),u.h("af<1>")),new B.aZt(),t),!0,t.h("w.E"))
v=t}}if(v==null)s=l
else{k=A.X(v)
u=k.h("dM<1,e>")
u=new A.af(new A.dM(new A.af(v,new B.aZu(m),k.h("af<1>")),new B.aZv(m),u),new B.aZw(),u.h("af<w.E>")).cb(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:D.b.lX(k,new B.aZx(x))}k=r==null
q=k?l:r.aEV()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a00()+q:""
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
return A.o(k)+" "+u+"\n"+t+": "+C.oc(d,n==null?0:n,l,0)},
gbn(d){return this.c},
gdq(d){return this.w},
sGv(d){return this.as=d}}
B.fU.prototype={
bz(){var x,w=this,v=w.b
v=v==null?null:v.hJ()
x=w.c
x=x==null?null:x.hJ()
return A.y(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.g,y.b)},
qk(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j="yyyy-MM-dd",i=l.a,h=i==null,g=A.aP(h?0:i)
i=A.aP(h?0:i)
h=l.d
h=A.aP(h!=null?C.oc(d,h,k,0):"")
x=l.e
if(x==null)x="ordered"
x=A.aP(x+";"+B.bq4(x))
w=l.ax
if((w==null?k:w.e)!=null){w=w.e
w.toString
w=C.oc(d,w,k,0)}else w=""
w=A.aP(w)
v=l.ax
if((v==null?k:v.f)!=null){v=v.f
v.toString
v=C.oc(d,v,k,0)}else v=""
v=A.aP(v)
u=l.ax
if((u==null?k:u.r)!=null){u=u.r
u.toString
u=C.oc(d,u,k,0)}else u=""
u=A.aP(u)
t=l.ax
s=t==null
r=s?k:t.d
r=A.aP(r==null?0:r)
if((s?k:t.w)!=null){t=A.ie(j,k)
s=l.ax.w
s.toString
s=t.dT(s)
t=s}else t=""
t=A.aP(t)
s=l.b
s=A.aP(s!=null?A.ie(j,k).dT(s):"")
q=A.aP(l.a00())
p=l.f
p=A.aP(p==null?k:J.v(p,"email"))
o=l.at
o=A.aP(o!=null?new A.O(o,new B.bq5(),A.X(o).h("O<1,e>")).cb(0," | "):"")
n=A.aP(l.aEV())
m=l.z
return A.lr(A.y(["id",g,"order_symbol",i,"price",h,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"created_at",s,"data",q,"email",p,"ticket_products",o,"note",n,"note_hidden",A.aP(m==null?"":m),"orders_history",A.aP(""),"transactions",A.aP("")],y.g,y.e),!1,y.b)},
eT(){var x=0,w=A.k(y.f),v=this
var $async$eT=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(B.b4z(v),$async$eT)
case 2:return A.i(null,w)}})
return A.j($async$eT,w)},
fk(){var x=0,w=A.k(y.f),v=this,u,t
var $async$fk=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.c(B.b4P(t,u),$async$fk)
case 2:return A.i(null,w)}})
return A.j($async$fk,w)},
lF(){return"Order #"+A.o(this.a)},
a00(){var x=this.f,w=x==null,v=A.o(w?null:J.v(x,"name"))
return v+" "+A.o(w?null:J.v(x,"surname"))},
aEV(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.o(x==null?"":x)},
gbn(d){return this.a}}
B.hk.prototype={
bz(){return A.y(["state",this.e,"note_hidden",this.w],y.g,y.b)},
qk(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a
l=A.aP(l==null?0:l)
x=n.b
x=A.aP(x!=null?A.ie("yyyy-MM-dd",m).dT(x):"")
w=n.d
w=A.aP(w==null?"":w)
v=n.e
if(v==null)v="ordered"
v=A.aP(v+";"+B.bq4(v))
u=n.r
u=A.aP(u==null?"":u)
t=n.w
t=A.aP(t==null?"":t)
s=n.Q
r=s!=null
q=A.aP(r?"Order #"+A.o(s.a):"")
s=A.aP(r?s.a00():"")
r=n.z
r=A.aP(r!=null?new A.O(r,new B.bGq(),A.X(r).h("O<1,e>")).cb(0," | "):"")
p=n.y
if(p!=null){o=p.z
o=o==null?m:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aP(p)
o=n.x
return A.lr(A.y(["id",l,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"spot",p,"price",A.aP(o!=null?C.oc(d,o,m,0):"")],y.g,y.e),!1,y.b)},
eT(){var x=0,w=A.k(y.f)
var $async$eT=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:return A.i(null,w)}})
return A.j($async$eT,w)},
fk(){var x=0,w=A.k(y.f),v=this,u,t
var $async$fk=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.c(B.b54(t,u),$async$fk)
case 2:return A.i(null,w)}})
return A.j($async$fk,w)},
lF(){var x=this.d
return x==null?J.ap(this.a):x},
gbn(d){return this.a}}
var z=a.updateTypes(["x(mS)","x(hk)","t?(mS)","x(fU)","e(e)"])
B.aZq.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.aZr.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.aZs.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.aZt.prototype={
$1(d){return d.d},
$S:z+2}
B.aZu.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:353}
B.aZv.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:D.b.lX(w,new B.aZp(d))}w=x==null?null:x.d
return w==null?"":w},
$S:961}
B.aZp.prototype={
$1(d){return d.a==this.a},
$S:126}
B.aZw.prototype={
$1(d){return d.length!==0},
$S:18}
B.aZx.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bq5.prototype={
$1(d){return d.lF()},
$S:195}
B.bGq.prototype={
$1(d){return d.lF()},
$S:195};(function installTearOffs(){var x=a._static_1
x(B,"czM","cWE",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.iA,A.E)
w(A.bC,[B.aZq,B.aZr,B.aZs,B.aZt,B.aZu,B.aZv,B.aZp,B.aZw,B.aZx,B.bq5,B.bGq])
w(A.i1,[B.fU,B.hk])})()
A.bl(b.typeUniverse,JSON.parse('{"fU":{"i1":[]},"hk":{"i1":[]}}'))
var y={e:A.z("fV"),g:A.z("e"),b:A.z("@"),f:A.z("~")};(function lazyInitializers(){var x=a.lazyFinal
x($,"dg1","LV",()=>$.hB().gmR(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_285",e:"endPart",h:b})})($__dart_deferred_initializers__,"EwF0TKHZpaoMOeVDHZVDGha0/qY=");