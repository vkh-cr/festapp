((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_247",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
ciw(d){var x=J.a3(d)
return new B.iF(x.i(d,"x"),x.i(d,"y"),x.i(d,"id"),x.i(d,"group"),x.i(d,"order_product_ticket"),x.i(d,"type"),x.i(d,"state"),x.i(d,"title"),null,x.i(d,"product"),null)},
iF:function iF(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aXM:function aXM(d){this.a=d},
aXN:function aXN(d){this.a=d},
aXO:function aXO(d){this.a=d},
aXP:function aXP(){},
aXQ:function aXQ(d){this.a=d},
aXR:function aXR(d){this.a=d},
aXL:function aXL(d){this.a=d},
aXS:function aXS(){},
aXT:function aXT(d){this.a=d},
bo6(d){var x=null
switch(d){case"ordered":return A.z("Ordered",x)
case"paid":return A.z("Paid",x)
case"sent":return A.z("Sent",x)
case"used":return A.z("Used",x)
case"storno":return A.z("Storno",x)
default:return"???"}},
cS4(d){return d+";"+B.bo6(d)},
cve(d,e,f,g,h,i,j,k,l,m){return new B.hf(g,d,m,k,l,f,i,j,e,h)},
cvf(d){var x="created_at",w="updated_at",v=J.a3(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.fD(v.i(d,x)):null,s=v.i(d,w)!=null?A.fD(v.i(d,w)):null,r=v.i(d,"price")!=null?A.nA(J.av(v.i(d,"price"))):null,q=v.i(d,"state"),p=v.i(d,"data"),o=v.i(d,"occasion"),n=v.i(d,"payment_info")
return B.cve(t,v.i(d,"currency_code"),p,u,v.i(d,"note_hidden"),o,n,r,q,s)},
hf:function hf(d,e,f,g,h,i,j,k,l,m){var _=this
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
bo7:function bo7(){},
cy0(d,e,f,g,h,i,j,k){return new B.ix(e,d,j,i,f,g)},
cy1(d){var x="created_at",w="updated_at",v=J.a3(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.fD(v.i(d,x)):null,s=v.i(d,w)!=null?A.fD(v.i(d,w)):null,r=v.i(d,"ticket_symbol"),q=v.i(d,"state"),p=v.i(d,"occasion")
return B.cy0(t,u,v.i(d,"note"),v.i(d,"note_hidden"),p,q,r,s)},
ix:function ix(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bDF:function bDF(){},
b2G(d){var x=0,w=A.l(y.f),v,u
var $async$b2G=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.c($.A5().ej("delete_order",A.y(["order_id",d.a],y.g,v),v),$async$b2G)
case 2:u=f
v=J.a3(u)
if(!J.m(v.i(u,"code"),200))throw A.f(A.cA("Deleting order failed: "+A.o(v.i(u,"code"))+": "+A.o(v.i(u,"message"))))
return A.j(null,w)}})
return A.k($async$b2G,w)},
b3_(d,e){var x=0,w=A.l(y.f),v,u,t
var $async$b3_=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.A5().ej("update_order_note_hidden",A.y(["order_id",d,"new_note_hidden",e],y.g,v),v),$async$b3_)
case 2:if(!u.m(t.u(g,"code"),200))throw A.f(A.cA("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$b3_,w)},
b3f(d,e){var x=0,w=A.l(y.f),v,u,t
var $async$b3f=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.Lq().ej("update_ticket_note_hidden",A.y(["ticket_id",d,"new_note_hidden",e],y.g,v),v),$async$b3f)
case 2:if(!u.m(t.u(g,"code"),200))throw A.f(A.cA("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$b3f,w)}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[78],B)
C=c[96]
B.iF.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
c9(){var x,w,v=this,u=A.I(y.g,y.b)
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
brk(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.dI(k,new B.aXM(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.dI(k,new B.aXN(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.X(k)
t=u.h("di<1,r?>")
t=A.J(new A.di(new A.ai(k,new B.aXO(w),u.h("ai<1>")),new B.aXP(),t),!0,t.h("v.E"))
v=t}}if(v==null)s=l
else{k=A.X(v)
u=k.h("di<1,e>")
u=new A.ai(new A.di(new A.ai(v,new B.aXQ(m),k.h("ai<1>")),new B.aXR(m),u),new B.aXS(),u.h("ai<v.E>")).c4(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:D.b.lQ(k,new B.aXT(x))}k=r==null
q=k?l:r.aEC()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a_V()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+A.o(k):""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.o(k)+" "+u+"\n"+A.z("Ticket",l)+" "+A.o(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.z("Price",l)
n=m.x
n=n==null?l:n.r
return A.o(k)+" "+u+"\n"+t+": "+C.nY(d,n==null?0:n,l,0)},
gbq(d){return this.c},
gdD(d){return this.w},
sGu(d){return this.as=d}}
B.hf.prototype={
c9(){var x,w=this,v=w.b
v=v==null?null:v.i7()
x=w.c
x=x==null?null:x.i7()
return A.y(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.g,y.b)},
rM(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=A.aS(k?0:l)
l=A.aS(k?0:l)
k=n.d
k=A.aS(k!=null?C.nY(d,k,m,0):"")
x=n.e
if(x==null)x="ordered"
x=A.aS(x+";"+B.bo6(x))
w=n.ax
if((w==null?m:w.e)!=null){w=w.e
w.toString
w=C.nY(d,w,m,0)}else w=""
w=A.aS(w)
v=n.ax
if((v==null?m:v.f)!=null){v=v.f
v.toString
v=C.nY(d,v,m,0)}else v=""
v=A.aS(v)
u=n.ax
if((u==null?m:u.r)!=null){u=u.r
u.toString
u=C.nY(d,u,m,0)}else u=""
u=A.aS(u)
t=n.ax
s=t==null
r=s?m:t.d
r=A.aS(r==null?0:r)
if((s?m:t.w)!=null){t=A.iZ("yyyy-MM-dd",m)
s=n.ax.w
s.toString
s=t.e7(s)
t=s}else t=""
t=A.aS(t)
s=A.aS(n.a_V())
q=n.at
q=A.aS(q!=null?new A.R(q,new B.bo7(),A.X(q).h("R<1,e>")).c4(0," | "):"")
p=A.aS(n.aEC())
o=n.z
return A.ld(A.y(["id",j,"order_symbol",l,"price",k,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"data",s,"ticket_products",q,"note",p,"note_hidden",A.aS(o==null?"":o),"orders_history",A.aS(""),"transactions",A.aS("")],y.g,y.e),!1,y.b)},
eS(){var x=0,w=A.l(y.f),v=this
var $async$eS=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.c(B.b2G(v),$async$eS)
case 2:return A.j(null,w)}})
return A.k($async$eS,w)},
fh(){var x=0,w=A.l(y.f),v=this,u,t
var $async$fh=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.c(B.b3_(t,u),$async$fh)
case 2:return A.j(null,w)}})
return A.k($async$fh,w)},
m_(){return"Order #"+A.o(this.a)},
a_V(){var x=this.f,w=x==null,v=A.o(w?null:J.u(x,"name")),u=A.o(w?null:J.u(x,"surname"))
return v+" "+u+" ("+A.o(w?null:J.u(x,"email"))+")"},
aEC(){var x=this.f
x=x==null?null:J.u(x,"note")
return A.o(x==null?"":x)},
gbq(d){return this.a}}
B.ix.prototype={
c9(){return A.y(["state",this.e,"note_hidden",this.w],y.g,y.b)},
rM(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a
l=A.aS(l==null?0:l)
x=n.b
x=A.aS(x!=null?A.iZ("yyyy-MM-dd",m).e7(x):"")
w=n.d
w=A.aS(w==null?"":w)
v=n.e
if(v==null)v="ordered"
v=A.aS(v+";"+B.bo6(v))
u=n.r
u=A.aS(u==null?"":u)
t=n.w
t=A.aS(t==null?"":t)
s=n.Q
r=s!=null
q=A.aS(r?"Order #"+A.o(s.a):"")
s=A.aS(r?s.a_V():"")
r=n.z
r=A.aS(r!=null?new A.R(r,new B.bDF(),A.X(r).h("R<1,e>")).c4(0," | "):"")
p=n.y
if(p!=null){o=p.z
o=o==null?m:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aS(p)
o=n.x
return A.ld(A.y(["id",l,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"spot",p,"price",A.aS(o!=null?C.nY(d,o,m,0):"")],y.g,y.e),!1,y.b)},
eS(){var x=0,w=A.l(y.f)
var $async$eS=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:return A.j(null,w)}})
return A.k($async$eS,w)},
fh(){var x=0,w=A.l(y.f),v=this,u,t
var $async$fh=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.c(B.b3f(t,u),$async$fh)
case 2:return A.j(null,w)}})
return A.k($async$fh,w)},
m_(){var x=this.d
return x==null?J.av(this.a):x},
gbq(d){return this.a}}
var z=a.updateTypes(["w(r9)","w(ix)","r?(r9)","w(hf)","e(e)"])
B.aXM.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.aXN.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.aXO.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.aXP.prototype={
$1(d){return d.d},
$S:z+2}
B.aXQ.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:348}
B.aXR.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:D.b.lQ(w,new B.aXL(d))}w=x==null?null:x.d
return w==null?"":w},
$S:950}
B.aXL.prototype={
$1(d){return d.a==this.a},
$S:106}
B.aXS.prototype={
$1(d){return d.length!==0},
$S:17}
B.aXT.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bo7.prototype={
$1(d){return d.m_()},
$S:350}
B.bDF.prototype={
$1(d){return d.m_()},
$S:350};(function installTearOffs(){var x=a._static_1
x(B,"cvh","cS4",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.iF,A.D)
w(A.bG,[B.aXM,B.aXN,B.aXO,B.aXP,B.aXQ,B.aXR,B.aXL,B.aXS,B.aXT,B.bo7,B.bDF])
w(A.i3,[B.hf,B.ix])})()
A.bo(b.typeUniverse,JSON.parse('{"hf":{"i3":[]},"ix":{"i3":[]}}'))
var y={e:A.x("fU"),g:A.x("e"),b:A.x("@"),f:A.x("~")};(function lazyInitializers(){var x=a.lazyFinal
x($,"dbj","Lq",()=>$.ig().go4(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_247",e:"endPart",h:b})})($__dart_deferred_initializers__,"zqvzSgMsAoZNRF6r4tbNUj98jLs=");