((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_246",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,C,B={
cKO(d){var x=J.a0(d)
return new B.je(x.h(d,"x"),x.h(d,"y"),x.h(d,"id"),x.h(d,"group"),x.h(d,"order_product_ticket"),x.h(d,"type"),x.h(d,"state"),x.h(d,"title"),null,x.h(d,"product"),null)},
je:function je(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b52:function b52(d){this.a=d},
b53:function b53(d){this.a=d},
b54:function b54(d){this.a=d},
b55:function b55(){},
b56:function b56(d){this.a=d},
b57:function b57(d){this.a=d},
b51:function b51(d){this.a=d},
b58:function b58(){},
b59:function b59(d){this.a=d},
bBE(d){var x=null
switch(d){case"ordered":case"expired":return A.q("Ordered",x)
case"paid":return A.q("Paid",x)
case"sent":return A.q("Sent",x)
case"used":return A.q("Used",x)
case"storno":return A.q("Storno",x)
default:return"???"}},
doY(d){return d+";"+B.bBE(d)},
cYD(d,e,f,g,h,i,j,k,l,m,n){return new B.hC(h,d,n,l,m,f,j,k,g,e,i)},
cYE(d){var x=null,w="created_at",v="updated_at",u="data",t=J.a0(d),s=t.h(d,"id"),r=t.h(d,w)!=null?A.ej(t.h(d,w)):x,q=t.h(d,v)!=null?A.ej(t.h(d,v)):x,p=t.h(d,"price")!=null?A.ld(J.ar(t.h(d,"price"))):x,o=t.h(d,"currency_code"),n=t.h(d,"state"),m=t.h(d,u)!=null?J.v(t.h(d,u),"form"):x,l=t.h(d,u),k=t.h(d,"occasion"),j=t.h(d,"payment_info")
return B.cYD(r,o,l,m,s,t.h(d,"note_hidden"),k,j,p,n,q)},
hC:function hC(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bBF:function bBF(){},
d0e(d,e,f,g,h,i,j,k){return new B.hD(e,d,j,i,f,g)},
d0f(d){var x="created_at",w="updated_at",v=J.a0(d),u=v.h(d,"id"),t=v.h(d,x)!=null?A.ej(v.h(d,x)):null,s=v.h(d,w)!=null?A.ej(v.h(d,w)):null,r=v.h(d,"ticket_symbol"),q=v.h(d,"state"),p=v.h(d,"occasion")
return B.d0e(t,u,v.h(d,"note"),v.h(d,"note_hidden"),p,q,r,s)},
hD:function hD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.r=h
_.w=i
_.Q=_.z=_.y=_.x=null},
bRo:function bRo(){},
cVt(d){var x,w,v,u,t,s,r,q=y.w,p=A.H(q,y.q)
for(x=y.E,w=0;w<3;++w)p.m(0,D.mX[w],A.a([],x))
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.M)(d),++w){v=d[w]
u=v.Q
if(u==null)u=""
p.h(0,E.b.p(D.mX,u)?u:E.b.gZ(D.mX)).push(v)}t=A.H(q,y.d)
for(w=0;w<3;++w){s=D.mX[w]
if(p.h(0,s).length!==0){q=p.h(0,s)
q.toString
r=new A.I(q,new B.biJ(),A.T(q).i("I<1,h>")).bw(0," | ")}else r=""
t.m(0,s,new A.ha(new A.hr(),r))}return t},
biJ:function biJ(){},
bcx(d){return B.dhA(d)},
dhA(d){var x=0,w=A.l(y.v),v,u
var $async$bcx=A.f(function(e,f){if(e===1)return A.i(f,w)
while(true)switch(x){case 0:v=y.b
x=2
return A.d($.Cn().d4("delete_order",A.x(["order_id",d.a],y.w,v),v),$async$bcx)
case 2:u=f
v=J.a0(u)
if(!J.p(v.h(u,"code"),200))throw A.o(A.cO("Deleting order failed: "+A.n(v.h(u,"code"))+": "+A.n(v.h(u,"message"))))
return A.j(null,w)}})
return A.k($async$bcx,w)},
bcP(d,e){return B.dhI(d,e)},
dhI(d,e){var x=0,w=A.l(y.v),v,u,t
var $async$bcP=A.f(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.Cn().d4("update_order_note_hidden",A.x(["order_id",d,"new_note_hidden",e],y.w,v),v),$async$bcP)
case 2:if(!u.p(t.v(g,"code"),200))throw A.o(A.cO("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$bcP,w)},
bd6(d,e){return B.dhV(d,e)},
dhV(d,e){var x=0,w=A.l(y.v),v,u,t
var $async$bd6=A.f(function(f,g){if(f===1)return A.i(g,w)
while(true)switch(x){case 0:v=y.b
u=J
t=J
x=2
return A.d($.Ov().d4("update_ticket_note_hidden",A.x(["ticket_id",d,"new_note_hidden",e],y.w,v),v),$async$bd6)
case 2:if(!u.p(t.v(g,"code"),200))throw A.o(A.cO("Saving of note has failed."))
return A.j(null,w)}})
return A.k($async$bd6,w)}},D,F
J=c[1]
A=c[0]
E=c[2]
C=c[99]
B=a.updateHolder(c[77],B)
D=c[295]
F=c[133]
B.je.prototype={
j(d){var x=this.z
x=x==null?null:x.b
return"St\u016fl "+A.n(x)+", Sedadlo "+A.n(this.w)},
b6(){var x,w,v=this,u=A.H(y.w,y.b)
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
bCz(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.as
if(k==null)x=l
else{k=k.ax
x=k==null?l:A.cP(k,new B.b52(m))}if(x!=null){k=m.as
if(k==null)w=l
else{k=k.as
w=k==null?l:A.cP(k,new B.b53(x))}if(w!=null){k=m.as
v=l
if(!(k==null)){k=k.ax
if(!(k==null)){u=A.T(k)
t=u.i("df<1,m?>")
k=A.B(new A.df(new A.ab(k,new B.b54(w),u.i("ab<1>")),new B.b55(),t),t.i("w.E"))
v=k}}if(v==null)s=l
else{k=A.T(v)
u=k.i("df<1,h>")
u=new A.ab(new A.df(new A.ab(v,new B.b56(m),k.i("ab<1>")),new B.b57(m),u),new B.b58(),u.i("ab<w.E>")).bw(0,"\n")
s=u}if(s==null)s=""
k=m.as
if(k==null)r=l
else{k=k.at
r=k==null?l:E.b.fN(k,new B.b59(x))}k=r==null
q=k?l:r.aL6()
if(q==null)q=""
if(q.length!==0)q="\n"+q
p=!k?"\n"+r.a30()+q:""
k=w.r
o=k!=null&&k.length!==0?"\n"+k:""
k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
return A.n(k)+" "+u+"\n"+C.at_()+" "+A.n(w.d)+o+"\n"+s+p}}k=m.x
k=k==null?l:k.d
u=m.w
if(u==null)u=""
t=A.q("Price",l)
n=m.x
n=n==null?l:n.r
return A.n(k)+" "+u+"\n"+t+": "+C.jv(d,n==null?0:n,l,0)},
gbh(d){return this.c},
gc0(d){return this.w},
sHE(d){return this.as=d}}
B.hC.prototype={
bN4(){var x,w
if(this.e==="ordered"){x=this.ay
x=x==null||x.w==null}else x=!0
if(x)return!1
w=A.cn(F.rz().a.gdq(),F.rz().a.gdh(),F.rz().a.geb(),0,0,0,0,0)
x=this.ay.w
x.toString
return w.fi(A.cn(A.dS(x),A.eB(x),A.iS(x),0,0,0,0,0))},
b6(){var x,w=this,v=w.b
v=v==null?null:v.fz()
x=w.c
x=x==null?null:x.fz()
return A.x(["id",w.a,"created_at",v,"updated_at",x,"price",w.d,"state",w.e,"data",w.f,"occasion",w.r,"payment_info",w.w,"currency_code",w.y,"note_hidden",w.z],y.w,y.b)},
pc(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="yyyy-MM-dd",f=i.a,e=f==null,d=A.aE(e?0:f)
f=A.aE(e?0:f)
e=i.d
e=A.aE(e!=null?C.jv(a0,e,i.y,0):"")
x=i.e
if(x==null)x="ordered"
x=A.aE(x+";"+B.bBE(x))
w=i.ay
if((w==null?h:w.e)!=null){v=w.e
v.toString
w=C.jv(a0,v,w.x,0)}else w=""
w=A.aE(w)
v=i.ay
if((v==null?h:v.f)!=null){u=v.f
u.toString
v=C.jv(a0,u,v.x,0)}else v=""
v=A.aE(v)
u=i.ay
if((u==null?h:u.r)!=null){t=u.r
t.toString
u=C.jv(a0,t,u.x,0)}else u=""
u=A.aE(u)
t=i.ay
s=t==null
r=s?h:t.d
r=A.aE(r==null?0:r)
if((s?h:t.w)!=null){t=A.h4(g,h)
s=i.ay.w
s.toString
s=t.cF(s)
t=s}else t=""
t=A.aE(t)
s=i.b
s=A.aE(s!=null?A.h4(g,h).cF(s):"")
q=A.aE(i.a30())
p=i.f
p=A.aE(p==null?h:J.v(p,"email"))
o=i.ax
o=A.aE(o!=null?new A.I(o,new B.bBF(),A.T(o).i("I<1,h>")).bw(0," | "):"")
n=A.aE(i.aL6())
m=i.z
m=A.aE(m==null?"":m)
l=A.aE("")
k=A.aE("")
j=i.Q
j=j==null?h:j.ax
return A.ln(A.x(["id",d,"order_symbol",f,"price",e,"state",x,"amount",w,"paid",v,"returned",u,"variable_symbol",r,"deadline",t,"created_at",s,"data",q,"email",p,"ticket_products",o,"note",n,"note_hidden",m,"orders_history",l,"transactions",k,"forms",A.aE(j==null?"":j)],y.w,y.d),!1,y.b)},
ev(){var x=0,w=A.l(y.v),v=this
var $async$ev=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:x=2
return A.d(B.bcx(v),$async$ev)
case 2:return A.j(null,w)}})
return A.k($async$ev,w)},
eP(){var x=0,w=A.l(y.v),v=this,u,t
var $async$eP=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.z
u.toString
x=2
return A.d(B.bcP(t,u),$async$eP)
case 2:return A.j(null,w)}})
return A.k($async$eP,w)},
kF(){return"Order #"+A.n(this.a)},
a30(){var x=this.f,w=x==null,v=A.n(w?null:J.v(x,"name"))
return v+" "+A.n(w?null:J.v(x,"surname"))},
aL6(){var x=this.f
x=x==null?null:J.v(x,"note")
return A.n(x==null?"":x)},
gbh(d){return this.a}}
B.hD.prototype={
b6(){return A.x(["state",this.e,"note_hidden",this.w],y.w,y.b)},
pc(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k=A.aE(k==null?0:k)
x=m.b
x=A.aE(x!=null?A.h4("yyyy-MM-dd",l).cF(x):"")
w=m.d
w=A.aE(w==null?"":w)
v=m.e
if(v==null)v="ordered"
v=A.aE(v+";"+B.bBE(v))
u=m.r
u=A.aE(u==null?"":u)
t=m.w
t=A.aE(t==null?"":t)
s=m.Q
r=s!=null
q=A.aE(r?"Order #"+A.n(s.a):"")
s=A.aE(r?s.a30():"")
r=m.z
r=A.aE(r!=null?new A.I(r,new B.bRo(),A.T(r).i("I<1,h>")).bw(0," | "):"")
p=m.y
if(p!=null){o=p.z
o=o==null?l:o.b
if(o==null)o=""
p=p.w
p=o+(p==null?"":p)}else p=""
p=A.aE(p)
o=m.x
n=A.x(["id",k,"created_at",x,"ticket_symbol",w,"state",v,"note",u,"note_hidden",t,"order_symbol",q,"data",s,"ticket_products",r,"ticketSpot",p,"price",A.aE(o!=null?C.jv(d,o,l,0):""),"ticketProductsEdit",A.aE("")],y.w,y.d)
k=m.Q.ax
n.H(0,B.cVt(k==null?A.a([],y.E):k))
return A.ln(n,!1,y.b)},
ev(){var x=0,w=A.l(y.v)
var $async$ev=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:return A.j(null,w)}})
return A.k($async$ev,w)},
eP(){var x=0,w=A.l(y.v),v=this,u,t
var $async$eP=A.f(function(d,e){if(d===1)return A.i(e,w)
while(true)switch(x){case 0:t=v.a
t.toString
u=v.w
u.toString
x=2
return A.d(B.bd6(t,u),$async$eP)
case 2:return A.j(null,w)}})
return A.k($async$eP,w)},
kF(){var x=this.d
return x==null?J.ar(this.a):x},
gbh(d){return this.a}}
var z=a.updateTypes(["y(nM)","y(hD)","m?(nM)","y(hC)","h(h)"])
B.b52.prototype={
$1(d){return d.a==this.a.e},
$S:z+0}
B.b53.prototype={
$1(d){return d.a==this.a.e},
$S:z+1}
B.b54.prototype={
$1(d){return d.e==this.a.a},
$S:z+0}
B.b55.prototype={
$1(d){return d.d},
$S:z+2}
B.b56.prototype={
$1(d){var x=this.a.x
return d!=(x==null?null:x.a)},
$S:246}
B.b57.prototype={
$1(d){var x,w=this.a.as
if(w==null)x=null
else{w=w.Q
x=w==null?null:E.b.fN(w,new B.b51(d))}w=x==null?null:x.d
return w==null?"":w},
$S:1234}
B.b51.prototype={
$1(d){return d.a==this.a},
$S:44}
B.b58.prototype={
$1(d){return d.length!==0},
$S:16}
B.b59.prototype={
$1(d){return d.a==this.a.c},
$S:z+3}
B.bBF.prototype={
$1(d){return d.kF()},
$S:198}
B.bRo.prototype={
$1(d){return d.kF()},
$S:198}
B.biJ.prototype={
$1(d){return d.kF()},
$S:198};(function installTearOffs(){var x=a._static_1
x(B,"d5N","doY",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.je,A.J)
w(A.ce,[B.b52,B.b53,B.b54,B.b55,B.b56,B.b57,B.b51,B.b58,B.b59,B.bBF,B.bRo,B.biJ])
w(A.ic,[B.hC,B.hD])})()
A.cc(b.typeUniverse,JSON.parse('{"hC":{"ic":[]},"hD":{"ic":[]}}'))
var y={E:A.E("u<f1>"),q:A.E("C<f1>"),w:A.E("h"),d:A.E("ha"),b:A.E("@"),v:A.E("~")};(function constants(){var x=a.makeConstList
D.mX=A.a(x(["spot","food","others"]),A.E("u<h>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dMt","Ov",()=>$.hU().gmQ(0))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_246",e:"endPart",h:b})})($__dart_deferred_initializers__,"f7MoF/VdwwlX+0kYbmaQFHUqcCE=");