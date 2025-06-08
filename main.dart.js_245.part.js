((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_245",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,C,B={
cIH(d){var x=J.a0(d)
return new B.j8(x.h(d,"x"),x.h(d,"y"),x.h(d,"id"),x.h(d,"group"),x.h(d,"order_product_ticket"),x.h(d,"type"),x.h(d,"state"),x.h(d,"title"),null,x.h(d,"product"),null)},
j8:function j8(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b4B:function b4B(d){this.a=d},
b4C:function b4C(d){this.a=d},
b4D:function b4D(d){this.a=d},
b4E:function b4E(){},
b4F:function b4F(d){this.a=d},
b4G:function b4G(d){this.a=d},
b4A:function b4A(d){this.a=d},
b4H:function b4H(){},
b4I:function b4I(d){this.a=d},
bAA(d){var x=null
switch(d){case"ordered":case"expired":return A.q("Ordered",x)
case"paid":return A.q("Paid",x)
case"sent":return A.q("Sent",x)
case"used":return A.q("Used",x)
case"storno":return A.q("Storno",x)
default:return"???"}},
dme(d){return d+";"+B.bAA(d)},
cWj(d,e,f,g,h,i,j,k,l,m,n){return new B.hy(h,d,n,l,m,f,j,k,g,e,i)},
cWk(d){var x=null,w="created_at",v="updated_at",u="data",t=J.a0(d),s=t.h(d,"id"),r=t.h(d,w)!=null?A.el(t.h(d,w)):x,q=t.h(d,v)!=null?A.el(t.h(d,v)):x,p=t.h(d,"price")!=null?A.lP(J.ar(t.h(d,"price"))):x,o=t.h(d,"currency_code"),n=t.h(d,"state"),m=t.h(d,u)!=null?J.v(t.h(d,u),"form"):x,l=t.h(d,u),k=t.h(d,"occasion"),j=t.h(d,"payment_info")
return B.cWj(r,o,l,m,s,t.h(d,"note_hidden"),k,j,p,n,q)},
hy:function hy(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bAB:function bAB(){},
cYV(d,e,f,g,h,i,j,k){return new B.hz(e,d,j,i,f,g)},
cYW(d){var x="created_at",w="updated_at",v=J.a0(d),u=v.h(d,"id"),t=v.h(d,x)!=null?A.el(v.h(d,x)):null,s=v.h(d,w)!=null?A.el(v.h(d,w)):null,r=v.h(d,"ticket_symbol"),q=v.h(d,"state"),p=v.h(d,"occasion")
return B.cYV(t,u,v.h(d,"note"),v.h(d,"note_hidden"),p,q,r,s)},
hz:function hz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bQn:function bQn(){},
cTe(d){var x,w,v,u,t,s,r,q=y.w,p=A.I(q,y.q)
for(x=y.E,w=0;w<3;++w)p.m(0,D.mV[w],A.a([],x))
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.N)(d),++w){v=d[w]
u=v.Q
if(u==null)u=""
p.h(0,E.b.p(D.mV,u)?u:E.b.gZ(D.mV)).push(v)}t=A.I(q,y.d)
for(w=0;w<3;++w){s=D.mV[w]
if(p.h(0,s).length!==0){q=p.h(0,s)
q.toString
r=new A.K(q,new B.bhR(),A.U(q).i("K<1,i>")).bQ(0," | ")}else r=""
t.m(0,s,new A.h7(new A.hm(),r))}return t},
bhR:function bhR(){},
bbJ(d){return B.df4(d)},
df4(d){var x=0,w=A.m(y.v),v,u
var $async$bbJ=A.h(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.d($.C9().dd("delete_order",A.y(["order_id",d.a],y.w,v),v),$async$bbJ)
case 2:u=f
v=J.a0(u)
if(!J.p(v.h(u,"code"),200))throw A.n(A.cN("Deleting order failed: "+A.o(v.h(u,"code"))+": "+A.o(v.h(u,"message"))))
return A.k(null,w)}})
return A.l($async$bbJ,w)},
bc0(d,e){return B.dfc(d,e)},
dfc(d,e){var x=0,w=A.m(y.v),v,u,t
var $async$bc0=A.h(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.C9().dd("update_order_note_hidden",A.y(["order_id",d,"new_note_hidden",e],y.w,v),v),$async$bc0)
case 2:if(!u.p(t.v(g,"code"),200))throw A.n(A.cN("Saving of note has failed."))
return A.k(null,w)}})
return A.l($async$bc0,w)},
bci(d,e){return B.dfp(d,e)},
dfp(d,e){var x=0,w=A.m(y.v),v,u,t
var $async$bci=A.h(function(f,g){if(f===1)return A.j(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.Od().dd("update_ticket_note_hidden",A.y(["ticket_id",d,"new_note_hidden",e],y.w,v),v),$async$bci)
case 2:if(!u.p(t.v(g,"code"),200))throw A.n(A.cN("Saving of note has failed."))
return A.k(null,w)}})
return A.l($async$bci,w)}},D,F
J=c[1]
A=c[0]
E=c[2]
C=c[102]
B=a.updateHolder(c[79],B)
D=c[296]
F=c[135]
B.j8.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
b7(){var x,w,v=this,u=A.I(y.w,y.b)
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
bC_(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.d8(k,new B.b4B(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.d8(k,new B.b4C(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.U(k)
t=u.i("dd<1,f?>")
k=A.C(new A.dd(new A.ad(k,new B.b4D(w),u.i("ad<1>")),new B.b4E(),t),t.i("w.E"))
v=k}}if(v==null)s=l
else{k=A.U(v)
u=k.i("dd<1,i>")
u=new A.ad(new A.dd(new A.ad(v,new B.b4F(m),k.i("ad<1>")),new B.b4G(m),u),new B.b4H(),u.i("ad<w.E>")).bQ(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:E.b.fS(k,new B.b4I(x))}k=r==null
q=k?l:r.aKP()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a2T()+q:""
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
return A.o(k)+" "+u+"\n"+t+": "+C.jq(d,n==null?0:n,l,0)},
gbh(d){return this.c},
gc0(d){return this.w},
sHE(d){return this.as=d}}
B.hy.prototype={
bMs(){var x,w
if(this.e==="ordered"){x=this.ay
x=x==null||x.w==null}else x=!0
if(x)return!1
w=A.cq(F.rw().gdr(),F.rw().gdi(),F.rw().gee(),0,0,0,0,0)
x=this.ay.w
x.toString
return w.f8(A.cq(A.dR(x),A.ey(x),A.iN(x),0,0,0,0,0))},
b7(){var x,w=this,v=w.b
v=v==null?null:v.fI()
x=w.c
x=x==null?null:x.fI()
return A.y(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.w,y.b)},
pa(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="yyyy-MM-dd",f=i.a,e=f==null,d=A.aD(e?0:f)
f=A.aD(e?0:f)
e=i.d
e=A.aD(e!=null?C.jq(a0,e,i.y,0):"")
x=i.e
if(x==null)x="ordered"
x=A.aD(x+";"+B.bAA(x))
w=i.ay
if((w==null?h:w.e)!=null){v=w.e
v.toString
w=C.jq(a0,v,w.x,0)}else w=""
w=A.aD(w)
v=i.ay
if((v==null?h:v.f)!=null){u=v.f
u.toString
v=C.jq(a0,u,v.x,0)}else v=""
v=A.aD(v)
u=i.ay
if((u==null?h:u.r)!=null){t=u.r
t.toString
u=C.jq(a0,t,u.x,0)}else u=""
u=A.aD(u)
t=i.ay
s=t==null
r=s?h:t.d
r=A.aD(r==null?0:r)
if((s?h:t.w)!=null){t=A.hs(g,h)
s=i.ay.w
s.toString
s=t.cZ(s)
t=s}else t=""
t=A.aD(t)
s=i.b
s=A.aD(s!=null?A.hs(g,h).cZ(s):"")
q=A.aD(i.a2T())
p=i.f
p=A.aD(p==null?h:J.v(p,"email"))
o=i.ax
o=A.aD(o!=null?new A.K(o,new B.bAB(),A.U(o).i("K<1,i>")).bQ(0," | "):"")
n=A.aD(i.aKP())
m=i.z
m=A.aD(m==null?"":m)
l=A.aD("")
k=A.aD("")
j=i.Q
j=j==null?h:j.ax
return A.lk(A.y(["id",d,"order_symbol",f,"price",e,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"created_at",s,"data",q,"email",p,"ticket_products",o,"note",n,"note_hidden",m,"orders_history",l,"transactions",k,"forms",A.aD(j==null?"":j)],y.w,y.d),!1,y.b)},
ev(){var x=0,w=A.m(y.v),v=this
var $async$ev=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:x=2
return A.d(B.bbJ(v),$async$ev)
case 2:return A.k(null,w)}})
return A.l($async$ev,w)},
eR(){var x=0,w=A.m(y.v),v=this,u,t
var $async$eR=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.d(B.bc0(t,u),$async$eR)
case 2:return A.k(null,w)}})
return A.l($async$eR,w)},
ls(){return"Order #"+A.o(this.a)},
a2T(){var x=this.f,w=x==null,v=A.o(w?null:J.v(x,"name"))
return v+" "+A.o(w?null:J.v(x,"surname"))},
aKP(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.o(x==null?"":x)},
gbh(d){return this.a}}
B.hz.prototype={
b7(){return A.y(["state",this.e,"note_hidden",this.w],y.w,y.b)},
pa(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k=A.aD(k==null?0:k)
x=m.b
x=A.aD(x!=null?A.hs("yyyy-MM-dd",l).cZ(x):"")
w=m.d
w=A.aD(w==null?"":w)
v=m.e
if(v==null)v="ordered"
v=A.aD(v+";"+B.bAA(v))
u=m.r
u=A.aD(u==null?"":u)
t=m.w
t=A.aD(t==null?"":t)
s=m.Q
r=s!=null
q=A.aD(r?"Order #"+A.o(s.a):"")
s=A.aD(r?s.a2T():"")
r=m.z
r=A.aD(r!=null?new A.K(r,new B.bQn(),A.U(r).i("K<1,i>")).bQ(0," | "):"")
p=m.y
if(p!=null){o=p.z
o=o==null?l:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aD(p)
o=m.x
n=A.y(["id",k,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"ticketSpot",p,"price",A.aD(o!=null?C.jq(d,o,l,0):""),"ticketProductsEdit",A.aD("")],y.w,y.d)
k=m.Q.ax
n.H(0,B.cTe(k==null?A.a([],y.E):k))
return A.lk(n,!1,y.b)},
ev(){var x=0,w=A.m(y.v)
var $async$ev=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:return A.k(null,w)}})
return A.l($async$ev,w)},
eR(){var x=0,w=A.m(y.v),v=this,u,t
var $async$eR=A.h(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.d(B.bci(t,u),$async$eR)
case 2:return A.k(null,w)}})
return A.l($async$eR,w)},
ls(){var x=this.d
return x==null?J.ar(this.a):x},
gbh(d){return this.a}}
var z=a.updateTypes(["x(nK)","x(hz)","f?(nK)","x(hy)","i(i)"])
B.b4B.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.b4C.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.b4D.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.b4E.prototype={
$1(d){return d.d},
$S:z+2}
B.b4F.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:226}
B.b4G.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:E.b.fS(w,new B.b4A(d))}w=x==null?null:x.d
return w==null?"":w},
$S:1222}
B.b4A.prototype={
$1(d){return d.a==this.a},
$S:42}
B.b4H.prototype={
$1(d){return d.length!==0},
$S:17}
B.b4I.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bAB.prototype={
$1(d){return d.ls()},
$S:184}
B.bQn.prototype={
$1(d){return d.ls()},
$S:184}
B.bhR.prototype={
$1(d){return d.ls()},
$S:184};(function installTearOffs(){var x=a._static_1
x(B,"d3r","dme",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.j8,A.H)
w(A.ce,[B.b4B,B.b4C,B.b4D,B.b4E,B.b4F,B.b4G,B.b4A,B.b4H,B.b4I,B.bAB,B.bQn,B.bhR])
w(A.i8,[B.hy,B.hz])})()
A.c8(b.typeUniverse,JSON.parse('{"hy":{"i8":[]},"hz":{"i8":[]}}'))
var y={E:A.E("u<f_>"),q:A.E("B<f_>"),w:A.E("i"),d:A.E("h7"),b:A.E("@"),v:A.E("~")};(function constants(){var x=a.makeConstList
D.mV=A.a(x(["spot","food","others"]),A.E("u<i>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dJL","Od",()=>$.hQ().gmO(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_245",e:"endPart",h:b})})($__dart_deferred_initializers__,"ssa7ZzdhMHF6tIdDDkQVC6UZuPk=");