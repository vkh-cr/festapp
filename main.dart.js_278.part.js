((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_278",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
ckH(d){var x=J.a3(d)
return new B.is(x.i(d,"x"),x.i(d,"y"),x.i(d,"id"),x.i(d,"group"),x.i(d,"order_product_ticket"),x.i(d,"type"),x.i(d,"state"),x.i(d,"title"),null,x.i(d,"product"),null)},
is:function is(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aYt:function aYt(d){this.a=d},
aYu:function aYu(d){this.a=d},
aYv:function aYv(d){this.a=d},
aYw:function aYw(){},
aYx:function aYx(d){this.a=d},
aYy:function aYy(d){this.a=d},
aYs:function aYs(d){this.a=d},
aYz:function aYz(){},
aYA:function aYA(d){this.a=d},
bp4(d){var x=null
switch(d){case"ordered":return A.v("Ordered",x)
case"paid":return A.v("Paid",x)
case"sent":return A.v("Sent",x)
case"used":return A.v("Used",x)
case"storno":return A.v("Storno",x)
default:return"???"}},
cUz(d){return d+";"+B.bp4(d)},
cxy(d,e,f,g,h,i,j,k,l,m){return new B.fQ(g,d,m,k,l,f,i,j,e,h)},
cxz(d){var x="created_at",w="updated_at",v=J.a3(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.fd(v.i(d,x)):null,s=v.i(d,w)!=null?A.fd(v.i(d,w)):null,r=v.i(d,"price")!=null?A.nL(J.av(v.i(d,"price"))):null,q=v.i(d,"state"),p=v.i(d,"data"),o=v.i(d,"occasion"),n=v.i(d,"payment_info")
return B.cxy(t,v.i(d,"currency_code"),p,u,v.i(d,"note_hidden"),o,n,r,q,s)},
fQ:function fQ(d,e,f,g,h,i,j,k,l,m){var _=this
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
bp5:function bp5(){},
cAk(d,e,f,g,h,i,j,k){return new B.hb(e,d,j,i,f,g)},
cAl(d){var x="created_at",w="updated_at",v=J.a3(d),u=v.i(d,"id"),t=v.i(d,x)!=null?A.fd(v.i(d,x)):null,s=v.i(d,w)!=null?A.fd(v.i(d,w)):null,r=v.i(d,"ticket_symbol"),q=v.i(d,"state"),p=v.i(d,"occasion")
return B.cAk(t,u,v.i(d,"note"),v.i(d,"note_hidden"),p,q,r,s)},
hb:function hb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bEL:function bEL(){},
b3w(d){var x=0,w=A.k(y.f),v,u
var $async$b3w=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.c($.Aj().e4("delete_order",A.z(["order_id",d.a],y.g,v),v),$async$b3w)
case 2:u=f
v=J.a3(u)
if(!J.m(v.i(u,"code"),200))throw A.l(A.cB("Deleting order failed: "+A.o(v.i(u,"code"))+": "+A.o(v.i(u,"message"))))
return A.i(null,w)}})
return A.j($async$b3w,w)},
b3M(d,e){var x=0,w=A.k(y.f),v,u,t
var $async$b3M=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.Aj().e4("update_order_note_hidden",A.z(["order_id",d,"new_note_hidden",e],y.g,v),v),$async$b3M)
case 2:if(!u.m(t.u(g,"code"),200))throw A.l(A.cB("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b3M,w)},
b41(d,e){var x=0,w=A.k(y.f),v,u,t
var $async$b41=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.c($.LG().e4("update_ticket_note_hidden",A.z(["ticket_id",d,"new_note_hidden",e],y.g,v),v),$async$b41)
case 2:if(!u.m(t.u(g,"code"),200))throw A.l(A.cB("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b41,w)}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[78],B)
C=c[96]
B.is.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
c_(){var x,w,v=this,u=A.H(y.g,y.b)
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
brV(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.dZ(k,new B.aYt(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.dZ(k,new B.aYu(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.Y(k)
t=u.h("dk<1,r?>")
t=A.I(new A.dk(new A.ah(k,new B.aYv(w),u.h("ah<1>")),new B.aYw(),t),!0,t.h("w.E"))
v=t}}if(v==null)s=l
else{k=A.Y(v)
u=k.h("dk<1,e>")
u=new A.ah(new A.dk(new A.ah(v,new B.aYx(m),k.h("ah<1>")),new B.aYy(m),u),new B.aYz(),u.h("ah<w.E>")).c6(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:D.b.lQ(k,new B.aYA(x))}k=r==null
q=k?l:r.aEY()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a01()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+A.o(k):""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.o(k)+" "+u+"\n"+A.v("Ticket",l)+" "+A.o(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.v("Price",l)
n=m.x
n=n==null?l:n.r
return A.o(k)+" "+u+"\n"+t+": "+C.oa(d,n==null?0:n,l,0)},
gbp(d){return this.c},
gds(d){return this.w},
sGA(d){return this.as=d}}
B.fQ.prototype={
c_(){var x,w=this,v=w.b
v=v==null?null:v.hY()
x=w.c
x=x==null?null:x.hY()
return A.z(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.g,y.b)},
qi(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k==null,i=A.aT(j?0:k)
k=A.aT(j?0:k)
j=m.d
j=A.aT(j!=null?C.oa(d,j,l,0):"")
x=m.e
if(x==null)x="ordered"
x=A.aT(x+";"+B.bp4(x))
w=m.ax
if((w==null?l:w.e)!=null){w=w.e
w.toString
w=C.oa(d,w,l,0)}else w=""
w=A.aT(w)
v=m.ax
if((v==null?l:v.f)!=null){v=v.f
v.toString
v=C.oa(d,v,l,0)}else v=""
v=A.aT(v)
u=m.ax
if((u==null?l:u.r)!=null){u=u.r
u.toString
u=C.oa(d,u,l,0)}else u=""
u=A.aT(u)
t=m.ax
s=t==null
r=s?l:t.d
r=A.aT(r==null?0:r)
if((s?l:t.w)!=null){t=A.iv("yyyy-MM-dd",l)
s=m.ax.w
s.toString
s=t.e2(s)
t=s}else t=""
t=A.aT(t)
s=A.aT(m.a01())
q=m.f
q=A.aT(q==null?l:J.u(q,"email"))
p=m.at
p=A.aT(p!=null?new A.P(p,new B.bp5(),A.Y(p).h("P<1,e>")).c6(0," | "):"")
o=A.aT(m.aEY())
n=m.z
return A.li(A.z(["id",i,"order_symbol",k,"price",j,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"data",s,"email",q,"ticket_products",p,"note",o,"note_hidden",A.aT(n==null?"":n),"orders_history",A.aT(""),"transactions",A.aT("")],y.g,y.e),!1,y.b)},
eS(){var x=0,w=A.k(y.f),v=this
var $async$eS=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.c(B.b3w(v),$async$eS)
case 2:return A.i(null,w)}})
return A.j($async$eS,w)},
fh(){var x=0,w=A.k(y.f),v=this,u,t
var $async$fh=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.c(B.b3M(t,u),$async$fh)
case 2:return A.i(null,w)}})
return A.j($async$fh,w)},
m_(){return"Order #"+A.o(this.a)},
a01(){var x=this.f,w=x==null,v=A.o(w?null:J.u(x,"name"))
return v+" "+A.o(w?null:J.u(x,"surname"))},
aEY(){var x=this.f
x=x==null?null:J.u(x,"note")
return A.o(x==null?"":x)},
gbp(d){return this.a}}
B.hb.prototype={
c_(){return A.z(["state",this.e,"note_hidden",this.w],y.g,y.b)},
qi(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a
l=A.aT(l==null?0:l)
x=n.b
x=A.aT(x!=null?A.iv("yyyy-MM-dd",m).e2(x):"")
w=n.d
w=A.aT(w==null?"":w)
v=n.e
if(v==null)v="ordered"
v=A.aT(v+";"+B.bp4(v))
u=n.r
u=A.aT(u==null?"":u)
t=n.w
t=A.aT(t==null?"":t)
s=n.Q
r=s!=null
q=A.aT(r?"Order #"+A.o(s.a):"")
s=A.aT(r?s.a01():"")
r=n.z
r=A.aT(r!=null?new A.P(r,new B.bEL(),A.Y(r).h("P<1,e>")).c6(0," | "):"")
p=n.y
if(p!=null){o=p.z
o=o==null?m:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aT(p)
o=n.x
return A.li(A.z(["id",l,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"spot",p,"price",A.aT(o!=null?C.oa(d,o,m,0):"")],y.g,y.e),!1,y.b)},
eS(){var x=0,w=A.k(y.f)
var $async$eS=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:return A.i(null,w)}})
return A.j($async$eS,w)},
fh(){var x=0,w=A.k(y.f),v=this,u,t
var $async$fh=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.c(B.b41(t,u),$async$fh)
case 2:return A.i(null,w)}})
return A.j($async$fh,w)},
m_(){var x=this.d
return x==null?J.av(this.a):x},
gbp(d){return this.a}}
var z=a.updateTypes(["x(mN)","x(hb)","r?(mN)","x(fQ)","e(e)"])
B.aYt.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.aYu.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.aYv.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.aYw.prototype={
$1(d){return d.d},
$S:z+2}
B.aYx.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:271}
B.aYy.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:D.b.lQ(w,new B.aYs(d))}w=x==null?null:x.d
return w==null?"":w},
$S:964}
B.aYs.prototype={
$1(d){return d.a==this.a},
$S:142}
B.aYz.prototype={
$1(d){return d.length!==0},
$S:17}
B.aYA.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bp5.prototype={
$1(d){return d.m_()},
$S:242}
B.bEL.prototype={
$1(d){return d.m_()},
$S:242};(function installTearOffs(){var x=a._static_1
x(B,"cxB","cUz",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.is,A.E)
w(A.bC,[B.aYt,B.aYu,B.aYv,B.aYw,B.aYx,B.aYy,B.aYs,B.aYz,B.aYA,B.bp5,B.bEL])
w(A.hV,[B.fQ,B.hb])})()
A.bi(b.typeUniverse,JSON.parse('{"fQ":{"hV":[]},"hb":{"hV":[]}}'))
var y={e:A.y("h9"),g:A.y("e"),b:A.y("@"),f:A.y("~")};(function lazyInitializers(){var x=a.lazyFinal
x($,"ddU","LG",()=>$.hl().gmO(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_278",e:"endPart",h:b})})($__dart_deferred_initializers__,"E8D7BhbGEfCijcpbLhi44LyfyNI=");