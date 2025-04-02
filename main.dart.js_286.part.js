((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_286",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
cnK(d){var x=J.a2(d)
return new B.iD(x.i(d,"x"),x.i(d,"y"),x.i(d,"id"),x.i(d,"group"),x.i(d,"order_product_ticket"),x.i(d,"type"),x.i(d,"state"),x.i(d,"title"),null,x.i(d,"product"),null)},
iD:function iD(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aZv:function aZv(d){this.a=d},
aZw:function aZw(d){this.a=d},
aZx:function aZx(d){this.a=d},
aZy:function aZy(){},
aZz:function aZz(d){this.a=d},
aZA:function aZA(d){this.a=d},
aZu:function aZu(d){this.a=d},
aZB:function aZB(){},
aZC:function aZC(d){this.a=d},
bq9(d){var x=null
switch(d){case"ordered":case"expired":return A.r("Ordered",x)
case"paid":return A.r("Paid",x)
case"sent":return A.r("Sent",x)
case"used":return A.r("Used",x)
case"storno":return A.r("Storno",x)
default:return"???"}},
cXJ(d){return d+";"+B.bq9(d)},
cAM(d,e,f,g,h,i,j,k,l,m){return new B.fV(g,d,m,k,l,f,i,j,e,h)},
cAN(d){var x="created_at",w="updated_at",v=J.a2(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.f7(v.i(d,x)):null,s=v.i(d,w)!=null?A.f7(v.i(d,w)):null,r=v.i(d,"price")!=null?A.ls(J.ap(v.i(d,"price"))):null,q=v.i(d,"state"),p=v.i(d,"data"),o=v.i(d,"occasion"),n=v.i(d,"payment_info")
return B.cAM(t,v.i(d,"currency_code"),p,u,v.i(d,"note_hidden"),o,n,r,q,s)},
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
bqa:function bqa(){},
cDo(d,e,f,g,h,i,j,k){return new B.hm(e,d,j,i,f,g)},
cDp(d){var x="created_at",w="updated_at",v=J.a2(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.f7(v.i(d,x)):null,s=v.i(d,w)!=null?A.f7(v.i(d,w)):null,r=v.i(d,"ticket_symbol"),q=v.i(d,"state"),p=v.i(d,"occasion")
return B.cDo(t,u,v.i(d,"note"),v.i(d,"note_hidden"),p,q,r,s)},
hm:function hm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bEL:function bEL(){},
b4E(d){var x=0,w=A.k(y.f),v,u
var $async$b4E=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.c($.Aj().e1("delete_order",A.y(["order_id",d.a],y.g,v),v),$async$b4E)
case 2:u=f
v=J.a2(u)
if(!J.m(v.i(u,"code"),200))throw A.l(A.cT("Deleting order failed: "+A.o(v.i(u,"code"))+": "+A.o(v.i(u,"message"))))
return A.i(null,w)}})
return A.j($async$b4E,w)},
b4U(d,e){var x=0,w=A.k(y.f),v,u,t
var $async$b4U=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.Aj().e1("update_order_note_hidden",A.y(["order_id",d,"new_note_hidden",e],y.g,v),v),$async$b4U)
case 2:if(!u.m(t.v(g,"code"),200))throw A.l(A.cT("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b4U,w)},
b59(d,e){var x=0,w=A.k(y.f),v,u,t
var $async$b59=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.M3().e1("update_ticket_note_hidden",A.y(["ticket_id",d,"new_note_hidden",e],y.g,v),v),$async$b59)
case 2:if(!u.m(t.v(g,"code"),200))throw A.l(A.cT("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b59,w)}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[77],B)
C=c[93]
B.iD.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
bG(){var x,w,v=this,u=A.I(y.g,y.b)
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
brO(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.ee(k,new B.aZv(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.ee(k,new B.aZw(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.X(k)
t=u.h("dN<1,t?>")
t=A.H(new A.dN(new A.af(k,new B.aZx(w),u.h("af<1>")),new B.aZy(),t),!0,t.h("w.E"))
v=t}}if(v==null)s=l
else{k=A.X(v)
u=k.h("dN<1,e>")
u=new A.af(new A.dN(new A.af(v,new B.aZz(m),k.h("af<1>")),new B.aZA(m),u),new B.aZB(),u.h("af<w.E>")).cb(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:D.b.lZ(k,new B.aZC(x))}k=r==null
q=k?l:r.aF8()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a02()+q:""
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
gbo(d){return this.c},
gdr(d){return this.w},
sGv(d){return this.as=d}}
B.fV.prototype={
bG(){var x,w=this,v=w.b
v=v==null?null:v.hK()
x=w.c
x=x==null?null:x.hK()
return A.y(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.g,y.b)},
qn(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j="yyyy-MM-dd",i=l.a,h=i==null,g=A.aO(h?0:i)
i=A.aO(h?0:i)
h=l.d
h=A.aO(h!=null?C.oc(d,h,k,0):"")
x=l.e
if(x==null)x="ordered"
x=A.aO(x+";"+B.bq9(x))
w=l.ax
if((w==null?k:w.e)!=null){w=w.e
w.toString
w=C.oc(d,w,k,0)}else w=""
w=A.aO(w)
v=l.ax
if((v==null?k:v.f)!=null){v=v.f
v.toString
v=C.oc(d,v,k,0)}else v=""
v=A.aO(v)
u=l.ax
if((u==null?k:u.r)!=null){u=u.r
u.toString
u=C.oc(d,u,k,0)}else u=""
u=A.aO(u)
t=l.ax
s=t==null
r=s?k:t.d
r=A.aO(r==null?0:r)
if((s?k:t.w)!=null){t=A.ih(j,k)
s=l.ax.w
s.toString
s=t.dK(s)
t=s}else t=""
t=A.aO(t)
s=l.b
s=A.aO(s!=null?A.ih(j,k).dK(s):"")
q=A.aO(l.a02())
p=l.f
p=A.aO(p==null?k:J.v(p,"email"))
o=l.at
o=A.aO(o!=null?new A.O(o,new B.bqa(),A.X(o).h("O<1,e>")).cb(0," | "):"")
n=A.aO(l.aF8())
m=l.z
return A.lz(A.y(["id",g,"order_symbol",i,"price",h,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"created_at",s,"data",q,"email",p,"ticket_products",o,"note",n,"note_hidden",A.aO(m==null?"":m),"orders_history",A.aO(""),"transactions",A.aO("")],y.g,y.d),!1,y.b)},
eU(){var x=0,w=A.k(y.f),v=this
var $async$eU=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(B.b4E(v),$async$eU)
case 2:return A.i(null,w)}})
return A.j($async$eU,w)},
fk(){var x=0,w=A.k(y.f),v=this,u,t
var $async$fk=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.c(B.b4U(t,u),$async$fk)
case 2:return A.i(null,w)}})
return A.j($async$fk,w)},
lH(){return"Order #"+A.o(this.a)},
a02(){var x=this.f,w=x==null,v=A.o(w?null:J.v(x,"name"))
return v+" "+A.o(w?null:J.v(x,"surname"))},
aF8(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.o(x==null?"":x)},
gbo(d){return this.a}}
B.hm.prototype={
bG(){return A.y(["state",this.e,"note_hidden",this.w],y.g,y.b)},
qn(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a
l=A.aO(l==null?0:l)
x=n.b
x=A.aO(x!=null?A.ih("yyyy-MM-dd",m).dK(x):"")
w=n.d
w=A.aO(w==null?"":w)
v=n.e
if(v==null)v="ordered"
v=A.aO(v+";"+B.bq9(v))
u=n.r
u=A.aO(u==null?"":u)
t=n.w
t=A.aO(t==null?"":t)
s=n.Q
r=s!=null
q=A.aO(r?"Order #"+A.o(s.a):"")
s=A.aO(r?s.a02():"")
r=n.z
r=A.aO(r!=null?new A.O(r,new B.bEL(),A.X(r).h("O<1,e>")).cb(0," | "):"")
p=n.y
if(p!=null){o=p.z
o=o==null?m:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aO(p)
o=n.x
return A.lz(A.y(["id",l,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"spot",p,"price",A.aO(o!=null?C.oc(d,o,m,0):"")],y.g,y.d),!1,y.b)},
eU(){var x=0,w=A.k(y.f)
var $async$eU=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:return A.i(null,w)}})
return A.j($async$eU,w)},
fk(){var x=0,w=A.k(y.f),v=this,u,t
var $async$fk=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.c(B.b59(t,u),$async$fk)
case 2:return A.i(null,w)}})
return A.j($async$fk,w)},
lH(){var x=this.d
return x==null?J.ap(this.a):x},
gbo(d){return this.a}}
var z=a.updateTypes(["x(mT)","x(hm)","t?(mT)","x(fV)","e(e)"])
B.aZv.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.aZw.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.aZx.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.aZy.prototype={
$1(d){return d.d},
$S:z+2}
B.aZz.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:343}
B.aZA.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:D.b.lZ(w,new B.aZu(d))}w=x==null?null:x.d
return w==null?"":w},
$S:955}
B.aZu.prototype={
$1(d){return d.a==this.a},
$S:121}
B.aZB.prototype={
$1(d){return d.length!==0},
$S:19}
B.aZC.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bqa.prototype={
$1(d){return d.lH()},
$S:182}
B.bEL.prototype={
$1(d){return d.lH()},
$S:182};(function installTearOffs(){var x=a._static_1
x(B,"cAO","cXJ",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.iD,A.E)
w(A.bC,[B.aZv,B.aZw,B.aZx,B.aZy,B.aZz,B.aZA,B.aZu,B.aZB,B.aZC,B.bqa,B.bEL])
w(A.i4,[B.fV,B.hm])})()
A.bl(b.typeUniverse,JSON.parse('{"fV":{"i4":[]},"hm":{"i4":[]}}'))
var y={g:A.z("e"),d:A.z("fW"),b:A.z("@"),f:A.z("~")};(function lazyInitializers(){var x=a.lazyFinal
x($,"dha","M3",()=>$.hE().gmS(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_286",e:"endPart",h:b})})($__dart_deferred_initializers__,"JwA9OGleFUPp6NiTQvI5Hq5ShSQ=");