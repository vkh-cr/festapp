((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,C,B={
d_o(d){var x=J.a1(d)
return new B.jE(x.h(d,"x"),x.h(d,"y"),x.h(d,"id"),x.h(d,"group"),x.h(d,"order_product_ticket"),x.h(d,"type"),x.h(d,"state"),x.h(d,"title"),null,x.h(d,"product"),null)},
jE:function jE(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bb_:function bb_(d){this.a=d},
bb0:function bb0(d){this.a=d},
bb1:function bb1(d){this.a=d},
bb2:function bb2(){},
bb3:function bb3(d){this.a=d},
bb4:function bb4(d){this.a=d},
baZ:function baZ(d){this.a=d},
bb5:function bb5(){},
bb6:function bb6(d){this.a=d},
daw(d){var x,w,v,u,t,s,r,q=y.N,p=A.I(q,y.Y)
for(x=y.S,w=0;w<3;++w)p.m(0,D.nr[w],A.b([],x))
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.K)(d),++w){v=d[w]
u=v.Q
if(u==null)u=""
p.h(0,E.b.p(D.nr,u)?u:E.b.ga4(D.nr)).push(v)}t=A.I(q,y.h)
for(w=0;w<3;++w){s=D.nr[w]
if(p.h(0,s).length!==0){q=p.h(0,s)
q.toString
r=new A.F(q,new B.bpi(),A.O(q).i("F<1,f>")).bt(0," | ")}else r=""
t.m(0,s,A.av(r))}return t},
bpi:function bpi(){},
BL:function BL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h},
ddS(d){var x="products",w=A.b([],y.o),v=J.a1(d),u=y.j
if(u.b(v.h(d,x))){u=J.aY(u.a(v.h(d,x)),new B.bJ7(),y.f)
w=A.A(u,u.$ti.i("a_.E"))}return new B.ta(v.h(d,"id"),v.h(d,"note"),v.h(d,"ticket_symbol"),w)},
ta:function ta(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJ7:function bJ7(){},
Me(d){var x=null
if(d.length===0)return A.n("Not Set",x,x)
switch(d){case"ordered":case"expired":return A.n("Ordered",x,x)
case"paid":return A.n("Paid",x,x)
case"sent":return A.n("Sent",x,x)
case"used":return A.n("Used",x,x)
case"storno":return A.n("Storno",x,x)
default:return d}},
dD9(d){return d+";"+B.Me(d)},
ddV(d,e,f,g,h,i,j,k,l,m,n,o){return new B.hy(i,d,o,m,n,f,k,l,h,e,j,g)},
UJ(d){var x,w,v,u,t,s,r,q,p,o=null,n="created_at",m="updated_at",l=J.a1(d),k=l.h(d,"data"),j=y.P.b(k)
if(j&&y.j.b(J.v(k,"tickets"))){x=J.aY(y.j.a(J.v(k,"tickets")),new B.bJm(),y.X)
w=A.A(x,x.$ti.i("a_.E"))}else w=o
x=l.h(d,"id")
v=l.h(d,n)!=null?A.e9(l.h(d,n)):o
u=l.h(d,m)!=null?A.e9(l.h(d,m)):o
t=l.h(d,"price")!=null?A.kw(J.aq(l.h(d,"price"))):o
s=l.h(d,"currency_code")
r=l.h(d,"state")
j=j?J.v(k,"form"):o
q=l.h(d,"occasion")
p=l.h(d,"payment_info")
return B.ddV(v,s,k,w,j,x,l.h(d,"note_hidden"),q,p,t,r,u)},
hy:function hy(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bJm:function bJm(){},
bJo:function bJo(){},
dgE(d,e,f,g,h,i,j,k){return new B.hB(e,d,j,i,f,g)},
c_w(d){var x="created_at",w="updated_at",v=J.a1(d),u=v.h(d,"id"),t=v.h(d,x)!=null?A.e9(v.h(d,x)):null,s=v.h(d,w)!=null?A.e9(v.h(d,w)):null,r=v.h(d,"ticket_symbol"),q=v.h(d,"state"),p=v.h(d,"occasion")
return B.dgE(t,u,v.h(d,"note"),v.h(d,"note_hidden"),p,q,r,s)},
hB:function hB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
c_x:function c_x(){},
biN(d){var x=0,w=A.l(y.H),v
var $async$biN=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.A_().c6("delete_order",A.w(["order_id",d.a],y.N,v),v),$async$biN)
case 2:return A.j(null,w)}})
return A.k($async$biN,w)},
bj8(d,e){var x=0,w=A.l(y.H),v,u,t
var $async$bj8=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.z
u=J
t=J
x=2
return A.d($.A_().c6("update_order_note_hidden",A.w(["order_id",d,"new_note_hidden",e],y.N,v),v),$async$bj8)
case 2:if(!u.q(t.v(g,"code"),200))throw A.p(A.cN("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$bj8,w)},
bjt(d,e){var x=0,w=A.l(y.H),v,u,t
var $async$bjt=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.z
u=J
t=J
x=2
return A.d($.J_().c6("update_ticket_note_hidden",A.w(["ticket_id",d,"new_note_hidden",e],y.N,v),v),$async$bjt)
case 2:if(!u.q(t.v(g,"code"),200))throw A.p(A.cN("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$bjt,w)}},D,F
J=c[1]
A=c[0]
E=c[2]
C=c[98]
B=a.updateHolder(c[75],B)
D=c[299]
F=c[132]
B.jE.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
b_(){var x,w,v=this,u=A.I(y.N,y.z)
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
bIC(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.c8(k,new B.bb_(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.c8(k,new B.bb0(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.O(k)
t=u.i("d8<1,m?>")
k=A.A(new A.d8(new A.a8(k,new B.bb1(w),u.i("a8<1>")),new B.bb2(),t),t.i("y.E"))
v=k}}if(v==null)s=l
else{k=A.O(v)
u=k.i("d8<1,f>")
u=new A.a8(new A.d8(new A.a8(v,new B.bb3(m),k.i("a8<1>")),new B.bb4(m),u),new B.bb5(),u.i("a8<y.E>")).bt(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:E.b.fd(k,new B.bb6(x))}k=r==null
q=k?l:r.aPh()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.tW()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+k:""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.o(k)+" "+u+"\n"+C.UK()+" "+A.o(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.n("Price",l,l)
n=m.x
n=n==null?l:n.r
return A.o(k)+" "+u+"\n"+t+": "+C.eu(d,n==null?0:n,l,0)},
gbd(d){return this.c},
gbu(d){return this.w},
sIF(d){return this.as=d}}
B.BL.prototype={
j(d){var x=this.d
return x==null?"Product #"+A.o(this.a):x},
gbd(d){return this.a},
gbu(d){return this.d}}
B.ta.prototype={
gbd(d){return this.a}}
B.hy.prototype={
bU7(){var x,w
if(this.e==="ordered"){x=this.ay
x=x==null||x.w==null}else x=!0
if(x)return!1
w=A.cm(F.tC().a.gdM(),F.tC().a.gdG(),F.tC().a.geq(),0,0,0,0,0)
x=this.ay.w
x.toString
return w.eU(A.cm(A.e3(x),A.f5(x),A.j8(x),0,0,0,0,0))},
b_(){var x,w=this,v=w.b
v=v==null?null:v.fV()
x=w.c
x=x==null?null:x.fV()
return A.w(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.N,y.z)},
m4(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="yyyy-MM-dd",f=i.a,e=f==null,d=A.av(e?0:f)
f=A.av(e?0:f)
e=i.d
e=A.av(e!=null?C.eu(a0,e,i.y,0):"")
x=i.e
if(x==null)x="ordered"
x=A.av(x+";"+B.Me(x))
w=i.ay
if((w==null?h:w.e)!=null){v=w.e
v.toString
w=C.eu(a0,v,w.x,0)}else w=""
w=A.av(w)
v=i.ay
if((v==null?h:v.f)!=null){u=v.f
u.toString
v=C.eu(a0,u,v.x,0)}else v=""
v=A.av(v)
u=i.ay
if((u==null?h:u.r)!=null){t=u.r
t.toString
u=C.eu(a0,t,u.x,0)}else u=""
u=A.av(u)
t=i.ay
s=t==null
r=s?h:t.d
r=A.av(r==null?0:r)
if((s?h:t.w)!=null){t=A.he(g,h)
s=i.ay.w
s.toString
s=t.cp(s)
t=s}else t=""
t=A.av(t)
s=i.b
s=A.av(s!=null?A.he(g,h).cp(s):"")
q=A.av(i.tW())
p=i.f
p=A.av(p==null?h:J.v(p,"email"))
o=i.ax
o=A.av(o!=null?new A.F(o,new B.bJo(),A.O(o).i("F<1,f>")).bt(0," | "):"")
n=A.av(i.aPh())
m=i.z
m=A.av(m==null?"":m)
l=A.av("")
k=A.av("")
j=i.Q
j=j==null?h:j.j(0)
return A.m2(A.w(["orderId",d,"orderSymbol",f,"orderPrice",e,"orderState",x,"paymentInfoAmount",w,"paymentInfoPaid",v,"paymentInfoReturned",u,"paymentInfoVariableSymbol",r,"orderDataDeadline",t,"orderCreatedAt",s,"orderData",q,"orderEmail",p,"ticketProducts",o,"orderDataNote",n,"orderDataNoteHidden",m,"orderHistory",l,"orderTransactions",k,"orderForm",A.av(j==null?"":j),"isReminderSent",A.av(String(i.ay.z))],y.N,y.h),!1,y.z)},
dL(d){return this.bO1(d)},
bO1(d){var x=0,w=A.l(y.H),v=this
var $async$dL=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=2
return A.d(B.biN(v),$async$dL)
case 2:return A.j(null,w)}})
return A.k($async$dL,w)},
e4(d){return this.c2h(d)},
c2h(d){var x=0,w=A.l(y.H),v=this,u,t
var $async$e4=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.d(B.bj8(t,u),$async$e4)
case 2:return A.j(null,w)}})
return A.k($async$e4,w)},
j1(){return"Order #"+A.o(this.a)},
tW(){var x=this.f,w=x==null,v=A.o(w?null:J.v(x,"name"))
return v+" "+A.o(w?null:J.v(x,"surname"))},
aPh(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.o(x==null?"":x)},
gbd(d){return this.a}}
B.hB.prototype={
b_(){return A.w(["state",this.e,"note_hidden",this.w],y.N,y.z)},
m4(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k=A.av(k==null?0:k)
x=m.b
x=A.av(x!=null?A.he("yyyy-MM-dd",l).cp(x):"")
w=m.d
w=A.av(w==null?"":w)
v=m.e
if(v==null)v="ordered"
v=A.av(v+";"+B.Me(v))
u=m.r
u=A.av(u==null?"":u)
t=m.w
t=A.av(t==null?"":t)
s=m.Q
r=s!=null
q=A.av(r?"Order #"+A.o(s.a):"")
s=A.av(r?s.tW():"")
r=m.z
r=A.av(r!=null?new A.F(r,new B.c_x(),A.O(r).i("F<1,f>")).bt(0," | "):"")
p=m.y
if(p!=null){o=p.z
o=o==null?l:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.av(p)
o=m.x
n=A.w(["ticketId",k,"ticketCreatedAt",x,"ticketSymbol",w,"ticketState",v,"ticketNote",u,"ticketNoteHidden",t,"orderSymbol",q,"orderData",s,"ticketProducts",r,"ticketSpot",p,"ticketTotalPrice",A.av(o!=null?C.eu(d,o,l,0):""),"ticketProductsEdit",A.av(""),"confirmTicket",A.av("")],y.N,y.h)
k=m.z
n.F(0,B.daw(k==null?A.b([],y.S):k))
return A.m2(n,!1,y.z)},
dL(d){return this.bO8(d)},
bO8(d){var x=0,w=A.l(y.H)
var $async$dL=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:return A.j(null,w)}})
return A.k($async$dL,w)},
e4(d){return this.c2o(d)},
c2o(d){var x=0,w=A.l(y.H),v=this,u,t
var $async$e4=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.d(B.bjt(t,u),$async$e4)
case 2:return A.j(null,w)}})
return A.k($async$e4,w)},
j1(){var x=this.d
return x==null?J.aq(this.a):x},
gbd(d){return this.a}}
var z=a.updateTypes(["BL(@)","ta(@)","f(f)"])
B.bb_.prototype={
$1(d){return d.a==this.a.e},
$S:451}
B.bb0.prototype={
$1(d){return d.a==this.a.e},
$S:513}
B.bb1.prototype={
$1(d){return d.e==this.a.a},
$S:451}
B.bb2.prototype={
$1(d){return d.d},
$S:173}
B.bb3.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:160}
B.bb4.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:E.b.fd(w,new B.baZ(d))}w=x==null?null:x.d
return w==null?"":w},
$S:1365}
B.baZ.prototype={
$1(d){return d.a==this.a},
$S:28}
B.bb5.prototype={
$1(d){return d.length!==0},
$S:13}
B.bb6.prototype={
$1(d){return d.a==this.a.c},
$S:189}
B.bpi.prototype={
$1(d){return d.j1()},
$S:155}
B.bJ7.prototype={
$1(d){var x,w,v,u,t
y.P.a(d)
x=J.a1(d)
w=x.h(d,"id")
v=x.h(d,"type")
u=x.h(d,"price")!=null?A.kw(J.aq(x.h(d,"price"))):null
t=x.h(d,"title")
x.h(d,"type_title")
return new B.BL(w,v,u,t,x.h(d,"currency_code"))},
$S:z+0}
B.bJm.prototype={
$1(d){return B.ddS(y.P.a(d))},
$S:z+1}
B.bJo.prototype={
$1(d){return d.j1()},
$S:155}
B.c_x.prototype={
$1(d){return d.j1()},
$S:155};(function installTearOffs(){var x=a._static_1
x(B,"dmn","dD9",2)})();(function inheritance(){var x=a.inheritMany
x(A.G,[B.jE,B.BL,B.ta])
x(A.cq,[B.bb_,B.bb0,B.bb1,B.bb2,B.bb3,B.bb4,B.baZ,B.bb5,B.bb6,B.bpi,B.bJ7,B.bJm,B.bJo,B.c_x])
x(A.h1,[B.hy,B.hB])})()
A.ch(b.typeUniverse,JSON.parse('{"hy":{"h1":[]},"hB":{"h1":[]},"iU":{"h1":[]}}'))
var y=(function rtii(){var x=A.J
return{o:x("u<BL>"),S:x("u<ds>"),Y:x("E<ds>"),j:x("E<@>"),P:x("B<f,@>"),f:x("BL"),X:x("ta"),N:x("f"),h:x("kE"),z:x("@"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.nr=x(["spot","food","others"],A.J("u<f>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e0V","J_",()=>$.hD().glV(0))})()};
(a=>{a["mEY0DMGGb4ofRXCAfkcMNCQbGAs="]=a.current})($__dart_deferred_initializers__);