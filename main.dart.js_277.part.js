((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_277",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,B={
ct5(d){var x=J.a2(d)
return new B.iM(x.h(d,"x"),x.h(d,"y"),x.h(d,"id"),x.h(d,"group"),x.h(d,"order_product_ticket"),x.h(d,"type"),x.h(d,"state"),x.h(d,"title"),null,x.h(d,"product"),null)},
iM:function iM(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b_N:function b_N(d){this.a=d},
b_O:function b_O(d){this.a=d},
b_P:function b_P(d){this.a=d},
b_Q:function b_Q(){},
b_R:function b_R(d){this.a=d},
b_S:function b_S(d){this.a=d},
b_M:function b_M(d){this.a=d},
b_T:function b_T(){},
b_U:function b_U(d){this.a=d},
bt8(d){var x=null
switch(d){case"ordered":case"expired":return A.t("Ordered",x)
case"paid":return A.t("Paid",x)
case"sent":return A.t("Sent",x)
case"used":return A.t("Used",x)
case"storno":return A.t("Storno",x)
default:return"???"}},
d3u(d){return d+";"+B.bt8(d)},
cGC(d,e,f,g,h,i,j,k,l,m,n){return new B.ha(h,d,n,l,m,f,j,k,g,e,i)},
cGD(d){var x=null,w="created_at",v="updated_at",u="data",t=J.a2(d),s=t.h(d,"id"),r=t.h(d,w)!=null?A.f0(t.h(d,w)):x,q=t.h(d,v)!=null?A.f0(t.h(d,v)):x,p=t.h(d,"price")!=null?A.lc(J.ao(t.h(d,"price"))):x,o=t.h(d,"currency_code"),n=t.h(d,"state"),m=t.h(d,u)!=null?J.v(t.h(d,u),"form"):x,l=t.h(d,u),k=t.h(d,"occasion"),j=t.h(d,"payment_info")
return B.cGC(r,o,l,m,s,t.h(d,"note_hidden"),k,j,p,n,q)},
ha:function ha(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bt9:function bt9(){},
cJd(d,e,f,g,h,i,j,k){return new B.hc(e,d,j,i,f,g)},
cJe(d){var x="created_at",w="updated_at",v=J.a2(d),u=v.h(d,"id"),t=v.h(d,x)!=null?A.f0(v.h(d,x)):null,s=v.h(d,w)!=null?A.f0(v.h(d,w)):null,r=v.h(d,"ticket_symbol"),q=v.h(d,"state"),p=v.h(d,"occasion")
return B.cJd(t,u,v.h(d,"note"),v.h(d,"note_hidden"),p,q,r,s)},
hc:function hc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bIc:function bIc(){},
cDH(d){var x,w,v,u,t,s,r,q=y.w,p=A.K(q,y.q)
for(x=y.E,w=0;w<3;++w)p.m(0,D.mb[w],A.a([],x))
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.S)(d),++w){v=d[w]
u=v.Q
if(u==null)u=""
p.h(0,E.b.n(D.mb,u)?u:E.b.gY(D.mb)).push(v)}t=A.K(q,y.d)
for(w=0;w<3;++w){s=D.mb[w]
if(p.h(0,s).length!==0){q=p.h(0,s)
q.toString
r=new A.P(q,new B.bbS(),A.Z(q).i("P<1,m>")).c4(0," | ")}else r=""
t.m(0,s,new A.h1(new A.hd(),r))}return t},
bbS:function bbS(){},
b6l(d){var x=0,w=A.k(y.v),v,u
var $async$b6l=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.d($.AP().dI("delete_order",A.z(["order_id",d.a],y.w,v),v),$async$b6l)
case 2:u=f
v=J.a2(u)
if(!J.p(v.h(u,"code"),200))throw A.n(A.cP("Deleting order failed: "+A.o(v.h(u,"code"))+": "+A.o(v.h(u,"message"))))
return A.i(null,w)}})
return A.j($async$b6l,w)},
b6D(d,e){var x=0,w=A.k(y.v),v,u,t
var $async$b6D=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.AP().dI("update_order_note_hidden",A.z(["order_id",d,"new_note_hidden",e],y.w,v),v),$async$b6D)
case 2:if(!u.p(t.v(g,"code"),200))throw A.n(A.cP("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b6D,w)},
b6V(d,e){var x=0,w=A.k(y.v),v,u,t
var $async$b6V=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.MW().dI("update_ticket_note_hidden",A.z(["ticket_id",d,"new_note_hidden",e],y.w,v),v),$async$b6V)
case 2:if(!u.p(t.v(g,"code"),200))throw A.n(A.cP("Saving of note has failed."))
return A.i(null,w)}})
return A.j($async$b6V,w)}},D,F,C
J=c[1]
A=c[0]
E=c[2]
B=a.updateHolder(c[80],B)
D=c[342]
F=c[115]
C=c[97]
B.iM.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.o(x)+", Sedadlo "+A.o(this.w)},
bo(){var x,w,v=this,u=A.K(y.w,y.b)
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
buF(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.dI(k,new B.b_N(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.dI(k,new B.b_O(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.Z(k)
t=u.i("dw<1,l?>")
t=A.H(new A.dw(new A.ah(k,new B.b_P(w),u.i("ah<1>")),new B.b_Q(),t),!0,t.i("y.E"))
v=t}}if(v==null)s=l
else{k=A.Z(v)
u=k.i("dw<1,m>")
u=new A.ah(new A.dw(new A.ah(v,new B.b_R(m),k.i("ah<1>")),new B.b_S(m),u),new B.b_T(),u.i("ah<y.E>")).c4(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:E.b.fg(k,new B.b_U(x))}k=r==null
q=k?l:r.aGV()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a0U()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+A.o(k):""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.o(k)+" "+u+"\n"+A.t("Ticket",l)+" "+A.o(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.t("Price",l)
n=m.x
n=n==null?l:n.r
return A.o(k)+" "+u+"\n"+t+": "+C.j2(d,n==null?0:n,l,0)},
gbp(d){return this.c},
gdk(d){return this.w},
sGB(d){return this.as=d}}
B.ha.prototype={
bEW(){var x,w
if(this.e==="ordered"){x=this.ay
x=x==null||x.w==null}else x=!0
if(x)return!1
w=A.cD(A.bA(F.KY()),A.bK(F.KY()),A.cJ(F.KY()),0,0,0,0,0)
x=this.ay.w
x.toString
return w.ji(A.cD(A.bA(x),A.bK(x),A.cJ(x),0,0,0,0,0))},
bo(){var x,w=this,v=w.b
v=v==null?null:v.hE()
x=w.c
x=x==null?null:x.hE()
return A.z(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.w,y.b)},
oF(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="yyyy-MM-dd",f=i.a,e=f==null,d=A.aA(e?0:f)
f=A.aA(e?0:f)
e=i.d
e=A.aA(e!=null?C.j2(a0,e,i.y,0):"")
x=i.e
if(x==null)x="ordered"
x=A.aA(x+";"+B.bt8(x))
w=i.ay
if((w==null?h:w.e)!=null){v=w.e
v.toString
w=C.j2(a0,v,w.x,0)}else w=""
w=A.aA(w)
v=i.ay
if((v==null?h:v.f)!=null){u=v.f
u.toString
v=C.j2(a0,u,v.x,0)}else v=""
v=A.aA(v)
u=i.ay
if((u==null?h:u.r)!=null){t=u.r
t.toString
u=C.j2(a0,t,u.x,0)}else u=""
u=A.aA(u)
t=i.ay
s=t==null
r=s?h:t.d
r=A.aA(r==null?0:r)
if((s?h:t.w)!=null){t=A.hW(g,h)
s=i.ay.w
s.toString
s=t.dB(s)
t=s}else t=""
t=A.aA(t)
s=i.b
s=A.aA(s!=null?A.hW(g,h).dB(s):"")
q=A.aA(i.a0U())
p=i.f
p=A.aA(p==null?h:J.v(p,"email"))
o=i.ax
o=A.aA(o!=null?new A.P(o,new B.bt9(),A.Z(o).i("P<1,m>")).c4(0," | "):"")
n=A.aA(i.aGV())
m=i.z
m=A.aA(m==null?"":m)
l=A.aA("")
k=A.aA("")
j=i.Q
j=j==null?h:j.ax
return A.kN(A.z(["id",d,"order_symbol",f,"price",e,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"created_at",s,"data",q,"email",p,"ticket_products",o,"note",n,"note_hidden",m,"orders_history",l,"transactions",k,"forms",A.aA(j==null?"":j)],y.w,y.d),!1,y.b)},
ep(){var x=0,w=A.k(y.v),v=this
var $async$ep=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:x=2
return A.d(B.b6l(v),$async$ep)
case 2:return A.i(null,w)}})
return A.j($async$ep,w)},
eK(){var x=0,w=A.k(y.v),v=this,u,t
var $async$eK=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.d(B.b6D(t,u),$async$eK)
case 2:return A.i(null,w)}})
return A.j($async$eK,w)},
li(){return"Order #"+A.o(this.a)},
a0U(){var x=this.f,w=x==null,v=A.o(w?null:J.v(x,"name"))
return v+" "+A.o(w?null:J.v(x,"surname"))},
aGV(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.o(x==null?"":x)},
gbp(d){return this.a}}
B.hc.prototype={
bo(){return A.z(["state",this.e,"note_hidden",this.w],y.w,y.b)},
oF(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k=A.aA(k==null?0:k)
x=m.b
x=A.aA(x!=null?A.hW("yyyy-MM-dd",l).dB(x):"")
w=m.d
w=A.aA(w==null?"":w)
v=m.e
if(v==null)v="ordered"
v=A.aA(v+";"+B.bt8(v))
u=m.r
u=A.aA(u==null?"":u)
t=m.w
t=A.aA(t==null?"":t)
s=m.Q
r=s!=null
q=A.aA(r?"Order #"+A.o(s.a):"")
s=A.aA(r?s.a0U():"")
r=m.z
r=A.aA(r!=null?new A.P(r,new B.bIc(),A.Z(r).i("P<1,m>")).c4(0," | "):"")
p=m.y
if(p!=null){o=p.z
o=o==null?l:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aA(p)
o=m.x
n=A.z(["id",k,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"ticketSpot",p,"price",A.aA(o!=null?C.j2(d,o,l,0):""),"ticketProductsEdit",A.aA("")],y.w,y.d)
k=m.Q.ax
n.I(0,B.cDH(k==null?A.a([],y.E):k))
return A.kN(n,!1,y.b)},
ep(){var x=0,w=A.k(y.v)
var $async$ep=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:return A.i(null,w)}})
return A.j($async$ep,w)},
eK(){var x=0,w=A.k(y.v),v=this,u,t
var $async$eK=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.d(B.b6V(t,u),$async$eK)
case 2:return A.i(null,w)}})
return A.j($async$eK,w)},
li(){var x=this.d
return x==null?J.ao(this.a):x},
gbp(d){return this.a}}
var z=a.updateTypes(["x(n4)","x(hc)","l?(n4)","x(ha)","m(m)"])
B.b_N.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.b_O.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.b_P.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.b_Q.prototype={
$1(d){return d.d},
$S:z+2}
B.b_R.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:239}
B.b_S.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:E.b.fg(w,new B.b_M(d))}w=x==null?null:x.d
return w==null?"":w},
$S:1015}
B.b_M.prototype={
$1(d){return d.a==this.a},
$S:35}
B.b_T.prototype={
$1(d){return d.length!==0},
$S:20}
B.b_U.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bt9.prototype={
$1(d){return d.li()},
$S:163}
B.bIc.prototype={
$1(d){return d.li()},
$S:163}
B.bbS.prototype={
$1(d){return d.li()},
$S:163};(function installTearOffs(){var x=a._static_1
x(B,"cOz","d3u",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.iM,A.F)
w(A.bN,[B.b_N,B.b_O,B.b_P,B.b_Q,B.b_R,B.b_S,B.b_M,B.b_T,B.b_U,B.bt9,B.bIc,B.bbS])
w(A.hI,[B.ha,B.hc])})()
A.bt(b.typeUniverse,JSON.parse('{"ha":{"hI":[]},"hc":{"hI":[]}}'))
var y={E:A.B("r<eN>"),q:A.B("C<eN>"),w:A.B("m"),d:A.B("h1"),b:A.B("@"),v:A.B("~")};(function constants(){var x=a.makeConstList
D.mb=A.a(x(["spot","food","others"]),A.B("r<m>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dq3","MW",()=>$.hB().gn3(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_277",e:"endPart",h:b})})($__dart_deferred_initializers__,"0QwrR4lKxkdkqM9aX9QcZqAxk0Q=");