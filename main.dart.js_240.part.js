((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_240",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,C,B={
cQo(d){var x=J.a_(d)
return new B.jn(x.h(d,"x"),x.h(d,"y"),x.h(d,"id"),x.h(d,"group"),x.h(d,"order_product_ticket"),x.h(d,"type"),x.h(d,"state"),x.h(d,"title"),null,x.h(d,"product"),null)},
jn:function jn(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b6b:function b6b(d){this.a=d},
b6c:function b6c(d){this.a=d},
b6d:function b6d(d){this.a=d},
b6e:function b6e(){},
b6f:function b6f(d){this.a=d},
b6g:function b6g(d){this.a=d},
b6a:function b6a(d){this.a=d},
b6h:function b6h(){},
b6i:function b6i(d){this.a=d},
aBo(d){var x=null
switch(d){case"ordered":case"expired":return A.n("Ordered",x)
case"paid":return A.n("Paid",x)
case"sent":return A.n("Sent",x)
case"used":return A.n("Used",x)
case"storno":return A.n("Storno",x)
default:return"???"}},
dva(d){return d+";"+B.aBo(d)},
d3t(d,e,f,g,h,i,j,k,l,m,n){return new B.hd(h,d,n,l,m,f,j,k,g,e,i)},
aBn(d){var x=null,w="created_at",v="updated_at",u="data",t=J.a_(d),s=t.h(d,"id"),r=t.h(d,w)!=null?A.dT(t.h(d,w)):x,q=t.h(d,v)!=null?A.dT(t.h(d,v)):x,p=t.h(d,"price")!=null?A.kV(J.ap(t.h(d,"price"))):x,o=t.h(d,"currency_code"),n=t.h(d,"state"),m=t.h(d,u)!=null?J.u(t.h(d,u),"form"):x,l=t.h(d,u),k=t.h(d,"occasion"),j=t.h(d,"payment_info")
return B.d3t(r,o,l,m,s,t.h(d,"note_hidden"),k,j,p,n,q)},
hd:function hd(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bDG:function bDG(){},
d65(d,e,f,g,h,i,j,k){return new B.hK(e,d,j,i,f,g)},
cU4(d){var x="created_at",w="updated_at",v=J.a_(d),u=v.h(d,"id"),t=v.h(d,x)!=null?A.dT(v.h(d,x)):null,s=v.h(d,w)!=null?A.dT(v.h(d,w)):null,r=v.h(d,"ticket_symbol"),q=v.h(d,"state"),p=v.h(d,"occasion")
return B.d65(t,u,v.h(d,"note"),v.h(d,"note_hidden"),p,q,r,s)},
hK:function hK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bUg:function bUg(){},
d0i(d){var x,w,v,u,t,s,r,q=y.w,p=A.H(q,y.q)
for(x=y.E,w=0;w<3;++w)p.m(0,D.n3[w],A.a([],x))
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.M)(d),++w){v=d[w]
u=v.Q
if(u==null)u=""
p.h(0,E.b.p(D.n3,u)?u:E.b.ga0(D.n3)).push(v)}t=A.H(q,y.d)
for(w=0;w<3;++w){s=D.n3[w]
if(p.h(0,s).length!==0){q=p.h(0,s)
q.toString
r=new A.G(q,new B.bkg(),A.Q(q).i("G<1,l>")).bs(0," | ")}else r=""
t.m(0,s,new A.hg(new A.hy(),r))}return t},
bkg:function bkg(){},
bdZ(d){return B.dnB(d)},
dnB(d){var x=0,w=A.k(y.v),v,u
var $async$bdZ=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.d($.CA().cb("delete_order",A.w(["order_id",d.a],y.w,v),v),$async$bdZ)
case 2:u=f
v=J.a_(u)
if(!J.q(v.h(u,"code"),200))throw A.p(A.ct("Deleting order failed: "+A.o(v.h(u,"code"))+": "+A.o(v.h(u,"message"))))
return A.i(null,w)}})
return A.j($async$bdZ,w)},
beg(d,e){return B.dnJ(d,e)},
dnJ(d,e){var x=0,w=A.k(y.v),v,u,t
var $async$beg=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.CA().cb("update_order_note_hidden",A.w(["order_id",d,"new_note_hidden",e],y.w,v),v),$async$beg)
case 2:if(!u.q(t.u(g,"code"),200))throw A.p(A.ct("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$beg,w)},
beB(d,e){return B.dnZ(d,e)},
dnZ(d,e){var x=0,w=A.k(y.v),v,u,t
var $async$beB=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.OV().cb("update_ticket_note_hidden",A.w(["ticket_id",d,"new_note_hidden",e],y.w,v),v),$async$beB)
case 2:if(!u.q(t.u(g,"code"),200))throw A.p(A.ct("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$beB,w)}},D,F
J=c[1]
A=c[0]
E=c[2]
C=c[98]
B=a.updateHolder(c[77],B)
D=c[296]
F=c[133]
B.jn.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
b2(){var x,w,v=this,u=A.H(y.w,y.b)
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
bEg(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.cu(k,new B.b6b(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.cu(k,new B.b6c(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.Q(k)
t=u.i("d8<1,m?>")
k=A.B(new A.d8(new A.a7(k,new B.b6d(w),u.i("a7<1>")),new B.b6e(),t),t.i("x.E"))
v=k}}if(v==null)s=l
else{k=A.Q(v)
u=k.i("d8<1,l>")
u=new A.a7(new A.d8(new A.a7(v,new B.b6f(m),k.i("a7<1>")),new B.b6g(m),u),new B.b6h(),u.i("a7<x.E>")).bs(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:E.b.fH(k,new B.b6i(x))}k=r==null
q=k?l:r.aLX()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.yr()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+k:""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.o(k)+" "+u+"\n"+C.au_()+" "+A.o(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.n("Price",l)
n=m.x
n=n==null?l:n.r
return A.o(k)+" "+u+"\n"+t+": "+C.h4(d,n==null?0:n,l,0)},
gbg(d){return this.c},
gbT(d){return this.w},
sHO(d){return this.as=d}}
B.hd.prototype={
bP_(){var x,w
if(this.e==="ordered"){x=this.ay
x=x==null||x.w==null}else x=!0
if(x)return!1
w=A.ck(F.rU().a.gdv(),F.rU().a.gdl(),F.rU().a.gee(),0,0,0,0,0)
x=this.ay.w
x.toString
return w.fj(A.ck(A.dK(x),A.eF(x),A.iY(x),0,0,0,0,0))},
b2(){var x,w=this,v=w.b
v=v==null?null:v.fK()
x=w.c
x=x==null?null:x.fK()
return A.w(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.w,y.b)},
mG(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="yyyy-MM-dd",f=i.a,e=f==null,d=A.aA(e?0:f)
f=A.aA(e?0:f)
e=i.d
e=A.aA(e!=null?C.h4(a0,e,i.y,0):"")
x=i.e
if(x==null)x="ordered"
x=A.aA(x+";"+B.aBo(x))
w=i.ay
if((w==null?h:w.e)!=null){v=w.e
v.toString
w=C.h4(a0,v,w.x,0)}else w=""
w=A.aA(w)
v=i.ay
if((v==null?h:v.f)!=null){u=v.f
u.toString
v=C.h4(a0,u,v.x,0)}else v=""
v=A.aA(v)
u=i.ay
if((u==null?h:u.r)!=null){t=u.r
t.toString
u=C.h4(a0,t,u.x,0)}else u=""
u=A.aA(u)
t=i.ay
s=t==null
r=s?h:t.d
r=A.aA(r==null?0:r)
if((s?h:t.w)!=null){t=A.h0(g,h)
s=i.ay.w
s.toString
s=t.cq(s)
t=s}else t=""
t=A.aA(t)
s=i.b
s=A.aA(s!=null?A.h0(g,h).cq(s):"")
q=A.aA(i.yr())
p=i.f
p=A.aA(p==null?h:J.u(p,"email"))
o=i.ax
o=A.aA(o!=null?new A.G(o,new B.bDG(),A.Q(o).i("G<1,l>")).bs(0," | "):"")
n=A.aA(i.aLX())
m=i.z
m=A.aA(m==null?"":m)
l=A.aA("")
k=A.aA("")
j=i.Q
j=j==null?h:j.j(0)
return A.kd(A.w(["orderId",d,"orderSymbol",f,"orderPrice",e,"orderState",x,"paymentInfoAmount",w,"paymentInfoPaid",v,"paymentInfoReturned",u,"paymentInfoVariableSymbol",r,"orderDataDeadline",t,"orderCreatedAt",s,"orderData",q,"orderEmail",p,"ticketProducts",o,"orderDataNote",n,"orderDataNoteHidden",m,"orderHistory",l,"orderTransactions",k,"orderForm",A.aA(j==null?"":j),"isReminderSent",A.aA(String(i.ay.z))],y.w,y.d),!1,y.b)},
dT(d){return this.bIU(d)},
bIU(d){var x=0,w=A.k(y.v),v=this
var $async$dT=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:x=2
return A.d(B.bdZ(v),$async$dT)
case 2:return A.i(null,w)}})
return A.j($async$dT,w)},
e5(d){return this.bYc(d)},
bYc(d){var x=0,w=A.k(y.v),v=this,u,t
var $async$e5=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.d(B.beg(t,u),$async$e5)
case 2:return A.i(null,w)}})
return A.j($async$e5,w)},
jO(){return"Order #"+A.o(this.a)},
yr(){var x=this.f,w=x==null,v=A.o(w?null:J.u(x,"name"))
return v+" "+A.o(w?null:J.u(x,"surname"))},
aLX(){var x=this.f
x=x==null?null:J.u(x,"note")
return A.o(x==null?"":x)},
gbg(d){return this.a}}
B.hK.prototype={
b2(){return A.w(["state",this.e,"note_hidden",this.w],y.w,y.b)},
mG(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k=A.aA(k==null?0:k)
x=m.b
x=A.aA(x!=null?A.h0("yyyy-MM-dd",l).cq(x):"")
w=m.d
w=A.aA(w==null?"":w)
v=m.e
if(v==null)v="ordered"
v=A.aA(v+";"+B.aBo(v))
u=m.r
u=A.aA(u==null?"":u)
t=m.w
t=A.aA(t==null?"":t)
s=m.Q
r=s!=null
q=A.aA(r?"Order #"+A.o(s.a):"")
s=A.aA(r?s.yr():"")
r=m.z
r=A.aA(r!=null?new A.G(r,new B.bUg(),A.Q(r).i("G<1,l>")).bs(0," | "):"")
p=m.y
if(p!=null){o=p.z
o=o==null?l:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aA(p)
o=m.x
n=A.w(["ticketId",k,"ticketCreatedAt",x,"ticketSymbol",w,"ticketState",v,"ticketNote",u,"ticketNoteHidden",t,"orderSymbol",q,"orderData",s,"ticketProducts",r,"ticketSpot",p,"ticketTotalPrice",A.aA(o!=null?C.h4(d,o,l,0):""),"ticketProductsEdit",A.aA("")],y.w,y.d)
k=m.z
n.E(0,B.d0i(k==null?A.a([],y.E):k))
return A.kd(n,!1,y.b)},
dT(d){return this.bJ0(d)},
bJ0(d){var x=0,w=A.k(y.v)
var $async$dT=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:return A.i(null,w)}})
return A.j($async$dT,w)},
e5(d){return this.bYj(d)},
bYj(d){var x=0,w=A.k(y.v),v=this,u,t
var $async$e5=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.d(B.beB(t,u),$async$e5)
case 2:return A.i(null,w)}})
return A.j($async$e5,w)},
jO(){var x=this.d
return x==null?J.ap(this.a):x},
gbg(d){return this.a}}
var z=a.updateTypes(["y(m0)","y(hK)","m?(m0)","y(hd)","l(l)"])
B.b6b.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.b6c.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.b6d.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.b6e.prototype={
$1(d){return d.d},
$S:z+2}
B.b6f.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:192}
B.b6g.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:E.b.fH(w,new B.b6a(d))}w=x==null?null:x.d
return w==null?"":w},
$S:1254}
B.b6a.prototype={
$1(d){return d.a==this.a},
$S:31}
B.b6h.prototype={
$1(d){return d.length!==0},
$S:16}
B.b6i.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bDG.prototype={
$1(d){return d.jO()},
$S:189}
B.bUg.prototype={
$1(d){return d.jO()},
$S:189}
B.bkg.prototype={
$1(d){return d.jO()},
$S:189};(function installTearOffs(){var x=a._static_1
x(B,"dbC","dva",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.jn,A.L)
w(A.cj,[B.b6b,B.b6c,B.b6d,B.b6e,B.b6f,B.b6g,B.b6a,B.b6h,B.b6i,B.bDG,B.bUg,B.bkg])
w(A.hs,[B.hd,B.hK])})()
A.cl(b.typeUniverse,JSON.parse('{"hd":{"hs":[]},"hK":{"hs":[]}}'))
var y={E:A.F("v<dX>"),q:A.F("D<dX>"),w:A.F("l"),d:A.F("hg"),b:A.F("@"),v:A.F("~")};(function constants(){var x=a.makeConstList
D.n3=A.a(x(["spot","food","others"]),A.F("v<l>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dSW","OV",()=>$.hj().glI(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_240",e:"endPart",h:b})})($__dart_deferred_initializers__,"2o8Dvpj0QA+kUo+SlfPYfY5eemo=");