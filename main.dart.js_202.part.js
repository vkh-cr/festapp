((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_202",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cbP(d){var x=J.a1(d)
return new B.iq(x.i(d,"x"),x.i(d,"y"),x.i(d,"id"),x.i(d,"group"),x.i(d,"order_product_ticket"),x.i(d,"type"),x.i(d,"state"),x.i(d,"title"),null,x.i(d,"product"),null)},
iq:function iq(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aVs:function aVs(d){this.a=d},
aVt:function aVt(d){this.a=d},
aVu:function aVu(d){this.a=d},
aVv:function aVv(){},
aVw:function aVw(d){this.a=d},
aVx:function aVx(d){this.a=d},
aVr:function aVr(d){this.a=d},
aVy:function aVy(){},
aVz:function aVz(d){this.a=d},
blf(d){var x=null
switch(d){case"ordered":return A.E("Ordered",x)
case"paid":return A.E("Paid",x)
case"sent":return A.E("Sent",x)
case"used":return A.E("Used",x)
case"storno":return A.E("Storno",x)
default:return"???"}},
cL8(d){return d+";"+B.blf(d)},
coA(d,e,f,g,h,i,j,k,l,m){return new B.hC(g,d,m,k,l,f,i,j,e,h)},
coB(d){var x="created_at",w="updated_at",v=J.a1(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.fq(v.i(d,x)):null,s=v.i(d,w)!=null?A.fq(v.i(d,w)):null,r=v.i(d,"price")!=null?A.os(J.au(v.i(d,"price"))):null,q=v.i(d,"state"),p=v.i(d,"data"),o=v.i(d,"occasion"),n=v.i(d,"payment_info")
return B.coA(t,v.i(d,"currency_code"),p,u,v.i(d,"note_hidden"),o,n,r,q,s)},
hC:function hC(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.ax=_.Q=null},
ceo(d){var x="created_at",w="updated_at",v=J.a1(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.fq(v.i(d,x)):null,s=v.i(d,w)!=null?A.fq(v.i(d,w)):null,r=v.i(d,"title"),q=v.i(d,"is_hidden"),p=v.i(d,"description"),o=v.i(d,"price")!=null?A.os(J.au(v.i(d,"price"))):null
return new B.h6(u,t,s,r,q,p,o,v.i(d,"data"),v.i(d,"product_type"),v.i(d,"occasion"),v.i(d,"type"),v.i(d,"order"))},
h6:function h6(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.Q=o},
crj(d,e,f,g,h,i,j,k){return new B.ih(e,d,j,i,f,g)},
crk(d){var x="created_at",w="updated_at",v=J.a1(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.fq(v.i(d,x)):null,s=v.i(d,w)!=null?A.fq(v.i(d,w)):null,r=v.i(d,"ticket_symbol"),q=v.i(d,"state"),p=v.i(d,"occasion")
return B.crj(t,u,v.i(d,"note"),v.i(d,"note_hidden"),p,q,r,s)},
ih:function ih(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bAc:function bAc(){},
cor(d,e,f){return A.cdP(e,new B.bkt(null),f,d,!0,null)},
bkt:function bkt(d){this.a=d},
b_9(d){var x=0,w=A.l(y.f),v,u
var $async$b_9=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.c($.jr().fZ("delete_order",A.x(["order_id",d.a],y.g,v),v),$async$b_9)
case 2:u=f
v=J.a1(u)
if(!J.m(v.i(u,"code"),200))throw A.f(A.cU("Deleting order failed: "+A.o(v.i(u,"code"))+": "+A.o(v.i(u,"message"))))
return A.j(null,w)}})
return A.k($async$b_9,w)},
b_K(d,e){var x=0,w=A.l(y.f),v,u,t
var $async$b_K=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.jr().fZ("update_ticket_note_hidden",A.x(["ticket_id",d,"new_note_hidden",e],y.g,v),v),$async$b_K)
case 2:if(!u.m(t.t(g,"code"),200))throw A.f(A.cU("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$b_K,w)},
b_J(d,e){var x=0,w=A.l(y.f),v,u,t
var $async$b_J=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.jr().fZ("update_order_note_hidden",A.x(["order_id",d,"new_note_hidden",e],y.g,v),v),$async$b_J)
case 2:if(!u.m(t.t(g,"code"),200))throw A.f(A.cU("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$b_J,w)},
J5(d,e){return B.cor(0,"cs_CZ","K\u010c").el(e)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[79],B)
B.iq.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
c1(){var x,w,v=this,u=A.F(y.g,y.b)
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
bo8(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.dt(k,new B.aVs(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.dt(k,new B.aVt(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.V(k)
t=u.h("d4<1,r?>")
t=A.H(new A.d4(new A.ah(k,new B.aVu(w),u.h("ah<1>")),new B.aVv(),t),!0,t.h("u.E"))
v=t}}if(v==null)s=l
else{k=A.V(v)
u=k.h("d4<1,e>")
u=new A.ah(new A.d4(new A.ah(v,new B.aVw(m),k.h("ah<1>")),new B.aVx(m),u),new B.aVy(),u.h("ah<u.E>")).bY(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:C.b.kx(k,new B.aVz(x))}k=r==null
q=k?l:r.aCA()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.ZH()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+A.o(k):""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.o(k)+" "+u+"\n"+A.E("Ticket",l)+" "+A.o(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.E("Price",l)
n=m.x
n=n==null?l:n.r
return A.o(k)+" "+u+"\n"+t+": "+B.J5(d,n==null?0:n)},
gbS(d){return this.c},
gdP(d){return this.w},
sVF(d){return this.as=d}}
B.hC.prototype={
c1(){var x,w=this,v=w.b
v=v==null?null:v.h5()
x=w.c
x=x==null?null:x.h5()
return A.x(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.g,y.b)},
x3(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=m==null,k=A.bn(l?0:m)
m=A.bn(l?0:m)
l=o.d
l=A.bn(l!=null?B.J5(d,l):"")
x=o.e
if(x==null)x="ordered"
x=A.bn(x+";"+B.blf(x))
w=o.ax
if((w==null?n:w.e)!=null){w=w.e
w.toString
w=B.J5(d,w)}else w=""
w=A.bn(w)
v=o.ax
if((v==null?n:v.f)!=null){v=v.f
v.toString
v=B.J5(d,v)}else v=""
v=A.bn(v)
u=o.ax
if((u==null?n:u.r)!=null){u=u.r
u.toString
u=B.J5(d,u)}else u=""
u=A.bn(u)
t=o.ax
s=t==null
r=s?n:t.d
r=A.bn(r==null?0:r)
if((s?n:t.w)!=null){t=A.jd("yyyy-MM-dd",n)
s=o.ax.w
s.toString
s=t.el(s)
t=s}else t=""
t=A.bn(t)
s=A.bn(o.ZH())
q=A.bn(o.aCA())
p=o.z
return A.nh(A.x(["id",k,"order_symbol",m,"price",l,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"data",s,"note",q,"note_hidden",A.bn(p==null?"":p),"orders_history",A.bn("")],y.g,y.e),!1,y.b)},
fF(){var x=0,w=A.l(y.f),v=this
var $async$fF=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.c(B.b_9(v),$async$fF)
case 2:return A.j(null,w)}})
return A.k($async$fF,w)},
hc(){var x=0,w=A.l(y.f),v=this,u,t
var $async$hc=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.c(B.b_J(t,u),$async$hc)
case 2:return A.j(null,w)}})
return A.k($async$hc,w)},
mc(){return"Order #"+A.o(this.a)},
ZH(){var x=this.f,w=x==null,v=A.o(w?null:J.t(x,"name")),u=A.o(w?null:J.t(x,"surname"))
return v+" "+u+" ("+A.o(w?null:J.t(x,"email"))+")"},
aCA(){var x=this.f
x=x==null?null:J.t(x,"note")
return A.o(x==null?"":x)},
gbS(d){return this.a}}
B.h6.prototype={
c1(){var x,w=this,v=w.b
v=v==null?null:v.h5()
x=w.c
x=x==null?null:x.h5()
return A.x(["id",w.a,"created_at",v,"updated_at",x,"title",w.d,"is_hidden",w.e,"description",w.f,"price",w.r,"data",w.w,"product_type",w.x,"occasion",w.y,"order",w.Q],y.g,y.b)},
mc(){var x=this.d
return x==null?J.au(this.a):x},
gbS(d){return this.a},
gdP(d){return this.d}}
B.ih.prototype={
c1(){return A.x(["state",this.e,"note_hidden",this.w],y.g,y.b)},
x3(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.a
m=A.bn(m==null?0:m)
x=n.b
x=A.bn(x!=null?A.jd("yyyy-MM-dd",null).el(x):"")
w=n.d
w=A.bn(w==null?"":w)
v=n.e
if(v==null)v="ordered"
v=A.bn(v+";"+B.blf(v))
u=n.r
u=A.bn(u==null?"":u)
t=n.w
t=A.bn(t==null?"":t)
s=n.Q
r=s!=null
q=A.bn(r?"Order #"+A.o(s.a):"")
s=A.bn(r?s.ZH():"")
r=n.z
r=A.bn(r!=null?new A.P(r,new B.bAc(),A.V(r).h("P<1,e>")).bY(0," | "):"")
p=n.y
if(p!=null){o=p.z
o=o==null?null:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.bn(p)
o=n.x
return A.nh(A.x(["id",m,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"spot",p,"price",A.bn(o!=null?B.J5(d,o):"")],y.g,y.e),!1,y.b)},
fF(){var x=0,w=A.l(y.f)
var $async$fF=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:return A.j(null,w)}})
return A.k($async$fF,w)},
hc(){var x=0,w=A.l(y.f),v=this,u,t
var $async$hc=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.c(B.b_K(t,u),$async$hc)
case 2:return A.j(null,w)}})
return A.k($async$hc,w)},
mc(){var x=this.d
return x==null?J.au(this.a):x},
gbS(d){return this.a}}
var z=a.updateTypes(["v(qL)","v(ih)","r?(qL)","v(h6)","v(hC)","e(h6)","e(e)"])
B.aVs.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.aVt.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.aVu.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.aVv.prototype={
$1(d){return d.d},
$S:z+2}
B.aVw.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:335}
B.aVx.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:C.b.kx(w,new B.aVr(d))}w=x==null?null:x.d
return w==null?"":w},
$S:922}
B.aVr.prototype={
$1(d){return d.a==this.a},
$S:z+3}
B.aVy.prototype={
$1(d){return d.length!==0},
$S:16}
B.aVz.prototype={
$1(d){return d.a==this.a.c},
$S:z+4}
B.bAc.prototype={
$1(d){return d.mc()},
$S:z+5}
B.bkt.prototype={
$1(d){return d.ax},
$S:267};(function installTearOffs(){var x=a._static_1
x(B,"coD","cL8",6)})();(function inheritance(){var x=a.inheritMany
x(A.B,[B.iq,B.h6])
x(A.bJ,[B.aVs,B.aVt,B.aVu,B.aVv,B.aVw,B.aVx,B.aVr,B.aVy,B.aVz,B.bAc,B.bkt])
x(A.iM,[B.hC,B.ih])})()
A.br(b.typeUniverse,JSON.parse('{"hC":{"iM":[]},"ih":{"iM":[]}}'))
var y={e:A.y("h5"),g:A.y("e"),b:A.y("@"),f:A.y("~")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_202",e:"endPart",h:b})})($__dart_deferred_initializers__,"af/F/CXUsoHEf+GFJNk61G46qM4=");