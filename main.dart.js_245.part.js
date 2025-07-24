((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_245",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,C,B={
cUD(d){var x=J.a_(d)
return new B.jy(x.h(d,"x"),x.h(d,"y"),x.h(d,"id"),x.h(d,"group"),x.h(d,"order_product_ticket"),x.h(d,"type"),x.h(d,"state"),x.h(d,"title"),null,x.h(d,"product"),null)},
jy:function jy(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b8i:function b8i(d){this.a=d},
b8j:function b8j(d){this.a=d},
b8k:function b8k(d){this.a=d},
b8l:function b8l(){},
b8m:function b8m(d){this.a=d},
b8n:function b8n(d){this.a=d},
b8h:function b8h(d){this.a=d},
b8o:function b8o(){},
b8p:function b8p(d){this.a=d},
d4B(d){var x,w,v,u,t,s,r,q=y.N,p=A.I(q,y.Y)
for(x=y.S,w=0;w<3;++w)p.m(0,D.n7[w],A.a([],x))
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.L)(d),++w){v=d[w]
u=v.Q
if(u==null)u=""
p.h(0,E.b.p(D.n7,u)?u:E.b.ga_(D.n7)).push(v)}t=A.I(q,y.h)
for(w=0;w<3;++w){s=D.n7[w]
if(p.h(0,s).length!==0){q=p.h(0,s)
q.toString
r=new A.G(q,new B.bmA(),A.O(q).i("G<1,l>")).bt(0," | ")}else r=""
t.m(0,s,new A.hr(new A.hK(),r))}return t},
bmA:function bmA(){},
B4:function B4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h},
d7O(d){var x="products",w=A.a([],y.o),v=J.a_(d),u=y.j
if(u.b(v.h(d,x))){u=J.aU(u.a(v.h(d,x)),new B.bGg(),y.f)
w=A.A(u,u.$ti.i("a0.E"))}return new B.rS(v.h(d,"id"),v.h(d,"note"),v.h(d,"ticket_symbol"),w)},
rS:function rS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bGg:function bGg(){},
Lq(d){var x=null
if(d.length===0)return A.n("Not Set",x)
switch(d){case"ordered":case"expired":return A.n("Ordered",x)
case"paid":return A.n("Paid",x)
case"sent":return A.n("Sent",x)
case"used":return A.n("Used",x)
case"storno":return A.n("Storno",x)
default:return d}},
dzE(d){return d+";"+B.Lq(d)},
d7R(d,e,f,g,h,i,j,k,l,m,n,o){return new B.i4(i,d,o,m,n,f,k,l,h,e,j,g)},
a71(d){var x,w,v,u,t,s,r,q,p,o=null,n="created_at",m="updated_at",l=J.a_(d),k=l.h(d,"data"),j=y.P.b(k)
if(j&&y.j.b(J.v(k,"tickets"))){x=J.aU(y.j.a(J.v(k,"tickets")),new B.bGv(),y.X)
w=A.A(x,x.$ti.i("a0.E"))}else w=o
x=l.h(d,"id")
v=l.h(d,n)!=null?A.dW(l.h(d,n)):o
u=l.h(d,m)!=null?A.dW(l.h(d,m)):o
t=l.h(d,"price")!=null?A.km(J.ap(l.h(d,"price"))):o
s=l.h(d,"currency_code")
r=l.h(d,"state")
j=j?J.v(k,"form"):o
q=l.h(d,"occasion")
p=l.h(d,"payment_info")
return B.d7R(v,s,k,w,j,x,l.h(d,"note_hidden"),q,p,t,r,u)},
i4:function i4(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.ch=_.ay=_.ax=_.as=_.Q=null
_.CW=o},
bGv:function bGv(){},
bGx:function bGx(){},
daq(d,e,f,g,h,i,j,k){return new B.hW(e,d,j,i,f,g)},
cYn(d){var x="created_at",w="updated_at",v=J.a_(d),u=v.h(d,"id"),t=v.h(d,x)!=null?A.dW(v.h(d,x)):null,s=v.h(d,w)!=null?A.dW(v.h(d,w)):null,r=v.h(d,"ticket_symbol"),q=v.h(d,"state"),p=v.h(d,"occasion")
return B.daq(t,u,v.h(d,"note"),v.h(d,"note_hidden"),p,q,r,s)},
hW:function hW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bXj:function bXj(){},
bgd(d){return B.ds2(d)},
ds2(d){var x=0,w=A.k(y.H),v
var $async$bgd=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.zp().c8("delete_order",A.w(["order_id",d.a],y.N,v),v),$async$bgd)
case 2:return A.i(null,w)}})
return A.j($async$bgd,w)},
bgz(d,e){return B.dsb(d,e)},
dsb(d,e){var x=0,w=A.k(y.H),v,u,t
var $async$bgz=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.z
u=J
t=J
x=2
return A.d($.zp().c8("update_order_note_hidden",A.w(["order_id",d,"new_note_hidden",e],y.N,v),v),$async$bgz)
case 2:if(!u.q(t.v(g,"code"),200))throw A.p(A.cF("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$bgz,w)},
bgU(d,e){return B.dsr(d,e)},
dsr(d,e){var x=0,w=A.k(y.H),v,u,t
var $async$bgU=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.z
u=J
t=J
x=2
return A.d($.Py().c8("update_ticket_note_hidden",A.w(["ticket_id",d,"new_note_hidden",e],y.N,v),v),$async$bgU)
case 2:if(!u.q(t.v(g,"code"),200))throw A.p(A.cF("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$bgU,w)}},D,F
J=c[1]
A=c[0]
E=c[2]
C=c[100]
B=a.updateHolder(c[77],B)
D=c[299]
F=c[132]
B.jy.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
aZ(){var x,w,v=this,u=A.I(y.N,y.z)
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
bFx(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.ch(k,new B.b8i(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.ch(k,new B.b8j(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.O(k)
t=u.i("db<1,m?>")
k=A.A(new A.db(new A.a7(k,new B.b8k(w),u.i("a7<1>")),new B.b8l(),t),t.i("y.E"))
v=k}}if(v==null)s=l
else{k=A.O(v)
u=k.i("db<1,l>")
u=new A.a7(new A.db(new A.a7(v,new B.b8m(m),k.i("a7<1>")),new B.b8n(m),u),new B.b8o(),u.i("a7<y.E>")).bt(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:E.b.fs(k,new B.b8p(x))}k=r==null
q=k?l:r.aN6()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.tD()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+k:""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.o(k)+" "+u+"\n"+C.TU()+" "+A.o(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.n("Price",l)
n=m.x
n=n==null?l:n.r
return A.o(k)+" "+u+"\n"+t+": "+C.ep(d,n==null?0:n,l,0)},
gbb(d){return this.c},
gbD(d){return this.w},
sI4(d){return this.as=d}}
B.B4.prototype={
j(d){var x=this.d
return x==null?"Product #"+A.o(this.a):x},
gbb(d){return this.a},
gbD(d){return this.d}}
B.rS.prototype={
gbb(d){return this.a}}
B.i4.prototype={
bQq(){var x,w
if(this.e==="ordered"){x=this.ay
x=x==null||x.w==null}else x=!0
if(x)return!1
w=A.cj(F.tf().a.gdt(),F.tf().a.gdl(),F.tf().a.geg(),0,0,0,0,0)
x=this.ay.w
x.toString
return w.f0(A.cj(A.dM(x),A.eK(x),A.j8(x),0,0,0,0,0))},
aZ(){var x,w=this,v=w.b
v=v==null?null:v.fM()
x=w.c
x=x==null?null:x.fM()
return A.w(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.N,y.z)},
lW(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="yyyy-MM-dd",f=i.a,e=f==null,d=A.ax(e?0:f)
f=A.ax(e?0:f)
e=i.d
e=A.ax(e!=null?C.ep(a0,e,i.y,0):"")
x=i.e
if(x==null)x="ordered"
x=A.ax(x+";"+B.Lq(x))
w=i.ay
if((w==null?h:w.e)!=null){v=w.e
v.toString
w=C.ep(a0,v,w.x,0)}else w=""
w=A.ax(w)
v=i.ay
if((v==null?h:v.f)!=null){u=v.f
u.toString
v=C.ep(a0,u,v.x,0)}else v=""
v=A.ax(v)
u=i.ay
if((u==null?h:u.r)!=null){t=u.r
t.toString
u=C.ep(a0,t,u.x,0)}else u=""
u=A.ax(u)
t=i.ay
s=t==null
r=s?h:t.d
r=A.ax(r==null?0:r)
if((s?h:t.w)!=null){t=A.fU(g,h)
s=i.ay.w
s.toString
s=t.cm(s)
t=s}else t=""
t=A.ax(t)
s=i.b
s=A.ax(s!=null?A.fU(g,h).cm(s):"")
q=A.ax(i.tD())
p=i.f
p=A.ax(p==null?h:J.v(p,"email"))
o=i.ax
o=A.ax(o!=null?new A.G(o,new B.bGx(),A.O(o).i("G<1,l>")).bt(0," | "):"")
n=A.ax(i.aN6())
m=i.z
m=A.ax(m==null?"":m)
l=A.ax("")
k=A.ax("")
j=i.Q
j=j==null?h:j.j(0)
return A.k2(A.w(["orderId",d,"orderSymbol",f,"orderPrice",e,"orderState",x,"paymentInfoAmount",w,"paymentInfoPaid",v,"paymentInfoReturned",u,"paymentInfoVariableSymbol",r,"orderDataDeadline",t,"orderCreatedAt",s,"orderData",q,"orderEmail",p,"ticketProducts",o,"orderDataNote",n,"orderDataNoteHidden",m,"orderHistory",l,"orderTransactions",k,"orderForm",A.ax(j==null?"":j),"isReminderSent",A.ax(String(i.ay.z))],y.N,y.h),!1,y.z)},
dw(d){return this.bKl(d)},
bKl(d){var x=0,w=A.k(y.H),v=this
var $async$dw=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=2
return A.d(B.bgd(v),$async$dw)
case 2:return A.i(null,w)}})
return A.j($async$dw,w)},
dS(d){return this.bZC(d)},
bZC(d){var x=0,w=A.k(y.H),v=this,u,t
var $async$dS=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.d(B.bgz(t,u),$async$dS)
case 2:return A.i(null,w)}})
return A.j($async$dS,w)},
iQ(){return"Order #"+A.o(this.a)},
tD(){var x=this.f,w=x==null,v=A.o(w?null:J.v(x,"name"))
return v+" "+A.o(w?null:J.v(x,"surname"))},
aN6(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.o(x==null?"":x)},
gbb(d){return this.a}}
B.hW.prototype={
aZ(){return A.w(["state",this.e,"note_hidden",this.w],y.N,y.z)},
lW(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k=A.ax(k==null?0:k)
x=m.b
x=A.ax(x!=null?A.fU("yyyy-MM-dd",l).cm(x):"")
w=m.d
w=A.ax(w==null?"":w)
v=m.e
if(v==null)v="ordered"
v=A.ax(v+";"+B.Lq(v))
u=m.r
u=A.ax(u==null?"":u)
t=m.w
t=A.ax(t==null?"":t)
s=m.Q
r=s!=null
q=A.ax(r?"Order #"+A.o(s.a):"")
s=A.ax(r?s.tD():"")
r=m.z
r=A.ax(r!=null?new A.G(r,new B.bXj(),A.O(r).i("G<1,l>")).bt(0," | "):"")
p=m.y
if(p!=null){o=p.z
o=o==null?l:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.ax(p)
o=m.x
n=A.w(["ticketId",k,"ticketCreatedAt",x,"ticketSymbol",w,"ticketState",v,"ticketNote",u,"ticketNoteHidden",t,"orderSymbol",q,"orderData",s,"ticketProducts",r,"ticketSpot",p,"ticketTotalPrice",A.ax(o!=null?C.ep(d,o,l,0):""),"ticketProductsEdit",A.ax("")],y.N,y.h)
k=m.z
n.E(0,B.d4B(k==null?A.a([],y.S):k))
return A.k2(n,!1,y.z)},
dw(d){return this.bKs(d)},
bKs(d){var x=0,w=A.k(y.H)
var $async$dw=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:return A.i(null,w)}})
return A.j($async$dw,w)},
dS(d){return this.bZJ(d)},
bZJ(d){var x=0,w=A.k(y.H),v=this,u,t
var $async$dS=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.d(B.bgU(t,u),$async$dS)
case 2:return A.i(null,w)}})
return A.j($async$dS,w)},
iQ(){var x=this.d
return x==null?J.ap(this.a):x},
gbb(d){return this.a}}
var z=a.updateTypes(["x(hW)","B4(@)","rS(@)","l(l)"])
B.b8i.prototype={
$1(d){return d.a==this.a.e},
$S:389}
B.b8j.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.b8k.prototype={
$1(d){return d.e==this.a.a},
$S:389}
B.b8l.prototype={
$1(d){return d.d},
$S:228}
B.b8m.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:134}
B.b8n.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:E.b.fs(w,new B.b8h(d))}w=x==null?null:x.d
return w==null?"":w},
$S:1321}
B.b8h.prototype={
$1(d){return d.a==this.a},
$S:27}
B.b8o.prototype={
$1(d){return d.length!==0},
$S:17}
B.b8p.prototype={
$1(d){return d.a==this.a.c},
$S:177}
B.bmA.prototype={
$1(d){return d.iQ()},
$S:151}
B.bGg.prototype={
$1(d){var x,w,v,u,t
y.P.a(d)
x=J.a_(d)
w=x.h(d,"id")
v=x.h(d,"type")
u=x.h(d,"price")!=null?A.km(J.ap(x.h(d,"price"))):null
t=x.h(d,"title")
x.h(d,"type_title")
return new B.B4(w,v,u,t,x.h(d,"currency_code"))},
$S:z+1}
B.bGv.prototype={
$1(d){return B.d7O(y.P.a(d))},
$S:z+2}
B.bGx.prototype={
$1(d){return d.iQ()},
$S:151}
B.bXj.prototype={
$1(d){return d.iQ()},
$S:151};(function installTearOffs(){var x=a._static_1
x(B,"dfW","dzE",3)})();(function inheritance(){var x=a.inheritMany
x(A.H,[B.jy,B.B4,B.rS])
x(A.cl,[B.b8i,B.b8j,B.b8k,B.b8l,B.b8m,B.b8n,B.b8h,B.b8o,B.b8p,B.bmA,B.bGg,B.bGv,B.bGx,B.bXj])
x(A.h5,[B.i4,B.hW])})()
A.cf(b.typeUniverse,JSON.parse('{"i4":{"h5":[]},"hW":{"h5":[]},"iV":{"h5":[]}}'))
var y=(function rtii(){var x=A.F
return{o:x("u<B4>"),S:x("u<dl>"),Y:x("D<dl>"),j:x("D<@>"),P:x("z<l,@>"),f:x("B4"),X:x("rS"),N:x("l"),h:x("hr"),z:x("@"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.n7=A.a(x(["spot","food","others"]),A.F("u<l>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dY5","Py",()=>$.hu().glM(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_245",e:"endPart",h:b})})($__dart_deferred_initializers__,"fJ7WewA1s7xhPnA0m+0jdoaBuv0=");