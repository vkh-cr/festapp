((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_271",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
cjF(d){var x=J.a2(d)
return new B.io(x.i(d,"x"),x.i(d,"y"),x.i(d,"id"),x.i(d,"group"),x.i(d,"order_product_ticket"),x.i(d,"type"),x.i(d,"state"),x.i(d,"title"),null,x.i(d,"product"),null)},
io:function io(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aYc:function aYc(d){this.a=d},
aYd:function aYd(d){this.a=d},
aYe:function aYe(d){this.a=d},
aYf:function aYf(){},
aYg:function aYg(d){this.a=d},
aYh:function aYh(d){this.a=d},
aYb:function aYb(d){this.a=d},
aYi:function aYi(){},
aYj:function aYj(d){this.a=d},
boH(d){var x=null
switch(d){case"ordered":return A.w("Ordered",x)
case"paid":return A.w("Paid",x)
case"sent":return A.w("Sent",x)
case"used":return A.w("Used",x)
case"storno":return A.w("Storno",x)
default:return"???"}},
cTp(d){return d+";"+B.boH(d)},
cwq(d,e,f,g,h,i,j,k,l,m){return new B.fS(g,d,m,k,l,f,i,j,e,h)},
cwr(d){var x="created_at",w="updated_at",v=J.a2(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.fG(v.i(d,x)):null,s=v.i(d,w)!=null?A.fG(v.i(d,w)):null,r=v.i(d,"price")!=null?A.nH(J.au(v.i(d,"price"))):null,q=v.i(d,"state"),p=v.i(d,"data"),o=v.i(d,"occasion"),n=v.i(d,"payment_info")
return B.cwq(t,v.i(d,"currency_code"),p,u,v.i(d,"note_hidden"),o,n,r,q,s)},
fS:function fS(d,e,f,g,h,i,j,k,l,m){var _=this
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
boI:function boI(){},
czc(d,e,f,g,h,i,j,k){return new B.hb(e,d,j,i,f,g)},
czd(d){var x="created_at",w="updated_at",v=J.a2(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.fG(v.i(d,x)):null,s=v.i(d,w)!=null?A.fG(v.i(d,w)):null,r=v.i(d,"ticket_symbol"),q=v.i(d,"state"),p=v.i(d,"occasion")
return B.czc(t,u,v.i(d,"note"),v.i(d,"note_hidden"),p,q,r,s)},
hb:function hb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bEl:function bEl(){},
b3e(d){var x=0,w=A.l(y.f),v,u
var $async$b3e=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.c($.Ab().e3("delete_order",A.y(["order_id",d.a],y.g,v),v),$async$b3e)
case 2:u=f
v=J.a2(u)
if(!J.m(v.i(u,"code"),200))throw A.f(A.cA("Deleting order failed: "+A.o(v.i(u,"code"))+": "+A.o(v.i(u,"message"))))
return A.j(null,w)}})
return A.k($async$b3e,w)},
b3u(d,e){var x=0,w=A.l(y.f),v,u,t
var $async$b3u=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.Ab().e3("update_order_note_hidden",A.y(["order_id",d,"new_note_hidden",e],y.g,v),v),$async$b3u)
case 2:if(!u.m(t.u(g,"code"),200))throw A.f(A.cA("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$b3u,w)},
b3K(d,e){var x=0,w=A.l(y.f),v,u,t
var $async$b3K=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.Lz().e3("update_ticket_note_hidden",A.y(["ticket_id",d,"new_note_hidden",e],y.g,v),v),$async$b3K)
case 2:if(!u.m(t.u(g,"code"),200))throw A.f(A.cA("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$b3K,w)}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[76],B)
C=c[94]
B.io.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
c6(){var x,w,v=this,u=A.H(y.g,y.b)
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
bry(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.e7(k,new B.aYc(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.e7(k,new B.aYd(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.X(k)
t=u.h("dj<1,r?>")
t=A.J(new A.dj(new A.ai(k,new B.aYe(w),u.h("ai<1>")),new B.aYf(),t),!0,t.h("v.E"))
v=t}}if(v==null)s=l
else{k=A.X(v)
u=k.h("dj<1,e>")
u=new A.ai(new A.dj(new A.ai(v,new B.aYg(m),k.h("ai<1>")),new B.aYh(m),u),new B.aYi(),u.h("ai<v.E>")).c5(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:D.b.lQ(k,new B.aYj(x))}k=r==null
q=k?l:r.aEK()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a00()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+A.o(k):""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.o(k)+" "+u+"\n"+A.w("Ticket",l)+" "+A.o(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.w("Price",l)
n=m.x
n=n==null?l:n.r
return A.o(k)+" "+u+"\n"+t+": "+C.o5(d,n==null?0:n,l,0)},
gbp(d){return this.c},
gdv(d){return this.w},
sGz(d){return this.as=d}}
B.fS.prototype={
c6(){var x,w=this,v=w.b
v=v==null?null:v.i7()
x=w.c
x=x==null?null:x.i7()
return A.y(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.g,y.b)},
qi(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k==null,i=A.aT(j?0:k)
k=A.aT(j?0:k)
j=m.d
j=A.aT(j!=null?C.o5(d,j,l,0):"")
x=m.e
if(x==null)x="ordered"
x=A.aT(x+";"+B.boH(x))
w=m.ax
if((w==null?l:w.e)!=null){w=w.e
w.toString
w=C.o5(d,w,l,0)}else w=""
w=A.aT(w)
v=m.ax
if((v==null?l:v.f)!=null){v=v.f
v.toString
v=C.o5(d,v,l,0)}else v=""
v=A.aT(v)
u=m.ax
if((u==null?l:u.r)!=null){u=u.r
u.toString
u=C.o5(d,u,l,0)}else u=""
u=A.aT(u)
t=m.ax
s=t==null
r=s?l:t.d
r=A.aT(r==null?0:r)
if((s?l:t.w)!=null){t=A.j4("yyyy-MM-dd",l)
s=m.ax.w
s.toString
s=t.e9(s)
t=s}else t=""
t=A.aT(t)
s=A.aT(m.a00())
q=m.f
q=A.aT(q==null?l:J.u(q,"email"))
p=m.at
p=A.aT(p!=null?new A.Q(p,new B.boI(),A.X(p).h("Q<1,e>")).c5(0," | "):"")
o=A.aT(m.aEK())
n=m.z
return A.lh(A.y(["id",i,"order_symbol",k,"price",j,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"data",s,"email",q,"ticket_products",p,"note",o,"note_hidden",A.aT(n==null?"":n),"orders_history",A.aT(""),"transactions",A.aT("")],y.g,y.e),!1,y.b)},
eR(){var x=0,w=A.l(y.f),v=this
var $async$eR=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.c(B.b3e(v),$async$eR)
case 2:return A.j(null,w)}})
return A.k($async$eR,w)},
fh(){var x=0,w=A.l(y.f),v=this,u,t
var $async$fh=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.c(B.b3u(t,u),$async$fh)
case 2:return A.j(null,w)}})
return A.k($async$fh,w)},
m_(){return"Order #"+A.o(this.a)},
a00(){var x=this.f,w=x==null,v=A.o(w?null:J.u(x,"name"))
return v+" "+A.o(w?null:J.u(x,"surname"))},
aEK(){var x=this.f
x=x==null?null:J.u(x,"note")
return A.o(x==null?"":x)},
gbp(d){return this.a}}
B.hb.prototype={
c6(){return A.y(["state",this.e,"note_hidden",this.w],y.g,y.b)},
qi(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a
l=A.aT(l==null?0:l)
x=n.b
x=A.aT(x!=null?A.j4("yyyy-MM-dd",m).e9(x):"")
w=n.d
w=A.aT(w==null?"":w)
v=n.e
if(v==null)v="ordered"
v=A.aT(v+";"+B.boH(v))
u=n.r
u=A.aT(u==null?"":u)
t=n.w
t=A.aT(t==null?"":t)
s=n.Q
r=s!=null
q=A.aT(r?"Order #"+A.o(s.a):"")
s=A.aT(r?s.a00():"")
r=n.z
r=A.aT(r!=null?new A.Q(r,new B.bEl(),A.X(r).h("Q<1,e>")).c5(0," | "):"")
p=n.y
if(p!=null){o=p.z
o=o==null?m:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aT(p)
o=n.x
return A.lh(A.y(["id",l,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"spot",p,"price",A.aT(o!=null?C.o5(d,o,m,0):"")],y.g,y.e),!1,y.b)},
eR(){var x=0,w=A.l(y.f)
var $async$eR=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:return A.j(null,w)}})
return A.k($async$eR,w)},
fh(){var x=0,w=A.l(y.f),v=this,u,t
var $async$fh=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.c(B.b3K(t,u),$async$fh)
case 2:return A.j(null,w)}})
return A.k($async$fh,w)},
m_(){var x=this.d
return x==null?J.au(this.a):x},
gbp(d){return this.a}}
var z=a.updateTypes(["x(mK)","x(hb)","r?(mK)","x(fS)","e(e)"])
B.aYc.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.aYd.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.aYe.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.aYf.prototype={
$1(d){return d.d},
$S:z+2}
B.aYg.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:348}
B.aYh.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:D.b.lQ(w,new B.aYb(d))}w=x==null?null:x.d
return w==null?"":w},
$S:953}
B.aYb.prototype={
$1(d){return d.a==this.a},
$S:155}
B.aYi.prototype={
$1(d){return d.length!==0},
$S:16}
B.aYj.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.boI.prototype={
$1(d){return d.m_()},
$S:349}
B.bEl.prototype={
$1(d){return d.m_()},
$S:349};(function installTearOffs(){var x=a._static_1
x(B,"cwt","cTp",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.io,A.E)
w(A.bG,[B.aYc,B.aYd,B.aYe,B.aYf,B.aYg,B.aYh,B.aYb,B.aYi,B.aYj,B.boI,B.bEl])
w(A.iO,[B.fS,B.hb])})()
A.bl(b.typeUniverse,JSON.parse('{"fS":{"iO":[]},"hb":{"iO":[]}}'))
var y={e:A.z("fY"),g:A.z("e"),b:A.z("@"),f:A.z("~")};(function lazyInitializers(){var x=a.lazyFinal
x($,"dcG","Lz",()=>$.hk().gmN(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_271",e:"endPart",h:b})})($__dart_deferred_initializers__,"p2i9HprVNe7DlwSHY+ouX/l3e/Y=");