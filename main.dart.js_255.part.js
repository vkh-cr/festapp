((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_255",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,C,B={
cGF(d){var x=J.a0(d)
return new B.j5(x.h(d,"x"),x.h(d,"y"),x.h(d,"id"),x.h(d,"group"),x.h(d,"order_product_ticket"),x.h(d,"type"),x.h(d,"state"),x.h(d,"title"),null,x.h(d,"product"),null)},
j5:function j5(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b4c:function b4c(d){this.a=d},
b4d:function b4d(d){this.a=d},
b4e:function b4e(d){this.a=d},
b4f:function b4f(){},
b4g:function b4g(d){this.a=d},
b4h:function b4h(d){this.a=d},
b4b:function b4b(d){this.a=d},
b4i:function b4i(){},
b4j:function b4j(d){this.a=d},
bzI(d){var x=null
switch(d){case"ordered":case"expired":return A.r("Ordered",x)
case"paid":return A.r("Paid",x)
case"sent":return A.r("Sent",x)
case"used":return A.r("Used",x)
case"storno":return A.r("Storno",x)
default:return"???"}},
dka(d){return d+";"+B.bzI(d)},
cUk(d,e,f,g,h,i,j,k,l,m,n){return new B.hv(h,d,n,l,m,f,j,k,g,e,i)},
cUl(d){var x=null,w="created_at",v="updated_at",u="data",t=J.a0(d),s=t.h(d,"id"),r=t.h(d,w)!=null?A.et(t.h(d,w)):x,q=t.h(d,v)!=null?A.et(t.h(d,v)):x,p=t.h(d,"price")!=null?A.lH(J.aq(t.h(d,"price"))):x,o=t.h(d,"currency_code"),n=t.h(d,"state"),m=t.h(d,u)!=null?J.v(t.h(d,u),"form"):x,l=t.h(d,u),k=t.h(d,"occasion"),j=t.h(d,"payment_info")
return B.cUk(r,o,l,m,s,t.h(d,"note_hidden"),k,j,p,n,q)},
hv:function hv(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.ay=_.ax=_.as=_.Q=null},
bzJ:function bzJ(){},
cWW(d,e,f,g,h,i,j,k){return new B.hw(e,d,j,i,f,g)},
cWX(d){var x="created_at",w="updated_at",v=J.a0(d),u=v.h(d,"id"),t=v.h(d,x)!=null?A.et(v.h(d,x)):null,s=v.h(d,w)!=null?A.et(v.h(d,w)):null,r=v.h(d,"ticket_symbol"),q=v.h(d,"state"),p=v.h(d,"occasion")
return B.cWW(t,u,v.h(d,"note"),v.h(d,"note_hidden"),p,q,r,s)},
hw:function hw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bPq:function bPq(){},
cRe(d){var x,w,v,u,t,s,r,q=y.w,p=A.I(q,y.q)
for(x=y.E,w=0;w<3;++w)p.m(0,D.mQ[w],A.a([],x))
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.M)(d),++w){v=d[w]
u=v.Q
if(u==null)u=""
p.h(0,E.b.p(D.mQ,u)?u:E.b.gZ(D.mQ)).push(v)}t=A.I(q,y.d)
for(w=0;w<3;++w){s=D.mQ[w]
if(p.h(0,s).length!==0){q=p.h(0,s)
q.toString
r=new A.P(q,new B.bh2(),A.W(q).i("P<1,m>")).bQ(0," | ")}else r=""
t.m(0,s,new A.h6(new A.hj(),r))}return t},
bh2:function bh2(){},
bbj(d){return B.dd_(d)},
dd_(d){var x=0,w=A.l(y.v),v,u
var $async$bbj=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.d($.C2().dm("delete_order",A.z(["order_id",d.a],y.w,v),v),$async$bbj)
case 2:u=f
v=J.a0(u)
if(!J.p(v.h(u,"code"),200))throw A.n(A.cP("Deleting order failed: "+A.o(v.h(u,"code"))+": "+A.o(v.h(u,"message"))))
return A.j(null,w)}})
return A.k($async$bbj,w)},
bbB(d,e){return B.dd7(d,e)},
dd7(d,e){var x=0,w=A.l(y.v),v,u,t
var $async$bbB=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.C2().dm("update_order_note_hidden",A.z(["order_id",d,"new_note_hidden",e],y.w,v),v),$async$bbB)
case 2:if(!u.p(t.v(g,"code"),200))throw A.n(A.cP("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$bbB,w)},
bbT(d,e){return B.ddk(d,e)},
ddk(d,e){var x=0,w=A.l(y.v),v,u,t
var $async$bbT=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.O9().dm("update_ticket_note_hidden",A.z(["ticket_id",d,"new_note_hidden",e],y.w,v),v),$async$bbT)
case 2:if(!u.p(t.v(g,"code"),200))throw A.n(A.cP("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$bbT,w)}},D,F
J=c[1]
A=c[0]
E=c[2]
C=c[103]
B=a.updateHolder(c[81],B)
D=c[305]
F=c[135]
B.j5.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
bf(){var x,w,v=this,u=A.I(y.w,y.b)
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
bBm(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.dD(k,new B.b4c(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.dD(k,new B.b4d(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.W(k)
t=u.i("dk<1,f?>")
k=A.D(new A.dk(new A.ad(k,new B.b4e(w),u.i("ad<1>")),new B.b4f(),t),t.i("w.E"))
v=k}}if(v==null)s=l
else{k=A.W(v)
u=k.i("dk<1,m>")
u=new A.ad(new A.dk(new A.ad(v,new B.b4g(m),k.i("ad<1>")),new B.b4h(m),u),new B.b4i(),u.i("ad<w.E>")).bQ(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:E.b.fH(k,new B.b4j(x))}k=r==null
q=k?l:r.aKr()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a2D()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+k:""
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
return A.o(k)+" "+u+"\n"+t+": "+C.jl(d,n==null?0:n,l,0)},
gbk(d){return this.c},
gc1(d){return this.w},
sHx(d){return this.as=d}}
B.hv.prototype={
bLM(){var x,w
if(this.e==="ordered"){x=this.ay
x=x==null||x.w==null}else x=!0
if(x)return!1
w=A.cn(F.vW().gdt(),F.vW().gdj(),F.vW().gei(),0,0,0,0,0)
x=this.ay.w
x.toString
return w.fh(A.cn(A.dI(x),A.ek(x),A.hI(x),0,0,0,0,0))},
bf(){var x,w=this,v=w.b
v=v==null?null:v.fK()
x=w.c
x=x==null?null:x.fK()
return A.z(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.w,y.b)},
p7(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="yyyy-MM-dd",f=i.a,e=f==null,d=A.aD(e?0:f)
f=A.aD(e?0:f)
e=i.d
e=A.aD(e!=null?C.jl(a0,e,i.y,0):"")
x=i.e
if(x==null)x="ordered"
x=A.aD(x+";"+B.bzI(x))
w=i.ay
if((w==null?h:w.e)!=null){v=w.e
v.toString
w=C.jl(a0,v,w.x,0)}else w=""
w=A.aD(w)
v=i.ay
if((v==null?h:v.f)!=null){u=v.f
u.toString
v=C.jl(a0,u,v.x,0)}else v=""
v=A.aD(v)
u=i.ay
if((u==null?h:u.r)!=null){t=u.r
t.toString
u=C.jl(a0,t,u.x,0)}else u=""
u=A.aD(u)
t=i.ay
s=t==null
r=s?h:t.d
r=A.aD(r==null?0:r)
if((s?h:t.w)!=null){t=A.hA(g,h)
s=i.ay.w
s.toString
s=t.da(s)
t=s}else t=""
t=A.aD(t)
s=i.b
s=A.aD(s!=null?A.hA(g,h).da(s):"")
q=A.aD(i.a2D())
p=i.f
p=A.aD(p==null?h:J.v(p,"email"))
o=i.ax
o=A.aD(o!=null?new A.P(o,new B.bzJ(),A.W(o).i("P<1,m>")).bQ(0," | "):"")
n=A.aD(i.aKr())
m=i.z
m=A.aD(m==null?"":m)
l=A.aD("")
k=A.aD("")
j=i.Q
j=j==null?h:j.ax
return A.le(A.z(["id",d,"order_symbol",f,"price",e,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"created_at",s,"data",q,"email",p,"ticket_products",o,"note",n,"note_hidden",m,"orders_history",l,"transactions",k,"forms",A.aD(j==null?"":j)],y.w,y.d),!1,y.b)},
eu(){var x=0,w=A.l(y.v),v=this
var $async$eu=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(B.bbj(v),$async$eu)
case 2:return A.j(null,w)}})
return A.k($async$eu,w)},
eP(){var x=0,w=A.l(y.v),v=this,u,t
var $async$eP=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.d(B.bbB(t,u),$async$eP)
case 2:return A.j(null,w)}})
return A.k($async$eP,w)},
lt(){return"Order #"+A.o(this.a)},
a2D(){var x=this.f,w=x==null,v=A.o(w?null:J.v(x,"name"))
return v+" "+A.o(w?null:J.v(x,"surname"))},
aKr(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.o(x==null?"":x)},
gbk(d){return this.a}}
B.hw.prototype={
bf(){return A.z(["state",this.e,"note_hidden",this.w],y.w,y.b)},
p7(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k=A.aD(k==null?0:k)
x=m.b
x=A.aD(x!=null?A.hA("yyyy-MM-dd",l).da(x):"")
w=m.d
w=A.aD(w==null?"":w)
v=m.e
if(v==null)v="ordered"
v=A.aD(v+";"+B.bzI(v))
u=m.r
u=A.aD(u==null?"":u)
t=m.w
t=A.aD(t==null?"":t)
s=m.Q
r=s!=null
q=A.aD(r?"Order #"+A.o(s.a):"")
s=A.aD(r?s.a2D():"")
r=m.z
r=A.aD(r!=null?new A.P(r,new B.bPq(),A.W(r).i("P<1,m>")).bQ(0," | "):"")
p=m.y
if(p!=null){o=p.z
o=o==null?l:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aD(p)
o=m.x
n=A.z(["id",k,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"ticketSpot",p,"price",A.aD(o!=null?C.jl(d,o,l,0):""),"ticketProductsEdit",A.aD("")],y.w,y.d)
k=m.Q.ax
n.H(0,B.cRe(k==null?A.a([],y.E):k))
return A.le(n,!1,y.b)},
eu(){var x=0,w=A.l(y.v)
var $async$eu=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:return A.j(null,w)}})
return A.k($async$eu,w)},
eP(){var x=0,w=A.l(y.v),v=this,u,t
var $async$eP=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.d(B.bbT(t,u),$async$eP)
case 2:return A.j(null,w)}})
return A.k($async$eP,w)},
lt(){var x=this.d
return x==null?J.aq(this.a):x},
gbk(d){return this.a}}
var z=a.updateTypes(["x(nF)","x(hw)","f?(nF)","x(hv)","m(m)"])
B.b4c.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.b4d.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.b4e.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.b4f.prototype={
$1(d){return d.d},
$S:z+2}
B.b4g.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:251}
B.b4h.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:E.b.fH(w,new B.b4b(d))}w=x==null?null:x.d
return w==null?"":w},
$S:1202}
B.b4b.prototype={
$1(d){return d.a==this.a},
$S:42}
B.b4i.prototype={
$1(d){return d.length!==0},
$S:17}
B.b4j.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bzJ.prototype={
$1(d){return d.lt()},
$S:176}
B.bPq.prototype={
$1(d){return d.lt()},
$S:176}
B.bh2.prototype={
$1(d){return d.lt()},
$S:176};(function installTearOffs(){var x=a._static_1
x(B,"d1r","dka",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.j5,A.H)
w(A.ce,[B.b4c,B.b4d,B.b4e,B.b4f,B.b4g,B.b4h,B.b4b,B.b4i,B.b4j,B.bzJ,B.bPq,B.bh2])
w(A.i6,[B.hv,B.hw])})()
A.c7(b.typeUniverse,JSON.parse('{"hv":{"i6":[]},"hw":{"i6":[]}}'))
var y={E:A.E("u<eZ>"),q:A.E("B<eZ>"),w:A.E("m"),d:A.E("h6"),b:A.E("@"),v:A.E("~")};(function constants(){var x=a.makeConstList
D.mQ=A.a(x(["spot","food","others"]),A.E("u<m>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dHH","O9",()=>$.hP().gmO(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_255",e:"endPart",h:b})})($__dart_deferred_initializers__,"NPdAuJVx9PicbleuvzHBYf/5uGI=");