((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_242",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,C,B={
cSH(d){var x=J.a_(d)
return new B.jp(x.h(d,"x"),x.h(d,"y"),x.h(d,"id"),x.h(d,"group"),x.h(d,"order_product_ticket"),x.h(d,"type"),x.h(d,"state"),x.h(d,"title"),null,x.h(d,"product"),null)},
jp:function jp(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b6I:function b6I(d){this.a=d},
b6J:function b6J(d){this.a=d},
b6K:function b6K(d){this.a=d},
b6L:function b6L(){},
b6M:function b6M(d){this.a=d},
b6N:function b6N(d){this.a=d},
b6H:function b6H(d){this.a=d},
b6O:function b6O(){},
b6P:function b6P(d){this.a=d},
d2E(d){var x,w,v,u,t,s,r,q=y.N,p=A.H(q,y.Y)
for(x=y.S,w=0;w<3;++w)p.m(0,D.n9[w],A.a([],x))
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.J)(d),++w){v=d[w]
u=v.Q
if(u==null)u=""
p.h(0,E.b.p(D.n9,u)?u:E.b.ga_(D.n9)).push(v)}t=A.H(q,y.h)
for(w=0;w<3;++w){s=D.n9[w]
if(p.h(0,s).length!==0){q=p.h(0,s)
q.toString
r=new A.G(q,new B.bkX(),A.P(q).i("G<1,h>")).br(0," | ")}else r=""
t.m(0,s,new A.hj(new A.hC(),r))}return t},
bkX:function bkX(){},
AU:function AU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h},
d5Q(d){var x="products",w=A.a([],y.o),v=J.a_(d),u=y.j
if(u.b(v.h(d,x))){u=J.aU(u.a(v.h(d,x)),new B.bED(),y.f)
w=A.A(u,u.$ti.i("a0.E"))}return new B.rC(v.h(d,"id"),v.h(d,"note"),v.h(d,"ticket_symbol"),w)},
rC:function rC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bED:function bED(){},
L7(d){var x=null
if(d.length===0)return A.n("Not Set",x)
switch(d){case"ordered":case"expired":return A.n("Ordered",x)
case"paid":return A.n("Paid",x)
case"sent":return A.n("Sent",x)
case"used":return A.n("Used",x)
case"storno":return A.n("Storno",x)
default:return d}},
dxE(d){return d+";"+B.L7(d)},
d5T(d,e,f,g,h,i,j,k,l,m,n,o){return new B.hZ(i,d,o,m,n,f,k,l,h,e,j,g)},
a6F(d){var x,w,v,u,t,s,r,q,p,o=null,n="created_at",m="updated_at",l=J.a_(d),k=l.h(d,"data"),j=y.P.b(k)
if(j&&y.j.b(J.u(k,"tickets"))){x=J.aU(y.j.a(J.u(k,"tickets")),new B.bEQ(),y.X)
w=A.A(x,x.$ti.i("a0.E"))}else w=o
x=l.h(d,"id")
v=l.h(d,n)!=null?A.dU(l.h(d,n)):o
u=l.h(d,m)!=null?A.dU(l.h(d,m)):o
t=l.h(d,"price")!=null?A.k8(J.ap(l.h(d,"price"))):o
s=l.h(d,"currency_code")
r=l.h(d,"state")
j=j?J.u(k,"form"):o
q=l.h(d,"occasion")
p=l.h(d,"payment_info")
return B.d5T(v,s,k,w,j,x,l.h(d,"note_hidden"),q,p,t,r,u)},
hZ:function hZ(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bEQ:function bEQ(){},
bES:function bES(){},
d8y(d,e,f,g,h,i,j,k){return new B.hO(e,d,j,i,f,g)},
cWn(d){var x="created_at",w="updated_at",v=J.a_(d),u=v.h(d,"id"),t=v.h(d,x)!=null?A.dU(v.h(d,x)):null,s=v.h(d,w)!=null?A.dU(v.h(d,w)):null,r=v.h(d,"ticket_symbol"),q=v.h(d,"state"),p=v.h(d,"occasion")
return B.d8y(t,u,v.h(d,"note"),v.h(d,"note_hidden"),p,q,r,s)},
hO:function hO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bVA:function bVA(){},
bey(d){return B.dq4(d)},
dq4(d){var x=0,w=A.l(y.H),v
var $async$bey=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.z
x=2
return A.d($.za().c7("delete_order",A.w(["order_id",d.a],y.N,v),v),$async$bey)
case 2:return A.j(null,w)}})
return A.k($async$bey,w)},
beU(d,e){return B.dqd(d,e)},
dqd(d,e){var x=0,w=A.l(y.H),v,u,t
var $async$beU=A.f(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.z
u=J
t=J
x=2
return A.d($.za().c7("update_order_note_hidden",A.w(["order_id",d,"new_note_hidden",e],y.N,v),v),$async$beU)
case 2:if(!u.q(t.u(g,"code"),200))throw A.p(A.cz("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$beU,w)},
bfe(d,e){return B.dqt(d,e)},
dqt(d,e){var x=0,w=A.l(y.H),v,u,t
var $async$bfe=A.f(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.z
u=J
t=J
x=2
return A.d($.Pd().c7("update_ticket_note_hidden",A.w(["ticket_id",d,"new_note_hidden",e],y.N,v),v),$async$bfe)
case 2:if(!u.q(t.u(g,"code"),200))throw A.p(A.cz("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$bfe,w)}},D,F
J=c[1]
A=c[0]
E=c[2]
C=c[98]
B=a.updateHolder(c[78],B)
D=c[298]
F=c[132]
B.jp.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
b_(){var x,w,v=this,u=A.H(y.N,y.z)
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
bES(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.cn(k,new B.b6I(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.cn(k,new B.b6J(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.P(k)
t=u.i("da<1,m?>")
k=A.A(new A.da(new A.a7(k,new B.b6K(w),u.i("a7<1>")),new B.b6L(),t),t.i("x.E"))
v=k}}if(v==null)s=l
else{k=A.P(v)
u=k.i("da<1,h>")
u=new A.a7(new A.da(new A.a7(v,new B.b6M(m),k.i("a7<1>")),new B.b6N(m),u),new B.b6O(),u.i("a7<x.E>")).br(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:E.b.fK(k,new B.b6P(x))}k=r==null
q=k?l:r.aMj()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.tx()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+k:""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.o(k)+" "+u+"\n"+C.TC()+" "+A.o(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.n("Price",l)
n=m.x
n=n==null?l:n.r
return A.o(k)+" "+u+"\n"+t+": "+C.ec(d,n==null?0:n,l,0)},
gbd(d){return this.c},
gbE(d){return this.w},
sHS(d){return this.as=d}}
B.AU.prototype={
j(d){var x=this.d
return x==null?"Product #"+A.o(this.a):x},
gbd(d){return this.a},
gbE(d){return this.d}}
B.rC.prototype={
gbd(d){return this.a}}
B.hZ.prototype={
bPD(){var x,w
if(this.e==="ordered"){x=this.ay
x=x==null||x.w==null}else x=!0
if(x)return!1
w=A.cg(F.t0().a.gdA(),F.t0().a.gdq(),F.t0().a.gef(),0,0,0,0,0)
x=this.ay.w
x.toString
return w.fa(A.cg(A.dL(x),A.eG(x),A.j2(x),0,0,0,0,0))},
b_(){var x,w=this,v=w.b
v=v==null?null:v.fN()
x=w.c
x=x==null?null:x.fN()
return A.w(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.N,y.z)},
lV(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="yyyy-MM-dd",f=i.a,e=f==null,d=A.ax(e?0:f)
f=A.ax(e?0:f)
e=i.d
e=A.ax(e!=null?C.ec(a0,e,i.y,0):"")
x=i.e
if(x==null)x="ordered"
x=A.ax(x+";"+B.L7(x))
w=i.ay
if((w==null?h:w.e)!=null){v=w.e
v.toString
w=C.ec(a0,v,w.x,0)}else w=""
w=A.ax(w)
v=i.ay
if((v==null?h:v.f)!=null){u=v.f
u.toString
v=C.ec(a0,u,v.x,0)}else v=""
v=A.ax(v)
u=i.ay
if((u==null?h:u.r)!=null){t=u.r
t.toString
u=C.ec(a0,t,u.x,0)}else u=""
u=A.ax(u)
t=i.ay
s=t==null
r=s?h:t.d
r=A.ax(r==null?0:r)
if((s?h:t.w)!=null){t=A.fZ(g,h)
s=i.ay.w
s.toString
s=t.cp(s)
t=s}else t=""
t=A.ax(t)
s=i.b
s=A.ax(s!=null?A.fZ(g,h).cp(s):"")
q=A.ax(i.tx())
p=i.f
p=A.ax(p==null?h:J.u(p,"email"))
o=i.ax
o=A.ax(o!=null?new A.G(o,new B.bES(),A.P(o).i("G<1,h>")).br(0," | "):"")
n=A.ax(i.aMj())
m=i.z
m=A.ax(m==null?"":m)
l=A.ax("")
k=A.ax("")
j=i.Q
j=j==null?h:j.j(0)
return A.jR(A.w(["orderId",d,"orderSymbol",f,"orderPrice",e,"orderState",x,"paymentInfoAmount",w,"paymentInfoPaid",v,"paymentInfoReturned",u,"paymentInfoVariableSymbol",r,"orderDataDeadline",t,"orderCreatedAt",s,"orderData",q,"orderEmail",p,"ticketProducts",o,"orderDataNote",n,"orderDataNoteHidden",m,"orderHistory",l,"orderTransactions",k,"orderForm",A.ax(j==null?"":j),"isReminderSent",A.ax(String(i.ay.z))],y.N,y.h),!1,y.z)},
dB(d){return this.bJx(d)},
bJx(d){var x=0,w=A.l(y.H),v=this
var $async$dB=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:x=2
return A.d(B.bey(v),$async$dB)
case 2:return A.j(null,w)}})
return A.k($async$dB,w)},
dU(d){return this.bYR(d)},
bYR(d){var x=0,w=A.l(y.H),v=this,u,t
var $async$dU=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.d(B.beU(t,u),$async$dU)
case 2:return A.j(null,w)}})
return A.k($async$dU,w)},
iP(){return"Order #"+A.o(this.a)},
tx(){var x=this.f,w=x==null,v=A.o(w?null:J.u(x,"name"))
return v+" "+A.o(w?null:J.u(x,"surname"))},
aMj(){var x=this.f
x=x==null?null:J.u(x,"note")
return A.o(x==null?"":x)},
gbd(d){return this.a}}
B.hO.prototype={
b_(){return A.w(["state",this.e,"note_hidden",this.w],y.N,y.z)},
lV(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k=A.ax(k==null?0:k)
x=m.b
x=A.ax(x!=null?A.fZ("yyyy-MM-dd",l).cp(x):"")
w=m.d
w=A.ax(w==null?"":w)
v=m.e
if(v==null)v="ordered"
v=A.ax(v+";"+B.L7(v))
u=m.r
u=A.ax(u==null?"":u)
t=m.w
t=A.ax(t==null?"":t)
s=m.Q
r=s!=null
q=A.ax(r?"Order #"+A.o(s.a):"")
s=A.ax(r?s.tx():"")
r=m.z
r=A.ax(r!=null?new A.G(r,new B.bVA(),A.P(r).i("G<1,h>")).br(0," | "):"")
p=m.y
if(p!=null){o=p.z
o=o==null?l:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.ax(p)
o=m.x
n=A.w(["ticketId",k,"ticketCreatedAt",x,"ticketSymbol",w,"ticketState",v,"ticketNote",u,"ticketNoteHidden",t,"orderSymbol",q,"orderData",s,"ticketProducts",r,"ticketSpot",p,"ticketTotalPrice",A.ax(o!=null?C.ec(d,o,l,0):""),"ticketProductsEdit",A.ax("")],y.N,y.h)
k=m.z
n.E(0,B.d2E(k==null?A.a([],y.S):k))
return A.jR(n,!1,y.z)},
dB(d){return this.bJE(d)},
bJE(d){var x=0,w=A.l(y.H)
var $async$dB=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:return A.j(null,w)}})
return A.k($async$dB,w)},
dU(d){return this.bYY(d)},
bYY(d){var x=0,w=A.l(y.H),v=this,u,t
var $async$dU=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.d(B.bfe(t,u),$async$dU)
case 2:return A.j(null,w)}})
return A.k($async$dU,w)},
iP(){var x=this.d
return x==null?J.ap(this.a):x},
gbd(d){return this.a}}
var z=a.updateTypes(["y(hO)","AU(@)","rC(@)","h(h)"])
B.b6I.prototype={
$1(d){return d.a==this.a.e},
$S:496}
B.b6J.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.b6K.prototype={
$1(d){return d.e==this.a.a},
$S:496}
B.b6L.prototype={
$1(d){return d.d},
$S:257}
B.b6M.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:194}
B.b6N.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:E.b.fK(w,new B.b6H(d))}w=x==null?null:x.d
return w==null?"":w},
$S:1308}
B.b6H.prototype={
$1(d){return d.a==this.a},
$S:27}
B.b6O.prototype={
$1(d){return d.length!==0},
$S:18}
B.b6P.prototype={
$1(d){return d.a==this.a.c},
$S:193}
B.bkX.prototype={
$1(d){return d.iP()},
$S:149}
B.bED.prototype={
$1(d){var x,w,v,u,t
y.P.a(d)
x=J.a_(d)
w=x.h(d,"id")
v=x.h(d,"type")
u=x.h(d,"price")!=null?A.k8(J.ap(x.h(d,"price"))):null
t=x.h(d,"title")
x.h(d,"type_title")
return new B.AU(w,v,u,t,x.h(d,"currency_code"))},
$S:z+1}
B.bEQ.prototype={
$1(d){return B.d5Q(y.P.a(d))},
$S:z+2}
B.bES.prototype={
$1(d){return d.iP()},
$S:149}
B.bVA.prototype={
$1(d){return d.iP()},
$S:149};(function installTearOffs(){var x=a._static_1
x(B,"de3","dxE",3)})();(function inheritance(){var x=a.inheritMany
x(A.M,[B.jp,B.AU,B.rC])
x(A.cj,[B.b6I,B.b6J,B.b6K,B.b6L,B.b6M,B.b6N,B.b6H,B.b6O,B.b6P,B.bkX,B.bED,B.bEQ,B.bES,B.bVA])
x(A.h_,[B.hZ,B.hO])})()
A.cm(b.typeUniverse,JSON.parse('{"hZ":{"h_":[]},"hO":{"h_":[]},"iO":{"h_":[]}}'))
var y=(function rtii(){var x=A.F
return{o:x("v<AU>"),S:x("v<dj>"),Y:x("D<dj>"),j:x("D<@>"),P:x("z<h,@>"),f:x("AU"),X:x("rC"),N:x("h"),h:x("hj"),z:x("@"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.n9=A.a(x(["spot","food","others"]),A.F("v<h>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVI","Pd",()=>$.hm().glK(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_242",e:"endPart",h:b})})($__dart_deferred_initializers__,"oil2W3zw9NMAqK/SSgeG7qT7/lI=");