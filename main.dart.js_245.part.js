((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_245",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,C,B={
cHz(d){var x=J.a1(d)
return new B.j7(x.h(d,"x"),x.h(d,"y"),x.h(d,"id"),x.h(d,"group"),x.h(d,"order_product_ticket"),x.h(d,"type"),x.h(d,"state"),x.h(d,"title"),null,x.h(d,"product"),null)},
j7:function j7(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b4k:function b4k(d){this.a=d},
b4l:function b4l(d){this.a=d},
b4m:function b4m(d){this.a=d},
b4n:function b4n(){},
b4o:function b4o(d){this.a=d},
b4p:function b4p(d){this.a=d},
b4j:function b4j(d){this.a=d},
b4q:function b4q(){},
b4r:function b4r(d){this.a=d},
bzS(d){var x=null
switch(d){case"ordered":case"expired":return A.q("Ordered",x)
case"paid":return A.q("Paid",x)
case"sent":return A.q("Sent",x)
case"used":return A.q("Used",x)
case"storno":return A.q("Storno",x)
default:return"???"}},
dl4(d){return d+";"+B.bzS(d)},
cVf(d,e,f,g,h,i,j,k,l,m,n){return new B.hw(h,d,n,l,m,f,j,k,g,e,i)},
cVg(d){var x=null,w="created_at",v="updated_at",u="data",t=J.a1(d),s=t.h(d,"id"),r=t.h(d,w)!=null?A.es(t.h(d,w)):x,q=t.h(d,v)!=null?A.es(t.h(d,v)):x,p=t.h(d,"price")!=null?A.lN(J.ar(t.h(d,"price"))):x,o=t.h(d,"currency_code"),n=t.h(d,"state"),m=t.h(d,u)!=null?J.v(t.h(d,u),"form"):x,l=t.h(d,u),k=t.h(d,"occasion"),j=t.h(d,"payment_info")
return B.cVf(r,o,l,m,s,t.h(d,"note_hidden"),k,j,p,n,q)},
hw:function hw(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bzT:function bzT(){},
cXR(d,e,f,g,h,i,j,k){return new B.hx(e,d,j,i,f,g)},
cXS(d){var x="created_at",w="updated_at",v=J.a1(d),u=v.h(d,"id"),t=v.h(d,x)!=null?A.es(v.h(d,x)):null,s=v.h(d,w)!=null?A.es(v.h(d,w)):null,r=v.h(d,"ticket_symbol"),q=v.h(d,"state"),p=v.h(d,"occasion")
return B.cXR(t,u,v.h(d,"note"),v.h(d,"note_hidden"),p,q,r,s)},
hx:function hx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bPF:function bPF(){},
cSa(d){var x,w,v,u,t,s,r,q=y.w,p=A.I(q,y.q)
for(x=y.E,w=0;w<3;++w)p.m(0,D.mS[w],A.a([],x))
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.K)(d),++w){v=d[w]
u=v.Q
if(u==null)u=""
p.h(0,E.b.p(D.mS,u)?u:E.b.gZ(D.mS)).push(v)}t=A.I(q,y.d)
for(w=0;w<3;++w){s=D.mS[w]
if(p.h(0,s).length!==0){q=p.h(0,s)
q.toString
r=new A.M(q,new B.bh9(),A.U(q).i("M<1,m>")).bQ(0," | ")}else r=""
t.m(0,s,new A.h5(new A.hk(),r))}return t},
bh9:function bh9(){},
bbq(d){return B.ddV(d)},
ddV(d){var x=0,w=A.l(y.v),v,u
var $async$bbq=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.d($.C8().dn("delete_order",A.z(["order_id",d.a],y.w,v),v),$async$bbq)
case 2:u=f
v=J.a1(u)
if(!J.p(v.h(u,"code"),200))throw A.n(A.cP("Deleting order failed: "+A.o(v.h(u,"code"))+": "+A.o(v.h(u,"message"))))
return A.j(null,w)}})
return A.k($async$bbq,w)},
bbI(d,e){return B.de2(d,e)},
de2(d,e){var x=0,w=A.l(y.v),v,u,t
var $async$bbI=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.C8().dn("update_order_note_hidden",A.z(["order_id",d,"new_note_hidden",e],y.w,v),v),$async$bbI)
case 2:if(!u.p(t.v(g,"code"),200))throw A.n(A.cP("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$bbI,w)},
bc_(d,e){return B.def(d,e)},
def(d,e){var x=0,w=A.l(y.v),v,u,t
var $async$bc_=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.Oa().dn("update_ticket_note_hidden",A.z(["ticket_id",d,"new_note_hidden",e],y.w,v),v),$async$bc_)
case 2:if(!u.p(t.v(g,"code"),200))throw A.n(A.cP("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$bc_,w)}},D,F
J=c[1]
A=c[0]
E=c[2]
C=c[102]
B=a.updateHolder(c[79],B)
D=c[296]
F=c[135]
B.j7.prototype={
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
bBC(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.d2(k,new B.b4k(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.d2(k,new B.b4l(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.U(k)
t=u.i("db<1,f?>")
k=A.D(new A.db(new A.ad(k,new B.b4m(w),u.i("ad<1>")),new B.b4n(),t),t.i("x.E"))
v=k}}if(v==null)s=l
else{k=A.U(v)
u=k.i("db<1,m>")
u=new A.ad(new A.db(new A.ad(v,new B.b4o(m),k.i("ad<1>")),new B.b4p(m),u),new B.b4q(),u.i("ad<x.E>")).bQ(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:E.b.fS(k,new B.b4r(x))}k=r==null
q=k?l:r.aKB()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a2J()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+k:""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.o(k)+" "+u+"\n"+A.q("Ticket",l)+" "+A.o(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.q("Price",l)
n=m.x
n=n==null?l:n.r
return A.o(k)+" "+u+"\n"+t+": "+C.jo(d,n==null?0:n,l,0)},
gbk(d){return this.c},
gc0(d){return this.w},
sHx(d){return this.as=d}}
B.hw.prototype={
bM4(){var x,w
if(this.e==="ordered"){x=this.ay
x=x==null||x.w==null}else x=!0
if(x)return!1
w=A.cq(F.rw().gdq(),F.rw().gdh(),F.rw().ge5(),0,0,0,0,0)
x=this.ay.w
x.toString
return w.f8(A.cq(A.dQ(x),A.ew(x),A.iM(x),0,0,0,0,0))},
bf(){var x,w=this,v=w.b
v=v==null?null:v.fH()
x=w.c
x=x==null?null:x.fH()
return A.z(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.w,y.b)},
p9(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="yyyy-MM-dd",f=i.a,e=f==null,d=A.aD(e?0:f)
f=A.aD(e?0:f)
e=i.d
e=A.aD(e!=null?C.jo(a0,e,i.y,0):"")
x=i.e
if(x==null)x="ordered"
x=A.aD(x+";"+B.bzS(x))
w=i.ay
if((w==null?h:w.e)!=null){v=w.e
v.toString
w=C.jo(a0,v,w.x,0)}else w=""
w=A.aD(w)
v=i.ay
if((v==null?h:v.f)!=null){u=v.f
u.toString
v=C.jo(a0,u,v.x,0)}else v=""
v=A.aD(v)
u=i.ay
if((u==null?h:u.r)!=null){t=u.r
t.toString
u=C.jo(a0,t,u.x,0)}else u=""
u=A.aD(u)
t=i.ay
s=t==null
r=s?h:t.d
r=A.aD(r==null?0:r)
if((s?h:t.w)!=null){t=A.hC(g,h)
s=i.ay.w
s.toString
s=t.da(s)
t=s}else t=""
t=A.aD(t)
s=i.b
s=A.aD(s!=null?A.hC(g,h).da(s):"")
q=A.aD(i.a2J())
p=i.f
p=A.aD(p==null?h:J.v(p,"email"))
o=i.ax
o=A.aD(o!=null?new A.M(o,new B.bzT(),A.U(o).i("M<1,m>")).bQ(0," | "):"")
n=A.aD(i.aKB())
m=i.z
m=A.aD(m==null?"":m)
l=A.aD("")
k=A.aD("")
j=i.Q
j=j==null?h:j.ax
return A.li(A.z(["id",d,"order_symbol",f,"price",e,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"created_at",s,"data",q,"email",p,"ticket_products",o,"note",n,"note_hidden",m,"orders_history",l,"transactions",k,"forms",A.aD(j==null?"":j)],y.w,y.d),!1,y.b)},
ev(){var x=0,w=A.l(y.v),v=this
var $async$ev=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(B.bbq(v),$async$ev)
case 2:return A.j(null,w)}})
return A.k($async$ev,w)},
eQ(){var x=0,w=A.l(y.v),v=this,u,t
var $async$eQ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.d(B.bbI(t,u),$async$eQ)
case 2:return A.j(null,w)}})
return A.k($async$eQ,w)},
lr(){return"Order #"+A.o(this.a)},
a2J(){var x=this.f,w=x==null,v=A.o(w?null:J.v(x,"name"))
return v+" "+A.o(w?null:J.v(x,"surname"))},
aKB(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.o(x==null?"":x)},
gbk(d){return this.a}}
B.hx.prototype={
bf(){return A.z(["state",this.e,"note_hidden",this.w],y.w,y.b)},
p9(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k=A.aD(k==null?0:k)
x=m.b
x=A.aD(x!=null?A.hC("yyyy-MM-dd",l).da(x):"")
w=m.d
w=A.aD(w==null?"":w)
v=m.e
if(v==null)v="ordered"
v=A.aD(v+";"+B.bzS(v))
u=m.r
u=A.aD(u==null?"":u)
t=m.w
t=A.aD(t==null?"":t)
s=m.Q
r=s!=null
q=A.aD(r?"Order #"+A.o(s.a):"")
s=A.aD(r?s.a2J():"")
r=m.z
r=A.aD(r!=null?new A.M(r,new B.bPF(),A.U(r).i("M<1,m>")).bQ(0," | "):"")
p=m.y
if(p!=null){o=p.z
o=o==null?l:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aD(p)
o=m.x
n=A.z(["id",k,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"ticketSpot",p,"price",A.aD(o!=null?C.jo(d,o,l,0):""),"ticketProductsEdit",A.aD("")],y.w,y.d)
k=m.Q.ax
n.H(0,B.cSa(k==null?A.a([],y.E):k))
return A.li(n,!1,y.b)},
ev(){var x=0,w=A.l(y.v)
var $async$ev=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:return A.j(null,w)}})
return A.k($async$ev,w)},
eQ(){var x=0,w=A.l(y.v),v=this,u,t
var $async$eQ=A.h(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.d(B.bc_(t,u),$async$eQ)
case 2:return A.j(null,w)}})
return A.k($async$eQ,w)},
lr(){var x=this.d
return x==null?J.ar(this.a):x},
gbk(d){return this.a}}
var z=a.updateTypes(["w(nG)","w(hx)","f?(nG)","w(hw)","m(m)"])
B.b4k.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.b4l.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.b4m.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.b4n.prototype={
$1(d){return d.d},
$S:z+2}
B.b4o.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:253}
B.b4p.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:E.b.fS(w,new B.b4j(d))}w=x==null?null:x.d
return w==null?"":w},
$S:1210}
B.b4j.prototype={
$1(d){return d.a==this.a},
$S:42}
B.b4q.prototype={
$1(d){return d.length!==0},
$S:17}
B.b4r.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bzT.prototype={
$1(d){return d.lr()},
$S:169}
B.bPF.prototype={
$1(d){return d.lr()},
$S:169}
B.bh9.prototype={
$1(d){return d.lr()},
$S:169};(function installTearOffs(){var x=a._static_1
x(B,"d2n","dl4",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.j7,A.H)
w(A.cd,[B.b4k,B.b4l,B.b4m,B.b4n,B.b4o,B.b4p,B.b4j,B.b4q,B.b4r,B.bzT,B.bPF,B.bh9])
w(A.i7,[B.hw,B.hx])})()
A.c8(b.typeUniverse,JSON.parse('{"hw":{"i7":[]},"hx":{"i7":[]}}'))
var y={E:A.E("u<f_>"),q:A.E("B<f_>"),w:A.E("m"),d:A.E("h5"),b:A.E("@"),v:A.E("~")};(function constants(){var x=a.makeConstList
D.mS=A.a(x(["spot","food","others"]),A.E("u<m>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dIz","Oa",()=>$.hP().gmO(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_245",e:"endPart",h:b})})($__dart_deferred_initializers__,"ojJA8AJ5UWedDnlN+ijmVa4Kx3E=");