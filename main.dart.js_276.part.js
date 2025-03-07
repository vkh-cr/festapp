((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_276",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
cml(d){var x=J.a2(d)
return new B.iy(x.i(d,"x"),x.i(d,"y"),x.i(d,"id"),x.i(d,"group"),x.i(d,"order_product_ticket"),x.i(d,"type"),x.i(d,"state"),x.i(d,"title"),null,x.i(d,"product"),null)},
iy:function iy(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bq7(d){var x=null
switch(d){case"ordered":return A.u("Ordered",x)
case"paid":return A.u("Paid",x)
case"sent":return A.u("Sent",x)
case"used":return A.u("Used",x)
case"storno":return A.u("Storno",x)
default:return"???"}},
cWf(d){return d+";"+B.bq7(d)},
cz9(d,e,f,g,h,i,j,k,l,m){return new B.fV(g,d,m,k,l,f,i,j,e,h)},
cza(d){var x="created_at",w="updated_at",v=J.a2(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.fj(v.i(d,x)):null,s=v.i(d,w)!=null?A.fj(v.i(d,w)):null,r=v.i(d,"price")!=null?A.nP(J.as(v.i(d,"price"))):null,q=v.i(d,"state"),p=v.i(d,"data"),o=v.i(d,"occasion"),n=v.i(d,"payment_info")
return B.cz9(t,v.i(d,"currency_code"),p,u,v.i(d,"note_hidden"),o,n,r,q,s)},
fV:function fV(d,e,f,g,h,i,j,k,l,m){var _=this
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
bq8:function bq8(){},
cBY(d,e,f,g,h,i,j,k){return new B.hj(e,d,j,i,f,g)},
cBZ(d){var x="created_at",w="updated_at",v=J.a2(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.fj(v.i(d,x)):null,s=v.i(d,w)!=null?A.fj(v.i(d,w)):null,r=v.i(d,"ticket_symbol"),q=v.i(d,"state"),p=v.i(d,"occasion")
return B.cBY(t,u,v.i(d,"note"),v.i(d,"note_hidden"),p,q,r,s)},
hj:function hj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bGI:function bGI(){},
b4m(d){var x=0,w=A.k(y.f),v,u
var $async$b4m=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.c($.Am().e2("delete_order",A.y(["order_id",d.a],y.g,v),v),$async$b4m)
case 2:u=f
v=J.a2(u)
if(!J.m(v.i(u,"code"),200))throw A.l(A.cD("Deleting order failed: "+A.o(v.i(u,"code"))+": "+A.o(v.i(u,"message"))))
return A.i(null,w)}})
return A.j($async$b4m,w)},
b4C(d,e){var x=0,w=A.k(y.f),v,u,t
var $async$b4C=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.Am().e2("update_order_note_hidden",A.y(["order_id",d,"new_note_hidden",e],y.g,v),v),$async$b4C)
case 2:if(!u.m(t.v(g,"code"),200))throw A.l(A.cD("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b4C,w)},
b4S(d,e){var x=0,w=A.k(y.f),v,u,t
var $async$b4S=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.LS().e2("update_ticket_note_hidden",A.y(["ticket_id",d,"new_note_hidden",e],y.g,v),v),$async$b4S)
case 2:if(!u.m(t.v(g,"code"),200))throw A.l(A.cD("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b4S,w)}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[78],B)
C=c[94]
B.iy.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
c0(){var x,w,v=this,u=A.H(y.g,y.b)
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
bs0(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.ed(k,new B.aZa(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.ed(k,new B.aZb(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.X(k)
t=u.h("dr<1,r?>")
t=A.I(new A.dr(new A.af(k,new B.aZc(w),u.h("af<1>")),new B.aZd(),t),!0,t.h("w.E"))
v=t}}if(v==null)s=l
else{k=A.X(v)
u=k.h("dr<1,e>")
u=new A.af(new A.dr(new A.af(v,new B.aZe(m),k.h("af<1>")),new B.aZf(m),u),new B.aZg(),u.h("af<w.E>")).c4(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:D.b.lT(k,new B.aZh(x))}k=r==null
q=k?l:r.aF9()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a06()+q:""
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
return A.o(k)+" "+u+"\n"+t+": "+C.od(d,n==null?0:n,l,0)},
gbo(d){return this.c},
gds(d){return this.w},
sGz(d){return this.as=d}}
B.fV.prototype={
c0(){var x,w=this,v=w.b
v=v==null?null:v.hK()
x=w.c
x=x==null?null:x.hK()
return A.y(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.g,y.b)},
qm(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k==null,i=A.aT(j?0:k)
k=A.aT(j?0:k)
j=m.d
j=A.aT(j!=null?C.od(d,j,l,0):"")
x=m.e
if(x==null)x="ordered"
x=A.aT(x+";"+B.bq7(x))
w=m.ax
if((w==null?l:w.e)!=null){w=w.e
w.toString
w=C.od(d,w,l,0)}else w=""
w=A.aT(w)
v=m.ax
if((v==null?l:v.f)!=null){v=v.f
v.toString
v=C.od(d,v,l,0)}else v=""
v=A.aT(v)
u=m.ax
if((u==null?l:u.r)!=null){u=u.r
u.toString
u=C.od(d,u,l,0)}else u=""
u=A.aT(u)
t=m.ax
s=t==null
r=s?l:t.d
r=A.aT(r==null?0:r)
if((s?l:t.w)!=null){t=A.iA("yyyy-MM-dd",l)
s=m.ax.w
s.toString
s=t.e0(s)
t=s}else t=""
t=A.aT(t)
s=A.aT(m.a06())
q=m.f
q=A.aT(q==null?l:J.v(q,"email"))
p=m.at
p=A.aT(p!=null?new A.O(p,new B.bq8(),A.X(p).h("O<1,e>")).c4(0," | "):"")
o=A.aT(m.aF9())
n=m.z
return A.lo(A.y(["id",i,"order_symbol",k,"price",j,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"data",s,"email",q,"ticket_products",p,"note",o,"note_hidden",A.aT(n==null?"":n),"orders_history",A.aT(""),"transactions",A.aT("")],y.g,y.e),!1,y.b)},
eU(){var x=0,w=A.k(y.f),v=this
var $async$eU=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(B.b4m(v),$async$eU)
case 2:return A.i(null,w)}})
return A.j($async$eU,w)},
fj(){var x=0,w=A.k(y.f),v=this,u,t
var $async$fj=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.c(B.b4C(t,u),$async$fj)
case 2:return A.i(null,w)}})
return A.j($async$fj,w)},
m1(){return"Order #"+A.o(this.a)},
a06(){var x=this.f,w=x==null,v=A.o(w?null:J.v(x,"name"))
return v+" "+A.o(w?null:J.v(x,"surname"))},
aF9(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.o(x==null?"":x)},
gbo(d){return this.a}}
B.hj.prototype={
c0(){return A.y(["state",this.e,"note_hidden",this.w],y.g,y.b)},
qm(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a
l=A.aT(l==null?0:l)
x=n.b
x=A.aT(x!=null?A.iA("yyyy-MM-dd",m).e0(x):"")
w=n.d
w=A.aT(w==null?"":w)
v=n.e
if(v==null)v="ordered"
v=A.aT(v+";"+B.bq7(v))
u=n.r
u=A.aT(u==null?"":u)
t=n.w
t=A.aT(t==null?"":t)
s=n.Q
r=s!=null
q=A.aT(r?"Order #"+A.o(s.a):"")
s=A.aT(r?s.a06():"")
r=n.z
r=A.aT(r!=null?new A.O(r,new B.bGI(),A.X(r).h("O<1,e>")).c4(0," | "):"")
p=n.y
if(p!=null){o=p.z
o=o==null?m:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aT(p)
o=n.x
return A.lo(A.y(["id",l,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"spot",p,"price",A.aT(o!=null?C.od(d,o,m,0):"")],y.g,y.e),!1,y.b)},
eU(){var x=0,w=A.k(y.f)
var $async$eU=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:return A.i(null,w)}})
return A.j($async$eU,w)},
fj(){var x=0,w=A.k(y.f),v=this,u,t
var $async$fj=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.c(B.b4S(t,u),$async$fj)
case 2:return A.i(null,w)}})
return A.j($async$fj,w)},
m1(){var x=this.d
return x==null?J.as(this.a):x},
gbo(d){return this.a}}
var z=a.updateTypes(["x(mR)","x(hj)","r?(mR)","x(fV)","e(e)"])
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
$S:322}
B.aZf.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:D.b.lT(w,new B.aZ9(d))}w=x==null?null:x.d
return w==null?"":w},
$S:971}
B.aZ9.prototype={
$1(d){return d.a==this.a},
$S:123}
B.aZg.prototype={
$1(d){return d.length!==0},
$S:13}
B.aZh.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bq8.prototype={
$1(d){return d.m1()},
$S:316}
B.bGI.prototype={
$1(d){return d.m1()},
$S:316};(function installTearOffs(){var x=a._static_1
x(B,"czb","cWf",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.iy,A.E)
w(A.bE,[B.aZa,B.aZb,B.aZc,B.aZd,B.aZe,B.aZf,B.aZ9,B.aZg,B.aZh,B.bq8,B.bGI])
w(A.i2,[B.fV,B.hj])})()
A.bk(b.typeUniverse,JSON.parse('{"fV":{"i2":[]},"hj":{"i2":[]}}'))
var y={e:A.z("hh"),g:A.z("e"),b:A.z("@"),f:A.z("~")};(function lazyInitializers(){var x=a.lazyFinal
x($,"dfS","LS",()=>$.hv().gmP(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_276",e:"endPart",h:b})})($__dart_deferred_initializers__,"BsH9gAp8fAgB0qGpX8nWmj/WwZI=");