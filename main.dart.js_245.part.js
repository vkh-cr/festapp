((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_245",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,C,B={
cVz(d){var x=J.a0(d)
return new B.jB(x.h(d,"x"),x.h(d,"y"),x.h(d,"id"),x.h(d,"group"),x.h(d,"order_product_ticket"),x.h(d,"type"),x.h(d,"state"),x.h(d,"title"),null,x.h(d,"product"),null)},
jB:function jB(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b8l:function b8l(d){this.a=d},
b8m:function b8m(d){this.a=d},
b8n:function b8n(d){this.a=d},
b8o:function b8o(){},
b8p:function b8p(d){this.a=d},
b8q:function b8q(d){this.a=d},
b8k:function b8k(d){this.a=d},
b8r:function b8r(){},
b8s:function b8s(d){this.a=d},
d5u(d){var x,w,v,u,t,s,r,q=y.N,p=A.I(q,y.Y)
for(x=y.S,w=0;w<3;++w)p.m(0,D.na[w],A.a([],x))
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.K)(d),++w){v=d[w]
u=v.Q
if(u==null)u=""
p.h(0,E.b.p(D.na,u)?u:E.b.ga1(D.na)).push(v)}t=A.I(q,y.h)
for(w=0;w<3;++w){s=D.na[w]
if(p.h(0,s).length!==0){q=p.h(0,s)
q.toString
r=new A.F(q,new B.bmN(),A.O(q).i("F<1,f>")).bs(0," | ")}else r=""
t.m(0,s,new A.hv(new A.hN(),r))}return t},
bmN:function bmN(){},
B6:function B6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h},
d8H(d){var x="products",w=A.a([],y.o),v=J.a0(d),u=y.j
if(u.b(v.h(d,x))){u=J.aR(u.a(v.h(d,x)),new B.bGt(),y.f)
w=A.A(u,u.$ti.i("a_.E"))}return new B.rS(v.h(d,"id"),v.h(d,"note"),v.h(d,"ticket_symbol"),w)},
rS:function rS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bGt:function bGt(){},
Lp(d){var x=null
if(d.length===0)return A.n("Not Set",x,x)
switch(d){case"ordered":case"expired":return A.n("Ordered",x,x)
case"paid":return A.n("Paid",x,x)
case"sent":return A.n("Sent",x,x)
case"used":return A.n("Used",x,x)
case"storno":return A.n("Storno",x,x)
default:return d}},
dAu(d){return d+";"+B.Lp(d)},
d8K(d,e,f,g,h,i,j,k,l,m,n,o){return new B.hr(i,d,o,m,n,f,k,l,h,e,j,g)},
TX(d){var x,w,v,u,t,s,r,q,p,o=null,n="created_at",m="updated_at",l=J.a0(d),k=l.h(d,"data"),j=y.P.b(k)
if(j&&y.j.b(J.v(k,"tickets"))){x=J.aR(y.j.a(J.v(k,"tickets")),new B.bGI(),y.X)
w=A.A(x,x.$ti.i("a_.E"))}else w=o
x=l.h(d,"id")
v=l.h(d,n)!=null?A.e7(l.h(d,n)):o
u=l.h(d,m)!=null?A.e7(l.h(d,m)):o
t=l.h(d,"price")!=null?A.kn(J.aq(l.h(d,"price"))):o
s=l.h(d,"currency_code")
r=l.h(d,"state")
j=j?J.v(k,"form"):o
q=l.h(d,"occasion")
p=l.h(d,"payment_info")
return B.d8K(v,s,k,w,j,x,l.h(d,"note_hidden"),q,p,t,r,u)},
hr:function hr(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bGI:function bGI(){},
bGK:function bGK(){},
dbk(d,e,f,g,h,i,j,k){return new B.hu(e,d,j,i,f,g)},
bXD(d){var x="created_at",w="updated_at",v=J.a0(d),u=v.h(d,"id"),t=v.h(d,x)!=null?A.e7(v.h(d,x)):null,s=v.h(d,w)!=null?A.e7(v.h(d,w)):null,r=v.h(d,"ticket_symbol"),q=v.h(d,"state"),p=v.h(d,"occasion")
return B.dbk(t,u,v.h(d,"note"),v.h(d,"note_hidden"),p,q,r,s)},
hu:function hu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bXE:function bXE(){},
bgi(d){return B.dsT(d)},
dsT(d){var x=0,w=A.l(y.H),v
var $async$bgi=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.zp().c6("delete_order",A.w(["order_id",d.a],y.N,v),v),$async$bgi)
case 2:return A.j(null,w)}})
return A.k($async$bgi,w)},
bgE(d,e){return B.dt1(d,e)},
dt1(d,e){var x=0,w=A.l(y.H),v,u,t
var $async$bgE=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.z
u=J
t=J
x=2
return A.d($.zp().c6("update_order_note_hidden",A.w(["order_id",d,"new_note_hidden",e],y.N,v),v),$async$bgE)
case 2:if(!u.q(t.v(g,"code"),200))throw A.p(A.cJ("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$bgE,w)},
bgZ(d,e){return B.dth(d,e)},
dth(d,e){var x=0,w=A.l(y.H),v,u,t
var $async$bgZ=A.h(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.z
u=J
t=J
x=2
return A.d($.PB().c6("update_ticket_note_hidden",A.w(["ticket_id",d,"new_note_hidden",e],y.N,v),v),$async$bgZ)
case 2:if(!u.q(t.v(g,"code"),200))throw A.p(A.cJ("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$bgZ,w)}},D,F
J=c[1]
A=c[0]
E=c[2]
C=c[100]
B=a.updateHolder(c[77],B)
D=c[299]
F=c[132]
B.jB.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
aY(){var x,w,v=this,u=A.I(y.N,y.z)
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
bFN(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.cd(k,new B.b8l(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.cd(k,new B.b8m(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.O(k)
t=u.i("dc<1,m?>")
k=A.A(new A.dc(new A.a7(k,new B.b8n(w),u.i("a7<1>")),new B.b8o(),t),t.i("x.E"))
v=k}}if(v==null)s=l
else{k=A.O(v)
u=k.i("dc<1,f>")
u=new A.a7(new A.dc(new A.a7(v,new B.b8p(m),k.i("a7<1>")),new B.b8q(m),u),new B.b8r(),u.i("a7<x.E>")).bs(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:E.b.fk(k,new B.b8s(x))}k=r==null
q=k?l:r.aNg()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.tB()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+k:""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.o(k)+" "+u+"\n"+C.TY()+" "+A.o(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.n("Price",l,l)
n=m.x
n=n==null?l:n.r
return A.o(k)+" "+u+"\n"+t+": "+C.eq(d,n==null?0:n,l,0)},
gbb(d){return this.c},
gbD(d){return this.w},
sI4(d){return this.as=d}}
B.B6.prototype={
j(d){var x=this.d
return x==null?"Product #"+A.o(this.a):x},
gbb(d){return this.a},
gbD(d){return this.d}}
B.rS.prototype={
gbb(d){return this.a}}
B.hr.prototype={
bQD(){var x,w
if(this.e==="ordered"){x=this.ay
x=x==null||x.w==null}else x=!0
if(x)return!1
w=A.cg(F.tg().a.gds(),F.tg().a.gdk(),F.tg().a.geg(),0,0,0,0,0)
x=this.ay.w
x.toString
return w.eP(A.cg(A.dK(x),A.eM(x),A.jc(x),0,0,0,0,0))},
aY(){var x,w=this,v=w.b
v=v==null?null:v.fO()
x=w.c
x=x==null?null:x.fO()
return A.w(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.N,y.z)},
lQ(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="yyyy-MM-dd",f=i.a,e=f==null,d=A.ax(e?0:f)
f=A.ax(e?0:f)
e=i.d
e=A.ax(e!=null?C.eq(a0,e,i.y,0):"")
x=i.e
if(x==null)x="ordered"
x=A.ax(x+";"+B.Lp(x))
w=i.ay
if((w==null?h:w.e)!=null){v=w.e
v.toString
w=C.eq(a0,v,w.x,0)}else w=""
w=A.ax(w)
v=i.ay
if((v==null?h:v.f)!=null){u=v.f
u.toString
v=C.eq(a0,u,v.x,0)}else v=""
v=A.ax(v)
u=i.ay
if((u==null?h:u.r)!=null){t=u.r
t.toString
u=C.eq(a0,t,u.x,0)}else u=""
u=A.ax(u)
t=i.ay
s=t==null
r=s?h:t.d
r=A.ax(r==null?0:r)
if((s?h:t.w)!=null){t=A.fW(g,h)
s=i.ay.w
s.toString
s=t.ck(s)
t=s}else t=""
t=A.ax(t)
s=i.b
s=A.ax(s!=null?A.fW(g,h).ck(s):"")
q=A.ax(i.tB())
p=i.f
p=A.ax(p==null?h:J.v(p,"email"))
o=i.ax
o=A.ax(o!=null?new A.F(o,new B.bGK(),A.O(o).i("F<1,f>")).bs(0," | "):"")
n=A.ax(i.aNg())
m=i.z
m=A.ax(m==null?"":m)
l=A.ax("")
k=A.ax("")
j=i.Q
j=j==null?h:j.j(0)
return A.k4(A.w(["orderId",d,"orderSymbol",f,"orderPrice",e,"orderState",x,"paymentInfoAmount",w,"paymentInfoPaid",v,"paymentInfoReturned",u,"paymentInfoVariableSymbol",r,"orderDataDeadline",t,"orderCreatedAt",s,"orderData",q,"orderEmail",p,"ticketProducts",o,"orderDataNote",n,"orderDataNoteHidden",m,"orderHistory",l,"orderTransactions",k,"orderForm",A.ax(j==null?"":j),"isReminderSent",A.ax(String(i.ay.z))],y.N,y.h),!1,y.z)},
dA(d){return this.bKy(d)},
bKy(d){var x=0,w=A.l(y.H),v=this
var $async$dA=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=2
return A.d(B.bgi(v),$async$dA)
case 2:return A.j(null,w)}})
return A.k($async$dA,w)},
dT(d){return this.bZN(d)},
bZN(d){var x=0,w=A.l(y.H),v=this,u,t
var $async$dT=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.d(B.bgE(t,u),$async$dT)
case 2:return A.j(null,w)}})
return A.k($async$dT,w)},
iQ(){return"Order #"+A.o(this.a)},
tB(){var x=this.f,w=x==null,v=A.o(w?null:J.v(x,"name"))
return v+" "+A.o(w?null:J.v(x,"surname"))},
aNg(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.o(x==null?"":x)},
gbb(d){return this.a}}
B.hu.prototype={
aY(){return A.w(["state",this.e,"note_hidden",this.w],y.N,y.z)},
lQ(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k=A.ax(k==null?0:k)
x=m.b
x=A.ax(x!=null?A.fW("yyyy-MM-dd",l).ck(x):"")
w=m.d
w=A.ax(w==null?"":w)
v=m.e
if(v==null)v="ordered"
v=A.ax(v+";"+B.Lp(v))
u=m.r
u=A.ax(u==null?"":u)
t=m.w
t=A.ax(t==null?"":t)
s=m.Q
r=s!=null
q=A.ax(r?"Order #"+A.o(s.a):"")
s=A.ax(r?s.tB():"")
r=m.z
r=A.ax(r!=null?new A.F(r,new B.bXE(),A.O(r).i("F<1,f>")).bs(0," | "):"")
p=m.y
if(p!=null){o=p.z
o=o==null?l:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.ax(p)
o=m.x
n=A.w(["ticketId",k,"ticketCreatedAt",x,"ticketSymbol",w,"ticketState",v,"ticketNote",u,"ticketNoteHidden",t,"orderSymbol",q,"orderData",s,"ticketProducts",r,"ticketSpot",p,"ticketTotalPrice",A.ax(o!=null?C.eq(d,o,l,0):""),"ticketProductsEdit",A.ax("")],y.N,y.h)
k=m.z
n.E(0,B.d5u(k==null?A.a([],y.S):k))
return A.k4(n,!1,y.z)},
dA(d){return this.bKF(d)},
bKF(d){var x=0,w=A.l(y.H)
var $async$dA=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:return A.j(null,w)}})
return A.k($async$dA,w)},
dT(d){return this.bZU(d)},
bZU(d){var x=0,w=A.l(y.H),v=this,u,t
var $async$dT=A.h(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.d(B.bgZ(t,u),$async$dT)
case 2:return A.j(null,w)}})
return A.k($async$dT,w)},
iQ(){var x=this.d
return x==null?J.aq(this.a):x},
gbb(d){return this.a}}
var z=a.updateTypes(["B6(@)","rS(@)","f(f)"])
B.b8l.prototype={
$1(d){return d.a==this.a.e},
$S:419}
B.b8m.prototype={
$1(d){return d.a==this.a.e},
$S:349}
B.b8n.prototype={
$1(d){return d.e==this.a.a},
$S:419}
B.b8o.prototype={
$1(d){return d.d},
$S:188}
B.b8p.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:135}
B.b8q.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:E.b.fk(w,new B.b8k(d))}w=x==null?null:x.d
return w==null?"":w},
$S:1344}
B.b8k.prototype={
$1(d){return d.a==this.a},
$S:26}
B.b8r.prototype={
$1(d){return d.length!==0},
$S:17}
B.b8s.prototype={
$1(d){return d.a==this.a.c},
$S:179}
B.bmN.prototype={
$1(d){return d.iQ()},
$S:157}
B.bGt.prototype={
$1(d){var x,w,v,u,t
y.P.a(d)
x=J.a0(d)
w=x.h(d,"id")
v=x.h(d,"type")
u=x.h(d,"price")!=null?A.kn(J.aq(x.h(d,"price"))):null
t=x.h(d,"title")
x.h(d,"type_title")
return new B.B6(w,v,u,t,x.h(d,"currency_code"))},
$S:z+0}
B.bGI.prototype={
$1(d){return B.d8H(y.P.a(d))},
$S:z+1}
B.bGK.prototype={
$1(d){return d.iQ()},
$S:157}
B.bXE.prototype={
$1(d){return d.iQ()},
$S:157};(function installTearOffs(){var x=a._static_1
x(B,"dgQ","dAu",2)})();(function inheritance(){var x=a.inheritMany
x(A.H,[B.jB,B.B6,B.rS])
x(A.cl,[B.b8l,B.b8m,B.b8n,B.b8o,B.b8p,B.b8q,B.b8k,B.b8r,B.b8s,B.bmN,B.bGt,B.bGI,B.bGK,B.bXE])
x(A.fY,[B.hr,B.hu])})()
A.ch(b.typeUniverse,JSON.parse('{"hr":{"fY":[]},"hu":{"fY":[]},"iY":{"fY":[]}}'))
var y=(function rtii(){var x=A.G
return{o:x("u<B6>"),S:x("u<dn>"),Y:x("D<dn>"),j:x("D<@>"),P:x("z<f,@>"),f:x("B6"),X:x("rS"),N:x("f"),h:x("hv"),z:x("@"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.na=A.a(x(["spot","food","others"]),A.G("u<f>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYW","PB",()=>$.hx().glG(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_245",e:"endPart",h:b})})($__dart_deferred_initializers__,"8YD6JBfZc3SLqvXZh5LyuAhyz/w=");