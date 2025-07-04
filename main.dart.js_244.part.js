((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_244",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,C,B={
cN9(d){var x=J.a1(d)
return new B.jh(x.h(d,"x"),x.h(d,"y"),x.h(d,"id"),x.h(d,"group"),x.h(d,"order_product_ticket"),x.h(d,"type"),x.h(d,"state"),x.h(d,"title"),null,x.h(d,"product"),null)},
jh:function jh(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b5q:function b5q(d){this.a=d},
b5r:function b5r(d){this.a=d},
b5s:function b5s(d){this.a=d},
b5t:function b5t(){},
b5u:function b5u(d){this.a=d},
b5v:function b5v(d){this.a=d},
b5p:function b5p(d){this.a=d},
b5w:function b5w(){},
b5x:function b5x(d){this.a=d},
aAL(d){var x=null
switch(d){case"ordered":case"expired":return A.n("Ordered",x)
case"paid":return A.n("Paid",x)
case"sent":return A.n("Sent",x)
case"used":return A.n("Used",x)
case"storno":return A.n("Storno",x)
default:return"???"}},
drw(d){return d+";"+B.aAL(d)},
d06(d,e,f,g,h,i,j,k,l,m,n){return new B.hE(h,d,n,l,m,f,j,k,g,e,i)},
bCo(d){var x=null,w="created_at",v="updated_at",u="data",t=J.a1(d),s=t.h(d,"id"),r=t.h(d,w)!=null?A.ea(t.h(d,w)):x,q=t.h(d,v)!=null?A.ea(t.h(d,v)):x,p=t.h(d,"price")!=null?A.kP(J.aq(t.h(d,"price"))):x,o=t.h(d,"currency_code"),n=t.h(d,"state"),m=t.h(d,u)!=null?J.u(t.h(d,u),"form"):x,l=t.h(d,u),k=t.h(d,"occasion"),j=t.h(d,"payment_info")
return B.d06(r,o,l,m,s,t.h(d,"note_hidden"),k,j,p,n,q)},
hE:function hE(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bCp:function bCp(){},
d2H(d,e,f,g,h,i,j,k){return new B.hG(e,d,j,i,f,g)},
cQN(d){var x="created_at",w="updated_at",v=J.a1(d),u=v.h(d,"id"),t=v.h(d,x)!=null?A.ea(v.h(d,x)):null,s=v.h(d,w)!=null?A.ea(v.h(d,w)):null,r=v.h(d,"ticket_symbol"),q=v.h(d,"state"),p=v.h(d,"occasion")
return B.d2H(t,u,v.h(d,"note"),v.h(d,"note_hidden"),p,q,r,s)},
hG:function hG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bSy:function bSy(){},
cXW(d){var x,w,v,u,t,s,r,q=y.w,p=A.J(q,y.q)
for(x=y.E,w=0;w<3;++w)p.m(0,D.n0[w],A.a([],x))
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.M)(d),++w){v=d[w]
u=v.Q
if(u==null)u=""
p.h(0,E.b.p(D.n0,u)?u:E.b.gZ(D.n0)).push(v)}t=A.J(q,y.d)
for(w=0;w<3;++w){s=D.n0[w]
if(p.h(0,s).length!==0){q=p.h(0,s)
q.toString
r=new A.I(q,new B.bji(),A.R(q).i("I<1,l>")).bv(0," | ")}else r=""
t.m(0,s,new A.he(new A.hu(),r))}return t},
bji:function bji(){},
bd2(d){return B.dk6(d)},
dk6(d){var x=0,w=A.k(y.v),v,u
var $async$bd2=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.d($.Cs().cI("delete_order",A.w(["order_id",d.a],y.w,v),v),$async$bd2)
case 2:u=f
v=J.a1(u)
if(!J.q(v.h(u,"code"),200))throw A.p(A.cy("Deleting order failed: "+A.o(v.h(u,"code"))+": "+A.o(v.h(u,"message"))))
return A.i(null,w)}})
return A.j($async$bd2,w)},
bdk(d,e){return B.dkd(d,e)},
dkd(d,e){var x=0,w=A.k(y.v),v,u,t
var $async$bdk=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.Cs().cI("update_order_note_hidden",A.w(["order_id",d,"new_note_hidden",e],y.w,v),v),$async$bdk)
case 2:if(!u.q(t.u(g,"code"),200))throw A.p(A.cy("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$bdk,w)},
bdE(d,e){return B.dkr(d,e)},
dkr(d,e){var x=0,w=A.k(y.v),v,u,t
var $async$bdE=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.OF().cI("update_ticket_note_hidden",A.w(["ticket_id",d,"new_note_hidden",e],y.w,v),v),$async$bdE)
case 2:if(!u.q(t.u(g,"code"),200))throw A.p(A.cy("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$bdE,w)}},D,F
J=c[1]
A=c[0]
E=c[2]
C=c[99]
B=a.updateHolder(c[77],B)
D=c[300]
F=c[133]
B.jh.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
b6(){var x,w,v=this,u=A.J(y.w,y.b)
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
bDv(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.cz(k,new B.b5q(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.cz(k,new B.b5r(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.R(k)
t=u.i("d8<1,m?>")
k=A.B(new A.d8(new A.a8(k,new B.b5s(w),u.i("a8<1>")),new B.b5t(),t),t.i("x.E"))
v=k}}if(v==null)s=l
else{k=A.R(v)
u=k.i("d8<1,l>")
u=new A.a8(new A.d8(new A.a8(v,new B.b5u(m),k.i("a8<1>")),new B.b5v(m),u),new B.b5w(),u.i("a8<x.E>")).bv(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:E.b.fN(k,new B.b5x(x))}k=r==null
q=k?l:r.aLA()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a3g()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+k:""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.o(k)+" "+u+"\n"+C.ato()+" "+A.o(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.n("Price",l)
n=m.x
n=n==null?l:n.r
return A.o(k)+" "+u+"\n"+t+": "+C.h3(d,n==null?0:n,l,0)},
gbi(d){return this.c},
gc_(d){return this.w},
sHL(d){return this.as=d}}
B.hE.prototype={
bNZ(){var x,w
if(this.e==="ordered"){x=this.ay
x=x==null||x.w==null}else x=!0
if(x)return!1
w=A.co(F.rL().a.gdt(),F.rL().a.gdj(),F.rL().a.gec(),0,0,0,0,0)
x=this.ay.w
x.toString
return w.fj(A.co(A.dI(x),A.eD(x),A.iW(x),0,0,0,0,0))},
b6(){var x,w=this,v=w.b
v=v==null?null:v.fP()
x=w.c
x=x==null?null:x.fP()
return A.w(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.w,y.b)},
pe(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="yyyy-MM-dd",f=i.a,e=f==null,d=A.aC(e?0:f)
f=A.aC(e?0:f)
e=i.d
e=A.aC(e!=null?C.h3(a0,e,i.y,0):"")
x=i.e
if(x==null)x="ordered"
x=A.aC(x+";"+B.aAL(x))
w=i.ay
if((w==null?h:w.e)!=null){v=w.e
v.toString
w=C.h3(a0,v,w.x,0)}else w=""
w=A.aC(w)
v=i.ay
if((v==null?h:v.f)!=null){u=v.f
u.toString
v=C.h3(a0,u,v.x,0)}else v=""
v=A.aC(v)
u=i.ay
if((u==null?h:u.r)!=null){t=u.r
t.toString
u=C.h3(a0,t,u.x,0)}else u=""
u=A.aC(u)
t=i.ay
s=t==null
r=s?h:t.d
r=A.aC(r==null?0:r)
if((s?h:t.w)!=null){t=A.hk(g,h)
s=i.ay.w
s.toString
s=t.cR(s)
t=s}else t=""
t=A.aC(t)
s=i.b
s=A.aC(s!=null?A.hk(g,h).cR(s):"")
q=A.aC(i.a3g())
p=i.f
p=A.aC(p==null?h:J.u(p,"email"))
o=i.ax
o=A.aC(o!=null?new A.I(o,new B.bCp(),A.R(o).i("I<1,l>")).bv(0," | "):"")
n=A.aC(i.aLA())
m=i.z
m=A.aC(m==null?"":m)
l=A.aC("")
k=A.aC("")
j=i.Q
j=j==null?h:j.j(0)
return A.lt(A.w(["orderId",d,"orderSymbol",f,"orderPrice",e,"orderState",x,"paymentInfoAmount",w,"paymentInfoPaid",v,"paymentInfoReturned",u,"paymentInfoVariableSymbol",r,"orderDataDeadline",t,"orderCreatedAt",s,"orderData",q,"orderEmail",p,"ticketProducts",o,"orderDataNote",n,"orderDataNoteHidden",m,"orderHistory",l,"orderTransactions",k,"orderForm",A.aC(j==null?"":j),"isReminderSent",A.aC(String(i.ay.z))],y.w,y.d),!1,y.b)},
ew(){var x=0,w=A.k(y.v),v=this
var $async$ew=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(B.bd2(v),$async$ew)
case 2:return A.i(null,w)}})
return A.j($async$ew,w)},
eQ(){var x=0,w=A.k(y.v),v=this,u,t
var $async$eQ=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.d(B.bdk(t,u),$async$eQ)
case 2:return A.i(null,w)}})
return A.j($async$eQ,w)},
kH(){return"Order #"+A.o(this.a)},
a3g(){var x=this.f,w=x==null,v=A.o(w?null:J.u(x,"name"))
return v+" "+A.o(w?null:J.u(x,"surname"))},
aLA(){var x=this.f
x=x==null?null:J.u(x,"note")
return A.o(x==null?"":x)},
gbi(d){return this.a}}
B.hG.prototype={
b6(){return A.w(["state",this.e,"note_hidden",this.w],y.w,y.b)},
pe(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k=A.aC(k==null?0:k)
x=m.b
x=A.aC(x!=null?A.hk("yyyy-MM-dd",l).cR(x):"")
w=m.d
w=A.aC(w==null?"":w)
v=m.e
if(v==null)v="ordered"
v=A.aC(v+";"+B.aAL(v))
u=m.r
u=A.aC(u==null?"":u)
t=m.w
t=A.aC(t==null?"":t)
s=m.Q
r=s!=null
q=A.aC(r?"Order #"+A.o(s.a):"")
s=A.aC(r?s.a3g():"")
r=m.z
r=A.aC(r!=null?new A.I(r,new B.bSy(),A.R(r).i("I<1,l>")).bv(0," | "):"")
p=m.y
if(p!=null){o=p.z
o=o==null?l:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aC(p)
o=m.x
n=A.w(["ticketId",k,"ticketCreatedAt",x,"ticketSymbol",w,"ticketState",v,"ticketNote",u,"ticketNoteHidden",t,"orderSymbol",q,"orderData",s,"ticketProducts",r,"ticketSpot",p,"ticketTotalPrice",A.aC(o!=null?C.h3(d,o,l,0):""),"ticketProductsEdit",A.aC("")],y.w,y.d)
k=m.Q.ax
n.H(0,B.cXW(k==null?A.a([],y.E):k))
return A.lt(n,!1,y.b)},
ew(){var x=0,w=A.k(y.v)
var $async$ew=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:return A.i(null,w)}})
return A.j($async$ew,w)},
eQ(){var x=0,w=A.k(y.v),v=this,u,t
var $async$eQ=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.d(B.bdE(t,u),$async$eQ)
case 2:return A.i(null,w)}})
return A.j($async$eQ,w)},
kH(){var x=this.d
return x==null?J.aq(this.a):x},
gbi(d){return this.a}}
var z=a.updateTypes(["y(nU)","y(hG)","m?(nU)","y(hE)","l(l)"])
B.b5q.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.b5r.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.b5s.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.b5t.prototype={
$1(d){return d.d},
$S:z+2}
B.b5u.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:188}
B.b5v.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:E.b.fN(w,new B.b5p(d))}w=x==null?null:x.d
return w==null?"":w},
$S:1244}
B.b5p.prototype={
$1(d){return d.a==this.a},
$S:29}
B.b5w.prototype={
$1(d){return d.length!==0},
$S:16}
B.b5x.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bCp.prototype={
$1(d){return d.kH()},
$S:186}
B.bSy.prototype={
$1(d){return d.kH()},
$S:186}
B.bji.prototype={
$1(d){return d.kH()},
$S:186};(function installTearOffs(){var x=a._static_1
x(B,"d8f","drw",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.jh,A.K)
w(A.cj,[B.b5q,B.b5r,B.b5s,B.b5t,B.b5u,B.b5v,B.b5p,B.b5w,B.b5x,B.bCp,B.bSy,B.bji])
w(A.ij,[B.hE,B.hG])})()
A.cf(b.typeUniverse,JSON.parse('{"hE":{"ij":[]},"hG":{"ij":[]}}'))
var y={E:A.E("v<dZ>"),q:A.E("D<dZ>"),w:A.E("l"),d:A.E("he"),b:A.E("@"),v:A.E("~")};(function constants(){var x=a.makeConstList
D.n0=A.a(x(["spot","food","others"]),A.E("v<l>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dP7","OF",()=>$.hL().gmo(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_244",e:"endPart",h:b})})($__dart_deferred_initializers__,"Le2W2Q7/dCRLxYQtoHOaZAek0A0=");